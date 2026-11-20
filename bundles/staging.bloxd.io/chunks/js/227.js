export const id = 227;
export const ids = [227];
export const modules = {
  36751: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Tv,
      e: () => Wv,
      h: () => sv,
      k: () => wv
    });
    var hv = Pv(36602),
      Sv = Pv(36599),
      ev = Pv(36620),
      gv = Pv(36631);

    function pv(vv) {
      return Math.pow(vv, Sv.h)
    }

    function dv(vv) {
      return vv <= .04045 ? .0773993808 * vv : Math.pow(.947867299 * (vv + .055), 2.4)
    }

    function Nv(vv) {
      return Math.pow(vv, Sv.g)
    }

    function lv(vv) {
      return vv <= .0031308 ? 12.92 * vv : 1.055 * Math.pow(vv, .41666) - .055
    }
    class Tv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = vv, this.g = zv, this.b = Pv
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let vv = 255 * this.r | 0;
        return vv = 397 * vv ^ 255 * this.g, vv = 397 * vv ^ 255 * this.b, vv
      }
      toArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return vv[zv] = this.r, vv[zv + 1] = this.g, vv[zv + 2] = this.b, this
      }
      Evv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Tv.FromArrayToRef(vv, zv, this), this
      }
      toColor4() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Wv(this.r, this.g, this.b, vv)
      }
      pPv() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(vv) {
        return new Tv(this.r * vv.r, this.g * vv.g, this.b * vv.b)
      }
      multiplyToRef(vv, zv) {
        return zv.r = this.r * vv.r, zv.g = this.g * vv.g, zv.b = this.b * vv.b, zv
      }
      multiplyInPlace(vv) {
        return this.r *= vv.r, this.g *= vv.g, this.b *= vv.b, this
      }
      multiplyByFloats(vv, zv, Pv) {
        return new Tv(this.r * vv, this.g * zv, this.b * Pv)
      }
      divide(vv) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(vv, zv) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(vv) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(vv) {
        return this.minimizeInPlaceFromFloats(vv.r, vv.g, vv.b)
      }
      maximizeInPlace(vv) {
        return this.maximizeInPlaceFromFloats(vv.r, vv.g, vv.b)
      }
      minimizeInPlaceFromFloats(vv, zv, Pv) {
        return this.r = Math.min(vv, this.r), this.g = Math.min(zv, this.g), this.b = Math.min(Pv, this.b), this
      }
      maximizeInPlaceFromFloats(vv, zv, Pv) {
        return this.r = Math.max(vv, this.r), this.g = Math.max(zv, this.g), this.b = Math.max(Pv, this.b), this
      }
      floorToRef(vv) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(vv) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(vv) {
        return vv && this.r === vv.r && this.g === vv.g && this.b === vv.b
      }
      equalsFloats(vv, zv, Pv) {
        return this.Mev(vv, zv, Pv)
      }
      Mev(vv, zv, Pv) {
        return this.r === vv && this.g === zv && this.b === Pv
      }
      equalsWithEpsilon(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv.e;
        return (0, ev.WithinEpsilon)(this.r, vv.r, zv) && (0, ev.WithinEpsilon)(this.g, vv.g, zv) && (0, ev.WithinEpsilon)(this.b, vv.b, zv)
      }
      Re() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(vv) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(vv) {
        return new Tv(this.r * vv, this.g * vv, this.b * vv)
      }
      scaleInPlace(vv) {
        return this.r *= vv, this.g *= vv, this.b *= vv, this
      }
      scaleToRef(vv, zv) {
        return zv.r = this.r * vv, zv.g = this.g * vv, zv.b = this.b * vv, zv
      }
      scaleAndAddToRef(vv, zv) {
        return zv.r += this.r * vv, zv.g += this.g * vv, zv.b += this.b * vv, zv
      }
      clampToRef() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        return Pv.r = (0, ev.Clamp)(this.r, vv, zv), Pv.g = (0, ev.Clamp)(this.g, vv, zv), Pv.b = (0, ev.Clamp)(this.b, vv, zv), Pv
      }
      add(vv) {
        return new Tv(this.r + vv.r, this.g + vv.g, this.b + vv.b)
      }
      addInPlace(vv) {
        return this.r += vv.r, this.g += vv.g, this.b += vv.b, this
      }
      addInPlaceFromFloats(vv, zv, Pv) {
        return this.r += vv, this.g += zv, this.b += Pv, this
      }
      addToRef(vv, zv) {
        return zv.r = this.r + vv.r, zv.g = this.g + vv.g, zv.b = this.b + vv.b, zv
      }
      subtract(vv) {
        return new Tv(this.r - vv.r, this.g - vv.g, this.b - vv.b)
      }
      subtractToRef(vv, zv) {
        return zv.r = this.r - vv.r, zv.g = this.g - vv.g, zv.b = this.b - vv.b, zv
      }
      VPv(vv) {
        return this.r -= vv.r, this.g -= vv.g, this.b -= vv.b, this
      }
      subtractFromFloats(vv, zv, Pv) {
        return new Tv(this.r - vv, this.g - zv, this.b - Pv)
      }
      subtractFromFloatsToRef(vv, zv, Pv, hv) {
        return hv.r = this.r - vv, hv.g = this.g - zv, hv.b = this.b - Pv, hv
      }
      clone() {
        return new Tv(this.r, this.g, this.b)
      }
      Vzv(vv) {
        return this.r = vv.r, this.g = vv.g, this.b = vv.b, this
      }
      f_(vv, zv, Pv) {
        return this.r = vv, this.g = zv, this.b = Pv, this
      }
      set(vv, zv, Pv) {
        return this.f_(vv, zv, Pv)
      }
      Dk(vv) {
        return this.r = this.g = this.b = vv, this
      }
      toHexString() {
        const vv = Math.round(255 * this.r),
          zv = Math.round(255 * this.g),
          Pv = Math.round(255 * this.b);
        return "#" + (0, ev.ToHex)(vv) + (0, ev.ToHex)(zv) + (0, ev.ToHex)(Pv)
      }
      fromHexString(vv) {
        return "#" !== vv.substring(0, 1) || 7 !== vv.length || (this.r = parseInt(vv.substring(1, 3), 16) / 255, this.g = parseInt(vv.substring(3, 5), 16) / 255, this.b = parseInt(vv.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Tv)
      }
      toHSVToRef(vv) {
        const zv = this.r,
          Pv = this.g,
          hv = this.b,
          Sv = Math.max(zv, Pv, hv),
          ev = Math.min(zv, Pv, hv);
        let gv = 0,
          pv = 0;
        const dv = Sv,
          Nv = Sv - ev;
        return 0 !== Sv && (pv = Nv / Sv), Sv != ev && (Sv == zv ? (gv = (Pv - hv) / Nv, Pv < hv && (gv += 6)) : Sv == Pv ? gv = (hv - zv) / Nv + 2 : Sv == hv && (gv = (zv - Pv) / Nv + 4), gv *= 60), vv.r = gv, vv.g = pv, vv.b = dv, vv
      }
      toLinearSpace() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = new Tv;
        return this.toLinearSpaceToRef(zv, vv), zv
      }
      toLinearSpaceToRef(vv) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (vv.r = dv(this.r), vv.g = dv(this.g), vv.b = dv(this.b)) : (vv.r = pv(this.r), vv.g = pv(this.g), vv.b = pv(this.b)), this
      }
      toGammaSpace() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = new Tv;
        return this.toGammaSpaceToRef(zv, vv), zv
      }
      toGammaSpaceToRef(vv) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (vv.r = lv(this.r), vv.g = lv(this.g), vv.b = lv(this.b)) : (vv.r = Nv(this.r), vv.g = Nv(this.g), vv.b = Nv(this.b)), this
      }
      static HSVtoRGBToRef(vv, zv, Pv, hv) {
        const Sv = Pv * zv,
          ev = vv / 60,
          gv = Sv * (1 - Math.abs(ev % 2 - 1));
        let pv = 0,
          dv = 0,
          Nv = 0;
        ev >= 0 && ev <= 1 ? (pv = Sv, dv = gv) : ev >= 1 && ev <= 2 ? (pv = gv, dv = Sv) : ev >= 2 && ev <= 3 ? (dv = Sv, Nv = gv) : ev >= 3 && ev <= 4 ? (dv = gv, Nv = Sv) : ev >= 4 && ev <= 5 ? (pv = gv, Nv = Sv) : ev >= 5 && ev <= 6 && (pv = Sv, Nv = gv);
        const lv = Pv - Sv;
        return hv.r = pv + lv, hv.g = dv + lv, hv.b = Nv + lv, hv
      }
      static FromHSV(vv, zv, Pv) {
        const hv = new Tv(0, 0, 0);
        return Tv.HSVtoRGBToRef(vv, zv, Pv, hv), hv
      }
      static FromHexString(vv) {
        return new Tv(0, 0, 0).fromHexString(vv)
      }
      static FromArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Tv(vv[zv], vv[zv + 1], vv[zv + 2])
      }
      static FromArrayToRef(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        Pv.r = vv[zv], Pv.g = vv[zv + 1], Pv.b = vv[zv + 2]
      }
      static FromInts(vv, zv, Pv) {
        return new Tv(vv / 255, zv / 255, Pv / 255)
      }
      static Lerp(vv, zv, Pv) {
        const hv = new Tv(0, 0, 0);
        return Tv.LerpToRef(vv, zv, Pv, hv), hv
      }
      static LerpToRef(vv, zv, Pv, hv) {
        hv.r = vv.r + (zv.r - vv.r) * Pv, hv.g = vv.g + (zv.g - vv.g) * Pv, hv.b = vv.b + (zv.b - vv.b) * Pv
      }
      static Hermite(vv, zv, Pv, hv, Sv) {
        const ev = Sv * Sv,
          gv = Sv * ev,
          pv = 2 * gv - 3 * ev + 1,
          dv = -2 * gv + 3 * ev,
          Nv = gv - 2 * ev + Sv,
          lv = gv - ev,
          Wv = vv.r * pv + Pv.r * dv + zv.r * Nv + hv.r * lv,
          wv = vv.g * pv + Pv.g * dv + zv.g * Nv + hv.g * lv,
          av = vv.b * pv + Pv.b * dv + zv.b * Nv + hv.b * lv;
        return new Tv(Wv, wv, av)
      }
      static Hermite1stDerivative(vv, zv, Pv, hv, Sv) {
        const ev = Tv.Black();
        return this.Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev), ev
      }
      static Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev) {
        const gv = Sv * Sv;
        ev.r = 6 * (gv - Sv) * vv.r + (3 * gv - 4 * Sv + 1) * zv.r + 6 * (-gv + Sv) * Pv.r + (3 * gv - 2 * Sv) * hv.r, ev.g = 6 * (gv - Sv) * vv.g + (3 * gv - 4 * Sv + 1) * zv.g + 6 * (-gv + Sv) * Pv.g + (3 * gv - 2 * Sv) * hv.g, ev.b = 6 * (gv - Sv) * vv.b + (3 * gv - 4 * Sv + 1) * zv.b + 6 * (-gv + Sv) * Pv.b + (3 * gv - 2 * Sv) * hv.b
      }
      static Red() {
        return new Tv(1, 0, 0)
      }
      static Green() {
        return new Tv(0, 1, 0)
      }
      static Blue() {
        return new Tv(0, 0, 1)
      }
      static Black() {
        return new Tv(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Tv._BlackReadOnly
      }
      static White() {
        return new Tv(1, 1, 1)
      }
      static Purple() {
        return new Tv(.5, 0, .5)
      }
      static Magenta() {
        return new Tv(1, 0, 1)
      }
      static Yellow() {
        return new Tv(1, 1, 0)
      }
      static Gray() {
        return new Tv(.5, .5, .5)
      }
      static Teal() {
        return new Tv(0, 1, 1)
      }
      static Random() {
        return new Tv(Math.random(), Math.random(), Math.random())
      }
    }
    Tv._V8PerformanceHack = new Tv(.5, .5, .5), Tv._BlackReadOnly = Tv.Black();
    class Wv {
      constructor() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = vv, this.g = zv, this.b = Pv, this.a = hv
      }
      pPv() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return vv[zv] = this.r, vv[zv + 1] = this.g, vv[zv + 2] = this.b, vv[zv + 3] = this.a, this
      }
      Evv(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = vv[zv], this.g = vv[zv + 1], this.b = vv[zv + 2], this.a = vv[zv + 3], this
      }
      equals(vv) {
        return vv && this.r === vv.r && this.g === vv.g && this.b === vv.b && this.a === vv.a
      }
      add(vv) {
        return new Wv(this.r + vv.r, this.g + vv.g, this.b + vv.b, this.a + vv.a)
      }
      addToRef(vv, zv) {
        return zv.r = this.r + vv.r, zv.g = this.g + vv.g, zv.b = this.b + vv.b, zv.a = this.a + vv.a, zv
      }
      addInPlace(vv) {
        return this.r += vv.r, this.g += vv.g, this.b += vv.b, this.a += vv.a, this
      }
      addInPlaceFromFloats(vv, zv, Pv, hv) {
        return this.r += vv, this.g += zv, this.b += Pv, this.a += hv, this
      }
      subtract(vv) {
        return new Wv(this.r - vv.r, this.g - vv.g, this.b - vv.b, this.a - vv.a)
      }
      subtractToRef(vv, zv) {
        return zv.r = this.r - vv.r, zv.g = this.g - vv.g, zv.b = this.b - vv.b, zv.a = this.a - vv.a, zv
      }
      VPv(vv) {
        return this.r -= vv.r, this.g -= vv.g, this.b -= vv.b, this.a -= vv.a, this
      }
      subtractFromFloats(vv, zv, Pv, hv) {
        return new Wv(this.r - vv, this.g - zv, this.b - Pv, this.a - hv)
      }
      subtractFromFloatsToRef(vv, zv, Pv, hv, Sv) {
        return Sv.r = this.r - vv, Sv.g = this.g - zv, Sv.b = this.b - Pv, Sv.a = this.a - hv, Sv
      }
      scale(vv) {
        return new Wv(this.r * vv, this.g * vv, this.b * vv, this.a * vv)
      }
      scaleInPlace(vv) {
        return this.r *= vv, this.g *= vv, this.b *= vv, this.a *= vv, this
      }
      scaleToRef(vv, zv) {
        return zv.r = this.r * vv, zv.g = this.g * vv, zv.b = this.b * vv, zv.a = this.a * vv, zv
      }
      scaleAndAddToRef(vv, zv) {
        return zv.r += this.r * vv, zv.g += this.g * vv, zv.b += this.b * vv, zv.a += this.a * vv, zv
      }
      clampToRef() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        return Pv.r = (0, ev.Clamp)(this.r, vv, zv), Pv.g = (0, ev.Clamp)(this.g, vv, zv), Pv.b = (0, ev.Clamp)(this.b, vv, zv), Pv.a = (0, ev.Clamp)(this.a, vv, zv), Pv
      }
      multiply(vv) {
        return new Wv(this.r * vv.r, this.g * vv.g, this.b * vv.b, this.a * vv.a)
      }
      multiplyToRef(vv, zv) {
        return zv.r = this.r * vv.r, zv.g = this.g * vv.g, zv.b = this.b * vv.b, zv.a = this.a * vv.a, zv
      }
      multiplyInPlace(vv) {
        return this.r *= vv.r, this.g *= vv.g, this.b *= vv.b, this.a *= vv.a, this
      }
      multiplyByFloats(vv, zv, Pv, hv) {
        return new Wv(this.r * vv, this.g * zv, this.b * Pv, this.a * hv)
      }
      divide(vv) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(vv, zv) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(vv) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(vv) {
        return this.r = Math.min(this.r, vv.r), this.g = Math.min(this.g, vv.g), this.b = Math.min(this.b, vv.b), this.a = Math.min(this.a, vv.a), this
      }
      maximizeInPlace(vv) {
        return this.r = Math.max(this.r, vv.r), this.g = Math.max(this.g, vv.g), this.b = Math.max(this.b, vv.b), this.a = Math.max(this.a, vv.a), this
      }
      minimizeInPlaceFromFloats(vv, zv, Pv, hv) {
        return this.r = Math.min(vv, this.r), this.g = Math.min(zv, this.g), this.b = Math.min(Pv, this.b), this.a = Math.min(hv, this.a), this
      }
      maximizeInPlaceFromFloats(vv, zv, Pv, hv) {
        return this.r = Math.max(vv, this.r), this.g = Math.max(zv, this.g), this.b = Math.max(Pv, this.b), this.a = Math.max(hv, this.a), this
      }
      floorToRef(vv) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(vv) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      Re() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(vv) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sv.e;
        return (0, ev.WithinEpsilon)(this.r, vv.r, zv) && (0, ev.WithinEpsilon)(this.g, vv.g, zv) && (0, ev.WithinEpsilon)(this.b, vv.b, zv) && (0, ev.WithinEpsilon)(this.a, vv.a, zv)
      }
      Mev(vv, zv, Pv, hv) {
        return this.r === vv && this.g === zv && this.b === Pv && this.a === hv
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let vv = 255 * this.r | 0;
        return vv = 397 * vv ^ 255 * this.g, vv = 397 * vv ^ 255 * this.b, vv = 397 * vv ^ 255 * this.a, vv
      }
      clone() {
        return (new Wv).Vzv(this)
      }
      Vzv(vv) {
        return this.r = vv.r, this.g = vv.g, this.b = vv.b, this.a = vv.a, this
      }
      f_(vv, zv, Pv, hv) {
        return this.r = vv, this.g = zv, this.b = Pv, this.a = hv, this
      }
      set(vv, zv, Pv, hv) {
        return this.f_(vv, zv, Pv, hv)
      }
      Dk(vv) {
        return this.r = this.g = this.b = this.a = vv, this
      }
      toHexString() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = Math.round(255 * this.r),
          Pv = Math.round(255 * this.g),
          hv = Math.round(255 * this.b);
        if (vv) return "#" + (0, ev.ToHex)(zv) + (0, ev.ToHex)(Pv) + (0, ev.ToHex)(hv);
        const Sv = Math.round(255 * this.a);
        return "#" + (0, ev.ToHex)(zv) + (0, ev.ToHex)(Pv) + (0, ev.ToHex)(hv) + (0, ev.ToHex)(Sv)
      }
      fromHexString(vv) {
        return "#" !== vv.substring(0, 1) || 9 !== vv.length && 7 !== vv.length || (this.r = parseInt(vv.substring(1, 3), 16) / 255, this.g = parseInt(vv.substring(3, 5), 16) / 255, this.b = parseInt(vv.substring(5, 7), 16) / 255, 9 === vv.length && (this.a = parseInt(vv.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = new Wv;
        return this.toLinearSpaceToRef(zv, vv), zv
      }
      toLinearSpaceToRef(vv) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (vv.r = dv(this.r), vv.g = dv(this.g), vv.b = dv(this.b)) : (vv.r = pv(this.r), vv.g = pv(this.g), vv.b = pv(this.b)), vv.a = this.a, this
      }
      toGammaSpace() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zv = new Wv;
        return this.toGammaSpaceToRef(zv, vv), zv
      }
      toGammaSpaceToRef(vv) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (vv.r = lv(this.r), vv.g = lv(this.g), vv.b = lv(this.b)) : (vv.r = Nv(this.r), vv.g = Nv(this.g), vv.b = Nv(this.b)), vv.a = this.a, this
      }
      static FromHexString(vv) {
        return "#" !== vv.substring(0, 1) || 9 !== vv.length && 7 !== vv.length ? new Wv(0, 0, 0, 0) : new Wv(0, 0, 0, 1).fromHexString(vv)
      }
      static Lerp(vv, zv, Pv) {
        return Wv.LerpToRef(vv, zv, Pv, new Wv)
      }
      static LerpToRef(vv, zv, Pv, hv) {
        return hv.r = vv.r + (zv.r - vv.r) * Pv, hv.g = vv.g + (zv.g - vv.g) * Pv, hv.b = vv.b + (zv.b - vv.b) * Pv, hv.a = vv.a + (zv.a - vv.a) * Pv, hv
      }
      static Hermite(vv, zv, Pv, hv, Sv) {
        const ev = Sv * Sv,
          gv = Sv * ev,
          pv = 2 * gv - 3 * ev + 1,
          dv = -2 * gv + 3 * ev,
          Nv = gv - 2 * ev + Sv,
          lv = gv - ev,
          Tv = vv.r * pv + Pv.r * dv + zv.r * Nv + hv.r * lv,
          wv = vv.g * pv + Pv.g * dv + zv.g * Nv + hv.g * lv,
          av = vv.b * pv + Pv.b * dv + zv.b * Nv + hv.b * lv,
          sv = vv.a * pv + Pv.a * dv + zv.a * Nv + hv.a * lv;
        return new Wv(Tv, wv, av, sv)
      }
      static Hermite1stDerivative(vv, zv, Pv, hv, Sv) {
        const ev = new Wv;
        return this.Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev), ev
      }
      static Hermite1stDerivativeToRef(vv, zv, Pv, hv, Sv, ev) {
        const gv = Sv * Sv;
        ev.r = 6 * (gv - Sv) * vv.r + (3 * gv - 4 * Sv + 1) * zv.r + 6 * (-gv + Sv) * Pv.r + (3 * gv - 2 * Sv) * hv.r, ev.g = 6 * (gv - Sv) * vv.g + (3 * gv - 4 * Sv + 1) * zv.g + 6 * (-gv + Sv) * Pv.g + (3 * gv - 2 * Sv) * hv.g, ev.b = 6 * (gv - Sv) * vv.b + (3 * gv - 4 * Sv + 1) * zv.b + 6 * (-gv + Sv) * Pv.b + (3 * gv - 2 * Sv) * hv.b, ev.a = 6 * (gv - Sv) * vv.a + (3 * gv - 4 * Sv + 1) * zv.a + 6 * (-gv + Sv) * Pv.a + (3 * gv - 2 * Sv) * hv.a
      }
      static FromColor3(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Wv(vv.r, vv.g, vv.b, zv)
      }
      static FromArray(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Wv(vv[zv], vv[zv + 1], vv[zv + 2], vv[zv + 3])
      }
      static FromArrayToRef(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        Pv.r = vv[zv], Pv.g = vv[zv + 1], Pv.b = vv[zv + 2], Pv.a = vv[zv + 3]
      }
      static FromInts(vv, zv, Pv, hv) {
        return new Wv(vv / 255, zv / 255, Pv / 255, hv / 255)
      }
      static CheckColors4(vv, zv) {
        if (vv.length === 3 * zv) {
          const zv = [];
          for (let Pv = 0; Pv < vv.length; Pv += 3) {
            const hv = Pv / 3 * 4;
            zv[hv] = vv[Pv], zv[hv + 1] = vv[Pv + 1], zv[hv + 2] = vv[Pv + 2], zv[hv + 3] = 1
          }
          return zv
        }
        return vv
      }
    }
    Wv._V8PerformanceHack = new Wv(.5, .5, .5, .5);
    class wv {}
    wv.Color3 = (0, hv.e)(3, Tv.Black), wv.Color4 = (0, hv.e)(3, (() => new Wv(0, 0, 0, 0)));
    let av = !1;

    function sv() {
      av || (av = !0, Object.defineProperties(Tv.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Wv.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, gv.c)("BABYLON.Color3", Tv), (0, gv.c)("BABYLON.Color4", Wv))
    }
  },
  36599: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => ev,
      g: () => hv,
      h: () => Sv
    });
    const hv = 1 / 2.2,
      Sv = 2.2;
    Math.sqrt(5);
    let ev = .001
  },
  36620: (vv, zv, Pv) => {
    function hv(vv) {
      return parseInt(vv.toString().replace(/\W/g, ""))
    }

    function Sv(vv, zv) {
      let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(vv - zv) <= Pv
    }

    function ev(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return vv < zv - hv || vv > Pv + hv
    }

    function gv(vv, zv) {
      return vv === zv ? vv : Math.random() * (zv - vv) + vv
    }

    function pv(vv, zv, Pv) {
      return vv + (zv - vv) * Pv
    }

    function dv(vv, zv, Pv) {
      let hv = Cv(zv - vv, 360);
      return hv > 180 && (hv -= 360), vv + hv * Wv(Pv)
    }

    function Nv(vv, zv, Pv) {
      let hv;
      return hv = vv != zv ? Wv((Pv - vv) / (zv - vv)) : 0, hv
    }

    function lv(vv, zv, Pv, hv, Sv) {
      const ev = Sv * Sv,
        gv = Sv * ev;
      return vv * (2 * gv - 3 * ev + 1) + Pv * (-2 * gv + 3 * ev) + zv * (gv - 2 * ev + Sv) + hv * (gv - ev)
    }

    function Tv(vv, zv, Pv, hv, Sv) {
      const ev = Sv * Sv;
      return 6 * (ev - Sv) * vv + (3 * ev - 4 * Sv + 1) * zv + 6 * (-ev + Sv) * Pv + (3 * ev - 2 * Sv) * hv
    }

    function Wv(vv) {
      let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Pv, Math.max(zv, vv))
    }

    function wv(vv) {
      return vv -= 2 * Math.PI * Math.floor((vv + Math.PI) / (2 * Math.PI))
    }

    function av(vv) {
      const zv = vv.toString(16);
      return vv <= 15 ? ("0" + zv).toUpperCase() : zv.toUpperCase()
    }

    function sv(vv) {
      if (Math.log2) return Math.floor(Math.log2(vv));
      if (vv < 0) return NaN;
      if (0 === vv) return -1 / 0;
      let zv = 0;
      if (vv < 1) {
        for (; vv < 1;) zv++, vv *= 2;
        zv = -zv
      } else if (vv > 1)
        for (; vv > 1;) zv++, vv = Math.floor(vv / 2);
      return zv
    }

    function Cv(vv, zv) {
      return vv - Math.floor(vv / zv) * zv
    }

    function iv(vv, zv, Pv) {
      return (vv - zv) / (Pv - zv)
    }

    function cv(vv, zv, Pv) {
      return vv * (Pv - zv) + zv
    }

    function Gv(vv, zv) {
      let Pv = Cv(zv - vv, 360);
      return Pv > 180 && (Pv -= 360), Pv
    }

    function mv(vv, zv) {
      const Pv = Cv(vv, 2 * zv);
      return zv - Math.abs(Pv - zv)
    }

    function jv(vv, zv, Pv) {
      let hv = Wv(Pv);
      return hv = -2 * hv * hv * hv + 3 * hv * hv, zv * hv + vv * (1 - hv)
    }

    function fv(vv, zv, Pv) {
      let hv;
      return hv = Math.abs(zv - vv) <= Pv ? zv : vv + Math.sign(zv - vv) * Pv, hv
    }

    function Fv(vv, zv, Pv) {
      const hv = Gv(vv, zv);
      let Sv;
      return Sv = -Pv < hv && hv < Pv ? zv : fv(vv, zv = vv + hv, Pv), Sv
    }

    function Yv(vv, zv, Pv) {
      return (vv - zv) / (Pv - zv)
    }

    function nv(vv, zv, Pv) {
      return (Pv - zv) * vv + zv
    }

    function Ov(vv, zv) {
      const Pv = vv % zv;
      return 0 === Pv ? zv : Ov(zv, Pv)
    }
    Pv.r(zv), Pv.d(zv, {
      Clamp: () => Wv,
      DeltaAngle: () => Gv,
      Denormalize: () => cv,
      ExtractAsInt: () => hv,
      Hermite: () => lv,
      Hermite1stDerivative: () => Tv,
      HighestCommonFactor: () => Ov,
      ILog2: () => sv,
      InverseLerp: () => Nv,
      Lerp: () => pv,
      LerpAngle: () => dv,
      MoveTowards: () => fv,
      MoveTowardsAngle: () => Fv,
      Normalize: () => iv,
      NormalizeRadians: () => wv,
      OutsideRange: () => ev,
      PercentToRange: () => nv,
      PingPong: () => mv,
      RandomRange: () => gv,
      RangeToPercent: () => Yv,
      Repeat: () => Cv,
      SmoothStep: () => jv,
      ToHex: () => av,
      WithinEpsilon: () => Sv
    })
  },
  36602: (vv, zv, Pv) => {
    function hv(vv, zv) {
      const Pv = [];
      for (let hv = 0; hv < vv; ++hv) Pv.push(zv());
      return Pv
    }

    function Sv(vv, zv) {
      return hv(vv, zv)
    }
    Pv.d(zv, {
      e: () => hv,
      h: () => Sv,
      i: () => gv
    });
    const ev = ["push", "splice", "pop", "shift", "unshift"];

    function gv(vv, zv) {
      const Pv = ev.map((Pv => function(vv, zv, Pv) {
        const hv = vv[zv];
        if ("function" !== typeof hv) return null;
        const Sv = function() {
          const hv = vv.length,
            ev = Sv.previous.apply(vv, arguments);
          return Pv(zv, hv), ev
        };
        return hv.next = Sv, Sv.previous = hv, vv[zv] = Sv, () => {
          const Pv = Sv.previous;
          if (!Pv) return;
          const hv = Sv.next;
          hv ? (Pv.next = hv, hv.previous = Pv) : (Pv.next = void 0, vv[zv] = Pv), Sv.next = void 0, Sv.previous = void 0
        }
      }(vv, Pv, zv)));
      return () => {
        for (const vv of Pv) vv?.()
      }
    }
  },
  36631: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => Sv
    });
    const hv = {};

    function Sv(vv, zv) {
      hv[vv] = zv
    }

    function ev(vv) {
      return hv[vv]
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);