export const id = 236;
export const ids = [236];
export const modules = {
  37197: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(37202);
    class nB {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    nB.Instances = [], nB.OnEnginesDisposedObservable = new QB.c, nB._LastCreatedScene = null, nB.UseFallbackTexture = !0, nB.FallbackTexture = ""
  },
  37194: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => QB
    });
    class QB {
      static SetMatrixPrecision(BB) {
        if (QB.MatrixTrackPrecisionChange = !1, BB && !QB.MatrixUse64Bits && QB.MatrixTrackedMatrices)
          for (let jB = 0; jB < QB.MatrixTrackedMatrices.length; ++jB) {
            const BB = QB.MatrixTrackedMatrices[jB],
              zB = BB._m;
            BB._m = new Array(16);
            for (let jB = 0; jB < 16; ++jB) BB._m[jB] = zB[jB]
          }
        QB.MatrixUse64Bits = BB, QB.MatrixCurrentType = QB.MatrixUse64Bits ? Array : Float32Array, QB.MatrixTrackedMatrices = null
      }
    }
    QB.MatrixUse64Bits = !1, QB.MatrixTrackPrecisionChange = !0, QB.MatrixCurrentType = Float32Array, QB.MatrixTrackedMatrices = []
  },
  37216: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => NB,
      g: () => UB,
      k: () => uB,
      n: () => QB,
      o: () => dB,
      s: () => IB
    });
    class QB {}

    function nB(BB) {
      BB.updateFlag = QB._UpdateFlagSeed++
    }

    function dB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const nB = BB.nQB(),
        dB = jB.nQB(),
        IB = nB[0],
        NB = nB[1],
        uB = nB[2],
        UB = nB[3],
        aB = nB[4],
        pB = nB[5],
        rB = nB[6],
        sB = nB[7],
        JB = nB[8],
        mB = nB[9],
        yB = nB[10],
        kB = nB[11],
        GB = nB[12],
        LB = nB[13],
        gB = nB[14],
        tB = nB[15],
        SB = dB[0],
        MB = dB[1],
        EB = dB[2],
        iB = dB[3],
        qB = dB[4],
        fB = dB[5],
        oB = dB[6],
        HB = dB[7],
        DB = dB[8],
        FB = dB[9],
        YB = dB[10],
        VB = dB[11],
        hB = dB[12],
        XB = dB[13],
        ZB = dB[14],
        AB = dB[15];
      zB[QB] = IB * SB + NB * qB + uB * DB + UB * hB, zB[QB + 1] = IB * MB + NB * fB + uB * FB + UB * XB, zB[QB + 2] = IB * EB + NB * oB + uB * YB + UB * ZB, zB[QB + 3] = IB * iB + NB * HB + uB * VB + UB * AB, zB[QB + 4] = aB * SB + pB * qB + rB * DB + sB * hB, zB[QB + 5] = aB * MB + pB * fB + rB * FB + sB * XB, zB[QB + 6] = aB * EB + pB * oB + rB * YB + sB * ZB, zB[QB + 7] = aB * iB + pB * HB + rB * VB + sB * AB, zB[QB + 8] = JB * SB + mB * qB + yB * DB + kB * hB, zB[QB + 9] = JB * MB + mB * fB + yB * FB + kB * XB, zB[QB + 10] = JB * EB + mB * oB + yB * YB + kB * ZB, zB[QB + 11] = JB * iB + mB * HB + yB * VB + kB * AB, zB[QB + 12] = GB * SB + LB * qB + gB * DB + tB * hB, zB[QB + 13] = GB * MB + LB * fB + gB * FB + tB * XB, zB[QB + 14] = GB * EB + LB * oB + gB * YB + tB * ZB, zB[QB + 15] = GB * iB + LB * HB + gB * VB + tB * AB
    }

    function IB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      dB(BB, jB, zB.nQB(), QB), nB(zB)
    }

    function NB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const QB = BB.nQB();
      jB[zB] = QB[0], jB[zB + 1] = QB[1], jB[zB + 2] = QB[2], jB[zB + 3] = QB[3], jB[zB + 4] = QB[4], jB[zB + 5] = QB[5], jB[zB + 6] = QB[6], jB[zB + 7] = QB[7], jB[zB + 8] = QB[8], jB[zB + 9] = QB[9], jB[zB + 10] = QB[10], jB[zB + 11] = QB[11], jB[zB + 12] = QB[12], jB[zB + 13] = QB[13], jB[zB + 14] = QB[14], jB[zB + 15] = QB[15]
    }

    function uB(BB, jB) {
      const zB = UB(BB, jB.nQB());
      return zB && nB(jB), zB
    }

    function UB(BB, jB) {
      const zB = BB.nQB(),
        QB = zB[0],
        nB = zB[1],
        dB = zB[2],
        IB = zB[3],
        NB = zB[4],
        uB = zB[5],
        UB = zB[6],
        aB = zB[7],
        pB = zB[8],
        rB = zB[9],
        sB = zB[10],
        JB = zB[11],
        mB = zB[12],
        yB = zB[13],
        kB = zB[14],
        GB = zB[15],
        LB = sB * GB - kB * JB,
        gB = rB * GB - yB * JB,
        tB = rB * kB - yB * sB,
        SB = pB * GB - mB * JB,
        MB = pB * kB - sB * mB,
        EB = pB * yB - mB * rB,
        iB = +(uB * LB - UB * gB + aB * tB),
        qB = -(NB * LB - UB * SB + aB * MB),
        fB = +(NB * gB - uB * SB + aB * EB),
        oB = -(NB * tB - uB * MB + UB * EB),
        HB = QB * iB + nB * qB + dB * fB + IB * oB;
      if (0 === HB) return !1;
      const DB = 1 / HB,
        FB = UB * GB - kB * aB,
        YB = uB * GB - yB * aB,
        VB = uB * kB - yB * UB,
        hB = NB * GB - mB * aB,
        XB = NB * kB - mB * UB,
        ZB = NB * yB - mB * uB,
        AB = UB * JB - sB * aB,
        TB = uB * JB - rB * aB,
        PB = uB * sB - rB * UB,
        WB = NB * JB - pB * aB,
        eB = NB * sB - pB * UB,
        lB = NB * rB - pB * uB,
        wB = -(nB * LB - dB * gB + IB * tB),
        xB = +(QB * LB - dB * SB + IB * MB),
        KB = -(QB * gB - nB * SB + IB * EB),
        CB = +(QB * tB - nB * MB + dB * EB),
        cB = +(nB * FB - dB * YB + IB * VB),
        bB = -(QB * FB - dB * hB + IB * XB),
        vB = +(QB * YB - nB * hB + IB * ZB),
        RB = -(QB * VB - nB * XB + dB * ZB),
        OB = -(nB * AB - dB * TB + IB * PB),
        Bj = +(QB * AB - dB * WB + IB * eB),
        jj = -(QB * TB - nB * WB + IB * lB),
        zj = +(QB * PB - nB * eB + dB * lB);
      return jB[0] = iB * DB, jB[1] = wB * DB, jB[2] = cB * DB, jB[3] = OB * DB, jB[4] = qB * DB, jB[5] = xB * DB, jB[6] = bB * DB, jB[7] = Bj * DB, jB[8] = fB * DB, jB[9] = KB * DB, jB[10] = vB * DB, jB[11] = jj * DB, jB[12] = oB * DB, jB[13] = CB * DB, jB[14] = RB * DB, jB[15] = zj * DB, !0
    }
    QB._UpdateFlagSeed = 0
  },
  37171: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => mB,
      d: () => JB,
      e: () => gB,
      h: () => kB,
      i: () => pB,
      m: () => rB,
      n: () => sB
    });
    var QB = zB(37178),
      nB = zB(37186),
      dB = zB(37194),
      IB = zB(37197),
      NB = zB(37208),
      uB = zB(37216),
      UB = zB(37222);
    const aB = BB => parseInt(BB.toString().replace(/\W/g, ""));
    class pB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = BB, this.y = jB
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let BB = aB(this.x);
        return BB = 397 * BB ^ aB(this.y), BB
      }
      toArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[jB] = this.x, BB[jB + 1] = this.y, this
      }
      ljB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pB.FromArrayToRef(BB, jB, this), this
      }
      nQB() {
        return [this.x, this.y]
      }
      jH(BB) {
        return this.x = BB.x, this.y = BB.y, this
      }
      U3(BB, jB) {
        return this.x = BB, this.y = jB, this
      }
      set(BB, jB) {
        return this.U3(BB, jB)
      }
      S_(BB) {
        return this.U3(BB, BB)
      }
      add(BB) {
        return new pB(this.x + BB.x, this.y + BB.y)
      }
      addToRef(BB, jB) {
        return jB.x = this.x + BB.x, jB.y = this.y + BB.y, jB
      }
      addInPlace(BB) {
        return this.x += BB.x, this.y += BB.y, this
      }
      addInPlaceFromFloats(BB, jB) {
        return this.x += BB, this.y += jB, this
      }
      addVector3(BB) {
        return new pB(this.x + BB.x, this.y + BB.y)
      }
      subtract(BB) {
        return new pB(this.x - BB.x, this.y - BB.y)
      }
      subtractToRef(BB, jB) {
        return jB.x = this.x - BB.x, jB.y = this.y - BB.y, jB
      }
      MQB(BB) {
        return this.x -= BB.x, this.y -= BB.y, this
      }
      multiplyInPlace(BB) {
        return this.x *= BB.x, this.y *= BB.y, this
      }
      multiply(BB) {
        return new pB(this.x * BB.x, this.y * BB.y)
      }
      multiplyToRef(BB, jB) {
        return jB.x = this.x * BB.x, jB.y = this.y * BB.y, jB
      }
      multiplyByFloats(BB, jB) {
        return new pB(this.x * BB, this.y * jB)
      }
      divide(BB) {
        return new pB(this.x / BB.x, this.y / BB.y)
      }
      divideToRef(BB, jB) {
        return jB.x = this.x / BB.x, jB.y = this.y / BB.y, jB
      }
      divideInPlace(BB) {
        return this.x = this.x / BB.x, this.y = this.y / BB.y, this
      }
      minimizeInPlace(BB) {
        return this.minimizeInPlaceFromFloats(BB.x, BB.y)
      }
      maximizeInPlace(BB) {
        return this.maximizeInPlaceFromFloats(BB.x, BB.y)
      }
      minimizeInPlaceFromFloats(BB, jB) {
        return this.x = Math.min(BB, this.x), this.y = Math.min(jB, this.y), this
      }
      maximizeInPlaceFromFloats(BB, jB) {
        return this.x = Math.max(BB, this.x), this.y = Math.max(jB, this.y), this
      }
      subtractFromFloats(BB, jB) {
        return new pB(this.x - BB, this.y - jB)
      }
      subtractFromFloatsToRef(BB, jB, zB) {
        return zB.x = this.x - BB, zB.y = this.y - jB, zB
      }
      bu() {
        return new pB(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(BB) {
        return BB.x = -this.x, BB.y = -this.y, BB
      }
      scaleInPlace(BB) {
        return this.x *= BB, this.y *= BB, this
      }
      scale(BB) {
        return new pB(this.x * BB, this.y * BB)
      }
      scaleToRef(BB, jB) {
        return jB.x = this.x * BB, jB.y = this.y * BB, jB
      }
      scaleAndAddToRef(BB, jB) {
        return jB.x += this.x * BB, jB.y += this.y * BB, jB
      }
      equals(BB) {
        return BB && this.x === BB.x && this.y === BB.y
      }
      equalsWithEpsilon(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.c;
        return BB && (0, NB.WithinEpsilon)(this.x, BB.x, jB) && (0, NB.WithinEpsilon)(this.y, BB.y, jB)
      }
      YIB(BB, jB) {
        return this.x === BB && this.y === jB
      }
      floor() {
        return new pB(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(BB) {
        return BB.x = Math.floor(this.x), BB.y = Math.floor(this.y), BB
      }
      fract() {
        return new pB(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(BB) {
        return BB.x = this.x - Math.floor(this.x), BB.y = this.y - Math.floor(this.y), BB
      }
      rotate(BB) {
        return this.rotateToRef(BB, new pB)
      }
      rotateToRef(BB, jB) {
        const zB = Math.cos(BB),
          QB = Math.sin(BB);
        return jB.x = zB * this.x - QB * this.y, jB.y = QB * this.x + zB * this.y, jB
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
      normalizeFromLength(BB) {
        return 0 === BB || 1 === BB ? this : this.scaleInPlace(1 / BB)
      }
      normalizeToNew() {
        const BB = new pB;
        return this.normalizeToRef(BB), BB
      }
      normalizeToRef(BB) {
        const jB = this.length();
        return 0 === jB || 1 === jB ? (BB.x = this.x, BB.y = this.y, BB) : this.scaleToRef(1 / jB, BB)
      }
      clone() {
        return new pB(this.x, this.y)
      }
      dot(BB) {
        return this.x * BB.x + this.y * BB.y
      }
      static Zero() {
        return new pB(0, 0)
      }
      static One() {
        return new pB(1, 1)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new pB((0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).U3((0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB))
      }
      static get ZeroReadOnly() {
        return pB._ZeroReadOnly
      }
      static FromArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pB(BB[jB], BB[jB + 1])
      }
      static FromArrayToRef(BB, jB, zB) {
        return zB.x = BB[jB], zB.y = BB[jB + 1], zB
      }
      static FromFloatsToRef(BB, jB, zB) {
        return zB.U3(BB, jB), zB
      }
      static CatmullRom(BB, jB, zB, QB, nB) {
        const dB = nB * nB,
          IB = nB * dB,
          NB = .5 * (2 * jB.x + (-BB.x + zB.x) * nB + (2 * BB.x - 5 * jB.x + 4 * zB.x - QB.x) * dB + (-BB.x + 3 * jB.x - 3 * zB.x + QB.x) * IB),
          uB = .5 * (2 * jB.y + (-BB.y + zB.y) * nB + (2 * BB.y - 5 * jB.y + 4 * zB.y - QB.y) * dB + (-BB.y + 3 * jB.y - 3 * zB.y + QB.y) * IB);
        return new pB(NB, uB)
      }
      static ClampToRef(BB, jB, zB, QB) {
        return QB.x = (0, NB.Clamp)(BB.x, jB.x, zB.x), QB.y = (0, NB.Clamp)(BB.y, jB.y, zB.y), QB
      }
      static Clamp(BB, jB, zB) {
        const QB = (0, NB.Clamp)(BB.x, jB.x, zB.x),
          nB = (0, NB.Clamp)(BB.y, jB.y, zB.y);
        return new pB(QB, nB)
      }
      static Hermite(BB, jB, zB, QB, nB) {
        const dB = nB * nB,
          IB = nB * dB,
          NB = 2 * IB - 3 * dB + 1,
          uB = -2 * IB + 3 * dB,
          UB = IB - 2 * dB + nB,
          aB = IB - dB,
          rB = BB.x * NB + zB.x * uB + jB.x * UB + QB.x * aB,
          sB = BB.y * NB + zB.y * uB + jB.y * UB + QB.y * aB;
        return new pB(rB, sB)
      }
      static Hermite1stDerivative(BB, jB, zB, QB, nB) {
        return this.Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, new pB)
      }
      static Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB) {
        const IB = nB * nB;
        return dB.x = 6 * (IB - nB) * BB.x + (3 * IB - 4 * nB + 1) * jB.x + 6 * (-IB + nB) * zB.x + (3 * IB - 2 * nB) * QB.x, dB.y = 6 * (IB - nB) * BB.y + (3 * IB - 4 * nB + 1) * jB.y + 6 * (-IB + nB) * zB.y + (3 * IB - 2 * nB) * QB.y, dB
      }
      static Lerp(BB, jB, zB) {
        return pB.LerpToRef(BB, jB, zB, new pB)
      }
      static LerpToRef(BB, jB, zB, QB) {
        return QB.x = BB.x + (jB.x - BB.x) * zB, QB.y = BB.y + (jB.y - BB.y) * zB, QB
      }
      static Dot(BB, jB) {
        return BB.x * jB.x + BB.y * jB.y
      }
      static Normalize(BB) {
        return pB.NormalizeToRef(BB, new pB)
      }
      static NormalizeToRef(BB, jB) {
        return BB.normalizeToRef(jB), jB
      }
      static Minimize(BB, jB) {
        const zB = BB.x < jB.x ? BB.x : jB.x,
          QB = BB.y < jB.y ? BB.y : jB.y;
        return new pB(zB, QB)
      }
      static Maximize(BB, jB) {
        const zB = BB.x > jB.x ? BB.x : jB.x,
          QB = BB.y > jB.y ? BB.y : jB.y;
        return new pB(zB, QB)
      }
      static Transform(BB, jB) {
        return pB.TransformToRef(BB, jB, new pB)
      }
      static TransformToRef(BB, jB, zB) {
        const QB = jB.m,
          nB = BB.x * QB[0] + BB.y * QB[4] + QB[12],
          dB = BB.x * QB[1] + BB.y * QB[5] + QB[13];
        return zB.x = nB, zB.y = dB, zB
      }
      static PointInTriangle(BB, jB, zB, QB) {
        const nB = .5 * (-zB.y * QB.x + jB.y * (-zB.x + QB.x) + jB.x * (zB.y - QB.y) + zB.x * QB.y),
          dB = nB < 0 ? -1 : 1,
          IB = (jB.y * QB.x - jB.x * QB.y + (QB.y - jB.y) * BB.x + (jB.x - QB.x) * BB.y) * dB,
          NB = (jB.x * zB.y - jB.y * zB.x + (jB.y - zB.y) * BB.x + (zB.x - jB.x) * BB.y) * dB;
        return IB > 0 && NB > 0 && IB + NB < 2 * nB * dB
      }
      static Distance(BB, jB) {
        return Math.sqrt(pB.DistanceSquared(BB, jB))
      }
      static DistanceSquared(BB, jB) {
        const zB = BB.x - jB.x,
          QB = BB.y - jB.y;
        return zB * zB + QB * QB
      }
      static Center(BB, jB) {
        return pB.CenterToRef(BB, jB, new pB)
      }
      static CenterToRef(BB, jB, zB) {
        return zB.U3((BB.x + jB.x) / 2, (BB.y + jB.y) / 2)
      }
      static DistanceOfPointFromSegment(BB, jB, zB) {
        const QB = pB.DistanceSquared(jB, zB);
        if (0 === QB) return pB.Distance(BB, jB);
        const nB = zB.subtract(jB),
          dB = Math.max(0, Math.min(1, pB.Dot(BB.subtract(jB), nB) / QB)),
          IB = jB.add(nB.multiplyByFloats(dB, dB));
        return pB.Distance(BB, IB)
      }
    }
    pB._V8PerformanceHack = new pB(.5, .5), pB._ZeroReadOnly = pB.Zero();
    class rB {
      get x() {
        return this._x
      }
      set x(BB) {
        this._x = BB, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(BB) {
        this._y = BB, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(BB) {
        this._z = BB, this._isDirty = !0
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = BB, this._y = jB, this._z = zB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "KJ"
      }
      getHashCode() {
        let BB = aB(this._x);
        return BB = 397 * BB ^ aB(this._y), BB = 397 * BB ^ aB(this._z), BB
      }
      nQB() {
        return [this._x, this._y, this._z]
      }
      toArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[jB] = this._x, BB[jB + 1] = this._y, BB[jB + 2] = this._z, this
      }
      ljB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rB.FromArrayToRef(BB, jB, this), this
      }
      toQuaternion() {
        return JB.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(BB) {
        return this._x += BB._x, this._y += BB._y, this._z += BB._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(BB, jB, zB) {
        return this._x += BB, this._y += jB, this._z += zB, this._isDirty = !0, this
      }
      add(BB) {
        return new rB(this._x + BB._x, this._y + BB._y, this._z + BB._z)
      }
      addToRef(BB, jB) {
        return jB._x = this._x + BB._x, jB._y = this._y + BB._y, jB._z = this._z + BB._z, jB._isDirty = !0, jB
      }
      MQB(BB) {
        return this._x -= BB._x, this._y -= BB._y, this._z -= BB._z, this._isDirty = !0, this
      }
      subtract(BB) {
        return new rB(this._x - BB._x, this._y - BB._y, this._z - BB._z)
      }
      subtractToRef(BB, jB) {
        return this.subtractFromFloatsToRef(BB._x, BB._y, BB._z, jB)
      }
      subtractFromFloats(BB, jB, zB) {
        return new rB(this._x - BB, this._y - jB, this._z - zB)
      }
      subtractFromFloatsToRef(BB, jB, zB, QB) {
        return QB._x = this._x - BB, QB._y = this._y - jB, QB._z = this._z - zB, QB._isDirty = !0, QB
      }
      bu() {
        return new rB(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(BB) {
        return BB._x = -1 * this._x, BB._y = -1 * this._y, BB._z = -1 * this._z, BB._isDirty = !0, BB
      }
      scaleInPlace(BB) {
        return this._x *= BB, this._y *= BB, this._z *= BB, this._isDirty = !0, this
      }
      scale(BB) {
        return new rB(this._x * BB, this._y * BB, this._z * BB)
      }
      scaleToRef(BB, jB) {
        return jB._x = this._x * BB, jB._y = this._y * BB, jB._z = this._z * BB, jB._isDirty = !0, jB
      }
      getNormalToRef(BB) {
        const jB = this.length();
        let zB = Math.acos(this._y / jB);
        const QB = Math.atan2(this._z, this._x);
        zB > Math.PI / 2 ? zB -= Math.PI / 2 : zB += Math.PI / 2;
        const nB = jB * Math.sin(zB) * Math.cos(QB),
          dB = jB * Math.cos(zB),
          IB = jB * Math.sin(zB) * Math.sin(QB);
        return BB.set(nB, dB, IB), BB
      }
      applyRotationQuaternionToRef(BB, jB) {
        const zB = this._x,
          QB = this._y,
          nB = this._z,
          dB = BB._x,
          IB = BB._y,
          NB = BB._z,
          uB = BB._w,
          UB = 2 * (IB * nB - NB * QB),
          aB = 2 * (NB * zB - dB * nB),
          pB = 2 * (dB * QB - IB * zB);
        return jB._x = zB + uB * UB + IB * pB - NB * aB, jB._y = QB + uB * aB + NB * UB - dB * pB, jB._z = nB + uB * pB + dB * aB - IB * UB, jB._isDirty = !0, jB
      }
      applyRotationQuaternionInPlace(BB) {
        return this.applyRotationQuaternionToRef(BB, this)
      }
      applyRotationQuaternion(BB) {
        return this.applyRotationQuaternionToRef(BB, new rB)
      }
      scaleAndAddToRef(BB, jB) {
        return jB._x += this._x * BB, jB._y += this._y * BB, jB._z += this._z * BB, jB._isDirty = !0, jB
      }
      projectOnPlane(BB, jB) {
        return this.projectOnPlaneToRef(BB, jB, new rB)
      }
      projectOnPlaneToRef(BB, jB, zB) {
        const QB = BB.normal,
          nB = BB.d,
          dB = yB.KJ[0];
        this.subtractToRef(jB, dB), dB.normalize();
        const IB = rB.Dot(dB, QB);
        if (Math.abs(IB) < 1e-10) zB.S_(1 / 0);
        else {
          const BB = -(rB.Dot(jB, QB) + nB) / IB,
            NB = dB.scaleInPlace(BB);
          jB.addToRef(NB, zB)
        }
        return zB
      }
      equals(BB) {
        return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z
      }
      equalsWithEpsilon(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.c;
        return BB && (0, NB.WithinEpsilon)(this._x, BB._x, jB) && (0, NB.WithinEpsilon)(this._y, BB._y, jB) && (0, NB.WithinEpsilon)(this._z, BB._z, jB)
      }
      YIB(BB, jB, zB) {
        return this._x === BB && this._y === jB && this._z === zB
      }
      multiplyInPlace(BB) {
        return this._x *= BB._x, this._y *= BB._y, this._z *= BB._z, this._isDirty = !0, this
      }
      multiply(BB) {
        return this.multiplyByFloats(BB._x, BB._y, BB._z)
      }
      multiplyToRef(BB, jB) {
        return jB._x = this._x * BB._x, jB._y = this._y * BB._y, jB._z = this._z * BB._z, jB._isDirty = !0, jB
      }
      multiplyByFloats(BB, jB, zB) {
        return new rB(this._x * BB, this._y * jB, this._z * zB)
      }
      divide(BB) {
        return new rB(this._x / BB._x, this._y / BB._y, this._z / BB._z)
      }
      divideToRef(BB, jB) {
        return jB._x = this._x / BB._x, jB._y = this._y / BB._y, jB._z = this._z / BB._z, jB._isDirty = !0, jB
      }
      divideInPlace(BB) {
        return this._x = this._x / BB._x, this._y = this._y / BB._y, this._z = this._z / BB._z, this._isDirty = !0, this
      }
      minimizeInPlace(BB) {
        return this.minimizeInPlaceFromFloats(BB._x, BB._y, BB._z)
      }
      maximizeInPlace(BB) {
        return this.maximizeInPlaceFromFloats(BB._x, BB._y, BB._z)
      }
      minimizeInPlaceFromFloats(BB, jB, zB) {
        return BB < this._x && (this.x = BB), jB < this._y && (this.y = jB), zB < this._z && (this.z = zB), this
      }
      maximizeInPlaceFromFloats(BB, jB, zB) {
        return BB > this._x && (this.x = BB), jB > this._y && (this.y = jB), zB > this._z && (this.z = zB), this
      }
      isNonUniformWithinEpsilon(BB) {
        const jB = Math.abs(this._x),
          zB = Math.abs(this._y);
        if (!(0, NB.WithinEpsilon)(jB, zB, BB)) return !0;
        const QB = Math.abs(this._z);
        return !(0, NB.WithinEpsilon)(jB, QB, BB) || !(0, NB.WithinEpsilon)(zB, QB, BB)
      }
      get isNonUniform() {
        const BB = Math.abs(this._x);
        if (BB !== Math.abs(this._y)) return !0;
        return BB !== Math.abs(this._z)
      }
      floorToRef(BB) {
        return BB._x = Math.floor(this._x), BB._y = Math.floor(this._y), BB._z = Math.floor(this._z), BB._isDirty = !0, BB
      }
      floor() {
        return new rB(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(BB) {
        return BB._x = this._x - Math.floor(this._x), BB._y = this._y - Math.floor(this._y), BB._z = this._z - Math.floor(this._z), BB._isDirty = !0, BB
      }
      fract() {
        return new rB(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(BB) {
        if ("xyz" === (BB = BB.toLowerCase())) return this;
        const jB = yB.KJ[0].jH(this);
        return this.x = jB[BB[0]], this.y = jB[BB[1]], this.z = jB[BB[2]], this
      }
      rotateByQuaternionToRef(BB, jB) {
        return BB.toRotationMatrix(yB.Matrix[0]), rB.TransformCoordinatesToRef(this, yB.Matrix[0], jB), jB
      }
      rotateByQuaternionAroundPointToRef(BB, jB, zB) {
        return this.subtractToRef(jB, yB.KJ[0]), yB.KJ[0].rotateByQuaternionToRef(BB, yB.KJ[0]), jB.addToRef(yB.KJ[0], zB), zB
      }
      cross(BB) {
        return rB.CrossToRef(this, BB, new rB)
      }
      normalizeFromLength(BB) {
        return 0 === BB || 1 === BB ? this : this.scaleInPlace(1 / BB)
      }
      normalizeToNew() {
        return this.normalizeToRef(new rB)
      }
      normalizeToRef(BB) {
        const jB = this.length();
        return 0 === jB || 1 === jB ? (BB._x = this._x, BB._y = this._y, BB._z = this._z, BB._isDirty = !0, BB) : this.scaleToRef(1 / jB, BB)
      }
      clone() {
        return new rB(this._x, this._y, this._z)
      }
      jH(BB) {
        return this.U3(BB._x, BB._y, BB._z)
      }
      U3(BB, jB, zB) {
        return this._x = BB, this._y = jB, this._z = zB, this._isDirty = !0, this
      }
      set(BB, jB, zB) {
        return this.U3(BB, jB, zB)
      }
      S_(BB) {
        return this._x = this._y = this._z = BB, this._isDirty = !0, this
      }
      static GetClipFactor(BB, jB, zB, QB) {
        const nB = rB.Dot(BB, zB);
        return (nB - QB) / (nB - rB.Dot(jB, zB))
      }
      static GetAngleBetweenVectors(BB, jB, zB) {
        const QB = BB.normalizeToRef(yB.KJ[1]),
          nB = jB.normalizeToRef(yB.KJ[2]);
        let dB = rB.Dot(QB, nB);
        dB = (0, NB.Clamp)(dB, -1, 1);
        const IB = Math.acos(dB),
          uB = yB.KJ[3];
        return rB.CrossToRef(QB, nB, uB), rB.Dot(uB, zB) > 0 ? isNaN(IB) ? 0 : IB : isNaN(IB) ? -Math.PI : -Math.acos(dB)
      }
      static GetAngleBetweenVectorsOnPlane(BB, jB, zB) {
        yB.KJ[0].jH(BB);
        const QB = yB.KJ[0];
        yB.KJ[1].jH(jB);
        const nB = yB.KJ[1];
        yB.KJ[2].jH(zB);
        const dB = yB.KJ[2],
          IB = yB.KJ[3],
          uB = yB.KJ[4];
        QB.normalize(), nB.normalize(), dB.normalize(), rB.CrossToRef(dB, QB, IB), rB.CrossToRef(IB, dB, uB);
        const UB = Math.atan2(rB.Dot(nB, IB), rB.Dot(nB, uB));
        return (0, NB.NormalizeRadians)(UB)
      }
      static PitchYawRollToMoveBetweenPointsToRef(BB, jB, zB) {
        const QB = kB.KJ[0];
        return jB.subtractToRef(BB, QB), zB._y = Math.atan2(QB.x, QB.z) || 0, zB._x = Math.atan2(Math.sqrt(QB.x ** 2 + QB.z ** 2), QB.y) || 0, zB._z = 0, zB._isDirty = !0, zB
      }
      static PitchYawRollToMoveBetweenPoints(BB, jB) {
        const zB = rB.Zero();
        return rB.PitchYawRollToMoveBetweenPointsToRef(BB, jB, zB)
      }
      static SlerpToRef(BB, jB, zB, nB) {
        zB = (0, NB.Clamp)(zB, 0, 1);
        const dB = yB.KJ[0],
          IB = yB.KJ[1];
        dB.jH(BB);
        const uB = dB.length();
        dB.normalizeFromLength(uB), IB.jH(jB);
        const UB = IB.length();
        IB.normalizeFromLength(UB);
        const aB = rB.Dot(dB, IB);
        let pB, sB;
        if (aB < 1 - QB.c) {
          const BB = Math.acos(aB),
            jB = 1 / Math.sin(BB);
          pB = Math.sin((1 - zB) * BB) * jB, sB = Math.sin(zB * BB) * jB
        } else pB = 1 - zB, sB = zB;
        return dB.scaleInPlace(pB), IB.scaleInPlace(sB), nB.jH(dB).addInPlace(IB), nB.scaleInPlace((0, NB.Lerp)(uB, UB, zB)), nB
      }
      static SmoothToRef(BB, jB, zB, QB, nB) {
        return rB.SlerpToRef(BB, jB, 0 === QB ? 1 : zB / QB, nB), nB
      }
      static FromArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new rB(BB[jB], BB[jB + 1], BB[jB + 2])
      }
      static FromFloatArray(BB, jB) {
        return rB.FromArray(BB, jB)
      }
      static FromArrayToRef(BB, jB, zB) {
        return zB._x = BB[jB], zB._y = BB[jB + 1], zB._z = BB[jB + 2], zB._isDirty = !0, zB
      }
      static FromFloatArrayToRef(BB, jB, zB) {
        return rB.FromArrayToRef(BB, jB, zB)
      }
      static FromFloatsToRef(BB, jB, zB, QB) {
        return QB.U3(BB, jB, zB), QB
      }
      static Zero() {
        return new rB(0, 0, 0)
      }
      static One() {
        return new rB(1, 1, 1)
      }
      static Up() {
        return new rB(0, 1, 0)
      }
      static get UpReadOnly() {
        return rB._UpReadOnly
      }
      static get DownReadOnly() {
        return rB._DownReadOnly
      }
      static get RightReadOnly() {
        return rB._RightReadOnly
      }
      static get LeftReadOnly() {
        return rB._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return rB._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return rB._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return rB._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return rB._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return rB._ZeroReadOnly
      }
      static get OneReadOnly() {
        return rB._OneReadOnly
      }
      static Down() {
        return new rB(0, -1, 0)
      }
      static Forward() {
        return new rB(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new rB(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new rB(1, 0, 0)
      }
      static Left() {
        return new rB(-1, 0, 0)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new rB((0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).U3((0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB))
      }
      static TransformCoordinates(BB, jB) {
        const zB = rB.Zero();
        return rB.TransformCoordinatesToRef(BB, jB, zB), zB
      }
      static TransformCoordinatesToRef(BB, jB, zB) {
        return rB.TransformCoordinatesFromFloatsToRef(BB._x, BB._y, BB._z, jB, zB), zB
      }
      static TransformCoordinatesFromFloatsToRef(BB, jB, zB, QB, nB) {
        const dB = QB.m,
          IB = BB * dB[0] + jB * dB[4] + zB * dB[8] + dB[12],
          NB = BB * dB[1] + jB * dB[5] + zB * dB[9] + dB[13],
          uB = BB * dB[2] + jB * dB[6] + zB * dB[10] + dB[14],
          UB = 1 / (BB * dB[3] + jB * dB[7] + zB * dB[11] + dB[15]);
        return nB._x = IB * UB, nB._y = NB * UB, nB._z = uB * UB, nB._isDirty = !0, nB
      }
      static TransformNormal(BB, jB) {
        const zB = rB.Zero();
        return rB.TransformNormalToRef(BB, jB, zB), zB
      }
      static TransformNormalToRef(BB, jB, zB) {
        return this.TransformNormalFromFloatsToRef(BB._x, BB._y, BB._z, jB, zB), zB
      }
      static TransformNormalFromFloatsToRef(BB, jB, zB, QB, nB) {
        const dB = QB.m;
        return nB._x = BB * dB[0] + jB * dB[4] + zB * dB[8], nB._y = BB * dB[1] + jB * dB[5] + zB * dB[9], nB._z = BB * dB[2] + jB * dB[6] + zB * dB[10], nB._isDirty = !0, nB
      }
      static CatmullRom(BB, jB, zB, QB, nB) {
        const dB = nB * nB,
          IB = nB * dB,
          NB = .5 * (2 * jB._x + (-BB._x + zB._x) * nB + (2 * BB._x - 5 * jB._x + 4 * zB._x - QB._x) * dB + (-BB._x + 3 * jB._x - 3 * zB._x + QB._x) * IB),
          uB = .5 * (2 * jB._y + (-BB._y + zB._y) * nB + (2 * BB._y - 5 * jB._y + 4 * zB._y - QB._y) * dB + (-BB._y + 3 * jB._y - 3 * zB._y + QB._y) * IB),
          UB = .5 * (2 * jB._z + (-BB._z + zB._z) * nB + (2 * BB._z - 5 * jB._z + 4 * zB._z - QB._z) * dB + (-BB._z + 3 * jB._z - 3 * zB._z + QB._z) * IB);
        return new rB(NB, uB, UB)
      }
      static Clamp(BB, jB, zB) {
        const QB = new rB;
        return rB.ClampToRef(BB, jB, zB, QB), QB
      }
      static ClampToRef(BB, jB, zB, QB) {
        let nB = BB._x;
        nB = nB > zB._x ? zB._x : nB, nB = nB < jB._x ? jB._x : nB;
        let dB = BB._y;
        dB = dB > zB._y ? zB._y : dB, dB = dB < jB._y ? jB._y : dB;
        let IB = BB._z;
        return IB = IB > zB._z ? zB._z : IB, IB = IB < jB._z ? jB._z : IB, QB.U3(nB, dB, IB), QB
      }
      static CheckExtends(BB, jB, zB) {
        jB.minimizeInPlace(BB), zB.maximizeInPlace(BB)
      }
      static Hermite(BB, jB, zB, QB, nB) {
        const dB = nB * nB,
          IB = nB * dB,
          NB = 2 * IB - 3 * dB + 1,
          uB = -2 * IB + 3 * dB,
          UB = IB - 2 * dB + nB,
          aB = IB - dB,
          pB = BB._x * NB + zB._x * uB + jB._x * UB + QB._x * aB,
          sB = BB._y * NB + zB._y * uB + jB._y * UB + QB._y * aB,
          JB = BB._z * NB + zB._z * uB + jB._z * UB + QB._z * aB;
        return new rB(pB, sB, JB)
      }
      static Hermite1stDerivative(BB, jB, zB, QB, nB) {
        const dB = new rB;
        return this.Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB), dB
      }
      static Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB) {
        const IB = nB * nB;
        return dB._x = 6 * (IB - nB) * BB._x + (3 * IB - 4 * nB + 1) * jB._x + 6 * (-IB + nB) * zB._x + (3 * IB - 2 * nB) * QB._x, dB._y = 6 * (IB - nB) * BB._y + (3 * IB - 4 * nB + 1) * jB._y + 6 * (-IB + nB) * zB._y + (3 * IB - 2 * nB) * QB._y, dB._z = 6 * (IB - nB) * BB._z + (3 * IB - 4 * nB + 1) * jB._z + 6 * (-IB + nB) * zB._z + (3 * IB - 2 * nB) * QB._z, dB._isDirty = !0, dB
      }
      static Lerp(BB, jB, zB) {
        const QB = new rB(0, 0, 0);
        return rB.LerpToRef(BB, jB, zB, QB), QB
      }
      static LerpToRef(BB, jB, zB, QB) {
        return QB._x = BB._x + (jB._x - BB._x) * zB, QB._y = BB._y + (jB._y - BB._y) * zB, QB._z = BB._z + (jB._z - BB._z) * zB, QB._isDirty = !0, QB
      }
      static Dot(BB, jB) {
        return BB._x * jB._x + BB._y * jB._y + BB._z * jB._z
      }
      dot(BB) {
        return this._x * BB._x + this._y * BB._y + this._z * BB._z
      }
      static Cross(BB, jB) {
        const zB = new rB;
        return rB.CrossToRef(BB, jB, zB), zB
      }
      static CrossToRef(BB, jB, zB) {
        const QB = BB._y * jB._z - BB._z * jB._y,
          nB = BB._z * jB._x - BB._x * jB._z,
          dB = BB._x * jB._y - BB._y * jB._x;
        return zB.U3(QB, nB, dB), zB
      }
      static Normalize(BB) {
        const jB = rB.Zero();
        return rB.NormalizeToRef(BB, jB), jB
      }
      static NormalizeToRef(BB, jB) {
        return BB.normalizeToRef(jB), jB
      }
      static Project(BB, jB, zB, QB) {
        const nB = new rB;
        return rB.ProjectToRef(BB, jB, zB, QB, nB), nB
      }
      static ProjectToRef(BB, jB, zB, QB, nB) {
        const dB = QB.width,
          NB = QB.height,
          uB = QB.x,
          UB = QB.y,
          aB = yB.Matrix[1],
          pB = IB.c.LastCreatedEngine?.isNDCHalfZRange,
          sB = pB ? 1 : .5,
          JB = pB ? 0 : .5;
        mB.FromValuesToRef(dB / 2, 0, 0, 0, 0, -NB / 2, 0, 0, 0, 0, sB, 0, uB + dB / 2, NB / 2 + UB, JB, 1, aB);
        const kB = yB.Matrix[0];
        return jB.multiplyToRef(zB, kB), kB.multiplyToRef(aB, kB), rB.TransformCoordinatesToRef(BB, kB, nB), nB
      }
      static Reflect(BB, jB) {
        return this.ReflectToRef(BB, jB, new rB)
      }
      static ReflectToRef(BB, jB, zB) {
        const QB = kB.KJ[0];
        return QB.jH(jB).scaleInPlace(2 * rB.Dot(BB, jB)), zB.jH(BB).MQB(QB)
      }
      static UnprojectFromTransform(BB, jB, zB, QB, nB) {
        return this.Unproject(BB, jB, zB, QB, nB, mB.IdentityReadOnly)
      }
      static Unproject(BB, jB, zB, QB, nB, dB) {
        const IB = new rB;
        return rB.UnprojectToRef(BB, jB, zB, QB, nB, dB, IB), IB
      }
      static UnprojectToRef(BB, jB, zB, QB, nB, dB, IB) {
        return rB.UnprojectFloatsToRef(BB._x, BB._y, BB._z, jB, zB, QB, nB, dB, IB), IB
      }
      static UnprojectFloatsToRef(BB, jB, zB, QB, nB, dB, NB, uB, UB) {
        const aB = yB.Matrix[0];
        dB.multiplyToRef(NB, aB), aB.multiplyToRef(uB, aB), aB.invert();
        const pB = yB.KJ[0];
        return pB.x = BB / QB * 2 - 1, pB.y = -(jB / nB * 2 - 1), IB.c.LastCreatedEngine?.isNDCHalfZRange ? pB.z = zB : pB.z = 2 * zB - 1, rB.TransformCoordinatesToRef(pB, aB, UB), UB
      }
      static Minimize(BB, jB) {
        const zB = new rB;
        return zB.jH(BB), zB.minimizeInPlace(jB), zB
      }
      static Maximize(BB, jB) {
        const zB = new rB;
        return zB.jH(BB), zB.maximizeInPlace(jB), zB
      }
      static Distance(BB, jB) {
        return Math.sqrt(rB.DistanceSquared(BB, jB))
      }
      static DistanceSquared(BB, jB) {
        const zB = BB._x - jB._x,
          QB = BB._y - jB._y,
          nB = BB._z - jB._z;
        return zB * zB + QB * QB + nB * nB
      }
      static ProjectOnTriangleToRef(BB, jB, zB, nB, dB) {
        const IB = yB.KJ[0],
          uB = yB.KJ[1],
          UB = yB.KJ[2],
          aB = yB.KJ[3],
          pB = yB.KJ[4];
        zB.subtractToRef(jB, IB), nB.subtractToRef(jB, uB), nB.subtractToRef(zB, UB);
        const sB = IB.length(),
          JB = uB.length(),
          mB = UB.length();
        if (sB < QB.c || JB < QB.c || mB < QB.c) return dB.jH(jB), rB.Distance(BB, jB);
        BB.subtractToRef(jB, pB), rB.CrossToRef(IB, uB, aB);
        const kB = aB.length();
        if (kB < QB.c) return dB.jH(jB), rB.Distance(BB, jB);
        aB.normalizeFromLength(kB);
        let GB = pB.length();
        if (GB < QB.c) return dB.jH(jB), 0;
        pB.normalizeFromLength(GB);
        const LB = rB.Dot(aB, pB),
          gB = yB.KJ[5],
          tB = yB.KJ[6];
        gB.jH(aB).scaleInPlace(-GB * LB), tB.jH(BB).addInPlace(gB);
        const SB = yB.KJ[4],
          MB = yB.KJ[5],
          EB = yB.KJ[7],
          iB = yB.KJ[8];
        SB.jH(IB).scaleInPlace(1 / sB), iB.jH(uB).scaleInPlace(1 / JB), SB.addInPlace(iB).scaleInPlace(-1), MB.jH(IB).scaleInPlace(-1 / sB), iB.jH(UB).scaleInPlace(1 / mB), MB.addInPlace(iB).scaleInPlace(-1), EB.jH(UB).scaleInPlace(-1 / mB), iB.jH(uB).scaleInPlace(-1 / JB), EB.addInPlace(iB).scaleInPlace(-1);
        const qB = yB.KJ[9];
        let fB;
        qB.jH(tB).MQB(jB), rB.CrossToRef(SB, qB, iB), fB = rB.Dot(iB, aB);
        const oB = fB;
        qB.jH(tB).MQB(zB), rB.CrossToRef(MB, qB, iB), fB = rB.Dot(iB, aB);
        const HB = fB;
        qB.jH(tB).MQB(nB), rB.CrossToRef(EB, qB, iB), fB = rB.Dot(iB, aB);
        const DB = fB,
          FB = yB.KJ[10];
        let YB, VB;
        oB > 0 && HB < 0 ? (FB.jH(IB), YB = jB, VB = zB) : HB > 0 && DB < 0 ? (FB.jH(UB), YB = zB, VB = nB) : (FB.jH(uB).scaleInPlace(-1), YB = nB, VB = jB);
        const hB = yB.KJ[9],
          XB = yB.KJ[4];
        YB.subtractToRef(tB, iB), VB.subtractToRef(tB, hB), rB.CrossToRef(iB, hB, XB);
        if (!(rB.Dot(XB, aB) < 0)) return dB.jH(tB), Math.abs(GB * LB);
        const ZB = yB.KJ[5];
        rB.CrossToRef(FB, XB, ZB), ZB.normalize();
        const AB = yB.KJ[9];
        AB.jH(YB).MQB(tB);
        const TB = AB.length();
        if (TB < QB.c) return dB.jH(YB), rB.Distance(BB, YB);
        AB.normalizeFromLength(TB);
        const PB = rB.Dot(ZB, AB),
          WB = yB.KJ[7];
        WB.jH(tB).addInPlace(ZB.scaleInPlace(TB * PB)), iB.jH(WB).MQB(YB), GB = FB.length(), FB.normalizeFromLength(GB);
        let eB = rB.Dot(iB, FB) / Math.max(GB, QB.c);
        return eB = (0, NB.Clamp)(eB, 0, 1), WB.jH(YB).addInPlace(FB.scaleInPlace(eB * GB)), dB.jH(WB), rB.Distance(BB, WB)
      }
      static Center(BB, jB) {
        return rB.CenterToRef(BB, jB, rB.Zero())
      }
      static CenterToRef(BB, jB, zB) {
        return zB.U3((BB._x + jB._x) / 2, (BB._y + jB._y) / 2, (BB._z + jB._z) / 2)
      }
      static RotationFromAxis(BB, jB, zB) {
        const QB = new rB;
        return rB.RotationFromAxisToRef(BB, jB, zB, QB), QB
      }
      static RotationFromAxisToRef(BB, jB, zB, QB) {
        const nB = yB.Quaternion[0];
        return JB.RotationQuaternionFromAxisToRef(BB, jB, zB, nB), nB.toEulerAnglesToRef(QB), QB
      }
    }
    rB._V8PerformanceHack = new rB(.5, .5, .5), rB._UpReadOnly = rB.Up(), rB._DownReadOnly = rB.Down(), rB._LeftHandedForwardReadOnly = rB.Forward(!1), rB._RightHandedForwardReadOnly = rB.Forward(!0), rB._LeftHandedBackwardReadOnly = rB.Backward(!1), rB._RightHandedBackwardReadOnly = rB.Backward(!0), rB._RightReadOnly = rB.Right(), rB._LeftReadOnly = rB.Left(), rB._ZeroReadOnly = rB.Zero(), rB._OneReadOnly = rB.One();
    class sB {
      get x() {
        return this._x
      }
      set x(BB) {
        this._x = BB, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(BB) {
        this._y = BB, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(BB) {
        this._z = BB, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(BB) {
        this._w = BB, this._isDirty = !0
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = BB, this._y = jB, this._z = zB, this._w = QB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let BB = aB(this._x);
        return BB = 397 * BB ^ aB(this._y), BB = 397 * BB ^ aB(this._z), BB = 397 * BB ^ aB(this._w), BB
      }
      nQB() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(BB, jB) {
        return void 0 === jB && (jB = 0), BB[jB] = this._x, BB[jB + 1] = this._y, BB[jB + 2] = this._z, BB[jB + 3] = this._w, this
      }
      ljB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return sB.FromArrayToRef(BB, jB, this), this
      }
      addInPlace(BB) {
        return this.x += BB._x, this.y += BB._y, this.z += BB._z, this.w += BB._w, this
      }
      addInPlaceFromFloats(BB, jB, zB, QB) {
        return this.x += BB, this.y += jB, this.z += zB, this.w += QB, this
      }
      add(BB) {
        return new sB(this._x + BB.x, this._y + BB.y, this._z + BB.z, this._w + BB.w)
      }
      addToRef(BB, jB) {
        return jB.x = this._x + BB.x, jB.y = this._y + BB.y, jB.z = this._z + BB.z, jB.w = this._w + BB.w, jB
      }
      MQB(BB) {
        return this.x -= BB.x, this.y -= BB.y, this.z -= BB.z, this.w -= BB.w, this
      }
      subtract(BB) {
        return new sB(this._x - BB.x, this._y - BB.y, this._z - BB.z, this._w - BB.w)
      }
      subtractToRef(BB, jB) {
        return jB.x = this._x - BB.x, jB.y = this._y - BB.y, jB.z = this._z - BB.z, jB.w = this._w - BB.w, jB
      }
      subtractFromFloats(BB, jB, zB, QB) {
        return new sB(this._x - BB, this._y - jB, this._z - zB, this._w - QB)
      }
      subtractFromFloatsToRef(BB, jB, zB, QB, nB) {
        return nB.x = this._x - BB, nB.y = this._y - jB, nB.z = this._z - zB, nB.w = this._w - QB, nB
      }
      bu() {
        return new sB(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(BB) {
        return BB.x = -this._x, BB.y = -this._y, BB.z = -this._z, BB.w = -this._w, BB
      }
      scaleInPlace(BB) {
        return this.x *= BB, this.y *= BB, this.z *= BB, this.w *= BB, this
      }
      scale(BB) {
        return new sB(this._x * BB, this._y * BB, this._z * BB, this._w * BB)
      }
      scaleToRef(BB, jB) {
        return jB.x = this._x * BB, jB.y = this._y * BB, jB.z = this._z * BB, jB.w = this._w * BB, jB
      }
      scaleAndAddToRef(BB, jB) {
        return jB.x += this._x * BB, jB.y += this._y * BB, jB.z += this._z * BB, jB.w += this._w * BB, jB
      }
      equals(BB) {
        return BB && this._x === BB.x && this._y === BB.y && this._z === BB.z && this._w === BB.w
      }
      equalsWithEpsilon(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.c;
        return BB && (0, NB.WithinEpsilon)(this._x, BB.x, jB) && (0, NB.WithinEpsilon)(this._y, BB.y, jB) && (0, NB.WithinEpsilon)(this._z, BB.z, jB) && (0, NB.WithinEpsilon)(this._w, BB.w, jB)
      }
      YIB(BB, jB, zB, QB) {
        return this._x === BB && this._y === jB && this._z === zB && this._w === QB
      }
      multiplyInPlace(BB) {
        return this.x *= BB.x, this.y *= BB.y, this.z *= BB.z, this.w *= BB.w, this
      }
      multiply(BB) {
        return new sB(this._x * BB.x, this._y * BB.y, this._z * BB.z, this._w * BB.w)
      }
      multiplyToRef(BB, jB) {
        return jB.x = this._x * BB.x, jB.y = this._y * BB.y, jB.z = this._z * BB.z, jB.w = this._w * BB.w, jB
      }
      multiplyByFloats(BB, jB, zB, QB) {
        return new sB(this._x * BB, this._y * jB, this._z * zB, this._w * QB)
      }
      divide(BB) {
        return new sB(this._x / BB.x, this._y / BB.y, this._z / BB.z, this._w / BB.w)
      }
      divideToRef(BB, jB) {
        return jB.x = this._x / BB.x, jB.y = this._y / BB.y, jB.z = this._z / BB.z, jB.w = this._w / BB.w, jB
      }
      divideInPlace(BB) {
        return this.divideToRef(BB, this)
      }
      minimizeInPlace(BB) {
        return BB.x < this._x && (this.x = BB.x), BB.y < this._y && (this.y = BB.y), BB.z < this._z && (this.z = BB.z), BB.w < this._w && (this.w = BB.w), this
      }
      maximizeInPlace(BB) {
        return BB.x > this._x && (this.x = BB.x), BB.y > this._y && (this.y = BB.y), BB.z > this._z && (this.z = BB.z), BB.w > this._w && (this.w = BB.w), this
      }
      minimizeInPlaceFromFloats(BB, jB, zB, QB) {
        return this.x = Math.min(BB, this._x), this.y = Math.min(jB, this._y), this.z = Math.min(zB, this._z), this.w = Math.min(QB, this._w), this
      }
      maximizeInPlaceFromFloats(BB, jB, zB, QB) {
        return this.x = Math.max(BB, this._x), this.y = Math.max(jB, this._y), this.z = Math.max(zB, this._z), this.w = Math.max(QB, this._w), this
      }
      floorToRef(BB) {
        return BB.x = Math.floor(this._x), BB.y = Math.floor(this._y), BB.z = Math.floor(this._z), BB.w = Math.floor(this._w), BB
      }
      floor() {
        return new sB(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(BB) {
        return BB.x = this._x - Math.floor(this._x), BB.y = this._y - Math.floor(this._y), BB.z = this._z - Math.floor(this._z), BB.w = this._w - Math.floor(this._w), BB
      }
      fract() {
        return new sB(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(BB) {
        return 0 === BB || 1 === BB ? this : this.scaleInPlace(1 / BB)
      }
      normalizeToNew() {
        return this.normalizeToRef(new sB)
      }
      normalizeToRef(BB) {
        const jB = this.length();
        return 0 === jB || 1 === jB ? (BB.x = this._x, BB.y = this._y, BB.z = this._z, BB.w = this._w, BB) : this.scaleToRef(1 / jB, BB)
      }
      toVector3() {
        return new rB(this._x, this._y, this._z)
      }
      clone() {
        return new sB(this._x, this._y, this._z, this._w)
      }
      jH(BB) {
        return this.x = BB.x, this.y = BB.y, this.z = BB.z, this.w = BB.w, this
      }
      U3(BB, jB, zB, QB) {
        return this.x = BB, this.y = jB, this.z = zB, this.w = QB, this
      }
      set(BB, jB, zB, QB) {
        return this.U3(BB, jB, zB, QB)
      }
      S_(BB) {
        return this.x = this.y = this.z = this.w = BB, this
      }
      dot(BB) {
        return this._x * BB.x + this._y * BB.y + this._z * BB.z + this._w * BB.w
      }
      static FromArray(BB, jB) {
        return jB || (jB = 0), new sB(BB[jB], BB[jB + 1], BB[jB + 2], BB[jB + 3])
      }
      static FromArrayToRef(BB, jB, zB) {
        return zB.x = BB[jB], zB.y = BB[jB + 1], zB.z = BB[jB + 2], zB.w = BB[jB + 3], zB
      }
      static FromFloatArrayToRef(BB, jB, zB) {
        return sB.FromArrayToRef(BB, jB, zB), zB
      }
      static FromFloatsToRef(BB, jB, zB, QB, nB) {
        return nB.x = BB, nB.y = jB, nB.z = zB, nB.w = QB, nB
      }
      static Zero() {
        return new sB(0, 0, 0, 0)
      }
      static One() {
        return new sB(1, 1, 1, 1)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new sB((0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        return zB.x = (0, NB.RandomRange)(BB, jB), zB.y = (0, NB.RandomRange)(BB, jB), zB.z = (0, NB.RandomRange)(BB, jB), zB.w = (0, NB.RandomRange)(BB, jB), zB
      }
      static Clamp(BB, jB, zB) {
        return sB.ClampToRef(BB, jB, zB, new sB)
      }
      static ClampToRef(BB, jB, zB, QB) {
        return QB.x = (0, NB.Clamp)(BB.x, jB.x, zB.x), QB.y = (0, NB.Clamp)(BB.y, jB.y, zB.y), QB.z = (0, NB.Clamp)(BB.z, jB.z, zB.z), QB.w = (0, NB.Clamp)(BB.w, jB.w, zB.w), QB
      }
      static CheckExtends(BB, jB, zB) {
        jB.minimizeInPlace(BB), zB.maximizeInPlace(BB)
      }
      static get ZeroReadOnly() {
        return sB._ZeroReadOnly
      }
      static Normalize(BB) {
        return sB.NormalizeToRef(BB, new sB)
      }
      static NormalizeToRef(BB, jB) {
        return BB.normalizeToRef(jB), jB
      }
      static Minimize(BB, jB) {
        const zB = new sB;
        return zB.jH(BB), zB.minimizeInPlace(jB), zB
      }
      static Maximize(BB, jB) {
        const zB = new sB;
        return zB.jH(BB), zB.maximizeInPlace(jB), zB
      }
      static Distance(BB, jB) {
        return Math.sqrt(sB.DistanceSquared(BB, jB))
      }
      static DistanceSquared(BB, jB) {
        const zB = BB.x - jB.x,
          QB = BB.y - jB.y,
          nB = BB.z - jB.z,
          dB = BB.w - jB.w;
        return zB * zB + QB * QB + nB * nB + dB * dB
      }
      static Center(BB, jB) {
        return sB.CenterToRef(BB, jB, new sB)
      }
      static CenterToRef(BB, jB, zB) {
        return zB.x = (BB.x + jB.x) / 2, zB.y = (BB.y + jB.y) / 2, zB.z = (BB.z + jB.z) / 2, zB.w = (BB.w + jB.w) / 2, zB
      }
      static TransformCoordinates(BB, jB) {
        return sB.TransformCoordinatesToRef(BB, jB, new sB)
      }
      static TransformCoordinatesToRef(BB, jB, zB) {
        return sB.TransformCoordinatesFromFloatsToRef(BB._x, BB._y, BB._z, jB, zB), zB
      }
      static TransformCoordinatesFromFloatsToRef(BB, jB, zB, QB, nB) {
        const dB = QB.m,
          IB = BB * dB[0] + jB * dB[4] + zB * dB[8] + dB[12],
          NB = BB * dB[1] + jB * dB[5] + zB * dB[9] + dB[13],
          uB = BB * dB[2] + jB * dB[6] + zB * dB[10] + dB[14],
          UB = BB * dB[3] + jB * dB[7] + zB * dB[11] + dB[15];
        return nB.x = IB, nB.y = NB, nB.z = uB, nB.w = UB, nB
      }
      static TransformNormal(BB, jB) {
        return sB.TransformNormalToRef(BB, jB, new sB)
      }
      static TransformNormalToRef(BB, jB, zB) {
        const QB = jB.m,
          nB = BB.x * QB[0] + BB.y * QB[4] + BB.z * QB[8],
          dB = BB.x * QB[1] + BB.y * QB[5] + BB.z * QB[9],
          IB = BB.x * QB[2] + BB.y * QB[6] + BB.z * QB[10];
        return zB.x = nB, zB.y = dB, zB.z = IB, zB.w = BB.w, zB
      }
      static TransformNormalFromFloatsToRef(BB, jB, zB, QB, nB, dB) {
        const IB = nB.m;
        return dB.x = BB * IB[0] + jB * IB[4] + zB * IB[8], dB.y = BB * IB[1] + jB * IB[5] + zB * IB[9], dB.z = BB * IB[2] + jB * IB[6] + zB * IB[10], dB.w = QB, dB
      }
      static FromVector3(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new sB(BB._x, BB._y, BB._z, jB)
      }
      static Dot(BB, jB) {
        return BB.x * jB.x + BB.y * jB.y + BB.z * jB.z + BB.w * jB.w
      }
    }
    sB._V8PerformanceHack = new sB(.5, .5, .5, .5), sB._ZeroReadOnly = sB.Zero();
    class JB {
      get x() {
        return this._x
      }
      set x(BB) {
        this._x = BB, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(BB) {
        this._y = BB, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(BB) {
        this._z = BB, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(BB) {
        this._w = BB, this._isDirty = !0
      }
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = BB, this._y = jB, this._z = zB, this._w = QB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let BB = aB(this._x);
        return BB = 397 * BB ^ aB(this._y), BB = 397 * BB ^ aB(this._z), BB = 397 * BB ^ aB(this._w), BB
      }
      nQB() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[jB] = this._x, BB[jB + 1] = this._y, BB[jB + 2] = this._z, BB[jB + 3] = this._w, this
      }
      ljB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JB.FromArrayToRef(BB, jB, this)
      }
      equals(BB) {
        return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z && this._w === BB._w
      }
      equalsWithEpsilon(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.c;
        return BB && (0, NB.WithinEpsilon)(this._x, BB._x, jB) && (0, NB.WithinEpsilon)(this._y, BB._y, jB) && (0, NB.WithinEpsilon)(this._z, BB._z, jB) && (0, NB.WithinEpsilon)(this._w, BB._w, jB)
      }
      isApprox(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QB.c;
        return BB && ((0, NB.WithinEpsilon)(this._x, BB._x, jB) && (0, NB.WithinEpsilon)(this._y, BB._y, jB) && (0, NB.WithinEpsilon)(this._z, BB._z, jB) && (0, NB.WithinEpsilon)(this._w, BB._w, jB) || (0, NB.WithinEpsilon)(this._x, -BB._x, jB) && (0, NB.WithinEpsilon)(this._y, -BB._y, jB) && (0, NB.WithinEpsilon)(this._z, -BB._z, jB) && (0, NB.WithinEpsilon)(this._w, -BB._w, jB))
      }
      clone() {
        return new JB(this._x, this._y, this._z, this._w)
      }
      jH(BB) {
        return this._x = BB._x, this._y = BB._y, this._z = BB._z, this._w = BB._w, this._isDirty = !0, this
      }
      U3(BB, jB, zB, QB) {
        return this._x = BB, this._y = jB, this._z = zB, this._w = QB, this._isDirty = !0, this
      }
      set(BB, jB, zB, QB) {
        return this.U3(BB, jB, zB, QB)
      }
      S_(BB) {
        return this.U3(BB, BB, BB, BB)
      }
      add(BB) {
        return new JB(this._x + BB._x, this._y + BB._y, this._z + BB._z, this._w + BB._w)
      }
      addInPlace(BB) {
        return this._x += BB._x, this._y += BB._y, this._z += BB._z, this._w += BB._w, this._isDirty = !0, this
      }
      addToRef(BB, jB) {
        return jB._x = this._x + BB._x, jB._y = this._y + BB._y, jB._z = this._z + BB._z, jB._w = this._w + BB._w, jB._isDirty = !0, jB
      }
      addInPlaceFromFloats(BB, jB, zB, QB) {
        return this._x += BB, this._y += jB, this._z += zB, this._w += QB, this._isDirty = !0, this
      }
      subtractToRef(BB, jB) {
        return jB._x = this._x - BB._x, jB._y = this._y - BB._y, jB._z = this._z - BB._z, jB._w = this._w - BB._w, jB._isDirty = !0, jB
      }
      subtractFromFloats(BB, jB, zB, QB) {
        return this.subtractFromFloatsToRef(BB, jB, zB, QB, new JB)
      }
      subtractFromFloatsToRef(BB, jB, zB, QB, nB) {
        return nB._x = this._x - BB, nB._y = this._y - jB, nB._z = this._z - zB, nB._w = this._w - QB, nB._isDirty = !0, nB
      }
      subtract(BB) {
        return new JB(this._x - BB._x, this._y - BB._y, this._z - BB._z, this._w - BB._w)
      }
      MQB(BB) {
        return this._x -= BB._x, this._y -= BB._y, this._z -= BB._z, this._w -= BB._w, this._isDirty = !0, this
      }
      scale(BB) {
        return new JB(this._x * BB, this._y * BB, this._z * BB, this._w * BB)
      }
      scaleToRef(BB, jB) {
        return jB._x = this._x * BB, jB._y = this._y * BB, jB._z = this._z * BB, jB._w = this._w * BB, jB._isDirty = !0, jB
      }
      scaleInPlace(BB) {
        return this._x *= BB, this._y *= BB, this._z *= BB, this._w *= BB, this._isDirty = !0, this
      }
      scaleAndAddToRef(BB, jB) {
        return jB._x += this._x * BB, jB._y += this._y * BB, jB._z += this._z * BB, jB._w += this._w * BB, jB._isDirty = !0, jB
      }
      multiply(BB) {
        const jB = new JB(0, 0, 0, 1);
        return this.multiplyToRef(BB, jB), jB
      }
      multiplyToRef(BB, jB) {
        const zB = this._x * BB._w + this._y * BB._z - this._z * BB._y + this._w * BB._x,
          QB = -this._x * BB._z + this._y * BB._w + this._z * BB._x + this._w * BB._y,
          nB = this._x * BB._y - this._y * BB._x + this._z * BB._w + this._w * BB._z,
          dB = -this._x * BB._x - this._y * BB._y - this._z * BB._z + this._w * BB._w;
        return jB.U3(zB, QB, nB, dB), jB
      }
      multiplyInPlace(BB) {
        return this.multiplyToRef(BB, this)
      }
      multiplyByFloats(BB, jB, zB, QB) {
        return this._x *= BB, this._y *= jB, this._z *= zB, this._w *= QB, this._isDirty = !0, this
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(BB, jB) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(BB) {
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
      bu() {
        return this.negateToRef(new JB)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(BB) {
        return BB._x = -this._x, BB._y = -this._y, BB._z = -this._z, BB._w = -this._w, BB._isDirty = !0, BB
      }
      YIB(BB, jB, zB, QB) {
        return this._x === BB && this._y === jB && this._z === zB && this._w === QB
      }
      floorToRef(BB) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(BB) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(BB) {
        return BB.U3(-this._x, -this._y, -this._z, this._w), BB
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new JB(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const BB = this.conjugate(),
          jB = this.lengthSquared();
        return 0 == jB || 1 == jB || BB.scaleInPlace(1 / jB), BB
      }
      invertInPlace() {
        this.conjugateInPlace();
        const BB = this.lengthSquared();
        return 0 == BB || 1 == BB || this.scaleInPlace(1 / BB), this
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
      normalizeFromLength(BB) {
        return 0 === BB || 1 === BB ? this : this.scaleInPlace(1 / BB)
      }
      normalizeToNew() {
        const BB = new JB(0, 0, 0, 1);
        return this.normalizeToRef(BB), BB
      }
      normalizeToRef(BB) {
        const jB = this.length();
        return 0 === jB || 1 === jB ? BB.U3(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / jB, BB)
      }
      toEulerAngles() {
        const BB = rB.Zero();
        return this.toEulerAnglesToRef(BB), BB
      }
      toEulerAnglesToRef(BB) {
        const jB = this._z,
          zB = this._x,
          QB = this._y,
          nB = this._w,
          dB = QB * jB - zB * nB,
          IB = .4999999;
        if (dB < -IB) BB._y = 2 * Math.atan2(QB, nB), BB._x = Math.PI / 2, BB._z = 0, BB._isDirty = !0;
        else if (dB > IB) BB._y = 2 * Math.atan2(QB, nB), BB._x = -Math.PI / 2, BB._z = 0, BB._isDirty = !0;
        else {
          const IB = nB * nB,
            NB = jB * jB,
            uB = zB * zB,
            UB = QB * QB;
          BB._z = Math.atan2(2 * (zB * QB + jB * nB), -NB - uB + UB + IB), BB._x = Math.asin(-2 * dB), BB._y = Math.atan2(2 * (jB * zB + QB * nB), NB - uB - UB + IB), BB._isDirty = !0
        }
        return BB
      }
      toAlphaBetaGammaToRef(BB) {
        const jB = this._z,
          zB = this._x,
          QB = this._y,
          nB = this._w,
          dB = Math.sqrt(zB * zB + QB * QB),
          IB = Math.sqrt(jB * jB + nB * nB),
          NB = 2 * Math.atan2(dB, IB),
          uB = 2 * Math.atan2(jB, nB),
          UB = 2 * Math.atan2(QB, zB),
          aB = (uB + UB) / 2,
          pB = (uB - UB) / 2;
        return BB.set(pB, NB, aB), BB
      }
      toRotationMatrix(BB) {
        return mB.FromQuaternionToRef(this, BB), BB
      }
      fromRotationMatrix(BB) {
        return JB.FromRotationMatrixToRef(BB, this), this
      }
      dot(BB) {
        return this._x * BB._x + this._y * BB._y + this._z * BB._z + this._w * BB._w
      }
      toAxisAngle() {
        const BB = rB.Zero();
        return {
          axis: BB,
          angle: this.toAxisAngleToRef(BB)
        }
      }
      toAxisAngleToRef(BB) {
        let jB;
        const zB = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          QB = this._w;
        return zB > 0 ? (jB = 2 * Math.atan2(zB, QB), BB.set(this._x / zB, this._y / zB, this._z / zB)) : (jB = 0, BB.set(1, 0, 0)), jB
      }
      static FromRotationMatrix(BB) {
        const jB = new JB;
        return JB.FromRotationMatrixToRef(BB, jB), jB
      }
      static FromRotationMatrixToRef(BB, jB) {
        const zB = BB.m,
          QB = zB[0],
          nB = zB[4],
          dB = zB[8],
          IB = zB[1],
          NB = zB[5],
          uB = zB[9],
          UB = zB[2],
          aB = zB[6],
          pB = zB[10],
          rB = QB + NB + pB;
        let sB;
        return rB > 0 ? (sB = .5 / Math.sqrt(rB + 1), jB._w = .25 / sB, jB._x = (aB - uB) * sB, jB._y = (dB - UB) * sB, jB._z = (IB - nB) * sB, jB._isDirty = !0) : QB > NB && QB > pB ? (sB = 2 * Math.sqrt(1 + QB - NB - pB), jB._w = (aB - uB) / sB, jB._x = .25 * sB, jB._y = (nB + IB) / sB, jB._z = (dB + UB) / sB, jB._isDirty = !0) : NB > pB ? (sB = 2 * Math.sqrt(1 + NB - QB - pB), jB._w = (dB - UB) / sB, jB._x = (nB + IB) / sB, jB._y = .25 * sB, jB._z = (uB + aB) / sB, jB._isDirty = !0) : (sB = 2 * Math.sqrt(1 + pB - QB - NB), jB._w = (IB - nB) / sB, jB._x = (dB + UB) / sB, jB._y = (uB + aB) / sB, jB._z = .25 * sB, jB._isDirty = !0), jB
      }
      static Dot(BB, jB) {
        return BB._x * jB._x + BB._y * jB._y + BB._z * jB._z + BB._w * jB._w
      }
      static AreClose(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const QB = JB.Dot(BB, jB);
        return 1 - QB * QB <= zB
      }
      static SmoothToRef(BB, jB, zB, QB, nB) {
        let dB = 0 === QB ? 1 : zB / QB;
        return dB = (0, NB.Clamp)(dB, 0, 1), JB.SlerpToRef(BB, jB, dB, nB), nB
      }
      static Zero() {
        return new JB(0, 0, 0, 0)
      }
      static Inverse(BB) {
        return new JB(-BB._x, -BB._y, -BB._z, BB._w)
      }
      static InverseToRef(BB, jB) {
        return jB.set(-BB._x, -BB._y, -BB._z, BB._w), jB
      }
      static Identity() {
        return new JB(0, 0, 0, 1)
      }
      static IsIdentity(BB) {
        return BB && 0 === BB._x && 0 === BB._y && 0 === BB._z && 1 === BB._w
      }
      static RotationAxis(BB, jB) {
        return JB.RotationAxisToRef(BB, jB, new JB)
      }
      static RotationAxisToRef(BB, jB, zB) {
        zB._w = Math.cos(jB / 2);
        const QB = Math.sin(jB / 2) / BB.length();
        return zB._x = BB._x * QB, zB._y = BB._y * QB, zB._z = BB._z * QB, zB._isDirty = !0, zB
      }
      static FromArray(BB, jB) {
        return jB || (jB = 0), new JB(BB[jB], BB[jB + 1], BB[jB + 2], BB[jB + 3])
      }
      static FromArrayToRef(BB, jB, zB) {
        return zB._x = BB[jB], zB._y = BB[jB + 1], zB._z = BB[jB + 2], zB._w = BB[jB + 3], zB._isDirty = !0, zB
      }
      static FromFloatsToRef(BB, jB, zB, QB, nB) {
        return nB.U3(BB, jB, zB, QB), nB
      }
      static FromEulerAngles(BB, jB, zB) {
        const QB = new JB;
        return JB.RotationYawPitchRollToRef(jB, BB, zB, QB), QB
      }
      static FromEulerAnglesToRef(BB, jB, zB, QB) {
        return JB.RotationYawPitchRollToRef(jB, BB, zB, QB), QB
      }
      static FromEulerVector(BB) {
        const jB = new JB;
        return JB.RotationYawPitchRollToRef(BB._y, BB._x, BB._z, jB), jB
      }
      static FromEulerVectorToRef(BB, jB) {
        return JB.RotationYawPitchRollToRef(BB._y, BB._x, BB._z, jB), jB
      }
      static FromUnitVectorsToRef(BB, jB, zB) {
        let nB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QB.c;
        const dB = rB.Dot(BB, jB) + 1;
        return dB < nB ? Math.abs(BB.x) > Math.abs(BB.z) ? zB.set(-BB.y, BB.x, 0, 0) : zB.set(0, -BB.z, BB.y, 0) : (rB.CrossToRef(BB, jB, kB.KJ[0]), zB.set(kB.KJ[0].x, kB.KJ[0].y, kB.KJ[0].z, dB)), zB.normalize()
      }
      static RotationYawPitchRoll(BB, jB, zB) {
        const QB = new JB;
        return JB.RotationYawPitchRollToRef(BB, jB, zB, QB), QB
      }
      static RotationYawPitchRollToRef(BB, jB, zB, QB) {
        const nB = .5 * zB,
          dB = .5 * jB,
          IB = .5 * BB,
          NB = Math.sin(nB),
          uB = Math.cos(nB),
          UB = Math.sin(dB),
          aB = Math.cos(dB),
          pB = Math.sin(IB),
          rB = Math.cos(IB);
        return QB._x = rB * UB * uB + pB * aB * NB, QB._y = pB * aB * uB - rB * UB * NB, QB._z = rB * aB * NB - pB * UB * uB, QB._w = rB * aB * uB + pB * UB * NB, QB._isDirty = !0, QB
      }
      static RotationAlphaBetaGamma(BB, jB, zB) {
        const QB = new JB;
        return JB.RotationAlphaBetaGammaToRef(BB, jB, zB, QB), QB
      }
      static RotationAlphaBetaGammaToRef(BB, jB, zB, QB) {
        const nB = .5 * (zB + BB),
          dB = .5 * (zB - BB),
          IB = .5 * jB;
        return QB._x = Math.cos(dB) * Math.sin(IB), QB._y = Math.sin(dB) * Math.sin(IB), QB._z = Math.sin(nB) * Math.cos(IB), QB._w = Math.cos(nB) * Math.cos(IB), QB._isDirty = !0, QB
      }
      static RotationQuaternionFromAxis(BB, jB, zB) {
        const QB = new JB(0, 0, 0, 0);
        return JB.RotationQuaternionFromAxisToRef(BB, jB, zB, QB), QB
      }
      static RotationQuaternionFromAxisToRef(BB, jB, zB, QB) {
        const nB = yB.Matrix[0];
        return BB = BB.normalizeToRef(yB.KJ[0]), jB = jB.normalizeToRef(yB.KJ[1]), zB = zB.normalizeToRef(yB.KJ[2]), mB.FromXYZAxesToRef(BB, jB, zB, nB), JB.FromRotationMatrixToRef(nB, QB), QB
      }
      static FromLookDirectionLH(BB, jB) {
        const zB = new JB;
        return JB.FromLookDirectionLHToRef(BB, jB, zB), zB
      }
      static FromLookDirectionLHToRef(BB, jB, zB) {
        const QB = yB.Matrix[0];
        return mB.LookDirectionLHToRef(BB, jB, QB), JB.FromRotationMatrixToRef(QB, zB), zB
      }
      static FromLookDirectionRH(BB, jB) {
        const zB = new JB;
        return JB.FromLookDirectionRHToRef(BB, jB, zB), zB
      }
      static FromLookDirectionRHToRef(BB, jB, zB) {
        const QB = yB.Matrix[0];
        return mB.LookDirectionRHToRef(BB, jB, QB), JB.FromRotationMatrixToRef(QB, zB)
      }
      static Slerp(BB, jB, zB) {
        const QB = JB.Identity();
        return JB.SlerpToRef(BB, jB, zB, QB), QB
      }
      static SlerpToRef(BB, jB, zB, QB) {
        let nB, dB, IB = BB._x * jB._x + BB._y * jB._y + BB._z * jB._z + BB._w * jB._w,
          NB = !1;
        if (IB < 0 && (NB = !0, IB = -IB), IB > .999999) dB = 1 - zB, nB = NB ? -zB : zB;
        else {
          const BB = Math.acos(IB),
            jB = 1 / Math.sin(BB);
          dB = Math.sin((1 - zB) * BB) * jB, nB = NB ? -Math.sin(zB * BB) * jB : Math.sin(zB * BB) * jB
        }
        return QB._x = dB * BB._x + nB * jB._x, QB._y = dB * BB._y + nB * jB._y, QB._z = dB * BB._z + nB * jB._z, QB._w = dB * BB._w + nB * jB._w, QB._isDirty = !0, QB
      }
      static Hermite(BB, jB, zB, QB, nB) {
        const dB = nB * nB,
          IB = nB * dB,
          NB = 2 * IB - 3 * dB + 1,
          uB = -2 * IB + 3 * dB,
          UB = IB - 2 * dB + nB,
          aB = IB - dB,
          pB = BB._x * NB + zB._x * uB + jB._x * UB + QB._x * aB,
          rB = BB._y * NB + zB._y * uB + jB._y * UB + QB._y * aB,
          sB = BB._z * NB + zB._z * uB + jB._z * UB + QB._z * aB,
          mB = BB._w * NB + zB._w * uB + jB._w * UB + QB._w * aB;
        return new JB(pB, rB, sB, mB)
      }
      static Hermite1stDerivative(BB, jB, zB, QB, nB) {
        const dB = new JB;
        return this.Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB), dB
      }
      static Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB) {
        const IB = nB * nB;
        return dB._x = 6 * (IB - nB) * BB._x + (3 * IB - 4 * nB + 1) * jB._x + 6 * (-IB + nB) * zB._x + (3 * IB - 2 * nB) * QB._x, dB._y = 6 * (IB - nB) * BB._y + (3 * IB - 4 * nB + 1) * jB._y + 6 * (-IB + nB) * zB._y + (3 * IB - 2 * nB) * QB._y, dB._z = 6 * (IB - nB) * BB._z + (3 * IB - 4 * nB + 1) * jB._z + 6 * (-IB + nB) * zB._z + (3 * IB - 2 * nB) * QB._z, dB._w = 6 * (IB - nB) * BB._w + (3 * IB - 4 * nB + 1) * jB._w + 6 * (-IB + nB) * zB._w + (3 * IB - 2 * nB) * QB._w, dB._isDirty = !0, dB
      }
      static Normalize(BB) {
        const jB = JB.Zero();
        return JB.NormalizeToRef(BB, jB), jB
      }
      static NormalizeToRef(BB, jB) {
        return BB.normalizeToRef(jB), jB
      }
      static Clamp(BB, jB, zB) {
        const QB = new JB;
        return JB.ClampToRef(BB, jB, zB, QB), QB
      }
      static ClampToRef(BB, jB, zB, QB) {
        return QB.U3((0, NB.Clamp)(BB.x, jB.x, zB.x), (0, NB.Clamp)(BB.y, jB.y, zB.y), (0, NB.Clamp)(BB.z, jB.z, zB.z), (0, NB.Clamp)(BB.w, jB.w, zB.w))
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new JB((0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).U3((0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB), (0, NB.RandomRange)(BB, jB))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(BB, jB) {
        return Math.sqrt(JB.DistanceSquared(BB, jB))
      }
      static DistanceSquared(BB, jB) {
        const zB = BB.x - jB.x,
          QB = BB.y - jB.y,
          nB = BB.z - jB.z,
          dB = BB.w - jB.w;
        return zB * zB + QB * QB + nB * nB + dB * dB
      }
      static Center(BB, jB) {
        return JB.CenterToRef(BB, jB, JB.Zero())
      }
      static CenterToRef(BB, jB, zB) {
        return zB.U3((BB.x + jB.x) / 2, (BB.y + jB.y) / 2, (BB.z + jB.z) / 2, (BB.w + jB.w) / 2)
      }
    }
    JB._V8PerformanceHack = new JB(.5, .5, .5, .5);
    class mB {
      static get Use64Bits() {
        return dB.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = uB.n._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = BB, this._isIdentity3x2 = BB || zB, this._isIdentityDirty = !this._isIdentity && jB, this._isIdentity3x2Dirty = !this._isIdentity3x2 && QB
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, dB.b.MatrixTrackPrecisionChange && dB.b.MatrixTrackedMatrices.push(this), this._m = new dB.b.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const BB = this._m;
          this._isIdentity = 1 === BB[0] && 0 === BB[1] && 0 === BB[2] && 0 === BB[3] && 0 === BB[4] && 1 === BB[5] && 0 === BB[6] && 0 === BB[7] && 0 === BB[8] && 0 === BB[9] && 1 === BB[10] && 0 === BB[11] && 0 === BB[12] && 0 === BB[13] && 0 === BB[14] && 1 === BB[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const BB = this._m,
          jB = BB[0],
          zB = BB[1],
          QB = BB[2],
          nB = BB[3],
          dB = BB[4],
          IB = BB[5],
          NB = BB[6],
          uB = BB[7],
          UB = BB[8],
          aB = BB[9],
          pB = BB[10],
          rB = BB[11],
          sB = BB[12],
          JB = BB[13],
          mB = BB[14],
          yB = BB[15],
          kB = pB * yB - mB * rB,
          GB = aB * yB - JB * rB,
          LB = aB * mB - JB * pB,
          gB = UB * yB - sB * rB,
          tB = UB * mB - pB * sB,
          SB = UB * JB - sB * aB;
        return jB * +(IB * kB - NB * GB + uB * LB) + zB * -(dB * kB - NB * gB + uB * tB) + QB * +(dB * GB - IB * gB + uB * SB) + nB * -(dB * LB - IB * tB + NB * SB)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!BB) return this._m;
        const zB = this._m;
        for (let QB = 0; QB < 16; QB++) BB[jB + QB] = zB[QB];
        return this
      }
      nQB() {
        return this._m
      }
      ljB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mB.FromArrayToRef(BB, jB, this)
      }
      U3() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        return mB.FromArrayToRef(jB, 0, this)
      }
      set() {
        const BB = this._m;
        for (let jB = 0; jB < 16; jB++) BB[jB] = jB < 0 || arguments.length <= jB ? void 0 : arguments[jB];
        return this.markAsUpdated(), this
      }
      S_(BB) {
        const jB = this._m;
        for (let zB = 0; zB < 16; zB++) jB[zB] = BB;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return mB.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(BB) {
        const jB = new mB;
        return this.addToRef(BB, jB), jB
      }
      addToRef(BB, jB) {
        const zB = this._m,
          QB = jB._m,
          nB = BB.m;
        for (let dB = 0; dB < 16; dB++) QB[dB] = zB[dB] + nB[dB];
        return jB.markAsUpdated(), jB
      }
      addToSelf(BB) {
        const jB = this._m,
          zB = BB.m;
        return jB[0] += zB[0], jB[1] += zB[1], jB[2] += zB[2], jB[3] += zB[3], jB[4] += zB[4], jB[5] += zB[5], jB[6] += zB[6], jB[7] += zB[7], jB[8] += zB[8], jB[9] += zB[9], jB[10] += zB[10], jB[11] += zB[11], jB[12] += zB[12], jB[13] += zB[13], jB[14] += zB[14], jB[15] += zB[15], this.markAsUpdated(), this
      }
      addInPlace(BB) {
        const jB = this._m,
          zB = BB.m;
        for (let QB = 0; QB < 16; QB++) jB[QB] += zB[QB];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const BB = this._m;
        for (let jB = 0; jB < 16; jB++) BB[jB] += jB < 0 || arguments.length <= jB ? void 0 : arguments[jB];
        return this.markAsUpdated(), this
      }
      subtract(BB) {
        const jB = this._m,
          zB = BB.m;
        for (let QB = 0; QB < 16; QB++) jB[QB] -= zB[QB];
        return this.markAsUpdated(), this
      }
      subtractToRef(BB, jB) {
        const zB = this._m,
          QB = BB.m,
          nB = jB._m;
        for (let dB = 0; dB < 16; dB++) nB[dB] = zB[dB] - QB[dB];
        return jB.markAsUpdated(), jB
      }
      MQB(BB) {
        const jB = this._m,
          zB = BB.m;
        for (let QB = 0; QB < 16; QB++) jB[QB] -= zB[QB];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        return this.subtractFromFloatsToRef(...jB, new mB)
      }
      subtractFromFloatsToRef() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        const QB = jB.pop(),
          nB = this._m,
          dB = QB._m,
          IB = jB;
        for (let NB = 0; NB < 16; NB++) dB[NB] = nB[NB] - IB[NB];
        return QB.markAsUpdated(), QB
      }
      invertToRef(BB) {
        return !0 === this._isIdentity ? (mB.IdentityToRef(BB), BB) : ((0, uB.g)(this, BB.nQB()) ? BB.markAsUpdated() : BB.jH(this), BB)
      }
      addAtIndex(BB, jB) {
        return this._m[BB] += jB, this.markAsUpdated(), this
      }
      multiplyAtIndex(BB, jB) {
        return this._m[BB] *= jB, this.markAsUpdated(), this
      }
      setTranslationFromFloats(BB, jB, zB) {
        return this._m[12] = BB, this._m[13] = jB, this._m[14] = zB, this.markAsUpdated(), this
      }
      addTranslationFromFloats(BB, jB, zB) {
        return this._m[12] += BB, this._m[13] += jB, this._m[14] += zB, this.markAsUpdated(), this
      }
      setTranslation(BB) {
        return this.setTranslationFromFloats(BB._x, BB._y, BB._z)
      }
      getTranslation() {
        return new rB(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(BB) {
        return BB.x = this._m[12], BB.y = this._m[13], BB.z = this._m[14], BB
      }
      removeRotationAndScaling() {
        const BB = this.m;
        return mB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, BB[12], BB[13], BB[14], BB[15], this), this._updateIdentityStatus(0 === BB[12] && 0 === BB[13] && 0 === BB[14] && 1 === BB[15]), this
      }
      jH(BB) {
        BB.copyToArray(this._m);
        const jB = BB;
        return this.updateFlag = jB.updateFlag, this._updateIdentityStatus(jB._isIdentity, jB._isIdentityDirty, jB._isIdentity3x2, jB._isIdentity3x2Dirty), this
      }
      copyToArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, uB.e)(this, BB, jB), this
      }
      multiply(BB) {
        const jB = new mB;
        return this.multiplyToRef(BB, jB), jB
      }
      multiplyInPlace(BB) {
        const jB = this._m,
          zB = BB.m;
        for (let QB = 0; QB < 16; QB++) jB[QB] *= zB[QB];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const BB = this._m;
        for (let jB = 0; jB < 16; jB++) BB[jB] *= jB < 0 || arguments.length <= jB ? void 0 : arguments[jB];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var BB = arguments.length, jB = new Array(BB), zB = 0; zB < BB; zB++) jB[zB] = arguments[zB];
        const QB = jB.pop(),
          nB = this._m,
          dB = QB._m,
          IB = jB;
        for (let NB = 0; NB < 16; NB++) dB[NB] = nB[NB] * IB[NB];
        return QB.markAsUpdated(), QB
      }
      multiplyToRef(BB, jB) {
        return this._isIdentity ? (jB.jH(BB), jB) : BB._isIdentity ? (jB.jH(this), jB) : (this.multiplyToArray(BB, jB._m, 0), jB.markAsUpdated(), jB)
      }
      multiplyToArray(BB, jB, zB) {
        return (0, uB.o)(this, BB, jB, zB), this
      }
      divide(BB) {
        return this.divideToRef(BB, new mB)
      }
      divideToRef(BB, jB) {
        const zB = this._m,
          QB = BB.m,
          nB = jB._m;
        for (let dB = 0; dB < 16; dB++) nB[dB] = zB[dB] / QB[dB];
        return jB.markAsUpdated(), jB
      }
      divideInPlace(BB) {
        const jB = this._m,
          zB = BB.m;
        for (let QB = 0; QB < 16; QB++) jB[QB] /= zB[QB];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(BB) {
        const jB = this._m,
          zB = BB.m;
        for (let QB = 0; QB < 16; QB++) jB[QB] = Math.min(jB[QB], zB[QB]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const BB = this._m;
        for (let jB = 0; jB < 16; jB++) BB[jB] = Math.min(BB[jB], jB < 0 || arguments.length <= jB ? void 0 : arguments[jB]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(BB) {
        const jB = this._m,
          zB = BB.m;
        for (let QB = 0; QB < 16; QB++) jB[QB] = Math.max(jB[QB], zB[QB]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const BB = this._m;
        for (let jB = 0; jB < 16; jB++) BB[jB] = Math.max(BB[jB], jB < 0 || arguments.length <= jB ? void 0 : arguments[jB]);
        return this.markAsUpdated(), this
      }
      bu() {
        return this.negateToRef(new mB)
      }
      negateInPlace() {
        const BB = this._m;
        for (let jB = 0; jB < 16; jB++) BB[jB] = -BB[jB];
        return this.markAsUpdated(), this
      }
      negateToRef(BB) {
        const jB = this._m,
          zB = BB._m;
        for (let QB = 0; QB < 16; QB++) zB[QB] = -jB[QB];
        return BB.markAsUpdated(), BB
      }
      equals(BB) {
        const jB = BB;
        if (!jB) return !1;
        if ((this._isIdentity || jB._isIdentity) && !this._isIdentityDirty && !jB._isIdentityDirty) return this._isIdentity && jB._isIdentity;
        const zB = this.m,
          QB = jB.m;
        return zB[0] === QB[0] && zB[1] === QB[1] && zB[2] === QB[2] && zB[3] === QB[3] && zB[4] === QB[4] && zB[5] === QB[5] && zB[6] === QB[6] && zB[7] === QB[7] && zB[8] === QB[8] && zB[9] === QB[9] && zB[10] === QB[10] && zB[11] === QB[11] && zB[12] === QB[12] && zB[13] === QB[13] && zB[14] === QB[14] && zB[15] === QB[15]
      }
      equalsWithEpsilon(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = this._m,
          QB = BB.m;
        for (let nB = 0; nB < 16; nB++)
          if (!(0, NB.WithinEpsilon)(zB[nB], QB[nB], jB)) return !1;
        return !0
      }
      YIB() {
        const BB = this._m;
        for (let jB = 0; jB < 16; jB++)
          if (BB[jB] != (jB < 0 || arguments.length <= jB ? void 0 : arguments[jB])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new mB)
      }
      floorToRef(BB) {
        const jB = this._m,
          zB = BB._m;
        for (let QB = 0; QB < 16; QB++) zB[QB] = Math.floor(jB[QB]);
        return BB.markAsUpdated(), BB
      }
      fract() {
        return this.fractToRef(new mB)
      }
      fractToRef(BB) {
        const jB = this._m,
          zB = BB._m;
        for (let QB = 0; QB < 16; QB++) zB[QB] = jB[QB] - Math.floor(jB[QB]);
        return BB.markAsUpdated(), BB
      }
      clone() {
        const BB = new mB;
        return BB.jH(this), BB
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let BB = aB(this._m[0]);
        for (let jB = 1; jB < 16; jB++) BB = 397 * BB ^ aB(this._m[jB]);
        return BB
      }
      decomposeToTransformNode(BB) {
        return BB.rotationQuaternion = BB.rotationQuaternion || new JB, this.decompose(BB.pp, BB.rotationQuaternion, BB.position)
      }
      decompose(BB, jB, zB, QB) {
        let nB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return zB && zB.S_(0), BB && BB.S_(1), jB && jB.U3(0, 0, 0, 1), !0;
        const dB = this._m;
        if (zB && zB.U3(dB[12], dB[13], dB[14]), (BB = BB || yB.KJ[0]).x = Math.sqrt(dB[0] * dB[0] + dB[1] * dB[1] + dB[2] * dB[2]), BB.y = Math.sqrt(dB[4] * dB[4] + dB[5] * dB[5] + dB[6] * dB[6]), BB.z = Math.sqrt(dB[8] * dB[8] + dB[9] * dB[9] + dB[10] * dB[10]), QB) {
          const jB = (nB ? QB.absoluteScaling.x : QB.pp.x) < 0 ? -1 : 1,
            zB = (nB ? QB.absoluteScaling.y : QB.pp.y) < 0 ? -1 : 1,
            dB = (nB ? QB.absoluteScaling.z : QB.pp.z) < 0 ? -1 : 1;
          BB.x *= jB, BB.y *= zB, BB.z *= dB
        } else this.determinant() <= 0 && (BB.y *= -1);
        if (0 === BB._x || 0 === BB._y || 0 === BB._z) return jB && jB.U3(0, 0, 0, 1), !1;
        if (jB) {
          const zB = 1 / BB._x,
            QB = 1 / BB._y,
            nB = 1 / BB._z;
          mB.FromValuesToRef(dB[0] * zB, dB[1] * zB, dB[2] * zB, 0, dB[4] * QB, dB[5] * QB, dB[6] * QB, 0, dB[8] * nB, dB[9] * nB, dB[10] * nB, 0, 0, 0, 0, 1, yB.Matrix[0]), JB.FromRotationMatrixToRef(yB.Matrix[0], jB)
        }
        return !0
      }
      getRow(BB) {
        if (BB < 0 || BB > 3) return null;
        const jB = 4 * BB;
        return new sB(this._m[jB + 0], this._m[jB + 1], this._m[jB + 2], this._m[jB + 3])
      }
      getRowToRef(BB, jB) {
        if (BB >= 0 && BB <= 3) {
          const zB = 4 * BB;
          jB.x = this._m[zB + 0], jB.y = this._m[zB + 1], jB.z = this._m[zB + 2], jB.w = this._m[zB + 3]
        }
        return jB
      }
      setRow(BB, jB) {
        return this.setRowFromFloats(BB, jB.x, jB.y, jB.z, jB.w)
      }
      transpose() {
        const BB = new mB;
        return mB.TransposeToRef(this, BB), BB
      }
      transposeToRef(BB) {
        return mB.TransposeToRef(this, BB), BB
      }
      setRowFromFloats(BB, jB, zB, QB, nB) {
        if (BB < 0 || BB > 3) return this;
        const dB = 4 * BB;
        return this._m[dB + 0] = jB, this._m[dB + 1] = zB, this._m[dB + 2] = QB, this._m[dB + 3] = nB, this.markAsUpdated(), this
      }
      scale(BB) {
        const jB = new mB;
        return this.scaleToRef(BB, jB), jB
      }
      scaleToRef(BB, jB) {
        for (let zB = 0; zB < 16; zB++) jB._m[zB] = this._m[zB] * BB;
        return jB.markAsUpdated(), jB
      }
      scaleAndAddToRef(BB, jB) {
        for (let zB = 0; zB < 16; zB++) jB._m[zB] += this._m[zB] * BB;
        return jB.markAsUpdated(), jB
      }
      scaleInPlace(BB) {
        const jB = this._m;
        for (let zB = 0; zB < 16; zB++) jB[zB] *= BB;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(BB) {
        const jB = yB.Matrix[0];
        this.invertToRef(jB), jB.transposeToRef(BB);
        const zB = BB._m;
        return mB.FromValuesToRef(zB[0], zB[1], zB[2], 0, zB[4], zB[5], zB[6], 0, zB[8], zB[9], zB[10], 0, 0, 0, 0, 1, BB), BB
      }
      getRotationMatrix() {
        const BB = new mB;
        return this.getRotationMatrixToRef(BB), BB
      }
      getRotationMatrixToRef(BB) {
        const jB = yB.KJ[0];
        if (!this.decompose(jB)) return mB.IdentityToRef(BB), BB;
        const zB = this._m,
          QB = 1 / jB._x,
          nB = 1 / jB._y,
          dB = 1 / jB._z;
        return mB.FromValuesToRef(zB[0] * QB, zB[1] * QB, zB[2] * QB, 0, zB[4] * nB, zB[5] * nB, zB[6] * nB, 0, zB[8] * dB, zB[9] * dB, zB[10] * dB, 0, 0, 0, 0, 1, BB), BB
      }
      toggleModelMatrixHandInPlace() {
        const BB = this._m;
        return BB[2] *= -1, BB[6] *= -1, BB[8] *= -1, BB[9] *= -1, BB[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const BB = this._m;
        return BB[8] *= -1, BB[9] *= -1, BB[10] *= -1, BB[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(GB, this), this
      }
      static FromArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zB = new mB;
        return mB.FromArrayToRef(BB, jB, zB), zB
      }
      static FromArrayToRef(BB, jB, zB) {
        for (let QB = 0; QB < 16; QB++) zB._m[QB] = BB[QB + jB];
        return zB.markAsUpdated(), zB
      }
      static FromFloat32ArrayToRefScaled(BB, jB, zB, QB) {
        return QB._m[0] = BB[0 + jB] * zB, QB._m[1] = BB[1 + jB] * zB, QB._m[2] = BB[2 + jB] * zB, QB._m[3] = BB[3 + jB] * zB, QB._m[4] = BB[4 + jB] * zB, QB._m[5] = BB[5 + jB] * zB, QB._m[6] = BB[6 + jB] * zB, QB._m[7] = BB[7 + jB] * zB, QB._m[8] = BB[8 + jB] * zB, QB._m[9] = BB[9 + jB] * zB, QB._m[10] = BB[10 + jB] * zB, QB._m[11] = BB[11 + jB] * zB, QB._m[12] = BB[12 + jB] * zB, QB._m[13] = BB[13 + jB] * zB, QB._m[14] = BB[14 + jB] * zB, QB._m[15] = BB[15 + jB] * zB, QB.markAsUpdated(), QB
      }
      static get IdentityReadOnly() {
        return mB._IdentityReadOnly
      }
      static FromValuesToRef(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, mB, yB) {
        const kB = yB._m;
        kB[0] = BB, kB[1] = jB, kB[2] = zB, kB[3] = QB, kB[4] = nB, kB[5] = dB, kB[6] = IB, kB[7] = NB, kB[8] = uB, kB[9] = UB, kB[10] = aB, kB[11] = pB, kB[12] = rB, kB[13] = sB, kB[14] = JB, kB[15] = mB, yB.markAsUpdated()
      }
      static FromValues(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB, pB, rB, sB, JB, yB) {
        const kB = new mB,
          GB = kB._m;
        return GB[0] = BB, GB[1] = jB, GB[2] = zB, GB[3] = QB, GB[4] = nB, GB[5] = dB, GB[6] = IB, GB[7] = NB, GB[8] = uB, GB[9] = UB, GB[10] = aB, GB[11] = pB, GB[12] = rB, GB[13] = sB, GB[14] = JB, GB[15] = yB, kB.markAsUpdated(), kB
      }
      static Compose(BB, jB, zB) {
        const QB = new mB;
        return mB.ComposeToRef(BB, jB, zB, QB), QB
      }
      static ComposeToRef(BB, jB, zB, QB) {
        const nB = QB._m,
          dB = jB._x,
          IB = jB._y,
          NB = jB._z,
          uB = jB._w,
          UB = dB + dB,
          aB = IB + IB,
          pB = NB + NB,
          rB = dB * UB,
          sB = dB * aB,
          JB = dB * pB,
          mB = IB * aB,
          yB = IB * pB,
          kB = NB * pB,
          GB = uB * UB,
          LB = uB * aB,
          gB = uB * pB,
          tB = BB._x,
          SB = BB._y,
          MB = BB._z;
        return nB[0] = (1 - (mB + kB)) * tB, nB[1] = (sB + gB) * tB, nB[2] = (JB - LB) * tB, nB[3] = 0, nB[4] = (sB - gB) * SB, nB[5] = (1 - (rB + kB)) * SB, nB[6] = (yB + GB) * SB, nB[7] = 0, nB[8] = (JB + LB) * MB, nB[9] = (yB - GB) * MB, nB[10] = (1 - (rB + mB)) * MB, nB[11] = 0, nB[12] = zB._x, nB[13] = zB._y, nB[14] = zB._z, nB[15] = 1, QB.markAsUpdated(), QB
      }
      static Identity() {
        const BB = mB.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return BB._updateIdentityStatus(!0), BB
      }
      static IdentityToRef(BB) {
        return mB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, BB), BB._updateIdentityStatus(!0), BB
      }
      static Zero() {
        const BB = mB.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return BB._updateIdentityStatus(!1), BB
      }
      static RotationX(BB) {
        const jB = new mB;
        return mB.RotationXToRef(BB, jB), jB
      }
      static Invert(BB) {
        const jB = new mB;
        return BB.invertToRef(jB), jB
      }
      static RotationXToRef(BB, jB) {
        const zB = Math.sin(BB),
          QB = Math.cos(BB);
        return mB.FromValuesToRef(1, 0, 0, 0, 0, QB, zB, 0, 0, -zB, QB, 0, 0, 0, 0, 1, jB), jB._updateIdentityStatus(1 === QB && 0 === zB), jB
      }
      static RotationY(BB) {
        const jB = new mB;
        return mB.RotationYToRef(BB, jB), jB
      }
      static RotationYToRef(BB, jB) {
        const zB = Math.sin(BB),
          QB = Math.cos(BB);
        return mB.FromValuesToRef(QB, 0, -zB, 0, 0, 1, 0, 0, zB, 0, QB, 0, 0, 0, 0, 1, jB), jB._updateIdentityStatus(1 === QB && 0 === zB), jB
      }
      static RotationZ(BB) {
        const jB = new mB;
        return mB.RotationZToRef(BB, jB), jB
      }
      static RotationZToRef(BB, jB) {
        const zB = Math.sin(BB),
          QB = Math.cos(BB);
        return mB.FromValuesToRef(QB, zB, 0, 0, -zB, QB, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, jB), jB._updateIdentityStatus(1 === QB && 0 === zB), jB
      }
      static RotationAxis(BB, jB) {
        const zB = new mB;
        return mB.RotationAxisToRef(BB, jB, zB), zB
      }
      static RotationAxisToRef(BB, jB, zB) {
        const QB = Math.sin(-jB),
          nB = Math.cos(-jB),
          dB = 1 - nB;
        BB = BB.normalizeToRef(yB.KJ[0]);
        const IB = zB._m;
        return IB[0] = BB._x * BB._x * dB + nB, IB[1] = BB._x * BB._y * dB - BB._z * QB, IB[2] = BB._x * BB._z * dB + BB._y * QB, IB[3] = 0, IB[4] = BB._y * BB._x * dB + BB._z * QB, IB[5] = BB._y * BB._y * dB + nB, IB[6] = BB._y * BB._z * dB - BB._x * QB, IB[7] = 0, IB[8] = BB._z * BB._x * dB - BB._y * QB, IB[9] = BB._z * BB._y * dB + BB._x * QB, IB[10] = BB._z * BB._z * dB + nB, IB[11] = 0, IB[12] = 0, IB[13] = 0, IB[14] = 0, IB[15] = 1, zB.markAsUpdated(), zB
      }
      static RotationAlignToRef(BB, jB, zB) {
        let nB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const dB = rB.Dot(jB, BB),
          IB = zB._m;
        if (dB < -1 + QB.c) IB[0] = -1, IB[1] = 0, IB[2] = 0, IB[3] = 0, IB[4] = 0, IB[5] = nB ? 1 : -1, IB[6] = 0, IB[7] = 0, IB[8] = 0, IB[9] = 0, IB[10] = nB ? -1 : 1, IB[11] = 0;
        else {
          const zB = rB.Cross(jB, BB),
            QB = 1 / (1 + dB);
          IB[0] = zB._x * zB._x * QB + dB, IB[1] = zB._y * zB._x * QB - zB._z, IB[2] = zB._z * zB._x * QB + zB._y, IB[3] = 0, IB[4] = zB._x * zB._y * QB + zB._z, IB[5] = zB._y * zB._y * QB + dB, IB[6] = zB._z * zB._y * QB - zB._x, IB[7] = 0, IB[8] = zB._x * zB._z * QB - zB._y, IB[9] = zB._y * zB._z * QB + zB._x, IB[10] = zB._z * zB._z * QB + dB, IB[11] = 0
        }
        return IB[12] = 0, IB[13] = 0, IB[14] = 0, IB[15] = 1, zB.markAsUpdated(), zB
      }
      static RotationYawPitchRoll(BB, jB, zB) {
        const QB = new mB;
        return mB.RotationYawPitchRollToRef(BB, jB, zB, QB), QB
      }
      static RotationYawPitchRollToRef(BB, jB, zB, QB) {
        return JB.RotationYawPitchRollToRef(BB, jB, zB, yB.Quaternion[0]), yB.Quaternion[0].toRotationMatrix(QB), QB
      }
      static Scaling(BB, jB, zB) {
        const QB = new mB;
        return mB.ScalingToRef(BB, jB, zB, QB), QB
      }
      static ScalingToRef(BB, jB, zB, QB) {
        return mB.FromValuesToRef(BB, 0, 0, 0, 0, jB, 0, 0, 0, 0, zB, 0, 0, 0, 0, 1, QB), QB._updateIdentityStatus(1 === BB && 1 === jB && 1 === zB), QB
      }
      static Translation(BB, jB, zB) {
        const QB = new mB;
        return mB.TranslationToRef(BB, jB, zB, QB), QB
      }
      static TranslationToRef(BB, jB, zB, QB) {
        return mB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, BB, jB, zB, 1, QB), QB._updateIdentityStatus(0 === BB && 0 === jB && 0 === zB), QB
      }
      static Lerp(BB, jB, zB) {
        const QB = new mB;
        return mB.LerpToRef(BB, jB, zB, QB), QB
      }
      static LerpToRef(BB, jB, zB, QB) {
        const nB = QB._m,
          dB = BB.m,
          IB = jB.m;
        for (let NB = 0; NB < 16; NB++) nB[NB] = dB[NB] * (1 - zB) + IB[NB] * zB;
        return QB.markAsUpdated(), QB
      }
      static DecomposeLerp(BB, jB, zB) {
        const QB = new mB;
        return mB.DecomposeLerpToRef(BB, jB, zB, QB), QB
      }
      static DecomposeLerpToRef(BB, jB, zB, QB) {
        const nB = yB.KJ[0],
          dB = yB.Quaternion[0],
          IB = yB.KJ[1];
        BB.decompose(nB, dB, IB);
        const NB = yB.KJ[2],
          uB = yB.Quaternion[1],
          UB = yB.KJ[3];
        jB.decompose(NB, uB, UB);
        const aB = yB.KJ[4];
        rB.LerpToRef(nB, NB, zB, aB);
        const pB = yB.Quaternion[2];
        JB.SlerpToRef(dB, uB, zB, pB);
        const sB = yB.KJ[5];
        return rB.LerpToRef(IB, UB, zB, sB), mB.ComposeToRef(aB, pB, sB, QB), QB
      }
      static LookAtLH(BB, jB, zB) {
        const QB = new mB;
        return mB.LookAtLHToRef(BB, jB, zB, QB), QB
      }
      static LookAtLHToRef(BB, jB, zB, QB) {
        const nB = yB.KJ[0],
          dB = yB.KJ[1],
          IB = yB.KJ[2];
        jB.subtractToRef(BB, IB), IB.normalize(), rB.CrossToRef(zB, IB, nB);
        const NB = nB.lengthSquared();
        0 === NB ? nB.x = 1 : nB.normalizeFromLength(Math.sqrt(NB)), rB.CrossToRef(IB, nB, dB), dB.normalize();
        const uB = -rB.Dot(nB, BB),
          UB = -rB.Dot(dB, BB),
          aB = -rB.Dot(IB, BB);
        return mB.FromValuesToRef(nB._x, dB._x, IB._x, 0, nB._y, dB._y, IB._y, 0, nB._z, dB._z, IB._z, 0, uB, UB, aB, 1, QB), QB
      }
      static LookAtRH(BB, jB, zB) {
        const QB = new mB;
        return mB.LookAtRHToRef(BB, jB, zB, QB), QB
      }
      static LookAtRHToRef(BB, jB, zB, QB) {
        const nB = yB.KJ[0],
          dB = yB.KJ[1],
          IB = yB.KJ[2];
        BB.subtractToRef(jB, IB), IB.normalize(), rB.CrossToRef(zB, IB, nB);
        const NB = nB.lengthSquared();
        0 === NB ? nB.x = 1 : nB.normalizeFromLength(Math.sqrt(NB)), rB.CrossToRef(IB, nB, dB), dB.normalize();
        const uB = -rB.Dot(nB, BB),
          UB = -rB.Dot(dB, BB),
          aB = -rB.Dot(IB, BB);
        return mB.FromValuesToRef(nB._x, dB._x, IB._x, 0, nB._y, dB._y, IB._y, 0, nB._z, dB._z, IB._z, 0, uB, UB, aB, 1, QB), QB
      }
      static LookDirectionLH(BB, jB) {
        const zB = new mB;
        return mB.LookDirectionLHToRef(BB, jB, zB), zB
      }
      static LookDirectionLHToRef(BB, jB, zB) {
        const QB = yB.KJ[0];
        QB.jH(BB), QB.scaleInPlace(-1);
        const nB = yB.KJ[1];
        return rB.CrossToRef(jB, QB, nB), mB.FromValuesToRef(nB._x, nB._y, nB._z, 0, jB._x, jB._y, jB._z, 0, QB._x, QB._y, QB._z, 0, 0, 0, 0, 1, zB), zB
      }
      static LookDirectionRH(BB, jB) {
        const zB = new mB;
        return mB.LookDirectionRHToRef(BB, jB, zB), zB
      }
      static LookDirectionRHToRef(BB, jB, zB) {
        const QB = yB.KJ[2];
        return rB.CrossToRef(jB, BB, QB), mB.FromValuesToRef(QB._x, QB._y, QB._z, 0, jB._x, jB._y, jB._z, 0, BB._x, BB._y, BB._z, 0, 0, 0, 0, 1, zB), zB
      }
      static OrthoLH(BB, jB, zB, QB, nB) {
        const dB = new mB;
        return mB.OrthoLHToRef(BB, jB, zB, QB, dB, nB), dB
      }
      static OrthoLHToRef(BB, jB, zB, QB, nB, dB) {
        const IB = 2 / BB,
          NB = 2 / jB,
          uB = 2 / (QB - zB),
          UB = -(QB + zB) / (QB - zB);
        return mB.FromValuesToRef(IB, 0, 0, 0, 0, NB, 0, 0, 0, 0, uB, 0, 0, 0, UB, 1, nB), dB && nB.multiplyToRef(GB, nB), nB._updateIdentityStatus(1 === IB && 1 === NB && 1 === uB && 0 === UB), nB
      }
      static OrthoOffCenterLH(BB, jB, zB, QB, nB, dB, IB) {
        const NB = new mB;
        return mB.OrthoOffCenterLHToRef(BB, jB, zB, QB, nB, dB, NB, IB), NB
      }
      static OrthoOffCenterLHToRef(BB, jB, zB, QB, nB, dB, IB, NB) {
        const uB = 2 / (jB - BB),
          UB = 2 / (QB - zB),
          aB = 2 / (dB - nB),
          pB = -(dB + nB) / (dB - nB),
          rB = (BB + jB) / (BB - jB),
          sB = (QB + zB) / (zB - QB);
        return mB.FromValuesToRef(uB, 0, 0, 0, 0, UB, 0, 0, 0, 0, aB, 0, rB, sB, pB, 1, IB), NB && IB.multiplyToRef(GB, IB), IB.markAsUpdated(), IB
      }
      static ObliqueOffCenterLHToRef(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
        const pB = -IB * Math.cos(NB),
          rB = -IB * Math.sin(NB);
        return mB.TranslationToRef(0, 0, -uB, yB.Matrix[1]), mB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pB, rB, 1, 0, 0, 0, 0, 1, yB.Matrix[0]), yB.Matrix[1].multiplyToRef(yB.Matrix[0], yB.Matrix[0]), mB.TranslationToRef(0, 0, uB, yB.Matrix[1]), yB.Matrix[0].multiplyToRef(yB.Matrix[1], yB.Matrix[0]), mB.OrthoOffCenterLHToRef(BB, jB, zB, QB, nB, dB, UB, aB), yB.Matrix[0].multiplyToRef(UB, UB), UB
      }
      static OrthoOffCenterRH(BB, jB, zB, QB, nB, dB, IB) {
        const NB = new mB;
        return mB.OrthoOffCenterRHToRef(BB, jB, zB, QB, nB, dB, NB, IB), NB
      }
      static OrthoOffCenterRHToRef(BB, jB, zB, QB, nB, dB, IB, NB) {
        return mB.OrthoOffCenterLHToRef(BB, jB, zB, QB, nB, dB, IB, NB), IB._m[10] *= -1, IB
      }
      static ObliqueOffCenterRHToRef(BB, jB, zB, QB, nB, dB, IB, NB, uB, UB, aB) {
        const pB = IB * Math.cos(NB),
          rB = IB * Math.sin(NB);
        return mB.TranslationToRef(0, 0, uB, yB.Matrix[1]), mB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pB, rB, 1, 0, 0, 0, 0, 1, yB.Matrix[0]), yB.Matrix[1].multiplyToRef(yB.Matrix[0], yB.Matrix[0]), mB.TranslationToRef(0, 0, -uB, yB.Matrix[1]), yB.Matrix[0].multiplyToRef(yB.Matrix[1], yB.Matrix[0]), mB.OrthoOffCenterRHToRef(BB, jB, zB, QB, nB, dB, UB, aB), yB.Matrix[0].multiplyToRef(UB, UB), UB
      }
      static PerspectiveLH(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const IB = new mB,
          NB = 2 * zB / BB,
          uB = 2 * zB / jB,
          UB = (QB + zB) / (QB - zB),
          aB = -2 * QB * zB / (QB - zB),
          pB = Math.tan(dB);
        return mB.FromValuesToRef(NB, 0, 0, 0, 0, uB, 0, pB, 0, 0, UB, 1, 0, 0, aB, 0, IB), nB && IB.multiplyToRef(GB, IB), IB._updateIdentityStatus(!1), IB
      }
      static PerspectiveFovLH(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const NB = new mB;
        return mB.PerspectiveFovLHToRef(BB, jB, zB, QB, NB, !0, nB, dB, IB), NB
      }
      static PerspectiveFovLHToRef(BB, jB, zB, QB, nB) {
        let dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          IB = arguments.length > 6 ? arguments[6] : void 0,
          NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          uB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const UB = zB,
          aB = QB,
          pB = 1 / Math.tan(.5 * BB),
          rB = dB ? pB / jB : pB,
          sB = dB ? pB : pB * jB,
          JB = uB && 0 === UB ? -1 : 0 !== aB ? (aB + UB) / (aB - UB) : 1,
          yB = uB && 0 === UB ? 2 * aB : 0 !== aB ? -2 * aB * UB / (aB - UB) : -2 * UB,
          kB = Math.tan(NB);
        return mB.FromValuesToRef(rB, 0, 0, 0, 0, sB, 0, kB, 0, 0, JB, 1, 0, 0, yB, 0, nB), IB && nB.multiplyToRef(GB, nB), nB._updateIdentityStatus(!1), nB
      }
      static PerspectiveFovReverseLHToRef(BB, jB, zB, QB, nB) {
        let dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          IB = arguments.length > 6 ? arguments[6] : void 0,
          NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const uB = 1 / Math.tan(.5 * BB),
          UB = dB ? uB / jB : uB,
          aB = dB ? uB : uB * jB,
          pB = Math.tan(NB);
        return mB.FromValuesToRef(UB, 0, 0, 0, 0, aB, 0, pB, 0, 0, -zB, 1, 0, 0, 1, 0, nB), IB && nB.multiplyToRef(GB, nB), nB._updateIdentityStatus(!1), nB
      }
      static PerspectiveFovRH(BB, jB, zB, QB, nB) {
        let dB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          IB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const NB = new mB;
        return mB.PerspectiveFovRHToRef(BB, jB, zB, QB, NB, !0, nB, dB, IB), NB
      }
      static PerspectiveFovRHToRef(BB, jB, zB, QB, nB) {
        let dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          IB = arguments.length > 6 ? arguments[6] : void 0,
          NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          uB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const UB = zB,
          aB = QB,
          pB = 1 / Math.tan(.5 * BB),
          rB = dB ? pB / jB : pB,
          sB = dB ? pB : pB * jB,
          JB = uB && 0 === UB ? 1 : 0 !== aB ? -(aB + UB) / (aB - UB) : -1,
          yB = uB && 0 === UB ? 2 * aB : 0 !== aB ? -2 * aB * UB / (aB - UB) : -2 * UB,
          kB = Math.tan(NB);
        return mB.FromValuesToRef(rB, 0, 0, 0, 0, sB, 0, kB, 0, 0, JB, -1, 0, 0, yB, 0, nB), IB && nB.multiplyToRef(GB, nB), nB._updateIdentityStatus(!1), nB
      }
      static PerspectiveFovReverseRHToRef(BB, jB, zB, QB, nB) {
        let dB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          IB = arguments.length > 6 ? arguments[6] : void 0,
          NB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const uB = 1 / Math.tan(.5 * BB),
          UB = dB ? uB / jB : uB,
          aB = dB ? uB : uB * jB,
          pB = Math.tan(NB);
        return mB.FromValuesToRef(UB, 0, 0, 0, 0, aB, 0, pB, 0, 0, -zB, -1, 0, 0, -1, 0, nB), IB && nB.multiplyToRef(GB, nB), nB._updateIdentityStatus(!1), nB
      }
      static GetFinalMatrix(BB, jB, zB, QB, nB, dB) {
        const IB = BB.width,
          NB = BB.height,
          uB = BB.x,
          UB = BB.y,
          aB = mB.FromValues(IB / 2, 0, 0, 0, 0, -NB / 2, 0, 0, 0, 0, dB - nB, 0, uB + IB / 2, NB / 2 + UB, nB, 1),
          pB = new mB;
        return jB.multiplyToRef(zB, pB), pB.multiplyToRef(QB, pB), pB.multiplyToRef(aB, pB)
      }
      static GetAsMatrix2x2(BB) {
        const jB = BB.m,
          zB = [jB[0], jB[1], jB[4], jB[5]];
        return dB.b.MatrixUse64Bits ? zB : new Float32Array(zB)
      }
      static GetAsMatrix3x3(BB) {
        const jB = BB.m,
          zB = [jB[0], jB[1], jB[2], jB[4], jB[5], jB[6], jB[8], jB[9], jB[10]];
        return dB.b.MatrixUse64Bits ? zB : new Float32Array(zB)
      }
      static Transpose(BB) {
        const jB = new mB;
        return mB.TransposeToRef(BB, jB), jB
      }
      static TransposeToRef(BB, jB) {
        const zB = BB.m,
          QB = zB[0],
          nB = zB[4],
          dB = zB[8],
          IB = zB[12],
          NB = zB[1],
          uB = zB[5],
          UB = zB[9],
          aB = zB[13],
          pB = zB[2],
          rB = zB[6],
          sB = zB[10],
          JB = zB[14],
          mB = zB[3],
          yB = zB[7],
          kB = zB[11],
          GB = zB[15],
          LB = jB._m;
        return LB[0] = QB, LB[1] = nB, LB[2] = dB, LB[3] = IB, LB[4] = NB, LB[5] = uB, LB[6] = UB, LB[7] = aB, LB[8] = pB, LB[9] = rB, LB[10] = sB, LB[11] = JB, LB[12] = mB, LB[13] = yB, LB[14] = kB, LB[15] = GB, jB.markAsUpdated(), jB._updateIdentityStatus(BB._isIdentity, BB._isIdentityDirty), jB
      }
      static Reflection(BB) {
        const jB = new mB;
        return mB.ReflectionToRef(BB, jB), jB
      }
      static ReflectionToRef(BB, jB) {
        BB.normalize();
        const zB = BB.normal.x,
          QB = BB.normal.y,
          nB = BB.normal.z,
          dB = -2 * zB,
          IB = -2 * QB,
          NB = -2 * nB;
        return mB.FromValuesToRef(dB * zB + 1, IB * zB, NB * zB, 0, dB * QB, IB * QB + 1, NB * QB, 0, dB * nB, IB * nB, NB * nB + 1, 0, dB * BB.d, IB * BB.d, NB * BB.d, 1, jB), jB
      }
      static FromXYZAxesToRef(BB, jB, zB, QB) {
        return mB.FromValuesToRef(BB._x, BB._y, BB._z, 0, jB._x, jB._y, jB._z, 0, zB._x, zB._y, zB._z, 0, 0, 0, 0, 1, QB), QB
      }
      static FromQuaternionToRef(BB, jB) {
        const zB = BB._x * BB._x,
          QB = BB._y * BB._y,
          nB = BB._z * BB._z,
          dB = BB._x * BB._y,
          IB = BB._z * BB._w,
          NB = BB._z * BB._x,
          uB = BB._y * BB._w,
          UB = BB._y * BB._z,
          aB = BB._x * BB._w;
        return jB._m[0] = 1 - 2 * (QB + nB), jB._m[1] = 2 * (dB + IB), jB._m[2] = 2 * (NB - uB), jB._m[3] = 0, jB._m[4] = 2 * (dB - IB), jB._m[5] = 1 - 2 * (nB + zB), jB._m[6] = 2 * (UB + aB), jB._m[7] = 0, jB._m[8] = 2 * (NB + uB), jB._m[9] = 2 * (UB - aB), jB._m[10] = 1 - 2 * (QB + zB), jB._m[11] = 0, jB._m[12] = 0, jB._m[13] = 0, jB._m[14] = 0, jB._m[15] = 1, jB.markAsUpdated(), jB
      }
    }
    mB._IdentityReadOnly = mB.Identity();
    class yB {}
    yB.KJ = (0, nB.g)(11, rB.Zero), yB.Matrix = (0, nB.g)(2, mB.Identity), yB.Quaternion = (0, nB.g)(3, JB.Zero);
    class kB {}
    kB.Vector2 = (0, nB.g)(3, pB.Zero), kB.KJ = (0, nB.g)(13, rB.Zero), kB.Vector4 = (0, nB.g)(3, sB.Zero), kB.Quaternion = (0, nB.g)(3, JB.Zero), kB.Matrix = (0, nB.g)(8, mB.Identity);
    const GB = mB.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let LB = !1;

    function gB() {
      LB || (LB = !0, Object.defineProperties(pB.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(rB.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(sB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(JB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(mB.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, UB.d)("BABYLON.Vector2", pB), (0, UB.d)("BABYLON.Vector3", rB), (0, UB.d)("BABYLON.Vector4", sB), (0, UB.d)("BABYLON.Matrix", mB))
    }
  },
  37202: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    const QB = "undefined" !== typeof WeakRef;
    class nB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(BB, jB, zB, QB)
      }
      initialize(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = BB, this.skipNextObservers = jB, this.target = zB, this.currentTarget = QB, this
      }
    }
    class dB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = BB, this.mask = jB, this.scope = zB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(BB)
      }
    }
    class IB {
      static FromPromise(BB, jB) {
        const zB = new IB;
        return BB.then((BB => {
          zB.notifyObservers(BB)
        })).catch((BB => {
          if (!jB) throw BB;
          jB.notifyObservers(BB)
        })), zB
      }
      get observers() {
        return this._observers
      }
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = jB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new nB(0), BB && (this._onObserverAdded = BB)
      }
      add(BB) {
        let jB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          zB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!BB) return null;
        const nB = new dB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        nB.unregisterOnNextCall = zB, jB ? this._observers.unshift(nB) : this._observers.push(nB), this._onObserverAdded && this._onObserverAdded(nB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(nB, this._lastNotifiedValue);
        const IB = QB ? new WeakRef(this) : {
          deref: () => this
        };
        return nB._remove = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const jB = IB.deref();
          jB && (BB ? jB.remove(nB) : jB._remove(nB))
        }, nB
      }
      addOnce(BB) {
        return this.add(BB, void 0, void 0, void 0, !0)
      }
      remove(BB) {
        if (!BB) return !1;
        BB._remove = null;
        return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
      }
      removeCallback(BB, jB) {
        for (let zB = 0; zB < this._observers.length; zB++) {
          const QB = this._observers[zB];
          if (!QB._willBeUnregistered && (QB.callback === BB && (!jB || jB === QB.scope))) return this._deferUnregister(QB), !0
        }
        return !1
      }
      _deferUnregister(BB) {
        BB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, BB.unregisterOnNextCall = !1, BB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(BB)
        }), 0))
      }
      _remove(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB) return !1;
        const zB = this._observers.indexOf(BB);
        return -1 !== zB && (jB && this._numObserversMarkedAsDeleted--, this._observers.splice(zB, 1), !0)
      }
      makeObserverTopPriority(BB) {
        this._remove(BB, !1), this._observers.unshift(BB)
      }
      makeObserverBottomPriority(BB) {
        this._remove(BB, !1), this._observers.push(BB)
      }
      notifyObservers(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BB), !this._observers.length) return !0;
        const dB = this._eventState;
        dB.mask = jB, dB.target = zB, dB.currentTarget = QB, dB.skipNextObservers = !1, dB.lastReturnValue = BB, dB.userInfo = nB;
        for (const IB of this._observers)
          if (!IB._willBeUnregistered && (IB.mask & jB && (IB.unregisterOnNextCall && this._deferUnregister(IB), IB.scope ? dB.lastReturnValue = IB.callback.apply(IB.scope, [BB, dB]) : dB.lastReturnValue = IB.callback(BB, dB)), dB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = jB), BB._willBeUnregistered) return;
        const QB = this._eventState;
        QB.mask = zB, QB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(jB, QB)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const BB = this._observers.pop();
          BB && (BB._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const BB = new IB;
        return BB._observers = this._observers.slice(0), BB
      }
      hasSpecificMask() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const jB of this._observers)
          if (jB.mask & BB || jB.mask === BB) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);