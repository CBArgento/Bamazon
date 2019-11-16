DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);
alter table products AUTO_INCREMENT = 1000;

use bamazon_db;

INSERT INFO products (product_name, department_name, price, stock_quantity)
    VALUES ("Blue Car", "toys", 5.50, 10),
           ("Red Car", "toys", 5.50, 20),
           ("Green Car", "toys", 5.50, 50),
           ("Yellow Car", "toys", 5.50, 40),
           ("Hammer", "tools",18.00, 12),
           ("Brush", "tools", 10.20, 25),
           ("Tape", "tools", 3.99, 60),
           ("Cement", "construction", 35.90, 50),
           ("Hammer", "tools", 9.70, 35),
           ("Light", "electricity", 2.50, 20),

ALTER TABLE products ADD product_sales FLOAT(10,2);
ALTER TABLE products ALTER product_sales SET DEFAULT 0.00;


);