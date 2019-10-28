<template>
  <main class="post">
    <h3>New Image</h3>
    <section class="stream">
      <video ref="video" id="video" width="100%" height="300" autoplay></video>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      video: {}
    };
  },

  methods: {},
  mounted() {
    this.video = this.$refs.video;
    this.video.width = window.innerWidth;
    console.log(this.video);
  }
};
</script>

<style>
h3 {
  margin-top: 80px;
}
</style>