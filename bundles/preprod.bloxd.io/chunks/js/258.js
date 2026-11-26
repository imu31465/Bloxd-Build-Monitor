export const id = 258;
export const ids = [258];
export const modules = {
  37796: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(37802);
    class DB {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    DB.Instances = [], DB.OnEnginesDisposedObservable = new YB.b, DB._LastCreatedScene = null, DB.UseFallbackTexture = !0, DB.FallbackTexture = ""
  },
  37793: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      static SetMatrixPrecision(BB) {
        if (YB.MatrixTrackPrecisionChange = !1, BB && !YB.MatrixUse64Bits && YB.MatrixTrackedMatrices)
          for (let OB = 0; OB < YB.MatrixTrackedMatrices.length; ++OB) {
            const BB = YB.MatrixTrackedMatrices[OB],
              GB = BB._m;
            BB._m = new Array(16);
            for (let OB = 0; OB < 16; ++OB) BB._m[OB] = GB[OB]
          }
        YB.MatrixUse64Bits = BB, YB.MatrixCurrentType = YB.MatrixUse64Bits ? Array : Float32Array, YB.MatrixTrackedMatrices = null
      }
    }
    YB.MatrixUse64Bits = !1, YB.MatrixTrackPrecisionChange = !0, YB.MatrixCurrentType = Float32Array, YB.MatrixTrackedMatrices = []
  },
  37816: (BB, OB, GB) => {
    GB.d(OB, {
      e: () => jB,
      i: () => JB,
      m: () => yB,
      o: () => YB,
      s: () => QB,
      t: () => oB
    });
    class YB {}

    function DB(BB) {
      BB.updateFlag = YB._UpdateFlagSeed++
    }

    function QB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const DB = BB.dDB(),
        QB = OB.dDB(),
        oB = DB[0],
        jB = DB[1],
        yB = DB[2],
        JB = DB[3],
        MB = DB[4],
        PB = DB[5],
        zB = DB[6],
        lB = DB[7],
        pB = DB[8],
        qB = DB[9],
        ZB = DB[10],
        NB = DB[11],
        RB = DB[12],
        WB = DB[13],
        AB = DB[14],
        VB = DB[15],
        SB = QB[0],
        nB = QB[1],
        UB = QB[2],
        fB = QB[3],
        kB = QB[4],
        dB = QB[5],
        KB = QB[6],
        uB = QB[7],
        mB = QB[8],
        IB = QB[9],
        FB = QB[10],
        iB = QB[11],
        LB = QB[12],
        gB = QB[13],
        rB = QB[14],
        XB = QB[15];
      GB[YB] = oB * SB + jB * kB + yB * mB + JB * LB, GB[YB + 1] = oB * nB + jB * dB + yB * IB + JB * gB, GB[YB + 2] = oB * UB + jB * KB + yB * FB + JB * rB, GB[YB + 3] = oB * fB + jB * uB + yB * iB + JB * XB, GB[YB + 4] = MB * SB + PB * kB + zB * mB + lB * LB, GB[YB + 5] = MB * nB + PB * dB + zB * IB + lB * gB, GB[YB + 6] = MB * UB + PB * KB + zB * FB + lB * rB, GB[YB + 7] = MB * fB + PB * uB + zB * iB + lB * XB, GB[YB + 8] = pB * SB + qB * kB + ZB * mB + NB * LB, GB[YB + 9] = pB * nB + qB * dB + ZB * IB + NB * gB, GB[YB + 10] = pB * UB + qB * KB + ZB * FB + NB * rB, GB[YB + 11] = pB * fB + qB * uB + ZB * iB + NB * XB, GB[YB + 12] = RB * SB + WB * kB + AB * mB + VB * LB, GB[YB + 13] = RB * nB + WB * dB + AB * IB + VB * gB, GB[YB + 14] = RB * UB + WB * KB + AB * FB + VB * rB, GB[YB + 15] = RB * fB + WB * uB + AB * iB + VB * XB
    }

    function oB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      QB(BB, OB, GB.dDB(), YB), DB(GB)
    }

    function jB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const YB = BB.dDB();
      OB[GB] = YB[0], OB[GB + 1] = YB[1], OB[GB + 2] = YB[2], OB[GB + 3] = YB[3], OB[GB + 4] = YB[4], OB[GB + 5] = YB[5], OB[GB + 6] = YB[6], OB[GB + 7] = YB[7], OB[GB + 8] = YB[8], OB[GB + 9] = YB[9], OB[GB + 10] = YB[10], OB[GB + 11] = YB[11], OB[GB + 12] = YB[12], OB[GB + 13] = YB[13], OB[GB + 14] = YB[14], OB[GB + 15] = YB[15]
    }

    function yB(BB, OB) {
      const GB = JB(BB, OB.dDB());
      return GB && DB(OB), GB
    }

    function JB(BB, OB) {
      const GB = BB.dDB(),
        YB = GB[0],
        DB = GB[1],
        QB = GB[2],
        oB = GB[3],
        jB = GB[4],
        yB = GB[5],
        JB = GB[6],
        MB = GB[7],
        PB = GB[8],
        zB = GB[9],
        lB = GB[10],
        pB = GB[11],
        qB = GB[12],
        ZB = GB[13],
        NB = GB[14],
        RB = GB[15],
        WB = lB * RB - NB * pB,
        AB = zB * RB - ZB * pB,
        VB = zB * NB - ZB * lB,
        SB = PB * RB - qB * pB,
        nB = PB * NB - lB * qB,
        UB = PB * ZB - qB * zB,
        fB = +(yB * WB - JB * AB + MB * VB),
        kB = -(jB * WB - JB * SB + MB * nB),
        dB = +(jB * AB - yB * SB + MB * UB),
        KB = -(jB * VB - yB * nB + JB * UB),
        uB = YB * fB + DB * kB + QB * dB + oB * KB;
      if (0 === uB) return !1;
      const mB = 1 / uB,
        IB = JB * RB - NB * MB,
        FB = yB * RB - ZB * MB,
        iB = yB * NB - ZB * JB,
        LB = jB * RB - qB * MB,
        gB = jB * NB - qB * JB,
        rB = jB * ZB - qB * yB,
        XB = JB * pB - lB * MB,
        wB = yB * pB - zB * MB,
        EB = yB * lB - zB * JB,
        cB = jB * pB - PB * MB,
        hB = jB * lB - PB * JB,
        aB = jB * zB - PB * yB,
        eB = -(DB * WB - QB * AB + oB * VB),
        TB = +(YB * WB - QB * SB + oB * nB),
        bB = -(YB * AB - DB * SB + oB * UB),
        CB = +(YB * VB - DB * nB + QB * UB),
        HB = +(DB * IB - QB * FB + oB * iB),
        vB = -(YB * IB - QB * LB + oB * gB),
        sB = +(YB * FB - DB * LB + oB * rB),
        xB = -(YB * iB - DB * gB + QB * rB),
        tB = -(DB * XB - QB * wB + oB * EB),
        BO = +(YB * XB - QB * cB + oB * hB),
        OO = -(YB * wB - DB * cB + oB * aB),
        GO = +(YB * EB - DB * hB + QB * aB);
      return OB[0] = fB * mB, OB[1] = eB * mB, OB[2] = HB * mB, OB[3] = tB * mB, OB[4] = kB * mB, OB[5] = TB * mB, OB[6] = vB * mB, OB[7] = BO * mB, OB[8] = dB * mB, OB[9] = bB * mB, OB[10] = sB * mB, OB[11] = OO * mB, OB[12] = KB * mB, OB[13] = CB * mB, OB[14] = xB * mB, OB[15] = GO * mB, !0
    }
    YB._UpdateFlagSeed = 0
  },
  37778: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => qB,
      f: () => pB,
      j: () => AB,
      k: () => NB,
      o: () => PB,
      r: () => zB,
      t: () => lB
    });
    var YB = GB(37782),
      DB = GB(37785),
      QB = GB(37793),
      oB = GB(37796),
      jB = GB(37807),
      yB = GB(37816),
      JB = GB(37823);
    const MB = BB => parseInt(BB.toString().replace(/\W/g, ""));
    class PB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = BB, this.y = OB
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let BB = MB(this.x);
        return BB = 397 * BB ^ MB(this.y), BB
      }
      toArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[OB] = this.x, BB[OB + 1] = this.y, this
      }
      OP(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return PB.FromArrayToRef(BB, OB, this), this
      }
      dDB() {
        return [this.x, this.y]
      }
      IU(BB) {
        return this.x = BB.x, this.y = BB.y, this
      }
      zOB(BB, OB) {
        return this.x = BB, this.y = OB, this
      }
      set(BB, OB) {
        return this.zOB(BB, OB)
      }
      uBB(BB) {
        return this.zOB(BB, BB)
      }
      add(BB) {
        return new PB(this.x + BB.x, this.y + BB.y)
      }
      addToRef(BB, OB) {
        return OB.x = this.x + BB.x, OB.y = this.y + BB.y, OB
      }
      addInPlace(BB) {
        return this.x += BB.x, this.y += BB.y, this
      }
      addInPlaceFromFloats(BB, OB) {
        return this.x += BB, this.y += OB, this
      }
      addVector3(BB) {
        return new PB(this.x + BB.x, this.y + BB.y)
      }
      subtract(BB) {
        return new PB(this.x - BB.x, this.y - BB.y)
      }
      subtractToRef(BB, OB) {
        return OB.x = this.x - BB.x, OB.y = this.y - BB.y, OB
      }
      CDB(BB) {
        return this.x -= BB.x, this.y -= BB.y, this
      }
      multiplyInPlace(BB) {
        return this.x *= BB.x, this.y *= BB.y, this
      }
      multiply(BB) {
        return new PB(this.x * BB.x, this.y * BB.y)
      }
      multiplyToRef(BB, OB) {
        return OB.x = this.x * BB.x, OB.y = this.y * BB.y, OB
      }
      multiplyByFloats(BB, OB) {
        return new PB(this.x * BB, this.y * OB)
      }
      divide(BB) {
        return new PB(this.x / BB.x, this.y / BB.y)
      }
      divideToRef(BB, OB) {
        return OB.x = this.x / BB.x, OB.y = this.y / BB.y, OB
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
      minimizeInPlaceFromFloats(BB, OB) {
        return this.x = Math.min(BB, this.x), this.y = Math.min(OB, this.y), this
      }
      maximizeInPlaceFromFloats(BB, OB) {
        return this.x = Math.max(BB, this.x), this.y = Math.max(OB, this.y), this
      }
      subtractFromFloats(BB, OB) {
        return new PB(this.x - BB, this.y - OB)
      }
      subtractFromFloatsToRef(BB, OB, GB) {
        return GB.x = this.x - BB, GB.y = this.y - OB, GB
      }
      ep() {
        return new PB(-this.x, -this.y)
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
        return new PB(this.x * BB, this.y * BB)
      }
      scaleToRef(BB, OB) {
        return OB.x = this.x * BB, OB.y = this.y * BB, OB
      }
      scaleAndAddToRef(BB, OB) {
        return OB.x += this.x * BB, OB.y += this.y * BB, OB
      }
      equals(BB) {
        return BB && this.x === BB.x && this.y === BB.y
      }
      equalsWithEpsilon(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB.b;
        return BB && (0, jB.WithinEpsilon)(this.x, BB.x, OB) && (0, jB.WithinEpsilon)(this.y, BB.y, OB)
      }
      QyB(BB, OB) {
        return this.x === BB && this.y === OB
      }
      floor() {
        return new PB(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(BB) {
        return BB.x = Math.floor(this.x), BB.y = Math.floor(this.y), BB
      }
      fract() {
        return new PB(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(BB) {
        return BB.x = this.x - Math.floor(this.x), BB.y = this.y - Math.floor(this.y), BB
      }
      rotate(BB) {
        return this.rotateToRef(BB, new PB)
      }
      rotateToRef(BB, OB) {
        const GB = Math.cos(BB),
          YB = Math.sin(BB);
        return OB.x = GB * this.x - YB * this.y, OB.y = YB * this.x + GB * this.y, OB
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
        const BB = new PB;
        return this.normalizeToRef(BB), BB
      }
      normalizeToRef(BB) {
        const OB = this.length();
        return 0 === OB || 1 === OB ? (BB.x = this.x, BB.y = this.y, BB) : this.scaleToRef(1 / OB, BB)
      }
      clone() {
        return new PB(this.x, this.y)
      }
      dot(BB) {
        return this.x * BB.x + this.y * BB.y
      }
      static Zero() {
        return new PB(0, 0)
      }
      static One() {
        return new PB(1, 1)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new PB((0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).zOB((0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB))
      }
      static get ZeroReadOnly() {
        return PB._ZeroReadOnly
      }
      static FromArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new PB(BB[OB], BB[OB + 1])
      }
      static FromArrayToRef(BB, OB, GB) {
        return GB.x = BB[OB], GB.y = BB[OB + 1], GB
      }
      static FromFloatsToRef(BB, OB, GB) {
        return GB.zOB(BB, OB), GB
      }
      static CatmullRom(BB, OB, GB, YB, DB) {
        const QB = DB * DB,
          oB = DB * QB,
          jB = .5 * (2 * OB.x + (-BB.x + GB.x) * DB + (2 * BB.x - 5 * OB.x + 4 * GB.x - YB.x) * QB + (-BB.x + 3 * OB.x - 3 * GB.x + YB.x) * oB),
          yB = .5 * (2 * OB.y + (-BB.y + GB.y) * DB + (2 * BB.y - 5 * OB.y + 4 * GB.y - YB.y) * QB + (-BB.y + 3 * OB.y - 3 * GB.y + YB.y) * oB);
        return new PB(jB, yB)
      }
      static ClampToRef(BB, OB, GB, YB) {
        return YB.x = (0, jB.Clamp)(BB.x, OB.x, GB.x), YB.y = (0, jB.Clamp)(BB.y, OB.y, GB.y), YB
      }
      static Clamp(BB, OB, GB) {
        const YB = (0, jB.Clamp)(BB.x, OB.x, GB.x),
          DB = (0, jB.Clamp)(BB.y, OB.y, GB.y);
        return new PB(YB, DB)
      }
      static Hermite(BB, OB, GB, YB, DB) {
        const QB = DB * DB,
          oB = DB * QB,
          jB = 2 * oB - 3 * QB + 1,
          yB = -2 * oB + 3 * QB,
          JB = oB - 2 * QB + DB,
          MB = oB - QB,
          zB = BB.x * jB + GB.x * yB + OB.x * JB + YB.x * MB,
          lB = BB.y * jB + GB.y * yB + OB.y * JB + YB.y * MB;
        return new PB(zB, lB)
      }
      static Hermite1stDerivative(BB, OB, GB, YB, DB) {
        return this.Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, new PB)
      }
      static Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB) {
        const oB = DB * DB;
        return QB.x = 6 * (oB - DB) * BB.x + (3 * oB - 4 * DB + 1) * OB.x + 6 * (-oB + DB) * GB.x + (3 * oB - 2 * DB) * YB.x, QB.y = 6 * (oB - DB) * BB.y + (3 * oB - 4 * DB + 1) * OB.y + 6 * (-oB + DB) * GB.y + (3 * oB - 2 * DB) * YB.y, QB
      }
      static Lerp(BB, OB, GB) {
        return PB.LerpToRef(BB, OB, GB, new PB)
      }
      static LerpToRef(BB, OB, GB, YB) {
        return YB.x = BB.x + (OB.x - BB.x) * GB, YB.y = BB.y + (OB.y - BB.y) * GB, YB
      }
      static Dot(BB, OB) {
        return BB.x * OB.x + BB.y * OB.y
      }
      static Normalize(BB) {
        return PB.NormalizeToRef(BB, new PB)
      }
      static NormalizeToRef(BB, OB) {
        return BB.normalizeToRef(OB), OB
      }
      static Minimize(BB, OB) {
        const GB = BB.x < OB.x ? BB.x : OB.x,
          YB = BB.y < OB.y ? BB.y : OB.y;
        return new PB(GB, YB)
      }
      static Maximize(BB, OB) {
        const GB = BB.x > OB.x ? BB.x : OB.x,
          YB = BB.y > OB.y ? BB.y : OB.y;
        return new PB(GB, YB)
      }
      static Transform(BB, OB) {
        return PB.TransformToRef(BB, OB, new PB)
      }
      static TransformToRef(BB, OB, GB) {
        const YB = OB.m,
          DB = BB.x * YB[0] + BB.y * YB[4] + YB[12],
          QB = BB.x * YB[1] + BB.y * YB[5] + YB[13];
        return GB.x = DB, GB.y = QB, GB
      }
      static PointInTriangle(BB, OB, GB, YB) {
        const DB = .5 * (-GB.y * YB.x + OB.y * (-GB.x + YB.x) + OB.x * (GB.y - YB.y) + GB.x * YB.y),
          QB = DB < 0 ? -1 : 1,
          oB = (OB.y * YB.x - OB.x * YB.y + (YB.y - OB.y) * BB.x + (OB.x - YB.x) * BB.y) * QB,
          jB = (OB.x * GB.y - OB.y * GB.x + (OB.y - GB.y) * BB.x + (GB.x - OB.x) * BB.y) * QB;
        return oB > 0 && jB > 0 && oB + jB < 2 * DB * QB
      }
      static Distance(BB, OB) {
        return Math.sqrt(PB.DistanceSquared(BB, OB))
      }
      static DistanceSquared(BB, OB) {
        const GB = BB.x - OB.x,
          YB = BB.y - OB.y;
        return GB * GB + YB * YB
      }
      static Center(BB, OB) {
        return PB.CenterToRef(BB, OB, new PB)
      }
      static CenterToRef(BB, OB, GB) {
        return GB.zOB((BB.x + OB.x) / 2, (BB.y + OB.y) / 2)
      }
      static DistanceOfPointFromSegment(BB, OB, GB) {
        const YB = PB.DistanceSquared(OB, GB);
        if (0 === YB) return PB.Distance(BB, OB);
        const DB = GB.subtract(OB),
          QB = Math.max(0, Math.min(1, PB.Dot(BB.subtract(OB), DB) / YB)),
          oB = OB.add(DB.multiplyByFloats(QB, QB));
        return PB.Distance(BB, oB)
      }
    }
    PB._V8PerformanceHack = new PB(.5, .5), PB._ZeroReadOnly = PB.Zero();
    class zB {
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
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = BB, this._y = OB, this._z = GB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Xp"
      }
      getHashCode() {
        let BB = MB(this._x);
        return BB = 397 * BB ^ MB(this._y), BB = 397 * BB ^ MB(this._z), BB
      }
      dDB() {
        return [this._x, this._y, this._z]
      }
      toArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[OB] = this._x, BB[OB + 1] = this._y, BB[OB + 2] = this._z, this
      }
      OP(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zB.FromArrayToRef(BB, OB, this), this
      }
      toQuaternion() {
        return pB.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(BB) {
        return this._x += BB._x, this._y += BB._y, this._z += BB._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(BB, OB, GB) {
        return this._x += BB, this._y += OB, this._z += GB, this._isDirty = !0, this
      }
      add(BB) {
        return new zB(this._x + BB._x, this._y + BB._y, this._z + BB._z)
      }
      addToRef(BB, OB) {
        return OB._x = this._x + BB._x, OB._y = this._y + BB._y, OB._z = this._z + BB._z, OB._isDirty = !0, OB
      }
      CDB(BB) {
        return this._x -= BB._x, this._y -= BB._y, this._z -= BB._z, this._isDirty = !0, this
      }
      subtract(BB) {
        return new zB(this._x - BB._x, this._y - BB._y, this._z - BB._z)
      }
      subtractToRef(BB, OB) {
        return this.subtractFromFloatsToRef(BB._x, BB._y, BB._z, OB)
      }
      subtractFromFloats(BB, OB, GB) {
        return new zB(this._x - BB, this._y - OB, this._z - GB)
      }
      subtractFromFloatsToRef(BB, OB, GB, YB) {
        return YB._x = this._x - BB, YB._y = this._y - OB, YB._z = this._z - GB, YB._isDirty = !0, YB
      }
      ep() {
        return new zB(-this._x, -this._y, -this._z)
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
        return new zB(this._x * BB, this._y * BB, this._z * BB)
      }
      scaleToRef(BB, OB) {
        return OB._x = this._x * BB, OB._y = this._y * BB, OB._z = this._z * BB, OB._isDirty = !0, OB
      }
      getNormalToRef(BB) {
        const OB = this.length();
        let GB = Math.acos(this._y / OB);
        const YB = Math.atan2(this._z, this._x);
        GB > Math.PI / 2 ? GB -= Math.PI / 2 : GB += Math.PI / 2;
        const DB = OB * Math.sin(GB) * Math.cos(YB),
          QB = OB * Math.cos(GB),
          oB = OB * Math.sin(GB) * Math.sin(YB);
        return BB.set(DB, QB, oB), BB
      }
      applyRotationQuaternionToRef(BB, OB) {
        const GB = this._x,
          YB = this._y,
          DB = this._z,
          QB = BB._x,
          oB = BB._y,
          jB = BB._z,
          yB = BB._w,
          JB = 2 * (oB * DB - jB * YB),
          MB = 2 * (jB * GB - QB * DB),
          PB = 2 * (QB * YB - oB * GB);
        return OB._x = GB + yB * JB + oB * PB - jB * MB, OB._y = YB + yB * MB + jB * JB - QB * PB, OB._z = DB + yB * PB + QB * MB - oB * JB, OB._isDirty = !0, OB
      }
      applyRotationQuaternionInPlace(BB) {
        return this.applyRotationQuaternionToRef(BB, this)
      }
      applyRotationQuaternion(BB) {
        return this.applyRotationQuaternionToRef(BB, new zB)
      }
      scaleAndAddToRef(BB, OB) {
        return OB._x += this._x * BB, OB._y += this._y * BB, OB._z += this._z * BB, OB._isDirty = !0, OB
      }
      projectOnPlane(BB, OB) {
        return this.projectOnPlaneToRef(BB, OB, new zB)
      }
      projectOnPlaneToRef(BB, OB, GB) {
        const YB = BB.normal,
          DB = BB.d,
          QB = ZB.Xp[0];
        this.subtractToRef(OB, QB), QB.normalize();
        const oB = zB.Dot(QB, YB);
        if (Math.abs(oB) < 1e-10) GB.uBB(1 / 0);
        else {
          const BB = -(zB.Dot(OB, YB) + DB) / oB,
            jB = QB.scaleInPlace(BB);
          OB.addToRef(jB, GB)
        }
        return GB
      }
      equals(BB) {
        return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z
      }
      equalsWithEpsilon(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB.b;
        return BB && (0, jB.WithinEpsilon)(this._x, BB._x, OB) && (0, jB.WithinEpsilon)(this._y, BB._y, OB) && (0, jB.WithinEpsilon)(this._z, BB._z, OB)
      }
      QyB(BB, OB, GB) {
        return this._x === BB && this._y === OB && this._z === GB
      }
      multiplyInPlace(BB) {
        return this._x *= BB._x, this._y *= BB._y, this._z *= BB._z, this._isDirty = !0, this
      }
      multiply(BB) {
        return this.multiplyByFloats(BB._x, BB._y, BB._z)
      }
      multiplyToRef(BB, OB) {
        return OB._x = this._x * BB._x, OB._y = this._y * BB._y, OB._z = this._z * BB._z, OB._isDirty = !0, OB
      }
      multiplyByFloats(BB, OB, GB) {
        return new zB(this._x * BB, this._y * OB, this._z * GB)
      }
      divide(BB) {
        return new zB(this._x / BB._x, this._y / BB._y, this._z / BB._z)
      }
      divideToRef(BB, OB) {
        return OB._x = this._x / BB._x, OB._y = this._y / BB._y, OB._z = this._z / BB._z, OB._isDirty = !0, OB
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
      minimizeInPlaceFromFloats(BB, OB, GB) {
        return BB < this._x && (this.x = BB), OB < this._y && (this.y = OB), GB < this._z && (this.z = GB), this
      }
      maximizeInPlaceFromFloats(BB, OB, GB) {
        return BB > this._x && (this.x = BB), OB > this._y && (this.y = OB), GB > this._z && (this.z = GB), this
      }
      isNonUniformWithinEpsilon(BB) {
        const OB = Math.abs(this._x),
          GB = Math.abs(this._y);
        if (!(0, jB.WithinEpsilon)(OB, GB, BB)) return !0;
        const YB = Math.abs(this._z);
        return !(0, jB.WithinEpsilon)(OB, YB, BB) || !(0, jB.WithinEpsilon)(GB, YB, BB)
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
        return new zB(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(BB) {
        return BB._x = this._x - Math.floor(this._x), BB._y = this._y - Math.floor(this._y), BB._z = this._z - Math.floor(this._z), BB._isDirty = !0, BB
      }
      fract() {
        return new zB(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const OB = ZB.Xp[0].IU(this);
        return this.x = OB[BB[0]], this.y = OB[BB[1]], this.z = OB[BB[2]], this
      }
      rotateByQuaternionToRef(BB, OB) {
        return BB.toRotationMatrix(ZB.Matrix[0]), zB.TransformCoordinatesToRef(this, ZB.Matrix[0], OB), OB
      }
      rotateByQuaternionAroundPointToRef(BB, OB, GB) {
        return this.subtractToRef(OB, ZB.Xp[0]), ZB.Xp[0].rotateByQuaternionToRef(BB, ZB.Xp[0]), OB.addToRef(ZB.Xp[0], GB), GB
      }
      cross(BB) {
        return zB.CrossToRef(this, BB, new zB)
      }
      normalizeFromLength(BB) {
        return 0 === BB || 1 === BB ? this : this.scaleInPlace(1 / BB)
      }
      normalizeToNew() {
        return this.normalizeToRef(new zB)
      }
      normalizeToRef(BB) {
        const OB = this.length();
        return 0 === OB || 1 === OB ? (BB._x = this._x, BB._y = this._y, BB._z = this._z, BB._isDirty = !0, BB) : this.scaleToRef(1 / OB, BB)
      }
      clone() {
        return new zB(this._x, this._y, this._z)
      }
      IU(BB) {
        return this.zOB(BB._x, BB._y, BB._z)
      }
      zOB(BB, OB, GB) {
        return this._x = BB, this._y = OB, this._z = GB, this._isDirty = !0, this
      }
      set(BB, OB, GB) {
        return this.zOB(BB, OB, GB)
      }
      uBB(BB) {
        return this._x = this._y = this._z = BB, this._isDirty = !0, this
      }
      static GetClipFactor(BB, OB, GB, YB) {
        const DB = zB.Dot(BB, GB);
        return (DB - YB) / (DB - zB.Dot(OB, GB))
      }
      static GetAngleBetweenVectors(BB, OB, GB) {
        const YB = BB.normalizeToRef(ZB.Xp[1]),
          DB = OB.normalizeToRef(ZB.Xp[2]);
        let QB = zB.Dot(YB, DB);
        QB = (0, jB.Clamp)(QB, -1, 1);
        const oB = Math.acos(QB),
          yB = ZB.Xp[3];
        return zB.CrossToRef(YB, DB, yB), zB.Dot(yB, GB) > 0 ? isNaN(oB) ? 0 : oB : isNaN(oB) ? -Math.PI : -Math.acos(QB)
      }
      static GetAngleBetweenVectorsOnPlane(BB, OB, GB) {
        ZB.Xp[0].IU(BB);
        const YB = ZB.Xp[0];
        ZB.Xp[1].IU(OB);
        const DB = ZB.Xp[1];
        ZB.Xp[2].IU(GB);
        const QB = ZB.Xp[2],
          oB = ZB.Xp[3],
          yB = ZB.Xp[4];
        YB.normalize(), DB.normalize(), QB.normalize(), zB.CrossToRef(QB, YB, oB), zB.CrossToRef(oB, QB, yB);
        const JB = Math.atan2(zB.Dot(DB, oB), zB.Dot(DB, yB));
        return (0, jB.NormalizeRadians)(JB)
      }
      static PitchYawRollToMoveBetweenPointsToRef(BB, OB, GB) {
        const YB = NB.Xp[0];
        return OB.subtractToRef(BB, YB), GB._y = Math.atan2(YB.x, YB.z) || 0, GB._x = Math.atan2(Math.sqrt(YB.x ** 2 + YB.z ** 2), YB.y) || 0, GB._z = 0, GB._isDirty = !0, GB
      }
      static PitchYawRollToMoveBetweenPoints(BB, OB) {
        const GB = zB.Zero();
        return zB.PitchYawRollToMoveBetweenPointsToRef(BB, OB, GB)
      }
      static SlerpToRef(BB, OB, GB, DB) {
        GB = (0, jB.Clamp)(GB, 0, 1);
        const QB = ZB.Xp[0],
          oB = ZB.Xp[1];
        QB.IU(BB);
        const yB = QB.length();
        QB.normalizeFromLength(yB), oB.IU(OB);
        const JB = oB.length();
        oB.normalizeFromLength(JB);
        const MB = zB.Dot(QB, oB);
        let PB, lB;
        if (MB < 1 - YB.b) {
          const BB = Math.acos(MB),
            OB = 1 / Math.sin(BB);
          PB = Math.sin((1 - GB) * BB) * OB, lB = Math.sin(GB * BB) * OB
        } else PB = 1 - GB, lB = GB;
        return QB.scaleInPlace(PB), oB.scaleInPlace(lB), DB.IU(QB).addInPlace(oB), DB.scaleInPlace((0, jB.Lerp)(yB, JB, GB)), DB
      }
      static SmoothToRef(BB, OB, GB, YB, DB) {
        return zB.SlerpToRef(BB, OB, 0 === YB ? 1 : GB / YB, DB), DB
      }
      static FromArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new zB(BB[OB], BB[OB + 1], BB[OB + 2])
      }
      static FromFloatArray(BB, OB) {
        return zB.FromArray(BB, OB)
      }
      static FromArrayToRef(BB, OB, GB) {
        return GB._x = BB[OB], GB._y = BB[OB + 1], GB._z = BB[OB + 2], GB._isDirty = !0, GB
      }
      static FromFloatArrayToRef(BB, OB, GB) {
        return zB.FromArrayToRef(BB, OB, GB)
      }
      static FromFloatsToRef(BB, OB, GB, YB) {
        return YB.zOB(BB, OB, GB), YB
      }
      static Zero() {
        return new zB(0, 0, 0)
      }
      static One() {
        return new zB(1, 1, 1)
      }
      static Up() {
        return new zB(0, 1, 0)
      }
      static get UpReadOnly() {
        return zB._UpReadOnly
      }
      static get DownReadOnly() {
        return zB._DownReadOnly
      }
      static get RightReadOnly() {
        return zB._RightReadOnly
      }
      static get LeftReadOnly() {
        return zB._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return zB._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return zB._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return zB._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return zB._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return zB._ZeroReadOnly
      }
      static get OneReadOnly() {
        return zB._OneReadOnly
      }
      static Down() {
        return new zB(0, -1, 0)
      }
      static Forward() {
        return new zB(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new zB(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new zB(1, 0, 0)
      }
      static Left() {
        return new zB(-1, 0, 0)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new zB((0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).zOB((0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB))
      }
      static TransformCoordinates(BB, OB) {
        const GB = zB.Zero();
        return zB.TransformCoordinatesToRef(BB, OB, GB), GB
      }
      static TransformCoordinatesToRef(BB, OB, GB) {
        return zB.TransformCoordinatesFromFloatsToRef(BB._x, BB._y, BB._z, OB, GB), GB
      }
      static TransformCoordinatesFromFloatsToRef(BB, OB, GB, YB, DB) {
        const QB = YB.m,
          oB = BB * QB[0] + OB * QB[4] + GB * QB[8] + QB[12],
          jB = BB * QB[1] + OB * QB[5] + GB * QB[9] + QB[13],
          yB = BB * QB[2] + OB * QB[6] + GB * QB[10] + QB[14],
          JB = 1 / (BB * QB[3] + OB * QB[7] + GB * QB[11] + QB[15]);
        return DB._x = oB * JB, DB._y = jB * JB, DB._z = yB * JB, DB._isDirty = !0, DB
      }
      static TransformNormal(BB, OB) {
        const GB = zB.Zero();
        return zB.TransformNormalToRef(BB, OB, GB), GB
      }
      static TransformNormalToRef(BB, OB, GB) {
        return this.TransformNormalFromFloatsToRef(BB._x, BB._y, BB._z, OB, GB), GB
      }
      static TransformNormalFromFloatsToRef(BB, OB, GB, YB, DB) {
        const QB = YB.m;
        return DB._x = BB * QB[0] + OB * QB[4] + GB * QB[8], DB._y = BB * QB[1] + OB * QB[5] + GB * QB[9], DB._z = BB * QB[2] + OB * QB[6] + GB * QB[10], DB._isDirty = !0, DB
      }
      static CatmullRom(BB, OB, GB, YB, DB) {
        const QB = DB * DB,
          oB = DB * QB,
          jB = .5 * (2 * OB._x + (-BB._x + GB._x) * DB + (2 * BB._x - 5 * OB._x + 4 * GB._x - YB._x) * QB + (-BB._x + 3 * OB._x - 3 * GB._x + YB._x) * oB),
          yB = .5 * (2 * OB._y + (-BB._y + GB._y) * DB + (2 * BB._y - 5 * OB._y + 4 * GB._y - YB._y) * QB + (-BB._y + 3 * OB._y - 3 * GB._y + YB._y) * oB),
          JB = .5 * (2 * OB._z + (-BB._z + GB._z) * DB + (2 * BB._z - 5 * OB._z + 4 * GB._z - YB._z) * QB + (-BB._z + 3 * OB._z - 3 * GB._z + YB._z) * oB);
        return new zB(jB, yB, JB)
      }
      static Clamp(BB, OB, GB) {
        const YB = new zB;
        return zB.ClampToRef(BB, OB, GB, YB), YB
      }
      static ClampToRef(BB, OB, GB, YB) {
        let DB = BB._x;
        DB = DB > GB._x ? GB._x : DB, DB = DB < OB._x ? OB._x : DB;
        let QB = BB._y;
        QB = QB > GB._y ? GB._y : QB, QB = QB < OB._y ? OB._y : QB;
        let oB = BB._z;
        return oB = oB > GB._z ? GB._z : oB, oB = oB < OB._z ? OB._z : oB, YB.zOB(DB, QB, oB), YB
      }
      static CheckExtends(BB, OB, GB) {
        OB.minimizeInPlace(BB), GB.maximizeInPlace(BB)
      }
      static Hermite(BB, OB, GB, YB, DB) {
        const QB = DB * DB,
          oB = DB * QB,
          jB = 2 * oB - 3 * QB + 1,
          yB = -2 * oB + 3 * QB,
          JB = oB - 2 * QB + DB,
          MB = oB - QB,
          PB = BB._x * jB + GB._x * yB + OB._x * JB + YB._x * MB,
          lB = BB._y * jB + GB._y * yB + OB._y * JB + YB._y * MB,
          pB = BB._z * jB + GB._z * yB + OB._z * JB + YB._z * MB;
        return new zB(PB, lB, pB)
      }
      static Hermite1stDerivative(BB, OB, GB, YB, DB) {
        const QB = new zB;
        return this.Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB), QB
      }
      static Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB) {
        const oB = DB * DB;
        return QB._x = 6 * (oB - DB) * BB._x + (3 * oB - 4 * DB + 1) * OB._x + 6 * (-oB + DB) * GB._x + (3 * oB - 2 * DB) * YB._x, QB._y = 6 * (oB - DB) * BB._y + (3 * oB - 4 * DB + 1) * OB._y + 6 * (-oB + DB) * GB._y + (3 * oB - 2 * DB) * YB._y, QB._z = 6 * (oB - DB) * BB._z + (3 * oB - 4 * DB + 1) * OB._z + 6 * (-oB + DB) * GB._z + (3 * oB - 2 * DB) * YB._z, QB._isDirty = !0, QB
      }
      static Lerp(BB, OB, GB) {
        const YB = new zB(0, 0, 0);
        return zB.LerpToRef(BB, OB, GB, YB), YB
      }
      static LerpToRef(BB, OB, GB, YB) {
        return YB._x = BB._x + (OB._x - BB._x) * GB, YB._y = BB._y + (OB._y - BB._y) * GB, YB._z = BB._z + (OB._z - BB._z) * GB, YB._isDirty = !0, YB
      }
      static Dot(BB, OB) {
        return BB._x * OB._x + BB._y * OB._y + BB._z * OB._z
      }
      dot(BB) {
        return this._x * BB._x + this._y * BB._y + this._z * BB._z
      }
      static Cross(BB, OB) {
        const GB = new zB;
        return zB.CrossToRef(BB, OB, GB), GB
      }
      static CrossToRef(BB, OB, GB) {
        const YB = BB._y * OB._z - BB._z * OB._y,
          DB = BB._z * OB._x - BB._x * OB._z,
          QB = BB._x * OB._y - BB._y * OB._x;
        return GB.zOB(YB, DB, QB), GB
      }
      static Normalize(BB) {
        const OB = zB.Zero();
        return zB.NormalizeToRef(BB, OB), OB
      }
      static NormalizeToRef(BB, OB) {
        return BB.normalizeToRef(OB), OB
      }
      static Project(BB, OB, GB, YB) {
        const DB = new zB;
        return zB.ProjectToRef(BB, OB, GB, YB, DB), DB
      }
      static ProjectToRef(BB, OB, GB, YB, DB) {
        const QB = YB.width,
          jB = YB.height,
          yB = YB.x,
          JB = YB.y,
          MB = ZB.Matrix[1],
          PB = oB.b.LastCreatedEngine?.isNDCHalfZRange,
          lB = PB ? 1 : .5,
          pB = PB ? 0 : .5;
        qB.FromValuesToRef(QB / 2, 0, 0, 0, 0, -jB / 2, 0, 0, 0, 0, lB, 0, yB + QB / 2, jB / 2 + JB, pB, 1, MB);
        const NB = ZB.Matrix[0];
        return OB.multiplyToRef(GB, NB), NB.multiplyToRef(MB, NB), zB.TransformCoordinatesToRef(BB, NB, DB), DB
      }
      static Reflect(BB, OB) {
        return this.ReflectToRef(BB, OB, new zB)
      }
      static ReflectToRef(BB, OB, GB) {
        const YB = NB.Xp[0];
        return YB.IU(OB).scaleInPlace(2 * zB.Dot(BB, OB)), GB.IU(BB).CDB(YB)
      }
      static UnprojectFromTransform(BB, OB, GB, YB, DB) {
        return this.Unproject(BB, OB, GB, YB, DB, qB.IdentityReadOnly)
      }
      static Unproject(BB, OB, GB, YB, DB, QB) {
        const oB = new zB;
        return zB.UnprojectToRef(BB, OB, GB, YB, DB, QB, oB), oB
      }
      static UnprojectToRef(BB, OB, GB, YB, DB, QB, oB) {
        return zB.UnprojectFloatsToRef(BB._x, BB._y, BB._z, OB, GB, YB, DB, QB, oB), oB
      }
      static UnprojectFloatsToRef(BB, OB, GB, YB, DB, QB, jB, yB, JB) {
        const MB = ZB.Matrix[0];
        QB.multiplyToRef(jB, MB), MB.multiplyToRef(yB, MB), MB.invert();
        const PB = ZB.Xp[0];
        return PB.x = BB / YB * 2 - 1, PB.y = -(OB / DB * 2 - 1), oB.b.LastCreatedEngine?.isNDCHalfZRange ? PB.z = GB : PB.z = 2 * GB - 1, zB.TransformCoordinatesToRef(PB, MB, JB), JB
      }
      static Minimize(BB, OB) {
        const GB = new zB;
        return GB.IU(BB), GB.minimizeInPlace(OB), GB
      }
      static Maximize(BB, OB) {
        const GB = new zB;
        return GB.IU(BB), GB.maximizeInPlace(OB), GB
      }
      static Distance(BB, OB) {
        return Math.sqrt(zB.DistanceSquared(BB, OB))
      }
      static DistanceSquared(BB, OB) {
        const GB = BB._x - OB._x,
          YB = BB._y - OB._y,
          DB = BB._z - OB._z;
        return GB * GB + YB * YB + DB * DB
      }
      static ProjectOnTriangleToRef(BB, OB, GB, DB, QB) {
        const oB = ZB.Xp[0],
          yB = ZB.Xp[1],
          JB = ZB.Xp[2],
          MB = ZB.Xp[3],
          PB = ZB.Xp[4];
        GB.subtractToRef(OB, oB), DB.subtractToRef(OB, yB), DB.subtractToRef(GB, JB);
        const lB = oB.length(),
          pB = yB.length(),
          qB = JB.length();
        if (lB < YB.b || pB < YB.b || qB < YB.b) return QB.IU(OB), zB.Distance(BB, OB);
        BB.subtractToRef(OB, PB), zB.CrossToRef(oB, yB, MB);
        const NB = MB.length();
        if (NB < YB.b) return QB.IU(OB), zB.Distance(BB, OB);
        MB.normalizeFromLength(NB);
        let RB = PB.length();
        if (RB < YB.b) return QB.IU(OB), 0;
        PB.normalizeFromLength(RB);
        const WB = zB.Dot(MB, PB),
          AB = ZB.Xp[5],
          VB = ZB.Xp[6];
        AB.IU(MB).scaleInPlace(-RB * WB), VB.IU(BB).addInPlace(AB);
        const SB = ZB.Xp[4],
          nB = ZB.Xp[5],
          UB = ZB.Xp[7],
          fB = ZB.Xp[8];
        SB.IU(oB).scaleInPlace(1 / lB), fB.IU(yB).scaleInPlace(1 / pB), SB.addInPlace(fB).scaleInPlace(-1), nB.IU(oB).scaleInPlace(-1 / lB), fB.IU(JB).scaleInPlace(1 / qB), nB.addInPlace(fB).scaleInPlace(-1), UB.IU(JB).scaleInPlace(-1 / qB), fB.IU(yB).scaleInPlace(-1 / pB), UB.addInPlace(fB).scaleInPlace(-1);
        const kB = ZB.Xp[9];
        let dB;
        kB.IU(VB).CDB(OB), zB.CrossToRef(SB, kB, fB), dB = zB.Dot(fB, MB);
        const KB = dB;
        kB.IU(VB).CDB(GB), zB.CrossToRef(nB, kB, fB), dB = zB.Dot(fB, MB);
        const uB = dB;
        kB.IU(VB).CDB(DB), zB.CrossToRef(UB, kB, fB), dB = zB.Dot(fB, MB);
        const mB = dB,
          IB = ZB.Xp[10];
        let FB, iB;
        KB > 0 && uB < 0 ? (IB.IU(oB), FB = OB, iB = GB) : uB > 0 && mB < 0 ? (IB.IU(JB), FB = GB, iB = DB) : (IB.IU(yB).scaleInPlace(-1), FB = DB, iB = OB);
        const LB = ZB.Xp[9],
          gB = ZB.Xp[4];
        FB.subtractToRef(VB, fB), iB.subtractToRef(VB, LB), zB.CrossToRef(fB, LB, gB);
        if (!(zB.Dot(gB, MB) < 0)) return QB.IU(VB), Math.abs(RB * WB);
        const rB = ZB.Xp[5];
        zB.CrossToRef(IB, gB, rB), rB.normalize();
        const XB = ZB.Xp[9];
        XB.IU(FB).CDB(VB);
        const wB = XB.length();
        if (wB < YB.b) return QB.IU(FB), zB.Distance(BB, FB);
        XB.normalizeFromLength(wB);
        const EB = zB.Dot(rB, XB),
          cB = ZB.Xp[7];
        cB.IU(VB).addInPlace(rB.scaleInPlace(wB * EB)), fB.IU(cB).CDB(FB), RB = IB.length(), IB.normalizeFromLength(RB);
        let hB = zB.Dot(fB, IB) / Math.max(RB, YB.b);
        return hB = (0, jB.Clamp)(hB, 0, 1), cB.IU(FB).addInPlace(IB.scaleInPlace(hB * RB)), QB.IU(cB), zB.Distance(BB, cB)
      }
      static Center(BB, OB) {
        return zB.CenterToRef(BB, OB, zB.Zero())
      }
      static CenterToRef(BB, OB, GB) {
        return GB.zOB((BB._x + OB._x) / 2, (BB._y + OB._y) / 2, (BB._z + OB._z) / 2)
      }
      static RotationFromAxis(BB, OB, GB) {
        const YB = new zB;
        return zB.RotationFromAxisToRef(BB, OB, GB, YB), YB
      }
      static RotationFromAxisToRef(BB, OB, GB, YB) {
        const DB = ZB.Quaternion[0];
        return pB.RotationQuaternionFromAxisToRef(BB, OB, GB, DB), DB.toEulerAnglesToRef(YB), YB
      }
    }
    zB._V8PerformanceHack = new zB(.5, .5, .5), zB._UpReadOnly = zB.Up(), zB._DownReadOnly = zB.Down(), zB._LeftHandedForwardReadOnly = zB.Forward(!1), zB._RightHandedForwardReadOnly = zB.Forward(!0), zB._LeftHandedBackwardReadOnly = zB.Backward(!1), zB._RightHandedBackwardReadOnly = zB.Backward(!0), zB._RightReadOnly = zB.Right(), zB._LeftReadOnly = zB.Left(), zB._ZeroReadOnly = zB.Zero(), zB._OneReadOnly = zB.One();
    class lB {
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
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = BB, this._y = OB, this._z = GB, this._w = YB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let BB = MB(this._x);
        return BB = 397 * BB ^ MB(this._y), BB = 397 * BB ^ MB(this._z), BB = 397 * BB ^ MB(this._w), BB
      }
      dDB() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(BB, OB) {
        return void 0 === OB && (OB = 0), BB[OB] = this._x, BB[OB + 1] = this._y, BB[OB + 2] = this._z, BB[OB + 3] = this._w, this
      }
      OP(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return lB.FromArrayToRef(BB, OB, this), this
      }
      addInPlace(BB) {
        return this.x += BB._x, this.y += BB._y, this.z += BB._z, this.w += BB._w, this
      }
      addInPlaceFromFloats(BB, OB, GB, YB) {
        return this.x += BB, this.y += OB, this.z += GB, this.w += YB, this
      }
      add(BB) {
        return new lB(this._x + BB.x, this._y + BB.y, this._z + BB.z, this._w + BB.w)
      }
      addToRef(BB, OB) {
        return OB.x = this._x + BB.x, OB.y = this._y + BB.y, OB.z = this._z + BB.z, OB.w = this._w + BB.w, OB
      }
      CDB(BB) {
        return this.x -= BB.x, this.y -= BB.y, this.z -= BB.z, this.w -= BB.w, this
      }
      subtract(BB) {
        return new lB(this._x - BB.x, this._y - BB.y, this._z - BB.z, this._w - BB.w)
      }
      subtractToRef(BB, OB) {
        return OB.x = this._x - BB.x, OB.y = this._y - BB.y, OB.z = this._z - BB.z, OB.w = this._w - BB.w, OB
      }
      subtractFromFloats(BB, OB, GB, YB) {
        return new lB(this._x - BB, this._y - OB, this._z - GB, this._w - YB)
      }
      subtractFromFloatsToRef(BB, OB, GB, YB, DB) {
        return DB.x = this._x - BB, DB.y = this._y - OB, DB.z = this._z - GB, DB.w = this._w - YB, DB
      }
      ep() {
        return new lB(-this._x, -this._y, -this._z, -this._w)
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
        return new lB(this._x * BB, this._y * BB, this._z * BB, this._w * BB)
      }
      scaleToRef(BB, OB) {
        return OB.x = this._x * BB, OB.y = this._y * BB, OB.z = this._z * BB, OB.w = this._w * BB, OB
      }
      scaleAndAddToRef(BB, OB) {
        return OB.x += this._x * BB, OB.y += this._y * BB, OB.z += this._z * BB, OB.w += this._w * BB, OB
      }
      equals(BB) {
        return BB && this._x === BB.x && this._y === BB.y && this._z === BB.z && this._w === BB.w
      }
      equalsWithEpsilon(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB.b;
        return BB && (0, jB.WithinEpsilon)(this._x, BB.x, OB) && (0, jB.WithinEpsilon)(this._y, BB.y, OB) && (0, jB.WithinEpsilon)(this._z, BB.z, OB) && (0, jB.WithinEpsilon)(this._w, BB.w, OB)
      }
      QyB(BB, OB, GB, YB) {
        return this._x === BB && this._y === OB && this._z === GB && this._w === YB
      }
      multiplyInPlace(BB) {
        return this.x *= BB.x, this.y *= BB.y, this.z *= BB.z, this.w *= BB.w, this
      }
      multiply(BB) {
        return new lB(this._x * BB.x, this._y * BB.y, this._z * BB.z, this._w * BB.w)
      }
      multiplyToRef(BB, OB) {
        return OB.x = this._x * BB.x, OB.y = this._y * BB.y, OB.z = this._z * BB.z, OB.w = this._w * BB.w, OB
      }
      multiplyByFloats(BB, OB, GB, YB) {
        return new lB(this._x * BB, this._y * OB, this._z * GB, this._w * YB)
      }
      divide(BB) {
        return new lB(this._x / BB.x, this._y / BB.y, this._z / BB.z, this._w / BB.w)
      }
      divideToRef(BB, OB) {
        return OB.x = this._x / BB.x, OB.y = this._y / BB.y, OB.z = this._z / BB.z, OB.w = this._w / BB.w, OB
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
      minimizeInPlaceFromFloats(BB, OB, GB, YB) {
        return this.x = Math.min(BB, this._x), this.y = Math.min(OB, this._y), this.z = Math.min(GB, this._z), this.w = Math.min(YB, this._w), this
      }
      maximizeInPlaceFromFloats(BB, OB, GB, YB) {
        return this.x = Math.max(BB, this._x), this.y = Math.max(OB, this._y), this.z = Math.max(GB, this._z), this.w = Math.max(YB, this._w), this
      }
      floorToRef(BB) {
        return BB.x = Math.floor(this._x), BB.y = Math.floor(this._y), BB.z = Math.floor(this._z), BB.w = Math.floor(this._w), BB
      }
      floor() {
        return new lB(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(BB) {
        return BB.x = this._x - Math.floor(this._x), BB.y = this._y - Math.floor(this._y), BB.z = this._z - Math.floor(this._z), BB.w = this._w - Math.floor(this._w), BB
      }
      fract() {
        return new lB(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new lB)
      }
      normalizeToRef(BB) {
        const OB = this.length();
        return 0 === OB || 1 === OB ? (BB.x = this._x, BB.y = this._y, BB.z = this._z, BB.w = this._w, BB) : this.scaleToRef(1 / OB, BB)
      }
      toVector3() {
        return new zB(this._x, this._y, this._z)
      }
      clone() {
        return new lB(this._x, this._y, this._z, this._w)
      }
      IU(BB) {
        return this.x = BB.x, this.y = BB.y, this.z = BB.z, this.w = BB.w, this
      }
      zOB(BB, OB, GB, YB) {
        return this.x = BB, this.y = OB, this.z = GB, this.w = YB, this
      }
      set(BB, OB, GB, YB) {
        return this.zOB(BB, OB, GB, YB)
      }
      uBB(BB) {
        return this.x = this.y = this.z = this.w = BB, this
      }
      dot(BB) {
        return this._x * BB.x + this._y * BB.y + this._z * BB.z + this._w * BB.w
      }
      static FromArray(BB, OB) {
        return OB || (OB = 0), new lB(BB[OB], BB[OB + 1], BB[OB + 2], BB[OB + 3])
      }
      static FromArrayToRef(BB, OB, GB) {
        return GB.x = BB[OB], GB.y = BB[OB + 1], GB.z = BB[OB + 2], GB.w = BB[OB + 3], GB
      }
      static FromFloatArrayToRef(BB, OB, GB) {
        return lB.FromArrayToRef(BB, OB, GB), GB
      }
      static FromFloatsToRef(BB, OB, GB, YB, DB) {
        return DB.x = BB, DB.y = OB, DB.z = GB, DB.w = YB, DB
      }
      static Zero() {
        return new lB(0, 0, 0, 0)
      }
      static One() {
        return new lB(1, 1, 1, 1)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new lB((0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        return GB.x = (0, jB.RandomRange)(BB, OB), GB.y = (0, jB.RandomRange)(BB, OB), GB.z = (0, jB.RandomRange)(BB, OB), GB.w = (0, jB.RandomRange)(BB, OB), GB
      }
      static Clamp(BB, OB, GB) {
        return lB.ClampToRef(BB, OB, GB, new lB)
      }
      static ClampToRef(BB, OB, GB, YB) {
        return YB.x = (0, jB.Clamp)(BB.x, OB.x, GB.x), YB.y = (0, jB.Clamp)(BB.y, OB.y, GB.y), YB.z = (0, jB.Clamp)(BB.z, OB.z, GB.z), YB.w = (0, jB.Clamp)(BB.w, OB.w, GB.w), YB
      }
      static CheckExtends(BB, OB, GB) {
        OB.minimizeInPlace(BB), GB.maximizeInPlace(BB)
      }
      static get ZeroReadOnly() {
        return lB._ZeroReadOnly
      }
      static Normalize(BB) {
        return lB.NormalizeToRef(BB, new lB)
      }
      static NormalizeToRef(BB, OB) {
        return BB.normalizeToRef(OB), OB
      }
      static Minimize(BB, OB) {
        const GB = new lB;
        return GB.IU(BB), GB.minimizeInPlace(OB), GB
      }
      static Maximize(BB, OB) {
        const GB = new lB;
        return GB.IU(BB), GB.maximizeInPlace(OB), GB
      }
      static Distance(BB, OB) {
        return Math.sqrt(lB.DistanceSquared(BB, OB))
      }
      static DistanceSquared(BB, OB) {
        const GB = BB.x - OB.x,
          YB = BB.y - OB.y,
          DB = BB.z - OB.z,
          QB = BB.w - OB.w;
        return GB * GB + YB * YB + DB * DB + QB * QB
      }
      static Center(BB, OB) {
        return lB.CenterToRef(BB, OB, new lB)
      }
      static CenterToRef(BB, OB, GB) {
        return GB.x = (BB.x + OB.x) / 2, GB.y = (BB.y + OB.y) / 2, GB.z = (BB.z + OB.z) / 2, GB.w = (BB.w + OB.w) / 2, GB
      }
      static TransformCoordinates(BB, OB) {
        return lB.TransformCoordinatesToRef(BB, OB, new lB)
      }
      static TransformCoordinatesToRef(BB, OB, GB) {
        return lB.TransformCoordinatesFromFloatsToRef(BB._x, BB._y, BB._z, OB, GB), GB
      }
      static TransformCoordinatesFromFloatsToRef(BB, OB, GB, YB, DB) {
        const QB = YB.m,
          oB = BB * QB[0] + OB * QB[4] + GB * QB[8] + QB[12],
          jB = BB * QB[1] + OB * QB[5] + GB * QB[9] + QB[13],
          yB = BB * QB[2] + OB * QB[6] + GB * QB[10] + QB[14],
          JB = BB * QB[3] + OB * QB[7] + GB * QB[11] + QB[15];
        return DB.x = oB, DB.y = jB, DB.z = yB, DB.w = JB, DB
      }
      static TransformNormal(BB, OB) {
        return lB.TransformNormalToRef(BB, OB, new lB)
      }
      static TransformNormalToRef(BB, OB, GB) {
        const YB = OB.m,
          DB = BB.x * YB[0] + BB.y * YB[4] + BB.z * YB[8],
          QB = BB.x * YB[1] + BB.y * YB[5] + BB.z * YB[9],
          oB = BB.x * YB[2] + BB.y * YB[6] + BB.z * YB[10];
        return GB.x = DB, GB.y = QB, GB.z = oB, GB.w = BB.w, GB
      }
      static TransformNormalFromFloatsToRef(BB, OB, GB, YB, DB, QB) {
        const oB = DB.m;
        return QB.x = BB * oB[0] + OB * oB[4] + GB * oB[8], QB.y = BB * oB[1] + OB * oB[5] + GB * oB[9], QB.z = BB * oB[2] + OB * oB[6] + GB * oB[10], QB.w = YB, QB
      }
      static FromVector3(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new lB(BB._x, BB._y, BB._z, OB)
      }
      static Dot(BB, OB) {
        return BB.x * OB.x + BB.y * OB.y + BB.z * OB.z + BB.w * OB.w
      }
    }
    lB._V8PerformanceHack = new lB(.5, .5, .5, .5), lB._ZeroReadOnly = lB.Zero();
    class pB {
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
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = BB, this._y = OB, this._z = GB, this._w = YB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let BB = MB(this._x);
        return BB = 397 * BB ^ MB(this._y), BB = 397 * BB ^ MB(this._z), BB = 397 * BB ^ MB(this._w), BB
      }
      dDB() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[OB] = this._x, BB[OB + 1] = this._y, BB[OB + 2] = this._z, BB[OB + 3] = this._w, this
      }
      OP(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pB.FromArrayToRef(BB, OB, this)
      }
      equals(BB) {
        return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z && this._w === BB._w
      }
      equalsWithEpsilon(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB.b;
        return BB && (0, jB.WithinEpsilon)(this._x, BB._x, OB) && (0, jB.WithinEpsilon)(this._y, BB._y, OB) && (0, jB.WithinEpsilon)(this._z, BB._z, OB) && (0, jB.WithinEpsilon)(this._w, BB._w, OB)
      }
      isApprox(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YB.b;
        return BB && ((0, jB.WithinEpsilon)(this._x, BB._x, OB) && (0, jB.WithinEpsilon)(this._y, BB._y, OB) && (0, jB.WithinEpsilon)(this._z, BB._z, OB) && (0, jB.WithinEpsilon)(this._w, BB._w, OB) || (0, jB.WithinEpsilon)(this._x, -BB._x, OB) && (0, jB.WithinEpsilon)(this._y, -BB._y, OB) && (0, jB.WithinEpsilon)(this._z, -BB._z, OB) && (0, jB.WithinEpsilon)(this._w, -BB._w, OB))
      }
      clone() {
        return new pB(this._x, this._y, this._z, this._w)
      }
      IU(BB) {
        return this._x = BB._x, this._y = BB._y, this._z = BB._z, this._w = BB._w, this._isDirty = !0, this
      }
      zOB(BB, OB, GB, YB) {
        return this._x = BB, this._y = OB, this._z = GB, this._w = YB, this._isDirty = !0, this
      }
      set(BB, OB, GB, YB) {
        return this.zOB(BB, OB, GB, YB)
      }
      uBB(BB) {
        return this.zOB(BB, BB, BB, BB)
      }
      add(BB) {
        return new pB(this._x + BB._x, this._y + BB._y, this._z + BB._z, this._w + BB._w)
      }
      addInPlace(BB) {
        return this._x += BB._x, this._y += BB._y, this._z += BB._z, this._w += BB._w, this._isDirty = !0, this
      }
      addToRef(BB, OB) {
        return OB._x = this._x + BB._x, OB._y = this._y + BB._y, OB._z = this._z + BB._z, OB._w = this._w + BB._w, OB._isDirty = !0, OB
      }
      addInPlaceFromFloats(BB, OB, GB, YB) {
        return this._x += BB, this._y += OB, this._z += GB, this._w += YB, this._isDirty = !0, this
      }
      subtractToRef(BB, OB) {
        return OB._x = this._x - BB._x, OB._y = this._y - BB._y, OB._z = this._z - BB._z, OB._w = this._w - BB._w, OB._isDirty = !0, OB
      }
      subtractFromFloats(BB, OB, GB, YB) {
        return this.subtractFromFloatsToRef(BB, OB, GB, YB, new pB)
      }
      subtractFromFloatsToRef(BB, OB, GB, YB, DB) {
        return DB._x = this._x - BB, DB._y = this._y - OB, DB._z = this._z - GB, DB._w = this._w - YB, DB._isDirty = !0, DB
      }
      subtract(BB) {
        return new pB(this._x - BB._x, this._y - BB._y, this._z - BB._z, this._w - BB._w)
      }
      CDB(BB) {
        return this._x -= BB._x, this._y -= BB._y, this._z -= BB._z, this._w -= BB._w, this._isDirty = !0, this
      }
      scale(BB) {
        return new pB(this._x * BB, this._y * BB, this._z * BB, this._w * BB)
      }
      scaleToRef(BB, OB) {
        return OB._x = this._x * BB, OB._y = this._y * BB, OB._z = this._z * BB, OB._w = this._w * BB, OB._isDirty = !0, OB
      }
      scaleInPlace(BB) {
        return this._x *= BB, this._y *= BB, this._z *= BB, this._w *= BB, this._isDirty = !0, this
      }
      scaleAndAddToRef(BB, OB) {
        return OB._x += this._x * BB, OB._y += this._y * BB, OB._z += this._z * BB, OB._w += this._w * BB, OB._isDirty = !0, OB
      }
      multiply(BB) {
        const OB = new pB(0, 0, 0, 1);
        return this.multiplyToRef(BB, OB), OB
      }
      multiplyToRef(BB, OB) {
        const GB = this._x * BB._w + this._y * BB._z - this._z * BB._y + this._w * BB._x,
          YB = -this._x * BB._z + this._y * BB._w + this._z * BB._x + this._w * BB._y,
          DB = this._x * BB._y - this._y * BB._x + this._z * BB._w + this._w * BB._z,
          QB = -this._x * BB._x - this._y * BB._y - this._z * BB._z + this._w * BB._w;
        return OB.zOB(GB, YB, DB, QB), OB
      }
      multiplyInPlace(BB) {
        return this.multiplyToRef(BB, this)
      }
      multiplyByFloats(BB, OB, GB, YB) {
        return this._x *= BB, this._y *= OB, this._z *= GB, this._w *= YB, this._isDirty = !0, this
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(BB, OB) {
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
      ep() {
        return this.negateToRef(new pB)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(BB) {
        return BB._x = -this._x, BB._y = -this._y, BB._z = -this._z, BB._w = -this._w, BB._isDirty = !0, BB
      }
      QyB(BB, OB, GB, YB) {
        return this._x === BB && this._y === OB && this._z === GB && this._w === YB
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
        return BB.zOB(-this._x, -this._y, -this._z, this._w), BB
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new pB(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const BB = this.conjugate(),
          OB = this.lengthSquared();
        return 0 == OB || 1 == OB || BB.scaleInPlace(1 / OB), BB
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
        const BB = new pB(0, 0, 0, 1);
        return this.normalizeToRef(BB), BB
      }
      normalizeToRef(BB) {
        const OB = this.length();
        return 0 === OB || 1 === OB ? BB.zOB(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / OB, BB)
      }
      toEulerAngles() {
        const BB = zB.Zero();
        return this.toEulerAnglesToRef(BB), BB
      }
      toEulerAnglesToRef(BB) {
        const OB = this._z,
          GB = this._x,
          YB = this._y,
          DB = this._w,
          QB = YB * OB - GB * DB,
          oB = .4999999;
        if (QB < -oB) BB._y = 2 * Math.atan2(YB, DB), BB._x = Math.PI / 2, BB._z = 0, BB._isDirty = !0;
        else if (QB > oB) BB._y = 2 * Math.atan2(YB, DB), BB._x = -Math.PI / 2, BB._z = 0, BB._isDirty = !0;
        else {
          const oB = DB * DB,
            jB = OB * OB,
            yB = GB * GB,
            JB = YB * YB;
          BB._z = Math.atan2(2 * (GB * YB + OB * DB), -jB - yB + JB + oB), BB._x = Math.asin(-2 * QB), BB._y = Math.atan2(2 * (OB * GB + YB * DB), jB - yB - JB + oB), BB._isDirty = !0
        }
        return BB
      }
      toAlphaBetaGammaToRef(BB) {
        const OB = this._z,
          GB = this._x,
          YB = this._y,
          DB = this._w,
          QB = Math.sqrt(GB * GB + YB * YB),
          oB = Math.sqrt(OB * OB + DB * DB),
          jB = 2 * Math.atan2(QB, oB),
          yB = 2 * Math.atan2(OB, DB),
          JB = 2 * Math.atan2(YB, GB),
          MB = (yB + JB) / 2,
          PB = (yB - JB) / 2;
        return BB.set(PB, jB, MB), BB
      }
      toRotationMatrix(BB) {
        return qB.FromQuaternionToRef(this, BB), BB
      }
      fromRotationMatrix(BB) {
        return pB.FromRotationMatrixToRef(BB, this), this
      }
      dot(BB) {
        return this._x * BB._x + this._y * BB._y + this._z * BB._z + this._w * BB._w
      }
      toAxisAngle() {
        const BB = zB.Zero();
        return {
          axis: BB,
          angle: this.toAxisAngleToRef(BB)
        }
      }
      toAxisAngleToRef(BB) {
        let OB;
        const GB = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          YB = this._w;
        return GB > 0 ? (OB = 2 * Math.atan2(GB, YB), BB.set(this._x / GB, this._y / GB, this._z / GB)) : (OB = 0, BB.set(1, 0, 0)), OB
      }
      static FromRotationMatrix(BB) {
        const OB = new pB;
        return pB.FromRotationMatrixToRef(BB, OB), OB
      }
      static FromRotationMatrixToRef(BB, OB) {
        const GB = BB.m,
          YB = GB[0],
          DB = GB[4],
          QB = GB[8],
          oB = GB[1],
          jB = GB[5],
          yB = GB[9],
          JB = GB[2],
          MB = GB[6],
          PB = GB[10],
          zB = YB + jB + PB;
        let lB;
        return zB > 0 ? (lB = .5 / Math.sqrt(zB + 1), OB._w = .25 / lB, OB._x = (MB - yB) * lB, OB._y = (QB - JB) * lB, OB._z = (oB - DB) * lB, OB._isDirty = !0) : YB > jB && YB > PB ? (lB = 2 * Math.sqrt(1 + YB - jB - PB), OB._w = (MB - yB) / lB, OB._x = .25 * lB, OB._y = (DB + oB) / lB, OB._z = (QB + JB) / lB, OB._isDirty = !0) : jB > PB ? (lB = 2 * Math.sqrt(1 + jB - YB - PB), OB._w = (QB - JB) / lB, OB._x = (DB + oB) / lB, OB._y = .25 * lB, OB._z = (yB + MB) / lB, OB._isDirty = !0) : (lB = 2 * Math.sqrt(1 + PB - YB - jB), OB._w = (oB - DB) / lB, OB._x = (QB + JB) / lB, OB._y = (yB + MB) / lB, OB._z = .25 * lB, OB._isDirty = !0), OB
      }
      static Dot(BB, OB) {
        return BB._x * OB._x + BB._y * OB._y + BB._z * OB._z + BB._w * OB._w
      }
      static AreClose(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const YB = pB.Dot(BB, OB);
        return 1 - YB * YB <= GB
      }
      static SmoothToRef(BB, OB, GB, YB, DB) {
        let QB = 0 === YB ? 1 : GB / YB;
        return QB = (0, jB.Clamp)(QB, 0, 1), pB.SlerpToRef(BB, OB, QB, DB), DB
      }
      static Zero() {
        return new pB(0, 0, 0, 0)
      }
      static Inverse(BB) {
        return new pB(-BB._x, -BB._y, -BB._z, BB._w)
      }
      static InverseToRef(BB, OB) {
        return OB.set(-BB._x, -BB._y, -BB._z, BB._w), OB
      }
      static Identity() {
        return new pB(0, 0, 0, 1)
      }
      static IsIdentity(BB) {
        return BB && 0 === BB._x && 0 === BB._y && 0 === BB._z && 1 === BB._w
      }
      static RotationAxis(BB, OB) {
        return pB.RotationAxisToRef(BB, OB, new pB)
      }
      static RotationAxisToRef(BB, OB, GB) {
        GB._w = Math.cos(OB / 2);
        const YB = Math.sin(OB / 2) / BB.length();
        return GB._x = BB._x * YB, GB._y = BB._y * YB, GB._z = BB._z * YB, GB._isDirty = !0, GB
      }
      static FromArray(BB, OB) {
        return OB || (OB = 0), new pB(BB[OB], BB[OB + 1], BB[OB + 2], BB[OB + 3])
      }
      static FromArrayToRef(BB, OB, GB) {
        return GB._x = BB[OB], GB._y = BB[OB + 1], GB._z = BB[OB + 2], GB._w = BB[OB + 3], GB._isDirty = !0, GB
      }
      static FromFloatsToRef(BB, OB, GB, YB, DB) {
        return DB.zOB(BB, OB, GB, YB), DB
      }
      static FromEulerAngles(BB, OB, GB) {
        const YB = new pB;
        return pB.RotationYawPitchRollToRef(OB, BB, GB, YB), YB
      }
      static FromEulerAnglesToRef(BB, OB, GB, YB) {
        return pB.RotationYawPitchRollToRef(OB, BB, GB, YB), YB
      }
      static FromEulerVector(BB) {
        const OB = new pB;
        return pB.RotationYawPitchRollToRef(BB._y, BB._x, BB._z, OB), OB
      }
      static FromEulerVectorToRef(BB, OB) {
        return pB.RotationYawPitchRollToRef(BB._y, BB._x, BB._z, OB), OB
      }
      static FromUnitVectorsToRef(BB, OB, GB) {
        let DB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : YB.b;
        const QB = zB.Dot(BB, OB) + 1;
        return QB < DB ? Math.abs(BB.x) > Math.abs(BB.z) ? GB.set(-BB.y, BB.x, 0, 0) : GB.set(0, -BB.z, BB.y, 0) : (zB.CrossToRef(BB, OB, NB.Xp[0]), GB.set(NB.Xp[0].x, NB.Xp[0].y, NB.Xp[0].z, QB)), GB.normalize()
      }
      static RotationYawPitchRoll(BB, OB, GB) {
        const YB = new pB;
        return pB.RotationYawPitchRollToRef(BB, OB, GB, YB), YB
      }
      static RotationYawPitchRollToRef(BB, OB, GB, YB) {
        const DB = .5 * GB,
          QB = .5 * OB,
          oB = .5 * BB,
          jB = Math.sin(DB),
          yB = Math.cos(DB),
          JB = Math.sin(QB),
          MB = Math.cos(QB),
          PB = Math.sin(oB),
          zB = Math.cos(oB);
        return YB._x = zB * JB * yB + PB * MB * jB, YB._y = PB * MB * yB - zB * JB * jB, YB._z = zB * MB * jB - PB * JB * yB, YB._w = zB * MB * yB + PB * JB * jB, YB._isDirty = !0, YB
      }
      static RotationAlphaBetaGamma(BB, OB, GB) {
        const YB = new pB;
        return pB.RotationAlphaBetaGammaToRef(BB, OB, GB, YB), YB
      }
      static RotationAlphaBetaGammaToRef(BB, OB, GB, YB) {
        const DB = .5 * (GB + BB),
          QB = .5 * (GB - BB),
          oB = .5 * OB;
        return YB._x = Math.cos(QB) * Math.sin(oB), YB._y = Math.sin(QB) * Math.sin(oB), YB._z = Math.sin(DB) * Math.cos(oB), YB._w = Math.cos(DB) * Math.cos(oB), YB._isDirty = !0, YB
      }
      static RotationQuaternionFromAxis(BB, OB, GB) {
        const YB = new pB(0, 0, 0, 0);
        return pB.RotationQuaternionFromAxisToRef(BB, OB, GB, YB), YB
      }
      static RotationQuaternionFromAxisToRef(BB, OB, GB, YB) {
        const DB = ZB.Matrix[0];
        return BB = BB.normalizeToRef(ZB.Xp[0]), OB = OB.normalizeToRef(ZB.Xp[1]), GB = GB.normalizeToRef(ZB.Xp[2]), qB.FromXYZAxesToRef(BB, OB, GB, DB), pB.FromRotationMatrixToRef(DB, YB), YB
      }
      static FromLookDirectionLH(BB, OB) {
        const GB = new pB;
        return pB.FromLookDirectionLHToRef(BB, OB, GB), GB
      }
      static FromLookDirectionLHToRef(BB, OB, GB) {
        const YB = ZB.Matrix[0];
        return qB.LookDirectionLHToRef(BB, OB, YB), pB.FromRotationMatrixToRef(YB, GB), GB
      }
      static FromLookDirectionRH(BB, OB) {
        const GB = new pB;
        return pB.FromLookDirectionRHToRef(BB, OB, GB), GB
      }
      static FromLookDirectionRHToRef(BB, OB, GB) {
        const YB = ZB.Matrix[0];
        return qB.LookDirectionRHToRef(BB, OB, YB), pB.FromRotationMatrixToRef(YB, GB)
      }
      static Slerp(BB, OB, GB) {
        const YB = pB.Identity();
        return pB.SlerpToRef(BB, OB, GB, YB), YB
      }
      static SlerpToRef(BB, OB, GB, YB) {
        let DB, QB, oB = BB._x * OB._x + BB._y * OB._y + BB._z * OB._z + BB._w * OB._w,
          jB = !1;
        if (oB < 0 && (jB = !0, oB = -oB), oB > .999999) QB = 1 - GB, DB = jB ? -GB : GB;
        else {
          const BB = Math.acos(oB),
            OB = 1 / Math.sin(BB);
          QB = Math.sin((1 - GB) * BB) * OB, DB = jB ? -Math.sin(GB * BB) * OB : Math.sin(GB * BB) * OB
        }
        return YB._x = QB * BB._x + DB * OB._x, YB._y = QB * BB._y + DB * OB._y, YB._z = QB * BB._z + DB * OB._z, YB._w = QB * BB._w + DB * OB._w, YB._isDirty = !0, YB
      }
      static Hermite(BB, OB, GB, YB, DB) {
        const QB = DB * DB,
          oB = DB * QB,
          jB = 2 * oB - 3 * QB + 1,
          yB = -2 * oB + 3 * QB,
          JB = oB - 2 * QB + DB,
          MB = oB - QB,
          PB = BB._x * jB + GB._x * yB + OB._x * JB + YB._x * MB,
          zB = BB._y * jB + GB._y * yB + OB._y * JB + YB._y * MB,
          lB = BB._z * jB + GB._z * yB + OB._z * JB + YB._z * MB,
          qB = BB._w * jB + GB._w * yB + OB._w * JB + YB._w * MB;
        return new pB(PB, zB, lB, qB)
      }
      static Hermite1stDerivative(BB, OB, GB, YB, DB) {
        const QB = new pB;
        return this.Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB), QB
      }
      static Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB) {
        const oB = DB * DB;
        return QB._x = 6 * (oB - DB) * BB._x + (3 * oB - 4 * DB + 1) * OB._x + 6 * (-oB + DB) * GB._x + (3 * oB - 2 * DB) * YB._x, QB._y = 6 * (oB - DB) * BB._y + (3 * oB - 4 * DB + 1) * OB._y + 6 * (-oB + DB) * GB._y + (3 * oB - 2 * DB) * YB._y, QB._z = 6 * (oB - DB) * BB._z + (3 * oB - 4 * DB + 1) * OB._z + 6 * (-oB + DB) * GB._z + (3 * oB - 2 * DB) * YB._z, QB._w = 6 * (oB - DB) * BB._w + (3 * oB - 4 * DB + 1) * OB._w + 6 * (-oB + DB) * GB._w + (3 * oB - 2 * DB) * YB._w, QB._isDirty = !0, QB
      }
      static Normalize(BB) {
        const OB = pB.Zero();
        return pB.NormalizeToRef(BB, OB), OB
      }
      static NormalizeToRef(BB, OB) {
        return BB.normalizeToRef(OB), OB
      }
      static Clamp(BB, OB, GB) {
        const YB = new pB;
        return pB.ClampToRef(BB, OB, GB, YB), YB
      }
      static ClampToRef(BB, OB, GB, YB) {
        return YB.zOB((0, jB.Clamp)(BB.x, OB.x, GB.x), (0, jB.Clamp)(BB.y, OB.y, GB.y), (0, jB.Clamp)(BB.z, OB.z, GB.z), (0, jB.Clamp)(BB.w, OB.w, GB.w))
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new pB((0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).zOB((0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB), (0, jB.RandomRange)(BB, OB))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(BB, OB) {
        return Math.sqrt(pB.DistanceSquared(BB, OB))
      }
      static DistanceSquared(BB, OB) {
        const GB = BB.x - OB.x,
          YB = BB.y - OB.y,
          DB = BB.z - OB.z,
          QB = BB.w - OB.w;
        return GB * GB + YB * YB + DB * DB + QB * QB
      }
      static Center(BB, OB) {
        return pB.CenterToRef(BB, OB, pB.Zero())
      }
      static CenterToRef(BB, OB, GB) {
        return GB.zOB((BB.x + OB.x) / 2, (BB.y + OB.y) / 2, (BB.z + OB.z) / 2, (BB.w + OB.w) / 2)
      }
    }
    pB._V8PerformanceHack = new pB(.5, .5, .5, .5);
    class qB {
      static get Use64Bits() {
        return QB.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = yB.o._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          YB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = BB, this._isIdentity3x2 = BB || GB, this._isIdentityDirty = !this._isIdentity && OB, this._isIdentity3x2Dirty = !this._isIdentity3x2 && YB
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, QB.c.MatrixTrackPrecisionChange && QB.c.MatrixTrackedMatrices.push(this), this._m = new QB.c.MatrixCurrentType(16), this.markAsUpdated()
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
          OB = BB[0],
          GB = BB[1],
          YB = BB[2],
          DB = BB[3],
          QB = BB[4],
          oB = BB[5],
          jB = BB[6],
          yB = BB[7],
          JB = BB[8],
          MB = BB[9],
          PB = BB[10],
          zB = BB[11],
          lB = BB[12],
          pB = BB[13],
          qB = BB[14],
          ZB = BB[15],
          NB = PB * ZB - qB * zB,
          RB = MB * ZB - pB * zB,
          WB = MB * qB - pB * PB,
          AB = JB * ZB - lB * zB,
          VB = JB * qB - PB * lB,
          SB = JB * pB - lB * MB;
        return OB * +(oB * NB - jB * RB + yB * WB) + GB * -(QB * NB - jB * AB + yB * VB) + YB * +(QB * RB - oB * AB + yB * SB) + DB * -(QB * WB - oB * VB + jB * SB)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!BB) return this._m;
        const GB = this._m;
        for (let YB = 0; YB < 16; YB++) BB[OB + YB] = GB[YB];
        return this
      }
      dDB() {
        return this._m
      }
      OP(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qB.FromArrayToRef(BB, OB, this)
      }
      zOB() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return qB.FromArrayToRef(OB, 0, this)
      }
      set() {
        const BB = this._m;
        for (let OB = 0; OB < 16; OB++) BB[OB] = OB < 0 || arguments.length <= OB ? void 0 : arguments[OB];
        return this.markAsUpdated(), this
      }
      uBB(BB) {
        const OB = this._m;
        for (let GB = 0; GB < 16; GB++) OB[GB] = BB;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return qB.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(BB) {
        const OB = new qB;
        return this.addToRef(BB, OB), OB
      }
      addToRef(BB, OB) {
        const GB = this._m,
          YB = OB._m,
          DB = BB.m;
        for (let QB = 0; QB < 16; QB++) YB[QB] = GB[QB] + DB[QB];
        return OB.markAsUpdated(), OB
      }
      addToSelf(BB) {
        const OB = this._m,
          GB = BB.m;
        return OB[0] += GB[0], OB[1] += GB[1], OB[2] += GB[2], OB[3] += GB[3], OB[4] += GB[4], OB[5] += GB[5], OB[6] += GB[6], OB[7] += GB[7], OB[8] += GB[8], OB[9] += GB[9], OB[10] += GB[10], OB[11] += GB[11], OB[12] += GB[12], OB[13] += GB[13], OB[14] += GB[14], OB[15] += GB[15], this.markAsUpdated(), this
      }
      addInPlace(BB) {
        const OB = this._m,
          GB = BB.m;
        for (let YB = 0; YB < 16; YB++) OB[YB] += GB[YB];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const BB = this._m;
        for (let OB = 0; OB < 16; OB++) BB[OB] += OB < 0 || arguments.length <= OB ? void 0 : arguments[OB];
        return this.markAsUpdated(), this
      }
      subtract(BB) {
        const OB = this._m,
          GB = BB.m;
        for (let YB = 0; YB < 16; YB++) OB[YB] -= GB[YB];
        return this.markAsUpdated(), this
      }
      subtractToRef(BB, OB) {
        const GB = this._m,
          YB = BB.m,
          DB = OB._m;
        for (let QB = 0; QB < 16; QB++) DB[QB] = GB[QB] - YB[QB];
        return OB.markAsUpdated(), OB
      }
      CDB(BB) {
        const OB = this._m,
          GB = BB.m;
        for (let YB = 0; YB < 16; YB++) OB[YB] -= GB[YB];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        return this.subtractFromFloatsToRef(...OB, new qB)
      }
      subtractFromFloatsToRef() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        const YB = OB.pop(),
          DB = this._m,
          QB = YB._m,
          oB = OB;
        for (let jB = 0; jB < 16; jB++) QB[jB] = DB[jB] - oB[jB];
        return YB.markAsUpdated(), YB
      }
      invertToRef(BB) {
        return !0 === this._isIdentity ? (qB.IdentityToRef(BB), BB) : ((0, yB.i)(this, BB.dDB()) ? BB.markAsUpdated() : BB.IU(this), BB)
      }
      addAtIndex(BB, OB) {
        return this._m[BB] += OB, this.markAsUpdated(), this
      }
      multiplyAtIndex(BB, OB) {
        return this._m[BB] *= OB, this.markAsUpdated(), this
      }
      setTranslationFromFloats(BB, OB, GB) {
        return this._m[12] = BB, this._m[13] = OB, this._m[14] = GB, this.markAsUpdated(), this
      }
      addTranslationFromFloats(BB, OB, GB) {
        return this._m[12] += BB, this._m[13] += OB, this._m[14] += GB, this.markAsUpdated(), this
      }
      setTranslation(BB) {
        return this.setTranslationFromFloats(BB._x, BB._y, BB._z)
      }
      getTranslation() {
        return new zB(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(BB) {
        return BB.x = this._m[12], BB.y = this._m[13], BB.z = this._m[14], BB
      }
      removeRotationAndScaling() {
        const BB = this.m;
        return qB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, BB[12], BB[13], BB[14], BB[15], this), this._updateIdentityStatus(0 === BB[12] && 0 === BB[13] && 0 === BB[14] && 1 === BB[15]), this
      }
      IU(BB) {
        BB.copyToArray(this._m);
        const OB = BB;
        return this.updateFlag = OB.updateFlag, this._updateIdentityStatus(OB._isIdentity, OB._isIdentityDirty, OB._isIdentity3x2, OB._isIdentity3x2Dirty), this
      }
      copyToArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, yB.e)(this, BB, OB), this
      }
      multiply(BB) {
        const OB = new qB;
        return this.multiplyToRef(BB, OB), OB
      }
      multiplyInPlace(BB) {
        const OB = this._m,
          GB = BB.m;
        for (let YB = 0; YB < 16; YB++) OB[YB] *= GB[YB];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const BB = this._m;
        for (let OB = 0; OB < 16; OB++) BB[OB] *= OB < 0 || arguments.length <= OB ? void 0 : arguments[OB];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var BB = arguments.length, OB = new Array(BB), GB = 0; GB < BB; GB++) OB[GB] = arguments[GB];
        const YB = OB.pop(),
          DB = this._m,
          QB = YB._m,
          oB = OB;
        for (let jB = 0; jB < 16; jB++) QB[jB] = DB[jB] * oB[jB];
        return YB.markAsUpdated(), YB
      }
      multiplyToRef(BB, OB) {
        return this._isIdentity ? (OB.IU(BB), OB) : BB._isIdentity ? (OB.IU(this), OB) : (this.multiplyToArray(BB, OB._m, 0), OB.markAsUpdated(), OB)
      }
      multiplyToArray(BB, OB, GB) {
        return (0, yB.s)(this, BB, OB, GB), this
      }
      divide(BB) {
        return this.divideToRef(BB, new qB)
      }
      divideToRef(BB, OB) {
        const GB = this._m,
          YB = BB.m,
          DB = OB._m;
        for (let QB = 0; QB < 16; QB++) DB[QB] = GB[QB] / YB[QB];
        return OB.markAsUpdated(), OB
      }
      divideInPlace(BB) {
        const OB = this._m,
          GB = BB.m;
        for (let YB = 0; YB < 16; YB++) OB[YB] /= GB[YB];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(BB) {
        const OB = this._m,
          GB = BB.m;
        for (let YB = 0; YB < 16; YB++) OB[YB] = Math.min(OB[YB], GB[YB]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const BB = this._m;
        for (let OB = 0; OB < 16; OB++) BB[OB] = Math.min(BB[OB], OB < 0 || arguments.length <= OB ? void 0 : arguments[OB]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(BB) {
        const OB = this._m,
          GB = BB.m;
        for (let YB = 0; YB < 16; YB++) OB[YB] = Math.max(OB[YB], GB[YB]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const BB = this._m;
        for (let OB = 0; OB < 16; OB++) BB[OB] = Math.max(BB[OB], OB < 0 || arguments.length <= OB ? void 0 : arguments[OB]);
        return this.markAsUpdated(), this
      }
      ep() {
        return this.negateToRef(new qB)
      }
      negateInPlace() {
        const BB = this._m;
        for (let OB = 0; OB < 16; OB++) BB[OB] = -BB[OB];
        return this.markAsUpdated(), this
      }
      negateToRef(BB) {
        const OB = this._m,
          GB = BB._m;
        for (let YB = 0; YB < 16; YB++) GB[YB] = -OB[YB];
        return BB.markAsUpdated(), BB
      }
      equals(BB) {
        const OB = BB;
        if (!OB) return !1;
        if ((this._isIdentity || OB._isIdentity) && !this._isIdentityDirty && !OB._isIdentityDirty) return this._isIdentity && OB._isIdentity;
        const GB = this.m,
          YB = OB.m;
        return GB[0] === YB[0] && GB[1] === YB[1] && GB[2] === YB[2] && GB[3] === YB[3] && GB[4] === YB[4] && GB[5] === YB[5] && GB[6] === YB[6] && GB[7] === YB[7] && GB[8] === YB[8] && GB[9] === YB[9] && GB[10] === YB[10] && GB[11] === YB[11] && GB[12] === YB[12] && GB[13] === YB[13] && GB[14] === YB[14] && GB[15] === YB[15]
      }
      equalsWithEpsilon(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = this._m,
          YB = BB.m;
        for (let DB = 0; DB < 16; DB++)
          if (!(0, jB.WithinEpsilon)(GB[DB], YB[DB], OB)) return !1;
        return !0
      }
      QyB() {
        const BB = this._m;
        for (let OB = 0; OB < 16; OB++)
          if (BB[OB] != (OB < 0 || arguments.length <= OB ? void 0 : arguments[OB])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new qB)
      }
      floorToRef(BB) {
        const OB = this._m,
          GB = BB._m;
        for (let YB = 0; YB < 16; YB++) GB[YB] = Math.floor(OB[YB]);
        return BB.markAsUpdated(), BB
      }
      fract() {
        return this.fractToRef(new qB)
      }
      fractToRef(BB) {
        const OB = this._m,
          GB = BB._m;
        for (let YB = 0; YB < 16; YB++) GB[YB] = OB[YB] - Math.floor(OB[YB]);
        return BB.markAsUpdated(), BB
      }
      clone() {
        const BB = new qB;
        return BB.IU(this), BB
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let BB = MB(this._m[0]);
        for (let OB = 1; OB < 16; OB++) BB = 397 * BB ^ MB(this._m[OB]);
        return BB
      }
      decomposeToTransformNode(BB) {
        return BB.rotationQuaternion = BB.rotationQuaternion || new pB, this.decompose(BB.SP, BB.rotationQuaternion, BB.position)
      }
      decompose(BB, OB, GB, YB) {
        let DB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return GB && GB.uBB(0), BB && BB.uBB(1), OB && OB.zOB(0, 0, 0, 1), !0;
        const QB = this._m;
        if (GB && GB.zOB(QB[12], QB[13], QB[14]), (BB = BB || ZB.Xp[0]).x = Math.sqrt(QB[0] * QB[0] + QB[1] * QB[1] + QB[2] * QB[2]), BB.y = Math.sqrt(QB[4] * QB[4] + QB[5] * QB[5] + QB[6] * QB[6]), BB.z = Math.sqrt(QB[8] * QB[8] + QB[9] * QB[9] + QB[10] * QB[10]), YB) {
          const OB = (DB ? YB.absoluteScaling.x : YB.SP.x) < 0 ? -1 : 1,
            GB = (DB ? YB.absoluteScaling.y : YB.SP.y) < 0 ? -1 : 1,
            QB = (DB ? YB.absoluteScaling.z : YB.SP.z) < 0 ? -1 : 1;
          BB.x *= OB, BB.y *= GB, BB.z *= QB
        } else this.determinant() <= 0 && (BB.y *= -1);
        if (0 === BB._x || 0 === BB._y || 0 === BB._z) return OB && OB.zOB(0, 0, 0, 1), !1;
        if (OB) {
          const GB = 1 / BB._x,
            YB = 1 / BB._y,
            DB = 1 / BB._z;
          qB.FromValuesToRef(QB[0] * GB, QB[1] * GB, QB[2] * GB, 0, QB[4] * YB, QB[5] * YB, QB[6] * YB, 0, QB[8] * DB, QB[9] * DB, QB[10] * DB, 0, 0, 0, 0, 1, ZB.Matrix[0]), pB.FromRotationMatrixToRef(ZB.Matrix[0], OB)
        }
        return !0
      }
      getRow(BB) {
        if (BB < 0 || BB > 3) return null;
        const OB = 4 * BB;
        return new lB(this._m[OB + 0], this._m[OB + 1], this._m[OB + 2], this._m[OB + 3])
      }
      getRowToRef(BB, OB) {
        if (BB >= 0 && BB <= 3) {
          const GB = 4 * BB;
          OB.x = this._m[GB + 0], OB.y = this._m[GB + 1], OB.z = this._m[GB + 2], OB.w = this._m[GB + 3]
        }
        return OB
      }
      setRow(BB, OB) {
        return this.setRowFromFloats(BB, OB.x, OB.y, OB.z, OB.w)
      }
      transpose() {
        const BB = new qB;
        return qB.TransposeToRef(this, BB), BB
      }
      transposeToRef(BB) {
        return qB.TransposeToRef(this, BB), BB
      }
      setRowFromFloats(BB, OB, GB, YB, DB) {
        if (BB < 0 || BB > 3) return this;
        const QB = 4 * BB;
        return this._m[QB + 0] = OB, this._m[QB + 1] = GB, this._m[QB + 2] = YB, this._m[QB + 3] = DB, this.markAsUpdated(), this
      }
      scale(BB) {
        const OB = new qB;
        return this.scaleToRef(BB, OB), OB
      }
      scaleToRef(BB, OB) {
        for (let GB = 0; GB < 16; GB++) OB._m[GB] = this._m[GB] * BB;
        return OB.markAsUpdated(), OB
      }
      scaleAndAddToRef(BB, OB) {
        for (let GB = 0; GB < 16; GB++) OB._m[GB] += this._m[GB] * BB;
        return OB.markAsUpdated(), OB
      }
      scaleInPlace(BB) {
        const OB = this._m;
        for (let GB = 0; GB < 16; GB++) OB[GB] *= BB;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(BB) {
        const OB = ZB.Matrix[0];
        this.invertToRef(OB), OB.transposeToRef(BB);
        const GB = BB._m;
        return qB.FromValuesToRef(GB[0], GB[1], GB[2], 0, GB[4], GB[5], GB[6], 0, GB[8], GB[9], GB[10], 0, 0, 0, 0, 1, BB), BB
      }
      getRotationMatrix() {
        const BB = new qB;
        return this.getRotationMatrixToRef(BB), BB
      }
      getRotationMatrixToRef(BB) {
        const OB = ZB.Xp[0];
        if (!this.decompose(OB)) return qB.IdentityToRef(BB), BB;
        const GB = this._m,
          YB = 1 / OB._x,
          DB = 1 / OB._y,
          QB = 1 / OB._z;
        return qB.FromValuesToRef(GB[0] * YB, GB[1] * YB, GB[2] * YB, 0, GB[4] * DB, GB[5] * DB, GB[6] * DB, 0, GB[8] * QB, GB[9] * QB, GB[10] * QB, 0, 0, 0, 0, 1, BB), BB
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
        return this.multiplyToRef(RB, this), this
      }
      static FromArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GB = new qB;
        return qB.FromArrayToRef(BB, OB, GB), GB
      }
      static FromArrayToRef(BB, OB, GB) {
        for (let YB = 0; YB < 16; YB++) GB._m[YB] = BB[YB + OB];
        return GB.markAsUpdated(), GB
      }
      static FromFloat32ArrayToRefScaled(BB, OB, GB, YB) {
        return YB._m[0] = BB[0 + OB] * GB, YB._m[1] = BB[1 + OB] * GB, YB._m[2] = BB[2 + OB] * GB, YB._m[3] = BB[3 + OB] * GB, YB._m[4] = BB[4 + OB] * GB, YB._m[5] = BB[5 + OB] * GB, YB._m[6] = BB[6 + OB] * GB, YB._m[7] = BB[7 + OB] * GB, YB._m[8] = BB[8 + OB] * GB, YB._m[9] = BB[9 + OB] * GB, YB._m[10] = BB[10 + OB] * GB, YB._m[11] = BB[11 + OB] * GB, YB._m[12] = BB[12 + OB] * GB, YB._m[13] = BB[13 + OB] * GB, YB._m[14] = BB[14 + OB] * GB, YB._m[15] = BB[15 + OB] * GB, YB.markAsUpdated(), YB
      }
      static get IdentityReadOnly() {
        return qB._IdentityReadOnly
      }
      static FromValuesToRef(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, qB, ZB) {
        const NB = ZB._m;
        NB[0] = BB, NB[1] = OB, NB[2] = GB, NB[3] = YB, NB[4] = DB, NB[5] = QB, NB[6] = oB, NB[7] = jB, NB[8] = yB, NB[9] = JB, NB[10] = MB, NB[11] = PB, NB[12] = zB, NB[13] = lB, NB[14] = pB, NB[15] = qB, ZB.markAsUpdated()
      }
      static FromValues(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB, PB, zB, lB, pB, ZB) {
        const NB = new qB,
          RB = NB._m;
        return RB[0] = BB, RB[1] = OB, RB[2] = GB, RB[3] = YB, RB[4] = DB, RB[5] = QB, RB[6] = oB, RB[7] = jB, RB[8] = yB, RB[9] = JB, RB[10] = MB, RB[11] = PB, RB[12] = zB, RB[13] = lB, RB[14] = pB, RB[15] = ZB, NB.markAsUpdated(), NB
      }
      static Compose(BB, OB, GB) {
        const YB = new qB;
        return qB.ComposeToRef(BB, OB, GB, YB), YB
      }
      static ComposeToRef(BB, OB, GB, YB) {
        const DB = YB._m,
          QB = OB._x,
          oB = OB._y,
          jB = OB._z,
          yB = OB._w,
          JB = QB + QB,
          MB = oB + oB,
          PB = jB + jB,
          zB = QB * JB,
          lB = QB * MB,
          pB = QB * PB,
          qB = oB * MB,
          ZB = oB * PB,
          NB = jB * PB,
          RB = yB * JB,
          WB = yB * MB,
          AB = yB * PB,
          VB = BB._x,
          SB = BB._y,
          nB = BB._z;
        return DB[0] = (1 - (qB + NB)) * VB, DB[1] = (lB + AB) * VB, DB[2] = (pB - WB) * VB, DB[3] = 0, DB[4] = (lB - AB) * SB, DB[5] = (1 - (zB + NB)) * SB, DB[6] = (ZB + RB) * SB, DB[7] = 0, DB[8] = (pB + WB) * nB, DB[9] = (ZB - RB) * nB, DB[10] = (1 - (zB + qB)) * nB, DB[11] = 0, DB[12] = GB._x, DB[13] = GB._y, DB[14] = GB._z, DB[15] = 1, YB.markAsUpdated(), YB
      }
      static Identity() {
        const BB = qB.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return BB._updateIdentityStatus(!0), BB
      }
      static IdentityToRef(BB) {
        return qB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, BB), BB._updateIdentityStatus(!0), BB
      }
      static Zero() {
        const BB = qB.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return BB._updateIdentityStatus(!1), BB
      }
      static RotationX(BB) {
        const OB = new qB;
        return qB.RotationXToRef(BB, OB), OB
      }
      static Invert(BB) {
        const OB = new qB;
        return BB.invertToRef(OB), OB
      }
      static RotationXToRef(BB, OB) {
        const GB = Math.sin(BB),
          YB = Math.cos(BB);
        return qB.FromValuesToRef(1, 0, 0, 0, 0, YB, GB, 0, 0, -GB, YB, 0, 0, 0, 0, 1, OB), OB._updateIdentityStatus(1 === YB && 0 === GB), OB
      }
      static RotationY(BB) {
        const OB = new qB;
        return qB.RotationYToRef(BB, OB), OB
      }
      static RotationYToRef(BB, OB) {
        const GB = Math.sin(BB),
          YB = Math.cos(BB);
        return qB.FromValuesToRef(YB, 0, -GB, 0, 0, 1, 0, 0, GB, 0, YB, 0, 0, 0, 0, 1, OB), OB._updateIdentityStatus(1 === YB && 0 === GB), OB
      }
      static RotationZ(BB) {
        const OB = new qB;
        return qB.RotationZToRef(BB, OB), OB
      }
      static RotationZToRef(BB, OB) {
        const GB = Math.sin(BB),
          YB = Math.cos(BB);
        return qB.FromValuesToRef(YB, GB, 0, 0, -GB, YB, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, OB), OB._updateIdentityStatus(1 === YB && 0 === GB), OB
      }
      static RotationAxis(BB, OB) {
        const GB = new qB;
        return qB.RotationAxisToRef(BB, OB, GB), GB
      }
      static RotationAxisToRef(BB, OB, GB) {
        const YB = Math.sin(-OB),
          DB = Math.cos(-OB),
          QB = 1 - DB;
        BB = BB.normalizeToRef(ZB.Xp[0]);
        const oB = GB._m;
        return oB[0] = BB._x * BB._x * QB + DB, oB[1] = BB._x * BB._y * QB - BB._z * YB, oB[2] = BB._x * BB._z * QB + BB._y * YB, oB[3] = 0, oB[4] = BB._y * BB._x * QB + BB._z * YB, oB[5] = BB._y * BB._y * QB + DB, oB[6] = BB._y * BB._z * QB - BB._x * YB, oB[7] = 0, oB[8] = BB._z * BB._x * QB - BB._y * YB, oB[9] = BB._z * BB._y * QB + BB._x * YB, oB[10] = BB._z * BB._z * QB + DB, oB[11] = 0, oB[12] = 0, oB[13] = 0, oB[14] = 0, oB[15] = 1, GB.markAsUpdated(), GB
      }
      static RotationAlignToRef(BB, OB, GB) {
        let DB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const QB = zB.Dot(OB, BB),
          oB = GB._m;
        if (QB < -1 + YB.b) oB[0] = -1, oB[1] = 0, oB[2] = 0, oB[3] = 0, oB[4] = 0, oB[5] = DB ? 1 : -1, oB[6] = 0, oB[7] = 0, oB[8] = 0, oB[9] = 0, oB[10] = DB ? -1 : 1, oB[11] = 0;
        else {
          const GB = zB.Cross(OB, BB),
            YB = 1 / (1 + QB);
          oB[0] = GB._x * GB._x * YB + QB, oB[1] = GB._y * GB._x * YB - GB._z, oB[2] = GB._z * GB._x * YB + GB._y, oB[3] = 0, oB[4] = GB._x * GB._y * YB + GB._z, oB[5] = GB._y * GB._y * YB + QB, oB[6] = GB._z * GB._y * YB - GB._x, oB[7] = 0, oB[8] = GB._x * GB._z * YB - GB._y, oB[9] = GB._y * GB._z * YB + GB._x, oB[10] = GB._z * GB._z * YB + QB, oB[11] = 0
        }
        return oB[12] = 0, oB[13] = 0, oB[14] = 0, oB[15] = 1, GB.markAsUpdated(), GB
      }
      static RotationYawPitchRoll(BB, OB, GB) {
        const YB = new qB;
        return qB.RotationYawPitchRollToRef(BB, OB, GB, YB), YB
      }
      static RotationYawPitchRollToRef(BB, OB, GB, YB) {
        return pB.RotationYawPitchRollToRef(BB, OB, GB, ZB.Quaternion[0]), ZB.Quaternion[0].toRotationMatrix(YB), YB
      }
      static Scaling(BB, OB, GB) {
        const YB = new qB;
        return qB.ScalingToRef(BB, OB, GB, YB), YB
      }
      static ScalingToRef(BB, OB, GB, YB) {
        return qB.FromValuesToRef(BB, 0, 0, 0, 0, OB, 0, 0, 0, 0, GB, 0, 0, 0, 0, 1, YB), YB._updateIdentityStatus(1 === BB && 1 === OB && 1 === GB), YB
      }
      static Translation(BB, OB, GB) {
        const YB = new qB;
        return qB.TranslationToRef(BB, OB, GB, YB), YB
      }
      static TranslationToRef(BB, OB, GB, YB) {
        return qB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, BB, OB, GB, 1, YB), YB._updateIdentityStatus(0 === BB && 0 === OB && 0 === GB), YB
      }
      static Lerp(BB, OB, GB) {
        const YB = new qB;
        return qB.LerpToRef(BB, OB, GB, YB), YB
      }
      static LerpToRef(BB, OB, GB, YB) {
        const DB = YB._m,
          QB = BB.m,
          oB = OB.m;
        for (let jB = 0; jB < 16; jB++) DB[jB] = QB[jB] * (1 - GB) + oB[jB] * GB;
        return YB.markAsUpdated(), YB
      }
      static DecomposeLerp(BB, OB, GB) {
        const YB = new qB;
        return qB.DecomposeLerpToRef(BB, OB, GB, YB), YB
      }
      static DecomposeLerpToRef(BB, OB, GB, YB) {
        const DB = ZB.Xp[0],
          QB = ZB.Quaternion[0],
          oB = ZB.Xp[1];
        BB.decompose(DB, QB, oB);
        const jB = ZB.Xp[2],
          yB = ZB.Quaternion[1],
          JB = ZB.Xp[3];
        OB.decompose(jB, yB, JB);
        const MB = ZB.Xp[4];
        zB.LerpToRef(DB, jB, GB, MB);
        const PB = ZB.Quaternion[2];
        pB.SlerpToRef(QB, yB, GB, PB);
        const lB = ZB.Xp[5];
        return zB.LerpToRef(oB, JB, GB, lB), qB.ComposeToRef(MB, PB, lB, YB), YB
      }
      static LookAtLH(BB, OB, GB) {
        const YB = new qB;
        return qB.LookAtLHToRef(BB, OB, GB, YB), YB
      }
      static LookAtLHToRef(BB, OB, GB, YB) {
        const DB = ZB.Xp[0],
          QB = ZB.Xp[1],
          oB = ZB.Xp[2];
        OB.subtractToRef(BB, oB), oB.normalize(), zB.CrossToRef(GB, oB, DB);
        const jB = DB.lengthSquared();
        0 === jB ? DB.x = 1 : DB.normalizeFromLength(Math.sqrt(jB)), zB.CrossToRef(oB, DB, QB), QB.normalize();
        const yB = -zB.Dot(DB, BB),
          JB = -zB.Dot(QB, BB),
          MB = -zB.Dot(oB, BB);
        return qB.FromValuesToRef(DB._x, QB._x, oB._x, 0, DB._y, QB._y, oB._y, 0, DB._z, QB._z, oB._z, 0, yB, JB, MB, 1, YB), YB
      }
      static LookAtRH(BB, OB, GB) {
        const YB = new qB;
        return qB.LookAtRHToRef(BB, OB, GB, YB), YB
      }
      static LookAtRHToRef(BB, OB, GB, YB) {
        const DB = ZB.Xp[0],
          QB = ZB.Xp[1],
          oB = ZB.Xp[2];
        BB.subtractToRef(OB, oB), oB.normalize(), zB.CrossToRef(GB, oB, DB);
        const jB = DB.lengthSquared();
        0 === jB ? DB.x = 1 : DB.normalizeFromLength(Math.sqrt(jB)), zB.CrossToRef(oB, DB, QB), QB.normalize();
        const yB = -zB.Dot(DB, BB),
          JB = -zB.Dot(QB, BB),
          MB = -zB.Dot(oB, BB);
        return qB.FromValuesToRef(DB._x, QB._x, oB._x, 0, DB._y, QB._y, oB._y, 0, DB._z, QB._z, oB._z, 0, yB, JB, MB, 1, YB), YB
      }
      static LookDirectionLH(BB, OB) {
        const GB = new qB;
        return qB.LookDirectionLHToRef(BB, OB, GB), GB
      }
      static LookDirectionLHToRef(BB, OB, GB) {
        const YB = ZB.Xp[0];
        YB.IU(BB), YB.scaleInPlace(-1);
        const DB = ZB.Xp[1];
        return zB.CrossToRef(OB, YB, DB), qB.FromValuesToRef(DB._x, DB._y, DB._z, 0, OB._x, OB._y, OB._z, 0, YB._x, YB._y, YB._z, 0, 0, 0, 0, 1, GB), GB
      }
      static LookDirectionRH(BB, OB) {
        const GB = new qB;
        return qB.LookDirectionRHToRef(BB, OB, GB), GB
      }
      static LookDirectionRHToRef(BB, OB, GB) {
        const YB = ZB.Xp[2];
        return zB.CrossToRef(OB, BB, YB), qB.FromValuesToRef(YB._x, YB._y, YB._z, 0, OB._x, OB._y, OB._z, 0, BB._x, BB._y, BB._z, 0, 0, 0, 0, 1, GB), GB
      }
      static OrthoLH(BB, OB, GB, YB, DB) {
        const QB = new qB;
        return qB.OrthoLHToRef(BB, OB, GB, YB, QB, DB), QB
      }
      static OrthoLHToRef(BB, OB, GB, YB, DB, QB) {
        const oB = 2 / BB,
          jB = 2 / OB,
          yB = 2 / (YB - GB),
          JB = -(YB + GB) / (YB - GB);
        return qB.FromValuesToRef(oB, 0, 0, 0, 0, jB, 0, 0, 0, 0, yB, 0, 0, 0, JB, 1, DB), QB && DB.multiplyToRef(RB, DB), DB._updateIdentityStatus(1 === oB && 1 === jB && 1 === yB && 0 === JB), DB
      }
      static OrthoOffCenterLH(BB, OB, GB, YB, DB, QB, oB) {
        const jB = new qB;
        return qB.OrthoOffCenterLHToRef(BB, OB, GB, YB, DB, QB, jB, oB), jB
      }
      static OrthoOffCenterLHToRef(BB, OB, GB, YB, DB, QB, oB, jB) {
        const yB = 2 / (OB - BB),
          JB = 2 / (YB - GB),
          MB = 2 / (QB - DB),
          PB = -(QB + DB) / (QB - DB),
          zB = (BB + OB) / (BB - OB),
          lB = (YB + GB) / (GB - YB);
        return qB.FromValuesToRef(yB, 0, 0, 0, 0, JB, 0, 0, 0, 0, MB, 0, zB, lB, PB, 1, oB), jB && oB.multiplyToRef(RB, oB), oB.markAsUpdated(), oB
      }
      static ObliqueOffCenterLHToRef(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
        const PB = -oB * Math.cos(jB),
          zB = -oB * Math.sin(jB);
        return qB.TranslationToRef(0, 0, -yB, ZB.Matrix[1]), qB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, PB, zB, 1, 0, 0, 0, 0, 1, ZB.Matrix[0]), ZB.Matrix[1].multiplyToRef(ZB.Matrix[0], ZB.Matrix[0]), qB.TranslationToRef(0, 0, yB, ZB.Matrix[1]), ZB.Matrix[0].multiplyToRef(ZB.Matrix[1], ZB.Matrix[0]), qB.OrthoOffCenterLHToRef(BB, OB, GB, YB, DB, QB, JB, MB), ZB.Matrix[0].multiplyToRef(JB, JB), JB
      }
      static OrthoOffCenterRH(BB, OB, GB, YB, DB, QB, oB) {
        const jB = new qB;
        return qB.OrthoOffCenterRHToRef(BB, OB, GB, YB, DB, QB, jB, oB), jB
      }
      static OrthoOffCenterRHToRef(BB, OB, GB, YB, DB, QB, oB, jB) {
        return qB.OrthoOffCenterLHToRef(BB, OB, GB, YB, DB, QB, oB, jB), oB._m[10] *= -1, oB
      }
      static ObliqueOffCenterRHToRef(BB, OB, GB, YB, DB, QB, oB, jB, yB, JB, MB) {
        const PB = oB * Math.cos(jB),
          zB = oB * Math.sin(jB);
        return qB.TranslationToRef(0, 0, yB, ZB.Matrix[1]), qB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, PB, zB, 1, 0, 0, 0, 0, 1, ZB.Matrix[0]), ZB.Matrix[1].multiplyToRef(ZB.Matrix[0], ZB.Matrix[0]), qB.TranslationToRef(0, 0, -yB, ZB.Matrix[1]), ZB.Matrix[0].multiplyToRef(ZB.Matrix[1], ZB.Matrix[0]), qB.OrthoOffCenterRHToRef(BB, OB, GB, YB, DB, QB, JB, MB), ZB.Matrix[0].multiplyToRef(JB, JB), JB
      }
      static PerspectiveLH(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const oB = new qB,
          jB = 2 * GB / BB,
          yB = 2 * GB / OB,
          JB = (YB + GB) / (YB - GB),
          MB = -2 * YB * GB / (YB - GB),
          PB = Math.tan(QB);
        return qB.FromValuesToRef(jB, 0, 0, 0, 0, yB, 0, PB, 0, 0, JB, 1, 0, 0, MB, 0, oB), DB && oB.multiplyToRef(RB, oB), oB._updateIdentityStatus(!1), oB
      }
      static PerspectiveFovLH(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const jB = new qB;
        return qB.PerspectiveFovLHToRef(BB, OB, GB, YB, jB, !0, DB, QB, oB), jB
      }
      static PerspectiveFovLHToRef(BB, OB, GB, YB, DB) {
        let QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oB = arguments.length > 6 ? arguments[6] : void 0,
          jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const JB = GB,
          MB = YB,
          PB = 1 / Math.tan(.5 * BB),
          zB = QB ? PB / OB : PB,
          lB = QB ? PB : PB * OB,
          pB = yB && 0 === JB ? -1 : 0 !== MB ? (MB + JB) / (MB - JB) : 1,
          ZB = yB && 0 === JB ? 2 * MB : 0 !== MB ? -2 * MB * JB / (MB - JB) : -2 * JB,
          NB = Math.tan(jB);
        return qB.FromValuesToRef(zB, 0, 0, 0, 0, lB, 0, NB, 0, 0, pB, 1, 0, 0, ZB, 0, DB), oB && DB.multiplyToRef(RB, DB), DB._updateIdentityStatus(!1), DB
      }
      static PerspectiveFovReverseLHToRef(BB, OB, GB, YB, DB) {
        let QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oB = arguments.length > 6 ? arguments[6] : void 0,
          jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const yB = 1 / Math.tan(.5 * BB),
          JB = QB ? yB / OB : yB,
          MB = QB ? yB : yB * OB,
          PB = Math.tan(jB);
        return qB.FromValuesToRef(JB, 0, 0, 0, 0, MB, 0, PB, 0, 0, -GB, 1, 0, 0, 1, 0, DB), oB && DB.multiplyToRef(RB, DB), DB._updateIdentityStatus(!1), DB
      }
      static PerspectiveFovRH(BB, OB, GB, YB, DB) {
        let QB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          oB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const jB = new qB;
        return qB.PerspectiveFovRHToRef(BB, OB, GB, YB, jB, !0, DB, QB, oB), jB
      }
      static PerspectiveFovRHToRef(BB, OB, GB, YB, DB) {
        let QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oB = arguments.length > 6 ? arguments[6] : void 0,
          jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          yB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const JB = GB,
          MB = YB,
          PB = 1 / Math.tan(.5 * BB),
          zB = QB ? PB / OB : PB,
          lB = QB ? PB : PB * OB,
          pB = yB && 0 === JB ? 1 : 0 !== MB ? -(MB + JB) / (MB - JB) : -1,
          ZB = yB && 0 === JB ? 2 * MB : 0 !== MB ? -2 * MB * JB / (MB - JB) : -2 * JB,
          NB = Math.tan(jB);
        return qB.FromValuesToRef(zB, 0, 0, 0, 0, lB, 0, NB, 0, 0, pB, -1, 0, 0, ZB, 0, DB), oB && DB.multiplyToRef(RB, DB), DB._updateIdentityStatus(!1), DB
      }
      static PerspectiveFovReverseRHToRef(BB, OB, GB, YB, DB) {
        let QB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          oB = arguments.length > 6 ? arguments[6] : void 0,
          jB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const yB = 1 / Math.tan(.5 * BB),
          JB = QB ? yB / OB : yB,
          MB = QB ? yB : yB * OB,
          PB = Math.tan(jB);
        return qB.FromValuesToRef(JB, 0, 0, 0, 0, MB, 0, PB, 0, 0, -GB, -1, 0, 0, -1, 0, DB), oB && DB.multiplyToRef(RB, DB), DB._updateIdentityStatus(!1), DB
      }
      static GetFinalMatrix(BB, OB, GB, YB, DB, QB) {
        const oB = BB.width,
          jB = BB.height,
          yB = BB.x,
          JB = BB.y,
          MB = qB.FromValues(oB / 2, 0, 0, 0, 0, -jB / 2, 0, 0, 0, 0, QB - DB, 0, yB + oB / 2, jB / 2 + JB, DB, 1),
          PB = new qB;
        return OB.multiplyToRef(GB, PB), PB.multiplyToRef(YB, PB), PB.multiplyToRef(MB, PB)
      }
      static GetAsMatrix2x2(BB) {
        const OB = BB.m,
          GB = [OB[0], OB[1], OB[4], OB[5]];
        return QB.c.MatrixUse64Bits ? GB : new Float32Array(GB)
      }
      static GetAsMatrix3x3(BB) {
        const OB = BB.m,
          GB = [OB[0], OB[1], OB[2], OB[4], OB[5], OB[6], OB[8], OB[9], OB[10]];
        return QB.c.MatrixUse64Bits ? GB : new Float32Array(GB)
      }
      static Transpose(BB) {
        const OB = new qB;
        return qB.TransposeToRef(BB, OB), OB
      }
      static TransposeToRef(BB, OB) {
        const GB = BB.m,
          YB = GB[0],
          DB = GB[4],
          QB = GB[8],
          oB = GB[12],
          jB = GB[1],
          yB = GB[5],
          JB = GB[9],
          MB = GB[13],
          PB = GB[2],
          zB = GB[6],
          lB = GB[10],
          pB = GB[14],
          qB = GB[3],
          ZB = GB[7],
          NB = GB[11],
          RB = GB[15],
          WB = OB._m;
        return WB[0] = YB, WB[1] = DB, WB[2] = QB, WB[3] = oB, WB[4] = jB, WB[5] = yB, WB[6] = JB, WB[7] = MB, WB[8] = PB, WB[9] = zB, WB[10] = lB, WB[11] = pB, WB[12] = qB, WB[13] = ZB, WB[14] = NB, WB[15] = RB, OB.markAsUpdated(), OB._updateIdentityStatus(BB._isIdentity, BB._isIdentityDirty), OB
      }
      static Reflection(BB) {
        const OB = new qB;
        return qB.ReflectionToRef(BB, OB), OB
      }
      static ReflectionToRef(BB, OB) {
        BB.normalize();
        const GB = BB.normal.x,
          YB = BB.normal.y,
          DB = BB.normal.z,
          QB = -2 * GB,
          oB = -2 * YB,
          jB = -2 * DB;
        return qB.FromValuesToRef(QB * GB + 1, oB * GB, jB * GB, 0, QB * YB, oB * YB + 1, jB * YB, 0, QB * DB, oB * DB, jB * DB + 1, 0, QB * BB.d, oB * BB.d, jB * BB.d, 1, OB), OB
      }
      static FromXYZAxesToRef(BB, OB, GB, YB) {
        return qB.FromValuesToRef(BB._x, BB._y, BB._z, 0, OB._x, OB._y, OB._z, 0, GB._x, GB._y, GB._z, 0, 0, 0, 0, 1, YB), YB
      }
      static FromQuaternionToRef(BB, OB) {
        const GB = BB._x * BB._x,
          YB = BB._y * BB._y,
          DB = BB._z * BB._z,
          QB = BB._x * BB._y,
          oB = BB._z * BB._w,
          jB = BB._z * BB._x,
          yB = BB._y * BB._w,
          JB = BB._y * BB._z,
          MB = BB._x * BB._w;
        return OB._m[0] = 1 - 2 * (YB + DB), OB._m[1] = 2 * (QB + oB), OB._m[2] = 2 * (jB - yB), OB._m[3] = 0, OB._m[4] = 2 * (QB - oB), OB._m[5] = 1 - 2 * (DB + GB), OB._m[6] = 2 * (JB + MB), OB._m[7] = 0, OB._m[8] = 2 * (jB + yB), OB._m[9] = 2 * (JB - MB), OB._m[10] = 1 - 2 * (YB + GB), OB._m[11] = 0, OB._m[12] = 0, OB._m[13] = 0, OB._m[14] = 0, OB._m[15] = 1, OB.markAsUpdated(), OB
      }
    }
    qB._IdentityReadOnly = qB.Identity();
    class ZB {}
    ZB.Xp = (0, DB.i)(11, zB.Zero), ZB.Matrix = (0, DB.i)(2, qB.Identity), ZB.Quaternion = (0, DB.i)(3, pB.Zero);
    class NB {}
    NB.Vector2 = (0, DB.i)(3, PB.Zero), NB.Xp = (0, DB.i)(13, zB.Zero), NB.Vector4 = (0, DB.i)(3, lB.Zero), NB.Quaternion = (0, DB.i)(3, pB.Zero), NB.Matrix = (0, DB.i)(8, qB.Identity);
    const RB = qB.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let WB = !1;

    function AB() {
      WB || (WB = !0, Object.defineProperties(PB.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(zB.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(lB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(pB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(qB.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, JB.f)("BABYLON.Vector2", PB), (0, JB.f)("BABYLON.Vector3", zB), (0, JB.f)("BABYLON.Vector4", lB), (0, JB.f)("BABYLON.Matrix", qB))
    }
  },
  37802: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => oB
    });
    const YB = "undefined" !== typeof WeakRef;
    class DB {
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(BB, OB, GB, YB)
      }
      initialize(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = BB, this.skipNextObservers = OB, this.target = GB, this.currentTarget = YB, this
      }
    }
    class QB {
      constructor(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = BB, this.mask = OB, this.scope = GB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(BB)
      }
    }
    class oB {
      static FromPromise(BB, OB) {
        const GB = new oB;
        return BB.then((BB => {
          GB.notifyObservers(BB)
        })).catch((BB => {
          if (!OB) throw BB;
          OB.notifyObservers(BB)
        })), GB
      }
      get observers() {
        return this._observers
      }
      constructor(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = OB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new DB(0), BB && (this._onObserverAdded = BB)
      }
      add(BB) {
        let OB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!BB) return null;
        const DB = new QB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        DB.unregisterOnNextCall = GB, OB ? this._observers.unshift(DB) : this._observers.push(DB), this._onObserverAdded && this._onObserverAdded(DB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(DB, this._lastNotifiedValue);
        const oB = YB ? new WeakRef(this) : {
          deref: () => this
        };
        return DB._remove = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const OB = oB.deref();
          OB && (BB ? OB.remove(DB) : OB._remove(DB))
        }, DB
      }
      addOnce(BB) {
        return this.add(BB, void 0, void 0, void 0, !0)
      }
      remove(BB) {
        if (!BB) return !1;
        BB._remove = null;
        return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
      }
      removeCallback(BB, OB) {
        for (let GB = 0; GB < this._observers.length; GB++) {
          const YB = this._observers[GB];
          if (!YB._willBeUnregistered && (YB.callback === BB && (!OB || OB === YB.scope))) return this._deferUnregister(YB), !0
        }
        return !1
      }
      _deferUnregister(BB) {
        BB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, BB.unregisterOnNextCall = !1, BB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(BB)
        }), 0))
      }
      _remove(BB) {
        let OB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB) return !1;
        const GB = this._observers.indexOf(BB);
        return -1 !== GB && (OB && this._numObserversMarkedAsDeleted--, this._observers.splice(GB, 1), !0)
      }
      makeObserverTopPriority(BB) {
        this._remove(BB, !1), this._observers.unshift(BB)
      }
      makeObserverBottomPriority(BB) {
        this._remove(BB, !1), this._observers.push(BB)
      }
      notifyObservers(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GB = arguments.length > 2 ? arguments[2] : void 0,
          YB = arguments.length > 3 ? arguments[3] : void 0,
          DB = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BB), !this._observers.length) return !0;
        const QB = this._eventState;
        QB.mask = OB, QB.target = GB, QB.currentTarget = YB, QB.skipNextObservers = !1, QB.lastReturnValue = BB, QB.userInfo = DB;
        for (const oB of this._observers)
          if (!oB._willBeUnregistered && (oB.mask & OB && (oB.unregisterOnNextCall && this._deferUnregister(oB), oB.scope ? QB.lastReturnValue = oB.callback.apply(oB.scope, [BB, QB]) : QB.lastReturnValue = oB.callback(BB, QB)), QB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(BB, OB) {
        let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = OB), BB._willBeUnregistered) return;
        const YB = this._eventState;
        YB.mask = GB, YB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(OB, YB)
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
        const BB = new oB;
        return BB._observers = this._observers.slice(0), BB
      }
      hasSpecificMask() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const OB of this._observers)
          if (OB.mask & BB || OB.mask === BB) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);