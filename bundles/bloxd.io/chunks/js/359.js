export const id = 359;
export const ids = [359];
export const modules = {
  61422: (mm, Tm, fm) => {
    function hm(mm, Tm, fm, hm, Am, am, xm) {
      const wm = Tm,
        Dm = hm,
        im = fm;
      mm[im + 0] = wm[Dm + 0], mm[im + 1] = wm[Dm + 1], mm[im + 2] = wm[Dm + 2], mm[im + 3] = wm[Dm + 3], mm[im + 4] = wm[Dm + 4], mm[im + 5] = wm[Dm + 5], mm[im + 6] = wm[Dm + 6], mm[im + 7] = wm[Dm + 7], mm[im + 8] = wm[Dm + 8], mm[im + 9] = wm[Dm + 9], mm[im + 10] = wm[Dm + 10], mm[im + 11] = wm[Dm + 11], mm[im + 12] = wm[Dm + 12] - Am, mm[im + 13] = wm[Dm + 13] - am, mm[im + 14] = wm[Dm + 14] - xm, mm[im + 15] = wm[Dm + 15]
    }

    function Am(mm) {
      return (Tm, fm, Am, am) => {
        const xm = mm.camera;
        if (!xm) return void hm(Tm, fm, Am, am, 0, 0, 0);
        const wm = xm.worldMatrix;
        hm(Tm, fm, Am, am, wm[12], wm[13], wm[14])
      }
    }
    fm.r(Tm), fm.d(Tm, {
      makePackMeshWorld: () => Am,
      packMat4IntoF32WithOffset: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);