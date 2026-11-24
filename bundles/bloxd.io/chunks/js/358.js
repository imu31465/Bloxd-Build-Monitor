export const id = 358;
export const ids = [358];
export const modules = {
  61416: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      applyLightFoOffset: () => xm,
      getFloatingOriginOffset: () => Am,
      lightFoVersion: () => am,
      wrapRenderableForFO: () => wm
    });
    var hm = fm(41745);

    function Am(mm) {
      const Tm = mm.camera;
      if (!Tm) return {
        x: 0,
        y: 0,
        z: 0
      };
      const fm = Tm.worldMatrix;
      return {
        x: fm[12],
        y: fm[13],
        z: fm[14]
      }
    }

    function am(mm) {
      return mm.camera ? mm.camera.worldMatrixVersion : 0
    }

    function xm(mm, Tm) {
      const fm = Tm.camera?.worldMatrix;
      if (!fm) return;
      const Am = fm[12],
        am = fm[13],
        xm = fm[14];
      let wm = 0;
      for (const Dm of Tm.lights) {
        if (wm >= hm.e) break;
        if (!Dm._writeLightUbo) continue;
        const Tm = 4 + 16 * wm,
          fm = mm[Tm + 3];
        if (0 === fm || 2 === fm) {
          const fm = Dm.worldMatrix;
          mm[Tm] = fm[12] - Am, mm[Tm + 1] = fm[13] - am, mm[Tm + 2] = fm[14] - xm
        }
        wm++
      }
    }

    function wm(mm, Tm, fm) {
      let hm = -1;
      return () => {
        const Am = Tm.camera ? Tm.camera.worldMatrixVersion : -1;
        Am !== hm && (fm(), hm = Am), mm()
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);