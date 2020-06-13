<template>
  <form action="">
    <input name="busca" id="busca" type="text" v-model="busca" />
    <input
      type="submit"
      id="lupa"
      value="Buscar"
      @click.prevent="buscarProdutos"
    />
  </form>
</template>

<script>
export default {
  name: "ProdutosBuscar",
  data() {
    return {
      busca: "",
    };
  },
  methods: {
    buscarProdutos() {
      // Esse if evita esse error: https://imgur.com/a/ehMzYd3
      if (this.$router.currentRoute.query.q !== this.busca) {
        this.$router.push({ query: { q: this.busca } });
      }
    },
  },
};
</script>

<style></style>
