<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content"  placeholder="请输入密码" />
    </div>
    <div class="wrapper__login-button">登陆</div>
    <div class="wrapper__login-link">立即注册</div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper {
  position: absolute; /*垂直居中*/
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto; /*左右居中*/
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem; /*input距离两边的距离*/
    padding: 0 .16rem;
    background: #F9F9F9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    &__content {
      /*
      对于很多元素来说，如果没有设置样式，轮廓是不可见的。因为样式（style）的默认值是 none。
      但 input 元素是例外，其样式默认值由浏览器决定。

      将 outline 设置为 0 或 none 会移除浏览器的默认聚焦样式。如果一个元素可交互，
      这个元素必须有一个可见的聚焦提示。若移除了默认聚焦样式，记得提供一个显眼的聚焦样式。
      */
      line-height: .48rem; /*用行高来撑开*/
      border: none; 
      outline: none; 
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder { /*伪元素::placeholder可以选择一个表单元素的占位文本，它允许开发者和设计师自定义占位文本的样式*/
        color: $content-notice-fontcolor;
      }
    }
  }
  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__login-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>