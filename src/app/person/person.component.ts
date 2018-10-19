import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  user = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.user;
  }

}
