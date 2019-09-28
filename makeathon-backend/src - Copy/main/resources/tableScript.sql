create schema makeathon;
use makeathon;

drop table hibernate_sequence;


drop table customer;
drop table address;

create table address( id int primary key auto_increment, street varchar(255), area varchar(255), state varchar(255), country varchar(255), pincode int(6)  );
create table customer( email varchar(50) primary key, company_name varchar(50), password varchar(50), phone_no bigint, id int references address(id));

drop table product;
create table product( p_id int primary key auto_increment, pname varchar(50), category varchar(50), location varchar(50), email varchar(50) references customer(email) );

drop table image;
create table image( img_id int primary key auto_increment, p_id int references product(p_id) );


insert into customer values ("avi@gmail.com", "infy", "abc" , 9009009001 , 1);

insert into address values( "gachibowli" ,"hyderabad" , "telangana" , "india" , 500088); 


select * from customer;
select * from address;
select * from product;
select * from image;
