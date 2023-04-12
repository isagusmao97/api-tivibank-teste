# API Tivibank
Esta aplicação consome dados de um banco de dados PostgreSQL, sendo assim torna-se necessário tê-lo em sua máquina quando for utilizar e alterar dados desta api. 
A aplicação foi construída utilizando NestJs e Prisma ORM, a construção da arquitetura foi a padrão fornecida pelo Nest e pelo Prisma. 

# 🐞 Inicializando a aplicação
Para iniciar a aplicação, é preciso colocar os seguintes comandos no terminal :
- primeiro utilizamos o comando $ npm install 
- em seguida devemos gerar a migration da aplicação com o comando $ npx prisma migrate dev
- e por último podemos iniciar a aplicação com o comando $ npm run start:dev

# ❗ Observação 
Caso ao gerar a migration não for inicializado os dados inclusos no arquivo seed.ts dentro da pasta prisma, deve ser utilizado o comando $ npx prisma db seed 

# 🌱 Processo de desenvolvimento
Sobre o processo de desenvolvimento dessa aplicação, foi minha primeira experiência construindo uma API, então tive dificuldade pela falta de conhecimento nas tecnologias, porém com ajuda de pessoas importantes deu tudo certo no fim.
Sobre o Prisma, ele permite que seja possível visualizar os dados do banco basta adicionar o comando $ npx prisma studio no terminal e ele deve retornar/redirecionar para esta url http://localhost:5555/


