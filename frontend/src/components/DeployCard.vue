<template>
  <v-col cols="12" xs="12" sm="12" md="6" lg="4">
    <v-card class="px-8 pt-8 card" outlined>
      <h2 class="mb-1">Deploy your app to the cloud</h2>
      <div class="d-flex mb-6 align-center">
        <h3>Powered by</h3>
        <img class="ml-2" width="120" src="../assets/logo.png" />
      </div>
      <p>
        Use
        <b><a :href="url1" target="_blank" rel="noopener">Shipyard</a></b> to
        deploy your app to the cloud, following these simple steps:
      </p>
      <ul>
        <li>
          Go to
          <b
            ><a :href="url1" target="_blank" rel="noopener"
              >https://shipyard.build
            </a></b
          >
          .
        </li>
        <li>
          <b>Sign in</b> using your
          <b><a :href="url2" target="_blank" rel="noopener">GitHub</a></b>
          credentials.
        </li>
        <li>
          Click <b>Add Repository</b> to select the repo for this starter
          project.
        </li>
        <li><b>Select the branch</b> you'd like to deploy.</li>
        <li>Click <b>Deploy</b> to deploy the app!</li>
      </ul>
      <p class="mt-3">
        Once the app is up and running, you'll be able to see it by clicking the
        <b>View Live Environment</b> icon.
      </p>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'DeployCard',
  data: () => ({
    url1: 'https://shipyard.build/',
    url2: 'https://github.com/'
  })
};
</script>

<style scoped>
li {
  margin-bottom: 8px;
}
</style>
