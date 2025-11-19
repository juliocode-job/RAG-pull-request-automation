import { LightningElement, track, wire } from 'lwc';
import insertAccount from '@salesforce/apex/CalculadoraController.insertAccount';

export default class HelloWorld extends LightningElement {

    success = false;
    error = false;

    name = '';

    saveName(event){
        this.name = event.target.value;
    }

    criarConta(){
        insertAccount({name: this.name}).
            then(result=> {
            this.success = true;
            this.error = false;
        }).catch(error => {
            this.sucess = false;
            this.error = true;
        })
    }
}