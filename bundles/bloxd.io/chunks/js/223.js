export const id = 223;
export const ids = [223];
export const modules = {
  36588: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => uY,
      d: () => sY,
      f: () => QY,
      i: () => iY
    });
    var FY = DY(36539),
      AY = DY(36533),
      IY = DY(36559),
      RY = DY(36569);

    function OY(YY) {
      return Math.pow(YY, AY.g)
    }

    function gY(YY) {
      return YY <= .04045 ? .0773993808 * YY : Math.pow(.947867299 * (YY + .055), 2.4)
    }

    function aY(YY) {
      return Math.pow(YY, AY.e)
    }

    function vY(YY) {
      return YY <= .0031308 ? 12.92 * YY : 1.055 * Math.pow(YY, .41666) - .055
    }
    class uY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = YY, this.g = rY, this.b = DY
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let YY = 255 * this.r | 0;
        return YY = 397 * YY ^ 255 * this.g, YY = 397 * YY ^ 255 * this.b, YY
      }
      toArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YY[rY] = this.r, YY[rY + 1] = this.g, YY[rY + 2] = this.b, this
      }
      grY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uY.FromArrayToRef(YY, rY, this), this
      }
      toColor4() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new sY(this.r, this.g, this.b, YY)
      }
      VDY() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(YY) {
        return new uY(this.r * YY.r, this.g * YY.g, this.b * YY.b)
      }
      multiplyToRef(YY, rY) {
        return rY.r = this.r * YY.r, rY.g = this.g * YY.g, rY.b = this.b * YY.b, rY
      }
      multiplyInPlace(YY) {
        return this.r *= YY.r, this.g *= YY.g, this.b *= YY.b, this
      }
      multiplyByFloats(YY, rY, DY) {
        return new uY(this.r * YY, this.g * rY, this.b * DY)
      }
      divide(YY) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(YY, rY) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(YY) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(YY) {
        return this.minimizeInPlaceFromFloats(YY.r, YY.g, YY.b)
      }
      maximizeInPlace(YY) {
        return this.maximizeInPlaceFromFloats(YY.r, YY.g, YY.b)
      }
      minimizeInPlaceFromFloats(YY, rY, DY) {
        return this.r = Math.min(YY, this.r), this.g = Math.min(rY, this.g), this.b = Math.min(DY, this.b), this
      }
      maximizeInPlaceFromFloats(YY, rY, DY) {
        return this.r = Math.max(YY, this.r), this.g = Math.max(rY, this.g), this.b = Math.max(DY, this.b), this
      }
      floorToRef(YY) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(YY) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(YY) {
        return YY && this.r === YY.r && this.g === YY.g && this.b === YY.b
      }
      equalsFloats(YY, rY, DY) {
        return this.kIY(YY, rY, DY)
      }
      kIY(YY, rY, DY) {
        return this.r === YY && this.g === rY && this.b === DY
      }
      equalsWithEpsilon(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AY.c;
        return (0, IY.WithinEpsilon)(this.r, YY.r, rY) && (0, IY.WithinEpsilon)(this.g, YY.g, rY) && (0, IY.WithinEpsilon)(this.b, YY.b, rY)
      }
      GA() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(YY) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(YY) {
        return new uY(this.r * YY, this.g * YY, this.b * YY)
      }
      scaleInPlace(YY) {
        return this.r *= YY, this.g *= YY, this.b *= YY, this
      }
      scaleToRef(YY, rY) {
        return rY.r = this.r * YY, rY.g = this.g * YY, rY.b = this.b * YY, rY
      }
      scaleAndAddToRef(YY, rY) {
        return rY.r += this.r * YY, rY.g += this.g * YY, rY.b += this.b * YY, rY
      }
      clampToRef() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        return DY.r = (0, IY.Clamp)(this.r, YY, rY), DY.g = (0, IY.Clamp)(this.g, YY, rY), DY.b = (0, IY.Clamp)(this.b, YY, rY), DY
      }
      add(YY) {
        return new uY(this.r + YY.r, this.g + YY.g, this.b + YY.b)
      }
      addInPlace(YY) {
        return this.r += YY.r, this.g += YY.g, this.b += YY.b, this
      }
      addInPlaceFromFloats(YY, rY, DY) {
        return this.r += YY, this.g += rY, this.b += DY, this
      }
      addToRef(YY, rY) {
        return rY.r = this.r + YY.r, rY.g = this.g + YY.g, rY.b = this.b + YY.b, rY
      }
      subtract(YY) {
        return new uY(this.r - YY.r, this.g - YY.g, this.b - YY.b)
      }
      subtractToRef(YY, rY) {
        return rY.r = this.r - YY.r, rY.g = this.g - YY.g, rY.b = this.b - YY.b, rY
      }
      dDY(YY) {
        return this.r -= YY.r, this.g -= YY.g, this.b -= YY.b, this
      }
      subtractFromFloats(YY, rY, DY) {
        return new uY(this.r - YY, this.g - rY, this.b - DY)
      }
      subtractFromFloatsToRef(YY, rY, DY, FY) {
        return FY.r = this.r - YY, FY.g = this.g - rY, FY.b = this.b - DY, FY
      }
      clone() {
        return new uY(this.r, this.g, this.b)
      }
      brY(YY) {
        return this.r = YY.r, this.g = YY.g, this.b = YY.b, this
      }
      p_(YY, rY, DY) {
        return this.r = YY, this.g = rY, this.b = DY, this
      }
      set(YY, rY, DY) {
        return this.p_(YY, rY, DY)
      }
      o3(YY) {
        return this.r = this.g = this.b = YY, this
      }
      toHexString() {
        const YY = Math.round(255 * this.r),
          rY = Math.round(255 * this.g),
          DY = Math.round(255 * this.b);
        return "#" + (0, IY.ToHex)(YY) + (0, IY.ToHex)(rY) + (0, IY.ToHex)(DY)
      }
      fromHexString(YY) {
        return "#" !== YY.substring(0, 1) || 7 !== YY.length || (this.r = parseInt(YY.substring(1, 3), 16) / 255, this.g = parseInt(YY.substring(3, 5), 16) / 255, this.b = parseInt(YY.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new uY)
      }
      toHSVToRef(YY) {
        const rY = this.r,
          DY = this.g,
          FY = this.b,
          AY = Math.max(rY, DY, FY),
          IY = Math.min(rY, DY, FY);
        let RY = 0,
          OY = 0;
        const gY = AY,
          aY = AY - IY;
        return 0 !== AY && (OY = aY / AY), AY != IY && (AY == rY ? (RY = (DY - FY) / aY, DY < FY && (RY += 6)) : AY == DY ? RY = (FY - rY) / aY + 2 : AY == FY && (RY = (rY - DY) / aY + 4), RY *= 60), YY.r = RY, YY.g = OY, YY.b = gY, YY
      }
      toLinearSpace() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = new uY;
        return this.toLinearSpaceToRef(rY, YY), rY
      }
      toLinearSpaceToRef(YY) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (YY.r = gY(this.r), YY.g = gY(this.g), YY.b = gY(this.b)) : (YY.r = OY(this.r), YY.g = OY(this.g), YY.b = OY(this.b)), this
      }
      toGammaSpace() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = new uY;
        return this.toGammaSpaceToRef(rY, YY), rY
      }
      toGammaSpaceToRef(YY) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (YY.r = vY(this.r), YY.g = vY(this.g), YY.b = vY(this.b)) : (YY.r = aY(this.r), YY.g = aY(this.g), YY.b = aY(this.b)), this
      }
      static HSVtoRGBToRef(YY, rY, DY, FY) {
        const AY = DY * rY,
          IY = YY / 60,
          RY = AY * (1 - Math.abs(IY % 2 - 1));
        let OY = 0,
          gY = 0,
          aY = 0;
        IY >= 0 && IY <= 1 ? (OY = AY, gY = RY) : IY >= 1 && IY <= 2 ? (OY = RY, gY = AY) : IY >= 2 && IY <= 3 ? (gY = AY, aY = RY) : IY >= 3 && IY <= 4 ? (gY = RY, aY = AY) : IY >= 4 && IY <= 5 ? (OY = RY, aY = AY) : IY >= 5 && IY <= 6 && (OY = AY, aY = RY);
        const vY = DY - AY;
        return FY.r = OY + vY, FY.g = gY + vY, FY.b = aY + vY, FY
      }
      static FromHSV(YY, rY, DY) {
        const FY = new uY(0, 0, 0);
        return uY.HSVtoRGBToRef(YY, rY, DY, FY), FY
      }
      static FromHexString(YY) {
        return new uY(0, 0, 0).fromHexString(YY)
      }
      static FromArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new uY(YY[rY], YY[rY + 1], YY[rY + 2])
      }
      static FromArrayToRef(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        DY.r = YY[rY], DY.g = YY[rY + 1], DY.b = YY[rY + 2]
      }
      static FromInts(YY, rY, DY) {
        return new uY(YY / 255, rY / 255, DY / 255)
      }
      static Lerp(YY, rY, DY) {
        const FY = new uY(0, 0, 0);
        return uY.LerpToRef(YY, rY, DY, FY), FY
      }
      static LerpToRef(YY, rY, DY, FY) {
        FY.r = YY.r + (rY.r - YY.r) * DY, FY.g = YY.g + (rY.g - YY.g) * DY, FY.b = YY.b + (rY.b - YY.b) * DY
      }
      static Hermite(YY, rY, DY, FY, AY) {
        const IY = AY * AY,
          RY = AY * IY,
          OY = 2 * RY - 3 * IY + 1,
          gY = -2 * RY + 3 * IY,
          aY = RY - 2 * IY + AY,
          vY = RY - IY,
          sY = YY.r * OY + DY.r * gY + rY.r * aY + FY.r * vY,
          iY = YY.g * OY + DY.g * gY + rY.g * aY + FY.g * vY,
          yY = YY.b * OY + DY.b * gY + rY.b * aY + FY.b * vY;
        return new uY(sY, iY, yY)
      }
      static Hermite1stDerivative(YY, rY, DY, FY, AY) {
        const IY = uY.Black();
        return this.Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY), IY
      }
      static Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY) {
        const RY = AY * AY;
        IY.r = 6 * (RY - AY) * YY.r + (3 * RY - 4 * AY + 1) * rY.r + 6 * (-RY + AY) * DY.r + (3 * RY - 2 * AY) * FY.r, IY.g = 6 * (RY - AY) * YY.g + (3 * RY - 4 * AY + 1) * rY.g + 6 * (-RY + AY) * DY.g + (3 * RY - 2 * AY) * FY.g, IY.b = 6 * (RY - AY) * YY.b + (3 * RY - 4 * AY + 1) * rY.b + 6 * (-RY + AY) * DY.b + (3 * RY - 2 * AY) * FY.b
      }
      static Red() {
        return new uY(1, 0, 0)
      }
      static Green() {
        return new uY(0, 1, 0)
      }
      static Blue() {
        return new uY(0, 0, 1)
      }
      static Black() {
        return new uY(0, 0, 0)
      }
      static get BlackReadOnly() {
        return uY._BlackReadOnly
      }
      static White() {
        return new uY(1, 1, 1)
      }
      static Purple() {
        return new uY(.5, 0, .5)
      }
      static Magenta() {
        return new uY(1, 0, 1)
      }
      static Yellow() {
        return new uY(1, 1, 0)
      }
      static Gray() {
        return new uY(.5, .5, .5)
      }
      static Teal() {
        return new uY(0, 1, 1)
      }
      static Random() {
        return new uY(Math.random(), Math.random(), Math.random())
      }
    }
    uY._V8PerformanceHack = new uY(.5, .5, .5), uY._BlackReadOnly = uY.Black();
    class sY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = YY, this.g = rY, this.b = DY, this.a = FY
      }
      VDY() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YY[rY] = this.r, YY[rY + 1] = this.g, YY[rY + 2] = this.b, YY[rY + 3] = this.a, this
      }
      grY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = YY[rY], this.g = YY[rY + 1], this.b = YY[rY + 2], this.a = YY[rY + 3], this
      }
      equals(YY) {
        return YY && this.r === YY.r && this.g === YY.g && this.b === YY.b && this.a === YY.a
      }
      add(YY) {
        return new sY(this.r + YY.r, this.g + YY.g, this.b + YY.b, this.a + YY.a)
      }
      addToRef(YY, rY) {
        return rY.r = this.r + YY.r, rY.g = this.g + YY.g, rY.b = this.b + YY.b, rY.a = this.a + YY.a, rY
      }
      addInPlace(YY) {
        return this.r += YY.r, this.g += YY.g, this.b += YY.b, this.a += YY.a, this
      }
      addInPlaceFromFloats(YY, rY, DY, FY) {
        return this.r += YY, this.g += rY, this.b += DY, this.a += FY, this
      }
      subtract(YY) {
        return new sY(this.r - YY.r, this.g - YY.g, this.b - YY.b, this.a - YY.a)
      }
      subtractToRef(YY, rY) {
        return rY.r = this.r - YY.r, rY.g = this.g - YY.g, rY.b = this.b - YY.b, rY.a = this.a - YY.a, rY
      }
      dDY(YY) {
        return this.r -= YY.r, this.g -= YY.g, this.b -= YY.b, this.a -= YY.a, this
      }
      subtractFromFloats(YY, rY, DY, FY) {
        return new sY(this.r - YY, this.g - rY, this.b - DY, this.a - FY)
      }
      subtractFromFloatsToRef(YY, rY, DY, FY, AY) {
        return AY.r = this.r - YY, AY.g = this.g - rY, AY.b = this.b - DY, AY.a = this.a - FY, AY
      }
      scale(YY) {
        return new sY(this.r * YY, this.g * YY, this.b * YY, this.a * YY)
      }
      scaleInPlace(YY) {
        return this.r *= YY, this.g *= YY, this.b *= YY, this.a *= YY, this
      }
      scaleToRef(YY, rY) {
        return rY.r = this.r * YY, rY.g = this.g * YY, rY.b = this.b * YY, rY.a = this.a * YY, rY
      }
      scaleAndAddToRef(YY, rY) {
        return rY.r += this.r * YY, rY.g += this.g * YY, rY.b += this.b * YY, rY.a += this.a * YY, rY
      }
      clampToRef() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        return DY.r = (0, IY.Clamp)(this.r, YY, rY), DY.g = (0, IY.Clamp)(this.g, YY, rY), DY.b = (0, IY.Clamp)(this.b, YY, rY), DY.a = (0, IY.Clamp)(this.a, YY, rY), DY
      }
      multiply(YY) {
        return new sY(this.r * YY.r, this.g * YY.g, this.b * YY.b, this.a * YY.a)
      }
      multiplyToRef(YY, rY) {
        return rY.r = this.r * YY.r, rY.g = this.g * YY.g, rY.b = this.b * YY.b, rY.a = this.a * YY.a, rY
      }
      multiplyInPlace(YY) {
        return this.r *= YY.r, this.g *= YY.g, this.b *= YY.b, this.a *= YY.a, this
      }
      multiplyByFloats(YY, rY, DY, FY) {
        return new sY(this.r * YY, this.g * rY, this.b * DY, this.a * FY)
      }
      divide(YY) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(YY, rY) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(YY) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(YY) {
        return this.r = Math.min(this.r, YY.r), this.g = Math.min(this.g, YY.g), this.b = Math.min(this.b, YY.b), this.a = Math.min(this.a, YY.a), this
      }
      maximizeInPlace(YY) {
        return this.r = Math.max(this.r, YY.r), this.g = Math.max(this.g, YY.g), this.b = Math.max(this.b, YY.b), this.a = Math.max(this.a, YY.a), this
      }
      minimizeInPlaceFromFloats(YY, rY, DY, FY) {
        return this.r = Math.min(YY, this.r), this.g = Math.min(rY, this.g), this.b = Math.min(DY, this.b), this.a = Math.min(FY, this.a), this
      }
      maximizeInPlaceFromFloats(YY, rY, DY, FY) {
        return this.r = Math.max(YY, this.r), this.g = Math.max(rY, this.g), this.b = Math.max(DY, this.b), this.a = Math.max(FY, this.a), this
      }
      floorToRef(YY) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(YY) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      GA() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(YY) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AY.c;
        return (0, IY.WithinEpsilon)(this.r, YY.r, rY) && (0, IY.WithinEpsilon)(this.g, YY.g, rY) && (0, IY.WithinEpsilon)(this.b, YY.b, rY) && (0, IY.WithinEpsilon)(this.a, YY.a, rY)
      }
      kIY(YY, rY, DY, FY) {
        return this.r === YY && this.g === rY && this.b === DY && this.a === FY
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let YY = 255 * this.r | 0;
        return YY = 397 * YY ^ 255 * this.g, YY = 397 * YY ^ 255 * this.b, YY = 397 * YY ^ 255 * this.a, YY
      }
      clone() {
        return (new sY).brY(this)
      }
      brY(YY) {
        return this.r = YY.r, this.g = YY.g, this.b = YY.b, this.a = YY.a, this
      }
      p_(YY, rY, DY, FY) {
        return this.r = YY, this.g = rY, this.b = DY, this.a = FY, this
      }
      set(YY, rY, DY, FY) {
        return this.p_(YY, rY, DY, FY)
      }
      o3(YY) {
        return this.r = this.g = this.b = this.a = YY, this
      }
      toHexString() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = Math.round(255 * this.r),
          DY = Math.round(255 * this.g),
          FY = Math.round(255 * this.b);
        if (YY) return "#" + (0, IY.ToHex)(rY) + (0, IY.ToHex)(DY) + (0, IY.ToHex)(FY);
        const AY = Math.round(255 * this.a);
        return "#" + (0, IY.ToHex)(rY) + (0, IY.ToHex)(DY) + (0, IY.ToHex)(FY) + (0, IY.ToHex)(AY)
      }
      fromHexString(YY) {
        return "#" !== YY.substring(0, 1) || 9 !== YY.length && 7 !== YY.length || (this.r = parseInt(YY.substring(1, 3), 16) / 255, this.g = parseInt(YY.substring(3, 5), 16) / 255, this.b = parseInt(YY.substring(5, 7), 16) / 255, 9 === YY.length && (this.a = parseInt(YY.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = new sY;
        return this.toLinearSpaceToRef(rY, YY), rY
      }
      toLinearSpaceToRef(YY) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (YY.r = gY(this.r), YY.g = gY(this.g), YY.b = gY(this.b)) : (YY.r = OY(this.r), YY.g = OY(this.g), YY.b = OY(this.b)), YY.a = this.a, this
      }
      toGammaSpace() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rY = new sY;
        return this.toGammaSpaceToRef(rY, YY), rY
      }
      toGammaSpaceToRef(YY) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (YY.r = vY(this.r), YY.g = vY(this.g), YY.b = vY(this.b)) : (YY.r = aY(this.r), YY.g = aY(this.g), YY.b = aY(this.b)), YY.a = this.a, this
      }
      static FromHexString(YY) {
        return "#" !== YY.substring(0, 1) || 9 !== YY.length && 7 !== YY.length ? new sY(0, 0, 0, 0) : new sY(0, 0, 0, 1).fromHexString(YY)
      }
      static Lerp(YY, rY, DY) {
        return sY.LerpToRef(YY, rY, DY, new sY)
      }
      static LerpToRef(YY, rY, DY, FY) {
        return FY.r = YY.r + (rY.r - YY.r) * DY, FY.g = YY.g + (rY.g - YY.g) * DY, FY.b = YY.b + (rY.b - YY.b) * DY, FY.a = YY.a + (rY.a - YY.a) * DY, FY
      }
      static Hermite(YY, rY, DY, FY, AY) {
        const IY = AY * AY,
          RY = AY * IY,
          OY = 2 * RY - 3 * IY + 1,
          gY = -2 * RY + 3 * IY,
          aY = RY - 2 * IY + AY,
          vY = RY - IY,
          uY = YY.r * OY + DY.r * gY + rY.r * aY + FY.r * vY,
          iY = YY.g * OY + DY.g * gY + rY.g * aY + FY.g * vY,
          yY = YY.b * OY + DY.b * gY + rY.b * aY + FY.b * vY,
          QY = YY.a * OY + DY.a * gY + rY.a * aY + FY.a * vY;
        return new sY(uY, iY, yY, QY)
      }
      static Hermite1stDerivative(YY, rY, DY, FY, AY) {
        const IY = new sY;
        return this.Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY), IY
      }
      static Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY) {
        const RY = AY * AY;
        IY.r = 6 * (RY - AY) * YY.r + (3 * RY - 4 * AY + 1) * rY.r + 6 * (-RY + AY) * DY.r + (3 * RY - 2 * AY) * FY.r, IY.g = 6 * (RY - AY) * YY.g + (3 * RY - 4 * AY + 1) * rY.g + 6 * (-RY + AY) * DY.g + (3 * RY - 2 * AY) * FY.g, IY.b = 6 * (RY - AY) * YY.b + (3 * RY - 4 * AY + 1) * rY.b + 6 * (-RY + AY) * DY.b + (3 * RY - 2 * AY) * FY.b, IY.a = 6 * (RY - AY) * YY.a + (3 * RY - 4 * AY + 1) * rY.a + 6 * (-RY + AY) * DY.a + (3 * RY - 2 * AY) * FY.a
      }
      static FromColor3(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new sY(YY.r, YY.g, YY.b, rY)
      }
      static FromArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new sY(YY[rY], YY[rY + 1], YY[rY + 2], YY[rY + 3])
      }
      static FromArrayToRef(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        DY.r = YY[rY], DY.g = YY[rY + 1], DY.b = YY[rY + 2], DY.a = YY[rY + 3]
      }
      static FromInts(YY, rY, DY, FY) {
        return new sY(YY / 255, rY / 255, DY / 255, FY / 255)
      }
      static CheckColors4(YY, rY) {
        if (YY.length === 3 * rY) {
          const rY = [];
          for (let DY = 0; DY < YY.length; DY += 3) {
            const FY = DY / 3 * 4;
            rY[FY] = YY[DY], rY[FY + 1] = YY[DY + 1], rY[FY + 2] = YY[DY + 2], rY[FY + 3] = 1
          }
          return rY
        }
        return YY
      }
    }
    sY._V8PerformanceHack = new sY(.5, .5, .5, .5);
    class iY {}
    iY.Color3 = (0, FY.c)(3, uY.Black), iY.Color4 = (0, FY.c)(3, (() => new sY(0, 0, 0, 0)));
    let yY = !1;

    function QY() {
      yY || (yY = !0, Object.defineProperties(uY.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(sY.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, RY.i)("BABYLON.Color3", uY), (0, RY.i)("BABYLON.Color4", sY))
    }
  },
  36533: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY,
      e: () => FY,
      g: () => AY
    });
    const FY = 1 / 2.2,
      AY = 2.2;
    Math.sqrt(5);
    let IY = .001
  },
  36559: (YY, rY, DY) => {
    function FY(YY) {
      return parseInt(YY.toString().replace(/\W/g, ""))
    }

    function AY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(YY - rY) <= DY
    }

    function IY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return YY < rY - FY || YY > DY + FY
    }

    function RY(YY, rY) {
      return YY === rY ? YY : Math.random() * (rY - YY) + YY
    }

    function OY(YY, rY, DY) {
      return YY + (rY - YY) * DY
    }

    function gY(YY, rY, DY) {
      let FY = oY(rY - YY, 360);
      return FY > 180 && (FY -= 360), YY + FY * sY(DY)
    }

    function aY(YY, rY, DY) {
      let FY;
      return FY = YY != rY ? sY((DY - YY) / (rY - YY)) : 0, FY
    }

    function vY(YY, rY, DY, FY, AY) {
      const IY = AY * AY,
        RY = AY * IY;
      return YY * (2 * RY - 3 * IY + 1) + DY * (-2 * RY + 3 * IY) + rY * (RY - 2 * IY + AY) + FY * (RY - IY)
    }

    function uY(YY, rY, DY, FY, AY) {
      const IY = AY * AY;
      return 6 * (IY - AY) * YY + (3 * IY - 4 * AY + 1) * rY + 6 * (-IY + AY) * DY + (3 * IY - 2 * AY) * FY
    }

    function sY(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(DY, Math.max(rY, YY))
    }

    function iY(YY) {
      return YY -= 2 * Math.PI * Math.floor((YY + Math.PI) / (2 * Math.PI))
    }

    function yY(YY) {
      const rY = YY.toString(16);
      return YY <= 15 ? ("0" + rY).toUpperCase() : rY.toUpperCase()
    }

    function QY(YY) {
      if (Math.log2) return Math.floor(Math.log2(YY));
      if (YY < 0) return NaN;
      if (0 === YY) return -1 / 0;
      let rY = 0;
      if (YY < 1) {
        for (; YY < 1;) rY++, YY *= 2;
        rY = -rY
      } else if (YY > 1)
        for (; YY > 1;) rY++, YY = Math.floor(YY / 2);
      return rY
    }

    function oY(YY, rY) {
      return YY - Math.floor(YY / rY) * rY
    }

    function WY(YY, rY, DY) {
      return (YY - rY) / (DY - rY)
    }

    function EY(YY, rY, DY) {
      return YY * (DY - rY) + rY
    }

    function mY(YY, rY) {
      let DY = oY(rY - YY, 360);
      return DY > 180 && (DY -= 360), DY
    }

    function VY(YY, rY) {
      const DY = oY(YY, 2 * rY);
      return rY - Math.abs(DY - rY)
    }

    function SY(YY, rY, DY) {
      let FY = sY(DY);
      return FY = -2 * FY * FY * FY + 3 * FY * FY, rY * FY + YY * (1 - FY)
    }

    function lY(YY, rY, DY) {
      let FY;
      return FY = Math.abs(rY - YY) <= DY ? rY : YY + Math.sign(rY - YY) * DY, FY
    }

    function TY(YY, rY, DY) {
      const FY = mY(YY, rY);
      let AY;
      return AY = -DY < FY && FY < DY ? rY : lY(YY, rY = YY + FY, DY), AY
    }

    function eY(YY, rY, DY) {
      return (YY - rY) / (DY - rY)
    }

    function NY(YY, rY, DY) {
      return (DY - rY) * YY + rY
    }

    function BY(YY, rY) {
      const DY = YY % rY;
      return 0 === DY ? rY : BY(rY, DY)
    }
    DY.r(rY), DY.d(rY, {
      Clamp: () => sY,
      DeltaAngle: () => mY,
      Denormalize: () => EY,
      ExtractAsInt: () => FY,
      Hermite: () => vY,
      Hermite1stDerivative: () => uY,
      HighestCommonFactor: () => BY,
      ILog2: () => QY,
      InverseLerp: () => aY,
      Lerp: () => OY,
      LerpAngle: () => gY,
      MoveTowards: () => lY,
      MoveTowardsAngle: () => TY,
      Normalize: () => WY,
      NormalizeRadians: () => iY,
      OutsideRange: () => IY,
      PercentToRange: () => NY,
      PingPong: () => VY,
      RandomRange: () => RY,
      RangeToPercent: () => eY,
      Repeat: () => oY,
      SmoothStep: () => SY,
      ToHex: () => yY,
      WithinEpsilon: () => AY
    })
  },
  36539: (YY, rY, DY) => {
    function FY(YY, rY) {
      const DY = [];
      for (let FY = 0; FY < YY; ++FY) DY.push(rY());
      return DY
    }

    function AY(YY, rY) {
      return FY(YY, rY)
    }
    DY.d(rY, {
      c: () => FY,
      g: () => AY,
      j: () => RY
    });
    const IY = ["push", "splice", "pop", "shift", "unshift"];

    function RY(YY, rY) {
      const DY = IY.map((DY => function(YY, rY, DY) {
        const FY = YY[rY];
        if ("function" !== typeof FY) return null;
        const AY = function() {
          const FY = YY.length,
            IY = AY.previous.apply(YY, arguments);
          return DY(rY, FY), IY
        };
        return FY.next = AY, AY.previous = FY, YY[rY] = AY, () => {
          const DY = AY.previous;
          if (!DY) return;
          const FY = AY.next;
          FY ? (DY.next = FY, FY.previous = DY) : (DY.next = void 0, YY[rY] = DY), AY.next = void 0, AY.previous = void 0
        }
      }(YY, DY, rY)));
      return () => {
        for (const YY of DY) YY?.()
      }
    }
  },
  36569: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      i: () => AY
    });
    const FY = {};

    function AY(YY, rY) {
      FY[YY] = rY
    }

    function IY(YY) {
      return FY[YY]
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);