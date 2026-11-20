export const id = 119;
export const ids = [119];
export const modules = {
  6208: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      default: () => jU
    });
    var tU = gU(1326),
      pU = gU(56),
      EU = gU(109),
      PU = gU(1481),
      TU = gU(1223),
      qU = gU(299),
      KU = gU(603);
    const cU = new URL(TU.p[qU.b.PRODUCTION]).origin;
    var GU = gU(1090);

    function jU() {
      const UU = (0, PU.y)();
      return (0, pU.useEffect)((() => {
        const RU = EU.currentUrl.getSearchParam("code");
        EU.currentUrl.removeSearchParam("code"), null === RU && (console.error("No authorization code found in the URL"), window.close());
        const gU = {
          type: `oauth_authentication_${UU.providerName}`,
          code: RU
        };
        for (const UU of (pU = window.location.origin) === cU ? [pU, `https://${KU.e}`] : [pU]) {
          var tU;
          null === (tU = window.opener) || void 0 === tU || tU.postMessage(gU, UU)
        }
        var pU;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, GU.jsx)("div", {
        className: "AuthCallback",
        children: (0, GU.jsx)(tU.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);