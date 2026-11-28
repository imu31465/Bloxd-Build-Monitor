export const id = 310;
export const ids = [310];
export const modules = {
  42736: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      blankPhotoCode: () => lb,
      reportBlankPhoto: () => Lb
    });
    var eb = Mb(1987),
      Hb = Mb(1391),
      pb = Mb(110),
      Vb = Mb(330),
      gb = Mb(5243);

    function lb(bb, wb, Mb, eb, Hb) {
      return `${bb}-${wb}-${null===Mb?"noloss":Mb>=eb?"loss_photo":`loss_${(0,gb.i)(eb-Mb)}`}-${Hb}`
    }

    function Lb(bb, wb, Mb, gb) {
      var Lb, Ib;
      const Ob = (0, pb.getOperatingSystem)(),
        Ub = "ios" === Ob ? `ios_${(0,Vb.c)()}` : Ob,
        tb = lb(null !== (Lb = null === (Ib = (0, Hb.K)().gameRender()) || void 0 === Ib ? void 0 : Ib.renderer) && void 0 !== Lb ? Lb : "unknown", Ub, gb, Mb, wb);
      (0, eb.reportClientError)("photo_blank", new Error(`Screenshot mode's photo came out blank ${bb} times on ${(0,pb.getBrowserName)()}, then ${wb}`), tb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);