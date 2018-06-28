import { Component, OnInit } from '@angular/core';
import { OrderDetail } from '../../../shared/models/order-detail';
import { LocalDataSource } from 'ng2-smart-table';

const MOCK_DATA = {
  'id': '653678611405322',
  'user_backend_id': '653678611405324',
  'customer_name': 'Phuong TH',
  'customer_address': 'Phương Mai, Hà Nội',
  'total_products': 2,
  'total_price': 1000000,
  'price_unit': 'VND',
  'updated_at': 1529912852,
  'created_at': 1529912852,
  'user_backend_name': 'Quang LH',
  'products': [
    {
      'colors': [
        'xanh'
      ],
      'quantity': 1,
      'description': 'description : Hang vn: Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
      'id': '1529909453',
      'name': 'Giày Bóng Đá Trẻ Em TQ Nike MercurialX CR7 Xanh Lá Đen TF',
      'price': 200000,
      'price_unit': 'VND',
      'sizes': [
        40
      ]
    },
    {
      'colors': [
        'đỏ'
      ],
      'quantity': 1,
      'description': 'description : Hang vn: Giày Bóng Đá TQ Nike MagistaX Finale Xanh Ngọc TF',
      'id': '1529909454',
      'name': 'Giày Bóng Đá TQ Nike TiempoX R10 Đỏ Đen Da Thật TF',
      'price': 250000,
      'price_unit': 'VND',
      'sizes': [
        40
      ]
    }
  ]
};

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order_detail: OrderDetail = MOCK_DATA;

  settings = {
    hideSubHeader: true,
    mode: 'external',
    actions: null,
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
      id: {
        title: 'Id',
        type: '$index'
      },
      name: {
        title: 'Tên sản phẩm',
        type: 'string'
      },
      description: {
        title: 'Mô tả',
        type: 'string'
      },
      quantity: {
        title: 'Số lượng',
        type: 'number'
      },
      price: {
        title: 'Giá',
        type: 'number'
      },
      price_unit: {
        title: 'Mệnh giá',
        type: 'string'
      },
      colors: {
        title: 'Màu',
        type: 'array'
      },
      sizes: {
        title: 'Cỡ',
        type: 'array'
      },
    }
  };

  source: LocalDataSource;
  constructor() {
    this.source = new LocalDataSource();
    this.source.load(this.order_detail.products);
  }

  ngOnInit() {
  }

}
