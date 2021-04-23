<template>
  <div class="commonheader-wrap">
    <div class="commonheader">
      <div class="commonheader-top-wrap">
        <div class="commonheader-top">
          <div class="commonheader-logo">
            <img src="../assets/dahua_commonheader_logo.png" alt="" />
          </div>
          <div class="commonheader-phone">
            <div class="commonheader-phone-tit">
              <img src="../assets/dahua_commonheader_phone.png" alt="" />
              <span>在线客服电话：</span>
            </div>
            <div class="commonheader-phone-con">400-800-6666</div>
          </div>
        </div>
      </div>

      <div class="commonheader-nav-wrap">
        <div class="commonheader-nav">
          <ul>
            <!-- <router-link v-for="item in commonheaderNav" :key="item.id" tag="li" :to="{name:item.name}" active-class="active-navs">{{item.navs}}</router-link> -->
            <li
              v-for="(item, index) in commonheaderNav"
              :key="item.id"
              @click="headerNav(item.name, index)"
              :class="[item.name === navsname ? 'active-navs' : '']"
            >
              {{ item.navs }}
              <p v-if="index == 2 && isactive"></p>
            </li>
          </ul>
        </div>
        <div class="commonheader-nav-train" v-show="isactive">
          <ul>
            <li
              v-for="item in commonheaderNavTrain"
              :key="item.id"
              @click="headerNavTrain(item.name)"
              :class="[item.name === $route.name ? 'activeNavTrain' : '']"
            >
              {{ item.navs }}
              <span class="navTrain"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commonheaderNav: [
        {
          id: 1,
          navs: "首页",
          name: "Home",
        },
        {
          id: 2,
          navs: "大华简介",
          name: "About",
        },
        {
          id: 3,
          navs: "培训课程",
          name: "Java",
        },
        {
          id: 4,
          navs: "师资力量",
          name: "Teachers",
        },
        {
          id: 5,
          navs: "合作企业",
          name: "Cooperation",
        },
        {
          id: 6,
          navs: "校园风采",
          name: "School",
        },
        {
          id: 7,
          navs: "学员作品",
          name: "Works",
        },
        {
          id: 8,
          navs: "联系我们",
          name: "Connect",
        },
        {
          id: 9,
          navs: "大华招聘",
          name: "Job",
        },
      ],
      commonheaderNavTrain: [
        {
          id: 10,
          navs: "Java+大数据",
          name: "Java",
        },
        {
          id: 11,
          navs: "Python+人工智能",
          name: "Python",
        },
        {
          id: 12,
          navs: "HTML前端",
          name: "H5",
        },
        {
          id: 13,
          navs: "UI/UE/电商",
          name: "Ui",
        },
      ],
      isactive: false,
      navsname: "Home",
    };
  },
  methods: {
    headerNav(name, index) {
      this.navsname = name;
      if (index == 2) {
        this.isactive = true;
      } else {
        this.isactive = false;
      }

      this.$router.push({
        name,
      });
    },
    headerNavTrain(name) {
      this.$router.push({
        name,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.commonheader-wrap {
  height: 160px;
  .commonheader {
    height: 100%;
    background-color: #ffffff;
    .commonheader-top-wrap {
      height: 102px;
      min-width: 1200px;
      .commonheader-top {
        width: 1200px;
        height: 102px;
        display: flex;
        box-sizing: border-box;
        padding: 0 20px;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        .commonheader-phone {
          display: flex;
          height: 46px;
          align-items: flex-end;
          .commonheader-phone-tit {
            color: #999999;
            font-size: 18px;
            font-weight: bold;
            display: flex;
            align-items: flex-end;
          }
          .commonheader-phone-con {
            color: #3399ff;
            font-size: 30px;
            font-weight: bold;
            line-height: 24px;
          }
        }
      }
    }

    .commonheader-nav-wrap {
      background-color: #1f8ceb;
      height: 58px;
      min-width: 1200px;
      border-bottom: 1px solid #3ea5fe;
      .commonheader-nav {
        width: 1200px;
        box-sizing: border-box;

        // padding: 0 45px;
        height: 58px;
        margin: 0 auto;
        ul {
          display: flex;
          height: 100%;
          justify-content: space-between;
          align-items: center;
          li {
            color: #ffffff;
            font-size: 20px;
            box-sizing: border-box;
            height: 100%;
            line-height: 57px;
            flex: 1;
            text-align: center;
            border: 1px solid #1f8ceb;
            border-top: none;
            border-bottom: none;
            position: relative;
            p {
              width: 0;
              height: 0;
              border: 5px solid transparent;
              border-top: 5px solid #fff;
              position: absolute;
              top: 0;
              right: 10px;
              transform: translateY(27px);
            }
          }
          .active-navs {
            border: 1px solid #3ea5fe;
            border-top: none;
            border-bottom: none;
            background-color: #0066cc;
            box-sizing: border-box;
          }
        }
      }
      .commonheader-nav-train {
        width: 100%;
        height: 43px;
        background-color: #0066cc;
        min-width: 1200px;
        ul {
          width: 1200px;
          height: 100%;
          margin: 0 auto;
          display: flex;
          padding-left: 165px;
          display: flex;
          li {
            color: #fff;
            padding: 0 30px;
            line-height: 43px;
            position: relative;
            .navTrain {
              width: 2px;
              height: 16px;
              position: absolute;
              top: 0;
              right: 0;
              background-color: #99ffff;
              transform: translateY(14px);
            }
          }
          :last-of-type {
              .navTrain{
                  display: none;
              }
          }
          .activeNavTrain {
            color: #99ffff;
          }
        }
      }
    }
  }
}
</style>