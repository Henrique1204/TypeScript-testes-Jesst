describe('TESTANDO ALGUMA COISA', () => {
  it('Descrição do teste (IT)', () => {
    const number = 1;

    expect(number).toBe(1);
  });
});

describe('TESTANDO ALGUMA COISA 2', () => {
  test('Descrição do teste (TEST)', () => {
    const number = 2;

    expect(number).not.toBe(1);
  });
});
