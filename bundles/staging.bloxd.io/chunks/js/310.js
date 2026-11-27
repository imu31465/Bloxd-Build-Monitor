export const id = 310;
export const ids = [310];
export const modules = {
  42928: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      blankPhotoCode: () => fr,
      reportBlankPhoto: () => Er
    });
    var Zr = Qr(1912),
      Wr = Qr(1364),
      ar = Qr(109),
      jr = Qr(317),
      Ir = Qr(5126);

    function fr(rr, Sr, Qr, Zr, Wr) {
      return `${rr}-${Sr}-${null===Qr?"noloss":Qr>=Zr?"loss_photo":`loss_${(0,Ir.h)(Zr-Qr)}`}-${Wr}`
    }

    function Er(rr, Sr, Qr, Ir) {
      var Er, pr;
      const xr = (0, ar.getOperatingSystem)(),
        mr = "ios" === xr ? `ios_${(0,jr.c)()}` : xr,
        Nr = fr(null !== (Er = null === (pr = (0, Wr.U)().gameRender()) || void 0 === pr ? void 0 : pr.renderer) && void 0 !== Er ? Er : "unknown", mr, Ir, Qr, Sr);
      (0, Zr.reportClientError)("photo_blank", new Error(`Screenshot mode's photo came out blank ${rr} times on ${(0,ar.getBrowserName)()}, then ${Sr}`), Nr)
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);