export const id = 275;
export const ids = [275];
export const modules = {
  40060: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => rc,
      h: () => WJ,
      ChangeSet: () => gJ,
      i: () => bc,
      m: () => OJ,
      o: () => Hc,
      p: () => uJ,
      r: () => wJ,
      t: () => Uc,
      v: () => Oc,
      u: () => Tc,
      x: () => kc,
      A: () => Qc,
      E: () => oJ,
      F: () => GJ,
      J: () => Ec,
      L: () => SJ,
      P: () => MJ,
      S: () => Pc,
      U: () => JZ,
      X: () => yJ,
      _: () => cZ,
      bb: () => IJ
    });
    let FJ = [],
      UJ = [];

    function eJ(JJ) {
      if (JJ < 768) return !1;
      for (let cJ = 0, ZJ = FJ.length;;) {
        let eJ = cJ + ZJ >> 1;
        if (JJ < FJ[eJ]) ZJ = eJ;
        else {
          if (!(JJ >= UJ[eJ])) return !0;
          cJ = eJ + 1
        }
        if (cJ == ZJ) return !1
      }
    }

    function XJ(JJ) {
      return JJ >= 127462 && JJ <= 127487
    }(() => {
      let JJ = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((JJ => JJ ? parseInt(JJ, 36) : 1));
      for (let cJ = 0, ZJ = 0; cJ < JJ.length; cJ++)(cJ % 2 ? UJ : FJ).push(ZJ += JJ[cJ])
    })();
    const AJ = 8205;

    function qJ(JJ, cJ) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? jJ : YJ)(JJ, cJ, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function jJ(JJ, cJ, ZJ) {
      if (cJ == JJ.length) return cJ;
      cJ && DJ(JJ.charCodeAt(cJ)) && sJ(JJ.charCodeAt(cJ - 1)) && cJ--;
      let FJ = hJ(JJ, cJ);
      for (cJ += nJ(FJ); cJ < JJ.length;) {
        let UJ = hJ(JJ, cJ);
        if (FJ == AJ || UJ == AJ || ZJ && eJ(UJ)) cJ += nJ(UJ), FJ = UJ;
        else {
          if (!XJ(UJ)) break;
          {
            let ZJ = 0,
              FJ = cJ - 2;
            for (; FJ >= 0 && XJ(hJ(JJ, FJ));) ZJ++, FJ -= 2;
            if (ZJ % 2 == 0) break;
            cJ += 2
          }
        }
      }
      return cJ
    }

    function YJ(JJ, cJ, ZJ) {
      for (; cJ > 0;) {
        let FJ = jJ(JJ, cJ - 2, ZJ);
        if (FJ < cJ) return FJ;
        cJ--
      }
      return 0
    }

    function hJ(JJ, cJ) {
      let ZJ = JJ.charCodeAt(cJ);
      if (!sJ(ZJ) || cJ + 1 == JJ.length) return ZJ;
      let FJ = JJ.charCodeAt(cJ + 1);
      return DJ(FJ) ? FJ - 56320 + (ZJ - 55296 << 10) + 65536 : ZJ
    }

    function DJ(JJ) {
      return JJ >= 56320 && JJ < 57344
    }

    function sJ(JJ) {
      return JJ >= 55296 && JJ < 56320
    }

    function nJ(JJ) {
      return JJ < 65536 ? 1 : 2
    }
    class GJ {
      lineAt(JJ) {
        if (JJ < 0 || JJ > this.length) throw new RangeError(`Invalid position ${JJ} in document of length ${this.length}`);
        return this.lineInner(JJ, !1, 1, 0)
      }
      line(JJ) {
        if (JJ < 1 || JJ > this.lines) throw new RangeError(`Invalid line number ${JJ} in ${this.lines}-line document`);
        return this.lineInner(JJ, !0, 1, 0)
      }
      replace(JJ, cJ, ZJ) {
        [JJ, cJ] = KJ(this, JJ, cJ);
        let FJ = [];
        return this.decompose(0, JJ, FJ, 2), ZJ.length && ZJ.decompose(0, ZJ.length, FJ, 3), this.decompose(cJ, this.length, FJ, 1), xJ.from(FJ, this.length - (cJ - JJ) + ZJ.length)
      }
      append(JJ) {
        return this.replace(this.length, this.length, JJ)
      }
      slice(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [JJ, cJ] = KJ(this, JJ, cJ);
        let ZJ = [];
        return this.decompose(JJ, cJ, ZJ, 0), xJ.from(ZJ, cJ - JJ)
      }
      eq(JJ) {
        if (JJ == this) return !0;
        if (JJ.length != this.length || JJ.lines != this.lines) return !1;
        let cJ = this.scanIdentical(JJ, 1),
          ZJ = this.length - this.scanIdentical(JJ, -1),
          FJ = new mJ(this),
          UJ = new mJ(JJ);
        for (let eJ = cJ, XJ = cJ;;) {
          if (FJ.next(eJ), UJ.next(eJ), eJ = 0, FJ.lineBreak != UJ.lineBreak || FJ.done != UJ.done || FJ.value != UJ.value) return !1;
          if (XJ += FJ.value.length, FJ.done || XJ >= ZJ) return !0
        }
      }
      iter() {
        return new mJ(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new QJ(this, JJ, cJ)
      }
      iterLines(JJ, cJ) {
        let ZJ;
        if (null == JJ) ZJ = this.iter();
        else {
          null == cJ && (cJ = this.lines + 1);
          let FJ = this.line(JJ).from;
          ZJ = this.iterRange(FJ, Math.max(FJ, cJ == this.lines + 1 ? this.length : cJ <= 1 ? 0 : this.line(cJ - 1).to))
        }
        return new EJ(ZJ)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let JJ = [];
        return this.flatten(JJ), JJ
      }
      constructor() {}
      static of (JJ) {
        if (0 == JJ.length) throw new RangeError("A document must have at least one line");
        return 1 != JJ.length || JJ[0] ? JJ.length <= 32 ? new fJ(JJ) : xJ.from(fJ.split(JJ, [])) : GJ.empty
      }
    }
    class fJ extends GJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(JJ) {
          let cJ = -1;
          for (let ZJ of JJ) cJ += ZJ.length + 1;
          return cJ
        }(JJ);
        super(), this.text = JJ, this.length = cJ
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(JJ, cJ, ZJ, FJ) {
        for (let UJ = 0;; UJ++) {
          let eJ = this.text[UJ],
            XJ = FJ + eJ.length;
          if ((cJ ? ZJ : XJ) >= JJ) return new VJ(FJ, XJ, ZJ, eJ);
          FJ = XJ + 1, ZJ++
        }
      }
      decompose(JJ, cJ, ZJ, FJ) {
        let UJ = JJ <= 0 && cJ >= this.length ? this : new fJ(vJ(this.text, JJ, cJ), Math.min(cJ, this.length) - Math.max(0, JJ));
        if (1 & FJ) {
          let JJ = ZJ.pop(),
            cJ = rJ(UJ.text, JJ.text.slice(), 0, UJ.length);
          if (cJ.length <= 32) ZJ.push(new fJ(cJ, JJ.length + UJ.length));
          else {
            let JJ = cJ.length >> 1;
            ZJ.push(new fJ(cJ.slice(0, JJ)), new fJ(cJ.slice(JJ)))
          }
        } else ZJ.push(UJ)
      }
      replace(JJ, cJ, ZJ) {
        if (!(ZJ instanceof fJ)) return super.replace(JJ, cJ, ZJ);
        [JJ, cJ] = KJ(this, JJ, cJ);
        let FJ = rJ(this.text, rJ(ZJ.text, vJ(this.text, 0, JJ)), cJ),
          UJ = this.length + ZJ.length - (cJ - JJ);
        return FJ.length <= 32 ? new fJ(FJ, UJ) : xJ.from(fJ.split(FJ, []), UJ)
      }
      sliceString(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [JJ, cJ] = KJ(this, JJ, cJ);
        let FJ = "";
        for (let UJ = 0, eJ = 0; UJ <= cJ && eJ < this.text.length; eJ++) {
          let XJ = this.text[eJ],
            AJ = UJ + XJ.length;
          UJ > JJ && eJ && (FJ += ZJ), JJ < AJ && cJ > UJ && (FJ += XJ.slice(Math.max(0, JJ - UJ), cJ - UJ)), UJ = AJ + 1
        }
        return FJ
      }
      flatten(JJ) {
        for (let cJ of this.text) JJ.push(cJ)
      }
      scanIdentical() {
        return 0
      }
      static split(JJ, cJ) {
        let ZJ = [],
          FJ = -1;
        for (let UJ of JJ) ZJ.push(UJ), FJ += UJ.length + 1, 32 == ZJ.length && (cJ.push(new fJ(ZJ, FJ)), ZJ = [], FJ = -1);
        return FJ > -1 && cJ.push(new fJ(ZJ, FJ)), cJ
      }
    }
    class xJ extends GJ {
      constructor(JJ, cJ) {
        super(), this.children = JJ, this.length = cJ, this.lines = 0;
        for (let ZJ of JJ) this.lines += ZJ.lines
      }
      lineInner(JJ, cJ, ZJ, FJ) {
        for (let UJ = 0;; UJ++) {
          let eJ = this.children[UJ],
            XJ = FJ + eJ.length,
            AJ = ZJ + eJ.lines - 1;
          if ((cJ ? AJ : XJ) >= JJ) return eJ.lineInner(JJ, cJ, ZJ, FJ);
          FJ = XJ + 1, ZJ = AJ + 1
        }
      }
      decompose(JJ, cJ, ZJ, FJ) {
        for (let UJ = 0, eJ = 0; eJ <= cJ && UJ < this.children.length; UJ++) {
          let XJ = this.children[UJ],
            AJ = eJ + XJ.length;
          if (JJ <= AJ && cJ >= eJ) {
            let UJ = FJ & ((eJ <= JJ ? 1 : 0) | (AJ >= cJ ? 2 : 0));
            eJ >= JJ && AJ <= cJ && !UJ ? ZJ.push(XJ) : XJ.decompose(JJ - eJ, cJ - eJ, ZJ, UJ)
          }
          eJ = AJ + 1
        }
      }
      replace(JJ, cJ, ZJ) {
        if ([JJ, cJ] = KJ(this, JJ, cJ), ZJ.lines < this.lines)
          for (let FJ = 0, UJ = 0; FJ < this.children.length; FJ++) {
            let eJ = this.children[FJ],
              XJ = UJ + eJ.length;
            if (JJ >= UJ && cJ <= XJ) {
              let AJ = eJ.replace(JJ - UJ, cJ - UJ, ZJ),
                qJ = this.lines - eJ.lines + AJ.lines;
              if (AJ.lines < qJ >> 4 && AJ.lines > qJ >> 6) {
                let UJ = this.children.slice();
                return UJ[FJ] = AJ, new xJ(UJ, this.length - (cJ - JJ) + ZJ.length)
              }
              return super.replace(UJ, XJ, AJ)
            }
            UJ = XJ + 1
          }
        return super.replace(JJ, cJ, ZJ)
      }
      sliceString(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [JJ, cJ] = KJ(this, JJ, cJ);
        let FJ = "";
        for (let UJ = 0, eJ = 0; UJ < this.children.length && eJ <= cJ; UJ++) {
          let XJ = this.children[UJ],
            AJ = eJ + XJ.length;
          eJ > JJ && UJ && (FJ += ZJ), JJ < AJ && cJ > eJ && (FJ += XJ.sliceString(JJ - eJ, cJ - eJ, ZJ)), eJ = AJ + 1
        }
        return FJ
      }
      flatten(JJ) {
        for (let cJ of this.children) cJ.flatten(JJ)
      }
      scanIdentical(JJ, cJ) {
        if (!(JJ instanceof xJ)) return 0;
        let ZJ = 0,
          [FJ, UJ, eJ, XJ] = cJ > 0 ? [0, 0, this.children.length, JJ.children.length] : [this.children.length - 1, JJ.children.length - 1, -1, -1];
        for (;; FJ += cJ, UJ += cJ) {
          if (FJ == eJ || UJ == XJ) return ZJ;
          let AJ = this.children[FJ],
            qJ = JJ.children[UJ];
          if (AJ != qJ) return ZJ + AJ.scanIdentical(qJ, cJ);
          ZJ += AJ.length + 1
        }
      }
      static from(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ.reduce(((JJ, cJ) => JJ + cJ.length + 1), -1),
          ZJ = 0;
        for (let DJ of JJ) ZJ += DJ.lines;
        if (ZJ < 32) {
          let ZJ = [];
          for (let cJ of JJ) cJ.flatten(ZJ);
          return new fJ(ZJ, cJ)
        }
        let FJ = Math.max(32, ZJ >> 5),
          UJ = FJ << 1,
          eJ = FJ >> 1,
          XJ = [],
          AJ = 0,
          qJ = -1,
          jJ = [];

        function YJ(JJ) {
          let cJ;
          if (JJ.lines > UJ && JJ instanceof xJ)
            for (let ZJ of JJ.children) YJ(ZJ);
          else JJ.lines > eJ && (AJ > eJ || !AJ) ? (hJ(), XJ.push(JJ)) : JJ instanceof fJ && AJ && (cJ = jJ[jJ.length - 1]) instanceof fJ && JJ.lines + cJ.lines <= 32 ? (AJ += JJ.lines, qJ += JJ.length + 1, jJ[jJ.length - 1] = new fJ(cJ.text.concat(JJ.text), cJ.length + 1 + JJ.length)) : (AJ + JJ.lines > FJ && hJ(), AJ += JJ.lines, qJ += JJ.length + 1, jJ.push(JJ))
        }

        function hJ() {
          0 != AJ && (XJ.push(1 == jJ.length ? jJ[0] : xJ.from(jJ, qJ)), qJ = -1, AJ = jJ.length = 0)
        }
        for (let DJ of JJ) YJ(DJ);
        return hJ(), 1 == XJ.length ? XJ[0] : new xJ(XJ, cJ)
      }
    }

    function rJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let UJ = 0, eJ = 0, XJ = !0; eJ < JJ.length && UJ <= FJ; eJ++) {
        let AJ = JJ[eJ],
          qJ = UJ + AJ.length;
        qJ >= ZJ && (qJ > FJ && (AJ = AJ.slice(0, FJ - UJ)), UJ < ZJ && (AJ = AJ.slice(ZJ - UJ)), XJ ? (cJ[cJ.length - 1] += AJ, XJ = !1) : cJ.push(AJ)), UJ = qJ + 1
      }
      return cJ
    }

    function vJ(JJ, cJ, ZJ) {
      return rJ(JJ, [""], cJ, ZJ)
    }
    GJ.empty = new fJ([""], 0);
    class mJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = cJ, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [JJ], this.offsets = [cJ > 0 ? 1 : (JJ instanceof fJ ? JJ.text.length : JJ.children.length) << 1]
      }
      nextInner(JJ, cJ) {
        for (this.done = this.lineBreak = !1;;) {
          let ZJ = this.nodes.length - 1,
            FJ = this.nodes[ZJ],
            UJ = this.offsets[ZJ],
            eJ = UJ >> 1,
            XJ = FJ instanceof fJ ? FJ.text.length : FJ.children.length;
          if (eJ == (cJ > 0 ? XJ : 0)) {
            if (0 == ZJ) return this.done = !0, this.value = "", this;
            cJ > 0 && this.offsets[ZJ - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & UJ) == (cJ > 0 ? 0 : 1)) {
            if (this.offsets[ZJ] += cJ, 0 == JJ) return this.lineBreak = !0, this.value = "\n", this;
            JJ--
          } else if (FJ instanceof fJ) {
            let UJ = FJ.text[eJ + (cJ < 0 ? -1 : 0)];
            if (this.offsets[ZJ] += cJ, UJ.length > Math.max(0, JJ)) return this.value = 0 == JJ ? UJ : cJ > 0 ? UJ.slice(JJ) : UJ.slice(0, UJ.length - JJ), this;
            JJ -= UJ.length
          } else {
            let UJ = FJ.children[eJ + (cJ < 0 ? -1 : 0)];
            JJ > UJ.length ? (JJ -= UJ.length, this.offsets[ZJ] += cJ) : (cJ < 0 && this.offsets[ZJ]--, this.nodes.push(UJ), this.offsets.push(cJ > 0 ? 1 : (UJ instanceof fJ ? UJ.text.length : UJ.children.length) << 1))
          }
        }
      }
      next() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return JJ < 0 && (this.nextInner(-JJ, -this.dir), JJ = this.value.length), this.nextInner(JJ, this.dir)
      }
    }
    class QJ {
      constructor(JJ, cJ, ZJ) {
        this.value = "", this.done = !1, this.cursor = new mJ(JJ, cJ > ZJ ? -1 : 1), this.pos = cJ > ZJ ? JJ.length : 0, this.from = Math.min(cJ, ZJ), this.to = Math.max(cJ, ZJ)
      }
      nextInner(JJ, cJ) {
        if (cJ < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        JJ += Math.max(0, cJ < 0 ? this.pos - this.to : this.from - this.pos);
        let ZJ = cJ < 0 ? this.pos - this.from : this.to - this.pos;
        JJ > ZJ && (JJ = ZJ), ZJ -= JJ;
        let {
          value: FJ
        } = this.cursor.next(JJ);
        return this.pos += (FJ.length + JJ) * cJ, this.value = FJ.length <= ZJ ? FJ : cJ < 0 ? FJ.slice(FJ.length - ZJ) : FJ.slice(0, ZJ), this.done = !this.value, this
      }
      next() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return JJ < 0 ? JJ = Math.max(JJ, this.from - this.pos) : JJ > 0 && (JJ = Math.min(JJ, this.to - this.pos)), this.nextInner(JJ, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class EJ {
      constructor(JJ) {
        this.inner = JJ, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: cJ,
            lineBreak: ZJ,
            value: FJ
          } = this.inner.next(JJ);
        return cJ && this.afterBreak ? (this.value = "", this.afterBreak = !1) : cJ ? (this.done = !0, this.value = "") : ZJ ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = FJ, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (GJ.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, mJ.prototype[Symbol.iterator] = QJ.prototype[Symbol.iterator] = EJ.prototype[Symbol.iterator] = function() {
      return this
    });
    class VJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.from = JJ, this.to = cJ, this.number = ZJ, this.text = FJ
      }
      get length() {
        return this.to - this.from
      }
    }

    function KJ(JJ, cJ, ZJ) {
      return [cJ = Math.max(0, Math.min(JJ.length, cJ)), Math.max(cJ, Math.min(JJ.length, ZJ))]
    }

    function yJ(JJ, cJ) {
      return qJ(JJ, cJ, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function SJ(JJ, cJ) {
      let ZJ = JJ.charCodeAt(cJ);
      if (!((FJ = ZJ) >= 55296 && FJ < 56320) || cJ + 1 == JJ.length) return ZJ;
      var FJ;
      let UJ = JJ.charCodeAt(cJ + 1);
      return function(JJ) {
        return JJ >= 56320 && JJ < 57344
      }(UJ) ? UJ - 56320 + (ZJ - 55296 << 10) + 65536 : ZJ
    }

    function IJ(JJ) {
      return JJ <= 65535 ? String.fromCharCode(JJ) : (JJ -= 65536, String.fromCharCode(55296 + (JJ >> 10), 56320 + (1023 & JJ)))
    }

    function MJ(JJ) {
      return JJ < 65536 ? 1 : 2
    }
    const bJ = /\r\n?|\n/;
    var wJ = function(JJ) {
      return JJ[JJ.Simple = 0] = "Simple", JJ[JJ.TrackDel = 1] = "TrackDel", JJ[JJ.TrackBefore = 2] = "TrackBefore", JJ[JJ.TrackAfter = 3] = "TrackAfter", JJ
    }(wJ || (wJ = {}));
    class WJ {
      constructor(JJ) {
        this.sections = JJ
      }
      get length() {
        let JJ = 0;
        for (let cJ = 0; cJ < this.sections.length; cJ += 2) JJ += this.sections[cJ];
        return JJ
      }
      get newLength() {
        let JJ = 0;
        for (let cJ = 0; cJ < this.sections.length; cJ += 2) {
          let ZJ = this.sections[cJ + 1];
          JJ += ZJ < 0 ? this.sections[cJ] : ZJ
        }
        return JJ
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(JJ) {
        for (let cJ = 0, ZJ = 0, FJ = 0; cJ < this.sections.length;) {
          let UJ = this.sections[cJ++],
            eJ = this.sections[cJ++];
          eJ < 0 ? (JJ(ZJ, FJ, UJ), FJ += UJ) : FJ += eJ, ZJ += UJ
        }
      }
      iterChangedRanges(JJ) {
        kJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let JJ = [];
        for (let cJ = 0; cJ < this.sections.length;) {
          let ZJ = this.sections[cJ++],
            FJ = this.sections[cJ++];
          FJ < 0 ? JJ.push(ZJ, FJ) : JJ.push(FJ, ZJ)
        }
        return new WJ(JJ)
      }
      composeDesc(JJ) {
        return this.empty ? JJ : JJ.empty ? this : dJ(this, JJ)
      }
      mapDesc(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return JJ.empty ? this : pJ(this, JJ, cJ)
      }
      mapPos(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : wJ.Simple,
          FJ = 0,
          UJ = 0;
        for (let eJ = 0; eJ < this.sections.length;) {
          let XJ = this.sections[eJ++],
            AJ = this.sections[eJ++],
            qJ = FJ + XJ;
          if (AJ < 0) {
            if (qJ > JJ) return UJ + (JJ - FJ);
            UJ += XJ
          } else {
            if (ZJ != wJ.Simple && qJ >= JJ && (ZJ == wJ.TrackDel && FJ < JJ && qJ > JJ || ZJ == wJ.TrackBefore && FJ < JJ || ZJ == wJ.TrackAfter && qJ > JJ)) return null;
            if (qJ > JJ || qJ == JJ && cJ < 0 && !XJ) return JJ == FJ || cJ < 0 ? UJ : UJ + AJ;
            UJ += AJ
          }
          FJ = qJ
        }
        if (JJ > FJ) throw new RangeError(`Position ${JJ} is out of range for changeset of length ${FJ}`);
        return UJ
      }
      touchesRange(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ;
        for (let ZJ = 0, FJ = 0; ZJ < this.sections.length && FJ <= cJ;) {
          let UJ = FJ + this.sections[ZJ++];
          if (this.sections[ZJ++] >= 0 && FJ <= cJ && UJ >= JJ) return !(FJ < JJ && UJ > cJ) || "cover";
          FJ = UJ
        }
        return !1
      }
      toString() {
        let JJ = "";
        for (let cJ = 0; cJ < this.sections.length;) {
          let ZJ = this.sections[cJ++],
            FJ = this.sections[cJ++];
          JJ += (JJ ? " " : "") + ZJ + (FJ >= 0 ? ":" + FJ : "")
        }
        return JJ
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(JJ) {
        if (!Array.isArray(JJ) || JJ.length % 2 || JJ.some((JJ => "number" != typeof JJ))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new WJ(JJ)
      }
      static create(JJ) {
        return new WJ(JJ)
      }
    }
    class gJ extends WJ {
      constructor(JJ, cJ) {
        super(JJ), this.inserted = cJ
      }
      apply(JJ) {
        if (this.length != JJ.length) throw new RangeError("Applying change set to a document with the wrong length");
        return kJ(this, ((cJ, ZJ, FJ, UJ, eJ) => JJ = JJ.replace(FJ, FJ + (ZJ - cJ), eJ)), !1), JJ
      }
      mapDesc(JJ) {
        return pJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(JJ) {
        let cJ = this.sections.slice(),
          ZJ = [];
        for (let FJ = 0, UJ = 0; FJ < cJ.length; FJ += 2) {
          let eJ = cJ[FJ],
            XJ = cJ[FJ + 1];
          if (XJ >= 0) {
            cJ[FJ] = XJ, cJ[FJ + 1] = eJ;
            let AJ = FJ >> 1;
            for (; ZJ.length < AJ;) ZJ.push(GJ.empty);
            ZJ.push(eJ ? JJ.slice(UJ, UJ + eJ) : GJ.empty)
          }
          UJ += eJ
        }
        return new gJ(cJ, ZJ)
      }
      compose(JJ) {
        return this.empty ? JJ : JJ.empty ? this : dJ(this, JJ, !0)
      }
      map(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return JJ.empty ? this : pJ(this, JJ, cJ, !0)
      }
      iterChanges(JJ) {
        kJ(this, JJ, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return WJ.create(this.sections)
      }
      filter(JJ) {
        let cJ = [],
          ZJ = [],
          FJ = [],
          UJ = new zJ(this);
        JJ: for (let eJ = 0, XJ = 0;;) {
          let AJ = eJ == JJ.length ? 1e9 : JJ[eJ++];
          for (; XJ < AJ || XJ == AJ && 0 == UJ.len;) {
            if (UJ.done) break JJ;
            let JJ = Math.min(UJ.len, AJ - XJ);
            HJ(FJ, JJ, -1);
            let eJ = -1 == UJ.ins ? -1 : 0 == UJ.off ? UJ.ins : 0;
            HJ(cJ, JJ, eJ), eJ > 0 && PJ(ZJ, cJ, UJ.text), UJ.forward(JJ), XJ += JJ
          }
          let qJ = JJ[eJ++];
          for (; XJ < qJ;) {
            if (UJ.done) break JJ;
            let JJ = Math.min(UJ.len, qJ - XJ);
            HJ(cJ, JJ, -1), HJ(FJ, JJ, -1 == UJ.ins ? -1 : 0 == UJ.off ? UJ.ins : 0), UJ.forward(JJ), XJ += JJ
          }
        }
        return {
          changes: new gJ(cJ, ZJ),
          filtered: WJ.create(FJ)
        }
      }
      toJSON() {
        let JJ = [];
        for (let cJ = 0; cJ < this.sections.length; cJ += 2) {
          let ZJ = this.sections[cJ],
            FJ = this.sections[cJ + 1];
          FJ < 0 ? JJ.push(ZJ) : 0 == FJ ? JJ.push([ZJ]) : JJ.push([ZJ].concat(this.inserted[cJ >> 1].toJSON()))
        }
        return JJ
      }
      static of (JJ, cJ, ZJ) {
        let FJ = [],
          UJ = [],
          eJ = 0,
          XJ = null;

        function AJ() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !FJ.length) return;
          eJ < cJ && HJ(FJ, cJ - eJ, -1);
          let JJ = new gJ(FJ, UJ);
          XJ = XJ ? XJ.compose(JJ.map(XJ)) : JJ, FJ = [], UJ = [], eJ = 0
        }
        return function JJ(qJ) {
          if (Array.isArray(qJ))
            for (let cJ of qJ) JJ(cJ);
          else if (qJ instanceof gJ) {
            if (qJ.length != cJ) throw new RangeError(`Mismatched change set length (got ${qJ.length}, expected ${cJ})`);
            AJ(), XJ = XJ ? XJ.compose(qJ.map(XJ)) : qJ
          } else {
            let {
              from: JJ,
              to: XJ = JJ,
              insert: jJ
            } = qJ;
            if (JJ > XJ || JJ < 0 || XJ > cJ) throw new RangeError(`Invalid change range ${JJ} to ${XJ} (in doc of length ${cJ})`);
            let YJ = jJ ? "string" == typeof jJ ? GJ.of(jJ.split(ZJ || bJ)) : jJ : GJ.empty,
              hJ = YJ.length;
            if (JJ == XJ && 0 == hJ) return;
            JJ < eJ && AJ(), JJ > eJ && HJ(FJ, JJ - eJ, -1), HJ(FJ, XJ - JJ, hJ), PJ(UJ, FJ, YJ), eJ = XJ
          }
        }(JJ), AJ(!XJ), XJ
      }
      static empty(JJ) {
        return new gJ(JJ ? [JJ, -1] : [], [])
      }
      static fromJSON(JJ) {
        if (!Array.isArray(JJ)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let cJ = [],
          ZJ = [];
        for (let FJ = 0; FJ < JJ.length; FJ++) {
          let UJ = JJ[FJ];
          if ("number" == typeof UJ) cJ.push(UJ, -1);
          else {
            if (!Array.isArray(UJ) || "number" != typeof UJ[0] || UJ.some(((JJ, cJ) => cJ && "string" != typeof JJ))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == UJ.length) cJ.push(UJ[0], 0);
            else {
              for (; ZJ.length < FJ;) ZJ.push(GJ.empty);
              ZJ[FJ] = GJ.of(UJ.slice(1)), cJ.push(UJ[0], ZJ[FJ].length)
            }
          }
        }
        return new gJ(cJ, ZJ)
      }
      static createSet(JJ, cJ) {
        return new gJ(JJ, cJ)
      }
    }

    function HJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == cJ && ZJ <= 0) return;
      let UJ = JJ.length - 2;
      UJ >= 0 && ZJ <= 0 && ZJ == JJ[UJ + 1] ? JJ[UJ] += cJ : UJ >= 0 && 0 == cJ && 0 == JJ[UJ] ? JJ[UJ + 1] += ZJ : FJ ? (JJ[UJ] += cJ, JJ[UJ + 1] += ZJ) : JJ.push(cJ, ZJ)
    }

    function PJ(JJ, cJ, ZJ) {
      if (0 == ZJ.length) return;
      let FJ = cJ.length - 2 >> 1;
      if (FJ < JJ.length) JJ[JJ.length - 1] = JJ[JJ.length - 1].append(ZJ);
      else {
        for (; JJ.length < FJ;) JJ.push(GJ.empty);
        JJ.push(ZJ)
      }
    }

    function kJ(JJ, cJ, ZJ) {
      let FJ = JJ.inserted;
      for (let UJ = 0, eJ = 0, XJ = 0; XJ < JJ.sections.length;) {
        let AJ = JJ.sections[XJ++],
          qJ = JJ.sections[XJ++];
        if (qJ < 0) UJ += AJ, eJ += AJ;
        else {
          let jJ = UJ,
            YJ = eJ,
            hJ = GJ.empty;
          for (; jJ += AJ, YJ += qJ, qJ && FJ && (hJ = hJ.append(FJ[XJ - 2 >> 1])), !(ZJ || XJ == JJ.sections.length || JJ.sections[XJ + 1] < 0);) AJ = JJ.sections[XJ++], qJ = JJ.sections[XJ++];
          cJ(UJ, jJ, eJ, YJ, hJ), UJ = jJ, eJ = YJ
        }
      }
    }

    function pJ(JJ, cJ, ZJ) {
      let FJ = [],
        UJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        eJ = new zJ(JJ),
        XJ = new zJ(cJ),
        AJ = 0;
      for (let qJ = -1;;) {
        if (++AJ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (eJ.done && XJ.len || XJ.done && eJ.len) throw new Error("Mismatched change set lengths");
        if (-1 == eJ.ins && -1 == XJ.ins) {
          let JJ = Math.min(eJ.len, XJ.len);
          HJ(FJ, JJ, -1), eJ.forward(JJ), XJ.forward(JJ)
        } else if (XJ.ins >= 0 && (eJ.ins < 0 || qJ == eJ.i || 0 == eJ.off && (XJ.len < eJ.len || XJ.len == eJ.len && !ZJ))) {
          let JJ = XJ.len;
          for (HJ(FJ, XJ.ins, -1); JJ;) {
            if (++AJ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let cJ = Math.min(eJ.len, JJ);
            eJ.ins >= 0 && qJ < eJ.i && eJ.len <= cJ && (HJ(FJ, 0, eJ.ins), UJ && PJ(UJ, FJ, eJ.text), qJ = eJ.i), eJ.forward(cJ), JJ -= cJ
          }
          XJ.next()
        } else {
          if (!(eJ.ins >= 0)) {
            if (eJ.done && XJ.done) return UJ ? gJ.createSet(FJ, UJ) : WJ.create(FJ);
            throw new Error("Mismatched change set lengths")
          } {
            let JJ = 0,
              cJ = eJ.len;
            for (; cJ;) {
              if (++AJ > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == XJ.ins) {
                let ZJ = Math.min(cJ, XJ.len);
                JJ += ZJ, cJ -= ZJ, XJ.forward(ZJ)
              } else {
                if (!(0 == XJ.ins && XJ.len < cJ)) break;
                cJ -= XJ.len, XJ.next()
              }
            }
            HJ(FJ, JJ, qJ < eJ.i ? eJ.ins : 0), UJ && qJ < eJ.i && PJ(UJ, FJ, eJ.text), qJ = eJ.i, eJ.forward(eJ.len - cJ)
          }
        }
      }
    }

    function dJ(JJ, cJ) {
      let ZJ = [],
        FJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        UJ = new zJ(JJ),
        eJ = new zJ(cJ),
        XJ = 0;
      for (let AJ = !1;;) {
        if (++XJ > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (UJ.done && eJ.done) return FJ ? gJ.createSet(ZJ, FJ) : WJ.create(ZJ);
        if (0 == UJ.ins) HJ(ZJ, UJ.len, 0, AJ), UJ.next();
        else if (0 != eJ.len || eJ.done) {
          if (UJ.done || eJ.done) throw new Error("Mismatched change set lengths");
          {
            let JJ = Math.min(UJ.len2, eJ.len),
              cJ = ZJ.length;
            if (-1 == UJ.ins) {
              let cJ = -1 == eJ.ins ? -1 : eJ.off ? 0 : eJ.ins;
              HJ(ZJ, JJ, cJ, AJ), FJ && cJ && PJ(FJ, ZJ, eJ.text)
            } else - 1 == eJ.ins ? (HJ(ZJ, UJ.off ? 0 : UJ.len, JJ, AJ), FJ && PJ(FJ, ZJ, UJ.textBit(JJ))) : (HJ(ZJ, UJ.off ? 0 : UJ.len, eJ.off ? 0 : eJ.ins, AJ), FJ && !eJ.off && PJ(FJ, ZJ, eJ.text));
            AJ = (UJ.ins > JJ || eJ.ins >= 0 && eJ.len > JJ) && (AJ || ZJ.length > cJ), UJ.forward2(JJ), eJ.forward(JJ)
          }
        } else HJ(ZJ, 0, eJ.ins, AJ), FJ && PJ(FJ, ZJ, eJ.text), eJ.next()
      }
    }
    class zJ {
      constructor(JJ) {
        this.set = JJ, this.i = 0, this.next()
      }
      next() {
        let {
          sections: JJ
        } = this.set;
        this.i < JJ.length ? (this.len = JJ[this.i++], this.ins = JJ[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: JJ
        } = this.set, cJ = this.i - 2 >> 1;
        return cJ >= JJ.length ? GJ.empty : JJ[cJ]
      }
      textBit(JJ) {
        let {
          inserted: cJ
        } = this.set, ZJ = this.i - 2 >> 1;
        return ZJ >= cJ.length && !JJ ? GJ.empty : cJ[ZJ].slice(this.off, null == JJ ? void 0 : this.off + JJ)
      }
      forward(JJ) {
        JJ == this.len ? this.next() : (this.len -= JJ, this.off += JJ)
      }
      forward2(JJ) {
        -1 == this.ins ? this.forward(JJ) : JJ == this.ins ? this.next() : (this.ins -= JJ, this.off += JJ)
      }
    }
    class NJ {
      constructor(JJ, cJ, ZJ) {
        this.from = JJ, this.to = cJ, this.flags = ZJ
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
        let JJ = 7 & this.flags;
        return 7 == JJ ? null : JJ
      }
      get goalColumn() {
        let JJ = this.flags >> 6;
        return 16777215 == JJ ? void 0 : JJ
      }
      map(JJ) {
        let cJ, ZJ, FJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? cJ = ZJ = JJ.mapPos(this.from, FJ) : (cJ = JJ.mapPos(this.from, 1), ZJ = JJ.mapPos(this.to, -1)), cJ == this.from && ZJ == this.to ? this : new NJ(cJ, ZJ, this.flags)
      }
      extend(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (JJ <= this.anchor && cJ >= this.anchor) return OJ.range(JJ, cJ, void 0, void 0, ZJ);
        let FJ = Math.abs(JJ - this.anchor) > Math.abs(cJ - this.anchor) ? JJ : cJ;
        return OJ.range(this.anchor, FJ, void 0, void 0, ZJ)
      }
      eq(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == JJ.anchor && this.head == JJ.head && this.goalColumn == JJ.goalColumn && (!cJ || !this.empty || this.assoc == JJ.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(JJ) {
        if (!JJ || "number" != typeof JJ.anchor || "number" != typeof JJ.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return OJ.range(JJ.anchor, JJ.head)
      }
      static create(JJ, cJ, ZJ) {
        return new NJ(JJ, cJ, ZJ)
      }
    }
    class OJ {
      constructor(JJ, cJ) {
        this.ws = JJ, this.mainIndex = cJ
      }
      map(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return JJ.empty ? this : OJ.create(this.ws.map((ZJ => ZJ.map(JJ, cJ))), this.mainIndex)
      }
      eq(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.ws.length != JJ.ws.length || this.mainIndex != JJ.mainIndex) return !1;
        for (let ZJ = 0; ZJ < this.ws.length; ZJ++)
          if (!this.ws[ZJ].eq(JJ.ws[ZJ], cJ)) return !1;
        return !0
      }
      get main() {
        return this.ws[this.mainIndex]
      }
      asSingle() {
        return 1 == this.ws.length ? this : new OJ([this.main], 0)
      }
      addRange(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return OJ.create([JJ].concat(this.ws), cJ ? 0 : this.mainIndex + 1)
      }
      replaceRange(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          ZJ = this.ws.slice();
        return ZJ[cJ] = JJ, OJ.create(ZJ, this.mainIndex)
      }
      toJSON() {
        return {
          ws: this.ws.map((JJ => JJ.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(JJ) {
        if (!JJ || !Array.isArray(JJ.ws) || "number" != typeof JJ.main || JJ.main >= JJ.ws.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new OJ(JJ.ws.map((JJ => NJ.fromJSON(JJ))), JJ.main)
      }
      static single(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ;
        return new OJ([OJ.range(JJ, cJ)], 0)
      }
      static create(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == JJ.length) throw new RangeError("A selection needs at least one range");
        for (let ZJ = 0, FJ = 0; FJ < JJ.length; FJ++) {
          let UJ = JJ[FJ];
          if (UJ.empty ? UJ.from <= ZJ : UJ.from < ZJ) return OJ.normalized(JJ.slice(), cJ);
          ZJ = UJ.to
        }
        return new OJ(JJ, cJ)
      }
      static cursor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        return NJ.create(JJ, JJ, (0 == cJ ? 0 : cJ < 0 ? 8 : 16) | (null == ZJ ? 7 : Math.min(6, ZJ)) | (null !== FJ && void 0 !== FJ ? FJ : 16777215) << 6)
      }
      static range(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = (null !== ZJ && void 0 !== ZJ ? ZJ : 16777215) << 6 | (null == FJ ? 7 : Math.min(6, FJ));
        return UJ || JJ == cJ || (UJ = cJ < JJ ? 1 : -1), cJ < JJ ? NJ.create(cJ, JJ, 48 | eJ) : NJ.create(JJ, cJ, (UJ ? UJ < 0 ? 8 : 16 : 0) | eJ)
      }
      static normalized(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = JJ[cJ];
        JJ.sort(((JJ, cJ) => JJ.from - cJ.from)), cJ = JJ.indexOf(ZJ);
        for (let FJ = 1; FJ < JJ.length; FJ++) {
          let ZJ = JJ[FJ],
            UJ = JJ[FJ - 1];
          if (ZJ.empty ? ZJ.from <= UJ.to : ZJ.from < UJ.to) {
            let eJ = UJ.from,
              XJ = Math.max(ZJ.to, UJ.to);
            FJ <= cJ && cJ--, JJ.splice(--FJ, 2, ZJ.anchor > ZJ.head ? OJ.range(XJ, eJ) : OJ.range(eJ, XJ))
          }
        }
        return new OJ(JJ, cJ)
      }
    }

    function TJ(JJ, cJ) {
      for (let ZJ of JJ.ws)
        if (ZJ.to > cJ) throw new RangeError("Selection points outside of document")
    }
    let CJ = 0;
    class uJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.combine = JJ, this.compareInput = cJ, this.compare = ZJ, this.isStatic = FJ, this.id = CJ++, this.default = JJ([]), this.extensions = "function" == typeof UJ ? UJ(this) : UJ
      }
      get reader() {
        return this
      }
      static define() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new uJ(JJ.combine || (JJ => JJ), JJ.compareInput || ((JJ, cJ) => JJ === cJ), JJ.compare || (JJ.combine ? (JJ, cJ) => JJ === cJ : iJ), !!JJ.static, JJ.enables)
      }
      of(JJ) {
        return new RJ([], this, 0, JJ)
      }
      compute(JJ, cJ) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new RJ(JJ, this, 1, cJ)
      }
      computeN(JJ, cJ) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new RJ(JJ, this, 2, cJ)
      }
      from(JJ, cJ) {
        return cJ || (cJ = JJ => JJ), this.compute([JJ], (ZJ => cJ(ZJ.field(JJ))))
      }
    }

    function iJ(JJ, cJ) {
      return JJ == cJ || JJ.length == cJ.length && JJ.every(((JJ, ZJ) => JJ === cJ[ZJ]))
    }
    class RJ {
      constructor(JJ, cJ, ZJ, FJ) {
        this.dependencies = JJ, this.facet = cJ, this.type = ZJ, this.value = FJ, this.id = CJ++
      }
      dynamicSlot(JJ) {
        var cJ;
        let ZJ = this.value,
          FJ = this.facet.compareInput,
          UJ = this.id,
          eJ = JJ[UJ] >> 1,
          XJ = 2 == this.type,
          AJ = !1,
          qJ = !1,
          jJ = [];
        for (let YJ of this.dependencies) "doc" == YJ ? AJ = !0 : "selection" == YJ ? qJ = !0 : 0 == (1 & (null !== (cJ = JJ[YJ.id]) && void 0 !== cJ ? cJ : 1)) && jJ.push(JJ[YJ.id]);
        return {
          create: JJ => (JJ.values[eJ] = ZJ(JJ), 1),
          update(JJ, cJ) {
            if (AJ && cJ.docChanged || qJ && (cJ.docChanged || cJ.selection) || aJ(JJ, jJ)) {
              let cJ = ZJ(JJ);
              if (XJ ? !LJ(cJ, JJ.values[eJ], FJ) : !FJ(cJ, JJ.values[eJ])) return JJ.values[eJ] = cJ, 1
            }
            return 0
          },
          reconfigure: (JJ, cJ) => {
            let AJ, qJ = cJ.config.address[UJ];
            if (null != qJ) {
              let UJ = Yc(cJ, qJ);
              if (this.dependencies.every((ZJ => ZJ instanceof uJ ? cJ.facet(ZJ) === JJ.facet(ZJ) : !(ZJ instanceof oJ) || cJ.field(ZJ, !1) == JJ.field(ZJ, !1))) || (XJ ? LJ(AJ = ZJ(JJ), UJ, FJ) : FJ(AJ = ZJ(JJ), UJ))) return JJ.values[eJ] = UJ, 0
            } else AJ = ZJ(JJ);
            return JJ.values[eJ] = AJ, 1
          }
        }
      }
    }

    function LJ(JJ, cJ, ZJ) {
      if (JJ.length != cJ.length) return !1;
      for (let FJ = 0; FJ < JJ.length; FJ++)
        if (!ZJ(JJ[FJ], cJ[FJ])) return !1;
      return !0
    }

    function aJ(JJ, cJ) {
      let ZJ = !1;
      for (let FJ of cJ) 1 & jc(JJ, FJ) && (ZJ = !0);
      return ZJ
    }

    function BJ(JJ, cJ, ZJ) {
      let FJ = ZJ.map((cJ => JJ[cJ.id])),
        UJ = ZJ.map((JJ => JJ.type)),
        eJ = FJ.filter((JJ => !(1 & JJ))),
        XJ = JJ[cJ.id] >> 1;

      function AJ(JJ) {
        let ZJ = [];
        for (let cJ = 0; cJ < FJ.length; cJ++) {
          let eJ = Yc(JJ, FJ[cJ]);
          if (2 == UJ[cJ])
            for (let JJ of eJ) ZJ.push(JJ);
          else ZJ.push(eJ)
        }
        return cJ.combine(ZJ)
      }
      return {
        create(JJ) {
          for (let cJ of FJ) jc(JJ, cJ);
          return JJ.values[XJ] = AJ(JJ), 1
        },
        update(JJ, ZJ) {
          if (!aJ(JJ, eJ)) return 0;
          let FJ = AJ(JJ);
          return cJ.compare(FJ, JJ.values[XJ]) ? 0 : (JJ.values[XJ] = FJ, 1)
        },
        reconfigure(JJ, UJ) {
          let eJ = aJ(JJ, FJ),
            qJ = UJ.config.facets[cJ.id],
            jJ = UJ.facet(cJ);
          if (qJ && !eJ && iJ(ZJ, qJ)) return JJ.values[XJ] = jJ, 0;
          let YJ = AJ(JJ);
          return cJ.compare(YJ, jJ) ? (JJ.values[XJ] = jJ, 0) : (JJ.values[XJ] = YJ, 1)
        }
      }
    }
    const tJ = uJ.define({
      static: !0
    });
    class oJ {
      constructor(JJ, cJ, ZJ, FJ, UJ) {
        this.id = JJ, this.createF = cJ, this.updateF = ZJ, this.compareF = FJ, this.spec = UJ, this.provides = void 0
      }
      static define(JJ) {
        let cJ = new oJ(CJ++, JJ.create, JJ.update, JJ.compare || ((JJ, cJ) => JJ === cJ), JJ);
        return JJ.provide && (cJ.provides = JJ.provide(cJ)), cJ
      }
      create(JJ) {
        let cJ = JJ.facet(tJ).find((JJ => JJ.field == this));
        return ((null === cJ || void 0 === cJ ? void 0 : cJ.create) || this.createF)(JJ)
      }
      slot(JJ) {
        let cJ = JJ[this.id] >> 1;
        return {
          create: JJ => (JJ.values[cJ] = this.create(JJ), 1),
          update: (JJ, ZJ) => {
            let FJ = JJ.values[cJ],
              UJ = this.updateF(FJ, ZJ);
            return this.compareF(FJ, UJ) ? 0 : (JJ.values[cJ] = UJ, 1)
          },
          reconfigure: (JJ, ZJ) => {
            let FJ, UJ = JJ.facet(tJ),
              eJ = ZJ.facet(tJ);
            return (FJ = UJ.find((JJ => JJ.field == this))) && FJ != eJ.find((JJ => JJ.field == this)) ? (JJ.values[cJ] = FJ.create(JJ), 1) : null != ZJ.config.address[this.id] ? (JJ.values[cJ] = ZJ.field(this), 0) : (JJ.values[cJ] = this.create(JJ), 1)
          }
        }
      }
      init(JJ) {
        return [this, tJ.of({
          field: this,
          create: JJ
        })]
      }
      get extension() {
        return this
      }
    }
    const lJ = 4,
      Jc = 3,
      cc = 2,
      Zc = 1;

    function Fc(JJ) {
      return cJ => new ec(cJ, JJ)
    }
    const Uc = {
      highest: Fc(0),
      high: Fc(Zc),
      default: Fc(cc),
      low: Fc(Jc),
      lowest: Fc(lJ)
    };
    class ec {
      constructor(JJ, cJ) {
        this.inner = JJ, this.prec = cJ
      }
    }
    class Xc {
      of(JJ) {
        return new Ac(this, JJ)
      }
      reconfigure(JJ) {
        return Xc.reconfigure.of({
          compartment: this,
          extension: JJ
        })
      }
      get(JJ) {
        return JJ.config.compartments.get(this)
      }
    }
    class Ac {
      constructor(JJ, cJ) {
        this.compartment = JJ, this.inner = cJ
      }
    }
    class qc {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        for (this.base = JJ, this.compartments = cJ, this.dynamicSlots = ZJ, this.address = FJ, this.staticValues = UJ, this.facets = eJ, this.statusTemplate = []; this.statusTemplate.length < ZJ.length;) this.statusTemplate.push(0)
      }
      staticFacet(JJ) {
        let cJ = this.address[JJ.id];
        return null == cJ ? JJ.default : this.staticValues[cJ >> 1]
      }
      static resolve(JJ, cJ, ZJ) {
        let FJ = [],
          UJ = Object.create(null),
          eJ = new Map;
        for (let hJ of function(JJ, cJ, ZJ) {
            let FJ = [
                [],
                [],
                [],
                [],
                []
              ],
              UJ = new Map;

            function eJ(JJ, XJ) {
              let AJ = UJ.get(JJ);
              if (null != AJ) {
                if (AJ <= XJ) return;
                let cJ = FJ[AJ].indexOf(JJ);
                cJ > -1 && FJ[AJ].splice(cJ, 1), JJ instanceof Ac && ZJ.delete(JJ.compartment)
              }
              if (UJ.set(JJ, XJ), Array.isArray(JJ))
                for (let cJ of JJ) eJ(cJ, XJ);
              else if (JJ instanceof Ac) {
                if (ZJ.has(JJ.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let FJ = cJ.get(JJ.compartment) || JJ.inner;
                ZJ.set(JJ.compartment, FJ), eJ(FJ, XJ)
              } else if (JJ instanceof ec) eJ(JJ.inner, JJ.prec);
              else if (JJ instanceof oJ) FJ[XJ].push(JJ), JJ.provides && eJ(JJ.provides, XJ);
              else if (JJ instanceof RJ) FJ[XJ].push(JJ), JJ.facet.extensions && eJ(JJ.facet.extensions, cc);
              else {
                let cJ = JJ.extension;
                if (!cJ) throw new Error(`Unrecognized extension value in extension set (${JJ}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                eJ(cJ, XJ)
              }
            }
            return eJ(JJ, cc), FJ.reduce(((JJ, cJ) => JJ.concat(cJ)))
          }(JJ, cJ, eJ)) hJ instanceof oJ ? FJ.push(hJ) : (UJ[hJ.facet.id] || (UJ[hJ.facet.id] = [])).push(hJ);
        let XJ = Object.create(null),
          AJ = [],
          qJ = [];
        for (let hJ of FJ) XJ[hJ.id] = qJ.length << 1, qJ.push((JJ => hJ.slot(JJ)));
        let jJ = null === ZJ || void 0 === ZJ ? void 0 : ZJ.config.facets;
        for (let hJ in UJ) {
          let JJ = UJ[hJ],
            cJ = JJ[0].facet,
            FJ = jJ && jJ[hJ] || [];
          if (JJ.every((JJ => 0 == JJ.type)))
            if (XJ[cJ.id] = AJ.length << 1 | 1, iJ(FJ, JJ)) AJ.push(ZJ.facet(cJ));
            else {
              let FJ = cJ.combine(JJ.map((JJ => JJ.value)));
              AJ.push(ZJ && cJ.compare(FJ, ZJ.facet(cJ)) ? ZJ.facet(cJ) : FJ)
            }
          else {
            for (let cJ of JJ) 0 == cJ.type ? (XJ[cJ.id] = AJ.length << 1 | 1, AJ.push(cJ.value)) : (XJ[cJ.id] = qJ.length << 1, qJ.push((JJ => cJ.dynamicSlot(JJ))));
            XJ[cJ.id] = qJ.length << 1, qJ.push((ZJ => BJ(ZJ, cJ, JJ)))
          }
        }
        let YJ = qJ.map((JJ => JJ(XJ)));
        return new qc(JJ, eJ, YJ, XJ, AJ, UJ)
      }
    }

    function jc(JJ, cJ) {
      if (1 & cJ) return 2;
      let ZJ = cJ >> 1,
        FJ = JJ.status[ZJ];
      if (4 == FJ) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & FJ) return FJ;
      JJ.status[ZJ] = 4;
      let UJ = JJ.computeSlot(JJ, JJ.config.dynamicSlots[ZJ]);
      return JJ.status[ZJ] = 2 | UJ
    }

    function Yc(JJ, cJ) {
      return 1 & cJ ? JJ.config.staticValues[cJ >> 1] : JJ.values[cJ >> 1]
    }
    const hc = uJ.define(),
      Dc = uJ.define({
        combine: JJ => JJ.some((JJ => JJ)),
        static: !0
      }),
      sc = uJ.define({
        combine: JJ => JJ.length ? JJ[0] : void 0,
        static: !0
      }),
      nc = uJ.define(),
      Gc = uJ.define(),
      fc = uJ.define(),
      xc = uJ.define({
        combine: JJ => !!JJ.length && JJ[0]
      });
    class rc {
      constructor(JJ, cJ) {
        this.type = JJ, this.value = cJ
      }
      static define() {
        return new vc
      }
    }
    class vc {
      of(JJ) {
        return new rc(this, JJ)
      }
    }
    class mc {
      constructor(JJ) {
        this.map = JJ
      }
      of(JJ) {
        return new Qc(this, JJ)
      }
    }
    class Qc {
      constructor(JJ, cJ) {
        this.type = JJ, this.value = cJ
      }
      map(JJ) {
        let cJ = this.type.map(this.value, JJ);
        return void 0 === cJ ? void 0 : cJ == this.value ? this : new Qc(this.type, cJ)
      }
      is(JJ) {
        return this.type == JJ
      }
      static define() {
        return new mc((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (JJ => JJ))
      }
      static mapEffects(JJ, cJ) {
        if (!JJ.length) return JJ;
        let ZJ = [];
        for (let FJ of JJ) {
          let JJ = FJ.map(cJ);
          JJ && ZJ.push(JJ)
        }
        return ZJ
      }
    }
    Qc.reconfigure = Qc.define(), Qc.appendConfig = Qc.define();
    class Ec {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.startState = JJ, this.changes = cJ, this.selection = ZJ, this.effects = FJ, this.annotations = UJ, this.scrollIntoView = eJ, this._doc = null, this._state = null, ZJ && TJ(ZJ, cJ.newLength), UJ.some((JJ => JJ.type == Ec.time)) || (this.annotations = UJ.concat(Ec.time.of(Date.now())))
      }
      static create(JJ, cJ, ZJ, FJ, UJ, eJ) {
        return new Ec(JJ, cJ, ZJ, FJ, UJ, eJ)
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
      annotation(JJ) {
        for (let cJ of this.annotations)
          if (cJ.type == JJ) return cJ.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(JJ) {
        let cJ = this.annotation(Ec.userEvent);
        return !(!cJ || !(cJ == JJ || cJ.length > JJ.length && cJ.slice(0, JJ.length) == JJ && "." == cJ[JJ.length]))
      }
    }

    function Vc(JJ, cJ) {
      let ZJ = [];
      for (let FJ = 0, UJ = 0;;) {
        let eJ, XJ;
        if (FJ < JJ.length && (UJ == cJ.length || cJ[UJ] >= JJ[FJ])) eJ = JJ[FJ++], XJ = JJ[FJ++];
        else {
          if (!(UJ < cJ.length)) return ZJ;
          eJ = cJ[UJ++], XJ = cJ[UJ++]
        }!ZJ.length || ZJ[ZJ.length - 1] < eJ ? ZJ.push(eJ, XJ) : ZJ[ZJ.length - 1] < XJ && (ZJ[ZJ.length - 1] = XJ)
      }
    }

    function Kc(JJ, cJ, ZJ) {
      var FJ;
      let UJ, eJ, XJ;
      return ZJ ? (UJ = cJ.changes, eJ = gJ.empty(cJ.changes.length), XJ = JJ.changes.compose(cJ.changes)) : (UJ = cJ.changes.map(JJ.changes), eJ = JJ.changes.mapDesc(cJ.changes, !0), XJ = JJ.changes.compose(UJ)), {
        changes: XJ,
        selection: cJ.selection ? cJ.selection.map(eJ) : null === (FJ = JJ.selection) || void 0 === FJ ? void 0 : FJ.map(UJ),
        effects: Qc.mapEffects(JJ.effects, UJ).concat(Qc.mapEffects(cJ.effects, eJ)),
        annotations: JJ.annotations.length ? JJ.annotations.concat(cJ.annotations) : cJ.annotations,
        scrollIntoView: JJ.scrollIntoView || cJ.scrollIntoView
      }
    }

    function yc(JJ, cJ, ZJ) {
      let FJ = cJ.selection,
        UJ = Mc(cJ.annotations);
      return cJ.userEvent && (UJ = UJ.concat(Ec.userEvent.of(cJ.userEvent))), {
        changes: cJ.changes instanceof gJ ? cJ.changes : gJ.of(cJ.changes || [], ZJ, JJ.facet(sc)),
        selection: FJ && (FJ instanceof OJ ? FJ : OJ.single(FJ.anchor, FJ.head)),
        effects: Mc(cJ.effects),
        annotations: UJ,
        scrollIntoView: !!cJ.scrollIntoView
      }
    }

    function Sc(JJ, cJ, ZJ) {
      let FJ = yc(JJ, cJ.length ? cJ[0] : {}, JJ.doc.length);
      cJ.length && !1 === cJ[0].filter && (ZJ = !1);
      for (let eJ = 1; eJ < cJ.length; eJ++) {
        !1 === cJ[eJ].filter && (ZJ = !1);
        let UJ = !!cJ[eJ].sequential;
        FJ = Kc(FJ, yc(JJ, cJ[eJ], UJ ? FJ.changes.newLength : JJ.doc.length), UJ)
      }
      let UJ = Ec.create(JJ, FJ.changes, FJ.selection, FJ.effects, FJ.annotations, FJ.scrollIntoView);
      return function(JJ) {
        let cJ = JJ.startState,
          ZJ = cJ.facet(fc),
          FJ = JJ;
        for (let UJ = ZJ.length - 1; UJ >= 0; UJ--) {
          let eJ = ZJ[UJ](JJ);
          eJ && Object.keys(eJ).length && (FJ = Kc(FJ, yc(cJ, eJ, JJ.changes.newLength), !0))
        }
        return FJ == JJ ? JJ : Ec.create(cJ, JJ.changes, JJ.selection, FJ.effects, FJ.annotations, FJ.scrollIntoView)
      }(ZJ ? function(JJ) {
        let cJ = JJ.startState,
          ZJ = !0;
        for (let UJ of cJ.facet(nc)) {
          let cJ = UJ(JJ);
          if (!1 === cJ) {
            ZJ = !1;
            break
          }
          Array.isArray(cJ) && (ZJ = !0 === ZJ ? cJ : Vc(ZJ, cJ))
        }
        if (!0 !== ZJ) {
          let FJ, UJ;
          if (!1 === ZJ) UJ = JJ.changes.invertedDesc, FJ = gJ.empty(cJ.doc.length);
          else {
            let cJ = JJ.changes.filter(ZJ);
            FJ = cJ.changes, UJ = cJ.filtered.mapDesc(cJ.changes).invertedDesc
          }
          JJ = Ec.create(cJ, FJ, JJ.selection && JJ.selection.map(UJ), Qc.mapEffects(JJ.effects, UJ), JJ.annotations, JJ.scrollIntoView)
        }
        let FJ = cJ.facet(Gc);
        for (let UJ = FJ.length - 1; UJ >= 0; UJ--) {
          let ZJ = FJ[UJ](JJ);
          JJ = ZJ instanceof Ec ? ZJ : Array.isArray(ZJ) && 1 == ZJ.length && ZJ[0] instanceof Ec ? ZJ[0] : Sc(cJ, Mc(ZJ), !1)
        }
        return JJ
      }(UJ) : UJ)
    }
    Ec.time = rc.define(), Ec.userEvent = rc.define(), Ec.addToHistory = rc.define(), Ec.remote = rc.define();
    const Ic = [];

    function Mc(JJ) {
      return null == JJ ? Ic : Array.isArray(JJ) ? JJ : [JJ]
    }
    var bc = function(JJ) {
      return JJ[JJ.Word = 0] = "Word", JJ[JJ.Space = 1] = "Space", JJ[JJ.Other = 2] = "Other", JJ
    }(bc || (bc = {}));
    const wc = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Wc;
    try {
      Wc = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (ZZ) {}

    function gc(JJ) {
      return cJ => {
        if (!/\S/.test(cJ)) return bc.Space;
        if (function(JJ) {
            if (Wc) return Wc.test(JJ);
            for (let cJ = 0; cJ < JJ.length; cJ++) {
              let ZJ = JJ[cJ];
              if (/\w/.test(ZJ) || ZJ > "\x80" && (ZJ.toUpperCase() != ZJ.toLowerCase() || wc.test(ZJ))) return !0
            }
            return !1
          }(cJ)) return bc.Word;
        for (let ZJ = 0; ZJ < JJ.length; ZJ++)
          if (cJ.indexOf(JJ[ZJ]) > -1) return bc.Word;
        return bc.Other
      }
    }
    class Hc {
      constructor(JJ, cJ, ZJ, FJ, UJ, eJ) {
        this.config = JJ, this.doc = cJ, this.selection = ZJ, this.values = FJ, this.status = JJ.statusTemplate.slice(), this.computeSlot = UJ, eJ && (eJ._state = this);
        for (let XJ = 0; XJ < this.config.dynamicSlots.length; XJ++) jc(this, XJ << 1);
        this.computeSlot = null
      }
      field(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZJ = this.config.address[JJ.id];
        if (null != ZJ) return jc(this, ZJ), Yc(this, ZJ);
        if (cJ) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        return Sc(this, cJ, !0)
      }
      applyTransaction(JJ) {
        let cJ, ZJ = this.config,
          {
            base: FJ,
            compartments: UJ
          } = ZJ;
        for (let XJ of JJ.effects) XJ.is(Xc.reconfigure) ? (ZJ && (UJ = new Map, ZJ.compartments.forEach(((JJ, cJ) => UJ.set(cJ, JJ))), ZJ = null), UJ.set(XJ.value.compartment, XJ.value.extension)) : XJ.is(Qc.reconfigure) ? (ZJ = null, FJ = XJ.value) : XJ.is(Qc.appendConfig) && (ZJ = null, FJ = Mc(FJ).concat(XJ.value));
        if (ZJ) cJ = JJ.startState.values.slice();
        else {
          ZJ = qc.resolve(FJ, UJ, this), cJ = new Hc(ZJ, this.doc, this.selection, ZJ.dynamicSlots.map((() => null)), ((JJ, cJ) => cJ.reconfigure(JJ, this)), null).values
        }
        let eJ = JJ.startState.facet(Dc) ? JJ.newSelection : JJ.newSelection.asSingle();
        new Hc(ZJ, JJ.newDoc, eJ, cJ, ((cJ, ZJ) => ZJ.update(cJ, JJ)), JJ)
      }
      replaceSelection(JJ) {
        return "string" == typeof JJ && (JJ = this.toText(JJ)), this.changeByRange((cJ => ({
          changes: {
            from: cJ.from,
            to: cJ.to,
            insert: JJ
          },
          range: OJ.cursor(cJ.from + JJ.length)
        })))
      }
      changeByRange(JJ) {
        let cJ = this.selection,
          ZJ = JJ(cJ.ws[0]),
          FJ = this.changes(ZJ.changes),
          UJ = [ZJ.range],
          eJ = Mc(ZJ.effects);
        for (let XJ = 1; XJ < cJ.ws.length; XJ++) {
          let ZJ = JJ(cJ.ws[XJ]),
            AJ = this.changes(ZJ.changes),
            qJ = AJ.map(FJ);
          for (let JJ = 0; JJ < XJ; JJ++) UJ[JJ] = UJ[JJ].map(qJ);
          let jJ = FJ.mapDesc(AJ, !0);
          UJ.push(ZJ.range.map(jJ)), FJ = FJ.compose(qJ), eJ = Qc.mapEffects(eJ, qJ).concat(Qc.mapEffects(Mc(ZJ.effects), jJ))
        }
        return {
          changes: FJ,
          selection: OJ.create(UJ, cJ.mainIndex),
          effects: eJ
        }
      }
      changes() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return JJ instanceof gJ ? JJ : gJ.of(JJ, this.doc.length, this.facet(Hc.lineSeparator))
      }
      toText(JJ) {
        return GJ.of(JJ.split(this.facet(Hc.lineSeparator) || bJ))
      }
      sliceDoc() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(JJ, cJ, this.lineBreak)
      }
      facet(JJ) {
        let cJ = this.config.address[JJ.id];
        return null == cJ ? JJ.default : (jc(this, cJ), Yc(this, cJ))
      }
      toJSON(JJ) {
        let cJ = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (JJ)
          for (let ZJ in JJ) {
            let FJ = JJ[ZJ];
            FJ instanceof oJ && null != this.config.address[FJ.id] && (cJ[ZJ] = FJ.spec.toJSON(this.field(JJ[ZJ]), this))
          }
        return cJ
      }
      static fromJSON(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        if (!JJ || "string" != typeof JJ.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let FJ = [];
        if (ZJ)
          for (let UJ in ZJ)
            if (Object.prototype.hasOwnProperty.call(JJ, UJ)) {
              let cJ = ZJ[UJ],
                eJ = JJ[UJ];
              FJ.push(cJ.init((JJ => cJ.spec.fromJSON(eJ, JJ))))
            } return Hc.create({
          doc: JJ.doc,
          selection: OJ.fromJSON(JJ.selection),
          extensions: cJ.extensions ? FJ.concat([cJ.extensions]) : FJ
        })
      }
      static create() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          cJ = qc.resolve(JJ.extensions || [], new Map),
          ZJ = JJ.doc instanceof GJ ? JJ.doc : GJ.of((JJ.doc || "").split(cJ.staticFacet(Hc.lineSeparator) || bJ)),
          FJ = JJ.selection ? JJ.selection instanceof OJ ? JJ.selection : OJ.single(JJ.selection.anchor, JJ.selection.head) : OJ.single(0);
        return TJ(FJ, ZJ.length), cJ.staticFacet(Dc) || (FJ = FJ.asSingle()), new Hc(cJ, ZJ, FJ, cJ.dynamicSlots.map((() => null)), ((JJ, cJ) => cJ.create(JJ)), null)
      }
      get tabSize() {
        return this.facet(Hc.tabSize)
      }
      get lineBreak() {
        return this.facet(Hc.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(xc)
      }
      phrase(JJ) {
        for (var cJ = arguments.length, ZJ = new Array(cJ > 1 ? cJ - 1 : 0), FJ = 1; FJ < cJ; FJ++) ZJ[FJ - 1] = arguments[FJ];
        for (let UJ of this.facet(Hc.phrases))
          if (Object.prototype.hasOwnProperty.call(UJ, JJ)) {
            JJ = UJ[JJ];
            break
          } return ZJ.length && (JJ = JJ.replace(/\$(\$|\d*)/g, ((JJ, cJ) => {
          if ("$" == cJ) return "$";
          let FJ = +(cJ || 1);
          return !FJ || FJ > ZJ.length ? JJ : ZJ[FJ - 1]
        }))), JJ
      }
      languageDataAt(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          FJ = [];
        for (let UJ of this.facet(hc))
          for (let eJ of UJ(this, cJ, ZJ)) Object.prototype.hasOwnProperty.call(eJ, JJ) && FJ.push(eJ[JJ]);
        return FJ
      }
      charCategorizer(JJ) {
        let cJ = this.languageDataAt("wordChars", JJ);
        return gc(cJ.length ? cJ[0] : "")
      }
      wordAt(JJ) {
        let {
          text: cJ,
          from: ZJ,
          length: FJ
        } = this.doc.lineAt(JJ), UJ = this.charCategorizer(JJ), eJ = JJ - ZJ, XJ = JJ - ZJ;
        for (; eJ > 0;) {
          let JJ = yJ(cJ, eJ, !1);
          if (UJ(cJ.slice(JJ, eJ)) != bc.Word) break;
          eJ = JJ
        }
        for (; XJ < FJ;) {
          let JJ = yJ(cJ, XJ);
          if (UJ(cJ.slice(XJ, JJ)) != bc.Word) break;
          XJ = JJ
        }
        return eJ == XJ ? null : OJ.range(eJ + ZJ, XJ + ZJ)
      }
    }

    function Pc(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        FJ = {};
      for (let UJ of JJ)
        for (let JJ of Object.keys(UJ)) {
          let cJ = UJ[JJ],
            eJ = FJ[JJ];
          if (void 0 === eJ) FJ[JJ] = cJ;
          else if (eJ === cJ || void 0 === cJ);
          else {
            if (!Object.hasOwnProperty.call(ZJ, JJ)) throw new Error("Config merge conflict for field " + JJ);
            FJ[JJ] = ZJ[JJ](eJ, cJ)
          }
        }
      for (let UJ in cJ) void 0 === FJ[UJ] && (FJ[UJ] = cJ[UJ]);
      return FJ
    }
    Hc.allowMultipleSelections = Dc, Hc.tabSize = uJ.define({
      combine: JJ => JJ.length ? JJ[0] : 4
    }), Hc.lineSeparator = sc, Hc.readOnly = xc, Hc.phrases = uJ.define({
      compare(JJ, cJ) {
        let ZJ = Object.keys(JJ),
          FJ = Object.keys(cJ);
        return ZJ.length == FJ.length && ZJ.every((ZJ => JJ[ZJ] == cJ[ZJ]))
      }
    }), Hc.languageData = hc, Hc.changeFilter = nc, Hc.transactionFilter = Gc, Hc.transactionExtender = fc, Xc.reconfigure = Qc.define();
    class kc {
      eq(JJ) {
        return this == JJ
      }
      range(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JJ;
        return dc.create(JJ, cJ, this)
      }
    }

    function pc(JJ, cJ) {
      return JJ == cJ || JJ.constructor == cJ.constructor && JJ.eq(cJ)
    }
    kc.prototype.startSide = kc.prototype.endSide = 0, kc.prototype.point = !1, kc.prototype.mapMode = wJ.TrackDel;
    class dc {
      constructor(JJ, cJ, ZJ) {
        this.from = JJ, this.to = cJ, this.value = ZJ
      }
      static create(JJ, cJ, ZJ) {
        return new dc(JJ, cJ, ZJ)
      }
    }

    function zc(JJ, cJ) {
      return JJ.from - cJ.from || JJ.value.startSide - cJ.value.startSide
    }
    class Nc {
      constructor(JJ, cJ, ZJ, FJ) {
        this.from = JJ, this.to = cJ, this.value = ZJ, this.cFJ = FJ
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          UJ = ZJ ? this.to : this.from;
        for (let eJ = FJ, XJ = UJ.length;;) {
          if (eJ == XJ) return eJ;
          let FJ = eJ + XJ >> 1,
            AJ = UJ[FJ] - JJ || (ZJ ? this.value[FJ].endSide : this.value[FJ].startSide) - cJ;
          if (FJ == eJ) return AJ >= 0 ? eJ : XJ;
          AJ >= 0 ? XJ = FJ : eJ = FJ + 1
        }
      }
      between(JJ, cJ, ZJ, FJ) {
        for (let UJ = this.findIndex(cJ, -1e9, !0), eJ = this.findIndex(ZJ, 1e9, !1, UJ); UJ < eJ; UJ++)
          if (!1 === FJ(this.from[UJ] + JJ, this.to[UJ] + JJ, this.value[UJ])) return !1
      }
      map(JJ, cJ) {
        let ZJ = [],
          FJ = [],
          UJ = [],
          eJ = -1,
          XJ = -1;
        for (let AJ = 0; AJ < this.value.length; AJ++) {
          let qJ, jJ, YJ = this.value[AJ],
            hJ = this.from[AJ] + JJ,
            DJ = this.to[AJ] + JJ;
          if (hJ == DJ) {
            let JJ = cJ.mapPos(hJ, YJ.startSide, YJ.mapMode);
            if (null == JJ) continue;
            if (qJ = jJ = JJ, YJ.startSide != YJ.endSide && (jJ = cJ.mapPos(hJ, YJ.endSide), jJ < qJ)) continue
          } else if (qJ = cJ.mapPos(hJ, YJ.startSide), jJ = cJ.mapPos(DJ, YJ.endSide), qJ > jJ || qJ == jJ && YJ.startSide > 0 && YJ.endSide <= 0) continue;
          (jJ - qJ || YJ.endSide - YJ.startSide) < 0 || (eJ < 0 && (eJ = qJ), YJ.point && (XJ = Math.max(XJ, jJ - qJ)), ZJ.push(YJ), FJ.push(qJ - eJ), UJ.push(jJ - eJ))
        }
        return {
          mapped: ZJ.length ? new Nc(FJ, UJ, ZJ, XJ) : null,
          pos: eJ
        }
      }
    }
    class Oc {
      constructor(JJ, cJ, ZJ, FJ) {
        this.chunkPos = JJ, this.chunk = cJ, this.nextLayer = ZJ, this.cFJ = FJ
      }
      static create(JJ, cJ, ZJ, FJ) {
        return new Oc(JJ, cJ, ZJ, FJ)
      }
      get length() {
        let JJ = this.chunk.length - 1;
        return JJ < 0 ? 0 : Math.max(this.chunkEnd(JJ), this.nextLayer.length)
      }
      get size() {
        if (this.jn) return 0;
        let JJ = this.nextLayer.size;
        for (let cJ of this.chunk) JJ += cJ.value.length;
        return JJ
      }
      chunkEnd(JJ) {
        return this.chunkPos[JJ] + this.chunk[JJ].length
      }
      update(JJ) {
        let {
          add: cJ = [],
          sort: ZJ = !1,
          filterFrom: FJ = 0,
          filterTo: UJ = this.length
        } = JJ, eJ = JJ.filter;
        if (0 == cJ.length && !eJ) return this;
        if (ZJ && (cJ = cJ.slice().sort(zc)), this.jn) return cJ.length ? Oc.of(cJ) : this;
        let XJ = new uc(this, null, -1).goto(0),
          AJ = 0,
          qJ = [],
          jJ = new Tc;
        for (; XJ.value || AJ < cJ.length;)
          if (AJ < cJ.length && (XJ.from - cJ[AJ].from || XJ.startSide - cJ[AJ].value.startSide) >= 0) {
            let JJ = cJ[AJ++];
            jJ.addInner(JJ.from, JJ.to, JJ.value) || qJ.push(JJ)
          } else 1 == XJ.rangeIndex && XJ.chunkIndex < this.chunk.length && (AJ == cJ.length || this.chunkEnd(XJ.chunkIndex) < cJ[AJ].from) && (!eJ || FJ > this.chunkEnd(XJ.chunkIndex) || UJ < this.chunkPos[XJ.chunkIndex]) && jJ.addChunk(this.chunkPos[XJ.chunkIndex], this.chunk[XJ.chunkIndex]) ? XJ.nextChunk() : ((!eJ || FJ > XJ.to || UJ < XJ.from || eJ(XJ.from, XJ.to, XJ.value)) && (jJ.addInner(XJ.from, XJ.to, XJ.value) || qJ.push(dc.create(XJ.from, XJ.to, XJ.value))), XJ.next());
        return jJ.finishInner(this.nextLayer.jn && !qJ.length ? Oc.empty : this.nextLayer.update({
          add: qJ,
          filter: eJ,
          filterFrom: FJ,
          filterTo: UJ
        }))
      }
      map(JJ) {
        if (JJ.empty || this.jn) return this;
        let cJ = [],
          ZJ = [],
          FJ = -1;
        for (let eJ = 0; eJ < this.chunk.length; eJ++) {
          let UJ = this.chunkPos[eJ],
            XJ = this.chunk[eJ],
            AJ = JJ.touchesRange(UJ, UJ + XJ.length);
          if (!1 === AJ) FJ = Math.max(FJ, XJ.cFJ), cJ.push(XJ), ZJ.push(JJ.mapPos(UJ));
          else if (!0 === AJ) {
            let {
              mapped: eJ,
              pos: AJ
            } = XJ.map(UJ, JJ);
            eJ && (FJ = Math.max(FJ, eJ.cFJ), cJ.push(eJ), ZJ.push(AJ))
          }
        }
        let UJ = this.nextLayer.map(JJ);
        return 0 == cJ.length ? UJ : new Oc(ZJ, cJ, UJ || Oc.empty, FJ)
      }
      between(JJ, cJ, ZJ) {
        if (!this.jn) {
          for (let FJ = 0; FJ < this.chunk.length; FJ++) {
            let UJ = this.chunkPos[FJ],
              eJ = this.chunk[FJ];
            if (cJ >= UJ && JJ <= UJ + eJ.length && !1 === eJ.between(UJ, JJ - UJ, cJ - UJ, ZJ)) return
          }
          this.nextLayer.between(JJ, cJ, ZJ)
        }
      }
      iter() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return ic.from([this]).goto(JJ)
      }
      get jn() {
        return this.nextLayer == this
      }
      static iter(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ic.from(JJ).goto(cJ)
      }
      static compare(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          eJ = JJ.filter((JJ => JJ.cFJ > 0 || !JJ.jn && JJ.cFJ >= UJ)),
          XJ = cJ.filter((JJ => JJ.cFJ > 0 || !JJ.jn && JJ.cFJ >= UJ)),
          AJ = Cc(eJ, XJ, ZJ),
          qJ = new Lc(eJ, AJ, UJ),
          jJ = new Lc(XJ, AJ, UJ);
        ZJ.iterGaps(((JJ, cJ, ZJ) => ac(qJ, JJ, jJ, cJ, ZJ, FJ))), ZJ.empty && 0 == ZJ.length && ac(qJ, 0, jJ, 0, 0, FJ)
      }
      static eq(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        null == FJ && (FJ = 999999999);
        let UJ = JJ.filter((JJ => !JJ.jn && cJ.indexOf(JJ) < 0)),
          eJ = cJ.filter((cJ => !cJ.jn && JJ.indexOf(cJ) < 0));
        if (UJ.length != eJ.length) return !1;
        if (!UJ.length) return !0;
        let XJ = Cc(UJ, eJ),
          AJ = new Lc(UJ, XJ, 0).goto(ZJ),
          qJ = new Lc(eJ, XJ, 0).goto(ZJ);
        for (;;) {
          if (AJ.to != qJ.to || !Bc(AJ.active, qJ.active) || AJ.point && (!qJ.point || !pc(AJ.point, qJ.point))) return !1;
          if (AJ.to > FJ) return !0;
          AJ.next(), qJ.next()
        }
      }
      static spans(JJ, cJ, ZJ, FJ) {
        let UJ = new Lc(JJ, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(cJ),
          eJ = cJ,
          XJ = UJ.openStart;
        for (;;) {
          let JJ = Math.min(UJ.to, ZJ);
          if (UJ.point) {
            let ZJ = UJ.activeForPoint(UJ.to),
              AJ = UJ.pointFrom < cJ ? ZJ.length + 1 : UJ.point.startSide < 0 ? ZJ.length : Math.min(ZJ.length, XJ);
            FJ.point(eJ, JJ, UJ.point, ZJ, AJ, UJ.pointRank), XJ = Math.min(UJ.openEnd(JJ), ZJ.length)
          } else JJ > eJ && (FJ.span(eJ, JJ, UJ.active, XJ), XJ = UJ.openEnd(JJ));
          if (UJ.to > ZJ) return XJ + (UJ.point && UJ.to > ZJ ? 1 : 0);
          eJ = UJ.to, UJ.next()
        }
      }
      static of (JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = new Tc;
        for (let FJ of JJ instanceof dc ? [JJ] : cJ ? function(JJ) {
            if (JJ.length > 1)
              for (let cJ = JJ[0], ZJ = 1; ZJ < JJ.length; ZJ++) {
                let FJ = JJ[ZJ];
                if (zc(cJ, FJ) > 0) return JJ.slice().sort(zc);
                cJ = FJ
              }
            return JJ
          }(JJ) : JJ) ZJ.add(FJ.from, FJ.to, FJ.value);
        return ZJ.finish()
      }
      static join(JJ) {
        if (!JJ.length) return Oc.empty;
        let cJ = JJ[JJ.length - 1];
        for (let ZJ = JJ.length - 2; ZJ >= 0; ZJ--)
          for (let FJ = JJ[ZJ]; FJ != Oc.empty; FJ = FJ.nextLayer) cJ = new Oc(FJ.chunkPos, FJ.chunk, cJ, Math.max(FJ.cFJ, cJ.cFJ));
        return cJ
      }
    }
    Oc.empty = new Oc([], [], null, -1), Oc.empty.nextLayer = Oc.empty;
    class Tc {
      finishChunk(JJ) {
        this.chunks.push(new Nc(this.from, this.to, this.value, this.cFJ)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.cFJ), this.cFJ = -1, JJ && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.cFJ = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(JJ, cJ, ZJ) {
        this.addInner(JJ, cJ, ZJ) || (this.nextLayer || (this.nextLayer = new Tc)).add(JJ, cJ, ZJ)
      }
      addInner(JJ, cJ, ZJ) {
        let FJ = JJ - this.lastTo || ZJ.startSide - this.last.endSide;
        if (FJ <= 0 && (JJ - this.lastFrom || ZJ.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(FJ < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = JJ), this.from.push(JJ - this.chunkStart), this.to.push(cJ - this.chunkStart), this.last = ZJ, this.lastFrom = JJ, this.lastTo = cJ, this.value.push(ZJ), ZJ.point && (this.cFJ = Math.max(this.cFJ, cJ - JJ)), !0)
      }
      addChunk(JJ, cJ) {
        if ((JJ - this.lastTo || cJ.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, cJ.cFJ), this.chunks.push(cJ), this.chunkPos.push(JJ);
        let ZJ = cJ.value.length - 1;
        return this.last = cJ.value[ZJ], this.lastFrom = cJ.from[ZJ] + JJ, this.lastTo = cJ.to[ZJ] + JJ, !0
      }
      finish() {
        return this.finishInner(Oc.empty)
      }
      finishInner(JJ) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return JJ;
        let cJ = Oc.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(JJ) : JJ, this.setMaxPoint);
        return this.from = null, cJ
      }
    }

    function Cc(JJ, cJ, ZJ) {
      let FJ = new Map;
      for (let eJ of JJ)
        for (let JJ = 0; JJ < eJ.chunk.length; JJ++) eJ.chunk[JJ].cFJ <= 0 && FJ.set(eJ.chunk[JJ], eJ.chunkPos[JJ]);
      let UJ = new Set;
      for (let eJ of cJ)
        for (let JJ = 0; JJ < eJ.chunk.length; JJ++) {
          let cJ = FJ.get(eJ.chunk[JJ]);
          null == cJ || (ZJ ? ZJ.mapPos(cJ) : cJ) != eJ.chunkPos[JJ] || (null === ZJ || void 0 === ZJ ? void 0 : ZJ.touchesRange(cJ, cJ + eJ.chunk[JJ].length)) || UJ.add(eJ.chunk[JJ])
        }
      return UJ
    }
    class uc {
      constructor(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = JJ, this.skip = cJ, this.ZFJ = ZJ, this.rank = FJ
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(JJ, cJ, !1), this
      }
      gotoInner(JJ, cJ, ZJ) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let cJ = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(cJ) || this.layer.chunkEnd(this.chunkIndex) < JJ || cJ.cFJ < this.ZFJ)) break;
          this.chunkIndex++, ZJ = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let FJ = this.layer.chunk[this.chunkIndex].findIndex(JJ - this.layer.chunkPos[this.chunkIndex], cJ, !0);
          (!ZJ || this.rangeIndex < FJ) && this.setRangeIndex(FJ)
        }
        this.next()
      }
      forward(JJ, cJ) {
        (this.to - JJ || this.endSide - cJ) < 0 && this.gotoInner(JJ, cJ, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let JJ = this.layer.chunkPos[this.chunkIndex],
              cJ = this.layer.chunk[this.chunkIndex],
              ZJ = JJ + cJ.from[this.rangeIndex];
            if (this.from = ZJ, this.to = JJ + cJ.to[this.rangeIndex], this.value = cJ.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.ZFJ < 0 || this.value.point && this.to - this.from >= this.ZFJ) break
          }
        }
      }
      setRangeIndex(JJ) {
        if (JJ == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = JJ
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(JJ) {
        return this.from - JJ.from || this.startSide - JJ.startSide || this.rank - JJ.rank || this.to - JJ.to || this.endSide - JJ.endSide
      }
    }
    class ic {
      constructor(JJ) {
        this.heap = JJ
      }
      static from(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          FJ = [];
        for (let UJ = 0; UJ < JJ.length; UJ++)
          for (let eJ = JJ[UJ]; !eJ.jn; eJ = eJ.nextLayer) eJ.cFJ >= ZJ && FJ.push(new uc(eJ, cJ, ZJ, UJ));
        return 1 == FJ.length ? FJ[0] : new ic(FJ)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let ZJ of this.heap) ZJ.goto(JJ, cJ);
        for (let ZJ = this.heap.length >> 1; ZJ >= 0; ZJ--) Rc(this.heap, ZJ);
        return this.next(), this
      }
      forward(JJ, cJ) {
        for (let ZJ of this.heap) ZJ.forward(JJ, cJ);
        for (let ZJ = this.heap.length >> 1; ZJ >= 0; ZJ--) Rc(this.heap, ZJ);
        (this.to - JJ || this.value.endSide - cJ) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let JJ = this.heap[0];
          this.from = JJ.from, this.to = JJ.to, this.value = JJ.value, this.rank = JJ.rank, JJ.value && JJ.next(), Rc(this.heap, 0)
        }
      }
    }

    function Rc(JJ, cJ) {
      for (let ZJ = JJ[cJ];;) {
        let FJ = 1 + (cJ << 1);
        if (FJ >= JJ.length) break;
        let UJ = JJ[FJ];
        if (FJ + 1 < JJ.length && UJ.compare(JJ[FJ + 1]) >= 0 && (UJ = JJ[FJ + 1], FJ++), ZJ.compare(UJ) < 0) break;
        JJ[FJ] = ZJ, JJ[cJ] = UJ, cJ = FJ
      }
    }
    class Lc {
      constructor(JJ, cJ, ZJ) {
        this.ZFJ = ZJ, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ic.from(JJ, cJ, ZJ)
      }
      goto(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(JJ, cJ), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = JJ, this.endSide = cJ, this.openStart = -1, this.next(), this
      }
      forward(JJ, cJ) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - JJ || this.active[this.minActive].endSide - cJ) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(JJ, cJ)
      }
      removeActive(JJ) {
        tc(this.active, JJ), tc(this.activeTo, JJ), tc(this.activeRank, JJ), this.minActive = lc(this.active, this.activeTo)
      }
      addActive(JJ) {
        let cJ = 0,
          {
            value: ZJ,
            to: FJ,
            rank: UJ
          } = this.cursor;
        for (; cJ < this.activeRank.length && (UJ - this.activeRank[cJ] || FJ - this.activeTo[cJ]) > 0;) cJ++;
        oc(this.active, cJ, ZJ), oc(this.activeTo, cJ, FJ), oc(this.activeRank, cJ, UJ), JJ && oc(JJ, cJ, this.cursor.from), this.minActive = lc(this.active, this.activeTo)
      }
      next() {
        let JJ = this.to,
          cJ = this.point;
        this.point = null;
        let ZJ = this.openStart < 0 ? [] : null;
        for (;;) {
          let FJ = this.minActive;
          if (FJ > -1 && (this.activeTo[FJ] - this.cursor.from || this.active[FJ].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[FJ] > JJ) {
              this.to = this.activeTo[FJ], this.endSide = this.active[FJ].endSide;
              break
            }
            this.removeActive(FJ), ZJ && tc(ZJ, FJ)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > JJ) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let JJ = this.cursor.value;
              if (JJ.point) {
                if (!(cJ && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = JJ, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = JJ.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(ZJ), this.cursor.next()
            }
          }
        }
        if (ZJ) {
          this.openStart = 0;
          for (let cJ = ZJ.length - 1; cJ >= 0 && ZJ[cJ] < JJ; cJ--) this.openStart++
        }
      }
      activeForPoint(JJ) {
        if (!this.active.length) return this.active;
        let cJ = [];
        for (let ZJ = this.active.length - 1; ZJ >= 0 && !(this.activeRank[ZJ] < this.pointRank); ZJ--)(this.activeTo[ZJ] > JJ || this.activeTo[ZJ] == JJ && this.active[ZJ].endSide >= this.point.endSide) && cJ.push(this.active[ZJ]);
        return cJ.reverse()
      }
      openEnd(JJ) {
        let cJ = 0;
        for (let ZJ = this.activeTo.length - 1; ZJ >= 0 && this.activeTo[ZJ] > JJ; ZJ--) cJ++;
        return cJ
      }
    }

    function ac(JJ, cJ, ZJ, FJ, UJ, eJ) {
      JJ.goto(cJ), ZJ.goto(FJ);
      let XJ = FJ + UJ,
        AJ = FJ,
        qJ = FJ - cJ,
        jJ = !!eJ.boundChange;
      for (let YJ = !1;;) {
        let cJ = JJ.to + qJ - ZJ.to,
          FJ = cJ || JJ.endSide - ZJ.endSide,
          UJ = FJ < 0 ? JJ.to + qJ : ZJ.to,
          hJ = Math.min(UJ, XJ);
        if (JJ.point || ZJ.point ? (JJ.point && ZJ.point && pc(JJ.point, ZJ.point) && Bc(JJ.activeForPoint(JJ.to), ZJ.activeForPoint(ZJ.to)) || eJ.comparePoint(AJ, hJ, JJ.point, ZJ.point), YJ = !1) : (YJ && eJ.boundChange(AJ), hJ > AJ && !Bc(JJ.active, ZJ.active) && eJ.compareRange(AJ, hJ, JJ.active, ZJ.active), jJ && hJ < XJ && (cJ || JJ.openEnd(UJ) != ZJ.openEnd(UJ)) && (YJ = !0)), UJ > XJ) break;
        AJ = UJ, FJ <= 0 && JJ.next(), FJ >= 0 && ZJ.next()
      }
    }

    function Bc(JJ, cJ) {
      if (JJ.length != cJ.length) return !1;
      for (let ZJ = 0; ZJ < JJ.length; ZJ++)
        if (JJ[ZJ] != cJ[ZJ] && !pc(JJ[ZJ], cJ[ZJ])) return !1;
      return !0
    }

    function tc(JJ, cJ) {
      for (let ZJ = cJ, FJ = JJ.length - 1; ZJ < FJ; ZJ++) JJ[ZJ] = JJ[ZJ + 1];
      JJ.pop()
    }

    function oc(JJ, cJ, ZJ) {
      for (let FJ = JJ.length - 1; FJ >= cJ; FJ--) JJ[FJ + 1] = JJ[FJ];
      JJ[cJ] = ZJ
    }

    function lc(JJ, cJ) {
      let ZJ = -1,
        FJ = 1e9;
      for (let UJ = 0; UJ < cJ.length; UJ++)(cJ[UJ] - FJ || JJ[UJ].endSide - JJ[ZJ].endSide) < 0 && (ZJ = UJ, FJ = cJ[UJ]);
      return ZJ
    }

    function JZ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : JJ.length,
        FJ = 0;
      for (let UJ = 0; UJ < ZJ && UJ < JJ.length;) 9 == JJ.charCodeAt(UJ) ? (FJ += cJ - FJ % cJ, UJ++) : (FJ++, UJ = yJ(JJ, UJ));
      return FJ
    }

    function cZ(JJ, cJ, ZJ, FJ) {
      for (let UJ = 0, eJ = 0;;) {
        if (eJ >= cJ) return UJ;
        if (UJ == JJ.length) break;
        eJ += 9 == JJ.charCodeAt(UJ) ? ZJ - eJ % ZJ : 1, UJ = yJ(JJ, UJ)
      }
      return !0 === FJ ? -1 : JJ.length
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);