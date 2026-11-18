export const id = 215;
export const ids = [215];
export const modules = {
  36231: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => hJ,
      f: () => DJ,
      g: () => GJ,
      h: () => sJ
    });
    var FJ = ZJ(36183),
      UJ = ZJ(36177),
      eJ = ZJ(36207),
      XJ = ZJ(36216);

    function AJ(JJ) {
      return Math.pow(JJ, UJ.j)
    }

    function qJ(JJ) {
      return JJ <= .04045 ? .0773993808 * JJ : Math.pow(.947867299 * (JJ + .055), 2.4)
    }

    function jJ(JJ) {
      return Math.pow(JJ, UJ.h)
    }

    function YJ(JJ) {
      return JJ <= .0031308 ? 12.92 * JJ : 1.055 * Math.pow(JJ, .41666) - .055
    }
    class hJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = JJ, this.g = cJ, this.b = ZJ
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let JJ = 255 * this.r | 0;
        return JJ = 397 * JJ ^ 255 * this.g, JJ = 397 * JJ ^ 255 * this.b, JJ
      }
      toArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JJ[cJ] = this.r, JJ[cJ + 1] = this.g, JJ[cJ + 2] = this.b, this
      }
      zcJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return hJ.FromArrayToRef(JJ, cJ, this), this
      }
      toColor4() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new DJ(this.r, this.g, this.b, JJ)
      }
      JFJ() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(JJ) {
        return new hJ(this.r * JJ.r, this.g * JJ.g, this.b * JJ.b)
      }
      multiplyToRef(JJ, cJ) {
        return cJ.r = this.r * JJ.r, cJ.g = this.g * JJ.g, cJ.b = this.b * JJ.b, cJ
      }
      multiplyInPlace(JJ) {
        return this.r *= JJ.r, this.g *= JJ.g, this.b *= JJ.b, this
      }
      multiplyByFloats(JJ, cJ, ZJ) {
        return new hJ(this.r * JJ, this.g * cJ, this.b * ZJ)
      }
      divide(JJ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(JJ, cJ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(JJ) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(JJ) {
        return this.minimizeInPlaceFromFloats(JJ.r, JJ.g, JJ.b)
      }
      maximizeInPlace(JJ) {
        return this.maximizeInPlaceFromFloats(JJ.r, JJ.g, JJ.b)
      }
      minimizeInPlaceFromFloats(JJ, cJ, ZJ) {
        return this.r = Math.min(JJ, this.r), this.g = Math.min(cJ, this.g), this.b = Math.min(ZJ, this.b), this
      }
      maximizeInPlaceFromFloats(JJ, cJ, ZJ) {
        return this.r = Math.max(JJ, this.r), this.g = Math.max(cJ, this.g), this.b = Math.max(ZJ, this.b), this
      }
      floorToRef(JJ) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(JJ) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(JJ) {
        return JJ && this.r === JJ.r && this.g === JJ.g && this.b === JJ.b
      }
      equalsFloats(JJ, cJ, ZJ) {
        return this.KXJ(JJ, cJ, ZJ)
      }
      KXJ(JJ, cJ, ZJ) {
        return this.r === JJ && this.g === cJ && this.b === ZJ
      }
      equalsWithEpsilon(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UJ.e;
        return (0, eJ.WithinEpsilon)(this.r, JJ.r, cJ) && (0, eJ.WithinEpsilon)(this.g, JJ.g, cJ) && (0, eJ.WithinEpsilon)(this.b, JJ.b, cJ)
      }
      nZ() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(JJ) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(JJ) {
        return new hJ(this.r * JJ, this.g * JJ, this.b * JJ)
      }
      scaleInPlace(JJ) {
        return this.r *= JJ, this.g *= JJ, this.b *= JJ, this
      }
      scaleToRef(JJ, cJ) {
        return cJ.r = this.r * JJ, cJ.g = this.g * JJ, cJ.b = this.b * JJ, cJ
      }
      scaleAndAddToRef(JJ, cJ) {
        return cJ.r += this.r * JJ, cJ.g += this.g * JJ, cJ.b += this.b * JJ, cJ
      }
      clampToRef() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        return ZJ.r = (0, eJ.Clamp)(this.r, JJ, cJ), ZJ.g = (0, eJ.Clamp)(this.g, JJ, cJ), ZJ.b = (0, eJ.Clamp)(this.b, JJ, cJ), ZJ
      }
      add(JJ) {
        return new hJ(this.r + JJ.r, this.g + JJ.g, this.b + JJ.b)
      }
      addInPlace(JJ) {
        return this.r += JJ.r, this.g += JJ.g, this.b += JJ.b, this
      }
      addInPlaceFromFloats(JJ, cJ, ZJ) {
        return this.r += JJ, this.g += cJ, this.b += ZJ, this
      }
      addToRef(JJ, cJ) {
        return cJ.r = this.r + JJ.r, cJ.g = this.g + JJ.g, cJ.b = this.b + JJ.b, cJ
      }
      subtract(JJ) {
        return new hJ(this.r - JJ.r, this.g - JJ.g, this.b - JJ.b)
      }
      subtractToRef(JJ, cJ) {
        return cJ.r = this.r - JJ.r, cJ.g = this.g - JJ.g, cJ.b = this.b - JJ.b, cJ
      }
      xFJ(JJ) {
        return this.r -= JJ.r, this.g -= JJ.g, this.b -= JJ.b, this
      }
      subtractFromFloats(JJ, cJ, ZJ) {
        return new hJ(this.r - JJ, this.g - cJ, this.b - ZJ)
      }
      subtractFromFloatsToRef(JJ, cJ, ZJ, FJ) {
        return FJ.r = this.r - JJ, FJ.g = this.g - cJ, FJ.b = this.b - ZJ, FJ
      }
      clone() {
        return new hJ(this.r, this.g, this.b)
      }
      rZJ(JJ) {
        return this.r = JJ.r, this.g = JJ.g, this.b = JJ.b, this
      }
      K9(JJ, cJ, ZJ) {
        return this.r = JJ, this.g = cJ, this.b = ZJ, this
      }
      set(JJ, cJ, ZJ) {
        return this.K9(JJ, cJ, ZJ)
      }
      X3(JJ) {
        return this.r = this.g = this.b = JJ, this
      }
      toHexString() {
        const JJ = Math.round(255 * this.r),
          cJ = Math.round(255 * this.g),
          ZJ = Math.round(255 * this.b);
        return "#" + (0, eJ.ToHex)(JJ) + (0, eJ.ToHex)(cJ) + (0, eJ.ToHex)(ZJ)
      }
      fromHexString(JJ) {
        return "#" !== JJ.substring(0, 1) || 7 !== JJ.length || (this.r = parseInt(JJ.substring(1, 3), 16) / 255, this.g = parseInt(JJ.substring(3, 5), 16) / 255, this.b = parseInt(JJ.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new hJ)
      }
      toHSVToRef(JJ) {
        const cJ = this.r,
          ZJ = this.g,
          FJ = this.b,
          UJ = Math.max(cJ, ZJ, FJ),
          eJ = Math.min(cJ, ZJ, FJ);
        let XJ = 0,
          AJ = 0;
        const qJ = UJ,
          jJ = UJ - eJ;
        return 0 !== UJ && (AJ = jJ / UJ), UJ != eJ && (UJ == cJ ? (XJ = (ZJ - FJ) / jJ, ZJ < FJ && (XJ += 6)) : UJ == ZJ ? XJ = (FJ - cJ) / jJ + 2 : UJ == FJ && (XJ = (cJ - ZJ) / jJ + 4), XJ *= 60), JJ.r = XJ, JJ.g = AJ, JJ.b = qJ, JJ
      }
      toLinearSpace() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = new hJ;
        return this.toLinearSpaceToRef(cJ, JJ), cJ
      }
      toLinearSpaceToRef(JJ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (JJ.r = qJ(this.r), JJ.g = qJ(this.g), JJ.b = qJ(this.b)) : (JJ.r = AJ(this.r), JJ.g = AJ(this.g), JJ.b = AJ(this.b)), this
      }
      toGammaSpace() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = new hJ;
        return this.toGammaSpaceToRef(cJ, JJ), cJ
      }
      toGammaSpaceToRef(JJ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (JJ.r = YJ(this.r), JJ.g = YJ(this.g), JJ.b = YJ(this.b)) : (JJ.r = jJ(this.r), JJ.g = jJ(this.g), JJ.b = jJ(this.b)), this
      }
      static HSVtoRGBToRef(JJ, cJ, ZJ, FJ) {
        const UJ = ZJ * cJ,
          eJ = JJ / 60,
          XJ = UJ * (1 - Math.abs(eJ % 2 - 1));
        let AJ = 0,
          qJ = 0,
          jJ = 0;
        eJ >= 0 && eJ <= 1 ? (AJ = UJ, qJ = XJ) : eJ >= 1 && eJ <= 2 ? (AJ = XJ, qJ = UJ) : eJ >= 2 && eJ <= 3 ? (qJ = UJ, jJ = XJ) : eJ >= 3 && eJ <= 4 ? (qJ = XJ, jJ = UJ) : eJ >= 4 && eJ <= 5 ? (AJ = XJ, jJ = UJ) : eJ >= 5 && eJ <= 6 && (AJ = UJ, jJ = XJ);
        const YJ = ZJ - UJ;
        return FJ.r = AJ + YJ, FJ.g = qJ + YJ, FJ.b = jJ + YJ, FJ
      }
      static FromHSV(JJ, cJ, ZJ) {
        const FJ = new hJ(0, 0, 0);
        return hJ.HSVtoRGBToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static FromHexString(JJ) {
        return new hJ(0, 0, 0).fromHexString(JJ)
      }
      static FromArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new hJ(JJ[cJ], JJ[cJ + 1], JJ[cJ + 2])
      }
      static FromArrayToRef(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        ZJ.r = JJ[cJ], ZJ.g = JJ[cJ + 1], ZJ.b = JJ[cJ + 2]
      }
      static FromInts(JJ, cJ, ZJ) {
        return new hJ(JJ / 255, cJ / 255, ZJ / 255)
      }
      static Lerp(JJ, cJ, ZJ) {
        const FJ = new hJ(0, 0, 0);
        return hJ.LerpToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static LerpToRef(JJ, cJ, ZJ, FJ) {
        FJ.r = JJ.r + (cJ.r - JJ.r) * ZJ, FJ.g = JJ.g + (cJ.g - JJ.g) * ZJ, FJ.b = JJ.b + (cJ.b - JJ.b) * ZJ
      }
      static Hermite(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = UJ * UJ,
          XJ = UJ * eJ,
          AJ = 2 * XJ - 3 * eJ + 1,
          qJ = -2 * XJ + 3 * eJ,
          jJ = XJ - 2 * eJ + UJ,
          YJ = XJ - eJ,
          DJ = JJ.r * AJ + ZJ.r * qJ + cJ.r * jJ + FJ.r * YJ,
          sJ = JJ.g * AJ + ZJ.g * qJ + cJ.g * jJ + FJ.g * YJ,
          nJ = JJ.b * AJ + ZJ.b * qJ + cJ.b * jJ + FJ.b * YJ;
        return new hJ(DJ, sJ, nJ)
      }
      static Hermite1stDerivative(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = hJ.Black();
        return this.Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ), eJ
      }
      static Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = UJ * UJ;
        eJ.r = 6 * (XJ - UJ) * JJ.r + (3 * XJ - 4 * UJ + 1) * cJ.r + 6 * (-XJ + UJ) * ZJ.r + (3 * XJ - 2 * UJ) * FJ.r, eJ.g = 6 * (XJ - UJ) * JJ.g + (3 * XJ - 4 * UJ + 1) * cJ.g + 6 * (-XJ + UJ) * ZJ.g + (3 * XJ - 2 * UJ) * FJ.g, eJ.b = 6 * (XJ - UJ) * JJ.b + (3 * XJ - 4 * UJ + 1) * cJ.b + 6 * (-XJ + UJ) * ZJ.b + (3 * XJ - 2 * UJ) * FJ.b
      }
      static Red() {
        return new hJ(1, 0, 0)
      }
      static Green() {
        return new hJ(0, 1, 0)
      }
      static Blue() {
        return new hJ(0, 0, 1)
      }
      static Black() {
        return new hJ(0, 0, 0)
      }
      static get BlackReadOnly() {
        return hJ._BlackReadOnly
      }
      static White() {
        return new hJ(1, 1, 1)
      }
      static Purple() {
        return new hJ(.5, 0, .5)
      }
      static Magenta() {
        return new hJ(1, 0, 1)
      }
      static Yellow() {
        return new hJ(1, 1, 0)
      }
      static Gray() {
        return new hJ(.5, .5, .5)
      }
      static Teal() {
        return new hJ(0, 1, 1)
      }
      static Random() {
        return new hJ(Math.random(), Math.random(), Math.random())
      }
    }
    hJ._V8PerformanceHack = new hJ(.5, .5, .5), hJ._BlackReadOnly = hJ.Black();
    class DJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = JJ, this.g = cJ, this.b = ZJ, this.a = FJ
      }
      JFJ() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JJ[cJ] = this.r, JJ[cJ + 1] = this.g, JJ[cJ + 2] = this.b, JJ[cJ + 3] = this.a, this
      }
      zcJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = JJ[cJ], this.g = JJ[cJ + 1], this.b = JJ[cJ + 2], this.a = JJ[cJ + 3], this
      }
      equals(JJ) {
        return JJ && this.r === JJ.r && this.g === JJ.g && this.b === JJ.b && this.a === JJ.a
      }
      add(JJ) {
        return new DJ(this.r + JJ.r, this.g + JJ.g, this.b + JJ.b, this.a + JJ.a)
      }
      addToRef(JJ, cJ) {
        return cJ.r = this.r + JJ.r, cJ.g = this.g + JJ.g, cJ.b = this.b + JJ.b, cJ.a = this.a + JJ.a, cJ
      }
      addInPlace(JJ) {
        return this.r += JJ.r, this.g += JJ.g, this.b += JJ.b, this.a += JJ.a, this
      }
      addInPlaceFromFloats(JJ, cJ, ZJ, FJ) {
        return this.r += JJ, this.g += cJ, this.b += ZJ, this.a += FJ, this
      }
      subtract(JJ) {
        return new DJ(this.r - JJ.r, this.g - JJ.g, this.b - JJ.b, this.a - JJ.a)
      }
      subtractToRef(JJ, cJ) {
        return cJ.r = this.r - JJ.r, cJ.g = this.g - JJ.g, cJ.b = this.b - JJ.b, cJ.a = this.a - JJ.a, cJ
      }
      xFJ(JJ) {
        return this.r -= JJ.r, this.g -= JJ.g, this.b -= JJ.b, this.a -= JJ.a, this
      }
      subtractFromFloats(JJ, cJ, ZJ, FJ) {
        return new DJ(this.r - JJ, this.g - cJ, this.b - ZJ, this.a - FJ)
      }
      subtractFromFloatsToRef(JJ, cJ, ZJ, FJ, UJ) {
        return UJ.r = this.r - JJ, UJ.g = this.g - cJ, UJ.b = this.b - ZJ, UJ.a = this.a - FJ, UJ
      }
      scale(JJ) {
        return new DJ(this.r * JJ, this.g * JJ, this.b * JJ, this.a * JJ)
      }
      scaleInPlace(JJ) {
        return this.r *= JJ, this.g *= JJ, this.b *= JJ, this.a *= JJ, this
      }
      scaleToRef(JJ, cJ) {
        return cJ.r = this.r * JJ, cJ.g = this.g * JJ, cJ.b = this.b * JJ, cJ.a = this.a * JJ, cJ
      }
      scaleAndAddToRef(JJ, cJ) {
        return cJ.r += this.r * JJ, cJ.g += this.g * JJ, cJ.b += this.b * JJ, cJ.a += this.a * JJ, cJ
      }
      clampToRef() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        return ZJ.r = (0, eJ.Clamp)(this.r, JJ, cJ), ZJ.g = (0, eJ.Clamp)(this.g, JJ, cJ), ZJ.b = (0, eJ.Clamp)(this.b, JJ, cJ), ZJ.a = (0, eJ.Clamp)(this.a, JJ, cJ), ZJ
      }
      multiply(JJ) {
        return new DJ(this.r * JJ.r, this.g * JJ.g, this.b * JJ.b, this.a * JJ.a)
      }
      multiplyToRef(JJ, cJ) {
        return cJ.r = this.r * JJ.r, cJ.g = this.g * JJ.g, cJ.b = this.b * JJ.b, cJ.a = this.a * JJ.a, cJ
      }
      multiplyInPlace(JJ) {
        return this.r *= JJ.r, this.g *= JJ.g, this.b *= JJ.b, this.a *= JJ.a, this
      }
      multiplyByFloats(JJ, cJ, ZJ, FJ) {
        return new DJ(this.r * JJ, this.g * cJ, this.b * ZJ, this.a * FJ)
      }
      divide(JJ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(JJ, cJ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(JJ) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(JJ) {
        return this.r = Math.min(this.r, JJ.r), this.g = Math.min(this.g, JJ.g), this.b = Math.min(this.b, JJ.b), this.a = Math.min(this.a, JJ.a), this
      }
      maximizeInPlace(JJ) {
        return this.r = Math.max(this.r, JJ.r), this.g = Math.max(this.g, JJ.g), this.b = Math.max(this.b, JJ.b), this.a = Math.max(this.a, JJ.a), this
      }
      minimizeInPlaceFromFloats(JJ, cJ, ZJ, FJ) {
        return this.r = Math.min(JJ, this.r), this.g = Math.min(cJ, this.g), this.b = Math.min(ZJ, this.b), this.a = Math.min(FJ, this.a), this
      }
      maximizeInPlaceFromFloats(JJ, cJ, ZJ, FJ) {
        return this.r = Math.max(JJ, this.r), this.g = Math.max(cJ, this.g), this.b = Math.max(ZJ, this.b), this.a = Math.max(FJ, this.a), this
      }
      floorToRef(JJ) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(JJ) {
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
      negateToRef(JJ) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : UJ.e;
        return (0, eJ.WithinEpsilon)(this.r, JJ.r, cJ) && (0, eJ.WithinEpsilon)(this.g, JJ.g, cJ) && (0, eJ.WithinEpsilon)(this.b, JJ.b, cJ) && (0, eJ.WithinEpsilon)(this.a, JJ.a, cJ)
      }
      KXJ(JJ, cJ, ZJ, FJ) {
        return this.r === JJ && this.g === cJ && this.b === ZJ && this.a === FJ
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let JJ = 255 * this.r | 0;
        return JJ = 397 * JJ ^ 255 * this.g, JJ = 397 * JJ ^ 255 * this.b, JJ = 397 * JJ ^ 255 * this.a, JJ
      }
      clone() {
        return (new DJ).rZJ(this)
      }
      rZJ(JJ) {
        return this.r = JJ.r, this.g = JJ.g, this.b = JJ.b, this.a = JJ.a, this
      }
      K9(JJ, cJ, ZJ, FJ) {
        return this.r = JJ, this.g = cJ, this.b = ZJ, this.a = FJ, this
      }
      set(JJ, cJ, ZJ, FJ) {
        return this.K9(JJ, cJ, ZJ, FJ)
      }
      X3(JJ) {
        return this.r = this.g = this.b = this.a = JJ, this
      }
      toHexString() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = Math.round(255 * this.r),
          ZJ = Math.round(255 * this.g),
          FJ = Math.round(255 * this.b);
        if (JJ) return "#" + (0, eJ.ToHex)(cJ) + (0, eJ.ToHex)(ZJ) + (0, eJ.ToHex)(FJ);
        const UJ = Math.round(255 * this.a);
        return "#" + (0, eJ.ToHex)(cJ) + (0, eJ.ToHex)(ZJ) + (0, eJ.ToHex)(FJ) + (0, eJ.ToHex)(UJ)
      }
      fromHexString(JJ) {
        return "#" !== JJ.substring(0, 1) || 9 !== JJ.length && 7 !== JJ.length || (this.r = parseInt(JJ.substring(1, 3), 16) / 255, this.g = parseInt(JJ.substring(3, 5), 16) / 255, this.b = parseInt(JJ.substring(5, 7), 16) / 255, 9 === JJ.length && (this.a = parseInt(JJ.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = new DJ;
        return this.toLinearSpaceToRef(cJ, JJ), cJ
      }
      toLinearSpaceToRef(JJ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (JJ.r = qJ(this.r), JJ.g = qJ(this.g), JJ.b = qJ(this.b)) : (JJ.r = AJ(this.r), JJ.g = AJ(this.g), JJ.b = AJ(this.b)), JJ.a = this.a, this
      }
      toGammaSpace() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cJ = new DJ;
        return this.toGammaSpaceToRef(cJ, JJ), cJ
      }
      toGammaSpaceToRef(JJ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (JJ.r = YJ(this.r), JJ.g = YJ(this.g), JJ.b = YJ(this.b)) : (JJ.r = jJ(this.r), JJ.g = jJ(this.g), JJ.b = jJ(this.b)), JJ.a = this.a, this
      }
      static FromHexString(JJ) {
        return "#" !== JJ.substring(0, 1) || 9 !== JJ.length && 7 !== JJ.length ? new DJ(0, 0, 0, 0) : new DJ(0, 0, 0, 1).fromHexString(JJ)
      }
      static Lerp(JJ, cJ, ZJ) {
        return DJ.LerpToRef(JJ, cJ, ZJ, new DJ)
      }
      static LerpToRef(JJ, cJ, ZJ, FJ) {
        return FJ.r = JJ.r + (cJ.r - JJ.r) * ZJ, FJ.g = JJ.g + (cJ.g - JJ.g) * ZJ, FJ.b = JJ.b + (cJ.b - JJ.b) * ZJ, FJ.a = JJ.a + (cJ.a - JJ.a) * ZJ, FJ
      }
      static Hermite(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = UJ * UJ,
          XJ = UJ * eJ,
          AJ = 2 * XJ - 3 * eJ + 1,
          qJ = -2 * XJ + 3 * eJ,
          jJ = XJ - 2 * eJ + UJ,
          YJ = XJ - eJ,
          hJ = JJ.r * AJ + ZJ.r * qJ + cJ.r * jJ + FJ.r * YJ,
          sJ = JJ.g * AJ + ZJ.g * qJ + cJ.g * jJ + FJ.g * YJ,
          nJ = JJ.b * AJ + ZJ.b * qJ + cJ.b * jJ + FJ.b * YJ,
          GJ = JJ.a * AJ + ZJ.a * qJ + cJ.a * jJ + FJ.a * YJ;
        return new DJ(hJ, sJ, nJ, GJ)
      }
      static Hermite1stDerivative(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = new DJ;
        return this.Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ), eJ
      }
      static Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = UJ * UJ;
        eJ.r = 6 * (XJ - UJ) * JJ.r + (3 * XJ - 4 * UJ + 1) * cJ.r + 6 * (-XJ + UJ) * ZJ.r + (3 * XJ - 2 * UJ) * FJ.r, eJ.g = 6 * (XJ - UJ) * JJ.g + (3 * XJ - 4 * UJ + 1) * cJ.g + 6 * (-XJ + UJ) * ZJ.g + (3 * XJ - 2 * UJ) * FJ.g, eJ.b = 6 * (XJ - UJ) * JJ.b + (3 * XJ - 4 * UJ + 1) * cJ.b + 6 * (-XJ + UJ) * ZJ.b + (3 * XJ - 2 * UJ) * FJ.b, eJ.a = 6 * (XJ - UJ) * JJ.a + (3 * XJ - 4 * UJ + 1) * cJ.a + 6 * (-XJ + UJ) * ZJ.a + (3 * XJ - 2 * UJ) * FJ.a
      }
      static FromColor3(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new DJ(JJ.r, JJ.g, JJ.b, cJ)
      }
      static FromArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new DJ(JJ[cJ], JJ[cJ + 1], JJ[cJ + 2], JJ[cJ + 3])
      }
      static FromArrayToRef(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        ZJ.r = JJ[cJ], ZJ.g = JJ[cJ + 1], ZJ.b = JJ[cJ + 2], ZJ.a = JJ[cJ + 3]
      }
      static FromInts(JJ, cJ, ZJ, FJ) {
        return new DJ(JJ / 255, cJ / 255, ZJ / 255, FJ / 255)
      }
      static CheckColors4(JJ, cJ) {
        if (JJ.length === 3 * cJ) {
          const cJ = [];
          for (let ZJ = 0; ZJ < JJ.length; ZJ += 3) {
            const FJ = ZJ / 3 * 4;
            cJ[FJ] = JJ[ZJ], cJ[FJ + 1] = JJ[ZJ + 1], cJ[FJ + 2] = JJ[ZJ + 2], cJ[FJ + 3] = 1
          }
          return cJ
        }
        return JJ
      }
    }
    DJ._V8PerformanceHack = new DJ(.5, .5, .5, .5);
    class sJ {}
    sJ.Color3 = (0, FJ.e)(3, hJ.Black), sJ.Color4 = (0, FJ.e)(3, (() => new DJ(0, 0, 0, 0)));
    let nJ = !1;

    function GJ() {
      nJ || (nJ = !0, Object.defineProperties(hJ.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(DJ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, XJ.f)("BABYLON.Color3", hJ), (0, XJ.f)("BABYLON.Color4", DJ))
    }
  },
  36177: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      h: () => FJ,
      j: () => UJ
    });
    const FJ = 1 / 2.2,
      UJ = 2.2;
    Math.sqrt(5);
    let eJ = .001
  },
  36207: (JJ, cJ, ZJ) => {
    function FJ(JJ) {
      return parseInt(JJ.toString().replace(/\W/g, ""))
    }

    function UJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(JJ - cJ) <= ZJ
    }

    function eJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return JJ < cJ - FJ || JJ > ZJ + FJ
    }

    function XJ(JJ, cJ) {
      return JJ === cJ ? JJ : Math.random() * (cJ - JJ) + JJ
    }

    function AJ(JJ, cJ, ZJ) {
      return JJ + (cJ - JJ) * ZJ
    }

    function qJ(JJ, cJ, ZJ) {
      let FJ = fJ(cJ - JJ, 360);
      return FJ > 180 && (FJ -= 360), JJ + FJ * DJ(ZJ)
    }

    function jJ(JJ, cJ, ZJ) {
      let FJ;
      return FJ = JJ != cJ ? DJ((ZJ - JJ) / (cJ - JJ)) : 0, FJ
    }

    function YJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = UJ * UJ,
        XJ = UJ * eJ;
      return JJ * (2 * XJ - 3 * eJ + 1) + ZJ * (-2 * XJ + 3 * eJ) + cJ * (XJ - 2 * eJ + UJ) + FJ * (XJ - eJ)
    }

    function hJ(JJ, cJ, ZJ, FJ, UJ) {
      const eJ = UJ * UJ;
      return 6 * (eJ - UJ) * JJ + (3 * eJ - 4 * UJ + 1) * cJ + 6 * (-eJ + UJ) * ZJ + (3 * eJ - 2 * UJ) * FJ
    }

    function DJ(JJ) {
      let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ZJ, Math.max(cJ, JJ))
    }

    function sJ(JJ) {
      return JJ -= 2 * Math.PI * Math.floor((JJ + Math.PI) / (2 * Math.PI))
    }

    function nJ(JJ) {
      const cJ = JJ.toString(16);
      return JJ <= 15 ? ("0" + cJ).toUpperCase() : cJ.toUpperCase()
    }

    function GJ(JJ) {
      if (Math.log2) return Math.floor(Math.log2(JJ));
      if (JJ < 0) return NaN;
      if (0 === JJ) return -1 / 0;
      let cJ = 0;
      if (JJ < 1) {
        for (; JJ < 1;) cJ++, JJ *= 2;
        cJ = -cJ
      } else if (JJ > 1)
        for (; JJ > 1;) cJ++, JJ = Math.floor(JJ / 2);
      return cJ
    }

    function fJ(JJ, cJ) {
      return JJ - Math.floor(JJ / cJ) * cJ
    }

    function xJ(JJ, cJ, ZJ) {
      return (JJ - cJ) / (ZJ - cJ)
    }

    function rJ(JJ, cJ, ZJ) {
      return JJ * (ZJ - cJ) + cJ
    }

    function vJ(JJ, cJ) {
      let ZJ = fJ(cJ - JJ, 360);
      return ZJ > 180 && (ZJ -= 360), ZJ
    }

    function mJ(JJ, cJ) {
      const ZJ = fJ(JJ, 2 * cJ);
      return cJ - Math.abs(ZJ - cJ)
    }

    function QJ(JJ, cJ, ZJ) {
      let FJ = DJ(ZJ);
      return FJ = -2 * FJ * FJ * FJ + 3 * FJ * FJ, cJ * FJ + JJ * (1 - FJ)
    }

    function EJ(JJ, cJ, ZJ) {
      let FJ;
      return FJ = Math.abs(cJ - JJ) <= ZJ ? cJ : JJ + Math.sign(cJ - JJ) * ZJ, FJ
    }

    function VJ(JJ, cJ, ZJ) {
      const FJ = vJ(JJ, cJ);
      let UJ;
      return UJ = -ZJ < FJ && FJ < ZJ ? cJ : EJ(JJ, cJ = JJ + FJ, ZJ), UJ
    }

    function KJ(JJ, cJ, ZJ) {
      return (JJ - cJ) / (ZJ - cJ)
    }

    function yJ(JJ, cJ, ZJ) {
      return (ZJ - cJ) * JJ + cJ
    }

    function SJ(JJ, cJ) {
      const ZJ = JJ % cJ;
      return 0 === ZJ ? cJ : SJ(cJ, ZJ)
    }
    ZJ.r(cJ), ZJ.d(cJ, {
      Clamp: () => DJ,
      DeltaAngle: () => vJ,
      Denormalize: () => rJ,
      ExtractAsInt: () => FJ,
      Hermite: () => YJ,
      Hermite1stDerivative: () => hJ,
      HighestCommonFactor: () => SJ,
      ILog2: () => GJ,
      InverseLerp: () => jJ,
      Lerp: () => AJ,
      LerpAngle: () => qJ,
      MoveTowards: () => EJ,
      MoveTowardsAngle: () => VJ,
      Normalize: () => xJ,
      NormalizeRadians: () => sJ,
      OutsideRange: () => eJ,
      PercentToRange: () => yJ,
      PingPong: () => mJ,
      RandomRange: () => XJ,
      RangeToPercent: () => KJ,
      Repeat: () => fJ,
      SmoothStep: () => QJ,
      ToHex: () => nJ,
      WithinEpsilon: () => UJ
    })
  },
  36183: (JJ, cJ, ZJ) => {
    function FJ(JJ, cJ) {
      const ZJ = [];
      for (let FJ = 0; FJ < JJ; ++FJ) ZJ.push(cJ());
      return ZJ
    }

    function UJ(JJ, cJ) {
      return FJ(JJ, cJ)
    }
    ZJ.d(cJ, {
      e: () => FJ,
      h: () => UJ,
      k: () => XJ
    });
    const eJ = ["push", "splice", "pop", "shift", "unshift"];

    function XJ(JJ, cJ) {
      const ZJ = eJ.map((ZJ => function(JJ, cJ, ZJ) {
        const FJ = JJ[cJ];
        if ("function" !== typeof FJ) return null;
        const UJ = function() {
          const FJ = JJ.length,
            eJ = UJ.previous.apply(JJ, arguments);
          return ZJ(cJ, FJ), eJ
        };
        return FJ.next = UJ, UJ.previous = FJ, JJ[cJ] = UJ, () => {
          const ZJ = UJ.previous;
          if (!ZJ) return;
          const FJ = UJ.next;
          FJ ? (ZJ.next = FJ, FJ.previous = ZJ) : (ZJ.next = void 0, JJ[cJ] = ZJ), UJ.next = void 0, UJ.previous = void 0
        }
      }(JJ, ZJ, cJ)));
      return () => {
        for (const JJ of ZJ) JJ?.()
      }
    }
  },
  36216: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      f: () => UJ
    });
    const FJ = {};

    function UJ(JJ, cJ) {
      FJ[JJ] = cJ
    }

    function eJ(JJ) {
      return FJ[JJ]
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);