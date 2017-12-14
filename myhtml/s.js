/* ==========================================================
 * index.js v20141120
 * ==========================================================
 * Copyright 黄笑雯
 *
 * 背景视差,元素动画页面js
 * ========================================================== */
 (function($) {
  var ui = {
      $godown: $('.go-down')
    };
  var oPageConfig = window.oPageConfig;
  var oPage = {
    init: function() {
      this.view();
      this.listen();
    }
  , view: function() {
      var self = this;

      // 滚动插件初始化

      // s.html调用插件
      $('#fullpage-s').fullpage({
        // 内容不居中
        verticalCentered: false,
        resize: true,
        scrollingSpeed: 500,
        // 不显示导航条
        navigation: false,
        afterLoad: function(b, a) { 
        /* 
          滚动到某一屏后的回调函数,接收 anchorLink 和 index 两个参数:
            anchorLink 是锚链接的名称，index 是序号
        */
          if(a == 4){
            $(".ss-container .ss_border").animate({opacity:"1"},300);
            $("#ss-container .circle_left").each(function(c,d){
              $("#ss-container .circle_left").eq(c).delay(c*200).animate({left:"0",opacity:"1"},1000);
            });
            $("#ss-container .text_right").each(function(c,d){
              $("#ss-container .text_right").eq(c).delay(c*200+100).animate({right:"40px",opacity:"1"},1000);
            });
            $("#ss-container .circle_right").each(function(c,d){
              $("#ss-container .circle_right").eq(c).delay(c*200+100).animate({right:"0",opacity:"1"},1000);
            });
            $("#ss-container .text_left").each(function(c,d){
              $("#ss-container .text_left").eq(c).delay(c*200).animate({left:"40px",opacity:"1"},1000);
            });
          } else {
            $(".ss-container .ss_border").css({opacity:"0"});
            $("#ss-container .circle_left").css({left:"-416px",opacity:"0"});
            $("#ss-container .text_right").css({right:"416px",opacity:"0"});
            $("#ss-container .circle_right").css({right:"-416px",opacity:"0"});
            $("#ss-container .text_left").css({left:"416px",opacity:"0"});
          }

        }
      });
      // 滚动插件初始化 结束
      // 小箭头
      self.fCustomArrows();
      setInterval(self.fCustomArrows, 2000);


    }
  , listen: function() {
      var self = this;

      // if($('.d4').hasClass('active')) {
      //   alert('出现吧')
      //   $('.ss_border').css('opacity','1');
      //   $('.ss-medium .circle_left').css({'left':'0','opacity':'1'});
      //   $('.ss-medium .text_left').css({'left':'40px','opacity':'1'});
      // }

      
    
    }
  // 箭头动画
  , fCustomArrows: function() {
      ui.$godown.animate({
        bottom: "50px"
      },
      200).animate({
        bottom: "20px"
      },
      200).animate({
        bottom: "30px"
      },
      200).animate({
        bottom: "20px"
      },
      200).animate({
        bottom: "25px"
      },
      200).animate({
        bottom: "20px"
      },
      200).animate({
        bottom: "22px"
      },
      200).animate({
        bottom: "20px"
      },
      200);
    }
  };
  oPage.init();
})($);