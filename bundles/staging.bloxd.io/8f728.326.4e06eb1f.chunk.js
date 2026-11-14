export const id = 326;
export const ids = [326];
export const modules = {
  40499: (cB, Bc, nc) => {
    function Vc(cB) {
      return Math.floor(cB / 8)
    }

    function Ic(cB) {
      return 1 << cB % 8
    }
    nc.d(Bc, {
      OptimizeIndices: () => uc
    });
    class rB {
      constructor(cB) {
        this.size = cB, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(cB) {
        if (cB >= this.size) throw new RangeError("Bit index out of range");
        const Bc = Vc(cB),
          nc = Ic(cB);
        return 0 !== (this._byteArray[Bc] & nc)
      }
      set(cB, Bc) {
        if (cB >= this.size) throw new RangeError("Bit index out of range");
        const nc = Vc(cB),
          rB = Ic(cB);
        Bc ? this._byteArray[nc] |= rB : this._byteArray[nc] &= ~rB
      }
    }

    function uc(cB) {
      const Bc = [],
        nc = cB.length / 3;
      for (let rB = 0; rB < nc; rB++) Bc.push([cB[3 * rB], cB[3 * rB + 1], cB[3 * rB + 2]]);
      const Vc = new Map;
      for (let rB = 0; rB < Bc.length; rB++) {
        const cB = Bc[rB];
        for (const Bc of cB) {
          let cB = Vc.get(Bc);
          cB || Vc.set(Bc, cB = []), cB.push(rB)
        }
      }
      const Ic = new rB(nc),
        uc = [],
        sc = cB => {
          const nc = [cB];
          for (; nc.length > 0;) {
            const cB = nc.pop();
            if (!Ic.get(cB)) {
              Ic.set(cB, !0), uc.push(Bc[cB]);
              for (const rB of Bc[cB]) {
                const cB = Vc.get(rB);
                if (!cB) return;
                for (const Bc of cB) Ic.get(Bc) || nc.push(Bc)
              }
            }
          }
        };
      for (let rB = 0; rB < nc; rB++) Ic.get(rB) || sc(rB);
      let Mc = 0;
      for (const rB of uc) cB[Mc++] = rB[0], cB[Mc++] = rB[1], cB[Mc++] = rB[2]
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);