# Requisitos do projeto


[x] Criação de database mongo
    [x] Criar database
    [x] nome
    [x] email
    [x] senha
[x] Criação de um usuário para validar a funcionalidade

[x] Criação de docker-compose para o kafka
  [x] Criar container para o kafka
  [x] Conseguir criar tópicos com a interface

[x] Criação de um microserviço (core-api) para a criação de usuários
  [x] Somente é possível um usuário com um único email
  [x] Senha criptografada
  [] Resolver bug da porta do kafka

[x] Criação de tópico load-login-database
  [x] Criar tópico load-login-database

[] Criação de microserviço para o carregamento de dados necessários para o login
  [] Criar serviço auth-ms-login-database-upload
  [] Receber mensagens do tópico load-login-database
  [] Salvar e-mail e senha na database

[] Criação de microserviço para login
  [] Gerar token JWT
  [] Desencriptar senha com o BCryptJS



