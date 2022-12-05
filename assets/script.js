function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.caputuraEnter();
    }

    this.caputuraEnter = () =>{
        document.addEventListener('keyup', e =>{
            if(e.code === 13) return;
            this.realizaConta();
        });
    } ;

    this.capturaCliques = () =>{
            document.addEventListener ('click', event => {
            const element = event.target
            if(element.classList.contains('btn-num')) this.addNumDisplay(element);
            if(element.classList.contains('btn-clear')) this.clear();
            if(element.classList.contains('btn-del')) this.del();
            if(element.classList.contains('btn-eq')) this.realizaConta();
        });
    };
   

    this.addNumDisplay = (element) =>{
         this.display.value += element.innerText;
            this.display.focus();
        };
    

    this.del = (element) =>  this.display.value = this.display.value.slice(0, -1);
    
    this.clear =  () => this.display.value = '';
    
    this.realizaConta = () =>{
        try {
            const conta = eval(this.display.value);
            if(!conta){
                alert('conta invalida');
                return;
            }
            this.display.value =  conta;
        } catch (e) {
            alert ('conta invalida')
            return;
        }
    }

}

const calculadora = new Calculadora();
calculadora.inicia();