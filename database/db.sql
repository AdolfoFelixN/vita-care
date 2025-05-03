CREATE TABLE `vita-care`.`usuarios` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(200) NOT NULL,
  `Email` VARCHAR(150) NOT NULL,
  `Password` VARCHAR(45) NOT NULL,
  `Rol` VARCHAR(45) NOT NULL,
  `Created_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`),
  UNIQUE INDEX `Email_UNIQUE` (`Email` ASC) VISIBLE);

CREATE TABLE `vita-care`.`pacientes` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Nombre` VARCHAR(255) NOT NULL,
  `FechaNacimiento` DATE NULL,
  `Sexo` VARCHAR(100) NULL,
  `Telefono` VARCHAR(20) NULL,
  `Email` VARCHAR(255) NULL,
  `Direccion` TEXT NULL,
  `Alergias` TEXT NULL,
  `Created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`));

CREATE TABLE `vita-care`.`consultas` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Paciente_ID` INT NULL,
  `Medico_ID` INT NULL,
  `FechaConsulta` DATETIME NOT NULL,
  `Motivo` TEXT NOT NULL,
  `Diagnostico` TEXT NULL,
  `Tratamiento` TEXT NULL,
  `Created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`));

CREATE TABLE `vita-care`.`Recetas` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Consulta_ID` INT NOT NULL,
  `Contenido` TEXT NULL,
  `Create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`));

CREATE TABLE `vita-care`.`citas` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Paciente_ID` INT NULL,
  `Medico_ID` INT NULL,
  `FechaHora` DATETIME NOT NULL,
  `Estado` VARCHAR(100) NULL,
  `Motivo` TEXT NULL,
  `Created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`));

USE `vita-care`;
ALTER TABLE consultas
ADD CONSTRAINT FK_MedicoID
FOREIGN KEY (Medico_ID) REFERENCES usuarios(ID);

USE `vita-care`;
ALTER TABLE consultas
ADD CONSTRAINT FK_MedicoID
FOREIGN KEY (Medico_ID) REFERENCES usuarios(ID);

USE `vita-care`;
ALTER TABLE Recetas
ADD CONSTRAINT FK_ConsultaID
FOREIGN KEY (Consulta_ID) REFERENCES consultas(ID);

USE `vita-care`;
ALTER TABLE citas
ADD CONSTRAINT FK_CitasPacienteID
FOREIGN KEY (Paciente_ID) REFERENCES pacientes(ID);

USE `vita-care`;
ALTER TABLE citas
ADD CONSTRAINT FK_CitasMedicoID
FOREIGN KEY (Medico_ID) REFERENCES usuarios(ID);