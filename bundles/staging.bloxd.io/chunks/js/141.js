export const id = 141;
export const ids = [141];
export const modules = {
  7186: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      default: () => ke
    });
    var ye = He(1320),
      be = He(59),
      Me = He(103),
      Ke = He(1515),
      Ue = He(1178),
      Fe = He(335),
      Je = He(645);
    const oe = new URL(Ue.m[Fe.d.PRODUCTION]).origin;
    var Re = He(1228);

    function ke() {
      const ee = (0, Ke.B)();
      return (0, be.useEffect)((() => {
        const ie = Me.currentUrl.getSearchParam("code");
        Me.currentUrl.removeSearchParam("code"), null === ie && (console.error("No authorization code found in the URL"), window.close());
        const He = {
          type: `oauth_authentication_${ee.providerName}`,
          code: ie
        };
        for (const ee of (be = window.location.origin) === oe ? [be, `https://${Je.c}`] : [be]) {
          var ye;
          null === (ye = window.opener) || void 0 === ye || ye.postMessage(He, ee)
        }
        var be;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Re.jsx)("div", {
        className: "AuthCallback",
        children: (0, Re.jsx)(ye.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);