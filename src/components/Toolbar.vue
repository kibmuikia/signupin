<template>
  <div app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="navigateTo('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="navigateTo('/auth/sign-in')">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign In</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="navigateTo('/auth/sign-up')">
          <v-list-tile-action>
            <v-icon>person_add</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Sign Up</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="navigateTo('/about')">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!-- <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" dark v-on="on">
            Dropdown
          </v-btn>
        </template>
        <v-list>
          <v-list-tile
            v-for="(item, index) in items"
            :key="index"
            @click="navigateTo(item.path)"
          >
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu> -->
    </v-navigation-drawer>
    <!-- . -->
    <v-toolbar color="green lighten-2" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-toolbar-title>Application</v-toolbar-title> -->
      <v-toolbar-title class="headline text-uppercase">
        <span>Scenario</span>
        <span class="font-weight-light">Showcase</span>
      </v-toolbar-title>
    </v-toolbar>
    <!-- . -->
  </div>
  <!-- <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar> -->
</template>

<script>
export default {
  name: "main-toolbar-component",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Sign Up", path: "/auth/sign-up" },
        { title: "Sign In", path: "/auth/sign-in" }
      ]
    }; //end-return
  }, //end-data
  methods: {
    navigateTo(path) {
      // eslint-disable-next-line
      // console.log(path);
      this.drawer = !this.drawer;
      this.$router.push(path);
    }
  } //end-methods
};
</script>

<style scoped></style>
