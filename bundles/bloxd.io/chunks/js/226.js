export const id = 226;
export const ids = [226];
export const modules = {
  36917: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Vk,
      i: () => Jk,
      j: () => yk,
      n: () => Ak
    });
    var Rk = Bk(36768),
      tk = Bk(36764),
      ak = Bk(36790),
      Xk = Bk(36798);

    function bk(kk) {
      return Math.pow(kk, tk.i)
    }

    function wk(kk) {
      return kk <= .04045 ? .0773993808 * kk : Math.pow(.947867299 * (kk + .055), 2.4)
    }

    function dk(kk) {
      return Math.pow(kk, tk.e)
    }

    function sk(kk) {
      return kk <= .0031308 ? 12.92 * kk : 1.055 * Math.pow(kk, .41666) - .055
    }
    class Vk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = kk, this.g = Fk, this.b = Bk
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
      MFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Vk.FromArrayToRef(kk, Fk, this), this
      }
      toColor4() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Jk(this.r, this.g, this.b, kk)
      }
      PBk() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(kk) {
        return new Vk(this.r * kk.r, this.g * kk.g, this.b * kk.b)
      }
      multiplyToRef(kk, Fk) {
        return Fk.r = this.r * kk.r, Fk.g = this.g * kk.g, Fk.b = this.b * kk.b, Fk
      }
      multiplyInPlace(kk) {
        return this.r *= kk.r, this.g *= kk.g, this.b *= kk.b, this
      }
      multiplyByFloats(kk, Fk, Bk) {
        return new Vk(this.r * kk, this.g * Fk, this.b * Bk)
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
      minimizeInPlaceFromFloats(kk, Fk, Bk) {
        return this.r = Math.min(kk, this.r), this.g = Math.min(Fk, this.g), this.b = Math.min(Bk, this.b), this
      }
      maximizeInPlaceFromFloats(kk, Fk, Bk) {
        return this.r = Math.max(kk, this.r), this.g = Math.max(Fk, this.g), this.b = Math.max(Bk, this.b), this
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
      equalsFloats(kk, Fk, Bk) {
        return this.LXk(kk, Fk, Bk)
      }
      LXk(kk, Fk, Bk) {
        return this.r === kk && this.g === Fk && this.b === Bk
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk.c;
        return (0, ak.WithinEpsilon)(this.r, kk.r, Fk) && (0, ak.WithinEpsilon)(this.g, kk.g, Fk) && (0, ak.WithinEpsilon)(this.b, kk.b, Fk)
      }
      bt() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(kk) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(kk) {
        return new Vk(this.r * kk, this.g * kk, this.b * kk)
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
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        return Bk.r = (0, ak.Clamp)(this.r, kk, Fk), Bk.g = (0, ak.Clamp)(this.g, kk, Fk), Bk.b = (0, ak.Clamp)(this.b, kk, Fk), Bk
      }
      add(kk) {
        return new Vk(this.r + kk.r, this.g + kk.g, this.b + kk.b)
      }
      addInPlace(kk) {
        return this.r += kk.r, this.g += kk.g, this.b += kk.b, this
      }
      addInPlaceFromFloats(kk, Fk, Bk) {
        return this.r += kk, this.g += Fk, this.b += Bk, this
      }
      addToRef(kk, Fk) {
        return Fk.r = this.r + kk.r, Fk.g = this.g + kk.g, Fk.b = this.b + kk.b, Fk
      }
      subtract(kk) {
        return new Vk(this.r - kk.r, this.g - kk.g, this.b - kk.b)
      }
      subtractToRef(kk, Fk) {
        return Fk.r = this.r - kk.r, Fk.g = this.g - kk.g, Fk.b = this.b - kk.b, Fk
      }
      wRk(kk) {
        return this.r -= kk.r, this.g -= kk.g, this.b -= kk.b, this
      }
      subtractFromFloats(kk, Fk, Bk) {
        return new Vk(this.r - kk, this.g - Fk, this.b - Bk)
      }
      subtractFromFloatsToRef(kk, Fk, Bk, Rk) {
        return Rk.r = this.r - kk, Rk.g = this.g - Fk, Rk.b = this.b - Bk, Rk
      }
      clone() {
        return new Vk(this.r, this.g, this.b)
      }
      sBk(kk) {
        return this.r = kk.r, this.g = kk.g, this.b = kk.b, this
      }
      E1(kk, Fk, Bk) {
        return this.r = kk, this.g = Fk, this.b = Bk, this
      }
      set(kk, Fk, Bk) {
        return this.E1(kk, Fk, Bk)
      }
      J_(kk) {
        return this.r = this.g = this.b = kk, this
      }
      toHexString() {
        const kk = Math.round(255 * this.r),
          Fk = Math.round(255 * this.g),
          Bk = Math.round(255 * this.b);
        return "#" + (0, ak.ToHex)(kk) + (0, ak.ToHex)(Fk) + (0, ak.ToHex)(Bk)
      }
      fromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 7 !== kk.length || (this.r = parseInt(kk.substring(1, 3), 16) / 255, this.g = parseInt(kk.substring(3, 5), 16) / 255, this.b = parseInt(kk.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Vk)
      }
      toHSVToRef(kk) {
        const Fk = this.r,
          Bk = this.g,
          Rk = this.b,
          tk = Math.max(Fk, Bk, Rk),
          ak = Math.min(Fk, Bk, Rk);
        let Xk = 0,
          bk = 0;
        const wk = tk,
          dk = tk - ak;
        return 0 !== tk && (bk = dk / tk), tk != ak && (tk == Fk ? (Xk = (Bk - Rk) / dk, Bk < Rk && (Xk += 6)) : tk == Bk ? Xk = (Rk - Fk) / dk + 2 : tk == Rk && (Xk = (Fk - Bk) / dk + 4), Xk *= 60), kk.r = Xk, kk.g = bk, kk.b = wk, kk
      }
      toLinearSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new Vk;
        return this.toLinearSpaceToRef(Fk, kk), Fk
      }
      toLinearSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = wk(this.r), kk.g = wk(this.g), kk.b = wk(this.b)) : (kk.r = bk(this.r), kk.g = bk(this.g), kk.b = bk(this.b)), this
      }
      toGammaSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new Vk;
        return this.toGammaSpaceToRef(Fk, kk), Fk
      }
      toGammaSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = sk(this.r), kk.g = sk(this.g), kk.b = sk(this.b)) : (kk.r = dk(this.r), kk.g = dk(this.g), kk.b = dk(this.b)), this
      }
      static HSVtoRGBToRef(kk, Fk, Bk, Rk) {
        const tk = Bk * Fk,
          ak = kk / 60,
          Xk = tk * (1 - Math.abs(ak % 2 - 1));
        let bk = 0,
          wk = 0,
          dk = 0;
        ak >= 0 && ak <= 1 ? (bk = tk, wk = Xk) : ak >= 1 && ak <= 2 ? (bk = Xk, wk = tk) : ak >= 2 && ak <= 3 ? (wk = tk, dk = Xk) : ak >= 3 && ak <= 4 ? (wk = Xk, dk = tk) : ak >= 4 && ak <= 5 ? (bk = Xk, dk = tk) : ak >= 5 && ak <= 6 && (bk = tk, dk = Xk);
        const sk = Bk - tk;
        return Rk.r = bk + sk, Rk.g = wk + sk, Rk.b = dk + sk, Rk
      }
      static FromHSV(kk, Fk, Bk) {
        const Rk = new Vk(0, 0, 0);
        return Vk.HSVtoRGBToRef(kk, Fk, Bk, Rk), Rk
      }
      static FromHexString(kk) {
        return new Vk(0, 0, 0).fromHexString(kk)
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Vk(kk[Fk], kk[Fk + 1], kk[Fk + 2])
      }
      static FromArrayToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        Bk.r = kk[Fk], Bk.g = kk[Fk + 1], Bk.b = kk[Fk + 2]
      }
      static FromInts(kk, Fk, Bk) {
        return new Vk(kk / 255, Fk / 255, Bk / 255)
      }
      static Lerp(kk, Fk, Bk) {
        const Rk = new Vk(0, 0, 0);
        return Vk.LerpToRef(kk, Fk, Bk, Rk), Rk
      }
      static LerpToRef(kk, Fk, Bk, Rk) {
        Rk.r = kk.r + (Fk.r - kk.r) * Bk, Rk.g = kk.g + (Fk.g - kk.g) * Bk, Rk.b = kk.b + (Fk.b - kk.b) * Bk
      }
      static Hermite(kk, Fk, Bk, Rk, tk) {
        const ak = tk * tk,
          Xk = tk * ak,
          bk = 2 * Xk - 3 * ak + 1,
          wk = -2 * Xk + 3 * ak,
          dk = Xk - 2 * ak + tk,
          sk = Xk - ak,
          Jk = kk.r * bk + Bk.r * wk + Fk.r * dk + Rk.r * sk,
          Ak = kk.g * bk + Bk.g * wk + Fk.g * dk + Rk.g * sk,
          ek = kk.b * bk + Bk.b * wk + Fk.b * dk + Rk.b * sk;
        return new Vk(Jk, Ak, ek)
      }
      static Hermite1stDerivative(kk, Fk, Bk, Rk, tk) {
        const ak = Vk.Black();
        return this.Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak), ak
      }
      static Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = tk * tk;
        ak.r = 6 * (Xk - tk) * kk.r + (3 * Xk - 4 * tk + 1) * Fk.r + 6 * (-Xk + tk) * Bk.r + (3 * Xk - 2 * tk) * Rk.r, ak.g = 6 * (Xk - tk) * kk.g + (3 * Xk - 4 * tk + 1) * Fk.g + 6 * (-Xk + tk) * Bk.g + (3 * Xk - 2 * tk) * Rk.g, ak.b = 6 * (Xk - tk) * kk.b + (3 * Xk - 4 * tk + 1) * Fk.b + 6 * (-Xk + tk) * Bk.b + (3 * Xk - 2 * tk) * Rk.b
      }
      static Red() {
        return new Vk(1, 0, 0)
      }
      static Green() {
        return new Vk(0, 1, 0)
      }
      static Blue() {
        return new Vk(0, 0, 1)
      }
      static Black() {
        return new Vk(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Vk._BlackReadOnly
      }
      static White() {
        return new Vk(1, 1, 1)
      }
      static Purple() {
        return new Vk(.5, 0, .5)
      }
      static Magenta() {
        return new Vk(1, 0, 1)
      }
      static Yellow() {
        return new Vk(1, 1, 0)
      }
      static Gray() {
        return new Vk(.5, .5, .5)
      }
      static Teal() {
        return new Vk(0, 1, 1)
      }
      static Random() {
        return new Vk(Math.random(), Math.random(), Math.random())
      }
    }
    Vk._V8PerformanceHack = new Vk(.5, .5, .5), Vk._BlackReadOnly = Vk.Black();
    class Jk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = kk, this.g = Fk, this.b = Bk, this.a = Rk
      }
      PBk() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this.r, kk[Fk + 1] = this.g, kk[Fk + 2] = this.b, kk[Fk + 3] = this.a, this
      }
      MFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = kk[Fk], this.g = kk[Fk + 1], this.b = kk[Fk + 2], this.a = kk[Fk + 3], this
      }
      equals(kk) {
        return kk && this.r === kk.r && this.g === kk.g && this.b === kk.b && this.a === kk.a
      }
      add(kk) {
        return new Jk(this.r + kk.r, this.g + kk.g, this.b + kk.b, this.a + kk.a)
      }
      addToRef(kk, Fk) {
        return Fk.r = this.r + kk.r, Fk.g = this.g + kk.g, Fk.b = this.b + kk.b, Fk.a = this.a + kk.a, Fk
      }
      addInPlace(kk) {
        return this.r += kk.r, this.g += kk.g, this.b += kk.b, this.a += kk.a, this
      }
      addInPlaceFromFloats(kk, Fk, Bk, Rk) {
        return this.r += kk, this.g += Fk, this.b += Bk, this.a += Rk, this
      }
      subtract(kk) {
        return new Jk(this.r - kk.r, this.g - kk.g, this.b - kk.b, this.a - kk.a)
      }
      subtractToRef(kk, Fk) {
        return Fk.r = this.r - kk.r, Fk.g = this.g - kk.g, Fk.b = this.b - kk.b, Fk.a = this.a - kk.a, Fk
      }
      wRk(kk) {
        return this.r -= kk.r, this.g -= kk.g, this.b -= kk.b, this.a -= kk.a, this
      }
      subtractFromFloats(kk, Fk, Bk, Rk) {
        return new Jk(this.r - kk, this.g - Fk, this.b - Bk, this.a - Rk)
      }
      subtractFromFloatsToRef(kk, Fk, Bk, Rk, tk) {
        return tk.r = this.r - kk, tk.g = this.g - Fk, tk.b = this.b - Bk, tk.a = this.a - Rk, tk
      }
      scale(kk) {
        return new Jk(this.r * kk, this.g * kk, this.b * kk, this.a * kk)
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
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        return Bk.r = (0, ak.Clamp)(this.r, kk, Fk), Bk.g = (0, ak.Clamp)(this.g, kk, Fk), Bk.b = (0, ak.Clamp)(this.b, kk, Fk), Bk.a = (0, ak.Clamp)(this.a, kk, Fk), Bk
      }
      multiply(kk) {
        return new Jk(this.r * kk.r, this.g * kk.g, this.b * kk.b, this.a * kk.a)
      }
      multiplyToRef(kk, Fk) {
        return Fk.r = this.r * kk.r, Fk.g = this.g * kk.g, Fk.b = this.b * kk.b, Fk.a = this.a * kk.a, Fk
      }
      multiplyInPlace(kk) {
        return this.r *= kk.r, this.g *= kk.g, this.b *= kk.b, this.a *= kk.a, this
      }
      multiplyByFloats(kk, Fk, Bk, Rk) {
        return new Jk(this.r * kk, this.g * Fk, this.b * Bk, this.a * Rk)
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
      minimizeInPlaceFromFloats(kk, Fk, Bk, Rk) {
        return this.r = Math.min(kk, this.r), this.g = Math.min(Fk, this.g), this.b = Math.min(Bk, this.b), this.a = Math.min(Rk, this.a), this
      }
      maximizeInPlaceFromFloats(kk, Fk, Bk, Rk) {
        return this.r = Math.max(kk, this.r), this.g = Math.max(Fk, this.g), this.b = Math.max(Bk, this.b), this.a = Math.max(Rk, this.a), this
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
      bt() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(kk) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tk.c;
        return (0, ak.WithinEpsilon)(this.r, kk.r, Fk) && (0, ak.WithinEpsilon)(this.g, kk.g, Fk) && (0, ak.WithinEpsilon)(this.b, kk.b, Fk) && (0, ak.WithinEpsilon)(this.a, kk.a, Fk)
      }
      LXk(kk, Fk, Bk, Rk) {
        return this.r === kk && this.g === Fk && this.b === Bk && this.a === Rk
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
        return (new Jk).sBk(this)
      }
      sBk(kk) {
        return this.r = kk.r, this.g = kk.g, this.b = kk.b, this.a = kk.a, this
      }
      E1(kk, Fk, Bk, Rk) {
        return this.r = kk, this.g = Fk, this.b = Bk, this.a = Rk, this
      }
      set(kk, Fk, Bk, Rk) {
        return this.E1(kk, Fk, Bk, Rk)
      }
      J_(kk) {
        return this.r = this.g = this.b = this.a = kk, this
      }
      toHexString() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = Math.round(255 * this.r),
          Bk = Math.round(255 * this.g),
          Rk = Math.round(255 * this.b);
        if (kk) return "#" + (0, ak.ToHex)(Fk) + (0, ak.ToHex)(Bk) + (0, ak.ToHex)(Rk);
        const tk = Math.round(255 * this.a);
        return "#" + (0, ak.ToHex)(Fk) + (0, ak.ToHex)(Bk) + (0, ak.ToHex)(Rk) + (0, ak.ToHex)(tk)
      }
      fromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 9 !== kk.length && 7 !== kk.length || (this.r = parseInt(kk.substring(1, 3), 16) / 255, this.g = parseInt(kk.substring(3, 5), 16) / 255, this.b = parseInt(kk.substring(5, 7), 16) / 255, 9 === kk.length && (this.a = parseInt(kk.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new Jk;
        return this.toLinearSpaceToRef(Fk, kk), Fk
      }
      toLinearSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = wk(this.r), kk.g = wk(this.g), kk.b = wk(this.b)) : (kk.r = bk(this.r), kk.g = bk(this.g), kk.b = bk(this.b)), kk.a = this.a, this
      }
      toGammaSpace() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Fk = new Jk;
        return this.toGammaSpaceToRef(Fk, kk), Fk
      }
      toGammaSpaceToRef(kk) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (kk.r = sk(this.r), kk.g = sk(this.g), kk.b = sk(this.b)) : (kk.r = dk(this.r), kk.g = dk(this.g), kk.b = dk(this.b)), kk.a = this.a, this
      }
      static FromHexString(kk) {
        return "#" !== kk.substring(0, 1) || 9 !== kk.length && 7 !== kk.length ? new Jk(0, 0, 0, 0) : new Jk(0, 0, 0, 1).fromHexString(kk)
      }
      static Lerp(kk, Fk, Bk) {
        return Jk.LerpToRef(kk, Fk, Bk, new Jk)
      }
      static LerpToRef(kk, Fk, Bk, Rk) {
        return Rk.r = kk.r + (Fk.r - kk.r) * Bk, Rk.g = kk.g + (Fk.g - kk.g) * Bk, Rk.b = kk.b + (Fk.b - kk.b) * Bk, Rk.a = kk.a + (Fk.a - kk.a) * Bk, Rk
      }
      static Hermite(kk, Fk, Bk, Rk, tk) {
        const ak = tk * tk,
          Xk = tk * ak,
          bk = 2 * Xk - 3 * ak + 1,
          wk = -2 * Xk + 3 * ak,
          dk = Xk - 2 * ak + tk,
          sk = Xk - ak,
          Vk = kk.r * bk + Bk.r * wk + Fk.r * dk + Rk.r * sk,
          Ak = kk.g * bk + Bk.g * wk + Fk.g * dk + Rk.g * sk,
          ek = kk.b * bk + Bk.b * wk + Fk.b * dk + Rk.b * sk,
          yk = kk.a * bk + Bk.a * wk + Fk.a * dk + Rk.a * sk;
        return new Jk(Vk, Ak, ek, yk)
      }
      static Hermite1stDerivative(kk, Fk, Bk, Rk, tk) {
        const ak = new Jk;
        return this.Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak), ak
      }
      static Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = tk * tk;
        ak.r = 6 * (Xk - tk) * kk.r + (3 * Xk - 4 * tk + 1) * Fk.r + 6 * (-Xk + tk) * Bk.r + (3 * Xk - 2 * tk) * Rk.r, ak.g = 6 * (Xk - tk) * kk.g + (3 * Xk - 4 * tk + 1) * Fk.g + 6 * (-Xk + tk) * Bk.g + (3 * Xk - 2 * tk) * Rk.g, ak.b = 6 * (Xk - tk) * kk.b + (3 * Xk - 4 * tk + 1) * Fk.b + 6 * (-Xk + tk) * Bk.b + (3 * Xk - 2 * tk) * Rk.b, ak.a = 6 * (Xk - tk) * kk.a + (3 * Xk - 4 * tk + 1) * Fk.a + 6 * (-Xk + tk) * Bk.a + (3 * Xk - 2 * tk) * Rk.a
      }
      static FromColor3(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Jk(kk.r, kk.g, kk.b, Fk)
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Jk(kk[Fk], kk[Fk + 1], kk[Fk + 2], kk[Fk + 3])
      }
      static FromArrayToRef(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        Bk.r = kk[Fk], Bk.g = kk[Fk + 1], Bk.b = kk[Fk + 2], Bk.a = kk[Fk + 3]
      }
      static FromInts(kk, Fk, Bk, Rk) {
        return new Jk(kk / 255, Fk / 255, Bk / 255, Rk / 255)
      }
      static CheckColors4(kk, Fk) {
        if (kk.length === 3 * Fk) {
          const Fk = [];
          for (let Bk = 0; Bk < kk.length; Bk += 3) {
            const Rk = Bk / 3 * 4;
            Fk[Rk] = kk[Bk], Fk[Rk + 1] = kk[Bk + 1], Fk[Rk + 2] = kk[Bk + 2], Fk[Rk + 3] = 1
          }
          return Fk
        }
        return kk
      }
    }
    Jk._V8PerformanceHack = new Jk(.5, .5, .5, .5);
    class Ak {}
    Ak.Color3 = (0, Rk.c)(3, Vk.Black), Ak.Color4 = (0, Rk.c)(3, (() => new Jk(0, 0, 0, 0)));
    let ek = !1;

    function yk() {
      ek || (ek = !0, Object.defineProperties(Vk.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Jk.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Xk.d)("BABYLON.Color3", Vk), (0, Xk.d)("BABYLON.Color4", Jk))
    }
  },
  36764: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      e: () => Rk,
      i: () => tk
    });
    const Rk = 1 / 2.2,
      tk = 2.2;
    Math.sqrt(5);
    let ak = .001
  },
  36790: (kk, Fk, Bk) => {
    function Rk(kk) {
      return parseInt(kk.toString().replace(/\W/g, ""))
    }

    function tk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(kk - Fk) <= Bk
    }

    function ak(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return kk < Fk - Rk || kk > Bk + Rk
    }

    function Xk(kk, Fk) {
      return kk === Fk ? kk : Math.random() * (Fk - kk) + kk
    }

    function bk(kk, Fk, Bk) {
      return kk + (Fk - kk) * Bk
    }

    function wk(kk, Fk, Bk) {
      let Rk = fk(Fk - kk, 360);
      return Rk > 180 && (Rk -= 360), kk + Rk * Jk(Bk)
    }

    function dk(kk, Fk, Bk) {
      let Rk;
      return Rk = kk != Fk ? Jk((Bk - kk) / (Fk - kk)) : 0, Rk
    }

    function sk(kk, Fk, Bk, Rk, tk) {
      const ak = tk * tk,
        Xk = tk * ak;
      return kk * (2 * Xk - 3 * ak + 1) + Bk * (-2 * Xk + 3 * ak) + Fk * (Xk - 2 * ak + tk) + Rk * (Xk - ak)
    }

    function Vk(kk, Fk, Bk, Rk, tk) {
      const ak = tk * tk;
      return 6 * (ak - tk) * kk + (3 * ak - 4 * tk + 1) * Fk + 6 * (-ak + tk) * Bk + (3 * ak - 2 * tk) * Rk
    }

    function Jk(kk) {
      let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Bk, Math.max(Fk, kk))
    }

    function Ak(kk) {
      return kk -= 2 * Math.PI * Math.floor((kk + Math.PI) / (2 * Math.PI))
    }

    function ek(kk) {
      const Fk = kk.toString(16);
      return kk <= 15 ? ("0" + Fk).toUpperCase() : Fk.toUpperCase()
    }

    function yk(kk) {
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

    function fk(kk, Fk) {
      return kk - Math.floor(kk / Fk) * Fk
    }

    function mk(kk, Fk, Bk) {
      return (kk - Fk) / (Bk - Fk)
    }

    function Wk(kk, Fk, Bk) {
      return kk * (Bk - Fk) + Fk
    }

    function vk(kk, Fk) {
      let Bk = fk(Fk - kk, 360);
      return Bk > 180 && (Bk -= 360), Bk
    }

    function ik(kk, Fk) {
      const Bk = fk(kk, 2 * Fk);
      return Fk - Math.abs(Bk - Fk)
    }

    function Yk(kk, Fk, Bk) {
      let Rk = Jk(Bk);
      return Rk = -2 * Rk * Rk * Rk + 3 * Rk * Rk, Fk * Rk + kk * (1 - Rk)
    }

    function Lk(kk, Fk, Bk) {
      let Rk;
      return Rk = Math.abs(Fk - kk) <= Bk ? Fk : kk + Math.sign(Fk - kk) * Bk, Rk
    }

    function Ok(kk, Fk, Bk) {
      const Rk = vk(kk, Fk);
      let tk;
      return tk = -Bk < Rk && Rk < Bk ? Fk : Lk(kk, Fk = kk + Rk, Bk), tk
    }

    function Ek(kk, Fk, Bk) {
      return (kk - Fk) / (Bk - Fk)
    }

    function Sk(kk, Fk, Bk) {
      return (Bk - Fk) * kk + Fk
    }

    function Nk(kk, Fk) {
      const Bk = kk % Fk;
      return 0 === Bk ? Fk : Nk(Fk, Bk)
    }
    Bk.r(Fk), Bk.d(Fk, {
      Clamp: () => Jk,
      DeltaAngle: () => vk,
      Denormalize: () => Wk,
      ExtractAsInt: () => Rk,
      Hermite: () => sk,
      Hermite1stDerivative: () => Vk,
      HighestCommonFactor: () => Nk,
      ILog2: () => yk,
      InverseLerp: () => dk,
      Lerp: () => bk,
      LerpAngle: () => wk,
      MoveTowards: () => Lk,
      MoveTowardsAngle: () => Ok,
      Normalize: () => mk,
      NormalizeRadians: () => Ak,
      OutsideRange: () => ak,
      PercentToRange: () => Sk,
      PingPong: () => ik,
      RandomRange: () => Xk,
      RangeToPercent: () => Ek,
      Repeat: () => fk,
      SmoothStep: () => Yk,
      ToHex: () => ek,
      WithinEpsilon: () => tk
    })
  },
  36768: (kk, Fk, Bk) => {
    function Rk(kk, Fk) {
      const Bk = [];
      for (let Rk = 0; Rk < kk; ++Rk) Bk.push(Fk());
      return Bk
    }

    function tk(kk, Fk) {
      return Rk(kk, Fk)
    }
    Bk.d(Fk, {
      c: () => Rk,
      f: () => tk,
      j: () => Xk
    });
    const ak = ["push", "splice", "pop", "shift", "unshift"];

    function Xk(kk, Fk) {
      const Bk = ak.map((Bk => function(kk, Fk, Bk) {
        const Rk = kk[Fk];
        if ("function" !== typeof Rk) return null;
        const tk = function() {
          const Rk = kk.length,
            ak = tk.previous.apply(kk, arguments);
          return Bk(Fk, Rk), ak
        };
        return Rk.next = tk, tk.previous = Rk, kk[Fk] = tk, () => {
          const Bk = tk.previous;
          if (!Bk) return;
          const Rk = tk.next;
          Rk ? (Bk.next = Rk, Rk.previous = Bk) : (Bk.next = void 0, kk[Fk] = Bk), tk.next = void 0, tk.previous = void 0
        }
      }(kk, Bk, Fk)));
      return () => {
        for (const kk of Bk) kk?.()
      }
    }
  },
  36798: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      d: () => tk
    });
    const Rk = {};

    function tk(kk, Fk) {
      Rk[kk] = Fk
    }

    function ak(kk) {
      return Rk[kk]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);