export const id = 342;
export const ids = [342];
export const modules = {
  41970: (bb, ub, hb) => {
    function Bb(bb) {
      return Math.floor(bb / 8)
    }

    function Ob(bb) {
      return 1 << bb % 8
    }
    hb.d(ub, {
      OptimizeIndices: () => Ub
    });
    class Gb {
      constructor(bb) {
        this.size = bb, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(bb) {
        if (bb >= this.size) throw new RangeError("Bit index out of range");
        const ub = Bb(bb),
          hb = Ob(bb);
        return 0 !== (this._byteArray[ub] & hb)
      }
      set(bb, ub) {
        if (bb >= this.size) throw new RangeError("Bit index out of range");
        const hb = Bb(bb),
          Gb = Ob(bb);
        ub ? this._byteArray[hb] |= Gb : this._byteArray[hb] &= ~Gb
      }
    }

    function Ub(bb) {
      const ub = [],
        hb = bb.length / 3;
      for (let Gb = 0; Gb < hb; Gb++) ub.push([bb[3 * Gb], bb[3 * Gb + 1], bb[3 * Gb + 2]]);
      const Bb = new Map;
      for (let Gb = 0; Gb < ub.length; Gb++) {
        const bb = ub[Gb];
        for (const ub of bb) {
          let bb = Bb.get(ub);
          bb || Bb.set(ub, bb = []), bb.push(Gb)
        }
      }
      const Ob = new Gb(hb),
        Ub = [],
        Lb = bb => {
          const hb = [bb];
          for (; hb.length > 0;) {
            const bb = hb.pop();
            if (!Ob.get(bb)) {
              Ob.set(bb, !0), Ub.push(ub[bb]);
              for (const Gb of ub[bb]) {
                const bb = Bb.get(Gb);
                if (!bb) return;
                for (const ub of bb) Ob.get(ub) || hb.push(ub)
              }
            }
          }
        };
      for (let Gb = 0; Gb < hb; Gb++) Ob.get(Gb) || Lb(Gb);
      let Yb = 0;
      for (const Gb of Ub) bb[Yb++] = Gb[0], bb[Yb++] = Gb[1], bb[Yb++] = Gb[2]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);