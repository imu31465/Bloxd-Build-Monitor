export const id = 141;
export const ids = [141];
export const modules = {
  7090: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      default: () => zB
    });
    var YB = GB(1375),
      DB = GB(56),
      QB = GB(98),
      oB = GB(1571),
      jB = GB(1225),
      yB = GB(331),
      JB = GB(662);
    const MB = new URL(jB.n[yB.c.PRODUCTION]).origin;
    var PB = GB(1282);

    function zB() {
      const BB = (0, oB.A)();
      return (0, DB.useEffect)((() => {
        const OB = QB.currentUrl.getSearchParam("code");
        QB.currentUrl.removeSearchParam("code"), null === OB && (console.error("No authorization code found in the URL"), window.close());
        const GB = {
          type: `oauth_authentication_${BB.providerName}`,
          code: OB
        };
        for (const BB of (DB = window.location.origin) === MB ? [DB, `https://${JB.b}`] : [DB]) {
          var YB;
          null === (YB = window.opener) || void 0 === YB || YB.postMessage(GB, BB)
        }
        var DB;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, PB.jsx)("div", {
        className: "AuthCallback",
        children: (0, PB.jsx)(YB.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);