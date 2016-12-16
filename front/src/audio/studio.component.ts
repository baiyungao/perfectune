import { Component } from '@angular/core';

import {Material2AppAppComponent, DialogContent} from './component/m2/m2.component';

@Component({
  selector: 'studio',
  template: `
      <H1>Welcome to Clef Studio </H1>
      <p>   Score ID is  {{cores}}
      </p>
      <score [scoreId]="cores"></score>
      <m2-app>loading m2</m2-app>
        
`

})
export class StudioComponent {
  cores = 'playscore';
}