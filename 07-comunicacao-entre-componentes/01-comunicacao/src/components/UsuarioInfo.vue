<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário estático: <strong>{{ nomeEstatico }}</strong></p>
        <p>Nome do usuário dinâmico: <strong>{{ nomeDinamico }}</strong></p>
        <p>Nome invertido: <strong>{{ inverterNome() }}</strong></p>
        <p>Props com valor padrao: <strong>{{ propsComValorPadrao }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
export default {
    // props: ['nomeEstatico', 'nomeDinamico'],
    props: {
        nomeEstatico: {
            type: String,
            required: true
        },
        propsComValorPadrao: {
            type: String,
            default: "teste"
        },
        nomeDinamico: String,
        reiniciarFn: Function,
    },
    methods: {
        inverterNome() {
            return this.nomeDinamico.split('').reverse().join('')
        },

        reiniciarNome(){
            this.nomeDinamico = "Gleisson neves";
            this.$emit('nomeReiniciado', this.nomeDinamico);
        }
    },
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
