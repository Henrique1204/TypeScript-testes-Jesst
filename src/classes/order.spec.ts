/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { CartItem } from './interfaces/cart-item';
import { CustomerOrder } from './interfaces/customer-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { Order } from './oder';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }

  public addItem(item: CartItem): void {}
  public removeItem(index: number): void {}

  public getTotal(): number {
    return 1;
  }

  public getTotalWithDicount(): number {
    return 1;
  }

  public isEmpty(): boolean {
    return false;
  }

  public clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  public sendMessage(msg: string): void {}
}

class PersistencyMock implements PersistencyProtocol {
  public saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  public getName(): string {
    return '';
  }

  public getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const shoppingCartMock = new ShoppingCartMock();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();

  const sut = new Order(
    shoppingCartMock,
    messagingMock,
    persistencyMock,
    customerMock
  );

  return {
    sut,
    shoppingCartMock,
    messagingMock,
    persistencyMock,
  };
};

describe('Order', () => {
  it('should not checkout if cart is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const spyShoppingCartMock = jest
      .spyOn(shoppingCartMock, 'isEmpty')
      .mockReturnValueOnce(true);

    sut.checkout();

    expect(spyShoppingCartMock).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('OPEN');
  });

  it('should not checkout if cart not is empty', () => {
    const { sut, shoppingCartMock } = createSut();
    const spyShoppingCartMock = jest.spyOn(shoppingCartMock, 'isEmpty');

    sut.checkout();

    expect(spyShoppingCartMock).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('CLOSED');
  });

  it('should send an email to customer', () => {
    const { sut, messagingMock } = createSut();
    const spyMessagingMock = jest.spyOn(messagingMock, 'sendMessage');

    sut.checkout();

    expect(spyMessagingMock).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persistencyMock } = createSut();
    const spyPersistencyMock = jest.spyOn(persistencyMock, 'saveOrder');

    sut.checkout();

    expect(spyPersistencyMock).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, shoppingCartMock } = createSut();
    const spyShoppingCartMock = jest.spyOn(shoppingCartMock, 'clear');

    sut.checkout();

    expect(spyShoppingCartMock).toHaveBeenCalledTimes(1);
  });
});
