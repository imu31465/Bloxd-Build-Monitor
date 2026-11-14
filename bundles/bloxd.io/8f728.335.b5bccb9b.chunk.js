export const id = 335;
export const ids = [335];
export const modules = {
  59172: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      applyLightFoOffset: () => uc,
      getFloatingOriginOffset: () => Ic,
      lightFoVersion: () => rB,
      wrapRenderableForFO: () => sc
    });
    var Vc = nc(39686);

    function Ic(cB) {
      const Bc = cB.camera;
      if (!Bc) return {
        x: 0,
        y: 0,
        z: 0
      };
      const nc = Bc.worldMatrix;
      return {
        x: nc[12],
        y: nc[13],
        z: nc[14]
      }
    }

    function rB(cB) {
      return cB.camera ? cB.camera.worldMatrixVersion : 0
    }

    function uc(cB, Bc) {
      const nc = Bc.camera?.worldMatrix;
      if (!nc) return;
      const Ic = nc[12],
        rB = nc[13],
        uc = nc[14];
      let sc = 0;
      for (const Mc of Bc.lights) {
        if (sc >= Vc.b) break;
        if (!Mc._writeLightUbo) continue;
        const Bc = 4 + 16 * sc,
          nc = cB[Bc + 3];
        if (0 === nc || 2 === nc) {
          const nc = Mc.worldMatrix;
          cB[Bc] = nc[12] - Ic, cB[Bc + 1] = nc[13] - rB, cB[Bc + 2] = nc[14] - uc
        }
        sc++
      }
    }

    function sc(cB, Bc, nc) {
      let Vc = -1;
      return () => {
        const Ic = Bc.camera ? Bc.camera.worldMatrixVersion : -1;
        Ic !== Vc && (nc(), Vc = Ic), cB()
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);