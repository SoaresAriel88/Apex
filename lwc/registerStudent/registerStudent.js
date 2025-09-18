import { LightningElement, track } from 'lwc';
import cepConsultation from '@salesforce/apex/CepConsulta.cepConsultation';


export default class RegisterStudent extends LightningElement {

consultaCepOptions;   
@track consulta;
@track endereco;
@track bairro;
@track cidade;
@track uf;


async handleChangeCEP(event){
    this.consultaCepOptions = event.detail.value;

    await cepConsultation({cep: this.consultaCepOptions}).then(data => {
                if(data){
                    console.log('CEPS RETORNADOS: ', data)
                    this.consulta = data;
                    this.logradouro = data.logradouro;
                    this.bairro = data.bairro;
                    this.localidade = data.localidade;
                    this.uf = data.uf
                    
                    console.log('ENDEREÇO RETORNADO: ', JSON.stringify(this.consulta));
                }
            })
            .catch(error => {
                console.error(error);
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
