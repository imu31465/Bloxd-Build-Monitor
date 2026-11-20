export const id = 226;
export const ids = [226];
export const modules = {
  36991: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => ru,
      h: () => Bu,
      j: () => pu,
      m: () => xu
    });
    var Eu = yu(36842),
      Ku = yu(36833),
      Qu = yu(36865),
      mu = yu(36871);

    function Ju(uu) {
      return Math.pow(uu, Ku.g)
    }

    function Nu(uu) {
      return uu <= .04045 ? .0773993808 * uu : Math.pow(.947867299 * (uu + .055), 2.4)
    }

    function Xu(uu) {
      return Math.pow(uu, Ku.f)
    }

    function Vu(uu) {
      return uu <= .0031308 ? 12.92 * uu : 1.055 * Math.pow(uu, .41666) - .055
    }
    class ru {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = uu, this.g = Ru, this.b = yu
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let uu = 255 * this.r | 0;
        return uu = 397 * uu ^ 255 * this.g, uu = 397 * uu ^ 255 * this.b, uu
      }
      toArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Ru] = this.r, uu[Ru + 1] = this.g, uu[Ru + 2] = this.b, this
      }
      Tyu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ru.FromArrayToRef(uu, Ru, this), this
      }
      toColor4() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Bu(this.r, this.g, this.b, uu)
      }
      AEu() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(uu) {
        return new ru(this.r * uu.r, this.g * uu.g, this.b * uu.b)
      }
      multiplyToRef(uu, Ru) {
        return Ru.r = this.r * uu.r, Ru.g = this.g * uu.g, Ru.b = this.b * uu.b, Ru
      }
      multiplyInPlace(uu) {
        return this.r *= uu.r, this.g *= uu.g, this.b *= uu.b, this
      }
      multiplyByFloats(uu, Ru, yu) {
        return new ru(this.r * uu, this.g * Ru, this.b * yu)
      }
      divide(uu) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(uu, Ru) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(uu) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(uu) {
        return this.minimizeInPlaceFromFloats(uu.r, uu.g, uu.b)
      }
      maximizeInPlace(uu) {
        return this.maximizeInPlaceFromFloats(uu.r, uu.g, uu.b)
      }
      minimizeInPlaceFromFloats(uu, Ru, yu) {
        return this.r = Math.min(uu, this.r), this.g = Math.min(Ru, this.g), this.b = Math.min(yu, this.b), this
      }
      maximizeInPlaceFromFloats(uu, Ru, yu) {
        return this.r = Math.max(uu, this.r), this.g = Math.max(Ru, this.g), this.b = Math.max(yu, this.b), this
      }
      floorToRef(uu) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(uu) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(uu) {
        return uu && this.r === uu.r && this.g === uu.g && this.b === uu.b
      }
      equalsFloats(uu, Ru, yu) {
        return this.amu(uu, Ru, yu)
      }
      amu(uu, Ru, yu) {
        return this.r === uu && this.g === Ru && this.b === yu
      }
      equalsWithEpsilon(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ku.d;
        return (0, Qu.WithinEpsilon)(this.r, uu.r, Ru) && (0, Qu.WithinEpsilon)(this.g, uu.g, Ru) && (0, Qu.WithinEpsilon)(this.b, uu.b, Ru)
      }
      tm() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(uu) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(uu) {
        return new ru(this.r * uu, this.g * uu, this.b * uu)
      }
      scaleInPlace(uu) {
        return this.r *= uu, this.g *= uu, this.b *= uu, this
      }
      scaleToRef(uu, Ru) {
        return Ru.r = this.r * uu, Ru.g = this.g * uu, Ru.b = this.b * uu, Ru
      }
      scaleAndAddToRef(uu, Ru) {
        return Ru.r += this.r * uu, Ru.g += this.g * uu, Ru.b += this.b * uu, Ru
      }
      clampToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        return yu.r = (0, Qu.Clamp)(this.r, uu, Ru), yu.g = (0, Qu.Clamp)(this.g, uu, Ru), yu.b = (0, Qu.Clamp)(this.b, uu, Ru), yu
      }
      add(uu) {
        return new ru(this.r + uu.r, this.g + uu.g, this.b + uu.b)
      }
      addInPlace(uu) {
        return this.r += uu.r, this.g += uu.g, this.b += uu.b, this
      }
      addInPlaceFromFloats(uu, Ru, yu) {
        return this.r += uu, this.g += Ru, this.b += yu, this
      }
      addToRef(uu, Ru) {
        return Ru.r = this.r + uu.r, Ru.g = this.g + uu.g, Ru.b = this.b + uu.b, Ru
      }
      subtract(uu) {
        return new ru(this.r - uu.r, this.g - uu.g, this.b - uu.b)
      }
      subtractToRef(uu, Ru) {
        return Ru.r = this.r - uu.r, Ru.g = this.g - uu.g, Ru.b = this.b - uu.b, Ru
      }
      oEu(uu) {
        return this.r -= uu.r, this.g -= uu.g, this.b -= uu.b, this
      }
      subtractFromFloats(uu, Ru, yu) {
        return new ru(this.r - uu, this.g - Ru, this.b - yu)
      }
      subtractFromFloatsToRef(uu, Ru, yu, Eu) {
        return Eu.r = this.r - uu, Eu.g = this.g - Ru, Eu.b = this.b - yu, Eu
      }
      clone() {
        return new ru(this.r, this.g, this.b)
      }
      Oyu(uu) {
        return this.r = uu.r, this.g = uu.g, this.b = uu.b, this
      }
      muu(uu, Ru, yu) {
        return this.r = uu, this.g = Ru, this.b = yu, this
      }
      set(uu, Ru, yu) {
        return this.muu(uu, Ru, yu)
      }
      e_(uu) {
        return this.r = this.g = this.b = uu, this
      }
      toHexString() {
        const uu = Math.round(255 * this.r),
          Ru = Math.round(255 * this.g),
          yu = Math.round(255 * this.b);
        return "#" + (0, Qu.ToHex)(uu) + (0, Qu.ToHex)(Ru) + (0, Qu.ToHex)(yu)
      }
      fromHexString(uu) {
        return "#" !== uu.substring(0, 1) || 7 !== uu.length || (this.r = parseInt(uu.substring(1, 3), 16) / 255, this.g = parseInt(uu.substring(3, 5), 16) / 255, this.b = parseInt(uu.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new ru)
      }
      toHSVToRef(uu) {
        const Ru = this.r,
          yu = this.g,
          Eu = this.b,
          Ku = Math.max(Ru, yu, Eu),
          Qu = Math.min(Ru, yu, Eu);
        let mu = 0,
          Ju = 0;
        const Nu = Ku,
          Xu = Ku - Qu;
        return 0 !== Ku && (Ju = Xu / Ku), Ku != Qu && (Ku == Ru ? (mu = (yu - Eu) / Xu, yu < Eu && (mu += 6)) : Ku == yu ? mu = (Eu - Ru) / Xu + 2 : Ku == Eu && (mu = (Ru - yu) / Xu + 4), mu *= 60), uu.r = mu, uu.g = Ju, uu.b = Nu, uu
      }
      toLinearSpace() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = new ru;
        return this.toLinearSpaceToRef(Ru, uu), Ru
      }
      toLinearSpaceToRef(uu) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (uu.r = Nu(this.r), uu.g = Nu(this.g), uu.b = Nu(this.b)) : (uu.r = Ju(this.r), uu.g = Ju(this.g), uu.b = Ju(this.b)), this
      }
      toGammaSpace() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = new ru;
        return this.toGammaSpaceToRef(Ru, uu), Ru
      }
      toGammaSpaceToRef(uu) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (uu.r = Vu(this.r), uu.g = Vu(this.g), uu.b = Vu(this.b)) : (uu.r = Xu(this.r), uu.g = Xu(this.g), uu.b = Xu(this.b)), this
      }
      static HSVtoRGBToRef(uu, Ru, yu, Eu) {
        const Ku = yu * Ru,
          Qu = uu / 60,
          mu = Ku * (1 - Math.abs(Qu % 2 - 1));
        let Ju = 0,
          Nu = 0,
          Xu = 0;
        Qu >= 0 && Qu <= 1 ? (Ju = Ku, Nu = mu) : Qu >= 1 && Qu <= 2 ? (Ju = mu, Nu = Ku) : Qu >= 2 && Qu <= 3 ? (Nu = Ku, Xu = mu) : Qu >= 3 && Qu <= 4 ? (Nu = mu, Xu = Ku) : Qu >= 4 && Qu <= 5 ? (Ju = mu, Xu = Ku) : Qu >= 5 && Qu <= 6 && (Ju = Ku, Xu = mu);
        const Vu = yu - Ku;
        return Eu.r = Ju + Vu, Eu.g = Nu + Vu, Eu.b = Xu + Vu, Eu
      }
      static FromHSV(uu, Ru, yu) {
        const Eu = new ru(0, 0, 0);
        return ru.HSVtoRGBToRef(uu, Ru, yu, Eu), Eu
      }
      static FromHexString(uu) {
        return new ru(0, 0, 0).fromHexString(uu)
      }
      static FromArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ru(uu[Ru], uu[Ru + 1], uu[Ru + 2])
      }
      static FromArrayToRef(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        yu.r = uu[Ru], yu.g = uu[Ru + 1], yu.b = uu[Ru + 2]
      }
      static FromInts(uu, Ru, yu) {
        return new ru(uu / 255, Ru / 255, yu / 255)
      }
      static Lerp(uu, Ru, yu) {
        const Eu = new ru(0, 0, 0);
        return ru.LerpToRef(uu, Ru, yu, Eu), Eu
      }
      static LerpToRef(uu, Ru, yu, Eu) {
        Eu.r = uu.r + (Ru.r - uu.r) * yu, Eu.g = uu.g + (Ru.g - uu.g) * yu, Eu.b = uu.b + (Ru.b - uu.b) * yu
      }
      static Hermite(uu, Ru, yu, Eu, Ku) {
        const Qu = Ku * Ku,
          mu = Ku * Qu,
          Ju = 2 * mu - 3 * Qu + 1,
          Nu = -2 * mu + 3 * Qu,
          Xu = mu - 2 * Qu + Ku,
          Vu = mu - Qu,
          Bu = uu.r * Ju + yu.r * Nu + Ru.r * Xu + Eu.r * Vu,
          xu = uu.g * Ju + yu.g * Nu + Ru.g * Xu + Eu.g * Vu,
          Su = uu.b * Ju + yu.b * Nu + Ru.b * Xu + Eu.b * Vu;
        return new ru(Bu, xu, Su)
      }
      static Hermite1stDerivative(uu, Ru, yu, Eu, Ku) {
        const Qu = ru.Black();
        return this.Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu), Qu
      }
      static Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Ku * Ku;
        Qu.r = 6 * (mu - Ku) * uu.r + (3 * mu - 4 * Ku + 1) * Ru.r + 6 * (-mu + Ku) * yu.r + (3 * mu - 2 * Ku) * Eu.r, Qu.g = 6 * (mu - Ku) * uu.g + (3 * mu - 4 * Ku + 1) * Ru.g + 6 * (-mu + Ku) * yu.g + (3 * mu - 2 * Ku) * Eu.g, Qu.b = 6 * (mu - Ku) * uu.b + (3 * mu - 4 * Ku + 1) * Ru.b + 6 * (-mu + Ku) * yu.b + (3 * mu - 2 * Ku) * Eu.b
      }
      static Red() {
        return new ru(1, 0, 0)
      }
      static Green() {
        return new ru(0, 1, 0)
      }
      static Blue() {
        return new ru(0, 0, 1)
      }
      static Black() {
        return new ru(0, 0, 0)
      }
      static get BlackReadOnly() {
        return ru._BlackReadOnly
      }
      static White() {
        return new ru(1, 1, 1)
      }
      static Purple() {
        return new ru(.5, 0, .5)
      }
      static Magenta() {
        return new ru(1, 0, 1)
      }
      static Yellow() {
        return new ru(1, 1, 0)
      }
      static Gray() {
        return new ru(.5, .5, .5)
      }
      static Teal() {
        return new ru(0, 1, 1)
      }
      static Random() {
        return new ru(Math.random(), Math.random(), Math.random())
      }
    }
    ru._V8PerformanceHack = new ru(.5, .5, .5), ru._BlackReadOnly = ru.Black();
    class Bu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = uu, this.g = Ru, this.b = yu, this.a = Eu
      }
      AEu() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Ru] = this.r, uu[Ru + 1] = this.g, uu[Ru + 2] = this.b, uu[Ru + 3] = this.a, this
      }
      Tyu(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = uu[Ru], this.g = uu[Ru + 1], this.b = uu[Ru + 2], this.a = uu[Ru + 3], this
      }
      equals(uu) {
        return uu && this.r === uu.r && this.g === uu.g && this.b === uu.b && this.a === uu.a
      }
      add(uu) {
        return new Bu(this.r + uu.r, this.g + uu.g, this.b + uu.b, this.a + uu.a)
      }
      addToRef(uu, Ru) {
        return Ru.r = this.r + uu.r, Ru.g = this.g + uu.g, Ru.b = this.b + uu.b, Ru.a = this.a + uu.a, Ru
      }
      addInPlace(uu) {
        return this.r += uu.r, this.g += uu.g, this.b += uu.b, this.a += uu.a, this
      }
      addInPlaceFromFloats(uu, Ru, yu, Eu) {
        return this.r += uu, this.g += Ru, this.b += yu, this.a += Eu, this
      }
      subtract(uu) {
        return new Bu(this.r - uu.r, this.g - uu.g, this.b - uu.b, this.a - uu.a)
      }
      subtractToRef(uu, Ru) {
        return Ru.r = this.r - uu.r, Ru.g = this.g - uu.g, Ru.b = this.b - uu.b, Ru.a = this.a - uu.a, Ru
      }
      oEu(uu) {
        return this.r -= uu.r, this.g -= uu.g, this.b -= uu.b, this.a -= uu.a, this
      }
      subtractFromFloats(uu, Ru, yu, Eu) {
        return new Bu(this.r - uu, this.g - Ru, this.b - yu, this.a - Eu)
      }
      subtractFromFloatsToRef(uu, Ru, yu, Eu, Ku) {
        return Ku.r = this.r - uu, Ku.g = this.g - Ru, Ku.b = this.b - yu, Ku.a = this.a - Eu, Ku
      }
      scale(uu) {
        return new Bu(this.r * uu, this.g * uu, this.b * uu, this.a * uu)
      }
      scaleInPlace(uu) {
        return this.r *= uu, this.g *= uu, this.b *= uu, this.a *= uu, this
      }
      scaleToRef(uu, Ru) {
        return Ru.r = this.r * uu, Ru.g = this.g * uu, Ru.b = this.b * uu, Ru.a = this.a * uu, Ru
      }
      scaleAndAddToRef(uu, Ru) {
        return Ru.r += this.r * uu, Ru.g += this.g * uu, Ru.b += this.b * uu, Ru.a += this.a * uu, Ru
      }
      clampToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        return yu.r = (0, Qu.Clamp)(this.r, uu, Ru), yu.g = (0, Qu.Clamp)(this.g, uu, Ru), yu.b = (0, Qu.Clamp)(this.b, uu, Ru), yu.a = (0, Qu.Clamp)(this.a, uu, Ru), yu
      }
      multiply(uu) {
        return new Bu(this.r * uu.r, this.g * uu.g, this.b * uu.b, this.a * uu.a)
      }
      multiplyToRef(uu, Ru) {
        return Ru.r = this.r * uu.r, Ru.g = this.g * uu.g, Ru.b = this.b * uu.b, Ru.a = this.a * uu.a, Ru
      }
      multiplyInPlace(uu) {
        return this.r *= uu.r, this.g *= uu.g, this.b *= uu.b, this.a *= uu.a, this
      }
      multiplyByFloats(uu, Ru, yu, Eu) {
        return new Bu(this.r * uu, this.g * Ru, this.b * yu, this.a * Eu)
      }
      divide(uu) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(uu, Ru) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(uu) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(uu) {
        return this.r = Math.min(this.r, uu.r), this.g = Math.min(this.g, uu.g), this.b = Math.min(this.b, uu.b), this.a = Math.min(this.a, uu.a), this
      }
      maximizeInPlace(uu) {
        return this.r = Math.max(this.r, uu.r), this.g = Math.max(this.g, uu.g), this.b = Math.max(this.b, uu.b), this.a = Math.max(this.a, uu.a), this
      }
      minimizeInPlaceFromFloats(uu, Ru, yu, Eu) {
        return this.r = Math.min(uu, this.r), this.g = Math.min(Ru, this.g), this.b = Math.min(yu, this.b), this.a = Math.min(Eu, this.a), this
      }
      maximizeInPlaceFromFloats(uu, Ru, yu, Eu) {
        return this.r = Math.max(uu, this.r), this.g = Math.max(Ru, this.g), this.b = Math.max(yu, this.b), this.a = Math.max(Eu, this.a), this
      }
      floorToRef(uu) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(uu) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      tm() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(uu) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ku.d;
        return (0, Qu.WithinEpsilon)(this.r, uu.r, Ru) && (0, Qu.WithinEpsilon)(this.g, uu.g, Ru) && (0, Qu.WithinEpsilon)(this.b, uu.b, Ru) && (0, Qu.WithinEpsilon)(this.a, uu.a, Ru)
      }
      amu(uu, Ru, yu, Eu) {
        return this.r === uu && this.g === Ru && this.b === yu && this.a === Eu
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let uu = 255 * this.r | 0;
        return uu = 397 * uu ^ 255 * this.g, uu = 397 * uu ^ 255 * this.b, uu = 397 * uu ^ 255 * this.a, uu
      }
      clone() {
        return (new Bu).Oyu(this)
      }
      Oyu(uu) {
        return this.r = uu.r, this.g = uu.g, this.b = uu.b, this.a = uu.a, this
      }
      muu(uu, Ru, yu, Eu) {
        return this.r = uu, this.g = Ru, this.b = yu, this.a = Eu, this
      }
      set(uu, Ru, yu, Eu) {
        return this.muu(uu, Ru, yu, Eu)
      }
      e_(uu) {
        return this.r = this.g = this.b = this.a = uu, this
      }
      toHexString() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = Math.round(255 * this.r),
          yu = Math.round(255 * this.g),
          Eu = Math.round(255 * this.b);
        if (uu) return "#" + (0, Qu.ToHex)(Ru) + (0, Qu.ToHex)(yu) + (0, Qu.ToHex)(Eu);
        const Ku = Math.round(255 * this.a);
        return "#" + (0, Qu.ToHex)(Ru) + (0, Qu.ToHex)(yu) + (0, Qu.ToHex)(Eu) + (0, Qu.ToHex)(Ku)
      }
      fromHexString(uu) {
        return "#" !== uu.substring(0, 1) || 9 !== uu.length && 7 !== uu.length || (this.r = parseInt(uu.substring(1, 3), 16) / 255, this.g = parseInt(uu.substring(3, 5), 16) / 255, this.b = parseInt(uu.substring(5, 7), 16) / 255, 9 === uu.length && (this.a = parseInt(uu.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = new Bu;
        return this.toLinearSpaceToRef(Ru, uu), Ru
      }
      toLinearSpaceToRef(uu) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (uu.r = Nu(this.r), uu.g = Nu(this.g), uu.b = Nu(this.b)) : (uu.r = Ju(this.r), uu.g = Ju(this.g), uu.b = Ju(this.b)), uu.a = this.a, this
      }
      toGammaSpace() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Ru = new Bu;
        return this.toGammaSpaceToRef(Ru, uu), Ru
      }
      toGammaSpaceToRef(uu) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (uu.r = Vu(this.r), uu.g = Vu(this.g), uu.b = Vu(this.b)) : (uu.r = Xu(this.r), uu.g = Xu(this.g), uu.b = Xu(this.b)), uu.a = this.a, this
      }
      static FromHexString(uu) {
        return "#" !== uu.substring(0, 1) || 9 !== uu.length && 7 !== uu.length ? new Bu(0, 0, 0, 0) : new Bu(0, 0, 0, 1).fromHexString(uu)
      }
      static Lerp(uu, Ru, yu) {
        return Bu.LerpToRef(uu, Ru, yu, new Bu)
      }
      static LerpToRef(uu, Ru, yu, Eu) {
        return Eu.r = uu.r + (Ru.r - uu.r) * yu, Eu.g = uu.g + (Ru.g - uu.g) * yu, Eu.b = uu.b + (Ru.b - uu.b) * yu, Eu.a = uu.a + (Ru.a - uu.a) * yu, Eu
      }
      static Hermite(uu, Ru, yu, Eu, Ku) {
        const Qu = Ku * Ku,
          mu = Ku * Qu,
          Ju = 2 * mu - 3 * Qu + 1,
          Nu = -2 * mu + 3 * Qu,
          Xu = mu - 2 * Qu + Ku,
          Vu = mu - Qu,
          ru = uu.r * Ju + yu.r * Nu + Ru.r * Xu + Eu.r * Vu,
          xu = uu.g * Ju + yu.g * Nu + Ru.g * Xu + Eu.g * Vu,
          Su = uu.b * Ju + yu.b * Nu + Ru.b * Xu + Eu.b * Vu,
          pu = uu.a * Ju + yu.a * Nu + Ru.a * Xu + Eu.a * Vu;
        return new Bu(ru, xu, Su, pu)
      }
      static Hermite1stDerivative(uu, Ru, yu, Eu, Ku) {
        const Qu = new Bu;
        return this.Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu), Qu
      }
      static Hermite1stDerivativeToRef(uu, Ru, yu, Eu, Ku, Qu) {
        const mu = Ku * Ku;
        Qu.r = 6 * (mu - Ku) * uu.r + (3 * mu - 4 * Ku + 1) * Ru.r + 6 * (-mu + Ku) * yu.r + (3 * mu - 2 * Ku) * Eu.r, Qu.g = 6 * (mu - Ku) * uu.g + (3 * mu - 4 * Ku + 1) * Ru.g + 6 * (-mu + Ku) * yu.g + (3 * mu - 2 * Ku) * Eu.g, Qu.b = 6 * (mu - Ku) * uu.b + (3 * mu - 4 * Ku + 1) * Ru.b + 6 * (-mu + Ku) * yu.b + (3 * mu - 2 * Ku) * Eu.b, Qu.a = 6 * (mu - Ku) * uu.a + (3 * mu - 4 * Ku + 1) * Ru.a + 6 * (-mu + Ku) * yu.a + (3 * mu - 2 * Ku) * Eu.a
      }
      static FromColor3(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Bu(uu.r, uu.g, uu.b, Ru)
      }
      static FromArray(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Bu(uu[Ru], uu[Ru + 1], uu[Ru + 2], uu[Ru + 3])
      }
      static FromArrayToRef(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        yu.r = uu[Ru], yu.g = uu[Ru + 1], yu.b = uu[Ru + 2], yu.a = uu[Ru + 3]
      }
      static FromInts(uu, Ru, yu, Eu) {
        return new Bu(uu / 255, Ru / 255, yu / 255, Eu / 255)
      }
      static CheckColors4(uu, Ru) {
        if (uu.length === 3 * Ru) {
          const Ru = [];
          for (let yu = 0; yu < uu.length; yu += 3) {
            const Eu = yu / 3 * 4;
            Ru[Eu] = uu[yu], Ru[Eu + 1] = uu[yu + 1], Ru[Eu + 2] = uu[yu + 2], Ru[Eu + 3] = 1
          }
          return Ru
        }
        return uu
      }
    }
    Bu._V8PerformanceHack = new Bu(.5, .5, .5, .5);
    class xu {}
    xu.Color3 = (0, Eu.b)(3, ru.Black), xu.Color4 = (0, Eu.b)(3, (() => new Bu(0, 0, 0, 0)));
    let Su = !1;

    function pu() {
      Su || (Su = !0, Object.defineProperties(ru.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Bu.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, mu.c)("BABYLON.Color3", ru), (0, mu.c)("BABYLON.Color4", Bu))
    }
  },
  36833: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Qu,
      f: () => Eu,
      g: () => Ku
    });
    const Eu = 1 / 2.2,
      Ku = 2.2;
    Math.sqrt(5);
    let Qu = .001
  },
  36865: (uu, Ru, yu) => {
    function Eu(uu) {
      return parseInt(uu.toString().replace(/\W/g, ""))
    }

    function Ku(uu, Ru) {
      let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(uu - Ru) <= yu
    }

    function Qu(uu, Ru, yu) {
      let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return uu < Ru - Eu || uu > yu + Eu
    }

    function mu(uu, Ru) {
      return uu === Ru ? uu : Math.random() * (Ru - uu) + uu
    }

    function Ju(uu, Ru, yu) {
      return uu + (Ru - uu) * yu
    }

    function Nu(uu, Ru, yu) {
      let Eu = Tu(Ru - uu, 360);
      return Eu > 180 && (Eu -= 360), uu + Eu * Bu(yu)
    }

    function Xu(uu, Ru, yu) {
      let Eu;
      return Eu = uu != Ru ? Bu((yu - uu) / (Ru - uu)) : 0, Eu
    }

    function Vu(uu, Ru, yu, Eu, Ku) {
      const Qu = Ku * Ku,
        mu = Ku * Qu;
      return uu * (2 * mu - 3 * Qu + 1) + yu * (-2 * mu + 3 * Qu) + Ru * (mu - 2 * Qu + Ku) + Eu * (mu - Qu)
    }

    function ru(uu, Ru, yu, Eu, Ku) {
      const Qu = Ku * Ku;
      return 6 * (Qu - Ku) * uu + (3 * Qu - 4 * Ku + 1) * Ru + 6 * (-Qu + Ku) * yu + (3 * Qu - 2 * Ku) * Eu
    }

    function Bu(uu) {
      let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(yu, Math.max(Ru, uu))
    }

    function xu(uu) {
      return uu -= 2 * Math.PI * Math.floor((uu + Math.PI) / (2 * Math.PI))
    }

    function Su(uu) {
      const Ru = uu.toString(16);
      return uu <= 15 ? ("0" + Ru).toUpperCase() : Ru.toUpperCase()
    }

    function pu(uu) {
      if (Math.log2) return Math.floor(Math.log2(uu));
      if (uu < 0) return NaN;
      if (0 === uu) return -1 / 0;
      let Ru = 0;
      if (uu < 1) {
        for (; uu < 1;) Ru++, uu *= 2;
        Ru = -Ru
      } else if (uu > 1)
        for (; uu > 1;) Ru++, uu = Math.floor(uu / 2);
      return Ru
    }

    function Tu(uu, Ru) {
      return uu - Math.floor(uu / Ru) * Ru
    }

    function Wu(uu, Ru, yu) {
      return (uu - Ru) / (yu - Ru)
    }

    function ju(uu, Ru, yu) {
      return uu * (yu - Ru) + Ru
    }

    function Hu(uu, Ru) {
      let yu = Tu(Ru - uu, 360);
      return yu > 180 && (yu -= 360), yu
    }

    function du(uu, Ru) {
      const yu = Tu(uu, 2 * Ru);
      return Ru - Math.abs(yu - Ru)
    }

    function bu(uu, Ru, yu) {
      let Eu = Bu(yu);
      return Eu = -2 * Eu * Eu * Eu + 3 * Eu * Eu, Ru * Eu + uu * (1 - Eu)
    }

    function Cu(uu, Ru, yu) {
      let Eu;
      return Eu = Math.abs(Ru - uu) <= yu ? Ru : uu + Math.sign(Ru - uu) * yu, Eu
    }

    function ku(uu, Ru, yu) {
      const Eu = Hu(uu, Ru);
      let Ku;
      return Ku = -yu < Eu && Eu < yu ? Ru : Cu(uu, Ru = uu + Eu, yu), Ku
    }

    function eu(uu, Ru, yu) {
      return (uu - Ru) / (yu - Ru)
    }

    function Au(uu, Ru, yu) {
      return (yu - Ru) * uu + Ru
    }

    function Du(uu, Ru) {
      const yu = uu % Ru;
      return 0 === yu ? Ru : Du(Ru, yu)
    }
    yu.r(Ru), yu.d(Ru, {
      Clamp: () => Bu,
      DeltaAngle: () => Hu,
      Denormalize: () => ju,
      ExtractAsInt: () => Eu,
      Hermite: () => Vu,
      Hermite1stDerivative: () => ru,
      HighestCommonFactor: () => Du,
      ILog2: () => pu,
      InverseLerp: () => Xu,
      Lerp: () => Ju,
      LerpAngle: () => Nu,
      MoveTowards: () => Cu,
      MoveTowardsAngle: () => ku,
      Normalize: () => Wu,
      NormalizeRadians: () => xu,
      OutsideRange: () => Qu,
      PercentToRange: () => Au,
      PingPong: () => du,
      RandomRange: () => mu,
      RangeToPercent: () => eu,
      Repeat: () => Tu,
      SmoothStep: () => bu,
      ToHex: () => Su,
      WithinEpsilon: () => Ku
    })
  },
  36842: (uu, Ru, yu) => {
    function Eu(uu, Ru) {
      const yu = [];
      for (let Eu = 0; Eu < uu; ++Eu) yu.push(Ru());
      return yu
    }

    function Ku(uu, Ru) {
      return Eu(uu, Ru)
    }
    yu.d(Ru, {
      b: () => Eu,
      c: () => Ku,
      e: () => mu
    });
    const Qu = ["push", "splice", "pop", "shift", "unshift"];

    function mu(uu, Ru) {
      const yu = Qu.map((yu => function(uu, Ru, yu) {
        const Eu = uu[Ru];
        if ("function" !== typeof Eu) return null;
        const Ku = function() {
          const Eu = uu.length,
            Qu = Ku.previous.apply(uu, arguments);
          return yu(Ru, Eu), Qu
        };
        return Eu.next = Ku, Ku.previous = Eu, uu[Ru] = Ku, () => {
          const yu = Ku.previous;
          if (!yu) return;
          const Eu = Ku.next;
          Eu ? (yu.next = Eu, Eu.previous = yu) : (yu.next = void 0, uu[Ru] = yu), Ku.next = void 0, Ku.previous = void 0
        }
      }(uu, yu, Ru)));
      return () => {
        for (const uu of yu) uu?.()
      }
    }
  },
  36871: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => Ku
    });
    const Eu = {};

    function Ku(uu, Ru) {
      Eu[uu] = Ru
    }

    function Qu(uu) {
      return Eu[uu]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);