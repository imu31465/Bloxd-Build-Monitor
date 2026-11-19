export const id = 119;
export const ids = [119];
export const modules = {
  6280: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      default: () => yD
    });
    var ID = cD(1328),
      pD = cD(53),
      iD = cD(101),
      fD = cD(1517),
      bD = cD(1227),
      QD = cD(312),
      wD = cD(646);
    const SD = new URL(bD.l[QD.d.PRODUCTION]).origin;
    var BD = cD(1093);

    function yD() {
      const DD = (0, fD.F)();
      return (0, pD.useEffect)((() => {
        const CD = iD.currentUrl.getSearchParam("code");
        iD.currentUrl.removeSearchParam("code"), null === CD && (console.error("No authorization code found in the URL"), window.close());
        const cD = {
          type: `oauth_authentication_${DD.providerName}`,
          code: CD
        };
        for (const DD of (pD = window.location.origin) === SD ? [pD, `https://${wD.b}`] : [pD]) {
          var ID;
          null === (ID = window.opener) || void 0 === ID || ID.postMessage(cD, DD)
        }
        var pD;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, BD.jsx)("div", {
        className: "AuthCallback",
        children: (0, BD.jsx)(ID.e, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);