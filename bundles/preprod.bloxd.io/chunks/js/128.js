export const id = 128;
export const ids = [128];
export const modules = {
  6687: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => Pp
    });
    var Op = cp(1361),
      op = cp(62),
      Ip = cp(108),
      Sp = cp(1543),
      xp = cp(1236),
      Lp = cp(322),
      Yp = cp(657);
    const Dp = new URL(xp.l[Lp.b.PRODUCTION]).origin;
    var Ap = cp(1112);

    function Pp() {
      const pp = (0, Sp.A)();
      return (0, op.useEffect)((() => {
        const ip = Ip.currentUrl.getSearchParam("code");
        Ip.currentUrl.removeSearchParam("code"), null === ip && (console.error("No authorization code found in the URL"), window.close());
        const cp = {
          type: `oauth_authentication_${pp.providerName}`,
          code: ip
        };
        for (const pp of (op = window.location.origin) === Dp ? [op, `https://${Yp.e}`] : [op]) {
          var Op;
          null === (Op = window.opener) || void 0 === Op || Op.postMessage(cp, pp)
        }
        var op;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Ap.jsx)("div", {
        className: "AuthCallback",
        children: (0, Ap.jsx)(Op.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);