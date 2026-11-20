export const id = 119;
export const ids = [119];
export const modules = {
  6251: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      default: () => Wv
    });
    var hv = Pv(1327),
      Sv = Pv(52),
      ev = Pv(81),
      gv = Pv(1505),
      pv = Pv(1212),
      dv = Pv(302),
      Nv = Pv(635);
    const lv = new URL(pv.n[dv.c.PRODUCTION]).origin;
    var Tv = Pv(1082);

    function Wv() {
      const vv = (0, gv.B)();
      return (0, Sv.useEffect)((() => {
        const zv = ev.currentUrl.getSearchParam("code");
        ev.currentUrl.removeSearchParam("code"), null === zv && (console.error("No authorization code found in the URL"), window.close());
        const Pv = {
          type: `oauth_authentication_${vv.providerName}`,
          code: zv
        };
        for (const vv of (Sv = window.location.origin) === lv ? [Sv, `https://${Nv.e}`] : [Sv]) {
          var hv;
          null === (hv = window.opener) || void 0 === hv || hv.postMessage(Pv, vv)
        }
        var Sv;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Tv.jsx)("div", {
        className: "AuthCallback",
        children: (0, Tv.jsx)(hv.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);