<template>
  <v-container>
    <!-- <router-view></router-view> -->
    <v-layout text-xs-center wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card class="teal accent-1">
          <v-card-title primary-title>
            <v-flex xs12 md6 offset-md3>
              <h3 class="headline">User Details</h3>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-layout text-xs-center wrap>
              <v-flex xs6 md6>
                <h4 class="title font-weight-regular">First Name</h4>
              </v-flex>
              <v-flex xs6 md6> Sample Name </v-flex>
            </v-layout>
            <v-layout text-xs-center wrap>
              <v-flex xs6 md6>
                <h4 class="title font-weight-regular">Last Name</h4>
              </v-flex>
              <v-flex xs6 md6> Sample Mwisho </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "dashboard-layout",
  data() {
    return {};
  },
  methods: {},
  computed: {}
};
</script>
<style scoped></style>
