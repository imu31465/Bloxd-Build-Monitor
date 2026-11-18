export const id = 214;
export const ids = [214];
export const modules = {
  35919: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Ky,
      e: () => ey,
      i: () => Sy,
      m: () => qb
    });
    var Uy = Wy(35869),
      hy = Wy(35864),
      fy = Wy(35902),
      Zy = Wy(35909);

    function cb(yb) {
      return Math.pow(yb, hy.j)
    }

    function Py(yb) {
      return yb <= .04045 ? .0773993808 * yb : Math.pow(.947867299 * (yb + .055), 2.4)
    }

    function oy(yb) {
      return Math.pow(yb, hy.h)
    }

    function By(yb) {
      return yb <= .0031308 ? 12.92 * yb : 1.055 * Math.pow(yb, .41666) - .055
    }
    class Ky {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = yb, this.g = bb, this.b = Wy
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let yb = 255 * this.r | 0;
        return yb = 397 * yb ^ 255 * this.g, yb = 397 * yb ^ 255 * this.b, yb
      }
      toArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yb[bb] = this.r, yb[bb + 1] = this.g, yb[bb + 2] = this.b, this
      }
      FPy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ky.FromArrayToRef(yb, bb, this), this
      }
      toColor4() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new ey(this.r, this.g, this.b, yb)
      }
      hBy() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(yb) {
        return new Ky(this.r * yb.r, this.g * yb.g, this.b * yb.b)
      }
      multiplyToRef(yb, bb) {
        return bb.r = this.r * yb.r, bb.g = this.g * yb.g, bb.b = this.b * yb.b, bb
      }
      multiplyInPlace(yb) {
        return this.r *= yb.r, this.g *= yb.g, this.b *= yb.b, this
      }
      multiplyByFloats(yb, bb, Wy) {
        return new Ky(this.r * yb, this.g * bb, this.b * Wy)
      }
      divide(yb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(yb, bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(yb) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(yb) {
        return this.minimizeInPlaceFromFloats(yb.r, yb.g, yb.b)
      }
      maximizeInPlace(yb) {
        return this.maximizeInPlaceFromFloats(yb.r, yb.g, yb.b)
      }
      minimizeInPlaceFromFloats(yb, bb, Wy) {
        return this.r = Math.min(yb, this.r), this.g = Math.min(bb, this.g), this.b = Math.min(Wy, this.b), this
      }
      maximizeInPlaceFromFloats(yb, bb, Wy) {
        return this.r = Math.max(yb, this.r), this.g = Math.max(bb, this.g), this.b = Math.max(Wy, this.b), this
      }
      floorToRef(yb) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(yb) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(yb) {
        return yb && this.r === yb.r && this.g === yb.g && this.b === yb.b
      }
      equalsFloats(yb, bb, Wy) {
        return this.nqy(yb, bb, Wy)
      }
      nqy(yb, bb, Wy) {
        return this.r === yb && this.g === bb && this.b === Wy
      }
      equalsWithEpsilon(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hy.e;
        return (0, fy.WithinEpsilon)(this.r, yb.r, bb) && (0, fy.WithinEpsilon)(this.g, yb.g, bb) && (0, fy.WithinEpsilon)(this.b, yb.b, bb)
      }
      gZ() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(yb) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(yb) {
        return new Ky(this.r * yb, this.g * yb, this.b * yb)
      }
      scaleInPlace(yb) {
        return this.r *= yb, this.g *= yb, this.b *= yb, this
      }
      scaleToRef(yb, bb) {
        return bb.r = this.r * yb, bb.g = this.g * yb, bb.b = this.b * yb, bb
      }
      scaleAndAddToRef(yb, bb) {
        return bb.r += this.r * yb, bb.g += this.g * yb, bb.b += this.b * yb, bb
      }
      clampToRef() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        return Wy.r = (0, fy.Clamp)(this.r, yb, bb), Wy.g = (0, fy.Clamp)(this.g, yb, bb), Wy.b = (0, fy.Clamp)(this.b, yb, bb), Wy
      }
      add(yb) {
        return new Ky(this.r + yb.r, this.g + yb.g, this.b + yb.b)
      }
      addInPlace(yb) {
        return this.r += yb.r, this.g += yb.g, this.b += yb.b, this
      }
      addInPlaceFromFloats(yb, bb, Wy) {
        return this.r += yb, this.g += bb, this.b += Wy, this
      }
      addToRef(yb, bb) {
        return bb.r = this.r + yb.r, bb.g = this.g + yb.g, bb.b = this.b + yb.b, bb
      }
      subtract(yb) {
        return new Ky(this.r - yb.r, this.g - yb.g, this.b - yb.b)
      }
      subtractToRef(yb, bb) {
        return bb.r = this.r - yb.r, bb.g = this.g - yb.g, bb.b = this.b - yb.b, bb
      }
      TBy(yb) {
        return this.r -= yb.r, this.g -= yb.g, this.b -= yb.b, this
      }
      subtractFromFloats(yb, bb, Wy) {
        return new Ky(this.r - yb, this.g - bb, this.b - Wy)
      }
      subtractFromFloatsToRef(yb, bb, Wy, Uy) {
        return Uy.r = this.r - yb, Uy.g = this.g - bb, Uy.b = this.b - Wy, Uy
      }
      clone() {
        return new Ky(this.r, this.g, this.b)
      }
      Coy(yb) {
        return this.r = yb.r, this.g = yb.g, this.b = yb.b, this
      }
      vcy(yb, bb, Wy) {
        return this.r = yb, this.g = bb, this.b = Wy, this
      }
      set(yb, bb, Wy) {
        return this.vcy(yb, bb, Wy)
      }
      dfy(yb) {
        return this.r = this.g = this.b = yb, this
      }
      toHexString() {
        const yb = Math.round(255 * this.r),
          bb = Math.round(255 * this.g),
          Wy = Math.round(255 * this.b);
        return "#" + (0, fy.ToHex)(yb) + (0, fy.ToHex)(bb) + (0, fy.ToHex)(Wy)
      }
      fromHexString(yb) {
        return "#" !== yb.substring(0, 1) || 7 !== yb.length || (this.r = parseInt(yb.substring(1, 3), 16) / 255, this.g = parseInt(yb.substring(3, 5), 16) / 255, this.b = parseInt(yb.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Ky)
      }
      toHSVToRef(yb) {
        const bb = this.r,
          Wy = this.g,
          Uy = this.b,
          hy = Math.max(bb, Wy, Uy),
          fy = Math.min(bb, Wy, Uy);
        let Zy = 0,
          cb = 0;
        const Py = hy,
          oy = hy - fy;
        return 0 !== hy && (cb = oy / hy), hy != fy && (hy == bb ? (Zy = (Wy - Uy) / oy, Wy < Uy && (Zy += 6)) : hy == Wy ? Zy = (Uy - bb) / oy + 2 : hy == Uy && (Zy = (bb - Wy) / oy + 4), Zy *= 60), yb.r = Zy, yb.g = cb, yb.b = Py, yb
      }
      toLinearSpace() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = new Ky;
        return this.toLinearSpaceToRef(bb, yb), bb
      }
      toLinearSpaceToRef(yb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (yb.r = Py(this.r), yb.g = Py(this.g), yb.b = Py(this.b)) : (yb.r = cb(this.r), yb.g = cb(this.g), yb.b = cb(this.b)), this
      }
      toGammaSpace() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = new Ky;
        return this.toGammaSpaceToRef(bb, yb), bb
      }
      toGammaSpaceToRef(yb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (yb.r = By(this.r), yb.g = By(this.g), yb.b = By(this.b)) : (yb.r = oy(this.r), yb.g = oy(this.g), yb.b = oy(this.b)), this
      }
      static HSVtoRGBToRef(yb, bb, Wy, Uy) {
        const hy = Wy * bb,
          fy = yb / 60,
          Zy = hy * (1 - Math.abs(fy % 2 - 1));
        let cb = 0,
          Py = 0,
          oy = 0;
        fy >= 0 && fy <= 1 ? (cb = hy, Py = Zy) : fy >= 1 && fy <= 2 ? (cb = Zy, Py = hy) : fy >= 2 && fy <= 3 ? (Py = hy, oy = Zy) : fy >= 3 && fy <= 4 ? (Py = Zy, oy = hy) : fy >= 4 && fy <= 5 ? (cb = Zy, oy = hy) : fy >= 5 && fy <= 6 && (cb = hy, oy = Zy);
        const By = Wy - hy;
        return Uy.r = cb + By, Uy.g = Py + By, Uy.b = oy + By, Uy
      }
      static FromHSV(yb, bb, Wy) {
        const Uy = new Ky(0, 0, 0);
        return Ky.HSVtoRGBToRef(yb, bb, Wy, Uy), Uy
      }
      static FromHexString(yb) {
        return new Ky(0, 0, 0).fromHexString(yb)
      }
      static FromArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ky(yb[bb], yb[bb + 1], yb[bb + 2])
      }
      static FromArrayToRef(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        Wy.r = yb[bb], Wy.g = yb[bb + 1], Wy.b = yb[bb + 2]
      }
      static FromInts(yb, bb, Wy) {
        return new Ky(yb / 255, bb / 255, Wy / 255)
      }
      static Lerp(yb, bb, Wy) {
        const Uy = new Ky(0, 0, 0);
        return Ky.LerpToRef(yb, bb, Wy, Uy), Uy
      }
      static LerpToRef(yb, bb, Wy, Uy) {
        Uy.r = yb.r + (bb.r - yb.r) * Wy, Uy.g = yb.g + (bb.g - yb.g) * Wy, Uy.b = yb.b + (bb.b - yb.b) * Wy
      }
      static Hermite(yb, bb, Wy, Uy, hy) {
        const fy = hy * hy,
          Zy = hy * fy,
          cb = 2 * Zy - 3 * fy + 1,
          Py = -2 * Zy + 3 * fy,
          oy = Zy - 2 * fy + hy,
          By = Zy - fy,
          ey = yb.r * cb + Wy.r * Py + bb.r * oy + Uy.r * By,
          qb = yb.g * cb + Wy.g * Py + bb.g * oy + Uy.g * By,
          sy = yb.b * cb + Wy.b * Py + bb.b * oy + Uy.b * By;
        return new Ky(ey, qb, sy)
      }
      static Hermite1stDerivative(yb, bb, Wy, Uy, hy) {
        const fy = Ky.Black();
        return this.Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy), fy
      }
      static Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy) {
        const Zy = hy * hy;
        fy.r = 6 * (Zy - hy) * yb.r + (3 * Zy - 4 * hy + 1) * bb.r + 6 * (-Zy + hy) * Wy.r + (3 * Zy - 2 * hy) * Uy.r, fy.g = 6 * (Zy - hy) * yb.g + (3 * Zy - 4 * hy + 1) * bb.g + 6 * (-Zy + hy) * Wy.g + (3 * Zy - 2 * hy) * Uy.g, fy.b = 6 * (Zy - hy) * yb.b + (3 * Zy - 4 * hy + 1) * bb.b + 6 * (-Zy + hy) * Wy.b + (3 * Zy - 2 * hy) * Uy.b
      }
      static Red() {
        return new Ky(1, 0, 0)
      }
      static Green() {
        return new Ky(0, 1, 0)
      }
      static Blue() {
        return new Ky(0, 0, 1)
      }
      static Black() {
        return new Ky(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Ky._BlackReadOnly
      }
      static White() {
        return new Ky(1, 1, 1)
      }
      static Purple() {
        return new Ky(.5, 0, .5)
      }
      static Magenta() {
        return new Ky(1, 0, 1)
      }
      static Yellow() {
        return new Ky(1, 1, 0)
      }
      static Gray() {
        return new Ky(.5, .5, .5)
      }
      static Teal() {
        return new Ky(0, 1, 1)
      }
      static Random() {
        return new Ky(Math.random(), Math.random(), Math.random())
      }
    }
    Ky._V8PerformanceHack = new Ky(.5, .5, .5), Ky._BlackReadOnly = Ky.Black();
    class ey {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = yb, this.g = bb, this.b = Wy, this.a = Uy
      }
      hBy() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yb[bb] = this.r, yb[bb + 1] = this.g, yb[bb + 2] = this.b, yb[bb + 3] = this.a, this
      }
      FPy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = yb[bb], this.g = yb[bb + 1], this.b = yb[bb + 2], this.a = yb[bb + 3], this
      }
      equals(yb) {
        return yb && this.r === yb.r && this.g === yb.g && this.b === yb.b && this.a === yb.a
      }
      add(yb) {
        return new ey(this.r + yb.r, this.g + yb.g, this.b + yb.b, this.a + yb.a)
      }
      addToRef(yb, bb) {
        return bb.r = this.r + yb.r, bb.g = this.g + yb.g, bb.b = this.b + yb.b, bb.a = this.a + yb.a, bb
      }
      addInPlace(yb) {
        return this.r += yb.r, this.g += yb.g, this.b += yb.b, this.a += yb.a, this
      }
      addInPlaceFromFloats(yb, bb, Wy, Uy) {
        return this.r += yb, this.g += bb, this.b += Wy, this.a += Uy, this
      }
      subtract(yb) {
        return new ey(this.r - yb.r, this.g - yb.g, this.b - yb.b, this.a - yb.a)
      }
      subtractToRef(yb, bb) {
        return bb.r = this.r - yb.r, bb.g = this.g - yb.g, bb.b = this.b - yb.b, bb.a = this.a - yb.a, bb
      }
      TBy(yb) {
        return this.r -= yb.r, this.g -= yb.g, this.b -= yb.b, this.a -= yb.a, this
      }
      subtractFromFloats(yb, bb, Wy, Uy) {
        return new ey(this.r - yb, this.g - bb, this.b - Wy, this.a - Uy)
      }
      subtractFromFloatsToRef(yb, bb, Wy, Uy, hy) {
        return hy.r = this.r - yb, hy.g = this.g - bb, hy.b = this.b - Wy, hy.a = this.a - Uy, hy
      }
      scale(yb) {
        return new ey(this.r * yb, this.g * yb, this.b * yb, this.a * yb)
      }
      scaleInPlace(yb) {
        return this.r *= yb, this.g *= yb, this.b *= yb, this.a *= yb, this
      }
      scaleToRef(yb, bb) {
        return bb.r = this.r * yb, bb.g = this.g * yb, bb.b = this.b * yb, bb.a = this.a * yb, bb
      }
      scaleAndAddToRef(yb, bb) {
        return bb.r += this.r * yb, bb.g += this.g * yb, bb.b += this.b * yb, bb.a += this.a * yb, bb
      }
      clampToRef() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        return Wy.r = (0, fy.Clamp)(this.r, yb, bb), Wy.g = (0, fy.Clamp)(this.g, yb, bb), Wy.b = (0, fy.Clamp)(this.b, yb, bb), Wy.a = (0, fy.Clamp)(this.a, yb, bb), Wy
      }
      multiply(yb) {
        return new ey(this.r * yb.r, this.g * yb.g, this.b * yb.b, this.a * yb.a)
      }
      multiplyToRef(yb, bb) {
        return bb.r = this.r * yb.r, bb.g = this.g * yb.g, bb.b = this.b * yb.b, bb.a = this.a * yb.a, bb
      }
      multiplyInPlace(yb) {
        return this.r *= yb.r, this.g *= yb.g, this.b *= yb.b, this.a *= yb.a, this
      }
      multiplyByFloats(yb, bb, Wy, Uy) {
        return new ey(this.r * yb, this.g * bb, this.b * Wy, this.a * Uy)
      }
      divide(yb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(yb, bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(yb) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(yb) {
        return this.r = Math.min(this.r, yb.r), this.g = Math.min(this.g, yb.g), this.b = Math.min(this.b, yb.b), this.a = Math.min(this.a, yb.a), this
      }
      maximizeInPlace(yb) {
        return this.r = Math.max(this.r, yb.r), this.g = Math.max(this.g, yb.g), this.b = Math.max(this.b, yb.b), this.a = Math.max(this.a, yb.a), this
      }
      minimizeInPlaceFromFloats(yb, bb, Wy, Uy) {
        return this.r = Math.min(yb, this.r), this.g = Math.min(bb, this.g), this.b = Math.min(Wy, this.b), this.a = Math.min(Uy, this.a), this
      }
      maximizeInPlaceFromFloats(yb, bb, Wy, Uy) {
        return this.r = Math.max(yb, this.r), this.g = Math.max(bb, this.g), this.b = Math.max(Wy, this.b), this.a = Math.max(Uy, this.a), this
      }
      floorToRef(yb) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(yb) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      gZ() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(yb) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hy.e;
        return (0, fy.WithinEpsilon)(this.r, yb.r, bb) && (0, fy.WithinEpsilon)(this.g, yb.g, bb) && (0, fy.WithinEpsilon)(this.b, yb.b, bb) && (0, fy.WithinEpsilon)(this.a, yb.a, bb)
      }
      nqy(yb, bb, Wy, Uy) {
        return this.r === yb && this.g === bb && this.b === Wy && this.a === Uy
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let yb = 255 * this.r | 0;
        return yb = 397 * yb ^ 255 * this.g, yb = 397 * yb ^ 255 * this.b, yb = 397 * yb ^ 255 * this.a, yb
      }
      clone() {
        return (new ey).Coy(this)
      }
      Coy(yb) {
        return this.r = yb.r, this.g = yb.g, this.b = yb.b, this.a = yb.a, this
      }
      vcy(yb, bb, Wy, Uy) {
        return this.r = yb, this.g = bb, this.b = Wy, this.a = Uy, this
      }
      set(yb, bb, Wy, Uy) {
        return this.vcy(yb, bb, Wy, Uy)
      }
      dfy(yb) {
        return this.r = this.g = this.b = this.a = yb, this
      }
      toHexString() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = Math.round(255 * this.r),
          Wy = Math.round(255 * this.g),
          Uy = Math.round(255 * this.b);
        if (yb) return "#" + (0, fy.ToHex)(bb) + (0, fy.ToHex)(Wy) + (0, fy.ToHex)(Uy);
        const hy = Math.round(255 * this.a);
        return "#" + (0, fy.ToHex)(bb) + (0, fy.ToHex)(Wy) + (0, fy.ToHex)(Uy) + (0, fy.ToHex)(hy)
      }
      fromHexString(yb) {
        return "#" !== yb.substring(0, 1) || 9 !== yb.length && 7 !== yb.length || (this.r = parseInt(yb.substring(1, 3), 16) / 255, this.g = parseInt(yb.substring(3, 5), 16) / 255, this.b = parseInt(yb.substring(5, 7), 16) / 255, 9 === yb.length && (this.a = parseInt(yb.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = new ey;
        return this.toLinearSpaceToRef(bb, yb), bb
      }
      toLinearSpaceToRef(yb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (yb.r = Py(this.r), yb.g = Py(this.g), yb.b = Py(this.b)) : (yb.r = cb(this.r), yb.g = cb(this.g), yb.b = cb(this.b)), yb.a = this.a, this
      }
      toGammaSpace() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const bb = new ey;
        return this.toGammaSpaceToRef(bb, yb), bb
      }
      toGammaSpaceToRef(yb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (yb.r = By(this.r), yb.g = By(this.g), yb.b = By(this.b)) : (yb.r = oy(this.r), yb.g = oy(this.g), yb.b = oy(this.b)), yb.a = this.a, this
      }
      static FromHexString(yb) {
        return "#" !== yb.substring(0, 1) || 9 !== yb.length && 7 !== yb.length ? new ey(0, 0, 0, 0) : new ey(0, 0, 0, 1).fromHexString(yb)
      }
      static Lerp(yb, bb, Wy) {
        return ey.LerpToRef(yb, bb, Wy, new ey)
      }
      static LerpToRef(yb, bb, Wy, Uy) {
        return Uy.r = yb.r + (bb.r - yb.r) * Wy, Uy.g = yb.g + (bb.g - yb.g) * Wy, Uy.b = yb.b + (bb.b - yb.b) * Wy, Uy.a = yb.a + (bb.a - yb.a) * Wy, Uy
      }
      static Hermite(yb, bb, Wy, Uy, hy) {
        const fy = hy * hy,
          Zy = hy * fy,
          cb = 2 * Zy - 3 * fy + 1,
          Py = -2 * Zy + 3 * fy,
          oy = Zy - 2 * fy + hy,
          By = Zy - fy,
          Ky = yb.r * cb + Wy.r * Py + bb.r * oy + Uy.r * By,
          qb = yb.g * cb + Wy.g * Py + bb.g * oy + Uy.g * By,
          sy = yb.b * cb + Wy.b * Py + bb.b * oy + Uy.b * By,
          Sy = yb.a * cb + Wy.a * Py + bb.a * oy + Uy.a * By;
        return new ey(Ky, qb, sy, Sy)
      }
      static Hermite1stDerivative(yb, bb, Wy, Uy, hy) {
        const fy = new ey;
        return this.Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy), fy
      }
      static Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy) {
        const Zy = hy * hy;
        fy.r = 6 * (Zy - hy) * yb.r + (3 * Zy - 4 * hy + 1) * bb.r + 6 * (-Zy + hy) * Wy.r + (3 * Zy - 2 * hy) * Uy.r, fy.g = 6 * (Zy - hy) * yb.g + (3 * Zy - 4 * hy + 1) * bb.g + 6 * (-Zy + hy) * Wy.g + (3 * Zy - 2 * hy) * Uy.g, fy.b = 6 * (Zy - hy) * yb.b + (3 * Zy - 4 * hy + 1) * bb.b + 6 * (-Zy + hy) * Wy.b + (3 * Zy - 2 * hy) * Uy.b, fy.a = 6 * (Zy - hy) * yb.a + (3 * Zy - 4 * hy + 1) * bb.a + 6 * (-Zy + hy) * Wy.a + (3 * Zy - 2 * hy) * Uy.a
      }
      static FromColor3(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ey(yb.r, yb.g, yb.b, bb)
      }
      static FromArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ey(yb[bb], yb[bb + 1], yb[bb + 2], yb[bb + 3])
      }
      static FromArrayToRef(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        Wy.r = yb[bb], Wy.g = yb[bb + 1], Wy.b = yb[bb + 2], Wy.a = yb[bb + 3]
      }
      static FromInts(yb, bb, Wy, Uy) {
        return new ey(yb / 255, bb / 255, Wy / 255, Uy / 255)
      }
      static CheckColors4(yb, bb) {
        if (yb.length === 3 * bb) {
          const bb = [];
          for (let Wy = 0; Wy < yb.length; Wy += 3) {
            const Uy = Wy / 3 * 4;
            bb[Uy] = yb[Wy], bb[Uy + 1] = yb[Wy + 1], bb[Uy + 2] = yb[Wy + 2], bb[Uy + 3] = 1
          }
          return bb
        }
        return yb
      }
    }
    ey._V8PerformanceHack = new ey(.5, .5, .5, .5);
    class qb {}
    qb.Color3 = (0, Uy.c)(3, Ky.Black), qb.Color4 = (0, Uy.c)(3, (() => new ey(0, 0, 0, 0)));
    let sy = !1;

    function Sy() {
      sy || (sy = !0, Object.defineProperties(Ky.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ey.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Zy.e)("BABYLON.Color3", Ky), (0, Zy.e)("BABYLON.Color4", ey))
    }
  },
  35864: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => fy,
      h: () => Uy,
      j: () => hy
    });
    const Uy = 1 / 2.2,
      hy = 2.2;
    Math.sqrt(5);
    let fy = .001
  },
  35902: (yb, bb, Wy) => {
    function Uy(yb) {
      return parseInt(yb.toString().replace(/\W/g, ""))
    }

    function hy(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(yb - bb) <= Wy
    }

    function fy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return yb < bb - Uy || yb > Wy + Uy
    }

    function Zy(yb, bb) {
      return yb === bb ? yb : Math.random() * (bb - yb) + yb
    }

    function cb(yb, bb, Wy) {
      return yb + (bb - yb) * Wy
    }

    function Py(yb, bb, Wy) {
      let Uy = Ey(bb - yb, 360);
      return Uy > 180 && (Uy -= 360), yb + Uy * ey(Wy)
    }

    function oy(yb, bb, Wy) {
      let Uy;
      return Uy = yb != bb ? ey((Wy - yb) / (bb - yb)) : 0, Uy
    }

    function By(yb, bb, Wy, Uy, hy) {
      const fy = hy * hy,
        Zy = hy * fy;
      return yb * (2 * Zy - 3 * fy + 1) + Wy * (-2 * Zy + 3 * fy) + bb * (Zy - 2 * fy + hy) + Uy * (Zy - fy)
    }

    function Ky(yb, bb, Wy, Uy, hy) {
      const fy = hy * hy;
      return 6 * (fy - hy) * yb + (3 * fy - 4 * hy + 1) * bb + 6 * (-fy + hy) * Wy + (3 * fy - 2 * hy) * Uy
    }

    function ey(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Wy, Math.max(bb, yb))
    }

    function qb(yb) {
      return yb -= 2 * Math.PI * Math.floor((yb + Math.PI) / (2 * Math.PI))
    }

    function sy(yb) {
      const bb = yb.toString(16);
      return yb <= 15 ? ("0" + bb).toUpperCase() : bb.toUpperCase()
    }

    function Sy(yb) {
      if (Math.log2) return Math.floor(Math.log2(yb));
      if (yb < 0) return NaN;
      if (0 === yb) return -1 / 0;
      let bb = 0;
      if (yb < 1) {
        for (; yb < 1;) bb++, yb *= 2;
        bb = -bb
      } else if (yb > 1)
        for (; yb > 1;) bb++, yb = Math.floor(yb / 2);
      return bb
    }

    function Ey(yb, bb) {
      return yb - Math.floor(yb / bb) * bb
    }

    function ly(yb, bb, Wy) {
      return (yb - bb) / (Wy - bb)
    }

    function mb(yb, bb, Wy) {
      return yb * (Wy - bb) + bb
    }

    function Cy(yb, bb) {
      let Wy = Ey(bb - yb, 360);
      return Wy > 180 && (Wy -= 360), Wy
    }

    function Ty(yb, bb) {
      const Wy = Ey(yb, 2 * bb);
      return bb - Math.abs(Wy - bb)
    }

    function Vy(yb, bb, Wy) {
      let Uy = ey(Wy);
      return Uy = -2 * Uy * Uy * Uy + 3 * Uy * Uy, bb * Uy + yb * (1 - Uy)
    }

    function Jy(yb, bb, Wy) {
      let Uy;
      return Uy = Math.abs(bb - yb) <= Wy ? bb : yb + Math.sign(bb - yb) * Wy, Uy
    }

    function gb(yb, bb, Wy) {
      const Uy = Cy(yb, bb);
      let hy;
      return hy = -Wy < Uy && Uy < Wy ? bb : Jy(yb, bb = yb + Uy, Wy), hy
    }

    function Gy(yb, bb, Wy) {
      return (yb - bb) / (Wy - bb)
    }

    function Oy(yb, bb, Wy) {
      return (Wy - bb) * yb + bb
    }

    function Ry(yb, bb) {
      const Wy = yb % bb;
      return 0 === Wy ? bb : Ry(bb, Wy)
    }
    Wy.r(bb), Wy.d(bb, {
      Clamp: () => ey,
      DeltaAngle: () => Cy,
      Denormalize: () => mb,
      ExtractAsInt: () => Uy,
      Hermite: () => By,
      Hermite1stDerivative: () => Ky,
      HighestCommonFactor: () => Ry,
      ILog2: () => Sy,
      InverseLerp: () => oy,
      Lerp: () => cb,
      LerpAngle: () => Py,
      MoveTowards: () => Jy,
      MoveTowardsAngle: () => gb,
      Normalize: () => ly,
      NormalizeRadians: () => qb,
      OutsideRange: () => fy,
      PercentToRange: () => Oy,
      PingPong: () => Ty,
      RandomRange: () => Zy,
      RangeToPercent: () => Gy,
      Repeat: () => Ey,
      SmoothStep: () => Vy,
      ToHex: () => sy,
      WithinEpsilon: () => hy
    })
  },
  35869: (yb, bb, Wy) => {
    function Uy(yb, bb) {
      const Wy = [];
      for (let Uy = 0; Uy < yb; ++Uy) Wy.push(bb());
      return Wy
    }

    function hy(yb, bb) {
      return Uy(yb, bb)
    }
    Wy.d(bb, {
      c: () => Uy,
      e: () => hy,
      h: () => Zy
    });
    const fy = ["push", "splice", "pop", "shift", "unshift"];

    function Zy(yb, bb) {
      const Wy = fy.map((Wy => function(yb, bb, Wy) {
        const Uy = yb[bb];
        if ("function" !== typeof Uy) return null;
        const hy = function() {
          const Uy = yb.length,
            fy = hy.previous.apply(yb, arguments);
          return Wy(bb, Uy), fy
        };
        return Uy.next = hy, hy.previous = Uy, yb[bb] = hy, () => {
          const Wy = hy.previous;
          if (!Wy) return;
          const Uy = hy.next;
          Uy ? (Wy.next = Uy, Uy.previous = Wy) : (Wy.next = void 0, yb[bb] = Wy), hy.next = void 0, hy.previous = void 0
        }
      }(yb, Wy, bb)));
      return () => {
        for (const yb of Wy) yb?.()
      }
    }
  },
  35909: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      e: () => hy
    });
    const Uy = {};

    function hy(yb, bb) {
      Uy[yb] = bb
    }

    function fy(yb) {
      return Uy[yb]
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);