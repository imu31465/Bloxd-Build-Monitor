export const id = 141;
export const ids = [141];
export const modules = {
  7119: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      default: () => vV
    });
    var JV = xV(1408),
      YV = xV(62),
      UV = xV(110),
      yV = xV(1625),
      pV = xV(1260),
      QV = xV(364),
      nV = xV(686);
    const wV = new URL(pV.s[QV.c.PRODUCTION]).origin;
    var ZV = xV(1321);

    function vV() {
      const VV = (0, yV.A)();
      return (0, YV.useEffect)((() => {
        const eV = UV.currentUrl.getSearchParam("code");
        UV.currentUrl.removeSearchParam("code"), null === eV && (console.error("No authorization code found in the URL"), window.close());
        const xV = {
          type: `oauth_authentication_${VV.providerName}`,
          code: eV
        };
        for (const VV of (YV = window.location.origin) === wV ? [YV, `https://${nV.c}`] : [YV]) {
          var JV;
          null === (JV = window.opener) || void 0 === JV || JV.postMessage(xV, VV)
        }
        var YV;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, ZV.jsx)("div", {
        className: "AuthCallback",
        children: (0, ZV.jsx)(JV.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);