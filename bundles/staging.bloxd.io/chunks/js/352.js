export const id = 352;
export const ids = [352];
export const modules = {
  60673: (vv, zv, Pv) => {
    function hv(vv, zv, Pv, hv, Sv, ev, gv) {
      const pv = zv,
        dv = hv,
        Nv = Pv;
      vv[Nv + 0] = pv[dv + 0], vv[Nv + 1] = pv[dv + 1], vv[Nv + 2] = pv[dv + 2], vv[Nv + 3] = pv[dv + 3], vv[Nv + 4] = pv[dv + 4], vv[Nv + 5] = pv[dv + 5], vv[Nv + 6] = pv[dv + 6], vv[Nv + 7] = pv[dv + 7], vv[Nv + 8] = pv[dv + 8], vv[Nv + 9] = pv[dv + 9], vv[Nv + 10] = pv[dv + 10], vv[Nv + 11] = pv[dv + 11], vv[Nv + 12] = pv[dv + 12] - Sv, vv[Nv + 13] = pv[dv + 13] - ev, vv[Nv + 14] = pv[dv + 14] - gv, vv[Nv + 15] = pv[dv + 15]
    }

    function Sv(vv) {
      return (zv, Pv, Sv, ev) => {
        const gv = vv.camera;
        if (!gv) return void hv(zv, Pv, Sv, ev, 0, 0, 0);
        const pv = gv.worldMatrix;
        hv(zv, Pv, Sv, ev, pv[12], pv[13], pv[14])
      }
    }
    Pv.r(zv), Pv.d(zv, {
      makePackMeshWorld: () => Sv,
      packMat4IntoF32WithOffset: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);