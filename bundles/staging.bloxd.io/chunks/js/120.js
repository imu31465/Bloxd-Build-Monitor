export const id = 120;
export const ids = [120];
export const modules = {
  6031: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      default: () => LT
    });
    var iT = IT(1310),
      zT = IT(46),
      kT = IT(104),
      WT = IT(1484),
      XT = IT(1199),
      BT = IT(306),
      FT = IT(637);
    const ST = new URL(XT.t[BT.c.PRODUCTION]).origin;
    var DT = IT(1083);

    function LT() {
      const TT = (0, WT.C)();
      return (0, zT.useEffect)((() => {
        const oT = kT.currentUrl.getSearchParam("code");
        kT.currentUrl.removeSearchParam("code"), null === oT && (console.error("No authorization code found in the URL"), window.close());
        const IT = {
          type: `oauth_authentication_${TT.providerName}`,
          code: oT
        };
        for (const TT of (zT = window.location.origin) === ST ? [zT, `https://${FT.c}`] : [zT]) {
          var iT;
          null === (iT = window.opener) || void 0 === iT || iT.postMessage(IT, TT)
        }
        var zT;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, DT.jsx)("div", {
        className: "AuthCallback",
        children: (0, DT.jsx)(iT.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);