export const id = 255;
export const ids = [255];
export const modules = {
  38389: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => ZV,
      h: () => vV,
      i: () => bV,
      k: () => rV
    });
    var JV = xV(38278),
      YV = xV(38272),
      UV = xV(38303),
      yV = xV(38318);

    function pV(VV) {
      return Math.pow(VV, YV.f)
    }

    function QV(VV) {
      return VV <= .04045 ? .0773993808 * VV : Math.pow(.947867299 * (VV + .055), 2.4)
    }

    function nV(VV) {
      return Math.pow(VV, YV.c)
    }

    function wV(VV) {
      return VV <= .0031308 ? 12.92 * VV : 1.055 * Math.pow(VV, .41666) - .055
    }
    class ZV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = VV, this.g = eV, this.b = xV
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let VV = 255 * this.r | 0;
        return VV = 397 * VV ^ 255 * this.g, VV = 397 * VV ^ 255 * this.b, VV
      }
      toArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return VV[eV] = this.r, VV[eV + 1] = this.g, VV[eV + 2] = this.b, this
      }
      wZ(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ZV.FromArrayToRef(VV, eV, this), this
      }
      toColor4() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new vV(this.r, this.g, this.b, VV)
      }
      WYV() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(VV) {
        return new ZV(this.r * VV.r, this.g * VV.g, this.b * VV.b)
      }
      multiplyToRef(VV, eV) {
        return eV.r = this.r * VV.r, eV.g = this.g * VV.g, eV.b = this.b * VV.b, eV
      }
      multiplyInPlace(VV) {
        return this.r *= VV.r, this.g *= VV.g, this.b *= VV.b, this
      }
      multiplyByFloats(VV, eV, xV) {
        return new ZV(this.r * VV, this.g * eV, this.b * xV)
      }
      divide(VV) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(VV, eV) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(VV) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(VV) {
        return this.minimizeInPlaceFromFloats(VV.r, VV.g, VV.b)
      }
      maximizeInPlace(VV) {
        return this.maximizeInPlaceFromFloats(VV.r, VV.g, VV.b)
      }
      minimizeInPlaceFromFloats(VV, eV, xV) {
        return this.r = Math.min(VV, this.r), this.g = Math.min(eV, this.g), this.b = Math.min(xV, this.b), this
      }
      maximizeInPlaceFromFloats(VV, eV, xV) {
        return this.r = Math.max(VV, this.r), this.g = Math.max(eV, this.g), this.b = Math.max(xV, this.b), this
      }
      floorToRef(VV) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(VV) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(VV) {
        return VV && this.r === VV.r && this.g === VV.g && this.b === VV.b
      }
      equalsFloats(VV, eV, xV) {
        return this.rQV(VV, eV, xV)
      }
      rQV(VV, eV, xV) {
        return this.r === VV && this.g === eV && this.b === xV
      }
      equalsWithEpsilon(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV.b;
        return (0, UV.WithinEpsilon)(this.r, VV.r, eV) && (0, UV.WithinEpsilon)(this.g, VV.g, eV) && (0, UV.WithinEpsilon)(this.b, VV.b, eV)
      }
      gr() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(VV) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(VV) {
        return new ZV(this.r * VV, this.g * VV, this.b * VV)
      }
      scaleInPlace(VV) {
        return this.r *= VV, this.g *= VV, this.b *= VV, this
      }
      scaleToRef(VV, eV) {
        return eV.r = this.r * VV, eV.g = this.g * VV, eV.b = this.b * VV, eV
      }
      scaleAndAddToRef(VV, eV) {
        return eV.r += this.r * VV, eV.g += this.g * VV, eV.b += this.b * VV, eV
      }
      clampToRef() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        return xV.r = (0, UV.Clamp)(this.r, VV, eV), xV.g = (0, UV.Clamp)(this.g, VV, eV), xV.b = (0, UV.Clamp)(this.b, VV, eV), xV
      }
      add(VV) {
        return new ZV(this.r + VV.r, this.g + VV.g, this.b + VV.b)
      }
      addInPlace(VV) {
        return this.r += VV.r, this.g += VV.g, this.b += VV.b, this
      }
      addInPlaceFromFloats(VV, eV, xV) {
        return this.r += VV, this.g += eV, this.b += xV, this
      }
      addToRef(VV, eV) {
        return eV.r = this.r + VV.r, eV.g = this.g + VV.g, eV.b = this.b + VV.b, eV
      }
      subtract(VV) {
        return new ZV(this.r - VV.r, this.g - VV.g, this.b - VV.b)
      }
      subtractToRef(VV, eV) {
        return eV.r = this.r - VV.r, eV.g = this.g - VV.g, eV.b = this.b - VV.b, eV
      }
      IYV(VV) {
        return this.r -= VV.r, this.g -= VV.g, this.b -= VV.b, this
      }
      subtractFromFloats(VV, eV, xV) {
        return new ZV(this.r - VV, this.g - eV, this.b - xV)
      }
      subtractFromFloatsToRef(VV, eV, xV, JV) {
        return JV.r = this.r - VV, JV.g = this.g - eV, JV.b = this.b - xV, JV
      }
      clone() {
        return new ZV(this.r, this.g, this.b)
      }
      iG(VV) {
        return this.r = VV.r, this.g = VV.g, this.b = VV.b, this
      }
      FeV(VV, eV, xV) {
        return this.r = VV, this.g = eV, this.b = xV, this
      }
      set(VV, eV, xV) {
        return this.FeV(VV, eV, xV)
      }
      HVV(VV) {
        return this.r = this.g = this.b = VV, this
      }
      toHexString() {
        const VV = Math.round(255 * this.r),
          eV = Math.round(255 * this.g),
          xV = Math.round(255 * this.b);
        return "#" + (0, UV.ToHex)(VV) + (0, UV.ToHex)(eV) + (0, UV.ToHex)(xV)
      }
      fromHexString(VV) {
        return "#" !== VV.substring(0, 1) || 7 !== VV.length || (this.r = parseInt(VV.substring(1, 3), 16) / 255, this.g = parseInt(VV.substring(3, 5), 16) / 255, this.b = parseInt(VV.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new ZV)
      }
      toHSVToRef(VV) {
        const eV = this.r,
          xV = this.g,
          JV = this.b,
          YV = Math.max(eV, xV, JV),
          UV = Math.min(eV, xV, JV);
        let yV = 0,
          pV = 0;
        const QV = YV,
          nV = YV - UV;
        return 0 !== YV && (pV = nV / YV), YV != UV && (YV == eV ? (yV = (xV - JV) / nV, xV < JV && (yV += 6)) : YV == xV ? yV = (JV - eV) / nV + 2 : YV == JV && (yV = (eV - xV) / nV + 4), yV *= 60), VV.r = yV, VV.g = pV, VV.b = QV, VV
      }
      toLinearSpace() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = new ZV;
        return this.toLinearSpaceToRef(eV, VV), eV
      }
      toLinearSpaceToRef(VV) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (VV.r = QV(this.r), VV.g = QV(this.g), VV.b = QV(this.b)) : (VV.r = pV(this.r), VV.g = pV(this.g), VV.b = pV(this.b)), this
      }
      toGammaSpace() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = new ZV;
        return this.toGammaSpaceToRef(eV, VV), eV
      }
      toGammaSpaceToRef(VV) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (VV.r = wV(this.r), VV.g = wV(this.g), VV.b = wV(this.b)) : (VV.r = nV(this.r), VV.g = nV(this.g), VV.b = nV(this.b)), this
      }
      static HSVtoRGBToRef(VV, eV, xV, JV) {
        const YV = xV * eV,
          UV = VV / 60,
          yV = YV * (1 - Math.abs(UV % 2 - 1));
        let pV = 0,
          QV = 0,
          nV = 0;
        UV >= 0 && UV <= 1 ? (pV = YV, QV = yV) : UV >= 1 && UV <= 2 ? (pV = yV, QV = YV) : UV >= 2 && UV <= 3 ? (QV = YV, nV = yV) : UV >= 3 && UV <= 4 ? (QV = yV, nV = YV) : UV >= 4 && UV <= 5 ? (pV = yV, nV = YV) : UV >= 5 && UV <= 6 && (pV = YV, nV = yV);
        const wV = xV - YV;
        return JV.r = pV + wV, JV.g = QV + wV, JV.b = nV + wV, JV
      }
      static FromHSV(VV, eV, xV) {
        const JV = new ZV(0, 0, 0);
        return ZV.HSVtoRGBToRef(VV, eV, xV, JV), JV
      }
      static FromHexString(VV) {
        return new ZV(0, 0, 0).fromHexString(VV)
      }
      static FromArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ZV(VV[eV], VV[eV + 1], VV[eV + 2])
      }
      static FromArrayToRef(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        xV.r = VV[eV], xV.g = VV[eV + 1], xV.b = VV[eV + 2]
      }
      static FromInts(VV, eV, xV) {
        return new ZV(VV / 255, eV / 255, xV / 255)
      }
      static Lerp(VV, eV, xV) {
        const JV = new ZV(0, 0, 0);
        return ZV.LerpToRef(VV, eV, xV, JV), JV
      }
      static LerpToRef(VV, eV, xV, JV) {
        JV.r = VV.r + (eV.r - VV.r) * xV, JV.g = VV.g + (eV.g - VV.g) * xV, JV.b = VV.b + (eV.b - VV.b) * xV
      }
      static Hermite(VV, eV, xV, JV, YV) {
        const UV = YV * YV,
          yV = YV * UV,
          pV = 2 * yV - 3 * UV + 1,
          QV = -2 * yV + 3 * UV,
          nV = yV - 2 * UV + YV,
          wV = yV - UV,
          vV = VV.r * pV + xV.r * QV + eV.r * nV + JV.r * wV,
          rV = VV.g * pV + xV.g * QV + eV.g * nV + JV.g * wV,
          kV = VV.b * pV + xV.b * QV + eV.b * nV + JV.b * wV;
        return new ZV(vV, rV, kV)
      }
      static Hermite1stDerivative(VV, eV, xV, JV, YV) {
        const UV = ZV.Black();
        return this.Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV), UV
      }
      static Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV) {
        const yV = YV * YV;
        UV.r = 6 * (yV - YV) * VV.r + (3 * yV - 4 * YV + 1) * eV.r + 6 * (-yV + YV) * xV.r + (3 * yV - 2 * YV) * JV.r, UV.g = 6 * (yV - YV) * VV.g + (3 * yV - 4 * YV + 1) * eV.g + 6 * (-yV + YV) * xV.g + (3 * yV - 2 * YV) * JV.g, UV.b = 6 * (yV - YV) * VV.b + (3 * yV - 4 * YV + 1) * eV.b + 6 * (-yV + YV) * xV.b + (3 * yV - 2 * YV) * JV.b
      }
      static Red() {
        return new ZV(1, 0, 0)
      }
      static Green() {
        return new ZV(0, 1, 0)
      }
      static Blue() {
        return new ZV(0, 0, 1)
      }
      static Black() {
        return new ZV(0, 0, 0)
      }
      static get BlackReadOnly() {
        return ZV._BlackReadOnly
      }
      static White() {
        return new ZV(1, 1, 1)
      }
      static Purple() {
        return new ZV(.5, 0, .5)
      }
      static Magenta() {
        return new ZV(1, 0, 1)
      }
      static Yellow() {
        return new ZV(1, 1, 0)
      }
      static Gray() {
        return new ZV(.5, .5, .5)
      }
      static Teal() {
        return new ZV(0, 1, 1)
      }
      static Random() {
        return new ZV(Math.random(), Math.random(), Math.random())
      }
    }
    ZV._V8PerformanceHack = new ZV(.5, .5, .5), ZV._BlackReadOnly = ZV.Black();
    class vV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = VV, this.g = eV, this.b = xV, this.a = JV
      }
      WYV() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return VV[eV] = this.r, VV[eV + 1] = this.g, VV[eV + 2] = this.b, VV[eV + 3] = this.a, this
      }
      wZ(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = VV[eV], this.g = VV[eV + 1], this.b = VV[eV + 2], this.a = VV[eV + 3], this
      }
      equals(VV) {
        return VV && this.r === VV.r && this.g === VV.g && this.b === VV.b && this.a === VV.a
      }
      add(VV) {
        return new vV(this.r + VV.r, this.g + VV.g, this.b + VV.b, this.a + VV.a)
      }
      addToRef(VV, eV) {
        return eV.r = this.r + VV.r, eV.g = this.g + VV.g, eV.b = this.b + VV.b, eV.a = this.a + VV.a, eV
      }
      addInPlace(VV) {
        return this.r += VV.r, this.g += VV.g, this.b += VV.b, this.a += VV.a, this
      }
      addInPlaceFromFloats(VV, eV, xV, JV) {
        return this.r += VV, this.g += eV, this.b += xV, this.a += JV, this
      }
      subtract(VV) {
        return new vV(this.r - VV.r, this.g - VV.g, this.b - VV.b, this.a - VV.a)
      }
      subtractToRef(VV, eV) {
        return eV.r = this.r - VV.r, eV.g = this.g - VV.g, eV.b = this.b - VV.b, eV.a = this.a - VV.a, eV
      }
      IYV(VV) {
        return this.r -= VV.r, this.g -= VV.g, this.b -= VV.b, this.a -= VV.a, this
      }
      subtractFromFloats(VV, eV, xV, JV) {
        return new vV(this.r - VV, this.g - eV, this.b - xV, this.a - JV)
      }
      subtractFromFloatsToRef(VV, eV, xV, JV, YV) {
        return YV.r = this.r - VV, YV.g = this.g - eV, YV.b = this.b - xV, YV.a = this.a - JV, YV
      }
      scale(VV) {
        return new vV(this.r * VV, this.g * VV, this.b * VV, this.a * VV)
      }
      scaleInPlace(VV) {
        return this.r *= VV, this.g *= VV, this.b *= VV, this.a *= VV, this
      }
      scaleToRef(VV, eV) {
        return eV.r = this.r * VV, eV.g = this.g * VV, eV.b = this.b * VV, eV.a = this.a * VV, eV
      }
      scaleAndAddToRef(VV, eV) {
        return eV.r += this.r * VV, eV.g += this.g * VV, eV.b += this.b * VV, eV.a += this.a * VV, eV
      }
      clampToRef() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        return xV.r = (0, UV.Clamp)(this.r, VV, eV), xV.g = (0, UV.Clamp)(this.g, VV, eV), xV.b = (0, UV.Clamp)(this.b, VV, eV), xV.a = (0, UV.Clamp)(this.a, VV, eV), xV
      }
      multiply(VV) {
        return new vV(this.r * VV.r, this.g * VV.g, this.b * VV.b, this.a * VV.a)
      }
      multiplyToRef(VV, eV) {
        return eV.r = this.r * VV.r, eV.g = this.g * VV.g, eV.b = this.b * VV.b, eV.a = this.a * VV.a, eV
      }
      multiplyInPlace(VV) {
        return this.r *= VV.r, this.g *= VV.g, this.b *= VV.b, this.a *= VV.a, this
      }
      multiplyByFloats(VV, eV, xV, JV) {
        return new vV(this.r * VV, this.g * eV, this.b * xV, this.a * JV)
      }
      divide(VV) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(VV, eV) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(VV) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(VV) {
        return this.r = Math.min(this.r, VV.r), this.g = Math.min(this.g, VV.g), this.b = Math.min(this.b, VV.b), this.a = Math.min(this.a, VV.a), this
      }
      maximizeInPlace(VV) {
        return this.r = Math.max(this.r, VV.r), this.g = Math.max(this.g, VV.g), this.b = Math.max(this.b, VV.b), this.a = Math.max(this.a, VV.a), this
      }
      minimizeInPlaceFromFloats(VV, eV, xV, JV) {
        return this.r = Math.min(VV, this.r), this.g = Math.min(eV, this.g), this.b = Math.min(xV, this.b), this.a = Math.min(JV, this.a), this
      }
      maximizeInPlaceFromFloats(VV, eV, xV, JV) {
        return this.r = Math.max(VV, this.r), this.g = Math.max(eV, this.g), this.b = Math.max(xV, this.b), this.a = Math.max(JV, this.a), this
      }
      floorToRef(VV) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(VV) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      gr() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(VV) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YV.b;
        return (0, UV.WithinEpsilon)(this.r, VV.r, eV) && (0, UV.WithinEpsilon)(this.g, VV.g, eV) && (0, UV.WithinEpsilon)(this.b, VV.b, eV) && (0, UV.WithinEpsilon)(this.a, VV.a, eV)
      }
      rQV(VV, eV, xV, JV) {
        return this.r === VV && this.g === eV && this.b === xV && this.a === JV
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let VV = 255 * this.r | 0;
        return VV = 397 * VV ^ 255 * this.g, VV = 397 * VV ^ 255 * this.b, VV = 397 * VV ^ 255 * this.a, VV
      }
      clone() {
        return (new vV).iG(this)
      }
      iG(VV) {
        return this.r = VV.r, this.g = VV.g, this.b = VV.b, this.a = VV.a, this
      }
      FeV(VV, eV, xV, JV) {
        return this.r = VV, this.g = eV, this.b = xV, this.a = JV, this
      }
      set(VV, eV, xV, JV) {
        return this.FeV(VV, eV, xV, JV)
      }
      HVV(VV) {
        return this.r = this.g = this.b = this.a = VV, this
      }
      toHexString() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = Math.round(255 * this.r),
          xV = Math.round(255 * this.g),
          JV = Math.round(255 * this.b);
        if (VV) return "#" + (0, UV.ToHex)(eV) + (0, UV.ToHex)(xV) + (0, UV.ToHex)(JV);
        const YV = Math.round(255 * this.a);
        return "#" + (0, UV.ToHex)(eV) + (0, UV.ToHex)(xV) + (0, UV.ToHex)(JV) + (0, UV.ToHex)(YV)
      }
      fromHexString(VV) {
        return "#" !== VV.substring(0, 1) || 9 !== VV.length && 7 !== VV.length || (this.r = parseInt(VV.substring(1, 3), 16) / 255, this.g = parseInt(VV.substring(3, 5), 16) / 255, this.b = parseInt(VV.substring(5, 7), 16) / 255, 9 === VV.length && (this.a = parseInt(VV.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = new vV;
        return this.toLinearSpaceToRef(eV, VV), eV
      }
      toLinearSpaceToRef(VV) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (VV.r = QV(this.r), VV.g = QV(this.g), VV.b = QV(this.b)) : (VV.r = pV(this.r), VV.g = pV(this.g), VV.b = pV(this.b)), VV.a = this.a, this
      }
      toGammaSpace() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const eV = new vV;
        return this.toGammaSpaceToRef(eV, VV), eV
      }
      toGammaSpaceToRef(VV) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (VV.r = wV(this.r), VV.g = wV(this.g), VV.b = wV(this.b)) : (VV.r = nV(this.r), VV.g = nV(this.g), VV.b = nV(this.b)), VV.a = this.a, this
      }
      static FromHexString(VV) {
        return "#" !== VV.substring(0, 1) || 9 !== VV.length && 7 !== VV.length ? new vV(0, 0, 0, 0) : new vV(0, 0, 0, 1).fromHexString(VV)
      }
      static Lerp(VV, eV, xV) {
        return vV.LerpToRef(VV, eV, xV, new vV)
      }
      static LerpToRef(VV, eV, xV, JV) {
        return JV.r = VV.r + (eV.r - VV.r) * xV, JV.g = VV.g + (eV.g - VV.g) * xV, JV.b = VV.b + (eV.b - VV.b) * xV, JV.a = VV.a + (eV.a - VV.a) * xV, JV
      }
      static Hermite(VV, eV, xV, JV, YV) {
        const UV = YV * YV,
          yV = YV * UV,
          pV = 2 * yV - 3 * UV + 1,
          QV = -2 * yV + 3 * UV,
          nV = yV - 2 * UV + YV,
          wV = yV - UV,
          ZV = VV.r * pV + xV.r * QV + eV.r * nV + JV.r * wV,
          rV = VV.g * pV + xV.g * QV + eV.g * nV + JV.g * wV,
          kV = VV.b * pV + xV.b * QV + eV.b * nV + JV.b * wV,
          bV = VV.a * pV + xV.a * QV + eV.a * nV + JV.a * wV;
        return new vV(ZV, rV, kV, bV)
      }
      static Hermite1stDerivative(VV, eV, xV, JV, YV) {
        const UV = new vV;
        return this.Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV), UV
      }
      static Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV) {
        const yV = YV * YV;
        UV.r = 6 * (yV - YV) * VV.r + (3 * yV - 4 * YV + 1) * eV.r + 6 * (-yV + YV) * xV.r + (3 * yV - 2 * YV) * JV.r, UV.g = 6 * (yV - YV) * VV.g + (3 * yV - 4 * YV + 1) * eV.g + 6 * (-yV + YV) * xV.g + (3 * yV - 2 * YV) * JV.g, UV.b = 6 * (yV - YV) * VV.b + (3 * yV - 4 * YV + 1) * eV.b + 6 * (-yV + YV) * xV.b + (3 * yV - 2 * YV) * JV.b, UV.a = 6 * (yV - YV) * VV.a + (3 * yV - 4 * YV + 1) * eV.a + 6 * (-yV + YV) * xV.a + (3 * yV - 2 * YV) * JV.a
      }
      static FromColor3(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new vV(VV.r, VV.g, VV.b, eV)
      }
      static FromArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new vV(VV[eV], VV[eV + 1], VV[eV + 2], VV[eV + 3])
      }
      static FromArrayToRef(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        xV.r = VV[eV], xV.g = VV[eV + 1], xV.b = VV[eV + 2], xV.a = VV[eV + 3]
      }
      static FromInts(VV, eV, xV, JV) {
        return new vV(VV / 255, eV / 255, xV / 255, JV / 255)
      }
      static CheckColors4(VV, eV) {
        if (VV.length === 3 * eV) {
          const eV = [];
          for (let xV = 0; xV < VV.length; xV += 3) {
            const JV = xV / 3 * 4;
            eV[JV] = VV[xV], eV[JV + 1] = VV[xV + 1], eV[JV + 2] = VV[xV + 2], eV[JV + 3] = 1
          }
          return eV
        }
        return VV
      }
    }
    vV._V8PerformanceHack = new vV(.5, .5, .5, .5);
    class rV {}
    rV.Color3 = (0, JV.e)(3, ZV.Black), rV.Color4 = (0, JV.e)(3, (() => new vV(0, 0, 0, 0)));
    let kV = !1;

    function bV() {
      kV || (kV = !0, Object.defineProperties(ZV.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(vV.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, yV.d)("BABYLON.Color3", ZV), (0, yV.d)("BABYLON.Color4", vV))
    }
  },
  38272: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => UV,
      c: () => JV,
      f: () => YV
    });
    const JV = 1 / 2.2,
      YV = 2.2;
    Math.sqrt(5);
    let UV = .001
  },
  38303: (VV, eV, xV) => {
    function JV(VV) {
      return parseInt(VV.toString().replace(/\W/g, ""))
    }

    function YV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(VV - eV) <= xV
    }

    function UV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return VV < eV - JV || VV > xV + JV
    }

    function yV(VV, eV) {
      return VV === eV ? VV : Math.random() * (eV - VV) + VV
    }

    function pV(VV, eV, xV) {
      return VV + (eV - VV) * xV
    }

    function QV(VV, eV, xV) {
      let JV = EV(eV - VV, 360);
      return JV > 180 && (JV -= 360), VV + JV * vV(xV)
    }

    function nV(VV, eV, xV) {
      let JV;
      return JV = VV != eV ? vV((xV - VV) / (eV - VV)) : 0, JV
    }

    function wV(VV, eV, xV, JV, YV) {
      const UV = YV * YV,
        yV = YV * UV;
      return VV * (2 * yV - 3 * UV + 1) + xV * (-2 * yV + 3 * UV) + eV * (yV - 2 * UV + YV) + JV * (yV - UV)
    }

    function ZV(VV, eV, xV, JV, YV) {
      const UV = YV * YV;
      return 6 * (UV - YV) * VV + (3 * UV - 4 * YV + 1) * eV + 6 * (-UV + YV) * xV + (3 * UV - 2 * YV) * JV
    }

    function vV(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(xV, Math.max(eV, VV))
    }

    function rV(VV) {
      return VV -= 2 * Math.PI * Math.floor((VV + Math.PI) / (2 * Math.PI))
    }

    function kV(VV) {
      const eV = VV.toString(16);
      return VV <= 15 ? ("0" + eV).toUpperCase() : eV.toUpperCase()
    }

    function bV(VV) {
      if (Math.log2) return Math.floor(Math.log2(VV));
      if (VV < 0) return NaN;
      if (0 === VV) return -1 / 0;
      let eV = 0;
      if (VV < 1) {
        for (; VV < 1;) eV++, VV *= 2;
        eV = -eV
      } else if (VV > 1)
        for (; VV > 1;) eV++, VV = Math.floor(VV / 2);
      return eV
    }

    function EV(VV, eV) {
      return VV - Math.floor(VV / eV) * eV
    }

    function BV(VV, eV, xV) {
      return (VV - eV) / (xV - eV)
    }

    function jV(VV, eV, xV) {
      return VV * (xV - eV) + eV
    }

    function qV(VV, eV) {
      let xV = EV(eV - VV, 360);
      return xV > 180 && (xV -= 360), xV
    }

    function tV(VV, eV) {
      const xV = EV(VV, 2 * eV);
      return eV - Math.abs(xV - eV)
    }

    function FV(VV, eV, xV) {
      let JV = vV(xV);
      return JV = -2 * JV * JV * JV + 3 * JV * JV, eV * JV + VV * (1 - JV)
    }

    function TV(VV, eV, xV) {
      let JV;
      return JV = Math.abs(eV - VV) <= xV ? eV : VV + Math.sign(eV - VV) * xV, JV
    }

    function PV(VV, eV, xV) {
      const JV = qV(VV, eV);
      let YV;
      return YV = -xV < JV && JV < xV ? eV : TV(VV, eV = VV + JV, xV), YV
    }

    function AV(VV, eV, xV) {
      return (VV - eV) / (xV - eV)
    }

    function NV(VV, eV, xV) {
      return (xV - eV) * VV + eV
    }

    function XV(VV, eV) {
      const xV = VV % eV;
      return 0 === xV ? eV : XV(eV, xV)
    }
    xV.r(eV), xV.d(eV, {
      Clamp: () => vV,
      DeltaAngle: () => qV,
      Denormalize: () => jV,
      ExtractAsInt: () => JV,
      Hermite: () => wV,
      Hermite1stDerivative: () => ZV,
      HighestCommonFactor: () => XV,
      ILog2: () => bV,
      InverseLerp: () => nV,
      Lerp: () => pV,
      LerpAngle: () => QV,
      MoveTowards: () => TV,
      MoveTowardsAngle: () => PV,
      Normalize: () => BV,
      NormalizeRadians: () => rV,
      OutsideRange: () => UV,
      PercentToRange: () => NV,
      PingPong: () => tV,
      RandomRange: () => yV,
      RangeToPercent: () => AV,
      Repeat: () => EV,
      SmoothStep: () => FV,
      ToHex: () => kV,
      WithinEpsilon: () => YV
    })
  },
  38278: (VV, eV, xV) => {
    function JV(VV, eV) {
      const xV = [];
      for (let JV = 0; JV < VV; ++JV) xV.push(eV());
      return xV
    }

    function YV(VV, eV) {
      return JV(VV, eV)
    }
    xV.d(eV, {
      e: () => JV,
      h: () => YV,
      i: () => yV
    });
    const UV = ["push", "splice", "pop", "shift", "unshift"];

    function yV(VV, eV) {
      const xV = UV.map((xV => function(VV, eV, xV) {
        const JV = VV[eV];
        if ("function" !== typeof JV) return null;
        const YV = function() {
          const JV = VV.length,
            UV = YV.previous.apply(VV, arguments);
          return xV(eV, JV), UV
        };
        return JV.next = YV, YV.previous = JV, VV[eV] = YV, () => {
          const xV = YV.previous;
          if (!xV) return;
          const JV = YV.next;
          JV ? (xV.next = JV, JV.previous = xV) : (xV.next = void 0, VV[eV] = xV), YV.next = void 0, YV.previous = void 0
        }
      }(VV, xV, eV)));
      return () => {
        for (const VV of xV) VV?.()
      }
    }
  },
  38318: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      d: () => YV
    });
    const JV = {};

    function YV(VV, eV) {
      JV[VV] = eV
    }

    function UV(VV) {
      return JV[VV]
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);