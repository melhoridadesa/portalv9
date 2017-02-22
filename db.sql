-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema dbmelhoridade
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dbmelhoridade
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dbmelhoridade` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `dbmelhoridade` ;

-- -----------------------------------------------------
-- Table `dbmelhoridade`.`tb_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbmelhoridade`.`tb_usuario` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbmelhoridade`.`tb_cadastro_idoso`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbmelhoridade`.`tb_cadastro_idoso` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `idade` INT NOT NULL,
  `documento` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbmelhoridade`.`tb_site`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbmelhoridade`.`tb_site` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `imagem` VARCHAR(45) NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `texto` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbmelhoridade`.`tb_banner`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbmelhoridade`.`tb_banner` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `link` VARCHAR(45) NOT NULL,
  `imagem` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dbmelhoridade`.`tb_quem_somos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dbmelhoridade`.`tb_quem_somos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `texto` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
