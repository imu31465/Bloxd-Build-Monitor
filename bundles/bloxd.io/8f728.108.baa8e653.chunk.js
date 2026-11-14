export const id = 108;
export const ids = [108];
export const modules = {
  5504: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      default: () => Tc
    });
    var Vc = nc(1188),
      Ic = nc(73),
      rB = nc(119),
      uc = nc(1344),
      sc = nc(1094),
      Mc = nc(244),
      Pc = nc(263);
    const qB = new URL(sc.n[Mc.b.PRODUCTION]).origin;
    var Oc = nc(957);

    function Tc() {
      const cB = (0, uc.z)();
      return (0, Ic.useEffect)((() => {
        const Bc = rB.currentUrl.getSearchParam("code");
        rB.currentUrl.removeSearchParam("code"), null === Bc && (console.error("No authorization code found in the URL"), window.close());
        const nc = {
          type: `oauth_authentication_${cB.providerName}`,
          code: Bc
        };
        for (const cB of (Ic = window.location.origin) === qB ? [Ic, `https://${Pc.c}`] : [Ic]) {
          var Vc;
          null === (Vc = window.opener) || void 0 === Vc || Vc.postMessage(nc, cB)
        }
        var Ic;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Oc.jsx)("div", {
        className: "AuthCallback",
        children: (0, Oc.jsx)(Vc.e, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);