export const id = 350;
export const ids = [350];
export const modules = {
  61088: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      applyLightFoOffset: () => mu,
      getFloatingOriginOffset: () => Ku,
      lightFoVersion: () => Qu,
      wrapRenderableForFO: () => Ju
    });
    var Eu = yu(41317);

    function Ku(uu) {
      const Ru = uu.camera;
      if (!Ru) return {
        x: 0,
        y: 0,
        z: 0
      };
      const yu = Ru.worldMatrix;
      return {
        x: yu[12],
        y: yu[13],
        z: yu[14]
      }
    }

    function Qu(uu) {
      return uu.camera ? uu.camera.worldMatrixVersion : 0
    }

    function mu(uu, Ru) {
      const yu = Ru.camera?.worldMatrix;
      if (!yu) return;
      const Ku = yu[12],
        Qu = yu[13],
        mu = yu[14];
      let Ju = 0;
      for (const Nu of Ru.lights) {
        if (Ju >= Eu.e) break;
        if (!Nu._writeLightUbo) continue;
        const Ru = 4 + 16 * Ju,
          yu = uu[Ru + 3];
        if (0 === yu || 2 === yu) {
          const yu = Nu.worldMatrix;
          uu[Ru] = yu[12] - Ku, uu[Ru + 1] = yu[13] - Qu, uu[Ru + 2] = yu[14] - mu
        }
        Ju++
      }
    }

    function Ju(uu, Ru, yu) {
      let Eu = -1;
      return () => {
        const Ku = Ru.camera ? Ru.camera.worldMatrixVersion : -1;
        Ku !== Eu && (yu(), Eu = Ku), uu()
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);