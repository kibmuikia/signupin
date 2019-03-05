<template>
  <v-container>
    <!-- <router-view></router-view> -->
    <v-layout text-xs-center wrap>
      <v-flex xs12 md6 offset-md3>
        <v-card class="teal accent-1">
          <v-card-title primary-title>
            <v-flex xs12 md6 offset-md3>
              <h3 class="headline">
                User Details,
                <small v-if="fromUrl"> [ {{ fromUrl }} ] </small>
              </h3>
            </v-flex>
          </v-card-title>
          <v-card-text>
            <v-layout text-xs-center wrap>
              <v-flex xs6 md6>
                <h4 class="title font-weight-regular">First Name</h4>
              </v-flex>
              <v-flex xs6 md6>
                <p v-if="userDetails.first_name">
                  {{ userDetails.first_name }}
                </p>
              </v-flex>
            </v-layout>
            <v-layout text-xs-center wrap>
              <v-flex xs6 md6>
                <h4 class="title font-weight-regular">Last Name</h4>
              </v-flex>
              <v-flex xs6 md6>
                <p v-if="userDetails.last_name">{{ userDetails.last_name }}</p>
              </v-flex>
            </v-layout>
            <v-layout text-xs-center wrap>
              <v-flex xs6 md6>
                <h4 class="title font-weight-regular">Email</h4>
              </v-flex>
              <v-flex xs6 md6>
                <p v-if="userDetails.email">{{ userDetails.email }}</p>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { db } from "@/fire/V1";

export default {
  name: "dashboard-layout",
  data() {
    return {
      fromUrl: "",
      userDetails: {
        first_name: "",
        last_name: "",
        email: ""
      }
    };
  },
  mounted() {
    this.checkQueryString();
  }, //end-mounted
  methods: {
    async checkQueryString() {
      if (this.$route.query.user) {
        this.fromUrl = this.$route.query.user;

        let docRef = db.collection("users");
        await docRef
          .where("name", "==", this.fromUrl)
          .get()
          .then(querySnapshot => {
            if (querySnapshot.empty) {
              // utils.showAlert(
              //   "Error",
              //   "Not Found, Invalid Credentials!",
              //   "error"
              // );
              // eslint-disable-next-line
              console.error("Invalid Credentials");
            } else {
              querySnapshot.docs.forEach(doc => {
                // eslint-disable-next-line
                // console.log(doc.data());
                this.userDetails.first_name = doc.data().first_name;
                this.userDetails.last_name = doc.data().last_name;
                this.userDetails.email = doc.data().email;
                // utils.showAlert(
                //   "Success",
                //   `Welcome, ${doc.data().name} !`,
                //   "success"
                // );
              });
            } //end-Else-If
          })
          .catch(error => {
            // utils.showAlert("Error", error, "error");
            // eslint-disable-next-line
            console.error(error);
          });
      }
    }
  },
  computed: {}
};
</script>
<style scoped></style>
