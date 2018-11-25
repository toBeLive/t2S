import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-carousel-basic',
  templateUrl: './carousel-basic.html'
})

export class NgbdCarouselBasic {

  images = [1, 2, 3, 4, 5].map(() => `http://t2studio.org/wp-content/uploads/2018/11/pc_${Math.floor(Math.random() * (5 + 1))}.jpg`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = true;
  }
}

