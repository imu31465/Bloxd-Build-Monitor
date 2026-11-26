export const id = 251;
export const ids = [251];
export const modules = {
  37923: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => YU,
      e: () => NU,
      f: () => aU,
      i: () => IU
    });
    var cU = zU(37827),
      yU = zU(37825),
      QU = zU(37855),
      AU = zU(37863);

    function FU(UU) {
      return Math.pow(UU, yU.h)
    }

    function oU(UU) {
      return UU <= .04045 ? .0773993808 * UU : Math.pow(.947867299 * (UU + .055), 2.4)
    }

    function DU(UU) {
      return Math.pow(UU, yU.d)
    }

    function EU(UU) {
      return UU <= .0031308 ? 12.92 * UU : 1.055 * Math.pow(UU, .41666) - .055
    }
    class YU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = UU, this.g = XU, this.b = zU
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
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[XU] = this.r, UU[XU + 1] = this.g, UU[XU + 2] = this.b, this
      }
      zY(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YU.FromArrayToRef(UU, XU, this), this
      }
      toColor4() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new NU(this.r, this.g, this.b, UU)
      }
      cyU() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(UU) {
        return new YU(this.r * UU.r, this.g * UU.g, this.b * UU.b)
      }
      multiplyToRef(UU, XU) {
        return XU.r = this.r * UU.r, XU.g = this.g * UU.g, XU.b = this.b * UU.b, XU
      }
      multiplyInPlace(UU) {
        return this.r *= UU.r, this.g *= UU.g, this.b *= UU.b, this
      }
      multiplyByFloats(UU, XU, zU) {
        return new YU(this.r * UU, this.g * XU, this.b * zU)
      }
      divide(UU) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(UU, XU) {
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
      minimizeInPlaceFromFloats(UU, XU, zU) {
        return this.r = Math.min(UU, this.r), this.g = Math.min(XU, this.g), this.b = Math.min(zU, this.b), this
      }
      maximizeInPlaceFromFloats(UU, XU, zU) {
        return this.r = Math.max(UU, this.r), this.g = Math.max(XU, this.g), this.b = Math.max(zU, this.b), this
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
      equalsFloats(UU, XU, zU) {
        return this.SFU(UU, XU, zU)
      }
      SFU(UU, XU, zU) {
        return this.r === UU && this.g === XU && this.b === zU
      }
      equalsWithEpsilon(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU.c;
        return (0, QU.WithinEpsilon)(this.r, UU.r, XU) && (0, QU.WithinEpsilon)(this.g, UU.g, XU) && (0, QU.WithinEpsilon)(this.b, UU.b, XU)
      }
      fp() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(UU) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(UU) {
        return new YU(this.r * UU, this.g * UU, this.b * UU)
      }
      scaleInPlace(UU) {
        return this.r *= UU, this.g *= UU, this.b *= UU, this
      }
      scaleToRef(UU, XU) {
        return XU.r = this.r * UU, XU.g = this.g * UU, XU.b = this.b * UU, XU
      }
      scaleAndAddToRef(UU, XU) {
        return XU.r += this.r * UU, XU.g += this.g * UU, XU.b += this.b * UU, XU
      }
      clampToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        return zU.r = (0, QU.Clamp)(this.r, UU, XU), zU.g = (0, QU.Clamp)(this.g, UU, XU), zU.b = (0, QU.Clamp)(this.b, UU, XU), zU
      }
      add(UU) {
        return new YU(this.r + UU.r, this.g + UU.g, this.b + UU.b)
      }
      addInPlace(UU) {
        return this.r += UU.r, this.g += UU.g, this.b += UU.b, this
      }
      addInPlaceFromFloats(UU, XU, zU) {
        return this.r += UU, this.g += XU, this.b += zU, this
      }
      addToRef(UU, XU) {
        return XU.r = this.r + UU.r, XU.g = this.g + UU.g, XU.b = this.b + UU.b, XU
      }
      subtract(UU) {
        return new YU(this.r - UU.r, this.g - UU.g, this.b - UU.b)
      }
      subtractToRef(UU, XU) {
        return XU.r = this.r - UU.r, XU.g = this.g - UU.g, XU.b = this.b - UU.b, XU
      }
      ZyU(UU) {
        return this.r -= UU.r, this.g -= UU.g, this.b -= UU.b, this
      }
      subtractFromFloats(UU, XU, zU) {
        return new YU(this.r - UU, this.g - XU, this.b - zU)
      }
      subtractFromFloatsToRef(UU, XU, zU, cU) {
        return cU.r = this.r - UU, cU.g = this.g - XU, cU.b = this.b - zU, cU
      }
      clone() {
        return new YU(this.r, this.g, this.b)
      }
      YL(UU) {
        return this.r = UU.r, this.g = UU.g, this.b = UU.b, this
      }
      sUU(UU, XU, zU) {
        return this.r = UU, this.g = XU, this.b = zU, this
      }
      set(UU, XU, zU) {
        return this.sUU(UU, XU, zU)
      }
      IUU(UU) {
        return this.r = this.g = this.b = UU, this
      }
      toHexString() {
        const UU = Math.round(255 * this.r),
          XU = Math.round(255 * this.g),
          zU = Math.round(255 * this.b);
        return "#" + (0, QU.ToHex)(UU) + (0, QU.ToHex)(XU) + (0, QU.ToHex)(zU)
      }
      fromHexString(UU) {
        return "#" !== UU.substring(0, 1) || 7 !== UU.length || (this.r = parseInt(UU.substring(1, 3), 16) / 255, this.g = parseInt(UU.substring(3, 5), 16) / 255, this.b = parseInt(UU.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new YU)
      }
      toHSVToRef(UU) {
        const XU = this.r,
          zU = this.g,
          cU = this.b,
          yU = Math.max(XU, zU, cU),
          QU = Math.min(XU, zU, cU);
        let AU = 0,
          FU = 0;
        const oU = yU,
          DU = yU - QU;
        return 0 !== yU && (FU = DU / yU), yU != QU && (yU == XU ? (AU = (zU - cU) / DU, zU < cU && (AU += 6)) : yU == zU ? AU = (cU - XU) / DU + 2 : yU == cU && (AU = (XU - zU) / DU + 4), AU *= 60), UU.r = AU, UU.g = FU, UU.b = oU, UU
      }
      toLinearSpace() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = new YU;
        return this.toLinearSpaceToRef(XU, UU), XU
      }
      toLinearSpaceToRef(UU) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = oU(this.r), UU.g = oU(this.g), UU.b = oU(this.b)) : (UU.r = FU(this.r), UU.g = FU(this.g), UU.b = FU(this.b)), this
      }
      toGammaSpace() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = new YU;
        return this.toGammaSpaceToRef(XU, UU), XU
      }
      toGammaSpaceToRef(UU) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = EU(this.r), UU.g = EU(this.g), UU.b = EU(this.b)) : (UU.r = DU(this.r), UU.g = DU(this.g), UU.b = DU(this.b)), this
      }
      static HSVtoRGBToRef(UU, XU, zU, cU) {
        const yU = zU * XU,
          QU = UU / 60,
          AU = yU * (1 - Math.abs(QU % 2 - 1));
        let FU = 0,
          oU = 0,
          DU = 0;
        QU >= 0 && QU <= 1 ? (FU = yU, oU = AU) : QU >= 1 && QU <= 2 ? (FU = AU, oU = yU) : QU >= 2 && QU <= 3 ? (oU = yU, DU = AU) : QU >= 3 && QU <= 4 ? (oU = AU, DU = yU) : QU >= 4 && QU <= 5 ? (FU = AU, DU = yU) : QU >= 5 && QU <= 6 && (FU = yU, DU = AU);
        const EU = zU - yU;
        return cU.r = FU + EU, cU.g = oU + EU, cU.b = DU + EU, cU
      }
      static FromHSV(UU, XU, zU) {
        const cU = new YU(0, 0, 0);
        return YU.HSVtoRGBToRef(UU, XU, zU, cU), cU
      }
      static FromHexString(UU) {
        return new YU(0, 0, 0).fromHexString(UU)
      }
      static FromArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new YU(UU[XU], UU[XU + 1], UU[XU + 2])
      }
      static FromArrayToRef(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        zU.r = UU[XU], zU.g = UU[XU + 1], zU.b = UU[XU + 2]
      }
      static FromInts(UU, XU, zU) {
        return new YU(UU / 255, XU / 255, zU / 255)
      }
      static Lerp(UU, XU, zU) {
        const cU = new YU(0, 0, 0);
        return YU.LerpToRef(UU, XU, zU, cU), cU
      }
      static LerpToRef(UU, XU, zU, cU) {
        cU.r = UU.r + (XU.r - UU.r) * zU, cU.g = UU.g + (XU.g - UU.g) * zU, cU.b = UU.b + (XU.b - UU.b) * zU
      }
      static Hermite(UU, XU, zU, cU, yU) {
        const QU = yU * yU,
          AU = yU * QU,
          FU = 2 * AU - 3 * QU + 1,
          oU = -2 * AU + 3 * QU,
          DU = AU - 2 * QU + yU,
          EU = AU - QU,
          NU = UU.r * FU + zU.r * oU + XU.r * DU + cU.r * EU,
          IU = UU.g * FU + zU.g * oU + XU.g * DU + cU.g * EU,
          pU = UU.b * FU + zU.b * oU + XU.b * DU + cU.b * EU;
        return new YU(NU, IU, pU)
      }
      static Hermite1stDerivative(UU, XU, zU, cU, yU) {
        const QU = YU.Black();
        return this.Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU), QU
      }
      static Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU) {
        const AU = yU * yU;
        QU.r = 6 * (AU - yU) * UU.r + (3 * AU - 4 * yU + 1) * XU.r + 6 * (-AU + yU) * zU.r + (3 * AU - 2 * yU) * cU.r, QU.g = 6 * (AU - yU) * UU.g + (3 * AU - 4 * yU + 1) * XU.g + 6 * (-AU + yU) * zU.g + (3 * AU - 2 * yU) * cU.g, QU.b = 6 * (AU - yU) * UU.b + (3 * AU - 4 * yU + 1) * XU.b + 6 * (-AU + yU) * zU.b + (3 * AU - 2 * yU) * cU.b
      }
      static Red() {
        return new YU(1, 0, 0)
      }
      static Green() {
        return new YU(0, 1, 0)
      }
      static Blue() {
        return new YU(0, 0, 1)
      }
      static Black() {
        return new YU(0, 0, 0)
      }
      static get BlackReadOnly() {
        return YU._BlackReadOnly
      }
      static White() {
        return new YU(1, 1, 1)
      }
      static Purple() {
        return new YU(.5, 0, .5)
      }
      static Magenta() {
        return new YU(1, 0, 1)
      }
      static Yellow() {
        return new YU(1, 1, 0)
      }
      static Gray() {
        return new YU(.5, .5, .5)
      }
      static Teal() {
        return new YU(0, 1, 1)
      }
      static Random() {
        return new YU(Math.random(), Math.random(), Math.random())
      }
    }
    YU._V8PerformanceHack = new YU(.5, .5, .5), YU._BlackReadOnly = YU.Black();
    class NU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = UU, this.g = XU, this.b = zU, this.a = cU
      }
      cyU() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[XU] = this.r, UU[XU + 1] = this.g, UU[XU + 2] = this.b, UU[XU + 3] = this.a, this
      }
      zY(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = UU[XU], this.g = UU[XU + 1], this.b = UU[XU + 2], this.a = UU[XU + 3], this
      }
      equals(UU) {
        return UU && this.r === UU.r && this.g === UU.g && this.b === UU.b && this.a === UU.a
      }
      add(UU) {
        return new NU(this.r + UU.r, this.g + UU.g, this.b + UU.b, this.a + UU.a)
      }
      addToRef(UU, XU) {
        return XU.r = this.r + UU.r, XU.g = this.g + UU.g, XU.b = this.b + UU.b, XU.a = this.a + UU.a, XU
      }
      addInPlace(UU) {
        return this.r += UU.r, this.g += UU.g, this.b += UU.b, this.a += UU.a, this
      }
      addInPlaceFromFloats(UU, XU, zU, cU) {
        return this.r += UU, this.g += XU, this.b += zU, this.a += cU, this
      }
      subtract(UU) {
        return new NU(this.r - UU.r, this.g - UU.g, this.b - UU.b, this.a - UU.a)
      }
      subtractToRef(UU, XU) {
        return XU.r = this.r - UU.r, XU.g = this.g - UU.g, XU.b = this.b - UU.b, XU.a = this.a - UU.a, XU
      }
      ZyU(UU) {
        return this.r -= UU.r, this.g -= UU.g, this.b -= UU.b, this.a -= UU.a, this
      }
      subtractFromFloats(UU, XU, zU, cU) {
        return new NU(this.r - UU, this.g - XU, this.b - zU, this.a - cU)
      }
      subtractFromFloatsToRef(UU, XU, zU, cU, yU) {
        return yU.r = this.r - UU, yU.g = this.g - XU, yU.b = this.b - zU, yU.a = this.a - cU, yU
      }
      scale(UU) {
        return new NU(this.r * UU, this.g * UU, this.b * UU, this.a * UU)
      }
      scaleInPlace(UU) {
        return this.r *= UU, this.g *= UU, this.b *= UU, this.a *= UU, this
      }
      scaleToRef(UU, XU) {
        return XU.r = this.r * UU, XU.g = this.g * UU, XU.b = this.b * UU, XU.a = this.a * UU, XU
      }
      scaleAndAddToRef(UU, XU) {
        return XU.r += this.r * UU, XU.g += this.g * UU, XU.b += this.b * UU, XU.a += this.a * UU, XU
      }
      clampToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        return zU.r = (0, QU.Clamp)(this.r, UU, XU), zU.g = (0, QU.Clamp)(this.g, UU, XU), zU.b = (0, QU.Clamp)(this.b, UU, XU), zU.a = (0, QU.Clamp)(this.a, UU, XU), zU
      }
      multiply(UU) {
        return new NU(this.r * UU.r, this.g * UU.g, this.b * UU.b, this.a * UU.a)
      }
      multiplyToRef(UU, XU) {
        return XU.r = this.r * UU.r, XU.g = this.g * UU.g, XU.b = this.b * UU.b, XU.a = this.a * UU.a, XU
      }
      multiplyInPlace(UU) {
        return this.r *= UU.r, this.g *= UU.g, this.b *= UU.b, this.a *= UU.a, this
      }
      multiplyByFloats(UU, XU, zU, cU) {
        return new NU(this.r * UU, this.g * XU, this.b * zU, this.a * cU)
      }
      divide(UU) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(UU, XU) {
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
      minimizeInPlaceFromFloats(UU, XU, zU, cU) {
        return this.r = Math.min(UU, this.r), this.g = Math.min(XU, this.g), this.b = Math.min(zU, this.b), this.a = Math.min(cU, this.a), this
      }
      maximizeInPlaceFromFloats(UU, XU, zU, cU) {
        return this.r = Math.max(UU, this.r), this.g = Math.max(XU, this.g), this.b = Math.max(zU, this.b), this.a = Math.max(cU, this.a), this
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
      fp() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(UU) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yU.c;
        return (0, QU.WithinEpsilon)(this.r, UU.r, XU) && (0, QU.WithinEpsilon)(this.g, UU.g, XU) && (0, QU.WithinEpsilon)(this.b, UU.b, XU) && (0, QU.WithinEpsilon)(this.a, UU.a, XU)
      }
      SFU(UU, XU, zU, cU) {
        return this.r === UU && this.g === XU && this.b === zU && this.a === cU
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
        return (new NU).YL(this)
      }
      YL(UU) {
        return this.r = UU.r, this.g = UU.g, this.b = UU.b, this.a = UU.a, this
      }
      sUU(UU, XU, zU, cU) {
        return this.r = UU, this.g = XU, this.b = zU, this.a = cU, this
      }
      set(UU, XU, zU, cU) {
        return this.sUU(UU, XU, zU, cU)
      }
      IUU(UU) {
        return this.r = this.g = this.b = this.a = UU, this
      }
      toHexString() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = Math.round(255 * this.r),
          zU = Math.round(255 * this.g),
          cU = Math.round(255 * this.b);
        if (UU) return "#" + (0, QU.ToHex)(XU) + (0, QU.ToHex)(zU) + (0, QU.ToHex)(cU);
        const yU = Math.round(255 * this.a);
        return "#" + (0, QU.ToHex)(XU) + (0, QU.ToHex)(zU) + (0, QU.ToHex)(cU) + (0, QU.ToHex)(yU)
      }
      fromHexString(UU) {
        return "#" !== UU.substring(0, 1) || 9 !== UU.length && 7 !== UU.length || (this.r = parseInt(UU.substring(1, 3), 16) / 255, this.g = parseInt(UU.substring(3, 5), 16) / 255, this.b = parseInt(UU.substring(5, 7), 16) / 255, 9 === UU.length && (this.a = parseInt(UU.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = new NU;
        return this.toLinearSpaceToRef(XU, UU), XU
      }
      toLinearSpaceToRef(UU) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = oU(this.r), UU.g = oU(this.g), UU.b = oU(this.b)) : (UU.r = FU(this.r), UU.g = FU(this.g), UU.b = FU(this.b)), UU.a = this.a, this
      }
      toGammaSpace() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const XU = new NU;
        return this.toGammaSpaceToRef(XU, UU), XU
      }
      toGammaSpaceToRef(UU) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (UU.r = EU(this.r), UU.g = EU(this.g), UU.b = EU(this.b)) : (UU.r = DU(this.r), UU.g = DU(this.g), UU.b = DU(this.b)), UU.a = this.a, this
      }
      static FromHexString(UU) {
        return "#" !== UU.substring(0, 1) || 9 !== UU.length && 7 !== UU.length ? new NU(0, 0, 0, 0) : new NU(0, 0, 0, 1).fromHexString(UU)
      }
      static Lerp(UU, XU, zU) {
        return NU.LerpToRef(UU, XU, zU, new NU)
      }
      static LerpToRef(UU, XU, zU, cU) {
        return cU.r = UU.r + (XU.r - UU.r) * zU, cU.g = UU.g + (XU.g - UU.g) * zU, cU.b = UU.b + (XU.b - UU.b) * zU, cU.a = UU.a + (XU.a - UU.a) * zU, cU
      }
      static Hermite(UU, XU, zU, cU, yU) {
        const QU = yU * yU,
          AU = yU * QU,
          FU = 2 * AU - 3 * QU + 1,
          oU = -2 * AU + 3 * QU,
          DU = AU - 2 * QU + yU,
          EU = AU - QU,
          YU = UU.r * FU + zU.r * oU + XU.r * DU + cU.r * EU,
          IU = UU.g * FU + zU.g * oU + XU.g * DU + cU.g * EU,
          pU = UU.b * FU + zU.b * oU + XU.b * DU + cU.b * EU,
          aU = UU.a * FU + zU.a * oU + XU.a * DU + cU.a * EU;
        return new NU(YU, IU, pU, aU)
      }
      static Hermite1stDerivative(UU, XU, zU, cU, yU) {
        const QU = new NU;
        return this.Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU), QU
      }
      static Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU) {
        const AU = yU * yU;
        QU.r = 6 * (AU - yU) * UU.r + (3 * AU - 4 * yU + 1) * XU.r + 6 * (-AU + yU) * zU.r + (3 * AU - 2 * yU) * cU.r, QU.g = 6 * (AU - yU) * UU.g + (3 * AU - 4 * yU + 1) * XU.g + 6 * (-AU + yU) * zU.g + (3 * AU - 2 * yU) * cU.g, QU.b = 6 * (AU - yU) * UU.b + (3 * AU - 4 * yU + 1) * XU.b + 6 * (-AU + yU) * zU.b + (3 * AU - 2 * yU) * cU.b, QU.a = 6 * (AU - yU) * UU.a + (3 * AU - 4 * yU + 1) * XU.a + 6 * (-AU + yU) * zU.a + (3 * AU - 2 * yU) * cU.a
      }
      static FromColor3(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new NU(UU.r, UU.g, UU.b, XU)
      }
      static FromArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new NU(UU[XU], UU[XU + 1], UU[XU + 2], UU[XU + 3])
      }
      static FromArrayToRef(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        zU.r = UU[XU], zU.g = UU[XU + 1], zU.b = UU[XU + 2], zU.a = UU[XU + 3]
      }
      static FromInts(UU, XU, zU, cU) {
        return new NU(UU / 255, XU / 255, zU / 255, cU / 255)
      }
      static CheckColors4(UU, XU) {
        if (UU.length === 3 * XU) {
          const XU = [];
          for (let zU = 0; zU < UU.length; zU += 3) {
            const cU = zU / 3 * 4;
            XU[cU] = UU[zU], XU[cU + 1] = UU[zU + 1], XU[cU + 2] = UU[zU + 2], XU[cU + 3] = 1
          }
          return XU
        }
        return UU
      }
    }
    NU._V8PerformanceHack = new NU(.5, .5, .5, .5);
    class IU {}
    IU.Color3 = (0, cU.d)(3, YU.Black), IU.Color4 = (0, cU.d)(3, (() => new NU(0, 0, 0, 0)));
    let pU = !1;

    function aU() {
      pU || (pU = !0, Object.defineProperties(YU.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(NU.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, AU.h)("BABYLON.Color3", YU), (0, AU.h)("BABYLON.Color4", NU))
    }
  },
  37825: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU,
      d: () => cU,
      h: () => yU
    });
    const cU = 1 / 2.2,
      yU = 2.2;
    Math.sqrt(5);
    let QU = .001
  },
  37855: (UU, XU, zU) => {
    function cU(UU) {
      return parseInt(UU.toString().replace(/\W/g, ""))
    }

    function yU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(UU - XU) <= zU
    }

    function QU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return UU < XU - cU || UU > zU + cU
    }

    function AU(UU, XU) {
      return UU === XU ? UU : Math.random() * (XU - UU) + UU
    }

    function FU(UU, XU, zU) {
      return UU + (XU - UU) * zU
    }

    function oU(UU, XU, zU) {
      let cU = tU(XU - UU, 360);
      return cU > 180 && (cU -= 360), UU + cU * NU(zU)
    }

    function DU(UU, XU, zU) {
      let cU;
      return cU = UU != XU ? NU((zU - UU) / (XU - UU)) : 0, cU
    }

    function EU(UU, XU, zU, cU, yU) {
      const QU = yU * yU,
        AU = yU * QU;
      return UU * (2 * AU - 3 * QU + 1) + zU * (-2 * AU + 3 * QU) + XU * (AU - 2 * QU + yU) + cU * (AU - QU)
    }

    function YU(UU, XU, zU, cU, yU) {
      const QU = yU * yU;
      return 6 * (QU - yU) * UU + (3 * QU - 4 * yU + 1) * XU + 6 * (-QU + yU) * zU + (3 * QU - 2 * yU) * cU
    }

    function NU(UU) {
      let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(zU, Math.max(XU, UU))
    }

    function IU(UU) {
      return UU -= 2 * Math.PI * Math.floor((UU + Math.PI) / (2 * Math.PI))
    }

    function pU(UU) {
      const XU = UU.toString(16);
      return UU <= 15 ? ("0" + XU).toUpperCase() : XU.toUpperCase()
    }

    function aU(UU) {
      if (Math.log2) return Math.floor(Math.log2(UU));
      if (UU < 0) return NaN;
      if (0 === UU) return -1 / 0;
      let XU = 0;
      if (UU < 1) {
        for (; UU < 1;) XU++, UU *= 2;
        XU = -XU
      } else if (UU > 1)
        for (; UU > 1;) XU++, UU = Math.floor(UU / 2);
      return XU
    }

    function tU(UU, XU) {
      return UU - Math.floor(UU / XU) * XU
    }

    function gU(UU, XU, zU) {
      return (UU - XU) / (zU - XU)
    }

    function kU(UU, XU, zU) {
      return UU * (zU - XU) + XU
    }

    function GU(UU, XU) {
      let zU = tU(XU - UU, 360);
      return zU > 180 && (zU -= 360), zU
    }

    function BU(UU, XU) {
      const zU = tU(UU, 2 * XU);
      return XU - Math.abs(zU - XU)
    }

    function ZU(UU, XU, zU) {
      let cU = NU(zU);
      return cU = -2 * cU * cU * cU + 3 * cU * cU, XU * cU + UU * (1 - cU)
    }

    function RU(UU, XU, zU) {
      let cU;
      return cU = Math.abs(XU - UU) <= zU ? XU : UU + Math.sign(XU - UU) * zU, cU
    }

    function PU(UU, XU, zU) {
      const cU = GU(UU, XU);
      let yU;
      return yU = -zU < cU && cU < zU ? XU : RU(UU, XU = UU + cU, zU), yU
    }

    function WU(UU, XU, zU) {
      return (UU - XU) / (zU - XU)
    }

    function dU(UU, XU, zU) {
      return (zU - XU) * UU + XU
    }

    function LU(UU, XU) {
      const zU = UU % XU;
      return 0 === zU ? XU : LU(XU, zU)
    }
    zU.r(XU), zU.d(XU, {
      Clamp: () => NU,
      DeltaAngle: () => GU,
      Denormalize: () => kU,
      ExtractAsInt: () => cU,
      Hermite: () => EU,
      Hermite1stDerivative: () => YU,
      HighestCommonFactor: () => LU,
      ILog2: () => aU,
      InverseLerp: () => DU,
      Lerp: () => FU,
      LerpAngle: () => oU,
      MoveTowards: () => RU,
      MoveTowardsAngle: () => PU,
      Normalize: () => gU,
      NormalizeRadians: () => IU,
      OutsideRange: () => QU,
      PercentToRange: () => dU,
      PingPong: () => BU,
      RandomRange: () => AU,
      RangeToPercent: () => WU,
      Repeat: () => tU,
      SmoothStep: () => ZU,
      ToHex: () => pU,
      WithinEpsilon: () => yU
    })
  },
  37827: (UU, XU, zU) => {
    function cU(UU, XU) {
      const zU = [];
      for (let cU = 0; cU < UU; ++cU) zU.push(XU());
      return zU
    }

    function yU(UU, XU) {
      return cU(UU, XU)
    }
    zU.d(XU, {
      d: () => cU,
      f: () => yU,
      i: () => AU
    });
    const QU = ["push", "splice", "pop", "shift", "unshift"];

    function AU(UU, XU) {
      const zU = QU.map((zU => function(UU, XU, zU) {
        const cU = UU[XU];
        if ("function" !== typeof cU) return null;
        const yU = function() {
          const cU = UU.length,
            QU = yU.previous.apply(UU, arguments);
          return zU(XU, cU), QU
        };
        return cU.next = yU, yU.previous = cU, UU[XU] = yU, () => {
          const zU = yU.previous;
          if (!zU) return;
          const cU = yU.next;
          cU ? (zU.next = cU, cU.previous = zU) : (zU.next = void 0, UU[XU] = zU), yU.next = void 0, yU.previous = void 0
        }
      }(UU, zU, XU)));
      return () => {
        for (const UU of zU) UU?.()
      }
    }
  },
  37863: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      h: () => yU
    });
    const cU = {};

    function yU(UU, XU) {
      cU[UU] = XU
    }

    function QU(UU) {
      return cU[UU]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);