export const id = 126;
export const ids = [126];
export const modules = {
  6547: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      default: () => NC
    });
    var QC = ZC(1295),
      wC = ZC(48),
      bC = ZC(88),
      nC = ZC(1463),
      fC = ZC(1171),
      oC = ZC(310),
      qC = ZC(615);
    const FC = new URL(fC.k[oC.c.PRODUCTION]).origin;
    var WC = ZC(1056);

    function NC() {
      const CC = (0, nC.C)();
      return (0, wC.useEffect)((() => {
        const zC = bC.currentUrl.getSearchParam("code");
        bC.currentUrl.removeSearchParam("code"), null === zC && (console.error("No authorization code found in the URL"), window.close());
        const ZC = {
          type: `oauth_authentication_${CC.providerName}`,
          code: zC
        };
        for (const CC of (wC = window.location.origin) === FC ? [wC, `https://${qC.e}`] : [wC]) {
          var QC;
          null === (QC = window.opener) || void 0 === QC || QC.postMessage(ZC, CC)
        }
        var wC;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, WC.jsx)("div", {
        className: "AuthCallback",
        children: (0, WC.jsx)(QC.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);