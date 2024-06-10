<template>
  <div>
    <h1>@nuxtjs/strapi payload extraction test</h1>
    <p>Data from the "test" collection should be prerendered below</p>
    <code>{{ data }}</code>
  </div>
</template>

<script setup lang="ts">
// this breaks on `npm run generate`
const strapi = useStrapi()
const data = await strapi.findOne('test');

// this useFetch example works as expected
// const strapiUrl = useStrapiUrl()
// const data = await useFetch(strapiUrl + '/test');
</script>
