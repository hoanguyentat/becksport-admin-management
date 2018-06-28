import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Router } from '@angular/router';


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

settings = {
    hideSubHeader: true,
    mode: 'external',
    edit: {
      editButtonContent: '<i class="fa fa-edit"></i>',
      saveButtonContent: '<i class="fa fa-checkmark"></i>',
      cancelButtonContent: '<i class="fa fa-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      customer_name: {
        title: 'Tên khách hàng',
        type: 'string'
      },
      customer_address: {
        title: 'Địa chỉ',
        type: 'string'
      },
      total_products: {
        title: 'Số sản phẩm',
        type: 'number'
      },
      total_price: {
        title: 'Tổng giá',
        type: 'number'
      },
      price_unit: {
        title: 'Mệnh giá',
        type: 'string'
      },
      updated_at: {
        title: 'Cập nhập',
        type: 'number'
      },
      created_at: {
        title: 'Tạo',
        type: 'number'
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private router: Router) { }

  ngOnInit() {
  	this.source.load(MOCK_DATA.data);
  }

   onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onView(event): void {
    this.router.navigate(['pages/order-management/order-detail/', event.data.id]);
  }

}
