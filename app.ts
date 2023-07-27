import { CompanyAccount } from "./class/CompanyAccount";
import { DioAccount } from "./class/DioAccount";


// Instanciando a conta DioAccount
const dioAccount = new DioAccount("Fulano", 12345);

// Executando os métodos da conta DioAccount
dioAccount.deposit(100); // Realiza um depósito de 100
dioAccount.getBalance(); // Exibe o saldo (deve ser 100)

dioAccount.withdraw(50); // Realiza um saque de 50
dioAccount.getBalance(); // Exibe o saldo (deve ser 50)

// Instanciando a conta CompanyAccount
const companyAccount = new CompanyAccount("Minha Empresa", 98765);

// Executando os métodos da conta CompanyAccount
companyAccount.deposit(5000); // Realiza um depósito de 5000
companyAccount.getBalance(); // Exibe o saldo (deve ser 5000)

companyAccount.getLoan(2000); // Realiza um empréstimo de 2000
companyAccount.getBalance(); // Exibe o saldo (deve ser acrescido de 2000)
