export const id = 126;
export const ids = [126];
export const modules = {
  6578: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      default: () => UD
    });
    var pD = wD(1346),
      sD = wD(58),
      KD = wD(113),
      rD = wD(1523),
      LD = wD(1234),
      cD = wD(338),
      gD = wD(638);
    const RD = new URL(LD.p[cD.c.PRODUCTION]).origin;
    var AD = wD(1096);

    function UD() {
      const DD = (0, rD.C)();
      return (0, sD.useEffect)((() => {
        const zD = KD.currentUrl.getSearchParam("code");
        KD.currentUrl.removeSearchParam("code"), null === zD && (console.error("No authorization code found in the URL"), window.close());
        const wD = {
          type: `oauth_authentication_${DD.providerName}`,
          code: zD
        };
        for (const DD of (sD = window.location.origin) === RD ? [sD, `https://${gD.e}`] : [sD]) {
          var pD;
          null === (pD = window.opener) || void 0 === pD || pD.postMessage(wD, DD)
        }
        var sD;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, AD.jsx)("div", {
        className: "AuthCallback",
        children: (0, AD.jsx)(pD.e, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);