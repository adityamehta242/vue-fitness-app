<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <header>
    <h2 class="text-gradient">Logo</h2>
  </header>
  <main>
    <slot/>
  </main>
  <footer>
    <p>cretaed by adityamehta</p>
    <a href="https://github.com/adityamehta242/vue-fitness-app" class="github-link" target="_blank"> <FontAwesomeIcon :icon="['fab', 'github']" class="github-icon"/></a>
  </footer>
</template>

<style scoped>

header , footer , main{
  padding: 1rem;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  gap: 0.5rem;
}

main{
  flex: 1;
}

footer{
  height: 2rem;
  padding: 3rem 0rem;
  /* background-color: aliceblue; */
  display: flex;
  align-items: center;
  justify-content: center;
}

.github-link {
  text-decoration: none;
  color: #24292e;
}

.github-link:hover {
  cursor: pointer;
  color: #333;
}
.github-icon:hover{
  cursor: pointer;
}
</style>
