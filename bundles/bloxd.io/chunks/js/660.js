export const id = 660;
export const ids = [660];
export const modules = {
  45439: (VV, eV, xV) => {
    function JV(VV) {
      return Math.floor(VV / 8)
    }

    function YV(VV) {
      return 1 << VV % 8
    }
    xV.d(eV, {
      OptimizeIndices: () => yV
    });
    class UV {
      constructor(VV) {
        this.size = VV, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(VV) {
        if (VV >= this.size) throw new RangeError("Bit index out of range");
        const eV = JV(VV),
          xV = YV(VV);
        return 0 !== (this._byteArray[eV] & xV)
      }
      set(VV, eV) {
        if (VV >= this.size) throw new RangeError("Bit index out of range");
        const xV = JV(VV),
          UV = YV(VV);
        eV ? this._byteArray[xV] |= UV : this._byteArray[xV] &= ~UV
      }
    }

    function yV(VV) {
      const eV = [],
        xV = VV.length / 3;
      for (let UV = 0; UV < xV; UV++) eV.push([VV[3 * UV], VV[3 * UV + 1], VV[3 * UV + 2]]);
      const JV = new Map;
      for (let UV = 0; UV < eV.length; UV++) {
        const VV = eV[UV];
        for (const eV of VV) {
          let VV = JV.get(eV);
          VV || JV.set(eV, VV = []), VV.push(UV)
        }
      }
      const YV = new UV(xV),
        yV = [],
        pV = VV => {
          const xV = [VV];
          for (; xV.length > 0;) {
            const VV = xV.pop();
            if (!YV.get(VV)) {
              YV.set(VV, !0), yV.push(eV[VV]);
              for (const UV of eV[VV]) {
                const VV = JV.get(UV);
                if (!VV) return;
                for (const eV of VV) YV.get(eV) || xV.push(eV)
              }
            }
          }
        };
      for (let UV = 0; UV < xV; UV++) YV.get(UV) || pV(UV);
      let QV = 0;
      for (const UV of yV) VV[QV++] = UV[0], VV[QV++] = UV[1], VV[QV++] = UV[2]
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);