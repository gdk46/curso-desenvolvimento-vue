<template>
    <div class="container">
        <h1>Componente Usuário</h1>
        <p>Esse é um componente muito legal!</p>
        <hr>
        <p>{{ meuNome }}</p>
        <button @click="alterarNome">Alterar nome</button>
        <div class="componentes">
            <app-usuario-info
                nomeEstatico="Test"
                :nomeDinamico="meuNome"
                @nomeReiniciado="meuNome = $event"
                :reiniciarFn="reiniciarNome"
            />
            <app-usuario-editar/>
        </div>
    </div>
</template>

<script>
import AppUsuarioInfo from './UsuarioInfo'
import AppUsuarioEditar from './UsuarioEditar'

export default {
    components: { AppUsuarioInfo, AppUsuarioEditar },
    data() {
        return {
            meuNome: "Gleisson neves"
        }
    },
    methods: {
        alterarNome() {
            this.meuNome = "Agora meu nome é Gleisson"
        },

        reiniciarNome() {
            this.meuNome = "Gleisson neves"
        }
    },
}
</script>

<style scoped>
    .container {
        background-color: #27363b;
        color: #fff;
        padding: 10px;
    }

    .container hr {
        margin: 20px 10px;
    }

    .componentes {
        display: flex;
    }

    .componentes > * {
        margin: 10px;
    }
</style>
