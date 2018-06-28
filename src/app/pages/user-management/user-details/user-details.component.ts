import { Component, OnInit } from '@angular/core';


var MOCK_DATA = {
    "id": "653678611405322",
    "username": "Phuong NM",
    "fullname": "Phuong Nguyen Minh",
    "sex": "male",
    "email": "phuongnm@bkav.com",
    "phone": "0191512355",
    "birth_day": "2018-06-01",
    "role": "ADMIN",
    "created_at": 1529913941,
    "updated_at": 1529913941
}

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
