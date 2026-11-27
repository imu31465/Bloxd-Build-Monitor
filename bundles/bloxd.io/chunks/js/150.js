export const id = 150;
export const ids = [150];
export const modules = {
  7514: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      default: () => mr
    });
    var Zr = Qr(1444),
      Wr = Qr(72),
      ar = Qr(120),
      jr = Qr(1653),
      Ir = Qr(1281),
      fr = Qr(360),
      Er = Qr(712);
    const pr = new URL(Ir.q[fr.e.PRODUCTION]).origin;
    var xr = Qr(1338);

    function mr() {
      const rr = (0, jr.w)();
      return (0, Wr.useEffect)((() => {
        const Sr = ar.currentUrl.getSearchParam("code");
        ar.currentUrl.removeSearchParam("code"), null === Sr && (console.error("No authorization code found in the URL"), window.close());
        const Qr = {
          type: `oauth_authentication_${rr.providerName}`,
          code: Sr
        };
        for (const rr of (Wr = window.location.origin) === pr ? [Wr, `https://${Er.e}`] : [Wr]) {
          var Zr;
          null === (Zr = window.opener) || void 0 === Zr || Zr.postMessage(Qr, rr)
        }
        var Wr;
        setTimeout((() => {
          window.close()
        }), 1e3)
      })), (0, xr.jsx)("div", {
        className: "AuthCallback",
        children: (0, xr.jsx)(Zr.c, {
          showFace: !0,
          loading: !0
        })
      })
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);