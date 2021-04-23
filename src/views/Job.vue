<template>
  <div class="Job">
    <div class="job-banner">
      <div class="job-banner-left">
        <p class="img"><img src="../assets/Job/dahua_job_R.png" alt="" /></p>
      </div>
      <div class="job-banner-right">
        <div class="job-banner-right_con">
          <p class="img">
            <img src="../assets/Job/dahua_job_zhaoxiannashi.png" alt="" />
          </p>
          <p class="select_dahua">诚聘英才<i>·</i>选择大华共创未来</p>
          <p class="line"></p>
          <p class="interview">预约面试</p>
        </div>
      </div>
    </div>
    <div class="job-con-wrap">
      <div class="job-con-left">
        <div class="job-con-top">
          <p class="job">岗位招聘</p>
        </div>
        <div class="job-con-center">
          <div class="job-con-center-service">
            <p class="job-service">客服专员</p>
            <ul class="job-responsibility">
              <li>岗位职责：</li>
              <li>1、按照标准流程和作业规范，完成本专项销售支持工作。</li>
              <li>
                2、根据销售部提供的BOM表信息，与客户沟通，确定产品的具体要求。
              </li>
              <li>
                3、负责跟踪、协调产品生产进度，通报销售部门，并及时与客户进行沟通、协调
              </li>
              <li>4、与客户沟通产品制作工艺及进展</li>
              <li>任职资格：</li>
              <li>1、大专以上学历，印刷相关专业优先考虑。</li>
              <li>2、一年以上印刷业务工作经验。</li>
              <li>
                3、拥有活力以及工作热情，吃苦耐劳，责任心强，成熟稳重，心理承受能力强
              </li>
              <li>
                4、熟悉印刷或广告销售流程、方法及技巧，贸易、印刷业工作2年以上者优先率用。
              </li>
              <li>5、具有出色的工作协调能力和语言沟通技巧。</li>
            </ul>
            <div class="job-con-line">
              <span></span>
              <p></p>
            </div>
            <p class="job-service">销售代表/业务员</p>
            <ul class="job-responsibility">
              <li>岗位职责:</li>
              <li>1、负责开发新客户，重点客户的维护和大客户应收款的回收；</li>
              <li>2、完成领导制定的销售目标及收款目标；</li>
              <li>3、参加各类相关展会，网上寻找潜客户。</li>
              <li>任职资格：</li>
              <li>1、大专以上学历，市场营销，印刷等相关专业；</li>
              <li>2、优秀的谈判，沟通技巧，计算机操作熟练；</li>
              <li>
                3、敏锐的市场洞察力，较强承受压力的能力，良好的客户意识，个性亲和；
              </li>
              <li>4、两年以上印刷类销售岗位工作经验。</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="job-con-right">
        <div class="job-weixin">
          <img src="../assets/Job/dahua_job_weixin.png" alt="" />
          <p>扫一扫 关注大华教育公众号</p>
          <p>掌握及时动态</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import CommonHeader from '../components/CommonHeader'
// import CommonFooter from '../components/CommonFooter'
export default {
  data() {
    return {};
  },
  //   components:{
  //       CommonHeader,CommonFooter
  //   },
  methods: {},
};
</script>

<style scoped lang='scss'>
.Job {
  .job-banner {
    width: 100%;
    height: 518px;
    display: flex;
    .job-banner-left {
      position: relative;
      height: 518px;
      width: 60%;
      background: url(../assets/Job/dahua_job_banner_left.jpg);
      background-size: cover;
      background-position: center;
      .img {
        position: absolute;
        right: 0;
        top: 75px;
      }
    }
    .job-banner-right {
      width: 40%;
      background: url(../assets/Job/dahua_job_banner_right.png);
      background-size: cover;
      background-position: center;
      .job-banner-right_con {
        // margin-left: 48px;
        color: #ffffff;
        padding: 70px 45px;
        .select_dahua {
          padding: 30px 0;
          font-size: 28px;
          i {
            padding: 0 10px;
            font-weight: 900;
          }
        }
        .line {
          width: 424px;
          height: 1px;
          border-top: 1px solid #ffffff;
          margin-bottom: 30px;
        }
        .interview {
          border: 2px solid #fff;
          width: 100px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          box-sizing: border-box;
          cursor: pointer;
        }
      }
    }
  }
  .job-con-wrap {
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    // justify-content: space-between;
    .job-con-left {
      .job-con-top {
        .job {
          width: 135px;
          height: 35px;
          background: url(../assets/Job/dahua_job_zhaopingangwei.png) no-repeat;
          color: #ffffff;
          font-size: 18px;
          padding: 6px 12px;
        }
      }
      .job-con-center {
        margin-bottom: 75px;
        .job-con-center-service {
          .job-service {
            font-weight: 600;
            font-size: 18px;
            margin: 14px 0;
          }
          .job-responsibility {
            li {
              margin-top: 14px;
              color: #333;
            }
          }
          .job-con-line {
            margin: 30px 0;
            display: flex;
            span {
              border-bottom: 5px solid #0066cc;
              width: 180px;
              display: block;
              //   margin-bottom: -2px;
            }
            p {
              border-bottom: 2px solid #0099ff;
              width: 614px;
            }
          }
        }
      }
    }
    .job-con-right {
      .job-weixin {
        text-align: center;
        img {
          width: 251px;
          height: 249px;
        }
        p {
          margin-top: 10px;
          color: #333;
          font-size: 13px;
        }
      }
    }
  }
}
</style>