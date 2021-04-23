<template>
  <div class="Python">
    <!-- banner  start -->
    <div class="python_banner"></div>

    <!-- user start -->
    <div class="python_user">
      <h1><span>人工智能</span>的时代已经到来</h1>
      <p>
        2017年7月20日,国务院发布《新一代人工智能发展规划》,正式开启国内人工智能的新篇章
        <br />
        传统教育改革,开启“ 全民学Python ”时代
      </p>
      <div class="user_back"></div>
    </div>

    <!-- student start  -->
    <div class="python_student"></div>
    <!-- ---------------------------------- -->
    <div class="python_xingtai_warp">
      <div class="python_smart_title">
        <h2>Python+人工智能<span>是什么</span></h2>
        <h5>
          Python作为当下最热门的编程语言,在2018年世界脚本语言排行榜中位列榜首
        </h5>
      </div>
      <div class="python_introduce_warp">
        <div class="python_introduce">
          <div class="python_logos_py">
            <img src="../assets/python/dahua_python_logos.png" alt="" />
            <h1>Python</h1>
          </div>
          <div class="introduce">
            <div class="Python_top_zi">
              Python是一种面向对象的解释性计算机程序设计语言,具有丰富强大的库。它常被昵称为
              胶水语言,能够把用其他语言制作的各种模块 (尤其是c/c++)
              很轻松地联结在一起。
            </div>
            <div class="python_center_zi">
              Python作为当下最热门的编程语言，
              在2018年世界脚本语言排行榜中位列榜首已经成为多个领域的首选语言。
            </div>
            <div class="Python_bottom_zi">
              Python在各种流行编程语言中一直排名靠前。他几乎可以适用任何开发。它旨在提高程序员的
              开发效率而不在于他们编的代码。Python适用于网站·
              桌面应用开发，自动化脚本，复杂的
              计算机系统，科学计算，生命支持管理系统，物联网，游戏，机器人自然语言处理等很多方面。
              而且，即使对于那些没有开发经验的人来讲，Python的代码也是简介易懂的。由于Python程序代码
              ，所以和与其他程序语言相比，后期的程序维护更容易，更舒心。从商业角度来看，需要的成本降低
              ，程序员的效率提高。
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ---------------------------------- -->
    <!-- what-python start -->
    <div class="what_python">
      <h1>学习<span>Pythone语言</span>的优势</h1>
      <p>前景美好,待遇丰厚,明智选择</p>
      <ul>
        <li
          v-for="(data, index) in list"
          :key="data.title"
          :class="{ active: ind == index }"
          @mouseenter="move(index)"
          @mouseleave="leave(index)"
        >
          <img :src="data.imgUrl" alt="" />
          <div class="content">
            <div class="title">{{ data.title }}</div>
            <div class="p">
              {{ data.p }}
            </div>
            <div class="btn">
              <span>
                了解详情
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <!-- --------------------------------------- -->
    <div class="python_demand_title">
      <h2>一门语言搞定<span>多种IT需求</span></h2>
      <h5>Python横跨众多领域,更多的岗位任你选择发展</h5>
    </div>
    <div class="python_demand_warp">
      <div class="python_demand">
        <div class="demand">
          <div class="python_demand_left">
            <div class="python_demand_left_top">
              <img src="../assets/python/dahua_python_chong.png" alt="" />
              <h2>爬虫开发工程师</h2>
              <span>平均薪资：￥14670</span>
            </div>
            <div class="python_demand_left_bottom">
              <img src="../assets/python/dahua_python_qiu.png" alt="" />
              <h2>全站互联网开发工程师</h2>
              <span>平均薪资：￥16800</span>
            </div>
          </div>
          <div class="python_demand_center">
            <img src="../assets/python/dahua_python_jiqiren.png" alt="" />
            <h2>人工智能工程师</h2>
            <span>平均薪资：￥20000</span>
          </div>
          <div class="python_demand_right">
            <div class="python_demand_right_top">
              <img src="../assets/python/dahua_python_zujian.png" alt="" />
              <h2>大数据分析工程师</h2>
              <span>平均薪资：￥12800</span>
            </div>
            <div class="python_demand_right_bottom">
              <img src="../assets/python/dahua_python_logos2.png" alt="" />
              <h2>Python开发工程师</h2>
              <span>平均薪资：￥15000</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="python_demand_title">
      <h2><span>大话教育</span>Python培训的<span>教学优势</span></h2>
      <h5>选择大华明智是你一生最正确的选择</h5>
    </div>
    <div class="python_advantage">
      <div class="python_advantage_left">
        <div class="advantage">
          <img src="../assets/python/dahua_python_renxiang.png" alt="" />
        </div>
        <h2>三师指导一学员</h2>
        <div class="advantage_xuanze">
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />实战讲师授课
          </div>
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />班主任学习进度跟进
          </div>
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />助教24小时贴身答疑
          </div>
        </div>
      </div>
      <div class="python_advantage_center">
        <div class="advantage">
          <img src="../assets/python/dahua_python_rili.png" alt="" />
        </div>
        <h2>三师指导一学员</h2>
        <div class="advantage_xuanze">
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />实战讲师授课
          </div>
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />班主任学习进度跟进
          </div>
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />助教24小时贴身答疑
          </div>
        </div>
      </div>
      <div class="python_advantage_right">
        <div class="advantage">
          <img src="../assets/python/dahua_python_yonghu.png" alt="" />
        </div>
        <h2>三师指导一学员</h2>
        <div class="advantage_xuanze">
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />实战讲师授课
          </div>
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />班主任学习进度跟进
          </div>
          <div>
            <img
              src="../assets/python/dahua_python_duihao.png"
              alt=""
            />助教24小时贴身答疑
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------------------------------------ -->

    <div class="python_bottom">
      <h1>大华教育<span>六大课程优势</span></h1>
      <p>选择大华明智是你一声最明智的选择</p>
      <div class="bottom-back">
        <div class="center">
          <div class="left">
            <div class="l-top">
              <div class="title">第四阶段</div>
              <p>数据分析入门</p>
              <p>数据分析高级</p>
            </div>
            <div class="l-center">
              <div class="title">第五阶段</div>
              <p>数据分析入门</p>
              <p>数据分析高级</p>
            </div>
            <div class="l-bottom">
              <div class="title">第六阶段</div>
              <p>数据分析入门</p>
              <p>数据分析高级</p>
            </div>
          </div>
          <div class="center">
            <div>
              <img src="../assets/python/dahua_python_center.png" alt="" />
            </div>
          </div>
          <div class="right">
            <div class="r-top">
              <div class="title">第一阶段</div>
              <p>数据分析入门</p>
              <p>数据分析高级</p>
            </div>
            <div class="r-center">
              <div class="title">第二阶段</div>
              <p>数据分析入门</p>
              <p>数据分析高级</p>
            </div>
            <div class="r-bottom">
              <div class="title">第三阶段</div>
              <p>数据分析入门</p>
              <p>数据分析高级</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ind: "",
      list: [
        {
          imgUrl: require("../assets/python/dahua_python_p1.jpg"),
          title: "人才缺口大",
          p:
            "python语言火爆全球,人才缺口高达40万，部分领域如人工智能、大数据开发人才稀缺.",
        },
        {
          imgUrl: require("../assets/python/dahua_python_p2.jpg"),
          title: "简单易学",
          p:
            "python语言火爆全球,人才缺口高达40万，部分领域如人工智能、大数据开发人才稀缺.",
        },
        {
          imgUrl: require("../assets/python/dahua_python_p3.jpg"),
          title: "就业领域广",
          p:
            "python语言火爆全球,人才缺口高达40万，部分领域如人工智能、大数据开发人才稀缺.",
        },
      ],
    };
  },
  methods: {
    move(index) {
      this.ind = index;
      this.isActive = true;
    },
    leave(index) {
      this.ind = index;
      this.isActive = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin title {
  text-align: center;
  font-size: 40px;
  font-weight: 600;
}
.python_banner {
  width: 100%;
  height: 650px;
  background: url(../assets/python/dahua_python_banner_1.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
.python_user {
  margin-bottom: 20px;
  h1 {
    padding: 75px 0 25px;
    @include title();
    span {
      color: #2893f5;
    }
  }
  p {
    text-align: center;
    color: #888888;
    font-size: 22px;
    line-height: 40px;
    margin-bottom: 40px;
  }
  .user_back {
    width: 1200px;
    margin: 0 auto;
    height: 554px;
    background-size: cover;
    background-position: center;
    background: url(../assets/python/dahua_python_banner_2.jpg) no-repeat;
  }
}
.python_student {
  width: 100%;
  height: 870px;
  background: url(../assets/python/dahua_python_student.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}
.what_python {
  h1 {
    padding: 75px 0 0;
    @include title();
    span {
      color: #2893f5;
    }
  }
  p {
    padding: 20px 0;
    text-align: center;
    color: #888888;
    font-size: 22px;
  }
  ul {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    li {
      position: relative;
      width: 390px;
      height: 760px;
      border-width: 2px;
      border-color: white;
      border-style: solid;
      color: white;
      img {
        width: 100%;
        display: block;
      }
      .content {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 384px;
        background: #178aff;
        transition: all 0.5s linear;
        .title {
          padding: 60px 0 20px;
          text-align: center;
          font-size: 34px;
          font-weight: bold;
        }
        .p {
          width: 344px;
          margin: 0 auto;
          color: white;
          text-indent: 2em;
          line-height: 40px;
          font-size: 20px;
        }
        .btn {
          margin-top: 50px;
          display: flex;
          justify-content: center;
          span {
            width: 144px;
            text-align: center;
            font-size: 18px;
            height: 40px;
            border-radius: 40px;
            line-height: 40px;
            border: 1px solid #fff;
          }
        }
      }

      &.active {
        border-color: #00c6ff;
        .content {
          height: 440px;
          background: #00c6ff;
        }
      }
    }
  }
}

.python_xingtai_warp {
  width: 100%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  .python_smart_title {
    height: 211px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
      span {
        color: #2893f5;
      }
    }
    h5 {
      text-align: center;
      color: #999;
      font-size: 20px;
      padding-top: 20px;
    }
  }
  .python_introduce_warp {
    width: 100%;
    height: 1131px;
    background: url(../assets/python/dahua_python_background_s.png) 0 0
      no-repeat;
    background-size: cover;
    .python_introduce {
      width: 1200px;
      margin: 0 auto;
      height: 1131px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .python_logos_py {
        width: 306px;
        height: 313px;
        padding: 80px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
        flex-direction: column;
        h1 {
          color: #fff;
          padding: 20px 0;
          margin-top: 20px;
          font-size: 40px;
          font-weight: bold;
        }
      }
      .introduce {
        height: 454px;
        flex: 1;
        color: #fff;
        font-size: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .Python_top_zi {
          line-height: 45px;
          text-indent: 2em;
        }
        .python_center_zi {
          text-indent: 2rem;
          line-height: 45px;
        }
        .Python_bottom_zi {
          line-height: 45px;
          text-indent: 2em;
        }
      }
    }
  }
}

.python_bottom {
  h1 {
    padding: 75px 0 0;
    @include title();
    span {
      color: #2893f5;
    }
  }
  p {
    padding: 20px 0;
    text-align: center;
    color: #888888;
    font-size: 22px;
  }
  .bottom-back {
    color: white;
    width: 100%;
    height: 750px;
    background: url(../assets/python/dahua_python_bottom.png) no-repeat;
    background-size: cover;
    background-position: center;
    .center {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      height: 100%;
      .left,
      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        p {
          padding: 5px 0;
        }
        .title {
          line-height: 50px;
          border-bottom: 2px solid #3af6ff;
        }
      }
      .center {
        height: 100%;
        width: 395px;
        margin: 0 auto;

        div {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        img {
          width: 100%;
          display: block;
        }
      }
      .title {
        font-size: 30px;
        font-weight: bold;
      }
      p {
        color: white;
        font-size: 24px;
      }
      .left {
        margin-left: 50px;
        p {
          text-align: left;
        }
        .l-center {
          margin: 90px 0;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            right: -83px;
            bottom: -13px;
            width: 2px;
            height: 164px;
            background: #3af6ff;
            transform: rotate(90deg);
          }
        }
        .l-top {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            right: -87px;
            bottom: -81px;
            width: 2px;
            height: 200px;
            background: #3af6ff;
            transform: rotate(-60deg);
          }
        }
        .l-bottom {
          position: relative;
          &::after {
            content: "";
            position: absolute;
            right: -87px;
            bottom: 19px;
            width: 2px;
            height: 200px;
            background: #3af6ff;
            transform: rotate(60deg);
          }
        }
      }
      .right {
        text-align: right;
        margin-right: 50px;
        p {
          text-align: right;
        }
        .r-center {
          margin: 90px 0;
        }
        & > div {
          position: relative;
        }
        .r-top {
          &::after {
            content: "";
            position: absolute;
            left: -87px;
            bottom: -81px;
            width: 2px;
            height: 200px;
            background: #3af6ff;
            transform: rotate(60deg);
          }
        }
        .r-center {
          &::after {
            content: "";
            position: absolute;
            left: -83px;
            bottom: -13px;
            width: 2px;
            height: 164px;
            background: #3af6ff;
            transform: rotate(90deg);
          }
        }
        .r-bottom {
          &::after {
            content: "";
            position: absolute;
            left: -87px;
            bottom: 19px;
            width: 2px;
            height: 200px;
            background: #3af6ff;
            transform: rotate(-60deg);
          }
        }
      }
    }
  }
}

.python_demand_title {
  height: 211px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    span {
      color: #2893f5;
    }
  }
  h5 {
    text-align: center;
    color: #999;
    font-size: 20px;
    padding-top: 20px;
  }
}
.python_demand_warp {
  width: 100%;
  height: 800px;
  background: url(../assets/python/dahua_python_demand.png) no-repeat 0 0;
  background-size: cover;
  .python_demand {
    width: 1200px;
    height: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .demand {
      width: 100%;
      height: 421px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .python_demand_left {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 421px;
        .python_demand_left_top {
          width: 100%;
          height: 200px;
          background: #7f46dc;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          h2 {
            margin: 15px 0;
            font-size: 20px;
            font-weight: bold;
          }
        }
        .python_demand_left_bottom {
          background: #4bbf9e;
          width: 100%;
          height: 200px;
          border-radius: 12px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          h2 {
            margin: 15px 0;
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
      .python_demand_center {
        flex: 3;
        height: 421px;
        background: #2893f5;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        margin: 0 20px;
        h2 {
          margin: 15px 0;
          font-size: 20px;
          font-weight: bold;
        }
      }
      .python_demand_right {
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 421px;
        .python_demand_right_top {
          width: 100%;
          height: 200px;
          background: #ff40f4;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          h2 {
            margin: 15px 0;
            font-size: 20px;
            font-weight: bold;
          }
        }
        .python_demand_right_bottom {
          background: #06cdcd;
          width: 100%;
          height: 200px;
          border-radius: 12px;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
          h2 {
            margin: 15px 0;
            font-size: 20px;
            font-weight: bold;
          }
        }
      }
    }
  }
}

.python_demand_title {
  height: 211px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    span {
      color: #2893f5;
    }
  }
  h5 {
    text-align: center;
    color: #999;
    font-size: 20px;
    padding-top: 20px;
  }
}
.python_advantage {
  width: 1200px;
  height: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .python_advantage_left,
  .python_advantage_center,
  .python_advantage_right {
    width: 291px;
    height: 334px;
    border: 4px solid #2ea7d9;
    position: relative;
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: #2ea7d9;
      margin-top: 120px;
      text-align: center;
    }
    .advantage {
      width: 168px;
      height: 168px;
      border: 4px solid #2ea7d9;
      border-radius: 50%;
      margin-left: -84px;
      background: #fff;
      position: absolute;
      top: -84px;
      left: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .advantage_xuanze {
      margin-top: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      div {
        width: 190px;
        margin: 10px 0;
        display: flex;
        text-align: left;
        justify-content: flex-start;
        align-items: center;
      }
    }
  }
}
</style>
