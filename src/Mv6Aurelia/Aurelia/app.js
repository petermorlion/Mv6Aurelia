﻿import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
    configureRouter(config, router){
        config.map([
          { route: ['','welcome'], name: 'welcome',      moduleId: './welcome',      nav: true, title:'Welcome' },
          //{ route: 'child-router', name: 'child-router', moduleId: './child-router', nav: true, title:'Child Router' }
        ]);

        this.router = router;
    }
}