﻿# MyCommunity

## Instalação Depêndencias
Para utilização da aplicação, é necessária a instalação das depêndencias utilizadas, no qual é necessária a instalação tanto na pasta "client".
***Sendo assim realize a instalação utilizando:***
`npm install`

## Build
A aplicação está dividida em cliente e server para facilitar o desenvolvimento e segmentação das aplicações:

***Client*** (aplicativo mobile/frontend): Responsável por todas funções e chamadas de aplicações ao banco de dados, possui telas e acessos do usuário. (React Native + Node.js + Expo)
***Server*** (banco de dados/backend): Responsável por lidar com as consultas do lado cliente, onde o banco de dados está instalado. (Node.js + MongoDB)

**OBS: O banco de dados já está hospedado e não há necessidade de execução, o mesmo está em repositório privado devido a credenciais da aplicação.**

Para poder rodar as aplicações será necessário iniciar o lado cliente como o lado server (dependendo o uso pode ser iniciado apenas uma aplicação), para isso os serviços podem ser levantados da seguinte maneira:

### Iniciar Client – estando na pasta cliente “MyCommunity\client”
`npx expo start`
