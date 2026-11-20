export const id = 119;
export const ids = [119];
export const modules = {
  6237: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      default: () => Jk
    });
    var Rk = Bk(1288),
      tk = Bk(61),
      ak = Bk(109),
      Xk = Bk(1473),
      bk = Bk(1175),
      wk = Bk(279),
      dk = Bk(624);
    const sk = new URL(bk.q[wk.d.PRODUCTION]).origin;
    var Vk = Bk(1069);

    function Jk() {
      const kk = (0, Xk.x)();
      return (0, tk.useEffect)((() => {
        const Fk = ak.currentUrl.getSearchParam("code");
        ak.currentUrl.removeSearchParam("code"), null === Fk && (console.error("No authorization code found in the URL"), window.close());
        const Bk = {
          type: `oauth_authentication_${kk.providerName}`,
          code: Fk
        };
        for (const kk of (tk = window.location.origin) === sk ? [tk, `https://${dk.c}`] : [tk]) {
          var Rk;
          null === (Rk = window.opener) || void 0 === Rk || Rk.postMessage(Bk, kk)
        }
        var tk;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Vk.jsx)("div", {
        className: "AuthCallback",
        children: (0, Vk.jsx)(Rk.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);