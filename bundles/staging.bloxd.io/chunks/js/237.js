export const id = 237;
export const ids = [237];
export const modules = {
  37367: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => lT,
      g: () => LT,
      k: () => ZT,
      m: () => pT
    });
    var WT = mT(37205),
      zT = mT(37196),
      MT = mT(37226),
      gT = mT(37239);

    function nT(TT) {
      return Math.pow(TT, zT.f)
    }

    function HT(TT) {
      return TT <= .04045 ? .0773993808 * TT : Math.pow(.947867299 * (TT + .055), 2.4)
    }

    function kT(TT) {
      return Math.pow(TT, zT.d)
    }

    function jT(TT) {
      return TT <= .0031308 ? 12.92 * TT : 1.055 * Math.pow(TT, .41666) - .055
    }
    class lT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = TT, this.g = UT, this.b = mT
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
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[UT] = this.r, TT[UT + 1] = this.g, TT[UT + 2] = this.b, this
      }
      MmT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return lT.FromArrayToRef(TT, UT, this), this
      }
      toColor4() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new LT(this.r, this.g, this.b, TT)
      }
      cWT() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(TT) {
        return new lT(this.r * TT.r, this.g * TT.g, this.b * TT.b)
      }
      multiplyToRef(TT, UT) {
        return UT.r = this.r * TT.r, UT.g = this.g * TT.g, UT.b = this.b * TT.b, UT
      }
      multiplyInPlace(TT) {
        return this.r *= TT.r, this.g *= TT.g, this.b *= TT.b, this
      }
      multiplyByFloats(TT, UT, mT) {
        return new lT(this.r * TT, this.g * UT, this.b * mT)
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(TT, UT) {
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
      minimizeInPlaceFromFloats(TT, UT, mT) {
        return this.r = Math.min(TT, this.r), this.g = Math.min(UT, this.g), this.b = Math.min(mT, this.b), this
      }
      maximizeInPlaceFromFloats(TT, UT, mT) {
        return this.r = Math.max(TT, this.r), this.g = Math.max(UT, this.g), this.b = Math.max(mT, this.b), this
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
      equalsFloats(TT, UT, mT) {
        return this.UnT(TT, UT, mT)
      }
      UnT(TT, UT, mT) {
        return this.r === TT && this.g === UT && this.b === mT
      }
      equalsWithEpsilon(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.c;
        return (0, MT.WithinEpsilon)(this.r, TT.r, UT) && (0, MT.WithinEpsilon)(this.g, TT.g, UT) && (0, MT.WithinEpsilon)(this.b, TT.b, UT)
      }
      ck() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(TT) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(TT) {
        return new lT(this.r * TT, this.g * TT, this.b * TT)
      }
      scaleInPlace(TT) {
        return this.r *= TT, this.g *= TT, this.b *= TT, this
      }
      scaleToRef(TT, UT) {
        return UT.r = this.r * TT, UT.g = this.g * TT, UT.b = this.b * TT, UT
      }
      scaleAndAddToRef(TT, UT) {
        return UT.r += this.r * TT, UT.g += this.g * TT, UT.b += this.b * TT, UT
      }
      clampToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        return mT.r = (0, MT.Clamp)(this.r, TT, UT), mT.g = (0, MT.Clamp)(this.g, TT, UT), mT.b = (0, MT.Clamp)(this.b, TT, UT), mT
      }
      add(TT) {
        return new lT(this.r + TT.r, this.g + TT.g, this.b + TT.b)
      }
      addInPlace(TT) {
        return this.r += TT.r, this.g += TT.g, this.b += TT.b, this
      }
      addInPlaceFromFloats(TT, UT, mT) {
        return this.r += TT, this.g += UT, this.b += mT, this
      }
      addToRef(TT, UT) {
        return UT.r = this.r + TT.r, UT.g = this.g + TT.g, UT.b = this.b + TT.b, UT
      }
      subtract(TT) {
        return new lT(this.r - TT.r, this.g - TT.g, this.b - TT.b)
      }
      subtractToRef(TT, UT) {
        return UT.r = this.r - TT.r, UT.g = this.g - TT.g, UT.b = this.b - TT.b, UT
      }
      FWT(TT) {
        return this.r -= TT.r, this.g -= TT.g, this.b -= TT.b, this
      }
      subtractFromFloats(TT, UT, mT) {
        return new lT(this.r - TT, this.g - UT, this.b - mT)
      }
      subtractFromFloatsToRef(TT, UT, mT, WT) {
        return WT.r = this.r - TT, WT.g = this.g - UT, WT.b = this.b - mT, WT
      }
      clone() {
        return new lT(this.r, this.g, this.b)
      }
      Gw(TT) {
        return this.r = TT.r, this.g = TT.g, this.b = TT.b, this
      }
      J9(TT, UT, mT) {
        return this.r = TT, this.g = UT, this.b = mT, this
      }
      set(TT, UT, mT) {
        return this.J9(TT, UT, mT)
      }
      B3(TT) {
        return this.r = this.g = this.b = TT, this
      }
      toHexString() {
        const TT = Math.round(255 * this.r),
          UT = Math.round(255 * this.g),
          mT = Math.round(255 * this.b);
        return "#" + (0, MT.ToHex)(TT) + (0, MT.ToHex)(UT) + (0, MT.ToHex)(mT)
      }
      fromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 7 !== TT.length || (this.r = parseInt(TT.substring(1, 3), 16) / 255, this.g = parseInt(TT.substring(3, 5), 16) / 255, this.b = parseInt(TT.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new lT)
      }
      toHSVToRef(TT) {
        const UT = this.r,
          mT = this.g,
          WT = this.b,
          zT = Math.max(UT, mT, WT),
          MT = Math.min(UT, mT, WT);
        let gT = 0,
          nT = 0;
        const HT = zT,
          kT = zT - MT;
        return 0 !== zT && (nT = kT / zT), zT != MT && (zT == UT ? (gT = (mT - WT) / kT, mT < WT && (gT += 6)) : zT == mT ? gT = (WT - UT) / kT + 2 : zT == WT && (gT = (UT - mT) / kT + 4), gT *= 60), TT.r = gT, TT.g = nT, TT.b = HT, TT
      }
      toLinearSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = new lT;
        return this.toLinearSpaceToRef(UT, TT), UT
      }
      toLinearSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = HT(this.r), TT.g = HT(this.g), TT.b = HT(this.b)) : (TT.r = nT(this.r), TT.g = nT(this.g), TT.b = nT(this.b)), this
      }
      toGammaSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = new lT;
        return this.toGammaSpaceToRef(UT, TT), UT
      }
      toGammaSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = jT(this.r), TT.g = jT(this.g), TT.b = jT(this.b)) : (TT.r = kT(this.r), TT.g = kT(this.g), TT.b = kT(this.b)), this
      }
      static HSVtoRGBToRef(TT, UT, mT, WT) {
        const zT = mT * UT,
          MT = TT / 60,
          gT = zT * (1 - Math.abs(MT % 2 - 1));
        let nT = 0,
          HT = 0,
          kT = 0;
        MT >= 0 && MT <= 1 ? (nT = zT, HT = gT) : MT >= 1 && MT <= 2 ? (nT = gT, HT = zT) : MT >= 2 && MT <= 3 ? (HT = zT, kT = gT) : MT >= 3 && MT <= 4 ? (HT = gT, kT = zT) : MT >= 4 && MT <= 5 ? (nT = gT, kT = zT) : MT >= 5 && MT <= 6 && (nT = zT, kT = gT);
        const jT = mT - zT;
        return WT.r = nT + jT, WT.g = HT + jT, WT.b = kT + jT, WT
      }
      static FromHSV(TT, UT, mT) {
        const WT = new lT(0, 0, 0);
        return lT.HSVtoRGBToRef(TT, UT, mT, WT), WT
      }
      static FromHexString(TT) {
        return new lT(0, 0, 0).fromHexString(TT)
      }
      static FromArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new lT(TT[UT], TT[UT + 1], TT[UT + 2])
      }
      static FromArrayToRef(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        mT.r = TT[UT], mT.g = TT[UT + 1], mT.b = TT[UT + 2]
      }
      static FromInts(TT, UT, mT) {
        return new lT(TT / 255, UT / 255, mT / 255)
      }
      static Lerp(TT, UT, mT) {
        const WT = new lT(0, 0, 0);
        return lT.LerpToRef(TT, UT, mT, WT), WT
      }
      static LerpToRef(TT, UT, mT, WT) {
        WT.r = TT.r + (UT.r - TT.r) * mT, WT.g = TT.g + (UT.g - TT.g) * mT, WT.b = TT.b + (UT.b - TT.b) * mT
      }
      static Hermite(TT, UT, mT, WT, zT) {
        const MT = zT * zT,
          gT = zT * MT,
          nT = 2 * gT - 3 * MT + 1,
          HT = -2 * gT + 3 * MT,
          kT = gT - 2 * MT + zT,
          jT = gT - MT,
          LT = TT.r * nT + mT.r * HT + UT.r * kT + WT.r * jT,
          pT = TT.g * nT + mT.g * HT + UT.g * kT + WT.g * jT,
          BT = TT.b * nT + mT.b * HT + UT.b * kT + WT.b * jT;
        return new lT(LT, pT, BT)
      }
      static Hermite1stDerivative(TT, UT, mT, WT, zT) {
        const MT = lT.Black();
        return this.Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT), MT
      }
      static Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT) {
        const gT = zT * zT;
        MT.r = 6 * (gT - zT) * TT.r + (3 * gT - 4 * zT + 1) * UT.r + 6 * (-gT + zT) * mT.r + (3 * gT - 2 * zT) * WT.r, MT.g = 6 * (gT - zT) * TT.g + (3 * gT - 4 * zT + 1) * UT.g + 6 * (-gT + zT) * mT.g + (3 * gT - 2 * zT) * WT.g, MT.b = 6 * (gT - zT) * TT.b + (3 * gT - 4 * zT + 1) * UT.b + 6 * (-gT + zT) * mT.b + (3 * gT - 2 * zT) * WT.b
      }
      static Red() {
        return new lT(1, 0, 0)
      }
      static Green() {
        return new lT(0, 1, 0)
      }
      static Blue() {
        return new lT(0, 0, 1)
      }
      static Black() {
        return new lT(0, 0, 0)
      }
      static get BlackReadOnly() {
        return lT._BlackReadOnly
      }
      static White() {
        return new lT(1, 1, 1)
      }
      static Purple() {
        return new lT(.5, 0, .5)
      }
      static Magenta() {
        return new lT(1, 0, 1)
      }
      static Yellow() {
        return new lT(1, 1, 0)
      }
      static Gray() {
        return new lT(.5, .5, .5)
      }
      static Teal() {
        return new lT(0, 1, 1)
      }
      static Random() {
        return new lT(Math.random(), Math.random(), Math.random())
      }
    }
    lT._V8PerformanceHack = new lT(.5, .5, .5), lT._BlackReadOnly = lT.Black();
    class LT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = TT, this.g = UT, this.b = mT, this.a = WT
      }
      cWT() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[UT] = this.r, TT[UT + 1] = this.g, TT[UT + 2] = this.b, TT[UT + 3] = this.a, this
      }
      MmT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = TT[UT], this.g = TT[UT + 1], this.b = TT[UT + 2], this.a = TT[UT + 3], this
      }
      equals(TT) {
        return TT && this.r === TT.r && this.g === TT.g && this.b === TT.b && this.a === TT.a
      }
      add(TT) {
        return new LT(this.r + TT.r, this.g + TT.g, this.b + TT.b, this.a + TT.a)
      }
      addToRef(TT, UT) {
        return UT.r = this.r + TT.r, UT.g = this.g + TT.g, UT.b = this.b + TT.b, UT.a = this.a + TT.a, UT
      }
      addInPlace(TT) {
        return this.r += TT.r, this.g += TT.g, this.b += TT.b, this.a += TT.a, this
      }
      addInPlaceFromFloats(TT, UT, mT, WT) {
        return this.r += TT, this.g += UT, this.b += mT, this.a += WT, this
      }
      subtract(TT) {
        return new LT(this.r - TT.r, this.g - TT.g, this.b - TT.b, this.a - TT.a)
      }
      subtractToRef(TT, UT) {
        return UT.r = this.r - TT.r, UT.g = this.g - TT.g, UT.b = this.b - TT.b, UT.a = this.a - TT.a, UT
      }
      FWT(TT) {
        return this.r -= TT.r, this.g -= TT.g, this.b -= TT.b, this.a -= TT.a, this
      }
      subtractFromFloats(TT, UT, mT, WT) {
        return new LT(this.r - TT, this.g - UT, this.b - mT, this.a - WT)
      }
      subtractFromFloatsToRef(TT, UT, mT, WT, zT) {
        return zT.r = this.r - TT, zT.g = this.g - UT, zT.b = this.b - mT, zT.a = this.a - WT, zT
      }
      scale(TT) {
        return new LT(this.r * TT, this.g * TT, this.b * TT, this.a * TT)
      }
      scaleInPlace(TT) {
        return this.r *= TT, this.g *= TT, this.b *= TT, this.a *= TT, this
      }
      scaleToRef(TT, UT) {
        return UT.r = this.r * TT, UT.g = this.g * TT, UT.b = this.b * TT, UT.a = this.a * TT, UT
      }
      scaleAndAddToRef(TT, UT) {
        return UT.r += this.r * TT, UT.g += this.g * TT, UT.b += this.b * TT, UT.a += this.a * TT, UT
      }
      clampToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        return mT.r = (0, MT.Clamp)(this.r, TT, UT), mT.g = (0, MT.Clamp)(this.g, TT, UT), mT.b = (0, MT.Clamp)(this.b, TT, UT), mT.a = (0, MT.Clamp)(this.a, TT, UT), mT
      }
      multiply(TT) {
        return new LT(this.r * TT.r, this.g * TT.g, this.b * TT.b, this.a * TT.a)
      }
      multiplyToRef(TT, UT) {
        return UT.r = this.r * TT.r, UT.g = this.g * TT.g, UT.b = this.b * TT.b, UT.a = this.a * TT.a, UT
      }
      multiplyInPlace(TT) {
        return this.r *= TT.r, this.g *= TT.g, this.b *= TT.b, this.a *= TT.a, this
      }
      multiplyByFloats(TT, UT, mT, WT) {
        return new LT(this.r * TT, this.g * UT, this.b * mT, this.a * WT)
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(TT, UT) {
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
      minimizeInPlaceFromFloats(TT, UT, mT, WT) {
        return this.r = Math.min(TT, this.r), this.g = Math.min(UT, this.g), this.b = Math.min(mT, this.b), this.a = Math.min(WT, this.a), this
      }
      maximizeInPlaceFromFloats(TT, UT, mT, WT) {
        return this.r = Math.max(TT, this.r), this.g = Math.max(UT, this.g), this.b = Math.max(mT, this.b), this.a = Math.max(WT, this.a), this
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
      ck() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(TT) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : zT.c;
        return (0, MT.WithinEpsilon)(this.r, TT.r, UT) && (0, MT.WithinEpsilon)(this.g, TT.g, UT) && (0, MT.WithinEpsilon)(this.b, TT.b, UT) && (0, MT.WithinEpsilon)(this.a, TT.a, UT)
      }
      UnT(TT, UT, mT, WT) {
        return this.r === TT && this.g === UT && this.b === mT && this.a === WT
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
        return (new LT).Gw(this)
      }
      Gw(TT) {
        return this.r = TT.r, this.g = TT.g, this.b = TT.b, this.a = TT.a, this
      }
      J9(TT, UT, mT, WT) {
        return this.r = TT, this.g = UT, this.b = mT, this.a = WT, this
      }
      set(TT, UT, mT, WT) {
        return this.J9(TT, UT, mT, WT)
      }
      B3(TT) {
        return this.r = this.g = this.b = this.a = TT, this
      }
      toHexString() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = Math.round(255 * this.r),
          mT = Math.round(255 * this.g),
          WT = Math.round(255 * this.b);
        if (TT) return "#" + (0, MT.ToHex)(UT) + (0, MT.ToHex)(mT) + (0, MT.ToHex)(WT);
        const zT = Math.round(255 * this.a);
        return "#" + (0, MT.ToHex)(UT) + (0, MT.ToHex)(mT) + (0, MT.ToHex)(WT) + (0, MT.ToHex)(zT)
      }
      fromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 9 !== TT.length && 7 !== TT.length || (this.r = parseInt(TT.substring(1, 3), 16) / 255, this.g = parseInt(TT.substring(3, 5), 16) / 255, this.b = parseInt(TT.substring(5, 7), 16) / 255, 9 === TT.length && (this.a = parseInt(TT.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = new LT;
        return this.toLinearSpaceToRef(UT, TT), UT
      }
      toLinearSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = HT(this.r), TT.g = HT(this.g), TT.b = HT(this.b)) : (TT.r = nT(this.r), TT.g = nT(this.g), TT.b = nT(this.b)), TT.a = this.a, this
      }
      toGammaSpace() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const UT = new LT;
        return this.toGammaSpaceToRef(UT, TT), UT
      }
      toGammaSpaceToRef(TT) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (TT.r = jT(this.r), TT.g = jT(this.g), TT.b = jT(this.b)) : (TT.r = kT(this.r), TT.g = kT(this.g), TT.b = kT(this.b)), TT.a = this.a, this
      }
      static FromHexString(TT) {
        return "#" !== TT.substring(0, 1) || 9 !== TT.length && 7 !== TT.length ? new LT(0, 0, 0, 0) : new LT(0, 0, 0, 1).fromHexString(TT)
      }
      static Lerp(TT, UT, mT) {
        return LT.LerpToRef(TT, UT, mT, new LT)
      }
      static LerpToRef(TT, UT, mT, WT) {
        return WT.r = TT.r + (UT.r - TT.r) * mT, WT.g = TT.g + (UT.g - TT.g) * mT, WT.b = TT.b + (UT.b - TT.b) * mT, WT.a = TT.a + (UT.a - TT.a) * mT, WT
      }
      static Hermite(TT, UT, mT, WT, zT) {
        const MT = zT * zT,
          gT = zT * MT,
          nT = 2 * gT - 3 * MT + 1,
          HT = -2 * gT + 3 * MT,
          kT = gT - 2 * MT + zT,
          jT = gT - MT,
          lT = TT.r * nT + mT.r * HT + UT.r * kT + WT.r * jT,
          pT = TT.g * nT + mT.g * HT + UT.g * kT + WT.g * jT,
          BT = TT.b * nT + mT.b * HT + UT.b * kT + WT.b * jT,
          ZT = TT.a * nT + mT.a * HT + UT.a * kT + WT.a * jT;
        return new LT(lT, pT, BT, ZT)
      }
      static Hermite1stDerivative(TT, UT, mT, WT, zT) {
        const MT = new LT;
        return this.Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT), MT
      }
      static Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT) {
        const gT = zT * zT;
        MT.r = 6 * (gT - zT) * TT.r + (3 * gT - 4 * zT + 1) * UT.r + 6 * (-gT + zT) * mT.r + (3 * gT - 2 * zT) * WT.r, MT.g = 6 * (gT - zT) * TT.g + (3 * gT - 4 * zT + 1) * UT.g + 6 * (-gT + zT) * mT.g + (3 * gT - 2 * zT) * WT.g, MT.b = 6 * (gT - zT) * TT.b + (3 * gT - 4 * zT + 1) * UT.b + 6 * (-gT + zT) * mT.b + (3 * gT - 2 * zT) * WT.b, MT.a = 6 * (gT - zT) * TT.a + (3 * gT - 4 * zT + 1) * UT.a + 6 * (-gT + zT) * mT.a + (3 * gT - 2 * zT) * WT.a
      }
      static FromColor3(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new LT(TT.r, TT.g, TT.b, UT)
      }
      static FromArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new LT(TT[UT], TT[UT + 1], TT[UT + 2], TT[UT + 3])
      }
      static FromArrayToRef(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        mT.r = TT[UT], mT.g = TT[UT + 1], mT.b = TT[UT + 2], mT.a = TT[UT + 3]
      }
      static FromInts(TT, UT, mT, WT) {
        return new LT(TT / 255, UT / 255, mT / 255, WT / 255)
      }
      static CheckColors4(TT, UT) {
        if (TT.length === 3 * UT) {
          const UT = [];
          for (let mT = 0; mT < TT.length; mT += 3) {
            const WT = mT / 3 * 4;
            UT[WT] = TT[mT], UT[WT + 1] = TT[mT + 1], UT[WT + 2] = TT[mT + 2], UT[WT + 3] = 1
          }
          return UT
        }
        return TT
      }
    }
    LT._V8PerformanceHack = new LT(.5, .5, .5, .5);
    class pT {}
    pT.Color3 = (0, WT.c)(3, lT.Black), pT.Color4 = (0, WT.c)(3, (() => new LT(0, 0, 0, 0)));
    let BT = !1;

    function ZT() {
      BT || (BT = !0, Object.defineProperties(lT.prototype, {
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
      }), (0, gT.h)("BABYLON.Color3", lT), (0, gT.h)("BABYLON.Color4", LT))
    }
  },
  37196: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT,
      d: () => WT,
      f: () => zT
    });
    const WT = 1 / 2.2,
      zT = 2.2;
    Math.sqrt(5);
    let MT = .001
  },
  37226: (TT, UT, mT) => {
    function WT(TT) {
      return parseInt(TT.toString().replace(/\W/g, ""))
    }

    function zT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(TT - UT) <= mT
    }

    function MT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return TT < UT - WT || TT > mT + WT
    }

    function gT(TT, UT) {
      return TT === UT ? TT : Math.random() * (UT - TT) + TT
    }

    function nT(TT, UT, mT) {
      return TT + (UT - TT) * mT
    }

    function HT(TT, UT, mT) {
      let WT = cT(UT - TT, 360);
      return WT > 180 && (WT -= 360), TT + WT * LT(mT)
    }

    function kT(TT, UT, mT) {
      let WT;
      return WT = TT != UT ? LT((mT - TT) / (UT - TT)) : 0, WT
    }

    function jT(TT, UT, mT, WT, zT) {
      const MT = zT * zT,
        gT = zT * MT;
      return TT * (2 * gT - 3 * MT + 1) + mT * (-2 * gT + 3 * MT) + UT * (gT - 2 * MT + zT) + WT * (gT - MT)
    }

    function lT(TT, UT, mT, WT, zT) {
      const MT = zT * zT;
      return 6 * (MT - zT) * TT + (3 * MT - 4 * zT + 1) * UT + 6 * (-MT + zT) * mT + (3 * MT - 2 * zT) * WT
    }

    function LT(TT) {
      let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(mT, Math.max(UT, TT))
    }

    function pT(TT) {
      return TT -= 2 * Math.PI * Math.floor((TT + Math.PI) / (2 * Math.PI))
    }

    function BT(TT) {
      const UT = TT.toString(16);
      return TT <= 15 ? ("0" + UT).toUpperCase() : UT.toUpperCase()
    }

    function ZT(TT) {
      if (Math.log2) return Math.floor(Math.log2(TT));
      if (TT < 0) return NaN;
      if (0 === TT) return -1 / 0;
      let UT = 0;
      if (TT < 1) {
        for (; TT < 1;) UT++, TT *= 2;
        UT = -UT
      } else if (TT > 1)
        for (; TT > 1;) UT++, TT = Math.floor(TT / 2);
      return UT
    }

    function cT(TT, UT) {
      return TT - Math.floor(TT / UT) * UT
    }

    function vT(TT, UT, mT) {
      return (TT - UT) / (mT - UT)
    }

    function fT(TT, UT, mT) {
      return TT * (mT - UT) + UT
    }

    function qT(TT, UT) {
      let mT = cT(UT - TT, 360);
      return mT > 180 && (mT -= 360), mT
    }

    function iT(TT, UT) {
      const mT = cT(TT, 2 * UT);
      return UT - Math.abs(mT - UT)
    }

    function bT(TT, UT, mT) {
      let WT = LT(mT);
      return WT = -2 * WT * WT * WT + 3 * WT * WT, UT * WT + TT * (1 - WT)
    }

    function OT(TT, UT, mT) {
      let WT;
      return WT = Math.abs(UT - TT) <= mT ? UT : TT + Math.sign(UT - TT) * mT, WT
    }

    function eT(TT, UT, mT) {
      const WT = qT(TT, UT);
      let zT;
      return zT = -mT < WT && WT < mT ? UT : OT(TT, UT = TT + WT, mT), zT
    }

    function YT(TT, UT, mT) {
      return (TT - UT) / (mT - UT)
    }

    function JT(TT, UT, mT) {
      return (mT - UT) * TT + UT
    }

    function xT(TT, UT) {
      const mT = TT % UT;
      return 0 === mT ? UT : xT(UT, mT)
    }
    mT.r(UT), mT.d(UT, {
      Clamp: () => LT,
      DeltaAngle: () => qT,
      Denormalize: () => fT,
      ExtractAsInt: () => WT,
      Hermite: () => jT,
      Hermite1stDerivative: () => lT,
      HighestCommonFactor: () => xT,
      ILog2: () => ZT,
      InverseLerp: () => kT,
      Lerp: () => nT,
      LerpAngle: () => HT,
      MoveTowards: () => OT,
      MoveTowardsAngle: () => eT,
      Normalize: () => vT,
      NormalizeRadians: () => pT,
      OutsideRange: () => MT,
      PercentToRange: () => JT,
      PingPong: () => iT,
      RandomRange: () => gT,
      RangeToPercent: () => YT,
      Repeat: () => cT,
      SmoothStep: () => bT,
      ToHex: () => BT,
      WithinEpsilon: () => zT
    })
  },
  37205: (TT, UT, mT) => {
    function WT(TT, UT) {
      const mT = [];
      for (let WT = 0; WT < TT; ++WT) mT.push(UT());
      return mT
    }

    function zT(TT, UT) {
      return WT(TT, UT)
    }
    mT.d(UT, {
      c: () => WT,
      d: () => zT,
      e: () => gT
    });
    const MT = ["push", "splice", "pop", "shift", "unshift"];

    function gT(TT, UT) {
      const mT = MT.map((mT => function(TT, UT, mT) {
        const WT = TT[UT];
        if ("function" !== typeof WT) return null;
        const zT = function() {
          const WT = TT.length,
            MT = zT.previous.apply(TT, arguments);
          return mT(UT, WT), MT
        };
        return WT.next = zT, zT.previous = WT, TT[UT] = zT, () => {
          const mT = zT.previous;
          if (!mT) return;
          const WT = zT.next;
          WT ? (mT.next = WT, WT.previous = mT) : (mT.next = void 0, TT[UT] = mT), zT.next = void 0, zT.previous = void 0
        }
      }(TT, mT, UT)));
      return () => {
        for (const TT of mT) TT?.()
      }
    }
  },
  37239: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      h: () => zT
    });
    const WT = {};

    function zT(TT, UT) {
      WT[TT] = UT
    }

    function MT(TT) {
      return WT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);