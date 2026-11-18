export const id = 112;
export const ids = [112];
export const modules = {
  5871: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      default: () => DJ
    });
    var FJ = ZJ(1232),
      UJ = ZJ(47),
      eJ = ZJ(87),
      XJ = ZJ(1421),
      AJ = ZJ(1126),
      qJ = ZJ(227),
      jJ = ZJ(547);
    const YJ = new URL(AJ.n[qJ.d.PRODUCTION]).origin;
    var hJ = ZJ(990);

    function DJ() {
      const JJ = (0, XJ.x)();
      return (0, UJ.useEffect)((() => {
        const cJ = eJ.currentUrl.getSearchParam("code");
        eJ.currentUrl.removeSearchParam("code"), null === cJ && (console.error("No authorization code found in the URL"), window.close());
        const ZJ = {
          type: `oauth_authentication_${JJ.providerName}`,
          code: cJ
        };
        for (const JJ of (UJ = window.location.origin) === YJ ? [UJ, `https://${jJ.g}`] : [UJ]) {
          var FJ;
          null === (FJ = window.opener) || void 0 === FJ || FJ.postMessage(ZJ, JJ)
        }
        var UJ;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, hJ.jsx)("div", {
        className: "AuthCallback",
        children: (0, hJ.jsx)(FJ.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);