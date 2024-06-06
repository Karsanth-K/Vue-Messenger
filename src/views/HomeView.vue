<template>
  <div class="homeView">
    <div class="messageDiv cntntDiv">
      <div class="messageHead header-footer">Sanjay Girish asdasd sadsad sadas dasd sad sad</div>
      <div class="messageCntnt"></div>
      <div class="messageFooter header-footer">
        <div class="input-div">
          <button class="emojiBtn">☺</button>
          <textarea type="text" class="messageInput" autofocus />
          <button class="messageSendBtn"><img src="../img/sendMsgIcon.png" alt="send" /></button>
        </div>
      </div>
    </div>
    <div class="contactDiv cntntDiv"></div>
  </div>
</template>

<script setup>
//imports
import { useUserStore } from '@/stores/userStore'

//user store
const userStore = useUserStore()
</script>

<style scoped>
.homeView {
  border-radius: 10px;
  margin: auto;
  background: #1b1b1b15;
  box-shadow: 5px 5px 10px;
  backdrop-filter: blur(15px);
  height: 85vh;
  max-height: 750px;
  min-height: 500px;
  width: 80vw;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.75vw;
}
.homeView > .cntntDiv {
  background: #a3a3a30b;
  backdrop-filter: blur(20px);
  box-shadow: 2px 2px 5px;
  max-height: 750px;
  border-radius: 7px;
  overflow: hidden;
}
.homeView > .messageDiv {
  width: 70%;
  height: 100%;
}
.homeView > .contactDiv {
  width: 30%;
  height: 100%;
  min-width: 250px;
  margin-left: 0.75vw;
}
.header-footer {
  background: linear-gradient(-45deg, #0f0f0fa0, #404040a0, #0f0f0fa0);
  background-color: black;
  box-shadow: 0 0 20px #0f0f0f;
  padding: 10px 0px 10px 20px;
  width: 100%;
}
.messageDiv > .messageHead {
  color: #bababa;
  font-size: x-large;
  font-weight: 600;
  height: 5%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.messageDiv > .messageCntnt {
  overflow-y: auto;
  padding: 10px;
  position: relative;
  width: 100%;
  height: 79%;
}
.messageCntnt::-webkit-scrollbar {
  width: 22px;
}
.messageDiv > .messageFooter {
  position: absolute;
  bottom: 0;
  padding: 0;
  height: 10%;
}
.messageFooter > .input-div {
  width: 90%;
  margin: auto;
  position: relative;
  top: 50%;
  translate: 0 -50%;
  height: 70%;
  display: flex;
  align-items: center;
  border: 1px solid #656565;
  border-radius: 500px;
}
.input-div > .emojiBtn {
  font-size: 5cqh;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  color: #ffffff54;
  position: relative;
  bottom: 10%;
  margin-left: 5px;
  transition: all 100ms;
  cursor: pointer;
}
.input-div > .emojiBtn:hover {
  color: #ddd;
  scale: 1.1;
}
.input-div > .messageSendBtn {
  width: fit-content;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #ffffff54;
  transition: all 100ms;
}
.messageSendBtn > img {
  rotate: -30deg;
  filter: brightness(2);
  width: 3cqh;
  height: 3cqh;
}
.input-div > .messageSendBtn:hover > img {
  filter: brightness(4);
  scale: 1.1;
}
.input-div > .messageInput {
  background-color: transparent;
  resize: none;
  color: #c0c0c0;
  border: none;
  outline: none;
  width: 100%;
  height: 40%;
  border-radius: 10px;
  font-size: 2cqh;
  padding: 10px;
}
.messageInput::-webkit-scrollbar {
  width: 2px;
}
.sample {
  color: white;
}
@media (max-width: 800px) {
  .homeView {
    padding: 5px;
    box-shadow: 0 0 10px;
    width: 95vw;
  }
  .homeView > .messageDiv {
    width: 100%;
    min-width: 0px;
  }
  .header-footer {
    background-color: black;
  }
  .homeView > .contactDiv {
    min-width: 0px;
    width: 0px;
  }
  .messageDiv > .messageHead {
    font-size: large;
    padding: 5px 0px 5px 10px;
  }
  .input-div > .messageInput {
    font-size: small;
  }
}
</style>
