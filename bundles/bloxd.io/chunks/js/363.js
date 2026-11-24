export const id = 363;
export const ids = [363];
export const modules = {
  61449: (pp, ip, cp) => {
    function Op(pp, ip, cp, Op, op, Ip, Sp) {
      const xp = ip,
        Lp = Op,
        Yp = cp;
      pp[Yp + 0] = xp[Lp + 0], pp[Yp + 1] = xp[Lp + 1], pp[Yp + 2] = xp[Lp + 2], pp[Yp + 3] = xp[Lp + 3], pp[Yp + 4] = xp[Lp + 4], pp[Yp + 5] = xp[Lp + 5], pp[Yp + 6] = xp[Lp + 6], pp[Yp + 7] = xp[Lp + 7], pp[Yp + 8] = xp[Lp + 8], pp[Yp + 9] = xp[Lp + 9], pp[Yp + 10] = xp[Lp + 10], pp[Yp + 11] = xp[Lp + 11], pp[Yp + 12] = xp[Lp + 12] - op, pp[Yp + 13] = xp[Lp + 13] - Ip, pp[Yp + 14] = xp[Lp + 14] - Sp, pp[Yp + 15] = xp[Lp + 15]
    }

    function op(pp) {
      return (ip, cp, op, Ip) => {
        const Sp = pp.camera;
        if (!Sp) return void Op(ip, cp, op, Ip, 0, 0, 0);
        const xp = Sp.worldMatrix;
        Op(ip, cp, op, Ip, xp[12], xp[13], xp[14])
      }
    }
    cp.r(ip), cp.d(ip, {
      makePackMeshWorld: () => op,
      packMat4IntoF32WithOffset: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);