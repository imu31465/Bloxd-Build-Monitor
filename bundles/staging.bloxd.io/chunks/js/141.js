export const id = 141;
export const ids = [141];
export const modules = {
  7046: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      default: () => mM
    });
    var OM = iM(1396),
      SM = iM(44),
      jM = iM(94),
      aM = iM(1608),
      PM = iM(1232),
      nM = iM(313),
      QM = iM(656);
    const zM = new URL(PM.o[nM.d.PRODUCTION]).origin;
    var LM = iM(1303);

    function mM() {
      const MM = (0, aM.D)();
      return (0, SM.useEffect)((() => {
        const rM = jM.currentUrl.getSearchParam("code");
        jM.currentUrl.removeSearchParam("code"), null === rM && (console.error("No authorization code found in the URL"), window.close());
        const iM = {
          type: `oauth_authentication_${MM.providerName}`,
          code: rM
        };
        for (const MM of (SM = window.location.origin) === zM ? [SM, `https://${QM.e}`] : [SM]) {
          var OM;
          null === (OM = window.opener) || void 0 === OM || OM.postMessage(iM, MM)
        }
        var SM;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, LM.jsx)("div", {
        className: "AuthCallback",
        children: (0, LM.jsx)(OM.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);