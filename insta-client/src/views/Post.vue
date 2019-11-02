<template>
  <main class="post">
    <h3>New Image</h3>
    <!-- For the video strem/camera on -->
    <section class="stream">
      <video ref="video" id="video" width="100%" height="300" autoplay v-if="!captured"></video>
      <button @click="capture">Capture</button>
    </section>
    <!-- For the captured image -->
    <section class="capture">
      <canvas
        ref="canvas"
        id="canvas"
        width="100%"
        height="300"
        v-if="captured"
        :class="(captured) ? 'show' : 'hide' "
      ></canvas>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      video: {},
      canvas: {},
      captures: [],
      captured: false
    };
  },

  methods: {
    // To catpure the image
    capture() {
      this.canvas
        .getContext("2d")
        .drawImage(this.video, 0, 0, this.canvas.width, this.canvas.width);
      this.cap = this.canvas.toDataURL("image/png");
      this.captured = true;
    }
  },
  mounted() {
    this.video = this.$refs.video;
    this.video.width = window.innerWidth;
    // This will make the video take the screen's full size
    this.video.height = window.innerHeight - 80;

    if (this.$refs.canvas) {
      this.canvas = this.$refs.canvas;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight - 80;
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: true
        })
        .then(stream => {
          this.video.srcObject = stream;
          this.video.play.play();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style>
h3 {
  margin-top: 80px;
}
</style>