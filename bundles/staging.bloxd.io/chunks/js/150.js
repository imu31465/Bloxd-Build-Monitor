export const id = 150;
export const ids = [150];
export const modules = {
  7741: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      default: () => Ub
    });
    var eb = Mb(1468),
      Hb = Mb(64),
      pb = Mb(122),
      Vb = Mb(1696),
      gb = Mb(1304),
      lb = Mb(366),
      Lb = Mb(698);
    const Ib = new URL(gb.m[lb.b.PRODUCTION]).origin;
    var Ob = Mb(1364);

    function Ub() {
      const bb = (0, Vb.E)();
      return (0, Hb.useEffect)((() => {
        const wb = pb.currentUrl.getSearchParam("code");
        pb.currentUrl.removeSearchParam("code"), null === wb && (console.error("No authorization code found in the URL"), window.close());
        const Mb = {
          type: `oauth_authentication_${bb.providerName}`,
          code: wb
        };
        for (const bb of (Hb = window.location.origin) === Ib ? [Hb, `https://${Lb.c}`] : [Hb]) {
          var eb;
          null === (eb = window.opener) || void 0 === eb || eb.postMessage(Mb, bb)
        }
        var Hb;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Ob.jsx)("div", {
        className: "AuthCallback",
        children: (0, Ob.jsx)(eb.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);