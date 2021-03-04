<template>
  <v-app>
    <v-main>
      <Header />
      <v-container fluid class="px-12 pb-8">
        <v-row>
          <ThemeCard />
          <VuetifyCard />
          <ReloadCard />
          <ConnectCard />
          <UploadCard />
          <DeployCard />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header';
import ThemeCard from './components/ThemeCard';
import VuetifyCard from './components/VuetifyCard';
import ReloadCard from './components/ReloadCard';
import ConnectCard from './components/ConnectCard';
import UploadCard from './components/UploadCard';
import DeployCard from './components/DeployCard';

export default {
  name: 'App',
  components: {
    Header,
    ThemeCard,
    VuetifyCard,
    ReloadCard,
    ConnectCard,
    UploadCard,
    DeployCard
  }
};
</script>

<style lang="scss">
.my-editor {
  background: #2d2d2d;
  color: #ccc;
  width: auto;
  overflow-wrap: normal;
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  width: 700px;
}

.editor-container {
  overflow: auto;
}

a {
  text-decoration: none;
}

.v-application code {
  background-color: transparent;
  padding: 0;
  font-size: 100%;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  font-weight: normal;
}

p {
  font-size: 95%;
}

.card {
  height: 700px;
  overflow: auto;
}

h1 {
  font-size: 1.9em;
  text-align: center;
}
</style>
