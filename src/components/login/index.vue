<template>
  <div class="login_body">
    <div>
      <input type="text" class="login_text" placeholder="账户名/手机号/Email" />
    </div>
    <div>
      <input type="text" class="login_text" placeholder="请输入您的密码" />
    </div>
    <div class="login_btn">
        <input type="button" value="登录">
    </div>
    <div class="login_link">
        <a href="#">立即注册</a>
        <a href="#">找回密码</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.login_body {
  width: 100%;
  .login_text {
    width: 100%;
    height: 40px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    text-indent: 10px;
    margin-bottom: 5px;
  }
  .login_btn{
      height: 50px;
      margin: 10px;
      input{
          width: 100%;
          height: 100%;
          border: none;
          background-color: #e54847;
          font-size: 20px;
          color: #fff;
          border-radius: 3px;
      }
  }
  .login_link{
      display: flex;
      justify-content: space-between;
      a{
          padding: 5px;
          font-size: 13px;
          color: #e54847;
      }
  }
}
</style>