
<template>
  <main class="feed">
    <v-app>
      <article class="post" v-for="post in feed" :key="post.id">
        <header class="post-user">{{post.display_name}}</header>
        <section class="post-picture">
          <img :src="post.image" :alt="post.desc" class="post-image" />
        </section>
        <footer class="post-desc">
          <p>
            <strong>{{post.display_name}}:</strong>
            {{post.desc}}
          </p>
          <p class="timestamp">{{ timestampToDate(post.timestamp) }}</p>
        </footer>
      </article>
    </v-app>
  </main>
</template>

<script>
export default {
  computed: {
    feed() {
      return this.$store.state.feed;
    }
  },
  methods: {
    timestampToDate(timestamp) {
      let date = new Date(timestamp);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;

      if (month < 10) {
        month = "0" + month;
      }
      let day = date.getDate();

      if (day < 10) {
        day = "0" + day;
      }

      return day + "/" + month + "/" + year;
    }
  }
};
</script>

<style >
.feed {
  margin-top: 80px;
}

.post {
  background: #fff;
  padding-bottom: 15px;
}

.post-user {
  display: flex;
  align-items: center;
  height: 30px;
  text-align: center;
}
.post-picture {
  width: 600px;
  margin: 0 auto;
}
@media only screen and (max-width: 600px) {
  .post-picture {
    width: 100%;
  }
}
.post-image {
  width: 100%;
}

article {
  text-align: center;
}
</style>