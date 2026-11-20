export const id = 227;
export const ids = [227];
export const modules = {
  37093: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => AT,
      g: () => CT,
      j: () => tT,
      k: () => jT
    });
    var lT = cT(36910),
      MT = cT(36901),
      KT = cT(36937),
      OT = cT(36949);

    function yT(TT) {
      return Math.pow(TT, MT.g)
    }

    function fT(TT) {
      return TT <= .04045 ? .0773993808 * TT : Math.pow(.947867299 * (TT + .055), 2.4)
    }

    function xT(TT) {
      return Math.pow(TT, MT.c)
    }

    function IT(TT) {
      return TT <= .0031308 ? 12.92 * TT : 1.055 * Math.pow(TT, .41666) - .055
    }
    class AT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = TT, this.g = kT, this.b = cT
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let TT = 255 * this.r | 0;
        return TT = 397 * TT ^ 255 * this.g, TT = 397 * TT ^ 255 * this.b, TT
      }
      toArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[kT] = this.r, TT[kT + 1] = this.g, TT[kT + 2] = this.b, this
      }
      xkT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return AT.FromArrayToRef(TT, kT, this), this
      }
      toColor4() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new CT(this.r, this.g, this.b, TT)
      }
      acT() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(TT) {
        return new AT(this.r * TT.r, this.g * TT.g, this.b * TT.b)
      }
      multiplyToRef(TT, kT) {
        return kT.r = this.r * TT.r, kT.g = this.g * TT.g, kT.b = this.b * TT.b, kT
      }
      multiplyInPlace(TT) {
        return this.r *= TT.r, this.g *= TT.g, this.b *= TT.b, this
      }
      multiplyByFloats(TT, kT, cT) {
        return new AT(this.r * TT, this.g * kT, this.b * cT)
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(TT, kT) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(TT) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(TT) {
        return this.minimizeInPlaceFromFloats(TT.r, TT.g, TT.b)
      }
      maximizeInPlace(TT) {
        return this.maximizeInPlaceFromFloats(TT.r, TT.g, TT.b)
      }
      minimizeInPlaceFromFloats(TT, kT, cT) {
        return this.r = Math.min(TT, this.r), this.g = Math.min(kT, this.g), this.b = Math.min(cT, this.b), this
      }
      maximizeInPlaceFromFloats(TT, kT, cT) {
        return this.r = Math.max(TT, this.r), this.g = Math.max(kT, this.g), this.b = Math.max(cT, this.b), this
      }
      floorToRef(TT) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(TT) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(TT) {
        return TT && this.r === TT.r && this.g === TT.g && this.b === TT.b
      }
      equalsFloats(TT, kT, cT) {
        return this.qKT(TT, kT, cT)
      }
      qKT(TT, kT, cT) {
        return this.r === TT && this.g === kT && this.b === cT
      }
      equalsWithEpsilon(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT.b;
        return (0, KT.WithinEpsilon)(this.r, TT.r, kT) && (0, KT.WithinEpsilon)(this.g, TT.g, kT) && (0, KT.WithinEpsilon)(this.b, TT.b, kT)
      }
      rc() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(TT) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(TT) {
        return new AT(this.r * TT, this.g * TT, this.b * TT)
      }
      scaleInPlace(TT) {
        return this.r *= TT, this.g *= TT, this.b *= TT, this
      }
      scaleToRef(TT, kT) {
        return kT.r = this.r * TT, kT.g = this.g * TT, kT.b = this.b * TT, kT
      }
      scaleAndAddToRef(TT, kT) {
        return kT.r += this.r * TT, kT.g += this.g * TT, kT.b += this.b * TT, kT
      }
      clampToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        return cT.r = (0, KT.Clamp)(this.r, TT, kT), cT.g = (0, KT.Clamp)(this.g, TT, kT), cT.b = (0, KT.Clamp)(this.b, TT, kT), cT
      }
      add(TT) {
        return new AT(this.r + TT.r, this.g + TT.g, this.b + TT.b)
      }
      addInPlace(TT) {
        return this.r += TT.r, this.g += TT.g, this.b += TT.b, this
      }
      addInPlaceFromFloats(TT, kT, cT) {
        return this.r += TT, this.g += kT, this.b += cT, this
      }
      addToRef(TT, kT) {
        return kT.r = this.r + TT.r, kT.g = this.g + TT.g, kT.b = this.b + TT.b, kT
      }
      subtract(TT) {
        return new AT(this.r - TT.r, this.g - TT.g, this.b - TT.b)
      }
      subtractToRef(TT, kT) {
        return kT.r = this.r - TT.r, kT.g = this.g - TT.g, kT.b = this.b - TT.b, kT
      }
      gcT(TT) {
        return this.r -= TT.r, this.g -= TT.g, this.b -= TT.b, this
      }
      subtractFromFloats(TT, kT, cT) {
        return new AT(this.r - TT, this.g - kT, this.b - cT)
      }
      subtractFromFloatsToRef(TT, kT, cT, lT) {
        return lT.r = this.r - TT, lT.g = this.g - kT, lT.b = this.b - cT, lT
      }
      clone() {
        return new AT(this.r, this.g, this.b)
      }
      UkT(TT) {
        return this.r = TT.r, this.g = TT.g, this.b = TT.b, this
      }
      I5(TT, kT, cT) {
        return this.r = TT, this.g = kT, this.b = cT, this
      }
      set(TT, kT, cT) {
        return this.I5(TT, kT, cT)
      }
      Xs(TT) {
        return this.r = this.g = this.b = TT, this
      }
      toHexString() {
        const TT = Math.round(255 * this.r),
          kT = Math.round(255 * this.g),
          cT = Math.round(255 * this.b);
        return "#" + (0, KT.ToHex)(TT) + (0, KT.ToHex)(kT) + (0, KT.ToHex)(cT)
      }
      fromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 7 !== TT.length || (this.r = parseInt(TT.substring(1, 3), 16) / 255, this.g = parseInt(TT.substring(3, 5), 16) / 255, this.b = parseInt(TT.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new AT)
      }
      toHSVToRef(TT) {
        const kT = this.r,
          cT = this.g,
          lT = this.b,
          MT = Math.max(kT, cT, lT),
          KT = Math.min(kT, cT, lT);
        let OT = 0,
          yT = 0;
        const fT = MT,
          xT = MT - KT;
        return 0 !== MT && (yT = xT / MT), MT != KT && (MT == kT ? (OT = (cT - lT) / xT, cT < lT && (OT += 6)) : MT == cT ? OT = (lT - kT) / xT + 2 : MT == lT && (OT = (kT - cT) / xT + 4), OT *= 60), TT.r = OT, TT.g = yT, TT.b = fT, TT
      }
      toLinearSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = new AT;
        return this.toLinearSpaceToRef(kT, TT), kT
      }
      toLinearSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = fT(this.r), TT.g = fT(this.g), TT.b = fT(this.b)) : (TT.r = yT(this.r), TT.g = yT(this.g), TT.b = yT(this.b)), this
      }
      toGammaSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = new AT;
        return this.toGammaSpaceToRef(kT, TT), kT
      }
      toGammaSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = IT(this.r), TT.g = IT(this.g), TT.b = IT(this.b)) : (TT.r = xT(this.r), TT.g = xT(this.g), TT.b = xT(this.b)), this
      }
      static HSVtoRGBToRef(TT, kT, cT, lT) {
        const MT = cT * kT,
          KT = TT / 60,
          OT = MT * (1 - Math.abs(KT % 2 - 1));
        let yT = 0,
          fT = 0,
          xT = 0;
        KT >= 0 && KT <= 1 ? (yT = MT, fT = OT) : KT >= 1 && KT <= 2 ? (yT = OT, fT = MT) : KT >= 2 && KT <= 3 ? (fT = MT, xT = OT) : KT >= 3 && KT <= 4 ? (fT = OT, xT = MT) : KT >= 4 && KT <= 5 ? (yT = OT, xT = MT) : KT >= 5 && KT <= 6 && (yT = MT, xT = OT);
        const IT = cT - MT;
        return lT.r = yT + IT, lT.g = fT + IT, lT.b = xT + IT, lT
      }
      static FromHSV(TT, kT, cT) {
        const lT = new AT(0, 0, 0);
        return AT.HSVtoRGBToRef(TT, kT, cT, lT), lT
      }
      static FromHexString(TT) {
        return new AT(0, 0, 0).fromHexString(TT)
      }
      static FromArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new AT(TT[kT], TT[kT + 1], TT[kT + 2])
      }
      static FromArrayToRef(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        cT.r = TT[kT], cT.g = TT[kT + 1], cT.b = TT[kT + 2]
      }
      static FromInts(TT, kT, cT) {
        return new AT(TT / 255, kT / 255, cT / 255)
      }
      static Lerp(TT, kT, cT) {
        const lT = new AT(0, 0, 0);
        return AT.LerpToRef(TT, kT, cT, lT), lT
      }
      static LerpToRef(TT, kT, cT, lT) {
        lT.r = TT.r + (kT.r - TT.r) * cT, lT.g = TT.g + (kT.g - TT.g) * cT, lT.b = TT.b + (kT.b - TT.b) * cT
      }
      static Hermite(TT, kT, cT, lT, MT) {
        const KT = MT * MT,
          OT = MT * KT,
          yT = 2 * OT - 3 * KT + 1,
          fT = -2 * OT + 3 * KT,
          xT = OT - 2 * KT + MT,
          IT = OT - KT,
          CT = TT.r * yT + cT.r * fT + kT.r * xT + lT.r * IT,
          jT = TT.g * yT + cT.g * fT + kT.g * xT + lT.g * IT,
          vT = TT.b * yT + cT.b * fT + kT.b * xT + lT.b * IT;
        return new AT(CT, jT, vT)
      }
      static Hermite1stDerivative(TT, kT, cT, lT, MT) {
        const KT = AT.Black();
        return this.Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT), KT
      }
      static Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT) {
        const OT = MT * MT;
        KT.r = 6 * (OT - MT) * TT.r + (3 * OT - 4 * MT + 1) * kT.r + 6 * (-OT + MT) * cT.r + (3 * OT - 2 * MT) * lT.r, KT.g = 6 * (OT - MT) * TT.g + (3 * OT - 4 * MT + 1) * kT.g + 6 * (-OT + MT) * cT.g + (3 * OT - 2 * MT) * lT.g, KT.b = 6 * (OT - MT) * TT.b + (3 * OT - 4 * MT + 1) * kT.b + 6 * (-OT + MT) * cT.b + (3 * OT - 2 * MT) * lT.b
      }
      static Red() {
        return new AT(1, 0, 0)
      }
      static Green() {
        return new AT(0, 1, 0)
      }
      static Blue() {
        return new AT(0, 0, 1)
      }
      static Black() {
        return new AT(0, 0, 0)
      }
      static get BlackReadOnly() {
        return AT._BlackReadOnly
      }
      static White() {
        return new AT(1, 1, 1)
      }
      static Purple() {
        return new AT(.5, 0, .5)
      }
      static Magenta() {
        return new AT(1, 0, 1)
      }
      static Yellow() {
        return new AT(1, 1, 0)
      }
      static Gray() {
        return new AT(.5, .5, .5)
      }
      static Teal() {
        return new AT(0, 1, 1)
      }
      static Random() {
        return new AT(Math.random(), Math.random(), Math.random())
      }
    }
    AT._V8PerformanceHack = new AT(.5, .5, .5), AT._BlackReadOnly = AT.Black();
    class CT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = TT, this.g = kT, this.b = cT, this.a = lT
      }
      acT() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[kT] = this.r, TT[kT + 1] = this.g, TT[kT + 2] = this.b, TT[kT + 3] = this.a, this
      }
      xkT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = TT[kT], this.g = TT[kT + 1], this.b = TT[kT + 2], this.a = TT[kT + 3], this
      }
      equals(TT) {
        return TT && this.r === TT.r && this.g === TT.g && this.b === TT.b && this.a === TT.a
      }
      add(TT) {
        return new CT(this.r + TT.r, this.g + TT.g, this.b + TT.b, this.a + TT.a)
      }
      addToRef(TT, kT) {
        return kT.r = this.r + TT.r, kT.g = this.g + TT.g, kT.b = this.b + TT.b, kT.a = this.a + TT.a, kT
      }
      addInPlace(TT) {
        return this.r += TT.r, this.g += TT.g, this.b += TT.b, this.a += TT.a, this
      }
      addInPlaceFromFloats(TT, kT, cT, lT) {
        return this.r += TT, this.g += kT, this.b += cT, this.a += lT, this
      }
      subtract(TT) {
        return new CT(this.r - TT.r, this.g - TT.g, this.b - TT.b, this.a - TT.a)
      }
      subtractToRef(TT, kT) {
        return kT.r = this.r - TT.r, kT.g = this.g - TT.g, kT.b = this.b - TT.b, kT.a = this.a - TT.a, kT
      }
      gcT(TT) {
        return this.r -= TT.r, this.g -= TT.g, this.b -= TT.b, this.a -= TT.a, this
      }
      subtractFromFloats(TT, kT, cT, lT) {
        return new CT(this.r - TT, this.g - kT, this.b - cT, this.a - lT)
      }
      subtractFromFloatsToRef(TT, kT, cT, lT, MT) {
        return MT.r = this.r - TT, MT.g = this.g - kT, MT.b = this.b - cT, MT.a = this.a - lT, MT
      }
      scale(TT) {
        return new CT(this.r * TT, this.g * TT, this.b * TT, this.a * TT)
      }
      scaleInPlace(TT) {
        return this.r *= TT, this.g *= TT, this.b *= TT, this.a *= TT, this
      }
      scaleToRef(TT, kT) {
        return kT.r = this.r * TT, kT.g = this.g * TT, kT.b = this.b * TT, kT.a = this.a * TT, kT
      }
      scaleAndAddToRef(TT, kT) {
        return kT.r += this.r * TT, kT.g += this.g * TT, kT.b += this.b * TT, kT.a += this.a * TT, kT
      }
      clampToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        return cT.r = (0, KT.Clamp)(this.r, TT, kT), cT.g = (0, KT.Clamp)(this.g, TT, kT), cT.b = (0, KT.Clamp)(this.b, TT, kT), cT.a = (0, KT.Clamp)(this.a, TT, kT), cT
      }
      multiply(TT) {
        return new CT(this.r * TT.r, this.g * TT.g, this.b * TT.b, this.a * TT.a)
      }
      multiplyToRef(TT, kT) {
        return kT.r = this.r * TT.r, kT.g = this.g * TT.g, kT.b = this.b * TT.b, kT.a = this.a * TT.a, kT
      }
      multiplyInPlace(TT) {
        return this.r *= TT.r, this.g *= TT.g, this.b *= TT.b, this.a *= TT.a, this
      }
      multiplyByFloats(TT, kT, cT, lT) {
        return new CT(this.r * TT, this.g * kT, this.b * cT, this.a * lT)
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(TT, kT) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(TT) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(TT) {
        return this.r = Math.min(this.r, TT.r), this.g = Math.min(this.g, TT.g), this.b = Math.min(this.b, TT.b), this.a = Math.min(this.a, TT.a), this
      }
      maximizeInPlace(TT) {
        return this.r = Math.max(this.r, TT.r), this.g = Math.max(this.g, TT.g), this.b = Math.max(this.b, TT.b), this.a = Math.max(this.a, TT.a), this
      }
      minimizeInPlaceFromFloats(TT, kT, cT, lT) {
        return this.r = Math.min(TT, this.r), this.g = Math.min(kT, this.g), this.b = Math.min(cT, this.b), this.a = Math.min(lT, this.a), this
      }
      maximizeInPlaceFromFloats(TT, kT, cT, lT) {
        return this.r = Math.max(TT, this.r), this.g = Math.max(kT, this.g), this.b = Math.max(cT, this.b), this.a = Math.max(lT, this.a), this
      }
      floorToRef(TT) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(TT) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      rc() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(TT) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : MT.b;
        return (0, KT.WithinEpsilon)(this.r, TT.r, kT) && (0, KT.WithinEpsilon)(this.g, TT.g, kT) && (0, KT.WithinEpsilon)(this.b, TT.b, kT) && (0, KT.WithinEpsilon)(this.a, TT.a, kT)
      }
      qKT(TT, kT, cT, lT) {
        return this.r === TT && this.g === kT && this.b === cT && this.a === lT
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let TT = 255 * this.r | 0;
        return TT = 397 * TT ^ 255 * this.g, TT = 397 * TT ^ 255 * this.b, TT = 397 * TT ^ 255 * this.a, TT
      }
      clone() {
        return (new CT).UkT(this)
      }
      UkT(TT) {
        return this.r = TT.r, this.g = TT.g, this.b = TT.b, this.a = TT.a, this
      }
      I5(TT, kT, cT, lT) {
        return this.r = TT, this.g = kT, this.b = cT, this.a = lT, this
      }
      set(TT, kT, cT, lT) {
        return this.I5(TT, kT, cT, lT)
      }
      Xs(TT) {
        return this.r = this.g = this.b = this.a = TT, this
      }
      toHexString() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = Math.round(255 * this.r),
          cT = Math.round(255 * this.g),
          lT = Math.round(255 * this.b);
        if (TT) return "#" + (0, KT.ToHex)(kT) + (0, KT.ToHex)(cT) + (0, KT.ToHex)(lT);
        const MT = Math.round(255 * this.a);
        return "#" + (0, KT.ToHex)(kT) + (0, KT.ToHex)(cT) + (0, KT.ToHex)(lT) + (0, KT.ToHex)(MT)
      }
      fromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 9 !== TT.length && 7 !== TT.length || (this.r = parseInt(TT.substring(1, 3), 16) / 255, this.g = parseInt(TT.substring(3, 5), 16) / 255, this.b = parseInt(TT.substring(5, 7), 16) / 255, 9 === TT.length && (this.a = parseInt(TT.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = new CT;
        return this.toLinearSpaceToRef(kT, TT), kT
      }
      toLinearSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = fT(this.r), TT.g = fT(this.g), TT.b = fT(this.b)) : (TT.r = yT(this.r), TT.g = yT(this.g), TT.b = yT(this.b)), TT.a = this.a, this
      }
      toGammaSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const kT = new CT;
        return this.toGammaSpaceToRef(kT, TT), kT
      }
      toGammaSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = IT(this.r), TT.g = IT(this.g), TT.b = IT(this.b)) : (TT.r = xT(this.r), TT.g = xT(this.g), TT.b = xT(this.b)), TT.a = this.a, this
      }
      static FromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 9 !== TT.length && 7 !== TT.length ? new CT(0, 0, 0, 0) : new CT(0, 0, 0, 1).fromHexString(TT)
      }
      static Lerp(TT, kT, cT) {
        return CT.LerpToRef(TT, kT, cT, new CT)
      }
      static LerpToRef(TT, kT, cT, lT) {
        return lT.r = TT.r + (kT.r - TT.r) * cT, lT.g = TT.g + (kT.g - TT.g) * cT, lT.b = TT.b + (kT.b - TT.b) * cT, lT.a = TT.a + (kT.a - TT.a) * cT, lT
      }
      static Hermite(TT, kT, cT, lT, MT) {
        const KT = MT * MT,
          OT = MT * KT,
          yT = 2 * OT - 3 * KT + 1,
          fT = -2 * OT + 3 * KT,
          xT = OT - 2 * KT + MT,
          IT = OT - KT,
          AT = TT.r * yT + cT.r * fT + kT.r * xT + lT.r * IT,
          jT = TT.g * yT + cT.g * fT + kT.g * xT + lT.g * IT,
          vT = TT.b * yT + cT.b * fT + kT.b * xT + lT.b * IT,
          tT = TT.a * yT + cT.a * fT + kT.a * xT + lT.a * IT;
        return new CT(AT, jT, vT, tT)
      }
      static Hermite1stDerivative(TT, kT, cT, lT, MT) {
        const KT = new CT;
        return this.Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT), KT
      }
      static Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT) {
        const OT = MT * MT;
        KT.r = 6 * (OT - MT) * TT.r + (3 * OT - 4 * MT + 1) * kT.r + 6 * (-OT + MT) * cT.r + (3 * OT - 2 * MT) * lT.r, KT.g = 6 * (OT - MT) * TT.g + (3 * OT - 4 * MT + 1) * kT.g + 6 * (-OT + MT) * cT.g + (3 * OT - 2 * MT) * lT.g, KT.b = 6 * (OT - MT) * TT.b + (3 * OT - 4 * MT + 1) * kT.b + 6 * (-OT + MT) * cT.b + (3 * OT - 2 * MT) * lT.b, KT.a = 6 * (OT - MT) * TT.a + (3 * OT - 4 * MT + 1) * kT.a + 6 * (-OT + MT) * cT.a + (3 * OT - 2 * MT) * lT.a
      }
      static FromColor3(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new CT(TT.r, TT.g, TT.b, kT)
      }
      static FromArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new CT(TT[kT], TT[kT + 1], TT[kT + 2], TT[kT + 3])
      }
      static FromArrayToRef(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        cT.r = TT[kT], cT.g = TT[kT + 1], cT.b = TT[kT + 2], cT.a = TT[kT + 3]
      }
      static FromInts(TT, kT, cT, lT) {
        return new CT(TT / 255, kT / 255, cT / 255, lT / 255)
      }
      static CheckColors4(TT, kT) {
        if (TT.length === 3 * kT) {
          const kT = [];
          for (let cT = 0; cT < TT.length; cT += 3) {
            const lT = cT / 3 * 4;
            kT[lT] = TT[cT], kT[lT + 1] = TT[cT + 1], kT[lT + 2] = TT[cT + 2], kT[lT + 3] = 1
          }
          return kT
        }
        return TT
      }
    }
    CT._V8PerformanceHack = new CT(.5, .5, .5, .5);
    class jT {}
    jT.Color3 = (0, lT.e)(3, AT.Black), jT.Color4 = (0, lT.e)(3, (() => new CT(0, 0, 0, 0)));
    let vT = !1;

    function tT() {
      vT || (vT = !0, Object.defineProperties(AT.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(CT.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, OT.g)("BABYLON.Color3", AT), (0, OT.g)("BABYLON.Color4", CT))
    }
  },
  36901: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => KT,
      c: () => lT,
      g: () => MT
    });
    const lT = 1 / 2.2,
      MT = 2.2;
    Math.sqrt(5);
    let KT = .001
  },
  36937: (TT, kT, cT) => {
    function lT(TT) {
      return parseInt(TT.toString().replace(/\W/g, ""))
    }

    function MT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(TT - kT) <= cT
    }

    function KT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return TT < kT - lT || TT > cT + lT
    }

    function OT(TT, kT) {
      return TT === kT ? TT : Math.random() * (kT - TT) + TT
    }

    function yT(TT, kT, cT) {
      return TT + (kT - TT) * cT
    }

    function fT(TT, kT, cT) {
      let lT = hT(kT - TT, 360);
      return lT > 180 && (lT -= 360), TT + lT * CT(cT)
    }

    function xT(TT, kT, cT) {
      let lT;
      return lT = TT != kT ? CT((cT - TT) / (kT - TT)) : 0, lT
    }

    function IT(TT, kT, cT, lT, MT) {
      const KT = MT * MT,
        OT = MT * KT;
      return TT * (2 * OT - 3 * KT + 1) + cT * (-2 * OT + 3 * KT) + kT * (OT - 2 * KT + MT) + lT * (OT - KT)
    }

    function AT(TT, kT, cT, lT, MT) {
      const KT = MT * MT;
      return 6 * (KT - MT) * TT + (3 * KT - 4 * MT + 1) * kT + 6 * (-KT + MT) * cT + (3 * KT - 2 * MT) * lT
    }

    function CT(TT) {
      let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(cT, Math.max(kT, TT))
    }

    function jT(TT) {
      return TT -= 2 * Math.PI * Math.floor((TT + Math.PI) / (2 * Math.PI))
    }

    function vT(TT) {
      const kT = TT.toString(16);
      return TT <= 15 ? ("0" + kT).toUpperCase() : kT.toUpperCase()
    }

    function tT(TT) {
      if (Math.log2) return Math.floor(Math.log2(TT));
      if (TT < 0) return NaN;
      if (0 === TT) return -1 / 0;
      let kT = 0;
      if (TT < 1) {
        for (; TT < 1;) kT++, TT *= 2;
        kT = -kT
      } else if (TT > 1)
        for (; TT > 1;) kT++, TT = Math.floor(TT / 2);
      return kT
    }

    function hT(TT, kT) {
      return TT - Math.floor(TT / kT) * kT
    }

    function NT(TT, kT, cT) {
      return (TT - kT) / (cT - kT)
    }

    function QT(TT, kT, cT) {
      return TT * (cT - kT) + kT
    }

    function ST(TT, kT) {
      let cT = hT(kT - TT, 360);
      return cT > 180 && (cT -= 360), cT
    }

    function DT(TT, kT) {
      const cT = hT(TT, 2 * kT);
      return kT - Math.abs(cT - kT)
    }

    function aT(TT, kT, cT) {
      let lT = CT(cT);
      return lT = -2 * lT * lT * lT + 3 * lT * lT, kT * lT + TT * (1 - lT)
    }

    function FT(TT, kT, cT) {
      let lT;
      return lT = Math.abs(kT - TT) <= cT ? kT : TT + Math.sign(kT - TT) * cT, lT
    }

    function rT(TT, kT, cT) {
      const lT = ST(TT, kT);
      let MT;
      return MT = -cT < lT && lT < cT ? kT : FT(TT, kT = TT + lT, cT), MT
    }

    function PT(TT, kT, cT) {
      return (TT - kT) / (cT - kT)
    }

    function wT(TT, kT, cT) {
      return (cT - kT) * TT + kT
    }

    function mT(TT, kT) {
      const cT = TT % kT;
      return 0 === cT ? kT : mT(kT, cT)
    }
    cT.r(kT), cT.d(kT, {
      Clamp: () => CT,
      DeltaAngle: () => ST,
      Denormalize: () => QT,
      ExtractAsInt: () => lT,
      Hermite: () => IT,
      Hermite1stDerivative: () => AT,
      HighestCommonFactor: () => mT,
      ILog2: () => tT,
      InverseLerp: () => xT,
      Lerp: () => yT,
      LerpAngle: () => fT,
      MoveTowards: () => FT,
      MoveTowardsAngle: () => rT,
      Normalize: () => NT,
      NormalizeRadians: () => jT,
      OutsideRange: () => KT,
      PercentToRange: () => wT,
      PingPong: () => DT,
      RandomRange: () => OT,
      RangeToPercent: () => PT,
      Repeat: () => hT,
      SmoothStep: () => aT,
      ToHex: () => vT,
      WithinEpsilon: () => MT
    })
  },
  36910: (TT, kT, cT) => {
    function lT(TT, kT) {
      const cT = [];
      for (let lT = 0; lT < TT; ++lT) cT.push(kT());
      return cT
    }

    function MT(TT, kT) {
      return lT(TT, kT)
    }
    cT.d(kT, {
      e: () => lT,
      f: () => MT,
      g: () => OT
    });
    const KT = ["push", "splice", "pop", "shift", "unshift"];

    function OT(TT, kT) {
      const cT = KT.map((cT => function(TT, kT, cT) {
        const lT = TT[kT];
        if ("function" !== typeof lT) return null;
        const MT = function() {
          const lT = TT.length,
            KT = MT.previous.apply(TT, arguments);
          return cT(kT, lT), KT
        };
        return lT.next = MT, MT.previous = lT, TT[kT] = MT, () => {
          const cT = MT.previous;
          if (!cT) return;
          const lT = MT.next;
          lT ? (cT.next = lT, lT.previous = cT) : (cT.next = void 0, TT[kT] = cT), MT.next = void 0, MT.previous = void 0
        }
      }(TT, cT, kT)));
      return () => {
        for (const TT of cT) TT?.()
      }
    }
  },
  36949: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      g: () => MT
    });
    const lT = {};

    function MT(TT, kT) {
      lT[TT] = kT
    }

    function KT(TT) {
      return lT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);