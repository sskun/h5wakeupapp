!(function (e, r) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = r())
    : 'function' == typeof define && define.amd
    ? define([], r)
    : 'object' == typeof exports
    ? (exports.h5wakeupapp = r())
    : (e.h5wakeupapp = r());
})(self, function () {
  return (() => {
    'use strict';
    var e = {
        579: (e, r, o) => {
          Object.defineProperty(r, '__esModule', { value: !0 }),
            (r.openApp = void 0);
          var t,
            a = (t = o(939)) && t.__esModule ? t : { default: t };
          (r.openApp = a.default), (r.default = a.default);
        },
        939: (e, r) => {
          Object.defineProperty(r, '__esModule', { value: !0 });
          var o = arguments,
            t = { hasApp: !1 };
          r.default = function (e) {
            var r = Date.now(),
              a = e.schema,
              n = e.success,
              i = e.error,
              s = e.downUrl,
              d = (function () {
                var e,
                  r = [].slice.call(o),
                  t = '',
                  a = '';
                return (
                  window &&
                    window.navigator &&
                    window.navigator.userAgent &&
                    (t =
                      r.length > 0
                        ? r[0]
                        : window.navigator.userAgent.toLowerCase()),
                  (e = window.navigator.userAgent)
                    .toLowerCase()
                    .match('micromessenger') || e.match('MicroMessenger')
                    ? (a = 'wechat')
                    : t.indexOf('ucbrowser') > -1
                    ? (a = 'ucbrowser')
                    : t.indexOf('firefox') > -1
                    ? (a = 'firefox')
                    : t.indexOf('baiduboxapp') > -1
                    ? (a = 'baiduboxapp')
                    : t.indexOf('opera') > -1
                    ? (a = 'opera')
                    : t.indexOf('huawei') > -1
                    ? (a = 'huawei')
                    : t.indexOf('miuibrowser') > -1
                    ? (a = 'miuibrowser')
                    : t.indexOf('mqqbrowser') > -1
                    ? (a = 'mqqbrowser')
                    : t.indexOf('360browser') > -1
                    ? (a = '360browser')
                    : t.indexOf('baidubrowser') > -1
                    ? (a = 'baidubrowser')
                    : t.indexOf('weibo') > -1 && (a = 'weibo'),
                  '' == a &&
                    (t.indexOf('safari') > -1 && (a = 'safari'),
                    t.indexOf('chrom') > -1 && (a = 'chrom')),
                  a
                );
              })();
            if ('safari' == d || 'chrom' == d) window.location = a;
            else
              try {
                var p = void 0;
                ((p = document.createElement('iframe')).id =
                  'iframe_sansss_wakeup'),
                  (p.style.cssText = 'display:none;'),
                  p.setAttribute('src', a),
                  document.getElementsByTagName('body')[0].appendChild(p),
                  p.contentWindow.window ||
                    i({ title: 'error_iframe:不支持的iframe;;;' });
              } catch (e) {
                i({ title: 'catch异常' });
              }
            setTimeout(function () {
              !(function (e, r, o) {
                clearInterval(i);
                var a = !0,
                  n = e,
                  i = setInterval(function () {
                    var s = Date.now();
                    return 1 == !!a
                      ? ((a = !1), void (n = s))
                      : s - n > 200
                      ? ((t.hasApp = !0),
                        clearInterval(i),
                        void r({
                          hasApp: !0,
                          status: 200,
                          msg: 'leave browser more than 200ms',
                        }))
                      : void (
                          (n = s) > e + 2500 &&
                          (clearInterval(i),
                          Date.now() - e > 4e3 &&
                            ((t.hasApp = !0),
                            r({
                              hasApp: !0,
                              status: 201,
                              msg: 'leave browser more than 4000ms',
                            })),
                          0 == t.hasApp &&
                            (o
                              ? (r({
                                  hasApp: !1,
                                  status: 401,
                                  msg: 'No App During 2500MS And download',
                                }),
                                (window.location = o))
                              : r({
                                  hasApp: !1,
                                  status: 400,
                                  msg: 'No App During 2500MS',
                                })))
                        );
                  }, 20);
              })(r, n, s);
            }, 600);
          };
        },
      },
      r = {};
    return (function o(t) {
      if (r[t]) return r[t].exports;
      var a = (r[t] = { exports: {} });
      return e[t](a, a.exports, o), a.exports;
    })(579);
  })();
});
