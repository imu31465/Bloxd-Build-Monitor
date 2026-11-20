export const id = 119;
export const ids = [119];
export const modules = {
  6116: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      default: () => Nz
    });
    var Fz = sz(1306),
      Wz = sz(65),
      Xz = sz(116),
      Oz = sz(1493),
      oz = sz(1215),
      vz = sz(308),
      Uz = sz(601);
    const Kz = new URL(oz.p[vz.b.PRODUCTION]).origin;
    var uz = sz(1087);

    function Nz() {
      const zz = (0, Oz.C)();
      return (0, Wz.useEffect)((() => {
        const tz = Xz.currentUrl.getSearchParam("code");
        Xz.currentUrl.removeSearchParam("code"), null === tz && (console.error("No authorization code found in the URL"), window.close());
        const sz = {
          type: `oauth_authentication_${zz.providerName}`,
          code: tz
        };
        for (const zz of (Wz = window.location.origin) === Kz ? [Wz, `https://${Uz.c}`] : [Wz]) {
          var Fz;
          null === (Fz = window.opener) || void 0 === Fz || Fz.postMessage(sz, zz)
        }
        var Wz;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, uz.jsx)("div", {
        className: "AuthCallback",
        children: (0, uz.jsx)(Fz.d, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);