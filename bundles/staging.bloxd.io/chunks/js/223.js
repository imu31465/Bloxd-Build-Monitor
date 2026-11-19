export const id = 223;
export const ids = [223];
export const modules = {
  36177: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => DT,
      i: () => LT,
      j: () => KT,
      m: () => xT
    });
    var iT = IT(36134),
      zT = IT(36125),
      kT = IT(36156),
      WT = IT(36166);

    function XT(TT) {
      return Math.pow(TT, zT.l)
    }

    function BT(TT) {
      return TT <= .04045 ? .0773993808 * TT : Math.pow(.947867299 * (TT + .055), 2.4)
    }

    function FT(TT) {
      return Math.pow(TT, zT.h)
    }

    function ST(TT) {
      return TT <= .0031308 ? 12.92 * TT : 1.055 * Math.pow(TT, .41666) - .055
    }
    class DT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = TT, this.g = oT, this.b = IT
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
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[oT] = this.r, TT[oT + 1] = this.g, TT[oT + 2] = this.b, this
      }
      joT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DT.FromArrayToRef(TT, oT, this), this
      }
      toColor4() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new LT(this.r, this.g, this.b, TT)
      }
      bIT() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(TT) {
        return new DT(this.r * TT.r, this.g * TT.g, this.b * TT.b)
      }
      multiplyToRef(TT, oT) {
        return oT.r = this.r * TT.r, oT.g = this.g * TT.g, oT.b = this.b * TT.b, oT
      }
      multiplyInPlace(TT) {
        return this.r *= TT.r, this.g *= TT.g, this.b *= TT.b, this
      }
      multiplyByFloats(TT, oT, IT) {
        return new DT(this.r * TT, this.g * oT, this.b * IT)
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(TT, oT) {
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
      minimizeInPlaceFromFloats(TT, oT, IT) {
        return this.r = Math.min(TT, this.r), this.g = Math.min(oT, this.g), this.b = Math.min(IT, this.b), this
      }
      maximizeInPlaceFromFloats(TT, oT, IT) {
        return this.r = Math.max(TT, this.r), this.g = Math.max(oT, this.g), this.b = Math.max(IT, this.b), this
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
      equalsFloats(TT, oT, IT) {
        return this.eWT(TT, oT, IT)
      }
      eWT(TT, oT, IT) {
        return this.r === TT && this.g === oT && this.b === IT
      }
      equalsWithEpsilon(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.d;
        return (0, kT.WithinEpsilon)(this.r, TT.r, oT) && (0, kT.WithinEpsilon)(this.g, TT.g, oT) && (0, kT.WithinEpsilon)(this.b, TT.b, oT)
      }
      ri() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(TT) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(TT) {
        return new DT(this.r * TT, this.g * TT, this.b * TT)
      }
      scaleInPlace(TT) {
        return this.r *= TT, this.g *= TT, this.b *= TT, this
      }
      scaleToRef(TT, oT) {
        return oT.r = this.r * TT, oT.g = this.g * TT, oT.b = this.b * TT, oT
      }
      scaleAndAddToRef(TT, oT) {
        return oT.r += this.r * TT, oT.g += this.g * TT, oT.b += this.b * TT, oT
      }
      clampToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        return IT.r = (0, kT.Clamp)(this.r, TT, oT), IT.g = (0, kT.Clamp)(this.g, TT, oT), IT.b = (0, kT.Clamp)(this.b, TT, oT), IT
      }
      add(TT) {
        return new DT(this.r + TT.r, this.g + TT.g, this.b + TT.b)
      }
      addInPlace(TT) {
        return this.r += TT.r, this.g += TT.g, this.b += TT.b, this
      }
      addInPlaceFromFloats(TT, oT, IT) {
        return this.r += TT, this.g += oT, this.b += IT, this
      }
      addToRef(TT, oT) {
        return oT.r = this.r + TT.r, oT.g = this.g + TT.g, oT.b = this.b + TT.b, oT
      }
      subtract(TT) {
        return new DT(this.r - TT.r, this.g - TT.g, this.b - TT.b)
      }
      subtractToRef(TT, oT) {
        return oT.r = this.r - TT.r, oT.g = this.g - TT.g, oT.b = this.b - TT.b, oT
      }
      SiT(TT) {
        return this.r -= TT.r, this.g -= TT.g, this.b -= TT.b, this
      }
      subtractFromFloats(TT, oT, IT) {
        return new DT(this.r - TT, this.g - oT, this.b - IT)
      }
      subtractFromFloatsToRef(TT, oT, IT, iT) {
        return iT.r = this.r - TT, iT.g = this.g - oT, iT.b = this.b - IT, iT
      }
      clone() {
        return new DT(this.r, this.g, this.b)
      }
      SIT(TT) {
        return this.r = TT.r, this.g = TT.g, this.b = TT.b, this
      }
      S_(TT, oT, IT) {
        return this.r = TT, this.g = oT, this.b = IT, this
      }
      set(TT, oT, IT) {
        return this.S_(TT, oT, IT)
      }
      W8(TT) {
        return this.r = this.g = this.b = TT, this
      }
      toHexString() {
        const TT = Math.round(255 * this.r),
          oT = Math.round(255 * this.g),
          IT = Math.round(255 * this.b);
        return "#" + (0, kT.ToHex)(TT) + (0, kT.ToHex)(oT) + (0, kT.ToHex)(IT)
      }
      fromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 7 !== TT.length || (this.r = parseInt(TT.substring(1, 3), 16) / 255, this.g = parseInt(TT.substring(3, 5), 16) / 255, this.b = parseInt(TT.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new DT)
      }
      toHSVToRef(TT) {
        const oT = this.r,
          IT = this.g,
          iT = this.b,
          zT = Math.max(oT, IT, iT),
          kT = Math.min(oT, IT, iT);
        let WT = 0,
          XT = 0;
        const BT = zT,
          FT = zT - kT;
        return 0 !== zT && (XT = FT / zT), zT != kT && (zT == oT ? (WT = (IT - iT) / FT, IT < iT && (WT += 6)) : zT == IT ? WT = (iT - oT) / FT + 2 : zT == iT && (WT = (oT - IT) / FT + 4), WT *= 60), TT.r = WT, TT.g = XT, TT.b = BT, TT
      }
      toLinearSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = new DT;
        return this.toLinearSpaceToRef(oT, TT), oT
      }
      toLinearSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = BT(this.r), TT.g = BT(this.g), TT.b = BT(this.b)) : (TT.r = XT(this.r), TT.g = XT(this.g), TT.b = XT(this.b)), this
      }
      toGammaSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = new DT;
        return this.toGammaSpaceToRef(oT, TT), oT
      }
      toGammaSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = ST(this.r), TT.g = ST(this.g), TT.b = ST(this.b)) : (TT.r = FT(this.r), TT.g = FT(this.g), TT.b = FT(this.b)), this
      }
      static HSVtoRGBToRef(TT, oT, IT, iT) {
        const zT = IT * oT,
          kT = TT / 60,
          WT = zT * (1 - Math.abs(kT % 2 - 1));
        let XT = 0,
          BT = 0,
          FT = 0;
        kT >= 0 && kT <= 1 ? (XT = zT, BT = WT) : kT >= 1 && kT <= 2 ? (XT = WT, BT = zT) : kT >= 2 && kT <= 3 ? (BT = zT, FT = WT) : kT >= 3 && kT <= 4 ? (BT = WT, FT = zT) : kT >= 4 && kT <= 5 ? (XT = WT, FT = zT) : kT >= 5 && kT <= 6 && (XT = zT, FT = WT);
        const ST = IT - zT;
        return iT.r = XT + ST, iT.g = BT + ST, iT.b = FT + ST, iT
      }
      static FromHSV(TT, oT, IT) {
        const iT = new DT(0, 0, 0);
        return DT.HSVtoRGBToRef(TT, oT, IT, iT), iT
      }
      static FromHexString(TT) {
        return new DT(0, 0, 0).fromHexString(TT)
      }
      static FromArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new DT(TT[oT], TT[oT + 1], TT[oT + 2])
      }
      static FromArrayToRef(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        IT.r = TT[oT], IT.g = TT[oT + 1], IT.b = TT[oT + 2]
      }
      static FromInts(TT, oT, IT) {
        return new DT(TT / 255, oT / 255, IT / 255)
      }
      static Lerp(TT, oT, IT) {
        const iT = new DT(0, 0, 0);
        return DT.LerpToRef(TT, oT, IT, iT), iT
      }
      static LerpToRef(TT, oT, IT, iT) {
        iT.r = TT.r + (oT.r - TT.r) * IT, iT.g = TT.g + (oT.g - TT.g) * IT, iT.b = TT.b + (oT.b - TT.b) * IT
      }
      static Hermite(TT, oT, IT, iT, zT) {
        const kT = zT * zT,
          WT = zT * kT,
          XT = 2 * WT - 3 * kT + 1,
          BT = -2 * WT + 3 * kT,
          FT = WT - 2 * kT + zT,
          ST = WT - kT,
          LT = TT.r * XT + IT.r * BT + oT.r * FT + iT.r * ST,
          xT = TT.g * XT + IT.g * BT + oT.g * FT + iT.g * ST,
          cT = TT.b * XT + IT.b * BT + oT.b * FT + iT.b * ST;
        return new DT(LT, xT, cT)
      }
      static Hermite1stDerivative(TT, oT, IT, iT, zT) {
        const kT = DT.Black();
        return this.Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT), kT
      }
      static Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT) {
        const WT = zT * zT;
        kT.r = 6 * (WT - zT) * TT.r + (3 * WT - 4 * zT + 1) * oT.r + 6 * (-WT + zT) * IT.r + (3 * WT - 2 * zT) * iT.r, kT.g = 6 * (WT - zT) * TT.g + (3 * WT - 4 * zT + 1) * oT.g + 6 * (-WT + zT) * IT.g + (3 * WT - 2 * zT) * iT.g, kT.b = 6 * (WT - zT) * TT.b + (3 * WT - 4 * zT + 1) * oT.b + 6 * (-WT + zT) * IT.b + (3 * WT - 2 * zT) * iT.b
      }
      static Red() {
        return new DT(1, 0, 0)
      }
      static Green() {
        return new DT(0, 1, 0)
      }
      static Blue() {
        return new DT(0, 0, 1)
      }
      static Black() {
        return new DT(0, 0, 0)
      }
      static get BlackReadOnly() {
        return DT._BlackReadOnly
      }
      static White() {
        return new DT(1, 1, 1)
      }
      static Purple() {
        return new DT(.5, 0, .5)
      }
      static Magenta() {
        return new DT(1, 0, 1)
      }
      static Yellow() {
        return new DT(1, 1, 0)
      }
      static Gray() {
        return new DT(.5, .5, .5)
      }
      static Teal() {
        return new DT(0, 1, 1)
      }
      static Random() {
        return new DT(Math.random(), Math.random(), Math.random())
      }
    }
    DT._V8PerformanceHack = new DT(.5, .5, .5), DT._BlackReadOnly = DT.Black();
    class LT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = TT, this.g = oT, this.b = IT, this.a = iT
      }
      bIT() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[oT] = this.r, TT[oT + 1] = this.g, TT[oT + 2] = this.b, TT[oT + 3] = this.a, this
      }
      joT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = TT[oT], this.g = TT[oT + 1], this.b = TT[oT + 2], this.a = TT[oT + 3], this
      }
      equals(TT) {
        return TT && this.r === TT.r && this.g === TT.g && this.b === TT.b && this.a === TT.a
      }
      add(TT) {
        return new LT(this.r + TT.r, this.g + TT.g, this.b + TT.b, this.a + TT.a)
      }
      addToRef(TT, oT) {
        return oT.r = this.r + TT.r, oT.g = this.g + TT.g, oT.b = this.b + TT.b, oT.a = this.a + TT.a, oT
      }
      addInPlace(TT) {
        return this.r += TT.r, this.g += TT.g, this.b += TT.b, this.a += TT.a, this
      }
      addInPlaceFromFloats(TT, oT, IT, iT) {
        return this.r += TT, this.g += oT, this.b += IT, this.a += iT, this
      }
      subtract(TT) {
        return new LT(this.r - TT.r, this.g - TT.g, this.b - TT.b, this.a - TT.a)
      }
      subtractToRef(TT, oT) {
        return oT.r = this.r - TT.r, oT.g = this.g - TT.g, oT.b = this.b - TT.b, oT.a = this.a - TT.a, oT
      }
      SiT(TT) {
        return this.r -= TT.r, this.g -= TT.g, this.b -= TT.b, this.a -= TT.a, this
      }
      subtractFromFloats(TT, oT, IT, iT) {
        return new LT(this.r - TT, this.g - oT, this.b - IT, this.a - iT)
      }
      subtractFromFloatsToRef(TT, oT, IT, iT, zT) {
        return zT.r = this.r - TT, zT.g = this.g - oT, zT.b = this.b - IT, zT.a = this.a - iT, zT
      }
      scale(TT) {
        return new LT(this.r * TT, this.g * TT, this.b * TT, this.a * TT)
      }
      scaleInPlace(TT) {
        return this.r *= TT, this.g *= TT, this.b *= TT, this.a *= TT, this
      }
      scaleToRef(TT, oT) {
        return oT.r = this.r * TT, oT.g = this.g * TT, oT.b = this.b * TT, oT.a = this.a * TT, oT
      }
      scaleAndAddToRef(TT, oT) {
        return oT.r += this.r * TT, oT.g += this.g * TT, oT.b += this.b * TT, oT.a += this.a * TT, oT
      }
      clampToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        return IT.r = (0, kT.Clamp)(this.r, TT, oT), IT.g = (0, kT.Clamp)(this.g, TT, oT), IT.b = (0, kT.Clamp)(this.b, TT, oT), IT.a = (0, kT.Clamp)(this.a, TT, oT), IT
      }
      multiply(TT) {
        return new LT(this.r * TT.r, this.g * TT.g, this.b * TT.b, this.a * TT.a)
      }
      multiplyToRef(TT, oT) {
        return oT.r = this.r * TT.r, oT.g = this.g * TT.g, oT.b = this.b * TT.b, oT.a = this.a * TT.a, oT
      }
      multiplyInPlace(TT) {
        return this.r *= TT.r, this.g *= TT.g, this.b *= TT.b, this.a *= TT.a, this
      }
      multiplyByFloats(TT, oT, IT, iT) {
        return new LT(this.r * TT, this.g * oT, this.b * IT, this.a * iT)
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(TT, oT) {
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
      minimizeInPlaceFromFloats(TT, oT, IT, iT) {
        return this.r = Math.min(TT, this.r), this.g = Math.min(oT, this.g), this.b = Math.min(IT, this.b), this.a = Math.min(iT, this.a), this
      }
      maximizeInPlaceFromFloats(TT, oT, IT, iT) {
        return this.r = Math.max(TT, this.r), this.g = Math.max(oT, this.g), this.b = Math.max(IT, this.b), this.a = Math.max(iT, this.a), this
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
      ri() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(TT) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.d;
        return (0, kT.WithinEpsilon)(this.r, TT.r, oT) && (0, kT.WithinEpsilon)(this.g, TT.g, oT) && (0, kT.WithinEpsilon)(this.b, TT.b, oT) && (0, kT.WithinEpsilon)(this.a, TT.a, oT)
      }
      eWT(TT, oT, IT, iT) {
        return this.r === TT && this.g === oT && this.b === IT && this.a === iT
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
        return (new LT).SIT(this)
      }
      SIT(TT) {
        return this.r = TT.r, this.g = TT.g, this.b = TT.b, this.a = TT.a, this
      }
      S_(TT, oT, IT, iT) {
        return this.r = TT, this.g = oT, this.b = IT, this.a = iT, this
      }
      set(TT, oT, IT, iT) {
        return this.S_(TT, oT, IT, iT)
      }
      W8(TT) {
        return this.r = this.g = this.b = this.a = TT, this
      }
      toHexString() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = Math.round(255 * this.r),
          IT = Math.round(255 * this.g),
          iT = Math.round(255 * this.b);
        if (TT) return "#" + (0, kT.ToHex)(oT) + (0, kT.ToHex)(IT) + (0, kT.ToHex)(iT);
        const zT = Math.round(255 * this.a);
        return "#" + (0, kT.ToHex)(oT) + (0, kT.ToHex)(IT) + (0, kT.ToHex)(iT) + (0, kT.ToHex)(zT)
      }
      fromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 9 !== TT.length && 7 !== TT.length || (this.r = parseInt(TT.substring(1, 3), 16) / 255, this.g = parseInt(TT.substring(3, 5), 16) / 255, this.b = parseInt(TT.substring(5, 7), 16) / 255, 9 === TT.length && (this.a = parseInt(TT.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = new LT;
        return this.toLinearSpaceToRef(oT, TT), oT
      }
      toLinearSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = BT(this.r), TT.g = BT(this.g), TT.b = BT(this.b)) : (TT.r = XT(this.r), TT.g = XT(this.g), TT.b = XT(this.b)), TT.a = this.a, this
      }
      toGammaSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const oT = new LT;
        return this.toGammaSpaceToRef(oT, TT), oT
      }
      toGammaSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = ST(this.r), TT.g = ST(this.g), TT.b = ST(this.b)) : (TT.r = FT(this.r), TT.g = FT(this.g), TT.b = FT(this.b)), TT.a = this.a, this
      }
      static FromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 9 !== TT.length && 7 !== TT.length ? new LT(0, 0, 0, 0) : new LT(0, 0, 0, 1).fromHexString(TT)
      }
      static Lerp(TT, oT, IT) {
        return LT.LerpToRef(TT, oT, IT, new LT)
      }
      static LerpToRef(TT, oT, IT, iT) {
        return iT.r = TT.r + (oT.r - TT.r) * IT, iT.g = TT.g + (oT.g - TT.g) * IT, iT.b = TT.b + (oT.b - TT.b) * IT, iT.a = TT.a + (oT.a - TT.a) * IT, iT
      }
      static Hermite(TT, oT, IT, iT, zT) {
        const kT = zT * zT,
          WT = zT * kT,
          XT = 2 * WT - 3 * kT + 1,
          BT = -2 * WT + 3 * kT,
          FT = WT - 2 * kT + zT,
          ST = WT - kT,
          DT = TT.r * XT + IT.r * BT + oT.r * FT + iT.r * ST,
          xT = TT.g * XT + IT.g * BT + oT.g * FT + iT.g * ST,
          cT = TT.b * XT + IT.b * BT + oT.b * FT + iT.b * ST,
          KT = TT.a * XT + IT.a * BT + oT.a * FT + iT.a * ST;
        return new LT(DT, xT, cT, KT)
      }
      static Hermite1stDerivative(TT, oT, IT, iT, zT) {
        const kT = new LT;
        return this.Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT), kT
      }
      static Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT) {
        const WT = zT * zT;
        kT.r = 6 * (WT - zT) * TT.r + (3 * WT - 4 * zT + 1) * oT.r + 6 * (-WT + zT) * IT.r + (3 * WT - 2 * zT) * iT.r, kT.g = 6 * (WT - zT) * TT.g + (3 * WT - 4 * zT + 1) * oT.g + 6 * (-WT + zT) * IT.g + (3 * WT - 2 * zT) * iT.g, kT.b = 6 * (WT - zT) * TT.b + (3 * WT - 4 * zT + 1) * oT.b + 6 * (-WT + zT) * IT.b + (3 * WT - 2 * zT) * iT.b, kT.a = 6 * (WT - zT) * TT.a + (3 * WT - 4 * zT + 1) * oT.a + 6 * (-WT + zT) * IT.a + (3 * WT - 2 * zT) * iT.a
      }
      static FromColor3(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new LT(TT.r, TT.g, TT.b, oT)
      }
      static FromArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new LT(TT[oT], TT[oT + 1], TT[oT + 2], TT[oT + 3])
      }
      static FromArrayToRef(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        IT.r = TT[oT], IT.g = TT[oT + 1], IT.b = TT[oT + 2], IT.a = TT[oT + 3]
      }
      static FromInts(TT, oT, IT, iT) {
        return new LT(TT / 255, oT / 255, IT / 255, iT / 255)
      }
      static CheckColors4(TT, oT) {
        if (TT.length === 3 * oT) {
          const oT = [];
          for (let IT = 0; IT < TT.length; IT += 3) {
            const iT = IT / 3 * 4;
            oT[iT] = TT[IT], oT[iT + 1] = TT[IT + 1], oT[iT + 2] = TT[IT + 2], oT[iT + 3] = 1
          }
          return oT
        }
        return TT
      }
    }
    LT._V8PerformanceHack = new LT(.5, .5, .5, .5);
    class xT {}
    xT.Color3 = (0, iT.d)(3, DT.Black), xT.Color4 = (0, iT.d)(3, (() => new LT(0, 0, 0, 0)));
    let cT = !1;

    function KT() {
      cT || (cT = !0, Object.defineProperties(DT.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(LT.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, WT.h)("BABYLON.Color3", DT), (0, WT.h)("BABYLON.Color4", LT))
    }
  },
  36125: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      h: () => iT,
      l: () => zT
    });
    const iT = 1 / 2.2,
      zT = 2.2;
    Math.sqrt(5);
    let kT = .001
  },
  36156: (TT, oT, IT) => {
    function iT(TT) {
      return parseInt(TT.toString().replace(/\W/g, ""))
    }

    function zT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(TT - oT) <= IT
    }

    function kT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return TT < oT - iT || TT > IT + iT
    }

    function WT(TT, oT) {
      return TT === oT ? TT : Math.random() * (oT - TT) + TT
    }

    function XT(TT, oT, IT) {
      return TT + (oT - TT) * IT
    }

    function BT(TT, oT, IT) {
      let iT = MT(oT - TT, 360);
      return iT > 180 && (iT -= 360), TT + iT * LT(IT)
    }

    function FT(TT, oT, IT) {
      let iT;
      return iT = TT != oT ? LT((IT - TT) / (oT - TT)) : 0, iT
    }

    function ST(TT, oT, IT, iT, zT) {
      const kT = zT * zT,
        WT = zT * kT;
      return TT * (2 * WT - 3 * kT + 1) + IT * (-2 * WT + 3 * kT) + oT * (WT - 2 * kT + zT) + iT * (WT - kT)
    }

    function DT(TT, oT, IT, iT, zT) {
      const kT = zT * zT;
      return 6 * (kT - zT) * TT + (3 * kT - 4 * zT + 1) * oT + 6 * (-kT + zT) * IT + (3 * kT - 2 * zT) * iT
    }

    function LT(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(IT, Math.max(oT, TT))
    }

    function xT(TT) {
      return TT -= 2 * Math.PI * Math.floor((TT + Math.PI) / (2 * Math.PI))
    }

    function cT(TT) {
      const oT = TT.toString(16);
      return TT <= 15 ? ("0" + oT).toUpperCase() : oT.toUpperCase()
    }

    function KT(TT) {
      if (Math.log2) return Math.floor(Math.log2(TT));
      if (TT < 0) return NaN;
      if (0 === TT) return -1 / 0;
      let oT = 0;
      if (TT < 1) {
        for (; TT < 1;) oT++, TT *= 2;
        oT = -oT
      } else if (TT > 1)
        for (; TT > 1;) oT++, TT = Math.floor(TT / 2);
      return oT
    }

    function MT(TT, oT) {
      return TT - Math.floor(TT / oT) * oT
    }

    function rT(TT, oT, IT) {
      return (TT - oT) / (IT - oT)
    }

    function AT(TT, oT, IT) {
      return TT * (IT - oT) + oT
    }

    function gT(TT, oT) {
      let IT = MT(oT - TT, 360);
      return IT > 180 && (IT -= 360), IT
    }

    function hT(TT, oT) {
      const IT = MT(TT, 2 * oT);
      return oT - Math.abs(IT - oT)
    }

    function wT(TT, oT, IT) {
      let iT = LT(IT);
      return iT = -2 * iT * iT * iT + 3 * iT * iT, oT * iT + TT * (1 - iT)
    }

    function mT(TT, oT, IT) {
      let iT;
      return iT = Math.abs(oT - TT) <= IT ? oT : TT + Math.sign(oT - TT) * IT, iT
    }

    function eT(TT, oT, IT) {
      const iT = gT(TT, oT);
      let zT;
      return zT = -IT < iT && iT < IT ? oT : mT(TT, oT = TT + iT, IT), zT
    }

    function RT(TT, oT, IT) {
      return (TT - oT) / (IT - oT)
    }

    function uT(TT, oT, IT) {
      return (IT - oT) * TT + oT
    }

    function vT(TT, oT) {
      const IT = TT % oT;
      return 0 === IT ? oT : vT(oT, IT)
    }
    IT.r(oT), IT.d(oT, {
      Clamp: () => LT,
      DeltaAngle: () => gT,
      Denormalize: () => AT,
      ExtractAsInt: () => iT,
      Hermite: () => ST,
      Hermite1stDerivative: () => DT,
      HighestCommonFactor: () => vT,
      ILog2: () => KT,
      InverseLerp: () => FT,
      Lerp: () => XT,
      LerpAngle: () => BT,
      MoveTowards: () => mT,
      MoveTowardsAngle: () => eT,
      Normalize: () => rT,
      NormalizeRadians: () => xT,
      OutsideRange: () => kT,
      PercentToRange: () => uT,
      PingPong: () => hT,
      RandomRange: () => WT,
      RangeToPercent: () => RT,
      Repeat: () => MT,
      SmoothStep: () => wT,
      ToHex: () => cT,
      WithinEpsilon: () => zT
    })
  },
  36134: (TT, oT, IT) => {
    function iT(TT, oT) {
      const IT = [];
      for (let iT = 0; iT < TT; ++iT) IT.push(oT());
      return IT
    }

    function zT(TT, oT) {
      return iT(TT, oT)
    }
    IT.d(oT, {
      d: () => iT,
      g: () => zT,
      j: () => WT
    });
    const kT = ["push", "splice", "pop", "shift", "unshift"];

    function WT(TT, oT) {
      const IT = kT.map((IT => function(TT, oT, IT) {
        const iT = TT[oT];
        if ("function" !== typeof iT) return null;
        const zT = function() {
          const iT = TT.length,
            kT = zT.previous.apply(TT, arguments);
          return IT(oT, iT), kT
        };
        return iT.next = zT, zT.previous = iT, TT[oT] = zT, () => {
          const IT = zT.previous;
          if (!IT) return;
          const iT = zT.next;
          iT ? (IT.next = iT, iT.previous = IT) : (IT.next = void 0, TT[oT] = IT), zT.next = void 0, zT.previous = void 0
        }
      }(TT, IT, oT)));
      return () => {
        for (const TT of IT) TT?.()
      }
    }
  },
  36166: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      h: () => zT
    });
    const iT = {};

    function zT(TT, oT) {
      iT[TT] = oT
    }

    function kT(TT) {
      return iT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);