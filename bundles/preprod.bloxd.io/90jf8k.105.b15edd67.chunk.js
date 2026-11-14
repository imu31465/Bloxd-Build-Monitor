export const id = 105;
export const ids = [105];
export const modules = {
  5504: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      default: () => eF
    });
    var CF = SF(1186),
      AF = SF(46),
      uF = SF(101),
      hF = SF(1360),
      bW = SF(1090),
      dF = SF(220),
      PF = SF(234);
    const RF = new URL(bW.p[dF.b.PRODUCTION]).origin;
    var iW = SF(971);

    function eF() {
      const FF = (0, hF.v)();
      return (0, AF.useEffect)((() => {
        const WF = uF.currentUrl.getSearchParam("code");
        uF.currentUrl.removeSearchParam("code"), null === WF && (console.error("No authorization code found in the URL"), window.close());
        const SF = {
          type: `oauth_authentication_${FF.providerName}`,
          code: WF
        };
        for (const FF of (AF = window.location.origin) === RF ? [AF, `https://${PF.b}`] : [AF]) {
          var CF;
          null === (CF = window.opener) || void 0 === CF || CF.postMessage(SF, FF)
        }
        var AF;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, iW.jsx)("div", {
        className: "AuthCallback",
        children: (0, iW.jsx)(CF.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);