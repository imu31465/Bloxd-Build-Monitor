export const id = 657;
export const ids = [657];
export const modules = {
  45219: (UU, XU, zU) => {
    function cU(UU) {
      return Math.floor(UU / 8)
    }

    function yU(UU) {
      return 1 << UU % 8
    }
    zU.d(XU, {
      OptimizeIndices: () => AU
    });
    class QU {
      constructor(UU) {
        this.size = UU, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(UU) {
        if (UU >= this.size) throw new RangeError("Bit index out of range");
        const XU = cU(UU),
          zU = yU(UU);
        return 0 !== (this._byteArray[XU] & zU)
      }
      set(UU, XU) {
        if (UU >= this.size) throw new RangeError("Bit index out of range");
        const zU = cU(UU),
          QU = yU(UU);
        XU ? this._byteArray[zU] |= QU : this._byteArray[zU] &= ~QU
      }
    }

    function AU(UU) {
      const XU = [],
        zU = UU.length / 3;
      for (let QU = 0; QU < zU; QU++) XU.push([UU[3 * QU], UU[3 * QU + 1], UU[3 * QU + 2]]);
      const cU = new Map;
      for (let QU = 0; QU < XU.length; QU++) {
        const UU = XU[QU];
        for (const XU of UU) {
          let UU = cU.get(XU);
          UU || cU.set(XU, UU = []), UU.push(QU)
        }
      }
      const yU = new QU(zU),
        AU = [],
        FU = UU => {
          const zU = [UU];
          for (; zU.length > 0;) {
            const UU = zU.pop();
            if (!yU.get(UU)) {
              yU.set(UU, !0), AU.push(XU[UU]);
              for (const QU of XU[UU]) {
                const UU = cU.get(QU);
                if (!UU) return;
                for (const XU of UU) yU.get(XU) || zU.push(XU)
              }
            }
          }
        };
      for (let QU = 0; QU < zU; QU++) yU.get(QU) || FU(QU);
      let oU = 0;
      for (const QU of AU) UU[oU++] = QU[0], UU[oU++] = QU[1], UU[oU++] = QU[2]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);