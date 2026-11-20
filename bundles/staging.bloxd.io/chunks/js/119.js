export const id = 119;
export const ids = [119];
export const modules = {
  6190: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      default: () => Xb
    });
    var kb = sb(1327),
      Wb = sb(64),
      ab = sb(131),
      Tb = sb(1511),
      Ub = sb(1241),
      Ib = sb(334),
      Hb = sb(649);
    const fb = new URL(Ub.q[Ib.c.PRODUCTION]).origin;
    var Mb = sb(1087);

    function Xb() {
      const bb = (0, Tb.D)();
      return (0, Wb.useEffect)((() => {
        const cb = ab.currentUrl.getSearchParam("code");
        ab.currentUrl.removeSearchParam("code"), null === cb && (console.error("No authorization code found in the URL"), window.close());
        const sb = {
          type: `oauth_authentication_${bb.providerName}`,
          code: cb
        };
        for (const bb of (Wb = window.location.origin) === fb ? [Wb, `https://${Hb.d}`] : [Wb]) {
          var kb;
          null === (kb = window.opener) || void 0 === kb || kb.postMessage(sb, bb)
        }
        var Wb;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Mb.jsx)("div", {
        className: "AuthCallback",
        children: (0, Mb.jsx)(kb.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);