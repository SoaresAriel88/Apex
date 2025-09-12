import { LightningElement, wire } from 'lwc';
import searchStudyAndCurso from '@salesforce/apex/SearchTeacher.searchStudyAndCurso';
export default class ProfessorSearchStudy extends LightningElement {

searchAluno = '';
searchCurso = '';
     
    @wire(searchStudyAndCurso, { professor: '$searchAluno' }) searchTeacher;

 
 
 
 
 
 
 
 
    get optionsAlunosAndCursos() {
        return [
            { label: 'Clemilton', value: 'Clemilton' },
            { label: 'Ativo', value: 'Ativo' },
            { label: 'Inativo', value: 'Inativo'},
        ];
    }

    handleChangeAlunosAndCursos(event) {
        this.searchAlunosAndCursos = event.detail.value;
     
    }


}