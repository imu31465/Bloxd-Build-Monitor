export const id = 351;
export const ids = [351];
export const modules = {
  60666: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      applyLightFoOffset: () => gv,
      getFloatingOriginOffset: () => Sv,
      lightFoVersion: () => ev,
      wrapRenderableForFO: () => pv
    });
    var hv = Pv(41037);

    function Sv(vv) {
      const zv = vv.camera;
      if (!zv) return {
        x: 0,
        y: 0,
        z: 0
      };
      const Pv = zv.worldMatrix;
      return {
        x: Pv[12],
        y: Pv[13],
        z: Pv[14]
      }
    }

    function ev(vv) {
      return vv.camera ? vv.camera.worldMatrixVersion : 0
    }

    function gv(vv, zv) {
      const Pv = zv.camera?.worldMatrix;
      if (!Pv) return;
      const Sv = Pv[12],
        ev = Pv[13],
        gv = Pv[14];
      let pv = 0;
      for (const dv of zv.lights) {
        if (pv >= hv.c) break;
        if (!dv._writeLightUbo) continue;
        const zv = 4 + 16 * pv,
          Pv = vv[zv + 3];
        if (0 === Pv || 2 === Pv) {
          const Pv = dv.worldMatrix;
          vv[zv] = Pv[12] - Sv, vv[zv + 1] = Pv[13] - ev, vv[zv + 2] = Pv[14] - gv
        }
        pv++
      }
    }

    function pv(vv, zv, Pv) {
      let hv = -1;
      return () => {
        const Sv = zv.camera ? zv.camera.worldMatrixVersion : -1;
        Sv !== hv && (Pv(), hv = Sv), vv()
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);