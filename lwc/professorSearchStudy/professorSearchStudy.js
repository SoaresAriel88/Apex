import {LightningElement, wire, track} from 'lwc';
import searchStudyAndCurso from '@salesforce/apex/SearchTeacher.searchStudyAndCurso';
import searchTeacherName from '@salesforce/apex/SearchTeacher.searchTeacherName';


const columns = [
    { label: 'Aluno', fieldName: 'Name'},
    { label: 'Curso', fieldName: 'CursoName'}
];


export default class ProfessorSearchStudy2 extends LightningElement {


columns = columns;
showTable = false;
searchTeacherData;
searchTeacherNameId;

@track teacherNameOptions = [];

//PICKLIST/METODO
 
handleChangeAlunosAndCursos(event) {
        this.searchTeacherNameId = event.detail.value;
        this.showTable= true;
    }

//CHAMADA DOS MÉTODOS

@wire(searchTeacherName)
    wiredTeachers({data, error}){
        console.log('Lista dos IDS: ' + JSON.stringify(data));
        if(data){
            this.teacherNameOptions = data.map( teacher => ({ label: teacher.Name, value: teacher.Id}));
            
        }else if(error){
            console.log(error);

        }
    }



@wire(searchStudyAndCurso, { professorId: '$searchTeacherNameId' }) 
    wiredStudyAndCursos({data, error}) {
        console.log('Lista de Alunos e Cursos: ' + JSON.stringify(data));
        if (data) {
            this.searchTeacherData = data?.map((item) => {
                return {
                    Name: item.Name,
                    CursoName: item.Curso__r?.Name
                }
            });
        } else if (error) {
            console.error(error);
        }
    }
 
   // OBJECT DESTRUCTURING
    //FUNCTION DESTRUCTURING
    //MAP FUNCTION JS
 }
