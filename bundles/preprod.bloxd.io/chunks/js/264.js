export const id = 264;
export const ids = [264];
export const modules = {
  38372: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => ZW,
      d: () => xW,
      f: () => bW,
      j: () => lW
    });
    var mW = OW(38253),
      EW = OW(38249),
      NW = OW(38285),
      PW = OW(38299);

    function LW(WW) {
      return Math.pow(WW, EW.i)
    }

    function cW(WW) {
      return WW <= .04045 ? .0773993808 * WW : Math.pow(.947867299 * (WW + .055), 2.4)
    }

    function wW(WW) {
      return Math.pow(WW, EW.h)
    }

    function tW(WW) {
      return WW <= .0031308 ? 12.92 * WW : 1.055 * Math.pow(WW, .41666) - .055
    }
    class ZW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = WW, this.g = iW, this.b = OW
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let WW = 255 * this.r | 0;
        return WW = 397 * WW ^ 255 * this.g, WW = 397 * WW ^ 255 * this.b, WW
      }
      toArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[iW] = this.r, WW[iW + 1] = this.g, WW[iW + 2] = this.b, this
      }
      mZ(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ZW.FromArrayToRef(WW, iW, this), this
      }
      toColor4() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new xW(this.r, this.g, this.b, WW)
      }
      wEW() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(WW) {
        return new ZW(this.r * WW.r, this.g * WW.g, this.b * WW.b)
      }
      multiplyToRef(WW, iW) {
        return iW.r = this.r * WW.r, iW.g = this.g * WW.g, iW.b = this.b * WW.b, iW
      }
      multiplyInPlace(WW) {
        return this.r *= WW.r, this.g *= WW.g, this.b *= WW.b, this
      }
      multiplyByFloats(WW, iW, OW) {
        return new ZW(this.r * WW, this.g * iW, this.b * OW)
      }
      divide(WW) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(WW, iW) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(WW) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(WW) {
        return this.minimizeInPlaceFromFloats(WW.r, WW.g, WW.b)
      }
      maximizeInPlace(WW) {
        return this.maximizeInPlaceFromFloats(WW.r, WW.g, WW.b)
      }
      minimizeInPlaceFromFloats(WW, iW, OW) {
        return this.r = Math.min(WW, this.r), this.g = Math.min(iW, this.g), this.b = Math.min(OW, this.b), this
      }
      maximizeInPlaceFromFloats(WW, iW, OW) {
        return this.r = Math.max(WW, this.r), this.g = Math.max(iW, this.g), this.b = Math.max(OW, this.b), this
      }
      floorToRef(WW) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(WW) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(WW) {
        return WW && this.r === WW.r && this.g === WW.g && this.b === WW.b
      }
      equalsFloats(WW, iW, OW) {
        return this.jLW(WW, iW, OW)
      }
      jLW(WW, iW, OW) {
        return this.r === WW && this.g === iW && this.b === OW
      }
      equalsWithEpsilon(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW.e;
        return (0, NW.WithinEpsilon)(this.r, WW.r, iW) && (0, NW.WithinEpsilon)(this.g, WW.g, iW) && (0, NW.WithinEpsilon)(this.b, WW.b, iW)
      }
      Lj() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(WW) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(WW) {
        return new ZW(this.r * WW, this.g * WW, this.b * WW)
      }
      scaleInPlace(WW) {
        return this.r *= WW, this.g *= WW, this.b *= WW, this
      }
      scaleToRef(WW, iW) {
        return iW.r = this.r * WW, iW.g = this.g * WW, iW.b = this.b * WW, iW
      }
      scaleAndAddToRef(WW, iW) {
        return iW.r += this.r * WW, iW.g += this.g * WW, iW.b += this.b * WW, iW
      }
      clampToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        return OW.r = (0, NW.Clamp)(this.r, WW, iW), OW.g = (0, NW.Clamp)(this.g, WW, iW), OW.b = (0, NW.Clamp)(this.b, WW, iW), OW
      }
      add(WW) {
        return new ZW(this.r + WW.r, this.g + WW.g, this.b + WW.b)
      }
      addInPlace(WW) {
        return this.r += WW.r, this.g += WW.g, this.b += WW.b, this
      }
      addInPlaceFromFloats(WW, iW, OW) {
        return this.r += WW, this.g += iW, this.b += OW, this
      }
      addToRef(WW, iW) {
        return iW.r = this.r + WW.r, iW.g = this.g + WW.g, iW.b = this.b + WW.b, iW
      }
      subtract(WW) {
        return new ZW(this.r - WW.r, this.g - WW.g, this.b - WW.b)
      }
      subtractToRef(WW, iW) {
        return iW.r = this.r - WW.r, iW.g = this.g - WW.g, iW.b = this.b - WW.b, iW
      }
      yEW(WW) {
        return this.r -= WW.r, this.g -= WW.g, this.b -= WW.b, this
      }
      subtractFromFloats(WW, iW, OW) {
        return new ZW(this.r - WW, this.g - iW, this.b - OW)
      }
      subtractFromFloatsToRef(WW, iW, OW, mW) {
        return mW.r = this.r - WW, mW.g = this.g - iW, mW.b = this.b - OW, mW
      }
      clone() {
        return new ZW(this.r, this.g, this.b)
      }
      HJ(WW) {
        return this.r = WW.r, this.g = WW.g, this.b = WW.b, this
      }
      yWW(WW, iW, OW) {
        return this.r = WW, this.g = iW, this.b = OW, this
      }
      set(WW, iW, OW) {
        return this.yWW(WW, iW, OW)
      }
      Z5(WW) {
        return this.r = this.g = this.b = WW, this
      }
      toHexString() {
        const WW = Math.round(255 * this.r),
          iW = Math.round(255 * this.g),
          OW = Math.round(255 * this.b);
        return "#" + (0, NW.ToHex)(WW) + (0, NW.ToHex)(iW) + (0, NW.ToHex)(OW)
      }
      fromHexString(WW) {
        return "#" !== WW.substring(0, 1) || 7 !== WW.length || (this.r = parseInt(WW.substring(1, 3), 16) / 255, this.g = parseInt(WW.substring(3, 5), 16) / 255, this.b = parseInt(WW.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new ZW)
      }
      toHSVToRef(WW) {
        const iW = this.r,
          OW = this.g,
          mW = this.b,
          EW = Math.max(iW, OW, mW),
          NW = Math.min(iW, OW, mW);
        let PW = 0,
          LW = 0;
        const cW = EW,
          wW = EW - NW;
        return 0 !== EW && (LW = wW / EW), EW != NW && (EW == iW ? (PW = (OW - mW) / wW, OW < mW && (PW += 6)) : EW == OW ? PW = (mW - iW) / wW + 2 : EW == mW && (PW = (iW - OW) / wW + 4), PW *= 60), WW.r = PW, WW.g = LW, WW.b = cW, WW
      }
      toLinearSpace() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = new ZW;
        return this.toLinearSpaceToRef(iW, WW), iW
      }
      toLinearSpaceToRef(WW) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = cW(this.r), WW.g = cW(this.g), WW.b = cW(this.b)) : (WW.r = LW(this.r), WW.g = LW(this.g), WW.b = LW(this.b)), this
      }
      toGammaSpace() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = new ZW;
        return this.toGammaSpaceToRef(iW, WW), iW
      }
      toGammaSpaceToRef(WW) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = tW(this.r), WW.g = tW(this.g), WW.b = tW(this.b)) : (WW.r = wW(this.r), WW.g = wW(this.g), WW.b = wW(this.b)), this
      }
      static HSVtoRGBToRef(WW, iW, OW, mW) {
        const EW = OW * iW,
          NW = WW / 60,
          PW = EW * (1 - Math.abs(NW % 2 - 1));
        let LW = 0,
          cW = 0,
          wW = 0;
        NW >= 0 && NW <= 1 ? (LW = EW, cW = PW) : NW >= 1 && NW <= 2 ? (LW = PW, cW = EW) : NW >= 2 && NW <= 3 ? (cW = EW, wW = PW) : NW >= 3 && NW <= 4 ? (cW = PW, wW = EW) : NW >= 4 && NW <= 5 ? (LW = PW, wW = EW) : NW >= 5 && NW <= 6 && (LW = EW, wW = PW);
        const tW = OW - EW;
        return mW.r = LW + tW, mW.g = cW + tW, mW.b = wW + tW, mW
      }
      static FromHSV(WW, iW, OW) {
        const mW = new ZW(0, 0, 0);
        return ZW.HSVtoRGBToRef(WW, iW, OW, mW), mW
      }
      static FromHexString(WW) {
        return new ZW(0, 0, 0).fromHexString(WW)
      }
      static FromArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ZW(WW[iW], WW[iW + 1], WW[iW + 2])
      }
      static FromArrayToRef(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        OW.r = WW[iW], OW.g = WW[iW + 1], OW.b = WW[iW + 2]
      }
      static FromInts(WW, iW, OW) {
        return new ZW(WW / 255, iW / 255, OW / 255)
      }
      static Lerp(WW, iW, OW) {
        const mW = new ZW(0, 0, 0);
        return ZW.LerpToRef(WW, iW, OW, mW), mW
      }
      static LerpToRef(WW, iW, OW, mW) {
        mW.r = WW.r + (iW.r - WW.r) * OW, mW.g = WW.g + (iW.g - WW.g) * OW, mW.b = WW.b + (iW.b - WW.b) * OW
      }
      static Hermite(WW, iW, OW, mW, EW) {
        const NW = EW * EW,
          PW = EW * NW,
          LW = 2 * PW - 3 * NW + 1,
          cW = -2 * PW + 3 * NW,
          wW = PW - 2 * NW + EW,
          tW = PW - NW,
          xW = WW.r * LW + OW.r * cW + iW.r * wW + mW.r * tW,
          lW = WW.g * LW + OW.g * cW + iW.g * wW + mW.g * tW,
          AW = WW.b * LW + OW.b * cW + iW.b * wW + mW.b * tW;
        return new ZW(xW, lW, AW)
      }
      static Hermite1stDerivative(WW, iW, OW, mW, EW) {
        const NW = ZW.Black();
        return this.Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW), NW
      }
      static Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW) {
        const PW = EW * EW;
        NW.r = 6 * (PW - EW) * WW.r + (3 * PW - 4 * EW + 1) * iW.r + 6 * (-PW + EW) * OW.r + (3 * PW - 2 * EW) * mW.r, NW.g = 6 * (PW - EW) * WW.g + (3 * PW - 4 * EW + 1) * iW.g + 6 * (-PW + EW) * OW.g + (3 * PW - 2 * EW) * mW.g, NW.b = 6 * (PW - EW) * WW.b + (3 * PW - 4 * EW + 1) * iW.b + 6 * (-PW + EW) * OW.b + (3 * PW - 2 * EW) * mW.b
      }
      static Red() {
        return new ZW(1, 0, 0)
      }
      static Green() {
        return new ZW(0, 1, 0)
      }
      static Blue() {
        return new ZW(0, 0, 1)
      }
      static Black() {
        return new ZW(0, 0, 0)
      }
      static get BlackReadOnly() {
        return ZW._BlackReadOnly
      }
      static White() {
        return new ZW(1, 1, 1)
      }
      static Purple() {
        return new ZW(.5, 0, .5)
      }
      static Magenta() {
        return new ZW(1, 0, 1)
      }
      static Yellow() {
        return new ZW(1, 1, 0)
      }
      static Gray() {
        return new ZW(.5, .5, .5)
      }
      static Teal() {
        return new ZW(0, 1, 1)
      }
      static Random() {
        return new ZW(Math.random(), Math.random(), Math.random())
      }
    }
    ZW._V8PerformanceHack = new ZW(.5, .5, .5), ZW._BlackReadOnly = ZW.Black();
    class xW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = WW, this.g = iW, this.b = OW, this.a = mW
      }
      wEW() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[iW] = this.r, WW[iW + 1] = this.g, WW[iW + 2] = this.b, WW[iW + 3] = this.a, this
      }
      mZ(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = WW[iW], this.g = WW[iW + 1], this.b = WW[iW + 2], this.a = WW[iW + 3], this
      }
      equals(WW) {
        return WW && this.r === WW.r && this.g === WW.g && this.b === WW.b && this.a === WW.a
      }
      add(WW) {
        return new xW(this.r + WW.r, this.g + WW.g, this.b + WW.b, this.a + WW.a)
      }
      addToRef(WW, iW) {
        return iW.r = this.r + WW.r, iW.g = this.g + WW.g, iW.b = this.b + WW.b, iW.a = this.a + WW.a, iW
      }
      addInPlace(WW) {
        return this.r += WW.r, this.g += WW.g, this.b += WW.b, this.a += WW.a, this
      }
      addInPlaceFromFloats(WW, iW, OW, mW) {
        return this.r += WW, this.g += iW, this.b += OW, this.a += mW, this
      }
      subtract(WW) {
        return new xW(this.r - WW.r, this.g - WW.g, this.b - WW.b, this.a - WW.a)
      }
      subtractToRef(WW, iW) {
        return iW.r = this.r - WW.r, iW.g = this.g - WW.g, iW.b = this.b - WW.b, iW.a = this.a - WW.a, iW
      }
      yEW(WW) {
        return this.r -= WW.r, this.g -= WW.g, this.b -= WW.b, this.a -= WW.a, this
      }
      subtractFromFloats(WW, iW, OW, mW) {
        return new xW(this.r - WW, this.g - iW, this.b - OW, this.a - mW)
      }
      subtractFromFloatsToRef(WW, iW, OW, mW, EW) {
        return EW.r = this.r - WW, EW.g = this.g - iW, EW.b = this.b - OW, EW.a = this.a - mW, EW
      }
      scale(WW) {
        return new xW(this.r * WW, this.g * WW, this.b * WW, this.a * WW)
      }
      scaleInPlace(WW) {
        return this.r *= WW, this.g *= WW, this.b *= WW, this.a *= WW, this
      }
      scaleToRef(WW, iW) {
        return iW.r = this.r * WW, iW.g = this.g * WW, iW.b = this.b * WW, iW.a = this.a * WW, iW
      }
      scaleAndAddToRef(WW, iW) {
        return iW.r += this.r * WW, iW.g += this.g * WW, iW.b += this.b * WW, iW.a += this.a * WW, iW
      }
      clampToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        return OW.r = (0, NW.Clamp)(this.r, WW, iW), OW.g = (0, NW.Clamp)(this.g, WW, iW), OW.b = (0, NW.Clamp)(this.b, WW, iW), OW.a = (0, NW.Clamp)(this.a, WW, iW), OW
      }
      multiply(WW) {
        return new xW(this.r * WW.r, this.g * WW.g, this.b * WW.b, this.a * WW.a)
      }
      multiplyToRef(WW, iW) {
        return iW.r = this.r * WW.r, iW.g = this.g * WW.g, iW.b = this.b * WW.b, iW.a = this.a * WW.a, iW
      }
      multiplyInPlace(WW) {
        return this.r *= WW.r, this.g *= WW.g, this.b *= WW.b, this.a *= WW.a, this
      }
      multiplyByFloats(WW, iW, OW, mW) {
        return new xW(this.r * WW, this.g * iW, this.b * OW, this.a * mW)
      }
      divide(WW) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(WW, iW) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(WW) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(WW) {
        return this.r = Math.min(this.r, WW.r), this.g = Math.min(this.g, WW.g), this.b = Math.min(this.b, WW.b), this.a = Math.min(this.a, WW.a), this
      }
      maximizeInPlace(WW) {
        return this.r = Math.max(this.r, WW.r), this.g = Math.max(this.g, WW.g), this.b = Math.max(this.b, WW.b), this.a = Math.max(this.a, WW.a), this
      }
      minimizeInPlaceFromFloats(WW, iW, OW, mW) {
        return this.r = Math.min(WW, this.r), this.g = Math.min(iW, this.g), this.b = Math.min(OW, this.b), this.a = Math.min(mW, this.a), this
      }
      maximizeInPlaceFromFloats(WW, iW, OW, mW) {
        return this.r = Math.max(WW, this.r), this.g = Math.max(iW, this.g), this.b = Math.max(OW, this.b), this.a = Math.max(mW, this.a), this
      }
      floorToRef(WW) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(WW) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      Lj() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(WW) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : EW.e;
        return (0, NW.WithinEpsilon)(this.r, WW.r, iW) && (0, NW.WithinEpsilon)(this.g, WW.g, iW) && (0, NW.WithinEpsilon)(this.b, WW.b, iW) && (0, NW.WithinEpsilon)(this.a, WW.a, iW)
      }
      jLW(WW, iW, OW, mW) {
        return this.r === WW && this.g === iW && this.b === OW && this.a === mW
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let WW = 255 * this.r | 0;
        return WW = 397 * WW ^ 255 * this.g, WW = 397 * WW ^ 255 * this.b, WW = 397 * WW ^ 255 * this.a, WW
      }
      clone() {
        return (new xW).HJ(this)
      }
      HJ(WW) {
        return this.r = WW.r, this.g = WW.g, this.b = WW.b, this.a = WW.a, this
      }
      yWW(WW, iW, OW, mW) {
        return this.r = WW, this.g = iW, this.b = OW, this.a = mW, this
      }
      set(WW, iW, OW, mW) {
        return this.yWW(WW, iW, OW, mW)
      }
      Z5(WW) {
        return this.r = this.g = this.b = this.a = WW, this
      }
      toHexString() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = Math.round(255 * this.r),
          OW = Math.round(255 * this.g),
          mW = Math.round(255 * this.b);
        if (WW) return "#" + (0, NW.ToHex)(iW) + (0, NW.ToHex)(OW) + (0, NW.ToHex)(mW);
        const EW = Math.round(255 * this.a);
        return "#" + (0, NW.ToHex)(iW) + (0, NW.ToHex)(OW) + (0, NW.ToHex)(mW) + (0, NW.ToHex)(EW)
      }
      fromHexString(WW) {
        return "#" !== WW.substring(0, 1) || 9 !== WW.length && 7 !== WW.length || (this.r = parseInt(WW.substring(1, 3), 16) / 255, this.g = parseInt(WW.substring(3, 5), 16) / 255, this.b = parseInt(WW.substring(5, 7), 16) / 255, 9 === WW.length && (this.a = parseInt(WW.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = new xW;
        return this.toLinearSpaceToRef(iW, WW), iW
      }
      toLinearSpaceToRef(WW) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = cW(this.r), WW.g = cW(this.g), WW.b = cW(this.b)) : (WW.r = LW(this.r), WW.g = LW(this.g), WW.b = LW(this.b)), WW.a = this.a, this
      }
      toGammaSpace() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const iW = new xW;
        return this.toGammaSpaceToRef(iW, WW), iW
      }
      toGammaSpaceToRef(WW) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = tW(this.r), WW.g = tW(this.g), WW.b = tW(this.b)) : (WW.r = wW(this.r), WW.g = wW(this.g), WW.b = wW(this.b)), WW.a = this.a, this
      }
      static FromHexString(WW) {
        return "#" !== WW.substring(0, 1) || 9 !== WW.length && 7 !== WW.length ? new xW(0, 0, 0, 0) : new xW(0, 0, 0, 1).fromHexString(WW)
      }
      static Lerp(WW, iW, OW) {
        return xW.LerpToRef(WW, iW, OW, new xW)
      }
      static LerpToRef(WW, iW, OW, mW) {
        return mW.r = WW.r + (iW.r - WW.r) * OW, mW.g = WW.g + (iW.g - WW.g) * OW, mW.b = WW.b + (iW.b - WW.b) * OW, mW.a = WW.a + (iW.a - WW.a) * OW, mW
      }
      static Hermite(WW, iW, OW, mW, EW) {
        const NW = EW * EW,
          PW = EW * NW,
          LW = 2 * PW - 3 * NW + 1,
          cW = -2 * PW + 3 * NW,
          wW = PW - 2 * NW + EW,
          tW = PW - NW,
          ZW = WW.r * LW + OW.r * cW + iW.r * wW + mW.r * tW,
          lW = WW.g * LW + OW.g * cW + iW.g * wW + mW.g * tW,
          AW = WW.b * LW + OW.b * cW + iW.b * wW + mW.b * tW,
          bW = WW.a * LW + OW.a * cW + iW.a * wW + mW.a * tW;
        return new xW(ZW, lW, AW, bW)
      }
      static Hermite1stDerivative(WW, iW, OW, mW, EW) {
        const NW = new xW;
        return this.Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW), NW
      }
      static Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW) {
        const PW = EW * EW;
        NW.r = 6 * (PW - EW) * WW.r + (3 * PW - 4 * EW + 1) * iW.r + 6 * (-PW + EW) * OW.r + (3 * PW - 2 * EW) * mW.r, NW.g = 6 * (PW - EW) * WW.g + (3 * PW - 4 * EW + 1) * iW.g + 6 * (-PW + EW) * OW.g + (3 * PW - 2 * EW) * mW.g, NW.b = 6 * (PW - EW) * WW.b + (3 * PW - 4 * EW + 1) * iW.b + 6 * (-PW + EW) * OW.b + (3 * PW - 2 * EW) * mW.b, NW.a = 6 * (PW - EW) * WW.a + (3 * PW - 4 * EW + 1) * iW.a + 6 * (-PW + EW) * OW.a + (3 * PW - 2 * EW) * mW.a
      }
      static FromColor3(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new xW(WW.r, WW.g, WW.b, iW)
      }
      static FromArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new xW(WW[iW], WW[iW + 1], WW[iW + 2], WW[iW + 3])
      }
      static FromArrayToRef(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        OW.r = WW[iW], OW.g = WW[iW + 1], OW.b = WW[iW + 2], OW.a = WW[iW + 3]
      }
      static FromInts(WW, iW, OW, mW) {
        return new xW(WW / 255, iW / 255, OW / 255, mW / 255)
      }
      static CheckColors4(WW, iW) {
        if (WW.length === 3 * iW) {
          const iW = [];
          for (let OW = 0; OW < WW.length; OW += 3) {
            const mW = OW / 3 * 4;
            iW[mW] = WW[OW], iW[mW + 1] = WW[OW + 1], iW[mW + 2] = WW[OW + 2], iW[mW + 3] = 1
          }
          return iW
        }
        return WW
      }
    }
    xW._V8PerformanceHack = new xW(.5, .5, .5, .5);
    class lW {}
    lW.Color3 = (0, mW.c)(3, ZW.Black), lW.Color4 = (0, mW.c)(3, (() => new xW(0, 0, 0, 0)));
    let AW = !1;

    function bW() {
      AW || (AW = !0, Object.defineProperties(ZW.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(xW.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, PW.h)("BABYLON.Color3", ZW), (0, PW.h)("BABYLON.Color4", xW))
    }
  },
  38249: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => NW,
      h: () => mW,
      i: () => EW
    });
    const mW = 1 / 2.2,
      EW = 2.2;
    Math.sqrt(5);
    let NW = .001
  },
  38285: (WW, iW, OW) => {
    function mW(WW) {
      return parseInt(WW.toString().replace(/\W/g, ""))
    }

    function EW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(WW - iW) <= OW
    }

    function NW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return WW < iW - mW || WW > OW + mW
    }

    function PW(WW, iW) {
      return WW === iW ? WW : Math.random() * (iW - WW) + WW
    }

    function LW(WW, iW, OW) {
      return WW + (iW - WW) * OW
    }

    function cW(WW, iW, OW) {
      let mW = jW(iW - WW, 360);
      return mW > 180 && (mW -= 360), WW + mW * xW(OW)
    }

    function wW(WW, iW, OW) {
      let mW;
      return mW = WW != iW ? xW((OW - WW) / (iW - WW)) : 0, mW
    }

    function tW(WW, iW, OW, mW, EW) {
      const NW = EW * EW,
        PW = EW * NW;
      return WW * (2 * PW - 3 * NW + 1) + OW * (-2 * PW + 3 * NW) + iW * (PW - 2 * NW + EW) + mW * (PW - NW)
    }

    function ZW(WW, iW, OW, mW, EW) {
      const NW = EW * EW;
      return 6 * (NW - EW) * WW + (3 * NW - 4 * EW + 1) * iW + 6 * (-NW + EW) * OW + (3 * NW - 2 * EW) * mW
    }

    function xW(WW) {
      let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(OW, Math.max(iW, WW))
    }

    function lW(WW) {
      return WW -= 2 * Math.PI * Math.floor((WW + Math.PI) / (2 * Math.PI))
    }

    function AW(WW) {
      const iW = WW.toString(16);
      return WW <= 15 ? ("0" + iW).toUpperCase() : iW.toUpperCase()
    }

    function bW(WW) {
      if (Math.log2) return Math.floor(Math.log2(WW));
      if (WW < 0) return NaN;
      if (0 === WW) return -1 / 0;
      let iW = 0;
      if (WW < 1) {
        for (; WW < 1;) iW++, WW *= 2;
        iW = -iW
      } else if (WW > 1)
        for (; WW > 1;) iW++, WW = Math.floor(WW / 2);
      return iW
    }

    function jW(WW, iW) {
      return WW - Math.floor(WW / iW) * iW
    }

    function UW(WW, iW, OW) {
      return (WW - iW) / (OW - iW)
    }

    function kW(WW, iW, OW) {
      return WW * (OW - iW) + iW
    }

    function sW(WW, iW) {
      let OW = jW(iW - WW, 360);
      return OW > 180 && (OW -= 360), OW
    }

    function MW(WW, iW) {
      const OW = jW(WW, 2 * iW);
      return iW - Math.abs(OW - iW)
    }

    function KW(WW, iW, OW) {
      let mW = xW(OW);
      return mW = -2 * mW * mW * mW + 3 * mW * mW, iW * mW + WW * (1 - mW)
    }

    function SW(WW, iW, OW) {
      let mW;
      return mW = Math.abs(iW - WW) <= OW ? iW : WW + Math.sign(iW - WW) * OW, mW
    }

    function YW(WW, iW, OW) {
      const mW = sW(WW, iW);
      let EW;
      return EW = -OW < mW && mW < OW ? iW : SW(WW, iW = WW + mW, OW), EW
    }

    function yW(WW, iW, OW) {
      return (WW - iW) / (OW - iW)
    }

    function TW(WW, iW, OW) {
      return (OW - iW) * WW + iW
    }

    function JW(WW, iW) {
      const OW = WW % iW;
      return 0 === OW ? iW : JW(iW, OW)
    }
    OW.r(iW), OW.d(iW, {
      Clamp: () => xW,
      DeltaAngle: () => sW,
      Denormalize: () => kW,
      ExtractAsInt: () => mW,
      Hermite: () => tW,
      Hermite1stDerivative: () => ZW,
      HighestCommonFactor: () => JW,
      ILog2: () => bW,
      InverseLerp: () => wW,
      Lerp: () => LW,
      LerpAngle: () => cW,
      MoveTowards: () => SW,
      MoveTowardsAngle: () => YW,
      Normalize: () => UW,
      NormalizeRadians: () => lW,
      OutsideRange: () => NW,
      PercentToRange: () => TW,
      PingPong: () => MW,
      RandomRange: () => PW,
      RangeToPercent: () => yW,
      Repeat: () => jW,
      SmoothStep: () => KW,
      ToHex: () => AW,
      WithinEpsilon: () => EW
    })
  },
  38253: (WW, iW, OW) => {
    function mW(WW, iW) {
      const OW = [];
      for (let mW = 0; mW < WW; ++mW) OW.push(iW());
      return OW
    }

    function EW(WW, iW) {
      return mW(WW, iW)
    }
    OW.d(iW, {
      c: () => mW,
      f: () => EW,
      j: () => PW
    });
    const NW = ["push", "splice", "pop", "shift", "unshift"];

    function PW(WW, iW) {
      const OW = NW.map((OW => function(WW, iW, OW) {
        const mW = WW[iW];
        if ("function" !== typeof mW) return null;
        const EW = function() {
          const mW = WW.length,
            NW = EW.previous.apply(WW, arguments);
          return OW(iW, mW), NW
        };
        return mW.next = EW, EW.previous = mW, WW[iW] = EW, () => {
          const OW = EW.previous;
          if (!OW) return;
          const mW = EW.next;
          mW ? (OW.next = mW, mW.previous = OW) : (OW.next = void 0, WW[iW] = OW), EW.next = void 0, EW.previous = void 0
        }
      }(WW, OW, iW)));
      return () => {
        for (const WW of OW) WW?.()
      }
    }
  },
  38299: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      h: () => EW
    });
    const mW = {};

    function EW(WW, iW) {
      mW[WW] = iW
    }

    function NW(WW) {
      return mW[WW]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);