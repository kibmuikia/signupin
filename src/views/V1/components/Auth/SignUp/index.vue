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
    <v-flex xs12 class="">
      <v-card>
        <v-card-title primary-title>
          <v-flex xs12 md6 offset-md3>
            <h3 class="headline">Sign Up Form</h3>
          </v-flex>
        </v-card-title>
        <v-card-text>
          <v-form
            ref="formSignUp"
            @submit.prevent="signUp"
            enctype="multipart/form-data"
          >
            <v-layout wrap row>
              <v-flex xs12>
                <v-text-field
                  v-model="user.name"
                  label="Username"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md5>
                <v-text-field
                  v-model="user.first_name"
                  label="First Name"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md5 offset-md2>
                <v-text-field
                  v-model="user.last_name"
                  label="Last Name"
                ></v-text-field>
              </v-flex>
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
// import { dbKibblog, profilePhotosRef } from '@/fireB'

export default {
  name: "sign-up-component",
  data() {
    return {
      user: {
        name: "",
        first_name: "",
        last_name: "",
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
    async signUp() {
      this.loadFlag = true;

      if (!this.$refs.formSignUp.validate()) {
        utils.showAlert("Error", "Invalid Data", "error");
        this.loadFlag = false;
        return;
      }
      await db
        .collection("users")
        .add(this.user)
        // eslint-disable-next-line
        .then(docRef => {
          // eslint-disable-next-line
          // console.log(docRef);
          // console.log("Document written with ID: ", docRef.id);
          utils.showAlert(
            "Success",
            `Registration of, ${this.user.name}, successful !`,
            "success"
          );
          this.loadFlag = false;

          const Cryptr = require("cryptr");
          const cryptr = new Cryptr("myTotalySecretKey");
          const encryptedMail = cryptr.encrypt(this.user.email);

          this.$router.push(`/auth/sign-in?mail=${encryptedMail}`);
          this.resetForm();
        })
        .catch(error => {
          // console.error("Error adding document: ", error);
          utils.showAlert("Error", `[ ${error} ]`, "error");
          this.loadFlag = false;
        });
    }, //end-signUp
    resetForm() {
      var self = this;
      //Iterate through each object field, key is name of the object field`
      Object.keys(this.user).forEach(function(key) {
        self.user[key] = "";
      });
      this.$refs.formSignUp.resetValidation();
      // this.$refs.formSignUp.reset();
    } //end-resetUser
  }, //end-methods
  computed: {} //end-computed
};
</script>
<style scoped></style>
