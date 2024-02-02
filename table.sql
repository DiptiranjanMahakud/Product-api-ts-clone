//prducts table
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE Products (product_uuid UUID PRIMARY KEY DEFAULT uuid_generate_v4(), product_name VARCHAR(255) NOT NULL, description TEXT, weight DECIMAL(10, 2), price DECIMAL(10, 2) NOT NULL, rating NUMERIC(2, 1) CHECK (rating >= 0 AND rating <= 5));


//insert in Products
INSERT INTO Products (product_name, description, weight, price, rating) VALUES ('Laptop', 'High-performance laptop', 2.5, 1200.00, 4.5), ('Smartphone', 'Latest smartphone model', 0.3, 800.00, 4.2), ('Headphones', 'Noise-canceling headphones', 0.2, 150.00, 4.0), ('Tablet', 'Portable tablet device', 0.8, 500.00, 4.3), ('Camera', 'Digital camera with advanced features', 1.0, 700.00, 4.8), ('Fitness Tracker', 'Health and fitness tracking device', 0.1, 50.00, 3.9), ('Smartwatch', 'Smart wearable with multiple features', 0.2, 200.00, 4.1);

//Company table
CREATE TABLE Company (company_id SERIAL PRIMARY KEY, company_name VARCHAR(255) NOT NULL, contact_person_name VARCHAR(255) NOT NULL, phone_number VARCHAR(20) NOT NULL, address TEXT NOT NULL);


//insert in Company
INSERT INTO Company (company_name, contact_person_name, phone_number, address) VALUES ('ABC Electronics', 'John Doe', '123-456-7890', '123 Main St, Cityville'), ('XYZ Gadgets', 'Jane Smith', '987-654-3210', '456 Oak St, Townsville'), ('Tech Innovators', 'Sam Johnson', '555-123-4567', '789 Elm St, Tech City'), ('Global Tech Solutions', 'Emily Brown', '222-333-4444', '321 Pine St, Techville'), ('Future Devices Ltd', 'Mark Davis', '777-888-9999', '555 Maple St, Future City'), ('Smart Devices Co.', 'Sarah White', '111-222-3333', '888 Cedar St, Smart Town'), ('Innovate Electronics', 'Chris Wilson', '333-444-5555', '999 Birch St, Innovation City');


//Company_Products table
CREATE TABLE Company_Products (company_id INT REFERENCES Company(company_id), product_id UUID REFERENCES Products(product_uuid), discount DECIMAL(5, 2) DEFAULT 0.0, available_units INT, PRIMARY KEY (company_id, product_id));

//insert in Company_Products
INSERT INTO Company_Products (company_id, product_id, discount, available_units) VALUES (1, (SELECT product_uuid FROM Products WHERE product_name = 'Laptop'), 0.1, 50), (1, (SELECT product_uuid FROM Products WHERE product_name = 'Smartphone'), 0.05, 100), (2, (SELECT product_uuid FROM Products WHERE product_name = 'Tablet'), 0.2, 30), (3, (SELECT product_uuid FROM Products WHERE product_name = 'Headphones'), 0.15, 75), (4, (SELECT product_uuid FROM Products WHERE product_name = 'Camera'), 0.3, 20), (5, (SELECT product_uuid FROM Products WHERE product_name = 'Fitness Tracker'), 0.1, 60), (6, (SELECT product_uuid FROM Products WHERE product_name = 'Smartwatch'), 0.2, 40);

