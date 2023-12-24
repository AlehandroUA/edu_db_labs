# Реалізація інформаційного та програмного забезпечення

В рамках проєкту розробляється: 
## SQL-скрипт для створення на початкового наповнення бази даних

```sql
-- -----------------------------------------------------
-- Schema project_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `project_db`;
USE `project_db` ;

-- -----------------------------------------------------
-- Table `project_db`.`roles`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`roles` ;

CREATE TABLE IF NOT EXISTS `project_db`.`roles` (
   `Id` INT NOT NULL AUTO_INCREMENT,
   `Name` VARCHAR(30) NULL DEFAULT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    UNIQUE INDEX `Name` (`Name` ASC) VISIBLE);

-- -----------------------------------------------------
-- Table `project_db`.`users`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`users` ;

CREATE TABLE IF NOT EXISTS `project_db`.`users` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Login` VARCHAR(45) NOT NULL,
    `Picture` MEDIUMBLOB NOT NULL,
    `Password` BLOB NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `Role` VARCHAR(30) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    UNIQUE INDEX `Login` (`Login` ASC) VISIBLE,
    UNIQUE INDEX `Email` (`Email` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `project_db`.`members`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`members` ;

CREATE TABLE IF NOT EXISTS `project_db`.`members` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `RoleId` INT NOT NULL,
    `UserId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `roleFK_idx` (`RoleId` ASC) VISIBLE,
    INDEX `userFK_idx` (`UserId` ASC) VISIBLE,
    CONSTRAINT `roleFK`
    FOREIGN KEY (`RoleId`)
    REFERENCES `project_db`.`roles` (`Id`),
    CONSTRAINT `userFK`
    FOREIGN KEY (`UserId`)
    REFERENCES `project_db`.`users` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`projects`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`projects` ;

CREATE TABLE IF NOT EXISTS `project_db`.`projects` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Description` VARCHAR(100) NOT NULL,
    `Status` VARCHAR(20) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE);

-- -----------------------------------------------------
-- Table `project_db`.`payments`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`payments` ;

CREATE TABLE IF NOT EXISTS `project_db`.`payments` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `CardNumber` INT NOT NULL,
    `CardCVV` INT NOT NULL,
    `CardExpireDate` DATETIME NOT NULL,
    `Email` VARCHAR(50) NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `payments_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`permissions`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`permissions` ;

CREATE TABLE IF NOT EXISTS `project_db`.`permissions` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Permission` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE);


-- -----------------------------------------------------
-- Table `project_db`.`projects_members`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`projects_members` ;

CREATE TABLE IF NOT EXISTS `project_db`.`projects_members` (
    `MemberId` INT NOT NULL,
    `ProjectId` INT NOT NULL,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    INDEX `MemberId` (`MemberId` ASC) VISIBLE,
    CONSTRAINT `projects_members_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`),
    CONSTRAINT `projects_members_ibfk_2`
    FOREIGN KEY (`MemberId`)
    REFERENCES `project_db`.`members` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`reviews`
-- -----------------------------------------------------

DROP TABLE IF EXISTS `project_db`.`reviews` ;

CREATE TABLE IF NOT EXISTS `project_db`.`reviews` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Text` VARCHAR(100) NOT NULL,
    `Rate` INT NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `reviews_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- -----------------------------------------------------
-- Table `project_db`.`role_grant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project_db`.`role_grant` ;

CREATE TABLE IF NOT EXISTS `project_db`.`role_grant` (
   `RoleId` INT NOT NULL,
   `PermissionId` INT NOT NULL,
    INDEX `RoleId` (`RoleId` ASC) VISIBLE,
    INDEX `PermissionId` (`PermissionId` ASC) VISIBLE,
    CONSTRAINT `role_grant_ibfk_1`
    FOREIGN KEY (`RoleId`)
    REFERENCES `project_db`.`roles` (`Id`),
    CONSTRAINT `role_grant_ibfk_2`
    FOREIGN KEY (`PermissionId`)
    REFERENCES `project_db`.`permissions` (`Id`));


-- -----------------------------------------------------
-- Table `project_db`.`tasks`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `project_db`.`tasks` ;

