<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    line-height: 1.2em;
    font-family: inherit;
    color: inherit;
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  *[hidden] {
    display: none;
  }
  html, body {
    direction: ltr;
    display: block;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans', sans-serif;
    font-size: 14px;
    color: #333333;
  }
</style>
