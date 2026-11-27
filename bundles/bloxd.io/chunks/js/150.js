export const id = 150;
export const ids = [150];
export const modules = {
  7684: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      default: () => wR
    });
    var yR = GR(1465),
      tR = GR(66),
      uR = GR(112),
      ZR = GR(1677),
      qR = GR(1322),
      iR = GR(359),
      fR = GR(709);
    const VR = new URL(qR.p[iR.b.PRODUCTION]).origin;
    var KR = GR(1378);

    function wR() {
      const RR = (0, ZR.x)();
      return (0, tR.useEffect)((() => {
        const JR = uR.currentUrl.getSearchParam("code");
        uR.currentUrl.removeSearchParam("code"), null === JR && (console.error("No authorization code found in the URL"), window.close());
        const GR = {
          type: `oauth_authentication_${RR.providerName}`,
          code: JR
        };
        for (const RR of (tR = window.location.origin) === VR ? [tR, `https://${fR.d}`] : [tR]) {
          var yR;
          null === (yR = window.opener) || void 0 === yR || yR.postMessage(GR, RR)
        }
        var tR;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, KR.jsx)("div", {
        className: "AuthCallback",
        children: (0, KR.jsx)(yR.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);