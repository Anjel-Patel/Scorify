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
-- Table structure for table `weekly_score`
--

DROP TABLE IF EXISTS `weekly_score`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weekly_score` (
  `EmpID` int NOT NULL,
  `WeekNo` int NOT NULL,
  `Satisfaction_Score` int DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `final_score` int DEFAULT NULL,
  `dateprior` date GENERATED ALWAYS AS ((`Date` - interval 7 day)) VIRTUAL,
  PRIMARY KEY (`EmpID`,`WeekNo`),
  CONSTRAINT `eID` FOREIGN KEY (`EmpID`) REFERENCES `employee` (`EmpID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weekly_score`
--

LOCK TABLES `weekly_score` WRITE;
/*!40000 ALTER TABLE `weekly_score` DISABLE KEYS */;
INSERT INTO `weekly_score` (`EmpID`, `WeekNo`, `Satisfaction_Score`, `Date`, `final_score`) VALUES (1002,1,8,'2021-04-06',57),(1002,2,9,'2021-04-13',53),(1003,1,8,'2021-04-06',51),(1003,2,9,'2021-04-13',55),(1004,1,9,'2021-04-06',61),(1004,2,7,'2021-04-13',55),(1005,1,7,'2021-04-06',51),(1005,2,8,'2021-04-13',55),(1006,1,8,'2021-04-06',51),(1006,2,9,'2021-04-13',53),(1007,1,8,'2021-04-06',62),(1007,2,9,'2021-04-13',66),(1008,1,9,'2021-04-06',74),(1008,2,7,'2021-04-13',60),(1009,1,7,'2021-04-06',64),(1009,2,8,'2021-04-13',68),(1010,1,8,'2021-04-06',64),(1010,2,9,'2021-04-13',64),(1011,1,8,'2021-04-06',62),(1011,2,9,'2021-04-13',66),(1012,1,9,'2021-04-06',78),(1012,2,7,'2021-04-13',76),(1013,1,7,'2021-04-06',74),(1013,2,8,'2021-04-13',76),(1014,1,8,'2021-04-06',76),(1014,2,9,'2021-04-13',78),(1015,1,8,'2021-04-06',74),(1015,2,9,'2021-04-13',80),(1016,1,9,'2021-04-06',78),(1016,2,7,'2021-04-13',76);
/*!40000 ALTER TABLE `weekly_score` ENABLE KEYS */;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_weeklyscore_insert` BEFORE INSERT ON `weekly_score` FOR EACH ROW set new.Date = DATE_ADD((select date from weekly_score where empid = new.empID and weekno = (SELECT MAX(weekNo) FROM weekly_score WHERE EmpID = new.empID )) , INTERVAL 7 DAY) */;;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_weeklyscore_insert2` BEFORE INSERT ON `weekly_score` FOR EACH ROW set new.final_score = 
			(SELECT 
            (5 - COUNT(a.Date)) * 2
        FROM
            absences a
        WHERE
            a.EmpID = New.empID
                AND (a.Date BETWEEN New.Dateprior AND New.Date)) + 
	(SELECT 
            COALESCE(SUM(o.overtime) * 2, 0)
        FROM
            overtime o
        WHERE
            o.EmpID = New.empID
                AND (o.Date BETWEEN New.Dateprior AND New.Date))+ 
                New.Satisfaction_Score * 2 + 
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
                p2.DeptID = (Select e.DeptID from employee e where e.empID=New.empID) ) AS mx
        WHERE
            p1.projectID = (Select e.projectID from employee e where e.empID=New.empID)) */;;
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
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_weeklyscore_update` BEFORE UPDATE ON `weekly_score` FOR EACH ROW set new.final_score = 
			(SELECT 
            (5 - COUNT(a.Date)) * 2
        FROM
            absences a
        WHERE
            a.EmpID = New.empID
                AND (a.Date BETWEEN New.Dateprior AND New.Date)) + 
	(SELECT 
            COALESCE(SUM(o.overtime) * 2, 0)
        FROM
            overtime o
        WHERE
            o.EmpID = New.empID
                AND (o.Date BETWEEN New.Dateprior AND New.Date))+ 
                New.Satisfaction_Score * 2 + 
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
                p2.DeptID = (Select e.DeptID from employee e where e.empID=New.empID) ) AS mx
        WHERE
            p1.projectID = (Select e.projectID from employee e where e.empID=New.empID)) */;;
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

-- Dump completed on 2021-04-18 17:45:04
