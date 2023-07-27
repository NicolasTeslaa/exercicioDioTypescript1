
export  class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount : number): void => {
    if(this.validateStatus()){
      this.balance += amount;
      console.log('Voce depositou')
    }
  }

  withdraw = (amount : number): void => {
    if (this.validateStatus() && this.balance >= amount) {
      this.balance -= amount;
      console.log('Saque realizado com sucesso!');
    } else {
      console.log('Não foi possível realizar o saque. Verifique o saldo e o status da conta.');
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
class DioAccountWithBonus extends DioAccount {
  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount + 10; // Acrescenta 10 ao valor do depósito
      console.log('Depósito com bônus realizado com sucesso!');
    }
  }
}