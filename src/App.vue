<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { Home } from '@icon-park/vue-next';
import { Like } from '@icon-park/vue-next';

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">

      <el-button type="primary">el-button</el-button>

      <h1 class="text-3xl font-bold underline">
        TailwindCSS
      </h1>

      <div class="sass">
        SCSS
      </div>

      <div>
        This is IconPark
        <home theme="filled" />
        <like theme="outline" size="24" fill="#333" />
      </div>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.sass {
  color: $priceColor
}
</style>
