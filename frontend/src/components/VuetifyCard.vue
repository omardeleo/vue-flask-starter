<template>
  <v-col cols="12" xs="12" sm="12" md="6" lg="4">
    <v-card class="px-8 pt-8 card" outlined>
      <h2 class="mb-7">Use Vuetify components</h2>
      <p class="mb-6">
        Vuetify provides a variety of UI components to render data.
      </p>
      <v-list-item-group>
        <v-chip v-for="season of seasons" :key="season">
          {{ season }}
        </v-chip>
      </v-list-item-group>
      <p class="mt-6">
        To change the <b>chips</b> above to <b>list items</b>, open
        <code>
          <a :href="url1" target="_blank" rel="noopener">
            frontend/src/components/VuetifyCard.vue
          </a>
        </code>
        and replace the following code:
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
      <p class="mt-4">with:</p>
      <div class="editor-container">
        <prism-editor
          class="my-editor"
          v-model="codeSnippet2"
          :highlight="highlighter"
          :readonly="true"
        >
        </prism-editor>
      </div>
      <p class="mt-5">
        Read the Vuetify docs to learn more about components:
        <b>
          <a :href="url2" target="_blank" rel="noopener">
            https://vuetifyjs.com
          </a>
        </b>
        .
      </p>
    </v-card>
  </v-col>
</template>

<script>
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css';

const codeSnippet1 = ` 7 |  <v-chip v-for="season of seasons" :key="season">
 8 |    {{ season }}
 9 |  </v-chip>`;

const codeSnippet2 = ` 7 |  <v-list-item v-for="season of seasons" :key="season">
 8 |    {{ season }}
 9 |  </v-list-item>`;

export default {
  name: 'VuetifyCard',
  components: {
    PrismEditor
  },
  data: () => ({
    seasons: ['Winter', 'Spring', 'Summer', 'Fall'],
    codeSnippet1: codeSnippet1,
    codeSnippet2: codeSnippet2,
    url1: `${process.env.VUE_APP_STARTER_REPO_URL}frontend/src/components/VuetifyCard.vue#L7-L9`,
    url2: 'https://vuetifyjs.com'
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    },
    date() {
      return Date.now();
    }
  }
};
</script>
