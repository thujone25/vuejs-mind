<template>
  <div class="auth-root">
    <app-header />
    <div class="auth-root__content-wrapper">
      <form class="auth-root__form">
        <router-view></router-view>
      </form>
    </div>
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '@/components/Header';
import AppFooter from '@/components/Footer';

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  }
}
</script>

<style scoped>
.auth-root {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  padding: 70px 0;
}
.auth-root__content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
}
.auth-root__form {
  display: block;
  width: 100%;
  max-width: 300px;
  padding: 10px;
  border: 3px solid green;
}
</style>
