﻿$(document).ready(function () {  
  var cardArray = [
    'https://shop97930972.youzan.com/v2/ump/paidcontent/index?kdt_id=97738804&page=columnshow&alias=2orxfglzmtiac2s&banner_id=f.93272607~image_nav.5~0~pZ5FxdqO', // '宝剑侍从'
    'https://shop97930972.youzan.com/wscvis/course/detail/1yll7ua5pi7f8r3?kdt_id=97738804&banner_id=f.93272607~image_nav.5~1~pZ5FxdqO#/columnshow?kdt_id=97738804&page=columnshow&alias=1yll7ua5pi7f8r3&banner_id=f.93272607~image_nav.5~1~pZ5FxdqO', // '权杖六'
    'https://shop97930972.youzan.com/v2/ump/paidcontent/index?kdt_id=97738804&page=columnshow&alias=26vnhs5l1mn4472&banner_id=f.93272607~image_nav.5~2~pZ5FxdqO', // '节制'
    'https://shop97930972.youzan.com/wscvis/course/detail/270le1bj7htnogx?kdt_id=97738804&banner_id=f.93272607~image_nav.5~3~pZ5FxdqO#/columnshow?kdt_id=97738804&page=columnshow&alias=270le1bj7htnogx&banner_id=f.93272607~image_nav.5~3~pZ5FxdqO' // '圣杯三'
  ]
  
  // go Back The Page
  function goBackThePage(){
    var index = Math.round(Math.random() * (cardArray.length - 1));
    
    location.href = cardArray[index]
  }
  
  goBackThePage();
});