CREATE TABLE IF NOT EXISTS `project_db`.`tasks` (
    `Id` INT NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(50) NOT NULL,
    `Developer` VARCHAR(45) NOT NULL,
    `Status` VARCHAR(20) NOT NULL,
    `Deadline` DATETIME NOT NULL,
    `ProjectId` INT NOT NULL,
    PRIMARY KEY (`Id`),
    UNIQUE INDEX `Id` (`Id` ASC) VISIBLE,
    INDEX `ProjectId` (`ProjectId` ASC) VISIBLE,
    CONSTRAINT `tasks_ibfk_1`
    FOREIGN KEY (`ProjectId`)
    REFERENCES `project_db`.`projects` (`Id`));

-- Inserting data into the roles table
INSERT INTO `project_db`.`roles` (`Name`) VALUES
('Teamlead'),
('Developer'),
('Admin');

-- Inserting data into the users table
INSERT INTO `project_db`.`users` (`Login`, `Picture`, `Password`, `Email`, `Role`) VALUES
('admin_user', 'admin_picture_blob', 'admin_password_blob', 'admin@example.com', 'Teamlead'),
('dev_user1', 'dev_picture_blob1', 'dev_password_blob1', 'dev1@example.com', 'Developer'),
('dev_user2', 'dev_picture_blob2', 'dev_password_blob2', 'dev2@example.com', 'Developer'),
('manager_user', 'manager_picture_blob', 'manager_password_blob', 'manager@example.com', 'Admin');

-- Inserting data into the members table
INSERT INTO `project_db`.`members` (`RoleId`, `UserId`) VALUES
(1, 1),
(2, 2),
(2, 3),
(3, 4);

-- Inserting data into the projects table
INSERT INTO `project_db`.`projects` (`Name`, `Description`, `Status`) VALUES
('Project A', 'Description for Project A', 'Active'),
('Project B', 'Description for Project B', 'Inactive'),
('Project C', 'Description for Project C', 'Pending');

-- Inserting data into the permissions table
INSERT INTO `project_db`.`permissions` (`Permission`) VALUES
('Read'),
('Write'),
('Execute');

-- Inserting data into the role_grant table
INSERT INTO `project_db`.`role_grant` (`RoleId`, `PermissionId`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 3),
(3, 2),
(3, 3);
-- Inserting data into the payments table
INSERT INTO `project_db`.`payments` (`Id`, `CardNumber`, `CardCVV`, `CardExpireDate`, `Email`, `ProjectId`) VALUES
(1, 123456, 123, '2023-12-31', 'payment1@example.com', 1),
(2, 987654, 456, '2023-11-30', 'payment2@example.com', 2),
(3, 111122, 789, '2023-10-31', 'payment3@example.com', 3);

-- Inserting data into the projects_members table
INSERT INTO `project_db`.`projects_members` (`MemberId`, `ProjectId`) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 3);

-- Inserting data into the reviews table
INSERT INTO `project_db`.`reviews` (`Text`, `Rate`, `ProjectId`) VALUES
('Good project!', 5, 1),
('Could be better', 3, 2),
('Excellent work', 5, 3);

-- Inserting data into the tasks table
INSERT INTO `project_db`.`tasks` (`Name`, `Developer`, `Status`, `Deadline`, `ProjectId`) VALUES
('Task 1', 'dev_user1', 'In Progress', '2023-11-15', 1),
('Task 2', 'dev_user2', 'To Do', '2023-12-01', 2),
('Task 3', 'dev_user1', 'Completed', '2023-10-31', 3);


```

- RESTfull сервіс для управління даними

### Головний файл

```python
from flask import Flask

app = Flask(__name__);
    
from payments_controller import *
```

### Payments Controller 

```python
from app import app
from flask import request
from payments_model import Payments

payments = Payments();


@app.route("/payments")
def get_all_payments():
    return payments.get_all_payments();

@app.route("/payment/<id>")
def get_payment_by_id(id):
    return payments.get_payment_by_id(id);

@app.route("/payment/projectId/<Projectid>")
def get_payments_by_project_id(Projectid):
    return payments.get_payments_by_project_id(Projectid);

