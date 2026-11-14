export const id = 105;
export const ids = [105];
export const modules = {
  5541: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      default: () => tR
    });
    var wW = MW(1157),
      CW = MW(75),
      zR = MW(122),
      AW = MW(1345),
      bR = MW(1057),
      yR = MW(232),
      NW = MW(253);
    const eW = new URL(bR.g[yR.d.PRODUCTION]).origin;
    var BW = MW(940);

    function tR() {
      const WW = (0, AW.A)();
      return (0, CW.useEffect)((() => {
        const RW = zR.currentUrl.getSearchParam("code");
        zR.currentUrl.removeSearchParam("code"), null === RW && (console.error("No authorization code found in the URL"), window.close());
        const MW = {
          type: `oauth_authentication_${WW.providerName}`,
          code: RW
        };
        for (const WW of (CW = window.location.origin) === eW ? [CW, `https://${NW.e}`] : [CW]) {
          var wW;
          null === (wW = window.opener) || void 0 === wW || wW.postMessage(MW, WW)
        }
        var CW;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, BW.jsx)("div", {
        className: "AuthCallback",
        children: (0, BW.jsx)(wW.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);