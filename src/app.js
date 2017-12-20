import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { AuthService, FetchConfig, AuthorizeStep } from 'aurelia-auth';
import {HttpClient, json} from 'aurelia-fetch-client';

@inject(AuthService,HttpClient,FetchConfig)
export class App {
  constructor(authService,httpClient, fetchConfig) {
    this.auth = authService;
    this.httpClient=httpClient;
    this.fetchConfig=fetchConfig;
  }


  configureRouter(config, router) {
    config.title = 'Beyond';
    config.map([
      {route: [''], name: 'start', moduleId: 'views/game', nav: true, title: 'Start'},
    ]);
    this.router = router;
    //this.router.refreshNavigation()
  }



}
