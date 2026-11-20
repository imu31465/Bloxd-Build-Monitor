export const id = 119;
export const ids = [119];
export const modules = {
  6149: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      default: () => Pb
    });
    var Ab = Ub(1254),
      Mb = Ub(52),
      Tb = Ub(109),
      Eb = Ub(1446),
      Yb = Ub(1171),
      Bb = Ub(307),
      eb = Ub(603);
    const vb = new URL(Yb.k[Bb.b.PRODUCTION]).origin;
    var Lb = Ub(1023);

    function Pb() {
      const bb = (0, Eb.F)();
      return (0, Mb.useEffect)((() => {
        const ab = Tb.currentUrl.getSearchParam("code");
        Tb.currentUrl.removeSearchParam("code"), null === ab && (console.error("No authorization code found in the URL"), window.close());
        const Ub = {
          type: `oauth_authentication_${bb.providerName}`,
          code: ab
        };
        for (const bb of (Mb = window.location.origin) === vb ? [Mb, `https://${eb.c}`] : [Mb]) {
          var Ab;
          null === (Ab = window.opener) || void 0 === Ab || Ab.postMessage(Ub, bb)
        }
        var Mb;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Lb.jsx)("div", {
        className: "AuthCallback",
        children: (0, Lb.jsx)(Ab.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);