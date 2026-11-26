export const id = 666;
export const ids = [666];
export const modules = {
  63963: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      applyLightFoOffset: () => oB,
      getFloatingOriginOffset: () => DB,
      lightFoVersion: () => QB,
      wrapRenderableForFO: () => jB
    });
    var YB = GB(44858);

    function DB(BB) {
      const OB = BB.camera;
      if (!OB) return {
        x: 0,
        y: 0,
        z: 0
      };
      const GB = OB.worldMatrix;
      return {
        x: GB[12],
        y: GB[13],
        z: GB[14]
      }
    }

    function QB(BB) {
      return BB.camera ? BB.camera.worldMatrixVersion : 0
    }

    function oB(BB, OB) {
      const GB = OB.camera?.worldMatrix;
      if (!GB) return;
      const DB = GB[12],
        QB = GB[13],
        oB = GB[14];
      let jB = 0;
      for (const yB of OB.lights) {
        if (jB >= YB.e) break;
        if (!yB._writeLightUbo) continue;
        const OB = 4 + 16 * jB,
          GB = BB[OB + 3];
        if (0 === GB || 2 === GB) {
          const GB = yB.worldMatrix;
          BB[OB] = GB[12] - DB, BB[OB + 1] = GB[13] - QB, BB[OB + 2] = GB[14] - oB
        }
        jB++
      }
    }

    function jB(BB, OB, GB) {
      let YB = -1;
      return () => {
        const DB = OB.camera ? OB.camera.worldMatrixVersion : -1;
        DB !== YB && (GB(), YB = DB), BB()
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);