export const id = 359;
export const ids = [359];
export const modules = {
  61359: (kk, Fk, Ik) => {
    function Xk(kk, Fk, Ik, Xk, Tk, ik, yk) {
      const lk = Fk,
        ak = Xk,
        qk = Ik;
      kk[qk + 0] = lk[ak + 0], kk[qk + 1] = lk[ak + 1], kk[qk + 2] = lk[ak + 2], kk[qk + 3] = lk[ak + 3], kk[qk + 4] = lk[ak + 4], kk[qk + 5] = lk[ak + 5], kk[qk + 6] = lk[ak + 6], kk[qk + 7] = lk[ak + 7], kk[qk + 8] = lk[ak + 8], kk[qk + 9] = lk[ak + 9], kk[qk + 10] = lk[ak + 10], kk[qk + 11] = lk[ak + 11], kk[qk + 12] = lk[ak + 12] - Tk, kk[qk + 13] = lk[ak + 13] - ik, kk[qk + 14] = lk[ak + 14] - yk, kk[qk + 15] = lk[ak + 15]
    }

    function Tk(kk) {
      return (Fk, Ik, Tk, ik) => {
        const yk = kk.camera;
        if (!yk) return void Xk(Fk, Ik, Tk, ik, 0, 0, 0);
        const lk = yk.worldMatrix;
        Xk(Fk, Ik, Tk, ik, lk[12], lk[13], lk[14])
      }
    }
    Ik.r(Fk), Ik.d(Fk, {
      makePackMeshWorld: () => Tk,
      packMat4IntoF32WithOffset: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);