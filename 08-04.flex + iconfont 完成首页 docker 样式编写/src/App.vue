<template>
  <div class="docker">
    <!-- block__element--Modifier -->
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe6f3;</div>
      <div class="docker__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe7e5;</div>
      <div class="docker__title">购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe61e;</div>
      <div class="docker__title">订单</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe660;</div>
      <div class="docker__title">我的</div>
    </div>
  </div>
</template>

<style lang="scss">
.docker {
  display: flex; /*先布局*/
  box-sizing: border-box;
  position: absolute;
  padding: 0 0.18rem;
  left: 0;
  bottom: 0;
  width: 100%; /*要手动设置宽度*/
  height: 0.49rem;
  border-top: 1px solid #f1f1f1; /**/
  &__item {
    /*.docker__item*/
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      // padding: 0.07rem 0 0.02rem 0;
      font-size: 0.18rem;
    }
    &--active { /*不一定是嵌套关系*/
      /*.docker__item--active*/
      color: #1fa4fc;
    }
  }
  &__title {
    font-size: 20px;
    transform: scale(0.5, 0.5); /*通过缩放展示10px字体*/
    transform-origin: center top;
  }
}
</style>
