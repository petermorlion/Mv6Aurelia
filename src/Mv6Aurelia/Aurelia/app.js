import {ConventionalViewStrategy} from 'aurelia-framework';

ConventionalViewStrategy.convertModuleIdToViewUrl = function(moduleId){
    let dynamicTemplates = new Set();
    dynamicTemplates.add('dynamic-template');

    if (dynamicTemplates.has(moduleId)) {
        let view = moduleId.replace(/-([a-z])/gi, function(s, group1) {
            return group1.toUpperCase();
        });

        return 'Aurelia/' + view;
    }

    return moduleId + '.html';
};  


export class App {
    configureRouter(config, router){
        config.map([
          { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
          { route: 'static-template', name: 'static-template', moduleId: './static-template', nav: true, title:'Static Template' },
          { route: 'dynamic-template', name: 'dynamic-template', moduleId: './dynamic-template', nav: true, title:'Dynamic Template' },
        ]);

        this.router = router;
    }
}