export const id = 321;
export const ids = [321];
export const modules = {
  40406: (FF, WF, SF) => {
    function CF(FF) {
      return Math.floor(FF / 8)
    }

    function AF(FF) {
      return 1 << FF % 8
    }
    SF.d(WF, {
      OptimizeIndices: () => hF
    });
    class uF {
      constructor(FF) {
        this.size = FF, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(FF) {
        if (FF >= this.size) throw new RangeError("Bit index out of range");
        const WF = CF(FF),
          SF = AF(FF);
        return 0 !== (this._byteArray[WF] & SF)
      }
      set(FF, WF) {
        if (FF >= this.size) throw new RangeError("Bit index out of range");
        const SF = CF(FF),
          uF = AF(FF);
        WF ? this._byteArray[SF] |= uF : this._byteArray[SF] &= ~uF
      }
    }

    function hF(FF) {
      const WF = [],
        SF = FF.length / 3;
      for (let uF = 0; uF < SF; uF++) WF.push([FF[3 * uF], FF[3 * uF + 1], FF[3 * uF + 2]]);
      const CF = new Map;
      for (let uF = 0; uF < WF.length; uF++) {
        const FF = WF[uF];
        for (const WF of FF) {
          let FF = CF.get(WF);
          FF || CF.set(WF, FF = []), FF.push(uF)
        }
      }
      const AF = new uF(SF),
        hF = [],
        bW = FF => {
          const SF = [FF];
          for (; SF.length > 0;) {
            const FF = SF.pop();
            if (!AF.get(FF)) {
              AF.set(FF, !0), hF.push(WF[FF]);
              for (const uF of WF[FF]) {
                const FF = CF.get(uF);
                if (!FF) return;
                for (const WF of FF) AF.get(WF) || SF.push(WF)
              }
            }
          }
        };
      for (let uF = 0; uF < SF; uF++) AF.get(uF) || bW(uF);
      let dF = 0;
      for (const uF of hF) FF[dF++] = uF[0], FF[dF++] = uF[1], FF[dF++] = uF[2]
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);