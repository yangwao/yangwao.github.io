<template>
  <canvas id="canv" width="32" height="32">
  </canvas>
</template>

<style>
/*body {
  width: 100%;
}*/

canvas {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
}
</style>

<script>
if (process.BROWSER_BUILD) {
  require('~/components/canvasBackground.js')
}
</script>
