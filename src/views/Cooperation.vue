<template>
  <div class="cooperation">
    <div class="cooperation_banner">
      <img src="../assets/cooperation/banner.png" alt="" />
    </div>
    <div class="cooperation_mainpart">
      <div class="cooperation_mainpart_title">
        <p class="title">
          <span class="shouye">首页</span>
          <span class="arrows">></span>
          <span class="qiyehezuo">合作企业</span>
        </p>
        <p class="line">
          <span class="left"></span>
          <span class="right"></span>
        </p>
      </div>
      <div class="cooperation_mainpart_logo">
        <img src="../assets/cooperation/logo.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
};
</script>
<style lang='scss' scoped>
.cooperation {
  width: 100%;
  .cooperation_banner {
    min-width: 1200px;
    width: 100%;
    position: relative;
    z-index: 1;
     
    img {
      max-width: 1920px;
      width: 100%;
       height: 473px;
    }
  }
  .cooperation_mainpart {
    width: 1200px;
    height: 797px;
    background-color: #ffffff;
    position: relative;
    z-index: 119;
    margin-top: -120px;
    left: 300px;
    .cooperation_mainpart_title {
      padding-top: 38px;
      .title {
        font-size: 12px;
        padding-left: 84px;
        .shouye {
          color: #666666;
        }
        .arrows {
          padding-left: 6px;
        }
        .qiyehezuo {
          padding-left: 6px;
        }
      }
      .line {
        padding-top: 30px;
        padding-left: 70px;
        width: 185px;
        height: 4px;
        display: flex;
        .left {
          width: 65px;
          height: 4px;
          display: inline-block;
          background-color: #4dc1e9;
        }
        .right {
          width: 120px;
          height: 4px;
          display: inline-block;
          background-color: #348bcc;
        }
      }
    }
    .cooperation_mainpart_logo {
      margin-left: 148px;
      padding-top: 74px;
      img {
        height: 607px;
        width: 932px;
      }
    }
  }
}
</style>