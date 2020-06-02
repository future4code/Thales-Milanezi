import { LabenuSchoolManager } from './LabenuSchoolManager'
import { LabenuSchool } from './LabenuSchool'
import { LabenuClass } from './LabenuClass'
import { LabenuPeople } from './LabenuPeople'
import { LabenuStudents } from './LabenuStudents'
import { LabenuTeachers } from './LabenuTeachers'
import * as moment from "moment"
import { TEACHERS_SPECIALTY } from './LabenuTeachers'

const myStudent1: LabenuStudents = new LabenuStudents(
  "Joaquina Silverinha barbosa",
  24639872,
  "jojoLindinhaPoderosa@bol.com",
  moment('12/03/2009', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  ["Gosto de tomar sol com casaco de frio", "sair para passear de patinete sem rodinhas", "Comer kiwi congelado"]
)

console.log(myStudent1)

const myStudent2: LabenuStudents = new LabenuStudents(
  "Marcia Bitencurt Kohn",
  545345353,
  "marciachique82@yahoo.com",
  moment('07/11/1987', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  ["Passear na feira", "Comprar flores e plantar na cidade", "Correr Loucamente na grama"]
)

console.log(myStudent2)

const myStudent3: LabenuStudents = new LabenuStudents(
  "Guilhermino Souza Pas",
  545345353,
  "guizãoBoladaoDaMinas@yahoo.com",
  moment('12/06/2011', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  ["Ir pro rolezin", "Andar com a minha bike com escapamento de papel", "impinar pipa da Peppa Pig"]
)

console.log(myStudent3)

const MyTeacher1: LabenuTeachers = new LabenuTeachers("Soter 'El Ninja debbugadore' ", 64646464, "sothackyourlife@ig.com", [TEACHERS_SPECIALTY.REACT])
const MyTeacher2: LabenuTeachers = new LabenuTeachers("Paulinha", 43324432, "Pauli_UnicornioS_98@hotmail.com", [TEACHERS_SPECIALTY.CSS])
const MyTeacher3: LabenuTeachers = new LabenuTeachers("Amanda", 567657, "mandyAngel@bol.com", [TEACHERS_SPECIALTY.TYPESCRIPT])
const MyTeacher4: LabenuTeachers = new LabenuTeachers("Pedro", 2345456, "Pedro_garanhão@labenu.com", [TEACHERS_SPECIALTY.REDUX])
const MyTeacher5: LabenuTeachers = new LabenuTeachers("João", 8642332487, "Jo_Racionais_kaka-IBELONGTOJESUS@future4forever.com", [TEACHERS_SPECIALTY.OOP])
const MyTeacher6: LabenuTeachers = new LabenuTeachers("Goli", 89789745564, "Goli-Corvinal_sonserina-NÃO@gmail.com", [TEACHERS_SPECIALTY.BACKEND])


const TurmaJamelao: LabenuClass = new LabenuClass(
  moment('12/01/2020', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  moment('25/07/2020', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  [MyTeacher1],
  [myStudent3],
  "modulo de loucuras na programação 5, hora da loucura final")

const TurmaRonaldoCascao2002: LabenuClass = new LabenuClass(
  moment('10/10/2019', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  moment('12/03/2020', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  [MyTeacher2],
  [myStudent2],
  "modulo desespero com react, não adianta fugir")

const TurmaSailorMoon: LabenuClass = new LabenuClass(
  moment('18/12/2021', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  moment('12/09/2023', 'DD/MM/YYYY').format("DD/MM/YYYY"),
  [MyTeacher3],
  [myStudent1],
  "modulo procrastinando sem parar")
