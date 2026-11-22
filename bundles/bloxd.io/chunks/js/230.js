export const id = 230;
export const ids = [230];
export const modules = {
  36874: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Kk,
      f: () => xk,
      h: () => Hk,
      k: () => nk
    });
    var Dk = ik(36707),
      fk = ik(36703),
      Sk = ik(36729),
      bk = ik(36734);

    function rk(kk) {
      return Math.pow(kk, fk.i)
    }

    function Pk(kk) {
      return kk <= .04045 ? .0773993808 * kk : Math.pow(.947867299 * (kk + .055), 2.4)
    }

    function mk(kk) {
      return Math.pow(kk, fk.e)
    }

    function Mk(kk) {
      return kk <= .0031308 ? 12.92 * kk : 1.055 * Math.pow(kk, .41666) - .055
    }
    class Kk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = kk, this.g = ek, this.b = ik
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let kk = 255 * this.r | 0;
        return kk = 397 * kk ^ 255 * this.g, kk = 397 * kk ^ 255 * this.b, kk
      }
      toArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[ek] = this.r, kk[ek + 1] = this.g, kk[ek + 2] = this.b, this
      }
      zek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Kk.FromArrayToRef(kk, ek, this), this
      }
      toColor4() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new xk(this.r, this.g, this.b, kk)
      }
      Tik() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(kk) {
        return new Kk(this.r * kk.r, this.g * kk.g, this.b * kk.b)
      }
      multiplyToRef(kk, ek) {
        return ek.r = this.r * kk.r, ek.g = this.g * kk.g, ek.b = this.b * kk.b, ek
      }
      multiplyInPlace(kk) {
        return this.r *= kk.r, this.g *= kk.g, this.b *= kk.b, this
      }
      multiplyByFloats(kk, ek, ik) {
        return new Kk(this.r * kk, this.g * ek, this.b * ik)
      }
      divide(kk) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(kk, ek) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(kk) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(kk) {
        return this.minimizeInPlaceFromFloats(kk.r, kk.g, kk.b)
      }
      maximizeInPlace(kk) {
        return this.maximizeInPlaceFromFloats(kk.r, kk.g, kk.b)
      }
      minimizeInPlaceFromFloats(kk, ek, ik) {
        return this.r = Math.min(kk, this.r), this.g = Math.min(ek, this.g), this.b = Math.min(ik, this.b), this
      }
      maximizeInPlaceFromFloats(kk, ek, ik) {
        return this.r = Math.max(kk, this.r), this.g = Math.max(ek, this.g), this.b = Math.max(ik, this.b), this
      }
      floorToRef(kk) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(kk) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(kk) {
        return kk && this.r === kk.r && this.g === kk.g && this.b === kk.b
      }
      equalsFloats(kk, ek, ik) {
        return this.Hbk(kk, ek, ik)
      }
      Hbk(kk, ek, ik) {
        return this.r === kk && this.g === ek && this.b === ik
      }
      equalsWithEpsilon(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk.d;
        return (0, Sk.WithinEpsilon)(this.r, kk.r, ek) && (0, Sk.WithinEpsilon)(this.g, kk.g, ek) && (0, Sk.WithinEpsilon)(this.b, kk.b, ek)
      }
      ge() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(kk) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(kk) {
        return new Kk(this.r * kk, this.g * kk, this.b * kk)
      }
      scaleInPlace(kk) {
        return this.r *= kk, this.g *= kk, this.b *= kk, this
      }
      scaleToRef(kk, ek) {
        return ek.r = this.r * kk, ek.g = this.g * kk, ek.b = this.b * kk, ek
      }
      scaleAndAddToRef(kk, ek) {
        return ek.r += this.r * kk, ek.g += this.g * kk, ek.b += this.b * kk, ek
      }
      clampToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        return ik.r = (0, Sk.Clamp)(this.r, kk, ek), ik.g = (0, Sk.Clamp)(this.g, kk, ek), ik.b = (0, Sk.Clamp)(this.b, kk, ek), ik
      }
      add(kk) {
        return new Kk(this.r + kk.r, this.g + kk.g, this.b + kk.b)
      }
      addInPlace(kk) {
        return this.r += kk.r, this.g += kk.g, this.b += kk.b, this
      }
      addInPlaceFromFloats(kk, ek, ik) {
        return this.r += kk, this.g += ek, this.b += ik, this
      }
      addToRef(kk, ek) {
        return ek.r = this.r + kk.r, ek.g = this.g + kk.g, ek.b = this.b + kk.b, ek
      }
      subtract(kk) {
        return new Kk(this.r - kk.r, this.g - kk.g, this.b - kk.b)
      }
      subtractToRef(kk, ek) {
        return ek.r = this.r - kk.r, ek.g = this.g - kk.g, ek.b = this.b - kk.b, ek
      }
      KDk(kk) {
        return this.r -= kk.r, this.g -= kk.g, this.b -= kk.b, this
      }
      subtractFromFloats(kk, ek, ik) {
        return new Kk(this.r - kk, this.g - ek, this.b - ik)
      }
      subtractFromFloatsToRef(kk, ek, ik, Dk) {
        return Dk.r = this.r - kk, Dk.g = this.g - ek, Dk.b = this.b - ik, Dk
      }
      clone() {
        return new Kk(this.r, this.g, this.b)
      }
      Fs(kk) {
        return this.r = kk.r, this.g = kk.g, this.b = kk.b, this
      }
      Z6(kk, ek, ik) {
        return this.r = kk, this.g = ek, this.b = ik, this
      }
      set(kk, ek, ik) {
        return this.Z6(kk, ek, ik)
      }
      A_(kk) {
        return this.r = this.g = this.b = kk, this
      }
      toHexString() {
        const kk = Math.round(255 * this.r),
          ek = Math.round(255 * this.g),
          ik = Math.round(255 * this.b);
        return "#" + (0, Sk.ToHex)(kk) + (0, Sk.ToHex)(ek) + (0, Sk.ToHex)(ik)
      }
      fromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 7 !== kk.length || (this.r = parseInt(kk.substring(1, 3), 16) / 255, this.g = parseInt(kk.substring(3, 5), 16) / 255, this.b = parseInt(kk.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Kk)
      }
      toHSVToRef(kk) {
        const ek = this.r,
          ik = this.g,
          Dk = this.b,
          fk = Math.max(ek, ik, Dk),
          Sk = Math.min(ek, ik, Dk);
        let bk = 0,
          rk = 0;
        const Pk = fk,
          mk = fk - Sk;
        return 0 !== fk && (rk = mk / fk), fk != Sk && (fk == ek ? (bk = (ik - Dk) / mk, ik < Dk && (bk += 6)) : fk == ik ? bk = (Dk - ek) / mk + 2 : fk == Dk && (bk = (ek - ik) / mk + 4), bk *= 60), kk.r = bk, kk.g = rk, kk.b = Pk, kk
      }
      toLinearSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = new Kk;
        return this.toLinearSpaceToRef(ek, kk), ek
      }
      toLinearSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Pk(this.r), kk.g = Pk(this.g), kk.b = Pk(this.b)) : (kk.r = rk(this.r), kk.g = rk(this.g), kk.b = rk(this.b)), this
      }
      toGammaSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = new Kk;
        return this.toGammaSpaceToRef(ek, kk), ek
      }
      toGammaSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Mk(this.r), kk.g = Mk(this.g), kk.b = Mk(this.b)) : (kk.r = mk(this.r), kk.g = mk(this.g), kk.b = mk(this.b)), this
      }
      static HSVtoRGBToRef(kk, ek, ik, Dk) {
        const fk = ik * ek,
          Sk = kk / 60,
          bk = fk * (1 - Math.abs(Sk % 2 - 1));
        let rk = 0,
          Pk = 0,
          mk = 0;
        Sk >= 0 && Sk <= 1 ? (rk = fk, Pk = bk) : Sk >= 1 && Sk <= 2 ? (rk = bk, Pk = fk) : Sk >= 2 && Sk <= 3 ? (Pk = fk, mk = bk) : Sk >= 3 && Sk <= 4 ? (Pk = bk, mk = fk) : Sk >= 4 && Sk <= 5 ? (rk = bk, mk = fk) : Sk >= 5 && Sk <= 6 && (rk = fk, mk = bk);
        const Mk = ik - fk;
        return Dk.r = rk + Mk, Dk.g = Pk + Mk, Dk.b = mk + Mk, Dk
      }
      static FromHSV(kk, ek, ik) {
        const Dk = new Kk(0, 0, 0);
        return Kk.HSVtoRGBToRef(kk, ek, ik, Dk), Dk
      }
      static FromHexString(kk) {
        return new Kk(0, 0, 0).fromHexString(kk)
      }
      static FromArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Kk(kk[ek], kk[ek + 1], kk[ek + 2])
      }
      static FromArrayToRef(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        ik.r = kk[ek], ik.g = kk[ek + 1], ik.b = kk[ek + 2]
      }
      static FromInts(kk, ek, ik) {
        return new Kk(kk / 255, ek / 255, ik / 255)
      }
      static Lerp(kk, ek, ik) {
        const Dk = new Kk(0, 0, 0);
        return Kk.LerpToRef(kk, ek, ik, Dk), Dk
      }
      static LerpToRef(kk, ek, ik, Dk) {
        Dk.r = kk.r + (ek.r - kk.r) * ik, Dk.g = kk.g + (ek.g - kk.g) * ik, Dk.b = kk.b + (ek.b - kk.b) * ik
      }
      static Hermite(kk, ek, ik, Dk, fk) {
        const Sk = fk * fk,
          bk = fk * Sk,
          rk = 2 * bk - 3 * Sk + 1,
          Pk = -2 * bk + 3 * Sk,
          mk = bk - 2 * Sk + fk,
          Mk = bk - Sk,
          xk = kk.r * rk + ik.r * Pk + ek.r * mk + Dk.r * Mk,
          nk = kk.g * rk + ik.g * Pk + ek.g * mk + Dk.g * Mk,
          Uk = kk.b * rk + ik.b * Pk + ek.b * mk + Dk.b * Mk;
        return new Kk(xk, nk, Uk)
      }
      static Hermite1stDerivative(kk, ek, ik, Dk, fk) {
        const Sk = Kk.Black();
        return this.Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk), Sk
      }
      static Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk) {
        const bk = fk * fk;
        Sk.r = 6 * (bk - fk) * kk.r + (3 * bk - 4 * fk + 1) * ek.r + 6 * (-bk + fk) * ik.r + (3 * bk - 2 * fk) * Dk.r, Sk.g = 6 * (bk - fk) * kk.g + (3 * bk - 4 * fk + 1) * ek.g + 6 * (-bk + fk) * ik.g + (3 * bk - 2 * fk) * Dk.g, Sk.b = 6 * (bk - fk) * kk.b + (3 * bk - 4 * fk + 1) * ek.b + 6 * (-bk + fk) * ik.b + (3 * bk - 2 * fk) * Dk.b
      }
      static Red() {
        return new Kk(1, 0, 0)
      }
      static Green() {
        return new Kk(0, 1, 0)
      }
      static Blue() {
        return new Kk(0, 0, 1)
      }
      static Black() {
        return new Kk(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Kk._BlackReadOnly
      }
      static White() {
        return new Kk(1, 1, 1)
      }
      static Purple() {
        return new Kk(.5, 0, .5)
      }
      static Magenta() {
        return new Kk(1, 0, 1)
      }
      static Yellow() {
        return new Kk(1, 1, 0)
      }
      static Gray() {
        return new Kk(.5, .5, .5)
      }
      static Teal() {
        return new Kk(0, 1, 1)
      }
      static Random() {
        return new Kk(Math.random(), Math.random(), Math.random())
      }
    }
    Kk._V8PerformanceHack = new Kk(.5, .5, .5), Kk._BlackReadOnly = Kk.Black();
    class xk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = kk, this.g = ek, this.b = ik, this.a = Dk
      }
      Tik() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[ek] = this.r, kk[ek + 1] = this.g, kk[ek + 2] = this.b, kk[ek + 3] = this.a, this
      }
      zek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = kk[ek], this.g = kk[ek + 1], this.b = kk[ek + 2], this.a = kk[ek + 3], this
      }
      equals(kk) {
        return kk && this.r === kk.r && this.g === kk.g && this.b === kk.b && this.a === kk.a
      }
      add(kk) {
        return new xk(this.r + kk.r, this.g + kk.g, this.b + kk.b, this.a + kk.a)
      }
      addToRef(kk, ek) {
        return ek.r = this.r + kk.r, ek.g = this.g + kk.g, ek.b = this.b + kk.b, ek.a = this.a + kk.a, ek
      }
      addInPlace(kk) {
        return this.r += kk.r, this.g += kk.g, this.b += kk.b, this.a += kk.a, this
      }
      addInPlaceFromFloats(kk, ek, ik, Dk) {
        return this.r += kk, this.g += ek, this.b += ik, this.a += Dk, this
      }
      subtract(kk) {
        return new xk(this.r - kk.r, this.g - kk.g, this.b - kk.b, this.a - kk.a)
      }
      subtractToRef(kk, ek) {
        return ek.r = this.r - kk.r, ek.g = this.g - kk.g, ek.b = this.b - kk.b, ek.a = this.a - kk.a, ek
      }
      KDk(kk) {
        return this.r -= kk.r, this.g -= kk.g, this.b -= kk.b, this.a -= kk.a, this
      }
      subtractFromFloats(kk, ek, ik, Dk) {
        return new xk(this.r - kk, this.g - ek, this.b - ik, this.a - Dk)
      }
      subtractFromFloatsToRef(kk, ek, ik, Dk, fk) {
        return fk.r = this.r - kk, fk.g = this.g - ek, fk.b = this.b - ik, fk.a = this.a - Dk, fk
      }
      scale(kk) {
        return new xk(this.r * kk, this.g * kk, this.b * kk, this.a * kk)
      }
      scaleInPlace(kk) {
        return this.r *= kk, this.g *= kk, this.b *= kk, this.a *= kk, this
      }
      scaleToRef(kk, ek) {
        return ek.r = this.r * kk, ek.g = this.g * kk, ek.b = this.b * kk, ek.a = this.a * kk, ek
      }
      scaleAndAddToRef(kk, ek) {
        return ek.r += this.r * kk, ek.g += this.g * kk, ek.b += this.b * kk, ek.a += this.a * kk, ek
      }
      clampToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        return ik.r = (0, Sk.Clamp)(this.r, kk, ek), ik.g = (0, Sk.Clamp)(this.g, kk, ek), ik.b = (0, Sk.Clamp)(this.b, kk, ek), ik.a = (0, Sk.Clamp)(this.a, kk, ek), ik
      }
      multiply(kk) {
        return new xk(this.r * kk.r, this.g * kk.g, this.b * kk.b, this.a * kk.a)
      }
      multiplyToRef(kk, ek) {
        return ek.r = this.r * kk.r, ek.g = this.g * kk.g, ek.b = this.b * kk.b, ek.a = this.a * kk.a, ek
      }
      multiplyInPlace(kk) {
        return this.r *= kk.r, this.g *= kk.g, this.b *= kk.b, this.a *= kk.a, this
      }
      multiplyByFloats(kk, ek, ik, Dk) {
        return new xk(this.r * kk, this.g * ek, this.b * ik, this.a * Dk)
      }
      divide(kk) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(kk, ek) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(kk) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(kk) {
        return this.r = Math.min(this.r, kk.r), this.g = Math.min(this.g, kk.g), this.b = Math.min(this.b, kk.b), this.a = Math.min(this.a, kk.a), this
      }
      maximizeInPlace(kk) {
        return this.r = Math.max(this.r, kk.r), this.g = Math.max(this.g, kk.g), this.b = Math.max(this.b, kk.b), this.a = Math.max(this.a, kk.a), this
      }
      minimizeInPlaceFromFloats(kk, ek, ik, Dk) {
        return this.r = Math.min(kk, this.r), this.g = Math.min(ek, this.g), this.b = Math.min(ik, this.b), this.a = Math.min(Dk, this.a), this
      }
      maximizeInPlaceFromFloats(kk, ek, ik, Dk) {
        return this.r = Math.max(kk, this.r), this.g = Math.max(ek, this.g), this.b = Math.max(ik, this.b), this.a = Math.max(Dk, this.a), this
      }
      floorToRef(kk) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(kk) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      ge() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(kk) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fk.d;
        return (0, Sk.WithinEpsilon)(this.r, kk.r, ek) && (0, Sk.WithinEpsilon)(this.g, kk.g, ek) && (0, Sk.WithinEpsilon)(this.b, kk.b, ek) && (0, Sk.WithinEpsilon)(this.a, kk.a, ek)
      }
      Hbk(kk, ek, ik, Dk) {
        return this.r === kk && this.g === ek && this.b === ik && this.a === Dk
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let kk = 255 * this.r | 0;
        return kk = 397 * kk ^ 255 * this.g, kk = 397 * kk ^ 255 * this.b, kk = 397 * kk ^ 255 * this.a, kk
      }
      clone() {
        return (new xk).Fs(this)
      }
      Fs(kk) {
        return this.r = kk.r, this.g = kk.g, this.b = kk.b, this.a = kk.a, this
      }
      Z6(kk, ek, ik, Dk) {
        return this.r = kk, this.g = ek, this.b = ik, this.a = Dk, this
      }
      set(kk, ek, ik, Dk) {
        return this.Z6(kk, ek, ik, Dk)
      }
      A_(kk) {
        return this.r = this.g = this.b = this.a = kk, this
      }
      toHexString() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = Math.round(255 * this.r),
          ik = Math.round(255 * this.g),
          Dk = Math.round(255 * this.b);
        if (kk) return "#" + (0, Sk.ToHex)(ek) + (0, Sk.ToHex)(ik) + (0, Sk.ToHex)(Dk);
        const fk = Math.round(255 * this.a);
        return "#" + (0, Sk.ToHex)(ek) + (0, Sk.ToHex)(ik) + (0, Sk.ToHex)(Dk) + (0, Sk.ToHex)(fk)
      }
      fromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 9 !== kk.length && 7 !== kk.length || (this.r = parseInt(kk.substring(1, 3), 16) / 255, this.g = parseInt(kk.substring(3, 5), 16) / 255, this.b = parseInt(kk.substring(5, 7), 16) / 255, 9 === kk.length && (this.a = parseInt(kk.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = new xk;
        return this.toLinearSpaceToRef(ek, kk), ek
      }
      toLinearSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Pk(this.r), kk.g = Pk(this.g), kk.b = Pk(this.b)) : (kk.r = rk(this.r), kk.g = rk(this.g), kk.b = rk(this.b)), kk.a = this.a, this
      }
      toGammaSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ek = new xk;
        return this.toGammaSpaceToRef(ek, kk), ek
      }
      toGammaSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Mk(this.r), kk.g = Mk(this.g), kk.b = Mk(this.b)) : (kk.r = mk(this.r), kk.g = mk(this.g), kk.b = mk(this.b)), kk.a = this.a, this
      }
      static FromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 9 !== kk.length && 7 !== kk.length ? new xk(0, 0, 0, 0) : new xk(0, 0, 0, 1).fromHexString(kk)
      }
      static Lerp(kk, ek, ik) {
        return xk.LerpToRef(kk, ek, ik, new xk)
      }
      static LerpToRef(kk, ek, ik, Dk) {
        return Dk.r = kk.r + (ek.r - kk.r) * ik, Dk.g = kk.g + (ek.g - kk.g) * ik, Dk.b = kk.b + (ek.b - kk.b) * ik, Dk.a = kk.a + (ek.a - kk.a) * ik, Dk
      }
      static Hermite(kk, ek, ik, Dk, fk) {
        const Sk = fk * fk,
          bk = fk * Sk,
          rk = 2 * bk - 3 * Sk + 1,
          Pk = -2 * bk + 3 * Sk,
          mk = bk - 2 * Sk + fk,
          Mk = bk - Sk,
          Kk = kk.r * rk + ik.r * Pk + ek.r * mk + Dk.r * Mk,
          nk = kk.g * rk + ik.g * Pk + ek.g * mk + Dk.g * Mk,
          Uk = kk.b * rk + ik.b * Pk + ek.b * mk + Dk.b * Mk,
          Hk = kk.a * rk + ik.a * Pk + ek.a * mk + Dk.a * Mk;
        return new xk(Kk, nk, Uk, Hk)
      }
      static Hermite1stDerivative(kk, ek, ik, Dk, fk) {
        const Sk = new xk;
        return this.Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk), Sk
      }
      static Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk) {
        const bk = fk * fk;
        Sk.r = 6 * (bk - fk) * kk.r + (3 * bk - 4 * fk + 1) * ek.r + 6 * (-bk + fk) * ik.r + (3 * bk - 2 * fk) * Dk.r, Sk.g = 6 * (bk - fk) * kk.g + (3 * bk - 4 * fk + 1) * ek.g + 6 * (-bk + fk) * ik.g + (3 * bk - 2 * fk) * Dk.g, Sk.b = 6 * (bk - fk) * kk.b + (3 * bk - 4 * fk + 1) * ek.b + 6 * (-bk + fk) * ik.b + (3 * bk - 2 * fk) * Dk.b, Sk.a = 6 * (bk - fk) * kk.a + (3 * bk - 4 * fk + 1) * ek.a + 6 * (-bk + fk) * ik.a + (3 * bk - 2 * fk) * Dk.a
      }
      static FromColor3(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new xk(kk.r, kk.g, kk.b, ek)
      }
      static FromArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new xk(kk[ek], kk[ek + 1], kk[ek + 2], kk[ek + 3])
      }
      static FromArrayToRef(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        ik.r = kk[ek], ik.g = kk[ek + 1], ik.b = kk[ek + 2], ik.a = kk[ek + 3]
      }
      static FromInts(kk, ek, ik, Dk) {
        return new xk(kk / 255, ek / 255, ik / 255, Dk / 255)
      }
      static CheckColors4(kk, ek) {
        if (kk.length === 3 * ek) {
          const ek = [];
          for (let ik = 0; ik < kk.length; ik += 3) {
            const Dk = ik / 3 * 4;
            ek[Dk] = kk[ik], ek[Dk + 1] = kk[ik + 1], ek[Dk + 2] = kk[ik + 2], ek[Dk + 3] = 1
          }
          return ek
        }
        return kk
      }
    }
    xk._V8PerformanceHack = new xk(.5, .5, .5, .5);
    class nk {}
    nk.Color3 = (0, Dk.c)(3, Kk.Black), nk.Color4 = (0, Dk.c)(3, (() => new xk(0, 0, 0, 0)));
    let Uk = !1;

    function Hk() {
      Uk || (Uk = !0, Object.defineProperties(Kk.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(xk.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, bk.h)("BABYLON.Color3", Kk), (0, bk.h)("BABYLON.Color4", xk))
    }
  },
  36703: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      e: () => Dk,
      i: () => fk
    });
    const Dk = 1 / 2.2,
      fk = 2.2;
    Math.sqrt(5);
    let Sk = .001
  },
  36729: (kk, ek, ik) => {
    function Dk(kk) {
      return parseInt(kk.toString().replace(/\W/g, ""))
    }

    function fk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(kk - ek) <= ik
    }

    function Sk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return kk < ek - Dk || kk > ik + Dk
    }

    function bk(kk, ek) {
      return kk === ek ? kk : Math.random() * (ek - kk) + kk
    }

    function rk(kk, ek, ik) {
      return kk + (ek - kk) * ik
    }

    function Pk(kk, ek, ik) {
      let Dk = wk(ek - kk, 360);
      return Dk > 180 && (Dk -= 360), kk + Dk * xk(ik)
    }

    function mk(kk, ek, ik) {
      let Dk;
      return Dk = kk != ek ? xk((ik - kk) / (ek - kk)) : 0, Dk
    }

    function Mk(kk, ek, ik, Dk, fk) {
      const Sk = fk * fk,
        bk = fk * Sk;
      return kk * (2 * bk - 3 * Sk + 1) + ik * (-2 * bk + 3 * Sk) + ek * (bk - 2 * Sk + fk) + Dk * (bk - Sk)
    }

    function Kk(kk, ek, ik, Dk, fk) {
      const Sk = fk * fk;
      return 6 * (Sk - fk) * kk + (3 * Sk - 4 * fk + 1) * ek + 6 * (-Sk + fk) * ik + (3 * Sk - 2 * fk) * Dk
    }

    function xk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ik, Math.max(ek, kk))
    }

    function nk(kk) {
      return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
    }

    function Uk(kk) {
      const ek = kk.toString(16);
      return kk <= 15 ? ("0" + ek).toUpperCase() : ek.toUpperCase()
    }

    function Hk(kk) {
      if (Math.log2) return Math.floor(Math.log2(kk));
      if (kk < 0) return NaN;
      if (0 === kk) return -1 / 0;
      let ek = 0;
      if (kk < 1) {
        for (; kk < 1;) ek++, kk *= 2;
        ek = -ek
      } else if (kk > 1)
        for (; kk > 1;) ek++, kk = Math.floor(kk / 2);
      return ek
    }

    function wk(kk, ek) {
      return kk - Math.floor(kk / ek) * ek
    }

    function lk(kk, ek, ik) {
      return (kk - ek) / (ik - ek)
    }

    function pk(kk, ek, ik) {
      return kk * (ik - ek) + ek
    }

    function yk(kk, ek) {
      let ik = wk(ek - kk, 360);
      return ik > 180 && (ik -= 360), ik
    }

    function Yk(kk, ek) {
      const ik = wk(kk, 2 * ek);
      return ek - Math.abs(ik - ek)
    }

    function Lk(kk, ek, ik) {
      let Dk = xk(ik);
      return Dk = -2 * Dk * Dk * Dk + 3 * Dk * Dk, ek * Dk + kk * (1 - Dk)
    }

    function Ck(kk, ek, ik) {
      let Dk;
      return Dk = Math.abs(ek - kk) <= ik ? ek : kk + Math.sign(ek - kk) * ik, Dk
    }

    function Ak(kk, ek, ik) {
      const Dk = yk(kk, ek);
      let fk;
      return fk = -ik < Dk && Dk < ik ? ek : Ck(kk, ek = kk + Dk, ik), fk
    }

    function jk(kk, ek, ik) {
      return (kk - ek) / (ik - ek)
    }

    function sk(kk, ek, ik) {
      return (ik - ek) * kk + ek
    }

    function dk(kk, ek) {
      const ik = kk % ek;
      return 0 === ik ? ek : dk(ek, ik)
    }
    ik.r(ek), ik.d(ek, {
      Clamp: () => xk,
      DeltaAngle: () => yk,
      Denormalize: () => pk,
      ExtractAsInt: () => Dk,
      Hermite: () => Mk,
      Hermite1stDerivative: () => Kk,
      HighestCommonFactor: () => dk,
      ILog2: () => Hk,
      InverseLerp: () => mk,
      Lerp: () => rk,
      LerpAngle: () => Pk,
      MoveTowards: () => Ck,
      MoveTowardsAngle: () => Ak,
      Normalize: () => lk,
      NormalizeRadians: () => nk,
      OutsideRange: () => Sk,
      PercentToRange: () => sk,
      PingPong: () => Yk,
      RandomRange: () => bk,
      RangeToPercent: () => jk,
      Repeat: () => wk,
      SmoothStep: () => Lk,
      ToHex: () => Uk,
      WithinEpsilon: () => fk
    })
  },
  36707: (kk, ek, ik) => {
    function Dk(kk, ek) {
      const ik = [];
      for (let Dk = 0; Dk < kk; ++Dk) ik.push(ek());
      return ik
    }

    function fk(kk, ek) {
      return Dk(kk, ek)
    }
    ik.d(ek, {
      c: () => Dk,
      e: () => fk,
      h: () => bk
    });
    const Sk = ["push", "splice", "pop", "shift", "unshift"];

    function bk(kk, ek) {
      const ik = Sk.map((ik => function(kk, ek, ik) {
        const Dk = kk[ek];
        if ("function" !== typeof Dk) return null;
        const fk = function() {
          const Dk = kk.length,
            Sk = fk.previous.apply(kk, arguments);
          return ik(ek, Dk), Sk
        };
        return Dk.next = fk, fk.previous = Dk, kk[ek] = fk, () => {
          const ik = fk.previous;
          if (!ik) return;
          const Dk = fk.next;
          Dk ? (ik.next = Dk, Dk.previous = ik) : (ik.next = void 0, kk[ek] = ik), fk.next = void 0, fk.previous = void 0
        }
      }(kk, ik, ek)));
      return () => {
        for (const kk of ik) kk?.()
      }
    }
  },
  36734: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      h: () => fk
    });
    const Dk = {};

    function fk(kk, ek) {
      Dk[kk] = ek
    }

    function Sk(kk) {
      return Dk[kk]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);