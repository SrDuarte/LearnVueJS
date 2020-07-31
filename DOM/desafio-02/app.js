new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods:{
        ExibirAlert(){
            alert('Exibindo Alerta');
        },
        armazenarValor(event){
            this.valor = event.target.value
        }
    }
})