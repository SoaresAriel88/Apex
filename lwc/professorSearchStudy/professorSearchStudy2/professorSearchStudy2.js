import {LightningElement, wire, track} from 'lwc';
import searchTeacherName from '@salesforce/apex/SearchTeacher.searchTeacherName';
import searchCourseName from '@salesforce/apex/SearchTeacher.searchCourseName';
import searchStudyName from '@salesforce/apex/SearchTeacher.searchStudyName';

const columns = [
    {label: 'Aluno', fieldName: 'Name' },
]

export default class ProfessorSearchStudy2 extends LightningElement {

columns = columns;
showTable = false;
searchTeacherNameId;
searchStudy;
showStudies = false;
searchTeacherMinistrado;

@track teacherNameOptions = [];
@track coursesNameOptions;


//CHAMADA IMPERATIVA
handleChangeAlunosAndCursos(event) {
        this.searchTeacherNameId = event.detail.value;
        this.showTable= true;

        searchCourseName({professorId: this.searchTeacherNameId}).then(data => {
            if(data){
                console.log('Cursos retornados: ', data)
                this.coursesNameOptions = data.map( course => ({ label: course.Name, value: course.Id}));

                console.log('course Options: ', this.coursesNameOptions);
            }
		})
		.catch(error => {
			console.error(error);
		})
        

    }

    @wire(searchStudyName, {courseId: "$searchTeacherNameId"})
    wiredStudies({data, error}){
        console.log('Lista dos Alunos Retornados: ' + JSON.stringify(data));
        if(data){
            this.searchStudy = data.map( study => ({ label:study.Name, value:study.Id}));
            
        }else if(error){
            console.log(error);

        }
    }



//CHAMADA DOS MÉTODOS/COM O COMBO-BOX

@wire(searchTeacherName)
    wiredTeachers({data, error}){
        console.log('Lista dos IDS dos professores: ' + JSON.stringify(data));
        if(data){
            this.teacherNameOptions = data.map( teacher => ({ label: teacher.Name, value: teacher.Id}));
            
        }else if(error){
            console.log(error);

        }
    }







 
   // OBJECT DESTRUCTURING
    //FUNCTION DESTRUCTURING
    //MAP FUNCTION JS
 }
