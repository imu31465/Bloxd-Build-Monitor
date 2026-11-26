export const id = 139;
export const ids = [139];
export const modules = {
  7140: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      default: () => NU
    });
    var cU = zU(1384),
      yU = zU(61),
      QU = zU(111),
      AU = zU(1577),
      FU = zU(1241),
      oU = zU(320),
      DU = zU(687);
    const EU = new URL(FU.p[oU.e.PRODUCTION]).origin;
    var YU = zU(1305);

    function NU() {
      const UU = (0, AU.C)();
      return (0, yU.useEffect)((() => {
        const XU = QU.currentUrl.getSearchParam("code");
        QU.currentUrl.removeSearchParam("code"), null === XU && (console.error("No authorization code found in the URL"), window.close());
        const zU = {
          type: `oauth_authentication_${UU.providerName}`,
          code: XU
        };
        for (const UU of (yU = window.location.origin) === EU ? [yU, `https://${DU.d}`] : [yU]) {
          var cU;
          null === (cU = window.opener) || void 0 === cU || cU.postMessage(zU, UU)
        }
        var yU;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, YU.jsx)("div", {
        className: "AuthCallback",
        children: (0, YU.jsx)(cU.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);