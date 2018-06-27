export interface Order {
    id: string;
    user_backend_id: string;
    customer_name: string;
    customer_address: string;
    total_products: number;
    total_price: number;
    price_unit: string;
    updated_at: Date;
    created_at: Date;
    user_backend_name: string;
}
