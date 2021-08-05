new Vue({
    el: "#desafio",
    data() {
        return {
            nome: "Gleisson Neves dos Santos",
            idade: 19,
            img: "https://picsum.photos/id/237/200/300"
        }
    },
    methods: {
        geraNumero() {
            return Math.floor(Math.random() * 2);
        }
    },
})