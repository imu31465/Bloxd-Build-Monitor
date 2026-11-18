export const id = 191;
export const ids = [191];
export const modules = {
  35103: (yb, bb, Wy) => {
    Wy.d(bb, {
      reportCappedWasmFailure: () => Zy,
      reportWasmFailure: () => fy
    });
    var Uy = Wy(2539);
    const hy = Uy.b - 4;

    function fy(yb, bb, Wy) {
      (0, Uy.c)(yb, bb, Wy, !1)
    }

    function Zy(yb, bb, Wy) {
      (0, Uy.c)(yb, bb, Wy, !1, hy)
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);