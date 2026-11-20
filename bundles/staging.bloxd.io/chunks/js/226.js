export const id = 226;
export const ids = [226];
export const modules = {
  36761: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => GU,
      g: () => jU,
      k: () => hU,
      m: () => uU
    });
    var tU = gU(36610),
      pU = gU(36602),
      EU = gU(36626),
      PU = gU(36639);

    function TU(UU) {
      return Math.pow(UU, pU.k)
    }

    function qU(UU) {
      return UU <= .04045 ? .0773993808 * UU : Math.pow(.947867299 * (UU + .055), 2.4)
    }

    function KU(UU) {
      return Math.pow(UU, pU.h)
    }

    function cU(UU) {
      return UU <= .0031308 ? 12.92 * UU : 1.055 * Math.pow(UU, .41666) - .055
    }
    class GU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = UU, this.g = RU, this.b = gU
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let UU = 255 * this.r | 0;
        return UU = 397 * UU ^ 255 * this.g, UU = 397 * UU ^ 255 * this.b, UU
      }
      toArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[RU] = this.r, UU[RU + 1] = this.g, UU[RU + 2] = this.b, this
      }
      bRU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GU.FromArrayToRef(UU, RU, this), this
      }
      toColor4() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new jU(this.r, this.g, this.b, UU)
      }
      vgU() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(UU) {
        return new GU(this.r * UU.r, this.g * UU.g, this.b * UU.b)
      }
      multiplyToRef(UU, RU) {
        return RU.r = this.r * UU.r, RU.g = this.g * UU.g, RU.b = this.b * UU.b, RU
      }
      multiplyInPlace(UU) {
        return this.r *= UU.r, this.g *= UU.g, this.b *= UU.b, this
      }
      multiplyByFloats(UU, RU, gU) {
        return new GU(this.r * UU, this.g * RU, this.b * gU)
      }
      divide(UU) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(UU, RU) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(UU) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(UU) {
        return this.minimizeInPlaceFromFloats(UU.r, UU.g, UU.b)
      }
      maximizeInPlace(UU) {
        return this.maximizeInPlaceFromFloats(UU.r, UU.g, UU.b)
      }
      minimizeInPlaceFromFloats(UU, RU, gU) {
        return this.r = Math.min(UU, this.r), this.g = Math.min(RU, this.g), this.b = Math.min(gU, this.b), this
      }
      maximizeInPlaceFromFloats(UU, RU, gU) {
        return this.r = Math.max(UU, this.r), this.g = Math.max(RU, this.g), this.b = Math.max(gU, this.b), this
      }
      floorToRef(UU) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(UU) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(UU) {
        return UU && this.r === UU.r && this.g === UU.g && this.b === UU.b
      }
      equalsFloats(UU, RU, gU) {
        return this.cPU(UU, RU, gU)
      }
      cPU(UU, RU, gU) {
        return this.r === UU && this.g === RU && this.b === gU
      }
      equalsWithEpsilon(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU.e;
        return (0, EU.WithinEpsilon)(this.r, UU.r, RU) && (0, EU.WithinEpsilon)(this.g, UU.g, RU) && (0, EU.WithinEpsilon)(this.b, UU.b, RU)
      }
      nt() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(UU) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(UU) {
        return new GU(this.r * UU, this.g * UU, this.b * UU)
      }
      scaleInPlace(UU) {
        return this.r *= UU, this.g *= UU, this.b *= UU, this
      }
      scaleToRef(UU, RU) {
        return RU.r = this.r * UU, RU.g = this.g * UU, RU.b = this.b * UU, RU
      }
      scaleAndAddToRef(UU, RU) {
        return RU.r += this.r * UU, RU.g += this.g * UU, RU.b += this.b * UU, RU
      }
      clampToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        return gU.r = (0, EU.Clamp)(this.r, UU, RU), gU.g = (0, EU.Clamp)(this.g, UU, RU), gU.b = (0, EU.Clamp)(this.b, UU, RU), gU
      }
      add(UU) {
        return new GU(this.r + UU.r, this.g + UU.g, this.b + UU.b)
      }
      addInPlace(UU) {
        return this.r += UU.r, this.g += UU.g, this.b += UU.b, this
      }
      addInPlaceFromFloats(UU, RU, gU) {
        return this.r += UU, this.g += RU, this.b += gU, this
      }
      addToRef(UU, RU) {
        return RU.r = this.r + UU.r, RU.g = this.g + UU.g, RU.b = this.b + UU.b, RU
      }
      subtract(UU) {
        return new GU(this.r - UU.r, this.g - UU.g, this.b - UU.b)
      }
      subtractToRef(UU, RU) {
        return RU.r = this.r - UU.r, RU.g = this.g - UU.g, RU.b = this.b - UU.b, RU
      }
      ptU(UU) {
        return this.r -= UU.r, this.g -= UU.g, this.b -= UU.b, this
      }
      subtractFromFloats(UU, RU, gU) {
        return new GU(this.r - UU, this.g - RU, this.b - gU)
      }
      subtractFromFloatsToRef(UU, RU, gU, tU) {
        return tU.r = this.r - UU, tU.g = this.g - RU, tU.b = this.b - gU, tU
      }
      clone() {
        return new GU(this.r, this.g, this.b)
      }
      PgU(UU) {
        return this.r = UU.r, this.g = UU.g, this.b = UU.b, this
      }
      b_(UU, RU, gU) {
        return this.r = UU, this.g = RU, this.b = gU, this
      }
      set(UU, RU, gU) {
        return this.b_(UU, RU, gU)
      }
      Y5(UU) {
        return this.r = this.g = this.b = UU, this
      }
      toHexString() {
        const UU = Math.round(255 * this.r),
          RU = Math.round(255 * this.g),
          gU = Math.round(255 * this.b);
        return "#" + (0, EU.ToHex)(UU) + (0, EU.ToHex)(RU) + (0, EU.ToHex)(gU)
      }
      fromHexString(UU) {
        return "#" !== UU.substring(0, 1) || 7 !== UU.length || (this.r = parseInt(UU.substring(1, 3), 16) / 255, this.g = parseInt(UU.substring(3, 5), 16) / 255, this.b = parseInt(UU.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new GU)
      }
      toHSVToRef(UU) {
        const RU = this.r,
          gU = this.g,
          tU = this.b,
          pU = Math.max(RU, gU, tU),
          EU = Math.min(RU, gU, tU);
        let PU = 0,
          TU = 0;
        const qU = pU,
          KU = pU - EU;
        return 0 !== pU && (TU = KU / pU), pU != EU && (pU == RU ? (PU = (gU - tU) / KU, gU < tU && (PU += 6)) : pU == gU ? PU = (tU - RU) / KU + 2 : pU == tU && (PU = (RU - gU) / KU + 4), PU *= 60), UU.r = PU, UU.g = TU, UU.b = qU, UU
      }
      toLinearSpace() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = new GU;
        return this.toLinearSpaceToRef(RU, UU), RU
      }
      toLinearSpaceToRef(UU) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = qU(this.r), UU.g = qU(this.g), UU.b = qU(this.b)) : (UU.r = TU(this.r), UU.g = TU(this.g), UU.b = TU(this.b)), this
      }
      toGammaSpace() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = new GU;
        return this.toGammaSpaceToRef(RU, UU), RU
      }
      toGammaSpaceToRef(UU) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = cU(this.r), UU.g = cU(this.g), UU.b = cU(this.b)) : (UU.r = KU(this.r), UU.g = KU(this.g), UU.b = KU(this.b)), this
      }
      static HSVtoRGBToRef(UU, RU, gU, tU) {
        const pU = gU * RU,
          EU = UU / 60,
          PU = pU * (1 - Math.abs(EU % 2 - 1));
        let TU = 0,
          qU = 0,
          KU = 0;
        EU >= 0 && EU <= 1 ? (TU = pU, qU = PU) : EU >= 1 && EU <= 2 ? (TU = PU, qU = pU) : EU >= 2 && EU <= 3 ? (qU = pU, KU = PU) : EU >= 3 && EU <= 4 ? (qU = PU, KU = pU) : EU >= 4 && EU <= 5 ? (TU = PU, KU = pU) : EU >= 5 && EU <= 6 && (TU = pU, KU = PU);
        const cU = gU - pU;
        return tU.r = TU + cU, tU.g = qU + cU, tU.b = KU + cU, tU
      }
      static FromHSV(UU, RU, gU) {
        const tU = new GU(0, 0, 0);
        return GU.HSVtoRGBToRef(UU, RU, gU, tU), tU
      }
      static FromHexString(UU) {
        return new GU(0, 0, 0).fromHexString(UU)
      }
      static FromArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new GU(UU[RU], UU[RU + 1], UU[RU + 2])
      }
      static FromArrayToRef(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        gU.r = UU[RU], gU.g = UU[RU + 1], gU.b = UU[RU + 2]
      }
      static FromInts(UU, RU, gU) {
        return new GU(UU / 255, RU / 255, gU / 255)
      }
      static Lerp(UU, RU, gU) {
        const tU = new GU(0, 0, 0);
        return GU.LerpToRef(UU, RU, gU, tU), tU
      }
      static LerpToRef(UU, RU, gU, tU) {
        tU.r = UU.r + (RU.r - UU.r) * gU, tU.g = UU.g + (RU.g - UU.g) * gU, tU.b = UU.b + (RU.b - UU.b) * gU
      }
      static Hermite(UU, RU, gU, tU, pU) {
        const EU = pU * pU,
          PU = pU * EU,
          TU = 2 * PU - 3 * EU + 1,
          qU = -2 * PU + 3 * EU,
          KU = PU - 2 * EU + pU,
          cU = PU - EU,
          jU = UU.r * TU + gU.r * qU + RU.r * KU + tU.r * cU,
          uU = UU.g * TU + gU.g * qU + RU.g * KU + tU.g * cU,
          CU = UU.b * TU + gU.b * qU + RU.b * KU + tU.b * cU;
        return new GU(jU, uU, CU)
      }
      static Hermite1stDerivative(UU, RU, gU, tU, pU) {
        const EU = GU.Black();
        return this.Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU), EU
      }
      static Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU) {
        const PU = pU * pU;
        EU.r = 6 * (PU - pU) * UU.r + (3 * PU - 4 * pU + 1) * RU.r + 6 * (-PU + pU) * gU.r + (3 * PU - 2 * pU) * tU.r, EU.g = 6 * (PU - pU) * UU.g + (3 * PU - 4 * pU + 1) * RU.g + 6 * (-PU + pU) * gU.g + (3 * PU - 2 * pU) * tU.g, EU.b = 6 * (PU - pU) * UU.b + (3 * PU - 4 * pU + 1) * RU.b + 6 * (-PU + pU) * gU.b + (3 * PU - 2 * pU) * tU.b
      }
      static Red() {
        return new GU(1, 0, 0)
      }
      static Green() {
        return new GU(0, 1, 0)
      }
      static Blue() {
        return new GU(0, 0, 1)
      }
      static Black() {
        return new GU(0, 0, 0)
      }
      static get BlackReadOnly() {
        return GU._BlackReadOnly
      }
      static White() {
        return new GU(1, 1, 1)
      }
      static Purple() {
        return new GU(.5, 0, .5)
      }
      static Magenta() {
        return new GU(1, 0, 1)
      }
      static Yellow() {
        return new GU(1, 1, 0)
      }
      static Gray() {
        return new GU(.5, .5, .5)
      }
      static Teal() {
        return new GU(0, 1, 1)
      }
      static Random() {
        return new GU(Math.random(), Math.random(), Math.random())
      }
    }
    GU._V8PerformanceHack = new GU(.5, .5, .5), GU._BlackReadOnly = GU.Black();
    class jU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = UU, this.g = RU, this.b = gU, this.a = tU
      }
      vgU() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[RU] = this.r, UU[RU + 1] = this.g, UU[RU + 2] = this.b, UU[RU + 3] = this.a, this
      }
      bRU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = UU[RU], this.g = UU[RU + 1], this.b = UU[RU + 2], this.a = UU[RU + 3], this
      }
      equals(UU) {
        return UU && this.r === UU.r && this.g === UU.g && this.b === UU.b && this.a === UU.a
      }
      add(UU) {
        return new jU(this.r + UU.r, this.g + UU.g, this.b + UU.b, this.a + UU.a)
      }
      addToRef(UU, RU) {
        return RU.r = this.r + UU.r, RU.g = this.g + UU.g, RU.b = this.b + UU.b, RU.a = this.a + UU.a, RU
      }
      addInPlace(UU) {
        return this.r += UU.r, this.g += UU.g, this.b += UU.b, this.a += UU.a, this
      }
      addInPlaceFromFloats(UU, RU, gU, tU) {
        return this.r += UU, this.g += RU, this.b += gU, this.a += tU, this
      }
      subtract(UU) {
        return new jU(this.r - UU.r, this.g - UU.g, this.b - UU.b, this.a - UU.a)
      }
      subtractToRef(UU, RU) {
        return RU.r = this.r - UU.r, RU.g = this.g - UU.g, RU.b = this.b - UU.b, RU.a = this.a - UU.a, RU
      }
      ptU(UU) {
        return this.r -= UU.r, this.g -= UU.g, this.b -= UU.b, this.a -= UU.a, this
      }
      subtractFromFloats(UU, RU, gU, tU) {
        return new jU(this.r - UU, this.g - RU, this.b - gU, this.a - tU)
      }
      subtractFromFloatsToRef(UU, RU, gU, tU, pU) {
        return pU.r = this.r - UU, pU.g = this.g - RU, pU.b = this.b - gU, pU.a = this.a - tU, pU
      }
      scale(UU) {
        return new jU(this.r * UU, this.g * UU, this.b * UU, this.a * UU)
      }
      scaleInPlace(UU) {
        return this.r *= UU, this.g *= UU, this.b *= UU, this.a *= UU, this
      }
      scaleToRef(UU, RU) {
        return RU.r = this.r * UU, RU.g = this.g * UU, RU.b = this.b * UU, RU.a = this.a * UU, RU
      }
      scaleAndAddToRef(UU, RU) {
        return RU.r += this.r * UU, RU.g += this.g * UU, RU.b += this.b * UU, RU.a += this.a * UU, RU
      }
      clampToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        return gU.r = (0, EU.Clamp)(this.r, UU, RU), gU.g = (0, EU.Clamp)(this.g, UU, RU), gU.b = (0, EU.Clamp)(this.b, UU, RU), gU.a = (0, EU.Clamp)(this.a, UU, RU), gU
      }
      multiply(UU) {
        return new jU(this.r * UU.r, this.g * UU.g, this.b * UU.b, this.a * UU.a)
      }
      multiplyToRef(UU, RU) {
        return RU.r = this.r * UU.r, RU.g = this.g * UU.g, RU.b = this.b * UU.b, RU.a = this.a * UU.a, RU
      }
      multiplyInPlace(UU) {
        return this.r *= UU.r, this.g *= UU.g, this.b *= UU.b, this.a *= UU.a, this
      }
      multiplyByFloats(UU, RU, gU, tU) {
        return new jU(this.r * UU, this.g * RU, this.b * gU, this.a * tU)
      }
      divide(UU) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(UU, RU) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(UU) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(UU) {
        return this.r = Math.min(this.r, UU.r), this.g = Math.min(this.g, UU.g), this.b = Math.min(this.b, UU.b), this.a = Math.min(this.a, UU.a), this
      }
      maximizeInPlace(UU) {
        return this.r = Math.max(this.r, UU.r), this.g = Math.max(this.g, UU.g), this.b = Math.max(this.b, UU.b), this.a = Math.max(this.a, UU.a), this
      }
      minimizeInPlaceFromFloats(UU, RU, gU, tU) {
        return this.r = Math.min(UU, this.r), this.g = Math.min(RU, this.g), this.b = Math.min(gU, this.b), this.a = Math.min(tU, this.a), this
      }
      maximizeInPlaceFromFloats(UU, RU, gU, tU) {
        return this.r = Math.max(UU, this.r), this.g = Math.max(RU, this.g), this.b = Math.max(gU, this.b), this.a = Math.max(tU, this.a), this
      }
      floorToRef(UU) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(UU) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      nt() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(UU) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pU.e;
        return (0, EU.WithinEpsilon)(this.r, UU.r, RU) && (0, EU.WithinEpsilon)(this.g, UU.g, RU) && (0, EU.WithinEpsilon)(this.b, UU.b, RU) && (0, EU.WithinEpsilon)(this.a, UU.a, RU)
      }
      cPU(UU, RU, gU, tU) {
        return this.r === UU && this.g === RU && this.b === gU && this.a === tU
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let UU = 255 * this.r | 0;
        return UU = 397 * UU ^ 255 * this.g, UU = 397 * UU ^ 255 * this.b, UU = 397 * UU ^ 255 * this.a, UU
      }
      clone() {
        return (new jU).PgU(this)
      }
      PgU(UU) {
        return this.r = UU.r, this.g = UU.g, this.b = UU.b, this.a = UU.a, this
      }
      b_(UU, RU, gU, tU) {
        return this.r = UU, this.g = RU, this.b = gU, this.a = tU, this
      }
      set(UU, RU, gU, tU) {
        return this.b_(UU, RU, gU, tU)
      }
      Y5(UU) {
        return this.r = this.g = this.b = this.a = UU, this
      }
      toHexString() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = Math.round(255 * this.r),
          gU = Math.round(255 * this.g),
          tU = Math.round(255 * this.b);
        if (UU) return "#" + (0, EU.ToHex)(RU) + (0, EU.ToHex)(gU) + (0, EU.ToHex)(tU);
        const pU = Math.round(255 * this.a);
        return "#" + (0, EU.ToHex)(RU) + (0, EU.ToHex)(gU) + (0, EU.ToHex)(tU) + (0, EU.ToHex)(pU)
      }
      fromHexString(UU) {
        return "#" !== UU.substring(0, 1) || 9 !== UU.length && 7 !== UU.length || (this.r = parseInt(UU.substring(1, 3), 16) / 255, this.g = parseInt(UU.substring(3, 5), 16) / 255, this.b = parseInt(UU.substring(5, 7), 16) / 255, 9 === UU.length && (this.a = parseInt(UU.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = new jU;
        return this.toLinearSpaceToRef(RU, UU), RU
      }
      toLinearSpaceToRef(UU) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = qU(this.r), UU.g = qU(this.g), UU.b = qU(this.b)) : (UU.r = TU(this.r), UU.g = TU(this.g), UU.b = TU(this.b)), UU.a = this.a, this
      }
      toGammaSpace() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RU = new jU;
        return this.toGammaSpaceToRef(RU, UU), RU
      }
      toGammaSpaceToRef(UU) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = cU(this.r), UU.g = cU(this.g), UU.b = cU(this.b)) : (UU.r = KU(this.r), UU.g = KU(this.g), UU.b = KU(this.b)), UU.a = this.a, this
      }
      static FromHexString(UU) {
        return "#" !== UU.substring(0, 1) || 9 !== UU.length && 7 !== UU.length ? new jU(0, 0, 0, 0) : new jU(0, 0, 0, 1).fromHexString(UU)
      }
      static Lerp(UU, RU, gU) {
        return jU.LerpToRef(UU, RU, gU, new jU)
      }
      static LerpToRef(UU, RU, gU, tU) {
        return tU.r = UU.r + (RU.r - UU.r) * gU, tU.g = UU.g + (RU.g - UU.g) * gU, tU.b = UU.b + (RU.b - UU.b) * gU, tU.a = UU.a + (RU.a - UU.a) * gU, tU
      }
      static Hermite(UU, RU, gU, tU, pU) {
        const EU = pU * pU,
          PU = pU * EU,
          TU = 2 * PU - 3 * EU + 1,
          qU = -2 * PU + 3 * EU,
          KU = PU - 2 * EU + pU,
          cU = PU - EU,
          GU = UU.r * TU + gU.r * qU + RU.r * KU + tU.r * cU,
          uU = UU.g * TU + gU.g * qU + RU.g * KU + tU.g * cU,
          CU = UU.b * TU + gU.b * qU + RU.b * KU + tU.b * cU,
          hU = UU.a * TU + gU.a * qU + RU.a * KU + tU.a * cU;
        return new jU(GU, uU, CU, hU)
      }
      static Hermite1stDerivative(UU, RU, gU, tU, pU) {
        const EU = new jU;
        return this.Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU), EU
      }
      static Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU) {
        const PU = pU * pU;
        EU.r = 6 * (PU - pU) * UU.r + (3 * PU - 4 * pU + 1) * RU.r + 6 * (-PU + pU) * gU.r + (3 * PU - 2 * pU) * tU.r, EU.g = 6 * (PU - pU) * UU.g + (3 * PU - 4 * pU + 1) * RU.g + 6 * (-PU + pU) * gU.g + (3 * PU - 2 * pU) * tU.g, EU.b = 6 * (PU - pU) * UU.b + (3 * PU - 4 * pU + 1) * RU.b + 6 * (-PU + pU) * gU.b + (3 * PU - 2 * pU) * tU.b, EU.a = 6 * (PU - pU) * UU.a + (3 * PU - 4 * pU + 1) * RU.a + 6 * (-PU + pU) * gU.a + (3 * PU - 2 * pU) * tU.a
      }
      static FromColor3(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new jU(UU.r, UU.g, UU.b, RU)
      }
      static FromArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new jU(UU[RU], UU[RU + 1], UU[RU + 2], UU[RU + 3])
      }
      static FromArrayToRef(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        gU.r = UU[RU], gU.g = UU[RU + 1], gU.b = UU[RU + 2], gU.a = UU[RU + 3]
      }
      static FromInts(UU, RU, gU, tU) {
        return new jU(UU / 255, RU / 255, gU / 255, tU / 255)
      }
      static CheckColors4(UU, RU) {
        if (UU.length === 3 * RU) {
          const RU = [];
          for (let gU = 0; gU < UU.length; gU += 3) {
            const tU = gU / 3 * 4;
            RU[tU] = UU[gU], RU[tU + 1] = UU[gU + 1], RU[tU + 2] = UU[gU + 2], RU[tU + 3] = 1
          }
          return RU
        }
        return UU
      }
    }
    jU._V8PerformanceHack = new jU(.5, .5, .5, .5);
    class uU {}
    uU.Color3 = (0, tU.e)(3, GU.Black), uU.Color4 = (0, tU.e)(3, (() => new jU(0, 0, 0, 0)));
    let CU = !1;

    function hU() {
      CU || (CU = !0, Object.defineProperties(GU.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(jU.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, PU.g)("BABYLON.Color3", GU), (0, PU.g)("BABYLON.Color4", jU))
    }
  },
  36602: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      h: () => tU,
      k: () => pU
    });
    const tU = 1 / 2.2,
      pU = 2.2;
    Math.sqrt(5);
    let EU = .001
  },
  36626: (UU, RU, gU) => {
    function tU(UU) {
      return parseInt(UU.toString().replace(/\W/g, ""))
    }

    function pU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(UU - RU) <= gU
    }

    function EU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return UU < RU - tU || UU > gU + tU
    }

    function PU(UU, RU) {
      return UU === RU ? UU : Math.random() * (RU - UU) + UU
    }

    function TU(UU, RU, gU) {
      return UU + (RU - UU) * gU
    }

    function qU(UU, RU, gU) {
      let tU = QU(RU - UU, 360);
      return tU > 180 && (tU -= 360), UU + tU * jU(gU)
    }

    function KU(UU, RU, gU) {
      let tU;
      return tU = UU != RU ? jU((gU - UU) / (RU - UU)) : 0, tU
    }

    function cU(UU, RU, gU, tU, pU) {
      const EU = pU * pU,
        PU = pU * EU;
      return UU * (2 * PU - 3 * EU + 1) + gU * (-2 * PU + 3 * EU) + RU * (PU - 2 * EU + pU) + tU * (PU - EU)
    }

    function GU(UU, RU, gU, tU, pU) {
      const EU = pU * pU;
      return 6 * (EU - pU) * UU + (3 * EU - 4 * pU + 1) * RU + 6 * (-EU + pU) * gU + (3 * EU - 2 * pU) * tU
    }

    function jU(UU) {
      let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(gU, Math.max(RU, UU))
    }

    function uU(UU) {
      return UU -= 2 * Math.PI * Math.floor((UU + Math.PI) / (2 * Math.PI))
    }

    function CU(UU) {
      const RU = UU.toString(16);
      return UU <= 15 ? ("0" + RU).toUpperCase() : RU.toUpperCase()
    }

    function hU(UU) {
      if (Math.log2) return Math.floor(Math.log2(UU));
      if (UU < 0) return NaN;
      if (0 === UU) return -1 / 0;
      let RU = 0;
      if (UU < 1) {
        for (; UU < 1;) RU++, UU *= 2;
        RU = -RU
      } else if (UU > 1)
        for (; UU > 1;) RU++, UU = Math.floor(UU / 2);
      return RU
    }

    function QU(UU, RU) {
      return UU - Math.floor(UU / RU) * RU
    }

    function eU(UU, RU, gU) {
      return (UU - RU) / (gU - RU)
    }

    function WU(UU, RU, gU) {
      return UU * (gU - RU) + RU
    }

    function fU(UU, RU) {
      let gU = QU(RU - UU, 360);
      return gU > 180 && (gU -= 360), gU
    }

    function xU(UU, RU) {
      const gU = QU(UU, 2 * RU);
      return RU - Math.abs(gU - RU)
    }

    function mU(UU, RU, gU) {
      let tU = jU(gU);
      return tU = -2 * tU * tU * tU + 3 * tU * tU, RU * tU + UU * (1 - tU)
    }

    function IU(UU, RU, gU) {
      let tU;
      return tU = Math.abs(RU - UU) <= gU ? RU : UU + Math.sign(RU - UU) * gU, tU
    }

    function JU(UU, RU, gU) {
      const tU = fU(UU, RU);
      let pU;
      return pU = -gU < tU && tU < gU ? RU : IU(UU, RU = UU + tU, gU), pU
    }

    function wU(UU, RU, gU) {
      return (UU - RU) / (gU - RU)
    }

    function nU(UU, RU, gU) {
      return (gU - RU) * UU + RU
    }

    function bU(UU, RU) {
      const gU = UU % RU;
      return 0 === gU ? RU : bU(RU, gU)
    }
    gU.r(RU), gU.d(RU, {
      Clamp: () => jU,
      DeltaAngle: () => fU,
      Denormalize: () => WU,
      ExtractAsInt: () => tU,
      Hermite: () => cU,
      Hermite1stDerivative: () => GU,
      HighestCommonFactor: () => bU,
      ILog2: () => hU,
      InverseLerp: () => KU,
      Lerp: () => TU,
      LerpAngle: () => qU,
      MoveTowards: () => IU,
      MoveTowardsAngle: () => JU,
      Normalize: () => eU,
      NormalizeRadians: () => uU,
      OutsideRange: () => EU,
      PercentToRange: () => nU,
      PingPong: () => xU,
      RandomRange: () => PU,
      RangeToPercent: () => wU,
      Repeat: () => QU,
      SmoothStep: () => mU,
      ToHex: () => CU,
      WithinEpsilon: () => pU
    })
  },
  36610: (UU, RU, gU) => {
    function tU(UU, RU) {
      const gU = [];
      for (let tU = 0; tU < UU; ++tU) gU.push(RU());
      return gU
    }

    function pU(UU, RU) {
      return tU(UU, RU)
    }
    gU.d(RU, {
      e: () => tU,
      f: () => pU,
      h: () => PU
    });
    const EU = ["push", "splice", "pop", "shift", "unshift"];

    function PU(UU, RU) {
      const gU = EU.map((gU => function(UU, RU, gU) {
        const tU = UU[RU];
        if ("function" !== typeof tU) return null;
        const pU = function() {
          const tU = UU.length,
            EU = pU.previous.apply(UU, arguments);
          return gU(RU, tU), EU
        };
        return tU.next = pU, pU.previous = tU, UU[RU] = pU, () => {
          const gU = pU.previous;
          if (!gU) return;
          const tU = pU.next;
          tU ? (gU.next = tU, tU.previous = gU) : (gU.next = void 0, UU[RU] = gU), pU.next = void 0, pU.previous = void 0
        }
      }(UU, gU, RU)));
      return () => {
        for (const UU of gU) UU?.()
      }
    }
  },
  36639: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      g: () => pU
    });
    const tU = {};

    function pU(UU, RU) {
      tU[UU] = RU
    }

    function EU(UU) {
      return tU[UU]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);