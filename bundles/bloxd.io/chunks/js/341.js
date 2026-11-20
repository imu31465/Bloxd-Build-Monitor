export const id = 341;
export const ids = [341];
export const modules = {
  41909: (bb, cb, sb) => {
    function kb(bb) {
      return Math.floor(bb / 8)
    }

    function Wb(bb) {
      return 1 << bb % 8
    }
    sb.d(cb, {
      OptimizeIndices: () => Tb
    });
    class ab {
      constructor(bb) {
        this.size = bb, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(bb) {
        if (bb >= this.size) throw new RangeError("Bit index out of range");
        const cb = kb(bb),
          sb = Wb(bb);
        return 0 !== (this._byteArray[cb] & sb)
      }
      set(bb, cb) {
        if (bb >= this.size) throw new RangeError("Bit index out of range");
        const sb = kb(bb),
          ab = Wb(bb);
        cb ? this._byteArray[sb] |= ab : this._byteArray[sb] &= ~ab
      }
    }

    function Tb(bb) {
      const cb = [],
        sb = bb.length / 3;
      for (let ab = 0; ab < sb; ab++) cb.push([bb[3 * ab], bb[3 * ab + 1], bb[3 * ab + 2]]);
      const kb = new Map;
      for (let ab = 0; ab < cb.length; ab++) {
        const bb = cb[ab];
        for (const cb of bb) {
          let bb = kb.get(cb);
          bb || kb.set(cb, bb = []), bb.push(ab)
        }
      }
      const Wb = new ab(sb),
        Tb = [],
        Ub = bb => {
          const sb = [bb];
          for (; sb.length > 0;) {
            const bb = sb.pop();
            if (!Wb.get(bb)) {
              Wb.set(bb, !0), Tb.push(cb[bb]);
              for (const ab of cb[bb]) {
                const bb = kb.get(ab);
                if (!bb) return;
                for (const cb of bb) Wb.get(cb) || sb.push(cb)
              }
            }
          }
        };
      for (let ab = 0; ab < sb; ab++) Wb.get(ab) || Ub(ab);
      let Ib = 0;
      for (const ab of Tb) bb[Ib++] = ab[0], bb[Ib++] = ab[1], bb[Ib++] = ab[2]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);