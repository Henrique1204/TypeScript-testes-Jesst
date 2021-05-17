import { Messaging } from './messaging';

const createSut = () => new Messaging();

describe('Messaging', () => {
  // Executa algo após cada teste.
  afterEach(() => jest.clearAllMocks()); // Limpa os mocks

  it('should return undefined', () => {
    // System under test
    const sut = createSut();

    expect(sut.sendMessage('Teste')).toBeUndefined();
  });

  it('should call console.log once with "MENSAGEM ENVIADA:" and msg', () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, 'log'); // Mock

    const msg = 'Teste';
    sut.sendMessage(msg);
    expect(consoleSpy).toHaveBeenCalledWith(`MENSAGEM ENVIADA: ${msg}`);
  });
});
