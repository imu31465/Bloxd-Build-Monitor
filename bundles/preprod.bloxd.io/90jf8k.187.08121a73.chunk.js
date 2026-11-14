export const id = 187;
export const ids = [187];
export const modules = {
  34886: (FF, WF, SF) => {
    SF.d(WF, {
      reportCappedWasmFailure: () => hF,
      reportWasmFailure: () => uF
    });
    var CF = SF(2418);
    const AF = CF.e - 4;

    function uF(FF, WF, SF) {
      (0, CF.h)(FF, WF, SF, !1)
    }

    function hF(FF, WF, SF) {
      (0, CF.h)(FF, WF, SF, !1, AF)
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);