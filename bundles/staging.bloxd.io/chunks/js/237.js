export const id = 237;
export const ids = [237];
export const modules = {
  37621: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => pG,
      d: () => fG,
      h: () => hG,
      l: () => QG
    });
    var wG = ZG(37448),
      SG = ZG(37443),
      LG = ZG(37471),
      yG = ZG(37484);

    function kG(GG) {
      return Math.pow(GG, SG.k)
    }

    function UG(GG) {
      return GG <= .04045 ? .0773993808 * GG : Math.pow(.947867299 * (GG + .055), 2.4)
    }

    function YG(GG) {
      return Math.pow(GG, SG.g)
    }

    function VG(GG) {
      return GG <= .0031308 ? 12.92 * GG : 1.055 * Math.pow(GG, .41666) - .055
    }
    class pG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = GG, this.g = bG, this.b = ZG
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let GG = 255 * this.r | 0;
        return GG = 397 * GG ^ 255 * this.g, GG = 397 * GG ^ 255 * this.b, GG
      }
      toArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GG[bG] = this.r, GG[bG + 1] = this.g, GG[bG + 2] = this.b, this
      }
      hZG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pG.FromArrayToRef(GG, bG, this), this
      }
      toColor4() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new fG(this.r, this.g, this.b, GG)
      }
      mwG() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(GG) {
        return new pG(this.r * GG.r, this.g * GG.g, this.b * GG.b)
      }
      multiplyToRef(GG, bG) {
        return bG.r = this.r * GG.r, bG.g = this.g * GG.g, bG.b = this.b * GG.b, bG
      }
      multiplyInPlace(GG) {
        return this.r *= GG.r, this.g *= GG.g, this.b *= GG.b, this
      }
      multiplyByFloats(GG, bG, ZG) {
        return new pG(this.r * GG, this.g * bG, this.b * ZG)
      }
      divide(GG) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(GG, bG) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(GG) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(GG) {
        return this.minimizeInPlaceFromFloats(GG.r, GG.g, GG.b)
      }
      maximizeInPlace(GG) {
        return this.maximizeInPlaceFromFloats(GG.r, GG.g, GG.b)
      }
      minimizeInPlaceFromFloats(GG, bG, ZG) {
        return this.r = Math.min(GG, this.r), this.g = Math.min(bG, this.g), this.b = Math.min(ZG, this.b), this
      }
      maximizeInPlaceFromFloats(GG, bG, ZG) {
        return this.r = Math.max(GG, this.r), this.g = Math.max(bG, this.g), this.b = Math.max(ZG, this.b), this
      }
      floorToRef(GG) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(GG) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(GG) {
        return GG && this.r === GG.r && this.g === GG.g && this.b === GG.b
      }
      equalsFloats(GG, bG, ZG) {
        return this.ZkG(GG, bG, ZG)
      }
      ZkG(GG, bG, ZG) {
        return this.r === GG && this.g === bG && this.b === ZG
      }
      equalsWithEpsilon(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG.d;
        return (0, LG.WithinEpsilon)(this.r, GG.r, bG) && (0, LG.WithinEpsilon)(this.g, GG.g, bG) && (0, LG.WithinEpsilon)(this.b, GG.b, bG)
      }
      By() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(GG) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(GG) {
        return new pG(this.r * GG, this.g * GG, this.b * GG)
      }
      scaleInPlace(GG) {
        return this.r *= GG, this.g *= GG, this.b *= GG, this
      }
      scaleToRef(GG, bG) {
        return bG.r = this.r * GG, bG.g = this.g * GG, bG.b = this.b * GG, bG
      }
      scaleAndAddToRef(GG, bG) {
        return bG.r += this.r * GG, bG.g += this.g * GG, bG.b += this.b * GG, bG
      }
      clampToRef() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        return ZG.r = (0, LG.Clamp)(this.r, GG, bG), ZG.g = (0, LG.Clamp)(this.g, GG, bG), ZG.b = (0, LG.Clamp)(this.b, GG, bG), ZG
      }
      add(GG) {
        return new pG(this.r + GG.r, this.g + GG.g, this.b + GG.b)
      }
      addInPlace(GG) {
        return this.r += GG.r, this.g += GG.g, this.b += GG.b, this
      }
      addInPlaceFromFloats(GG, bG, ZG) {
        return this.r += GG, this.g += bG, this.b += ZG, this
      }
      addToRef(GG, bG) {
        return bG.r = this.r + GG.r, bG.g = this.g + GG.g, bG.b = this.b + GG.b, bG
      }
      subtract(GG) {
        return new pG(this.r - GG.r, this.g - GG.g, this.b - GG.b)
      }
      subtractToRef(GG, bG) {
        return bG.r = this.r - GG.r, bG.g = this.g - GG.g, bG.b = this.b - GG.b, bG
      }
      twG(GG) {
        return this.r -= GG.r, this.g -= GG.g, this.b -= GG.b, this
      }
      subtractFromFloats(GG, bG, ZG) {
        return new pG(this.r - GG, this.g - bG, this.b - ZG)
      }
      subtractFromFloatsToRef(GG, bG, ZG, wG) {
        return wG.r = this.r - GG, wG.g = this.g - bG, wG.b = this.b - ZG, wG
      }
      clone() {
        return new pG(this.r, this.g, this.b)
      }
      oW(GG) {
        return this.r = GG.r, this.g = GG.g, this.b = GG.b, this
      }
      fGG(GG, bG, ZG) {
        return this.r = GG, this.g = bG, this.b = ZG, this
      }
      set(GG, bG, ZG) {
        return this.fGG(GG, bG, ZG)
      }
      N7(GG) {
        return this.r = this.g = this.b = GG, this
      }
      toHexString() {
        const GG = Math.round(255 * this.r),
          bG = Math.round(255 * this.g),
          ZG = Math.round(255 * this.b);
        return "#" + (0, LG.ToHex)(GG) + (0, LG.ToHex)(bG) + (0, LG.ToHex)(ZG)
      }
      fromHexString(GG) {
        return "#" !== GG.substring(0, 1) || 7 !== GG.length || (this.r = parseInt(GG.substring(1, 3), 16) / 255, this.g = parseInt(GG.substring(3, 5), 16) / 255, this.b = parseInt(GG.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new pG)
      }
      toHSVToRef(GG) {
        const bG = this.r,
          ZG = this.g,
          wG = this.b,
          SG = Math.max(bG, ZG, wG),
          LG = Math.min(bG, ZG, wG);
        let yG = 0,
          kG = 0;
        const UG = SG,
          YG = SG - LG;
        return 0 !== SG && (kG = YG / SG), SG != LG && (SG == bG ? (yG = (ZG - wG) / YG, ZG < wG && (yG += 6)) : SG == ZG ? yG = (wG - bG) / YG + 2 : SG == wG && (yG = (bG - ZG) / YG + 4), yG *= 60), GG.r = yG, GG.g = kG, GG.b = UG, GG
      }
      toLinearSpace() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = new pG;
        return this.toLinearSpaceToRef(bG, GG), bG
      }
      toLinearSpaceToRef(GG) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (GG.r = UG(this.r), GG.g = UG(this.g), GG.b = UG(this.b)) : (GG.r = kG(this.r), GG.g = kG(this.g), GG.b = kG(this.b)), this
      }
      toGammaSpace() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = new pG;
        return this.toGammaSpaceToRef(bG, GG), bG
      }
      toGammaSpaceToRef(GG) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (GG.r = VG(this.r), GG.g = VG(this.g), GG.b = VG(this.b)) : (GG.r = YG(this.r), GG.g = YG(this.g), GG.b = YG(this.b)), this
      }
      static HSVtoRGBToRef(GG, bG, ZG, wG) {
        const SG = ZG * bG,
          LG = GG / 60,
          yG = SG * (1 - Math.abs(LG % 2 - 1));
        let kG = 0,
          UG = 0,
          YG = 0;
        LG >= 0 && LG <= 1 ? (kG = SG, UG = yG) : LG >= 1 && LG <= 2 ? (kG = yG, UG = SG) : LG >= 2 && LG <= 3 ? (UG = SG, YG = yG) : LG >= 3 && LG <= 4 ? (UG = yG, YG = SG) : LG >= 4 && LG <= 5 ? (kG = yG, YG = SG) : LG >= 5 && LG <= 6 && (kG = SG, YG = yG);
        const VG = ZG - SG;
        return wG.r = kG + VG, wG.g = UG + VG, wG.b = YG + VG, wG
      }
      static FromHSV(GG, bG, ZG) {
        const wG = new pG(0, 0, 0);
        return pG.HSVtoRGBToRef(GG, bG, ZG, wG), wG
      }
      static FromHexString(GG) {
        return new pG(0, 0, 0).fromHexString(GG)
      }
      static FromArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pG(GG[bG], GG[bG + 1], GG[bG + 2])
      }
      static FromArrayToRef(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        ZG.r = GG[bG], ZG.g = GG[bG + 1], ZG.b = GG[bG + 2]
      }
      static FromInts(GG, bG, ZG) {
        return new pG(GG / 255, bG / 255, ZG / 255)
      }
      static Lerp(GG, bG, ZG) {
        const wG = new pG(0, 0, 0);
        return pG.LerpToRef(GG, bG, ZG, wG), wG
      }
      static LerpToRef(GG, bG, ZG, wG) {
        wG.r = GG.r + (bG.r - GG.r) * ZG, wG.g = GG.g + (bG.g - GG.g) * ZG, wG.b = GG.b + (bG.b - GG.b) * ZG
      }
      static Hermite(GG, bG, ZG, wG, SG) {
        const LG = SG * SG,
          yG = SG * LG,
          kG = 2 * yG - 3 * LG + 1,
          UG = -2 * yG + 3 * LG,
          YG = yG - 2 * LG + SG,
          VG = yG - LG,
          fG = GG.r * kG + ZG.r * UG + bG.r * YG + wG.r * VG,
          QG = GG.g * kG + ZG.g * UG + bG.g * YG + wG.g * VG,
          KG = GG.b * kG + ZG.b * UG + bG.b * YG + wG.b * VG;
        return new pG(fG, QG, KG)
      }
      static Hermite1stDerivative(GG, bG, ZG, wG, SG) {
        const LG = pG.Black();
        return this.Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG), LG
      }
      static Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG) {
        const yG = SG * SG;
        LG.r = 6 * (yG - SG) * GG.r + (3 * yG - 4 * SG + 1) * bG.r + 6 * (-yG + SG) * ZG.r + (3 * yG - 2 * SG) * wG.r, LG.g = 6 * (yG - SG) * GG.g + (3 * yG - 4 * SG + 1) * bG.g + 6 * (-yG + SG) * ZG.g + (3 * yG - 2 * SG) * wG.g, LG.b = 6 * (yG - SG) * GG.b + (3 * yG - 4 * SG + 1) * bG.b + 6 * (-yG + SG) * ZG.b + (3 * yG - 2 * SG) * wG.b
      }
      static Red() {
        return new pG(1, 0, 0)
      }
      static Green() {
        return new pG(0, 1, 0)
      }
      static Blue() {
        return new pG(0, 0, 1)
      }
      static Black() {
        return new pG(0, 0, 0)
      }
      static get BlackReadOnly() {
        return pG._BlackReadOnly
      }
      static White() {
        return new pG(1, 1, 1)
      }
      static Purple() {
        return new pG(.5, 0, .5)
      }
      static Magenta() {
        return new pG(1, 0, 1)
      }
      static Yellow() {
        return new pG(1, 1, 0)
      }
      static Gray() {
        return new pG(.5, .5, .5)
      }
      static Teal() {
        return new pG(0, 1, 1)
      }
      static Random() {
        return new pG(Math.random(), Math.random(), Math.random())
      }
    }
    pG._V8PerformanceHack = new pG(.5, .5, .5), pG._BlackReadOnly = pG.Black();
    class fG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = GG, this.g = bG, this.b = ZG, this.a = wG
      }
      mwG() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GG[bG] = this.r, GG[bG + 1] = this.g, GG[bG + 2] = this.b, GG[bG + 3] = this.a, this
      }
      hZG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = GG[bG], this.g = GG[bG + 1], this.b = GG[bG + 2], this.a = GG[bG + 3], this
      }
      equals(GG) {
        return GG && this.r === GG.r && this.g === GG.g && this.b === GG.b && this.a === GG.a
      }
      add(GG) {
        return new fG(this.r + GG.r, this.g + GG.g, this.b + GG.b, this.a + GG.a)
      }
      addToRef(GG, bG) {
        return bG.r = this.r + GG.r, bG.g = this.g + GG.g, bG.b = this.b + GG.b, bG.a = this.a + GG.a, bG
      }
      addInPlace(GG) {
        return this.r += GG.r, this.g += GG.g, this.b += GG.b, this.a += GG.a, this
      }
      addInPlaceFromFloats(GG, bG, ZG, wG) {
        return this.r += GG, this.g += bG, this.b += ZG, this.a += wG, this
      }
      subtract(GG) {
        return new fG(this.r - GG.r, this.g - GG.g, this.b - GG.b, this.a - GG.a)
      }
      subtractToRef(GG, bG) {
        return bG.r = this.r - GG.r, bG.g = this.g - GG.g, bG.b = this.b - GG.b, bG.a = this.a - GG.a, bG
      }
      twG(GG) {
        return this.r -= GG.r, this.g -= GG.g, this.b -= GG.b, this.a -= GG.a, this
      }
      subtractFromFloats(GG, bG, ZG, wG) {
        return new fG(this.r - GG, this.g - bG, this.b - ZG, this.a - wG)
      }
      subtractFromFloatsToRef(GG, bG, ZG, wG, SG) {
        return SG.r = this.r - GG, SG.g = this.g - bG, SG.b = this.b - ZG, SG.a = this.a - wG, SG
      }
      scale(GG) {
        return new fG(this.r * GG, this.g * GG, this.b * GG, this.a * GG)
      }
      scaleInPlace(GG) {
        return this.r *= GG, this.g *= GG, this.b *= GG, this.a *= GG, this
      }
      scaleToRef(GG, bG) {
        return bG.r = this.r * GG, bG.g = this.g * GG, bG.b = this.b * GG, bG.a = this.a * GG, bG
      }
      scaleAndAddToRef(GG, bG) {
        return bG.r += this.r * GG, bG.g += this.g * GG, bG.b += this.b * GG, bG.a += this.a * GG, bG
      }
      clampToRef() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        return ZG.r = (0, LG.Clamp)(this.r, GG, bG), ZG.g = (0, LG.Clamp)(this.g, GG, bG), ZG.b = (0, LG.Clamp)(this.b, GG, bG), ZG.a = (0, LG.Clamp)(this.a, GG, bG), ZG
      }
      multiply(GG) {
        return new fG(this.r * GG.r, this.g * GG.g, this.b * GG.b, this.a * GG.a)
      }
      multiplyToRef(GG, bG) {
        return bG.r = this.r * GG.r, bG.g = this.g * GG.g, bG.b = this.b * GG.b, bG.a = this.a * GG.a, bG
      }
      multiplyInPlace(GG) {
        return this.r *= GG.r, this.g *= GG.g, this.b *= GG.b, this.a *= GG.a, this
      }
      multiplyByFloats(GG, bG, ZG, wG) {
        return new fG(this.r * GG, this.g * bG, this.b * ZG, this.a * wG)
      }
      divide(GG) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(GG, bG) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(GG) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(GG) {
        return this.r = Math.min(this.r, GG.r), this.g = Math.min(this.g, GG.g), this.b = Math.min(this.b, GG.b), this.a = Math.min(this.a, GG.a), this
      }
      maximizeInPlace(GG) {
        return this.r = Math.max(this.r, GG.r), this.g = Math.max(this.g, GG.g), this.b = Math.max(this.b, GG.b), this.a = Math.max(this.a, GG.a), this
      }
      minimizeInPlaceFromFloats(GG, bG, ZG, wG) {
        return this.r = Math.min(GG, this.r), this.g = Math.min(bG, this.g), this.b = Math.min(ZG, this.b), this.a = Math.min(wG, this.a), this
      }
      maximizeInPlaceFromFloats(GG, bG, ZG, wG) {
        return this.r = Math.max(GG, this.r), this.g = Math.max(bG, this.g), this.b = Math.max(ZG, this.b), this.a = Math.max(wG, this.a), this
      }
      floorToRef(GG) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(GG) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      By() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(GG) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SG.d;
        return (0, LG.WithinEpsilon)(this.r, GG.r, bG) && (0, LG.WithinEpsilon)(this.g, GG.g, bG) && (0, LG.WithinEpsilon)(this.b, GG.b, bG) && (0, LG.WithinEpsilon)(this.a, GG.a, bG)
      }
      ZkG(GG, bG, ZG, wG) {
        return this.r === GG && this.g === bG && this.b === ZG && this.a === wG
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let GG = 255 * this.r | 0;
        return GG = 397 * GG ^ 255 * this.g, GG = 397 * GG ^ 255 * this.b, GG = 397 * GG ^ 255 * this.a, GG
      }
      clone() {
        return (new fG).oW(this)
      }
      oW(GG) {
        return this.r = GG.r, this.g = GG.g, this.b = GG.b, this.a = GG.a, this
      }
      fGG(GG, bG, ZG, wG) {
        return this.r = GG, this.g = bG, this.b = ZG, this.a = wG, this
      }
      set(GG, bG, ZG, wG) {
        return this.fGG(GG, bG, ZG, wG)
      }
      N7(GG) {
        return this.r = this.g = this.b = this.a = GG, this
      }
      toHexString() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = Math.round(255 * this.r),
          ZG = Math.round(255 * this.g),
          wG = Math.round(255 * this.b);
        if (GG) return "#" + (0, LG.ToHex)(bG) + (0, LG.ToHex)(ZG) + (0, LG.ToHex)(wG);
        const SG = Math.round(255 * this.a);
        return "#" + (0, LG.ToHex)(bG) + (0, LG.ToHex)(ZG) + (0, LG.ToHex)(wG) + (0, LG.ToHex)(SG)
      }
      fromHexString(GG) {
        return "#" !== GG.substring(0, 1) || 9 !== GG.length && 7 !== GG.length || (this.r = parseInt(GG.substring(1, 3), 16) / 255, this.g = parseInt(GG.substring(3, 5), 16) / 255, this.b = parseInt(GG.substring(5, 7), 16) / 255, 9 === GG.length && (this.a = parseInt(GG.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = new fG;
        return this.toLinearSpaceToRef(bG, GG), bG
      }
      toLinearSpaceToRef(GG) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (GG.r = UG(this.r), GG.g = UG(this.g), GG.b = UG(this.b)) : (GG.r = kG(this.r), GG.g = kG(this.g), GG.b = kG(this.b)), GG.a = this.a, this
      }
      toGammaSpace() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bG = new fG;
        return this.toGammaSpaceToRef(bG, GG), bG
      }
      toGammaSpaceToRef(GG) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (GG.r = VG(this.r), GG.g = VG(this.g), GG.b = VG(this.b)) : (GG.r = YG(this.r), GG.g = YG(this.g), GG.b = YG(this.b)), GG.a = this.a, this
      }
      static FromHexString(GG) {
        return "#" !== GG.substring(0, 1) || 9 !== GG.length && 7 !== GG.length ? new fG(0, 0, 0, 0) : new fG(0, 0, 0, 1).fromHexString(GG)
      }
      static Lerp(GG, bG, ZG) {
        return fG.LerpToRef(GG, bG, ZG, new fG)
      }
      static LerpToRef(GG, bG, ZG, wG) {
        return wG.r = GG.r + (bG.r - GG.r) * ZG, wG.g = GG.g + (bG.g - GG.g) * ZG, wG.b = GG.b + (bG.b - GG.b) * ZG, wG.a = GG.a + (bG.a - GG.a) * ZG, wG
      }
      static Hermite(GG, bG, ZG, wG, SG) {
        const LG = SG * SG,
          yG = SG * LG,
          kG = 2 * yG - 3 * LG + 1,
          UG = -2 * yG + 3 * LG,
          YG = yG - 2 * LG + SG,
          VG = yG - LG,
          pG = GG.r * kG + ZG.r * UG + bG.r * YG + wG.r * VG,
          QG = GG.g * kG + ZG.g * UG + bG.g * YG + wG.g * VG,
          KG = GG.b * kG + ZG.b * UG + bG.b * YG + wG.b * VG,
          hG = GG.a * kG + ZG.a * UG + bG.a * YG + wG.a * VG;
        return new fG(pG, QG, KG, hG)
      }
      static Hermite1stDerivative(GG, bG, ZG, wG, SG) {
        const LG = new fG;
        return this.Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG), LG
      }
      static Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG) {
        const yG = SG * SG;
        LG.r = 6 * (yG - SG) * GG.r + (3 * yG - 4 * SG + 1) * bG.r + 6 * (-yG + SG) * ZG.r + (3 * yG - 2 * SG) * wG.r, LG.g = 6 * (yG - SG) * GG.g + (3 * yG - 4 * SG + 1) * bG.g + 6 * (-yG + SG) * ZG.g + (3 * yG - 2 * SG) * wG.g, LG.b = 6 * (yG - SG) * GG.b + (3 * yG - 4 * SG + 1) * bG.b + 6 * (-yG + SG) * ZG.b + (3 * yG - 2 * SG) * wG.b, LG.a = 6 * (yG - SG) * GG.a + (3 * yG - 4 * SG + 1) * bG.a + 6 * (-yG + SG) * ZG.a + (3 * yG - 2 * SG) * wG.a
      }
      static FromColor3(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new fG(GG.r, GG.g, GG.b, bG)
      }
      static FromArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new fG(GG[bG], GG[bG + 1], GG[bG + 2], GG[bG + 3])
      }
      static FromArrayToRef(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        ZG.r = GG[bG], ZG.g = GG[bG + 1], ZG.b = GG[bG + 2], ZG.a = GG[bG + 3]
      }
      static FromInts(GG, bG, ZG, wG) {
        return new fG(GG / 255, bG / 255, ZG / 255, wG / 255)
      }
      static CheckColors4(GG, bG) {
        if (GG.length === 3 * bG) {
          const bG = [];
          for (let ZG = 0; ZG < GG.length; ZG += 3) {
            const wG = ZG / 3 * 4;
            bG[wG] = GG[ZG], bG[wG + 1] = GG[ZG + 1], bG[wG + 2] = GG[ZG + 2], bG[wG + 3] = 1
          }
          return bG
        }
        return GG
      }
    }
    fG._V8PerformanceHack = new fG(.5, .5, .5, .5);
    class QG {}
    QG.Color3 = (0, wG.d)(3, pG.Black), QG.Color4 = (0, wG.d)(3, (() => new fG(0, 0, 0, 0)));
    let KG = !1;

    function hG() {
      KG || (KG = !0, Object.defineProperties(pG.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(fG.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, yG.i)("BABYLON.Color3", pG), (0, yG.i)("BABYLON.Color4", fG))
    }
  },
  37443: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => LG,
      g: () => wG,
      k: () => SG
    });
    const wG = 1 / 2.2,
      SG = 2.2;
    Math.sqrt(5);
    let LG = .001
  },
  37471: (GG, bG, ZG) => {
    function wG(GG) {
      return parseInt(GG.toString().replace(/\W/g, ""))
    }

    function SG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(GG - bG) <= ZG
    }

    function LG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return GG < bG - wG || GG > ZG + wG
    }

    function yG(GG, bG) {
      return GG === bG ? GG : Math.random() * (bG - GG) + GG
    }

    function kG(GG, bG, ZG) {
      return GG + (bG - GG) * ZG
    }

    function UG(GG, bG, ZG) {
      let wG = dG(bG - GG, 360);
      return wG > 180 && (wG -= 360), GG + wG * fG(ZG)
    }

    function YG(GG, bG, ZG) {
      let wG;
      return wG = GG != bG ? fG((ZG - GG) / (bG - GG)) : 0, wG
    }

    function VG(GG, bG, ZG, wG, SG) {
      const LG = SG * SG,
        yG = SG * LG;
      return GG * (2 * yG - 3 * LG + 1) + ZG * (-2 * yG + 3 * LG) + bG * (yG - 2 * LG + SG) + wG * (yG - LG)
    }

    function pG(GG, bG, ZG, wG, SG) {
      const LG = SG * SG;
      return 6 * (LG - SG) * GG + (3 * LG - 4 * SG + 1) * bG + 6 * (-LG + SG) * ZG + (3 * LG - 2 * SG) * wG
    }

    function fG(GG) {
      let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ZG, Math.max(bG, GG))
    }

    function QG(GG) {
      return GG -= 2 * Math.PI * Math.floor((GG + Math.PI) / (2 * Math.PI))
    }

    function KG(GG) {
      const bG = GG.toString(16);
      return GG <= 15 ? ("0" + bG).toUpperCase() : bG.toUpperCase()
    }

    function hG(GG) {
      if (Math.log2) return Math.floor(Math.log2(GG));
      if (GG < 0) return NaN;
      if (0 === GG) return -1 / 0;
      let bG = 0;
      if (GG < 1) {
        for (; GG < 1;) bG++, GG *= 2;
        bG = -bG
      } else if (GG > 1)
        for (; GG > 1;) bG++, GG = Math.floor(GG / 2);
      return bG
    }

    function dG(GG, bG) {
      return GG - Math.floor(GG / bG) * bG
    }

    function JG(GG, bG, ZG) {
      return (GG - bG) / (ZG - bG)
    }

    function rG(GG, bG, ZG) {
      return GG * (ZG - bG) + bG
    }

    function zG(GG, bG) {
      let ZG = dG(bG - GG, 360);
      return ZG > 180 && (ZG -= 360), ZG
    }

    function EG(GG, bG) {
      const ZG = dG(GG, 2 * bG);
      return bG - Math.abs(ZG - bG)
    }

    function oG(GG, bG, ZG) {
      let wG = fG(ZG);
      return wG = -2 * wG * wG * wG + 3 * wG * wG, bG * wG + GG * (1 - wG)
    }

    function XG(GG, bG, ZG) {
      let wG;
      return wG = Math.abs(bG - GG) <= ZG ? bG : GG + Math.sign(bG - GG) * ZG, wG
    }

    function uG(GG, bG, ZG) {
      const wG = zG(GG, bG);
      let SG;
      return SG = -ZG < wG && wG < ZG ? bG : XG(GG, bG = GG + wG, ZG), SG
    }

    function iG(GG, bG, ZG) {
      return (GG - bG) / (ZG - bG)
    }

    function CG(GG, bG, ZG) {
      return (ZG - bG) * GG + bG
    }

    function WG(GG, bG) {
      const ZG = GG % bG;
      return 0 === ZG ? bG : WG(bG, ZG)
    }
    ZG.r(bG), ZG.d(bG, {
      Clamp: () => fG,
      DeltaAngle: () => zG,
      Denormalize: () => rG,
      ExtractAsInt: () => wG,
      Hermite: () => VG,
      Hermite1stDerivative: () => pG,
      HighestCommonFactor: () => WG,
      ILog2: () => hG,
      InverseLerp: () => YG,
      Lerp: () => kG,
      LerpAngle: () => UG,
      MoveTowards: () => XG,
      MoveTowardsAngle: () => uG,
      Normalize: () => JG,
      NormalizeRadians: () => QG,
      OutsideRange: () => LG,
      PercentToRange: () => CG,
      PingPong: () => EG,
      RandomRange: () => yG,
      RangeToPercent: () => iG,
      Repeat: () => dG,
      SmoothStep: () => oG,
      ToHex: () => KG,
      WithinEpsilon: () => SG
    })
  },
  37448: (GG, bG, ZG) => {
    function wG(GG, bG) {
      const ZG = [];
      for (let wG = 0; wG < GG; ++wG) ZG.push(bG());
      return ZG
    }

    function SG(GG, bG) {
      return wG(GG, bG)
    }
    ZG.d(bG, {
      d: () => wG,
      f: () => SG,
      h: () => yG
    });
    const LG = ["push", "splice", "pop", "shift", "unshift"];

    function yG(GG, bG) {
      const ZG = LG.map((ZG => function(GG, bG, ZG) {
        const wG = GG[bG];
        if ("function" !== typeof wG) return null;
        const SG = function() {
          const wG = GG.length,
            LG = SG.previous.apply(GG, arguments);
          return ZG(bG, wG), LG
        };
        return wG.next = SG, SG.previous = wG, GG[bG] = SG, () => {
          const ZG = SG.previous;
          if (!ZG) return;
          const wG = SG.next;
          wG ? (ZG.next = wG, wG.previous = ZG) : (ZG.next = void 0, GG[bG] = ZG), SG.next = void 0, SG.previous = void 0
        }
      }(GG, ZG, bG)));
      return () => {
        for (const GG of ZG) GG?.()
      }
    }
  },
  37484: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => SG
    });
    const wG = {};

    function SG(GG, bG) {
      wG[GG] = bG
    }

    function LG(GG) {
      return wG[GG]
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);