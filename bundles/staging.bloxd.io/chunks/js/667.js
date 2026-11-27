export const id = 667;
export const ids = [667];
export const modules = {
  63902: (ee, ie, He) => {
    function ye(ee, ie, He, ye, be, Me, Ke) {
      const Ue = ie,
        Fe = ye,
        Je = He;
      ee[Je + 0] = Ue[Fe + 0], ee[Je + 1] = Ue[Fe + 1], ee[Je + 2] = Ue[Fe + 2], ee[Je + 3] = Ue[Fe + 3], ee[Je + 4] = Ue[Fe + 4], ee[Je + 5] = Ue[Fe + 5], ee[Je + 6] = Ue[Fe + 6], ee[Je + 7] = Ue[Fe + 7], ee[Je + 8] = Ue[Fe + 8], ee[Je + 9] = Ue[Fe + 9], ee[Je + 10] = Ue[Fe + 10], ee[Je + 11] = Ue[Fe + 11], ee[Je + 12] = Ue[Fe + 12] - be, ee[Je + 13] = Ue[Fe + 13] - Me, ee[Je + 14] = Ue[Fe + 14] - Ke, ee[Je + 15] = Ue[Fe + 15]
    }

    function be(ee) {
      return (ie, He, be, Me) => {
        const Ke = ee.camera;
        if (!Ke) return void ye(ie, He, be, Me, 0, 0, 0);
        const Ue = Ke.worldMatrix;
        ye(ie, He, be, Me, Ue[12], Ue[13], Ue[14])
      }
    }
    He.r(ie), He.d(ie, {
      makePackMeshWorld: () => be,
      packMat4IntoF32WithOffset: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);