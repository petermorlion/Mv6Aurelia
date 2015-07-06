export class App {
    configureRouter(config, router){
        config.map([
          { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
          { route: 'static-template', name: 'static-template', moduleId: './static-template', nav: true, title:'Static Template' }
        ]);

        this.router = router;
    }
}