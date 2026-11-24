export const id = 126;
export const ids = [126];
export const modules = {
  6496: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      default: () => Em
    });
    var hm = fm(1345),
      Am = fm(59),
      am = fm(112),
      xm = fm(1537),
      wm = fm(1238),
      Dm = fm(339),
      im = fm(675);
    const Rm = new URL(wm.l[Dm.c.PRODUCTION]).origin;
    var pm = fm(1135);

    function Em() {
      const mm = (0, xm.G)();
      return (0, Am.useEffect)((() => {
        const Tm = am.currentUrl.getSearchParam("code");
        am.currentUrl.removeSearchParam("code"), null === Tm && (console.error("No authorization code found in the URL"), window.close());
        const fm = {
          type: `oauth_authentication_${mm.providerName}`,
          code: Tm
        };
        for (const mm of (Am = window.location.origin) === Rm ? [Am, `https://${im.c}`] : [Am]) {
          var hm;
          null === (hm = window.opener) || void 0 === hm || hm.postMessage(fm, mm)
        }
        var Am;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, pm.jsx)("div", {
        className: "AuthCallback",
        children: (0, pm.jsx)(hm.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);