export const id = 111;
export const ids = [111];
export const modules = {
  5789: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      default: () => ey
    });
    var Uy = Wy(1194),
      hy = Wy(55),
      fy = Wy(103),
      Zy = Wy(1370),
      cb = Wy(1086),
      Py = Wy(248),
      oy = Wy(562);
    const By = new URL(cb.q[Py.d.PRODUCTION]).origin;
    var Ky = Wy(952);

    function ey() {
      const yb = (0, Zy.F)();
      return (0, hy.useEffect)((() => {
        const bb = fy.currentUrl.getSearchParam("code");
        fy.currentUrl.removeSearchParam("code"), null === bb && (console.error("No authorization code found in the URL"), window.close());
        const Wy = {
          type: `oauth_authentication_${yb.providerName}`,
          code: bb
        };
        for (const yb of (hy = window.location.origin) === By ? [hy, `https://${oy.d}`] : [hy]) {
          var Uy;
          null === (Uy = window.opener) || void 0 === Uy || Uy.postMessage(Wy, yb)
        }
        var hy;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Ky.jsx)("div", {
        className: "AuthCallback",
        children: (0, Ky.jsx)(Uy.e, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);