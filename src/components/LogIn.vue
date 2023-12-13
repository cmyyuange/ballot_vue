<script setup>
import { ref } from 'vue';
import Swal from "sweetalert2";

let sign_up_window = ref(false);
const username_1 = ref('');
const username_2 = ref('');
const password_1 = ref('');
const password_2 = ref('');
const handle_sign_in = () => {
  if (localStorage.getItem(username_1.value) === password_1.value) {
    // 登录成功
    Swal.fire({
      position: "center",
      icon: "success",
      title: "登陆成功",
      showConfirmButton: false,
      timer: 1500
    }).then();
  }else {
    Swal.fire({
      icon: "error",
      title: "错误",
      text: "用户名或密码错误！",
    });
  }
 }
const handle_confirm = () => {
  if (localStorage.getItem(username_2.value) == null) {
    localStorage.setItem(username_2.value,password_2.value);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "注册成功",
      showConfirmButton: false,
      timer: 1500
    }).then(sign_up_window = false);
  }else {
    Swal.fire({
      icon: "error",
      title: "错误",
      text: "用户名已存在！",
    });
  }
}
</script>

<template>
  <div id="background">
    <div id="background-board">
      <div id="logIn-frame">
        <div id="logo">
          <img src="../assets/szu_logo.png" alt="szu_logo" style="width: 100px; height: auto; margin-top: 20px; margin-bottom: 30px">
        </div>
        <div>
          <input type="text" id="username" placeholder="请输入账户" v-model="username_1">
        </div>
        <div>
          <input type="password" id="password" placeholder="请输入密码" v-model="password_1">
        </div>
        <div id="log-button-panel">
          <button class="log-button" type="button" @click="handle_sign_in">登 录</button>
          <button class="log-button" type="button" @click="sign_up_window = true">注 册</button>
        </div>
      </div>
    </div>

    <transition name="modal">
      <div v-if="sign_up_window" class="modal">
        <div>
          <input type="text" id="username" placeholder="请输入账户" v-model="username_2">
        </div>
        <div>
          <input type="password" id="password" placeholder="请输入密码" v-model="password_2">
        </div>
        <div id="log-button-panel">
          <button class="log-button" type="button" @click="handle_confirm">确 定</button>
          <button class="log-button" type="button" @click="sign_up_window = false">关 闭</button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>

/* 大背景 */
#background {
  background-image: url('../assets/jhk-1702398763890.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%; /* 视口宽度的 100% */
  height: 98vh; /* 视口高度的 100% */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 背景板 */
#background-board {
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  width: 400px;
  height: 400px;
}

#logIn-frame {
  display: grid;
  place-items: center;
}

/* 文本输入框 */
input {
  width: 300px;
  border: 1px solid #ccc; /* 设置边框颜色和粗细 */
  border-radius: 20px; /* 设置边框圆角 */
  padding: 10px; /* 内部填充 */
  margin: 10px 0; /* 外边距 */
  background-color: rgba(136, 136, 136, 0.1); /* 背景颜色 */
  font-size: 20px;
  color: rgba(139,0,0,0.8);
  text-align: center;
  transition: border-color 0.6s, transform 0.6s;
}

/* 输入文本焦点 */
input:focus {
  border-color: #888; /* 焦点时的边框颜色 */
  box-shadow: 0 0 15px rgba(136, 136, 136, 0.8); /* 添加一个轻微的阴影 */
  outline: none; /* 移除默认的轮廓 */
}

/* 输入文本悬停 */
input:hover {
  border-color: #888; /* 悬停时的边框颜色 */
}

/* 输入文本占位符 */
input::placeholder {
  color: rgba(255, 255, 255, 0.5); /* 占位符文字颜色 */
  font-style: italic; /* 斜体样式 */
  text-align: center;
  font-size: 15px;
}

/* 登录注册按钮悬停效果 */
#log-button-panel {
  display: flex;
  justify-content: center;
}

/* 登录注册按钮 */
.log-button {
  background-color: rgba(139, 0, 0, 0.5);
  color: white;
  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  margin: 15px 20px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.6s, transform 0.6s;
}

/* 登录注册按钮悬停效果 */
.log-button:hover {
  background-color: rgba(139, 0, 0, 1);
  transform: scale(1.2);
  box-shadow: 0 0 15px rgba(139, 0, 0, 0.3);
}

/* 弹出窗口 */
.modal {
  position: fixed;
  background-color: white;
  padding: 100px;
  border-radius: 20px;
  border: 1px solid #ddd;
  z-index: 1000;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.6s;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

</style>