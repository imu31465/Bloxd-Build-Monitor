export const id = 351;
export const ids = [351];
export const modules = {
  61207: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      applyLightFoOffset: () => mq,
      getFloatingOriginOffset: () => lq,
      lightFoVersion: () => Oq,
      wrapRenderableForFO: () => xq
    });
    var Yq = gq(41492);

    function lq(qq) {
      const Eq = qq.camera;
      if (!Eq) return {
        x: 0,
        y: 0,
        z: 0
      };
      const gq = Eq.worldMatrix;
      return {
        x: gq[12],
        y: gq[13],
        z: gq[14]
      }
    }

    function Oq(qq) {
      return qq.camera ? qq.camera.worldMatrixVersion : 0
    }

    function mq(qq, Eq) {
      const gq = Eq.camera?.worldMatrix;
      if (!gq) return;
      const lq = gq[12],
        Oq = gq[13],
        mq = gq[14];
      let xq = 0;
      for (const Aq of Eq.lights) {
        if (xq >= Yq.e) break;
        if (!Aq._writeLightUbo) continue;
        const Eq = 4 + 16 * xq,
          gq = qq[Eq + 3];
        if (0 === gq || 2 === gq) {
          const gq = Aq.worldMatrix;
          qq[Eq] = gq[12] - lq, qq[Eq + 1] = gq[13] - Oq, qq[Eq + 2] = gq[14] - mq
        }
        xq++
      }
    }

    function xq(qq, Eq, gq) {
      let Yq = -1;
      return () => {
        const lq = Eq.camera ? Eq.camera.worldMatrixVersion : -1;
        lq !== Yq && (gq(), Yq = lq), qq()
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);