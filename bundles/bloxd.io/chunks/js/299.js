export const id = 299;
export const ids = [299];
export const modules = {
  41727: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => rb,
      d: () => aG,
      ChangeSet: () => cG,
      f: () => Fb,
      j: () => nG,
      l: () => lb,
      m: () => RG,
      q: () => vG,
      s: () => Sb,
      x: () => nb,
      v: () => gb,
      A: () => Pb,
      C: () => ob,
      G: () => xG,
      I: () => hG,
      M: () => Xb,
      Q: () => WG,
      R: () => IG,
      S: () => jb,
      T: () => GZ,
      X: () => CG,
      _: () => bZ,
      cb: () => mG
    });
    let wG = [],
      SG = [];

    function LG(GG) {
      if (GG < 768) return !1;
      for (let bG = 0, ZG = wG.length;;) {
        let LG = bG + ZG >> 1;
        if (GG < wG[LG]) ZG = LG;
        else {
          if (!(GG >= SG[LG])) return !0;
          bG = LG + 1
        }
        if (bG == ZG) return !1
      }
    }

    function yG(GG) {
      return GG >= 127462 && GG <= 127487
    }(() => {
      let GG = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((GG => GG ? parseInt(GG, 36) : 1));
      for (let bG = 0, ZG = 0; bG < GG.length; bG++)(bG % 2 ? SG : wG).push(ZG += GG[bG])
    })();
    const kG = 8205;

    function UG(GG, bG) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? YG : VG)(GG, bG, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function YG(GG, bG, ZG) {
      if (bG == GG.length) return bG;
      bG && fG(GG.charCodeAt(bG)) && QG(GG.charCodeAt(bG - 1)) && bG--;
      let wG = pG(GG, bG);
      for (bG += KG(wG); bG < GG.length;) {
        let SG = pG(GG, bG);
        if (wG == kG || SG == kG || ZG && LG(SG)) bG += KG(SG), wG = SG;
        else {
          if (!yG(SG)) break;
          {
            let ZG = 0,
              wG = bG - 2;
            for (; wG >= 0 && yG(pG(GG, wG));) ZG++, wG -= 2;
            if (ZG % 2 == 0) break;
            bG += 2
          }
        }
      }
      return bG
    }

    function VG(GG, bG, ZG) {
      for (; bG > 0;) {
        let wG = YG(GG, bG - 2, ZG);
        if (wG < bG) return wG;
        bG--
      }
      return 0
    }

    function pG(GG, bG) {
      let ZG = GG.charCodeAt(bG);
      if (!QG(ZG) || bG + 1 == GG.length) return ZG;
      let wG = GG.charCodeAt(bG + 1);
      return fG(wG) ? wG - 56320 + (ZG - 55296 << 10) + 65536 : ZG
    }

    function fG(GG) {
      return GG >= 56320 && GG < 57344
    }

    function QG(GG) {
      return GG >= 55296 && GG < 56320
    }

    function KG(GG) {
      return GG < 65536 ? 1 : 2
    }
    class hG {
      lineAt(GG) {
        if (GG < 0 || GG > this.length) throw new RangeError(`Invalid position ${GG} in document of length ${this.length}`);
        return this.lineInner(GG, !1, 1, 0)
      }
      line(GG) {
        if (GG < 1 || GG > this.lines) throw new RangeError(`Invalid line number ${GG} in ${this.lines}-line document`);
        return this.lineInner(GG, !0, 1, 0)
      }
      replace(GG, bG, ZG) {
        [GG, bG] = iG(this, GG, bG);
        let wG = [];
        return this.decompose(0, GG, wG, 2), ZG.length && ZG.decompose(0, ZG.length, wG, 3), this.decompose(bG, this.length, wG, 1), JG.from(wG, this.length - (bG - GG) + ZG.length)
      }
      append(GG) {
        return this.replace(this.length, this.length, GG)
      }
      slice(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [GG, bG] = iG(this, GG, bG);
        let ZG = [];
        return this.decompose(GG, bG, ZG, 0), JG.from(ZG, bG - GG)
      }
      eq(GG) {
        if (GG == this) return !0;
        if (GG.length != this.length || GG.lines != this.lines) return !1;
        let bG = this.scanIdentical(GG, 1),
          ZG = this.length - this.scanIdentical(GG, -1),
          wG = new EG(this),
          SG = new EG(GG);
        for (let LG = bG, yG = bG;;) {
          if (wG.next(LG), SG.next(LG), LG = 0, wG.lineBreak != SG.lineBreak || wG.done != SG.done || wG.value != SG.value) return !1;
          if (yG += wG.value.length, wG.done || yG >= ZG) return !0
        }
      }
      iter() {
        return new EG(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new oG(this, GG, bG)
      }
      iterLines(GG, bG) {
        let ZG;
        if (null == GG) ZG = this.iter();
        else {
          null == bG && (bG = this.lines + 1);
          let wG = this.line(GG).from;
          ZG = this.iterRange(wG, Math.max(wG, bG == this.lines + 1 ? this.length : bG <= 1 ? 0 : this.line(bG - 1).to))
        }
        return new XG(ZG)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let GG = [];
        return this.flatten(GG), GG
      }
      constructor() {}
      static of (GG) {
        if (0 == GG.length) throw new RangeError("A document must have at least one line");
        return 1 != GG.length || GG[0] ? GG.length <= 32 ? new dG(GG) : JG.from(dG.split(GG, [])) : hG.empty
      }
    }
    class dG extends hG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(GG) {
          let bG = -1;
          for (let ZG of GG) bG += ZG.length + 1;
          return bG
        }(GG);
        super(), this.text = GG, this.length = bG
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(GG, bG, ZG, wG) {
        for (let SG = 0;; SG++) {
          let LG = this.text[SG],
            yG = wG + LG.length;
          if ((bG ? ZG : yG) >= GG) return new uG(wG, yG, ZG, LG);
          wG = yG + 1, ZG++
        }
      }
      decompose(GG, bG, ZG, wG) {
        let SG = GG <= 0 && bG >= this.length ? this : new dG(zG(this.text, GG, bG), Math.min(bG, this.length) - Math.max(0, GG));
        if (1 & wG) {
          let GG = ZG.pop(),
            bG = rG(SG.text, GG.text.slice(), 0, SG.length);
          if (bG.length <= 32) ZG.push(new dG(bG, GG.length + SG.length));
          else {
            let GG = bG.length >> 1;
            ZG.push(new dG(bG.slice(0, GG)), new dG(bG.slice(GG)))
          }
        } else ZG.push(SG)
      }
      replace(GG, bG, ZG) {
        if (!(ZG instanceof dG)) return super.replace(GG, bG, ZG);
        [GG, bG] = iG(this, GG, bG);
        let wG = rG(this.text, rG(ZG.text, zG(this.text, 0, GG)), bG),
          SG = this.length + ZG.length - (bG - GG);
        return wG.length <= 32 ? new dG(wG, SG) : JG.from(dG.split(wG, []), SG)
      }
      sliceString(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [GG, bG] = iG(this, GG, bG);
        let wG = "";
        for (let SG = 0, LG = 0; SG <= bG && LG < this.text.length; LG++) {
          let yG = this.text[LG],
            kG = SG + yG.length;
          SG > GG && LG && (wG += ZG), GG < kG && bG > SG && (wG += yG.slice(Math.max(0, GG - SG), bG - SG)), SG = kG + 1
        }
        return wG
      }
      flatten(GG) {
        for (let bG of this.text) GG.push(bG)
      }
      scanIdentical() {
        return 0
      }
      static split(GG, bG) {
        let ZG = [],
          wG = -1;
        for (let SG of GG) ZG.push(SG), wG += SG.length + 1, 32 == ZG.length && (bG.push(new dG(ZG, wG)), ZG = [], wG = -1);
        return wG > -1 && bG.push(new dG(ZG, wG)), bG
      }
    }
    class JG extends hG {
      constructor(GG, bG) {
        super(), this.children = GG, this.length = bG, this.lines = 0;
        for (let ZG of GG) this.lines += ZG.lines
      }
      lineInner(GG, bG, ZG, wG) {
        for (let SG = 0;; SG++) {
          let LG = this.children[SG],
            yG = wG + LG.length,
            kG = ZG + LG.lines - 1;
          if ((bG ? kG : yG) >= GG) return LG.lineInner(GG, bG, ZG, wG);
          wG = yG + 1, ZG = kG + 1
        }
      }
      decompose(GG, bG, ZG, wG) {
        for (let SG = 0, LG = 0; LG <= bG && SG < this.children.length; SG++) {
          let yG = this.children[SG],
            kG = LG + yG.length;
          if (GG <= kG && bG >= LG) {
            let SG = wG & ((LG <= GG ? 1 : 0) | (kG >= bG ? 2 : 0));
            LG >= GG && kG <= bG && !SG ? ZG.push(yG) : yG.decompose(GG - LG, bG - LG, ZG, SG)
          }
          LG = kG + 1
        }
      }
      replace(GG, bG, ZG) {
        if ([GG, bG] = iG(this, GG, bG), ZG.lines < this.lines)
          for (let wG = 0, SG = 0; wG < this.children.length; wG++) {
            let LG = this.children[wG],
              yG = SG + LG.length;
            if (GG >= SG && bG <= yG) {
              let kG = LG.replace(GG - SG, bG - SG, ZG),
                UG = this.lines - LG.lines + kG.lines;
              if (kG.lines < UG >> 4 && kG.lines > UG >> 6) {
                let SG = this.children.slice();
                return SG[wG] = kG, new JG(SG, this.length - (bG - GG) + ZG.length)
              }
              return super.replace(SG, yG, kG)
            }
            SG = yG + 1
          }
        return super.replace(GG, bG, ZG)
      }
      sliceString(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [GG, bG] = iG(this, GG, bG);
        let wG = "";
        for (let SG = 0, LG = 0; SG < this.children.length && LG <= bG; SG++) {
          let yG = this.children[SG],
            kG = LG + yG.length;
          LG > GG && SG && (wG += ZG), GG < kG && bG > LG && (wG += yG.sliceString(GG - LG, bG - LG, ZG)), LG = kG + 1
        }
        return wG
      }
      flatten(GG) {
        for (let bG of this.children) bG.flatten(GG)
      }
      scanIdentical(GG, bG) {
        if (!(GG instanceof JG)) return 0;
        let ZG = 0,
          [wG, SG, LG, yG] = bG > 0 ? [0, 0, this.children.length, GG.children.length] : [this.children.length - 1, GG.children.length - 1, -1, -1];
        for (;; wG += bG, SG += bG) {
          if (wG == LG || SG == yG) return ZG;
          let kG = this.children[wG],
            UG = GG.children[SG];
          if (kG != UG) return ZG + kG.scanIdentical(UG, bG);
          ZG += kG.length + 1
        }
      }
      static from(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG.reduce(((GG, bG) => GG + bG.length + 1), -1),
          ZG = 0;
        for (let fG of GG) ZG += fG.lines;
        if (ZG < 32) {
          let ZG = [];
          for (let bG of GG) bG.flatten(ZG);
          return new dG(ZG, bG)
        }
        let wG = Math.max(32, ZG >> 5),
          SG = wG << 1,
          LG = wG >> 1,
          yG = [],
          kG = 0,
          UG = -1,
          YG = [];

        function VG(GG) {
          let bG;
          if (GG.lines > SG && GG instanceof JG)
            for (let ZG of GG.children) VG(ZG);
          else GG.lines > LG && (kG > LG || !kG) ? (pG(), yG.push(GG)) : GG instanceof dG && kG && (bG = YG[YG.length - 1]) instanceof dG && GG.lines + bG.lines <= 32 ? (kG += GG.lines, UG += GG.length + 1, YG[YG.length - 1] = new dG(bG.text.concat(GG.text), bG.length + 1 + GG.length)) : (kG + GG.lines > wG && pG(), kG += GG.lines, UG += GG.length + 1, YG.push(GG))
        }

        function pG() {
          0 != kG && (yG.push(1 == YG.length ? YG[0] : JG.from(YG, UG)), UG = -1, kG = YG.length = 0)
        }
        for (let fG of GG) VG(fG);
        return pG(), 1 == yG.length ? yG[0] : new JG(yG, bG)
      }
    }

    function rG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let SG = 0, LG = 0, yG = !0; LG < GG.length && SG <= wG; LG++) {
        let kG = GG[LG],
          UG = SG + kG.length;
        UG >= ZG && (UG > wG && (kG = kG.slice(0, wG - SG)), SG < ZG && (kG = kG.slice(ZG - SG)), yG ? (bG[bG.length - 1] += kG, yG = !1) : bG.push(kG)), SG = UG + 1
      }
      return bG
    }

    function zG(GG, bG, ZG) {
      return rG(GG, [""], bG, ZG)
    }
    hG.empty = new dG([""], 0);
    class EG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = bG, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [GG], this.offsets = [bG > 0 ? 1 : (GG instanceof dG ? GG.text.length : GG.children.length) << 1]
      }
      nextInner(GG, bG) {
        for (this.done = this.lineBreak = !1;;) {
          let ZG = this.nodes.length - 1,
            wG = this.nodes[ZG],
            SG = this.offsets[ZG],
            LG = SG >> 1,
            yG = wG instanceof dG ? wG.text.length : wG.children.length;
          if (LG == (bG > 0 ? yG : 0)) {
            if (0 == ZG) return this.done = !0, this.value = "", this;
            bG > 0 && this.offsets[ZG - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & SG) == (bG > 0 ? 0 : 1)) {
            if (this.offsets[ZG] += bG, 0 == GG) return this.lineBreak = !0, this.value = "\n", this;
            GG--
          } else if (wG instanceof dG) {
            let SG = wG.text[LG + (bG < 0 ? -1 : 0)];
            if (this.offsets[ZG] += bG, SG.length > Math.max(0, GG)) return this.value = 0 == GG ? SG : bG > 0 ? SG.slice(GG) : SG.slice(0, SG.length - GG), this;
            GG -= SG.length
          } else {
            let SG = wG.children[LG + (bG < 0 ? -1 : 0)];
            GG > SG.length ? (GG -= SG.length, this.offsets[ZG] += bG) : (bG < 0 && this.offsets[ZG]--, this.nodes.push(SG), this.offsets.push(bG > 0 ? 1 : (SG instanceof dG ? SG.text.length : SG.children.length) << 1))
          }
        }
      }
      next() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return GG < 0 && (this.nextInner(-GG, -this.dir), GG = this.value.length), this.nextInner(GG, this.dir)
      }
    }
    class oG {
      constructor(GG, bG, ZG) {
        this.value = "", this.done = !1, this.cursor = new EG(GG, bG > ZG ? -1 : 1), this.pos = bG > ZG ? GG.length : 0, this.from = Math.min(bG, ZG), this.to = Math.max(bG, ZG)
      }
      nextInner(GG, bG) {
        if (bG < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        GG += Math.max(0, bG < 0 ? this.pos - this.to : this.from - this.pos);
        let ZG = bG < 0 ? this.pos - this.from : this.to - this.pos;
        GG > ZG && (GG = ZG), ZG -= GG;
        let {
          value: wG
        } = this.cursor.next(GG);
        return this.pos += (wG.length + GG) * bG, this.value = wG.length <= ZG ? wG : bG < 0 ? wG.slice(wG.length - ZG) : wG.slice(0, ZG), this.done = !this.value, this
      }
      next() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return GG < 0 ? GG = Math.max(GG, this.from - this.pos) : GG > 0 && (GG = Math.min(GG, this.to - this.pos)), this.nextInner(GG, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class XG {
      constructor(GG) {
        this.inner = GG, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: bG,
            lineBreak: ZG,
            value: wG
          } = this.inner.next(GG);
        return bG && this.afterBreak ? (this.value = "", this.afterBreak = !1) : bG ? (this.done = !0, this.value = "") : ZG ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = wG, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (hG.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, EG.prototype[Symbol.iterator] = oG.prototype[Symbol.iterator] = XG.prototype[Symbol.iterator] = function() {
      return this
    });
    class uG {
      constructor(GG, bG, ZG, wG) {
        this.from = GG, this.to = bG, this.number = ZG, this.text = wG
      }
      get length() {
        return this.to - this.from
      }
    }

    function iG(GG, bG, ZG) {
      return [bG = Math.max(0, Math.min(GG.length, bG)), Math.max(bG, Math.min(GG.length, ZG))]
    }

    function CG(GG, bG) {
      return UG(GG, bG, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function WG(GG, bG) {
      let ZG = GG.charCodeAt(bG);
      if (!((wG = ZG) >= 55296 && wG < 56320) || bG + 1 == GG.length) return ZG;
      var wG;
      let SG = GG.charCodeAt(bG + 1);
      return function(GG) {
        return GG >= 56320 && GG < 57344
      }(SG) ? SG - 56320 + (ZG - 55296 << 10) + 65536 : ZG
    }

    function mG(GG) {
      return GG <= 65535 ? String.fromCharCode(GG) : (GG -= 65536, String.fromCharCode(55296 + (GG >> 10), 56320 + (1023 & GG)))
    }

    function IG(GG) {
      return GG < 65536 ? 1 : 2
    }
    const FG = /\r\n?|\n/;
    var vG = function(GG) {
      return GG[GG.Simple = 0] = "Simple", GG[GG.TrackDel = 1] = "TrackDel", GG[GG.TrackBefore = 2] = "TrackBefore", GG[GG.TrackAfter = 3] = "TrackAfter", GG
    }(vG || (vG = {}));
    class aG {
      constructor(GG) {
        this.sections = GG
      }
      get length() {
        let GG = 0;
        for (let bG = 0; bG < this.sections.length; bG += 2) GG += this.sections[bG];
        return GG
      }
      get newLength() {
        let GG = 0;
        for (let bG = 0; bG < this.sections.length; bG += 2) {
          let ZG = this.sections[bG + 1];
          GG += ZG < 0 ? this.sections[bG] : ZG
        }
        return GG
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(GG) {
        for (let bG = 0, ZG = 0, wG = 0; bG < this.sections.length;) {
          let SG = this.sections[bG++],
            LG = this.sections[bG++];
          LG < 0 ? (GG(ZG, wG, SG), wG += SG) : wG += LG, ZG += SG
        }
      }
      iterChangedRanges(GG) {
        PG(this, GG, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let GG = [];
        for (let bG = 0; bG < this.sections.length;) {
          let ZG = this.sections[bG++],
            wG = this.sections[bG++];
          wG < 0 ? GG.push(ZG, wG) : GG.push(wG, ZG)
        }
        return new aG(GG)
      }
      composeDesc(GG) {
        return this.empty ? GG : GG.empty ? this : AG(this, GG)
      }
      mapDesc(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return GG.empty ? this : MG(this, GG, bG)
      }
      mapPos(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vG.Simple,
          wG = 0,
          SG = 0;
        for (let LG = 0; LG < this.sections.length;) {
          let yG = this.sections[LG++],
            kG = this.sections[LG++],
            UG = wG + yG;
          if (kG < 0) {
            if (UG > GG) return SG + (GG - wG);
            SG += yG
          } else {
            if (ZG != vG.Simple && UG >= GG && (ZG == vG.TrackDel && wG < GG && UG > GG || ZG == vG.TrackBefore && wG < GG || ZG == vG.TrackAfter && UG > GG)) return null;
            if (UG > GG || UG == GG && bG < 0 && !yG) return GG == wG || bG < 0 ? SG : SG + kG;
            SG += kG
          }
          wG = UG
        }
        if (GG > wG) throw new RangeError(`Position ${GG} is out of range for changeset of length ${wG}`);
        return SG
      }
      touchesRange(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG;
        for (let ZG = 0, wG = 0; ZG < this.sections.length && wG <= bG;) {
          let SG = wG + this.sections[ZG++];
          if (this.sections[ZG++] >= 0 && wG <= bG && SG >= GG) return !(wG < GG && SG > bG) || "cover";
          wG = SG
        }
        return !1
      }
      toString() {
        let GG = "";
        for (let bG = 0; bG < this.sections.length;) {
          let ZG = this.sections[bG++],
            wG = this.sections[bG++];
          GG += (GG ? " " : "") + ZG + (wG >= 0 ? ":" + wG : "")
        }
        return GG
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(GG) {
        if (!Array.isArray(GG) || GG.length % 2 || GG.some((GG => "number" != typeof GG))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new aG(GG)
      }
      static create(GG) {
        return new aG(GG)
      }
    }
    class cG extends aG {
      constructor(GG, bG) {
        super(GG), this.inserted = bG
      }
      apply(GG) {
        if (this.length != GG.length) throw new RangeError("Applying change set to a document with the wrong length");
        return PG(this, ((bG, ZG, wG, SG, LG) => GG = GG.replace(wG, wG + (ZG - bG), LG)), !1), GG
      }
      mapDesc(GG) {
        return MG(this, GG, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(GG) {
        let bG = this.sections.slice(),
          ZG = [];
        for (let wG = 0, SG = 0; wG < bG.length; wG += 2) {
          let LG = bG[wG],
            yG = bG[wG + 1];
          if (yG >= 0) {
            bG[wG] = yG, bG[wG + 1] = LG;
            let kG = wG >> 1;
            for (; ZG.length < kG;) ZG.push(hG.empty);
            ZG.push(LG ? GG.slice(SG, SG + LG) : hG.empty)
          }
          SG += LG
        }
        return new cG(bG, ZG)
      }
      compose(GG) {
        return this.empty ? GG : GG.empty ? this : AG(this, GG, !0)
      }
      map(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return GG.empty ? this : MG(this, GG, bG, !0)
      }
      iterChanges(GG) {
        PG(this, GG, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return aG.create(this.sections)
      }
      filter(GG) {
        let bG = [],
          ZG = [],
          wG = [],
          SG = new sG(this);
        GG: for (let LG = 0, yG = 0;;) {
          let kG = LG == GG.length ? 1e9 : GG[LG++];
          for (; yG < kG || yG == kG && 0 == SG.len;) {
            if (SG.done) break GG;
            let GG = Math.min(SG.len, kG - yG);
            lG(wG, GG, -1);
            let LG = -1 == SG.ins ? -1 : 0 == SG.off ? SG.ins : 0;
            lG(bG, GG, LG), LG > 0 && jG(ZG, bG, SG.text), SG.forward(GG), yG += GG
          }
          let UG = GG[LG++];
          for (; yG < UG;) {
            if (SG.done) break GG;
            let GG = Math.min(SG.len, UG - yG);
            lG(bG, GG, -1), lG(wG, GG, -1 == SG.ins ? -1 : 0 == SG.off ? SG.ins : 0), SG.forward(GG), yG += GG
          }
        }
        return {
          changes: new cG(bG, ZG),
          filtered: aG.create(wG)
        }
      }
      toJSON() {
        let GG = [];
        for (let bG = 0; bG < this.sections.length; bG += 2) {
          let ZG = this.sections[bG],
            wG = this.sections[bG + 1];
          wG < 0 ? GG.push(ZG) : 0 == wG ? GG.push([ZG]) : GG.push([ZG].concat(this.inserted[bG >> 1].toJSON()))
        }
        return GG
      }
      static of (GG, bG, ZG) {
        let wG = [],
          SG = [],
          LG = 0,
          yG = null;

        function kG() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !wG.length) return;
          LG < bG && lG(wG, bG - LG, -1);
          let GG = new cG(wG, SG);
          yG = yG ? yG.compose(GG.map(yG)) : GG, wG = [], SG = [], LG = 0
        }
        return function GG(UG) {
          if (Array.isArray(UG))
            for (let bG of UG) GG(bG);
          else if (UG instanceof cG) {
            if (UG.length != bG) throw new RangeError(`Mismatched change set length (got ${UG.length}, expected ${bG})`);
            kG(), yG = yG ? yG.compose(UG.map(yG)) : UG
          } else {
            let {
              from: GG,
              to: yG = GG,
              insert: YG
            } = UG;
            if (GG > yG || GG < 0 || yG > bG) throw new RangeError(`Invalid change range ${GG} to ${yG} (in doc of length ${bG})`);
            let VG = YG ? "string" == typeof YG ? hG.of(YG.split(ZG || FG)) : YG : hG.empty,
              pG = VG.length;
            if (GG == yG && 0 == pG) return;
            GG < LG && kG(), GG > LG && lG(wG, GG - LG, -1), lG(wG, yG - GG, pG), jG(SG, wG, VG), LG = yG
          }
        }(GG), kG(!yG), yG
      }
      static empty(GG) {
        return new cG(GG ? [GG, -1] : [], [])
      }
      static fromJSON(GG) {
        if (!Array.isArray(GG)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let bG = [],
          ZG = [];
        for (let wG = 0; wG < GG.length; wG++) {
          let SG = GG[wG];
          if ("number" == typeof SG) bG.push(SG, -1);
          else {
            if (!Array.isArray(SG) || "number" != typeof SG[0] || SG.some(((GG, bG) => bG && "string" != typeof GG))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == SG.length) bG.push(SG[0], 0);
            else {
              for (; ZG.length < wG;) ZG.push(hG.empty);
              ZG[wG] = hG.of(SG.slice(1)), bG.push(SG[0], ZG[wG].length)
            }
          }
        }
        return new cG(bG, ZG)
      }
      static createSet(GG, bG) {
        return new cG(GG, bG)
      }
    }

    function lG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == bG && ZG <= 0) return;
      let SG = GG.length - 2;
      SG >= 0 && ZG <= 0 && ZG == GG[SG + 1] ? GG[SG] += bG : SG >= 0 && 0 == bG && 0 == GG[SG] ? GG[SG + 1] += ZG : wG ? (GG[SG] += bG, GG[SG + 1] += ZG) : GG.push(bG, ZG)
    }

    function jG(GG, bG, ZG) {
      if (0 == ZG.length) return;
      let wG = bG.length - 2 >> 1;
      if (wG < GG.length) GG[GG.length - 1] = GG[GG.length - 1].append(ZG);
      else {
        for (; GG.length < wG;) GG.push(hG.empty);
        GG.push(ZG)
      }
    }

    function PG(GG, bG, ZG) {
      let wG = GG.inserted;
      for (let SG = 0, LG = 0, yG = 0; yG < GG.sections.length;) {
        let kG = GG.sections[yG++],
          UG = GG.sections[yG++];
        if (UG < 0) SG += kG, LG += kG;
        else {
          let YG = SG,
            VG = LG,
            pG = hG.empty;
          for (; YG += kG, VG += UG, UG && wG && (pG = pG.append(wG[yG - 2 >> 1])), !(ZG || yG == GG.sections.length || GG.sections[yG + 1] < 0);) kG = GG.sections[yG++], UG = GG.sections[yG++];
          bG(SG, YG, LG, VG, pG), SG = YG, LG = VG
        }
      }
    }

    function MG(GG, bG, ZG) {
      let wG = [],
        SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        LG = new sG(GG),
        yG = new sG(bG),
        kG = 0;
      for (let UG = -1;;) {
        if (++kG > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (LG.done && yG.len || yG.done && LG.len) throw new Error("Mismatched change set lengths");
        if (-1 == LG.ins && -1 == yG.ins) {
          let GG = Math.min(LG.len, yG.len);
          lG(wG, GG, -1), LG.forward(GG), yG.forward(GG)
        } else if (yG.ins >= 0 && (LG.ins < 0 || UG == LG.i || 0 == LG.off && (yG.len < LG.len || yG.len == LG.len && !ZG))) {
          let GG = yG.len;
          for (lG(wG, yG.ins, -1); GG;) {
            if (++kG > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let bG = Math.min(LG.len, GG);
            LG.ins >= 0 && UG < LG.i && LG.len <= bG && (lG(wG, 0, LG.ins), SG && jG(SG, wG, LG.text), UG = LG.i), LG.forward(bG), GG -= bG
          }
          yG.next()
        } else {
          if (!(LG.ins >= 0)) {
            if (LG.done && yG.done) return SG ? cG.createSet(wG, SG) : aG.create(wG);
            throw new Error("Mismatched change set lengths")
          } {
            let GG = 0,
              bG = LG.len;
            for (; bG;) {
              if (++kG > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == yG.ins) {
                let ZG = Math.min(bG, yG.len);
                GG += ZG, bG -= ZG, yG.forward(ZG)
              } else {
                if (!(0 == yG.ins && yG.len < bG)) break;
                bG -= yG.len, yG.next()
              }
            }
            lG(wG, GG, UG < LG.i ? LG.ins : 0), SG && UG < LG.i && jG(SG, wG, LG.text), UG = LG.i, LG.forward(LG.len - bG)
          }
        }
      }
    }

    function AG(GG, bG) {
      let ZG = [],
        wG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        SG = new sG(GG),
        LG = new sG(bG),
        yG = 0;
      for (let kG = !1;;) {
        if (++yG > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (SG.done && LG.done) return wG ? cG.createSet(ZG, wG) : aG.create(ZG);
        if (0 == SG.ins) lG(ZG, SG.len, 0, kG), SG.next();
        else if (0 != LG.len || LG.done) {
          if (SG.done || LG.done) throw new Error("Mismatched change set lengths");
          {
            let GG = Math.min(SG.len2, LG.len),
              bG = ZG.length;
            if (-1 == SG.ins) {
              let bG = -1 == LG.ins ? -1 : LG.off ? 0 : LG.ins;
              lG(ZG, GG, bG, kG), wG && bG && jG(wG, ZG, LG.text)
            } else - 1 == LG.ins ? (lG(ZG, SG.off ? 0 : SG.len, GG, kG), wG && jG(wG, ZG, SG.textBit(GG))) : (lG(ZG, SG.off ? 0 : SG.len, LG.off ? 0 : LG.ins, kG), wG && !LG.off && jG(wG, ZG, LG.text));
            kG = (SG.ins > GG || LG.ins >= 0 && LG.len > GG) && (kG || ZG.length > bG), SG.forward2(GG), LG.forward(GG)
          }
        } else lG(ZG, 0, LG.ins, kG), wG && jG(wG, ZG, LG.text), LG.next()
      }
    }
    class sG {
      constructor(GG) {
        this.set = GG, this.i = 0, this.next()
      }
      next() {
        let {
          sections: GG
        } = this.set;
        this.i < GG.length ? (this.len = GG[this.i++], this.ins = GG[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: GG
        } = this.set, bG = this.i - 2 >> 1;
        return bG >= GG.length ? hG.empty : GG[bG]
      }
      textBit(GG) {
        let {
          inserted: bG
        } = this.set, ZG = this.i - 2 >> 1;
        return ZG >= bG.length && !GG ? hG.empty : bG[ZG].slice(this.off, null == GG ? void 0 : this.off + GG)
      }
      forward(GG) {
        GG == this.len ? this.next() : (this.len -= GG, this.off += GG)
      }
      forward2(GG) {
        -1 == this.ins ? this.forward(GG) : GG == this.ins ? this.next() : (this.ins -= GG, this.off += GG)
      }
    }
    class qG {
      constructor(GG, bG, ZG) {
        this.from = GG, this.to = bG, this.flags = ZG
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
        let GG = 7 & this.flags;
        return 7 == GG ? null : GG
      }
      get goalColumn() {
        let GG = this.flags >> 6;
        return 16777215 == GG ? void 0 : GG
      }
      map(GG) {
        let bG, ZG, wG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? bG = ZG = GG.mapPos(this.from, wG) : (bG = GG.mapPos(this.from, 1), ZG = GG.mapPos(this.to, -1)), bG == this.from && ZG == this.to ? this : new qG(bG, ZG, this.flags)
      }
      extend(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (GG <= this.anchor && bG >= this.anchor) return nG.range(GG, bG, void 0, void 0, ZG);
        let wG = Math.abs(GG - this.anchor) > Math.abs(bG - this.anchor) ? GG : bG;
        return nG.range(this.anchor, wG, void 0, void 0, ZG)
      }
      eq(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == GG.anchor && this.head == GG.head && this.goalColumn == GG.goalColumn && (!bG || !this.empty || this.assoc == GG.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(GG) {
        if (!GG || "number" != typeof GG.anchor || "number" != typeof GG.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return nG.range(GG.anchor, GG.head)
      }
      static create(GG, bG, ZG) {
        return new qG(GG, bG, ZG)
      }
    }
    class nG {
      constructor(GG, bG) {
        this.Bh = GG, this.mainIndex = bG
      }
      map(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return GG.empty ? this : nG.create(this.Bh.map((ZG => ZG.map(GG, bG))), this.mainIndex)
      }
      eq(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Bh.length != GG.Bh.length || this.mainIndex != GG.mainIndex) return !1;
        for (let ZG = 0; ZG < this.Bh.length; ZG++)
          if (!this.Bh[ZG].eq(GG.Bh[ZG], bG)) return !1;
        return !0
      }
      get main() {
        return this.Bh[this.mainIndex]
      }
      asSingle() {
        return 1 == this.Bh.length ? this : new nG([this.main], 0)
      }
      addRange(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return nG.create([GG].concat(this.Bh), bG ? 0 : this.mainIndex + 1)
      }
      replaceRange(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          ZG = this.Bh.slice();
        return ZG[bG] = GG, nG.create(ZG, this.mainIndex)
      }
      toJSON() {
        return {
          Bh: this.Bh.map((GG => GG.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(GG) {
        if (!GG || !Array.isArray(GG.Bh) || "number" != typeof GG.main || GG.main >= GG.Bh.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new nG(GG.Bh.map((GG => qG.fromJSON(GG))), GG.main)
      }
      static single(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG;
        return new nG([nG.range(GG, bG)], 0)
      }
      static create(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == GG.length) throw new RangeError("A selection needs at least one range");
        for (let ZG = 0, wG = 0; wG < GG.length; wG++) {
          let SG = GG[wG];
          if (SG.empty ? SG.from <= ZG : SG.from < ZG) return nG.normalized(GG.slice(), bG);
          ZG = SG.to
        }
        return new nG(GG, bG)
      }
      static cursor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        return qG.create(GG, GG, (0 == bG ? 0 : bG < 0 ? 8 : 16) | (null == ZG ? 7 : Math.min(6, ZG)) | (null !== wG && void 0 !== wG ? wG : 16777215) << 6)
      }
      static range(GG, bG, ZG, wG, SG) {
        let LG = (null !== ZG && void 0 !== ZG ? ZG : 16777215) << 6 | (null == wG ? 7 : Math.min(6, wG));
        return SG || GG == bG || (SG = bG < GG ? 1 : -1), bG < GG ? qG.create(bG, GG, 48 | LG) : qG.create(GG, bG, (SG ? SG < 0 ? 8 : 16 : 0) | LG)
      }
      static normalized(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = GG[bG];
        GG.sort(((GG, bG) => GG.from - bG.from)), bG = GG.indexOf(ZG);
        for (let wG = 1; wG < GG.length; wG++) {
          let ZG = GG[wG],
            SG = GG[wG - 1];
          if (ZG.empty ? ZG.from <= SG.to : ZG.from < SG.to) {
            let LG = SG.from,
              yG = Math.max(ZG.to, SG.to);
            wG <= bG && bG--, GG.splice(--wG, 2, ZG.anchor > ZG.head ? nG.range(yG, LG) : nG.range(LG, yG))
          }
        }
        return new nG(GG, bG)
      }
    }

    function gG(GG, bG) {
      for (let ZG of GG.Bh)
        if (ZG.to > bG) throw new RangeError("Selection points outside of document")
    }
    let eG = 0;
    class RG {
      constructor(GG, bG, ZG, wG, SG) {
        this.combine = GG, this.compareInput = bG, this.compare = ZG, this.isStatic = wG, this.id = eG++, this.default = GG([]), this.extensions = "function" == typeof SG ? SG(this) : SG
      }
      get reader() {
        return this
      }
      static define() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new RG(GG.combine || (GG => GG), GG.compareInput || ((GG, bG) => GG === bG), GG.compare || (GG.combine ? (GG, bG) => GG === bG : TG), !!GG.static, GG.enables)
      }
      of(GG) {
        return new HG([], this, 0, GG)
      }
      compute(GG, bG) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new HG(GG, this, 1, bG)
      }
      computeN(GG, bG) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new HG(GG, this, 2, bG)
      }
      from(GG, bG) {
        return bG || (bG = GG => GG), this.compute([GG], (ZG => bG(ZG.field(GG))))
      }
    }

    function TG(GG, bG) {
      return GG == bG || GG.length == bG.length && GG.every(((GG, ZG) => GG === bG[ZG]))
    }
    class HG {
      constructor(GG, bG, ZG, wG) {
        this.dependencies = GG, this.facet = bG, this.type = ZG, this.value = wG, this.id = eG++
      }
      dynamicSlot(GG) {
        var bG;
        let ZG = this.value,
          wG = this.facet.compareInput,
          SG = this.id,
          LG = GG[SG] >> 1,
          yG = 2 == this.type,
          kG = !1,
          UG = !1,
          YG = [];
        for (let VG of this.dependencies) "doc" == VG ? kG = !0 : "selection" == VG ? UG = !0 : 0 == (1 & (null !== (bG = GG[VG.id]) && void 0 !== bG ? bG : 1)) && YG.push(GG[VG.id]);
        return {
          create: GG => (GG.values[LG] = ZG(GG), 1),
          update(GG, bG) {
            if (kG && bG.docChanged || UG && (bG.docChanged || bG.selection) || DG(GG, YG)) {
              let bG = ZG(GG);
              if (yG ? !tG(bG, GG.values[LG], wG) : !wG(bG, GG.values[LG])) return GG.values[LG] = bG, 1
            }
            return 0
          },
          reconfigure: (GG, bG) => {
            let kG, UG = bG.config.address[SG];
            if (null != UG) {
              let SG = Vb(bG, UG);
              if (this.dependencies.every((ZG => ZG instanceof RG ? bG.facet(ZG) === GG.facet(ZG) : !(ZG instanceof xG) || bG.field(ZG, !1) == GG.field(ZG, !1))) || (yG ? tG(kG = ZG(GG), SG, wG) : wG(kG = ZG(GG), SG))) return GG.values[LG] = SG, 0
            } else kG = ZG(GG);
            return GG.values[LG] = kG, 1
          }
        }
      }
    }

    function tG(GG, bG, ZG) {
      if (GG.length != bG.length) return !1;
      for (let wG = 0; wG < GG.length; wG++)
        if (!ZG(GG[wG], bG[wG])) return !1;
      return !0
    }

    function DG(GG, bG) {
      let ZG = !1;
      for (let wG of bG) 1 & Yb(GG, wG) && (ZG = !0);
      return ZG
    }

    function NG(GG, bG, ZG) {
      let wG = ZG.map((bG => GG[bG.id])),
        SG = ZG.map((GG => GG.type)),
        LG = wG.filter((GG => !(1 & GG))),
        yG = GG[bG.id] >> 1;

      function kG(GG) {
        let ZG = [];
        for (let bG = 0; bG < wG.length; bG++) {
          let LG = Vb(GG, wG[bG]);
          if (2 == SG[bG])
            for (let GG of LG) ZG.push(GG);
          else ZG.push(LG)
        }
        return bG.combine(ZG)
      }
      return {
        create(GG) {
          for (let bG of wG) Yb(GG, bG);
          return GG.values[yG] = kG(GG), 1
        },
        update(GG, ZG) {
          if (!DG(GG, LG)) return 0;
          let wG = kG(GG);
          return bG.compare(wG, GG.values[yG]) ? 0 : (GG.values[yG] = wG, 1)
        },
        reconfigure(GG, SG) {
          let LG = DG(GG, wG),
            UG = SG.config.facets[bG.id],
            YG = SG.facet(bG);
          if (UG && !LG && TG(ZG, UG)) return GG.values[yG] = YG, 0;
          let VG = kG(GG);
          return bG.compare(VG, YG) ? (GG.values[yG] = YG, 0) : (GG.values[yG] = VG, 1)
        }
      }
    }
    const OG = RG.define({
      static: !0
    });
    class xG {
      constructor(GG, bG, ZG, wG, SG) {
        this.id = GG, this.createF = bG, this.updateF = ZG, this.compareF = wG, this.spec = SG, this.provides = void 0
      }
      static define(GG) {
        let bG = new xG(eG++, GG.create, GG.update, GG.compare || ((GG, bG) => GG === bG), GG);
        return GG.provide && (bG.provides = GG.provide(bG)), bG
      }
      create(GG) {
        let bG = GG.facet(OG).find((GG => GG.field == this));
        return ((null === bG || void 0 === bG ? void 0 : bG.create) || this.createF)(GG)
      }
      slot(GG) {
        let bG = GG[this.id] >> 1;
        return {
          create: GG => (GG.values[bG] = this.create(GG), 1),
          update: (GG, ZG) => {
            let wG = GG.values[bG],
              SG = this.updateF(wG, ZG);
            return this.compareF(wG, SG) ? 0 : (GG.values[bG] = SG, 1)
          },
          reconfigure: (GG, ZG) => {
            let wG, SG = GG.facet(OG),
              LG = ZG.facet(OG);
            return (wG = SG.find((GG => GG.field == this))) && wG != LG.find((GG => GG.field == this)) ? (GG.values[bG] = wG.create(GG), 1) : null != ZG.config.address[this.id] ? (GG.values[bG] = ZG.field(this), 0) : (GG.values[bG] = this.create(GG), 1)
          }
        }
      }
      init(GG) {
        return [this, OG.of({
          field: this,
          create: GG
        })]
      }
      get extension() {
        return this
      }
    }
    const BG = 4,
      Gb = 3,
      bb = 2,
      Zb = 1;

    function wb(GG) {
      return bG => new Lb(bG, GG)
    }
    const Sb = {
      highest: wb(0),
      high: wb(Zb),
      default: wb(bb),
      low: wb(Gb),
      lowest: wb(BG)
    };
    class Lb {
      constructor(GG, bG) {
        this.inner = GG, this.prec = bG
      }
    }
    class yb {
      of(GG) {
        return new kb(this, GG)
      }
      reconfigure(GG) {
        return yb.reconfigure.of({
          compartment: this,
          extension: GG
        })
      }
      get(GG) {
        return GG.config.compartments.get(this)
      }
    }
    class kb {
      constructor(GG, bG) {
        this.compartment = GG, this.inner = bG
      }
    }
    class Ub {
      constructor(GG, bG, ZG, wG, SG, LG) {
        for (this.base = GG, this.compartments = bG, this.dynamicSlots = ZG, this.address = wG, this.staticValues = SG, this.facets = LG, this.statusTemplate = []; this.statusTemplate.length < ZG.length;) this.statusTemplate.push(0)
      }
      staticFacet(GG) {
        let bG = this.address[GG.id];
        return null == bG ? GG.default : this.staticValues[bG >> 1]
      }
      static resolve(GG, bG, ZG) {
        let wG = [],
          SG = Object.create(null),
          LG = new Map;
        for (let pG of function(GG, bG, ZG) {
            let wG = [
                [],
                [],
                [],
                [],
                []
              ],
              SG = new Map;

            function LG(GG, yG) {
              let kG = SG.get(GG);
              if (null != kG) {
                if (kG <= yG) return;
                let bG = wG[kG].indexOf(GG);
                bG > -1 && wG[kG].splice(bG, 1), GG instanceof kb && ZG.delete(GG.compartment)
              }
              if (SG.set(GG, yG), Array.isArray(GG))
                for (let bG of GG) LG(bG, yG);
              else if (GG instanceof kb) {
                if (ZG.has(GG.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let wG = bG.get(GG.compartment) || GG.inner;
                ZG.set(GG.compartment, wG), LG(wG, yG)
              } else if (GG instanceof Lb) LG(GG.inner, GG.prec);
              else if (GG instanceof xG) wG[yG].push(GG), GG.provides && LG(GG.provides, yG);
              else if (GG instanceof HG) wG[yG].push(GG), GG.facet.extensions && LG(GG.facet.extensions, bb);
              else {
                let bG = GG.extension;
                if (!bG) throw new Error(`Unrecognized extension value in extension set (${GG}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                LG(bG, yG)
              }
            }
            return LG(GG, bb), wG.reduce(((GG, bG) => GG.concat(bG)))
          }(GG, bG, LG)) pG instanceof xG ? wG.push(pG) : (SG[pG.facet.id] || (SG[pG.facet.id] = [])).push(pG);
        let yG = Object.create(null),
          kG = [],
          UG = [];
        for (let pG of wG) yG[pG.id] = UG.length << 1, UG.push((GG => pG.slot(GG)));
        let YG = null === ZG || void 0 === ZG ? void 0 : ZG.config.facets;
        for (let pG in SG) {
          let GG = SG[pG],
            bG = GG[0].facet,
            wG = YG && YG[pG] || [];
          if (GG.every((GG => 0 == GG.type)))
            if (yG[bG.id] = kG.length << 1 | 1, TG(wG, GG)) kG.push(ZG.facet(bG));
            else {
              let wG = bG.combine(GG.map((GG => GG.value)));
              kG.push(ZG && bG.compare(wG, ZG.facet(bG)) ? ZG.facet(bG) : wG)
            }
          else {
            for (let bG of GG) 0 == bG.type ? (yG[bG.id] = kG.length << 1 | 1, kG.push(bG.value)) : (yG[bG.id] = UG.length << 1, UG.push((GG => bG.dynamicSlot(GG))));
            yG[bG.id] = UG.length << 1, UG.push((ZG => NG(ZG, bG, GG)))
          }
        }
        let VG = UG.map((GG => GG(yG)));
        return new Ub(GG, LG, VG, yG, kG, SG)
      }
    }

    function Yb(GG, bG) {
      if (1 & bG) return 2;
      let ZG = bG >> 1,
        wG = GG.status[ZG];
      if (4 == wG) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & wG) return wG;
      GG.status[ZG] = 4;
      let SG = GG.computeSlot(GG, GG.config.dynamicSlots[ZG]);
      return GG.status[ZG] = 2 | SG
    }

    function Vb(GG, bG) {
      return 1 & bG ? GG.config.staticValues[bG >> 1] : GG.values[bG >> 1]
    }
    const pb = RG.define(),
      fb = RG.define({
        combine: GG => GG.some((GG => GG)),
        static: !0
      }),
      Qb = RG.define({
        combine: GG => GG.length ? GG[0] : void 0,
        static: !0
      }),
      Kb = RG.define(),
      hb = RG.define(),
      db = RG.define(),
      Jb = RG.define({
        combine: GG => !!GG.length && GG[0]
      });
    class rb {
      constructor(GG, bG) {
        this.type = GG, this.value = bG
      }
      static define() {
        return new zb
      }
    }
    class zb {
      of(GG) {
        return new rb(this, GG)
      }
    }
    class Eb {
      constructor(GG) {
        this.map = GG
      }
      of(GG) {
        return new ob(this, GG)
      }
    }
    class ob {
      constructor(GG, bG) {
        this.type = GG, this.value = bG
      }
      map(GG) {
        let bG = this.type.map(this.value, GG);
        return void 0 === bG ? void 0 : bG == this.value ? this : new ob(this.type, bG)
      }
      is(GG) {
        return this.type == GG
      }
      static define() {
        return new Eb((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (GG => GG))
      }
      static mapEffects(GG, bG) {
        if (!GG.length) return GG;
        let ZG = [];
        for (let wG of GG) {
          let GG = wG.map(bG);
          GG && ZG.push(GG)
        }
        return ZG
      }
    }
    ob.reconfigure = ob.define(), ob.appendConfig = ob.define();
    class Xb {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.startState = GG, this.changes = bG, this.selection = ZG, this.effects = wG, this.annotations = SG, this.scrollIntoView = LG, this._doc = null, this._state = null, ZG && gG(ZG, bG.newLength), SG.some((GG => GG.type == Xb.time)) || (this.annotations = SG.concat(Xb.time.of(Date.now())))
      }
      static create(GG, bG, ZG, wG, SG, LG) {
        return new Xb(GG, bG, ZG, wG, SG, LG)
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
      annotation(GG) {
        for (let bG of this.annotations)
          if (bG.type == GG) return bG.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(GG) {
        let bG = this.annotation(Xb.userEvent);
        return !(!bG || !(bG == GG || bG.length > GG.length && bG.slice(0, GG.length) == GG && "." == bG[GG.length]))
      }
    }

    function ub(GG, bG) {
      let ZG = [];
      for (let wG = 0, SG = 0;;) {
        let LG, yG;
        if (wG < GG.length && (SG == bG.length || bG[SG] >= GG[wG])) LG = GG[wG++], yG = GG[wG++];
        else {
          if (!(SG < bG.length)) return ZG;
          LG = bG[SG++], yG = bG[SG++]
        }!ZG.length || ZG[ZG.length - 1] < LG ? ZG.push(LG, yG) : ZG[ZG.length - 1] < yG && (ZG[ZG.length - 1] = yG)
      }
    }

    function ib(GG, bG, ZG) {
      var wG;
      let SG, LG, yG;
      return ZG ? (SG = bG.changes, LG = cG.empty(bG.changes.length), yG = GG.changes.compose(bG.changes)) : (SG = bG.changes.map(GG.changes), LG = GG.changes.mapDesc(bG.changes, !0), yG = GG.changes.compose(SG)), {
        changes: yG,
        selection: bG.selection ? bG.selection.map(LG) : null === (wG = GG.selection) || void 0 === wG ? void 0 : wG.map(SG),
        effects: ob.mapEffects(GG.effects, SG).concat(ob.mapEffects(bG.effects, LG)),
        annotations: GG.annotations.length ? GG.annotations.concat(bG.annotations) : bG.annotations,
        scrollIntoView: GG.scrollIntoView || bG.scrollIntoView
      }
    }

    function Cb(GG, bG, ZG) {
      let wG = bG.selection,
        SG = Ib(bG.annotations);
      return bG.userEvent && (SG = SG.concat(Xb.userEvent.of(bG.userEvent))), {
        changes: bG.changes instanceof cG ? bG.changes : cG.of(bG.changes || [], ZG, GG.facet(Qb)),
        selection: wG && (wG instanceof nG ? wG : nG.single(wG.anchor, wG.head)),
        effects: Ib(bG.effects),
        annotations: SG,
        scrollIntoView: !!bG.scrollIntoView
      }
    }

    function Wb(GG, bG, ZG) {
      let wG = Cb(GG, bG.length ? bG[0] : {}, GG.doc.length);
      bG.length && !1 === bG[0].filter && (ZG = !1);
      for (let LG = 1; LG < bG.length; LG++) {
        !1 === bG[LG].filter && (ZG = !1);
        let SG = !!bG[LG].sequential;
        wG = ib(wG, Cb(GG, bG[LG], SG ? wG.changes.newLength : GG.doc.length), SG)
      }
      let SG = Xb.create(GG, wG.changes, wG.selection, wG.effects, wG.annotations, wG.scrollIntoView);
      return function(GG) {
        let bG = GG.startState,
          ZG = bG.facet(db),
          wG = GG;
        for (let SG = ZG.length - 1; SG >= 0; SG--) {
          let LG = ZG[SG](GG);
          LG && Object.keys(LG).length && (wG = ib(wG, Cb(bG, LG, GG.changes.newLength), !0))
        }
        return wG == GG ? GG : Xb.create(bG, GG.changes, GG.selection, wG.effects, wG.annotations, wG.scrollIntoView)
      }(ZG ? function(GG) {
        let bG = GG.startState,
          ZG = !0;
        for (let SG of bG.facet(Kb)) {
          let bG = SG(GG);
          if (!1 === bG) {
            ZG = !1;
            break
          }
          Array.isArray(bG) && (ZG = !0 === ZG ? bG : ub(ZG, bG))
        }
        if (!0 !== ZG) {
          let wG, SG;
          if (!1 === ZG) SG = GG.changes.invertedDesc, wG = cG.empty(bG.doc.length);
          else {
            let bG = GG.changes.filter(ZG);
            wG = bG.changes, SG = bG.filtered.mapDesc(bG.changes).invertedDesc
          }
          GG = Xb.create(bG, wG, GG.selection && GG.selection.map(SG), ob.mapEffects(GG.effects, SG), GG.annotations, GG.scrollIntoView)
        }
        let wG = bG.facet(hb);
        for (let SG = wG.length - 1; SG >= 0; SG--) {
          let ZG = wG[SG](GG);
          GG = ZG instanceof Xb ? ZG : Array.isArray(ZG) && 1 == ZG.length && ZG[0] instanceof Xb ? ZG[0] : Wb(bG, Ib(ZG), !1)
        }
        return GG
      }(SG) : SG)
    }
    Xb.time = rb.define(), Xb.userEvent = rb.define(), Xb.addToHistory = rb.define(), Xb.remote = rb.define();
    const mb = [];

    function Ib(GG) {
      return null == GG ? mb : Array.isArray(GG) ? GG : [GG]
    }
    var Fb = function(GG) {
      return GG[GG.Word = 0] = "Word", GG[GG.Space = 1] = "Space", GG[GG.Other = 2] = "Other", GG
    }(Fb || (Fb = {}));
    const vb = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let ab;
    try {
      ab = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (ZZ) {}

    function cb(GG) {
      return bG => {
        if (!/\S/.test(bG)) return Fb.Space;
        if (function(GG) {
            if (ab) return ab.test(GG);
            for (let bG = 0; bG < GG.length; bG++) {
              let ZG = GG[bG];
              if (/\w/.test(ZG) || ZG > "\x80" && (ZG.toUpperCase() != ZG.toLowerCase() || vb.test(ZG))) return !0
            }
            return !1
          }(bG)) return Fb.Word;
        for (let ZG = 0; ZG < GG.length; ZG++)
          if (bG.indexOf(GG[ZG]) > -1) return Fb.Word;
        return Fb.Other
      }
    }
    class lb {
      constructor(GG, bG, ZG, wG, SG, LG) {
        this.config = GG, this.doc = bG, this.selection = ZG, this.values = wG, this.status = GG.statusTemplate.slice(), this.computeSlot = SG, LG && (LG._state = this);
        for (let yG = 0; yG < this.config.dynamicSlots.length; yG++) Yb(this, yG << 1);
        this.computeSlot = null
      }
      field(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          ZG = this.config.address[GG.id];
        if (null != ZG) return Yb(this, ZG), Vb(this, ZG);
        if (bG) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        return Wb(this, bG, !0)
      }
      applyTransaction(GG) {
        let bG, ZG = this.config,
          {
            base: wG,
            compartments: SG
          } = ZG;
        for (let yG of GG.effects) yG.is(yb.reconfigure) ? (ZG && (SG = new Map, ZG.compartments.forEach(((GG, bG) => SG.set(bG, GG))), ZG = null), SG.set(yG.value.compartment, yG.value.extension)) : yG.is(ob.reconfigure) ? (ZG = null, wG = yG.value) : yG.is(ob.appendConfig) && (ZG = null, wG = Ib(wG).concat(yG.value));
        if (ZG) bG = GG.startState.values.slice();
        else {
          ZG = Ub.resolve(wG, SG, this), bG = new lb(ZG, this.doc, this.selection, ZG.dynamicSlots.map((() => null)), ((GG, bG) => bG.reconfigure(GG, this)), null).values
        }
        let LG = GG.startState.facet(fb) ? GG.newSelection : GG.newSelection.asSingle();
        new lb(ZG, GG.newDoc, LG, bG, ((bG, ZG) => ZG.update(bG, GG)), GG)
      }
      replaceSelection(GG) {
        return "string" == typeof GG && (GG = this.toText(GG)), this.changeByRange((bG => ({
          changes: {
            from: bG.from,
            to: bG.to,
            insert: GG
          },
          range: nG.cursor(bG.from + GG.length)
        })))
      }
      changeByRange(GG) {
        let bG = this.selection,
          ZG = GG(bG.Bh[0]),
          wG = this.changes(ZG.changes),
          SG = [ZG.range],
          LG = Ib(ZG.effects);
        for (let yG = 1; yG < bG.Bh.length; yG++) {
          let ZG = GG(bG.Bh[yG]),
            kG = this.changes(ZG.changes),
            UG = kG.map(wG);
          for (let GG = 0; GG < yG; GG++) SG[GG] = SG[GG].map(UG);
          let YG = wG.mapDesc(kG, !0);
          SG.push(ZG.range.map(YG)), wG = wG.compose(UG), LG = ob.mapEffects(LG, UG).concat(ob.mapEffects(Ib(ZG.effects), YG))
        }
        return {
          changes: wG,
          selection: nG.create(SG, bG.mainIndex),
          effects: LG
        }
      }
      changes() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return GG instanceof cG ? GG : cG.of(GG, this.doc.length, this.facet(lb.lineSeparator))
      }
      toText(GG) {
        return hG.of(GG.split(this.facet(lb.lineSeparator) || FG))
      }
      sliceDoc() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(GG, bG, this.lineBreak)
      }
      facet(GG) {
        let bG = this.config.address[GG.id];
        return null == bG ? GG.default : (Yb(this, bG), Vb(this, bG))
      }
      toJSON(GG) {
        let bG = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (GG)
          for (let ZG in GG) {
            let wG = GG[ZG];
            wG instanceof xG && null != this.config.address[wG.id] && (bG[ZG] = wG.spec.toJSON(this.field(GG[ZG]), this))
          }
        return bG
      }
      static fromJSON(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        if (!GG || "string" != typeof GG.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let wG = [];
        if (ZG)
          for (let SG in ZG)
            if (Object.prototype.hasOwnProperty.call(GG, SG)) {
              let bG = ZG[SG],
                LG = GG[SG];
              wG.push(bG.init((GG => bG.spec.fromJSON(LG, GG))))
            } return lb.create({
          doc: GG.doc,
          selection: nG.fromJSON(GG.selection),
          extensions: bG.extensions ? wG.concat([bG.extensions]) : wG
        })
      }
      static create() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          bG = Ub.resolve(GG.extensions || [], new Map),
          ZG = GG.doc instanceof hG ? GG.doc : hG.of((GG.doc || "").split(bG.staticFacet(lb.lineSeparator) || FG)),
          wG = GG.selection ? GG.selection instanceof nG ? GG.selection : nG.single(GG.selection.anchor, GG.selection.head) : nG.single(0);
        return gG(wG, ZG.length), bG.staticFacet(fb) || (wG = wG.asSingle()), new lb(bG, ZG, wG, bG.dynamicSlots.map((() => null)), ((GG, bG) => bG.create(GG)), null)
      }
      get tabSize() {
        return this.facet(lb.tabSize)
      }
      get lineBreak() {
        return this.facet(lb.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Jb)
      }
      phrase(GG) {
        for (var bG = arguments.length, ZG = new Array(bG > 1 ? bG - 1 : 0), wG = 1; wG < bG; wG++) ZG[wG - 1] = arguments[wG];
        for (let SG of this.facet(lb.phrases))
          if (Object.prototype.hasOwnProperty.call(SG, GG)) {
            GG = SG[GG];
            break
          } return ZG.length && (GG = GG.replace(/\$(\$|\d*)/g, ((GG, bG) => {
          if ("$" == bG) return "$";
          let wG = +(bG || 1);
          return !wG || wG > ZG.length ? GG : ZG[wG - 1]
        }))), GG
      }
      languageDataAt(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          wG = [];
        for (let SG of this.facet(pb))
          for (let LG of SG(this, bG, ZG)) Object.prototype.hasOwnProperty.call(LG, GG) && wG.push(LG[GG]);
        return wG
      }
      charCategorizer(GG) {
        let bG = this.languageDataAt("wordChars", GG);
        return cb(bG.length ? bG[0] : "")
      }
      wordAt(GG) {
        let {
          text: bG,
          from: ZG,
          length: wG
        } = this.doc.lineAt(GG), SG = this.charCategorizer(GG), LG = GG - ZG, yG = GG - ZG;
        for (; LG > 0;) {
          let GG = CG(bG, LG, !1);
          if (SG(bG.slice(GG, LG)) != Fb.Word) break;
          LG = GG
        }
        for (; yG < wG;) {
          let GG = CG(bG, yG);
          if (SG(bG.slice(yG, GG)) != Fb.Word) break;
          yG = GG
        }
        return LG == yG ? null : nG.range(LG + ZG, yG + ZG)
      }
    }

    function jb(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        wG = {};
      for (let SG of GG)
        for (let GG of Object.keys(SG)) {
          let bG = SG[GG],
            LG = wG[GG];
          if (void 0 === LG) wG[GG] = bG;
          else if (LG === bG || void 0 === bG);
          else {
            if (!Object.hasOwnProperty.call(ZG, GG)) throw new Error("Config merge conflict for field " + GG);
            wG[GG] = ZG[GG](LG, bG)
          }
        }
      for (let SG in bG) void 0 === wG[SG] && (wG[SG] = bG[SG]);
      return wG
    }
    lb.allowMultipleSelections = fb, lb.tabSize = RG.define({
      combine: GG => GG.length ? GG[0] : 4
    }), lb.lineSeparator = Qb, lb.readOnly = Jb, lb.phrases = RG.define({
      compare(GG, bG) {
        let ZG = Object.keys(GG),
          wG = Object.keys(bG);
        return ZG.length == wG.length && ZG.every((ZG => GG[ZG] == bG[ZG]))
      }
    }), lb.languageData = pb, lb.changeFilter = Kb, lb.transactionFilter = hb, lb.transactionExtender = db, yb.reconfigure = ob.define();
    class Pb {
      eq(GG) {
        return this == GG
      }
      range(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GG;
        return Ab.create(GG, bG, this)
      }
    }

    function Mb(GG, bG) {
      return GG == bG || GG.constructor == bG.constructor && GG.eq(bG)
    }
    Pb.prototype.startSide = Pb.prototype.endSide = 0, Pb.prototype.point = !1, Pb.prototype.mapMode = vG.TrackDel;
    class Ab {
      constructor(GG, bG, ZG) {
        this.from = GG, this.to = bG, this.value = ZG
      }
      static create(GG, bG, ZG) {
        return new Ab(GG, bG, ZG)
      }
    }

    function sb(GG, bG) {
      return GG.from - bG.from || GG.value.startSide - bG.value.startSide
    }
    class qb {
      constructor(GG, bG, ZG, wG) {
        this.from = GG, this.to = bG, this.value = ZG, this.lwG = wG
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          SG = ZG ? this.to : this.from;
        for (let LG = wG, yG = SG.length;;) {
          if (LG == yG) return LG;
          let wG = LG + yG >> 1,
            kG = SG[wG] - GG || (ZG ? this.value[wG].endSide : this.value[wG].startSide) - bG;
          if (wG == LG) return kG >= 0 ? LG : yG;
          kG >= 0 ? yG = wG : LG = wG + 1
        }
      }
      between(GG, bG, ZG, wG) {
        for (let SG = this.findIndex(bG, -1e9, !0), LG = this.findIndex(ZG, 1e9, !1, SG); SG < LG; SG++)
          if (!1 === wG(this.from[SG] + GG, this.to[SG] + GG, this.value[SG])) return !1
      }
      map(GG, bG) {
        let ZG = [],
          wG = [],
          SG = [],
          LG = -1,
          yG = -1;
        for (let kG = 0; kG < this.value.length; kG++) {
          let UG, YG, VG = this.value[kG],
            pG = this.from[kG] + GG,
            fG = this.to[kG] + GG;
          if (pG == fG) {
            let GG = bG.mapPos(pG, VG.startSide, VG.mapMode);
            if (null == GG) continue;
            if (UG = YG = GG, VG.startSide != VG.endSide && (YG = bG.mapPos(pG, VG.endSide), YG < UG)) continue
          } else if (UG = bG.mapPos(pG, VG.startSide), YG = bG.mapPos(fG, VG.endSide), UG > YG || UG == YG && VG.startSide > 0 && VG.endSide <= 0) continue;
          (YG - UG || VG.endSide - VG.startSide) < 0 || (LG < 0 && (LG = UG), VG.point && (yG = Math.max(yG, YG - UG)), ZG.push(VG), wG.push(UG - LG), SG.push(YG - LG))
        }
        return {
          mapped: ZG.length ? new qb(wG, SG, ZG, yG) : null,
          pos: LG
        }
      }
    }
    class nb {
      constructor(GG, bG, ZG, wG) {
        this.chunkPos = GG, this.chunk = bG, this.nextLayer = ZG, this.lwG = wG
      }
      static create(GG, bG, ZG, wG) {
        return new nb(GG, bG, ZG, wG)
      }
      get length() {
        let GG = this.chunk.length - 1;
        return GG < 0 ? 0 : Math.max(this.chunkEnd(GG), this.nextLayer.length)
      }
      get size() {
        if (this.wK) return 0;
        let GG = this.nextLayer.size;
        for (let bG of this.chunk) GG += bG.value.length;
        return GG
      }
      chunkEnd(GG) {
        return this.chunkPos[GG] + this.chunk[GG].length
      }
      update(GG) {
        let {
          add: bG = [],
          sort: ZG = !1,
          filterFrom: wG = 0,
          filterTo: SG = this.length
        } = GG, LG = GG.filter;
        if (0 == bG.length && !LG) return this;
        if (ZG && (bG = bG.slice().sort(sb)), this.wK) return bG.length ? nb.of(bG) : this;
        let yG = new Rb(this, null, -1).goto(0),
          kG = 0,
          UG = [],
          YG = new gb;
        for (; yG.value || kG < bG.length;)
          if (kG < bG.length && (yG.from - bG[kG].from || yG.startSide - bG[kG].value.startSide) >= 0) {
            let GG = bG[kG++];
            YG.addInner(GG.from, GG.to, GG.value) || UG.push(GG)
          } else 1 == yG.rangeIndex && yG.chunkIndex < this.chunk.length && (kG == bG.length || this.chunkEnd(yG.chunkIndex) < bG[kG].from) && (!LG || wG > this.chunkEnd(yG.chunkIndex) || SG < this.chunkPos[yG.chunkIndex]) && YG.addChunk(this.chunkPos[yG.chunkIndex], this.chunk[yG.chunkIndex]) ? yG.nextChunk() : ((!LG || wG > yG.to || SG < yG.from || LG(yG.from, yG.to, yG.value)) && (YG.addInner(yG.from, yG.to, yG.value) || UG.push(Ab.create(yG.from, yG.to, yG.value))), yG.next());
        return YG.finishInner(this.nextLayer.wK && !UG.length ? nb.empty : this.nextLayer.update({
          add: UG,
          filter: LG,
          filterFrom: wG,
          filterTo: SG
        }))
      }
      map(GG) {
        if (GG.empty || this.wK) return this;
        let bG = [],
          ZG = [],
          wG = -1;
        for (let LG = 0; LG < this.chunk.length; LG++) {
          let SG = this.chunkPos[LG],
            yG = this.chunk[LG],
            kG = GG.touchesRange(SG, SG + yG.length);
          if (!1 === kG) wG = Math.max(wG, yG.lwG), bG.push(yG), ZG.push(GG.mapPos(SG));
          else if (!0 === kG) {
            let {
              mapped: LG,
              pos: kG
            } = yG.map(SG, GG);
            LG && (wG = Math.max(wG, LG.lwG), bG.push(LG), ZG.push(kG))
          }
        }
        let SG = this.nextLayer.map(GG);
        return 0 == bG.length ? SG : new nb(ZG, bG, SG || nb.empty, wG)
      }
      between(GG, bG, ZG) {
        if (!this.wK) {
          for (let wG = 0; wG < this.chunk.length; wG++) {
            let SG = this.chunkPos[wG],
              LG = this.chunk[wG];
            if (bG >= SG && GG <= SG + LG.length && !1 === LG.between(SG, GG - SG, bG - SG, ZG)) return
          }
          this.nextLayer.between(GG, bG, ZG)
        }
      }
      iter() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Tb.from([this]).goto(GG)
      }
      get wK() {
        return this.nextLayer == this
      }
      static iter(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Tb.from(GG).goto(bG)
      }
      static compare(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          LG = GG.filter((GG => GG.lwG > 0 || !GG.wK && GG.lwG >= SG)),
          yG = bG.filter((GG => GG.lwG > 0 || !GG.wK && GG.lwG >= SG)),
          kG = eb(LG, yG, ZG),
          UG = new tb(LG, kG, SG),
          YG = new tb(yG, kG, SG);
        ZG.iterGaps(((GG, bG, ZG) => Db(UG, GG, YG, bG, ZG, wG))), ZG.empty && 0 == ZG.length && Db(UG, 0, YG, 0, 0, wG)
      }
      static eq(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        null == wG && (wG = 999999999);
        let SG = GG.filter((GG => !GG.wK && bG.indexOf(GG) < 0)),
          LG = bG.filter((bG => !bG.wK && GG.indexOf(bG) < 0));
        if (SG.length != LG.length) return !1;
        if (!SG.length) return !0;
        let yG = eb(SG, LG),
          kG = new tb(SG, yG, 0).goto(ZG),
          UG = new tb(LG, yG, 0).goto(ZG);
        for (;;) {
          if (kG.to != UG.to || !Nb(kG.active, UG.active) || kG.point && (!UG.point || !Mb(kG.point, UG.point))) return !1;
          if (kG.to > wG) return !0;
          kG.next(), UG.next()
        }
      }
      static spans(GG, bG, ZG, wG) {
        let SG = new tb(GG, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(bG),
          LG = bG,
          yG = SG.openStart;
        for (;;) {
          let GG = Math.min(SG.to, ZG);
          if (SG.point) {
            let ZG = SG.activeForPoint(SG.to),
              kG = SG.pointFrom < bG ? ZG.length + 1 : SG.point.startSide < 0 ? ZG.length : Math.min(ZG.length, yG);
            wG.point(LG, GG, SG.point, ZG, kG, SG.pointRank), yG = Math.min(SG.openEnd(GG), ZG.length)
          } else GG > LG && (wG.span(LG, GG, SG.active, yG), yG = SG.openEnd(GG));
          if (SG.to > ZG) return yG + (SG.point && SG.to > ZG ? 1 : 0);
          LG = SG.to, SG.next()
        }
      }
      static of (GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = new gb;
        for (let wG of GG instanceof Ab ? [GG] : bG ? function(GG) {
            if (GG.length > 1)
              for (let bG = GG[0], ZG = 1; ZG < GG.length; ZG++) {
                let wG = GG[ZG];
                if (sb(bG, wG) > 0) return GG.slice().sort(sb);
                bG = wG
              }
            return GG
          }(GG) : GG) ZG.add(wG.from, wG.to, wG.value);
        return ZG.finish()
      }
      static join(GG) {
        if (!GG.length) return nb.empty;
        let bG = GG[GG.length - 1];
        for (let ZG = GG.length - 2; ZG >= 0; ZG--)
          for (let wG = GG[ZG]; wG != nb.empty; wG = wG.nextLayer) bG = new nb(wG.chunkPos, wG.chunk, bG, Math.max(wG.lwG, bG.lwG));
        return bG
      }
    }
    nb.empty = new nb([], [], null, -1), nb.empty.nextLayer = nb.empty;
    class gb {
      finishChunk(GG) {
        this.chunks.push(new qb(this.from, this.to, this.value, this.lwG)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.lwG), this.lwG = -1, GG && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.lwG = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(GG, bG, ZG) {
        this.addInner(GG, bG, ZG) || (this.nextLayer || (this.nextLayer = new gb)).add(GG, bG, ZG)
      }
      addInner(GG, bG, ZG) {
        let wG = GG - this.lastTo || ZG.startSide - this.last.endSide;
        if (wG <= 0 && (GG - this.lastFrom || ZG.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(wG < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = GG), this.from.push(GG - this.chunkStart), this.to.push(bG - this.chunkStart), this.last = ZG, this.lastFrom = GG, this.lastTo = bG, this.value.push(ZG), ZG.point && (this.lwG = Math.max(this.lwG, bG - GG)), !0)
      }
      addChunk(GG, bG) {
        if ((GG - this.lastTo || bG.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, bG.lwG), this.chunks.push(bG), this.chunkPos.push(GG);
        let ZG = bG.value.length - 1;
        return this.last = bG.value[ZG], this.lastFrom = bG.from[ZG] + GG, this.lastTo = bG.to[ZG] + GG, !0
      }
      finish() {
        return this.finishInner(nb.empty)
      }
      finishInner(GG) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return GG;
        let bG = nb.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(GG) : GG, this.setMaxPoint);
        return this.from = null, bG
      }
    }

    function eb(GG, bG, ZG) {
      let wG = new Map;
      for (let LG of GG)
        for (let GG = 0; GG < LG.chunk.length; GG++) LG.chunk[GG].lwG <= 0 && wG.set(LG.chunk[GG], LG.chunkPos[GG]);
      let SG = new Set;
      for (let LG of bG)
        for (let GG = 0; GG < LG.chunk.length; GG++) {
          let bG = wG.get(LG.chunk[GG]);
          null == bG || (ZG ? ZG.mapPos(bG) : bG) != LG.chunkPos[GG] || (null === ZG || void 0 === ZG ? void 0 : ZG.touchesRange(bG, bG + LG.chunk[GG].length)) || SG.add(LG.chunk[GG])
        }
      return SG
    }
    class Rb {
      constructor(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = GG, this.skip = bG, this.jwG = ZG, this.rank = wG
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(GG, bG, !1), this
      }
      gotoInner(GG, bG, ZG) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let bG = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(bG) || this.layer.chunkEnd(this.chunkIndex) < GG || bG.lwG < this.jwG)) break;
          this.chunkIndex++, ZG = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let wG = this.layer.chunk[this.chunkIndex].findIndex(GG - this.layer.chunkPos[this.chunkIndex], bG, !0);
          (!ZG || this.rangeIndex < wG) && this.setRangeIndex(wG)
        }
        this.next()
      }
      forward(GG, bG) {
        (this.to - GG || this.endSide - bG) < 0 && this.gotoInner(GG, bG, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let GG = this.layer.chunkPos[this.chunkIndex],
              bG = this.layer.chunk[this.chunkIndex],
              ZG = GG + bG.from[this.rangeIndex];
            if (this.from = ZG, this.to = GG + bG.to[this.rangeIndex], this.value = bG.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.jwG < 0 || this.value.point && this.to - this.from >= this.jwG) break
          }
        }
      }
      setRangeIndex(GG) {
        if (GG == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = GG
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(GG) {
        return this.from - GG.from || this.startSide - GG.startSide || this.rank - GG.rank || this.to - GG.to || this.endSide - GG.endSide
      }
    }
    class Tb {
      constructor(GG) {
        this.heap = GG
      }
      static from(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          wG = [];
        for (let SG = 0; SG < GG.length; SG++)
          for (let LG = GG[SG]; !LG.wK; LG = LG.nextLayer) LG.lwG >= ZG && wG.push(new Rb(LG, bG, ZG, SG));
        return 1 == wG.length ? wG[0] : new Tb(wG)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let ZG of this.heap) ZG.goto(GG, bG);
        for (let ZG = this.heap.length >> 1; ZG >= 0; ZG--) Hb(this.heap, ZG);
        return this.next(), this
      }
      forward(GG, bG) {
        for (let ZG of this.heap) ZG.forward(GG, bG);
        for (let ZG = this.heap.length >> 1; ZG >= 0; ZG--) Hb(this.heap, ZG);
        (this.to - GG || this.value.endSide - bG) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let GG = this.heap[0];
          this.from = GG.from, this.to = GG.to, this.value = GG.value, this.rank = GG.rank, GG.value && GG.next(), Hb(this.heap, 0)
        }
      }
    }

    function Hb(GG, bG) {
      for (let ZG = GG[bG];;) {
        let wG = 1 + (bG << 1);
        if (wG >= GG.length) break;
        let SG = GG[wG];
        if (wG + 1 < GG.length && SG.compare(GG[wG + 1]) >= 0 && (SG = GG[wG + 1], wG++), ZG.compare(SG) < 0) break;
        GG[wG] = ZG, GG[bG] = SG, bG = wG
      }
    }
    class tb {
      constructor(GG, bG, ZG) {
        this.jwG = ZG, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Tb.from(GG, bG, ZG)
      }
      goto(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(GG, bG), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = GG, this.endSide = bG, this.openStart = -1, this.next(), this
      }
      forward(GG, bG) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - GG || this.active[this.minActive].endSide - bG) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(GG, bG)
      }
      removeActive(GG) {
        Ob(this.active, GG), Ob(this.activeTo, GG), Ob(this.activeRank, GG), this.minActive = Bb(this.active, this.activeTo)
      }
      addActive(GG) {
        let bG = 0,
          {
            value: ZG,
            to: wG,
            rank: SG
          } = this.cursor;
        for (; bG < this.activeRank.length && (SG - this.activeRank[bG] || wG - this.activeTo[bG]) > 0;) bG++;
        xb(this.active, bG, ZG), xb(this.activeTo, bG, wG), xb(this.activeRank, bG, SG), GG && xb(GG, bG, this.cursor.from), this.minActive = Bb(this.active, this.activeTo)
      }
      next() {
        let GG = this.to,
          bG = this.point;
        this.point = null;
        let ZG = this.openStart < 0 ? [] : null;
        for (;;) {
          let wG = this.minActive;
          if (wG > -1 && (this.activeTo[wG] - this.cursor.from || this.active[wG].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[wG] > GG) {
              this.to = this.activeTo[wG], this.endSide = this.active[wG].endSide;
              break
            }
            this.removeActive(wG), ZG && Ob(ZG, wG)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > GG) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let GG = this.cursor.value;
              if (GG.point) {
                if (!(bG && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = GG, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = GG.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(ZG), this.cursor.next()
            }
          }
        }
        if (ZG) {
          this.openStart = 0;
          for (let bG = ZG.length - 1; bG >= 0 && ZG[bG] < GG; bG--) this.openStart++
        }
      }
      activeForPoint(GG) {
        if (!this.active.length) return this.active;
        let bG = [];
        for (let ZG = this.active.length - 1; ZG >= 0 && !(this.activeRank[ZG] < this.pointRank); ZG--)(this.activeTo[ZG] > GG || this.activeTo[ZG] == GG && this.active[ZG].endSide >= this.point.endSide) && bG.push(this.active[ZG]);
        return bG.reverse()
      }
      openEnd(GG) {
        let bG = 0;
        for (let ZG = this.activeTo.length - 1; ZG >= 0 && this.activeTo[ZG] > GG; ZG--) bG++;
        return bG
      }
    }

    function Db(GG, bG, ZG, wG, SG, LG) {
      GG.goto(bG), ZG.goto(wG);
      let yG = wG + SG,
        kG = wG,
        UG = wG - bG,
        YG = !!LG.boundChange;
      for (let VG = !1;;) {
        let bG = GG.to + UG - ZG.to,
          wG = bG || GG.endSide - ZG.endSide,
          SG = wG < 0 ? GG.to + UG : ZG.to,
          pG = Math.min(SG, yG);
        if (GG.point || ZG.point ? (GG.point && ZG.point && Mb(GG.point, ZG.point) && Nb(GG.activeForPoint(GG.to), ZG.activeForPoint(ZG.to)) || LG.comparePoint(kG, pG, GG.point, ZG.point), VG = !1) : (VG && LG.boundChange(kG), pG > kG && !Nb(GG.active, ZG.active) && LG.compareRange(kG, pG, GG.active, ZG.active), YG && pG < yG && (bG || GG.openEnd(SG) != ZG.openEnd(SG)) && (VG = !0)), SG > yG) break;
        kG = SG, wG <= 0 && GG.next(), wG >= 0 && ZG.next()
      }
    }

    function Nb(GG, bG) {
      if (GG.length != bG.length) return !1;
      for (let ZG = 0; ZG < GG.length; ZG++)
        if (GG[ZG] != bG[ZG] && !Mb(GG[ZG], bG[ZG])) return !1;
      return !0
    }

    function Ob(GG, bG) {
      for (let ZG = bG, wG = GG.length - 1; ZG < wG; ZG++) GG[ZG] = GG[ZG + 1];
      GG.pop()
    }

    function xb(GG, bG, ZG) {
      for (let wG = GG.length - 1; wG >= bG; wG--) GG[wG + 1] = GG[wG];
      GG[bG] = ZG
    }

    function Bb(GG, bG) {
      let ZG = -1,
        wG = 1e9;
      for (let SG = 0; SG < bG.length; SG++)(bG[SG] - wG || GG[SG].endSide - GG[ZG].endSide) < 0 && (ZG = SG, wG = bG[SG]);
      return ZG
    }

    function GZ(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : GG.length,
        wG = 0;
      for (let SG = 0; SG < ZG && SG < GG.length;) 9 == GG.charCodeAt(SG) ? (wG += bG - wG % bG, SG++) : (wG++, SG = CG(GG, SG));
      return wG
    }

    function bZ(GG, bG, ZG, wG) {
      for (let SG = 0, LG = 0;;) {
        if (LG >= bG) return SG;
        if (SG == GG.length) break;
        LG += 9 == GG.charCodeAt(SG) ? ZG - LG % ZG : 1, SG = CG(GG, SG)
      }
      return !0 === wG ? -1 : GG.length
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);