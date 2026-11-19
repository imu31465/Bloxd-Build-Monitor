export const id = 202;
export const ids = [202];
export const modules = {
  35731: (YY, rY, DY) => {
    DY.d(rY, {
      reportCappedWasmFailure: () => RY,
      reportWasmFailure: () => IY
    });
    var FY = DY(2817);
    const AY = FY.b - 4;

    function IY(YY, rY, DY) {
      (0, FY.e)(YY, rY, DY, !1)
    }

    function RY(YY, rY, DY) {
      (0, FY.e)(YY, rY, DY, !1, AY)
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);