<template>
  <main class="view post">
    <!-- For the video strem/camera on -->
    <section class="stream">
      <video
        ref="video"
        id="video"
        width="100%"
        height="300"
        autoplay
        :class="(!captured) ? 'show' : 'hide'"
      ></video>
      <div class="post-btns">
        <button class="capture-btn" @click="capture" v-if="!captured">
          <i class="material-icons icn-lg">Capture</i>
        </button>

        <section class="buttons">
          <v-btn class="cancel-btn" @click="cancel" v-if="captured">
            <span>Delete</span>
            <v-icon>mdi-delete</v-icon>
          </v-btn>

          <v-btn class="upload-btn" @click="upload" v-if="captured">
            <span>Upload</span>
            <v-icon>mdi-upload</v-icon>
          </v-btn>
        </section>
      </div>
    </section>
    <section :class="(captured) ? 'show' : 'hide'">
      <canvas ref="canvas" id="canvas" width="100%" height="300"></canvas>
      <div class="field-group">
        <label for="desc">Description:</label>
        <input type="text" id="desc" name="desc" class="input-field" v-model="desc" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      video: {},
      canvas: {},
      constraints: {},
      cap: "",
      desc: "",
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
    },
    cancel() {
      this.captured = false;
    },
    upload() {
      let api_url = this.$store.state.api_url;
      this.$http
        .post(api_url + "post/newpost", {
          auth_token: localStorage.getItem("jwt"),
          image: this.cap,
          desc: this.desc
        })
        .then(response => {
          console.log(response);
          this.captured = false;
          this.cap = "";
          this.desc = "";
        });
    }
  },
  mounted() {
    this.video = this.$refs.video;
    this.video.width = window.innerWidth;
    // This will make the video take the screen's full size
    this.video.height = window.innerHeight - 80;
    this.constraints = {
      width: window.innerWidth,
      height: window.innerWidth
    };
    if (this.$refs.canvas) {
      this.canvas = this.$refs.canvas;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerWidth;
    }

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: this.constraints
        })
        .then(stream => {
          this.video.srcObject = stream;
          this.video.play();
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>
<style>
.show {
  display: block;
}
.hide {
  display: none;
}
.capture-btn {
  position: absolute;
  bottom: 480px;
  left: 50%;
  transform: translateX(-50%);
  background-color: aqua;
  padding: 10px 10px;
}
#video,
#canvas {
  width: 100%;
  display: block;
  margin: 0 auto;
}
#canvas {
  height: 400px;
}

@media only screen and (min-width: 789px) {
  #video,
  #canvas {
    width: 690px;
    display: block;
    margin: 0 auto;
  }
  .capture-btn {
    bottom: 200px;
  }
}

.buttons {
  display: flex;
  margin-bottom: 25px;
}
.cancel-btn {
  display: block;
  margin: 0 auto;
}

.upload-btn {
  display: block;
  margin: 0 auto;
}
</style>