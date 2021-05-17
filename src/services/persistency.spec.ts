import { Persistency } from './persistency';

describe('Persistency', () => {
  // Executa algo após cada teste.
  afterEach(() => jest.clearAllMocks()); // Limpa os mocks

  it('should return undefined', () => {
    // System under test
    const sut = new Persistency();

    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once with "Seu pedido foi salvo."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log'); // Mock

    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Seu pedido foi salvo.');
  });
});
