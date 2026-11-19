export const id = 120;
export const ids = [120];
export const modules = {
  6094: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      default: () => sY
    });
    var FY = DY(1337),
      AY = DY(61),
      IY = DY(115),
      RY = DY(1501),
      OY = DY(1233),
      gY = DY(332),
      aY = DY(649);
    const vY = new URL(OY.j[gY.e.PRODUCTION]).origin;
    var uY = DY(1125);

    function sY() {
      const YY = (0, RY.D)();
      return (0, AY.useEffect)((() => {
        const rY = IY.currentUrl.getSearchParam("code");
        IY.currentUrl.removeSearchParam("code"), null === rY && (console.error("No authorization code found in the URL"), window.close());
        const DY = {
          type: `oauth_authentication_${YY.providerName}`,
          code: rY
        };
        for (const YY of (AY = window.location.origin) === vY ? [AY, `https://${aY.b}`] : [AY]) {
          var FY;
          null === (FY = window.opener) || void 0 === FY || FY.postMessage(DY, YY)
        }
        var AY;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, uY.jsx)("div", {
        className: "AuthCallback",
        children: (0, uY.jsx)(FY.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);