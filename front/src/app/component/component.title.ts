import { Component, Input } from '@angular/core';
import { UserService } from '../service/service.user';


@Component({
  moduleId: module.id,
  selector: 'app-title',
  templateUrl: '../template/component.title.html',
})
export class TitleComponent {
  @Input() subtitle = '';
  title = 'Ben Angular Modules';

  user = '';

  constructor(userService: UserService) {
  this.user = userService.userName;
  }
}
