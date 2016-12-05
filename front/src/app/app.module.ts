import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HighlightDirective }   from './directive/hightlight';
import { TitleComponent }   from './component/component.title';
import { UserService } from './service/service.user';
import {APP_BASE_HREF} from '@angular/common';


/* Contact Imports */
import{ ContactModule }      from './contact/contact.module';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, ContactModule,AppRoutingModule],
  declarations: [ AppComponent,
    HighlightDirective,
    TitleComponent
   ],
  providers: [ UserService, {provide: APP_BASE_HREF, useValue : '/tuno/' }],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
