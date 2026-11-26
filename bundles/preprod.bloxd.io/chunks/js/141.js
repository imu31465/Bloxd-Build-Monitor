export const id = 141;
export const ids = [141];
export const modules = {
  7097: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      default: () => GH
    });
    var AH = LH(1313),
      rH = LH(45),
      SH = LH(92),
      hH = LH(1520),
      tH = LH(1177),
      zH = LH(304),
      CH = LH(642);
    const EH = new URL(tH.l[zH.c.PRODUCTION]).origin;
    var XH = LH(1225);

    function GH() {
      const HH = (0, hH.A)();
      return (0, rH.useEffect)((() => {
        const BH = SH.currentUrl.getSearchParam("code");
        SH.currentUrl.removeSearchParam("code"), null === BH && (console.error("No authorization code found in the URL"), window.close());
        const LH = {
          type: `oauth_authentication_${HH.providerName}`,
          code: BH
        };
        for (const HH of (rH = window.location.origin) === EH ? [rH, `https://${CH.e}`] : [rH]) {
          var AH;
          null === (AH = window.opener) || void 0 === AH || AH.postMessage(LH, HH)
        }
        var rH;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, XH.jsx)("div", {
        className: "AuthCallback",
        children: (0, XH.jsx)(AH.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);