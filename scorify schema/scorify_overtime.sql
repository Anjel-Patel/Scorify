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
-- Table structure for table `overtime`
--

DROP TABLE IF EXISTS `overtime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `overtime` (
  `EmpID` int NOT NULL,
  `Date` date NOT NULL,
  `Overtime` int DEFAULT NULL,
  PRIMARY KEY (`EmpID`,`Date`),
  CONSTRAINT `Eid_o` FOREIGN KEY (`EmpID`) REFERENCES `employee` (`EmpID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `overtime`
--

LOCK TABLES `overtime` WRITE;
/*!40000 ALTER TABLE `overtime` DISABLE KEYS */;
INSERT INTO `overtime` VALUES (1002,'2021-04-04',3),(1003,'2021-04-08',2),(1004,'2021-04-04',4),(1004,'2021-04-08',3),(1005,'2021-04-04',4),(1005,'2021-04-09',4),(1008,'2021-04-04',4),(1008,'2021-04-10',3),(1009,'2021-04-01',1),(1009,'2021-04-11',3),(1012,'2021-04-09',2),(1015,'2021-04-09',1),(1016,'2021-04-09',2);
/*!40000 ALTER TABLE `overtime` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_overtime_insert` AFTER INSERT ON `overtime` FOR EACH ROW begin
        UPDATE  weekly_score w
set w.final_score =  (SELECT 

            (5 - COUNT(a.Date)) * 2
        FROM
            absences a
        WHERE
            a.EmpID = w.EmpID
                AND (a.Date BETWEEN w.Dateprior AND w.Date)) + 
	(SELECT 
            COALESCE(SUM(o.overtime) * 2, 0)
        FROM
            overtime o
        WHERE
            o.EmpID = w.EmpID
                AND (o.Date BETWEEN w.Dateprior AND w.Date))+ 
                w.Satisfaction_Score * 2 + 
		(SELECT 
            ((p1.Revenue - mx.min_Revenue) * 25 / (mx.max_Revenue - mx.min_Revenue)) + 25
        FROM
            project p1
                CROSS JOIN
            (SELECT 
                MIN(Revenue) AS min_Revenue, MAX(Revenue) AS max_Revenue
            FROM
                project p2
            WHERE
                p2.DeptID = (Select e.DeptID from employee e where e.empID=w.empID) ) AS mx
        WHERE
            p1.projectID = (Select e.projectID from employee e where e.empID=w.empID))

WHERE w.empID=new.empID ;
        end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_overtime_update` AFTER UPDATE ON `overtime` FOR EACH ROW begin
        UPDATE  weekly_score w
set w.final_score =  (SELECT 

            (5 - COUNT(a.Date)) * 2
        FROM
            absences a
        WHERE
            a.EmpID = w.EmpID
                AND (a.Date BETWEEN w.Dateprior AND w.Date)) + 
	(SELECT 
            COALESCE(SUM(o.overtime) * 2, 0)
        FROM
            overtime o
        WHERE
            o.EmpID = w.EmpID
                AND (o.Date BETWEEN w.Dateprior AND w.Date))+ 
                w.Satisfaction_Score * 2 + 
		(SELECT 
            ((p1.Revenue - mx.min_Revenue) * 25 / (mx.max_Revenue - mx.min_Revenue)) + 25
        FROM
            project p1
                CROSS JOIN
            (SELECT 
                MIN(Revenue) AS min_Revenue, MAX(Revenue) AS max_Revenue
            FROM
                project p2
            WHERE
                p2.DeptID = (Select e.DeptID from employee e where e.empID=w.empID) ) AS mx
        WHERE
            p1.projectID = (Select e.projectID from employee e where e.empID=w.empID))

WHERE w.empID=new.empID;
        end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_overtime_delete` AFTER DELETE ON `overtime` FOR EACH ROW begin
        UPDATE  weekly_score w
set w.final_score =  (SELECT 

            (5 - COUNT(a.Date)) * 2
        FROM
            absences a
        WHERE
            a.EmpID = w.EmpID
                AND (a.Date BETWEEN w.Dateprior AND w.Date)) + 
	(SELECT 
            COALESCE(SUM(o.overtime) * 2, 0)
        FROM
            overtime o
        WHERE
            o.EmpID = w.EmpID
                AND (o.Date BETWEEN w.Dateprior AND w.Date))+ 
                w.Satisfaction_Score * 2 + 
		(SELECT 
            ((p1.Revenue - mx.min_Revenue) * 25 / (mx.max_Revenue - mx.min_Revenue)) + 25
        FROM
            project p1
                CROSS JOIN
            (SELECT 
                MIN(Revenue) AS min_Revenue, MAX(Revenue) AS max_Revenue
            FROM
                project p2
            WHERE
                p2.DeptID = (Select e.DeptID from employee e where e.empID=w.empID) ) AS mx
        WHERE
            p1.projectID = (Select e.projectID from employee e where e.empID=w.empID))

WHERE w.empID=old.empID ;
        end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-18 17:45:03
