export const id = 259;
export const ids = [259];
export const modules = {
  38074: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => XH,
      g: () => GH,
      j: () => QH,
      m: () => YH
    });
    var AH = LH(37974),
      rH = LH(37972),
      SH = LH(38002),
      hH = LH(38012);

    function tH(HH) {
      return Math.pow(HH, rH.f)
    }

    function zH(HH) {
      return HH <= .04045 ? .0773993808 * HH : Math.pow(.947867299 * (HH + .055), 2.4)
    }

    function CH(HH) {
      return Math.pow(HH, rH.e)
    }

    function EH(HH) {
      return HH <= .0031308 ? 12.92 * HH : 1.055 * Math.pow(HH, .41666) - .055
    }
    class XH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = HH, this.g = BH, this.b = LH
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let HH = 255 * this.r | 0;
        return HH = 397 * HH ^ 255 * this.g, HH = 397 * HH ^ 255 * this.b, HH
      }
      toArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[BH] = this.r, HH[BH + 1] = this.g, HH[BH + 2] = this.b, this
      }
      SX(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return XH.FromArrayToRef(HH, BH, this), this
      }
      toColor4() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new GH(this.r, this.g, this.b, HH)
      }
      xrH() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(HH) {
        return new XH(this.r * HH.r, this.g * HH.g, this.b * HH.b)
      }
      multiplyToRef(HH, BH) {
        return BH.r = this.r * HH.r, BH.g = this.g * HH.g, BH.b = this.b * HH.b, BH
      }
      multiplyInPlace(HH) {
        return this.r *= HH.r, this.g *= HH.g, this.b *= HH.b, this
      }
      multiplyByFloats(HH, BH, LH) {
        return new XH(this.r * HH, this.g * BH, this.b * LH)
      }
      divide(HH) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(HH, BH) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(HH) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(HH) {
        return this.minimizeInPlaceFromFloats(HH.r, HH.g, HH.b)
      }
      maximizeInPlace(HH) {
        return this.maximizeInPlaceFromFloats(HH.r, HH.g, HH.b)
      }
      minimizeInPlaceFromFloats(HH, BH, LH) {
        return this.r = Math.min(HH, this.r), this.g = Math.min(BH, this.g), this.b = Math.min(LH, this.b), this
      }
      maximizeInPlaceFromFloats(HH, BH, LH) {
        return this.r = Math.max(HH, this.r), this.g = Math.max(BH, this.g), this.b = Math.max(LH, this.b), this
      }
      floorToRef(HH) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(HH) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(HH) {
        return HH && this.r === HH.r && this.g === HH.g && this.b === HH.b
      }
      equalsFloats(HH, BH, LH) {
        return this.dtH(HH, BH, LH)
      }
      dtH(HH, BH, LH) {
        return this.r === HH && this.g === BH && this.b === LH
      }
      equalsWithEpsilon(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH.d;
        return (0, SH.WithinEpsilon)(this.r, HH.r, BH) && (0, SH.WithinEpsilon)(this.g, HH.g, BH) && (0, SH.WithinEpsilon)(this.b, HH.b, BH)
      }
      du() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(HH) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(HH) {
        return new XH(this.r * HH, this.g * HH, this.b * HH)
      }
      scaleInPlace(HH) {
        return this.r *= HH, this.g *= HH, this.b *= HH, this
      }
      scaleToRef(HH, BH) {
        return BH.r = this.r * HH, BH.g = this.g * HH, BH.b = this.b * HH, BH
      }
      scaleAndAddToRef(HH, BH) {
        return BH.r += this.r * HH, BH.g += this.g * HH, BH.b += this.b * HH, BH
      }
      clampToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        return LH.r = (0, SH.Clamp)(this.r, HH, BH), LH.g = (0, SH.Clamp)(this.g, HH, BH), LH.b = (0, SH.Clamp)(this.b, HH, BH), LH
      }
      add(HH) {
        return new XH(this.r + HH.r, this.g + HH.g, this.b + HH.b)
      }
      addInPlace(HH) {
        return this.r += HH.r, this.g += HH.g, this.b += HH.b, this
      }
      addInPlaceFromFloats(HH, BH, LH) {
        return this.r += HH, this.g += BH, this.b += LH, this
      }
      addToRef(HH, BH) {
        return BH.r = this.r + HH.r, BH.g = this.g + HH.g, BH.b = this.b + HH.b, BH
      }
      subtract(HH) {
        return new XH(this.r - HH.r, this.g - HH.g, this.b - HH.b)
      }
      subtractToRef(HH, BH) {
        return BH.r = this.r - HH.r, BH.g = this.g - HH.g, BH.b = this.b - HH.b, BH
      }
      grH(HH) {
        return this.r -= HH.r, this.g -= HH.g, this.b -= HH.b, this
      }
      subtractFromFloats(HH, BH, LH) {
        return new XH(this.r - HH, this.g - BH, this.b - LH)
      }
      subtractFromFloatsToRef(HH, BH, LH, AH) {
        return AH.r = this.r - HH, AH.g = this.g - BH, AH.b = this.b - LH, AH
      }
      clone() {
        return new XH(this.r, this.g, this.b)
      }
      Tm(HH) {
        return this.r = HH.r, this.g = HH.g, this.b = HH.b, this
      }
      SBH(HH, BH, LH) {
        return this.r = HH, this.g = BH, this.b = LH, this
      }
      set(HH, BH, LH) {
        return this.SBH(HH, BH, LH)
      }
      IHH(HH) {
        return this.r = this.g = this.b = HH, this
      }
      toHexString() {
        const HH = Math.round(255 * this.r),
          BH = Math.round(255 * this.g),
          LH = Math.round(255 * this.b);
        return "#" + (0, SH.ToHex)(HH) + (0, SH.ToHex)(BH) + (0, SH.ToHex)(LH)
      }
      fromHexString(HH) {
        return "#" !== HH.substring(0, 1) || 7 !== HH.length || (this.r = parseInt(HH.substring(1, 3), 16) / 255, this.g = parseInt(HH.substring(3, 5), 16) / 255, this.b = parseInt(HH.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new XH)
      }
      toHSVToRef(HH) {
        const BH = this.r,
          LH = this.g,
          AH = this.b,
          rH = Math.max(BH, LH, AH),
          SH = Math.min(BH, LH, AH);
        let hH = 0,
          tH = 0;
        const zH = rH,
          CH = rH - SH;
        return 0 !== rH && (tH = CH / rH), rH != SH && (rH == BH ? (hH = (LH - AH) / CH, LH < AH && (hH += 6)) : rH == LH ? hH = (AH - BH) / CH + 2 : rH == AH && (hH = (BH - LH) / CH + 4), hH *= 60), HH.r = hH, HH.g = tH, HH.b = zH, HH
      }
      toLinearSpace() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = new XH;
        return this.toLinearSpaceToRef(BH, HH), BH
      }
      toLinearSpaceToRef(HH) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (HH.r = zH(this.r), HH.g = zH(this.g), HH.b = zH(this.b)) : (HH.r = tH(this.r), HH.g = tH(this.g), HH.b = tH(this.b)), this
      }
      toGammaSpace() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = new XH;
        return this.toGammaSpaceToRef(BH, HH), BH
      }
      toGammaSpaceToRef(HH) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (HH.r = EH(this.r), HH.g = EH(this.g), HH.b = EH(this.b)) : (HH.r = CH(this.r), HH.g = CH(this.g), HH.b = CH(this.b)), this
      }
      static HSVtoRGBToRef(HH, BH, LH, AH) {
        const rH = LH * BH,
          SH = HH / 60,
          hH = rH * (1 - Math.abs(SH % 2 - 1));
        let tH = 0,
          zH = 0,
          CH = 0;
        SH >= 0 && SH <= 1 ? (tH = rH, zH = hH) : SH >= 1 && SH <= 2 ? (tH = hH, zH = rH) : SH >= 2 && SH <= 3 ? (zH = rH, CH = hH) : SH >= 3 && SH <= 4 ? (zH = hH, CH = rH) : SH >= 4 && SH <= 5 ? (tH = hH, CH = rH) : SH >= 5 && SH <= 6 && (tH = rH, CH = hH);
        const EH = LH - rH;
        return AH.r = tH + EH, AH.g = zH + EH, AH.b = CH + EH, AH
      }
      static FromHSV(HH, BH, LH) {
        const AH = new XH(0, 0, 0);
        return XH.HSVtoRGBToRef(HH, BH, LH, AH), AH
      }
      static FromHexString(HH) {
        return new XH(0, 0, 0).fromHexString(HH)
      }
      static FromArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new XH(HH[BH], HH[BH + 1], HH[BH + 2])
      }
      static FromArrayToRef(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        LH.r = HH[BH], LH.g = HH[BH + 1], LH.b = HH[BH + 2]
      }
      static FromInts(HH, BH, LH) {
        return new XH(HH / 255, BH / 255, LH / 255)
      }
      static Lerp(HH, BH, LH) {
        const AH = new XH(0, 0, 0);
        return XH.LerpToRef(HH, BH, LH, AH), AH
      }
      static LerpToRef(HH, BH, LH, AH) {
        AH.r = HH.r + (BH.r - HH.r) * LH, AH.g = HH.g + (BH.g - HH.g) * LH, AH.b = HH.b + (BH.b - HH.b) * LH
      }
      static Hermite(HH, BH, LH, AH, rH) {
        const SH = rH * rH,
          hH = rH * SH,
          tH = 2 * hH - 3 * SH + 1,
          zH = -2 * hH + 3 * SH,
          CH = hH - 2 * SH + rH,
          EH = hH - SH,
          GH = HH.r * tH + LH.r * zH + BH.r * CH + AH.r * EH,
          YH = HH.g * tH + LH.g * zH + BH.g * CH + AH.g * EH,
          uH = HH.b * tH + LH.b * zH + BH.b * CH + AH.b * EH;
        return new XH(GH, YH, uH)
      }
      static Hermite1stDerivative(HH, BH, LH, AH, rH) {
        const SH = XH.Black();
        return this.Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH), SH
      }
      static Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH) {
        const hH = rH * rH;
        SH.r = 6 * (hH - rH) * HH.r + (3 * hH - 4 * rH + 1) * BH.r + 6 * (-hH + rH) * LH.r + (3 * hH - 2 * rH) * AH.r, SH.g = 6 * (hH - rH) * HH.g + (3 * hH - 4 * rH + 1) * BH.g + 6 * (-hH + rH) * LH.g + (3 * hH - 2 * rH) * AH.g, SH.b = 6 * (hH - rH) * HH.b + (3 * hH - 4 * rH + 1) * BH.b + 6 * (-hH + rH) * LH.b + (3 * hH - 2 * rH) * AH.b
      }
      static Red() {
        return new XH(1, 0, 0)
      }
      static Green() {
        return new XH(0, 1, 0)
      }
      static Blue() {
        return new XH(0, 0, 1)
      }
      static Black() {
        return new XH(0, 0, 0)
      }
      static get BlackReadOnly() {
        return XH._BlackReadOnly
      }
      static White() {
        return new XH(1, 1, 1)
      }
      static Purple() {
        return new XH(.5, 0, .5)
      }
      static Magenta() {
        return new XH(1, 0, 1)
      }
      static Yellow() {
        return new XH(1, 1, 0)
      }
      static Gray() {
        return new XH(.5, .5, .5)
      }
      static Teal() {
        return new XH(0, 1, 1)
      }
      static Random() {
        return new XH(Math.random(), Math.random(), Math.random())
      }
    }
    XH._V8PerformanceHack = new XH(.5, .5, .5), XH._BlackReadOnly = XH.Black();
    class GH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = HH, this.g = BH, this.b = LH, this.a = AH
      }
      xrH() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[BH] = this.r, HH[BH + 1] = this.g, HH[BH + 2] = this.b, HH[BH + 3] = this.a, this
      }
      SX(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = HH[BH], this.g = HH[BH + 1], this.b = HH[BH + 2], this.a = HH[BH + 3], this
      }
      equals(HH) {
        return HH && this.r === HH.r && this.g === HH.g && this.b === HH.b && this.a === HH.a
      }
      add(HH) {
        return new GH(this.r + HH.r, this.g + HH.g, this.b + HH.b, this.a + HH.a)
      }
      addToRef(HH, BH) {
        return BH.r = this.r + HH.r, BH.g = this.g + HH.g, BH.b = this.b + HH.b, BH.a = this.a + HH.a, BH
      }
      addInPlace(HH) {
        return this.r += HH.r, this.g += HH.g, this.b += HH.b, this.a += HH.a, this
      }
      addInPlaceFromFloats(HH, BH, LH, AH) {
        return this.r += HH, this.g += BH, this.b += LH, this.a += AH, this
      }
      subtract(HH) {
        return new GH(this.r - HH.r, this.g - HH.g, this.b - HH.b, this.a - HH.a)
      }
      subtractToRef(HH, BH) {
        return BH.r = this.r - HH.r, BH.g = this.g - HH.g, BH.b = this.b - HH.b, BH.a = this.a - HH.a, BH
      }
      grH(HH) {
        return this.r -= HH.r, this.g -= HH.g, this.b -= HH.b, this.a -= HH.a, this
      }
      subtractFromFloats(HH, BH, LH, AH) {
        return new GH(this.r - HH, this.g - BH, this.b - LH, this.a - AH)
      }
      subtractFromFloatsToRef(HH, BH, LH, AH, rH) {
        return rH.r = this.r - HH, rH.g = this.g - BH, rH.b = this.b - LH, rH.a = this.a - AH, rH
      }
      scale(HH) {
        return new GH(this.r * HH, this.g * HH, this.b * HH, this.a * HH)
      }
      scaleInPlace(HH) {
        return this.r *= HH, this.g *= HH, this.b *= HH, this.a *= HH, this
      }
      scaleToRef(HH, BH) {
        return BH.r = this.r * HH, BH.g = this.g * HH, BH.b = this.b * HH, BH.a = this.a * HH, BH
      }
      scaleAndAddToRef(HH, BH) {
        return BH.r += this.r * HH, BH.g += this.g * HH, BH.b += this.b * HH, BH.a += this.a * HH, BH
      }
      clampToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        return LH.r = (0, SH.Clamp)(this.r, HH, BH), LH.g = (0, SH.Clamp)(this.g, HH, BH), LH.b = (0, SH.Clamp)(this.b, HH, BH), LH.a = (0, SH.Clamp)(this.a, HH, BH), LH
      }
      multiply(HH) {
        return new GH(this.r * HH.r, this.g * HH.g, this.b * HH.b, this.a * HH.a)
      }
      multiplyToRef(HH, BH) {
        return BH.r = this.r * HH.r, BH.g = this.g * HH.g, BH.b = this.b * HH.b, BH.a = this.a * HH.a, BH
      }
      multiplyInPlace(HH) {
        return this.r *= HH.r, this.g *= HH.g, this.b *= HH.b, this.a *= HH.a, this
      }
      multiplyByFloats(HH, BH, LH, AH) {
        return new GH(this.r * HH, this.g * BH, this.b * LH, this.a * AH)
      }
      divide(HH) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(HH, BH) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(HH) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(HH) {
        return this.r = Math.min(this.r, HH.r), this.g = Math.min(this.g, HH.g), this.b = Math.min(this.b, HH.b), this.a = Math.min(this.a, HH.a), this
      }
      maximizeInPlace(HH) {
        return this.r = Math.max(this.r, HH.r), this.g = Math.max(this.g, HH.g), this.b = Math.max(this.b, HH.b), this.a = Math.max(this.a, HH.a), this
      }
      minimizeInPlaceFromFloats(HH, BH, LH, AH) {
        return this.r = Math.min(HH, this.r), this.g = Math.min(BH, this.g), this.b = Math.min(LH, this.b), this.a = Math.min(AH, this.a), this
      }
      maximizeInPlaceFromFloats(HH, BH, LH, AH) {
        return this.r = Math.max(HH, this.r), this.g = Math.max(BH, this.g), this.b = Math.max(LH, this.b), this.a = Math.max(AH, this.a), this
      }
      floorToRef(HH) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(HH) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      du() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(HH) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : rH.d;
        return (0, SH.WithinEpsilon)(this.r, HH.r, BH) && (0, SH.WithinEpsilon)(this.g, HH.g, BH) && (0, SH.WithinEpsilon)(this.b, HH.b, BH) && (0, SH.WithinEpsilon)(this.a, HH.a, BH)
      }
      dtH(HH, BH, LH, AH) {
        return this.r === HH && this.g === BH && this.b === LH && this.a === AH
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let HH = 255 * this.r | 0;
        return HH = 397 * HH ^ 255 * this.g, HH = 397 * HH ^ 255 * this.b, HH = 397 * HH ^ 255 * this.a, HH
      }
      clone() {
        return (new GH).Tm(this)
      }
      Tm(HH) {
        return this.r = HH.r, this.g = HH.g, this.b = HH.b, this.a = HH.a, this
      }
      SBH(HH, BH, LH, AH) {
        return this.r = HH, this.g = BH, this.b = LH, this.a = AH, this
      }
      set(HH, BH, LH, AH) {
        return this.SBH(HH, BH, LH, AH)
      }
      IHH(HH) {
        return this.r = this.g = this.b = this.a = HH, this
      }
      toHexString() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = Math.round(255 * this.r),
          LH = Math.round(255 * this.g),
          AH = Math.round(255 * this.b);
        if (HH) return "#" + (0, SH.ToHex)(BH) + (0, SH.ToHex)(LH) + (0, SH.ToHex)(AH);
        const rH = Math.round(255 * this.a);
        return "#" + (0, SH.ToHex)(BH) + (0, SH.ToHex)(LH) + (0, SH.ToHex)(AH) + (0, SH.ToHex)(rH)
      }
      fromHexString(HH) {
        return "#" !== HH.substring(0, 1) || 9 !== HH.length && 7 !== HH.length || (this.r = parseInt(HH.substring(1, 3), 16) / 255, this.g = parseInt(HH.substring(3, 5), 16) / 255, this.b = parseInt(HH.substring(5, 7), 16) / 255, 9 === HH.length && (this.a = parseInt(HH.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = new GH;
        return this.toLinearSpaceToRef(BH, HH), BH
      }
      toLinearSpaceToRef(HH) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (HH.r = zH(this.r), HH.g = zH(this.g), HH.b = zH(this.b)) : (HH.r = tH(this.r), HH.g = tH(this.g), HH.b = tH(this.b)), HH.a = this.a, this
      }
      toGammaSpace() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const BH = new GH;
        return this.toGammaSpaceToRef(BH, HH), BH
      }
      toGammaSpaceToRef(HH) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (HH.r = EH(this.r), HH.g = EH(this.g), HH.b = EH(this.b)) : (HH.r = CH(this.r), HH.g = CH(this.g), HH.b = CH(this.b)), HH.a = this.a, this
      }
      static FromHexString(HH) {
        return "#" !== HH.substring(0, 1) || 9 !== HH.length && 7 !== HH.length ? new GH(0, 0, 0, 0) : new GH(0, 0, 0, 1).fromHexString(HH)
      }
      static Lerp(HH, BH, LH) {
        return GH.LerpToRef(HH, BH, LH, new GH)
      }
      static LerpToRef(HH, BH, LH, AH) {
        return AH.r = HH.r + (BH.r - HH.r) * LH, AH.g = HH.g + (BH.g - HH.g) * LH, AH.b = HH.b + (BH.b - HH.b) * LH, AH.a = HH.a + (BH.a - HH.a) * LH, AH
      }
      static Hermite(HH, BH, LH, AH, rH) {
        const SH = rH * rH,
          hH = rH * SH,
          tH = 2 * hH - 3 * SH + 1,
          zH = -2 * hH + 3 * SH,
          CH = hH - 2 * SH + rH,
          EH = hH - SH,
          XH = HH.r * tH + LH.r * zH + BH.r * CH + AH.r * EH,
          YH = HH.g * tH + LH.g * zH + BH.g * CH + AH.g * EH,
          uH = HH.b * tH + LH.b * zH + BH.b * CH + AH.b * EH,
          QH = HH.a * tH + LH.a * zH + BH.a * CH + AH.a * EH;
        return new GH(XH, YH, uH, QH)
      }
      static Hermite1stDerivative(HH, BH, LH, AH, rH) {
        const SH = new GH;
        return this.Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH), SH
      }
      static Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH) {
        const hH = rH * rH;
        SH.r = 6 * (hH - rH) * HH.r + (3 * hH - 4 * rH + 1) * BH.r + 6 * (-hH + rH) * LH.r + (3 * hH - 2 * rH) * AH.r, SH.g = 6 * (hH - rH) * HH.g + (3 * hH - 4 * rH + 1) * BH.g + 6 * (-hH + rH) * LH.g + (3 * hH - 2 * rH) * AH.g, SH.b = 6 * (hH - rH) * HH.b + (3 * hH - 4 * rH + 1) * BH.b + 6 * (-hH + rH) * LH.b + (3 * hH - 2 * rH) * AH.b, SH.a = 6 * (hH - rH) * HH.a + (3 * hH - 4 * rH + 1) * BH.a + 6 * (-hH + rH) * LH.a + (3 * hH - 2 * rH) * AH.a
      }
      static FromColor3(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new GH(HH.r, HH.g, HH.b, BH)
      }
      static FromArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new GH(HH[BH], HH[BH + 1], HH[BH + 2], HH[BH + 3])
      }
      static FromArrayToRef(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        LH.r = HH[BH], LH.g = HH[BH + 1], LH.b = HH[BH + 2], LH.a = HH[BH + 3]
      }
      static FromInts(HH, BH, LH, AH) {
        return new GH(HH / 255, BH / 255, LH / 255, AH / 255)
      }
      static CheckColors4(HH, BH) {
        if (HH.length === 3 * BH) {
          const BH = [];
          for (let LH = 0; LH < HH.length; LH += 3) {
            const AH = LH / 3 * 4;
            BH[AH] = HH[LH], BH[AH + 1] = HH[LH + 1], BH[AH + 2] = HH[LH + 2], BH[AH + 3] = 1
          }
          return BH
        }
        return HH
      }
    }
    GH._V8PerformanceHack = new GH(.5, .5, .5, .5);
    class YH {}
    YH.Color3 = (0, AH.d)(3, XH.Black), YH.Color4 = (0, AH.d)(3, (() => new GH(0, 0, 0, 0)));
    let uH = !1;

    function QH() {
      uH || (uH = !0, Object.defineProperties(XH.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(GH.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, hH.f)("BABYLON.Color3", XH), (0, hH.f)("BABYLON.Color4", GH))
    }
  },
  37972: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH,
      e: () => AH,
      f: () => rH
    });
    const AH = 1 / 2.2,
      rH = 2.2;
    Math.sqrt(5);
    let SH = .001
  },
  38002: (HH, BH, LH) => {
    function AH(HH) {
      return parseInt(HH.toString().replace(/\W/g, ""))
    }

    function rH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(HH - BH) <= LH
    }

    function SH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return HH < BH - AH || HH > LH + AH
    }

    function hH(HH, BH) {
      return HH === BH ? HH : Math.random() * (BH - HH) + HH
    }

    function tH(HH, BH, LH) {
      return HH + (BH - HH) * LH
    }

    function zH(HH, BH, LH) {
      let AH = WH(BH - HH, 360);
      return AH > 180 && (AH -= 360), HH + AH * GH(LH)
    }

    function CH(HH, BH, LH) {
      let AH;
      return AH = HH != BH ? GH((LH - HH) / (BH - HH)) : 0, AH
    }

    function EH(HH, BH, LH, AH, rH) {
      const SH = rH * rH,
        hH = rH * SH;
      return HH * (2 * hH - 3 * SH + 1) + LH * (-2 * hH + 3 * SH) + BH * (hH - 2 * SH + rH) + AH * (hH - SH)
    }

    function XH(HH, BH, LH, AH, rH) {
      const SH = rH * rH;
      return 6 * (SH - rH) * HH + (3 * SH - 4 * rH + 1) * BH + 6 * (-SH + rH) * LH + (3 * SH - 2 * rH) * AH
    }

    function GH(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(LH, Math.max(BH, HH))
    }

    function YH(HH) {
      return HH -= 2 * Math.PI * Math.floor((HH + Math.PI) / (2 * Math.PI))
    }

    function uH(HH) {
      const BH = HH.toString(16);
      return HH <= 15 ? ("0" + BH).toUpperCase() : BH.toUpperCase()
    }

    function QH(HH) {
      if (Math.log2) return Math.floor(Math.log2(HH));
      if (HH < 0) return NaN;
      if (0 === HH) return -1 / 0;
      let BH = 0;
      if (HH < 1) {
        for (; HH < 1;) BH++, HH *= 2;
        BH = -BH
      } else if (HH > 1)
        for (; HH > 1;) BH++, HH = Math.floor(HH / 2);
      return BH
    }

    function WH(HH, BH) {
      return HH - Math.floor(HH / BH) * BH
    }

    function MH(HH, BH, LH) {
      return (HH - BH) / (LH - BH)
    }

    function xH(HH, BH, LH) {
      return HH * (LH - BH) + BH
    }

    function vH(HH, BH) {
      let LH = WH(BH - HH, 360);
      return LH > 180 && (LH -= 360), LH
    }

    function PH(HH, BH) {
      const LH = WH(HH, 2 * BH);
      return BH - Math.abs(LH - BH)
    }

    function TH(HH, BH, LH) {
      let AH = GH(LH);
      return AH = -2 * AH * AH * AH + 3 * AH * AH, BH * AH + HH * (1 - AH)
    }

    function UH(HH, BH, LH) {
      let AH;
      return AH = Math.abs(BH - HH) <= LH ? BH : HH + Math.sign(BH - HH) * LH, AH
    }

    function VH(HH, BH, LH) {
      const AH = vH(HH, BH);
      let rH;
      return rH = -LH < AH && AH < LH ? BH : UH(HH, BH = HH + AH, LH), rH
    }

    function OH(HH, BH, LH) {
      return (HH - BH) / (LH - BH)
    }

    function bH(HH, BH, LH) {
      return (LH - BH) * HH + BH
    }

    function kH(HH, BH) {
      const LH = HH % BH;
      return 0 === LH ? BH : kH(BH, LH)
    }
    LH.r(BH), LH.d(BH, {
      Clamp: () => GH,
      DeltaAngle: () => vH,
      Denormalize: () => xH,
      ExtractAsInt: () => AH,
      Hermite: () => EH,
      Hermite1stDerivative: () => XH,
      HighestCommonFactor: () => kH,
      ILog2: () => QH,
      InverseLerp: () => CH,
      Lerp: () => tH,
      LerpAngle: () => zH,
      MoveTowards: () => UH,
      MoveTowardsAngle: () => VH,
      Normalize: () => MH,
      NormalizeRadians: () => YH,
      OutsideRange: () => SH,
      PercentToRange: () => bH,
      PingPong: () => PH,
      RandomRange: () => hH,
      RangeToPercent: () => OH,
      Repeat: () => WH,
      SmoothStep: () => TH,
      ToHex: () => uH,
      WithinEpsilon: () => rH
    })
  },
  37974: (HH, BH, LH) => {
    function AH(HH, BH) {
      const LH = [];
      for (let AH = 0; AH < HH; ++AH) LH.push(BH());
      return LH
    }

    function rH(HH, BH) {
      return AH(HH, BH)
    }
    LH.d(BH, {
      d: () => AH,
      g: () => rH,
      i: () => hH
    });
    const SH = ["push", "splice", "pop", "shift", "unshift"];

    function hH(HH, BH) {
      const LH = SH.map((LH => function(HH, BH, LH) {
        const AH = HH[BH];
        if ("function" !== typeof AH) return null;
        const rH = function() {
          const AH = HH.length,
            SH = rH.previous.apply(HH, arguments);
          return LH(BH, AH), SH
        };
        return AH.next = rH, rH.previous = AH, HH[BH] = rH, () => {
          const LH = rH.previous;
          if (!LH) return;
          const AH = rH.next;
          AH ? (LH.next = AH, AH.previous = LH) : (LH.next = void 0, HH[BH] = LH), rH.next = void 0, rH.previous = void 0
        }
      }(HH, LH, BH)));
      return () => {
        for (const HH of LH) HH?.()
      }
    }
  },
  38012: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      f: () => rH
    });
    const AH = {};

    function rH(HH, BH) {
      AH[HH] = BH
    }

    function SH(HH) {
      return AH[HH]
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);