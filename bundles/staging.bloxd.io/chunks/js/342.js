export const id = 342;
export const ids = [342];
export const modules = {
  42308: (qq, Eq, gq) => {
    function Yq(qq) {
      return Math.floor(qq / 8)
    }

    function lq(qq) {
      return 1 << qq % 8
    }
    gq.d(Eq, {
      OptimizeIndices: () => mq
    });
    class Oq {
      constructor(qq) {
        this.size = qq, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(qq) {
        if (qq >= this.size) throw new RangeError("Bit index out of range");
        const Eq = Yq(qq),
          gq = lq(qq);
        return 0 !== (this._byteArray[Eq] & gq)
      }
      set(qq, Eq) {
        if (qq >= this.size) throw new RangeError("Bit index out of range");
        const gq = Yq(qq),
          Oq = lq(qq);
        Eq ? this._byteArray[gq] |= Oq : this._byteArray[gq] &= ~Oq
      }
    }

    function mq(qq) {
      const Eq = [],
        gq = qq.length / 3;
      for (let Oq = 0; Oq < gq; Oq++) Eq.push([qq[3 * Oq], qq[3 * Oq + 1], qq[3 * Oq + 2]]);
      const Yq = new Map;
      for (let Oq = 0; Oq < Eq.length; Oq++) {
        const qq = Eq[Oq];
        for (const Eq of qq) {
          let qq = Yq.get(Eq);
          qq || Yq.set(Eq, qq = []), qq.push(Oq)
        }
      }
      const lq = new Oq(gq),
        mq = [],
        xq = qq => {
          const gq = [qq];
          for (; gq.length > 0;) {
            const qq = gq.pop();
            if (!lq.get(qq)) {
              lq.set(qq, !0), mq.push(Eq[qq]);
              for (const Oq of Eq[qq]) {
                const qq = Yq.get(Oq);
                if (!qq) return;
                for (const Eq of qq) lq.get(Eq) || gq.push(Eq)
              }
            }
          }
        };
      for (let Oq = 0; Oq < gq; Oq++) lq.get(Oq) || xq(Oq);
      let Aq = 0;
      for (const Oq of mq) qq[Aq++] = Oq[0], qq[Aq++] = Oq[1], qq[Aq++] = Oq[2]
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);