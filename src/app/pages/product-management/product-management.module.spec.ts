import { ProductManagementModule } from './product-management.module';

describe('ProductManagementModule', () => {
  let productManagementModule: ProductManagementModule;

  beforeEach(() => {
    productManagementModule = new ProductManagementModule();
  });

  it('should create an instance', () => {
    expect(productManagementModule).toBeTruthy();
  });
});
