export const id = 676;
export const ids = [676];
export const modules = {
  64696: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      applyLightFoOffset: () => jr,
      getFloatingOriginOffset: () => Wr,
      lightFoVersion: () => ar,
      wrapRenderableForFO: () => Ir
    });
    var Zr = Qr(54263);

    function Wr(rr) {
      const Sr = rr.camera;
      if (!Sr) return {
        x: 0,
        y: 0,
        z: 0
      };
      const Qr = Sr.worldMatrix;
      return {
        x: Qr[12],
        y: Qr[13],
        z: Qr[14]
      }
    }

    function ar(rr) {
      return rr.camera ? rr.camera.worldMatrixVersion : 0
    }

    function jr(rr, Sr) {
      const Qr = Sr.camera?.worldMatrix;
      if (!Qr) return;
      const Wr = Qr[12],
        ar = Qr[13],
        jr = Qr[14];
      let Ir = 0;
      for (const fr of Sr.lights) {
        if (Ir >= Zr.d) break;
        if (!fr._writeLightUbo) continue;
        const Sr = 4 + 16 * Ir,
          Qr = rr[Sr + 3];
        if (0 === Qr || 2 === Qr) {
          const Qr = fr.worldMatrix;
          rr[Sr] = Qr[12] - Wr, rr[Sr + 1] = Qr[13] - ar, rr[Sr + 2] = Qr[14] - jr
        }
        Ir++
      }
    }

    function Ir(rr, Sr, Qr) {
      let Zr = -1;
      return () => {
        const Wr = Sr.camera ? Sr.camera.worldMatrixVersion : -1;
        Wr !== Zr && (Qr(), Zr = Wr), rr()
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);