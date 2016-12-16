import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {StudioComponent} from './studio.component';
import {ScoreComponent} from './component/score.component';
import { MaterialModule } from '@angular/material';
import {Material2AppAppComponent, DialogContent} from './component/m2/m2.component';


@NgModule({
  imports:      [BrowserModule, MaterialModule.forRoot()],
  declarations: [StudioComponent,ScoreComponent, Material2AppAppComponent, DialogContent],
  bootstrap:    [StudioComponent  ]
})
export class AudioModule { }
