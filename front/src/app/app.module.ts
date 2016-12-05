import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HighlightDirective }   from './directive/hightlight';
import { TitleComponent }   from './component/component.title';
import { UserService } from './service/service.user';
import { ContactService } from './contact/contact.service';
import {ContactComponent} from './contact/contact.component';
import { AwesomePipe } from './contact/awesome.pipe';
import {HighlightDirective as ContactHighlightDirective} from './contact/highlight.directive';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,
    HighlightDirective,
    TitleComponent,
    AwesomePipe,
    ContactComponent,
    ContactHighlightDirective
                    ],
  providers: [ UserService, ContactService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
