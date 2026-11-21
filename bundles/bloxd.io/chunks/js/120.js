export const id = 120;
export const ids = [120];
export const modules = {
  6360: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      default: () => bQ
    });
    var LQ = wQ(1348),
      qQ = wQ(53),
      oQ = wQ(106),
      DQ = wQ(1515),
      kQ = wQ(1243),
      vQ = wQ(307),
      mQ = wQ(634);
    const uQ = new URL(kQ.q[vQ.c.PRODUCTION]).origin;
    var HQ = wQ(1107);

    function bQ() {
      const QQ = (0, DQ.y)();
      return (0, qQ.useEffect)((() => {
        const FQ = oQ.currentUrl.getSearchParam("code");
        oQ.currentUrl.removeSearchParam("code"), null === FQ && (console.error("No authorization code found in the URL"), window.close());
        const wQ = {
          type: `oauth_authentication_${QQ.providerName}`,
          code: FQ
        };
        for (const QQ of (qQ = window.location.origin) === uQ ? [qQ, `https://${mQ.d}`] : [qQ]) {
          var LQ;
          null === (LQ = window.opener) || void 0 === LQ || LQ.postMessage(wQ, QQ)
        }
        var qQ;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, HQ.jsx)("div", {
        className: "AuthCallback",
        children: (0, HQ.jsx)(LQ.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);