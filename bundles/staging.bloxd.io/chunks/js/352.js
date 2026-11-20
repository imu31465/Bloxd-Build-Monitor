export const id = 352;
export const ids = [352];
export const modules = {
  60683: (bb, ub, hb) => {
    function Bb(bb, ub, hb, Bb, Ob, Gb, Ub) {
      const Lb = ub,
        Yb = Bb,
        Sb = hb;
      bb[Sb + 0] = Lb[Yb + 0], bb[Sb + 1] = Lb[Yb + 1], bb[Sb + 2] = Lb[Yb + 2], bb[Sb + 3] = Lb[Yb + 3], bb[Sb + 4] = Lb[Yb + 4], bb[Sb + 5] = Lb[Yb + 5], bb[Sb + 6] = Lb[Yb + 6], bb[Sb + 7] = Lb[Yb + 7], bb[Sb + 8] = Lb[Yb + 8], bb[Sb + 9] = Lb[Yb + 9], bb[Sb + 10] = Lb[Yb + 10], bb[Sb + 11] = Lb[Yb + 11], bb[Sb + 12] = Lb[Yb + 12] - Ob, bb[Sb + 13] = Lb[Yb + 13] - Gb, bb[Sb + 14] = Lb[Yb + 14] - Ub, bb[Sb + 15] = Lb[Yb + 15]
    }

    function Ob(bb) {
      return (ub, hb, Ob, Gb) => {
        const Ub = bb.camera;
        if (!Ub) return void Bb(ub, hb, Ob, Gb, 0, 0, 0);
        const Lb = Ub.worldMatrix;
        Bb(ub, hb, Ob, Gb, Lb[12], Lb[13], Lb[14])
      }
    }
    hb.r(ub), hb.d(ub, {
      makePackMeshWorld: () => Ob,
      packMat4IntoF32WithOffset: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);