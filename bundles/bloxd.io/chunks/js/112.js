export const id = 112;
export const ids = [112];
export const modules = {
  5879: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      default: () => LB
    });
    var VB = dB(1225),
      yB = dB(62),
      pB = dB(101),
      lB = dB(1422),
      JB = dB(1109),
      YB = dB(270),
      gB = dB(586);
    const oB = new URL(JB.q[YB.d.PRODUCTION]).origin;
    var kB = dB(980);

    function LB() {
      const BB = (0, lB.u)();
      return (0, yB.useEffect)((() => {
        const TB = pB.currentUrl.getSearchParam("code");
        pB.currentUrl.removeSearchParam("code"), null === TB && (console.error("No authorization code found in the URL"), window.close());
        const dB = {
          type: `oauth_authentication_${BB.providerName}`,
          code: TB
        };
        for (const BB of (yB = window.location.origin) === oB ? [yB, `https://${gB.d}`] : [yB]) {
          var VB;
          null === (VB = window.opener) || void 0 === VB || VB.postMessage(dB, BB)
        }
        var yB;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, kB.jsx)("div", {
        className: "AuthCallback",
        children: (0, kB.jsx)(VB.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);