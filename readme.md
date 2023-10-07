# Comunicação de Microsserviços: 

Este repositório contém uma aplicação exemplo que demonstra a comunicação entre microsserviços utilizando diversas tecnologias e ferramentas populares no desenvolvimento de aplicações distribuídas.

## Descrição

Serão criadas três APIs, sendo duas delas com Node.js, MongoDB, Mongoose, Sequelize, PostgreSQL e JWT para autenticação. Além disso, uma API com Java 11 utilizando Spring Boot, PostgreSQL, Spring Data JPA, Spring Cloud OpenFeign e JWT será desenvolvida para realizar a comunicação e integração entre essas duas tecnologias.

A comunicação assíncrona entre os serviços será estabelecida utilizando o RabbitMQ e filas de mensagens com o protocolo AMQP. Além disso, haverá comunicação síncrona entre aplicações por meio de chamadas a clientes HTTP entre as APIs, integrando-as com as tecnologias FeignClient (Spring Boot) e Axios (Node.js).

Todas as aplicações serão executadas em containers Docker usando o Docker-compose para facilitar o gerenciamento e a implantação.

Ao final deste projeto, a arquitetura completa poderá ser implantada na AWS por meio dos serviços AWS Elastic Beanstalk, Amazon RDS e Amazon CloudWatch, permitindo uma experiência completa do ciclo de desenvolvimento à implantação em ambiente de nuvem.


