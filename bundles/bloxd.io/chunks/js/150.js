export const id = 150;
export const ids = [150];
export const modules = {
  7503: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      default: () => od
    });
    var Wd = md(1436),
      Fd = md(66),
      Rd = md(118),
      Xd = md(1650),
      Kd = md(1289),
      hd = md(387),
      vd = md(732);
    const Qd = new URL(Kd.t[hd.b.PRODUCTION]).origin;
    var td = md(1341);

    function od() {
      const dd = (0, Xd.u)();
      return (0, Fd.useEffect)((() => {
        const Od = Rd.currentUrl.getSearchParam("code");
        Rd.currentUrl.removeSearchParam("code"), null === Od && (console.error("No authorization code found in the URL"), window.close());
        const md = {
          type: `oauth_authentication_${dd.providerName}`,
          code: Od
        };
        for (const dd of (Fd = window.location.origin) === Qd ? [Fd, `https://${vd.b}`] : [Fd]) {
          var Wd;
          null === (Wd = window.opener) || void 0 === Wd || Wd.postMessage(md, dd)
        }
        var Fd;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, td.jsx)("div", {
        className: "AuthCallback",
        children: (0, td.jsx)(Wd.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);