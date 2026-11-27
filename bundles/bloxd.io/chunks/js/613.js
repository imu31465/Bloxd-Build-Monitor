export const id = 613;
export const ids = [613];
export const modules = {
  53507: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => ki,
      e: () => oW,
      ChangeSet: () => dW,
      i: () => ui,
      l: () => CW,
      o: () => vi,
      p: () => qW,
      t: () => uW,
      w: () => Ei,
      C: () => Bi,
      A: () => qi,
      G: () => Di,
      H: () => Ki,
      L: () => FW,
      M: () => bW,
      P: () => Si,
      Q: () => JW,
      R: () => HW,
      U: () => gi,
      X: () => OO,
      $: () => TW,
      ab: () => mO,
      cb: () => hW
    });
    let mW = [],
      EW = [];

    function NW(WW) {
      if (WW < 768) return !1;
      for (let iW = 0, OW = mW.length;;) {
        let NW = iW + OW >> 1;
        if (WW < mW[NW]) OW = NW;
        else {
          if (!(WW >= EW[NW])) return !0;
          iW = NW + 1
        }
        if (iW == OW) return !1
      }
    }

    function PW(WW) {
      return WW >= 127462 && WW <= 127487
    }(() => {
      let WW = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((WW => WW ? parseInt(WW, 36) : 1));
      for (let iW = 0, OW = 0; iW < WW.length; iW++)(iW % 2 ? EW : mW).push(OW += WW[iW])
    })();
    const LW = 8205;

    function cW(WW, iW) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? wW : tW)(WW, iW, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function wW(WW, iW, OW) {
      if (iW == WW.length) return iW;
      iW && xW(WW.charCodeAt(iW)) && lW(WW.charCodeAt(iW - 1)) && iW--;
      let mW = ZW(WW, iW);
      for (iW += AW(mW); iW < WW.length;) {
        let EW = ZW(WW, iW);
        if (mW == LW || EW == LW || OW && NW(EW)) iW += AW(EW), mW = EW;
        else {
          if (!PW(EW)) break;
          {
            let OW = 0,
              mW = iW - 2;
            for (; mW >= 0 && PW(ZW(WW, mW));) OW++, mW -= 2;
            if (OW % 2 == 0) break;
            iW += 2
          }
        }
      }
      return iW
    }

    function tW(WW, iW, OW) {
      for (; iW > 0;) {
        let mW = wW(WW, iW - 2, OW);
        if (mW < iW) return mW;
        iW--
      }
      return 0
    }

    function ZW(WW, iW) {
      let OW = WW.charCodeAt(iW);
      if (!lW(OW) || iW + 1 == WW.length) return OW;
      let mW = WW.charCodeAt(iW + 1);
      return xW(mW) ? mW - 56320 + (OW - 55296 << 10) + 65536 : OW
    }

    function xW(WW) {
      return WW >= 56320 && WW < 57344
    }

    function lW(WW) {
      return WW >= 55296 && WW < 56320
    }

    function AW(WW) {
      return WW < 65536 ? 1 : 2
    }
    class bW {
      lineAt(WW) {
        if (WW < 0 || WW > this.length) throw new RangeError(`Invalid position ${WW} in document of length ${this.length}`);
        return this.lineInner(WW, !1, 1, 0)
      }
      line(WW) {
        if (WW < 1 || WW > this.lines) throw new RangeError(`Invalid line number ${WW} in ${this.lines}-line document`);
        return this.lineInner(WW, !0, 1, 0)
      }
      replace(WW, iW, OW) {
        [WW, iW] = yW(this, WW, iW);
        let mW = [];
        return this.decompose(0, WW, mW, 2), OW.length && OW.decompose(0, OW.length, mW, 3), this.decompose(iW, this.length, mW, 1), UW.from(mW, this.length - (iW - WW) + OW.length)
      }
      append(WW) {
        return this.replace(this.length, this.length, WW)
      }
      slice(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [WW, iW] = yW(this, WW, iW);
        let OW = [];
        return this.decompose(WW, iW, OW, 0), UW.from(OW, iW - WW)
      }
      eq(WW) {
        if (WW == this) return !0;
        if (WW.length != this.length || WW.lines != this.lines) return !1;
        let iW = this.scanIdentical(WW, 1),
          OW = this.length - this.scanIdentical(WW, -1),
          mW = new MW(this),
          EW = new MW(WW);
        for (let NW = iW, PW = iW;;) {
          if (mW.next(NW), EW.next(NW), NW = 0, mW.lineBreak != EW.lineBreak || mW.done != EW.done || mW.value != EW.value) return !1;
          if (PW += mW.value.length, mW.done || PW >= OW) return !0
        }
      }
      iter() {
        return new MW(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new KW(this, WW, iW)
      }
      iterLines(WW, iW) {
        let OW;
        if (null == WW) OW = this.iter();
        else {
          null == iW && (iW = this.lines + 1);
          let mW = this.line(WW).from;
          OW = this.iterRange(mW, Math.max(mW, iW == this.lines + 1 ? this.length : iW <= 1 ? 0 : this.line(iW - 1).to))
        }
        return new SW(OW)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let WW = [];
        return this.flatten(WW), WW
      }
      constructor() {}
      static of (WW) {
        if (0 == WW.length) throw new RangeError("A document must have at least one line");
        return 1 != WW.length || WW[0] ? WW.length <= 32 ? new jW(WW) : UW.from(jW.split(WW, [])) : bW.empty
      }
    }
    class jW extends bW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(WW) {
          let iW = -1;
          for (let OW of WW) iW += OW.length + 1;
          return iW
        }(WW);
        super(), this.text = WW, this.length = iW
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(WW, iW, OW, mW) {
        for (let EW = 0;; EW++) {
          let NW = this.text[EW],
            PW = mW + NW.length;
          if ((iW ? OW : PW) >= WW) return new YW(mW, PW, OW, NW);
          mW = PW + 1, OW++
        }
      }
      decompose(WW, iW, OW, mW) {
        let EW = WW <= 0 && iW >= this.length ? this : new jW(sW(this.text, WW, iW), Math.min(iW, this.length) - Math.max(0, WW));
        if (1 & mW) {
          let WW = OW.pop(),
            iW = kW(EW.text, WW.text.slice(), 0, EW.length);
          if (iW.length <= 32) OW.push(new jW(iW, WW.length + EW.length));
          else {
            let WW = iW.length >> 1;
            OW.push(new jW(iW.slice(0, WW)), new jW(iW.slice(WW)))
          }
        } else OW.push(EW)
      }
      replace(WW, iW, OW) {
        if (!(OW instanceof jW)) return super.replace(WW, iW, OW);
        [WW, iW] = yW(this, WW, iW);
        let mW = kW(this.text, kW(OW.text, sW(this.text, 0, WW)), iW),
          EW = this.length + OW.length - (iW - WW);
        return mW.length <= 32 ? new jW(mW, EW) : UW.from(jW.split(mW, []), EW)
      }
      sliceString(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [WW, iW] = yW(this, WW, iW);
        let mW = "";
        for (let EW = 0, NW = 0; EW <= iW && NW < this.text.length; NW++) {
          let PW = this.text[NW],
            LW = EW + PW.length;
          EW > WW && NW && (mW += OW), WW < LW && iW > EW && (mW += PW.slice(Math.max(0, WW - EW), iW - EW)), EW = LW + 1
        }
        return mW
      }
      flatten(WW) {
        for (let iW of this.text) WW.push(iW)
      }
      scanIdentical() {
        return 0
      }
      static split(WW, iW) {
        let OW = [],
          mW = -1;
        for (let EW of WW) OW.push(EW), mW += EW.length + 1, 32 == OW.length && (iW.push(new jW(OW, mW)), OW = [], mW = -1);
        return mW > -1 && iW.push(new jW(OW, mW)), iW
      }
    }
    class UW extends bW {
      constructor(WW, iW) {
        super(), this.children = WW, this.length = iW, this.lines = 0;
        for (let OW of WW) this.lines += OW.lines
      }
      lineInner(WW, iW, OW, mW) {
        for (let EW = 0;; EW++) {
          let NW = this.children[EW],
            PW = mW + NW.length,
            LW = OW + NW.lines - 1;
          if ((iW ? LW : PW) >= WW) return NW.lineInner(WW, iW, OW, mW);
          mW = PW + 1, OW = LW + 1
        }
      }
      decompose(WW, iW, OW, mW) {
        for (let EW = 0, NW = 0; NW <= iW && EW < this.children.length; EW++) {
          let PW = this.children[EW],
            LW = NW + PW.length;
          if (WW <= LW && iW >= NW) {
            let EW = mW & ((NW <= WW ? 1 : 0) | (LW >= iW ? 2 : 0));
            NW >= WW && LW <= iW && !EW ? OW.push(PW) : PW.decompose(WW - NW, iW - NW, OW, EW)
          }
          NW = LW + 1
        }
      }
      replace(WW, iW, OW) {
        if ([WW, iW] = yW(this, WW, iW), OW.lines < this.lines)
          for (let mW = 0, EW = 0; mW < this.children.length; mW++) {
            let NW = this.children[mW],
              PW = EW + NW.length;
            if (WW >= EW && iW <= PW) {
              let LW = NW.replace(WW - EW, iW - EW, OW),
                cW = this.lines - NW.lines + LW.lines;
              if (LW.lines < cW >> 4 && LW.lines > cW >> 6) {
                let EW = this.children.slice();
                return EW[mW] = LW, new UW(EW, this.length - (iW - WW) + OW.length)
              }
              return super.replace(EW, PW, LW)
            }
            EW = PW + 1
          }
        return super.replace(WW, iW, OW)
      }
      sliceString(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [WW, iW] = yW(this, WW, iW);
        let mW = "";
        for (let EW = 0, NW = 0; EW < this.children.length && NW <= iW; EW++) {
          let PW = this.children[EW],
            LW = NW + PW.length;
          NW > WW && EW && (mW += OW), WW < LW && iW > NW && (mW += PW.sliceString(WW - NW, iW - NW, OW)), NW = LW + 1
        }
        return mW
      }
      flatten(WW) {
        for (let iW of this.children) iW.flatten(WW)
      }
      scanIdentical(WW, iW) {
        if (!(WW instanceof UW)) return 0;
        let OW = 0,
          [mW, EW, NW, PW] = iW > 0 ? [0, 0, this.children.length, WW.children.length] : [this.children.length - 1, WW.children.length - 1, -1, -1];
        for (;; mW += iW, EW += iW) {
          if (mW == NW || EW == PW) return OW;
          let LW = this.children[mW],
            cW = WW.children[EW];
          if (LW != cW) return OW + LW.scanIdentical(cW, iW);
          OW += LW.length + 1
        }
      }
      static from(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.reduce(((WW, iW) => WW + iW.length + 1), -1),
          OW = 0;
        for (let xW of WW) OW += xW.lines;
        if (OW < 32) {
          let OW = [];
          for (let iW of WW) iW.flatten(OW);
          return new jW(OW, iW)
        }
        let mW = Math.max(32, OW >> 5),
          EW = mW << 1,
          NW = mW >> 1,
          PW = [],
          LW = 0,
          cW = -1,
          wW = [];

        function tW(WW) {
          let iW;
          if (WW.lines > EW && WW instanceof UW)
            for (let OW of WW.children) tW(OW);
          else WW.lines > NW && (LW > NW || !LW) ? (ZW(), PW.push(WW)) : WW instanceof jW && LW && (iW = wW[wW.length - 1]) instanceof jW && WW.lines + iW.lines <= 32 ? (LW += WW.lines, cW += WW.length + 1, wW[wW.length - 1] = new jW(iW.text.concat(WW.text), iW.length + 1 + WW.length)) : (LW + WW.lines > mW && ZW(), LW += WW.lines, cW += WW.length + 1, wW.push(WW))
        }

        function ZW() {
          0 != LW && (PW.push(1 == wW.length ? wW[0] : UW.from(wW, cW)), cW = -1, LW = wW.length = 0)
        }
        for (let xW of WW) tW(xW);
        return ZW(), 1 == PW.length ? PW[0] : new UW(PW, iW)
      }
    }

    function kW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let EW = 0, NW = 0, PW = !0; NW < WW.length && EW <= mW; NW++) {
        let LW = WW[NW],
          cW = EW + LW.length;
        cW >= OW && (cW > mW && (LW = LW.slice(0, mW - EW)), EW < OW && (LW = LW.slice(OW - EW)), PW ? (iW[iW.length - 1] += LW, PW = !1) : iW.push(LW)), EW = cW + 1
      }
      return iW
    }

    function sW(WW, iW, OW) {
      return kW(WW, [""], iW, OW)
    }
    bW.empty = new jW([""], 0);
    class MW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = iW, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [WW], this.offsets = [iW > 0 ? 1 : (WW instanceof jW ? WW.text.length : WW.children.length) << 1]
      }
      nextInner(WW, iW) {
        for (this.done = this.lineBreak = !1;;) {
          let OW = this.nodes.length - 1,
            mW = this.nodes[OW],
            EW = this.offsets[OW],
            NW = EW >> 1,
            PW = mW instanceof jW ? mW.text.length : mW.children.length;
          if (NW == (iW > 0 ? PW : 0)) {
            if (0 == OW) return this.done = !0, this.value = "", this;
            iW > 0 && this.offsets[OW - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & EW) == (iW > 0 ? 0 : 1)) {
            if (this.offsets[OW] += iW, 0 == WW) return this.lineBreak = !0, this.value = "\n", this;
            WW--
          } else if (mW instanceof jW) {
            let EW = mW.text[NW + (iW < 0 ? -1 : 0)];
            if (this.offsets[OW] += iW, EW.length > Math.max(0, WW)) return this.value = 0 == WW ? EW : iW > 0 ? EW.slice(WW) : EW.slice(0, EW.length - WW), this;
            WW -= EW.length
          } else {
            let EW = mW.children[NW + (iW < 0 ? -1 : 0)];
            WW > EW.length ? (WW -= EW.length, this.offsets[OW] += iW) : (iW < 0 && this.offsets[OW]--, this.nodes.push(EW), this.offsets.push(iW > 0 ? 1 : (EW instanceof jW ? EW.text.length : EW.children.length) << 1))
          }
        }
      }
      next() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return WW < 0 && (this.nextInner(-WW, -this.dir), WW = this.value.length), this.nextInner(WW, this.dir)
      }
    }
    class KW {
      constructor(WW, iW, OW) {
        this.value = "", this.done = !1, this.cursor = new MW(WW, iW > OW ? -1 : 1), this.pos = iW > OW ? WW.length : 0, this.from = Math.min(iW, OW), this.to = Math.max(iW, OW)
      }
      nextInner(WW, iW) {
        if (iW < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        WW += Math.max(0, iW < 0 ? this.pos - this.to : this.from - this.pos);
        let OW = iW < 0 ? this.pos - this.from : this.to - this.pos;
        WW > OW && (WW = OW), OW -= WW;
        let {
          value: mW
        } = this.cursor.next(WW);
        return this.pos += (mW.length + WW) * iW, this.value = mW.length <= OW ? mW : iW < 0 ? mW.slice(mW.length - OW) : mW.slice(0, OW), this.done = !this.value, this
      }
      next() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return WW < 0 ? WW = Math.max(WW, this.from - this.pos) : WW > 0 && (WW = Math.min(WW, this.to - this.pos)), this.nextInner(WW, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class SW {
      constructor(WW) {
        this.inner = WW, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: iW,
            lineBreak: OW,
            value: mW
          } = this.inner.next(WW);
        return iW && this.afterBreak ? (this.value = "", this.afterBreak = !1) : iW ? (this.done = !0, this.value = "") : OW ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = mW, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (bW.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, MW.prototype[Symbol.iterator] = KW.prototype[Symbol.iterator] = SW.prototype[Symbol.iterator] = function() {
      return this
    });
    class YW {
      constructor(WW, iW, OW, mW) {
        this.from = WW, this.to = iW, this.number = OW, this.text = mW
      }
      get length() {
        return this.to - this.from
      }
    }

    function yW(WW, iW, OW) {
      return [iW = Math.max(0, Math.min(WW.length, iW)), Math.max(iW, Math.min(WW.length, OW))]
    }

    function TW(WW, iW) {
      return cW(WW, iW, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function JW(WW, iW) {
      let OW = WW.charCodeAt(iW);
      if (!((mW = OW) >= 55296 && mW < 56320) || iW + 1 == WW.length) return OW;
      var mW;
      let EW = WW.charCodeAt(iW + 1);
      return function(WW) {
        return WW >= 56320 && WW < 57344
      }(EW) ? EW - 56320 + (OW - 55296 << 10) + 65536 : OW
    }

    function hW(WW) {
      return WW <= 65535 ? String.fromCharCode(WW) : (WW -= 65536, String.fromCharCode(55296 + (WW >> 10), 56320 + (1023 & WW)))
    }

    function HW(WW) {
      return WW < 65536 ? 1 : 2
    }
    const nW = /\r\n?|\n/;
    var uW = function(WW) {
      return WW[WW.Simple = 0] = "Simple", WW[WW.TrackDel = 1] = "TrackDel", WW[WW.TrackBefore = 2] = "TrackBefore", WW[WW.TrackAfter = 3] = "TrackAfter", WW
    }(uW || (uW = {}));
    class oW {
      constructor(WW) {
        this.sections = WW
      }
      get length() {
        let WW = 0;
        for (let iW = 0; iW < this.sections.length; iW += 2) WW += this.sections[iW];
        return WW
      }
      get newLength() {
        let WW = 0;
        for (let iW = 0; iW < this.sections.length; iW += 2) {
          let OW = this.sections[iW + 1];
          WW += OW < 0 ? this.sections[iW] : OW
        }
        return WW
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(WW) {
        for (let iW = 0, OW = 0, mW = 0; iW < this.sections.length;) {
          let EW = this.sections[iW++],
            NW = this.sections[iW++];
          NW < 0 ? (WW(OW, mW, EW), mW += EW) : mW += NW, OW += EW
        }
      }
      iterChangedRanges(WW) {
        gW(this, WW, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let WW = [];
        for (let iW = 0; iW < this.sections.length;) {
          let OW = this.sections[iW++],
            mW = this.sections[iW++];
          mW < 0 ? WW.push(OW, mW) : WW.push(mW, OW)
        }
        return new oW(WW)
      }
      composeDesc(WW) {
        return this.empty ? WW : WW.empty ? this : VW(this, WW)
      }
      mapDesc(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return WW.empty ? this : DW(this, WW, iW)
      }
      mapPos(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : uW.Simple,
          mW = 0,
          EW = 0;
        for (let NW = 0; NW < this.sections.length;) {
          let PW = this.sections[NW++],
            LW = this.sections[NW++],
            cW = mW + PW;
          if (LW < 0) {
            if (cW > WW) return EW + (WW - mW);
            EW += PW
          } else {
            if (OW != uW.Simple && cW >= WW && (OW == uW.TrackDel && mW < WW && cW > WW || OW == uW.TrackBefore && mW < WW || OW == uW.TrackAfter && cW > WW)) return null;
            if (cW > WW || cW == WW && iW < 0 && !PW) return WW == mW || iW < 0 ? EW : EW + LW;
            EW += LW
          }
          mW = cW
        }
        if (WW > mW) throw new RangeError(`Position ${WW} is out of range for changeset of length ${mW}`);
        return EW
      }
      touchesRange(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        for (let OW = 0, mW = 0; OW < this.sections.length && mW <= iW;) {
          let EW = mW + this.sections[OW++];
          if (this.sections[OW++] >= 0 && mW <= iW && EW >= WW) return !(mW < WW && EW > iW) || "cover";
          mW = EW
        }
        return !1
      }
      toString() {
        let WW = "";
        for (let iW = 0; iW < this.sections.length;) {
          let OW = this.sections[iW++],
            mW = this.sections[iW++];
          WW += (WW ? " " : "") + OW + (mW >= 0 ? ":" + mW : "")
        }
        return WW
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(WW) {
        if (!Array.isArray(WW) || WW.length % 2 || WW.some((WW => "number" != typeof WW))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new oW(WW)
      }
      static create(WW) {
        return new oW(WW)
      }
    }
    class dW extends oW {
      constructor(WW, iW) {
        super(WW), this.inserted = iW
      }
      apply(WW) {
        if (this.length != WW.length) throw new RangeError("Applying change set to a document with the wrong length");
        return gW(this, ((iW, OW, mW, EW, NW) => WW = WW.replace(mW, mW + (OW - iW), NW)), !1), WW
      }
      mapDesc(WW) {
        return DW(this, WW, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(WW) {
        let iW = this.sections.slice(),
          OW = [];
        for (let mW = 0, EW = 0; mW < iW.length; mW += 2) {
          let NW = iW[mW],
            PW = iW[mW + 1];
          if (PW >= 0) {
            iW[mW] = PW, iW[mW + 1] = NW;
            let LW = mW >> 1;
            for (; OW.length < LW;) OW.push(bW.empty);
            OW.push(NW ? WW.slice(EW, EW + NW) : bW.empty)
          }
          EW += NW
        }
        return new dW(iW, OW)
      }
      compose(WW) {
        return this.empty ? WW : WW.empty ? this : VW(this, WW, !0)
      }
      map(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return WW.empty ? this : DW(this, WW, iW, !0)
      }
      iterChanges(WW) {
        gW(this, WW, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return oW.create(this.sections)
      }
      filter(WW) {
        let iW = [],
          OW = [],
          mW = [],
          EW = new pW(this);
        WW: for (let NW = 0, PW = 0;;) {
          let LW = NW == WW.length ? 1e9 : WW[NW++];
          for (; PW < LW || PW == LW && 0 == EW.len;) {
            if (EW.done) break WW;
            let WW = Math.min(EW.len, LW - PW);
            eW(mW, WW, -1);
            let NW = -1 == EW.ins ? -1 : 0 == EW.off ? EW.ins : 0;
            eW(iW, WW, NW), NW > 0 && vW(OW, iW, EW.text), EW.forward(WW), PW += WW
          }
          let cW = WW[NW++];
          for (; PW < cW;) {
            if (EW.done) break WW;
            let WW = Math.min(EW.len, cW - PW);
            eW(iW, WW, -1), eW(mW, WW, -1 == EW.ins ? -1 : 0 == EW.off ? EW.ins : 0), EW.forward(WW), PW += WW
          }
        }
        return {
          changes: new dW(iW, OW),
          filtered: oW.create(mW)
        }
      }
      toJSON() {
        let WW = [];
        for (let iW = 0; iW < this.sections.length; iW += 2) {
          let OW = this.sections[iW],
            mW = this.sections[iW + 1];
          mW < 0 ? WW.push(OW) : 0 == mW ? WW.push([OW]) : WW.push([OW].concat(this.inserted[iW >> 1].toJSON()))
        }
        return WW
      }
      static of (WW, iW, OW) {
        let mW = [],
          EW = [],
          NW = 0,
          PW = null;

        function LW() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !mW.length) return;
          NW < iW && eW(mW, iW - NW, -1);
          let WW = new dW(mW, EW);
          PW = PW ? PW.compose(WW.map(PW)) : WW, mW = [], EW = [], NW = 0
        }
        return function WW(cW) {
          if (Array.isArray(cW))
            for (let iW of cW) WW(iW);
          else if (cW instanceof dW) {
            if (cW.length != iW) throw new RangeError(`Mismatched change set length (got ${cW.length}, expected ${iW})`);
            LW(), PW = PW ? PW.compose(cW.map(PW)) : cW
          } else {
            let {
              from: WW,
              to: PW = WW,
              insert: wW
            } = cW;
            if (WW > PW || WW < 0 || PW > iW) throw new RangeError(`Invalid change range ${WW} to ${PW} (in doc of length ${iW})`);
            let tW = wW ? "string" == typeof wW ? bW.of(wW.split(OW || nW)) : wW : bW.empty,
              ZW = tW.length;
            if (WW == PW && 0 == ZW) return;
            WW < NW && LW(), WW > NW && eW(mW, WW - NW, -1), eW(mW, PW - WW, ZW), vW(EW, mW, tW), NW = PW
          }
        }(WW), LW(!PW), PW
      }
      static empty(WW) {
        return new dW(WW ? [WW, -1] : [], [])
      }
      static fromJSON(WW) {
        if (!Array.isArray(WW)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let iW = [],
          OW = [];
        for (let mW = 0; mW < WW.length; mW++) {
          let EW = WW[mW];
          if ("number" == typeof EW) iW.push(EW, -1);
          else {
            if (!Array.isArray(EW) || "number" != typeof EW[0] || EW.some(((WW, iW) => iW && "string" != typeof WW))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == EW.length) iW.push(EW[0], 0);
            else {
              for (; OW.length < mW;) OW.push(bW.empty);
              OW[mW] = bW.of(EW.slice(1)), iW.push(EW[0], OW[mW].length)
            }
          }
        }
        return new dW(iW, OW)
      }
      static createSet(WW, iW) {
        return new dW(WW, iW)
      }
    }

    function eW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == iW && OW <= 0) return;
      let EW = WW.length - 2;
      EW >= 0 && OW <= 0 && OW == WW[EW + 1] ? WW[EW] += iW : EW >= 0 && 0 == iW && 0 == WW[EW] ? WW[EW + 1] += OW : mW ? (WW[EW] += iW, WW[EW + 1] += OW) : WW.push(iW, OW)
    }

    function vW(WW, iW, OW) {
      if (0 == OW.length) return;
      let mW = iW.length - 2 >> 1;
      if (mW < WW.length) WW[WW.length - 1] = WW[WW.length - 1].append(OW);
      else {
        for (; WW.length < mW;) WW.push(bW.empty);
        WW.push(OW)
      }
    }

    function gW(WW, iW, OW) {
      let mW = WW.inserted;
      for (let EW = 0, NW = 0, PW = 0; PW < WW.sections.length;) {
        let LW = WW.sections[PW++],
          cW = WW.sections[PW++];
        if (cW < 0) EW += LW, NW += LW;
        else {
          let wW = EW,
            tW = NW,
            ZW = bW.empty;
          for (; wW += LW, tW += cW, cW && mW && (ZW = ZW.append(mW[PW - 2 >> 1])), !(OW || PW == WW.sections.length || WW.sections[PW + 1] < 0);) LW = WW.sections[PW++], cW = WW.sections[PW++];
          iW(EW, wW, NW, tW, ZW), EW = wW, NW = tW
        }
      }
    }

    function DW(WW, iW, OW) {
      let mW = [],
        EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        NW = new pW(WW),
        PW = new pW(iW),
        LW = 0;
      for (let cW = -1;;) {
        if (++LW > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (NW.done && PW.len || PW.done && NW.len) throw new Error("Mismatched change set lengths");
        if (-1 == NW.ins && -1 == PW.ins) {
          let WW = Math.min(NW.len, PW.len);
          eW(mW, WW, -1), NW.forward(WW), PW.forward(WW)
        } else if (PW.ins >= 0 && (NW.ins < 0 || cW == NW.i || 0 == NW.off && (PW.len < NW.len || PW.len == NW.len && !OW))) {
          let WW = PW.len;
          for (eW(mW, PW.ins, -1); WW;) {
            if (++LW > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let iW = Math.min(NW.len, WW);
            NW.ins >= 0 && cW < NW.i && NW.len <= iW && (eW(mW, 0, NW.ins), EW && vW(EW, mW, NW.text), cW = NW.i), NW.forward(iW), WW -= iW
          }
          PW.next()
        } else {
          if (!(NW.ins >= 0)) {
            if (NW.done && PW.done) return EW ? dW.createSet(mW, EW) : oW.create(mW);
            throw new Error("Mismatched change set lengths")
          } {
            let WW = 0,
              iW = NW.len;
            for (; iW;) {
              if (++LW > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == PW.ins) {
                let OW = Math.min(iW, PW.len);
                WW += OW, iW -= OW, PW.forward(OW)
              } else {
                if (!(0 == PW.ins && PW.len < iW)) break;
                iW -= PW.len, PW.next()
              }
            }
            eW(mW, WW, cW < NW.i ? NW.ins : 0), EW && cW < NW.i && vW(EW, mW, NW.text), cW = NW.i, NW.forward(NW.len - iW)
          }
        }
      }
    }

    function VW(WW, iW) {
      let OW = [],
        mW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        EW = new pW(WW),
        NW = new pW(iW),
        PW = 0;
      for (let LW = !1;;) {
        if (++PW > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (EW.done && NW.done) return mW ? dW.createSet(OW, mW) : oW.create(OW);
        if (0 == EW.ins) eW(OW, EW.len, 0, LW), EW.next();
        else if (0 != NW.len || NW.done) {
          if (EW.done || NW.done) throw new Error("Mismatched change set lengths");
          {
            let WW = Math.min(EW.len2, NW.len),
              iW = OW.length;
            if (-1 == EW.ins) {
              let iW = -1 == NW.ins ? -1 : NW.off ? 0 : NW.ins;
              eW(OW, WW, iW, LW), mW && iW && vW(mW, OW, NW.text)
            } else - 1 == NW.ins ? (eW(OW, EW.off ? 0 : EW.len, WW, LW), mW && vW(mW, OW, EW.textBit(WW))) : (eW(OW, EW.off ? 0 : EW.len, NW.off ? 0 : NW.ins, LW), mW && !NW.off && vW(mW, OW, NW.text));
            LW = (EW.ins > WW || NW.ins >= 0 && NW.len > WW) && (LW || OW.length > iW), EW.forward2(WW), NW.forward(WW)
          }
        } else eW(OW, 0, NW.ins, LW), mW && vW(mW, OW, NW.text), NW.next()
      }
    }
    class pW {
      constructor(WW) {
        this.set = WW, this.i = 0, this.next()
      }
      next() {
        let {
          sections: WW
        } = this.set;
        this.i < WW.length ? (this.len = WW[this.i++], this.ins = WW[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: WW
        } = this.set, iW = this.i - 2 >> 1;
        return iW >= WW.length ? bW.empty : WW[iW]
      }
      textBit(WW) {
        let {
          inserted: iW
        } = this.set, OW = this.i - 2 >> 1;
        return OW >= iW.length && !WW ? bW.empty : iW[OW].slice(this.off, null == WW ? void 0 : this.off + WW)
      }
      forward(WW) {
        WW == this.len ? this.next() : (this.len -= WW, this.off += WW)
      }
      forward2(WW) {
        -1 == this.ins ? this.forward(WW) : WW == this.ins ? this.next() : (this.ins -= WW, this.off += WW)
      }
    }
    class fW {
      constructor(WW, iW, OW) {
        this.from = WW, this.to = iW, this.flags = OW
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
        let WW = 7 & this.flags;
        return 7 == WW ? null : WW
      }
      get goalColumn() {
        let WW = this.flags >> 6;
        return 16777215 == WW ? void 0 : WW
      }
      map(WW) {
        let iW, OW, mW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? iW = OW = WW.mapPos(this.from, mW) : (iW = WW.mapPos(this.from, 1), OW = WW.mapPos(this.to, -1)), iW == this.from && OW == this.to ? this : new fW(iW, OW, this.flags)
      }
      extend(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (WW <= this.anchor && iW >= this.anchor) return CW.range(WW, iW, void 0, void 0, OW);
        let mW = Math.abs(WW - this.anchor) > Math.abs(iW - this.anchor) ? WW : iW;
        return CW.range(this.anchor, mW, void 0, void 0, OW)
      }
      eq(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == WW.anchor && this.head == WW.head && this.goalColumn == WW.goalColumn && (!iW || !this.empty || this.assoc == WW.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(WW) {
        if (!WW || "number" != typeof WW.anchor || "number" != typeof WW.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return CW.range(WW.anchor, WW.head)
      }
      static create(WW, iW, OW) {
        return new fW(WW, iW, OW)
      }
    }
    class CW {
      constructor(WW, iW) {
        this.kj = WW, this.mainIndex = iW
      }
      map(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return WW.empty ? this : CW.create(this.kj.map((OW => OW.map(WW, iW))), this.mainIndex)
      }
      eq(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.kj.length != WW.kj.length || this.mainIndex != WW.mainIndex) return !1;
        for (let OW = 0; OW < this.kj.length; OW++)
          if (!this.kj[OW].eq(WW.kj[OW], iW)) return !1;
        return !0
      }
      get main() {
        return this.kj[this.mainIndex]
      }
      asSingle() {
        return 1 == this.kj.length ? this : new CW([this.main], 0)
      }
      addRange(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return CW.create([WW].concat(this.kj), iW ? 0 : this.mainIndex + 1)
      }
      replaceRange(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          OW = this.kj.slice();
        return OW[iW] = WW, CW.create(OW, this.mainIndex)
      }
      toJSON() {
        return {
          kj: this.kj.map((WW => WW.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(WW) {
        if (!WW || !Array.isArray(WW.kj) || "number" != typeof WW.main || WW.main >= WW.kj.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new CW(WW.kj.map((WW => fW.fromJSON(WW))), WW.main)
      }
      static single(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        return new CW([CW.range(WW, iW)], 0)
      }
      static create(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == WW.length) throw new RangeError("A selection needs at least one range");
        for (let OW = 0, mW = 0; mW < WW.length; mW++) {
          let EW = WW[mW];
          if (EW.empty ? EW.from <= OW : EW.from < OW) return CW.normalized(WW.slice(), iW);
          OW = EW.to
        }
        return new CW(WW, iW)
      }
      static cursor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        return fW.create(WW, WW, (0 == iW ? 0 : iW < 0 ? 8 : 16) | (null == OW ? 7 : Math.min(6, OW)) | (null !== mW && void 0 !== mW ? mW : 16777215) << 6)
      }
      static range(WW, iW, OW, mW, EW) {
        let NW = (null !== OW && void 0 !== OW ? OW : 16777215) << 6 | (null == mW ? 7 : Math.min(6, mW));
        return EW || WW == iW || (EW = iW < WW ? 1 : -1), iW < WW ? fW.create(iW, WW, 48 | NW) : fW.create(WW, iW, (EW ? EW < 0 ? 8 : 16 : 0) | NW)
      }
      static normalized(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = WW[iW];
        WW.sort(((WW, iW) => WW.from - iW.from)), iW = WW.indexOf(OW);
        for (let mW = 1; mW < WW.length; mW++) {
          let OW = WW[mW],
            EW = WW[mW - 1];
          if (OW.empty ? OW.from <= EW.to : OW.from < EW.to) {
            let NW = EW.from,
              PW = Math.max(OW.to, EW.to);
            mW <= iW && iW--, WW.splice(--mW, 2, OW.anchor > OW.head ? CW.range(PW, NW) : CW.range(NW, PW))
          }
        }
        return new CW(WW, iW)
      }
    }

    function XW(WW, iW) {
      for (let OW of WW.kj)
        if (OW.to > iW) throw new RangeError("Selection points outside of document")
    }
    let BW = 0;
    class qW {
      constructor(WW, iW, OW, mW, EW) {
        this.combine = WW, this.compareInput = iW, this.compare = OW, this.isStatic = mW, this.id = BW++, this.default = WW([]), this.extensions = "function" == typeof EW ? EW(this) : EW
      }
      get reader() {
        return this
      }
      static define() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new qW(WW.combine || (WW => WW), WW.compareInput || ((WW, iW) => WW === iW), WW.compare || (WW.combine ? (WW, iW) => WW === iW : RW), !!WW.static, WW.enables)
      }
      of(WW) {
        return new GW([], this, 0, WW)
      }
      compute(WW, iW) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new GW(WW, this, 1, iW)
      }
      computeN(WW, iW) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new GW(WW, this, 2, iW)
      }
      from(WW, iW) {
        return iW || (iW = WW => WW), this.compute([WW], (OW => iW(OW.field(WW))))
      }
    }

    function RW(WW, iW) {
      return WW == iW || WW.length == iW.length && WW.every(((WW, OW) => WW === iW[OW]))
    }
    class GW {
      constructor(WW, iW, OW, mW) {
        this.dependencies = WW, this.facet = iW, this.type = OW, this.value = mW, this.id = BW++
      }
      dynamicSlot(WW) {
        var iW;
        let OW = this.value,
          mW = this.facet.compareInput,
          EW = this.id,
          NW = WW[EW] >> 1,
          PW = 2 == this.type,
          LW = !1,
          cW = !1,
          wW = [];
        for (let tW of this.dependencies) "doc" == tW ? LW = !0 : "selection" == tW ? cW = !0 : 0 == (1 & (null !== (iW = WW[tW.id]) && void 0 !== iW ? iW : 1)) && wW.push(WW[tW.id]);
        return {
          create: WW => (WW.values[NW] = OW(WW), 1),
          update(WW, iW) {
            if (LW && iW.docChanged || cW && (iW.docChanged || iW.selection) || aW(WW, wW)) {
              let iW = OW(WW);
              if (PW ? !IW(iW, WW.values[NW], mW) : !mW(iW, WW.values[NW])) return WW.values[NW] = iW, 1
            }
            return 0
          },
          reconfigure: (WW, iW) => {
            let LW, cW = iW.config.address[EW];
            if (null != cW) {
              let EW = ti(iW, cW);
              if (this.dependencies.every((OW => OW instanceof qW ? iW.facet(OW) === WW.facet(OW) : !(OW instanceof FW) || iW.field(OW, !1) == WW.field(OW, !1))) || (PW ? IW(LW = OW(WW), EW, mW) : mW(LW = OW(WW), EW))) return WW.values[NW] = EW, 0
            } else LW = OW(WW);
            return WW.values[NW] = LW, 1
          }
        }
      }
    }

    function IW(WW, iW, OW) {
      if (WW.length != iW.length) return !1;
      for (let mW = 0; mW < WW.length; mW++)
        if (!OW(WW[mW], iW[mW])) return !1;
      return !0
    }

    function aW(WW, iW) {
      let OW = !1;
      for (let mW of iW) 1 & wi(WW, mW) && (OW = !0);
      return OW
    }

    function rW(WW, iW, OW) {
      let mW = OW.map((iW => WW[iW.id])),
        EW = OW.map((WW => WW.type)),
        NW = mW.filter((WW => !(1 & WW))),
        PW = WW[iW.id] >> 1;

      function LW(WW) {
        let OW = [];
        for (let iW = 0; iW < mW.length; iW++) {
          let NW = ti(WW, mW[iW]);
          if (2 == EW[iW])
            for (let WW of NW) OW.push(WW);
          else OW.push(NW)
        }
        return iW.combine(OW)
      }
      return {
        create(WW) {
          for (let iW of mW) wi(WW, iW);
          return WW.values[PW] = LW(WW), 1
        },
        update(WW, OW) {
          if (!aW(WW, NW)) return 0;
          let mW = LW(WW);
          return iW.compare(mW, WW.values[PW]) ? 0 : (WW.values[PW] = mW, 1)
        },
        reconfigure(WW, EW) {
          let NW = aW(WW, mW),
            cW = EW.config.facets[iW.id],
            wW = EW.facet(iW);
          if (cW && !NW && RW(OW, cW)) return WW.values[PW] = wW, 0;
          let tW = LW(WW);
          return iW.compare(tW, wW) ? (WW.values[PW] = wW, 0) : (WW.values[PW] = tW, 1)
        }
      }
    }
    const zW = qW.define({
      static: !0
    });
    class FW {
      constructor(WW, iW, OW, mW, EW) {
        this.id = WW, this.createF = iW, this.updateF = OW, this.compareF = mW, this.spec = EW, this.provides = void 0
      }
      static define(WW) {
        let iW = new FW(BW++, WW.create, WW.update, WW.compare || ((WW, iW) => WW === iW), WW);
        return WW.provide && (iW.provides = WW.provide(iW)), iW
      }
      create(WW) {
        let iW = WW.facet(zW).find((WW => WW.field == this));
        return ((null === iW || void 0 === iW ? void 0 : iW.create) || this.createF)(WW)
      }
      slot(WW) {
        let iW = WW[this.id] >> 1;
        return {
          create: WW => (WW.values[iW] = this.create(WW), 1),
          update: (WW, OW) => {
            let mW = WW.values[iW],
              EW = this.updateF(mW, OW);
            return this.compareF(mW, EW) ? 0 : (WW.values[iW] = EW, 1)
          },
          reconfigure: (WW, OW) => {
            let mW, EW = WW.facet(zW),
              NW = OW.facet(zW);
            return (mW = EW.find((WW => WW.field == this))) && mW != NW.find((WW => WW.field == this)) ? (WW.values[iW] = mW.create(WW), 1) : null != OW.config.address[this.id] ? (WW.values[iW] = OW.field(this), 0) : (WW.values[iW] = this.create(WW), 1)
          }
        }
      }
      init(WW) {
        return [this, zW.of({
          field: this,
          create: WW
        })]
      }
      get extension() {
        return this
      }
    }
    const QW = 4,
      Wi = 3,
      ii = 2,
      Oi = 1;

    function mi(WW) {
      return iW => new Ni(iW, WW)
    }
    const Ei = {
      highest: mi(0),
      high: mi(Oi),
      default: mi(ii),
      low: mi(Wi),
      lowest: mi(QW)
    };
    class Ni {
      constructor(WW, iW) {
        this.inner = WW, this.prec = iW
      }
    }
    class Pi {
      of(WW) {
        return new Li(this, WW)
      }
      reconfigure(WW) {
        return Pi.reconfigure.of({
          compartment: this,
          extension: WW
        })
      }
      get(WW) {
        return WW.config.compartments.get(this)
      }
    }
    class Li {
      constructor(WW, iW) {
        this.compartment = WW, this.inner = iW
      }
    }
    class ci {
      constructor(WW, iW, OW, mW, EW, NW) {
        for (this.base = WW, this.compartments = iW, this.dynamicSlots = OW, this.address = mW, this.staticValues = EW, this.facets = NW, this.statusTemplate = []; this.statusTemplate.length < OW.length;) this.statusTemplate.push(0)
      }
      staticFacet(WW) {
        let iW = this.address[WW.id];
        return null == iW ? WW.default : this.staticValues[iW >> 1]
      }
      static resolve(WW, iW, OW) {
        let mW = [],
          EW = Object.create(null),
          NW = new Map;
        for (let ZW of function(WW, iW, OW) {
            let mW = [
                [],
                [],
                [],
                [],
                []
              ],
              EW = new Map;

            function NW(WW, PW) {
              let LW = EW.get(WW);
              if (null != LW) {
                if (LW <= PW) return;
                let iW = mW[LW].indexOf(WW);
                iW > -1 && mW[LW].splice(iW, 1), WW instanceof Li && OW.delete(WW.compartment)
              }
              if (EW.set(WW, PW), Array.isArray(WW))
                for (let iW of WW) NW(iW, PW);
              else if (WW instanceof Li) {
                if (OW.has(WW.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let mW = iW.get(WW.compartment) || WW.inner;
                OW.set(WW.compartment, mW), NW(mW, PW)
              } else if (WW instanceof Ni) NW(WW.inner, WW.prec);
              else if (WW instanceof FW) mW[PW].push(WW), WW.provides && NW(WW.provides, PW);
              else if (WW instanceof GW) mW[PW].push(WW), WW.facet.extensions && NW(WW.facet.extensions, ii);
              else {
                let iW = WW.extension;
                if (!iW) throw new Error(`Unrecognized extension value in extension set (${WW}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                NW(iW, PW)
              }
            }
            return NW(WW, ii), mW.reduce(((WW, iW) => WW.concat(iW)))
          }(WW, iW, NW)) ZW instanceof FW ? mW.push(ZW) : (EW[ZW.facet.id] || (EW[ZW.facet.id] = [])).push(ZW);
        let PW = Object.create(null),
          LW = [],
          cW = [];
        for (let ZW of mW) PW[ZW.id] = cW.length << 1, cW.push((WW => ZW.slot(WW)));
        let wW = null === OW || void 0 === OW ? void 0 : OW.config.facets;
        for (let ZW in EW) {
          let WW = EW[ZW],
            iW = WW[0].facet,
            mW = wW && wW[ZW] || [];
          if (WW.every((WW => 0 == WW.type)))
            if (PW[iW.id] = LW.length << 1 | 1, RW(mW, WW)) LW.push(OW.facet(iW));
            else {
              let mW = iW.combine(WW.map((WW => WW.value)));
              LW.push(OW && iW.compare(mW, OW.facet(iW)) ? OW.facet(iW) : mW)
            }
          else {
            for (let iW of WW) 0 == iW.type ? (PW[iW.id] = LW.length << 1 | 1, LW.push(iW.value)) : (PW[iW.id] = cW.length << 1, cW.push((WW => iW.dynamicSlot(WW))));
            PW[iW.id] = cW.length << 1, cW.push((OW => rW(OW, iW, WW)))
          }
        }
        let tW = cW.map((WW => WW(PW)));
        return new ci(WW, NW, tW, PW, LW, EW)
      }
    }

    function wi(WW, iW) {
      if (1 & iW) return 2;
      let OW = iW >> 1,
        mW = WW.status[OW];
      if (4 == mW) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & mW) return mW;
      WW.status[OW] = 4;
      let EW = WW.computeSlot(WW, WW.config.dynamicSlots[OW]);
      return WW.status[OW] = 2 | EW
    }

    function ti(WW, iW) {
      return 1 & iW ? WW.config.staticValues[iW >> 1] : WW.values[iW >> 1]
    }
    const Zi = qW.define(),
      xi = qW.define({
        combine: WW => WW.some((WW => WW)),
        static: !0
      }),
      li = qW.define({
        combine: WW => WW.length ? WW[0] : void 0,
        static: !0
      }),
      Ai = qW.define(),
      bi = qW.define(),
      ji = qW.define(),
      Ui = qW.define({
        combine: WW => !!WW.length && WW[0]
      });
    class ki {
      constructor(WW, iW) {
        this.type = WW, this.value = iW
      }
      static define() {
        return new si
      }
    }
    class si {
      of(WW) {
        return new ki(this, WW)
      }
    }
    class Mi {
      constructor(WW) {
        this.map = WW
      }
      of(WW) {
        return new Ki(this, WW)
      }
    }
    class Ki {
      constructor(WW, iW) {
        this.type = WW, this.value = iW
      }
      map(WW) {
        let iW = this.type.map(this.value, WW);
        return void 0 === iW ? void 0 : iW == this.value ? this : new Ki(this.type, iW)
      }
      is(WW) {
        return this.type == WW
      }
      static define() {
        return new Mi((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (WW => WW))
      }
      static mapEffects(WW, iW) {
        if (!WW.length) return WW;
        let OW = [];
        for (let mW of WW) {
          let WW = mW.map(iW);
          WW && OW.push(WW)
        }
        return OW
      }
    }
    Ki.reconfigure = Ki.define(), Ki.appendConfig = Ki.define();
    class Si {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.startState = WW, this.changes = iW, this.selection = OW, this.effects = mW, this.annotations = EW, this.scrollIntoView = NW, this._doc = null, this._state = null, OW && XW(OW, iW.newLength), EW.some((WW => WW.type == Si.time)) || (this.annotations = EW.concat(Si.time.of(Date.now())))
      }
      static create(WW, iW, OW, mW, EW, NW) {
        return new Si(WW, iW, OW, mW, EW, NW)
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
      annotation(WW) {
        for (let iW of this.annotations)
          if (iW.type == WW) return iW.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(WW) {
        let iW = this.annotation(Si.userEvent);
        return !(!iW || !(iW == WW || iW.length > WW.length && iW.slice(0, WW.length) == WW && "." == iW[WW.length]))
      }
    }

    function Yi(WW, iW) {
      let OW = [];
      for (let mW = 0, EW = 0;;) {
        let NW, PW;
        if (mW < WW.length && (EW == iW.length || iW[EW] >= WW[mW])) NW = WW[mW++], PW = WW[mW++];
        else {
          if (!(EW < iW.length)) return OW;
          NW = iW[EW++], PW = iW[EW++]
        }!OW.length || OW[OW.length - 1] < NW ? OW.push(NW, PW) : OW[OW.length - 1] < PW && (OW[OW.length - 1] = PW)
      }
    }

    function yi(WW, iW, OW) {
      var mW;
      let EW, NW, PW;
      return OW ? (EW = iW.changes, NW = dW.empty(iW.changes.length), PW = WW.changes.compose(iW.changes)) : (EW = iW.changes.map(WW.changes), NW = WW.changes.mapDesc(iW.changes, !0), PW = WW.changes.compose(EW)), {
        changes: PW,
        selection: iW.selection ? iW.selection.map(NW) : null === (mW = WW.selection) || void 0 === mW ? void 0 : mW.map(EW),
        effects: Ki.mapEffects(WW.effects, EW).concat(Ki.mapEffects(iW.effects, NW)),
        annotations: WW.annotations.length ? WW.annotations.concat(iW.annotations) : iW.annotations,
        scrollIntoView: WW.scrollIntoView || iW.scrollIntoView
      }
    }

    function Ti(WW, iW, OW) {
      let mW = iW.selection,
        EW = ni(iW.annotations);
      return iW.userEvent && (EW = EW.concat(Si.userEvent.of(iW.userEvent))), {
        changes: iW.changes instanceof dW ? iW.changes : dW.of(iW.changes || [], OW, WW.facet(li)),
        selection: mW && (mW instanceof CW ? mW : CW.single(mW.anchor, mW.head)),
        effects: ni(iW.effects),
        annotations: EW,
        scrollIntoView: !!iW.scrollIntoView
      }
    }

    function Ji(WW, iW, OW) {
      let mW = Ti(WW, iW.length ? iW[0] : {}, WW.doc.length);
      iW.length && !1 === iW[0].filter && (OW = !1);
      for (let NW = 1; NW < iW.length; NW++) {
        !1 === iW[NW].filter && (OW = !1);
        let EW = !!iW[NW].sequential;
        mW = yi(mW, Ti(WW, iW[NW], EW ? mW.changes.newLength : WW.doc.length), EW)
      }
      let EW = Si.create(WW, mW.changes, mW.selection, mW.effects, mW.annotations, mW.scrollIntoView);
      return function(WW) {
        let iW = WW.startState,
          OW = iW.facet(ji),
          mW = WW;
        for (let EW = OW.length - 1; EW >= 0; EW--) {
          let NW = OW[EW](WW);
          NW && Object.keys(NW).length && (mW = yi(mW, Ti(iW, NW, WW.changes.newLength), !0))
        }
        return mW == WW ? WW : Si.create(iW, WW.changes, WW.selection, mW.effects, mW.annotations, mW.scrollIntoView)
      }(OW ? function(WW) {
        let iW = WW.startState,
          OW = !0;
        for (let EW of iW.facet(Ai)) {
          let iW = EW(WW);
          if (!1 === iW) {
            OW = !1;
            break
          }
          Array.isArray(iW) && (OW = !0 === OW ? iW : Yi(OW, iW))
        }
        if (!0 !== OW) {
          let mW, EW;
          if (!1 === OW) EW = WW.changes.invertedDesc, mW = dW.empty(iW.doc.length);
          else {
            let iW = WW.changes.filter(OW);
            mW = iW.changes, EW = iW.filtered.mapDesc(iW.changes).invertedDesc
          }
          WW = Si.create(iW, mW, WW.selection && WW.selection.map(EW), Ki.mapEffects(WW.effects, EW), WW.annotations, WW.scrollIntoView)
        }
        let mW = iW.facet(bi);
        for (let EW = mW.length - 1; EW >= 0; EW--) {
          let OW = mW[EW](WW);
          WW = OW instanceof Si ? OW : Array.isArray(OW) && 1 == OW.length && OW[0] instanceof Si ? OW[0] : Ji(iW, ni(OW), !1)
        }
        return WW
      }(EW) : EW)
    }
    Si.time = ki.define(), Si.userEvent = ki.define(), Si.addToHistory = ki.define(), Si.remote = ki.define();
    const Hi = [];

    function ni(WW) {
      return null == WW ? Hi : Array.isArray(WW) ? WW : [WW]
    }
    var ui = function(WW) {
      return WW[WW.Word = 0] = "Word", WW[WW.Space = 1] = "Space", WW[WW.Other = 2] = "Other", WW
    }(ui || (ui = {}));
    const oi = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let di;
    try {
      di = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (EO) {}

    function ei(WW) {
      return iW => {
        if (!/\S/.test(iW)) return ui.Space;
        if (function(WW) {
            if (di) return di.test(WW);
            for (let iW = 0; iW < WW.length; iW++) {
              let OW = WW[iW];
              if (/\w/.test(OW) || OW > "\x80" && (OW.toUpperCase() != OW.toLowerCase() || oi.test(OW))) return !0
            }
            return !1
          }(iW)) return ui.Word;
        for (let OW = 0; OW < WW.length; OW++)
          if (iW.indexOf(WW[OW]) > -1) return ui.Word;
        return ui.Other
      }
    }
    class vi {
      constructor(WW, iW, OW, mW, EW, NW) {
        this.config = WW, this.doc = iW, this.selection = OW, this.values = mW, this.status = WW.statusTemplate.slice(), this.computeSlot = EW, NW && (NW._state = this);
        for (let PW = 0; PW < this.config.dynamicSlots.length; PW++) wi(this, PW << 1);
        this.computeSlot = null
      }
      field(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          OW = this.config.address[WW.id];
        if (null != OW) return wi(this, OW), ti(this, OW);
        if (iW) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return Ji(this, iW, !0)
      }
      applyTransaction(WW) {
        let iW, OW = this.config,
          {
            base: mW,
            compartments: EW
          } = OW;
        for (let PW of WW.effects) PW.is(Pi.reconfigure) ? (OW && (EW = new Map, OW.compartments.forEach(((WW, iW) => EW.set(iW, WW))), OW = null), EW.set(PW.value.compartment, PW.value.extension)) : PW.is(Ki.reconfigure) ? (OW = null, mW = PW.value) : PW.is(Ki.appendConfig) && (OW = null, mW = ni(mW).concat(PW.value));
        if (OW) iW = WW.startState.values.slice();
        else {
          OW = ci.resolve(mW, EW, this), iW = new vi(OW, this.doc, this.selection, OW.dynamicSlots.map((() => null)), ((WW, iW) => iW.reconfigure(WW, this)), null).values
        }
        let NW = WW.startState.facet(xi) ? WW.newSelection : WW.newSelection.asSingle();
        new vi(OW, WW.newDoc, NW, iW, ((iW, OW) => OW.update(iW, WW)), WW)
      }
      replaceSelection(WW) {
        return "string" == typeof WW && (WW = this.toText(WW)), this.changeByRange((iW => ({
          changes: {
            from: iW.from,
            to: iW.to,
            insert: WW
          },
          range: CW.cursor(iW.from + WW.length)
        })))
      }
      changeByRange(WW) {
        let iW = this.selection,
          OW = WW(iW.kj[0]),
          mW = this.changes(OW.changes),
          EW = [OW.range],
          NW = ni(OW.effects);
        for (let PW = 1; PW < iW.kj.length; PW++) {
          let OW = WW(iW.kj[PW]),
            LW = this.changes(OW.changes),
            cW = LW.map(mW);
          for (let WW = 0; WW < PW; WW++) EW[WW] = EW[WW].map(cW);
          let wW = mW.mapDesc(LW, !0);
          EW.push(OW.range.map(wW)), mW = mW.compose(cW), NW = Ki.mapEffects(NW, cW).concat(Ki.mapEffects(ni(OW.effects), wW))
        }
        return {
          changes: mW,
          selection: CW.create(EW, iW.mainIndex),
          effects: NW
        }
      }
      changes() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return WW instanceof dW ? WW : dW.of(WW, this.doc.length, this.facet(vi.lineSeparator))
      }
      toText(WW) {
        return bW.of(WW.split(this.facet(vi.lineSeparator) || nW))
      }
      sliceDoc() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(WW, iW, this.lineBreak)
      }
      facet(WW) {
        let iW = this.config.address[WW.id];
        return null == iW ? WW.default : (wi(this, iW), ti(this, iW))
      }
      toJSON(WW) {
        let iW = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (WW)
          for (let OW in WW) {
            let mW = WW[OW];
            mW instanceof FW && null != this.config.address[mW.id] && (iW[OW] = mW.spec.toJSON(this.field(WW[OW]), this))
          }
        return iW
      }
      static fromJSON(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          OW = arguments.length > 2 ? arguments[2] : void 0;
        if (!WW || "string" != typeof WW.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let mW = [];
        if (OW)
          for (let EW in OW)
            if (Object.prototype.hasOwnProperty.call(WW, EW)) {
              let iW = OW[EW],
                NW = WW[EW];
              mW.push(iW.init((WW => iW.spec.fromJSON(NW, WW))))
            } return vi.create({
          doc: WW.doc,
          selection: CW.fromJSON(WW.selection),
          extensions: iW.extensions ? mW.concat([iW.extensions]) : mW
        })
      }
      static create() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          iW = ci.resolve(WW.extensions || [], new Map),
          OW = WW.doc instanceof bW ? WW.doc : bW.of((WW.doc || "").split(iW.staticFacet(vi.lineSeparator) || nW)),
          mW = WW.selection ? WW.selection instanceof CW ? WW.selection : CW.single(WW.selection.anchor, WW.selection.head) : CW.single(0);
        return XW(mW, OW.length), iW.staticFacet(xi) || (mW = mW.asSingle()), new vi(iW, OW, mW, iW.dynamicSlots.map((() => null)), ((WW, iW) => iW.create(WW)), null)
      }
      get tabSize() {
        return this.facet(vi.tabSize)
      }
      get lineBreak() {
        return this.facet(vi.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Ui)
      }
      phrase(WW) {
        for (var iW = arguments.length, OW = new Array(iW > 1 ? iW - 1 : 0), mW = 1; mW < iW; mW++) OW[mW - 1] = arguments[mW];
        for (let EW of this.facet(vi.phrases))
          if (Object.prototype.hasOwnProperty.call(EW, WW)) {
            WW = EW[WW];
            break
          } return OW.length && (WW = WW.replace(/\$(\$|\d*)/g, ((WW, iW) => {
          if ("$" == iW) return "$";
          let mW = +(iW || 1);
          return !mW || mW > OW.length ? WW : OW[mW - 1]
        }))), WW
      }
      languageDataAt(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          mW = [];
        for (let EW of this.facet(Zi))
          for (let NW of EW(this, iW, OW)) Object.prototype.hasOwnProperty.call(NW, WW) && mW.push(NW[WW]);
        return mW
      }
      charCategorizer(WW) {
        let iW = this.languageDataAt("wordChars", WW);
        return ei(iW.length ? iW[0] : "")
      }
      wordAt(WW) {
        let {
          text: iW,
          from: OW,
          length: mW
        } = this.doc.lineAt(WW), EW = this.charCategorizer(WW), NW = WW - OW, PW = WW - OW;
        for (; NW > 0;) {
          let WW = TW(iW, NW, !1);
          if (EW(iW.slice(WW, NW)) != ui.Word) break;
          NW = WW
        }
        for (; PW < mW;) {
          let WW = TW(iW, PW);
          if (EW(iW.slice(PW, WW)) != ui.Word) break;
          PW = WW
        }
        return NW == PW ? null : CW.range(NW + OW, PW + OW)
      }
    }

    function gi(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        mW = {};
      for (let EW of WW)
        for (let WW of Object.keys(EW)) {
          let iW = EW[WW],
            NW = mW[WW];
          if (void 0 === NW) mW[WW] = iW;
          else if (NW === iW || void 0 === iW);
          else {
            if (!Object.hasOwnProperty.call(OW, WW)) throw new Error("Config merge conflict for field " + WW);
            mW[WW] = OW[WW](NW, iW)
          }
        }
      for (let EW in iW) void 0 === mW[EW] && (mW[EW] = iW[EW]);
      return mW
    }
    vi.allowMultipleSelections = xi, vi.tabSize = qW.define({
      combine: WW => WW.length ? WW[0] : 4
    }), vi.lineSeparator = li, vi.readOnly = Ui, vi.phrases = qW.define({
      compare(WW, iW) {
        let OW = Object.keys(WW),
          mW = Object.keys(iW);
        return OW.length == mW.length && OW.every((OW => WW[OW] == iW[OW]))
      }
    }), vi.languageData = Zi, vi.changeFilter = Ai, vi.transactionFilter = bi, vi.transactionExtender = ji, Pi.reconfigure = Ki.define();
    class Di {
      eq(WW) {
        return this == WW
      }
      range(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        return fi.create(WW, iW, this)
      }
    }

    function Vi(WW, iW) {
      return WW == iW || WW.constructor == iW.constructor && WW.eq(iW)
    }
    Di.prototype.startSide = Di.prototype.endSide = 0, Di.prototype.point = !1, Di.prototype.mapMode = uW.TrackDel;
    class fi {
      constructor(WW, iW, OW) {
        this.from = WW, this.to = iW, this.value = OW
      }
      static create(WW, iW, OW) {
        return new fi(WW, iW, OW)
      }
    }

    function Ci(WW, iW) {
      return WW.from - iW.from || WW.value.startSide - iW.value.startSide
    }
    class Xi {
      constructor(WW, iW, OW, mW) {
        this.from = WW, this.to = iW, this.value = OW, this.tEW = mW
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          EW = OW ? this.to : this.from;
        for (let NW = mW, PW = EW.length;;) {
          if (NW == PW) return NW;
          let mW = NW + PW >> 1,
            LW = EW[mW] - WW || (OW ? this.value[mW].endSide : this.value[mW].startSide) - iW;
          if (mW == NW) return LW >= 0 ? NW : PW;
          LW >= 0 ? PW = mW : NW = mW + 1
        }
      }
      between(WW, iW, OW, mW) {
        for (let EW = this.findIndex(iW, -1e9, !0), NW = this.findIndex(OW, 1e9, !1, EW); EW < NW; EW++)
          if (!1 === mW(this.from[EW] + WW, this.to[EW] + WW, this.value[EW])) return !1
      }
      map(WW, iW) {
        let OW = [],
          mW = [],
          EW = [],
          NW = -1,
          PW = -1;
        for (let LW = 0; LW < this.value.length; LW++) {
          let cW, wW, tW = this.value[LW],
            ZW = this.from[LW] + WW,
            xW = this.to[LW] + WW;
          if (ZW == xW) {
            let WW = iW.mapPos(ZW, tW.startSide, tW.mapMode);
            if (null == WW) continue;
            if (cW = wW = WW, tW.startSide != tW.endSide && (wW = iW.mapPos(ZW, tW.endSide), wW < cW)) continue
          } else if (cW = iW.mapPos(ZW, tW.startSide), wW = iW.mapPos(xW, tW.endSide), cW > wW || cW == wW && tW.startSide > 0 && tW.endSide <= 0) continue;
          (wW - cW || tW.endSide - tW.startSide) < 0 || (NW < 0 && (NW = cW), tW.point && (PW = Math.max(PW, wW - cW)), OW.push(tW), mW.push(cW - NW), EW.push(wW - NW))
        }
        return {
          mapped: OW.length ? new Xi(mW, EW, OW, PW) : null,
          pos: NW
        }
      }
    }
    class Bi {
      constructor(WW, iW, OW, mW) {
        this.chunkPos = WW, this.chunk = iW, this.nextLayer = OW, this.tEW = mW
      }
      static create(WW, iW, OW, mW) {
        return new Bi(WW, iW, OW, mW)
      }
      get length() {
        let WW = this.chunk.length - 1;
        return WW < 0 ? 0 : Math.max(this.chunkEnd(WW), this.nextLayer.length)
      }
      get size() {
        if (this.sZ) return 0;
        let WW = this.nextLayer.size;
        for (let iW of this.chunk) WW += iW.value.length;
        return WW
      }
      chunkEnd(WW) {
        return this.chunkPos[WW] + this.chunk[WW].length
      }
      update(WW) {
        let {
          add: iW = [],
          sort: OW = !1,
          filterFrom: mW = 0,
          filterTo: EW = this.length
        } = WW, NW = WW.filter;
        if (0 == iW.length && !NW) return this;
        if (OW && (iW = iW.slice().sort(Ci)), this.sZ) return iW.length ? Bi.of(iW) : this;
        let PW = new Gi(this, null, -1).goto(0),
          LW = 0,
          cW = [],
          wW = new qi;
        for (; PW.value || LW < iW.length;)
          if (LW < iW.length && (PW.from - iW[LW].from || PW.startSide - iW[LW].value.startSide) >= 0) {
            let WW = iW[LW++];
            wW.addInner(WW.from, WW.to, WW.value) || cW.push(WW)
          } else 1 == PW.rangeIndex && PW.chunkIndex < this.chunk.length && (LW == iW.length || this.chunkEnd(PW.chunkIndex) < iW[LW].from) && (!NW || mW > this.chunkEnd(PW.chunkIndex) || EW < this.chunkPos[PW.chunkIndex]) && wW.addChunk(this.chunkPos[PW.chunkIndex], this.chunk[PW.chunkIndex]) ? PW.nextChunk() : ((!NW || mW > PW.to || EW < PW.from || NW(PW.from, PW.to, PW.value)) && (wW.addInner(PW.from, PW.to, PW.value) || cW.push(fi.create(PW.from, PW.to, PW.value))), PW.next());
        return wW.finishInner(this.nextLayer.sZ && !cW.length ? Bi.empty : this.nextLayer.update({
          add: cW,
          filter: NW,
          filterFrom: mW,
          filterTo: EW
        }))
      }
      map(WW) {
        if (WW.empty || this.sZ) return this;
        let iW = [],
          OW = [],
          mW = -1;
        for (let NW = 0; NW < this.chunk.length; NW++) {
          let EW = this.chunkPos[NW],
            PW = this.chunk[NW],
            LW = WW.touchesRange(EW, EW + PW.length);
          if (!1 === LW) mW = Math.max(mW, PW.tEW), iW.push(PW), OW.push(WW.mapPos(EW));
          else if (!0 === LW) {
            let {
              mapped: NW,
              pos: LW
            } = PW.map(EW, WW);
            NW && (mW = Math.max(mW, NW.tEW), iW.push(NW), OW.push(LW))
          }
        }
        let EW = this.nextLayer.map(WW);
        return 0 == iW.length ? EW : new Bi(OW, iW, EW || Bi.empty, mW)
      }
      between(WW, iW, OW) {
        if (!this.sZ) {
          for (let mW = 0; mW < this.chunk.length; mW++) {
            let EW = this.chunkPos[mW],
              NW = this.chunk[mW];
            if (iW >= EW && WW <= EW + NW.length && !1 === NW.between(EW, WW - EW, iW - EW, OW)) return
          }
          this.nextLayer.between(WW, iW, OW)
        }
      }
      iter() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Ii.from([this]).goto(WW)
      }
      get sZ() {
        return this.nextLayer == this
      }
      static iter(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ii.from(WW).goto(iW)
      }
      static compare(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          NW = WW.filter((WW => WW.tEW > 0 || !WW.sZ && WW.tEW >= EW)),
          PW = iW.filter((WW => WW.tEW > 0 || !WW.sZ && WW.tEW >= EW)),
          LW = Ri(NW, PW, OW),
          cW = new ri(NW, LW, EW),
          wW = new ri(PW, LW, EW);
        OW.iterGaps(((WW, iW, OW) => zi(cW, WW, wW, iW, OW, mW))), OW.empty && 0 == OW.length && zi(cW, 0, wW, 0, 0, mW)
      }
      static eq(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        null == mW && (mW = 999999999);
        let EW = WW.filter((WW => !WW.sZ && iW.indexOf(WW) < 0)),
          NW = iW.filter((iW => !iW.sZ && WW.indexOf(iW) < 0));
        if (EW.length != NW.length) return !1;
        if (!EW.length) return !0;
        let PW = Ri(EW, NW),
          LW = new ri(EW, PW, 0).goto(OW),
          cW = new ri(NW, PW, 0).goto(OW);
        for (;;) {
          if (LW.to != cW.to || !Fi(LW.active, cW.active) || LW.point && (!cW.point || !Vi(LW.point, cW.point))) return !1;
          if (LW.to > mW) return !0;
          LW.next(), cW.next()
        }
      }
      static spans(WW, iW, OW, mW) {
        let EW = new ri(WW, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(iW),
          NW = iW,
          PW = EW.openStart;
        for (;;) {
          let WW = Math.min(EW.to, OW);
          if (EW.point) {
            let OW = EW.activeForPoint(EW.to),
              LW = EW.pointFrom < iW ? OW.length + 1 : EW.point.startSide < 0 ? OW.length : Math.min(OW.length, PW);
            mW.point(NW, WW, EW.point, OW, LW, EW.pointRank), PW = Math.min(EW.openEnd(WW), OW.length)
          } else WW > NW && (mW.span(NW, WW, EW.active, PW), PW = EW.openEnd(WW));
          if (EW.to > OW) return PW + (EW.point && EW.to > OW ? 1 : 0);
          NW = EW.to, EW.next()
        }
      }
      static of (WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = new qi;
        for (let mW of WW instanceof fi ? [WW] : iW ? function(WW) {
            if (WW.length > 1)
              for (let iW = WW[0], OW = 1; OW < WW.length; OW++) {
                let mW = WW[OW];
                if (Ci(iW, mW) > 0) return WW.slice().sort(Ci);
                iW = mW
              }
            return WW
          }(WW) : WW) OW.add(mW.from, mW.to, mW.value);
        return OW.finish()
      }
      static join(WW) {
        if (!WW.length) return Bi.empty;
        let iW = WW[WW.length - 1];
        for (let OW = WW.length - 2; OW >= 0; OW--)
          for (let mW = WW[OW]; mW != Bi.empty; mW = mW.nextLayer) iW = new Bi(mW.chunkPos, mW.chunk, iW, Math.max(mW.tEW, iW.tEW));
        return iW
      }
    }
    Bi.empty = new Bi([], [], null, -1), Bi.empty.nextLayer = Bi.empty;
    class qi {
      finishChunk(WW) {
        this.chunks.push(new Xi(this.from, this.to, this.value, this.tEW)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.tEW), this.tEW = -1, WW && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.tEW = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(WW, iW, OW) {
        this.addInner(WW, iW, OW) || (this.nextLayer || (this.nextLayer = new qi)).add(WW, iW, OW)
      }
      addInner(WW, iW, OW) {
        let mW = WW - this.lastTo || OW.startSide - this.last.endSide;
        if (mW <= 0 && (WW - this.lastFrom || OW.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(mW < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = WW), this.from.push(WW - this.chunkStart), this.to.push(iW - this.chunkStart), this.last = OW, this.lastFrom = WW, this.lastTo = iW, this.value.push(OW), OW.point && (this.tEW = Math.max(this.tEW, iW - WW)), !0)
      }
      addChunk(WW, iW) {
        if ((WW - this.lastTo || iW.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, iW.tEW), this.chunks.push(iW), this.chunkPos.push(WW);
        let OW = iW.value.length - 1;
        return this.last = iW.value[OW], this.lastFrom = iW.from[OW] + WW, this.lastTo = iW.to[OW] + WW, !0
      }
      finish() {
        return this.finishInner(Bi.empty)
      }
      finishInner(WW) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return WW;
        let iW = Bi.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(WW) : WW, this.setMaxPoint);
        return this.from = null, iW
      }
    }

    function Ri(WW, iW, OW) {
      let mW = new Map;
      for (let NW of WW)
        for (let WW = 0; WW < NW.chunk.length; WW++) NW.chunk[WW].tEW <= 0 && mW.set(NW.chunk[WW], NW.chunkPos[WW]);
      let EW = new Set;
      for (let NW of iW)
        for (let WW = 0; WW < NW.chunk.length; WW++) {
          let iW = mW.get(NW.chunk[WW]);
          null == iW || (OW ? OW.mapPos(iW) : iW) != NW.chunkPos[WW] || (null === OW || void 0 === OW ? void 0 : OW.touchesRange(iW, iW + NW.chunk[WW].length)) || EW.add(NW.chunk[WW])
        }
      return EW
    }
    class Gi {
      constructor(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = WW, this.skip = iW, this.ZEW = OW, this.rank = mW
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(WW, iW, !1), this
      }
      gotoInner(WW, iW, OW) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let iW = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(iW) || this.layer.chunkEnd(this.chunkIndex) < WW || iW.tEW < this.ZEW)) break;
          this.chunkIndex++, OW = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let mW = this.layer.chunk[this.chunkIndex].findIndex(WW - this.layer.chunkPos[this.chunkIndex], iW, !0);
          (!OW || this.rangeIndex < mW) && this.setRangeIndex(mW)
        }
        this.next()
      }
      forward(WW, iW) {
        (this.to - WW || this.endSide - iW) < 0 && this.gotoInner(WW, iW, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let WW = this.layer.chunkPos[this.chunkIndex],
              iW = this.layer.chunk[this.chunkIndex],
              OW = WW + iW.from[this.rangeIndex];
            if (this.from = OW, this.to = WW + iW.to[this.rangeIndex], this.value = iW.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.ZEW < 0 || this.value.point && this.to - this.from >= this.ZEW) break
          }
        }
      }
      setRangeIndex(WW) {
        if (WW == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = WW
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(WW) {
        return this.from - WW.from || this.startSide - WW.startSide || this.rank - WW.rank || this.to - WW.to || this.endSide - WW.endSide
      }
    }
    class Ii {
      constructor(WW) {
        this.heap = WW
      }
      static from(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          mW = [];
        for (let EW = 0; EW < WW.length; EW++)
          for (let NW = WW[EW]; !NW.sZ; NW = NW.nextLayer) NW.tEW >= OW && mW.push(new Gi(NW, iW, OW, EW));
        return 1 == mW.length ? mW[0] : new Ii(mW)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let OW of this.heap) OW.goto(WW, iW);
        for (let OW = this.heap.length >> 1; OW >= 0; OW--) ai(this.heap, OW);
        return this.next(), this
      }
      forward(WW, iW) {
        for (let OW of this.heap) OW.forward(WW, iW);
        for (let OW = this.heap.length >> 1; OW >= 0; OW--) ai(this.heap, OW);
        (this.to - WW || this.value.endSide - iW) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let WW = this.heap[0];
          this.from = WW.from, this.to = WW.to, this.value = WW.value, this.rank = WW.rank, WW.value && WW.next(), ai(this.heap, 0)
        }
      }
    }

    function ai(WW, iW) {
      for (let OW = WW[iW];;) {
        let mW = 1 + (iW << 1);
        if (mW >= WW.length) break;
        let EW = WW[mW];
        if (mW + 1 < WW.length && EW.compare(WW[mW + 1]) >= 0 && (EW = WW[mW + 1], mW++), OW.compare(EW) < 0) break;
        WW[mW] = OW, WW[iW] = EW, iW = mW
      }
    }
    class ri {
      constructor(WW, iW, OW) {
        this.ZEW = OW, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ii.from(WW, iW, OW)
      }
      goto(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(WW, iW), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = WW, this.endSide = iW, this.openStart = -1, this.next(), this
      }
      forward(WW, iW) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - WW || this.active[this.minActive].endSide - iW) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(WW, iW)
      }
      removeActive(WW) {
        Qi(this.active, WW), Qi(this.activeTo, WW), Qi(this.activeRank, WW), this.minActive = iO(this.active, this.activeTo)
      }
      addActive(WW) {
        let iW = 0,
          {
            value: OW,
            to: mW,
            rank: EW
          } = this.cursor;
        for (; iW < this.activeRank.length && (EW - this.activeRank[iW] || mW - this.activeTo[iW]) > 0;) iW++;
        WO(this.active, iW, OW), WO(this.activeTo, iW, mW), WO(this.activeRank, iW, EW), WW && WO(WW, iW, this.cursor.from), this.minActive = iO(this.active, this.activeTo)
      }
      next() {
        let WW = this.to,
          iW = this.point;
        this.point = null;
        let OW = this.openStart < 0 ? [] : null;
        for (;;) {
          let mW = this.minActive;
          if (mW > -1 && (this.activeTo[mW] - this.cursor.from || this.active[mW].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[mW] > WW) {
              this.to = this.activeTo[mW], this.endSide = this.active[mW].endSide;
              break
            }
            this.removeActive(mW), OW && Qi(OW, mW)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > WW) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let WW = this.cursor.value;
              if (WW.point) {
                if (!(iW && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = WW, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = WW.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(OW), this.cursor.next()
            }
          }
        }
        if (OW) {
          this.openStart = 0;
          for (let iW = OW.length - 1; iW >= 0 && OW[iW] < WW; iW--) this.openStart++
        }
      }
      activeForPoint(WW) {
        if (!this.active.length) return this.active;
        let iW = [];
        for (let OW = this.active.length - 1; OW >= 0 && !(this.activeRank[OW] < this.pointRank); OW--)(this.activeTo[OW] > WW || this.activeTo[OW] == WW && this.active[OW].endSide >= this.point.endSide) && iW.push(this.active[OW]);
        return iW.reverse()
      }
      openEnd(WW) {
        let iW = 0;
        for (let OW = this.activeTo.length - 1; OW >= 0 && this.activeTo[OW] > WW; OW--) iW++;
        return iW
      }
    }

    function zi(WW, iW, OW, mW, EW, NW) {
      WW.goto(iW), OW.goto(mW);
      let PW = mW + EW,
        LW = mW,
        cW = mW - iW,
        wW = !!NW.boundChange;
      for (let tW = !1;;) {
        let iW = WW.to + cW - OW.to,
          mW = iW || WW.endSide - OW.endSide,
          EW = mW < 0 ? WW.to + cW : OW.to,
          ZW = Math.min(EW, PW);
        if (WW.point || OW.point ? (WW.point && OW.point && Vi(WW.point, OW.point) && Fi(WW.activeForPoint(WW.to), OW.activeForPoint(OW.to)) || NW.comparePoint(LW, ZW, WW.point, OW.point), tW = !1) : (tW && NW.boundChange(LW), ZW > LW && !Fi(WW.active, OW.active) && NW.compareRange(LW, ZW, WW.active, OW.active), wW && ZW < PW && (iW || WW.openEnd(EW) != OW.openEnd(EW)) && (tW = !0)), EW > PW) break;
        LW = EW, mW <= 0 && WW.next(), mW >= 0 && OW.next()
      }
    }

    function Fi(WW, iW) {
      if (WW.length != iW.length) return !1;
      for (let OW = 0; OW < WW.length; OW++)
        if (WW[OW] != iW[OW] && !Vi(WW[OW], iW[OW])) return !1;
      return !0
    }

    function Qi(WW, iW) {
      for (let OW = iW, mW = WW.length - 1; OW < mW; OW++) WW[OW] = WW[OW + 1];
      WW.pop()
    }

    function WO(WW, iW, OW) {
      for (let mW = WW.length - 1; mW >= iW; mW--) WW[mW + 1] = WW[mW];
      WW[iW] = OW
    }

    function iO(WW, iW) {
      let OW = -1,
        mW = 1e9;
      for (let EW = 0; EW < iW.length; EW++)(iW[EW] - mW || WW[EW].endSide - WW[OW].endSide) < 0 && (OW = EW, mW = iW[EW]);
      return OW
    }

    function OO(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.length,
        mW = 0;
      for (let EW = 0; EW < OW && EW < WW.length;) 9 == WW.charCodeAt(EW) ? (mW += iW - mW % iW, EW++) : (mW++, EW = TW(WW, EW));
      return mW
    }

    function mO(WW, iW, OW, mW) {
      for (let EW = 0, NW = 0;;) {
        if (NW >= iW) return EW;
        if (EW == WW.length) break;
        NW += 9 == WW.charCodeAt(EW) ? OW - NW % OW : 1, EW = TW(WW, EW)
      }
      return !0 === mW ? -1 : WW.length
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);