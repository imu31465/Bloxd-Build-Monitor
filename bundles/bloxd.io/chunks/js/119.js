export const id = 119;
export const ids = [119];
export const modules = {
  6261: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      default: () => dz
    });
    var Ez = bz(1305),
      nz = bz(56),
      iz = bz(104),
      lz = bz(1490),
      Mz = bz(1219),
      tz = bz(316),
      Hz = bz(606);
    const Oz = new URL(Mz.n[tz.e.PRODUCTION]).origin;
    var pz = bz(1089);

    function dz() {
      const zz = (0, lz.D)();
      return (0, nz.useEffect)((() => {
        const uz = iz.currentUrl.getSearchParam("code");
        iz.currentUrl.removeSearchParam("code"), null === uz && (console.error("No authorization code found in the URL"), window.close());
        const bz = {
          type: `oauth_authentication_${zz.providerName}`,
          code: uz
        };
        for (const zz of (nz = window.location.origin) === Oz ? [nz, `https://${Hz.e}`] : [nz]) {
          var Ez;
          null === (Ez = window.opener) || void 0 === Ez || Ez.postMessage(bz, zz)
        }
        var nz;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, pz.jsx)("div", {
        className: "AuthCallback",
        children: (0, pz.jsx)(Ez.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);