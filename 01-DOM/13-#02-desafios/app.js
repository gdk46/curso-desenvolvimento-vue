new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },

    methods: {
        exibirAlerta() {
            alert('oii, sou um alerta');
        },

        keydownTests(event) {
            this.valor = event.target.value;
        },
        
        keydownTestByEnter(event) {
            this.valor = event.target.value;
        }
    },

})