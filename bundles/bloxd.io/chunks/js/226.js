export const id = 226;
export const ids = [226];
export const modules = {
  36654: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => uz,
      d: () => Nz,
      e: () => Dz,
      f: () => bz
    });
    var Fz = sz(36487),
      Wz = sz(36479),
      Xz = sz(36507),
      Oz = sz(36518);

    function oz(zz) {
      return Math.pow(zz, Wz.i)
    }

    function vz(zz) {
      return zz <= .04045 ? .0773993808 * zz : Math.pow(.947867299 * (zz + .055), 2.4)
    }

    function Uz(zz) {
      return Math.pow(zz, Wz.f)
    }

    function Kz(zz) {
      return zz <= .0031308 ? 12.92 * zz : 1.055 * Math.pow(zz, .41666) - .055
    }
    class uz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = zz, this.g = tz, this.b = sz
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let zz = 255 * this.r | 0;
        return zz = 397 * zz ^ 255 * this.g, zz = 397 * zz ^ 255 * this.b, zz
      }
      toArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[tz] = this.r, zz[tz + 1] = this.g, zz[tz + 2] = this.b, this
      }
      Ztz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uz.FromArrayToRef(zz, tz, this), this
      }
      toColor4() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Nz(this.r, this.g, this.b, zz)
      }
      hsz() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(zz) {
        return new uz(this.r * zz.r, this.g * zz.g, this.b * zz.b)
      }
      multiplyToRef(zz, tz) {
        return tz.r = this.r * zz.r, tz.g = this.g * zz.g, tz.b = this.b * zz.b, tz
      }
      multiplyInPlace(zz) {
        return this.r *= zz.r, this.g *= zz.g, this.b *= zz.b, this
      }
      multiplyByFloats(zz, tz, sz) {
        return new uz(this.r * zz, this.g * tz, this.b * sz)
      }
      divide(zz) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(zz, tz) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(zz) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(zz) {
        return this.minimizeInPlaceFromFloats(zz.r, zz.g, zz.b)
      }
      maximizeInPlace(zz) {
        return this.maximizeInPlaceFromFloats(zz.r, zz.g, zz.b)
      }
      minimizeInPlaceFromFloats(zz, tz, sz) {
        return this.r = Math.min(zz, this.r), this.g = Math.min(tz, this.g), this.b = Math.min(sz, this.b), this
      }
      maximizeInPlaceFromFloats(zz, tz, sz) {
        return this.r = Math.max(zz, this.r), this.g = Math.max(tz, this.g), this.b = Math.max(sz, this.b), this
      }
      floorToRef(zz) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(zz) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(zz) {
        return zz && this.r === zz.r && this.g === zz.g && this.b === zz.b
      }
      equalsFloats(zz, tz, sz) {
        return this.wOz(zz, tz, sz)
      }
      wOz(zz, tz, sz) {
        return this.r === zz && this.g === tz && this.b === sz
      }
      equalsWithEpsilon(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz.c;
        return (0, Xz.WithinEpsilon)(this.r, zz.r, tz) && (0, Xz.WithinEpsilon)(this.g, zz.g, tz) && (0, Xz.WithinEpsilon)(this.b, zz.b, tz)
      }
      nt() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(zz) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(zz) {
        return new uz(this.r * zz, this.g * zz, this.b * zz)
      }
      scaleInPlace(zz) {
        return this.r *= zz, this.g *= zz, this.b *= zz, this
      }
      scaleToRef(zz, tz) {
        return tz.r = this.r * zz, tz.g = this.g * zz, tz.b = this.b * zz, tz
      }
      scaleAndAddToRef(zz, tz) {
        return tz.r += this.r * zz, tz.g += this.g * zz, tz.b += this.b * zz, tz
      }
      clampToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        return sz.r = (0, Xz.Clamp)(this.r, zz, tz), sz.g = (0, Xz.Clamp)(this.g, zz, tz), sz.b = (0, Xz.Clamp)(this.b, zz, tz), sz
      }
      add(zz) {
        return new uz(this.r + zz.r, this.g + zz.g, this.b + zz.b)
      }
      addInPlace(zz) {
        return this.r += zz.r, this.g += zz.g, this.b += zz.b, this
      }
      addInPlaceFromFloats(zz, tz, sz) {
        return this.r += zz, this.g += tz, this.b += sz, this
      }
      addToRef(zz, tz) {
        return tz.r = this.r + zz.r, tz.g = this.g + zz.g, tz.b = this.b + zz.b, tz
      }
      subtract(zz) {
        return new uz(this.r - zz.r, this.g - zz.g, this.b - zz.b)
      }
      subtractToRef(zz, tz) {
        return tz.r = this.r - zz.r, tz.g = this.g - zz.g, tz.b = this.b - zz.b, tz
      }
      oFz(zz) {
        return this.r -= zz.r, this.g -= zz.g, this.b -= zz.b, this
      }
      subtractFromFloats(zz, tz, sz) {
        return new uz(this.r - zz, this.g - tz, this.b - sz)
      }
      subtractFromFloatsToRef(zz, tz, sz, Fz) {
        return Fz.r = this.r - zz, Fz.g = this.g - tz, Fz.b = this.b - sz, Fz
      }
      clone() {
        return new uz(this.r, this.g, this.b)
      }
      vsz(zz) {
        return this.r = zz.r, this.g = zz.g, this.b = zz.b, this
      }
      m_(zz, tz, sz) {
        return this.r = zz, this.g = tz, this.b = sz, this
      }
      set(zz, tz, sz) {
        return this.m_(zz, tz, sz)
      }
      Z6(zz) {
        return this.r = this.g = this.b = zz, this
      }
      toHexString() {
        const zz = Math.round(255 * this.r),
          tz = Math.round(255 * this.g),
          sz = Math.round(255 * this.b);
        return "#" + (0, Xz.ToHex)(zz) + (0, Xz.ToHex)(tz) + (0, Xz.ToHex)(sz)
      }
      fromHexString(zz) {
        return "#" !== zz.substring(0, 1) || 7 !== zz.length || (this.r = parseInt(zz.substring(1, 3), 16) / 255, this.g = parseInt(zz.substring(3, 5), 16) / 255, this.b = parseInt(zz.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new uz)
      }
      toHSVToRef(zz) {
        const tz = this.r,
          sz = this.g,
          Fz = this.b,
          Wz = Math.max(tz, sz, Fz),
          Xz = Math.min(tz, sz, Fz);
        let Oz = 0,
          oz = 0;
        const vz = Wz,
          Uz = Wz - Xz;
        return 0 !== Wz && (oz = Uz / Wz), Wz != Xz && (Wz == tz ? (Oz = (sz - Fz) / Uz, sz < Fz && (Oz += 6)) : Wz == sz ? Oz = (Fz - tz) / Uz + 2 : Wz == Fz && (Oz = (tz - sz) / Uz + 4), Oz *= 60), zz.r = Oz, zz.g = oz, zz.b = vz, zz
      }
      toLinearSpace() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = new uz;
        return this.toLinearSpaceToRef(tz, zz), tz
      }
      toLinearSpaceToRef(zz) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = vz(this.r), zz.g = vz(this.g), zz.b = vz(this.b)) : (zz.r = oz(this.r), zz.g = oz(this.g), zz.b = oz(this.b)), this
      }
      toGammaSpace() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = new uz;
        return this.toGammaSpaceToRef(tz, zz), tz
      }
      toGammaSpaceToRef(zz) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = Kz(this.r), zz.g = Kz(this.g), zz.b = Kz(this.b)) : (zz.r = Uz(this.r), zz.g = Uz(this.g), zz.b = Uz(this.b)), this
      }
      static HSVtoRGBToRef(zz, tz, sz, Fz) {
        const Wz = sz * tz,
          Xz = zz / 60,
          Oz = Wz * (1 - Math.abs(Xz % 2 - 1));
        let oz = 0,
          vz = 0,
          Uz = 0;
        Xz >= 0 && Xz <= 1 ? (oz = Wz, vz = Oz) : Xz >= 1 && Xz <= 2 ? (oz = Oz, vz = Wz) : Xz >= 2 && Xz <= 3 ? (vz = Wz, Uz = Oz) : Xz >= 3 && Xz <= 4 ? (vz = Oz, Uz = Wz) : Xz >= 4 && Xz <= 5 ? (oz = Oz, Uz = Wz) : Xz >= 5 && Xz <= 6 && (oz = Wz, Uz = Oz);
        const Kz = sz - Wz;
        return Fz.r = oz + Kz, Fz.g = vz + Kz, Fz.b = Uz + Kz, Fz
      }
      static FromHSV(zz, tz, sz) {
        const Fz = new uz(0, 0, 0);
        return uz.HSVtoRGBToRef(zz, tz, sz, Fz), Fz
      }
      static FromHexString(zz) {
        return new uz(0, 0, 0).fromHexString(zz)
      }
      static FromArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new uz(zz[tz], zz[tz + 1], zz[tz + 2])
      }
      static FromArrayToRef(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        sz.r = zz[tz], sz.g = zz[tz + 1], sz.b = zz[tz + 2]
      }
      static FromInts(zz, tz, sz) {
        return new uz(zz / 255, tz / 255, sz / 255)
      }
      static Lerp(zz, tz, sz) {
        const Fz = new uz(0, 0, 0);
        return uz.LerpToRef(zz, tz, sz, Fz), Fz
      }
      static LerpToRef(zz, tz, sz, Fz) {
        Fz.r = zz.r + (tz.r - zz.r) * sz, Fz.g = zz.g + (tz.g - zz.g) * sz, Fz.b = zz.b + (tz.b - zz.b) * sz
      }
      static Hermite(zz, tz, sz, Fz, Wz) {
        const Xz = Wz * Wz,
          Oz = Wz * Xz,
          oz = 2 * Oz - 3 * Xz + 1,
          vz = -2 * Oz + 3 * Xz,
          Uz = Oz - 2 * Xz + Wz,
          Kz = Oz - Xz,
          Nz = zz.r * oz + sz.r * vz + tz.r * Uz + Fz.r * Kz,
          bz = zz.g * oz + sz.g * vz + tz.g * Uz + Fz.g * Kz,
          wz = zz.b * oz + sz.b * vz + tz.b * Uz + Fz.b * Kz;
        return new uz(Nz, bz, wz)
      }
      static Hermite1stDerivative(zz, tz, sz, Fz, Wz) {
        const Xz = uz.Black();
        return this.Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz), Xz
      }
      static Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = Wz * Wz;
        Xz.r = 6 * (Oz - Wz) * zz.r + (3 * Oz - 4 * Wz + 1) * tz.r + 6 * (-Oz + Wz) * sz.r + (3 * Oz - 2 * Wz) * Fz.r, Xz.g = 6 * (Oz - Wz) * zz.g + (3 * Oz - 4 * Wz + 1) * tz.g + 6 * (-Oz + Wz) * sz.g + (3 * Oz - 2 * Wz) * Fz.g, Xz.b = 6 * (Oz - Wz) * zz.b + (3 * Oz - 4 * Wz + 1) * tz.b + 6 * (-Oz + Wz) * sz.b + (3 * Oz - 2 * Wz) * Fz.b
      }
      static Red() {
        return new uz(1, 0, 0)
      }
      static Green() {
        return new uz(0, 1, 0)
      }
      static Blue() {
        return new uz(0, 0, 1)
      }
      static Black() {
        return new uz(0, 0, 0)
      }
      static get BlackReadOnly() {
        return uz._BlackReadOnly
      }
      static White() {
        return new uz(1, 1, 1)
      }
      static Purple() {
        return new uz(.5, 0, .5)
      }
      static Magenta() {
        return new uz(1, 0, 1)
      }
      static Yellow() {
        return new uz(1, 1, 0)
      }
      static Gray() {
        return new uz(.5, .5, .5)
      }
      static Teal() {
        return new uz(0, 1, 1)
      }
      static Random() {
        return new uz(Math.random(), Math.random(), Math.random())
      }
    }
    uz._V8PerformanceHack = new uz(.5, .5, .5), uz._BlackReadOnly = uz.Black();
    class Nz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = zz, this.g = tz, this.b = sz, this.a = Fz
      }
      hsz() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[tz] = this.r, zz[tz + 1] = this.g, zz[tz + 2] = this.b, zz[tz + 3] = this.a, this
      }
      Ztz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = zz[tz], this.g = zz[tz + 1], this.b = zz[tz + 2], this.a = zz[tz + 3], this
      }
      equals(zz) {
        return zz && this.r === zz.r && this.g === zz.g && this.b === zz.b && this.a === zz.a
      }
      add(zz) {
        return new Nz(this.r + zz.r, this.g + zz.g, this.b + zz.b, this.a + zz.a)
      }
      addToRef(zz, tz) {
        return tz.r = this.r + zz.r, tz.g = this.g + zz.g, tz.b = this.b + zz.b, tz.a = this.a + zz.a, tz
      }
      addInPlace(zz) {
        return this.r += zz.r, this.g += zz.g, this.b += zz.b, this.a += zz.a, this
      }
      addInPlaceFromFloats(zz, tz, sz, Fz) {
        return this.r += zz, this.g += tz, this.b += sz, this.a += Fz, this
      }
      subtract(zz) {
        return new Nz(this.r - zz.r, this.g - zz.g, this.b - zz.b, this.a - zz.a)
      }
      subtractToRef(zz, tz) {
        return tz.r = this.r - zz.r, tz.g = this.g - zz.g, tz.b = this.b - zz.b, tz.a = this.a - zz.a, tz
      }
      oFz(zz) {
        return this.r -= zz.r, this.g -= zz.g, this.b -= zz.b, this.a -= zz.a, this
      }
      subtractFromFloats(zz, tz, sz, Fz) {
        return new Nz(this.r - zz, this.g - tz, this.b - sz, this.a - Fz)
      }
      subtractFromFloatsToRef(zz, tz, sz, Fz, Wz) {
        return Wz.r = this.r - zz, Wz.g = this.g - tz, Wz.b = this.b - sz, Wz.a = this.a - Fz, Wz
      }
      scale(zz) {
        return new Nz(this.r * zz, this.g * zz, this.b * zz, this.a * zz)
      }
      scaleInPlace(zz) {
        return this.r *= zz, this.g *= zz, this.b *= zz, this.a *= zz, this
      }
      scaleToRef(zz, tz) {
        return tz.r = this.r * zz, tz.g = this.g * zz, tz.b = this.b * zz, tz.a = this.a * zz, tz
      }
      scaleAndAddToRef(zz, tz) {
        return tz.r += this.r * zz, tz.g += this.g * zz, tz.b += this.b * zz, tz.a += this.a * zz, tz
      }
      clampToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        return sz.r = (0, Xz.Clamp)(this.r, zz, tz), sz.g = (0, Xz.Clamp)(this.g, zz, tz), sz.b = (0, Xz.Clamp)(this.b, zz, tz), sz.a = (0, Xz.Clamp)(this.a, zz, tz), sz
      }
      multiply(zz) {
        return new Nz(this.r * zz.r, this.g * zz.g, this.b * zz.b, this.a * zz.a)
      }
      multiplyToRef(zz, tz) {
        return tz.r = this.r * zz.r, tz.g = this.g * zz.g, tz.b = this.b * zz.b, tz.a = this.a * zz.a, tz
      }
      multiplyInPlace(zz) {
        return this.r *= zz.r, this.g *= zz.g, this.b *= zz.b, this.a *= zz.a, this
      }
      multiplyByFloats(zz, tz, sz, Fz) {
        return new Nz(this.r * zz, this.g * tz, this.b * sz, this.a * Fz)
      }
      divide(zz) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(zz, tz) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(zz) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(zz) {
        return this.r = Math.min(this.r, zz.r), this.g = Math.min(this.g, zz.g), this.b = Math.min(this.b, zz.b), this.a = Math.min(this.a, zz.a), this
      }
      maximizeInPlace(zz) {
        return this.r = Math.max(this.r, zz.r), this.g = Math.max(this.g, zz.g), this.b = Math.max(this.b, zz.b), this.a = Math.max(this.a, zz.a), this
      }
      minimizeInPlaceFromFloats(zz, tz, sz, Fz) {
        return this.r = Math.min(zz, this.r), this.g = Math.min(tz, this.g), this.b = Math.min(sz, this.b), this.a = Math.min(Fz, this.a), this
      }
      maximizeInPlaceFromFloats(zz, tz, sz, Fz) {
        return this.r = Math.max(zz, this.r), this.g = Math.max(tz, this.g), this.b = Math.max(sz, this.b), this.a = Math.max(Fz, this.a), this
      }
      floorToRef(zz) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(zz) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      nt() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(zz) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wz.c;
        return (0, Xz.WithinEpsilon)(this.r, zz.r, tz) && (0, Xz.WithinEpsilon)(this.g, zz.g, tz) && (0, Xz.WithinEpsilon)(this.b, zz.b, tz) && (0, Xz.WithinEpsilon)(this.a, zz.a, tz)
      }
      wOz(zz, tz, sz, Fz) {
        return this.r === zz && this.g === tz && this.b === sz && this.a === Fz
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let zz = 255 * this.r | 0;
        return zz = 397 * zz ^ 255 * this.g, zz = 397 * zz ^ 255 * this.b, zz = 397 * zz ^ 255 * this.a, zz
      }
      clone() {
        return (new Nz).vsz(this)
      }
      vsz(zz) {
        return this.r = zz.r, this.g = zz.g, this.b = zz.b, this.a = zz.a, this
      }
      m_(zz, tz, sz, Fz) {
        return this.r = zz, this.g = tz, this.b = sz, this.a = Fz, this
      }
      set(zz, tz, sz, Fz) {
        return this.m_(zz, tz, sz, Fz)
      }
      Z6(zz) {
        return this.r = this.g = this.b = this.a = zz, this
      }
      toHexString() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = Math.round(255 * this.r),
          sz = Math.round(255 * this.g),
          Fz = Math.round(255 * this.b);
        if (zz) return "#" + (0, Xz.ToHex)(tz) + (0, Xz.ToHex)(sz) + (0, Xz.ToHex)(Fz);
        const Wz = Math.round(255 * this.a);
        return "#" + (0, Xz.ToHex)(tz) + (0, Xz.ToHex)(sz) + (0, Xz.ToHex)(Fz) + (0, Xz.ToHex)(Wz)
      }
      fromHexString(zz) {
        return "#" !== zz.substring(0, 1) || 9 !== zz.length && 7 !== zz.length || (this.r = parseInt(zz.substring(1, 3), 16) / 255, this.g = parseInt(zz.substring(3, 5), 16) / 255, this.b = parseInt(zz.substring(5, 7), 16) / 255, 9 === zz.length && (this.a = parseInt(zz.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = new Nz;
        return this.toLinearSpaceToRef(tz, zz), tz
      }
      toLinearSpaceToRef(zz) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = vz(this.r), zz.g = vz(this.g), zz.b = vz(this.b)) : (zz.r = oz(this.r), zz.g = oz(this.g), zz.b = oz(this.b)), zz.a = this.a, this
      }
      toGammaSpace() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const tz = new Nz;
        return this.toGammaSpaceToRef(tz, zz), tz
      }
      toGammaSpaceToRef(zz) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = Kz(this.r), zz.g = Kz(this.g), zz.b = Kz(this.b)) : (zz.r = Uz(this.r), zz.g = Uz(this.g), zz.b = Uz(this.b)), zz.a = this.a, this
      }
      static FromHexString(zz) {
        return "#" !== zz.substring(0, 1) || 9 !== zz.length && 7 !== zz.length ? new Nz(0, 0, 0, 0) : new Nz(0, 0, 0, 1).fromHexString(zz)
      }
      static Lerp(zz, tz, sz) {
        return Nz.LerpToRef(zz, tz, sz, new Nz)
      }
      static LerpToRef(zz, tz, sz, Fz) {
        return Fz.r = zz.r + (tz.r - zz.r) * sz, Fz.g = zz.g + (tz.g - zz.g) * sz, Fz.b = zz.b + (tz.b - zz.b) * sz, Fz.a = zz.a + (tz.a - zz.a) * sz, Fz
      }
      static Hermite(zz, tz, sz, Fz, Wz) {
        const Xz = Wz * Wz,
          Oz = Wz * Xz,
          oz = 2 * Oz - 3 * Xz + 1,
          vz = -2 * Oz + 3 * Xz,
          Uz = Oz - 2 * Xz + Wz,
          Kz = Oz - Xz,
          uz = zz.r * oz + sz.r * vz + tz.r * Uz + Fz.r * Kz,
          bz = zz.g * oz + sz.g * vz + tz.g * Uz + Fz.g * Kz,
          wz = zz.b * oz + sz.b * vz + tz.b * Uz + Fz.b * Kz,
          Dz = zz.a * oz + sz.a * vz + tz.a * Uz + Fz.a * Kz;
        return new Nz(uz, bz, wz, Dz)
      }
      static Hermite1stDerivative(zz, tz, sz, Fz, Wz) {
        const Xz = new Nz;
        return this.Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz), Xz
      }
      static Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = Wz * Wz;
        Xz.r = 6 * (Oz - Wz) * zz.r + (3 * Oz - 4 * Wz + 1) * tz.r + 6 * (-Oz + Wz) * sz.r + (3 * Oz - 2 * Wz) * Fz.r, Xz.g = 6 * (Oz - Wz) * zz.g + (3 * Oz - 4 * Wz + 1) * tz.g + 6 * (-Oz + Wz) * sz.g + (3 * Oz - 2 * Wz) * Fz.g, Xz.b = 6 * (Oz - Wz) * zz.b + (3 * Oz - 4 * Wz + 1) * tz.b + 6 * (-Oz + Wz) * sz.b + (3 * Oz - 2 * Wz) * Fz.b, Xz.a = 6 * (Oz - Wz) * zz.a + (3 * Oz - 4 * Wz + 1) * tz.a + 6 * (-Oz + Wz) * sz.a + (3 * Oz - 2 * Wz) * Fz.a
      }
      static FromColor3(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Nz(zz.r, zz.g, zz.b, tz)
      }
      static FromArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Nz(zz[tz], zz[tz + 1], zz[tz + 2], zz[tz + 3])
      }
      static FromArrayToRef(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        sz.r = zz[tz], sz.g = zz[tz + 1], sz.b = zz[tz + 2], sz.a = zz[tz + 3]
      }
      static FromInts(zz, tz, sz, Fz) {
        return new Nz(zz / 255, tz / 255, sz / 255, Fz / 255)
      }
      static CheckColors4(zz, tz) {
        if (zz.length === 3 * tz) {
          const tz = [];
          for (let sz = 0; sz < zz.length; sz += 3) {
            const Fz = sz / 3 * 4;
            tz[Fz] = zz[sz], tz[Fz + 1] = zz[sz + 1], tz[Fz + 2] = zz[sz + 2], tz[Fz + 3] = 1
          }
          return tz
        }
        return zz
      }
    }
    Nz._V8PerformanceHack = new Nz(.5, .5, .5, .5);
    class bz {}
    bz.Color3 = (0, Fz.c)(3, uz.Black), bz.Color4 = (0, Fz.c)(3, (() => new Nz(0, 0, 0, 0)));
    let wz = !1;

    function Dz() {
      wz || (wz = !0, Object.defineProperties(uz.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Nz.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Oz.g)("BABYLON.Color3", uz), (0, Oz.g)("BABYLON.Color4", Nz))
    }
  },
  36479: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Xz,
      f: () => Fz,
      i: () => Wz
    });
    const Fz = 1 / 2.2,
      Wz = 2.2;
    Math.sqrt(5);
    let Xz = .001
  },
  36507: (zz, tz, sz) => {
    function Fz(zz) {
      return parseInt(zz.toString().replace(/\W/g, ""))
    }

    function Wz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(zz - tz) <= sz
    }

    function Xz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return zz < tz - Fz || zz > sz + Fz
    }

    function Oz(zz, tz) {
      return zz === tz ? zz : Math.random() * (tz - zz) + zz
    }

    function oz(zz, tz, sz) {
      return zz + (tz - zz) * sz
    }

    function vz(zz, tz, sz) {
      let Fz = gz(tz - zz, 360);
      return Fz > 180 && (Fz -= 360), zz + Fz * Nz(sz)
    }

    function Uz(zz, tz, sz) {
      let Fz;
      return Fz = zz != tz ? Nz((sz - zz) / (tz - zz)) : 0, Fz
    }

    function Kz(zz, tz, sz, Fz, Wz) {
      const Xz = Wz * Wz,
        Oz = Wz * Xz;
      return zz * (2 * Oz - 3 * Xz + 1) + sz * (-2 * Oz + 3 * Xz) + tz * (Oz - 2 * Xz + Wz) + Fz * (Oz - Xz)
    }

    function uz(zz, tz, sz, Fz, Wz) {
      const Xz = Wz * Wz;
      return 6 * (Xz - Wz) * zz + (3 * Xz - 4 * Wz + 1) * tz + 6 * (-Xz + Wz) * sz + (3 * Xz - 2 * Wz) * Fz
    }

    function Nz(zz) {
      let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(sz, Math.max(tz, zz))
    }

    function bz(zz) {
      return zz -= 2 * Math.PI * Math.floor((zz + Math.PI) / (2 * Math.PI))
    }

    function wz(zz) {
      const tz = zz.toString(16);
      return zz <= 15 ? ("0" + tz).toUpperCase() : tz.toUpperCase()
    }

    function Dz(zz) {
      if (Math.log2) return Math.floor(Math.log2(zz));
      if (zz < 0) return NaN;
      if (0 === zz) return -1 / 0;
      let tz = 0;
      if (zz < 1) {
        for (; zz < 1;) tz++, zz *= 2;
        tz = -tz
      } else if (zz > 1)
        for (; zz > 1;) tz++, zz = Math.floor(zz / 2);
      return tz
    }

    function gz(zz, tz) {
      return zz - Math.floor(zz / tz) * tz
    }

    function Hz(zz, tz, sz) {
      return (zz - tz) / (sz - tz)
    }

    function Bz(zz, tz, sz) {
      return zz * (sz - tz) + tz
    }

    function Pz(zz, tz) {
      let sz = gz(tz - zz, 360);
      return sz > 180 && (sz -= 360), sz
    }

    function rz(zz, tz) {
      const sz = gz(zz, 2 * tz);
      return tz - Math.abs(sz - tz)
    }

    function Yz(zz, tz, sz) {
      let Fz = Nz(sz);
      return Fz = -2 * Fz * Fz * Fz + 3 * Fz * Fz, tz * Fz + zz * (1 - Fz)
    }

    function xz(zz, tz, sz) {
      let Fz;
      return Fz = Math.abs(tz - zz) <= sz ? tz : zz + Math.sign(tz - zz) * sz, Fz
    }

    function mz(zz, tz, sz) {
      const Fz = Pz(zz, tz);
      let Wz;
      return Wz = -sz < Fz && Fz < sz ? tz : xz(zz, tz = zz + Fz, sz), Wz
    }

    function Jz(zz, tz, sz) {
      return (zz - tz) / (sz - tz)
    }

    function Iz(zz, tz, sz) {
      return (sz - tz) * zz + tz
    }

    function Cz(zz, tz) {
      const sz = zz % tz;
      return 0 === sz ? tz : Cz(tz, sz)
    }
    sz.r(tz), sz.d(tz, {
      Clamp: () => Nz,
      DeltaAngle: () => Pz,
      Denormalize: () => Bz,
      ExtractAsInt: () => Fz,
      Hermite: () => Kz,
      Hermite1stDerivative: () => uz,
      HighestCommonFactor: () => Cz,
      ILog2: () => Dz,
      InverseLerp: () => Uz,
      Lerp: () => oz,
      LerpAngle: () => vz,
      MoveTowards: () => xz,
      MoveTowardsAngle: () => mz,
      Normalize: () => Hz,
      NormalizeRadians: () => bz,
      OutsideRange: () => Xz,
      PercentToRange: () => Iz,
      PingPong: () => rz,
      RandomRange: () => Oz,
      RangeToPercent: () => Jz,
      Repeat: () => gz,
      SmoothStep: () => Yz,
      ToHex: () => wz,
      WithinEpsilon: () => Wz
    })
  },
  36487: (zz, tz, sz) => {
    function Fz(zz, tz) {
      const sz = [];
      for (let Fz = 0; Fz < zz; ++Fz) sz.push(tz());
      return sz
    }

    function Wz(zz, tz) {
      return Fz(zz, tz)
    }
    sz.d(tz, {
      c: () => Fz,
      d: () => Wz,
      f: () => Oz
    });
    const Xz = ["push", "splice", "pop", "shift", "unshift"];

    function Oz(zz, tz) {
      const sz = Xz.map((sz => function(zz, tz, sz) {
        const Fz = zz[tz];
        if ("function" !== typeof Fz) return null;
        const Wz = function() {
          const Fz = zz.length,
            Xz = Wz.previous.apply(zz, arguments);
          return sz(tz, Fz), Xz
        };
        return Fz.next = Wz, Wz.previous = Fz, zz[tz] = Wz, () => {
          const sz = Wz.previous;
          if (!sz) return;
          const Fz = Wz.next;
          Fz ? (sz.next = Fz, Fz.previous = sz) : (sz.next = void 0, zz[tz] = sz), Wz.next = void 0, Wz.previous = void 0
        }
      }(zz, sz, tz)));
      return () => {
        for (const zz of sz) zz?.()
      }
    }
  },
  36518: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Wz
    });
    const Fz = {};

    function Wz(zz, tz) {
      Fz[zz] = tz
    }

    function Xz(zz) {
      return Fz[zz]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);