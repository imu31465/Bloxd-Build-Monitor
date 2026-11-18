export const id = 329;
export const ids = [329];
export const modules = {
  41035: (yb, bb, Wy) => {
    function Uy(yb) {
      return Math.floor(yb / 8)
    }

    function hy(yb) {
      return 1 << yb % 8
    }
    Wy.d(bb, {
      OptimizeIndices: () => Zy
    });
    class fy {
      constructor(yb) {
        this.size = yb, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(yb) {
        if (yb >= this.size) throw new RangeError("Bit index out of range");
        const bb = Uy(yb),
          Wy = hy(yb);
        return 0 !== (this._byteArray[bb] & Wy)
      }
      set(yb, bb) {
        if (yb >= this.size) throw new RangeError("Bit index out of range");
        const Wy = Uy(yb),
          fy = hy(yb);
        bb ? this._byteArray[Wy] |= fy : this._byteArray[Wy] &= ~fy
      }
    }

    function Zy(yb) {
      const bb = [],
        Wy = yb.length / 3;
      for (let fy = 0; fy < Wy; fy++) bb.push([yb[3 * fy], yb[3 * fy + 1], yb[3 * fy + 2]]);
      const Uy = new Map;
      for (let fy = 0; fy < bb.length; fy++) {
        const yb = bb[fy];
        for (const bb of yb) {
          let yb = Uy.get(bb);
          yb || Uy.set(bb, yb = []), yb.push(fy)
        }
      }
      const hy = new fy(Wy),
        Zy = [],
        cb = yb => {
          const Wy = [yb];
          for (; Wy.length > 0;) {
            const yb = Wy.pop();
            if (!hy.get(yb)) {
              hy.set(yb, !0), Zy.push(bb[yb]);
              for (const fy of bb[yb]) {
                const yb = Uy.get(fy);
                if (!yb) return;
                for (const bb of yb) hy.get(bb) || Wy.push(bb)
              }
            }
          }
        };
      for (let fy = 0; fy < Wy; fy++) hy.get(fy) || cb(fy);
      let Py = 0;
      for (const fy of Zy) yb[Py++] = fy[0], yb[Py++] = fy[1], yb[Py++] = fy[2]
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);