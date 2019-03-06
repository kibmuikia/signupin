<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  components: {
    HelloWorld
  }, //end-components
  data() {
    return {
      mail: "test@mail.com"
    }; //end-return
  }, //end-data
  mounted() {
    // this.test();
  }, //end-mounted
  methods: {
    test() {
      try {
        // eslint-disable-next-line
        // console.log(`Value of mail :: ${this.mail} .`);

        const Cryptr = require("cryptr");
        const cryptr = new Cryptr("myTotalySecretKey");
        const encryptedString = cryptr.encrypt(this.mail);

        // eslint-disable-next-line
        console.log(`Value of Encyrpted-mail :: ${encryptedString} .`);

        const decryptedString = cryptr.decrypt(encryptedString);

        // eslint-disable-next-line
        console.log(`Value of Decyrpted-mail :: ${decryptedString} .`);

        this.$router.push(`/auth/sign-in?mail=${encryptedString}`);
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
      } //end-try-catch
    } //end-test
  } //end-methods
}; //end-export
</script>
