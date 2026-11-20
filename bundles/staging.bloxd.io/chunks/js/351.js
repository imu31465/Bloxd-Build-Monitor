export const id = 351;
export const ids = [351];
export const modules = {
  60995: (kk, Fk, Bk) => {
    function Rk(kk, Fk, Bk, Rk, tk, ak, Xk) {
      const bk = Fk,
        wk = Rk,
        dk = Bk;
      kk[dk + 0] = bk[wk + 0], kk[dk + 1] = bk[wk + 1], kk[dk + 2] = bk[wk + 2], kk[dk + 3] = bk[wk + 3], kk[dk + 4] = bk[wk + 4], kk[dk + 5] = bk[wk + 5], kk[dk + 6] = bk[wk + 6], kk[dk + 7] = bk[wk + 7], kk[dk + 8] = bk[wk + 8], kk[dk + 9] = bk[wk + 9], kk[dk + 10] = bk[wk + 10], kk[dk + 11] = bk[wk + 11], kk[dk + 12] = bk[wk + 12] - tk, kk[dk + 13] = bk[wk + 13] - ak, kk[dk + 14] = bk[wk + 14] - Xk, kk[dk + 15] = bk[wk + 15]
    }

    function tk(kk) {
      return (Fk, Bk, tk, ak) => {
        const Xk = kk.camera;
        if (!Xk) return void Rk(Fk, Bk, tk, ak, 0, 0, 0);
        const bk = Xk.worldMatrix;
        Rk(Fk, Bk, tk, ak, bk[12], bk[13], bk[14])
      }
    }
    Bk.r(Fk), Bk.d(Fk, {
      makePackMeshWorld: () => tk,
      packMat4IntoF32WithOffset: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);