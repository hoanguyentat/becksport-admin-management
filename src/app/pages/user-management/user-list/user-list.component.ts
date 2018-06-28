import { Component, OnInit } from '@angular/core';


const MOCK_DATA = {
  'paging': {
    'page': 1,
    'total': 200,
    'page_size': 2
  },
  'data': [
    {
      'id': '653678611405325',
      'user_backend_id': '653678611405322',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    },
    {
      'id': '653678611405321',
      'user_backend_id': '653678611405324',
      'customer_name': 'Phuong TH',
      'customer_address': 'Phương Mai, Hà Nội',
      'total_products': 2,
      'total_price': 1000000,
      'price_unit': 'VND',
      'updated_at': 1529912852,
      'created_at': 1529912852,
      'user_backend_name': 'Quang LH'
    }
  ]
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
