export const id = 663;
export const ids = [663];
export const modules = {
  64017: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      applyLightFoOffset: () => AU,
      getFloatingOriginOffset: () => yU,
      lightFoVersion: () => QU,
      wrapRenderableForFO: () => FU
    });
    var cU = zU(44423);

    function yU(UU) {
      const XU = UU.camera;
      if (!XU) return {
        x: 0,
        y: 0,
        z: 0
      };
      const zU = XU.worldMatrix;
      return {
        x: zU[12],
        y: zU[13],
        z: zU[14]
      }
    }

    function QU(UU) {
      return UU.camera ? UU.camera.worldMatrixVersion : 0
    }

    function AU(UU, XU) {
      const zU = XU.camera?.worldMatrix;
      if (!zU) return;
      const yU = zU[12],
        QU = zU[13],
        AU = zU[14];
      let FU = 0;
      for (const oU of XU.lights) {
        if (FU >= cU.b) break;
        if (!oU._writeLightUbo) continue;
        const XU = 4 + 16 * FU,
          zU = UU[XU + 3];
        if (0 === zU || 2 === zU) {
          const zU = oU.worldMatrix;
          UU[XU] = zU[12] - yU, UU[XU + 1] = zU[13] - QU, UU[XU + 2] = zU[14] - AU
        }
        FU++
      }
    }

    function FU(UU, XU, zU) {
      let cU = -1;
      return () => {
        const yU = XU.camera ? XU.camera.worldMatrixVersion : -1;
        yU !== cU && (zU(), cU = yU), UU()
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);