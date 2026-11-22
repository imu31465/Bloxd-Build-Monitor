export const id = 358;
export const ids = [358];
export const modules = {
  60760: (kk, ek, ik) => {
    function Dk(kk, ek, ik, Dk, fk, Sk, bk) {
      const rk = ek,
        Pk = Dk,
        mk = ik;
      kk[mk + 0] = rk[Pk + 0], kk[mk + 1] = rk[Pk + 1], kk[mk + 2] = rk[Pk + 2], kk[mk + 3] = rk[Pk + 3], kk[mk + 4] = rk[Pk + 4], kk[mk + 5] = rk[Pk + 5], kk[mk + 6] = rk[Pk + 6], kk[mk + 7] = rk[Pk + 7], kk[mk + 8] = rk[Pk + 8], kk[mk + 9] = rk[Pk + 9], kk[mk + 10] = rk[Pk + 10], kk[mk + 11] = rk[Pk + 11], kk[mk + 12] = rk[Pk + 12] - fk, kk[mk + 13] = rk[Pk + 13] - Sk, kk[mk + 14] = rk[Pk + 14] - bk, kk[mk + 15] = rk[Pk + 15]
    }

    function fk(kk) {
      return (ek, ik, fk, Sk) => {
        const bk = kk.camera;
        if (!bk) return void Dk(ek, ik, fk, Sk, 0, 0, 0);
        const rk = bk.worldMatrix;
        Dk(ek, ik, fk, Sk, rk[12], rk[13], rk[14])
      }
    }
    ik.r(ek), ik.d(ek, {
      makePackMeshWorld: () => fk,
      packMat4IntoF32WithOffset: () => Dk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);