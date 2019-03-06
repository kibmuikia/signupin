<template>
  <v-layout text-xs-center wrap>
    <v-flex xs12>
      <v-img
        :src="require('@/assets/A.svg')"
        class="my-3"
        contain
        height="200"
      ></v-img>
    </v-flex>
    <!-- . -->
    <v-flex xs12 class="">
      <v-card>
        <v-card-title primary-title>
          <v-flex xs12 md6 offset-md3>
            <h3 class="headline">Sign In Form</h3>
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-form ref="formSignIn" @submit.prevent="signIn">
            <v-layout wrap row>
              <v-flex xs12>
                <v-text-field
                  v-model="user.email"
                  label="E-mail"
                  :rules="modelValidations.email"
                  append-icon="alternate_email"
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="user.password"
                  label="Password"
                  :rules="modelValidations.password"
                  :type="passwordFieldType"
                  @mouseenter="passwordFieldType = 'text'"
                  @mouseleave="passwordFieldType = 'password'"
                  append-icon="remove_red_eye"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs6 md6>
                <v-btn flat color="green" type="submit" :loading="loadFlag">
                  Submit Details
                </v-btn>
              </v-flex>
              <v-flex xs6 md6>
                <v-btn v-on:click="resetForm" flat color="red" small>
                  Reset
                </v-btn>
              </v-flex>
            </v-layout>
          </v-form>
        </v-card-text>
        <!-- <v-card-actions> </v-card-actions> -->
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import utils from "@/utils/V1";
import { db } from "@/fire/V1";

export default {
  name: "sign-in-component",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      passwordFieldType: "password",
      modelValidations: {
        email: [
          v => !!v || "Email is required",
          // eslint-disable-next-line
          v =>
            /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(
              v
            ) || "E-mail must be valid"
        ],
        password: [
          v => !!v || "Password is required",
          v => v.length > 4 || "Password must be more than 4 characters"
        ]
      },
      loadFlag: false
    }; //end-return
  }, //end-data
  methods: {
    async signIn() {
      this.loadFlag = true;

      if (!this.$refs.formSignIn.validate()) {
        utils.showAlert("Error", "Invalid Data", "error");
        this.loadFlag = false;
        return;
      }

      let docRef = db.collection("users");
      await docRef
        .where("email", "==", this.user.email)
        .where("password", "==", this.user.password)
        .get()
        .then(querySnapshot => {
          this.loadFlag = false;

          if (querySnapshot.empty) {
            utils.showAlert(
              "Error",
              "Not Found, Invalid Credentials!",
              "error"
            );
          } else {
            querySnapshot.docs.forEach(doc => {
              // eslint-disable-next-line
              // console.log(doc.data());
              utils.showAlert(
                "Success",
                `Welcome, ${doc.data().name} !`,
                "success"
              );
              this.resetForm();
              this.$router.push("/dashboard?user=" + doc.data().name);
            });
          } //end-Else-If
        })
        .catch(error => {
          utils.showAlert("Error", error, "error");
          this.loadFlag = false;
        });
    }, //end-signIn
    resetForm() {
      var self = this;
      //Iterate through each object field, key is name of the object field`
      Object.keys(this.user).forEach(function(key) {
        self.user[key] = "";
      });
      this.$refs.formSignIn.resetValidation();
      // this.$refs.formSignIn.reset();
    }, //end-resetForm
    checkMail() {
      if (this.$route.query.mail) {
        const Cryptr = require("cryptr");
        const cryptr = new Cryptr("myTotalySecretKey");
        // eslint-disable-next-line
        // console.log(`Value of mail :: ${this.$route.query.mail} .`);
        const decryptedString = cryptr.decrypt(this.$route.query.mail);
        // eslint-disable-next-line
        // console.log(`Value of decryptedString :: ${decryptedString} .`);
        // this.user.email = this.$route.query.mail;
        this.user.email = decryptedString;
      } //end-if
    } //end-checkMail
  }, //end-methods
  computed: {}, //end-computed
  mounted() {
    this.checkMail();
  } //end-mounted
};
</script>
<style scoped></style>
