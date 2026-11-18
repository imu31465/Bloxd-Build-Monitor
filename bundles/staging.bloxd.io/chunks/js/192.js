export const id = 192;
export const ids = [192];
export const modules = {
  35414: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      reportCappedWasmFailure: () => XJ,
      reportWasmFailure: () => eJ
    });
    var FJ = ZJ(2710);
    const UJ = FJ.d - 4;

    function eJ(JJ, cJ, ZJ) {
      (0, FJ.h)(JJ, cJ, ZJ, !1)
    }

    function XJ(JJ, cJ, ZJ) {
      (0, FJ.h)(JJ, cJ, ZJ, !1, UJ)
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);