<template>
    <div>
        <p class="nome">Citações</p>
        <p class="versao">Versão 1.0</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
	      margin-top: 20px;
    }

    p {
        margin: 0;
    }

    .nome {
        font-size: 1rem;
        font-weight: bold;
    }

    .versao {
        font-size: .75rem;
    }
</style>
