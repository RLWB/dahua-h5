<template>
  <div class="connect">
    <div class="connect_top">
      <div class="connect_top_img"></div>
    </div>
    <div class="connect_center">
      <div class="connect_center_nav">
        <div class="connect_center_nav_top">
          <div class="connect_center_nav_top_left">
            <em></em>
            <div class="connect_center_nav_top_left_title">
              <img src="../asstes/dahua_connect_job.png" alt="" />
            </div>
            <p>客服专员</p>
            <div class="connect_center_nav_top_left_text">岗位职责:</div>
            <ul>
              <li>按照标准流程作业规范，完成本专项销售支持工作。</li>
              <li>
                根据销售部提供的BOM表信息，与客户沟通，确定产品的具体要求。
              </li>
              <li>
                负责跟踪，协调产品生产，进度通报销售部门，并及时与客户进行沟通、协调
              </li>
              <li>与客户沟通产品制作工艺及进度</li>
            </ul>
            <div class="connect_center_nav_top_left_text">任职资格:</div>
            <ul>
              <li>大专以上学历，印刷相关专业优先考虑。</li>
              <li>一年以上印刷业务工作经验。</li>
              <li>
                拥有活力以及工作热情，吃苦耐劳，责任心强，成熟稳重，心里承受能力强。
              </li>
              <li>
                熟悉印刷或广告销售流程、方法及技巧，贸易、销售、印刷业工作从业年以上者优先录用
              </li>
              <li>具有出色的工作协调能力和语言沟通技巧。</li>
            </ul>
          </div>
          <div class="connect_center_nav_top_right">
            <img src="../asstes/dahua_cennect_2wm.png" alt="" />
            <p>扫一扫 关注大华教育公众号</p>
            <h6>掌握即时动态</h6>
          </div>
        </div>
        <div class="connect_center_nav_foter">
          <p>销售代表/业务员</p>
          <div class="connect_center_nav_foter_text">岗位职责:</div>
          <ul>
            <li>负责开发新客户，重点客户的维护，和大客户应收款的回收。</li>
            <li>完成领导制定的销售目标以及收款目标</li>
            <li>参加各类相关展会，网上寻找潜在客户</li>
          </ul>
          <div class="connect_center_nav_foter_text">任职资格:</div>
          <ul>
            <li>大专以上学历，市场营销、印刷等相关专业</li>
            <li>优秀的谈判、沟通技巧，计算机操作熟练</li>
            <li>
              敏锐的市场洞察力，较强承受压力的能力，良好的客户意识，个性亲和
            </li>
            <li>两年以上印刷类销售岗位工作经验</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="connect_foter"></div>
  </div>
</template>

<script>
// import { reactive, toRefs } from "@vue/composition-api";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.connect {
  .connect_top {
    width: 100%;
    height: 518px;
    margin: 0 auto;
    .connect_top_img {
      width: 100%;
      height: 100%;
      background: url(../asstes/dahua_Connect_Bbanner.png);
      background-size: cover;
      background-position: center;
    }
  }

  .connect_center {
    width: 100%;
    min-width: 1200px;
    .connect_center_nav {
      width: 1200px;
      padding: 50px 0 74px;
      margin: 0 auto;
      .connect_center_nav_top {
        display: flex;
        justify-content: space-between;

        .connect_center_nav_top_left {
          width: 100%;
          position: relative;
          padding-bottom: 40px;
          border-bottom: 2px solid #0099ff;
          em {
            position: absolute;
            left: 0;
            bottom: 0;
            height: 5px;
            width: 170px;
            background: #0066cc;
          }
          p {
            margin-top: 30px;
            font-weight: bold;
            font-size: 16px;
          }
          ul {
            margin-top: 16px;
            font-size: 14px;
            list-style: decimal;
            padding-left: 20px;

            li {
              margin-top: 16px;
              text-align: left;
              color: #333;
              font-family: "微软雅黑";
            }
          }
          .connect_center_nav_top_left_text {
            margin-top: 16px;
            font-size: 14px;
            font-family: "微软雅黑";
          }
        }
        .connect_center_nav_top_right {
          margin-right: 180px;
          text-align: center;
          font-family: "微软雅黑";
          font-size: 14px;
          color: #666666;
          img {
            display: block;
            width: 250px;
            height: 249px;
          }
          h6 {
            margin-top: 10px;
          }
        }
      }
      .connect_center_nav_foter {
        padding-top: 30px;
        p {
          font-weight: bold;
          font-size: 16px;
        }
        ul {
          margin-top: 16px;
          font-size: 14px;
          list-style: decimal;
          padding-left: 20px;

          li {
            margin-top: 16px;
            text-align: left;
            color: #333;
            font-family: "微软雅黑";
          }
        }
        .connect_center_nav_foter_text {
          margin-top: 16px;
          font-size: 14px;
          font-family: "微软雅黑";
        }
      }
    }
  }
}
</style>