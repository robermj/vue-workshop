<template>
  <div class="animations">
    <h1>Animations</h1>
    <app-code-snippet :code="anim1"></app-code-snippet>
    <p>
      Vue will automatically sniff whether the target element has
      CSS transitions or animations applied. If it does, CSS transition
      classes will be added/removed at appropriate timings.
    </p>
    <div>
      <button class="btn btn-primary" @click="show1 = !show1">Toggle Fade</button>
      <transition name="fade">
        <div class="alert alert-primary" v-if="show1">This div will fade in or fade out...</div>
      </transition>
    </div>
    <div>
      <button class="btn btn-primary" @click="show2 = !show2">Toggle Slide</button>
      <transition name="slide-fade">
        <div class="alert alert-secondary" v-if="show2">This div will slide in or slide out..</div>
      </transition>
    </div>
    <div>
      <!-- Multiple elements need to have a key to identify the element -->
      <button class="btn btn-primary" @click="show3 = !show3">Toggle Slide</button>
      <transition name="bounce" mode="out-in">
        <div class="alert alert-info" v-if="show3" key="div1">This div will bounce..</div>
        <div class="alert alert-warning" v-if="!show3" key="div2">This div will also bounce..</div>
      </transition>
    </div>
    <div id="list-demo">
      <button class="btn btn-success" v-on:click="add">Add</button>
      <button class="btn btn-danger" v-on:click="remove">Remove</button>
      <transition-group name="list" tag="ul" class="list-group">
        <li v-for="item in items" v-bind:key="item" class="list-group-item">{{ item }}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import animation1 from '../codeSnippets/animations';

export default {
  data() {
    return {
      anim1: animation1,
      show1: true,
      show2: true,
      show3: true,
      items: [1, 2, 3, 4, 5, 6],
      nextNum: 7,
    };
  },
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length);
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++); // eslint-disable-line
    },
    remove() {
      this.items.splice(this.randomIndex(), 1);
    },
  },
};
</script>

<style scoped>
/* ----------------------------------------------------------------- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
/* ----------------------------------------------------------------- */
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(50px);
  opacity: 0;
}
/* ----------------------------------------------------------------- */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
/* ----------------------------------------------------------------- */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/* ----------------------------------------------------------------- */
.animations {
  margin-bottom: 5rem;
}
</style>
