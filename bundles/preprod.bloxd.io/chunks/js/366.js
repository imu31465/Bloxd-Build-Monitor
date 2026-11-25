export const id = 366;
export const ids = [366];
export const modules = {
  61618: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      applyLightFoOffset: () => zQ,
      getFloatingOriginOffset: () => qQ,
      lightFoVersion: () => TQ,
      wrapRenderableForFO: () => sQ
    });
    var wQ = XQ(41977);

    function qQ(QQ) {
      const WQ = QQ.camera;
      if (!WQ) return {
        x: 0,
        y: 0,
        z: 0
      };
      const XQ = WQ.worldMatrix;
      return {
        x: XQ[12],
        y: XQ[13],
        z: XQ[14]
      }
    }

    function TQ(QQ) {
      return QQ.camera ? QQ.camera.worldMatrixVersion : 0
    }

    function zQ(QQ, WQ) {
      const XQ = WQ.camera?.worldMatrix;
      if (!XQ) return;
      const qQ = XQ[12],
        TQ = XQ[13],
        zQ = XQ[14];
      let sQ = 0;
      for (const FQ of WQ.lights) {
        if (sQ >= wQ.c) break;
        if (!FQ._writeLightUbo) continue;
        const WQ = 4 + 16 * sQ,
          XQ = QQ[WQ + 3];
        if (0 === XQ || 2 === XQ) {
          const XQ = FQ.worldMatrix;
          QQ[WQ] = XQ[12] - qQ, QQ[WQ + 1] = XQ[13] - TQ, QQ[WQ + 2] = XQ[14] - zQ
        }
        sQ++
      }
    }

    function sQ(QQ, WQ, XQ) {
      let wQ = -1;
      return () => {
        const qQ = WQ.camera ? WQ.camera.worldMatrixVersion : -1;
        qQ !== wQ && (XQ(), wQ = qQ), QQ()
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);