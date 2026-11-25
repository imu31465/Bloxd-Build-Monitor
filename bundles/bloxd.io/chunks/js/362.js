export const id = 362;
export const ids = [362];
export const modules = {
  61600: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      applyLightFoOffset: () => mt,
      getFloatingOriginOffset: () => qt,
      lightFoVersion: () => Dt,
      wrapRenderableForFO: () => dt
    });
    var Ot = Vt(41988);

    function qt(tt) {
      const et = tt.camera;
      if (!et) return {
        x: 0,
        y: 0,
        z: 0
      };
      const Vt = et.worldMatrix;
      return {
        x: Vt[12],
        y: Vt[13],
        z: Vt[14]
      }
    }

    function Dt(tt) {
      return tt.camera ? tt.camera.worldMatrixVersion : 0
    }

    function mt(tt, et) {
      const Vt = et.camera?.worldMatrix;
      if (!Vt) return;
      const qt = Vt[12],
        Dt = Vt[13],
        mt = Vt[14];
      let dt = 0;
      for (const jt of et.lights) {
        if (dt >= Ot.e) break;
        if (!jt._writeLightUbo) continue;
        const et = 4 + 16 * dt,
          Vt = tt[et + 3];
        if (0 === Vt || 2 === Vt) {
          const Vt = jt.worldMatrix;
          tt[et] = Vt[12] - qt, tt[et + 1] = Vt[13] - Dt, tt[et + 2] = Vt[14] - mt
        }
        dt++
      }
    }

    function dt(tt, et, Vt) {
      let Ot = -1;
      return () => {
        const qt = et.camera ? et.camera.worldMatrixVersion : -1;
        qt !== Ot && (Vt(), Ot = qt), tt()
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);