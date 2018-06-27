import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Quản lý sản phâm',
    icon: 'fa fa-book',
    link: '/pages/product-management',
    children: [
      {
        title: 'Danh sách sản phẩm',
        link: '/pages/product-management/list',
      },
      {
        title: 'Thêm mới sản phẩm',
        link: '/pages/product-management/add',
      },
    ],
  },
  {
    title: 'Quản lý đơn hàng',
    icon: 'fa fa-truck',
    link: '/pages/order-management',
  },
  {
    title: 'Quản lý tải khoản',
    icon: 'fa fa-user',
    link: '/pages/user-management',
  }
];

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  menu = MENU_ITEMS;

  constructor() { }

  ngOnInit() {
  }

}
