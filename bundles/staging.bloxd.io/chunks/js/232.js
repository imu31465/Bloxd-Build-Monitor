export const id = 232;
export const ids = [232];
export const modules = {
  37300: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => fS,
      c: () => kS,
      e: () => jS,
      i: () => aS
    });
    var tS = gS(37129),
      bS = gS(37123),
      XS = gS(37149),
      xS = gS(37164);

    function NS(SS) {
      return Math.pow(SS, bS.l)
    }

    function qS(SS) {
      return SS <= .04045 ? .0773993808 * SS : Math.pow(.947867299 * (SS + .055), 2.4)
    }

    function uS(SS) {
      return Math.pow(SS, bS.h)
    }

    function IS(SS) {
      return SS <= .0031308 ? 12.92 * SS : 1.055 * Math.pow(SS, .41666) - .055
    }
    class fS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = SS, this.g = HS, this.b = gS
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let SS = 255 * this.r | 0;
        return SS = 397 * SS ^ 255 * this.g, SS = 397 * SS ^ 255 * this.b, SS
      }
      toArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return SS[HS] = this.r, SS[HS + 1] = this.g, SS[HS + 2] = this.b, this
      }
      UHS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return fS.FromArrayToRef(SS, HS, this), this
      }
      toColor4() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new kS(this.r, this.g, this.b, SS)
      }
      lgS() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(SS) {
        return new fS(this.r * SS.r, this.g * SS.g, this.b * SS.b)
      }
      multiplyToRef(SS, HS) {
        return HS.r = this.r * SS.r, HS.g = this.g * SS.g, HS.b = this.b * SS.b, HS
      }
      multiplyInPlace(SS) {
        return this.r *= SS.r, this.g *= SS.g, this.b *= SS.b, this
      }
      multiplyByFloats(SS, HS, gS) {
        return new fS(this.r * SS, this.g * HS, this.b * gS)
      }
      divide(SS) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(SS, HS) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(SS) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(SS) {
        return this.minimizeInPlaceFromFloats(SS.r, SS.g, SS.b)
      }
      maximizeInPlace(SS) {
        return this.maximizeInPlaceFromFloats(SS.r, SS.g, SS.b)
      }
      minimizeInPlaceFromFloats(SS, HS, gS) {
        return this.r = Math.min(SS, this.r), this.g = Math.min(HS, this.g), this.b = Math.min(gS, this.b), this
      }
      maximizeInPlaceFromFloats(SS, HS, gS) {
        return this.r = Math.max(SS, this.r), this.g = Math.max(HS, this.g), this.b = Math.max(gS, this.b), this
      }
      floorToRef(SS) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(SS) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(SS) {
        return SS && this.r === SS.r && this.g === SS.g && this.b === SS.b
      }
      equalsFloats(SS, HS, gS) {
        return this.ZxS(SS, HS, gS)
      }
      ZxS(SS, HS, gS) {
        return this.r === SS && this.g === HS && this.b === gS
      }
      equalsWithEpsilon(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS.d;
        return (0, XS.WithinEpsilon)(this.r, SS.r, HS) && (0, XS.WithinEpsilon)(this.g, SS.g, HS) && (0, XS.WithinEpsilon)(this.b, SS.b, HS)
      }
      gq() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(SS) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(SS) {
        return new fS(this.r * SS, this.g * SS, this.b * SS)
      }
      scaleInPlace(SS) {
        return this.r *= SS, this.g *= SS, this.b *= SS, this
      }
      scaleToRef(SS, HS) {
        return HS.r = this.r * SS, HS.g = this.g * SS, HS.b = this.b * SS, HS
      }
      scaleAndAddToRef(SS, HS) {
        return HS.r += this.r * SS, HS.g += this.g * SS, HS.b += this.b * SS, HS
      }
      clampToRef() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        return gS.r = (0, XS.Clamp)(this.r, SS, HS), gS.g = (0, XS.Clamp)(this.g, SS, HS), gS.b = (0, XS.Clamp)(this.b, SS, HS), gS
      }
      add(SS) {
        return new fS(this.r + SS.r, this.g + SS.g, this.b + SS.b)
      }
      addInPlace(SS) {
        return this.r += SS.r, this.g += SS.g, this.b += SS.b, this
      }
      addInPlaceFromFloats(SS, HS, gS) {
        return this.r += SS, this.g += HS, this.b += gS, this
      }
      addToRef(SS, HS) {
        return HS.r = this.r + SS.r, HS.g = this.g + SS.g, HS.b = this.b + SS.b, HS
      }
      subtract(SS) {
        return new fS(this.r - SS.r, this.g - SS.g, this.b - SS.b)
      }
      subtractToRef(SS, HS) {
        return HS.r = this.r - SS.r, HS.g = this.g - SS.g, HS.b = this.b - SS.b, HS
      }
      GtS(SS) {
        return this.r -= SS.r, this.g -= SS.g, this.b -= SS.b, this
      }
      subtractFromFloats(SS, HS, gS) {
        return new fS(this.r - SS, this.g - HS, this.b - gS)
      }
      subtractFromFloatsToRef(SS, HS, gS, tS) {
        return tS.r = this.r - SS, tS.g = this.g - HS, tS.b = this.b - gS, tS
      }
      clone() {
        return new fS(this.r, this.g, this.b)
      }
      dJ(SS) {
        return this.r = SS.r, this.g = SS.g, this.b = SS.b, this
      }
      I5(SS, HS, gS) {
        return this.r = SS, this.g = HS, this.b = gS, this
      }
      set(SS, HS, gS) {
        return this.I5(SS, HS, gS)
      }
      o_(SS) {
        return this.r = this.g = this.b = SS, this
      }
      toHexString() {
        const SS = Math.round(255 * this.r),
          HS = Math.round(255 * this.g),
          gS = Math.round(255 * this.b);
        return "#" + (0, XS.ToHex)(SS) + (0, XS.ToHex)(HS) + (0, XS.ToHex)(gS)
      }
      fromHexString(SS) {
        return "#" !== SS.substring(0, 1) || 7 !== SS.length || (this.r = parseInt(SS.substring(1, 3), 16) / 255, this.g = parseInt(SS.substring(3, 5), 16) / 255, this.b = parseInt(SS.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new fS)
      }
      toHSVToRef(SS) {
        const HS = this.r,
          gS = this.g,
          tS = this.b,
          bS = Math.max(HS, gS, tS),
          XS = Math.min(HS, gS, tS);
        let xS = 0,
          NS = 0;
        const qS = bS,
          uS = bS - XS;
        return 0 !== bS && (NS = uS / bS), bS != XS && (bS == HS ? (xS = (gS - tS) / uS, gS < tS && (xS += 6)) : bS == gS ? xS = (tS - HS) / uS + 2 : bS == tS && (xS = (HS - gS) / uS + 4), xS *= 60), SS.r = xS, SS.g = NS, SS.b = qS, SS
      }
      toLinearSpace() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = new fS;
        return this.toLinearSpaceToRef(HS, SS), HS
      }
      toLinearSpaceToRef(SS) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (SS.r = qS(this.r), SS.g = qS(this.g), SS.b = qS(this.b)) : (SS.r = NS(this.r), SS.g = NS(this.g), SS.b = NS(this.b)), this
      }
      toGammaSpace() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = new fS;
        return this.toGammaSpaceToRef(HS, SS), HS
      }
      toGammaSpaceToRef(SS) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (SS.r = IS(this.r), SS.g = IS(this.g), SS.b = IS(this.b)) : (SS.r = uS(this.r), SS.g = uS(this.g), SS.b = uS(this.b)), this
      }
      static HSVtoRGBToRef(SS, HS, gS, tS) {
        const bS = gS * HS,
          XS = SS / 60,
          xS = bS * (1 - Math.abs(XS % 2 - 1));
        let NS = 0,
          qS = 0,
          uS = 0;
        XS >= 0 && XS <= 1 ? (NS = bS, qS = xS) : XS >= 1 && XS <= 2 ? (NS = xS, qS = bS) : XS >= 2 && XS <= 3 ? (qS = bS, uS = xS) : XS >= 3 && XS <= 4 ? (qS = xS, uS = bS) : XS >= 4 && XS <= 5 ? (NS = xS, uS = bS) : XS >= 5 && XS <= 6 && (NS = bS, uS = xS);
        const IS = gS - bS;
        return tS.r = NS + IS, tS.g = qS + IS, tS.b = uS + IS, tS
      }
      static FromHSV(SS, HS, gS) {
        const tS = new fS(0, 0, 0);
        return fS.HSVtoRGBToRef(SS, HS, gS, tS), tS
      }
      static FromHexString(SS) {
        return new fS(0, 0, 0).fromHexString(SS)
      }
      static FromArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new fS(SS[HS], SS[HS + 1], SS[HS + 2])
      }
      static FromArrayToRef(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        gS.r = SS[HS], gS.g = SS[HS + 1], gS.b = SS[HS + 2]
      }
      static FromInts(SS, HS, gS) {
        return new fS(SS / 255, HS / 255, gS / 255)
      }
      static Lerp(SS, HS, gS) {
        const tS = new fS(0, 0, 0);
        return fS.LerpToRef(SS, HS, gS, tS), tS
      }
      static LerpToRef(SS, HS, gS, tS) {
        tS.r = SS.r + (HS.r - SS.r) * gS, tS.g = SS.g + (HS.g - SS.g) * gS, tS.b = SS.b + (HS.b - SS.b) * gS
      }
      static Hermite(SS, HS, gS, tS, bS) {
        const XS = bS * bS,
          xS = bS * XS,
          NS = 2 * xS - 3 * XS + 1,
          qS = -2 * xS + 3 * XS,
          uS = xS - 2 * XS + bS,
          IS = xS - XS,
          kS = SS.r * NS + gS.r * qS + HS.r * uS + tS.r * IS,
          aS = SS.g * NS + gS.g * qS + HS.g * uS + tS.g * IS,
          KS = SS.b * NS + gS.b * qS + HS.b * uS + tS.b * IS;
        return new fS(kS, aS, KS)
      }
      static Hermite1stDerivative(SS, HS, gS, tS, bS) {
        const XS = fS.Black();
        return this.Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS), XS
      }
      static Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS) {
        const xS = bS * bS;
        XS.r = 6 * (xS - bS) * SS.r + (3 * xS - 4 * bS + 1) * HS.r + 6 * (-xS + bS) * gS.r + (3 * xS - 2 * bS) * tS.r, XS.g = 6 * (xS - bS) * SS.g + (3 * xS - 4 * bS + 1) * HS.g + 6 * (-xS + bS) * gS.g + (3 * xS - 2 * bS) * tS.g, XS.b = 6 * (xS - bS) * SS.b + (3 * xS - 4 * bS + 1) * HS.b + 6 * (-xS + bS) * gS.b + (3 * xS - 2 * bS) * tS.b
      }
      static Red() {
        return new fS(1, 0, 0)
      }
      static Green() {
        return new fS(0, 1, 0)
      }
      static Blue() {
        return new fS(0, 0, 1)
      }
      static Black() {
        return new fS(0, 0, 0)
      }
      static get BlackReadOnly() {
        return fS._BlackReadOnly
      }
      static White() {
        return new fS(1, 1, 1)
      }
      static Purple() {
        return new fS(.5, 0, .5)
      }
      static Magenta() {
        return new fS(1, 0, 1)
      }
      static Yellow() {
        return new fS(1, 1, 0)
      }
      static Gray() {
        return new fS(.5, .5, .5)
      }
      static Teal() {
        return new fS(0, 1, 1)
      }
      static Random() {
        return new fS(Math.random(), Math.random(), Math.random())
      }
    }
    fS._V8PerformanceHack = new fS(.5, .5, .5), fS._BlackReadOnly = fS.Black();
    class kS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = SS, this.g = HS, this.b = gS, this.a = tS
      }
      lgS() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return SS[HS] = this.r, SS[HS + 1] = this.g, SS[HS + 2] = this.b, SS[HS + 3] = this.a, this
      }
      UHS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = SS[HS], this.g = SS[HS + 1], this.b = SS[HS + 2], this.a = SS[HS + 3], this
      }
      equals(SS) {
        return SS && this.r === SS.r && this.g === SS.g && this.b === SS.b && this.a === SS.a
      }
      add(SS) {
        return new kS(this.r + SS.r, this.g + SS.g, this.b + SS.b, this.a + SS.a)
      }
      addToRef(SS, HS) {
        return HS.r = this.r + SS.r, HS.g = this.g + SS.g, HS.b = this.b + SS.b, HS.a = this.a + SS.a, HS
      }
      addInPlace(SS) {
        return this.r += SS.r, this.g += SS.g, this.b += SS.b, this.a += SS.a, this
      }
      addInPlaceFromFloats(SS, HS, gS, tS) {
        return this.r += SS, this.g += HS, this.b += gS, this.a += tS, this
      }
      subtract(SS) {
        return new kS(this.r - SS.r, this.g - SS.g, this.b - SS.b, this.a - SS.a)
      }
      subtractToRef(SS, HS) {
        return HS.r = this.r - SS.r, HS.g = this.g - SS.g, HS.b = this.b - SS.b, HS.a = this.a - SS.a, HS
      }
      GtS(SS) {
        return this.r -= SS.r, this.g -= SS.g, this.b -= SS.b, this.a -= SS.a, this
      }
      subtractFromFloats(SS, HS, gS, tS) {
        return new kS(this.r - SS, this.g - HS, this.b - gS, this.a - tS)
      }
      subtractFromFloatsToRef(SS, HS, gS, tS, bS) {
        return bS.r = this.r - SS, bS.g = this.g - HS, bS.b = this.b - gS, bS.a = this.a - tS, bS
      }
      scale(SS) {
        return new kS(this.r * SS, this.g * SS, this.b * SS, this.a * SS)
      }
      scaleInPlace(SS) {
        return this.r *= SS, this.g *= SS, this.b *= SS, this.a *= SS, this
      }
      scaleToRef(SS, HS) {
        return HS.r = this.r * SS, HS.g = this.g * SS, HS.b = this.b * SS, HS.a = this.a * SS, HS
      }
      scaleAndAddToRef(SS, HS) {
        return HS.r += this.r * SS, HS.g += this.g * SS, HS.b += this.b * SS, HS.a += this.a * SS, HS
      }
      clampToRef() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        return gS.r = (0, XS.Clamp)(this.r, SS, HS), gS.g = (0, XS.Clamp)(this.g, SS, HS), gS.b = (0, XS.Clamp)(this.b, SS, HS), gS.a = (0, XS.Clamp)(this.a, SS, HS), gS
      }
      multiply(SS) {
        return new kS(this.r * SS.r, this.g * SS.g, this.b * SS.b, this.a * SS.a)
      }
      multiplyToRef(SS, HS) {
        return HS.r = this.r * SS.r, HS.g = this.g * SS.g, HS.b = this.b * SS.b, HS.a = this.a * SS.a, HS
      }
      multiplyInPlace(SS) {
        return this.r *= SS.r, this.g *= SS.g, this.b *= SS.b, this.a *= SS.a, this
      }
      multiplyByFloats(SS, HS, gS, tS) {
        return new kS(this.r * SS, this.g * HS, this.b * gS, this.a * tS)
      }
      divide(SS) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(SS, HS) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(SS) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(SS) {
        return this.r = Math.min(this.r, SS.r), this.g = Math.min(this.g, SS.g), this.b = Math.min(this.b, SS.b), this.a = Math.min(this.a, SS.a), this
      }
      maximizeInPlace(SS) {
        return this.r = Math.max(this.r, SS.r), this.g = Math.max(this.g, SS.g), this.b = Math.max(this.b, SS.b), this.a = Math.max(this.a, SS.a), this
      }
      minimizeInPlaceFromFloats(SS, HS, gS, tS) {
        return this.r = Math.min(SS, this.r), this.g = Math.min(HS, this.g), this.b = Math.min(gS, this.b), this.a = Math.min(tS, this.a), this
      }
      maximizeInPlaceFromFloats(SS, HS, gS, tS) {
        return this.r = Math.max(SS, this.r), this.g = Math.max(HS, this.g), this.b = Math.max(gS, this.b), this.a = Math.max(tS, this.a), this
      }
      floorToRef(SS) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(SS) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      gq() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(SS) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bS.d;
        return (0, XS.WithinEpsilon)(this.r, SS.r, HS) && (0, XS.WithinEpsilon)(this.g, SS.g, HS) && (0, XS.WithinEpsilon)(this.b, SS.b, HS) && (0, XS.WithinEpsilon)(this.a, SS.a, HS)
      }
      ZxS(SS, HS, gS, tS) {
        return this.r === SS && this.g === HS && this.b === gS && this.a === tS
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let SS = 255 * this.r | 0;
        return SS = 397 * SS ^ 255 * this.g, SS = 397 * SS ^ 255 * this.b, SS = 397 * SS ^ 255 * this.a, SS
      }
      clone() {
        return (new kS).dJ(this)
      }
      dJ(SS) {
        return this.r = SS.r, this.g = SS.g, this.b = SS.b, this.a = SS.a, this
      }
      I5(SS, HS, gS, tS) {
        return this.r = SS, this.g = HS, this.b = gS, this.a = tS, this
      }
      set(SS, HS, gS, tS) {
        return this.I5(SS, HS, gS, tS)
      }
      o_(SS) {
        return this.r = this.g = this.b = this.a = SS, this
      }
      toHexString() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = Math.round(255 * this.r),
          gS = Math.round(255 * this.g),
          tS = Math.round(255 * this.b);
        if (SS) return "#" + (0, XS.ToHex)(HS) + (0, XS.ToHex)(gS) + (0, XS.ToHex)(tS);
        const bS = Math.round(255 * this.a);
        return "#" + (0, XS.ToHex)(HS) + (0, XS.ToHex)(gS) + (0, XS.ToHex)(tS) + (0, XS.ToHex)(bS)
      }
      fromHexString(SS) {
        return "#" !== SS.substring(0, 1) || 9 !== SS.length && 7 !== SS.length || (this.r = parseInt(SS.substring(1, 3), 16) / 255, this.g = parseInt(SS.substring(3, 5), 16) / 255, this.b = parseInt(SS.substring(5, 7), 16) / 255, 9 === SS.length && (this.a = parseInt(SS.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = new kS;
        return this.toLinearSpaceToRef(HS, SS), HS
      }
      toLinearSpaceToRef(SS) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (SS.r = qS(this.r), SS.g = qS(this.g), SS.b = qS(this.b)) : (SS.r = NS(this.r), SS.g = NS(this.g), SS.b = NS(this.b)), SS.a = this.a, this
      }
      toGammaSpace() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const HS = new kS;
        return this.toGammaSpaceToRef(HS, SS), HS
      }
      toGammaSpaceToRef(SS) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (SS.r = IS(this.r), SS.g = IS(this.g), SS.b = IS(this.b)) : (SS.r = uS(this.r), SS.g = uS(this.g), SS.b = uS(this.b)), SS.a = this.a, this
      }
      static FromHexString(SS) {
        return "#" !== SS.substring(0, 1) || 9 !== SS.length && 7 !== SS.length ? new kS(0, 0, 0, 0) : new kS(0, 0, 0, 1).fromHexString(SS)
      }
      static Lerp(SS, HS, gS) {
        return kS.LerpToRef(SS, HS, gS, new kS)
      }
      static LerpToRef(SS, HS, gS, tS) {
        return tS.r = SS.r + (HS.r - SS.r) * gS, tS.g = SS.g + (HS.g - SS.g) * gS, tS.b = SS.b + (HS.b - SS.b) * gS, tS.a = SS.a + (HS.a - SS.a) * gS, tS
      }
      static Hermite(SS, HS, gS, tS, bS) {
        const XS = bS * bS,
          xS = bS * XS,
          NS = 2 * xS - 3 * XS + 1,
          qS = -2 * xS + 3 * XS,
          uS = xS - 2 * XS + bS,
          IS = xS - XS,
          fS = SS.r * NS + gS.r * qS + HS.r * uS + tS.r * IS,
          aS = SS.g * NS + gS.g * qS + HS.g * uS + tS.g * IS,
          KS = SS.b * NS + gS.b * qS + HS.b * uS + tS.b * IS,
          jS = SS.a * NS + gS.a * qS + HS.a * uS + tS.a * IS;
        return new kS(fS, aS, KS, jS)
      }
      static Hermite1stDerivative(SS, HS, gS, tS, bS) {
        const XS = new kS;
        return this.Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS), XS
      }
      static Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS) {
        const xS = bS * bS;
        XS.r = 6 * (xS - bS) * SS.r + (3 * xS - 4 * bS + 1) * HS.r + 6 * (-xS + bS) * gS.r + (3 * xS - 2 * bS) * tS.r, XS.g = 6 * (xS - bS) * SS.g + (3 * xS - 4 * bS + 1) * HS.g + 6 * (-xS + bS) * gS.g + (3 * xS - 2 * bS) * tS.g, XS.b = 6 * (xS - bS) * SS.b + (3 * xS - 4 * bS + 1) * HS.b + 6 * (-xS + bS) * gS.b + (3 * xS - 2 * bS) * tS.b, XS.a = 6 * (xS - bS) * SS.a + (3 * xS - 4 * bS + 1) * HS.a + 6 * (-xS + bS) * gS.a + (3 * xS - 2 * bS) * tS.a
      }
      static FromColor3(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new kS(SS.r, SS.g, SS.b, HS)
      }
      static FromArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new kS(SS[HS], SS[HS + 1], SS[HS + 2], SS[HS + 3])
      }
      static FromArrayToRef(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        gS.r = SS[HS], gS.g = SS[HS + 1], gS.b = SS[HS + 2], gS.a = SS[HS + 3]
      }
      static FromInts(SS, HS, gS, tS) {
        return new kS(SS / 255, HS / 255, gS / 255, tS / 255)
      }
      static CheckColors4(SS, HS) {
        if (SS.length === 3 * HS) {
          const HS = [];
          for (let gS = 0; gS < SS.length; gS += 3) {
            const tS = gS / 3 * 4;
            HS[tS] = SS[gS], HS[tS + 1] = SS[gS + 1], HS[tS + 2] = SS[gS + 2], HS[tS + 3] = 1
          }
          return HS
        }
        return SS
      }
    }
    kS._V8PerformanceHack = new kS(.5, .5, .5, .5);
    class aS {}
    aS.Color3 = (0, tS.d)(3, fS.Black), aS.Color4 = (0, tS.d)(3, (() => new kS(0, 0, 0, 0)));
    let KS = !1;

    function jS() {
      KS || (KS = !0, Object.defineProperties(fS.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(kS.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, xS.f)("BABYLON.Color3", fS), (0, xS.f)("BABYLON.Color4", kS))
    }
  },
  37123: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      h: () => tS,
      l: () => bS
    });
    const tS = 1 / 2.2,
      bS = 2.2;
    Math.sqrt(5);
    let XS = .001
  },
  37149: (SS, HS, gS) => {
    function tS(SS) {
      return parseInt(SS.toString().replace(/\W/g, ""))
    }

    function bS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(SS - HS) <= gS
    }

    function XS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return SS < HS - tS || SS > gS + tS
    }

    function xS(SS, HS) {
      return SS === HS ? SS : Math.random() * (HS - SS) + SS
    }

    function NS(SS, HS, gS) {
      return SS + (HS - SS) * gS
    }

    function qS(SS, HS, gS) {
      let tS = GS(HS - SS, 360);
      return tS > 180 && (tS -= 360), SS + tS * kS(gS)
    }

    function uS(SS, HS, gS) {
      let tS;
      return tS = SS != HS ? kS((gS - SS) / (HS - SS)) : 0, tS
    }

    function IS(SS, HS, gS, tS, bS) {
      const XS = bS * bS,
        xS = bS * XS;
      return SS * (2 * xS - 3 * XS + 1) + gS * (-2 * xS + 3 * XS) + HS * (xS - 2 * XS + bS) + tS * (xS - XS)
    }

    function fS(SS, HS, gS, tS, bS) {
      const XS = bS * bS;
      return 6 * (XS - bS) * SS + (3 * XS - 4 * bS + 1) * HS + 6 * (-XS + bS) * gS + (3 * XS - 2 * bS) * tS
    }

    function kS(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(gS, Math.max(HS, SS))
    }

    function aS(SS) {
      return SS -= 2 * Math.PI * Math.floor((SS + Math.PI) / (2 * Math.PI))
    }

    function KS(SS) {
      const HS = SS.toString(16);
      return SS <= 15 ? ("0" + HS).toUpperCase() : HS.toUpperCase()
    }

    function jS(SS) {
      if (Math.log2) return Math.floor(Math.log2(SS));
      if (SS < 0) return NaN;
      if (0 === SS) return -1 / 0;
      let HS = 0;
      if (SS < 1) {
        for (; SS < 1;) HS++, SS *= 2;
        HS = -HS
      } else if (SS > 1)
        for (; SS > 1;) HS++, SS = Math.floor(SS / 2);
      return HS
    }

    function GS(SS, HS) {
      return SS - Math.floor(SS / HS) * HS
    }

    function CS(SS, HS, gS) {
      return (SS - HS) / (gS - HS)
    }

    function nS(SS, HS, gS) {
      return SS * (gS - HS) + HS
    }

    function PS(SS, HS) {
      let gS = GS(HS - SS, 360);
      return gS > 180 && (gS -= 360), gS
    }

    function QS(SS, HS) {
      const gS = GS(SS, 2 * HS);
      return HS - Math.abs(gS - HS)
    }

    function DS(SS, HS, gS) {
      let tS = kS(gS);
      return tS = -2 * tS * tS * tS + 3 * tS * tS, HS * tS + SS * (1 - tS)
    }

    function wS(SS, HS, gS) {
      let tS;
      return tS = Math.abs(HS - SS) <= gS ? HS : SS + Math.sign(HS - SS) * gS, tS
    }

    function hS(SS, HS, gS) {
      const tS = PS(SS, HS);
      let bS;
      return bS = -gS < tS && tS < gS ? HS : wS(SS, HS = SS + tS, gS), bS
    }

    function ZS(SS, HS, gS) {
      return (SS - HS) / (gS - HS)
    }

    function JS(SS, HS, gS) {
      return (gS - HS) * SS + HS
    }

    function OS(SS, HS) {
      const gS = SS % HS;
      return 0 === gS ? HS : OS(HS, gS)
    }
    gS.r(HS), gS.d(HS, {
      Clamp: () => kS,
      DeltaAngle: () => PS,
      Denormalize: () => nS,
      ExtractAsInt: () => tS,
      Hermite: () => IS,
      Hermite1stDerivative: () => fS,
      HighestCommonFactor: () => OS,
      ILog2: () => jS,
      InverseLerp: () => uS,
      Lerp: () => NS,
      LerpAngle: () => qS,
      MoveTowards: () => wS,
      MoveTowardsAngle: () => hS,
      Normalize: () => CS,
      NormalizeRadians: () => aS,
      OutsideRange: () => XS,
      PercentToRange: () => JS,
      PingPong: () => QS,
      RandomRange: () => xS,
      RangeToPercent: () => ZS,
      Repeat: () => GS,
      SmoothStep: () => DS,
      ToHex: () => KS,
      WithinEpsilon: () => bS
    })
  },
  37129: (SS, HS, gS) => {
    function tS(SS, HS) {
      const gS = [];
      for (let tS = 0; tS < SS; ++tS) gS.push(HS());
      return gS
    }

    function bS(SS, HS) {
      return tS(SS, HS)
    }
    gS.d(HS, {
      d: () => tS,
      g: () => bS,
      k: () => xS
    });
    const XS = ["push", "splice", "pop", "shift", "unshift"];

    function xS(SS, HS) {
      const gS = XS.map((gS => function(SS, HS, gS) {
        const tS = SS[HS];
        if ("function" !== typeof tS) return null;
        const bS = function() {
          const tS = SS.length,
            XS = bS.previous.apply(SS, arguments);
          return gS(HS, tS), XS
        };
        return tS.next = bS, bS.previous = tS, SS[HS] = bS, () => {
          const gS = bS.previous;
          if (!gS) return;
          const tS = bS.next;
          tS ? (gS.next = tS, tS.previous = gS) : (gS.next = void 0, SS[HS] = gS), bS.next = void 0, bS.previous = void 0
        }
      }(SS, gS, HS)));
      return () => {
        for (const SS of gS) SS?.()
      }
    }
  },
  37164: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      f: () => bS
    });
    const tS = {};

    function bS(SS, HS) {
      tS[SS] = HS
    }

    function XS(SS) {
      return tS[SS]
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);