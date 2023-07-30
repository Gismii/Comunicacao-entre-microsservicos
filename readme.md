# Comunicação de Microsserviços: Aplicação Exemplo

Este repositório contém uma aplicação exemplo que demonstra a comunicação entre microsserviços utilizando diversas tecnologias e ferramentas populares no desenvolvimento de aplicações distribuídas.

## Descrição

Nessa aplicação é possível visualizar os conceitos teóricos e práticos sobre a comunicação entre microsserviços e como aplicá-los na prática. Serão criadas três APIs, sendo duas delas com Node.js, MongoDB, Mongoose, Sequelize, PostgreSQL e JWT para autenticação. Além disso, uma API com Java 11 utilizando Spring Boot, PostgreSQL, Spring Data JPA, Spring Cloud OpenFeign e JWT será desenvolvida para realizar a comunicação e integração entre essas duas tecnologias.

A comunicação assíncrona entre os serviços será estabelecida utilizando o RabbitMQ e filas de mensagens com o protocolo AMQP. Além disso, haverá comunicação síncrona entre aplicações por meio de chamadas a clientes HTTP entre as APIs, integrando-as com as tecnologias FeignClient (Spring Boot) e Axios (Node.js).

Todas as aplicações serão executadas em containers Docker usando o Docker-compose para facilitar o gerenciamento e a implantação.

Ao final deste projeto, a arquitetura completa poderá ser implantada na AWS por meio dos serviços AWS Elastic Beanstalk, Amazon RDS e Amazon CloudWatch, permitindo uma experiência completa do ciclo de desenvolvimento à implantação em ambiente de nuvem.

## Objetivos da aplicação

Entender os conceitos teóricos de arquitetura de microsserviços e arquitetura monolítica, incluindo suas comparações, vantagens e desvantagens.
Explorar a comunicação síncrona e assíncrona entre aplicações por meio de chamadas à API REST (HTTP) e filas de mensagens.
Aplicar os conhecimentos práticos, acompanhando o desenvolvimento das APIs e a comunicação entre elas.
Detalhar os métodos e status HTTP utilizados na comunicação entre os serviços.
Implementar conceitos de rastreabilidade de requisições entre microsserviços com o uso de logs nas APIs e IDs de requisições.
Compreender a configuração do ambiente de desenvolvimento e a execução dos serviços em containers Docker com arquivos de configuração de ambiente personalizados.
