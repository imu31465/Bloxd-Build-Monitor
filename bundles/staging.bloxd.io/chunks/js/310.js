export const id = 310;
export const ids = [310];
export const modules = {
  43012: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      blankPhotoCode: () => hd,
      reportBlankPhoto: () => vd
    });
    var Wd = md(1916),
      Fd = md(1361),
      Rd = md(107),
      Xd = md(333),
      Kd = md(5064);

    function hd(dd, Od, md, Wd, Fd) {
      return `${dd}-${Od}-${null===md?"noloss":md>=Wd?"loss_photo":`loss_${(0,Kd.e)(Wd-md)}`}-${Fd}`
    }

    function vd(dd, Od, md, Kd) {
      var vd, Qd;
      const td = (0, Rd.getOperatingSystem)(),
        od = "ios" === td ? `ios_${(0,Xd.d)()}` : td,
        Nd = hd(null !== (vd = null === (Qd = (0, Fd.V)().gameRender()) || void 0 === Qd ? void 0 : Qd.renderer) && void 0 !== vd ? vd : "unknown", od, Kd, md, Od);
      (0, Wd.reportClientError)("photo_blank", new Error(`Screenshot mode's photo came out blank ${dd} times on ${(0,Rd.getBrowserName)()}, then ${Od}`), Nd)
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);