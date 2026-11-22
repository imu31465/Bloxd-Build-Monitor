export const id = 126;
export const ids = [126];
export const modules = {
  6378: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      default: () => xk
    });
    var Dk = ik(1327),
      fk = ik(60),
      Sk = ik(107),
      bk = ik(1496),
      rk = ik(1212),
      Pk = ik(302),
      mk = ik(610);
    const Mk = new URL(rk.k[Pk.d.PRODUCTION]).origin;
    var Kk = ik(1066);

    function xk() {
      const kk = (0, bk.y)();
      return (0, fk.useEffect)((() => {
        const ek = Sk.currentUrl.getSearchParam("code");
        Sk.currentUrl.removeSearchParam("code"), null === ek && (console.error("No authorization code found in the URL"), window.close());
        const ik = {
          type: `oauth_authentication_${kk.providerName}`,
          code: ek
        };
        for (const kk of (fk = window.location.origin) === Mk ? [fk, `https://${mk.c}`] : [fk]) {
          var Dk;
          null === (Dk = window.opener) || void 0 === Dk || Dk.postMessage(ik, kk)
        }
        var fk;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Kk.jsx)("div", {
        className: "AuthCallback",
        children: (0, Kk.jsx)(Dk.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);