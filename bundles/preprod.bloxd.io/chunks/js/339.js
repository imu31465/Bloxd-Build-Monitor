export const id = 339;
export const ids = [339];
export const modules = {
  59789: (yb, bb, Wy) => {
    function Uy(yb, bb, Wy, Uy, hy, fy, Zy) {
      const cb = bb,
        Py = Uy,
        oy = Wy;
      yb[oy + 0] = cb[Py + 0], yb[oy + 1] = cb[Py + 1], yb[oy + 2] = cb[Py + 2], yb[oy + 3] = cb[Py + 3], yb[oy + 4] = cb[Py + 4], yb[oy + 5] = cb[Py + 5], yb[oy + 6] = cb[Py + 6], yb[oy + 7] = cb[Py + 7], yb[oy + 8] = cb[Py + 8], yb[oy + 9] = cb[Py + 9], yb[oy + 10] = cb[Py + 10], yb[oy + 11] = cb[Py + 11], yb[oy + 12] = cb[Py + 12] - hy, yb[oy + 13] = cb[Py + 13] - fy, yb[oy + 14] = cb[Py + 14] - Zy, yb[oy + 15] = cb[Py + 15]
    }

    function hy(yb) {
      return (bb, Wy, hy, fy) => {
        const Zy = yb.camera;
        if (!Zy) return void Uy(bb, Wy, hy, fy, 0, 0, 0);
        const cb = Zy.worldMatrix;
        Uy(bb, Wy, hy, fy, cb[12], cb[13], cb[14])
      }
    }
    Wy.r(bb), Wy.d(bb, {
      makePackMeshWorld: () => hy,
      packMat4IntoF32WithOffset: () => Uy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);