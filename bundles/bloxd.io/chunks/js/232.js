export const id = 232;
export const ids = [232];
export const modules = {
  37331: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => tk,
      h: () => Zk,
      i: () => wk,
      k: () => jk
    });
    var Xk = Ik(37166),
      Tk = Ik(37158),
      ik = Ik(37189),
      yk = Ik(37201);

    function lk(kk) {
      return Math.pow(kk, Tk.g)
    }

    function ak(kk) {
      return kk <= .04045 ? .0773993808 * kk : Math.pow(.947867299 * (kk + .055), 2.4)
    }

    function qk(kk) {
      return Math.pow(kk, Tk.d)
    }

    function Lk(kk) {
      return kk <= .0031308 ? 12.92 * kk : 1.055 * Math.pow(kk, .41666) - .055
    }
    class tk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = kk, this.g = Fk, this.b = Ik
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
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this.r, kk[Fk + 1] = this.g, kk[Fk + 2] = this.b, this
      }
      hFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tk.FromArrayToRef(kk, Fk, this), this
      }
      toColor4() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Zk(this.r, this.g, this.b, kk)
      }
      iXk() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(kk) {
        return new tk(this.r * kk.r, this.g * kk.g, this.b * kk.b)
      }
      multiplyToRef(kk, Fk) {
        return Fk.r = this.r * kk.r, Fk.g = this.g * kk.g, Fk.b = this.b * kk.b, Fk
      }
      multiplyInPlace(kk) {
        return this.r *= kk.r, this.g *= kk.g, this.b *= kk.b, this
      }
      multiplyByFloats(kk, Fk, Ik) {
        return new tk(this.r * kk, this.g * Fk, this.b * Ik)
      }
      divide(kk) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(kk, Fk) {
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
      minimizeInPlaceFromFloats(kk, Fk, Ik) {
        return this.r = Math.min(kk, this.r), this.g = Math.min(Fk, this.g), this.b = Math.min(Ik, this.b), this
      }
      maximizeInPlaceFromFloats(kk, Fk, Ik) {
        return this.r = Math.max(kk, this.r), this.g = Math.max(Fk, this.g), this.b = Math.max(Ik, this.b), this
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
      equalsFloats(kk, Fk, Ik) {
        return this.Ryk(kk, Fk, Ik)
      }
      Ryk(kk, Fk, Ik) {
        return this.r === kk && this.g === Fk && this.b === Ik
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk.b;
        return (0, ik.WithinEpsilon)(this.r, kk.r, Fk) && (0, ik.WithinEpsilon)(this.g, kk.g, Fk) && (0, ik.WithinEpsilon)(this.b, kk.b, Fk)
      }
      nX() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(kk) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(kk) {
        return new tk(this.r * kk, this.g * kk, this.b * kk)
      }
      scaleInPlace(kk) {
        return this.r *= kk, this.g *= kk, this.b *= kk, this
      }
      scaleToRef(kk, Fk) {
        return Fk.r = this.r * kk, Fk.g = this.g * kk, Fk.b = this.b * kk, Fk
      }
      scaleAndAddToRef(kk, Fk) {
        return Fk.r += this.r * kk, Fk.g += this.g * kk, Fk.b += this.b * kk, Fk
      }
      clampToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        return Ik.r = (0, ik.Clamp)(this.r, kk, Fk), Ik.g = (0, ik.Clamp)(this.g, kk, Fk), Ik.b = (0, ik.Clamp)(this.b, kk, Fk), Ik
      }
      add(kk) {
        return new tk(this.r + kk.r, this.g + kk.g, this.b + kk.b)
      }
      addInPlace(kk) {
        return this.r += kk.r, this.g += kk.g, this.b += kk.b, this
      }
      addInPlaceFromFloats(kk, Fk, Ik) {
        return this.r += kk, this.g += Fk, this.b += Ik, this
      }
      addToRef(kk, Fk) {
        return Fk.r = this.r + kk.r, Fk.g = this.g + kk.g, Fk.b = this.b + kk.b, Fk
      }
      subtract(kk) {
        return new tk(this.r - kk.r, this.g - kk.g, this.b - kk.b)
      }
      subtractToRef(kk, Fk) {
        return Fk.r = this.r - kk.r, Fk.g = this.g - kk.g, Fk.b = this.b - kk.b, Fk
      }
      zXk(kk) {
        return this.r -= kk.r, this.g -= kk.g, this.b -= kk.b, this
      }
      subtractFromFloats(kk, Fk, Ik) {
        return new tk(this.r - kk, this.g - Fk, this.b - Ik)
      }
      subtractFromFloatsToRef(kk, Fk, Ik, Xk) {
        return Xk.r = this.r - kk, Xk.g = this.g - Fk, Xk.b = this.b - Ik, Xk
      }
      clone() {
        return new tk(this.r, this.g, this.b)
      }
      kS(kk) {
        return this.r = kk.r, this.g = kk.g, this.b = kk.b, this
      }
      t5(kk, Fk, Ik) {
        return this.r = kk, this.g = Fk, this.b = Ik, this
      }
      set(kk, Fk, Ik) {
        return this.t5(kk, Fk, Ik)
      }
      I6(kk) {
        return this.r = this.g = this.b = kk, this
      }
      toHexString() {
        const kk = Math.round(255 * this.r),
          Fk = Math.round(255 * this.g),
          Ik = Math.round(255 * this.b);
        return "#" + (0, ik.ToHex)(kk) + (0, ik.ToHex)(Fk) + (0, ik.ToHex)(Ik)
      }
      fromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 7 !== kk.length || (this.r = parseInt(kk.substring(1, 3), 16) / 255, this.g = parseInt(kk.substring(3, 5), 16) / 255, this.b = parseInt(kk.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new tk)
      }
      toHSVToRef(kk) {
        const Fk = this.r,
          Ik = this.g,
          Xk = this.b,
          Tk = Math.max(Fk, Ik, Xk),
          ik = Math.min(Fk, Ik, Xk);
        let yk = 0,
          lk = 0;
        const ak = Tk,
          qk = Tk - ik;
        return 0 !== Tk && (lk = qk / Tk), Tk != ik && (Tk == Fk ? (yk = (Ik - Xk) / qk, Ik < Xk && (yk += 6)) : Tk == Ik ? yk = (Xk - Fk) / qk + 2 : Tk == Xk && (yk = (Fk - Ik) / qk + 4), yk *= 60), kk.r = yk, kk.g = lk, kk.b = ak, kk
      }
      toLinearSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new tk;
        return this.toLinearSpaceToRef(Fk, kk), Fk
      }
      toLinearSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = ak(this.r), kk.g = ak(this.g), kk.b = ak(this.b)) : (kk.r = lk(this.r), kk.g = lk(this.g), kk.b = lk(this.b)), this
      }
      toGammaSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new tk;
        return this.toGammaSpaceToRef(Fk, kk), Fk
      }
      toGammaSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Lk(this.r), kk.g = Lk(this.g), kk.b = Lk(this.b)) : (kk.r = qk(this.r), kk.g = qk(this.g), kk.b = qk(this.b)), this
      }
      static HSVtoRGBToRef(kk, Fk, Ik, Xk) {
        const Tk = Ik * Fk,
          ik = kk / 60,
          yk = Tk * (1 - Math.abs(ik % 2 - 1));
        let lk = 0,
          ak = 0,
          qk = 0;
        ik >= 0 && ik <= 1 ? (lk = Tk, ak = yk) : ik >= 1 && ik <= 2 ? (lk = yk, ak = Tk) : ik >= 2 && ik <= 3 ? (ak = Tk, qk = yk) : ik >= 3 && ik <= 4 ? (ak = yk, qk = Tk) : ik >= 4 && ik <= 5 ? (lk = yk, qk = Tk) : ik >= 5 && ik <= 6 && (lk = Tk, qk = yk);
        const Lk = Ik - Tk;
        return Xk.r = lk + Lk, Xk.g = ak + Lk, Xk.b = qk + Lk, Xk
      }
      static FromHSV(kk, Fk, Ik) {
        const Xk = new tk(0, 0, 0);
        return tk.HSVtoRGBToRef(kk, Fk, Ik, Xk), Xk
      }
      static FromHexString(kk) {
        return new tk(0, 0, 0).fromHexString(kk)
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new tk(kk[Fk], kk[Fk + 1], kk[Fk + 2])
      }
      static FromArrayToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        Ik.r = kk[Fk], Ik.g = kk[Fk + 1], Ik.b = kk[Fk + 2]
      }
      static FromInts(kk, Fk, Ik) {
        return new tk(kk / 255, Fk / 255, Ik / 255)
      }
      static Lerp(kk, Fk, Ik) {
        const Xk = new tk(0, 0, 0);
        return tk.LerpToRef(kk, Fk, Ik, Xk), Xk
      }
      static LerpToRef(kk, Fk, Ik, Xk) {
        Xk.r = kk.r + (Fk.r - kk.r) * Ik, Xk.g = kk.g + (Fk.g - kk.g) * Ik, Xk.b = kk.b + (Fk.b - kk.b) * Ik
      }
      static Hermite(kk, Fk, Ik, Xk, Tk) {
        const ik = Tk * Tk,
          yk = Tk * ik,
          lk = 2 * yk - 3 * ik + 1,
          ak = -2 * yk + 3 * ik,
          qk = yk - 2 * ik + Tk,
          Lk = yk - ik,
          Zk = kk.r * lk + Ik.r * ak + Fk.r * qk + Xk.r * Lk,
          jk = kk.g * lk + Ik.g * ak + Fk.g * qk + Xk.g * Lk,
          ek = kk.b * lk + Ik.b * ak + Fk.b * qk + Xk.b * Lk;
        return new tk(Zk, jk, ek)
      }
      static Hermite1stDerivative(kk, Fk, Ik, Xk, Tk) {
        const ik = tk.Black();
        return this.Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik), ik
      }
      static Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Tk * Tk;
        ik.r = 6 * (yk - Tk) * kk.r + (3 * yk - 4 * Tk + 1) * Fk.r + 6 * (-yk + Tk) * Ik.r + (3 * yk - 2 * Tk) * Xk.r, ik.g = 6 * (yk - Tk) * kk.g + (3 * yk - 4 * Tk + 1) * Fk.g + 6 * (-yk + Tk) * Ik.g + (3 * yk - 2 * Tk) * Xk.g, ik.b = 6 * (yk - Tk) * kk.b + (3 * yk - 4 * Tk + 1) * Fk.b + 6 * (-yk + Tk) * Ik.b + (3 * yk - 2 * Tk) * Xk.b
      }
      static Red() {
        return new tk(1, 0, 0)
      }
      static Green() {
        return new tk(0, 1, 0)
      }
      static Blue() {
        return new tk(0, 0, 1)
      }
      static Black() {
        return new tk(0, 0, 0)
      }
      static get BlackReadOnly() {
        return tk._BlackReadOnly
      }
      static White() {
        return new tk(1, 1, 1)
      }
      static Purple() {
        return new tk(.5, 0, .5)
      }
      static Magenta() {
        return new tk(1, 0, 1)
      }
      static Yellow() {
        return new tk(1, 1, 0)
      }
      static Gray() {
        return new tk(.5, .5, .5)
      }
      static Teal() {
        return new tk(0, 1, 1)
      }
      static Random() {
        return new tk(Math.random(), Math.random(), Math.random())
      }
    }
    tk._V8PerformanceHack = new tk(.5, .5, .5), tk._BlackReadOnly = tk.Black();
    class Zk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = kk, this.g = Fk, this.b = Ik, this.a = Xk
      }
      iXk() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this.r, kk[Fk + 1] = this.g, kk[Fk + 2] = this.b, kk[Fk + 3] = this.a, this
      }
      hFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = kk[Fk], this.g = kk[Fk + 1], this.b = kk[Fk + 2], this.a = kk[Fk + 3], this
      }
      equals(kk) {
        return kk && this.r === kk.r && this.g === kk.g && this.b === kk.b && this.a === kk.a
      }
      add(kk) {
        return new Zk(this.r + kk.r, this.g + kk.g, this.b + kk.b, this.a + kk.a)
      }
      addToRef(kk, Fk) {
        return Fk.r = this.r + kk.r, Fk.g = this.g + kk.g, Fk.b = this.b + kk.b, Fk.a = this.a + kk.a, Fk
      }
      addInPlace(kk) {
        return this.r += kk.r, this.g += kk.g, this.b += kk.b, this.a += kk.a, this
      }
      addInPlaceFromFloats(kk, Fk, Ik, Xk) {
        return this.r += kk, this.g += Fk, this.b += Ik, this.a += Xk, this
      }
      subtract(kk) {
        return new Zk(this.r - kk.r, this.g - kk.g, this.b - kk.b, this.a - kk.a)
      }
      subtractToRef(kk, Fk) {
        return Fk.r = this.r - kk.r, Fk.g = this.g - kk.g, Fk.b = this.b - kk.b, Fk.a = this.a - kk.a, Fk
      }
      zXk(kk) {
        return this.r -= kk.r, this.g -= kk.g, this.b -= kk.b, this.a -= kk.a, this
      }
      subtractFromFloats(kk, Fk, Ik, Xk) {
        return new Zk(this.r - kk, this.g - Fk, this.b - Ik, this.a - Xk)
      }
      subtractFromFloatsToRef(kk, Fk, Ik, Xk, Tk) {
        return Tk.r = this.r - kk, Tk.g = this.g - Fk, Tk.b = this.b - Ik, Tk.a = this.a - Xk, Tk
      }
      scale(kk) {
        return new Zk(this.r * kk, this.g * kk, this.b * kk, this.a * kk)
      }
      scaleInPlace(kk) {
        return this.r *= kk, this.g *= kk, this.b *= kk, this.a *= kk, this
      }
      scaleToRef(kk, Fk) {
        return Fk.r = this.r * kk, Fk.g = this.g * kk, Fk.b = this.b * kk, Fk.a = this.a * kk, Fk
      }
      scaleAndAddToRef(kk, Fk) {
        return Fk.r += this.r * kk, Fk.g += this.g * kk, Fk.b += this.b * kk, Fk.a += this.a * kk, Fk
      }
      clampToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        return Ik.r = (0, ik.Clamp)(this.r, kk, Fk), Ik.g = (0, ik.Clamp)(this.g, kk, Fk), Ik.b = (0, ik.Clamp)(this.b, kk, Fk), Ik.a = (0, ik.Clamp)(this.a, kk, Fk), Ik
      }
      multiply(kk) {
        return new Zk(this.r * kk.r, this.g * kk.g, this.b * kk.b, this.a * kk.a)
      }
      multiplyToRef(kk, Fk) {
        return Fk.r = this.r * kk.r, Fk.g = this.g * kk.g, Fk.b = this.b * kk.b, Fk.a = this.a * kk.a, Fk
      }
      multiplyInPlace(kk) {
        return this.r *= kk.r, this.g *= kk.g, this.b *= kk.b, this.a *= kk.a, this
      }
      multiplyByFloats(kk, Fk, Ik, Xk) {
        return new Zk(this.r * kk, this.g * Fk, this.b * Ik, this.a * Xk)
      }
      divide(kk) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(kk, Fk) {
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
      minimizeInPlaceFromFloats(kk, Fk, Ik, Xk) {
        return this.r = Math.min(kk, this.r), this.g = Math.min(Fk, this.g), this.b = Math.min(Ik, this.b), this.a = Math.min(Xk, this.a), this
      }
      maximizeInPlaceFromFloats(kk, Fk, Ik, Xk) {
        return this.r = Math.max(kk, this.r), this.g = Math.max(Fk, this.g), this.b = Math.max(Ik, this.b), this.a = Math.max(Xk, this.a), this
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
      nX() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(kk) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Tk.b;
        return (0, ik.WithinEpsilon)(this.r, kk.r, Fk) && (0, ik.WithinEpsilon)(this.g, kk.g, Fk) && (0, ik.WithinEpsilon)(this.b, kk.b, Fk) && (0, ik.WithinEpsilon)(this.a, kk.a, Fk)
      }
      Ryk(kk, Fk, Ik, Xk) {
        return this.r === kk && this.g === Fk && this.b === Ik && this.a === Xk
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
        return (new Zk).kS(this)
      }
      kS(kk) {
        return this.r = kk.r, this.g = kk.g, this.b = kk.b, this.a = kk.a, this
      }
      t5(kk, Fk, Ik, Xk) {
        return this.r = kk, this.g = Fk, this.b = Ik, this.a = Xk, this
      }
      set(kk, Fk, Ik, Xk) {
        return this.t5(kk, Fk, Ik, Xk)
      }
      I6(kk) {
        return this.r = this.g = this.b = this.a = kk, this
      }
      toHexString() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = Math.round(255 * this.r),
          Ik = Math.round(255 * this.g),
          Xk = Math.round(255 * this.b);
        if (kk) return "#" + (0, ik.ToHex)(Fk) + (0, ik.ToHex)(Ik) + (0, ik.ToHex)(Xk);
        const Tk = Math.round(255 * this.a);
        return "#" + (0, ik.ToHex)(Fk) + (0, ik.ToHex)(Ik) + (0, ik.ToHex)(Xk) + (0, ik.ToHex)(Tk)
      }
      fromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 9 !== kk.length && 7 !== kk.length || (this.r = parseInt(kk.substring(1, 3), 16) / 255, this.g = parseInt(kk.substring(3, 5), 16) / 255, this.b = parseInt(kk.substring(5, 7), 16) / 255, 9 === kk.length && (this.a = parseInt(kk.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new Zk;
        return this.toLinearSpaceToRef(Fk, kk), Fk
      }
      toLinearSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = ak(this.r), kk.g = ak(this.g), kk.b = ak(this.b)) : (kk.r = lk(this.r), kk.g = lk(this.g), kk.b = lk(this.b)), kk.a = this.a, this
      }
      toGammaSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new Zk;
        return this.toGammaSpaceToRef(Fk, kk), Fk
      }
      toGammaSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = Lk(this.r), kk.g = Lk(this.g), kk.b = Lk(this.b)) : (kk.r = qk(this.r), kk.g = qk(this.g), kk.b = qk(this.b)), kk.a = this.a, this
      }
      static FromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 9 !== kk.length && 7 !== kk.length ? new Zk(0, 0, 0, 0) : new Zk(0, 0, 0, 1).fromHexString(kk)
      }
      static Lerp(kk, Fk, Ik) {
        return Zk.LerpToRef(kk, Fk, Ik, new Zk)
      }
      static LerpToRef(kk, Fk, Ik, Xk) {
        return Xk.r = kk.r + (Fk.r - kk.r) * Ik, Xk.g = kk.g + (Fk.g - kk.g) * Ik, Xk.b = kk.b + (Fk.b - kk.b) * Ik, Xk.a = kk.a + (Fk.a - kk.a) * Ik, Xk
      }
      static Hermite(kk, Fk, Ik, Xk, Tk) {
        const ik = Tk * Tk,
          yk = Tk * ik,
          lk = 2 * yk - 3 * ik + 1,
          ak = -2 * yk + 3 * ik,
          qk = yk - 2 * ik + Tk,
          Lk = yk - ik,
          tk = kk.r * lk + Ik.r * ak + Fk.r * qk + Xk.r * Lk,
          jk = kk.g * lk + Ik.g * ak + Fk.g * qk + Xk.g * Lk,
          ek = kk.b * lk + Ik.b * ak + Fk.b * qk + Xk.b * Lk,
          wk = kk.a * lk + Ik.a * ak + Fk.a * qk + Xk.a * Lk;
        return new Zk(tk, jk, ek, wk)
      }
      static Hermite1stDerivative(kk, Fk, Ik, Xk, Tk) {
        const ik = new Zk;
        return this.Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik), ik
      }
      static Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Tk * Tk;
        ik.r = 6 * (yk - Tk) * kk.r + (3 * yk - 4 * Tk + 1) * Fk.r + 6 * (-yk + Tk) * Ik.r + (3 * yk - 2 * Tk) * Xk.r, ik.g = 6 * (yk - Tk) * kk.g + (3 * yk - 4 * Tk + 1) * Fk.g + 6 * (-yk + Tk) * Ik.g + (3 * yk - 2 * Tk) * Xk.g, ik.b = 6 * (yk - Tk) * kk.b + (3 * yk - 4 * Tk + 1) * Fk.b + 6 * (-yk + Tk) * Ik.b + (3 * yk - 2 * Tk) * Xk.b, ik.a = 6 * (yk - Tk) * kk.a + (3 * yk - 4 * Tk + 1) * Fk.a + 6 * (-yk + Tk) * Ik.a + (3 * yk - 2 * Tk) * Xk.a
      }
      static FromColor3(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Zk(kk.r, kk.g, kk.b, Fk)
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Zk(kk[Fk], kk[Fk + 1], kk[Fk + 2], kk[Fk + 3])
      }
      static FromArrayToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        Ik.r = kk[Fk], Ik.g = kk[Fk + 1], Ik.b = kk[Fk + 2], Ik.a = kk[Fk + 3]
      }
      static FromInts(kk, Fk, Ik, Xk) {
        return new Zk(kk / 255, Fk / 255, Ik / 255, Xk / 255)
      }
      static CheckColors4(kk, Fk) {
        if (kk.length === 3 * Fk) {
          const Fk = [];
          for (let Ik = 0; Ik < kk.length; Ik += 3) {
            const Xk = Ik / 3 * 4;
            Fk[Xk] = kk[Ik], Fk[Xk + 1] = kk[Ik + 1], Fk[Xk + 2] = kk[Ik + 2], Fk[Xk + 3] = 1
          }
          return Fk
        }
        return kk
      }
    }
    Zk._V8PerformanceHack = new Zk(.5, .5, .5, .5);
    class jk {}
    jk.Color3 = (0, Xk.b)(3, tk.Black), jk.Color4 = (0, Xk.b)(3, (() => new Zk(0, 0, 0, 0)));
    let ek = !1;

    function wk() {
      ek || (ek = !0, Object.defineProperties(tk.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Zk.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, yk.f)("BABYLON.Color3", tk), (0, yk.f)("BABYLON.Color4", Zk))
    }
  },
  37158: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      d: () => Xk,
      g: () => Tk
    });
    const Xk = 1 / 2.2,
      Tk = 2.2;
    Math.sqrt(5);
    let ik = .001
  },
  37189: (kk, Fk, Ik) => {
    function Xk(kk) {
      return parseInt(kk.toString().replace(/\W/g, ""))
    }

    function Tk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(kk - Fk) <= Ik
    }

    function ik(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return kk < Fk - Xk || kk > Ik + Xk
    }

    function yk(kk, Fk) {
      return kk === Fk ? kk : Math.random() * (Fk - kk) + kk
    }

    function lk(kk, Fk, Ik) {
      return kk + (Fk - kk) * Ik
    }

    function ak(kk, Fk, Ik) {
      let Xk = Hk(Fk - kk, 360);
      return Xk > 180 && (Xk -= 360), kk + Xk * Zk(Ik)
    }

    function qk(kk, Fk, Ik) {
      let Xk;
      return Xk = kk != Fk ? Zk((Ik - kk) / (Fk - kk)) : 0, Xk
    }

    function Lk(kk, Fk, Ik, Xk, Tk) {
      const ik = Tk * Tk,
        yk = Tk * ik;
      return kk * (2 * yk - 3 * ik + 1) + Ik * (-2 * yk + 3 * ik) + Fk * (yk - 2 * ik + Tk) + Xk * (yk - ik)
    }

    function tk(kk, Fk, Ik, Xk, Tk) {
      const ik = Tk * Tk;
      return 6 * (ik - Tk) * kk + (3 * ik - 4 * Tk + 1) * Fk + 6 * (-ik + Tk) * Ik + (3 * ik - 2 * Tk) * Xk
    }

    function Zk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Ik, Math.max(Fk, kk))
    }

    function jk(kk) {
      return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
    }

    function ek(kk) {
      const Fk = kk.toString(16);
      return kk <= 15 ? ("0" + Fk).toUpperCase() : Fk.toUpperCase()
    }

    function wk(kk) {
      if (Math.log2) return Math.floor(Math.log2(kk));
      if (kk < 0) return NaN;
      if (0 === kk) return -1 / 0;
      let Fk = 0;
      if (kk < 1) {
        for (; kk < 1;) Fk++, kk *= 2;
        Fk = -Fk
      } else if (kk > 1)
        for (; kk > 1;) Fk++, kk = Math.floor(kk / 2);
      return Fk
    }

    function Hk(kk, Fk) {
      return kk - Math.floor(kk / Fk) * Fk
    }

    function Jk(kk, Fk, Ik) {
      return (kk - Fk) / (Ik - Fk)
    }

    function xk(kk, Fk, Ik) {
      return kk * (Ik - Fk) + Fk
    }

    function Pk(kk, Fk) {
      let Ik = Hk(Fk - kk, 360);
      return Ik > 180 && (Ik -= 360), Ik
    }

    function Kk(kk, Fk) {
      const Ik = Hk(kk, 2 * Fk);
      return Fk - Math.abs(Ik - Fk)
    }

    function Qk(kk, Fk, Ik) {
      let Xk = Zk(Ik);
      return Xk = -2 * Xk * Xk * Xk + 3 * Xk * Xk, Fk * Xk + kk * (1 - Xk)
    }

    function sk(kk, Fk, Ik) {
      let Xk;
      return Xk = Math.abs(Fk - kk) <= Ik ? Fk : kk + Math.sign(Fk - kk) * Ik, Xk
    }

    function Vk(kk, Fk, Ik) {
      const Xk = Pk(kk, Fk);
      let Tk;
      return Tk = -Ik < Xk && Xk < Ik ? Fk : sk(kk, Fk = kk + Xk, Ik), Tk
    }

    function zk(kk, Fk, Ik) {
      return (kk - Fk) / (Ik - Fk)
    }

    function Sk(kk, Fk, Ik) {
      return (Ik - Fk) * kk + Fk
    }

    function vk(kk, Fk) {
      const Ik = kk % Fk;
      return 0 === Ik ? Fk : vk(Fk, Ik)
    }
    Ik.r(Fk), Ik.d(Fk, {
      Clamp: () => Zk,
      DeltaAngle: () => Pk,
      Denormalize: () => xk,
      ExtractAsInt: () => Xk,
      Hermite: () => Lk,
      Hermite1stDerivative: () => tk,
      HighestCommonFactor: () => vk,
      ILog2: () => wk,
      InverseLerp: () => qk,
      Lerp: () => lk,
      LerpAngle: () => ak,
      MoveTowards: () => sk,
      MoveTowardsAngle: () => Vk,
      Normalize: () => Jk,
      NormalizeRadians: () => jk,
      OutsideRange: () => ik,
      PercentToRange: () => Sk,
      PingPong: () => Kk,
      RandomRange: () => yk,
      RangeToPercent: () => zk,
      Repeat: () => Hk,
      SmoothStep: () => Qk,
      ToHex: () => ek,
      WithinEpsilon: () => Tk
    })
  },
  37166: (kk, Fk, Ik) => {
    function Xk(kk, Fk) {
      const Ik = [];
      for (let Xk = 0; Xk < kk; ++Xk) Ik.push(Fk());
      return Ik
    }

    function Tk(kk, Fk) {
      return Xk(kk, Fk)
    }
    Ik.d(Fk, {
      b: () => Xk,
      c: () => Tk,
      f: () => yk
    });
    const ik = ["push", "splice", "pop", "shift", "unshift"];

    function yk(kk, Fk) {
      const Ik = ik.map((Ik => function(kk, Fk, Ik) {
        const Xk = kk[Fk];
        if ("function" !== typeof Xk) return null;
        const Tk = function() {
          const Xk = kk.length,
            ik = Tk.previous.apply(kk, arguments);
          return Ik(Fk, Xk), ik
        };
        return Xk.next = Tk, Tk.previous = Xk, kk[Fk] = Tk, () => {
          const Ik = Tk.previous;
          if (!Ik) return;
          const Xk = Tk.next;
          Xk ? (Ik.next = Xk, Xk.previous = Ik) : (Ik.next = void 0, kk[Fk] = Ik), Tk.next = void 0, Tk.previous = void 0
        }
      }(kk, Ik, Fk)));
      return () => {
        for (const kk of Ik) kk?.()
      }
    }
  },
  37201: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ik,
      f: () => Tk
    });
    const Xk = {};

    function Tk(kk, Fk) {
      Xk[kk] = Fk
    }

    function ik(kk) {
      return Xk[kk]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);