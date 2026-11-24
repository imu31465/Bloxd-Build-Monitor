export const id = 351;
export const ids = [351];
export const modules = {
  42561: (SS, HS, gS) => {
    function tS(SS) {
      return Math.floor(SS / 8)
    }

    function bS(SS) {
      return 1 << SS % 8
    }
    gS.d(HS, {
      OptimizeIndices: () => xS
    });
    class XS {
      constructor(SS) {
        this.size = SS, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(SS) {
        if (SS >= this.size) throw new RangeError("Bit index out of range");
        const HS = tS(SS),
          gS = bS(SS);
        return 0 !== (this._byteArray[HS] & gS)
      }
      set(SS, HS) {
        if (SS >= this.size) throw new RangeError("Bit index out of range");
        const gS = tS(SS),
          XS = bS(SS);
        HS ? this._byteArray[gS] |= XS : this._byteArray[gS] &= ~XS
      }
    }

    function xS(SS) {
      const HS = [],
        gS = SS.length / 3;
      for (let XS = 0; XS < gS; XS++) HS.push([SS[3 * XS], SS[3 * XS + 1], SS[3 * XS + 2]]);
      const tS = new Map;
      for (let XS = 0; XS < HS.length; XS++) {
        const SS = HS[XS];
        for (const HS of SS) {
          let SS = tS.get(HS);
          SS || tS.set(HS, SS = []), SS.push(XS)
        }
      }
      const bS = new XS(gS),
        xS = [],
        NS = SS => {
          const gS = [SS];
          for (; gS.length > 0;) {
            const SS = gS.pop();
            if (!bS.get(SS)) {
              bS.set(SS, !0), xS.push(HS[SS]);
              for (const XS of HS[SS]) {
                const SS = tS.get(XS);
                if (!SS) return;
                for (const HS of SS) bS.get(HS) || gS.push(HS)
              }
            }
          }
        };
      for (let XS = 0; XS < gS; XS++) bS.get(XS) || NS(XS);
      let qS = 0;
      for (const XS of xS) SS[qS++] = XS[0], SS[qS++] = XS[1], SS[qS++] = XS[2]
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);