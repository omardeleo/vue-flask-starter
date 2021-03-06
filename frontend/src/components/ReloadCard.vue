<template>
  <v-col cols="12" xs="12" sm="12" md="6" lg="4">
    <v-card class="px-8 pt-8 card" outlined>
      <h2 class="mb-7">See code changes instantly</h2>
      <p>
        When you make changes to the frontend code and save the file,
        <b>the app will automatically reload</b> only the module that was
        updated, allowing you to <b>see changes instantly</b> without having to
        refresh your browser.
      </p>
      <p>
        This is made possible by
        <a :href="url1" target="_blank" rel="noopener"
          >webpack Hot Module Replacement</a
        >, which comes installed with this Vue starter in a package called
        <code
          ><a :href="url2" target="_blank" rel="noopener"
            >vue-cli-service</a
          ></code
        >. This script is invoked when we start our project in development mode.
        The command is located in
        <code
          ><a :href="url3" target="_blank" rel="noopener"
            >frontend/package.json</a
          ></code
        >:
      </p>
      <div class="editor-container">
        <prism-editor
          class="my-editor"
          v-model="codeSnippet1"
          :highlight="highlighter"
          :readonly="true"
        >
        </prism-editor>
      </div>
    </v-card>
  </v-col>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

export default {
  name: 'ReloadCard',
  components: {
    PrismEditor
  },
  data: () => ({
    codeSnippet1: ' 6 |    "serve": "vue-cli-service serve",',
    codeSnippet2: ' 6 |    "start": "nodemon ./src/bin/www"',
    url1: 'https://webpack.js.org/concepts/hot-module-replacement/',
    url2: 'https://cli.vuejs.org/guide/cli-service.html#vue-cli-service-serve',
    url3: `${process.env.VUE_APP_STARTER_REPO_URL}frontend/package.json#L6`
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    }
  }
};
</script>
