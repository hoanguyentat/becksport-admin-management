import { ProductInOrderDetail } from './product-in-order-detail';

export interface OrderDetail {
    id: string;
    user_backend_id: string;
    customer_name: string;
    customer_address: string;
    total_products: number;
    total_price: number;
    price_unit: string;
    updated_at: number;
    created_at: number;
    user_backend_name: string;
    products: ProductInOrderDetail[];
}
