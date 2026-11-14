export const id = 190;
export const ids = [190];
export const modules = {
  35024: (cB, Bc, nc) => {
    nc.d(Bc, {
      reportCappedWasmFailure: () => uc,
      reportWasmFailure: () => rB
    });
    var Vc = nc(2399);
    const Ic = Vc.d - 4;

    function rB(cB, Bc, nc) {
      (0, Vc.h)(cB, Bc, nc, !1)
    }

    function uc(cB, Bc, nc) {
      (0, Vc.h)(cB, Bc, nc, !1, Ic)
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);