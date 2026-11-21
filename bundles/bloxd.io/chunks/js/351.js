export const id = 351;
export const ids = [351];
export const modules = {
  60719: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      applyLightFoOffset: () => DQ,
      getFloatingOriginOffset: () => qQ,
      lightFoVersion: () => oQ,
      wrapRenderableForFO: () => kQ
    });
    var LQ = wQ(41137);

    function qQ(QQ) {
      const FQ = QQ.camera;
      if (!FQ) return {
        x: 0,
        y: 0,
        z: 0
      };
      const wQ = FQ.worldMatrix;
      return {
        x: wQ[12],
        y: wQ[13],
        z: wQ[14]
      }
    }

    function oQ(QQ) {
      return QQ.camera ? QQ.camera.worldMatrixVersion : 0
    }

    function DQ(QQ, FQ) {
      const wQ = FQ.camera?.worldMatrix;
      if (!wQ) return;
      const qQ = wQ[12],
        oQ = wQ[13],
        DQ = wQ[14];
      let kQ = 0;
      for (const vQ of FQ.lights) {
        if (kQ >= LQ.c) break;
        if (!vQ._writeLightUbo) continue;
        const FQ = 4 + 16 * kQ,
          wQ = QQ[FQ + 3];
        if (0 === wQ || 2 === wQ) {
          const wQ = vQ.worldMatrix;
          QQ[FQ] = wQ[12] - qQ, QQ[FQ + 1] = wQ[13] - oQ, QQ[FQ + 2] = wQ[14] - DQ
        }
        kQ++
      }
    }

    function kQ(QQ, FQ, wQ) {
      let LQ = -1;
      return () => {
        const qQ = FQ.camera ? FQ.camera.worldMatrixVersion : -1;
        qQ !== LQ && (wQ(), LQ = qQ), QQ()
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);