@app.route("/payment/add", methods=["POST"])
def add_payment():
    return payments.add_payment(request.form);

@app.route("/payment/update", methods=["PUT"])
def update_payment():
    return payments.update_payment(request.form);

@app.route("/payment/delete/<id>", methods=["DELETE"])
def delete_payment(id):
    return payments.delete_payment(id);
```

### Payments Model

```py
import json
import mysql.connector
import base64

class Payments:
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost",user="root",password="db12345!",database='project_db');
            self.cur = self.con.cursor(dictionary=True);
            self.con.autocommit = True;
            print("succesful connection");
        except:
            print("failed");
    

    def get_all_payments(self):
        self.cur.execute("SELECT * FROM payments")
        return_value = self.cur.fetchall();

        if(not (self.cur.rowcount > 0)):
            return_value = {"message":"There is no payments", "error": "Not Found", "status code": 404}
        
        return return_value;


    def get_payment_by_id(self,id):
        self.cur.execute(f"SELECT * FROM payments WHERE Id='{id}'")
        return_value = self.cur.fetchall();

        if(not (self.cur.rowcount > 0)):
            return_value = {"message":"There is no payment with such id", "error": "Not Found", "status code": 404}
        
        return return_value;


    def get_payments_by_project_id(self,ProjectId):
        self.cur.execute(f"SELECT * FROM payments WHERE ProjectId='{ProjectId}'")
        return_value = self.cur.fetchall();

        if(not (self.cur.rowcount > 0)):
            return_value = {"message":"There is no payment that has such ProjectId", "error": "Not Found", "status code": 404}
        
        self.cur.execute(f"SELECT * FROM projects WHERE Id='{ProjectId}'")
        self.cur.fetchall();

        if(not (self.cur.rowcount > 0)):
            return_value = {"message":"There is no project with such id", "error": "Not Found", "status code": 404}

        return return_value;


    def add_payment(self,data):
        data = dict(data);
        return_value = "";
        if (len(data) == 5):
            self.cur.execute(f"SELECT * FROM projects WHERE Id={data["ProjectId"]}");
            result = self.cur.fetchall();
            if(self.cur.rowcount != 0):
                self.cur.execute(f"""INSERT INTO payments (CardNumber,CardCVV,CardExpireDate,Email,ProjectId)
                values ('{data["CardNumber"]}', '{data["CardCVV"]}', '{data["CardExpireDate"]}', '{data["Email"]}', {data["ProjectId"]})""");
                return_value = {"message":"Successfully added to database", "status code": 200};
            else:
                return_value = {"message":"There is no project with such id", "error": "Not Found", "status code": 404};
        else:
            return_value = {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400};
        
        return return_value;

    def update_payment(self,data):
        if(len(dict(data)) == 6):
            self.cur.execute(f"SELECT * FROM projects WHERE Id={data["ProjectId"]}");
            result = self.cur.fetchall();
            if(self.cur.rowcount != 0):
                self.cur.execute(f"""UPDATE payments SET CardNumber='{data["CardNumber"]}'
                                 ,CardCVV='{data["CardCVV"]}'
                                 ,CardExpireDate='{data["CardExpireDate"]}'
                                 ,Email='{data["Email"]}'
                                 ,ProjectId={data["ProjectId"]} 
                                 WHERE Id={data["Id"]}""");
                
                if(self.cur.rowcount != 0):
                    return_value = {"message":"Successfully updated ", "status code": 200};
                else:
                    return_value = {"message":"Nothing to update", "error": "Not Found", "status code": 404};
            else:
                return_value = {"message":"There is no project with such id", "error": "Not Found", "status code": 404};
        else:
            return_value = {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400};
        
        return return_value;


    def delete_payment(self,id):
        
        self.cur.execute(f"DELETE FROM payments WHERE Id={id}")
        return_value = "";

        if(self.cur.rowcount != 0):
            return_value = {"message":"Payment was successfully deleted", "status code": 204};
        else:
            return_value = {"message":"Nothing to delete", "error": "Not Found", "status code": 404};
    

        return return_value;



