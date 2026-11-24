export const id = 128;
export const ids = [128];
export const modules = {
  6607: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      default: () => LT
    });
    var WT = mT(1446),
      zT = mT(63),
      MT = mT(108),
      gT = mT(1641),
      nT = mT(1324),
      HT = mT(351),
      kT = mT(681);
    const jT = new URL(nT.l[HT.c.PRODUCTION]).origin;
    var lT = mT(1188);

    function LT() {
      const TT = (0, gT.y)();
      return (0, zT.useEffect)((() => {
        const UT = MT.currentUrl.getSearchParam("code");
        MT.currentUrl.removeSearchParam("code"), null === UT && (console.error("No authorization code found in the URL"), window.close());
        const mT = {
          type: `oauth_authentication_${TT.providerName}`,
          code: UT
        };
        for (const TT of (zT = window.location.origin) === jT ? [zT, `https://${kT.b}`] : [zT]) {
          var WT;
          null === (WT = window.opener) || void 0 === WT || WT.postMessage(mT, TT)
        }
        var zT;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, lT.jsx)("div", {
        className: "AuthCallback",
        children: (0, lT.jsx)(WT.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);