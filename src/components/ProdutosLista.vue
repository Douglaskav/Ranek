<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p class="preco">{{ produto.preco }}</p>
      <p class="descricao">{{ produto.descricao }}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";
import { serialize } from "@/helpers.js";

export default {
  name: "ProdutosLista",
  data() {
    return {
      produtos: null,
      produtosPorPagina: 9,
    };
  },

  computed: {
    url() {
      const query = serialize(this.$route.query);

      return `/produtos/?_limit=${this.produtosPorPagina}${query}`;
    },
  },

  methods: {
    async getProdutos() {
      const { data } = await api.get(this.url);
      this.produtos = data;
    },
  },

  watch: {
    url() {
      this.getProdutos();
    },
  },

  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
