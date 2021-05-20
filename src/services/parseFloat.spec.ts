import { parseFloat } from './parseFloat';

describe('parseFloat', () => {
  it('should round decimal numbers to two decimal places', () => {
    expect(parseFloat(10.102)).toBe(10.1);
  });
});
