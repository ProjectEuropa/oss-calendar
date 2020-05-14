<template>
  <div id="app">
    <component v-bind:is="layout" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultLayout: "default"
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || this.defaultLayout) + "-layout";
    }
  }
};
</script>
