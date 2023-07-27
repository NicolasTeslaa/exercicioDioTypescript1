import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loanAmount: number): void => {
    if (this.validateStatus()) {
      this.balance += loanAmount;
      loanAmount += loanAmount;
      console.log('Empréstimo realizado com sucesso!', loanAmount);
    } else {
      console.log('Não foi possível realizar o empréstimo. Verifique o status da conta.');
    }
  }
}
