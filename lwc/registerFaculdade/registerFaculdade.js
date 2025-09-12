import { LightningElement} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class RegisterFaculdade extends LightningElement {

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