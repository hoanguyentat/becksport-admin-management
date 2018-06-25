import { OrderManagementModule } from './order-management.module';

describe('OrderManagementModule', () => {
  let orderManagementModule: OrderManagementModule;

  beforeEach(() => {
    orderManagementModule = new OrderManagementModule();
  });

  it('should create an instance', () => {
    expect(orderManagementModule).toBeTruthy();
  });
});
