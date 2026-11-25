export const id = 363;
export const ids = [363];
export const modules = {
  61609: (tt, et, Vt) => {
    function Ot(tt, et, Vt, Ot, qt, Dt, mt) {
      const dt = et,
        jt = Ot,
        Ht = Vt;
      tt[Ht + 0] = dt[jt + 0], tt[Ht + 1] = dt[jt + 1], tt[Ht + 2] = dt[jt + 2], tt[Ht + 3] = dt[jt + 3], tt[Ht + 4] = dt[jt + 4], tt[Ht + 5] = dt[jt + 5], tt[Ht + 6] = dt[jt + 6], tt[Ht + 7] = dt[jt + 7], tt[Ht + 8] = dt[jt + 8], tt[Ht + 9] = dt[jt + 9], tt[Ht + 10] = dt[jt + 10], tt[Ht + 11] = dt[jt + 11], tt[Ht + 12] = dt[jt + 12] - qt, tt[Ht + 13] = dt[jt + 13] - Dt, tt[Ht + 14] = dt[jt + 14] - mt, tt[Ht + 15] = dt[jt + 15]
    }

    function qt(tt) {
      return (et, Vt, qt, Dt) => {
        const mt = tt.camera;
        if (!mt) return void Ot(et, Vt, qt, Dt, 0, 0, 0);
        const dt = mt.worldMatrix;
        Ot(et, Vt, qt, Dt, dt[12], dt[13], dt[14])
      }
    }
    Vt.r(et), Vt.d(et, {
      makePackMeshWorld: () => qt,
      packMat4IntoF32WithOffset: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);