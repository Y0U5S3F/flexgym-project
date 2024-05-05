-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 05, 2024 at 11:21 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `flexgym`
--

-- --------------------------------------------------------

--
-- Table structure for table `abonnement`
--

CREATE TABLE `abonnement` (
  `abonnementId` int(11) NOT NULL,
  `abonnementEtat` tinyint(1) GENERATED ALWAYS AS (curdate() < `finDate`) VIRTUAL,
  `abonnementType` int(11) DEFAULT NULL,
  `abonnementProp` int(11) DEFAULT NULL,
  `debutDate` date NOT NULL,
  `finDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `abonnement`
--

INSERT INTO `abonnement` (`abonnementId`, `abonnementType`, `abonnementProp`, `debutDate`, `finDate`) VALUES
(86, 31, 17, '2022-06-01', '2024-12-19'),
(89, 35, 20, '2022-09-01', '2025-11-06'),
(90, 16, 21, '2022-10-01', '2023-10-01'),
(91, 27, 18, '2024-05-17', '2024-06-21'),
(142, 27, 12, '2022-01-01', '2023-01-01'),
(143, 28, 13, '2022-02-01', '2023-02-01'),
(144, 29, 14, '2022-03-01', '2023-03-01'),
(145, 16, 15, '2022-04-01', '2023-04-01'),
(146, 33, 16, '2022-05-01', '2023-05-31'),
(147, 35, 17, '2022-06-01', '2023-06-01'),
(148, 16, 18, '2022-07-01', '2023-07-01'),
(149, 27, 19, '2022-08-01', '2023-08-01'),
(150, 28, 20, '2022-09-01', '2023-09-01'),
(151, 29, 21, '2022-10-01', '2023-10-01'),
(152, 33, 22, '2022-11-01', '2023-11-01'),
(153, 35, 23, '2022-12-01', '2023-12-01'),
(154, 16, 24, '2023-01-01', '2024-01-01'),
(155, 33, 25, '2023-02-01', '2024-02-01'),
(156, 35, 26, '2023-03-01', '2024-03-01'),
(157, 16, 27, '2023-04-01', '2024-04-01'),
(158, 27, 28, '2023-05-01', '2024-05-01'),
(159, 28, 29, '2023-06-01', '2024-06-01'),
(160, 29, 30, '2023-07-01', '2024-07-01'),
(162, 33, 37, '2023-09-01', '2024-09-01'),
(163, 35, 39, '2023-10-01', '2024-10-01'),
(164, 16, 40, '2023-11-01', '2024-11-01'),
(165, 33, 41, '2023-12-01', '2024-12-01'),
(166, 27, 16, '2024-05-01', '2024-06-01');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `adminId` int(11) NOT NULL,
  `adminNom` varchar(30) NOT NULL,
  `adminPrenom` varchar(30) NOT NULL,
  `adminEmail` varchar(50) NOT NULL,
  `adminPass` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`adminId`, `adminNom`, `adminPrenom`, `adminEmail`, `adminPass`) VALUES
(1, 'Smith', 'John', 'john.smith@example.com', 'password123'),
(2, 'Doe', 'Jane', 'jane.doe@example.com', 'securepassword456');

-- --------------------------------------------------------

--
-- Table structure for table `calendrier`
--

CREATE TABLE `calendrier` (
  `activiteId` int(11) NOT NULL,
  `activiteJour` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `activiteTemps` varchar(20) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `activiteCour` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `calendrier`
--

INSERT INTO `calendrier` (`activiteId`, `activiteJour`, `activiteTemps`, `activiteCour`) VALUES
(22, 'lundi', '17h00-18h00', 58),
(24, 'mercredi', '17h00-19h00', 62),
(25, 'jeudi', '17h00-18h00', 63),
(27, 'samedi', '17h00-19h00', 65),
(28, 'dimanche', '17h00-18h00', 66),
(29, 'lundi', '17h00-19h00', 67),
(31, 'mercredi', '17h00-18h00', 69),
(32, 'jeudi', '17h00-19h00', 70),
(33, 'lundi', '17h00-18h00', 58),
(34, 'mardi', '18h00-19h00', 61),
(35, 'mercredi', '19h00-20h00', 62),
(38, 'samedi', '19h00-20h00', 65),
(39, 'dimanche', '17h00-18h00', 66),
(40, 'lundi', '18h00-19h00', 67),
(41, 'mardi', '19h00-20h00', 68),
(42, 'mercredi', '17h00-18h00', 69),
(43, 'jeudi', '18h00-19h00', 70),
(44, 'lundi', '08h00-09h00', 58),
(45, 'mardi', '09h00-10h00', 61),
(50, 'dimanche', '08h00-09h00', 66),
(53, 'mercredi', '08h00-09h00', 69);

-- --------------------------------------------------------

--
-- Table structure for table `client`
--

CREATE TABLE `client` (
  `clientId` int(11) NOT NULL,
  `clientNom` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `clientPrenom` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `clientEmail` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `clientPass` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `clientTel` int(8) NOT NULL,
  `clientDatenais` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `client`
--

INSERT INTO `client` (`clientId`, `clientNom`, `clientPrenom`, `clientEmail`, `clientPass`, `clientTel`, `clientDatenais`) VALUES
(12, 'Johnson', 'John', 'johnson@example.com', 'password123', 12345678, '1990-05-15'),
(13, 'Smith', 'Emma', 'smith@example.com', 'emma123', 23456789, '1988-08-22'),
(14, 'Williams', 'Michael', 'williams@example.com', 'pass456', 34567890, '1995-01-10'),
(15, 'Brown', 'Olivia', 'brown@example.com', 'olivia_pass', 45678901, '1992-11-30'),
(16, 'Jones', 'Alexander', 'jones@example.com', 'alexpass', 56789012, '1987-04-05'),
(17, 'Taylor', 'Sophia', 'taylor@example.com', 'sophiapw', 67890123, '1998-09-17'),
(18, 'Miller', 'Daniel', 'miller@example.com', 'daniel123', 78901234, '1993-07-25'),
(19, 'Davis', 'Isabella', 'davis@example.com', 'isabella_pw', 89012345, '1996-03-12'),
(20, 'Garcia', 'William', 'garcia@example.com', 'will123', 90123456, '1985-12-03'),
(21, 'Wilson', 'Emily', 'wilson@1example.com', 'emilypass', 12345678, '1991-06-28'),
(22, 'Martinez', 'Charlotte', 'martinez@example.com', 'charlotte1', 23456789, '1994-02-14'),
(23, 'Anderson', 'Liam', 'anderson@example.com', 'liam_pw', 34567890, '1997-10-20'),
(24, 'Taylor', 'Amelia', 'taylor@example.com', 'amelia321', 45678901, '1989-08-07'),
(25, 'Thomas', 'Benjamin', 'thomas@example.com', 'ben123', 56789012, '1999-04-23'),
(26, 'Lewis', 'Elizabeth', 'lewis@example.com', 'elizabeth_pw', 67890123, '1990-11-11'),
(27, 'Hall', 'Andrew', 'hall@example.com', 'andrew456', 78901234, '1993-05-19'),
(28, 'Walker', 'Grace', 'walker@example.com', 'gracepass', 89012345, '1988-03-27'),
(29, 'Young', 'Christopher', 'young@example.com', 'chris987', 90123456, '1995-09-03'),
(30, 'Hill', 'Chloe', 'hill@example.com', 'chloepw', 12345678, '1998-01-07'),
(37, 'Smith', 'John', 'johnsmith@example.com', 'password123', 12345678, '1980-01-01'),
(39, 'Williams', 'Michael', 'michaelwilliams@example.com', 'password789', 34567890, '1982-03-03'),
(40, 'Brown', 'Sarah', 'sarahbrown@example.com', 'password321', 45678901, '1983-04-04'),
(41, 'Jones', 'Jessica', 'jessicajones@example.com', 'password654', 56789012, '1984-05-05'),
(42, 'Miller', 'Jacob', 'jacobmiller@example.com', 'password987', 67890123, '1985-06-06'),
(43, 'Davis', 'Mohammed', 'mohammeddavis@example.com', 'password135', 78901234, '1986-07-07'),
(44, 'Garcia', 'Sophia', 'sophiagarcia@example.com', 'password246', 89012345, '1987-08-08'),
(45, 'Rodriguez', 'Mia', 'miarodriguez@example.com', 'password369', 90123456, '1988-09-09'),
(46, 'Wilson', 'David', 'davidwilson@example.com', 'password147', 12345678, '1989-10-10'),
(47, 'Taylor', 'Lucas', 'lucastaylor@example.com', 'password258', 12345678, '2009-12-30'),
(48, 'Smith', 'John', 'john.smith@example.com', 'JohnSmith2022!', 12345678, '1980-01-01'),
(49, 'Johnson', 'Robert', 'robert.johnson@example.com', 'RobertJohnson2022!', 23456789, '1981-02-02'),
(50, 'Williams', 'Michael', 'michael.williams@example.com', 'MichaelWilliams2022!', 34567890, '1982-03-03'),
(51, 'Brown', 'Sarah', 'sarah.brown@example.com', 'SarahBrown2022!', 45678901, '1983-04-04'),
(52, 'Jones', 'Jessica', 'jessica.jones@example.com', 'JessicaJones2022!', 56789012, '1984-05-05'),
(53, 'Miller', 'Jacob', 'jacob.miller@example.com', 'JacobMiller2022!', 67890123, '1985-06-06'),
(54, 'Davis', 'Mohammed', 'mohammed.davis@example.com', 'MohammedDavis2022!', 78901234, '1986-07-07'),
(55, 'Garcia', 'Sophia', 'sophia.garcia@example.com', 'SophiaGarcia2022!', 89012345, '1987-08-08'),
(56, 'Rodriguez', 'Mia', 'mia.rodriguez@example.com', 'MiaRodriguez2022!', 90123456, '1988-09-09'),
(57, 'Wilson', 'David', 'david.wilson@example.com', 'DavidWilson2022!', 12345678, '1989-10-10'),
(58, 'Taylor', 'Lucas', 'lucas.taylor@example.com', 'LucasTaylor2022!', 12345678, '2009-12-30'),
(59, 'zarrouki', 'musculation', 'johnl3amrismith@example.com', 'securepass123', 95665956, '2003-06-12');

-- --------------------------------------------------------

--
-- Table structure for table `cour`
--

CREATE TABLE `cour` (
  `courId` int(11) NOT NULL,
  `courNom` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `courDetail` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `courCoach` int(11) DEFAULT NULL,
  `courImg` varchar(255) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cour`
--

INSERT INTO `cour` (`courId`, `courNom`, `courDetail`, `courCoach`, `courImg`) VALUES
(58, 'Yoga', 'A physical, mental, and spiritual practice', 8, '/img/yoga.jpg'),
(61, 'Cycling', 'Indoor cycling, also known as spinning, is an intense cardio workout', 16, '/img/61.jpeg'),
(62, 'Kickboxing', 'A group fitness class that combines martial arts techniques with fast-paced cardio', 11, '/img/kickboxing.jpg'),
(64, 'Bodybuilding', 'A workout involving a series of exercises with the goal of increasing muscular size', 8, '/img/bodybuilding.jpg'),
(65, 'Aerobics', 'A form of physical exercise that combines rhythmic aerobic exercise with stretching and strength training routines', 18, '/img/aerobics.jpg'),
(66, 'Boxing', 'A combat sport and fitness training method', 14, '/img/boxing.jpg'),
(67, 'HIIT', 'High-Intensity Interval Training is a cardiovascular exercise strategy alternating short periods of intense anaerobic exercise with less intense recovery periods', 18, '/img/hiit.jpg'),
(68, 'Muay Thai', 'A combat sport of Thailand that uses stand-up striking along with various clinching techniques', 8, '/img/68.jpeg'),
(69, 'MMA', 'Mixed Martial Arts is a full-contact combat sport that allows striking and grappling, both standing and on the ground', 11, '/img/69.webp'),
(70, 'Taekwondo', 'A Korean martial art, characterized by its emphasis on head-height kicks, jumping spinning kicks, and fast kicking techniques', 18, '/img/taekwondo.jpg'),
(98, 'devoir', 'devoir', 6, '/img/98.jpeg');

--
-- Triggers `cour`
--
DELIMITER $$
CREATE TRIGGER `chk_cour_coach_role` BEFORE INSERT ON `cour` FOR EACH ROW BEGIN
    DECLARE coach_count INT;
    SELECT COUNT(*) INTO coach_count
    FROM personnel
    WHERE personnelId = NEW.courCoach AND personnelRole = 'Coach';
    IF coach_count = 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Only personnel with the role of coach can be assigned as a cour coach.';
    END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `offre`
--

CREATE TABLE `offre` (
  `offreId` int(11) NOT NULL,
  `offreNom` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `offreDetail` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `offrePrix` float NOT NULL,
  `offreCour` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `offre`
--

INSERT INTO `offre` (`offreId`, `offreNom`, `offreDetail`, `offrePrix`, `offreCour`) VALUES
(16, 'Yoga kids', 'Experience rejuvenation and relaxation with our yoga retreat. Practice mindfulness, meditation, and various yoga poses amidst serene natural surroundings.', 49.99, 58),
(27, 'Basic Membership', 'Access to gym equipment', 29.99, 64),
(28, 'Premium Membership', 'Access to gym equipment and group classes', 49.99, 64),
(29, 'Family Membership', 'Access for up to 4 family members', 89.99, 64),
(30, 'Student Membership', 'Discounted access for students', 19.99, 62),
(31, 'Senior Membership', 'Discounted access for seniors', 24.99, 66),
(33, 'Yoga Classes', 'Unlimited access to yoga classes', 39.99, 58),
(35, 'Spinning Classes', 'Unlimited access to spinning classes', 39.99, 61);

-- --------------------------------------------------------

--
-- Table structure for table `personnel`
--

CREATE TABLE `personnel` (
  `personnelId` int(11) NOT NULL,
  `personnelRole` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `personnelNom` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `personnelPrenom` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `personnelEmail` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `personnelPass` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `personnel`
--

INSERT INTO `personnel` (`personnelId`, `personnelRole`, `personnelNom`, `personnelPrenom`, `personnelEmail`, `personnelPass`) VALUES
(2, 'Receptioniste', 'Johnson', 'Emily', 'emily.johnson@example.com', 'recep123'),
(3, 'Manager', 'Williams', 'Michael', 'michael.williams@example.com', 'managerpass456'),
(5, 'Receptioniste', 'Martinez', 'Daniel', 'daniel.martinez@example.com', 'recep789'),
(6, 'Coach', 'Garcia', 'Sophia', 'sophia.garcia@example.com', 'garciasophia'),
(8, 'Coach', 'Taylor', 'Olivia', 'olivia.taylor@example.com', 'trainliv'),
(9, 'Receptioniste', 'Miller', 'James', 'james.miller@example.com', 'recepjames'),
(10, 'Manager', 'Wilson', 'Emna', 'emma.wilson@example.com', 'manageremma'),
(11, 'Coach', 'Anderson', 'Emily', 'emily.anderson@example.com', 'andersonpass123'),
(12, 'Receptioniste', 'Clark', 'Matthew', 'matthew.clark@example.com', 'recep456'),
(13, 'Manager', 'Moore', 'Sophia', 'sophia.moore@example.com', 'managermoore789'),
(14, 'Coach', 'Harris', 'David', 'david.harris@example.com', 'harrisdavid'),
(15, 'Receptioniste', 'Lewis', 'Sarah', 'sarah.lewis@example.com', 'recep789'),
(16, 'Coach', 'Robinson', 'Jennifer', 'jennifer.robinson@example.com', 'trainerjen'),
(17, 'Janitor', 'Walker', 'James', 'james.walker@example.com', 'cleaningpass123'),
(18, 'Coach', 'Green', 'Emma', 'emma.green@example.com', 'greenemma'),
(19, 'Receptioniste', 'Baker', 'Michael', 'michael.baker@example.com', 'recep789'),
(20, 'Manager', 'Carter', 'Olivia', 'olivia.carter@example.com', 'managerliv'),
(22, 'Receptioniste', 'Martinez', 'Hachem', 'martinez@example.com', 'recep789');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `abonnement`
--
ALTER TABLE `abonnement`
  ADD PRIMARY KEY (`abonnementId`),
  ADD KEY `fk_abonnement_client` (`abonnementProp`),
  ADD KEY `fk_abonnement_offre` (`abonnementType`);

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adminId`);

--
-- Indexes for table `calendrier`
--
ALTER TABLE `calendrier`
  ADD PRIMARY KEY (`activiteId`),
  ADD UNIQUE KEY `activiteId` (`activiteId`),
  ADD KEY `fk_activiteCour` (`activiteCour`);

--
-- Indexes for table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`clientId`);

--
-- Indexes for table `cour`
--
ALTER TABLE `cour`
  ADD PRIMARY KEY (`courId`),
  ADD KEY `fk_cour_coach` (`courCoach`);

--
-- Indexes for table `offre`
--
ALTER TABLE `offre`
  ADD PRIMARY KEY (`offreId`),
  ADD KEY `fk_offreCour` (`offreCour`);

--
-- Indexes for table `personnel`
--
ALTER TABLE `personnel`
  ADD PRIMARY KEY (`personnelId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `abonnement`
--
ALTER TABLE `abonnement`
  MODIFY `abonnementId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=167;

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `adminId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `calendrier`
--
ALTER TABLE `calendrier`
  MODIFY `activiteId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `clientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `cour`
--
ALTER TABLE `cour`
  MODIFY `courId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `offre`
--
ALTER TABLE `offre`
  MODIFY `offreId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `personnel`
--
ALTER TABLE `personnel`
  MODIFY `personnelId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `abonnement`
--
ALTER TABLE `abonnement`
  ADD CONSTRAINT `fk_abonnement_client` FOREIGN KEY (`abonnementProp`) REFERENCES `client` (`clientId`),
  ADD CONSTRAINT `fk_abonnement_offre` FOREIGN KEY (`abonnementType`) REFERENCES `offre` (`offreId`);

--
-- Constraints for table `calendrier`
--
ALTER TABLE `calendrier`
  ADD CONSTRAINT `fk_activiteCour` FOREIGN KEY (`activiteCour`) REFERENCES `cour` (`courId`);

--
-- Constraints for table `cour`
--
ALTER TABLE `cour`
  ADD CONSTRAINT `fk_cour_coach` FOREIGN KEY (`courCoach`) REFERENCES `personnel` (`personnelId`);

--
-- Constraints for table `offre`
--
ALTER TABLE `offre`
  ADD CONSTRAINT `fk_offreCour` FOREIGN KEY (`offreCour`) REFERENCES `cour` (`courId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
