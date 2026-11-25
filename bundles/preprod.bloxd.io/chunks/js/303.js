export const id = 303;
export const ids = [303];
export const modules = {
  41550: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => DW,
      d: () => AQ,
      ChangeSet: () => RQ,
      g: () => iW,
      k: () => tQ,
      l: () => EW,
      o: () => nQ,
      s: () => cQ,
      t: () => qW,
      A: () => tW,
      x: () => oW,
      C: () => uW,
      G: () => UW,
      I: () => mQ,
      M: () => BQ,
      O: () => bW,
      P: () => aQ,
      Q: () => hQ,
      U: () => CW,
      V: () => QX,
      W: () => HQ,
      X: () => WX,
      Z: () => lQ
    });
    let wQ = [],
      qQ = [];

    function TQ(QQ) {
      if (QQ < 768) return !1;
      for (let WQ = 0, XQ = wQ.length;;) {
        let TQ = WQ + XQ >> 1;
        if (QQ < wQ[TQ]) XQ = TQ;
        else {
          if (!(QQ >= qQ[TQ])) return !0;
          WQ = TQ + 1
        }
        if (WQ == XQ) return !1
      }
    }

    function zQ(QQ) {
      return QQ >= 127462 && QQ <= 127487
    }(() => {
      let QQ = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((QQ => QQ ? parseInt(QQ, 36) : 1));
      for (let WQ = 0, XQ = 0; WQ < QQ.length; WQ++)(WQ % 2 ? qQ : wQ).push(XQ += QQ[WQ])
    })();
    const sQ = 8205;

    function FQ(QQ, WQ) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? PQ : gQ)(QQ, WQ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function PQ(QQ, WQ, XQ) {
      if (WQ == QQ.length) return WQ;
      WQ && rQ(QQ.charCodeAt(WQ)) && IQ(QQ.charCodeAt(WQ - 1)) && WQ--;
      let wQ = JQ(QQ, WQ);
      for (WQ += jQ(wQ); WQ < QQ.length;) {
        let qQ = JQ(QQ, WQ);
        if (wQ == sQ || qQ == sQ || XQ && TQ(qQ)) WQ += jQ(qQ), wQ = qQ;
        else {
          if (!zQ(qQ)) break;
          {
            let XQ = 0,
              wQ = WQ - 2;
            for (; wQ >= 0 && zQ(JQ(QQ, wQ));) XQ++, wQ -= 2;
            if (XQ % 2 == 0) break;
            WQ += 2
          }
        }
      }
      return WQ
    }

    function gQ(QQ, WQ, XQ) {
      for (; WQ > 0;) {
        let wQ = PQ(QQ, WQ - 2, XQ);
        if (wQ < WQ) return wQ;
        WQ--
      }
      return 0
    }

    function JQ(QQ, WQ) {
      let XQ = QQ.charCodeAt(WQ);
      if (!IQ(XQ) || WQ + 1 == QQ.length) return XQ;
      let wQ = QQ.charCodeAt(WQ + 1);
      return rQ(wQ) ? wQ - 56320 + (XQ - 55296 << 10) + 65536 : XQ
    }

    function rQ(QQ) {
      return QQ >= 56320 && QQ < 57344
    }

    function IQ(QQ) {
      return QQ >= 55296 && QQ < 56320
    }

    function jQ(QQ) {
      return QQ < 65536 ? 1 : 2
    }
    class BQ {
      lineAt(QQ) {
        if (QQ < 0 || QQ > this.length) throw new RangeError(`Invalid position ${QQ} in document of length ${this.length}`);
        return this.lineInner(QQ, !1, 1, 0)
      }
      line(QQ) {
        if (QQ < 1 || QQ > this.lines) throw new RangeError(`Invalid line number ${QQ} in ${this.lines}-line document`);
        return this.lineInner(QQ, !0, 1, 0)
      }
      replace(QQ, WQ, XQ) {
        [QQ, WQ] = dQ(this, QQ, WQ);
        let wQ = [];
        return this.decompose(0, QQ, wQ, 2), XQ.length && XQ.decompose(0, XQ.length, wQ, 3), this.decompose(WQ, this.length, wQ, 1), VQ.from(wQ, this.length - (WQ - QQ) + XQ.length)
      }
      append(QQ) {
        return this.replace(this.length, this.length, QQ)
      }
      slice(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [QQ, WQ] = dQ(this, QQ, WQ);
        let XQ = [];
        return this.decompose(QQ, WQ, XQ, 0), VQ.from(XQ, WQ - QQ)
      }
      eq(QQ) {
        if (QQ == this) return !0;
        if (QQ.length != this.length || QQ.lines != this.lines) return !1;
        let WQ = this.scanIdentical(QQ, 1),
          XQ = this.length - this.scanIdentical(QQ, -1),
          wQ = new GQ(this),
          qQ = new GQ(QQ);
        for (let TQ = WQ, zQ = WQ;;) {
          if (wQ.next(TQ), qQ.next(TQ), TQ = 0, wQ.lineBreak != qQ.lineBreak || wQ.done != qQ.done || wQ.value != qQ.value) return !1;
          if (zQ += wQ.value.length, wQ.done || zQ >= XQ) return !0
        }
      }
      iter() {
        return new GQ(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new UQ(this, QQ, WQ)
      }
      iterLines(QQ, WQ) {
        let XQ;
        if (null == QQ) XQ = this.iter();
        else {
          null == WQ && (WQ = this.lines + 1);
          let wQ = this.line(QQ).from;
          XQ = this.iterRange(wQ, Math.max(wQ, WQ == this.lines + 1 ? this.length : WQ <= 1 ? 0 : this.line(WQ - 1).to))
        }
        return new bQ(XQ)
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
        return 1 != QQ.length || QQ[0] ? QQ.length <= 32 ? new yQ(QQ) : VQ.from(yQ.split(QQ, [])) : BQ.empty
      }
    }
    class yQ extends BQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(QQ) {
          let WQ = -1;
          for (let XQ of QQ) WQ += XQ.length + 1;
          return WQ
        }(QQ);
        super(), this.text = QQ, this.length = WQ
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(QQ, WQ, XQ, wQ) {
        for (let qQ = 0;; qQ++) {
          let TQ = this.text[qQ],
            zQ = wQ + TQ.length;
          if ((WQ ? XQ : zQ) >= QQ) return new vQ(wQ, zQ, XQ, TQ);
          wQ = zQ + 1, XQ++
        }
      }
      decompose(QQ, WQ, XQ, wQ) {
        let qQ = QQ <= 0 && WQ >= this.length ? this : new yQ(pQ(this.text, QQ, WQ), Math.min(WQ, this.length) - Math.max(0, QQ));
        if (1 & wQ) {
          let QQ = XQ.pop(),
            WQ = DQ(qQ.text, QQ.text.slice(), 0, qQ.length);
          if (WQ.length <= 32) XQ.push(new yQ(WQ, QQ.length + qQ.length));
          else {
            let QQ = WQ.length >> 1;
            XQ.push(new yQ(WQ.slice(0, QQ)), new yQ(WQ.slice(QQ)))
          }
        } else XQ.push(qQ)
      }
      replace(QQ, WQ, XQ) {
        if (!(XQ instanceof yQ)) return super.replace(QQ, WQ, XQ);
        [QQ, WQ] = dQ(this, QQ, WQ);
        let wQ = DQ(this.text, DQ(XQ.text, pQ(this.text, 0, QQ)), WQ),
          qQ = this.length + XQ.length - (WQ - QQ);
        return wQ.length <= 32 ? new yQ(wQ, qQ) : VQ.from(yQ.split(wQ, []), qQ)
      }
      sliceString(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [QQ, WQ] = dQ(this, QQ, WQ);
        let wQ = "";
        for (let qQ = 0, TQ = 0; qQ <= WQ && TQ < this.text.length; TQ++) {
          let zQ = this.text[TQ],
            sQ = qQ + zQ.length;
          qQ > QQ && TQ && (wQ += XQ), QQ < sQ && WQ > qQ && (wQ += zQ.slice(Math.max(0, QQ - qQ), WQ - qQ)), qQ = sQ + 1
        }
        return wQ
      }
      flatten(QQ) {
        for (let WQ of this.text) QQ.push(WQ)
      }
      scanIdentical() {
        return 0
      }
      static split(QQ, WQ) {
        let XQ = [],
          wQ = -1;
        for (let qQ of QQ) XQ.push(qQ), wQ += qQ.length + 1, 32 == XQ.length && (WQ.push(new yQ(XQ, wQ)), XQ = [], wQ = -1);
        return wQ > -1 && WQ.push(new yQ(XQ, wQ)), WQ
      }
    }
    class VQ extends BQ {
      constructor(QQ, WQ) {
        super(), this.children = QQ, this.length = WQ, this.lines = 0;
        for (let XQ of QQ) this.lines += XQ.lines
      }
      lineInner(QQ, WQ, XQ, wQ) {
        for (let qQ = 0;; qQ++) {
          let TQ = this.children[qQ],
            zQ = wQ + TQ.length,
            sQ = XQ + TQ.lines - 1;
          if ((WQ ? sQ : zQ) >= QQ) return TQ.lineInner(QQ, WQ, XQ, wQ);
          wQ = zQ + 1, XQ = sQ + 1
        }
      }
      decompose(QQ, WQ, XQ, wQ) {
        for (let qQ = 0, TQ = 0; TQ <= WQ && qQ < this.children.length; qQ++) {
          let zQ = this.children[qQ],
            sQ = TQ + zQ.length;
          if (QQ <= sQ && WQ >= TQ) {
            let qQ = wQ & ((TQ <= QQ ? 1 : 0) | (sQ >= WQ ? 2 : 0));
            TQ >= QQ && sQ <= WQ && !qQ ? XQ.push(zQ) : zQ.decompose(QQ - TQ, WQ - TQ, XQ, qQ)
          }
          TQ = sQ + 1
        }
      }
      replace(QQ, WQ, XQ) {
        if ([QQ, WQ] = dQ(this, QQ, WQ), XQ.lines < this.lines)
          for (let wQ = 0, qQ = 0; wQ < this.children.length; wQ++) {
            let TQ = this.children[wQ],
              zQ = qQ + TQ.length;
            if (QQ >= qQ && WQ <= zQ) {
              let sQ = TQ.replace(QQ - qQ, WQ - qQ, XQ),
                FQ = this.lines - TQ.lines + sQ.lines;
              if (sQ.lines < FQ >> 4 && sQ.lines > FQ >> 6) {
                let qQ = this.children.slice();
                return qQ[wQ] = sQ, new VQ(qQ, this.length - (WQ - QQ) + XQ.length)
              }
              return super.replace(qQ, zQ, sQ)
            }
            qQ = zQ + 1
          }
        return super.replace(QQ, WQ, XQ)
      }
      sliceString(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [QQ, WQ] = dQ(this, QQ, WQ);
        let wQ = "";
        for (let qQ = 0, TQ = 0; qQ < this.children.length && TQ <= WQ; qQ++) {
          let zQ = this.children[qQ],
            sQ = TQ + zQ.length;
          TQ > QQ && qQ && (wQ += XQ), QQ < sQ && WQ > TQ && (wQ += zQ.sliceString(QQ - TQ, WQ - TQ, XQ)), TQ = sQ + 1
        }
        return wQ
      }
      flatten(QQ) {
        for (let WQ of this.children) WQ.flatten(QQ)
      }
      scanIdentical(QQ, WQ) {
        if (!(QQ instanceof VQ)) return 0;
        let XQ = 0,
          [wQ, qQ, TQ, zQ] = WQ > 0 ? [0, 0, this.children.length, QQ.children.length] : [this.children.length - 1, QQ.children.length - 1, -1, -1];
        for (;; wQ += WQ, qQ += WQ) {
          if (wQ == TQ || qQ == zQ) return XQ;
          let sQ = this.children[wQ],
            FQ = QQ.children[qQ];
          if (sQ != FQ) return XQ + sQ.scanIdentical(FQ, WQ);
          XQ += sQ.length + 1
        }
      }
      static from(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ.reduce(((QQ, WQ) => QQ + WQ.length + 1), -1),
          XQ = 0;
        for (let rQ of QQ) XQ += rQ.lines;
        if (XQ < 32) {
          let XQ = [];
          for (let WQ of QQ) WQ.flatten(XQ);
          return new yQ(XQ, WQ)
        }
        let wQ = Math.max(32, XQ >> 5),
          qQ = wQ << 1,
          TQ = wQ >> 1,
          zQ = [],
          sQ = 0,
          FQ = -1,
          PQ = [];

        function gQ(QQ) {
          let WQ;
          if (QQ.lines > qQ && QQ instanceof VQ)
            for (let XQ of QQ.children) gQ(XQ);
          else QQ.lines > TQ && (sQ > TQ || !sQ) ? (JQ(), zQ.push(QQ)) : QQ instanceof yQ && sQ && (WQ = PQ[PQ.length - 1]) instanceof yQ && QQ.lines + WQ.lines <= 32 ? (sQ += QQ.lines, FQ += QQ.length + 1, PQ[PQ.length - 1] = new yQ(WQ.text.concat(QQ.text), WQ.length + 1 + QQ.length)) : (sQ + QQ.lines > wQ && JQ(), sQ += QQ.lines, FQ += QQ.length + 1, PQ.push(QQ))
        }

        function JQ() {
          0 != sQ && (zQ.push(1 == PQ.length ? PQ[0] : VQ.from(PQ, FQ)), FQ = -1, sQ = PQ.length = 0)
        }
        for (let rQ of QQ) gQ(rQ);
        return JQ(), 1 == zQ.length ? zQ[0] : new VQ(zQ, WQ)
      }
    }

    function DQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let qQ = 0, TQ = 0, zQ = !0; TQ < QQ.length && qQ <= wQ; TQ++) {
        let sQ = QQ[TQ],
          FQ = qQ + sQ.length;
        FQ >= XQ && (FQ > wQ && (sQ = sQ.slice(0, wQ - qQ)), qQ < XQ && (sQ = sQ.slice(XQ - qQ)), zQ ? (WQ[WQ.length - 1] += sQ, zQ = !1) : WQ.push(sQ)), qQ = FQ + 1
      }
      return WQ
    }

    function pQ(QQ, WQ, XQ) {
      return DQ(QQ, [""], WQ, XQ)
    }
    BQ.empty = new yQ([""], 0);
    class GQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = WQ, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [QQ], this.offsets = [WQ > 0 ? 1 : (QQ instanceof yQ ? QQ.text.length : QQ.children.length) << 1]
      }
      nextInner(QQ, WQ) {
        for (this.done = this.lineBreak = !1;;) {
          let XQ = this.nodes.length - 1,
            wQ = this.nodes[XQ],
            qQ = this.offsets[XQ],
            TQ = qQ >> 1,
            zQ = wQ instanceof yQ ? wQ.text.length : wQ.children.length;
          if (TQ == (WQ > 0 ? zQ : 0)) {
            if (0 == XQ) return this.done = !0, this.value = "", this;
            WQ > 0 && this.offsets[XQ - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & qQ) == (WQ > 0 ? 0 : 1)) {
            if (this.offsets[XQ] += WQ, 0 == QQ) return this.lineBreak = !0, this.value = "\n", this;
            QQ--
          } else if (wQ instanceof yQ) {
            let qQ = wQ.text[TQ + (WQ < 0 ? -1 : 0)];
            if (this.offsets[XQ] += WQ, qQ.length > Math.max(0, QQ)) return this.value = 0 == QQ ? qQ : WQ > 0 ? qQ.slice(QQ) : qQ.slice(0, qQ.length - QQ), this;
            QQ -= qQ.length
          } else {
            let qQ = wQ.children[TQ + (WQ < 0 ? -1 : 0)];
            QQ > qQ.length ? (QQ -= qQ.length, this.offsets[XQ] += WQ) : (WQ < 0 && this.offsets[XQ]--, this.nodes.push(qQ), this.offsets.push(WQ > 0 ? 1 : (qQ instanceof yQ ? qQ.text.length : qQ.children.length) << 1))
          }
        }
      }
      next() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return QQ < 0 && (this.nextInner(-QQ, -this.dir), QQ = this.value.length), this.nextInner(QQ, this.dir)
      }
    }
    class UQ {
      constructor(QQ, WQ, XQ) {
        this.value = "", this.done = !1, this.cursor = new GQ(QQ, WQ > XQ ? -1 : 1), this.pos = WQ > XQ ? QQ.length : 0, this.from = Math.min(WQ, XQ), this.to = Math.max(WQ, XQ)
      }
      nextInner(QQ, WQ) {
        if (WQ < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        QQ += Math.max(0, WQ < 0 ? this.pos - this.to : this.from - this.pos);
        let XQ = WQ < 0 ? this.pos - this.from : this.to - this.pos;
        QQ > XQ && (QQ = XQ), XQ -= QQ;
        let {
          value: wQ
        } = this.cursor.next(QQ);
        return this.pos += (wQ.length + QQ) * WQ, this.value = wQ.length <= XQ ? wQ : WQ < 0 ? wQ.slice(wQ.length - XQ) : wQ.slice(0, XQ), this.done = !this.value, this
      }
      next() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return QQ < 0 ? QQ = Math.max(QQ, this.from - this.pos) : QQ > 0 && (QQ = Math.min(QQ, this.to - this.pos)), this.nextInner(QQ, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class bQ {
      constructor(QQ) {
        this.inner = QQ, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: WQ,
            lineBreak: XQ,
            value: wQ
          } = this.inner.next(QQ);
        return WQ && this.afterBreak ? (this.value = "", this.afterBreak = !1) : WQ ? (this.done = !0, this.value = "") : XQ ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = wQ, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (BQ.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, GQ.prototype[Symbol.iterator] = UQ.prototype[Symbol.iterator] = bQ.prototype[Symbol.iterator] = function() {
      return this
    });
    class vQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.from = QQ, this.to = WQ, this.number = XQ, this.text = wQ
      }
      get length() {
        return this.to - this.from
      }
    }

    function dQ(QQ, WQ, XQ) {
      return [WQ = Math.max(0, Math.min(QQ.length, WQ)), Math.max(WQ, Math.min(QQ.length, XQ))]
    }

    function HQ(QQ, WQ) {
      return FQ(QQ, WQ, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function aQ(QQ, WQ) {
      let XQ = QQ.charCodeAt(WQ);
      if (!((wQ = XQ) >= 55296 && wQ < 56320) || WQ + 1 == QQ.length) return XQ;
      var wQ;
      let qQ = QQ.charCodeAt(WQ + 1);
      return function(QQ) {
        return QQ >= 56320 && QQ < 57344
      }(qQ) ? qQ - 56320 + (XQ - 55296 << 10) + 65536 : XQ
    }

    function lQ(QQ) {
      return QQ <= 65535 ? String.fromCharCode(QQ) : (QQ -= 65536, String.fromCharCode(55296 + (QQ >> 10), 56320 + (1023 & QQ)))
    }

    function hQ(QQ) {
      return QQ < 65536 ? 1 : 2
    }
    const iQ = /\r\n?|\n/;
    var cQ = function(QQ) {
      return QQ[QQ.Simple = 0] = "Simple", QQ[QQ.TrackDel = 1] = "TrackDel", QQ[QQ.TrackBefore = 2] = "TrackBefore", QQ[QQ.TrackAfter = 3] = "TrackAfter", QQ
    }(cQ || (cQ = {}));
    class AQ {
      constructor(QQ) {
        this.sections = QQ
      }
      get length() {
        let QQ = 0;
        for (let WQ = 0; WQ < this.sections.length; WQ += 2) QQ += this.sections[WQ];
        return QQ
      }
      get newLength() {
        let QQ = 0;
        for (let WQ = 0; WQ < this.sections.length; WQ += 2) {
          let XQ = this.sections[WQ + 1];
          QQ += XQ < 0 ? this.sections[WQ] : XQ
        }
        return QQ
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(QQ) {
        for (let WQ = 0, XQ = 0, wQ = 0; WQ < this.sections.length;) {
          let qQ = this.sections[WQ++],
            TQ = this.sections[WQ++];
          TQ < 0 ? (QQ(XQ, wQ, qQ), wQ += qQ) : wQ += TQ, XQ += qQ
        }
      }
      iterChangedRanges(QQ) {
        uQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let QQ = [];
        for (let WQ = 0; WQ < this.sections.length;) {
          let XQ = this.sections[WQ++],
            wQ = this.sections[WQ++];
          wQ < 0 ? QQ.push(XQ, wQ) : QQ.push(wQ, XQ)
        }
        return new AQ(QQ)
      }
      composeDesc(QQ) {
        return this.empty ? QQ : QQ.empty ? this : kQ(this, QQ)
      }
      mapDesc(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return QQ.empty ? this : LQ(this, QQ, WQ)
      }
      mapPos(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : cQ.Simple,
          wQ = 0,
          qQ = 0;
        for (let TQ = 0; TQ < this.sections.length;) {
          let zQ = this.sections[TQ++],
            sQ = this.sections[TQ++],
            FQ = wQ + zQ;
          if (sQ < 0) {
            if (FQ > QQ) return qQ + (QQ - wQ);
            qQ += zQ
          } else {
            if (XQ != cQ.Simple && FQ >= QQ && (XQ == cQ.TrackDel && wQ < QQ && FQ > QQ || XQ == cQ.TrackBefore && wQ < QQ || XQ == cQ.TrackAfter && FQ > QQ)) return null;
            if (FQ > QQ || FQ == QQ && WQ < 0 && !zQ) return QQ == wQ || WQ < 0 ? qQ : qQ + sQ;
            qQ += sQ
          }
          wQ = FQ
        }
        if (QQ > wQ) throw new RangeError(`Position ${QQ} is out of range for changeset of length ${wQ}`);
        return qQ
      }
      touchesRange(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        for (let XQ = 0, wQ = 0; XQ < this.sections.length && wQ <= WQ;) {
          let qQ = wQ + this.sections[XQ++];
          if (this.sections[XQ++] >= 0 && wQ <= WQ && qQ >= QQ) return !(wQ < QQ && qQ > WQ) || "cover";
          wQ = qQ
        }
        return !1
      }
      toString() {
        let QQ = "";
        for (let WQ = 0; WQ < this.sections.length;) {
          let XQ = this.sections[WQ++],
            wQ = this.sections[WQ++];
          QQ += (QQ ? " " : "") + XQ + (wQ >= 0 ? ":" + wQ : "")
        }
        return QQ
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(QQ) {
        if (!Array.isArray(QQ) || QQ.length % 2 || QQ.some((QQ => "number" != typeof QQ))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new AQ(QQ)
      }
      static create(QQ) {
        return new AQ(QQ)
      }
    }
    class RQ extends AQ {
      constructor(QQ, WQ) {
        super(QQ), this.inserted = WQ
      }
      apply(QQ) {
        if (this.length != QQ.length) throw new RangeError("Applying change set to a document with the wrong length");
        return uQ(this, ((WQ, XQ, wQ, qQ, TQ) => QQ = QQ.replace(wQ, wQ + (XQ - WQ), TQ)), !1), QQ
      }
      mapDesc(QQ) {
        return LQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(QQ) {
        let WQ = this.sections.slice(),
          XQ = [];
        for (let wQ = 0, qQ = 0; wQ < WQ.length; wQ += 2) {
          let TQ = WQ[wQ],
            zQ = WQ[wQ + 1];
          if (zQ >= 0) {
            WQ[wQ] = zQ, WQ[wQ + 1] = TQ;
            let sQ = wQ >> 1;
            for (; XQ.length < sQ;) XQ.push(BQ.empty);
            XQ.push(TQ ? QQ.slice(qQ, qQ + TQ) : BQ.empty)
          }
          qQ += TQ
        }
        return new RQ(WQ, XQ)
      }
      compose(QQ) {
        return this.empty ? QQ : QQ.empty ? this : kQ(this, QQ, !0)
      }
      map(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return QQ.empty ? this : LQ(this, QQ, WQ, !0)
      }
      iterChanges(QQ) {
        uQ(this, QQ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return AQ.create(this.sections)
      }
      filter(QQ) {
        let WQ = [],
          XQ = [],
          wQ = [],
          qQ = new fQ(this);
        QQ: for (let TQ = 0, zQ = 0;;) {
          let sQ = TQ == QQ.length ? 1e9 : QQ[TQ++];
          for (; zQ < sQ || zQ == sQ && 0 == qQ.len;) {
            if (qQ.done) break QQ;
            let QQ = Math.min(qQ.len, sQ - zQ);
            EQ(wQ, QQ, -1);
            let TQ = -1 == qQ.ins ? -1 : 0 == qQ.off ? qQ.ins : 0;
            EQ(WQ, QQ, TQ), TQ > 0 && CQ(XQ, WQ, qQ.text), qQ.forward(QQ), zQ += QQ
          }
          let FQ = QQ[TQ++];
          for (; zQ < FQ;) {
            if (qQ.done) break QQ;
            let QQ = Math.min(qQ.len, FQ - zQ);
            EQ(WQ, QQ, -1), EQ(wQ, QQ, -1 == qQ.ins ? -1 : 0 == qQ.off ? qQ.ins : 0), qQ.forward(QQ), zQ += QQ
          }
        }
        return {
          changes: new RQ(WQ, XQ),
          filtered: AQ.create(wQ)
        }
      }
      toJSON() {
        let QQ = [];
        for (let WQ = 0; WQ < this.sections.length; WQ += 2) {
          let XQ = this.sections[WQ],
            wQ = this.sections[WQ + 1];
          wQ < 0 ? QQ.push(XQ) : 0 == wQ ? QQ.push([XQ]) : QQ.push([XQ].concat(this.inserted[WQ >> 1].toJSON()))
        }
        return QQ
      }
      static of (QQ, WQ, XQ) {
        let wQ = [],
          qQ = [],
          TQ = 0,
          zQ = null;

        function sQ() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !wQ.length) return;
          TQ < WQ && EQ(wQ, WQ - TQ, -1);
          let QQ = new RQ(wQ, qQ);
          zQ = zQ ? zQ.compose(QQ.map(zQ)) : QQ, wQ = [], qQ = [], TQ = 0
        }
        return function QQ(FQ) {
          if (Array.isArray(FQ))
            for (let WQ of FQ) QQ(WQ);
          else if (FQ instanceof RQ) {
            if (FQ.length != WQ) throw new RangeError(`Mismatched change set length (got ${FQ.length}, expected ${WQ})`);
            sQ(), zQ = zQ ? zQ.compose(FQ.map(zQ)) : FQ
          } else {
            let {
              from: QQ,
              to: zQ = QQ,
              insert: PQ
            } = FQ;
            if (QQ > zQ || QQ < 0 || zQ > WQ) throw new RangeError(`Invalid change range ${QQ} to ${zQ} (in doc of length ${WQ})`);
            let gQ = PQ ? "string" == typeof PQ ? BQ.of(PQ.split(XQ || iQ)) : PQ : BQ.empty,
              JQ = gQ.length;
            if (QQ == zQ && 0 == JQ) return;
            QQ < TQ && sQ(), QQ > TQ && EQ(wQ, QQ - TQ, -1), EQ(wQ, zQ - QQ, JQ), CQ(qQ, wQ, gQ), TQ = zQ
          }
        }(QQ), sQ(!zQ), zQ
      }
      static empty(QQ) {
        return new RQ(QQ ? [QQ, -1] : [], [])
      }
      static fromJSON(QQ) {
        if (!Array.isArray(QQ)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let WQ = [],
          XQ = [];
        for (let wQ = 0; wQ < QQ.length; wQ++) {
          let qQ = QQ[wQ];
          if ("number" == typeof qQ) WQ.push(qQ, -1);
          else {
            if (!Array.isArray(qQ) || "number" != typeof qQ[0] || qQ.some(((QQ, WQ) => WQ && "string" != typeof QQ))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == qQ.length) WQ.push(qQ[0], 0);
            else {
              for (; XQ.length < wQ;) XQ.push(BQ.empty);
              XQ[wQ] = BQ.of(qQ.slice(1)), WQ.push(qQ[0], XQ[wQ].length)
            }
          }
        }
        return new RQ(WQ, XQ)
      }
      static createSet(QQ, WQ) {
        return new RQ(QQ, WQ)
      }
    }

    function EQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == WQ && XQ <= 0) return;
      let qQ = QQ.length - 2;
      qQ >= 0 && XQ <= 0 && XQ == QQ[qQ + 1] ? QQ[qQ] += WQ : qQ >= 0 && 0 == WQ && 0 == QQ[qQ] ? QQ[qQ + 1] += XQ : wQ ? (QQ[qQ] += WQ, QQ[qQ + 1] += XQ) : QQ.push(WQ, XQ)
    }

    function CQ(QQ, WQ, XQ) {
      if (0 == XQ.length) return;
      let wQ = WQ.length - 2 >> 1;
      if (wQ < QQ.length) QQ[QQ.length - 1] = QQ[QQ.length - 1].append(XQ);
      else {
        for (; QQ.length < wQ;) QQ.push(BQ.empty);
        QQ.push(XQ)
      }
    }

    function uQ(QQ, WQ, XQ) {
      let wQ = QQ.inserted;
      for (let qQ = 0, TQ = 0, zQ = 0; zQ < QQ.sections.length;) {
        let sQ = QQ.sections[zQ++],
          FQ = QQ.sections[zQ++];
        if (FQ < 0) qQ += sQ, TQ += sQ;
        else {
          let PQ = qQ,
            gQ = TQ,
            JQ = BQ.empty;
          for (; PQ += sQ, gQ += FQ, FQ && wQ && (JQ = JQ.append(wQ[zQ - 2 >> 1])), !(XQ || zQ == QQ.sections.length || QQ.sections[zQ + 1] < 0);) sQ = QQ.sections[zQ++], FQ = QQ.sections[zQ++];
          WQ(qQ, PQ, TQ, gQ, JQ), qQ = PQ, TQ = gQ
        }
      }
    }

    function LQ(QQ, WQ, XQ) {
      let wQ = [],
        qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        TQ = new fQ(QQ),
        zQ = new fQ(WQ),
        sQ = 0;
      for (let FQ = -1;;) {
        if (++sQ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (TQ.done && zQ.len || zQ.done && TQ.len) throw new Error("Mismatched change set lengths");
        if (-1 == TQ.ins && -1 == zQ.ins) {
          let QQ = Math.min(TQ.len, zQ.len);
          EQ(wQ, QQ, -1), TQ.forward(QQ), zQ.forward(QQ)
        } else if (zQ.ins >= 0 && (TQ.ins < 0 || FQ == TQ.i || 0 == TQ.off && (zQ.len < TQ.len || zQ.len == TQ.len && !XQ))) {
          let QQ = zQ.len;
          for (EQ(wQ, zQ.ins, -1); QQ;) {
            if (++sQ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let WQ = Math.min(TQ.len, QQ);
            TQ.ins >= 0 && FQ < TQ.i && TQ.len <= WQ && (EQ(wQ, 0, TQ.ins), qQ && CQ(qQ, wQ, TQ.text), FQ = TQ.i), TQ.forward(WQ), QQ -= WQ
          }
          zQ.next()
        } else {
          if (!(TQ.ins >= 0)) {
            if (TQ.done && zQ.done) return qQ ? RQ.createSet(wQ, qQ) : AQ.create(wQ);
            throw new Error("Mismatched change set lengths")
          } {
            let QQ = 0,
              WQ = TQ.len;
            for (; WQ;) {
              if (++sQ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == zQ.ins) {
                let XQ = Math.min(WQ, zQ.len);
                QQ += XQ, WQ -= XQ, zQ.forward(XQ)
              } else {
                if (!(0 == zQ.ins && zQ.len < WQ)) break;
                WQ -= zQ.len, zQ.next()
              }
            }
            EQ(wQ, QQ, FQ < TQ.i ? TQ.ins : 0), qQ && FQ < TQ.i && CQ(qQ, wQ, TQ.text), FQ = TQ.i, TQ.forward(TQ.len - WQ)
          }
        }
      }
    }

    function kQ(QQ, WQ) {
      let XQ = [],
        wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        qQ = new fQ(QQ),
        TQ = new fQ(WQ),
        zQ = 0;
      for (let sQ = !1;;) {
        if (++zQ > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (qQ.done && TQ.done) return wQ ? RQ.createSet(XQ, wQ) : AQ.create(XQ);
        if (0 == qQ.ins) EQ(XQ, qQ.len, 0, sQ), qQ.next();
        else if (0 != TQ.len || TQ.done) {
          if (qQ.done || TQ.done) throw new Error("Mismatched change set lengths");
          {
            let QQ = Math.min(qQ.len2, TQ.len),
              WQ = XQ.length;
            if (-1 == qQ.ins) {
              let WQ = -1 == TQ.ins ? -1 : TQ.off ? 0 : TQ.ins;
              EQ(XQ, QQ, WQ, sQ), wQ && WQ && CQ(wQ, XQ, TQ.text)
            } else - 1 == TQ.ins ? (EQ(XQ, qQ.off ? 0 : qQ.len, QQ, sQ), wQ && CQ(wQ, XQ, qQ.textBit(QQ))) : (EQ(XQ, qQ.off ? 0 : qQ.len, TQ.off ? 0 : TQ.ins, sQ), wQ && !TQ.off && CQ(wQ, XQ, TQ.text));
            sQ = (qQ.ins > QQ || TQ.ins >= 0 && TQ.len > QQ) && (sQ || XQ.length > WQ), qQ.forward2(QQ), TQ.forward(QQ)
          }
        } else EQ(XQ, 0, TQ.ins, sQ), wQ && CQ(wQ, XQ, TQ.text), TQ.next()
      }
    }
    class fQ {
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
        } = this.set, WQ = this.i - 2 >> 1;
        return WQ >= QQ.length ? BQ.empty : QQ[WQ]
      }
      textBit(QQ) {
        let {
          inserted: WQ
        } = this.set, XQ = this.i - 2 >> 1;
        return XQ >= WQ.length && !QQ ? BQ.empty : WQ[XQ].slice(this.off, null == QQ ? void 0 : this.off + QQ)
      }
      forward(QQ) {
        QQ == this.len ? this.next() : (this.len -= QQ, this.off += QQ)
      }
      forward2(QQ) {
        -1 == this.ins ? this.forward(QQ) : QQ == this.ins ? this.next() : (this.ins -= QQ, this.off += QQ)
      }
    }
    class SQ {
      constructor(QQ, WQ, XQ) {
        this.from = QQ, this.to = WQ, this.flags = XQ
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
        let WQ, XQ, wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? WQ = XQ = QQ.mapPos(this.from, wQ) : (WQ = QQ.mapPos(this.from, 1), XQ = QQ.mapPos(this.to, -1)), WQ == this.from && XQ == this.to ? this : new SQ(WQ, XQ, this.flags)
      }
      extend(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (QQ <= this.anchor && WQ >= this.anchor) return tQ.range(QQ, WQ, void 0, void 0, XQ);
        let wQ = Math.abs(QQ - this.anchor) > Math.abs(WQ - this.anchor) ? QQ : WQ;
        return tQ.range(this.anchor, wQ, void 0, void 0, XQ)
      }
      eq(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == QQ.anchor && this.head == QQ.head && this.goalColumn == QQ.goalColumn && (!WQ || !this.empty || this.assoc == QQ.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(QQ) {
        if (!QQ || "number" != typeof QQ.anchor || "number" != typeof QQ.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return tQ.range(QQ.anchor, QQ.head)
      }
      static create(QQ, WQ, XQ) {
        return new SQ(QQ, WQ, XQ)
      }
    }
    class tQ {
      constructor(QQ, WQ) {
        this.Qy = QQ, this.mainIndex = WQ
      }
      map(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return QQ.empty ? this : tQ.create(this.Qy.map((XQ => XQ.map(QQ, WQ))), this.mainIndex)
      }
      eq(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Qy.length != QQ.Qy.length || this.mainIndex != QQ.mainIndex) return !1;
        for (let XQ = 0; XQ < this.Qy.length; XQ++)
          if (!this.Qy[XQ].eq(QQ.Qy[XQ], WQ)) return !1;
        return !0
      }
      get main() {
        return this.Qy[this.mainIndex]
      }
      asSingle() {
        return 1 == this.Qy.length ? this : new tQ([this.main], 0)
      }
      addRange(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return tQ.create([QQ].concat(this.Qy), WQ ? 0 : this.mainIndex + 1)
      }
      replaceRange(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          XQ = this.Qy.slice();
        return XQ[WQ] = QQ, tQ.create(XQ, this.mainIndex)
      }
      toJSON() {
        return {
          Qy: this.Qy.map((QQ => QQ.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(QQ) {
        if (!QQ || !Array.isArray(QQ.Qy) || "number" != typeof QQ.main || QQ.main >= QQ.Qy.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new tQ(QQ.Qy.map((QQ => SQ.fromJSON(QQ))), QQ.main)
      }
      static single(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        return new tQ([tQ.range(QQ, WQ)], 0)
      }
      static create(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == QQ.length) throw new RangeError("A selection needs at least one range");
        for (let XQ = 0, wQ = 0; wQ < QQ.length; wQ++) {
          let qQ = QQ[wQ];
          if (qQ.empty ? qQ.from <= XQ : qQ.from < XQ) return tQ.normalized(QQ.slice(), WQ);
          XQ = qQ.to
        }
        return new tQ(QQ, WQ)
      }
      static cursor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        return SQ.create(QQ, QQ, (0 == WQ ? 0 : WQ < 0 ? 8 : 16) | (null == XQ ? 7 : Math.min(6, XQ)) | (null !== wQ && void 0 !== wQ ? wQ : 16777215) << 6)
      }
      static range(QQ, WQ, XQ, wQ, qQ) {
        let TQ = (null !== XQ && void 0 !== XQ ? XQ : 16777215) << 6 | (null == wQ ? 7 : Math.min(6, wQ));
        return qQ || QQ == WQ || (qQ = WQ < QQ ? 1 : -1), WQ < QQ ? SQ.create(WQ, QQ, 48 | TQ) : SQ.create(QQ, WQ, (qQ ? qQ < 0 ? 8 : 16 : 0) | TQ)
      }
      static normalized(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = QQ[WQ];
        QQ.sort(((QQ, WQ) => QQ.from - WQ.from)), WQ = QQ.indexOf(XQ);
        for (let wQ = 1; wQ < QQ.length; wQ++) {
          let XQ = QQ[wQ],
            qQ = QQ[wQ - 1];
          if (XQ.empty ? XQ.from <= qQ.to : XQ.from < qQ.to) {
            let TQ = qQ.from,
              zQ = Math.max(XQ.to, qQ.to);
            wQ <= WQ && WQ--, QQ.splice(--wQ, 2, XQ.anchor > XQ.head ? tQ.range(zQ, TQ) : tQ.range(TQ, zQ))
          }
        }
        return new tQ(QQ, WQ)
      }
    }

    function oQ(QQ, WQ) {
      for (let XQ of QQ.Qy)
        if (XQ.to > WQ) throw new RangeError("Selection points outside of document")
    }
    let eQ = 0;
    class nQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.combine = QQ, this.compareInput = WQ, this.compare = XQ, this.isStatic = wQ, this.id = eQ++, this.default = QQ([]), this.extensions = "function" == typeof qQ ? qQ(this) : qQ
      }
      get reader() {
        return this
      }
      static define() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new nQ(QQ.combine || (QQ => QQ), QQ.compareInput || ((QQ, WQ) => QQ === WQ), QQ.compare || (QQ.combine ? (QQ, WQ) => QQ === WQ : xQ), !!QQ.static, QQ.enables)
      }
      of(QQ) {
        return new YQ([], this, 0, QQ)
      }
      compute(QQ, WQ) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new YQ(QQ, this, 1, WQ)
      }
      computeN(QQ, WQ) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new YQ(QQ, this, 2, WQ)
      }
      from(QQ, WQ) {
        return WQ || (WQ = QQ => QQ), this.compute([QQ], (XQ => WQ(XQ.field(QQ))))
      }
    }

    function xQ(QQ, WQ) {
      return QQ == WQ || QQ.length == WQ.length && QQ.every(((QQ, XQ) => QQ === WQ[XQ]))
    }
    class YQ {
      constructor(QQ, WQ, XQ, wQ) {
        this.dependencies = QQ, this.facet = WQ, this.type = XQ, this.value = wQ, this.id = eQ++
      }
      dynamicSlot(QQ) {
        var WQ;
        let XQ = this.value,
          wQ = this.facet.compareInput,
          qQ = this.id,
          TQ = QQ[qQ] >> 1,
          zQ = 2 == this.type,
          sQ = !1,
          FQ = !1,
          PQ = [];
        for (let gQ of this.dependencies) "doc" == gQ ? sQ = !0 : "selection" == gQ ? FQ = !0 : 0 == (1 & (null !== (WQ = QQ[gQ.id]) && void 0 !== WQ ? WQ : 1)) && PQ.push(QQ[gQ.id]);
        return {
          create: QQ => (QQ.values[TQ] = XQ(QQ), 1),
          update(QQ, WQ) {
            if (sQ && WQ.docChanged || FQ && (WQ.docChanged || WQ.selection) || ZQ(QQ, PQ)) {
              let WQ = XQ(QQ);
              if (zQ ? !NQ(WQ, QQ.values[TQ], wQ) : !wQ(WQ, QQ.values[TQ])) return QQ.values[TQ] = WQ, 1
            }
            return 0
          },
          reconfigure: (QQ, WQ) => {
            let sQ, FQ = WQ.config.address[qQ];
            if (null != FQ) {
              let qQ = gW(WQ, FQ);
              if (this.dependencies.every((XQ => XQ instanceof nQ ? WQ.facet(XQ) === QQ.facet(XQ) : !(XQ instanceof mQ) || WQ.field(XQ, !1) == QQ.field(XQ, !1))) || (zQ ? NQ(sQ = XQ(QQ), qQ, wQ) : wQ(sQ = XQ(QQ), qQ))) return QQ.values[TQ] = qQ, 0
            } else sQ = XQ(QQ);
            return QQ.values[TQ] = sQ, 1
          }
        }
      }
    }

    function NQ(QQ, WQ, XQ) {
      if (QQ.length != WQ.length) return !1;
      for (let wQ = 0; wQ < QQ.length; wQ++)
        if (!XQ(QQ[wQ], WQ[wQ])) return !1;
      return !0
    }

    function ZQ(QQ, WQ) {
      let XQ = !1;
      for (let wQ of WQ) 1 & PW(QQ, wQ) && (XQ = !0);
      return XQ
    }

    function OQ(QQ, WQ, XQ) {
      let wQ = XQ.map((WQ => QQ[WQ.id])),
        qQ = XQ.map((QQ => QQ.type)),
        TQ = wQ.filter((QQ => !(1 & QQ))),
        zQ = QQ[WQ.id] >> 1;

      function sQ(QQ) {
        let XQ = [];
        for (let WQ = 0; WQ < wQ.length; WQ++) {
          let TQ = gW(QQ, wQ[WQ]);
          if (2 == qQ[WQ])
            for (let QQ of TQ) XQ.push(QQ);
          else XQ.push(TQ)
        }
        return WQ.combine(XQ)
      }
      return {
        create(QQ) {
          for (let WQ of wQ) PW(QQ, WQ);
          return QQ.values[zQ] = sQ(QQ), 1
        },
        update(QQ, XQ) {
          if (!ZQ(QQ, TQ)) return 0;
          let wQ = sQ(QQ);
          return WQ.compare(wQ, QQ.values[zQ]) ? 0 : (QQ.values[zQ] = wQ, 1)
        },
        reconfigure(QQ, qQ) {
          let TQ = ZQ(QQ, wQ),
            FQ = qQ.config.facets[WQ.id],
            PQ = qQ.facet(WQ);
          if (FQ && !TQ && xQ(XQ, FQ)) return QQ.values[zQ] = PQ, 0;
          let gQ = sQ(QQ);
          return WQ.compare(gQ, PQ) ? (QQ.values[zQ] = PQ, 0) : (QQ.values[zQ] = gQ, 1)
        }
      }
    }
    const KQ = nQ.define({
      static: !0
    });
    class mQ {
      constructor(QQ, WQ, XQ, wQ, qQ) {
        this.id = QQ, this.createF = WQ, this.updateF = XQ, this.compareF = wQ, this.spec = qQ, this.provides = void 0
      }
      static define(QQ) {
        let WQ = new mQ(eQ++, QQ.create, QQ.update, QQ.compare || ((QQ, WQ) => QQ === WQ), QQ);
        return QQ.provide && (WQ.provides = QQ.provide(WQ)), WQ
      }
      create(QQ) {
        let WQ = QQ.facet(KQ).find((QQ => QQ.field == this));
        return ((null === WQ || void 0 === WQ ? void 0 : WQ.create) || this.createF)(QQ)
      }
      slot(QQ) {
        let WQ = QQ[this.id] >> 1;
        return {
          create: QQ => (QQ.values[WQ] = this.create(QQ), 1),
          update: (QQ, XQ) => {
            let wQ = QQ.values[WQ],
              qQ = this.updateF(wQ, XQ);
            return this.compareF(wQ, qQ) ? 0 : (QQ.values[WQ] = qQ, 1)
          },
          reconfigure: (QQ, XQ) => {
            let wQ, qQ = QQ.facet(KQ),
              TQ = XQ.facet(KQ);
            return (wQ = qQ.find((QQ => QQ.field == this))) && wQ != TQ.find((QQ => QQ.field == this)) ? (QQ.values[WQ] = wQ.create(QQ), 1) : null != XQ.config.address[this.id] ? (QQ.values[WQ] = XQ.field(this), 0) : (QQ.values[WQ] = this.create(QQ), 1)
          }
        }
      }
      init(QQ) {
        return [this, KQ.of({
          field: this,
          create: QQ
        })]
      }
      get extension() {
        return this
      }
    }
    const MQ = 4,
      QW = 3,
      WW = 2,
      XW = 1;

    function wW(QQ) {
      return WQ => new TW(WQ, QQ)
    }
    const qW = {
      highest: wW(0),
      high: wW(XW),
      default: wW(WW),
      low: wW(QW),
      lowest: wW(MQ)
    };
    class TW {
      constructor(QQ, WQ) {
        this.inner = QQ, this.prec = WQ
      }
    }
    class zW {
      of(QQ) {
        return new sW(this, QQ)
      }
      reconfigure(QQ) {
        return zW.reconfigure.of({
          compartment: this,
          extension: QQ
        })
      }
      get(QQ) {
        return QQ.config.compartments.get(this)
      }
    }
    class sW {
      constructor(QQ, WQ) {
        this.compartment = QQ, this.inner = WQ
      }
    }
    class FW {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        for (this.base = QQ, this.compartments = WQ, this.dynamicSlots = XQ, this.address = wQ, this.staticValues = qQ, this.facets = TQ, this.statusTemplate = []; this.statusTemplate.length < XQ.length;) this.statusTemplate.push(0)
      }
      staticFacet(QQ) {
        let WQ = this.address[QQ.id];
        return null == WQ ? QQ.default : this.staticValues[WQ >> 1]
      }
      static resolve(QQ, WQ, XQ) {
        let wQ = [],
          qQ = Object.create(null),
          TQ = new Map;
        for (let JQ of function(QQ, WQ, XQ) {
            let wQ = [
                [],
                [],
                [],
                [],
                []
              ],
              qQ = new Map;

            function TQ(QQ, zQ) {
              let sQ = qQ.get(QQ);
              if (null != sQ) {
                if (sQ <= zQ) return;
                let WQ = wQ[sQ].indexOf(QQ);
                WQ > -1 && wQ[sQ].splice(WQ, 1), QQ instanceof sW && XQ.delete(QQ.compartment)
              }
              if (qQ.set(QQ, zQ), Array.isArray(QQ))
                for (let WQ of QQ) TQ(WQ, zQ);
              else if (QQ instanceof sW) {
                if (XQ.has(QQ.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let wQ = WQ.get(QQ.compartment) || QQ.inner;
                XQ.set(QQ.compartment, wQ), TQ(wQ, zQ)
              } else if (QQ instanceof TW) TQ(QQ.inner, QQ.prec);
              else if (QQ instanceof mQ) wQ[zQ].push(QQ), QQ.provides && TQ(QQ.provides, zQ);
              else if (QQ instanceof YQ) wQ[zQ].push(QQ), QQ.facet.extensions && TQ(QQ.facet.extensions, WW);
              else {
                let WQ = QQ.extension;
                if (!WQ) throw new Error(`Unrecognized extension value in extension set (${QQ}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                TQ(WQ, zQ)
              }
            }
            return TQ(QQ, WW), wQ.reduce(((QQ, WQ) => QQ.concat(WQ)))
          }(QQ, WQ, TQ)) JQ instanceof mQ ? wQ.push(JQ) : (qQ[JQ.facet.id] || (qQ[JQ.facet.id] = [])).push(JQ);
        let zQ = Object.create(null),
          sQ = [],
          FQ = [];
        for (let JQ of wQ) zQ[JQ.id] = FQ.length << 1, FQ.push((QQ => JQ.slot(QQ)));
        let PQ = null === XQ || void 0 === XQ ? void 0 : XQ.config.facets;
        for (let JQ in qQ) {
          let QQ = qQ[JQ],
            WQ = QQ[0].facet,
            wQ = PQ && PQ[JQ] || [];
          if (QQ.every((QQ => 0 == QQ.type)))
            if (zQ[WQ.id] = sQ.length << 1 | 1, xQ(wQ, QQ)) sQ.push(XQ.facet(WQ));
            else {
              let wQ = WQ.combine(QQ.map((QQ => QQ.value)));
              sQ.push(XQ && WQ.compare(wQ, XQ.facet(WQ)) ? XQ.facet(WQ) : wQ)
            }
          else {
            for (let WQ of QQ) 0 == WQ.type ? (zQ[WQ.id] = sQ.length << 1 | 1, sQ.push(WQ.value)) : (zQ[WQ.id] = FQ.length << 1, FQ.push((QQ => WQ.dynamicSlot(QQ))));
            zQ[WQ.id] = FQ.length << 1, FQ.push((XQ => OQ(XQ, WQ, QQ)))
          }
        }
        let gQ = FQ.map((QQ => QQ(zQ)));
        return new FW(QQ, TQ, gQ, zQ, sQ, qQ)
      }
    }

    function PW(QQ, WQ) {
      if (1 & WQ) return 2;
      let XQ = WQ >> 1,
        wQ = QQ.status[XQ];
      if (4 == wQ) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & wQ) return wQ;
      QQ.status[XQ] = 4;
      let qQ = QQ.computeSlot(QQ, QQ.config.dynamicSlots[XQ]);
      return QQ.status[XQ] = 2 | qQ
    }

    function gW(QQ, WQ) {
      return 1 & WQ ? QQ.config.staticValues[WQ >> 1] : QQ.values[WQ >> 1]
    }
    const JW = nQ.define(),
      rW = nQ.define({
        combine: QQ => QQ.some((QQ => QQ)),
        static: !0
      }),
      IW = nQ.define({
        combine: QQ => QQ.length ? QQ[0] : void 0,
        static: !0
      }),
      jW = nQ.define(),
      BW = nQ.define(),
      yW = nQ.define(),
      VW = nQ.define({
        combine: QQ => !!QQ.length && QQ[0]
      });
    class DW {
      constructor(QQ, WQ) {
        this.type = QQ, this.value = WQ
      }
      static define() {
        return new pW
      }
    }
    class pW {
      of(QQ) {
        return new DW(this, QQ)
      }
    }
    class GW {
      constructor(QQ) {
        this.map = QQ
      }
      of(QQ) {
        return new UW(this, QQ)
      }
    }
    class UW {
      constructor(QQ, WQ) {
        this.type = QQ, this.value = WQ
      }
      map(QQ) {
        let WQ = this.type.map(this.value, QQ);
        return void 0 === WQ ? void 0 : WQ == this.value ? this : new UW(this.type, WQ)
      }
      is(QQ) {
        return this.type == QQ
      }
      static define() {
        return new GW((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (QQ => QQ))
      }
      static mapEffects(QQ, WQ) {
        if (!QQ.length) return QQ;
        let XQ = [];
        for (let wQ of QQ) {
          let QQ = wQ.map(WQ);
          QQ && XQ.push(QQ)
        }
        return XQ
      }
    }
    UW.reconfigure = UW.define(), UW.appendConfig = UW.define();
    class bW {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.startState = QQ, this.changes = WQ, this.selection = XQ, this.effects = wQ, this.annotations = qQ, this.scrollIntoView = TQ, this._doc = null, this._state = null, XQ && oQ(XQ, WQ.newLength), qQ.some((QQ => QQ.type == bW.time)) || (this.annotations = qQ.concat(bW.time.of(Date.now())))
      }
      static create(QQ, WQ, XQ, wQ, qQ, TQ) {
        return new bW(QQ, WQ, XQ, wQ, qQ, TQ)
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
        for (let WQ of this.annotations)
          if (WQ.type == QQ) return WQ.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(QQ) {
        let WQ = this.annotation(bW.userEvent);
        return !(!WQ || !(WQ == QQ || WQ.length > QQ.length && WQ.slice(0, QQ.length) == QQ && "." == WQ[QQ.length]))
      }
    }

    function vW(QQ, WQ) {
      let XQ = [];
      for (let wQ = 0, qQ = 0;;) {
        let TQ, zQ;
        if (wQ < QQ.length && (qQ == WQ.length || WQ[qQ] >= QQ[wQ])) TQ = QQ[wQ++], zQ = QQ[wQ++];
        else {
          if (!(qQ < WQ.length)) return XQ;
          TQ = WQ[qQ++], zQ = WQ[qQ++]
        }!XQ.length || XQ[XQ.length - 1] < TQ ? XQ.push(TQ, zQ) : XQ[XQ.length - 1] < zQ && (XQ[XQ.length - 1] = zQ)
      }
    }

    function dW(QQ, WQ, XQ) {
      var wQ;
      let qQ, TQ, zQ;
      return XQ ? (qQ = WQ.changes, TQ = RQ.empty(WQ.changes.length), zQ = QQ.changes.compose(WQ.changes)) : (qQ = WQ.changes.map(QQ.changes), TQ = QQ.changes.mapDesc(WQ.changes, !0), zQ = QQ.changes.compose(qQ)), {
        changes: zQ,
        selection: WQ.selection ? WQ.selection.map(TQ) : null === (wQ = QQ.selection) || void 0 === wQ ? void 0 : wQ.map(qQ),
        effects: UW.mapEffects(QQ.effects, qQ).concat(UW.mapEffects(WQ.effects, TQ)),
        annotations: QQ.annotations.length ? QQ.annotations.concat(WQ.annotations) : WQ.annotations,
        scrollIntoView: QQ.scrollIntoView || WQ.scrollIntoView
      }
    }

    function HW(QQ, WQ, XQ) {
      let wQ = WQ.selection,
        qQ = hW(WQ.annotations);
      return WQ.userEvent && (qQ = qQ.concat(bW.userEvent.of(WQ.userEvent))), {
        changes: WQ.changes instanceof RQ ? WQ.changes : RQ.of(WQ.changes || [], XQ, QQ.facet(IW)),
        selection: wQ && (wQ instanceof tQ ? wQ : tQ.single(wQ.anchor, wQ.head)),
        effects: hW(WQ.effects),
        annotations: qQ,
        scrollIntoView: !!WQ.scrollIntoView
      }
    }

    function aW(QQ, WQ, XQ) {
      let wQ = HW(QQ, WQ.length ? WQ[0] : {}, QQ.doc.length);
      WQ.length && !1 === WQ[0].filter && (XQ = !1);
      for (let TQ = 1; TQ < WQ.length; TQ++) {
        !1 === WQ[TQ].filter && (XQ = !1);
        let qQ = !!WQ[TQ].sequential;
        wQ = dW(wQ, HW(QQ, WQ[TQ], qQ ? wQ.changes.newLength : QQ.doc.length), qQ)
      }
      let qQ = bW.create(QQ, wQ.changes, wQ.selection, wQ.effects, wQ.annotations, wQ.scrollIntoView);
      return function(QQ) {
        let WQ = QQ.startState,
          XQ = WQ.facet(yW),
          wQ = QQ;
        for (let qQ = XQ.length - 1; qQ >= 0; qQ--) {
          let TQ = XQ[qQ](QQ);
          TQ && Object.keys(TQ).length && (wQ = dW(wQ, HW(WQ, TQ, QQ.changes.newLength), !0))
        }
        return wQ == QQ ? QQ : bW.create(WQ, QQ.changes, QQ.selection, wQ.effects, wQ.annotations, wQ.scrollIntoView)
      }(XQ ? function(QQ) {
        let WQ = QQ.startState,
          XQ = !0;
        for (let qQ of WQ.facet(jW)) {
          let WQ = qQ(QQ);
          if (!1 === WQ) {
            XQ = !1;
            break
          }
          Array.isArray(WQ) && (XQ = !0 === XQ ? WQ : vW(XQ, WQ))
        }
        if (!0 !== XQ) {
          let wQ, qQ;
          if (!1 === XQ) qQ = QQ.changes.invertedDesc, wQ = RQ.empty(WQ.doc.length);
          else {
            let WQ = QQ.changes.filter(XQ);
            wQ = WQ.changes, qQ = WQ.filtered.mapDesc(WQ.changes).invertedDesc
          }
          QQ = bW.create(WQ, wQ, QQ.selection && QQ.selection.map(qQ), UW.mapEffects(QQ.effects, qQ), QQ.annotations, QQ.scrollIntoView)
        }
        let wQ = WQ.facet(BW);
        for (let qQ = wQ.length - 1; qQ >= 0; qQ--) {
          let XQ = wQ[qQ](QQ);
          QQ = XQ instanceof bW ? XQ : Array.isArray(XQ) && 1 == XQ.length && XQ[0] instanceof bW ? XQ[0] : aW(WQ, hW(XQ), !1)
        }
        return QQ
      }(qQ) : qQ)
    }
    bW.time = DW.define(), bW.userEvent = DW.define(), bW.addToHistory = DW.define(), bW.remote = DW.define();
    const lW = [];

    function hW(QQ) {
      return null == QQ ? lW : Array.isArray(QQ) ? QQ : [QQ]
    }
    var iW = function(QQ) {
      return QQ[QQ.Word = 0] = "Word", QQ[QQ.Space = 1] = "Space", QQ[QQ.Other = 2] = "Other", QQ
    }(iW || (iW = {}));
    const cW = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let AW;
    try {
      AW = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (XX) {}

    function RW(QQ) {
      return WQ => {
        if (!/\S/.test(WQ)) return iW.Space;
        if (function(QQ) {
            if (AW) return AW.test(QQ);
            for (let WQ = 0; WQ < QQ.length; WQ++) {
              let XQ = QQ[WQ];
              if (/\w/.test(XQ) || XQ > "\x80" && (XQ.toUpperCase() != XQ.toLowerCase() || cW.test(XQ))) return !0
            }
            return !1
          }(WQ)) return iW.Word;
        for (let XQ = 0; XQ < QQ.length; XQ++)
          if (WQ.indexOf(QQ[XQ]) > -1) return iW.Word;
        return iW.Other
      }
    }
    class EW {
      constructor(QQ, WQ, XQ, wQ, qQ, TQ) {
        this.config = QQ, this.doc = WQ, this.selection = XQ, this.values = wQ, this.status = QQ.statusTemplate.slice(), this.computeSlot = qQ, TQ && (TQ._state = this);
        for (let zQ = 0; zQ < this.config.dynamicSlots.length; zQ++) PW(this, zQ << 1);
        this.computeSlot = null
      }
      field(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          XQ = this.config.address[QQ.id];
        if (null != XQ) return PW(this, XQ), gW(this, XQ);
        if (WQ) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        return aW(this, WQ, !0)
      }
      applyTransaction(QQ) {
        let WQ, XQ = this.config,
          {
            base: wQ,
            compartments: qQ
          } = XQ;
        for (let zQ of QQ.effects) zQ.is(zW.reconfigure) ? (XQ && (qQ = new Map, XQ.compartments.forEach(((QQ, WQ) => qQ.set(WQ, QQ))), XQ = null), qQ.set(zQ.value.compartment, zQ.value.extension)) : zQ.is(UW.reconfigure) ? (XQ = null, wQ = zQ.value) : zQ.is(UW.appendConfig) && (XQ = null, wQ = hW(wQ).concat(zQ.value));
        if (XQ) WQ = QQ.startState.values.slice();
        else {
          XQ = FW.resolve(wQ, qQ, this), WQ = new EW(XQ, this.doc, this.selection, XQ.dynamicSlots.map((() => null)), ((QQ, WQ) => WQ.reconfigure(QQ, this)), null).values
        }
        let TQ = QQ.startState.facet(rW) ? QQ.newSelection : QQ.newSelection.asSingle();
        new EW(XQ, QQ.newDoc, TQ, WQ, ((WQ, XQ) => XQ.update(WQ, QQ)), QQ)
      }
      replaceSelection(QQ) {
        return "string" == typeof QQ && (QQ = this.toText(QQ)), this.changeByRange((WQ => ({
          changes: {
            from: WQ.from,
            to: WQ.to,
            insert: QQ
          },
          range: tQ.cursor(WQ.from + QQ.length)
        })))
      }
      changeByRange(QQ) {
        let WQ = this.selection,
          XQ = QQ(WQ.Qy[0]),
          wQ = this.changes(XQ.changes),
          qQ = [XQ.range],
          TQ = hW(XQ.effects);
        for (let zQ = 1; zQ < WQ.Qy.length; zQ++) {
          let XQ = QQ(WQ.Qy[zQ]),
            sQ = this.changes(XQ.changes),
            FQ = sQ.map(wQ);
          for (let QQ = 0; QQ < zQ; QQ++) qQ[QQ] = qQ[QQ].map(FQ);
          let PQ = wQ.mapDesc(sQ, !0);
          qQ.push(XQ.range.map(PQ)), wQ = wQ.compose(FQ), TQ = UW.mapEffects(TQ, FQ).concat(UW.mapEffects(hW(XQ.effects), PQ))
        }
        return {
          changes: wQ,
          selection: tQ.create(qQ, WQ.mainIndex),
          effects: TQ
        }
      }
      changes() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return QQ instanceof RQ ? QQ : RQ.of(QQ, this.doc.length, this.facet(EW.lineSeparator))
      }
      toText(QQ) {
        return BQ.of(QQ.split(this.facet(EW.lineSeparator) || iQ))
      }
      sliceDoc() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(QQ, WQ, this.lineBreak)
      }
      facet(QQ) {
        let WQ = this.config.address[QQ.id];
        return null == WQ ? QQ.default : (PW(this, WQ), gW(this, WQ))
      }
      toJSON(QQ) {
        let WQ = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (QQ)
          for (let XQ in QQ) {
            let wQ = QQ[XQ];
            wQ instanceof mQ && null != this.config.address[wQ.id] && (WQ[XQ] = wQ.spec.toJSON(this.field(QQ[XQ]), this))
          }
        return WQ
      }
      static fromJSON(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        if (!QQ || "string" != typeof QQ.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let wQ = [];
        if (XQ)
          for (let qQ in XQ)
            if (Object.prototype.hasOwnProperty.call(QQ, qQ)) {
              let WQ = XQ[qQ],
                TQ = QQ[qQ];
              wQ.push(WQ.init((QQ => WQ.spec.fromJSON(TQ, QQ))))
            } return EW.create({
          doc: QQ.doc,
          selection: tQ.fromJSON(QQ.selection),
          extensions: WQ.extensions ? wQ.concat([WQ.extensions]) : wQ
        })
      }
      static create() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          WQ = FW.resolve(QQ.extensions || [], new Map),
          XQ = QQ.doc instanceof BQ ? QQ.doc : BQ.of((QQ.doc || "").split(WQ.staticFacet(EW.lineSeparator) || iQ)),
          wQ = QQ.selection ? QQ.selection instanceof tQ ? QQ.selection : tQ.single(QQ.selection.anchor, QQ.selection.head) : tQ.single(0);
        return oQ(wQ, XQ.length), WQ.staticFacet(rW) || (wQ = wQ.asSingle()), new EW(WQ, XQ, wQ, WQ.dynamicSlots.map((() => null)), ((QQ, WQ) => WQ.create(QQ)), null)
      }
      get tabSize() {
        return this.facet(EW.tabSize)
      }
      get lineBreak() {
        return this.facet(EW.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(VW)
      }
      phrase(QQ) {
        for (var WQ = arguments.length, XQ = new Array(WQ > 1 ? WQ - 1 : 0), wQ = 1; wQ < WQ; wQ++) XQ[wQ - 1] = arguments[wQ];
        for (let qQ of this.facet(EW.phrases))
          if (Object.prototype.hasOwnProperty.call(qQ, QQ)) {
            QQ = qQ[QQ];
            break
          } return XQ.length && (QQ = QQ.replace(/\$(\$|\d*)/g, ((QQ, WQ) => {
          if ("$" == WQ) return "$";
          let wQ = +(WQ || 1);
          return !wQ || wQ > XQ.length ? QQ : XQ[wQ - 1]
        }))), QQ
      }
      languageDataAt(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          wQ = [];
        for (let qQ of this.facet(JW))
          for (let TQ of qQ(this, WQ, XQ)) Object.prototype.hasOwnProperty.call(TQ, QQ) && wQ.push(TQ[QQ]);
        return wQ
      }
      charCategorizer(QQ) {
        let WQ = this.languageDataAt("wordChars", QQ);
        return RW(WQ.length ? WQ[0] : "")
      }
      wordAt(QQ) {
        let {
          text: WQ,
          from: XQ,
          length: wQ
        } = this.doc.lineAt(QQ), qQ = this.charCategorizer(QQ), TQ = QQ - XQ, zQ = QQ - XQ;
        for (; TQ > 0;) {
          let QQ = HQ(WQ, TQ, !1);
          if (qQ(WQ.slice(QQ, TQ)) != iW.Word) break;
          TQ = QQ
        }
        for (; zQ < wQ;) {
          let QQ = HQ(WQ, zQ);
          if (qQ(WQ.slice(zQ, QQ)) != iW.Word) break;
          zQ = QQ
        }
        return TQ == zQ ? null : tQ.range(TQ + XQ, zQ + XQ)
      }
    }

    function CW(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        wQ = {};
      for (let qQ of QQ)
        for (let QQ of Object.keys(qQ)) {
          let WQ = qQ[QQ],
            TQ = wQ[QQ];
          if (void 0 === TQ) wQ[QQ] = WQ;
          else if (TQ === WQ || void 0 === WQ);
          else {
            if (!Object.hasOwnProperty.call(XQ, QQ)) throw new Error("Config merge conflict for field " + QQ);
            wQ[QQ] = XQ[QQ](TQ, WQ)
          }
        }
      for (let qQ in WQ) void 0 === wQ[qQ] && (wQ[qQ] = WQ[qQ]);
      return wQ
    }
    EW.allowMultipleSelections = rW, EW.tabSize = nQ.define({
      combine: QQ => QQ.length ? QQ[0] : 4
    }), EW.lineSeparator = IW, EW.readOnly = VW, EW.phrases = nQ.define({
      compare(QQ, WQ) {
        let XQ = Object.keys(QQ),
          wQ = Object.keys(WQ);
        return XQ.length == wQ.length && XQ.every((XQ => QQ[XQ] == WQ[XQ]))
      }
    }), EW.languageData = JW, EW.changeFilter = jW, EW.transactionFilter = BW, EW.transactionExtender = yW, zW.reconfigure = UW.define();
    class uW {
      eq(QQ) {
        return this == QQ
      }
      range(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QQ;
        return kW.create(QQ, WQ, this)
      }
    }

    function LW(QQ, WQ) {
      return QQ == WQ || QQ.constructor == WQ.constructor && QQ.eq(WQ)
    }
    uW.prototype.startSide = uW.prototype.endSide = 0, uW.prototype.point = !1, uW.prototype.mapMode = cQ.TrackDel;
    class kW {
      constructor(QQ, WQ, XQ) {
        this.from = QQ, this.to = WQ, this.value = XQ
      }
      static create(QQ, WQ, XQ) {
        return new kW(QQ, WQ, XQ)
      }
    }

    function fW(QQ, WQ) {
      return QQ.from - WQ.from || QQ.value.startSide - WQ.value.startSide
    }
    class SW {
      constructor(QQ, WQ, XQ, wQ) {
        this.from = QQ, this.to = WQ, this.value = XQ, this.RwQ = wQ
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          qQ = XQ ? this.to : this.from;
        for (let TQ = wQ, zQ = qQ.length;;) {
          if (TQ == zQ) return TQ;
          let wQ = TQ + zQ >> 1,
            sQ = qQ[wQ] - QQ || (XQ ? this.value[wQ].endSide : this.value[wQ].startSide) - WQ;
          if (wQ == TQ) return sQ >= 0 ? TQ : zQ;
          sQ >= 0 ? zQ = wQ : TQ = wQ + 1
        }
      }
      between(QQ, WQ, XQ, wQ) {
        for (let qQ = this.findIndex(WQ, -1e9, !0), TQ = this.findIndex(XQ, 1e9, !1, qQ); qQ < TQ; qQ++)
          if (!1 === wQ(this.from[qQ] + QQ, this.to[qQ] + QQ, this.value[qQ])) return !1
      }
      map(QQ, WQ) {
        let XQ = [],
          wQ = [],
          qQ = [],
          TQ = -1,
          zQ = -1;
        for (let sQ = 0; sQ < this.value.length; sQ++) {
          let FQ, PQ, gQ = this.value[sQ],
            JQ = this.from[sQ] + QQ,
            rQ = this.to[sQ] + QQ;
          if (JQ == rQ) {
            let QQ = WQ.mapPos(JQ, gQ.startSide, gQ.mapMode);
            if (null == QQ) continue;
            if (FQ = PQ = QQ, gQ.startSide != gQ.endSide && (PQ = WQ.mapPos(JQ, gQ.endSide), PQ < FQ)) continue
          } else if (FQ = WQ.mapPos(JQ, gQ.startSide), PQ = WQ.mapPos(rQ, gQ.endSide), FQ > PQ || FQ == PQ && gQ.startSide > 0 && gQ.endSide <= 0) continue;
          (PQ - FQ || gQ.endSide - gQ.startSide) < 0 || (TQ < 0 && (TQ = FQ), gQ.point && (zQ = Math.max(zQ, PQ - FQ)), XQ.push(gQ), wQ.push(FQ - TQ), qQ.push(PQ - TQ))
        }
        return {
          mapped: XQ.length ? new SW(wQ, qQ, XQ, zQ) : null,
          pos: TQ
        }
      }
    }
    class tW {
      constructor(QQ, WQ, XQ, wQ) {
        this.chunkPos = QQ, this.chunk = WQ, this.nextLayer = XQ, this.RwQ = wQ
      }
      static create(QQ, WQ, XQ, wQ) {
        return new tW(QQ, WQ, XQ, wQ)
      }
      get length() {
        let QQ = this.chunk.length - 1;
        return QQ < 0 ? 0 : Math.max(this.chunkEnd(QQ), this.nextLayer.length)
      }
      get size() {
        if (this.mI) return 0;
        let QQ = this.nextLayer.size;
        for (let WQ of this.chunk) QQ += WQ.value.length;
        return QQ
      }
      chunkEnd(QQ) {
        return this.chunkPos[QQ] + this.chunk[QQ].length
      }
      update(QQ) {
        let {
          add: WQ = [],
          sort: XQ = !1,
          filterFrom: wQ = 0,
          filterTo: qQ = this.length
        } = QQ, TQ = QQ.filter;
        if (0 == WQ.length && !TQ) return this;
        if (XQ && (WQ = WQ.slice().sort(fW)), this.mI) return WQ.length ? tW.of(WQ) : this;
        let zQ = new nW(this, null, -1).goto(0),
          sQ = 0,
          FQ = [],
          PQ = new oW;
        for (; zQ.value || sQ < WQ.length;)
          if (sQ < WQ.length && (zQ.from - WQ[sQ].from || zQ.startSide - WQ[sQ].value.startSide) >= 0) {
            let QQ = WQ[sQ++];
            PQ.addInner(QQ.from, QQ.to, QQ.value) || FQ.push(QQ)
          } else 1 == zQ.rangeIndex && zQ.chunkIndex < this.chunk.length && (sQ == WQ.length || this.chunkEnd(zQ.chunkIndex) < WQ[sQ].from) && (!TQ || wQ > this.chunkEnd(zQ.chunkIndex) || qQ < this.chunkPos[zQ.chunkIndex]) && PQ.addChunk(this.chunkPos[zQ.chunkIndex], this.chunk[zQ.chunkIndex]) ? zQ.nextChunk() : ((!TQ || wQ > zQ.to || qQ < zQ.from || TQ(zQ.from, zQ.to, zQ.value)) && (PQ.addInner(zQ.from, zQ.to, zQ.value) || FQ.push(kW.create(zQ.from, zQ.to, zQ.value))), zQ.next());
        return PQ.finishInner(this.nextLayer.mI && !FQ.length ? tW.empty : this.nextLayer.update({
          add: FQ,
          filter: TQ,
          filterFrom: wQ,
          filterTo: qQ
        }))
      }
      map(QQ) {
        if (QQ.empty || this.mI) return this;
        let WQ = [],
          XQ = [],
          wQ = -1;
        for (let TQ = 0; TQ < this.chunk.length; TQ++) {
          let qQ = this.chunkPos[TQ],
            zQ = this.chunk[TQ],
            sQ = QQ.touchesRange(qQ, qQ + zQ.length);
          if (!1 === sQ) wQ = Math.max(wQ, zQ.RwQ), WQ.push(zQ), XQ.push(QQ.mapPos(qQ));
          else if (!0 === sQ) {
            let {
              mapped: TQ,
              pos: sQ
            } = zQ.map(qQ, QQ);
            TQ && (wQ = Math.max(wQ, TQ.RwQ), WQ.push(TQ), XQ.push(sQ))
          }
        }
        let qQ = this.nextLayer.map(QQ);
        return 0 == WQ.length ? qQ : new tW(XQ, WQ, qQ || tW.empty, wQ)
      }
      between(QQ, WQ, XQ) {
        if (!this.mI) {
          for (let wQ = 0; wQ < this.chunk.length; wQ++) {
            let qQ = this.chunkPos[wQ],
              TQ = this.chunk[wQ];
            if (WQ >= qQ && QQ <= qQ + TQ.length && !1 === TQ.between(qQ, QQ - qQ, WQ - qQ, XQ)) return
          }
          this.nextLayer.between(QQ, WQ, XQ)
        }
      }
      iter() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return xW.from([this]).goto(QQ)
      }
      get mI() {
        return this.nextLayer == this
      }
      static iter(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xW.from(QQ).goto(WQ)
      }
      static compare(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          TQ = QQ.filter((QQ => QQ.RwQ > 0 || !QQ.mI && QQ.RwQ >= qQ)),
          zQ = WQ.filter((QQ => QQ.RwQ > 0 || !QQ.mI && QQ.RwQ >= qQ)),
          sQ = eW(TQ, zQ, XQ),
          FQ = new NW(TQ, sQ, qQ),
          PQ = new NW(zQ, sQ, qQ);
        XQ.iterGaps(((QQ, WQ, XQ) => ZW(FQ, QQ, PQ, WQ, XQ, wQ))), XQ.empty && 0 == XQ.length && ZW(FQ, 0, PQ, 0, 0, wQ)
      }
      static eq(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        null == wQ && (wQ = 999999999);
        let qQ = QQ.filter((QQ => !QQ.mI && WQ.indexOf(QQ) < 0)),
          TQ = WQ.filter((WQ => !WQ.mI && QQ.indexOf(WQ) < 0));
        if (qQ.length != TQ.length) return !1;
        if (!qQ.length) return !0;
        let zQ = eW(qQ, TQ),
          sQ = new NW(qQ, zQ, 0).goto(XQ),
          FQ = new NW(TQ, zQ, 0).goto(XQ);
        for (;;) {
          if (sQ.to != FQ.to || !OW(sQ.active, FQ.active) || sQ.point && (!FQ.point || !LW(sQ.point, FQ.point))) return !1;
          if (sQ.to > wQ) return !0;
          sQ.next(), FQ.next()
        }
      }
      static spans(QQ, WQ, XQ, wQ) {
        let qQ = new NW(QQ, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(WQ),
          TQ = WQ,
          zQ = qQ.openStart;
        for (;;) {
          let QQ = Math.min(qQ.to, XQ);
          if (qQ.point) {
            let XQ = qQ.activeForPoint(qQ.to),
              sQ = qQ.pointFrom < WQ ? XQ.length + 1 : qQ.point.startSide < 0 ? XQ.length : Math.min(XQ.length, zQ);
            wQ.point(TQ, QQ, qQ.point, XQ, sQ, qQ.pointRank), zQ = Math.min(qQ.openEnd(QQ), XQ.length)
          } else QQ > TQ && (wQ.span(TQ, QQ, qQ.active, zQ), zQ = qQ.openEnd(QQ));
          if (qQ.to > XQ) return zQ + (qQ.point && qQ.to > XQ ? 1 : 0);
          TQ = qQ.to, qQ.next()
        }
      }
      static of (QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = new oW;
        for (let wQ of QQ instanceof kW ? [QQ] : WQ ? function(QQ) {
            if (QQ.length > 1)
              for (let WQ = QQ[0], XQ = 1; XQ < QQ.length; XQ++) {
                let wQ = QQ[XQ];
                if (fW(WQ, wQ) > 0) return QQ.slice().sort(fW);
                WQ = wQ
              }
            return QQ
          }(QQ) : QQ) XQ.add(wQ.from, wQ.to, wQ.value);
        return XQ.finish()
      }
      static join(QQ) {
        if (!QQ.length) return tW.empty;
        let WQ = QQ[QQ.length - 1];
        for (let XQ = QQ.length - 2; XQ >= 0; XQ--)
          for (let wQ = QQ[XQ]; wQ != tW.empty; wQ = wQ.nextLayer) WQ = new tW(wQ.chunkPos, wQ.chunk, WQ, Math.max(wQ.RwQ, WQ.RwQ));
        return WQ
      }
    }
    tW.empty = new tW([], [], null, -1), tW.empty.nextLayer = tW.empty;
    class oW {
      finishChunk(QQ) {
        this.chunks.push(new SW(this.from, this.to, this.value, this.RwQ)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.RwQ), this.RwQ = -1, QQ && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.RwQ = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(QQ, WQ, XQ) {
        this.addInner(QQ, WQ, XQ) || (this.nextLayer || (this.nextLayer = new oW)).add(QQ, WQ, XQ)
      }
      addInner(QQ, WQ, XQ) {
        let wQ = QQ - this.lastTo || XQ.startSide - this.last.endSide;
        if (wQ <= 0 && (QQ - this.lastFrom || XQ.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(wQ < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = QQ), this.from.push(QQ - this.chunkStart), this.to.push(WQ - this.chunkStart), this.last = XQ, this.lastFrom = QQ, this.lastTo = WQ, this.value.push(XQ), XQ.point && (this.RwQ = Math.max(this.RwQ, WQ - QQ)), !0)
      }
      addChunk(QQ, WQ) {
        if ((QQ - this.lastTo || WQ.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, WQ.RwQ), this.chunks.push(WQ), this.chunkPos.push(QQ);
        let XQ = WQ.value.length - 1;
        return this.last = WQ.value[XQ], this.lastFrom = WQ.from[XQ] + QQ, this.lastTo = WQ.to[XQ] + QQ, !0
      }
      finish() {
        return this.finishInner(tW.empty)
      }
      finishInner(QQ) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return QQ;
        let WQ = tW.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(QQ) : QQ, this.setMaxPoint);
        return this.from = null, WQ
      }
    }

    function eW(QQ, WQ, XQ) {
      let wQ = new Map;
      for (let TQ of QQ)
        for (let QQ = 0; QQ < TQ.chunk.length; QQ++) TQ.chunk[QQ].RwQ <= 0 && wQ.set(TQ.chunk[QQ], TQ.chunkPos[QQ]);
      let qQ = new Set;
      for (let TQ of WQ)
        for (let QQ = 0; QQ < TQ.chunk.length; QQ++) {
          let WQ = wQ.get(TQ.chunk[QQ]);
          null == WQ || (XQ ? XQ.mapPos(WQ) : WQ) != TQ.chunkPos[QQ] || (null === XQ || void 0 === XQ ? void 0 : XQ.touchesRange(WQ, WQ + TQ.chunk[QQ].length)) || qQ.add(TQ.chunk[QQ])
        }
      return qQ
    }
    class nW {
      constructor(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = QQ, this.skip = WQ, this.EwQ = XQ, this.rank = wQ
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(QQ, WQ, !1), this
      }
      gotoInner(QQ, WQ, XQ) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let WQ = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(WQ) || this.layer.chunkEnd(this.chunkIndex) < QQ || WQ.RwQ < this.EwQ)) break;
          this.chunkIndex++, XQ = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let wQ = this.layer.chunk[this.chunkIndex].findIndex(QQ - this.layer.chunkPos[this.chunkIndex], WQ, !0);
          (!XQ || this.rangeIndex < wQ) && this.setRangeIndex(wQ)
        }
        this.next()
      }
      forward(QQ, WQ) {
        (this.to - QQ || this.endSide - WQ) < 0 && this.gotoInner(QQ, WQ, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let QQ = this.layer.chunkPos[this.chunkIndex],
              WQ = this.layer.chunk[this.chunkIndex],
              XQ = QQ + WQ.from[this.rangeIndex];
            if (this.from = XQ, this.to = QQ + WQ.to[this.rangeIndex], this.value = WQ.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.EwQ < 0 || this.value.point && this.to - this.from >= this.EwQ) break
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
    class xW {
      constructor(QQ) {
        this.heap = QQ
      }
      static from(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          wQ = [];
        for (let qQ = 0; qQ < QQ.length; qQ++)
          for (let TQ = QQ[qQ]; !TQ.mI; TQ = TQ.nextLayer) TQ.RwQ >= XQ && wQ.push(new nW(TQ, WQ, XQ, qQ));
        return 1 == wQ.length ? wQ[0] : new xW(wQ)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let XQ of this.heap) XQ.goto(QQ, WQ);
        for (let XQ = this.heap.length >> 1; XQ >= 0; XQ--) YW(this.heap, XQ);
        return this.next(), this
      }
      forward(QQ, WQ) {
        for (let XQ of this.heap) XQ.forward(QQ, WQ);
        for (let XQ = this.heap.length >> 1; XQ >= 0; XQ--) YW(this.heap, XQ);
        (this.to - QQ || this.value.endSide - WQ) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let QQ = this.heap[0];
          this.from = QQ.from, this.to = QQ.to, this.value = QQ.value, this.rank = QQ.rank, QQ.value && QQ.next(), YW(this.heap, 0)
        }
      }
    }

    function YW(QQ, WQ) {
      for (let XQ = QQ[WQ];;) {
        let wQ = 1 + (WQ << 1);
        if (wQ >= QQ.length) break;
        let qQ = QQ[wQ];
        if (wQ + 1 < QQ.length && qQ.compare(QQ[wQ + 1]) >= 0 && (qQ = QQ[wQ + 1], wQ++), XQ.compare(qQ) < 0) break;
        QQ[wQ] = XQ, QQ[WQ] = qQ, WQ = wQ
      }
    }
    class NW {
      constructor(QQ, WQ, XQ) {
        this.EwQ = XQ, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = xW.from(QQ, WQ, XQ)
      }
      goto(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(QQ, WQ), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = QQ, this.endSide = WQ, this.openStart = -1, this.next(), this
      }
      forward(QQ, WQ) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - QQ || this.active[this.minActive].endSide - WQ) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(QQ, WQ)
      }
      removeActive(QQ) {
        KW(this.active, QQ), KW(this.activeTo, QQ), KW(this.activeRank, QQ), this.minActive = MW(this.active, this.activeTo)
      }
      addActive(QQ) {
        let WQ = 0,
          {
            value: XQ,
            to: wQ,
            rank: qQ
          } = this.cursor;
        for (; WQ < this.activeRank.length && (qQ - this.activeRank[WQ] || wQ - this.activeTo[WQ]) > 0;) WQ++;
        mW(this.active, WQ, XQ), mW(this.activeTo, WQ, wQ), mW(this.activeRank, WQ, qQ), QQ && mW(QQ, WQ, this.cursor.from), this.minActive = MW(this.active, this.activeTo)
      }
      next() {
        let QQ = this.to,
          WQ = this.point;
        this.point = null;
        let XQ = this.openStart < 0 ? [] : null;
        for (;;) {
          let wQ = this.minActive;
          if (wQ > -1 && (this.activeTo[wQ] - this.cursor.from || this.active[wQ].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[wQ] > QQ) {
              this.to = this.activeTo[wQ], this.endSide = this.active[wQ].endSide;
              break
            }
            this.removeActive(wQ), XQ && KW(XQ, wQ)
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
                if (!(WQ && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = QQ, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = QQ.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(XQ), this.cursor.next()
            }
          }
        }
        if (XQ) {
          this.openStart = 0;
          for (let WQ = XQ.length - 1; WQ >= 0 && XQ[WQ] < QQ; WQ--) this.openStart++
        }
      }
      activeForPoint(QQ) {
        if (!this.active.length) return this.active;
        let WQ = [];
        for (let XQ = this.active.length - 1; XQ >= 0 && !(this.activeRank[XQ] < this.pointRank); XQ--)(this.activeTo[XQ] > QQ || this.activeTo[XQ] == QQ && this.active[XQ].endSide >= this.point.endSide) && WQ.push(this.active[XQ]);
        return WQ.reverse()
      }
      openEnd(QQ) {
        let WQ = 0;
        for (let XQ = this.activeTo.length - 1; XQ >= 0 && this.activeTo[XQ] > QQ; XQ--) WQ++;
        return WQ
      }
    }

    function ZW(QQ, WQ, XQ, wQ, qQ, TQ) {
      QQ.goto(WQ), XQ.goto(wQ);
      let zQ = wQ + qQ,
        sQ = wQ,
        FQ = wQ - WQ,
        PQ = !!TQ.boundChange;
      for (let gQ = !1;;) {
        let WQ = QQ.to + FQ - XQ.to,
          wQ = WQ || QQ.endSide - XQ.endSide,
          qQ = wQ < 0 ? QQ.to + FQ : XQ.to,
          JQ = Math.min(qQ, zQ);
        if (QQ.point || XQ.point ? (QQ.point && XQ.point && LW(QQ.point, XQ.point) && OW(QQ.activeForPoint(QQ.to), XQ.activeForPoint(XQ.to)) || TQ.comparePoint(sQ, JQ, QQ.point, XQ.point), gQ = !1) : (gQ && TQ.boundChange(sQ), JQ > sQ && !OW(QQ.active, XQ.active) && TQ.compareRange(sQ, JQ, QQ.active, XQ.active), PQ && JQ < zQ && (WQ || QQ.openEnd(qQ) != XQ.openEnd(qQ)) && (gQ = !0)), qQ > zQ) break;
        sQ = qQ, wQ <= 0 && QQ.next(), wQ >= 0 && XQ.next()
      }
    }

    function OW(QQ, WQ) {
      if (QQ.length != WQ.length) return !1;
      for (let XQ = 0; XQ < QQ.length; XQ++)
        if (QQ[XQ] != WQ[XQ] && !LW(QQ[XQ], WQ[XQ])) return !1;
      return !0
    }

    function KW(QQ, WQ) {
      for (let XQ = WQ, wQ = QQ.length - 1; XQ < wQ; XQ++) QQ[XQ] = QQ[XQ + 1];
      QQ.pop()
    }

    function mW(QQ, WQ, XQ) {
      for (let wQ = QQ.length - 1; wQ >= WQ; wQ--) QQ[wQ + 1] = QQ[wQ];
      QQ[WQ] = XQ
    }

    function MW(QQ, WQ) {
      let XQ = -1,
        wQ = 1e9;
      for (let qQ = 0; qQ < WQ.length; qQ++)(WQ[qQ] - wQ || QQ[qQ].endSide - QQ[XQ].endSide) < 0 && (XQ = qQ, wQ = WQ[qQ]);
      return XQ
    }

    function QX(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : QQ.length,
        wQ = 0;
      for (let qQ = 0; qQ < XQ && qQ < QQ.length;) 9 == QQ.charCodeAt(qQ) ? (wQ += WQ - wQ % WQ, qQ++) : (wQ++, qQ = HQ(QQ, qQ));
      return wQ
    }

    function WX(QQ, WQ, XQ, wQ) {
      for (let qQ = 0, TQ = 0;;) {
        if (TQ >= WQ) return qQ;
        if (qQ == QQ.length) break;
        TQ += 9 == QQ.charCodeAt(qQ) ? XQ - TQ % XQ : 1, qQ = HQ(QQ, qQ)
      }
      return !0 === wQ ? -1 : QQ.length
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);