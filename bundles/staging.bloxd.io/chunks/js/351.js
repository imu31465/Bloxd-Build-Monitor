export const id = 351;
export const ids = [351];
export const modules = {
  60340: (bb, ab, Ub) => {
    function Ab(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      const Yb = ab,
        Bb = Ab,
        eb = Ub;
      bb[eb + 0] = Yb[Bb + 0], bb[eb + 1] = Yb[Bb + 1], bb[eb + 2] = Yb[Bb + 2], bb[eb + 3] = Yb[Bb + 3], bb[eb + 4] = Yb[Bb + 4], bb[eb + 5] = Yb[Bb + 5], bb[eb + 6] = Yb[Bb + 6], bb[eb + 7] = Yb[Bb + 7], bb[eb + 8] = Yb[Bb + 8], bb[eb + 9] = Yb[Bb + 9], bb[eb + 10] = Yb[Bb + 10], bb[eb + 11] = Yb[Bb + 11], bb[eb + 12] = Yb[Bb + 12] - Mb, bb[eb + 13] = Yb[Bb + 13] - Tb, bb[eb + 14] = Yb[Bb + 14] - Eb, bb[eb + 15] = Yb[Bb + 15]
    }

    function Mb(bb) {
      return (ab, Ub, Mb, Tb) => {
        const Eb = bb.camera;
        if (!Eb) return void Ab(ab, Ub, Mb, Tb, 0, 0, 0);
        const Yb = Eb.worldMatrix;
        Ab(ab, Ub, Mb, Tb, Yb[12], Yb[13], Yb[14])
      }
    }
    Ub.r(ab), Ub.d(ab, {
      makePackMeshWorld: () => Mb,
      packMat4IntoF32WithOffset: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);