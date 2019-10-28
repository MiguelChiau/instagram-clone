 <template>
  <div>
    <v-bottom-navigation :value="activeBtn" color="deep-purple" horizontal>
      <v-btn @click="goto('/')">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn>
        <span>Global</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn @click="goto('/newPost')">
        <span>Post</span>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn>
        <span>Notifications</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Profile</span>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>


<script>
export default {
  data() {
    return {
      activeBtn: 1
    };
  },
  methods: {
    goto(path) {
      this.$router.push(path);
    }
  }
};
</script>



