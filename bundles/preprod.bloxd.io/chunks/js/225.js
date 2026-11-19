export const id = 225;
export const ids = [225];
export const modules = {
  36543: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    var Ez = bz(36547);
    class nz {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    nz.Instances = [], nz.OnEnginesDisposedObservable = new Ez.b, nz._LastCreatedScene = null, nz.UseFallbackTexture = !0, nz.FallbackTexture = ""
  },
  36537: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => Ez
    });
    class Ez {
      static SetMatrixPrecision(zz) {
        if (Ez.MatrixTrackPrecisionChange = !1, zz && !Ez.MatrixUse64Bits && Ez.MatrixTrackedMatrices)
          for (let uz = 0; uz < Ez.MatrixTrackedMatrices.length; ++uz) {
            const zz = Ez.MatrixTrackedMatrices[uz],
              bz = zz._m;
            zz._m = new Array(16);
            for (let uz = 0; uz < 16; ++uz) zz._m[uz] = bz[uz]
          }
        Ez.MatrixUse64Bits = zz, Ez.MatrixCurrentType = Ez.MatrixUse64Bits ? Array : Float32Array, Ez.MatrixTrackedMatrices = null
      }
    }
    Ez.MatrixUse64Bits = !1, Ez.MatrixTrackPrecisionChange = !0, Ez.MatrixCurrentType = Float32Array, Ez.MatrixTrackedMatrices = []
  },
  36560: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Mz,
      h: () => Hz,
      k: () => tz,
      o: () => Ez,
      p: () => iz,
      r: () => lz
    });
    class Ez {}

    function nz(zz) {
      zz.updateFlag = Ez._UpdateFlagSeed++
    }

    function iz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const nz = zz.obz(),
        iz = uz.obz(),
        lz = nz[0],
        Mz = nz[1],
        tz = nz[2],
        Hz = nz[3],
        Oz = nz[4],
        pz = nz[5],
        dz = nz[6],
        Fz = nz[7],
        Zz = nz[8],
        Rz = nz[9],
        Kz = nz[10],
        wz = nz[11],
        Xz = nz[12],
        fz = nz[13],
        sz = nz[14],
        rz = nz[15],
        oz = iz[0],
        Nz = iz[1],
        vz = iz[2],
        xz = iz[3],
        Jz = iz[4],
        Az = iz[5],
        Tz = iz[6],
        Lz = iz[7],
        Pz = iz[8],
        Gz = iz[9],
        az = iz[10],
        Vz = iz[11],
        mz = iz[12],
        qz = iz[13],
        hz = iz[14],
        Uz = iz[15];
      bz[Ez] = lz * oz + Mz * Jz + tz * Pz + Hz * mz, bz[Ez + 1] = lz * Nz + Mz * Az + tz * Gz + Hz * qz, bz[Ez + 2] = lz * vz + Mz * Tz + tz * az + Hz * hz, bz[Ez + 3] = lz * xz + Mz * Lz + tz * Vz + Hz * Uz, bz[Ez + 4] = Oz * oz + pz * Jz + dz * Pz + Fz * mz, bz[Ez + 5] = Oz * Nz + pz * Az + dz * Gz + Fz * qz, bz[Ez + 6] = Oz * vz + pz * Tz + dz * az + Fz * hz, bz[Ez + 7] = Oz * xz + pz * Lz + dz * Vz + Fz * Uz, bz[Ez + 8] = Zz * oz + Rz * Jz + Kz * Pz + wz * mz, bz[Ez + 9] = Zz * Nz + Rz * Az + Kz * Gz + wz * qz, bz[Ez + 10] = Zz * vz + Rz * Tz + Kz * az + wz * hz, bz[Ez + 11] = Zz * xz + Rz * Lz + Kz * Vz + wz * Uz, bz[Ez + 12] = Xz * oz + fz * Jz + sz * Pz + rz * mz, bz[Ez + 13] = Xz * Nz + fz * Az + sz * Gz + rz * qz, bz[Ez + 14] = Xz * vz + fz * Tz + sz * az + rz * hz, bz[Ez + 15] = Xz * xz + fz * Lz + sz * Vz + rz * Uz
    }

    function lz(zz, uz, bz) {
      let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      iz(zz, uz, bz.obz(), Ez), nz(bz)
    }

    function Mz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ez = zz.obz();
      uz[bz] = Ez[0], uz[bz + 1] = Ez[1], uz[bz + 2] = Ez[2], uz[bz + 3] = Ez[3], uz[bz + 4] = Ez[4], uz[bz + 5] = Ez[5], uz[bz + 6] = Ez[6], uz[bz + 7] = Ez[7], uz[bz + 8] = Ez[8], uz[bz + 9] = Ez[9], uz[bz + 10] = Ez[10], uz[bz + 11] = Ez[11], uz[bz + 12] = Ez[12], uz[bz + 13] = Ez[13], uz[bz + 14] = Ez[14], uz[bz + 15] = Ez[15]
    }

    function tz(zz, uz) {
      const bz = Hz(zz, uz.obz());
      return bz && nz(uz), bz
    }

    function Hz(zz, uz) {
      const bz = zz.obz(),
        Ez = bz[0],
        nz = bz[1],
        iz = bz[2],
        lz = bz[3],
        Mz = bz[4],
        tz = bz[5],
        Hz = bz[6],
        Oz = bz[7],
        pz = bz[8],
        dz = bz[9],
        Fz = bz[10],
        Zz = bz[11],
        Rz = bz[12],
        Kz = bz[13],
        wz = bz[14],
        Xz = bz[15],
        fz = Fz * Xz - wz * Zz,
        sz = dz * Xz - Kz * Zz,
        rz = dz * wz - Kz * Fz,
        oz = pz * Xz - Rz * Zz,
        Nz = pz * wz - Fz * Rz,
        vz = pz * Kz - Rz * dz,
        xz = +(tz * fz - Hz * sz + Oz * rz),
        Jz = -(Mz * fz - Hz * oz + Oz * Nz),
        Az = +(Mz * sz - tz * oz + Oz * vz),
        Tz = -(Mz * rz - tz * Nz + Hz * vz),
        Lz = Ez * xz + nz * Jz + iz * Az + lz * Tz;
      if (0 === Lz) return !1;
      const Pz = 1 / Lz,
        Gz = Hz * Xz - wz * Oz,
        az = tz * Xz - Kz * Oz,
        Vz = tz * wz - Kz * Hz,
        mz = Mz * Xz - Rz * Oz,
        qz = Mz * wz - Rz * Hz,
        hz = Mz * Kz - Rz * tz,
        Uz = Hz * Zz - Fz * Oz,
        cz = tz * Zz - dz * Oz,
        gz = tz * Fz - dz * Hz,
        Sz = Mz * Zz - pz * Oz,
        yz = Mz * Fz - pz * Hz,
        Dz = Mz * dz - pz * tz,
        Qz = -(nz * fz - iz * sz + lz * rz),
        Wz = +(Ez * fz - iz * oz + lz * Nz),
        ez = -(Ez * sz - nz * oz + lz * vz),
        jz = +(Ez * rz - nz * Nz + iz * vz),
        Iz = +(nz * Gz - iz * az + lz * Vz),
        Bz = -(Ez * Gz - iz * mz + lz * qz),
        Cz = +(Ez * az - nz * mz + lz * hz),
        Yz = -(Ez * Vz - nz * qz + iz * hz),
        kz = -(nz * Uz - iz * cz + lz * gz),
        zu = +(Ez * Uz - iz * Sz + lz * yz),
        uu = -(Ez * cz - nz * Sz + lz * Dz),
        bu = +(Ez * gz - nz * yz + iz * Dz);
      return uz[0] = xz * Pz, uz[1] = Qz * Pz, uz[2] = Iz * Pz, uz[3] = kz * Pz, uz[4] = Jz * Pz, uz[5] = Wz * Pz, uz[6] = Bz * Pz, uz[7] = zu * Pz, uz[8] = Az * Pz, uz[9] = ez * Pz, uz[10] = Cz * Pz, uz[11] = uu * Pz, uz[12] = Tz * Pz, uz[13] = jz * Pz, uz[14] = Yz * Pz, uz[15] = bu * Pz, !0
    }
    Ez._UpdateFlagSeed = 0
  },
  36519: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Rz,
      h: () => Zz,
      j: () => sz,
      l: () => wz,
      m: () => pz,
      n: () => dz,
      r: () => Fz
    });
    var Ez = bz(36526),
      nz = bz(36528),
      iz = bz(36537),
      lz = bz(36543),
      Mz = bz(36553),
      tz = bz(36560),
      Hz = bz(36564);
    const Oz = zz => parseInt(zz.toString().replace(/\W/g, ""));
    class pz {
      constructor() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = zz, this.y = uz
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let zz = Oz(this.x);
        return zz = 397 * zz ^ Oz(this.y), zz
      }
      toArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[uz] = this.x, zz[uz + 1] = this.y, this
      }
      Fuz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pz.FromArrayToRef(zz, uz, this), this
      }
      obz() {
        return [this.x, this.y]
      }
      euz(zz) {
        return this.x = zz.x, this.y = zz.y, this
      }
      P_(zz, uz) {
        return this.x = zz, this.y = uz, this
      }
      set(zz, uz) {
        return this.P_(zz, uz)
      }
      Vk(zz) {
        return this.P_(zz, zz)
      }
      add(zz) {
        return new pz(this.x + zz.x, this.y + zz.y)
      }
      addToRef(zz, uz) {
        return uz.x = this.x + zz.x, uz.y = this.y + zz.y, uz
      }
      addInPlace(zz) {
        return this.x += zz.x, this.y += zz.y, this
      }
      addInPlaceFromFloats(zz, uz) {
        return this.x += zz, this.y += uz, this
      }
      addVector3(zz) {
        return new pz(this.x + zz.x, this.y + zz.y)
      }
      subtract(zz) {
        return new pz(this.x - zz.x, this.y - zz.y)
      }
      subtractToRef(zz, uz) {
        return uz.x = this.x - zz.x, uz.y = this.y - zz.y, uz
      }
      Qbz(zz) {
        return this.x -= zz.x, this.y -= zz.y, this
      }
      multiplyInPlace(zz) {
        return this.x *= zz.x, this.y *= zz.y, this
      }
      multiply(zz) {
        return new pz(this.x * zz.x, this.y * zz.y)
      }
      multiplyToRef(zz, uz) {
        return uz.x = this.x * zz.x, uz.y = this.y * zz.y, uz
      }
      multiplyByFloats(zz, uz) {
        return new pz(this.x * zz, this.y * uz)
      }
      divide(zz) {
        return new pz(this.x / zz.x, this.y / zz.y)
      }
      divideToRef(zz, uz) {
        return uz.x = this.x / zz.x, uz.y = this.y / zz.y, uz
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
      minimizeInPlaceFromFloats(zz, uz) {
        return this.x = Math.min(zz, this.x), this.y = Math.min(uz, this.y), this
      }
      maximizeInPlaceFromFloats(zz, uz) {
        return this.x = Math.max(zz, this.x), this.y = Math.max(uz, this.y), this
      }
      subtractFromFloats(zz, uz) {
        return new pz(this.x - zz, this.y - uz)
      }
      subtractFromFloatsToRef(zz, uz, bz) {
        return bz.x = this.x - zz, bz.y = this.y - uz, bz
      }
      nb() {
        return new pz(-this.x, -this.y)
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
        return new pz(this.x * zz, this.y * zz)
      }
      scaleToRef(zz, uz) {
        return uz.x = this.x * zz, uz.y = this.y * zz, uz
      }
      scaleAndAddToRef(zz, uz) {
        return uz.x += this.x * zz, uz.y += this.y * zz, uz
      }
      equals(zz) {
        return zz && this.x === zz.x && this.y === zz.y
      }
      equalsWithEpsilon(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez.b;
        return zz && (0, Mz.WithinEpsilon)(this.x, zz.x, uz) && (0, Mz.WithinEpsilon)(this.y, zz.y, uz)
      }
      zlz(zz, uz) {
        return this.x === zz && this.y === uz
      }
      floor() {
        return new pz(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(zz) {
        return zz.x = Math.floor(this.x), zz.y = Math.floor(this.y), zz
      }
      fract() {
        return new pz(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(zz) {
        return zz.x = this.x - Math.floor(this.x), zz.y = this.y - Math.floor(this.y), zz
      }
      rotate(zz) {
        return this.rotateToRef(zz, new pz)
      }
      rotateToRef(zz, uz) {
        const bz = Math.cos(zz),
          Ez = Math.sin(zz);
        return uz.x = bz * this.x - Ez * this.y, uz.y = Ez * this.x + bz * this.y, uz
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
        const zz = new pz;
        return this.normalizeToRef(zz), zz
      }
      normalizeToRef(zz) {
        const uz = this.length();
        return 0 === uz || 1 === uz ? (zz.x = this.x, zz.y = this.y, zz) : this.scaleToRef(1 / uz, zz)
      }
      clone() {
        return new pz(this.x, this.y)
      }
      dot(zz) {
        return this.x * zz.x + this.y * zz.y
      }
      static Zero() {
        return new pz(0, 0)
      }
      static One() {
        return new pz(1, 1)
      }
      static Random() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new pz((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
      }
      static RandomToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).P_((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
      }
      static get ZeroReadOnly() {
        return pz._ZeroReadOnly
      }
      static FromArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pz(zz[uz], zz[uz + 1])
      }
      static FromArrayToRef(zz, uz, bz) {
        return bz.x = zz[uz], bz.y = zz[uz + 1], bz
      }
      static FromFloatsToRef(zz, uz, bz) {
        return bz.P_(zz, uz), bz
      }
      static CatmullRom(zz, uz, bz, Ez, nz) {
        const iz = nz * nz,
          lz = nz * iz,
          Mz = .5 * (2 * uz.x + (-zz.x + bz.x) * nz + (2 * zz.x - 5 * uz.x + 4 * bz.x - Ez.x) * iz + (-zz.x + 3 * uz.x - 3 * bz.x + Ez.x) * lz),
          tz = .5 * (2 * uz.y + (-zz.y + bz.y) * nz + (2 * zz.y - 5 * uz.y + 4 * bz.y - Ez.y) * iz + (-zz.y + 3 * uz.y - 3 * bz.y + Ez.y) * lz);
        return new pz(Mz, tz)
      }
      static ClampToRef(zz, uz, bz, Ez) {
        return Ez.x = (0, Mz.Clamp)(zz.x, uz.x, bz.x), Ez.y = (0, Mz.Clamp)(zz.y, uz.y, bz.y), Ez
      }
      static Clamp(zz, uz, bz) {
        const Ez = (0, Mz.Clamp)(zz.x, uz.x, bz.x),
          nz = (0, Mz.Clamp)(zz.y, uz.y, bz.y);
        return new pz(Ez, nz)
      }
      static Hermite(zz, uz, bz, Ez, nz) {
        const iz = nz * nz,
          lz = nz * iz,
          Mz = 2 * lz - 3 * iz + 1,
          tz = -2 * lz + 3 * iz,
          Hz = lz - 2 * iz + nz,
          Oz = lz - iz,
          dz = zz.x * Mz + bz.x * tz + uz.x * Hz + Ez.x * Oz,
          Fz = zz.y * Mz + bz.y * tz + uz.y * Hz + Ez.y * Oz;
        return new pz(dz, Fz)
      }
      static Hermite1stDerivative(zz, uz, bz, Ez, nz) {
        return this.Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, new pz)
      }
      static Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz) {
        const lz = nz * nz;
        return iz.x = 6 * (lz - nz) * zz.x + (3 * lz - 4 * nz + 1) * uz.x + 6 * (-lz + nz) * bz.x + (3 * lz - 2 * nz) * Ez.x, iz.y = 6 * (lz - nz) * zz.y + (3 * lz - 4 * nz + 1) * uz.y + 6 * (-lz + nz) * bz.y + (3 * lz - 2 * nz) * Ez.y, iz
      }
      static Lerp(zz, uz, bz) {
        return pz.LerpToRef(zz, uz, bz, new pz)
      }
      static LerpToRef(zz, uz, bz, Ez) {
        return Ez.x = zz.x + (uz.x - zz.x) * bz, Ez.y = zz.y + (uz.y - zz.y) * bz, Ez
      }
      static Dot(zz, uz) {
        return zz.x * uz.x + zz.y * uz.y
      }
      static Normalize(zz) {
        return pz.NormalizeToRef(zz, new pz)
      }
      static NormalizeToRef(zz, uz) {
        return zz.normalizeToRef(uz), uz
      }
      static Minimize(zz, uz) {
        const bz = zz.x < uz.x ? zz.x : uz.x,
          Ez = zz.y < uz.y ? zz.y : uz.y;
        return new pz(bz, Ez)
      }
      static Maximize(zz, uz) {
        const bz = zz.x > uz.x ? zz.x : uz.x,
          Ez = zz.y > uz.y ? zz.y : uz.y;
        return new pz(bz, Ez)
      }
      static Transform(zz, uz) {
        return pz.TransformToRef(zz, uz, new pz)
      }
      static TransformToRef(zz, uz, bz) {
        const Ez = uz.m,
          nz = zz.x * Ez[0] + zz.y * Ez[4] + Ez[12],
          iz = zz.x * Ez[1] + zz.y * Ez[5] + Ez[13];
        return bz.x = nz, bz.y = iz, bz
      }
      static PointInTriangle(zz, uz, bz, Ez) {
        const nz = .5 * (-bz.y * Ez.x + uz.y * (-bz.x + Ez.x) + uz.x * (bz.y - Ez.y) + bz.x * Ez.y),
          iz = nz < 0 ? -1 : 1,
          lz = (uz.y * Ez.x - uz.x * Ez.y + (Ez.y - uz.y) * zz.x + (uz.x - Ez.x) * zz.y) * iz,
          Mz = (uz.x * bz.y - uz.y * bz.x + (uz.y - bz.y) * zz.x + (bz.x - uz.x) * zz.y) * iz;
        return lz > 0 && Mz > 0 && lz + Mz < 2 * nz * iz
      }
      static Distance(zz, uz) {
        return Math.sqrt(pz.DistanceSquared(zz, uz))
      }
      static DistanceSquared(zz, uz) {
        const bz = zz.x - uz.x,
          Ez = zz.y - uz.y;
        return bz * bz + Ez * Ez
      }
      static Center(zz, uz) {
        return pz.CenterToRef(zz, uz, new pz)
      }
      static CenterToRef(zz, uz, bz) {
        return bz.P_((zz.x + uz.x) / 2, (zz.y + uz.y) / 2)
      }
      static DistanceOfPointFromSegment(zz, uz, bz) {
        const Ez = pz.DistanceSquared(uz, bz);
        if (0 === Ez) return pz.Distance(zz, uz);
        const nz = bz.subtract(uz),
          iz = Math.max(0, Math.min(1, pz.Dot(zz.subtract(uz), nz) / Ez)),
          lz = uz.add(nz.multiplyByFloats(iz, iz));
        return pz.Distance(zz, lz)
      }
    }
    pz._V8PerformanceHack = new pz(.5, .5), pz._ZeroReadOnly = pz.Zero();
    class dz {
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
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = zz, this._y = uz, this._z = bz
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "ER"
      }
      getHashCode() {
        let zz = Oz(this._x);
        return zz = 397 * zz ^ Oz(this._y), zz = 397 * zz ^ Oz(this._z), zz
      }
      obz() {
        return [this._x, this._y, this._z]
      }
      toArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[uz] = this._x, zz[uz + 1] = this._y, zz[uz + 2] = this._z, this
      }
      Fuz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dz.FromArrayToRef(zz, uz, this), this
      }
      toQuaternion() {
        return Zz.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(zz) {
        return this._x += zz._x, this._y += zz._y, this._z += zz._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(zz, uz, bz) {
        return this._x += zz, this._y += uz, this._z += bz, this._isDirty = !0, this
      }
      add(zz) {
        return new dz(this._x + zz._x, this._y + zz._y, this._z + zz._z)
      }
      addToRef(zz, uz) {
        return uz._x = this._x + zz._x, uz._y = this._y + zz._y, uz._z = this._z + zz._z, uz._isDirty = !0, uz
      }
      Qbz(zz) {
        return this._x -= zz._x, this._y -= zz._y, this._z -= zz._z, this._isDirty = !0, this
      }
      subtract(zz) {
        return new dz(this._x - zz._x, this._y - zz._y, this._z - zz._z)
      }
      subtractToRef(zz, uz) {
        return this.subtractFromFloatsToRef(zz._x, zz._y, zz._z, uz)
      }
      subtractFromFloats(zz, uz, bz) {
        return new dz(this._x - zz, this._y - uz, this._z - bz)
      }
      subtractFromFloatsToRef(zz, uz, bz, Ez) {
        return Ez._x = this._x - zz, Ez._y = this._y - uz, Ez._z = this._z - bz, Ez._isDirty = !0, Ez
      }
      nb() {
        return new dz(-this._x, -this._y, -this._z)
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
        return new dz(this._x * zz, this._y * zz, this._z * zz)
      }
      scaleToRef(zz, uz) {
        return uz._x = this._x * zz, uz._y = this._y * zz, uz._z = this._z * zz, uz._isDirty = !0, uz
      }
      getNormalToRef(zz) {
        const uz = this.length();
        let bz = Math.acos(this._y / uz);
        const Ez = Math.atan2(this._z, this._x);
        bz > Math.PI / 2 ? bz -= Math.PI / 2 : bz += Math.PI / 2;
        const nz = uz * Math.sin(bz) * Math.cos(Ez),
          iz = uz * Math.cos(bz),
          lz = uz * Math.sin(bz) * Math.sin(Ez);
        return zz.set(nz, iz, lz), zz
      }
      applyRotationQuaternionToRef(zz, uz) {
        const bz = this._x,
          Ez = this._y,
          nz = this._z,
          iz = zz._x,
          lz = zz._y,
          Mz = zz._z,
          tz = zz._w,
          Hz = 2 * (lz * nz - Mz * Ez),
          Oz = 2 * (Mz * bz - iz * nz),
          pz = 2 * (iz * Ez - lz * bz);
        return uz._x = bz + tz * Hz + lz * pz - Mz * Oz, uz._y = Ez + tz * Oz + Mz * Hz - iz * pz, uz._z = nz + tz * pz + iz * Oz - lz * Hz, uz._isDirty = !0, uz
      }
      applyRotationQuaternionInPlace(zz) {
        return this.applyRotationQuaternionToRef(zz, this)
      }
      applyRotationQuaternion(zz) {
        return this.applyRotationQuaternionToRef(zz, new dz)
      }
      scaleAndAddToRef(zz, uz) {
        return uz._x += this._x * zz, uz._y += this._y * zz, uz._z += this._z * zz, uz._isDirty = !0, uz
      }
      projectOnPlane(zz, uz) {
        return this.projectOnPlaneToRef(zz, uz, new dz)
      }
      projectOnPlaneToRef(zz, uz, bz) {
        const Ez = zz.normal,
          nz = zz.d,
          iz = Kz.ER[0];
        this.subtractToRef(uz, iz), iz.normalize();
        const lz = dz.Dot(iz, Ez);
        if (Math.abs(lz) < 1e-10) bz.Vk(1 / 0);
        else {
          const zz = -(dz.Dot(uz, Ez) + nz) / lz,
            Mz = iz.scaleInPlace(zz);
          uz.addToRef(Mz, bz)
        }
        return bz
      }
      equals(zz) {
        return zz && this._x === zz._x && this._y === zz._y && this._z === zz._z
      }
      equalsWithEpsilon(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez.b;
        return zz && (0, Mz.WithinEpsilon)(this._x, zz._x, uz) && (0, Mz.WithinEpsilon)(this._y, zz._y, uz) && (0, Mz.WithinEpsilon)(this._z, zz._z, uz)
      }
      zlz(zz, uz, bz) {
        return this._x === zz && this._y === uz && this._z === bz
      }
      multiplyInPlace(zz) {
        return this._x *= zz._x, this._y *= zz._y, this._z *= zz._z, this._isDirty = !0, this
      }
      multiply(zz) {
        return this.multiplyByFloats(zz._x, zz._y, zz._z)
      }
      multiplyToRef(zz, uz) {
        return uz._x = this._x * zz._x, uz._y = this._y * zz._y, uz._z = this._z * zz._z, uz._isDirty = !0, uz
      }
      multiplyByFloats(zz, uz, bz) {
        return new dz(this._x * zz, this._y * uz, this._z * bz)
      }
      divide(zz) {
        return new dz(this._x / zz._x, this._y / zz._y, this._z / zz._z)
      }
      divideToRef(zz, uz) {
        return uz._x = this._x / zz._x, uz._y = this._y / zz._y, uz._z = this._z / zz._z, uz._isDirty = !0, uz
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
      minimizeInPlaceFromFloats(zz, uz, bz) {
        return zz < this._x && (this.x = zz), uz < this._y && (this.y = uz), bz < this._z && (this.z = bz), this
      }
      maximizeInPlaceFromFloats(zz, uz, bz) {
        return zz > this._x && (this.x = zz), uz > this._y && (this.y = uz), bz > this._z && (this.z = bz), this
      }
      isNonUniformWithinEpsilon(zz) {
        const uz = Math.abs(this._x),
          bz = Math.abs(this._y);
        if (!(0, Mz.WithinEpsilon)(uz, bz, zz)) return !0;
        const Ez = Math.abs(this._z);
        return !(0, Mz.WithinEpsilon)(uz, Ez, zz) || !(0, Mz.WithinEpsilon)(bz, Ez, zz)
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
        return new dz(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(zz) {
        return zz._x = this._x - Math.floor(this._x), zz._y = this._y - Math.floor(this._y), zz._z = this._z - Math.floor(this._z), zz._isDirty = !0, zz
      }
      fract() {
        return new dz(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const uz = Kz.ER[0].euz(this);
        return this.x = uz[zz[0]], this.y = uz[zz[1]], this.z = uz[zz[2]], this
      }
      rotateByQuaternionToRef(zz, uz) {
        return zz.toRotationMatrix(Kz.Matrix[0]), dz.TransformCoordinatesToRef(this, Kz.Matrix[0], uz), uz
      }
      rotateByQuaternionAroundPointToRef(zz, uz, bz) {
        return this.subtractToRef(uz, Kz.ER[0]), Kz.ER[0].rotateByQuaternionToRef(zz, Kz.ER[0]), uz.addToRef(Kz.ER[0], bz), bz
      }
      cross(zz) {
        return dz.CrossToRef(this, zz, new dz)
      }
      normalizeFromLength(zz) {
        return 0 === zz || 1 === zz ? this : this.scaleInPlace(1 / zz)
      }
      normalizeToNew() {
        return this.normalizeToRef(new dz)
      }
      normalizeToRef(zz) {
        const uz = this.length();
        return 0 === uz || 1 === uz ? (zz._x = this._x, zz._y = this._y, zz._z = this._z, zz._isDirty = !0, zz) : this.scaleToRef(1 / uz, zz)
      }
      clone() {
        return new dz(this._x, this._y, this._z)
      }
      euz(zz) {
        return this.P_(zz._x, zz._y, zz._z)
      }
      P_(zz, uz, bz) {
        return this._x = zz, this._y = uz, this._z = bz, this._isDirty = !0, this
      }
      set(zz, uz, bz) {
        return this.P_(zz, uz, bz)
      }
      Vk(zz) {
        return this._x = this._y = this._z = zz, this._isDirty = !0, this
      }
      static GetClipFactor(zz, uz, bz, Ez) {
        const nz = dz.Dot(zz, bz);
        return (nz - Ez) / (nz - dz.Dot(uz, bz))
      }
      static GetAngleBetweenVectors(zz, uz, bz) {
        const Ez = zz.normalizeToRef(Kz.ER[1]),
          nz = uz.normalizeToRef(Kz.ER[2]);
        let iz = dz.Dot(Ez, nz);
        iz = (0, Mz.Clamp)(iz, -1, 1);
        const lz = Math.acos(iz),
          tz = Kz.ER[3];
        return dz.CrossToRef(Ez, nz, tz), dz.Dot(tz, bz) > 0 ? isNaN(lz) ? 0 : lz : isNaN(lz) ? -Math.PI : -Math.acos(iz)
      }
      static GetAngleBetweenVectorsOnPlane(zz, uz, bz) {
        Kz.ER[0].euz(zz);
        const Ez = Kz.ER[0];
        Kz.ER[1].euz(uz);
        const nz = Kz.ER[1];
        Kz.ER[2].euz(bz);
        const iz = Kz.ER[2],
          lz = Kz.ER[3],
          tz = Kz.ER[4];
        Ez.normalize(), nz.normalize(), iz.normalize(), dz.CrossToRef(iz, Ez, lz), dz.CrossToRef(lz, iz, tz);
        const Hz = Math.atan2(dz.Dot(nz, lz), dz.Dot(nz, tz));
        return (0, Mz.NormalizeRadians)(Hz)
      }
      static PitchYawRollToMoveBetweenPointsToRef(zz, uz, bz) {
        const Ez = wz.ER[0];
        return uz.subtractToRef(zz, Ez), bz._y = Math.atan2(Ez.x, Ez.z) || 0, bz._x = Math.atan2(Math.sqrt(Ez.x ** 2 + Ez.z ** 2), Ez.y) || 0, bz._z = 0, bz._isDirty = !0, bz
      }
      static PitchYawRollToMoveBetweenPoints(zz, uz) {
        const bz = dz.Zero();
        return dz.PitchYawRollToMoveBetweenPointsToRef(zz, uz, bz)
      }
      static SlerpToRef(zz, uz, bz, nz) {
        bz = (0, Mz.Clamp)(bz, 0, 1);
        const iz = Kz.ER[0],
          lz = Kz.ER[1];
        iz.euz(zz);
        const tz = iz.length();
        iz.normalizeFromLength(tz), lz.euz(uz);
        const Hz = lz.length();
        lz.normalizeFromLength(Hz);
        const Oz = dz.Dot(iz, lz);
        let pz, Fz;
        if (Oz < 1 - Ez.b) {
          const zz = Math.acos(Oz),
            uz = 1 / Math.sin(zz);
          pz = Math.sin((1 - bz) * zz) * uz, Fz = Math.sin(bz * zz) * uz
        } else pz = 1 - bz, Fz = bz;
        return iz.scaleInPlace(pz), lz.scaleInPlace(Fz), nz.euz(iz).addInPlace(lz), nz.scaleInPlace((0, Mz.Lerp)(tz, Hz, bz)), nz
      }
      static SmoothToRef(zz, uz, bz, Ez, nz) {
        return dz.SlerpToRef(zz, uz, 0 === Ez ? 1 : bz / Ez, nz), nz
      }
      static FromArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new dz(zz[uz], zz[uz + 1], zz[uz + 2])
      }
      static FromFloatArray(zz, uz) {
        return dz.FromArray(zz, uz)
      }
      static FromArrayToRef(zz, uz, bz) {
        return bz._x = zz[uz], bz._y = zz[uz + 1], bz._z = zz[uz + 2], bz._isDirty = !0, bz
      }
      static FromFloatArrayToRef(zz, uz, bz) {
        return dz.FromArrayToRef(zz, uz, bz)
      }
      static FromFloatsToRef(zz, uz, bz, Ez) {
        return Ez.P_(zz, uz, bz), Ez
      }
      static Zero() {
        return new dz(0, 0, 0)
      }
      static One() {
        return new dz(1, 1, 1)
      }
      static Up() {
        return new dz(0, 1, 0)
      }
      static get UpReadOnly() {
        return dz._UpReadOnly
      }
      static get DownReadOnly() {
        return dz._DownReadOnly
      }
      static get RightReadOnly() {
        return dz._RightReadOnly
      }
      static get LeftReadOnly() {
        return dz._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return dz._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return dz._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return dz._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return dz._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return dz._ZeroReadOnly
      }
      static get OneReadOnly() {
        return dz._OneReadOnly
      }
      static Down() {
        return new dz(0, -1, 0)
      }
      static Forward() {
        return new dz(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new dz(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new dz(1, 0, 0)
      }
      static Left() {
        return new dz(-1, 0, 0)
      }
      static Random() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new dz((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
      }
      static RandomToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).P_((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
      }
      static TransformCoordinates(zz, uz) {
        const bz = dz.Zero();
        return dz.TransformCoordinatesToRef(zz, uz, bz), bz
      }
      static TransformCoordinatesToRef(zz, uz, bz) {
        return dz.TransformCoordinatesFromFloatsToRef(zz._x, zz._y, zz._z, uz, bz), bz
      }
      static TransformCoordinatesFromFloatsToRef(zz, uz, bz, Ez, nz) {
        const iz = Ez.m,
          lz = zz * iz[0] + uz * iz[4] + bz * iz[8] + iz[12],
          Mz = zz * iz[1] + uz * iz[5] + bz * iz[9] + iz[13],
          tz = zz * iz[2] + uz * iz[6] + bz * iz[10] + iz[14],
          Hz = 1 / (zz * iz[3] + uz * iz[7] + bz * iz[11] + iz[15]);
        return nz._x = lz * Hz, nz._y = Mz * Hz, nz._z = tz * Hz, nz._isDirty = !0, nz
      }
      static TransformNormal(zz, uz) {
        const bz = dz.Zero();
        return dz.TransformNormalToRef(zz, uz, bz), bz
      }
      static TransformNormalToRef(zz, uz, bz) {
        return this.TransformNormalFromFloatsToRef(zz._x, zz._y, zz._z, uz, bz), bz
      }
      static TransformNormalFromFloatsToRef(zz, uz, bz, Ez, nz) {
        const iz = Ez.m;
        return nz._x = zz * iz[0] + uz * iz[4] + bz * iz[8], nz._y = zz * iz[1] + uz * iz[5] + bz * iz[9], nz._z = zz * iz[2] + uz * iz[6] + bz * iz[10], nz._isDirty = !0, nz
      }
      static CatmullRom(zz, uz, bz, Ez, nz) {
        const iz = nz * nz,
          lz = nz * iz,
          Mz = .5 * (2 * uz._x + (-zz._x + bz._x) * nz + (2 * zz._x - 5 * uz._x + 4 * bz._x - Ez._x) * iz + (-zz._x + 3 * uz._x - 3 * bz._x + Ez._x) * lz),
          tz = .5 * (2 * uz._y + (-zz._y + bz._y) * nz + (2 * zz._y - 5 * uz._y + 4 * bz._y - Ez._y) * iz + (-zz._y + 3 * uz._y - 3 * bz._y + Ez._y) * lz),
          Hz = .5 * (2 * uz._z + (-zz._z + bz._z) * nz + (2 * zz._z - 5 * uz._z + 4 * bz._z - Ez._z) * iz + (-zz._z + 3 * uz._z - 3 * bz._z + Ez._z) * lz);
        return new dz(Mz, tz, Hz)
      }
      static Clamp(zz, uz, bz) {
        const Ez = new dz;
        return dz.ClampToRef(zz, uz, bz, Ez), Ez
      }
      static ClampToRef(zz, uz, bz, Ez) {
        let nz = zz._x;
        nz = nz > bz._x ? bz._x : nz, nz = nz < uz._x ? uz._x : nz;
        let iz = zz._y;
        iz = iz > bz._y ? bz._y : iz, iz = iz < uz._y ? uz._y : iz;
        let lz = zz._z;
        return lz = lz > bz._z ? bz._z : lz, lz = lz < uz._z ? uz._z : lz, Ez.P_(nz, iz, lz), Ez
      }
      static CheckExtends(zz, uz, bz) {
        uz.minimizeInPlace(zz), bz.maximizeInPlace(zz)
      }
      static Hermite(zz, uz, bz, Ez, nz) {
        const iz = nz * nz,
          lz = nz * iz,
          Mz = 2 * lz - 3 * iz + 1,
          tz = -2 * lz + 3 * iz,
          Hz = lz - 2 * iz + nz,
          Oz = lz - iz,
          pz = zz._x * Mz + bz._x * tz + uz._x * Hz + Ez._x * Oz,
          Fz = zz._y * Mz + bz._y * tz + uz._y * Hz + Ez._y * Oz,
          Zz = zz._z * Mz + bz._z * tz + uz._z * Hz + Ez._z * Oz;
        return new dz(pz, Fz, Zz)
      }
      static Hermite1stDerivative(zz, uz, bz, Ez, nz) {
        const iz = new dz;
        return this.Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz), iz
      }
      static Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz) {
        const lz = nz * nz;
        return iz._x = 6 * (lz - nz) * zz._x + (3 * lz - 4 * nz + 1) * uz._x + 6 * (-lz + nz) * bz._x + (3 * lz - 2 * nz) * Ez._x, iz._y = 6 * (lz - nz) * zz._y + (3 * lz - 4 * nz + 1) * uz._y + 6 * (-lz + nz) * bz._y + (3 * lz - 2 * nz) * Ez._y, iz._z = 6 * (lz - nz) * zz._z + (3 * lz - 4 * nz + 1) * uz._z + 6 * (-lz + nz) * bz._z + (3 * lz - 2 * nz) * Ez._z, iz._isDirty = !0, iz
      }
      static Lerp(zz, uz, bz) {
        const Ez = new dz(0, 0, 0);
        return dz.LerpToRef(zz, uz, bz, Ez), Ez
      }
      static LerpToRef(zz, uz, bz, Ez) {
        return Ez._x = zz._x + (uz._x - zz._x) * bz, Ez._y = zz._y + (uz._y - zz._y) * bz, Ez._z = zz._z + (uz._z - zz._z) * bz, Ez._isDirty = !0, Ez
      }
      static Dot(zz, uz) {
        return zz._x * uz._x + zz._y * uz._y + zz._z * uz._z
      }
      dot(zz) {
        return this._x * zz._x + this._y * zz._y + this._z * zz._z
      }
      static Cross(zz, uz) {
        const bz = new dz;
        return dz.CrossToRef(zz, uz, bz), bz
      }
      static CrossToRef(zz, uz, bz) {
        const Ez = zz._y * uz._z - zz._z * uz._y,
          nz = zz._z * uz._x - zz._x * uz._z,
          iz = zz._x * uz._y - zz._y * uz._x;
        return bz.P_(Ez, nz, iz), bz
      }
      static Normalize(zz) {
        const uz = dz.Zero();
        return dz.NormalizeToRef(zz, uz), uz
      }
      static NormalizeToRef(zz, uz) {
        return zz.normalizeToRef(uz), uz
      }
      static Project(zz, uz, bz, Ez) {
        const nz = new dz;
        return dz.ProjectToRef(zz, uz, bz, Ez, nz), nz
      }
      static ProjectToRef(zz, uz, bz, Ez, nz) {
        const iz = Ez.width,
          Mz = Ez.height,
          tz = Ez.x,
          Hz = Ez.y,
          Oz = Kz.Matrix[1],
          pz = lz.d.LastCreatedEngine?.isNDCHalfZRange,
          Fz = pz ? 1 : .5,
          Zz = pz ? 0 : .5;
        Rz.FromValuesToRef(iz / 2, 0, 0, 0, 0, -Mz / 2, 0, 0, 0, 0, Fz, 0, tz + iz / 2, Mz / 2 + Hz, Zz, 1, Oz);
        const wz = Kz.Matrix[0];
        return uz.multiplyToRef(bz, wz), wz.multiplyToRef(Oz, wz), dz.TransformCoordinatesToRef(zz, wz, nz), nz
      }
      static Reflect(zz, uz) {
        return this.ReflectToRef(zz, uz, new dz)
      }
      static ReflectToRef(zz, uz, bz) {
        const Ez = wz.ER[0];
        return Ez.euz(uz).scaleInPlace(2 * dz.Dot(zz, uz)), bz.euz(zz).Qbz(Ez)
      }
      static UnprojectFromTransform(zz, uz, bz, Ez, nz) {
        return this.Unproject(zz, uz, bz, Ez, nz, Rz.IdentityReadOnly)
      }
      static Unproject(zz, uz, bz, Ez, nz, iz) {
        const lz = new dz;
        return dz.UnprojectToRef(zz, uz, bz, Ez, nz, iz, lz), lz
      }
      static UnprojectToRef(zz, uz, bz, Ez, nz, iz, lz) {
        return dz.UnprojectFloatsToRef(zz._x, zz._y, zz._z, uz, bz, Ez, nz, iz, lz), lz
      }
      static UnprojectFloatsToRef(zz, uz, bz, Ez, nz, iz, Mz, tz, Hz) {
        const Oz = Kz.Matrix[0];
        iz.multiplyToRef(Mz, Oz), Oz.multiplyToRef(tz, Oz), Oz.invert();
        const pz = Kz.ER[0];
        return pz.x = zz / Ez * 2 - 1, pz.y = -(uz / nz * 2 - 1), lz.d.LastCreatedEngine?.isNDCHalfZRange ? pz.z = bz : pz.z = 2 * bz - 1, dz.TransformCoordinatesToRef(pz, Oz, Hz), Hz
      }
      static Minimize(zz, uz) {
        const bz = new dz;
        return bz.euz(zz), bz.minimizeInPlace(uz), bz
      }
      static Maximize(zz, uz) {
        const bz = new dz;
        return bz.euz(zz), bz.maximizeInPlace(uz), bz
      }
      static Distance(zz, uz) {
        return Math.sqrt(dz.DistanceSquared(zz, uz))
      }
      static DistanceSquared(zz, uz) {
        const bz = zz._x - uz._x,
          Ez = zz._y - uz._y,
          nz = zz._z - uz._z;
        return bz * bz + Ez * Ez + nz * nz
      }
      static ProjectOnTriangleToRef(zz, uz, bz, nz, iz) {
        const lz = Kz.ER[0],
          tz = Kz.ER[1],
          Hz = Kz.ER[2],
          Oz = Kz.ER[3],
          pz = Kz.ER[4];
        bz.subtractToRef(uz, lz), nz.subtractToRef(uz, tz), nz.subtractToRef(bz, Hz);
        const Fz = lz.length(),
          Zz = tz.length(),
          Rz = Hz.length();
        if (Fz < Ez.b || Zz < Ez.b || Rz < Ez.b) return iz.euz(uz), dz.Distance(zz, uz);
        zz.subtractToRef(uz, pz), dz.CrossToRef(lz, tz, Oz);
        const wz = Oz.length();
        if (wz < Ez.b) return iz.euz(uz), dz.Distance(zz, uz);
        Oz.normalizeFromLength(wz);
        let Xz = pz.length();
        if (Xz < Ez.b) return iz.euz(uz), 0;
        pz.normalizeFromLength(Xz);
        const fz = dz.Dot(Oz, pz),
          sz = Kz.ER[5],
          rz = Kz.ER[6];
        sz.euz(Oz).scaleInPlace(-Xz * fz), rz.euz(zz).addInPlace(sz);
        const oz = Kz.ER[4],
          Nz = Kz.ER[5],
          vz = Kz.ER[7],
          xz = Kz.ER[8];
        oz.euz(lz).scaleInPlace(1 / Fz), xz.euz(tz).scaleInPlace(1 / Zz), oz.addInPlace(xz).scaleInPlace(-1), Nz.euz(lz).scaleInPlace(-1 / Fz), xz.euz(Hz).scaleInPlace(1 / Rz), Nz.addInPlace(xz).scaleInPlace(-1), vz.euz(Hz).scaleInPlace(-1 / Rz), xz.euz(tz).scaleInPlace(-1 / Zz), vz.addInPlace(xz).scaleInPlace(-1);
        const Jz = Kz.ER[9];
        let Az;
        Jz.euz(rz).Qbz(uz), dz.CrossToRef(oz, Jz, xz), Az = dz.Dot(xz, Oz);
        const Tz = Az;
        Jz.euz(rz).Qbz(bz), dz.CrossToRef(Nz, Jz, xz), Az = dz.Dot(xz, Oz);
        const Lz = Az;
        Jz.euz(rz).Qbz(nz), dz.CrossToRef(vz, Jz, xz), Az = dz.Dot(xz, Oz);
        const Pz = Az,
          Gz = Kz.ER[10];
        let az, Vz;
        Tz > 0 && Lz < 0 ? (Gz.euz(lz), az = uz, Vz = bz) : Lz > 0 && Pz < 0 ? (Gz.euz(Hz), az = bz, Vz = nz) : (Gz.euz(tz).scaleInPlace(-1), az = nz, Vz = uz);
        const mz = Kz.ER[9],
          qz = Kz.ER[4];
        az.subtractToRef(rz, xz), Vz.subtractToRef(rz, mz), dz.CrossToRef(xz, mz, qz);
        if (!(dz.Dot(qz, Oz) < 0)) return iz.euz(rz), Math.abs(Xz * fz);
        const hz = Kz.ER[5];
        dz.CrossToRef(Gz, qz, hz), hz.normalize();
        const Uz = Kz.ER[9];
        Uz.euz(az).Qbz(rz);
        const cz = Uz.length();
        if (cz < Ez.b) return iz.euz(az), dz.Distance(zz, az);
        Uz.normalizeFromLength(cz);
        const gz = dz.Dot(hz, Uz),
          Sz = Kz.ER[7];
        Sz.euz(rz).addInPlace(hz.scaleInPlace(cz * gz)), xz.euz(Sz).Qbz(az), Xz = Gz.length(), Gz.normalizeFromLength(Xz);
        let yz = dz.Dot(xz, Gz) / Math.max(Xz, Ez.b);
        return yz = (0, Mz.Clamp)(yz, 0, 1), Sz.euz(az).addInPlace(Gz.scaleInPlace(yz * Xz)), iz.euz(Sz), dz.Distance(zz, Sz)
      }
      static Center(zz, uz) {
        return dz.CenterToRef(zz, uz, dz.Zero())
      }
      static CenterToRef(zz, uz, bz) {
        return bz.P_((zz._x + uz._x) / 2, (zz._y + uz._y) / 2, (zz._z + uz._z) / 2)
      }
      static RotationFromAxis(zz, uz, bz) {
        const Ez = new dz;
        return dz.RotationFromAxisToRef(zz, uz, bz, Ez), Ez
      }
      static RotationFromAxisToRef(zz, uz, bz, Ez) {
        const nz = Kz.Quaternion[0];
        return Zz.RotationQuaternionFromAxisToRef(zz, uz, bz, nz), nz.toEulerAnglesToRef(Ez), Ez
      }
    }
    dz._V8PerformanceHack = new dz(.5, .5, .5), dz._UpReadOnly = dz.Up(), dz._DownReadOnly = dz.Down(), dz._LeftHandedForwardReadOnly = dz.Forward(!1), dz._RightHandedForwardReadOnly = dz.Forward(!0), dz._LeftHandedBackwardReadOnly = dz.Backward(!1), dz._RightHandedBackwardReadOnly = dz.Backward(!0), dz._RightReadOnly = dz.Right(), dz._LeftReadOnly = dz.Left(), dz._ZeroReadOnly = dz.Zero(), dz._OneReadOnly = dz.One();
    class Fz {
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
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = zz, this._y = uz, this._z = bz, this._w = Ez
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let zz = Oz(this._x);
        return zz = 397 * zz ^ Oz(this._y), zz = 397 * zz ^ Oz(this._z), zz = 397 * zz ^ Oz(this._w), zz
      }
      obz() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(zz, uz) {
        return void 0 === uz && (uz = 0), zz[uz] = this._x, zz[uz + 1] = this._y, zz[uz + 2] = this._z, zz[uz + 3] = this._w, this
      }
      Fuz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Fz.FromArrayToRef(zz, uz, this), this
      }
      addInPlace(zz) {
        return this.x += zz._x, this.y += zz._y, this.z += zz._z, this.w += zz._w, this
      }
      addInPlaceFromFloats(zz, uz, bz, Ez) {
        return this.x += zz, this.y += uz, this.z += bz, this.w += Ez, this
      }
      add(zz) {
        return new Fz(this._x + zz.x, this._y + zz.y, this._z + zz.z, this._w + zz.w)
      }
      addToRef(zz, uz) {
        return uz.x = this._x + zz.x, uz.y = this._y + zz.y, uz.z = this._z + zz.z, uz.w = this._w + zz.w, uz
      }
      Qbz(zz) {
        return this.x -= zz.x, this.y -= zz.y, this.z -= zz.z, this.w -= zz.w, this
      }
      subtract(zz) {
        return new Fz(this._x - zz.x, this._y - zz.y, this._z - zz.z, this._w - zz.w)
      }
      subtractToRef(zz, uz) {
        return uz.x = this._x - zz.x, uz.y = this._y - zz.y, uz.z = this._z - zz.z, uz.w = this._w - zz.w, uz
      }
      subtractFromFloats(zz, uz, bz, Ez) {
        return new Fz(this._x - zz, this._y - uz, this._z - bz, this._w - Ez)
      }
      subtractFromFloatsToRef(zz, uz, bz, Ez, nz) {
        return nz.x = this._x - zz, nz.y = this._y - uz, nz.z = this._z - bz, nz.w = this._w - Ez, nz
      }
      nb() {
        return new Fz(-this._x, -this._y, -this._z, -this._w)
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
        return new Fz(this._x * zz, this._y * zz, this._z * zz, this._w * zz)
      }
      scaleToRef(zz, uz) {
        return uz.x = this._x * zz, uz.y = this._y * zz, uz.z = this._z * zz, uz.w = this._w * zz, uz
      }
      scaleAndAddToRef(zz, uz) {
        return uz.x += this._x * zz, uz.y += this._y * zz, uz.z += this._z * zz, uz.w += this._w * zz, uz
      }
      equals(zz) {
        return zz && this._x === zz.x && this._y === zz.y && this._z === zz.z && this._w === zz.w
      }
      equalsWithEpsilon(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez.b;
        return zz && (0, Mz.WithinEpsilon)(this._x, zz.x, uz) && (0, Mz.WithinEpsilon)(this._y, zz.y, uz) && (0, Mz.WithinEpsilon)(this._z, zz.z, uz) && (0, Mz.WithinEpsilon)(this._w, zz.w, uz)
      }
      zlz(zz, uz, bz, Ez) {
        return this._x === zz && this._y === uz && this._z === bz && this._w === Ez
      }
      multiplyInPlace(zz) {
        return this.x *= zz.x, this.y *= zz.y, this.z *= zz.z, this.w *= zz.w, this
      }
      multiply(zz) {
        return new Fz(this._x * zz.x, this._y * zz.y, this._z * zz.z, this._w * zz.w)
      }
      multiplyToRef(zz, uz) {
        return uz.x = this._x * zz.x, uz.y = this._y * zz.y, uz.z = this._z * zz.z, uz.w = this._w * zz.w, uz
      }
      multiplyByFloats(zz, uz, bz, Ez) {
        return new Fz(this._x * zz, this._y * uz, this._z * bz, this._w * Ez)
      }
      divide(zz) {
        return new Fz(this._x / zz.x, this._y / zz.y, this._z / zz.z, this._w / zz.w)
      }
      divideToRef(zz, uz) {
        return uz.x = this._x / zz.x, uz.y = this._y / zz.y, uz.z = this._z / zz.z, uz.w = this._w / zz.w, uz
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
      minimizeInPlaceFromFloats(zz, uz, bz, Ez) {
        return this.x = Math.min(zz, this._x), this.y = Math.min(uz, this._y), this.z = Math.min(bz, this._z), this.w = Math.min(Ez, this._w), this
      }
      maximizeInPlaceFromFloats(zz, uz, bz, Ez) {
        return this.x = Math.max(zz, this._x), this.y = Math.max(uz, this._y), this.z = Math.max(bz, this._z), this.w = Math.max(Ez, this._w), this
      }
      floorToRef(zz) {
        return zz.x = Math.floor(this._x), zz.y = Math.floor(this._y), zz.z = Math.floor(this._z), zz.w = Math.floor(this._w), zz
      }
      floor() {
        return new Fz(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(zz) {
        return zz.x = this._x - Math.floor(this._x), zz.y = this._y - Math.floor(this._y), zz.z = this._z - Math.floor(this._z), zz.w = this._w - Math.floor(this._w), zz
      }
      fract() {
        return new Fz(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new Fz)
      }
      normalizeToRef(zz) {
        const uz = this.length();
        return 0 === uz || 1 === uz ? (zz.x = this._x, zz.y = this._y, zz.z = this._z, zz.w = this._w, zz) : this.scaleToRef(1 / uz, zz)
      }
      toVector3() {
        return new dz(this._x, this._y, this._z)
      }
      clone() {
        return new Fz(this._x, this._y, this._z, this._w)
      }
      euz(zz) {
        return this.x = zz.x, this.y = zz.y, this.z = zz.z, this.w = zz.w, this
      }
      P_(zz, uz, bz, Ez) {
        return this.x = zz, this.y = uz, this.z = bz, this.w = Ez, this
      }
      set(zz, uz, bz, Ez) {
        return this.P_(zz, uz, bz, Ez)
      }
      Vk(zz) {
        return this.x = this.y = this.z = this.w = zz, this
      }
      dot(zz) {
        return this._x * zz.x + this._y * zz.y + this._z * zz.z + this._w * zz.w
      }
      static FromArray(zz, uz) {
        return uz || (uz = 0), new Fz(zz[uz], zz[uz + 1], zz[uz + 2], zz[uz + 3])
      }
      static FromArrayToRef(zz, uz, bz) {
        return bz.x = zz[uz], bz.y = zz[uz + 1], bz.z = zz[uz + 2], bz.w = zz[uz + 3], bz
      }
      static FromFloatArrayToRef(zz, uz, bz) {
        return Fz.FromArrayToRef(zz, uz, bz), bz
      }
      static FromFloatsToRef(zz, uz, bz, Ez, nz) {
        return nz.x = zz, nz.y = uz, nz.z = bz, nz.w = Ez, nz
      }
      static Zero() {
        return new Fz(0, 0, 0, 0)
      }
      static One() {
        return new Fz(1, 1, 1, 1)
      }
      static Random() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Fz((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
      }
      static RandomToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        return bz.x = (0, Mz.RandomRange)(zz, uz), bz.y = (0, Mz.RandomRange)(zz, uz), bz.z = (0, Mz.RandomRange)(zz, uz), bz.w = (0, Mz.RandomRange)(zz, uz), bz
      }
      static Clamp(zz, uz, bz) {
        return Fz.ClampToRef(zz, uz, bz, new Fz)
      }
      static ClampToRef(zz, uz, bz, Ez) {
        return Ez.x = (0, Mz.Clamp)(zz.x, uz.x, bz.x), Ez.y = (0, Mz.Clamp)(zz.y, uz.y, bz.y), Ez.z = (0, Mz.Clamp)(zz.z, uz.z, bz.z), Ez.w = (0, Mz.Clamp)(zz.w, uz.w, bz.w), Ez
      }
      static CheckExtends(zz, uz, bz) {
        uz.minimizeInPlace(zz), bz.maximizeInPlace(zz)
      }
      static get ZeroReadOnly() {
        return Fz._ZeroReadOnly
      }
      static Normalize(zz) {
        return Fz.NormalizeToRef(zz, new Fz)
      }
      static NormalizeToRef(zz, uz) {
        return zz.normalizeToRef(uz), uz
      }
      static Minimize(zz, uz) {
        const bz = new Fz;
        return bz.euz(zz), bz.minimizeInPlace(uz), bz
      }
      static Maximize(zz, uz) {
        const bz = new Fz;
        return bz.euz(zz), bz.maximizeInPlace(uz), bz
      }
      static Distance(zz, uz) {
        return Math.sqrt(Fz.DistanceSquared(zz, uz))
      }
      static DistanceSquared(zz, uz) {
        const bz = zz.x - uz.x,
          Ez = zz.y - uz.y,
          nz = zz.z - uz.z,
          iz = zz.w - uz.w;
        return bz * bz + Ez * Ez + nz * nz + iz * iz
      }
      static Center(zz, uz) {
        return Fz.CenterToRef(zz, uz, new Fz)
      }
      static CenterToRef(zz, uz, bz) {
        return bz.x = (zz.x + uz.x) / 2, bz.y = (zz.y + uz.y) / 2, bz.z = (zz.z + uz.z) / 2, bz.w = (zz.w + uz.w) / 2, bz
      }
      static TransformCoordinates(zz, uz) {
        return Fz.TransformCoordinatesToRef(zz, uz, new Fz)
      }
      static TransformCoordinatesToRef(zz, uz, bz) {
        return Fz.TransformCoordinatesFromFloatsToRef(zz._x, zz._y, zz._z, uz, bz), bz
      }
      static TransformCoordinatesFromFloatsToRef(zz, uz, bz, Ez, nz) {
        const iz = Ez.m,
          lz = zz * iz[0] + uz * iz[4] + bz * iz[8] + iz[12],
          Mz = zz * iz[1] + uz * iz[5] + bz * iz[9] + iz[13],
          tz = zz * iz[2] + uz * iz[6] + bz * iz[10] + iz[14],
          Hz = zz * iz[3] + uz * iz[7] + bz * iz[11] + iz[15];
        return nz.x = lz, nz.y = Mz, nz.z = tz, nz.w = Hz, nz
      }
      static TransformNormal(zz, uz) {
        return Fz.TransformNormalToRef(zz, uz, new Fz)
      }
      static TransformNormalToRef(zz, uz, bz) {
        const Ez = uz.m,
          nz = zz.x * Ez[0] + zz.y * Ez[4] + zz.z * Ez[8],
          iz = zz.x * Ez[1] + zz.y * Ez[5] + zz.z * Ez[9],
          lz = zz.x * Ez[2] + zz.y * Ez[6] + zz.z * Ez[10];
        return bz.x = nz, bz.y = iz, bz.z = lz, bz.w = zz.w, bz
      }
      static TransformNormalFromFloatsToRef(zz, uz, bz, Ez, nz, iz) {
        const lz = nz.m;
        return iz.x = zz * lz[0] + uz * lz[4] + bz * lz[8], iz.y = zz * lz[1] + uz * lz[5] + bz * lz[9], iz.z = zz * lz[2] + uz * lz[6] + bz * lz[10], iz.w = Ez, iz
      }
      static FromVector3(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Fz(zz._x, zz._y, zz._z, uz)
      }
      static Dot(zz, uz) {
        return zz.x * uz.x + zz.y * uz.y + zz.z * uz.z + zz.w * uz.w
      }
    }
    Fz._V8PerformanceHack = new Fz(.5, .5, .5, .5), Fz._ZeroReadOnly = Fz.Zero();
    class Zz {
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
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = zz, this._y = uz, this._z = bz, this._w = Ez
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let zz = Oz(this._x);
        return zz = 397 * zz ^ Oz(this._y), zz = 397 * zz ^ Oz(this._z), zz = 397 * zz ^ Oz(this._w), zz
      }
      obz() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zz[uz] = this._x, zz[uz + 1] = this._y, zz[uz + 2] = this._z, zz[uz + 3] = this._w, this
      }
      Fuz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Zz.FromArrayToRef(zz, uz, this)
      }
      equals(zz) {
        return zz && this._x === zz._x && this._y === zz._y && this._z === zz._z && this._w === zz._w
      }
      equalsWithEpsilon(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez.b;
        return zz && (0, Mz.WithinEpsilon)(this._x, zz._x, uz) && (0, Mz.WithinEpsilon)(this._y, zz._y, uz) && (0, Mz.WithinEpsilon)(this._z, zz._z, uz) && (0, Mz.WithinEpsilon)(this._w, zz._w, uz)
      }
      isApprox(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ez.b;
        return zz && ((0, Mz.WithinEpsilon)(this._x, zz._x, uz) && (0, Mz.WithinEpsilon)(this._y, zz._y, uz) && (0, Mz.WithinEpsilon)(this._z, zz._z, uz) && (0, Mz.WithinEpsilon)(this._w, zz._w, uz) || (0, Mz.WithinEpsilon)(this._x, -zz._x, uz) && (0, Mz.WithinEpsilon)(this._y, -zz._y, uz) && (0, Mz.WithinEpsilon)(this._z, -zz._z, uz) && (0, Mz.WithinEpsilon)(this._w, -zz._w, uz))
      }
      clone() {
        return new Zz(this._x, this._y, this._z, this._w)
      }
      euz(zz) {
        return this._x = zz._x, this._y = zz._y, this._z = zz._z, this._w = zz._w, this._isDirty = !0, this
      }
      P_(zz, uz, bz, Ez) {
        return this._x = zz, this._y = uz, this._z = bz, this._w = Ez, this._isDirty = !0, this
      }
      set(zz, uz, bz, Ez) {
        return this.P_(zz, uz, bz, Ez)
      }
      Vk(zz) {
        return this.P_(zz, zz, zz, zz)
      }
      add(zz) {
        return new Zz(this._x + zz._x, this._y + zz._y, this._z + zz._z, this._w + zz._w)
      }
      addInPlace(zz) {
        return this._x += zz._x, this._y += zz._y, this._z += zz._z, this._w += zz._w, this._isDirty = !0, this
      }
      addToRef(zz, uz) {
        return uz._x = this._x + zz._x, uz._y = this._y + zz._y, uz._z = this._z + zz._z, uz._w = this._w + zz._w, uz._isDirty = !0, uz
      }
      addInPlaceFromFloats(zz, uz, bz, Ez) {
        return this._x += zz, this._y += uz, this._z += bz, this._w += Ez, this._isDirty = !0, this
      }
      subtractToRef(zz, uz) {
        return uz._x = this._x - zz._x, uz._y = this._y - zz._y, uz._z = this._z - zz._z, uz._w = this._w - zz._w, uz._isDirty = !0, uz
      }
      subtractFromFloats(zz, uz, bz, Ez) {
        return this.subtractFromFloatsToRef(zz, uz, bz, Ez, new Zz)
      }
      subtractFromFloatsToRef(zz, uz, bz, Ez, nz) {
        return nz._x = this._x - zz, nz._y = this._y - uz, nz._z = this._z - bz, nz._w = this._w - Ez, nz._isDirty = !0, nz
      }
      subtract(zz) {
        return new Zz(this._x - zz._x, this._y - zz._y, this._z - zz._z, this._w - zz._w)
      }
      Qbz(zz) {
        return this._x -= zz._x, this._y -= zz._y, this._z -= zz._z, this._w -= zz._w, this._isDirty = !0, this
      }
      scale(zz) {
        return new Zz(this._x * zz, this._y * zz, this._z * zz, this._w * zz)
      }
      scaleToRef(zz, uz) {
        return uz._x = this._x * zz, uz._y = this._y * zz, uz._z = this._z * zz, uz._w = this._w * zz, uz._isDirty = !0, uz
      }
      scaleInPlace(zz) {
        return this._x *= zz, this._y *= zz, this._z *= zz, this._w *= zz, this._isDirty = !0, this
      }
      scaleAndAddToRef(zz, uz) {
        return uz._x += this._x * zz, uz._y += this._y * zz, uz._z += this._z * zz, uz._w += this._w * zz, uz._isDirty = !0, uz
      }
      multiply(zz) {
        const uz = new Zz(0, 0, 0, 1);
        return this.multiplyToRef(zz, uz), uz
      }
      multiplyToRef(zz, uz) {
        const bz = this._x * zz._w + this._y * zz._z - this._z * zz._y + this._w * zz._x,
          Ez = -this._x * zz._z + this._y * zz._w + this._z * zz._x + this._w * zz._y,
          nz = this._x * zz._y - this._y * zz._x + this._z * zz._w + this._w * zz._z,
          iz = -this._x * zz._x - this._y * zz._y - this._z * zz._z + this._w * zz._w;
        return uz.P_(bz, Ez, nz, iz), uz
      }
      multiplyInPlace(zz) {
        return this.multiplyToRef(zz, this)
      }
      multiplyByFloats(zz, uz, bz, Ez) {
        return this._x *= zz, this._y *= uz, this._z *= bz, this._w *= Ez, this._isDirty = !0, this
      }
      divide(zz) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(zz, uz) {
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
      nb() {
        return this.negateToRef(new Zz)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(zz) {
        return zz._x = -this._x, zz._y = -this._y, zz._z = -this._z, zz._w = -this._w, zz._isDirty = !0, zz
      }
      zlz(zz, uz, bz, Ez) {
        return this._x === zz && this._y === uz && this._z === bz && this._w === Ez
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
        return zz.P_(-this._x, -this._y, -this._z, this._w), zz
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Zz(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const zz = this.conjugate(),
          uz = this.lengthSquared();
        return 0 == uz || 1 == uz || zz.scaleInPlace(1 / uz), zz
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
        const zz = new Zz(0, 0, 0, 1);
        return this.normalizeToRef(zz), zz
      }
      normalizeToRef(zz) {
        const uz = this.length();
        return 0 === uz || 1 === uz ? zz.P_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / uz, zz)
      }
      toEulerAngles() {
        const zz = dz.Zero();
        return this.toEulerAnglesToRef(zz), zz
      }
      toEulerAnglesToRef(zz) {
        const uz = this._z,
          bz = this._x,
          Ez = this._y,
          nz = this._w,
          iz = Ez * uz - bz * nz,
          lz = .4999999;
        if (iz < -lz) zz._y = 2 * Math.atan2(Ez, nz), zz._x = Math.PI / 2, zz._z = 0, zz._isDirty = !0;
        else if (iz > lz) zz._y = 2 * Math.atan2(Ez, nz), zz._x = -Math.PI / 2, zz._z = 0, zz._isDirty = !0;
        else {
          const lz = nz * nz,
            Mz = uz * uz,
            tz = bz * bz,
            Hz = Ez * Ez;
          zz._z = Math.atan2(2 * (bz * Ez + uz * nz), -Mz - tz + Hz + lz), zz._x = Math.asin(-2 * iz), zz._y = Math.atan2(2 * (uz * bz + Ez * nz), Mz - tz - Hz + lz), zz._isDirty = !0
        }
        return zz
      }
      toAlphaBetaGammaToRef(zz) {
        const uz = this._z,
          bz = this._x,
          Ez = this._y,
          nz = this._w,
          iz = Math.sqrt(bz * bz + Ez * Ez),
          lz = Math.sqrt(uz * uz + nz * nz),
          Mz = 2 * Math.atan2(iz, lz),
          tz = 2 * Math.atan2(uz, nz),
          Hz = 2 * Math.atan2(Ez, bz),
          Oz = (tz + Hz) / 2,
          pz = (tz - Hz) / 2;
        return zz.set(pz, Mz, Oz), zz
      }
      toRotationMatrix(zz) {
        return Rz.FromQuaternionToRef(this, zz), zz
      }
      fromRotationMatrix(zz) {
        return Zz.FromRotationMatrixToRef(zz, this), this
      }
      dot(zz) {
        return this._x * zz._x + this._y * zz._y + this._z * zz._z + this._w * zz._w
      }
      toAxisAngle() {
        const zz = dz.Zero();
        return {
          axis: zz,
          angle: this.toAxisAngleToRef(zz)
        }
      }
      toAxisAngleToRef(zz) {
        let uz;
        const bz = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Ez = this._w;
        return bz > 0 ? (uz = 2 * Math.atan2(bz, Ez), zz.set(this._x / bz, this._y / bz, this._z / bz)) : (uz = 0, zz.set(1, 0, 0)), uz
      }
      static FromRotationMatrix(zz) {
        const uz = new Zz;
        return Zz.FromRotationMatrixToRef(zz, uz), uz
      }
      static FromRotationMatrixToRef(zz, uz) {
        const bz = zz.m,
          Ez = bz[0],
          nz = bz[4],
          iz = bz[8],
          lz = bz[1],
          Mz = bz[5],
          tz = bz[9],
          Hz = bz[2],
          Oz = bz[6],
          pz = bz[10],
          dz = Ez + Mz + pz;
        let Fz;
        return dz > 0 ? (Fz = .5 / Math.sqrt(dz + 1), uz._w = .25 / Fz, uz._x = (Oz - tz) * Fz, uz._y = (iz - Hz) * Fz, uz._z = (lz - nz) * Fz, uz._isDirty = !0) : Ez > Mz && Ez > pz ? (Fz = 2 * Math.sqrt(1 + Ez - Mz - pz), uz._w = (Oz - tz) / Fz, uz._x = .25 * Fz, uz._y = (nz + lz) / Fz, uz._z = (iz + Hz) / Fz, uz._isDirty = !0) : Mz > pz ? (Fz = 2 * Math.sqrt(1 + Mz - Ez - pz), uz._w = (iz - Hz) / Fz, uz._x = (nz + lz) / Fz, uz._y = .25 * Fz, uz._z = (tz + Oz) / Fz, uz._isDirty = !0) : (Fz = 2 * Math.sqrt(1 + pz - Ez - Mz), uz._w = (lz - nz) / Fz, uz._x = (iz + Hz) / Fz, uz._y = (tz + Oz) / Fz, uz._z = .25 * Fz, uz._isDirty = !0), uz
      }
      static Dot(zz, uz) {
        return zz._x * uz._x + zz._y * uz._y + zz._z * uz._z + zz._w * uz._w
      }
      static AreClose(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Ez = Zz.Dot(zz, uz);
        return 1 - Ez * Ez <= bz
      }
      static SmoothToRef(zz, uz, bz, Ez, nz) {
        let iz = 0 === Ez ? 1 : bz / Ez;
        return iz = (0, Mz.Clamp)(iz, 0, 1), Zz.SlerpToRef(zz, uz, iz, nz), nz
      }
      static Zero() {
        return new Zz(0, 0, 0, 0)
      }
      static Inverse(zz) {
        return new Zz(-zz._x, -zz._y, -zz._z, zz._w)
      }
      static InverseToRef(zz, uz) {
        return uz.set(-zz._x, -zz._y, -zz._z, zz._w), uz
      }
      static Identity() {
        return new Zz(0, 0, 0, 1)
      }
      static IsIdentity(zz) {
        return zz && 0 === zz._x && 0 === zz._y && 0 === zz._z && 1 === zz._w
      }
      static RotationAxis(zz, uz) {
        return Zz.RotationAxisToRef(zz, uz, new Zz)
      }
      static RotationAxisToRef(zz, uz, bz) {
        bz._w = Math.cos(uz / 2);
        const Ez = Math.sin(uz / 2) / zz.length();
        return bz._x = zz._x * Ez, bz._y = zz._y * Ez, bz._z = zz._z * Ez, bz._isDirty = !0, bz
      }
      static FromArray(zz, uz) {
        return uz || (uz = 0), new Zz(zz[uz], zz[uz + 1], zz[uz + 2], zz[uz + 3])
      }
      static FromArrayToRef(zz, uz, bz) {
        return bz._x = zz[uz], bz._y = zz[uz + 1], bz._z = zz[uz + 2], bz._w = zz[uz + 3], bz._isDirty = !0, bz
      }
      static FromFloatsToRef(zz, uz, bz, Ez, nz) {
        return nz.P_(zz, uz, bz, Ez), nz
      }
      static FromEulerAngles(zz, uz, bz) {
        const Ez = new Zz;
        return Zz.RotationYawPitchRollToRef(uz, zz, bz, Ez), Ez
      }
      static FromEulerAnglesToRef(zz, uz, bz, Ez) {
        return Zz.RotationYawPitchRollToRef(uz, zz, bz, Ez), Ez
      }
      static FromEulerVector(zz) {
        const uz = new Zz;
        return Zz.RotationYawPitchRollToRef(zz._y, zz._x, zz._z, uz), uz
      }
      static FromEulerVectorToRef(zz, uz) {
        return Zz.RotationYawPitchRollToRef(zz._y, zz._x, zz._z, uz), uz
      }
      static FromUnitVectorsToRef(zz, uz, bz) {
        let nz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ez.b;
        const iz = dz.Dot(zz, uz) + 1;
        return iz < nz ? Math.abs(zz.x) > Math.abs(zz.z) ? bz.set(-zz.y, zz.x, 0, 0) : bz.set(0, -zz.z, zz.y, 0) : (dz.CrossToRef(zz, uz, wz.ER[0]), bz.set(wz.ER[0].x, wz.ER[0].y, wz.ER[0].z, iz)), bz.normalize()
      }
      static RotationYawPitchRoll(zz, uz, bz) {
        const Ez = new Zz;
        return Zz.RotationYawPitchRollToRef(zz, uz, bz, Ez), Ez
      }
      static RotationYawPitchRollToRef(zz, uz, bz, Ez) {
        const nz = .5 * bz,
          iz = .5 * uz,
          lz = .5 * zz,
          Mz = Math.sin(nz),
          tz = Math.cos(nz),
          Hz = Math.sin(iz),
          Oz = Math.cos(iz),
          pz = Math.sin(lz),
          dz = Math.cos(lz);
        return Ez._x = dz * Hz * tz + pz * Oz * Mz, Ez._y = pz * Oz * tz - dz * Hz * Mz, Ez._z = dz * Oz * Mz - pz * Hz * tz, Ez._w = dz * Oz * tz + pz * Hz * Mz, Ez._isDirty = !0, Ez
      }
      static RotationAlphaBetaGamma(zz, uz, bz) {
        const Ez = new Zz;
        return Zz.RotationAlphaBetaGammaToRef(zz, uz, bz, Ez), Ez
      }
      static RotationAlphaBetaGammaToRef(zz, uz, bz, Ez) {
        const nz = .5 * (bz + zz),
          iz = .5 * (bz - zz),
          lz = .5 * uz;
        return Ez._x = Math.cos(iz) * Math.sin(lz), Ez._y = Math.sin(iz) * Math.sin(lz), Ez._z = Math.sin(nz) * Math.cos(lz), Ez._w = Math.cos(nz) * Math.cos(lz), Ez._isDirty = !0, Ez
      }
      static RotationQuaternionFromAxis(zz, uz, bz) {
        const Ez = new Zz(0, 0, 0, 0);
        return Zz.RotationQuaternionFromAxisToRef(zz, uz, bz, Ez), Ez
      }
      static RotationQuaternionFromAxisToRef(zz, uz, bz, Ez) {
        const nz = Kz.Matrix[0];
        return zz = zz.normalizeToRef(Kz.ER[0]), uz = uz.normalizeToRef(Kz.ER[1]), bz = bz.normalizeToRef(Kz.ER[2]), Rz.FromXYZAxesToRef(zz, uz, bz, nz), Zz.FromRotationMatrixToRef(nz, Ez), Ez
      }
      static FromLookDirectionLH(zz, uz) {
        const bz = new Zz;
        return Zz.FromLookDirectionLHToRef(zz, uz, bz), bz
      }
      static FromLookDirectionLHToRef(zz, uz, bz) {
        const Ez = Kz.Matrix[0];
        return Rz.LookDirectionLHToRef(zz, uz, Ez), Zz.FromRotationMatrixToRef(Ez, bz), bz
      }
      static FromLookDirectionRH(zz, uz) {
        const bz = new Zz;
        return Zz.FromLookDirectionRHToRef(zz, uz, bz), bz
      }
      static FromLookDirectionRHToRef(zz, uz, bz) {
        const Ez = Kz.Matrix[0];
        return Rz.LookDirectionRHToRef(zz, uz, Ez), Zz.FromRotationMatrixToRef(Ez, bz)
      }
      static Slerp(zz, uz, bz) {
        const Ez = Zz.Identity();
        return Zz.SlerpToRef(zz, uz, bz, Ez), Ez
      }
      static SlerpToRef(zz, uz, bz, Ez) {
        let nz, iz, lz = zz._x * uz._x + zz._y * uz._y + zz._z * uz._z + zz._w * uz._w,
          Mz = !1;
        if (lz < 0 && (Mz = !0, lz = -lz), lz > .999999) iz = 1 - bz, nz = Mz ? -bz : bz;
        else {
          const zz = Math.acos(lz),
            uz = 1 / Math.sin(zz);
          iz = Math.sin((1 - bz) * zz) * uz, nz = Mz ? -Math.sin(bz * zz) * uz : Math.sin(bz * zz) * uz
        }
        return Ez._x = iz * zz._x + nz * uz._x, Ez._y = iz * zz._y + nz * uz._y, Ez._z = iz * zz._z + nz * uz._z, Ez._w = iz * zz._w + nz * uz._w, Ez._isDirty = !0, Ez
      }
      static Hermite(zz, uz, bz, Ez, nz) {
        const iz = nz * nz,
          lz = nz * iz,
          Mz = 2 * lz - 3 * iz + 1,
          tz = -2 * lz + 3 * iz,
          Hz = lz - 2 * iz + nz,
          Oz = lz - iz,
          pz = zz._x * Mz + bz._x * tz + uz._x * Hz + Ez._x * Oz,
          dz = zz._y * Mz + bz._y * tz + uz._y * Hz + Ez._y * Oz,
          Fz = zz._z * Mz + bz._z * tz + uz._z * Hz + Ez._z * Oz,
          Rz = zz._w * Mz + bz._w * tz + uz._w * Hz + Ez._w * Oz;
        return new Zz(pz, dz, Fz, Rz)
      }
      static Hermite1stDerivative(zz, uz, bz, Ez, nz) {
        const iz = new Zz;
        return this.Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz), iz
      }
      static Hermite1stDerivativeToRef(zz, uz, bz, Ez, nz, iz) {
        const lz = nz * nz;
        return iz._x = 6 * (lz - nz) * zz._x + (3 * lz - 4 * nz + 1) * uz._x + 6 * (-lz + nz) * bz._x + (3 * lz - 2 * nz) * Ez._x, iz._y = 6 * (lz - nz) * zz._y + (3 * lz - 4 * nz + 1) * uz._y + 6 * (-lz + nz) * bz._y + (3 * lz - 2 * nz) * Ez._y, iz._z = 6 * (lz - nz) * zz._z + (3 * lz - 4 * nz + 1) * uz._z + 6 * (-lz + nz) * bz._z + (3 * lz - 2 * nz) * Ez._z, iz._w = 6 * (lz - nz) * zz._w + (3 * lz - 4 * nz + 1) * uz._w + 6 * (-lz + nz) * bz._w + (3 * lz - 2 * nz) * Ez._w, iz._isDirty = !0, iz
      }
      static Normalize(zz) {
        const uz = Zz.Zero();
        return Zz.NormalizeToRef(zz, uz), uz
      }
      static NormalizeToRef(zz, uz) {
        return zz.normalizeToRef(uz), uz
      }
      static Clamp(zz, uz, bz) {
        const Ez = new Zz;
        return Zz.ClampToRef(zz, uz, bz, Ez), Ez
      }
      static ClampToRef(zz, uz, bz, Ez) {
        return Ez.P_((0, Mz.Clamp)(zz.x, uz.x, bz.x), (0, Mz.Clamp)(zz.y, uz.y, bz.y), (0, Mz.Clamp)(zz.z, uz.z, bz.z), (0, Mz.Clamp)(zz.w, uz.w, bz.w))
      }
      static Random() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Zz((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
      }
      static RandomToRef() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).P_((0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz), (0, Mz.RandomRange)(zz, uz))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(zz, uz) {
        return Math.sqrt(Zz.DistanceSquared(zz, uz))
      }
      static DistanceSquared(zz, uz) {
        const bz = zz.x - uz.x,
          Ez = zz.y - uz.y,
          nz = zz.z - uz.z,
          iz = zz.w - uz.w;
        return bz * bz + Ez * Ez + nz * nz + iz * iz
      }
      static Center(zz, uz) {
        return Zz.CenterToRef(zz, uz, Zz.Zero())
      }
      static CenterToRef(zz, uz, bz) {
        return bz.P_((zz.x + uz.x) / 2, (zz.y + uz.y) / 2, (zz.z + uz.z) / 2, (zz.w + uz.w) / 2)
      }
    }
    Zz._V8PerformanceHack = new Zz(.5, .5, .5, .5);
    class Rz {
      static get Use64Bits() {
        return iz.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = tz.o._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ez = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = zz, this._isIdentity3x2 = zz || bz, this._isIdentityDirty = !this._isIdentity && uz, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Ez
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, iz.b.MatrixTrackPrecisionChange && iz.b.MatrixTrackedMatrices.push(this), this._m = new iz.b.MatrixCurrentType(16), this.markAsUpdated()
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
          uz = zz[0],
          bz = zz[1],
          Ez = zz[2],
          nz = zz[3],
          iz = zz[4],
          lz = zz[5],
          Mz = zz[6],
          tz = zz[7],
          Hz = zz[8],
          Oz = zz[9],
          pz = zz[10],
          dz = zz[11],
          Fz = zz[12],
          Zz = zz[13],
          Rz = zz[14],
          Kz = zz[15],
          wz = pz * Kz - Rz * dz,
          Xz = Oz * Kz - Zz * dz,
          fz = Oz * Rz - Zz * pz,
          sz = Hz * Kz - Fz * dz,
          rz = Hz * Rz - pz * Fz,
          oz = Hz * Zz - Fz * Oz;
        return uz * +(lz * wz - Mz * Xz + tz * fz) + bz * -(iz * wz - Mz * sz + tz * rz) + Ez * +(iz * Xz - lz * sz + tz * oz) + nz * -(iz * fz - lz * rz + Mz * oz)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!zz) return this._m;
        const bz = this._m;
        for (let Ez = 0; Ez < 16; Ez++) zz[uz + Ez] = bz[Ez];
        return this
      }
      obz() {
        return this._m
      }
      Fuz(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Rz.FromArrayToRef(zz, uz, this)
      }
      P_() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        return Rz.FromArrayToRef(uz, 0, this)
      }
      set() {
        const zz = this._m;
        for (let uz = 0; uz < 16; uz++) zz[uz] = uz < 0 || arguments.length <= uz ? void 0 : arguments[uz];
        return this.markAsUpdated(), this
      }
      Vk(zz) {
        const uz = this._m;
        for (let bz = 0; bz < 16; bz++) uz[bz] = zz;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Rz.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(zz) {
        const uz = new Rz;
        return this.addToRef(zz, uz), uz
      }
      addToRef(zz, uz) {
        const bz = this._m,
          Ez = uz._m,
          nz = zz.m;
        for (let iz = 0; iz < 16; iz++) Ez[iz] = bz[iz] + nz[iz];
        return uz.markAsUpdated(), uz
      }
      addToSelf(zz) {
        const uz = this._m,
          bz = zz.m;
        return uz[0] += bz[0], uz[1] += bz[1], uz[2] += bz[2], uz[3] += bz[3], uz[4] += bz[4], uz[5] += bz[5], uz[6] += bz[6], uz[7] += bz[7], uz[8] += bz[8], uz[9] += bz[9], uz[10] += bz[10], uz[11] += bz[11], uz[12] += bz[12], uz[13] += bz[13], uz[14] += bz[14], uz[15] += bz[15], this.markAsUpdated(), this
      }
      addInPlace(zz) {
        const uz = this._m,
          bz = zz.m;
        for (let Ez = 0; Ez < 16; Ez++) uz[Ez] += bz[Ez];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const zz = this._m;
        for (let uz = 0; uz < 16; uz++) zz[uz] += uz < 0 || arguments.length <= uz ? void 0 : arguments[uz];
        return this.markAsUpdated(), this
      }
      subtract(zz) {
        const uz = this._m,
          bz = zz.m;
        for (let Ez = 0; Ez < 16; Ez++) uz[Ez] -= bz[Ez];
        return this.markAsUpdated(), this
      }
      subtractToRef(zz, uz) {
        const bz = this._m,
          Ez = zz.m,
          nz = uz._m;
        for (let iz = 0; iz < 16; iz++) nz[iz] = bz[iz] - Ez[iz];
        return uz.markAsUpdated(), uz
      }
      Qbz(zz) {
        const uz = this._m,
          bz = zz.m;
        for (let Ez = 0; Ez < 16; Ez++) uz[Ez] -= bz[Ez];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        return this.subtractFromFloatsToRef(...uz, new Rz)
      }
      subtractFromFloatsToRef() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        const Ez = uz.pop(),
          nz = this._m,
          iz = Ez._m,
          lz = uz;
        for (let Mz = 0; Mz < 16; Mz++) iz[Mz] = nz[Mz] - lz[Mz];
        return Ez.markAsUpdated(), Ez
      }
      invertToRef(zz) {
        return !0 === this._isIdentity ? (Rz.IdentityToRef(zz), zz) : ((0, tz.h)(this, zz.obz()) ? zz.markAsUpdated() : zz.euz(this), zz)
      }
      addAtIndex(zz, uz) {
        return this._m[zz] += uz, this.markAsUpdated(), this
      }
      multiplyAtIndex(zz, uz) {
        return this._m[zz] *= uz, this.markAsUpdated(), this
      }
      setTranslationFromFloats(zz, uz, bz) {
        return this._m[12] = zz, this._m[13] = uz, this._m[14] = bz, this.markAsUpdated(), this
      }
      addTranslationFromFloats(zz, uz, bz) {
        return this._m[12] += zz, this._m[13] += uz, this._m[14] += bz, this.markAsUpdated(), this
      }
      setTranslation(zz) {
        return this.setTranslationFromFloats(zz._x, zz._y, zz._z)
      }
      getTranslation() {
        return new dz(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(zz) {
        return zz.x = this._m[12], zz.y = this._m[13], zz.z = this._m[14], zz
      }
      removeRotationAndScaling() {
        const zz = this.m;
        return Rz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, zz[12], zz[13], zz[14], zz[15], this), this._updateIdentityStatus(0 === zz[12] && 0 === zz[13] && 0 === zz[14] && 1 === zz[15]), this
      }
      euz(zz) {
        zz.copyToArray(this._m);
        const uz = zz;
        return this.updateFlag = uz.updateFlag, this._updateIdentityStatus(uz._isIdentity, uz._isIdentityDirty, uz._isIdentity3x2, uz._isIdentity3x2Dirty), this
      }
      copyToArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, tz.d)(this, zz, uz), this
      }
      multiply(zz) {
        const uz = new Rz;
        return this.multiplyToRef(zz, uz), uz
      }
      multiplyInPlace(zz) {
        const uz = this._m,
          bz = zz.m;
        for (let Ez = 0; Ez < 16; Ez++) uz[Ez] *= bz[Ez];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const zz = this._m;
        for (let uz = 0; uz < 16; uz++) zz[uz] *= uz < 0 || arguments.length <= uz ? void 0 : arguments[uz];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
        const Ez = uz.pop(),
          nz = this._m,
          iz = Ez._m,
          lz = uz;
        for (let Mz = 0; Mz < 16; Mz++) iz[Mz] = nz[Mz] * lz[Mz];
        return Ez.markAsUpdated(), Ez
      }
      multiplyToRef(zz, uz) {
        return this._isIdentity ? (uz.euz(zz), uz) : zz._isIdentity ? (uz.euz(this), uz) : (this.multiplyToArray(zz, uz._m, 0), uz.markAsUpdated(), uz)
      }
      multiplyToArray(zz, uz, bz) {
        return (0, tz.p)(this, zz, uz, bz), this
      }
      divide(zz) {
        return this.divideToRef(zz, new Rz)
      }
      divideToRef(zz, uz) {
        const bz = this._m,
          Ez = zz.m,
          nz = uz._m;
        for (let iz = 0; iz < 16; iz++) nz[iz] = bz[iz] / Ez[iz];
        return uz.markAsUpdated(), uz
      }
      divideInPlace(zz) {
        const uz = this._m,
          bz = zz.m;
        for (let Ez = 0; Ez < 16; Ez++) uz[Ez] /= bz[Ez];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(zz) {
        const uz = this._m,
          bz = zz.m;
        for (let Ez = 0; Ez < 16; Ez++) uz[Ez] = Math.min(uz[Ez], bz[Ez]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const zz = this._m;
        for (let uz = 0; uz < 16; uz++) zz[uz] = Math.min(zz[uz], uz < 0 || arguments.length <= uz ? void 0 : arguments[uz]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(zz) {
        const uz = this._m,
          bz = zz.m;
        for (let Ez = 0; Ez < 16; Ez++) uz[Ez] = Math.max(uz[Ez], bz[Ez]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const zz = this._m;
        for (let uz = 0; uz < 16; uz++) zz[uz] = Math.max(zz[uz], uz < 0 || arguments.length <= uz ? void 0 : arguments[uz]);
        return this.markAsUpdated(), this
      }
      nb() {
        return this.negateToRef(new Rz)
      }
      negateInPlace() {
        const zz = this._m;
        for (let uz = 0; uz < 16; uz++) zz[uz] = -zz[uz];
        return this.markAsUpdated(), this
      }
      negateToRef(zz) {
        const uz = this._m,
          bz = zz._m;
        for (let Ez = 0; Ez < 16; Ez++) bz[Ez] = -uz[Ez];
        return zz.markAsUpdated(), zz
      }
      equals(zz) {
        const uz = zz;
        if (!uz) return !1;
        if ((this._isIdentity || uz._isIdentity) && !this._isIdentityDirty && !uz._isIdentityDirty) return this._isIdentity && uz._isIdentity;
        const bz = this.m,
          Ez = uz.m;
        return bz[0] === Ez[0] && bz[1] === Ez[1] && bz[2] === Ez[2] && bz[3] === Ez[3] && bz[4] === Ez[4] && bz[5] === Ez[5] && bz[6] === Ez[6] && bz[7] === Ez[7] && bz[8] === Ez[8] && bz[9] === Ez[9] && bz[10] === Ez[10] && bz[11] === Ez[11] && bz[12] === Ez[12] && bz[13] === Ez[13] && bz[14] === Ez[14] && bz[15] === Ez[15]
      }
      equalsWithEpsilon(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = this._m,
          Ez = zz.m;
        for (let nz = 0; nz < 16; nz++)
          if (!(0, Mz.WithinEpsilon)(bz[nz], Ez[nz], uz)) return !1;
        return !0
      }
      zlz() {
        const zz = this._m;
        for (let uz = 0; uz < 16; uz++)
          if (zz[uz] != (uz < 0 || arguments.length <= uz ? void 0 : arguments[uz])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Rz)
      }
      floorToRef(zz) {
        const uz = this._m,
          bz = zz._m;
        for (let Ez = 0; Ez < 16; Ez++) bz[Ez] = Math.floor(uz[Ez]);
        return zz.markAsUpdated(), zz
      }
      fract() {
        return this.fractToRef(new Rz)
      }
      fractToRef(zz) {
        const uz = this._m,
          bz = zz._m;
        for (let Ez = 0; Ez < 16; Ez++) bz[Ez] = uz[Ez] - Math.floor(uz[Ez]);
        return zz.markAsUpdated(), zz
      }
      clone() {
        const zz = new Rz;
        return zz.euz(this), zz
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let zz = Oz(this._m[0]);
        for (let uz = 1; uz < 16; uz++) zz = 397 * zz ^ Oz(this._m[uz]);
        return zz
      }
      decomposeToTransformNode(zz) {
        return zz.rotationQuaternion = zz.rotationQuaternion || new Zz, this.decompose(zz.ti, zz.rotationQuaternion, zz.position)
      }
      decompose(zz, uz, bz, Ez) {
        let nz = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return bz && bz.Vk(0), zz && zz.Vk(1), uz && uz.P_(0, 0, 0, 1), !0;
        const iz = this._m;
        if (bz && bz.P_(iz[12], iz[13], iz[14]), (zz = zz || Kz.ER[0]).x = Math.sqrt(iz[0] * iz[0] + iz[1] * iz[1] + iz[2] * iz[2]), zz.y = Math.sqrt(iz[4] * iz[4] + iz[5] * iz[5] + iz[6] * iz[6]), zz.z = Math.sqrt(iz[8] * iz[8] + iz[9] * iz[9] + iz[10] * iz[10]), Ez) {
          const uz = (nz ? Ez.absoluteScaling.x : Ez.ti.x) < 0 ? -1 : 1,
            bz = (nz ? Ez.absoluteScaling.y : Ez.ti.y) < 0 ? -1 : 1,
            iz = (nz ? Ez.absoluteScaling.z : Ez.ti.z) < 0 ? -1 : 1;
          zz.x *= uz, zz.y *= bz, zz.z *= iz
        } else this.determinant() <= 0 && (zz.y *= -1);
        if (0 === zz._x || 0 === zz._y || 0 === zz._z) return uz && uz.P_(0, 0, 0, 1), !1;
        if (uz) {
          const bz = 1 / zz._x,
            Ez = 1 / zz._y,
            nz = 1 / zz._z;
          Rz.FromValuesToRef(iz[0] * bz, iz[1] * bz, iz[2] * bz, 0, iz[4] * Ez, iz[5] * Ez, iz[6] * Ez, 0, iz[8] * nz, iz[9] * nz, iz[10] * nz, 0, 0, 0, 0, 1, Kz.Matrix[0]), Zz.FromRotationMatrixToRef(Kz.Matrix[0], uz)
        }
        return !0
      }
      getRow(zz) {
        if (zz < 0 || zz > 3) return null;
        const uz = 4 * zz;
        return new Fz(this._m[uz + 0], this._m[uz + 1], this._m[uz + 2], this._m[uz + 3])
      }
      getRowToRef(zz, uz) {
        if (zz >= 0 && zz <= 3) {
          const bz = 4 * zz;
          uz.x = this._m[bz + 0], uz.y = this._m[bz + 1], uz.z = this._m[bz + 2], uz.w = this._m[bz + 3]
        }
        return uz
      }
      setRow(zz, uz) {
        return this.setRowFromFloats(zz, uz.x, uz.y, uz.z, uz.w)
      }
      transpose() {
        const zz = new Rz;
        return Rz.TransposeToRef(this, zz), zz
      }
      transposeToRef(zz) {
        return Rz.TransposeToRef(this, zz), zz
      }
      setRowFromFloats(zz, uz, bz, Ez, nz) {
        if (zz < 0 || zz > 3) return this;
        const iz = 4 * zz;
        return this._m[iz + 0] = uz, this._m[iz + 1] = bz, this._m[iz + 2] = Ez, this._m[iz + 3] = nz, this.markAsUpdated(), this
      }
      scale(zz) {
        const uz = new Rz;
        return this.scaleToRef(zz, uz), uz
      }
      scaleToRef(zz, uz) {
        for (let bz = 0; bz < 16; bz++) uz._m[bz] = this._m[bz] * zz;
        return uz.markAsUpdated(), uz
      }
      scaleAndAddToRef(zz, uz) {
        for (let bz = 0; bz < 16; bz++) uz._m[bz] += this._m[bz] * zz;
        return uz.markAsUpdated(), uz
      }
      scaleInPlace(zz) {
        const uz = this._m;
        for (let bz = 0; bz < 16; bz++) uz[bz] *= zz;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(zz) {
        const uz = Kz.Matrix[0];
        this.invertToRef(uz), uz.transposeToRef(zz);
        const bz = zz._m;
        return Rz.FromValuesToRef(bz[0], bz[1], bz[2], 0, bz[4], bz[5], bz[6], 0, bz[8], bz[9], bz[10], 0, 0, 0, 0, 1, zz), zz
      }
      getRotationMatrix() {
        const zz = new Rz;
        return this.getRotationMatrixToRef(zz), zz
      }
      getRotationMatrixToRef(zz) {
        const uz = Kz.ER[0];
        if (!this.decompose(uz)) return Rz.IdentityToRef(zz), zz;
        const bz = this._m,
          Ez = 1 / uz._x,
          nz = 1 / uz._y,
          iz = 1 / uz._z;
        return Rz.FromValuesToRef(bz[0] * Ez, bz[1] * Ez, bz[2] * Ez, 0, bz[4] * nz, bz[5] * nz, bz[6] * nz, 0, bz[8] * iz, bz[9] * iz, bz[10] * iz, 0, 0, 0, 0, 1, zz), zz
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
        return this.multiplyToRef(Xz, this), this
      }
      static FromArray(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const bz = new Rz;
        return Rz.FromArrayToRef(zz, uz, bz), bz
      }
      static FromArrayToRef(zz, uz, bz) {
        for (let Ez = 0; Ez < 16; Ez++) bz._m[Ez] = zz[Ez + uz];
        return bz.markAsUpdated(), bz
      }
      static FromFloat32ArrayToRefScaled(zz, uz, bz, Ez) {
        return Ez._m[0] = zz[0 + uz] * bz, Ez._m[1] = zz[1 + uz] * bz, Ez._m[2] = zz[2 + uz] * bz, Ez._m[3] = zz[3 + uz] * bz, Ez._m[4] = zz[4 + uz] * bz, Ez._m[5] = zz[5 + uz] * bz, Ez._m[6] = zz[6 + uz] * bz, Ez._m[7] = zz[7 + uz] * bz, Ez._m[8] = zz[8 + uz] * bz, Ez._m[9] = zz[9 + uz] * bz, Ez._m[10] = zz[10 + uz] * bz, Ez._m[11] = zz[11 + uz] * bz, Ez._m[12] = zz[12 + uz] * bz, Ez._m[13] = zz[13 + uz] * bz, Ez._m[14] = zz[14 + uz] * bz, Ez._m[15] = zz[15 + uz] * bz, Ez.markAsUpdated(), Ez
      }
      static get IdentityReadOnly() {
        return Rz._IdentityReadOnly
      }
      static FromValuesToRef(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Rz, Kz) {
        const wz = Kz._m;
        wz[0] = zz, wz[1] = uz, wz[2] = bz, wz[3] = Ez, wz[4] = nz, wz[5] = iz, wz[6] = lz, wz[7] = Mz, wz[8] = tz, wz[9] = Hz, wz[10] = Oz, wz[11] = pz, wz[12] = dz, wz[13] = Fz, wz[14] = Zz, wz[15] = Rz, Kz.markAsUpdated()
      }
      static FromValues(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz, pz, dz, Fz, Zz, Kz) {
        const wz = new Rz,
          Xz = wz._m;
        return Xz[0] = zz, Xz[1] = uz, Xz[2] = bz, Xz[3] = Ez, Xz[4] = nz, Xz[5] = iz, Xz[6] = lz, Xz[7] = Mz, Xz[8] = tz, Xz[9] = Hz, Xz[10] = Oz, Xz[11] = pz, Xz[12] = dz, Xz[13] = Fz, Xz[14] = Zz, Xz[15] = Kz, wz.markAsUpdated(), wz
      }
      static Compose(zz, uz, bz) {
        const Ez = new Rz;
        return Rz.ComposeToRef(zz, uz, bz, Ez), Ez
      }
      static ComposeToRef(zz, uz, bz, Ez) {
        const nz = Ez._m,
          iz = uz._x,
          lz = uz._y,
          Mz = uz._z,
          tz = uz._w,
          Hz = iz + iz,
          Oz = lz + lz,
          pz = Mz + Mz,
          dz = iz * Hz,
          Fz = iz * Oz,
          Zz = iz * pz,
          Rz = lz * Oz,
          Kz = lz * pz,
          wz = Mz * pz,
          Xz = tz * Hz,
          fz = tz * Oz,
          sz = tz * pz,
          rz = zz._x,
          oz = zz._y,
          Nz = zz._z;
        return nz[0] = (1 - (Rz + wz)) * rz, nz[1] = (Fz + sz) * rz, nz[2] = (Zz - fz) * rz, nz[3] = 0, nz[4] = (Fz - sz) * oz, nz[5] = (1 - (dz + wz)) * oz, nz[6] = (Kz + Xz) * oz, nz[7] = 0, nz[8] = (Zz + fz) * Nz, nz[9] = (Kz - Xz) * Nz, nz[10] = (1 - (dz + Rz)) * Nz, nz[11] = 0, nz[12] = bz._x, nz[13] = bz._y, nz[14] = bz._z, nz[15] = 1, Ez.markAsUpdated(), Ez
      }
      static Identity() {
        const zz = Rz.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return zz._updateIdentityStatus(!0), zz
      }
      static IdentityToRef(zz) {
        return Rz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, zz), zz._updateIdentityStatus(!0), zz
      }
      static Zero() {
        const zz = Rz.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return zz._updateIdentityStatus(!1), zz
      }
      static RotationX(zz) {
        const uz = new Rz;
        return Rz.RotationXToRef(zz, uz), uz
      }
      static Invert(zz) {
        const uz = new Rz;
        return zz.invertToRef(uz), uz
      }
      static RotationXToRef(zz, uz) {
        const bz = Math.sin(zz),
          Ez = Math.cos(zz);
        return Rz.FromValuesToRef(1, 0, 0, 0, 0, Ez, bz, 0, 0, -bz, Ez, 0, 0, 0, 0, 1, uz), uz._updateIdentityStatus(1 === Ez && 0 === bz), uz
      }
      static RotationY(zz) {
        const uz = new Rz;
        return Rz.RotationYToRef(zz, uz), uz
      }
      static RotationYToRef(zz, uz) {
        const bz = Math.sin(zz),
          Ez = Math.cos(zz);
        return Rz.FromValuesToRef(Ez, 0, -bz, 0, 0, 1, 0, 0, bz, 0, Ez, 0, 0, 0, 0, 1, uz), uz._updateIdentityStatus(1 === Ez && 0 === bz), uz
      }
      static RotationZ(zz) {
        const uz = new Rz;
        return Rz.RotationZToRef(zz, uz), uz
      }
      static RotationZToRef(zz, uz) {
        const bz = Math.sin(zz),
          Ez = Math.cos(zz);
        return Rz.FromValuesToRef(Ez, bz, 0, 0, -bz, Ez, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, uz), uz._updateIdentityStatus(1 === Ez && 0 === bz), uz
      }
      static RotationAxis(zz, uz) {
        const bz = new Rz;
        return Rz.RotationAxisToRef(zz, uz, bz), bz
      }
      static RotationAxisToRef(zz, uz, bz) {
        const Ez = Math.sin(-uz),
          nz = Math.cos(-uz),
          iz = 1 - nz;
        zz = zz.normalizeToRef(Kz.ER[0]);
        const lz = bz._m;
        return lz[0] = zz._x * zz._x * iz + nz, lz[1] = zz._x * zz._y * iz - zz._z * Ez, lz[2] = zz._x * zz._z * iz + zz._y * Ez, lz[3] = 0, lz[4] = zz._y * zz._x * iz + zz._z * Ez, lz[5] = zz._y * zz._y * iz + nz, lz[6] = zz._y * zz._z * iz - zz._x * Ez, lz[7] = 0, lz[8] = zz._z * zz._x * iz - zz._y * Ez, lz[9] = zz._z * zz._y * iz + zz._x * Ez, lz[10] = zz._z * zz._z * iz + nz, lz[11] = 0, lz[12] = 0, lz[13] = 0, lz[14] = 0, lz[15] = 1, bz.markAsUpdated(), bz
      }
      static RotationAlignToRef(zz, uz, bz) {
        let nz = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const iz = dz.Dot(uz, zz),
          lz = bz._m;
        if (iz < -1 + Ez.b) lz[0] = -1, lz[1] = 0, lz[2] = 0, lz[3] = 0, lz[4] = 0, lz[5] = nz ? 1 : -1, lz[6] = 0, lz[7] = 0, lz[8] = 0, lz[9] = 0, lz[10] = nz ? -1 : 1, lz[11] = 0;
        else {
          const bz = dz.Cross(uz, zz),
            Ez = 1 / (1 + iz);
          lz[0] = bz._x * bz._x * Ez + iz, lz[1] = bz._y * bz._x * Ez - bz._z, lz[2] = bz._z * bz._x * Ez + bz._y, lz[3] = 0, lz[4] = bz._x * bz._y * Ez + bz._z, lz[5] = bz._y * bz._y * Ez + iz, lz[6] = bz._z * bz._y * Ez - bz._x, lz[7] = 0, lz[8] = bz._x * bz._z * Ez - bz._y, lz[9] = bz._y * bz._z * Ez + bz._x, lz[10] = bz._z * bz._z * Ez + iz, lz[11] = 0
        }
        return lz[12] = 0, lz[13] = 0, lz[14] = 0, lz[15] = 1, bz.markAsUpdated(), bz
      }
      static RotationYawPitchRoll(zz, uz, bz) {
        const Ez = new Rz;
        return Rz.RotationYawPitchRollToRef(zz, uz, bz, Ez), Ez
      }
      static RotationYawPitchRollToRef(zz, uz, bz, Ez) {
        return Zz.RotationYawPitchRollToRef(zz, uz, bz, Kz.Quaternion[0]), Kz.Quaternion[0].toRotationMatrix(Ez), Ez
      }
      static Scaling(zz, uz, bz) {
        const Ez = new Rz;
        return Rz.ScalingToRef(zz, uz, bz, Ez), Ez
      }
      static ScalingToRef(zz, uz, bz, Ez) {
        return Rz.FromValuesToRef(zz, 0, 0, 0, 0, uz, 0, 0, 0, 0, bz, 0, 0, 0, 0, 1, Ez), Ez._updateIdentityStatus(1 === zz && 1 === uz && 1 === bz), Ez
      }
      static Translation(zz, uz, bz) {
        const Ez = new Rz;
        return Rz.TranslationToRef(zz, uz, bz, Ez), Ez
      }
      static TranslationToRef(zz, uz, bz, Ez) {
        return Rz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, zz, uz, bz, 1, Ez), Ez._updateIdentityStatus(0 === zz && 0 === uz && 0 === bz), Ez
      }
      static Lerp(zz, uz, bz) {
        const Ez = new Rz;
        return Rz.LerpToRef(zz, uz, bz, Ez), Ez
      }
      static LerpToRef(zz, uz, bz, Ez) {
        const nz = Ez._m,
          iz = zz.m,
          lz = uz.m;
        for (let Mz = 0; Mz < 16; Mz++) nz[Mz] = iz[Mz] * (1 - bz) + lz[Mz] * bz;
        return Ez.markAsUpdated(), Ez
      }
      static DecomposeLerp(zz, uz, bz) {
        const Ez = new Rz;
        return Rz.DecomposeLerpToRef(zz, uz, bz, Ez), Ez
      }
      static DecomposeLerpToRef(zz, uz, bz, Ez) {
        const nz = Kz.ER[0],
          iz = Kz.Quaternion[0],
          lz = Kz.ER[1];
        zz.decompose(nz, iz, lz);
        const Mz = Kz.ER[2],
          tz = Kz.Quaternion[1],
          Hz = Kz.ER[3];
        uz.decompose(Mz, tz, Hz);
        const Oz = Kz.ER[4];
        dz.LerpToRef(nz, Mz, bz, Oz);
        const pz = Kz.Quaternion[2];
        Zz.SlerpToRef(iz, tz, bz, pz);
        const Fz = Kz.ER[5];
        return dz.LerpToRef(lz, Hz, bz, Fz), Rz.ComposeToRef(Oz, pz, Fz, Ez), Ez
      }
      static LookAtLH(zz, uz, bz) {
        const Ez = new Rz;
        return Rz.LookAtLHToRef(zz, uz, bz, Ez), Ez
      }
      static LookAtLHToRef(zz, uz, bz, Ez) {
        const nz = Kz.ER[0],
          iz = Kz.ER[1],
          lz = Kz.ER[2];
        uz.subtractToRef(zz, lz), lz.normalize(), dz.CrossToRef(bz, lz, nz);
        const Mz = nz.lengthSquared();
        0 === Mz ? nz.x = 1 : nz.normalizeFromLength(Math.sqrt(Mz)), dz.CrossToRef(lz, nz, iz), iz.normalize();
        const tz = -dz.Dot(nz, zz),
          Hz = -dz.Dot(iz, zz),
          Oz = -dz.Dot(lz, zz);
        return Rz.FromValuesToRef(nz._x, iz._x, lz._x, 0, nz._y, iz._y, lz._y, 0, nz._z, iz._z, lz._z, 0, tz, Hz, Oz, 1, Ez), Ez
      }
      static LookAtRH(zz, uz, bz) {
        const Ez = new Rz;
        return Rz.LookAtRHToRef(zz, uz, bz, Ez), Ez
      }
      static LookAtRHToRef(zz, uz, bz, Ez) {
        const nz = Kz.ER[0],
          iz = Kz.ER[1],
          lz = Kz.ER[2];
        zz.subtractToRef(uz, lz), lz.normalize(), dz.CrossToRef(bz, lz, nz);
        const Mz = nz.lengthSquared();
        0 === Mz ? nz.x = 1 : nz.normalizeFromLength(Math.sqrt(Mz)), dz.CrossToRef(lz, nz, iz), iz.normalize();
        const tz = -dz.Dot(nz, zz),
          Hz = -dz.Dot(iz, zz),
          Oz = -dz.Dot(lz, zz);
        return Rz.FromValuesToRef(nz._x, iz._x, lz._x, 0, nz._y, iz._y, lz._y, 0, nz._z, iz._z, lz._z, 0, tz, Hz, Oz, 1, Ez), Ez
      }
      static LookDirectionLH(zz, uz) {
        const bz = new Rz;
        return Rz.LookDirectionLHToRef(zz, uz, bz), bz
      }
      static LookDirectionLHToRef(zz, uz, bz) {
        const Ez = Kz.ER[0];
        Ez.euz(zz), Ez.scaleInPlace(-1);
        const nz = Kz.ER[1];
        return dz.CrossToRef(uz, Ez, nz), Rz.FromValuesToRef(nz._x, nz._y, nz._z, 0, uz._x, uz._y, uz._z, 0, Ez._x, Ez._y, Ez._z, 0, 0, 0, 0, 1, bz), bz
      }
      static LookDirectionRH(zz, uz) {
        const bz = new Rz;
        return Rz.LookDirectionRHToRef(zz, uz, bz), bz
      }
      static LookDirectionRHToRef(zz, uz, bz) {
        const Ez = Kz.ER[2];
        return dz.CrossToRef(uz, zz, Ez), Rz.FromValuesToRef(Ez._x, Ez._y, Ez._z, 0, uz._x, uz._y, uz._z, 0, zz._x, zz._y, zz._z, 0, 0, 0, 0, 1, bz), bz
      }
      static OrthoLH(zz, uz, bz, Ez, nz) {
        const iz = new Rz;
        return Rz.OrthoLHToRef(zz, uz, bz, Ez, iz, nz), iz
      }
      static OrthoLHToRef(zz, uz, bz, Ez, nz, iz) {
        const lz = 2 / zz,
          Mz = 2 / uz,
          tz = 2 / (Ez - bz),
          Hz = -(Ez + bz) / (Ez - bz);
        return Rz.FromValuesToRef(lz, 0, 0, 0, 0, Mz, 0, 0, 0, 0, tz, 0, 0, 0, Hz, 1, nz), iz && nz.multiplyToRef(Xz, nz), nz._updateIdentityStatus(1 === lz && 1 === Mz && 1 === tz && 0 === Hz), nz
      }
      static OrthoOffCenterLH(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = new Rz;
        return Rz.OrthoOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, Mz, lz), Mz
      }
      static OrthoOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        const tz = 2 / (uz - zz),
          Hz = 2 / (Ez - bz),
          Oz = 2 / (iz - nz),
          pz = -(iz + nz) / (iz - nz),
          dz = (zz + uz) / (zz - uz),
          Fz = (Ez + bz) / (bz - Ez);
        return Rz.FromValuesToRef(tz, 0, 0, 0, 0, Hz, 0, 0, 0, 0, Oz, 0, dz, Fz, pz, 1, lz), Mz && lz.multiplyToRef(Xz, lz), lz.markAsUpdated(), lz
      }
      static ObliqueOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
        const pz = -lz * Math.cos(Mz),
          dz = -lz * Math.sin(Mz);
        return Rz.TranslationToRef(0, 0, -tz, Kz.Matrix[1]), Rz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pz, dz, 1, 0, 0, 0, 0, 1, Kz.Matrix[0]), Kz.Matrix[1].multiplyToRef(Kz.Matrix[0], Kz.Matrix[0]), Rz.TranslationToRef(0, 0, tz, Kz.Matrix[1]), Kz.Matrix[0].multiplyToRef(Kz.Matrix[1], Kz.Matrix[0]), Rz.OrthoOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, Hz, Oz), Kz.Matrix[0].multiplyToRef(Hz, Hz), Hz
      }
      static OrthoOffCenterRH(zz, uz, bz, Ez, nz, iz, lz) {
        const Mz = new Rz;
        return Rz.OrthoOffCenterRHToRef(zz, uz, bz, Ez, nz, iz, Mz, lz), Mz
      }
      static OrthoOffCenterRHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz) {
        return Rz.OrthoOffCenterLHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz), lz._m[10] *= -1, lz
      }
      static ObliqueOffCenterRHToRef(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
        const pz = lz * Math.cos(Mz),
          dz = lz * Math.sin(Mz);
        return Rz.TranslationToRef(0, 0, tz, Kz.Matrix[1]), Rz.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pz, dz, 1, 0, 0, 0, 0, 1, Kz.Matrix[0]), Kz.Matrix[1].multiplyToRef(Kz.Matrix[0], Kz.Matrix[0]), Rz.TranslationToRef(0, 0, -tz, Kz.Matrix[1]), Kz.Matrix[0].multiplyToRef(Kz.Matrix[1], Kz.Matrix[0]), Rz.OrthoOffCenterRHToRef(zz, uz, bz, Ez, nz, iz, Hz, Oz), Kz.Matrix[0].multiplyToRef(Hz, Hz), Hz
      }
      static PerspectiveLH(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const lz = new Rz,
          Mz = 2 * bz / zz,
          tz = 2 * bz / uz,
          Hz = (Ez + bz) / (Ez - bz),
          Oz = -2 * Ez * bz / (Ez - bz),
          pz = Math.tan(iz);
        return Rz.FromValuesToRef(Mz, 0, 0, 0, 0, tz, 0, pz, 0, 0, Hz, 1, 0, 0, Oz, 0, lz), nz && lz.multiplyToRef(Xz, lz), lz._updateIdentityStatus(!1), lz
      }
      static PerspectiveFovLH(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Mz = new Rz;
        return Rz.PerspectiveFovLHToRef(zz, uz, bz, Ez, Mz, !0, nz, iz, lz), Mz
      }
      static PerspectiveFovLHToRef(zz, uz, bz, Ez, nz) {
        let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Hz = bz,
          Oz = Ez,
          pz = 1 / Math.tan(.5 * zz),
          dz = iz ? pz / uz : pz,
          Fz = iz ? pz : pz * uz,
          Zz = tz && 0 === Hz ? -1 : 0 !== Oz ? (Oz + Hz) / (Oz - Hz) : 1,
          Kz = tz && 0 === Hz ? 2 * Oz : 0 !== Oz ? -2 * Oz * Hz / (Oz - Hz) : -2 * Hz,
          wz = Math.tan(Mz);
        return Rz.FromValuesToRef(dz, 0, 0, 0, 0, Fz, 0, wz, 0, 0, Zz, 1, 0, 0, Kz, 0, nz), lz && nz.multiplyToRef(Xz, nz), nz._updateIdentityStatus(!1), nz
      }
      static PerspectiveFovReverseLHToRef(zz, uz, bz, Ez, nz) {
        let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const tz = 1 / Math.tan(.5 * zz),
          Hz = iz ? tz / uz : tz,
          Oz = iz ? tz : tz * uz,
          pz = Math.tan(Mz);
        return Rz.FromValuesToRef(Hz, 0, 0, 0, 0, Oz, 0, pz, 0, 0, -bz, 1, 0, 0, 1, 0, nz), lz && nz.multiplyToRef(Xz, nz), nz._updateIdentityStatus(!1), nz
      }
      static PerspectiveFovRH(zz, uz, bz, Ez, nz) {
        let iz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lz = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Mz = new Rz;
        return Rz.PerspectiveFovRHToRef(zz, uz, bz, Ez, Mz, !0, nz, iz, lz), Mz
      }
      static PerspectiveFovRHToRef(zz, uz, bz, Ez, nz) {
        let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          tz = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Hz = bz,
          Oz = Ez,
          pz = 1 / Math.tan(.5 * zz),
          dz = iz ? pz / uz : pz,
          Fz = iz ? pz : pz * uz,
          Zz = tz && 0 === Hz ? 1 : 0 !== Oz ? -(Oz + Hz) / (Oz - Hz) : -1,
          Kz = tz && 0 === Hz ? 2 * Oz : 0 !== Oz ? -2 * Oz * Hz / (Oz - Hz) : -2 * Hz,
          wz = Math.tan(Mz);
        return Rz.FromValuesToRef(dz, 0, 0, 0, 0, Fz, 0, wz, 0, 0, Zz, -1, 0, 0, Kz, 0, nz), lz && nz.multiplyToRef(Xz, nz), nz._updateIdentityStatus(!1), nz
      }
      static PerspectiveFovReverseRHToRef(zz, uz, bz, Ez, nz) {
        let iz = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const tz = 1 / Math.tan(.5 * zz),
          Hz = iz ? tz / uz : tz,
          Oz = iz ? tz : tz * uz,
          pz = Math.tan(Mz);
        return Rz.FromValuesToRef(Hz, 0, 0, 0, 0, Oz, 0, pz, 0, 0, -bz, -1, 0, 0, -1, 0, nz), lz && nz.multiplyToRef(Xz, nz), nz._updateIdentityStatus(!1), nz
      }
      static GetFinalMatrix(zz, uz, bz, Ez, nz, iz) {
        const lz = zz.width,
          Mz = zz.height,
          tz = zz.x,
          Hz = zz.y,
          Oz = Rz.FromValues(lz / 2, 0, 0, 0, 0, -Mz / 2, 0, 0, 0, 0, iz - nz, 0, tz + lz / 2, Mz / 2 + Hz, nz, 1),
          pz = new Rz;
        return uz.multiplyToRef(bz, pz), pz.multiplyToRef(Ez, pz), pz.multiplyToRef(Oz, pz)
      }
      static GetAsMatrix2x2(zz) {
        const uz = zz.m,
          bz = [uz[0], uz[1], uz[4], uz[5]];
        return iz.b.MatrixUse64Bits ? bz : new Float32Array(bz)
      }
      static GetAsMatrix3x3(zz) {
        const uz = zz.m,
          bz = [uz[0], uz[1], uz[2], uz[4], uz[5], uz[6], uz[8], uz[9], uz[10]];
        return iz.b.MatrixUse64Bits ? bz : new Float32Array(bz)
      }
      static Transpose(zz) {
        const uz = new Rz;
        return Rz.TransposeToRef(zz, uz), uz
      }
      static TransposeToRef(zz, uz) {
        const bz = zz.m,
          Ez = bz[0],
          nz = bz[4],
          iz = bz[8],
          lz = bz[12],
          Mz = bz[1],
          tz = bz[5],
          Hz = bz[9],
          Oz = bz[13],
          pz = bz[2],
          dz = bz[6],
          Fz = bz[10],
          Zz = bz[14],
          Rz = bz[3],
          Kz = bz[7],
          wz = bz[11],
          Xz = bz[15],
          fz = uz._m;
        return fz[0] = Ez, fz[1] = nz, fz[2] = iz, fz[3] = lz, fz[4] = Mz, fz[5] = tz, fz[6] = Hz, fz[7] = Oz, fz[8] = pz, fz[9] = dz, fz[10] = Fz, fz[11] = Zz, fz[12] = Rz, fz[13] = Kz, fz[14] = wz, fz[15] = Xz, uz.markAsUpdated(), uz._updateIdentityStatus(zz._isIdentity, zz._isIdentityDirty), uz
      }
      static Reflection(zz) {
        const uz = new Rz;
        return Rz.ReflectionToRef(zz, uz), uz
      }
      static ReflectionToRef(zz, uz) {
        zz.normalize();
        const bz = zz.normal.x,
          Ez = zz.normal.y,
          nz = zz.normal.z,
          iz = -2 * bz,
          lz = -2 * Ez,
          Mz = -2 * nz;
        return Rz.FromValuesToRef(iz * bz + 1, lz * bz, Mz * bz, 0, iz * Ez, lz * Ez + 1, Mz * Ez, 0, iz * nz, lz * nz, Mz * nz + 1, 0, iz * zz.d, lz * zz.d, Mz * zz.d, 1, uz), uz
      }
      static FromXYZAxesToRef(zz, uz, bz, Ez) {
        return Rz.FromValuesToRef(zz._x, zz._y, zz._z, 0, uz._x, uz._y, uz._z, 0, bz._x, bz._y, bz._z, 0, 0, 0, 0, 1, Ez), Ez
      }
      static FromQuaternionToRef(zz, uz) {
        const bz = zz._x * zz._x,
          Ez = zz._y * zz._y,
          nz = zz._z * zz._z,
          iz = zz._x * zz._y,
          lz = zz._z * zz._w,
          Mz = zz._z * zz._x,
          tz = zz._y * zz._w,
          Hz = zz._y * zz._z,
          Oz = zz._x * zz._w;
        return uz._m[0] = 1 - 2 * (Ez + nz), uz._m[1] = 2 * (iz + lz), uz._m[2] = 2 * (Mz - tz), uz._m[3] = 0, uz._m[4] = 2 * (iz - lz), uz._m[5] = 1 - 2 * (nz + bz), uz._m[6] = 2 * (Hz + Oz), uz._m[7] = 0, uz._m[8] = 2 * (Mz + tz), uz._m[9] = 2 * (Hz - Oz), uz._m[10] = 1 - 2 * (Ez + bz), uz._m[11] = 0, uz._m[12] = 0, uz._m[13] = 0, uz._m[14] = 0, uz._m[15] = 1, uz.markAsUpdated(), uz
      }
    }
    Rz._IdentityReadOnly = Rz.Identity();
    class Kz {}
    Kz.ER = (0, nz.g)(11, dz.Zero), Kz.Matrix = (0, nz.g)(2, Rz.Identity), Kz.Quaternion = (0, nz.g)(3, Zz.Zero);
    class wz {}
    wz.Vector2 = (0, nz.g)(3, pz.Zero), wz.ER = (0, nz.g)(13, dz.Zero), wz.Vector4 = (0, nz.g)(3, Fz.Zero), wz.Quaternion = (0, nz.g)(3, Zz.Zero), wz.Matrix = (0, nz.g)(8, Rz.Identity);
    const Xz = Rz.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let fz = !1;

    function sz() {
      fz || (fz = !0, Object.defineProperties(pz.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(dz.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Fz.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Zz.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Rz.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Hz.c)("BABYLON.Vector2", pz), (0, Hz.c)("BABYLON.Vector3", dz), (0, Hz.c)("BABYLON.Vector4", Fz), (0, Hz.c)("BABYLON.Matrix", Rz))
    }
  },
  36547: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    const Ez = "undefined" !== typeof WeakRef;
    class nz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(zz, uz, bz, Ez)
      }
      initialize(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = zz, this.skipNextObservers = uz, this.target = bz, this.currentTarget = Ez, this
      }
    }
    class iz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = zz, this.mask = uz, this.scope = bz, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(zz)
      }
    }
    class lz {
      static FromPromise(zz, uz) {
        const bz = new lz;
        return zz.then((zz => {
          bz.notifyObservers(zz)
        })).catch((zz => {
          if (!uz) throw zz;
          uz.notifyObservers(zz)
        })), bz
      }
      get observers() {
        return this._observers
      }
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = uz, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new nz(0), zz && (this._onObserverAdded = zz)
      }
      add(zz) {
        let uz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          bz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!zz) return null;
        const nz = new iz(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        nz.unregisterOnNextCall = bz, uz ? this._observers.unshift(nz) : this._observers.push(nz), this._onObserverAdded && this._onObserverAdded(nz), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(nz, this._lastNotifiedValue);
        const lz = Ez ? new WeakRef(this) : {
          deref: () => this
        };
        return nz._remove = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const uz = lz.deref();
          uz && (zz ? uz.remove(nz) : uz._remove(nz))
        }, nz
      }
      addOnce(zz) {
        return this.add(zz, void 0, void 0, void 0, !0)
      }
      remove(zz) {
        if (!zz) return !1;
        zz._remove = null;
        return -1 !== this._observers.indexOf(zz) && (this._deferUnregister(zz), !0)
      }
      removeCallback(zz, uz) {
        for (let bz = 0; bz < this._observers.length; bz++) {
          const Ez = this._observers[bz];
          if (!Ez._willBeUnregistered && (Ez.callback === zz && (!uz || uz === Ez.scope))) return this._deferUnregister(Ez), !0
        }
        return !1
      }
      _deferUnregister(zz) {
        zz._willBeUnregistered || (this._numObserversMarkedAsDeleted++, zz.unregisterOnNextCall = !1, zz._willBeUnregistered = !0, setTimeout((() => {
          this._remove(zz)
        }), 0))
      }
      _remove(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!zz) return !1;
        const bz = this._observers.indexOf(zz);
        return -1 !== bz && (uz && this._numObserversMarkedAsDeleted--, this._observers.splice(bz, 1), !0)
      }
      makeObserverTopPriority(zz) {
        this._remove(zz, !1), this._observers.unshift(zz)
      }
      makeObserverBottomPriority(zz) {
        this._remove(zz, !1), this._observers.push(zz)
      }
      notifyObservers(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zz), !this._observers.length) return !0;
        const iz = this._eventState;
        iz.mask = uz, iz.target = bz, iz.currentTarget = Ez, iz.skipNextObservers = !1, iz.lastReturnValue = zz, iz.userInfo = nz;
        for (const lz of this._observers)
          if (!lz._willBeUnregistered && (lz.mask & uz && (lz.unregisterOnNextCall && this._deferUnregister(lz), lz.scope ? iz.lastReturnValue = lz.callback.apply(lz.scope, [zz, iz]) : iz.lastReturnValue = lz.callback(zz, iz)), iz.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = uz), zz._willBeUnregistered) return;
        const Ez = this._eventState;
        Ez.mask = bz, Ez.skipNextObservers = !1, zz.unregisterOnNextCall && this._deferUnregister(zz), zz.callback(uz, Ez)
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
        const zz = new lz;
        return zz._observers = this._observers.slice(0), zz
      }
      hasSpecificMask() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const uz of this._observers)
          if (uz.mask & zz || uz.mask === zz) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);