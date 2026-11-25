export const id = 367;
export const ids = [367];
export const modules = {
  61627: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
      const sQ = WQ,
        FQ = wQ,
        PQ = XQ;
      QQ[PQ + 0] = sQ[FQ + 0], QQ[PQ + 1] = sQ[FQ + 1], QQ[PQ + 2] = sQ[FQ + 2], QQ[PQ + 3] = sQ[FQ + 3], QQ[PQ + 4] = sQ[FQ + 4], QQ[PQ + 5] = sQ[FQ + 5], QQ[PQ + 6] = sQ[FQ + 6], QQ[PQ + 7] = sQ[FQ + 7], QQ[PQ + 8] = sQ[FQ + 8], QQ[PQ + 9] = sQ[FQ + 9], QQ[PQ + 10] = sQ[FQ + 10], QQ[PQ + 11] = sQ[FQ + 11], QQ[PQ + 12] = sQ[FQ + 12] - qQ, QQ[PQ + 13] = sQ[FQ + 13] - TQ, QQ[PQ + 14] = sQ[FQ + 14] - zQ, QQ[PQ + 15] = sQ[FQ + 15]
    }

    function qQ(QQ) {
      return (WQ, XQ, qQ, TQ) => {
        const zQ = QQ.camera;
        if (!zQ) return void wQ(WQ, XQ, qQ, TQ, 0, 0, 0);
        const sQ = zQ.worldMatrix;
        wQ(WQ, XQ, qQ, TQ, sQ[12], sQ[13], sQ[14])
      }
    }
    XQ.r(WQ), XQ.d(WQ, {
      makePackMeshWorld: () => qQ,
      packMat4IntoF32WithOffset: () => wQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);