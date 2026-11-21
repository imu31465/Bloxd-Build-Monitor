export const id = 342;
export const ids = [342];
export const modules = {
  41925: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return Math.floor(QQ / 8)
    }

    function qQ(QQ) {
      return 1 << QQ % 8
    }
    wQ.d(FQ, {
      OptimizeIndices: () => DQ
    });
    class oQ {
      constructor(QQ) {
        this.size = QQ, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(QQ) {
        if (QQ >= this.size) throw new RangeError("Bit index out of range");
        const FQ = LQ(QQ),
          wQ = qQ(QQ);
        return 0 !== (this._byteArray[FQ] & wQ)
      }
      set(QQ, FQ) {
        if (QQ >= this.size) throw new RangeError("Bit index out of range");
        const wQ = LQ(QQ),
          oQ = qQ(QQ);
        FQ ? this._byteArray[wQ] |= oQ : this._byteArray[wQ] &= ~oQ
      }
    }

    function DQ(QQ) {
      const FQ = [],
        wQ = QQ.length / 3;
      for (let oQ = 0; oQ < wQ; oQ++) FQ.push([QQ[3 * oQ], QQ[3 * oQ + 1], QQ[3 * oQ + 2]]);
      const LQ = new Map;
      for (let oQ = 0; oQ < FQ.length; oQ++) {
        const QQ = FQ[oQ];
        for (const FQ of QQ) {
          let QQ = LQ.get(FQ);
          QQ || LQ.set(FQ, QQ = []), QQ.push(oQ)
        }
      }
      const qQ = new oQ(wQ),
        DQ = [],
        kQ = QQ => {
          const wQ = [QQ];
          for (; wQ.length > 0;) {
            const QQ = wQ.pop();
            if (!qQ.get(QQ)) {
              qQ.set(QQ, !0), DQ.push(FQ[QQ]);
              for (const oQ of FQ[QQ]) {
                const QQ = LQ.get(oQ);
                if (!QQ) return;
                for (const FQ of QQ) qQ.get(FQ) || wQ.push(FQ)
              }
            }
          }
        };
      for (let oQ = 0; oQ < wQ; oQ++) qQ.get(oQ) || kQ(oQ);
      let vQ = 0;
      for (const oQ of DQ) QQ[vQ++] = oQ[0], QQ[vQ++] = oQ[1], QQ[vQ++] = oQ[2]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);