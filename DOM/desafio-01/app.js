new Vue({
    el: '#desafio',
    data: {
        nome: 'Raphael Duarte',
        idade: 24,
        link: 'https://images3.alphacoders.com/104/1041825.jpg'
    },
    methods: {
        IdadeFinal: function(){
            let idade = this.idade * 3
            return idade
        },
        NumeroRandom: function(){
            let numeroRandom = Math.random()
            return numeroRandom
        }
    }
})