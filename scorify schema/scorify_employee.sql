-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: scorify
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `EmpID` int NOT NULL AUTO_INCREMENT,
  `FName` varchar(45) NOT NULL,
  `LName` varchar(45) DEFAULT NULL,
  `DateOfBirth` date DEFAULT NULL,
  `Sex` varchar(1) DEFAULT NULL,
  `Address` varchar(200) DEFAULT NULL,
  `emailID` varchar(45) DEFAULT NULL,
  `Password` varchar(60) NOT NULL,
  `Salary` int DEFAULT NULL,
  `ProjectID` int DEFAULT NULL,
  `DeptID` int NOT NULL,
  PRIMARY KEY (`EmpID`),
  UNIQUE KEY `Password_UNIQUE` (`Password`),
  KEY `pID_idx` (`ProjectID`),
  KEY `dID_idx` (`DeptID`),
  KEY `p_idx` (`ProjectID`),
  CONSTRAINT `d` FOREIGN KEY (`DeptID`) REFERENCES `department` (`DeptID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `p` FOREIGN KEY (`ProjectID`) REFERENCES `project` (`ProjectID`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=1017 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1001,'Chin','Yen','1996-12-31','M','608 Airport Dr.Hampton, VA 23666','ChinYen@gmail.com','101001',110000,NULL,1),(1002,'Mike','Pearl','1996-12-29','M','173B Highland Court Port Jefferson Station, NY 11776','MikePearl@gmail.com','101002',100000,11,1),(1003,'Green','Field','1994-10-02','M','46 Locust Dr.North Royalton, OH 44133','GreenField@gmail.com','101003',80000,11,1),(1004,'Dewane','Paul','1996-03-03','M','9633 Andover St.Central Islip, NY 11722','DewanePaul@gmail.com','101004',90000,11,1),(1005,'Matts','Downey','1994-10-31','M','Central Islip, NY 11722987 Smoky Hollow Street','MattsDowney@gmail.com','101005',70000,11,1),(1006,'Parth','Gedia','1995-05-28','M','7921 S. Windfall DriveCoram, NY 11727','ParthGedia@gmail.com','101006',95000,11,1),(1007,'Atishay','Jain','1994-11-17','M','294 Iroquois LaneOrland Park, IL 60462','AtishayJain@gmail.com','101007',100000,12,1),(1008,'Anjel','Patel','1997-01-09','M','267 Pennsylvania St.Ellicott City, MD 21042','AnjelPatel@gmail.com','101008',80000,12,1),(1009,'Mukund','Varshney','1994-06-20','M','455 West Somerset St.Muskego, WI 53150','MukundVarshney@gmail.com','101009',90000,12,1),(1010,'Bella','Martin','1994-06-20','F','864 Parker St.Boynton Beach, FL 33435','BellaMartin@gmail.com','101010',70000,12,1),(1011,'Billie','Lopez','1994-04-19','F','61 E. San Carlos Ave,Clayton, NC 27520','BillieLopez@gmail.com','101011',95000,12,1),(1012,'Arya','Arora','1994-08-01','F','93 Lexington Avenue ,Yakima, WA 9890','AryaArora@gmail.com','101012',100000,13,1),(1013,'Paul','Evans','1994-04-07','M','7370 Lancaster St.Murfreesboro, TN 37128','PaulEvans@gmail.com','101013',80000,13,1),(1014,'Tanuja','Dev','1995-06-18','F','7896 Valley Dr.Fort Washington, MD 20744','TanujaDev@gmail.com','101014',90000,13,1),(1015,'Vijay','Samuel','1995-01-22','M','54 North Littleton Ave.Delaware, OH 43015','VijaySamuel@gmail.com','101015',70000,13,1),(1016,'Allen','Jones','1996-03-16','M','107 East Hill Field Drive Millington, TN 38053','AllenJones@gmail.com','101016',95000,13,1);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-18 17:45:04
