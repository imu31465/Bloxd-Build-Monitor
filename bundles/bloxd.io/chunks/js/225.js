export const id = 225;
export const ids = [225];
export const modules = {
  36502: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(36505);
    class Wz {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Wz.Instances = [], Wz.OnEnginesDisposedObservable = new Fz.c, Wz._LastCreatedScene = null, Wz.UseFallbackTexture = !0, Wz.FallbackTexture = ""
  },
  36493: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Fz
    });
    class Fz {
      static SetMatrixPrecision(zz) {
        if (Fz.MatrixTrackPrecisionChange = !1, zz && !Fz.MatrixUse64Bits && Fz.MatrixTrackedMatrices)
          for (let tz = 0; tz < Fz.MatrixTrackedMatrices.length; ++tz) {
            const zz = Fz.MatrixTrackedMatrices[tz],
              sz = zz._m;
            zz._m = new Array(16);
            for (let tz = 0; tz < 16; ++tz) zz._m[tz] = sz[tz]
          }
        Fz.MatrixUse64Bits = zz, Fz.MatrixCurrentType = Fz.MatrixUse64Bits ? Array : Float32Array, Fz.MatrixTrackedMatrices = null
      }
    }
    Fz.MatrixUse64Bits = !1, Fz.MatrixTrackPrecisionChange = !0, Fz.MatrixCurrentType = Float32Array, Fz.MatrixTrackedMatrices = []
  },
  36513: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => oz,
      d: () => Uz,
      h: () => vz,
      i: () => Fz,
      l: () => Xz,
      o: () => Oz
    });
    class Fz {}

    function Wz(zz) {
      zz.updateFlag = Fz._UpdateFlagSeed++
    }

    function Xz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Wz = zz.hsz(),
        Xz = tz.hsz(),
        Oz = Wz[0],
        oz = Wz[1],
        vz = Wz[2],
        Uz = Wz[3],
        Kz = Wz[4],
        uz = Wz[5],
        Nz = Wz[6],
        bz = Wz[7],
        wz = Wz[8],
        Dz = Wz[9],
        gz = Wz[10],
        Hz = Wz[11],
        Bz = Wz[12],
        Pz = Wz[13],
        rz = Wz[14],
        Yz = Wz[15],
        xz = Xz[0],
        mz = Xz[1],
        Jz = Xz[2],
        Iz = Xz[3],
        Cz = Xz[4],
        ez = Xz[5],
        Zz = Xz[6],
        Gz = Xz[7],
        Tz = Xz[8],
        cz = Xz[9],
        jz = Xz[10],
        Az = Xz[11],
        yz = Xz[12],
        Mz = Xz[13],
        dz = Xz[14],
        hz = Xz[15];
      sz[Fz] = Oz * xz + oz * Cz + vz * Tz + Uz * yz, sz[Fz + 1] = Oz * mz + oz * ez + vz * cz + Uz * Mz, sz[Fz + 2] = Oz * Jz + oz * Zz + vz * jz + Uz * dz, sz[Fz + 3] = Oz * Iz + oz * Gz + vz * Az + Uz * hz, sz[Fz + 4] = Kz * xz + uz * Cz + Nz * Tz + bz * yz, sz[Fz + 5] = Kz * mz + uz * ez + Nz * cz + bz * Mz, sz[Fz + 6] = Kz * Jz + uz * Zz + Nz * jz + bz * dz, sz[Fz + 7] = Kz * Iz + uz * Gz + Nz * Az + bz * hz, sz[Fz + 8] = wz * xz + Dz * Cz + gz * Tz + Hz * yz, sz[Fz + 9] = wz * mz + Dz * ez + gz * cz + Hz * Mz, sz[Fz + 10] = wz * Jz + Dz * Zz + gz * jz + Hz * dz, sz[Fz + 11] = wz * Iz + Dz * Gz + gz * Az + Hz * hz, sz[Fz + 12] = Bz * xz + Pz * Cz + rz * Tz + Yz * yz, sz[Fz + 13] = Bz * mz + Pz * ez + rz * cz + Yz * Mz, sz[Fz + 14] = Bz * Jz + Pz * Zz + rz * jz + Yz * dz, sz[Fz + 15] = Bz * Iz + Pz * Gz + rz * Az + Yz * hz
    }

    function Oz(zz, tz, sz) {
      let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Xz(zz, tz, sz.hsz(), Fz), Wz(sz)
    }

    function oz(zz, tz) {
      let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Fz = zz.hsz();
      tz[sz] = Fz[0], tz[sz + 1] = Fz[1], tz[sz + 2] = Fz[2], tz[sz + 3] = Fz[3], tz[sz + 4] = Fz[4], tz[sz + 5] = Fz[5], tz[sz + 6] = Fz[6], tz[sz + 7] = Fz[7], tz[sz + 8] = Fz[8], tz[sz + 9] = Fz[9], tz[sz + 10] = Fz[10], tz[sz + 11] = Fz[11], tz[sz + 12] = Fz[12], tz[sz + 13] = Fz[13], tz[sz + 14] = Fz[14], tz[sz + 15] = Fz[15]
    }

    function vz(zz, tz) {
      const sz = Uz(zz, tz.hsz());
      return sz && Wz(tz), sz
    }

    function Uz(zz, tz) {
      const sz = zz.hsz(),
        Fz = sz[0],
        Wz = sz[1],
        Xz = sz[2],
        Oz = sz[3],
        oz = sz[4],
        vz = sz[5],
        Uz = sz[6],
        Kz = sz[7],
        uz = sz[8],
        Nz = sz[9],
        bz = sz[10],
        wz = sz[11],
        Dz = sz[12],
        gz = sz[13],
        Hz = sz[14],
        Bz = sz[15],
        Pz = bz * Bz - Hz * wz,
        rz = Nz * Bz - gz * wz,
        Yz = Nz * Hz - gz * bz,
        xz = uz * Bz - Dz * wz,
        mz = uz * Hz - bz * Dz,
        Jz = uz * gz - Dz * Nz,
        Iz = +(vz * Pz - Uz * rz + Kz * Yz),
        Cz = -(oz * Pz - Uz * xz + Kz * mz),
        ez = +(oz * rz - vz * xz + Kz * Jz),
        Zz = -(oz * Yz - vz * mz + Uz * Jz),
        Gz = Fz * Iz + Wz * Cz + Xz * ez + Oz * Zz;
      if (0 === Gz) return !1;
      const Tz = 1 / Gz,
        cz = Uz * Bz - Hz * Kz,
        jz = vz * Bz - gz * Kz,
        Az = vz * Hz - gz * Uz,
        yz = oz * Bz - Dz * Kz,
        Mz = oz * Hz - Dz * Uz,
        dz = oz * gz - Dz * vz,
        hz = Uz * wz - bz * Kz,
        Qz = vz * wz - Nz * Kz,
        kz = vz * bz - Nz * Uz,
        iz = oz * wz - uz * Kz,
        Lz = oz * bz - uz * Uz,
        lz = oz * Nz - uz * vz,
        nz = -(Wz * Pz - Xz * rz + Oz * Yz),
        az = +(Fz * Pz - Xz * xz + Oz * mz),
        qz = -(Fz * rz - Wz * xz + Oz * Jz),
        Sz = +(Fz * Yz - Wz * mz + Xz * Jz),
        Vz = +(Wz * cz - Xz * jz + Oz * Az),
        Rz = -(Fz * cz - Xz * yz + Oz * Mz),
        pz = +(Fz * jz - Wz * yz + Oz * dz),
        fz = -(Fz * Az - Wz * Mz + Xz * dz),
        Ez = -(Wz * hz - Xz * Qz + Oz * kz),
        zt = +(Fz * hz - Xz * iz + Oz * Lz),
        tt = -(Fz * Qz - Wz * iz + Oz * lz),
        st = +(Fz * kz - Wz * Lz + Xz * lz);
      return tz[0] = Iz * Tz, tz[1] = nz * Tz, tz[2] = Vz * Tz, tz[3] = Ez * Tz, tz[4] = Cz * Tz, tz[5] = az * Tz, tz[6] = Rz * Tz, tz[7] = zt * Tz, tz[8] = ez * Tz, tz[9] = qz * Tz, tz[10] = pz * Tz, tz[11] = tt * Tz, tz[12] = Zz * Tz, tz[13] = Sz * Tz, tz[14] = fz * Tz, tz[15] = st * Tz, !0
    }
    Fz._UpdateFlagSeed = 0
  },
  36475: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Dz,
      h: () => wz,
      k: () => rz,
      m: () => Hz,
      n: () => uz,
      p: () => Nz,
      q: () => bz
    });
    var Fz = sz(36479),
      Wz = sz(36487),
      Xz = sz(36493),
      Oz = sz(36502),
      oz = sz(36507),
      vz = sz(36513),
      Uz = sz(36518);
    const Kz = zz => parseInt(zz.toString().replace(/\W/g, ""));
    class uz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = zz, this.y = tz
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let zz = Kz(this.x);
        return zz = 397 * zz ^ Kz(this.y), zz
      }
      toArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[tz] = this.x, zz[tz + 1] = this.y, this
      }
      Ztz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uz.FromArrayToRef(zz, tz, this), this
      }
      hsz() {
        return [this.x, this.y]
      }
      vsz(zz) {
        return this.x = zz.x, this.y = zz.y, this
      }
      m_(zz, tz) {
        return this.x = zz, this.y = tz, this
      }
      set(zz, tz) {
        return this.m_(zz, tz)
      }
      Z6(zz) {
        return this.m_(zz, zz)
      }
      add(zz) {
        return new uz(this.x + zz.x, this.y + zz.y)
      }
      addToRef(zz, tz) {
        return tz.x = this.x + zz.x, tz.y = this.y + zz.y, tz
      }
      addInPlace(zz) {
        return this.x += zz.x, this.y += zz.y, this
      }
      addInPlaceFromFloats(zz, tz) {
        return this.x += zz, this.y += tz, this
      }
      addVector3(zz) {
        return new uz(this.x + zz.x, this.y + zz.y)
      }
      subtract(zz) {
        return new uz(this.x - zz.x, this.y - zz.y)
      }
      subtractToRef(zz, tz) {
        return tz.x = this.x - zz.x, tz.y = this.y - zz.y, tz
      }
      oFz(zz) {
        return this.x -= zz.x, this.y -= zz.y, this
      }
      multiplyInPlace(zz) {
        return this.x *= zz.x, this.y *= zz.y, this
      }
      multiply(zz) {
        return new uz(this.x * zz.x, this.y * zz.y)
      }
      multiplyToRef(zz, tz) {
        return tz.x = this.x * zz.x, tz.y = this.y * zz.y, tz
      }
      multiplyByFloats(zz, tz) {
        return new uz(this.x * zz, this.y * tz)
      }
      divide(zz) {
        return new uz(this.x / zz.x, this.y / zz.y)
      }
      divideToRef(zz, tz) {
        return tz.x = this.x / zz.x, tz.y = this.y / zz.y, tz
      }
      divideInPlace(zz) {
        return this.x = this.x / zz.x, this.y = this.y / zz.y, this
      }
      minimizeInPlace(zz) {
        return this.minimizeInPlaceFromFloats(zz.x, zz.y)
      }
      maximizeInPlace(zz) {
        return this.maximizeInPlaceFromFloats(zz.x, zz.y)
      }
      minimizeInPlaceFromFloats(zz, tz) {
        return this.x = Math.min(zz, this.x), this.y = Math.min(tz, this.y), this
      }
      maximizeInPlaceFromFloats(zz, tz) {
        return this.x = Math.max(zz, this.x), this.y = Math.max(tz, this.y), this
      }
      subtractFromFloats(zz, tz) {
        return new uz(this.x - zz, this.y - tz)
      }
      subtractFromFloatsToRef(zz, tz, sz) {
        return sz.x = this.x - zz, sz.y = this.y - tz, sz
      }
      nt() {
        return new uz(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(zz) {
        return zz.x = -this.x, zz.y = -this.y, zz
      }
      scaleInPlace(zz) {
        return this.x *= zz, this.y *= zz, this
      }
      scale(zz) {
        return new uz(this.x * zz, this.y * zz)
      }
      scaleToRef(zz, tz) {
        return tz.x = this.x * zz, tz.y = this.y * zz, tz
      }
      scaleAndAddToRef(zz, tz) {
        return tz.x += this.x * zz, tz.y += this.y * zz, tz
      }
      equals(zz) {
        return zz && this.x === zz.x && this.y === zz.y
      }
      equalsWithEpsilon(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fz.c;
        return zz && (0, oz.WithinEpsilon)(this.x, zz.x, tz) && (0, oz.WithinEpsilon)(this.y, zz.y, tz)
      }
      wOz(zz, tz) {
        return this.x === zz && this.y === tz
      }
      floor() {
        return new uz(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(zz) {
        return zz.x = Math.floor(this.x), zz.y = Math.floor(this.y), zz
      }
      fract() {
        return new uz(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(zz) {
        return zz.x = this.x - Math.floor(this.x), zz.y = this.y - Math.floor(this.y), zz
      }
      rotate(zz) {
        return this.rotateToRef(zz, new uz)
      }
      rotateToRef(zz, tz) {
        const sz = Math.cos(zz),
          Fz = Math.sin(zz);
        return tz.x = sz * this.x - Fz * this.y, tz.y = Fz * this.x + sz * this.y, tz
      }
      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }
      lengthSquared() {
        return this.x * this.x + this.y * this.y
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(zz) {
        return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
      }
      normalizeToNew() {
        const zz = new uz;
        return this.normalizeToRef(zz), zz
      }
      normalizeToRef(zz) {
        const tz = this.length();
        return 0 === tz || 1 === tz ? (zz.x = this.x, zz.y = this.y, zz) : this.scaleToRef(1 / tz, zz)
      }
      clone() {
        return new uz(this.x, this.y)
      }
      dot(zz) {
        return this.x * zz.x + this.y * zz.y
      }
      static Zero() {
        return new uz(0, 0)
      }
      static One() {
        return new uz(1, 1)
      }
      static Random() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new uz((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
      }
      static RandomToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).m_((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
      }
      static get ZeroReadOnly() {
        return uz._ZeroReadOnly
      }
      static FromArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new uz(zz[tz], zz[tz + 1])
      }
      static FromArrayToRef(zz, tz, sz) {
        return sz.x = zz[tz], sz.y = zz[tz + 1], sz
      }
      static FromFloatsToRef(zz, tz, sz) {
        return sz.m_(zz, tz), sz
      }
      static CatmullRom(zz, tz, sz, Fz, Wz) {
        const Xz = Wz * Wz,
          Oz = Wz * Xz,
          oz = .5 * (2 * tz.x + (-zz.x + sz.x) * Wz + (2 * zz.x - 5 * tz.x + 4 * sz.x - Fz.x) * Xz + (-zz.x + 3 * tz.x - 3 * sz.x + Fz.x) * Oz),
          vz = .5 * (2 * tz.y + (-zz.y + sz.y) * Wz + (2 * zz.y - 5 * tz.y + 4 * sz.y - Fz.y) * Xz + (-zz.y + 3 * tz.y - 3 * sz.y + Fz.y) * Oz);
        return new uz(oz, vz)
      }
      static ClampToRef(zz, tz, sz, Fz) {
        return Fz.x = (0, oz.Clamp)(zz.x, tz.x, sz.x), Fz.y = (0, oz.Clamp)(zz.y, tz.y, sz.y), Fz
      }
      static Clamp(zz, tz, sz) {
        const Fz = (0, oz.Clamp)(zz.x, tz.x, sz.x),
          Wz = (0, oz.Clamp)(zz.y, tz.y, sz.y);
        return new uz(Fz, Wz)
      }
      static Hermite(zz, tz, sz, Fz, Wz) {
        const Xz = Wz * Wz,
          Oz = Wz * Xz,
          oz = 2 * Oz - 3 * Xz + 1,
          vz = -2 * Oz + 3 * Xz,
          Uz = Oz - 2 * Xz + Wz,
          Kz = Oz - Xz,
          Nz = zz.x * oz + sz.x * vz + tz.x * Uz + Fz.x * Kz,
          bz = zz.y * oz + sz.y * vz + tz.y * Uz + Fz.y * Kz;
        return new uz(Nz, bz)
      }
      static Hermite1stDerivative(zz, tz, sz, Fz, Wz) {
        return this.Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, new uz)
      }
      static Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = Wz * Wz;
        return Xz.x = 6 * (Oz - Wz) * zz.x + (3 * Oz - 4 * Wz + 1) * tz.x + 6 * (-Oz + Wz) * sz.x + (3 * Oz - 2 * Wz) * Fz.x, Xz.y = 6 * (Oz - Wz) * zz.y + (3 * Oz - 4 * Wz + 1) * tz.y + 6 * (-Oz + Wz) * sz.y + (3 * Oz - 2 * Wz) * Fz.y, Xz
      }
      static Lerp(zz, tz, sz) {
        return uz.LerpToRef(zz, tz, sz, new uz)
      }
      static LerpToRef(zz, tz, sz, Fz) {
        return Fz.x = zz.x + (tz.x - zz.x) * sz, Fz.y = zz.y + (tz.y - zz.y) * sz, Fz
      }
      static Dot(zz, tz) {
        return zz.x * tz.x + zz.y * tz.y
      }
      static Normalize(zz) {
        return uz.NormalizeToRef(zz, new uz)
      }
      static NormalizeToRef(zz, tz) {
        return zz.normalizeToRef(tz), tz
      }
      static Minimize(zz, tz) {
        const sz = zz.x < tz.x ? zz.x : tz.x,
          Fz = zz.y < tz.y ? zz.y : tz.y;
        return new uz(sz, Fz)
      }
      static Maximize(zz, tz) {
        const sz = zz.x > tz.x ? zz.x : tz.x,
          Fz = zz.y > tz.y ? zz.y : tz.y;
        return new uz(sz, Fz)
      }
      static Transform(zz, tz) {
        return uz.TransformToRef(zz, tz, new uz)
      }
      static TransformToRef(zz, tz, sz) {
        const Fz = tz.m,
          Wz = zz.x * Fz[0] + zz.y * Fz[4] + Fz[12],
          Xz = zz.x * Fz[1] + zz.y * Fz[5] + Fz[13];
        return sz.x = Wz, sz.y = Xz, sz
      }
      static PointInTriangle(zz, tz, sz, Fz) {
        const Wz = .5 * (-sz.y * Fz.x + tz.y * (-sz.x + Fz.x) + tz.x * (sz.y - Fz.y) + sz.x * Fz.y),
          Xz = Wz < 0 ? -1 : 1,
          Oz = (tz.y * Fz.x - tz.x * Fz.y + (Fz.y - tz.y) * zz.x + (tz.x - Fz.x) * zz.y) * Xz,
          oz = (tz.x * sz.y - tz.y * sz.x + (tz.y - sz.y) * zz.x + (sz.x - tz.x) * zz.y) * Xz;
        return Oz > 0 && oz > 0 && Oz + oz < 2 * Wz * Xz
      }
      static Distance(zz, tz) {
        return Math.sqrt(uz.DistanceSquared(zz, tz))
      }
      static DistanceSquared(zz, tz) {
        const sz = zz.x - tz.x,
          Fz = zz.y - tz.y;
        return sz * sz + Fz * Fz
      }
      static Center(zz, tz) {
        return uz.CenterToRef(zz, tz, new uz)
      }
      static CenterToRef(zz, tz, sz) {
        return sz.m_((zz.x + tz.x) / 2, (zz.y + tz.y) / 2)
      }
      static DistanceOfPointFromSegment(zz, tz, sz) {
        const Fz = uz.DistanceSquared(tz, sz);
        if (0 === Fz) return uz.Distance(zz, tz);
        const Wz = sz.subtract(tz),
          Xz = Math.max(0, Math.min(1, uz.Dot(zz.subtract(tz), Wz) / Fz)),
          Oz = tz.add(Wz.multiplyByFloats(Xz, Xz));
        return uz.Distance(zz, Oz)
      }
    }
    uz._V8PerformanceHack = new uz(.5, .5), uz._ZeroReadOnly = uz.Zero();
    class Nz {
      get x() {
        return this._x
      }
      set x(zz) {
        this._x = zz, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(zz) {
        this._y = zz, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(zz) {
        this._z = zz, this._isDirty = !0
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = zz, this._y = tz, this._z = sz
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "XD"
      }
      getHashCode() {
        let zz = Kz(this._x);
        return zz = 397 * zz ^ Kz(this._y), zz = 397 * zz ^ Kz(this._z), zz
      }
      hsz() {
        return [this._x, this._y, this._z]
      }
      toArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[tz] = this._x, zz[tz + 1] = this._y, zz[tz + 2] = this._z, this
      }
      Ztz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Nz.FromArrayToRef(zz, tz, this), this
      }
      toQuaternion() {
        return wz.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(zz) {
        return this._x += zz._x, this._y += zz._y, this._z += zz._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(zz, tz, sz) {
        return this._x += zz, this._y += tz, this._z += sz, this._isDirty = !0, this
      }
      add(zz) {
        return new Nz(this._x + zz._x, this._y + zz._y, this._z + zz._z)
      }
      addToRef(zz, tz) {
        return tz._x = this._x + zz._x, tz._y = this._y + zz._y, tz._z = this._z + zz._z, tz._isDirty = !0, tz
      }
      oFz(zz) {
        return this._x -= zz._x, this._y -= zz._y, this._z -= zz._z, this._isDirty = !0, this
      }
      subtract(zz) {
        return new Nz(this._x - zz._x, this._y - zz._y, this._z - zz._z)
      }
      subtractToRef(zz, tz) {
        return this.subtractFromFloatsToRef(zz._x, zz._y, zz._z, tz)
      }
      subtractFromFloats(zz, tz, sz) {
        return new Nz(this._x - zz, this._y - tz, this._z - sz)
      }
      subtractFromFloatsToRef(zz, tz, sz, Fz) {
        return Fz._x = this._x - zz, Fz._y = this._y - tz, Fz._z = this._z - sz, Fz._isDirty = !0, Fz
      }
      nt() {
        return new Nz(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(zz) {
        return zz._x = -1 * this._x, zz._y = -1 * this._y, zz._z = -1 * this._z, zz._isDirty = !0, zz
      }
      scaleInPlace(zz) {
        return this._x *= zz, this._y *= zz, this._z *= zz, this._isDirty = !0, this
      }
      scale(zz) {
        return new Nz(this._x * zz, this._y * zz, this._z * zz)
      }
      scaleToRef(zz, tz) {
        return tz._x = this._x * zz, tz._y = this._y * zz, tz._z = this._z * zz, tz._isDirty = !0, tz
      }
      getNormalToRef(zz) {
        const tz = this.length();
        let sz = Math.acos(this._y / tz);
        const Fz = Math.atan2(this._z, this._x);
        sz > Math.PI / 2 ? sz -= Math.PI / 2 : sz += Math.PI / 2;
        const Wz = tz * Math.sin(sz) * Math.cos(Fz),
          Xz = tz * Math.cos(sz),
          Oz = tz * Math.sin(sz) * Math.sin(Fz);
        return zz.set(Wz, Xz, Oz), zz
      }
      applyRotationQuaternionToRef(zz, tz) {
        const sz = this._x,
          Fz = this._y,
          Wz = this._z,
          Xz = zz._x,
          Oz = zz._y,
          oz = zz._z,
          vz = zz._w,
          Uz = 2 * (Oz * Wz - oz * Fz),
          Kz = 2 * (oz * sz - Xz * Wz),
          uz = 2 * (Xz * Fz - Oz * sz);
        return tz._x = sz + vz * Uz + Oz * uz - oz * Kz, tz._y = Fz + vz * Kz + oz * Uz - Xz * uz, tz._z = Wz + vz * uz + Xz * Kz - Oz * Uz, tz._isDirty = !0, tz
      }
      applyRotationQuaternionInPlace(zz) {
        return this.applyRotationQuaternionToRef(zz, this)
      }
      applyRotationQuaternion(zz) {
        return this.applyRotationQuaternionToRef(zz, new Nz)
      }
      scaleAndAddToRef(zz, tz) {
        return tz._x += this._x * zz, tz._y += this._y * zz, tz._z += this._z * zz, tz._isDirty = !0, tz
      }
      projectOnPlane(zz, tz) {
        return this.projectOnPlaneToRef(zz, tz, new Nz)
      }
      projectOnPlaneToRef(zz, tz, sz) {
        const Fz = zz.normal,
          Wz = zz.d,
          Xz = gz.XD[0];
        this.subtractToRef(tz, Xz), Xz.normalize();
        const Oz = Nz.Dot(Xz, Fz);
        if (Math.abs(Oz) < 1e-10) sz.Z6(1 / 0);
        else {
          const zz = -(Nz.Dot(tz, Fz) + Wz) / Oz,
            oz = Xz.scaleInPlace(zz);
          tz.addToRef(oz, sz)
        }
        return sz
      }
      equals(zz) {
        return zz && this._x === zz._x && this._y === zz._y && this._z === zz._z
      }
      equalsWithEpsilon(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fz.c;
        return zz && (0, oz.WithinEpsilon)(this._x, zz._x, tz) && (0, oz.WithinEpsilon)(this._y, zz._y, tz) && (0, oz.WithinEpsilon)(this._z, zz._z, tz)
      }
      wOz(zz, tz, sz) {
        return this._x === zz && this._y === tz && this._z === sz
      }
      multiplyInPlace(zz) {
        return this._x *= zz._x, this._y *= zz._y, this._z *= zz._z, this._isDirty = !0, this
      }
      multiply(zz) {
        return this.multiplyByFloats(zz._x, zz._y, zz._z)
      }
      multiplyToRef(zz, tz) {
        return tz._x = this._x * zz._x, tz._y = this._y * zz._y, tz._z = this._z * zz._z, tz._isDirty = !0, tz
      }
      multiplyByFloats(zz, tz, sz) {
        return new Nz(this._x * zz, this._y * tz, this._z * sz)
      }
      divide(zz) {
        return new Nz(this._x / zz._x, this._y / zz._y, this._z / zz._z)
      }
      divideToRef(zz, tz) {
        return tz._x = this._x / zz._x, tz._y = this._y / zz._y, tz._z = this._z / zz._z, tz._isDirty = !0, tz
      }
      divideInPlace(zz) {
        return this._x = this._x / zz._x, this._y = this._y / zz._y, this._z = this._z / zz._z, this._isDirty = !0, this
      }
      minimizeInPlace(zz) {
        return this.minimizeInPlaceFromFloats(zz._x, zz._y, zz._z)
      }
      maximizeInPlace(zz) {
        return this.maximizeInPlaceFromFloats(zz._x, zz._y, zz._z)
      }
      minimizeInPlaceFromFloats(zz, tz, sz) {
        return zz < this._x && (this.x = zz), tz < this._y && (this.y = tz), sz < this._z && (this.z = sz), this
      }
      maximizeInPlaceFromFloats(zz, tz, sz) {
        return zz > this._x && (this.x = zz), tz > this._y && (this.y = tz), sz > this._z && (this.z = sz), this
      }
      isNonUniformWithinEpsilon(zz) {
        const tz = Math.abs(this._x),
          sz = Math.abs(this._y);
        if (!(0, oz.WithinEpsilon)(tz, sz, zz)) return !0;
        const Fz = Math.abs(this._z);
        return !(0, oz.WithinEpsilon)(tz, Fz, zz) || !(0, oz.WithinEpsilon)(sz, Fz, zz)
      }
      get isNonUniform() {
        const zz = Math.abs(this._x);
        if (zz !== Math.abs(this._y)) return !0;
        return zz !== Math.abs(this._z)
      }
      floorToRef(zz) {
        return zz._x = Math.floor(this._x), zz._y = Math.floor(this._y), zz._z = Math.floor(this._z), zz._isDirty = !0, zz
      }
      floor() {
        return new Nz(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(zz) {
        return zz._x = this._x - Math.floor(this._x), zz._y = this._y - Math.floor(this._y), zz._z = this._z - Math.floor(this._z), zz._isDirty = !0, zz
      }
      fract() {
        return new Nz(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
      }
      length() {
        return Math.sqrt(this.lengthSquared())
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z
      }
      get hasAZeroComponent() {
        return this._x * this._y * this._z === 0
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      reorderInPlace(zz) {
        if ("xyz" === (zz = zz.toLowerCase())) return this;
        const tz = gz.XD[0].vsz(this);
        return this.x = tz[zz[0]], this.y = tz[zz[1]], this.z = tz[zz[2]], this
      }
      rotateByQuaternionToRef(zz, tz) {
        return zz.toRotationMatrix(gz.Matrix[0]), Nz.TransformCoordinatesToRef(this, gz.Matrix[0], tz), tz
      }
      rotateByQuaternionAroundPointToRef(zz, tz, sz) {
        return this.subtractToRef(tz, gz.XD[0]), gz.XD[0].rotateByQuaternionToRef(zz, gz.XD[0]), tz.addToRef(gz.XD[0], sz), sz
      }
      cross(zz) {
        return Nz.CrossToRef(this, zz, new Nz)
      }
      normalizeFromLength(zz) {
        return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Nz)
      }
      normalizeToRef(zz) {
        const tz = this.length();
        return 0 === tz || 1 === tz ? (zz._x = this._x, zz._y = this._y, zz._z = this._z, zz._isDirty = !0, zz) : this.scaleToRef(1 / tz, zz)
      }
      clone() {
        return new Nz(this._x, this._y, this._z)
      }
      vsz(zz) {
        return this.m_(zz._x, zz._y, zz._z)
      }
      m_(zz, tz, sz) {
        return this._x = zz, this._y = tz, this._z = sz, this._isDirty = !0, this
      }
      set(zz, tz, sz) {
        return this.m_(zz, tz, sz)
      }
      Z6(zz) {
        return this._x = this._y = this._z = zz, this._isDirty = !0, this
      }
      static GetClipFactor(zz, tz, sz, Fz) {
        const Wz = Nz.Dot(zz, sz);
        return (Wz - Fz) / (Wz - Nz.Dot(tz, sz))
      }
      static GetAngleBetweenVectors(zz, tz, sz) {
        const Fz = zz.normalizeToRef(gz.XD[1]),
          Wz = tz.normalizeToRef(gz.XD[2]);
        let Xz = Nz.Dot(Fz, Wz);
        Xz = (0, oz.Clamp)(Xz, -1, 1);
        const Oz = Math.acos(Xz),
          vz = gz.XD[3];
        return Nz.CrossToRef(Fz, Wz, vz), Nz.Dot(vz, sz) > 0 ? isNaN(Oz) ? 0 : Oz : isNaN(Oz) ? -Math.PI : -Math.acos(Xz)
      }
      static GetAngleBetweenVectorsOnPlane(zz, tz, sz) {
        gz.XD[0].vsz(zz);
        const Fz = gz.XD[0];
        gz.XD[1].vsz(tz);
        const Wz = gz.XD[1];
        gz.XD[2].vsz(sz);
        const Xz = gz.XD[2],
          Oz = gz.XD[3],
          vz = gz.XD[4];
        Fz.normalize(), Wz.normalize(), Xz.normalize(), Nz.CrossToRef(Xz, Fz, Oz), Nz.CrossToRef(Oz, Xz, vz);
        const Uz = Math.atan2(Nz.Dot(Wz, Oz), Nz.Dot(Wz, vz));
        return (0, oz.NormalizeRadians)(Uz)
      }
      static PitchYawRollToMoveBetweenPointsToRef(zz, tz, sz) {
        const Fz = Hz.XD[0];
        return tz.subtractToRef(zz, Fz), sz._y = Math.atan2(Fz.x, Fz.z) || 0, sz._x = Math.atan2(Math.sqrt(Fz.x ** 2 + Fz.z ** 2), Fz.y) || 0, sz._z = 0, sz._isDirty = !0, sz
      }
      static PitchYawRollToMoveBetweenPoints(zz, tz) {
        const sz = Nz.Zero();
        return Nz.PitchYawRollToMoveBetweenPointsToRef(zz, tz, sz)
      }
      static SlerpToRef(zz, tz, sz, Wz) {
        sz = (0, oz.Clamp)(sz, 0, 1);
        const Xz = gz.XD[0],
          Oz = gz.XD[1];
        Xz.vsz(zz);
        const vz = Xz.length();
        Xz.normalizeFromLength(vz), Oz.vsz(tz);
        const Uz = Oz.length();
        Oz.normalizeFromLength(Uz);
        const Kz = Nz.Dot(Xz, Oz);
        let uz, bz;
        if (Kz < 1 - Fz.c) {
          const zz = Math.acos(Kz),
            tz = 1 / Math.sin(zz);
          uz = Math.sin((1 - sz) * zz) * tz, bz = Math.sin(sz * zz) * tz
        } else uz = 1 - sz, bz = sz;
        return Xz.scaleInPlace(uz), Oz.scaleInPlace(bz), Wz.vsz(Xz).addInPlace(Oz), Wz.scaleInPlace((0, oz.Lerp)(vz, Uz, sz)), Wz
      }
      static SmoothToRef(zz, tz, sz, Fz, Wz) {
        return Nz.SlerpToRef(zz, tz, 0 === Fz ? 1 : sz / Fz, Wz), Wz
      }
      static FromArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Nz(zz[tz], zz[tz + 1], zz[tz + 2])
      }
      static FromFloatArray(zz, tz) {
        return Nz.FromArray(zz, tz)
      }
      static FromArrayToRef(zz, tz, sz) {
        return sz._x = zz[tz], sz._y = zz[tz + 1], sz._z = zz[tz + 2], sz._isDirty = !0, sz
      }
      static FromFloatArrayToRef(zz, tz, sz) {
        return Nz.FromArrayToRef(zz, tz, sz)
      }
      static FromFloatsToRef(zz, tz, sz, Fz) {
        return Fz.m_(zz, tz, sz), Fz
      }
      static Zero() {
        return new Nz(0, 0, 0)
      }
      static One() {
        return new Nz(1, 1, 1)
      }
      static Up() {
        return new Nz(0, 1, 0)
      }
      static get UpReadOnly() {
        return Nz._UpReadOnly
      }
      static get DownReadOnly() {
        return Nz._DownReadOnly
      }
      static get RightReadOnly() {
        return Nz._RightReadOnly
      }
      static get LeftReadOnly() {
        return Nz._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Nz._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Nz._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Nz._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Nz._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Nz._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Nz._OneReadOnly
      }
      static Down() {
        return new Nz(0, -1, 0)
      }
      static Forward() {
        return new Nz(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Nz(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Nz(1, 0, 0)
      }
      static Left() {
        return new Nz(-1, 0, 0)
      }
      static Random() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Nz((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
      }
      static RandomToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).m_((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
      }
      static TransformCoordinates(zz, tz) {
        const sz = Nz.Zero();
        return Nz.TransformCoordinatesToRef(zz, tz, sz), sz
      }
      static TransformCoordinatesToRef(zz, tz, sz) {
        return Nz.TransformCoordinatesFromFloatsToRef(zz._x, zz._y, zz._z, tz, sz), sz
      }
      static TransformCoordinatesFromFloatsToRef(zz, tz, sz, Fz, Wz) {
        const Xz = Fz.m,
          Oz = zz * Xz[0] + tz * Xz[4] + sz * Xz[8] + Xz[12],
          oz = zz * Xz[1] + tz * Xz[5] + sz * Xz[9] + Xz[13],
          vz = zz * Xz[2] + tz * Xz[6] + sz * Xz[10] + Xz[14],
          Uz = 1 / (zz * Xz[3] + tz * Xz[7] + sz * Xz[11] + Xz[15]);
        return Wz._x = Oz * Uz, Wz._y = oz * Uz, Wz._z = vz * Uz, Wz._isDirty = !0, Wz
      }
      static TransformNormal(zz, tz) {
        const sz = Nz.Zero();
        return Nz.TransformNormalToRef(zz, tz, sz), sz
      }
      static TransformNormalToRef(zz, tz, sz) {
        return this.TransformNormalFromFloatsToRef(zz._x, zz._y, zz._z, tz, sz), sz
      }
      static TransformNormalFromFloatsToRef(zz, tz, sz, Fz, Wz) {
        const Xz = Fz.m;
        return Wz._x = zz * Xz[0] + tz * Xz[4] + sz * Xz[8], Wz._y = zz * Xz[1] + tz * Xz[5] + sz * Xz[9], Wz._z = zz * Xz[2] + tz * Xz[6] + sz * Xz[10], Wz._isDirty = !0, Wz
      }
      static CatmullRom(zz, tz, sz, Fz, Wz) {
        const Xz = Wz * Wz,
          Oz = Wz * Xz,
          oz = .5 * (2 * tz._x + (-zz._x + sz._x) * Wz + (2 * zz._x - 5 * tz._x + 4 * sz._x - Fz._x) * Xz + (-zz._x + 3 * tz._x - 3 * sz._x + Fz._x) * Oz),
          vz = .5 * (2 * tz._y + (-zz._y + sz._y) * Wz + (2 * zz._y - 5 * tz._y + 4 * sz._y - Fz._y) * Xz + (-zz._y + 3 * tz._y - 3 * sz._y + Fz._y) * Oz),
          Uz = .5 * (2 * tz._z + (-zz._z + sz._z) * Wz + (2 * zz._z - 5 * tz._z + 4 * sz._z - Fz._z) * Xz + (-zz._z + 3 * tz._z - 3 * sz._z + Fz._z) * Oz);
        return new Nz(oz, vz, Uz)
      }
      static Clamp(zz, tz, sz) {
        const Fz = new Nz;
        return Nz.ClampToRef(zz, tz, sz, Fz), Fz
      }
      static ClampToRef(zz, tz, sz, Fz) {
        let Wz = zz._x;
        Wz = Wz > sz._x ? sz._x : Wz, Wz = Wz < tz._x ? tz._x : Wz;
        let Xz = zz._y;
        Xz = Xz > sz._y ? sz._y : Xz, Xz = Xz < tz._y ? tz._y : Xz;
        let Oz = zz._z;
        return Oz = Oz > sz._z ? sz._z : Oz, Oz = Oz < tz._z ? tz._z : Oz, Fz.m_(Wz, Xz, Oz), Fz
      }
      static CheckExtends(zz, tz, sz) {
        tz.minimizeInPlace(zz), sz.maximizeInPlace(zz)
      }
      static Hermite(zz, tz, sz, Fz, Wz) {
        const Xz = Wz * Wz,
          Oz = Wz * Xz,
          oz = 2 * Oz - 3 * Xz + 1,
          vz = -2 * Oz + 3 * Xz,
          Uz = Oz - 2 * Xz + Wz,
          Kz = Oz - Xz,
          uz = zz._x * oz + sz._x * vz + tz._x * Uz + Fz._x * Kz,
          bz = zz._y * oz + sz._y * vz + tz._y * Uz + Fz._y * Kz,
          wz = zz._z * oz + sz._z * vz + tz._z * Uz + Fz._z * Kz;
        return new Nz(uz, bz, wz)
      }
      static Hermite1stDerivative(zz, tz, sz, Fz, Wz) {
        const Xz = new Nz;
        return this.Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz), Xz
      }
      static Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = Wz * Wz;
        return Xz._x = 6 * (Oz - Wz) * zz._x + (3 * Oz - 4 * Wz + 1) * tz._x + 6 * (-Oz + Wz) * sz._x + (3 * Oz - 2 * Wz) * Fz._x, Xz._y = 6 * (Oz - Wz) * zz._y + (3 * Oz - 4 * Wz + 1) * tz._y + 6 * (-Oz + Wz) * sz._y + (3 * Oz - 2 * Wz) * Fz._y, Xz._z = 6 * (Oz - Wz) * zz._z + (3 * Oz - 4 * Wz + 1) * tz._z + 6 * (-Oz + Wz) * sz._z + (3 * Oz - 2 * Wz) * Fz._z, Xz._isDirty = !0, Xz
      }
      static Lerp(zz, tz, sz) {
        const Fz = new Nz(0, 0, 0);
        return Nz.LerpToRef(zz, tz, sz, Fz), Fz
      }
      static LerpToRef(zz, tz, sz, Fz) {
        return Fz._x = zz._x + (tz._x - zz._x) * sz, Fz._y = zz._y + (tz._y - zz._y) * sz, Fz._z = zz._z + (tz._z - zz._z) * sz, Fz._isDirty = !0, Fz
      }
      static Dot(zz, tz) {
        return zz._x * tz._x + zz._y * tz._y + zz._z * tz._z
      }
      dot(zz) {
        return this._x * zz._x + this._y * zz._y + this._z * zz._z
      }
      static Cross(zz, tz) {
        const sz = new Nz;
        return Nz.CrossToRef(zz, tz, sz), sz
      }
      static CrossToRef(zz, tz, sz) {
        const Fz = zz._y * tz._z - zz._z * tz._y,
          Wz = zz._z * tz._x - zz._x * tz._z,
          Xz = zz._x * tz._y - zz._y * tz._x;
        return sz.m_(Fz, Wz, Xz), sz
      }
      static Normalize(zz) {
        const tz = Nz.Zero();
        return Nz.NormalizeToRef(zz, tz), tz
      }
      static NormalizeToRef(zz, tz) {
        return zz.normalizeToRef(tz), tz
      }
      static Project(zz, tz, sz, Fz) {
        const Wz = new Nz;
        return Nz.ProjectToRef(zz, tz, sz, Fz, Wz), Wz
      }
      static ProjectToRef(zz, tz, sz, Fz, Wz) {
        const Xz = Fz.width,
          oz = Fz.height,
          vz = Fz.x,
          Uz = Fz.y,
          Kz = gz.Matrix[1],
          uz = Oz.c.LastCreatedEngine?.isNDCHalfZRange,
          bz = uz ? 1 : .5,
          wz = uz ? 0 : .5;
        Dz.FromValuesToRef(Xz / 2, 0, 0, 0, 0, -oz / 2, 0, 0, 0, 0, bz, 0, vz + Xz / 2, oz / 2 + Uz, wz, 1, Kz);
        const Hz = gz.Matrix[0];
        return tz.multiplyToRef(sz, Hz), Hz.multiplyToRef(Kz, Hz), Nz.TransformCoordinatesToRef(zz, Hz, Wz), Wz
      }
      static Reflect(zz, tz) {
        return this.ReflectToRef(zz, tz, new Nz)
      }
      static ReflectToRef(zz, tz, sz) {
        const Fz = Hz.XD[0];
        return Fz.vsz(tz).scaleInPlace(2 * Nz.Dot(zz, tz)), sz.vsz(zz).oFz(Fz)
      }
      static UnprojectFromTransform(zz, tz, sz, Fz, Wz) {
        return this.Unproject(zz, tz, sz, Fz, Wz, Dz.IdentityReadOnly)
      }
      static Unproject(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = new Nz;
        return Nz.UnprojectToRef(zz, tz, sz, Fz, Wz, Xz, Oz), Oz
      }
      static UnprojectToRef(zz, tz, sz, Fz, Wz, Xz, Oz) {
        return Nz.UnprojectFloatsToRef(zz._x, zz._y, zz._z, tz, sz, Fz, Wz, Xz, Oz), Oz
      }
      static UnprojectFloatsToRef(zz, tz, sz, Fz, Wz, Xz, oz, vz, Uz) {
        const Kz = gz.Matrix[0];
        Xz.multiplyToRef(oz, Kz), Kz.multiplyToRef(vz, Kz), Kz.invert();
        const uz = gz.XD[0];
        return uz.x = zz / Fz * 2 - 1, uz.y = -(tz / Wz * 2 - 1), Oz.c.LastCreatedEngine?.isNDCHalfZRange ? uz.z = sz : uz.z = 2 * sz - 1, Nz.TransformCoordinatesToRef(uz, Kz, Uz), Uz
      }
      static Minimize(zz, tz) {
        const sz = new Nz;
        return sz.vsz(zz), sz.minimizeInPlace(tz), sz
      }
      static Maximize(zz, tz) {
        const sz = new Nz;
        return sz.vsz(zz), sz.maximizeInPlace(tz), sz
      }
      static Distance(zz, tz) {
        return Math.sqrt(Nz.DistanceSquared(zz, tz))
      }
      static DistanceSquared(zz, tz) {
        const sz = zz._x - tz._x,
          Fz = zz._y - tz._y,
          Wz = zz._z - tz._z;
        return sz * sz + Fz * Fz + Wz * Wz
      }
      static ProjectOnTriangleToRef(zz, tz, sz, Wz, Xz) {
        const Oz = gz.XD[0],
          vz = gz.XD[1],
          Uz = gz.XD[2],
          Kz = gz.XD[3],
          uz = gz.XD[4];
        sz.subtractToRef(tz, Oz), Wz.subtractToRef(tz, vz), Wz.subtractToRef(sz, Uz);
        const bz = Oz.length(),
          wz = vz.length(),
          Dz = Uz.length();
        if (bz < Fz.c || wz < Fz.c || Dz < Fz.c) return Xz.vsz(tz), Nz.Distance(zz, tz);
        zz.subtractToRef(tz, uz), Nz.CrossToRef(Oz, vz, Kz);
        const Hz = Kz.length();
        if (Hz < Fz.c) return Xz.vsz(tz), Nz.Distance(zz, tz);
        Kz.normalizeFromLength(Hz);
        let Bz = uz.length();
        if (Bz < Fz.c) return Xz.vsz(tz), 0;
        uz.normalizeFromLength(Bz);
        const Pz = Nz.Dot(Kz, uz),
          rz = gz.XD[5],
          Yz = gz.XD[6];
        rz.vsz(Kz).scaleInPlace(-Bz * Pz), Yz.vsz(zz).addInPlace(rz);
        const xz = gz.XD[4],
          mz = gz.XD[5],
          Jz = gz.XD[7],
          Iz = gz.XD[8];
        xz.vsz(Oz).scaleInPlace(1 / bz), Iz.vsz(vz).scaleInPlace(1 / wz), xz.addInPlace(Iz).scaleInPlace(-1), mz.vsz(Oz).scaleInPlace(-1 / bz), Iz.vsz(Uz).scaleInPlace(1 / Dz), mz.addInPlace(Iz).scaleInPlace(-1), Jz.vsz(Uz).scaleInPlace(-1 / Dz), Iz.vsz(vz).scaleInPlace(-1 / wz), Jz.addInPlace(Iz).scaleInPlace(-1);
        const Cz = gz.XD[9];
        let ez;
        Cz.vsz(Yz).oFz(tz), Nz.CrossToRef(xz, Cz, Iz), ez = Nz.Dot(Iz, Kz);
        const Zz = ez;
        Cz.vsz(Yz).oFz(sz), Nz.CrossToRef(mz, Cz, Iz), ez = Nz.Dot(Iz, Kz);
        const Gz = ez;
        Cz.vsz(Yz).oFz(Wz), Nz.CrossToRef(Jz, Cz, Iz), ez = Nz.Dot(Iz, Kz);
        const Tz = ez,
          cz = gz.XD[10];
        let jz, Az;
        Zz > 0 && Gz < 0 ? (cz.vsz(Oz), jz = tz, Az = sz) : Gz > 0 && Tz < 0 ? (cz.vsz(Uz), jz = sz, Az = Wz) : (cz.vsz(vz).scaleInPlace(-1), jz = Wz, Az = tz);
        const yz = gz.XD[9],
          Mz = gz.XD[4];
        jz.subtractToRef(Yz, Iz), Az.subtractToRef(Yz, yz), Nz.CrossToRef(Iz, yz, Mz);
        if (!(Nz.Dot(Mz, Kz) < 0)) return Xz.vsz(Yz), Math.abs(Bz * Pz);
        const dz = gz.XD[5];
        Nz.CrossToRef(cz, Mz, dz), dz.normalize();
        const hz = gz.XD[9];
        hz.vsz(jz).oFz(Yz);
        const Qz = hz.length();
        if (Qz < Fz.c) return Xz.vsz(jz), Nz.Distance(zz, jz);
        hz.normalizeFromLength(Qz);
        const kz = Nz.Dot(dz, hz),
          iz = gz.XD[7];
        iz.vsz(Yz).addInPlace(dz.scaleInPlace(Qz * kz)), Iz.vsz(iz).oFz(jz), Bz = cz.length(), cz.normalizeFromLength(Bz);
        let Lz = Nz.Dot(Iz, cz) / Math.max(Bz, Fz.c);
        return Lz = (0, oz.Clamp)(Lz, 0, 1), iz.vsz(jz).addInPlace(cz.scaleInPlace(Lz * Bz)), Xz.vsz(iz), Nz.Distance(zz, iz)
      }
      static Center(zz, tz) {
        return Nz.CenterToRef(zz, tz, Nz.Zero())
      }
      static CenterToRef(zz, tz, sz) {
        return sz.m_((zz._x + tz._x) / 2, (zz._y + tz._y) / 2, (zz._z + tz._z) / 2)
      }
      static RotationFromAxis(zz, tz, sz) {
        const Fz = new Nz;
        return Nz.RotationFromAxisToRef(zz, tz, sz, Fz), Fz
      }
      static RotationFromAxisToRef(zz, tz, sz, Fz) {
        const Wz = gz.Quaternion[0];
        return wz.RotationQuaternionFromAxisToRef(zz, tz, sz, Wz), Wz.toEulerAnglesToRef(Fz), Fz
      }
    }
    Nz._V8PerformanceHack = new Nz(.5, .5, .5), Nz._UpReadOnly = Nz.Up(), Nz._DownReadOnly = Nz.Down(), Nz._LeftHandedForwardReadOnly = Nz.Forward(!1), Nz._RightHandedForwardReadOnly = Nz.Forward(!0), Nz._LeftHandedBackwardReadOnly = Nz.Backward(!1), Nz._RightHandedBackwardReadOnly = Nz.Backward(!0), Nz._RightReadOnly = Nz.Right(), Nz._LeftReadOnly = Nz.Left(), Nz._ZeroReadOnly = Nz.Zero(), Nz._OneReadOnly = Nz.One();
    class bz {
      get x() {
        return this._x
      }
      set x(zz) {
        this._x = zz, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(zz) {
        this._y = zz, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(zz) {
        this._z = zz, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(zz) {
        this._w = zz, this._isDirty = !0
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = zz, this._y = tz, this._z = sz, this._w = Fz
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let zz = Kz(this._x);
        return zz = 397 * zz ^ Kz(this._y), zz = 397 * zz ^ Kz(this._z), zz = 397 * zz ^ Kz(this._w), zz
      }
      hsz() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(zz, tz) {
        return void 0 === tz && (tz = 0), zz[tz] = this._x, zz[tz + 1] = this._y, zz[tz + 2] = this._z, zz[tz + 3] = this._w, this
      }
      Ztz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bz.FromArrayToRef(zz, tz, this), this
      }
      addInPlace(zz) {
        return this.x += zz._x, this.y += zz._y, this.z += zz._z, this.w += zz._w, this
      }
      addInPlaceFromFloats(zz, tz, sz, Fz) {
        return this.x += zz, this.y += tz, this.z += sz, this.w += Fz, this
      }
      add(zz) {
        return new bz(this._x + zz.x, this._y + zz.y, this._z + zz.z, this._w + zz.w)
      }
      addToRef(zz, tz) {
        return tz.x = this._x + zz.x, tz.y = this._y + zz.y, tz.z = this._z + zz.z, tz.w = this._w + zz.w, tz
      }
      oFz(zz) {
        return this.x -= zz.x, this.y -= zz.y, this.z -= zz.z, this.w -= zz.w, this
      }
      subtract(zz) {
        return new bz(this._x - zz.x, this._y - zz.y, this._z - zz.z, this._w - zz.w)
      }
      subtractToRef(zz, tz) {
        return tz.x = this._x - zz.x, tz.y = this._y - zz.y, tz.z = this._z - zz.z, tz.w = this._w - zz.w, tz
      }
      subtractFromFloats(zz, tz, sz, Fz) {
        return new bz(this._x - zz, this._y - tz, this._z - sz, this._w - Fz)
      }
      subtractFromFloatsToRef(zz, tz, sz, Fz, Wz) {
        return Wz.x = this._x - zz, Wz.y = this._y - tz, Wz.z = this._z - sz, Wz.w = this._w - Fz, Wz
      }
      nt() {
        return new bz(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(zz) {
        return zz.x = -this._x, zz.y = -this._y, zz.z = -this._z, zz.w = -this._w, zz
      }
      scaleInPlace(zz) {
        return this.x *= zz, this.y *= zz, this.z *= zz, this.w *= zz, this
      }
      scale(zz) {
        return new bz(this._x * zz, this._y * zz, this._z * zz, this._w * zz)
      }
      scaleToRef(zz, tz) {
        return tz.x = this._x * zz, tz.y = this._y * zz, tz.z = this._z * zz, tz.w = this._w * zz, tz
      }
      scaleAndAddToRef(zz, tz) {
        return tz.x += this._x * zz, tz.y += this._y * zz, tz.z += this._z * zz, tz.w += this._w * zz, tz
      }
      equals(zz) {
        return zz && this._x === zz.x && this._y === zz.y && this._z === zz.z && this._w === zz.w
      }
      equalsWithEpsilon(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fz.c;
        return zz && (0, oz.WithinEpsilon)(this._x, zz.x, tz) && (0, oz.WithinEpsilon)(this._y, zz.y, tz) && (0, oz.WithinEpsilon)(this._z, zz.z, tz) && (0, oz.WithinEpsilon)(this._w, zz.w, tz)
      }
      wOz(zz, tz, sz, Fz) {
        return this._x === zz && this._y === tz && this._z === sz && this._w === Fz
      }
      multiplyInPlace(zz) {
        return this.x *= zz.x, this.y *= zz.y, this.z *= zz.z, this.w *= zz.w, this
      }
      multiply(zz) {
        return new bz(this._x * zz.x, this._y * zz.y, this._z * zz.z, this._w * zz.w)
      }
      multiplyToRef(zz, tz) {
        return tz.x = this._x * zz.x, tz.y = this._y * zz.y, tz.z = this._z * zz.z, tz.w = this._w * zz.w, tz
      }
      multiplyByFloats(zz, tz, sz, Fz) {
        return new bz(this._x * zz, this._y * tz, this._z * sz, this._w * Fz)
      }
      divide(zz) {
        return new bz(this._x / zz.x, this._y / zz.y, this._z / zz.z, this._w / zz.w)
      }
      divideToRef(zz, tz) {
        return tz.x = this._x / zz.x, tz.y = this._y / zz.y, tz.z = this._z / zz.z, tz.w = this._w / zz.w, tz
      }
      divideInPlace(zz) {
        return this.divideToRef(zz, this)
      }
      minimizeInPlace(zz) {
        return zz.x < this._x && (this.x = zz.x), zz.y < this._y && (this.y = zz.y), zz.z < this._z && (this.z = zz.z), zz.w < this._w && (this.w = zz.w), this
      }
      maximizeInPlace(zz) {
        return zz.x > this._x && (this.x = zz.x), zz.y > this._y && (this.y = zz.y), zz.z > this._z && (this.z = zz.z), zz.w > this._w && (this.w = zz.w), this
      }
      minimizeInPlaceFromFloats(zz, tz, sz, Fz) {
        return this.x = Math.min(zz, this._x), this.y = Math.min(tz, this._y), this.z = Math.min(sz, this._z), this.w = Math.min(Fz, this._w), this
      }
      maximizeInPlaceFromFloats(zz, tz, sz, Fz) {
        return this.x = Math.max(zz, this._x), this.y = Math.max(tz, this._y), this.z = Math.max(sz, this._z), this.w = Math.max(Fz, this._w), this
      }
      floorToRef(zz) {
        return zz.x = Math.floor(this._x), zz.y = Math.floor(this._y), zz.z = Math.floor(this._z), zz.w = Math.floor(this._w), zz
      }
      floor() {
        return new bz(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(zz) {
        return zz.x = this._x - Math.floor(this._x), zz.y = this._y - Math.floor(this._y), zz.z = this._z - Math.floor(this._z), zz.w = this._w - Math.floor(this._w), zz
      }
      fract() {
        return new bz(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
      }
      length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(zz) {
        return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
      }
      normalizeToNew() {
        return this.normalizeToRef(new bz)
      }
      normalizeToRef(zz) {
        const tz = this.length();
        return 0 === tz || 1 === tz ? (zz.x = this._x, zz.y = this._y, zz.z = this._z, zz.w = this._w, zz) : this.scaleToRef(1 / tz, zz)
      }
      toVector3() {
        return new Nz(this._x, this._y, this._z)
      }
      clone() {
        return new bz(this._x, this._y, this._z, this._w)
      }
      vsz(zz) {
        return this.x = zz.x, this.y = zz.y, this.z = zz.z, this.w = zz.w, this
      }
      m_(zz, tz, sz, Fz) {
        return this.x = zz, this.y = tz, this.z = sz, this.w = Fz, this
      }
      set(zz, tz, sz, Fz) {
        return this.m_(zz, tz, sz, Fz)
      }
      Z6(zz) {
        return this.x = this.y = this.z = this.w = zz, this
      }
      dot(zz) {
        return this._x * zz.x + this._y * zz.y + this._z * zz.z + this._w * zz.w
      }
      static FromArray(zz, tz) {
        return tz || (tz = 0), new bz(zz[tz], zz[tz + 1], zz[tz + 2], zz[tz + 3])
      }
      static FromArrayToRef(zz, tz, sz) {
        return sz.x = zz[tz], sz.y = zz[tz + 1], sz.z = zz[tz + 2], sz.w = zz[tz + 3], sz
      }
      static FromFloatArrayToRef(zz, tz, sz) {
        return bz.FromArrayToRef(zz, tz, sz), sz
      }
      static FromFloatsToRef(zz, tz, sz, Fz, Wz) {
        return Wz.x = zz, Wz.y = tz, Wz.z = sz, Wz.w = Fz, Wz
      }
      static Zero() {
        return new bz(0, 0, 0, 0)
      }
      static One() {
        return new bz(1, 1, 1, 1)
      }
      static Random() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new bz((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
      }
      static RandomToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        return sz.x = (0, oz.RandomRange)(zz, tz), sz.y = (0, oz.RandomRange)(zz, tz), sz.z = (0, oz.RandomRange)(zz, tz), sz.w = (0, oz.RandomRange)(zz, tz), sz
      }
      static Clamp(zz, tz, sz) {
        return bz.ClampToRef(zz, tz, sz, new bz)
      }
      static ClampToRef(zz, tz, sz, Fz) {
        return Fz.x = (0, oz.Clamp)(zz.x, tz.x, sz.x), Fz.y = (0, oz.Clamp)(zz.y, tz.y, sz.y), Fz.z = (0, oz.Clamp)(zz.z, tz.z, sz.z), Fz.w = (0, oz.Clamp)(zz.w, tz.w, sz.w), Fz
      }
      static CheckExtends(zz, tz, sz) {
        tz.minimizeInPlace(zz), sz.maximizeInPlace(zz)
      }
      static get ZeroReadOnly() {
        return bz._ZeroReadOnly
      }
      static Normalize(zz) {
        return bz.NormalizeToRef(zz, new bz)
      }
      static NormalizeToRef(zz, tz) {
        return zz.normalizeToRef(tz), tz
      }
      static Minimize(zz, tz) {
        const sz = new bz;
        return sz.vsz(zz), sz.minimizeInPlace(tz), sz
      }
      static Maximize(zz, tz) {
        const sz = new bz;
        return sz.vsz(zz), sz.maximizeInPlace(tz), sz
      }
      static Distance(zz, tz) {
        return Math.sqrt(bz.DistanceSquared(zz, tz))
      }
      static DistanceSquared(zz, tz) {
        const sz = zz.x - tz.x,
          Fz = zz.y - tz.y,
          Wz = zz.z - tz.z,
          Xz = zz.w - tz.w;
        return sz * sz + Fz * Fz + Wz * Wz + Xz * Xz
      }
      static Center(zz, tz) {
        return bz.CenterToRef(zz, tz, new bz)
      }
      static CenterToRef(zz, tz, sz) {
        return sz.x = (zz.x + tz.x) / 2, sz.y = (zz.y + tz.y) / 2, sz.z = (zz.z + tz.z) / 2, sz.w = (zz.w + tz.w) / 2, sz
      }
      static TransformCoordinates(zz, tz) {
        return bz.TransformCoordinatesToRef(zz, tz, new bz)
      }
      static TransformCoordinatesToRef(zz, tz, sz) {
        return bz.TransformCoordinatesFromFloatsToRef(zz._x, zz._y, zz._z, tz, sz), sz
      }
      static TransformCoordinatesFromFloatsToRef(zz, tz, sz, Fz, Wz) {
        const Xz = Fz.m,
          Oz = zz * Xz[0] + tz * Xz[4] + sz * Xz[8] + Xz[12],
          oz = zz * Xz[1] + tz * Xz[5] + sz * Xz[9] + Xz[13],
          vz = zz * Xz[2] + tz * Xz[6] + sz * Xz[10] + Xz[14],
          Uz = zz * Xz[3] + tz * Xz[7] + sz * Xz[11] + Xz[15];
        return Wz.x = Oz, Wz.y = oz, Wz.z = vz, Wz.w = Uz, Wz
      }
      static TransformNormal(zz, tz) {
        return bz.TransformNormalToRef(zz, tz, new bz)
      }
      static TransformNormalToRef(zz, tz, sz) {
        const Fz = tz.m,
          Wz = zz.x * Fz[0] + zz.y * Fz[4] + zz.z * Fz[8],
          Xz = zz.x * Fz[1] + zz.y * Fz[5] + zz.z * Fz[9],
          Oz = zz.x * Fz[2] + zz.y * Fz[6] + zz.z * Fz[10];
        return sz.x = Wz, sz.y = Xz, sz.z = Oz, sz.w = zz.w, sz
      }
      static TransformNormalFromFloatsToRef(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = Wz.m;
        return Xz.x = zz * Oz[0] + tz * Oz[4] + sz * Oz[8], Xz.y = zz * Oz[1] + tz * Oz[5] + sz * Oz[9], Xz.z = zz * Oz[2] + tz * Oz[6] + sz * Oz[10], Xz.w = Fz, Xz
      }
      static FromVector3(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new bz(zz._x, zz._y, zz._z, tz)
      }
      static Dot(zz, tz) {
        return zz.x * tz.x + zz.y * tz.y + zz.z * tz.z + zz.w * tz.w
      }
    }
    bz._V8PerformanceHack = new bz(.5, .5, .5, .5), bz._ZeroReadOnly = bz.Zero();
    class wz {
      get x() {
        return this._x
      }
      set x(zz) {
        this._x = zz, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(zz) {
        this._y = zz, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(zz) {
        this._z = zz, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(zz) {
        this._w = zz, this._isDirty = !0
      }
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = zz, this._y = tz, this._z = sz, this._w = Fz
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let zz = Kz(this._x);
        return zz = 397 * zz ^ Kz(this._y), zz = 397 * zz ^ Kz(this._z), zz = 397 * zz ^ Kz(this._w), zz
      }
      hsz() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[tz] = this._x, zz[tz + 1] = this._y, zz[tz + 2] = this._z, zz[tz + 3] = this._w, this
      }
      Ztz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return wz.FromArrayToRef(zz, tz, this)
      }
      equals(zz) {
        return zz && this._x === zz._x && this._y === zz._y && this._z === zz._z && this._w === zz._w
      }
      equalsWithEpsilon(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fz.c;
        return zz && (0, oz.WithinEpsilon)(this._x, zz._x, tz) && (0, oz.WithinEpsilon)(this._y, zz._y, tz) && (0, oz.WithinEpsilon)(this._z, zz._z, tz) && (0, oz.WithinEpsilon)(this._w, zz._w, tz)
      }
      isApprox(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fz.c;
        return zz && ((0, oz.WithinEpsilon)(this._x, zz._x, tz) && (0, oz.WithinEpsilon)(this._y, zz._y, tz) && (0, oz.WithinEpsilon)(this._z, zz._z, tz) && (0, oz.WithinEpsilon)(this._w, zz._w, tz) || (0, oz.WithinEpsilon)(this._x, -zz._x, tz) && (0, oz.WithinEpsilon)(this._y, -zz._y, tz) && (0, oz.WithinEpsilon)(this._z, -zz._z, tz) && (0, oz.WithinEpsilon)(this._w, -zz._w, tz))
      }
      clone() {
        return new wz(this._x, this._y, this._z, this._w)
      }
      vsz(zz) {
        return this._x = zz._x, this._y = zz._y, this._z = zz._z, this._w = zz._w, this._isDirty = !0, this
      }
      m_(zz, tz, sz, Fz) {
        return this._x = zz, this._y = tz, this._z = sz, this._w = Fz, this._isDirty = !0, this
      }
      set(zz, tz, sz, Fz) {
        return this.m_(zz, tz, sz, Fz)
      }
      Z6(zz) {
        return this.m_(zz, zz, zz, zz)
      }
      add(zz) {
        return new wz(this._x + zz._x, this._y + zz._y, this._z + zz._z, this._w + zz._w)
      }
      addInPlace(zz) {
        return this._x += zz._x, this._y += zz._y, this._z += zz._z, this._w += zz._w, this._isDirty = !0, this
      }
      addToRef(zz, tz) {
        return tz._x = this._x + zz._x, tz._y = this._y + zz._y, tz._z = this._z + zz._z, tz._w = this._w + zz._w, tz._isDirty = !0, tz
      }
      addInPlaceFromFloats(zz, tz, sz, Fz) {
        return this._x += zz, this._y += tz, this._z += sz, this._w += Fz, this._isDirty = !0, this
      }
      subtractToRef(zz, tz) {
        return tz._x = this._x - zz._x, tz._y = this._y - zz._y, tz._z = this._z - zz._z, tz._w = this._w - zz._w, tz._isDirty = !0, tz
      }
      subtractFromFloats(zz, tz, sz, Fz) {
        return this.subtractFromFloatsToRef(zz, tz, sz, Fz, new wz)
      }
      subtractFromFloatsToRef(zz, tz, sz, Fz, Wz) {
        return Wz._x = this._x - zz, Wz._y = this._y - tz, Wz._z = this._z - sz, Wz._w = this._w - Fz, Wz._isDirty = !0, Wz
      }
      subtract(zz) {
        return new wz(this._x - zz._x, this._y - zz._y, this._z - zz._z, this._w - zz._w)
      }
      oFz(zz) {
        return this._x -= zz._x, this._y -= zz._y, this._z -= zz._z, this._w -= zz._w, this._isDirty = !0, this
      }
      scale(zz) {
        return new wz(this._x * zz, this._y * zz, this._z * zz, this._w * zz)
      }
      scaleToRef(zz, tz) {
        return tz._x = this._x * zz, tz._y = this._y * zz, tz._z = this._z * zz, tz._w = this._w * zz, tz._isDirty = !0, tz
      }
      scaleInPlace(zz) {
        return this._x *= zz, this._y *= zz, this._z *= zz, this._w *= zz, this._isDirty = !0, this
      }
      scaleAndAddToRef(zz, tz) {
        return tz._x += this._x * zz, tz._y += this._y * zz, tz._z += this._z * zz, tz._w += this._w * zz, tz._isDirty = !0, tz
      }
      multiply(zz) {
        const tz = new wz(0, 0, 0, 1);
        return this.multiplyToRef(zz, tz), tz
      }
      multiplyToRef(zz, tz) {
        const sz = this._x * zz._w + this._y * zz._z - this._z * zz._y + this._w * zz._x,
          Fz = -this._x * zz._z + this._y * zz._w + this._z * zz._x + this._w * zz._y,
          Wz = this._x * zz._y - this._y * zz._x + this._z * zz._w + this._w * zz._z,
          Xz = -this._x * zz._x - this._y * zz._y - this._z * zz._z + this._w * zz._w;
        return tz.m_(sz, Fz, Wz, Xz), tz
      }
      multiplyInPlace(zz) {
        return this.multiplyToRef(zz, this)
      }
      multiplyByFloats(zz, tz, sz, Fz) {
        return this._x *= zz, this._y *= tz, this._z *= sz, this._w *= Fz, this._isDirty = !0, this
      }
      divide(zz) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(zz, tz) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(zz) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      minimizeInPlace() {
        throw new ReferenceError("Can not minimize a quaternion")
      }
      minimizeInPlaceFromFloats() {
        throw new ReferenceError("Can not minimize a quaternion")
      }
      maximizeInPlace() {
        throw new ReferenceError("Can not maximize a quaternion")
      }
      maximizeInPlaceFromFloats() {
        throw new ReferenceError("Can not maximize a quaternion")
      }
      nt() {
        return this.negateToRef(new wz)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(zz) {
        return zz._x = -this._x, zz._y = -this._y, zz._z = -this._z, zz._w = -this._w, zz._isDirty = !0, zz
      }
      wOz(zz, tz, sz, Fz) {
        return this._x === zz && this._y === tz && this._z === sz && this._w === Fz
      }
      floorToRef(zz) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(zz) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(zz) {
        return zz.m_(-this._x, -this._y, -this._z, this._w), zz
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new wz(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const zz = this.conjugate(),
          tz = this.lengthSquared();
        return 0 == tz || 1 == tz || zz.scaleInPlace(1 / tz), zz
      }
      invertInPlace() {
        this.conjugateInPlace();
        const zz = this.lengthSquared();
        return 0 == zz || 1 == zz || this.scaleInPlace(1 / zz), this
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      }
      length() {
        return Math.sqrt(this.lengthSquared())
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(zz) {
        return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
      }
      normalizeToNew() {
        const zz = new wz(0, 0, 0, 1);
        return this.normalizeToRef(zz), zz
      }
      normalizeToRef(zz) {
        const tz = this.length();
        return 0 === tz || 1 === tz ? zz.m_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / tz, zz)
      }
      toEulerAngles() {
        const zz = Nz.Zero();
        return this.toEulerAnglesToRef(zz), zz
      }
      toEulerAnglesToRef(zz) {
        const tz = this._z,
          sz = this._x,
          Fz = this._y,
          Wz = this._w,
          Xz = Fz * tz - sz * Wz,
          Oz = .4999999;
        if (Xz < -Oz) zz._y = 2 * Math.atan2(Fz, Wz), zz._x = Math.PI / 2, zz._z = 0, zz._isDirty = !0;
        else if (Xz > Oz) zz._y = 2 * Math.atan2(Fz, Wz), zz._x = -Math.PI / 2, zz._z = 0, zz._isDirty = !0;
        else {
          const Oz = Wz * Wz,
            oz = tz * tz,
            vz = sz * sz,
            Uz = Fz * Fz;
          zz._z = Math.atan2(2 * (sz * Fz + tz * Wz), -oz - vz + Uz + Oz), zz._x = Math.asin(-2 * Xz), zz._y = Math.atan2(2 * (tz * sz + Fz * Wz), oz - vz - Uz + Oz), zz._isDirty = !0
        }
        return zz
      }
      toAlphaBetaGammaToRef(zz) {
        const tz = this._z,
          sz = this._x,
          Fz = this._y,
          Wz = this._w,
          Xz = Math.sqrt(sz * sz + Fz * Fz),
          Oz = Math.sqrt(tz * tz + Wz * Wz),
          oz = 2 * Math.atan2(Xz, Oz),
          vz = 2 * Math.atan2(tz, Wz),
          Uz = 2 * Math.atan2(Fz, sz),
          Kz = (vz + Uz) / 2,
          uz = (vz - Uz) / 2;
        return zz.set(uz, oz, Kz), zz
      }
      toRotationMatrix(zz) {
        return Dz.FromQuaternionToRef(this, zz), zz
      }
      fromRotationMatrix(zz) {
        return wz.FromRotationMatrixToRef(zz, this), this
      }
      dot(zz) {
        return this._x * zz._x + this._y * zz._y + this._z * zz._z + this._w * zz._w
      }
      toAxisAngle() {
        const zz = Nz.Zero();
        return {
          axis: zz,
          angle: this.toAxisAngleToRef(zz)
        }
      }
      toAxisAngleToRef(zz) {
        let tz;
        const sz = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Fz = this._w;
        return sz > 0 ? (tz = 2 * Math.atan2(sz, Fz), zz.set(this._x / sz, this._y / sz, this._z / sz)) : (tz = 0, zz.set(1, 0, 0)), tz
      }
      static FromRotationMatrix(zz) {
        const tz = new wz;
        return wz.FromRotationMatrixToRef(zz, tz), tz
      }
      static FromRotationMatrixToRef(zz, tz) {
        const sz = zz.m,
          Fz = sz[0],
          Wz = sz[4],
          Xz = sz[8],
          Oz = sz[1],
          oz = sz[5],
          vz = sz[9],
          Uz = sz[2],
          Kz = sz[6],
          uz = sz[10],
          Nz = Fz + oz + uz;
        let bz;
        return Nz > 0 ? (bz = .5 / Math.sqrt(Nz + 1), tz._w = .25 / bz, tz._x = (Kz - vz) * bz, tz._y = (Xz - Uz) * bz, tz._z = (Oz - Wz) * bz, tz._isDirty = !0) : Fz > oz && Fz > uz ? (bz = 2 * Math.sqrt(1 + Fz - oz - uz), tz._w = (Kz - vz) / bz, tz._x = .25 * bz, tz._y = (Wz + Oz) / bz, tz._z = (Xz + Uz) / bz, tz._isDirty = !0) : oz > uz ? (bz = 2 * Math.sqrt(1 + oz - Fz - uz), tz._w = (Xz - Uz) / bz, tz._x = (Wz + Oz) / bz, tz._y = .25 * bz, tz._z = (vz + Kz) / bz, tz._isDirty = !0) : (bz = 2 * Math.sqrt(1 + uz - Fz - oz), tz._w = (Oz - Wz) / bz, tz._x = (Xz + Uz) / bz, tz._y = (vz + Kz) / bz, tz._z = .25 * bz, tz._isDirty = !0), tz
      }
      static Dot(zz, tz) {
        return zz._x * tz._x + zz._y * tz._y + zz._z * tz._z + zz._w * tz._w
      }
      static AreClose(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Fz = wz.Dot(zz, tz);
        return 1 - Fz * Fz <= sz
      }
      static SmoothToRef(zz, tz, sz, Fz, Wz) {
        let Xz = 0 === Fz ? 1 : sz / Fz;
        return Xz = (0, oz.Clamp)(Xz, 0, 1), wz.SlerpToRef(zz, tz, Xz, Wz), Wz
      }
      static Zero() {
        return new wz(0, 0, 0, 0)
      }
      static Inverse(zz) {
        return new wz(-zz._x, -zz._y, -zz._z, zz._w)
      }
      static InverseToRef(zz, tz) {
        return tz.set(-zz._x, -zz._y, -zz._z, zz._w), tz
      }
      static Identity() {
        return new wz(0, 0, 0, 1)
      }
      static IsIdentity(zz) {
        return zz && 0 === zz._x && 0 === zz._y && 0 === zz._z && 1 === zz._w
      }
      static RotationAxis(zz, tz) {
        return wz.RotationAxisToRef(zz, tz, new wz)
      }
      static RotationAxisToRef(zz, tz, sz) {
        sz._w = Math.cos(tz / 2);
        const Fz = Math.sin(tz / 2) / zz.length();
        return sz._x = zz._x * Fz, sz._y = zz._y * Fz, sz._z = zz._z * Fz, sz._isDirty = !0, sz
      }
      static FromArray(zz, tz) {
        return tz || (tz = 0), new wz(zz[tz], zz[tz + 1], zz[tz + 2], zz[tz + 3])
      }
      static FromArrayToRef(zz, tz, sz) {
        return sz._x = zz[tz], sz._y = zz[tz + 1], sz._z = zz[tz + 2], sz._w = zz[tz + 3], sz._isDirty = !0, sz
      }
      static FromFloatsToRef(zz, tz, sz, Fz, Wz) {
        return Wz.m_(zz, tz, sz, Fz), Wz
      }
      static FromEulerAngles(zz, tz, sz) {
        const Fz = new wz;
        return wz.RotationYawPitchRollToRef(tz, zz, sz, Fz), Fz
      }
      static FromEulerAnglesToRef(zz, tz, sz, Fz) {
        return wz.RotationYawPitchRollToRef(tz, zz, sz, Fz), Fz
      }
      static FromEulerVector(zz) {
        const tz = new wz;
        return wz.RotationYawPitchRollToRef(zz._y, zz._x, zz._z, tz), tz
      }
      static FromEulerVectorToRef(zz, tz) {
        return wz.RotationYawPitchRollToRef(zz._y, zz._x, zz._z, tz), tz
      }
      static FromUnitVectorsToRef(zz, tz, sz) {
        let Wz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Fz.c;
        const Xz = Nz.Dot(zz, tz) + 1;
        return Xz < Wz ? Math.abs(zz.x) > Math.abs(zz.z) ? sz.set(-zz.y, zz.x, 0, 0) : sz.set(0, -zz.z, zz.y, 0) : (Nz.CrossToRef(zz, tz, Hz.XD[0]), sz.set(Hz.XD[0].x, Hz.XD[0].y, Hz.XD[0].z, Xz)), sz.normalize()
      }
      static RotationYawPitchRoll(zz, tz, sz) {
        const Fz = new wz;
        return wz.RotationYawPitchRollToRef(zz, tz, sz, Fz), Fz
      }
      static RotationYawPitchRollToRef(zz, tz, sz, Fz) {
        const Wz = .5 * sz,
          Xz = .5 * tz,
          Oz = .5 * zz,
          oz = Math.sin(Wz),
          vz = Math.cos(Wz),
          Uz = Math.sin(Xz),
          Kz = Math.cos(Xz),
          uz = Math.sin(Oz),
          Nz = Math.cos(Oz);
        return Fz._x = Nz * Uz * vz + uz * Kz * oz, Fz._y = uz * Kz * vz - Nz * Uz * oz, Fz._z = Nz * Kz * oz - uz * Uz * vz, Fz._w = Nz * Kz * vz + uz * Uz * oz, Fz._isDirty = !0, Fz
      }
      static RotationAlphaBetaGamma(zz, tz, sz) {
        const Fz = new wz;
        return wz.RotationAlphaBetaGammaToRef(zz, tz, sz, Fz), Fz
      }
      static RotationAlphaBetaGammaToRef(zz, tz, sz, Fz) {
        const Wz = .5 * (sz + zz),
          Xz = .5 * (sz - zz),
          Oz = .5 * tz;
        return Fz._x = Math.cos(Xz) * Math.sin(Oz), Fz._y = Math.sin(Xz) * Math.sin(Oz), Fz._z = Math.sin(Wz) * Math.cos(Oz), Fz._w = Math.cos(Wz) * Math.cos(Oz), Fz._isDirty = !0, Fz
      }
      static RotationQuaternionFromAxis(zz, tz, sz) {
        const Fz = new wz(0, 0, 0, 0);
        return wz.RotationQuaternionFromAxisToRef(zz, tz, sz, Fz), Fz
      }
      static RotationQuaternionFromAxisToRef(zz, tz, sz, Fz) {
        const Wz = gz.Matrix[0];
        return zz = zz.normalizeToRef(gz.XD[0]), tz = tz.normalizeToRef(gz.XD[1]), sz = sz.normalizeToRef(gz.XD[2]), Dz.FromXYZAxesToRef(zz, tz, sz, Wz), wz.FromRotationMatrixToRef(Wz, Fz), Fz
      }
      static FromLookDirectionLH(zz, tz) {
        const sz = new wz;
        return wz.FromLookDirectionLHToRef(zz, tz, sz), sz
      }
      static FromLookDirectionLHToRef(zz, tz, sz) {
        const Fz = gz.Matrix[0];
        return Dz.LookDirectionLHToRef(zz, tz, Fz), wz.FromRotationMatrixToRef(Fz, sz), sz
      }
      static FromLookDirectionRH(zz, tz) {
        const sz = new wz;
        return wz.FromLookDirectionRHToRef(zz, tz, sz), sz
      }
      static FromLookDirectionRHToRef(zz, tz, sz) {
        const Fz = gz.Matrix[0];
        return Dz.LookDirectionRHToRef(zz, tz, Fz), wz.FromRotationMatrixToRef(Fz, sz)
      }
      static Slerp(zz, tz, sz) {
        const Fz = wz.Identity();
        return wz.SlerpToRef(zz, tz, sz, Fz), Fz
      }
      static SlerpToRef(zz, tz, sz, Fz) {
        let Wz, Xz, Oz = zz._x * tz._x + zz._y * tz._y + zz._z * tz._z + zz._w * tz._w,
          oz = !1;
        if (Oz < 0 && (oz = !0, Oz = -Oz), Oz > .999999) Xz = 1 - sz, Wz = oz ? -sz : sz;
        else {
          const zz = Math.acos(Oz),
            tz = 1 / Math.sin(zz);
          Xz = Math.sin((1 - sz) * zz) * tz, Wz = oz ? -Math.sin(sz * zz) * tz : Math.sin(sz * zz) * tz
        }
        return Fz._x = Xz * zz._x + Wz * tz._x, Fz._y = Xz * zz._y + Wz * tz._y, Fz._z = Xz * zz._z + Wz * tz._z, Fz._w = Xz * zz._w + Wz * tz._w, Fz._isDirty = !0, Fz
      }
      static Hermite(zz, tz, sz, Fz, Wz) {
        const Xz = Wz * Wz,
          Oz = Wz * Xz,
          oz = 2 * Oz - 3 * Xz + 1,
          vz = -2 * Oz + 3 * Xz,
          Uz = Oz - 2 * Xz + Wz,
          Kz = Oz - Xz,
          uz = zz._x * oz + sz._x * vz + tz._x * Uz + Fz._x * Kz,
          Nz = zz._y * oz + sz._y * vz + tz._y * Uz + Fz._y * Kz,
          bz = zz._z * oz + sz._z * vz + tz._z * Uz + Fz._z * Kz,
          Dz = zz._w * oz + sz._w * vz + tz._w * Uz + Fz._w * Kz;
        return new wz(uz, Nz, bz, Dz)
      }
      static Hermite1stDerivative(zz, tz, sz, Fz, Wz) {
        const Xz = new wz;
        return this.Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz), Xz
      }
      static Hermite1stDerivativeToRef(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = Wz * Wz;
        return Xz._x = 6 * (Oz - Wz) * zz._x + (3 * Oz - 4 * Wz + 1) * tz._x + 6 * (-Oz + Wz) * sz._x + (3 * Oz - 2 * Wz) * Fz._x, Xz._y = 6 * (Oz - Wz) * zz._y + (3 * Oz - 4 * Wz + 1) * tz._y + 6 * (-Oz + Wz) * sz._y + (3 * Oz - 2 * Wz) * Fz._y, Xz._z = 6 * (Oz - Wz) * zz._z + (3 * Oz - 4 * Wz + 1) * tz._z + 6 * (-Oz + Wz) * sz._z + (3 * Oz - 2 * Wz) * Fz._z, Xz._w = 6 * (Oz - Wz) * zz._w + (3 * Oz - 4 * Wz + 1) * tz._w + 6 * (-Oz + Wz) * sz._w + (3 * Oz - 2 * Wz) * Fz._w, Xz._isDirty = !0, Xz
      }
      static Normalize(zz) {
        const tz = wz.Zero();
        return wz.NormalizeToRef(zz, tz), tz
      }
      static NormalizeToRef(zz, tz) {
        return zz.normalizeToRef(tz), tz
      }
      static Clamp(zz, tz, sz) {
        const Fz = new wz;
        return wz.ClampToRef(zz, tz, sz, Fz), Fz
      }
      static ClampToRef(zz, tz, sz, Fz) {
        return Fz.m_((0, oz.Clamp)(zz.x, tz.x, sz.x), (0, oz.Clamp)(zz.y, tz.y, sz.y), (0, oz.Clamp)(zz.z, tz.z, sz.z), (0, oz.Clamp)(zz.w, tz.w, sz.w))
      }
      static Random() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new wz((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
      }
      static RandomToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).m_((0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz), (0, oz.RandomRange)(zz, tz))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(zz, tz) {
        return Math.sqrt(wz.DistanceSquared(zz, tz))
      }
      static DistanceSquared(zz, tz) {
        const sz = zz.x - tz.x,
          Fz = zz.y - tz.y,
          Wz = zz.z - tz.z,
          Xz = zz.w - tz.w;
        return sz * sz + Fz * Fz + Wz * Wz + Xz * Xz
      }
      static Center(zz, tz) {
        return wz.CenterToRef(zz, tz, wz.Zero())
      }
      static CenterToRef(zz, tz, sz) {
        return sz.m_((zz.x + tz.x) / 2, (zz.y + tz.y) / 2, (zz.z + tz.z) / 2, (zz.w + tz.w) / 2)
      }
    }
    wz._V8PerformanceHack = new wz(.5, .5, .5, .5);
    class Dz {
      static get Use64Bits() {
        return Xz.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = vz.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Fz = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = zz, this._isIdentity3x2 = zz || sz, this._isIdentityDirty = !this._isIdentity && tz, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Fz
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Xz.c.MatrixTrackPrecisionChange && Xz.c.MatrixTrackedMatrices.push(this), this._m = new Xz.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const zz = this._m;
          this._isIdentity = 1 === zz[0] && 0 === zz[1] && 0 === zz[2] && 0 === zz[3] && 0 === zz[4] && 1 === zz[5] && 0 === zz[6] && 0 === zz[7] && 0 === zz[8] && 0 === zz[9] && 1 === zz[10] && 0 === zz[11] && 0 === zz[12] && 0 === zz[13] && 0 === zz[14] && 1 === zz[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const zz = this._m,
          tz = zz[0],
          sz = zz[1],
          Fz = zz[2],
          Wz = zz[3],
          Xz = zz[4],
          Oz = zz[5],
          oz = zz[6],
          vz = zz[7],
          Uz = zz[8],
          Kz = zz[9],
          uz = zz[10],
          Nz = zz[11],
          bz = zz[12],
          wz = zz[13],
          Dz = zz[14],
          gz = zz[15],
          Hz = uz * gz - Dz * Nz,
          Bz = Kz * gz - wz * Nz,
          Pz = Kz * Dz - wz * uz,
          rz = Uz * gz - bz * Nz,
          Yz = Uz * Dz - uz * bz,
          xz = Uz * wz - bz * Kz;
        return tz * +(Oz * Hz - oz * Bz + vz * Pz) + sz * -(Xz * Hz - oz * rz + vz * Yz) + Fz * +(Xz * Bz - Oz * rz + vz * xz) + Wz * -(Xz * Pz - Oz * Yz + oz * xz)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!zz) return this._m;
        const sz = this._m;
        for (let Fz = 0; Fz < 16; Fz++) zz[tz + Fz] = sz[Fz];
        return this
      }
      hsz() {
        return this._m
      }
      Ztz(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Dz.FromArrayToRef(zz, tz, this)
      }
      m_() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        return Dz.FromArrayToRef(tz, 0, this)
      }
      set() {
        const zz = this._m;
        for (let tz = 0; tz < 16; tz++) zz[tz] = tz < 0 || arguments.length <= tz ? void 0 : arguments[tz];
        return this.markAsUpdated(), this
      }
      Z6(zz) {
        const tz = this._m;
        for (let sz = 0; sz < 16; sz++) tz[sz] = zz;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Dz.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(zz) {
        const tz = new Dz;
        return this.addToRef(zz, tz), tz
      }
      addToRef(zz, tz) {
        const sz = this._m,
          Fz = tz._m,
          Wz = zz.m;
        for (let Xz = 0; Xz < 16; Xz++) Fz[Xz] = sz[Xz] + Wz[Xz];
        return tz.markAsUpdated(), tz
      }
      addToSelf(zz) {
        const tz = this._m,
          sz = zz.m;
        return tz[0] += sz[0], tz[1] += sz[1], tz[2] += sz[2], tz[3] += sz[3], tz[4] += sz[4], tz[5] += sz[5], tz[6] += sz[6], tz[7] += sz[7], tz[8] += sz[8], tz[9] += sz[9], tz[10] += sz[10], tz[11] += sz[11], tz[12] += sz[12], tz[13] += sz[13], tz[14] += sz[14], tz[15] += sz[15], this.markAsUpdated(), this
      }
      addInPlace(zz) {
        const tz = this._m,
          sz = zz.m;
        for (let Fz = 0; Fz < 16; Fz++) tz[Fz] += sz[Fz];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const zz = this._m;
        for (let tz = 0; tz < 16; tz++) zz[tz] += tz < 0 || arguments.length <= tz ? void 0 : arguments[tz];
        return this.markAsUpdated(), this
      }
      subtract(zz) {
        const tz = this._m,
          sz = zz.m;
        for (let Fz = 0; Fz < 16; Fz++) tz[Fz] -= sz[Fz];
        return this.markAsUpdated(), this
      }
      subtractToRef(zz, tz) {
        const sz = this._m,
          Fz = zz.m,
          Wz = tz._m;
        for (let Xz = 0; Xz < 16; Xz++) Wz[Xz] = sz[Xz] - Fz[Xz];
        return tz.markAsUpdated(), tz
      }
      oFz(zz) {
        const tz = this._m,
          sz = zz.m;
        for (let Fz = 0; Fz < 16; Fz++) tz[Fz] -= sz[Fz];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        return this.subtractFromFloatsToRef(...tz, new Dz)
      }
      subtractFromFloatsToRef() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        const Fz = tz.pop(),
          Wz = this._m,
          Xz = Fz._m,
          Oz = tz;
        for (let oz = 0; oz < 16; oz++) Xz[oz] = Wz[oz] - Oz[oz];
        return Fz.markAsUpdated(), Fz
      }
      invertToRef(zz) {
        return !0 === this._isIdentity ? (Dz.IdentityToRef(zz), zz) : ((0, vz.d)(this, zz.hsz()) ? zz.markAsUpdated() : zz.vsz(this), zz)
      }
      addAtIndex(zz, tz) {
        return this._m[zz] += tz, this.markAsUpdated(), this
      }
      multiplyAtIndex(zz, tz) {
        return this._m[zz] *= tz, this.markAsUpdated(), this
      }
      setTranslationFromFloats(zz, tz, sz) {
        return this._m[12] = zz, this._m[13] = tz, this._m[14] = sz, this.markAsUpdated(), this
      }
      addTranslationFromFloats(zz, tz, sz) {
        return this._m[12] += zz, this._m[13] += tz, this._m[14] += sz, this.markAsUpdated(), this
      }
      setTranslation(zz) {
        return this.setTranslationFromFloats(zz._x, zz._y, zz._z)
      }
      getTranslation() {
        return new Nz(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(zz) {
        return zz.x = this._m[12], zz.y = this._m[13], zz.z = this._m[14], zz
      }
      removeRotationAndScaling() {
        const zz = this.m;
        return Dz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, zz[12], zz[13], zz[14], zz[15], this), this._updateIdentityStatus(0 === zz[12] && 0 === zz[13] && 0 === zz[14] && 1 === zz[15]), this
      }
      vsz(zz) {
        zz.copyToArray(this._m);
        const tz = zz;
        return this.updateFlag = tz.updateFlag, this._updateIdentityStatus(tz._isIdentity, tz._isIdentityDirty, tz._isIdentity3x2, tz._isIdentity3x2Dirty), this
      }
      copyToArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, vz.c)(this, zz, tz), this
      }
      multiply(zz) {
        const tz = new Dz;
        return this.multiplyToRef(zz, tz), tz
      }
      multiplyInPlace(zz) {
        const tz = this._m,
          sz = zz.m;
        for (let Fz = 0; Fz < 16; Fz++) tz[Fz] *= sz[Fz];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const zz = this._m;
        for (let tz = 0; tz < 16; tz++) zz[tz] *= tz < 0 || arguments.length <= tz ? void 0 : arguments[tz];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var zz = arguments.length, tz = new Array(zz), sz = 0; sz < zz; sz++) tz[sz] = arguments[sz];
        const Fz = tz.pop(),
          Wz = this._m,
          Xz = Fz._m,
          Oz = tz;
        for (let oz = 0; oz < 16; oz++) Xz[oz] = Wz[oz] * Oz[oz];
        return Fz.markAsUpdated(), Fz
      }
      multiplyToRef(zz, tz) {
        return this._isIdentity ? (tz.vsz(zz), tz) : zz._isIdentity ? (tz.vsz(this), tz) : (this.multiplyToArray(zz, tz._m, 0), tz.markAsUpdated(), tz)
      }
      multiplyToArray(zz, tz, sz) {
        return (0, vz.l)(this, zz, tz, sz), this
      }
      divide(zz) {
        return this.divideToRef(zz, new Dz)
      }
      divideToRef(zz, tz) {
        const sz = this._m,
          Fz = zz.m,
          Wz = tz._m;
        for (let Xz = 0; Xz < 16; Xz++) Wz[Xz] = sz[Xz] / Fz[Xz];
        return tz.markAsUpdated(), tz
      }
      divideInPlace(zz) {
        const tz = this._m,
          sz = zz.m;
        for (let Fz = 0; Fz < 16; Fz++) tz[Fz] /= sz[Fz];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(zz) {
        const tz = this._m,
          sz = zz.m;
        for (let Fz = 0; Fz < 16; Fz++) tz[Fz] = Math.min(tz[Fz], sz[Fz]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const zz = this._m;
        for (let tz = 0; tz < 16; tz++) zz[tz] = Math.min(zz[tz], tz < 0 || arguments.length <= tz ? void 0 : arguments[tz]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(zz) {
        const tz = this._m,
          sz = zz.m;
        for (let Fz = 0; Fz < 16; Fz++) tz[Fz] = Math.max(tz[Fz], sz[Fz]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const zz = this._m;
        for (let tz = 0; tz < 16; tz++) zz[tz] = Math.max(zz[tz], tz < 0 || arguments.length <= tz ? void 0 : arguments[tz]);
        return this.markAsUpdated(), this
      }
      nt() {
        return this.negateToRef(new Dz)
      }
      negateInPlace() {
        const zz = this._m;
        for (let tz = 0; tz < 16; tz++) zz[tz] = -zz[tz];
        return this.markAsUpdated(), this
      }
      negateToRef(zz) {
        const tz = this._m,
          sz = zz._m;
        for (let Fz = 0; Fz < 16; Fz++) sz[Fz] = -tz[Fz];
        return zz.markAsUpdated(), zz
      }
      equals(zz) {
        const tz = zz;
        if (!tz) return !1;
        if ((this._isIdentity || tz._isIdentity) && !this._isIdentityDirty && !tz._isIdentityDirty) return this._isIdentity && tz._isIdentity;
        const sz = this.m,
          Fz = tz.m;
        return sz[0] === Fz[0] && sz[1] === Fz[1] && sz[2] === Fz[2] && sz[3] === Fz[3] && sz[4] === Fz[4] && sz[5] === Fz[5] && sz[6] === Fz[6] && sz[7] === Fz[7] && sz[8] === Fz[8] && sz[9] === Fz[9] && sz[10] === Fz[10] && sz[11] === Fz[11] && sz[12] === Fz[12] && sz[13] === Fz[13] && sz[14] === Fz[14] && sz[15] === Fz[15]
      }
      equalsWithEpsilon(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = this._m,
          Fz = zz.m;
        for (let Wz = 0; Wz < 16; Wz++)
          if (!(0, oz.WithinEpsilon)(sz[Wz], Fz[Wz], tz)) return !1;
        return !0
      }
      wOz() {
        const zz = this._m;
        for (let tz = 0; tz < 16; tz++)
          if (zz[tz] != (tz < 0 || arguments.length <= tz ? void 0 : arguments[tz])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Dz)
      }
      floorToRef(zz) {
        const tz = this._m,
          sz = zz._m;
        for (let Fz = 0; Fz < 16; Fz++) sz[Fz] = Math.floor(tz[Fz]);
        return zz.markAsUpdated(), zz
      }
      fract() {
        return this.fractToRef(new Dz)
      }
      fractToRef(zz) {
        const tz = this._m,
          sz = zz._m;
        for (let Fz = 0; Fz < 16; Fz++) sz[Fz] = tz[Fz] - Math.floor(tz[Fz]);
        return zz.markAsUpdated(), zz
      }
      clone() {
        const zz = new Dz;
        return zz.vsz(this), zz
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let zz = Kz(this._m[0]);
        for (let tz = 1; tz < 16; tz++) zz = 397 * zz ^ Kz(this._m[tz]);
        return zz
      }
      decomposeToTransformNode(zz) {
        return zz.rotationQuaternion = zz.rotationQuaternion || new wz, this.decompose(zz.nX, zz.rotationQuaternion, zz.position)
      }
      decompose(zz, tz, sz, Fz) {
        let Wz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return sz && sz.Z6(0), zz && zz.Z6(1), tz && tz.m_(0, 0, 0, 1), !0;
        const Xz = this._m;
        if (sz && sz.m_(Xz[12], Xz[13], Xz[14]), (zz = zz || gz.XD[0]).x = Math.sqrt(Xz[0] * Xz[0] + Xz[1] * Xz[1] + Xz[2] * Xz[2]), zz.y = Math.sqrt(Xz[4] * Xz[4] + Xz[5] * Xz[5] + Xz[6] * Xz[6]), zz.z = Math.sqrt(Xz[8] * Xz[8] + Xz[9] * Xz[9] + Xz[10] * Xz[10]), Fz) {
          const tz = (Wz ? Fz.absoluteScaling.x : Fz.nX.x) < 0 ? -1 : 1,
            sz = (Wz ? Fz.absoluteScaling.y : Fz.nX.y) < 0 ? -1 : 1,
            Xz = (Wz ? Fz.absoluteScaling.z : Fz.nX.z) < 0 ? -1 : 1;
          zz.x *= tz, zz.y *= sz, zz.z *= Xz
        } else this.determinant() <= 0 && (zz.y *= -1);
        if (0 === zz._x || 0 === zz._y || 0 === zz._z) return tz && tz.m_(0, 0, 0, 1), !1;
        if (tz) {
          const sz = 1 / zz._x,
            Fz = 1 / zz._y,
            Wz = 1 / zz._z;
          Dz.FromValuesToRef(Xz[0] * sz, Xz[1] * sz, Xz[2] * sz, 0, Xz[4] * Fz, Xz[5] * Fz, Xz[6] * Fz, 0, Xz[8] * Wz, Xz[9] * Wz, Xz[10] * Wz, 0, 0, 0, 0, 1, gz.Matrix[0]), wz.FromRotationMatrixToRef(gz.Matrix[0], tz)
        }
        return !0
      }
      getRow(zz) {
        if (zz < 0 || zz > 3) return null;
        const tz = 4 * zz;
        return new bz(this._m[tz + 0], this._m[tz + 1], this._m[tz + 2], this._m[tz + 3])
      }
      getRowToRef(zz, tz) {
        if (zz >= 0 && zz <= 3) {
          const sz = 4 * zz;
          tz.x = this._m[sz + 0], tz.y = this._m[sz + 1], tz.z = this._m[sz + 2], tz.w = this._m[sz + 3]
        }
        return tz
      }
      setRow(zz, tz) {
        return this.setRowFromFloats(zz, tz.x, tz.y, tz.z, tz.w)
      }
      transpose() {
        const zz = new Dz;
        return Dz.TransposeToRef(this, zz), zz
      }
      transposeToRef(zz) {
        return Dz.TransposeToRef(this, zz), zz
      }
      setRowFromFloats(zz, tz, sz, Fz, Wz) {
        if (zz < 0 || zz > 3) return this;
        const Xz = 4 * zz;
        return this._m[Xz + 0] = tz, this._m[Xz + 1] = sz, this._m[Xz + 2] = Fz, this._m[Xz + 3] = Wz, this.markAsUpdated(), this
      }
      scale(zz) {
        const tz = new Dz;
        return this.scaleToRef(zz, tz), tz
      }
      scaleToRef(zz, tz) {
        for (let sz = 0; sz < 16; sz++) tz._m[sz] = this._m[sz] * zz;
        return tz.markAsUpdated(), tz
      }
      scaleAndAddToRef(zz, tz) {
        for (let sz = 0; sz < 16; sz++) tz._m[sz] += this._m[sz] * zz;
        return tz.markAsUpdated(), tz
      }
      scaleInPlace(zz) {
        const tz = this._m;
        for (let sz = 0; sz < 16; sz++) tz[sz] *= zz;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(zz) {
        const tz = gz.Matrix[0];
        this.invertToRef(tz), tz.transposeToRef(zz);
        const sz = zz._m;
        return Dz.FromValuesToRef(sz[0], sz[1], sz[2], 0, sz[4], sz[5], sz[6], 0, sz[8], sz[9], sz[10], 0, 0, 0, 0, 1, zz), zz
      }
      getRotationMatrix() {
        const zz = new Dz;
        return this.getRotationMatrixToRef(zz), zz
      }
      getRotationMatrixToRef(zz) {
        const tz = gz.XD[0];
        if (!this.decompose(tz)) return Dz.IdentityToRef(zz), zz;
        const sz = this._m,
          Fz = 1 / tz._x,
          Wz = 1 / tz._y,
          Xz = 1 / tz._z;
        return Dz.FromValuesToRef(sz[0] * Fz, sz[1] * Fz, sz[2] * Fz, 0, sz[4] * Wz, sz[5] * Wz, sz[6] * Wz, 0, sz[8] * Xz, sz[9] * Xz, sz[10] * Xz, 0, 0, 0, 0, 1, zz), zz
      }
      toggleModelMatrixHandInPlace() {
        const zz = this._m;
        return zz[2] *= -1, zz[6] *= -1, zz[8] *= -1, zz[9] *= -1, zz[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const zz = this._m;
        return zz[8] *= -1, zz[9] *= -1, zz[10] *= -1, zz[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(Bz, this), this
      }
      static FromArray(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sz = new Dz;
        return Dz.FromArrayToRef(zz, tz, sz), sz
      }
      static FromArrayToRef(zz, tz, sz) {
        for (let Fz = 0; Fz < 16; Fz++) sz._m[Fz] = zz[Fz + tz];
        return sz.markAsUpdated(), sz
      }
      static FromFloat32ArrayToRefScaled(zz, tz, sz, Fz) {
        return Fz._m[0] = zz[0 + tz] * sz, Fz._m[1] = zz[1 + tz] * sz, Fz._m[2] = zz[2 + tz] * sz, Fz._m[3] = zz[3 + tz] * sz, Fz._m[4] = zz[4 + tz] * sz, Fz._m[5] = zz[5 + tz] * sz, Fz._m[6] = zz[6 + tz] * sz, Fz._m[7] = zz[7 + tz] * sz, Fz._m[8] = zz[8 + tz] * sz, Fz._m[9] = zz[9 + tz] * sz, Fz._m[10] = zz[10 + tz] * sz, Fz._m[11] = zz[11 + tz] * sz, Fz._m[12] = zz[12 + tz] * sz, Fz._m[13] = zz[13 + tz] * sz, Fz._m[14] = zz[14 + tz] * sz, Fz._m[15] = zz[15 + tz] * sz, Fz.markAsUpdated(), Fz
      }
      static get IdentityReadOnly() {
        return Dz._IdentityReadOnly
      }
      static FromValuesToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, Dz, gz) {
        const Hz = gz._m;
        Hz[0] = zz, Hz[1] = tz, Hz[2] = sz, Hz[3] = Fz, Hz[4] = Wz, Hz[5] = Xz, Hz[6] = Oz, Hz[7] = oz, Hz[8] = vz, Hz[9] = Uz, Hz[10] = Kz, Hz[11] = uz, Hz[12] = Nz, Hz[13] = bz, Hz[14] = wz, Hz[15] = Dz, gz.markAsUpdated()
      }
      static FromValues(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz, uz, Nz, bz, wz, gz) {
        const Hz = new Dz,
          Bz = Hz._m;
        return Bz[0] = zz, Bz[1] = tz, Bz[2] = sz, Bz[3] = Fz, Bz[4] = Wz, Bz[5] = Xz, Bz[6] = Oz, Bz[7] = oz, Bz[8] = vz, Bz[9] = Uz, Bz[10] = Kz, Bz[11] = uz, Bz[12] = Nz, Bz[13] = bz, Bz[14] = wz, Bz[15] = gz, Hz.markAsUpdated(), Hz
      }
      static Compose(zz, tz, sz) {
        const Fz = new Dz;
        return Dz.ComposeToRef(zz, tz, sz, Fz), Fz
      }
      static ComposeToRef(zz, tz, sz, Fz) {
        const Wz = Fz._m,
          Xz = tz._x,
          Oz = tz._y,
          oz = tz._z,
          vz = tz._w,
          Uz = Xz + Xz,
          Kz = Oz + Oz,
          uz = oz + oz,
          Nz = Xz * Uz,
          bz = Xz * Kz,
          wz = Xz * uz,
          Dz = Oz * Kz,
          gz = Oz * uz,
          Hz = oz * uz,
          Bz = vz * Uz,
          Pz = vz * Kz,
          rz = vz * uz,
          Yz = zz._x,
          xz = zz._y,
          mz = zz._z;
        return Wz[0] = (1 - (Dz + Hz)) * Yz, Wz[1] = (bz + rz) * Yz, Wz[2] = (wz - Pz) * Yz, Wz[3] = 0, Wz[4] = (bz - rz) * xz, Wz[5] = (1 - (Nz + Hz)) * xz, Wz[6] = (gz + Bz) * xz, Wz[7] = 0, Wz[8] = (wz + Pz) * mz, Wz[9] = (gz - Bz) * mz, Wz[10] = (1 - (Nz + Dz)) * mz, Wz[11] = 0, Wz[12] = sz._x, Wz[13] = sz._y, Wz[14] = sz._z, Wz[15] = 1, Fz.markAsUpdated(), Fz
      }
      static Identity() {
        const zz = Dz.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return zz._updateIdentityStatus(!0), zz
      }
      static IdentityToRef(zz) {
        return Dz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, zz), zz._updateIdentityStatus(!0), zz
      }
      static Zero() {
        const zz = Dz.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return zz._updateIdentityStatus(!1), zz
      }
      static RotationX(zz) {
        const tz = new Dz;
        return Dz.RotationXToRef(zz, tz), tz
      }
      static Invert(zz) {
        const tz = new Dz;
        return zz.invertToRef(tz), tz
      }
      static RotationXToRef(zz, tz) {
        const sz = Math.sin(zz),
          Fz = Math.cos(zz);
        return Dz.FromValuesToRef(1, 0, 0, 0, 0, Fz, sz, 0, 0, -sz, Fz, 0, 0, 0, 0, 1, tz), tz._updateIdentityStatus(1 === Fz && 0 === sz), tz
      }
      static RotationY(zz) {
        const tz = new Dz;
        return Dz.RotationYToRef(zz, tz), tz
      }
      static RotationYToRef(zz, tz) {
        const sz = Math.sin(zz),
          Fz = Math.cos(zz);
        return Dz.FromValuesToRef(Fz, 0, -sz, 0, 0, 1, 0, 0, sz, 0, Fz, 0, 0, 0, 0, 1, tz), tz._updateIdentityStatus(1 === Fz && 0 === sz), tz
      }
      static RotationZ(zz) {
        const tz = new Dz;
        return Dz.RotationZToRef(zz, tz), tz
      }
      static RotationZToRef(zz, tz) {
        const sz = Math.sin(zz),
          Fz = Math.cos(zz);
        return Dz.FromValuesToRef(Fz, sz, 0, 0, -sz, Fz, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, tz), tz._updateIdentityStatus(1 === Fz && 0 === sz), tz
      }
      static RotationAxis(zz, tz) {
        const sz = new Dz;
        return Dz.RotationAxisToRef(zz, tz, sz), sz
      }
      static RotationAxisToRef(zz, tz, sz) {
        const Fz = Math.sin(-tz),
          Wz = Math.cos(-tz),
          Xz = 1 - Wz;
        zz = zz.normalizeToRef(gz.XD[0]);
        const Oz = sz._m;
        return Oz[0] = zz._x * zz._x * Xz + Wz, Oz[1] = zz._x * zz._y * Xz - zz._z * Fz, Oz[2] = zz._x * zz._z * Xz + zz._y * Fz, Oz[3] = 0, Oz[4] = zz._y * zz._x * Xz + zz._z * Fz, Oz[5] = zz._y * zz._y * Xz + Wz, Oz[6] = zz._y * zz._z * Xz - zz._x * Fz, Oz[7] = 0, Oz[8] = zz._z * zz._x * Xz - zz._y * Fz, Oz[9] = zz._z * zz._y * Xz + zz._x * Fz, Oz[10] = zz._z * zz._z * Xz + Wz, Oz[11] = 0, Oz[12] = 0, Oz[13] = 0, Oz[14] = 0, Oz[15] = 1, sz.markAsUpdated(), sz
      }
      static RotationAlignToRef(zz, tz, sz) {
        let Wz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Xz = Nz.Dot(tz, zz),
          Oz = sz._m;
        if (Xz < -1 + Fz.c) Oz[0] = -1, Oz[1] = 0, Oz[2] = 0, Oz[3] = 0, Oz[4] = 0, Oz[5] = Wz ? 1 : -1, Oz[6] = 0, Oz[7] = 0, Oz[8] = 0, Oz[9] = 0, Oz[10] = Wz ? -1 : 1, Oz[11] = 0;
        else {
          const sz = Nz.Cross(tz, zz),
            Fz = 1 / (1 + Xz);
          Oz[0] = sz._x * sz._x * Fz + Xz, Oz[1] = sz._y * sz._x * Fz - sz._z, Oz[2] = sz._z * sz._x * Fz + sz._y, Oz[3] = 0, Oz[4] = sz._x * sz._y * Fz + sz._z, Oz[5] = sz._y * sz._y * Fz + Xz, Oz[6] = sz._z * sz._y * Fz - sz._x, Oz[7] = 0, Oz[8] = sz._x * sz._z * Fz - sz._y, Oz[9] = sz._y * sz._z * Fz + sz._x, Oz[10] = sz._z * sz._z * Fz + Xz, Oz[11] = 0
        }
        return Oz[12] = 0, Oz[13] = 0, Oz[14] = 0, Oz[15] = 1, sz.markAsUpdated(), sz
      }
      static RotationYawPitchRoll(zz, tz, sz) {
        const Fz = new Dz;
        return Dz.RotationYawPitchRollToRef(zz, tz, sz, Fz), Fz
      }
      static RotationYawPitchRollToRef(zz, tz, sz, Fz) {
        return wz.RotationYawPitchRollToRef(zz, tz, sz, gz.Quaternion[0]), gz.Quaternion[0].toRotationMatrix(Fz), Fz
      }
      static Scaling(zz, tz, sz) {
        const Fz = new Dz;
        return Dz.ScalingToRef(zz, tz, sz, Fz), Fz
      }
      static ScalingToRef(zz, tz, sz, Fz) {
        return Dz.FromValuesToRef(zz, 0, 0, 0, 0, tz, 0, 0, 0, 0, sz, 0, 0, 0, 0, 1, Fz), Fz._updateIdentityStatus(1 === zz && 1 === tz && 1 === sz), Fz
      }
      static Translation(zz, tz, sz) {
        const Fz = new Dz;
        return Dz.TranslationToRef(zz, tz, sz, Fz), Fz
      }
      static TranslationToRef(zz, tz, sz, Fz) {
        return Dz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, zz, tz, sz, 1, Fz), Fz._updateIdentityStatus(0 === zz && 0 === tz && 0 === sz), Fz
      }
      static Lerp(zz, tz, sz) {
        const Fz = new Dz;
        return Dz.LerpToRef(zz, tz, sz, Fz), Fz
      }
      static LerpToRef(zz, tz, sz, Fz) {
        const Wz = Fz._m,
          Xz = zz.m,
          Oz = tz.m;
        for (let oz = 0; oz < 16; oz++) Wz[oz] = Xz[oz] * (1 - sz) + Oz[oz] * sz;
        return Fz.markAsUpdated(), Fz
      }
      static DecomposeLerp(zz, tz, sz) {
        const Fz = new Dz;
        return Dz.DecomposeLerpToRef(zz, tz, sz, Fz), Fz
      }
      static DecomposeLerpToRef(zz, tz, sz, Fz) {
        const Wz = gz.XD[0],
          Xz = gz.Quaternion[0],
          Oz = gz.XD[1];
        zz.decompose(Wz, Xz, Oz);
        const oz = gz.XD[2],
          vz = gz.Quaternion[1],
          Uz = gz.XD[3];
        tz.decompose(oz, vz, Uz);
        const Kz = gz.XD[4];
        Nz.LerpToRef(Wz, oz, sz, Kz);
        const uz = gz.Quaternion[2];
        wz.SlerpToRef(Xz, vz, sz, uz);
        const bz = gz.XD[5];
        return Nz.LerpToRef(Oz, Uz, sz, bz), Dz.ComposeToRef(Kz, uz, bz, Fz), Fz
      }
      static LookAtLH(zz, tz, sz) {
        const Fz = new Dz;
        return Dz.LookAtLHToRef(zz, tz, sz, Fz), Fz
      }
      static LookAtLHToRef(zz, tz, sz, Fz) {
        const Wz = gz.XD[0],
          Xz = gz.XD[1],
          Oz = gz.XD[2];
        tz.subtractToRef(zz, Oz), Oz.normalize(), Nz.CrossToRef(sz, Oz, Wz);
        const oz = Wz.lengthSquared();
        0 === oz ? Wz.x = 1 : Wz.normalizeFromLength(Math.sqrt(oz)), Nz.CrossToRef(Oz, Wz, Xz), Xz.normalize();
        const vz = -Nz.Dot(Wz, zz),
          Uz = -Nz.Dot(Xz, zz),
          Kz = -Nz.Dot(Oz, zz);
        return Dz.FromValuesToRef(Wz._x, Xz._x, Oz._x, 0, Wz._y, Xz._y, Oz._y, 0, Wz._z, Xz._z, Oz._z, 0, vz, Uz, Kz, 1, Fz), Fz
      }
      static LookAtRH(zz, tz, sz) {
        const Fz = new Dz;
        return Dz.LookAtRHToRef(zz, tz, sz, Fz), Fz
      }
      static LookAtRHToRef(zz, tz, sz, Fz) {
        const Wz = gz.XD[0],
          Xz = gz.XD[1],
          Oz = gz.XD[2];
        zz.subtractToRef(tz, Oz), Oz.normalize(), Nz.CrossToRef(sz, Oz, Wz);
        const oz = Wz.lengthSquared();
        0 === oz ? Wz.x = 1 : Wz.normalizeFromLength(Math.sqrt(oz)), Nz.CrossToRef(Oz, Wz, Xz), Xz.normalize();
        const vz = -Nz.Dot(Wz, zz),
          Uz = -Nz.Dot(Xz, zz),
          Kz = -Nz.Dot(Oz, zz);
        return Dz.FromValuesToRef(Wz._x, Xz._x, Oz._x, 0, Wz._y, Xz._y, Oz._y, 0, Wz._z, Xz._z, Oz._z, 0, vz, Uz, Kz, 1, Fz), Fz
      }
      static LookDirectionLH(zz, tz) {
        const sz = new Dz;
        return Dz.LookDirectionLHToRef(zz, tz, sz), sz
      }
      static LookDirectionLHToRef(zz, tz, sz) {
        const Fz = gz.XD[0];
        Fz.vsz(zz), Fz.scaleInPlace(-1);
        const Wz = gz.XD[1];
        return Nz.CrossToRef(tz, Fz, Wz), Dz.FromValuesToRef(Wz._x, Wz._y, Wz._z, 0, tz._x, tz._y, tz._z, 0, Fz._x, Fz._y, Fz._z, 0, 0, 0, 0, 1, sz), sz
      }
      static LookDirectionRH(zz, tz) {
        const sz = new Dz;
        return Dz.LookDirectionRHToRef(zz, tz, sz), sz
      }
      static LookDirectionRHToRef(zz, tz, sz) {
        const Fz = gz.XD[2];
        return Nz.CrossToRef(tz, zz, Fz), Dz.FromValuesToRef(Fz._x, Fz._y, Fz._z, 0, tz._x, tz._y, tz._z, 0, zz._x, zz._y, zz._z, 0, 0, 0, 0, 1, sz), sz
      }
      static OrthoLH(zz, tz, sz, Fz, Wz) {
        const Xz = new Dz;
        return Dz.OrthoLHToRef(zz, tz, sz, Fz, Xz, Wz), Xz
      }
      static OrthoLHToRef(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = 2 / zz,
          oz = 2 / tz,
          vz = 2 / (Fz - sz),
          Uz = -(Fz + sz) / (Fz - sz);
        return Dz.FromValuesToRef(Oz, 0, 0, 0, 0, oz, 0, 0, 0, 0, vz, 0, 0, 0, Uz, 1, Wz), Xz && Wz.multiplyToRef(Bz, Wz), Wz._updateIdentityStatus(1 === Oz && 1 === oz && 1 === vz && 0 === Uz), Wz
      }
      static OrthoOffCenterLH(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = new Dz;
        return Dz.OrthoOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, oz, Oz), oz
      }
      static OrthoOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        const vz = 2 / (tz - zz),
          Uz = 2 / (Fz - sz),
          Kz = 2 / (Xz - Wz),
          uz = -(Xz + Wz) / (Xz - Wz),
          Nz = (zz + tz) / (zz - tz),
          bz = (Fz + sz) / (sz - Fz);
        return Dz.FromValuesToRef(vz, 0, 0, 0, 0, Uz, 0, 0, 0, 0, Kz, 0, Nz, bz, uz, 1, Oz), oz && Oz.multiplyToRef(Bz, Oz), Oz.markAsUpdated(), Oz
      }
      static ObliqueOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
        const uz = -Oz * Math.cos(oz),
          Nz = -Oz * Math.sin(oz);
        return Dz.TranslationToRef(0, 0, -vz, gz.Matrix[1]), Dz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, uz, Nz, 1, 0, 0, 0, 0, 1, gz.Matrix[0]), gz.Matrix[1].multiplyToRef(gz.Matrix[0], gz.Matrix[0]), Dz.TranslationToRef(0, 0, vz, gz.Matrix[1]), gz.Matrix[0].multiplyToRef(gz.Matrix[1], gz.Matrix[0]), Dz.OrthoOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, Uz, Kz), gz.Matrix[0].multiplyToRef(Uz, Uz), Uz
      }
      static OrthoOffCenterRH(zz, tz, sz, Fz, Wz, Xz, Oz) {
        const oz = new Dz;
        return Dz.OrthoOffCenterRHToRef(zz, tz, sz, Fz, Wz, Xz, oz, Oz), oz
      }
      static OrthoOffCenterRHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz) {
        return Dz.OrthoOffCenterLHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz), Oz._m[10] *= -1, Oz
      }
      static ObliqueOffCenterRHToRef(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
        const uz = Oz * Math.cos(oz),
          Nz = Oz * Math.sin(oz);
        return Dz.TranslationToRef(0, 0, vz, gz.Matrix[1]), Dz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, uz, Nz, 1, 0, 0, 0, 0, 1, gz.Matrix[0]), gz.Matrix[1].multiplyToRef(gz.Matrix[0], gz.Matrix[0]), Dz.TranslationToRef(0, 0, -vz, gz.Matrix[1]), gz.Matrix[0].multiplyToRef(gz.Matrix[1], gz.Matrix[0]), Dz.OrthoOffCenterRHToRef(zz, tz, sz, Fz, Wz, Xz, Uz, Kz), gz.Matrix[0].multiplyToRef(Uz, Uz), Uz
      }
      static PerspectiveLH(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Oz = new Dz,
          oz = 2 * sz / zz,
          vz = 2 * sz / tz,
          Uz = (Fz + sz) / (Fz - sz),
          Kz = -2 * Fz * sz / (Fz - sz),
          uz = Math.tan(Xz);
        return Dz.FromValuesToRef(oz, 0, 0, 0, 0, vz, 0, uz, 0, 0, Uz, 1, 0, 0, Kz, 0, Oz), Wz && Oz.multiplyToRef(Bz, Oz), Oz._updateIdentityStatus(!1), Oz
      }
      static PerspectiveFovLH(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const oz = new Dz;
        return Dz.PerspectiveFovLHToRef(zz, tz, sz, Fz, oz, !0, Wz, Xz, Oz), oz
      }
      static PerspectiveFovLHToRef(zz, tz, sz, Fz, Wz) {
        let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Oz = arguments.length > 6 ? arguments[6] : void 0,
          oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Uz = sz,
          Kz = Fz,
          uz = 1 / Math.tan(.5 * zz),
          Nz = Xz ? uz / tz : uz,
          bz = Xz ? uz : uz * tz,
          wz = vz && 0 === Uz ? -1 : 0 !== Kz ? (Kz + Uz) / (Kz - Uz) : 1,
          gz = vz && 0 === Uz ? 2 * Kz : 0 !== Kz ? -2 * Kz * Uz / (Kz - Uz) : -2 * Uz,
          Hz = Math.tan(oz);
        return Dz.FromValuesToRef(Nz, 0, 0, 0, 0, bz, 0, Hz, 0, 0, wz, 1, 0, 0, gz, 0, Wz), Oz && Wz.multiplyToRef(Bz, Wz), Wz._updateIdentityStatus(!1), Wz
      }
      static PerspectiveFovReverseLHToRef(zz, tz, sz, Fz, Wz) {
        let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Oz = arguments.length > 6 ? arguments[6] : void 0,
          oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const vz = 1 / Math.tan(.5 * zz),
          Uz = Xz ? vz / tz : vz,
          Kz = Xz ? vz : vz * tz,
          uz = Math.tan(oz);
        return Dz.FromValuesToRef(Uz, 0, 0, 0, 0, Kz, 0, uz, 0, 0, -sz, 1, 0, 0, 1, 0, Wz), Oz && Wz.multiplyToRef(Bz, Wz), Wz._updateIdentityStatus(!1), Wz
      }
      static PerspectiveFovRH(zz, tz, sz, Fz, Wz) {
        let Xz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Oz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const oz = new Dz;
        return Dz.PerspectiveFovRHToRef(zz, tz, sz, Fz, oz, !0, Wz, Xz, Oz), oz
      }
      static PerspectiveFovRHToRef(zz, tz, sz, Fz, Wz) {
        let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Oz = arguments.length > 6 ? arguments[6] : void 0,
          oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          vz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Uz = sz,
          Kz = Fz,
          uz = 1 / Math.tan(.5 * zz),
          Nz = Xz ? uz / tz : uz,
          bz = Xz ? uz : uz * tz,
          wz = vz && 0 === Uz ? 1 : 0 !== Kz ? -(Kz + Uz) / (Kz - Uz) : -1,
          gz = vz && 0 === Uz ? 2 * Kz : 0 !== Kz ? -2 * Kz * Uz / (Kz - Uz) : -2 * Uz,
          Hz = Math.tan(oz);
        return Dz.FromValuesToRef(Nz, 0, 0, 0, 0, bz, 0, Hz, 0, 0, wz, -1, 0, 0, gz, 0, Wz), Oz && Wz.multiplyToRef(Bz, Wz), Wz._updateIdentityStatus(!1), Wz
      }
      static PerspectiveFovReverseRHToRef(zz, tz, sz, Fz, Wz) {
        let Xz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Oz = arguments.length > 6 ? arguments[6] : void 0,
          oz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const vz = 1 / Math.tan(.5 * zz),
          Uz = Xz ? vz / tz : vz,
          Kz = Xz ? vz : vz * tz,
          uz = Math.tan(oz);
        return Dz.FromValuesToRef(Uz, 0, 0, 0, 0, Kz, 0, uz, 0, 0, -sz, -1, 0, 0, -1, 0, Wz), Oz && Wz.multiplyToRef(Bz, Wz), Wz._updateIdentityStatus(!1), Wz
      }
      static GetFinalMatrix(zz, tz, sz, Fz, Wz, Xz) {
        const Oz = zz.width,
          oz = zz.height,
          vz = zz.x,
          Uz = zz.y,
          Kz = Dz.FromValues(Oz / 2, 0, 0, 0, 0, -oz / 2, 0, 0, 0, 0, Xz - Wz, 0, vz + Oz / 2, oz / 2 + Uz, Wz, 1),
          uz = new Dz;
        return tz.multiplyToRef(sz, uz), uz.multiplyToRef(Fz, uz), uz.multiplyToRef(Kz, uz)
      }
      static GetAsMatrix2x2(zz) {
        const tz = zz.m,
          sz = [tz[0], tz[1], tz[4], tz[5]];
        return Xz.c.MatrixUse64Bits ? sz : new Float32Array(sz)
      }
      static GetAsMatrix3x3(zz) {
        const tz = zz.m,
          sz = [tz[0], tz[1], tz[2], tz[4], tz[5], tz[6], tz[8], tz[9], tz[10]];
        return Xz.c.MatrixUse64Bits ? sz : new Float32Array(sz)
      }
      static Transpose(zz) {
        const tz = new Dz;
        return Dz.TransposeToRef(zz, tz), tz
      }
      static TransposeToRef(zz, tz) {
        const sz = zz.m,
          Fz = sz[0],
          Wz = sz[4],
          Xz = sz[8],
          Oz = sz[12],
          oz = sz[1],
          vz = sz[5],
          Uz = sz[9],
          Kz = sz[13],
          uz = sz[2],
          Nz = sz[6],
          bz = sz[10],
          wz = sz[14],
          Dz = sz[3],
          gz = sz[7],
          Hz = sz[11],
          Bz = sz[15],
          Pz = tz._m;
        return Pz[0] = Fz, Pz[1] = Wz, Pz[2] = Xz, Pz[3] = Oz, Pz[4] = oz, Pz[5] = vz, Pz[6] = Uz, Pz[7] = Kz, Pz[8] = uz, Pz[9] = Nz, Pz[10] = bz, Pz[11] = wz, Pz[12] = Dz, Pz[13] = gz, Pz[14] = Hz, Pz[15] = Bz, tz.markAsUpdated(), tz._updateIdentityStatus(zz._isIdentity, zz._isIdentityDirty), tz
      }
      static Reflection(zz) {
        const tz = new Dz;
        return Dz.ReflectionToRef(zz, tz), tz
      }
      static ReflectionToRef(zz, tz) {
        zz.normalize();
        const sz = zz.normal.x,
          Fz = zz.normal.y,
          Wz = zz.normal.z,
          Xz = -2 * sz,
          Oz = -2 * Fz,
          oz = -2 * Wz;
        return Dz.FromValuesToRef(Xz * sz + 1, Oz * sz, oz * sz, 0, Xz * Fz, Oz * Fz + 1, oz * Fz, 0, Xz * Wz, Oz * Wz, oz * Wz + 1, 0, Xz * zz.d, Oz * zz.d, oz * zz.d, 1, tz), tz
      }
      static FromXYZAxesToRef(zz, tz, sz, Fz) {
        return Dz.FromValuesToRef(zz._x, zz._y, zz._z, 0, tz._x, tz._y, tz._z, 0, sz._x, sz._y, sz._z, 0, 0, 0, 0, 1, Fz), Fz
      }
      static FromQuaternionToRef(zz, tz) {
        const sz = zz._x * zz._x,
          Fz = zz._y * zz._y,
          Wz = zz._z * zz._z,
          Xz = zz._x * zz._y,
          Oz = zz._z * zz._w,
          oz = zz._z * zz._x,
          vz = zz._y * zz._w,
          Uz = zz._y * zz._z,
          Kz = zz._x * zz._w;
        return tz._m[0] = 1 - 2 * (Fz + Wz), tz._m[1] = 2 * (Xz + Oz), tz._m[2] = 2 * (oz - vz), tz._m[3] = 0, tz._m[4] = 2 * (Xz - Oz), tz._m[5] = 1 - 2 * (Wz + sz), tz._m[6] = 2 * (Uz + Kz), tz._m[7] = 0, tz._m[8] = 2 * (oz + vz), tz._m[9] = 2 * (Uz - Kz), tz._m[10] = 1 - 2 * (Fz + sz), tz._m[11] = 0, tz._m[12] = 0, tz._m[13] = 0, tz._m[14] = 0, tz._m[15] = 1, tz.markAsUpdated(), tz
      }
    }
    Dz._IdentityReadOnly = Dz.Identity();
    class gz {}
    gz.XD = (0, Wz.d)(11, Nz.Zero), gz.Matrix = (0, Wz.d)(2, Dz.Identity), gz.Quaternion = (0, Wz.d)(3, wz.Zero);
    class Hz {}
    Hz.Vector2 = (0, Wz.d)(3, uz.Zero), Hz.XD = (0, Wz.d)(13, Nz.Zero), Hz.Vector4 = (0, Wz.d)(3, bz.Zero), Hz.Quaternion = (0, Wz.d)(3, wz.Zero), Hz.Matrix = (0, Wz.d)(8, Dz.Identity);
    const Bz = Dz.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Pz = !1;

    function rz() {
      Pz || (Pz = !0, Object.defineProperties(uz.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Nz.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(bz.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(wz.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Dz.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Uz.g)("BABYLON.Vector2", uz), (0, Uz.g)("BABYLON.Vector3", Nz), (0, Uz.g)("BABYLON.Vector4", bz), (0, Uz.g)("BABYLON.Matrix", Dz))
    }
  },
  36505: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    const Fz = "undefined" !== typeof WeakRef;
    class Wz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(zz, tz, sz, Fz)
      }
      initialize(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = zz, this.skipNextObservers = tz, this.target = sz, this.currentTarget = Fz, this
      }
    }
    class Xz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = zz, this.mask = tz, this.scope = sz, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(zz)
      }
    }
    class Oz {
      static FromPromise(zz, tz) {
        const sz = new Oz;
        return zz.then((zz => {
          sz.notifyObservers(zz)
        })).catch((zz => {
          if (!tz) throw zz;
          tz.notifyObservers(zz)
        })), sz
      }
      get observers() {
        return this._observers
      }
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = tz, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Wz(0), zz && (this._onObserverAdded = zz)
      }
      add(zz) {
        let tz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          sz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!zz) return null;
        const Wz = new Xz(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Wz.unregisterOnNextCall = sz, tz ? this._observers.unshift(Wz) : this._observers.push(Wz), this._onObserverAdded && this._onObserverAdded(Wz), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Wz, this._lastNotifiedValue);
        const Oz = Fz ? new WeakRef(this) : {
          deref: () => this
        };
        return Wz._remove = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const tz = Oz.deref();
          tz && (zz ? tz.remove(Wz) : tz._remove(Wz))
        }, Wz
      }
      addOnce(zz) {
        return this.add(zz, void 0, void 0, void 0, !0)
      }
      remove(zz) {
        if (!zz) return !1;
        zz._remove = null;
        return -1 !== this._observers.indexOf(zz) && (this._deferUnregister(zz), !0)
      }
      removeCallback(zz, tz) {
        for (let sz = 0; sz < this._observers.length; sz++) {
          const Fz = this._observers[sz];
          if (!Fz._willBeUnregistered && (Fz.callback === zz && (!tz || tz === Fz.scope))) return this._deferUnregister(Fz), !0
        }
        return !1
      }
      _deferUnregister(zz) {
        zz._willBeUnregistered || (this._numObserversMarkedAsDeleted++, zz.unregisterOnNextCall = !1, zz._willBeUnregistered = !0, setTimeout((() => {
          this._remove(zz)
        }), 0))
      }
      _remove(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!zz) return !1;
        const sz = this._observers.indexOf(zz);
        return -1 !== sz && (tz && this._numObserversMarkedAsDeleted--, this._observers.splice(sz, 1), !0)
      }
      makeObserverTopPriority(zz) {
        this._remove(zz, !1), this._observers.unshift(zz)
      }
      makeObserverBottomPriority(zz) {
        this._remove(zz, !1), this._observers.push(zz)
      }
      notifyObservers(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zz), !this._observers.length) return !0;
        const Xz = this._eventState;
        Xz.mask = tz, Xz.target = sz, Xz.currentTarget = Fz, Xz.skipNextObservers = !1, Xz.lastReturnValue = zz, Xz.userInfo = Wz;
        for (const Oz of this._observers)
          if (!Oz._willBeUnregistered && (Oz.mask & tz && (Oz.unregisterOnNextCall && this._deferUnregister(Oz), Oz.scope ? Xz.lastReturnValue = Oz.callback.apply(Oz.scope, [zz, Xz]) : Xz.lastReturnValue = Oz.callback(zz, Xz)), Xz.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = tz), zz._willBeUnregistered) return;
        const Fz = this._eventState;
        Fz.mask = sz, Fz.skipNextObservers = !1, zz.unregisterOnNextCall && this._deferUnregister(zz), zz.callback(tz, Fz)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const zz = this._observers.pop();
          zz && (zz._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const zz = new Oz;
        return zz._observers = this._observers.slice(0), zz
      }
      hasSpecificMask() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const tz of this._observers)
          if (tz.mask & zz || tz.mask === zz) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);