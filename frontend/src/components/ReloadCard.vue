<template>
  <v-col cols="12" xs="12" sm="12" md="6" lg="4">
    <v-card class="px-8 pt-8 card" outlined>
      <h2 class="mb-7">See code changes instantly</h2>
      <p>
        When you make changes to the frontend code and save the file,
        <b>the app will automatically reload</b> only the module that was
        updated, allowing you to see changes instantly without having to refresh
        your browser.
      </p>
      <p>[Explanation]</p>
    </v-card>
  </v-col>
</template>

<script>
export default {
  name: 'ReloadCard'
};
</script>
