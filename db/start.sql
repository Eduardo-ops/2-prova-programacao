create table timess(
    id serial primary key,
    nome varchar(50) not null,
    estado varchar(2) not null,
    sites varchar(50) not null,
);

insert into timess (nome, estado, sites) value ('Cruzeiro','MG','https://www.cruzeiro.com.br/');
insert into timess (nome, estado, sites) value ('São Paulo','SP','http://www.saopaulofc.net/');