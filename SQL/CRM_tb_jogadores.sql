-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: CRM
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `tb_jogadores`
--

DROP TABLE IF EXISTS `tb_jogadores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_jogadores` (
  `id_jogador` int NOT NULL AUTO_INCREMENT,
  `nme_jogador` varchar(45) NOT NULL,
  `pontos` int NOT NULL,
  `titulos` int NOT NULL,
  `url` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id_jogador`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_jogadores`
--

LOCK TABLES `tb_jogadores` WRITE;
/*!40000 ALTER TABLE `tb_jogadores` DISABLE KEYS */;
INSERT INTO `tb_jogadores` (`id_jogador`, `nme_jogador`, `pontos`, `titulos`, `url`) VALUES (1,'André',10,0,'https://pbs.twimg.com/profile_images/1480726600324898817/xB0ihMHB_400x400.jpg'),(2,'Arthur',23,5,'https://pps.whatsapp.net/v/t61.24694-24/140519842_474981186830882_617387831123441404_n.jpg?ccb=11-4&oh=01_AVzTQEX5DNRuvJcPZs4aKxBshWQHK5WS_Wa2iQTAW-w4Gw&oe=62A104CE'),(3,'Radson',2,0,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBG5kQd1DbA7_R3IbWwrNtjax4h3pNAC3k6-3415xPFooZGBynwZDVsySPr1nzyMDf3fQ&usqp=CAU'),(4,'Mota',5,0,'https://pps.whatsapp.net/v/t61.24694-24/171205119_546653317015598_3442480552036369989_n.jpg?ccb=11-4&oh=01_AVyulH-D-Za7QPFy1t2DB_obHj9vXk3CbgbEWpjnB8jCAQ&oe=62A0BF68'),(5,'Ivad',9,0,'https://pps.whatsapp.net/v/t61.24694-24/127038618_405077060936068_7997655407843919640_n.jpg?ccb=11-4&oh=8fe16f9d0f2f2b8d83ef1ec0425c2d07&oe=629EF7EB'),(6,'Scott',7,0,'https://pps.whatsapp.net/v/t61.24694-24/145593321_501496404595336_6143858320783271773_n.jpg?ccb=11-4&oh=01_AVwgNBHZZnL-F0sRGIp2swv3XPVIownyXR1qLzUUMMuhRg&oe=62A085F6'),(7,'Pedro',6,0,'https://pps.whatsapp.net/v/t61.24694-24/154485448_1151058625734649_2278944036432712623_n.jpg?ccb=11-4&oh=01_AVyptAORVq1VraWbQ_3PQ3o2qV5TNqxpfqQoEPUEsqIsTA&oe=629F05A9'),(8,'Bruno',20,2,'https://pps.whatsapp.net/v/t61.24694-24/262445878_407245647853093_7634234594161894079_n.jpg?ccb=11-4&oh=58499d8240bc6c913c56f3d941010205&oe=629F0452'),(9,'Lucas',6,0,'https://i.ibb.co/NnKQFbF/20220527-145807.jpg'),(10,'Clara',3,0,NULL),(11,'Jessica',3,0,'https://pps.whatsapp.net/v/t61.24694-24/264395143_101785912515722_6490997254224356508_n.jpg?ccb=11-4&oh=aec17332b0eefc98da5999e453db4df1&oe=629FC9F7');
/*!40000 ALTER TABLE `tb_jogadores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-01 15:36:34
