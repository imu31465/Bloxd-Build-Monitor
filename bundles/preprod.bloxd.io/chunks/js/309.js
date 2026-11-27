export const id = 309;
export const ids = [309];
export const modules = {
  42551: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      blankPhotoCode: () => cW,
      reportBlankPhoto: () => wW
    });
    var mW = OW(1888),
      EW = OW(1301),
      NW = OW(100),
      PW = OW(274),
      LW = OW(5096);

    function cW(WW, iW, OW, mW, EW) {
      return `${WW}-${iW}-${null===OW?"noloss":OW>=mW?"loss_photo":`loss_${(0,LW.h)(mW-OW)}`}-${EW}`
    }

    function wW(WW, iW, OW, LW) {
      var wW, tW;
      const ZW = (0, NW.getOperatingSystem)(),
        xW = "ios" === ZW ? `ios_${(0,PW.d)()}` : ZW,
        lW = cW(null !== (wW = null === (tW = (0, EW.y)().gameRender()) || void 0 === tW ? void 0 : tW.renderer) && void 0 !== wW ? wW : "unknown", xW, LW, OW, iW);
      (0, mW.reportClientError)("photo_blank", new Error(`Screenshot mode's photo came out blank ${WW} times on ${(0,NW.getBrowserName)()}, then ${iW}`), lW)
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);