<template>
  <div id="detailContrainer" class="slide-enter-active">
    <div class="header">
      <Header title="详情">
        <i @click="$router.back()" class="iconfont icon-right1"></i>
      </Header>
    </div>
    <glo-loading v-if="isLoading"></glo-loading>
    <div v-else class="wrapper" ref="wrapper">
      <div>
        <div class="detail_header">
          <div class="detail_img">
            <img :src="dataList.images.small" :alt="dataList.title" />
          </div>
          <div class="detail_title">
            <h2>{{ dataList.title }}</h2>
            <p>
              <span v-for="(item,index) in dataList.durations" :key="'tit1'+index">{{ item+'/' }}</span>
              <span v-for="(item,index) in dataList.genres" :key="'tit2'+index">{{ item+'/' }}</span>
              <span
                v-for="(item,index) in dataList.countries"
                :key="'tit3'+index"
              >{{ index==dataList.countries.length-1? item:item+'/' }}</span>
            </p>
            <p>
              <span>{{ dataList.mainland_pubdate }}</span>
              <span>中国大陆上映</span>
            </p>
            <div class="wrapper_btn">
              <div class="detail_btn">
                <button>
                  <i></i>想看
                </button>
                <button>
                  <i></i> 看过
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="content_nav" ref="nav">
            <a @tap="toScrollTop('info')" :class="isPoint=='info'?'fw':''">
              简介
              <span :class="isPoint=='info'?'active':''"></span>
            </a>
            <a @tap="toScrollTop('comment')" :class="isPoint=='comment'?'fw':''">
              影评
              <span :class="isPoint=='comment'?'active':''"></span>
            </a>
            <a href="#">更多</a>
          </div>
          <div class="content_info" ref="info">
            <p id="info">{{ dataList.summary }}</p>
          </div>
          <!-- 演职员表 -->
          <div class="content_casts">
            <h2>演职人员</h2>
            <div class="casts_list">
              <!-- <div class="casts_img">
                <img :src="dataList.directors[0].avatars.small" :alt="dataList.directors[0].name" />
                <span>导演</span>
                <span>{{ dataList.directors[0].name_en }}</span>
                <span>{{ dataList.directors[0].name }}</span>
              </div>-->
              <div class="casts_img" v-for="actor in dataList.casts" :key="actor.id">
                <img :src="actor.avatars && actor.avatars.small" :alt="actor.name" />
                <span>{{ actor.name_en }}</span>
                <span>{{ actor.name }}</span>
              </div>
            </div>
          </div>
          <!-- 剧照 -->
          <div class="content_photos">
            <h2>剧照</h2>
            <div class="casts_list">
              <div class="swiper-container" ref="swiperContainer">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" v-for="item in dataList.photos" :key="item.id">
                    <div class="casts_img">
                      <img :src="item.image" alt />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="popular_comment" ref="comment">
            <h2 id="comment">观众热评</h2>
            <div
              v-if="dataList.popular_comments.length>0?false:true"
              style="margin-bottom:52px;text-align:center;"
            >
              <p>暂无评论</p>
            </div>
            <div v-else class="comment_list">
              <div class="comment_item" v-for="item in dataList.popular_comments" :key="item.id">
                <div class="comment_author">
                  <div class="author_img">
                    <img :src="item.author.avatar" :alt="item.author.name" />
                  </div>
                  <div class="author_info">
                    <h2>{{ item.author.name }}</h2>
                    <el-rate v-model="item.rating.value" :disabled="true"></el-rate>
                  </div>
                </div>
                <div class="comment_content">
                  <p>{{ item.content }}</p>
                </div>
                <div class="comment_date">
                  <p>{{ item.created_at }}</p>
                  <div class="comment_btn">
                    <i class="iconfont icon-dianzan1"></i>
                    <span>{{ item.useful_count }}</span>
                    <i class="iconfont icon-pinglun"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fiexd_nav" v-if="isScroll">
      <div class="content_nav">
        <a @click="toScrollTop('info')" :class="isPoint=='info'?'fw':''">
          简介
          <span :class="isPoint=='info'?'active':''"></span>
        </a>
        <a @click="toScrollTop('comment')" :class="isPoint=='comment'?'fw':''">
          影评
          <span :class="isPoint=='comment'?'active':''"></span>
        </a>
        <a href="#">更多</a>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Header from "@/components/header";
import Swiper from "swiper";
import star from "@/assets/star.jpg";

