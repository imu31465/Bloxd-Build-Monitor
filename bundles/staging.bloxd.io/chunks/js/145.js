export const id = 145;
export const ids = [145];
export const modules = {
  8191: (TT, UT, mT) => {
    mT.d(UT, {
      encodeBinaryMessageWithMetricsCookies: () => zT
    });
    var WT = mT(3841);

    function zT(TT) {
      return WT.m.toBuffer(TT)
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);