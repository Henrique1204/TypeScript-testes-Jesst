import { Product } from './product';

const createSut = (name: string, price: number): Product =>
  new Product(name, price);

describe('Product', () => {
  it('should have properties name and price', () => {
    const sut = createSut('Camisa', 59.0);

    expect(sut).toHaveProperty('name', 'Camisa');
    expect(sut.price).toBeCloseTo(59.0);
  });
});
