export const id = 120;
export const ids = [120];
export const modules = {
  6404: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      default: () => ld
    });
    var pd = kd(1359),
      Nd = kd(56),
      Wd = kd(103),
      Pd = kd(1557),
      Zd = kd(1250),
      gd = kd(300),
      Cd = kd(626);
    const Kd = new URL(Zd.r[gd.e.PRODUCTION]).origin;
    var od = kd(1103);

    function ld() {
      const dd = (0, Pd.y)();
      return (0, Nd.useEffect)((() => {
        const Jd = Wd.currentUrl.getSearchParam("code");
        Wd.currentUrl.removeSearchParam("code"), null === Jd && (console.error("No authorization code found in the URL"), window.close());
        const kd = {
          type: `oauth_authentication_${dd.providerName}`,
          code: Jd
        };
        for (const dd of (Nd = window.location.origin) === Kd ? [Nd, `https://${Cd.e}`] : [Nd]) {
          var pd;
          null === (pd = window.opener) || void 0 === pd || pd.postMessage(kd, dd)
        }
        var Nd;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, od.jsx)("div", {
        className: "AuthCallback",
        children: (0, od.jsx)(pd.b, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);