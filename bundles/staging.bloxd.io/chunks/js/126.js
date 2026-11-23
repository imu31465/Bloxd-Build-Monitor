export const id = 126;
export const ids = [126];
export const modules = {
  6531: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      default: () => Zk
    });
    var Xk = Ik(1318),
      Tk = Ik(58),
      ik = Ik(104),
      yk = Ik(1485),
      lk = Ik(1220),
      ak = Ik(318),
      qk = Ik(646);
    const Lk = new URL(lk.k[ak.d.PRODUCTION]).origin;
    var tk = Ik(1096);

    function Zk() {
      const kk = (0, yk.A)();
      return (0, Tk.useEffect)((() => {
        const Fk = ik.currentUrl.getSearchParam("code");
        ik.currentUrl.removeSearchParam("code"), null === Fk && (console.error("No authorization code found in the URL"), window.close());
        const Ik = {
          type: `oauth_authentication_${kk.providerName}`,
          code: Fk
        };
        for (const kk of (Tk = window.location.origin) === Lk ? [Tk, `https://${qk.b}`] : [Tk]) {
          var Xk;
          null === (Xk = window.opener) || void 0 === Xk || Xk.postMessage(Ik, kk)
        }
        var Tk;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, tk.jsx)("div", {
        className: "AuthCallback",
        children: (0, tk.jsx)(Xk.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);