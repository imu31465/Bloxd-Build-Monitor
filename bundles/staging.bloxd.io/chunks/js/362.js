export const id = 362;
export const ids = [362];
export const modules = {
  61581: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      applyLightFoOffset: () => Xu,
      getFloatingOriginOffset: () => Uu,
      lightFoVersion: () => Zu,
      wrapRenderableForFO: () => lu
    });
    var su = ju(41993);

    function Uu(uu) {
      const Eu = uu.camera;
      if (!Eu) return {
        x: 0,
        y: 0,
        z: 0
      };
      const ju = Eu.worldMatrix;
      return {
        x: ju[12],
        y: ju[13],
        z: ju[14]
      }
    }

    function Zu(uu) {
      return uu.camera ? uu.camera.worldMatrixVersion : 0
    }

    function Xu(uu, Eu) {
      const ju = Eu.camera?.worldMatrix;
      if (!ju) return;
      const Uu = ju[12],
        Zu = ju[13],
        Xu = ju[14];
      let lu = 0;
      for (const qu of Eu.lights) {
        if (lu >= su.c) break;
        if (!qu._writeLightUbo) continue;
        const Eu = 4 + 16 * lu,
          ju = uu[Eu + 3];
        if (0 === ju || 2 === ju) {
          const ju = qu.worldMatrix;
          uu[Eu] = ju[12] - Uu, uu[Eu + 1] = ju[13] - Zu, uu[Eu + 2] = ju[14] - Xu
        }
        lu++
      }
    }

    function lu(uu, Eu, ju) {
      let su = -1;
      return () => {
        const Uu = Eu.camera ? Eu.camera.worldMatrixVersion : -1;
        Uu !== su && (ju(), su = Uu), uu()
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);