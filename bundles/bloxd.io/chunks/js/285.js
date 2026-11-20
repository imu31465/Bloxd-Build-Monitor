export const id = 285;
export const ids = [285];
export const modules = {
  40700: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => WR,
      e: () => BU,
      ChangeSet: () => VU,
      g: () => aR,
      k: () => yU,
      n: () => rR,
      p: () => iU,
      q: () => YU,
      s: () => pR,
      v: () => yR,
      t: () => kR,
      x: () => vR,
      A: () => mR,
      C: () => lU,
      E: () => hU,
      G: () => IR,
      J: () => bU,
      M: () => ZU,
      N: () => XR,
      R: () => Ug,
      V: () => nU,
      Z: () => Rg,
      bb: () => oU
    });
    let tU = [],
      pU = [];

    function EU(UU) {
      if (UU < 768) return !1;
      for (let RU = 0, gU = tU.length;;) {
        let EU = RU + gU >> 1;
        if (UU < tU[EU]) gU = EU;
        else {
          if (!(UU >= pU[EU])) return !0;
          RU = EU + 1
        }
        if (RU == gU) return !1
      }
    }

    function PU(UU) {
      return UU >= 127462 && UU <= 127487
    }(() => {
      let UU = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((UU => UU ? parseInt(UU, 36) : 1));
      for (let RU = 0, gU = 0; RU < UU.length; RU++)(RU % 2 ? pU : tU).push(gU += UU[RU])
    })();
    const TU = 8205;

    function qU(UU, RU) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? KU : cU)(UU, RU, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function KU(UU, RU, gU) {
      if (RU == UU.length) return RU;
      RU && jU(UU.charCodeAt(RU)) && uU(UU.charCodeAt(RU - 1)) && RU--;
      let tU = GU(UU, RU);
      for (RU += CU(tU); RU < UU.length;) {
        let pU = GU(UU, RU);
        if (tU == TU || pU == TU || gU && EU(pU)) RU += CU(pU), tU = pU;
        else {
          if (!PU(pU)) break;
          {
            let gU = 0,
              tU = RU - 2;
            for (; tU >= 0 && PU(GU(UU, tU));) gU++, tU -= 2;
            if (gU % 2 == 0) break;
            RU += 2
          }
        }
      }
      return RU
    }

    function cU(UU, RU, gU) {
      for (; RU > 0;) {
        let tU = KU(UU, RU - 2, gU);
        if (tU < RU) return tU;
        RU--
      }
      return 0
    }

    function GU(UU, RU) {
      let gU = UU.charCodeAt(RU);
      if (!uU(gU) || RU + 1 == UU.length) return gU;
      let tU = UU.charCodeAt(RU + 1);
      return jU(tU) ? tU - 56320 + (gU - 55296 << 10) + 65536 : gU
    }

    function jU(UU) {
      return UU >= 56320 && UU < 57344
    }

    function uU(UU) {
      return UU >= 55296 && UU < 56320
    }

    function CU(UU) {
      return UU < 65536 ? 1 : 2
    }
    class hU {
      lineAt(UU) {
        if (UU < 0 || UU > this.length) throw new RangeError(`Invalid position ${UU} in document of length ${this.length}`);
        return this.lineInner(UU, !1, 1, 0)
      }
      line(UU) {
        if (UU < 1 || UU > this.lines) throw new RangeError(`Invalid line number ${UU} in ${this.lines}-line document`);
        return this.lineInner(UU, !0, 1, 0)
      }
      replace(UU, RU, gU) {
        [UU, RU] = wU(this, UU, RU);
        let tU = [];
        return this.decompose(0, UU, tU, 2), gU.length && gU.decompose(0, gU.length, tU, 3), this.decompose(RU, this.length, tU, 1), eU.from(tU, this.length - (RU - UU) + gU.length)
      }
      append(UU) {
        return this.replace(this.length, this.length, UU)
      }
      slice(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [UU, RU] = wU(this, UU, RU);
        let gU = [];
        return this.decompose(UU, RU, gU, 0), eU.from(gU, RU - UU)
      }
      eq(UU) {
        if (UU == this) return !0;
        if (UU.length != this.length || UU.lines != this.lines) return !1;
        let RU = this.scanIdentical(UU, 1),
          gU = this.length - this.scanIdentical(UU, -1),
          tU = new xU(this),
          pU = new xU(UU);
        for (let EU = RU, PU = RU;;) {
          if (tU.next(EU), pU.next(EU), EU = 0, tU.lineBreak != pU.lineBreak || tU.done != pU.done || tU.value != pU.value) return !1;
          if (PU += tU.value.length, tU.done || PU >= gU) return !0
        }
      }
      iter() {
        return new xU(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new mU(this, UU, RU)
      }
      iterLines(UU, RU) {
        let gU;
        if (null == UU) gU = this.iter();
        else {
          null == RU && (RU = this.lines + 1);
          let tU = this.line(UU).from;
          gU = this.iterRange(tU, Math.max(tU, RU == this.lines + 1 ? this.length : RU <= 1 ? 0 : this.line(RU - 1).to))
        }
        return new IU(gU)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let UU = [];
        return this.flatten(UU), UU
      }
      constructor() {}
      static of (UU) {
        if (0 == UU.length) throw new RangeError("A document must have at least one line");
        return 1 != UU.length || UU[0] ? UU.length <= 32 ? new QU(UU) : eU.from(QU.split(UU, [])) : hU.empty
      }
    }
    class QU extends hU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(UU) {
          let RU = -1;
          for (let gU of UU) RU += gU.length + 1;
          return RU
        }(UU);
        super(), this.text = UU, this.length = RU
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(UU, RU, gU, tU) {
        for (let pU = 0;; pU++) {
          let EU = this.text[pU],
            PU = tU + EU.length;
          if ((RU ? gU : PU) >= UU) return new JU(tU, PU, gU, EU);
          tU = PU + 1, gU++
        }
      }
      decompose(UU, RU, gU, tU) {
        let pU = UU <= 0 && RU >= this.length ? this : new QU(fU(this.text, UU, RU), Math.min(RU, this.length) - Math.max(0, UU));
        if (1 & tU) {
          let UU = gU.pop(),
            RU = WU(pU.text, UU.text.slice(), 0, pU.length);
          if (RU.length <= 32) gU.push(new QU(RU, UU.length + pU.length));
          else {
            let UU = RU.length >> 1;
            gU.push(new QU(RU.slice(0, UU)), new QU(RU.slice(UU)))
          }
        } else gU.push(pU)
      }
      replace(UU, RU, gU) {
        if (!(gU instanceof QU)) return super.replace(UU, RU, gU);
        [UU, RU] = wU(this, UU, RU);
        let tU = WU(this.text, WU(gU.text, fU(this.text, 0, UU)), RU),
          pU = this.length + gU.length - (RU - UU);
        return tU.length <= 32 ? new QU(tU, pU) : eU.from(QU.split(tU, []), pU)
      }
      sliceString(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [UU, RU] = wU(this, UU, RU);
        let tU = "";
        for (let pU = 0, EU = 0; pU <= RU && EU < this.text.length; EU++) {
          let PU = this.text[EU],
            TU = pU + PU.length;
          pU > UU && EU && (tU += gU), UU < TU && RU > pU && (tU += PU.slice(Math.max(0, UU - pU), RU - pU)), pU = TU + 1
        }
        return tU
      }
      flatten(UU) {
        for (let RU of this.text) UU.push(RU)
      }
      scanIdentical() {
        return 0
      }
      static split(UU, RU) {
        let gU = [],
          tU = -1;
        for (let pU of UU) gU.push(pU), tU += pU.length + 1, 32 == gU.length && (RU.push(new QU(gU, tU)), gU = [], tU = -1);
        return tU > -1 && RU.push(new QU(gU, tU)), RU
      }
    }
    class eU extends hU {
      constructor(UU, RU) {
        super(), this.children = UU, this.length = RU, this.lines = 0;
        for (let gU of UU) this.lines += gU.lines
      }
      lineInner(UU, RU, gU, tU) {
        for (let pU = 0;; pU++) {
          let EU = this.children[pU],
            PU = tU + EU.length,
            TU = gU + EU.lines - 1;
          if ((RU ? TU : PU) >= UU) return EU.lineInner(UU, RU, gU, tU);
          tU = PU + 1, gU = TU + 1
        }
      }
      decompose(UU, RU, gU, tU) {
        for (let pU = 0, EU = 0; EU <= RU && pU < this.children.length; pU++) {
          let PU = this.children[pU],
            TU = EU + PU.length;
          if (UU <= TU && RU >= EU) {
            let pU = tU & ((EU <= UU ? 1 : 0) | (TU >= RU ? 2 : 0));
            EU >= UU && TU <= RU && !pU ? gU.push(PU) : PU.decompose(UU - EU, RU - EU, gU, pU)
          }
          EU = TU + 1
        }
      }
      replace(UU, RU, gU) {
        if ([UU, RU] = wU(this, UU, RU), gU.lines < this.lines)
          for (let tU = 0, pU = 0; tU < this.children.length; tU++) {
            let EU = this.children[tU],
              PU = pU + EU.length;
            if (UU >= pU && RU <= PU) {
              let TU = EU.replace(UU - pU, RU - pU, gU),
                qU = this.lines - EU.lines + TU.lines;
              if (TU.lines < qU >> 4 && TU.lines > qU >> 6) {
                let pU = this.children.slice();
                return pU[tU] = TU, new eU(pU, this.length - (RU - UU) + gU.length)
              }
              return super.replace(pU, PU, TU)
            }
            pU = PU + 1
          }
        return super.replace(UU, RU, gU)
      }
      sliceString(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [UU, RU] = wU(this, UU, RU);
        let tU = "";
        for (let pU = 0, EU = 0; pU < this.children.length && EU <= RU; pU++) {
          let PU = this.children[pU],
            TU = EU + PU.length;
          EU > UU && pU && (tU += gU), UU < TU && RU > EU && (tU += PU.sliceString(UU - EU, RU - EU, gU)), EU = TU + 1
        }
        return tU
      }
      flatten(UU) {
        for (let RU of this.children) RU.flatten(UU)
      }
      scanIdentical(UU, RU) {
        if (!(UU instanceof eU)) return 0;
        let gU = 0,
          [tU, pU, EU, PU] = RU > 0 ? [0, 0, this.children.length, UU.children.length] : [this.children.length - 1, UU.children.length - 1, -1, -1];
        for (;; tU += RU, pU += RU) {
          if (tU == EU || pU == PU) return gU;
          let TU = this.children[tU],
            qU = UU.children[pU];
          if (TU != qU) return gU + TU.scanIdentical(qU, RU);
          gU += TU.length + 1
        }
      }
      static from(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.reduce(((UU, RU) => UU + RU.length + 1), -1),
          gU = 0;
        for (let jU of UU) gU += jU.lines;
        if (gU < 32) {
          let gU = [];
          for (let RU of UU) RU.flatten(gU);
          return new QU(gU, RU)
        }
        let tU = Math.max(32, gU >> 5),
          pU = tU << 1,
          EU = tU >> 1,
          PU = [],
          TU = 0,
          qU = -1,
          KU = [];

        function cU(UU) {
          let RU;
          if (UU.lines > pU && UU instanceof eU)
            for (let gU of UU.children) cU(gU);
          else UU.lines > EU && (TU > EU || !TU) ? (GU(), PU.push(UU)) : UU instanceof QU && TU && (RU = KU[KU.length - 1]) instanceof QU && UU.lines + RU.lines <= 32 ? (TU += UU.lines, qU += UU.length + 1, KU[KU.length - 1] = new QU(RU.text.concat(UU.text), RU.length + 1 + UU.length)) : (TU + UU.lines > tU && GU(), TU += UU.lines, qU += UU.length + 1, KU.push(UU))
        }

        function GU() {
          0 != TU && (PU.push(1 == KU.length ? KU[0] : eU.from(KU, qU)), qU = -1, TU = KU.length = 0)
        }
        for (let jU of UU) cU(jU);
        return GU(), 1 == PU.length ? PU[0] : new eU(PU, RU)
      }
    }

    function WU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let pU = 0, EU = 0, PU = !0; EU < UU.length && pU <= tU; EU++) {
        let TU = UU[EU],
          qU = pU + TU.length;
        qU >= gU && (qU > tU && (TU = TU.slice(0, tU - pU)), pU < gU && (TU = TU.slice(gU - pU)), PU ? (RU[RU.length - 1] += TU, PU = !1) : RU.push(TU)), pU = qU + 1
      }
      return RU
    }

    function fU(UU, RU, gU) {
      return WU(UU, [""], RU, gU)
    }
    hU.empty = new QU([""], 0);
    class xU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = RU, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [UU], this.offsets = [RU > 0 ? 1 : (UU instanceof QU ? UU.text.length : UU.children.length) << 1]
      }
      nextInner(UU, RU) {
        for (this.done = this.lineBreak = !1;;) {
          let gU = this.nodes.length - 1,
            tU = this.nodes[gU],
            pU = this.offsets[gU],
            EU = pU >> 1,
            PU = tU instanceof QU ? tU.text.length : tU.children.length;
          if (EU == (RU > 0 ? PU : 0)) {
            if (0 == gU) return this.done = !0, this.value = "", this;
            RU > 0 && this.offsets[gU - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & pU) == (RU > 0 ? 0 : 1)) {
            if (this.offsets[gU] += RU, 0 == UU) return this.lineBreak = !0, this.value = "\n", this;
            UU--
          } else if (tU instanceof QU) {
            let pU = tU.text[EU + (RU < 0 ? -1 : 0)];
            if (this.offsets[gU] += RU, pU.length > Math.max(0, UU)) return this.value = 0 == UU ? pU : RU > 0 ? pU.slice(UU) : pU.slice(0, pU.length - UU), this;
            UU -= pU.length
          } else {
            let pU = tU.children[EU + (RU < 0 ? -1 : 0)];
            UU > pU.length ? (UU -= pU.length, this.offsets[gU] += RU) : (RU < 0 && this.offsets[gU]--, this.nodes.push(pU), this.offsets.push(RU > 0 ? 1 : (pU instanceof QU ? pU.text.length : pU.children.length) << 1))
          }
        }
      }
      next() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return UU < 0 && (this.nextInner(-UU, -this.dir), UU = this.value.length), this.nextInner(UU, this.dir)
      }
    }
    class mU {
      constructor(UU, RU, gU) {
        this.value = "", this.done = !1, this.cursor = new xU(UU, RU > gU ? -1 : 1), this.pos = RU > gU ? UU.length : 0, this.from = Math.min(RU, gU), this.to = Math.max(RU, gU)
      }
      nextInner(UU, RU) {
        if (RU < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        UU += Math.max(0, RU < 0 ? this.pos - this.to : this.from - this.pos);
        let gU = RU < 0 ? this.pos - this.from : this.to - this.pos;
        UU > gU && (UU = gU), gU -= UU;
        let {
          value: tU
        } = this.cursor.next(UU);
        return this.pos += (tU.length + UU) * RU, this.value = tU.length <= gU ? tU : RU < 0 ? tU.slice(tU.length - gU) : tU.slice(0, gU), this.done = !this.value, this
      }
      next() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return UU < 0 ? UU = Math.max(UU, this.from - this.pos) : UU > 0 && (UU = Math.min(UU, this.to - this.pos)), this.nextInner(UU, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class IU {
      constructor(UU) {
        this.inner = UU, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: RU,
            lineBreak: gU,
            value: tU
          } = this.inner.next(UU);
        return RU && this.afterBreak ? (this.value = "", this.afterBreak = !1) : RU ? (this.done = !0, this.value = "") : gU ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = tU, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (hU.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, xU.prototype[Symbol.iterator] = mU.prototype[Symbol.iterator] = IU.prototype[Symbol.iterator] = function() {
      return this
    });
    class JU {
      constructor(UU, RU, gU, tU) {
        this.from = UU, this.to = RU, this.number = gU, this.text = tU
      }
      get length() {
        return this.to - this.from
      }
    }

    function wU(UU, RU, gU) {
      return [RU = Math.max(0, Math.min(UU.length, RU)), Math.max(RU, Math.min(UU.length, gU))]
    }

    function nU(UU, RU) {
      return qU(UU, RU, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function bU(UU, RU) {
      let gU = UU.charCodeAt(RU);
      if (!((tU = gU) >= 55296 && tU < 56320) || RU + 1 == UU.length) return gU;
      var tU;
      let pU = UU.charCodeAt(RU + 1);
      return function(UU) {
        return UU >= 56320 && UU < 57344
      }(pU) ? pU - 56320 + (gU - 55296 << 10) + 65536 : gU
    }

    function oU(UU) {
      return UU <= 65535 ? String.fromCharCode(UU) : (UU -= 65536, String.fromCharCode(55296 + (UU >> 10), 56320 + (1023 & UU)))
    }

    function ZU(UU) {
      return UU < 65536 ? 1 : 2
    }
    const aU = /\r\n?|\n/;
    var YU = function(UU) {
      return UU[UU.Simple = 0] = "Simple", UU[UU.TrackDel = 1] = "TrackDel", UU[UU.TrackBefore = 2] = "TrackBefore", UU[UU.TrackAfter = 3] = "TrackAfter", UU
    }(YU || (YU = {}));
    class BU {
      constructor(UU) {
        this.sections = UU
      }
      get length() {
        let UU = 0;
        for (let RU = 0; RU < this.sections.length; RU += 2) UU += this.sections[RU];
        return UU
      }
      get newLength() {
        let UU = 0;
        for (let RU = 0; RU < this.sections.length; RU += 2) {
          let gU = this.sections[RU + 1];
          UU += gU < 0 ? this.sections[RU] : gU
        }
        return UU
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(UU) {
        for (let RU = 0, gU = 0, tU = 0; RU < this.sections.length;) {
          let pU = this.sections[RU++],
            EU = this.sections[RU++];
          EU < 0 ? (UU(gU, tU, pU), tU += pU) : tU += EU, gU += pU
        }
      }
      iterChangedRanges(UU) {
        vU(this, UU, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let UU = [];
        for (let RU = 0; RU < this.sections.length;) {
          let gU = this.sections[RU++],
            tU = this.sections[RU++];
          tU < 0 ? UU.push(gU, tU) : UU.push(tU, gU)
        }
        return new BU(UU)
      }
      composeDesc(UU) {
        return this.empty ? UU : UU.empty ? this : HU(this, UU)
      }
      mapDesc(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return UU.empty ? this : dU(this, UU, RU)
      }
      mapPos(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YU.Simple,
          tU = 0,
          pU = 0;
        for (let EU = 0; EU < this.sections.length;) {
          let PU = this.sections[EU++],
            TU = this.sections[EU++],
            qU = tU + PU;
          if (TU < 0) {
            if (qU > UU) return pU + (UU - tU);
            pU += PU
          } else {
            if (gU != YU.Simple && qU >= UU && (gU == YU.TrackDel && tU < UU && qU > UU || gU == YU.TrackBefore && tU < UU || gU == YU.TrackAfter && qU > UU)) return null;
            if (qU > UU || qU == UU && RU < 0 && !PU) return UU == tU || RU < 0 ? pU : pU + TU;
            pU += TU
          }
          tU = qU
        }
        if (UU > tU) throw new RangeError(`Position ${UU} is out of range for changeset of length ${tU}`);
        return pU
      }
      touchesRange(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        for (let gU = 0, tU = 0; gU < this.sections.length && tU <= RU;) {
          let pU = tU + this.sections[gU++];
          if (this.sections[gU++] >= 0 && tU <= RU && pU >= UU) return !(tU < UU && pU > RU) || "cover";
          tU = pU
        }
        return !1
      }
      toString() {
        let UU = "";
        for (let RU = 0; RU < this.sections.length;) {
          let gU = this.sections[RU++],
            tU = this.sections[RU++];
          UU += (UU ? " " : "") + gU + (tU >= 0 ? ":" + tU : "")
        }
        return UU
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(UU) {
        if (!Array.isArray(UU) || UU.length % 2 || UU.some((UU => "number" != typeof UU))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new BU(UU)
      }
      static create(UU) {
        return new BU(UU)
      }
    }
    class VU extends BU {
      constructor(UU, RU) {
        super(UU), this.inserted = RU
      }
      apply(UU) {
        if (this.length != UU.length) throw new RangeError("Applying change set to a document with the wrong length");
        return vU(this, ((RU, gU, tU, pU, EU) => UU = UU.replace(tU, tU + (gU - RU), EU)), !1), UU
      }
      mapDesc(UU) {
        return dU(this, UU, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(UU) {
        let RU = this.sections.slice(),
          gU = [];
        for (let tU = 0, pU = 0; tU < RU.length; tU += 2) {
          let EU = RU[tU],
            PU = RU[tU + 1];
          if (PU >= 0) {
            RU[tU] = PU, RU[tU + 1] = EU;
            let TU = tU >> 1;
            for (; gU.length < TU;) gU.push(hU.empty);
            gU.push(EU ? UU.slice(pU, pU + EU) : hU.empty)
          }
          pU += EU
        }
        return new VU(RU, gU)
      }
      compose(UU) {
        return this.empty ? UU : UU.empty ? this : HU(this, UU, !0)
      }
      map(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return UU.empty ? this : dU(this, UU, RU, !0)
      }
      iterChanges(UU) {
        vU(this, UU, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return BU.create(this.sections)
      }
      filter(UU) {
        let RU = [],
          gU = [],
          tU = [],
          pU = new SU(this);
        UU: for (let EU = 0, PU = 0;;) {
          let TU = EU == UU.length ? 1e9 : UU[EU++];
          for (; PU < TU || PU == TU && 0 == pU.len;) {
            if (pU.done) break UU;
            let UU = Math.min(pU.len, TU - PU);
            rU(tU, UU, -1);
            let EU = -1 == pU.ins ? -1 : 0 == pU.off ? pU.ins : 0;
            rU(RU, UU, EU), EU > 0 && XU(gU, RU, pU.text), pU.forward(UU), PU += UU
          }
          let qU = UU[EU++];
          for (; PU < qU;) {
            if (pU.done) break UU;
            let UU = Math.min(pU.len, qU - PU);
            rU(RU, UU, -1), rU(tU, UU, -1 == pU.ins ? -1 : 0 == pU.off ? pU.ins : 0), pU.forward(UU), PU += UU
          }
        }
        return {
          changes: new VU(RU, gU),
          filtered: BU.create(tU)
        }
      }
      toJSON() {
        let UU = [];
        for (let RU = 0; RU < this.sections.length; RU += 2) {
          let gU = this.sections[RU],
            tU = this.sections[RU + 1];
          tU < 0 ? UU.push(gU) : 0 == tU ? UU.push([gU]) : UU.push([gU].concat(this.inserted[RU >> 1].toJSON()))
        }
        return UU
      }
      static of (UU, RU, gU) {
        let tU = [],
          pU = [],
          EU = 0,
          PU = null;

        function TU() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !tU.length) return;
          EU < RU && rU(tU, RU - EU, -1);
          let UU = new VU(tU, pU);
          PU = PU ? PU.compose(UU.map(PU)) : UU, tU = [], pU = [], EU = 0
        }
        return function UU(qU) {
          if (Array.isArray(qU))
            for (let RU of qU) UU(RU);
          else if (qU instanceof VU) {
            if (qU.length != RU) throw new RangeError(`Mismatched change set length (got ${qU.length}, expected ${RU})`);
            TU(), PU = PU ? PU.compose(qU.map(PU)) : qU
          } else {
            let {
              from: UU,
              to: PU = UU,
              insert: KU
            } = qU;
            if (UU > PU || UU < 0 || PU > RU) throw new RangeError(`Invalid change range ${UU} to ${PU} (in doc of length ${RU})`);
            let cU = KU ? "string" == typeof KU ? hU.of(KU.split(gU || aU)) : KU : hU.empty,
              GU = cU.length;
            if (UU == PU && 0 == GU) return;
            UU < EU && TU(), UU > EU && rU(tU, UU - EU, -1), rU(tU, PU - UU, GU), XU(pU, tU, cU), EU = PU
          }
        }(UU), TU(!PU), PU
      }
      static empty(UU) {
        return new VU(UU ? [UU, -1] : [], [])
      }
      static fromJSON(UU) {
        if (!Array.isArray(UU)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let RU = [],
          gU = [];
        for (let tU = 0; tU < UU.length; tU++) {
          let pU = UU[tU];
          if ("number" == typeof pU) RU.push(pU, -1);
          else {
            if (!Array.isArray(pU) || "number" != typeof pU[0] || pU.some(((UU, RU) => RU && "string" != typeof UU))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == pU.length) RU.push(pU[0], 0);
            else {
              for (; gU.length < tU;) gU.push(hU.empty);
              gU[tU] = hU.of(pU.slice(1)), RU.push(pU[0], gU[tU].length)
            }
          }
        }
        return new VU(RU, gU)
      }
      static createSet(UU, RU) {
        return new VU(UU, RU)
      }
    }

    function rU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == RU && gU <= 0) return;
      let pU = UU.length - 2;
      pU >= 0 && gU <= 0 && gU == UU[pU + 1] ? UU[pU] += RU : pU >= 0 && 0 == RU && 0 == UU[pU] ? UU[pU + 1] += gU : tU ? (UU[pU] += RU, UU[pU + 1] += gU) : UU.push(RU, gU)
    }

    function XU(UU, RU, gU) {
      if (0 == gU.length) return;
      let tU = RU.length - 2 >> 1;
      if (tU < UU.length) UU[UU.length - 1] = UU[UU.length - 1].append(gU);
      else {
        for (; UU.length < tU;) UU.push(hU.empty);
        UU.push(gU)
      }
    }

    function vU(UU, RU, gU) {
      let tU = UU.inserted;
      for (let pU = 0, EU = 0, PU = 0; PU < UU.sections.length;) {
        let TU = UU.sections[PU++],
          qU = UU.sections[PU++];
        if (qU < 0) pU += TU, EU += TU;
        else {
          let KU = pU,
            cU = EU,
            GU = hU.empty;
          for (; KU += TU, cU += qU, qU && tU && (GU = GU.append(tU[PU - 2 >> 1])), !(gU || PU == UU.sections.length || UU.sections[PU + 1] < 0);) TU = UU.sections[PU++], qU = UU.sections[PU++];
          RU(pU, KU, EU, cU, GU), pU = KU, EU = cU
        }
      }
    }

    function dU(UU, RU, gU) {
      let tU = [],
        pU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        EU = new SU(UU),
        PU = new SU(RU),
        TU = 0;
      for (let qU = -1;;) {
        if (++TU > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (EU.done && PU.len || PU.done && EU.len) throw new Error("Mismatched change set lengths");
        if (-1 == EU.ins && -1 == PU.ins) {
          let UU = Math.min(EU.len, PU.len);
          rU(tU, UU, -1), EU.forward(UU), PU.forward(UU)
        } else if (PU.ins >= 0 && (EU.ins < 0 || qU == EU.i || 0 == EU.off && (PU.len < EU.len || PU.len == EU.len && !gU))) {
          let UU = PU.len;
          for (rU(tU, PU.ins, -1); UU;) {
            if (++TU > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let RU = Math.min(EU.len, UU);
            EU.ins >= 0 && qU < EU.i && EU.len <= RU && (rU(tU, 0, EU.ins), pU && XU(pU, tU, EU.text), qU = EU.i), EU.forward(RU), UU -= RU
          }
          PU.next()
        } else {
          if (!(EU.ins >= 0)) {
            if (EU.done && PU.done) return pU ? VU.createSet(tU, pU) : BU.create(tU);
            throw new Error("Mismatched change set lengths")
          } {
            let UU = 0,
              RU = EU.len;
            for (; RU;) {
              if (++TU > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == PU.ins) {
                let gU = Math.min(RU, PU.len);
                UU += gU, RU -= gU, PU.forward(gU)
              } else {
                if (!(0 == PU.ins && PU.len < RU)) break;
                RU -= PU.len, PU.next()
              }
            }
            rU(tU, UU, qU < EU.i ? EU.ins : 0), pU && qU < EU.i && XU(pU, tU, EU.text), qU = EU.i, EU.forward(EU.len - RU)
          }
        }
      }
    }

    function HU(UU, RU) {
      let gU = [],
        tU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        pU = new SU(UU),
        EU = new SU(RU),
        PU = 0;
      for (let TU = !1;;) {
        if (++PU > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (pU.done && EU.done) return tU ? VU.createSet(gU, tU) : BU.create(gU);
        if (0 == pU.ins) rU(gU, pU.len, 0, TU), pU.next();
        else if (0 != EU.len || EU.done) {
          if (pU.done || EU.done) throw new Error("Mismatched change set lengths");
          {
            let UU = Math.min(pU.len2, EU.len),
              RU = gU.length;
            if (-1 == pU.ins) {
              let RU = -1 == EU.ins ? -1 : EU.off ? 0 : EU.ins;
              rU(gU, UU, RU, TU), tU && RU && XU(tU, gU, EU.text)
            } else - 1 == EU.ins ? (rU(gU, pU.off ? 0 : pU.len, UU, TU), tU && XU(tU, gU, pU.textBit(UU))) : (rU(gU, pU.off ? 0 : pU.len, EU.off ? 0 : EU.ins, TU), tU && !EU.off && XU(tU, gU, EU.text));
            TU = (pU.ins > UU || EU.ins >= 0 && EU.len > UU) && (TU || gU.length > RU), pU.forward2(UU), EU.forward(UU)
          }
        } else rU(gU, 0, EU.ins, TU), tU && XU(tU, gU, EU.text), EU.next()
      }
    }
    class SU {
      constructor(UU) {
        this.set = UU, this.i = 0, this.next()
      }
      next() {
        let {
          sections: UU
        } = this.set;
        this.i < UU.length ? (this.len = UU[this.i++], this.ins = UU[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: UU
        } = this.set, RU = this.i - 2 >> 1;
        return RU >= UU.length ? hU.empty : UU[RU]
      }
      textBit(UU) {
        let {
          inserted: RU
        } = this.set, gU = this.i - 2 >> 1;
        return gU >= RU.length && !UU ? hU.empty : RU[gU].slice(this.off, null == UU ? void 0 : this.off + UU)
      }
      forward(UU) {
        UU == this.len ? this.next() : (this.len -= UU, this.off += UU)
      }
      forward2(UU) {
        -1 == this.ins ? this.forward(UU) : UU == this.ins ? this.next() : (this.ins -= UU, this.off += UU)
      }
    }
    class sU {
      constructor(UU, RU, gU) {
        this.from = UU, this.to = RU, this.flags = gU
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
        let UU = 7 & this.flags;
        return 7 == UU ? null : UU
      }
      get goalColumn() {
        let UU = this.flags >> 6;
        return 16777215 == UU ? void 0 : UU
      }
      map(UU) {
        let RU, gU, tU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? RU = gU = UU.mapPos(this.from, tU) : (RU = UU.mapPos(this.from, 1), gU = UU.mapPos(this.to, -1)), RU == this.from && gU == this.to ? this : new sU(RU, gU, this.flags)
      }
      extend(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (UU <= this.anchor && RU >= this.anchor) return yU.range(UU, RU, void 0, void 0, gU);
        let tU = Math.abs(UU - this.anchor) > Math.abs(RU - this.anchor) ? UU : RU;
        return yU.range(this.anchor, tU, void 0, void 0, gU)
      }
      eq(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == UU.anchor && this.head == UU.head && this.goalColumn == UU.goalColumn && (!RU || !this.empty || this.assoc == UU.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(UU) {
        if (!UU || "number" != typeof UU.anchor || "number" != typeof UU.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return yU.range(UU.anchor, UU.head)
      }
      static create(UU, RU, gU) {
        return new sU(UU, RU, gU)
      }
    }
    class yU {
      constructor(UU, RU) {
        this.hu = UU, this.mainIndex = RU
      }
      map(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return UU.empty ? this : yU.create(this.hu.map((gU => gU.map(UU, RU))), this.mainIndex)
      }
      eq(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.hu.length != UU.hu.length || this.mainIndex != UU.mainIndex) return !1;
        for (let gU = 0; gU < this.hu.length; gU++)
          if (!this.hu[gU].eq(UU.hu[gU], RU)) return !1;
        return !0
      }
      get main() {
        return this.hu[this.mainIndex]
      }
      asSingle() {
        return 1 == this.hu.length ? this : new yU([this.main], 0)
      }
      addRange(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return yU.create([UU].concat(this.hu), RU ? 0 : this.mainIndex + 1)
      }
      replaceRange(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          gU = this.hu.slice();
        return gU[RU] = UU, yU.create(gU, this.mainIndex)
      }
      toJSON() {
        return {
          hu: this.hu.map((UU => UU.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(UU) {
        if (!UU || !Array.isArray(UU.hu) || "number" != typeof UU.main || UU.main >= UU.hu.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new yU(UU.hu.map((UU => sU.fromJSON(UU))), UU.main)
      }
      static single(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        return new yU([yU.range(UU, RU)], 0)
      }
      static create(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == UU.length) throw new RangeError("A selection needs at least one range");
        for (let gU = 0, tU = 0; tU < UU.length; tU++) {
          let pU = UU[tU];
          if (pU.empty ? pU.from <= gU : pU.from < gU) return yU.normalized(UU.slice(), RU);
          gU = pU.to
        }
        return new yU(UU, RU)
      }
      static cursor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        return sU.create(UU, UU, (0 == RU ? 0 : RU < 0 ? 8 : 16) | (null == gU ? 7 : Math.min(6, gU)) | (null !== tU && void 0 !== tU ? tU : 16777215) << 6)
      }
      static range(UU, RU, gU, tU, pU) {
        let EU = (null !== gU && void 0 !== gU ? gU : 16777215) << 6 | (null == tU ? 7 : Math.min(6, tU));
        return pU || UU == RU || (pU = RU < UU ? 1 : -1), RU < UU ? sU.create(RU, UU, 48 | EU) : sU.create(UU, RU, (pU ? pU < 0 ? 8 : 16 : 0) | EU)
      }
      static normalized(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = UU[RU];
        UU.sort(((UU, RU) => UU.from - RU.from)), RU = UU.indexOf(gU);
        for (let tU = 1; tU < UU.length; tU++) {
          let gU = UU[tU],
            pU = UU[tU - 1];
          if (gU.empty ? gU.from <= pU.to : gU.from < pU.to) {
            let EU = pU.from,
              PU = Math.max(gU.to, pU.to);
            tU <= RU && RU--, UU.splice(--tU, 2, gU.anchor > gU.head ? yU.range(PU, EU) : yU.range(EU, PU))
          }
        }
        return new yU(UU, RU)
      }
    }

    function kU(UU, RU) {
      for (let gU of UU.hu)
        if (gU.to > RU) throw new RangeError("Selection points outside of document")
    }
    let FU = 0;
    class iU {
      constructor(UU, RU, gU, tU, pU) {
        this.combine = UU, this.compareInput = RU, this.compare = gU, this.isStatic = tU, this.id = FU++, this.default = UU([]), this.extensions = "function" == typeof pU ? pU(this) : pU
      }
      get reader() {
        return this
      }
      static define() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new iU(UU.combine || (UU => UU), UU.compareInput || ((UU, RU) => UU === RU), UU.compare || (UU.combine ? (UU, RU) => UU === RU : AU), !!UU.static, UU.enables)
      }
      of(UU) {
        return new zU([], this, 0, UU)
      }
      compute(UU, RU) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new zU(UU, this, 1, RU)
      }
      computeN(UU, RU) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new zU(UU, this, 2, RU)
      }
      from(UU, RU) {
        return RU || (RU = UU => UU), this.compute([UU], (gU => RU(gU.field(UU))))
      }
    }

    function AU(UU, RU) {
      return UU == RU || UU.length == RU.length && UU.every(((UU, gU) => UU === RU[gU]))
    }
    class zU {
      constructor(UU, RU, gU, tU) {
        this.dependencies = UU, this.facet = RU, this.type = gU, this.value = tU, this.id = FU++
      }
      dynamicSlot(UU) {
        var RU;
        let gU = this.value,
          tU = this.facet.compareInput,
          pU = this.id,
          EU = UU[pU] >> 1,
          PU = 2 == this.type,
          TU = !1,
          qU = !1,
          KU = [];
        for (let cU of this.dependencies) "doc" == cU ? TU = !0 : "selection" == cU ? qU = !0 : 0 == (1 & (null !== (RU = UU[cU.id]) && void 0 !== RU ? RU : 1)) && KU.push(UU[cU.id]);
        return {
          create: UU => (UU.values[EU] = gU(UU), 1),
          update(UU, RU) {
            if (TU && RU.docChanged || qU && (RU.docChanged || RU.selection) || DU(UU, KU)) {
              let RU = gU(UU);
              if (PU ? !MU(RU, UU.values[EU], tU) : !tU(RU, UU.values[EU])) return UU.values[EU] = RU, 1
            }
            return 0
          },
          reconfigure: (UU, RU) => {
            let TU, qU = RU.config.address[pU];
            if (null != qU) {
              let pU = cR(RU, qU);
              if (this.dependencies.every((gU => gU instanceof iU ? RU.facet(gU) === UU.facet(gU) : !(gU instanceof lU) || RU.field(gU, !1) == UU.field(gU, !1))) || (PU ? MU(TU = gU(UU), pU, tU) : tU(TU = gU(UU), pU))) return UU.values[EU] = pU, 0
            } else TU = gU(UU);
            return UU.values[EU] = TU, 1
          }
        }
      }
    }

    function MU(UU, RU, gU) {
      if (UU.length != RU.length) return !1;
      for (let tU = 0; tU < UU.length; tU++)
        if (!gU(UU[tU], RU[tU])) return !1;
      return !0
    }

    function DU(UU, RU) {
      let gU = !1;
      for (let tU of RU) 1 & KR(UU, tU) && (gU = !0);
      return gU
    }

    function LU(UU, RU, gU) {
      let tU = gU.map((RU => UU[RU.id])),
        pU = gU.map((UU => UU.type)),
        EU = tU.filter((UU => !(1 & UU))),
        PU = UU[RU.id] >> 1;

      function TU(UU) {
        let gU = [];
        for (let RU = 0; RU < tU.length; RU++) {
          let EU = cR(UU, tU[RU]);
          if (2 == pU[RU])
            for (let UU of EU) gU.push(UU);
          else gU.push(EU)
        }
        return RU.combine(gU)
      }
      return {
        create(UU) {
          for (let RU of tU) KR(UU, RU);
          return UU.values[PU] = TU(UU), 1
        },
        update(UU, gU) {
          if (!DU(UU, EU)) return 0;
          let tU = TU(UU);
          return RU.compare(tU, UU.values[PU]) ? 0 : (UU.values[PU] = tU, 1)
        },
        reconfigure(UU, pU) {
          let EU = DU(UU, tU),
            qU = pU.config.facets[RU.id],
            KU = pU.facet(RU);
          if (qU && !EU && AU(gU, qU)) return UU.values[PU] = KU, 0;
          let cU = TU(UU);
          return RU.compare(cU, KU) ? (UU.values[PU] = KU, 0) : (UU.values[PU] = cU, 1)
        }
      }
    }
    const NU = iU.define({
      static: !0
    });
    class lU {
      constructor(UU, RU, gU, tU, pU) {
        this.id = UU, this.createF = RU, this.updateF = gU, this.compareF = tU, this.spec = pU, this.provides = void 0
      }
      static define(UU) {
        let RU = new lU(FU++, UU.create, UU.update, UU.compare || ((UU, RU) => UU === RU), UU);
        return UU.provide && (RU.provides = UU.provide(RU)), RU
      }
      create(UU) {
        let RU = UU.facet(NU).find((UU => UU.field == this));
        return ((null === RU || void 0 === RU ? void 0 : RU.create) || this.createF)(UU)
      }
      slot(UU) {
        let RU = UU[this.id] >> 1;
        return {
          create: UU => (UU.values[RU] = this.create(UU), 1),
          update: (UU, gU) => {
            let tU = UU.values[RU],
              pU = this.updateF(tU, gU);
            return this.compareF(tU, pU) ? 0 : (UU.values[RU] = pU, 1)
          },
          reconfigure: (UU, gU) => {
            let tU, pU = UU.facet(NU),
              EU = gU.facet(NU);
            return (tU = pU.find((UU => UU.field == this))) && tU != EU.find((UU => UU.field == this)) ? (UU.values[RU] = tU.create(UU), 1) : null != gU.config.address[this.id] ? (UU.values[RU] = gU.field(this), 0) : (UU.values[RU] = this.create(UU), 1)
          }
        }
      }
      init(UU) {
        return [this, NU.of({
          field: this,
          create: UU
        })]
      }
      get extension() {
        return this
      }
    }
    const OU = 4,
      UR = 3,
      RR = 2,
      gR = 1;

    function tR(UU) {
      return RU => new ER(RU, UU)
    }
    const pR = {
      highest: tR(0),
      high: tR(gR),
      default: tR(RR),
      low: tR(UR),
      lowest: tR(OU)
    };
    class ER {
      constructor(UU, RU) {
        this.inner = UU, this.prec = RU
      }
    }
    class PR {
      of(UU) {
        return new TR(this, UU)
      }
      reconfigure(UU) {
        return PR.reconfigure.of({
          compartment: this,
          extension: UU
        })
      }
      get(UU) {
        return UU.config.compartments.get(this)
      }
    }
    class TR {
      constructor(UU, RU) {
        this.compartment = UU, this.inner = RU
      }
    }
    class qR {
      constructor(UU, RU, gU, tU, pU, EU) {
        for (this.base = UU, this.compartments = RU, this.dynamicSlots = gU, this.address = tU, this.staticValues = pU, this.facets = EU, this.statusTemplate = []; this.statusTemplate.length < gU.length;) this.statusTemplate.push(0)
      }
      staticFacet(UU) {
        let RU = this.address[UU.id];
        return null == RU ? UU.default : this.staticValues[RU >> 1]
      }
      static resolve(UU, RU, gU) {
        let tU = [],
          pU = Object.create(null),
          EU = new Map;
        for (let GU of function(UU, RU, gU) {
            let tU = [
                [],
                [],
                [],
                [],
                []
              ],
              pU = new Map;

            function EU(UU, PU) {
              let TU = pU.get(UU);
              if (null != TU) {
                if (TU <= PU) return;
                let RU = tU[TU].indexOf(UU);
                RU > -1 && tU[TU].splice(RU, 1), UU instanceof TR && gU.delete(UU.compartment)
              }
              if (pU.set(UU, PU), Array.isArray(UU))
                for (let RU of UU) EU(RU, PU);
              else if (UU instanceof TR) {
                if (gU.has(UU.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let tU = RU.get(UU.compartment) || UU.inner;
                gU.set(UU.compartment, tU), EU(tU, PU)
              } else if (UU instanceof ER) EU(UU.inner, UU.prec);
              else if (UU instanceof lU) tU[PU].push(UU), UU.provides && EU(UU.provides, PU);
              else if (UU instanceof zU) tU[PU].push(UU), UU.facet.extensions && EU(UU.facet.extensions, RR);
              else {
                let RU = UU.extension;
                if (!RU) throw new Error(`Unrecognized extension value in extension set (${UU}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                EU(RU, PU)
              }
            }
            return EU(UU, RR), tU.reduce(((UU, RU) => UU.concat(RU)))
          }(UU, RU, EU)) GU instanceof lU ? tU.push(GU) : (pU[GU.facet.id] || (pU[GU.facet.id] = [])).push(GU);
        let PU = Object.create(null),
          TU = [],
          qU = [];
        for (let GU of tU) PU[GU.id] = qU.length << 1, qU.push((UU => GU.slot(UU)));
        let KU = null === gU || void 0 === gU ? void 0 : gU.config.facets;
        for (let GU in pU) {
          let UU = pU[GU],
            RU = UU[0].facet,
            tU = KU && KU[GU] || [];
          if (UU.every((UU => 0 == UU.type)))
            if (PU[RU.id] = TU.length << 1 | 1, AU(tU, UU)) TU.push(gU.facet(RU));
            else {
              let tU = RU.combine(UU.map((UU => UU.value)));
              TU.push(gU && RU.compare(tU, gU.facet(RU)) ? gU.facet(RU) : tU)
            }
          else {
            for (let RU of UU) 0 == RU.type ? (PU[RU.id] = TU.length << 1 | 1, TU.push(RU.value)) : (PU[RU.id] = qU.length << 1, qU.push((UU => RU.dynamicSlot(UU))));
            PU[RU.id] = qU.length << 1, qU.push((gU => LU(gU, RU, UU)))
          }
        }
        let cU = qU.map((UU => UU(PU)));
        return new qR(UU, EU, cU, PU, TU, pU)
      }
    }

    function KR(UU, RU) {
      if (1 & RU) return 2;
      let gU = RU >> 1,
        tU = UU.status[gU];
      if (4 == tU) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & tU) return tU;
      UU.status[gU] = 4;
      let pU = UU.computeSlot(UU, UU.config.dynamicSlots[gU]);
      return UU.status[gU] = 2 | pU
    }

    function cR(UU, RU) {
      return 1 & RU ? UU.config.staticValues[RU >> 1] : UU.values[RU >> 1]
    }
    const GR = iU.define(),
      jR = iU.define({
        combine: UU => UU.some((UU => UU)),
        static: !0
      }),
      uR = iU.define({
        combine: UU => UU.length ? UU[0] : void 0,
        static: !0
      }),
      CR = iU.define(),
      hR = iU.define(),
      QR = iU.define(),
      eR = iU.define({
        combine: UU => !!UU.length && UU[0]
      });
    class WR {
      constructor(UU, RU) {
        this.type = UU, this.value = RU
      }
      static define() {
        return new fR
      }
    }
    class fR {
      of(UU) {
        return new WR(this, UU)
      }
    }
    class xR {
      constructor(UU) {
        this.map = UU
      }
      of(UU) {
        return new mR(this, UU)
      }
    }
    class mR {
      constructor(UU, RU) {
        this.type = UU, this.value = RU
      }
      map(UU) {
        let RU = this.type.map(this.value, UU);
        return void 0 === RU ? void 0 : RU == this.value ? this : new mR(this.type, RU)
      }
      is(UU) {
        return this.type == UU
      }
      static define() {
        return new xR((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (UU => UU))
      }
      static mapEffects(UU, RU) {
        if (!UU.length) return UU;
        let gU = [];
        for (let tU of UU) {
          let UU = tU.map(RU);
          UU && gU.push(UU)
        }
        return gU
      }
    }
    mR.reconfigure = mR.define(), mR.appendConfig = mR.define();
    class IR {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.startState = UU, this.changes = RU, this.selection = gU, this.effects = tU, this.annotations = pU, this.scrollIntoView = EU, this._doc = null, this._state = null, gU && kU(gU, RU.newLength), pU.some((UU => UU.type == IR.time)) || (this.annotations = pU.concat(IR.time.of(Date.now())))
      }
      static create(UU, RU, gU, tU, pU, EU) {
        return new IR(UU, RU, gU, tU, pU, EU)
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
      annotation(UU) {
        for (let RU of this.annotations)
          if (RU.type == UU) return RU.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(UU) {
        let RU = this.annotation(IR.userEvent);
        return !(!RU || !(RU == UU || RU.length > UU.length && RU.slice(0, UU.length) == UU && "." == RU[UU.length]))
      }
    }

    function JR(UU, RU) {
      let gU = [];
      for (let tU = 0, pU = 0;;) {
        let EU, PU;
        if (tU < UU.length && (pU == RU.length || RU[pU] >= UU[tU])) EU = UU[tU++], PU = UU[tU++];
        else {
          if (!(pU < RU.length)) return gU;
          EU = RU[pU++], PU = RU[pU++]
        }!gU.length || gU[gU.length - 1] < EU ? gU.push(EU, PU) : gU[gU.length - 1] < PU && (gU[gU.length - 1] = PU)
      }
    }

    function wR(UU, RU, gU) {
      var tU;
      let pU, EU, PU;
      return gU ? (pU = RU.changes, EU = VU.empty(RU.changes.length), PU = UU.changes.compose(RU.changes)) : (pU = RU.changes.map(UU.changes), EU = UU.changes.mapDesc(RU.changes, !0), PU = UU.changes.compose(pU)), {
        changes: PU,
        selection: RU.selection ? RU.selection.map(EU) : null === (tU = UU.selection) || void 0 === tU ? void 0 : tU.map(pU),
        effects: mR.mapEffects(UU.effects, pU).concat(mR.mapEffects(RU.effects, EU)),
        annotations: UU.annotations.length ? UU.annotations.concat(RU.annotations) : RU.annotations,
        scrollIntoView: UU.scrollIntoView || RU.scrollIntoView
      }
    }

    function nR(UU, RU, gU) {
      let tU = RU.selection,
        pU = ZR(RU.annotations);
      return RU.userEvent && (pU = pU.concat(IR.userEvent.of(RU.userEvent))), {
        changes: RU.changes instanceof VU ? RU.changes : VU.of(RU.changes || [], gU, UU.facet(uR)),
        selection: tU && (tU instanceof yU ? tU : yU.single(tU.anchor, tU.head)),
        effects: ZR(RU.effects),
        annotations: pU,
        scrollIntoView: !!RU.scrollIntoView
      }
    }

    function bR(UU, RU, gU) {
      let tU = nR(UU, RU.length ? RU[0] : {}, UU.doc.length);
      RU.length && !1 === RU[0].filter && (gU = !1);
      for (let EU = 1; EU < RU.length; EU++) {
        !1 === RU[EU].filter && (gU = !1);
        let pU = !!RU[EU].sequential;
        tU = wR(tU, nR(UU, RU[EU], pU ? tU.changes.newLength : UU.doc.length), pU)
      }
      let pU = IR.create(UU, tU.changes, tU.selection, tU.effects, tU.annotations, tU.scrollIntoView);
      return function(UU) {
        let RU = UU.startState,
          gU = RU.facet(QR),
          tU = UU;
        for (let pU = gU.length - 1; pU >= 0; pU--) {
          let EU = gU[pU](UU);
          EU && Object.keys(EU).length && (tU = wR(tU, nR(RU, EU, UU.changes.newLength), !0))
        }
        return tU == UU ? UU : IR.create(RU, UU.changes, UU.selection, tU.effects, tU.annotations, tU.scrollIntoView)
      }(gU ? function(UU) {
        let RU = UU.startState,
          gU = !0;
        for (let pU of RU.facet(CR)) {
          let RU = pU(UU);
          if (!1 === RU) {
            gU = !1;
            break
          }
          Array.isArray(RU) && (gU = !0 === gU ? RU : JR(gU, RU))
        }
        if (!0 !== gU) {
          let tU, pU;
          if (!1 === gU) pU = UU.changes.invertedDesc, tU = VU.empty(RU.doc.length);
          else {
            let RU = UU.changes.filter(gU);
            tU = RU.changes, pU = RU.filtered.mapDesc(RU.changes).invertedDesc
          }
          UU = IR.create(RU, tU, UU.selection && UU.selection.map(pU), mR.mapEffects(UU.effects, pU), UU.annotations, UU.scrollIntoView)
        }
        let tU = RU.facet(hR);
        for (let pU = tU.length - 1; pU >= 0; pU--) {
          let gU = tU[pU](UU);
          UU = gU instanceof IR ? gU : Array.isArray(gU) && 1 == gU.length && gU[0] instanceof IR ? gU[0] : bR(RU, ZR(gU), !1)
        }
        return UU
      }(pU) : pU)
    }
    IR.time = WR.define(), IR.userEvent = WR.define(), IR.addToHistory = WR.define(), IR.remote = WR.define();
    const oR = [];

    function ZR(UU) {
      return null == UU ? oR : Array.isArray(UU) ? UU : [UU]
    }
    var aR = function(UU) {
      return UU[UU.Word = 0] = "Word", UU[UU.Space = 1] = "Space", UU[UU.Other = 2] = "Other", UU
    }(aR || (aR = {}));
    const YR = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let BR;
    try {
      BR = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (gg) {}

    function VR(UU) {
      return RU => {
        if (!/\S/.test(RU)) return aR.Space;
        if (function(UU) {
            if (BR) return BR.test(UU);
            for (let RU = 0; RU < UU.length; RU++) {
              let gU = UU[RU];
              if (/\w/.test(gU) || gU > "\x80" && (gU.toUpperCase() != gU.toLowerCase() || YR.test(gU))) return !0
            }
            return !1
          }(RU)) return aR.Word;
        for (let gU = 0; gU < UU.length; gU++)
          if (RU.indexOf(UU[gU]) > -1) return aR.Word;
        return aR.Other
      }
    }
    class rR {
      constructor(UU, RU, gU, tU, pU, EU) {
        this.config = UU, this.doc = RU, this.selection = gU, this.values = tU, this.status = UU.statusTemplate.slice(), this.computeSlot = pU, EU && (EU._state = this);
        for (let PU = 0; PU < this.config.dynamicSlots.length; PU++) KR(this, PU << 1);
        this.computeSlot = null
      }
      field(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          gU = this.config.address[UU.id];
        if (null != gU) return KR(this, gU), cR(this, gU);
        if (RU) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        return bR(this, RU, !0)
      }
      applyTransaction(UU) {
        let RU, gU = this.config,
          {
            base: tU,
            compartments: pU
          } = gU;
        for (let PU of UU.effects) PU.is(PR.reconfigure) ? (gU && (pU = new Map, gU.compartments.forEach(((UU, RU) => pU.set(RU, UU))), gU = null), pU.set(PU.value.compartment, PU.value.extension)) : PU.is(mR.reconfigure) ? (gU = null, tU = PU.value) : PU.is(mR.appendConfig) && (gU = null, tU = ZR(tU).concat(PU.value));
        if (gU) RU = UU.startState.values.slice();
        else {
          gU = qR.resolve(tU, pU, this), RU = new rR(gU, this.doc, this.selection, gU.dynamicSlots.map((() => null)), ((UU, RU) => RU.reconfigure(UU, this)), null).values
        }
        let EU = UU.startState.facet(jR) ? UU.newSelection : UU.newSelection.asSingle();
        new rR(gU, UU.newDoc, EU, RU, ((RU, gU) => gU.update(RU, UU)), UU)
      }
      replaceSelection(UU) {
        return "string" == typeof UU && (UU = this.toText(UU)), this.changeByRange((RU => ({
          changes: {
            from: RU.from,
            to: RU.to,
            insert: UU
          },
          range: yU.cursor(RU.from + UU.length)
        })))
      }
      changeByRange(UU) {
        let RU = this.selection,
          gU = UU(RU.hu[0]),
          tU = this.changes(gU.changes),
          pU = [gU.range],
          EU = ZR(gU.effects);
        for (let PU = 1; PU < RU.hu.length; PU++) {
          let gU = UU(RU.hu[PU]),
            TU = this.changes(gU.changes),
            qU = TU.map(tU);
          for (let UU = 0; UU < PU; UU++) pU[UU] = pU[UU].map(qU);
          let KU = tU.mapDesc(TU, !0);
          pU.push(gU.range.map(KU)), tU = tU.compose(qU), EU = mR.mapEffects(EU, qU).concat(mR.mapEffects(ZR(gU.effects), KU))
        }
        return {
          changes: tU,
          selection: yU.create(pU, RU.mainIndex),
          effects: EU
        }
      }
      changes() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return UU instanceof VU ? UU : VU.of(UU, this.doc.length, this.facet(rR.lineSeparator))
      }
      toText(UU) {
        return hU.of(UU.split(this.facet(rR.lineSeparator) || aU))
      }
      sliceDoc() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(UU, RU, this.lineBreak)
      }
      facet(UU) {
        let RU = this.config.address[UU.id];
        return null == RU ? UU.default : (KR(this, RU), cR(this, RU))
      }
      toJSON(UU) {
        let RU = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (UU)
          for (let gU in UU) {
            let tU = UU[gU];
            tU instanceof lU && null != this.config.address[tU.id] && (RU[gU] = tU.spec.toJSON(this.field(UU[gU]), this))
          }
        return RU
      }
      static fromJSON(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gU = arguments.length > 2 ? arguments[2] : void 0;
        if (!UU || "string" != typeof UU.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let tU = [];
        if (gU)
          for (let pU in gU)
            if (Object.prototype.hasOwnProperty.call(UU, pU)) {
              let RU = gU[pU],
                EU = UU[pU];
              tU.push(RU.init((UU => RU.spec.fromJSON(EU, UU))))
            } return rR.create({
          doc: UU.doc,
          selection: yU.fromJSON(UU.selection),
          extensions: RU.extensions ? tU.concat([RU.extensions]) : tU
        })
      }
      static create() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          RU = qR.resolve(UU.extensions || [], new Map),
          gU = UU.doc instanceof hU ? UU.doc : hU.of((UU.doc || "").split(RU.staticFacet(rR.lineSeparator) || aU)),
          tU = UU.selection ? UU.selection instanceof yU ? UU.selection : yU.single(UU.selection.anchor, UU.selection.head) : yU.single(0);
        return kU(tU, gU.length), RU.staticFacet(jR) || (tU = tU.asSingle()), new rR(RU, gU, tU, RU.dynamicSlots.map((() => null)), ((UU, RU) => RU.create(UU)), null)
      }
      get tabSize() {
        return this.facet(rR.tabSize)
      }
      get lineBreak() {
        return this.facet(rR.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(eR)
      }
      phrase(UU) {
        for (var RU = arguments.length, gU = new Array(RU > 1 ? RU - 1 : 0), tU = 1; tU < RU; tU++) gU[tU - 1] = arguments[tU];
        for (let pU of this.facet(rR.phrases))
          if (Object.prototype.hasOwnProperty.call(pU, UU)) {
            UU = pU[UU];
            break
          } return gU.length && (UU = UU.replace(/\$(\$|\d*)/g, ((UU, RU) => {
          if ("$" == RU) return "$";
          let tU = +(RU || 1);
          return !tU || tU > gU.length ? UU : gU[tU - 1]
        }))), UU
      }
      languageDataAt(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          tU = [];
        for (let pU of this.facet(GR))
          for (let EU of pU(this, RU, gU)) Object.prototype.hasOwnProperty.call(EU, UU) && tU.push(EU[UU]);
        return tU
      }
      charCategorizer(UU) {
        let RU = this.languageDataAt("wordChars", UU);
        return VR(RU.length ? RU[0] : "")
      }
      wordAt(UU) {
        let {
          text: RU,
          from: gU,
          length: tU
        } = this.doc.lineAt(UU), pU = this.charCategorizer(UU), EU = UU - gU, PU = UU - gU;
        for (; EU > 0;) {
          let UU = nU(RU, EU, !1);
          if (pU(RU.slice(UU, EU)) != aR.Word) break;
          EU = UU
        }
        for (; PU < tU;) {
          let UU = nU(RU, PU);
          if (pU(RU.slice(PU, UU)) != aR.Word) break;
          PU = UU
        }
        return EU == PU ? null : yU.range(EU + gU, PU + gU)
      }
    }

    function XR(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        tU = {};
      for (let pU of UU)
        for (let UU of Object.keys(pU)) {
          let RU = pU[UU],
            EU = tU[UU];
          if (void 0 === EU) tU[UU] = RU;
          else if (EU === RU || void 0 === RU);
          else {
            if (!Object.hasOwnProperty.call(gU, UU)) throw new Error("Config merge conflict for field " + UU);
            tU[UU] = gU[UU](EU, RU)
          }
        }
      for (let pU in RU) void 0 === tU[pU] && (tU[pU] = RU[pU]);
      return tU
    }
    rR.allowMultipleSelections = jR, rR.tabSize = iU.define({
      combine: UU => UU.length ? UU[0] : 4
    }), rR.lineSeparator = uR, rR.readOnly = eR, rR.phrases = iU.define({
      compare(UU, RU) {
        let gU = Object.keys(UU),
          tU = Object.keys(RU);
        return gU.length == tU.length && gU.every((gU => UU[gU] == RU[gU]))
      }
    }), rR.languageData = GR, rR.changeFilter = CR, rR.transactionFilter = hR, rR.transactionExtender = QR, PR.reconfigure = mR.define();
    class vR {
      eq(UU) {
        return this == UU
      }
      range(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        return HR.create(UU, RU, this)
      }
    }

    function dR(UU, RU) {
      return UU == RU || UU.constructor == RU.constructor && UU.eq(RU)
    }
    vR.prototype.startSide = vR.prototype.endSide = 0, vR.prototype.point = !1, vR.prototype.mapMode = YU.TrackDel;
    class HR {
      constructor(UU, RU, gU) {
        this.from = UU, this.to = RU, this.value = gU
      }
      static create(UU, RU, gU) {
        return new HR(UU, RU, gU)
      }
    }

    function SR(UU, RU) {
      return UU.from - RU.from || UU.value.startSide - RU.value.startSide
    }
    class sR {
      constructor(UU, RU, gU, tU) {
        this.from = UU, this.to = RU, this.value = gU, this.kgU = tU
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          pU = gU ? this.to : this.from;
        for (let EU = tU, PU = pU.length;;) {
          if (EU == PU) return EU;
          let tU = EU + PU >> 1,
            TU = pU[tU] - UU || (gU ? this.value[tU].endSide : this.value[tU].startSide) - RU;
          if (tU == EU) return TU >= 0 ? EU : PU;
          TU >= 0 ? PU = tU : EU = tU + 1
        }
      }
      between(UU, RU, gU, tU) {
        for (let pU = this.findIndex(RU, -1e9, !0), EU = this.findIndex(gU, 1e9, !1, pU); pU < EU; pU++)
          if (!1 === tU(this.from[pU] + UU, this.to[pU] + UU, this.value[pU])) return !1
      }
      map(UU, RU) {
        let gU = [],
          tU = [],
          pU = [],
          EU = -1,
          PU = -1;
        for (let TU = 0; TU < this.value.length; TU++) {
          let qU, KU, cU = this.value[TU],
            GU = this.from[TU] + UU,
            jU = this.to[TU] + UU;
          if (GU == jU) {
            let UU = RU.mapPos(GU, cU.startSide, cU.mapMode);
            if (null == UU) continue;
            if (qU = KU = UU, cU.startSide != cU.endSide && (KU = RU.mapPos(GU, cU.endSide), KU < qU)) continue
          } else if (qU = RU.mapPos(GU, cU.startSide), KU = RU.mapPos(jU, cU.endSide), qU > KU || qU == KU && cU.startSide > 0 && cU.endSide <= 0) continue;
          (KU - qU || cU.endSide - cU.startSide) < 0 || (EU < 0 && (EU = qU), cU.point && (PU = Math.max(PU, KU - qU)), gU.push(cU), tU.push(qU - EU), pU.push(KU - EU))
        }
        return {
          mapped: gU.length ? new sR(tU, pU, gU, PU) : null,
          pos: EU
        }
      }
    }
    class yR {
      constructor(UU, RU, gU, tU) {
        this.chunkPos = UU, this.chunk = RU, this.nextLayer = gU, this.kgU = tU
      }
      static create(UU, RU, gU, tU) {
        return new yR(UU, RU, gU, tU)
      }
      get length() {
        let UU = this.chunk.length - 1;
        return UU < 0 ? 0 : Math.max(this.chunkEnd(UU), this.nextLayer.length)
      }
      get size() {
        if (this.Lu) return 0;
        let UU = this.nextLayer.size;
        for (let RU of this.chunk) UU += RU.value.length;
        return UU
      }
      chunkEnd(UU) {
        return this.chunkPos[UU] + this.chunk[UU].length
      }
      update(UU) {
        let {
          add: RU = [],
          sort: gU = !1,
          filterFrom: tU = 0,
          filterTo: pU = this.length
        } = UU, EU = UU.filter;
        if (0 == RU.length && !EU) return this;
        if (gU && (RU = RU.slice().sort(SR)), this.Lu) return RU.length ? yR.of(RU) : this;
        let PU = new iR(this, null, -1).goto(0),
          TU = 0,
          qU = [],
          KU = new kR;
        for (; PU.value || TU < RU.length;)
          if (TU < RU.length && (PU.from - RU[TU].from || PU.startSide - RU[TU].value.startSide) >= 0) {
            let UU = RU[TU++];
            KU.addInner(UU.from, UU.to, UU.value) || qU.push(UU)
          } else 1 == PU.rangeIndex && PU.chunkIndex < this.chunk.length && (TU == RU.length || this.chunkEnd(PU.chunkIndex) < RU[TU].from) && (!EU || tU > this.chunkEnd(PU.chunkIndex) || pU < this.chunkPos[PU.chunkIndex]) && KU.addChunk(this.chunkPos[PU.chunkIndex], this.chunk[PU.chunkIndex]) ? PU.nextChunk() : ((!EU || tU > PU.to || pU < PU.from || EU(PU.from, PU.to, PU.value)) && (KU.addInner(PU.from, PU.to, PU.value) || qU.push(HR.create(PU.from, PU.to, PU.value))), PU.next());
        return KU.finishInner(this.nextLayer.Lu && !qU.length ? yR.empty : this.nextLayer.update({
          add: qU,
          filter: EU,
          filterFrom: tU,
          filterTo: pU
        }))
      }
      map(UU) {
        if (UU.empty || this.Lu) return this;
        let RU = [],
          gU = [],
          tU = -1;
        for (let EU = 0; EU < this.chunk.length; EU++) {
          let pU = this.chunkPos[EU],
            PU = this.chunk[EU],
            TU = UU.touchesRange(pU, pU + PU.length);
          if (!1 === TU) tU = Math.max(tU, PU.kgU), RU.push(PU), gU.push(UU.mapPos(pU));
          else if (!0 === TU) {
            let {
              mapped: EU,
              pos: TU
            } = PU.map(pU, UU);
            EU && (tU = Math.max(tU, EU.kgU), RU.push(EU), gU.push(TU))
          }
        }
        let pU = this.nextLayer.map(UU);
        return 0 == RU.length ? pU : new yR(gU, RU, pU || yR.empty, tU)
      }
      between(UU, RU, gU) {
        if (!this.Lu) {
          for (let tU = 0; tU < this.chunk.length; tU++) {
            let pU = this.chunkPos[tU],
              EU = this.chunk[tU];
            if (RU >= pU && UU <= pU + EU.length && !1 === EU.between(pU, UU - pU, RU - pU, gU)) return
          }
          this.nextLayer.between(UU, RU, gU)
        }
      }
      iter() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return AR.from([this]).goto(UU)
      }
      get Lu() {
        return this.nextLayer == this
      }
      static iter(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return AR.from(UU).goto(RU)
      }
      static compare(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          EU = UU.filter((UU => UU.kgU > 0 || !UU.Lu && UU.kgU >= pU)),
          PU = RU.filter((UU => UU.kgU > 0 || !UU.Lu && UU.kgU >= pU)),
          TU = FR(EU, PU, gU),
          qU = new MR(EU, TU, pU),
          KU = new MR(PU, TU, pU);
        gU.iterGaps(((UU, RU, gU) => DR(qU, UU, KU, RU, gU, tU))), gU.empty && 0 == gU.length && DR(qU, 0, KU, 0, 0, tU)
      }
      static eq(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        null == tU && (tU = 999999999);
        let pU = UU.filter((UU => !UU.Lu && RU.indexOf(UU) < 0)),
          EU = RU.filter((RU => !RU.Lu && UU.indexOf(RU) < 0));
        if (pU.length != EU.length) return !1;
        if (!pU.length) return !0;
        let PU = FR(pU, EU),
          TU = new MR(pU, PU, 0).goto(gU),
          qU = new MR(EU, PU, 0).goto(gU);
        for (;;) {
          if (TU.to != qU.to || !LR(TU.active, qU.active) || TU.point && (!qU.point || !dR(TU.point, qU.point))) return !1;
          if (TU.to > tU) return !0;
          TU.next(), qU.next()
        }
      }
      static spans(UU, RU, gU, tU) {
        let pU = new MR(UU, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(RU),
          EU = RU,
          PU = pU.openStart;
        for (;;) {
          let UU = Math.min(pU.to, gU);
          if (pU.point) {
            let gU = pU.activeForPoint(pU.to),
              TU = pU.pointFrom < RU ? gU.length + 1 : pU.point.startSide < 0 ? gU.length : Math.min(gU.length, PU);
            tU.point(EU, UU, pU.point, gU, TU, pU.pointRank), PU = Math.min(pU.openEnd(UU), gU.length)
          } else UU > EU && (tU.span(EU, UU, pU.active, PU), PU = pU.openEnd(UU));
          if (pU.to > gU) return PU + (pU.point && pU.to > gU ? 1 : 0);
          EU = pU.to, pU.next()
        }
      }
      static of (UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = new kR;
        for (let tU of UU instanceof HR ? [UU] : RU ? function(UU) {
            if (UU.length > 1)
              for (let RU = UU[0], gU = 1; gU < UU.length; gU++) {
                let tU = UU[gU];
                if (SR(RU, tU) > 0) return UU.slice().sort(SR);
                RU = tU
              }
            return UU
          }(UU) : UU) gU.add(tU.from, tU.to, tU.value);
        return gU.finish()
      }
      static join(UU) {
        if (!UU.length) return yR.empty;
        let RU = UU[UU.length - 1];
        for (let gU = UU.length - 2; gU >= 0; gU--)
          for (let tU = UU[gU]; tU != yR.empty; tU = tU.nextLayer) RU = new yR(tU.chunkPos, tU.chunk, RU, Math.max(tU.kgU, RU.kgU));
        return RU
      }
    }
    yR.empty = new yR([], [], null, -1), yR.empty.nextLayer = yR.empty;
    class kR {
      finishChunk(UU) {
        this.chunks.push(new sR(this.from, this.to, this.value, this.kgU)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.kgU), this.kgU = -1, UU && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.kgU = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(UU, RU, gU) {
        this.addInner(UU, RU, gU) || (this.nextLayer || (this.nextLayer = new kR)).add(UU, RU, gU)
      }
      addInner(UU, RU, gU) {
        let tU = UU - this.lastTo || gU.startSide - this.last.endSide;
        if (tU <= 0 && (UU - this.lastFrom || gU.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(tU < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = UU), this.from.push(UU - this.chunkStart), this.to.push(RU - this.chunkStart), this.last = gU, this.lastFrom = UU, this.lastTo = RU, this.value.push(gU), gU.point && (this.kgU = Math.max(this.kgU, RU - UU)), !0)
      }
      addChunk(UU, RU) {
        if ((UU - this.lastTo || RU.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, RU.kgU), this.chunks.push(RU), this.chunkPos.push(UU);
        let gU = RU.value.length - 1;
        return this.last = RU.value[gU], this.lastFrom = RU.from[gU] + UU, this.lastTo = RU.to[gU] + UU, !0
      }
      finish() {
        return this.finishInner(yR.empty)
      }
      finishInner(UU) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return UU;
        let RU = yR.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(UU) : UU, this.setMaxPoint);
        return this.from = null, RU
      }
    }

    function FR(UU, RU, gU) {
      let tU = new Map;
      for (let EU of UU)
        for (let UU = 0; UU < EU.chunk.length; UU++) EU.chunk[UU].kgU <= 0 && tU.set(EU.chunk[UU], EU.chunkPos[UU]);
      let pU = new Set;
      for (let EU of RU)
        for (let UU = 0; UU < EU.chunk.length; UU++) {
          let RU = tU.get(EU.chunk[UU]);
          null == RU || (gU ? gU.mapPos(RU) : RU) != EU.chunkPos[UU] || (null === gU || void 0 === gU ? void 0 : gU.touchesRange(RU, RU + EU.chunk[UU].length)) || pU.add(EU.chunk[UU])
        }
      return pU
    }
    class iR {
      constructor(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = UU, this.skip = RU, this.FgU = gU, this.rank = tU
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(UU, RU, !1), this
      }
      gotoInner(UU, RU, gU) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let RU = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(RU) || this.layer.chunkEnd(this.chunkIndex) < UU || RU.kgU < this.FgU)) break;
          this.chunkIndex++, gU = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let tU = this.layer.chunk[this.chunkIndex].findIndex(UU - this.layer.chunkPos[this.chunkIndex], RU, !0);
          (!gU || this.rangeIndex < tU) && this.setRangeIndex(tU)
        }
        this.next()
      }
      forward(UU, RU) {
        (this.to - UU || this.endSide - RU) < 0 && this.gotoInner(UU, RU, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let UU = this.layer.chunkPos[this.chunkIndex],
              RU = this.layer.chunk[this.chunkIndex],
              gU = UU + RU.from[this.rangeIndex];
            if (this.from = gU, this.to = UU + RU.to[this.rangeIndex], this.value = RU.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.FgU < 0 || this.value.point && this.to - this.from >= this.FgU) break
          }
        }
      }
      setRangeIndex(UU) {
        if (UU == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = UU
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(UU) {
        return this.from - UU.from || this.startSide - UU.startSide || this.rank - UU.rank || this.to - UU.to || this.endSide - UU.endSide
      }
    }
    class AR {
      constructor(UU) {
        this.heap = UU
      }
      static from(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          tU = [];
        for (let pU = 0; pU < UU.length; pU++)
          for (let EU = UU[pU]; !EU.Lu; EU = EU.nextLayer) EU.kgU >= gU && tU.push(new iR(EU, RU, gU, pU));
        return 1 == tU.length ? tU[0] : new AR(tU)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let gU of this.heap) gU.goto(UU, RU);
        for (let gU = this.heap.length >> 1; gU >= 0; gU--) zR(this.heap, gU);
        return this.next(), this
      }
      forward(UU, RU) {
        for (let gU of this.heap) gU.forward(UU, RU);
        for (let gU = this.heap.length >> 1; gU >= 0; gU--) zR(this.heap, gU);
        (this.to - UU || this.value.endSide - RU) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let UU = this.heap[0];
          this.from = UU.from, this.to = UU.to, this.value = UU.value, this.rank = UU.rank, UU.value && UU.next(), zR(this.heap, 0)
        }
      }
    }

    function zR(UU, RU) {
      for (let gU = UU[RU];;) {
        let tU = 1 + (RU << 1);
        if (tU >= UU.length) break;
        let pU = UU[tU];
        if (tU + 1 < UU.length && pU.compare(UU[tU + 1]) >= 0 && (pU = UU[tU + 1], tU++), gU.compare(pU) < 0) break;
        UU[tU] = gU, UU[RU] = pU, RU = tU
      }
    }
    class MR {
      constructor(UU, RU, gU) {
        this.FgU = gU, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = AR.from(UU, RU, gU)
      }
      goto(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(UU, RU), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = UU, this.endSide = RU, this.openStart = -1, this.next(), this
      }
      forward(UU, RU) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - UU || this.active[this.minActive].endSide - RU) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(UU, RU)
      }
      removeActive(UU) {
        NR(this.active, UU), NR(this.activeTo, UU), NR(this.activeRank, UU), this.minActive = OR(this.active, this.activeTo)
      }
      addActive(UU) {
        let RU = 0,
          {
            value: gU,
            to: tU,
            rank: pU
          } = this.cursor;
        for (; RU < this.activeRank.length && (pU - this.activeRank[RU] || tU - this.activeTo[RU]) > 0;) RU++;
        lR(this.active, RU, gU), lR(this.activeTo, RU, tU), lR(this.activeRank, RU, pU), UU && lR(UU, RU, this.cursor.from), this.minActive = OR(this.active, this.activeTo)
      }
      next() {
        let UU = this.to,
          RU = this.point;
        this.point = null;
        let gU = this.openStart < 0 ? [] : null;
        for (;;) {
          let tU = this.minActive;
          if (tU > -1 && (this.activeTo[tU] - this.cursor.from || this.active[tU].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[tU] > UU) {
              this.to = this.activeTo[tU], this.endSide = this.active[tU].endSide;
              break
            }
            this.removeActive(tU), gU && NR(gU, tU)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > UU) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let UU = this.cursor.value;
              if (UU.point) {
                if (!(RU && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = UU, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = UU.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(gU), this.cursor.next()
            }
          }
        }
        if (gU) {
          this.openStart = 0;
          for (let RU = gU.length - 1; RU >= 0 && gU[RU] < UU; RU--) this.openStart++
        }
      }
      activeForPoint(UU) {
        if (!this.active.length) return this.active;
        let RU = [];
        for (let gU = this.active.length - 1; gU >= 0 && !(this.activeRank[gU] < this.pointRank); gU--)(this.activeTo[gU] > UU || this.activeTo[gU] == UU && this.active[gU].endSide >= this.point.endSide) && RU.push(this.active[gU]);
        return RU.reverse()
      }
      openEnd(UU) {
        let RU = 0;
        for (let gU = this.activeTo.length - 1; gU >= 0 && this.activeTo[gU] > UU; gU--) RU++;
        return RU
      }
    }

    function DR(UU, RU, gU, tU, pU, EU) {
      UU.goto(RU), gU.goto(tU);
      let PU = tU + pU,
        TU = tU,
        qU = tU - RU,
        KU = !!EU.boundChange;
      for (let cU = !1;;) {
        let RU = UU.to + qU - gU.to,
          tU = RU || UU.endSide - gU.endSide,
          pU = tU < 0 ? UU.to + qU : gU.to,
          GU = Math.min(pU, PU);
        if (UU.point || gU.point ? (UU.point && gU.point && dR(UU.point, gU.point) && LR(UU.activeForPoint(UU.to), gU.activeForPoint(gU.to)) || EU.comparePoint(TU, GU, UU.point, gU.point), cU = !1) : (cU && EU.boundChange(TU), GU > TU && !LR(UU.active, gU.active) && EU.compareRange(TU, GU, UU.active, gU.active), KU && GU < PU && (RU || UU.openEnd(pU) != gU.openEnd(pU)) && (cU = !0)), pU > PU) break;
        TU = pU, tU <= 0 && UU.next(), tU >= 0 && gU.next()
      }
    }

    function LR(UU, RU) {
      if (UU.length != RU.length) return !1;
      for (let gU = 0; gU < UU.length; gU++)
        if (UU[gU] != RU[gU] && !dR(UU[gU], RU[gU])) return !1;
      return !0
    }

    function NR(UU, RU) {
      for (let gU = RU, tU = UU.length - 1; gU < tU; gU++) UU[gU] = UU[gU + 1];
      UU.pop()
    }

    function lR(UU, RU, gU) {
      for (let tU = UU.length - 1; tU >= RU; tU--) UU[tU + 1] = UU[tU];
      UU[RU] = gU
    }

    function OR(UU, RU) {
      let gU = -1,
        tU = 1e9;
      for (let pU = 0; pU < RU.length; pU++)(RU[pU] - tU || UU[pU].endSide - UU[gU].endSide) < 0 && (gU = pU, tU = RU[pU]);
      return gU
    }

    function Ug(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.length,
        tU = 0;
      for (let pU = 0; pU < gU && pU < UU.length;) 9 == UU.charCodeAt(pU) ? (tU += RU - tU % RU, pU++) : (tU++, pU = nU(UU, pU));
      return tU
    }

    function Rg(UU, RU, gU, tU) {
      for (let pU = 0, EU = 0;;) {
        if (EU >= RU) return pU;
        if (pU == UU.length) break;
        EU += 9 == UU.charCodeAt(pU) ? gU - EU % gU : 1, pU = nU(UU, pU)
      }
      return !0 === tU ? -1 : UU.length
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);