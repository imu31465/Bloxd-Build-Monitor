export const id = 677;
export const ids = [677];
export const modules = {
  64701: (rr, Sr, Qr) => {
    function Zr(rr, Sr, Qr, Zr, Wr, ar, jr) {
      const Ir = Sr,
        fr = Zr,
        Er = Qr;
      rr[Er + 0] = Ir[fr + 0], rr[Er + 1] = Ir[fr + 1], rr[Er + 2] = Ir[fr + 2], rr[Er + 3] = Ir[fr + 3], rr[Er + 4] = Ir[fr + 4], rr[Er + 5] = Ir[fr + 5], rr[Er + 6] = Ir[fr + 6], rr[Er + 7] = Ir[fr + 7], rr[Er + 8] = Ir[fr + 8], rr[Er + 9] = Ir[fr + 9], rr[Er + 10] = Ir[fr + 10], rr[Er + 11] = Ir[fr + 11], rr[Er + 12] = Ir[fr + 12] - Wr, rr[Er + 13] = Ir[fr + 13] - ar, rr[Er + 14] = Ir[fr + 14] - jr, rr[Er + 15] = Ir[fr + 15]
    }

    function Wr(rr) {
      return (Sr, Qr, Wr, ar) => {
        const jr = rr.camera;
        if (!jr) return void Zr(Sr, Qr, Wr, ar, 0, 0, 0);
        const Ir = jr.worldMatrix;
        Zr(Sr, Qr, Wr, ar, Ir[12], Ir[13], Ir[14])
      }
    }
    Qr.r(Sr), Qr.d(Sr, {
      makePackMeshWorld: () => Wr,
      packMat4IntoF32WithOffset: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);