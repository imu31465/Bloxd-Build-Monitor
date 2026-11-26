export const id = 604;
export const ids = [604];
export const modules = {
  44232: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => je,
      h: () => RV,
      ChangeSet: () => gV,
      k: () => Ge,
      n: () => lV,
      q: () => De,
      r: () => mV,
      t: () => WV,
      u: () => Ye,
      x: () => le,
      w: () => Le,
      A: () => Ce,
      C: () => Fe,
      E: () => dV,
      H: () => bV,
      J: () => Te,
      N: () => XV,
      R: () => zV,
      T: () => ie,
      W: () => Vx,
      Z: () => NV,
      $: () => ex,
      db: () => MV
    });
    let JV = [],
      YV = [];

    function UV(VV) {
      if (VV < 768) return !1;
      for (let eV = 0, xV = JV.length;;) {
        let UV = eV + xV >> 1;
        if (VV < JV[UV]) xV = UV;
        else {
          if (!(VV >= YV[UV])) return !0;
          eV = UV + 1
        }
        if (eV == xV) return !1
      }
    }

    function yV(VV) {
      return VV >= 127462 && VV <= 127487
    }(() => {
      let VV = "lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o".split(",").map((VV => VV ? parseInt(VV, 36) : 1));
      for (let eV = 0, xV = 0; eV < VV.length; eV++)(eV % 2 ? YV : JV).push(xV += VV[eV])
    })();
    const pV = 8205;

    function QV(VV, eV) {
      return (!(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? nV : wV)(VV, eV, !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function nV(VV, eV, xV) {
      if (eV == VV.length) return eV;
      eV && vV(VV.charCodeAt(eV)) && rV(VV.charCodeAt(eV - 1)) && eV--;
      let JV = ZV(VV, eV);
      for (eV += kV(JV); eV < VV.length;) {
        let YV = ZV(VV, eV);
        if (JV == pV || YV == pV || xV && UV(YV)) eV += kV(YV), JV = YV;
        else {
          if (!yV(YV)) break;
          {
            let xV = 0,
              JV = eV - 2;
            for (; JV >= 0 && yV(ZV(VV, JV));) xV++, JV -= 2;
            if (xV % 2 == 0) break;
            eV += 2
          }
        }
      }
      return eV
    }

    function wV(VV, eV, xV) {
      for (; eV > 0;) {
        let JV = nV(VV, eV - 2, xV);
        if (JV < eV) return JV;
        eV--
      }
      return 0
    }

    function ZV(VV, eV) {
      let xV = VV.charCodeAt(eV);
      if (!rV(xV) || eV + 1 == VV.length) return xV;
      let JV = VV.charCodeAt(eV + 1);
      return vV(JV) ? JV - 56320 + (xV - 55296 << 10) + 65536 : xV
    }

    function vV(VV) {
      return VV >= 56320 && VV < 57344
    }

    function rV(VV) {
      return VV >= 55296 && VV < 56320
    }

    function kV(VV) {
      return VV < 65536 ? 1 : 2
    }
    class bV {
      lineAt(VV) {
        if (VV < 0 || VV > this.length) throw new RangeError(`Invalid position ${VV} in document of length ${this.length}`);
        return this.lineInner(VV, !1, 1, 0)
      }
      line(VV) {
        if (VV < 1 || VV > this.lines) throw new RangeError(`Invalid line number ${VV} in ${this.lines}-line document`);
        return this.lineInner(VV, !0, 1, 0)
      }
      replace(VV, eV, xV) {
        [VV, eV] = AV(this, VV, eV);
        let JV = [];
        return this.decompose(0, VV, JV, 2), xV.length && xV.decompose(0, xV.length, JV, 3), this.decompose(eV, this.length, JV, 1), BV.from(JV, this.length - (eV - VV) + xV.length)
      }
      append(VV) {
        return this.replace(this.length, this.length, VV)
      }
      slice(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        [VV, eV] = AV(this, VV, eV);
        let xV = [];
        return this.decompose(VV, eV, xV, 0), BV.from(xV, eV - VV)
      }
      eq(VV) {
        if (VV == this) return !0;
        if (VV.length != this.length || VV.lines != this.lines) return !1;
        let eV = this.scanIdentical(VV, 1),
          xV = this.length - this.scanIdentical(VV, -1),
          JV = new tV(this),
          YV = new tV(VV);
        for (let UV = eV, yV = eV;;) {
          if (JV.next(UV), YV.next(UV), UV = 0, JV.lineBreak != YV.lineBreak || JV.done != YV.done || JV.value != YV.value) return !1;
          if (yV += JV.value.length, JV.done || yV >= xV) return !0
        }
      }
      iter() {
        return new tV(this, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1)
      }
      iterRange(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length;
        return new FV(this, VV, eV)
      }
      iterLines(VV, eV) {
        let xV;
        if (null == VV) xV = this.iter();
        else {
          null == eV && (eV = this.lines + 1);
          let JV = this.line(VV).from;
          xV = this.iterRange(JV, Math.max(JV, eV == this.lines + 1 ? this.length : eV <= 1 ? 0 : this.line(eV - 1).to))
        }
        return new TV(xV)
      }
      toString() {
        return this.sliceString(0)
      }
      toJSON() {
        let VV = [];
        return this.flatten(VV), VV
      }
      constructor() {}
      static of (VV) {
        if (0 == VV.length) throw new RangeError("A document must have at least one line");
        return 1 != VV.length || VV[0] ? VV.length <= 32 ? new EV(VV) : BV.from(EV.split(VV, [])) : bV.empty
      }
    }
    class EV extends bV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(VV) {
          let eV = -1;
          for (let xV of VV) eV += xV.length + 1;
          return eV
        }(VV);
        super(), this.text = VV, this.length = eV
      }
      get lines() {
        return this.text.length
      }
      get children() {
        return null
      }
      lineInner(VV, eV, xV, JV) {
        for (let YV = 0;; YV++) {
          let UV = this.text[YV],
            yV = JV + UV.length;
          if ((eV ? xV : yV) >= VV) return new PV(JV, yV, xV, UV);
          JV = yV + 1, xV++
        }
      }
      decompose(VV, eV, xV, JV) {
        let YV = VV <= 0 && eV >= this.length ? this : new EV(qV(this.text, VV, eV), Math.min(eV, this.length) - Math.max(0, VV));
        if (1 & JV) {
          let VV = xV.pop(),
            eV = jV(YV.text, VV.text.slice(), 0, YV.length);
          if (eV.length <= 32) xV.push(new EV(eV, VV.length + YV.length));
          else {
            let VV = eV.length >> 1;
            xV.push(new EV(eV.slice(0, VV)), new EV(eV.slice(VV)))
          }
        } else xV.push(YV)
      }
      replace(VV, eV, xV) {
        if (!(xV instanceof EV)) return super.replace(VV, eV, xV);
        [VV, eV] = AV(this, VV, eV);
        let JV = jV(this.text, jV(xV.text, qV(this.text, 0, VV)), eV),
          YV = this.length + xV.length - (eV - VV);
        return JV.length <= 32 ? new EV(JV, YV) : BV.from(EV.split(JV, []), YV)
      }
      sliceString(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [VV, eV] = AV(this, VV, eV);
        let JV = "";
        for (let YV = 0, UV = 0; YV <= eV && UV < this.text.length; UV++) {
          let yV = this.text[UV],
            pV = YV + yV.length;
          YV > VV && UV && (JV += xV), VV < pV && eV > YV && (JV += yV.slice(Math.max(0, VV - YV), eV - YV)), YV = pV + 1
        }
        return JV
      }
      flatten(VV) {
        for (let eV of this.text) VV.push(eV)
      }
      scanIdentical() {
        return 0
      }
      static split(VV, eV) {
        let xV = [],
          JV = -1;
        for (let YV of VV) xV.push(YV), JV += YV.length + 1, 32 == xV.length && (eV.push(new EV(xV, JV)), xV = [], JV = -1);
        return JV > -1 && eV.push(new EV(xV, JV)), eV
      }
    }
    class BV extends bV {
      constructor(VV, eV) {
        super(), this.children = VV, this.length = eV, this.lines = 0;
        for (let xV of VV) this.lines += xV.lines
      }
      lineInner(VV, eV, xV, JV) {
        for (let YV = 0;; YV++) {
          let UV = this.children[YV],
            yV = JV + UV.length,
            pV = xV + UV.lines - 1;
          if ((eV ? pV : yV) >= VV) return UV.lineInner(VV, eV, xV, JV);
          JV = yV + 1, xV = pV + 1
        }
      }
      decompose(VV, eV, xV, JV) {
        for (let YV = 0, UV = 0; UV <= eV && YV < this.children.length; YV++) {
          let yV = this.children[YV],
            pV = UV + yV.length;
          if (VV <= pV && eV >= UV) {
            let YV = JV & ((UV <= VV ? 1 : 0) | (pV >= eV ? 2 : 0));
            UV >= VV && pV <= eV && !YV ? xV.push(yV) : yV.decompose(VV - UV, eV - UV, xV, YV)
          }
          UV = pV + 1
        }
      }
      replace(VV, eV, xV) {
        if ([VV, eV] = AV(this, VV, eV), xV.lines < this.lines)
          for (let JV = 0, YV = 0; JV < this.children.length; JV++) {
            let UV = this.children[JV],
              yV = YV + UV.length;
            if (VV >= YV && eV <= yV) {
              let pV = UV.replace(VV - YV, eV - YV, xV),
                QV = this.lines - UV.lines + pV.lines;
              if (pV.lines < QV >> 4 && pV.lines > QV >> 6) {
                let YV = this.children.slice();
                return YV[JV] = pV, new BV(YV, this.length - (eV - VV) + xV.length)
              }
              return super.replace(YV, yV, pV)
            }
            YV = yV + 1
          }
        return super.replace(VV, eV, xV)
      }
      sliceString(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.length,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "\n";
        [VV, eV] = AV(this, VV, eV);
        let JV = "";
        for (let YV = 0, UV = 0; YV < this.children.length && UV <= eV; YV++) {
          let yV = this.children[YV],
            pV = UV + yV.length;
          UV > VV && YV && (JV += xV), VV < pV && eV > UV && (JV += yV.sliceString(VV - UV, eV - UV, xV)), UV = pV + 1
        }
        return JV
      }
      flatten(VV) {
        for (let eV of this.children) eV.flatten(VV)
      }
      scanIdentical(VV, eV) {
        if (!(VV instanceof BV)) return 0;
        let xV = 0,
          [JV, YV, UV, yV] = eV > 0 ? [0, 0, this.children.length, VV.children.length] : [this.children.length - 1, VV.children.length - 1, -1, -1];
        for (;; JV += eV, YV += eV) {
          if (JV == UV || YV == yV) return xV;
          let pV = this.children[JV],
            QV = VV.children[YV];
          if (pV != QV) return xV + pV.scanIdentical(QV, eV);
          xV += pV.length + 1
        }
      }
      static from(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV.reduce(((VV, eV) => VV + eV.length + 1), -1),
          xV = 0;
        for (let vV of VV) xV += vV.lines;
        if (xV < 32) {
          let xV = [];
          for (let eV of VV) eV.flatten(xV);
          return new EV(xV, eV)
        }
        let JV = Math.max(32, xV >> 5),
          YV = JV << 1,
          UV = JV >> 1,
          yV = [],
          pV = 0,
          QV = -1,
          nV = [];

        function wV(VV) {
          let eV;
          if (VV.lines > YV && VV instanceof BV)
            for (let xV of VV.children) wV(xV);
          else VV.lines > UV && (pV > UV || !pV) ? (ZV(), yV.push(VV)) : VV instanceof EV && pV && (eV = nV[nV.length - 1]) instanceof EV && VV.lines + eV.lines <= 32 ? (pV += VV.lines, QV += VV.length + 1, nV[nV.length - 1] = new EV(eV.text.concat(VV.text), eV.length + 1 + VV.length)) : (pV + VV.lines > JV && ZV(), pV += VV.lines, QV += VV.length + 1, nV.push(VV))
        }

        function ZV() {
          0 != pV && (yV.push(1 == nV.length ? nV[0] : BV.from(nV, QV)), QV = -1, pV = nV.length = 0)
        }
        for (let vV of VV) wV(vV);
        return ZV(), 1 == yV.length ? yV[0] : new BV(yV, eV)
      }
    }

    function jV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1e9;
      for (let YV = 0, UV = 0, yV = !0; UV < VV.length && YV <= JV; UV++) {
        let pV = VV[UV],
          QV = YV + pV.length;
        QV >= xV && (QV > JV && (pV = pV.slice(0, JV - YV)), YV < xV && (pV = pV.slice(xV - YV)), yV ? (eV[eV.length - 1] += pV, yV = !1) : eV.push(pV)), YV = QV + 1
      }
      return eV
    }

    function qV(VV, eV, xV) {
      return jV(VV, [""], eV, xV)
    }
    bV.empty = new EV([""], 0);
    class tV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        this.dir = eV, this.done = !1, this.lineBreak = !1, this.value = "", this.nodes = [VV], this.offsets = [eV > 0 ? 1 : (VV instanceof EV ? VV.text.length : VV.children.length) << 1]
      }
      nextInner(VV, eV) {
        for (this.done = this.lineBreak = !1;;) {
          let xV = this.nodes.length - 1,
            JV = this.nodes[xV],
            YV = this.offsets[xV],
            UV = YV >> 1,
            yV = JV instanceof EV ? JV.text.length : JV.children.length;
          if (UV == (eV > 0 ? yV : 0)) {
            if (0 == xV) return this.done = !0, this.value = "", this;
            eV > 0 && this.offsets[xV - 1]++, this.nodes.pop(), this.offsets.pop()
          } else if ((1 & YV) == (eV > 0 ? 0 : 1)) {
            if (this.offsets[xV] += eV, 0 == VV) return this.lineBreak = !0, this.value = "\n", this;
            VV--
          } else if (JV instanceof EV) {
            let YV = JV.text[UV + (eV < 0 ? -1 : 0)];
            if (this.offsets[xV] += eV, YV.length > Math.max(0, VV)) return this.value = 0 == VV ? YV : eV > 0 ? YV.slice(VV) : YV.slice(0, YV.length - VV), this;
            VV -= YV.length
          } else {
            let YV = JV.children[UV + (eV < 0 ? -1 : 0)];
            VV > YV.length ? (VV -= YV.length, this.offsets[xV] += eV) : (eV < 0 && this.offsets[xV]--, this.nodes.push(YV), this.offsets.push(eV > 0 ? 1 : (YV instanceof EV ? YV.text.length : YV.children.length) << 1))
          }
        }
      }
      next() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return VV < 0 && (this.nextInner(-VV, -this.dir), VV = this.value.length), this.nextInner(VV, this.dir)
      }
    }
    class FV {
      constructor(VV, eV, xV) {
        this.value = "", this.done = !1, this.cursor = new tV(VV, eV > xV ? -1 : 1), this.pos = eV > xV ? VV.length : 0, this.from = Math.min(eV, xV), this.to = Math.max(eV, xV)
      }
      nextInner(VV, eV) {
        if (eV < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = "", this.done = !0, this;
        VV += Math.max(0, eV < 0 ? this.pos - this.to : this.from - this.pos);
        let xV = eV < 0 ? this.pos - this.from : this.to - this.pos;
        VV > xV && (VV = xV), xV -= VV;
        let {
          value: JV
        } = this.cursor.next(VV);
        return this.pos += (JV.length + VV) * eV, this.value = JV.length <= xV ? JV : eV < 0 ? JV.slice(JV.length - xV) : JV.slice(0, xV), this.done = !this.value, this
      }
      next() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return VV < 0 ? VV = Math.max(VV, this.from - this.pos) : VV > 0 && (VV = Math.min(VV, this.to - this.pos)), this.nextInner(VV, this.cursor.dir)
      }
      get lineBreak() {
        return this.cursor.lineBreak && "" != this.value
      }
    }
    class TV {
      constructor(VV) {
        this.inner = VV, this.afterBreak = !0, this.value = "", this.done = !1
      }
      next() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          {
            done: eV,
            lineBreak: xV,
            value: JV
          } = this.inner.next(VV);
        return eV && this.afterBreak ? (this.value = "", this.afterBreak = !1) : eV ? (this.done = !0, this.value = "") : xV ? this.afterBreak ? this.value = "" : (this.afterBreak = !0, this.next()) : (this.value = JV, this.afterBreak = !1), this
      }
      get lineBreak() {
        return !1
      }
    }
    "undefined" != typeof Symbol && (bV.prototype[Symbol.iterator] = function() {
      return this.iter()
    }, tV.prototype[Symbol.iterator] = FV.prototype[Symbol.iterator] = TV.prototype[Symbol.iterator] = function() {
      return this
    });
    class PV {
      constructor(VV, eV, xV, JV) {
        this.from = VV, this.to = eV, this.number = xV, this.text = JV
      }
      get length() {
        return this.to - this.from
      }
    }

    function AV(VV, eV, xV) {
      return [eV = Math.max(0, Math.min(VV.length, eV)), Math.max(eV, Math.min(VV.length, xV))]
    }

    function NV(VV, eV) {
      return QV(VV, eV, !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3])
    }

    function XV(VV, eV) {
      let xV = VV.charCodeAt(eV);
      if (!((JV = xV) >= 55296 && JV < 56320) || eV + 1 == VV.length) return xV;
      var JV;
      let YV = VV.charCodeAt(eV + 1);
      return function(VV) {
        return VV >= 56320 && VV < 57344
      }(YV) ? YV - 56320 + (xV - 55296 << 10) + 65536 : xV
    }

    function MV(VV) {
      return VV <= 65535 ? String.fromCharCode(VV) : (VV -= 65536, String.fromCharCode(55296 + (VV >> 10), 56320 + (1023 & VV)))
    }

    function zV(VV) {
      return VV < 65536 ? 1 : 2
    }
    const GV = /\r\n?|\n/;
    var WV = function(VV) {
      return VV[VV.Simple = 0] = "Simple", VV[VV.TrackDel = 1] = "TrackDel", VV[VV.TrackBefore = 2] = "TrackBefore", VV[VV.TrackAfter = 3] = "TrackAfter", VV
    }(WV || (WV = {}));
    class RV {
      constructor(VV) {
        this.sections = VV
      }
      get length() {
        let VV = 0;
        for (let eV = 0; eV < this.sections.length; eV += 2) VV += this.sections[eV];
        return VV
      }
      get newLength() {
        let VV = 0;
        for (let eV = 0; eV < this.sections.length; eV += 2) {
          let xV = this.sections[eV + 1];
          VV += xV < 0 ? this.sections[eV] : xV
        }
        return VV
      }
      get empty() {
        return 0 == this.sections.length || 2 == this.sections.length && this.sections[1] < 0
      }
      iterGaps(VV) {
        for (let eV = 0, xV = 0, JV = 0; eV < this.sections.length;) {
          let YV = this.sections[eV++],
            UV = this.sections[eV++];
          UV < 0 ? (VV(xV, JV, YV), JV += YV) : JV += UV, xV += YV
        }
      }
      iterChangedRanges(VV) {
        CV(this, VV, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get invertedDesc() {
        let VV = [];
        for (let eV = 0; eV < this.sections.length;) {
          let xV = this.sections[eV++],
            JV = this.sections[eV++];
          JV < 0 ? VV.push(xV, JV) : VV.push(JV, xV)
        }
        return new RV(VV)
      }
      composeDesc(VV) {
        return this.empty ? VV : VV.empty ? this : oV(this, VV)
      }
      mapDesc(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return VV.empty ? this : aV(this, VV, eV)
      }
      mapPos(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : WV.Simple,
          JV = 0,
          YV = 0;
        for (let UV = 0; UV < this.sections.length;) {
          let yV = this.sections[UV++],
            pV = this.sections[UV++],
            QV = JV + yV;
          if (pV < 0) {
            if (QV > VV) return YV + (VV - JV);
            YV += yV
          } else {
            if (xV != WV.Simple && QV >= VV && (xV == WV.TrackDel && JV < VV && QV > VV || xV == WV.TrackBefore && JV < VV || xV == WV.TrackAfter && QV > VV)) return null;
            if (QV > VV || QV == VV && eV < 0 && !yV) return VV == JV || eV < 0 ? YV : YV + pV;
            YV += pV
          }
          JV = QV
        }
        if (VV > JV) throw new RangeError(`Position ${VV} is out of range for changeset of length ${JV}`);
        return YV
      }
      touchesRange(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV;
        for (let xV = 0, JV = 0; xV < this.sections.length && JV <= eV;) {
          let YV = JV + this.sections[xV++];
          if (this.sections[xV++] >= 0 && JV <= eV && YV >= VV) return !(JV < VV && YV > eV) || "cover";
          JV = YV
        }
        return !1
      }
      toString() {
        let VV = "";
        for (let eV = 0; eV < this.sections.length;) {
          let xV = this.sections[eV++],
            JV = this.sections[eV++];
          VV += (VV ? " " : "") + xV + (JV >= 0 ? ":" + JV : "")
        }
        return VV
      }
      toJSON() {
        return this.sections
      }
      static fromJSON(VV) {
        if (!Array.isArray(VV) || VV.length % 2 || VV.some((VV => "number" != typeof VV))) throw new RangeError("Invalid JSON representation of ChangeDesc");
        return new RV(VV)
      }
      static create(VV) {
        return new RV(VV)
      }
    }
    class gV extends RV {
      constructor(VV, eV) {
        super(VV), this.inserted = eV
      }
      apply(VV) {
        if (this.length != VV.length) throw new RangeError("Applying change set to a document with the wrong length");
        return CV(this, ((eV, xV, JV, YV, UV) => VV = VV.replace(JV, JV + (xV - eV), UV)), !1), VV
      }
      mapDesc(VV) {
        return aV(this, VV, arguments.length > 1 && void 0 !== arguments[1] && arguments[1], !0)
      }
      invert(VV) {
        let eV = this.sections.slice(),
          xV = [];
        for (let JV = 0, YV = 0; JV < eV.length; JV += 2) {
          let UV = eV[JV],
            yV = eV[JV + 1];
          if (yV >= 0) {
            eV[JV] = yV, eV[JV + 1] = UV;
            let pV = JV >> 1;
            for (; xV.length < pV;) xV.push(bV.empty);
            xV.push(UV ? VV.slice(YV, YV + UV) : bV.empty)
          }
          YV += UV
        }
        return new gV(eV, xV)
      }
      compose(VV) {
        return this.empty ? VV : VV.empty ? this : oV(this, VV, !0)
      }
      map(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return VV.empty ? this : aV(this, VV, eV, !0)
      }
      iterChanges(VV) {
        CV(this, VV, arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
      }
      get desc() {
        return RV.create(this.sections)
      }
      filter(VV) {
        let eV = [],
          xV = [],
          JV = [],
          YV = new cV(this);
        VV: for (let UV = 0, yV = 0;;) {
          let pV = UV == VV.length ? 1e9 : VV[UV++];
          for (; yV < pV || yV == pV && 0 == YV.len;) {
            if (YV.done) break VV;
            let VV = Math.min(YV.len, pV - yV);
            DV(JV, VV, -1);
            let UV = -1 == YV.ins ? -1 : 0 == YV.off ? YV.ins : 0;
            DV(eV, VV, UV), UV > 0 && iV(xV, eV, YV.text), YV.forward(VV), yV += VV
          }
          let QV = VV[UV++];
          for (; yV < QV;) {
            if (YV.done) break VV;
            let VV = Math.min(YV.len, QV - yV);
            DV(eV, VV, -1), DV(JV, VV, -1 == YV.ins ? -1 : 0 == YV.off ? YV.ins : 0), YV.forward(VV), yV += VV
          }
        }
        return {
          changes: new gV(eV, xV),
          filtered: RV.create(JV)
        }
      }
      toJSON() {
        let VV = [];
        for (let eV = 0; eV < this.sections.length; eV += 2) {
          let xV = this.sections[eV],
            JV = this.sections[eV + 1];
          JV < 0 ? VV.push(xV) : 0 == JV ? VV.push([xV]) : VV.push([xV].concat(this.inserted[eV >> 1].toJSON()))
        }
        return VV
      }
      static of (VV, eV, xV) {
        let JV = [],
          YV = [],
          UV = 0,
          yV = null;

        function pV() {
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0]) && !JV.length) return;
          UV < eV && DV(JV, eV - UV, -1);
          let VV = new gV(JV, YV);
          yV = yV ? yV.compose(VV.map(yV)) : VV, JV = [], YV = [], UV = 0
        }
        return function VV(QV) {
          if (Array.isArray(QV))
            for (let eV of QV) VV(eV);
          else if (QV instanceof gV) {
            if (QV.length != eV) throw new RangeError(`Mismatched change set length (got ${QV.length}, expected ${eV})`);
            pV(), yV = yV ? yV.compose(QV.map(yV)) : QV
          } else {
            let {
              from: VV,
              to: yV = VV,
              insert: nV
            } = QV;
            if (VV > yV || VV < 0 || yV > eV) throw new RangeError(`Invalid change range ${VV} to ${yV} (in doc of length ${eV})`);
            let wV = nV ? "string" == typeof nV ? bV.of(nV.split(xV || GV)) : nV : bV.empty,
              ZV = wV.length;
            if (VV == yV && 0 == ZV) return;
            VV < UV && pV(), VV > UV && DV(JV, VV - UV, -1), DV(JV, yV - VV, ZV), iV(YV, JV, wV), UV = yV
          }
        }(VV), pV(!yV), yV
      }
      static empty(VV) {
        return new gV(VV ? [VV, -1] : [], [])
      }
      static fromJSON(VV) {
        if (!Array.isArray(VV)) throw new RangeError("Invalid JSON representation of ChangeSet");
        let eV = [],
          xV = [];
        for (let JV = 0; JV < VV.length; JV++) {
          let YV = VV[JV];
          if ("number" == typeof YV) eV.push(YV, -1);
          else {
            if (!Array.isArray(YV) || "number" != typeof YV[0] || YV.some(((VV, eV) => eV && "string" != typeof VV))) throw new RangeError("Invalid JSON representation of ChangeSet");
            if (1 == YV.length) eV.push(YV[0], 0);
            else {
              for (; xV.length < JV;) xV.push(bV.empty);
              xV[JV] = bV.of(YV.slice(1)), eV.push(YV[0], xV[JV].length)
            }
          }
        }
        return new gV(eV, xV)
      }
      static createSet(VV, eV) {
        return new gV(VV, eV)
      }
    }

    function DV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      if (0 == eV && xV <= 0) return;
      let YV = VV.length - 2;
      YV >= 0 && xV <= 0 && xV == VV[YV + 1] ? VV[YV] += eV : YV >= 0 && 0 == eV && 0 == VV[YV] ? VV[YV + 1] += xV : JV ? (VV[YV] += eV, VV[YV + 1] += xV) : VV.push(eV, xV)
    }

    function iV(VV, eV, xV) {
      if (0 == xV.length) return;
      let JV = eV.length - 2 >> 1;
      if (JV < VV.length) VV[VV.length - 1] = VV[VV.length - 1].append(xV);
      else {
        for (; VV.length < JV;) VV.push(bV.empty);
        VV.push(xV)
      }
    }

    function CV(VV, eV, xV) {
      let JV = VV.inserted;
      for (let YV = 0, UV = 0, yV = 0; yV < VV.sections.length;) {
        let pV = VV.sections[yV++],
          QV = VV.sections[yV++];
        if (QV < 0) YV += pV, UV += pV;
        else {
          let nV = YV,
            wV = UV,
            ZV = bV.empty;
          for (; nV += pV, wV += QV, QV && JV && (ZV = ZV.append(JV[yV - 2 >> 1])), !(xV || yV == VV.sections.length || VV.sections[yV + 1] < 0);) pV = VV.sections[yV++], QV = VV.sections[yV++];
          eV(YV, nV, UV, wV, ZV), YV = nV, UV = wV
        }
      }
    }

    function aV(VV, eV, xV) {
      let JV = [],
        YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3] ? [] : null,
        UV = new cV(VV),
        yV = new cV(eV),
        pV = 0;
      for (let QV = -1;;) {
        if (++pV > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - likely malformed ChangeSet");
        if (UV.done && yV.len || yV.done && UV.len) throw new Error("Mismatched change set lengths");
        if (-1 == UV.ins && -1 == yV.ins) {
          let VV = Math.min(UV.len, yV.len);
          DV(JV, VV, -1), UV.forward(VV), yV.forward(VV)
        } else if (yV.ins >= 0 && (UV.ins < 0 || QV == UV.i || 0 == UV.off && (yV.len < UV.len || yV.len == UV.len && !xV))) {
          let VV = yV.len;
          for (DV(JV, yV.ins, -1); VV;) {
            if (++pV > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-b");
            let eV = Math.min(UV.len, VV);
            UV.ins >= 0 && QV < UV.i && UV.len <= eV && (DV(JV, 0, UV.ins), YV && iV(YV, JV, UV.text), QV = UV.i), UV.forward(eV), VV -= eV
          }
          yV.next()
        } else {
          if (!(UV.ins >= 0)) {
            if (UV.done && yV.done) return YV ? gV.createSet(JV, YV) : RV.create(JV);
            throw new Error("Mismatched change set lengths")
          } {
            let VV = 0,
              eV = UV.len;
            for (; eV;) {
              if (++pV > 2e6) throw new Error("BLOXD CODEMIRROR: mapSet exceeded max iterations - inner while-a");
              if (-1 == yV.ins) {
                let xV = Math.min(eV, yV.len);
                VV += xV, eV -= xV, yV.forward(xV)
              } else {
                if (!(0 == yV.ins && yV.len < eV)) break;
                eV -= yV.len, yV.next()
              }
            }
            DV(JV, VV, QV < UV.i ? UV.ins : 0), YV && QV < UV.i && iV(YV, JV, UV.text), QV = UV.i, UV.forward(UV.len - eV)
          }
        }
      }
    }

    function oV(VV, eV) {
      let xV = [],
        JV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] ? [] : null,
        YV = new cV(VV),
        UV = new cV(eV),
        yV = 0;
      for (let pV = !1;;) {
        if (++yV > 2e6) throw new Error("BLOXD CODEMIRROR: composeSets exceeded max iterations - likely malformed ChangeSet");
        if (YV.done && UV.done) return JV ? gV.createSet(xV, JV) : RV.create(xV);
        if (0 == YV.ins) DV(xV, YV.len, 0, pV), YV.next();
        else if (0 != UV.len || UV.done) {
          if (YV.done || UV.done) throw new Error("Mismatched change set lengths");
          {
            let VV = Math.min(YV.len2, UV.len),
              eV = xV.length;
            if (-1 == YV.ins) {
              let eV = -1 == UV.ins ? -1 : UV.off ? 0 : UV.ins;
              DV(xV, VV, eV, pV), JV && eV && iV(JV, xV, UV.text)
            } else - 1 == UV.ins ? (DV(xV, YV.off ? 0 : YV.len, VV, pV), JV && iV(JV, xV, YV.textBit(VV))) : (DV(xV, YV.off ? 0 : YV.len, UV.off ? 0 : UV.ins, pV), JV && !UV.off && iV(JV, xV, UV.text));
            pV = (YV.ins > VV || UV.ins >= 0 && UV.len > VV) && (pV || xV.length > eV), YV.forward2(VV), UV.forward(VV)
          }
        } else DV(xV, 0, UV.ins, pV), JV && iV(JV, xV, UV.text), UV.next()
      }
    }
    class cV {
      constructor(VV) {
        this.set = VV, this.i = 0, this.next()
      }
      next() {
        let {
          sections: VV
        } = this.set;
        this.i < VV.length ? (this.len = VV[this.i++], this.ins = VV[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0
      }
      get done() {
        return -2 == this.ins
      }
      get len2() {
        return this.ins < 0 ? this.len : this.ins
      }
      get text() {
        let {
          inserted: VV
        } = this.set, eV = this.i - 2 >> 1;
        return eV >= VV.length ? bV.empty : VV[eV]
      }
      textBit(VV) {
        let {
          inserted: eV
        } = this.set, xV = this.i - 2 >> 1;
        return xV >= eV.length && !VV ? bV.empty : eV[xV].slice(this.off, null == VV ? void 0 : this.off + VV)
      }
      forward(VV) {
        VV == this.len ? this.next() : (this.len -= VV, this.off += VV)
      }
      forward2(VV) {
        -1 == this.ins ? this.forward(VV) : VV == this.ins ? this.next() : (this.ins -= VV, this.off += VV)
      }
    }
    class hV {
      constructor(VV, eV, xV) {
        this.from = VV, this.to = eV, this.flags = xV
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
        let VV = 7 & this.flags;
        return 7 == VV ? null : VV
      }
      get goalColumn() {
        let VV = this.flags >> 6;
        return 16777215 == VV ? void 0 : VV
      }
      map(VV) {
        let eV, xV, JV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return this.empty ? eV = xV = VV.mapPos(this.from, JV) : (eV = VV.mapPos(this.from, 1), xV = VV.mapPos(this.to, -1)), eV == this.from && xV == this.to ? this : new hV(eV, xV, this.flags)
      }
      extend(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        if (VV <= this.anchor && eV >= this.anchor) return lV.range(VV, eV, void 0, void 0, xV);
        let JV = Math.abs(VV - this.anchor) > Math.abs(eV - this.anchor) ? VV : eV;
        return lV.range(this.anchor, JV, void 0, void 0, xV)
      }
      eq(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.anchor == VV.anchor && this.head == VV.head && this.goalColumn == VV.goalColumn && (!eV || !this.empty || this.assoc == VV.assoc)
      }
      toJSON() {
        return {
          anchor: this.anchor,
          head: this.head
        }
      }
      static fromJSON(VV) {
        if (!VV || "number" != typeof VV.anchor || "number" != typeof VV.head) throw new RangeError("Invalid JSON representation for SelectionRange");
        return lV.range(VV.anchor, VV.head)
      }
      static create(VV, eV, xV) {
        return new hV(VV, eV, xV)
      }
    }
    class lV {
      constructor(VV, eV) {
        this.TE = VV, this.mainIndex = eV
      }
      map(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
        return VV.empty ? this : lV.create(this.TE.map((xV => xV.map(VV, eV))), this.mainIndex)
      }
      eq(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.TE.length != VV.TE.length || this.mainIndex != VV.mainIndex) return !1;
        for (let xV = 0; xV < this.TE.length; xV++)
          if (!this.TE[xV].eq(VV.TE[xV], eV)) return !1;
        return !0
      }
      get main() {
        return this.TE[this.mainIndex]
      }
      asSingle() {
        return 1 == this.TE.length ? this : new lV([this.main], 0)
      }
      addRange(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return lV.create([VV].concat(this.TE), eV ? 0 : this.mainIndex + 1)
      }
      replaceRange(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.mainIndex,
          xV = this.TE.slice();
        return xV[eV] = VV, lV.create(xV, this.mainIndex)
      }
      toJSON() {
        return {
          TE: this.TE.map((VV => VV.toJSON())),
          main: this.mainIndex
        }
      }
      static fromJSON(VV) {
        if (!VV || !Array.isArray(VV.TE) || "number" != typeof VV.main || VV.main >= VV.TE.length) throw new RangeError("Invalid JSON representation for EditorSelection");
        return new lV(VV.TE.map((VV => hV.fromJSON(VV))), VV.main)
      }
      static single(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV;
        return new lV([lV.range(VV, eV)], 0)
      }
      static create(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (0 == VV.length) throw new RangeError("A selection needs at least one range");
        for (let xV = 0, JV = 0; JV < VV.length; JV++) {
          let YV = VV[JV];
          if (YV.empty ? YV.from <= xV : YV.from < xV) return lV.normalized(VV.slice(), eV);
          xV = YV.to
        }
        return new lV(VV, eV)
      }
      static cursor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        return hV.create(VV, VV, (0 == eV ? 0 : eV < 0 ? 8 : 16) | (null == xV ? 7 : Math.min(6, xV)) | (null !== JV && void 0 !== JV ? JV : 16777215) << 6)
      }
      static range(VV, eV, xV, JV, YV) {
        let UV = (null !== xV && void 0 !== xV ? xV : 16777215) << 6 | (null == JV ? 7 : Math.min(6, JV));
        return YV || VV == eV || (YV = eV < VV ? 1 : -1), eV < VV ? hV.create(eV, VV, 48 | UV) : hV.create(VV, eV, (YV ? YV < 0 ? 8 : 16 : 0) | UV)
      }
      static normalized(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = VV[eV];
        VV.sort(((VV, eV) => VV.from - eV.from)), eV = VV.indexOf(xV);
        for (let JV = 1; JV < VV.length; JV++) {
          let xV = VV[JV],
            YV = VV[JV - 1];
          if (xV.empty ? xV.from <= YV.to : xV.from < YV.to) {
            let UV = YV.from,
              yV = Math.max(xV.to, YV.to);
            JV <= eV && eV--, VV.splice(--JV, 2, xV.anchor > xV.head ? lV.range(yV, UV) : lV.range(UV, yV))
          }
        }
        return new lV(VV, eV)
      }
    }

    function LV(VV, eV) {
      for (let xV of VV.TE)
        if (xV.to > eV) throw new RangeError("Selection points outside of document")
    }
    let fV = 0;
    class mV {
      constructor(VV, eV, xV, JV, YV) {
        this.combine = VV, this.compareInput = eV, this.compare = xV, this.isStatic = JV, this.id = fV++, this.default = VV([]), this.extensions = "function" == typeof YV ? YV(this) : YV
      }
      get reader() {
        return this
      }
      static define() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return new mV(VV.combine || (VV => VV), VV.compareInput || ((VV, eV) => VV === eV), VV.compare || (VV.combine ? (VV, eV) => VV === eV : KV), !!VV.static, VV.enables)
      }
      of(VV) {
        return new HV([], this, 0, VV)
      }
      compute(VV, eV) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new HV(VV, this, 1, eV)
      }
      computeN(VV, eV) {
        if (this.isStatic) throw new Error("Can't compute a static facet");
        return new HV(VV, this, 2, eV)
      }
      from(VV, eV) {
        return eV || (eV = VV => VV), this.compute([VV], (xV => eV(xV.field(VV))))
      }
    }

    function KV(VV, eV) {
      return VV == eV || VV.length == eV.length && VV.every(((VV, xV) => VV === eV[xV]))
    }
    class HV {
      constructor(VV, eV, xV, JV) {
        this.dependencies = VV, this.facet = eV, this.type = xV, this.value = JV, this.id = fV++
      }
      dynamicSlot(VV) {
        var eV;
        let xV = this.value,
          JV = this.facet.compareInput,
          YV = this.id,
          UV = VV[YV] >> 1,
          yV = 2 == this.type,
          pV = !1,
          QV = !1,
          nV = [];
        for (let wV of this.dependencies) "doc" == wV ? pV = !0 : "selection" == wV ? QV = !0 : 0 == (1 & (null !== (eV = VV[wV.id]) && void 0 !== eV ? eV : 1)) && nV.push(VV[wV.id]);
        return {
          create: VV => (VV.values[UV] = xV(VV), 1),
          update(VV, eV) {
            if (pV && eV.docChanged || QV && (eV.docChanged || eV.selection) || sV(VV, nV)) {
              let eV = xV(VV);
              if (yV ? !uV(eV, VV.values[UV], JV) : !JV(eV, VV.values[UV])) return VV.values[UV] = eV, 1
            }
            return 0
          },
          reconfigure: (VV, eV) => {
            let pV, QV = eV.config.address[YV];
            if (null != QV) {
              let YV = we(eV, QV);
              if (this.dependencies.every((xV => xV instanceof mV ? eV.facet(xV) === VV.facet(xV) : !(xV instanceof dV) || eV.field(xV, !1) == VV.field(xV, !1))) || (yV ? uV(pV = xV(VV), YV, JV) : JV(pV = xV(VV), YV))) return VV.values[UV] = YV, 0
            } else pV = xV(VV);
            return VV.values[UV] = pV, 1
          }
        }
      }
    }

    function uV(VV, eV, xV) {
      if (VV.length != eV.length) return !1;
      for (let JV = 0; JV < VV.length; JV++)
        if (!xV(VV[JV], eV[JV])) return !1;
      return !0
    }

    function sV(VV, eV) {
      let xV = !1;
      for (let JV of eV) 1 & ne(VV, JV) && (xV = !0);
      return xV
    }

    function SV(VV, eV, xV) {
      let JV = xV.map((eV => VV[eV.id])),
        YV = xV.map((VV => VV.type)),
        UV = JV.filter((VV => !(1 & VV))),
        yV = VV[eV.id] >> 1;

      function pV(VV) {
        let xV = [];
        for (let eV = 0; eV < JV.length; eV++) {
          let UV = we(VV, JV[eV]);
          if (2 == YV[eV])
            for (let VV of UV) xV.push(VV);
          else xV.push(UV)
        }
        return eV.combine(xV)
      }
      return {
        create(VV) {
          for (let eV of JV) ne(VV, eV);
          return VV.values[yV] = pV(VV), 1
        },
        update(VV, xV) {
          if (!sV(VV, UV)) return 0;
          let JV = pV(VV);
          return eV.compare(JV, VV.values[yV]) ? 0 : (VV.values[yV] = JV, 1)
        },
        reconfigure(VV, YV) {
          let UV = sV(VV, JV),
            QV = YV.config.facets[eV.id],
            nV = YV.facet(eV);
          if (QV && !UV && KV(xV, QV)) return VV.values[yV] = nV, 0;
          let wV = pV(VV);
          return eV.compare(wV, nV) ? (VV.values[yV] = nV, 0) : (VV.values[yV] = wV, 1)
        }
      }
    }
    const IV = mV.define({
      static: !0
    });
    class dV {
      constructor(VV, eV, xV, JV, YV) {
        this.id = VV, this.createF = eV, this.updateF = xV, this.compareF = JV, this.spec = YV, this.provides = void 0
      }
      static define(VV) {
        let eV = new dV(fV++, VV.create, VV.update, VV.compare || ((VV, eV) => VV === eV), VV);
        return VV.provide && (eV.provides = VV.provide(eV)), eV
      }
      create(VV) {
        let eV = VV.facet(IV).find((VV => VV.field == this));
        return ((null === eV || void 0 === eV ? void 0 : eV.create) || this.createF)(VV)
      }
      slot(VV) {
        let eV = VV[this.id] >> 1;
        return {
          create: VV => (VV.values[eV] = this.create(VV), 1),
          update: (VV, xV) => {
            let JV = VV.values[eV],
              YV = this.updateF(JV, xV);
            return this.compareF(JV, YV) ? 0 : (VV.values[eV] = YV, 1)
          },
          reconfigure: (VV, xV) => {
            let JV, YV = VV.facet(IV),
              UV = xV.facet(IV);
            return (JV = YV.find((VV => VV.field == this))) && JV != UV.find((VV => VV.field == this)) ? (VV.values[eV] = JV.create(VV), 1) : null != xV.config.address[this.id] ? (VV.values[eV] = xV.field(this), 0) : (VV.values[eV] = this.create(VV), 1)
          }
        }
      }
      init(VV) {
        return [this, IV.of({
          field: this,
          create: VV
        })]
      }
      get extension() {
        return this
      }
    }
    const OV = 4,
      Ve = 3,
      ee = 2,
      xe = 1;

    function Je(VV) {
      return eV => new Ue(eV, VV)
    }
    const Ye = {
      highest: Je(0),
      high: Je(xe),
      default: Je(ee),
      low: Je(Ve),
      lowest: Je(OV)
    };
    class Ue {
      constructor(VV, eV) {
        this.inner = VV, this.prec = eV
      }
    }
    class ye {
      of(VV) {
        return new pe(this, VV)
      }
      reconfigure(VV) {
        return ye.reconfigure.of({
          compartment: this,
          extension: VV
        })
      }
      get(VV) {
        return VV.config.compartments.get(this)
      }
    }
    class pe {
      constructor(VV, eV) {
        this.compartment = VV, this.inner = eV
      }
    }
    class Qe {
      constructor(VV, eV, xV, JV, YV, UV) {
        for (this.base = VV, this.compartments = eV, this.dynamicSlots = xV, this.address = JV, this.staticValues = YV, this.facets = UV, this.statusTemplate = []; this.statusTemplate.length < xV.length;) this.statusTemplate.push(0)
      }
      staticFacet(VV) {
        let eV = this.address[VV.id];
        return null == eV ? VV.default : this.staticValues[eV >> 1]
      }
      static resolve(VV, eV, xV) {
        let JV = [],
          YV = Object.create(null),
          UV = new Map;
        for (let ZV of function(VV, eV, xV) {
            let JV = [
                [],
                [],
                [],
                [],
                []
              ],
              YV = new Map;

            function UV(VV, yV) {
              let pV = YV.get(VV);
              if (null != pV) {
                if (pV <= yV) return;
                let eV = JV[pV].indexOf(VV);
                eV > -1 && JV[pV].splice(eV, 1), VV instanceof pe && xV.delete(VV.compartment)
              }
              if (YV.set(VV, yV), Array.isArray(VV))
                for (let eV of VV) UV(eV, yV);
              else if (VV instanceof pe) {
                if (xV.has(VV.compartment)) throw new RangeError("Duplicate use of compartment in extensions");
                let JV = eV.get(VV.compartment) || VV.inner;
                xV.set(VV.compartment, JV), UV(JV, yV)
              } else if (VV instanceof Ue) UV(VV.inner, VV.prec);
              else if (VV instanceof dV) JV[yV].push(VV), VV.provides && UV(VV.provides, yV);
              else if (VV instanceof HV) JV[yV].push(VV), VV.facet.extensions && UV(VV.facet.extensions, ee);
              else {
                let eV = VV.extension;
                if (!eV) throw new Error(`Unrecognized extension value in extension set (${VV}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
                UV(eV, yV)
              }
            }
            return UV(VV, ee), JV.reduce(((VV, eV) => VV.concat(eV)))
          }(VV, eV, UV)) ZV instanceof dV ? JV.push(ZV) : (YV[ZV.facet.id] || (YV[ZV.facet.id] = [])).push(ZV);
        let yV = Object.create(null),
          pV = [],
          QV = [];
        for (let ZV of JV) yV[ZV.id] = QV.length << 1, QV.push((VV => ZV.slot(VV)));
        let nV = null === xV || void 0 === xV ? void 0 : xV.config.facets;
        for (let ZV in YV) {
          let VV = YV[ZV],
            eV = VV[0].facet,
            JV = nV && nV[ZV] || [];
          if (VV.every((VV => 0 == VV.type)))
            if (yV[eV.id] = pV.length << 1 | 1, KV(JV, VV)) pV.push(xV.facet(eV));
            else {
              let JV = eV.combine(VV.map((VV => VV.value)));
              pV.push(xV && eV.compare(JV, xV.facet(eV)) ? xV.facet(eV) : JV)
            }
          else {
            for (let eV of VV) 0 == eV.type ? (yV[eV.id] = pV.length << 1 | 1, pV.push(eV.value)) : (yV[eV.id] = QV.length << 1, QV.push((VV => eV.dynamicSlot(VV))));
            yV[eV.id] = QV.length << 1, QV.push((xV => SV(xV, eV, VV)))
          }
        }
        let wV = QV.map((VV => VV(yV)));
        return new Qe(VV, UV, wV, yV, pV, YV)
      }
    }

    function ne(VV, eV) {
      if (1 & eV) return 2;
      let xV = eV >> 1,
        JV = VV.status[xV];
      if (4 == JV) throw new Error("Cyclic dependency between fields and/or facets");
      if (2 & JV) return JV;
      VV.status[xV] = 4;
      let YV = VV.computeSlot(VV, VV.config.dynamicSlots[xV]);
      return VV.status[xV] = 2 | YV
    }

    function we(VV, eV) {
      return 1 & eV ? VV.config.staticValues[eV >> 1] : VV.values[eV >> 1]
    }
    const Ze = mV.define(),
      ve = mV.define({
        combine: VV => VV.some((VV => VV)),
        static: !0
      }),
      re = mV.define({
        combine: VV => VV.length ? VV[0] : void 0,
        static: !0
      }),
      ke = mV.define(),
      be = mV.define(),
      Ee = mV.define(),
      Be = mV.define({
        combine: VV => !!VV.length && VV[0]
      });
    class je {
      constructor(VV, eV) {
        this.type = VV, this.value = eV
      }
      static define() {
        return new qe
      }
    }
    class qe {
      of(VV) {
        return new je(this, VV)
      }
    }
    class te {
      constructor(VV) {
        this.map = VV
      }
      of(VV) {
        return new Fe(this, VV)
      }
    }
    class Fe {
      constructor(VV, eV) {
        this.type = VV, this.value = eV
      }
      map(VV) {
        let eV = this.type.map(this.value, VV);
        return void 0 === eV ? void 0 : eV == this.value ? this : new Fe(this.type, eV)
      }
      is(VV) {
        return this.type == VV
      }
      static define() {
        return new te((arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).map || (VV => VV))
      }
      static mapEffects(VV, eV) {
        if (!VV.length) return VV;
        let xV = [];
        for (let JV of VV) {
          let VV = JV.map(eV);
          VV && xV.push(VV)
        }
        return xV
      }
    }
    Fe.reconfigure = Fe.define(), Fe.appendConfig = Fe.define();
    class Te {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.startState = VV, this.changes = eV, this.selection = xV, this.effects = JV, this.annotations = YV, this.scrollIntoView = UV, this._doc = null, this._state = null, xV && LV(xV, eV.newLength), YV.some((VV => VV.type == Te.time)) || (this.annotations = YV.concat(Te.time.of(Date.now())))
      }
      static create(VV, eV, xV, JV, YV, UV) {
        return new Te(VV, eV, xV, JV, YV, UV)
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
      annotation(VV) {
        for (let eV of this.annotations)
          if (eV.type == VV) return eV.value
      }
      get docChanged() {
        return !this.changes.empty
      }
      get reconfigured() {
        return this.startState.config != this.state.config
      }
      isUserEvent(VV) {
        let eV = this.annotation(Te.userEvent);
        return !(!eV || !(eV == VV || eV.length > VV.length && eV.slice(0, VV.length) == VV && "." == eV[VV.length]))
      }
    }

    function Pe(VV, eV) {
      let xV = [];
      for (let JV = 0, YV = 0;;) {
        let UV, yV;
        if (JV < VV.length && (YV == eV.length || eV[YV] >= VV[JV])) UV = VV[JV++], yV = VV[JV++];
        else {
          if (!(YV < eV.length)) return xV;
          UV = eV[YV++], yV = eV[YV++]
        }!xV.length || xV[xV.length - 1] < UV ? xV.push(UV, yV) : xV[xV.length - 1] < yV && (xV[xV.length - 1] = yV)
      }
    }

    function Ae(VV, eV, xV) {
      var JV;
      let YV, UV, yV;
      return xV ? (YV = eV.changes, UV = gV.empty(eV.changes.length), yV = VV.changes.compose(eV.changes)) : (YV = eV.changes.map(VV.changes), UV = VV.changes.mapDesc(eV.changes, !0), yV = VV.changes.compose(YV)), {
        changes: yV,
        selection: eV.selection ? eV.selection.map(UV) : null === (JV = VV.selection) || void 0 === JV ? void 0 : JV.map(YV),
        effects: Fe.mapEffects(VV.effects, YV).concat(Fe.mapEffects(eV.effects, UV)),
        annotations: VV.annotations.length ? VV.annotations.concat(eV.annotations) : eV.annotations,
        scrollIntoView: VV.scrollIntoView || eV.scrollIntoView
      }
    }

    function Ne(VV, eV, xV) {
      let JV = eV.selection,
        YV = ze(eV.annotations);
      return eV.userEvent && (YV = YV.concat(Te.userEvent.of(eV.userEvent))), {
        changes: eV.changes instanceof gV ? eV.changes : gV.of(eV.changes || [], xV, VV.facet(re)),
        selection: JV && (JV instanceof lV ? JV : lV.single(JV.anchor, JV.head)),
        effects: ze(eV.effects),
        annotations: YV,
        scrollIntoView: !!eV.scrollIntoView
      }
    }

    function Xe(VV, eV, xV) {
      let JV = Ne(VV, eV.length ? eV[0] : {}, VV.doc.length);
      eV.length && !1 === eV[0].filter && (xV = !1);
      for (let UV = 1; UV < eV.length; UV++) {
        !1 === eV[UV].filter && (xV = !1);
        let YV = !!eV[UV].sequential;
        JV = Ae(JV, Ne(VV, eV[UV], YV ? JV.changes.newLength : VV.doc.length), YV)
      }
      let YV = Te.create(VV, JV.changes, JV.selection, JV.effects, JV.annotations, JV.scrollIntoView);
      return function(VV) {
        let eV = VV.startState,
          xV = eV.facet(Ee),
          JV = VV;
        for (let YV = xV.length - 1; YV >= 0; YV--) {
          let UV = xV[YV](VV);
          UV && Object.keys(UV).length && (JV = Ae(JV, Ne(eV, UV, VV.changes.newLength), !0))
        }
        return JV == VV ? VV : Te.create(eV, VV.changes, VV.selection, JV.effects, JV.annotations, JV.scrollIntoView)
      }(xV ? function(VV) {
        let eV = VV.startState,
          xV = !0;
        for (let YV of eV.facet(ke)) {
          let eV = YV(VV);
          if (!1 === eV) {
            xV = !1;
            break
          }
          Array.isArray(eV) && (xV = !0 === xV ? eV : Pe(xV, eV))
        }
        if (!0 !== xV) {
          let JV, YV;
          if (!1 === xV) YV = VV.changes.invertedDesc, JV = gV.empty(eV.doc.length);
          else {
            let eV = VV.changes.filter(xV);
            JV = eV.changes, YV = eV.filtered.mapDesc(eV.changes).invertedDesc
          }
          VV = Te.create(eV, JV, VV.selection && VV.selection.map(YV), Fe.mapEffects(VV.effects, YV), VV.annotations, VV.scrollIntoView)
        }
        let JV = eV.facet(be);
        for (let YV = JV.length - 1; YV >= 0; YV--) {
          let xV = JV[YV](VV);
          VV = xV instanceof Te ? xV : Array.isArray(xV) && 1 == xV.length && xV[0] instanceof Te ? xV[0] : Xe(eV, ze(xV), !1)
        }
        return VV
      }(YV) : YV)
    }
    Te.time = je.define(), Te.userEvent = je.define(), Te.addToHistory = je.define(), Te.remote = je.define();
    const Me = [];

    function ze(VV) {
      return null == VV ? Me : Array.isArray(VV) ? VV : [VV]
    }
    var Ge = function(VV) {
      return VV[VV.Word = 0] = "Word", VV[VV.Space = 1] = "Space", VV[VV.Other = 2] = "Other", VV
    }(Ge || (Ge = {}));
    const We = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
    let Re;
    try {
      Re = new RegExp("[\\p{Alphabetic}\\p{Number}_]", "u")
    } catch (xx) {}

    function ge(VV) {
      return eV => {
        if (!/\S/.test(eV)) return Ge.Space;
        if (function(VV) {
            if (Re) return Re.test(VV);
            for (let eV = 0; eV < VV.length; eV++) {
              let xV = VV[eV];
              if (/\w/.test(xV) || xV > "\x80" && (xV.toUpperCase() != xV.toLowerCase() || We.test(xV))) return !0
            }
            return !1
          }(eV)) return Ge.Word;
        for (let xV = 0; xV < VV.length; xV++)
          if (eV.indexOf(VV[xV]) > -1) return Ge.Word;
        return Ge.Other
      }
    }
    class De {
      constructor(VV, eV, xV, JV, YV, UV) {
        this.config = VV, this.doc = eV, this.selection = xV, this.values = JV, this.status = VV.statusTemplate.slice(), this.computeSlot = YV, UV && (UV._state = this);
        for (let yV = 0; yV < this.config.dynamicSlots.length; yV++) ne(this, yV << 1);
        this.computeSlot = null
      }
      field(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          xV = this.config.address[VV.id];
        if (null != xV) return ne(this, xV), we(this, xV);
        if (eV) throw new RangeError("Field is not present in this state")
      }
      update() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return Xe(this, eV, !0)
      }
      applyTransaction(VV) {
        let eV, xV = this.config,
          {
            base: JV,
            compartments: YV
          } = xV;
        for (let yV of VV.effects) yV.is(ye.reconfigure) ? (xV && (YV = new Map, xV.compartments.forEach(((VV, eV) => YV.set(eV, VV))), xV = null), YV.set(yV.value.compartment, yV.value.extension)) : yV.is(Fe.reconfigure) ? (xV = null, JV = yV.value) : yV.is(Fe.appendConfig) && (xV = null, JV = ze(JV).concat(yV.value));
        if (xV) eV = VV.startState.values.slice();
        else {
          xV = Qe.resolve(JV, YV, this), eV = new De(xV, this.doc, this.selection, xV.dynamicSlots.map((() => null)), ((VV, eV) => eV.reconfigure(VV, this)), null).values
        }
        let UV = VV.startState.facet(ve) ? VV.newSelection : VV.newSelection.asSingle();
        new De(xV, VV.newDoc, UV, eV, ((eV, xV) => xV.update(eV, VV)), VV)
      }
      replaceSelection(VV) {
        return "string" == typeof VV && (VV = this.toText(VV)), this.changeByRange((eV => ({
          changes: {
            from: eV.from,
            to: eV.to,
            insert: VV
          },
          range: lV.cursor(eV.from + VV.length)
        })))
      }
      changeByRange(VV) {
        let eV = this.selection,
          xV = VV(eV.TE[0]),
          JV = this.changes(xV.changes),
          YV = [xV.range],
          UV = ze(xV.effects);
        for (let yV = 1; yV < eV.TE.length; yV++) {
          let xV = VV(eV.TE[yV]),
            pV = this.changes(xV.changes),
            QV = pV.map(JV);
          for (let VV = 0; VV < yV; VV++) YV[VV] = YV[VV].map(QV);
          let nV = JV.mapDesc(pV, !0);
          YV.push(xV.range.map(nV)), JV = JV.compose(QV), UV = Fe.mapEffects(UV, QV).concat(Fe.mapEffects(ze(xV.effects), nV))
        }
        return {
          changes: JV,
          selection: lV.create(YV, eV.mainIndex),
          effects: UV
        }
      }
      changes() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return VV instanceof gV ? VV : gV.of(VV, this.doc.length, this.facet(De.lineSeparator))
      }
      toText(VV) {
        return bV.of(VV.split(this.facet(De.lineSeparator) || GV))
      }
      sliceDoc() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.doc.length;
        return this.doc.sliceString(VV, eV, this.lineBreak)
      }
      facet(VV) {
        let eV = this.config.address[VV.id];
        return null == eV ? VV.default : (ne(this, eV), we(this, eV))
      }
      toJSON(VV) {
        let eV = {
          doc: this.sliceDoc(),
          selection: this.selection.toJSON()
        };
        if (VV)
          for (let xV in VV) {
            let JV = VV[xV];
            JV instanceof dV && null != this.config.address[JV.id] && (eV[xV] = JV.spec.toJSON(this.field(VV[xV]), this))
          }
        return eV
      }
      static fromJSON(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          xV = arguments.length > 2 ? arguments[2] : void 0;
        if (!VV || "string" != typeof VV.doc) throw new RangeError("Invalid JSON representation for EditorState");
        let JV = [];
        if (xV)
          for (let YV in xV)
            if (Object.prototype.hasOwnProperty.call(VV, YV)) {
              let eV = xV[YV],
                UV = VV[YV];
              JV.push(eV.init((VV => eV.spec.fromJSON(UV, VV))))
            } return De.create({
          doc: VV.doc,
          selection: lV.fromJSON(VV.selection),
          extensions: eV.extensions ? JV.concat([eV.extensions]) : JV
        })
      }
      static create() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          eV = Qe.resolve(VV.extensions || [], new Map),
          xV = VV.doc instanceof bV ? VV.doc : bV.of((VV.doc || "").split(eV.staticFacet(De.lineSeparator) || GV)),
          JV = VV.selection ? VV.selection instanceof lV ? VV.selection : lV.single(VV.selection.anchor, VV.selection.head) : lV.single(0);
        return LV(JV, xV.length), eV.staticFacet(ve) || (JV = JV.asSingle()), new De(eV, xV, JV, eV.dynamicSlots.map((() => null)), ((VV, eV) => eV.create(VV)), null)
      }
      get tabSize() {
        return this.facet(De.tabSize)
      }
      get lineBreak() {
        return this.facet(De.lineSeparator) || "\n"
      }
      get readOnly() {
        return this.facet(Be)
      }
      phrase(VV) {
        for (var eV = arguments.length, xV = new Array(eV > 1 ? eV - 1 : 0), JV = 1; JV < eV; JV++) xV[JV - 1] = arguments[JV];
        for (let YV of this.facet(De.phrases))
          if (Object.prototype.hasOwnProperty.call(YV, VV)) {
            VV = YV[VV];
            break
          } return xV.length && (VV = VV.replace(/\$(\$|\d*)/g, ((VV, eV) => {
          if ("$" == eV) return "$";
          let JV = +(eV || 1);
          return !JV || JV > xV.length ? VV : xV[JV - 1]
        }))), VV
      }
      languageDataAt(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          JV = [];
        for (let YV of this.facet(Ze))
          for (let UV of YV(this, eV, xV)) Object.prototype.hasOwnProperty.call(UV, VV) && JV.push(UV[VV]);
        return JV
      }
      charCategorizer(VV) {
        let eV = this.languageDataAt("wordChars", VV);
        return ge(eV.length ? eV[0] : "")
      }
      wordAt(VV) {
        let {
          text: eV,
          from: xV,
          length: JV
        } = this.doc.lineAt(VV), YV = this.charCategorizer(VV), UV = VV - xV, yV = VV - xV;
        for (; UV > 0;) {
          let VV = NV(eV, UV, !1);
          if (YV(eV.slice(VV, UV)) != Ge.Word) break;
          UV = VV
        }
        for (; yV < JV;) {
          let VV = NV(eV, yV);
          if (YV(eV.slice(yV, VV)) != Ge.Word) break;
          yV = VV
        }
        return UV == yV ? null : lV.range(UV + xV, yV + xV)
      }
    }

    function ie(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        JV = {};
      for (let YV of VV)
        for (let VV of Object.keys(YV)) {
          let eV = YV[VV],
            UV = JV[VV];
          if (void 0 === UV) JV[VV] = eV;
          else if (UV === eV || void 0 === eV);
          else {
            if (!Object.hasOwnProperty.call(xV, VV)) throw new Error("Config merge conflict for field " + VV);
            JV[VV] = xV[VV](UV, eV)
          }
        }
      for (let YV in eV) void 0 === JV[YV] && (JV[YV] = eV[YV]);
      return JV
    }
    De.allowMultipleSelections = ve, De.tabSize = mV.define({
      combine: VV => VV.length ? VV[0] : 4
    }), De.lineSeparator = re, De.readOnly = Be, De.phrases = mV.define({
      compare(VV, eV) {
        let xV = Object.keys(VV),
          JV = Object.keys(eV);
        return xV.length == JV.length && xV.every((xV => VV[xV] == eV[xV]))
      }
    }), De.languageData = Ze, De.changeFilter = ke, De.transactionFilter = be, De.transactionExtender = Ee, ye.reconfigure = Fe.define();
    class Ce {
      eq(VV) {
        return this == VV
      }
      range(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VV;
        return oe.create(VV, eV, this)
      }
    }

    function ae(VV, eV) {
      return VV == eV || VV.constructor == eV.constructor && VV.eq(eV)
    }
    Ce.prototype.startSide = Ce.prototype.endSide = 0, Ce.prototype.point = !1, Ce.prototype.mapMode = WV.TrackDel;
    class oe {
      constructor(VV, eV, xV) {
        this.from = VV, this.to = eV, this.value = xV
      }
      static create(VV, eV, xV) {
        return new oe(VV, eV, xV)
      }
    }

    function ce(VV, eV) {
      return VV.from - eV.from || VV.value.startSide - eV.value.startSide
    }
    class he {
      constructor(VV, eV, xV, JV) {
        this.from = VV, this.to = eV, this.value = xV, this.aYV = JV
      }
      get length() {
        return this.to[this.to.length - 1]
      }
      findIndex(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
          YV = xV ? this.to : this.from;
        for (let UV = JV, yV = YV.length;;) {
          if (UV == yV) return UV;
          let JV = UV + yV >> 1,
            pV = YV[JV] - VV || (xV ? this.value[JV].endSide : this.value[JV].startSide) - eV;
          if (JV == UV) return pV >= 0 ? UV : yV;
          pV >= 0 ? yV = JV : UV = JV + 1
        }
      }
      between(VV, eV, xV, JV) {
        for (let YV = this.findIndex(eV, -1e9, !0), UV = this.findIndex(xV, 1e9, !1, YV); YV < UV; YV++)
          if (!1 === JV(this.from[YV] + VV, this.to[YV] + VV, this.value[YV])) return !1
      }
      map(VV, eV) {
        let xV = [],
          JV = [],
          YV = [],
          UV = -1,
          yV = -1;
        for (let pV = 0; pV < this.value.length; pV++) {
          let QV, nV, wV = this.value[pV],
            ZV = this.from[pV] + VV,
            vV = this.to[pV] + VV;
          if (ZV == vV) {
            let VV = eV.mapPos(ZV, wV.startSide, wV.mapMode);
            if (null == VV) continue;
            if (QV = nV = VV, wV.startSide != wV.endSide && (nV = eV.mapPos(ZV, wV.endSide), nV < QV)) continue
          } else if (QV = eV.mapPos(ZV, wV.startSide), nV = eV.mapPos(vV, wV.endSide), QV > nV || QV == nV && wV.startSide > 0 && wV.endSide <= 0) continue;
          (nV - QV || wV.endSide - wV.startSide) < 0 || (UV < 0 && (UV = QV), wV.point && (yV = Math.max(yV, nV - QV)), xV.push(wV), JV.push(QV - UV), YV.push(nV - UV))
        }
        return {
          mapped: xV.length ? new he(JV, YV, xV, yV) : null,
          pos: UV
        }
      }
    }
    class le {
      constructor(VV, eV, xV, JV) {
        this.chunkPos = VV, this.chunk = eV, this.nextLayer = xV, this.aYV = JV
      }
      static create(VV, eV, xV, JV) {
        return new le(VV, eV, xV, JV)
      }
      get length() {
        let VV = this.chunk.length - 1;
        return VV < 0 ? 0 : Math.max(this.chunkEnd(VV), this.nextLayer.length)
      }
      get size() {
        if (this.XZ) return 0;
        let VV = this.nextLayer.size;
        for (let eV of this.chunk) VV += eV.value.length;
        return VV
      }
      chunkEnd(VV) {
        return this.chunkPos[VV] + this.chunk[VV].length
      }
      update(VV) {
        let {
          add: eV = [],
          sort: xV = !1,
          filterFrom: JV = 0,
          filterTo: YV = this.length
        } = VV, UV = VV.filter;
        if (0 == eV.length && !UV) return this;
        if (xV && (eV = eV.slice().sort(ce)), this.XZ) return eV.length ? le.of(eV) : this;
        let yV = new me(this, null, -1).goto(0),
          pV = 0,
          QV = [],
          nV = new Le;
        for (; yV.value || pV < eV.length;)
          if (pV < eV.length && (yV.from - eV[pV].from || yV.startSide - eV[pV].value.startSide) >= 0) {
            let VV = eV[pV++];
            nV.addInner(VV.from, VV.to, VV.value) || QV.push(VV)
          } else 1 == yV.rangeIndex && yV.chunkIndex < this.chunk.length && (pV == eV.length || this.chunkEnd(yV.chunkIndex) < eV[pV].from) && (!UV || JV > this.chunkEnd(yV.chunkIndex) || YV < this.chunkPos[yV.chunkIndex]) && nV.addChunk(this.chunkPos[yV.chunkIndex], this.chunk[yV.chunkIndex]) ? yV.nextChunk() : ((!UV || JV > yV.to || YV < yV.from || UV(yV.from, yV.to, yV.value)) && (nV.addInner(yV.from, yV.to, yV.value) || QV.push(oe.create(yV.from, yV.to, yV.value))), yV.next());
        return nV.finishInner(this.nextLayer.XZ && !QV.length ? le.empty : this.nextLayer.update({
          add: QV,
          filter: UV,
          filterFrom: JV,
          filterTo: YV
        }))
      }
      map(VV) {
        if (VV.empty || this.XZ) return this;
        let eV = [],
          xV = [],
          JV = -1;
        for (let UV = 0; UV < this.chunk.length; UV++) {
          let YV = this.chunkPos[UV],
            yV = this.chunk[UV],
            pV = VV.touchesRange(YV, YV + yV.length);
          if (!1 === pV) JV = Math.max(JV, yV.aYV), eV.push(yV), xV.push(VV.mapPos(YV));
          else if (!0 === pV) {
            let {
              mapped: UV,
              pos: pV
            } = yV.map(YV, VV);
            UV && (JV = Math.max(JV, UV.aYV), eV.push(UV), xV.push(pV))
          }
        }
        let YV = this.nextLayer.map(VV);
        return 0 == eV.length ? YV : new le(xV, eV, YV || le.empty, JV)
      }
      between(VV, eV, xV) {
        if (!this.XZ) {
          for (let JV = 0; JV < this.chunk.length; JV++) {
            let YV = this.chunkPos[JV],
              UV = this.chunk[JV];
            if (eV >= YV && VV <= YV + UV.length && !1 === UV.between(YV, VV - YV, eV - YV, xV)) return
          }
          this.nextLayer.between(VV, eV, xV)
        }
      }
      iter() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        return Ke.from([this]).goto(VV)
      }
      get XZ() {
        return this.nextLayer == this
      }
      static iter(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ke.from(VV).goto(eV)
      }
      static compare(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1,
          UV = VV.filter((VV => VV.aYV > 0 || !VV.XZ && VV.aYV >= YV)),
          yV = eV.filter((VV => VV.aYV > 0 || !VV.XZ && VV.aYV >= YV)),
          pV = fe(UV, yV, xV),
          QV = new ue(UV, pV, YV),
          nV = new ue(yV, pV, YV);
        xV.iterGaps(((VV, eV, xV) => se(QV, VV, nV, eV, xV, JV))), xV.empty && 0 == xV.length && se(QV, 0, nV, 0, 0, JV)
      }
      static eq(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        null == JV && (JV = 999999999);
        let YV = VV.filter((VV => !VV.XZ && eV.indexOf(VV) < 0)),
          UV = eV.filter((eV => !eV.XZ && VV.indexOf(eV) < 0));
        if (YV.length != UV.length) return !1;
        if (!YV.length) return !0;
        let yV = fe(YV, UV),
          pV = new ue(YV, yV, 0).goto(xV),
          QV = new ue(UV, yV, 0).goto(xV);
        for (;;) {
          if (pV.to != QV.to || !Se(pV.active, QV.active) || pV.point && (!QV.point || !ae(pV.point, QV.point))) return !1;
          if (pV.to > JV) return !0;
          pV.next(), QV.next()
        }
      }
      static spans(VV, eV, xV, JV) {
        let YV = new ue(VV, null, arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : -1).goto(eV),
          UV = eV,
          yV = YV.openStart;
        for (;;) {
          let VV = Math.min(YV.to, xV);
          if (YV.point) {
            let xV = YV.activeForPoint(YV.to),
              pV = YV.pointFrom < eV ? xV.length + 1 : YV.point.startSide < 0 ? xV.length : Math.min(xV.length, yV);
            JV.point(UV, VV, YV.point, xV, pV, YV.pointRank), yV = Math.min(YV.openEnd(VV), xV.length)
          } else VV > UV && (JV.span(UV, VV, YV.active, yV), yV = YV.openEnd(VV));
          if (YV.to > xV) return yV + (YV.point && YV.to > xV ? 1 : 0);
          UV = YV.to, YV.next()
        }
      }
      static of (VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = new Le;
        for (let JV of VV instanceof oe ? [VV] : eV ? function(VV) {
            if (VV.length > 1)
              for (let eV = VV[0], xV = 1; xV < VV.length; xV++) {
                let JV = VV[xV];
                if (ce(eV, JV) > 0) return VV.slice().sort(ce);
                eV = JV
              }
            return VV
          }(VV) : VV) xV.add(JV.from, JV.to, JV.value);
        return xV.finish()
      }
      static join(VV) {
        if (!VV.length) return le.empty;
        let eV = VV[VV.length - 1];
        for (let xV = VV.length - 2; xV >= 0; xV--)
          for (let JV = VV[xV]; JV != le.empty; JV = JV.nextLayer) eV = new le(JV.chunkPos, JV.chunk, eV, Math.max(JV.aYV, eV.aYV));
        return eV
      }
    }
    le.empty = new le([], [], null, -1), le.empty.nextLayer = le.empty;
    class Le {
      finishChunk(VV) {
        this.chunks.push(new he(this.from, this.to, this.value, this.aYV)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.aYV), this.aYV = -1, VV && (this.from = [], this.to = [], this.value = [])
      }
      constructor() {
        this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.aYV = -1, this.setMaxPoint = -1, this.nextLayer = null
      }
      add(VV, eV, xV) {
        this.addInner(VV, eV, xV) || (this.nextLayer || (this.nextLayer = new Le)).add(VV, eV, xV)
      }
      addInner(VV, eV, xV) {
        let JV = VV - this.lastTo || xV.startSide - this.last.endSide;
        if (JV <= 0 && (VV - this.lastFrom || xV.startSide - this.last.startSide) < 0) throw new Error("Ranges must be added sorted by `from` position and `startSide`");
        return !(JV < 0) && (250 == this.from.length && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = VV), this.from.push(VV - this.chunkStart), this.to.push(eV - this.chunkStart), this.last = xV, this.lastFrom = VV, this.lastTo = eV, this.value.push(xV), xV.point && (this.aYV = Math.max(this.aYV, eV - VV)), !0)
      }
      addChunk(VV, eV) {
        if ((VV - this.lastTo || eV.value[0].startSide - this.last.endSide) < 0) return !1;
        this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, eV.aYV), this.chunks.push(eV), this.chunkPos.push(VV);
        let xV = eV.value.length - 1;
        return this.last = eV.value[xV], this.lastFrom = eV.from[xV] + VV, this.lastTo = eV.to[xV] + VV, !0
      }
      finish() {
        return this.finishInner(le.empty)
      }
      finishInner(VV) {
        if (this.from.length && this.finishChunk(!1), 0 == this.chunks.length) return VV;
        let eV = le.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(VV) : VV, this.setMaxPoint);
        return this.from = null, eV
      }
    }

    function fe(VV, eV, xV) {
      let JV = new Map;
      for (let UV of VV)
        for (let VV = 0; VV < UV.chunk.length; VV++) UV.chunk[VV].aYV <= 0 && JV.set(UV.chunk[VV], UV.chunkPos[VV]);
      let YV = new Set;
      for (let UV of eV)
        for (let VV = 0; VV < UV.chunk.length; VV++) {
          let eV = JV.get(UV.chunk[VV]);
          null == eV || (xV ? xV.mapPos(eV) : eV) != UV.chunkPos[VV] || (null === xV || void 0 === xV ? void 0 : xV.touchesRange(eV, eV + UV.chunk[VV].length)) || YV.add(UV.chunk[VV])
        }
      return YV
    }
    class me {
      constructor(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this.layer = VV, this.skip = eV, this.oYV = xV, this.rank = JV
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      get endSide() {
        return this.value ? this.value.endSide : 0
      }
      goto(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(VV, eV, !1), this
      }
      gotoInner(VV, eV, xV) {
        for (; this.chunkIndex < this.layer.chunk.length;) {
          let eV = this.layer.chunk[this.chunkIndex];
          if (!(this.skip && this.skip.has(eV) || this.layer.chunkEnd(this.chunkIndex) < VV || eV.aYV < this.oYV)) break;
          this.chunkIndex++, xV = !1
        }
        if (this.chunkIndex < this.layer.chunk.length) {
          let JV = this.layer.chunk[this.chunkIndex].findIndex(VV - this.layer.chunkPos[this.chunkIndex], eV, !0);
          (!xV || this.rangeIndex < JV) && this.setRangeIndex(JV)
        }
        this.next()
      }
      forward(VV, eV) {
        (this.to - VV || this.endSide - eV) < 0 && this.gotoInner(VV, eV, !0)
      }
      next() {
        for (;;) {
          if (this.chunkIndex == this.layer.chunk.length) {
            this.from = this.to = 1e9, this.value = null;
            break
          } {
            let VV = this.layer.chunkPos[this.chunkIndex],
              eV = this.layer.chunk[this.chunkIndex],
              xV = VV + eV.from[this.rangeIndex];
            if (this.from = xV, this.to = VV + eV.to[this.rangeIndex], this.value = eV.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.oYV < 0 || this.value.point && this.to - this.from >= this.oYV) break
          }
        }
      }
      setRangeIndex(VV) {
        if (VV == this.layer.chunk[this.chunkIndex].value.length) {
          if (this.chunkIndex++, this.skip)
            for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
          this.rangeIndex = 0
        } else this.rangeIndex = VV
      }
      nextChunk() {
        this.chunkIndex++, this.rangeIndex = 0, this.next()
      }
      compare(VV) {
        return this.from - VV.from || this.startSide - VV.startSide || this.rank - VV.rank || this.to - VV.to || this.endSide - VV.endSide
      }
    }
    class Ke {
      constructor(VV) {
        this.heap = VV
      }
      static from(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1,
          JV = [];
        for (let YV = 0; YV < VV.length; YV++)
          for (let UV = VV[YV]; !UV.XZ; UV = UV.nextLayer) UV.aYV >= xV && JV.push(new me(UV, eV, xV, YV));
        return 1 == JV.length ? JV[0] : new Ke(JV)
      }
      get startSide() {
        return this.value ? this.value.startSide : 0
      }
      goto(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        for (let xV of this.heap) xV.goto(VV, eV);
        for (let xV = this.heap.length >> 1; xV >= 0; xV--) He(this.heap, xV);
        return this.next(), this
      }
      forward(VV, eV) {
        for (let xV of this.heap) xV.forward(VV, eV);
        for (let xV = this.heap.length >> 1; xV >= 0; xV--) He(this.heap, xV);
        (this.to - VV || this.value.endSide - eV) < 0 && this.next()
      }
      next() {
        if (0 == this.heap.length) this.from = this.to = 1e9, this.value = null, this.rank = -1;
        else {
          let VV = this.heap[0];
          this.from = VV.from, this.to = VV.to, this.value = VV.value, this.rank = VV.rank, VV.value && VV.next(), He(this.heap, 0)
        }
      }
    }

    function He(VV, eV) {
      for (let xV = VV[eV];;) {
        let JV = 1 + (eV << 1);
        if (JV >= VV.length) break;
        let YV = VV[JV];
        if (JV + 1 < VV.length && YV.compare(VV[JV + 1]) >= 0 && (YV = VV[JV + 1], JV++), xV.compare(YV) < 0) break;
        VV[JV] = xV, VV[eV] = YV, eV = JV
      }
    }
    class ue {
      constructor(VV, eV, xV) {
        this.oYV = xV, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = Ke.from(VV, eV, xV)
      }
      goto(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1e9;
        return this.cursor.goto(VV, eV), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = VV, this.endSide = eV, this.openStart = -1, this.next(), this
      }
      forward(VV, eV) {
        for (; this.minActive > -1 && (this.activeTo[this.minActive] - VV || this.active[this.minActive].endSide - eV) < 0;) this.removeActive(this.minActive);
        this.cursor.forward(VV, eV)
      }
      removeActive(VV) {
        Ie(this.active, VV), Ie(this.activeTo, VV), Ie(this.activeRank, VV), this.minActive = Oe(this.active, this.activeTo)
      }
      addActive(VV) {
        let eV = 0,
          {
            value: xV,
            to: JV,
            rank: YV
          } = this.cursor;
        for (; eV < this.activeRank.length && (YV - this.activeRank[eV] || JV - this.activeTo[eV]) > 0;) eV++;
        de(this.active, eV, xV), de(this.activeTo, eV, JV), de(this.activeRank, eV, YV), VV && de(VV, eV, this.cursor.from), this.minActive = Oe(this.active, this.activeTo)
      }
      next() {
        let VV = this.to,
          eV = this.point;
        this.point = null;
        let xV = this.openStart < 0 ? [] : null;
        for (;;) {
          let JV = this.minActive;
          if (JV > -1 && (this.activeTo[JV] - this.cursor.from || this.active[JV].endSide - this.cursor.startSide) < 0) {
            if (this.activeTo[JV] > VV) {
              this.to = this.activeTo[JV], this.endSide = this.active[JV].endSide;
              break
            }
            this.removeActive(JV), xV && Ie(xV, JV)
          } else {
            if (!this.cursor.value) {
              this.to = this.endSide = 1e9;
              break
            }
            if (this.cursor.from > VV) {
              this.to = this.cursor.from, this.endSide = this.cursor.startSide;
              break
            } {
              let VV = this.cursor.value;
              if (VV.point) {
                if (!(eV && this.cursor.to == this.to && this.cursor.from < this.cursor.to)) {
                  this.point = VV, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = VV.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
                  break
                }
                this.cursor.next()
              } else this.addActive(xV), this.cursor.next()
            }
          }
        }
        if (xV) {
          this.openStart = 0;
          for (let eV = xV.length - 1; eV >= 0 && xV[eV] < VV; eV--) this.openStart++
        }
      }
      activeForPoint(VV) {
        if (!this.active.length) return this.active;
        let eV = [];
        for (let xV = this.active.length - 1; xV >= 0 && !(this.activeRank[xV] < this.pointRank); xV--)(this.activeTo[xV] > VV || this.activeTo[xV] == VV && this.active[xV].endSide >= this.point.endSide) && eV.push(this.active[xV]);
        return eV.reverse()
      }
      openEnd(VV) {
        let eV = 0;
        for (let xV = this.activeTo.length - 1; xV >= 0 && this.activeTo[xV] > VV; xV--) eV++;
        return eV
      }
    }

    function se(VV, eV, xV, JV, YV, UV) {
      VV.goto(eV), xV.goto(JV);
      let yV = JV + YV,
        pV = JV,
        QV = JV - eV,
        nV = !!UV.boundChange;
      for (let wV = !1;;) {
        let eV = VV.to + QV - xV.to,
          JV = eV || VV.endSide - xV.endSide,
          YV = JV < 0 ? VV.to + QV : xV.to,
          ZV = Math.min(YV, yV);
        if (VV.point || xV.point ? (VV.point && xV.point && ae(VV.point, xV.point) && Se(VV.activeForPoint(VV.to), xV.activeForPoint(xV.to)) || UV.comparePoint(pV, ZV, VV.point, xV.point), wV = !1) : (wV && UV.boundChange(pV), ZV > pV && !Se(VV.active, xV.active) && UV.compareRange(pV, ZV, VV.active, xV.active), nV && ZV < yV && (eV || VV.openEnd(YV) != xV.openEnd(YV)) && (wV = !0)), YV > yV) break;
        pV = YV, JV <= 0 && VV.next(), JV >= 0 && xV.next()
      }
    }

    function Se(VV, eV) {
      if (VV.length != eV.length) return !1;
      for (let xV = 0; xV < VV.length; xV++)
        if (VV[xV] != eV[xV] && !ae(VV[xV], eV[xV])) return !1;
      return !0
    }

    function Ie(VV, eV) {
      for (let xV = eV, JV = VV.length - 1; xV < JV; xV++) VV[xV] = VV[xV + 1];
      VV.pop()
    }

    function de(VV, eV, xV) {
      for (let JV = VV.length - 1; JV >= eV; JV--) VV[JV + 1] = VV[JV];
      VV[eV] = xV
    }

    function Oe(VV, eV) {
      let xV = -1,
        JV = 1e9;
      for (let YV = 0; YV < eV.length; YV++)(eV[YV] - JV || VV[YV].endSide - VV[xV].endSide) < 0 && (xV = YV, JV = eV[YV]);
      return xV
    }

    function Vx(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : VV.length,
        JV = 0;
      for (let YV = 0; YV < xV && YV < VV.length;) 9 == VV.charCodeAt(YV) ? (JV += eV - JV % eV, YV++) : (JV++, YV = NV(VV, YV));
      return JV
    }

    function ex(VV, eV, xV, JV) {
      for (let YV = 0, UV = 0;;) {
        if (UV >= eV) return YV;
        if (YV == VV.length) break;
        UV += 9 == VV.charCodeAt(YV) ? xV - UV % xV : 1, YV = NV(VV, YV)
      }
      return !0 === JV ? -1 : VV.length
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);