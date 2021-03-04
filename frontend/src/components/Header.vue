<template>
  <div
    class="d-flex flex-column flex-md-row align-sm-center mt-5 mx-5 header mb-n5"
  >
    <div class="d-flex flex-column justify-center align-center mr-6">
      <img src="../assets/logo.png" width="210" />
      <p class="caption">
        Replace this with your logo:
      </p>
      <p class="caption mt-n4">
        <code>
          <a :href="logoUrl" target="_blank" rel="noopener"
            >frontend/src/assets/logo.png</a
          >
        </code>
      </p>
    </div>
    <h1 class="mt-sm-n3 mt-md-n13">
      <a :href="url1" target="_blank" rel="noopener">Vue</a>-<a
        :href="url2"
        target="_blank"
        rel="noopener"
        >Express</a
      >-<a :href="url3" target="_blank" rel="noopener">Postgres</a>-<a
        :href="url4"
        target="_blank"
        rel="noopener"
        >LocalStack</a
      >
      Starter Project
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    logoUrl: `${process.env.VUE_APP_STARTER_REPO_URL}frontend/src/assets/logo.png`,
    url1: 'https://github.com/vuejs/vue',
    url2: 'https://github.com/expressjs/express',
    url3: 'https://github.com/postgres/postgres',
    url4: 'https://github.com/localstack/localstack'
  })
};
</script>
