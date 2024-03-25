-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 26, 2024 at 05:12 PM
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
(41, 9, 15, '2023-01-01', '2023-03-31'),
(42, 2, 16, '2023-03-05', '2023-04-15'),
(43, 3, 16, '2023-05-10', '2023-06-20'),
(44, 2, 12, '2024-07-15', '2024-08-05'),
(45, 5, 18, '2024-08-20', '2024-09-30'),
(46, 5, 14, '2024-10-25', '2024-11-15'),
(47, 7, 30, '2024-11-30', '2024-12-31'),
(48, 8, 30, '2025-01-05', '2025-02-15'),
(49, 7, 22, '2025-02-20', '2025-03-20'),
(50, 6, 24, '2025-03-25', '2025-04-30'),
(51, 3, 13, '2023-07-01', '2023-09-30'),
(52, 4, 17, '2023-09-05', '2023-11-30'),
(53, 6, 19, '2023-11-15', '2024-01-31'),
(54, 8, 20, '2024-01-31', '2024-04-15'),
(55, 9, 21, '2024-04-30', '2024-07-15'),
(56, 1, 23, '2024-07-30', '2024-10-10'),
(57, 2, 25, '2024-10-15', '2025-01-15'),
(58, 4, 26, '2025-01-31', '2025-04-05'),
(59, 5, 27, '2025-04-10', '2025-07-01'),
(60, 6, 28, '2025-07-15', '2025-10-01');

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
(1, 'lundi', '09h00-11h00', 22),
(2, 'mardi', '14h00-16h00', 23),
(3, 'mercredi', '10h30-12h30', 24),
(4, 'jeudi', '08h00-10h00', 25),
(5, 'vendredi', '13h00-15h00', 26),
(6, 'samedi', '09h30-11h30', 27),
(7, 'dimanche', '16h00-18h00', 28),
(8, 'lundi', '15h00-17h00', 29),
(9, 'mardi', '11h30-13h30', 30),
(10, 'mercredi', '08h30-10h30', 31);

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
(21, 'Wilson', 'Emily', 'wilson@example.com', 'emilypass', 12345678, '1991-06-28'),
(22, 'Martinez', 'Charlotte', 'martinez@example.com', 'charlotte1', 23456789, '1994-02-14'),
(23, 'Anderson', 'Liam', 'anderson@example.com', 'liam_pw', 34567890, '1997-10-20'),
(24, 'Taylor', 'Amelia', 'taylor@example.com', 'amelia321', 45678901, '1989-08-07'),
(25, 'Thomas', 'Benjamin', 'thomas@example.com', 'ben123', 56789012, '1999-04-23'),
(26, 'Lewis', 'Elizabeth', 'lewis@example.com', 'elizabeth_pw', 67890123, '1990-11-11'),
(27, 'Hall', 'Andrew', 'hall@example.com', 'andrew456', 78901234, '1993-05-19'),
(28, 'Walker', 'Grace', 'walker@example.com', 'gracepass', 89012345, '1988-03-27'),
(29, 'Young', 'Christopher', 'young@example.com', 'chris987', 90123456, '1995-09-03'),
(30, 'Hill', 'Chloe', 'hill@example.com', 'chloepw', 12345678, '1998-01-07'),
(31, 'Scott', 'Ethan', 'scott@example.com', 'ethan123', 23456789, '1992-07-02');

-- --------------------------------------------------------

--
-- Table structure for table `cour`
--

