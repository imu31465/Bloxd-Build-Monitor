export const id = 660;
export const ids = [660];
export const modules = {
  45768: (ee, ie, He) => {
    function ye(ee) {
      return Math.floor(ee / 8)
    }

    function be(ee) {
      return 1 << ee % 8
    }
    He.d(ie, {
      OptimizeIndices: () => Ke
    });
    class Me {
      constructor(ee) {
        this.size = ee, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(ee) {
        if (ee >= this.size) throw new RangeError("Bit index out of range");
        const ie = ye(ee),
          He = be(ee);
        return 0 !== (this._byteArray[ie] & He)
      }
      set(ee, ie) {
        if (ee >= this.size) throw new RangeError("Bit index out of range");
        const He = ye(ee),
          Me = be(ee);
        ie ? this._byteArray[He] |= Me : this._byteArray[He] &= ~Me
      }
    }

    function Ke(ee) {
      const ie = [],
        He = ee.length / 3;
      for (let Me = 0; Me < He; Me++) ie.push([ee[3 * Me], ee[3 * Me + 1], ee[3 * Me + 2]]);
      const ye = new Map;
      for (let Me = 0; Me < ie.length; Me++) {
        const ee = ie[Me];
        for (const ie of ee) {
          let ee = ye.get(ie);
          ee || ye.set(ie, ee = []), ee.push(Me)
        }
      }
      const be = new Me(He),
        Ke = [],
        Ue = ee => {
          const He = [ee];
          for (; He.length > 0;) {
            const ee = He.pop();
            if (!be.get(ee)) {
              be.set(ee, !0), Ke.push(ie[ee]);
              for (const Me of ie[ee]) {
                const ee = ye.get(Me);
                if (!ee) return;
                for (const ie of ee) be.get(ie) || He.push(ie)
              }
            }
          }
        };
      for (let Me = 0; Me < He; Me++) be.get(Me) || Ue(Me);
      let Fe = 0;
      for (const Me of Ke) ee[Fe++] = Me[0], ee[Fe++] = Me[1], ee[Fe++] = Me[2]
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);