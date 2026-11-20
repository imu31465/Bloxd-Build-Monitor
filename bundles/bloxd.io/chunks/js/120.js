export const id = 120;
export const ids = [120];
export const modules = {
  6272: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      default: () => wb
    });
    var Bb = hb(1242),
      Ob = hb(49),
      Gb = hb(94),
      Ub = hb(1431),
      Lb = hb(1127),
      Yb = hb(298),
      Sb = hb(599);
    const ab = new URL(Lb.p[Yb.c.PRODUCTION]).origin;
    var Hb = hb(1007);

    function wb() {
      const bb = (0, Ub.F)();
      return (0, Ob.useEffect)((() => {
        const ub = Gb.currentUrl.getSearchParam("code");
        Gb.currentUrl.removeSearchParam("code"), null === ub && (console.error("No authorization code found in the URL"), window.close());
        const hb = {
          type: `oauth_authentication_${bb.providerName}`,
          code: ub
        };
        for (const bb of (Ob = window.location.origin) === ab ? [Ob, `https://${Sb.b}`] : [Ob]) {
          var Bb;
          null === (Bb = window.opener) || void 0 === Bb || Bb.postMessage(hb, bb)
        }
        var Ob;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Hb.jsx)("div", {
        className: "AuthCallback",
        children: (0, Hb.jsx)(Bb.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);