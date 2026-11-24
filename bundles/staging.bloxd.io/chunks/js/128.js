export const id = 128;
export const ids = [128];
export const modules = {
  6715: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      default: () => zB
    });
    var TB = ZB(1397),
      JB = ZB(63),
      oB = ZB(118),
      GB = ZB(1591),
      vB = ZB(1290),
      kB = ZB(342),
      cB = ZB(684);
    const nB = new URL(vB.l[kB.e.PRODUCTION]).origin;
    var hB = ZB(1153);

    function zB() {
      const BB = (0, GB.B)();
      return (0, JB.useEffect)((() => {
        const IB = oB.currentUrl.getSearchParam("code");
        oB.currentUrl.removeSearchParam("code"), null === IB && (console.error("No authorization code found in the URL"), window.close());
        const ZB = {
          type: `oauth_authentication_${BB.providerName}`,
          code: IB
        };
        for (const BB of (JB = window.location.origin) === nB ? [JB, `https://${cB.c}`] : [JB]) {
          var TB;
          null === (TB = window.opener) || void 0 === TB || TB.postMessage(ZB, BB)
        }
        var JB;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, hB.jsx)("div", {
        className: "AuthCallback",
        children: (0, hB.jsx)(TB.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);