export const id = 299;
export const ids = [299];
export const modules = {
  41459: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => fU,
      f: () => yT,
      ChangeSet: () => XT,
      j: () => tU,
      l: () => CT,
      m: () => IU,
      o: () => ST,
      q: () => aT,
      u: () => zU,
      x: () => CU,
      w: () => rU,
      A: () => sU,
      B: () => bU,
      E: () => AT,
      I: () => ZT,
      K: () => OU,
      M: () => xT,
      P: () => wT,
      Q: () => QU,
      S: () => Tm,
      U: () => JT,
      Y: () => Um,
      $: () => dT
    });
    let WT = [],
      zT = [];

    function MT(TT) {
      if (TT < 768) return !1;
      for (let UT = 0, mT = WT.length;;) {
        let MT = UT + mT >> 1;
        if (TT < WT[MT]) mT = MT;
        else {
          if (!(TT >= zT[MT])) return !0;
          UT = MT + 1
        }
        if (UT == mT) return !1
      }
    }

    function gT(TT) {
      return TT >= 127462 && TT <= 127487
    }(() => {
      let TT = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((TT => TT ? parseInt(TT, 36) : 1));
      for (let UT = 0, mT = 0; UT < TT.length; UT++)(UT % 2 ? zT : WT).push(mT += TT[UT])
    })();
    const nT = 8205;

    function HT(TT, UT) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? kT : jT)(TT, UT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function kT(TT, UT, mT) {
      if (UT == TT.length) return UT;
      UT && LT(TT.charCodeAt(UT)) && pT(TT.charCodeAt(UT - 1)) && UT--;
      let WT = lT(TT, UT);
      for (UT += BT(WT); UT < TT.length;) {
        let zT = lT(TT, UT);
        if (WT == nT || zT == nT || mT && MT(zT)) UT += BT(zT), WT = zT;
        else {
          if (!gT(zT)) break;
          {
            let mT = 0,
              WT = UT - 2;
            for (; WT >= 0 && gT(lT(TT, WT));) mT++, WT -= 2;
            if (mT % 2 == 0) break;
            UT += 2
          }
        }
      }
      return UT
    }

    function jT(TT, UT, mT) {
      for (; UT > 0;) {
        let WT = kT(TT, UT - 2, mT);
        if (WT < UT) return WT;
        UT--
      }
      return 0
    }

    function lT(TT, UT) {
      let mT = TT.charCodeAt(UT);
      if (!pT(mT) || UT + 1 == TT.length) return mT;
      let WT = TT.charCodeAt(UT + 1);
      return LT(WT) ? WT - 56320 + (mT - 55296 << 10) + 65536 : mT
    }

    function LT(TT) {
      return TT >= 56320 && TT < 57344
    }

    function pT(TT) {
      return TT >= 55296 && TT < 56320
    }

    function BT(TT) {
      return TT < 65536 ? 1 : 2
    }
    class ZT {
      lineAt(TT) {
        if (TT < 0 || TT > this.length) throw new RangeError(`Invalid position ${TT} in document of length ${this.length}`);
        return this.lineInner(TT, !1, 1, 0)
      }
      line(TT) {
        if (TT < 1 || TT > this.lines) throw new RangeError(`Invalid line number ${TT} in ${this.lines}-line document`);
        return this.lineInner(TT, !0, 1, 0)
      }
      replace(TT, UT, mT) {
        [TT, UT] = YT(this, TT, UT);
        let WT = [];
        return this.decompose(0, TT, WT, 2), mT.length && mT.decompose(0, mT.length, WT, 3), this.decompose(UT, this.length, WT, 1), vT.from(WT, this.length - (UT - TT) + mT.length)
      }
      append(TT) {
        return this.replace(this.length, this.length, TT)
      }
      slice(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [TT, UT] = YT(this, TT, UT);
        let mT = [];
        return this.decompose(TT, UT, mT, 0), vT.from(mT, UT - TT)
      }
      eq(TT) {
        if (TT == this) return !0;
        if (TT.length != this.length || TT.lines != this.lines) return !1;
        let UT = this.scanIdentical(TT, 1),
          mT = this.length - this.scanIdentical(TT, -1),
          WT = new iT(this),
          zT = new iT(TT);
        for (let MT = UT, gT = UT;;) {
          if (WT.next(MT), zT.next(MT), MT = 0, WT.lineBreak != zT.lineBreak || WT.done != zT.done || WT.value != zT.value) return !1;
          if (gT += WT.value.length, WT.done || gT >= mT) return !0
        }
      }
      iter() {
        return new iT(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new bT(this, TT, UT)
      }
      iterLines(TT, UT) {
        let mT;
        if (null == TT) mT = this.iter();
        else {
          null == UT && (UT = this.lines + 1);
          let WT = this.line(TT).from;
          mT = this.iterRange(WT, Math.max(WT, UT == this.lines + 1 ? this.length : UT <= 1 ? 0 : this.line(UT - 1).to))
        }
        return new OT(mT)
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
        return 1 != TT.length || TT[0] ? TT.length <= 32 ? new cT(TT) : vT.from(cT.split(TT, [])) : ZT.empty
      }
    }
    class cT extends ZT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(TT) {
          let UT = -1;
          for (let mT of TT) UT += mT.length + 1;
          return UT
        }(TT);
        super(), this.text = TT, this.length = UT
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(TT, UT, mT, WT) {
        for (let zT = 0;; zT++) {
          let MT = this.text[zT],
            gT = WT + MT.length;
          if ((UT ? mT : gT) >= TT) return new eT(WT, gT, mT, MT);
          WT = gT + 1, mT++
        }
      }
      decompose(TT, UT, mT, WT) {
        let zT = TT <= 0 && UT >= this.length ? this : new cT(qT(this.text, TT, UT), Math.min(UT, this.length) - Math.max(0, TT));
        if (1 & WT) {
          let TT = mT.pop(),
            UT = fT(zT.text, TT.text.slice(), 0, zT.length);
          if (UT.length <= 32) mT.push(new cT(UT, TT.length + zT.length));
          else {
            let TT = UT.length >> 1;
            mT.push(new cT(UT.slice(0, TT)), new cT(UT.slice(TT)))
          }
        } else mT.push(zT)
      }
      replace(TT, UT, mT) {
        if (!(mT instanceof cT)) return super.replace(TT, UT, mT);
        [TT, UT] = YT(this, TT, UT);
        let WT = fT(this.text, fT(mT.text, qT(this.text, 0, TT)), UT),
          zT = this.length + mT.length - (UT - TT);
        return WT.length <= 32 ? new cT(WT, zT) : vT.from(cT.split(WT, []), zT)
      }
      sliceString(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [TT, UT] = YT(this, TT, UT);
        let WT = "";
        for (let zT = 0, MT = 0; zT <= UT && MT < this.text.length; MT++) {
          let gT = this.text[MT],
            nT = zT + gT.length;
          zT > TT && MT && (WT += mT), TT < nT && UT > zT && (WT += gT.slice(Math.max(0, TT - zT), UT - zT)), zT = nT + 1
        }
        return WT
      }
      flatten(TT) {
        for (let UT of this.text) TT.push(UT)
      }
      scanIdentical() {
        return 0
      }
      static split(TT, UT) {
        let mT = [],
          WT = -1;
        for (let zT of TT) mT.push(zT), WT += zT.length + 1, 32 == mT.length && (UT.push(new cT(mT, WT)), mT = [], WT = -1);
        return WT > -1 && UT.push(new cT(mT, WT)), UT
      }
    }
    class vT extends ZT {
      constructor(TT, UT) {
        super(), this.children = TT, this.length = UT, this.lines = 0;
        for (let mT of TT) this.lines += mT.lines
      }
      lineInner(TT, UT, mT, WT) {
        for (let zT = 0;; zT++) {
          let MT = this.children[zT],
            gT = WT + MT.length,
            nT = mT + MT.lines - 1;
          if ((UT ? nT : gT) >= TT) return MT.lineInner(TT, UT, mT, WT);
          WT = gT + 1, mT = nT + 1
        }
      }
      decompose(TT, UT, mT, WT) {
        for (let zT = 0, MT = 0; MT <= UT && zT < this.children.length; zT++) {
          let gT = this.children[zT],
            nT = MT + gT.length;
          if (TT <= nT && UT >= MT) {
            let zT = WT & ((MT <= TT ? 1 : 0) | (nT >= UT ? 2 : 0));
            MT >= TT && nT <= UT && !zT ? mT.push(gT) : gT.decompose(TT - MT, UT - MT, mT, zT)
          }
          MT = nT + 1
        }
      }
      replace(TT, UT, mT) {
        if ([TT, UT] = YT(this, TT, UT), mT.lines < this.lines)
          for (let WT = 0, zT = 0; WT < this.children.length; WT++) {
            let MT = this.children[WT],
              gT = zT + MT.length;
            if (TT >= zT && UT <= gT) {
              let nT = MT.replace(TT - zT, UT - zT, mT),
                HT = this.lines - MT.lines + nT.lines;
              if (nT.lines < HT >> 4 && nT.lines > HT >> 6) {
                let zT = this.children.slice();
                return zT[WT] = nT, new vT(zT, this.length - (UT - TT) + mT.length)
              }
              return super.replace(zT, gT, nT)
            }
            zT = gT + 1
          }
        return super.replace(TT, UT, mT)
      }
      sliceString(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [TT, UT] = YT(this, TT, UT);
        let WT = "";
        for (let zT = 0, MT = 0; zT < this.children.length && MT <= UT; zT++) {
          let gT = this.children[zT],
            nT = MT + gT.length;
          MT > TT && zT && (WT += mT), TT < nT && UT > MT && (WT += gT.sliceString(TT - MT, UT - MT, mT)), MT = nT + 1
        }
        return WT
      }
      flatten(TT) {
        for (let UT of this.children) UT.flatten(TT)
      }
      scanIdentical(TT, UT) {
        if (!(TT instanceof vT)) return 0;
        let mT = 0,
          [WT, zT, MT, gT] = UT > 0 ? [0, 0, this.children.length, TT.children.length] : [this.children.length - 1, TT.children.length - 1, -1, -1];
        for (;; WT += UT, zT += UT) {
          if (WT == MT || zT == gT) return mT;
          let nT = this.children[WT],
            HT = TT.children[zT];
          if (nT != HT) return mT + nT.scanIdentical(HT, UT);
          mT += nT.length + 1
        }
      }
      static from(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.reduce(((TT, UT) => TT + UT.length + 1), -1),
          mT = 0;
        for (let LT of TT) mT += LT.lines;
        if (mT < 32) {
          let mT = [];
          for (let UT of TT) UT.flatten(mT);
          return new cT(mT, UT)
        }
        let WT = Math.max(32, mT >> 5),
          zT = WT << 1,
          MT = WT >> 1,
          gT = [],
          nT = 0,
          HT = -1,
          kT = [];

        function jT(TT) {
          let UT;
          if (TT.lines > zT && TT instanceof vT)
            for (let mT of TT.children) jT(mT);
          else TT.lines > MT && (nT > MT || !nT) ? (lT(), gT.push(TT)) : TT instanceof cT && nT && (UT = kT[kT.length - 1]) instanceof cT && TT.lines + UT.lines <= 32 ? (nT += TT.lines, HT += TT.length + 1, kT[kT.length - 1] = new cT(UT.text.concat(TT.text), UT.length + 1 + TT.length)) : (nT + TT.lines > WT && lT(), nT += TT.lines, HT += TT.length + 1, kT.push(TT))
        }

        function lT() {
          0 != nT && (gT.push(1 == kT.length ? kT[0] : vT.from(kT, HT)), HT = -1, nT = kT.length = 0)
        }
        for (let LT of TT) jT(LT);
        return lT(), 1 == gT.length ? gT[0] : new vT(gT, UT)
      }
    }

    function fT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let zT = 0, MT = 0, gT = !0; MT < TT.length && zT <= WT; MT++) {
        let nT = TT[MT],
          HT = zT + nT.length;
        HT >= mT && (HT > WT && (nT = nT.slice(0, WT - zT)), zT < mT && (nT = nT.slice(mT - zT)), gT ? (UT[UT.length - 1] += nT, gT = !1) : UT.push(nT)), zT = HT + 1
      }
      return UT
    }

    function qT(TT, UT, mT) {
      return fT(TT, [""], UT, mT)
    }
    ZT.empty = new cT([""], 0);
    class iT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = UT, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [TT], this.offsets = [UT > 0 ? 1 : (TT instanceof cT ? TT.text.length : TT.children.length) << 1]
      }
      nextInner(TT, UT) {
        for (this.done = this.lineBreak = !1;;) {
          let mT = this.nodes.length - 1,
            WT = this.nodes[mT],
            zT = this.offsets[mT],
            MT = zT >> 1,
            gT = WT instanceof cT ? WT.text.length : WT.children.length;
          if (MT == (UT > 0 ? gT : 0)) {
            if (0 == mT) return this.done = !0, this.value = "", this;
            UT > 0 && this.offsets[mT - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & zT) == (UT > 0 ? 0 : 1)) {
            if (this.offsets[mT] += UT, 0 == TT) return this.lineBreak = !0, this.value = "\n", this;
            TT--
          } else if (WT instanceof cT) {
            let zT = WT.text[MT + (UT < 0 ? -1 : 0)];
            if (this.offsets[mT] += UT, zT.length > Math.max(0, TT)) return this.value = 0 == TT ? zT : UT > 0 ? zT.slice(TT) : zT.slice(0, zT.length - TT), this;
            TT -= zT.length
          } else {
            let zT = WT.children[MT + (UT < 0 ? -1 : 0)];
            TT > zT.length ? (TT -= zT.length, this.offsets[mT] += UT) : (UT < 0 && this.offsets[mT]--, this.nodes.push(zT), this.offsets.push(UT > 0 ? 1 : (zT instanceof cT ? zT.text.length : zT.children.length) << 1))
          }
        }
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return TT < 0 && (this.nextInner(-TT, -this.dir), TT = this.value.length), this.nextInner(TT, this.dir)
      }
    }
    class bT {
      constructor(TT, UT, mT) {
        this.value = "", this.done = !1, this.cursor = new iT(TT, UT > mT ? -1 : 1), this.pos = UT > mT ? TT.length : 0, this.from = Math.min(UT, mT), this.to = Math.max(UT, mT)
      }
      nextInner(TT, UT) {
        if (UT < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        TT += Math.max(0, UT < 0 ? this.pos - this.to : this.from - this.pos);
        let mT = UT < 0 ? this.pos - this.from : this.to - this.pos;
        TT > mT && (TT = mT), mT -= TT;
        let {
          value: WT
        } = this.cursor.next(TT);
        return this.pos += (WT.length + TT) * UT, this.value = WT.length <= mT ? WT : UT < 0 ? WT.slice(WT.length - mT) : WT.slice(0, mT), this.done = !this.value, this
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return TT < 0 ? TT = Math.max(TT, this.from - this.pos) : TT > 0 && (TT = Math.min(TT, this.to - this.pos)), this.nextInner(TT, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class OT {
      constructor(TT) {
        this.inner = TT, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: UT,
            lineBreak: mT,
            value: WT
          } = this.inner.next(TT);
        return UT && this.afterBreak ? (this.value = "", this.afterBreak = !1) : UT ? (this.done = !0, this.value = "") : mT ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = WT, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (ZT.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, iT.prototype[Symbol.iterator] = bT.prototype[Symbol.iterator] = OT.prototype[Symbol.iterator] = function() {
      return this
    });
    class eT {
      constructor(TT, UT, mT, WT) {
        this.from = TT, this.to = UT, this.number = mT, this.text = WT
      }
      get length() {
        return this.to - this.from
      }
    }

    function YT(TT, UT, mT) {
      return [UT = Math.max(0, Math.min(TT.length, UT)), Math.max(UT, Math.min(TT.length, mT))]
    }

    function JT(TT, UT) {
      return HT(TT, UT, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function xT(TT, UT) {
      let mT = TT.charCodeAt(UT);
      if (!((WT = mT) >= 55296 && WT < 56320) || UT + 1 == TT.length) return mT;
      var WT;
      let zT = TT.charCodeAt(UT + 1);
      return function(TT) {
        return TT >= 56320 && TT < 57344
      }(zT) ? zT - 56320 + (mT - 55296 << 10) + 65536 : mT
    }

    function dT(TT) {
      return TT <= 65535 ? String.fromCharCode(TT) : (TT -= 65536, String.fromCharCode(55296 + (TT >> 10), 56320 + (1023 & TT)))
    }

    function wT(TT) {
      return TT < 65536 ? 1 : 2
    }
    const tT = /\r\n?|\n/;
    var aT = function(TT) {
      return TT[TT.Simple = 0] = "Simple", TT[TT.TrackDel = 1] = "TrackDel", TT[TT.TrackBefore = 2] = "TrackBefore", TT[TT.TrackAfter = 3] = "TrackAfter", TT
    }(aT || (aT = {}));
    class yT {
      constructor(TT) {
        this.sections = TT
      }
      get length() {
        let TT = 0;
        for (let UT = 0; UT < this.sections.length; UT += 2) TT += this.sections[UT];
        return TT
      }
      get newLength() {
        let TT = 0;
        for (let UT = 0; UT < this.sections.length; UT += 2) {
          let mT = this.sections[UT + 1];
          TT += mT < 0 ? this.sections[UT] : mT
        }
        return TT
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(TT) {
        for (let UT = 0, mT = 0, WT = 0; UT < this.sections.length;) {
          let zT = this.sections[UT++],
            MT = this.sections[UT++];
          MT < 0 ? (TT(mT, WT, zT), WT += zT) : WT += MT, mT += zT
        }
      }
      iterChangedRanges(TT) {
        sT(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let TT = [];
        for (let UT = 0; UT < this.sections.length;) {
          let mT = this.sections[UT++],
            WT = this.sections[UT++];
          WT < 0 ? TT.push(mT, WT) : TT.push(WT, mT)
        }
        return new yT(TT)
      }
      composeDesc(TT) {
        return this.empty ? TT : TT.empty ? this : PT(this, TT)
      }
      mapDesc(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return TT.empty ? this : FT(this, TT, UT)
      }
      mapPos(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : aT.Simple,
          WT = 0,
          zT = 0;
        for (let MT = 0; MT < this.sections.length;) {
          let gT = this.sections[MT++],
            nT = this.sections[MT++],
            HT = WT + gT;
          if (nT < 0) {
            if (HT > TT) return zT + (TT - WT);
            zT += gT
          } else {
            if (mT != aT.Simple && HT >= TT && (mT == aT.TrackDel && WT < TT && HT > TT || mT == aT.TrackBefore && WT < TT || mT == aT.TrackAfter && HT > TT)) return null;
            if (HT > TT || HT == TT && UT < 0 && !gT) return TT == WT || UT < 0 ? zT : zT + nT;
            zT += nT
          }
          WT = HT
        }
        if (TT > WT) throw new RangeError(`Position ${TT} is out of range for changeset of length ${WT}`);
        return zT
      }
      touchesRange(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        for (let mT = 0, WT = 0; mT < this.sections.length && WT <= UT;) {
          let zT = WT + this.sections[mT++];
          if (this.sections[mT++] >= 0 && WT <= UT && zT >= TT) return !(WT < TT && zT > UT) || "cover";
          WT = zT
        }
        return !1
      }
      toString() {
        let TT = "";
        for (let UT = 0; UT < this.sections.length;) {
          let mT = this.sections[UT++],
            WT = this.sections[UT++];
          TT += (TT ? " " : "") + mT + (WT >= 0 ? ":" + WT : "")
        }
        return TT
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(TT) {
        if (!Array.isArray(TT) || TT.length % 2 || TT.some((TT => "number" != typeof TT))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new yT(TT)
      }
      static create(TT) {
        return new yT(TT)
      }
    }
    class XT extends yT {
      constructor(TT, UT) {
        super(TT), this.inserted = UT
      }
      apply(TT) {
        if (this.length != TT.length) throw new RangeError("Applying change set to a document with the wrong length");
        return sT(this, ((UT, mT, WT, zT, MT) => TT = TT.replace(WT, WT + (mT - UT), MT)), !1), TT
      }
      mapDesc(TT) {
        return FT(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(TT) {
        let UT = this.sections.slice(),
          mT = [];
        for (let WT = 0, zT = 0; WT < UT.length; WT += 2) {
          let MT = UT[WT],
            gT = UT[WT + 1];
          if (gT >= 0) {
            UT[WT] = gT, UT[WT + 1] = MT;
            let nT = WT >> 1;
            for (; mT.length < nT;) mT.push(ZT.empty);
            mT.push(MT ? TT.slice(zT, zT + MT) : ZT.empty)
          }
          zT += MT
        }
        return new XT(UT, mT)
      }
      compose(TT) {
        return this.empty ? TT : TT.empty ? this : PT(this, TT, !0)
      }
      map(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return TT.empty ? this : FT(this, TT, UT, !0)
      }
      iterChanges(TT) {
        sT(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return yT.create(this.sections)
      }
      filter(TT) {
        let UT = [],
          mT = [],
          WT = [],
          zT = new VT(this);
        TT: for (let MT = 0, gT = 0;;) {
          let nT = MT == TT.length ? 1e9 : TT[MT++];
          for (; gT < nT || gT == nT && 0 == zT.len;) {
            if (zT.done) break TT;
            let TT = Math.min(zT.len, nT - gT);
            IT(WT, TT, -1);
            let MT = -1 == zT.ins ? -1 : 0 == zT.off ? zT.ins : 0;
            IT(UT, TT, MT), MT > 0 && QT(mT, UT, zT.text), zT.forward(TT), gT += TT
          }
          let HT = TT[MT++];
          for (; gT < HT;) {
            if (zT.done) break TT;
            let TT = Math.min(zT.len, HT - gT);
            IT(UT, TT, -1), IT(WT, TT, -1 == zT.ins ? -1 : 0 == zT.off ? zT.ins : 0), zT.forward(TT), gT += TT
          }
        }
        return {
          changes: new XT(UT, mT),
          filtered: yT.create(WT)
        }
      }
      toJSON() {
        let TT = [];
        for (let UT = 0; UT < this.sections.length; UT += 2) {
          let mT = this.sections[UT],
            WT = this.sections[UT + 1];
          WT < 0 ? TT.push(mT) : 0 == WT ? TT.push([mT]) : TT.push([mT].concat(this.inserted[UT >> 1].toJSON()))
        }
        return TT
      }
      static of (TT, UT, mT) {
        let WT = [],
          zT = [],
          MT = 0,
          gT = null;

        function nT() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !WT.length) return;
          MT < UT && IT(WT, UT - MT, -1);
          let TT = new XT(WT, zT);
          gT = gT ? gT.compose(TT.map(gT)) : TT, WT = [], zT = [], MT = 0
        }
        return function TT(HT) {
          if (Array.isArray(HT))
            for (let UT of HT) TT(UT);
          else if (HT instanceof XT) {
            if (HT.length != UT) throw new RangeError(`Mismatched change set length (got ${HT.length}, expected ${UT})`);
            nT(), gT = gT ? gT.compose(HT.map(gT)) : HT
          } else {
            let {
              from: TT,
              to: gT = TT,
              insert: kT
            } = HT;
            if (TT > gT || TT < 0 || gT > UT) throw new RangeError(`Invalid change range ${TT} to ${gT} (in doc of length ${UT})`);
            let jT = kT ? "string" == typeof kT ? ZT.of(kT.split(mT || tT)) : kT : ZT.empty,
              lT = jT.length;
            if (TT == gT && 0 == lT) return;
            TT < MT && nT(), TT > MT && IT(WT, TT - MT, -1), IT(WT, gT - TT, lT), QT(zT, WT, jT), MT = gT
          }
        }(TT), nT(!gT), gT
      }
      static empty(TT) {
        return new XT(TT ? [TT, -1] : [], [])
      }
      static fromJSON(TT) {
        if (!Array.isArray(TT)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let UT = [],
          mT = [];
        for (let WT = 0; WT < TT.length; WT++) {
          let zT = TT[WT];
          if ("number" == typeof zT) UT.push(zT, -1);
          else {
            if (!Array.isArray(zT) || "number" != typeof zT[0] || zT.some(((TT, UT) => UT && "string" != typeof TT))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == zT.length) UT.push(zT[0], 0);
            else {
              for (; mT.length < WT;) mT.push(ZT.empty);
              mT[WT] = ZT.of(zT.slice(1)), UT.push(zT[0], mT[WT].length)
            }
          }
        }
        return new XT(UT, mT)
      }
      static createSet(TT, UT) {
        return new XT(TT, UT)
      }
    }

    function IT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == UT && mT <= 0) return;
      let zT = TT.length - 2;
      zT >= 0 && mT <= 0 && mT == TT[zT + 1] ? TT[zT] += UT : zT >= 0 && 0 == UT && 0 == TT[zT] ? TT[zT + 1] += mT : WT ? (TT[zT] += UT, TT[zT + 1] += mT) : TT.push(UT, mT)
    }

    function QT(TT, UT, mT) {
      if (0 == mT.length) return;
      let WT = UT.length - 2 >> 1;
      if (WT < TT.length) TT[TT.length - 1] = TT[TT.length - 1].append(mT);
      else {
        for (; TT.length < WT;) TT.push(ZT.empty);
        TT.push(mT)
      }
    }

    function sT(TT, UT, mT) {
      let WT = TT.inserted;
      for (let zT = 0, MT = 0, gT = 0; gT < TT.sections.length;) {
        let nT = TT.sections[gT++],
          HT = TT.sections[gT++];
        if (HT < 0) zT += nT, MT += nT;
        else {
          let kT = zT,
            jT = MT,
            lT = ZT.empty;
          for (; kT += nT, jT += HT, HT && WT && (lT = lT.append(WT[gT - 2 >> 1])), !(mT || gT == TT.sections.length || TT.sections[gT + 1] < 0);) nT = TT.sections[gT++], HT = TT.sections[gT++];
          UT(zT, kT, MT, jT, lT), zT = kT, MT = jT
        }
      }
    }

    function FT(TT, UT, mT) {
      let WT = [],
        zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        MT = new VT(TT),
        gT = new VT(UT),
        nT = 0;
      for (let HT = -1;;) {
        if (++nT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (MT.done && gT.len || gT.done && MT.len) throw new Error("Mismatched change set lengths");
        if (-1 == MT.ins && -1 == gT.ins) {
          let TT = Math.min(MT.len, gT.len);
          IT(WT, TT, -1), MT.forward(TT), gT.forward(TT)
        } else if (gT.ins >= 0 && (MT.ins < 0 || HT == MT.i || 0 == MT.off && (gT.len < MT.len || gT.len == MT.len && !mT))) {
          let TT = gT.len;
          for (IT(WT, gT.ins, -1); TT;) {
            if (++nT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let UT = Math.min(MT.len, TT);
            MT.ins >= 0 && HT < MT.i && MT.len <= UT && (IT(WT, 0, MT.ins), zT && QT(zT, WT, MT.text), HT = MT.i), MT.forward(UT), TT -= UT
          }
          gT.next()
        } else {
          if (!(MT.ins >= 0)) {
            if (MT.done && gT.done) return zT ? XT.createSet(WT, zT) : yT.create(WT);
            throw new Error("Mismatched change set lengths")
          } {
            let TT = 0,
              UT = MT.len;
            for (; UT;) {
              if (++nT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == gT.ins) {
                let mT = Math.min(UT, gT.len);
                TT += mT, UT -= mT, gT.forward(mT)
              } else {
                if (!(0 == gT.ins && gT.len < UT)) break;
                UT -= gT.len, gT.next()
              }
            }
            IT(WT, TT, HT < MT.i ? MT.ins : 0), zT && HT < MT.i && QT(zT, WT, MT.text), HT = MT.i, MT.forward(MT.len - UT)
          }
        }
      }
    }

    function PT(TT, UT) {
      let mT = [],
        WT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        zT = new VT(TT),
        MT = new VT(UT),
        gT = 0;
      for (let nT = !1;;) {
        if (++gT > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (zT.done && MT.done) return WT ? XT.createSet(mT, WT) : yT.create(mT);
        if (0 == zT.ins) IT(mT, zT.len, 0, nT), zT.next();
        else if (0 != MT.len || MT.done) {
          if (zT.done || MT.done) throw new Error("Mismatched change set lengths");
          {
            let TT = Math.min(zT.len2, MT.len),
              UT = mT.length;
            if (-1 == zT.ins) {
              let UT = -1 == MT.ins ? -1 : MT.off ? 0 : MT.ins;
              IT(mT, TT, UT, nT), WT && UT && QT(WT, mT, MT.text)
            } else - 1 == MT.ins ? (IT(mT, zT.off ? 0 : zT.len, TT, nT), WT && QT(WT, mT, zT.textBit(TT))) : (IT(mT, zT.off ? 0 : zT.len, MT.off ? 0 : MT.ins, nT), WT && !MT.off && QT(WT, mT, MT.text));
            nT = (zT.ins > TT || MT.ins >= 0 && MT.len > TT) && (nT || mT.length > UT), zT.forward2(TT), MT.forward(TT)
          }
        } else IT(mT, 0, MT.ins, nT), WT && QT(WT, mT, MT.text), MT.next()
      }
    }
    class VT {
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
        } = this.set, UT = this.i - 2 >> 1;
        return UT >= TT.length ? ZT.empty : TT[UT]
      }
      textBit(TT) {
        let {
          inserted: UT
        } = this.set, mT = this.i - 2 >> 1;
        return mT >= UT.length && !TT ? ZT.empty : UT[mT].slice(this.off, null == TT ? void 0 : this.off + TT)
      }
      forward(TT) {
        TT == this.len ? this.next() : (this.len -= TT, this.off += TT)
      }
      forward2(TT) {
        -1 == this.ins ? this.forward(TT) : TT == this.ins ? this.next() : (this.ins -= TT, this.off += TT)
      }
    }
    class uT {
      constructor(TT, UT, mT) {
        this.from = TT, this.to = UT, this.flags = mT
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
        let UT, mT, WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? UT = mT = TT.mapPos(this.from, WT) : (UT = TT.mapPos(this.from, 1), mT = TT.mapPos(this.to, -1)), UT == this.from && mT == this.to ? this : new uT(UT, mT, this.flags)
      }
      extend(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (TT <= this.anchor && UT >= this.anchor) return CT.range(TT, UT, void 0, void 0, mT);
        let WT = Math.abs(TT - this.anchor) > Math.abs(UT - this.anchor) ? TT : UT;
        return CT.range(this.anchor, WT, void 0, void 0, mT)
      }
      eq(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == TT.anchor && this.head == TT.head && this.goalColumn == TT.goalColumn && (!UT || !this.empty || this.assoc == TT.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(TT) {
        if (!TT || "number" != typeof TT.anchor || "number" != typeof TT.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return CT.range(TT.anchor, TT.head)
      }
      static create(TT, UT, mT) {
        return new uT(TT, UT, mT)
      }
    }
    class CT {
      constructor(TT, UT) {
        this.hZ = TT, this.mainIndex = UT
      }
      map(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return TT.empty ? this : CT.create(this.hZ.map((mT => mT.map(TT, UT))), this.mainIndex)
      }
      eq(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hZ.length != TT.hZ.length || this.mainIndex != TT.mainIndex) return !1;
        for (let mT = 0; mT < this.hZ.length; mT++)
          if (!this.hZ[mT].eq(TT.hZ[mT], UT)) return !1;
        return !0
      }
      get main() {
        return this.hZ[this.mainIndex]
      }
      asSingle() {
        return 1 == this.hZ.length ? this : new CT([this.main], 0)
      }
      addRange(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return CT.create([TT].concat(this.hZ), UT ? 0 : this.mainIndex + 1)
      }
      replaceRange(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          mT = this.hZ.slice();
        return mT[UT] = TT, CT.create(mT, this.mainIndex)
      }
      toJSON() {
        return {
          hZ: this.hZ.map((TT => TT.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(TT) {
        if (!TT || !Array.isArray(TT.hZ) || "number" != typeof TT.main || TT.main >= TT.hZ.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new CT(TT.hZ.map((TT => uT.fromJSON(TT))), TT.main)
      }
      static single(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        return new CT([CT.range(TT, UT)], 0)
      }
      static create(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == TT.length) throw new RangeError("A selection needs at least one range");
        for (let mT = 0, WT = 0; WT < TT.length; WT++) {
          let zT = TT[WT];
          if (zT.empty ? zT.from <= mT : zT.from < mT) return CT.normalized(TT.slice(), UT);
          mT = zT.to
        }
        return new CT(TT, UT)
      }
      static cursor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        return uT.create(TT, TT, (0 == UT ? 0 : UT < 0 ? 8 : 16) | (null == mT ? 7 : Math.min(6, mT)) | (null !== WT && void 0 !== WT ? WT : 16777215) << 6)
      }
      static range(TT, UT, mT, WT, zT) {
        let MT = (null !== mT && void 0 !== mT ? mT : 16777215) << 6 | (null == WT ? 7 : Math.min(6, WT));
        return zT || TT == UT || (zT = UT < TT ? 1 : -1), UT < TT ? uT.create(UT, TT, 48 | MT) : uT.create(TT, UT, (zT ? zT < 0 ? 8 : 16 : 0) | MT)
      }
      static normalized(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = TT[UT];
        TT.sort(((TT, UT) => TT.from - UT.from)), UT = TT.indexOf(mT);
        for (let WT = 1; WT < TT.length; WT++) {
          let mT = TT[WT],
            zT = TT[WT - 1];
          if (mT.empty ? mT.from <= zT.to : mT.from < zT.to) {
            let MT = zT.from,
              gT = Math.max(mT.to, zT.to);
            WT <= UT && UT--, TT.splice(--WT, 2, mT.anchor > mT.head ? CT.range(gT, MT) : CT.range(MT, gT))
          }
        }
        return new CT(TT, UT)
      }
    }

    function rT(TT, UT) {
      for (let mT of TT.hZ)
        if (mT.to > UT) throw new RangeError("Selection points outside of document")
    }
    let KT = 0;
    class ST {
      constructor(TT, UT, mT, WT, zT) {
        this.combine = TT, this.compareInput = UT, this.compare = mT, this.isStatic = WT, this.id = KT++, this.default = TT([]), this.extensions = "function" == typeof zT ? zT(this) : zT
      }
      get reader() {
        return this
      }
      static define() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new ST(TT.combine || (TT => TT), TT.compareInput || ((TT, UT) => TT === UT), TT.compare || (TT.combine ? (TT, UT) => TT === UT : GT), !!TT.static, TT.enables)
      }
      of(TT) {
        return new NT([], this, 0, TT)
      }
      compute(TT, UT) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new NT(TT, this, 1, UT)
      }
      computeN(TT, UT) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new NT(TT, this, 2, UT)
      }
      from(TT, UT) {
        return UT || (UT = TT => TT), this.compute([TT], (mT => UT(mT.field(TT))))
      }
    }

    function GT(TT, UT) {
      return TT == UT || TT.length == UT.length && TT.every(((TT, mT) => TT === UT[mT]))
    }
    class NT {
      constructor(TT, UT, mT, WT) {
        this.dependencies = TT, this.facet = UT, this.type = mT, this.value = WT, this.id = KT++
      }
      dynamicSlot(TT) {
        var UT;
        let mT = this.value,
          WT = this.facet.compareInput,
          zT = this.id,
          MT = TT[zT] >> 1,
          gT = 2 == this.type,
          nT = !1,
          HT = !1,
          kT = [];
        for (let jT of this.dependencies) "doc" == jT ? nT = !0 : "selection" == jT ? HT = !0 : 0 == (1 & (null !== (UT = TT[jT.id]) && void 0 !== UT ? UT : 1)) && kT.push(TT[jT.id]);
        return {
          create: TT => (TT.values[MT] = mT(TT), 1),
          update(TT, UT) {
            if (nT && UT.docChanged || HT && (UT.docChanged || UT.selection) || hT(TT, kT)) {
              let UT = mT(TT);
              if (gT ? !ET(UT, TT.values[MT], WT) : !WT(UT, TT.values[MT])) return TT.values[MT] = UT, 1
            }
            return 0
          },
          reconfigure: (TT, UT) => {
            let nT, HT = UT.config.address[zT];
            if (null != HT) {
              let zT = jU(UT, HT);
              if (this.dependencies.every((mT => mT instanceof ST ? UT.facet(mT) === TT.facet(mT) : !(mT instanceof AT) || UT.field(mT, !1) == TT.field(mT, !1))) || (gT ? ET(nT = mT(TT), zT, WT) : WT(nT = mT(TT), zT))) return TT.values[MT] = zT, 0
            } else nT = mT(TT);
            return TT.values[MT] = nT, 1
          }
        }
      }
    }

    function ET(TT, UT, mT) {
      if (TT.length != UT.length) return !1;
      for (let WT = 0; WT < TT.length; WT++)
        if (!mT(TT[WT], UT[WT])) return !1;
      return !0
    }

    function hT(TT, UT) {
      let mT = !1;
      for (let WT of UT) 1 & kU(TT, WT) && (mT = !0);
      return mT
    }

    function DT(TT, UT, mT) {
      let WT = mT.map((UT => TT[UT.id])),
        zT = mT.map((TT => TT.type)),
        MT = WT.filter((TT => !(1 & TT))),
        gT = TT[UT.id] >> 1;

      function nT(TT) {
        let mT = [];
        for (let UT = 0; UT < WT.length; UT++) {
          let MT = jU(TT, WT[UT]);
          if (2 == zT[UT])
            for (let TT of MT) mT.push(TT);
          else mT.push(MT)
        }
        return UT.combine(mT)
      }
      return {
        create(TT) {
          for (let UT of WT) kU(TT, UT);
          return TT.values[gT] = nT(TT), 1
        },
        update(TT, mT) {
          if (!hT(TT, MT)) return 0;
          let WT = nT(TT);
          return UT.compare(WT, TT.values[gT]) ? 0 : (TT.values[gT] = WT, 1)
        },
        reconfigure(TT, zT) {
          let MT = hT(TT, WT),
            HT = zT.config.facets[UT.id],
            kT = zT.facet(UT);
          if (HT && !MT && GT(mT, HT)) return TT.values[gT] = kT, 0;
          let jT = nT(TT);
          return UT.compare(jT, kT) ? (TT.values[gT] = kT, 0) : (TT.values[gT] = jT, 1)
        }
      }
    }
    const oT = ST.define({
      static: !0
    });
    class AT {
      constructor(TT, UT, mT, WT, zT) {
        this.id = TT, this.createF = UT, this.updateF = mT, this.compareF = WT, this.spec = zT, this.provides = void 0
      }
      static define(TT) {
        let UT = new AT(KT++, TT.create, TT.update, TT.compare || ((TT, UT) => TT === UT), TT);
        return TT.provide && (UT.provides = TT.provide(UT)), UT
      }
      create(TT) {
        let UT = TT.facet(oT).find((TT => TT.field == this));
        return ((null === UT || void 0 === UT ? void 0 : UT.create) || this.createF)(TT)
      }
      slot(TT) {
        let UT = TT[this.id] >> 1;
        return {
          create: TT => (TT.values[UT] = this.create(TT), 1),
          update: (TT, mT) => {
            let WT = TT.values[UT],
              zT = this.updateF(WT, mT);
            return this.compareF(WT, zT) ? 0 : (TT.values[UT] = zT, 1)
          },
          reconfigure: (TT, mT) => {
            let WT, zT = TT.facet(oT),
              MT = mT.facet(oT);
            return (WT = zT.find((TT => TT.field == this))) && WT != MT.find((TT => TT.field == this)) ? (TT.values[UT] = WT.create(TT), 1) : null != mT.config.address[this.id] ? (TT.values[UT] = mT.field(this), 0) : (TT.values[UT] = this.create(TT), 1)
          }
        }
      }
      init(TT) {
        return [this, oT.of({
          field: this,
          create: TT
        })]
      }
      get extension() {
        return this
      }
    }
    const RT = 4,
      TU = 3,
      UU = 2,
      mU = 1;

    function WU(TT) {
      return UT => new MU(UT, TT)
    }
    const zU = {
      highest: WU(0),
      high: WU(mU),
      default: WU(UU),
      low: WU(TU),
      lowest: WU(RT)
    };
    class MU {
      constructor(TT, UT) {
        this.inner = TT, this.prec = UT
      }
    }
    class gU {
      of(TT) {
        return new nU(this, TT)
      }
      reconfigure(TT) {
        return gU.reconfigure.of({
          compartment: this,
          extension: TT
        })
      }
      get(TT) {
        return TT.config.compartments.get(this)
      }
    }
    class nU {
      constructor(TT, UT) {
        this.compartment = TT, this.inner = UT
      }
    }
    class HU {
      constructor(TT, UT, mT, WT, zT, MT) {
        for (this.base = TT, this.compartments = UT, this.dynamicSlots = mT, this.address = WT, this.staticValues = zT, this.facets = MT, this.statusTemplate = []; this.statusTemplate.length < mT.length;) this.statusTemplate.push(0)
      }
      staticFacet(TT) {
        let UT = this.address[TT.id];
        return null == UT ? TT.default : this.staticValues[UT >> 1]
      }
      static resolve(TT, UT, mT) {
        let WT = [],
          zT = Object.create(null),
          MT = new Map;
        for (let lT of function(TT, UT, mT) {
            let WT = [
                [],
                [],
                [],
                [],
                []
              ],
              zT = new Map;

            function MT(TT, gT) {
              let nT = zT.get(TT);
              if (null != nT) {
                if (nT <= gT) return;
                let UT = WT[nT].indexOf(TT);
                UT > -1 && WT[nT].splice(UT, 1), TT instanceof nU && mT.delete(TT.compartment)
              }
              if (zT.set(TT, gT), Array.isArray(TT))
                for (let UT of TT) MT(UT, gT);
              else if (TT instanceof nU) {
                if (mT.has(TT.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let WT = UT.get(TT.compartment) || TT.inner;
                mT.set(TT.compartment, WT), MT(WT, gT)
              } else if (TT instanceof MU) MT(TT.inner, TT.prec);
              else if (TT instanceof AT) WT[gT].push(TT), TT.provides && MT(TT.provides, gT);
              else if (TT instanceof NT) WT[gT].push(TT), TT.facet.extensions && MT(TT.facet.extensions, UU);
              else {
                let UT = TT.extension;
                if (!UT) throw new Error(`Unrecognized extension value in extension set (${TT}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                MT(UT, gT)
              }
            }
            return MT(TT, UU), WT.reduce(((TT, UT) => TT.concat(UT)))
          }(TT, UT, MT)) lT instanceof AT ? WT.push(lT) : (zT[lT.facet.id] || (zT[lT.facet.id] = [])).push(lT);
        let gT = Object.create(null),
          nT = [],
          HT = [];
        for (let lT of WT) gT[lT.id] = HT.length << 1, HT.push((TT => lT.slot(TT)));
        let kT = null === mT || void 0 === mT ? void 0 : mT.config.facets;
        for (let lT in zT) {
          let TT = zT[lT],
            UT = TT[0].facet,
            WT = kT && kT[lT] || [];
          if (TT.every((TT => 0 == TT.type)))
            if (gT[UT.id] = nT.length << 1 | 1, GT(WT, TT)) nT.push(mT.facet(UT));
            else {
              let WT = UT.combine(TT.map((TT => TT.value)));
              nT.push(mT && UT.compare(WT, mT.facet(UT)) ? mT.facet(UT) : WT)
            }
          else {
            for (let UT of TT) 0 == UT.type ? (gT[UT.id] = nT.length << 1 | 1, nT.push(UT.value)) : (gT[UT.id] = HT.length << 1, HT.push((TT => UT.dynamicSlot(TT))));
            gT[UT.id] = HT.length << 1, HT.push((mT => DT(mT, UT, TT)))
          }
        }
        let jT = HT.map((TT => TT(gT)));
        return new HU(TT, MT, jT, gT, nT, zT)
      }
    }

    function kU(TT, UT) {
      if (1 & UT) return 2;
      let mT = UT >> 1,
        WT = TT.status[mT];
      if (4 == WT) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & WT) return WT;
      TT.status[mT] = 4;
      let zT = TT.computeSlot(TT, TT.config.dynamicSlots[mT]);
      return TT.status[mT] = 2 | zT
    }

    function jU(TT, UT) {
      return 1 & UT ? TT.config.staticValues[UT >> 1] : TT.values[UT >> 1]
    }
    const lU = ST.define(),
      LU = ST.define({
        combine: TT => TT.some((TT => TT)),
        static: !0
      }),
      pU = ST.define({
        combine: TT => TT.length ? TT[0] : void 0,
        static: !0
      }),
      BU = ST.define(),
      ZU = ST.define(),
      cU = ST.define(),
      vU = ST.define({
        combine: TT => !!TT.length && TT[0]
      });
    class fU {
      constructor(TT, UT) {
        this.type = TT, this.value = UT
      }
      static define() {
        return new qU
      }
    }
    class qU {
      of(TT) {
        return new fU(this, TT)
      }
    }
    class iU {
      constructor(TT) {
        this.map = TT
      }
      of(TT) {
        return new bU(this, TT)
      }
    }
    class bU {
      constructor(TT, UT) {
        this.type = TT, this.value = UT
      }
      map(TT) {
        let UT = this.type.map(this.value, TT);
        return void 0 === UT ? void 0 : UT == this.value ? this : new bU(this.type, UT)
      }
      is(TT) {
        return this.type == TT
      }
      static define() {
        return new iU((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (TT => TT))
      }
      static mapEffects(TT, UT) {
        if (!TT.length) return TT;
        let mT = [];
        for (let WT of TT) {
          let TT = WT.map(UT);
          TT && mT.push(TT)
        }
        return mT
      }
    }
    bU.reconfigure = bU.define(), bU.appendConfig = bU.define();
    class OU {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.startState = TT, this.changes = UT, this.selection = mT, this.effects = WT, this.annotations = zT, this.scrollIntoView = MT, this._doc = null, this._state = null, mT && rT(mT, UT.newLength), zT.some((TT => TT.type == OU.time)) || (this.annotations = zT.concat(OU.time.of(Date.now())))
      }
      static create(TT, UT, mT, WT, zT, MT) {
        return new OU(TT, UT, mT, WT, zT, MT)
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
        for (let UT of this.annotations)
          if (UT.type == TT) return UT.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(TT) {
        let UT = this.annotation(OU.userEvent);
        return !(!UT || !(UT == TT || UT.length > TT.length && UT.slice(0, TT.length) == TT && "." == UT[TT.length]))
      }
    }

    function eU(TT, UT) {
      let mT = [];
      for (let WT = 0, zT = 0;;) {
        let MT, gT;
        if (WT < TT.length && (zT == UT.length || UT[zT] >= TT[WT])) MT = TT[WT++], gT = TT[WT++];
        else {
          if (!(zT < UT.length)) return mT;
          MT = UT[zT++], gT = UT[zT++]
        }!mT.length || mT[mT.length - 1] < MT ? mT.push(MT, gT) : mT[mT.length - 1] < gT && (mT[mT.length - 1] = gT)
      }
    }

    function YU(TT, UT, mT) {
      var WT;
      let zT, MT, gT;
      return mT ? (zT = UT.changes, MT = XT.empty(UT.changes.length), gT = TT.changes.compose(UT.changes)) : (zT = UT.changes.map(TT.changes), MT = TT.changes.mapDesc(UT.changes, !0), gT = TT.changes.compose(zT)), {
        changes: gT,
        selection: UT.selection ? UT.selection.map(MT) : null === (WT = TT.selection) || void 0 === WT ? void 0 : WT.map(zT),
        effects: bU.mapEffects(TT.effects, zT).concat(bU.mapEffects(UT.effects, MT)),
        annotations: TT.annotations.length ? TT.annotations.concat(UT.annotations) : UT.annotations,
        scrollIntoView: TT.scrollIntoView || UT.scrollIntoView
      }
    }

    function JU(TT, UT, mT) {
      let WT = UT.selection,
        zT = wU(UT.annotations);
      return UT.userEvent && (zT = zT.concat(OU.userEvent.of(UT.userEvent))), {
        changes: UT.changes instanceof XT ? UT.changes : XT.of(UT.changes || [], mT, TT.facet(pU)),
        selection: WT && (WT instanceof CT ? WT : CT.single(WT.anchor, WT.head)),
        effects: wU(UT.effects),
        annotations: zT,
        scrollIntoView: !!UT.scrollIntoView
      }
    }

    function xU(TT, UT, mT) {
      let WT = JU(TT, UT.length ? UT[0] : {}, TT.doc.length);
      UT.length && !1 === UT[0].filter && (mT = !1);
      for (let MT = 1; MT < UT.length; MT++) {
        !1 === UT[MT].filter && (mT = !1);
        let zT = !!UT[MT].sequential;
        WT = YU(WT, JU(TT, UT[MT], zT ? WT.changes.newLength : TT.doc.length), zT)
      }
      let zT = OU.create(TT, WT.changes, WT.selection, WT.effects, WT.annotations, WT.scrollIntoView);
      return function(TT) {
        let UT = TT.startState,
          mT = UT.facet(cU),
          WT = TT;
        for (let zT = mT.length - 1; zT >= 0; zT--) {
          let MT = mT[zT](TT);
          MT && Object.keys(MT).length && (WT = YU(WT, JU(UT, MT, TT.changes.newLength), !0))
        }
        return WT == TT ? TT : OU.create(UT, TT.changes, TT.selection, WT.effects, WT.annotations, WT.scrollIntoView)
      }(mT ? function(TT) {
        let UT = TT.startState,
          mT = !0;
        for (let zT of UT.facet(BU)) {
          let UT = zT(TT);
          if (!1 === UT) {
            mT = !1;
            break
          }
          Array.isArray(UT) && (mT = !0 === mT ? UT : eU(mT, UT))
        }
        if (!0 !== mT) {
          let WT, zT;
          if (!1 === mT) zT = TT.changes.invertedDesc, WT = XT.empty(UT.doc.length);
          else {
            let UT = TT.changes.filter(mT);
            WT = UT.changes, zT = UT.filtered.mapDesc(UT.changes).invertedDesc
          }
          TT = OU.create(UT, WT, TT.selection && TT.selection.map(zT), bU.mapEffects(TT.effects, zT), TT.annotations, TT.scrollIntoView)
        }
        let WT = UT.facet(ZU);
        for (let zT = WT.length - 1; zT >= 0; zT--) {
          let mT = WT[zT](TT);
          TT = mT instanceof OU ? mT : Array.isArray(mT) && 1 == mT.length && mT[0] instanceof OU ? mT[0] : xU(UT, wU(mT), !1)
        }
        return TT
      }(zT) : zT)
    }
    OU.time = fU.define(), OU.userEvent = fU.define(), OU.addToHistory = fU.define(), OU.remote = fU.define();
    const dU = [];

    function wU(TT) {
      return null == TT ? dU : Array.isArray(TT) ? TT : [TT]
    }
    var tU = function(TT) {
      return TT[TT.Word = 0] = "Word", TT[TT.Space = 1] = "Space", TT[TT.Other = 2] = "Other", TT
    }(tU || (tU = {}));
    const aU = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let yU;
    try {
      yU = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (mm) {}

    function XU(TT) {
      return UT => {
        if (!/\S/.test(UT)) return tU.Space;
        if (function(TT) {
            if (yU) return yU.test(TT);
            for (let UT = 0; UT < TT.length; UT++) {
              let mT = TT[UT];
              if (/\w/.test(mT) || mT > "\x80" && (mT.toUpperCase() != mT.toLowerCase() || aU.test(mT))) return !0
            }
            return !1
          }(UT)) return tU.Word;
        for (let mT = 0; mT < TT.length; mT++)
          if (UT.indexOf(TT[mT]) > -1) return tU.Word;
        return tU.Other
      }
    }
    class IU {
      constructor(TT, UT, mT, WT, zT, MT) {
        this.config = TT, this.doc = UT, this.selection = mT, this.values = WT, this.status = TT.statusTemplate.slice(), this.computeSlot = zT, MT && (MT._state = this);
        for (let gT = 0; gT < this.config.dynamicSlots.length; gT++) kU(this, gT << 1);
        this.computeSlot = null
      }
      field(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          mT = this.config.address[TT.id];
        if (null != mT) return kU(this, mT), jU(this, mT);
        if (UT) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        return xU(this, UT, !0)
      }
      applyTransaction(TT) {
        let UT, mT = this.config,
          {
            base: WT,
            compartments: zT
          } = mT;
        for (let gT of TT.effects) gT.is(gU.reconfigure) ? (mT && (zT = new Map, mT.compartments.forEach(((TT, UT) => zT.set(UT, TT))), mT = null), zT.set(gT.value.compartment, gT.value.extension)) : gT.is(bU.reconfigure) ? (mT = null, WT = gT.value) : gT.is(bU.appendConfig) && (mT = null, WT = wU(WT).concat(gT.value));
        if (mT) UT = TT.startState.values.slice();
        else {
          mT = HU.resolve(WT, zT, this), UT = new IU(mT, this.doc, this.selection, mT.dynamicSlots.map((() => null)), ((TT, UT) => UT.reconfigure(TT, this)), null).values
        }
        let MT = TT.startState.facet(LU) ? TT.newSelection : TT.newSelection.asSingle();
        new IU(mT, TT.newDoc, MT, UT, ((UT, mT) => mT.update(UT, TT)), TT)
      }
      replaceSelection(TT) {
        return "string" == typeof TT && (TT = this.toText(TT)), this.changeByRange((UT => ({
          changes: {
            from: UT.from,
            to: UT.to,
            insert: TT
          },
          range: CT.cursor(UT.from + TT.length)
        })))
      }
      changeByRange(TT) {
        let UT = this.selection,
          mT = TT(UT.hZ[0]),
          WT = this.changes(mT.changes),
          zT = [mT.range],
          MT = wU(mT.effects);
        for (let gT = 1; gT < UT.hZ.length; gT++) {
          let mT = TT(UT.hZ[gT]),
            nT = this.changes(mT.changes),
            HT = nT.map(WT);
          for (let TT = 0; TT < gT; TT++) zT[TT] = zT[TT].map(HT);
          let kT = WT.mapDesc(nT, !0);
          zT.push(mT.range.map(kT)), WT = WT.compose(HT), MT = bU.mapEffects(MT, HT).concat(bU.mapEffects(wU(mT.effects), kT))
        }
        return {
          changes: WT,
          selection: CT.create(zT, UT.mainIndex),
          effects: MT
        }
      }
      changes() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return TT instanceof XT ? TT : XT.of(TT, this.doc.length, this.facet(IU.lineSeparator))
      }
      toText(TT) {
        return ZT.of(TT.split(this.facet(IU.lineSeparator) || tT))
      }
      sliceDoc() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(TT, UT, this.lineBreak)
      }
      facet(TT) {
        let UT = this.config.address[TT.id];
        return null == UT ? TT.default : (kU(this, UT), jU(this, UT))
      }
      toJSON(TT) {
        let UT = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (TT)
          for (let mT in TT) {
            let WT = TT[mT];
            WT instanceof AT && null != this.config.address[WT.id] && (UT[mT] = WT.spec.toJSON(this.field(TT[mT]), this))
          }
        return UT
      }
      static fromJSON(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          mT = arguments.length > 2 ? arguments[2] : void 0;
        if (!TT || "string" != typeof TT.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let WT = [];
        if (mT)
          for (let zT in mT)
            if (Object.prototype.hasOwnProperty.call(TT, zT)) {
              let UT = mT[zT],
                MT = TT[zT];
              WT.push(UT.init((TT => UT.spec.fromJSON(MT, TT))))
            } return IU.create({
          doc: TT.doc,
          selection: CT.fromJSON(TT.selection),
          extensions: UT.extensions ? WT.concat([UT.extensions]) : WT
        })
      }
      static create() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          UT = HU.resolve(TT.extensions || [], new Map),
          mT = TT.doc instanceof ZT ? TT.doc : ZT.of((TT.doc || "").split(UT.staticFacet(IU.lineSeparator) || tT)),
          WT = TT.selection ? TT.selection instanceof CT ? TT.selection : CT.single(TT.selection.anchor, TT.selection.head) : CT.single(0);
        return rT(WT, mT.length), UT.staticFacet(LU) || (WT = WT.asSingle()), new IU(UT, mT, WT, UT.dynamicSlots.map((() => null)), ((TT, UT) => UT.create(TT)), null)
      }
      get tabSize() {
        return this.facet(IU.tabSize)
      }
      get lineBreak() {
        return this.facet(IU.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(vU)
      }
      phrase(TT) {
        for (var UT = arguments.length, mT = new Array(UT > 1 ? UT - 1 : 0), WT = 1; WT < UT; WT++) mT[WT - 1] = arguments[WT];
        for (let zT of this.facet(IU.phrases))
          if (Object.prototype.hasOwnProperty.call(zT, TT)) {
            TT = zT[TT];
            break
          } return mT.length && (TT = TT.replace(/\$(\$|\d*)/g, ((TT, UT) => {
          if ("$" == UT) return "$";
          let WT = +(UT || 1);
          return !WT || WT > mT.length ? TT : mT[WT - 1]
        }))), TT
      }
      languageDataAt(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          WT = [];
        for (let zT of this.facet(lU))
          for (let MT of zT(this, UT, mT)) Object.prototype.hasOwnProperty.call(MT, TT) && WT.push(MT[TT]);
        return WT
      }
      charCategorizer(TT) {
        let UT = this.languageDataAt("wordChars", TT);
        return XU(UT.length ? UT[0] : "")
      }
      wordAt(TT) {
        let {
          text: UT,
          from: mT,
          length: WT
        } = this.doc.lineAt(TT), zT = this.charCategorizer(TT), MT = TT - mT, gT = TT - mT;
        for (; MT > 0;) {
          let TT = JT(UT, MT, !1);
          if (zT(UT.slice(TT, MT)) != tU.Word) break;
          MT = TT
        }
        for (; gT < WT;) {
          let TT = JT(UT, gT);
          if (zT(UT.slice(gT, TT)) != tU.Word) break;
          gT = TT
        }
        return MT == gT ? null : CT.range(MT + mT, gT + mT)
      }
    }

    function QU(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        WT = {};
      for (let zT of TT)
        for (let TT of Object.keys(zT)) {
          let UT = zT[TT],
            MT = WT[TT];
          if (void 0 === MT) WT[TT] = UT;
          else if (MT === UT || void 0 === UT);
          else {
            if (!Object.hasOwnProperty.call(mT, TT)) throw new Error("Config merge conflict for field " + TT);
            WT[TT] = mT[TT](MT, UT)
          }
        }
      for (let zT in UT) void 0 === WT[zT] && (WT[zT] = UT[zT]);
      return WT
    }
    IU.allowMultipleSelections = LU, IU.tabSize = ST.define({
      combine: TT => TT.length ? TT[0] : 4
    }), IU.lineSeparator = pU, IU.readOnly = vU, IU.phrases = ST.define({
      compare(TT, UT) {
        let mT = Object.keys(TT),
          WT = Object.keys(UT);
        return mT.length == WT.length && mT.every((mT => TT[mT] == UT[mT]))
      }
    }), IU.languageData = lU, IU.changeFilter = BU, IU.transactionFilter = ZU, IU.transactionExtender = cU, gU.reconfigure = bU.define();
    class sU {
      eq(TT) {
        return this == TT
      }
      range(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        return PU.create(TT, UT, this)
      }
    }

    function FU(TT, UT) {
      return TT == UT || TT.constructor == UT.constructor && TT.eq(UT)
    }
    sU.prototype.startSide = sU.prototype.endSide = 0, sU.prototype.point = !1, sU.prototype.mapMode = aT.TrackDel;
    class PU {
      constructor(TT, UT, mT) {
        this.from = TT, this.to = UT, this.value = mT
      }
      static create(TT, UT, mT) {
        return new PU(TT, UT, mT)
      }
    }

    function VU(TT, UT) {
      return TT.from - UT.from || TT.value.startSide - UT.value.startSide
    }
    class uU {
      constructor(TT, UT, mT, WT) {
        this.from = TT, this.to = UT, this.value = mT, this.OWT = WT
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          zT = mT ? this.to : this.from;
        for (let MT = WT, gT = zT.length;;) {
          if (MT == gT) return MT;
          let WT = MT + gT >> 1,
            nT = zT[WT] - TT || (mT ? this.value[WT].endSide : this.value[WT].startSide) - UT;
          if (WT == MT) return nT >= 0 ? MT : gT;
          nT >= 0 ? gT = WT : MT = WT + 1
        }
      }
      between(TT, UT, mT, WT) {
        for (let zT = this.findIndex(UT, -1e9, !0), MT = this.findIndex(mT, 1e9, !1, zT); zT < MT; zT++)
          if (!1 === WT(this.from[zT] + TT, this.to[zT] + TT, this.value[zT])) return !1
      }
      map(TT, UT) {
        let mT = [],
          WT = [],
          zT = [],
          MT = -1,
          gT = -1;
        for (let nT = 0; nT < this.value.length; nT++) {
          let HT, kT, jT = this.value[nT],
            lT = this.from[nT] + TT,
            LT = this.to[nT] + TT;
          if (lT == LT) {
            let TT = UT.mapPos(lT, jT.startSide, jT.mapMode);
            if (null == TT) continue;
            if (HT = kT = TT, jT.startSide != jT.endSide && (kT = UT.mapPos(lT, jT.endSide), kT < HT)) continue
          } else if (HT = UT.mapPos(lT, jT.startSide), kT = UT.mapPos(LT, jT.endSide), HT > kT || HT == kT && jT.startSide > 0 && jT.endSide <= 0) continue;
          (kT - HT || jT.endSide - jT.startSide) < 0 || (MT < 0 && (MT = HT), jT.point && (gT = Math.max(gT, kT - HT)), mT.push(jT), WT.push(HT - MT), zT.push(kT - MT))
        }
        return {
          mapped: mT.length ? new uU(WT, zT, mT, gT) : null,
          pos: MT
        }
      }
    }
    class CU {
      constructor(TT, UT, mT, WT) {
        this.chunkPos = TT, this.chunk = UT, this.nextLayer = mT, this.OWT = WT
      }
      static create(TT, UT, mT, WT) {
        return new CU(TT, UT, mT, WT)
      }
      get length() {
        let TT = this.chunk.length - 1;
        return TT < 0 ? 0 : Math.max(this.chunkEnd(TT), this.nextLayer.length)
      }
      get size() {
        if (this.TB) return 0;
        let TT = this.nextLayer.size;
        for (let UT of this.chunk) TT += UT.value.length;
        return TT
      }
      chunkEnd(TT) {
        return this.chunkPos[TT] + this.chunk[TT].length
      }
      update(TT) {
        let {
          add: UT = [],
          sort: mT = !1,
          filterFrom: WT = 0,
          filterTo: zT = this.length
        } = TT, MT = TT.filter;
        if (0 == UT.length && !MT) return this;
        if (mT && (UT = UT.slice().sort(VU)), this.TB) return UT.length ? CU.of(UT) : this;
        let gT = new SU(this, null, -1).goto(0),
          nT = 0,
          HT = [],
          kT = new rU;
        for (; gT.value || nT < UT.length;)
          if (nT < UT.length && (gT.from - UT[nT].from || gT.startSide - UT[nT].value.startSide) >= 0) {
            let TT = UT[nT++];
            kT.addInner(TT.from, TT.to, TT.value) || HT.push(TT)
          } else 1 == gT.rangeIndex && gT.chunkIndex < this.chunk.length && (nT == UT.length || this.chunkEnd(gT.chunkIndex) < UT[nT].from) && (!MT || WT > this.chunkEnd(gT.chunkIndex) || zT < this.chunkPos[gT.chunkIndex]) && kT.addChunk(this.chunkPos[gT.chunkIndex], this.chunk[gT.chunkIndex]) ? gT.nextChunk() : ((!MT || WT > gT.to || zT < gT.from || MT(gT.from, gT.to, gT.value)) && (kT.addInner(gT.from, gT.to, gT.value) || HT.push(PU.create(gT.from, gT.to, gT.value))), gT.next());
        return kT.finishInner(this.nextLayer.TB && !HT.length ? CU.empty : this.nextLayer.update({
          add: HT,
          filter: MT,
          filterFrom: WT,
          filterTo: zT
        }))
      }
      map(TT) {
        if (TT.empty || this.TB) return this;
        let UT = [],
          mT = [],
          WT = -1;
        for (let MT = 0; MT < this.chunk.length; MT++) {
          let zT = this.chunkPos[MT],
            gT = this.chunk[MT],
            nT = TT.touchesRange(zT, zT + gT.length);
          if (!1 === nT) WT = Math.max(WT, gT.OWT), UT.push(gT), mT.push(TT.mapPos(zT));
          else if (!0 === nT) {
            let {
              mapped: MT,
              pos: nT
            } = gT.map(zT, TT);
            MT && (WT = Math.max(WT, MT.OWT), UT.push(MT), mT.push(nT))
          }
        }
        let zT = this.nextLayer.map(TT);
        return 0 == UT.length ? zT : new CU(mT, UT, zT || CU.empty, WT)
      }
      between(TT, UT, mT) {
        if (!this.TB) {
          for (let WT = 0; WT < this.chunk.length; WT++) {
            let zT = this.chunkPos[WT],
              MT = this.chunk[WT];
            if (UT >= zT && TT <= zT + MT.length && !1 === MT.between(zT, TT - zT, UT - zT, mT)) return
          }
          this.nextLayer.between(TT, UT, mT)
        }
      }
      iter() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return GU.from([this]).goto(TT)
      }
      get TB() {
        return this.nextLayer == this
      }
      static iter(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GU.from(TT).goto(UT)
      }
      static compare(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          MT = TT.filter((TT => TT.OWT > 0 || !TT.TB && TT.OWT >= zT)),
          gT = UT.filter((TT => TT.OWT > 0 || !TT.TB && TT.OWT >= zT)),
          nT = KU(MT, gT, mT),
          HT = new EU(MT, nT, zT),
          kT = new EU(gT, nT, zT);
        mT.iterGaps(((TT, UT, mT) => hU(HT, TT, kT, UT, mT, WT))), mT.empty && 0 == mT.length && hU(HT, 0, kT, 0, 0, WT)
      }
      static eq(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        null == WT && (WT = 999999999);
        let zT = TT.filter((TT => !TT.TB && UT.indexOf(TT) < 0)),
          MT = UT.filter((UT => !UT.TB && TT.indexOf(UT) < 0));
        if (zT.length != MT.length) return !1;
        if (!zT.length) return !0;
        let gT = KU(zT, MT),
          nT = new EU(zT, gT, 0).goto(mT),
          HT = new EU(MT, gT, 0).goto(mT);
        for (;;) {
          if (nT.to != HT.to || !DU(nT.active, HT.active) || nT.point && (!HT.point || !FU(nT.point, HT.point))) return !1;
          if (nT.to > WT) return !0;
          nT.next(), HT.next()
        }
      }
      static spans(TT, UT, mT, WT) {
        let zT = new EU(TT, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(UT),
          MT = UT,
          gT = zT.openStart;
        for (;;) {
          let TT = Math.min(zT.to, mT);
          if (zT.point) {
            let mT = zT.activeForPoint(zT.to),
              nT = zT.pointFrom < UT ? mT.length + 1 : zT.point.startSide < 0 ? mT.length : Math.min(mT.length, gT);
            WT.point(MT, TT, zT.point, mT, nT, zT.pointRank), gT = Math.min(zT.openEnd(TT), mT.length)
          } else TT > MT && (WT.span(MT, TT, zT.active, gT), gT = zT.openEnd(TT));
          if (zT.to > mT) return gT + (zT.point && zT.to > mT ? 1 : 0);
          MT = zT.to, zT.next()
        }
      }
      static of (TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = new rU;
        for (let WT of TT instanceof PU ? [TT] : UT ? function(TT) {
            if (TT.length > 1)
              for (let UT = TT[0], mT = 1; mT < TT.length; mT++) {
                let WT = TT[mT];
                if (VU(UT, WT) > 0) return TT.slice().sort(VU);
                UT = WT
              }
            return TT
          }(TT) : TT) mT.add(WT.from, WT.to, WT.value);
        return mT.finish()
      }
      static join(TT) {
        if (!TT.length) return CU.empty;
        let UT = TT[TT.length - 1];
        for (let mT = TT.length - 2; mT >= 0; mT--)
          for (let WT = TT[mT]; WT != CU.empty; WT = WT.nextLayer) UT = new CU(WT.chunkPos, WT.chunk, UT, Math.max(WT.OWT, UT.OWT));
        return UT
      }
    }
    CU.empty = new CU([], [], null, -1), CU.empty.nextLayer = CU.empty;
    class rU {
      finishChunk(TT) {
        this.chunks.push(new uU(this.from, this.to, this.value, this.OWT)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.OWT), this.OWT = -1, TT && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.OWT = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(TT, UT, mT) {
        this.addInner(TT, UT, mT) || (this.nextLayer || (this.nextLayer = new rU)).add(TT, UT, mT)
      }
      addInner(TT, UT, mT) {
        let WT = TT - this.lastTo || mT.startSide - this.last.endSide;
        if (WT <= 0 && (TT - this.lastFrom || mT.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(WT < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = TT), this.from.push(TT - this.chunkStart), this.to.push(UT - this.chunkStart), this.last = mT, this.lastFrom = TT, this.lastTo = UT, this.value.push(mT), mT.point && (this.OWT = Math.max(this.OWT, UT - TT)), !0)
      }
      addChunk(TT, UT) {
        if ((TT - this.lastTo || UT.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, UT.OWT), this.chunks.push(UT), this.chunkPos.push(TT);
        let mT = UT.value.length - 1;
        return this.last = UT.value[mT], this.lastFrom = UT.from[mT] + TT, this.lastTo = UT.to[mT] + TT, !0
      }
      finish() {
        return this.finishInner(CU.empty)
      }
      finishInner(TT) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return TT;
        let UT = CU.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(TT) : TT, this.setMaxPoint);
        return this.from = null, UT
      }
    }

    function KU(TT, UT, mT) {
      let WT = new Map;
      for (let MT of TT)
        for (let TT = 0; TT < MT.chunk.length; TT++) MT.chunk[TT].OWT <= 0 && WT.set(MT.chunk[TT], MT.chunkPos[TT]);
      let zT = new Set;
      for (let MT of UT)
        for (let TT = 0; TT < MT.chunk.length; TT++) {
          let UT = WT.get(MT.chunk[TT]);
          null == UT || (mT ? mT.mapPos(UT) : UT) != MT.chunkPos[TT] || (null === mT || void 0 === mT ? void 0 : mT.touchesRange(UT, UT + MT.chunk[TT].length)) || zT.add(MT.chunk[TT])
        }
      return zT
    }
    class SU {
      constructor(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = TT, this.skip = UT, this.eWT = mT, this.rank = WT
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(TT, UT, !1), this
      }
      gotoInner(TT, UT, mT) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let UT = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(UT) || this.layer.chunkEnd(this.chunkIndex) < TT || UT.OWT < this.eWT)) break;
          this.chunkIndex++, mT = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let WT = this.layer.chunk[this.chunkIndex].findIndex(TT - this.layer.chunkPos[this.chunkIndex], UT, !0);
          (!mT || this.rangeIndex < WT) && this.setRangeIndex(WT)
        }
        this.next()
      }
      forward(TT, UT) {
        (this.to - TT || this.endSide - UT) < 0 && this.gotoInner(TT, UT, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let TT = this.layer.chunkPos[this.chunkIndex],
              UT = this.layer.chunk[this.chunkIndex],
              mT = TT + UT.from[this.rangeIndex];
            if (this.from = mT, this.to = TT + UT.to[this.rangeIndex], this.value = UT.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.eWT < 0 || this.value.point && this.to - this.from >= this.eWT) break
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
    class GU {
      constructor(TT) {
        this.heap = TT
      }
      static from(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          WT = [];
        for (let zT = 0; zT < TT.length; zT++)
          for (let MT = TT[zT]; !MT.TB; MT = MT.nextLayer) MT.OWT >= mT && WT.push(new SU(MT, UT, mT, zT));
        return 1 == WT.length ? WT[0] : new GU(WT)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let mT of this.heap) mT.goto(TT, UT);
        for (let mT = this.heap.length >> 1; mT >= 0; mT--) NU(this.heap, mT);
        return this.next(), this
      }
      forward(TT, UT) {
        for (let mT of this.heap) mT.forward(TT, UT);
        for (let mT = this.heap.length >> 1; mT >= 0; mT--) NU(this.heap, mT);
        (this.to - TT || this.value.endSide - UT) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let TT = this.heap[0];
          this.from = TT.from, this.to = TT.to, this.value = TT.value, this.rank = TT.rank, TT.value && TT.next(), NU(this.heap, 0)
        }
      }
    }

    function NU(TT, UT) {
      for (let mT = TT[UT];;) {
        let WT = 1 + (UT << 1);
        if (WT >= TT.length) break;
        let zT = TT[WT];
        if (WT + 1 < TT.length && zT.compare(TT[WT + 1]) >= 0 && (zT = TT[WT + 1], WT++), mT.compare(zT) < 0) break;
        TT[WT] = mT, TT[UT] = zT, UT = WT
      }
    }
    class EU {
      constructor(TT, UT, mT) {
        this.eWT = mT, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = GU.from(TT, UT, mT)
      }
      goto(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(TT, UT), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = TT, this.endSide = UT, this.openStart = -1, this.next(), this
      }
      forward(TT, UT) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - TT || this.active[this.minActive].endSide - UT) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(TT, UT)
      }
      removeActive(TT) {
        oU(this.active, TT), oU(this.activeTo, TT), oU(this.activeRank, TT), this.minActive = RU(this.active, this.activeTo)
      }
      addActive(TT) {
        let UT = 0,
          {
            value: mT,
            to: WT,
            rank: zT
          } = this.cursor;
        for (; UT < this.activeRank.length && (zT - this.activeRank[UT] || WT - this.activeTo[UT]) > 0;) UT++;
        AU(this.active, UT, mT), AU(this.activeTo, UT, WT), AU(this.activeRank, UT, zT), TT && AU(TT, UT, this.cursor.from), this.minActive = RU(this.active, this.activeTo)
      }
      next() {
        let TT = this.to,
          UT = this.point;
        this.point = null;
        let mT = this.openStart < 0 ? [] : null;
        for (;;) {
          let WT = this.minActive;
          if (WT > -1 && (this.activeTo[WT] - this.cursor.from || this.active[WT].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[WT] > TT) {
              this.to = this.activeTo[WT], this.endSide = this.active[WT].endSide;
              break
            }
            this.removeActive(WT), mT && oU(mT, WT)
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
                if (!(UT && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = TT, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = TT.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(mT), this.cursor.next()
            }
          }
        }
        if (mT) {
          this.openStart = 0;
          for (let UT = mT.length - 1; UT >= 0 && mT[UT] < TT; UT--) this.openStart++
        }
      }
      activeForPoint(TT) {
        if (!this.active.length) return this.active;
        let UT = [];
        for (let mT = this.active.length - 1; mT >= 0 && !(this.activeRank[mT] < this.pointRank); mT--)(this.activeTo[mT] > TT || this.activeTo[mT] == TT && this.active[mT].endSide >= this.point.endSide) && UT.push(this.active[mT]);
        return UT.reverse()
      }
      openEnd(TT) {
        let UT = 0;
        for (let mT = this.activeTo.length - 1; mT >= 0 && this.activeTo[mT] > TT; mT--) UT++;
        return UT
      }
    }

    function hU(TT, UT, mT, WT, zT, MT) {
      TT.goto(UT), mT.goto(WT);
      let gT = WT + zT,
        nT = WT,
        HT = WT - UT,
        kT = !!MT.boundChange;
      for (let jT = !1;;) {
        let UT = TT.to + HT - mT.to,
          WT = UT || TT.endSide - mT.endSide,
          zT = WT < 0 ? TT.to + HT : mT.to,
          lT = Math.min(zT, gT);
        if (TT.point || mT.point ? (TT.point && mT.point && FU(TT.point, mT.point) && DU(TT.activeForPoint(TT.to), mT.activeForPoint(mT.to)) || MT.comparePoint(nT, lT, TT.point, mT.point), jT = !1) : (jT && MT.boundChange(nT), lT > nT && !DU(TT.active, mT.active) && MT.compareRange(nT, lT, TT.active, mT.active), kT && lT < gT && (UT || TT.openEnd(zT) != mT.openEnd(zT)) && (jT = !0)), zT > gT) break;
        nT = zT, WT <= 0 && TT.next(), WT >= 0 && mT.next()
      }
    }

    function DU(TT, UT) {
      if (TT.length != UT.length) return !1;
      for (let mT = 0; mT < TT.length; mT++)
        if (TT[mT] != UT[mT] && !FU(TT[mT], UT[mT])) return !1;
      return !0
    }

    function oU(TT, UT) {
      for (let mT = UT, WT = TT.length - 1; mT < WT; mT++) TT[mT] = TT[mT + 1];
      TT.pop()
    }

    function AU(TT, UT, mT) {
      for (let WT = TT.length - 1; WT >= UT; WT--) TT[WT + 1] = TT[WT];
      TT[UT] = mT
    }

    function RU(TT, UT) {
      let mT = -1,
        WT = 1e9;
      for (let zT = 0; zT < UT.length; zT++)(UT[zT] - WT || TT[zT].endSide - TT[mT].endSide) < 0 && (mT = zT, WT = UT[zT]);
      return mT
    }

    function Tm(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length,
        WT = 0;
      for (let zT = 0; zT < mT && zT < TT.length;) 9 == TT.charCodeAt(zT) ? (WT += UT - WT % UT, zT++) : (WT++, zT = JT(TT, zT));
      return WT
    }

    function Um(TT, UT, mT, WT) {
      for (let zT = 0, MT = 0;;) {
        if (MT >= UT) return zT;
        if (zT == TT.length) break;
        MT += 9 == TT.charCodeAt(zT) ? mT - MT % mT : 1, zT = JT(TT, zT)
      }
      return !0 === WT ? -1 : TT.length
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);