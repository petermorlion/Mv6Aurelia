import {ConventionalViewStrategy} from 'aurelia-framework';

ConventionalViewStrategy.convertModuleIdToViewUrl = function(moduleId){
    let dynamicTemplates = new Set();
    dynamicTemplates.add('Aurelia/dynamic-template');
    dynamicTemplates.add('Aurelia/navigation');
    dynamicTemplates.add('Home/Contact');
    
    if (dynamicTemplates.has(moduleId)) {
        let view = moduleId.replace(/-([a-z])/gi, function(s, group1) {
            return group1.toUpperCase();
        });

        return view;
    }

    return moduleId + '.html';
};  


export class App {
    configureRouter(config, router){
        config.map([
          { route: ['','static-template'], name: 'static-template', moduleId: './static-template', nav: true, title:'Static Template' },
          { route: 'dynamic-template', name: 'dynamic-template', moduleId: './Aurelia/dynamic-template', nav: true, title:'Dynamic Template' },
          { route: 'contact', name: 'contact', moduleId: './Home/Contact', nav: true, title:'Contact' },
        ]);

        this.router = router;
    }
}