<template>
  <div>
    <div class="background">
      <img :src="imgSrc" width="100%" height="100%" alt="" />
    </div>
    <div class="login">
      <a-form
        :form="form"
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 12 }"
        @submit="handleSubmit"
      >
        <a-form-item label="username">
          <a-input
            v-decorator="[
              'username',
              {
                rules: [{ required: true, message: '请输入用户名!' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item label="password">
          <a-input type="password"
            v-decorator="[
              'password',
              {
                rules: [{ required: true, message: '请输入密码' }],
              },
            ]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit"> Submit </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>
<style scoped>
.background {
  width: 20%;
  height: 20%; /**宽高100%是为了图片铺满屏幕 */
  margin: auto;
}
.login {
  margin-left:20%;
}
</style>
<script>
// import  login from '../../public/mock/login'
// import {requseLogin} from '../assets/axios/api'
export default {
  data() {
    return {
      imgSrc: require("../../src/assets/logo.png"),
      res: {},
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
    };
  },
  methods: {
    handleSubmit(e) {
     
      e.preventDefault();
   
      this.form.validateFields((err, values) => {
        if (!err) {
          if(values.username==="admin"&&values.password==="admin"){
            this.$message.success('登录成功')
               this.$router.push({
                 path:'/index',
                 query: values
               })
          }else{
             this.$message.error('登录失败')
          this.$router.push({
            path:'/error'
          })
        }
          
        }
      });
    },
   
  },
  mounted() {
    this.axios.get("/mock/login.json").then((res) => {
      this.res = res;
    });
  },
};
</script>
