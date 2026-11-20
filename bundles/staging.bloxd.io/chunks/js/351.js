export const id = 351;
export const ids = [351];
export const modules = {
  60669: (bb, cb, sb) => {
    function kb(bb, cb, sb, kb, Wb, ab, Tb) {
      const Ub = cb,
        Ib = kb,
        Hb = sb;
      bb[Hb + 0] = Ub[Ib + 0], bb[Hb + 1] = Ub[Ib + 1], bb[Hb + 2] = Ub[Ib + 2], bb[Hb + 3] = Ub[Ib + 3], bb[Hb + 4] = Ub[Ib + 4], bb[Hb + 5] = Ub[Ib + 5], bb[Hb + 6] = Ub[Ib + 6], bb[Hb + 7] = Ub[Ib + 7], bb[Hb + 8] = Ub[Ib + 8], bb[Hb + 9] = Ub[Ib + 9], bb[Hb + 10] = Ub[Ib + 10], bb[Hb + 11] = Ub[Ib + 11], bb[Hb + 12] = Ub[Ib + 12] - Wb, bb[Hb + 13] = Ub[Ib + 13] - ab, bb[Hb + 14] = Ub[Ib + 14] - Tb, bb[Hb + 15] = Ub[Ib + 15]
    }

    function Wb(bb) {
      return (cb, sb, Wb, ab) => {
        const Tb = bb.camera;
        if (!Tb) return void kb(cb, sb, Wb, ab, 0, 0, 0);
        const Ub = Tb.worldMatrix;
        kb(cb, sb, Wb, ab, Ub[12], Ub[13], Ub[14])
      }
    }
    sb.r(cb), sb.d(cb, {
      makePackMeshWorld: () => Wb,
      packMat4IntoF32WithOffset: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);