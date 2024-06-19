<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <p>恭喜 HeimNad 成功到达美国！</p>
    </template>
  </Layout>
</template>

<style scoped>
p {
  background-color: #e11d48;
  font-size: 6rem;
  line-height: 1;
  font-weight: 900;
  text-align: center;
  color: #ffffffff;
  overflow-wrap: break-word;
  vertical-align: middle;
  padding-top: 12px;
  padding-bottom: 12px;
  height: calc(100vh - 64px);
  line-height: calc(100vh - 64px);
}

@media (max-width: 1024px) {
  p {
    font-size: 2.5rem;
    font-weight: 900;
  }
}

@media (max-width: 768px) {
  p {
    font-size: 2rem;
    font-weight: 900;
  }
}

@media (max-width: 640px) {
  p {
    font-size: 1.8rem;
    font-weight: 900;
  }
}

@media (max-width: 425px) {
  p {
    font-size: 1.5rem;
    font-weight: 900;
  }
}

@media (max-width: 330px) {
  p {
    font-size: 1.3rem;
    font-weight: 900;
  }
}
</style>
