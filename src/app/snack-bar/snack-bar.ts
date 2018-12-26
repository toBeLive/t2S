import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'snack-bar',
  templateUrl: 'snack-bar-snack.html',
})
export class SnackBarComponent {
  constructor(public snackBar: MatSnackBar) {}

  openSnackBar() {
    this.snackBar.openFromComponent(PizzaPartyComponent, {
      duration: 500,
    });
  }
}

@Component({
  selector: 'snack-bar-snack',
  templateUrl: 'snack-bar-snack.html',
  styles: [`
    .pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
