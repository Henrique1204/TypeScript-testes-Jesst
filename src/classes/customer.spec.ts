import { EnterpriseCustomer, IndividualCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string
): IndividualCustomer => new IndividualCustomer(firstName, lastName, cpf);

const createEnterpriseCustomer = (
  name: string,
  cnpj: string
): EnterpriseCustomer => new EnterpriseCustomer(name, cnpj);

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Paulo', 'Souza', '000');

    expect(sut).toHaveProperty('firstName', 'Paulo');
    expect(sut).toHaveProperty('lastName', 'Souza');
    expect(sut).toHaveProperty('cpf', '000');
  });

  it('should have methods to get name and idn for individual customer', () => {
    const sut = createIndividualCustomer('Paulo', 'Souza', '000');

    expect(sut.getName()).toBe('Paulo Souza');
    expect(sut.getIDN()).toBe('000');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Udemy', '000');

    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '000');
  });

  it('should have methods to get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer('Udemy', '000');

    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('000');
  });
});
