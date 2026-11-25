export const id = 128;
export const ids = [128];
export const modules = {
  6739: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      default: () => lt
    });
    var Ot = Vt(1436),
      qt = Vt(63),
      Dt = Vt(121),
      mt = Vt(1623),
      dt = Vt(1314),
      jt = Vt(377),
      Ht = Vt(725);
    const Xt = new URL(dt.o[jt.b.PRODUCTION]).origin;
    var Qt = Vt(1188);

    function lt() {
      const tt = (0, mt.B)();
      return (0, qt.useEffect)((() => {
        const et = Dt.currentUrl.getSearchParam("code");
        Dt.currentUrl.removeSearchParam("code"), null === et && (console.error("No authorization code found in the URL"), window.close());
        const Vt = {
          type: `oauth_authentication_${tt.providerName}`,
          code: et
        };
        for (const tt of (qt = window.location.origin) === Xt ? [qt, `https://${Ht.e}`] : [qt]) {
          var Ot;
          null === (Ot = window.opener) || void 0 === Ot || Ot.postMessage(Vt, tt)
        }
        var qt;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, Qt.jsx)("div", {
        className: "AuthCallback",
        children: (0, Qt.jsx)(Ot.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);