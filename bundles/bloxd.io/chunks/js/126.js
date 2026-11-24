export const id = 126;
export const ids = [126];
export const modules = {
  6747: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      default: () => kS
    });
    var tS = gS(1419),
      bS = gS(64),
      XS = gS(113),
      xS = gS(1622),
      NS = gS(1312),
      qS = gS(369),
      uS = gS(699);
    const IS = new URL(NS.m[qS.e.PRODUCTION]).origin;
    var fS = gS(1181);

    function kS() {
      const SS = (0, xS.z)();
      return (0, bS.useEffect)((() => {
        const HS = XS.currentUrl.getSearchParam("code");
        XS.currentUrl.removeSearchParam("code"), null === HS && (console.error("No authorization code found in the URL"), window.close());
        const gS = {
          type: `oauth_authentication_${SS.providerName}`,
          code: HS
        };
        for (const SS of (bS = window.location.origin) === IS ? [bS, `https://${uS.d}`] : [bS]) {
          var tS;
          null === (tS = window.opener) || void 0 === tS || tS.postMessage(gS, SS)
        }
        var bS;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, fS.jsx)("div", {
        className: "AuthCallback",
        children: (0, fS.jsx)(tS.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);