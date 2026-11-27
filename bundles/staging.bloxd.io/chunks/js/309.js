export const id = 309;
export const ids = [309];
export const modules = {
  42594: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      blankPhotoCode: () => iR,
      reportBlankPhoto: () => fR
    });
    var yR = GR(1972),
      tR = GR(1397),
      uR = GR(103),
      ZR = GR(304),
      qR = GR(5201);

    function iR(RR, JR, GR, yR, tR) {
      return `${RR}-${JR}-${null===GR?"noloss":GR>=yR?"loss_photo":`loss_${(0,qR.i)(yR-GR)}`}-${tR}`
    }

    function fR(RR, JR, GR, qR) {
      var fR, VR;
      const KR = (0, uR.getOperatingSystem)(),
        wR = "ios" === KR ? `ios_${(0,ZR.d)()}` : KR,
        rR = iR(null !== (fR = null === (VR = (0, tR.J)().gameRender()) || void 0 === VR ? void 0 : VR.renderer) && void 0 !== fR ? fR : "unknown", wR, qR, GR, JR);
      (0, yR.reportClientError)("photo_blank", new Error(`Screenshot mode's photo came out blank ${RR} times on ${(0,uR.getBrowserName)()}, then ${JR}`), rR)
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);