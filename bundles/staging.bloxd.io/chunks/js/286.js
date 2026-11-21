export const id = 286;
export const ids = [286];
export const modules = {
  40695: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => MF,
      e: () => UQ,
      ChangeSet: () => NQ,
      h: () => rF,
      j: () => fQ,
      n: () => TF,
      r: () => JQ,
      t: () => IQ,
      w: () => qF,
      B: () => fF,
      z: () => VF,
      D: () => zF,
      H: () => cF,
      L: () => BQ,
      P: () => AQ,
      S: () => CF,
      T: () => RQ,
      U: () => sQ,
      W: () => KF,
      X: () => Qw,
      $: () => WQ,
      db: () => Fw,
      eb: () => OQ
    });
    let LQ = [],
      qQ = [];

    function oQ(QQ) {
      if (QQ < 768) return !1;
      for (let FQ = 0, wQ = LQ.length;;) {
        let oQ = FQ + wQ >> 1;
        if (QQ < LQ[oQ]) wQ = oQ;
        else {
          if (!(QQ >= qQ[oQ])) return !0;
          FQ = oQ + 1
        }
        if (FQ == wQ) return !1
      }
    }

    function DQ(QQ) {
      return QQ >= 127462 && QQ <= 127487
    }(() => {
      let QQ = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((QQ => QQ ? parseInt(QQ, 36) : 1));
      for (let FQ = 0, wQ = 0; FQ < QQ.length; FQ++)(FQ % 2 ? qQ : LQ).push(wQ += QQ[FQ])
    })();
    const kQ = 8205;

    function vQ(QQ, FQ) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? mQ : uQ)(QQ, FQ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function mQ(QQ, FQ, wQ) {
      if (FQ == QQ.length) return FQ;
      FQ && bQ(QQ.charCodeAt(FQ)) && YQ(QQ.charCodeAt(FQ - 1)) && FQ--;
      let LQ = HQ(QQ, FQ);
      for (FQ += xQ(LQ); FQ < QQ.length;) {
        let qQ = HQ(QQ, FQ);
        if (LQ == kQ || qQ == kQ || wQ && oQ(qQ)) FQ += xQ(qQ), LQ = qQ;
        else {
          if (!DQ(qQ)) break;
          {
            let wQ = 0,
              LQ = FQ - 2;
            for (; LQ >= 0 && DQ(HQ(QQ, LQ));) wQ++, LQ -= 2;
            if (wQ % 2 == 0) break;
            FQ += 2
          }
        }
      }
      return FQ
    }

    function uQ(QQ, FQ, wQ) {
      for (; FQ > 0;) {
        let LQ = mQ(QQ, FQ - 2, wQ);
        if (LQ < FQ) return LQ;
        FQ--
      }
      return 0
    }

    function HQ(QQ, FQ) {
      let wQ = QQ.charCodeAt(FQ);
      if (!YQ(wQ) || FQ + 1 == QQ.length) return wQ;
      let LQ = QQ.charCodeAt(FQ + 1);
      return bQ(LQ) ? LQ - 56320 + (wQ - 55296 << 10) + 65536 : wQ
    }

    function bQ(QQ) {
      return QQ >= 56320 && QQ < 57344
    }

    function YQ(QQ) {
      return QQ >= 55296 && QQ < 56320
    }

    function xQ(QQ) {
      return QQ < 65536 ? 1 : 2
    }
    class AQ {
      lineAt(QQ) {
        if (QQ < 0 || QQ > this.length) throw new RangeError(`Invalid position ${QQ} in document of length ${this.length}`);
        return this.lineInner(QQ, !1, 1, 0)
      }
      line(QQ) {
        if (QQ < 1 || QQ > this.lines) throw new RangeError(`Invalid line number ${QQ} in ${this.lines}-line document`);
        return this.lineInner(QQ, !0, 1, 0)
      }
      replace(QQ, FQ, wQ) {
        [QQ, FQ] = iQ(this, QQ, FQ);
        let LQ = [];
        return this.decompose(0, QQ, LQ, 2), wQ.length && wQ.decompose(0, wQ.length, LQ, 3), this.decompose(FQ, this.length, LQ, 1), eQ.from(LQ, this.length - (FQ - QQ) + wQ.length)
      }
      append(QQ) {
        return this.replace(this.length, this.length, QQ)
      }
      slice(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [QQ, FQ] = iQ(this, QQ, FQ);
        let wQ = [];
        return this.decompose(QQ, FQ, wQ, 0), eQ.from(wQ, FQ - QQ)
      }
      eq(QQ) {
        if (QQ == this) return !0;
        if (QQ.length != this.length || QQ.lines != this.lines) return !1;
        let FQ = this.scanIdentical(QQ, 1),
          wQ = this.length - this.scanIdentical(QQ, -1),
          LQ = new pQ(this),
          qQ = new pQ(QQ);
        for (let oQ = FQ, DQ = FQ;;) {
          if (LQ.next(oQ), qQ.next(oQ), oQ = 0, LQ.lineBreak != qQ.lineBreak || LQ.done != qQ.done || LQ.value != qQ.value) return !1;
          if (DQ += LQ.value.length, LQ.done || DQ >= wQ) return !0
        }
      }
      iter() {
        return new pQ(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new cQ(this, QQ, FQ)
      }
      iterLines(QQ, FQ) {
        let wQ;
        if (null == QQ) wQ = this.iter();
        else {
          null == FQ && (FQ = this.lines + 1);
          let LQ = this.line(QQ).from;
          wQ = this.iterRange(LQ, Math.max(LQ, FQ == this.lines + 1 ? this.length : FQ <= 1 ? 0 : this.line(FQ - 1).to))
        }
        return new CQ(wQ)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let QQ = [];
        return this.flatten(QQ), QQ
      }
      constructor() {}
      static of (QQ) {
        if (0 == QQ.length) throw new RangeError("A document must have at least one line");
        return 1 != QQ.length || QQ[0] ? QQ.length <= 32 ? new tQ(QQ) : eQ.from(tQ.split(QQ, [])) : AQ.empty
      }
    }
    class tQ extends AQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(QQ) {
          let FQ = -1;
          for (let wQ of QQ) FQ += wQ.length + 1;
          return FQ
        }(QQ);
        super(), this.text = QQ, this.length = FQ
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(QQ, FQ, wQ, LQ) {
        for (let qQ = 0;; qQ++) {
          let oQ = this.text[qQ],
            DQ = LQ + oQ.length;
          if ((FQ ? wQ : DQ) >= QQ) return new SQ(LQ, DQ, wQ, oQ);
          LQ = DQ + 1, wQ++
        }
      }
      decompose(QQ, FQ, wQ, LQ) {
        let qQ = QQ <= 0 && FQ >= this.length ? this : new tQ(GQ(this.text, QQ, FQ), Math.min(FQ, this.length) - Math.max(0, QQ));
        if (1 & LQ) {
          let QQ = wQ.pop(),
            FQ = MQ(qQ.text, QQ.text.slice(), 0, qQ.length);
          if (FQ.length <= 32) wQ.push(new tQ(FQ, QQ.length + qQ.length));
          else {
            let QQ = FQ.length >> 1;
            wQ.push(new tQ(FQ.slice(0, QQ)), new tQ(FQ.slice(QQ)))
          }
        } else wQ.push(qQ)
      }
      replace(QQ, FQ, wQ) {
        if (!(wQ instanceof tQ)) return super.replace(QQ, FQ, wQ);
        [QQ, FQ] = iQ(this, QQ, FQ);
        let LQ = MQ(this.text, MQ(wQ.text, GQ(this.text, 0, QQ)), FQ),
          qQ = this.length + wQ.length - (FQ - QQ);
        return LQ.length <= 32 ? new tQ(LQ, qQ) : eQ.from(tQ.split(LQ, []), qQ)
      }
      sliceString(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [QQ, FQ] = iQ(this, QQ, FQ);
        let LQ = "";
        for (let qQ = 0, oQ = 0; qQ <= FQ && oQ < this.text.length; oQ++) {
          let DQ = this.text[oQ],
            kQ = qQ + DQ.length;
          qQ > QQ && oQ && (LQ += wQ), QQ < kQ && FQ > qQ && (LQ += DQ.slice(Math.max(0, QQ - qQ), FQ - qQ)), qQ = kQ + 1
        }
        return LQ
      }
      flatten(QQ) {
        for (let FQ of this.text) QQ.push(FQ)
      }
      scanIdentical() {
        return 0
      }
      static split(QQ, FQ) {
        let wQ = [],
          LQ = -1;
        for (let qQ of QQ) wQ.push(qQ), LQ += qQ.length + 1, 32 == wQ.length && (FQ.push(new tQ(wQ, LQ)), wQ = [], LQ = -1);
        return LQ > -1 && FQ.push(new tQ(wQ, LQ)), FQ
      }
    }
    class eQ extends AQ {
      constructor(QQ, FQ) {
        super(), this.children = QQ, this.length = FQ, this.lines = 0;
        for (let wQ of QQ) this.lines += wQ.lines
      }
      lineInner(QQ, FQ, wQ, LQ) {
        for (let qQ = 0;; qQ++) {
          let oQ = this.children[qQ],
            DQ = LQ + oQ.length,
            kQ = wQ + oQ.lines - 1;
          if ((FQ ? kQ : DQ) >= QQ) return oQ.lineInner(QQ, FQ, wQ, LQ);
          LQ = DQ + 1, wQ = kQ + 1
        }
      }
      decompose(QQ, FQ, wQ, LQ) {
        for (let qQ = 0, oQ = 0; oQ <= FQ && qQ < this.children.length; qQ++) {
          let DQ = this.children[qQ],
            kQ = oQ + DQ.length;
          if (QQ <= kQ && FQ >= oQ) {
            let qQ = LQ & ((oQ <= QQ ? 1 : 0) | (kQ >= FQ ? 2 : 0));
            oQ >= QQ && kQ <= FQ && !qQ ? wQ.push(DQ) : DQ.decompose(QQ - oQ, FQ - oQ, wQ, qQ)
          }
          oQ = kQ + 1
        }
      }
      replace(QQ, FQ, wQ) {
        if ([QQ, FQ] = iQ(this, QQ, FQ), wQ.lines < this.lines)
          for (let LQ = 0, qQ = 0; LQ < this.children.length; LQ++) {
            let oQ = this.children[LQ],
              DQ = qQ + oQ.length;
            if (QQ >= qQ && FQ <= DQ) {
              let kQ = oQ.replace(QQ - qQ, FQ - qQ, wQ),
                vQ = this.lines - oQ.lines + kQ.lines;
              if (kQ.lines < vQ >> 4 && kQ.lines > vQ >> 6) {
                let qQ = this.children.slice();
                return qQ[LQ] = kQ, new eQ(qQ, this.length - (FQ - QQ) + wQ.length)
              }
              return super.replace(qQ, DQ, kQ)
            }
            qQ = DQ + 1
          }
        return super.replace(QQ, FQ, wQ)
      }
      sliceString(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [QQ, FQ] = iQ(this, QQ, FQ);
        let LQ = "";
        for (let qQ = 0, oQ = 0; qQ < this.children.length && oQ <= FQ; qQ++) {
          let DQ = this.children[qQ],
            kQ = oQ + DQ.length;
          oQ > QQ && qQ && (LQ += wQ), QQ < kQ && FQ > oQ && (LQ += DQ.sliceString(QQ - oQ, FQ - oQ, wQ)), oQ = kQ + 1
        }
        return LQ
      }
      flatten(QQ) {
        for (let FQ of this.children) FQ.flatten(QQ)
      }
      scanIdentical(QQ, FQ) {
        if (!(QQ instanceof eQ)) return 0;
        let wQ = 0,
          [LQ, qQ, oQ, DQ] = FQ > 0 ? [0, 0, this.children.length, QQ.children.length] : [this.children.length - 1, QQ.children.length - 1, -1, -1];
        for (;; LQ += FQ, qQ += FQ) {
          if (LQ == oQ || qQ == DQ) return wQ;
          let kQ = this.children[LQ],
            vQ = QQ.children[qQ];
          if (kQ != vQ) return wQ + kQ.scanIdentical(vQ, FQ);
          wQ += kQ.length + 1
        }
      }
      static from(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.reduce(((QQ, FQ) => QQ + FQ.length + 1), -1),
          wQ = 0;
        for (let bQ of QQ) wQ += bQ.lines;
        if (wQ < 32) {
          let wQ = [];
          for (let FQ of QQ) FQ.flatten(wQ);
          return new tQ(wQ, FQ)
        }
        let LQ = Math.max(32, wQ >> 5),
          qQ = LQ << 1,
          oQ = LQ >> 1,
          DQ = [],
          kQ = 0,
          vQ = -1,
          mQ = [];

        function uQ(QQ) {
          let FQ;
          if (QQ.lines > qQ && QQ instanceof eQ)
            for (let wQ of QQ.children) uQ(wQ);
          else QQ.lines > oQ && (kQ > oQ || !kQ) ? (HQ(), DQ.push(QQ)) : QQ instanceof tQ && kQ && (FQ = mQ[mQ.length - 1]) instanceof tQ && QQ.lines + FQ.lines <= 32 ? (kQ += QQ.lines, vQ += QQ.length + 1, mQ[mQ.length - 1] = new tQ(FQ.text.concat(QQ.text), FQ.length + 1 + QQ.length)) : (kQ + QQ.lines > LQ && HQ(), kQ += QQ.lines, vQ += QQ.length + 1, mQ.push(QQ))
        }

        function HQ() {
          0 != kQ && (DQ.push(1 == mQ.length ? mQ[0] : eQ.from(mQ, vQ)), vQ = -1, kQ = mQ.length = 0)
        }
        for (let bQ of QQ) uQ(bQ);
        return HQ(), 1 == DQ.length ? DQ[0] : new eQ(DQ, FQ)
      }
    }

    function MQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let qQ = 0, oQ = 0, DQ = !0; oQ < QQ.length && qQ <= LQ; oQ++) {
        let kQ = QQ[oQ],
          vQ = qQ + kQ.length;
        vQ >= wQ && (vQ > LQ && (kQ = kQ.slice(0, LQ - qQ)), qQ < wQ && (kQ = kQ.slice(wQ - qQ)), DQ ? (FQ[FQ.length - 1] += kQ, DQ = !1) : FQ.push(kQ)), qQ = vQ + 1
      }
      return FQ
    }

    function GQ(QQ, FQ, wQ) {
      return MQ(QQ, [""], FQ, wQ)
    }
    AQ.empty = new tQ([""], 0);
    class pQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = FQ, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [QQ], this.offsets = [FQ > 0 ? 1 : (QQ instanceof tQ ? QQ.text.length : QQ.children.length) << 1]
      }
      nextInner(QQ, FQ) {
        for (this.done = this.lineBreak = !1;;) {
          let wQ = this.nodes.length - 1,
            LQ = this.nodes[wQ],
            qQ = this.offsets[wQ],
            oQ = qQ >> 1,
            DQ = LQ instanceof tQ ? LQ.text.length : LQ.children.length;
          if (oQ == (FQ > 0 ? DQ : 0)) {
            if (0 == wQ) return this.done = !0, this.value = "", this;
            FQ > 0 && this.offsets[wQ - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & qQ) == (FQ > 0 ? 0 : 1)) {
            if (this.offsets[wQ] += FQ, 0 == QQ) return this.lineBreak = !0, this.value = "\n", this;
            QQ--
          } else if (LQ instanceof tQ) {
            let qQ = LQ.text[oQ + (FQ < 0 ? -1 : 0)];
            if (this.offsets[wQ] += FQ, qQ.length > Math.max(0, QQ)) return this.value = 0 == QQ ? qQ : FQ > 0 ? qQ.slice(QQ) : qQ.slice(0, qQ.length - QQ), this;
            QQ -= qQ.length
          } else {
            let qQ = LQ.children[oQ + (FQ < 0 ? -1 : 0)];
            QQ > qQ.length ? (QQ -= qQ.length, this.offsets[wQ] += FQ) : (FQ < 0 && this.offsets[wQ]--, this.nodes.push(qQ), this.offsets.push(FQ > 0 ? 1 : (qQ instanceof tQ ? qQ.text.length : qQ.children.length) << 1))
          }
        }
      }
      next() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return QQ < 0 && (this.nextInner(-QQ, -this.dir), QQ = this.value.length), this.nextInner(QQ, this.dir)
      }
    }
    class cQ {
      constructor(QQ, FQ, wQ) {
        this.value = "", this.done = !1, this.cursor = new pQ(QQ, FQ > wQ ? -1 : 1), this.pos = FQ > wQ ? QQ.length : 0, this.from = Math.min(FQ, wQ), this.to = Math.max(FQ, wQ)
      }
      nextInner(QQ, FQ) {
        if (FQ < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        QQ += Math.max(0, FQ < 0 ? this.pos - this.to : this.from - this.pos);
        let wQ = FQ < 0 ? this.pos - this.from : this.to - this.pos;
        QQ > wQ && (QQ = wQ), wQ -= QQ;
        let {
          value: LQ
        } = this.cursor.next(QQ);
        return this.pos += (LQ.length + QQ) * FQ, this.value = LQ.length <= wQ ? LQ : FQ < 0 ? LQ.slice(LQ.length - wQ) : LQ.slice(0, wQ), this.done = !this.value, this
      }
      next() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return QQ < 0 ? QQ = Math.max(QQ, this.from - this.pos) : QQ > 0 && (QQ = Math.min(QQ, this.to - this.pos)), this.nextInner(QQ, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class CQ {
      constructor(QQ) {
        this.inner = QQ, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: FQ,
            lineBreak: wQ,
            value: LQ
          } = this.inner.next(QQ);
        return FQ && this.afterBreak ? (this.value = "", this.afterBreak = !1) : FQ ? (this.done = !0, this.value = "") : wQ ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = LQ, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (AQ.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, pQ.prototype[Symbol.iterator] = cQ.prototype[Symbol.iterator] = CQ.prototype[Symbol.iterator] = function() {
      return this
    });
    class SQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.from = QQ, this.to = FQ, this.number = wQ, this.text = LQ
      }
      get length() {
        return this.to - this.from
      }
    }

    function iQ(QQ, FQ, wQ) {
      return [FQ = Math.max(0, Math.min(QQ.length, FQ)), Math.max(FQ, Math.min(QQ.length, wQ))]
    }

    function WQ(QQ, FQ) {
      return vQ(QQ, FQ, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function RQ(QQ, FQ) {
      let wQ = QQ.charCodeAt(FQ);
      if (!((LQ = wQ) >= 55296 && LQ < 56320) || FQ + 1 == QQ.length) return wQ;
      var LQ;
      let qQ = QQ.charCodeAt(FQ + 1);
      return function(QQ) {
        return QQ >= 56320 && QQ < 57344
      }(qQ) ? qQ - 56320 + (wQ - 55296 << 10) + 65536 : wQ
    }

    function OQ(QQ) {
      return QQ <= 65535 ? String.fromCharCode(QQ) : (QQ -= 65536, String.fromCharCode(55296 + (QQ >> 10), 56320 + (1023 & QQ)))
    }

    function sQ(QQ) {
      return QQ < 65536 ? 1 : 2
    }
    const rQ = /\r\n?|\n/;
    var IQ = function(QQ) {
      return QQ[QQ.Simple = 0] = "Simple", QQ[QQ.TrackDel = 1] = "TrackDel", QQ[QQ.TrackBefore = 2] = "TrackBefore", QQ[QQ.TrackAfter = 3] = "TrackAfter", QQ
    }(IQ || (IQ = {}));
    class UQ {
      constructor(QQ) {
        this.sections = QQ
      }
      get length() {
        let QQ = 0;
        for (let FQ = 0; FQ < this.sections.length; FQ += 2) QQ += this.sections[FQ];
        return QQ
      }
      get newLength() {
        let QQ = 0;
        for (let FQ = 0; FQ < this.sections.length; FQ += 2) {
          let wQ = this.sections[FQ + 1];
          QQ += wQ < 0 ? this.sections[FQ] : wQ
        }
        return QQ
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(QQ) {
        for (let FQ = 0, wQ = 0, LQ = 0; FQ < this.sections.length;) {
          let qQ = this.sections[FQ++],
            oQ = this.sections[FQ++];
          oQ < 0 ? (QQ(wQ, LQ, qQ), LQ += qQ) : LQ += oQ, wQ += qQ
        }
      }
      iterChangedRanges(QQ) {
        zQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let QQ = [];
        for (let FQ = 0; FQ < this.sections.length;) {
          let wQ = this.sections[FQ++],
            LQ = this.sections[FQ++];
          LQ < 0 ? QQ.push(wQ, LQ) : QQ.push(LQ, wQ)
        }
        return new UQ(QQ)
      }
      composeDesc(QQ) {
        return this.empty ? QQ : QQ.empty ? this : jQ(this, QQ)
      }
      mapDesc(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return QQ.empty ? this : lQ(this, QQ, FQ)
      }
      mapPos(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : IQ.Simple,
          LQ = 0,
          qQ = 0;
        for (let oQ = 0; oQ < this.sections.length;) {
          let DQ = this.sections[oQ++],
            kQ = this.sections[oQ++],
            vQ = LQ + DQ;
          if (kQ < 0) {
            if (vQ > QQ) return qQ + (QQ - LQ);
            qQ += DQ
          } else {
            if (wQ != IQ.Simple && vQ >= QQ && (wQ == IQ.TrackDel && LQ < QQ && vQ > QQ || wQ == IQ.TrackBefore && LQ < QQ || wQ == IQ.TrackAfter && vQ > QQ)) return null;
            if (vQ > QQ || vQ == QQ && FQ < 0 && !DQ) return QQ == LQ || FQ < 0 ? qQ : qQ + kQ;
            qQ += kQ
          }
          LQ = vQ
        }
        if (QQ > LQ) throw new RangeError(`Position ${QQ} is out of range for changeset of length ${LQ}`);
        return qQ
      }
      touchesRange(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        for (let wQ = 0, LQ = 0; wQ < this.sections.length && LQ <= FQ;) {
          let qQ = LQ + this.sections[wQ++];
          if (this.sections[wQ++] >= 0 && LQ <= FQ && qQ >= QQ) return !(LQ < QQ && qQ > FQ) || "cover";
          LQ = qQ
        }
        return !1
      }
      toString() {
        let QQ = "";
        for (let FQ = 0; FQ < this.sections.length;) {
          let wQ = this.sections[FQ++],
            LQ = this.sections[FQ++];
          QQ += (QQ ? " " : "") + wQ + (LQ >= 0 ? ":" + LQ : "")
        }
        return QQ
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(QQ) {
        if (!Array.isArray(QQ) || QQ.length % 2 || QQ.some((QQ => "number" != typeof QQ))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new UQ(QQ)
      }
      static create(QQ) {
        return new UQ(QQ)
      }
    }
    class NQ extends UQ {
      constructor(QQ, FQ) {
        super(QQ), this.inserted = FQ
      }
      apply(QQ) {
        if (this.length != QQ.length) throw new RangeError("Applying change set to a document with the wrong length");
        return zQ(this, ((FQ, wQ, LQ, qQ, oQ) => QQ = QQ.replace(LQ, LQ + (wQ - FQ), oQ)), !1), QQ
      }
      mapDesc(QQ) {
        return lQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(QQ) {
        let FQ = this.sections.slice(),
          wQ = [];
        for (let LQ = 0, qQ = 0; LQ < FQ.length; LQ += 2) {
          let oQ = FQ[LQ],
            DQ = FQ[LQ + 1];
          if (DQ >= 0) {
            FQ[LQ] = DQ, FQ[LQ + 1] = oQ;
            let kQ = LQ >> 1;
            for (; wQ.length < kQ;) wQ.push(AQ.empty);
            wQ.push(oQ ? QQ.slice(qQ, qQ + oQ) : AQ.empty)
          }
          qQ += oQ
        }
        return new NQ(FQ, wQ)
      }
      compose(QQ) {
        return this.empty ? QQ : QQ.empty ? this : jQ(this, QQ, !0)
      }
      map(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return QQ.empty ? this : lQ(this, QQ, FQ, !0)
      }
      iterChanges(QQ) {
        zQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return UQ.create(this.sections)
      }
      filter(QQ) {
        let FQ = [],
          wQ = [],
          LQ = [],
          qQ = new aQ(this);
        QQ: for (let oQ = 0, DQ = 0;;) {
          let kQ = oQ == QQ.length ? 1e9 : QQ[oQ++];
          for (; DQ < kQ || DQ == kQ && 0 == qQ.len;) {
            if (qQ.done) break QQ;
            let QQ = Math.min(qQ.len, kQ - DQ);
            TQ(LQ, QQ, -1);
            let oQ = -1 == qQ.ins ? -1 : 0 == qQ.off ? qQ.ins : 0;
            TQ(FQ, QQ, oQ), oQ > 0 && KQ(wQ, FQ, qQ.text), qQ.forward(QQ), DQ += QQ
          }
          let vQ = QQ[oQ++];
          for (; DQ < vQ;) {
            if (qQ.done) break QQ;
            let QQ = Math.min(qQ.len, vQ - DQ);
            TQ(FQ, QQ, -1), TQ(LQ, QQ, -1 == qQ.ins ? -1 : 0 == qQ.off ? qQ.ins : 0), qQ.forward(QQ), DQ += QQ
          }
        }
        return {
          changes: new NQ(FQ, wQ),
          filtered: UQ.create(LQ)
        }
      }
      toJSON() {
        let QQ = [];
        for (let FQ = 0; FQ < this.sections.length; FQ += 2) {
          let wQ = this.sections[FQ],
            LQ = this.sections[FQ + 1];
          LQ < 0 ? QQ.push(wQ) : 0 == LQ ? QQ.push([wQ]) : QQ.push([wQ].concat(this.inserted[FQ >> 1].toJSON()))
        }
        return QQ
      }
      static of (QQ, FQ, wQ) {
        let LQ = [],
          qQ = [],
          oQ = 0,
          DQ = null;

        function kQ() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !LQ.length) return;
          oQ < FQ && TQ(LQ, FQ - oQ, -1);
          let QQ = new NQ(LQ, qQ);
          DQ = DQ ? DQ.compose(QQ.map(DQ)) : QQ, LQ = [], qQ = [], oQ = 0
        }
        return function QQ(vQ) {
          if (Array.isArray(vQ))
            for (let FQ of vQ) QQ(FQ);
          else if (vQ instanceof NQ) {
            if (vQ.length != FQ) throw new RangeError(`Mismatched change set length (got ${vQ.length}, expected ${FQ})`);
            kQ(), DQ = DQ ? DQ.compose(vQ.map(DQ)) : vQ
          } else {
            let {
              from: QQ,
              to: DQ = QQ,
              insert: mQ
            } = vQ;
            if (QQ > DQ || QQ < 0 || DQ > FQ) throw new RangeError(`Invalid change range ${QQ} to ${DQ} (in doc of length ${FQ})`);
            let uQ = mQ ? "string" == typeof mQ ? AQ.of(mQ.split(wQ || rQ)) : mQ : AQ.empty,
              HQ = uQ.length;
            if (QQ == DQ && 0 == HQ) return;
            QQ < oQ && kQ(), QQ > oQ && TQ(LQ, QQ - oQ, -1), TQ(LQ, DQ - QQ, HQ), KQ(qQ, LQ, uQ), oQ = DQ
          }
        }(QQ), kQ(!DQ), DQ
      }
      static empty(QQ) {
        return new NQ(QQ ? [QQ, -1] : [], [])
      }
      static fromJSON(QQ) {
        if (!Array.isArray(QQ)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let FQ = [],
          wQ = [];
        for (let LQ = 0; LQ < QQ.length; LQ++) {
          let qQ = QQ[LQ];
          if ("number" == typeof qQ) FQ.push(qQ, -1);
          else {
            if (!Array.isArray(qQ) || "number" != typeof qQ[0] || qQ.some(((QQ, FQ) => FQ && "string" != typeof QQ))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == qQ.length) FQ.push(qQ[0], 0);
            else {
              for (; wQ.length < LQ;) wQ.push(AQ.empty);
              wQ[LQ] = AQ.of(qQ.slice(1)), FQ.push(qQ[0], wQ[LQ].length)
            }
          }
        }
        return new NQ(FQ, wQ)
      }
      static createSet(QQ, FQ) {
        return new NQ(QQ, FQ)
      }
    }

    function TQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == FQ && wQ <= 0) return;
      let qQ = QQ.length - 2;
      qQ >= 0 && wQ <= 0 && wQ == QQ[qQ + 1] ? QQ[qQ] += FQ : qQ >= 0 && 0 == FQ && 0 == QQ[qQ] ? QQ[qQ + 1] += wQ : LQ ? (QQ[qQ] += FQ, QQ[qQ + 1] += wQ) : QQ.push(FQ, wQ)
    }

    function KQ(QQ, FQ, wQ) {
      if (0 == wQ.length) return;
      let LQ = FQ.length - 2 >> 1;
      if (LQ < QQ.length) QQ[QQ.length - 1] = QQ[QQ.length - 1].append(wQ);
      else {
        for (; QQ.length < LQ;) QQ.push(AQ.empty);
        QQ.push(wQ)
      }
    }

    function zQ(QQ, FQ, wQ) {
      let LQ = QQ.inserted;
      for (let qQ = 0, oQ = 0, DQ = 0; DQ < QQ.sections.length;) {
        let kQ = QQ.sections[DQ++],
          vQ = QQ.sections[DQ++];
        if (vQ < 0) qQ += kQ, oQ += kQ;
        else {
          let mQ = qQ,
            uQ = oQ,
            HQ = AQ.empty;
          for (; mQ += kQ, uQ += vQ, vQ && LQ && (HQ = HQ.append(LQ[DQ - 2 >> 1])), !(wQ || DQ == QQ.sections.length || QQ.sections[DQ + 1] < 0);) kQ = QQ.sections[DQ++], vQ = QQ.sections[DQ++];
          FQ(qQ, mQ, oQ, uQ, HQ), qQ = mQ, oQ = uQ
        }
      }
    }

    function lQ(QQ, FQ, wQ) {
      let LQ = [],
        qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        oQ = new aQ(QQ),
        DQ = new aQ(FQ),
        kQ = 0;
      for (let vQ = -1;;) {
        if (++kQ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (oQ.done && DQ.len || DQ.done && oQ.len) throw new Error("Mismatched change set lengths");
        if (-1 == oQ.ins && -1 == DQ.ins) {
          let QQ = Math.min(oQ.len, DQ.len);
          TQ(LQ, QQ, -1), oQ.forward(QQ), DQ.forward(QQ)
        } else if (DQ.ins >= 0 && (oQ.ins < 0 || vQ == oQ.i || 0 == oQ.off && (DQ.len < oQ.len || DQ.len == oQ.len && !wQ))) {
          let QQ = DQ.len;
          for (TQ(LQ, DQ.ins, -1); QQ;) {
            if (++kQ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let FQ = Math.min(oQ.len, QQ);
            oQ.ins >= 0 && vQ < oQ.i && oQ.len <= FQ && (TQ(LQ, 0, oQ.ins), qQ && KQ(qQ, LQ, oQ.text), vQ = oQ.i), oQ.forward(FQ), QQ -= FQ
          }
          DQ.next()
        } else {
          if (!(oQ.ins >= 0)) {
            if (oQ.done && DQ.done) return qQ ? NQ.createSet(LQ, qQ) : UQ.create(LQ);
            throw new Error("Mismatched change set lengths")
          } {
            let QQ = 0,
              FQ = oQ.len;
            for (; FQ;) {
              if (++kQ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == DQ.ins) {
                let wQ = Math.min(FQ, DQ.len);
                QQ += wQ, FQ -= wQ, DQ.forward(wQ)
              } else {
                if (!(0 == DQ.ins && DQ.len < FQ)) break;
                FQ -= DQ.len, DQ.next()
              }
            }
            TQ(LQ, QQ, vQ < oQ.i ? oQ.ins : 0), qQ && vQ < oQ.i && KQ(qQ, LQ, oQ.text), vQ = oQ.i, oQ.forward(oQ.len - FQ)
          }
        }
      }
    }

    function jQ(QQ, FQ) {
      let wQ = [],
        LQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        qQ = new aQ(QQ),
        oQ = new aQ(FQ),
        DQ = 0;
      for (let kQ = !1;;) {
        if (++DQ > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (qQ.done && oQ.done) return LQ ? NQ.createSet(wQ, LQ) : UQ.create(wQ);
        if (0 == qQ.ins) TQ(wQ, qQ.len, 0, kQ), qQ.next();
        else if (0 != oQ.len || oQ.done) {
          if (qQ.done || oQ.done) throw new Error("Mismatched change set lengths");
          {
            let QQ = Math.min(qQ.len2, oQ.len),
              FQ = wQ.length;
            if (-1 == qQ.ins) {
              let FQ = -1 == oQ.ins ? -1 : oQ.off ? 0 : oQ.ins;
              TQ(wQ, QQ, FQ, kQ), LQ && FQ && KQ(LQ, wQ, oQ.text)
            } else - 1 == oQ.ins ? (TQ(wQ, qQ.off ? 0 : qQ.len, QQ, kQ), LQ && KQ(LQ, wQ, qQ.textBit(QQ))) : (TQ(wQ, qQ.off ? 0 : qQ.len, oQ.off ? 0 : oQ.ins, kQ), LQ && !oQ.off && KQ(LQ, wQ, oQ.text));
            kQ = (qQ.ins > QQ || oQ.ins >= 0 && oQ.len > QQ) && (kQ || wQ.length > FQ), qQ.forward2(QQ), oQ.forward(QQ)
          }
        } else TQ(wQ, 0, oQ.ins, kQ), LQ && KQ(LQ, wQ, oQ.text), oQ.next()
      }
    }
    class aQ {
      constructor(QQ) {
        this.set = QQ, this.i = 0, this.next()
      }
      next() {
        let {
          sections: QQ
        } = this.set;
        this.i < QQ.length ? (this.len = QQ[this.i++], this.ins = QQ[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: QQ
        } = this.set, FQ = this.i - 2 >> 1;
        return FQ >= QQ.length ? AQ.empty : QQ[FQ]
      }
      textBit(QQ) {
        let {
          inserted: FQ
        } = this.set, wQ = this.i - 2 >> 1;
        return wQ >= FQ.length && !QQ ? AQ.empty : FQ[wQ].slice(this.off, null == QQ ? void 0 : this.off + QQ)
      }
      forward(QQ) {
        QQ == this.len ? this.next() : (this.len -= QQ, this.off += QQ)
      }
      forward2(QQ) {
        -1 == this.ins ? this.forward(QQ) : QQ == this.ins ? this.next() : (this.ins -= QQ, this.off += QQ)
      }
    }
    class XQ {
      constructor(QQ, FQ, wQ) {
        this.from = QQ, this.to = FQ, this.flags = wQ
      }
      get anchor() {
        return 32 & this.flags ? this.to : this.from
      }
      get head() {
        return 32 & this.flags ? this.from : this.to
      }
      get empty() {
        return this.from == this.to
      }
      get assoc() {
        return 8 & this.flags ? -1 : 16 & this.flags ? 1 : 0
      }
      get bidiLevel() {
        let QQ = 7 & this.flags;
        return 7 == QQ ? null : QQ
      }
      get goalColumn() {
        let QQ = this.flags >> 6;
        return 16777215 == QQ ? void 0 : QQ
      }
      map(QQ) {
        let FQ, wQ, LQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? FQ = wQ = QQ.mapPos(this.from, LQ) : (FQ = QQ.mapPos(this.from, 1), wQ = QQ.mapPos(this.to, -1)), FQ == this.from && wQ == this.to ? this : new XQ(FQ, wQ, this.flags)
      }
      extend(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (QQ <= this.anchor && FQ >= this.anchor) return fQ.range(QQ, FQ, void 0, void 0, wQ);
        let LQ = Math.abs(QQ - this.anchor) > Math.abs(FQ - this.anchor) ? QQ : FQ;
        return fQ.range(this.anchor, LQ, void 0, void 0, wQ)
      }
      eq(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == QQ.anchor && this.head == QQ.head && this.goalColumn == QQ.goalColumn && (!FQ || !this.empty || this.assoc == QQ.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(QQ) {
        if (!QQ || "number" != typeof QQ.anchor || "number" != typeof QQ.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return fQ.range(QQ.anchor, QQ.head)
      }
      static create(QQ, FQ, wQ) {
        return new XQ(QQ, FQ, wQ)
      }
    }
    class fQ {
      constructor(QQ, FQ) {
        this.PA = QQ, this.mainIndex = FQ
      }
      map(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return QQ.empty ? this : fQ.create(this.PA.map((wQ => wQ.map(QQ, FQ))), this.mainIndex)
      }
      eq(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.PA.length != QQ.PA.length || this.mainIndex != QQ.mainIndex) return !1;
        for (let wQ = 0; wQ < this.PA.length; wQ++)
          if (!this.PA[wQ].eq(QQ.PA[wQ], FQ)) return !1;
        return !0
      }
      get main() {
        return this.PA[this.mainIndex]
      }
      asSingle() {
        return 1 == this.PA.length ? this : new fQ([this.main], 0)
      }
      addRange(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return fQ.create([QQ].concat(this.PA), FQ ? 0 : this.mainIndex + 1)
      }
      replaceRange(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          wQ = this.PA.slice();
        return wQ[FQ] = QQ, fQ.create(wQ, this.mainIndex)
      }
      toJSON() {
        return {
          PA: this.PA.map((QQ => QQ.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(QQ) {
        if (!QQ || !Array.isArray(QQ.PA) || "number" != typeof QQ.main || QQ.main >= QQ.PA.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new fQ(QQ.PA.map((QQ => XQ.fromJSON(QQ))), QQ.main)
      }
      static single(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        return new fQ([fQ.range(QQ, FQ)], 0)
      }
      static create(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == QQ.length) throw new RangeError("A selection needs at least one range");
        for (let wQ = 0, LQ = 0; LQ < QQ.length; LQ++) {
          let qQ = QQ[LQ];
          if (qQ.empty ? qQ.from <= wQ : qQ.from < wQ) return fQ.normalized(QQ.slice(), FQ);
          wQ = qQ.to
        }
        return new fQ(QQ, FQ)
      }
      static cursor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        return XQ.create(QQ, QQ, (0 == FQ ? 0 : FQ < 0 ? 8 : 16) | (null == wQ ? 7 : Math.min(6, wQ)) | (null !== LQ && void 0 !== LQ ? LQ : 16777215) << 6)
      }
      static range(QQ, FQ, wQ, LQ, qQ) {
        let oQ = (null !== wQ && void 0 !== wQ ? wQ : 16777215) << 6 | (null == LQ ? 7 : Math.min(6, LQ));
        return qQ || QQ == FQ || (qQ = FQ < QQ ? 1 : -1), FQ < QQ ? XQ.create(FQ, QQ, 48 | oQ) : XQ.create(QQ, FQ, (qQ ? qQ < 0 ? 8 : 16 : 0) | oQ)
      }
      static normalized(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = QQ[FQ];
        QQ.sort(((QQ, FQ) => QQ.from - FQ.from)), FQ = QQ.indexOf(wQ);
        for (let LQ = 1; LQ < QQ.length; LQ++) {
          let wQ = QQ[LQ],
            qQ = QQ[LQ - 1];
          if (wQ.empty ? wQ.from <= qQ.to : wQ.from < qQ.to) {
            let oQ = qQ.from,
              DQ = Math.max(wQ.to, qQ.to);
            LQ <= FQ && FQ--, QQ.splice(--LQ, 2, wQ.anchor > wQ.head ? fQ.range(DQ, oQ) : fQ.range(oQ, DQ))
          }
        }
        return new fQ(QQ, FQ)
      }
    }

    function VQ(QQ, FQ) {
      for (let wQ of QQ.PA)
        if (wQ.to > FQ) throw new RangeError("Selection points outside of document")
    }
    let hQ = 0;
    class JQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.combine = QQ, this.compareInput = FQ, this.compare = wQ, this.isStatic = LQ, this.id = hQ++, this.default = QQ([]), this.extensions = "function" == typeof qQ ? qQ(this) : qQ
      }
      get reader() {
        return this
      }
      static define() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new JQ(QQ.combine || (QQ => QQ), QQ.compareInput || ((QQ, FQ) => QQ === FQ), QQ.compare || (QQ.combine ? (QQ, FQ) => QQ === FQ : EQ), !!QQ.static, QQ.enables)
      }
      of(QQ) {
        return new nQ([], this, 0, QQ)
      }
      compute(QQ, FQ) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new nQ(QQ, this, 1, FQ)
      }
      computeN(QQ, FQ) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new nQ(QQ, this, 2, FQ)
      }
      from(QQ, FQ) {
        return FQ || (FQ = QQ => QQ), this.compute([QQ], (wQ => FQ(wQ.field(QQ))))
      }
    }

    function EQ(QQ, FQ) {
      return QQ == FQ || QQ.length == FQ.length && QQ.every(((QQ, wQ) => QQ === FQ[wQ]))
    }
    class nQ {
      constructor(QQ, FQ, wQ, LQ) {
        this.dependencies = QQ, this.facet = FQ, this.type = wQ, this.value = LQ, this.id = hQ++
      }
      dynamicSlot(QQ) {
        var FQ;
        let wQ = this.value,
          LQ = this.facet.compareInput,
          qQ = this.id,
          oQ = QQ[qQ] >> 1,
          DQ = 2 == this.type,
          kQ = !1,
          vQ = !1,
          mQ = [];
        for (let uQ of this.dependencies) "doc" == uQ ? kQ = !0 : "selection" == uQ ? vQ = !0 : 0 == (1 & (null !== (FQ = QQ[uQ.id]) && void 0 !== FQ ? FQ : 1)) && mQ.push(QQ[uQ.id]);
        return {
          create: QQ => (QQ.values[oQ] = wQ(QQ), 1),
          update(QQ, FQ) {
            if (kQ && FQ.docChanged || vQ && (FQ.docChanged || FQ.selection) || PQ(QQ, mQ)) {
              let FQ = wQ(QQ);
              if (DQ ? !gQ(FQ, QQ.values[oQ], LQ) : !LQ(FQ, QQ.values[oQ])) return QQ.values[oQ] = FQ, 1
            }
            return 0
          },
          reconfigure: (QQ, FQ) => {
            let kQ, vQ = FQ.config.address[qQ];
            if (null != vQ) {
              let qQ = uF(FQ, vQ);
              if (this.dependencies.every((wQ => wQ instanceof JQ ? FQ.facet(wQ) === QQ.facet(wQ) : !(wQ instanceof BQ) || FQ.field(wQ, !1) == QQ.field(wQ, !1))) || (DQ ? gQ(kQ = wQ(QQ), qQ, LQ) : LQ(kQ = wQ(QQ), qQ))) return QQ.values[oQ] = qQ, 0
            } else kQ = wQ(QQ);
            return QQ.values[oQ] = kQ, 1
          }
        }
      }
    }

    function gQ(QQ, FQ, wQ) {
      if (QQ.length != FQ.length) return !1;
      for (let LQ = 0; LQ < QQ.length; LQ++)
        if (!wQ(QQ[LQ], FQ[LQ])) return !1;
      return !0
    }

    function PQ(QQ, FQ) {
      let wQ = !1;
      for (let LQ of FQ) 1 & mF(QQ, LQ) && (wQ = !0);
      return wQ
    }

    function ZQ(QQ, FQ, wQ) {
      let LQ = wQ.map((FQ => QQ[FQ.id])),
        qQ = wQ.map((QQ => QQ.type)),
        oQ = LQ.filter((QQ => !(1 & QQ))),
        DQ = QQ[FQ.id] >> 1;

      function kQ(QQ) {
        let wQ = [];
        for (let FQ = 0; FQ < LQ.length; FQ++) {
          let oQ = uF(QQ, LQ[FQ]);
          if (2 == qQ[FQ])
            for (let QQ of oQ) wQ.push(QQ);
          else wQ.push(oQ)
        }
        return FQ.combine(wQ)
      }
      return {
        create(QQ) {
          for (let FQ of LQ) mF(QQ, FQ);
          return QQ.values[DQ] = kQ(QQ), 1
        },
        update(QQ, wQ) {
          if (!PQ(QQ, oQ)) return 0;
          let LQ = kQ(QQ);
          return FQ.compare(LQ, QQ.values[DQ]) ? 0 : (QQ.values[DQ] = LQ, 1)
        },
        reconfigure(QQ, qQ) {
          let oQ = PQ(QQ, LQ),
            vQ = qQ.config.facets[FQ.id],
            mQ = qQ.facet(FQ);
          if (vQ && !oQ && EQ(wQ, vQ)) return QQ.values[DQ] = mQ, 0;
          let uQ = kQ(QQ);
          return FQ.compare(uQ, mQ) ? (QQ.values[DQ] = mQ, 0) : (QQ.values[DQ] = uQ, 1)
        }
      }
    }
    const yQ = JQ.define({
      static: !0
    });
    class BQ {
      constructor(QQ, FQ, wQ, LQ, qQ) {
        this.id = QQ, this.createF = FQ, this.updateF = wQ, this.compareF = LQ, this.spec = qQ, this.provides = void 0
      }
      static define(QQ) {
        let FQ = new BQ(hQ++, QQ.create, QQ.update, QQ.compare || ((QQ, FQ) => QQ === FQ), QQ);
        return QQ.provide && (FQ.provides = QQ.provide(FQ)), FQ
      }
      create(QQ) {
        let FQ = QQ.facet(yQ).find((QQ => QQ.field == this));
        return ((null === FQ || void 0 === FQ ? void 0 : FQ.create) || this.createF)(QQ)
      }
      slot(QQ) {
        let FQ = QQ[this.id] >> 1;
        return {
          create: QQ => (QQ.values[FQ] = this.create(QQ), 1),
          update: (QQ, wQ) => {
            let LQ = QQ.values[FQ],
              qQ = this.updateF(LQ, wQ);
            return this.compareF(LQ, qQ) ? 0 : (QQ.values[FQ] = qQ, 1)
          },
          reconfigure: (QQ, wQ) => {
            let LQ, qQ = QQ.facet(yQ),
              oQ = wQ.facet(yQ);
            return (LQ = qQ.find((QQ => QQ.field == this))) && LQ != oQ.find((QQ => QQ.field == this)) ? (QQ.values[FQ] = LQ.create(QQ), 1) : null != wQ.config.address[this.id] ? (QQ.values[FQ] = wQ.field(this), 0) : (QQ.values[FQ] = this.create(QQ), 1)
          }
        }
      }
      init(QQ) {
        return [this, yQ.of({
          field: this,
          create: QQ
        })]
      }
      get extension() {
        return this
      }
    }
    const dQ = 4,
      QF = 3,
      FF = 2,
      wF = 1;

    function LF(QQ) {
      return FQ => new oF(FQ, QQ)
    }
    const qF = {
      highest: LF(0),
      high: LF(wF),
      default: LF(FF),
      low: LF(QF),
      lowest: LF(dQ)
    };
    class oF {
      constructor(QQ, FQ) {
        this.inner = QQ, this.prec = FQ
      }
    }
    class DF {
      of(QQ) {
        return new kF(this, QQ)
      }
      reconfigure(QQ) {
        return DF.reconfigure.of({
          compartment: this,
          extension: QQ
        })
      }
      get(QQ) {
        return QQ.config.compartments.get(this)
      }
    }
    class kF {
      constructor(QQ, FQ) {
        this.compartment = QQ, this.inner = FQ
      }
    }
    class vF {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        for (this.base = QQ, this.compartments = FQ, this.dynamicSlots = wQ, this.address = LQ, this.staticValues = qQ, this.facets = oQ, this.statusTemplate = []; this.statusTemplate.length < wQ.length;) this.statusTemplate.push(0)
      }
      staticFacet(QQ) {
        let FQ = this.address[QQ.id];
        return null == FQ ? QQ.default : this.staticValues[FQ >> 1]
      }
      static resolve(QQ, FQ, wQ) {
        let LQ = [],
          qQ = Object.create(null),
          oQ = new Map;
        for (let HQ of function(QQ, FQ, wQ) {
            let LQ = [
                [],
                [],
                [],
                [],
                []
              ],
              qQ = new Map;

            function oQ(QQ, DQ) {
              let kQ = qQ.get(QQ);
              if (null != kQ) {
                if (kQ <= DQ) return;
                let FQ = LQ[kQ].indexOf(QQ);
                FQ > -1 && LQ[kQ].splice(FQ, 1), QQ instanceof kF && wQ.delete(QQ.compartment)
              }
              if (qQ.set(QQ, DQ), Array.isArray(QQ))
                for (let FQ of QQ) oQ(FQ, DQ);
              else if (QQ instanceof kF) {
                if (wQ.has(QQ.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let LQ = FQ.get(QQ.compartment) || QQ.inner;
                wQ.set(QQ.compartment, LQ), oQ(LQ, DQ)
              } else if (QQ instanceof oF) oQ(QQ.inner, QQ.prec);
              else if (QQ instanceof BQ) LQ[DQ].push(QQ), QQ.provides && oQ(QQ.provides, DQ);
              else if (QQ instanceof nQ) LQ[DQ].push(QQ), QQ.facet.extensions && oQ(QQ.facet.extensions, FF);
              else {
                let FQ = QQ.extension;
                if (!FQ) throw new Error(`Unrecognized extension value in extension set (${QQ}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                oQ(FQ, DQ)
              }
            }
            return oQ(QQ, FF), LQ.reduce(((QQ, FQ) => QQ.concat(FQ)))
          }(QQ, FQ, oQ)) HQ instanceof BQ ? LQ.push(HQ) : (qQ[HQ.facet.id] || (qQ[HQ.facet.id] = [])).push(HQ);
        let DQ = Object.create(null),
          kQ = [],
          vQ = [];
        for (let HQ of LQ) DQ[HQ.id] = vQ.length << 1, vQ.push((QQ => HQ.slot(QQ)));
        let mQ = null === wQ || void 0 === wQ ? void 0 : wQ.config.facets;
        for (let HQ in qQ) {
          let QQ = qQ[HQ],
            FQ = QQ[0].facet,
            LQ = mQ && mQ[HQ] || [];
          if (QQ.every((QQ => 0 == QQ.type)))
            if (DQ[FQ.id] = kQ.length << 1 | 1, EQ(LQ, QQ)) kQ.push(wQ.facet(FQ));
            else {
              let LQ = FQ.combine(QQ.map((QQ => QQ.value)));
              kQ.push(wQ && FQ.compare(LQ, wQ.facet(FQ)) ? wQ.facet(FQ) : LQ)
            }
          else {
            for (let FQ of QQ) 0 == FQ.type ? (DQ[FQ.id] = kQ.length << 1 | 1, kQ.push(FQ.value)) : (DQ[FQ.id] = vQ.length << 1, vQ.push((QQ => FQ.dynamicSlot(QQ))));
            DQ[FQ.id] = vQ.length << 1, vQ.push((wQ => ZQ(wQ, FQ, QQ)))
          }
        }
        let uQ = vQ.map((QQ => QQ(DQ)));
        return new vF(QQ, oQ, uQ, DQ, kQ, qQ)
      }
    }

    function mF(QQ, FQ) {
      if (1 & FQ) return 2;
      let wQ = FQ >> 1,
        LQ = QQ.status[wQ];
      if (4 == LQ) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & LQ) return LQ;
      QQ.status[wQ] = 4;
      let qQ = QQ.computeSlot(QQ, QQ.config.dynamicSlots[wQ]);
      return QQ.status[wQ] = 2 | qQ
    }

    function uF(QQ, FQ) {
      return 1 & FQ ? QQ.config.staticValues[FQ >> 1] : QQ.values[FQ >> 1]
    }
    const HF = JQ.define(),
      bF = JQ.define({
        combine: QQ => QQ.some((QQ => QQ)),
        static: !0
      }),
      YF = JQ.define({
        combine: QQ => QQ.length ? QQ[0] : void 0,
        static: !0
      }),
      xF = JQ.define(),
      AF = JQ.define(),
      tF = JQ.define(),
      eF = JQ.define({
        combine: QQ => !!QQ.length && QQ[0]
      });
    class MF {
      constructor(QQ, FQ) {
        this.type = QQ, this.value = FQ
      }
      static define() {
        return new GF
      }
    }
    class GF {
      of(QQ) {
        return new MF(this, QQ)
      }
    }
    class pF {
      constructor(QQ) {
        this.map = QQ
      }
      of(QQ) {
        return new cF(this, QQ)
      }
    }
    class cF {
      constructor(QQ, FQ) {
        this.type = QQ, this.value = FQ
      }
      map(QQ) {
        let FQ = this.type.map(this.value, QQ);
        return void 0 === FQ ? void 0 : FQ == this.value ? this : new cF(this.type, FQ)
      }
      is(QQ) {
        return this.type == QQ
      }
      static define() {
        return new pF((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (QQ => QQ))
      }
      static mapEffects(QQ, FQ) {
        if (!QQ.length) return QQ;
        let wQ = [];
        for (let LQ of QQ) {
          let QQ = LQ.map(FQ);
          QQ && wQ.push(QQ)
        }
        return wQ
      }
    }
    cF.reconfigure = cF.define(), cF.appendConfig = cF.define();
    class CF {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.startState = QQ, this.changes = FQ, this.selection = wQ, this.effects = LQ, this.annotations = qQ, this.scrollIntoView = oQ, this._doc = null, this._state = null, wQ && VQ(wQ, FQ.newLength), qQ.some((QQ => QQ.type == CF.time)) || (this.annotations = qQ.concat(CF.time.of(Date.now())))
      }
      static create(QQ, FQ, wQ, LQ, qQ, oQ) {
        return new CF(QQ, FQ, wQ, LQ, qQ, oQ)
      }
      get newDoc() {
        return this._doc || (this._doc = this.changes.apply(this.startState.doc))
      }
      get newSelection() {
        return this.selection || this.startState.selection.map(this.changes)
      }
      get state() {
        return this._state || this.startState.applyTransaction(this), this._state
      }
      annotation(QQ) {
        for (let FQ of this.annotations)
          if (FQ.type == QQ) return FQ.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(QQ) {
        let FQ = this.annotation(CF.userEvent);
        return !(!FQ || !(FQ == QQ || FQ.length > QQ.length && FQ.slice(0, QQ.length) == QQ && "." == FQ[QQ.length]))
      }
    }

    function SF(QQ, FQ) {
      let wQ = [];
      for (let LQ = 0, qQ = 0;;) {
        let oQ, DQ;
        if (LQ < QQ.length && (qQ == FQ.length || FQ[qQ] >= QQ[LQ])) oQ = QQ[LQ++], DQ = QQ[LQ++];
        else {
          if (!(qQ < FQ.length)) return wQ;
          oQ = FQ[qQ++], DQ = FQ[qQ++]
        }!wQ.length || wQ[wQ.length - 1] < oQ ? wQ.push(oQ, DQ) : wQ[wQ.length - 1] < DQ && (wQ[wQ.length - 1] = DQ)
      }
    }

    function iF(QQ, FQ, wQ) {
      var LQ;
      let qQ, oQ, DQ;
      return wQ ? (qQ = FQ.changes, oQ = NQ.empty(FQ.changes.length), DQ = QQ.changes.compose(FQ.changes)) : (qQ = FQ.changes.map(QQ.changes), oQ = QQ.changes.mapDesc(FQ.changes, !0), DQ = QQ.changes.compose(qQ)), {
        changes: DQ,
        selection: FQ.selection ? FQ.selection.map(oQ) : null === (LQ = QQ.selection) || void 0 === LQ ? void 0 : LQ.map(qQ),
        effects: cF.mapEffects(QQ.effects, qQ).concat(cF.mapEffects(FQ.effects, oQ)),
        annotations: QQ.annotations.length ? QQ.annotations.concat(FQ.annotations) : FQ.annotations,
        scrollIntoView: QQ.scrollIntoView || FQ.scrollIntoView
      }
    }

    function WF(QQ, FQ, wQ) {
      let LQ = FQ.selection,
        qQ = sF(FQ.annotations);
      return FQ.userEvent && (qQ = qQ.concat(CF.userEvent.of(FQ.userEvent))), {
        changes: FQ.changes instanceof NQ ? FQ.changes : NQ.of(FQ.changes || [], wQ, QQ.facet(YF)),
        selection: LQ && (LQ instanceof fQ ? LQ : fQ.single(LQ.anchor, LQ.head)),
        effects: sF(FQ.effects),
        annotations: qQ,
        scrollIntoView: !!FQ.scrollIntoView
      }
    }

    function RF(QQ, FQ, wQ) {
      let LQ = WF(QQ, FQ.length ? FQ[0] : {}, QQ.doc.length);
      FQ.length && !1 === FQ[0].filter && (wQ = !1);
      for (let oQ = 1; oQ < FQ.length; oQ++) {
        !1 === FQ[oQ].filter && (wQ = !1);
        let qQ = !!FQ[oQ].sequential;
        LQ = iF(LQ, WF(QQ, FQ[oQ], qQ ? LQ.changes.newLength : QQ.doc.length), qQ)
      }
      let qQ = CF.create(QQ, LQ.changes, LQ.selection, LQ.effects, LQ.annotations, LQ.scrollIntoView);
      return function(QQ) {
        let FQ = QQ.startState,
          wQ = FQ.facet(tF),
          LQ = QQ;
        for (let qQ = wQ.length - 1; qQ >= 0; qQ--) {
          let oQ = wQ[qQ](QQ);
          oQ && Object.keys(oQ).length && (LQ = iF(LQ, WF(FQ, oQ, QQ.changes.newLength), !0))
        }
        return LQ == QQ ? QQ : CF.create(FQ, QQ.changes, QQ.selection, LQ.effects, LQ.annotations, LQ.scrollIntoView)
      }(wQ ? function(QQ) {
        let FQ = QQ.startState,
          wQ = !0;
        for (let qQ of FQ.facet(xF)) {
          let FQ = qQ(QQ);
          if (!1 === FQ) {
            wQ = !1;
            break
          }
          Array.isArray(FQ) && (wQ = !0 === wQ ? FQ : SF(wQ, FQ))
        }
        if (!0 !== wQ) {
          let LQ, qQ;
          if (!1 === wQ) qQ = QQ.changes.invertedDesc, LQ = NQ.empty(FQ.doc.length);
          else {
            let FQ = QQ.changes.filter(wQ);
            LQ = FQ.changes, qQ = FQ.filtered.mapDesc(FQ.changes).invertedDesc
          }
          QQ = CF.create(FQ, LQ, QQ.selection && QQ.selection.map(qQ), cF.mapEffects(QQ.effects, qQ), QQ.annotations, QQ.scrollIntoView)
        }
        let LQ = FQ.facet(AF);
        for (let qQ = LQ.length - 1; qQ >= 0; qQ--) {
          let wQ = LQ[qQ](QQ);
          QQ = wQ instanceof CF ? wQ : Array.isArray(wQ) && 1 == wQ.length && wQ[0] instanceof CF ? wQ[0] : RF(FQ, sF(wQ), !1)
        }
        return QQ
      }(qQ) : qQ)
    }
    CF.time = MF.define(), CF.userEvent = MF.define(), CF.addToHistory = MF.define(), CF.remote = MF.define();
    const OF = [];

    function sF(QQ) {
      return null == QQ ? OF : Array.isArray(QQ) ? QQ : [QQ]
    }
    var rF = function(QQ) {
      return QQ[QQ.Word = 0] = "Word", QQ[QQ.Space = 1] = "Space", QQ[QQ.Other = 2] = "Other", QQ
    }(rF || (rF = {}));
    const IF = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let UF;
    try {
      UF = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (ww) {}

    function NF(QQ) {
      return FQ => {
        if (!/\S/.test(FQ)) return rF.Space;
        if (function(QQ) {
            if (UF) return UF.test(QQ);
            for (let FQ = 0; FQ < QQ.length; FQ++) {
              let wQ = QQ[FQ];
              if (/\w/.test(wQ) || wQ > "\x80" && (wQ.toUpperCase() != wQ.toLowerCase() || IF.test(wQ))) return !0
            }
            return !1
          }(FQ)) return rF.Word;
        for (let wQ = 0; wQ < QQ.length; wQ++)
          if (FQ.indexOf(QQ[wQ]) > -1) return rF.Word;
        return rF.Other
      }
    }
    class TF {
      constructor(QQ, FQ, wQ, LQ, qQ, oQ) {
        this.config = QQ, this.doc = FQ, this.selection = wQ, this.values = LQ, this.status = QQ.statusTemplate.slice(), this.computeSlot = qQ, oQ && (oQ._state = this);
        for (let DQ = 0; DQ < this.config.dynamicSlots.length; DQ++) mF(this, DQ << 1);
        this.computeSlot = null
      }
      field(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          wQ = this.config.address[QQ.id];
        if (null != wQ) return mF(this, wQ), uF(this, wQ);
        if (FQ) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        return RF(this, FQ, !0)
      }
      applyTransaction(QQ) {
        let FQ, wQ = this.config,
          {
            base: LQ,
            compartments: qQ
          } = wQ;
        for (let DQ of QQ.effects) DQ.is(DF.reconfigure) ? (wQ && (qQ = new Map, wQ.compartments.forEach(((QQ, FQ) => qQ.set(FQ, QQ))), wQ = null), qQ.set(DQ.value.compartment, DQ.value.extension)) : DQ.is(cF.reconfigure) ? (wQ = null, LQ = DQ.value) : DQ.is(cF.appendConfig) && (wQ = null, LQ = sF(LQ).concat(DQ.value));
        if (wQ) FQ = QQ.startState.values.slice();
        else {
          wQ = vF.resolve(LQ, qQ, this), FQ = new TF(wQ, this.doc, this.selection, wQ.dynamicSlots.map((() => null)), ((QQ, FQ) => FQ.reconfigure(QQ, this)), null).values
        }
        let oQ = QQ.startState.facet(bF) ? QQ.newSelection : QQ.newSelection.asSingle();
        new TF(wQ, QQ.newDoc, oQ, FQ, ((FQ, wQ) => wQ.update(FQ, QQ)), QQ)
      }
      replaceSelection(QQ) {
        return "string" == typeof QQ && (QQ = this.toText(QQ)), this.changeByRange((FQ => ({
          changes: {
            from: FQ.from,
            to: FQ.to,
            insert: QQ
          },
          range: fQ.cursor(FQ.from + QQ.length)
        })))
      }
      changeByRange(QQ) {
        let FQ = this.selection,
          wQ = QQ(FQ.PA[0]),
          LQ = this.changes(wQ.changes),
          qQ = [wQ.range],
          oQ = sF(wQ.effects);
        for (let DQ = 1; DQ < FQ.PA.length; DQ++) {
          let wQ = QQ(FQ.PA[DQ]),
            kQ = this.changes(wQ.changes),
            vQ = kQ.map(LQ);
          for (let QQ = 0; QQ < DQ; QQ++) qQ[QQ] = qQ[QQ].map(vQ);
          let mQ = LQ.mapDesc(kQ, !0);
          qQ.push(wQ.range.map(mQ)), LQ = LQ.compose(vQ), oQ = cF.mapEffects(oQ, vQ).concat(cF.mapEffects(sF(wQ.effects), mQ))
        }
        return {
          changes: LQ,
          selection: fQ.create(qQ, FQ.mainIndex),
          effects: oQ
        }
      }
      changes() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return QQ instanceof NQ ? QQ : NQ.of(QQ, this.doc.length, this.facet(TF.lineSeparator))
      }
      toText(QQ) {
        return AQ.of(QQ.split(this.facet(TF.lineSeparator) || rQ))
      }
      sliceDoc() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(QQ, FQ, this.lineBreak)
      }
      facet(QQ) {
        let FQ = this.config.address[QQ.id];
        return null == FQ ? QQ.default : (mF(this, FQ), uF(this, FQ))
      }
      toJSON(QQ) {
        let FQ = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (QQ)
          for (let wQ in QQ) {
            let LQ = QQ[wQ];
            LQ instanceof BQ && null != this.config.address[LQ.id] && (FQ[wQ] = LQ.spec.toJSON(this.field(QQ[wQ]), this))
          }
        return FQ
      }
      static fromJSON(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        if (!QQ || "string" != typeof QQ.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let LQ = [];
        if (wQ)
          for (let qQ in wQ)
            if (Object.prototype.hasOwnProperty.call(QQ, qQ)) {
              let FQ = wQ[qQ],
                oQ = QQ[qQ];
              LQ.push(FQ.init((QQ => FQ.spec.fromJSON(oQ, QQ))))
            } return TF.create({
          doc: QQ.doc,
          selection: fQ.fromJSON(QQ.selection),
          extensions: FQ.extensions ? LQ.concat([FQ.extensions]) : LQ
        })
      }
      static create() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          FQ = vF.resolve(QQ.extensions || [], new Map),
          wQ = QQ.doc instanceof AQ ? QQ.doc : AQ.of((QQ.doc || "").split(FQ.staticFacet(TF.lineSeparator) || rQ)),
          LQ = QQ.selection ? QQ.selection instanceof fQ ? QQ.selection : fQ.single(QQ.selection.anchor, QQ.selection.head) : fQ.single(0);
        return VQ(LQ, wQ.length), FQ.staticFacet(bF) || (LQ = LQ.asSingle()), new TF(FQ, wQ, LQ, FQ.dynamicSlots.map((() => null)), ((QQ, FQ) => FQ.create(QQ)), null)
      }
      get tabSize() {
        return this.facet(TF.tabSize)
      }
      get lineBreak() {
        return this.facet(TF.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(eF)
      }
      phrase(QQ) {
        for (var FQ = arguments.length, wQ = new Array(FQ > 1 ? FQ - 1 : 0), LQ = 1; LQ < FQ; LQ++) wQ[LQ - 1] = arguments[LQ];
        for (let qQ of this.facet(TF.phrases))
          if (Object.prototype.hasOwnProperty.call(qQ, QQ)) {
            QQ = qQ[QQ];
            break
          } return wQ.length && (QQ = QQ.replace(/\$(\$|\d*)/g, ((QQ, FQ) => {
          if ("$" == FQ) return "$";
          let LQ = +(FQ || 1);
          return !LQ || LQ > wQ.length ? QQ : wQ[LQ - 1]
        }))), QQ
      }
      languageDataAt(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          LQ = [];
        for (let qQ of this.facet(HF))
          for (let oQ of qQ(this, FQ, wQ)) Object.prototype.hasOwnProperty.call(oQ, QQ) && LQ.push(oQ[QQ]);
        return LQ
      }
      charCategorizer(QQ) {
        let FQ = this.languageDataAt("wordChars", QQ);
        return NF(FQ.length ? FQ[0] : "")
      }
      wordAt(QQ) {
        let {
          text: FQ,
          from: wQ,
          length: LQ
        } = this.doc.lineAt(QQ), qQ = this.charCategorizer(QQ), oQ = QQ - wQ, DQ = QQ - wQ;
        for (; oQ > 0;) {
          let QQ = WQ(FQ, oQ, !1);
          if (qQ(FQ.slice(QQ, oQ)) != rF.Word) break;
          oQ = QQ
        }
        for (; DQ < LQ;) {
          let QQ = WQ(FQ, DQ);
          if (qQ(FQ.slice(DQ, QQ)) != rF.Word) break;
          DQ = QQ
        }
        return oQ == DQ ? null : fQ.range(oQ + wQ, DQ + wQ)
      }
    }

    function KF(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        LQ = {};
      for (let qQ of QQ)
        for (let QQ of Object.keys(qQ)) {
          let FQ = qQ[QQ],
            oQ = LQ[QQ];
          if (void 0 === oQ) LQ[QQ] = FQ;
          else if (oQ === FQ || void 0 === FQ);
          else {
            if (!Object.hasOwnProperty.call(wQ, QQ)) throw new Error("Config merge conflict for field " + QQ);
            LQ[QQ] = wQ[QQ](oQ, FQ)
          }
        }
      for (let qQ in FQ) void 0 === LQ[qQ] && (LQ[qQ] = FQ[qQ]);
      return LQ
    }
    TF.allowMultipleSelections = bF, TF.tabSize = JQ.define({
      combine: QQ => QQ.length ? QQ[0] : 4
    }), TF.lineSeparator = YF, TF.readOnly = eF, TF.phrases = JQ.define({
      compare(QQ, FQ) {
        let wQ = Object.keys(QQ),
          LQ = Object.keys(FQ);
        return wQ.length == LQ.length && wQ.every((wQ => QQ[wQ] == FQ[wQ]))
      }
    }), TF.languageData = HF, TF.changeFilter = xF, TF.transactionFilter = AF, TF.transactionExtender = tF, DF.reconfigure = cF.define();
    class zF {
      eq(QQ) {
        return this == QQ
      }
      range(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        return jF.create(QQ, FQ, this)
      }
    }

    function lF(QQ, FQ) {
      return QQ == FQ || QQ.constructor == FQ.constructor && QQ.eq(FQ)
    }
    zF.prototype.startSide = zF.prototype.endSide = 0, zF.prototype.point = !1, zF.prototype.mapMode = IQ.TrackDel;
    class jF {
      constructor(QQ, FQ, wQ) {
        this.from = QQ, this.to = FQ, this.value = wQ
      }
      static create(QQ, FQ, wQ) {
        return new jF(QQ, FQ, wQ)
      }
    }

    function aF(QQ, FQ) {
      return QQ.from - FQ.from || QQ.value.startSide - FQ.value.startSide
    }
    class XF {
      constructor(QQ, FQ, wQ, LQ) {
        this.from = QQ, this.to = FQ, this.value = wQ, this.NLQ = LQ
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = wQ ? this.to : this.from;
        for (let oQ = LQ, DQ = qQ.length;;) {
          if (oQ == DQ) return oQ;
          let LQ = oQ + DQ >> 1,
            kQ = qQ[LQ] - QQ || (wQ ? this.value[LQ].endSide : this.value[LQ].startSide) - FQ;
          if (LQ == oQ) return kQ >= 0 ? oQ : DQ;
          kQ >= 0 ? DQ = LQ : oQ = LQ + 1
        }
      }
      between(QQ, FQ, wQ, LQ) {
        for (let qQ = this.findIndex(FQ, -1e9, !0), oQ = this.findIndex(wQ, 1e9, !1, qQ); qQ < oQ; qQ++)
          if (!1 === LQ(this.from[qQ] + QQ, this.to[qQ] + QQ, this.value[qQ])) return !1
      }
      map(QQ, FQ) {
        let wQ = [],
          LQ = [],
          qQ = [],
          oQ = -1,
          DQ = -1;
        for (let kQ = 0; kQ < this.value.length; kQ++) {
          let vQ, mQ, uQ = this.value[kQ],
            HQ = this.from[kQ] + QQ,
            bQ = this.to[kQ] + QQ;
          if (HQ == bQ) {
            let QQ = FQ.mapPos(HQ, uQ.startSide, uQ.mapMode);
            if (null == QQ) continue;
            if (vQ = mQ = QQ, uQ.startSide != uQ.endSide && (mQ = FQ.mapPos(HQ, uQ.endSide), mQ < vQ)) continue
          } else if (vQ = FQ.mapPos(HQ, uQ.startSide), mQ = FQ.mapPos(bQ, uQ.endSide), vQ > mQ || vQ == mQ && uQ.startSide > 0 && uQ.endSide <= 0) continue;
          (mQ - vQ || uQ.endSide - uQ.startSide) < 0 || (oQ < 0 && (oQ = vQ), uQ.point && (DQ = Math.max(DQ, mQ - vQ)), wQ.push(uQ), LQ.push(vQ - oQ), qQ.push(mQ - oQ))
        }
        return {
          mapped: wQ.length ? new XF(LQ, qQ, wQ, DQ) : null,
          pos: oQ
        }
      }
    }
    class fF {
      constructor(QQ, FQ, wQ, LQ) {
        this.chunkPos = QQ, this.chunk = FQ, this.nextLayer = wQ, this.NLQ = LQ
      }
      static create(QQ, FQ, wQ, LQ) {
        return new fF(QQ, FQ, wQ, LQ)
      }
      get length() {
        let QQ = this.chunk.length - 1;
        return QQ < 0 ? 0 : Math.max(this.chunkEnd(QQ), this.nextLayer.length)
      }
      get size() {
        if (this.BY) return 0;
        let QQ = this.nextLayer.size;
        for (let FQ of this.chunk) QQ += FQ.value.length;
        return QQ
      }
      chunkEnd(QQ) {
        return this.chunkPos[QQ] + this.chunk[QQ].length
      }
      update(QQ) {
        let {
          add: FQ = [],
          sort: wQ = !1,
          filterFrom: LQ = 0,
          filterTo: qQ = this.length
        } = QQ, oQ = QQ.filter;
        if (0 == FQ.length && !oQ) return this;
        if (wQ && (FQ = FQ.slice().sort(aF)), this.BY) return FQ.length ? fF.of(FQ) : this;
        let DQ = new JF(this, null, -1).goto(0),
          kQ = 0,
          vQ = [],
          mQ = new VF;
        for (; DQ.value || kQ < FQ.length;)
          if (kQ < FQ.length && (DQ.from - FQ[kQ].from || DQ.startSide - FQ[kQ].value.startSide) >= 0) {
            let QQ = FQ[kQ++];
            mQ.addInner(QQ.from, QQ.to, QQ.value) || vQ.push(QQ)
          } else 1 == DQ.rangeIndex && DQ.chunkIndex < this.chunk.length && (kQ == FQ.length || this.chunkEnd(DQ.chunkIndex) < FQ[kQ].from) && (!oQ || LQ > this.chunkEnd(DQ.chunkIndex) || qQ < this.chunkPos[DQ.chunkIndex]) && mQ.addChunk(this.chunkPos[DQ.chunkIndex], this.chunk[DQ.chunkIndex]) ? DQ.nextChunk() : ((!oQ || LQ > DQ.to || qQ < DQ.from || oQ(DQ.from, DQ.to, DQ.value)) && (mQ.addInner(DQ.from, DQ.to, DQ.value) || vQ.push(jF.create(DQ.from, DQ.to, DQ.value))), DQ.next());
        return mQ.finishInner(this.nextLayer.BY && !vQ.length ? fF.empty : this.nextLayer.update({
          add: vQ,
          filter: oQ,
          filterFrom: LQ,
          filterTo: qQ
        }))
      }
      map(QQ) {
        if (QQ.empty || this.BY) return this;
        let FQ = [],
          wQ = [],
          LQ = -1;
        for (let oQ = 0; oQ < this.chunk.length; oQ++) {
          let qQ = this.chunkPos[oQ],
            DQ = this.chunk[oQ],
            kQ = QQ.touchesRange(qQ, qQ + DQ.length);
          if (!1 === kQ) LQ = Math.max(LQ, DQ.NLQ), FQ.push(DQ), wQ.push(QQ.mapPos(qQ));
          else if (!0 === kQ) {
            let {
              mapped: oQ,
              pos: kQ
            } = DQ.map(qQ, QQ);
            oQ && (LQ = Math.max(LQ, oQ.NLQ), FQ.push(oQ), wQ.push(kQ))
          }
        }
        let qQ = this.nextLayer.map(QQ);
        return 0 == FQ.length ? qQ : new fF(wQ, FQ, qQ || fF.empty, LQ)
      }
      between(QQ, FQ, wQ) {
        if (!this.BY) {
          for (let LQ = 0; LQ < this.chunk.length; LQ++) {
            let qQ = this.chunkPos[LQ],
              oQ = this.chunk[LQ];
            if (FQ >= qQ && QQ <= qQ + oQ.length && !1 === oQ.between(qQ, QQ - qQ, FQ - qQ, wQ)) return
          }
          this.nextLayer.between(QQ, FQ, wQ)
        }
      }
      iter() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return EF.from([this]).goto(QQ)
      }
      get BY() {
        return this.nextLayer == this
      }
      static iter(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return EF.from(QQ).goto(FQ)
      }
      static compare(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          oQ = QQ.filter((QQ => QQ.NLQ > 0 || !QQ.BY && QQ.NLQ >= qQ)),
          DQ = FQ.filter((QQ => QQ.NLQ > 0 || !QQ.BY && QQ.NLQ >= qQ)),
          kQ = hF(oQ, DQ, wQ),
          vQ = new gF(oQ, kQ, qQ),
          mQ = new gF(DQ, kQ, qQ);
        wQ.iterGaps(((QQ, FQ, wQ) => PF(vQ, QQ, mQ, FQ, wQ, LQ))), wQ.empty && 0 == wQ.length && PF(vQ, 0, mQ, 0, 0, LQ)
      }
      static eq(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        null == LQ && (LQ = 999999999);
        let qQ = QQ.filter((QQ => !QQ.BY && FQ.indexOf(QQ) < 0)),
          oQ = FQ.filter((FQ => !FQ.BY && QQ.indexOf(FQ) < 0));
        if (qQ.length != oQ.length) return !1;
        if (!qQ.length) return !0;
        let DQ = hF(qQ, oQ),
          kQ = new gF(qQ, DQ, 0).goto(wQ),
          vQ = new gF(oQ, DQ, 0).goto(wQ);
        for (;;) {
          if (kQ.to != vQ.to || !ZF(kQ.active, vQ.active) || kQ.point && (!vQ.point || !lF(kQ.point, vQ.point))) return !1;
          if (kQ.to > LQ) return !0;
          kQ.next(), vQ.next()
        }
      }
      static spans(QQ, FQ, wQ, LQ) {
        let qQ = new gF(QQ, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(FQ),
          oQ = FQ,
          DQ = qQ.openStart;
        for (;;) {
          let QQ = Math.min(qQ.to, wQ);
          if (qQ.point) {
            let wQ = qQ.activeForPoint(qQ.to),
              kQ = qQ.pointFrom < FQ ? wQ.length + 1 : qQ.point.startSide < 0 ? wQ.length : Math.min(wQ.length, DQ);
            LQ.point(oQ, QQ, qQ.point, wQ, kQ, qQ.pointRank), DQ = Math.min(qQ.openEnd(QQ), wQ.length)
          } else QQ > oQ && (LQ.span(oQ, QQ, qQ.active, DQ), DQ = qQ.openEnd(QQ));
          if (qQ.to > wQ) return DQ + (qQ.point && qQ.to > wQ ? 1 : 0);
          oQ = qQ.to, qQ.next()
        }
      }
      static of (QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = new VF;
        for (let LQ of QQ instanceof jF ? [QQ] : FQ ? function(QQ) {
            if (QQ.length > 1)
              for (let FQ = QQ[0], wQ = 1; wQ < QQ.length; wQ++) {
                let LQ = QQ[wQ];
                if (aF(FQ, LQ) > 0) return QQ.slice().sort(aF);
                FQ = LQ
              }
            return QQ
          }(QQ) : QQ) wQ.add(LQ.from, LQ.to, LQ.value);
        return wQ.finish()
      }
      static join(QQ) {
        if (!QQ.length) return fF.empty;
        let FQ = QQ[QQ.length - 1];
        for (let wQ = QQ.length - 2; wQ >= 0; wQ--)
          for (let LQ = QQ[wQ]; LQ != fF.empty; LQ = LQ.nextLayer) FQ = new fF(LQ.chunkPos, LQ.chunk, FQ, Math.max(LQ.NLQ, FQ.NLQ));
        return FQ
      }
    }
    fF.empty = new fF([], [], null, -1), fF.empty.nextLayer = fF.empty;
    class VF {
      finishChunk(QQ) {
        this.chunks.push(new XF(this.from, this.to, this.value, this.NLQ)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.NLQ), this.NLQ = -1, QQ && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.NLQ = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(QQ, FQ, wQ) {
        this.addInner(QQ, FQ, wQ) || (this.nextLayer || (this.nextLayer = new VF)).add(QQ, FQ, wQ)
      }
      addInner(QQ, FQ, wQ) {
        let LQ = QQ - this.lastTo || wQ.startSide - this.last.endSide;
        if (LQ <= 0 && (QQ - this.lastFrom || wQ.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(LQ < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = QQ), this.from.push(QQ - this.chunkStart), this.to.push(FQ - this.chunkStart), this.last = wQ, this.lastFrom = QQ, this.lastTo = FQ, this.value.push(wQ), wQ.point && (this.NLQ = Math.max(this.NLQ, FQ - QQ)), !0)
      }
      addChunk(QQ, FQ) {
        if ((QQ - this.lastTo || FQ.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, FQ.NLQ), this.chunks.push(FQ), this.chunkPos.push(QQ);
        let wQ = FQ.value.length - 1;
        return this.last = FQ.value[wQ], this.lastFrom = FQ.from[wQ] + QQ, this.lastTo = FQ.to[wQ] + QQ, !0
      }
      finish() {
        return this.finishInner(fF.empty)
      }
      finishInner(QQ) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return QQ;
        let FQ = fF.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(QQ) : QQ, this.setMaxPoint);
        return this.from = null, FQ
      }
    }

    function hF(QQ, FQ, wQ) {
      let LQ = new Map;
      for (let oQ of QQ)
        for (let QQ = 0; QQ < oQ.chunk.length; QQ++) oQ.chunk[QQ].NLQ <= 0 && LQ.set(oQ.chunk[QQ], oQ.chunkPos[QQ]);
      let qQ = new Set;
      for (let oQ of FQ)
        for (let QQ = 0; QQ < oQ.chunk.length; QQ++) {
          let FQ = LQ.get(oQ.chunk[QQ]);
          null == FQ || (wQ ? wQ.mapPos(FQ) : FQ) != oQ.chunkPos[QQ] || (null === wQ || void 0 === wQ ? void 0 : wQ.touchesRange(FQ, FQ + oQ.chunk[QQ].length)) || qQ.add(oQ.chunk[QQ])
        }
      return qQ
    }
    class JF {
      constructor(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = QQ, this.skip = FQ, this.TLQ = wQ, this.rank = LQ
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(QQ, FQ, !1), this
      }
      gotoInner(QQ, FQ, wQ) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let FQ = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(FQ) || this.layer.chunkEnd(this.chunkIndex) < QQ || FQ.NLQ < this.TLQ)) break;
          this.chunkIndex++, wQ = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let LQ = this.layer.chunk[this.chunkIndex].findIndex(QQ - this.layer.chunkPos[this.chunkIndex], FQ, !0);
          (!wQ || this.rangeIndex < LQ) && this.setRangeIndex(LQ)
        }
        this.next()
      }
      forward(QQ, FQ) {
        (this.to - QQ || this.endSide - FQ) < 0 && this.gotoInner(QQ, FQ, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let QQ = this.layer.chunkPos[this.chunkIndex],
              FQ = this.layer.chunk[this.chunkIndex],
              wQ = QQ + FQ.from[this.rangeIndex];
            if (this.from = wQ, this.to = QQ + FQ.to[this.rangeIndex], this.value = FQ.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.TLQ < 0 || this.value.point && this.to - this.from >= this.TLQ) break
          }
        }
      }
      setRangeIndex(QQ) {
        if (QQ == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = QQ
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(QQ) {
        return this.from - QQ.from || this.startSide - QQ.startSide || this.rank - QQ.rank || this.to - QQ.to || this.endSide - QQ.endSide
      }
    }
    class EF {
      constructor(QQ) {
        this.heap = QQ
      }
      static from(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          LQ = [];
        for (let qQ = 0; qQ < QQ.length; qQ++)
          for (let oQ = QQ[qQ]; !oQ.BY; oQ = oQ.nextLayer) oQ.NLQ >= wQ && LQ.push(new JF(oQ, FQ, wQ, qQ));
        return 1 == LQ.length ? LQ[0] : new EF(LQ)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let wQ of this.heap) wQ.goto(QQ, FQ);
        for (let wQ = this.heap.length >> 1; wQ >= 0; wQ--) nF(this.heap, wQ);
        return this.next(), this
      }
      forward(QQ, FQ) {
        for (let wQ of this.heap) wQ.forward(QQ, FQ);
        for (let wQ = this.heap.length >> 1; wQ >= 0; wQ--) nF(this.heap, wQ);
        (this.to - QQ || this.value.endSide - FQ) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let QQ = this.heap[0];
          this.from = QQ.from, this.to = QQ.to, this.value = QQ.value, this.rank = QQ.rank, QQ.value && QQ.next(), nF(this.heap, 0)
        }
      }
    }

    function nF(QQ, FQ) {
      for (let wQ = QQ[FQ];;) {
        let LQ = 1 + (FQ << 1);
        if (LQ >= QQ.length) break;
        let qQ = QQ[LQ];
        if (LQ + 1 < QQ.length && qQ.compare(QQ[LQ + 1]) >= 0 && (qQ = QQ[LQ + 1], LQ++), wQ.compare(qQ) < 0) break;
        QQ[LQ] = wQ, QQ[FQ] = qQ, FQ = LQ
      }
    }
    class gF {
      constructor(QQ, FQ, wQ) {
        this.TLQ = wQ, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = EF.from(QQ, FQ, wQ)
      }
      goto(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(QQ, FQ), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = QQ, this.endSide = FQ, this.openStart = -1, this.next(), this
      }
      forward(QQ, FQ) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - QQ || this.active[this.minActive].endSide - FQ) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(QQ, FQ)
      }
      removeActive(QQ) {
        yF(this.active, QQ), yF(this.activeTo, QQ), yF(this.activeRank, QQ), this.minActive = dF(this.active, this.activeTo)
      }
      addActive(QQ) {
        let FQ = 0,
          {
            value: wQ,
            to: LQ,
            rank: qQ
          } = this.cursor;
        for (; FQ < this.activeRank.length && (qQ - this.activeRank[FQ] || LQ - this.activeTo[FQ]) > 0;) FQ++;
        BF(this.active, FQ, wQ), BF(this.activeTo, FQ, LQ), BF(this.activeRank, FQ, qQ), QQ && BF(QQ, FQ, this.cursor.from), this.minActive = dF(this.active, this.activeTo)
      }
      next() {
        let QQ = this.to,
          FQ = this.point;
        this.point = null;
        let wQ = this.openStart < 0 ? [] : null;
        for (;;) {
          let LQ = this.minActive;
          if (LQ > -1 && (this.activeTo[LQ] - this.cursor.from || this.active[LQ].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[LQ] > QQ) {
              this.to = this.activeTo[LQ], this.endSide = this.active[LQ].endSide;
              break
            }
            this.removeActive(LQ), wQ && yF(wQ, LQ)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > QQ) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let QQ = this.cursor.value;
              if (QQ.point) {
                if (!(FQ && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = QQ, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = QQ.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(wQ), this.cursor.next()
            }
          }
        }
        if (wQ) {
          this.openStart = 0;
          for (let FQ = wQ.length - 1; FQ >= 0 && wQ[FQ] < QQ; FQ--) this.openStart++
        }
      }
      activeForPoint(QQ) {
        if (!this.active.length) return this.active;
        let FQ = [];
        for (let wQ = this.active.length - 1; wQ >= 0 && !(this.activeRank[wQ] < this.pointRank); wQ--)(this.activeTo[wQ] > QQ || this.activeTo[wQ] == QQ && this.active[wQ].endSide >= this.point.endSide) && FQ.push(this.active[wQ]);
        return FQ.reverse()
      }
      openEnd(QQ) {
        let FQ = 0;
        for (let wQ = this.activeTo.length - 1; wQ >= 0 && this.activeTo[wQ] > QQ; wQ--) FQ++;
        return FQ
      }
    }

    function PF(QQ, FQ, wQ, LQ, qQ, oQ) {
      QQ.goto(FQ), wQ.goto(LQ);
      let DQ = LQ + qQ,
        kQ = LQ,
        vQ = LQ - FQ,
        mQ = !!oQ.boundChange;
      for (let uQ = !1;;) {
        let FQ = QQ.to + vQ - wQ.to,
          LQ = FQ || QQ.endSide - wQ.endSide,
          qQ = LQ < 0 ? QQ.to + vQ : wQ.to,
          HQ = Math.min(qQ, DQ);
        if (QQ.point || wQ.point ? (QQ.point && wQ.point && lF(QQ.point, wQ.point) && ZF(QQ.activeForPoint(QQ.to), wQ.activeForPoint(wQ.to)) || oQ.comparePoint(kQ, HQ, QQ.point, wQ.point), uQ = !1) : (uQ && oQ.boundChange(kQ), HQ > kQ && !ZF(QQ.active, wQ.active) && oQ.compareRange(kQ, HQ, QQ.active, wQ.active), mQ && HQ < DQ && (FQ || QQ.openEnd(qQ) != wQ.openEnd(qQ)) && (uQ = !0)), qQ > DQ) break;
        kQ = qQ, LQ <= 0 && QQ.next(), LQ >= 0 && wQ.next()
      }
    }

    function ZF(QQ, FQ) {
      if (QQ.length != FQ.length) return !1;
      for (let wQ = 0; wQ < QQ.length; wQ++)
        if (QQ[wQ] != FQ[wQ] && !lF(QQ[wQ], FQ[wQ])) return !1;
      return !0
    }

    function yF(QQ, FQ) {
      for (let wQ = FQ, LQ = QQ.length - 1; wQ < LQ; wQ++) QQ[wQ] = QQ[wQ + 1];
      QQ.pop()
    }

    function BF(QQ, FQ, wQ) {
      for (let LQ = QQ.length - 1; LQ >= FQ; LQ--) QQ[LQ + 1] = QQ[LQ];
      QQ[FQ] = wQ
    }

    function dF(QQ, FQ) {
      let wQ = -1,
        LQ = 1e9;
      for (let qQ = 0; qQ < FQ.length; qQ++)(FQ[qQ] - LQ || QQ[qQ].endSide - QQ[wQ].endSide) < 0 && (wQ = qQ, LQ = FQ[qQ]);
      return wQ
    }

    function Qw(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.length,
        LQ = 0;
      for (let qQ = 0; qQ < wQ && qQ < QQ.length;) 9 == QQ.charCodeAt(qQ) ? (LQ += FQ - LQ % FQ, qQ++) : (LQ++, qQ = WQ(QQ, qQ));
      return LQ
    }

    function Fw(QQ, FQ, wQ, LQ) {
      for (let qQ = 0, oQ = 0;;) {
        if (oQ >= FQ) return qQ;
        if (qQ == QQ.length) break;
        oQ += 9 == QQ.charCodeAt(qQ) ? wQ - oQ % wQ : 1, qQ = WQ(QQ, qQ)
      }
      return !0 === LQ ? -1 : QQ.length
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);