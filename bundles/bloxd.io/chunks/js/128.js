export const id = 128;
export const ids = [128];
export const modules = {
  6547: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      default: () => fG
    });
    var wG = ZG(1302),
      SG = ZG(51),
      LG = ZG(86),
      yG = ZG(1457),
      kG = ZG(1185),
      UG = ZG(333),
      YG = ZG(631);
    const VG = new URL(kG.m[UG.e.PRODUCTION]).origin;
    var pG = ZG(1067);

    function fG() {
      const GG = (0, yG.v)();
      return (0, SG.useEffect)((() => {
        const bG = LG.currentUrl.getSearchParam("code");
        LG.currentUrl.removeSearchParam("code"), null === bG && (console.error("No authorization code found in the URL"), window.close());
        const ZG = {
          type: `oauth_authentication_${GG.providerName}`,
          code: bG
        };
        for (const GG of (SG = window.location.origin) === VG ? [SG, `https://${YG.d}`] : [SG]) {
          var wG;
          null === (wG = window.opener) || void 0 === wG || wG.postMessage(ZG, GG)
        }
        var SG;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, pG.jsx)("div", {
        className: "AuthCallback",
        children: (0, pG.jsx)(wG.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);