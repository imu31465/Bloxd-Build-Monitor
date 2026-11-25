export const id = 130;
export const ids = [130];
export const modules = {
  6941: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      default: () => rQ
    });
    var wQ = XQ(1391),
      qQ = XQ(61),
      TQ = XQ(121),
      zQ = XQ(1581),
      sQ = XQ(1263),
      FQ = XQ(382),
      PQ = XQ(691);
    const gQ = new URL(sQ.p[FQ.b.PRODUCTION]).origin;
    var JQ = XQ(1145);

    function rQ() {
      const QQ = (0, zQ.E)();
      return (0, qQ.useEffect)((() => {
        const WQ = TQ.currentUrl.getSearchParam("code");
        TQ.currentUrl.removeSearchParam("code"), null === WQ && (console.error("No authorization code found in the URL"), window.close());
        const XQ = {
          type: `oauth_authentication_${QQ.providerName}`,
          code: WQ
        };
        for (const QQ of (qQ = window.location.origin) === gQ ? [qQ, `https://${PQ.c}`] : [qQ]) {
          var wQ;
          null === (wQ = window.opener) || void 0 === wQ || wQ.postMessage(XQ, QQ)
        }
        var qQ;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, JQ.jsx)("div", {
        className: "AuthCallback",
        children: (0, JQ.jsx)(wQ.e, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);