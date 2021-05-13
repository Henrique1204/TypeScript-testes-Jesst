import { CartItem } from './interfaces/cart-item';
import { parseFloat } from '../services/parseFloat';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { DiscountProtocol } from './interfaces/discount-protocol';

// Uma classe "boa" é que só tem métodos que utilizam suas propriedades.
export class ShoppingCart implements ShoppingCartProtocol {
  private readonly _items: CartItem[] = [];

  constructor(private readonly discount: DiscountProtocol) {}

  public get items(): Readonly<CartItem[]> {
    return this._items;
  }

  public addItem = (item: CartItem): void => {
    this._items.push(item);
  };

  public removeItem = (index: number): void => {
    this._items.splice(index, 1);
  };

  public getTotal = (): number =>
    parseFloat(this.items.reduce((acc, { price }) => acc + price, 0));

  public getTotalWithDicount = (): number =>
    this.discount.calculate(this.getTotal());

  public isEmpty = (): boolean => !this._items.length;

  public clear = (): void => {
    console.log('O carrinho foi limpo.');
    this._items.length = 0;
  };
}
