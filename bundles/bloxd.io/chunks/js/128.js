export const id = 128;
export const ids = [128];
export const modules = {
  6501: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      default: () => rB
    });
    var QB = zB(1369),
      nB = zB(62),
      dB = zB(121),
      IB = zB(1547),
      NB = zB(1265),
      uB = zB(363),
      UB = zB(690);
    const aB = new URL(NB.n[uB.e.PRODUCTION]).origin;
    var pB = zB(1148);

    function rB() {
      const BB = (0, IB.w)();
      return (0, nB.useEffect)((() => {
        const jB = dB.currentUrl.getSearchParam("code");
        dB.currentUrl.removeSearchParam("code"), null === jB && (console.error("No authorization code found in the URL"), window.close());
        const zB = {
          type: `oauth_authentication_${BB.providerName}`,
          code: jB
        };
        for (const BB of (nB = window.location.origin) === aB ? [nB, `https://${UB.b}`] : [nB]) {
          var QB;
          null === (QB = window.opener) || void 0 === QB || QB.postMessage(zB, BB)
        }
        var nB;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, pB.jsx)("div", {
        className: "AuthCallback",
        children: (0, pB.jsx)(QB.e, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);