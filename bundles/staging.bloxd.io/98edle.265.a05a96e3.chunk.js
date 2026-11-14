export const id = 265;
export const ids = [265];
export const modules = {
  38778: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => PR,
      f: () => sW,
      ChangeSet: () => dW,
      g: () => kM,
      j: () => vR,
      l: () => pR,
      m: () => OW,
      n: () => aR,
      p: () => CR,
      s: () => vM,
      q: () => KR,
      w: () => UR,
      A: () => lR,
      C: () => ZW,
      D: () => iR,
      G: () => FR,
      J: () => cR,
      L: () => jR,
      O: () => hR,
      P: () => WM,
      S: () => rR,
      U: () => RM,
      X: () => XW
    });
    let wW = [],
      CW = [];

    function zR(WW) {
      if (WW < 768) return !1;
      for (let RW = 0, MW = wW.length;;) {
        let zR = RW + MW >> 1;
        if (WW < wW[zR]) MW = zR;
        else {
          if (!(WW >= CW[zR])) return !0;
          RW = zR + 1
        }
        if (RW == MW) return !1
      }
    }

    function AW(WW) {
      return WW >= 127462 && WW <= 127487
    }(() => {
      let WW = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((WW => WW ? parseInt(WW, 36) : 1));
      for (let RW = 0, MW = 0; RW < WW.length; RW++)(RW % 2 ? CW : wW).push(MW += WW[RW])
    })();
    const bR = 8205;

    function yR(WW, RW) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? NW : eW)(WW, RW, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function NW(WW, RW, MW) {
      if (RW == WW.length) return RW;
      RW && tR(WW.charCodeAt(RW)) && TW(WW.charCodeAt(RW - 1)) && RW--;
      let wW = BW(WW, RW);
      for (RW += gR(wW); RW < WW.length;) {
        let CW = BW(WW, RW);
        if (wW == bR || CW == bR || MW && zR(CW)) RW += gR(CW), wW = CW;
        else {
          if (!AW(CW)) break;
          {
            let MW = 0,
              wW = RW - 2;
            for (; wW >= 0 && AW(BW(WW, wW));) MW++, wW -= 2;
            if (MW % 2 == 0) break;
            RW += 2
          }
        }
      }
      return RW
    }

    function eW(WW, RW, MW) {
      for (; RW > 0;) {
        let wW = NW(WW, RW - 2, MW);
        if (wW < RW) return wW;
        RW--
      }
      return 0
    }

    function BW(WW, RW) {
      let MW = WW.charCodeAt(RW);
      if (!TW(MW) || RW + 1 == WW.length) return MW;
      let wW = WW.charCodeAt(RW + 1);
      return tR(wW) ? wW - 56320 + (MW - 55296 << 10) + 65536 : MW
    }

    function tR(WW) {
      return WW >= 56320 && WW < 57344
    }

    function TW(WW) {
      return WW >= 55296 && WW < 56320
    }

    function gR(WW) {
      return WW < 65536 ? 1 : 2
    }
    class iR {
      lineAt(WW) {
        if (WW < 0 || WW > this.length) throw new RangeError(`Invalid position ${WW} in document of length ${this.length}`);
        return this.lineInner(WW, !1, 1, 0)
      }
      line(WW) {
        if (WW < 1 || WW > this.lines) throw new RangeError(`Invalid line number ${WW} in ${this.lines}-line document`);
        return this.lineInner(WW, !0, 1, 0)
      }
      replace(WW, RW, MW) {
        [WW, RW] = QW(this, WW, RW);
        let wW = [];
        return this.decompose(0, WW, wW, 2), MW.length && MW.decompose(0, MW.length, wW, 3), this.decompose(RW, this.length, wW, 1), JW.from(wW, this.length - (RW - WW) + MW.length)
      }
      append(WW) {
        return this.replace(this.length, this.length, WW)
      }
      slice(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [WW, RW] = QW(this, WW, RW);
        let MW = [];
        return this.decompose(WW, RW, MW, 0), JW.from(MW, RW - WW)
      }
      eq(WW) {
        if (WW == this) return !0;
        if (WW.length != this.length || WW.lines != this.lines) return !1;
        let RW = this.scanIdentical(WW, 1),
          MW = this.length - this.scanIdentical(WW, -1),
          wW = new oW(this),
          CW = new oW(WW);
        for (let zR = RW, AW = RW;;) {
          if (wW.next(zR), CW.next(zR), zR = 0, wW.lineBreak != CW.lineBreak || wW.done != CW.done || wW.value != CW.value) return !1;
          if (AW += wW.value.length, wW.done || AW >= MW) return !0
        }
      }
      iter() {
        return new oW(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new lW(this, WW, RW)
      }
      iterLines(WW, RW) {
        let MW;
        if (null == WW) MW = this.iter();
        else {
          null == RW && (RW = this.lines + 1);
          let wW = this.line(WW).from;
          MW = this.iterRange(wW, Math.max(wW, RW == this.lines + 1 ? this.length : RW <= 1 ? 0 : this.line(RW - 1).to))
        }
        return new FW(MW)
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
        return 1 != WW.length || WW[0] ? WW.length <= 32 ? new YW(WW) : JW.from(YW.split(WW, [])) : iR.empty
      }
    }
    class YW extends iR {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(WW) {
          let RW = -1;
          for (let MW of WW) RW += MW.length + 1;
          return RW
        }(WW);
        super(), this.text = WW, this.length = RW
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(WW, RW, MW, wW) {
        for (let CW = 0;; CW++) {
          let zR = this.text[CW],
            AW = wW + zR.length;
          if ((RW ? MW : AW) >= WW) return new fW(wW, AW, MW, zR);
          wW = AW + 1, MW++
        }
      }
      decompose(WW, RW, MW, wW) {
        let CW = WW <= 0 && RW >= this.length ? this : new YW(IW(this.text, WW, RW), Math.min(RW, this.length) - Math.max(0, WW));
        if (1 & wW) {
          let WW = MW.pop(),
            RW = PW(CW.text, WW.text.slice(), 0, CW.length);
          if (RW.length <= 32) MW.push(new YW(RW, WW.length + CW.length));
          else {
            let WW = RW.length >> 1;
            MW.push(new YW(RW.slice(0, WW)), new YW(RW.slice(WW)))
          }
        } else MW.push(CW)
      }
      replace(WW, RW, MW) {
        if (!(MW instanceof YW)) return super.replace(WW, RW, MW);
        [WW, RW] = QW(this, WW, RW);
        let wW = PW(this.text, PW(MW.text, IW(this.text, 0, WW)), RW),
          CW = this.length + MW.length - (RW - WW);
        return wW.length <= 32 ? new YW(wW, CW) : JW.from(YW.split(wW, []), CW)
      }
      sliceString(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [WW, RW] = QW(this, WW, RW);
        let wW = "";
        for (let CW = 0, zR = 0; CW <= RW && zR < this.text.length; zR++) {
          let AW = this.text[zR],
            bR = CW + AW.length;
          CW > WW && zR && (wW += MW), WW < bR && RW > CW && (wW += AW.slice(Math.max(0, WW - CW), RW - CW)), CW = bR + 1
        }
        return wW
      }
      flatten(WW) {
        for (let RW of this.text) WW.push(RW)
      }
      scanIdentical() {
        return 0
      }
      static split(WW, RW) {
        let MW = [],
          wW = -1;
        for (let CW of WW) MW.push(CW), wW += CW.length + 1, 32 == MW.length && (RW.push(new YW(MW, wW)), MW = [], wW = -1);
        return wW > -1 && RW.push(new YW(MW, wW)), RW
      }
    }
    class JW extends iR {
      constructor(WW, RW) {
        super(), this.children = WW, this.length = RW, this.lines = 0;
        for (let MW of WW) this.lines += MW.lines
      }
      lineInner(WW, RW, MW, wW) {
        for (let CW = 0;; CW++) {
          let zR = this.children[CW],
            AW = wW + zR.length,
            bR = MW + zR.lines - 1;
          if ((RW ? bR : AW) >= WW) return zR.lineInner(WW, RW, MW, wW);
          wW = AW + 1, MW = bR + 1
        }
      }
      decompose(WW, RW, MW, wW) {
        for (let CW = 0, zR = 0; zR <= RW && CW < this.children.length; CW++) {
          let AW = this.children[CW],
            bR = zR + AW.length;
          if (WW <= bR && RW >= zR) {
            let CW = wW & ((zR <= WW ? 1 : 0) | (bR >= RW ? 2 : 0));
            zR >= WW && bR <= RW && !CW ? MW.push(AW) : AW.decompose(WW - zR, RW - zR, MW, CW)
          }
          zR = bR + 1
        }
      }
      replace(WW, RW, MW) {
        if ([WW, RW] = QW(this, WW, RW), MW.lines < this.lines)
          for (let wW = 0, CW = 0; wW < this.children.length; wW++) {
            let zR = this.children[wW],
              AW = CW + zR.length;
            if (WW >= CW && RW <= AW) {
              let bR = zR.replace(WW - CW, RW - CW, MW),
                yR = this.lines - zR.lines + bR.lines;
              if (bR.lines < yR >> 4 && bR.lines > yR >> 6) {
                let CW = this.children.slice();
                return CW[wW] = bR, new JW(CW, this.length - (RW - WW) + MW.length)
              }
              return super.replace(CW, AW, bR)
            }
            CW = AW + 1
          }
        return super.replace(WW, RW, MW)
      }
      sliceString(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [WW, RW] = QW(this, WW, RW);
        let wW = "";
        for (let CW = 0, zR = 0; CW < this.children.length && zR <= RW; CW++) {
          let AW = this.children[CW],
            bR = zR + AW.length;
          zR > WW && CW && (wW += MW), WW < bR && RW > zR && (wW += AW.sliceString(WW - zR, RW - zR, MW)), zR = bR + 1
        }
        return wW
      }
      flatten(WW) {
        for (let RW of this.children) RW.flatten(WW)
      }
      scanIdentical(WW, RW) {
        if (!(WW instanceof JW)) return 0;
        let MW = 0,
          [wW, CW, zR, AW] = RW > 0 ? [0, 0, this.children.length, WW.children.length] : [this.children.length - 1, WW.children.length - 1, -1, -1];
        for (;; wW += RW, CW += RW) {
          if (wW == zR || CW == AW) return MW;
          let bR = this.children[wW],
            yR = WW.children[CW];
          if (bR != yR) return MW + bR.scanIdentical(yR, RW);
          MW += bR.length + 1
        }
      }
      static from(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW.reduce(((WW, RW) => WW + RW.length + 1), -1),
          MW = 0;
        for (let tR of WW) MW += tR.lines;
        if (MW < 32) {
          let MW = [];
          for (let RW of WW) RW.flatten(MW);
          return new YW(MW, RW)
        }
        let wW = Math.max(32, MW >> 5),
          CW = wW << 1,
          zR = wW >> 1,
          AW = [],
          bR = 0,
          yR = -1,
          NW = [];

        function eW(WW) {
          let RW;
          if (WW.lines > CW && WW instanceof JW)
            for (let MW of WW.children) eW(MW);
          else WW.lines > zR && (bR > zR || !bR) ? (BW(), AW.push(WW)) : WW instanceof YW && bR && (RW = NW[NW.length - 1]) instanceof YW && WW.lines + RW.lines <= 32 ? (bR += WW.lines, yR += WW.length + 1, NW[NW.length - 1] = new YW(RW.text.concat(WW.text), RW.length + 1 + WW.length)) : (bR + WW.lines > wW && BW(), bR += WW.lines, yR += WW.length + 1, NW.push(WW))
        }

        function BW() {
          0 != bR && (AW.push(1 == NW.length ? NW[0] : JW.from(NW, yR)), yR = -1, bR = NW.length = 0)
        }
        for (let tR of WW) eW(tR);
        return BW(), 1 == AW.length ? AW[0] : new JW(AW, RW)
      }
    }

    function PW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let CW = 0, zR = 0, AW = !0; zR < WW.length && CW <= wW; zR++) {
        let bR = WW[zR],
          yR = CW + bR.length;
        yR >= MW && (yR > wW && (bR = bR.slice(0, wW - CW)), CW < MW && (bR = bR.slice(MW - CW)), AW ? (RW[RW.length - 1] += bR, AW = !1) : RW.push(bR)), CW = yR + 1
      }
      return RW
    }

    function IW(WW, RW, MW) {
      return PW(WW, [""], RW, MW)
    }
    iR.empty = new YW([""], 0);
    class oW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = RW, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [WW], this.offsets = [RW > 0 ? 1 : (WW instanceof YW ? WW.text.length : WW.children.length) << 1]
      }
      nextInner(WW, RW) {
        for (this.done = this.lineBreak = !1;;) {
          let MW = this.nodes.length - 1,
            wW = this.nodes[MW],
            CW = this.offsets[MW],
            zR = CW >> 1,
            AW = wW instanceof YW ? wW.text.length : wW.children.length;
          if (zR == (RW > 0 ? AW : 0)) {
            if (0 == MW) return this.done = !0, this.value = "", this;
            RW > 0 && this.offsets[MW - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & CW) == (RW > 0 ? 0 : 1)) {
            if (this.offsets[MW] += RW, 0 == WW) return this.lineBreak = !0, this.value = "\n", this;
            WW--
          } else if (wW instanceof YW) {
            let CW = wW.text[zR + (RW < 0 ? -1 : 0)];
            if (this.offsets[MW] += RW, CW.length > Math.max(0, WW)) return this.value = 0 == WW ? CW : RW > 0 ? CW.slice(WW) : CW.slice(0, CW.length - WW), this;
            WW -= CW.length
          } else {
            let CW = wW.children[zR + (RW < 0 ? -1 : 0)];
            WW > CW.length ? (WW -= CW.length, this.offsets[MW] += RW) : (RW < 0 && this.offsets[MW]--, this.nodes.push(CW), this.offsets.push(RW > 0 ? 1 : (CW instanceof YW ? CW.text.length : CW.children.length) << 1))
          }
        }
      }
      next() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return WW < 0 && (this.nextInner(-WW, -this.dir), WW = this.value.length), this.nextInner(WW, this.dir)
      }
    }
    class lW {
      constructor(WW, RW, MW) {
        this.value = "", this.done = !1, this.cursor = new oW(WW, RW > MW ? -1 : 1), this.pos = RW > MW ? WW.length : 0, this.from = Math.min(RW, MW), this.to = Math.max(RW, MW)
      }
      nextInner(WW, RW) {
        if (RW < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        WW += Math.max(0, RW < 0 ? this.pos - this.to : this.from - this.pos);
        let MW = RW < 0 ? this.pos - this.from : this.to - this.pos;
        WW > MW && (WW = MW), MW -= WW;
        let {
          value: wW
        } = this.cursor.next(WW);
        return this.pos += (wW.length + WW) * RW, this.value = wW.length <= MW ? wW : RW < 0 ? wW.slice(wW.length - MW) : wW.slice(0, MW), this.done = !this.value, this
      }
      next() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return WW < 0 ? WW = Math.max(WW, this.from - this.pos) : WW > 0 && (WW = Math.min(WW, this.to - this.pos)), this.nextInner(WW, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class FW {
      constructor(WW) {
        this.inner = WW, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: RW,
            lineBreak: MW,
            value: wW
          } = this.inner.next(WW);
        return RW && this.afterBreak ? (this.value = "", this.afterBreak = !1) : RW ? (this.done = !0, this.value = "") : MW ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = wW, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (iR.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, oW.prototype[Symbol.iterator] = lW.prototype[Symbol.iterator] = FW.prototype[Symbol.iterator] = function() {
      return this
    });
    class fW {
      constructor(WW, RW, MW, wW) {
        this.from = WW, this.to = RW, this.number = MW, this.text = wW
      }
      get length() {
        return this.to - this.from
      }
    }

    function QW(WW, RW, MW) {
      return [RW = Math.max(0, Math.min(WW.length, RW)), Math.max(RW, Math.min(WW.length, MW))]
    }

    function rR(WW, RW) {
      return yR(WW, RW, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function cR(WW, RW) {
      let MW = WW.charCodeAt(RW);
      if (!((wW = MW) >= 55296 && wW < 56320) || RW + 1 == WW.length) return MW;
      var wW;
      let CW = WW.charCodeAt(RW + 1);
      return function(WW) {
        return WW >= 56320 && WW < 57344
      }(CW) ? CW - 56320 + (MW - 55296 << 10) + 65536 : MW
    }

    function XW(WW) {
      return WW <= 65535 ? String.fromCharCode(WW) : (WW -= 65536, String.fromCharCode(55296 + (WW >> 10), 56320 + (1023 & WW)))
    }

    function jR(WW) {
      return WW < 65536 ? 1 : 2
    }
    const kR = /\r\n?|\n/;
    var aR = function(WW) {
      return WW[WW.Simple = 0] = "Simple", WW[WW.TrackDel = 1] = "TrackDel", WW[WW.TrackBefore = 2] = "TrackBefore", WW[WW.TrackAfter = 3] = "TrackAfter", WW
    }(aR || (aR = {}));
    class sW {
      constructor(WW) {
        this.sections = WW
      }
      get length() {
        let WW = 0;
        for (let RW = 0; RW < this.sections.length; RW += 2) WW += this.sections[RW];
        return WW
      }
      get newLength() {
        let WW = 0;
        for (let RW = 0; RW < this.sections.length; RW += 2) {
          let MW = this.sections[RW + 1];
          WW += MW < 0 ? this.sections[RW] : MW
        }
        return WW
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(WW) {
        for (let RW = 0, MW = 0, wW = 0; RW < this.sections.length;) {
          let CW = this.sections[RW++],
            zR = this.sections[RW++];
          zR < 0 ? (WW(MW, wW, CW), wW += CW) : wW += zR, MW += CW
        }
      }
      iterChangedRanges(WW) {
        UW(this, WW, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let WW = [];
        for (let RW = 0; RW < this.sections.length;) {
          let MW = this.sections[RW++],
            wW = this.sections[RW++];
          wW < 0 ? WW.push(MW, wW) : WW.push(wW, MW)
        }
        return new sW(WW)
      }
      composeDesc(WW) {
        return this.empty ? WW : WW.empty ? this : VW(this, WW)
      }
      mapDesc(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return WW.empty ? this : EW(this, WW, RW)
      }
      mapPos(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aR.Simple,
          wW = 0,
          CW = 0;
        for (let zR = 0; zR < this.sections.length;) {
          let AW = this.sections[zR++],
            bR = this.sections[zR++],
            yR = wW + AW;
          if (bR < 0) {
            if (yR > WW) return CW + (WW - wW);
            CW += AW
          } else {
            if (MW != aR.Simple && yR >= WW && (MW == aR.TrackDel && wW < WW && yR > WW || MW == aR.TrackBefore && wW < WW || MW == aR.TrackAfter && yR > WW)) return null;
            if (yR > WW || yR == WW && RW < 0 && !AW) return WW == wW || RW < 0 ? CW : CW + bR;
            CW += bR
          }
          wW = yR
        }
        if (WW > wW) throw new RangeError(`Position ${WW} is out of range for changeset of length ${wW}`);
        return CW
      }
      touchesRange(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        for (let MW = 0, wW = 0; MW < this.sections.length && wW <= RW;) {
          let CW = wW + this.sections[MW++];
          if (this.sections[MW++] >= 0 && wW <= RW && CW >= WW) return !(wW < WW && CW > RW) || "cover";
          wW = CW
        }
        return !1
      }
      toString() {
        let WW = "";
        for (let RW = 0; RW < this.sections.length;) {
          let MW = this.sections[RW++],
            wW = this.sections[RW++];
          WW += (WW ? " " : "") + MW + (wW >= 0 ? ":" + wW : "")
        }
        return WW
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(WW) {
        if (!Array.isArray(WW) || WW.length % 2 || WW.some((WW => "number" != typeof WW))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new sW(WW)
      }
      static create(WW) {
        return new sW(WW)
      }
    }
    class dW extends sW {
      constructor(WW, RW) {
        super(WW), this.inserted = RW
      }
      apply(WW) {
        if (this.length != WW.length) throw new RangeError("Applying change set to a document with the wrong length");
        return UW(this, ((RW, MW, wW, CW, zR) => WW = WW.replace(wW, wW + (MW - RW), zR)), !1), WW
      }
      mapDesc(WW) {
        return EW(this, WW, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(WW) {
        let RW = this.sections.slice(),
          MW = [];
        for (let wW = 0, CW = 0; wW < RW.length; wW += 2) {
          let zR = RW[wW],
            AW = RW[wW + 1];
          if (AW >= 0) {
            RW[wW] = AW, RW[wW + 1] = zR;
            let bR = wW >> 1;
            for (; MW.length < bR;) MW.push(iR.empty);
            MW.push(zR ? WW.slice(CW, CW + zR) : iR.empty)
          }
          CW += zR
        }
        return new dW(RW, MW)
      }
      compose(WW) {
        return this.empty ? WW : WW.empty ? this : VW(this, WW, !0)
      }
      map(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return WW.empty ? this : EW(this, WW, RW, !0)
      }
      iterChanges(WW) {
        UW(this, WW, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return sW.create(this.sections)
      }
      filter(WW) {
        let RW = [],
          MW = [],
          wW = [],
          CW = new mR(this);
        WW: for (let zR = 0, AW = 0;;) {
          let bR = zR == WW.length ? 1e9 : WW[zR++];
          for (; AW < bR || AW == bR && 0 == CW.len;) {
            if (CW.done) break WW;
            let WW = Math.min(CW.len, bR - AW);
            pW(wW, WW, -1);
            let zR = -1 == CW.ins ? -1 : 0 == CW.off ? CW.ins : 0;
            pW(RW, WW, zR), zR > 0 && hW(MW, RW, CW.text), CW.forward(WW), AW += WW
          }
          let yR = WW[zR++];
          for (; AW < yR;) {
            if (CW.done) break WW;
            let WW = Math.min(CW.len, yR - AW);
            pW(RW, WW, -1), pW(wW, WW, -1 == CW.ins ? -1 : 0 == CW.off ? CW.ins : 0), CW.forward(WW), AW += WW
          }
        }
        return {
          changes: new dW(RW, MW),
          filtered: sW.create(wW)
        }
      }
      toJSON() {
        let WW = [];
        for (let RW = 0; RW < this.sections.length; RW += 2) {
          let MW = this.sections[RW],
            wW = this.sections[RW + 1];
          wW < 0 ? WW.push(MW) : 0 == wW ? WW.push([MW]) : WW.push([MW].concat(this.inserted[RW >> 1].toJSON()))
        }
        return WW
      }
      static of (WW, RW, MW) {
        let wW = [],
          CW = [],
          zR = 0,
          AW = null;

        function bR() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !wW.length) return;
          zR < RW && pW(wW, RW - zR, -1);
          let WW = new dW(wW, CW);
          AW = AW ? AW.compose(WW.map(AW)) : WW, wW = [], CW = [], zR = 0
        }
        return function WW(yR) {
          if (Array.isArray(yR))
            for (let RW of yR) WW(RW);
          else if (yR instanceof dW) {
            if (yR.length != RW) throw new RangeError(`Mismatched change set length (got ${yR.length}, expected ${RW})`);
            bR(), AW = AW ? AW.compose(yR.map(AW)) : yR
          } else {
            let {
              from: WW,
              to: AW = WW,
              insert: NW
            } = yR;
            if (WW > AW || WW < 0 || AW > RW) throw new RangeError(`Invalid change range ${WW} to ${AW} (in doc of length ${RW})`);
            let eW = NW ? "string" == typeof NW ? iR.of(NW.split(MW || kR)) : NW : iR.empty,
              BW = eW.length;
            if (WW == AW && 0 == BW) return;
            WW < zR && bR(), WW > zR && pW(wW, WW - zR, -1), pW(wW, AW - WW, BW), hW(CW, wW, eW), zR = AW
          }
        }(WW), bR(!AW), AW
      }
      static empty(WW) {
        return new dW(WW ? [WW, -1] : [], [])
      }
      static fromJSON(WW) {
        if (!Array.isArray(WW)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let RW = [],
          MW = [];
        for (let wW = 0; wW < WW.length; wW++) {
          let CW = WW[wW];
          if ("number" == typeof CW) RW.push(CW, -1);
          else {
            if (!Array.isArray(CW) || "number" != typeof CW[0] || CW.some(((WW, RW) => RW && "string" != typeof WW))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == CW.length) RW.push(CW[0], 0);
            else {
              for (; MW.length < wW;) MW.push(iR.empty);
              MW[wW] = iR.of(CW.slice(1)), RW.push(CW[0], MW[wW].length)
            }
          }
        }
        return new dW(RW, MW)
      }
      static createSet(WW, RW) {
        return new dW(WW, RW)
      }
    }

    function pW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == RW && MW <= 0) return;
      let CW = WW.length - 2;
      CW >= 0 && MW <= 0 && MW == WW[CW + 1] ? WW[CW] += RW : CW >= 0 && 0 == RW && 0 == WW[CW] ? WW[CW + 1] += MW : wW ? (WW[CW] += RW, WW[CW + 1] += MW) : WW.push(RW, MW)
    }

    function hW(WW, RW, MW) {
      if (0 == MW.length) return;
      let wW = RW.length - 2 >> 1;
      if (wW < WW.length) WW[WW.length - 1] = WW[WW.length - 1].append(MW);
      else {
        for (; WW.length < wW;) WW.push(iR.empty);
        WW.push(MW)
      }
    }

    function UW(WW, RW, MW) {
      let wW = WW.inserted;
      for (let CW = 0, zR = 0, AW = 0; AW < WW.sections.length;) {
        let bR = WW.sections[AW++],
          yR = WW.sections[AW++];
        if (yR < 0) CW += bR, zR += bR;
        else {
          let NW = CW,
            eW = zR,
            BW = iR.empty;
          for (; NW += bR, eW += yR, yR && wW && (BW = BW.append(wW[AW - 2 >> 1])), !(MW || AW == WW.sections.length || WW.sections[AW + 1] < 0);) bR = WW.sections[AW++], yR = WW.sections[AW++];
          RW(CW, NW, zR, eW, BW), CW = NW, zR = eW
        }
      }
    }

    function EW(WW, RW, MW) {
      let wW = [],
        CW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        zR = new mR(WW),
        AW = new mR(RW),
        bR = 0;
      for (let yR = -1;;) {
        if (++bR > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (zR.done && AW.len || AW.done && zR.len) throw new Error("Mismatched change set lengths");
        if (-1 == zR.ins && -1 == AW.ins) {
          let WW = Math.min(zR.len, AW.len);
          pW(wW, WW, -1), zR.forward(WW), AW.forward(WW)
        } else if (AW.ins >= 0 && (zR.ins < 0 || yR == zR.i || 0 == zR.off && (AW.len < zR.len || AW.len == zR.len && !MW))) {
          let WW = AW.len;
          for (pW(wW, AW.ins, -1); WW;) {
            if (++bR > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let RW = Math.min(zR.len, WW);
            zR.ins >= 0 && yR < zR.i && zR.len <= RW && (pW(wW, 0, zR.ins), CW && hW(CW, wW, zR.text), yR = zR.i), zR.forward(RW), WW -= RW
          }
          AW.next()
        } else {
          if (!(zR.ins >= 0)) {
            if (zR.done && AW.done) return CW ? dW.createSet(wW, CW) : sW.create(wW);
            throw new Error("Mismatched change set lengths")
          } {
            let WW = 0,
              RW = zR.len;
            for (; RW;) {
              if (++bR > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == AW.ins) {
                let MW = Math.min(RW, AW.len);
                WW += MW, RW -= MW, AW.forward(MW)
              } else {
                if (!(0 == AW.ins && AW.len < RW)) break;
                RW -= AW.len, AW.next()
              }
            }
            pW(wW, WW, yR < zR.i ? zR.ins : 0), CW && yR < zR.i && hW(CW, wW, zR.text), yR = zR.i, zR.forward(zR.len - RW)
          }
        }
      }
    }

    function VW(WW, RW) {
      let MW = [],
        wW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        CW = new mR(WW),
        zR = new mR(RW),
        AW = 0;
      for (let bR = !1;;) {
        if (++AW > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (CW.done && zR.done) return wW ? dW.createSet(MW, wW) : sW.create(MW);
        if (0 == CW.ins) pW(MW, CW.len, 0, bR), CW.next();
        else if (0 != zR.len || zR.done) {
          if (CW.done || zR.done) throw new Error("Mismatched change set lengths");
          {
            let WW = Math.min(CW.len2, zR.len),
              RW = MW.length;
            if (-1 == CW.ins) {
              let RW = -1 == zR.ins ? -1 : zR.off ? 0 : zR.ins;
              pW(MW, WW, RW, bR), wW && RW && hW(wW, MW, zR.text)
            } else - 1 == zR.ins ? (pW(MW, CW.off ? 0 : CW.len, WW, bR), wW && hW(wW, MW, CW.textBit(WW))) : (pW(MW, CW.off ? 0 : CW.len, zR.off ? 0 : zR.ins, bR), wW && !zR.off && hW(wW, MW, zR.text));
            bR = (CW.ins > WW || zR.ins >= 0 && zR.len > WW) && (bR || MW.length > RW), CW.forward2(WW), zR.forward(WW)
          }
        } else pW(MW, 0, zR.ins, bR), wW && hW(wW, MW, zR.text), zR.next()
      }
    }
    class mR {
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
        } = this.set, RW = this.i - 2 >> 1;
        return RW >= WW.length ? iR.empty : WW[RW]
      }
      textBit(WW) {
        let {
          inserted: RW
        } = this.set, MW = this.i - 2 >> 1;
        return MW >= RW.length && !WW ? iR.empty : RW[MW].slice(this.off, null == WW ? void 0 : this.off + WW)
      }
      forward(WW) {
        WW == this.len ? this.next() : (this.len -= WW, this.off += WW)
      }
      forward2(WW) {
        -1 == this.ins ? this.forward(WW) : WW == this.ins ? this.next() : (this.ins -= WW, this.off += WW)
      }
    }
    class xR {
      constructor(WW, RW, MW) {
        this.from = WW, this.to = RW, this.flags = MW
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
        let RW, MW, wW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? RW = MW = WW.mapPos(this.from, wW) : (RW = WW.mapPos(this.from, 1), MW = WW.mapPos(this.to, -1)), RW == this.from && MW == this.to ? this : new xR(RW, MW, this.flags)
      }
      extend(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (WW <= this.anchor && RW >= this.anchor) return vR.range(WW, RW, void 0, void 0, MW);
        let wW = Math.abs(WW - this.anchor) > Math.abs(RW - this.anchor) ? WW : RW;
        return vR.range(this.anchor, wW, void 0, void 0, MW)
      }
      eq(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == WW.anchor && this.head == WW.head && this.goalColumn == WW.goalColumn && (!RW || !this.empty || this.assoc == WW.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(WW) {
        if (!WW || "number" != typeof WW.anchor || "number" != typeof WW.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return vR.range(WW.anchor, WW.head)
      }
      static create(WW, RW, MW) {
        return new xR(WW, RW, MW)
      }
    }
    class vR {
      constructor(WW, RW) {
        this.WA = WW, this.mainIndex = RW
      }
      map(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return WW.empty ? this : vR.create(this.WA.map((MW => MW.map(WW, RW))), this.mainIndex)
      }
      eq(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.WA.length != WW.WA.length || this.mainIndex != WW.mainIndex) return !1;
        for (let MW = 0; MW < this.WA.length; MW++)
          if (!this.WA[MW].eq(WW.WA[MW], RW)) return !1;
        return !0
      }
      get main() {
        return this.WA[this.mainIndex]
      }
      asSingle() {
        return 1 == this.WA.length ? this : new vR([this.main], 0)
      }
      addRange(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return vR.create([WW].concat(this.WA), RW ? 0 : this.mainIndex + 1)
      }
      replaceRange(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          MW = this.WA.slice();
        return MW[RW] = WW, vR.create(MW, this.mainIndex)
      }
      toJSON() {
        return {
          WA: this.WA.map((WW => WW.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(WW) {
        if (!WW || !Array.isArray(WW.WA) || "number" != typeof WW.main || WW.main >= WW.WA.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new vR(WW.WA.map((WW => xR.fromJSON(WW))), WW.main)
      }
      static single(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        return new vR([vR.range(WW, RW)], 0)
      }
      static create(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == WW.length) throw new RangeError("A selection needs at least one range");
        for (let MW = 0, wW = 0; wW < WW.length; wW++) {
          let CW = WW[wW];
          if (CW.empty ? CW.from <= MW : CW.from < MW) return vR.normalized(WW.slice(), RW);
          MW = CW.to
        }
        return new vR(WW, RW)
      }
      static cursor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        return xR.create(WW, WW, (0 == RW ? 0 : RW < 0 ? 8 : 16) | (null == MW ? 7 : Math.min(6, MW)) | (null !== wW && void 0 !== wW ? wW : 16777215) << 6)
      }
      static range(WW, RW, MW, wW, CW) {
        let zR = (null !== MW && void 0 !== MW ? MW : 16777215) << 6 | (null == wW ? 7 : Math.min(6, wW));
        return CW || WW == RW || (CW = RW < WW ? 1 : -1), RW < WW ? xR.create(RW, WW, 48 | zR) : xR.create(WW, RW, (CW ? CW < 0 ? 8 : 16 : 0) | zR)
      }
      static normalized(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = WW[RW];
        WW.sort(((WW, RW) => WW.from - RW.from)), RW = WW.indexOf(MW);
        for (let wW = 1; wW < WW.length; wW++) {
          let MW = WW[wW],
            CW = WW[wW - 1];
          if (MW.empty ? MW.from <= CW.to : MW.from < CW.to) {
            let zR = CW.from,
              AW = Math.max(MW.to, CW.to);
            wW <= RW && RW--, WW.splice(--wW, 2, MW.anchor > MW.head ? vR.range(AW, zR) : vR.range(zR, AW))
          }
        }
        return new vR(WW, RW)
      }
    }

    function KW(WW, RW) {
      for (let MW of WW.WA)
        if (MW.to > RW) throw new RangeError("Selection points outside of document")
    }
    let uW = 0;
    class OW {
      constructor(WW, RW, MW, wW, CW) {
        this.combine = WW, this.compareInput = RW, this.compare = MW, this.isStatic = wW, this.id = uW++, this.default = WW([]), this.extensions = "function" == typeof CW ? CW(this) : CW
      }
      get reader() {
        return this
      }
      static define() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new OW(WW.combine || (WW => WW), WW.compareInput || ((WW, RW) => WW === RW), WW.compare || (WW.combine ? (WW, RW) => WW === RW : nW), !!WW.static, WW.enables)
      }
      of(WW) {
        return new GW([], this, 0, WW)
      }
      compute(WW, RW) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new GW(WW, this, 1, RW)
      }
      computeN(WW, RW) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new GW(WW, this, 2, RW)
      }
      from(WW, RW) {
        return RW || (RW = WW => WW), this.compute([WW], (MW => RW(MW.field(WW))))
      }
    }

    function nW(WW, RW) {
      return WW == RW || WW.length == RW.length && WW.every(((WW, MW) => WW === RW[MW]))
    }
    class GW {
      constructor(WW, RW, MW, wW) {
        this.dependencies = WW, this.facet = RW, this.type = MW, this.value = wW, this.id = uW++
      }
      dynamicSlot(WW) {
        var RW;
        let MW = this.value,
          wW = this.facet.compareInput,
          CW = this.id,
          zR = WW[CW] >> 1,
          AW = 2 == this.type,
          bR = !1,
          yR = !1,
          NW = [];
        for (let eW of this.dependencies) "doc" == eW ? bR = !0 : "selection" == eW ? yR = !0 : 0 == (1 & (null !== (RW = WW[eW.id]) && void 0 !== RW ? RW : 1)) && NW.push(WW[eW.id]);
        return {
          create: WW => (WW.values[zR] = MW(WW), 1),
          update(WW, RW) {
            if (bR && RW.docChanged || yR && (RW.docChanged || RW.selection) || HW(WW, NW)) {
              let RW = MW(WW);
              if (AW ? !LW(RW, WW.values[zR], wW) : !wW(RW, WW.values[zR])) return WW.values[zR] = RW, 1
            }
            return 0
          },
          reconfigure: (WW, RW) => {
            let bR, yR = RW.config.address[CW];
            if (null != yR) {
              let CW = eR(RW, yR);
              if (this.dependencies.every((MW => MW instanceof OW ? RW.facet(MW) === WW.facet(MW) : !(MW instanceof ZW) || RW.field(MW, !1) == WW.field(MW, !1))) || (AW ? LW(bR = MW(WW), CW, wW) : wW(bR = MW(WW), CW))) return WW.values[zR] = CW, 0
            } else bR = MW(WW);
            return WW.values[zR] = bR, 1
          }
        }
      }
    }

    function LW(WW, RW, MW) {
      if (WW.length != RW.length) return !1;
      for (let wW = 0; wW < WW.length; wW++)
        if (!MW(WW[wW], RW[wW])) return !1;
      return !0
    }

    function HW(WW, RW) {
      let MW = !1;
      for (let wW of RW) 1 & NR(WW, wW) && (MW = !0);
      return MW
    }

    function DW(WW, RW, MW) {
      let wW = MW.map((RW => WW[RW.id])),
        CW = MW.map((WW => WW.type)),
        zR = wW.filter((WW => !(1 & WW))),
        AW = WW[RW.id] >> 1;

      function bR(WW) {
        let MW = [];
        for (let RW = 0; RW < wW.length; RW++) {
          let zR = eR(WW, wW[RW]);
          if (2 == CW[RW])
            for (let WW of zR) MW.push(WW);
          else MW.push(zR)
        }
        return RW.combine(MW)
      }
      return {
        create(WW) {
          for (let RW of wW) NR(WW, RW);
          return WW.values[AW] = bR(WW), 1
        },
        update(WW, MW) {
          if (!HW(WW, zR)) return 0;
          let wW = bR(WW);
          return RW.compare(wW, WW.values[AW]) ? 0 : (WW.values[AW] = wW, 1)
        },
        reconfigure(WW, CW) {
          let zR = HW(WW, wW),
            yR = CW.config.facets[RW.id],
            NW = CW.facet(RW);
          if (yR && !zR && nW(MW, yR)) return WW.values[AW] = NW, 0;
          let eW = bR(WW);
          return RW.compare(eW, NW) ? (WW.values[AW] = NW, 0) : (WW.values[AW] = eW, 1)
        }
      }
    }
    const qR = OW.define({
      static: !0
    });
    class ZW {
      constructor(WW, RW, MW, wW, CW) {
        this.id = WW, this.createF = RW, this.updateF = MW, this.compareF = wW, this.spec = CW, this.provides = void 0
      }
      static define(WW) {
        let RW = new ZW(uW++, WW.create, WW.update, WW.compare || ((WW, RW) => WW === RW), WW);
        return WW.provide && (RW.provides = WW.provide(RW)), RW
      }
      create(WW) {
        let RW = WW.facet(qR).find((WW => WW.field == this));
        return ((null === RW || void 0 === RW ? void 0 : RW.create) || this.createF)(WW)
      }
      slot(WW) {
        let RW = WW[this.id] >> 1;
        return {
          create: WW => (WW.values[RW] = this.create(WW), 1),
          update: (WW, MW) => {
            let wW = WW.values[RW],
              CW = this.updateF(wW, MW);
            return this.compareF(wW, CW) ? 0 : (WW.values[RW] = CW, 1)
          },
          reconfigure: (WW, MW) => {
            let wW, CW = WW.facet(qR),
              zR = MW.facet(qR);
            return (wW = CW.find((WW => WW.field == this))) && wW != zR.find((WW => WW.field == this)) ? (WW.values[RW] = wW.create(WW), 1) : null != MW.config.address[this.id] ? (WW.values[RW] = MW.field(this), 0) : (WW.values[RW] = this.create(WW), 1)
          }
        }
      }
      init(WW) {
        return [this, qR.of({
          field: this,
          create: WW
        })]
      }
      get extension() {
        return this
      }
    }
    const SW = 4,
      WR = 3,
      RR = 2,
      MR = 1;

    function wR(WW) {
      return RW => new zM(RW, WW)
    }
    const CR = {
      highest: wR(0),
      high: wR(MR),
      default: wR(RR),
      low: wR(WR),
      lowest: wR(SW)
    };
    class zM {
      constructor(WW, RW) {
        this.inner = WW, this.prec = RW
      }
    }
    class AR {
      of(WW) {
        return new bM(this, WW)
      }
      reconfigure(WW) {
        return AR.reconfigure.of({
          compartment: this,
          extension: WW
        })
      }
      get(WW) {
        return WW.config.compartments.get(this)
      }
    }
    class bM {
      constructor(WW, RW) {
        this.compartment = WW, this.inner = RW
      }
    }
    class yM {
      constructor(WW, RW, MW, wW, CW, zR) {
        for (this.base = WW, this.compartments = RW, this.dynamicSlots = MW, this.address = wW, this.staticValues = CW, this.facets = zR, this.statusTemplate = []; this.statusTemplate.length < MW.length;) this.statusTemplate.push(0)
      }
      staticFacet(WW) {
        let RW = this.address[WW.id];
        return null == RW ? WW.default : this.staticValues[RW >> 1]
      }
      static resolve(WW, RW, MW) {
        let wW = [],
          CW = Object.create(null),
          zR = new Map;
        for (let BW of function(WW, RW, MW) {
            let wW = [
                [],
                [],
                [],
                [],
                []
              ],
              CW = new Map;

            function zR(WW, AW) {
              let bR = CW.get(WW);
              if (null != bR) {
                if (bR <= AW) return;
                let RW = wW[bR].indexOf(WW);
                RW > -1 && wW[bR].splice(RW, 1), WW instanceof bM && MW.delete(WW.compartment)
              }
              if (CW.set(WW, AW), Array.isArray(WW))
                for (let RW of WW) zR(RW, AW);
              else if (WW instanceof bM) {
                if (MW.has(WW.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let wW = RW.get(WW.compartment) || WW.inner;
                MW.set(WW.compartment, wW), zR(wW, AW)
              } else if (WW instanceof zM) zR(WW.inner, WW.prec);
              else if (WW instanceof ZW) wW[AW].push(WW), WW.provides && zR(WW.provides, AW);
              else if (WW instanceof GW) wW[AW].push(WW), WW.facet.extensions && zR(WW.facet.extensions, RR);
              else {
                let RW = WW.extension;
                if (!RW) throw new Error(`Unrecognized extension value in extension set (${WW}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                zR(RW, AW)
              }
            }
            return zR(WW, RR), wW.reduce(((WW, RW) => WW.concat(RW)))
          }(WW, RW, zR)) BW instanceof ZW ? wW.push(BW) : (CW[BW.facet.id] || (CW[BW.facet.id] = [])).push(BW);
        let AW = Object.create(null),
          bR = [],
          yR = [];
        for (let BW of wW) AW[BW.id] = yR.length << 1, yR.push((WW => BW.slot(WW)));
        let NW = null === MW || void 0 === MW ? void 0 : MW.config.facets;
        for (let BW in CW) {
          let WW = CW[BW],
            RW = WW[0].facet,
            wW = NW && NW[BW] || [];
          if (WW.every((WW => 0 == WW.type)))
            if (AW[RW.id] = bR.length << 1 | 1, nW(wW, WW)) bR.push(MW.facet(RW));
            else {
              let wW = RW.combine(WW.map((WW => WW.value)));
              bR.push(MW && RW.compare(wW, MW.facet(RW)) ? MW.facet(RW) : wW)
            }
          else {
            for (let RW of WW) 0 == RW.type ? (AW[RW.id] = bR.length << 1 | 1, bR.push(RW.value)) : (AW[RW.id] = yR.length << 1, yR.push((WW => RW.dynamicSlot(WW))));
            AW[RW.id] = yR.length << 1, yR.push((MW => DW(MW, RW, WW)))
          }
        }
        let eW = yR.map((WW => WW(AW)));
        return new yM(WW, zR, eW, AW, bR, CW)
      }
    }

    function NR(WW, RW) {
      if (1 & RW) return 2;
      let MW = RW >> 1,
        wW = WW.status[MW];
      if (4 == wW) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & wW) return wW;
      WW.status[MW] = 4;
      let CW = WW.computeSlot(WW, WW.config.dynamicSlots[MW]);
      return WW.status[MW] = 2 | CW
    }

    function eR(WW, RW) {
      return 1 & RW ? WW.config.staticValues[RW >> 1] : WW.values[RW >> 1]
    }
    const BR = OW.define(),
      tM = OW.define({
        combine: WW => WW.some((WW => WW)),
        static: !0
      }),
      TR = OW.define({
        combine: WW => WW.length ? WW[0] : void 0,
        static: !0
      }),
      gM = OW.define(),
      iM = OW.define(),
      YR = OW.define(),
      JR = OW.define({
        combine: WW => !!WW.length && WW[0]
      });
    class PR {
      constructor(WW, RW) {
        this.type = WW, this.value = RW
      }
      static define() {
        return new IR
      }
    }
    class IR {
      of(WW) {
        return new PR(this, WW)
      }
    }
    class oR {
      constructor(WW) {
        this.map = WW
      }
      of(WW) {
        return new lR(this, WW)
      }
    }
    class lR {
      constructor(WW, RW) {
        this.type = WW, this.value = RW
      }
      map(WW) {
        let RW = this.type.map(this.value, WW);
        return void 0 === RW ? void 0 : RW == this.value ? this : new lR(this.type, RW)
      }
      is(WW) {
        return this.type == WW
      }
      static define() {
        return new oR((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (WW => WW))
      }
      static mapEffects(WW, RW) {
        if (!WW.length) return WW;
        let MW = [];
        for (let wW of WW) {
          let WW = wW.map(RW);
          WW && MW.push(WW)
        }
        return MW
      }
    }
    lR.reconfigure = lR.define(), lR.appendConfig = lR.define();
    class FR {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.startState = WW, this.changes = RW, this.selection = MW, this.effects = wW, this.annotations = CW, this.scrollIntoView = zR, this._doc = null, this._state = null, MW && KW(MW, RW.newLength), CW.some((WW => WW.type == FR.time)) || (this.annotations = CW.concat(FR.time.of(Date.now())))
      }
      static create(WW, RW, MW, wW, CW, zR) {
        return new FR(WW, RW, MW, wW, CW, zR)
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
        for (let RW of this.annotations)
          if (RW.type == WW) return RW.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(WW) {
        let RW = this.annotation(FR.userEvent);
        return !(!RW || !(RW == WW || RW.length > WW.length && RW.slice(0, WW.length) == WW && "." == RW[WW.length]))
      }
    }

    function fR(WW, RW) {
      let MW = [];
      for (let wW = 0, CW = 0;;) {
        let zR, AW;
        if (wW < WW.length && (CW == RW.length || RW[CW] >= WW[wW])) zR = WW[wW++], AW = WW[wW++];
        else {
          if (!(CW < RW.length)) return MW;
          zR = RW[CW++], AW = RW[CW++]
        }!MW.length || MW[MW.length - 1] < zR ? MW.push(zR, AW) : MW[MW.length - 1] < AW && (MW[MW.length - 1] = AW)
      }
    }

    function QR(WW, RW, MW) {
      var wW;
      let CW, zR, AW;
      return MW ? (CW = RW.changes, zR = dW.empty(RW.changes.length), AW = WW.changes.compose(RW.changes)) : (CW = RW.changes.map(WW.changes), zR = WW.changes.mapDesc(RW.changes, !0), AW = WW.changes.compose(CW)), {
        changes: AW,
        selection: RW.selection ? RW.selection.map(zR) : null === (wW = WW.selection) || void 0 === wW ? void 0 : wW.map(CW),
        effects: lR.mapEffects(WW.effects, CW).concat(lR.mapEffects(RW.effects, zR)),
        annotations: WW.annotations.length ? WW.annotations.concat(RW.annotations) : RW.annotations,
        scrollIntoView: WW.scrollIntoView || RW.scrollIntoView
      }
    }

    function rM(WW, RW, MW) {
      let wW = RW.selection,
        CW = jM(RW.annotations);
      return RW.userEvent && (CW = CW.concat(FR.userEvent.of(RW.userEvent))), {
        changes: RW.changes instanceof dW ? RW.changes : dW.of(RW.changes || [], MW, WW.facet(TR)),
        selection: wW && (wW instanceof vR ? wW : vR.single(wW.anchor, wW.head)),
        effects: jM(RW.effects),
        annotations: CW,
        scrollIntoView: !!RW.scrollIntoView
      }
    }

    function cM(WW, RW, MW) {
      let wW = rM(WW, RW.length ? RW[0] : {}, WW.doc.length);
      RW.length && !1 === RW[0].filter && (MW = !1);
      for (let zR = 1; zR < RW.length; zR++) {
        !1 === RW[zR].filter && (MW = !1);
        let CW = !!RW[zR].sequential;
        wW = QR(wW, rM(WW, RW[zR], CW ? wW.changes.newLength : WW.doc.length), CW)
      }
      let CW = FR.create(WW, wW.changes, wW.selection, wW.effects, wW.annotations, wW.scrollIntoView);
      return function(WW) {
        let RW = WW.startState,
          MW = RW.facet(YR),
          wW = WW;
        for (let CW = MW.length - 1; CW >= 0; CW--) {
          let zR = MW[CW](WW);
          zR && Object.keys(zR).length && (wW = QR(wW, rM(RW, zR, WW.changes.newLength), !0))
        }
        return wW == WW ? WW : FR.create(RW, WW.changes, WW.selection, wW.effects, wW.annotations, wW.scrollIntoView)
      }(MW ? function(WW) {
        let RW = WW.startState,
          MW = !0;
        for (let CW of RW.facet(gM)) {
          let RW = CW(WW);
          if (!1 === RW) {
            MW = !1;
            break
          }
          Array.isArray(RW) && (MW = !0 === MW ? RW : fR(MW, RW))
        }
        if (!0 !== MW) {
          let wW, CW;
          if (!1 === MW) CW = WW.changes.invertedDesc, wW = dW.empty(RW.doc.length);
          else {
            let RW = WW.changes.filter(MW);
            wW = RW.changes, CW = RW.filtered.mapDesc(RW.changes).invertedDesc
          }
          WW = FR.create(RW, wW, WW.selection && WW.selection.map(CW), lR.mapEffects(WW.effects, CW), WW.annotations, WW.scrollIntoView)
        }
        let wW = RW.facet(iM);
        for (let CW = wW.length - 1; CW >= 0; CW--) {
          let MW = wW[CW](WW);
          WW = MW instanceof FR ? MW : Array.isArray(MW) && 1 == MW.length && MW[0] instanceof FR ? MW[0] : cM(RW, jM(MW), !1)
        }
        return WW
      }(CW) : CW)
    }
    FR.time = PR.define(), FR.userEvent = PR.define(), FR.addToHistory = PR.define(), FR.remote = PR.define();
    const XR = [];

    function jM(WW) {
      return null == WW ? XR : Array.isArray(WW) ? WW : [WW]
    }
    var kM = function(WW) {
      return WW[WW.Word = 0] = "Word", WW[WW.Space = 1] = "Space", WW[WW.Other = 2] = "Other", WW
    }(kM || (kM = {}));
    const aM = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let sR;
    try {
      sR = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (MM) {}

    function dR(WW) {
      return RW => {
        if (!/\S/.test(RW)) return kM.Space;
        if (function(WW) {
            if (sR) return sR.test(WW);
            for (let RW = 0; RW < WW.length; RW++) {
              let MW = WW[RW];
              if (/\w/.test(MW) || MW > "\x80" && (MW.toUpperCase() != MW.toLowerCase() || aM.test(MW))) return !0
            }
            return !1
          }(RW)) return kM.Word;
        for (let MW = 0; MW < WW.length; MW++)
          if (RW.indexOf(WW[MW]) > -1) return kM.Word;
        return kM.Other
      }
    }
    class pR {
      constructor(WW, RW, MW, wW, CW, zR) {
        this.config = WW, this.doc = RW, this.selection = MW, this.values = wW, this.status = WW.statusTemplate.slice(), this.computeSlot = CW, zR && (zR._state = this);
        for (let AW = 0; AW < this.config.dynamicSlots.length; AW++) NR(this, AW << 1);
        this.computeSlot = null
      }
      field(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          MW = this.config.address[WW.id];
        if (null != MW) return NR(this, MW), eR(this, MW);
        if (RW) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        return cM(this, RW, !0)
      }
      applyTransaction(WW) {
        let RW, MW = this.config,
          {
            base: wW,
            compartments: CW
          } = MW;
        for (let AW of WW.effects) AW.is(AR.reconfigure) ? (MW && (CW = new Map, MW.compartments.forEach(((WW, RW) => CW.set(RW, WW))), MW = null), CW.set(AW.value.compartment, AW.value.extension)) : AW.is(lR.reconfigure) ? (MW = null, wW = AW.value) : AW.is(lR.appendConfig) && (MW = null, wW = jM(wW).concat(AW.value));
        if (MW) RW = WW.startState.values.slice();
        else {
          MW = yM.resolve(wW, CW, this), RW = new pR(MW, this.doc, this.selection, MW.dynamicSlots.map((() => null)), ((WW, RW) => RW.reconfigure(WW, this)), null).values
        }
        let zR = WW.startState.facet(tM) ? WW.newSelection : WW.newSelection.asSingle();
        new pR(MW, WW.newDoc, zR, RW, ((RW, MW) => MW.update(RW, WW)), WW)
      }
      replaceSelection(WW) {
        return "string" == typeof WW && (WW = this.toText(WW)), this.changeByRange((RW => ({
          changes: {
            from: RW.from,
            to: RW.to,
            insert: WW
          },
          range: vR.cursor(RW.from + WW.length)
        })))
      }
      changeByRange(WW) {
        let RW = this.selection,
          MW = WW(RW.WA[0]),
          wW = this.changes(MW.changes),
          CW = [MW.range],
          zR = jM(MW.effects);
        for (let AW = 1; AW < RW.WA.length; AW++) {
          let MW = WW(RW.WA[AW]),
            bR = this.changes(MW.changes),
            yR = bR.map(wW);
          for (let WW = 0; WW < AW; WW++) CW[WW] = CW[WW].map(yR);
          let NW = wW.mapDesc(bR, !0);
          CW.push(MW.range.map(NW)), wW = wW.compose(yR), zR = lR.mapEffects(zR, yR).concat(lR.mapEffects(jM(MW.effects), NW))
        }
        return {
          changes: wW,
          selection: vR.create(CW, RW.mainIndex),
          effects: zR
        }
      }
      changes() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return WW instanceof dW ? WW : dW.of(WW, this.doc.length, this.facet(pR.lineSeparator))
      }
      toText(WW) {
        return iR.of(WW.split(this.facet(pR.lineSeparator) || kR))
      }
      sliceDoc() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(WW, RW, this.lineBreak)
      }
      facet(WW) {
        let RW = this.config.address[WW.id];
        return null == RW ? WW.default : (NR(this, RW), eR(this, RW))
      }
      toJSON(WW) {
        let RW = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (WW)
          for (let MW in WW) {
            let wW = WW[MW];
            wW instanceof ZW && null != this.config.address[wW.id] && (RW[MW] = wW.spec.toJSON(this.field(WW[MW]), this))
          }
        return RW
      }
      static fromJSON(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          MW = arguments.length > 2 ? arguments[2] : void 0;
        if (!WW || "string" != typeof WW.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let wW = [];
        if (MW)
          for (let CW in MW)
            if (Object.prototype.hasOwnProperty.call(WW, CW)) {
              let RW = MW[CW],
                zR = WW[CW];
              wW.push(RW.init((WW => RW.spec.fromJSON(zR, WW))))
            } return pR.create({
          doc: WW.doc,
          selection: vR.fromJSON(WW.selection),
          extensions: RW.extensions ? wW.concat([RW.extensions]) : wW
        })
      }
      static create() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          RW = yM.resolve(WW.extensions || [], new Map),
          MW = WW.doc instanceof iR ? WW.doc : iR.of((WW.doc || "").split(RW.staticFacet(pR.lineSeparator) || kR)),
          wW = WW.selection ? WW.selection instanceof vR ? WW.selection : vR.single(WW.selection.anchor, WW.selection.head) : vR.single(0);
        return KW(wW, MW.length), RW.staticFacet(tM) || (wW = wW.asSingle()), new pR(RW, MW, wW, RW.dynamicSlots.map((() => null)), ((WW, RW) => RW.create(WW)), null)
      }
      get tabSize() {
        return this.facet(pR.tabSize)
      }
      get lineBreak() {
        return this.facet(pR.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(JR)
      }
      phrase(WW) {
        for (var RW = arguments.length, MW = new Array(RW > 1 ? RW - 1 : 0), wW = 1; wW < RW; wW++) MW[wW - 1] = arguments[wW];
        for (let CW of this.facet(pR.phrases))
          if (Object.prototype.hasOwnProperty.call(CW, WW)) {
            WW = CW[WW];
            break
          } return MW.length && (WW = WW.replace(/\$(\$|\d*)/g, ((WW, RW) => {
          if ("$" == RW) return "$";
          let wW = +(RW || 1);
          return !wW || wW > MW.length ? WW : MW[wW - 1]
        }))), WW
      }
      languageDataAt(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          wW = [];
        for (let CW of this.facet(BR))
          for (let zR of CW(this, RW, MW)) Object.prototype.hasOwnProperty.call(zR, WW) && wW.push(zR[WW]);
        return wW
      }
      charCategorizer(WW) {
        let RW = this.languageDataAt("wordChars", WW);
        return dR(RW.length ? RW[0] : "")
      }
      wordAt(WW) {
        let {
          text: RW,
          from: MW,
          length: wW
        } = this.doc.lineAt(WW), CW = this.charCategorizer(WW), zR = WW - MW, AW = WW - MW;
        for (; zR > 0;) {
          let WW = rR(RW, zR, !1);
          if (CW(RW.slice(WW, zR)) != kM.Word) break;
          zR = WW
        }
        for (; AW < wW;) {
          let WW = rR(RW, AW);
          if (CW(RW.slice(AW, WW)) != kM.Word) break;
          AW = WW
        }
        return zR == AW ? null : vR.range(zR + MW, AW + MW)
      }
    }

    function hR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        wW = {};
      for (let CW of WW)
        for (let WW of Object.keys(CW)) {
          let RW = CW[WW],
            zR = wW[WW];
          if (void 0 === zR) wW[WW] = RW;
          else if (zR === RW || void 0 === RW);
          else {
            if (!Object.hasOwnProperty.call(MW, WW)) throw new Error("Config merge conflict for field " + WW);
            wW[WW] = MW[WW](zR, RW)
          }
        }
      for (let CW in RW) void 0 === wW[CW] && (wW[CW] = RW[CW]);
      return wW
    }
    pR.allowMultipleSelections = tM, pR.tabSize = OW.define({
      combine: WW => WW.length ? WW[0] : 4
    }), pR.lineSeparator = TR, pR.readOnly = JR, pR.phrases = OW.define({
      compare(WW, RW) {
        let MW = Object.keys(WW),
          wW = Object.keys(RW);
        return MW.length == wW.length && MW.every((MW => WW[MW] == RW[MW]))
      }
    }), pR.languageData = BR, pR.changeFilter = gM, pR.transactionFilter = iM, pR.transactionExtender = YR, AR.reconfigure = lR.define();
    class UR {
      eq(WW) {
        return this == WW
      }
      range(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WW;
        return VR.create(WW, RW, this)
      }
    }

    function ER(WW, RW) {
      return WW == RW || WW.constructor == RW.constructor && WW.eq(RW)
    }
    UR.prototype.startSide = UR.prototype.endSide = 0, UR.prototype.point = !1, UR.prototype.mapMode = aR.TrackDel;
    class VR {
      constructor(WW, RW, MW) {
        this.from = WW, this.to = RW, this.value = MW
      }
      static create(WW, RW, MW) {
        return new VR(WW, RW, MW)
      }
    }

    function mM(WW, RW) {
      return WW.from - RW.from || WW.value.startSide - RW.value.startSide
    }
    class xM {
      constructor(WW, RW, MW, wW) {
        this.from = WW, this.to = RW, this.value = MW, this.PNW = wW
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          CW = MW ? this.to : this.from;
        for (let zR = wW, AW = CW.length;;) {
          if (zR == AW) return zR;
          let wW = zR + AW >> 1,
            bR = CW[wW] - WW || (MW ? this.value[wW].endSide : this.value[wW].startSide) - RW;
          if (wW == zR) return bR >= 0 ? zR : AW;
          bR >= 0 ? AW = wW : zR = wW + 1
        }
      }
      between(WW, RW, MW, wW) {
        for (let CW = this.findIndex(RW, -1e9, !0), zR = this.findIndex(MW, 1e9, !1, CW); CW < zR; CW++)
          if (!1 === wW(this.from[CW] + WW, this.to[CW] + WW, this.value[CW])) return !1
      }
      map(WW, RW) {
        let MW = [],
          wW = [],
          CW = [],
          zR = -1,
          AW = -1;
        for (let bR = 0; bR < this.value.length; bR++) {
          let yR, NW, eW = this.value[bR],
            BW = this.from[bR] + WW,
            tR = this.to[bR] + WW;
          if (BW == tR) {
            let WW = RW.mapPos(BW, eW.startSide, eW.mapMode);
            if (null == WW) continue;
            if (yR = NW = WW, eW.startSide != eW.endSide && (NW = RW.mapPos(BW, eW.endSide), NW < yR)) continue
          } else if (yR = RW.mapPos(BW, eW.startSide), NW = RW.mapPos(tR, eW.endSide), yR > NW || yR == NW && eW.startSide > 0 && eW.endSide <= 0) continue;
          (NW - yR || eW.endSide - eW.startSide) < 0 || (zR < 0 && (zR = yR), eW.point && (AW = Math.max(AW, NW - yR)), MW.push(eW), wW.push(yR - zR), CW.push(NW - zR))
        }
        return {
          mapped: MW.length ? new xM(wW, CW, MW, AW) : null,
          pos: zR
        }
      }
    }
    class vM {
      constructor(WW, RW, MW, wW) {
        this.chunkPos = WW, this.chunk = RW, this.nextLayer = MW, this.PNW = wW
      }
      static create(WW, RW, MW, wW) {
        return new vM(WW, RW, MW, wW)
      }
      get length() {
        let WW = this.chunk.length - 1;
        return WW < 0 ? 0 : Math.max(this.chunkEnd(WW), this.nextLayer.length)
      }
      get size() {
        if (this.gC) return 0;
        let WW = this.nextLayer.size;
        for (let RW of this.chunk) WW += RW.value.length;
        return WW
      }
      chunkEnd(WW) {
        return this.chunkPos[WW] + this.chunk[WW].length
      }
      update(WW) {
        let {
          add: RW = [],
          sort: MW = !1,
          filterFrom: wW = 0,
          filterTo: CW = this.length
        } = WW, zR = WW.filter;
        if (0 == RW.length && !zR) return this;
        if (MW && (RW = RW.slice().sort(mM)), this.gC) return RW.length ? vM.of(RW) : this;
        let AW = new OR(this, null, -1).goto(0),
          bR = 0,
          yR = [],
          NW = new KR;
        for (; AW.value || bR < RW.length;)
          if (bR < RW.length && (AW.from - RW[bR].from || AW.startSide - RW[bR].value.startSide) >= 0) {
            let WW = RW[bR++];
            NW.addInner(WW.from, WW.to, WW.value) || yR.push(WW)
          } else 1 == AW.rangeIndex && AW.chunkIndex < this.chunk.length && (bR == RW.length || this.chunkEnd(AW.chunkIndex) < RW[bR].from) && (!zR || wW > this.chunkEnd(AW.chunkIndex) || CW < this.chunkPos[AW.chunkIndex]) && NW.addChunk(this.chunkPos[AW.chunkIndex], this.chunk[AW.chunkIndex]) ? AW.nextChunk() : ((!zR || wW > AW.to || CW < AW.from || zR(AW.from, AW.to, AW.value)) && (NW.addInner(AW.from, AW.to, AW.value) || yR.push(VR.create(AW.from, AW.to, AW.value))), AW.next());
        return NW.finishInner(this.nextLayer.gC && !yR.length ? vM.empty : this.nextLayer.update({
          add: yR,
          filter: zR,
          filterFrom: wW,
          filterTo: CW
        }))
      }
      map(WW) {
        if (WW.empty || this.gC) return this;
        let RW = [],
          MW = [],
          wW = -1;
        for (let zR = 0; zR < this.chunk.length; zR++) {
          let CW = this.chunkPos[zR],
            AW = this.chunk[zR],
            bR = WW.touchesRange(CW, CW + AW.length);
          if (!1 === bR) wW = Math.max(wW, AW.PNW), RW.push(AW), MW.push(WW.mapPos(CW));
          else if (!0 === bR) {
            let {
              mapped: zR,
              pos: bR
            } = AW.map(CW, WW);
            zR && (wW = Math.max(wW, zR.PNW), RW.push(zR), MW.push(bR))
          }
        }
        let CW = this.nextLayer.map(WW);
        return 0 == RW.length ? CW : new vM(MW, RW, CW || vM.empty, wW)
      }
      between(WW, RW, MW) {
        if (!this.gC) {
          for (let wW = 0; wW < this.chunk.length; wW++) {
            let CW = this.chunkPos[wW],
              zR = this.chunk[wW];
            if (RW >= CW && WW <= CW + zR.length && !1 === zR.between(CW, WW - CW, RW - CW, MW)) return
          }
          this.nextLayer.between(WW, RW, MW)
        }
      }
      iter() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return nR.from([this]).goto(WW)
      }
      get gC() {
        return this.nextLayer == this
      }
      static iter(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return nR.from(WW).goto(RW)
      }
      static compare(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          zR = WW.filter((WW => WW.PNW > 0 || !WW.gC && WW.PNW >= CW)),
          AW = RW.filter((WW => WW.PNW > 0 || !WW.gC && WW.PNW >= CW)),
          bR = uR(zR, AW, MW),
          yR = new LR(zR, bR, CW),
          NW = new LR(AW, bR, CW);
        MW.iterGaps(((WW, RW, MW) => HR(yR, WW, NW, RW, MW, wW))), MW.empty && 0 == MW.length && HR(yR, 0, NW, 0, 0, wW)
      }
      static eq(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        null == wW && (wW = 999999999);
        let CW = WW.filter((WW => !WW.gC && RW.indexOf(WW) < 0)),
          zR = RW.filter((RW => !RW.gC && WW.indexOf(RW) < 0));
        if (CW.length != zR.length) return !1;
        if (!CW.length) return !0;
        let AW = uR(CW, zR),
          bR = new LR(CW, AW, 0).goto(MW),
          yR = new LR(zR, AW, 0).goto(MW);
        for (;;) {
          if (bR.to != yR.to || !DR(bR.active, yR.active) || bR.point && (!yR.point || !ER(bR.point, yR.point))) return !1;
          if (bR.to > wW) return !0;
          bR.next(), yR.next()
        }
      }
      static spans(WW, RW, MW, wW) {
        let CW = new LR(WW, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(RW),
          zR = RW,
          AW = CW.openStart;
        for (;;) {
          let WW = Math.min(CW.to, MW);
          if (CW.point) {
            let MW = CW.activeForPoint(CW.to),
              bR = CW.pointFrom < RW ? MW.length + 1 : CW.point.startSide < 0 ? MW.length : Math.min(MW.length, AW);
            wW.point(zR, WW, CW.point, MW, bR, CW.pointRank), AW = Math.min(CW.openEnd(WW), MW.length)
          } else WW > zR && (wW.span(zR, WW, CW.active, AW), AW = CW.openEnd(WW));
          if (CW.to > MW) return AW + (CW.point && CW.to > MW ? 1 : 0);
          zR = CW.to, CW.next()
        }
      }
      static of (WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = new KR;
        for (let wW of WW instanceof VR ? [WW] : RW ? function(WW) {
            if (WW.length > 1)
              for (let RW = WW[0], MW = 1; MW < WW.length; MW++) {
                let wW = WW[MW];
                if (mM(RW, wW) > 0) return WW.slice().sort(mM);
                RW = wW
              }
            return WW
          }(WW) : WW) MW.add(wW.from, wW.to, wW.value);
        return MW.finish()
      }
      static join(WW) {
        if (!WW.length) return vM.empty;
        let RW = WW[WW.length - 1];
        for (let MW = WW.length - 2; MW >= 0; MW--)
          for (let wW = WW[MW]; wW != vM.empty; wW = wW.nextLayer) RW = new vM(wW.chunkPos, wW.chunk, RW, Math.max(wW.PNW, RW.PNW));
        return RW
      }
    }
    vM.empty = new vM([], [], null, -1), vM.empty.nextLayer = vM.empty;
    class KR {
      finishChunk(WW) {
        this.chunks.push(new xM(this.from, this.to, this.value, this.PNW)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.PNW), this.PNW = -1, WW && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.PNW = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(WW, RW, MW) {
        this.addInner(WW, RW, MW) || (this.nextLayer || (this.nextLayer = new KR)).add(WW, RW, MW)
      }
      addInner(WW, RW, MW) {
        let wW = WW - this.lastTo || MW.startSide - this.last.endSide;
        if (wW <= 0 && (WW - this.lastFrom || MW.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(wW < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = WW), this.from.push(WW - this.chunkStart), this.to.push(RW - this.chunkStart), this.last = MW, this.lastFrom = WW, this.lastTo = RW, this.value.push(MW), MW.point && (this.PNW = Math.max(this.PNW, RW - WW)), !0)
      }
      addChunk(WW, RW) {
        if ((WW - this.lastTo || RW.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, RW.PNW), this.chunks.push(RW), this.chunkPos.push(WW);
        let MW = RW.value.length - 1;
        return this.last = RW.value[MW], this.lastFrom = RW.from[MW] + WW, this.lastTo = RW.to[MW] + WW, !0
      }
      finish() {
        return this.finishInner(vM.empty)
      }
      finishInner(WW) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return WW;
        let RW = vM.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(WW) : WW, this.setMaxPoint);
        return this.from = null, RW
      }
    }

    function uR(WW, RW, MW) {
      let wW = new Map;
      for (let zR of WW)
        for (let WW = 0; WW < zR.chunk.length; WW++) zR.chunk[WW].PNW <= 0 && wW.set(zR.chunk[WW], zR.chunkPos[WW]);
      let CW = new Set;
      for (let zR of RW)
        for (let WW = 0; WW < zR.chunk.length; WW++) {
          let RW = wW.get(zR.chunk[WW]);
          null == RW || (MW ? MW.mapPos(RW) : RW) != zR.chunkPos[WW] || (null === MW || void 0 === MW ? void 0 : MW.touchesRange(RW, RW + zR.chunk[WW].length)) || CW.add(zR.chunk[WW])
        }
      return CW
    }
    class OR {
      constructor(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = WW, this.skip = RW, this.INW = MW, this.rank = wW
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(WW, RW, !1), this
      }
      gotoInner(WW, RW, MW) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let RW = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(RW) || this.layer.chunkEnd(this.chunkIndex) < WW || RW.PNW < this.INW)) break;
          this.chunkIndex++, MW = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let wW = this.layer.chunk[this.chunkIndex].findIndex(WW - this.layer.chunkPos[this.chunkIndex], RW, !0);
          (!MW || this.rangeIndex < wW) && this.setRangeIndex(wW)
        }
        this.next()
      }
      forward(WW, RW) {
        (this.to - WW || this.endSide - RW) < 0 && this.gotoInner(WW, RW, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let WW = this.layer.chunkPos[this.chunkIndex],
              RW = this.layer.chunk[this.chunkIndex],
              MW = WW + RW.from[this.rangeIndex];
            if (this.from = MW, this.to = WW + RW.to[this.rangeIndex], this.value = RW.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.INW < 0 || this.value.point && this.to - this.from >= this.INW) break
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
    class nR {
      constructor(WW) {
        this.heap = WW
      }
      static from(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          wW = [];
        for (let CW = 0; CW < WW.length; CW++)
          for (let zR = WW[CW]; !zR.gC; zR = zR.nextLayer) zR.PNW >= MW && wW.push(new OR(zR, RW, MW, CW));
        return 1 == wW.length ? wW[0] : new nR(wW)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let MW of this.heap) MW.goto(WW, RW);
        for (let MW = this.heap.length >> 1; MW >= 0; MW--) GR(this.heap, MW);
        return this.next(), this
      }
      forward(WW, RW) {
        for (let MW of this.heap) MW.forward(WW, RW);
        for (let MW = this.heap.length >> 1; MW >= 0; MW--) GR(this.heap, MW);
        (this.to - WW || this.value.endSide - RW) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let WW = this.heap[0];
          this.from = WW.from, this.to = WW.to, this.value = WW.value, this.rank = WW.rank, WW.value && WW.next(), GR(this.heap, 0)
        }
      }
    }

    function GR(WW, RW) {
      for (let MW = WW[RW];;) {
        let wW = 1 + (RW << 1);
        if (wW >= WW.length) break;
        let CW = WW[wW];
        if (wW + 1 < WW.length && CW.compare(WW[wW + 1]) >= 0 && (CW = WW[wW + 1], wW++), MW.compare(CW) < 0) break;
        WW[wW] = MW, WW[RW] = CW, RW = wW
      }
    }
    class LR {
      constructor(WW, RW, MW) {
        this.INW = MW, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = nR.from(WW, RW, MW)
      }
      goto(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(WW, RW), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = WW, this.endSide = RW, this.openStart = -1, this.next(), this
      }
      forward(WW, RW) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - WW || this.active[this.minActive].endSide - RW) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(WW, RW)
      }
      removeActive(WW) {
        qM(this.active, WW), qM(this.activeTo, WW), qM(this.activeRank, WW), this.minActive = SR(this.active, this.activeTo)
      }
      addActive(WW) {
        let RW = 0,
          {
            value: MW,
            to: wW,
            rank: CW
          } = this.cursor;
        for (; RW < this.activeRank.length && (CW - this.activeRank[RW] || wW - this.activeTo[RW]) > 0;) RW++;
        ZR(this.active, RW, MW), ZR(this.activeTo, RW, wW), ZR(this.activeRank, RW, CW), WW && ZR(WW, RW, this.cursor.from), this.minActive = SR(this.active, this.activeTo)
      }
      next() {
        let WW = this.to,
          RW = this.point;
        this.point = null;
        let MW = this.openStart < 0 ? [] : null;
        for (;;) {
          let wW = this.minActive;
          if (wW > -1 && (this.activeTo[wW] - this.cursor.from || this.active[wW].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[wW] > WW) {
              this.to = this.activeTo[wW], this.endSide = this.active[wW].endSide;
              break
            }
            this.removeActive(wW), MW && qM(MW, wW)
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
                if (!(RW && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = WW, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = WW.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(MW), this.cursor.next()
            }
          }
        }
        if (MW) {
          this.openStart = 0;
          for (let RW = MW.length - 1; RW >= 0 && MW[RW] < WW; RW--) this.openStart++
        }
      }
      activeForPoint(WW) {
        if (!this.active.length) return this.active;
        let RW = [];
        for (let MW = this.active.length - 1; MW >= 0 && !(this.activeRank[MW] < this.pointRank); MW--)(this.activeTo[MW] > WW || this.activeTo[MW] == WW && this.active[MW].endSide >= this.point.endSide) && RW.push(this.active[MW]);
        return RW.reverse()
      }
      openEnd(WW) {
        let RW = 0;
        for (let MW = this.activeTo.length - 1; MW >= 0 && this.activeTo[MW] > WW; MW--) RW++;
        return RW
      }
    }

    function HR(WW, RW, MW, wW, CW, zR) {
      WW.goto(RW), MW.goto(wW);
      let AW = wW + CW,
        bR = wW,
        yR = wW - RW,
        NW = !!zR.boundChange;
      for (let eW = !1;;) {
        let RW = WW.to + yR - MW.to,
          wW = RW || WW.endSide - MW.endSide,
          CW = wW < 0 ? WW.to + yR : MW.to,
          BW = Math.min(CW, AW);
        if (WW.point || MW.point ? (WW.point && MW.point && ER(WW.point, MW.point) && DR(WW.activeForPoint(WW.to), MW.activeForPoint(MW.to)) || zR.comparePoint(bR, BW, WW.point, MW.point), eW = !1) : (eW && zR.boundChange(bR), BW > bR && !DR(WW.active, MW.active) && zR.compareRange(bR, BW, WW.active, MW.active), NW && BW < AW && (RW || WW.openEnd(CW) != MW.openEnd(CW)) && (eW = !0)), CW > AW) break;
        bR = CW, wW <= 0 && WW.next(), wW >= 0 && MW.next()
      }
    }

    function DR(WW, RW) {
      if (WW.length != RW.length) return !1;
      for (let MW = 0; MW < WW.length; MW++)
        if (WW[MW] != RW[MW] && !ER(WW[MW], RW[MW])) return !1;
      return !0
    }

    function qM(WW, RW) {
      for (let MW = RW, wW = WW.length - 1; MW < wW; MW++) WW[MW] = WW[MW + 1];
      WW.pop()
    }

    function ZR(WW, RW, MW) {
      for (let wW = WW.length - 1; wW >= RW; wW--) WW[wW + 1] = WW[wW];
      WW[RW] = MW
    }

    function SR(WW, RW) {
      let MW = -1,
        wW = 1e9;
      for (let CW = 0; CW < RW.length; CW++)(RW[CW] - wW || WW[CW].endSide - WW[MW].endSide) < 0 && (MW = CW, wW = RW[CW]);
      return MW
    }

    function WM(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WW.length,
        wW = 0;
      for (let CW = 0; CW < MW && CW < WW.length;) 9 == WW.charCodeAt(CW) ? (wW += RW - wW % RW, CW++) : (wW++, CW = rR(WW, CW));
      return wW
    }

    function RM(WW, RW, MW, wW) {
      for (let CW = 0, zR = 0;;) {
        if (zR >= RW) return CW;
        if (CW == WW.length) break;
        zR += 9 == WW.charCodeAt(CW) ? MW - zR % MW : 1, CW = rR(WW, CW)
      }
      return !0 === wW ? -1 : WW.length
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);