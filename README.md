

## 🏦 Teste Automatizado - Banco Teste  

Este projeto utiliza **Cypress** para testar funcionalidades de um sistema bancário fictício, identificando **possíveis bugs** e garantindo a qualidade do software.  

### 📌 Funcionalidades testadas  
✅ **Saldo Atual**: Exibição correta do saldo inicial.  
✅ **Depósito**: Entrada de valor e confirmação da operação.  
✅ **Saque**: Validação da retirada de valores disponíveis.  
✅ **Transferência**: Envio de valores para outro destinatário.  

### 🐞 Bugs encontrados  
⚠️ **Modal inesperado**: A tela de "Bem-vindo ao teste" aparece a todo momento, exigindo um clique em "Entendi".  
⚠️ **Campos de entrada**: Alguns inputs não aceitam valores corretamente sem `{ force: true }`.  
⚠️ **Botões não clicáveis**: Alguns botões precisam de `.should('be.visible')` antes da interação.  

### 🚀 Solução aplicada  
🔹 O uso de `{ force: true }` garantiu a interação com elementos invisíveis.  
🔹 `.invoke("css", "display", "none")` foi usado para ocultar o modal e evitar interrupções.  
🔹 Melhorias nos seletores foram feitas para evitar falsos negativos nos testes.  

### 🛠️ Como executar os testes  
1️⃣ Clone este repositório:  
```bash
git clone https://github.com/seu-usuario/banco-teste-cypress.git
```
2️⃣ Instale as dependências:  
```bash
npm install cypress  --save
```
3️⃣ Execute os testes:  
```bash
npx cypress open
```

📢 **Sugestões e melhorias são bem-vindas!** 🚀
