export const id = 285;
export const ids = [285];
export const modules = {
  40395: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => Er,
      f: () => ZY,
      ChangeSet: () => CY,
      j: () => Hr,
      n: () => bY,
      p: () => fr,
      r: () => pY,
      u: () => zY,
      v: () => Ar,
      B: () => br,
      z: () => Xr,
      C: () => hr,
      E: () => Sr,
      G: () => LY,
      K: () => QY,
      N: () => lr,
      R: () => BY,
      U: () => KY,
      Y: () => jr,
      Z: () => YD,
      $: () => NY,
      ab: () => rD,
      bb: () => cY
    });
    let FY = [],
      AY = [];

    function IY(YY) {
      if (YY < 768) return !1;
      for (let rY = 0, DY = FY.length;;) {
        let IY = rY + DY >> 1;
        if (YY < FY[IY]) DY = IY;
        else {
          if (!(YY >= AY[IY])) return !0;
          rY = IY + 1
        }
        if (rY == DY) return !1
      }
    }

    function RY(YY) {
      return YY >= 127462 && YY <= 127487
    }(() => {
      let YY = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((YY => YY ? parseInt(YY, 36) : 1));
      for (let rY = 0, DY = 0; rY < YY.length; rY++)(rY % 2 ? AY : FY).push(DY += YY[rY])
    })();
    const OY = 8205;

    function gY(YY, rY) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? aY : vY)(YY, rY, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function aY(YY, rY, DY) {
      if (rY == YY.length) return rY;
      rY && sY(YY.charCodeAt(rY)) && iY(YY.charCodeAt(rY - 1)) && rY--;
      let FY = uY(YY, rY);
      for (rY += yY(FY); rY < YY.length;) {
        let AY = uY(YY, rY);
        if (FY == OY || AY == OY || DY && IY(AY)) rY += yY(AY), FY = AY;
        else {
          if (!RY(AY)) break;
          {
            let DY = 0,
              FY = rY - 2;
            for (; FY >= 0 && RY(uY(YY, FY));) DY++, FY -= 2;
            if (DY % 2 == 0) break;
            rY += 2
          }
        }
      }
      return rY
    }

    function vY(YY, rY, DY) {
      for (; rY > 0;) {
        let FY = aY(YY, rY - 2, DY);
        if (FY < rY) return FY;
        rY--
      }
      return 0
    }

    function uY(YY, rY) {
      let DY = YY.charCodeAt(rY);
      if (!iY(DY) || rY + 1 == YY.length) return DY;
      let FY = YY.charCodeAt(rY + 1);
      return sY(FY) ? FY - 56320 + (DY - 55296 << 10) + 65536 : DY
    }

    function sY(YY) {
      return YY >= 56320 && YY < 57344
    }

    function iY(YY) {
      return YY >= 55296 && YY < 56320
    }

    function yY(YY) {
      return YY < 65536 ? 1 : 2
    }
    class QY {
      lineAt(YY) {
        if (YY < 0 || YY > this.length) throw new RangeError(`Invalid position ${YY} in document of length ${this.length}`);
        return this.lineInner(YY, !1, 1, 0)
      }
      line(YY) {
        if (YY < 1 || YY > this.lines) throw new RangeError(`Invalid line number ${YY} in ${this.lines}-line document`);
        return this.lineInner(YY, !0, 1, 0)
      }
      replace(YY, rY, DY) {
        [YY, rY] = eY(this, YY, rY);
        let FY = [];
        return this.decompose(0, YY, FY, 2), DY.length && DY.decompose(0, DY.length, FY, 3), this.decompose(rY, this.length, FY, 1), WY.from(FY, this.length - (rY - YY) + DY.length)
      }
      append(YY) {
        return this.replace(this.length, this.length, YY)
      }
      slice(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [YY, rY] = eY(this, YY, rY);
        let DY = [];
        return this.decompose(YY, rY, DY, 0), WY.from(DY, rY - YY)
      }
      eq(YY) {
        if (YY == this) return !0;
        if (YY.length != this.length || YY.lines != this.lines) return !1;
        let rY = this.scanIdentical(YY, 1),
          DY = this.length - this.scanIdentical(YY, -1),
          FY = new VY(this),
          AY = new VY(YY);
        for (let IY = rY, RY = rY;;) {
          if (FY.next(IY), AY.next(IY), IY = 0, FY.lineBreak != AY.lineBreak || FY.done != AY.done || FY.value != AY.value) return !1;
          if (RY += FY.value.length, FY.done || RY >= DY) return !0
        }
      }
      iter() {
        return new VY(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new SY(this, YY, rY)
      }
      iterLines(YY, rY) {
        let DY;
        if (null == YY) DY = this.iter();
        else {
          null == rY && (rY = this.lines + 1);
          let FY = this.line(YY).from;
          DY = this.iterRange(FY, Math.max(FY, rY == this.lines + 1 ? this.length : rY <= 1 ? 0 : this.line(rY - 1).to))
        }
        return new lY(DY)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let YY = [];
        return this.flatten(YY), YY
      }
      constructor() {}
      static of (YY) {
        if (0 == YY.length) throw new RangeError("A document must have at least one line");
        return 1 != YY.length || YY[0] ? YY.length <= 32 ? new oY(YY) : WY.from(oY.split(YY, [])) : QY.empty
      }
    }
    class oY extends QY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(YY) {
          let rY = -1;
          for (let DY of YY) rY += DY.length + 1;
          return rY
        }(YY);
        super(), this.text = YY, this.length = rY
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(YY, rY, DY, FY) {
        for (let AY = 0;; AY++) {
          let IY = this.text[AY],
            RY = FY + IY.length;
          if ((rY ? DY : RY) >= YY) return new TY(FY, RY, DY, IY);
          FY = RY + 1, DY++
        }
      }
      decompose(YY, rY, DY, FY) {
        let AY = YY <= 0 && rY >= this.length ? this : new oY(mY(this.text, YY, rY), Math.min(rY, this.length) - Math.max(0, YY));
        if (1 & FY) {
          let YY = DY.pop(),
            rY = EY(AY.text, YY.text.slice(), 0, AY.length);
          if (rY.length <= 32) DY.push(new oY(rY, YY.length + AY.length));
          else {
            let YY = rY.length >> 1;
            DY.push(new oY(rY.slice(0, YY)), new oY(rY.slice(YY)))
          }
        } else DY.push(AY)
      }
      replace(YY, rY, DY) {
        if (!(DY instanceof oY)) return super.replace(YY, rY, DY);
        [YY, rY] = eY(this, YY, rY);
        let FY = EY(this.text, EY(DY.text, mY(this.text, 0, YY)), rY),
          AY = this.length + DY.length - (rY - YY);
        return FY.length <= 32 ? new oY(FY, AY) : WY.from(oY.split(FY, []), AY)
      }
      sliceString(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [YY, rY] = eY(this, YY, rY);
        let FY = "";
        for (let AY = 0, IY = 0; AY <= rY && IY < this.text.length; IY++) {
          let RY = this.text[IY],
            OY = AY + RY.length;
          AY > YY && IY && (FY += DY), YY < OY && rY > AY && (FY += RY.slice(Math.max(0, YY - AY), rY - AY)), AY = OY + 1
        }
        return FY
      }
      flatten(YY) {
        for (let rY of this.text) YY.push(rY)
      }
      scanIdentical() {
        return 0
      }
      static split(YY, rY) {
        let DY = [],
          FY = -1;
        for (let AY of YY) DY.push(AY), FY += AY.length + 1, 32 == DY.length && (rY.push(new oY(DY, FY)), DY = [], FY = -1);
        return FY > -1 && rY.push(new oY(DY, FY)), rY
      }
    }
    class WY extends QY {
      constructor(YY, rY) {
        super(), this.children = YY, this.length = rY, this.lines = 0;
        for (let DY of YY) this.lines += DY.lines
      }
      lineInner(YY, rY, DY, FY) {
        for (let AY = 0;; AY++) {
          let IY = this.children[AY],
            RY = FY + IY.length,
            OY = DY + IY.lines - 1;
          if ((rY ? OY : RY) >= YY) return IY.lineInner(YY, rY, DY, FY);
          FY = RY + 1, DY = OY + 1
        }
      }
      decompose(YY, rY, DY, FY) {
        for (let AY = 0, IY = 0; IY <= rY && AY < this.children.length; AY++) {
          let RY = this.children[AY],
            OY = IY + RY.length;
          if (YY <= OY && rY >= IY) {
            let AY = FY & ((IY <= YY ? 1 : 0) | (OY >= rY ? 2 : 0));
            IY >= YY && OY <= rY && !AY ? DY.push(RY) : RY.decompose(YY - IY, rY - IY, DY, AY)
          }
          IY = OY + 1
        }
      }
      replace(YY, rY, DY) {
        if ([YY, rY] = eY(this, YY, rY), DY.lines < this.lines)
          for (let FY = 0, AY = 0; FY < this.children.length; FY++) {
            let IY = this.children[FY],
              RY = AY + IY.length;
            if (YY >= AY && rY <= RY) {
              let OY = IY.replace(YY - AY, rY - AY, DY),
                gY = this.lines - IY.lines + OY.lines;
              if (OY.lines < gY >> 4 && OY.lines > gY >> 6) {
                let AY = this.children.slice();
                return AY[FY] = OY, new WY(AY, this.length - (rY - YY) + DY.length)
              }
              return super.replace(AY, RY, OY)
            }
            AY = RY + 1
          }
        return super.replace(YY, rY, DY)
      }
      sliceString(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [YY, rY] = eY(this, YY, rY);
        let FY = "";
        for (let AY = 0, IY = 0; AY < this.children.length && IY <= rY; AY++) {
          let RY = this.children[AY],
            OY = IY + RY.length;
          IY > YY && AY && (FY += DY), YY < OY && rY > IY && (FY += RY.sliceString(YY - IY, rY - IY, DY)), IY = OY + 1
        }
        return FY
      }
      flatten(YY) {
        for (let rY of this.children) rY.flatten(YY)
      }
      scanIdentical(YY, rY) {
        if (!(YY instanceof WY)) return 0;
        let DY = 0,
          [FY, AY, IY, RY] = rY > 0 ? [0, 0, this.children.length, YY.children.length] : [this.children.length - 1, YY.children.length - 1, -1, -1];
        for (;; FY += rY, AY += rY) {
          if (FY == IY || AY == RY) return DY;
          let OY = this.children[FY],
            gY = YY.children[AY];
          if (OY != gY) return DY + OY.scanIdentical(gY, rY);
          DY += OY.length + 1
        }
      }
      static from(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY.reduce(((YY, rY) => YY + rY.length + 1), -1),
          DY = 0;
        for (let sY of YY) DY += sY.lines;
        if (DY < 32) {
          let DY = [];
          for (let rY of YY) rY.flatten(DY);
          return new oY(DY, rY)
        }
        let FY = Math.max(32, DY >> 5),
          AY = FY << 1,
          IY = FY >> 1,
          RY = [],
          OY = 0,
          gY = -1,
          aY = [];

        function vY(YY) {
          let rY;
          if (YY.lines > AY && YY instanceof WY)
            for (let DY of YY.children) vY(DY);
          else YY.lines > IY && (OY > IY || !OY) ? (uY(), RY.push(YY)) : YY instanceof oY && OY && (rY = aY[aY.length - 1]) instanceof oY && YY.lines + rY.lines <= 32 ? (OY += YY.lines, gY += YY.length + 1, aY[aY.length - 1] = new oY(rY.text.concat(YY.text), rY.length + 1 + YY.length)) : (OY + YY.lines > FY && uY(), OY += YY.lines, gY += YY.length + 1, aY.push(YY))
        }

        function uY() {
          0 != OY && (RY.push(1 == aY.length ? aY[0] : WY.from(aY, gY)), gY = -1, OY = aY.length = 0)
        }
        for (let sY of YY) vY(sY);
        return uY(), 1 == RY.length ? RY[0] : new WY(RY, rY)
      }
    }

    function EY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let AY = 0, IY = 0, RY = !0; IY < YY.length && AY <= FY; IY++) {
        let OY = YY[IY],
          gY = AY + OY.length;
        gY >= DY && (gY > FY && (OY = OY.slice(0, FY - AY)), AY < DY && (OY = OY.slice(DY - AY)), RY ? (rY[rY.length - 1] += OY, RY = !1) : rY.push(OY)), AY = gY + 1
      }
      return rY
    }

    function mY(YY, rY, DY) {
      return EY(YY, [""], rY, DY)
    }
    QY.empty = new oY([""], 0);
    class VY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = rY, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [YY], this.offsets = [rY > 0 ? 1 : (YY instanceof oY ? YY.text.length : YY.children.length) << 1]
      }
      nextInner(YY, rY) {
        for (this.done = this.lineBreak = !1;;) {
          let DY = this.nodes.length - 1,
            FY = this.nodes[DY],
            AY = this.offsets[DY],
            IY = AY >> 1,
            RY = FY instanceof oY ? FY.text.length : FY.children.length;
          if (IY == (rY > 0 ? RY : 0)) {
            if (0 == DY) return this.done = !0, this.value = "", this;
            rY > 0 && this.offsets[DY - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & AY) == (rY > 0 ? 0 : 1)) {
            if (this.offsets[DY] += rY, 0 == YY) return this.lineBreak = !0, this.value = "\n", this;
            YY--
          } else if (FY instanceof oY) {
            let AY = FY.text[IY + (rY < 0 ? -1 : 0)];
            if (this.offsets[DY] += rY, AY.length > Math.max(0, YY)) return this.value = 0 == YY ? AY : rY > 0 ? AY.slice(YY) : AY.slice(0, AY.length - YY), this;
            YY -= AY.length
          } else {
            let AY = FY.children[IY + (rY < 0 ? -1 : 0)];
            YY > AY.length ? (YY -= AY.length, this.offsets[DY] += rY) : (rY < 0 && this.offsets[DY]--, this.nodes.push(AY), this.offsets.push(rY > 0 ? 1 : (AY instanceof oY ? AY.text.length : AY.children.length) << 1))
          }
        }
      }
      next() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return YY < 0 && (this.nextInner(-YY, -this.dir), YY = this.value.length), this.nextInner(YY, this.dir)
      }
    }
    class SY {
      constructor(YY, rY, DY) {
        this.value = "", this.done = !1, this.cursor = new VY(YY, rY > DY ? -1 : 1), this.pos = rY > DY ? YY.length : 0, this.from = Math.min(rY, DY), this.to = Math.max(rY, DY)
      }
      nextInner(YY, rY) {
        if (rY < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        YY += Math.max(0, rY < 0 ? this.pos - this.to : this.from - this.pos);
        let DY = rY < 0 ? this.pos - this.from : this.to - this.pos;
        YY > DY && (YY = DY), DY -= YY;
        let {
          value: FY
        } = this.cursor.next(YY);
        return this.pos += (FY.length + YY) * rY, this.value = FY.length <= DY ? FY : rY < 0 ? FY.slice(FY.length - DY) : FY.slice(0, DY), this.done = !this.value, this
      }
      next() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return YY < 0 ? YY = Math.max(YY, this.from - this.pos) : YY > 0 && (YY = Math.min(YY, this.to - this.pos)), this.nextInner(YY, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class lY {
      constructor(YY) {
        this.inner = YY, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: rY,
            lineBreak: DY,
            value: FY
          } = this.inner.next(YY);
        return rY && this.afterBreak ? (this.value = "", this.afterBreak = !1) : rY ? (this.done = !0, this.value = "") : DY ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = FY, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (QY.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, VY.prototype[Symbol.iterator] = SY.prototype[Symbol.iterator] = lY.prototype[Symbol.iterator] = function() {
      return this
    });
    class TY {
      constructor(YY, rY, DY, FY) {
        this.from = YY, this.to = rY, this.number = DY, this.text = FY
      }
      get length() {
        return this.to - this.from
      }
    }

    function eY(YY, rY, DY) {
      return [rY = Math.max(0, Math.min(YY.length, rY)), Math.max(rY, Math.min(YY.length, DY))]
    }

    function NY(YY, rY) {
      return gY(YY, rY, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function BY(YY, rY) {
      let DY = YY.charCodeAt(rY);
      if (!((FY = DY) >= 55296 && FY < 56320) || rY + 1 == YY.length) return DY;
      var FY;
      let AY = YY.charCodeAt(rY + 1);
      return function(YY) {
        return YY >= 56320 && YY < 57344
      }(AY) ? AY - 56320 + (DY - 55296 << 10) + 65536 : DY
    }

    function cY(YY) {
      return YY <= 65535 ? String.fromCharCode(YY) : (YY -= 65536, String.fromCharCode(55296 + (YY >> 10), 56320 + (1023 & YY)))
    }

    function KY(YY) {
      return YY < 65536 ? 1 : 2
    }
    const HY = /\r\n?|\n/;
    var zY = function(YY) {
      return YY[YY.Simple = 0] = "Simple", YY[YY.TrackDel = 1] = "TrackDel", YY[YY.TrackBefore = 2] = "TrackBefore", YY[YY.TrackAfter = 3] = "TrackAfter", YY
    }(zY || (zY = {}));
    class ZY {
      constructor(YY) {
        this.sections = YY
      }
      get length() {
        let YY = 0;
        for (let rY = 0; rY < this.sections.length; rY += 2) YY += this.sections[rY];
        return YY
      }
      get newLength() {
        let YY = 0;
        for (let rY = 0; rY < this.sections.length; rY += 2) {
          let DY = this.sections[rY + 1];
          YY += DY < 0 ? this.sections[rY] : DY
        }
        return YY
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(YY) {
        for (let rY = 0, DY = 0, FY = 0; rY < this.sections.length;) {
          let AY = this.sections[rY++],
            IY = this.sections[rY++];
          IY < 0 ? (YY(DY, FY, AY), FY += AY) : FY += IY, DY += AY
        }
      }
      iterChangedRanges(YY) {
        hY(this, YY, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let YY = [];
        for (let rY = 0; rY < this.sections.length;) {
          let DY = this.sections[rY++],
            FY = this.sections[rY++];
          FY < 0 ? YY.push(DY, FY) : YY.push(FY, DY)
        }
        return new ZY(YY)
      }
      composeDesc(YY) {
        return this.empty ? YY : YY.empty ? this : JY(this, YY)
      }
      mapDesc(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return YY.empty ? this : dY(this, YY, rY)
      }
      mapPos(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : zY.Simple,
          FY = 0,
          AY = 0;
        for (let IY = 0; IY < this.sections.length;) {
          let RY = this.sections[IY++],
            OY = this.sections[IY++],
            gY = FY + RY;
          if (OY < 0) {
            if (gY > YY) return AY + (YY - FY);
            AY += RY
          } else {
            if (DY != zY.Simple && gY >= YY && (DY == zY.TrackDel && FY < YY && gY > YY || DY == zY.TrackBefore && FY < YY || DY == zY.TrackAfter && gY > YY)) return null;
            if (gY > YY || gY == YY && rY < 0 && !RY) return YY == FY || rY < 0 ? AY : AY + OY;
            AY += OY
          }
          FY = gY
        }
        if (YY > FY) throw new RangeError(`Position ${YY} is out of range for changeset of length ${FY}`);
        return AY
      }
      touchesRange(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY;
        for (let DY = 0, FY = 0; DY < this.sections.length && FY <= rY;) {
          let AY = FY + this.sections[DY++];
          if (this.sections[DY++] >= 0 && FY <= rY && AY >= YY) return !(FY < YY && AY > rY) || "cover";
          FY = AY
        }
        return !1
      }
      toString() {
        let YY = "";
        for (let rY = 0; rY < this.sections.length;) {
          let DY = this.sections[rY++],
            FY = this.sections[rY++];
          YY += (YY ? " " : "") + DY + (FY >= 0 ? ":" + FY : "")
        }
        return YY
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(YY) {
        if (!Array.isArray(YY) || YY.length % 2 || YY.some((YY => "number" != typeof YY))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new ZY(YY)
      }
      static create(YY) {
        return new ZY(YY)
      }
    }
    class CY extends ZY {
      constructor(YY, rY) {
        super(YY), this.inserted = rY
      }
      apply(YY) {
        if (this.length != YY.length) throw new RangeError("Applying change set to a document with the wrong length");
        return hY(this, ((rY, DY, FY, AY, IY) => YY = YY.replace(FY, FY + (DY - rY), IY)), !1), YY
      }
      mapDesc(YY) {
        return dY(this, YY, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(YY) {
        let rY = this.sections.slice(),
          DY = [];
        for (let FY = 0, AY = 0; FY < rY.length; FY += 2) {
          let IY = rY[FY],
            RY = rY[FY + 1];
          if (RY >= 0) {
            rY[FY] = RY, rY[FY + 1] = IY;
            let OY = FY >> 1;
            for (; DY.length < OY;) DY.push(QY.empty);
            DY.push(IY ? YY.slice(AY, AY + IY) : QY.empty)
          }
          AY += IY
        }
        return new CY(rY, DY)
      }
      compose(YY) {
        return this.empty ? YY : YY.empty ? this : JY(this, YY, !0)
      }
      map(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return YY.empty ? this : dY(this, YY, rY, !0)
      }
      iterChanges(YY) {
        hY(this, YY, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return ZY.create(this.sections)
      }
      filter(YY) {
        let rY = [],
          DY = [],
          FY = [],
          AY = new MY(this);
        YY: for (let IY = 0, RY = 0;;) {
          let OY = IY == YY.length ? 1e9 : YY[IY++];
          for (; RY < OY || RY == OY && 0 == AY.len;) {
            if (AY.done) break YY;
            let YY = Math.min(AY.len, OY - RY);
            fY(FY, YY, -1);
            let IY = -1 == AY.ins ? -1 : 0 == AY.off ? AY.ins : 0;
            fY(rY, YY, IY), IY > 0 && jY(DY, rY, AY.text), AY.forward(YY), RY += YY
          }
          let gY = YY[IY++];
          for (; RY < gY;) {
            if (AY.done) break YY;
            let YY = Math.min(AY.len, gY - RY);
            fY(rY, YY, -1), fY(FY, YY, -1 == AY.ins ? -1 : 0 == AY.off ? AY.ins : 0), AY.forward(YY), RY += YY
          }
        }
        return {
          changes: new CY(rY, DY),
          filtered: ZY.create(FY)
        }
      }
      toJSON() {
        let YY = [];
        for (let rY = 0; rY < this.sections.length; rY += 2) {
          let DY = this.sections[rY],
            FY = this.sections[rY + 1];
          FY < 0 ? YY.push(DY) : 0 == FY ? YY.push([DY]) : YY.push([DY].concat(this.inserted[rY >> 1].toJSON()))
        }
        return YY
      }
      static of (YY, rY, DY) {
        let FY = [],
          AY = [],
          IY = 0,
          RY = null;

        function OY() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !FY.length) return;
          IY < rY && fY(FY, rY - IY, -1);
          let YY = new CY(FY, AY);
          RY = RY ? RY.compose(YY.map(RY)) : YY, FY = [], AY = [], IY = 0
        }
        return function YY(gY) {
          if (Array.isArray(gY))
            for (let rY of gY) YY(rY);
          else if (gY instanceof CY) {
            if (gY.length != rY) throw new RangeError(`Mismatched change set length (got ${gY.length}, expected ${rY})`);
            OY(), RY = RY ? RY.compose(gY.map(RY)) : gY
          } else {
            let {
              from: YY,
              to: RY = YY,
              insert: aY
            } = gY;
            if (YY > RY || YY < 0 || RY > rY) throw new RangeError(`Invalid change range ${YY} to ${RY} (in doc of length ${rY})`);
            let vY = aY ? "string" == typeof aY ? QY.of(aY.split(DY || HY)) : aY : QY.empty,
              uY = vY.length;
            if (YY == RY && 0 == uY) return;
            YY < IY && OY(), YY > IY && fY(FY, YY - IY, -1), fY(FY, RY - YY, uY), jY(AY, FY, vY), IY = RY
          }
        }(YY), OY(!RY), RY
      }
      static empty(YY) {
        return new CY(YY ? [YY, -1] : [], [])
      }
      static fromJSON(YY) {
        if (!Array.isArray(YY)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let rY = [],
          DY = [];
        for (let FY = 0; FY < YY.length; FY++) {
          let AY = YY[FY];
          if ("number" == typeof AY) rY.push(AY, -1);
          else {
            if (!Array.isArray(AY) || "number" != typeof AY[0] || AY.some(((YY, rY) => rY && "string" != typeof YY))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == AY.length) rY.push(AY[0], 0);
            else {
              for (; DY.length < FY;) DY.push(QY.empty);
              DY[FY] = QY.of(AY.slice(1)), rY.push(AY[0], DY[FY].length)
            }
          }
        }
        return new CY(rY, DY)
      }
      static createSet(YY, rY) {
        return new CY(YY, rY)
      }
    }

    function fY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == rY && DY <= 0) return;
      let AY = YY.length - 2;
      AY >= 0 && DY <= 0 && DY == YY[AY + 1] ? YY[AY] += rY : AY >= 0 && 0 == rY && 0 == YY[AY] ? YY[AY + 1] += DY : FY ? (YY[AY] += rY, YY[AY + 1] += DY) : YY.push(rY, DY)
    }

    function jY(YY, rY, DY) {
      if (0 == DY.length) return;
      let FY = rY.length - 2 >> 1;
      if (FY < YY.length) YY[YY.length - 1] = YY[YY.length - 1].append(DY);
      else {
        for (; YY.length < FY;) YY.push(QY.empty);
        YY.push(DY)
      }
    }

    function hY(YY, rY, DY) {
      let FY = YY.inserted;
      for (let AY = 0, IY = 0, RY = 0; RY < YY.sections.length;) {
        let OY = YY.sections[RY++],
          gY = YY.sections[RY++];
        if (gY < 0) AY += OY, IY += OY;
        else {
          let aY = AY,
            vY = IY,
            uY = QY.empty;
          for (; aY += OY, vY += gY, gY && FY && (uY = uY.append(FY[RY - 2 >> 1])), !(DY || RY == YY.sections.length || YY.sections[RY + 1] < 0);) OY = YY.sections[RY++], gY = YY.sections[RY++];
          rY(AY, aY, IY, vY, uY), AY = aY, IY = vY
        }
      }
    }

    function dY(YY, rY, DY) {
      let FY = [],
        AY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        IY = new MY(YY),
        RY = new MY(rY),
        OY = 0;
      for (let gY = -1;;) {
        if (++OY > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (IY.done && RY.len || RY.done && IY.len) throw new Error("Mismatched change set lengths");
        if (-1 == IY.ins && -1 == RY.ins) {
          let YY = Math.min(IY.len, RY.len);
          fY(FY, YY, -1), IY.forward(YY), RY.forward(YY)
        } else if (RY.ins >= 0 && (IY.ins < 0 || gY == IY.i || 0 == IY.off && (RY.len < IY.len || RY.len == IY.len && !DY))) {
          let YY = RY.len;
          for (fY(FY, RY.ins, -1); YY;) {
            if (++OY > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let rY = Math.min(IY.len, YY);
            IY.ins >= 0 && gY < IY.i && IY.len <= rY && (fY(FY, 0, IY.ins), AY && jY(AY, FY, IY.text), gY = IY.i), IY.forward(rY), YY -= rY
          }
          RY.next()
        } else {
          if (!(IY.ins >= 0)) {
            if (IY.done && RY.done) return AY ? CY.createSet(FY, AY) : ZY.create(FY);
            throw new Error("Mismatched change set lengths")
          } {
            let YY = 0,
              rY = IY.len;
            for (; rY;) {
              if (++OY > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == RY.ins) {
                let DY = Math.min(rY, RY.len);
                YY += DY, rY -= DY, RY.forward(DY)
              } else {
                if (!(0 == RY.ins && RY.len < rY)) break;
                rY -= RY.len, RY.next()
              }
            }
            fY(FY, YY, gY < IY.i ? IY.ins : 0), AY && gY < IY.i && jY(AY, FY, IY.text), gY = IY.i, IY.forward(IY.len - rY)
          }
        }
      }
    }

    function JY(YY, rY) {
      let DY = [],
        FY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        AY = new MY(YY),
        IY = new MY(rY),
        RY = 0;
      for (let OY = !1;;) {
        if (++RY > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (AY.done && IY.done) return FY ? CY.createSet(DY, FY) : ZY.create(DY);
        if (0 == AY.ins) fY(DY, AY.len, 0, OY), AY.next();
        else if (0 != IY.len || IY.done) {
          if (AY.done || IY.done) throw new Error("Mismatched change set lengths");
          {
            let YY = Math.min(AY.len2, IY.len),
              rY = DY.length;
            if (-1 == AY.ins) {
              let rY = -1 == IY.ins ? -1 : IY.off ? 0 : IY.ins;
              fY(DY, YY, rY, OY), FY && rY && jY(FY, DY, IY.text)
            } else - 1 == IY.ins ? (fY(DY, AY.off ? 0 : AY.len, YY, OY), FY && jY(FY, DY, AY.textBit(YY))) : (fY(DY, AY.off ? 0 : AY.len, IY.off ? 0 : IY.ins, OY), FY && !IY.off && jY(FY, DY, IY.text));
            OY = (AY.ins > YY || IY.ins >= 0 && IY.len > YY) && (OY || DY.length > rY), AY.forward2(YY), IY.forward(YY)
          }
        } else fY(DY, 0, IY.ins, OY), FY && jY(FY, DY, IY.text), IY.next()
      }
    }
    class MY {
      constructor(YY) {
        this.set = YY, this.i = 0, this.next()
      }
      next() {
        let {
          sections: YY
        } = this.set;
        this.i < YY.length ? (this.len = YY[this.i++], this.ins = YY[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: YY
        } = this.set, rY = this.i - 2 >> 1;
        return rY >= YY.length ? QY.empty : YY[rY]
      }
      textBit(YY) {
        let {
          inserted: rY
        } = this.set, DY = this.i - 2 >> 1;
        return DY >= rY.length && !YY ? QY.empty : rY[DY].slice(this.off, null == YY ? void 0 : this.off + YY)
      }
      forward(YY) {
        YY == this.len ? this.next() : (this.len -= YY, this.off += YY)
      }
      forward2(YY) {
        -1 == this.ins ? this.forward(YY) : YY == this.ins ? this.next() : (this.ins -= YY, this.off += YY)
      }
    }
    class wY {
      constructor(YY, rY, DY) {
        this.from = YY, this.to = rY, this.flags = DY
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
        let YY = 7 & this.flags;
        return 7 == YY ? null : YY
      }
      get goalColumn() {
        let YY = this.flags >> 6;
        return 16777215 == YY ? void 0 : YY
      }
      map(YY) {
        let rY, DY, FY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? rY = DY = YY.mapPos(this.from, FY) : (rY = YY.mapPos(this.from, 1), DY = YY.mapPos(this.to, -1)), rY == this.from && DY == this.to ? this : new wY(rY, DY, this.flags)
      }
      extend(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (YY <= this.anchor && rY >= this.anchor) return bY.range(YY, rY, void 0, void 0, DY);
        let FY = Math.abs(YY - this.anchor) > Math.abs(rY - this.anchor) ? YY : rY;
        return bY.range(this.anchor, FY, void 0, void 0, DY)
      }
      eq(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == YY.anchor && this.head == YY.head && this.goalColumn == YY.goalColumn && (!rY || !this.empty || this.assoc == YY.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(YY) {
        if (!YY || "number" != typeof YY.anchor || "number" != typeof YY.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return bY.range(YY.anchor, YY.head)
      }
      static create(YY, rY, DY) {
        return new wY(YY, rY, DY)
      }
    }
    class bY {
      constructor(YY, rY) {
        this.ws = YY, this.mainIndex = rY
      }
      map(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return YY.empty ? this : bY.create(this.ws.map((DY => DY.map(YY, rY))), this.mainIndex)
      }
      eq(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.ws.length != YY.ws.length || this.mainIndex != YY.mainIndex) return !1;
        for (let DY = 0; DY < this.ws.length; DY++)
          if (!this.ws[DY].eq(YY.ws[DY], rY)) return !1;
        return !0
      }
      get main() {
        return this.ws[this.mainIndex]
      }
      asSingle() {
        return 1 == this.ws.length ? this : new bY([this.main], 0)
      }
      addRange(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return bY.create([YY].concat(this.ws), rY ? 0 : this.mainIndex + 1)
      }
      replaceRange(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          DY = this.ws.slice();
        return DY[rY] = YY, bY.create(DY, this.mainIndex)
      }
      toJSON() {
        return {
          ws: this.ws.map((YY => YY.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(YY) {
        if (!YY || !Array.isArray(YY.ws) || "number" != typeof YY.main || YY.main >= YY.ws.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new bY(YY.ws.map((YY => wY.fromJSON(YY))), YY.main)
      }
      static single(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY;
        return new bY([bY.range(YY, rY)], 0)
      }
      static create(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == YY.length) throw new RangeError("A selection needs at least one range");
        for (let DY = 0, FY = 0; FY < YY.length; FY++) {
          let AY = YY[FY];
          if (AY.empty ? AY.from <= DY : AY.from < DY) return bY.normalized(YY.slice(), rY);
          DY = AY.to
        }
        return new bY(YY, rY)
      }
      static cursor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        return wY.create(YY, YY, (0 == rY ? 0 : rY < 0 ? 8 : 16) | (null == DY ? 7 : Math.min(6, DY)) | (null !== FY && void 0 !== FY ? FY : 16777215) << 6)
      }
      static range(YY, rY, DY, FY, AY) {
        let IY = (null !== DY && void 0 !== DY ? DY : 16777215) << 6 | (null == FY ? 7 : Math.min(6, FY));
        return AY || YY == rY || (AY = rY < YY ? 1 : -1), rY < YY ? wY.create(rY, YY, 48 | IY) : wY.create(YY, rY, (AY ? AY < 0 ? 8 : 16 : 0) | IY)
      }
      static normalized(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = YY[rY];
        YY.sort(((YY, rY) => YY.from - rY.from)), rY = YY.indexOf(DY);
        for (let FY = 1; FY < YY.length; FY++) {
          let DY = YY[FY],
            AY = YY[FY - 1];
          if (DY.empty ? DY.from <= AY.to : DY.from < AY.to) {
            let IY = AY.from,
              RY = Math.max(DY.to, AY.to);
            FY <= rY && rY--, YY.splice(--FY, 2, DY.anchor > DY.head ? bY.range(RY, IY) : bY.range(IY, RY))
          }
        }
        return new bY(YY, rY)
      }
    }

    function XY(YY, rY) {
      for (let DY of YY.ws)
        if (DY.to > rY) throw new RangeError("Selection points outside of document")
    }
    let qY = 0;
    class pY {
      constructor(YY, rY, DY, FY, AY) {
        this.combine = YY, this.compareInput = rY, this.compare = DY, this.isStatic = FY, this.id = qY++, this.default = YY([]), this.extensions = "function" == typeof AY ? AY(this) : AY
      }
      get reader() {
        return this
      }
      static define() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new pY(YY.combine || (YY => YY), YY.compareInput || ((YY, rY) => YY === rY), YY.compare || (YY.combine ? (YY, rY) => YY === rY : kY), !!YY.static, YY.enables)
      }
      of(YY) {
        return new GY([], this, 0, YY)
      }
      compute(YY, rY) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new GY(YY, this, 1, rY)
      }
      computeN(YY, rY) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new GY(YY, this, 2, rY)
      }
      from(YY, rY) {
        return rY || (rY = YY => YY), this.compute([YY], (DY => rY(DY.field(YY))))
      }
    }

    function kY(YY, rY) {
      return YY == rY || YY.length == rY.length && YY.every(((YY, DY) => YY === rY[DY]))
    }
    class GY {
      constructor(YY, rY, DY, FY) {
        this.dependencies = YY, this.facet = rY, this.type = DY, this.value = FY, this.id = qY++
      }
      dynamicSlot(YY) {
        var rY;
        let DY = this.value,
          FY = this.facet.compareInput,
          AY = this.id,
          IY = YY[AY] >> 1,
          RY = 2 == this.type,
          OY = !1,
          gY = !1,
          aY = [];
        for (let vY of this.dependencies) "doc" == vY ? OY = !0 : "selection" == vY ? gY = !0 : 0 == (1 & (null !== (rY = YY[vY.id]) && void 0 !== rY ? rY : 1)) && aY.push(YY[vY.id]);
        return {
          create: YY => (YY.values[IY] = DY(YY), 1),
          update(YY, rY) {
            if (OY && rY.docChanged || gY && (rY.docChanged || rY.selection) || nY(YY, aY)) {
              let rY = DY(YY);
              if (RY ? !xY(rY, YY.values[IY], FY) : !FY(rY, YY.values[IY])) return YY.values[IY] = rY, 1
            }
            return 0
          },
          reconfigure: (YY, rY) => {
            let OY, gY = rY.config.address[AY];
            if (null != gY) {
              let AY = vr(rY, gY);
              if (this.dependencies.every((DY => DY instanceof pY ? rY.facet(DY) === YY.facet(DY) : !(DY instanceof LY) || rY.field(DY, !1) == YY.field(DY, !1))) || (RY ? xY(OY = DY(YY), AY, FY) : FY(OY = DY(YY), AY))) return YY.values[IY] = AY, 0
            } else OY = DY(YY);
            return YY.values[IY] = OY, 1
          }
        }
      }
    }

    function xY(YY, rY, DY) {
      if (YY.length != rY.length) return !1;
      for (let FY = 0; FY < YY.length; FY++)
        if (!DY(YY[FY], rY[FY])) return !1;
      return !0
    }

    function nY(YY, rY) {
      let DY = !1;
      for (let FY of rY) 1 & ar(YY, FY) && (DY = !0);
      return DY
    }

    function PY(YY, rY, DY) {
      let FY = DY.map((rY => YY[rY.id])),
        AY = DY.map((YY => YY.type)),
        IY = FY.filter((YY => !(1 & YY))),
        RY = YY[rY.id] >> 1;

      function OY(YY) {
        let DY = [];
        for (let rY = 0; rY < FY.length; rY++) {
          let IY = vr(YY, FY[rY]);
          if (2 == AY[rY])
            for (let YY of IY) DY.push(YY);
          else DY.push(IY)
        }
        return rY.combine(DY)
      }
      return {
        create(YY) {
          for (let rY of FY) ar(YY, rY);
          return YY.values[RY] = OY(YY), 1
        },
        update(YY, DY) {
          if (!nY(YY, IY)) return 0;
          let FY = OY(YY);
          return rY.compare(FY, YY.values[RY]) ? 0 : (YY.values[RY] = FY, 1)
        },
        reconfigure(YY, AY) {
          let IY = nY(YY, FY),
            gY = AY.config.facets[rY.id],
            aY = AY.facet(rY);
          if (gY && !IY && kY(DY, gY)) return YY.values[RY] = aY, 0;
          let vY = OY(YY);
          return rY.compare(vY, aY) ? (YY.values[RY] = aY, 0) : (YY.values[RY] = vY, 1)
        }
      }
    }
    const UY = pY.define({
      static: !0
    });
    class LY {
      constructor(YY, rY, DY, FY, AY) {
        this.id = YY, this.createF = rY, this.updateF = DY, this.compareF = FY, this.spec = AY, this.provides = void 0
      }
      static define(YY) {
        let rY = new LY(qY++, YY.create, YY.update, YY.compare || ((YY, rY) => YY === rY), YY);
        return YY.provide && (rY.provides = YY.provide(rY)), rY
      }
      create(YY) {
        let rY = YY.facet(UY).find((YY => YY.field == this));
        return ((null === rY || void 0 === rY ? void 0 : rY.create) || this.createF)(YY)
      }
      slot(YY) {
        let rY = YY[this.id] >> 1;
        return {
          create: YY => (YY.values[rY] = this.create(YY), 1),
          update: (YY, DY) => {
            let FY = YY.values[rY],
              AY = this.updateF(FY, DY);
            return this.compareF(FY, AY) ? 0 : (YY.values[rY] = AY, 1)
          },
          reconfigure: (YY, DY) => {
            let FY, AY = YY.facet(UY),
              IY = DY.facet(UY);
            return (FY = AY.find((YY => YY.field == this))) && FY != IY.find((YY => YY.field == this)) ? (YY.values[rY] = FY.create(YY), 1) : null != DY.config.address[this.id] ? (YY.values[rY] = DY.field(this), 0) : (YY.values[rY] = this.create(YY), 1)
          }
        }
      }
      init(YY) {
        return [this, UY.of({
          field: this,
          create: YY
        })]
      }
      get extension() {
        return this
      }
    }
    const tY = 4,
      Yr = 3,
      rr = 2,
      Dr = 1;

    function Fr(YY) {
      return rY => new Ir(rY, YY)
    }
    const Ar = {
      highest: Fr(0),
      high: Fr(Dr),
      default: Fr(rr),
      low: Fr(Yr),
      lowest: Fr(tY)
    };
    class Ir {
      constructor(YY, rY) {
        this.inner = YY, this.prec = rY
      }
    }
    class Rr {
      of(YY) {
        return new Or(this, YY)
      }
      reconfigure(YY) {
        return Rr.reconfigure.of({
          compartment: this,
          extension: YY
        })
      }
      get(YY) {
        return YY.config.compartments.get(this)
      }
    }
    class Or {
      constructor(YY, rY) {
        this.compartment = YY, this.inner = rY
      }
    }
    class gr {
      constructor(YY, rY, DY, FY, AY, IY) {
        for (this.base = YY, this.compartments = rY, this.dynamicSlots = DY, this.address = FY, this.staticValues = AY, this.facets = IY, this.statusTemplate = []; this.statusTemplate.length < DY.length;) this.statusTemplate.push(0)
      }
      staticFacet(YY) {
        let rY = this.address[YY.id];
        return null == rY ? YY.default : this.staticValues[rY >> 1]
      }
      static resolve(YY, rY, DY) {
        let FY = [],
          AY = Object.create(null),
          IY = new Map;
        for (let uY of function(YY, rY, DY) {
            let FY = [
                [],
                [],
                [],
                [],
                []
              ],
              AY = new Map;

            function IY(YY, RY) {
              let OY = AY.get(YY);
              if (null != OY) {
                if (OY <= RY) return;
                let rY = FY[OY].indexOf(YY);
                rY > -1 && FY[OY].splice(rY, 1), YY instanceof Or && DY.delete(YY.compartment)
              }
              if (AY.set(YY, RY), Array.isArray(YY))
                for (let rY of YY) IY(rY, RY);
              else if (YY instanceof Or) {
                if (DY.has(YY.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let FY = rY.get(YY.compartment) || YY.inner;
                DY.set(YY.compartment, FY), IY(FY, RY)
              } else if (YY instanceof Ir) IY(YY.inner, YY.prec);
              else if (YY instanceof LY) FY[RY].push(YY), YY.provides && IY(YY.provides, RY);
              else if (YY instanceof GY) FY[RY].push(YY), YY.facet.extensions && IY(YY.facet.extensions, rr);
              else {
                let rY = YY.extension;
                if (!rY) throw new Error(`Unrecognized extension value in extension set (${YY}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                IY(rY, RY)
              }
            }
            return IY(YY, rr), FY.reduce(((YY, rY) => YY.concat(rY)))
          }(YY, rY, IY)) uY instanceof LY ? FY.push(uY) : (AY[uY.facet.id] || (AY[uY.facet.id] = [])).push(uY);
        let RY = Object.create(null),
          OY = [],
          gY = [];
        for (let uY of FY) RY[uY.id] = gY.length << 1, gY.push((YY => uY.slot(YY)));
        let aY = null === DY || void 0 === DY ? void 0 : DY.config.facets;
        for (let uY in AY) {
          let YY = AY[uY],
            rY = YY[0].facet,
            FY = aY && aY[uY] || [];
          if (YY.every((YY => 0 == YY.type)))
            if (RY[rY.id] = OY.length << 1 | 1, kY(FY, YY)) OY.push(DY.facet(rY));
            else {
              let FY = rY.combine(YY.map((YY => YY.value)));
              OY.push(DY && rY.compare(FY, DY.facet(rY)) ? DY.facet(rY) : FY)
            }
          else {
            for (let rY of YY) 0 == rY.type ? (RY[rY.id] = OY.length << 1 | 1, OY.push(rY.value)) : (RY[rY.id] = gY.length << 1, gY.push((YY => rY.dynamicSlot(YY))));
            RY[rY.id] = gY.length << 1, gY.push((DY => PY(DY, rY, YY)))
          }
        }
        let vY = gY.map((YY => YY(RY)));
        return new gr(YY, IY, vY, RY, OY, AY)
      }
    }

    function ar(YY, rY) {
      if (1 & rY) return 2;
      let DY = rY >> 1,
        FY = YY.status[DY];
      if (4 == FY) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & FY) return FY;
      YY.status[DY] = 4;
      let AY = YY.computeSlot(YY, YY.config.dynamicSlots[DY]);
      return YY.status[DY] = 2 | AY
    }

    function vr(YY, rY) {
      return 1 & rY ? YY.config.staticValues[rY >> 1] : YY.values[rY >> 1]
    }
    const ur = pY.define(),
      sr = pY.define({
        combine: YY => YY.some((YY => YY)),
        static: !0
      }),
      ir = pY.define({
        combine: YY => YY.length ? YY[0] : void 0,
        static: !0
      }),
      yr = pY.define(),
      Qr = pY.define(),
      or = pY.define(),
      Wr = pY.define({
        combine: YY => !!YY.length && YY[0]
      });
    class Er {
      constructor(YY, rY) {
        this.type = YY, this.value = rY
      }
      static define() {
        return new mr
      }
    }
    class mr {
      of(YY) {
        return new Er(this, YY)
      }
    }
    class Vr {
      constructor(YY) {
        this.map = YY
      }
      of(YY) {
        return new Sr(this, YY)
      }
    }
    class Sr {
      constructor(YY, rY) {
        this.type = YY, this.value = rY
      }
      map(YY) {
        let rY = this.type.map(this.value, YY);
        return void 0 === rY ? void 0 : rY == this.value ? this : new Sr(this.type, rY)
      }
      is(YY) {
        return this.type == YY
      }
      static define() {
        return new Vr((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (YY => YY))
      }
      static mapEffects(YY, rY) {
        if (!YY.length) return YY;
        let DY = [];
        for (let FY of YY) {
          let YY = FY.map(rY);
          YY && DY.push(YY)
        }
        return DY
      }
    }
    Sr.reconfigure = Sr.define(), Sr.appendConfig = Sr.define();
    class lr {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.startState = YY, this.changes = rY, this.selection = DY, this.effects = FY, this.annotations = AY, this.scrollIntoView = IY, this._doc = null, this._state = null, DY && XY(DY, rY.newLength), AY.some((YY => YY.type == lr.time)) || (this.annotations = AY.concat(lr.time.of(Date.now())))
      }
      static create(YY, rY, DY, FY, AY, IY) {
        return new lr(YY, rY, DY, FY, AY, IY)
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
      annotation(YY) {
        for (let rY of this.annotations)
          if (rY.type == YY) return rY.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(YY) {
        let rY = this.annotation(lr.userEvent);
        return !(!rY || !(rY == YY || rY.length > YY.length && rY.slice(0, YY.length) == YY && "." == rY[YY.length]))
      }
    }

    function Tr(YY, rY) {
      let DY = [];
      for (let FY = 0, AY = 0;;) {
        let IY, RY;
        if (FY < YY.length && (AY == rY.length || rY[AY] >= YY[FY])) IY = YY[FY++], RY = YY[FY++];
        else {
          if (!(AY < rY.length)) return DY;
          IY = rY[AY++], RY = rY[AY++]
        }!DY.length || DY[DY.length - 1] < IY ? DY.push(IY, RY) : DY[DY.length - 1] < RY && (DY[DY.length - 1] = RY)
      }
    }

    function er(YY, rY, DY) {
      var FY;
      let AY, IY, RY;
      return DY ? (AY = rY.changes, IY = CY.empty(rY.changes.length), RY = YY.changes.compose(rY.changes)) : (AY = rY.changes.map(YY.changes), IY = YY.changes.mapDesc(rY.changes, !0), RY = YY.changes.compose(AY)), {
        changes: RY,
        selection: rY.selection ? rY.selection.map(IY) : null === (FY = YY.selection) || void 0 === FY ? void 0 : FY.map(AY),
        effects: Sr.mapEffects(YY.effects, AY).concat(Sr.mapEffects(rY.effects, IY)),
        annotations: YY.annotations.length ? YY.annotations.concat(rY.annotations) : rY.annotations,
        scrollIntoView: YY.scrollIntoView || rY.scrollIntoView
      }
    }

    function Nr(YY, rY, DY) {
      let FY = rY.selection,
        AY = Kr(rY.annotations);
      return rY.userEvent && (AY = AY.concat(lr.userEvent.of(rY.userEvent))), {
        changes: rY.changes instanceof CY ? rY.changes : CY.of(rY.changes || [], DY, YY.facet(ir)),
        selection: FY && (FY instanceof bY ? FY : bY.single(FY.anchor, FY.head)),
        effects: Kr(rY.effects),
        annotations: AY,
        scrollIntoView: !!rY.scrollIntoView
      }
    }

    function Br(YY, rY, DY) {
      let FY = Nr(YY, rY.length ? rY[0] : {}, YY.doc.length);
      rY.length && !1 === rY[0].filter && (DY = !1);
      for (let IY = 1; IY < rY.length; IY++) {
        !1 === rY[IY].filter && (DY = !1);
        let AY = !!rY[IY].sequential;
        FY = er(FY, Nr(YY, rY[IY], AY ? FY.changes.newLength : YY.doc.length), AY)
      }
      let AY = lr.create(YY, FY.changes, FY.selection, FY.effects, FY.annotations, FY.scrollIntoView);
      return function(YY) {
        let rY = YY.startState,
          DY = rY.facet(or),
          FY = YY;
        for (let AY = DY.length - 1; AY >= 0; AY--) {
          let IY = DY[AY](YY);
          IY && Object.keys(IY).length && (FY = er(FY, Nr(rY, IY, YY.changes.newLength), !0))
        }
        return FY == YY ? YY : lr.create(rY, YY.changes, YY.selection, FY.effects, FY.annotations, FY.scrollIntoView)
      }(DY ? function(YY) {
        let rY = YY.startState,
          DY = !0;
        for (let AY of rY.facet(yr)) {
          let rY = AY(YY);
          if (!1 === rY) {
            DY = !1;
            break
          }
          Array.isArray(rY) && (DY = !0 === DY ? rY : Tr(DY, rY))
        }
        if (!0 !== DY) {
          let FY, AY;
          if (!1 === DY) AY = YY.changes.invertedDesc, FY = CY.empty(rY.doc.length);
          else {
            let rY = YY.changes.filter(DY);
            FY = rY.changes, AY = rY.filtered.mapDesc(rY.changes).invertedDesc
          }
          YY = lr.create(rY, FY, YY.selection && YY.selection.map(AY), Sr.mapEffects(YY.effects, AY), YY.annotations, YY.scrollIntoView)
        }
        let FY = rY.facet(Qr);
        for (let AY = FY.length - 1; AY >= 0; AY--) {
          let DY = FY[AY](YY);
          YY = DY instanceof lr ? DY : Array.isArray(DY) && 1 == DY.length && DY[0] instanceof lr ? DY[0] : Br(rY, Kr(DY), !1)
        }
        return YY
      }(AY) : AY)
    }
    lr.time = Er.define(), lr.userEvent = Er.define(), lr.addToHistory = Er.define(), lr.remote = Er.define();
    const cr = [];

    function Kr(YY) {
      return null == YY ? cr : Array.isArray(YY) ? YY : [YY]
    }
    var Hr = function(YY) {
      return YY[YY.Word = 0] = "Word", YY[YY.Space = 1] = "Space", YY[YY.Other = 2] = "Other", YY
    }(Hr || (Hr = {}));
    const zr = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Zr;
    try {
      Zr = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (DD) {}

    function Cr(YY) {
      return rY => {
        if (!/\S/.test(rY)) return Hr.Space;
        if (function(YY) {
            if (Zr) return Zr.test(YY);
            for (let rY = 0; rY < YY.length; rY++) {
              let DY = YY[rY];
              if (/\w/.test(DY) || DY > "\x80" && (DY.toUpperCase() != DY.toLowerCase() || zr.test(DY))) return !0
            }
            return !1
          }(rY)) return Hr.Word;
        for (let DY = 0; DY < YY.length; DY++)
          if (rY.indexOf(YY[DY]) > -1) return Hr.Word;
        return Hr.Other
      }
    }
    class fr {
      constructor(YY, rY, DY, FY, AY, IY) {
        this.config = YY, this.doc = rY, this.selection = DY, this.values = FY, this.status = YY.statusTemplate.slice(), this.computeSlot = AY, IY && (IY._state = this);
        for (let RY = 0; RY < this.config.dynamicSlots.length; RY++) ar(this, RY << 1);
        this.computeSlot = null
      }
      field(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          DY = this.config.address[YY.id];
        if (null != DY) return ar(this, DY), vr(this, DY);
        if (rY) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        return Br(this, rY, !0)
      }
      applyTransaction(YY) {
        let rY, DY = this.config,
          {
            base: FY,
            compartments: AY
          } = DY;
        for (let RY of YY.effects) RY.is(Rr.reconfigure) ? (DY && (AY = new Map, DY.compartments.forEach(((YY, rY) => AY.set(rY, YY))), DY = null), AY.set(RY.value.compartment, RY.value.extension)) : RY.is(Sr.reconfigure) ? (DY = null, FY = RY.value) : RY.is(Sr.appendConfig) && (DY = null, FY = Kr(FY).concat(RY.value));
        if (DY) rY = YY.startState.values.slice();
        else {
          DY = gr.resolve(FY, AY, this), rY = new fr(DY, this.doc, this.selection, DY.dynamicSlots.map((() => null)), ((YY, rY) => rY.reconfigure(YY, this)), null).values
        }
        let IY = YY.startState.facet(sr) ? YY.newSelection : YY.newSelection.asSingle();
        new fr(DY, YY.newDoc, IY, rY, ((rY, DY) => DY.update(rY, YY)), YY)
      }
      replaceSelection(YY) {
        return "string" == typeof YY && (YY = this.toText(YY)), this.changeByRange((rY => ({
          changes: {
            from: rY.from,
            to: rY.to,
            insert: YY
          },
          range: bY.cursor(rY.from + YY.length)
        })))
      }
      changeByRange(YY) {
        let rY = this.selection,
          DY = YY(rY.ws[0]),
          FY = this.changes(DY.changes),
          AY = [DY.range],
          IY = Kr(DY.effects);
        for (let RY = 1; RY < rY.ws.length; RY++) {
          let DY = YY(rY.ws[RY]),
            OY = this.changes(DY.changes),
            gY = OY.map(FY);
          for (let YY = 0; YY < RY; YY++) AY[YY] = AY[YY].map(gY);
          let aY = FY.mapDesc(OY, !0);
          AY.push(DY.range.map(aY)), FY = FY.compose(gY), IY = Sr.mapEffects(IY, gY).concat(Sr.mapEffects(Kr(DY.effects), aY))
        }
        return {
          changes: FY,
          selection: bY.create(AY, rY.mainIndex),
          effects: IY
        }
      }
      changes() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return YY instanceof CY ? YY : CY.of(YY, this.doc.length, this.facet(fr.lineSeparator))
      }
      toText(YY) {
        return QY.of(YY.split(this.facet(fr.lineSeparator) || HY))
      }
      sliceDoc() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(YY, rY, this.lineBreak)
      }
      facet(YY) {
        let rY = this.config.address[YY.id];
        return null == rY ? YY.default : (ar(this, rY), vr(this, rY))
      }
      toJSON(YY) {
        let rY = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (YY)
          for (let DY in YY) {
            let FY = YY[DY];
            FY instanceof LY && null != this.config.address[FY.id] && (rY[DY] = FY.spec.toJSON(this.field(YY[DY]), this))
          }
        return rY
      }
      static fromJSON(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          DY = arguments.length > 2 ? arguments[2] : void 0;
        if (!YY || "string" != typeof YY.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let FY = [];
        if (DY)
          for (let AY in DY)
            if (Object.prototype.hasOwnProperty.call(YY, AY)) {
              let rY = DY[AY],
                IY = YY[AY];
              FY.push(rY.init((YY => rY.spec.fromJSON(IY, YY))))
            } return fr.create({
          doc: YY.doc,
          selection: bY.fromJSON(YY.selection),
          extensions: rY.extensions ? FY.concat([rY.extensions]) : FY
        })
      }
      static create() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          rY = gr.resolve(YY.extensions || [], new Map),
          DY = YY.doc instanceof QY ? YY.doc : QY.of((YY.doc || "").split(rY.staticFacet(fr.lineSeparator) || HY)),
          FY = YY.selection ? YY.selection instanceof bY ? YY.selection : bY.single(YY.selection.anchor, YY.selection.head) : bY.single(0);
        return XY(FY, DY.length), rY.staticFacet(sr) || (FY = FY.asSingle()), new fr(rY, DY, FY, rY.dynamicSlots.map((() => null)), ((YY, rY) => rY.create(YY)), null)
      }
      get tabSize() {
        return this.facet(fr.tabSize)
      }
      get lineBreak() {
        return this.facet(fr.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Wr)
      }
      phrase(YY) {
        for (var rY = arguments.length, DY = new Array(rY > 1 ? rY - 1 : 0), FY = 1; FY < rY; FY++) DY[FY - 1] = arguments[FY];
        for (let AY of this.facet(fr.phrases))
          if (Object.prototype.hasOwnProperty.call(AY, YY)) {
            YY = AY[YY];
            break
          } return DY.length && (YY = YY.replace(/\$(\$|\d*)/g, ((YY, rY) => {
          if ("$" == rY) return "$";
          let FY = +(rY || 1);
          return !FY || FY > DY.length ? YY : DY[FY - 1]
        }))), YY
      }
      languageDataAt(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          FY = [];
        for (let AY of this.facet(ur))
          for (let IY of AY(this, rY, DY)) Object.prototype.hasOwnProperty.call(IY, YY) && FY.push(IY[YY]);
        return FY
      }
      charCategorizer(YY) {
        let rY = this.languageDataAt("wordChars", YY);
        return Cr(rY.length ? rY[0] : "")
      }
      wordAt(YY) {
        let {
          text: rY,
          from: DY,
          length: FY
        } = this.doc.lineAt(YY), AY = this.charCategorizer(YY), IY = YY - DY, RY = YY - DY;
        for (; IY > 0;) {
          let YY = NY(rY, IY, !1);
          if (AY(rY.slice(YY, IY)) != Hr.Word) break;
          IY = YY
        }
        for (; RY < FY;) {
          let YY = NY(rY, RY);
          if (AY(rY.slice(RY, YY)) != Hr.Word) break;
          RY = YY
        }
        return IY == RY ? null : bY.range(IY + DY, RY + DY)
      }
    }

    function jr(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        FY = {};
      for (let AY of YY)
        for (let YY of Object.keys(AY)) {
          let rY = AY[YY],
            IY = FY[YY];
          if (void 0 === IY) FY[YY] = rY;
          else if (IY === rY || void 0 === rY);
          else {
            if (!Object.hasOwnProperty.call(DY, YY)) throw new Error("Config merge conflict for field " + YY);
            FY[YY] = DY[YY](IY, rY)
          }
        }
      for (let AY in rY) void 0 === FY[AY] && (FY[AY] = rY[AY]);
      return FY
    }
    fr.allowMultipleSelections = sr, fr.tabSize = pY.define({
      combine: YY => YY.length ? YY[0] : 4
    }), fr.lineSeparator = ir, fr.readOnly = Wr, fr.phrases = pY.define({
      compare(YY, rY) {
        let DY = Object.keys(YY),
          FY = Object.keys(rY);
        return DY.length == FY.length && DY.every((DY => YY[DY] == rY[DY]))
      }
    }), fr.languageData = ur, fr.changeFilter = yr, fr.transactionFilter = Qr, fr.transactionExtender = or, Rr.reconfigure = Sr.define();
    class hr {
      eq(YY) {
        return this == YY
      }
      range(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YY;
        return Jr.create(YY, rY, this)
      }
    }

    function dr(YY, rY) {
      return YY == rY || YY.constructor == rY.constructor && YY.eq(rY)
    }
    hr.prototype.startSide = hr.prototype.endSide = 0, hr.prototype.point = !1, hr.prototype.mapMode = zY.TrackDel;
    class Jr {
      constructor(YY, rY, DY) {
        this.from = YY, this.to = rY, this.value = DY
      }
      static create(YY, rY, DY) {
        return new Jr(YY, rY, DY)
      }
    }

    function Mr(YY, rY) {
      return YY.from - rY.from || YY.value.startSide - rY.value.startSide
    }
    class wr {
      constructor(YY, rY, DY, FY) {
        this.from = YY, this.to = rY, this.value = DY, this.SDY = FY
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          AY = DY ? this.to : this.from;
        for (let IY = FY, RY = AY.length;;) {
          if (IY == RY) return IY;
          let FY = IY + RY >> 1,
            OY = AY[FY] - YY || (DY ? this.value[FY].endSide : this.value[FY].startSide) - rY;
          if (FY == IY) return OY >= 0 ? IY : RY;
          OY >= 0 ? RY = FY : IY = FY + 1
        }
      }
      between(YY, rY, DY, FY) {
        for (let AY = this.findIndex(rY, -1e9, !0), IY = this.findIndex(DY, 1e9, !1, AY); AY < IY; AY++)
          if (!1 === FY(this.from[AY] + YY, this.to[AY] + YY, this.value[AY])) return !1
      }
      map(YY, rY) {
        let DY = [],
          FY = [],
          AY = [],
          IY = -1,
          RY = -1;
        for (let OY = 0; OY < this.value.length; OY++) {
          let gY, aY, vY = this.value[OY],
            uY = this.from[OY] + YY,
            sY = this.to[OY] + YY;
          if (uY == sY) {
            let YY = rY.mapPos(uY, vY.startSide, vY.mapMode);
            if (null == YY) continue;
            if (gY = aY = YY, vY.startSide != vY.endSide && (aY = rY.mapPos(uY, vY.endSide), aY < gY)) continue
          } else if (gY = rY.mapPos(uY, vY.startSide), aY = rY.mapPos(sY, vY.endSide), gY > aY || gY == aY && vY.startSide > 0 && vY.endSide <= 0) continue;
          (aY - gY || vY.endSide - vY.startSide) < 0 || (IY < 0 && (IY = gY), vY.point && (RY = Math.max(RY, aY - gY)), DY.push(vY), FY.push(gY - IY), AY.push(aY - IY))
        }
        return {
          mapped: DY.length ? new wr(FY, AY, DY, RY) : null,
          pos: IY
        }
      }
    }
    class br {
      constructor(YY, rY, DY, FY) {
        this.chunkPos = YY, this.chunk = rY, this.nextLayer = DY, this.SDY = FY
      }
      static create(YY, rY, DY, FY) {
        return new br(YY, rY, DY, FY)
      }
      get length() {
        let YY = this.chunk.length - 1;
        return YY < 0 ? 0 : Math.max(this.chunkEnd(YY), this.nextLayer.length)
      }
      get size() {
        if (this.Ey) return 0;
        let YY = this.nextLayer.size;
        for (let rY of this.chunk) YY += rY.value.length;
        return YY
      }
      chunkEnd(YY) {
        return this.chunkPos[YY] + this.chunk[YY].length
      }
      update(YY) {
        let {
          add: rY = [],
          sort: DY = !1,
          filterFrom: FY = 0,
          filterTo: AY = this.length
        } = YY, IY = YY.filter;
        if (0 == rY.length && !IY) return this;
        if (DY && (rY = rY.slice().sort(Mr)), this.Ey) return rY.length ? br.of(rY) : this;
        let RY = new pr(this, null, -1).goto(0),
          OY = 0,
          gY = [],
          aY = new Xr;
        for (; RY.value || OY < rY.length;)
          if (OY < rY.length && (RY.from - rY[OY].from || RY.startSide - rY[OY].value.startSide) >= 0) {
            let YY = rY[OY++];
            aY.addInner(YY.from, YY.to, YY.value) || gY.push(YY)
          } else 1 == RY.rangeIndex && RY.chunkIndex < this.chunk.length && (OY == rY.length || this.chunkEnd(RY.chunkIndex) < rY[OY].from) && (!IY || FY > this.chunkEnd(RY.chunkIndex) || AY < this.chunkPos[RY.chunkIndex]) && aY.addChunk(this.chunkPos[RY.chunkIndex], this.chunk[RY.chunkIndex]) ? RY.nextChunk() : ((!IY || FY > RY.to || AY < RY.from || IY(RY.from, RY.to, RY.value)) && (aY.addInner(RY.from, RY.to, RY.value) || gY.push(Jr.create(RY.from, RY.to, RY.value))), RY.next());
        return aY.finishInner(this.nextLayer.Ey && !gY.length ? br.empty : this.nextLayer.update({
          add: gY,
          filter: IY,
          filterFrom: FY,
          filterTo: AY
        }))
      }
      map(YY) {
        if (YY.empty || this.Ey) return this;
        let rY = [],
          DY = [],
          FY = -1;
        for (let IY = 0; IY < this.chunk.length; IY++) {
          let AY = this.chunkPos[IY],
            RY = this.chunk[IY],
            OY = YY.touchesRange(AY, AY + RY.length);
          if (!1 === OY) FY = Math.max(FY, RY.SDY), rY.push(RY), DY.push(YY.mapPos(AY));
          else if (!0 === OY) {
            let {
              mapped: IY,
              pos: OY
            } = RY.map(AY, YY);
            IY && (FY = Math.max(FY, IY.SDY), rY.push(IY), DY.push(OY))
          }
        }
        let AY = this.nextLayer.map(YY);
        return 0 == rY.length ? AY : new br(DY, rY, AY || br.empty, FY)
      }
      between(YY, rY, DY) {
        if (!this.Ey) {
          for (let FY = 0; FY < this.chunk.length; FY++) {
            let AY = this.chunkPos[FY],
              IY = this.chunk[FY];
            if (rY >= AY && YY <= AY + IY.length && !1 === IY.between(AY, YY - AY, rY - AY, DY)) return
          }
          this.nextLayer.between(YY, rY, DY)
        }
      }
      iter() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return kr.from([this]).goto(YY)
      }
      get Ey() {
        return this.nextLayer == this
      }
      static iter(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kr.from(YY).goto(rY)
      }
      static compare(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          IY = YY.filter((YY => YY.SDY > 0 || !YY.Ey && YY.SDY >= AY)),
          RY = rY.filter((YY => YY.SDY > 0 || !YY.Ey && YY.SDY >= AY)),
          OY = qr(IY, RY, DY),
          gY = new xr(IY, OY, AY),
          aY = new xr(RY, OY, AY);
        DY.iterGaps(((YY, rY, DY) => nr(gY, YY, aY, rY, DY, FY))), DY.empty && 0 == DY.length && nr(gY, 0, aY, 0, 0, FY)
      }
      static eq(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        null == FY && (FY = 999999999);
        let AY = YY.filter((YY => !YY.Ey && rY.indexOf(YY) < 0)),
          IY = rY.filter((rY => !rY.Ey && YY.indexOf(rY) < 0));
        if (AY.length != IY.length) return !1;
        if (!AY.length) return !0;
        let RY = qr(AY, IY),
          OY = new xr(AY, RY, 0).goto(DY),
          gY = new xr(IY, RY, 0).goto(DY);
        for (;;) {
          if (OY.to != gY.to || !Pr(OY.active, gY.active) || OY.point && (!gY.point || !dr(OY.point, gY.point))) return !1;
          if (OY.to > FY) return !0;
          OY.next(), gY.next()
        }
      }
      static spans(YY, rY, DY, FY) {
        let AY = new xr(YY, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(rY),
          IY = rY,
          RY = AY.openStart;
        for (;;) {
          let YY = Math.min(AY.to, DY);
          if (AY.point) {
            let DY = AY.activeForPoint(AY.to),
              OY = AY.pointFrom < rY ? DY.length + 1 : AY.point.startSide < 0 ? DY.length : Math.min(DY.length, RY);
            FY.point(IY, YY, AY.point, DY, OY, AY.pointRank), RY = Math.min(AY.openEnd(YY), DY.length)
          } else YY > IY && (FY.span(IY, YY, AY.active, RY), RY = AY.openEnd(YY));
          if (AY.to > DY) return RY + (AY.point && AY.to > DY ? 1 : 0);
          IY = AY.to, AY.next()
        }
      }
      static of (YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = new Xr;
        for (let FY of YY instanceof Jr ? [YY] : rY ? function(YY) {
            if (YY.length > 1)
              for (let rY = YY[0], DY = 1; DY < YY.length; DY++) {
                let FY = YY[DY];
                if (Mr(rY, FY) > 0) return YY.slice().sort(Mr);
                rY = FY
              }
            return YY
          }(YY) : YY) DY.add(FY.from, FY.to, FY.value);
        return DY.finish()
      }
      static join(YY) {
        if (!YY.length) return br.empty;
        let rY = YY[YY.length - 1];
        for (let DY = YY.length - 2; DY >= 0; DY--)
          for (let FY = YY[DY]; FY != br.empty; FY = FY.nextLayer) rY = new br(FY.chunkPos, FY.chunk, rY, Math.max(FY.SDY, rY.SDY));
        return rY
      }
    }
    br.empty = new br([], [], null, -1), br.empty.nextLayer = br.empty;
    class Xr {
      finishChunk(YY) {
        this.chunks.push(new wr(this.from, this.to, this.value, this.SDY)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.SDY), this.SDY = -1, YY && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.SDY = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(YY, rY, DY) {
        this.addInner(YY, rY, DY) || (this.nextLayer || (this.nextLayer = new Xr)).add(YY, rY, DY)
      }
      addInner(YY, rY, DY) {
        let FY = YY - this.lastTo || DY.startSide - this.last.endSide;
        if (FY <= 0 && (YY - this.lastFrom || DY.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(FY < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = YY), this.from.push(YY - this.chunkStart), this.to.push(rY - this.chunkStart), this.last = DY, this.lastFrom = YY, this.lastTo = rY, this.value.push(DY), DY.point && (this.SDY = Math.max(this.SDY, rY - YY)), !0)
      }
      addChunk(YY, rY) {
        if ((YY - this.lastTo || rY.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, rY.SDY), this.chunks.push(rY), this.chunkPos.push(YY);
        let DY = rY.value.length - 1;
        return this.last = rY.value[DY], this.lastFrom = rY.from[DY] + YY, this.lastTo = rY.to[DY] + YY, !0
      }
      finish() {
        return this.finishInner(br.empty)
      }
      finishInner(YY) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return YY;
        let rY = br.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(YY) : YY, this.setMaxPoint);
        return this.from = null, rY
      }
    }

    function qr(YY, rY, DY) {
      let FY = new Map;
      for (let IY of YY)
        for (let YY = 0; YY < IY.chunk.length; YY++) IY.chunk[YY].SDY <= 0 && FY.set(IY.chunk[YY], IY.chunkPos[YY]);
      let AY = new Set;
      for (let IY of rY)
        for (let YY = 0; YY < IY.chunk.length; YY++) {
          let rY = FY.get(IY.chunk[YY]);
          null == rY || (DY ? DY.mapPos(rY) : rY) != IY.chunkPos[YY] || (null === DY || void 0 === DY ? void 0 : DY.touchesRange(rY, rY + IY.chunk[YY].length)) || AY.add(IY.chunk[YY])
        }
      return AY
    }
    class pr {
      constructor(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = YY, this.skip = rY, this.lDY = DY, this.rank = FY
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(YY, rY, !1), this
      }
      gotoInner(YY, rY, DY) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let rY = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(rY) || this.layer.chunkEnd(this.chunkIndex) < YY || rY.SDY < this.lDY)) break;
          this.chunkIndex++, DY = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let FY = this.layer.chunk[this.chunkIndex].findIndex(YY - this.layer.chunkPos[this.chunkIndex], rY, !0);
          (!DY || this.rangeIndex < FY) && this.setRangeIndex(FY)
        }
        this.next()
      }
      forward(YY, rY) {
        (this.to - YY || this.endSide - rY) < 0 && this.gotoInner(YY, rY, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let YY = this.layer.chunkPos[this.chunkIndex],
              rY = this.layer.chunk[this.chunkIndex],
              DY = YY + rY.from[this.rangeIndex];
            if (this.from = DY, this.to = YY + rY.to[this.rangeIndex], this.value = rY.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.lDY < 0 || this.value.point && this.to - this.from >= this.lDY) break
          }
        }
      }
      setRangeIndex(YY) {
        if (YY == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = YY
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(YY) {
        return this.from - YY.from || this.startSide - YY.startSide || this.rank - YY.rank || this.to - YY.to || this.endSide - YY.endSide
      }
    }
    class kr {
      constructor(YY) {
        this.heap = YY
      }
      static from(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          FY = [];
        for (let AY = 0; AY < YY.length; AY++)
          for (let IY = YY[AY]; !IY.Ey; IY = IY.nextLayer) IY.SDY >= DY && FY.push(new pr(IY, rY, DY, AY));
        return 1 == FY.length ? FY[0] : new kr(FY)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let DY of this.heap) DY.goto(YY, rY);
        for (let DY = this.heap.length >> 1; DY >= 0; DY--) Gr(this.heap, DY);
        return this.next(), this
      }
      forward(YY, rY) {
        for (let DY of this.heap) DY.forward(YY, rY);
        for (let DY = this.heap.length >> 1; DY >= 0; DY--) Gr(this.heap, DY);
        (this.to - YY || this.value.endSide - rY) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let YY = this.heap[0];
          this.from = YY.from, this.to = YY.to, this.value = YY.value, this.rank = YY.rank, YY.value && YY.next(), Gr(this.heap, 0)
        }
      }
    }

    function Gr(YY, rY) {
      for (let DY = YY[rY];;) {
        let FY = 1 + (rY << 1);
        if (FY >= YY.length) break;
        let AY = YY[FY];
        if (FY + 1 < YY.length && AY.compare(YY[FY + 1]) >= 0 && (AY = YY[FY + 1], FY++), DY.compare(AY) < 0) break;
        YY[FY] = DY, YY[rY] = AY, rY = FY
      }
    }
    class xr {
      constructor(YY, rY, DY) {
        this.lDY = DY, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = kr.from(YY, rY, DY)
      }
      goto(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(YY, rY), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = YY, this.endSide = rY, this.openStart = -1, this.next(), this
      }
      forward(YY, rY) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - YY || this.active[this.minActive].endSide - rY) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(YY, rY)
      }
      removeActive(YY) {
        Ur(this.active, YY), Ur(this.activeTo, YY), Ur(this.activeRank, YY), this.minActive = tr(this.active, this.activeTo)
      }
      addActive(YY) {
        let rY = 0,
          {
            value: DY,
            to: FY,
            rank: AY
          } = this.cursor;
        for (; rY < this.activeRank.length && (AY - this.activeRank[rY] || FY - this.activeTo[rY]) > 0;) rY++;
        Lr(this.active, rY, DY), Lr(this.activeTo, rY, FY), Lr(this.activeRank, rY, AY), YY && Lr(YY, rY, this.cursor.from), this.minActive = tr(this.active, this.activeTo)
      }
      next() {
        let YY = this.to,
          rY = this.point;
        this.point = null;
        let DY = this.openStart < 0 ? [] : null;
        for (;;) {
          let FY = this.minActive;
          if (FY > -1 && (this.activeTo[FY] - this.cursor.from || this.active[FY].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[FY] > YY) {
              this.to = this.activeTo[FY], this.endSide = this.active[FY].endSide;
              break
            }
            this.removeActive(FY), DY && Ur(DY, FY)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > YY) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let YY = this.cursor.value;
              if (YY.point) {
                if (!(rY && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = YY, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = YY.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(DY), this.cursor.next()
            }
          }
        }
        if (DY) {
          this.openStart = 0;
          for (let rY = DY.length - 1; rY >= 0 && DY[rY] < YY; rY--) this.openStart++
        }
      }
      activeForPoint(YY) {
        if (!this.active.length) return this.active;
        let rY = [];
        for (let DY = this.active.length - 1; DY >= 0 && !(this.activeRank[DY] < this.pointRank); DY--)(this.activeTo[DY] > YY || this.activeTo[DY] == YY && this.active[DY].endSide >= this.point.endSide) && rY.push(this.active[DY]);
        return rY.reverse()
      }
      openEnd(YY) {
        let rY = 0;
        for (let DY = this.activeTo.length - 1; DY >= 0 && this.activeTo[DY] > YY; DY--) rY++;
        return rY
      }
    }

    function nr(YY, rY, DY, FY, AY, IY) {
      YY.goto(rY), DY.goto(FY);
      let RY = FY + AY,
        OY = FY,
        gY = FY - rY,
        aY = !!IY.boundChange;
      for (let vY = !1;;) {
        let rY = YY.to + gY - DY.to,
          FY = rY || YY.endSide - DY.endSide,
          AY = FY < 0 ? YY.to + gY : DY.to,
          uY = Math.min(AY, RY);
        if (YY.point || DY.point ? (YY.point && DY.point && dr(YY.point, DY.point) && Pr(YY.activeForPoint(YY.to), DY.activeForPoint(DY.to)) || IY.comparePoint(OY, uY, YY.point, DY.point), vY = !1) : (vY && IY.boundChange(OY), uY > OY && !Pr(YY.active, DY.active) && IY.compareRange(OY, uY, YY.active, DY.active), aY && uY < RY && (rY || YY.openEnd(AY) != DY.openEnd(AY)) && (vY = !0)), AY > RY) break;
        OY = AY, FY <= 0 && YY.next(), FY >= 0 && DY.next()
      }
    }

    function Pr(YY, rY) {
      if (YY.length != rY.length) return !1;
      for (let DY = 0; DY < YY.length; DY++)
        if (YY[DY] != rY[DY] && !dr(YY[DY], rY[DY])) return !1;
      return !0
    }

    function Ur(YY, rY) {
      for (let DY = rY, FY = YY.length - 1; DY < FY; DY++) YY[DY] = YY[DY + 1];
      YY.pop()
    }

    function Lr(YY, rY, DY) {
      for (let FY = YY.length - 1; FY >= rY; FY--) YY[FY + 1] = YY[FY];
      YY[rY] = DY
    }

    function tr(YY, rY) {
      let DY = -1,
        FY = 1e9;
      for (let AY = 0; AY < rY.length; AY++)(rY[AY] - FY || YY[AY].endSide - YY[DY].endSide) < 0 && (DY = AY, FY = rY[AY]);
      return DY
    }

    function YD(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : YY.length,
        FY = 0;
      for (let AY = 0; AY < DY && AY < YY.length;) 9 == YY.charCodeAt(AY) ? (FY += rY - FY % rY, AY++) : (FY++, AY = NY(YY, AY));
      return FY
    }

    function rD(YY, rY, DY, FY) {
      for (let AY = 0, IY = 0;;) {
        if (IY >= rY) return AY;
        if (AY == YY.length) break;
        IY += 9 == YY.charCodeAt(AY) ? DY - IY % DY : 1, AY = NY(YY, AY)
      }
      return !0 === FY ? -1 : YY.length
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);