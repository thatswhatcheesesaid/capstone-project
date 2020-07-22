-- MySQL dump 10.13  Distrib 8.0.20, for Linux (x86_64)
--
-- Host: localhost    Database: cheesesaid
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cheesey`
--

DROP TABLE IF EXISTS `cheesey`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cheesey` (
  `cheeseyFoodpicId` binary(16) NOT NULL,
  `cheeseyProfileId` binary(16) NOT NULL,
  `cheeseyScore` smallint unsigned NOT NULL,
  PRIMARY KEY (`cheeseyFoodpicId`,`cheeseyProfileId`),
  KEY `cheeseyFoodpicId` (`cheeseyFoodpicId`),
  KEY `cheeseyProfileId` (`cheeseyProfileId`),
  CONSTRAINT `cheesey_ibfk_1` FOREIGN KEY (`cheeseyFoodpicId`) REFERENCES `foodpic` (`foodpicId`),
  CONSTRAINT `cheesey_ibfk_2` FOREIGN KEY (`cheeseyProfileId`) REFERENCES `profile` (`profileId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cheesey`
--

LOCK TABLES `cheesey` WRITE;
/*!40000 ALTER TABLE `cheesey` DISABLE KEYS */;
INSERT INTO `cheesey` VALUES (_binary '#NS∂\Û\ÍÑZB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary '\'K!∂âÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary 'N)?∂âÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary 'N)?∂âÍùêB¨\0',_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',1),(_binary 'Zãé∂åÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary 'Zãé∂åÍùêB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',1),(_binary 'v\˜≥∆∂í\Íô-B¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary 'v\˜≥∆∂í\Íô-B¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',1),(_binary 'Æ∞\‡D∂ãÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary 'Æ∞\‡D∂ãÍùêB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',1),(_binary 'Æ∞\‡D∂ãÍùêB¨\0',_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',1),(_binary 'Æ\Œb∂ãÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary 'Æ\Œb∂ãÍùêB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',1),(_binary '¿\ı¸∂ë\Íô-B¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary '¿\ı¸∂ë\Íô-B¨\0',_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',1),(_binary '∆Éé≠∂ï\Íô-B¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary '\Â0s∂ï\Íô-B¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary '\Â0s∂ï\Íô-B¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',1),(_binary '\Â0s∂ï\Íô-B¨\0',_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',1),(_binary '\Ì\ƒ+«∂ãÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary '\Ì\ƒ+«∂ãÍùêB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',1),(_binary '\Ûêx∂ãÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary '\˜Ñ°∂ãÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary 'ˇ\Íœí∂ê\Íô-B¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',1),(_binary 'ˇ\Íœí∂ê\Íô-B¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',1);
/*!40000 ALTER TABLE `cheesey` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `foodpic`
--

DROP TABLE IF EXISTS `foodpic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `foodpic` (
  `foodpicId` binary(16) NOT NULL,
  `foodpicProfileId` binary(16) NOT NULL,
  `foodpicRestaurantId` binary(16) DEFAULT NULL,
  `foodpicCaption` varchar(144) NOT NULL,
  `foodpicUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`foodpicId`),
  KEY `foodpicProfileId` (`foodpicProfileId`),
  KEY `foodpicRestaurantId` (`foodpicRestaurantId`),
  CONSTRAINT `foodpic_ibfk_1` FOREIGN KEY (`foodpicProfileId`) REFERENCES `profile` (`profileId`),
  CONSTRAINT `foodpic_ibfk_2` FOREIGN KEY (`foodpicRestaurantId`) REFERENCES `restaurant` (`restaurantId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `foodpic`
--

LOCK TABLES `foodpic` WRITE;
/*!40000 ALTER TABLE `foodpic` DISABLE KEYS */;
INSERT INTO `foodpic` VALUES (_binary '#NS∂\Û\ÍÑZB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'wow','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593096595/bhimhzovvfr4a7juyxmj.gif'),(_binary '\'K!∂âÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'mac','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593051076/k97vfcnonm7naib0zgrn.jpg'),(_binary 'N)?∂âÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'macky chz','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593051141/ltjrpkkai1sywpu2lm3a.gif'),(_binary 'Zãé∂åÍùêB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'Baked Mac ','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593052451/eoswfh0pacfqvhblr2bb.jpg'),(_binary 'v\˜≥∆∂í\Íô-B¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'Hot Doggo mac ','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593055075/jbaqck8qkrojecmixgar.jpg'),(_binary 'ôD\Â∂\Ù\ÍÑZB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'Mac N Pizza','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593097223/vgivwf4fidnnocygjvfx.png'),(_binary '§:‰©∑¡Í£éB¨\0',_binary 'Öá`∑¡\ÍÜi˝´îc',NULL,'not cheese','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593185289/cvdq1i0gdw9lxszhykdw.png'),(_binary 'Æ∞\‡D∂ãÍùêB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'Cheesy mac ','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593052162/ftvgyzwnavwocad4rgde.jpg'),(_binary 'Æ\Œb∂ãÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'macky chz','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593052163/gggcoalaupw9bozorl8a.png'),(_binary '¿\ı¸∂ë\Íô-B¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'oh yeah','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593054770/dmuifdfduv8bx3m9svvo.jpg'),(_binary '∆Éé≠∂ï\Íô-B¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'The best mac and cheese','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593056497/zx1vg2wbl7cu92wjgrda.jpg'),(_binary '\⁄G÷∑@Í£éB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'wowwwwwwwww','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593129974/etgt0mutgobschw1tgtt.gif'),(_binary '\‹qp\Î∑1Í£éB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'grilled cheese and mac ','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593123536/wba7ikjap82gq29k07u7.jpg'),(_binary '\Â0s∂ï\Íô-B¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'BACON','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593056549/pcwi2ota4jqmu9cg4xi0.jpg'),(_binary '\Ì\ƒ+«∂ãÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'flying star','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593052268/izkiqjyt5a9kzcamnuft.png'),(_binary '\Ûêx∂ãÍùêB¨\0',_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'Nice mac N cheese! ','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593052277/xx91frqxg7dwuwju9e3d.jpg'),(_binary '\˜Ñ°∂ãÍùêB¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'nexus','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593052285/mtbyfocwa3mcvbu7j1as.png'),(_binary 'ˇ\Íœí∂ê\Íô-B¨\0',_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'maccccccccccc','https://res.cloudinary.com/thatswhatcheesesaid/image/upload/v1593054446/cjozyvnsq1ktlgxvthdt.jpg');
/*!40000 ALTER TABLE `foodpic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fork`
--

DROP TABLE IF EXISTS `fork`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fork` (
  `forkProfileId` binary(16) NOT NULL,
  `forkRestaurantId` binary(16) NOT NULL,
  `forkScore` smallint NOT NULL,
  PRIMARY KEY (`forkProfileId`,`forkRestaurantId`),
  KEY `forkProfileId` (`forkProfileId`),
  KEY `forkRestaurantId` (`forkRestaurantId`),
  CONSTRAINT `fork_ibfk_1` FOREIGN KEY (`forkProfileId`) REFERENCES `profile` (`profileId`),
  CONSTRAINT `fork_ibfk_2` FOREIGN KEY (`forkRestaurantId`) REFERENCES `restaurant` (`restaurantId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fork`
--

LOCK TABLES `fork` WRITE;
/*!40000 ALTER TABLE `fork` DISABLE KEYS */;
INSERT INTO `fork` VALUES (_binary '`¿\n†∂á\Í£c\r)©$\Õ',_binary '+‡∂î\Í°QC\È•>ò',1),(_binary '`¿\n†∂á\Í£c\r)©$\Õ',_binary 'ddê∂ö\Í†b\Ò\≈&&',1),(_binary '`¿\n†∂á\Í£c\r)©$\Õ',_binary 'Kô\€@∂ò\Í†b\Ò\≈&&',-1),(_binary 'h6õ`∂ã\Í£c\r)©$\Õ',_binary 'ddê∂ö\Í†b\Ò\≈&&',1),(_binary 'h6õ`∂ã\Í£c\r)©$\Õ',_binary '%tê∂ä\Í£c\r)©$\Õ',1),(_binary 'h6õ`∂ã\Í£c\r)©$\Õ',_binary 'Kô\€@∂ò\Í†b\Ò\≈&&',-1),(_binary 'h6õ`∂ã\Í£c\r)©$\Õ',_binary 'iA\⁄¿∂î\Í§Mô`ÖRù\”',1),(_binary 'h6õ`∂ã\Í£c\r)©$\Õ',_binary 'Ø\'\œ¿∂å\Í£c\r)©$\Õ',-1),(_binary 'h6õ`∂ã\Í£c\r)©$\Õ',_binary '\ÂœÖ\∂ê\Í°QC\È•>ò',1),(_binary 'h6õ`∂ã\Í£c\r)©$\Õ',_binary '\Î\Z\›–∂ä\Í£c\r)©$\Õ',1),(_binary 'ÑP¸\‡∑\¬\ÍÜi˝´îc',_binary '%tê∂ä\Í£c\r)©$\Õ',1),(_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',_binary 'Kô\€@∂ò\Í†b\Ò\≈&&',-1),(_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',_binary 'iA\⁄¿∂î\Í§Mô`ÖRù\”',1),(_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',_binary 'üû\∂ñ\Íì\‘!\Ì\∆H',-1),(_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',_binary '\Î\Z\›–∂ä\Í£c\r)©$\Õ',-1);
/*!40000 ALTER TABLE `fork` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profile`
--

DROP TABLE IF EXISTS `profile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profile` (
  `profileId` binary(16) NOT NULL,
  `profileActivationToken` varchar(32) DEFAULT NULL,
  `profileEmail` varchar(140) NOT NULL,
  `profileHash` char(97) NOT NULL,
  `profileName` varchar(140) NOT NULL,
  PRIMARY KEY (`profileId`),
  UNIQUE KEY `profileEmail` (`profileEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profile`
--

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;
INSERT INTO `profile` VALUES (_binary '`¿\n†∂á\Í£c\r)©$\Õ',NULL,'kadams34@cnm.edu','$argon2id$v=19$m=65536,t=3,p=1$yxQz351GqyEq0ljt2UL40g$OxrYq94H6qCUWXaE8QOvwaLWfu0zQ/k0kpko6SLolr4','Kevin'),(_binary 'h6õ`∂ã\Í£c\r)©$\Õ',NULL,'mgallegos319@cnm.edu','$argon2id$v=19$m=65536,t=3,p=1$yuLfRRGjiXW0r4Jkpa2GMg$+uF+4krtz95WAKulDI7Ot+PW3LQgn1PTQCp+SZrdKRk','mattcheez'),(_binary 'ÑP¸\‡∑\¬\ÍÜi˝´îc','dfb48f65b7fd45403ec7b3ecf2fef2dc','john@ingenuitysoftwarelabs.com','$argon2id$v=19$m=65536,t=3,p=1$J6GVwOUuVD89bnwQqEMuZg$Fh9brvNkc8BKUeuZuJkjtV1yIYaSZ5ZefRfEwAu5YKo','johnmierzwa'),(_binary 'Öá`∑¡\ÍÜi˝´îc','482ccde935aa02c97d7366a18fcbf2ac','joshuarivera@gmail.com','$argon2id$v=19$m=65536,t=3,p=1$7xp5z5rxJyfSnIVBC9VZMw$6Ih2MhYq3PMHcTsj+ZCZFwSFnPoUxiY+/paLrLARx68','Josh'),(_binary '\«0Ä\∑¿\ÍÜi˝´îc','c99bea01221bcd88815c210f89d6522b','john@johnthe.dev','$argon2id$v=19$m=65536,t=3,p=1$VRPOrVZx9UnBEPNFmPUtDg$B5YIMR0CjsALYeQopAlixxzrCCJ/yMMOvYDvAI0ptkk','JohnJohnsonRodgers'),(_binary '\Ò#}∞∂\Ò\ÍÉSµµX√∏\Ÿ',NULL,'chernandez151@cnm.edu','$argon2id$v=19$m=65536,t=3,p=1$CYEyTYYLNjuiT5rBz9xzwg$DbfF1LTLmJgsp/21xUyymhZyivHL1j1aJGZM3K6GzOw','carl');
/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `restaurantId` binary(16) NOT NULL,
  `restaurantFeaturedPic` varchar(512) NOT NULL,
  `restaurantFeaturedPicCaption` varchar(140) NOT NULL,
  `restaurantGoogleLink` varchar(140) NOT NULL,
  `restaurantName` varchar(140) NOT NULL,
  `restaurantSocialMediaUrl` varchar(140) DEFAULT NULL,
  PRIMARY KEY (`restaurantId`),
  UNIQUE KEY `restaurantName` (`restaurantName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (_binary '+‡∂î\Í°QC\È•>ò','https://kosmosabq.com/wp-content/uploads/2019/11/Kosmos-Astropub_WP_3.jpg','Picture with planets and company name','https://kosmosabq.com/','Kosmos Restaurant','https://www.facebook.com/kosmosabq/'),(_binary 'ddê∂ö\Í†b\Ò\≈&&','https://s3-media0.fl.yelpcdn.com/bphoto/L4CHDGklX8PKc2-H2CFeKA/180s.jpg','macaronni and cheese with steak, onions, and mushrooms','https://www.facebook.com/TheShopBreakfastandLunch/','The Shop Breakfast and Lunch','https://www.instagram.com/theshopbreakfastandlunch/'),(_binary '%tê∂ä\Í£c\r)©$\Õ','https://www.abqjournal.com/wp-content/uploads/2018/11/14/ven18_ja_16nov_2eats.jpg','mac n cheese with bread crumbs','https://www.standarddiner.com/','Standard Diner','https://www.facebook.com/StandardDiner505'),(_binary 'Kô\€@∂ò\Í†b\Ò\≈&&','https://crackerbarrel.com/-/media/CrackerBarrel/Menu/Dinner/Vegetables-n-Sides/Mac_n_Cheese_Veg_N_Sides_780x390.jpg?h=390&w=780&la=en&hash=72908540BC4A32686BEF5AE535C10C8E2D6B683C','macaronni and cheese in a small dish','https://crackerbarrel.com/','Cracker Barrel','https://www.facebook.com/crackerbarrel'),(_binary 'iA\⁄¿∂î\Í§Mô`ÖRù\”','https://www.flyingstarcafe.com/wp-content/uploads/2019/03/Mac-and-Cheese-2019-mar.jpg','Picture of mac and cheese with shaved cheese','https://www.flyingstarcafe.com/','Flying Star Cafe','https://www.facebook.com/flyingstarcafe'),(_binary 'üû\∂ñ\Íì\‘!\Ì\∆H','https://media-cdn.tripadvisor.com/media/photo-l/14/ec/52/85/homemade-mac-n-cheese.jpg','Picture of mac and cheese','https://www.vinaigretteonline.com/','Vinaigrette','https://www.facebook.com/VinaigretteNM/'),(_binary 'Ø\'\œ¿∂å\Í£c\r)©$\Õ','https://pbs.twimg.com/media/EWjhmjUWsA0i8lo.jpg','Mac and cheese with breadcrums in a bowl','https://nexusbrewery.com/','Nexus Brewery & Restaurant','https://www.facebook.com/nexusbrewery'),(_binary '\ƒBÄ∂ó\Í†b\Ò\≈&&','https://static.wixstatic.com/media/368c14_f2825c7808e84cd7871ece498bdee3a9~mv2_d_2400_2400_s_4_2.png/v1/crop/x_152,y_828,w_2100,h_832/fill/w_443,h_177,al_c,q_85,usm_0.66_1.00_0.01/368c14_f2825c7808e84cd7871ece498bdee3a9~mv2_d_2400_2400_s_4_2.webp','sprig of rosemary above word rosemary','https://www.rosemaryabq.com/','Rosemary','https://www.facebook.com/pg/RosemaryAbq/'),(_binary '\ÂœÖ\∂ê\Í°QC\È•>ò','https://popmenucloud.com/cdn-cgi/image/width=1440,height=1440,fit=scale-down,format=auto,quality=60/ydzpfmob/599f016c-859a-4e7e-86dc-f170cde4cdad.jpg','Hot dog with Mac and cheese','https://www.urbanhotdogcompany.com/','Urban HotDog Company','https://www.facebook.com/UrbanHotdogCompany/'),(_binary '\Î\Z\›–∂ä\Í£c\r)©$\Õ','https://media-cdn.tripadvisor.com/media/photo-s/0d/d3/d1/25/mac-and-cheese.jpg','Mac and cheese in a small bowl','https://www.cheddars.com/locations/nm/albuquerque/albuquerque/2086','Cheddar\'s Scratch Kitchen','https://www.facebook.com/CheddarsScratchKitchen/'),(_binary '˝^ÅÄ∂ã\Í£c\r)©$\Õ','https://d1ralsognjng37.cloudfront.net/840727cc-9c04-439b-9fe4-5e02a5ef1c1c.jpeg','Green Chile mac and cheese in a bowl','https://lescombeswinery.com/albuquerque/','D.H. Lescombes Winery & Bistro','https://www.facebook.com/DHLescombesBistroABQ/');
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-22 23:32:39
