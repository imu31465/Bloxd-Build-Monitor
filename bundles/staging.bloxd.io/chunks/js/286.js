export const id = 286;
export const ids = [286];
export const modules = {
  40941: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => Qk,
      e: () => HT,
      ChangeSet: () => eT,
      i: () => Jk,
      j: () => LT,
      l: () => Vk,
      o: () => UT,
      r: () => oT,
      t: () => Mk,
      y: () => Rk,
      v: () => gk,
      C: () => Zk,
      F: () => ak,
      H: () => qT,
      I: () => tT,
      M: () => Fk,
      N: () => mT,
      O: () => zT,
      R: () => Ek,
      T: () => kc,
      W: () => wT,
      Y: () => cc,
      _: () => bT
    });
    let lT = [],
      MT = [];

    function KT(TT) {
      if (TT < 768) return !1;
      for (let kT = 0, cT = lT.length;;) {
        let KT = kT + cT >> 1;
        if (TT < lT[KT]) cT = KT;
        else {
          if (!(TT >= MT[KT])) return !0;
          kT = KT + 1
        }
        if (kT == cT) return !1
      }
    }

    function OT(TT) {
      return TT >= 127462 && TT <= 127487
    }(() => {
      let TT = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((TT => TT ? parseInt(TT, 36) : 1));
      for (let kT = 0, cT = 0; kT < TT.length; kT++)(kT % 2 ? MT : lT).push(cT += TT[kT])
    })();
    const yT = 8205;

    function fT(TT, kT) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? xT : IT)(TT, kT, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function xT(TT, kT, cT) {
      if (kT == TT.length) return kT;
      kT && CT(TT.charCodeAt(kT)) && jT(TT.charCodeAt(kT - 1)) && kT--;
      let lT = AT(TT, kT);
      for (kT += vT(lT); kT < TT.length;) {
        let MT = AT(TT, kT);
        if (lT == yT || MT == yT || cT && KT(MT)) kT += vT(MT), lT = MT;
        else {
          if (!OT(MT)) break;
          {
            let cT = 0,
              lT = kT - 2;
            for (; lT >= 0 && OT(AT(TT, lT));) cT++, lT -= 2;
            if (cT % 2 == 0) break;
            kT += 2
          }
        }
      }
      return kT
    }

    function IT(TT, kT, cT) {
      for (; kT > 0;) {
        let lT = xT(TT, kT - 2, cT);
        if (lT < kT) return lT;
        kT--
      }
      return 0
    }

    function AT(TT, kT) {
      let cT = TT.charCodeAt(kT);
      if (!jT(cT) || kT + 1 == TT.length) return cT;
      let lT = TT.charCodeAt(kT + 1);
      return CT(lT) ? lT - 56320 + (cT - 55296 << 10) + 65536 : cT
    }

    function CT(TT) {
      return TT >= 56320 && TT < 57344
    }

    function jT(TT) {
      return TT >= 55296 && TT < 56320
    }

    function vT(TT) {
      return TT < 65536 ? 1 : 2
    }
    class tT {
      lineAt(TT) {
        if (TT < 0 || TT > this.length) throw new RangeError(`Invalid position ${TT} in document of length ${this.length}`);
        return this.lineInner(TT, !1, 1, 0)
      }
      line(TT) {
        if (TT < 1 || TT > this.lines) throw new RangeError(`Invalid line number ${TT} in ${this.lines}-line document`);
        return this.lineInner(TT, !0, 1, 0)
      }
      replace(TT, kT, cT) {
        [TT, kT] = PT(this, TT, kT);
        let lT = [];
        return this.decompose(0, TT, lT, 2), cT.length && cT.decompose(0, cT.length, lT, 3), this.decompose(kT, this.length, lT, 1), NT.from(lT, this.length - (kT - TT) + cT.length)
      }
      append(TT) {
        return this.replace(this.length, this.length, TT)
      }
      slice(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [TT, kT] = PT(this, TT, kT);
        let cT = [];
        return this.decompose(TT, kT, cT, 0), NT.from(cT, kT - TT)
      }
      eq(TT) {
        if (TT == this) return !0;
        if (TT.length != this.length || TT.lines != this.lines) return !1;
        let kT = this.scanIdentical(TT, 1),
          cT = this.length - this.scanIdentical(TT, -1),
          lT = new DT(this),
          MT = new DT(TT);
        for (let KT = kT, OT = kT;;) {
          if (lT.next(KT), MT.next(KT), KT = 0, lT.lineBreak != MT.lineBreak || lT.done != MT.done || lT.value != MT.value) return !1;
          if (OT += lT.value.length, lT.done || OT >= cT) return !0
        }
      }
      iter() {
        return new DT(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new aT(this, TT, kT)
      }
      iterLines(TT, kT) {
        let cT;
        if (null == TT) cT = this.iter();
        else {
          null == kT && (kT = this.lines + 1);
          let lT = this.line(TT).from;
          cT = this.iterRange(lT, Math.max(lT, kT == this.lines + 1 ? this.length : kT <= 1 ? 0 : this.line(kT - 1).to))
        }
        return new FT(cT)
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
        return 1 != TT.length || TT[0] ? TT.length <= 32 ? new hT(TT) : NT.from(hT.split(TT, [])) : tT.empty
      }
    }
    class hT extends tT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(TT) {
          let kT = -1;
          for (let cT of TT) kT += cT.length + 1;
          return kT
        }(TT);
        super(), this.text = TT, this.length = kT
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(TT, kT, cT, lT) {
        for (let MT = 0;; MT++) {
          let KT = this.text[MT],
            OT = lT + KT.length;
          if ((kT ? cT : OT) >= TT) return new rT(lT, OT, cT, KT);
          lT = OT + 1, cT++
        }
      }
      decompose(TT, kT, cT, lT) {
        let MT = TT <= 0 && kT >= this.length ? this : new hT(ST(this.text, TT, kT), Math.min(kT, this.length) - Math.max(0, TT));
        if (1 & lT) {
          let TT = cT.pop(),
            kT = QT(MT.text, TT.text.slice(), 0, MT.length);
          if (kT.length <= 32) cT.push(new hT(kT, TT.length + MT.length));
          else {
            let TT = kT.length >> 1;
            cT.push(new hT(kT.slice(0, TT)), new hT(kT.slice(TT)))
          }
        } else cT.push(MT)
      }
      replace(TT, kT, cT) {
        if (!(cT instanceof hT)) return super.replace(TT, kT, cT);
        [TT, kT] = PT(this, TT, kT);
        let lT = QT(this.text, QT(cT.text, ST(this.text, 0, TT)), kT),
          MT = this.length + cT.length - (kT - TT);
        return lT.length <= 32 ? new hT(lT, MT) : NT.from(hT.split(lT, []), MT)
      }
      sliceString(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [TT, kT] = PT(this, TT, kT);
        let lT = "";
        for (let MT = 0, KT = 0; MT <= kT && KT < this.text.length; KT++) {
          let OT = this.text[KT],
            yT = MT + OT.length;
          MT > TT && KT && (lT += cT), TT < yT && kT > MT && (lT += OT.slice(Math.max(0, TT - MT), kT - MT)), MT = yT + 1
        }
        return lT
      }
      flatten(TT) {
        for (let kT of this.text) TT.push(kT)
      }
      scanIdentical() {
        return 0
      }
      static split(TT, kT) {
        let cT = [],
          lT = -1;
        for (let MT of TT) cT.push(MT), lT += MT.length + 1, 32 == cT.length && (kT.push(new hT(cT, lT)), cT = [], lT = -1);
        return lT > -1 && kT.push(new hT(cT, lT)), kT
      }
    }
    class NT extends tT {
      constructor(TT, kT) {
        super(), this.children = TT, this.length = kT, this.lines = 0;
        for (let cT of TT) this.lines += cT.lines
      }
      lineInner(TT, kT, cT, lT) {
        for (let MT = 0;; MT++) {
          let KT = this.children[MT],
            OT = lT + KT.length,
            yT = cT + KT.lines - 1;
          if ((kT ? yT : OT) >= TT) return KT.lineInner(TT, kT, cT, lT);
          lT = OT + 1, cT = yT + 1
        }
      }
      decompose(TT, kT, cT, lT) {
        for (let MT = 0, KT = 0; KT <= kT && MT < this.children.length; MT++) {
          let OT = this.children[MT],
            yT = KT + OT.length;
          if (TT <= yT && kT >= KT) {
            let MT = lT & ((KT <= TT ? 1 : 0) | (yT >= kT ? 2 : 0));
            KT >= TT && yT <= kT && !MT ? cT.push(OT) : OT.decompose(TT - KT, kT - KT, cT, MT)
          }
          KT = yT + 1
        }
      }
      replace(TT, kT, cT) {
        if ([TT, kT] = PT(this, TT, kT), cT.lines < this.lines)
          for (let lT = 0, MT = 0; lT < this.children.length; lT++) {
            let KT = this.children[lT],
              OT = MT + KT.length;
            if (TT >= MT && kT <= OT) {
              let yT = KT.replace(TT - MT, kT - MT, cT),
                fT = this.lines - KT.lines + yT.lines;
              if (yT.lines < fT >> 4 && yT.lines > fT >> 6) {
                let MT = this.children.slice();
                return MT[lT] = yT, new NT(MT, this.length - (kT - TT) + cT.length)
              }
              return super.replace(MT, OT, yT)
            }
            MT = OT + 1
          }
        return super.replace(TT, kT, cT)
      }
      sliceString(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [TT, kT] = PT(this, TT, kT);
        let lT = "";
        for (let MT = 0, KT = 0; MT < this.children.length && KT <= kT; MT++) {
          let OT = this.children[MT],
            yT = KT + OT.length;
          KT > TT && MT && (lT += cT), TT < yT && kT > KT && (lT += OT.sliceString(TT - KT, kT - KT, cT)), KT = yT + 1
        }
        return lT
      }
      flatten(TT) {
        for (let kT of this.children) kT.flatten(TT)
      }
      scanIdentical(TT, kT) {
        if (!(TT instanceof NT)) return 0;
        let cT = 0,
          [lT, MT, KT, OT] = kT > 0 ? [0, 0, this.children.length, TT.children.length] : [this.children.length - 1, TT.children.length - 1, -1, -1];
        for (;; lT += kT, MT += kT) {
          if (lT == KT || MT == OT) return cT;
          let yT = this.children[lT],
            fT = TT.children[MT];
          if (yT != fT) return cT + yT.scanIdentical(fT, kT);
          cT += yT.length + 1
        }
      }
      static from(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT.reduce(((TT, kT) => TT + kT.length + 1), -1),
          cT = 0;
        for (let CT of TT) cT += CT.lines;
        if (cT < 32) {
          let cT = [];
          for (let kT of TT) kT.flatten(cT);
          return new hT(cT, kT)
        }
        let lT = Math.max(32, cT >> 5),
          MT = lT << 1,
          KT = lT >> 1,
          OT = [],
          yT = 0,
          fT = -1,
          xT = [];

        function IT(TT) {
          let kT;
          if (TT.lines > MT && TT instanceof NT)
            for (let cT of TT.children) IT(cT);
          else TT.lines > KT && (yT > KT || !yT) ? (AT(), OT.push(TT)) : TT instanceof hT && yT && (kT = xT[xT.length - 1]) instanceof hT && TT.lines + kT.lines <= 32 ? (yT += TT.lines, fT += TT.length + 1, xT[xT.length - 1] = new hT(kT.text.concat(TT.text), kT.length + 1 + TT.length)) : (yT + TT.lines > lT && AT(), yT += TT.lines, fT += TT.length + 1, xT.push(TT))
        }

        function AT() {
          0 != yT && (OT.push(1 == xT.length ? xT[0] : NT.from(xT, fT)), fT = -1, yT = xT.length = 0)
        }
        for (let CT of TT) IT(CT);
        return AT(), 1 == OT.length ? OT[0] : new NT(OT, kT)
      }
    }

    function QT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let MT = 0, KT = 0, OT = !0; KT < TT.length && MT <= lT; KT++) {
        let yT = TT[KT],
          fT = MT + yT.length;
        fT >= cT && (fT > lT && (yT = yT.slice(0, lT - MT)), MT < cT && (yT = yT.slice(cT - MT)), OT ? (kT[kT.length - 1] += yT, OT = !1) : kT.push(yT)), MT = fT + 1
      }
      return kT
    }

    function ST(TT, kT, cT) {
      return QT(TT, [""], kT, cT)
    }
    tT.empty = new hT([""], 0);
    class DT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = kT, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [TT], this.offsets = [kT > 0 ? 1 : (TT instanceof hT ? TT.text.length : TT.children.length) << 1]
      }
      nextInner(TT, kT) {
        for (this.done = this.lineBreak = !1;;) {
          let cT = this.nodes.length - 1,
            lT = this.nodes[cT],
            MT = this.offsets[cT],
            KT = MT >> 1,
            OT = lT instanceof hT ? lT.text.length : lT.children.length;
          if (KT == (kT > 0 ? OT : 0)) {
            if (0 == cT) return this.done = !0, this.value = "", this;
            kT > 0 && this.offsets[cT - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & MT) == (kT > 0 ? 0 : 1)) {
            if (this.offsets[cT] += kT, 0 == TT) return this.lineBreak = !0, this.value = "\n", this;
            TT--
          } else if (lT instanceof hT) {
            let MT = lT.text[KT + (kT < 0 ? -1 : 0)];
            if (this.offsets[cT] += kT, MT.length > Math.max(0, TT)) return this.value = 0 == TT ? MT : kT > 0 ? MT.slice(TT) : MT.slice(0, MT.length - TT), this;
            TT -= MT.length
          } else {
            let MT = lT.children[KT + (kT < 0 ? -1 : 0)];
            TT > MT.length ? (TT -= MT.length, this.offsets[cT] += kT) : (kT < 0 && this.offsets[cT]--, this.nodes.push(MT), this.offsets.push(kT > 0 ? 1 : (MT instanceof hT ? MT.text.length : MT.children.length) << 1))
          }
        }
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return TT < 0 && (this.nextInner(-TT, -this.dir), TT = this.value.length), this.nextInner(TT, this.dir)
      }
    }
    class aT {
      constructor(TT, kT, cT) {
        this.value = "", this.done = !1, this.cursor = new DT(TT, kT > cT ? -1 : 1), this.pos = kT > cT ? TT.length : 0, this.from = Math.min(kT, cT), this.to = Math.max(kT, cT)
      }
      nextInner(TT, kT) {
        if (kT < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        TT += Math.max(0, kT < 0 ? this.pos - this.to : this.from - this.pos);
        let cT = kT < 0 ? this.pos - this.from : this.to - this.pos;
        TT > cT && (TT = cT), cT -= TT;
        let {
          value: lT
        } = this.cursor.next(TT);
        return this.pos += (lT.length + TT) * kT, this.value = lT.length <= cT ? lT : kT < 0 ? lT.slice(lT.length - cT) : lT.slice(0, cT), this.done = !this.value, this
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return TT < 0 ? TT = Math.max(TT, this.from - this.pos) : TT > 0 && (TT = Math.min(TT, this.to - this.pos)), this.nextInner(TT, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class FT {
      constructor(TT) {
        this.inner = TT, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: kT,
            lineBreak: cT,
            value: lT
          } = this.inner.next(TT);
        return kT && this.afterBreak ? (this.value = "", this.afterBreak = !1) : kT ? (this.done = !0, this.value = "") : cT ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = lT, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (tT.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, DT.prototype[Symbol.iterator] = aT.prototype[Symbol.iterator] = FT.prototype[Symbol.iterator] = function() {
      return this
    });
    class rT {
      constructor(TT, kT, cT, lT) {
        this.from = TT, this.to = kT, this.number = cT, this.text = lT
      }
      get length() {
        return this.to - this.from
      }
    }

    function PT(TT, kT, cT) {
      return [kT = Math.max(0, Math.min(TT.length, kT)), Math.max(kT, Math.min(TT.length, cT))]
    }

    function wT(TT, kT) {
      return fT(TT, kT, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function mT(TT, kT) {
      let cT = TT.charCodeAt(kT);
      if (!((lT = cT) >= 55296 && lT < 56320) || kT + 1 == TT.length) return cT;
      var lT;
      let MT = TT.charCodeAt(kT + 1);
      return function(TT) {
        return TT >= 56320 && TT < 57344
      }(MT) ? MT - 56320 + (cT - 55296 << 10) + 65536 : cT
    }

    function bT(TT) {
      return TT <= 65535 ? String.fromCharCode(TT) : (TT -= 65536, String.fromCharCode(55296 + (TT >> 10), 56320 + (1023 & TT)))
    }

    function zT(TT) {
      return TT < 65536 ? 1 : 2
    }
    const JT = /\r\n?|\n/;
    var oT = function(TT) {
      return TT[TT.Simple = 0] = "Simple", TT[TT.TrackDel = 1] = "TrackDel", TT[TT.TrackBefore = 2] = "TrackBefore", TT[TT.TrackAfter = 3] = "TrackAfter", TT
    }(oT || (oT = {}));
    class HT {
      constructor(TT) {
        this.sections = TT
      }
      get length() {
        let TT = 0;
        for (let kT = 0; kT < this.sections.length; kT += 2) TT += this.sections[kT];
        return TT
      }
      get newLength() {
        let TT = 0;
        for (let kT = 0; kT < this.sections.length; kT += 2) {
          let cT = this.sections[kT + 1];
          TT += cT < 0 ? this.sections[kT] : cT
        }
        return TT
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(TT) {
        for (let kT = 0, cT = 0, lT = 0; kT < this.sections.length;) {
          let MT = this.sections[kT++],
            KT = this.sections[kT++];
          KT < 0 ? (TT(cT, lT, MT), lT += MT) : lT += KT, cT += MT
        }
      }
      iterChangedRanges(TT) {
        ET(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let TT = [];
        for (let kT = 0; kT < this.sections.length;) {
          let cT = this.sections[kT++],
            lT = this.sections[kT++];
          lT < 0 ? TT.push(cT, lT) : TT.push(lT, cT)
        }
        return new HT(TT)
      }
      composeDesc(TT) {
        return this.empty ? TT : TT.empty ? this : uT(this, TT)
      }
      mapDesc(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return TT.empty ? this : ZT(this, TT, kT)
      }
      mapPos(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : oT.Simple,
          lT = 0,
          MT = 0;
        for (let KT = 0; KT < this.sections.length;) {
          let OT = this.sections[KT++],
            yT = this.sections[KT++],
            fT = lT + OT;
          if (yT < 0) {
            if (fT > TT) return MT + (TT - lT);
            MT += OT
          } else {
            if (cT != oT.Simple && fT >= TT && (cT == oT.TrackDel && lT < TT && fT > TT || cT == oT.TrackBefore && lT < TT || cT == oT.TrackAfter && fT > TT)) return null;
            if (fT > TT || fT == TT && kT < 0 && !OT) return TT == lT || kT < 0 ? MT : MT + yT;
            MT += yT
          }
          lT = fT
        }
        if (TT > lT) throw new RangeError(`Position ${TT} is out of range for changeset of length ${lT}`);
        return MT
      }
      touchesRange(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        for (let cT = 0, lT = 0; cT < this.sections.length && lT <= kT;) {
          let MT = lT + this.sections[cT++];
          if (this.sections[cT++] >= 0 && lT <= kT && MT >= TT) return !(lT < TT && MT > kT) || "cover";
          lT = MT
        }
        return !1
      }
      toString() {
        let TT = "";
        for (let kT = 0; kT < this.sections.length;) {
          let cT = this.sections[kT++],
            lT = this.sections[kT++];
          TT += (TT ? " " : "") + cT + (lT >= 0 ? ":" + lT : "")
        }
        return TT
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(TT) {
        if (!Array.isArray(TT) || TT.length % 2 || TT.some((TT => "number" != typeof TT))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new HT(TT)
      }
      static create(TT) {
        return new HT(TT)
      }
    }
    class eT extends HT {
      constructor(TT, kT) {
        super(TT), this.inserted = kT
      }
      apply(TT) {
        if (this.length != TT.length) throw new RangeError("Applying change set to a document with the wrong length");
        return ET(this, ((kT, cT, lT, MT, KT) => TT = TT.replace(lT, lT + (cT - kT), KT)), !1), TT
      }
      mapDesc(TT) {
        return ZT(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(TT) {
        let kT = this.sections.slice(),
          cT = [];
        for (let lT = 0, MT = 0; lT < kT.length; lT += 2) {
          let KT = kT[lT],
            OT = kT[lT + 1];
          if (OT >= 0) {
            kT[lT] = OT, kT[lT + 1] = KT;
            let yT = lT >> 1;
            for (; cT.length < yT;) cT.push(tT.empty);
            cT.push(KT ? TT.slice(MT, MT + KT) : tT.empty)
          }
          MT += KT
        }
        return new eT(kT, cT)
      }
      compose(TT) {
        return this.empty ? TT : TT.empty ? this : uT(this, TT, !0)
      }
      map(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return TT.empty ? this : ZT(this, TT, kT, !0)
      }
      iterChanges(TT) {
        ET(this, TT, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return HT.create(this.sections)
      }
      filter(TT) {
        let kT = [],
          cT = [],
          lT = [],
          MT = new XT(this);
        TT: for (let KT = 0, OT = 0;;) {
          let yT = KT == TT.length ? 1e9 : TT[KT++];
          for (; OT < yT || OT == yT && 0 == MT.len;) {
            if (MT.done) break TT;
            let TT = Math.min(MT.len, yT - OT);
            GT(lT, TT, -1);
            let KT = -1 == MT.ins ? -1 : 0 == MT.off ? MT.ins : 0;
            GT(kT, TT, KT), KT > 0 && VT(cT, kT, MT.text), MT.forward(TT), OT += TT
          }
          let fT = TT[KT++];
          for (; OT < fT;) {
            if (MT.done) break TT;
            let TT = Math.min(MT.len, fT - OT);
            GT(kT, TT, -1), GT(lT, TT, -1 == MT.ins ? -1 : 0 == MT.off ? MT.ins : 0), MT.forward(TT), OT += TT
          }
        }
        return {
          changes: new eT(kT, cT),
          filtered: HT.create(lT)
        }
      }
      toJSON() {
        let TT = [];
        for (let kT = 0; kT < this.sections.length; kT += 2) {
          let cT = this.sections[kT],
            lT = this.sections[kT + 1];
          lT < 0 ? TT.push(cT) : 0 == lT ? TT.push([cT]) : TT.push([cT].concat(this.inserted[kT >> 1].toJSON()))
        }
        return TT
      }
      static of (TT, kT, cT) {
        let lT = [],
          MT = [],
          KT = 0,
          OT = null;

        function yT() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !lT.length) return;
          KT < kT && GT(lT, kT - KT, -1);
          let TT = new eT(lT, MT);
          OT = OT ? OT.compose(TT.map(OT)) : TT, lT = [], MT = [], KT = 0
        }
        return function TT(fT) {
          if (Array.isArray(fT))
            for (let kT of fT) TT(kT);
          else if (fT instanceof eT) {
            if (fT.length != kT) throw new RangeError(`Mismatched change set length (got ${fT.length}, expected ${kT})`);
            yT(), OT = OT ? OT.compose(fT.map(OT)) : fT
          } else {
            let {
              from: TT,
              to: OT = TT,
              insert: xT
            } = fT;
            if (TT > OT || TT < 0 || OT > kT) throw new RangeError(`Invalid change range ${TT} to ${OT} (in doc of length ${kT})`);
            let IT = xT ? "string" == typeof xT ? tT.of(xT.split(cT || JT)) : xT : tT.empty,
              AT = IT.length;
            if (TT == OT && 0 == AT) return;
            TT < KT && yT(), TT > KT && GT(lT, TT - KT, -1), GT(lT, OT - TT, AT), VT(MT, lT, IT), KT = OT
          }
        }(TT), yT(!OT), OT
      }
      static empty(TT) {
        return new eT(TT ? [TT, -1] : [], [])
      }
      static fromJSON(TT) {
        if (!Array.isArray(TT)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let kT = [],
          cT = [];
        for (let lT = 0; lT < TT.length; lT++) {
          let MT = TT[lT];
          if ("number" == typeof MT) kT.push(MT, -1);
          else {
            if (!Array.isArray(MT) || "number" != typeof MT[0] || MT.some(((TT, kT) => kT && "string" != typeof TT))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == MT.length) kT.push(MT[0], 0);
            else {
              for (; cT.length < lT;) cT.push(tT.empty);
              cT[lT] = tT.of(MT.slice(1)), kT.push(MT[0], cT[lT].length)
            }
          }
        }
        return new eT(kT, cT)
      }
      static createSet(TT, kT) {
        return new eT(TT, kT)
      }
    }

    function GT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == kT && cT <= 0) return;
      let MT = TT.length - 2;
      MT >= 0 && cT <= 0 && cT == TT[MT + 1] ? TT[MT] += kT : MT >= 0 && 0 == kT && 0 == TT[MT] ? TT[MT + 1] += cT : lT ? (TT[MT] += kT, TT[MT + 1] += cT) : TT.push(kT, cT)
    }

    function VT(TT, kT, cT) {
      if (0 == cT.length) return;
      let lT = kT.length - 2 >> 1;
      if (lT < TT.length) TT[TT.length - 1] = TT[TT.length - 1].append(cT);
      else {
        for (; TT.length < lT;) TT.push(tT.empty);
        TT.push(cT)
      }
    }

    function ET(TT, kT, cT) {
      let lT = TT.inserted;
      for (let MT = 0, KT = 0, OT = 0; OT < TT.sections.length;) {
        let yT = TT.sections[OT++],
          fT = TT.sections[OT++];
        if (fT < 0) MT += yT, KT += yT;
        else {
          let xT = MT,
            IT = KT,
            AT = tT.empty;
          for (; xT += yT, IT += fT, fT && lT && (AT = AT.append(lT[OT - 2 >> 1])), !(cT || OT == TT.sections.length || TT.sections[OT + 1] < 0);) yT = TT.sections[OT++], fT = TT.sections[OT++];
          kT(MT, xT, KT, IT, AT), MT = xT, KT = IT
        }
      }
    }

    function ZT(TT, kT, cT) {
      let lT = [],
        MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        KT = new XT(TT),
        OT = new XT(kT),
        yT = 0;
      for (let fT = -1;;) {
        if (++yT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (KT.done && OT.len || OT.done && KT.len) throw new Error("Mismatched change set lengths");
        if (-1 == KT.ins && -1 == OT.ins) {
          let TT = Math.min(KT.len, OT.len);
          GT(lT, TT, -1), KT.forward(TT), OT.forward(TT)
        } else if (OT.ins >= 0 && (KT.ins < 0 || fT == KT.i || 0 == KT.off && (OT.len < KT.len || OT.len == KT.len && !cT))) {
          let TT = OT.len;
          for (GT(lT, OT.ins, -1); TT;) {
            if (++yT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let kT = Math.min(KT.len, TT);
            KT.ins >= 0 && fT < KT.i && KT.len <= kT && (GT(lT, 0, KT.ins), MT && VT(MT, lT, KT.text), fT = KT.i), KT.forward(kT), TT -= kT
          }
          OT.next()
        } else {
          if (!(KT.ins >= 0)) {
            if (KT.done && OT.done) return MT ? eT.createSet(lT, MT) : HT.create(lT);
            throw new Error("Mismatched change set lengths")
          } {
            let TT = 0,
              kT = KT.len;
            for (; kT;) {
              if (++yT > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == OT.ins) {
                let cT = Math.min(kT, OT.len);
                TT += cT, kT -= cT, OT.forward(cT)
              } else {
                if (!(0 == OT.ins && OT.len < kT)) break;
                kT -= OT.len, OT.next()
              }
            }
            GT(lT, TT, fT < KT.i ? KT.ins : 0), MT && fT < KT.i && VT(MT, lT, KT.text), fT = KT.i, KT.forward(KT.len - kT)
          }
        }
      }
    }

    function uT(TT, kT) {
      let cT = [],
        lT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        MT = new XT(TT),
        KT = new XT(kT),
        OT = 0;
      for (let yT = !1;;) {
        if (++OT > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (MT.done && KT.done) return lT ? eT.createSet(cT, lT) : HT.create(cT);
        if (0 == MT.ins) GT(cT, MT.len, 0, yT), MT.next();
        else if (0 != KT.len || KT.done) {
          if (MT.done || KT.done) throw new Error("Mismatched change set lengths");
          {
            let TT = Math.min(MT.len2, KT.len),
              kT = cT.length;
            if (-1 == MT.ins) {
              let kT = -1 == KT.ins ? -1 : KT.off ? 0 : KT.ins;
              GT(cT, TT, kT, yT), lT && kT && VT(lT, cT, KT.text)
            } else - 1 == KT.ins ? (GT(cT, MT.off ? 0 : MT.len, TT, yT), lT && VT(lT, cT, MT.textBit(TT))) : (GT(cT, MT.off ? 0 : MT.len, KT.off ? 0 : KT.ins, yT), lT && !KT.off && VT(lT, cT, KT.text));
            yT = (MT.ins > TT || KT.ins >= 0 && KT.len > TT) && (yT || cT.length > kT), MT.forward2(TT), KT.forward(TT)
          }
        } else GT(cT, 0, KT.ins, yT), lT && VT(lT, cT, KT.text), KT.next()
      }
    }
    class XT {
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
        } = this.set, kT = this.i - 2 >> 1;
        return kT >= TT.length ? tT.empty : TT[kT]
      }
      textBit(TT) {
        let {
          inserted: kT
        } = this.set, cT = this.i - 2 >> 1;
        return cT >= kT.length && !TT ? tT.empty : kT[cT].slice(this.off, null == TT ? void 0 : this.off + TT)
      }
      forward(TT) {
        TT == this.len ? this.next() : (this.len -= TT, this.off += TT)
      }
      forward2(TT) {
        -1 == this.ins ? this.forward(TT) : TT == this.ins ? this.next() : (this.ins -= TT, this.off += TT)
      }
    }
    class dT {
      constructor(TT, kT, cT) {
        this.from = TT, this.to = kT, this.flags = cT
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
        let kT, cT, lT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? kT = cT = TT.mapPos(this.from, lT) : (kT = TT.mapPos(this.from, 1), cT = TT.mapPos(this.to, -1)), kT == this.from && cT == this.to ? this : new dT(kT, cT, this.flags)
      }
      extend(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (TT <= this.anchor && kT >= this.anchor) return LT.range(TT, kT, void 0, void 0, cT);
        let lT = Math.abs(TT - this.anchor) > Math.abs(kT - this.anchor) ? TT : kT;
        return LT.range(this.anchor, lT, void 0, void 0, cT)
      }
      eq(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == TT.anchor && this.head == TT.head && this.goalColumn == TT.goalColumn && (!kT || !this.empty || this.assoc == TT.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(TT) {
        if (!TT || "number" != typeof TT.anchor || "number" != typeof TT.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return LT.range(TT.anchor, TT.head)
      }
      static create(TT, kT, cT) {
        return new dT(TT, kT, cT)
      }
    }
    class LT {
      constructor(TT, kT) {
        this.qt = TT, this.mainIndex = kT
      }
      map(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return TT.empty ? this : LT.create(this.qt.map((cT => cT.map(TT, kT))), this.mainIndex)
      }
      eq(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.qt.length != TT.qt.length || this.mainIndex != TT.mainIndex) return !1;
        for (let cT = 0; cT < this.qt.length; cT++)
          if (!this.qt[cT].eq(TT.qt[cT], kT)) return !1;
        return !0
      }
      get main() {
        return this.qt[this.mainIndex]
      }
      asSingle() {
        return 1 == this.qt.length ? this : new LT([this.main], 0)
      }
      addRange(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return LT.create([TT].concat(this.qt), kT ? 0 : this.mainIndex + 1)
      }
      replaceRange(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          cT = this.qt.slice();
        return cT[kT] = TT, LT.create(cT, this.mainIndex)
      }
      toJSON() {
        return {
          qt: this.qt.map((TT => TT.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(TT) {
        if (!TT || !Array.isArray(TT.qt) || "number" != typeof TT.main || TT.main >= TT.qt.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new LT(TT.qt.map((TT => dT.fromJSON(TT))), TT.main)
      }
      static single(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        return new LT([LT.range(TT, kT)], 0)
      }
      static create(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == TT.length) throw new RangeError("A selection needs at least one range");
        for (let cT = 0, lT = 0; lT < TT.length; lT++) {
          let MT = TT[lT];
          if (MT.empty ? MT.from <= cT : MT.from < cT) return LT.normalized(TT.slice(), kT);
          cT = MT.to
        }
        return new LT(TT, kT)
      }
      static cursor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        return dT.create(TT, TT, (0 == kT ? 0 : kT < 0 ? 8 : 16) | (null == cT ? 7 : Math.min(6, cT)) | (null !== lT && void 0 !== lT ? lT : 16777215) << 6)
      }
      static range(TT, kT, cT, lT, MT) {
        let KT = (null !== cT && void 0 !== cT ? cT : 16777215) << 6 | (null == lT ? 7 : Math.min(6, lT));
        return MT || TT == kT || (MT = kT < TT ? 1 : -1), kT < TT ? dT.create(kT, TT, 48 | KT) : dT.create(TT, kT, (MT ? MT < 0 ? 8 : 16 : 0) | KT)
      }
      static normalized(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = TT[kT];
        TT.sort(((TT, kT) => TT.from - kT.from)), kT = TT.indexOf(cT);
        for (let lT = 1; lT < TT.length; lT++) {
          let cT = TT[lT],
            MT = TT[lT - 1];
          if (cT.empty ? cT.from <= MT.to : cT.from < MT.to) {
            let KT = MT.from,
              OT = Math.max(cT.to, MT.to);
            lT <= kT && kT--, TT.splice(--lT, 2, cT.anchor > cT.head ? LT.range(OT, KT) : LT.range(KT, OT))
          }
        }
        return new LT(TT, kT)
      }
    }

    function RT(TT, kT) {
      for (let cT of TT.qt)
        if (cT.to > kT) throw new RangeError("Selection points outside of document")
    }
    let gT = 0;
    class UT {
      constructor(TT, kT, cT, lT, MT) {
        this.combine = TT, this.compareInput = kT, this.compare = cT, this.isStatic = lT, this.id = gT++, this.default = TT([]), this.extensions = "function" == typeof MT ? MT(this) : MT
      }
      get reader() {
        return this
      }
      static define() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new UT(TT.combine || (TT => TT), TT.compareInput || ((TT, kT) => TT === kT), TT.compare || (TT.combine ? (TT, kT) => TT === kT : YT), !!TT.static, TT.enables)
      }
      of(TT) {
        return new BT([], this, 0, TT)
      }
      compute(TT, kT) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new BT(TT, this, 1, kT)
      }
      computeN(TT, kT) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new BT(TT, this, 2, kT)
      }
      from(TT, kT) {
        return kT || (kT = TT => TT), this.compute([TT], (cT => kT(cT.field(TT))))
      }
    }

    function YT(TT, kT) {
      return TT == kT || TT.length == kT.length && TT.every(((TT, cT) => TT === kT[cT]))
    }
    class BT {
      constructor(TT, kT, cT, lT) {
        this.dependencies = TT, this.facet = kT, this.type = cT, this.value = lT, this.id = gT++
      }
      dynamicSlot(TT) {
        var kT;
        let cT = this.value,
          lT = this.facet.compareInput,
          MT = this.id,
          KT = TT[MT] >> 1,
          OT = 2 == this.type,
          yT = !1,
          fT = !1,
          xT = [];
        for (let IT of this.dependencies) "doc" == IT ? yT = !0 : "selection" == IT ? fT = !0 : 0 == (1 & (null !== (kT = TT[IT.id]) && void 0 !== kT ? kT : 1)) && xT.push(TT[IT.id]);
        return {
          create: TT => (TT.values[KT] = cT(TT), 1),
          update(TT, kT) {
            if (yT && kT.docChanged || fT && (kT.docChanged || kT.selection) || nT(TT, xT)) {
              let kT = cT(TT);
              if (OT ? !WT(kT, TT.values[KT], lT) : !lT(kT, TT.values[KT])) return TT.values[KT] = kT, 1
            }
            return 0
          },
          reconfigure: (TT, kT) => {
            let yT, fT = kT.config.address[MT];
            if (null != fT) {
              let MT = Ik(kT, fT);
              if (this.dependencies.every((cT => cT instanceof UT ? kT.facet(cT) === TT.facet(cT) : !(cT instanceof qT) || kT.field(cT, !1) == TT.field(cT, !1))) || (OT ? WT(yT = cT(TT), MT, lT) : lT(yT = cT(TT), MT))) return TT.values[KT] = MT, 0
            } else yT = cT(TT);
            return TT.values[KT] = yT, 1
          }
        }
      }
    }

    function WT(TT, kT, cT) {
      if (TT.length != kT.length) return !1;
      for (let lT = 0; lT < TT.length; lT++)
        if (!cT(TT[lT], kT[lT])) return !1;
      return !0
    }

    function nT(TT, kT) {
      let cT = !1;
      for (let lT of kT) 1 & xk(TT, lT) && (cT = !0);
      return cT
    }

    function pT(TT, kT, cT) {
      let lT = cT.map((kT => TT[kT.id])),
        MT = cT.map((TT => TT.type)),
        KT = lT.filter((TT => !(1 & TT))),
        OT = TT[kT.id] >> 1;

      function yT(TT) {
        let cT = [];
        for (let kT = 0; kT < lT.length; kT++) {
          let KT = Ik(TT, lT[kT]);
          if (2 == MT[kT])
            for (let TT of KT) cT.push(TT);
          else cT.push(KT)
        }
        return kT.combine(cT)
      }
      return {
        create(TT) {
          for (let kT of lT) xk(TT, kT);
          return TT.values[OT] = yT(TT), 1
        },
        update(TT, cT) {
          if (!nT(TT, KT)) return 0;
          let lT = yT(TT);
          return kT.compare(lT, TT.values[OT]) ? 0 : (TT.values[OT] = lT, 1)
        },
        reconfigure(TT, MT) {
          let KT = nT(TT, lT),
            fT = MT.config.facets[kT.id],
            xT = MT.facet(kT);
          if (fT && !KT && YT(cT, fT)) return TT.values[OT] = xT, 0;
          let IT = yT(TT);
          return kT.compare(IT, xT) ? (TT.values[OT] = xT, 0) : (TT.values[OT] = IT, 1)
        }
      }
    }
    const iT = UT.define({
      static: !0
    });
    class qT {
      constructor(TT, kT, cT, lT, MT) {
        this.id = TT, this.createF = kT, this.updateF = cT, this.compareF = lT, this.spec = MT, this.provides = void 0
      }
      static define(TT) {
        let kT = new qT(gT++, TT.create, TT.update, TT.compare || ((TT, kT) => TT === kT), TT);
        return TT.provide && (kT.provides = TT.provide(kT)), kT
      }
      create(TT) {
        let kT = TT.facet(iT).find((TT => TT.field == this));
        return ((null === kT || void 0 === kT ? void 0 : kT.create) || this.createF)(TT)
      }
      slot(TT) {
        let kT = TT[this.id] >> 1;
        return {
          create: TT => (TT.values[kT] = this.create(TT), 1),
          update: (TT, cT) => {
            let lT = TT.values[kT],
              MT = this.updateF(lT, cT);
            return this.compareF(lT, MT) ? 0 : (TT.values[kT] = MT, 1)
          },
          reconfigure: (TT, cT) => {
            let lT, MT = TT.facet(iT),
              KT = cT.facet(iT);
            return (lT = MT.find((TT => TT.field == this))) && lT != KT.find((TT => TT.field == this)) ? (TT.values[kT] = lT.create(TT), 1) : null != cT.config.address[this.id] ? (TT.values[kT] = cT.field(this), 0) : (TT.values[kT] = this.create(TT), 1)
          }
        }
      }
      init(TT) {
        return [this, iT.of({
          field: this,
          create: TT
        })]
      }
      get extension() {
        return this
      }
    }
    const sT = 4,
      Tk = 3,
      kk = 2,
      ck = 1;

    function lk(TT) {
      return kT => new Kk(kT, TT)
    }
    const Mk = {
      highest: lk(0),
      high: lk(ck),
      default: lk(kk),
      low: lk(Tk),
      lowest: lk(sT)
    };
    class Kk {
      constructor(TT, kT) {
        this.inner = TT, this.prec = kT
      }
    }
    class Ok {
      of(TT) {
        return new yk(this, TT)
      }
      reconfigure(TT) {
        return Ok.reconfigure.of({
          compartment: this,
          extension: TT
        })
      }
      get(TT) {
        return TT.config.compartments.get(this)
      }
    }
    class yk {
      constructor(TT, kT) {
        this.compartment = TT, this.inner = kT
      }
    }
    class fk {
      constructor(TT, kT, cT, lT, MT, KT) {
        for (this.base = TT, this.compartments = kT, this.dynamicSlots = cT, this.address = lT, this.staticValues = MT, this.facets = KT, this.statusTemplate = []; this.statusTemplate.length < cT.length;) this.statusTemplate.push(0)
      }
      staticFacet(TT) {
        let kT = this.address[TT.id];
        return null == kT ? TT.default : this.staticValues[kT >> 1]
      }
      static resolve(TT, kT, cT) {
        let lT = [],
          MT = Object.create(null),
          KT = new Map;
        for (let AT of function(TT, kT, cT) {
            let lT = [
                [],
                [],
                [],
                [],
                []
              ],
              MT = new Map;

            function KT(TT, OT) {
              let yT = MT.get(TT);
              if (null != yT) {
                if (yT <= OT) return;
                let kT = lT[yT].indexOf(TT);
                kT > -1 && lT[yT].splice(kT, 1), TT instanceof yk && cT.delete(TT.compartment)
              }
              if (MT.set(TT, OT), Array.isArray(TT))
                for (let kT of TT) KT(kT, OT);
              else if (TT instanceof yk) {
                if (cT.has(TT.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let lT = kT.get(TT.compartment) || TT.inner;
                cT.set(TT.compartment, lT), KT(lT, OT)
              } else if (TT instanceof Kk) KT(TT.inner, TT.prec);
              else if (TT instanceof qT) lT[OT].push(TT), TT.provides && KT(TT.provides, OT);
              else if (TT instanceof BT) lT[OT].push(TT), TT.facet.extensions && KT(TT.facet.extensions, kk);
              else {
                let kT = TT.extension;
                if (!kT) throw new Error(`Unrecognized extension value in extension set (${TT}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                KT(kT, OT)
              }
            }
            return KT(TT, kk), lT.reduce(((TT, kT) => TT.concat(kT)))
          }(TT, kT, KT)) AT instanceof qT ? lT.push(AT) : (MT[AT.facet.id] || (MT[AT.facet.id] = [])).push(AT);
        let OT = Object.create(null),
          yT = [],
          fT = [];
        for (let AT of lT) OT[AT.id] = fT.length << 1, fT.push((TT => AT.slot(TT)));
        let xT = null === cT || void 0 === cT ? void 0 : cT.config.facets;
        for (let AT in MT) {
          let TT = MT[AT],
            kT = TT[0].facet,
            lT = xT && xT[AT] || [];
          if (TT.every((TT => 0 == TT.type)))
            if (OT[kT.id] = yT.length << 1 | 1, YT(lT, TT)) yT.push(cT.facet(kT));
            else {
              let lT = kT.combine(TT.map((TT => TT.value)));
              yT.push(cT && kT.compare(lT, cT.facet(kT)) ? cT.facet(kT) : lT)
            }
          else {
            for (let kT of TT) 0 == kT.type ? (OT[kT.id] = yT.length << 1 | 1, yT.push(kT.value)) : (OT[kT.id] = fT.length << 1, fT.push((TT => kT.dynamicSlot(TT))));
            OT[kT.id] = fT.length << 1, fT.push((cT => pT(cT, kT, TT)))
          }
        }
        let IT = fT.map((TT => TT(OT)));
        return new fk(TT, KT, IT, OT, yT, MT)
      }
    }

    function xk(TT, kT) {
      if (1 & kT) return 2;
      let cT = kT >> 1,
        lT = TT.status[cT];
      if (4 == lT) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & lT) return lT;
      TT.status[cT] = 4;
      let MT = TT.computeSlot(TT, TT.config.dynamicSlots[cT]);
      return TT.status[cT] = 2 | MT
    }

    function Ik(TT, kT) {
      return 1 & kT ? TT.config.staticValues[kT >> 1] : TT.values[kT >> 1]
    }
    const Ak = UT.define(),
      Ck = UT.define({
        combine: TT => TT.some((TT => TT)),
        static: !0
      }),
      jk = UT.define({
        combine: TT => TT.length ? TT[0] : void 0,
        static: !0
      }),
      vk = UT.define(),
      tk = UT.define(),
      hk = UT.define(),
      Nk = UT.define({
        combine: TT => !!TT.length && TT[0]
      });
    class Qk {
      constructor(TT, kT) {
        this.type = TT, this.value = kT
      }
      static define() {
        return new Sk
      }
    }
    class Sk {
      of(TT) {
        return new Qk(this, TT)
      }
    }
    class Dk {
      constructor(TT) {
        this.map = TT
      }
      of(TT) {
        return new ak(this, TT)
      }
    }
    class ak {
      constructor(TT, kT) {
        this.type = TT, this.value = kT
      }
      map(TT) {
        let kT = this.type.map(this.value, TT);
        return void 0 === kT ? void 0 : kT == this.value ? this : new ak(this.type, kT)
      }
      is(TT) {
        return this.type == TT
      }
      static define() {
        return new Dk((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (TT => TT))
      }
      static mapEffects(TT, kT) {
        if (!TT.length) return TT;
        let cT = [];
        for (let lT of TT) {
          let TT = lT.map(kT);
          TT && cT.push(TT)
        }
        return cT
      }
    }
    ak.reconfigure = ak.define(), ak.appendConfig = ak.define();
    class Fk {
      constructor(TT, kT, cT, lT, MT, KT) {
        this.startState = TT, this.changes = kT, this.selection = cT, this.effects = lT, this.annotations = MT, this.scrollIntoView = KT, this._doc = null, this._state = null, cT && RT(cT, kT.newLength), MT.some((TT => TT.type == Fk.time)) || (this.annotations = MT.concat(Fk.time.of(Date.now())))
      }
      static create(TT, kT, cT, lT, MT, KT) {
        return new Fk(TT, kT, cT, lT, MT, KT)
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
        for (let kT of this.annotations)
          if (kT.type == TT) return kT.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(TT) {
        let kT = this.annotation(Fk.userEvent);
        return !(!kT || !(kT == TT || kT.length > TT.length && kT.slice(0, TT.length) == TT && "." == kT[TT.length]))
      }
    }

    function rk(TT, kT) {
      let cT = [];
      for (let lT = 0, MT = 0;;) {
        let KT, OT;
        if (lT < TT.length && (MT == kT.length || kT[MT] >= TT[lT])) KT = TT[lT++], OT = TT[lT++];
        else {
          if (!(MT < kT.length)) return cT;
          KT = kT[MT++], OT = kT[MT++]
        }!cT.length || cT[cT.length - 1] < KT ? cT.push(KT, OT) : cT[cT.length - 1] < OT && (cT[cT.length - 1] = OT)
      }
    }

    function Pk(TT, kT, cT) {
      var lT;
      let MT, KT, OT;
      return cT ? (MT = kT.changes, KT = eT.empty(kT.changes.length), OT = TT.changes.compose(kT.changes)) : (MT = kT.changes.map(TT.changes), KT = TT.changes.mapDesc(kT.changes, !0), OT = TT.changes.compose(MT)), {
        changes: OT,
        selection: kT.selection ? kT.selection.map(KT) : null === (lT = TT.selection) || void 0 === lT ? void 0 : lT.map(MT),
        effects: ak.mapEffects(TT.effects, MT).concat(ak.mapEffects(kT.effects, KT)),
        annotations: TT.annotations.length ? TT.annotations.concat(kT.annotations) : kT.annotations,
        scrollIntoView: TT.scrollIntoView || kT.scrollIntoView
      }
    }

    function wk(TT, kT, cT) {
      let lT = kT.selection,
        MT = zk(kT.annotations);
      return kT.userEvent && (MT = MT.concat(Fk.userEvent.of(kT.userEvent))), {
        changes: kT.changes instanceof eT ? kT.changes : eT.of(kT.changes || [], cT, TT.facet(jk)),
        selection: lT && (lT instanceof LT ? lT : LT.single(lT.anchor, lT.head)),
        effects: zk(kT.effects),
        annotations: MT,
        scrollIntoView: !!kT.scrollIntoView
      }
    }

    function mk(TT, kT, cT) {
      let lT = wk(TT, kT.length ? kT[0] : {}, TT.doc.length);
      kT.length && !1 === kT[0].filter && (cT = !1);
      for (let KT = 1; KT < kT.length; KT++) {
        !1 === kT[KT].filter && (cT = !1);
        let MT = !!kT[KT].sequential;
        lT = Pk(lT, wk(TT, kT[KT], MT ? lT.changes.newLength : TT.doc.length), MT)
      }
      let MT = Fk.create(TT, lT.changes, lT.selection, lT.effects, lT.annotations, lT.scrollIntoView);
      return function(TT) {
        let kT = TT.startState,
          cT = kT.facet(hk),
          lT = TT;
        for (let MT = cT.length - 1; MT >= 0; MT--) {
          let KT = cT[MT](TT);
          KT && Object.keys(KT).length && (lT = Pk(lT, wk(kT, KT, TT.changes.newLength), !0))
        }
        return lT == TT ? TT : Fk.create(kT, TT.changes, TT.selection, lT.effects, lT.annotations, lT.scrollIntoView)
      }(cT ? function(TT) {
        let kT = TT.startState,
          cT = !0;
        for (let MT of kT.facet(vk)) {
          let kT = MT(TT);
          if (!1 === kT) {
            cT = !1;
            break
          }
          Array.isArray(kT) && (cT = !0 === cT ? kT : rk(cT, kT))
        }
        if (!0 !== cT) {
          let lT, MT;
          if (!1 === cT) MT = TT.changes.invertedDesc, lT = eT.empty(kT.doc.length);
          else {
            let kT = TT.changes.filter(cT);
            lT = kT.changes, MT = kT.filtered.mapDesc(kT.changes).invertedDesc
          }
          TT = Fk.create(kT, lT, TT.selection && TT.selection.map(MT), ak.mapEffects(TT.effects, MT), TT.annotations, TT.scrollIntoView)
        }
        let lT = kT.facet(tk);
        for (let MT = lT.length - 1; MT >= 0; MT--) {
          let cT = lT[MT](TT);
          TT = cT instanceof Fk ? cT : Array.isArray(cT) && 1 == cT.length && cT[0] instanceof Fk ? cT[0] : mk(kT, zk(cT), !1)
        }
        return TT
      }(MT) : MT)
    }
    Fk.time = Qk.define(), Fk.userEvent = Qk.define(), Fk.addToHistory = Qk.define(), Fk.remote = Qk.define();
    const bk = [];

    function zk(TT) {
      return null == TT ? bk : Array.isArray(TT) ? TT : [TT]
    }
    var Jk = function(TT) {
      return TT[TT.Word = 0] = "Word", TT[TT.Space = 1] = "Space", TT[TT.Other = 2] = "Other", TT
    }(Jk || (Jk = {}));
    const Hk = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let ek;
    try {
      ek = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (lc) {}

    function Gk(TT) {
      return kT => {
        if (!/\S/.test(kT)) return Jk.Space;
        if (function(TT) {
            if (ek) return ek.test(TT);
            for (let kT = 0; kT < TT.length; kT++) {
              let cT = TT[kT];
              if (/\w/.test(cT) || cT > "\x80" && (cT.toUpperCase() != cT.toLowerCase() || Hk.test(cT))) return !0
            }
            return !1
          }(kT)) return Jk.Word;
        for (let cT = 0; cT < TT.length; cT++)
          if (kT.indexOf(TT[cT]) > -1) return Jk.Word;
        return Jk.Other
      }
    }
    class Vk {
      constructor(TT, kT, cT, lT, MT, KT) {
        this.config = TT, this.doc = kT, this.selection = cT, this.values = lT, this.status = TT.statusTemplate.slice(), this.computeSlot = MT, KT && (KT._state = this);
        for (let OT = 0; OT < this.config.dynamicSlots.length; OT++) xk(this, OT << 1);
        this.computeSlot = null
      }
      field(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          cT = this.config.address[TT.id];
        if (null != cT) return xk(this, cT), Ik(this, cT);
        if (kT) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        return mk(this, kT, !0)
      }
      applyTransaction(TT) {
        let kT, cT = this.config,
          {
            base: lT,
            compartments: MT
          } = cT;
        for (let OT of TT.effects) OT.is(Ok.reconfigure) ? (cT && (MT = new Map, cT.compartments.forEach(((TT, kT) => MT.set(kT, TT))), cT = null), MT.set(OT.value.compartment, OT.value.extension)) : OT.is(ak.reconfigure) ? (cT = null, lT = OT.value) : OT.is(ak.appendConfig) && (cT = null, lT = zk(lT).concat(OT.value));
        if (cT) kT = TT.startState.values.slice();
        else {
          cT = fk.resolve(lT, MT, this), kT = new Vk(cT, this.doc, this.selection, cT.dynamicSlots.map((() => null)), ((TT, kT) => kT.reconfigure(TT, this)), null).values
        }
        let KT = TT.startState.facet(Ck) ? TT.newSelection : TT.newSelection.asSingle();
        new Vk(cT, TT.newDoc, KT, kT, ((kT, cT) => cT.update(kT, TT)), TT)
      }
      replaceSelection(TT) {
        return "string" == typeof TT && (TT = this.toText(TT)), this.changeByRange((kT => ({
          changes: {
            from: kT.from,
            to: kT.to,
            insert: TT
          },
          range: LT.cursor(kT.from + TT.length)
        })))
      }
      changeByRange(TT) {
        let kT = this.selection,
          cT = TT(kT.qt[0]),
          lT = this.changes(cT.changes),
          MT = [cT.range],
          KT = zk(cT.effects);
        for (let OT = 1; OT < kT.qt.length; OT++) {
          let cT = TT(kT.qt[OT]),
            yT = this.changes(cT.changes),
            fT = yT.map(lT);
          for (let TT = 0; TT < OT; TT++) MT[TT] = MT[TT].map(fT);
          let xT = lT.mapDesc(yT, !0);
          MT.push(cT.range.map(xT)), lT = lT.compose(fT), KT = ak.mapEffects(KT, fT).concat(ak.mapEffects(zk(cT.effects), xT))
        }
        return {
          changes: lT,
          selection: LT.create(MT, kT.mainIndex),
          effects: KT
        }
      }
      changes() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return TT instanceof eT ? TT : eT.of(TT, this.doc.length, this.facet(Vk.lineSeparator))
      }
      toText(TT) {
        return tT.of(TT.split(this.facet(Vk.lineSeparator) || JT))
      }
      sliceDoc() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(TT, kT, this.lineBreak)
      }
      facet(TT) {
        let kT = this.config.address[TT.id];
        return null == kT ? TT.default : (xk(this, kT), Ik(this, kT))
      }
      toJSON(TT) {
        let kT = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (TT)
          for (let cT in TT) {
            let lT = TT[cT];
            lT instanceof qT && null != this.config.address[lT.id] && (kT[cT] = lT.spec.toJSON(this.field(TT[cT]), this))
          }
        return kT
      }
      static fromJSON(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cT = arguments.length > 2 ? arguments[2] : void 0;
        if (!TT || "string" != typeof TT.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let lT = [];
        if (cT)
          for (let MT in cT)
            if (Object.prototype.hasOwnProperty.call(TT, MT)) {
              let kT = cT[MT],
                KT = TT[MT];
              lT.push(kT.init((TT => kT.spec.fromJSON(KT, TT))))
            } return Vk.create({
          doc: TT.doc,
          selection: LT.fromJSON(TT.selection),
          extensions: kT.extensions ? lT.concat([kT.extensions]) : lT
        })
      }
      static create() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          kT = fk.resolve(TT.extensions || [], new Map),
          cT = TT.doc instanceof tT ? TT.doc : tT.of((TT.doc || "").split(kT.staticFacet(Vk.lineSeparator) || JT)),
          lT = TT.selection ? TT.selection instanceof LT ? TT.selection : LT.single(TT.selection.anchor, TT.selection.head) : LT.single(0);
        return RT(lT, cT.length), kT.staticFacet(Ck) || (lT = lT.asSingle()), new Vk(kT, cT, lT, kT.dynamicSlots.map((() => null)), ((TT, kT) => kT.create(TT)), null)
      }
      get tabSize() {
        return this.facet(Vk.tabSize)
      }
      get lineBreak() {
        return this.facet(Vk.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Nk)
      }
      phrase(TT) {
        for (var kT = arguments.length, cT = new Array(kT > 1 ? kT - 1 : 0), lT = 1; lT < kT; lT++) cT[lT - 1] = arguments[lT];
        for (let MT of this.facet(Vk.phrases))
          if (Object.prototype.hasOwnProperty.call(MT, TT)) {
            TT = MT[TT];
            break
          } return cT.length && (TT = TT.replace(/\$(\$|\d*)/g, ((TT, kT) => {
          if ("$" == kT) return "$";
          let lT = +(kT || 1);
          return !lT || lT > cT.length ? TT : cT[lT - 1]
        }))), TT
      }
      languageDataAt(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          lT = [];
        for (let MT of this.facet(Ak))
          for (let KT of MT(this, kT, cT)) Object.prototype.hasOwnProperty.call(KT, TT) && lT.push(KT[TT]);
        return lT
      }
      charCategorizer(TT) {
        let kT = this.languageDataAt("wordChars", TT);
        return Gk(kT.length ? kT[0] : "")
      }
      wordAt(TT) {
        let {
          text: kT,
          from: cT,
          length: lT
        } = this.doc.lineAt(TT), MT = this.charCategorizer(TT), KT = TT - cT, OT = TT - cT;
        for (; KT > 0;) {
          let TT = wT(kT, KT, !1);
          if (MT(kT.slice(TT, KT)) != Jk.Word) break;
          KT = TT
        }
        for (; OT < lT;) {
          let TT = wT(kT, OT);
          if (MT(kT.slice(OT, TT)) != Jk.Word) break;
          OT = TT
        }
        return KT == OT ? null : LT.range(KT + cT, OT + cT)
      }
    }

    function Ek(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        lT = {};
      for (let MT of TT)
        for (let TT of Object.keys(MT)) {
          let kT = MT[TT],
            KT = lT[TT];
          if (void 0 === KT) lT[TT] = kT;
          else if (KT === kT || void 0 === kT);
          else {
            if (!Object.hasOwnProperty.call(cT, TT)) throw new Error("Config merge conflict for field " + TT);
            lT[TT] = cT[TT](KT, kT)
          }
        }
      for (let MT in kT) void 0 === lT[MT] && (lT[MT] = kT[MT]);
      return lT
    }
    Vk.allowMultipleSelections = Ck, Vk.tabSize = UT.define({
      combine: TT => TT.length ? TT[0] : 4
    }), Vk.lineSeparator = jk, Vk.readOnly = Nk, Vk.phrases = UT.define({
      compare(TT, kT) {
        let cT = Object.keys(TT),
          lT = Object.keys(kT);
        return cT.length == lT.length && cT.every((cT => TT[cT] == kT[cT]))
      }
    }), Vk.languageData = Ak, Vk.changeFilter = vk, Vk.transactionFilter = tk, Vk.transactionExtender = hk, Ok.reconfigure = ak.define();
    class Zk {
      eq(TT) {
        return this == TT
      }
      range(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TT;
        return Xk.create(TT, kT, this)
      }
    }

    function uk(TT, kT) {
      return TT == kT || TT.constructor == kT.constructor && TT.eq(kT)
    }
    Zk.prototype.startSide = Zk.prototype.endSide = 0, Zk.prototype.point = !1, Zk.prototype.mapMode = oT.TrackDel;
    class Xk {
      constructor(TT, kT, cT) {
        this.from = TT, this.to = kT, this.value = cT
      }
      static create(TT, kT, cT) {
        return new Xk(TT, kT, cT)
      }
    }

    function dk(TT, kT) {
      return TT.from - kT.from || TT.value.startSide - kT.value.startSide
    }
    class Lk {
      constructor(TT, kT, cT, lT) {
        this.from = TT, this.to = kT, this.value = cT, this.bcT = lT
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          MT = cT ? this.to : this.from;
        for (let KT = lT, OT = MT.length;;) {
          if (KT == OT) return KT;
          let lT = KT + OT >> 1,
            yT = MT[lT] - TT || (cT ? this.value[lT].endSide : this.value[lT].startSide) - kT;
          if (lT == KT) return yT >= 0 ? KT : OT;
          yT >= 0 ? OT = lT : KT = lT + 1
        }
      }
      between(TT, kT, cT, lT) {
        for (let MT = this.findIndex(kT, -1e9, !0), KT = this.findIndex(cT, 1e9, !1, MT); MT < KT; MT++)
          if (!1 === lT(this.from[MT] + TT, this.to[MT] + TT, this.value[MT])) return !1
      }
      map(TT, kT) {
        let cT = [],
          lT = [],
          MT = [],
          KT = -1,
          OT = -1;
        for (let yT = 0; yT < this.value.length; yT++) {
          let fT, xT, IT = this.value[yT],
            AT = this.from[yT] + TT,
            CT = this.to[yT] + TT;
          if (AT == CT) {
            let TT = kT.mapPos(AT, IT.startSide, IT.mapMode);
            if (null == TT) continue;
            if (fT = xT = TT, IT.startSide != IT.endSide && (xT = kT.mapPos(AT, IT.endSide), xT < fT)) continue
          } else if (fT = kT.mapPos(AT, IT.startSide), xT = kT.mapPos(CT, IT.endSide), fT > xT || fT == xT && IT.startSide > 0 && IT.endSide <= 0) continue;
          (xT - fT || IT.endSide - IT.startSide) < 0 || (KT < 0 && (KT = fT), IT.point && (OT = Math.max(OT, xT - fT)), cT.push(IT), lT.push(fT - KT), MT.push(xT - KT))
        }
        return {
          mapped: cT.length ? new Lk(lT, MT, cT, OT) : null,
          pos: KT
        }
      }
    }
    class Rk {
      constructor(TT, kT, cT, lT) {
        this.chunkPos = TT, this.chunk = kT, this.nextLayer = cT, this.bcT = lT
      }
      static create(TT, kT, cT, lT) {
        return new Rk(TT, kT, cT, lT)
      }
      get length() {
        let TT = this.chunk.length - 1;
        return TT < 0 ? 0 : Math.max(this.chunkEnd(TT), this.nextLayer.length)
      }
      get size() {
        if (this.sj) return 0;
        let TT = this.nextLayer.size;
        for (let kT of this.chunk) TT += kT.value.length;
        return TT
      }
      chunkEnd(TT) {
        return this.chunkPos[TT] + this.chunk[TT].length
      }
      update(TT) {
        let {
          add: kT = [],
          sort: cT = !1,
          filterFrom: lT = 0,
          filterTo: MT = this.length
        } = TT, KT = TT.filter;
        if (0 == kT.length && !KT) return this;
        if (cT && (kT = kT.slice().sort(dk)), this.sj) return kT.length ? Rk.of(kT) : this;
        let OT = new Yk(this, null, -1).goto(0),
          yT = 0,
          fT = [],
          xT = new gk;
        for (; OT.value || yT < kT.length;)
          if (yT < kT.length && (OT.from - kT[yT].from || OT.startSide - kT[yT].value.startSide) >= 0) {
            let TT = kT[yT++];
            xT.addInner(TT.from, TT.to, TT.value) || fT.push(TT)
          } else 1 == OT.rangeIndex && OT.chunkIndex < this.chunk.length && (yT == kT.length || this.chunkEnd(OT.chunkIndex) < kT[yT].from) && (!KT || lT > this.chunkEnd(OT.chunkIndex) || MT < this.chunkPos[OT.chunkIndex]) && xT.addChunk(this.chunkPos[OT.chunkIndex], this.chunk[OT.chunkIndex]) ? OT.nextChunk() : ((!KT || lT > OT.to || MT < OT.from || KT(OT.from, OT.to, OT.value)) && (xT.addInner(OT.from, OT.to, OT.value) || fT.push(Xk.create(OT.from, OT.to, OT.value))), OT.next());
        return xT.finishInner(this.nextLayer.sj && !fT.length ? Rk.empty : this.nextLayer.update({
          add: fT,
          filter: KT,
          filterFrom: lT,
          filterTo: MT
        }))
      }
      map(TT) {
        if (TT.empty || this.sj) return this;
        let kT = [],
          cT = [],
          lT = -1;
        for (let KT = 0; KT < this.chunk.length; KT++) {
          let MT = this.chunkPos[KT],
            OT = this.chunk[KT],
            yT = TT.touchesRange(MT, MT + OT.length);
          if (!1 === yT) lT = Math.max(lT, OT.bcT), kT.push(OT), cT.push(TT.mapPos(MT));
          else if (!0 === yT) {
            let {
              mapped: KT,
              pos: yT
            } = OT.map(MT, TT);
            KT && (lT = Math.max(lT, KT.bcT), kT.push(KT), cT.push(yT))
          }
        }
        let MT = this.nextLayer.map(TT);
        return 0 == kT.length ? MT : new Rk(cT, kT, MT || Rk.empty, lT)
      }
      between(TT, kT, cT) {
        if (!this.sj) {
          for (let lT = 0; lT < this.chunk.length; lT++) {
            let MT = this.chunkPos[lT],
              KT = this.chunk[lT];
            if (kT >= MT && TT <= MT + KT.length && !1 === KT.between(MT, TT - MT, kT - MT, cT)) return
          }
          this.nextLayer.between(TT, kT, cT)
        }
      }
      iter() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Bk.from([this]).goto(TT)
      }
      get sj() {
        return this.nextLayer == this
      }
      static iter(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Bk.from(TT).goto(kT)
      }
      static compare(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          KT = TT.filter((TT => TT.bcT > 0 || !TT.sj && TT.bcT >= MT)),
          OT = kT.filter((TT => TT.bcT > 0 || !TT.sj && TT.bcT >= MT)),
          yT = Uk(KT, OT, cT),
          fT = new nk(KT, yT, MT),
          xT = new nk(OT, yT, MT);
        cT.iterGaps(((TT, kT, cT) => pk(fT, TT, xT, kT, cT, lT))), cT.empty && 0 == cT.length && pk(fT, 0, xT, 0, 0, lT)
      }
      static eq(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        null == lT && (lT = 999999999);
        let MT = TT.filter((TT => !TT.sj && kT.indexOf(TT) < 0)),
          KT = kT.filter((kT => !kT.sj && TT.indexOf(kT) < 0));
        if (MT.length != KT.length) return !1;
        if (!MT.length) return !0;
        let OT = Uk(MT, KT),
          yT = new nk(MT, OT, 0).goto(cT),
          fT = new nk(KT, OT, 0).goto(cT);
        for (;;) {
          if (yT.to != fT.to || !ik(yT.active, fT.active) || yT.point && (!fT.point || !uk(yT.point, fT.point))) return !1;
          if (yT.to > lT) return !0;
          yT.next(), fT.next()
        }
      }
      static spans(TT, kT, cT, lT) {
        let MT = new nk(TT, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(kT),
          KT = kT,
          OT = MT.openStart;
        for (;;) {
          let TT = Math.min(MT.to, cT);
          if (MT.point) {
            let cT = MT.activeForPoint(MT.to),
              yT = MT.pointFrom < kT ? cT.length + 1 : MT.point.startSide < 0 ? cT.length : Math.min(cT.length, OT);
            lT.point(KT, TT, MT.point, cT, yT, MT.pointRank), OT = Math.min(MT.openEnd(TT), cT.length)
          } else TT > KT && (lT.span(KT, TT, MT.active, OT), OT = MT.openEnd(TT));
          if (MT.to > cT) return OT + (MT.point && MT.to > cT ? 1 : 0);
          KT = MT.to, MT.next()
        }
      }
      static of (TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = new gk;
        for (let lT of TT instanceof Xk ? [TT] : kT ? function(TT) {
            if (TT.length > 1)
              for (let kT = TT[0], cT = 1; cT < TT.length; cT++) {
                let lT = TT[cT];
                if (dk(kT, lT) > 0) return TT.slice().sort(dk);
                kT = lT
              }
            return TT
          }(TT) : TT) cT.add(lT.from, lT.to, lT.value);
        return cT.finish()
      }
      static join(TT) {
        if (!TT.length) return Rk.empty;
        let kT = TT[TT.length - 1];
        for (let cT = TT.length - 2; cT >= 0; cT--)
          for (let lT = TT[cT]; lT != Rk.empty; lT = lT.nextLayer) kT = new Rk(lT.chunkPos, lT.chunk, kT, Math.max(lT.bcT, kT.bcT));
        return kT
      }
    }
    Rk.empty = new Rk([], [], null, -1), Rk.empty.nextLayer = Rk.empty;
    class gk {
      finishChunk(TT) {
        this.chunks.push(new Lk(this.from, this.to, this.value, this.bcT)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.bcT), this.bcT = -1, TT && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.bcT = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(TT, kT, cT) {
        this.addInner(TT, kT, cT) || (this.nextLayer || (this.nextLayer = new gk)).add(TT, kT, cT)
      }
      addInner(TT, kT, cT) {
        let lT = TT - this.lastTo || cT.startSide - this.last.endSide;
        if (lT <= 0 && (TT - this.lastFrom || cT.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(lT < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = TT), this.from.push(TT - this.chunkStart), this.to.push(kT - this.chunkStart), this.last = cT, this.lastFrom = TT, this.lastTo = kT, this.value.push(cT), cT.point && (this.bcT = Math.max(this.bcT, kT - TT)), !0)
      }
      addChunk(TT, kT) {
        if ((TT - this.lastTo || kT.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, kT.bcT), this.chunks.push(kT), this.chunkPos.push(TT);
        let cT = kT.value.length - 1;
        return this.last = kT.value[cT], this.lastFrom = kT.from[cT] + TT, this.lastTo = kT.to[cT] + TT, !0
      }
      finish() {
        return this.finishInner(Rk.empty)
      }
      finishInner(TT) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return TT;
        let kT = Rk.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(TT) : TT, this.setMaxPoint);
        return this.from = null, kT
      }
    }

    function Uk(TT, kT, cT) {
      let lT = new Map;
      for (let KT of TT)
        for (let TT = 0; TT < KT.chunk.length; TT++) KT.chunk[TT].bcT <= 0 && lT.set(KT.chunk[TT], KT.chunkPos[TT]);
      let MT = new Set;
      for (let KT of kT)
        for (let TT = 0; TT < KT.chunk.length; TT++) {
          let kT = lT.get(KT.chunk[TT]);
          null == kT || (cT ? cT.mapPos(kT) : kT) != KT.chunkPos[TT] || (null === cT || void 0 === cT ? void 0 : cT.touchesRange(kT, kT + KT.chunk[TT].length)) || MT.add(KT.chunk[TT])
        }
      return MT
    }
    class Yk {
      constructor(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = TT, this.skip = kT, this.zcT = cT, this.rank = lT
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(TT, kT, !1), this
      }
      gotoInner(TT, kT, cT) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let kT = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(kT) || this.layer.chunkEnd(this.chunkIndex) < TT || kT.bcT < this.zcT)) break;
          this.chunkIndex++, cT = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let lT = this.layer.chunk[this.chunkIndex].findIndex(TT - this.layer.chunkPos[this.chunkIndex], kT, !0);
          (!cT || this.rangeIndex < lT) && this.setRangeIndex(lT)
        }
        this.next()
      }
      forward(TT, kT) {
        (this.to - TT || this.endSide - kT) < 0 && this.gotoInner(TT, kT, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let TT = this.layer.chunkPos[this.chunkIndex],
              kT = this.layer.chunk[this.chunkIndex],
              cT = TT + kT.from[this.rangeIndex];
            if (this.from = cT, this.to = TT + kT.to[this.rangeIndex], this.value = kT.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.zcT < 0 || this.value.point && this.to - this.from >= this.zcT) break
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
    class Bk {
      constructor(TT) {
        this.heap = TT
      }
      static from(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          lT = [];
        for (let MT = 0; MT < TT.length; MT++)
          for (let KT = TT[MT]; !KT.sj; KT = KT.nextLayer) KT.bcT >= cT && lT.push(new Yk(KT, kT, cT, MT));
        return 1 == lT.length ? lT[0] : new Bk(lT)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let cT of this.heap) cT.goto(TT, kT);
        for (let cT = this.heap.length >> 1; cT >= 0; cT--) Wk(this.heap, cT);
        return this.next(), this
      }
      forward(TT, kT) {
        for (let cT of this.heap) cT.forward(TT, kT);
        for (let cT = this.heap.length >> 1; cT >= 0; cT--) Wk(this.heap, cT);
        (this.to - TT || this.value.endSide - kT) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let TT = this.heap[0];
          this.from = TT.from, this.to = TT.to, this.value = TT.value, this.rank = TT.rank, TT.value && TT.next(), Wk(this.heap, 0)
        }
      }
    }

    function Wk(TT, kT) {
      for (let cT = TT[kT];;) {
        let lT = 1 + (kT << 1);
        if (lT >= TT.length) break;
        let MT = TT[lT];
        if (lT + 1 < TT.length && MT.compare(TT[lT + 1]) >= 0 && (MT = TT[lT + 1], lT++), cT.compare(MT) < 0) break;
        TT[lT] = cT, TT[kT] = MT, kT = lT
      }
    }
    class nk {
      constructor(TT, kT, cT) {
        this.zcT = cT, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Bk.from(TT, kT, cT)
      }
      goto(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(TT, kT), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = TT, this.endSide = kT, this.openStart = -1, this.next(), this
      }
      forward(TT, kT) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - TT || this.active[this.minActive].endSide - kT) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(TT, kT)
      }
      removeActive(TT) {
        qk(this.active, TT), qk(this.activeTo, TT), qk(this.activeRank, TT), this.minActive = Tc(this.active, this.activeTo)
      }
      addActive(TT) {
        let kT = 0,
          {
            value: cT,
            to: lT,
            rank: MT
          } = this.cursor;
        for (; kT < this.activeRank.length && (MT - this.activeRank[kT] || lT - this.activeTo[kT]) > 0;) kT++;
        sk(this.active, kT, cT), sk(this.activeTo, kT, lT), sk(this.activeRank, kT, MT), TT && sk(TT, kT, this.cursor.from), this.minActive = Tc(this.active, this.activeTo)
      }
      next() {
        let TT = this.to,
          kT = this.point;
        this.point = null;
        let cT = this.openStart < 0 ? [] : null;
        for (;;) {
          let lT = this.minActive;
          if (lT > -1 && (this.activeTo[lT] - this.cursor.from || this.active[lT].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[lT] > TT) {
              this.to = this.activeTo[lT], this.endSide = this.active[lT].endSide;
              break
            }
            this.removeActive(lT), cT && qk(cT, lT)
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
                if (!(kT && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = TT, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = TT.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(cT), this.cursor.next()
            }
          }
        }
        if (cT) {
          this.openStart = 0;
          for (let kT = cT.length - 1; kT >= 0 && cT[kT] < TT; kT--) this.openStart++
        }
      }
      activeForPoint(TT) {
        if (!this.active.length) return this.active;
        let kT = [];
        for (let cT = this.active.length - 1; cT >= 0 && !(this.activeRank[cT] < this.pointRank); cT--)(this.activeTo[cT] > TT || this.activeTo[cT] == TT && this.active[cT].endSide >= this.point.endSide) && kT.push(this.active[cT]);
        return kT.reverse()
      }
      openEnd(TT) {
        let kT = 0;
        for (let cT = this.activeTo.length - 1; cT >= 0 && this.activeTo[cT] > TT; cT--) kT++;
        return kT
      }
    }

    function pk(TT, kT, cT, lT, MT, KT) {
      TT.goto(kT), cT.goto(lT);
      let OT = lT + MT,
        yT = lT,
        fT = lT - kT,
        xT = !!KT.boundChange;
      for (let IT = !1;;) {
        let kT = TT.to + fT - cT.to,
          lT = kT || TT.endSide - cT.endSide,
          MT = lT < 0 ? TT.to + fT : cT.to,
          AT = Math.min(MT, OT);
        if (TT.point || cT.point ? (TT.point && cT.point && uk(TT.point, cT.point) && ik(TT.activeForPoint(TT.to), cT.activeForPoint(cT.to)) || KT.comparePoint(yT, AT, TT.point, cT.point), IT = !1) : (IT && KT.boundChange(yT), AT > yT && !ik(TT.active, cT.active) && KT.compareRange(yT, AT, TT.active, cT.active), xT && AT < OT && (kT || TT.openEnd(MT) != cT.openEnd(MT)) && (IT = !0)), MT > OT) break;
        yT = MT, lT <= 0 && TT.next(), lT >= 0 && cT.next()
      }
    }

    function ik(TT, kT) {
      if (TT.length != kT.length) return !1;
      for (let cT = 0; cT < TT.length; cT++)
        if (TT[cT] != kT[cT] && !uk(TT[cT], kT[cT])) return !1;
      return !0
    }

    function qk(TT, kT) {
      for (let cT = kT, lT = TT.length - 1; cT < lT; cT++) TT[cT] = TT[cT + 1];
      TT.pop()
    }

    function sk(TT, kT, cT) {
      for (let lT = TT.length - 1; lT >= kT; lT--) TT[lT + 1] = TT[lT];
      TT[kT] = cT
    }

    function Tc(TT, kT) {
      let cT = -1,
        lT = 1e9;
      for (let MT = 0; MT < kT.length; MT++)(kT[MT] - lT || TT[MT].endSide - TT[cT].endSide) < 0 && (cT = MT, lT = kT[MT]);
      return cT
    }

    function kc(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : TT.length,
        lT = 0;
      for (let MT = 0; MT < cT && MT < TT.length;) 9 == TT.charCodeAt(MT) ? (lT += kT - lT % kT, MT++) : (lT++, MT = wT(TT, MT));
      return lT
    }

    function cc(TT, kT, cT, lT) {
      for (let MT = 0, KT = 0;;) {
        if (KT >= kT) return MT;
        if (MT == TT.length) break;
        KT += 9 == TT.charCodeAt(MT) ? cT - KT % cT : 1, MT = wT(TT, MT)
      }
      return !0 === lT ? -1 : TT.length
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);