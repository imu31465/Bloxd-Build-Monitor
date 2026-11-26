export const id = 601;
export const ids = [601];
export const modules = {
  44009: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => kX,
      h: () => OU,
      ChangeSet: () => SU,
      j: () => wX,
      k: () => VU,
      n: () => rX,
      r: () => mU,
      t: () => qU,
      w: () => yX,
      D: () => VX,
      z: () => sX,
      E: () => fX,
      H: () => ZX,
      L: () => TU,
      O: () => aU,
      P: () => RX,
      Q: () => LU,
      R: () => CU,
      V: () => uX,
      X: () => Uz,
      _: () => dU,
      cb: () => Xz,
      eb: () => eU
    });
    let cU = [],
      yU = [];

    function QU(UU) {
      if (UU < 768) return !1;
      for (let XU = 0, zU = cU.length;;) {
        let QU = XU + zU >> 1;
        if (UU < cU[QU]) zU = QU;
        else {
          if (!(UU >= yU[QU])) return !0;
          XU = QU + 1
        }
        if (XU == zU) return !1
      }
    }

    function AU(UU) {
      return UU >= 127462 && UU <= 127487
    }(() => {
      let UU = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((UU => UU ? parseInt(UU, 36) : 1));
      for (let XU = 0, zU = 0; XU < UU.length; XU++)(XU % 2 ? yU : cU).push(zU += UU[XU])
    })();
    const FU = 8205;

    function oU(UU, XU) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? DU : EU)(UU, XU, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function DU(UU, XU, zU) {
      if (XU == UU.length) return XU;
      XU && NU(UU.charCodeAt(XU)) && IU(UU.charCodeAt(XU - 1)) && XU--;
      let cU = YU(UU, XU);
      for (XU += pU(cU); XU < UU.length;) {
        let yU = YU(UU, XU);
        if (cU == FU || yU == FU || zU && QU(yU)) XU += pU(yU), cU = yU;
        else {
          if (!AU(yU)) break;
          {
            let zU = 0,
              cU = XU - 2;
            for (; cU >= 0 && AU(YU(UU, cU));) zU++, cU -= 2;
            if (zU % 2 == 0) break;
            XU += 2
          }
        }
      }
      return XU
    }

    function EU(UU, XU, zU) {
      for (; XU > 0;) {
        let cU = DU(UU, XU - 2, zU);
        if (cU < XU) return cU;
        XU--
      }
      return 0
    }

    function YU(UU, XU) {
      let zU = UU.charCodeAt(XU);
      if (!IU(zU) || XU + 1 == UU.length) return zU;
      let cU = UU.charCodeAt(XU + 1);
      return NU(cU) ? cU - 56320 + (zU - 55296 << 10) + 65536 : zU
    }

    function NU(UU) {
      return UU >= 56320 && UU < 57344
    }

    function IU(UU) {
      return UU >= 55296 && UU < 56320
    }

    function pU(UU) {
      return UU < 65536 ? 1 : 2
    }
    class aU {
      lineAt(UU) {
        if (UU < 0 || UU > this.length) throw new RangeError(`Invalid position ${UU} in document of length ${this.length}`);
        return this.lineInner(UU, !1, 1, 0)
      }
      line(UU) {
        if (UU < 1 || UU > this.lines) throw new RangeError(`Invalid line number ${UU} in ${this.lines}-line document`);
        return this.lineInner(UU, !0, 1, 0)
      }
      replace(UU, XU, zU) {
        [UU, XU] = WU(this, UU, XU);
        let cU = [];
        return this.decompose(0, UU, cU, 2), zU.length && zU.decompose(0, zU.length, cU, 3), this.decompose(XU, this.length, cU, 1), gU.from(cU, this.length - (XU - UU) + zU.length)
      }
      append(UU) {
        return this.replace(this.length, this.length, UU)
      }
      slice(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [UU, XU] = WU(this, UU, XU);
        let zU = [];
        return this.decompose(UU, XU, zU, 0), gU.from(zU, XU - UU)
      }
      eq(UU) {
        if (UU == this) return !0;
        if (UU.length != this.length || UU.lines != this.lines) return !1;
        let XU = this.scanIdentical(UU, 1),
          zU = this.length - this.scanIdentical(UU, -1),
          cU = new BU(this),
          yU = new BU(UU);
        for (let QU = XU, AU = XU;;) {
          if (cU.next(QU), yU.next(QU), QU = 0, cU.lineBreak != yU.lineBreak || cU.done != yU.done || cU.value != yU.value) return !1;
          if (AU += cU.value.length, cU.done || AU >= zU) return !0
        }
      }
      iter() {
        return new BU(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new ZU(this, UU, XU)
      }
      iterLines(UU, XU) {
        let zU;
        if (null == UU) zU = this.iter();
        else {
          null == XU && (XU = this.lines + 1);
          let cU = this.line(UU).from;
          zU = this.iterRange(cU, Math.max(cU, XU == this.lines + 1 ? this.length : XU <= 1 ? 0 : this.line(XU - 1).to))
        }
        return new RU(zU)
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
        return 1 != UU.length || UU[0] ? UU.length <= 32 ? new tU(UU) : gU.from(tU.split(UU, [])) : aU.empty
      }
    }
    class tU extends aU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(UU) {
          let XU = -1;
          for (let zU of UU) XU += zU.length + 1;
          return XU
        }(UU);
        super(), this.text = UU, this.length = XU
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(UU, XU, zU, cU) {
        for (let yU = 0;; yU++) {
          let QU = this.text[yU],
            AU = cU + QU.length;
          if ((XU ? zU : AU) >= UU) return new PU(cU, AU, zU, QU);
          cU = AU + 1, zU++
        }
      }
      decompose(UU, XU, zU, cU) {
        let yU = UU <= 0 && XU >= this.length ? this : new tU(GU(this.text, UU, XU), Math.min(XU, this.length) - Math.max(0, UU));
        if (1 & cU) {
          let UU = zU.pop(),
            XU = kU(yU.text, UU.text.slice(), 0, yU.length);
          if (XU.length <= 32) zU.push(new tU(XU, UU.length + yU.length));
          else {
            let UU = XU.length >> 1;
            zU.push(new tU(XU.slice(0, UU)), new tU(XU.slice(UU)))
          }
        } else zU.push(yU)
      }
      replace(UU, XU, zU) {
        if (!(zU instanceof tU)) return super.replace(UU, XU, zU);
        [UU, XU] = WU(this, UU, XU);
        let cU = kU(this.text, kU(zU.text, GU(this.text, 0, UU)), XU),
          yU = this.length + zU.length - (XU - UU);
        return cU.length <= 32 ? new tU(cU, yU) : gU.from(tU.split(cU, []), yU)
      }
      sliceString(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [UU, XU] = WU(this, UU, XU);
        let cU = "";
        for (let yU = 0, QU = 0; yU <= XU && QU < this.text.length; QU++) {
          let AU = this.text[QU],
            FU = yU + AU.length;
          yU > UU && QU && (cU += zU), UU < FU && XU > yU && (cU += AU.slice(Math.max(0, UU - yU), XU - yU)), yU = FU + 1
        }
        return cU
      }
      flatten(UU) {
        for (let XU of this.text) UU.push(XU)
      }
      scanIdentical() {
        return 0
      }
      static split(UU, XU) {
        let zU = [],
          cU = -1;
        for (let yU of UU) zU.push(yU), cU += yU.length + 1, 32 == zU.length && (XU.push(new tU(zU, cU)), zU = [], cU = -1);
        return cU > -1 && XU.push(new tU(zU, cU)), XU
      }
    }
    class gU extends aU {
      constructor(UU, XU) {
        super(), this.children = UU, this.length = XU, this.lines = 0;
        for (let zU of UU) this.lines += zU.lines
      }
      lineInner(UU, XU, zU, cU) {
        for (let yU = 0;; yU++) {
          let QU = this.children[yU],
            AU = cU + QU.length,
            FU = zU + QU.lines - 1;
          if ((XU ? FU : AU) >= UU) return QU.lineInner(UU, XU, zU, cU);
          cU = AU + 1, zU = FU + 1
        }
      }
      decompose(UU, XU, zU, cU) {
        for (let yU = 0, QU = 0; QU <= XU && yU < this.children.length; yU++) {
          let AU = this.children[yU],
            FU = QU + AU.length;
          if (UU <= FU && XU >= QU) {
            let yU = cU & ((QU <= UU ? 1 : 0) | (FU >= XU ? 2 : 0));
            QU >= UU && FU <= XU && !yU ? zU.push(AU) : AU.decompose(UU - QU, XU - QU, zU, yU)
          }
          QU = FU + 1
        }
      }
      replace(UU, XU, zU) {
        if ([UU, XU] = WU(this, UU, XU), zU.lines < this.lines)
          for (let cU = 0, yU = 0; cU < this.children.length; cU++) {
            let QU = this.children[cU],
              AU = yU + QU.length;
            if (UU >= yU && XU <= AU) {
              let FU = QU.replace(UU - yU, XU - yU, zU),
                oU = this.lines - QU.lines + FU.lines;
              if (FU.lines < oU >> 4 && FU.lines > oU >> 6) {
                let yU = this.children.slice();
                return yU[cU] = FU, new gU(yU, this.length - (XU - UU) + zU.length)
              }
              return super.replace(yU, AU, FU)
            }
            yU = AU + 1
          }
        return super.replace(UU, XU, zU)
      }
      sliceString(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [UU, XU] = WU(this, UU, XU);
        let cU = "";
        for (let yU = 0, QU = 0; yU < this.children.length && QU <= XU; yU++) {
          let AU = this.children[yU],
            FU = QU + AU.length;
          QU > UU && yU && (cU += zU), UU < FU && XU > QU && (cU += AU.sliceString(UU - QU, XU - QU, zU)), QU = FU + 1
        }
        return cU
      }
      flatten(UU) {
        for (let XU of this.children) XU.flatten(UU)
      }
      scanIdentical(UU, XU) {
        if (!(UU instanceof gU)) return 0;
        let zU = 0,
          [cU, yU, QU, AU] = XU > 0 ? [0, 0, this.children.length, UU.children.length] : [this.children.length - 1, UU.children.length - 1, -1, -1];
        for (;; cU += XU, yU += XU) {
          if (cU == QU || yU == AU) return zU;
          let FU = this.children[cU],
            oU = UU.children[yU];
          if (FU != oU) return zU + FU.scanIdentical(oU, XU);
          zU += FU.length + 1
        }
      }
      static from(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU.reduce(((UU, XU) => UU + XU.length + 1), -1),
          zU = 0;
        for (let NU of UU) zU += NU.lines;
        if (zU < 32) {
          let zU = [];
          for (let XU of UU) XU.flatten(zU);
          return new tU(zU, XU)
        }
        let cU = Math.max(32, zU >> 5),
          yU = cU << 1,
          QU = cU >> 1,
          AU = [],
          FU = 0,
          oU = -1,
          DU = [];

        function EU(UU) {
          let XU;
          if (UU.lines > yU && UU instanceof gU)
            for (let zU of UU.children) EU(zU);
          else UU.lines > QU && (FU > QU || !FU) ? (YU(), AU.push(UU)) : UU instanceof tU && FU && (XU = DU[DU.length - 1]) instanceof tU && UU.lines + XU.lines <= 32 ? (FU += UU.lines, oU += UU.length + 1, DU[DU.length - 1] = new tU(XU.text.concat(UU.text), XU.length + 1 + UU.length)) : (FU + UU.lines > cU && YU(), FU += UU.lines, oU += UU.length + 1, DU.push(UU))
        }

        function YU() {
          0 != FU && (AU.push(1 == DU.length ? DU[0] : gU.from(DU, oU)), oU = -1, FU = DU.length = 0)
        }
        for (let NU of UU) EU(NU);
        return YU(), 1 == AU.length ? AU[0] : new gU(AU, XU)
      }
    }

    function kU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let yU = 0, QU = 0, AU = !0; QU < UU.length && yU <= cU; QU++) {
        let FU = UU[QU],
          oU = yU + FU.length;
        oU >= zU && (oU > cU && (FU = FU.slice(0, cU - yU)), yU < zU && (FU = FU.slice(zU - yU)), AU ? (XU[XU.length - 1] += FU, AU = !1) : XU.push(FU)), yU = oU + 1
      }
      return XU
    }

    function GU(UU, XU, zU) {
      return kU(UU, [""], XU, zU)
    }
    aU.empty = new tU([""], 0);
    class BU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = XU, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [UU], this.offsets = [XU > 0 ? 1 : (UU instanceof tU ? UU.text.length : UU.children.length) << 1]
      }
      nextInner(UU, XU) {
        for (this.done = this.lineBreak = !1;;) {
          let zU = this.nodes.length - 1,
            cU = this.nodes[zU],
            yU = this.offsets[zU],
            QU = yU >> 1,
            AU = cU instanceof tU ? cU.text.length : cU.children.length;
          if (QU == (XU > 0 ? AU : 0)) {
            if (0 == zU) return this.done = !0, this.value = "", this;
            XU > 0 && this.offsets[zU - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & yU) == (XU > 0 ? 0 : 1)) {
            if (this.offsets[zU] += XU, 0 == UU) return this.lineBreak = !0, this.value = "\n", this;
            UU--
          } else if (cU instanceof tU) {
            let yU = cU.text[QU + (XU < 0 ? -1 : 0)];
            if (this.offsets[zU] += XU, yU.length > Math.max(0, UU)) return this.value = 0 == UU ? yU : XU > 0 ? yU.slice(UU) : yU.slice(0, yU.length - UU), this;
            UU -= yU.length
          } else {
            let yU = cU.children[QU + (XU < 0 ? -1 : 0)];
            UU > yU.length ? (UU -= yU.length, this.offsets[zU] += XU) : (XU < 0 && this.offsets[zU]--, this.nodes.push(yU), this.offsets.push(XU > 0 ? 1 : (yU instanceof tU ? yU.text.length : yU.children.length) << 1))
          }
        }
      }
      next() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return UU < 0 && (this.nextInner(-UU, -this.dir), UU = this.value.length), this.nextInner(UU, this.dir)
      }
    }
    class ZU {
      constructor(UU, XU, zU) {
        this.value = "", this.done = !1, this.cursor = new BU(UU, XU > zU ? -1 : 1), this.pos = XU > zU ? UU.length : 0, this.from = Math.min(XU, zU), this.to = Math.max(XU, zU)
      }
      nextInner(UU, XU) {
        if (XU < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        UU += Math.max(0, XU < 0 ? this.pos - this.to : this.from - this.pos);
        let zU = XU < 0 ? this.pos - this.from : this.to - this.pos;
        UU > zU && (UU = zU), zU -= UU;
        let {
          value: cU
        } = this.cursor.next(UU);
        return this.pos += (cU.length + UU) * XU, this.value = cU.length <= zU ? cU : XU < 0 ? cU.slice(cU.length - zU) : cU.slice(0, zU), this.done = !this.value, this
      }
      next() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return UU < 0 ? UU = Math.max(UU, this.from - this.pos) : UU > 0 && (UU = Math.min(UU, this.to - this.pos)), this.nextInner(UU, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class RU {
      constructor(UU) {
        this.inner = UU, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: XU,
            lineBreak: zU,
            value: cU
          } = this.inner.next(UU);
        return XU && this.afterBreak ? (this.value = "", this.afterBreak = !1) : XU ? (this.done = !0, this.value = "") : zU ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = cU, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (aU.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, BU.prototype[Symbol.iterator] = ZU.prototype[Symbol.iterator] = RU.prototype[Symbol.iterator] = function() {
      return this
    });
    class PU {
      constructor(UU, XU, zU, cU) {
        this.from = UU, this.to = XU, this.number = zU, this.text = cU
      }
      get length() {
        return this.to - this.from
      }
    }

    function WU(UU, XU, zU) {
      return [XU = Math.max(0, Math.min(UU.length, XU)), Math.max(XU, Math.min(UU.length, zU))]
    }

    function dU(UU, XU) {
      return oU(UU, XU, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function LU(UU, XU) {
      let zU = UU.charCodeAt(XU);
      if (!((cU = zU) >= 55296 && cU < 56320) || XU + 1 == UU.length) return zU;
      var cU;
      let yU = UU.charCodeAt(XU + 1);
      return function(UU) {
        return UU >= 56320 && UU < 57344
      }(yU) ? yU - 56320 + (zU - 55296 << 10) + 65536 : zU
    }

    function eU(UU) {
      return UU <= 65535 ? String.fromCharCode(UU) : (UU -= 65536, String.fromCharCode(55296 + (UU >> 10), 56320 + (1023 & UU)))
    }

    function CU(UU) {
      return UU < 65536 ? 1 : 2
    }
    const wU = /\r\n?|\n/;
    var qU = function(UU) {
      return UU[UU.Simple = 0] = "Simple", UU[UU.TrackDel = 1] = "TrackDel", UU[UU.TrackBefore = 2] = "TrackBefore", UU[UU.TrackAfter = 3] = "TrackAfter", UU
    }(qU || (qU = {}));
    class OU {
      constructor(UU) {
        this.sections = UU
      }
      get length() {
        let UU = 0;
        for (let XU = 0; XU < this.sections.length; XU += 2) UU += this.sections[XU];
        return UU
      }
      get newLength() {
        let UU = 0;
        for (let XU = 0; XU < this.sections.length; XU += 2) {
          let zU = this.sections[XU + 1];
          UU += zU < 0 ? this.sections[XU] : zU
        }
        return UU
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(UU) {
        for (let XU = 0, zU = 0, cU = 0; XU < this.sections.length;) {
          let yU = this.sections[XU++],
            QU = this.sections[XU++];
          QU < 0 ? (UU(zU, cU, yU), cU += yU) : cU += QU, zU += yU
        }
      }
      iterChangedRanges(UU) {
        fU(this, UU, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let UU = [];
        for (let XU = 0; XU < this.sections.length;) {
          let zU = this.sections[XU++],
            cU = this.sections[XU++];
          cU < 0 ? UU.push(zU, cU) : UU.push(cU, zU)
        }
        return new OU(UU)
      }
      composeDesc(UU) {
        return this.empty ? UU : UU.empty ? this : HU(this, UU)
      }
      mapDesc(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return UU.empty ? this : iU(this, UU, XU)
      }
      mapPos(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qU.Simple,
          cU = 0,
          yU = 0;
        for (let QU = 0; QU < this.sections.length;) {
          let AU = this.sections[QU++],
            FU = this.sections[QU++],
            oU = cU + AU;
          if (FU < 0) {
            if (oU > UU) return yU + (UU - cU);
            yU += AU
          } else {
            if (zU != qU.Simple && oU >= UU && (zU == qU.TrackDel && cU < UU && oU > UU || zU == qU.TrackBefore && cU < UU || zU == qU.TrackAfter && oU > UU)) return null;
            if (oU > UU || oU == UU && XU < 0 && !AU) return UU == cU || XU < 0 ? yU : yU + FU;
            yU += FU
          }
          cU = oU
        }
        if (UU > cU) throw new RangeError(`Position ${UU} is out of range for changeset of length ${cU}`);
        return yU
      }
      touchesRange(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        for (let zU = 0, cU = 0; zU < this.sections.length && cU <= XU;) {
          let yU = cU + this.sections[zU++];
          if (this.sections[zU++] >= 0 && cU <= XU && yU >= UU) return !(cU < UU && yU > XU) || "cover";
          cU = yU
        }
        return !1
      }
      toString() {
        let UU = "";
        for (let XU = 0; XU < this.sections.length;) {
          let zU = this.sections[XU++],
            cU = this.sections[XU++];
          UU += (UU ? " " : "") + zU + (cU >= 0 ? ":" + cU : "")
        }
        return UU
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(UU) {
        if (!Array.isArray(UU) || UU.length % 2 || UU.some((UU => "number" != typeof UU))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new OU(UU)
      }
      static create(UU) {
        return new OU(UU)
      }
    }
    class SU extends OU {
      constructor(UU, XU) {
        super(UU), this.inserted = XU
      }
      apply(UU) {
        if (this.length != UU.length) throw new RangeError("Applying change set to a document with the wrong length");
        return fU(this, ((XU, zU, cU, yU, QU) => UU = UU.replace(cU, cU + (zU - XU), QU)), !1), UU
      }
      mapDesc(UU) {
        return iU(this, UU, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(UU) {
        let XU = this.sections.slice(),
          zU = [];
        for (let cU = 0, yU = 0; cU < XU.length; cU += 2) {
          let QU = XU[cU],
            AU = XU[cU + 1];
          if (AU >= 0) {
            XU[cU] = AU, XU[cU + 1] = QU;
            let FU = cU >> 1;
            for (; zU.length < FU;) zU.push(aU.empty);
            zU.push(QU ? UU.slice(yU, yU + QU) : aU.empty)
          }
          yU += QU
        }
        return new SU(XU, zU)
      }
      compose(UU) {
        return this.empty ? UU : UU.empty ? this : HU(this, UU, !0)
      }
      map(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return UU.empty ? this : iU(this, UU, XU, !0)
      }
      iterChanges(UU) {
        fU(this, UU, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return OU.create(this.sections)
      }
      filter(UU) {
        let XU = [],
          zU = [],
          cU = [],
          yU = new MU(this);
        UU: for (let QU = 0, AU = 0;;) {
          let FU = QU == UU.length ? 1e9 : UU[QU++];
          for (; AU < FU || AU == FU && 0 == yU.len;) {
            if (yU.done) break UU;
            let UU = Math.min(yU.len, FU - AU);
            rU(cU, UU, -1);
            let QU = -1 == yU.ins ? -1 : 0 == yU.off ? yU.ins : 0;
            rU(XU, UU, QU), QU > 0 && uU(zU, XU, yU.text), yU.forward(UU), AU += UU
          }
          let oU = UU[QU++];
          for (; AU < oU;) {
            if (yU.done) break UU;
            let UU = Math.min(yU.len, oU - AU);
            rU(XU, UU, -1), rU(cU, UU, -1 == yU.ins ? -1 : 0 == yU.off ? yU.ins : 0), yU.forward(UU), AU += UU
          }
        }
        return {
          changes: new SU(XU, zU),
          filtered: OU.create(cU)
        }
      }
      toJSON() {
        let UU = [];
        for (let XU = 0; XU < this.sections.length; XU += 2) {
          let zU = this.sections[XU],
            cU = this.sections[XU + 1];
          cU < 0 ? UU.push(zU) : 0 == cU ? UU.push([zU]) : UU.push([zU].concat(this.inserted[XU >> 1].toJSON()))
        }
        return UU
      }
      static of (UU, XU, zU) {
        let cU = [],
          yU = [],
          QU = 0,
          AU = null;

        function FU() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !cU.length) return;
          QU < XU && rU(cU, XU - QU, -1);
          let UU = new SU(cU, yU);
          AU = AU ? AU.compose(UU.map(AU)) : UU, cU = [], yU = [], QU = 0
        }
        return function UU(oU) {
          if (Array.isArray(oU))
            for (let XU of oU) UU(XU);
          else if (oU instanceof SU) {
            if (oU.length != XU) throw new RangeError(`Mismatched change set length (got ${oU.length}, expected ${XU})`);
            FU(), AU = AU ? AU.compose(oU.map(AU)) : oU
          } else {
            let {
              from: UU,
              to: AU = UU,
              insert: DU
            } = oU;
            if (UU > AU || UU < 0 || AU > XU) throw new RangeError(`Invalid change range ${UU} to ${AU} (in doc of length ${XU})`);
            let EU = DU ? "string" == typeof DU ? aU.of(DU.split(zU || wU)) : DU : aU.empty,
              YU = EU.length;
            if (UU == AU && 0 == YU) return;
            UU < QU && FU(), UU > QU && rU(cU, UU - QU, -1), rU(cU, AU - UU, YU), uU(yU, cU, EU), QU = AU
          }
        }(UU), FU(!AU), AU
      }
      static empty(UU) {
        return new SU(UU ? [UU, -1] : [], [])
      }
      static fromJSON(UU) {
        if (!Array.isArray(UU)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let XU = [],
          zU = [];
        for (let cU = 0; cU < UU.length; cU++) {
          let yU = UU[cU];
          if ("number" == typeof yU) XU.push(yU, -1);
          else {
            if (!Array.isArray(yU) || "number" != typeof yU[0] || yU.some(((UU, XU) => XU && "string" != typeof UU))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == yU.length) XU.push(yU[0], 0);
            else {
              for (; zU.length < cU;) zU.push(aU.empty);
              zU[cU] = aU.of(yU.slice(1)), XU.push(yU[0], zU[cU].length)
            }
          }
        }
        return new SU(XU, zU)
      }
      static createSet(UU, XU) {
        return new SU(UU, XU)
      }
    }

    function rU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == XU && zU <= 0) return;
      let yU = UU.length - 2;
      yU >= 0 && zU <= 0 && zU == UU[yU + 1] ? UU[yU] += XU : yU >= 0 && 0 == XU && 0 == UU[yU] ? UU[yU + 1] += zU : cU ? (UU[yU] += XU, UU[yU + 1] += zU) : UU.push(XU, zU)
    }

    function uU(UU, XU, zU) {
      if (0 == zU.length) return;
      let cU = XU.length - 2 >> 1;
      if (cU < UU.length) UU[UU.length - 1] = UU[UU.length - 1].append(zU);
      else {
        for (; UU.length < cU;) UU.push(aU.empty);
        UU.push(zU)
      }
    }

    function fU(UU, XU, zU) {
      let cU = UU.inserted;
      for (let yU = 0, QU = 0, AU = 0; AU < UU.sections.length;) {
        let FU = UU.sections[AU++],
          oU = UU.sections[AU++];
        if (oU < 0) yU += FU, QU += FU;
        else {
          let DU = yU,
            EU = QU,
            YU = aU.empty;
          for (; DU += FU, EU += oU, oU && cU && (YU = YU.append(cU[AU - 2 >> 1])), !(zU || AU == UU.sections.length || UU.sections[AU + 1] < 0);) FU = UU.sections[AU++], oU = UU.sections[AU++];
          XU(yU, DU, QU, EU, YU), yU = DU, QU = EU
        }
      }
    }

    function iU(UU, XU, zU) {
      let cU = [],
        yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        QU = new MU(UU),
        AU = new MU(XU),
        FU = 0;
      for (let oU = -1;;) {
        if (++FU > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (QU.done && AU.len || AU.done && QU.len) throw new Error("Mismatched change set lengths");
        if (-1 == QU.ins && -1 == AU.ins) {
          let UU = Math.min(QU.len, AU.len);
          rU(cU, UU, -1), QU.forward(UU), AU.forward(UU)
        } else if (AU.ins >= 0 && (QU.ins < 0 || oU == QU.i || 0 == QU.off && (AU.len < QU.len || AU.len == QU.len && !zU))) {
          let UU = AU.len;
          for (rU(cU, AU.ins, -1); UU;) {
            if (++FU > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let XU = Math.min(QU.len, UU);
            QU.ins >= 0 && oU < QU.i && QU.len <= XU && (rU(cU, 0, QU.ins), yU && uU(yU, cU, QU.text), oU = QU.i), QU.forward(XU), UU -= XU
          }
          AU.next()
        } else {
          if (!(QU.ins >= 0)) {
            if (QU.done && AU.done) return yU ? SU.createSet(cU, yU) : OU.create(cU);
            throw new Error("Mismatched change set lengths")
          } {
            let UU = 0,
              XU = QU.len;
            for (; XU;) {
              if (++FU > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == AU.ins) {
                let zU = Math.min(XU, AU.len);
                UU += zU, XU -= zU, AU.forward(zU)
              } else {
                if (!(0 == AU.ins && AU.len < XU)) break;
                XU -= AU.len, AU.next()
              }
            }
            rU(cU, UU, oU < QU.i ? QU.ins : 0), yU && oU < QU.i && uU(yU, cU, QU.text), oU = QU.i, QU.forward(QU.len - XU)
          }
        }
      }
    }

    function HU(UU, XU) {
      let zU = [],
        cU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        yU = new MU(UU),
        QU = new MU(XU),
        AU = 0;
      for (let FU = !1;;) {
        if (++AU > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (yU.done && QU.done) return cU ? SU.createSet(zU, cU) : OU.create(zU);
        if (0 == yU.ins) rU(zU, yU.len, 0, FU), yU.next();
        else if (0 != QU.len || QU.done) {
          if (yU.done || QU.done) throw new Error("Mismatched change set lengths");
          {
            let UU = Math.min(yU.len2, QU.len),
              XU = zU.length;
            if (-1 == yU.ins) {
              let XU = -1 == QU.ins ? -1 : QU.off ? 0 : QU.ins;
              rU(zU, UU, XU, FU), cU && XU && uU(cU, zU, QU.text)
            } else - 1 == QU.ins ? (rU(zU, yU.off ? 0 : yU.len, UU, FU), cU && uU(cU, zU, yU.textBit(UU))) : (rU(zU, yU.off ? 0 : yU.len, QU.off ? 0 : QU.ins, FU), cU && !QU.off && uU(cU, zU, QU.text));
            FU = (yU.ins > UU || QU.ins >= 0 && QU.len > UU) && (FU || zU.length > XU), yU.forward2(UU), QU.forward(UU)
          }
        } else rU(zU, 0, QU.ins, FU), cU && uU(cU, zU, QU.text), QU.next()
      }
    }
    class MU {
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
        } = this.set, XU = this.i - 2 >> 1;
        return XU >= UU.length ? aU.empty : UU[XU]
      }
      textBit(UU) {
        let {
          inserted: XU
        } = this.set, zU = this.i - 2 >> 1;
        return zU >= XU.length && !UU ? aU.empty : XU[zU].slice(this.off, null == UU ? void 0 : this.off + UU)
      }
      forward(UU) {
        UU == this.len ? this.next() : (this.len -= UU, this.off += UU)
      }
      forward2(UU) {
        -1 == this.ins ? this.forward(UU) : UU == this.ins ? this.next() : (this.ins -= UU, this.off += UU)
      }
    }
    class vU {
      constructor(UU, XU, zU) {
        this.from = UU, this.to = XU, this.flags = zU
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
        let XU, zU, cU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? XU = zU = UU.mapPos(this.from, cU) : (XU = UU.mapPos(this.from, 1), zU = UU.mapPos(this.to, -1)), XU == this.from && zU == this.to ? this : new vU(XU, zU, this.flags)
      }
      extend(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (UU <= this.anchor && XU >= this.anchor) return VU.range(UU, XU, void 0, void 0, zU);
        let cU = Math.abs(UU - this.anchor) > Math.abs(XU - this.anchor) ? UU : XU;
        return VU.range(this.anchor, cU, void 0, void 0, zU)
      }
      eq(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == UU.anchor && this.head == UU.head && this.goalColumn == UU.goalColumn && (!XU || !this.empty || this.assoc == UU.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(UU) {
        if (!UU || "number" != typeof UU.anchor || "number" != typeof UU.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return VU.range(UU.anchor, UU.head)
      }
      static create(UU, XU, zU) {
        return new vU(UU, XU, zU)
      }
    }
    class VU {
      constructor(UU, XU) {
        this.Qt = UU, this.mainIndex = XU
      }
      map(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return UU.empty ? this : VU.create(this.Qt.map((zU => zU.map(UU, XU))), this.mainIndex)
      }
      eq(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.Qt.length != UU.Qt.length || this.mainIndex != UU.mainIndex) return !1;
        for (let zU = 0; zU < this.Qt.length; zU++)
          if (!this.Qt[zU].eq(UU.Qt[zU], XU)) return !1;
        return !0
      }
      get main() {
        return this.Qt[this.mainIndex]
      }
      asSingle() {
        return 1 == this.Qt.length ? this : new VU([this.main], 0)
      }
      addRange(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return VU.create([UU].concat(this.Qt), XU ? 0 : this.mainIndex + 1)
      }
      replaceRange(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          zU = this.Qt.slice();
        return zU[XU] = UU, VU.create(zU, this.mainIndex)
      }
      toJSON() {
        return {
          Qt: this.Qt.map((UU => UU.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(UU) {
        if (!UU || !Array.isArray(UU.Qt) || "number" != typeof UU.main || UU.main >= UU.Qt.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new VU(UU.Qt.map((UU => vU.fromJSON(UU))), UU.main)
      }
      static single(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        return new VU([VU.range(UU, XU)], 0)
      }
      static create(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == UU.length) throw new RangeError("A selection needs at least one range");
        for (let zU = 0, cU = 0; cU < UU.length; cU++) {
          let yU = UU[cU];
          if (yU.empty ? yU.from <= zU : yU.from < zU) return VU.normalized(UU.slice(), XU);
          zU = yU.to
        }
        return new VU(UU, XU)
      }
      static cursor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        return vU.create(UU, UU, (0 == XU ? 0 : XU < 0 ? 8 : 16) | (null == zU ? 7 : Math.min(6, zU)) | (null !== cU && void 0 !== cU ? cU : 16777215) << 6)
      }
      static range(UU, XU, zU, cU, yU) {
        let QU = (null !== zU && void 0 !== zU ? zU : 16777215) << 6 | (null == cU ? 7 : Math.min(6, cU));
        return yU || UU == XU || (yU = XU < UU ? 1 : -1), XU < UU ? vU.create(XU, UU, 48 | QU) : vU.create(UU, XU, (yU ? yU < 0 ? 8 : 16 : 0) | QU)
      }
      static normalized(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = UU[XU];
        UU.sort(((UU, XU) => UU.from - XU.from)), XU = UU.indexOf(zU);
        for (let cU = 1; cU < UU.length; cU++) {
          let zU = UU[cU],
            yU = UU[cU - 1];
          if (zU.empty ? zU.from <= yU.to : zU.from < yU.to) {
            let QU = yU.from,
              AU = Math.max(zU.to, yU.to);
            cU <= XU && XU--, UU.splice(--cU, 2, zU.anchor > zU.head ? VU.range(AU, QU) : VU.range(QU, AU))
          }
        }
        return new VU(UU, XU)
      }
    }

    function sU(UU, XU) {
      for (let zU of UU.Qt)
        if (zU.to > XU) throw new RangeError("Selection points outside of document")
    }
    let nU = 0;
    class mU {
      constructor(UU, XU, zU, cU, yU) {
        this.combine = UU, this.compareInput = XU, this.compare = zU, this.isStatic = cU, this.id = nU++, this.default = UU([]), this.extensions = "function" == typeof yU ? yU(this) : yU
      }
      get reader() {
        return this
      }
      static define() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new mU(UU.combine || (UU => UU), UU.compareInput || ((UU, XU) => UU === XU), UU.compare || (UU.combine ? (UU, XU) => UU === XU : lU), !!UU.static, UU.enables)
      }
      of(UU) {
        return new xU([], this, 0, UU)
      }
      compute(UU, XU) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new xU(UU, this, 1, XU)
      }
      computeN(UU, XU) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new xU(UU, this, 2, XU)
      }
      from(UU, XU) {
        return XU || (XU = UU => UU), this.compute([UU], (zU => XU(zU.field(UU))))
      }
    }

    function lU(UU, XU) {
      return UU == XU || UU.length == XU.length && UU.every(((UU, zU) => UU === XU[zU]))
    }
    class xU {
      constructor(UU, XU, zU, cU) {
        this.dependencies = UU, this.facet = XU, this.type = zU, this.value = cU, this.id = nU++
      }
      dynamicSlot(UU) {
        var XU;
        let zU = this.value,
          cU = this.facet.compareInput,
          yU = this.id,
          QU = UU[yU] >> 1,
          AU = 2 == this.type,
          FU = !1,
          oU = !1,
          DU = [];
        for (let EU of this.dependencies) "doc" == EU ? FU = !0 : "selection" == EU ? oU = !0 : 0 == (1 & (null !== (XU = UU[EU.id]) && void 0 !== XU ? XU : 1)) && DU.push(UU[EU.id]);
        return {
          create: UU => (UU.values[QU] = zU(UU), 1),
          update(UU, XU) {
            if (FU && XU.docChanged || oU && (XU.docChanged || XU.selection) || jU(UU, DU)) {
              let XU = zU(UU);
              if (AU ? !JU(XU, UU.values[QU], cU) : !cU(XU, UU.values[QU])) return UU.values[QU] = XU, 1
            }
            return 0
          },
          reconfigure: (UU, XU) => {
            let FU, oU = XU.config.address[yU];
            if (null != oU) {
              let yU = EX(XU, oU);
              if (this.dependencies.every((zU => zU instanceof mU ? XU.facet(zU) === UU.facet(zU) : !(zU instanceof TU) || XU.field(zU, !1) == UU.field(zU, !1))) || (AU ? JU(FU = zU(UU), yU, cU) : cU(FU = zU(UU), yU))) return UU.values[QU] = yU, 0
            } else FU = zU(UU);
            return UU.values[QU] = FU, 1
          }
        }
      }
    }

    function JU(UU, XU, zU) {
      if (UU.length != XU.length) return !1;
      for (let cU = 0; cU < UU.length; cU++)
        if (!zU(UU[cU], XU[cU])) return !1;
      return !0
    }

    function jU(UU, XU) {
      let zU = !1;
      for (let cU of XU) 1 & DX(UU, cU) && (zU = !0);
      return zU
    }

    function KU(UU, XU, zU) {
      let cU = zU.map((XU => UU[XU.id])),
        yU = zU.map((UU => UU.type)),
        QU = cU.filter((UU => !(1 & UU))),
        AU = UU[XU.id] >> 1;

      function FU(UU) {
        let zU = [];
        for (let XU = 0; XU < cU.length; XU++) {
          let QU = EX(UU, cU[XU]);
          if (2 == yU[XU])
            for (let UU of QU) zU.push(UU);
          else zU.push(QU)
        }
        return XU.combine(zU)
      }
      return {
        create(UU) {
          for (let XU of cU) DX(UU, XU);
          return UU.values[AU] = FU(UU), 1
        },
        update(UU, zU) {
          if (!jU(UU, QU)) return 0;
          let cU = FU(UU);
          return XU.compare(cU, UU.values[AU]) ? 0 : (UU.values[AU] = cU, 1)
        },
        reconfigure(UU, yU) {
          let QU = jU(UU, cU),
            oU = yU.config.facets[XU.id],
            DU = yU.facet(XU);
          if (oU && !QU && lU(zU, oU)) return UU.values[AU] = DU, 0;
          let EU = FU(UU);
          return XU.compare(EU, DU) ? (UU.values[AU] = DU, 0) : (UU.values[AU] = EU, 1)
        }
      }
    }
    const bU = mU.define({
      static: !0
    });
    class TU {
      constructor(UU, XU, zU, cU, yU) {
        this.id = UU, this.createF = XU, this.updateF = zU, this.compareF = cU, this.spec = yU, this.provides = void 0
      }
      static define(UU) {
        let XU = new TU(nU++, UU.create, UU.update, UU.compare || ((UU, XU) => UU === XU), UU);
        return UU.provide && (XU.provides = UU.provide(XU)), XU
      }
      create(UU) {
        let XU = UU.facet(bU).find((UU => UU.field == this));
        return ((null === XU || void 0 === XU ? void 0 : XU.create) || this.createF)(UU)
      }
      slot(UU) {
        let XU = UU[this.id] >> 1;
        return {
          create: UU => (UU.values[XU] = this.create(UU), 1),
          update: (UU, zU) => {
            let cU = UU.values[XU],
              yU = this.updateF(cU, zU);
            return this.compareF(cU, yU) ? 0 : (UU.values[XU] = yU, 1)
          },
          reconfigure: (UU, zU) => {
            let cU, yU = UU.facet(bU),
              QU = zU.facet(bU);
            return (cU = yU.find((UU => UU.field == this))) && cU != QU.find((UU => UU.field == this)) ? (UU.values[XU] = cU.create(UU), 1) : null != zU.config.address[this.id] ? (UU.values[XU] = zU.field(this), 0) : (UU.values[XU] = this.create(UU), 1)
          }
        }
      }
      init(UU) {
        return [this, bU.of({
          field: this,
          create: UU
        })]
      }
      get extension() {
        return this
      }
    }
    const hU = 4,
      UX = 3,
      XX = 2,
      zX = 1;

    function cX(UU) {
      return XU => new QX(XU, UU)
    }
    const yX = {
      highest: cX(0),
      high: cX(zX),
      default: cX(XX),
      low: cX(UX),
      lowest: cX(hU)
    };
    class QX {
      constructor(UU, XU) {
        this.inner = UU, this.prec = XU
      }
    }
    class AX {
      of(UU) {
        return new FX(this, UU)
      }
      reconfigure(UU) {
        return AX.reconfigure.of({
          compartment: this,
          extension: UU
        })
      }
      get(UU) {
        return UU.config.compartments.get(this)
      }
    }
    class FX {
      constructor(UU, XU) {
        this.compartment = UU, this.inner = XU
      }
    }
    class oX {
      constructor(UU, XU, zU, cU, yU, QU) {
        for (this.base = UU, this.compartments = XU, this.dynamicSlots = zU, this.address = cU, this.staticValues = yU, this.facets = QU, this.statusTemplate = []; this.statusTemplate.length < zU.length;) this.statusTemplate.push(0)
      }
      staticFacet(UU) {
        let XU = this.address[UU.id];
        return null == XU ? UU.default : this.staticValues[XU >> 1]
      }
      static resolve(UU, XU, zU) {
        let cU = [],
          yU = Object.create(null),
          QU = new Map;
        for (let YU of function(UU, XU, zU) {
            let cU = [
                [],
                [],
                [],
                [],
                []
              ],
              yU = new Map;

            function QU(UU, AU) {
              let FU = yU.get(UU);
              if (null != FU) {
                if (FU <= AU) return;
                let XU = cU[FU].indexOf(UU);
                XU > -1 && cU[FU].splice(XU, 1), UU instanceof FX && zU.delete(UU.compartment)
              }
              if (yU.set(UU, AU), Array.isArray(UU))
                for (let XU of UU) QU(XU, AU);
              else if (UU instanceof FX) {
                if (zU.has(UU.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let cU = XU.get(UU.compartment) || UU.inner;
                zU.set(UU.compartment, cU), QU(cU, AU)
              } else if (UU instanceof QX) QU(UU.inner, UU.prec);
              else if (UU instanceof TU) cU[AU].push(UU), UU.provides && QU(UU.provides, AU);
              else if (UU instanceof xU) cU[AU].push(UU), UU.facet.extensions && QU(UU.facet.extensions, XX);
              else {
                let XU = UU.extension;
                if (!XU) throw new Error(`Unrecognized extension value in extension set (${UU}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                QU(XU, AU)
              }
            }
            return QU(UU, XX), cU.reduce(((UU, XU) => UU.concat(XU)))
          }(UU, XU, QU)) YU instanceof TU ? cU.push(YU) : (yU[YU.facet.id] || (yU[YU.facet.id] = [])).push(YU);
        let AU = Object.create(null),
          FU = [],
          oU = [];
        for (let YU of cU) AU[YU.id] = oU.length << 1, oU.push((UU => YU.slot(UU)));
        let DU = null === zU || void 0 === zU ? void 0 : zU.config.facets;
        for (let YU in yU) {
          let UU = yU[YU],
            XU = UU[0].facet,
            cU = DU && DU[YU] || [];
          if (UU.every((UU => 0 == UU.type)))
            if (AU[XU.id] = FU.length << 1 | 1, lU(cU, UU)) FU.push(zU.facet(XU));
            else {
              let cU = XU.combine(UU.map((UU => UU.value)));
              FU.push(zU && XU.compare(cU, zU.facet(XU)) ? zU.facet(XU) : cU)
            }
          else {
            for (let XU of UU) 0 == XU.type ? (AU[XU.id] = FU.length << 1 | 1, FU.push(XU.value)) : (AU[XU.id] = oU.length << 1, oU.push((UU => XU.dynamicSlot(UU))));
            AU[XU.id] = oU.length << 1, oU.push((zU => KU(zU, XU, UU)))
          }
        }
        let EU = oU.map((UU => UU(AU)));
        return new oX(UU, QU, EU, AU, FU, yU)
      }
    }

    function DX(UU, XU) {
      if (1 & XU) return 2;
      let zU = XU >> 1,
        cU = UU.status[zU];
      if (4 == cU) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & cU) return cU;
      UU.status[zU] = 4;
      let yU = UU.computeSlot(UU, UU.config.dynamicSlots[zU]);
      return UU.status[zU] = 2 | yU
    }

    function EX(UU, XU) {
      return 1 & XU ? UU.config.staticValues[XU >> 1] : UU.values[XU >> 1]
    }
    const YX = mU.define(),
      NX = mU.define({
        combine: UU => UU.some((UU => UU)),
        static: !0
      }),
      IX = mU.define({
        combine: UU => UU.length ? UU[0] : void 0,
        static: !0
      }),
      pX = mU.define(),
      aX = mU.define(),
      tX = mU.define(),
      gX = mU.define({
        combine: UU => !!UU.length && UU[0]
      });
    class kX {
      constructor(UU, XU) {
        this.type = UU, this.value = XU
      }
      static define() {
        return new GX
      }
    }
    class GX {
      of(UU) {
        return new kX(this, UU)
      }
    }
    class BX {
      constructor(UU) {
        this.map = UU
      }
      of(UU) {
        return new ZX(this, UU)
      }
    }
    class ZX {
      constructor(UU, XU) {
        this.type = UU, this.value = XU
      }
      map(UU) {
        let XU = this.type.map(this.value, UU);
        return void 0 === XU ? void 0 : XU == this.value ? this : new ZX(this.type, XU)
      }
      is(UU) {
        return this.type == UU
      }
      static define() {
        return new BX((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (UU => UU))
      }
      static mapEffects(UU, XU) {
        if (!UU.length) return UU;
        let zU = [];
        for (let cU of UU) {
          let UU = cU.map(XU);
          UU && zU.push(UU)
        }
        return zU
      }
    }
    ZX.reconfigure = ZX.define(), ZX.appendConfig = ZX.define();
    class RX {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.startState = UU, this.changes = XU, this.selection = zU, this.effects = cU, this.annotations = yU, this.scrollIntoView = QU, this._doc = null, this._state = null, zU && sU(zU, XU.newLength), yU.some((UU => UU.type == RX.time)) || (this.annotations = yU.concat(RX.time.of(Date.now())))
      }
      static create(UU, XU, zU, cU, yU, QU) {
        return new RX(UU, XU, zU, cU, yU, QU)
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
        for (let XU of this.annotations)
          if (XU.type == UU) return XU.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(UU) {
        let XU = this.annotation(RX.userEvent);
        return !(!XU || !(XU == UU || XU.length > UU.length && XU.slice(0, UU.length) == UU && "." == XU[UU.length]))
      }
    }

    function PX(UU, XU) {
      let zU = [];
      for (let cU = 0, yU = 0;;) {
        let QU, AU;
        if (cU < UU.length && (yU == XU.length || XU[yU] >= UU[cU])) QU = UU[cU++], AU = UU[cU++];
        else {
          if (!(yU < XU.length)) return zU;
          QU = XU[yU++], AU = XU[yU++]
        }!zU.length || zU[zU.length - 1] < QU ? zU.push(QU, AU) : zU[zU.length - 1] < AU && (zU[zU.length - 1] = AU)
      }
    }

    function WX(UU, XU, zU) {
      var cU;
      let yU, QU, AU;
      return zU ? (yU = XU.changes, QU = SU.empty(XU.changes.length), AU = UU.changes.compose(XU.changes)) : (yU = XU.changes.map(UU.changes), QU = UU.changes.mapDesc(XU.changes, !0), AU = UU.changes.compose(yU)), {
        changes: AU,
        selection: XU.selection ? XU.selection.map(QU) : null === (cU = UU.selection) || void 0 === cU ? void 0 : cU.map(yU),
        effects: ZX.mapEffects(UU.effects, yU).concat(ZX.mapEffects(XU.effects, QU)),
        annotations: UU.annotations.length ? UU.annotations.concat(XU.annotations) : XU.annotations,
        scrollIntoView: UU.scrollIntoView || XU.scrollIntoView
      }
    }

    function dX(UU, XU, zU) {
      let cU = XU.selection,
        yU = CX(XU.annotations);
      return XU.userEvent && (yU = yU.concat(RX.userEvent.of(XU.userEvent))), {
        changes: XU.changes instanceof SU ? XU.changes : SU.of(XU.changes || [], zU, UU.facet(IX)),
        selection: cU && (cU instanceof VU ? cU : VU.single(cU.anchor, cU.head)),
        effects: CX(XU.effects),
        annotations: yU,
        scrollIntoView: !!XU.scrollIntoView
      }
    }

    function LX(UU, XU, zU) {
      let cU = dX(UU, XU.length ? XU[0] : {}, UU.doc.length);
      XU.length && !1 === XU[0].filter && (zU = !1);
      for (let QU = 1; QU < XU.length; QU++) {
        !1 === XU[QU].filter && (zU = !1);
        let yU = !!XU[QU].sequential;
        cU = WX(cU, dX(UU, XU[QU], yU ? cU.changes.newLength : UU.doc.length), yU)
      }
      let yU = RX.create(UU, cU.changes, cU.selection, cU.effects, cU.annotations, cU.scrollIntoView);
      return function(UU) {
        let XU = UU.startState,
          zU = XU.facet(tX),
          cU = UU;
        for (let yU = zU.length - 1; yU >= 0; yU--) {
          let QU = zU[yU](UU);
          QU && Object.keys(QU).length && (cU = WX(cU, dX(XU, QU, UU.changes.newLength), !0))
        }
        return cU == UU ? UU : RX.create(XU, UU.changes, UU.selection, cU.effects, cU.annotations, cU.scrollIntoView)
      }(zU ? function(UU) {
        let XU = UU.startState,
          zU = !0;
        for (let yU of XU.facet(pX)) {
          let XU = yU(UU);
          if (!1 === XU) {
            zU = !1;
            break
          }
          Array.isArray(XU) && (zU = !0 === zU ? XU : PX(zU, XU))
        }
        if (!0 !== zU) {
          let cU, yU;
          if (!1 === zU) yU = UU.changes.invertedDesc, cU = SU.empty(XU.doc.length);
          else {
            let XU = UU.changes.filter(zU);
            cU = XU.changes, yU = XU.filtered.mapDesc(XU.changes).invertedDesc
          }
          UU = RX.create(XU, cU, UU.selection && UU.selection.map(yU), ZX.mapEffects(UU.effects, yU), UU.annotations, UU.scrollIntoView)
        }
        let cU = XU.facet(aX);
        for (let yU = cU.length - 1; yU >= 0; yU--) {
          let zU = cU[yU](UU);
          UU = zU instanceof RX ? zU : Array.isArray(zU) && 1 == zU.length && zU[0] instanceof RX ? zU[0] : LX(XU, CX(zU), !1)
        }
        return UU
      }(yU) : yU)
    }
    RX.time = kX.define(), RX.userEvent = kX.define(), RX.addToHistory = kX.define(), RX.remote = kX.define();
    const eX = [];

    function CX(UU) {
      return null == UU ? eX : Array.isArray(UU) ? UU : [UU]
    }
    var wX = function(UU) {
      return UU[UU.Word = 0] = "Word", UU[UU.Space = 1] = "Space", UU[UU.Other = 2] = "Other", UU
    }(wX || (wX = {}));
    const qX = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let OX;
    try {
      OX = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (zz) {}

    function SX(UU) {
      return XU => {
        if (!/\S/.test(XU)) return wX.Space;
        if (function(UU) {
            if (OX) return OX.test(UU);
            for (let XU = 0; XU < UU.length; XU++) {
              let zU = UU[XU];
              if (/\w/.test(zU) || zU > "\x80" && (zU.toUpperCase() != zU.toLowerCase() || qX.test(zU))) return !0
            }
            return !1
          }(XU)) return wX.Word;
        for (let zU = 0; zU < UU.length; zU++)
          if (XU.indexOf(UU[zU]) > -1) return wX.Word;
        return wX.Other
      }
    }
    class rX {
      constructor(UU, XU, zU, cU, yU, QU) {
        this.config = UU, this.doc = XU, this.selection = zU, this.values = cU, this.status = UU.statusTemplate.slice(), this.computeSlot = yU, QU && (QU._state = this);
        for (let AU = 0; AU < this.config.dynamicSlots.length; AU++) DX(this, AU << 1);
        this.computeSlot = null
      }
      field(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          zU = this.config.address[UU.id];
        if (null != zU) return DX(this, zU), EX(this, zU);
        if (XU) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        return LX(this, XU, !0)
      }
      applyTransaction(UU) {
        let XU, zU = this.config,
          {
            base: cU,
            compartments: yU
          } = zU;
        for (let AU of UU.effects) AU.is(AX.reconfigure) ? (zU && (yU = new Map, zU.compartments.forEach(((UU, XU) => yU.set(XU, UU))), zU = null), yU.set(AU.value.compartment, AU.value.extension)) : AU.is(ZX.reconfigure) ? (zU = null, cU = AU.value) : AU.is(ZX.appendConfig) && (zU = null, cU = CX(cU).concat(AU.value));
        if (zU) XU = UU.startState.values.slice();
        else {
          zU = oX.resolve(cU, yU, this), XU = new rX(zU, this.doc, this.selection, zU.dynamicSlots.map((() => null)), ((UU, XU) => XU.reconfigure(UU, this)), null).values
        }
        let QU = UU.startState.facet(NX) ? UU.newSelection : UU.newSelection.asSingle();
        new rX(zU, UU.newDoc, QU, XU, ((XU, zU) => zU.update(XU, UU)), UU)
      }
      replaceSelection(UU) {
        return "string" == typeof UU && (UU = this.toText(UU)), this.changeByRange((XU => ({
          changes: {
            from: XU.from,
            to: XU.to,
            insert: UU
          },
          range: VU.cursor(XU.from + UU.length)
        })))
      }
      changeByRange(UU) {
        let XU = this.selection,
          zU = UU(XU.Qt[0]),
          cU = this.changes(zU.changes),
          yU = [zU.range],
          QU = CX(zU.effects);
        for (let AU = 1; AU < XU.Qt.length; AU++) {
          let zU = UU(XU.Qt[AU]),
            FU = this.changes(zU.changes),
            oU = FU.map(cU);
          for (let UU = 0; UU < AU; UU++) yU[UU] = yU[UU].map(oU);
          let DU = cU.mapDesc(FU, !0);
          yU.push(zU.range.map(DU)), cU = cU.compose(oU), QU = ZX.mapEffects(QU, oU).concat(ZX.mapEffects(CX(zU.effects), DU))
        }
        return {
          changes: cU,
          selection: VU.create(yU, XU.mainIndex),
          effects: QU
        }
      }
      changes() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return UU instanceof SU ? UU : SU.of(UU, this.doc.length, this.facet(rX.lineSeparator))
      }
      toText(UU) {
        return aU.of(UU.split(this.facet(rX.lineSeparator) || wU))
      }
      sliceDoc() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(UU, XU, this.lineBreak)
      }
      facet(UU) {
        let XU = this.config.address[UU.id];
        return null == XU ? UU.default : (DX(this, XU), EX(this, XU))
      }
      toJSON(UU) {
        let XU = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (UU)
          for (let zU in UU) {
            let cU = UU[zU];
            cU instanceof TU && null != this.config.address[cU.id] && (XU[zU] = cU.spec.toJSON(this.field(UU[zU]), this))
          }
        return XU
      }
      static fromJSON(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          zU = arguments.length > 2 ? arguments[2] : void 0;
        if (!UU || "string" != typeof UU.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let cU = [];
        if (zU)
          for (let yU in zU)
            if (Object.prototype.hasOwnProperty.call(UU, yU)) {
              let XU = zU[yU],
                QU = UU[yU];
              cU.push(XU.init((UU => XU.spec.fromJSON(QU, UU))))
            } return rX.create({
          doc: UU.doc,
          selection: VU.fromJSON(UU.selection),
          extensions: XU.extensions ? cU.concat([XU.extensions]) : cU
        })
      }
      static create() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          XU = oX.resolve(UU.extensions || [], new Map),
          zU = UU.doc instanceof aU ? UU.doc : aU.of((UU.doc || "").split(XU.staticFacet(rX.lineSeparator) || wU)),
          cU = UU.selection ? UU.selection instanceof VU ? UU.selection : VU.single(UU.selection.anchor, UU.selection.head) : VU.single(0);
        return sU(cU, zU.length), XU.staticFacet(NX) || (cU = cU.asSingle()), new rX(XU, zU, cU, XU.dynamicSlots.map((() => null)), ((UU, XU) => XU.create(UU)), null)
      }
      get tabSize() {
        return this.facet(rX.tabSize)
      }
      get lineBreak() {
        return this.facet(rX.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(gX)
      }
      phrase(UU) {
        for (var XU = arguments.length, zU = new Array(XU > 1 ? XU - 1 : 0), cU = 1; cU < XU; cU++) zU[cU - 1] = arguments[cU];
        for (let yU of this.facet(rX.phrases))
          if (Object.prototype.hasOwnProperty.call(yU, UU)) {
            UU = yU[UU];
            break
          } return zU.length && (UU = UU.replace(/\$(\$|\d*)/g, ((UU, XU) => {
          if ("$" == XU) return "$";
          let cU = +(XU || 1);
          return !cU || cU > zU.length ? UU : zU[cU - 1]
        }))), UU
      }
      languageDataAt(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          cU = [];
        for (let yU of this.facet(YX))
          for (let QU of yU(this, XU, zU)) Object.prototype.hasOwnProperty.call(QU, UU) && cU.push(QU[UU]);
        return cU
      }
      charCategorizer(UU) {
        let XU = this.languageDataAt("wordChars", UU);
        return SX(XU.length ? XU[0] : "")
      }
      wordAt(UU) {
        let {
          text: XU,
          from: zU,
          length: cU
        } = this.doc.lineAt(UU), yU = this.charCategorizer(UU), QU = UU - zU, AU = UU - zU;
        for (; QU > 0;) {
          let UU = dU(XU, QU, !1);
          if (yU(XU.slice(UU, QU)) != wX.Word) break;
          QU = UU
        }
        for (; AU < cU;) {
          let UU = dU(XU, AU);
          if (yU(XU.slice(AU, UU)) != wX.Word) break;
          AU = UU
        }
        return QU == AU ? null : VU.range(QU + zU, AU + zU)
      }
    }

    function uX(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        cU = {};
      for (let yU of UU)
        for (let UU of Object.keys(yU)) {
          let XU = yU[UU],
            QU = cU[UU];
          if (void 0 === QU) cU[UU] = XU;
          else if (QU === XU || void 0 === XU);
          else {
            if (!Object.hasOwnProperty.call(zU, UU)) throw new Error("Config merge conflict for field " + UU);
            cU[UU] = zU[UU](QU, XU)
          }
        }
      for (let yU in XU) void 0 === cU[yU] && (cU[yU] = XU[yU]);
      return cU
    }
    rX.allowMultipleSelections = NX, rX.tabSize = mU.define({
      combine: UU => UU.length ? UU[0] : 4
    }), rX.lineSeparator = IX, rX.readOnly = gX, rX.phrases = mU.define({
      compare(UU, XU) {
        let zU = Object.keys(UU),
          cU = Object.keys(XU);
        return zU.length == cU.length && zU.every((zU => UU[zU] == XU[zU]))
      }
    }), rX.languageData = YX, rX.changeFilter = pX, rX.transactionFilter = aX, rX.transactionExtender = tX, AX.reconfigure = ZX.define();
    class fX {
      eq(UU) {
        return this == UU
      }
      range(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UU;
        return HX.create(UU, XU, this)
      }
    }

    function iX(UU, XU) {
      return UU == XU || UU.constructor == XU.constructor && UU.eq(XU)
    }
    fX.prototype.startSide = fX.prototype.endSide = 0, fX.prototype.point = !1, fX.prototype.mapMode = qU.TrackDel;
    class HX {
      constructor(UU, XU, zU) {
        this.from = UU, this.to = XU, this.value = zU
      }
      static create(UU, XU, zU) {
        return new HX(UU, XU, zU)
      }
    }

    function MX(UU, XU) {
      return UU.from - XU.from || UU.value.startSide - XU.value.startSide
    }
    class vX {
      constructor(UU, XU, zU, cU) {
        this.from = UU, this.to = XU, this.value = zU, this.oyU = cU
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          yU = zU ? this.to : this.from;
        for (let QU = cU, AU = yU.length;;) {
          if (QU == AU) return QU;
          let cU = QU + AU >> 1,
            FU = yU[cU] - UU || (zU ? this.value[cU].endSide : this.value[cU].startSide) - XU;
          if (cU == QU) return FU >= 0 ? QU : AU;
          FU >= 0 ? AU = cU : QU = cU + 1
        }
      }
      between(UU, XU, zU, cU) {
        for (let yU = this.findIndex(XU, -1e9, !0), QU = this.findIndex(zU, 1e9, !1, yU); yU < QU; yU++)
          if (!1 === cU(this.from[yU] + UU, this.to[yU] + UU, this.value[yU])) return !1
      }
      map(UU, XU) {
        let zU = [],
          cU = [],
          yU = [],
          QU = -1,
          AU = -1;
        for (let FU = 0; FU < this.value.length; FU++) {
          let oU, DU, EU = this.value[FU],
            YU = this.from[FU] + UU,
            NU = this.to[FU] + UU;
          if (YU == NU) {
            let UU = XU.mapPos(YU, EU.startSide, EU.mapMode);
            if (null == UU) continue;
            if (oU = DU = UU, EU.startSide != EU.endSide && (DU = XU.mapPos(YU, EU.endSide), DU < oU)) continue
          } else if (oU = XU.mapPos(YU, EU.startSide), DU = XU.mapPos(NU, EU.endSide), oU > DU || oU == DU && EU.startSide > 0 && EU.endSide <= 0) continue;
          (DU - oU || EU.endSide - EU.startSide) < 0 || (QU < 0 && (QU = oU), EU.point && (AU = Math.max(AU, DU - oU)), zU.push(EU), cU.push(oU - QU), yU.push(DU - QU))
        }
        return {
          mapped: zU.length ? new vX(cU, yU, zU, AU) : null,
          pos: QU
        }
      }
    }
    class VX {
      constructor(UU, XU, zU, cU) {
        this.chunkPos = UU, this.chunk = XU, this.nextLayer = zU, this.oyU = cU
      }
      static create(UU, XU, zU, cU) {
        return new VX(UU, XU, zU, cU)
      }
      get length() {
        let UU = this.chunk.length - 1;
        return UU < 0 ? 0 : Math.max(this.chunkEnd(UU), this.nextLayer.length)
      }
      get size() {
        if (this.kY) return 0;
        let UU = this.nextLayer.size;
        for (let XU of this.chunk) UU += XU.value.length;
        return UU
      }
      chunkEnd(UU) {
        return this.chunkPos[UU] + this.chunk[UU].length
      }
      update(UU) {
        let {
          add: XU = [],
          sort: zU = !1,
          filterFrom: cU = 0,
          filterTo: yU = this.length
        } = UU, QU = UU.filter;
        if (0 == XU.length && !QU) return this;
        if (zU && (XU = XU.slice().sort(MX)), this.kY) return XU.length ? VX.of(XU) : this;
        let AU = new mX(this, null, -1).goto(0),
          FU = 0,
          oU = [],
          DU = new sX;
        for (; AU.value || FU < XU.length;)
          if (FU < XU.length && (AU.from - XU[FU].from || AU.startSide - XU[FU].value.startSide) >= 0) {
            let UU = XU[FU++];
            DU.addInner(UU.from, UU.to, UU.value) || oU.push(UU)
          } else 1 == AU.rangeIndex && AU.chunkIndex < this.chunk.length && (FU == XU.length || this.chunkEnd(AU.chunkIndex) < XU[FU].from) && (!QU || cU > this.chunkEnd(AU.chunkIndex) || yU < this.chunkPos[AU.chunkIndex]) && DU.addChunk(this.chunkPos[AU.chunkIndex], this.chunk[AU.chunkIndex]) ? AU.nextChunk() : ((!QU || cU > AU.to || yU < AU.from || QU(AU.from, AU.to, AU.value)) && (DU.addInner(AU.from, AU.to, AU.value) || oU.push(HX.create(AU.from, AU.to, AU.value))), AU.next());
        return DU.finishInner(this.nextLayer.kY && !oU.length ? VX.empty : this.nextLayer.update({
          add: oU,
          filter: QU,
          filterFrom: cU,
          filterTo: yU
        }))
      }
      map(UU) {
        if (UU.empty || this.kY) return this;
        let XU = [],
          zU = [],
          cU = -1;
        for (let QU = 0; QU < this.chunk.length; QU++) {
          let yU = this.chunkPos[QU],
            AU = this.chunk[QU],
            FU = UU.touchesRange(yU, yU + AU.length);
          if (!1 === FU) cU = Math.max(cU, AU.oyU), XU.push(AU), zU.push(UU.mapPos(yU));
          else if (!0 === FU) {
            let {
              mapped: QU,
              pos: FU
            } = AU.map(yU, UU);
            QU && (cU = Math.max(cU, QU.oyU), XU.push(QU), zU.push(FU))
          }
        }
        let yU = this.nextLayer.map(UU);
        return 0 == XU.length ? yU : new VX(zU, XU, yU || VX.empty, cU)
      }
      between(UU, XU, zU) {
        if (!this.kY) {
          for (let cU = 0; cU < this.chunk.length; cU++) {
            let yU = this.chunkPos[cU],
              QU = this.chunk[cU];
            if (XU >= yU && UU <= yU + QU.length && !1 === QU.between(yU, UU - yU, XU - yU, zU)) return
          }
          this.nextLayer.between(UU, XU, zU)
        }
      }
      iter() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return lX.from([this]).goto(UU)
      }
      get kY() {
        return this.nextLayer == this
      }
      static iter(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return lX.from(UU).goto(XU)
      }
      static compare(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          QU = UU.filter((UU => UU.oyU > 0 || !UU.kY && UU.oyU >= yU)),
          AU = XU.filter((UU => UU.oyU > 0 || !UU.kY && UU.oyU >= yU)),
          FU = nX(QU, AU, zU),
          oU = new JX(QU, FU, yU),
          DU = new JX(AU, FU, yU);
        zU.iterGaps(((UU, XU, zU) => jX(oU, UU, DU, XU, zU, cU))), zU.empty && 0 == zU.length && jX(oU, 0, DU, 0, 0, cU)
      }
      static eq(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        null == cU && (cU = 999999999);
        let yU = UU.filter((UU => !UU.kY && XU.indexOf(UU) < 0)),
          QU = XU.filter((XU => !XU.kY && UU.indexOf(XU) < 0));
        if (yU.length != QU.length) return !1;
        if (!yU.length) return !0;
        let AU = nX(yU, QU),
          FU = new JX(yU, AU, 0).goto(zU),
          oU = new JX(QU, AU, 0).goto(zU);
        for (;;) {
          if (FU.to != oU.to || !KX(FU.active, oU.active) || FU.point && (!oU.point || !iX(FU.point, oU.point))) return !1;
          if (FU.to > cU) return !0;
          FU.next(), oU.next()
        }
      }
      static spans(UU, XU, zU, cU) {
        let yU = new JX(UU, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(XU),
          QU = XU,
          AU = yU.openStart;
        for (;;) {
          let UU = Math.min(yU.to, zU);
          if (yU.point) {
            let zU = yU.activeForPoint(yU.to),
              FU = yU.pointFrom < XU ? zU.length + 1 : yU.point.startSide < 0 ? zU.length : Math.min(zU.length, AU);
            cU.point(QU, UU, yU.point, zU, FU, yU.pointRank), AU = Math.min(yU.openEnd(UU), zU.length)
          } else UU > QU && (cU.span(QU, UU, yU.active, AU), AU = yU.openEnd(UU));
          if (yU.to > zU) return AU + (yU.point && yU.to > zU ? 1 : 0);
          QU = yU.to, yU.next()
        }
      }
      static of (UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = new sX;
        for (let cU of UU instanceof HX ? [UU] : XU ? function(UU) {
            if (UU.length > 1)
              for (let XU = UU[0], zU = 1; zU < UU.length; zU++) {
                let cU = UU[zU];
                if (MX(XU, cU) > 0) return UU.slice().sort(MX);
                XU = cU
              }
            return UU
          }(UU) : UU) zU.add(cU.from, cU.to, cU.value);
        return zU.finish()
      }
      static join(UU) {
        if (!UU.length) return VX.empty;
        let XU = UU[UU.length - 1];
        for (let zU = UU.length - 2; zU >= 0; zU--)
          for (let cU = UU[zU]; cU != VX.empty; cU = cU.nextLayer) XU = new VX(cU.chunkPos, cU.chunk, XU, Math.max(cU.oyU, XU.oyU));
        return XU
      }
    }
    VX.empty = new VX([], [], null, -1), VX.empty.nextLayer = VX.empty;
    class sX {
      finishChunk(UU) {
        this.chunks.push(new vX(this.from, this.to, this.value, this.oyU)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.oyU), this.oyU = -1, UU && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.oyU = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(UU, XU, zU) {
        this.addInner(UU, XU, zU) || (this.nextLayer || (this.nextLayer = new sX)).add(UU, XU, zU)
      }
      addInner(UU, XU, zU) {
        let cU = UU - this.lastTo || zU.startSide - this.last.endSide;
        if (cU <= 0 && (UU - this.lastFrom || zU.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(cU < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = UU), this.from.push(UU - this.chunkStart), this.to.push(XU - this.chunkStart), this.last = zU, this.lastFrom = UU, this.lastTo = XU, this.value.push(zU), zU.point && (this.oyU = Math.max(this.oyU, XU - UU)), !0)
      }
      addChunk(UU, XU) {
        if ((UU - this.lastTo || XU.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, XU.oyU), this.chunks.push(XU), this.chunkPos.push(UU);
        let zU = XU.value.length - 1;
        return this.last = XU.value[zU], this.lastFrom = XU.from[zU] + UU, this.lastTo = XU.to[zU] + UU, !0
      }
      finish() {
        return this.finishInner(VX.empty)
      }
      finishInner(UU) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return UU;
        let XU = VX.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(UU) : UU, this.setMaxPoint);
        return this.from = null, XU
      }
    }

    function nX(UU, XU, zU) {
      let cU = new Map;
      for (let QU of UU)
        for (let UU = 0; UU < QU.chunk.length; UU++) QU.chunk[UU].oyU <= 0 && cU.set(QU.chunk[UU], QU.chunkPos[UU]);
      let yU = new Set;
      for (let QU of XU)
        for (let UU = 0; UU < QU.chunk.length; UU++) {
          let XU = cU.get(QU.chunk[UU]);
          null == XU || (zU ? zU.mapPos(XU) : XU) != QU.chunkPos[UU] || (null === zU || void 0 === zU ? void 0 : zU.touchesRange(XU, XU + QU.chunk[UU].length)) || yU.add(QU.chunk[UU])
        }
      return yU
    }
    class mX {
      constructor(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = UU, this.skip = XU, this.DyU = zU, this.rank = cU
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(UU, XU, !1), this
      }
      gotoInner(UU, XU, zU) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let XU = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(XU) || this.layer.chunkEnd(this.chunkIndex) < UU || XU.oyU < this.DyU)) break;
          this.chunkIndex++, zU = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let cU = this.layer.chunk[this.chunkIndex].findIndex(UU - this.layer.chunkPos[this.chunkIndex], XU, !0);
          (!zU || this.rangeIndex < cU) && this.setRangeIndex(cU)
        }
        this.next()
      }
      forward(UU, XU) {
        (this.to - UU || this.endSide - XU) < 0 && this.gotoInner(UU, XU, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let UU = this.layer.chunkPos[this.chunkIndex],
              XU = this.layer.chunk[this.chunkIndex],
              zU = UU + XU.from[this.rangeIndex];
            if (this.from = zU, this.to = UU + XU.to[this.rangeIndex], this.value = XU.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.DyU < 0 || this.value.point && this.to - this.from >= this.DyU) break
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
    class lX {
      constructor(UU) {
        this.heap = UU
      }
      static from(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          cU = [];
        for (let yU = 0; yU < UU.length; yU++)
          for (let QU = UU[yU]; !QU.kY; QU = QU.nextLayer) QU.oyU >= zU && cU.push(new mX(QU, XU, zU, yU));
        return 1 == cU.length ? cU[0] : new lX(cU)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let zU of this.heap) zU.goto(UU, XU);
        for (let zU = this.heap.length >> 1; zU >= 0; zU--) xX(this.heap, zU);
        return this.next(), this
      }
      forward(UU, XU) {
        for (let zU of this.heap) zU.forward(UU, XU);
        for (let zU = this.heap.length >> 1; zU >= 0; zU--) xX(this.heap, zU);
        (this.to - UU || this.value.endSide - XU) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let UU = this.heap[0];
          this.from = UU.from, this.to = UU.to, this.value = UU.value, this.rank = UU.rank, UU.value && UU.next(), xX(this.heap, 0)
        }
      }
    }

    function xX(UU, XU) {
      for (let zU = UU[XU];;) {
        let cU = 1 + (XU << 1);
        if (cU >= UU.length) break;
        let yU = UU[cU];
        if (cU + 1 < UU.length && yU.compare(UU[cU + 1]) >= 0 && (yU = UU[cU + 1], cU++), zU.compare(yU) < 0) break;
        UU[cU] = zU, UU[XU] = yU, XU = cU
      }
    }
    class JX {
      constructor(UU, XU, zU) {
        this.DyU = zU, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = lX.from(UU, XU, zU)
      }
      goto(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(UU, XU), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = UU, this.endSide = XU, this.openStart = -1, this.next(), this
      }
      forward(UU, XU) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - UU || this.active[this.minActive].endSide - XU) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(UU, XU)
      }
      removeActive(UU) {
        bX(this.active, UU), bX(this.activeTo, UU), bX(this.activeRank, UU), this.minActive = hX(this.active, this.activeTo)
      }
      addActive(UU) {
        let XU = 0,
          {
            value: zU,
            to: cU,
            rank: yU
          } = this.cursor;
        for (; XU < this.activeRank.length && (yU - this.activeRank[XU] || cU - this.activeTo[XU]) > 0;) XU++;
        TX(this.active, XU, zU), TX(this.activeTo, XU, cU), TX(this.activeRank, XU, yU), UU && TX(UU, XU, this.cursor.from), this.minActive = hX(this.active, this.activeTo)
      }
      next() {
        let UU = this.to,
          XU = this.point;
        this.point = null;
        let zU = this.openStart < 0 ? [] : null;
        for (;;) {
          let cU = this.minActive;
          if (cU > -1 && (this.activeTo[cU] - this.cursor.from || this.active[cU].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[cU] > UU) {
              this.to = this.activeTo[cU], this.endSide = this.active[cU].endSide;
              break
            }
            this.removeActive(cU), zU && bX(zU, cU)
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
                if (!(XU && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = UU, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = UU.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(zU), this.cursor.next()
            }
          }
        }
        if (zU) {
          this.openStart = 0;
          for (let XU = zU.length - 1; XU >= 0 && zU[XU] < UU; XU--) this.openStart++
        }
      }
      activeForPoint(UU) {
        if (!this.active.length) return this.active;
        let XU = [];
        for (let zU = this.active.length - 1; zU >= 0 && !(this.activeRank[zU] < this.pointRank); zU--)(this.activeTo[zU] > UU || this.activeTo[zU] == UU && this.active[zU].endSide >= this.point.endSide) && XU.push(this.active[zU]);
        return XU.reverse()
      }
      openEnd(UU) {
        let XU = 0;
        for (let zU = this.activeTo.length - 1; zU >= 0 && this.activeTo[zU] > UU; zU--) XU++;
        return XU
      }
    }

    function jX(UU, XU, zU, cU, yU, QU) {
      UU.goto(XU), zU.goto(cU);
      let AU = cU + yU,
        FU = cU,
        oU = cU - XU,
        DU = !!QU.boundChange;
      for (let EU = !1;;) {
        let XU = UU.to + oU - zU.to,
          cU = XU || UU.endSide - zU.endSide,
          yU = cU < 0 ? UU.to + oU : zU.to,
          YU = Math.min(yU, AU);
        if (UU.point || zU.point ? (UU.point && zU.point && iX(UU.point, zU.point) && KX(UU.activeForPoint(UU.to), zU.activeForPoint(zU.to)) || QU.comparePoint(FU, YU, UU.point, zU.point), EU = !1) : (EU && QU.boundChange(FU), YU > FU && !KX(UU.active, zU.active) && QU.compareRange(FU, YU, UU.active, zU.active), DU && YU < AU && (XU || UU.openEnd(yU) != zU.openEnd(yU)) && (EU = !0)), yU > AU) break;
        FU = yU, cU <= 0 && UU.next(), cU >= 0 && zU.next()
      }
    }

    function KX(UU, XU) {
      if (UU.length != XU.length) return !1;
      for (let zU = 0; zU < UU.length; zU++)
        if (UU[zU] != XU[zU] && !iX(UU[zU], XU[zU])) return !1;
      return !0
    }

    function bX(UU, XU) {
      for (let zU = XU, cU = UU.length - 1; zU < cU; zU++) UU[zU] = UU[zU + 1];
      UU.pop()
    }

    function TX(UU, XU, zU) {
      for (let cU = UU.length - 1; cU >= XU; cU--) UU[cU + 1] = UU[cU];
      UU[XU] = zU
    }

    function hX(UU, XU) {
      let zU = -1,
        cU = 1e9;
      for (let yU = 0; yU < XU.length; yU++)(XU[yU] - cU || UU[yU].endSide - UU[zU].endSide) < 0 && (zU = yU, cU = XU[yU]);
      return zU
    }

    function Uz(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : UU.length,
        cU = 0;
      for (let yU = 0; yU < zU && yU < UU.length;) 9 == UU.charCodeAt(yU) ? (cU += XU - cU % XU, yU++) : (cU++, yU = dU(UU, yU));
      return cU
    }

    function Xz(UU, XU, zU, cU) {
      for (let yU = 0, QU = 0;;) {
        if (QU >= XU) return yU;
        if (yU == UU.length) break;
        QU += 9 == UU.charCodeAt(yU) ? zU - QU % zU : 1, yU = dU(UU, yU)
      }
      return !0 === cU ? -1 : UU.length
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);