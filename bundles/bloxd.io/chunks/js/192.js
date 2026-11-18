export const id = 192;
export const ids = [192];
export const modules = {
  35319: (BB, TB, dB) => {
    dB.d(TB, {
      reportCappedWasmFailure: () => lB,
      reportWasmFailure: () => pB
    });
    var VB = dB(2702);
    const yB = VB.e - 4;

    function pB(BB, TB, dB) {
      (0, VB.i)(BB, TB, dB, !1)
    }

    function lB(BB, TB, dB) {
      (0, VB.i)(BB, TB, dB, !1, yB)
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);