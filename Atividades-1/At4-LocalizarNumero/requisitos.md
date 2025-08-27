**RF01 – Cadastro do Conjunto**  
- O sistema deve inicializar um conjunto (Set) com 10 valores inteiros definidos pelo desenvolvedor.  

**RF02 – Entrada do Usuário**  
- O sistema deve solicitar que o usuário digite um número inteiro para busca no conjunto.  

**RF03 – Verificação de Presença**  
- O sistema deve verificar se o número digitado pelo usuário está presente no Set.  

**RF04 – Exibição de Resultado**  
- Caso o número esteja presente, o sistema deve exibir a mensagem informando que o número foi encontrado.  
- Caso o número não esteja presente, o sistema deve exibir a mensagem informando que o número não foi encontrado.  

**RF05 – Exibição de Todos os Números**  
- O sistema deve exibir todos os números presentes no Set após a verificação.  

---

## Requisitos Não Funcionais (RNF)

**RNF01 – Interface**  
- O sistema deve ser executado em **Node.js** usando o pacote `readline-sync` para entrada de dados do usuário.  

**RNF02 – Validação de Entrada**  
- O sistema deve aceitar apenas números inteiros como entrada do usuário.  

**RNF03 – Performance**  
- O sistema deve realizar a busca no Set de forma eficiente, aproveitando a característica de **acesso rápido do Set**.  

**RNF04 – Legibilidade**  
- As mensagens exibidas ao usuário devem ser claras e informativas.  
- A exibição dos elementos do Set deve ser feita de forma organizada (por exemplo, usando `console.table`).  
