export const id = 232;
export const ids = [232];
export const modules = {
  37273: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => AD,
      h: () => UD,
      i: () => BD,
      l: () => fD
    });
    var pD = wD(37094),
      sD = wD(37088),
      KD = wD(37125),
      rD = wD(37134);

    function LD(DD) {
      return Math.pow(DD, sD.g)
    }

    function cD(DD) {
      return DD <= .04045 ? .0773993808 * DD : Math.pow(.947867299 * (DD + .055), 2.4)
    }

    function gD(DD) {
      return Math.pow(DD, sD.f)
    }

    function RD(DD) {
      return DD <= .0031308 ? 12.92 * DD : 1.055 * Math.pow(DD, .41666) - .055
    }
    class AD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = DD, this.g = zD, this.b = wD
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let DD = 255 * this.r | 0;
        return DD = 397 * DD ^ 255 * this.g, DD = 397 * DD ^ 255 * this.b, DD
      }
      toArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[zD] = this.r, DD[zD + 1] = this.g, DD[zD + 2] = this.b, this
      }
      cwD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return AD.FromArrayToRef(DD, zD, this), this
      }
      toColor4() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new UD(this.r, this.g, this.b, DD)
      }
      QpD() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(DD) {
        return new AD(this.r * DD.r, this.g * DD.g, this.b * DD.b)
      }
      multiplyToRef(DD, zD) {
        return zD.r = this.r * DD.r, zD.g = this.g * DD.g, zD.b = this.b * DD.b, zD
      }
      multiplyInPlace(DD) {
        return this.r *= DD.r, this.g *= DD.g, this.b *= DD.b, this
      }
      multiplyByFloats(DD, zD, wD) {
        return new AD(this.r * DD, this.g * zD, this.b * wD)
      }
      divide(DD) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(DD, zD) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(DD) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(DD) {
        return this.minimizeInPlaceFromFloats(DD.r, DD.g, DD.b)
      }
      maximizeInPlace(DD) {
        return this.maximizeInPlaceFromFloats(DD.r, DD.g, DD.b)
      }
      minimizeInPlaceFromFloats(DD, zD, wD) {
        return this.r = Math.min(DD, this.r), this.g = Math.min(zD, this.g), this.b = Math.min(wD, this.b), this
      }
      maximizeInPlaceFromFloats(DD, zD, wD) {
        return this.r = Math.max(DD, this.r), this.g = Math.max(zD, this.g), this.b = Math.max(wD, this.b), this
      }
      floorToRef(DD) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(DD) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(DD) {
        return DD && this.r === DD.r && this.g === DD.g && this.b === DD.b
      }
      equalsFloats(DD, zD, wD) {
        return this.sLD(DD, zD, wD)
      }
      sLD(DD, zD, wD) {
        return this.r === DD && this.g === zD && this.b === wD
      }
      equalsWithEpsilon(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD.b;
        return (0, KD.WithinEpsilon)(this.r, DD.r, zD) && (0, KD.WithinEpsilon)(this.g, DD.g, zD) && (0, KD.WithinEpsilon)(this.b, DD.b, zD)
      }
      ep() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(DD) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(DD) {
        return new AD(this.r * DD, this.g * DD, this.b * DD)
      }
      scaleInPlace(DD) {
        return this.r *= DD, this.g *= DD, this.b *= DD, this
      }
      scaleToRef(DD, zD) {
        return zD.r = this.r * DD, zD.g = this.g * DD, zD.b = this.b * DD, zD
      }
      scaleAndAddToRef(DD, zD) {
        return zD.r += this.r * DD, zD.g += this.g * DD, zD.b += this.b * DD, zD
      }
      clampToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        return wD.r = (0, KD.Clamp)(this.r, DD, zD), wD.g = (0, KD.Clamp)(this.g, DD, zD), wD.b = (0, KD.Clamp)(this.b, DD, zD), wD
      }
      add(DD) {
        return new AD(this.r + DD.r, this.g + DD.g, this.b + DD.b)
      }
      addInPlace(DD) {
        return this.r += DD.r, this.g += DD.g, this.b += DD.b, this
      }
      addInPlaceFromFloats(DD, zD, wD) {
        return this.r += DD, this.g += zD, this.b += wD, this
      }
      addToRef(DD, zD) {
        return zD.r = this.r + DD.r, zD.g = this.g + DD.g, zD.b = this.b + DD.b, zD
      }
      subtract(DD) {
        return new AD(this.r - DD.r, this.g - DD.g, this.b - DD.b)
      }
      subtractToRef(DD, zD) {
        return zD.r = this.r - DD.r, zD.g = this.g - DD.g, zD.b = this.b - DD.b, zD
      }
      apD(DD) {
        return this.r -= DD.r, this.g -= DD.g, this.b -= DD.b, this
      }
      subtractFromFloats(DD, zD, wD) {
        return new AD(this.r - DD, this.g - zD, this.b - wD)
      }
      subtractFromFloatsToRef(DD, zD, wD, pD) {
        return pD.r = this.r - DD, pD.g = this.g - zD, pD.b = this.b - wD, pD
      }
      clone() {
        return new AD(this.r, this.g, this.b)
      }
      pC(DD) {
        return this.r = DD.r, this.g = DD.g, this.b = DD.b, this
      }
      Z2(DD, zD, wD) {
        return this.r = DD, this.g = zD, this.b = wD, this
      }
      set(DD, zD, wD) {
        return this.Z2(DD, zD, wD)
      }
      I9(DD) {
        return this.r = this.g = this.b = DD, this
      }
      toHexString() {
        const DD = Math.round(255 * this.r),
          zD = Math.round(255 * this.g),
          wD = Math.round(255 * this.b);
        return "#" + (0, KD.ToHex)(DD) + (0, KD.ToHex)(zD) + (0, KD.ToHex)(wD)
      }
      fromHexString(DD) {
        return "#" !== DD.substring(0, 1) || 7 !== DD.length || (this.r = parseInt(DD.substring(1, 3), 16) / 255, this.g = parseInt(DD.substring(3, 5), 16) / 255, this.b = parseInt(DD.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new AD)
      }
      toHSVToRef(DD) {
        const zD = this.r,
          wD = this.g,
          pD = this.b,
          sD = Math.max(zD, wD, pD),
          KD = Math.min(zD, wD, pD);
        let rD = 0,
          LD = 0;
        const cD = sD,
          gD = sD - KD;
        return 0 !== sD && (LD = gD / sD), sD != KD && (sD == zD ? (rD = (wD - pD) / gD, wD < pD && (rD += 6)) : sD == wD ? rD = (pD - zD) / gD + 2 : sD == pD && (rD = (zD - wD) / gD + 4), rD *= 60), DD.r = rD, DD.g = LD, DD.b = cD, DD
      }
      toLinearSpace() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = new AD;
        return this.toLinearSpaceToRef(zD, DD), zD
      }
      toLinearSpaceToRef(DD) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (DD.r = cD(this.r), DD.g = cD(this.g), DD.b = cD(this.b)) : (DD.r = LD(this.r), DD.g = LD(this.g), DD.b = LD(this.b)), this
      }
      toGammaSpace() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = new AD;
        return this.toGammaSpaceToRef(zD, DD), zD
      }
      toGammaSpaceToRef(DD) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (DD.r = RD(this.r), DD.g = RD(this.g), DD.b = RD(this.b)) : (DD.r = gD(this.r), DD.g = gD(this.g), DD.b = gD(this.b)), this
      }
      static HSVtoRGBToRef(DD, zD, wD, pD) {
        const sD = wD * zD,
          KD = DD / 60,
          rD = sD * (1 - Math.abs(KD % 2 - 1));
        let LD = 0,
          cD = 0,
          gD = 0;
        KD >= 0 && KD <= 1 ? (LD = sD, cD = rD) : KD >= 1 && KD <= 2 ? (LD = rD, cD = sD) : KD >= 2 && KD <= 3 ? (cD = sD, gD = rD) : KD >= 3 && KD <= 4 ? (cD = rD, gD = sD) : KD >= 4 && KD <= 5 ? (LD = rD, gD = sD) : KD >= 5 && KD <= 6 && (LD = sD, gD = rD);
        const RD = wD - sD;
        return pD.r = LD + RD, pD.g = cD + RD, pD.b = gD + RD, pD
      }
      static FromHSV(DD, zD, wD) {
        const pD = new AD(0, 0, 0);
        return AD.HSVtoRGBToRef(DD, zD, wD, pD), pD
      }
      static FromHexString(DD) {
        return new AD(0, 0, 0).fromHexString(DD)
      }
      static FromArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new AD(DD[zD], DD[zD + 1], DD[zD + 2])
      }
      static FromArrayToRef(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        wD.r = DD[zD], wD.g = DD[zD + 1], wD.b = DD[zD + 2]
      }
      static FromInts(DD, zD, wD) {
        return new AD(DD / 255, zD / 255, wD / 255)
      }
      static Lerp(DD, zD, wD) {
        const pD = new AD(0, 0, 0);
        return AD.LerpToRef(DD, zD, wD, pD), pD
      }
      static LerpToRef(DD, zD, wD, pD) {
        pD.r = DD.r + (zD.r - DD.r) * wD, pD.g = DD.g + (zD.g - DD.g) * wD, pD.b = DD.b + (zD.b - DD.b) * wD
      }
      static Hermite(DD, zD, wD, pD, sD) {
        const KD = sD * sD,
          rD = sD * KD,
          LD = 2 * rD - 3 * KD + 1,
          cD = -2 * rD + 3 * KD,
          gD = rD - 2 * KD + sD,
          RD = rD - KD,
          UD = DD.r * LD + wD.r * cD + zD.r * gD + pD.r * RD,
          fD = DD.g * LD + wD.g * cD + zD.g * gD + pD.g * RD,
          ID = DD.b * LD + wD.b * cD + zD.b * gD + pD.b * RD;
        return new AD(UD, fD, ID)
      }
      static Hermite1stDerivative(DD, zD, wD, pD, sD) {
        const KD = AD.Black();
        return this.Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD), KD
      }
      static Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD) {
        const rD = sD * sD;
        KD.r = 6 * (rD - sD) * DD.r + (3 * rD - 4 * sD + 1) * zD.r + 6 * (-rD + sD) * wD.r + (3 * rD - 2 * sD) * pD.r, KD.g = 6 * (rD - sD) * DD.g + (3 * rD - 4 * sD + 1) * zD.g + 6 * (-rD + sD) * wD.g + (3 * rD - 2 * sD) * pD.g, KD.b = 6 * (rD - sD) * DD.b + (3 * rD - 4 * sD + 1) * zD.b + 6 * (-rD + sD) * wD.b + (3 * rD - 2 * sD) * pD.b
      }
      static Red() {
        return new AD(1, 0, 0)
      }
      static Green() {
        return new AD(0, 1, 0)
      }
      static Blue() {
        return new AD(0, 0, 1)
      }
      static Black() {
        return new AD(0, 0, 0)
      }
      static get BlackReadOnly() {
        return AD._BlackReadOnly
      }
      static White() {
        return new AD(1, 1, 1)
      }
      static Purple() {
        return new AD(.5, 0, .5)
      }
      static Magenta() {
        return new AD(1, 0, 1)
      }
      static Yellow() {
        return new AD(1, 1, 0)
      }
      static Gray() {
        return new AD(.5, .5, .5)
      }
      static Teal() {
        return new AD(0, 1, 1)
      }
      static Random() {
        return new AD(Math.random(), Math.random(), Math.random())
      }
    }
    AD._V8PerformanceHack = new AD(.5, .5, .5), AD._BlackReadOnly = AD.Black();
    class UD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = DD, this.g = zD, this.b = wD, this.a = pD
      }
      QpD() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[zD] = this.r, DD[zD + 1] = this.g, DD[zD + 2] = this.b, DD[zD + 3] = this.a, this
      }
      cwD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = DD[zD], this.g = DD[zD + 1], this.b = DD[zD + 2], this.a = DD[zD + 3], this
      }
      equals(DD) {
        return DD && this.r === DD.r && this.g === DD.g && this.b === DD.b && this.a === DD.a
      }
      add(DD) {
        return new UD(this.r + DD.r, this.g + DD.g, this.b + DD.b, this.a + DD.a)
      }
      addToRef(DD, zD) {
        return zD.r = this.r + DD.r, zD.g = this.g + DD.g, zD.b = this.b + DD.b, zD.a = this.a + DD.a, zD
      }
      addInPlace(DD) {
        return this.r += DD.r, this.g += DD.g, this.b += DD.b, this.a += DD.a, this
      }
      addInPlaceFromFloats(DD, zD, wD, pD) {
        return this.r += DD, this.g += zD, this.b += wD, this.a += pD, this
      }
      subtract(DD) {
        return new UD(this.r - DD.r, this.g - DD.g, this.b - DD.b, this.a - DD.a)
      }
      subtractToRef(DD, zD) {
        return zD.r = this.r - DD.r, zD.g = this.g - DD.g, zD.b = this.b - DD.b, zD.a = this.a - DD.a, zD
      }
      apD(DD) {
        return this.r -= DD.r, this.g -= DD.g, this.b -= DD.b, this.a -= DD.a, this
      }
      subtractFromFloats(DD, zD, wD, pD) {
        return new UD(this.r - DD, this.g - zD, this.b - wD, this.a - pD)
      }
      subtractFromFloatsToRef(DD, zD, wD, pD, sD) {
        return sD.r = this.r - DD, sD.g = this.g - zD, sD.b = this.b - wD, sD.a = this.a - pD, sD
      }
      scale(DD) {
        return new UD(this.r * DD, this.g * DD, this.b * DD, this.a * DD)
      }
      scaleInPlace(DD) {
        return this.r *= DD, this.g *= DD, this.b *= DD, this.a *= DD, this
      }
      scaleToRef(DD, zD) {
        return zD.r = this.r * DD, zD.g = this.g * DD, zD.b = this.b * DD, zD.a = this.a * DD, zD
      }
      scaleAndAddToRef(DD, zD) {
        return zD.r += this.r * DD, zD.g += this.g * DD, zD.b += this.b * DD, zD.a += this.a * DD, zD
      }
      clampToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        return wD.r = (0, KD.Clamp)(this.r, DD, zD), wD.g = (0, KD.Clamp)(this.g, DD, zD), wD.b = (0, KD.Clamp)(this.b, DD, zD), wD.a = (0, KD.Clamp)(this.a, DD, zD), wD
      }
      multiply(DD) {
        return new UD(this.r * DD.r, this.g * DD.g, this.b * DD.b, this.a * DD.a)
      }
      multiplyToRef(DD, zD) {
        return zD.r = this.r * DD.r, zD.g = this.g * DD.g, zD.b = this.b * DD.b, zD.a = this.a * DD.a, zD
      }
      multiplyInPlace(DD) {
        return this.r *= DD.r, this.g *= DD.g, this.b *= DD.b, this.a *= DD.a, this
      }
      multiplyByFloats(DD, zD, wD, pD) {
        return new UD(this.r * DD, this.g * zD, this.b * wD, this.a * pD)
      }
      divide(DD) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(DD, zD) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(DD) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(DD) {
        return this.r = Math.min(this.r, DD.r), this.g = Math.min(this.g, DD.g), this.b = Math.min(this.b, DD.b), this.a = Math.min(this.a, DD.a), this
      }
      maximizeInPlace(DD) {
        return this.r = Math.max(this.r, DD.r), this.g = Math.max(this.g, DD.g), this.b = Math.max(this.b, DD.b), this.a = Math.max(this.a, DD.a), this
      }
      minimizeInPlaceFromFloats(DD, zD, wD, pD) {
        return this.r = Math.min(DD, this.r), this.g = Math.min(zD, this.g), this.b = Math.min(wD, this.b), this.a = Math.min(pD, this.a), this
      }
      maximizeInPlaceFromFloats(DD, zD, wD, pD) {
        return this.r = Math.max(DD, this.r), this.g = Math.max(zD, this.g), this.b = Math.max(wD, this.b), this.a = Math.max(pD, this.a), this
      }
      floorToRef(DD) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(DD) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      ep() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(DD) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : sD.b;
        return (0, KD.WithinEpsilon)(this.r, DD.r, zD) && (0, KD.WithinEpsilon)(this.g, DD.g, zD) && (0, KD.WithinEpsilon)(this.b, DD.b, zD) && (0, KD.WithinEpsilon)(this.a, DD.a, zD)
      }
      sLD(DD, zD, wD, pD) {
        return this.r === DD && this.g === zD && this.b === wD && this.a === pD
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let DD = 255 * this.r | 0;
        return DD = 397 * DD ^ 255 * this.g, DD = 397 * DD ^ 255 * this.b, DD = 397 * DD ^ 255 * this.a, DD
      }
      clone() {
        return (new UD).pC(this)
      }
      pC(DD) {
        return this.r = DD.r, this.g = DD.g, this.b = DD.b, this.a = DD.a, this
      }
      Z2(DD, zD, wD, pD) {
        return this.r = DD, this.g = zD, this.b = wD, this.a = pD, this
      }
      set(DD, zD, wD, pD) {
        return this.Z2(DD, zD, wD, pD)
      }
      I9(DD) {
        return this.r = this.g = this.b = this.a = DD, this
      }
      toHexString() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = Math.round(255 * this.r),
          wD = Math.round(255 * this.g),
          pD = Math.round(255 * this.b);
        if (DD) return "#" + (0, KD.ToHex)(zD) + (0, KD.ToHex)(wD) + (0, KD.ToHex)(pD);
        const sD = Math.round(255 * this.a);
        return "#" + (0, KD.ToHex)(zD) + (0, KD.ToHex)(wD) + (0, KD.ToHex)(pD) + (0, KD.ToHex)(sD)
      }
      fromHexString(DD) {
        return "#" !== DD.substring(0, 1) || 9 !== DD.length && 7 !== DD.length || (this.r = parseInt(DD.substring(1, 3), 16) / 255, this.g = parseInt(DD.substring(3, 5), 16) / 255, this.b = parseInt(DD.substring(5, 7), 16) / 255, 9 === DD.length && (this.a = parseInt(DD.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = new UD;
        return this.toLinearSpaceToRef(zD, DD), zD
      }
      toLinearSpaceToRef(DD) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (DD.r = cD(this.r), DD.g = cD(this.g), DD.b = cD(this.b)) : (DD.r = LD(this.r), DD.g = LD(this.g), DD.b = LD(this.b)), DD.a = this.a, this
      }
      toGammaSpace() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zD = new UD;
        return this.toGammaSpaceToRef(zD, DD), zD
      }
      toGammaSpaceToRef(DD) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (DD.r = RD(this.r), DD.g = RD(this.g), DD.b = RD(this.b)) : (DD.r = gD(this.r), DD.g = gD(this.g), DD.b = gD(this.b)), DD.a = this.a, this
      }
      static FromHexString(DD) {
        return "#" !== DD.substring(0, 1) || 9 !== DD.length && 7 !== DD.length ? new UD(0, 0, 0, 0) : new UD(0, 0, 0, 1).fromHexString(DD)
      }
      static Lerp(DD, zD, wD) {
        return UD.LerpToRef(DD, zD, wD, new UD)
      }
      static LerpToRef(DD, zD, wD, pD) {
        return pD.r = DD.r + (zD.r - DD.r) * wD, pD.g = DD.g + (zD.g - DD.g) * wD, pD.b = DD.b + (zD.b - DD.b) * wD, pD.a = DD.a + (zD.a - DD.a) * wD, pD
      }
      static Hermite(DD, zD, wD, pD, sD) {
        const KD = sD * sD,
          rD = sD * KD,
          LD = 2 * rD - 3 * KD + 1,
          cD = -2 * rD + 3 * KD,
          gD = rD - 2 * KD + sD,
          RD = rD - KD,
          AD = DD.r * LD + wD.r * cD + zD.r * gD + pD.r * RD,
          fD = DD.g * LD + wD.g * cD + zD.g * gD + pD.g * RD,
          ID = DD.b * LD + wD.b * cD + zD.b * gD + pD.b * RD,
          BD = DD.a * LD + wD.a * cD + zD.a * gD + pD.a * RD;
        return new UD(AD, fD, ID, BD)
      }
      static Hermite1stDerivative(DD, zD, wD, pD, sD) {
        const KD = new UD;
        return this.Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD), KD
      }
      static Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD) {
        const rD = sD * sD;
        KD.r = 6 * (rD - sD) * DD.r + (3 * rD - 4 * sD + 1) * zD.r + 6 * (-rD + sD) * wD.r + (3 * rD - 2 * sD) * pD.r, KD.g = 6 * (rD - sD) * DD.g + (3 * rD - 4 * sD + 1) * zD.g + 6 * (-rD + sD) * wD.g + (3 * rD - 2 * sD) * pD.g, KD.b = 6 * (rD - sD) * DD.b + (3 * rD - 4 * sD + 1) * zD.b + 6 * (-rD + sD) * wD.b + (3 * rD - 2 * sD) * pD.b, KD.a = 6 * (rD - sD) * DD.a + (3 * rD - 4 * sD + 1) * zD.a + 6 * (-rD + sD) * wD.a + (3 * rD - 2 * sD) * pD.a
      }
      static FromColor3(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new UD(DD.r, DD.g, DD.b, zD)
      }
      static FromArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new UD(DD[zD], DD[zD + 1], DD[zD + 2], DD[zD + 3])
      }
      static FromArrayToRef(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        wD.r = DD[zD], wD.g = DD[zD + 1], wD.b = DD[zD + 2], wD.a = DD[zD + 3]
      }
      static FromInts(DD, zD, wD, pD) {
        return new UD(DD / 255, zD / 255, wD / 255, pD / 255)
      }
      static CheckColors4(DD, zD) {
        if (DD.length === 3 * zD) {
          const zD = [];
          for (let wD = 0; wD < DD.length; wD += 3) {
            const pD = wD / 3 * 4;
            zD[pD] = DD[wD], zD[pD + 1] = DD[wD + 1], zD[pD + 2] = DD[wD + 2], zD[pD + 3] = 1
          }
          return zD
        }
        return DD
      }
    }
    UD._V8PerformanceHack = new UD(.5, .5, .5, .5);
    class fD {}
    fD.Color3 = (0, pD.b)(3, AD.Black), fD.Color4 = (0, pD.b)(3, (() => new UD(0, 0, 0, 0)));
    let ID = !1;

    function BD() {
      ID || (ID = !0, Object.defineProperties(AD.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(UD.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, rD.i)("BABYLON.Color3", AD), (0, rD.i)("BABYLON.Color4", UD))
    }
  },
  37088: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => KD,
      f: () => pD,
      g: () => sD
    });
    const pD = 1 / 2.2,
      sD = 2.2;
    Math.sqrt(5);
    let KD = .001
  },
  37125: (DD, zD, wD) => {
    function pD(DD) {
      return parseInt(DD.toString().replace(/\W/g, ""))
    }

    function sD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(DD - zD) <= wD
    }

    function KD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return DD < zD - pD || DD > wD + pD
    }

    function rD(DD, zD) {
      return DD === zD ? DD : Math.random() * (zD - DD) + DD
    }

    function LD(DD, zD, wD) {
      return DD + (zD - DD) * wD
    }

    function cD(DD, zD, wD) {
      let pD = GD(zD - DD, 360);
      return pD > 180 && (pD -= 360), DD + pD * UD(wD)
    }

    function gD(DD, zD, wD) {
      let pD;
      return pD = DD != zD ? UD((wD - DD) / (zD - DD)) : 0, pD
    }

    function RD(DD, zD, wD, pD, sD) {
      const KD = sD * sD,
        rD = sD * KD;
      return DD * (2 * rD - 3 * KD + 1) + wD * (-2 * rD + 3 * KD) + zD * (rD - 2 * KD + sD) + pD * (rD - KD)
    }

    function AD(DD, zD, wD, pD, sD) {
      const KD = sD * sD;
      return 6 * (KD - sD) * DD + (3 * KD - 4 * sD + 1) * zD + 6 * (-KD + sD) * wD + (3 * KD - 2 * sD) * pD
    }

    function UD(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(wD, Math.max(zD, DD))
    }

    function fD(DD) {
      return DD -= 2 * Math.PI * Math.floor((DD + Math.PI) / (2 * Math.PI))
    }

    function ID(DD) {
      const zD = DD.toString(16);
      return DD <= 15 ? ("0" + zD).toUpperCase() : zD.toUpperCase()
    }

    function BD(DD) {
      if (Math.log2) return Math.floor(Math.log2(DD));
      if (DD < 0) return NaN;
      if (0 === DD) return -1 / 0;
      let zD = 0;
      if (DD < 1) {
        for (; DD < 1;) zD++, DD *= 2;
        zD = -zD
      } else if (DD > 1)
        for (; DD > 1;) zD++, DD = Math.floor(DD / 2);
      return zD
    }

    function GD(DD, zD) {
      return DD - Math.floor(DD / zD) * zD
    }

    function hD(DD, zD, wD) {
      return (DD - zD) / (wD - zD)
    }

    function nD(DD, zD, wD) {
      return DD * (wD - zD) + zD
    }

    function MD(DD, zD) {
      let wD = GD(zD - DD, 360);
      return wD > 180 && (wD -= 360), wD
    }

    function OD(DD, zD) {
      const wD = GD(DD, 2 * zD);
      return zD - Math.abs(wD - zD)
    }

    function JD(DD, zD, wD) {
      let pD = UD(wD);
      return pD = -2 * pD * pD * pD + 3 * pD * pD, zD * pD + DD * (1 - pD)
    }

    function ED(DD, zD, wD) {
      let pD;
      return pD = Math.abs(zD - DD) <= wD ? zD : DD + Math.sign(zD - DD) * wD, pD
    }

    function QD(DD, zD, wD) {
      const pD = MD(DD, zD);
      let sD;
      return sD = -wD < pD && pD < wD ? zD : ED(DD, zD = DD + pD, wD), sD
    }

    function XD(DD, zD, wD) {
      return (DD - zD) / (wD - zD)
    }

    function VD(DD, zD, wD) {
      return (wD - zD) * DD + zD
    }

    function PD(DD, zD) {
      const wD = DD % zD;
      return 0 === wD ? zD : PD(zD, wD)
    }
    wD.r(zD), wD.d(zD, {
      Clamp: () => UD,
      DeltaAngle: () => MD,
      Denormalize: () => nD,
      ExtractAsInt: () => pD,
      Hermite: () => RD,
      Hermite1stDerivative: () => AD,
      HighestCommonFactor: () => PD,
      ILog2: () => BD,
      InverseLerp: () => gD,
      Lerp: () => LD,
      LerpAngle: () => cD,
      MoveTowards: () => ED,
      MoveTowardsAngle: () => QD,
      Normalize: () => hD,
      NormalizeRadians: () => fD,
      OutsideRange: () => KD,
      PercentToRange: () => VD,
      PingPong: () => OD,
      RandomRange: () => rD,
      RangeToPercent: () => XD,
      Repeat: () => GD,
      SmoothStep: () => JD,
      ToHex: () => ID,
      WithinEpsilon: () => sD
    })
  },
  37094: (DD, zD, wD) => {
    function pD(DD, zD) {
      const wD = [];
      for (let pD = 0; pD < DD; ++pD) wD.push(zD());
      return wD
    }

    function sD(DD, zD) {
      return pD(DD, zD)
    }
    wD.d(zD, {
      b: () => pD,
      e: () => sD,
      i: () => rD
    });
    const KD = ["push", "splice", "pop", "shift", "unshift"];

    function rD(DD, zD) {
      const wD = KD.map((wD => function(DD, zD, wD) {
        const pD = DD[zD];
        if ("function" !== typeof pD) return null;
        const sD = function() {
          const pD = DD.length,
            KD = sD.previous.apply(DD, arguments);
          return wD(zD, pD), KD
        };
        return pD.next = sD, sD.previous = pD, DD[zD] = sD, () => {
          const wD = sD.previous;
          if (!wD) return;
          const pD = sD.next;
          pD ? (wD.next = pD, pD.previous = wD) : (wD.next = void 0, DD[zD] = wD), sD.next = void 0, sD.previous = void 0
        }
      }(DD, wD, zD)));
      return () => {
        for (const DD of wD) DD?.()
      }
    }
  },
  37134: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      i: () => sD
    });
    const pD = {};

    function sD(DD, zD) {
      pD[DD] = zD
    }

    function KD(DD) {
      return pD[DD]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);