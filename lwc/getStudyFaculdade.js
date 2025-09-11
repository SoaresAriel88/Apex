import {LightningElement, wire} from 'lwc';
import SearchStatus from '@salesforce/apex/SearchStudy.SearchStatus';

const columns = [
    { label: 'Name', fieldName: 'Name'},
    { label: 'Status', fieldName: 'Status__c'}
];

export default class GetStudyFaculdade extends LightningElement {
    showTable = false;
    status = '';
    columns = columns;
    
    @wire(SearchStatus, { status: '$status' }) statusStudy;     
    
    
    
    //PICKLIST  
    get optionsStatus() {
        return [
            { label: 'Todos', value: 'Todos' },
            { label: 'Ativo', value: 'Ativo' },
            { label: 'Inativo', value: 'Inativo'},
        ];
    }
    handleChangeStatus(event) {
        this.status = event.detail.value;
        this.showTable = true;
    }
}
