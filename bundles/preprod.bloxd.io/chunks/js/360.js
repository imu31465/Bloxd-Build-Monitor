export const id = 360;
export const ids = [360];
export const modules = {
  42831: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return Math.floor(QQ / 8)
    }

    function qQ(QQ) {
      return 1 << QQ % 8
    }
    XQ.d(WQ, {
      OptimizeIndices: () => zQ
    });
    class TQ {
      constructor(QQ) {
        this.size = QQ, this._byteArray = new Uint8Array(Math.ceil(this.size / 8))
      }
      get(QQ) {
        if (QQ >= this.size) throw new RangeError("Bit index out of range");
        const WQ = wQ(QQ),
          XQ = qQ(QQ);
        return 0 !== (this._byteArray[WQ] & XQ)
      }
      set(QQ, WQ) {
        if (QQ >= this.size) throw new RangeError("Bit index out of range");
        const XQ = wQ(QQ),
          TQ = qQ(QQ);
        WQ ? this._byteArray[XQ] |= TQ : this._byteArray[XQ] &= ~TQ
      }
    }

    function zQ(QQ) {
      const WQ = [],
        XQ = QQ.length / 3;
      for (let TQ = 0; TQ < XQ; TQ++) WQ.push([QQ[3 * TQ], QQ[3 * TQ + 1], QQ[3 * TQ + 2]]);
      const wQ = new Map;
      for (let TQ = 0; TQ < WQ.length; TQ++) {
        const QQ = WQ[TQ];
        for (const WQ of QQ) {
          let QQ = wQ.get(WQ);
          QQ || wQ.set(WQ, QQ = []), QQ.push(TQ)
        }
      }
      const qQ = new TQ(XQ),
        zQ = [],
        sQ = QQ => {
          const XQ = [QQ];
          for (; XQ.length > 0;) {
            const QQ = XQ.pop();
            if (!qQ.get(QQ)) {
              qQ.set(QQ, !0), zQ.push(WQ[QQ]);
              for (const TQ of WQ[QQ]) {
                const QQ = wQ.get(TQ);
                if (!QQ) return;
                for (const WQ of QQ) qQ.get(WQ) || XQ.push(WQ)
              }
            }
          }
        };
      for (let TQ = 0; TQ < XQ; TQ++) qQ.get(TQ) || sQ(TQ);
      let FQ = 0;
      for (const TQ of zQ) QQ[FQ++] = TQ[0], QQ[FQ++] = TQ[1], QQ[FQ++] = TQ[2]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);