/// <binding BeforeBuild='build' Clean='clean' />

var gulp = require("gulp"),
  rimraf = require("rimraf"),
  fs = require("fs"),
  babel = require("gulp-babel");

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
  bower: "./bower_components/",
  lib: "./" + project.webroot + "/lib/"
};

gulp.task("clean", function (cb) {
  rimraf(paths.lib, cb);
});

gulp.task("copy", ["clean"], function () {
  var bower = {
    "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
    "bootstrap-touch-carousel": "bootstrap-touch-carousel/dist/**/*.{js,css}",
    "hammer.js": "hammer.js/hammer*.{js,map}",
    "jquery": "jquery/jquery*.{js,map}",
    "jquery-validation": "jquery-validation/jquery.validate.js",
    "jquery-validation-unobtrusive": "jquery-validation-unobtrusive/jquery.validate.unobtrusive.js"
  }

  for (var destinationDir in bower) {
    gulp.src(paths.bower + bower[destinationDir])
      .pipe(gulp.dest(paths.lib + destinationDir));
  }
});

gulp.task("babel", function () {
    gulp.src(['Aurelia/**/*.js', '!Aurelia/_references.js'])
      .pipe(babel({
          "optional": ["runtime", "es7.decorators", "es7.classProperties"],
          "stage": 2,
          'modules': 'system'
      }))
      .pipe(gulp.dest('wwwroot'));
});

gulp.task('build-html', function () {
    gulp.src(['Aurelia/**/*.html'])
      .pipe(gulp.dest('wwwroot'));
});

gulp.task('build', ['copy', 'babel', 'build-html']);
