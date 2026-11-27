export const id = 150;
export const ids = [150];
export const modules = {
  7551: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      default: () => xW
    });
    var mW = OW(1383),
      EW = OW(62),
      NW = OW(109),
      PW = OW(1616),
      LW = OW(1220),
      cW = OW(327),
      wW = OW(671);
    const tW = new URL(LW.m[cW.c.PRODUCTION]).origin;
    var ZW = OW(1283);

    function xW() {
      const WW = (0, PW.z)();
      return (0, EW.useEffect)((() => {
        const iW = NW.currentUrl.getSearchParam("code");
        NW.currentUrl.removeSearchParam("code"), null === iW && (console.error("No authorization code found in the URL"), window.close());
        const OW = {
          type: `oauth_authentication_${WW.providerName}`,
          code: iW
        };
        for (const WW of (EW = window.location.origin) === tW ? [EW, `https://${wW.e}`] : [EW]) {
          var mW;
          null === (mW = window.opener) || void 0 === mW || mW.postMessage(OW, WW)
        }
        var EW;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, ZW.jsx)("div", {
        className: "AuthCallback",
        children: (0, ZW.jsx)(mW.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);