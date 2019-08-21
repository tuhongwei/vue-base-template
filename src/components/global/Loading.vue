<template>
  <div id="loading" class="lx-load-mark">
    <div class="lx-load-box">
      <div class="lx-loading">
        <div
          :class="['loading_leaf', 'loading_leaf_' + (n - 1)]"
          v-for="n in loadingLeafNum"
          :key="n"
        ></div>
      </div>
      <div class="lx-load-content">{{ loadingText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return { loadingLeafNum: 12 };
  },
  props: {
    loadingText: {
      type: String,
      default: '加载中...'
    }
  }
};
</script>

<style scoped>
.lx-load-mark {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.lx-load-box {
  position: absolute;
  z-index: 3;
  width: 91.2px;
  min-height: 91.2px;
  top: 40%;
  left: 50%;
  margin-left: -45.6px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  border-radius: 5px;
  color: #fff;
}

.lx-loading {
  position: absolute;
  width: 0;
  left: 50%;
  top: 38%;
}

.lx-load-content {
  margin-top: 64%;
  font-size: 14px;
}

.loading_leaf {
  position: absolute;
  top: -1px;
  opacity: 0.25;
}

.loading_leaf::before {
  content: ' ';
  position: absolute;
  width: 9.14px;
  height: 3.08px;
  background: #d1d1d5;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.0980392);
  border-radius: 1px;
  -webkit-transform-origin: left 50% 0;
  transform-origin: left 50% 0;
}

.loading_leaf_0 {
  animation: opacity-0 1.25s linear infinite;
}

.loading_leaf_0::before {
  transform: rotate(0deg) translate(7.92px);
}

@keyframes opacity-0 {
  0% {
    opacity: 0.25;
  }

  0.01% {
    opacity: 0.25;
  }

  0.02% {
    opacity: 1;
  }

  60.01% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}

.loading_leaf_1 {
  animation: opacity-1 1.25s linear infinite;
}

.loading_leaf_1::before {
  transform: rotate(30deg) translate(7.92px);
}

@keyframes opacity-1 {
  0% {
    opacity: 0.25;
  }

  8.34333% {
    opacity: 0.25;
  }

  8.35333% {
    opacity: 1;
  }

  68.3433% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}

.loading_leaf_2 {
  animation: opacity-2 1.25s linear infinite;
}

.loading_leaf_2::before {
  transform: rotate(60deg) translate(7.92px);
}

@keyframes opacity-2 {
  0% {
    opacity: 0.25;
  }

  16.6767% {
    opacity: 0.25;
  }

  16.6867% {
    opacity: 1;
  }

  76.6767% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}

.loading_leaf_3 {
  animation: opacity-3 1.25s linear infinite;
}

.loading_leaf_3::before {
  transform: rotate(90deg) translate(7.92px);
}

@keyframes opacity-3 {
  0% {
    opacity: 0.25;
  }

  25.01% {
    opacity: 0.25;
  }

  25.02% {
    opacity: 1;
  }

  85.01% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}

.loading_leaf_4 {
  animation: opacity-4 1.25s linear infinite;
}

.loading_leaf_4::before {
  transform: rotate(120deg) translate(7.92px);
}

@keyframes opacity-4 {
  0% {
    opacity: 0.25;
  }

  33.3433% {
    opacity: 0.25;
  }

  33.3533% {
    opacity: 1;
  }

  93.3433% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}

.loading_leaf_5 {
  animation: opacity-5 1.25s linear infinite;
}

.loading_leaf_5::before {
  transform: rotate(150deg) translate(7.92px);
}

@keyframes opacity-5 {
  0% {
    opacity: 0.270958333333333;
  }

  41.6767% {
    opacity: 0.25;
  }

  41.6867% {
    opacity: 1;
  }

  1.67667% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.270958333333333;
  }
}

.loading_leaf_6 {
  animation: opacity-6 1.25s linear infinite;
}

.loading_leaf_6::before {
  transform: rotate(180deg) translate(7.92px);
}

@keyframes opacity-6 {
  0% {
    opacity: 0.375125;
  }

  50.01% {
    opacity: 0.25;
  }

  50.02% {
    opacity: 1;
  }

  10.01% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.375125;
  }
}

.loading_leaf_7 {
  animation: opacity-7 1.25s linear infinite;
}

.loading_leaf_7::before {
  transform: rotate(210deg) translate(7.92px);
}

@keyframes opacity-7 {
  0% {
    opacity: 0.479291666666667;
  }

  58.3433% {
    opacity: 0.25;
  }

  58.3533% {
    opacity: 1;
  }

  18.3433% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.479291666666667;
  }
}

.loading_leaf_8 {
  animation: opacity-8 1.25s linear infinite;
}

.loading_leaf_8::before {
  transform: rotate(240deg) translate(7.92px);
}

@keyframes opacity-8 {
  0% {
    opacity: 0.583458333333333;
  }

  66.6767% {
    opacity: 0.25;
  }

  66.6867% {
    opacity: 1;
  }

  26.6767% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.583458333333333;
  }
}

.loading_leaf_9 {
  animation: opacity-9 1.25s linear infinite;
}

.loading_leaf_9::before {
  transform: rotate(270deg) translate(7.92px);
}

@keyframes opacity-9 {
  0% {
    opacity: 0.687625;
  }

  75.01% {
    opacity: 0.25;
  }

  75.02% {
    opacity: 1;
  }

  35.01% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.687625;
  }
}

.loading_leaf_10 {
  animation: opacity-10 1.25s linear infinite;
}

.loading_leaf_10::before {
  transform: rotate(300deg) translate(7.92px);
}

@keyframes opacity-10 {
  0% {
    opacity: 0.791791666666667;
  }

  83.3433% {
    opacity: 0.25;
  }

  83.3533% {
    opacity: 1;
  }

  43.3433% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.791791666666667;
  }
}

.loading_leaf_11 {
  animation: opacity-11 1.25s linear infinite;
}

.loading_leaf_11::before {
  transform: rotate(330deg) translate(7.92px);
}

@keyframes opacity-11 {
  0% {
    opacity: 0.895958333333333;
  }

  91.6767% {
    opacity: 0.25;
  }

  91.6867% {
    opacity: 1;
  }

  51.6767% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.895958333333333;
  }
}
</style>
