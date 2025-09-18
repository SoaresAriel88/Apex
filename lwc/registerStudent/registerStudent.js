import { LightningElement, track } from 'lwc';
import cepConsultation from '@salesforce/apex/CepConsulta.cepConsultation';


export default class RegisterStudent extends LightningElement {

consultaCepOptions;   
@track consulta;

async handleChangeCEP(event){
    this.consultaCepOptions = event.detail.value;

    await cepConsultation({ cep: this.consultaCepOptions })
		.then(study => {
			this.consulta = study;
            console.log("CEPS RETORNADOS: " + consulta);
			
		
        })
		
        .catch(error => {
			this.error = error;
			this.accounts = undefined;
		})
}





    
    
    showSuccessToast() {
            const evt = new ShowToastEvent({
                title: 'Cadastrado com sucesso!',
                message: 'Obrigado por utilizar o sistema!',
                duration: 3000,
                type: 'success',
                variant: 'success',
                mode: 'dismissable'
            });
                this.dispatchEvent(evt);
        }

}