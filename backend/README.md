## Challenge Backend

Backend da aplicação

### Para iniciar o projeto

> Voce precisa ter em sua maquina: [nodejs](https://nodejs.org/en/download/), [yarn](https://classic.yarnpkg.com/en/docs/install), [postgres](https://www.postgresql.org/download/) ou [docker](https://www.docker.com/get-started)

- Inicie seu postgres com as instruções ou as altere em **backend/ormconfig.json** para as configurações do seu banco postgres
```console
user=postgres password=123456 port=5432 
```
**ou**

- Crie um container do banco postgres
```console
docker run --name postgres -e POSTGRES_PASSWORD=123456 -p 5432:5432 -d postgres
```

- Adicione um database com o nome **postment**


Inslate as dependências do projeto
```console
yarn
```

Inicie as migrations
```console
yarn typeorm migration:run
```

Inicie o projeto em modo desenvolvimento
```console
yarn dev
```
