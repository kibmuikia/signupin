<template>
  <v-app>
    <Toolbar />

    <!-- <v-content>
      <router-view></router-view>
    </v-content> -->

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center wrap>
          <!-- <v-flex text-xs-center>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon large>code</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/rJdVMq"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
            </v-tooltip>
          </v-flex> -->
          <!-- <transition name="maineffect"> -->
          <router-view></router-view>
          <!-- </transition> -->
        </v-layout>
      </v-container>
    </v-content>

    <Footer />
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    // HelloWorld
    Toolbar,
    Footer
  },
  data() {
    return {
      drawer: false
    };
  }, //end-data
  methods: {
    //func
  } //end-methods
};
</script>

<style>
/* style */
</style>
