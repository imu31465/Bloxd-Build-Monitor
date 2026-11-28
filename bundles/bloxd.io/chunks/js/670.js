export const id = 670;
export const ids = [670];
export const modules = {
  54779: (bb, wb, Mb) => {
    function eb(bb) {
      return Math.floor(bb / 8)
    }

    function Hb(bb) {
      return 1 << bb % 8
    }
    Mb.d(wb, {
      OptimizeIndices: () => Vb
    });
    class pb {
      constructor(bb) {
        this.size = bb, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(bb) {
        if (bb >= this.size) throw new RangeError("Bit index out of range");
        const wb = eb(bb),
          Mb = Hb(bb);
        return 0 !== (this._byteArray[wb] & Mb)
      }
      set(bb, wb) {
        if (bb >= this.size) throw new RangeError("Bit index out of range");
        const Mb = eb(bb),
          pb = Hb(bb);
        wb ? this._byteArray[Mb] |= pb : this._byteArray[Mb] &= ~pb
      }
    }

    function Vb(bb) {
      const wb = [],
        Mb = bb.length / 3;
      for (let pb = 0; pb < Mb; pb++) wb.push([bb[3 * pb], bb[3 * pb + 1], bb[3 * pb + 2]]);
      const eb = new Map;
      for (let pb = 0; pb < wb.length; pb++) {
        const bb = wb[pb];
        for (const wb of bb) {
          let bb = eb.get(wb);
          bb || eb.set(wb, bb = []), bb.push(pb)
        }
      }
      const Hb = new pb(Mb),
        Vb = [],
        gb = bb => {
          const Mb = [bb];
          for (; Mb.length > 0;) {
            const bb = Mb.pop();
            if (!Hb.get(bb)) {
              Hb.set(bb, !0), Vb.push(wb[bb]);
              for (const pb of wb[bb]) {
                const bb = eb.get(pb);
                if (!bb) return;
                for (const wb of bb) Hb.get(wb) || Mb.push(wb)
              }
            }
          }
        };
      for (let pb = 0; pb < Mb; pb++) Hb.get(pb) || gb(pb);
      let lb = 0;
      for (const pb of Vb) bb[lb++] = pb[0], bb[lb++] = pb[1], bb[lb++] = pb[2]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);