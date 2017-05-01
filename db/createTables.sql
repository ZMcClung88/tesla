-- DROP schema IF EXISTS public;
-- create schema if not exists public;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS cars;


create table cars (
  id serial primary key,
  make varchar(15),
  model varchar(15),
  color varchar(20),
  year int,
  price varchar(10),
  batteryCapacity varchar(50)
);


create table images (
  id serial primary key,
  -- carId int references cars.id,
  carId int,
  type varchar(10),
  main boolean,
  location varchar(50)
);
--
INSERT INTO cars( make, model, color, year, price, batteryCapacity)
	VALUES ('Tesla', 'S', 'Black', 2017, '131,150', '100 kWh Performance All-Wheel Drive');
INSERT INTO cars( make, model, color, year, price, batteryCapacity)
  VALUES ('Tesla', 'S', 'Black', 2017, '131,250', '100 kWh Performance All-Wheel Drive');
INSERT INTO cars( make, model, color, year, price, batteryCapacity)
  VALUES ('Tesla', 'S', 'White', 2017, '131,350', '100 kWh Performance All-Wheel Drive');
INSERT INTO cars( make, model, color, year, price, batteryCapacity)
  VALUES ('Tesla', 'S', 'White', 2017, '131,450', '100 kWh Performance All-Wheel Drive');
INSERT INTO cars( make, model, color, year, price, batteryCapacity)
  VALUES ('Tesla', 'S', 'Red', 2017, '131,550', '100 kWh Performance All-Wheel Drive');


INSERT INTO images(carId, type, main, location) VALUES (1, 'car', true, '/images/cars/blacks.jpg');
INSERT INTO images(carId, type, main, location) VALUES (1, 'car', true, '/images/cars/blacks.jpg');
INSERT INTO images(carId, type, main, location) VALUES (1, 'car', true, '/images/cars/blacks.jpg');
INSERT INTO images(carId, type, main, location) VALUES (2, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (2, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (2, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (3, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (3, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (3, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (4, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (4, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (4, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (5, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (5, 'car', true, '/images/cars/reds.jpg');
INSERT INTO images(carId, type, main, location) VALUES (5, 'car', true, '/images/cars/reds.jpg');
