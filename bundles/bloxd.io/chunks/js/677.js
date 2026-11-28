export const id = 677;
export const ids = [677];
export const modules = {
  64499: (bb, wb, Mb) => {
    function eb(bb, wb, Mb, eb, Hb, pb, Vb) {
      const gb = wb,
        lb = eb,
        Lb = Mb;
      bb[Lb + 0] = gb[lb + 0], bb[Lb + 1] = gb[lb + 1], bb[Lb + 2] = gb[lb + 2], bb[Lb + 3] = gb[lb + 3], bb[Lb + 4] = gb[lb + 4], bb[Lb + 5] = gb[lb + 5], bb[Lb + 6] = gb[lb + 6], bb[Lb + 7] = gb[lb + 7], bb[Lb + 8] = gb[lb + 8], bb[Lb + 9] = gb[lb + 9], bb[Lb + 10] = gb[lb + 10], bb[Lb + 11] = gb[lb + 11], bb[Lb + 12] = gb[lb + 12] - Hb, bb[Lb + 13] = gb[lb + 13] - pb, bb[Lb + 14] = gb[lb + 14] - Vb, bb[Lb + 15] = gb[lb + 15]
    }

    function Hb(bb) {
      return (wb, Mb, Hb, pb) => {
        const Vb = bb.camera;
        if (!Vb) return void eb(wb, Mb, Hb, pb, 0, 0, 0);
        const gb = Vb.worldMatrix;
        eb(wb, Mb, Hb, pb, gb[12], gb[13], gb[14])
      }
    }
    Mb.r(wb), Mb.d(wb, {
      makePackMeshWorld: () => Hb,
      packMat4IntoF32WithOffset: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);