export default {
  name: "detail",
  components: {
    Header
  },
  data() {
    return {
      isScroll: false,
      isPoint: "info",
      dataList: {},
      isLoading: true
      // srcList: [] //图片预览
      // 评分所用data
      // lightStar: {
      //   background: "url(" + star + ")",
      //   backgroundPosition: "0 -29px"
      // },
      // grayStar: {
      //   background: "url(" + star + ")"
      // }
    };
  },
  props: ["movieId"],
  created() {},
  mounted() {
    this.$http.get("/movieApi/subject/" + this.movieId).then(res => {
      this.dataList = res.data;
      this.isLoading = false;
      this.initScroll();
      this.$nextTick(() => {
        this.initSwiper();
      });
    });
  },
  methods: {
    initScroll() {
      this.$nextTick(() => {
        if (!this.$refs.wrapper) {
          return;
        }
        var scroll = new BScroll(this.$refs.wrapper, {
          probeType: 3,
          scrollY: true,
          click: true,
          useTransition: false, // 防止iphone微信滑动卡顿
          bounce: true,
          momentumLimitDistance: 5,
          mouseWheel: true,
          tap: true
        });
        this.scroll = scroll;
        scroll.on("scroll", pos => {
          var tops = this.$refs.nav.offsetTop;
          var scrollY = Math.abs(pos.y);
          if (scrollY >= tops) {
            this.isScroll = true;
          } else {
            this.isScroll = false;
          }
        });
      });
    },
    initSwiper() {
      var mySwiper = new Swiper(this.$refs.swiperContainer, {
        slidesPerView: 5,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    },
    toScrollTop(ref) {
      this.isPoint = ref;
      let top = this.$refs[ref].offsetTop;
      console.log(top);
      this.scroll.scrollTo(0, -top + 41);
    },
    zan() {
      console.log(11);
    }
  }
};
</script>

<style lang="scss" scoped>
#detailContrainer.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
@import "@/style/mixin.scss";
$pdsize: 10px;
@mixin nav() {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  a {
    flex: 1;
    text-align: center;
    position: relative;
    .active {
      position: absolute;
      width: 30px;
      height: 1px;
      background-color: #000;
      bottom: -10px;
      left: 50%;
      transform: translate(-15px);
    }
  }
  .fw {
    font-weight: 700;
  }
}
.wrapper {
  height: 100%;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
#detailContrainer {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 100;
  background-color: #fff;

  .detail_header {
    margin-top: 52px;
    height: 200px;
    background-color: #000;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .detail_img {
      width: 100px;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
      }
    }
    .detail_title {
      height: 60%;
      margin-left: 10px;
      position: relative;
      flex: 1;
      h2 {
        font-size: 20px;
        color: #fff;
        font-weight: 400;
        // line-height: 40px;
        margin-bottom: 10px;
      }
      p {
        line-height: 20px;
        font-size: 12px;
        color: #ccc;
        // span:last-child {
        //   margin-left: 5px;
        // }
      }
      .wrapper_btn {
        position: absolute;
        bottom: -20px;
        left: 0;
        width: 100%;
      }
      .detail_btn {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          flex: 1;
          border: none;
          border-radius: 4px;
          height: 30px;
          line-height: 30px;
          background-color: #ff5a44;
        }
        button:last-child {
          margin-left: 5px;
        }
      }
    }
  }

  .content {
    margin-top: 10px;
    .content_nav {
      @include nav;
    }
    .content_info {
      padding: 10px;
      font-size: 13px;
      line-height: 20px;
      padding-bottom: 20px;
      border-bottom: 1px solid #ccc;
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
    }
    .content_casts {
      @include img_list;
    }
    .content_photos {
      @include img_list;
      @include swiper_common;
    }
    .popular_comment {
      padding: $pdsize;
      h2 {
        font-size: 16px;
        font-weight: 400;
      }
      .comment_list {
        margin-top: $pdsize;
        .comment_item {
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px dashed #ccc;
          .comment_author {
            display: flex;
            .author_img {
              width: 50px;
              overflow: hidden;
              img {
                width: 100%;
                border-radius: 50%;
                height: auto;
              }
            }
            .author_info {
              flex: 1;
              margin-left: 10px;
              h2 {
                font-size: 14px;
                line-height: 30px;
              }
              div {
                @include star_class;
              }
            }
          }
          .comment_content {
            font-size: 14px;
            margin: 8px 0;
          }
          .comment_date {
            font-size: 13px;
            color: #666;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .comment_btn {
              i {
                margin-left: 10px;
              }
              i:first-child {
                font-size: 18px;
              }
            }
          }
        }
        .comment_item:last-child {
          margin-bottom: 62px;
        }
      }
    }
  }
  .fiexd_nav {
    position: fixed;
    top: 52px;
    left: 0;
    width: 100%;
    background: #fff;
    .content_nav {
      @include nav;
    }
  }
}
</style>