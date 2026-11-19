export const id = 207;
export const ids = [207];
export const modules = {
  35777: (zz, uz, bz) => {
    bz.d(uz, {
      reportCappedWasmFailure: () => lz,
      reportWasmFailure: () => iz
    });
    var Ez = bz(2982);
    const nz = Ez.b - 4;

    function iz(zz, uz, bz) {
      (0, Ez.f)(zz, uz, bz, !1)
    }

    function lz(zz, uz, bz) {
      (0, Ez.f)(zz, uz, bz, !1, nz)
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);