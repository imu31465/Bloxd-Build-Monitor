export const id = 604;
export const ids = [604];
export const modules = {
  44818: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => xB,
      d: () => lH,
      ChangeSet: () => KH,
      h: () => IB,
      i: () => nH,
      k: () => cB,
      l: () => wH,
      n: () => fH,
      p: () => rB,
      x: () => nB,
      t: () => FB,
      A: () => qB,
      B: () => TB,
      E: () => pH,
      F: () => QH,
      J: () => UB,
      N: () => kH,
      Q: () => oH,
      U: () => eB,
      Y: () => HL,
      $: () => bH,
      db: () => BL,
      hb: () => mH
    });
    let AH = [],
      rH = [];

    function SH(HH) {
      if (HH < 768) return !1;
      for (let BH = 0, LH = AH.length;;) {
        let SH = BH + LH >> 1;
        if (HH < AH[SH]) LH = SH;
        else {
          if (!(HH >= rH[SH])) return !0;
          BH = SH + 1
        }
        if (BH == LH) return !1
      }
    }

    function hH(HH) {
      return HH >= 127462 && HH <= 127487
    }(() => {
      let HH = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((HH => HH ? parseInt(HH, 36) : 1));
      for (let BH = 0, LH = 0; BH < HH.length; BH++)(BH % 2 ? rH : AH).push(LH += HH[BH])
    })();
    const tH = 8205;

    function zH(HH, BH) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? CH : EH)(HH, BH, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function CH(HH, BH, LH) {
      if (BH == HH.length) return BH;
      BH && GH(HH.charCodeAt(BH)) && YH(HH.charCodeAt(BH - 1)) && BH--;
      let AH = XH(HH, BH);
      for (BH += uH(AH); BH < HH.length;) {
        let rH = XH(HH, BH);
        if (AH == tH || rH == tH || LH && SH(rH)) BH += uH(rH), AH = rH;
        else {
          if (!hH(rH)) break;
          {
            let LH = 0,
              AH = BH - 2;
            for (; AH >= 0 && hH(XH(HH, AH));) LH++, AH -= 2;
            if (LH % 2 == 0) break;
            BH += 2
          }
        }
      }
      return BH
    }

    function EH(HH, BH, LH) {
      for (; BH > 0;) {
        let AH = CH(HH, BH - 2, LH);
        if (AH < BH) return AH;
        BH--
      }
      return 0
    }

    function XH(HH, BH) {
      let LH = HH.charCodeAt(BH);
      if (!YH(LH) || BH + 1 == HH.length) return LH;
      let AH = HH.charCodeAt(BH + 1);
      return GH(AH) ? AH - 56320 + (LH - 55296 << 10) + 65536 : LH
    }

    function GH(HH) {
      return HH >= 56320 && HH < 57344
    }

    function YH(HH) {
      return HH >= 55296 && HH < 56320
    }

    function uH(HH) {
      return HH < 65536 ? 1 : 2
    }
    class QH {
      lineAt(HH) {
        if (HH < 0 || HH > this.length) throw new RangeError(`Invalid position ${HH} in document of length ${this.length}`);
        return this.lineInner(HH, !1, 1, 0)
      }
      line(HH) {
        if (HH < 1 || HH > this.lines) throw new RangeError(`Invalid line number ${HH} in ${this.lines}-line document`);
        return this.lineInner(HH, !0, 1, 0)
      }
      replace(HH, BH, LH) {
        [HH, BH] = OH(this, HH, BH);
        let AH = [];
        return this.decompose(0, HH, AH, 2), LH.length && LH.decompose(0, LH.length, AH, 3), this.decompose(BH, this.length, AH, 1), MH.from(AH, this.length - (BH - HH) + LH.length)
      }
      append(HH) {
        return this.replace(this.length, this.length, HH)
      }
      slice(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [HH, BH] = OH(this, HH, BH);
        let LH = [];
        return this.decompose(HH, BH, LH, 0), MH.from(LH, BH - HH)
      }
      eq(HH) {
        if (HH == this) return !0;
        if (HH.length != this.length || HH.lines != this.lines) return !1;
        let BH = this.scanIdentical(HH, 1),
          LH = this.length - this.scanIdentical(HH, -1),
          AH = new PH(this),
          rH = new PH(HH);
        for (let SH = BH, hH = BH;;) {
          if (AH.next(SH), rH.next(SH), SH = 0, AH.lineBreak != rH.lineBreak || AH.done != rH.done || AH.value != rH.value) return !1;
          if (hH += AH.value.length, AH.done || hH >= LH) return !0
        }
      }
      iter() {
        return new PH(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new TH(this, HH, BH)
      }
      iterLines(HH, BH) {
        let LH;
        if (null == HH) LH = this.iter();
        else {
          null == BH && (BH = this.lines + 1);
          let AH = this.line(HH).from;
          LH = this.iterRange(AH, Math.max(AH, BH == this.lines + 1 ? this.length : BH <= 1 ? 0 : this.line(BH - 1).to))
        }
        return new UH(LH)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let HH = [];
        return this.flatten(HH), HH
      }
      constructor() {}
      static of (HH) {
        if (0 == HH.length) throw new RangeError("A document must have at least one line");
        return 1 != HH.length || HH[0] ? HH.length <= 32 ? new WH(HH) : MH.from(WH.split(HH, [])) : QH.empty
      }
    }
    class WH extends QH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(HH) {
          let BH = -1;
          for (let LH of HH) BH += LH.length + 1;
          return BH
        }(HH);
        super(), this.text = HH, this.length = BH
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(HH, BH, LH, AH) {
        for (let rH = 0;; rH++) {
          let SH = this.text[rH],
            hH = AH + SH.length;
          if ((BH ? LH : hH) >= HH) return new VH(AH, hH, LH, SH);
          AH = hH + 1, LH++
        }
      }
      decompose(HH, BH, LH, AH) {
        let rH = HH <= 0 && BH >= this.length ? this : new WH(vH(this.text, HH, BH), Math.min(BH, this.length) - Math.max(0, HH));
        if (1 & AH) {
          let HH = LH.pop(),
            BH = xH(rH.text, HH.text.slice(), 0, rH.length);
          if (BH.length <= 32) LH.push(new WH(BH, HH.length + rH.length));
          else {
            let HH = BH.length >> 1;
            LH.push(new WH(BH.slice(0, HH)), new WH(BH.slice(HH)))
          }
        } else LH.push(rH)
      }
      replace(HH, BH, LH) {
        if (!(LH instanceof WH)) return super.replace(HH, BH, LH);
        [HH, BH] = OH(this, HH, BH);
        let AH = xH(this.text, xH(LH.text, vH(this.text, 0, HH)), BH),
          rH = this.length + LH.length - (BH - HH);
        return AH.length <= 32 ? new WH(AH, rH) : MH.from(WH.split(AH, []), rH)
      }
      sliceString(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [HH, BH] = OH(this, HH, BH);
        let AH = "";
        for (let rH = 0, SH = 0; rH <= BH && SH < this.text.length; SH++) {
          let hH = this.text[SH],
            tH = rH + hH.length;
          rH > HH && SH && (AH += LH), HH < tH && BH > rH && (AH += hH.slice(Math.max(0, HH - rH), BH - rH)), rH = tH + 1
        }
        return AH
      }
      flatten(HH) {
        for (let BH of this.text) HH.push(BH)
      }
      scanIdentical() {
        return 0
      }
      static split(HH, BH) {
        let LH = [],
          AH = -1;
        for (let rH of HH) LH.push(rH), AH += rH.length + 1, 32 == LH.length && (BH.push(new WH(LH, AH)), LH = [], AH = -1);
        return AH > -1 && BH.push(new WH(LH, AH)), BH
      }
    }
    class MH extends QH {
      constructor(HH, BH) {
        super(), this.children = HH, this.length = BH, this.lines = 0;
        for (let LH of HH) this.lines += LH.lines
      }
      lineInner(HH, BH, LH, AH) {
        for (let rH = 0;; rH++) {
          let SH = this.children[rH],
            hH = AH + SH.length,
            tH = LH + SH.lines - 1;
          if ((BH ? tH : hH) >= HH) return SH.lineInner(HH, BH, LH, AH);
          AH = hH + 1, LH = tH + 1
        }
      }
      decompose(HH, BH, LH, AH) {
        for (let rH = 0, SH = 0; SH <= BH && rH < this.children.length; rH++) {
          let hH = this.children[rH],
            tH = SH + hH.length;
          if (HH <= tH && BH >= SH) {
            let rH = AH & ((SH <= HH ? 1 : 0) | (tH >= BH ? 2 : 0));
            SH >= HH && tH <= BH && !rH ? LH.push(hH) : hH.decompose(HH - SH, BH - SH, LH, rH)
          }
          SH = tH + 1
        }
      }
      replace(HH, BH, LH) {
        if ([HH, BH] = OH(this, HH, BH), LH.lines < this.lines)
          for (let AH = 0, rH = 0; AH < this.children.length; AH++) {
            let SH = this.children[AH],
              hH = rH + SH.length;
            if (HH >= rH && BH <= hH) {
              let tH = SH.replace(HH - rH, BH - rH, LH),
                zH = this.lines - SH.lines + tH.lines;
              if (tH.lines < zH >> 4 && tH.lines > zH >> 6) {
                let rH = this.children.slice();
                return rH[AH] = tH, new MH(rH, this.length - (BH - HH) + LH.length)
              }
              return super.replace(rH, hH, tH)
            }
            rH = hH + 1
          }
        return super.replace(HH, BH, LH)
      }
      sliceString(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [HH, BH] = OH(this, HH, BH);
        let AH = "";
        for (let rH = 0, SH = 0; rH < this.children.length && SH <= BH; rH++) {
          let hH = this.children[rH],
            tH = SH + hH.length;
          SH > HH && rH && (AH += LH), HH < tH && BH > SH && (AH += hH.sliceString(HH - SH, BH - SH, LH)), SH = tH + 1
        }
        return AH
      }
      flatten(HH) {
        for (let BH of this.children) BH.flatten(HH)
      }
      scanIdentical(HH, BH) {
        if (!(HH instanceof MH)) return 0;
        let LH = 0,
          [AH, rH, SH, hH] = BH > 0 ? [0, 0, this.children.length, HH.children.length] : [this.children.length - 1, HH.children.length - 1, -1, -1];
        for (;; AH += BH, rH += BH) {
          if (AH == SH || rH == hH) return LH;
          let tH = this.children[AH],
            zH = HH.children[rH];
          if (tH != zH) return LH + tH.scanIdentical(zH, BH);
          LH += tH.length + 1
        }
      }
      static from(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH.reduce(((HH, BH) => HH + BH.length + 1), -1),
          LH = 0;
        for (let GH of HH) LH += GH.lines;
        if (LH < 32) {
          let LH = [];
          for (let BH of HH) BH.flatten(LH);
          return new WH(LH, BH)
        }
        let AH = Math.max(32, LH >> 5),
          rH = AH << 1,
          SH = AH >> 1,
          hH = [],
          tH = 0,
          zH = -1,
          CH = [];

        function EH(HH) {
          let BH;
          if (HH.lines > rH && HH instanceof MH)
            for (let LH of HH.children) EH(LH);
          else HH.lines > SH && (tH > SH || !tH) ? (XH(), hH.push(HH)) : HH instanceof WH && tH && (BH = CH[CH.length - 1]) instanceof WH && HH.lines + BH.lines <= 32 ? (tH += HH.lines, zH += HH.length + 1, CH[CH.length - 1] = new WH(BH.text.concat(HH.text), BH.length + 1 + HH.length)) : (tH + HH.lines > AH && XH(), tH += HH.lines, zH += HH.length + 1, CH.push(HH))
        }

        function XH() {
          0 != tH && (hH.push(1 == CH.length ? CH[0] : MH.from(CH, zH)), zH = -1, tH = CH.length = 0)
        }
        for (let GH of HH) EH(GH);
        return XH(), 1 == hH.length ? hH[0] : new MH(hH, BH)
      }
    }

    function xH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let rH = 0, SH = 0, hH = !0; SH < HH.length && rH <= AH; SH++) {
        let tH = HH[SH],
          zH = rH + tH.length;
        zH >= LH && (zH > AH && (tH = tH.slice(0, AH - rH)), rH < LH && (tH = tH.slice(LH - rH)), hH ? (BH[BH.length - 1] += tH, hH = !1) : BH.push(tH)), rH = zH + 1
      }
      return BH
    }

    function vH(HH, BH, LH) {
      return xH(HH, [""], BH, LH)
    }
    QH.empty = new WH([""], 0);
    class PH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = BH, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [HH], this.offsets = [BH > 0 ? 1 : (HH instanceof WH ? HH.text.length : HH.children.length) << 1]
      }
      nextInner(HH, BH) {
        for (this.done = this.lineBreak = !1;;) {
          let LH = this.nodes.length - 1,
            AH = this.nodes[LH],
            rH = this.offsets[LH],
            SH = rH >> 1,
            hH = AH instanceof WH ? AH.text.length : AH.children.length;
          if (SH == (BH > 0 ? hH : 0)) {
            if (0 == LH) return this.done = !0, this.value = "", this;
            BH > 0 && this.offsets[LH - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & rH) == (BH > 0 ? 0 : 1)) {
            if (this.offsets[LH] += BH, 0 == HH) return this.lineBreak = !0, this.value = "\n", this;
            HH--
          } else if (AH instanceof WH) {
            let rH = AH.text[SH + (BH < 0 ? -1 : 0)];
            if (this.offsets[LH] += BH, rH.length > Math.max(0, HH)) return this.value = 0 == HH ? rH : BH > 0 ? rH.slice(HH) : rH.slice(0, rH.length - HH), this;
            HH -= rH.length
          } else {
            let rH = AH.children[SH + (BH < 0 ? -1 : 0)];
            HH > rH.length ? (HH -= rH.length, this.offsets[LH] += BH) : (BH < 0 && this.offsets[LH]--, this.nodes.push(rH), this.offsets.push(BH > 0 ? 1 : (rH instanceof WH ? rH.text.length : rH.children.length) << 1))
          }
        }
      }
      next() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return HH < 0 && (this.nextInner(-HH, -this.dir), HH = this.value.length), this.nextInner(HH, this.dir)
      }
    }
    class TH {
      constructor(HH, BH, LH) {
        this.value = "", this.done = !1, this.cursor = new PH(HH, BH > LH ? -1 : 1), this.pos = BH > LH ? HH.length : 0, this.from = Math.min(BH, LH), this.to = Math.max(BH, LH)
      }
      nextInner(HH, BH) {
        if (BH < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        HH += Math.max(0, BH < 0 ? this.pos - this.to : this.from - this.pos);
        let LH = BH < 0 ? this.pos - this.from : this.to - this.pos;
        HH > LH && (HH = LH), LH -= HH;
        let {
          value: AH
        } = this.cursor.next(HH);
        return this.pos += (AH.length + HH) * BH, this.value = AH.length <= LH ? AH : BH < 0 ? AH.slice(AH.length - LH) : AH.slice(0, LH), this.done = !this.value, this
      }
      next() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return HH < 0 ? HH = Math.max(HH, this.from - this.pos) : HH > 0 && (HH = Math.min(HH, this.to - this.pos)), this.nextInner(HH, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class UH {
      constructor(HH) {
        this.inner = HH, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: BH,
            lineBreak: LH,
            value: AH
          } = this.inner.next(HH);
        return BH && this.afterBreak ? (this.value = "", this.afterBreak = !1) : BH ? (this.done = !0, this.value = "") : LH ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = AH, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (QH.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, PH.prototype[Symbol.iterator] = TH.prototype[Symbol.iterator] = UH.prototype[Symbol.iterator] = function() {
      return this
    });
    class VH {
      constructor(HH, BH, LH, AH) {
        this.from = HH, this.to = BH, this.number = LH, this.text = AH
      }
      get length() {
        return this.to - this.from
      }
    }

    function OH(HH, BH, LH) {
      return [BH = Math.max(0, Math.min(HH.length, BH)), Math.max(BH, Math.min(HH.length, LH))]
    }

    function bH(HH, BH) {
      return zH(HH, BH, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function kH(HH, BH) {
      let LH = HH.charCodeAt(BH);
      if (!((AH = LH) >= 55296 && AH < 56320) || BH + 1 == HH.length) return LH;
      var AH;
      let rH = HH.charCodeAt(BH + 1);
      return function(HH) {
        return HH >= 56320 && HH < 57344
      }(rH) ? rH - 56320 + (LH - 55296 << 10) + 65536 : LH
    }

    function mH(HH) {
      return HH <= 65535 ? String.fromCharCode(HH) : (HH -= 65536, String.fromCharCode(55296 + (HH >> 10), 56320 + (1023 & HH)))
    }

    function oH(HH) {
      return HH < 65536 ? 1 : 2
    }
    const IH = /\r\n?|\n/;
    var fH = function(HH) {
      return HH[HH.Simple = 0] = "Simple", HH[HH.TrackDel = 1] = "TrackDel", HH[HH.TrackBefore = 2] = "TrackBefore", HH[HH.TrackAfter = 3] = "TrackAfter", HH
    }(fH || (fH = {}));
    class lH {
      constructor(HH) {
        this.sections = HH
      }
      get length() {
        let HH = 0;
        for (let BH = 0; BH < this.sections.length; BH += 2) HH += this.sections[BH];
        return HH
      }
      get newLength() {
        let HH = 0;
        for (let BH = 0; BH < this.sections.length; BH += 2) {
          let LH = this.sections[BH + 1];
          HH += LH < 0 ? this.sections[BH] : LH
        }
        return HH
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(HH) {
        for (let BH = 0, LH = 0, AH = 0; BH < this.sections.length;) {
          let rH = this.sections[BH++],
            SH = this.sections[BH++];
          SH < 0 ? (HH(LH, AH, rH), AH += rH) : AH += SH, LH += rH
        }
      }
      iterChangedRanges(HH) {
        qH(this, HH, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let HH = [];
        for (let BH = 0; BH < this.sections.length;) {
          let LH = this.sections[BH++],
            AH = this.sections[BH++];
          AH < 0 ? HH.push(LH, AH) : HH.push(AH, LH)
        }
        return new lH(HH)
      }
      composeDesc(HH) {
        return this.empty ? HH : HH.empty ? this : NH(this, HH)
      }
      mapDesc(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return HH.empty ? this : gH(this, HH, BH)
      }
      mapPos(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : fH.Simple,
          AH = 0,
          rH = 0;
        for (let SH = 0; SH < this.sections.length;) {
          let hH = this.sections[SH++],
            tH = this.sections[SH++],
            zH = AH + hH;
          if (tH < 0) {
            if (zH > HH) return rH + (HH - AH);
            rH += hH
          } else {
            if (LH != fH.Simple && zH >= HH && (LH == fH.TrackDel && AH < HH && zH > HH || LH == fH.TrackBefore && AH < HH || LH == fH.TrackAfter && zH > HH)) return null;
            if (zH > HH || zH == HH && BH < 0 && !hH) return HH == AH || BH < 0 ? rH : rH + tH;
            rH += tH
          }
          AH = zH
        }
        if (HH > AH) throw new RangeError(`Position ${HH} is out of range for changeset of length ${AH}`);
        return rH
      }
      touchesRange(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH;
        for (let LH = 0, AH = 0; LH < this.sections.length && AH <= BH;) {
          let rH = AH + this.sections[LH++];
          if (this.sections[LH++] >= 0 && AH <= BH && rH >= HH) return !(AH < HH && rH > BH) || "cover";
          AH = rH
        }
        return !1
      }
      toString() {
        let HH = "";
        for (let BH = 0; BH < this.sections.length;) {
          let LH = this.sections[BH++],
            AH = this.sections[BH++];
          HH += (HH ? " " : "") + LH + (AH >= 0 ? ":" + AH : "")
        }
        return HH
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(HH) {
        if (!Array.isArray(HH) || HH.length % 2 || HH.some((HH => "number" != typeof HH))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new lH(HH)
      }
      static create(HH) {
        return new lH(HH)
      }
    }
    class KH extends lH {
      constructor(HH, BH) {
        super(HH), this.inserted = BH
      }
      apply(HH) {
        if (this.length != HH.length) throw new RangeError("Applying change set to a document with the wrong length");
        return qH(this, ((BH, LH, AH, rH, SH) => HH = HH.replace(AH, AH + (LH - BH), SH)), !1), HH
      }
      mapDesc(HH) {
        return gH(this, HH, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(HH) {
        let BH = this.sections.slice(),
          LH = [];
        for (let AH = 0, rH = 0; AH < BH.length; AH += 2) {
          let SH = BH[AH],
            hH = BH[AH + 1];
          if (hH >= 0) {
            BH[AH] = hH, BH[AH + 1] = SH;
            let tH = AH >> 1;
            for (; LH.length < tH;) LH.push(QH.empty);
            LH.push(SH ? HH.slice(rH, rH + SH) : QH.empty)
          }
          rH += SH
        }
        return new KH(BH, LH)
      }
      compose(HH) {
        return this.empty ? HH : HH.empty ? this : NH(this, HH, !0)
      }
      map(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return HH.empty ? this : gH(this, HH, BH, !0)
      }
      iterChanges(HH) {
        qH(this, HH, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return lH.create(this.sections)
      }
      filter(HH) {
        let BH = [],
          LH = [],
          AH = [],
          rH = new RH(this);
        HH: for (let SH = 0, hH = 0;;) {
          let tH = SH == HH.length ? 1e9 : HH[SH++];
          for (; hH < tH || hH == tH && 0 == rH.len;) {
            if (rH.done) break HH;
            let HH = Math.min(rH.len, tH - hH);
            cH(AH, HH, -1);
            let SH = -1 == rH.ins ? -1 : 0 == rH.off ? rH.ins : 0;
            cH(BH, HH, SH), SH > 0 && eH(LH, BH, rH.text), rH.forward(HH), hH += HH
          }
          let zH = HH[SH++];
          for (; hH < zH;) {
            if (rH.done) break HH;
            let HH = Math.min(rH.len, zH - hH);
            cH(BH, HH, -1), cH(AH, HH, -1 == rH.ins ? -1 : 0 == rH.off ? rH.ins : 0), rH.forward(HH), hH += HH
          }
        }
        return {
          changes: new KH(BH, LH),
          filtered: lH.create(AH)
        }
      }
      toJSON() {
        let HH = [];
        for (let BH = 0; BH < this.sections.length; BH += 2) {
          let LH = this.sections[BH],
            AH = this.sections[BH + 1];
          AH < 0 ? HH.push(LH) : 0 == AH ? HH.push([LH]) : HH.push([LH].concat(this.inserted[BH >> 1].toJSON()))
        }
        return HH
      }
      static of (HH, BH, LH) {
        let AH = [],
          rH = [],
          SH = 0,
          hH = null;

        function tH() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !AH.length) return;
          SH < BH && cH(AH, BH - SH, -1);
          let HH = new KH(AH, rH);
          hH = hH ? hH.compose(HH.map(hH)) : HH, AH = [], rH = [], SH = 0
        }
        return function HH(zH) {
          if (Array.isArray(zH))
            for (let BH of zH) HH(BH);
          else if (zH instanceof KH) {
            if (zH.length != BH) throw new RangeError(`Mismatched change set length (got ${zH.length}, expected ${BH})`);
            tH(), hH = hH ? hH.compose(zH.map(hH)) : zH
          } else {
            let {
              from: HH,
              to: hH = HH,
              insert: CH
            } = zH;
            if (HH > hH || HH < 0 || hH > BH) throw new RangeError(`Invalid change range ${HH} to ${hH} (in doc of length ${BH})`);
            let EH = CH ? "string" == typeof CH ? QH.of(CH.split(LH || IH)) : CH : QH.empty,
              XH = EH.length;
            if (HH == hH && 0 == XH) return;
            HH < SH && tH(), HH > SH && cH(AH, HH - SH, -1), cH(AH, hH - HH, XH), eH(rH, AH, EH), SH = hH
          }
        }(HH), tH(!hH), hH
      }
      static empty(HH) {
        return new KH(HH ? [HH, -1] : [], [])
      }
      static fromJSON(HH) {
        if (!Array.isArray(HH)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let BH = [],
          LH = [];
        for (let AH = 0; AH < HH.length; AH++) {
          let rH = HH[AH];
          if ("number" == typeof rH) BH.push(rH, -1);
          else {
            if (!Array.isArray(rH) || "number" != typeof rH[0] || rH.some(((HH, BH) => BH && "string" != typeof HH))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == rH.length) BH.push(rH[0], 0);
            else {
              for (; LH.length < AH;) LH.push(QH.empty);
              LH[AH] = QH.of(rH.slice(1)), BH.push(rH[0], LH[AH].length)
            }
          }
        }
        return new KH(BH, LH)
      }
      static createSet(HH, BH) {
        return new KH(HH, BH)
      }
    }

    function cH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == BH && LH <= 0) return;
      let rH = HH.length - 2;
      rH >= 0 && LH <= 0 && LH == HH[rH + 1] ? HH[rH] += BH : rH >= 0 && 0 == BH && 0 == HH[rH] ? HH[rH + 1] += LH : AH ? (HH[rH] += BH, HH[rH + 1] += LH) : HH.push(BH, LH)
    }

    function eH(HH, BH, LH) {
      if (0 == LH.length) return;
      let AH = BH.length - 2 >> 1;
      if (AH < HH.length) HH[HH.length - 1] = HH[HH.length - 1].append(LH);
      else {
        for (; HH.length < AH;) HH.push(QH.empty);
        HH.push(LH)
      }
    }

    function qH(HH, BH, LH) {
      let AH = HH.inserted;
      for (let rH = 0, SH = 0, hH = 0; hH < HH.sections.length;) {
        let tH = HH.sections[hH++],
          zH = HH.sections[hH++];
        if (zH < 0) rH += tH, SH += tH;
        else {
          let CH = rH,
            EH = SH,
            XH = QH.empty;
          for (; CH += tH, EH += zH, zH && AH && (XH = XH.append(AH[hH - 2 >> 1])), !(LH || hH == HH.sections.length || HH.sections[hH + 1] < 0);) tH = HH.sections[hH++], zH = HH.sections[hH++];
          BH(rH, CH, SH, EH, XH), rH = CH, SH = EH
        }
      }
    }

    function gH(HH, BH, LH) {
      let AH = [],
        rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        SH = new RH(HH),
        hH = new RH(BH),
        tH = 0;
      for (let zH = -1;;) {
        if (++tH > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (SH.done && hH.len || hH.done && SH.len) throw new Error("Mismatched change set lengths");
        if (-1 == SH.ins && -1 == hH.ins) {
          let HH = Math.min(SH.len, hH.len);
          cH(AH, HH, -1), SH.forward(HH), hH.forward(HH)
        } else if (hH.ins >= 0 && (SH.ins < 0 || zH == SH.i || 0 == SH.off && (hH.len < SH.len || hH.len == SH.len && !LH))) {
          let HH = hH.len;
          for (cH(AH, hH.ins, -1); HH;) {
            if (++tH > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let BH = Math.min(SH.len, HH);
            SH.ins >= 0 && zH < SH.i && SH.len <= BH && (cH(AH, 0, SH.ins), rH && eH(rH, AH, SH.text), zH = SH.i), SH.forward(BH), HH -= BH
          }
          hH.next()
        } else {
          if (!(SH.ins >= 0)) {
            if (SH.done && hH.done) return rH ? KH.createSet(AH, rH) : lH.create(AH);
            throw new Error("Mismatched change set lengths")
          } {
            let HH = 0,
              BH = SH.len;
            for (; BH;) {
              if (++tH > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == hH.ins) {
                let LH = Math.min(BH, hH.len);
                HH += LH, BH -= LH, hH.forward(LH)
              } else {
                if (!(0 == hH.ins && hH.len < BH)) break;
                BH -= hH.len, hH.next()
              }
            }
            cH(AH, HH, zH < SH.i ? SH.ins : 0), rH && zH < SH.i && eH(rH, AH, SH.text), zH = SH.i, SH.forward(SH.len - BH)
          }
        }
      }
    }

    function NH(HH, BH) {
      let LH = [],
        AH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        rH = new RH(HH),
        SH = new RH(BH),
        hH = 0;
      for (let tH = !1;;) {
        if (++hH > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (rH.done && SH.done) return AH ? KH.createSet(LH, AH) : lH.create(LH);
        if (0 == rH.ins) cH(LH, rH.len, 0, tH), rH.next();
        else if (0 != SH.len || SH.done) {
          if (rH.done || SH.done) throw new Error("Mismatched change set lengths");
          {
            let HH = Math.min(rH.len2, SH.len),
              BH = LH.length;
            if (-1 == rH.ins) {
              let BH = -1 == SH.ins ? -1 : SH.off ? 0 : SH.ins;
              cH(LH, HH, BH, tH), AH && BH && eH(AH, LH, SH.text)
            } else - 1 == SH.ins ? (cH(LH, rH.off ? 0 : rH.len, HH, tH), AH && eH(AH, LH, rH.textBit(HH))) : (cH(LH, rH.off ? 0 : rH.len, SH.off ? 0 : SH.ins, tH), AH && !SH.off && eH(AH, LH, SH.text));
            tH = (rH.ins > HH || SH.ins >= 0 && SH.len > HH) && (tH || LH.length > BH), rH.forward2(HH), SH.forward(HH)
          }
        } else cH(LH, 0, SH.ins, tH), AH && eH(AH, LH, SH.text), SH.next()
      }
    }
    class RH {
      constructor(HH) {
        this.set = HH, this.i = 0, this.next()
      }
      next() {
        let {
          sections: HH
        } = this.set;
        this.i < HH.length ? (this.len = HH[this.i++], this.ins = HH[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: HH
        } = this.set, BH = this.i - 2 >> 1;
        return BH >= HH.length ? QH.empty : HH[BH]
      }
      textBit(HH) {
        let {
          inserted: BH
        } = this.set, LH = this.i - 2 >> 1;
        return LH >= BH.length && !HH ? QH.empty : BH[LH].slice(this.off, null == HH ? void 0 : this.off + HH)
      }
      forward(HH) {
        HH == this.len ? this.next() : (this.len -= HH, this.off += HH)
      }
      forward2(HH) {
        -1 == this.ins ? this.forward(HH) : HH == this.ins ? this.next() : (this.ins -= HH, this.off += HH)
      }
    }
    class jH {
      constructor(HH, BH, LH) {
        this.from = HH, this.to = BH, this.flags = LH
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
        let HH = 7 & this.flags;
        return 7 == HH ? null : HH
      }
      get goalColumn() {
        let HH = this.flags >> 6;
        return 16777215 == HH ? void 0 : HH
      }
      map(HH) {
        let BH, LH, AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? BH = LH = HH.mapPos(this.from, AH) : (BH = HH.mapPos(this.from, 1), LH = HH.mapPos(this.to, -1)), BH == this.from && LH == this.to ? this : new jH(BH, LH, this.flags)
      }
      extend(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (HH <= this.anchor && BH >= this.anchor) return nH.range(HH, BH, void 0, void 0, LH);
        let AH = Math.abs(HH - this.anchor) > Math.abs(BH - this.anchor) ? HH : BH;
        return nH.range(this.anchor, AH, void 0, void 0, LH)
      }
      eq(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == HH.anchor && this.head == HH.head && this.goalColumn == HH.goalColumn && (!BH || !this.empty || this.assoc == HH.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(HH) {
        if (!HH || "number" != typeof HH.anchor || "number" != typeof HH.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return nH.range(HH.anchor, HH.head)
      }
      static create(HH, BH, LH) {
        return new jH(HH, BH, LH)
      }
    }
    class nH {
      constructor(HH, BH) {
        this.rW = HH, this.mainIndex = BH
      }
      map(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return HH.empty ? this : nH.create(this.rW.map((LH => LH.map(HH, BH))), this.mainIndex)
      }
      eq(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.rW.length != HH.rW.length || this.mainIndex != HH.mainIndex) return !1;
        for (let LH = 0; LH < this.rW.length; LH++)
          if (!this.rW[LH].eq(HH.rW[LH], BH)) return !1;
        return !0
      }
      get main() {
        return this.rW[this.mainIndex]
      }
      asSingle() {
        return 1 == this.rW.length ? this : new nH([this.main], 0)
      }
      addRange(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return nH.create([HH].concat(this.rW), BH ? 0 : this.mainIndex + 1)
      }
      replaceRange(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          LH = this.rW.slice();
        return LH[BH] = HH, nH.create(LH, this.mainIndex)
      }
      toJSON() {
        return {
          rW: this.rW.map((HH => HH.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(HH) {
        if (!HH || !Array.isArray(HH.rW) || "number" != typeof HH.main || HH.main >= HH.rW.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new nH(HH.rW.map((HH => jH.fromJSON(HH))), HH.main)
      }
      static single(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH;
        return new nH([nH.range(HH, BH)], 0)
      }
      static create(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == HH.length) throw new RangeError("A selection needs at least one range");
        for (let LH = 0, AH = 0; AH < HH.length; AH++) {
          let rH = HH[AH];
          if (rH.empty ? rH.from <= LH : rH.from < LH) return nH.normalized(HH.slice(), BH);
          LH = rH.to
        }
        return new nH(HH, BH)
      }
      static cursor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        return jH.create(HH, HH, (0 == BH ? 0 : BH < 0 ? 8 : 16) | (null == LH ? 7 : Math.min(6, LH)) | (null !== AH && void 0 !== AH ? AH : 16777215) << 6)
      }
      static range(HH, BH, LH, AH, rH) {
        let SH = (null !== LH && void 0 !== LH ? LH : 16777215) << 6 | (null == AH ? 7 : Math.min(6, AH));
        return rH || HH == BH || (rH = BH < HH ? 1 : -1), BH < HH ? jH.create(BH, HH, 48 | SH) : jH.create(HH, BH, (rH ? rH < 0 ? 8 : 16 : 0) | SH)
      }
      static normalized(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = HH[BH];
        HH.sort(((HH, BH) => HH.from - BH.from)), BH = HH.indexOf(LH);
        for (let AH = 1; AH < HH.length; AH++) {
          let LH = HH[AH],
            rH = HH[AH - 1];
          if (LH.empty ? LH.from <= rH.to : LH.from < rH.to) {
            let SH = rH.from,
              hH = Math.max(LH.to, rH.to);
            AH <= BH && BH--, HH.splice(--AH, 2, LH.anchor > LH.head ? nH.range(hH, SH) : nH.range(SH, hH))
          }
        }
        return new nH(HH, BH)
      }
    }

    function FH(HH, BH) {
      for (let LH of HH.rW)
        if (LH.to > BH) throw new RangeError("Selection points outside of document")
    }
    let DH = 0;
    class wH {
      constructor(HH, BH, LH, AH, rH) {
        this.combine = HH, this.compareInput = BH, this.compare = LH, this.isStatic = AH, this.id = DH++, this.default = HH([]), this.extensions = "function" == typeof rH ? rH(this) : rH
      }
      get reader() {
        return this
      }
      static define() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new wH(HH.combine || (HH => HH), HH.compareInput || ((HH, BH) => HH === BH), HH.compare || (HH.combine ? (HH, BH) => HH === BH : ZH), !!HH.static, HH.enables)
      }
      of(HH) {
        return new dH([], this, 0, HH)
      }
      compute(HH, BH) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new dH(HH, this, 1, BH)
      }
      computeN(HH, BH) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new dH(HH, this, 2, BH)
      }
      from(HH, BH) {
        return BH || (BH = HH => HH), this.compute([HH], (LH => BH(LH.field(HH))))
      }
    }

    function ZH(HH, BH) {
      return HH == BH || HH.length == BH.length && HH.every(((HH, LH) => HH === BH[LH]))
    }
    class dH {
      constructor(HH, BH, LH, AH) {
        this.dependencies = HH, this.facet = BH, this.type = LH, this.value = AH, this.id = DH++
      }
      dynamicSlot(HH) {
        var BH;
        let LH = this.value,
          AH = this.facet.compareInput,
          rH = this.id,
          SH = HH[rH] >> 1,
          hH = 2 == this.type,
          tH = !1,
          zH = !1,
          CH = [];
        for (let EH of this.dependencies) "doc" == EH ? tH = !0 : "selection" == EH ? zH = !0 : 0 == (1 & (null !== (BH = HH[EH.id]) && void 0 !== BH ? BH : 1)) && CH.push(HH[EH.id]);
        return {
          create: HH => (HH.values[SH] = LH(HH), 1),
          update(HH, BH) {
            if (tH && BH.docChanged || zH && (BH.docChanged || BH.selection) || sH(HH, CH)) {
              let BH = LH(HH);
              if (hH ? !aH(BH, HH.values[SH], AH) : !AH(BH, HH.values[SH])) return HH.values[SH] = BH, 1
            }
            return 0
          },
          reconfigure: (HH, BH) => {
            let tH, zH = BH.config.address[rH];
            if (null != zH) {
              let rH = EB(BH, zH);
              if (this.dependencies.every((LH => LH instanceof wH ? BH.facet(LH) === HH.facet(LH) : !(LH instanceof pH) || BH.field(LH, !1) == HH.field(LH, !1))) || (hH ? aH(tH = LH(HH), rH, AH) : AH(tH = LH(HH), rH))) return HH.values[SH] = rH, 0
            } else tH = LH(HH);
            return HH.values[SH] = tH, 1
          }
        }
      }
    }

    function aH(HH, BH, LH) {
      if (HH.length != BH.length) return !1;
      for (let AH = 0; AH < HH.length; AH++)
        if (!LH(HH[AH], BH[AH])) return !1;
      return !0
    }

    function sH(HH, BH) {
      let LH = !1;
      for (let AH of BH) 1 & CB(HH, AH) && (LH = !0);
      return LH
    }

    function JH(HH, BH, LH) {
      let AH = LH.map((BH => HH[BH.id])),
        rH = LH.map((HH => HH.type)),
        SH = AH.filter((HH => !(1 & HH))),
        hH = HH[BH.id] >> 1;

      function tH(HH) {
        let LH = [];
        for (let BH = 0; BH < AH.length; BH++) {
          let SH = EB(HH, AH[BH]);
          if (2 == rH[BH])
            for (let HH of SH) LH.push(HH);
          else LH.push(SH)
        }
        return BH.combine(LH)
      }
      return {
        create(HH) {
          for (let BH of AH) CB(HH, BH);
          return HH.values[hH] = tH(HH), 1
        },
        update(HH, LH) {
          if (!sH(HH, SH)) return 0;
          let AH = tH(HH);
          return BH.compare(AH, HH.values[hH]) ? 0 : (HH.values[hH] = AH, 1)
        },
        reconfigure(HH, rH) {
          let SH = sH(HH, AH),
            zH = rH.config.facets[BH.id],
            CH = rH.facet(BH);
          if (zH && !SH && ZH(LH, zH)) return HH.values[hH] = CH, 0;
          let EH = tH(HH);
          return BH.compare(EH, CH) ? (HH.values[hH] = CH, 0) : (HH.values[hH] = EH, 1)
        }
      }
    }
    const iH = wH.define({
      static: !0
    });
    class pH {
      constructor(HH, BH, LH, AH, rH) {
        this.id = HH, this.createF = BH, this.updateF = LH, this.compareF = AH, this.spec = rH, this.provides = void 0
      }
      static define(HH) {
        let BH = new pH(DH++, HH.create, HH.update, HH.compare || ((HH, BH) => HH === BH), HH);
        return HH.provide && (BH.provides = HH.provide(BH)), BH
      }
      create(HH) {
        let BH = HH.facet(iH).find((HH => HH.field == this));
        return ((null === BH || void 0 === BH ? void 0 : BH.create) || this.createF)(HH)
      }
      slot(HH) {
        let BH = HH[this.id] >> 1;
        return {
          create: HH => (HH.values[BH] = this.create(HH), 1),
          update: (HH, LH) => {
            let AH = HH.values[BH],
              rH = this.updateF(AH, LH);
            return this.compareF(AH, rH) ? 0 : (HH.values[BH] = rH, 1)
          },
          reconfigure: (HH, LH) => {
            let AH, rH = HH.facet(iH),
              SH = LH.facet(iH);
            return (AH = rH.find((HH => HH.field == this))) && AH != SH.find((HH => HH.field == this)) ? (HH.values[BH] = AH.create(HH), 1) : null != LH.config.address[this.id] ? (HH.values[BH] = LH.field(this), 0) : (HH.values[BH] = this.create(HH), 1)
          }
        }
      }
      init(HH) {
        return [this, iH.of({
          field: this,
          create: HH
        })]
      }
      get extension() {
        return this
      }
    }
    const yH = 4,
      HB = 3,
      BB = 2,
      LB = 1;

    function AB(HH) {
      return BH => new SB(BH, HH)
    }
    const rB = {
      highest: AB(0),
      high: AB(LB),
      default: AB(BB),
      low: AB(HB),
      lowest: AB(yH)
    };
    class SB {
      constructor(HH, BH) {
        this.inner = HH, this.prec = BH
      }
    }
    class hB {
      of(HH) {
        return new tB(this, HH)
      }
      reconfigure(HH) {
        return hB.reconfigure.of({
          compartment: this,
          extension: HH
        })
      }
      get(HH) {
        return HH.config.compartments.get(this)
      }
    }
    class tB {
      constructor(HH, BH) {
        this.compartment = HH, this.inner = BH
      }
    }
    class zB {
      constructor(HH, BH, LH, AH, rH, SH) {
        for (this.base = HH, this.compartments = BH, this.dynamicSlots = LH, this.address = AH, this.staticValues = rH, this.facets = SH, this.statusTemplate = []; this.statusTemplate.length < LH.length;) this.statusTemplate.push(0)
      }
      staticFacet(HH) {
        let BH = this.address[HH.id];
        return null == BH ? HH.default : this.staticValues[BH >> 1]
      }
      static resolve(HH, BH, LH) {
        let AH = [],
          rH = Object.create(null),
          SH = new Map;
        for (let XH of function(HH, BH, LH) {
            let AH = [
                [],
                [],
                [],
                [],
                []
              ],
              rH = new Map;

            function SH(HH, hH) {
              let tH = rH.get(HH);
              if (null != tH) {
                if (tH <= hH) return;
                let BH = AH[tH].indexOf(HH);
                BH > -1 && AH[tH].splice(BH, 1), HH instanceof tB && LH.delete(HH.compartment)
              }
              if (rH.set(HH, hH), Array.isArray(HH))
                for (let BH of HH) SH(BH, hH);
              else if (HH instanceof tB) {
                if (LH.has(HH.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let AH = BH.get(HH.compartment) || HH.inner;
                LH.set(HH.compartment, AH), SH(AH, hH)
              } else if (HH instanceof SB) SH(HH.inner, HH.prec);
              else if (HH instanceof pH) AH[hH].push(HH), HH.provides && SH(HH.provides, hH);
              else if (HH instanceof dH) AH[hH].push(HH), HH.facet.extensions && SH(HH.facet.extensions, BB);
              else {
                let BH = HH.extension;
                if (!BH) throw new Error(`Unrecognized extension value in extension set (${HH}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                SH(BH, hH)
              }
            }
            return SH(HH, BB), AH.reduce(((HH, BH) => HH.concat(BH)))
          }(HH, BH, SH)) XH instanceof pH ? AH.push(XH) : (rH[XH.facet.id] || (rH[XH.facet.id] = [])).push(XH);
        let hH = Object.create(null),
          tH = [],
          zH = [];
        for (let XH of AH) hH[XH.id] = zH.length << 1, zH.push((HH => XH.slot(HH)));
        let CH = null === LH || void 0 === LH ? void 0 : LH.config.facets;
        for (let XH in rH) {
          let HH = rH[XH],
            BH = HH[0].facet,
            AH = CH && CH[XH] || [];
          if (HH.every((HH => 0 == HH.type)))
            if (hH[BH.id] = tH.length << 1 | 1, ZH(AH, HH)) tH.push(LH.facet(BH));
            else {
              let AH = BH.combine(HH.map((HH => HH.value)));
              tH.push(LH && BH.compare(AH, LH.facet(BH)) ? LH.facet(BH) : AH)
            }
          else {
            for (let BH of HH) 0 == BH.type ? (hH[BH.id] = tH.length << 1 | 1, tH.push(BH.value)) : (hH[BH.id] = zH.length << 1, zH.push((HH => BH.dynamicSlot(HH))));
            hH[BH.id] = zH.length << 1, zH.push((LH => JH(LH, BH, HH)))
          }
        }
        let EH = zH.map((HH => HH(hH)));
        return new zB(HH, SH, EH, hH, tH, rH)
      }
    }

    function CB(HH, BH) {
      if (1 & BH) return 2;
      let LH = BH >> 1,
        AH = HH.status[LH];
      if (4 == AH) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & AH) return AH;
      HH.status[LH] = 4;
      let rH = HH.computeSlot(HH, HH.config.dynamicSlots[LH]);
      return HH.status[LH] = 2 | rH
    }

    function EB(HH, BH) {
      return 1 & BH ? HH.config.staticValues[BH >> 1] : HH.values[BH >> 1]
    }
    const XB = wH.define(),
      GB = wH.define({
        combine: HH => HH.some((HH => HH)),
        static: !0
      }),
      YB = wH.define({
        combine: HH => HH.length ? HH[0] : void 0,
        static: !0
      }),
      uB = wH.define(),
      QB = wH.define(),
      WB = wH.define(),
      MB = wH.define({
        combine: HH => !!HH.length && HH[0]
      });
    class xB {
      constructor(HH, BH) {
        this.type = HH, this.value = BH
      }
      static define() {
        return new vB
      }
    }
    class vB {
      of(HH) {
        return new xB(this, HH)
      }
    }
    class PB {
      constructor(HH) {
        this.map = HH
      }
      of(HH) {
        return new TB(this, HH)
      }
    }
    class TB {
      constructor(HH, BH) {
        this.type = HH, this.value = BH
      }
      map(HH) {
        let BH = this.type.map(this.value, HH);
        return void 0 === BH ? void 0 : BH == this.value ? this : new TB(this.type, BH)
      }
      is(HH) {
        return this.type == HH
      }
      static define() {
        return new PB((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (HH => HH))
      }
      static mapEffects(HH, BH) {
        if (!HH.length) return HH;
        let LH = [];
        for (let AH of HH) {
          let HH = AH.map(BH);
          HH && LH.push(HH)
        }
        return LH
      }
    }
    TB.reconfigure = TB.define(), TB.appendConfig = TB.define();
    class UB {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.startState = HH, this.changes = BH, this.selection = LH, this.effects = AH, this.annotations = rH, this.scrollIntoView = SH, this._doc = null, this._state = null, LH && FH(LH, BH.newLength), rH.some((HH => HH.type == UB.time)) || (this.annotations = rH.concat(UB.time.of(Date.now())))
      }
      static create(HH, BH, LH, AH, rH, SH) {
        return new UB(HH, BH, LH, AH, rH, SH)
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
      annotation(HH) {
        for (let BH of this.annotations)
          if (BH.type == HH) return BH.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(HH) {
        let BH = this.annotation(UB.userEvent);
        return !(!BH || !(BH == HH || BH.length > HH.length && BH.slice(0, HH.length) == HH && "." == BH[HH.length]))
      }
    }

    function VB(HH, BH) {
      let LH = [];
      for (let AH = 0, rH = 0;;) {
        let SH, hH;
        if (AH < HH.length && (rH == BH.length || BH[rH] >= HH[AH])) SH = HH[AH++], hH = HH[AH++];
        else {
          if (!(rH < BH.length)) return LH;
          SH = BH[rH++], hH = BH[rH++]
        }!LH.length || LH[LH.length - 1] < SH ? LH.push(SH, hH) : LH[LH.length - 1] < hH && (LH[LH.length - 1] = hH)
      }
    }

    function OB(HH, BH, LH) {
      var AH;
      let rH, SH, hH;
      return LH ? (rH = BH.changes, SH = KH.empty(BH.changes.length), hH = HH.changes.compose(BH.changes)) : (rH = BH.changes.map(HH.changes), SH = HH.changes.mapDesc(BH.changes, !0), hH = HH.changes.compose(rH)), {
        changes: hH,
        selection: BH.selection ? BH.selection.map(SH) : null === (AH = HH.selection) || void 0 === AH ? void 0 : AH.map(rH),
        effects: TB.mapEffects(HH.effects, rH).concat(TB.mapEffects(BH.effects, SH)),
        annotations: HH.annotations.length ? HH.annotations.concat(BH.annotations) : BH.annotations,
        scrollIntoView: HH.scrollIntoView || BH.scrollIntoView
      }
    }

    function bB(HH, BH, LH) {
      let AH = BH.selection,
        rH = oB(BH.annotations);
      return BH.userEvent && (rH = rH.concat(UB.userEvent.of(BH.userEvent))), {
        changes: BH.changes instanceof KH ? BH.changes : KH.of(BH.changes || [], LH, HH.facet(YB)),
        selection: AH && (AH instanceof nH ? AH : nH.single(AH.anchor, AH.head)),
        effects: oB(BH.effects),
        annotations: rH,
        scrollIntoView: !!BH.scrollIntoView
      }
    }

    function kB(HH, BH, LH) {
      let AH = bB(HH, BH.length ? BH[0] : {}, HH.doc.length);
      BH.length && !1 === BH[0].filter && (LH = !1);
      for (let SH = 1; SH < BH.length; SH++) {
        !1 === BH[SH].filter && (LH = !1);
        let rH = !!BH[SH].sequential;
        AH = OB(AH, bB(HH, BH[SH], rH ? AH.changes.newLength : HH.doc.length), rH)
      }
      let rH = UB.create(HH, AH.changes, AH.selection, AH.effects, AH.annotations, AH.scrollIntoView);
      return function(HH) {
        let BH = HH.startState,
          LH = BH.facet(WB),
          AH = HH;
        for (let rH = LH.length - 1; rH >= 0; rH--) {
          let SH = LH[rH](HH);
          SH && Object.keys(SH).length && (AH = OB(AH, bB(BH, SH, HH.changes.newLength), !0))
        }
        return AH == HH ? HH : UB.create(BH, HH.changes, HH.selection, AH.effects, AH.annotations, AH.scrollIntoView)
      }(LH ? function(HH) {
        let BH = HH.startState,
          LH = !0;
        for (let rH of BH.facet(uB)) {
          let BH = rH(HH);
          if (!1 === BH) {
            LH = !1;
            break
          }
          Array.isArray(BH) && (LH = !0 === LH ? BH : VB(LH, BH))
        }
        if (!0 !== LH) {
          let AH, rH;
          if (!1 === LH) rH = HH.changes.invertedDesc, AH = KH.empty(BH.doc.length);
          else {
            let BH = HH.changes.filter(LH);
            AH = BH.changes, rH = BH.filtered.mapDesc(BH.changes).invertedDesc
          }
          HH = UB.create(BH, AH, HH.selection && HH.selection.map(rH), TB.mapEffects(HH.effects, rH), HH.annotations, HH.scrollIntoView)
        }
        let AH = BH.facet(QB);
        for (let rH = AH.length - 1; rH >= 0; rH--) {
          let LH = AH[rH](HH);
          HH = LH instanceof UB ? LH : Array.isArray(LH) && 1 == LH.length && LH[0] instanceof UB ? LH[0] : kB(BH, oB(LH), !1)
        }
        return HH
      }(rH) : rH)
    }
    UB.time = xB.define(), UB.userEvent = xB.define(), UB.addToHistory = xB.define(), UB.remote = xB.define();
    const mB = [];

    function oB(HH) {
      return null == HH ? mB : Array.isArray(HH) ? HH : [HH]
    }
    var IB = function(HH) {
      return HH[HH.Word = 0] = "Word", HH[HH.Space = 1] = "Space", HH[HH.Other = 2] = "Other", HH
    }(IB || (IB = {}));
    const fB = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let lB;
    try {
      lB = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (LL) {}

    function KB(HH) {
      return BH => {
        if (!/\S/.test(BH)) return IB.Space;
        if (function(HH) {
            if (lB) return lB.test(HH);
            for (let BH = 0; BH < HH.length; BH++) {
              let LH = HH[BH];
              if (/\w/.test(LH) || LH > "\x80" && (LH.toUpperCase() != LH.toLowerCase() || fB.test(LH))) return !0
            }
            return !1
          }(BH)) return IB.Word;
        for (let LH = 0; LH < HH.length; LH++)
          if (BH.indexOf(HH[LH]) > -1) return IB.Word;
        return IB.Other
      }
    }
    class cB {
      constructor(HH, BH, LH, AH, rH, SH) {
        this.config = HH, this.doc = BH, this.selection = LH, this.values = AH, this.status = HH.statusTemplate.slice(), this.computeSlot = rH, SH && (SH._state = this);
        for (let hH = 0; hH < this.config.dynamicSlots.length; hH++) CB(this, hH << 1);
        this.computeSlot = null
      }
      field(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          LH = this.config.address[HH.id];
        if (null != LH) return CB(this, LH), EB(this, LH);
        if (BH) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return kB(this, BH, !0)
      }
      applyTransaction(HH) {
        let BH, LH = this.config,
          {
            base: AH,
            compartments: rH
          } = LH;
        for (let hH of HH.effects) hH.is(hB.reconfigure) ? (LH && (rH = new Map, LH.compartments.forEach(((HH, BH) => rH.set(BH, HH))), LH = null), rH.set(hH.value.compartment, hH.value.extension)) : hH.is(TB.reconfigure) ? (LH = null, AH = hH.value) : hH.is(TB.appendConfig) && (LH = null, AH = oB(AH).concat(hH.value));
        if (LH) BH = HH.startState.values.slice();
        else {
          LH = zB.resolve(AH, rH, this), BH = new cB(LH, this.doc, this.selection, LH.dynamicSlots.map((() => null)), ((HH, BH) => BH.reconfigure(HH, this)), null).values
        }
        let SH = HH.startState.facet(GB) ? HH.newSelection : HH.newSelection.asSingle();
        new cB(LH, HH.newDoc, SH, BH, ((BH, LH) => LH.update(BH, HH)), HH)
      }
      replaceSelection(HH) {
        return "string" == typeof HH && (HH = this.toText(HH)), this.changeByRange((BH => ({
          changes: {
            from: BH.from,
            to: BH.to,
            insert: HH
          },
          range: nH.cursor(BH.from + HH.length)
        })))
      }
      changeByRange(HH) {
        let BH = this.selection,
          LH = HH(BH.rW[0]),
          AH = this.changes(LH.changes),
          rH = [LH.range],
          SH = oB(LH.effects);
        for (let hH = 1; hH < BH.rW.length; hH++) {
          let LH = HH(BH.rW[hH]),
            tH = this.changes(LH.changes),
            zH = tH.map(AH);
          for (let HH = 0; HH < hH; HH++) rH[HH] = rH[HH].map(zH);
          let CH = AH.mapDesc(tH, !0);
          rH.push(LH.range.map(CH)), AH = AH.compose(zH), SH = TB.mapEffects(SH, zH).concat(TB.mapEffects(oB(LH.effects), CH))
        }
        return {
          changes: AH,
          selection: nH.create(rH, BH.mainIndex),
          effects: SH
        }
      }
      changes() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return HH instanceof KH ? HH : KH.of(HH, this.doc.length, this.facet(cB.lineSeparator))
      }
      toText(HH) {
        return QH.of(HH.split(this.facet(cB.lineSeparator) || IH))
      }
      sliceDoc() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(HH, BH, this.lineBreak)
      }
      facet(HH) {
        let BH = this.config.address[HH.id];
        return null == BH ? HH.default : (CB(this, BH), EB(this, BH))
      }
      toJSON(HH) {
        let BH = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (HH)
          for (let LH in HH) {
            let AH = HH[LH];
            AH instanceof pH && null != this.config.address[AH.id] && (BH[LH] = AH.spec.toJSON(this.field(HH[LH]), this))
          }
        return BH
      }
      static fromJSON(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          LH = arguments.length > 2 ? arguments[2] : void 0;
        if (!HH || "string" != typeof HH.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let AH = [];
        if (LH)
          for (let rH in LH)
            if (Object.prototype.hasOwnProperty.call(HH, rH)) {
              let BH = LH[rH],
                SH = HH[rH];
              AH.push(BH.init((HH => BH.spec.fromJSON(SH, HH))))
            } return cB.create({
          doc: HH.doc,
          selection: nH.fromJSON(HH.selection),
          extensions: BH.extensions ? AH.concat([BH.extensions]) : AH
        })
      }
      static create() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          BH = zB.resolve(HH.extensions || [], new Map),
          LH = HH.doc instanceof QH ? HH.doc : QH.of((HH.doc || "").split(BH.staticFacet(cB.lineSeparator) || IH)),
          AH = HH.selection ? HH.selection instanceof nH ? HH.selection : nH.single(HH.selection.anchor, HH.selection.head) : nH.single(0);
        return FH(AH, LH.length), BH.staticFacet(GB) || (AH = AH.asSingle()), new cB(BH, LH, AH, BH.dynamicSlots.map((() => null)), ((HH, BH) => BH.create(HH)), null)
      }
      get tabSize() {
        return this.facet(cB.tabSize)
      }
      get lineBreak() {
        return this.facet(cB.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(MB)
      }
      phrase(HH) {
        for (var BH = arguments.length, LH = new Array(BH > 1 ? BH - 1 : 0), AH = 1; AH < BH; AH++) LH[AH - 1] = arguments[AH];
        for (let rH of this.facet(cB.phrases))
          if (Object.prototype.hasOwnProperty.call(rH, HH)) {
            HH = rH[HH];
            break
          } return LH.length && (HH = HH.replace(/\$(\$|\d*)/g, ((HH, BH) => {
          if ("$" == BH) return "$";
          let AH = +(BH || 1);
          return !AH || AH > LH.length ? HH : LH[AH - 1]
        }))), HH
      }
      languageDataAt(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          AH = [];
        for (let rH of this.facet(XB))
          for (let SH of rH(this, BH, LH)) Object.prototype.hasOwnProperty.call(SH, HH) && AH.push(SH[HH]);
        return AH
      }
      charCategorizer(HH) {
        let BH = this.languageDataAt("wordChars", HH);
        return KB(BH.length ? BH[0] : "")
      }
      wordAt(HH) {
        let {
          text: BH,
          from: LH,
          length: AH
        } = this.doc.lineAt(HH), rH = this.charCategorizer(HH), SH = HH - LH, hH = HH - LH;
        for (; SH > 0;) {
          let HH = bH(BH, SH, !1);
          if (rH(BH.slice(HH, SH)) != IB.Word) break;
          SH = HH
        }
        for (; hH < AH;) {
          let HH = bH(BH, hH);
          if (rH(BH.slice(hH, HH)) != IB.Word) break;
          hH = HH
        }
        return SH == hH ? null : nH.range(SH + LH, hH + LH)
      }
    }

    function eB(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        AH = {};
      for (let rH of HH)
        for (let HH of Object.keys(rH)) {
          let BH = rH[HH],
            SH = AH[HH];
          if (void 0 === SH) AH[HH] = BH;
          else if (SH === BH || void 0 === BH);
          else {
            if (!Object.hasOwnProperty.call(LH, HH)) throw new Error("Config merge conflict for field " + HH);
            AH[HH] = LH[HH](SH, BH)
          }
        }
      for (let rH in BH) void 0 === AH[rH] && (AH[rH] = BH[rH]);
      return AH
    }
    cB.allowMultipleSelections = GB, cB.tabSize = wH.define({
      combine: HH => HH.length ? HH[0] : 4
    }), cB.lineSeparator = YB, cB.readOnly = MB, cB.phrases = wH.define({
      compare(HH, BH) {
        let LH = Object.keys(HH),
          AH = Object.keys(BH);
        return LH.length == AH.length && LH.every((LH => HH[LH] == BH[LH]))
      }
    }), cB.languageData = XB, cB.changeFilter = uB, cB.transactionFilter = QB, cB.transactionExtender = WB, hB.reconfigure = TB.define();
    class qB {
      eq(HH) {
        return this == HH
      }
      range(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : HH;
        return NB.create(HH, BH, this)
      }
    }

    function gB(HH, BH) {
      return HH == BH || HH.constructor == BH.constructor && HH.eq(BH)
    }
    qB.prototype.startSide = qB.prototype.endSide = 0, qB.prototype.point = !1, qB.prototype.mapMode = fH.TrackDel;
    class NB {
      constructor(HH, BH, LH) {
        this.from = HH, this.to = BH, this.value = LH
      }
      static create(HH, BH, LH) {
        return new NB(HH, BH, LH)
      }
    }

    function RB(HH, BH) {
      return HH.from - BH.from || HH.value.startSide - BH.value.startSide
    }
    class jB {
      constructor(HH, BH, LH, AH) {
        this.from = HH, this.to = BH, this.value = LH, this.VrH = AH
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          rH = LH ? this.to : this.from;
        for (let SH = AH, hH = rH.length;;) {
          if (SH == hH) return SH;
          let AH = SH + hH >> 1,
            tH = rH[AH] - HH || (LH ? this.value[AH].endSide : this.value[AH].startSide) - BH;
          if (AH == SH) return tH >= 0 ? SH : hH;
          tH >= 0 ? hH = AH : SH = AH + 1
        }
      }
      between(HH, BH, LH, AH) {
        for (let rH = this.findIndex(BH, -1e9, !0), SH = this.findIndex(LH, 1e9, !1, rH); rH < SH; rH++)
          if (!1 === AH(this.from[rH] + HH, this.to[rH] + HH, this.value[rH])) return !1
      }
      map(HH, BH) {
        let LH = [],
          AH = [],
          rH = [],
          SH = -1,
          hH = -1;
        for (let tH = 0; tH < this.value.length; tH++) {
          let zH, CH, EH = this.value[tH],
            XH = this.from[tH] + HH,
            GH = this.to[tH] + HH;
          if (XH == GH) {
            let HH = BH.mapPos(XH, EH.startSide, EH.mapMode);
            if (null == HH) continue;
            if (zH = CH = HH, EH.startSide != EH.endSide && (CH = BH.mapPos(XH, EH.endSide), CH < zH)) continue
          } else if (zH = BH.mapPos(XH, EH.startSide), CH = BH.mapPos(GH, EH.endSide), zH > CH || zH == CH && EH.startSide > 0 && EH.endSide <= 0) continue;
          (CH - zH || EH.endSide - EH.startSide) < 0 || (SH < 0 && (SH = zH), EH.point && (hH = Math.max(hH, CH - zH)), LH.push(EH), AH.push(zH - SH), rH.push(CH - SH))
        }
        return {
          mapped: LH.length ? new jB(AH, rH, LH, hH) : null,
          pos: SH
        }
      }
    }
    class nB {
      constructor(HH, BH, LH, AH) {
        this.chunkPos = HH, this.chunk = BH, this.nextLayer = LH, this.VrH = AH
      }
      static create(HH, BH, LH, AH) {
        return new nB(HH, BH, LH, AH)
      }
      get length() {
        let HH = this.chunk.length - 1;
        return HH < 0 ? 0 : Math.max(this.chunkEnd(HH), this.nextLayer.length)
      }
      get size() {
        if (this.TX) return 0;
        let HH = this.nextLayer.size;
        for (let BH of this.chunk) HH += BH.value.length;
        return HH
      }
      chunkEnd(HH) {
        return this.chunkPos[HH] + this.chunk[HH].length
      }
      update(HH) {
        let {
          add: BH = [],
          sort: LH = !1,
          filterFrom: AH = 0,
          filterTo: rH = this.length
        } = HH, SH = HH.filter;
        if (0 == BH.length && !SH) return this;
        if (LH && (BH = BH.slice().sort(RB)), this.TX) return BH.length ? nB.of(BH) : this;
        let hH = new wB(this, null, -1).goto(0),
          tH = 0,
          zH = [],
          CH = new FB;
        for (; hH.value || tH < BH.length;)
          if (tH < BH.length && (hH.from - BH[tH].from || hH.startSide - BH[tH].value.startSide) >= 0) {
            let HH = BH[tH++];
            CH.addInner(HH.from, HH.to, HH.value) || zH.push(HH)
          } else 1 == hH.rangeIndex && hH.chunkIndex < this.chunk.length && (tH == BH.length || this.chunkEnd(hH.chunkIndex) < BH[tH].from) && (!SH || AH > this.chunkEnd(hH.chunkIndex) || rH < this.chunkPos[hH.chunkIndex]) && CH.addChunk(this.chunkPos[hH.chunkIndex], this.chunk[hH.chunkIndex]) ? hH.nextChunk() : ((!SH || AH > hH.to || rH < hH.from || SH(hH.from, hH.to, hH.value)) && (CH.addInner(hH.from, hH.to, hH.value) || zH.push(NB.create(hH.from, hH.to, hH.value))), hH.next());
        return CH.finishInner(this.nextLayer.TX && !zH.length ? nB.empty : this.nextLayer.update({
          add: zH,
          filter: SH,
          filterFrom: AH,
          filterTo: rH
        }))
      }
      map(HH) {
        if (HH.empty || this.TX) return this;
        let BH = [],
          LH = [],
          AH = -1;
        for (let SH = 0; SH < this.chunk.length; SH++) {
          let rH = this.chunkPos[SH],
            hH = this.chunk[SH],
            tH = HH.touchesRange(rH, rH + hH.length);
          if (!1 === tH) AH = Math.max(AH, hH.VrH), BH.push(hH), LH.push(HH.mapPos(rH));
          else if (!0 === tH) {
            let {
              mapped: SH,
              pos: tH
            } = hH.map(rH, HH);
            SH && (AH = Math.max(AH, SH.VrH), BH.push(SH), LH.push(tH))
          }
        }
        let rH = this.nextLayer.map(HH);
        return 0 == BH.length ? rH : new nB(LH, BH, rH || nB.empty, AH)
      }
      between(HH, BH, LH) {
        if (!this.TX) {
          for (let AH = 0; AH < this.chunk.length; AH++) {
            let rH = this.chunkPos[AH],
              SH = this.chunk[AH];
            if (BH >= rH && HH <= rH + SH.length && !1 === SH.between(rH, HH - rH, BH - rH, LH)) return
          }
          this.nextLayer.between(HH, BH, LH)
        }
      }
      iter() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return ZB.from([this]).goto(HH)
      }
      get TX() {
        return this.nextLayer == this
      }
      static iter(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ZB.from(HH).goto(BH)
      }
      static compare(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          SH = HH.filter((HH => HH.VrH > 0 || !HH.TX && HH.VrH >= rH)),
          hH = BH.filter((HH => HH.VrH > 0 || !HH.TX && HH.VrH >= rH)),
          tH = DB(SH, hH, LH),
          zH = new aB(SH, tH, rH),
          CH = new aB(hH, tH, rH);
        LH.iterGaps(((HH, BH, LH) => sB(zH, HH, CH, BH, LH, AH))), LH.empty && 0 == LH.length && sB(zH, 0, CH, 0, 0, AH)
      }
      static eq(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        null == AH && (AH = 999999999);
        let rH = HH.filter((HH => !HH.TX && BH.indexOf(HH) < 0)),
          SH = BH.filter((BH => !BH.TX && HH.indexOf(BH) < 0));
        if (rH.length != SH.length) return !1;
        if (!rH.length) return !0;
        let hH = DB(rH, SH),
          tH = new aB(rH, hH, 0).goto(LH),
          zH = new aB(SH, hH, 0).goto(LH);
        for (;;) {
          if (tH.to != zH.to || !JB(tH.active, zH.active) || tH.point && (!zH.point || !gB(tH.point, zH.point))) return !1;
          if (tH.to > AH) return !0;
          tH.next(), zH.next()
        }
      }
      static spans(HH, BH, LH, AH) {
        let rH = new aB(HH, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(BH),
          SH = BH,
          hH = rH.openStart;
        for (;;) {
          let HH = Math.min(rH.to, LH);
          if (rH.point) {
            let LH = rH.activeForPoint(rH.to),
              tH = rH.pointFrom < BH ? LH.length + 1 : rH.point.startSide < 0 ? LH.length : Math.min(LH.length, hH);
            AH.point(SH, HH, rH.point, LH, tH, rH.pointRank), hH = Math.min(rH.openEnd(HH), LH.length)
          } else HH > SH && (AH.span(SH, HH, rH.active, hH), hH = rH.openEnd(HH));
          if (rH.to > LH) return hH + (rH.point && rH.to > LH ? 1 : 0);
          SH = rH.to, rH.next()
        }
      }
      static of (HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = new FB;
        for (let AH of HH instanceof NB ? [HH] : BH ? function(HH) {
            if (HH.length > 1)
              for (let BH = HH[0], LH = 1; LH < HH.length; LH++) {
                let AH = HH[LH];
                if (RB(BH, AH) > 0) return HH.slice().sort(RB);
                BH = AH
              }
            return HH
          }(HH) : HH) LH.add(AH.from, AH.to, AH.value);
        return LH.finish()
      }
      static join(HH) {
        if (!HH.length) return nB.empty;
        let BH = HH[HH.length - 1];
        for (let LH = HH.length - 2; LH >= 0; LH--)
          for (let AH = HH[LH]; AH != nB.empty; AH = AH.nextLayer) BH = new nB(AH.chunkPos, AH.chunk, BH, Math.max(AH.VrH, BH.VrH));
        return BH
      }
    }
    nB.empty = new nB([], [], null, -1), nB.empty.nextLayer = nB.empty;
    class FB {
      finishChunk(HH) {
        this.chunks.push(new jB(this.from, this.to, this.value, this.VrH)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.VrH), this.VrH = -1, HH && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.VrH = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(HH, BH, LH) {
        this.addInner(HH, BH, LH) || (this.nextLayer || (this.nextLayer = new FB)).add(HH, BH, LH)
      }
      addInner(HH, BH, LH) {
        let AH = HH - this.lastTo || LH.startSide - this.last.endSide;
        if (AH <= 0 && (HH - this.lastFrom || LH.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(AH < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = HH), this.from.push(HH - this.chunkStart), this.to.push(BH - this.chunkStart), this.last = LH, this.lastFrom = HH, this.lastTo = BH, this.value.push(LH), LH.point && (this.VrH = Math.max(this.VrH, BH - HH)), !0)
      }
      addChunk(HH, BH) {
        if ((HH - this.lastTo || BH.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, BH.VrH), this.chunks.push(BH), this.chunkPos.push(HH);
        let LH = BH.value.length - 1;
        return this.last = BH.value[LH], this.lastFrom = BH.from[LH] + HH, this.lastTo = BH.to[LH] + HH, !0
      }
      finish() {
        return this.finishInner(nB.empty)
      }
      finishInner(HH) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return HH;
        let BH = nB.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(HH) : HH, this.setMaxPoint);
        return this.from = null, BH
      }
    }

    function DB(HH, BH, LH) {
      let AH = new Map;
      for (let SH of HH)
        for (let HH = 0; HH < SH.chunk.length; HH++) SH.chunk[HH].VrH <= 0 && AH.set(SH.chunk[HH], SH.chunkPos[HH]);
      let rH = new Set;
      for (let SH of BH)
        for (let HH = 0; HH < SH.chunk.length; HH++) {
          let BH = AH.get(SH.chunk[HH]);
          null == BH || (LH ? LH.mapPos(BH) : BH) != SH.chunkPos[HH] || (null === LH || void 0 === LH ? void 0 : LH.touchesRange(BH, BH + SH.chunk[HH].length)) || rH.add(SH.chunk[HH])
        }
      return rH
    }
    class wB {
      constructor(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = HH, this.skip = BH, this.OrH = LH, this.rank = AH
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(HH, BH, !1), this
      }
      gotoInner(HH, BH, LH) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let BH = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(BH) || this.layer.chunkEnd(this.chunkIndex) < HH || BH.VrH < this.OrH)) break;
          this.chunkIndex++, LH = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let AH = this.layer.chunk[this.chunkIndex].findIndex(HH - this.layer.chunkPos[this.chunkIndex], BH, !0);
          (!LH || this.rangeIndex < AH) && this.setRangeIndex(AH)
        }
        this.next()
      }
      forward(HH, BH) {
        (this.to - HH || this.endSide - BH) < 0 && this.gotoInner(HH, BH, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let HH = this.layer.chunkPos[this.chunkIndex],
              BH = this.layer.chunk[this.chunkIndex],
              LH = HH + BH.from[this.rangeIndex];
            if (this.from = LH, this.to = HH + BH.to[this.rangeIndex], this.value = BH.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.OrH < 0 || this.value.point && this.to - this.from >= this.OrH) break
          }
        }
      }
      setRangeIndex(HH) {
        if (HH == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = HH
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(HH) {
        return this.from - HH.from || this.startSide - HH.startSide || this.rank - HH.rank || this.to - HH.to || this.endSide - HH.endSide
      }
    }
    class ZB {
      constructor(HH) {
        this.heap = HH
      }
      static from(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          AH = [];
        for (let rH = 0; rH < HH.length; rH++)
          for (let SH = HH[rH]; !SH.TX; SH = SH.nextLayer) SH.VrH >= LH && AH.push(new wB(SH, BH, LH, rH));
        return 1 == AH.length ? AH[0] : new ZB(AH)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let LH of this.heap) LH.goto(HH, BH);
        for (let LH = this.heap.length >> 1; LH >= 0; LH--) dB(this.heap, LH);
        return this.next(), this
      }
      forward(HH, BH) {
        for (let LH of this.heap) LH.forward(HH, BH);
        for (let LH = this.heap.length >> 1; LH >= 0; LH--) dB(this.heap, LH);
        (this.to - HH || this.value.endSide - BH) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let HH = this.heap[0];
          this.from = HH.from, this.to = HH.to, this.value = HH.value, this.rank = HH.rank, HH.value && HH.next(), dB(this.heap, 0)
        }
      }
    }

    function dB(HH, BH) {
      for (let LH = HH[BH];;) {
        let AH = 1 + (BH << 1);
        if (AH >= HH.length) break;
        let rH = HH[AH];
        if (AH + 1 < HH.length && rH.compare(HH[AH + 1]) >= 0 && (rH = HH[AH + 1], AH++), LH.compare(rH) < 0) break;
        HH[AH] = LH, HH[BH] = rH, BH = AH
      }
    }
    class aB {
      constructor(HH, BH, LH) {
        this.OrH = LH, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ZB.from(HH, BH, LH)
      }
      goto(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(HH, BH), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = HH, this.endSide = BH, this.openStart = -1, this.next(), this
      }
      forward(HH, BH) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - HH || this.active[this.minActive].endSide - BH) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(HH, BH)
      }
      removeActive(HH) {
        iB(this.active, HH), iB(this.activeTo, HH), iB(this.activeRank, HH), this.minActive = yB(this.active, this.activeTo)
      }
      addActive(HH) {
        let BH = 0,
          {
            value: LH,
            to: AH,
            rank: rH
          } = this.cursor;
        for (; BH < this.activeRank.length && (rH - this.activeRank[BH] || AH - this.activeTo[BH]) > 0;) BH++;
        pB(this.active, BH, LH), pB(this.activeTo, BH, AH), pB(this.activeRank, BH, rH), HH && pB(HH, BH, this.cursor.from), this.minActive = yB(this.active, this.activeTo)
      }
      next() {
        let HH = this.to,
          BH = this.point;
        this.point = null;
        let LH = this.openStart < 0 ? [] : null;
        for (;;) {
          let AH = this.minActive;
          if (AH > -1 && (this.activeTo[AH] - this.cursor.from || this.active[AH].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[AH] > HH) {
              this.to = this.activeTo[AH], this.endSide = this.active[AH].endSide;
              break
            }
            this.removeActive(AH), LH && iB(LH, AH)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > HH) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let HH = this.cursor.value;
              if (HH.point) {
                if (!(BH && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = HH, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = HH.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(LH), this.cursor.next()
            }
          }
        }
        if (LH) {
          this.openStart = 0;
          for (let BH = LH.length - 1; BH >= 0 && LH[BH] < HH; BH--) this.openStart++
        }
      }
      activeForPoint(HH) {
        if (!this.active.length) return this.active;
        let BH = [];
        for (let LH = this.active.length - 1; LH >= 0 && !(this.activeRank[LH] < this.pointRank); LH--)(this.activeTo[LH] > HH || this.activeTo[LH] == HH && this.active[LH].endSide >= this.point.endSide) && BH.push(this.active[LH]);
        return BH.reverse()
      }
      openEnd(HH) {
        let BH = 0;
        for (let LH = this.activeTo.length - 1; LH >= 0 && this.activeTo[LH] > HH; LH--) BH++;
        return BH
      }
    }

    function sB(HH, BH, LH, AH, rH, SH) {
      HH.goto(BH), LH.goto(AH);
      let hH = AH + rH,
        tH = AH,
        zH = AH - BH,
        CH = !!SH.boundChange;
      for (let EH = !1;;) {
        let BH = HH.to + zH - LH.to,
          AH = BH || HH.endSide - LH.endSide,
          rH = AH < 0 ? HH.to + zH : LH.to,
          XH = Math.min(rH, hH);
        if (HH.point || LH.point ? (HH.point && LH.point && gB(HH.point, LH.point) && JB(HH.activeForPoint(HH.to), LH.activeForPoint(LH.to)) || SH.comparePoint(tH, XH, HH.point, LH.point), EH = !1) : (EH && SH.boundChange(tH), XH > tH && !JB(HH.active, LH.active) && SH.compareRange(tH, XH, HH.active, LH.active), CH && XH < hH && (BH || HH.openEnd(rH) != LH.openEnd(rH)) && (EH = !0)), rH > hH) break;
        tH = rH, AH <= 0 && HH.next(), AH >= 0 && LH.next()
      }
    }

    function JB(HH, BH) {
      if (HH.length != BH.length) return !1;
      for (let LH = 0; LH < HH.length; LH++)
        if (HH[LH] != BH[LH] && !gB(HH[LH], BH[LH])) return !1;
      return !0
    }

    function iB(HH, BH) {
      for (let LH = BH, AH = HH.length - 1; LH < AH; LH++) HH[LH] = HH[LH + 1];
      HH.pop()
    }

    function pB(HH, BH, LH) {
      for (let AH = HH.length - 1; AH >= BH; AH--) HH[AH + 1] = HH[AH];
      HH[BH] = LH
    }

    function yB(HH, BH) {
      let LH = -1,
        AH = 1e9;
      for (let rH = 0; rH < BH.length; rH++)(BH[rH] - AH || HH[rH].endSide - HH[LH].endSide) < 0 && (LH = rH, AH = BH[rH]);
      return LH
    }

    function HL(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : HH.length,
        AH = 0;
      for (let rH = 0; rH < LH && rH < HH.length;) 9 == HH.charCodeAt(rH) ? (AH += BH - AH % BH, rH++) : (AH++, rH = bH(HH, rH));
      return AH
    }

    function BL(HH, BH, LH, AH) {
      for (let rH = 0, SH = 0;;) {
        if (SH >= BH) return rH;
        if (rH == HH.length) break;
        SH += 9 == HH.charCodeAt(rH) ? LH - SH % LH : 1, rH = bH(HH, rH)
      }
      return !0 === AH ? -1 : HH.length
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);