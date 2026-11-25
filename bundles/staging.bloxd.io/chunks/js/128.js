export const id = 128;
export const ids = [128];
export const modules = {
  6747: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      default: () => cu
    });
    var su = ju(1393),
      Uu = ju(58),
      Zu = ju(103),
      Xu = ju(1580),
      lu = ju(1285),
      qu = ju(337),
      fu = ju(680);
    const Cu = new URL(lu.o[qu.d.PRODUCTION]).origin;
    var bu = ju(1154);

    function cu() {
      const uu = (0, Xu.B)();
      return (0, Uu.useEffect)((() => {
        const Eu = Zu.currentUrl.getSearchParam("code");
        Zu.currentUrl.removeSearchParam("code"), null === Eu && (console.error("No authorization code found in the URL"), window.close());
        const ju = {
          type: `oauth_authentication_${uu.providerName}`,
          code: Eu
        };
        for (const uu of (Uu = window.location.origin) === Cu ? [Uu, `https://${fu.d}`] : [Uu]) {
          var su;
          null === (su = window.opener) || void 0 === su || su.postMessage(ju, uu)
        }
        var Uu;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, bu.jsx)("div", {
        className: "AuthCallback",
        children: (0, bu.jsx)(su.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);