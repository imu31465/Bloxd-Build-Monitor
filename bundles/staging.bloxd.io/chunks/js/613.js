export const id = 613;
export const ids = [613];
export const modules = {
  53317: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => UJ,
      e: () => xR,
      ChangeSet: () => NR,
      i: () => vJ,
      k: () => zR,
      o: () => DJ,
      r: () => dR,
      u: () => OR,
      y: () => tJ,
      E: () => zJ,
      C: () => SJ,
      I: () => oJ,
      K: () => CJ,
      L: () => sR,
      N: () => aR,
      R: () => XJ,
      V: () => pR,
      Y: () => bR,
      ab: () => HJ,
      bb: () => RG,
      eb: () => lR,
      hb: () => JG,
      jb: () => gR
    });
    let yR = [],
      tR = [];

    function uR(RR) {
      if (RR < 768) return !1;
      for (let JR = 0, GR = yR.length;;) {
        let uR = JR + GR >> 1;
        if (RR < yR[uR]) GR = uR;
        else {
          if (!(RR >= tR[uR])) return !0;
          JR = uR + 1
        }
        if (JR == GR) return !1
      }
    }

    function ZR(RR) {
      return RR >= 127462 && RR <= 127487
    }(() => {
      let RR = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((RR => RR ? parseInt(RR, 36) : 1));
      for (let JR = 0, GR = 0; JR < RR.length; JR++)(JR % 2 ? tR : yR).push(GR += RR[JR])
    })();
    const qR = 8205;

    function iR(RR, JR) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? fR : VR)(RR, JR, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function fR(RR, JR, GR) {
      if (JR == RR.length) return JR;
      JR && wR(RR.charCodeAt(JR)) && rR(RR.charCodeAt(JR - 1)) && JR--;
      let yR = KR(RR, JR);
      for (JR += eR(yR); JR < RR.length;) {
        let tR = KR(RR, JR);
        if (yR == qR || tR == qR || GR && uR(tR)) JR += eR(tR), yR = tR;
        else {
          if (!ZR(tR)) break;
          {
            let GR = 0,
              yR = JR - 2;
            for (; yR >= 0 && ZR(KR(RR, yR));) GR++, yR -= 2;
            if (GR % 2 == 0) break;
            JR += 2
          }
        }
      }
      return JR
    }

    function VR(RR, JR, GR) {
      for (; JR > 0;) {
        let yR = fR(RR, JR - 2, GR);
        if (yR < JR) return yR;
        JR--
      }
      return 0
    }

    function KR(RR, JR) {
      let GR = RR.charCodeAt(JR);
      if (!rR(GR) || JR + 1 == RR.length) return GR;
      let yR = RR.charCodeAt(JR + 1);
      return wR(yR) ? yR - 56320 + (GR - 55296 << 10) + 65536 : GR
    }

    function wR(RR) {
      return RR >= 56320 && RR < 57344
    }

    function rR(RR) {
      return RR >= 55296 && RR < 56320
    }

    function eR(RR) {
      return RR < 65536 ? 1 : 2
    }
    class aR {
      lineAt(RR) {
        if (RR < 0 || RR > this.length) throw new RangeError(`Invalid position ${RR} in document of length ${this.length}`);
        return this.lineInner(RR, !1, 1, 0)
      }
      line(RR) {
        if (RR < 1 || RR > this.lines) throw new RangeError(`Invalid line number ${RR} in ${this.lines}-line document`);
        return this.lineInner(RR, !0, 1, 0)
      }
      replace(RR, JR, GR) {
        [RR, JR] = BR(this, RR, JR);
        let yR = [];
        return this.decompose(0, RR, yR, 2), GR.length && GR.decompose(0, GR.length, yR, 3), this.decompose(JR, this.length, yR, 1), nR.from(yR, this.length - (JR - RR) + GR.length)
      }
      append(RR) {
        return this.replace(this.length, this.length, RR)
      }
      slice(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [RR, JR] = BR(this, RR, JR);
        let GR = [];
        return this.decompose(RR, JR, GR, 0), nR.from(GR, JR - RR)
      }
      eq(RR) {
        if (RR == this) return !0;
        if (RR.length != this.length || RR.lines != this.lines) return !1;
        let JR = this.scanIdentical(RR, 1),
          GR = this.length - this.scanIdentical(RR, -1),
          yR = new AR(this),
          tR = new AR(RR);
        for (let uR = JR, ZR = JR;;) {
          if (yR.next(uR), tR.next(uR), uR = 0, yR.lineBreak != tR.lineBreak || yR.done != tR.done || yR.value != tR.value) return !1;
          if (ZR += yR.value.length, yR.done || ZR >= GR) return !0
        }
      }
      iter() {
        return new AR(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new CR(this, RR, JR)
      }
      iterLines(RR, JR) {
        let GR;
        if (null == RR) GR = this.iter();
        else {
          null == JR && (JR = this.lines + 1);
          let yR = this.line(RR).from;
          GR = this.iterRange(yR, Math.max(yR, JR == this.lines + 1 ? this.length : JR <= 1 ? 0 : this.line(JR - 1).to))
        }
        return new XR(GR)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let RR = [];
        return this.flatten(RR), RR
      }
      constructor() {}
      static of (RR) {
        if (0 == RR.length) throw new RangeError("A document must have at least one line");
        return 1 != RR.length || RR[0] ? RR.length <= 32 ? new LR(RR) : nR.from(LR.split(RR, [])) : aR.empty
      }
    }
    class LR extends aR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(RR) {
          let JR = -1;
          for (let GR of RR) JR += GR.length + 1;
          return JR
        }(RR);
        super(), this.text = RR, this.length = JR
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(RR, JR, GR, yR) {
        for (let tR = 0;; tR++) {
          let uR = this.text[tR],
            ZR = yR + uR.length;
          if ((JR ? GR : ZR) >= RR) return new MR(yR, ZR, GR, uR);
          yR = ZR + 1, GR++
        }
      }
      decompose(RR, JR, GR, yR) {
        let tR = RR <= 0 && JR >= this.length ? this : new LR(WR(this.text, RR, JR), Math.min(JR, this.length) - Math.max(0, RR));
        if (1 & yR) {
          let RR = GR.pop(),
            JR = UR(tR.text, RR.text.slice(), 0, tR.length);
          if (JR.length <= 32) GR.push(new LR(JR, RR.length + tR.length));
          else {
            let RR = JR.length >> 1;
            GR.push(new LR(JR.slice(0, RR)), new LR(JR.slice(RR)))
          }
        } else GR.push(tR)
      }
      replace(RR, JR, GR) {
        if (!(GR instanceof LR)) return super.replace(RR, JR, GR);
        [RR, JR] = BR(this, RR, JR);
        let yR = UR(this.text, UR(GR.text, WR(this.text, 0, RR)), JR),
          tR = this.length + GR.length - (JR - RR);
        return yR.length <= 32 ? new LR(yR, tR) : nR.from(LR.split(yR, []), tR)
      }
      sliceString(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [RR, JR] = BR(this, RR, JR);
        let yR = "";
        for (let tR = 0, uR = 0; tR <= JR && uR < this.text.length; uR++) {
          let ZR = this.text[uR],
            qR = tR + ZR.length;
          tR > RR && uR && (yR += GR), RR < qR && JR > tR && (yR += ZR.slice(Math.max(0, RR - tR), JR - tR)), tR = qR + 1
        }
        return yR
      }
      flatten(RR) {
        for (let JR of this.text) RR.push(JR)
      }
      scanIdentical() {
        return 0
      }
      static split(RR, JR) {
        let GR = [],
          yR = -1;
        for (let tR of RR) GR.push(tR), yR += tR.length + 1, 32 == GR.length && (JR.push(new LR(GR, yR)), GR = [], yR = -1);
        return yR > -1 && JR.push(new LR(GR, yR)), JR
      }
    }
    class nR extends aR {
      constructor(RR, JR) {
        super(), this.children = RR, this.length = JR, this.lines = 0;
        for (let GR of RR) this.lines += GR.lines
      }
      lineInner(RR, JR, GR, yR) {
        for (let tR = 0;; tR++) {
          let uR = this.children[tR],
            ZR = yR + uR.length,
            qR = GR + uR.lines - 1;
          if ((JR ? qR : ZR) >= RR) return uR.lineInner(RR, JR, GR, yR);
          yR = ZR + 1, GR = qR + 1
        }
      }
      decompose(RR, JR, GR, yR) {
        for (let tR = 0, uR = 0; uR <= JR && tR < this.children.length; tR++) {
          let ZR = this.children[tR],
            qR = uR + ZR.length;
          if (RR <= qR && JR >= uR) {
            let tR = yR & ((uR <= RR ? 1 : 0) | (qR >= JR ? 2 : 0));
            uR >= RR && qR <= JR && !tR ? GR.push(ZR) : ZR.decompose(RR - uR, JR - uR, GR, tR)
          }
          uR = qR + 1
        }
      }
      replace(RR, JR, GR) {
        if ([RR, JR] = BR(this, RR, JR), GR.lines < this.lines)
          for (let yR = 0, tR = 0; yR < this.children.length; yR++) {
            let uR = this.children[yR],
              ZR = tR + uR.length;
            if (RR >= tR && JR <= ZR) {
              let qR = uR.replace(RR - tR, JR - tR, GR),
                iR = this.lines - uR.lines + qR.lines;
              if (qR.lines < iR >> 4 && qR.lines > iR >> 6) {
                let tR = this.children.slice();
                return tR[yR] = qR, new nR(tR, this.length - (JR - RR) + GR.length)
              }
              return super.replace(tR, ZR, qR)
            }
            tR = ZR + 1
          }
        return super.replace(RR, JR, GR)
      }
      sliceString(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [RR, JR] = BR(this, RR, JR);
        let yR = "";
        for (let tR = 0, uR = 0; tR < this.children.length && uR <= JR; tR++) {
          let ZR = this.children[tR],
            qR = uR + ZR.length;
          uR > RR && tR && (yR += GR), RR < qR && JR > uR && (yR += ZR.sliceString(RR - uR, JR - uR, GR)), uR = qR + 1
        }
        return yR
      }
      flatten(RR) {
        for (let JR of this.children) JR.flatten(RR)
      }
      scanIdentical(RR, JR) {
        if (!(RR instanceof nR)) return 0;
        let GR = 0,
          [yR, tR, uR, ZR] = JR > 0 ? [0, 0, this.children.length, RR.children.length] : [this.children.length - 1, RR.children.length - 1, -1, -1];
        for (;; yR += JR, tR += JR) {
          if (yR == uR || tR == ZR) return GR;
          let qR = this.children[yR],
            iR = RR.children[tR];
          if (qR != iR) return GR + qR.scanIdentical(iR, JR);
          GR += qR.length + 1
        }
      }
      static from(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR.reduce(((RR, JR) => RR + JR.length + 1), -1),
          GR = 0;
        for (let wR of RR) GR += wR.lines;
        if (GR < 32) {
          let GR = [];
          for (let JR of RR) JR.flatten(GR);
          return new LR(GR, JR)
        }
        let yR = Math.max(32, GR >> 5),
          tR = yR << 1,
          uR = yR >> 1,
          ZR = [],
          qR = 0,
          iR = -1,
          fR = [];

        function VR(RR) {
          let JR;
          if (RR.lines > tR && RR instanceof nR)
            for (let GR of RR.children) VR(GR);
          else RR.lines > uR && (qR > uR || !qR) ? (KR(), ZR.push(RR)) : RR instanceof LR && qR && (JR = fR[fR.length - 1]) instanceof LR && RR.lines + JR.lines <= 32 ? (qR += RR.lines, iR += RR.length + 1, fR[fR.length - 1] = new LR(JR.text.concat(RR.text), JR.length + 1 + RR.length)) : (qR + RR.lines > yR && KR(), qR += RR.lines, iR += RR.length + 1, fR.push(RR))
        }

        function KR() {
          0 != qR && (ZR.push(1 == fR.length ? fR[0] : nR.from(fR, iR)), iR = -1, qR = fR.length = 0)
        }
        for (let wR of RR) VR(wR);
        return KR(), 1 == ZR.length ? ZR[0] : new nR(ZR, JR)
      }
    }

    function UR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let tR = 0, uR = 0, ZR = !0; uR < RR.length && tR <= yR; uR++) {
        let qR = RR[uR],
          iR = tR + qR.length;
        iR >= GR && (iR > yR && (qR = qR.slice(0, yR - tR)), tR < GR && (qR = qR.slice(GR - tR)), ZR ? (JR[JR.length - 1] += qR, ZR = !1) : JR.push(qR)), tR = iR + 1
      }
      return JR
    }

    function WR(RR, JR, GR) {
      return UR(RR, [""], JR, GR)
    }
    aR.empty = new LR([""], 0);
    class AR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = JR, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [RR], this.offsets = [JR > 0 ? 1 : (RR instanceof LR ? RR.text.length : RR.children.length) << 1]
      }
      nextInner(RR, JR) {
        for (this.done = this.lineBreak = !1;;) {
          let GR = this.nodes.length - 1,
            yR = this.nodes[GR],
            tR = this.offsets[GR],
            uR = tR >> 1,
            ZR = yR instanceof LR ? yR.text.length : yR.children.length;
          if (uR == (JR > 0 ? ZR : 0)) {
            if (0 == GR) return this.done = !0, this.value = "", this;
            JR > 0 && this.offsets[GR - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & tR) == (JR > 0 ? 0 : 1)) {
            if (this.offsets[GR] += JR, 0 == RR) return this.lineBreak = !0, this.value = "\n", this;
            RR--
          } else if (yR instanceof LR) {
            let tR = yR.text[uR + (JR < 0 ? -1 : 0)];
            if (this.offsets[GR] += JR, tR.length > Math.max(0, RR)) return this.value = 0 == RR ? tR : JR > 0 ? tR.slice(RR) : tR.slice(0, tR.length - RR), this;
            RR -= tR.length
          } else {
            let tR = yR.children[uR + (JR < 0 ? -1 : 0)];
            RR > tR.length ? (RR -= tR.length, this.offsets[GR] += JR) : (JR < 0 && this.offsets[GR]--, this.nodes.push(tR), this.offsets.push(JR > 0 ? 1 : (tR instanceof LR ? tR.text.length : tR.children.length) << 1))
          }
        }
      }
      next() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return RR < 0 && (this.nextInner(-RR, -this.dir), RR = this.value.length), this.nextInner(RR, this.dir)
      }
    }
    class CR {
      constructor(RR, JR, GR) {
        this.value = "", this.done = !1, this.cursor = new AR(RR, JR > GR ? -1 : 1), this.pos = JR > GR ? RR.length : 0, this.from = Math.min(JR, GR), this.to = Math.max(JR, GR)
      }
      nextInner(RR, JR) {
        if (JR < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        RR += Math.max(0, JR < 0 ? this.pos - this.to : this.from - this.pos);
        let GR = JR < 0 ? this.pos - this.from : this.to - this.pos;
        RR > GR && (RR = GR), GR -= RR;
        let {
          value: yR
        } = this.cursor.next(RR);
        return this.pos += (yR.length + RR) * JR, this.value = yR.length <= GR ? yR : JR < 0 ? yR.slice(yR.length - GR) : yR.slice(0, GR), this.done = !this.value, this
      }
      next() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return RR < 0 ? RR = Math.max(RR, this.from - this.pos) : RR > 0 && (RR = Math.min(RR, this.to - this.pos)), this.nextInner(RR, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class XR {
      constructor(RR) {
        this.inner = RR, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: JR,
            lineBreak: GR,
            value: yR
          } = this.inner.next(RR);
        return JR && this.afterBreak ? (this.value = "", this.afterBreak = !1) : JR ? (this.done = !0, this.value = "") : GR ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = yR, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (aR.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, AR.prototype[Symbol.iterator] = CR.prototype[Symbol.iterator] = XR.prototype[Symbol.iterator] = function() {
      return this
    });
    class MR {
      constructor(RR, JR, GR, yR) {
        this.from = RR, this.to = JR, this.number = GR, this.text = yR
      }
      get length() {
        return this.to - this.from
      }
    }

    function BR(RR, JR, GR) {
      return [JR = Math.max(0, Math.min(RR.length, JR)), Math.max(JR, Math.min(RR.length, GR))]
    }

    function lR(RR, JR) {
      return iR(RR, JR, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function pR(RR, JR) {
      let GR = RR.charCodeAt(JR);
      if (!((yR = GR) >= 55296 && yR < 56320) || JR + 1 == RR.length) return GR;
      var yR;
      let tR = RR.charCodeAt(JR + 1);
      return function(RR) {
        return RR >= 56320 && RR < 57344
      }(tR) ? tR - 56320 + (GR - 55296 << 10) + 65536 : GR
    }

    function gR(RR) {
      return RR <= 65535 ? String.fromCharCode(RR) : (RR -= 65536, String.fromCharCode(55296 + (RR >> 10), 56320 + (1023 & RR)))
    }

    function bR(RR) {
      return RR < 65536 ? 1 : 2
    }
    const vR = /\r\n?|\n/;
    var OR = function(RR) {
      return RR[RR.Simple = 0] = "Simple", RR[RR.TrackDel = 1] = "TrackDel", RR[RR.TrackBefore = 2] = "TrackBefore", RR[RR.TrackAfter = 3] = "TrackAfter", RR
    }(OR || (OR = {}));
    class xR {
      constructor(RR) {
        this.sections = RR
      }
      get length() {
        let RR = 0;
        for (let JR = 0; JR < this.sections.length; JR += 2) RR += this.sections[JR];
        return RR
      }
      get newLength() {
        let RR = 0;
        for (let JR = 0; JR < this.sections.length; JR += 2) {
          let GR = this.sections[JR + 1];
          RR += GR < 0 ? this.sections[JR] : GR
        }
        return RR
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(RR) {
        for (let JR = 0, GR = 0, yR = 0; JR < this.sections.length;) {
          let tR = this.sections[JR++],
            uR = this.sections[JR++];
          uR < 0 ? (RR(GR, yR, tR), yR += tR) : yR += uR, GR += tR
        }
      }
      iterChangedRanges(RR) {
        oR(this, RR, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let RR = [];
        for (let JR = 0; JR < this.sections.length;) {
          let GR = this.sections[JR++],
            yR = this.sections[JR++];
          yR < 0 ? RR.push(GR, yR) : RR.push(yR, GR)
        }
        return new xR(RR)
      }
      composeDesc(RR) {
        return this.empty ? RR : RR.empty ? this : PR(this, RR)
      }
      mapDesc(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return RR.empty ? this : cR(this, RR, JR)
      }
      mapPos(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : OR.Simple,
          yR = 0,
          tR = 0;
        for (let uR = 0; uR < this.sections.length;) {
          let ZR = this.sections[uR++],
            qR = this.sections[uR++],
            iR = yR + ZR;
          if (qR < 0) {
            if (iR > RR) return tR + (RR - yR);
            tR += ZR
          } else {
            if (GR != OR.Simple && iR >= RR && (GR == OR.TrackDel && yR < RR && iR > RR || GR == OR.TrackBefore && yR < RR || GR == OR.TrackAfter && iR > RR)) return null;
            if (iR > RR || iR == RR && JR < 0 && !ZR) return RR == yR || JR < 0 ? tR : tR + qR;
            tR += qR
          }
          yR = iR
        }
        if (RR > yR) throw new RangeError(`Position ${RR} is out of range for changeset of length ${yR}`);
        return tR
      }
      touchesRange(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR;
        for (let GR = 0, yR = 0; GR < this.sections.length && yR <= JR;) {
          let tR = yR + this.sections[GR++];
          if (this.sections[GR++] >= 0 && yR <= JR && tR >= RR) return !(yR < RR && tR > JR) || "cover";
          yR = tR
        }
        return !1
      }
      toString() {
        let RR = "";
        for (let JR = 0; JR < this.sections.length;) {
          let GR = this.sections[JR++],
            yR = this.sections[JR++];
          RR += (RR ? " " : "") + GR + (yR >= 0 ? ":" + yR : "")
        }
        return RR
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(RR) {
        if (!Array.isArray(RR) || RR.length % 2 || RR.some((RR => "number" != typeof RR))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new xR(RR)
      }
      static create(RR) {
        return new xR(RR)
      }
    }
    class NR extends xR {
      constructor(RR, JR) {
        super(RR), this.inserted = JR
      }
      apply(RR) {
        if (this.length != RR.length) throw new RangeError("Applying change set to a document with the wrong length");
        return oR(this, ((JR, GR, yR, tR, uR) => RR = RR.replace(yR, yR + (GR - JR), uR)), !1), RR
      }
      mapDesc(RR) {
        return cR(this, RR, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(RR) {
        let JR = this.sections.slice(),
          GR = [];
        for (let yR = 0, tR = 0; yR < JR.length; yR += 2) {
          let uR = JR[yR],
            ZR = JR[yR + 1];
          if (ZR >= 0) {
            JR[yR] = ZR, JR[yR + 1] = uR;
            let qR = yR >> 1;
            for (; GR.length < qR;) GR.push(aR.empty);
            GR.push(uR ? RR.slice(tR, tR + uR) : aR.empty)
          }
          tR += uR
        }
        return new NR(JR, GR)
      }
      compose(RR) {
        return this.empty ? RR : RR.empty ? this : PR(this, RR, !0)
      }
      map(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return RR.empty ? this : cR(this, RR, JR, !0)
      }
      iterChanges(RR) {
        oR(this, RR, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return xR.create(this.sections)
      }
      filter(RR) {
        let JR = [],
          GR = [],
          yR = [],
          tR = new IR(this);
        RR: for (let uR = 0, ZR = 0;;) {
          let qR = uR == RR.length ? 1e9 : RR[uR++];
          for (; ZR < qR || ZR == qR && 0 == tR.len;) {
            if (tR.done) break RR;
            let RR = Math.min(tR.len, qR - ZR);
            DR(yR, RR, -1);
            let uR = -1 == tR.ins ? -1 : 0 == tR.off ? tR.ins : 0;
            DR(JR, RR, uR), uR > 0 && HR(GR, JR, tR.text), tR.forward(RR), ZR += RR
          }
          let iR = RR[uR++];
          for (; ZR < iR;) {
            if (tR.done) break RR;
            let RR = Math.min(tR.len, iR - ZR);
            DR(JR, RR, -1), DR(yR, RR, -1 == tR.ins ? -1 : 0 == tR.off ? tR.ins : 0), tR.forward(RR), ZR += RR
          }
        }
        return {
          changes: new NR(JR, GR),
          filtered: xR.create(yR)
        }
      }
      toJSON() {
        let RR = [];
        for (let JR = 0; JR < this.sections.length; JR += 2) {
          let GR = this.sections[JR],
            yR = this.sections[JR + 1];
          yR < 0 ? RR.push(GR) : 0 == yR ? RR.push([GR]) : RR.push([GR].concat(this.inserted[JR >> 1].toJSON()))
        }
        return RR
      }
      static of (RR, JR, GR) {
        let yR = [],
          tR = [],
          uR = 0,
          ZR = null;

        function qR() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !yR.length) return;
          uR < JR && DR(yR, JR - uR, -1);
          let RR = new NR(yR, tR);
          ZR = ZR ? ZR.compose(RR.map(ZR)) : RR, yR = [], tR = [], uR = 0
        }
        return function RR(iR) {
          if (Array.isArray(iR))
            for (let JR of iR) RR(JR);
          else if (iR instanceof NR) {
            if (iR.length != JR) throw new RangeError(`Mismatched change set length (got ${iR.length}, expected ${JR})`);
            qR(), ZR = ZR ? ZR.compose(iR.map(ZR)) : iR
          } else {
            let {
              from: RR,
              to: ZR = RR,
              insert: fR
            } = iR;
            if (RR > ZR || RR < 0 || ZR > JR) throw new RangeError(`Invalid change range ${RR} to ${ZR} (in doc of length ${JR})`);
            let VR = fR ? "string" == typeof fR ? aR.of(fR.split(GR || vR)) : fR : aR.empty,
              KR = VR.length;
            if (RR == ZR && 0 == KR) return;
            RR < uR && qR(), RR > uR && DR(yR, RR - uR, -1), DR(yR, ZR - RR, KR), HR(tR, yR, VR), uR = ZR
          }
        }(RR), qR(!ZR), ZR
      }
      static empty(RR) {
        return new NR(RR ? [RR, -1] : [], [])
      }
      static fromJSON(RR) {
        if (!Array.isArray(RR)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let JR = [],
          GR = [];
        for (let yR = 0; yR < RR.length; yR++) {
          let tR = RR[yR];
          if ("number" == typeof tR) JR.push(tR, -1);
          else {
            if (!Array.isArray(tR) || "number" != typeof tR[0] || tR.some(((RR, JR) => JR && "string" != typeof RR))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == tR.length) JR.push(tR[0], 0);
            else {
              for (; GR.length < yR;) GR.push(aR.empty);
              GR[yR] = aR.of(tR.slice(1)), JR.push(tR[0], GR[yR].length)
            }
          }
        }
        return new NR(JR, GR)
      }
      static createSet(RR, JR) {
        return new NR(RR, JR)
      }
    }

    function DR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == JR && GR <= 0) return;
      let tR = RR.length - 2;
      tR >= 0 && GR <= 0 && GR == RR[tR + 1] ? RR[tR] += JR : tR >= 0 && 0 == JR && 0 == RR[tR] ? RR[tR + 1] += GR : yR ? (RR[tR] += JR, RR[tR + 1] += GR) : RR.push(JR, GR)
    }

    function HR(RR, JR, GR) {
      if (0 == GR.length) return;
      let yR = JR.length - 2 >> 1;
      if (yR < RR.length) RR[RR.length - 1] = RR[RR.length - 1].append(GR);
      else {
        for (; RR.length < yR;) RR.push(aR.empty);
        RR.push(GR)
      }
    }

    function oR(RR, JR, GR) {
      let yR = RR.inserted;
      for (let tR = 0, uR = 0, ZR = 0; ZR < RR.sections.length;) {
        let qR = RR.sections[ZR++],
          iR = RR.sections[ZR++];
        if (iR < 0) tR += qR, uR += qR;
        else {
          let fR = tR,
            VR = uR,
            KR = aR.empty;
          for (; fR += qR, VR += iR, iR && yR && (KR = KR.append(yR[ZR - 2 >> 1])), !(GR || ZR == RR.sections.length || RR.sections[ZR + 1] < 0);) qR = RR.sections[ZR++], iR = RR.sections[ZR++];
          JR(tR, fR, uR, VR, KR), tR = fR, uR = VR
        }
      }
    }

    function cR(RR, JR, GR) {
      let yR = [],
        tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        uR = new IR(RR),
        ZR = new IR(JR),
        qR = 0;
      for (let iR = -1;;) {
        if (++qR > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (uR.done && ZR.len || ZR.done && uR.len) throw new Error("Mismatched change set lengths");
        if (-1 == uR.ins && -1 == ZR.ins) {
          let RR = Math.min(uR.len, ZR.len);
          DR(yR, RR, -1), uR.forward(RR), ZR.forward(RR)
        } else if (ZR.ins >= 0 && (uR.ins < 0 || iR == uR.i || 0 == uR.off && (ZR.len < uR.len || ZR.len == uR.len && !GR))) {
          let RR = ZR.len;
          for (DR(yR, ZR.ins, -1); RR;) {
            if (++qR > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let JR = Math.min(uR.len, RR);
            uR.ins >= 0 && iR < uR.i && uR.len <= JR && (DR(yR, 0, uR.ins), tR && HR(tR, yR, uR.text), iR = uR.i), uR.forward(JR), RR -= JR
          }
          ZR.next()
        } else {
          if (!(uR.ins >= 0)) {
            if (uR.done && ZR.done) return tR ? NR.createSet(yR, tR) : xR.create(yR);
            throw new Error("Mismatched change set lengths")
          } {
            let RR = 0,
              JR = uR.len;
            for (; JR;) {
              if (++qR > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == ZR.ins) {
                let GR = Math.min(JR, ZR.len);
                RR += GR, JR -= GR, ZR.forward(GR)
              } else {
                if (!(0 == ZR.ins && ZR.len < JR)) break;
                JR -= ZR.len, ZR.next()
              }
            }
            DR(yR, RR, iR < uR.i ? uR.ins : 0), tR && iR < uR.i && HR(tR, yR, uR.text), iR = uR.i, uR.forward(uR.len - JR)
          }
        }
      }
    }

    function PR(RR, JR) {
      let GR = [],
        yR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        tR = new IR(RR),
        uR = new IR(JR),
        ZR = 0;
      for (let qR = !1;;) {
        if (++ZR > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (tR.done && uR.done) return yR ? NR.createSet(GR, yR) : xR.create(GR);
        if (0 == tR.ins) DR(GR, tR.len, 0, qR), tR.next();
        else if (0 != uR.len || uR.done) {
          if (tR.done || uR.done) throw new Error("Mismatched change set lengths");
          {
            let RR = Math.min(tR.len2, uR.len),
              JR = GR.length;
            if (-1 == tR.ins) {
              let JR = -1 == uR.ins ? -1 : uR.off ? 0 : uR.ins;
              DR(GR, RR, JR, qR), yR && JR && HR(yR, GR, uR.text)
            } else - 1 == uR.ins ? (DR(GR, tR.off ? 0 : tR.len, RR, qR), yR && HR(yR, GR, tR.textBit(RR))) : (DR(GR, tR.off ? 0 : tR.len, uR.off ? 0 : uR.ins, qR), yR && !uR.off && HR(yR, GR, uR.text));
            qR = (tR.ins > RR || uR.ins >= 0 && uR.len > RR) && (qR || GR.length > JR), tR.forward2(RR), uR.forward(RR)
          }
        } else DR(GR, 0, uR.ins, qR), yR && HR(yR, GR, uR.text), uR.next()
      }
    }
    class IR {
      constructor(RR) {
        this.set = RR, this.i = 0, this.next()
      }
      next() {
        let {
          sections: RR
        } = this.set;
        this.i < RR.length ? (this.len = RR[this.i++], this.ins = RR[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: RR
        } = this.set, JR = this.i - 2 >> 1;
        return JR >= RR.length ? aR.empty : RR[JR]
      }
      textBit(RR) {
        let {
          inserted: JR
        } = this.set, GR = this.i - 2 >> 1;
        return GR >= JR.length && !RR ? aR.empty : JR[GR].slice(this.off, null == RR ? void 0 : this.off + RR)
      }
      forward(RR) {
        RR == this.len ? this.next() : (this.len -= RR, this.off += RR)
      }
      forward2(RR) {
        -1 == this.ins ? this.forward(RR) : RR == this.ins ? this.next() : (this.ins -= RR, this.off += RR)
      }
    }
    class mR {
      constructor(RR, JR, GR) {
        this.from = RR, this.to = JR, this.flags = GR
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
        let RR = 7 & this.flags;
        return 7 == RR ? null : RR
      }
      get goalColumn() {
        let RR = this.flags >> 6;
        return 16777215 == RR ? void 0 : RR
      }
      map(RR) {
        let JR, GR, yR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? JR = GR = RR.mapPos(this.from, yR) : (JR = RR.mapPos(this.from, 1), GR = RR.mapPos(this.to, -1)), JR == this.from && GR == this.to ? this : new mR(JR, GR, this.flags)
      }
      extend(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (RR <= this.anchor && JR >= this.anchor) return zR.range(RR, JR, void 0, void 0, GR);
        let yR = Math.abs(RR - this.anchor) > Math.abs(JR - this.anchor) ? RR : JR;
        return zR.range(this.anchor, yR, void 0, void 0, GR)
      }
      eq(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == RR.anchor && this.head == RR.head && this.goalColumn == RR.goalColumn && (!JR || !this.empty || this.assoc == RR.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(RR) {
        if (!RR || "number" != typeof RR.anchor || "number" != typeof RR.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return zR.range(RR.anchor, RR.head)
      }
      static create(RR, JR, GR) {
        return new mR(RR, JR, GR)
      }
    }
    class zR {
      constructor(RR, JR) {
        this.WL = RR, this.mainIndex = JR
      }
      map(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return RR.empty ? this : zR.create(this.WL.map((GR => GR.map(RR, JR))), this.mainIndex)
      }
      eq(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.WL.length != RR.WL.length || this.mainIndex != RR.mainIndex) return !1;
        for (let GR = 0; GR < this.WL.length; GR++)
          if (!this.WL[GR].eq(RR.WL[GR], JR)) return !1;
        return !0
      }
      get main() {
        return this.WL[this.mainIndex]
      }
      asSingle() {
        return 1 == this.WL.length ? this : new zR([this.main], 0)
      }
      addRange(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return zR.create([RR].concat(this.WL), JR ? 0 : this.mainIndex + 1)
      }
      replaceRange(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          GR = this.WL.slice();
        return GR[JR] = RR, zR.create(GR, this.mainIndex)
      }
      toJSON() {
        return {
          WL: this.WL.map((RR => RR.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(RR) {
        if (!RR || !Array.isArray(RR.WL) || "number" != typeof RR.main || RR.main >= RR.WL.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new zR(RR.WL.map((RR => mR.fromJSON(RR))), RR.main)
      }
      static single(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR;
        return new zR([zR.range(RR, JR)], 0)
      }
      static create(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == RR.length) throw new RangeError("A selection needs at least one range");
        for (let GR = 0, yR = 0; yR < RR.length; yR++) {
          let tR = RR[yR];
          if (tR.empty ? tR.from <= GR : tR.from < GR) return zR.normalized(RR.slice(), JR);
          GR = tR.to
        }
        return new zR(RR, JR)
      }
      static cursor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        return mR.create(RR, RR, (0 == JR ? 0 : JR < 0 ? 8 : 16) | (null == GR ? 7 : Math.min(6, GR)) | (null !== yR && void 0 !== yR ? yR : 16777215) << 6)
      }
      static range(RR, JR, GR, yR, tR) {
        let uR = (null !== GR && void 0 !== GR ? GR : 16777215) << 6 | (null == yR ? 7 : Math.min(6, yR));
        return tR || RR == JR || (tR = JR < RR ? 1 : -1), JR < RR ? mR.create(JR, RR, 48 | uR) : mR.create(RR, JR, (tR ? tR < 0 ? 8 : 16 : 0) | uR)
      }
      static normalized(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = RR[JR];
        RR.sort(((RR, JR) => RR.from - JR.from)), JR = RR.indexOf(GR);
        for (let yR = 1; yR < RR.length; yR++) {
          let GR = RR[yR],
            tR = RR[yR - 1];
          if (GR.empty ? GR.from <= tR.to : GR.from < tR.to) {
            let uR = tR.from,
              ZR = Math.max(GR.to, tR.to);
            yR <= JR && JR--, RR.splice(--yR, 2, GR.anchor > GR.head ? zR.range(ZR, uR) : zR.range(uR, ZR))
          }
        }
        return new zR(RR, JR)
      }
    }

    function SR(RR, JR) {
      for (let GR of RR.WL)
        if (GR.to > JR) throw new RangeError("Selection points outside of document")
    }
    let jR = 0;
    class dR {
      constructor(RR, JR, GR, yR, tR) {
        this.combine = RR, this.compareInput = JR, this.compare = GR, this.isStatic = yR, this.id = jR++, this.default = RR([]), this.extensions = "function" == typeof tR ? tR(this) : tR
      }
      get reader() {
        return this
      }
      static define() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new dR(RR.combine || (RR => RR), RR.compareInput || ((RR, JR) => RR === JR), RR.compare || (RR.combine ? (RR, JR) => RR === JR : ER), !!RR.static, RR.enables)
      }
      of(RR) {
        return new YR([], this, 0, RR)
      }
      compute(RR, JR) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new YR(RR, this, 1, JR)
      }
      computeN(RR, JR) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new YR(RR, this, 2, JR)
      }
      from(RR, JR) {
        return JR || (JR = RR => RR), this.compute([RR], (GR => JR(GR.field(RR))))
      }
    }

    function ER(RR, JR) {
      return RR == JR || RR.length == JR.length && RR.every(((RR, GR) => RR === JR[GR]))
    }
    class YR {
      constructor(RR, JR, GR, yR) {
        this.dependencies = RR, this.facet = JR, this.type = GR, this.value = yR, this.id = jR++
      }
      dynamicSlot(RR) {
        var JR;
        let GR = this.value,
          yR = this.facet.compareInput,
          tR = this.id,
          uR = RR[tR] >> 1,
          ZR = 2 == this.type,
          qR = !1,
          iR = !1,
          fR = [];
        for (let VR of this.dependencies) "doc" == VR ? qR = !0 : "selection" == VR ? iR = !0 : 0 == (1 & (null !== (JR = RR[VR.id]) && void 0 !== JR ? JR : 1)) && fR.push(RR[VR.id]);
        return {
          create: RR => (RR.values[uR] = GR(RR), 1),
          update(RR, JR) {
            if (qR && JR.docChanged || iR && (JR.docChanged || JR.selection) || QR(RR, fR)) {
              let JR = GR(RR);
              if (ZR ? !kR(JR, RR.values[uR], yR) : !yR(JR, RR.values[uR])) return RR.values[uR] = JR, 1
            }
            return 0
          },
          reconfigure: (RR, JR) => {
            let qR, iR = JR.config.address[tR];
            if (null != iR) {
              let tR = VJ(JR, iR);
              if (this.dependencies.every((GR => GR instanceof dR ? JR.facet(GR) === RR.facet(GR) : !(GR instanceof sR) || JR.field(GR, !1) == RR.field(GR, !1))) || (ZR ? kR(qR = GR(RR), tR, yR) : yR(qR = GR(RR), tR))) return RR.values[uR] = tR, 0
            } else qR = GR(RR);
            return RR.values[uR] = qR, 1
          }
        }
      }
    }

    function kR(RR, JR, GR) {
      if (RR.length != JR.length) return !1;
      for (let yR = 0; yR < RR.length; yR++)
        if (!GR(RR[yR], JR[yR])) return !1;
      return !0
    }

    function QR(RR, JR) {
      let GR = !1;
      for (let yR of JR) 1 & fJ(RR, yR) && (GR = !0);
      return GR
    }

    function FR(RR, JR, GR) {
      let yR = GR.map((JR => RR[JR.id])),
        tR = GR.map((RR => RR.type)),
        uR = yR.filter((RR => !(1 & RR))),
        ZR = RR[JR.id] >> 1;

      function qR(RR) {
        let GR = [];
        for (let JR = 0; JR < yR.length; JR++) {
          let uR = VJ(RR, yR[JR]);
          if (2 == tR[JR])
            for (let RR of uR) GR.push(RR);
          else GR.push(uR)
        }
        return JR.combine(GR)
      }
      return {
        create(RR) {
          for (let JR of yR) fJ(RR, JR);
          return RR.values[ZR] = qR(RR), 1
        },
        update(RR, GR) {
          if (!QR(RR, uR)) return 0;
          let yR = qR(RR);
          return JR.compare(yR, RR.values[ZR]) ? 0 : (RR.values[ZR] = yR, 1)
        },
        reconfigure(RR, tR) {
          let uR = QR(RR, yR),
            iR = tR.config.facets[JR.id],
            fR = tR.facet(JR);
          if (iR && !uR && ER(GR, iR)) return RR.values[ZR] = fR, 0;
          let VR = qR(RR);
          return JR.compare(VR, fR) ? (RR.values[ZR] = fR, 0) : (RR.values[ZR] = VR, 1)
        }
      }
    }
    const TR = dR.define({
      static: !0
    });
    class sR {
      constructor(RR, JR, GR, yR, tR) {
        this.id = RR, this.createF = JR, this.updateF = GR, this.compareF = yR, this.spec = tR, this.provides = void 0
      }
      static define(RR) {
        let JR = new sR(jR++, RR.create, RR.update, RR.compare || ((RR, JR) => RR === JR), RR);
        return RR.provide && (JR.provides = RR.provide(JR)), JR
      }
      create(RR) {
        let JR = RR.facet(TR).find((RR => RR.field == this));
        return ((null === JR || void 0 === JR ? void 0 : JR.create) || this.createF)(RR)
      }
      slot(RR) {
        let JR = RR[this.id] >> 1;
        return {
          create: RR => (RR.values[JR] = this.create(RR), 1),
          update: (RR, GR) => {
            let yR = RR.values[JR],
              tR = this.updateF(yR, GR);
            return this.compareF(yR, tR) ? 0 : (RR.values[JR] = tR, 1)
          },
          reconfigure: (RR, GR) => {
            let yR, tR = RR.facet(TR),
              uR = GR.facet(TR);
            return (yR = tR.find((RR => RR.field == this))) && yR != uR.find((RR => RR.field == this)) ? (RR.values[JR] = yR.create(RR), 1) : null != GR.config.address[this.id] ? (RR.values[JR] = GR.field(this), 0) : (RR.values[JR] = this.create(RR), 1)
          }
        }
      }
      init(RR) {
        return [this, TR.of({
          field: this,
          create: RR
        })]
      }
      get extension() {
        return this
      }
    }
    const hR = 4,
      RJ = 3,
      JJ = 2,
      GJ = 1;

    function yJ(RR) {
      return JR => new uJ(JR, RR)
    }
    const tJ = {
      highest: yJ(0),
      high: yJ(GJ),
      default: yJ(JJ),
      low: yJ(RJ),
      lowest: yJ(hR)
    };
    class uJ {
      constructor(RR, JR) {
        this.inner = RR, this.prec = JR
      }
    }
    class ZJ {
      of(RR) {
        return new qJ(this, RR)
      }
      reconfigure(RR) {
        return ZJ.reconfigure.of({
          compartment: this,
          extension: RR
        })
      }
      get(RR) {
        return RR.config.compartments.get(this)
      }
    }
    class qJ {
      constructor(RR, JR) {
        this.compartment = RR, this.inner = JR
      }
    }
    class iJ {
      constructor(RR, JR, GR, yR, tR, uR) {
        for (this.base = RR, this.compartments = JR, this.dynamicSlots = GR, this.address = yR, this.staticValues = tR, this.facets = uR, this.statusTemplate = []; this.statusTemplate.length < GR.length;) this.statusTemplate.push(0)
      }
      staticFacet(RR) {
        let JR = this.address[RR.id];
        return null == JR ? RR.default : this.staticValues[JR >> 1]
      }
      static resolve(RR, JR, GR) {
        let yR = [],
          tR = Object.create(null),
          uR = new Map;
        for (let KR of function(RR, JR, GR) {
            let yR = [
                [],
                [],
                [],
                [],
                []
              ],
              tR = new Map;

            function uR(RR, ZR) {
              let qR = tR.get(RR);
              if (null != qR) {
                if (qR <= ZR) return;
                let JR = yR[qR].indexOf(RR);
                JR > -1 && yR[qR].splice(JR, 1), RR instanceof qJ && GR.delete(RR.compartment)
              }
              if (tR.set(RR, ZR), Array.isArray(RR))
                for (let JR of RR) uR(JR, ZR);
              else if (RR instanceof qJ) {
                if (GR.has(RR.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let yR = JR.get(RR.compartment) || RR.inner;
                GR.set(RR.compartment, yR), uR(yR, ZR)
              } else if (RR instanceof uJ) uR(RR.inner, RR.prec);
              else if (RR instanceof sR) yR[ZR].push(RR), RR.provides && uR(RR.provides, ZR);
              else if (RR instanceof YR) yR[ZR].push(RR), RR.facet.extensions && uR(RR.facet.extensions, JJ);
              else {
                let JR = RR.extension;
                if (!JR) throw new Error(`Unrecognized extension value in extension set (${RR}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                uR(JR, ZR)
              }
            }
            return uR(RR, JJ), yR.reduce(((RR, JR) => RR.concat(JR)))
          }(RR, JR, uR)) KR instanceof sR ? yR.push(KR) : (tR[KR.facet.id] || (tR[KR.facet.id] = [])).push(KR);
        let ZR = Object.create(null),
          qR = [],
          iR = [];
        for (let KR of yR) ZR[KR.id] = iR.length << 1, iR.push((RR => KR.slot(RR)));
        let fR = null === GR || void 0 === GR ? void 0 : GR.config.facets;
        for (let KR in tR) {
          let RR = tR[KR],
            JR = RR[0].facet,
            yR = fR && fR[KR] || [];
          if (RR.every((RR => 0 == RR.type)))
            if (ZR[JR.id] = qR.length << 1 | 1, ER(yR, RR)) qR.push(GR.facet(JR));
            else {
              let yR = JR.combine(RR.map((RR => RR.value)));
              qR.push(GR && JR.compare(yR, GR.facet(JR)) ? GR.facet(JR) : yR)
            }
          else {
            for (let JR of RR) 0 == JR.type ? (ZR[JR.id] = qR.length << 1 | 1, qR.push(JR.value)) : (ZR[JR.id] = iR.length << 1, iR.push((RR => JR.dynamicSlot(RR))));
            ZR[JR.id] = iR.length << 1, iR.push((GR => FR(GR, JR, RR)))
          }
        }
        let VR = iR.map((RR => RR(ZR)));
        return new iJ(RR, uR, VR, ZR, qR, tR)
      }
    }

    function fJ(RR, JR) {
      if (1 & JR) return 2;
      let GR = JR >> 1,
        yR = RR.status[GR];
      if (4 == yR) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & yR) return yR;
      RR.status[GR] = 4;
      let tR = RR.computeSlot(RR, RR.config.dynamicSlots[GR]);
      return RR.status[GR] = 2 | tR
    }

    function VJ(RR, JR) {
      return 1 & JR ? RR.config.staticValues[JR >> 1] : RR.values[JR >> 1]
    }
    const KJ = dR.define(),
      wJ = dR.define({
        combine: RR => RR.some((RR => RR)),
        static: !0
      }),
      rJ = dR.define({
        combine: RR => RR.length ? RR[0] : void 0,
        static: !0
      }),
      eJ = dR.define(),
      aJ = dR.define(),
      LJ = dR.define(),
      nJ = dR.define({
        combine: RR => !!RR.length && RR[0]
      });
    class UJ {
      constructor(RR, JR) {
        this.type = RR, this.value = JR
      }
      static define() {
        return new WJ
      }
    }
    class WJ {
      of(RR) {
        return new UJ(this, RR)
      }
    }
    class AJ {
      constructor(RR) {
        this.map = RR
      }
      of(RR) {
        return new CJ(this, RR)
      }
    }
    class CJ {
      constructor(RR, JR) {
        this.type = RR, this.value = JR
      }
      map(RR) {
        let JR = this.type.map(this.value, RR);
        return void 0 === JR ? void 0 : JR == this.value ? this : new CJ(this.type, JR)
      }
      is(RR) {
        return this.type == RR
      }
      static define() {
        return new AJ((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (RR => RR))
      }
      static mapEffects(RR, JR) {
        if (!RR.length) return RR;
        let GR = [];
        for (let yR of RR) {
          let RR = yR.map(JR);
          RR && GR.push(RR)
        }
        return GR
      }
    }
    CJ.reconfigure = CJ.define(), CJ.appendConfig = CJ.define();
    class XJ {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.startState = RR, this.changes = JR, this.selection = GR, this.effects = yR, this.annotations = tR, this.scrollIntoView = uR, this._doc = null, this._state = null, GR && SR(GR, JR.newLength), tR.some((RR => RR.type == XJ.time)) || (this.annotations = tR.concat(XJ.time.of(Date.now())))
      }
      static create(RR, JR, GR, yR, tR, uR) {
        return new XJ(RR, JR, GR, yR, tR, uR)
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
      annotation(RR) {
        for (let JR of this.annotations)
          if (JR.type == RR) return JR.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(RR) {
        let JR = this.annotation(XJ.userEvent);
        return !(!JR || !(JR == RR || JR.length > RR.length && JR.slice(0, RR.length) == RR && "." == JR[RR.length]))
      }
    }

    function MJ(RR, JR) {
      let GR = [];
      for (let yR = 0, tR = 0;;) {
        let uR, ZR;
        if (yR < RR.length && (tR == JR.length || JR[tR] >= RR[yR])) uR = RR[yR++], ZR = RR[yR++];
        else {
          if (!(tR < JR.length)) return GR;
          uR = JR[tR++], ZR = JR[tR++]
        }!GR.length || GR[GR.length - 1] < uR ? GR.push(uR, ZR) : GR[GR.length - 1] < ZR && (GR[GR.length - 1] = ZR)
      }
    }

    function BJ(RR, JR, GR) {
      var yR;
      let tR, uR, ZR;
      return GR ? (tR = JR.changes, uR = NR.empty(JR.changes.length), ZR = RR.changes.compose(JR.changes)) : (tR = JR.changes.map(RR.changes), uR = RR.changes.mapDesc(JR.changes, !0), ZR = RR.changes.compose(tR)), {
        changes: ZR,
        selection: JR.selection ? JR.selection.map(uR) : null === (yR = RR.selection) || void 0 === yR ? void 0 : yR.map(tR),
        effects: CJ.mapEffects(RR.effects, tR).concat(CJ.mapEffects(JR.effects, uR)),
        annotations: RR.annotations.length ? RR.annotations.concat(JR.annotations) : JR.annotations,
        scrollIntoView: RR.scrollIntoView || JR.scrollIntoView
      }
    }

    function lJ(RR, JR, GR) {
      let yR = JR.selection,
        tR = bJ(JR.annotations);
      return JR.userEvent && (tR = tR.concat(XJ.userEvent.of(JR.userEvent))), {
        changes: JR.changes instanceof NR ? JR.changes : NR.of(JR.changes || [], GR, RR.facet(rJ)),
        selection: yR && (yR instanceof zR ? yR : zR.single(yR.anchor, yR.head)),
        effects: bJ(JR.effects),
        annotations: tR,
        scrollIntoView: !!JR.scrollIntoView
      }
    }

    function pJ(RR, JR, GR) {
      let yR = lJ(RR, JR.length ? JR[0] : {}, RR.doc.length);
      JR.length && !1 === JR[0].filter && (GR = !1);
      for (let uR = 1; uR < JR.length; uR++) {
        !1 === JR[uR].filter && (GR = !1);
        let tR = !!JR[uR].sequential;
        yR = BJ(yR, lJ(RR, JR[uR], tR ? yR.changes.newLength : RR.doc.length), tR)
      }
      let tR = XJ.create(RR, yR.changes, yR.selection, yR.effects, yR.annotations, yR.scrollIntoView);
      return function(RR) {
        let JR = RR.startState,
          GR = JR.facet(LJ),
          yR = RR;
        for (let tR = GR.length - 1; tR >= 0; tR--) {
          let uR = GR[tR](RR);
          uR && Object.keys(uR).length && (yR = BJ(yR, lJ(JR, uR, RR.changes.newLength), !0))
        }
        return yR == RR ? RR : XJ.create(JR, RR.changes, RR.selection, yR.effects, yR.annotations, yR.scrollIntoView)
      }(GR ? function(RR) {
        let JR = RR.startState,
          GR = !0;
        for (let tR of JR.facet(eJ)) {
          let JR = tR(RR);
          if (!1 === JR) {
            GR = !1;
            break
          }
          Array.isArray(JR) && (GR = !0 === GR ? JR : MJ(GR, JR))
        }
        if (!0 !== GR) {
          let yR, tR;
          if (!1 === GR) tR = RR.changes.invertedDesc, yR = NR.empty(JR.doc.length);
          else {
            let JR = RR.changes.filter(GR);
            yR = JR.changes, tR = JR.filtered.mapDesc(JR.changes).invertedDesc
          }
          RR = XJ.create(JR, yR, RR.selection && RR.selection.map(tR), CJ.mapEffects(RR.effects, tR), RR.annotations, RR.scrollIntoView)
        }
        let yR = JR.facet(aJ);
        for (let tR = yR.length - 1; tR >= 0; tR--) {
          let GR = yR[tR](RR);
          RR = GR instanceof XJ ? GR : Array.isArray(GR) && 1 == GR.length && GR[0] instanceof XJ ? GR[0] : pJ(JR, bJ(GR), !1)
        }
        return RR
      }(tR) : tR)
    }
    XJ.time = UJ.define(), XJ.userEvent = UJ.define(), XJ.addToHistory = UJ.define(), XJ.remote = UJ.define();
    const gJ = [];

    function bJ(RR) {
      return null == RR ? gJ : Array.isArray(RR) ? RR : [RR]
    }
    var vJ = function(RR) {
      return RR[RR.Word = 0] = "Word", RR[RR.Space = 1] = "Space", RR[RR.Other = 2] = "Other", RR
    }(vJ || (vJ = {}));
    const OJ = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let xJ;
    try {
      xJ = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (GG) {}

    function NJ(RR) {
      return JR => {
        if (!/\S/.test(JR)) return vJ.Space;
        if (function(RR) {
            if (xJ) return xJ.test(RR);
            for (let JR = 0; JR < RR.length; JR++) {
              let GR = RR[JR];
              if (/\w/.test(GR) || GR > "\x80" && (GR.toUpperCase() != GR.toLowerCase() || OJ.test(GR))) return !0
            }
            return !1
          }(JR)) return vJ.Word;
        for (let GR = 0; GR < RR.length; GR++)
          if (JR.indexOf(RR[GR]) > -1) return vJ.Word;
        return vJ.Other
      }
    }
    class DJ {
      constructor(RR, JR, GR, yR, tR, uR) {
        this.config = RR, this.doc = JR, this.selection = GR, this.values = yR, this.status = RR.statusTemplate.slice(), this.computeSlot = tR, uR && (uR._state = this);
        for (let ZR = 0; ZR < this.config.dynamicSlots.length; ZR++) fJ(this, ZR << 1);
        this.computeSlot = null
      }
      field(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          GR = this.config.address[RR.id];
        if (null != GR) return fJ(this, GR), VJ(this, GR);
        if (JR) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return pJ(this, JR, !0)
      }
      applyTransaction(RR) {
        let JR, GR = this.config,
          {
            base: yR,
            compartments: tR
          } = GR;
        for (let ZR of RR.effects) ZR.is(ZJ.reconfigure) ? (GR && (tR = new Map, GR.compartments.forEach(((RR, JR) => tR.set(JR, RR))), GR = null), tR.set(ZR.value.compartment, ZR.value.extension)) : ZR.is(CJ.reconfigure) ? (GR = null, yR = ZR.value) : ZR.is(CJ.appendConfig) && (GR = null, yR = bJ(yR).concat(ZR.value));
        if (GR) JR = RR.startState.values.slice();
        else {
          GR = iJ.resolve(yR, tR, this), JR = new DJ(GR, this.doc, this.selection, GR.dynamicSlots.map((() => null)), ((RR, JR) => JR.reconfigure(RR, this)), null).values
        }
        let uR = RR.startState.facet(wJ) ? RR.newSelection : RR.newSelection.asSingle();
        new DJ(GR, RR.newDoc, uR, JR, ((JR, GR) => GR.update(JR, RR)), RR)
      }
      replaceSelection(RR) {
        return "string" == typeof RR && (RR = this.toText(RR)), this.changeByRange((JR => ({
          changes: {
            from: JR.from,
            to: JR.to,
            insert: RR
          },
          range: zR.cursor(JR.from + RR.length)
        })))
      }
      changeByRange(RR) {
        let JR = this.selection,
          GR = RR(JR.WL[0]),
          yR = this.changes(GR.changes),
          tR = [GR.range],
          uR = bJ(GR.effects);
        for (let ZR = 1; ZR < JR.WL.length; ZR++) {
          let GR = RR(JR.WL[ZR]),
            qR = this.changes(GR.changes),
            iR = qR.map(yR);
          for (let RR = 0; RR < ZR; RR++) tR[RR] = tR[RR].map(iR);
          let fR = yR.mapDesc(qR, !0);
          tR.push(GR.range.map(fR)), yR = yR.compose(iR), uR = CJ.mapEffects(uR, iR).concat(CJ.mapEffects(bJ(GR.effects), fR))
        }
        return {
          changes: yR,
          selection: zR.create(tR, JR.mainIndex),
          effects: uR
        }
      }
      changes() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return RR instanceof NR ? RR : NR.of(RR, this.doc.length, this.facet(DJ.lineSeparator))
      }
      toText(RR) {
        return aR.of(RR.split(this.facet(DJ.lineSeparator) || vR))
      }
      sliceDoc() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(RR, JR, this.lineBreak)
      }
      facet(RR) {
        let JR = this.config.address[RR.id];
        return null == JR ? RR.default : (fJ(this, JR), VJ(this, JR))
      }
      toJSON(RR) {
        let JR = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (RR)
          for (let GR in RR) {
            let yR = RR[GR];
            yR instanceof sR && null != this.config.address[yR.id] && (JR[GR] = yR.spec.toJSON(this.field(RR[GR]), this))
          }
        return JR
      }
      static fromJSON(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          GR = arguments.length > 2 ? arguments[2] : void 0;
        if (!RR || "string" != typeof RR.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let yR = [];
        if (GR)
          for (let tR in GR)
            if (Object.prototype.hasOwnProperty.call(RR, tR)) {
              let JR = GR[tR],
                uR = RR[tR];
              yR.push(JR.init((RR => JR.spec.fromJSON(uR, RR))))
            } return DJ.create({
          doc: RR.doc,
          selection: zR.fromJSON(RR.selection),
          extensions: JR.extensions ? yR.concat([JR.extensions]) : yR
        })
      }
      static create() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          JR = iJ.resolve(RR.extensions || [], new Map),
          GR = RR.doc instanceof aR ? RR.doc : aR.of((RR.doc || "").split(JR.staticFacet(DJ.lineSeparator) || vR)),
          yR = RR.selection ? RR.selection instanceof zR ? RR.selection : zR.single(RR.selection.anchor, RR.selection.head) : zR.single(0);
        return SR(yR, GR.length), JR.staticFacet(wJ) || (yR = yR.asSingle()), new DJ(JR, GR, yR, JR.dynamicSlots.map((() => null)), ((RR, JR) => JR.create(RR)), null)
      }
      get tabSize() {
        return this.facet(DJ.tabSize)
      }
      get lineBreak() {
        return this.facet(DJ.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(nJ)
      }
      phrase(RR) {
        for (var JR = arguments.length, GR = new Array(JR > 1 ? JR - 1 : 0), yR = 1; yR < JR; yR++) GR[yR - 1] = arguments[yR];
        for (let tR of this.facet(DJ.phrases))
          if (Object.prototype.hasOwnProperty.call(tR, RR)) {
            RR = tR[RR];
            break
          } return GR.length && (RR = RR.replace(/\$(\$|\d*)/g, ((RR, JR) => {
          if ("$" == JR) return "$";
          let yR = +(JR || 1);
          return !yR || yR > GR.length ? RR : GR[yR - 1]
        }))), RR
      }
      languageDataAt(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          yR = [];
        for (let tR of this.facet(KJ))
          for (let uR of tR(this, JR, GR)) Object.prototype.hasOwnProperty.call(uR, RR) && yR.push(uR[RR]);
        return yR
      }
      charCategorizer(RR) {
        let JR = this.languageDataAt("wordChars", RR);
        return NJ(JR.length ? JR[0] : "")
      }
      wordAt(RR) {
        let {
          text: JR,
          from: GR,
          length: yR
        } = this.doc.lineAt(RR), tR = this.charCategorizer(RR), uR = RR - GR, ZR = RR - GR;
        for (; uR > 0;) {
          let RR = lR(JR, uR, !1);
          if (tR(JR.slice(RR, uR)) != vJ.Word) break;
          uR = RR
        }
        for (; ZR < yR;) {
          let RR = lR(JR, ZR);
          if (tR(JR.slice(ZR, RR)) != vJ.Word) break;
          ZR = RR
        }
        return uR == ZR ? null : zR.range(uR + GR, ZR + GR)
      }
    }

    function HJ(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        yR = {};
      for (let tR of RR)
        for (let RR of Object.keys(tR)) {
          let JR = tR[RR],
            uR = yR[RR];
          if (void 0 === uR) yR[RR] = JR;
          else if (uR === JR || void 0 === JR);
          else {
            if (!Object.hasOwnProperty.call(GR, RR)) throw new Error("Config merge conflict for field " + RR);
            yR[RR] = GR[RR](uR, JR)
          }
        }
      for (let tR in JR) void 0 === yR[tR] && (yR[tR] = JR[tR]);
      return yR
    }
    DJ.allowMultipleSelections = wJ, DJ.tabSize = dR.define({
      combine: RR => RR.length ? RR[0] : 4
    }), DJ.lineSeparator = rJ, DJ.readOnly = nJ, DJ.phrases = dR.define({
      compare(RR, JR) {
        let GR = Object.keys(RR),
          yR = Object.keys(JR);
        return GR.length == yR.length && GR.every((GR => RR[GR] == JR[GR]))
      }
    }), DJ.languageData = KJ, DJ.changeFilter = eJ, DJ.transactionFilter = aJ, DJ.transactionExtender = LJ, ZJ.reconfigure = CJ.define();
    class oJ {
      eq(RR) {
        return this == RR
      }
      range(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RR;
        return PJ.create(RR, JR, this)
      }
    }

    function cJ(RR, JR) {
      return RR == JR || RR.constructor == JR.constructor && RR.eq(JR)
    }
    oJ.prototype.startSide = oJ.prototype.endSide = 0, oJ.prototype.point = !1, oJ.prototype.mapMode = OR.TrackDel;
    class PJ {
      constructor(RR, JR, GR) {
        this.from = RR, this.to = JR, this.value = GR
      }
      static create(RR, JR, GR) {
        return new PJ(RR, JR, GR)
      }
    }

    function IJ(RR, JR) {
      return RR.from - JR.from || RR.value.startSide - JR.value.startSide
    }
    class mJ {
      constructor(RR, JR, GR, yR) {
        this.from = RR, this.to = JR, this.value = GR, this.FtR = yR
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          tR = GR ? this.to : this.from;
        for (let uR = yR, ZR = tR.length;;) {
          if (uR == ZR) return uR;
          let yR = uR + ZR >> 1,
            qR = tR[yR] - RR || (GR ? this.value[yR].endSide : this.value[yR].startSide) - JR;
          if (yR == uR) return qR >= 0 ? uR : ZR;
          qR >= 0 ? ZR = yR : uR = yR + 1
        }
      }
      between(RR, JR, GR, yR) {
        for (let tR = this.findIndex(JR, -1e9, !0), uR = this.findIndex(GR, 1e9, !1, tR); tR < uR; tR++)
          if (!1 === yR(this.from[tR] + RR, this.to[tR] + RR, this.value[tR])) return !1
      }
      map(RR, JR) {
        let GR = [],
          yR = [],
          tR = [],
          uR = -1,
          ZR = -1;
        for (let qR = 0; qR < this.value.length; qR++) {
          let iR, fR, VR = this.value[qR],
            KR = this.from[qR] + RR,
            wR = this.to[qR] + RR;
          if (KR == wR) {
            let RR = JR.mapPos(KR, VR.startSide, VR.mapMode);
            if (null == RR) continue;
            if (iR = fR = RR, VR.startSide != VR.endSide && (fR = JR.mapPos(KR, VR.endSide), fR < iR)) continue
          } else if (iR = JR.mapPos(KR, VR.startSide), fR = JR.mapPos(wR, VR.endSide), iR > fR || iR == fR && VR.startSide > 0 && VR.endSide <= 0) continue;
          (fR - iR || VR.endSide - VR.startSide) < 0 || (uR < 0 && (uR = iR), VR.point && (ZR = Math.max(ZR, fR - iR)), GR.push(VR), yR.push(iR - uR), tR.push(fR - uR))
        }
        return {
          mapped: GR.length ? new mJ(yR, tR, GR, ZR) : null,
          pos: uR
        }
      }
    }
    class zJ {
      constructor(RR, JR, GR, yR) {
        this.chunkPos = RR, this.chunk = JR, this.nextLayer = GR, this.FtR = yR
      }
      static create(RR, JR, GR, yR) {
        return new zJ(RR, JR, GR, yR)
      }
      get length() {
        let RR = this.chunk.length - 1;
        return RR < 0 ? 0 : Math.max(this.chunkEnd(RR), this.nextLayer.length)
      }
      get size() {
        if (this.WK) return 0;
        let RR = this.nextLayer.size;
        for (let JR of this.chunk) RR += JR.value.length;
        return RR
      }
      chunkEnd(RR) {
        return this.chunkPos[RR] + this.chunk[RR].length
      }
      update(RR) {
        let {
          add: JR = [],
          sort: GR = !1,
          filterFrom: yR = 0,
          filterTo: tR = this.length
        } = RR, uR = RR.filter;
        if (0 == JR.length && !uR) return this;
        if (GR && (JR = JR.slice().sort(IJ)), this.WK) return JR.length ? zJ.of(JR) : this;
        let ZR = new dJ(this, null, -1).goto(0),
          qR = 0,
          iR = [],
          fR = new SJ;
        for (; ZR.value || qR < JR.length;)
          if (qR < JR.length && (ZR.from - JR[qR].from || ZR.startSide - JR[qR].value.startSide) >= 0) {
            let RR = JR[qR++];
            fR.addInner(RR.from, RR.to, RR.value) || iR.push(RR)
          } else 1 == ZR.rangeIndex && ZR.chunkIndex < this.chunk.length && (qR == JR.length || this.chunkEnd(ZR.chunkIndex) < JR[qR].from) && (!uR || yR > this.chunkEnd(ZR.chunkIndex) || tR < this.chunkPos[ZR.chunkIndex]) && fR.addChunk(this.chunkPos[ZR.chunkIndex], this.chunk[ZR.chunkIndex]) ? ZR.nextChunk() : ((!uR || yR > ZR.to || tR < ZR.from || uR(ZR.from, ZR.to, ZR.value)) && (fR.addInner(ZR.from, ZR.to, ZR.value) || iR.push(PJ.create(ZR.from, ZR.to, ZR.value))), ZR.next());
        return fR.finishInner(this.nextLayer.WK && !iR.length ? zJ.empty : this.nextLayer.update({
          add: iR,
          filter: uR,
          filterFrom: yR,
          filterTo: tR
        }))
      }
      map(RR) {
        if (RR.empty || this.WK) return this;
        let JR = [],
          GR = [],
          yR = -1;
        for (let uR = 0; uR < this.chunk.length; uR++) {
          let tR = this.chunkPos[uR],
            ZR = this.chunk[uR],
            qR = RR.touchesRange(tR, tR + ZR.length);
          if (!1 === qR) yR = Math.max(yR, ZR.FtR), JR.push(ZR), GR.push(RR.mapPos(tR));
          else if (!0 === qR) {
            let {
              mapped: uR,
              pos: qR
            } = ZR.map(tR, RR);
            uR && (yR = Math.max(yR, uR.FtR), JR.push(uR), GR.push(qR))
          }
        }
        let tR = this.nextLayer.map(RR);
        return 0 == JR.length ? tR : new zJ(GR, JR, tR || zJ.empty, yR)
      }
      between(RR, JR, GR) {
        if (!this.WK) {
          for (let yR = 0; yR < this.chunk.length; yR++) {
            let tR = this.chunkPos[yR],
              uR = this.chunk[yR];
            if (JR >= tR && RR <= tR + uR.length && !1 === uR.between(tR, RR - tR, JR - tR, GR)) return
          }
          this.nextLayer.between(RR, JR, GR)
        }
      }
      iter() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return EJ.from([this]).goto(RR)
      }
      get WK() {
        return this.nextLayer == this
      }
      static iter(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return EJ.from(RR).goto(JR)
      }
      static compare(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          uR = RR.filter((RR => RR.FtR > 0 || !RR.WK && RR.FtR >= tR)),
          ZR = JR.filter((RR => RR.FtR > 0 || !RR.WK && RR.FtR >= tR)),
          qR = jJ(uR, ZR, GR),
          iR = new kJ(uR, qR, tR),
          fR = new kJ(ZR, qR, tR);
        GR.iterGaps(((RR, JR, GR) => QJ(iR, RR, fR, JR, GR, yR))), GR.empty && 0 == GR.length && QJ(iR, 0, fR, 0, 0, yR)
      }
      static eq(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        null == yR && (yR = 999999999);
        let tR = RR.filter((RR => !RR.WK && JR.indexOf(RR) < 0)),
          uR = JR.filter((JR => !JR.WK && RR.indexOf(JR) < 0));
        if (tR.length != uR.length) return !1;
        if (!tR.length) return !0;
        let ZR = jJ(tR, uR),
          qR = new kJ(tR, ZR, 0).goto(GR),
          iR = new kJ(uR, ZR, 0).goto(GR);
        for (;;) {
          if (qR.to != iR.to || !FJ(qR.active, iR.active) || qR.point && (!iR.point || !cJ(qR.point, iR.point))) return !1;
          if (qR.to > yR) return !0;
          qR.next(), iR.next()
        }
      }
      static spans(RR, JR, GR, yR) {
        let tR = new kJ(RR, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(JR),
          uR = JR,
          ZR = tR.openStart;
        for (;;) {
          let RR = Math.min(tR.to, GR);
          if (tR.point) {
            let GR = tR.activeForPoint(tR.to),
              qR = tR.pointFrom < JR ? GR.length + 1 : tR.point.startSide < 0 ? GR.length : Math.min(GR.length, ZR);
            yR.point(uR, RR, tR.point, GR, qR, tR.pointRank), ZR = Math.min(tR.openEnd(RR), GR.length)
          } else RR > uR && (yR.span(uR, RR, tR.active, ZR), ZR = tR.openEnd(RR));
          if (tR.to > GR) return ZR + (tR.point && tR.to > GR ? 1 : 0);
          uR = tR.to, tR.next()
        }
      }
      static of (RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = new SJ;
        for (let yR of RR instanceof PJ ? [RR] : JR ? function(RR) {
            if (RR.length > 1)
              for (let JR = RR[0], GR = 1; GR < RR.length; GR++) {
                let yR = RR[GR];
                if (IJ(JR, yR) > 0) return RR.slice().sort(IJ);
                JR = yR
              }
            return RR
          }(RR) : RR) GR.add(yR.from, yR.to, yR.value);
        return GR.finish()
      }
      static join(RR) {
        if (!RR.length) return zJ.empty;
        let JR = RR[RR.length - 1];
        for (let GR = RR.length - 2; GR >= 0; GR--)
          for (let yR = RR[GR]; yR != zJ.empty; yR = yR.nextLayer) JR = new zJ(yR.chunkPos, yR.chunk, JR, Math.max(yR.FtR, JR.FtR));
        return JR
      }
    }
    zJ.empty = new zJ([], [], null, -1), zJ.empty.nextLayer = zJ.empty;
    class SJ {
      finishChunk(RR) {
        this.chunks.push(new mJ(this.from, this.to, this.value, this.FtR)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.FtR), this.FtR = -1, RR && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.FtR = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(RR, JR, GR) {
        this.addInner(RR, JR, GR) || (this.nextLayer || (this.nextLayer = new SJ)).add(RR, JR, GR)
      }
      addInner(RR, JR, GR) {
        let yR = RR - this.lastTo || GR.startSide - this.last.endSide;
        if (yR <= 0 && (RR - this.lastFrom || GR.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(yR < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = RR), this.from.push(RR - this.chunkStart), this.to.push(JR - this.chunkStart), this.last = GR, this.lastFrom = RR, this.lastTo = JR, this.value.push(GR), GR.point && (this.FtR = Math.max(this.FtR, JR - RR)), !0)
      }
      addChunk(RR, JR) {
        if ((RR - this.lastTo || JR.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, JR.FtR), this.chunks.push(JR), this.chunkPos.push(RR);
        let GR = JR.value.length - 1;
        return this.last = JR.value[GR], this.lastFrom = JR.from[GR] + RR, this.lastTo = JR.to[GR] + RR, !0
      }
      finish() {
        return this.finishInner(zJ.empty)
      }
      finishInner(RR) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return RR;
        let JR = zJ.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(RR) : RR, this.setMaxPoint);
        return this.from = null, JR
      }
    }

    function jJ(RR, JR, GR) {
      let yR = new Map;
      for (let uR of RR)
        for (let RR = 0; RR < uR.chunk.length; RR++) uR.chunk[RR].FtR <= 0 && yR.set(uR.chunk[RR], uR.chunkPos[RR]);
      let tR = new Set;
      for (let uR of JR)
        for (let RR = 0; RR < uR.chunk.length; RR++) {
          let JR = yR.get(uR.chunk[RR]);
          null == JR || (GR ? GR.mapPos(JR) : JR) != uR.chunkPos[RR] || (null === GR || void 0 === GR ? void 0 : GR.touchesRange(JR, JR + uR.chunk[RR].length)) || tR.add(uR.chunk[RR])
        }
      return tR
    }
    class dJ {
      constructor(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = RR, this.skip = JR, this.TtR = GR, this.rank = yR
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(RR, JR, !1), this
      }
      gotoInner(RR, JR, GR) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let JR = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(JR) || this.layer.chunkEnd(this.chunkIndex) < RR || JR.FtR < this.TtR)) break;
          this.chunkIndex++, GR = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let yR = this.layer.chunk[this.chunkIndex].findIndex(RR - this.layer.chunkPos[this.chunkIndex], JR, !0);
          (!GR || this.rangeIndex < yR) && this.setRangeIndex(yR)
        }
        this.next()
      }
      forward(RR, JR) {
        (this.to - RR || this.endSide - JR) < 0 && this.gotoInner(RR, JR, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let RR = this.layer.chunkPos[this.chunkIndex],
              JR = this.layer.chunk[this.chunkIndex],
              GR = RR + JR.from[this.rangeIndex];
            if (this.from = GR, this.to = RR + JR.to[this.rangeIndex], this.value = JR.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.TtR < 0 || this.value.point && this.to - this.from >= this.TtR) break
          }
        }
      }
      setRangeIndex(RR) {
        if (RR == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = RR
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(RR) {
        return this.from - RR.from || this.startSide - RR.startSide || this.rank - RR.rank || this.to - RR.to || this.endSide - RR.endSide
      }
    }
    class EJ {
      constructor(RR) {
        this.heap = RR
      }
      static from(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          yR = [];
        for (let tR = 0; tR < RR.length; tR++)
          for (let uR = RR[tR]; !uR.WK; uR = uR.nextLayer) uR.FtR >= GR && yR.push(new dJ(uR, JR, GR, tR));
        return 1 == yR.length ? yR[0] : new EJ(yR)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let GR of this.heap) GR.goto(RR, JR);
        for (let GR = this.heap.length >> 1; GR >= 0; GR--) YJ(this.heap, GR);
        return this.next(), this
      }
      forward(RR, JR) {
        for (let GR of this.heap) GR.forward(RR, JR);
        for (let GR = this.heap.length >> 1; GR >= 0; GR--) YJ(this.heap, GR);
        (this.to - RR || this.value.endSide - JR) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let RR = this.heap[0];
          this.from = RR.from, this.to = RR.to, this.value = RR.value, this.rank = RR.rank, RR.value && RR.next(), YJ(this.heap, 0)
        }
      }
    }

    function YJ(RR, JR) {
      for (let GR = RR[JR];;) {
        let yR = 1 + (JR << 1);
        if (yR >= RR.length) break;
        let tR = RR[yR];
        if (yR + 1 < RR.length && tR.compare(RR[yR + 1]) >= 0 && (tR = RR[yR + 1], yR++), GR.compare(tR) < 0) break;
        RR[yR] = GR, RR[JR] = tR, JR = yR
      }
    }
    class kJ {
      constructor(RR, JR, GR) {
        this.TtR = GR, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = EJ.from(RR, JR, GR)
      }
      goto(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(RR, JR), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = RR, this.endSide = JR, this.openStart = -1, this.next(), this
      }
      forward(RR, JR) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - RR || this.active[this.minActive].endSide - JR) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(RR, JR)
      }
      removeActive(RR) {
        TJ(this.active, RR), TJ(this.activeTo, RR), TJ(this.activeRank, RR), this.minActive = hJ(this.active, this.activeTo)
      }
      addActive(RR) {
        let JR = 0,
          {
            value: GR,
            to: yR,
            rank: tR
          } = this.cursor;
        for (; JR < this.activeRank.length && (tR - this.activeRank[JR] || yR - this.activeTo[JR]) > 0;) JR++;
        sJ(this.active, JR, GR), sJ(this.activeTo, JR, yR), sJ(this.activeRank, JR, tR), RR && sJ(RR, JR, this.cursor.from), this.minActive = hJ(this.active, this.activeTo)
      }
      next() {
        let RR = this.to,
          JR = this.point;
        this.point = null;
        let GR = this.openStart < 0 ? [] : null;
        for (;;) {
          let yR = this.minActive;
          if (yR > -1 && (this.activeTo[yR] - this.cursor.from || this.active[yR].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[yR] > RR) {
              this.to = this.activeTo[yR], this.endSide = this.active[yR].endSide;
              break
            }
            this.removeActive(yR), GR && TJ(GR, yR)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > RR) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let RR = this.cursor.value;
              if (RR.point) {
                if (!(JR && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = RR, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = RR.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(GR), this.cursor.next()
            }
          }
        }
        if (GR) {
          this.openStart = 0;
          for (let JR = GR.length - 1; JR >= 0 && GR[JR] < RR; JR--) this.openStart++
        }
      }
      activeForPoint(RR) {
        if (!this.active.length) return this.active;
        let JR = [];
        for (let GR = this.active.length - 1; GR >= 0 && !(this.activeRank[GR] < this.pointRank); GR--)(this.activeTo[GR] > RR || this.activeTo[GR] == RR && this.active[GR].endSide >= this.point.endSide) && JR.push(this.active[GR]);
        return JR.reverse()
      }
      openEnd(RR) {
        let JR = 0;
        for (let GR = this.activeTo.length - 1; GR >= 0 && this.activeTo[GR] > RR; GR--) JR++;
        return JR
      }
    }

    function QJ(RR, JR, GR, yR, tR, uR) {
      RR.goto(JR), GR.goto(yR);
      let ZR = yR + tR,
        qR = yR,
        iR = yR - JR,
        fR = !!uR.boundChange;
      for (let VR = !1;;) {
        let JR = RR.to + iR - GR.to,
          yR = JR || RR.endSide - GR.endSide,
          tR = yR < 0 ? RR.to + iR : GR.to,
          KR = Math.min(tR, ZR);
        if (RR.point || GR.point ? (RR.point && GR.point && cJ(RR.point, GR.point) && FJ(RR.activeForPoint(RR.to), GR.activeForPoint(GR.to)) || uR.comparePoint(qR, KR, RR.point, GR.point), VR = !1) : (VR && uR.boundChange(qR), KR > qR && !FJ(RR.active, GR.active) && uR.compareRange(qR, KR, RR.active, GR.active), fR && KR < ZR && (JR || RR.openEnd(tR) != GR.openEnd(tR)) && (VR = !0)), tR > ZR) break;
        qR = tR, yR <= 0 && RR.next(), yR >= 0 && GR.next()
      }
    }

    function FJ(RR, JR) {
      if (RR.length != JR.length) return !1;
      for (let GR = 0; GR < RR.length; GR++)
        if (RR[GR] != JR[GR] && !cJ(RR[GR], JR[GR])) return !1;
      return !0
    }

    function TJ(RR, JR) {
      for (let GR = JR, yR = RR.length - 1; GR < yR; GR++) RR[GR] = RR[GR + 1];
      RR.pop()
    }

    function sJ(RR, JR, GR) {
      for (let yR = RR.length - 1; yR >= JR; yR--) RR[yR + 1] = RR[yR];
      RR[JR] = GR
    }

    function hJ(RR, JR) {
      let GR = -1,
        yR = 1e9;
      for (let tR = 0; tR < JR.length; tR++)(JR[tR] - yR || RR[tR].endSide - RR[GR].endSide) < 0 && (GR = tR, yR = JR[tR]);
      return GR
    }

    function RG(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : RR.length,
        yR = 0;
      for (let tR = 0; tR < GR && tR < RR.length;) 9 == RR.charCodeAt(tR) ? (yR += JR - yR % JR, tR++) : (yR++, tR = lR(RR, tR));
      return yR
    }

    function JG(RR, JR, GR, yR) {
      for (let tR = 0, uR = 0;;) {
        if (uR >= JR) return tR;
        if (tR == RR.length) break;
        uR += 9 == RR.charCodeAt(tR) ? GR - uR % GR : 1, tR = lR(RR, tR)
      }
      return !0 === yR ? -1 : RR.length
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);