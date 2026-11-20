export const id = 120;
export const ids = [120];
export const modules = {
  6409: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      default: () => Wq
    });
    var Yq = gq(1326),
      lq = gq(57),
      Oq = gq(106),
      mq = gq(1512),
      xq = gq(1216),
      Aq = gq(296),
      cq = gq(611);
    const uq = new URL(xq.k[Aq.e.PRODUCTION]).origin;
    var Bq = gq(1070);

    function Wq() {
      const qq = (0, mq.v)();
      return (0, lq.useEffect)((() => {
        const Eq = Oq.currentUrl.getSearchParam("code");
        Oq.currentUrl.removeSearchParam("code"), null === Eq && (console.error("No authorization code found in the URL"), window.close());
        const gq = {
          type: `oauth_authentication_${qq.providerName}`,
          code: Eq
        };
        for (const qq of (lq = window.location.origin) === uq ? [lq, `https://${cq.e}`] : [lq]) {
          var Yq;
          null === (Yq = window.opener) || void 0 === Yq || Yq.postMessage(gq, qq)
        }
        var lq;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Bq.jsx)("div", {
        className: "AuthCallback",
        children: (0, Bq.jsx)(Yq.e, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);