CREATE TABLE `cour` (
  `courId` int(11) NOT NULL,
  `courNom` varchar(30) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `courDetail` text CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `courCoach` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `cour`
--

INSERT INTO `cour` (`courId`, `courNom`, `courDetail`, `courCoach`) VALUES
(22, 'Fitness Training', 'Personalized fitness training session focusing on strength and conditioning.', 6),
(23, 'Yoga Class', 'Relaxing yoga class suitable for all levels, focusing on mindfulness and flexibility.', 8),
(24, 'Spinning Class', 'High-intensity spinning class with energetic music and motivating instructors.', 11),
(25, 'Zumba Dance', 'Fun and dynamic Zumba dance workout combining Latin rhythms and cardio exercises.', 14),
(26, 'Pilates Session', 'Core-strengthening Pilates session emphasizing body alignment and flexibility.', 16),
(27, 'Boxing Training', 'Boxing training session incorporating punching techniques and cardio drills.', 18),
(28, 'Bootcamp Challenge', 'Intensive bootcamp challenge focusing on strength, endurance, and agility.', 6),
(29, 'CrossFit Workout', 'CrossFit workout combining functional movements and high-intensity interval training.', 8),
(30, 'Aqua Aerobics', 'Low-impact aqua aerobics class in the pool, suitable for all fitness levels.', 11),
(31, 'Barre Fitness', 'Barre fitness class combining ballet-inspired moves with strength training.', 14),
(32, 'HIIT Circuit', 'High-intensity interval training circuit targeting full-body conditioning.', 16),
(33, 'Tai Chi Class', 'Gentle Tai Chi class focusing on balance, relaxation, and stress relief.', 18),
(34, 'Paddleboard Yoga', 'Yoga session performed on paddleboards in the water, enhancing balance and core strength.', 6),
(35, 'Kickboxing Workout', 'Kickboxing workout incorporating striking techniques and cardio exercises.', 8),
(36, 'Strength Training', 'Strength training session using free weights and resistance machines.', 11),
(37, 'Cardio Blast', 'Cardiovascular workout including running, cycling, and rowing exercises.', 14),
(38, 'Dance Fitness', 'Fun and energetic dance fitness class incorporating various dance styles.', 16),
(39, 'Martial Arts', 'Martial arts class focusing on self-defense techniques and discipline.', 18),
(40, 'Circuit Training', 'Circuit training session with stations targeting different muscle groups.', 6),
(41, 'Stretching Session', 'Relaxing stretching session to improve flexibility and reduce muscle tension.', 8),
(42, 'Yoga 5', 'Beginner yoga class focusing on basic poses and breathing techniques.', 6),
(43, 'Yoga11', 'Beginner yoga class focusing on basic poses and breathing techniques.', 6);

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
(1, 'Football Training Camp', 'Intensive football training camp for beginners and intermediate players. Improve your skills and techniques under professional guidance.', 99.99, 37),
(2, 'Tennis Lessons Package', 'Learn tennis from scratch or enhance your skills with our comprehensive tennis lessons package. Suitable for all ages and skill levels.', 79.99, 31),
(3, 'Basketball Clinic', 'Join our basketball clinic to refine your shooting, dribbling, and defensive techniques. Expert coaches and personalized training sessions available.', 89.99, 32),
(4, 'Yoga', 'Experience rejuvenation and relaxation with our yoga retreat. Practice mindfulness, meditation, and various yoga poses amidst serene natural surroundings.', 149.99, 30),
(9, 'Rock Climbing Adventure', 'Conquer new heights and challenge your limits with our rock climbing adventure. Expert instructors and safety gear provided.', 79.99, 38),
(11, 'Abonnement Mensuel Standard', 'Accès illimité à toutes les installations pendant un mois.', 149.99, 35),
(16, 'Yoga 55s', 'Experience rejuvenation and relaxation with our yoga retreat. Practice mindfulness, meditation, and various yoga poses amidst serene natural surroundings.', 149.99, 27);

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
(2, 'Receptionist', 'Johnson', 'Emily', 'emily.johnson@example.com', 'recep123'),
(3, 'Manager', 'Williams', 'Michael', 'michael.williams@example.com', 'managerpass456'),
(5, 'Receptionist', 'Martinez', 'Daniel', 'daniel.martinez@example.com', 'recep789'),
(6, 'Coach', 'Garcia', 'Sophia', 'sophia.garcia@example.com', 'garciasophia'),
(7, 'Janitor', 'Brown', 'William', 'william.brown@example.com', 'cleaningpass321'),
(8, 'Coach', 'Taylor', 'Olivia', 'olivia.taylor@example.com', 'trainliv'),
(9, 'Receptionist', 'Miller', 'James', 'james.miller@example.com', 'recepjames'),
(10, 'Manager', 'Wilson', 'Emma', 'emma.wilson@example.com', 'manageremma'),
(11, 'Coach', 'Anderson', 'Emily', 'emily.anderson@example.com', 'andersonpass123'),
(12, 'Receptionist', 'Clark', 'Matthew', 'matthew.clark@example.com', 'recep456'),
(13, 'Manager', 'Moore', 'Sophia', 'sophia.moore@example.com', 'managermoore789'),
(14, 'Coach', 'Harris', 'David', 'david.harris@example.com', 'harrisdavid'),
(15, 'Receptionist', 'Lewis', 'Sarah', 'sarah.lewis@example.com', 'recep789'),
(16, 'Coach', 'Robinson', 'Jennifer', 'jennifer.robinson@example.com', 'trainerjen'),
(17, 'Janitor', 'Walker', 'James', 'james.walker@example.com', 'cleaningpass123'),
(18, 'Coach', 'Green', 'Emma', 'emma.green@example.com', 'greenemma'),
(19, 'Receptionist', 'Baker', 'Michael', 'michael.baker@example.com', 'recep789'),
(20, 'Manager', 'Carter', 'Olivia', 'olivia.carter@example.com', 'managerliv');

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
  MODIFY `abonnementId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `calendrier`
--
ALTER TABLE `calendrier`
  MODIFY `activiteId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `client`
--
ALTER TABLE `client`
  MODIFY `clientId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `cour`
--
ALTER TABLE `cour`
  MODIFY `courId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `offre`
--
ALTER TABLE `offre`
  MODIFY `offreId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `personnel`
--
ALTER TABLE `personnel`
  MODIFY `personnelId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

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
