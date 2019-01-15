import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel-basic.component.html'
})

export class NgbdCarouselBasic {

<<<<<<< HEAD
  images = [1, 2, 3, 4, 5].map((x) => 'http://t2studio.org/wp-content/uploads/2018/11/pc_' + x + '.jpg');
=======
  images = [1,2,3,4,5].map((x) => 'http://t2studio.org/wp-content/uploads/2018/11/pc_'+x+'.jpg');
>>>>>>> master

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
}

