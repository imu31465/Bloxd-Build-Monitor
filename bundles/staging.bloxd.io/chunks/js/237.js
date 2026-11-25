export const id = 237;
export const ids = [237];
export const modules = {
  37680: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => bu,
      g: () => cu,
      i: () => Yu,
      m: () => Nu
    });
    var su = ju(37498),
      Uu = ju(37496),
      Zu = ju(37519),
      Xu = ju(37532);

    function lu(uu) {
      return Math.pow(uu, Uu.i)
    }

    function qu(uu) {
      return uu <= .04045 ? .0773993808 * uu : Math.pow(.947867299 * (uu + .055), 2.4)
    }

    function fu(uu) {
      return Math.pow(uu, Uu.e)
    }

    function Cu(uu) {
      return uu <= .0031308 ? 12.92 * uu : 1.055 * Math.pow(uu, .41666) - .055
    }
    class bu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = uu, this.g = Eu, this.b = ju
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
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Eu] = this.r, uu[Eu + 1] = this.g, uu[Eu + 2] = this.b, this
      }
      sju(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bu.FromArrayToRef(uu, Eu, this), this
      }
      toColor4() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new cu(this.r, this.g, this.b, uu)
      }
      Osu() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(uu) {
        return new bu(this.r * uu.r, this.g * uu.g, this.b * uu.b)
      }
      multiplyToRef(uu, Eu) {
        return Eu.r = this.r * uu.r, Eu.g = this.g * uu.g, Eu.b = this.b * uu.b, Eu
      }
      multiplyInPlace(uu) {
        return this.r *= uu.r, this.g *= uu.g, this.b *= uu.b, this
      }
      multiplyByFloats(uu, Eu, ju) {
        return new bu(this.r * uu, this.g * Eu, this.b * ju)
      }
      divide(uu) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(uu, Eu) {
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
      minimizeInPlaceFromFloats(uu, Eu, ju) {
        return this.r = Math.min(uu, this.r), this.g = Math.min(Eu, this.g), this.b = Math.min(ju, this.b), this
      }
      maximizeInPlaceFromFloats(uu, Eu, ju) {
        return this.r = Math.max(uu, this.r), this.g = Math.max(Eu, this.g), this.b = Math.max(ju, this.b), this
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
      equalsFloats(uu, Eu, ju) {
        return this.BXu(uu, Eu, ju)
      }
      BXu(uu, Eu, ju) {
        return this.r === uu && this.g === Eu && this.b === ju
      }
      equalsWithEpsilon(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uu.c;
        return (0, Zu.WithinEpsilon)(this.r, uu.r, Eu) && (0, Zu.WithinEpsilon)(this.g, uu.g, Eu) && (0, Zu.WithinEpsilon)(this.b, uu.b, Eu)
      }
      nZ() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(uu) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(uu) {
        return new bu(this.r * uu, this.g * uu, this.b * uu)
      }
      scaleInPlace(uu) {
        return this.r *= uu, this.g *= uu, this.b *= uu, this
      }
      scaleToRef(uu, Eu) {
        return Eu.r = this.r * uu, Eu.g = this.g * uu, Eu.b = this.b * uu, Eu
      }
      scaleAndAddToRef(uu, Eu) {
        return Eu.r += this.r * uu, Eu.g += this.g * uu, Eu.b += this.b * uu, Eu
      }
      clampToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        return ju.r = (0, Zu.Clamp)(this.r, uu, Eu), ju.g = (0, Zu.Clamp)(this.g, uu, Eu), ju.b = (0, Zu.Clamp)(this.b, uu, Eu), ju
      }
      add(uu) {
        return new bu(this.r + uu.r, this.g + uu.g, this.b + uu.b)
      }
      addInPlace(uu) {
        return this.r += uu.r, this.g += uu.g, this.b += uu.b, this
      }
      addInPlaceFromFloats(uu, Eu, ju) {
        return this.r += uu, this.g += Eu, this.b += ju, this
      }
      addToRef(uu, Eu) {
        return Eu.r = this.r + uu.r, Eu.g = this.g + uu.g, Eu.b = this.b + uu.b, Eu
      }
      subtract(uu) {
        return new bu(this.r - uu.r, this.g - uu.g, this.b - uu.b)
      }
      subtractToRef(uu, Eu) {
        return Eu.r = this.r - uu.r, Eu.g = this.g - uu.g, Eu.b = this.b - uu.b, Eu
      }
      Qsu(uu) {
        return this.r -= uu.r, this.g -= uu.g, this.b -= uu.b, this
      }
      subtractFromFloats(uu, Eu, ju) {
        return new bu(this.r - uu, this.g - Eu, this.b - ju)
      }
      subtractFromFloatsToRef(uu, Eu, ju, su) {
        return su.r = this.r - uu, su.g = this.g - Eu, su.b = this.b - ju, su
      }
      clone() {
        return new bu(this.r, this.g, this.b)
      }
      yJ(uu) {
        return this.r = uu.r, this.g = uu.g, this.b = uu.b, this
      }
      T6(uu, Eu, ju) {
        return this.r = uu, this.g = Eu, this.b = ju, this
      }
      set(uu, Eu, ju) {
        return this.T6(uu, Eu, ju)
      }
      k_(uu) {
        return this.r = this.g = this.b = uu, this
      }
      toHexString() {
        const uu = Math.round(255 * this.r),
          Eu = Math.round(255 * this.g),
          ju = Math.round(255 * this.b);
        return "#" + (0, Zu.ToHex)(uu) + (0, Zu.ToHex)(Eu) + (0, Zu.ToHex)(ju)
      }
      fromHexString(uu) {
        return "#" !== uu.substring(0, 1) || 7 !== uu.length || (this.r = parseInt(uu.substring(1, 3), 16) / 255, this.g = parseInt(uu.substring(3, 5), 16) / 255, this.b = parseInt(uu.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new bu)
      }
      toHSVToRef(uu) {
        const Eu = this.r,
          ju = this.g,
          su = this.b,
          Uu = Math.max(Eu, ju, su),
          Zu = Math.min(Eu, ju, su);
        let Xu = 0,
          lu = 0;
        const qu = Uu,
          fu = Uu - Zu;
        return 0 !== Uu && (lu = fu / Uu), Uu != Zu && (Uu == Eu ? (Xu = (ju - su) / fu, ju < su && (Xu += 6)) : Uu == ju ? Xu = (su - Eu) / fu + 2 : Uu == su && (Xu = (Eu - ju) / fu + 4), Xu *= 60), uu.r = Xu, uu.g = lu, uu.b = qu, uu
      }
      toLinearSpace() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = new bu;
        return this.toLinearSpaceToRef(Eu, uu), Eu
      }
      toLinearSpaceToRef(uu) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (uu.r = qu(this.r), uu.g = qu(this.g), uu.b = qu(this.b)) : (uu.r = lu(this.r), uu.g = lu(this.g), uu.b = lu(this.b)), this
      }
      toGammaSpace() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = new bu;
        return this.toGammaSpaceToRef(Eu, uu), Eu
      }
      toGammaSpaceToRef(uu) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (uu.r = Cu(this.r), uu.g = Cu(this.g), uu.b = Cu(this.b)) : (uu.r = fu(this.r), uu.g = fu(this.g), uu.b = fu(this.b)), this
      }
      static HSVtoRGBToRef(uu, Eu, ju, su) {
        const Uu = ju * Eu,
          Zu = uu / 60,
          Xu = Uu * (1 - Math.abs(Zu % 2 - 1));
        let lu = 0,
          qu = 0,
          fu = 0;
        Zu >= 0 && Zu <= 1 ? (lu = Uu, qu = Xu) : Zu >= 1 && Zu <= 2 ? (lu = Xu, qu = Uu) : Zu >= 2 && Zu <= 3 ? (qu = Uu, fu = Xu) : Zu >= 3 && Zu <= 4 ? (qu = Xu, fu = Uu) : Zu >= 4 && Zu <= 5 ? (lu = Xu, fu = Uu) : Zu >= 5 && Zu <= 6 && (lu = Uu, fu = Xu);
        const Cu = ju - Uu;
        return su.r = lu + Cu, su.g = qu + Cu, su.b = fu + Cu, su
      }
      static FromHSV(uu, Eu, ju) {
        const su = new bu(0, 0, 0);
        return bu.HSVtoRGBToRef(uu, Eu, ju, su), su
      }
      static FromHexString(uu) {
        return new bu(0, 0, 0).fromHexString(uu)
      }
      static FromArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new bu(uu[Eu], uu[Eu + 1], uu[Eu + 2])
      }
      static FromArrayToRef(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        ju.r = uu[Eu], ju.g = uu[Eu + 1], ju.b = uu[Eu + 2]
      }
      static FromInts(uu, Eu, ju) {
        return new bu(uu / 255, Eu / 255, ju / 255)
      }
      static Lerp(uu, Eu, ju) {
        const su = new bu(0, 0, 0);
        return bu.LerpToRef(uu, Eu, ju, su), su
      }
      static LerpToRef(uu, Eu, ju, su) {
        su.r = uu.r + (Eu.r - uu.r) * ju, su.g = uu.g + (Eu.g - uu.g) * ju, su.b = uu.b + (Eu.b - uu.b) * ju
      }
      static Hermite(uu, Eu, ju, su, Uu) {
        const Zu = Uu * Uu,
          Xu = Uu * Zu,
          lu = 2 * Xu - 3 * Zu + 1,
          qu = -2 * Xu + 3 * Zu,
          fu = Xu - 2 * Zu + Uu,
          Cu = Xu - Zu,
          cu = uu.r * lu + ju.r * qu + Eu.r * fu + su.r * Cu,
          Nu = uu.g * lu + ju.g * qu + Eu.g * fu + su.g * Cu,
          Ou = uu.b * lu + ju.b * qu + Eu.b * fu + su.b * Cu;
        return new bu(cu, Nu, Ou)
      }
      static Hermite1stDerivative(uu, Eu, ju, su, Uu) {
        const Zu = bu.Black();
        return this.Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu), Zu
      }
      static Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Uu * Uu;
        Zu.r = 6 * (Xu - Uu) * uu.r + (3 * Xu - 4 * Uu + 1) * Eu.r + 6 * (-Xu + Uu) * ju.r + (3 * Xu - 2 * Uu) * su.r, Zu.g = 6 * (Xu - Uu) * uu.g + (3 * Xu - 4 * Uu + 1) * Eu.g + 6 * (-Xu + Uu) * ju.g + (3 * Xu - 2 * Uu) * su.g, Zu.b = 6 * (Xu - Uu) * uu.b + (3 * Xu - 4 * Uu + 1) * Eu.b + 6 * (-Xu + Uu) * ju.b + (3 * Xu - 2 * Uu) * su.b
      }
      static Red() {
        return new bu(1, 0, 0)
      }
      static Green() {
        return new bu(0, 1, 0)
      }
      static Blue() {
        return new bu(0, 0, 1)
      }
      static Black() {
        return new bu(0, 0, 0)
      }
      static get BlackReadOnly() {
        return bu._BlackReadOnly
      }
      static White() {
        return new bu(1, 1, 1)
      }
      static Purple() {
        return new bu(.5, 0, .5)
      }
      static Magenta() {
        return new bu(1, 0, 1)
      }
      static Yellow() {
        return new bu(1, 1, 0)
      }
      static Gray() {
        return new bu(.5, .5, .5)
      }
      static Teal() {
        return new bu(0, 1, 1)
      }
      static Random() {
        return new bu(Math.random(), Math.random(), Math.random())
      }
    }
    bu._V8PerformanceHack = new bu(.5, .5, .5), bu._BlackReadOnly = bu.Black();
    class cu {
      constructor() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = uu, this.g = Eu, this.b = ju, this.a = su
      }
      Osu() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uu[Eu] = this.r, uu[Eu + 1] = this.g, uu[Eu + 2] = this.b, uu[Eu + 3] = this.a, this
      }
      sju(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = uu[Eu], this.g = uu[Eu + 1], this.b = uu[Eu + 2], this.a = uu[Eu + 3], this
      }
      equals(uu) {
        return uu && this.r === uu.r && this.g === uu.g && this.b === uu.b && this.a === uu.a
      }
      add(uu) {
        return new cu(this.r + uu.r, this.g + uu.g, this.b + uu.b, this.a + uu.a)
      }
      addToRef(uu, Eu) {
        return Eu.r = this.r + uu.r, Eu.g = this.g + uu.g, Eu.b = this.b + uu.b, Eu.a = this.a + uu.a, Eu
      }
      addInPlace(uu) {
        return this.r += uu.r, this.g += uu.g, this.b += uu.b, this.a += uu.a, this
      }
      addInPlaceFromFloats(uu, Eu, ju, su) {
        return this.r += uu, this.g += Eu, this.b += ju, this.a += su, this
      }
      subtract(uu) {
        return new cu(this.r - uu.r, this.g - uu.g, this.b - uu.b, this.a - uu.a)
      }
      subtractToRef(uu, Eu) {
        return Eu.r = this.r - uu.r, Eu.g = this.g - uu.g, Eu.b = this.b - uu.b, Eu.a = this.a - uu.a, Eu
      }
      Qsu(uu) {
        return this.r -= uu.r, this.g -= uu.g, this.b -= uu.b, this.a -= uu.a, this
      }
      subtractFromFloats(uu, Eu, ju, su) {
        return new cu(this.r - uu, this.g - Eu, this.b - ju, this.a - su)
      }
      subtractFromFloatsToRef(uu, Eu, ju, su, Uu) {
        return Uu.r = this.r - uu, Uu.g = this.g - Eu, Uu.b = this.b - ju, Uu.a = this.a - su, Uu
      }
      scale(uu) {
        return new cu(this.r * uu, this.g * uu, this.b * uu, this.a * uu)
      }
      scaleInPlace(uu) {
        return this.r *= uu, this.g *= uu, this.b *= uu, this.a *= uu, this
      }
      scaleToRef(uu, Eu) {
        return Eu.r = this.r * uu, Eu.g = this.g * uu, Eu.b = this.b * uu, Eu.a = this.a * uu, Eu
      }
      scaleAndAddToRef(uu, Eu) {
        return Eu.r += this.r * uu, Eu.g += this.g * uu, Eu.b += this.b * uu, Eu.a += this.a * uu, Eu
      }
      clampToRef() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        return ju.r = (0, Zu.Clamp)(this.r, uu, Eu), ju.g = (0, Zu.Clamp)(this.g, uu, Eu), ju.b = (0, Zu.Clamp)(this.b, uu, Eu), ju.a = (0, Zu.Clamp)(this.a, uu, Eu), ju
      }
      multiply(uu) {
        return new cu(this.r * uu.r, this.g * uu.g, this.b * uu.b, this.a * uu.a)
      }
      multiplyToRef(uu, Eu) {
        return Eu.r = this.r * uu.r, Eu.g = this.g * uu.g, Eu.b = this.b * uu.b, Eu.a = this.a * uu.a, Eu
      }
      multiplyInPlace(uu) {
        return this.r *= uu.r, this.g *= uu.g, this.b *= uu.b, this.a *= uu.a, this
      }
      multiplyByFloats(uu, Eu, ju, su) {
        return new cu(this.r * uu, this.g * Eu, this.b * ju, this.a * su)
      }
      divide(uu) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(uu, Eu) {
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
      minimizeInPlaceFromFloats(uu, Eu, ju, su) {
        return this.r = Math.min(uu, this.r), this.g = Math.min(Eu, this.g), this.b = Math.min(ju, this.b), this.a = Math.min(su, this.a), this
      }
      maximizeInPlaceFromFloats(uu, Eu, ju, su) {
        return this.r = Math.max(uu, this.r), this.g = Math.max(Eu, this.g), this.b = Math.max(ju, this.b), this.a = Math.max(su, this.a), this
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
      nZ() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(uu) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uu.c;
        return (0, Zu.WithinEpsilon)(this.r, uu.r, Eu) && (0, Zu.WithinEpsilon)(this.g, uu.g, Eu) && (0, Zu.WithinEpsilon)(this.b, uu.b, Eu) && (0, Zu.WithinEpsilon)(this.a, uu.a, Eu)
      }
      BXu(uu, Eu, ju, su) {
        return this.r === uu && this.g === Eu && this.b === ju && this.a === su
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
        return (new cu).yJ(this)
      }
      yJ(uu) {
        return this.r = uu.r, this.g = uu.g, this.b = uu.b, this.a = uu.a, this
      }
      T6(uu, Eu, ju, su) {
        return this.r = uu, this.g = Eu, this.b = ju, this.a = su, this
      }
      set(uu, Eu, ju, su) {
        return this.T6(uu, Eu, ju, su)
      }
      k_(uu) {
        return this.r = this.g = this.b = this.a = uu, this
      }
      toHexString() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = Math.round(255 * this.r),
          ju = Math.round(255 * this.g),
          su = Math.round(255 * this.b);
        if (uu) return "#" + (0, Zu.ToHex)(Eu) + (0, Zu.ToHex)(ju) + (0, Zu.ToHex)(su);
        const Uu = Math.round(255 * this.a);
        return "#" + (0, Zu.ToHex)(Eu) + (0, Zu.ToHex)(ju) + (0, Zu.ToHex)(su) + (0, Zu.ToHex)(Uu)
      }
      fromHexString(uu) {
        return "#" !== uu.substring(0, 1) || 9 !== uu.length && 7 !== uu.length || (this.r = parseInt(uu.substring(1, 3), 16) / 255, this.g = parseInt(uu.substring(3, 5), 16) / 255, this.b = parseInt(uu.substring(5, 7), 16) / 255, 9 === uu.length && (this.a = parseInt(uu.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = new cu;
        return this.toLinearSpaceToRef(Eu, uu), Eu
      }
      toLinearSpaceToRef(uu) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (uu.r = qu(this.r), uu.g = qu(this.g), uu.b = qu(this.b)) : (uu.r = lu(this.r), uu.g = lu(this.g), uu.b = lu(this.b)), uu.a = this.a, this
      }
      toGammaSpace() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eu = new cu;
        return this.toGammaSpaceToRef(Eu, uu), Eu
      }
      toGammaSpaceToRef(uu) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (uu.r = Cu(this.r), uu.g = Cu(this.g), uu.b = Cu(this.b)) : (uu.r = fu(this.r), uu.g = fu(this.g), uu.b = fu(this.b)), uu.a = this.a, this
      }
      static FromHexString(uu) {
        return "#" !== uu.substring(0, 1) || 9 !== uu.length && 7 !== uu.length ? new cu(0, 0, 0, 0) : new cu(0, 0, 0, 1).fromHexString(uu)
      }
      static Lerp(uu, Eu, ju) {
        return cu.LerpToRef(uu, Eu, ju, new cu)
      }
      static LerpToRef(uu, Eu, ju, su) {
        return su.r = uu.r + (Eu.r - uu.r) * ju, su.g = uu.g + (Eu.g - uu.g) * ju, su.b = uu.b + (Eu.b - uu.b) * ju, su.a = uu.a + (Eu.a - uu.a) * ju, su
      }
      static Hermite(uu, Eu, ju, su, Uu) {
        const Zu = Uu * Uu,
          Xu = Uu * Zu,
          lu = 2 * Xu - 3 * Zu + 1,
          qu = -2 * Xu + 3 * Zu,
          fu = Xu - 2 * Zu + Uu,
          Cu = Xu - Zu,
          bu = uu.r * lu + ju.r * qu + Eu.r * fu + su.r * Cu,
          Nu = uu.g * lu + ju.g * qu + Eu.g * fu + su.g * Cu,
          Ou = uu.b * lu + ju.b * qu + Eu.b * fu + su.b * Cu,
          Yu = uu.a * lu + ju.a * qu + Eu.a * fu + su.a * Cu;
        return new cu(bu, Nu, Ou, Yu)
      }
      static Hermite1stDerivative(uu, Eu, ju, su, Uu) {
        const Zu = new cu;
        return this.Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu), Zu
      }
      static Hermite1stDerivativeToRef(uu, Eu, ju, su, Uu, Zu) {
        const Xu = Uu * Uu;
        Zu.r = 6 * (Xu - Uu) * uu.r + (3 * Xu - 4 * Uu + 1) * Eu.r + 6 * (-Xu + Uu) * ju.r + (3 * Xu - 2 * Uu) * su.r, Zu.g = 6 * (Xu - Uu) * uu.g + (3 * Xu - 4 * Uu + 1) * Eu.g + 6 * (-Xu + Uu) * ju.g + (3 * Xu - 2 * Uu) * su.g, Zu.b = 6 * (Xu - Uu) * uu.b + (3 * Xu - 4 * Uu + 1) * Eu.b + 6 * (-Xu + Uu) * ju.b + (3 * Xu - 2 * Uu) * su.b, Zu.a = 6 * (Xu - Uu) * uu.a + (3 * Xu - 4 * Uu + 1) * Eu.a + 6 * (-Xu + Uu) * ju.a + (3 * Xu - 2 * Uu) * su.a
      }
      static FromColor3(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new cu(uu.r, uu.g, uu.b, Eu)
      }
      static FromArray(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new cu(uu[Eu], uu[Eu + 1], uu[Eu + 2], uu[Eu + 3])
      }
      static FromArrayToRef(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        ju.r = uu[Eu], ju.g = uu[Eu + 1], ju.b = uu[Eu + 2], ju.a = uu[Eu + 3]
      }
      static FromInts(uu, Eu, ju, su) {
        return new cu(uu / 255, Eu / 255, ju / 255, su / 255)
      }
      static CheckColors4(uu, Eu) {
        if (uu.length === 3 * Eu) {
          const Eu = [];
          for (let ju = 0; ju < uu.length; ju += 3) {
            const su = ju / 3 * 4;
            Eu[su] = uu[ju], Eu[su + 1] = uu[ju + 1], Eu[su + 2] = uu[ju + 2], Eu[su + 3] = 1
          }
          return Eu
        }
        return uu
      }
    }
    cu._V8PerformanceHack = new cu(.5, .5, .5, .5);
    class Nu {}
    Nu.Color3 = (0, su.e)(3, bu.Black), Nu.Color4 = (0, su.e)(3, (() => new cu(0, 0, 0, 0)));
    let Ou = !1;

    function Yu() {
      Ou || (Ou = !0, Object.defineProperties(bu.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(cu.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Xu.f)("BABYLON.Color3", bu), (0, Xu.f)("BABYLON.Color4", cu))
    }
  },
  37496: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Zu,
      e: () => su,
      i: () => Uu
    });
    const su = 1 / 2.2,
      Uu = 2.2;
    Math.sqrt(5);
    let Zu = .001
  },
  37519: (uu, Eu, ju) => {
    function su(uu) {
      return parseInt(uu.toString().replace(/\W/g, ""))
    }

    function Uu(uu, Eu) {
      let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(uu - Eu) <= ju
    }

    function Zu(uu, Eu, ju) {
      let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return uu < Eu - su || uu > ju + su
    }

    function Xu(uu, Eu) {
      return uu === Eu ? uu : Math.random() * (Eu - uu) + uu
    }

    function lu(uu, Eu, ju) {
      return uu + (Eu - uu) * ju
    }

    function qu(uu, Eu, ju) {
      let su = hu(Eu - uu, 360);
      return su > 180 && (su -= 360), uu + su * cu(ju)
    }

    function fu(uu, Eu, ju) {
      let su;
      return su = uu != Eu ? cu((ju - uu) / (Eu - uu)) : 0, su
    }

    function Cu(uu, Eu, ju, su, Uu) {
      const Zu = Uu * Uu,
        Xu = Uu * Zu;
      return uu * (2 * Xu - 3 * Zu + 1) + ju * (-2 * Xu + 3 * Zu) + Eu * (Xu - 2 * Zu + Uu) + su * (Xu - Zu)
    }

    function bu(uu, Eu, ju, su, Uu) {
      const Zu = Uu * Uu;
      return 6 * (Zu - Uu) * uu + (3 * Zu - 4 * Uu + 1) * Eu + 6 * (-Zu + Uu) * ju + (3 * Zu - 2 * Uu) * su
    }

    function cu(uu) {
      let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ju, Math.max(Eu, uu))
    }

    function Nu(uu) {
      return uu -= 2 * Math.PI * Math.floor((uu + Math.PI) / (2 * Math.PI))
    }

    function Ou(uu) {
      const Eu = uu.toString(16);
      return uu <= 15 ? ("0" + Eu).toUpperCase() : Eu.toUpperCase()
    }

    function Yu(uu) {
      if (Math.log2) return Math.floor(Math.log2(uu));
      if (uu < 0) return NaN;
      if (0 === uu) return -1 / 0;
      let Eu = 0;
      if (uu < 1) {
        for (; uu < 1;) Eu++, uu *= 2;
        Eu = -Eu
      } else if (uu > 1)
        for (; uu > 1;) Eu++, uu = Math.floor(uu / 2);
      return Eu
    }

    function hu(uu, Eu) {
      return uu - Math.floor(uu / Eu) * Eu
    }

    function Du(uu, Eu, ju) {
      return (uu - Eu) / (ju - Eu)
    }

    function gu(uu, Eu, ju) {
      return uu * (ju - Eu) + Eu
    }

    function Mu(uu, Eu) {
      let ju = hu(Eu - uu, 360);
      return ju > 180 && (ju -= 360), ju
    }

    function eu(uu, Eu) {
      const ju = hu(uu, 2 * Eu);
      return Eu - Math.abs(ju - Eu)
    }

    function Gu(uu, Eu, ju) {
      let su = cu(ju);
      return su = -2 * su * su * su + 3 * su * su, Eu * su + uu * (1 - su)
    }

    function pu(uu, Eu, ju) {
      let su;
      return su = Math.abs(Eu - uu) <= ju ? Eu : uu + Math.sign(Eu - uu) * ju, su
    }

    function wu(uu, Eu, ju) {
      const su = Mu(uu, Eu);
      let Uu;
      return Uu = -ju < su && su < ju ? Eu : pu(uu, Eu = uu + su, ju), Uu
    }

    function Ju(uu, Eu, ju) {
      return (uu - Eu) / (ju - Eu)
    }

    function du(uu, Eu, ju) {
      return (ju - Eu) * uu + Eu
    }

    function au(uu, Eu) {
      const ju = uu % Eu;
      return 0 === ju ? Eu : au(Eu, ju)
    }
    ju.r(Eu), ju.d(Eu, {
      Clamp: () => cu,
      DeltaAngle: () => Mu,
      Denormalize: () => gu,
      ExtractAsInt: () => su,
      Hermite: () => Cu,
      Hermite1stDerivative: () => bu,
      HighestCommonFactor: () => au,
      ILog2: () => Yu,
      InverseLerp: () => fu,
      Lerp: () => lu,
      LerpAngle: () => qu,
      MoveTowards: () => pu,
      MoveTowardsAngle: () => wu,
      Normalize: () => Du,
      NormalizeRadians: () => Nu,
      OutsideRange: () => Zu,
      PercentToRange: () => du,
      PingPong: () => eu,
      RandomRange: () => Xu,
      RangeToPercent: () => Ju,
      Repeat: () => hu,
      SmoothStep: () => Gu,
      ToHex: () => Ou,
      WithinEpsilon: () => Uu
    })
  },
  37498: (uu, Eu, ju) => {
    function su(uu, Eu) {
      const ju = [];
      for (let su = 0; su < uu; ++su) ju.push(Eu());
      return ju
    }

    function Uu(uu, Eu) {
      return su(uu, Eu)
    }
    ju.d(Eu, {
      e: () => su,
      h: () => Uu,
      k: () => Xu
    });
    const Zu = ["push", "splice", "pop", "shift", "unshift"];

    function Xu(uu, Eu) {
      const ju = Zu.map((ju => function(uu, Eu, ju) {
        const su = uu[Eu];
        if ("function" !== typeof su) return null;
        const Uu = function() {
          const su = uu.length,
            Zu = Uu.previous.apply(uu, arguments);
          return ju(Eu, su), Zu
        };
        return su.next = Uu, Uu.previous = su, uu[Eu] = Uu, () => {
          const ju = Uu.previous;
          if (!ju) return;
          const su = Uu.next;
          su ? (ju.next = su, su.previous = ju) : (ju.next = void 0, uu[Eu] = ju), Uu.next = void 0, Uu.previous = void 0
        }
      }(uu, ju, Eu)));
      return () => {
        for (const uu of ju) uu?.()
      }
    }
  },
  37532: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    const su = {};

    function Uu(uu, Eu) {
      su[uu] = Eu
    }

    function Zu(uu) {
      return su[uu]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);