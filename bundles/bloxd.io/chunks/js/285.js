export const id = 285;
export const ids = [285];
export const modules = {
  40110: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => Ao,
      c: () => JT,
      ChangeSet: () => UT,
      g: () => Co,
      k: () => ZT,
      o: () => ao,
      p: () => tT,
      t: () => jT,
      w: () => zo,
      D: () => Zo,
      A: () => so,
      F: () => Qo,
      H: () => wo,
      K: () => dT,
      N: () => KT,
      O: () => mo,
      S: () => vT,
      T: () => fT,
      V: () => Yo,
      Y: () => II,
      ab: () => uT,
      db: () => iI,
      eb: () => ET
    });
    let iT = [],
      zT = [];

    function kT(TT) {
      if (TT < 768) return !1;
      for (let oT = 0, IT = iT.length;;) {
        let kT = oT + IT >> 1;
        if (TT < iT[kT]) IT = kT;
        else {
          if (!(TT >= zT[kT])) return !0;
          oT = kT + 1
        }
        if (oT == IT) return !1
      }
    }

    function WT(TT) {
      return TT >= 127462 && TT <= 127487
    }(() => {
      let TT = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((TT => TT ? parseInt(TT, 36) : 1));
      for (let oT = 0, IT = 0; oT < TT.length; oT++)(oT % 2 ? zT : iT).push(IT += TT[oT])
    })();
    const XT = 8205;

    function BT(TT, oT) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? FT : ST)(TT, oT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function FT(TT, oT, IT) {
      if (oT == TT.length) return oT;
      oT && LT(TT.charCodeAt(oT)) && xT(TT.charCodeAt(oT - 1)) && oT--;
      let iT = DT(TT, oT);
      for (oT += cT(iT); oT < TT.length;) {
        let zT = DT(TT, oT);
        if (iT == XT || zT == XT || IT && kT(zT)) oT += cT(zT), iT = zT;
        else {
          if (!WT(zT)) break;
          {
            let IT = 0,
              iT = oT - 2;
            for (; iT >= 0 && WT(DT(TT, iT));) IT++, iT -= 2;
            if (IT % 2 == 0) break;
            oT += 2
          }
        }
      }
      return oT
    }

    function ST(TT, oT, IT) {
      for (; oT > 0;) {
        let iT = FT(TT, oT - 2, IT);
        if (iT < oT) return iT;
        oT--
      }
      return 0
    }

    function DT(TT, oT) {
      let IT = TT.charCodeAt(oT);
      if (!xT(IT) || oT + 1 == TT.length) return IT;
      let iT = TT.charCodeAt(oT + 1);
      return LT(iT) ? iT - 56320 + (IT - 55296 << 10) + 65536 : IT
    }

    function LT(TT) {
      return TT >= 56320 && TT < 57344
    }

    function xT(TT) {
      return TT >= 55296 && TT < 56320
    }

    function cT(TT) {
      return TT < 65536 ? 1 : 2
    }
    class KT {
      lineAt(TT) {
        if (TT < 0 || TT > this.length) throw new RangeError(`Invalid position ${TT} in document of length ${this.length}`);
        return this.lineInner(TT, !1, 1, 0)
      }
      line(TT) {
        if (TT < 1 || TT > this.lines) throw new RangeError(`Invalid line number ${TT} in ${this.lines}-line document`);
        return this.lineInner(TT, !0, 1, 0)
      }
      replace(TT, oT, IT) {
        [TT, oT] = RT(this, TT, oT);
        let iT = [];
        return this.decompose(0, TT, iT, 2), IT.length && IT.decompose(0, IT.length, iT, 3), this.decompose(oT, this.length, iT, 1), rT.from(iT, this.length - (oT - TT) + IT.length)
      }
      append(TT) {
        return this.replace(this.length, this.length, TT)
      }
      slice(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [TT, oT] = RT(this, TT, oT);
        let IT = [];
        return this.decompose(TT, oT, IT, 0), rT.from(IT, oT - TT)
      }
      eq(TT) {
        if (TT == this) return !0;
        if (TT.length != this.length || TT.lines != this.lines) return !1;
        let oT = this.scanIdentical(TT, 1),
          IT = this.length - this.scanIdentical(TT, -1),
          iT = new hT(this),
          zT = new hT(TT);
        for (let kT = oT, WT = oT;;) {
          if (iT.next(kT), zT.next(kT), kT = 0, iT.lineBreak != zT.lineBreak || iT.done != zT.done || iT.value != zT.value) return !1;
          if (WT += iT.value.length, iT.done || WT >= IT) return !0
        }
      }
      iter() {
        return new hT(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new wT(this, TT, oT)
      }
      iterLines(TT, oT) {
        let IT;
        if (null == TT) IT = this.iter();
        else {
          null == oT && (oT = this.lines + 1);
          let iT = this.line(TT).from;
          IT = this.iterRange(iT, Math.max(iT, oT == this.lines + 1 ? this.length : oT <= 1 ? 0 : this.line(oT - 1).to))
        }
        return new mT(IT)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let TT = [];
        return this.flatten(TT), TT
      }
      constructor() {}
      static of (TT) {
        if (0 == TT.length) throw new RangeError("A document must have at least one line");
        return 1 != TT.length || TT[0] ? TT.length <= 32 ? new MT(TT) : rT.from(MT.split(TT, [])) : KT.empty
      }
    }
    class MT extends KT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(TT) {
          let oT = -1;
          for (let IT of TT) oT += IT.length + 1;
          return oT
        }(TT);
        super(), this.text = TT, this.length = oT
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(TT, oT, IT, iT) {
        for (let zT = 0;; zT++) {
          let kT = this.text[zT],
            WT = iT + kT.length;
          if ((oT ? IT : WT) >= TT) return new eT(iT, WT, IT, kT);
          iT = WT + 1, IT++
        }
      }
      decompose(TT, oT, IT, iT) {
        let zT = TT <= 0 && oT >= this.length ? this : new MT(gT(this.text, TT, oT), Math.min(oT, this.length) - Math.max(0, TT));
        if (1 & iT) {
          let TT = IT.pop(),
            oT = AT(zT.text, TT.text.slice(), 0, zT.length);
          if (oT.length <= 32) IT.push(new MT(oT, TT.length + zT.length));
          else {
            let TT = oT.length >> 1;
            IT.push(new MT(oT.slice(0, TT)), new MT(oT.slice(TT)))
          }
        } else IT.push(zT)
      }
      replace(TT, oT, IT) {
        if (!(IT instanceof MT)) return super.replace(TT, oT, IT);
        [TT, oT] = RT(this, TT, oT);
        let iT = AT(this.text, AT(IT.text, gT(this.text, 0, TT)), oT),
          zT = this.length + IT.length - (oT - TT);
        return iT.length <= 32 ? new MT(iT, zT) : rT.from(MT.split(iT, []), zT)
      }
      sliceString(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [TT, oT] = RT(this, TT, oT);
        let iT = "";
        for (let zT = 0, kT = 0; zT <= oT && kT < this.text.length; kT++) {
          let WT = this.text[kT],
            XT = zT + WT.length;
          zT > TT && kT && (iT += IT), TT < XT && oT > zT && (iT += WT.slice(Math.max(0, TT - zT), oT - zT)), zT = XT + 1
        }
        return iT
      }
      flatten(TT) {
        for (let oT of this.text) TT.push(oT)
      }
      scanIdentical() {
        return 0
      }
      static split(TT, oT) {
        let IT = [],
          iT = -1;
        for (let zT of TT) IT.push(zT), iT += zT.length + 1, 32 == IT.length && (oT.push(new MT(IT, iT)), IT = [], iT = -1);
        return iT > -1 && oT.push(new MT(IT, iT)), oT
      }
    }
    class rT extends KT {
      constructor(TT, oT) {
        super(), this.children = TT, this.length = oT, this.lines = 0;
        for (let IT of TT) this.lines += IT.lines
      }
      lineInner(TT, oT, IT, iT) {
        for (let zT = 0;; zT++) {
          let kT = this.children[zT],
            WT = iT + kT.length,
            XT = IT + kT.lines - 1;
          if ((oT ? XT : WT) >= TT) return kT.lineInner(TT, oT, IT, iT);
          iT = WT + 1, IT = XT + 1
        }
      }
      decompose(TT, oT, IT, iT) {
        for (let zT = 0, kT = 0; kT <= oT && zT < this.children.length; zT++) {
          let WT = this.children[zT],
            XT = kT + WT.length;
          if (TT <= XT && oT >= kT) {
            let zT = iT & ((kT <= TT ? 1 : 0) | (XT >= oT ? 2 : 0));
            kT >= TT && XT <= oT && !zT ? IT.push(WT) : WT.decompose(TT - kT, oT - kT, IT, zT)
          }
          kT = XT + 1
        }
      }
      replace(TT, oT, IT) {
        if ([TT, oT] = RT(this, TT, oT), IT.lines < this.lines)
          for (let iT = 0, zT = 0; iT < this.children.length; iT++) {
            let kT = this.children[iT],
              WT = zT + kT.length;
            if (TT >= zT && oT <= WT) {
              let XT = kT.replace(TT - zT, oT - zT, IT),
                BT = this.lines - kT.lines + XT.lines;
              if (XT.lines < BT >> 4 && XT.lines > BT >> 6) {
                let zT = this.children.slice();
                return zT[iT] = XT, new rT(zT, this.length - (oT - TT) + IT.length)
              }
              return super.replace(zT, WT, XT)
            }
            zT = WT + 1
          }
        return super.replace(TT, oT, IT)
      }
      sliceString(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [TT, oT] = RT(this, TT, oT);
        let iT = "";
        for (let zT = 0, kT = 0; zT < this.children.length && kT <= oT; zT++) {
          let WT = this.children[zT],
            XT = kT + WT.length;
          kT > TT && zT && (iT += IT), TT < XT && oT > kT && (iT += WT.sliceString(TT - kT, oT - kT, IT)), kT = XT + 1
        }
        return iT
      }
      flatten(TT) {
        for (let oT of this.children) oT.flatten(TT)
      }
      scanIdentical(TT, oT) {
        if (!(TT instanceof rT)) return 0;
        let IT = 0,
          [iT, zT, kT, WT] = oT > 0 ? [0, 0, this.children.length, TT.children.length] : [this.children.length - 1, TT.children.length - 1, -1, -1];
        for (;; iT += oT, zT += oT) {
          if (iT == kT || zT == WT) return IT;
          let XT = this.children[iT],
            BT = TT.children[zT];
          if (XT != BT) return IT + XT.scanIdentical(BT, oT);
          IT += XT.length + 1
        }
      }
      static from(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.reduce(((TT, oT) => TT + oT.length + 1), -1),
          IT = 0;
        for (let LT of TT) IT += LT.lines;
        if (IT < 32) {
          let IT = [];
          for (let oT of TT) oT.flatten(IT);
          return new MT(IT, oT)
        }
        let iT = Math.max(32, IT >> 5),
          zT = iT << 1,
          kT = iT >> 1,
          WT = [],
          XT = 0,
          BT = -1,
          FT = [];

        function ST(TT) {
          let oT;
          if (TT.lines > zT && TT instanceof rT)
            for (let IT of TT.children) ST(IT);
          else TT.lines > kT && (XT > kT || !XT) ? (DT(), WT.push(TT)) : TT instanceof MT && XT && (oT = FT[FT.length - 1]) instanceof MT && TT.lines + oT.lines <= 32 ? (XT += TT.lines, BT += TT.length + 1, FT[FT.length - 1] = new MT(oT.text.concat(TT.text), oT.length + 1 + TT.length)) : (XT + TT.lines > iT && DT(), XT += TT.lines, BT += TT.length + 1, FT.push(TT))
        }

        function DT() {
          0 != XT && (WT.push(1 == FT.length ? FT[0] : rT.from(FT, BT)), BT = -1, XT = FT.length = 0)
        }
        for (let LT of TT) ST(LT);
        return DT(), 1 == WT.length ? WT[0] : new rT(WT, oT)
      }
    }

    function AT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let zT = 0, kT = 0, WT = !0; kT < TT.length && zT <= iT; kT++) {
        let XT = TT[kT],
          BT = zT + XT.length;
        BT >= IT && (BT > iT && (XT = XT.slice(0, iT - zT)), zT < IT && (XT = XT.slice(IT - zT)), WT ? (oT[oT.length - 1] += XT, WT = !1) : oT.push(XT)), zT = BT + 1
      }
      return oT
    }

    function gT(TT, oT, IT) {
      return AT(TT, [""], oT, IT)
    }
    KT.empty = new MT([""], 0);
    class hT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = oT, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [TT], this.offsets = [oT > 0 ? 1 : (TT instanceof MT ? TT.text.length : TT.children.length) << 1]
      }
      nextInner(TT, oT) {
        for (this.done = this.lineBreak = !1;;) {
          let IT = this.nodes.length - 1,
            iT = this.nodes[IT],
            zT = this.offsets[IT],
            kT = zT >> 1,
            WT = iT instanceof MT ? iT.text.length : iT.children.length;
          if (kT == (oT > 0 ? WT : 0)) {
            if (0 == IT) return this.done = !0, this.value = "", this;
            oT > 0 && this.offsets[IT - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & zT) == (oT > 0 ? 0 : 1)) {
            if (this.offsets[IT] += oT, 0 == TT) return this.lineBreak = !0, this.value = "\n", this;
            TT--
          } else if (iT instanceof MT) {
            let zT = iT.text[kT + (oT < 0 ? -1 : 0)];
            if (this.offsets[IT] += oT, zT.length > Math.max(0, TT)) return this.value = 0 == TT ? zT : oT > 0 ? zT.slice(TT) : zT.slice(0, zT.length - TT), this;
            TT -= zT.length
          } else {
            let zT = iT.children[kT + (oT < 0 ? -1 : 0)];
            TT > zT.length ? (TT -= zT.length, this.offsets[IT] += oT) : (oT < 0 && this.offsets[IT]--, this.nodes.push(zT), this.offsets.push(oT > 0 ? 1 : (zT instanceof MT ? zT.text.length : zT.children.length) << 1))
          }
        }
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return TT < 0 && (this.nextInner(-TT, -this.dir), TT = this.value.length), this.nextInner(TT, this.dir)
      }
    }
    class wT {
      constructor(TT, oT, IT) {
        this.value = "", this.done = !1, this.cursor = new hT(TT, oT > IT ? -1 : 1), this.pos = oT > IT ? TT.length : 0, this.from = Math.min(oT, IT), this.to = Math.max(oT, IT)
      }
      nextInner(TT, oT) {
        if (oT < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        TT += Math.max(0, oT < 0 ? this.pos - this.to : this.from - this.pos);
        let IT = oT < 0 ? this.pos - this.from : this.to - this.pos;
        TT > IT && (TT = IT), IT -= TT;
        let {
          value: iT
        } = this.cursor.next(TT);
        return this.pos += (iT.length + TT) * oT, this.value = iT.length <= IT ? iT : oT < 0 ? iT.slice(iT.length - IT) : iT.slice(0, IT), this.done = !this.value, this
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return TT < 0 ? TT = Math.max(TT, this.from - this.pos) : TT > 0 && (TT = Math.min(TT, this.to - this.pos)), this.nextInner(TT, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class mT {
      constructor(TT) {
        this.inner = TT, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: oT,
            lineBreak: IT,
            value: iT
          } = this.inner.next(TT);
        return oT && this.afterBreak ? (this.value = "", this.afterBreak = !1) : oT ? (this.done = !0, this.value = "") : IT ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = iT, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (KT.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, hT.prototype[Symbol.iterator] = wT.prototype[Symbol.iterator] = mT.prototype[Symbol.iterator] = function() {
      return this
    });
    class eT {
      constructor(TT, oT, IT, iT) {
        this.from = TT, this.to = oT, this.number = IT, this.text = iT
      }
      get length() {
        return this.to - this.from
      }
    }

    function RT(TT, oT, IT) {
      return [oT = Math.max(0, Math.min(TT.length, oT)), Math.max(oT, Math.min(TT.length, IT))]
    }

    function uT(TT, oT) {
      return BT(TT, oT, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function vT(TT, oT) {
      let IT = TT.charCodeAt(oT);
      if (!((iT = IT) >= 55296 && iT < 56320) || oT + 1 == TT.length) return IT;
      var iT;
      let zT = TT.charCodeAt(oT + 1);
      return function(TT) {
        return TT >= 56320 && TT < 57344
      }(zT) ? zT - 56320 + (IT - 55296 << 10) + 65536 : IT
    }

    function ET(TT) {
      return TT <= 65535 ? String.fromCharCode(TT) : (TT -= 65536, String.fromCharCode(55296 + (TT >> 10), 56320 + (1023 & TT)))
    }

    function fT(TT) {
      return TT < 65536 ? 1 : 2
    }
    const CT = /\r\n?|\n/;
    var jT = function(TT) {
      return TT[TT.Simple = 0] = "Simple", TT[TT.TrackDel = 1] = "TrackDel", TT[TT.TrackBefore = 2] = "TrackBefore", TT[TT.TrackAfter = 3] = "TrackAfter", TT
    }(jT || (jT = {}));
    class JT {
      constructor(TT) {
        this.sections = TT
      }
      get length() {
        let TT = 0;
        for (let oT = 0; oT < this.sections.length; oT += 2) TT += this.sections[oT];
        return TT
      }
      get newLength() {
        let TT = 0;
        for (let oT = 0; oT < this.sections.length; oT += 2) {
          let IT = this.sections[oT + 1];
          TT += IT < 0 ? this.sections[oT] : IT
        }
        return TT
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(TT) {
        for (let oT = 0, IT = 0, iT = 0; oT < this.sections.length;) {
          let zT = this.sections[oT++],
            kT = this.sections[oT++];
          kT < 0 ? (TT(IT, iT, zT), iT += zT) : iT += kT, IT += zT
        }
      }
      iterChangedRanges(TT) {
        QT(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let TT = [];
        for (let oT = 0; oT < this.sections.length;) {
          let IT = this.sections[oT++],
            iT = this.sections[oT++];
          iT < 0 ? TT.push(IT, iT) : TT.push(iT, IT)
        }
        return new JT(TT)
      }
      composeDesc(TT) {
        return this.empty ? TT : TT.empty ? this : HT(this, TT)
      }
      mapDesc(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return TT.empty ? this : OT(this, TT, oT)
      }
      mapPos(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : jT.Simple,
          iT = 0,
          zT = 0;
        for (let kT = 0; kT < this.sections.length;) {
          let WT = this.sections[kT++],
            XT = this.sections[kT++],
            BT = iT + WT;
          if (XT < 0) {
            if (BT > TT) return zT + (TT - iT);
            zT += WT
          } else {
            if (IT != jT.Simple && BT >= TT && (IT == jT.TrackDel && iT < TT && BT > TT || IT == jT.TrackBefore && iT < TT || IT == jT.TrackAfter && BT > TT)) return null;
            if (BT > TT || BT == TT && oT < 0 && !WT) return TT == iT || oT < 0 ? zT : zT + XT;
            zT += XT
          }
          iT = BT
        }
        if (TT > iT) throw new RangeError(`Position ${TT} is out of range for changeset of length ${iT}`);
        return zT
      }
      touchesRange(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        for (let IT = 0, iT = 0; IT < this.sections.length && iT <= oT;) {
          let zT = iT + this.sections[IT++];
          if (this.sections[IT++] >= 0 && iT <= oT && zT >= TT) return !(iT < TT && zT > oT) || "cover";
          iT = zT
        }
        return !1
      }
      toString() {
        let TT = "";
        for (let oT = 0; oT < this.sections.length;) {
          let IT = this.sections[oT++],
            iT = this.sections[oT++];
          TT += (TT ? " " : "") + IT + (iT >= 0 ? ":" + iT : "")
        }
        return TT
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(TT) {
        if (!Array.isArray(TT) || TT.length % 2 || TT.some((TT => "number" != typeof TT))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new JT(TT)
      }
      static create(TT) {
        return new JT(TT)
      }
    }
    class UT extends JT {
      constructor(TT, oT) {
        super(TT), this.inserted = oT
      }
      apply(TT) {
        if (this.length != TT.length) throw new RangeError("Applying change set to a document with the wrong length");
        return QT(this, ((oT, IT, iT, zT, kT) => TT = TT.replace(iT, iT + (IT - oT), kT)), !1), TT
      }
      mapDesc(TT) {
        return OT(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(TT) {
        let oT = this.sections.slice(),
          IT = [];
        for (let iT = 0, zT = 0; iT < oT.length; iT += 2) {
          let kT = oT[iT],
            WT = oT[iT + 1];
          if (WT >= 0) {
            oT[iT] = WT, oT[iT + 1] = kT;
            let XT = iT >> 1;
            for (; IT.length < XT;) IT.push(KT.empty);
            IT.push(kT ? TT.slice(zT, zT + kT) : KT.empty)
          }
          zT += kT
        }
        return new UT(oT, IT)
      }
      compose(TT) {
        return this.empty ? TT : TT.empty ? this : HT(this, TT, !0)
      }
      map(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return TT.empty ? this : OT(this, TT, oT, !0)
      }
      iterChanges(TT) {
        QT(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return JT.create(this.sections)
      }
      filter(TT) {
        let oT = [],
          IT = [],
          iT = [],
          zT = new nT(this);
        TT: for (let kT = 0, WT = 0;;) {
          let XT = kT == TT.length ? 1e9 : TT[kT++];
          for (; WT < XT || WT == XT && 0 == zT.len;) {
            if (zT.done) break TT;
            let TT = Math.min(zT.len, XT - WT);
            aT(iT, TT, -1);
            let kT = -1 == zT.ins ? -1 : 0 == zT.off ? zT.ins : 0;
            aT(oT, TT, kT), kT > 0 && YT(IT, oT, zT.text), zT.forward(TT), WT += TT
          }
          let BT = TT[kT++];
          for (; WT < BT;) {
            if (zT.done) break TT;
            let TT = Math.min(zT.len, BT - WT);
            aT(oT, TT, -1), aT(iT, TT, -1 == zT.ins ? -1 : 0 == zT.off ? zT.ins : 0), zT.forward(TT), WT += TT
          }
        }
        return {
          changes: new UT(oT, IT),
          filtered: JT.create(iT)
        }
      }
      toJSON() {
        let TT = [];
        for (let oT = 0; oT < this.sections.length; oT += 2) {
          let IT = this.sections[oT],
            iT = this.sections[oT + 1];
          iT < 0 ? TT.push(IT) : 0 == iT ? TT.push([IT]) : TT.push([IT].concat(this.inserted[oT >> 1].toJSON()))
        }
        return TT
      }
      static of (TT, oT, IT) {
        let iT = [],
          zT = [],
          kT = 0,
          WT = null;

        function XT() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !iT.length) return;
          kT < oT && aT(iT, oT - kT, -1);
          let TT = new UT(iT, zT);
          WT = WT ? WT.compose(TT.map(WT)) : TT, iT = [], zT = [], kT = 0
        }
        return function TT(BT) {
          if (Array.isArray(BT))
            for (let oT of BT) TT(oT);
          else if (BT instanceof UT) {
            if (BT.length != oT) throw new RangeError(`Mismatched change set length (got ${BT.length}, expected ${oT})`);
            XT(), WT = WT ? WT.compose(BT.map(WT)) : BT
          } else {
            let {
              from: TT,
              to: WT = TT,
              insert: FT
            } = BT;
            if (TT > WT || TT < 0 || WT > oT) throw new RangeError(`Invalid change range ${TT} to ${WT} (in doc of length ${oT})`);
            let ST = FT ? "string" == typeof FT ? KT.of(FT.split(IT || CT)) : FT : KT.empty,
              DT = ST.length;
            if (TT == WT && 0 == DT) return;
            TT < kT && XT(), TT > kT && aT(iT, TT - kT, -1), aT(iT, WT - TT, DT), YT(zT, iT, ST), kT = WT
          }
        }(TT), XT(!WT), WT
      }
      static empty(TT) {
        return new UT(TT ? [TT, -1] : [], [])
      }
      static fromJSON(TT) {
        if (!Array.isArray(TT)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let oT = [],
          IT = [];
        for (let iT = 0; iT < TT.length; iT++) {
          let zT = TT[iT];
          if ("number" == typeof zT) oT.push(zT, -1);
          else {
            if (!Array.isArray(zT) || "number" != typeof zT[0] || zT.some(((TT, oT) => oT && "string" != typeof TT))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == zT.length) oT.push(zT[0], 0);
            else {
              for (; IT.length < iT;) IT.push(KT.empty);
              IT[iT] = KT.of(zT.slice(1)), oT.push(zT[0], IT[iT].length)
            }
          }
        }
        return new UT(oT, IT)
      }
      static createSet(TT, oT) {
        return new UT(TT, oT)
      }
    }

    function aT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == oT && IT <= 0) return;
      let zT = TT.length - 2;
      zT >= 0 && IT <= 0 && IT == TT[zT + 1] ? TT[zT] += oT : zT >= 0 && 0 == oT && 0 == TT[zT] ? TT[zT + 1] += IT : iT ? (TT[zT] += oT, TT[zT + 1] += IT) : TT.push(oT, IT)
    }

    function YT(TT, oT, IT) {
      if (0 == IT.length) return;
      let iT = oT.length - 2 >> 1;
      if (iT < TT.length) TT[TT.length - 1] = TT[TT.length - 1].append(IT);
      else {
        for (; TT.length < iT;) TT.push(KT.empty);
        TT.push(IT)
      }
    }

    function QT(TT, oT, IT) {
      let iT = TT.inserted;
      for (let zT = 0, kT = 0, WT = 0; WT < TT.sections.length;) {
        let XT = TT.sections[WT++],
          BT = TT.sections[WT++];
        if (BT < 0) zT += XT, kT += XT;
        else {
          let FT = zT,
            ST = kT,
            DT = KT.empty;
          for (; FT += XT, ST += BT, BT && iT && (DT = DT.append(iT[WT - 2 >> 1])), !(IT || WT == TT.sections.length || TT.sections[WT + 1] < 0);) XT = TT.sections[WT++], BT = TT.sections[WT++];
          oT(zT, FT, kT, ST, DT), zT = FT, kT = ST
        }
      }
    }

    function OT(TT, oT, IT) {
      let iT = [],
        zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        kT = new nT(TT),
        WT = new nT(oT),
        XT = 0;
      for (let BT = -1;;) {
        if (++XT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (kT.done && WT.len || WT.done && kT.len) throw new Error("Mismatched change set lengths");
        if (-1 == kT.ins && -1 == WT.ins) {
          let TT = Math.min(kT.len, WT.len);
          aT(iT, TT, -1), kT.forward(TT), WT.forward(TT)
        } else if (WT.ins >= 0 && (kT.ins < 0 || BT == kT.i || 0 == kT.off && (WT.len < kT.len || WT.len == kT.len && !IT))) {
          let TT = WT.len;
          for (aT(iT, WT.ins, -1); TT;) {
            if (++XT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let oT = Math.min(kT.len, TT);
            kT.ins >= 0 && BT < kT.i && kT.len <= oT && (aT(iT, 0, kT.ins), zT && YT(zT, iT, kT.text), BT = kT.i), kT.forward(oT), TT -= oT
          }
          WT.next()
        } else {
          if (!(kT.ins >= 0)) {
            if (kT.done && WT.done) return zT ? UT.createSet(iT, zT) : JT.create(iT);
            throw new Error("Mismatched change set lengths")
          } {
            let TT = 0,
              oT = kT.len;
            for (; oT;) {
              if (++XT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == WT.ins) {
                let IT = Math.min(oT, WT.len);
                TT += IT, oT -= IT, WT.forward(IT)
              } else {
                if (!(0 == WT.ins && WT.len < oT)) break;
                oT -= WT.len, WT.next()
              }
            }
            aT(iT, TT, BT < kT.i ? kT.ins : 0), zT && BT < kT.i && YT(zT, iT, kT.text), BT = kT.i, kT.forward(kT.len - oT)
          }
        }
      }
    }

    function HT(TT, oT) {
      let IT = [],
        iT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        zT = new nT(TT),
        kT = new nT(oT),
        WT = 0;
      for (let XT = !1;;) {
        if (++WT > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (zT.done && kT.done) return iT ? UT.createSet(IT, iT) : JT.create(IT);
        if (0 == zT.ins) aT(IT, zT.len, 0, XT), zT.next();
        else if (0 != kT.len || kT.done) {
          if (zT.done || kT.done) throw new Error("Mismatched change set lengths");
          {
            let TT = Math.min(zT.len2, kT.len),
              oT = IT.length;
            if (-1 == zT.ins) {
              let oT = -1 == kT.ins ? -1 : kT.off ? 0 : kT.ins;
              aT(IT, TT, oT, XT), iT && oT && YT(iT, IT, kT.text)
            } else - 1 == kT.ins ? (aT(IT, zT.off ? 0 : zT.len, TT, XT), iT && YT(iT, IT, zT.textBit(TT))) : (aT(IT, zT.off ? 0 : zT.len, kT.off ? 0 : kT.ins, XT), iT && !kT.off && YT(iT, IT, kT.text));
            XT = (zT.ins > TT || kT.ins >= 0 && kT.len > TT) && (XT || IT.length > oT), zT.forward2(TT), kT.forward(TT)
          }
        } else aT(IT, 0, kT.ins, XT), iT && YT(iT, IT, kT.text), kT.next()
      }
    }
    class nT {
      constructor(TT) {
        this.set = TT, this.i = 0, this.next()
      }
      next() {
        let {
          sections: TT
        } = this.set;
        this.i < TT.length ? (this.len = TT[this.i++], this.ins = TT[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: TT
        } = this.set, oT = this.i - 2 >> 1;
        return oT >= TT.length ? KT.empty : TT[oT]
      }
      textBit(TT) {
        let {
          inserted: oT
        } = this.set, IT = this.i - 2 >> 1;
        return IT >= oT.length && !TT ? KT.empty : oT[IT].slice(this.off, null == TT ? void 0 : this.off + TT)
      }
      forward(TT) {
        TT == this.len ? this.next() : (this.len -= TT, this.off += TT)
      }
      forward2(TT) {
        -1 == this.ins ? this.forward(TT) : TT == this.ins ? this.next() : (this.ins -= TT, this.off += TT)
      }
    }
    class qT {
      constructor(TT, oT, IT) {
        this.from = TT, this.to = oT, this.flags = IT
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
        let TT = 7 & this.flags;
        return 7 == TT ? null : TT
      }
      get goalColumn() {
        let TT = this.flags >> 6;
        return 16777215 == TT ? void 0 : TT
      }
      map(TT) {
        let oT, IT, iT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? oT = IT = TT.mapPos(this.from, iT) : (oT = TT.mapPos(this.from, 1), IT = TT.mapPos(this.to, -1)), oT == this.from && IT == this.to ? this : new qT(oT, IT, this.flags)
      }
      extend(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (TT <= this.anchor && oT >= this.anchor) return ZT.range(TT, oT, void 0, void 0, IT);
        let iT = Math.abs(TT - this.anchor) > Math.abs(oT - this.anchor) ? TT : oT;
        return ZT.range(this.anchor, iT, void 0, void 0, IT)
      }
      eq(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == TT.anchor && this.head == TT.head && this.goalColumn == TT.goalColumn && (!oT || !this.empty || this.assoc == TT.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(TT) {
        if (!TT || "number" != typeof TT.anchor || "number" != typeof TT.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return ZT.range(TT.anchor, TT.head)
      }
      static create(TT, oT, IT) {
        return new qT(TT, oT, IT)
      }
    }
    class ZT {
      constructor(TT, oT) {
        this.ec = TT, this.mainIndex = oT
      }
      map(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return TT.empty ? this : ZT.create(this.ec.map((IT => IT.map(TT, oT))), this.mainIndex)
      }
      eq(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.ec.length != TT.ec.length || this.mainIndex != TT.mainIndex) return !1;
        for (let IT = 0; IT < this.ec.length; IT++)
          if (!this.ec[IT].eq(TT.ec[IT], oT)) return !1;
        return !0
      }
      get main() {
        return this.ec[this.mainIndex]
      }
      asSingle() {
        return 1 == this.ec.length ? this : new ZT([this.main], 0)
      }
      addRange(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return ZT.create([TT].concat(this.ec), oT ? 0 : this.mainIndex + 1)
      }
      replaceRange(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          IT = this.ec.slice();
        return IT[oT] = TT, ZT.create(IT, this.mainIndex)
      }
      toJSON() {
        return {
          ec: this.ec.map((TT => TT.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(TT) {
        if (!TT || !Array.isArray(TT.ec) || "number" != typeof TT.main || TT.main >= TT.ec.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new ZT(TT.ec.map((TT => qT.fromJSON(TT))), TT.main)
      }
      static single(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        return new ZT([ZT.range(TT, oT)], 0)
      }
      static create(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == TT.length) throw new RangeError("A selection needs at least one range");
        for (let IT = 0, iT = 0; iT < TT.length; iT++) {
          let zT = TT[iT];
          if (zT.empty ? zT.from <= IT : zT.from < IT) return ZT.normalized(TT.slice(), oT);
          IT = zT.to
        }
        return new ZT(TT, oT)
      }
      static cursor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        return qT.create(TT, TT, (0 == oT ? 0 : oT < 0 ? 8 : 16) | (null == IT ? 7 : Math.min(6, IT)) | (null !== iT && void 0 !== iT ? iT : 16777215) << 6)
      }
      static range(TT, oT, IT, iT, zT) {
        let kT = (null !== IT && void 0 !== IT ? IT : 16777215) << 6 | (null == iT ? 7 : Math.min(6, iT));
        return zT || TT == oT || (zT = oT < TT ? 1 : -1), oT < TT ? qT.create(oT, TT, 48 | kT) : qT.create(TT, oT, (zT ? zT < 0 ? 8 : 16 : 0) | kT)
      }
      static normalized(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = TT[oT];
        TT.sort(((TT, oT) => TT.from - oT.from)), oT = TT.indexOf(IT);
        for (let iT = 1; iT < TT.length; iT++) {
          let IT = TT[iT],
            zT = TT[iT - 1];
          if (IT.empty ? IT.from <= zT.to : IT.from < zT.to) {
            let kT = zT.from,
              WT = Math.max(IT.to, zT.to);
            iT <= oT && oT--, TT.splice(--iT, 2, IT.anchor > IT.head ? ZT.range(WT, kT) : ZT.range(kT, WT))
          }
        }
        return new ZT(TT, oT)
      }
    }

    function lT(TT, oT) {
      for (let IT of TT.ec)
        if (IT.to > oT) throw new RangeError("Selection points outside of document")
    }
    let sT = 0;
    class tT {
      constructor(TT, oT, IT, iT, zT) {
        this.combine = TT, this.compareInput = oT, this.compare = IT, this.isStatic = iT, this.id = sT++, this.default = TT([]), this.extensions = "function" == typeof zT ? zT(this) : zT
      }
      get reader() {
        return this
      }
      static define() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new tT(TT.combine || (TT => TT), TT.compareInput || ((TT, oT) => TT === oT), TT.compare || (TT.combine ? (TT, oT) => TT === oT : GT), !!TT.static, TT.enables)
      }
      of(TT) {
        return new pT([], this, 0, TT)
      }
      compute(TT, oT) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new pT(TT, this, 1, oT)
      }
      computeN(TT, oT) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new pT(TT, this, 2, oT)
      }
      from(TT, oT) {
        return oT || (oT = TT => TT), this.compute([TT], (IT => oT(IT.field(TT))))
      }
    }

    function GT(TT, oT) {
      return TT == oT || TT.length == oT.length && TT.every(((TT, IT) => TT === oT[IT]))
    }
    class pT {
      constructor(TT, oT, IT, iT) {
        this.dependencies = TT, this.facet = oT, this.type = IT, this.value = iT, this.id = sT++
      }
      dynamicSlot(TT) {
        var oT;
        let IT = this.value,
          iT = this.facet.compareInput,
          zT = this.id,
          kT = TT[zT] >> 1,
          WT = 2 == this.type,
          XT = !1,
          BT = !1,
          FT = [];
        for (let ST of this.dependencies) "doc" == ST ? XT = !0 : "selection" == ST ? BT = !0 : 0 == (1 & (null !== (oT = TT[ST.id]) && void 0 !== oT ? oT : 1)) && FT.push(TT[ST.id]);
        return {
          create: TT => (TT.values[kT] = IT(TT), 1),
          update(TT, oT) {
            if (XT && oT.docChanged || BT && (oT.docChanged || oT.selection) || yT(TT, FT)) {
              let oT = IT(TT);
              if (WT ? !bT(oT, TT.values[kT], iT) : !iT(oT, TT.values[kT])) return TT.values[kT] = oT, 1
            }
            return 0
          },
          reconfigure: (TT, oT) => {
            let XT, BT = oT.config.address[zT];
            if (null != BT) {
              let zT = So(oT, BT);
              if (this.dependencies.every((IT => IT instanceof tT ? oT.facet(IT) === TT.facet(IT) : !(IT instanceof dT) || oT.field(IT, !1) == TT.field(IT, !1))) || (WT ? bT(XT = IT(TT), zT, iT) : iT(XT = IT(TT), zT))) return TT.values[kT] = zT, 0
            } else XT = IT(TT);
            return TT.values[kT] = XT, 1
          }
        }
      }
    }

    function bT(TT, oT, IT) {
      if (TT.length != oT.length) return !1;
      for (let iT = 0; iT < TT.length; iT++)
        if (!IT(TT[iT], oT[iT])) return !1;
      return !0
    }

    function yT(TT, oT) {
      let IT = !1;
      for (let iT of oT) 1 & Fo(TT, iT) && (IT = !0);
      return IT
    }

    function NT(TT, oT, IT) {
      let iT = IT.map((oT => TT[oT.id])),
        zT = IT.map((TT => TT.type)),
        kT = iT.filter((TT => !(1 & TT))),
        WT = TT[oT.id] >> 1;

      function XT(TT) {
        let IT = [];
        for (let oT = 0; oT < iT.length; oT++) {
          let kT = So(TT, iT[oT]);
          if (2 == zT[oT])
            for (let TT of kT) IT.push(TT);
          else IT.push(kT)
        }
        return oT.combine(IT)
      }
      return {
        create(TT) {
          for (let oT of iT) Fo(TT, oT);
          return TT.values[WT] = XT(TT), 1
        },
        update(TT, IT) {
          if (!yT(TT, kT)) return 0;
          let iT = XT(TT);
          return oT.compare(iT, TT.values[WT]) ? 0 : (TT.values[WT] = iT, 1)
        },
        reconfigure(TT, zT) {
          let kT = yT(TT, iT),
            BT = zT.config.facets[oT.id],
            FT = zT.facet(oT);
          if (BT && !kT && GT(IT, BT)) return TT.values[WT] = FT, 0;
          let ST = XT(TT);
          return oT.compare(ST, FT) ? (TT.values[WT] = FT, 0) : (TT.values[WT] = ST, 1)
        }
      }
    }
    const PT = tT.define({
      static: !0
    });
    class dT {
      constructor(TT, oT, IT, iT, zT) {
        this.id = TT, this.createF = oT, this.updateF = IT, this.compareF = iT, this.spec = zT, this.provides = void 0
      }
      static define(TT) {
        let oT = new dT(sT++, TT.create, TT.update, TT.compare || ((TT, oT) => TT === oT), TT);
        return TT.provide && (oT.provides = TT.provide(oT)), oT
      }
      create(TT) {
        let oT = TT.facet(PT).find((TT => TT.field == this));
        return ((null === oT || void 0 === oT ? void 0 : oT.create) || this.createF)(TT)
      }
      slot(TT) {
        let oT = TT[this.id] >> 1;
        return {
          create: TT => (TT.values[oT] = this.create(TT), 1),
          update: (TT, IT) => {
            let iT = TT.values[oT],
              zT = this.updateF(iT, IT);
            return this.compareF(iT, zT) ? 0 : (TT.values[oT] = zT, 1)
          },
          reconfigure: (TT, IT) => {
            let iT, zT = TT.facet(PT),
              kT = IT.facet(PT);
            return (iT = zT.find((TT => TT.field == this))) && iT != kT.find((TT => TT.field == this)) ? (TT.values[oT] = iT.create(TT), 1) : null != IT.config.address[this.id] ? (TT.values[oT] = IT.field(this), 0) : (TT.values[oT] = this.create(TT), 1)
          }
        }
      }
      init(TT) {
        return [this, PT.of({
          field: this,
          create: TT
        })]
      }
      get extension() {
        return this
      }
    }
    const VT = 4,
      To = 3,
      oo = 2,
      Io = 1;

    function io(TT) {
      return oT => new ko(oT, TT)
    }
    const zo = {
      highest: io(0),
      high: io(Io),
      default: io(oo),
      low: io(To),
      lowest: io(VT)
    };
    class ko {
      constructor(TT, oT) {
        this.inner = TT, this.prec = oT
      }
    }
    class Wo {
      of(TT) {
        return new Xo(this, TT)
      }
      reconfigure(TT) {
        return Wo.reconfigure.of({
          compartment: this,
          extension: TT
        })
      }
      get(TT) {
        return TT.config.compartments.get(this)
      }
    }
    class Xo {
      constructor(TT, oT) {
        this.compartment = TT, this.inner = oT
      }
    }
    class Bo {
      constructor(TT, oT, IT, iT, zT, kT) {
        for (this.base = TT, this.compartments = oT, this.dynamicSlots = IT, this.address = iT, this.staticValues = zT, this.facets = kT, this.statusTemplate = []; this.statusTemplate.length < IT.length;) this.statusTemplate.push(0)
      }
      staticFacet(TT) {
        let oT = this.address[TT.id];
        return null == oT ? TT.default : this.staticValues[oT >> 1]
      }
      static resolve(TT, oT, IT) {
        let iT = [],
          zT = Object.create(null),
          kT = new Map;
        for (let DT of function(TT, oT, IT) {
            let iT = [
                [],
                [],
                [],
                [],
                []
              ],
              zT = new Map;

            function kT(TT, WT) {
              let XT = zT.get(TT);
              if (null != XT) {
                if (XT <= WT) return;
                let oT = iT[XT].indexOf(TT);
                oT > -1 && iT[XT].splice(oT, 1), TT instanceof Xo && IT.delete(TT.compartment)
              }
              if (zT.set(TT, WT), Array.isArray(TT))
                for (let oT of TT) kT(oT, WT);
              else if (TT instanceof Xo) {
                if (IT.has(TT.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let iT = oT.get(TT.compartment) || TT.inner;
                IT.set(TT.compartment, iT), kT(iT, WT)
              } else if (TT instanceof ko) kT(TT.inner, TT.prec);
              else if (TT instanceof dT) iT[WT].push(TT), TT.provides && kT(TT.provides, WT);
              else if (TT instanceof pT) iT[WT].push(TT), TT.facet.extensions && kT(TT.facet.extensions, oo);
              else {
                let oT = TT.extension;
                if (!oT) throw new Error(`Unrecognized extension value in extension set (${TT}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                kT(oT, WT)
              }
            }
            return kT(TT, oo), iT.reduce(((TT, oT) => TT.concat(oT)))
          }(TT, oT, kT)) DT instanceof dT ? iT.push(DT) : (zT[DT.facet.id] || (zT[DT.facet.id] = [])).push(DT);
        let WT = Object.create(null),
          XT = [],
          BT = [];
        for (let DT of iT) WT[DT.id] = BT.length << 1, BT.push((TT => DT.slot(TT)));
        let FT = null === IT || void 0 === IT ? void 0 : IT.config.facets;
        for (let DT in zT) {
          let TT = zT[DT],
            oT = TT[0].facet,
            iT = FT && FT[DT] || [];
          if (TT.every((TT => 0 == TT.type)))
            if (WT[oT.id] = XT.length << 1 | 1, GT(iT, TT)) XT.push(IT.facet(oT));
            else {
              let iT = oT.combine(TT.map((TT => TT.value)));
              XT.push(IT && oT.compare(iT, IT.facet(oT)) ? IT.facet(oT) : iT)
            }
          else {
            for (let oT of TT) 0 == oT.type ? (WT[oT.id] = XT.length << 1 | 1, XT.push(oT.value)) : (WT[oT.id] = BT.length << 1, BT.push((TT => oT.dynamicSlot(TT))));
            WT[oT.id] = BT.length << 1, BT.push((IT => NT(IT, oT, TT)))
          }
        }
        let ST = BT.map((TT => TT(WT)));
        return new Bo(TT, kT, ST, WT, XT, zT)
      }
    }

    function Fo(TT, oT) {
      if (1 & oT) return 2;
      let IT = oT >> 1,
        iT = TT.status[IT];
      if (4 == iT) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & iT) return iT;
      TT.status[IT] = 4;
      let zT = TT.computeSlot(TT, TT.config.dynamicSlots[IT]);
      return TT.status[IT] = 2 | zT
    }

    function So(TT, oT) {
      return 1 & oT ? TT.config.staticValues[oT >> 1] : TT.values[oT >> 1]
    }
    const Do = tT.define(),
      Lo = tT.define({
        combine: TT => TT.some((TT => TT)),
        static: !0
      }),
      xo = tT.define({
        combine: TT => TT.length ? TT[0] : void 0,
        static: !0
      }),
      co = tT.define(),
      Ko = tT.define(),
      Mo = tT.define(),
      ro = tT.define({
        combine: TT => !!TT.length && TT[0]
      });
    class Ao {
      constructor(TT, oT) {
        this.type = TT, this.value = oT
      }
      static define() {
        return new go
      }
    }
    class go {
      of(TT) {
        return new Ao(this, TT)
      }
    }
    class ho {
      constructor(TT) {
        this.map = TT
      }
      of(TT) {
        return new wo(this, TT)
      }
    }
    class wo {
      constructor(TT, oT) {
        this.type = TT, this.value = oT
      }
      map(TT) {
        let oT = this.type.map(this.value, TT);
        return void 0 === oT ? void 0 : oT == this.value ? this : new wo(this.type, oT)
      }
      is(TT) {
        return this.type == TT
      }
      static define() {
        return new ho((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (TT => TT))
      }
      static mapEffects(TT, oT) {
        if (!TT.length) return TT;
        let IT = [];
        for (let iT of TT) {
          let TT = iT.map(oT);
          TT && IT.push(TT)
        }
        return IT
      }
    }
    wo.reconfigure = wo.define(), wo.appendConfig = wo.define();
    class mo {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.startState = TT, this.changes = oT, this.selection = IT, this.effects = iT, this.annotations = zT, this.scrollIntoView = kT, this._doc = null, this._state = null, IT && lT(IT, oT.newLength), zT.some((TT => TT.type == mo.time)) || (this.annotations = zT.concat(mo.time.of(Date.now())))
      }
      static create(TT, oT, IT, iT, zT, kT) {
        return new mo(TT, oT, IT, iT, zT, kT)
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
      annotation(TT) {
        for (let oT of this.annotations)
          if (oT.type == TT) return oT.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(TT) {
        let oT = this.annotation(mo.userEvent);
        return !(!oT || !(oT == TT || oT.length > TT.length && oT.slice(0, TT.length) == TT && "." == oT[TT.length]))
      }
    }

    function eo(TT, oT) {
      let IT = [];
      for (let iT = 0, zT = 0;;) {
        let kT, WT;
        if (iT < TT.length && (zT == oT.length || oT[zT] >= TT[iT])) kT = TT[iT++], WT = TT[iT++];
        else {
          if (!(zT < oT.length)) return IT;
          kT = oT[zT++], WT = oT[zT++]
        }!IT.length || IT[IT.length - 1] < kT ? IT.push(kT, WT) : IT[IT.length - 1] < WT && (IT[IT.length - 1] = WT)
      }
    }

    function Ro(TT, oT, IT) {
      var iT;
      let zT, kT, WT;
      return IT ? (zT = oT.changes, kT = UT.empty(oT.changes.length), WT = TT.changes.compose(oT.changes)) : (zT = oT.changes.map(TT.changes), kT = TT.changes.mapDesc(oT.changes, !0), WT = TT.changes.compose(zT)), {
        changes: WT,
        selection: oT.selection ? oT.selection.map(kT) : null === (iT = TT.selection) || void 0 === iT ? void 0 : iT.map(zT),
        effects: wo.mapEffects(TT.effects, zT).concat(wo.mapEffects(oT.effects, kT)),
        annotations: TT.annotations.length ? TT.annotations.concat(oT.annotations) : oT.annotations,
        scrollIntoView: TT.scrollIntoView || oT.scrollIntoView
      }
    }

    function uo(TT, oT, IT) {
      let iT = oT.selection,
        zT = fo(oT.annotations);
      return oT.userEvent && (zT = zT.concat(mo.userEvent.of(oT.userEvent))), {
        changes: oT.changes instanceof UT ? oT.changes : UT.of(oT.changes || [], IT, TT.facet(xo)),
        selection: iT && (iT instanceof ZT ? iT : ZT.single(iT.anchor, iT.head)),
        effects: fo(oT.effects),
        annotations: zT,
        scrollIntoView: !!oT.scrollIntoView
      }
    }

    function vo(TT, oT, IT) {
      let iT = uo(TT, oT.length ? oT[0] : {}, TT.doc.length);
      oT.length && !1 === oT[0].filter && (IT = !1);
      for (let kT = 1; kT < oT.length; kT++) {
        !1 === oT[kT].filter && (IT = !1);
        let zT = !!oT[kT].sequential;
        iT = Ro(iT, uo(TT, oT[kT], zT ? iT.changes.newLength : TT.doc.length), zT)
      }
      let zT = mo.create(TT, iT.changes, iT.selection, iT.effects, iT.annotations, iT.scrollIntoView);
      return function(TT) {
        let oT = TT.startState,
          IT = oT.facet(Mo),
          iT = TT;
        for (let zT = IT.length - 1; zT >= 0; zT--) {
          let kT = IT[zT](TT);
          kT && Object.keys(kT).length && (iT = Ro(iT, uo(oT, kT, TT.changes.newLength), !0))
        }
        return iT == TT ? TT : mo.create(oT, TT.changes, TT.selection, iT.effects, iT.annotations, iT.scrollIntoView)
      }(IT ? function(TT) {
        let oT = TT.startState,
          IT = !0;
        for (let zT of oT.facet(co)) {
          let oT = zT(TT);
          if (!1 === oT) {
            IT = !1;
            break
          }
          Array.isArray(oT) && (IT = !0 === IT ? oT : eo(IT, oT))
        }
        if (!0 !== IT) {
          let iT, zT;
          if (!1 === IT) zT = TT.changes.invertedDesc, iT = UT.empty(oT.doc.length);
          else {
            let oT = TT.changes.filter(IT);
            iT = oT.changes, zT = oT.filtered.mapDesc(oT.changes).invertedDesc
          }
          TT = mo.create(oT, iT, TT.selection && TT.selection.map(zT), wo.mapEffects(TT.effects, zT), TT.annotations, TT.scrollIntoView)
        }
        let iT = oT.facet(Ko);
        for (let zT = iT.length - 1; zT >= 0; zT--) {
          let IT = iT[zT](TT);
          TT = IT instanceof mo ? IT : Array.isArray(IT) && 1 == IT.length && IT[0] instanceof mo ? IT[0] : vo(oT, fo(IT), !1)
        }
        return TT
      }(zT) : zT)
    }
    mo.time = Ao.define(), mo.userEvent = Ao.define(), mo.addToHistory = Ao.define(), mo.remote = Ao.define();
    const Eo = [];

    function fo(TT) {
      return null == TT ? Eo : Array.isArray(TT) ? TT : [TT]
    }
    var Co = function(TT) {
      return TT[TT.Word = 0] = "Word", TT[TT.Space = 1] = "Space", TT[TT.Other = 2] = "Other", TT
    }(Co || (Co = {}));
    const jo = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Jo;
    try {
      Jo = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (zI) {}

    function Uo(TT) {
      return oT => {
        if (!/\S/.test(oT)) return Co.Space;
        if (function(TT) {
            if (Jo) return Jo.test(TT);
            for (let oT = 0; oT < TT.length; oT++) {
              let IT = TT[oT];
              if (/\w/.test(IT) || IT > "\x80" && (IT.toUpperCase() != IT.toLowerCase() || jo.test(IT))) return !0
            }
            return !1
          }(oT)) return Co.Word;
        for (let IT = 0; IT < TT.length; IT++)
          if (oT.indexOf(TT[IT]) > -1) return Co.Word;
        return Co.Other
      }
    }
    class ao {
      constructor(TT, oT, IT, iT, zT, kT) {
        this.config = TT, this.doc = oT, this.selection = IT, this.values = iT, this.status = TT.statusTemplate.slice(), this.computeSlot = zT, kT && (kT._state = this);
        for (let WT = 0; WT < this.config.dynamicSlots.length; WT++) Fo(this, WT << 1);
        this.computeSlot = null
      }
      field(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          IT = this.config.address[TT.id];
        if (null != IT) return Fo(this, IT), So(this, IT);
        if (oT) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        return vo(this, oT, !0)
      }
      applyTransaction(TT) {
        let oT, IT = this.config,
          {
            base: iT,
            compartments: zT
          } = IT;
        for (let WT of TT.effects) WT.is(Wo.reconfigure) ? (IT && (zT = new Map, IT.compartments.forEach(((TT, oT) => zT.set(oT, TT))), IT = null), zT.set(WT.value.compartment, WT.value.extension)) : WT.is(wo.reconfigure) ? (IT = null, iT = WT.value) : WT.is(wo.appendConfig) && (IT = null, iT = fo(iT).concat(WT.value));
        if (IT) oT = TT.startState.values.slice();
        else {
          IT = Bo.resolve(iT, zT, this), oT = new ao(IT, this.doc, this.selection, IT.dynamicSlots.map((() => null)), ((TT, oT) => oT.reconfigure(TT, this)), null).values
        }
        let kT = TT.startState.facet(Lo) ? TT.newSelection : TT.newSelection.asSingle();
        new ao(IT, TT.newDoc, kT, oT, ((oT, IT) => IT.update(oT, TT)), TT)
      }
      replaceSelection(TT) {
        return "string" == typeof TT && (TT = this.toText(TT)), this.changeByRange((oT => ({
          changes: {
            from: oT.from,
            to: oT.to,
            insert: TT
          },
          range: ZT.cursor(oT.from + TT.length)
        })))
      }
      changeByRange(TT) {
        let oT = this.selection,
          IT = TT(oT.ec[0]),
          iT = this.changes(IT.changes),
          zT = [IT.range],
          kT = fo(IT.effects);
        for (let WT = 1; WT < oT.ec.length; WT++) {
          let IT = TT(oT.ec[WT]),
            XT = this.changes(IT.changes),
            BT = XT.map(iT);
          for (let TT = 0; TT < WT; TT++) zT[TT] = zT[TT].map(BT);
          let FT = iT.mapDesc(XT, !0);
          zT.push(IT.range.map(FT)), iT = iT.compose(BT), kT = wo.mapEffects(kT, BT).concat(wo.mapEffects(fo(IT.effects), FT))
        }
        return {
          changes: iT,
          selection: ZT.create(zT, oT.mainIndex),
          effects: kT
        }
      }
      changes() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return TT instanceof UT ? TT : UT.of(TT, this.doc.length, this.facet(ao.lineSeparator))
      }
      toText(TT) {
        return KT.of(TT.split(this.facet(ao.lineSeparator) || CT))
      }
      sliceDoc() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(TT, oT, this.lineBreak)
      }
      facet(TT) {
        let oT = this.config.address[TT.id];
        return null == oT ? TT.default : (Fo(this, oT), So(this, oT))
      }
      toJSON(TT) {
        let oT = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (TT)
          for (let IT in TT) {
            let iT = TT[IT];
            iT instanceof dT && null != this.config.address[iT.id] && (oT[IT] = iT.spec.toJSON(this.field(TT[IT]), this))
          }
        return oT
      }
      static fromJSON(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          IT = arguments.length > 2 ? arguments[2] : void 0;
        if (!TT || "string" != typeof TT.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let iT = [];
        if (IT)
          for (let zT in IT)
            if (Object.prototype.hasOwnProperty.call(TT, zT)) {
              let oT = IT[zT],
                kT = TT[zT];
              iT.push(oT.init((TT => oT.spec.fromJSON(kT, TT))))
            } return ao.create({
          doc: TT.doc,
          selection: ZT.fromJSON(TT.selection),
          extensions: oT.extensions ? iT.concat([oT.extensions]) : iT
        })
      }
      static create() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          oT = Bo.resolve(TT.extensions || [], new Map),
          IT = TT.doc instanceof KT ? TT.doc : KT.of((TT.doc || "").split(oT.staticFacet(ao.lineSeparator) || CT)),
          iT = TT.selection ? TT.selection instanceof ZT ? TT.selection : ZT.single(TT.selection.anchor, TT.selection.head) : ZT.single(0);
        return lT(iT, IT.length), oT.staticFacet(Lo) || (iT = iT.asSingle()), new ao(oT, IT, iT, oT.dynamicSlots.map((() => null)), ((TT, oT) => oT.create(TT)), null)
      }
      get tabSize() {
        return this.facet(ao.tabSize)
      }
      get lineBreak() {
        return this.facet(ao.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(ro)
      }
      phrase(TT) {
        for (var oT = arguments.length, IT = new Array(oT > 1 ? oT - 1 : 0), iT = 1; iT < oT; iT++) IT[iT - 1] = arguments[iT];
        for (let zT of this.facet(ao.phrases))
          if (Object.prototype.hasOwnProperty.call(zT, TT)) {
            TT = zT[TT];
            break
          } return IT.length && (TT = TT.replace(/\$(\$|\d*)/g, ((TT, oT) => {
          if ("$" == oT) return "$";
          let iT = +(oT || 1);
          return !iT || iT > IT.length ? TT : IT[iT - 1]
        }))), TT
      }
      languageDataAt(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          iT = [];
        for (let zT of this.facet(Do))
          for (let kT of zT(this, oT, IT)) Object.prototype.hasOwnProperty.call(kT, TT) && iT.push(kT[TT]);
        return iT
      }
      charCategorizer(TT) {
        let oT = this.languageDataAt("wordChars", TT);
        return Uo(oT.length ? oT[0] : "")
      }
      wordAt(TT) {
        let {
          text: oT,
          from: IT,
          length: iT
        } = this.doc.lineAt(TT), zT = this.charCategorizer(TT), kT = TT - IT, WT = TT - IT;
        for (; kT > 0;) {
          let TT = uT(oT, kT, !1);
          if (zT(oT.slice(TT, kT)) != Co.Word) break;
          kT = TT
        }
        for (; WT < iT;) {
          let TT = uT(oT, WT);
          if (zT(oT.slice(WT, TT)) != Co.Word) break;
          WT = TT
        }
        return kT == WT ? null : ZT.range(kT + IT, WT + IT)
      }
    }

    function Yo(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        iT = {};
      for (let zT of TT)
        for (let TT of Object.keys(zT)) {
          let oT = zT[TT],
            kT = iT[TT];
          if (void 0 === kT) iT[TT] = oT;
          else if (kT === oT || void 0 === oT);
          else {
            if (!Object.hasOwnProperty.call(IT, TT)) throw new Error("Config merge conflict for field " + TT);
            iT[TT] = IT[TT](kT, oT)
          }
        }
      for (let zT in oT) void 0 === iT[zT] && (iT[zT] = oT[zT]);
      return iT
    }
    ao.allowMultipleSelections = Lo, ao.tabSize = tT.define({
      combine: TT => TT.length ? TT[0] : 4
    }), ao.lineSeparator = xo, ao.readOnly = ro, ao.phrases = tT.define({
      compare(TT, oT) {
        let IT = Object.keys(TT),
          iT = Object.keys(oT);
        return IT.length == iT.length && IT.every((IT => TT[IT] == oT[IT]))
      }
    }), ao.languageData = Do, ao.changeFilter = co, ao.transactionFilter = Ko, ao.transactionExtender = Mo, Wo.reconfigure = wo.define();
    class Qo {
      eq(TT) {
        return this == TT
      }
      range(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        return Ho.create(TT, oT, this)
      }
    }

    function Oo(TT, oT) {
      return TT == oT || TT.constructor == oT.constructor && TT.eq(oT)
    }
    Qo.prototype.startSide = Qo.prototype.endSide = 0, Qo.prototype.point = !1, Qo.prototype.mapMode = jT.TrackDel;
    class Ho {
      constructor(TT, oT, IT) {
        this.from = TT, this.to = oT, this.value = IT
      }
      static create(TT, oT, IT) {
        return new Ho(TT, oT, IT)
      }
    }

    function no(TT, oT) {
      return TT.from - oT.from || TT.value.startSide - oT.value.startSide
    }
    class qo {
      constructor(TT, oT, IT, iT) {
        this.from = TT, this.to = oT, this.value = IT, this.yIT = iT
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = IT ? this.to : this.from;
        for (let kT = iT, WT = zT.length;;) {
          if (kT == WT) return kT;
          let iT = kT + WT >> 1,
            XT = zT[iT] - TT || (IT ? this.value[iT].endSide : this.value[iT].startSide) - oT;
          if (iT == kT) return XT >= 0 ? kT : WT;
          XT >= 0 ? WT = iT : kT = iT + 1
        }
      }
      between(TT, oT, IT, iT) {
        for (let zT = this.findIndex(oT, -1e9, !0), kT = this.findIndex(IT, 1e9, !1, zT); zT < kT; zT++)
          if (!1 === iT(this.from[zT] + TT, this.to[zT] + TT, this.value[zT])) return !1
      }
      map(TT, oT) {
        let IT = [],
          iT = [],
          zT = [],
          kT = -1,
          WT = -1;
        for (let XT = 0; XT < this.value.length; XT++) {
          let BT, FT, ST = this.value[XT],
            DT = this.from[XT] + TT,
            LT = this.to[XT] + TT;
          if (DT == LT) {
            let TT = oT.mapPos(DT, ST.startSide, ST.mapMode);
            if (null == TT) continue;
            if (BT = FT = TT, ST.startSide != ST.endSide && (FT = oT.mapPos(DT, ST.endSide), FT < BT)) continue
          } else if (BT = oT.mapPos(DT, ST.startSide), FT = oT.mapPos(LT, ST.endSide), BT > FT || BT == FT && ST.startSide > 0 && ST.endSide <= 0) continue;
          (FT - BT || ST.endSide - ST.startSide) < 0 || (kT < 0 && (kT = BT), ST.point && (WT = Math.max(WT, FT - BT)), IT.push(ST), iT.push(BT - kT), zT.push(FT - kT))
        }
        return {
          mapped: IT.length ? new qo(iT, zT, IT, WT) : null,
          pos: kT
        }
      }
    }
    class Zo {
      constructor(TT, oT, IT, iT) {
        this.chunkPos = TT, this.chunk = oT, this.nextLayer = IT, this.yIT = iT
      }
      static create(TT, oT, IT, iT) {
        return new Zo(TT, oT, IT, iT)
      }
      get length() {
        let TT = this.chunk.length - 1;
        return TT < 0 ? 0 : Math.max(this.chunkEnd(TT), this.nextLayer.length)
      }
      get size() {
        if (this.Mc) return 0;
        let TT = this.nextLayer.size;
        for (let oT of this.chunk) TT += oT.value.length;
        return TT
      }
      chunkEnd(TT) {
        return this.chunkPos[TT] + this.chunk[TT].length
      }
      update(TT) {
        let {
          add: oT = [],
          sort: IT = !1,
          filterFrom: iT = 0,
          filterTo: zT = this.length
        } = TT, kT = TT.filter;
        if (0 == oT.length && !kT) return this;
        if (IT && (oT = oT.slice().sort(no)), this.Mc) return oT.length ? Zo.of(oT) : this;
        let WT = new Go(this, null, -1).goto(0),
          XT = 0,
          BT = [],
          FT = new so;
        for (; WT.value || XT < oT.length;)
          if (XT < oT.length && (WT.from - oT[XT].from || WT.startSide - oT[XT].value.startSide) >= 0) {
            let TT = oT[XT++];
            FT.addInner(TT.from, TT.to, TT.value) || BT.push(TT)
          } else 1 == WT.rangeIndex && WT.chunkIndex < this.chunk.length && (XT == oT.length || this.chunkEnd(WT.chunkIndex) < oT[XT].from) && (!kT || iT > this.chunkEnd(WT.chunkIndex) || zT < this.chunkPos[WT.chunkIndex]) && FT.addChunk(this.chunkPos[WT.chunkIndex], this.chunk[WT.chunkIndex]) ? WT.nextChunk() : ((!kT || iT > WT.to || zT < WT.from || kT(WT.from, WT.to, WT.value)) && (FT.addInner(WT.from, WT.to, WT.value) || BT.push(Ho.create(WT.from, WT.to, WT.value))), WT.next());
        return FT.finishInner(this.nextLayer.Mc && !BT.length ? Zo.empty : this.nextLayer.update({
          add: BT,
          filter: kT,
          filterFrom: iT,
          filterTo: zT
        }))
      }
      map(TT) {
        if (TT.empty || this.Mc) return this;
        let oT = [],
          IT = [],
          iT = -1;
        for (let kT = 0; kT < this.chunk.length; kT++) {
          let zT = this.chunkPos[kT],
            WT = this.chunk[kT],
            XT = TT.touchesRange(zT, zT + WT.length);
          if (!1 === XT) iT = Math.max(iT, WT.yIT), oT.push(WT), IT.push(TT.mapPos(zT));
          else if (!0 === XT) {
            let {
              mapped: kT,
              pos: XT
            } = WT.map(zT, TT);
            kT && (iT = Math.max(iT, kT.yIT), oT.push(kT), IT.push(XT))
          }
        }
        let zT = this.nextLayer.map(TT);
        return 0 == oT.length ? zT : new Zo(IT, oT, zT || Zo.empty, iT)
      }
      between(TT, oT, IT) {
        if (!this.Mc) {
          for (let iT = 0; iT < this.chunk.length; iT++) {
            let zT = this.chunkPos[iT],
              kT = this.chunk[iT];
            if (oT >= zT && TT <= zT + kT.length && !1 === kT.between(zT, TT - zT, oT - zT, IT)) return
          }
          this.nextLayer.between(TT, oT, IT)
        }
      }
      iter() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return po.from([this]).goto(TT)
      }
      get Mc() {
        return this.nextLayer == this
      }
      static iter(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return po.from(TT).goto(oT)
      }
      static compare(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          kT = TT.filter((TT => TT.yIT > 0 || !TT.Mc && TT.yIT >= zT)),
          WT = oT.filter((TT => TT.yIT > 0 || !TT.Mc && TT.yIT >= zT)),
          XT = to(kT, WT, IT),
          BT = new yo(kT, XT, zT),
          FT = new yo(WT, XT, zT);
        IT.iterGaps(((TT, oT, IT) => No(BT, TT, FT, oT, IT, iT))), IT.empty && 0 == IT.length && No(BT, 0, FT, 0, 0, iT)
      }
      static eq(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        null == iT && (iT = 999999999);
        let zT = TT.filter((TT => !TT.Mc && oT.indexOf(TT) < 0)),
          kT = oT.filter((oT => !oT.Mc && TT.indexOf(oT) < 0));
        if (zT.length != kT.length) return !1;
        if (!zT.length) return !0;
        let WT = to(zT, kT),
          XT = new yo(zT, WT, 0).goto(IT),
          BT = new yo(kT, WT, 0).goto(IT);
        for (;;) {
          if (XT.to != BT.to || !Po(XT.active, BT.active) || XT.point && (!BT.point || !Oo(XT.point, BT.point))) return !1;
          if (XT.to > iT) return !0;
          XT.next(), BT.next()
        }
      }
      static spans(TT, oT, IT, iT) {
        let zT = new yo(TT, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(oT),
          kT = oT,
          WT = zT.openStart;
        for (;;) {
          let TT = Math.min(zT.to, IT);
          if (zT.point) {
            let IT = zT.activeForPoint(zT.to),
              XT = zT.pointFrom < oT ? IT.length + 1 : zT.point.startSide < 0 ? IT.length : Math.min(IT.length, WT);
            iT.point(kT, TT, zT.point, IT, XT, zT.pointRank), WT = Math.min(zT.openEnd(TT), IT.length)
          } else TT > kT && (iT.span(kT, TT, zT.active, WT), WT = zT.openEnd(TT));
          if (zT.to > IT) return WT + (zT.point && zT.to > IT ? 1 : 0);
          kT = zT.to, zT.next()
        }
      }
      static of (TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = new so;
        for (let iT of TT instanceof Ho ? [TT] : oT ? function(TT) {
            if (TT.length > 1)
              for (let oT = TT[0], IT = 1; IT < TT.length; IT++) {
                let iT = TT[IT];
                if (no(oT, iT) > 0) return TT.slice().sort(no);
                oT = iT
              }
            return TT
          }(TT) : TT) IT.add(iT.from, iT.to, iT.value);
        return IT.finish()
      }
      static join(TT) {
        if (!TT.length) return Zo.empty;
        let oT = TT[TT.length - 1];
        for (let IT = TT.length - 2; IT >= 0; IT--)
          for (let iT = TT[IT]; iT != Zo.empty; iT = iT.nextLayer) oT = new Zo(iT.chunkPos, iT.chunk, oT, Math.max(iT.yIT, oT.yIT));
        return oT
      }
    }
    Zo.empty = new Zo([], [], null, -1), Zo.empty.nextLayer = Zo.empty;
    class so {
      finishChunk(TT) {
        this.chunks.push(new qo(this.from, this.to, this.value, this.yIT)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.yIT), this.yIT = -1, TT && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.yIT = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(TT, oT, IT) {
        this.addInner(TT, oT, IT) || (this.nextLayer || (this.nextLayer = new so)).add(TT, oT, IT)
      }
      addInner(TT, oT, IT) {
        let iT = TT - this.lastTo || IT.startSide - this.last.endSide;
        if (iT <= 0 && (TT - this.lastFrom || IT.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(iT < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = TT), this.from.push(TT - this.chunkStart), this.to.push(oT - this.chunkStart), this.last = IT, this.lastFrom = TT, this.lastTo = oT, this.value.push(IT), IT.point && (this.yIT = Math.max(this.yIT, oT - TT)), !0)
      }
      addChunk(TT, oT) {
        if ((TT - this.lastTo || oT.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, oT.yIT), this.chunks.push(oT), this.chunkPos.push(TT);
        let IT = oT.value.length - 1;
        return this.last = oT.value[IT], this.lastFrom = oT.from[IT] + TT, this.lastTo = oT.to[IT] + TT, !0
      }
      finish() {
        return this.finishInner(Zo.empty)
      }
      finishInner(TT) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return TT;
        let oT = Zo.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(TT) : TT, this.setMaxPoint);
        return this.from = null, oT
      }
    }

    function to(TT, oT, IT) {
      let iT = new Map;
      for (let kT of TT)
        for (let TT = 0; TT < kT.chunk.length; TT++) kT.chunk[TT].yIT <= 0 && iT.set(kT.chunk[TT], kT.chunkPos[TT]);
      let zT = new Set;
      for (let kT of oT)
        for (let TT = 0; TT < kT.chunk.length; TT++) {
          let oT = iT.get(kT.chunk[TT]);
          null == oT || (IT ? IT.mapPos(oT) : oT) != kT.chunkPos[TT] || (null === IT || void 0 === IT ? void 0 : IT.touchesRange(oT, oT + kT.chunk[TT].length)) || zT.add(kT.chunk[TT])
        }
      return zT
    }
    class Go {
      constructor(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = TT, this.skip = oT, this.NIT = IT, this.rank = iT
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(TT, oT, !1), this
      }
      gotoInner(TT, oT, IT) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let oT = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(oT) || this.layer.chunkEnd(this.chunkIndex) < TT || oT.yIT < this.NIT)) break;
          this.chunkIndex++, IT = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let iT = this.layer.chunk[this.chunkIndex].findIndex(TT - this.layer.chunkPos[this.chunkIndex], oT, !0);
          (!IT || this.rangeIndex < iT) && this.setRangeIndex(iT)
        }
        this.next()
      }
      forward(TT, oT) {
        (this.to - TT || this.endSide - oT) < 0 && this.gotoInner(TT, oT, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let TT = this.layer.chunkPos[this.chunkIndex],
              oT = this.layer.chunk[this.chunkIndex],
              IT = TT + oT.from[this.rangeIndex];
            if (this.from = IT, this.to = TT + oT.to[this.rangeIndex], this.value = oT.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.NIT < 0 || this.value.point && this.to - this.from >= this.NIT) break
          }
        }
      }
      setRangeIndex(TT) {
        if (TT == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = TT
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(TT) {
        return this.from - TT.from || this.startSide - TT.startSide || this.rank - TT.rank || this.to - TT.to || this.endSide - TT.endSide
      }
    }
    class po {
      constructor(TT) {
        this.heap = TT
      }
      static from(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          iT = [];
        for (let zT = 0; zT < TT.length; zT++)
          for (let kT = TT[zT]; !kT.Mc; kT = kT.nextLayer) kT.yIT >= IT && iT.push(new Go(kT, oT, IT, zT));
        return 1 == iT.length ? iT[0] : new po(iT)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let IT of this.heap) IT.goto(TT, oT);
        for (let IT = this.heap.length >> 1; IT >= 0; IT--) bo(this.heap, IT);
        return this.next(), this
      }
      forward(TT, oT) {
        for (let IT of this.heap) IT.forward(TT, oT);
        for (let IT = this.heap.length >> 1; IT >= 0; IT--) bo(this.heap, IT);
        (this.to - TT || this.value.endSide - oT) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let TT = this.heap[0];
          this.from = TT.from, this.to = TT.to, this.value = TT.value, this.rank = TT.rank, TT.value && TT.next(), bo(this.heap, 0)
        }
      }
    }

    function bo(TT, oT) {
      for (let IT = TT[oT];;) {
        let iT = 1 + (oT << 1);
        if (iT >= TT.length) break;
        let zT = TT[iT];
        if (iT + 1 < TT.length && zT.compare(TT[iT + 1]) >= 0 && (zT = TT[iT + 1], iT++), IT.compare(zT) < 0) break;
        TT[iT] = IT, TT[oT] = zT, oT = iT
      }
    }
    class yo {
      constructor(TT, oT, IT) {
        this.NIT = IT, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = po.from(TT, oT, IT)
      }
      goto(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(TT, oT), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = TT, this.endSide = oT, this.openStart = -1, this.next(), this
      }
      forward(TT, oT) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - TT || this.active[this.minActive].endSide - oT) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(TT, oT)
      }
      removeActive(TT) {
        Vo(this.active, TT), Vo(this.activeTo, TT), Vo(this.activeRank, TT), this.minActive = oI(this.active, this.activeTo)
      }
      addActive(TT) {
        let oT = 0,
          {
            value: IT,
            to: iT,
            rank: zT
          } = this.cursor;
        for (; oT < this.activeRank.length && (zT - this.activeRank[oT] || iT - this.activeTo[oT]) > 0;) oT++;
        TI(this.active, oT, IT), TI(this.activeTo, oT, iT), TI(this.activeRank, oT, zT), TT && TI(TT, oT, this.cursor.from), this.minActive = oI(this.active, this.activeTo)
      }
      next() {
        let TT = this.to,
          oT = this.point;
        this.point = null;
        let IT = this.openStart < 0 ? [] : null;
        for (;;) {
          let iT = this.minActive;
          if (iT > -1 && (this.activeTo[iT] - this.cursor.from || this.active[iT].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[iT] > TT) {
              this.to = this.activeTo[iT], this.endSide = this.active[iT].endSide;
              break
            }
            this.removeActive(iT), IT && Vo(IT, iT)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > TT) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let TT = this.cursor.value;
              if (TT.point) {
                if (!(oT && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = TT, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = TT.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(IT), this.cursor.next()
            }
          }
        }
        if (IT) {
          this.openStart = 0;
          for (let oT = IT.length - 1; oT >= 0 && IT[oT] < TT; oT--) this.openStart++
        }
      }
      activeForPoint(TT) {
        if (!this.active.length) return this.active;
        let oT = [];
        for (let IT = this.active.length - 1; IT >= 0 && !(this.activeRank[IT] < this.pointRank); IT--)(this.activeTo[IT] > TT || this.activeTo[IT] == TT && this.active[IT].endSide >= this.point.endSide) && oT.push(this.active[IT]);
        return oT.reverse()
      }
      openEnd(TT) {
        let oT = 0;
        for (let IT = this.activeTo.length - 1; IT >= 0 && this.activeTo[IT] > TT; IT--) oT++;
        return oT
      }
    }

    function No(TT, oT, IT, iT, zT, kT) {
      TT.goto(oT), IT.goto(iT);
      let WT = iT + zT,
        XT = iT,
        BT = iT - oT,
        FT = !!kT.boundChange;
      for (let ST = !1;;) {
        let oT = TT.to + BT - IT.to,
          iT = oT || TT.endSide - IT.endSide,
          zT = iT < 0 ? TT.to + BT : IT.to,
          DT = Math.min(zT, WT);
        if (TT.point || IT.point ? (TT.point && IT.point && Oo(TT.point, IT.point) && Po(TT.activeForPoint(TT.to), IT.activeForPoint(IT.to)) || kT.comparePoint(XT, DT, TT.point, IT.point), ST = !1) : (ST && kT.boundChange(XT), DT > XT && !Po(TT.active, IT.active) && kT.compareRange(XT, DT, TT.active, IT.active), FT && DT < WT && (oT || TT.openEnd(zT) != IT.openEnd(zT)) && (ST = !0)), zT > WT) break;
        XT = zT, iT <= 0 && TT.next(), iT >= 0 && IT.next()
      }
    }

    function Po(TT, oT) {
      if (TT.length != oT.length) return !1;
      for (let IT = 0; IT < TT.length; IT++)
        if (TT[IT] != oT[IT] && !Oo(TT[IT], oT[IT])) return !1;
      return !0
    }

    function Vo(TT, oT) {
      for (let IT = oT, iT = TT.length - 1; IT < iT; IT++) TT[IT] = TT[IT + 1];
      TT.pop()
    }

    function TI(TT, oT, IT) {
      for (let iT = TT.length - 1; iT >= oT; iT--) TT[iT + 1] = TT[iT];
      TT[oT] = IT
    }

    function oI(TT, oT) {
      let IT = -1,
        iT = 1e9;
      for (let zT = 0; zT < oT.length; zT++)(oT[zT] - iT || TT[zT].endSide - TT[IT].endSide) < 0 && (IT = zT, iT = oT[zT]);
      return IT
    }

    function II(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length,
        iT = 0;
      for (let zT = 0; zT < IT && zT < TT.length;) 9 == TT.charCodeAt(zT) ? (iT += oT - iT % oT, zT++) : (iT++, zT = uT(TT, zT));
      return iT
    }

    function iI(TT, oT, IT, iT) {
      for (let zT = 0, kT = 0;;) {
        if (kT >= oT) return zT;
        if (zT == TT.length) break;
        kT += 9 == TT.charCodeAt(zT) ? IT - kT % IT : 1, zT = uT(TT, zT)
      }
      return !0 === iT ? -1 : TT.length
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);