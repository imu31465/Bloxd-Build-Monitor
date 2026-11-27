export const id = 670;
export const ids = [670];
export const modules = {
  55060: (rr, Sr, Qr) => {
    function Zr(rr) {
      return Math.floor(rr / 8)
    }

    function Wr(rr) {
      return 1 << rr % 8
    }
    Qr.d(Sr, {
      OptimizeIndices: () => jr
    });
    class ar {
      constructor(rr) {
        this.size = rr, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(rr) {
        if (rr >= this.size) throw new RangeError("Bit index out of range");
        const Sr = Zr(rr),
          Qr = Wr(rr);
        return 0 !== (this._byteArray[Sr] & Qr)
      }
      set(rr, Sr) {
        if (rr >= this.size) throw new RangeError("Bit index out of range");
        const Qr = Zr(rr),
          ar = Wr(rr);
        Sr ? this._byteArray[Qr] |= ar : this._byteArray[Qr] &= ~ar
      }
    }

    function jr(rr) {
      const Sr = [],
        Qr = rr.length / 3;
      for (let ar = 0; ar < Qr; ar++) Sr.push([rr[3 * ar], rr[3 * ar + 1], rr[3 * ar + 2]]);
      const Zr = new Map;
      for (let ar = 0; ar < Sr.length; ar++) {
        const rr = Sr[ar];
        for (const Sr of rr) {
          let rr = Zr.get(Sr);
          rr || Zr.set(Sr, rr = []), rr.push(ar)
        }
      }
      const Wr = new ar(Qr),
        jr = [],
        Ir = rr => {
          const Qr = [rr];
          for (; Qr.length > 0;) {
            const rr = Qr.pop();
            if (!Wr.get(rr)) {
              Wr.set(rr, !0), jr.push(Sr[rr]);
              for (const ar of Sr[rr]) {
                const rr = Zr.get(ar);
                if (!rr) return;
                for (const Sr of rr) Wr.get(Sr) || Qr.push(Sr)
              }
            }
          }
        };
      for (let ar = 0; ar < Qr; ar++) Wr.get(ar) || Ir(ar);
      let fr = 0;
      for (const ar of jr) rr[fr++] = ar[0], rr[fr++] = ar[1], rr[fr++] = ar[2]
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);