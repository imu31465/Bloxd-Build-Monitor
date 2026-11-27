export const id = 676;
export const ids = [676];
export const modules = {
  64219: (RR, JR, GR) => {
    function yR(RR, JR, GR, yR, tR, uR, ZR) {
      const qR = JR,
        iR = yR,
        fR = GR;
      RR[fR + 0] = qR[iR + 0], RR[fR + 1] = qR[iR + 1], RR[fR + 2] = qR[iR + 2], RR[fR + 3] = qR[iR + 3], RR[fR + 4] = qR[iR + 4], RR[fR + 5] = qR[iR + 5], RR[fR + 6] = qR[iR + 6], RR[fR + 7] = qR[iR + 7], RR[fR + 8] = qR[iR + 8], RR[fR + 9] = qR[iR + 9], RR[fR + 10] = qR[iR + 10], RR[fR + 11] = qR[iR + 11], RR[fR + 12] = qR[iR + 12] - tR, RR[fR + 13] = qR[iR + 13] - uR, RR[fR + 14] = qR[iR + 14] - ZR, RR[fR + 15] = qR[iR + 15]
    }

    function tR(RR) {
      return (JR, GR, tR, uR) => {
        const ZR = RR.camera;
        if (!ZR) return void yR(JR, GR, tR, uR, 0, 0, 0);
        const qR = ZR.worldMatrix;
        yR(JR, GR, tR, uR, qR[12], qR[13], qR[14])
      }
    }
    GR.r(JR), GR.d(JR, {
      makePackMeshWorld: () => tR,
      packMat4IntoF32WithOffset: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);