export const id = 207;
export const ids = [207];
export const modules = {
  35376: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => BW,
      h: () => tR,
      k: () => iR,
      n: () => TW
    });
    var wW = MW(35330),
      CW = MW(35328),
      zR = MW(35353),
      AW = MW(35361);

    function bR(WW) {
      return Math.pow(WW, CW.k)
    }

    function yR(WW) {
      return WW <= .04045 ? .0773993808 * WW : Math.pow(.947867299 * (WW + .055), 2.4)
    }

    function NW(WW) {
      return Math.pow(WW, CW.g)
    }

    function eW(WW) {
      return WW <= .0031308 ? 12.92 * WW : 1.055 * Math.pow(WW, .41666) - .055
    }
    class BW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = WW, this.g = RW, this.b = MW
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
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[RW] = this.r, WW[RW + 1] = this.g, WW[RW + 2] = this.b, this
      }
      MyW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BW.FromArrayToRef(WW, RW, this), this
      }
      toColor4() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new tR(this.r, this.g, this.b, WW)
      }
      JNW() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(WW) {
        return new BW(this.r * WW.r, this.g * WW.g, this.b * WW.b)
      }
      multiplyToRef(WW, RW) {
        return RW.r = this.r * WW.r, RW.g = this.g * WW.g, RW.b = this.b * WW.b, RW
      }
      multiplyInPlace(WW) {
        return this.r *= WW.r, this.g *= WW.g, this.b *= WW.b, this
      }
      multiplyByFloats(WW, RW, MW) {
        return new BW(this.r * WW, this.g * RW, this.b * MW)
      }
      divide(WW) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(WW, RW) {
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
      minimizeInPlaceFromFloats(WW, RW, MW) {
        return this.r = Math.min(WW, this.r), this.g = Math.min(RW, this.g), this.b = Math.min(MW, this.b), this
      }
      maximizeInPlaceFromFloats(WW, RW, MW) {
        return this.r = Math.max(WW, this.r), this.g = Math.max(RW, this.g), this.b = Math.max(MW, this.b), this
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
      equalsFloats(WW, RW, MW) {
        return this.EtW(WW, RW, MW)
      }
      EtW(WW, RW, MW) {
        return this.r === WW && this.g === RW && this.b === MW
      }
      equalsWithEpsilon(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW.c;
        return (0, zR.WithinEpsilon)(this.r, WW.r, RW) && (0, zR.WithinEpsilon)(this.g, WW.g, RW) && (0, zR.WithinEpsilon)(this.b, WW.b, RW)
      }
      zb() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(WW) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(WW) {
        return new BW(this.r * WW, this.g * WW, this.b * WW)
      }
      scaleInPlace(WW) {
        return this.r *= WW, this.g *= WW, this.b *= WW, this
      }
      scaleToRef(WW, RW) {
        return RW.r = this.r * WW, RW.g = this.g * WW, RW.b = this.b * WW, RW
      }
      scaleAndAddToRef(WW, RW) {
        return RW.r += this.r * WW, RW.g += this.g * WW, RW.b += this.b * WW, RW
      }
      clampToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        return MW.r = (0, zR.Clamp)(this.r, WW, RW), MW.g = (0, zR.Clamp)(this.g, WW, RW), MW.b = (0, zR.Clamp)(this.b, WW, RW), MW
      }
      add(WW) {
        return new BW(this.r + WW.r, this.g + WW.g, this.b + WW.b)
      }
      addInPlace(WW) {
        return this.r += WW.r, this.g += WW.g, this.b += WW.b, this
      }
      addInPlaceFromFloats(WW, RW, MW) {
        return this.r += WW, this.g += RW, this.b += MW, this
      }
      addToRef(WW, RW) {
        return RW.r = this.r + WW.r, RW.g = this.g + WW.g, RW.b = this.b + WW.b, RW
      }
      subtract(WW) {
        return new BW(this.r - WW.r, this.g - WW.g, this.b - WW.b)
      }
      subtractToRef(WW, RW) {
        return RW.r = this.r - WW.r, RW.g = this.g - WW.g, RW.b = this.b - WW.b, RW
      }
      pNW(WW) {
        return this.r -= WW.r, this.g -= WW.g, this.b -= WW.b, this
      }
      subtractFromFloats(WW, RW, MW) {
        return new BW(this.r - WW, this.g - RW, this.b - MW)
      }
      subtractFromFloatsToRef(WW, RW, MW, wW) {
        return wW.r = this.r - WW, wW.g = this.g - RW, wW.b = this.b - MW, wW
      }
      clone() {
        return new BW(this.r, this.g, this.b)
      }
      hyW(WW) {
        return this.r = WW.r, this.g = WW.g, this.b = WW.b, this
      }
      nzW(WW, RW, MW) {
        return this.r = WW, this.g = RW, this.b = MW, this
      }
      set(WW, RW, MW) {
        return this.nzW(WW, RW, MW)
      }
      YzW(WW) {
        return this.r = this.g = this.b = WW, this
      }
      toHexString() {
        const WW = Math.round(255 * this.r),
          RW = Math.round(255 * this.g),
          MW = Math.round(255 * this.b);
        return "#" + (0, zR.ToHex)(WW) + (0, zR.ToHex)(RW) + (0, zR.ToHex)(MW)
      }
      fromHexString(WW) {
        return "#" !== WW.substring(0, 1) || 7 !== WW.length || (this.r = parseInt(WW.substring(1, 3), 16) / 255, this.g = parseInt(WW.substring(3, 5), 16) / 255, this.b = parseInt(WW.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new BW)
      }
      toHSVToRef(WW) {
        const RW = this.r,
          MW = this.g,
          wW = this.b,
          CW = Math.max(RW, MW, wW),
          zR = Math.min(RW, MW, wW);
        let AW = 0,
          bR = 0;
        const yR = CW,
          NW = CW - zR;
        return 0 !== CW && (bR = NW / CW), CW != zR && (CW == RW ? (AW = (MW - wW) / NW, MW < wW && (AW += 6)) : CW == MW ? AW = (wW - RW) / NW + 2 : CW == wW && (AW = (RW - MW) / NW + 4), AW *= 60), WW.r = AW, WW.g = bR, WW.b = yR, WW
      }
      toLinearSpace() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = new BW;
        return this.toLinearSpaceToRef(RW, WW), RW
      }
      toLinearSpaceToRef(WW) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = yR(this.r), WW.g = yR(this.g), WW.b = yR(this.b)) : (WW.r = bR(this.r), WW.g = bR(this.g), WW.b = bR(this.b)), this
      }
      toGammaSpace() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = new BW;
        return this.toGammaSpaceToRef(RW, WW), RW
      }
      toGammaSpaceToRef(WW) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = eW(this.r), WW.g = eW(this.g), WW.b = eW(this.b)) : (WW.r = NW(this.r), WW.g = NW(this.g), WW.b = NW(this.b)), this
      }
      static HSVtoRGBToRef(WW, RW, MW, wW) {
        const CW = MW * RW,
          zR = WW / 60,
          AW = CW * (1 - Math.abs(zR % 2 - 1));
        let bR = 0,
          yR = 0,
          NW = 0;
        zR >= 0 && zR <= 1 ? (bR = CW, yR = AW) : zR >= 1 && zR <= 2 ? (bR = AW, yR = CW) : zR >= 2 && zR <= 3 ? (yR = CW, NW = AW) : zR >= 3 && zR <= 4 ? (yR = AW, NW = CW) : zR >= 4 && zR <= 5 ? (bR = AW, NW = CW) : zR >= 5 && zR <= 6 && (bR = CW, NW = AW);
        const eW = MW - CW;
        return wW.r = bR + eW, wW.g = yR + eW, wW.b = NW + eW, wW
      }
      static FromHSV(WW, RW, MW) {
        const wW = new BW(0, 0, 0);
        return BW.HSVtoRGBToRef(WW, RW, MW, wW), wW
      }
      static FromHexString(WW) {
        return new BW(0, 0, 0).fromHexString(WW)
      }
      static FromArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new BW(WW[RW], WW[RW + 1], WW[RW + 2])
      }
      static FromArrayToRef(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        MW.r = WW[RW], MW.g = WW[RW + 1], MW.b = WW[RW + 2]
      }
      static FromInts(WW, RW, MW) {
        return new BW(WW / 255, RW / 255, MW / 255)
      }
      static Lerp(WW, RW, MW) {
        const wW = new BW(0, 0, 0);
        return BW.LerpToRef(WW, RW, MW, wW), wW
      }
      static LerpToRef(WW, RW, MW, wW) {
        wW.r = WW.r + (RW.r - WW.r) * MW, wW.g = WW.g + (RW.g - WW.g) * MW, wW.b = WW.b + (RW.b - WW.b) * MW
      }
      static Hermite(WW, RW, MW, wW, CW) {
        const zR = CW * CW,
          AW = CW * zR,
          bR = 2 * AW - 3 * zR + 1,
          yR = -2 * AW + 3 * zR,
          NW = AW - 2 * zR + CW,
          eW = AW - zR,
          tR = WW.r * bR + MW.r * yR + RW.r * NW + wW.r * eW,
          TW = WW.g * bR + MW.g * yR + RW.g * NW + wW.g * eW,
          gR = WW.b * bR + MW.b * yR + RW.b * NW + wW.b * eW;
        return new BW(tR, TW, gR)
      }
      static Hermite1stDerivative(WW, RW, MW, wW, CW) {
        const zR = BW.Black();
        return this.Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR), zR
      }
      static Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR) {
        const AW = CW * CW;
        zR.r = 6 * (AW - CW) * WW.r + (3 * AW - 4 * CW + 1) * RW.r + 6 * (-AW + CW) * MW.r + (3 * AW - 2 * CW) * wW.r, zR.g = 6 * (AW - CW) * WW.g + (3 * AW - 4 * CW + 1) * RW.g + 6 * (-AW + CW) * MW.g + (3 * AW - 2 * CW) * wW.g, zR.b = 6 * (AW - CW) * WW.b + (3 * AW - 4 * CW + 1) * RW.b + 6 * (-AW + CW) * MW.b + (3 * AW - 2 * CW) * wW.b
      }
      static Red() {
        return new BW(1, 0, 0)
      }
      static Green() {
        return new BW(0, 1, 0)
      }
      static Blue() {
        return new BW(0, 0, 1)
      }
      static Black() {
        return new BW(0, 0, 0)
      }
      static get BlackReadOnly() {
        return BW._BlackReadOnly
      }
      static White() {
        return new BW(1, 1, 1)
      }
      static Purple() {
        return new BW(.5, 0, .5)
      }
      static Magenta() {
        return new BW(1, 0, 1)
      }
      static Yellow() {
        return new BW(1, 1, 0)
      }
      static Gray() {
        return new BW(.5, .5, .5)
      }
      static Teal() {
        return new BW(0, 1, 1)
      }
      static Random() {
        return new BW(Math.random(), Math.random(), Math.random())
      }
    }
    BW._V8PerformanceHack = new BW(.5, .5, .5), BW._BlackReadOnly = BW.Black();
    class tR {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = WW, this.g = RW, this.b = MW, this.a = wW
      }
      JNW() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[RW] = this.r, WW[RW + 1] = this.g, WW[RW + 2] = this.b, WW[RW + 3] = this.a, this
      }
      MyW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = WW[RW], this.g = WW[RW + 1], this.b = WW[RW + 2], this.a = WW[RW + 3], this
      }
      equals(WW) {
        return WW && this.r === WW.r && this.g === WW.g && this.b === WW.b && this.a === WW.a
      }
      add(WW) {
        return new tR(this.r + WW.r, this.g + WW.g, this.b + WW.b, this.a + WW.a)
      }
      addToRef(WW, RW) {
        return RW.r = this.r + WW.r, RW.g = this.g + WW.g, RW.b = this.b + WW.b, RW.a = this.a + WW.a, RW
      }
      addInPlace(WW) {
        return this.r += WW.r, this.g += WW.g, this.b += WW.b, this.a += WW.a, this
      }
      addInPlaceFromFloats(WW, RW, MW, wW) {
        return this.r += WW, this.g += RW, this.b += MW, this.a += wW, this
      }
      subtract(WW) {
        return new tR(this.r - WW.r, this.g - WW.g, this.b - WW.b, this.a - WW.a)
      }
      subtractToRef(WW, RW) {
        return RW.r = this.r - WW.r, RW.g = this.g - WW.g, RW.b = this.b - WW.b, RW.a = this.a - WW.a, RW
      }
      pNW(WW) {
        return this.r -= WW.r, this.g -= WW.g, this.b -= WW.b, this.a -= WW.a, this
      }
      subtractFromFloats(WW, RW, MW, wW) {
        return new tR(this.r - WW, this.g - RW, this.b - MW, this.a - wW)
      }
      subtractFromFloatsToRef(WW, RW, MW, wW, CW) {
        return CW.r = this.r - WW, CW.g = this.g - RW, CW.b = this.b - MW, CW.a = this.a - wW, CW
      }
      scale(WW) {
        return new tR(this.r * WW, this.g * WW, this.b * WW, this.a * WW)
      }
      scaleInPlace(WW) {
        return this.r *= WW, this.g *= WW, this.b *= WW, this.a *= WW, this
      }
      scaleToRef(WW, RW) {
        return RW.r = this.r * WW, RW.g = this.g * WW, RW.b = this.b * WW, RW.a = this.a * WW, RW
      }
      scaleAndAddToRef(WW, RW) {
        return RW.r += this.r * WW, RW.g += this.g * WW, RW.b += this.b * WW, RW.a += this.a * WW, RW
      }
      clampToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        return MW.r = (0, zR.Clamp)(this.r, WW, RW), MW.g = (0, zR.Clamp)(this.g, WW, RW), MW.b = (0, zR.Clamp)(this.b, WW, RW), MW.a = (0, zR.Clamp)(this.a, WW, RW), MW
      }
      multiply(WW) {
        return new tR(this.r * WW.r, this.g * WW.g, this.b * WW.b, this.a * WW.a)
      }
      multiplyToRef(WW, RW) {
        return RW.r = this.r * WW.r, RW.g = this.g * WW.g, RW.b = this.b * WW.b, RW.a = this.a * WW.a, RW
      }
      multiplyInPlace(WW) {
        return this.r *= WW.r, this.g *= WW.g, this.b *= WW.b, this.a *= WW.a, this
      }
      multiplyByFloats(WW, RW, MW, wW) {
        return new tR(this.r * WW, this.g * RW, this.b * MW, this.a * wW)
      }
      divide(WW) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(WW, RW) {
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
      minimizeInPlaceFromFloats(WW, RW, MW, wW) {
        return this.r = Math.min(WW, this.r), this.g = Math.min(RW, this.g), this.b = Math.min(MW, this.b), this.a = Math.min(wW, this.a), this
      }
      maximizeInPlaceFromFloats(WW, RW, MW, wW) {
        return this.r = Math.max(WW, this.r), this.g = Math.max(RW, this.g), this.b = Math.max(MW, this.b), this.a = Math.max(wW, this.a), this
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
      zb() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(WW) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CW.c;
        return (0, zR.WithinEpsilon)(this.r, WW.r, RW) && (0, zR.WithinEpsilon)(this.g, WW.g, RW) && (0, zR.WithinEpsilon)(this.b, WW.b, RW) && (0, zR.WithinEpsilon)(this.a, WW.a, RW)
      }
      EtW(WW, RW, MW, wW) {
        return this.r === WW && this.g === RW && this.b === MW && this.a === wW
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
        return (new tR).hyW(this)
      }
      hyW(WW) {
        return this.r = WW.r, this.g = WW.g, this.b = WW.b, this.a = WW.a, this
      }
      nzW(WW, RW, MW, wW) {
        return this.r = WW, this.g = RW, this.b = MW, this.a = wW, this
      }
      set(WW, RW, MW, wW) {
        return this.nzW(WW, RW, MW, wW)
      }
      YzW(WW) {
        return this.r = this.g = this.b = this.a = WW, this
      }
      toHexString() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = Math.round(255 * this.r),
          MW = Math.round(255 * this.g),
          wW = Math.round(255 * this.b);
        if (WW) return "#" + (0, zR.ToHex)(RW) + (0, zR.ToHex)(MW) + (0, zR.ToHex)(wW);
        const CW = Math.round(255 * this.a);
        return "#" + (0, zR.ToHex)(RW) + (0, zR.ToHex)(MW) + (0, zR.ToHex)(wW) + (0, zR.ToHex)(CW)
      }
      fromHexString(WW) {
        return "#" !== WW.substring(0, 1) || 9 !== WW.length && 7 !== WW.length || (this.r = parseInt(WW.substring(1, 3), 16) / 255, this.g = parseInt(WW.substring(3, 5), 16) / 255, this.b = parseInt(WW.substring(5, 7), 16) / 255, 9 === WW.length && (this.a = parseInt(WW.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = new tR;
        return this.toLinearSpaceToRef(RW, WW), RW
      }
      toLinearSpaceToRef(WW) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = yR(this.r), WW.g = yR(this.g), WW.b = yR(this.b)) : (WW.r = bR(this.r), WW.g = bR(this.g), WW.b = bR(this.b)), WW.a = this.a, this
      }
      toGammaSpace() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const RW = new tR;
        return this.toGammaSpaceToRef(RW, WW), RW
      }
      toGammaSpaceToRef(WW) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (WW.r = eW(this.r), WW.g = eW(this.g), WW.b = eW(this.b)) : (WW.r = NW(this.r), WW.g = NW(this.g), WW.b = NW(this.b)), WW.a = this.a, this
      }
      static FromHexString(WW) {
        return "#" !== WW.substring(0, 1) || 9 !== WW.length && 7 !== WW.length ? new tR(0, 0, 0, 0) : new tR(0, 0, 0, 1).fromHexString(WW)
      }
      static Lerp(WW, RW, MW) {
        return tR.LerpToRef(WW, RW, MW, new tR)
      }
      static LerpToRef(WW, RW, MW, wW) {
        return wW.r = WW.r + (RW.r - WW.r) * MW, wW.g = WW.g + (RW.g - WW.g) * MW, wW.b = WW.b + (RW.b - WW.b) * MW, wW.a = WW.a + (RW.a - WW.a) * MW, wW
      }
      static Hermite(WW, RW, MW, wW, CW) {
        const zR = CW * CW,
          AW = CW * zR,
          bR = 2 * AW - 3 * zR + 1,
          yR = -2 * AW + 3 * zR,
          NW = AW - 2 * zR + CW,
          eW = AW - zR,
          BW = WW.r * bR + MW.r * yR + RW.r * NW + wW.r * eW,
          TW = WW.g * bR + MW.g * yR + RW.g * NW + wW.g * eW,
          gR = WW.b * bR + MW.b * yR + RW.b * NW + wW.b * eW,
          iR = WW.a * bR + MW.a * yR + RW.a * NW + wW.a * eW;
        return new tR(BW, TW, gR, iR)
      }
      static Hermite1stDerivative(WW, RW, MW, wW, CW) {
        const zR = new tR;
        return this.Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR), zR
      }
      static Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR) {
        const AW = CW * CW;
        zR.r = 6 * (AW - CW) * WW.r + (3 * AW - 4 * CW + 1) * RW.r + 6 * (-AW + CW) * MW.r + (3 * AW - 2 * CW) * wW.r, zR.g = 6 * (AW - CW) * WW.g + (3 * AW - 4 * CW + 1) * RW.g + 6 * (-AW + CW) * MW.g + (3 * AW - 2 * CW) * wW.g, zR.b = 6 * (AW - CW) * WW.b + (3 * AW - 4 * CW + 1) * RW.b + 6 * (-AW + CW) * MW.b + (3 * AW - 2 * CW) * wW.b, zR.a = 6 * (AW - CW) * WW.a + (3 * AW - 4 * CW + 1) * RW.a + 6 * (-AW + CW) * MW.a + (3 * AW - 2 * CW) * wW.a
      }
      static FromColor3(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new tR(WW.r, WW.g, WW.b, RW)
      }
      static FromArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new tR(WW[RW], WW[RW + 1], WW[RW + 2], WW[RW + 3])
      }
      static FromArrayToRef(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        MW.r = WW[RW], MW.g = WW[RW + 1], MW.b = WW[RW + 2], MW.a = WW[RW + 3]
      }
      static FromInts(WW, RW, MW, wW) {
        return new tR(WW / 255, RW / 255, MW / 255, wW / 255)
      }
      static CheckColors4(WW, RW) {
        if (WW.length === 3 * RW) {
          const RW = [];
          for (let MW = 0; MW < WW.length; MW += 3) {
            const wW = MW / 3 * 4;
            RW[wW] = WW[MW], RW[wW + 1] = WW[MW + 1], RW[wW + 2] = WW[MW + 2], RW[wW + 3] = 1
          }
          return RW
        }
        return WW
      }
    }
    tR._V8PerformanceHack = new tR(.5, .5, .5, .5);
    class TW {}
    TW.Color3 = (0, wW.b)(3, BW.Black), TW.Color4 = (0, wW.b)(3, (() => new tR(0, 0, 0, 0)));
    let gR = !1;

    function iR() {
      gR || (gR = !0, Object.defineProperties(BW.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(tR.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, AW.e)("BABYLON.Color3", BW), (0, AW.e)("BABYLON.Color4", tR))
    }
  },
  35328: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      g: () => wW,
      k: () => CW
    });
    const wW = 1 / 2.2,
      CW = 2.2;
    Math.sqrt(5);
    let zR = .001
  },
  35353: (WW, RW, MW) => {
    function wW(WW) {
      return parseInt(WW.toString().replace(/\W/g, ""))
    }

    function CW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(WW - RW) <= MW
    }

    function zR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return WW < RW - wW || WW > MW + wW
    }

    function AW(WW, RW) {
      return WW === RW ? WW : Math.random() * (RW - WW) + WW
    }

    function bR(WW, RW, MW) {
      return WW + (RW - WW) * MW
    }

    function yR(WW, RW, MW) {
      let wW = YW(RW - WW, 360);
      return wW > 180 && (wW -= 360), WW + wW * tR(MW)
    }

    function NW(WW, RW, MW) {
      let wW;
      return wW = WW != RW ? tR((MW - WW) / (RW - WW)) : 0, wW
    }

    function eW(WW, RW, MW, wW, CW) {
      const zR = CW * CW,
        AW = CW * zR;
      return WW * (2 * AW - 3 * zR + 1) + MW * (-2 * AW + 3 * zR) + RW * (AW - 2 * zR + CW) + wW * (AW - zR)
    }

    function BW(WW, RW, MW, wW, CW) {
      const zR = CW * CW;
      return 6 * (zR - CW) * WW + (3 * zR - 4 * CW + 1) * RW + 6 * (-zR + CW) * MW + (3 * zR - 2 * CW) * wW
    }

    function tR(WW) {
      let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(MW, Math.max(RW, WW))
    }

    function TW(WW) {
      return WW -= 2 * Math.PI * Math.floor((WW + Math.PI) / (2 * Math.PI))
    }

    function gR(WW) {
      const RW = WW.toString(16);
      return WW <= 15 ? ("0" + RW).toUpperCase() : RW.toUpperCase()
    }

    function iR(WW) {
      if (Math.log2) return Math.floor(Math.log2(WW));
      if (WW < 0) return NaN;
      if (0 === WW) return -1 / 0;
      let RW = 0;
      if (WW < 1) {
        for (; WW < 1;) RW++, WW *= 2;
        RW = -RW
      } else if (WW > 1)
        for (; WW > 1;) RW++, WW = Math.floor(WW / 2);
      return RW
    }

    function YW(WW, RW) {
      return WW - Math.floor(WW / RW) * RW
    }

    function JW(WW, RW, MW) {
      return (WW - RW) / (MW - RW)
    }

    function PW(WW, RW, MW) {
      return WW * (MW - RW) + RW
    }

    function IW(WW, RW) {
      let MW = YW(RW - WW, 360);
      return MW > 180 && (MW -= 360), MW
    }

    function oW(WW, RW) {
      const MW = YW(WW, 2 * RW);
      return RW - Math.abs(MW - RW)
    }

    function lW(WW, RW, MW) {
      let wW = tR(MW);
      return wW = -2 * wW * wW * wW + 3 * wW * wW, RW * wW + WW * (1 - wW)
    }

    function FW(WW, RW, MW) {
      let wW;
      return wW = Math.abs(RW - WW) <= MW ? RW : WW + Math.sign(RW - WW) * MW, wW
    }

    function fW(WW, RW, MW) {
      const wW = IW(WW, RW);
      let CW;
      return CW = -MW < wW && wW < MW ? RW : FW(WW, RW = WW + wW, MW), CW
    }

    function QW(WW, RW, MW) {
      return (WW - RW) / (MW - RW)
    }

    function rR(WW, RW, MW) {
      return (MW - RW) * WW + RW
    }

    function cR(WW, RW) {
      const MW = WW % RW;
      return 0 === MW ? RW : cR(RW, MW)
    }
    MW.r(RW), MW.d(RW, {
      Clamp: () => tR,
      DeltaAngle: () => IW,
      Denormalize: () => PW,
      ExtractAsInt: () => wW,
      Hermite: () => eW,
      Hermite1stDerivative: () => BW,
      HighestCommonFactor: () => cR,
      ILog2: () => iR,
      InverseLerp: () => NW,
      Lerp: () => bR,
      LerpAngle: () => yR,
      MoveTowards: () => FW,
      MoveTowardsAngle: () => fW,
      Normalize: () => JW,
      NormalizeRadians: () => TW,
      OutsideRange: () => zR,
      PercentToRange: () => rR,
      PingPong: () => oW,
      RandomRange: () => AW,
      RangeToPercent: () => QW,
      Repeat: () => YW,
      SmoothStep: () => lW,
      ToHex: () => gR,
      WithinEpsilon: () => CW
    })
  },
  35330: (WW, RW, MW) => {
    function wW(WW, RW) {
      const MW = [];
      for (let wW = 0; wW < WW; ++wW) MW.push(RW());
      return MW
    }

    function CW(WW, RW) {
      return wW(WW, RW)
    }
    MW.d(RW, {
      b: () => wW,
      d: () => CW,
      g: () => AW
    });
    const zR = ["push", "splice", "pop", "shift", "unshift"];

    function AW(WW, RW) {
      const MW = zR.map((MW => function(WW, RW, MW) {
        const wW = WW[RW];
        if ("function" !== typeof wW) return null;
        const CW = function() {
          const wW = WW.length,
            zR = CW.previous.apply(WW, arguments);
          return MW(RW, wW), zR
        };
        return wW.next = CW, CW.previous = wW, WW[RW] = CW, () => {
          const MW = CW.previous;
          if (!MW) return;
          const wW = CW.next;
          wW ? (MW.next = wW, wW.previous = MW) : (MW.next = void 0, WW[RW] = MW), CW.next = void 0, CW.previous = void 0
        }
      }(WW, MW, RW)));
      return () => {
        for (const WW of MW) WW?.()
      }
    }
  },
  35361: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      e: () => CW
    });
    const wW = {};

    function CW(WW, RW) {
      wW[WW] = RW
    }

    function zR(WW) {
      return wW[WW]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);