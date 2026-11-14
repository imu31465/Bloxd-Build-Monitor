export const id = 336;
export const ids = [336];
export const modules = {
  59180: (cB, Bc, nc) => {
    function Vc(cB, Bc, nc, Vc, Ic, rB, uc) {
      const sc = Bc,
        Mc = Vc,
        Pc = nc;
      cB[Pc + 0] = sc[Mc + 0], cB[Pc + 1] = sc[Mc + 1], cB[Pc + 2] = sc[Mc + 2], cB[Pc + 3] = sc[Mc + 3], cB[Pc + 4] = sc[Mc + 4], cB[Pc + 5] = sc[Mc + 5], cB[Pc + 6] = sc[Mc + 6], cB[Pc + 7] = sc[Mc + 7], cB[Pc + 8] = sc[Mc + 8], cB[Pc + 9] = sc[Mc + 9], cB[Pc + 10] = sc[Mc + 10], cB[Pc + 11] = sc[Mc + 11], cB[Pc + 12] = sc[Mc + 12] - Ic, cB[Pc + 13] = sc[Mc + 13] - rB, cB[Pc + 14] = sc[Mc + 14] - uc, cB[Pc + 15] = sc[Mc + 15]
    }

    function Ic(cB) {
      return (Bc, nc, Ic, rB) => {
        const uc = cB.camera;
        if (!uc) return void Vc(Bc, nc, Ic, rB, 0, 0, 0);
        const sc = uc.worldMatrix;
        Vc(Bc, nc, Ic, rB, sc[12], sc[13], sc[14])
      }
    }
    nc.r(Bc), nc.d(Bc, {
      makePackMeshWorld: () => Ic,
      packMat4IntoF32WithOffset: () => Vc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);