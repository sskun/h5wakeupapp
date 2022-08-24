// 判断微信
const baseInfo = {
  hasApp:false
}
const  IsWeChat = (_ua) => {
  var ua=_ua==undefined?window.navigator.userAgent:_ua;
     if (ua.toLowerCase().match('micromessenger') ||
         !!ua.match("MicroMessenger")) {
         return true;
     }
     return false;
}
// 判断浏览器类型
const getUaType = () =>{
  const  args = [].slice.call(arguments)
  let _ua = ''
  let uatype = ""
  window && window.navigator && window.navigator.userAgent && (_ua = args.length > 0 ? args[0] : window.navigator.userAgent.toLowerCase());
  //微信
  if (IsWeChat()) {
    uatype = "wechat";
  }
  //UC
  else if (_ua.indexOf('ucbrowser') > -1) {
    uatype = "ucbrowser";
  }
  //火弧
  else if (_ua.indexOf('firefox') > -1) {
    uatype = "firefox";
  }
  //手机百度
  else if (_ua.indexOf('baiduboxapp') > -1) {
    uatype = "baiduboxapp";
  }
  //欧朋
  else if (_ua.indexOf('opera') > -1) {
    uatype = "opera";
  } else if (_ua.indexOf('huawei') > -1) {
    uatype = "huawei";

  }
  //小米自带
  else if (_ua.indexOf('miuibrowser') > -1) {
    uatype = "miuibrowser";
  }
  //Qq浏览器
  else if (_ua.indexOf('mqqbrowser') > -1) {
    uatype = "mqqbrowser";
  }
  //360搜索
  else if (_ua.indexOf('360browser') > -1) {
    uatype = "360browser";
  }
  //百度浏览器
  else if (_ua.indexOf('baidubrowser') > -1) {
    uatype = "baidubrowser";
  }
  //微博
  else if(_ua.indexOf('weibo') > -1){
          uatype = "weibo";
  }
  if (uatype == "") {
    //chrom浏览器
    if (_ua.indexOf('safari') > -1) {
      uatype = "safari";
    }
    if (_ua.indexOf('chrom') > -1) {
      uatype = "chrom";
    }
  }
  return uatype;
}
const testApp = (t1, callback,downUrl) => {
	clearInterval(time);

	var firstclick = true;
	var displayTime = t1;
	var time = setInterval(function() {
		var dd = Date.now();
		if (!!firstclick == true) {
			firstclick = false;
			displayTime = dd;
			return;
		}
		if ((dd - displayTime) > 200) {
      baseInfo.hasApp = true
			clearInterval(time);
			//成功回调
			callback({
				"hasApp":true,
				"status": 200, 
				"msg":"leave browser more than 200ms"
			});
			return;
		} else {
			displayTime = dd;
		}
		if (displayTime > t1 + 2500) {

			clearInterval(time);
			if (Date.now() - t1 > 4000) {
        //成功回调
        baseInfo.hasApp = true
				callback({
					"hasApp":true,
					"status": 201, 
					"msg":"leave browser more than 4000ms"
				});

			}
			if (baseInfo.hasApp == false) {

				if (downUrl) {
					//无APP去下载
					callback({
            "hasApp":false,
            "status": 401, 
            "msg":"No App During 2500MS And download"
          });
          window.location = downUrl
				} else {					
					//失败回调
					callback({
						"hasApp":false,
						"status": 400, 
						"msg":"No App During 2500MS"
					});
				}

			}
		}
	}, 20);

}
// 唤醒APP参数
const openApp = (config) =>{
    // schema  isHasApp 调用之前是否知道有APP  downUrl 
    const endtime = Date.now() //
    const {schema,success ,error,downUrl} = config
    const uatype = getUaType()
    // 参数处理
    // success = success && typeof success == "function" ? success : function(){ }
    // error = error && typeof error == "function" ? success : function(){ }

    if (uatype == "safari" || uatype == "chrom") {
      window.location = schema
    } else {
      try {
        let ifr;
        ifr = document.createElement("iframe");
        ifr.id = "iframe_sansss_wakeup"
        ifr.style.cssText = "display:none;";
        ifr.setAttribute('src', schema);
        document.getElementsByTagName("body")[0].appendChild(ifr);
        if (!ifr.contentWindow.window) {
          //
          error({
            title:'error_iframe:不支持的iframe;;;'
          })
        }
      } catch (e) {
        //
        error({
          title:'catch异常'
        })
      }
    }
    setTimeout(function() {
      testApp(endtime, success,downUrl);
    }, 600)
}

export default openApp