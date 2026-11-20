export const id = 119;
export const ids = [119];
export const modules = {
  6540: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      default: () => CT
    });
    var lT = cT(1348),
      MT = cT(71),
      KT = cT(127),
      OT = cT(1535),
      yT = cT(1235),
      fT = cT(328),
      xT = cT(636);
    const IT = new URL(yT.l[fT.c.PRODUCTION]).origin;
    var AT = cT(1099);

    function CT() {
      const TT = (0, OT.v)();
      return (0, MT.useEffect)((() => {
        const kT = KT.currentUrl.getSearchParam("code");
        KT.currentUrl.removeSearchParam("code"), null === kT && (console.error("No authorization code found in the URL"), window.close());
        const cT = {
          type: `oauth_authentication_${TT.providerName}`,
          code: kT
        };
        for (const TT of (MT = window.location.origin) === IT ? [MT, `https://${xT.c}`] : [MT]) {
          var lT;
          null === (lT = window.opener) || void 0 === lT || lT.postMessage(cT, TT)
        }
        var MT;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, AT.jsx)("div", {
        className: "AuthCallback",
        children: (0, AT.jsx)(lT.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);