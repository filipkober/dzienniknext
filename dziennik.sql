-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 09 Lis 2023, 21:06
-- Wersja serwera: 10.4.22-MariaDB
-- Wersja PHP: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `dziennik`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klasy`
--

CREATE TABLE `klasy` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL,
  `szkola` int(11) DEFAULT NULL,
  `wychowawca` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `klasy`
--

INSERT INTO `klasy` (`id`, `nazwa`, `szkola`, `wychowawca`) VALUES
(1, 'Klasa 1A', 2, 1),
(2, 'Klasa 1B', 2, 2);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `nauczyciele`
--

CREATE TABLE `nauczyciele` (
  `id` int(11) NOT NULL,
  `imie` varchar(255) NOT NULL,
  `nazwisko` varchar(255) NOT NULL,
  `przedmiot` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `nauczyciele`
--

INSERT INTO `nauczyciele` (`id`, `imie`, `nazwisko`, `przedmiot`) VALUES
(1, 'Jan', 'Kowalski', 'Matematyka'),
(2, 'Anna', 'Nowak', 'Język polski'),
(3, 'Marek', 'Wojcik', 'Fizyka'),
(4, 'Ewa', 'Lis', 'Chemia'),
(5, 'Piotr', 'Szymanski', 'Historia');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `szkoly`
--

CREATE TABLE `szkoly` (
  `id` int(11) NOT NULL,
  `nazwa` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `szkoly`
--

INSERT INTO `szkoly` (`id`, `nazwa`) VALUES
(2, 'Szkoła Podstawowa XYZ');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uczniowie`
--

CREATE TABLE `uczniowie` (
  `id` int(11) NOT NULL,
  `imie` varchar(255) NOT NULL,
  `nazwisko` varchar(255) NOT NULL,
  `punkty` int(11) DEFAULT NULL,
  `plec` tinyint(1) NOT NULL,
  `klasa` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `uczniowie`
--

INSERT INTO `uczniowie` (`id`, `imie`, `nazwisko`, `punkty`, `plec`, `klasa`) VALUES
(1, 'Anna', 'Kowalska', 95, 0, 1),
(2, 'Jan', 'Nowak', 85, 1, 1),
(3, 'Ewa', 'Lisek', 92, 0, 1),
(4, 'Piotr', 'Szymański', 88, 1, 1),
(5, 'Katarzyna', 'Wójcik', 78, 0, 1),
(6, 'Michał', 'Kaczmarek', 75, 1, 1),
(7, 'Magdalena', 'Dąbrowska', 90, 0, 1),
(8, 'Krzysztof', 'Pawlak', 86, 1, 1),
(9, 'Barbara', 'Zielińska', 94, 0, 2),
(10, 'Andrzej', 'Jaworski', 81, 1, 2),
(11, 'Agnieszka', 'Górka', 89, 0, 2),
(12, 'Marek', 'Wojda', 87, 1, 2),
(13, 'Joanna', 'Nowicka', 73, 0, 2),
(14, 'Tomasz', 'Lewandowski', 77, 1, 2),
(15, 'Dorota', 'Mazurek', 92, 0, 2),
(16, 'Rafał', 'Oleksy', 84, 1, 2),
(17, 'Iwona', 'Gajos', 91, 0, 2),
(18, 'Łukasz', 'Górecki', 79, 1, 2),
(19, 'Alicja', 'Kowalczyk', 93, 0, 1),
(20, 'Robert', 'Kubiak', 80, 1, 1),
(21, 'Lucyfer', 'Szatan', 666, 1, 1),
(22, 'Adam', 'Mickiewicz', -8, 1, 2),
(23, 'Iron', 'Man', 0, 1, 1),
(24, 'Wonder', 'Woman', 612, 0, 1),
(25, 'George', 'Bushdid911', 415, 1, 2);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `klasy`
--
ALTER TABLE `klasy`
  ADD PRIMARY KEY (`id`),
  ADD KEY `szkola` (`szkola`),
  ADD KEY `wychowawca` (`wychowawca`);

--
-- Indeksy dla tabeli `nauczyciele`
--
ALTER TABLE `nauczyciele`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `szkoly`
--
ALTER TABLE `szkoly`
  ADD PRIMARY KEY (`id`);

--
-- Indeksy dla tabeli `uczniowie`
--
ALTER TABLE `uczniowie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `klasa` (`klasa`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `uczniowie`
--
ALTER TABLE `uczniowie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `klasy`
--
ALTER TABLE `klasy`
  ADD CONSTRAINT `klasy_ibfk_1` FOREIGN KEY (`szkola`) REFERENCES `szkoly` (`id`),
  ADD CONSTRAINT `klasy_ibfk_2` FOREIGN KEY (`wychowawca`) REFERENCES `nauczyciele` (`id`);

--
-- Ograniczenia dla tabeli `uczniowie`
--
ALTER TABLE `uczniowie`
  ADD CONSTRAINT `uczniowie_ibfk_1` FOREIGN KEY (`klasa`) REFERENCES `klasy` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
