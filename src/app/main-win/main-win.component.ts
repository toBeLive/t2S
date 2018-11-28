import { Component } from '@angular/core';
import { GlobalsVariable } from '../globals';

@Component({
  selector: 'app-main-win',
  templateUrl: './main-win.component.html',
  styleUrls: ['./main-win.component.css']
})

export class MainWinComponent {

  constructor(public globalVar: GlobalsVariable) {
  }

}
