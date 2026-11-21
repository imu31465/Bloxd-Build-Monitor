export const id = 352;
export const ids = [352];
export const modules = {
  60724: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
      const kQ = FQ,
        vQ = LQ,
        mQ = wQ;
      QQ[mQ + 0] = kQ[vQ + 0], QQ[mQ + 1] = kQ[vQ + 1], QQ[mQ + 2] = kQ[vQ + 2], QQ[mQ + 3] = kQ[vQ + 3], QQ[mQ + 4] = kQ[vQ + 4], QQ[mQ + 5] = kQ[vQ + 5], QQ[mQ + 6] = kQ[vQ + 6], QQ[mQ + 7] = kQ[vQ + 7], QQ[mQ + 8] = kQ[vQ + 8], QQ[mQ + 9] = kQ[vQ + 9], QQ[mQ + 10] = kQ[vQ + 10], QQ[mQ + 11] = kQ[vQ + 11], QQ[mQ + 12] = kQ[vQ + 12] - qQ, QQ[mQ + 13] = kQ[vQ + 13] - oQ, QQ[mQ + 14] = kQ[vQ + 14] - DQ, QQ[mQ + 15] = kQ[vQ + 15]
    }

    function qQ(QQ) {
      return (FQ, wQ, qQ, oQ) => {
        const DQ = QQ.camera;
        if (!DQ) return void LQ(FQ, wQ, qQ, oQ, 0, 0, 0);
        const kQ = DQ.worldMatrix;
        LQ(FQ, wQ, qQ, oQ, kQ[12], kQ[13], kQ[14])
      }
    }
    wQ.r(FQ), wQ.d(FQ, {
      makePackMeshWorld: () => qQ,
      packMat4IntoF32WithOffset: () => LQ
    })
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);