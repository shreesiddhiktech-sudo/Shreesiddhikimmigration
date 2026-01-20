CREATE TABLE paypal_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  status ENUM('Enabled','Disabled'),
  client_id VARCHAR(255),
  client_secret VARCHAR(255),
  environment ENUM('Sandbox','Live'),
  credit_account_id INT,
  createdAt DATETIME,
  updatedAt DATETIME
);

CREATE TABLE currency_settings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  currency_position ENUM('Left','Right'),
  thousand_separator VARCHAR(2),
  decimal_separator VARCHAR(2),
  decimal_places INT,
  createdAt DATETIME,
  updatedAt DATETIME
);


CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  picture VARCHAR(255),
  name VARCHAR(100) NOT NULL,
  company_name VARCHAR(150),
  email VARCHAR(150),
  mobile VARCHAR(20),
  currency VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
