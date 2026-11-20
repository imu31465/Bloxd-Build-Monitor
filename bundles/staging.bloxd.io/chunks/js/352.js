export const id = 352;
export const ids = [352];
export const modules = {
  61212: (qq, Eq, gq) => {
    function Yq(qq, Eq, gq, Yq, lq, Oq, mq) {
      const xq = Eq,
        Aq = Yq,
        cq = gq;
      qq[cq + 0] = xq[Aq + 0], qq[cq + 1] = xq[Aq + 1], qq[cq + 2] = xq[Aq + 2], qq[cq + 3] = xq[Aq + 3], qq[cq + 4] = xq[Aq + 4], qq[cq + 5] = xq[Aq + 5], qq[cq + 6] = xq[Aq + 6], qq[cq + 7] = xq[Aq + 7], qq[cq + 8] = xq[Aq + 8], qq[cq + 9] = xq[Aq + 9], qq[cq + 10] = xq[Aq + 10], qq[cq + 11] = xq[Aq + 11], qq[cq + 12] = xq[Aq + 12] - lq, qq[cq + 13] = xq[Aq + 13] - Oq, qq[cq + 14] = xq[Aq + 14] - mq, qq[cq + 15] = xq[Aq + 15]
    }

    function lq(qq) {
      return (Eq, gq, lq, Oq) => {
        const mq = qq.camera;
        if (!mq) return void Yq(Eq, gq, lq, Oq, 0, 0, 0);
        const xq = mq.worldMatrix;
        Yq(Eq, gq, lq, Oq, xq[12], xq[13], xq[14])
      }
    }
    gq.r(Eq), gq.d(Eq, {
      makePackMeshWorld: () => lq,
      packMat4IntoF32WithOffset: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);