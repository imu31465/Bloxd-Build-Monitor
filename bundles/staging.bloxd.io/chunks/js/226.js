export const id = 226;
export const ids = [226];
export const modules = {
  36715: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => pz,
      g: () => dz,
      j: () => Rz,
      k: () => Fz
    });
    var Ez = bz(36528),
      nz = bz(36526),
      iz = bz(36553),
      lz = bz(36564);

    function Mz(zz) {
      return Math.pow(zz, nz.i)
    }

    function tz(zz) {
      return zz <= .04045 ? .0773993808 * zz : Math.pow(.947867299 * (zz + .055), 2.4)
    }

    function Hz(zz) {
      return Math.pow(zz, nz.f)
    }

    function Oz(zz) {
      return zz <= .0031308 ? 12.92 * zz : 1.055 * Math.pow(zz, .41666) - .055
    }
    class pz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = zz, this.g = uz, this.b = bz
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
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[uz] = this.r, zz[uz + 1] = this.g, zz[uz + 2] = this.b, this
      }
      Fuz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pz.FromArrayToRef(zz, uz, this), this
      }
      toColor4() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new dz(this.r, this.g, this.b, zz)
      }
      obz() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(zz) {
        return new pz(this.r * zz.r, this.g * zz.g, this.b * zz.b)
      }
      multiplyToRef(zz, uz) {
        return uz.r = this.r * zz.r, uz.g = this.g * zz.g, uz.b = this.b * zz.b, uz
      }
      multiplyInPlace(zz) {
        return this.r *= zz.r, this.g *= zz.g, this.b *= zz.b, this
      }
      multiplyByFloats(zz, uz, bz) {
        return new pz(this.r * zz, this.g * uz, this.b * bz)
      }
      divide(zz) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(zz, uz) {
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
      minimizeInPlaceFromFloats(zz, uz, bz) {
        return this.r = Math.min(zz, this.r), this.g = Math.min(uz, this.g), this.b = Math.min(bz, this.b), this
      }
      maximizeInPlaceFromFloats(zz, uz, bz) {
        return this.r = Math.max(zz, this.r), this.g = Math.max(uz, this.g), this.b = Math.max(bz, this.b), this
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
      equalsFloats(zz, uz, bz) {
        return this.zlz(zz, uz, bz)
      }
      zlz(zz, uz, bz) {
        return this.r === zz && this.g === uz && this.b === bz
      }
      equalsWithEpsilon(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nz.b;
        return (0, iz.WithinEpsilon)(this.r, zz.r, uz) && (0, iz.WithinEpsilon)(this.g, zz.g, uz) && (0, iz.WithinEpsilon)(this.b, zz.b, uz)
      }
      nb() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(zz) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(zz) {
        return new pz(this.r * zz, this.g * zz, this.b * zz)
      }
      scaleInPlace(zz) {
        return this.r *= zz, this.g *= zz, this.b *= zz, this
      }
      scaleToRef(zz, uz) {
        return uz.r = this.r * zz, uz.g = this.g * zz, uz.b = this.b * zz, uz
      }
      scaleAndAddToRef(zz, uz) {
        return uz.r += this.r * zz, uz.g += this.g * zz, uz.b += this.b * zz, uz
      }
      clampToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        return bz.r = (0, iz.Clamp)(this.r, zz, uz), bz.g = (0, iz.Clamp)(this.g, zz, uz), bz.b = (0, iz.Clamp)(this.b, zz, uz), bz
      }
      add(zz) {
        return new pz(this.r + zz.r, this.g + zz.g, this.b + zz.b)
      }
      addInPlace(zz) {
        return this.r += zz.r, this.g += zz.g, this.b += zz.b, this
      }
      addInPlaceFromFloats(zz, uz, bz) {
        return this.r += zz, this.g += uz, this.b += bz, this
      }
      addToRef(zz, uz) {
        return uz.r = this.r + zz.r, uz.g = this.g + zz.g, uz.b = this.b + zz.b, uz
      }
      subtract(zz) {
        return new pz(this.r - zz.r, this.g - zz.g, this.b - zz.b)
      }
      subtractToRef(zz, uz) {
        return uz.r = this.r - zz.r, uz.g = this.g - zz.g, uz.b = this.b - zz.b, uz
      }
      Qbz(zz) {
        return this.r -= zz.r, this.g -= zz.g, this.b -= zz.b, this
      }
      subtractFromFloats(zz, uz, bz) {
        return new pz(this.r - zz, this.g - uz, this.b - bz)
      }
      subtractFromFloatsToRef(zz, uz, bz, Ez) {
        return Ez.r = this.r - zz, Ez.g = this.g - uz, Ez.b = this.b - bz, Ez
      }
      clone() {
        return new pz(this.r, this.g, this.b)
      }
      euz(zz) {
        return this.r = zz.r, this.g = zz.g, this.b = zz.b, this
      }
      P_(zz, uz, bz) {
        return this.r = zz, this.g = uz, this.b = bz, this
      }
      set(zz, uz, bz) {
        return this.P_(zz, uz, bz)
      }
      Vk(zz) {
        return this.r = this.g = this.b = zz, this
      }
      toHexString() {
        const zz = Math.round(255 * this.r),
          uz = Math.round(255 * this.g),
          bz = Math.round(255 * this.b);
        return "#" + (0, iz.ToHex)(zz) + (0, iz.ToHex)(uz) + (0, iz.ToHex)(bz)
      }
      fromHexString(zz) {
        return "#" !== zz.substring(0, 1) || 7 !== zz.length || (this.r = parseInt(zz.substring(1, 3), 16) / 255, this.g = parseInt(zz.substring(3, 5), 16) / 255, this.b = parseInt(zz.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new pz)
      }
      toHSVToRef(zz) {
        const uz = this.r,
          bz = this.g,
          Ez = this.b,
          nz = Math.max(uz, bz, Ez),
          iz = Math.min(uz, bz, Ez);
        let lz = 0,
          Mz = 0;
        const tz = nz,
          Hz = nz - iz;
        return 0 !== nz && (Mz = Hz / nz), nz != iz && (nz == uz ? (lz = (bz - Ez) / Hz, bz < Ez && (lz += 6)) : nz == bz ? lz = (Ez - uz) / Hz + 2 : nz == Ez && (lz = (uz - bz) / Hz + 4), lz *= 60), zz.r = lz, zz.g = Mz, zz.b = tz, zz
      }
      toLinearSpace() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = new pz;
        return this.toLinearSpaceToRef(uz, zz), uz
      }
      toLinearSpaceToRef(zz) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = tz(this.r), zz.g = tz(this.g), zz.b = tz(this.b)) : (zz.r = Mz(this.r), zz.g = Mz(this.g), zz.b = Mz(this.b)), this
      }
      toGammaSpace() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = new pz;
        return this.toGammaSpaceToRef(uz, zz), uz
      }
      toGammaSpaceToRef(zz) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = Oz(this.r), zz.g = Oz(this.g), zz.b = Oz(this.b)) : (zz.r = Hz(this.r), zz.g = Hz(this.g), zz.b = Hz(this.b)), this
      }
      static HSVtoRGBToRef(zz, uz, bz, Ez) {
        const nz = bz * uz,
          iz = zz / 60,
          lz = nz * (1 - Math.abs(iz % 2 - 1));
        let Mz = 0,
          tz = 0,
          Hz = 0;
        iz >= 0 && iz <= 1 ? (Mz = nz, tz = lz) : iz >= 1 && iz <= 2 ? (Mz = lz, tz = nz) : iz >= 2 && iz <= 3 ? (tz = nz, Hz = lz) : iz >= 3 && iz <= 4 ? (tz = lz, Hz = nz) : iz >= 4 && iz <= 5 ? (Mz = lz, Hz = nz) : iz >= 5 && iz <= 6 && (Mz = nz, Hz = lz);
        const Oz = bz - nz;
        return Ez.r = Mz + Oz, Ez.g = tz + Oz, Ez.b = Hz + Oz, Ez
      }
      static FromHSV(zz, uz, bz) {
        const Ez = new pz(0, 0, 0);
        return pz.HSVtoRGBToRef(zz, uz, bz, Ez), Ez
      }
      static FromHexString(zz) {
        return new pz(0, 0, 0).fromHexString(zz)
      }
      static FromArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pz(zz[uz], zz[uz + 1], zz[uz + 2])
      }
      static FromArrayToRef(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        bz.r = zz[uz], bz.g = zz[uz + 1], bz.b = zz[uz + 2]
      }
      static FromInts(zz, uz, bz) {
        return new pz(zz / 255, uz / 255, bz / 255)
      }
      static Lerp(zz, uz, bz) {
        const Ez = new pz(0, 0, 0);
        return pz.LerpToRef(zz, uz, bz, Ez), Ez
      }
      static LerpToRef(zz, uz, bz, Ez) {
        Ez.r = zz.r + (uz.r - zz.r) * bz, Ez.g = zz.g + (uz.g - zz.g) * bz, Ez.b = zz.b + (uz.b - zz.b) * bz
      }
      static Hermite(zz, uz, bz, Ez, nz) {
        const iz = nz * nz,
          lz = nz * iz,
          Mz = 2 * lz - 3 * iz + 1,
          tz = -2 * lz + 3 * iz,
          Hz = lz - 2 * iz + nz,
          Oz = lz - iz,
          dz = zz.r * Mz + bz.r * tz + uz.r * Hz + Ez.r * Oz,
          Fz = zz.g * Mz + bz.g * tz + uz.g * Hz + Ez.g * Oz,
          Zz = zz.b * Mz + bz.b * tz + uz.b * Hz + Ez.b * Oz;
        return new pz(dz, Fz, Zz)
      }
      static Hermite1stDerivative(zz, uz, bz, Ez, nz) {
        const iz = pz.Black();
        return this.Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz), iz
      }
      static Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz) {
        const lz = nz * nz;
        iz.r = 6 * (lz - nz) * zz.r + (3 * lz - 4 * nz + 1) * uz.r + 6 * (-lz + nz) * bz.r + (3 * lz - 2 * nz) * Ez.r, iz.g = 6 * (lz - nz) * zz.g + (3 * lz - 4 * nz + 1) * uz.g + 6 * (-lz + nz) * bz.g + (3 * lz - 2 * nz) * Ez.g, iz.b = 6 * (lz - nz) * zz.b + (3 * lz - 4 * nz + 1) * uz.b + 6 * (-lz + nz) * bz.b + (3 * lz - 2 * nz) * Ez.b
      }
      static Red() {
        return new pz(1, 0, 0)
      }
      static Green() {
        return new pz(0, 1, 0)
      }
      static Blue() {
        return new pz(0, 0, 1)
      }
      static Black() {
        return new pz(0, 0, 0)
      }
      static get BlackReadOnly() {
        return pz._BlackReadOnly
      }
      static White() {
        return new pz(1, 1, 1)
      }
      static Purple() {
        return new pz(.5, 0, .5)
      }
      static Magenta() {
        return new pz(1, 0, 1)
      }
      static Yellow() {
        return new pz(1, 1, 0)
      }
      static Gray() {
        return new pz(.5, .5, .5)
      }
      static Teal() {
        return new pz(0, 1, 1)
      }
      static Random() {
        return new pz(Math.random(), Math.random(), Math.random())
      }
    }
    pz._V8PerformanceHack = new pz(.5, .5, .5), pz._BlackReadOnly = pz.Black();
    class dz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = zz, this.g = uz, this.b = bz, this.a = Ez
      }
      obz() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[uz] = this.r, zz[uz + 1] = this.g, zz[uz + 2] = this.b, zz[uz + 3] = this.a, this
      }
      Fuz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = zz[uz], this.g = zz[uz + 1], this.b = zz[uz + 2], this.a = zz[uz + 3], this
      }
      equals(zz) {
        return zz && this.r === zz.r && this.g === zz.g && this.b === zz.b && this.a === zz.a
      }
      add(zz) {
        return new dz(this.r + zz.r, this.g + zz.g, this.b + zz.b, this.a + zz.a)
      }
      addToRef(zz, uz) {
        return uz.r = this.r + zz.r, uz.g = this.g + zz.g, uz.b = this.b + zz.b, uz.a = this.a + zz.a, uz
      }
      addInPlace(zz) {
        return this.r += zz.r, this.g += zz.g, this.b += zz.b, this.a += zz.a, this
      }
      addInPlaceFromFloats(zz, uz, bz, Ez) {
        return this.r += zz, this.g += uz, this.b += bz, this.a += Ez, this
      }
      subtract(zz) {
        return new dz(this.r - zz.r, this.g - zz.g, this.b - zz.b, this.a - zz.a)
      }
      subtractToRef(zz, uz) {
        return uz.r = this.r - zz.r, uz.g = this.g - zz.g, uz.b = this.b - zz.b, uz.a = this.a - zz.a, uz
      }
      Qbz(zz) {
        return this.r -= zz.r, this.g -= zz.g, this.b -= zz.b, this.a -= zz.a, this
      }
      subtractFromFloats(zz, uz, bz, Ez) {
        return new dz(this.r - zz, this.g - uz, this.b - bz, this.a - Ez)
      }
      subtractFromFloatsToRef(zz, uz, bz, Ez, nz) {
        return nz.r = this.r - zz, nz.g = this.g - uz, nz.b = this.b - bz, nz.a = this.a - Ez, nz
      }
      scale(zz) {
        return new dz(this.r * zz, this.g * zz, this.b * zz, this.a * zz)
      }
      scaleInPlace(zz) {
        return this.r *= zz, this.g *= zz, this.b *= zz, this.a *= zz, this
      }
      scaleToRef(zz, uz) {
        return uz.r = this.r * zz, uz.g = this.g * zz, uz.b = this.b * zz, uz.a = this.a * zz, uz
      }
      scaleAndAddToRef(zz, uz) {
        return uz.r += this.r * zz, uz.g += this.g * zz, uz.b += this.b * zz, uz.a += this.a * zz, uz
      }
      clampToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        return bz.r = (0, iz.Clamp)(this.r, zz, uz), bz.g = (0, iz.Clamp)(this.g, zz, uz), bz.b = (0, iz.Clamp)(this.b, zz, uz), bz.a = (0, iz.Clamp)(this.a, zz, uz), bz
      }
      multiply(zz) {
        return new dz(this.r * zz.r, this.g * zz.g, this.b * zz.b, this.a * zz.a)
      }
      multiplyToRef(zz, uz) {
        return uz.r = this.r * zz.r, uz.g = this.g * zz.g, uz.b = this.b * zz.b, uz.a = this.a * zz.a, uz
      }
      multiplyInPlace(zz) {
        return this.r *= zz.r, this.g *= zz.g, this.b *= zz.b, this.a *= zz.a, this
      }
      multiplyByFloats(zz, uz, bz, Ez) {
        return new dz(this.r * zz, this.g * uz, this.b * bz, this.a * Ez)
      }
      divide(zz) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(zz, uz) {
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
      minimizeInPlaceFromFloats(zz, uz, bz, Ez) {
        return this.r = Math.min(zz, this.r), this.g = Math.min(uz, this.g), this.b = Math.min(bz, this.b), this.a = Math.min(Ez, this.a), this
      }
      maximizeInPlaceFromFloats(zz, uz, bz, Ez) {
        return this.r = Math.max(zz, this.r), this.g = Math.max(uz, this.g), this.b = Math.max(bz, this.b), this.a = Math.max(Ez, this.a), this
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
      nb() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(zz) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nz.b;
        return (0, iz.WithinEpsilon)(this.r, zz.r, uz) && (0, iz.WithinEpsilon)(this.g, zz.g, uz) && (0, iz.WithinEpsilon)(this.b, zz.b, uz) && (0, iz.WithinEpsilon)(this.a, zz.a, uz)
      }
      zlz(zz, uz, bz, Ez) {
        return this.r === zz && this.g === uz && this.b === bz && this.a === Ez
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
        return (new dz).euz(this)
      }
      euz(zz) {
        return this.r = zz.r, this.g = zz.g, this.b = zz.b, this.a = zz.a, this
      }
      P_(zz, uz, bz, Ez) {
        return this.r = zz, this.g = uz, this.b = bz, this.a = Ez, this
      }
      set(zz, uz, bz, Ez) {
        return this.P_(zz, uz, bz, Ez)
      }
      Vk(zz) {
        return this.r = this.g = this.b = this.a = zz, this
      }
      toHexString() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = Math.round(255 * this.r),
          bz = Math.round(255 * this.g),
          Ez = Math.round(255 * this.b);
        if (zz) return "#" + (0, iz.ToHex)(uz) + (0, iz.ToHex)(bz) + (0, iz.ToHex)(Ez);
        const nz = Math.round(255 * this.a);
        return "#" + (0, iz.ToHex)(uz) + (0, iz.ToHex)(bz) + (0, iz.ToHex)(Ez) + (0, iz.ToHex)(nz)
      }
      fromHexString(zz) {
        return "#" !== zz.substring(0, 1) || 9 !== zz.length && 7 !== zz.length || (this.r = parseInt(zz.substring(1, 3), 16) / 255, this.g = parseInt(zz.substring(3, 5), 16) / 255, this.b = parseInt(zz.substring(5, 7), 16) / 255, 9 === zz.length && (this.a = parseInt(zz.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = new dz;
        return this.toLinearSpaceToRef(uz, zz), uz
      }
      toLinearSpaceToRef(zz) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = tz(this.r), zz.g = tz(this.g), zz.b = tz(this.b)) : (zz.r = Mz(this.r), zz.g = Mz(this.g), zz.b = Mz(this.b)), zz.a = this.a, this
      }
      toGammaSpace() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const uz = new dz;
        return this.toGammaSpaceToRef(uz, zz), uz
      }
      toGammaSpaceToRef(zz) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (zz.r = Oz(this.r), zz.g = Oz(this.g), zz.b = Oz(this.b)) : (zz.r = Hz(this.r), zz.g = Hz(this.g), zz.b = Hz(this.b)), zz.a = this.a, this
      }
      static FromHexString(zz) {
        return "#" !== zz.substring(0, 1) || 9 !== zz.length && 7 !== zz.length ? new dz(0, 0, 0, 0) : new dz(0, 0, 0, 1).fromHexString(zz)
      }
      static Lerp(zz, uz, bz) {
        return dz.LerpToRef(zz, uz, bz, new dz)
      }
      static LerpToRef(zz, uz, bz, Ez) {
        return Ez.r = zz.r + (uz.r - zz.r) * bz, Ez.g = zz.g + (uz.g - zz.g) * bz, Ez.b = zz.b + (uz.b - zz.b) * bz, Ez.a = zz.a + (uz.a - zz.a) * bz, Ez
      }
      static Hermite(zz, uz, bz, Ez, nz) {
        const iz = nz * nz,
          lz = nz * iz,
          Mz = 2 * lz - 3 * iz + 1,
          tz = -2 * lz + 3 * iz,
          Hz = lz - 2 * iz + nz,
          Oz = lz - iz,
          pz = zz.r * Mz + bz.r * tz + uz.r * Hz + Ez.r * Oz,
          Fz = zz.g * Mz + bz.g * tz + uz.g * Hz + Ez.g * Oz,
          Zz = zz.b * Mz + bz.b * tz + uz.b * Hz + Ez.b * Oz,
          Rz = zz.a * Mz + bz.a * tz + uz.a * Hz + Ez.a * Oz;
        return new dz(pz, Fz, Zz, Rz)
      }
      static Hermite1stDerivative(zz, uz, bz, Ez, nz) {
        const iz = new dz;
        return this.Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz), iz
      }
      static Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz) {
        const lz = nz * nz;
        iz.r = 6 * (lz - nz) * zz.r + (3 * lz - 4 * nz + 1) * uz.r + 6 * (-lz + nz) * bz.r + (3 * lz - 2 * nz) * Ez.r, iz.g = 6 * (lz - nz) * zz.g + (3 * lz - 4 * nz + 1) * uz.g + 6 * (-lz + nz) * bz.g + (3 * lz - 2 * nz) * Ez.g, iz.b = 6 * (lz - nz) * zz.b + (3 * lz - 4 * nz + 1) * uz.b + 6 * (-lz + nz) * bz.b + (3 * lz - 2 * nz) * Ez.b, iz.a = 6 * (lz - nz) * zz.a + (3 * lz - 4 * nz + 1) * uz.a + 6 * (-lz + nz) * bz.a + (3 * lz - 2 * nz) * Ez.a
      }
      static FromColor3(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new dz(zz.r, zz.g, zz.b, uz)
      }
      static FromArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new dz(zz[uz], zz[uz + 1], zz[uz + 2], zz[uz + 3])
      }
      static FromArrayToRef(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        bz.r = zz[uz], bz.g = zz[uz + 1], bz.b = zz[uz + 2], bz.a = zz[uz + 3]
      }
      static FromInts(zz, uz, bz, Ez) {
        return new dz(zz / 255, uz / 255, bz / 255, Ez / 255)
      }
      static CheckColors4(zz, uz) {
        if (zz.length === 3 * uz) {
          const uz = [];
          for (let bz = 0; bz < zz.length; bz += 3) {
            const Ez = bz / 3 * 4;
            uz[Ez] = zz[bz], uz[Ez + 1] = zz[bz + 1], uz[Ez + 2] = zz[bz + 2], uz[Ez + 3] = 1
          }
          return uz
        }
        return zz
      }
    }
    dz._V8PerformanceHack = new dz(.5, .5, .5, .5);
    class Fz {}
    Fz.Color3 = (0, Ez.d)(3, pz.Black), Fz.Color4 = (0, Ez.d)(3, (() => new dz(0, 0, 0, 0)));
    let Zz = !1;

    function Rz() {
      Zz || (Zz = !0, Object.defineProperties(pz.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(dz.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, lz.c)("BABYLON.Color3", pz), (0, lz.c)("BABYLON.Color4", dz))
    }
  },
  36526: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      f: () => Ez,
      i: () => nz
    });
    const Ez = 1 / 2.2,
      nz = 2.2;
    Math.sqrt(5);
    let iz = .001
  },
  36553: (zz, uz, bz) => {
    function Ez(zz) {
      return parseInt(zz.toString().replace(/\W/g, ""))
    }

    function nz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(zz - uz) <= bz
    }

    function iz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return zz < uz - Ez || zz > bz + Ez
    }

    function lz(zz, uz) {
      return zz === uz ? zz : Math.random() * (uz - zz) + zz
    }

    function Mz(zz, uz, bz) {
      return zz + (uz - zz) * bz
    }

    function tz(zz, uz, bz) {
      let Ez = Kz(uz - zz, 360);
      return Ez > 180 && (Ez -= 360), zz + Ez * dz(bz)
    }

    function Hz(zz, uz, bz) {
      let Ez;
      return Ez = zz != uz ? dz((bz - zz) / (uz - zz)) : 0, Ez
    }

    function Oz(zz, uz, bz, Ez, nz) {
      const iz = nz * nz,
        lz = nz * iz;
      return zz * (2 * lz - 3 * iz + 1) + bz * (-2 * lz + 3 * iz) + uz * (lz - 2 * iz + nz) + Ez * (lz - iz)
    }

    function pz(zz, uz, bz, Ez, nz) {
      const iz = nz * nz;
      return 6 * (iz - nz) * zz + (3 * iz - 4 * nz + 1) * uz + 6 * (-iz + nz) * bz + (3 * iz - 2 * nz) * Ez
    }

    function dz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(bz, Math.max(uz, zz))
    }

    function Fz(zz) {
      return zz -= 2 * Math.PI * Math.floor((zz + Math.PI) / (2 * Math.PI))
    }

    function Zz(zz) {
      const uz = zz.toString(16);
      return zz <= 15 ? ("0" + uz).toUpperCase() : uz.toUpperCase()
    }

    function Rz(zz) {
      if (Math.log2) return Math.floor(Math.log2(zz));
      if (zz < 0) return NaN;
      if (0 === zz) return -1 / 0;
      let uz = 0;
      if (zz < 1) {
        for (; zz < 1;) uz++, zz *= 2;
        uz = -uz
      } else if (zz > 1)
        for (; zz > 1;) uz++, zz = Math.floor(zz / 2);
      return uz
    }

    function Kz(zz, uz) {
      return zz - Math.floor(zz / uz) * uz
    }

    function wz(zz, uz, bz) {
      return (zz - uz) / (bz - uz)
    }

    function Xz(zz, uz, bz) {
      return zz * (bz - uz) + uz
    }

    function fz(zz, uz) {
      let bz = Kz(uz - zz, 360);
      return bz > 180 && (bz -= 360), bz
    }

    function sz(zz, uz) {
      const bz = Kz(zz, 2 * uz);
      return uz - Math.abs(bz - uz)
    }

    function rz(zz, uz, bz) {
      let Ez = dz(bz);
      return Ez = -2 * Ez * Ez * Ez + 3 * Ez * Ez, uz * Ez + zz * (1 - Ez)
    }

    function oz(zz, uz, bz) {
      let Ez;
      return Ez = Math.abs(uz - zz) <= bz ? uz : zz + Math.sign(uz - zz) * bz, Ez
    }

    function Nz(zz, uz, bz) {
      const Ez = fz(zz, uz);
      let nz;
      return nz = -bz < Ez && Ez < bz ? uz : oz(zz, uz = zz + Ez, bz), nz
    }

    function vz(zz, uz, bz) {
      return (zz - uz) / (bz - uz)
    }

    function xz(zz, uz, bz) {
      return (bz - uz) * zz + uz
    }

    function Jz(zz, uz) {
      const bz = zz % uz;
      return 0 === bz ? uz : Jz(uz, bz)
    }
    bz.r(uz), bz.d(uz, {
      Clamp: () => dz,
      DeltaAngle: () => fz,
      Denormalize: () => Xz,
      ExtractAsInt: () => Ez,
      Hermite: () => Oz,
      Hermite1stDerivative: () => pz,
      HighestCommonFactor: () => Jz,
      ILog2: () => Rz,
      InverseLerp: () => Hz,
      Lerp: () => Mz,
      LerpAngle: () => tz,
      MoveTowards: () => oz,
      MoveTowardsAngle: () => Nz,
      Normalize: () => wz,
      NormalizeRadians: () => Fz,
      OutsideRange: () => iz,
      PercentToRange: () => xz,
      PingPong: () => sz,
      RandomRange: () => lz,
      RangeToPercent: () => vz,
      Repeat: () => Kz,
      SmoothStep: () => rz,
      ToHex: () => Zz,
      WithinEpsilon: () => nz
    })
  },
  36528: (zz, uz, bz) => {
    function Ez(zz, uz) {
      const bz = [];
      for (let Ez = 0; Ez < zz; ++Ez) bz.push(uz());
      return bz
    }

    function nz(zz, uz) {
      return Ez(zz, uz)
    }
    bz.d(uz, {
      d: () => Ez,
      g: () => nz,
      h: () => lz
    });
    const iz = ["push", "splice", "pop", "shift", "unshift"];

    function lz(zz, uz) {
      const bz = iz.map((bz => function(zz, uz, bz) {
        const Ez = zz[uz];
        if ("function" !== typeof Ez) return null;
        const nz = function() {
          const Ez = zz.length,
            iz = nz.previous.apply(zz, arguments);
          return bz(uz, Ez), iz
        };
        return Ez.next = nz, nz.previous = Ez, zz[uz] = nz, () => {
          const bz = nz.previous;
          if (!bz) return;
          const Ez = nz.next;
          Ez ? (bz.next = Ez, Ez.previous = bz) : (bz.next = void 0, zz[uz] = bz), nz.next = void 0, nz.previous = void 0
        }
      }(zz, bz, uz)));
      return () => {
        for (const zz of bz) zz?.()
      }
    }
  },
  36564: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      c: () => nz
    });
    const Ez = {};

    function nz(zz, uz) {
      Ez[zz] = uz
    }

    function iz(zz) {
      return Ez[zz]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);