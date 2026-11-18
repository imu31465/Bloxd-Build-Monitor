export const id = 214;
export const ids = [214];
export const modules = {
  36148: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    var VB = dB(36150);
    class yB {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    yB.Instances = [], yB.OnEnginesDisposedObservable = new VB.e, yB._LastCreatedScene = null, yB.UseFallbackTexture = !0, yB.FallbackTexture = ""
  },
  36140: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => VB
    });
    class VB {
      static SetMatrixPrecision(BB) {
        if (VB.MatrixTrackPrecisionChange = !1, BB && !VB.MatrixUse64Bits && VB.MatrixTrackedMatrices)
          for (let TB = 0; TB < VB.MatrixTrackedMatrices.length; ++TB) {
            const BB = VB.MatrixTrackedMatrices[TB],
              dB = BB._m;
            BB._m = new Array(16);
            for (let TB = 0; TB < 16; ++TB) BB._m[TB] = dB[TB]
          }
        VB.MatrixUse64Bits = BB, VB.MatrixCurrentType = VB.MatrixUse64Bits ? Array : Float32Array, VB.MatrixTrackedMatrices = null
      }
    }
    VB.MatrixUse64Bits = !1, VB.MatrixTrackPrecisionChange = !0, VB.MatrixCurrentType = Float32Array, VB.MatrixTrackedMatrices = []
  },
  36162: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => JB,
      e: () => gB,
      g: () => YB,
      i: () => VB,
      k: () => pB,
      n: () => lB
    });
    class VB {}

    function yB(BB) {
      BB.updateFlag = VB._UpdateFlagSeed++
    }

    function pB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const yB = BB.FVB(),
        pB = TB.FVB(),
        lB = yB[0],
        JB = yB[1],
        YB = yB[2],
        gB = yB[3],
        oB = yB[4],
        kB = yB[5],
        LB = yB[6],
        OB = yB[7],
        DB = yB[8],
        uB = yB[9],
        HB = yB[10],
        EB = yB[11],
        vB = yB[12],
        mB = yB[13],
        iB = yB[14],
        NB = yB[15],
        tB = pB[0],
        fB = pB[1],
        sB = pB[2],
        MB = pB[3],
        zB = pB[4],
        wB = pB[5],
        UB = pB[6],
        FB = pB[7],
        KB = pB[8],
        rB = pB[9],
        IB = pB[10],
        cB = pB[11],
        SB = pB[12],
        PB = pB[13],
        QB = pB[14],
        RB = pB[15];
      dB[VB] = lB * tB + JB * zB + YB * KB + gB * SB, dB[VB + 1] = lB * fB + JB * wB + YB * rB + gB * PB, dB[VB + 2] = lB * sB + JB * UB + YB * IB + gB * QB, dB[VB + 3] = lB * MB + JB * FB + YB * cB + gB * RB, dB[VB + 4] = oB * tB + kB * zB + LB * KB + OB * SB, dB[VB + 5] = oB * fB + kB * wB + LB * rB + OB * PB, dB[VB + 6] = oB * sB + kB * UB + LB * IB + OB * QB, dB[VB + 7] = oB * MB + kB * FB + LB * cB + OB * RB, dB[VB + 8] = DB * tB + uB * zB + HB * KB + EB * SB, dB[VB + 9] = DB * fB + uB * wB + HB * rB + EB * PB, dB[VB + 10] = DB * sB + uB * UB + HB * IB + EB * QB, dB[VB + 11] = DB * MB + uB * FB + HB * cB + EB * RB, dB[VB + 12] = vB * tB + mB * zB + iB * KB + NB * SB, dB[VB + 13] = vB * fB + mB * wB + iB * rB + NB * PB, dB[VB + 14] = vB * sB + mB * UB + iB * IB + NB * QB, dB[VB + 15] = vB * MB + mB * FB + iB * cB + NB * RB
    }

    function lB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      pB(BB, TB, dB.FVB(), VB), yB(dB)
    }

    function JB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const VB = BB.FVB();
      TB[dB] = VB[0], TB[dB + 1] = VB[1], TB[dB + 2] = VB[2], TB[dB + 3] = VB[3], TB[dB + 4] = VB[4], TB[dB + 5] = VB[5], TB[dB + 6] = VB[6], TB[dB + 7] = VB[7], TB[dB + 8] = VB[8], TB[dB + 9] = VB[9], TB[dB + 10] = VB[10], TB[dB + 11] = VB[11], TB[dB + 12] = VB[12], TB[dB + 13] = VB[13], TB[dB + 14] = VB[14], TB[dB + 15] = VB[15]
    }

    function YB(BB, TB) {
      const dB = gB(BB, TB.FVB());
      return dB && yB(TB), dB
    }

    function gB(BB, TB) {
      const dB = BB.FVB(),
        VB = dB[0],
        yB = dB[1],
        pB = dB[2],
        lB = dB[3],
        JB = dB[4],
        YB = dB[5],
        gB = dB[6],
        oB = dB[7],
        kB = dB[8],
        LB = dB[9],
        OB = dB[10],
        DB = dB[11],
        uB = dB[12],
        HB = dB[13],
        EB = dB[14],
        vB = dB[15],
        mB = OB * vB - EB * DB,
        iB = LB * vB - HB * DB,
        NB = LB * EB - HB * OB,
        tB = kB * vB - uB * DB,
        fB = kB * EB - OB * uB,
        sB = kB * HB - uB * LB,
        MB = +(YB * mB - gB * iB + oB * NB),
        zB = -(JB * mB - gB * tB + oB * fB),
        wB = +(JB * iB - YB * tB + oB * sB),
        UB = -(JB * NB - YB * fB + gB * sB),
        FB = VB * MB + yB * zB + pB * wB + lB * UB;
      if (0 === FB) return !1;
      const KB = 1 / FB,
        rB = gB * vB - EB * oB,
        IB = YB * vB - HB * oB,
        cB = YB * EB - HB * gB,
        SB = JB * vB - uB * oB,
        PB = JB * EB - uB * gB,
        QB = JB * HB - uB * YB,
        RB = gB * DB - OB * oB,
        aB = YB * DB - LB * oB,
        ZB = YB * OB - LB * gB,
        XB = JB * DB - kB * oB,
        WB = JB * OB - kB * gB,
        hB = JB * LB - kB * YB,
        CB = -(yB * mB - pB * iB + lB * NB),
        GB = +(VB * mB - pB * tB + lB * fB),
        qB = -(VB * iB - yB * tB + lB * sB),
        xB = +(VB * NB - yB * fB + pB * sB),
        jB = +(yB * rB - pB * IB + lB * cB),
        AB = -(VB * rB - pB * SB + lB * PB),
        bB = +(VB * IB - yB * SB + lB * QB),
        nB = -(VB * cB - yB * PB + pB * QB),
        eB = -(yB * RB - pB * aB + lB * ZB),
        BT = +(VB * RB - pB * XB + lB * WB),
        TT = -(VB * aB - yB * XB + lB * hB),
        dT = +(VB * ZB - yB * WB + pB * hB);
      return TB[0] = MB * KB, TB[1] = CB * KB, TB[2] = jB * KB, TB[3] = eB * KB, TB[4] = zB * KB, TB[5] = GB * KB, TB[6] = AB * KB, TB[7] = BT * KB, TB[8] = wB * KB, TB[9] = qB * KB, TB[10] = bB * KB, TB[11] = TT * KB, TB[12] = UB * KB, TB[13] = xB * KB, TB[14] = nB * KB, TB[15] = dT * KB, !0
    }
    VB._UpdateFlagSeed = 0
  },
  36126: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => uB,
      f: () => DB,
      i: () => iB,
      j: () => EB,
      l: () => kB,
      p: () => LB,
      r: () => OB
    });
    var VB = dB(36132),
      yB = dB(36137),
      pB = dB(36140),
      lB = dB(36148),
      JB = dB(36157),
      YB = dB(36162),
      gB = dB(36166);
    const oB = BB => parseInt(BB.toString().replace(/\W/g, ""));
    class kB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = BB, this.y = TB
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let BB = oB(this.x);
        return BB = 397 * BB ^ oB(this.y), BB
      }
      toArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[TB] = this.x, BB[TB + 1] = this.y, this
      }
      HdB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kB.FromArrayToRef(BB, TB, this), this
      }
      FVB() {
        return [this.x, this.y]
      }
      bdB(BB) {
        return this.x = BB.x, this.y = BB.y, this
      }
      YBB(BB, TB) {
        return this.x = BB, this.y = TB, this
      }
      set(BB, TB) {
        return this.YBB(BB, TB)
      }
      A4(BB) {
        return this.YBB(BB, BB)
      }
      add(BB) {
        return new kB(this.x + BB.x, this.y + BB.y)
      }
      addToRef(BB, TB) {
        return TB.x = this.x + BB.x, TB.y = this.y + BB.y, TB
      }
      addInPlace(BB) {
        return this.x += BB.x, this.y += BB.y, this
      }
      addInPlaceFromFloats(BB, TB) {
        return this.x += BB, this.y += TB, this
      }
      addVector3(BB) {
        return new kB(this.x + BB.x, this.y + BB.y)
      }
      subtract(BB) {
        return new kB(this.x - BB.x, this.y - BB.y)
      }
      subtractToRef(BB, TB) {
        return TB.x = this.x - BB.x, TB.y = this.y - BB.y, TB
      }
      qVB(BB) {
        return this.x -= BB.x, this.y -= BB.y, this
      }
      multiplyInPlace(BB) {
        return this.x *= BB.x, this.y *= BB.y, this
      }
      multiply(BB) {
        return new kB(this.x * BB.x, this.y * BB.y)
      }
      multiplyToRef(BB, TB) {
        return TB.x = this.x * BB.x, TB.y = this.y * BB.y, TB
      }
      multiplyByFloats(BB, TB) {
        return new kB(this.x * BB, this.y * TB)
      }
      divide(BB) {
        return new kB(this.x / BB.x, this.y / BB.y)
      }
      divideToRef(BB, TB) {
        return TB.x = this.x / BB.x, TB.y = this.y / BB.y, TB
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
      minimizeInPlaceFromFloats(BB, TB) {
        return this.x = Math.min(BB, this.x), this.y = Math.min(TB, this.y), this
      }
      maximizeInPlaceFromFloats(BB, TB) {
        return this.x = Math.max(BB, this.x), this.y = Math.max(TB, this.y), this
      }
      subtractFromFloats(BB, TB) {
        return new kB(this.x - BB, this.y - TB)
      }
      subtractFromFloatsToRef(BB, TB, dB) {
        return dB.x = this.x - BB, dB.y = this.y - TB, dB
      }
      fp() {
        return new kB(-this.x, -this.y)
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
        return new kB(this.x * BB, this.y * BB)
      }
      scaleToRef(BB, TB) {
        return TB.x = this.x * BB, TB.y = this.y * BB, TB
      }
      scaleAndAddToRef(BB, TB) {
        return TB.x += this.x * BB, TB.y += this.y * BB, TB
      }
      equals(BB) {
        return BB && this.x === BB.x && this.y === BB.y
      }
      equalsWithEpsilon(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VB.b;
        return BB && (0, JB.WithinEpsilon)(this.x, BB.x, TB) && (0, JB.WithinEpsilon)(this.y, BB.y, TB)
      }
      dJB(BB, TB) {
        return this.x === BB && this.y === TB
      }
      floor() {
        return new kB(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(BB) {
        return BB.x = Math.floor(this.x), BB.y = Math.floor(this.y), BB
      }
      fract() {
        return new kB(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(BB) {
        return BB.x = this.x - Math.floor(this.x), BB.y = this.y - Math.floor(this.y), BB
      }
      rotate(BB) {
        return this.rotateToRef(BB, new kB)
      }
      rotateToRef(BB, TB) {
        const dB = Math.cos(BB),
          VB = Math.sin(BB);
        return TB.x = dB * this.x - VB * this.y, TB.y = VB * this.x + dB * this.y, TB
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
        const BB = new kB;
        return this.normalizeToRef(BB), BB
      }
      normalizeToRef(BB) {
        const TB = this.length();
        return 0 === TB || 1 === TB ? (BB.x = this.x, BB.y = this.y, BB) : this.scaleToRef(1 / TB, BB)
      }
      clone() {
        return new kB(this.x, this.y)
      }
      dot(BB) {
        return this.x * BB.x + this.y * BB.y
      }
      static Zero() {
        return new kB(0, 0)
      }
      static One() {
        return new kB(1, 1)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new kB((0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).YBB((0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB))
      }
      static get ZeroReadOnly() {
        return kB._ZeroReadOnly
      }
      static FromArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new kB(BB[TB], BB[TB + 1])
      }
      static FromArrayToRef(BB, TB, dB) {
        return dB.x = BB[TB], dB.y = BB[TB + 1], dB
      }
      static FromFloatsToRef(BB, TB, dB) {
        return dB.YBB(BB, TB), dB
      }
      static CatmullRom(BB, TB, dB, VB, yB) {
        const pB = yB * yB,
          lB = yB * pB,
          JB = .5 * (2 * TB.x + (-BB.x + dB.x) * yB + (2 * BB.x - 5 * TB.x + 4 * dB.x - VB.x) * pB + (-BB.x + 3 * TB.x - 3 * dB.x + VB.x) * lB),
          YB = .5 * (2 * TB.y + (-BB.y + dB.y) * yB + (2 * BB.y - 5 * TB.y + 4 * dB.y - VB.y) * pB + (-BB.y + 3 * TB.y - 3 * dB.y + VB.y) * lB);
        return new kB(JB, YB)
      }
      static ClampToRef(BB, TB, dB, VB) {
        return VB.x = (0, JB.Clamp)(BB.x, TB.x, dB.x), VB.y = (0, JB.Clamp)(BB.y, TB.y, dB.y), VB
      }
      static Clamp(BB, TB, dB) {
        const VB = (0, JB.Clamp)(BB.x, TB.x, dB.x),
          yB = (0, JB.Clamp)(BB.y, TB.y, dB.y);
        return new kB(VB, yB)
      }
      static Hermite(BB, TB, dB, VB, yB) {
        const pB = yB * yB,
          lB = yB * pB,
          JB = 2 * lB - 3 * pB + 1,
          YB = -2 * lB + 3 * pB,
          gB = lB - 2 * pB + yB,
          oB = lB - pB,
          LB = BB.x * JB + dB.x * YB + TB.x * gB + VB.x * oB,
          OB = BB.y * JB + dB.y * YB + TB.y * gB + VB.y * oB;
        return new kB(LB, OB)
      }
      static Hermite1stDerivative(BB, TB, dB, VB, yB) {
        return this.Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, new kB)
      }
      static Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB) {
        const lB = yB * yB;
        return pB.x = 6 * (lB - yB) * BB.x + (3 * lB - 4 * yB + 1) * TB.x + 6 * (-lB + yB) * dB.x + (3 * lB - 2 * yB) * VB.x, pB.y = 6 * (lB - yB) * BB.y + (3 * lB - 4 * yB + 1) * TB.y + 6 * (-lB + yB) * dB.y + (3 * lB - 2 * yB) * VB.y, pB
      }
      static Lerp(BB, TB, dB) {
        return kB.LerpToRef(BB, TB, dB, new kB)
      }
      static LerpToRef(BB, TB, dB, VB) {
        return VB.x = BB.x + (TB.x - BB.x) * dB, VB.y = BB.y + (TB.y - BB.y) * dB, VB
      }
      static Dot(BB, TB) {
        return BB.x * TB.x + BB.y * TB.y
      }
      static Normalize(BB) {
        return kB.NormalizeToRef(BB, new kB)
      }
      static NormalizeToRef(BB, TB) {
        return BB.normalizeToRef(TB), TB
      }
      static Minimize(BB, TB) {
        const dB = BB.x < TB.x ? BB.x : TB.x,
          VB = BB.y < TB.y ? BB.y : TB.y;
        return new kB(dB, VB)
      }
      static Maximize(BB, TB) {
        const dB = BB.x > TB.x ? BB.x : TB.x,
          VB = BB.y > TB.y ? BB.y : TB.y;
        return new kB(dB, VB)
      }
      static Transform(BB, TB) {
        return kB.TransformToRef(BB, TB, new kB)
      }
      static TransformToRef(BB, TB, dB) {
        const VB = TB.m,
          yB = BB.x * VB[0] + BB.y * VB[4] + VB[12],
          pB = BB.x * VB[1] + BB.y * VB[5] + VB[13];
        return dB.x = yB, dB.y = pB, dB
      }
      static PointInTriangle(BB, TB, dB, VB) {
        const yB = .5 * (-dB.y * VB.x + TB.y * (-dB.x + VB.x) + TB.x * (dB.y - VB.y) + dB.x * VB.y),
          pB = yB < 0 ? -1 : 1,
          lB = (TB.y * VB.x - TB.x * VB.y + (VB.y - TB.y) * BB.x + (TB.x - VB.x) * BB.y) * pB,
          JB = (TB.x * dB.y - TB.y * dB.x + (TB.y - dB.y) * BB.x + (dB.x - TB.x) * BB.y) * pB;
        return lB > 0 && JB > 0 && lB + JB < 2 * yB * pB
      }
      static Distance(BB, TB) {
        return Math.sqrt(kB.DistanceSquared(BB, TB))
      }
      static DistanceSquared(BB, TB) {
        const dB = BB.x - TB.x,
          VB = BB.y - TB.y;
        return dB * dB + VB * VB
      }
      static Center(BB, TB) {
        return kB.CenterToRef(BB, TB, new kB)
      }
      static CenterToRef(BB, TB, dB) {
        return dB.YBB((BB.x + TB.x) / 2, (BB.y + TB.y) / 2)
      }
      static DistanceOfPointFromSegment(BB, TB, dB) {
        const VB = kB.DistanceSquared(TB, dB);
        if (0 === VB) return kB.Distance(BB, TB);
        const yB = dB.subtract(TB),
          pB = Math.max(0, Math.min(1, kB.Dot(BB.subtract(TB), yB) / VB)),
          lB = TB.add(yB.multiplyByFloats(pB, pB));
        return kB.Distance(BB, lB)
      }
    }
    kB._V8PerformanceHack = new kB(.5, .5), kB._ZeroReadOnly = kB.Zero();
    class LB {
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
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = BB, this._y = TB, this._z = dB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "RD"
      }
      getHashCode() {
        let BB = oB(this._x);
        return BB = 397 * BB ^ oB(this._y), BB = 397 * BB ^ oB(this._z), BB
      }
      FVB() {
        return [this._x, this._y, this._z]
      }
      toArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[TB] = this._x, BB[TB + 1] = this._y, BB[TB + 2] = this._z, this
      }
      HdB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return LB.FromArrayToRef(BB, TB, this), this
      }
      toQuaternion() {
        return DB.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(BB) {
        return this._x += BB._x, this._y += BB._y, this._z += BB._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(BB, TB, dB) {
        return this._x += BB, this._y += TB, this._z += dB, this._isDirty = !0, this
      }
      add(BB) {
        return new LB(this._x + BB._x, this._y + BB._y, this._z + BB._z)
      }
      addToRef(BB, TB) {
        return TB._x = this._x + BB._x, TB._y = this._y + BB._y, TB._z = this._z + BB._z, TB._isDirty = !0, TB
      }
      qVB(BB) {
        return this._x -= BB._x, this._y -= BB._y, this._z -= BB._z, this._isDirty = !0, this
      }
      subtract(BB) {
        return new LB(this._x - BB._x, this._y - BB._y, this._z - BB._z)
      }
      subtractToRef(BB, TB) {
        return this.subtractFromFloatsToRef(BB._x, BB._y, BB._z, TB)
      }
      subtractFromFloats(BB, TB, dB) {
        return new LB(this._x - BB, this._y - TB, this._z - dB)
      }
      subtractFromFloatsToRef(BB, TB, dB, VB) {
        return VB._x = this._x - BB, VB._y = this._y - TB, VB._z = this._z - dB, VB._isDirty = !0, VB
      }
      fp() {
        return new LB(-this._x, -this._y, -this._z)
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
        return new LB(this._x * BB, this._y * BB, this._z * BB)
      }
      scaleToRef(BB, TB) {
        return TB._x = this._x * BB, TB._y = this._y * BB, TB._z = this._z * BB, TB._isDirty = !0, TB
      }
      getNormalToRef(BB) {
        const TB = this.length();
        let dB = Math.acos(this._y / TB);
        const VB = Math.atan2(this._z, this._x);
        dB > Math.PI / 2 ? dB -= Math.PI / 2 : dB += Math.PI / 2;
        const yB = TB * Math.sin(dB) * Math.cos(VB),
          pB = TB * Math.cos(dB),
          lB = TB * Math.sin(dB) * Math.sin(VB);
        return BB.set(yB, pB, lB), BB
      }
      applyRotationQuaternionToRef(BB, TB) {
        const dB = this._x,
          VB = this._y,
          yB = this._z,
          pB = BB._x,
          lB = BB._y,
          JB = BB._z,
          YB = BB._w,
          gB = 2 * (lB * yB - JB * VB),
          oB = 2 * (JB * dB - pB * yB),
          kB = 2 * (pB * VB - lB * dB);
        return TB._x = dB + YB * gB + lB * kB - JB * oB, TB._y = VB + YB * oB + JB * gB - pB * kB, TB._z = yB + YB * kB + pB * oB - lB * gB, TB._isDirty = !0, TB
      }
      applyRotationQuaternionInPlace(BB) {
        return this.applyRotationQuaternionToRef(BB, this)
      }
      applyRotationQuaternion(BB) {
        return this.applyRotationQuaternionToRef(BB, new LB)
      }
      scaleAndAddToRef(BB, TB) {
        return TB._x += this._x * BB, TB._y += this._y * BB, TB._z += this._z * BB, TB._isDirty = !0, TB
      }
      projectOnPlane(BB, TB) {
        return this.projectOnPlaneToRef(BB, TB, new LB)
      }
      projectOnPlaneToRef(BB, TB, dB) {
        const VB = BB.normal,
          yB = BB.d,
          pB = HB.RD[0];
        this.subtractToRef(TB, pB), pB.normalize();
        const lB = LB.Dot(pB, VB);
        if (Math.abs(lB) < 1e-10) dB.A4(1 / 0);
        else {
          const BB = -(LB.Dot(TB, VB) + yB) / lB,
            JB = pB.scaleInPlace(BB);
          TB.addToRef(JB, dB)
        }
        return dB
      }
      equals(BB) {
        return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z
      }
      equalsWithEpsilon(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VB.b;
        return BB && (0, JB.WithinEpsilon)(this._x, BB._x, TB) && (0, JB.WithinEpsilon)(this._y, BB._y, TB) && (0, JB.WithinEpsilon)(this._z, BB._z, TB)
      }
      dJB(BB, TB, dB) {
        return this._x === BB && this._y === TB && this._z === dB
      }
      multiplyInPlace(BB) {
        return this._x *= BB._x, this._y *= BB._y, this._z *= BB._z, this._isDirty = !0, this
      }
      multiply(BB) {
        return this.multiplyByFloats(BB._x, BB._y, BB._z)
      }
      multiplyToRef(BB, TB) {
        return TB._x = this._x * BB._x, TB._y = this._y * BB._y, TB._z = this._z * BB._z, TB._isDirty = !0, TB
      }
      multiplyByFloats(BB, TB, dB) {
        return new LB(this._x * BB, this._y * TB, this._z * dB)
      }
      divide(BB) {
        return new LB(this._x / BB._x, this._y / BB._y, this._z / BB._z)
      }
      divideToRef(BB, TB) {
        return TB._x = this._x / BB._x, TB._y = this._y / BB._y, TB._z = this._z / BB._z, TB._isDirty = !0, TB
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
      minimizeInPlaceFromFloats(BB, TB, dB) {
        return BB < this._x && (this.x = BB), TB < this._y && (this.y = TB), dB < this._z && (this.z = dB), this
      }
      maximizeInPlaceFromFloats(BB, TB, dB) {
        return BB > this._x && (this.x = BB), TB > this._y && (this.y = TB), dB > this._z && (this.z = dB), this
      }
      isNonUniformWithinEpsilon(BB) {
        const TB = Math.abs(this._x),
          dB = Math.abs(this._y);
        if (!(0, JB.WithinEpsilon)(TB, dB, BB)) return !0;
        const VB = Math.abs(this._z);
        return !(0, JB.WithinEpsilon)(TB, VB, BB) || !(0, JB.WithinEpsilon)(dB, VB, BB)
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
        return new LB(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(BB) {
        return BB._x = this._x - Math.floor(this._x), BB._y = this._y - Math.floor(this._y), BB._z = this._z - Math.floor(this._z), BB._isDirty = !0, BB
      }
      fract() {
        return new LB(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const TB = HB.RD[0].bdB(this);
        return this.x = TB[BB[0]], this.y = TB[BB[1]], this.z = TB[BB[2]], this
      }
      rotateByQuaternionToRef(BB, TB) {
        return BB.toRotationMatrix(HB.Matrix[0]), LB.TransformCoordinatesToRef(this, HB.Matrix[0], TB), TB
      }
      rotateByQuaternionAroundPointToRef(BB, TB, dB) {
        return this.subtractToRef(TB, HB.RD[0]), HB.RD[0].rotateByQuaternionToRef(BB, HB.RD[0]), TB.addToRef(HB.RD[0], dB), dB
      }
      cross(BB) {
        return LB.CrossToRef(this, BB, new LB)
      }
      normalizeFromLength(BB) {
        return 0 === BB || 1 === BB ? this : this.scaleInPlace(1 / BB)
      }
      normalizeToNew() {
        return this.normalizeToRef(new LB)
      }
      normalizeToRef(BB) {
        const TB = this.length();
        return 0 === TB || 1 === TB ? (BB._x = this._x, BB._y = this._y, BB._z = this._z, BB._isDirty = !0, BB) : this.scaleToRef(1 / TB, BB)
      }
      clone() {
        return new LB(this._x, this._y, this._z)
      }
      bdB(BB) {
        return this.YBB(BB._x, BB._y, BB._z)
      }
      YBB(BB, TB, dB) {
        return this._x = BB, this._y = TB, this._z = dB, this._isDirty = !0, this
      }
      set(BB, TB, dB) {
        return this.YBB(BB, TB, dB)
      }
      A4(BB) {
        return this._x = this._y = this._z = BB, this._isDirty = !0, this
      }
      static GetClipFactor(BB, TB, dB, VB) {
        const yB = LB.Dot(BB, dB);
        return (yB - VB) / (yB - LB.Dot(TB, dB))
      }
      static GetAngleBetweenVectors(BB, TB, dB) {
        const VB = BB.normalizeToRef(HB.RD[1]),
          yB = TB.normalizeToRef(HB.RD[2]);
        let pB = LB.Dot(VB, yB);
        pB = (0, JB.Clamp)(pB, -1, 1);
        const lB = Math.acos(pB),
          YB = HB.RD[3];
        return LB.CrossToRef(VB, yB, YB), LB.Dot(YB, dB) > 0 ? isNaN(lB) ? 0 : lB : isNaN(lB) ? -Math.PI : -Math.acos(pB)
      }
      static GetAngleBetweenVectorsOnPlane(BB, TB, dB) {
        HB.RD[0].bdB(BB);
        const VB = HB.RD[0];
        HB.RD[1].bdB(TB);
        const yB = HB.RD[1];
        HB.RD[2].bdB(dB);
        const pB = HB.RD[2],
          lB = HB.RD[3],
          YB = HB.RD[4];
        VB.normalize(), yB.normalize(), pB.normalize(), LB.CrossToRef(pB, VB, lB), LB.CrossToRef(lB, pB, YB);
        const gB = Math.atan2(LB.Dot(yB, lB), LB.Dot(yB, YB));
        return (0, JB.NormalizeRadians)(gB)
      }
      static PitchYawRollToMoveBetweenPointsToRef(BB, TB, dB) {
        const VB = EB.RD[0];
        return TB.subtractToRef(BB, VB), dB._y = Math.atan2(VB.x, VB.z) || 0, dB._x = Math.atan2(Math.sqrt(VB.x ** 2 + VB.z ** 2), VB.y) || 0, dB._z = 0, dB._isDirty = !0, dB
      }
      static PitchYawRollToMoveBetweenPoints(BB, TB) {
        const dB = LB.Zero();
        return LB.PitchYawRollToMoveBetweenPointsToRef(BB, TB, dB)
      }
      static SlerpToRef(BB, TB, dB, yB) {
        dB = (0, JB.Clamp)(dB, 0, 1);
        const pB = HB.RD[0],
          lB = HB.RD[1];
        pB.bdB(BB);
        const YB = pB.length();
        pB.normalizeFromLength(YB), lB.bdB(TB);
        const gB = lB.length();
        lB.normalizeFromLength(gB);
        const oB = LB.Dot(pB, lB);
        let kB, OB;
        if (oB < 1 - VB.b) {
          const BB = Math.acos(oB),
            TB = 1 / Math.sin(BB);
          kB = Math.sin((1 - dB) * BB) * TB, OB = Math.sin(dB * BB) * TB
        } else kB = 1 - dB, OB = dB;
        return pB.scaleInPlace(kB), lB.scaleInPlace(OB), yB.bdB(pB).addInPlace(lB), yB.scaleInPlace((0, JB.Lerp)(YB, gB, dB)), yB
      }
      static SmoothToRef(BB, TB, dB, VB, yB) {
        return LB.SlerpToRef(BB, TB, 0 === VB ? 1 : dB / VB, yB), yB
      }
      static FromArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new LB(BB[TB], BB[TB + 1], BB[TB + 2])
      }
      static FromFloatArray(BB, TB) {
        return LB.FromArray(BB, TB)
      }
      static FromArrayToRef(BB, TB, dB) {
        return dB._x = BB[TB], dB._y = BB[TB + 1], dB._z = BB[TB + 2], dB._isDirty = !0, dB
      }
      static FromFloatArrayToRef(BB, TB, dB) {
        return LB.FromArrayToRef(BB, TB, dB)
      }
      static FromFloatsToRef(BB, TB, dB, VB) {
        return VB.YBB(BB, TB, dB), VB
      }
      static Zero() {
        return new LB(0, 0, 0)
      }
      static One() {
        return new LB(1, 1, 1)
      }
      static Up() {
        return new LB(0, 1, 0)
      }
      static get UpReadOnly() {
        return LB._UpReadOnly
      }
      static get DownReadOnly() {
        return LB._DownReadOnly
      }
      static get RightReadOnly() {
        return LB._RightReadOnly
      }
      static get LeftReadOnly() {
        return LB._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return LB._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return LB._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return LB._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return LB._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return LB._ZeroReadOnly
      }
      static get OneReadOnly() {
        return LB._OneReadOnly
      }
      static Down() {
        return new LB(0, -1, 0)
      }
      static Forward() {
        return new LB(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new LB(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new LB(1, 0, 0)
      }
      static Left() {
        return new LB(-1, 0, 0)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new LB((0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).YBB((0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB))
      }
      static TransformCoordinates(BB, TB) {
        const dB = LB.Zero();
        return LB.TransformCoordinatesToRef(BB, TB, dB), dB
      }
      static TransformCoordinatesToRef(BB, TB, dB) {
        return LB.TransformCoordinatesFromFloatsToRef(BB._x, BB._y, BB._z, TB, dB), dB
      }
      static TransformCoordinatesFromFloatsToRef(BB, TB, dB, VB, yB) {
        const pB = VB.m,
          lB = BB * pB[0] + TB * pB[4] + dB * pB[8] + pB[12],
          JB = BB * pB[1] + TB * pB[5] + dB * pB[9] + pB[13],
          YB = BB * pB[2] + TB * pB[6] + dB * pB[10] + pB[14],
          gB = 1 / (BB * pB[3] + TB * pB[7] + dB * pB[11] + pB[15]);
        return yB._x = lB * gB, yB._y = JB * gB, yB._z = YB * gB, yB._isDirty = !0, yB
      }
      static TransformNormal(BB, TB) {
        const dB = LB.Zero();
        return LB.TransformNormalToRef(BB, TB, dB), dB
      }
      static TransformNormalToRef(BB, TB, dB) {
        return this.TransformNormalFromFloatsToRef(BB._x, BB._y, BB._z, TB, dB), dB
      }
      static TransformNormalFromFloatsToRef(BB, TB, dB, VB, yB) {
        const pB = VB.m;
        return yB._x = BB * pB[0] + TB * pB[4] + dB * pB[8], yB._y = BB * pB[1] + TB * pB[5] + dB * pB[9], yB._z = BB * pB[2] + TB * pB[6] + dB * pB[10], yB._isDirty = !0, yB
      }
      static CatmullRom(BB, TB, dB, VB, yB) {
        const pB = yB * yB,
          lB = yB * pB,
          JB = .5 * (2 * TB._x + (-BB._x + dB._x) * yB + (2 * BB._x - 5 * TB._x + 4 * dB._x - VB._x) * pB + (-BB._x + 3 * TB._x - 3 * dB._x + VB._x) * lB),
          YB = .5 * (2 * TB._y + (-BB._y + dB._y) * yB + (2 * BB._y - 5 * TB._y + 4 * dB._y - VB._y) * pB + (-BB._y + 3 * TB._y - 3 * dB._y + VB._y) * lB),
          gB = .5 * (2 * TB._z + (-BB._z + dB._z) * yB + (2 * BB._z - 5 * TB._z + 4 * dB._z - VB._z) * pB + (-BB._z + 3 * TB._z - 3 * dB._z + VB._z) * lB);
        return new LB(JB, YB, gB)
      }
      static Clamp(BB, TB, dB) {
        const VB = new LB;
        return LB.ClampToRef(BB, TB, dB, VB), VB
      }
      static ClampToRef(BB, TB, dB, VB) {
        let yB = BB._x;
        yB = yB > dB._x ? dB._x : yB, yB = yB < TB._x ? TB._x : yB;
        let pB = BB._y;
        pB = pB > dB._y ? dB._y : pB, pB = pB < TB._y ? TB._y : pB;
        let lB = BB._z;
        return lB = lB > dB._z ? dB._z : lB, lB = lB < TB._z ? TB._z : lB, VB.YBB(yB, pB, lB), VB
      }
      static CheckExtends(BB, TB, dB) {
        TB.minimizeInPlace(BB), dB.maximizeInPlace(BB)
      }
      static Hermite(BB, TB, dB, VB, yB) {
        const pB = yB * yB,
          lB = yB * pB,
          JB = 2 * lB - 3 * pB + 1,
          YB = -2 * lB + 3 * pB,
          gB = lB - 2 * pB + yB,
          oB = lB - pB,
          kB = BB._x * JB + dB._x * YB + TB._x * gB + VB._x * oB,
          OB = BB._y * JB + dB._y * YB + TB._y * gB + VB._y * oB,
          DB = BB._z * JB + dB._z * YB + TB._z * gB + VB._z * oB;
        return new LB(kB, OB, DB)
      }
      static Hermite1stDerivative(BB, TB, dB, VB, yB) {
        const pB = new LB;
        return this.Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB), pB
      }
      static Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB) {
        const lB = yB * yB;
        return pB._x = 6 * (lB - yB) * BB._x + (3 * lB - 4 * yB + 1) * TB._x + 6 * (-lB + yB) * dB._x + (3 * lB - 2 * yB) * VB._x, pB._y = 6 * (lB - yB) * BB._y + (3 * lB - 4 * yB + 1) * TB._y + 6 * (-lB + yB) * dB._y + (3 * lB - 2 * yB) * VB._y, pB._z = 6 * (lB - yB) * BB._z + (3 * lB - 4 * yB + 1) * TB._z + 6 * (-lB + yB) * dB._z + (3 * lB - 2 * yB) * VB._z, pB._isDirty = !0, pB
      }
      static Lerp(BB, TB, dB) {
        const VB = new LB(0, 0, 0);
        return LB.LerpToRef(BB, TB, dB, VB), VB
      }
      static LerpToRef(BB, TB, dB, VB) {
        return VB._x = BB._x + (TB._x - BB._x) * dB, VB._y = BB._y + (TB._y - BB._y) * dB, VB._z = BB._z + (TB._z - BB._z) * dB, VB._isDirty = !0, VB
      }
      static Dot(BB, TB) {
        return BB._x * TB._x + BB._y * TB._y + BB._z * TB._z
      }
      dot(BB) {
        return this._x * BB._x + this._y * BB._y + this._z * BB._z
      }
      static Cross(BB, TB) {
        const dB = new LB;
        return LB.CrossToRef(BB, TB, dB), dB
      }
      static CrossToRef(BB, TB, dB) {
        const VB = BB._y * TB._z - BB._z * TB._y,
          yB = BB._z * TB._x - BB._x * TB._z,
          pB = BB._x * TB._y - BB._y * TB._x;
        return dB.YBB(VB, yB, pB), dB
      }
      static Normalize(BB) {
        const TB = LB.Zero();
        return LB.NormalizeToRef(BB, TB), TB
      }
      static NormalizeToRef(BB, TB) {
        return BB.normalizeToRef(TB), TB
      }
      static Project(BB, TB, dB, VB) {
        const yB = new LB;
        return LB.ProjectToRef(BB, TB, dB, VB, yB), yB
      }
      static ProjectToRef(BB, TB, dB, VB, yB) {
        const pB = VB.width,
          JB = VB.height,
          YB = VB.x,
          gB = VB.y,
          oB = HB.Matrix[1],
          kB = lB.c.LastCreatedEngine?.isNDCHalfZRange,
          OB = kB ? 1 : .5,
          DB = kB ? 0 : .5;
        uB.FromValuesToRef(pB / 2, 0, 0, 0, 0, -JB / 2, 0, 0, 0, 0, OB, 0, YB + pB / 2, JB / 2 + gB, DB, 1, oB);
        const EB = HB.Matrix[0];
        return TB.multiplyToRef(dB, EB), EB.multiplyToRef(oB, EB), LB.TransformCoordinatesToRef(BB, EB, yB), yB
      }
      static Reflect(BB, TB) {
        return this.ReflectToRef(BB, TB, new LB)
      }
      static ReflectToRef(BB, TB, dB) {
        const VB = EB.RD[0];
        return VB.bdB(TB).scaleInPlace(2 * LB.Dot(BB, TB)), dB.bdB(BB).qVB(VB)
      }
      static UnprojectFromTransform(BB, TB, dB, VB, yB) {
        return this.Unproject(BB, TB, dB, VB, yB, uB.IdentityReadOnly)
      }
      static Unproject(BB, TB, dB, VB, yB, pB) {
        const lB = new LB;
        return LB.UnprojectToRef(BB, TB, dB, VB, yB, pB, lB), lB
      }
      static UnprojectToRef(BB, TB, dB, VB, yB, pB, lB) {
        return LB.UnprojectFloatsToRef(BB._x, BB._y, BB._z, TB, dB, VB, yB, pB, lB), lB
      }
      static UnprojectFloatsToRef(BB, TB, dB, VB, yB, pB, JB, YB, gB) {
        const oB = HB.Matrix[0];
        pB.multiplyToRef(JB, oB), oB.multiplyToRef(YB, oB), oB.invert();
        const kB = HB.RD[0];
        return kB.x = BB / VB * 2 - 1, kB.y = -(TB / yB * 2 - 1), lB.c.LastCreatedEngine?.isNDCHalfZRange ? kB.z = dB : kB.z = 2 * dB - 1, LB.TransformCoordinatesToRef(kB, oB, gB), gB
      }
      static Minimize(BB, TB) {
        const dB = new LB;
        return dB.bdB(BB), dB.minimizeInPlace(TB), dB
      }
      static Maximize(BB, TB) {
        const dB = new LB;
        return dB.bdB(BB), dB.maximizeInPlace(TB), dB
      }
      static Distance(BB, TB) {
        return Math.sqrt(LB.DistanceSquared(BB, TB))
      }
      static DistanceSquared(BB, TB) {
        const dB = BB._x - TB._x,
          VB = BB._y - TB._y,
          yB = BB._z - TB._z;
        return dB * dB + VB * VB + yB * yB
      }
      static ProjectOnTriangleToRef(BB, TB, dB, yB, pB) {
        const lB = HB.RD[0],
          YB = HB.RD[1],
          gB = HB.RD[2],
          oB = HB.RD[3],
          kB = HB.RD[4];
        dB.subtractToRef(TB, lB), yB.subtractToRef(TB, YB), yB.subtractToRef(dB, gB);
        const OB = lB.length(),
          DB = YB.length(),
          uB = gB.length();
        if (OB < VB.b || DB < VB.b || uB < VB.b) return pB.bdB(TB), LB.Distance(BB, TB);
        BB.subtractToRef(TB, kB), LB.CrossToRef(lB, YB, oB);
        const EB = oB.length();
        if (EB < VB.b) return pB.bdB(TB), LB.Distance(BB, TB);
        oB.normalizeFromLength(EB);
        let vB = kB.length();
        if (vB < VB.b) return pB.bdB(TB), 0;
        kB.normalizeFromLength(vB);
        const mB = LB.Dot(oB, kB),
          iB = HB.RD[5],
          NB = HB.RD[6];
        iB.bdB(oB).scaleInPlace(-vB * mB), NB.bdB(BB).addInPlace(iB);
        const tB = HB.RD[4],
          fB = HB.RD[5],
          sB = HB.RD[7],
          MB = HB.RD[8];
        tB.bdB(lB).scaleInPlace(1 / OB), MB.bdB(YB).scaleInPlace(1 / DB), tB.addInPlace(MB).scaleInPlace(-1), fB.bdB(lB).scaleInPlace(-1 / OB), MB.bdB(gB).scaleInPlace(1 / uB), fB.addInPlace(MB).scaleInPlace(-1), sB.bdB(gB).scaleInPlace(-1 / uB), MB.bdB(YB).scaleInPlace(-1 / DB), sB.addInPlace(MB).scaleInPlace(-1);
        const zB = HB.RD[9];
        let wB;
        zB.bdB(NB).qVB(TB), LB.CrossToRef(tB, zB, MB), wB = LB.Dot(MB, oB);
        const UB = wB;
        zB.bdB(NB).qVB(dB), LB.CrossToRef(fB, zB, MB), wB = LB.Dot(MB, oB);
        const FB = wB;
        zB.bdB(NB).qVB(yB), LB.CrossToRef(sB, zB, MB), wB = LB.Dot(MB, oB);
        const KB = wB,
          rB = HB.RD[10];
        let IB, cB;
        UB > 0 && FB < 0 ? (rB.bdB(lB), IB = TB, cB = dB) : FB > 0 && KB < 0 ? (rB.bdB(gB), IB = dB, cB = yB) : (rB.bdB(YB).scaleInPlace(-1), IB = yB, cB = TB);
        const SB = HB.RD[9],
          PB = HB.RD[4];
        IB.subtractToRef(NB, MB), cB.subtractToRef(NB, SB), LB.CrossToRef(MB, SB, PB);
        if (!(LB.Dot(PB, oB) < 0)) return pB.bdB(NB), Math.abs(vB * mB);
        const QB = HB.RD[5];
        LB.CrossToRef(rB, PB, QB), QB.normalize();
        const RB = HB.RD[9];
        RB.bdB(IB).qVB(NB);
        const aB = RB.length();
        if (aB < VB.b) return pB.bdB(IB), LB.Distance(BB, IB);
        RB.normalizeFromLength(aB);
        const ZB = LB.Dot(QB, RB),
          XB = HB.RD[7];
        XB.bdB(NB).addInPlace(QB.scaleInPlace(aB * ZB)), MB.bdB(XB).qVB(IB), vB = rB.length(), rB.normalizeFromLength(vB);
        let WB = LB.Dot(MB, rB) / Math.max(vB, VB.b);
        return WB = (0, JB.Clamp)(WB, 0, 1), XB.bdB(IB).addInPlace(rB.scaleInPlace(WB * vB)), pB.bdB(XB), LB.Distance(BB, XB)
      }
      static Center(BB, TB) {
        return LB.CenterToRef(BB, TB, LB.Zero())
      }
      static CenterToRef(BB, TB, dB) {
        return dB.YBB((BB._x + TB._x) / 2, (BB._y + TB._y) / 2, (BB._z + TB._z) / 2)
      }
      static RotationFromAxis(BB, TB, dB) {
        const VB = new LB;
        return LB.RotationFromAxisToRef(BB, TB, dB, VB), VB
      }
      static RotationFromAxisToRef(BB, TB, dB, VB) {
        const yB = HB.Quaternion[0];
        return DB.RotationQuaternionFromAxisToRef(BB, TB, dB, yB), yB.toEulerAnglesToRef(VB), VB
      }
    }
    LB._V8PerformanceHack = new LB(.5, .5, .5), LB._UpReadOnly = LB.Up(), LB._DownReadOnly = LB.Down(), LB._LeftHandedForwardReadOnly = LB.Forward(!1), LB._RightHandedForwardReadOnly = LB.Forward(!0), LB._LeftHandedBackwardReadOnly = LB.Backward(!1), LB._RightHandedBackwardReadOnly = LB.Backward(!0), LB._RightReadOnly = LB.Right(), LB._LeftReadOnly = LB.Left(), LB._ZeroReadOnly = LB.Zero(), LB._OneReadOnly = LB.One();
    class OB {
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
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = BB, this._y = TB, this._z = dB, this._w = VB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let BB = oB(this._x);
        return BB = 397 * BB ^ oB(this._y), BB = 397 * BB ^ oB(this._z), BB = 397 * BB ^ oB(this._w), BB
      }
      FVB() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(BB, TB) {
        return void 0 === TB && (TB = 0), BB[TB] = this._x, BB[TB + 1] = this._y, BB[TB + 2] = this._z, BB[TB + 3] = this._w, this
      }
      HdB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return OB.FromArrayToRef(BB, TB, this), this
      }
      addInPlace(BB) {
        return this.x += BB._x, this.y += BB._y, this.z += BB._z, this.w += BB._w, this
      }
      addInPlaceFromFloats(BB, TB, dB, VB) {
        return this.x += BB, this.y += TB, this.z += dB, this.w += VB, this
      }
      add(BB) {
        return new OB(this._x + BB.x, this._y + BB.y, this._z + BB.z, this._w + BB.w)
      }
      addToRef(BB, TB) {
        return TB.x = this._x + BB.x, TB.y = this._y + BB.y, TB.z = this._z + BB.z, TB.w = this._w + BB.w, TB
      }
      qVB(BB) {
        return this.x -= BB.x, this.y -= BB.y, this.z -= BB.z, this.w -= BB.w, this
      }
      subtract(BB) {
        return new OB(this._x - BB.x, this._y - BB.y, this._z - BB.z, this._w - BB.w)
      }
      subtractToRef(BB, TB) {
        return TB.x = this._x - BB.x, TB.y = this._y - BB.y, TB.z = this._z - BB.z, TB.w = this._w - BB.w, TB
      }
      subtractFromFloats(BB, TB, dB, VB) {
        return new OB(this._x - BB, this._y - TB, this._z - dB, this._w - VB)
      }
      subtractFromFloatsToRef(BB, TB, dB, VB, yB) {
        return yB.x = this._x - BB, yB.y = this._y - TB, yB.z = this._z - dB, yB.w = this._w - VB, yB
      }
      fp() {
        return new OB(-this._x, -this._y, -this._z, -this._w)
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
        return new OB(this._x * BB, this._y * BB, this._z * BB, this._w * BB)
      }
      scaleToRef(BB, TB) {
        return TB.x = this._x * BB, TB.y = this._y * BB, TB.z = this._z * BB, TB.w = this._w * BB, TB
      }
      scaleAndAddToRef(BB, TB) {
        return TB.x += this._x * BB, TB.y += this._y * BB, TB.z += this._z * BB, TB.w += this._w * BB, TB
      }
      equals(BB) {
        return BB && this._x === BB.x && this._y === BB.y && this._z === BB.z && this._w === BB.w
      }
      equalsWithEpsilon(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VB.b;
        return BB && (0, JB.WithinEpsilon)(this._x, BB.x, TB) && (0, JB.WithinEpsilon)(this._y, BB.y, TB) && (0, JB.WithinEpsilon)(this._z, BB.z, TB) && (0, JB.WithinEpsilon)(this._w, BB.w, TB)
      }
      dJB(BB, TB, dB, VB) {
        return this._x === BB && this._y === TB && this._z === dB && this._w === VB
      }
      multiplyInPlace(BB) {
        return this.x *= BB.x, this.y *= BB.y, this.z *= BB.z, this.w *= BB.w, this
      }
      multiply(BB) {
        return new OB(this._x * BB.x, this._y * BB.y, this._z * BB.z, this._w * BB.w)
      }
      multiplyToRef(BB, TB) {
        return TB.x = this._x * BB.x, TB.y = this._y * BB.y, TB.z = this._z * BB.z, TB.w = this._w * BB.w, TB
      }
      multiplyByFloats(BB, TB, dB, VB) {
        return new OB(this._x * BB, this._y * TB, this._z * dB, this._w * VB)
      }
      divide(BB) {
        return new OB(this._x / BB.x, this._y / BB.y, this._z / BB.z, this._w / BB.w)
      }
      divideToRef(BB, TB) {
        return TB.x = this._x / BB.x, TB.y = this._y / BB.y, TB.z = this._z / BB.z, TB.w = this._w / BB.w, TB
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
      minimizeInPlaceFromFloats(BB, TB, dB, VB) {
        return this.x = Math.min(BB, this._x), this.y = Math.min(TB, this._y), this.z = Math.min(dB, this._z), this.w = Math.min(VB, this._w), this
      }
      maximizeInPlaceFromFloats(BB, TB, dB, VB) {
        return this.x = Math.max(BB, this._x), this.y = Math.max(TB, this._y), this.z = Math.max(dB, this._z), this.w = Math.max(VB, this._w), this
      }
      floorToRef(BB) {
        return BB.x = Math.floor(this._x), BB.y = Math.floor(this._y), BB.z = Math.floor(this._z), BB.w = Math.floor(this._w), BB
      }
      floor() {
        return new OB(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(BB) {
        return BB.x = this._x - Math.floor(this._x), BB.y = this._y - Math.floor(this._y), BB.z = this._z - Math.floor(this._z), BB.w = this._w - Math.floor(this._w), BB
      }
      fract() {
        return new OB(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new OB)
      }
      normalizeToRef(BB) {
        const TB = this.length();
        return 0 === TB || 1 === TB ? (BB.x = this._x, BB.y = this._y, BB.z = this._z, BB.w = this._w, BB) : this.scaleToRef(1 / TB, BB)
      }
      toVector3() {
        return new LB(this._x, this._y, this._z)
      }
      clone() {
        return new OB(this._x, this._y, this._z, this._w)
      }
      bdB(BB) {
        return this.x = BB.x, this.y = BB.y, this.z = BB.z, this.w = BB.w, this
      }
      YBB(BB, TB, dB, VB) {
        return this.x = BB, this.y = TB, this.z = dB, this.w = VB, this
      }
      set(BB, TB, dB, VB) {
        return this.YBB(BB, TB, dB, VB)
      }
      A4(BB) {
        return this.x = this.y = this.z = this.w = BB, this
      }
      dot(BB) {
        return this._x * BB.x + this._y * BB.y + this._z * BB.z + this._w * BB.w
      }
      static FromArray(BB, TB) {
        return TB || (TB = 0), new OB(BB[TB], BB[TB + 1], BB[TB + 2], BB[TB + 3])
      }
      static FromArrayToRef(BB, TB, dB) {
        return dB.x = BB[TB], dB.y = BB[TB + 1], dB.z = BB[TB + 2], dB.w = BB[TB + 3], dB
      }
      static FromFloatArrayToRef(BB, TB, dB) {
        return OB.FromArrayToRef(BB, TB, dB), dB
      }
      static FromFloatsToRef(BB, TB, dB, VB, yB) {
        return yB.x = BB, yB.y = TB, yB.z = dB, yB.w = VB, yB
      }
      static Zero() {
        return new OB(0, 0, 0, 0)
      }
      static One() {
        return new OB(1, 1, 1, 1)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new OB((0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        return dB.x = (0, JB.RandomRange)(BB, TB), dB.y = (0, JB.RandomRange)(BB, TB), dB.z = (0, JB.RandomRange)(BB, TB), dB.w = (0, JB.RandomRange)(BB, TB), dB
      }
      static Clamp(BB, TB, dB) {
        return OB.ClampToRef(BB, TB, dB, new OB)
      }
      static ClampToRef(BB, TB, dB, VB) {
        return VB.x = (0, JB.Clamp)(BB.x, TB.x, dB.x), VB.y = (0, JB.Clamp)(BB.y, TB.y, dB.y), VB.z = (0, JB.Clamp)(BB.z, TB.z, dB.z), VB.w = (0, JB.Clamp)(BB.w, TB.w, dB.w), VB
      }
      static CheckExtends(BB, TB, dB) {
        TB.minimizeInPlace(BB), dB.maximizeInPlace(BB)
      }
      static get ZeroReadOnly() {
        return OB._ZeroReadOnly
      }
      static Normalize(BB) {
        return OB.NormalizeToRef(BB, new OB)
      }
      static NormalizeToRef(BB, TB) {
        return BB.normalizeToRef(TB), TB
      }
      static Minimize(BB, TB) {
        const dB = new OB;
        return dB.bdB(BB), dB.minimizeInPlace(TB), dB
      }
      static Maximize(BB, TB) {
        const dB = new OB;
        return dB.bdB(BB), dB.maximizeInPlace(TB), dB
      }
      static Distance(BB, TB) {
        return Math.sqrt(OB.DistanceSquared(BB, TB))
      }
      static DistanceSquared(BB, TB) {
        const dB = BB.x - TB.x,
          VB = BB.y - TB.y,
          yB = BB.z - TB.z,
          pB = BB.w - TB.w;
        return dB * dB + VB * VB + yB * yB + pB * pB
      }
      static Center(BB, TB) {
        return OB.CenterToRef(BB, TB, new OB)
      }
      static CenterToRef(BB, TB, dB) {
        return dB.x = (BB.x + TB.x) / 2, dB.y = (BB.y + TB.y) / 2, dB.z = (BB.z + TB.z) / 2, dB.w = (BB.w + TB.w) / 2, dB
      }
      static TransformCoordinates(BB, TB) {
        return OB.TransformCoordinatesToRef(BB, TB, new OB)
      }
      static TransformCoordinatesToRef(BB, TB, dB) {
        return OB.TransformCoordinatesFromFloatsToRef(BB._x, BB._y, BB._z, TB, dB), dB
      }
      static TransformCoordinatesFromFloatsToRef(BB, TB, dB, VB, yB) {
        const pB = VB.m,
          lB = BB * pB[0] + TB * pB[4] + dB * pB[8] + pB[12],
          JB = BB * pB[1] + TB * pB[5] + dB * pB[9] + pB[13],
          YB = BB * pB[2] + TB * pB[6] + dB * pB[10] + pB[14],
          gB = BB * pB[3] + TB * pB[7] + dB * pB[11] + pB[15];
        return yB.x = lB, yB.y = JB, yB.z = YB, yB.w = gB, yB
      }
      static TransformNormal(BB, TB) {
        return OB.TransformNormalToRef(BB, TB, new OB)
      }
      static TransformNormalToRef(BB, TB, dB) {
        const VB = TB.m,
          yB = BB.x * VB[0] + BB.y * VB[4] + BB.z * VB[8],
          pB = BB.x * VB[1] + BB.y * VB[5] + BB.z * VB[9],
          lB = BB.x * VB[2] + BB.y * VB[6] + BB.z * VB[10];
        return dB.x = yB, dB.y = pB, dB.z = lB, dB.w = BB.w, dB
      }
      static TransformNormalFromFloatsToRef(BB, TB, dB, VB, yB, pB) {
        const lB = yB.m;
        return pB.x = BB * lB[0] + TB * lB[4] + dB * lB[8], pB.y = BB * lB[1] + TB * lB[5] + dB * lB[9], pB.z = BB * lB[2] + TB * lB[6] + dB * lB[10], pB.w = VB, pB
      }
      static FromVector3(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new OB(BB._x, BB._y, BB._z, TB)
      }
      static Dot(BB, TB) {
        return BB.x * TB.x + BB.y * TB.y + BB.z * TB.z + BB.w * TB.w
      }
    }
    OB._V8PerformanceHack = new OB(.5, .5, .5, .5), OB._ZeroReadOnly = OB.Zero();
    class DB {
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
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = BB, this._y = TB, this._z = dB, this._w = VB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let BB = oB(this._x);
        return BB = 397 * BB ^ oB(this._y), BB = 397 * BB ^ oB(this._z), BB = 397 * BB ^ oB(this._w), BB
      }
      FVB() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[TB] = this._x, BB[TB + 1] = this._y, BB[TB + 2] = this._z, BB[TB + 3] = this._w, this
      }
      HdB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DB.FromArrayToRef(BB, TB, this)
      }
      equals(BB) {
        return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z && this._w === BB._w
      }
      equalsWithEpsilon(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VB.b;
        return BB && (0, JB.WithinEpsilon)(this._x, BB._x, TB) && (0, JB.WithinEpsilon)(this._y, BB._y, TB) && (0, JB.WithinEpsilon)(this._z, BB._z, TB) && (0, JB.WithinEpsilon)(this._w, BB._w, TB)
      }
      isApprox(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : VB.b;
        return BB && ((0, JB.WithinEpsilon)(this._x, BB._x, TB) && (0, JB.WithinEpsilon)(this._y, BB._y, TB) && (0, JB.WithinEpsilon)(this._z, BB._z, TB) && (0, JB.WithinEpsilon)(this._w, BB._w, TB) || (0, JB.WithinEpsilon)(this._x, -BB._x, TB) && (0, JB.WithinEpsilon)(this._y, -BB._y, TB) && (0, JB.WithinEpsilon)(this._z, -BB._z, TB) && (0, JB.WithinEpsilon)(this._w, -BB._w, TB))
      }
      clone() {
        return new DB(this._x, this._y, this._z, this._w)
      }
      bdB(BB) {
        return this._x = BB._x, this._y = BB._y, this._z = BB._z, this._w = BB._w, this._isDirty = !0, this
      }
      YBB(BB, TB, dB, VB) {
        return this._x = BB, this._y = TB, this._z = dB, this._w = VB, this._isDirty = !0, this
      }
      set(BB, TB, dB, VB) {
        return this.YBB(BB, TB, dB, VB)
      }
      A4(BB) {
        return this.YBB(BB, BB, BB, BB)
      }
      add(BB) {
        return new DB(this._x + BB._x, this._y + BB._y, this._z + BB._z, this._w + BB._w)
      }
      addInPlace(BB) {
        return this._x += BB._x, this._y += BB._y, this._z += BB._z, this._w += BB._w, this._isDirty = !0, this
      }
      addToRef(BB, TB) {
        return TB._x = this._x + BB._x, TB._y = this._y + BB._y, TB._z = this._z + BB._z, TB._w = this._w + BB._w, TB._isDirty = !0, TB
      }
      addInPlaceFromFloats(BB, TB, dB, VB) {
        return this._x += BB, this._y += TB, this._z += dB, this._w += VB, this._isDirty = !0, this
      }
      subtractToRef(BB, TB) {
        return TB._x = this._x - BB._x, TB._y = this._y - BB._y, TB._z = this._z - BB._z, TB._w = this._w - BB._w, TB._isDirty = !0, TB
      }
      subtractFromFloats(BB, TB, dB, VB) {
        return this.subtractFromFloatsToRef(BB, TB, dB, VB, new DB)
      }
      subtractFromFloatsToRef(BB, TB, dB, VB, yB) {
        return yB._x = this._x - BB, yB._y = this._y - TB, yB._z = this._z - dB, yB._w = this._w - VB, yB._isDirty = !0, yB
      }
      subtract(BB) {
        return new DB(this._x - BB._x, this._y - BB._y, this._z - BB._z, this._w - BB._w)
      }
      qVB(BB) {
        return this._x -= BB._x, this._y -= BB._y, this._z -= BB._z, this._w -= BB._w, this._isDirty = !0, this
      }
      scale(BB) {
        return new DB(this._x * BB, this._y * BB, this._z * BB, this._w * BB)
      }
      scaleToRef(BB, TB) {
        return TB._x = this._x * BB, TB._y = this._y * BB, TB._z = this._z * BB, TB._w = this._w * BB, TB._isDirty = !0, TB
      }
      scaleInPlace(BB) {
        return this._x *= BB, this._y *= BB, this._z *= BB, this._w *= BB, this._isDirty = !0, this
      }
      scaleAndAddToRef(BB, TB) {
        return TB._x += this._x * BB, TB._y += this._y * BB, TB._z += this._z * BB, TB._w += this._w * BB, TB._isDirty = !0, TB
      }
      multiply(BB) {
        const TB = new DB(0, 0, 0, 1);
        return this.multiplyToRef(BB, TB), TB
      }
      multiplyToRef(BB, TB) {
        const dB = this._x * BB._w + this._y * BB._z - this._z * BB._y + this._w * BB._x,
          VB = -this._x * BB._z + this._y * BB._w + this._z * BB._x + this._w * BB._y,
          yB = this._x * BB._y - this._y * BB._x + this._z * BB._w + this._w * BB._z,
          pB = -this._x * BB._x - this._y * BB._y - this._z * BB._z + this._w * BB._w;
        return TB.YBB(dB, VB, yB, pB), TB
      }
      multiplyInPlace(BB) {
        return this.multiplyToRef(BB, this)
      }
      multiplyByFloats(BB, TB, dB, VB) {
        return this._x *= BB, this._y *= TB, this._z *= dB, this._w *= VB, this._isDirty = !0, this
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(BB, TB) {
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
      fp() {
        return this.negateToRef(new DB)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(BB) {
        return BB._x = -this._x, BB._y = -this._y, BB._z = -this._z, BB._w = -this._w, BB._isDirty = !0, BB
      }
      dJB(BB, TB, dB, VB) {
        return this._x === BB && this._y === TB && this._z === dB && this._w === VB
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
        return BB.YBB(-this._x, -this._y, -this._z, this._w), BB
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new DB(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const BB = this.conjugate(),
          TB = this.lengthSquared();
        return 0 == TB || 1 == TB || BB.scaleInPlace(1 / TB), BB
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
        const BB = new DB(0, 0, 0, 1);
        return this.normalizeToRef(BB), BB
      }
      normalizeToRef(BB) {
        const TB = this.length();
        return 0 === TB || 1 === TB ? BB.YBB(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / TB, BB)
      }
      toEulerAngles() {
        const BB = LB.Zero();
        return this.toEulerAnglesToRef(BB), BB
      }
      toEulerAnglesToRef(BB) {
        const TB = this._z,
          dB = this._x,
          VB = this._y,
          yB = this._w,
          pB = VB * TB - dB * yB,
          lB = .4999999;
        if (pB < -lB) BB._y = 2 * Math.atan2(VB, yB), BB._x = Math.PI / 2, BB._z = 0, BB._isDirty = !0;
        else if (pB > lB) BB._y = 2 * Math.atan2(VB, yB), BB._x = -Math.PI / 2, BB._z = 0, BB._isDirty = !0;
        else {
          const lB = yB * yB,
            JB = TB * TB,
            YB = dB * dB,
            gB = VB * VB;
          BB._z = Math.atan2(2 * (dB * VB + TB * yB), -JB - YB + gB + lB), BB._x = Math.asin(-2 * pB), BB._y = Math.atan2(2 * (TB * dB + VB * yB), JB - YB - gB + lB), BB._isDirty = !0
        }
        return BB
      }
      toAlphaBetaGammaToRef(BB) {
        const TB = this._z,
          dB = this._x,
          VB = this._y,
          yB = this._w,
          pB = Math.sqrt(dB * dB + VB * VB),
          lB = Math.sqrt(TB * TB + yB * yB),
          JB = 2 * Math.atan2(pB, lB),
          YB = 2 * Math.atan2(TB, yB),
          gB = 2 * Math.atan2(VB, dB),
          oB = (YB + gB) / 2,
          kB = (YB - gB) / 2;
        return BB.set(kB, JB, oB), BB
      }
      toRotationMatrix(BB) {
        return uB.FromQuaternionToRef(this, BB), BB
      }
      fromRotationMatrix(BB) {
        return DB.FromRotationMatrixToRef(BB, this), this
      }
      dot(BB) {
        return this._x * BB._x + this._y * BB._y + this._z * BB._z + this._w * BB._w
      }
      toAxisAngle() {
        const BB = LB.Zero();
        return {
          axis: BB,
          angle: this.toAxisAngleToRef(BB)
        }
      }
      toAxisAngleToRef(BB) {
        let TB;
        const dB = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          VB = this._w;
        return dB > 0 ? (TB = 2 * Math.atan2(dB, VB), BB.set(this._x / dB, this._y / dB, this._z / dB)) : (TB = 0, BB.set(1, 0, 0)), TB
      }
      static FromRotationMatrix(BB) {
        const TB = new DB;
        return DB.FromRotationMatrixToRef(BB, TB), TB
      }
      static FromRotationMatrixToRef(BB, TB) {
        const dB = BB.m,
          VB = dB[0],
          yB = dB[4],
          pB = dB[8],
          lB = dB[1],
          JB = dB[5],
          YB = dB[9],
          gB = dB[2],
          oB = dB[6],
          kB = dB[10],
          LB = VB + JB + kB;
        let OB;
        return LB > 0 ? (OB = .5 / Math.sqrt(LB + 1), TB._w = .25 / OB, TB._x = (oB - YB) * OB, TB._y = (pB - gB) * OB, TB._z = (lB - yB) * OB, TB._isDirty = !0) : VB > JB && VB > kB ? (OB = 2 * Math.sqrt(1 + VB - JB - kB), TB._w = (oB - YB) / OB, TB._x = .25 * OB, TB._y = (yB + lB) / OB, TB._z = (pB + gB) / OB, TB._isDirty = !0) : JB > kB ? (OB = 2 * Math.sqrt(1 + JB - VB - kB), TB._w = (pB - gB) / OB, TB._x = (yB + lB) / OB, TB._y = .25 * OB, TB._z = (YB + oB) / OB, TB._isDirty = !0) : (OB = 2 * Math.sqrt(1 + kB - VB - JB), TB._w = (lB - yB) / OB, TB._x = (pB + gB) / OB, TB._y = (YB + oB) / OB, TB._z = .25 * OB, TB._isDirty = !0), TB
      }
      static Dot(BB, TB) {
        return BB._x * TB._x + BB._y * TB._y + BB._z * TB._z + BB._w * TB._w
      }
      static AreClose(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const VB = DB.Dot(BB, TB);
        return 1 - VB * VB <= dB
      }
      static SmoothToRef(BB, TB, dB, VB, yB) {
        let pB = 0 === VB ? 1 : dB / VB;
        return pB = (0, JB.Clamp)(pB, 0, 1), DB.SlerpToRef(BB, TB, pB, yB), yB
      }
      static Zero() {
        return new DB(0, 0, 0, 0)
      }
      static Inverse(BB) {
        return new DB(-BB._x, -BB._y, -BB._z, BB._w)
      }
      static InverseToRef(BB, TB) {
        return TB.set(-BB._x, -BB._y, -BB._z, BB._w), TB
      }
      static Identity() {
        return new DB(0, 0, 0, 1)
      }
      static IsIdentity(BB) {
        return BB && 0 === BB._x && 0 === BB._y && 0 === BB._z && 1 === BB._w
      }
      static RotationAxis(BB, TB) {
        return DB.RotationAxisToRef(BB, TB, new DB)
      }
      static RotationAxisToRef(BB, TB, dB) {
        dB._w = Math.cos(TB / 2);
        const VB = Math.sin(TB / 2) / BB.length();
        return dB._x = BB._x * VB, dB._y = BB._y * VB, dB._z = BB._z * VB, dB._isDirty = !0, dB
      }
      static FromArray(BB, TB) {
        return TB || (TB = 0), new DB(BB[TB], BB[TB + 1], BB[TB + 2], BB[TB + 3])
      }
      static FromArrayToRef(BB, TB, dB) {
        return dB._x = BB[TB], dB._y = BB[TB + 1], dB._z = BB[TB + 2], dB._w = BB[TB + 3], dB._isDirty = !0, dB
      }
      static FromFloatsToRef(BB, TB, dB, VB, yB) {
        return yB.YBB(BB, TB, dB, VB), yB
      }
      static FromEulerAngles(BB, TB, dB) {
        const VB = new DB;
        return DB.RotationYawPitchRollToRef(TB, BB, dB, VB), VB
      }
      static FromEulerAnglesToRef(BB, TB, dB, VB) {
        return DB.RotationYawPitchRollToRef(TB, BB, dB, VB), VB
      }
      static FromEulerVector(BB) {
        const TB = new DB;
        return DB.RotationYawPitchRollToRef(BB._y, BB._x, BB._z, TB), TB
      }
      static FromEulerVectorToRef(BB, TB) {
        return DB.RotationYawPitchRollToRef(BB._y, BB._x, BB._z, TB), TB
      }
      static FromUnitVectorsToRef(BB, TB, dB) {
        let yB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : VB.b;
        const pB = LB.Dot(BB, TB) + 1;
        return pB < yB ? Math.abs(BB.x) > Math.abs(BB.z) ? dB.set(-BB.y, BB.x, 0, 0) : dB.set(0, -BB.z, BB.y, 0) : (LB.CrossToRef(BB, TB, EB.RD[0]), dB.set(EB.RD[0].x, EB.RD[0].y, EB.RD[0].z, pB)), dB.normalize()
      }
      static RotationYawPitchRoll(BB, TB, dB) {
        const VB = new DB;
        return DB.RotationYawPitchRollToRef(BB, TB, dB, VB), VB
      }
      static RotationYawPitchRollToRef(BB, TB, dB, VB) {
        const yB = .5 * dB,
          pB = .5 * TB,
          lB = .5 * BB,
          JB = Math.sin(yB),
          YB = Math.cos(yB),
          gB = Math.sin(pB),
          oB = Math.cos(pB),
          kB = Math.sin(lB),
          LB = Math.cos(lB);
        return VB._x = LB * gB * YB + kB * oB * JB, VB._y = kB * oB * YB - LB * gB * JB, VB._z = LB * oB * JB - kB * gB * YB, VB._w = LB * oB * YB + kB * gB * JB, VB._isDirty = !0, VB
      }
      static RotationAlphaBetaGamma(BB, TB, dB) {
        const VB = new DB;
        return DB.RotationAlphaBetaGammaToRef(BB, TB, dB, VB), VB
      }
      static RotationAlphaBetaGammaToRef(BB, TB, dB, VB) {
        const yB = .5 * (dB + BB),
          pB = .5 * (dB - BB),
          lB = .5 * TB;
        return VB._x = Math.cos(pB) * Math.sin(lB), VB._y = Math.sin(pB) * Math.sin(lB), VB._z = Math.sin(yB) * Math.cos(lB), VB._w = Math.cos(yB) * Math.cos(lB), VB._isDirty = !0, VB
      }
      static RotationQuaternionFromAxis(BB, TB, dB) {
        const VB = new DB(0, 0, 0, 0);
        return DB.RotationQuaternionFromAxisToRef(BB, TB, dB, VB), VB
      }
      static RotationQuaternionFromAxisToRef(BB, TB, dB, VB) {
        const yB = HB.Matrix[0];
        return BB = BB.normalizeToRef(HB.RD[0]), TB = TB.normalizeToRef(HB.RD[1]), dB = dB.normalizeToRef(HB.RD[2]), uB.FromXYZAxesToRef(BB, TB, dB, yB), DB.FromRotationMatrixToRef(yB, VB), VB
      }
      static FromLookDirectionLH(BB, TB) {
        const dB = new DB;
        return DB.FromLookDirectionLHToRef(BB, TB, dB), dB
      }
      static FromLookDirectionLHToRef(BB, TB, dB) {
        const VB = HB.Matrix[0];
        return uB.LookDirectionLHToRef(BB, TB, VB), DB.FromRotationMatrixToRef(VB, dB), dB
      }
      static FromLookDirectionRH(BB, TB) {
        const dB = new DB;
        return DB.FromLookDirectionRHToRef(BB, TB, dB), dB
      }
      static FromLookDirectionRHToRef(BB, TB, dB) {
        const VB = HB.Matrix[0];
        return uB.LookDirectionRHToRef(BB, TB, VB), DB.FromRotationMatrixToRef(VB, dB)
      }
      static Slerp(BB, TB, dB) {
        const VB = DB.Identity();
        return DB.SlerpToRef(BB, TB, dB, VB), VB
      }
      static SlerpToRef(BB, TB, dB, VB) {
        let yB, pB, lB = BB._x * TB._x + BB._y * TB._y + BB._z * TB._z + BB._w * TB._w,
          JB = !1;
        if (lB < 0 && (JB = !0, lB = -lB), lB > .999999) pB = 1 - dB, yB = JB ? -dB : dB;
        else {
          const BB = Math.acos(lB),
            TB = 1 / Math.sin(BB);
          pB = Math.sin((1 - dB) * BB) * TB, yB = JB ? -Math.sin(dB * BB) * TB : Math.sin(dB * BB) * TB
        }
        return VB._x = pB * BB._x + yB * TB._x, VB._y = pB * BB._y + yB * TB._y, VB._z = pB * BB._z + yB * TB._z, VB._w = pB * BB._w + yB * TB._w, VB._isDirty = !0, VB
      }
      static Hermite(BB, TB, dB, VB, yB) {
        const pB = yB * yB,
          lB = yB * pB,
          JB = 2 * lB - 3 * pB + 1,
          YB = -2 * lB + 3 * pB,
          gB = lB - 2 * pB + yB,
          oB = lB - pB,
          kB = BB._x * JB + dB._x * YB + TB._x * gB + VB._x * oB,
          LB = BB._y * JB + dB._y * YB + TB._y * gB + VB._y * oB,
          OB = BB._z * JB + dB._z * YB + TB._z * gB + VB._z * oB,
          uB = BB._w * JB + dB._w * YB + TB._w * gB + VB._w * oB;
        return new DB(kB, LB, OB, uB)
      }
      static Hermite1stDerivative(BB, TB, dB, VB, yB) {
        const pB = new DB;
        return this.Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB), pB
      }
      static Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB) {
        const lB = yB * yB;
        return pB._x = 6 * (lB - yB) * BB._x + (3 * lB - 4 * yB + 1) * TB._x + 6 * (-lB + yB) * dB._x + (3 * lB - 2 * yB) * VB._x, pB._y = 6 * (lB - yB) * BB._y + (3 * lB - 4 * yB + 1) * TB._y + 6 * (-lB + yB) * dB._y + (3 * lB - 2 * yB) * VB._y, pB._z = 6 * (lB - yB) * BB._z + (3 * lB - 4 * yB + 1) * TB._z + 6 * (-lB + yB) * dB._z + (3 * lB - 2 * yB) * VB._z, pB._w = 6 * (lB - yB) * BB._w + (3 * lB - 4 * yB + 1) * TB._w + 6 * (-lB + yB) * dB._w + (3 * lB - 2 * yB) * VB._w, pB._isDirty = !0, pB
      }
      static Normalize(BB) {
        const TB = DB.Zero();
        return DB.NormalizeToRef(BB, TB), TB
      }
      static NormalizeToRef(BB, TB) {
        return BB.normalizeToRef(TB), TB
      }
      static Clamp(BB, TB, dB) {
        const VB = new DB;
        return DB.ClampToRef(BB, TB, dB, VB), VB
      }
      static ClampToRef(BB, TB, dB, VB) {
        return VB.YBB((0, JB.Clamp)(BB.x, TB.x, dB.x), (0, JB.Clamp)(BB.y, TB.y, dB.y), (0, JB.Clamp)(BB.z, TB.z, dB.z), (0, JB.Clamp)(BB.w, TB.w, dB.w))
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new DB((0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).YBB((0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB), (0, JB.RandomRange)(BB, TB))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(BB, TB) {
        return Math.sqrt(DB.DistanceSquared(BB, TB))
      }
      static DistanceSquared(BB, TB) {
        const dB = BB.x - TB.x,
          VB = BB.y - TB.y,
          yB = BB.z - TB.z,
          pB = BB.w - TB.w;
        return dB * dB + VB * VB + yB * yB + pB * pB
      }
      static Center(BB, TB) {
        return DB.CenterToRef(BB, TB, DB.Zero())
      }
      static CenterToRef(BB, TB, dB) {
        return dB.YBB((BB.x + TB.x) / 2, (BB.y + TB.y) / 2, (BB.z + TB.z) / 2, (BB.w + TB.w) / 2)
      }
    }
    DB._V8PerformanceHack = new DB(.5, .5, .5, .5);
    class uB {
      static get Use64Bits() {
        return pB.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = YB.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          VB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = BB, this._isIdentity3x2 = BB || dB, this._isIdentityDirty = !this._isIdentity && TB, this._isIdentity3x2Dirty = !this._isIdentity3x2 && VB
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, pB.c.MatrixTrackPrecisionChange && pB.c.MatrixTrackedMatrices.push(this), this._m = new pB.c.MatrixCurrentType(16), this.markAsUpdated()
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
          TB = BB[0],
          dB = BB[1],
          VB = BB[2],
          yB = BB[3],
          pB = BB[4],
          lB = BB[5],
          JB = BB[6],
          YB = BB[7],
          gB = BB[8],
          oB = BB[9],
          kB = BB[10],
          LB = BB[11],
          OB = BB[12],
          DB = BB[13],
          uB = BB[14],
          HB = BB[15],
          EB = kB * HB - uB * LB,
          vB = oB * HB - DB * LB,
          mB = oB * uB - DB * kB,
          iB = gB * HB - OB * LB,
          NB = gB * uB - kB * OB,
          tB = gB * DB - OB * oB;
        return TB * +(lB * EB - JB * vB + YB * mB) + dB * -(pB * EB - JB * iB + YB * NB) + VB * +(pB * vB - lB * iB + YB * tB) + yB * -(pB * mB - lB * NB + JB * tB)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!BB) return this._m;
        const dB = this._m;
        for (let VB = 0; VB < 16; VB++) BB[TB + VB] = dB[VB];
        return this
      }
      FVB() {
        return this._m
      }
      HdB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uB.FromArrayToRef(BB, TB, this)
      }
      YBB() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        return uB.FromArrayToRef(TB, 0, this)
      }
      set() {
        const BB = this._m;
        for (let TB = 0; TB < 16; TB++) BB[TB] = TB < 0 || arguments.length <= TB ? void 0 : arguments[TB];
        return this.markAsUpdated(), this
      }
      A4(BB) {
        const TB = this._m;
        for (let dB = 0; dB < 16; dB++) TB[dB] = BB;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return uB.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(BB) {
        const TB = new uB;
        return this.addToRef(BB, TB), TB
      }
      addToRef(BB, TB) {
        const dB = this._m,
          VB = TB._m,
          yB = BB.m;
        for (let pB = 0; pB < 16; pB++) VB[pB] = dB[pB] + yB[pB];
        return TB.markAsUpdated(), TB
      }
      addToSelf(BB) {
        const TB = this._m,
          dB = BB.m;
        return TB[0] += dB[0], TB[1] += dB[1], TB[2] += dB[2], TB[3] += dB[3], TB[4] += dB[4], TB[5] += dB[5], TB[6] += dB[6], TB[7] += dB[7], TB[8] += dB[8], TB[9] += dB[9], TB[10] += dB[10], TB[11] += dB[11], TB[12] += dB[12], TB[13] += dB[13], TB[14] += dB[14], TB[15] += dB[15], this.markAsUpdated(), this
      }
      addInPlace(BB) {
        const TB = this._m,
          dB = BB.m;
        for (let VB = 0; VB < 16; VB++) TB[VB] += dB[VB];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const BB = this._m;
        for (let TB = 0; TB < 16; TB++) BB[TB] += TB < 0 || arguments.length <= TB ? void 0 : arguments[TB];
        return this.markAsUpdated(), this
      }
      subtract(BB) {
        const TB = this._m,
          dB = BB.m;
        for (let VB = 0; VB < 16; VB++) TB[VB] -= dB[VB];
        return this.markAsUpdated(), this
      }
      subtractToRef(BB, TB) {
        const dB = this._m,
          VB = BB.m,
          yB = TB._m;
        for (let pB = 0; pB < 16; pB++) yB[pB] = dB[pB] - VB[pB];
        return TB.markAsUpdated(), TB
      }
      qVB(BB) {
        const TB = this._m,
          dB = BB.m;
        for (let VB = 0; VB < 16; VB++) TB[VB] -= dB[VB];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        return this.subtractFromFloatsToRef(...TB, new uB)
      }
      subtractFromFloatsToRef() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        const VB = TB.pop(),
          yB = this._m,
          pB = VB._m,
          lB = TB;
        for (let JB = 0; JB < 16; JB++) pB[JB] = yB[JB] - lB[JB];
        return VB.markAsUpdated(), VB
      }
      invertToRef(BB) {
        return !0 === this._isIdentity ? (uB.IdentityToRef(BB), BB) : ((0, YB.e)(this, BB.FVB()) ? BB.markAsUpdated() : BB.bdB(this), BB)
      }
      addAtIndex(BB, TB) {
        return this._m[BB] += TB, this.markAsUpdated(), this
      }
      multiplyAtIndex(BB, TB) {
        return this._m[BB] *= TB, this.markAsUpdated(), this
      }
      setTranslationFromFloats(BB, TB, dB) {
        return this._m[12] = BB, this._m[13] = TB, this._m[14] = dB, this.markAsUpdated(), this
      }
      addTranslationFromFloats(BB, TB, dB) {
        return this._m[12] += BB, this._m[13] += TB, this._m[14] += dB, this.markAsUpdated(), this
      }
      setTranslation(BB) {
        return this.setTranslationFromFloats(BB._x, BB._y, BB._z)
      }
      getTranslation() {
        return new LB(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(BB) {
        return BB.x = this._m[12], BB.y = this._m[13], BB.z = this._m[14], BB
      }
      removeRotationAndScaling() {
        const BB = this.m;
        return uB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, BB[12], BB[13], BB[14], BB[15], this), this._updateIdentityStatus(0 === BB[12] && 0 === BB[13] && 0 === BB[14] && 1 === BB[15]), this
      }
      bdB(BB) {
        BB.copyToArray(this._m);
        const TB = BB;
        return this.updateFlag = TB.updateFlag, this._updateIdentityStatus(TB._isIdentity, TB._isIdentityDirty, TB._isIdentity3x2, TB._isIdentity3x2Dirty), this
      }
      copyToArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, YB.b)(this, BB, TB), this
      }
      multiply(BB) {
        const TB = new uB;
        return this.multiplyToRef(BB, TB), TB
      }
      multiplyInPlace(BB) {
        const TB = this._m,
          dB = BB.m;
        for (let VB = 0; VB < 16; VB++) TB[VB] *= dB[VB];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const BB = this._m;
        for (let TB = 0; TB < 16; TB++) BB[TB] *= TB < 0 || arguments.length <= TB ? void 0 : arguments[TB];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var BB = arguments.length, TB = new Array(BB), dB = 0; dB < BB; dB++) TB[dB] = arguments[dB];
        const VB = TB.pop(),
          yB = this._m,
          pB = VB._m,
          lB = TB;
        for (let JB = 0; JB < 16; JB++) pB[JB] = yB[JB] * lB[JB];
        return VB.markAsUpdated(), VB
      }
      multiplyToRef(BB, TB) {
        return this._isIdentity ? (TB.bdB(BB), TB) : BB._isIdentity ? (TB.bdB(this), TB) : (this.multiplyToArray(BB, TB._m, 0), TB.markAsUpdated(), TB)
      }
      multiplyToArray(BB, TB, dB) {
        return (0, YB.k)(this, BB, TB, dB), this
      }
      divide(BB) {
        return this.divideToRef(BB, new uB)
      }
      divideToRef(BB, TB) {
        const dB = this._m,
          VB = BB.m,
          yB = TB._m;
        for (let pB = 0; pB < 16; pB++) yB[pB] = dB[pB] / VB[pB];
        return TB.markAsUpdated(), TB
      }
      divideInPlace(BB) {
        const TB = this._m,
          dB = BB.m;
        for (let VB = 0; VB < 16; VB++) TB[VB] /= dB[VB];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(BB) {
        const TB = this._m,
          dB = BB.m;
        for (let VB = 0; VB < 16; VB++) TB[VB] = Math.min(TB[VB], dB[VB]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const BB = this._m;
        for (let TB = 0; TB < 16; TB++) BB[TB] = Math.min(BB[TB], TB < 0 || arguments.length <= TB ? void 0 : arguments[TB]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(BB) {
        const TB = this._m,
          dB = BB.m;
        for (let VB = 0; VB < 16; VB++) TB[VB] = Math.max(TB[VB], dB[VB]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const BB = this._m;
        for (let TB = 0; TB < 16; TB++) BB[TB] = Math.max(BB[TB], TB < 0 || arguments.length <= TB ? void 0 : arguments[TB]);
        return this.markAsUpdated(), this
      }
      fp() {
        return this.negateToRef(new uB)
      }
      negateInPlace() {
        const BB = this._m;
        for (let TB = 0; TB < 16; TB++) BB[TB] = -BB[TB];
        return this.markAsUpdated(), this
      }
      negateToRef(BB) {
        const TB = this._m,
          dB = BB._m;
        for (let VB = 0; VB < 16; VB++) dB[VB] = -TB[VB];
        return BB.markAsUpdated(), BB
      }
      equals(BB) {
        const TB = BB;
        if (!TB) return !1;
        if ((this._isIdentity || TB._isIdentity) && !this._isIdentityDirty && !TB._isIdentityDirty) return this._isIdentity && TB._isIdentity;
        const dB = this.m,
          VB = TB.m;
        return dB[0] === VB[0] && dB[1] === VB[1] && dB[2] === VB[2] && dB[3] === VB[3] && dB[4] === VB[4] && dB[5] === VB[5] && dB[6] === VB[6] && dB[7] === VB[7] && dB[8] === VB[8] && dB[9] === VB[9] && dB[10] === VB[10] && dB[11] === VB[11] && dB[12] === VB[12] && dB[13] === VB[13] && dB[14] === VB[14] && dB[15] === VB[15]
      }
      equalsWithEpsilon(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = this._m,
          VB = BB.m;
        for (let yB = 0; yB < 16; yB++)
          if (!(0, JB.WithinEpsilon)(dB[yB], VB[yB], TB)) return !1;
        return !0
      }
      dJB() {
        const BB = this._m;
        for (let TB = 0; TB < 16; TB++)
          if (BB[TB] != (TB < 0 || arguments.length <= TB ? void 0 : arguments[TB])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new uB)
      }
      floorToRef(BB) {
        const TB = this._m,
          dB = BB._m;
        for (let VB = 0; VB < 16; VB++) dB[VB] = Math.floor(TB[VB]);
        return BB.markAsUpdated(), BB
      }
      fract() {
        return this.fractToRef(new uB)
      }
      fractToRef(BB) {
        const TB = this._m,
          dB = BB._m;
        for (let VB = 0; VB < 16; VB++) dB[VB] = TB[VB] - Math.floor(TB[VB]);
        return BB.markAsUpdated(), BB
      }
      clone() {
        const BB = new uB;
        return BB.bdB(this), BB
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let BB = oB(this._m[0]);
        for (let TB = 1; TB < 16; TB++) BB = 397 * BB ^ oB(this._m[TB]);
        return BB
      }
      decomposeToTransformNode(BB) {
        return BB.rotationQuaternion = BB.rotationQuaternion || new DB, this.decompose(BB.al, BB.rotationQuaternion, BB.position)
      }
      decompose(BB, TB, dB, VB) {
        let yB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return dB && dB.A4(0), BB && BB.A4(1), TB && TB.YBB(0, 0, 0, 1), !0;
        const pB = this._m;
        if (dB && dB.YBB(pB[12], pB[13], pB[14]), (BB = BB || HB.RD[0]).x = Math.sqrt(pB[0] * pB[0] + pB[1] * pB[1] + pB[2] * pB[2]), BB.y = Math.sqrt(pB[4] * pB[4] + pB[5] * pB[5] + pB[6] * pB[6]), BB.z = Math.sqrt(pB[8] * pB[8] + pB[9] * pB[9] + pB[10] * pB[10]), VB) {
          const TB = (yB ? VB.absoluteScaling.x : VB.al.x) < 0 ? -1 : 1,
            dB = (yB ? VB.absoluteScaling.y : VB.al.y) < 0 ? -1 : 1,
            pB = (yB ? VB.absoluteScaling.z : VB.al.z) < 0 ? -1 : 1;
          BB.x *= TB, BB.y *= dB, BB.z *= pB
        } else this.determinant() <= 0 && (BB.y *= -1);
        if (0 === BB._x || 0 === BB._y || 0 === BB._z) return TB && TB.YBB(0, 0, 0, 1), !1;
        if (TB) {
          const dB = 1 / BB._x,
            VB = 1 / BB._y,
            yB = 1 / BB._z;
          uB.FromValuesToRef(pB[0] * dB, pB[1] * dB, pB[2] * dB, 0, pB[4] * VB, pB[5] * VB, pB[6] * VB, 0, pB[8] * yB, pB[9] * yB, pB[10] * yB, 0, 0, 0, 0, 1, HB.Matrix[0]), DB.FromRotationMatrixToRef(HB.Matrix[0], TB)
        }
        return !0
      }
      getRow(BB) {
        if (BB < 0 || BB > 3) return null;
        const TB = 4 * BB;
        return new OB(this._m[TB + 0], this._m[TB + 1], this._m[TB + 2], this._m[TB + 3])
      }
      getRowToRef(BB, TB) {
        if (BB >= 0 && BB <= 3) {
          const dB = 4 * BB;
          TB.x = this._m[dB + 0], TB.y = this._m[dB + 1], TB.z = this._m[dB + 2], TB.w = this._m[dB + 3]
        }
        return TB
      }
      setRow(BB, TB) {
        return this.setRowFromFloats(BB, TB.x, TB.y, TB.z, TB.w)
      }
      transpose() {
        const BB = new uB;
        return uB.TransposeToRef(this, BB), BB
      }
      transposeToRef(BB) {
        return uB.TransposeToRef(this, BB), BB
      }
      setRowFromFloats(BB, TB, dB, VB, yB) {
        if (BB < 0 || BB > 3) return this;
        const pB = 4 * BB;
        return this._m[pB + 0] = TB, this._m[pB + 1] = dB, this._m[pB + 2] = VB, this._m[pB + 3] = yB, this.markAsUpdated(), this
      }
      scale(BB) {
        const TB = new uB;
        return this.scaleToRef(BB, TB), TB
      }
      scaleToRef(BB, TB) {
        for (let dB = 0; dB < 16; dB++) TB._m[dB] = this._m[dB] * BB;
        return TB.markAsUpdated(), TB
      }
      scaleAndAddToRef(BB, TB) {
        for (let dB = 0; dB < 16; dB++) TB._m[dB] += this._m[dB] * BB;
        return TB.markAsUpdated(), TB
      }
      scaleInPlace(BB) {
        const TB = this._m;
        for (let dB = 0; dB < 16; dB++) TB[dB] *= BB;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(BB) {
        const TB = HB.Matrix[0];
        this.invertToRef(TB), TB.transposeToRef(BB);
        const dB = BB._m;
        return uB.FromValuesToRef(dB[0], dB[1], dB[2], 0, dB[4], dB[5], dB[6], 0, dB[8], dB[9], dB[10], 0, 0, 0, 0, 1, BB), BB
      }
      getRotationMatrix() {
        const BB = new uB;
        return this.getRotationMatrixToRef(BB), BB
      }
      getRotationMatrixToRef(BB) {
        const TB = HB.RD[0];
        if (!this.decompose(TB)) return uB.IdentityToRef(BB), BB;
        const dB = this._m,
          VB = 1 / TB._x,
          yB = 1 / TB._y,
          pB = 1 / TB._z;
        return uB.FromValuesToRef(dB[0] * VB, dB[1] * VB, dB[2] * VB, 0, dB[4] * yB, dB[5] * yB, dB[6] * yB, 0, dB[8] * pB, dB[9] * pB, dB[10] * pB, 0, 0, 0, 0, 1, BB), BB
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
        return this.multiplyToRef(vB, this), this
      }
      static FromArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const dB = new uB;
        return uB.FromArrayToRef(BB, TB, dB), dB
      }
      static FromArrayToRef(BB, TB, dB) {
        for (let VB = 0; VB < 16; VB++) dB._m[VB] = BB[VB + TB];
        return dB.markAsUpdated(), dB
      }
      static FromFloat32ArrayToRefScaled(BB, TB, dB, VB) {
        return VB._m[0] = BB[0 + TB] * dB, VB._m[1] = BB[1 + TB] * dB, VB._m[2] = BB[2 + TB] * dB, VB._m[3] = BB[3 + TB] * dB, VB._m[4] = BB[4 + TB] * dB, VB._m[5] = BB[5 + TB] * dB, VB._m[6] = BB[6 + TB] * dB, VB._m[7] = BB[7 + TB] * dB, VB._m[8] = BB[8 + TB] * dB, VB._m[9] = BB[9 + TB] * dB, VB._m[10] = BB[10 + TB] * dB, VB._m[11] = BB[11 + TB] * dB, VB._m[12] = BB[12 + TB] * dB, VB._m[13] = BB[13 + TB] * dB, VB._m[14] = BB[14 + TB] * dB, VB._m[15] = BB[15 + TB] * dB, VB.markAsUpdated(), VB
      }
      static get IdentityReadOnly() {
        return uB._IdentityReadOnly
      }
      static FromValuesToRef(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, uB, HB) {
        const EB = HB._m;
        EB[0] = BB, EB[1] = TB, EB[2] = dB, EB[3] = VB, EB[4] = yB, EB[5] = pB, EB[6] = lB, EB[7] = JB, EB[8] = YB, EB[9] = gB, EB[10] = oB, EB[11] = kB, EB[12] = LB, EB[13] = OB, EB[14] = DB, EB[15] = uB, HB.markAsUpdated()
      }
      static FromValues(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB, kB, LB, OB, DB, HB) {
        const EB = new uB,
          vB = EB._m;
        return vB[0] = BB, vB[1] = TB, vB[2] = dB, vB[3] = VB, vB[4] = yB, vB[5] = pB, vB[6] = lB, vB[7] = JB, vB[8] = YB, vB[9] = gB, vB[10] = oB, vB[11] = kB, vB[12] = LB, vB[13] = OB, vB[14] = DB, vB[15] = HB, EB.markAsUpdated(), EB
      }
      static Compose(BB, TB, dB) {
        const VB = new uB;
        return uB.ComposeToRef(BB, TB, dB, VB), VB
      }
      static ComposeToRef(BB, TB, dB, VB) {
        const yB = VB._m,
          pB = TB._x,
          lB = TB._y,
          JB = TB._z,
          YB = TB._w,
          gB = pB + pB,
          oB = lB + lB,
          kB = JB + JB,
          LB = pB * gB,
          OB = pB * oB,
          DB = pB * kB,
          uB = lB * oB,
          HB = lB * kB,
          EB = JB * kB,
          vB = YB * gB,
          mB = YB * oB,
          iB = YB * kB,
          NB = BB._x,
          tB = BB._y,
          fB = BB._z;
        return yB[0] = (1 - (uB + EB)) * NB, yB[1] = (OB + iB) * NB, yB[2] = (DB - mB) * NB, yB[3] = 0, yB[4] = (OB - iB) * tB, yB[5] = (1 - (LB + EB)) * tB, yB[6] = (HB + vB) * tB, yB[7] = 0, yB[8] = (DB + mB) * fB, yB[9] = (HB - vB) * fB, yB[10] = (1 - (LB + uB)) * fB, yB[11] = 0, yB[12] = dB._x, yB[13] = dB._y, yB[14] = dB._z, yB[15] = 1, VB.markAsUpdated(), VB
      }
      static Identity() {
        const BB = uB.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return BB._updateIdentityStatus(!0), BB
      }
      static IdentityToRef(BB) {
        return uB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, BB), BB._updateIdentityStatus(!0), BB
      }
      static Zero() {
        const BB = uB.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return BB._updateIdentityStatus(!1), BB
      }
      static RotationX(BB) {
        const TB = new uB;
        return uB.RotationXToRef(BB, TB), TB
      }
      static Invert(BB) {
        const TB = new uB;
        return BB.invertToRef(TB), TB
      }
      static RotationXToRef(BB, TB) {
        const dB = Math.sin(BB),
          VB = Math.cos(BB);
        return uB.FromValuesToRef(1, 0, 0, 0, 0, VB, dB, 0, 0, -dB, VB, 0, 0, 0, 0, 1, TB), TB._updateIdentityStatus(1 === VB && 0 === dB), TB
      }
      static RotationY(BB) {
        const TB = new uB;
        return uB.RotationYToRef(BB, TB), TB
      }
      static RotationYToRef(BB, TB) {
        const dB = Math.sin(BB),
          VB = Math.cos(BB);
        return uB.FromValuesToRef(VB, 0, -dB, 0, 0, 1, 0, 0, dB, 0, VB, 0, 0, 0, 0, 1, TB), TB._updateIdentityStatus(1 === VB && 0 === dB), TB
      }
      static RotationZ(BB) {
        const TB = new uB;
        return uB.RotationZToRef(BB, TB), TB
      }
      static RotationZToRef(BB, TB) {
        const dB = Math.sin(BB),
          VB = Math.cos(BB);
        return uB.FromValuesToRef(VB, dB, 0, 0, -dB, VB, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, TB), TB._updateIdentityStatus(1 === VB && 0 === dB), TB
      }
      static RotationAxis(BB, TB) {
        const dB = new uB;
        return uB.RotationAxisToRef(BB, TB, dB), dB
      }
      static RotationAxisToRef(BB, TB, dB) {
        const VB = Math.sin(-TB),
          yB = Math.cos(-TB),
          pB = 1 - yB;
        BB = BB.normalizeToRef(HB.RD[0]);
        const lB = dB._m;
        return lB[0] = BB._x * BB._x * pB + yB, lB[1] = BB._x * BB._y * pB - BB._z * VB, lB[2] = BB._x * BB._z * pB + BB._y * VB, lB[3] = 0, lB[4] = BB._y * BB._x * pB + BB._z * VB, lB[5] = BB._y * BB._y * pB + yB, lB[6] = BB._y * BB._z * pB - BB._x * VB, lB[7] = 0, lB[8] = BB._z * BB._x * pB - BB._y * VB, lB[9] = BB._z * BB._y * pB + BB._x * VB, lB[10] = BB._z * BB._z * pB + yB, lB[11] = 0, lB[12] = 0, lB[13] = 0, lB[14] = 0, lB[15] = 1, dB.markAsUpdated(), dB
      }
      static RotationAlignToRef(BB, TB, dB) {
        let yB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pB = LB.Dot(TB, BB),
          lB = dB._m;
        if (pB < -1 + VB.b) lB[0] = -1, lB[1] = 0, lB[2] = 0, lB[3] = 0, lB[4] = 0, lB[5] = yB ? 1 : -1, lB[6] = 0, lB[7] = 0, lB[8] = 0, lB[9] = 0, lB[10] = yB ? -1 : 1, lB[11] = 0;
        else {
          const dB = LB.Cross(TB, BB),
            VB = 1 / (1 + pB);
          lB[0] = dB._x * dB._x * VB + pB, lB[1] = dB._y * dB._x * VB - dB._z, lB[2] = dB._z * dB._x * VB + dB._y, lB[3] = 0, lB[4] = dB._x * dB._y * VB + dB._z, lB[5] = dB._y * dB._y * VB + pB, lB[6] = dB._z * dB._y * VB - dB._x, lB[7] = 0, lB[8] = dB._x * dB._z * VB - dB._y, lB[9] = dB._y * dB._z * VB + dB._x, lB[10] = dB._z * dB._z * VB + pB, lB[11] = 0
        }
        return lB[12] = 0, lB[13] = 0, lB[14] = 0, lB[15] = 1, dB.markAsUpdated(), dB
      }
      static RotationYawPitchRoll(BB, TB, dB) {
        const VB = new uB;
        return uB.RotationYawPitchRollToRef(BB, TB, dB, VB), VB
      }
      static RotationYawPitchRollToRef(BB, TB, dB, VB) {
        return DB.RotationYawPitchRollToRef(BB, TB, dB, HB.Quaternion[0]), HB.Quaternion[0].toRotationMatrix(VB), VB
      }
      static Scaling(BB, TB, dB) {
        const VB = new uB;
        return uB.ScalingToRef(BB, TB, dB, VB), VB
      }
      static ScalingToRef(BB, TB, dB, VB) {
        return uB.FromValuesToRef(BB, 0, 0, 0, 0, TB, 0, 0, 0, 0, dB, 0, 0, 0, 0, 1, VB), VB._updateIdentityStatus(1 === BB && 1 === TB && 1 === dB), VB
      }
      static Translation(BB, TB, dB) {
        const VB = new uB;
        return uB.TranslationToRef(BB, TB, dB, VB), VB
      }
      static TranslationToRef(BB, TB, dB, VB) {
        return uB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, BB, TB, dB, 1, VB), VB._updateIdentityStatus(0 === BB && 0 === TB && 0 === dB), VB
      }
      static Lerp(BB, TB, dB) {
        const VB = new uB;
        return uB.LerpToRef(BB, TB, dB, VB), VB
      }
      static LerpToRef(BB, TB, dB, VB) {
        const yB = VB._m,
          pB = BB.m,
          lB = TB.m;
        for (let JB = 0; JB < 16; JB++) yB[JB] = pB[JB] * (1 - dB) + lB[JB] * dB;
        return VB.markAsUpdated(), VB
      }
      static DecomposeLerp(BB, TB, dB) {
        const VB = new uB;
        return uB.DecomposeLerpToRef(BB, TB, dB, VB), VB
      }
      static DecomposeLerpToRef(BB, TB, dB, VB) {
        const yB = HB.RD[0],
          pB = HB.Quaternion[0],
          lB = HB.RD[1];
        BB.decompose(yB, pB, lB);
        const JB = HB.RD[2],
          YB = HB.Quaternion[1],
          gB = HB.RD[3];
        TB.decompose(JB, YB, gB);
        const oB = HB.RD[4];
        LB.LerpToRef(yB, JB, dB, oB);
        const kB = HB.Quaternion[2];
        DB.SlerpToRef(pB, YB, dB, kB);
        const OB = HB.RD[5];
        return LB.LerpToRef(lB, gB, dB, OB), uB.ComposeToRef(oB, kB, OB, VB), VB
      }
      static LookAtLH(BB, TB, dB) {
        const VB = new uB;
        return uB.LookAtLHToRef(BB, TB, dB, VB), VB
      }
      static LookAtLHToRef(BB, TB, dB, VB) {
        const yB = HB.RD[0],
          pB = HB.RD[1],
          lB = HB.RD[2];
        TB.subtractToRef(BB, lB), lB.normalize(), LB.CrossToRef(dB, lB, yB);
        const JB = yB.lengthSquared();
        0 === JB ? yB.x = 1 : yB.normalizeFromLength(Math.sqrt(JB)), LB.CrossToRef(lB, yB, pB), pB.normalize();
        const YB = -LB.Dot(yB, BB),
          gB = -LB.Dot(pB, BB),
          oB = -LB.Dot(lB, BB);
        return uB.FromValuesToRef(yB._x, pB._x, lB._x, 0, yB._y, pB._y, lB._y, 0, yB._z, pB._z, lB._z, 0, YB, gB, oB, 1, VB), VB
      }
      static LookAtRH(BB, TB, dB) {
        const VB = new uB;
        return uB.LookAtRHToRef(BB, TB, dB, VB), VB
      }
      static LookAtRHToRef(BB, TB, dB, VB) {
        const yB = HB.RD[0],
          pB = HB.RD[1],
          lB = HB.RD[2];
        BB.subtractToRef(TB, lB), lB.normalize(), LB.CrossToRef(dB, lB, yB);
        const JB = yB.lengthSquared();
        0 === JB ? yB.x = 1 : yB.normalizeFromLength(Math.sqrt(JB)), LB.CrossToRef(lB, yB, pB), pB.normalize();
        const YB = -LB.Dot(yB, BB),
          gB = -LB.Dot(pB, BB),
          oB = -LB.Dot(lB, BB);
        return uB.FromValuesToRef(yB._x, pB._x, lB._x, 0, yB._y, pB._y, lB._y, 0, yB._z, pB._z, lB._z, 0, YB, gB, oB, 1, VB), VB
      }
      static LookDirectionLH(BB, TB) {
        const dB = new uB;
        return uB.LookDirectionLHToRef(BB, TB, dB), dB
      }
      static LookDirectionLHToRef(BB, TB, dB) {
        const VB = HB.RD[0];
        VB.bdB(BB), VB.scaleInPlace(-1);
        const yB = HB.RD[1];
        return LB.CrossToRef(TB, VB, yB), uB.FromValuesToRef(yB._x, yB._y, yB._z, 0, TB._x, TB._y, TB._z, 0, VB._x, VB._y, VB._z, 0, 0, 0, 0, 1, dB), dB
      }
      static LookDirectionRH(BB, TB) {
        const dB = new uB;
        return uB.LookDirectionRHToRef(BB, TB, dB), dB
      }
      static LookDirectionRHToRef(BB, TB, dB) {
        const VB = HB.RD[2];
        return LB.CrossToRef(TB, BB, VB), uB.FromValuesToRef(VB._x, VB._y, VB._z, 0, TB._x, TB._y, TB._z, 0, BB._x, BB._y, BB._z, 0, 0, 0, 0, 1, dB), dB
      }
      static OrthoLH(BB, TB, dB, VB, yB) {
        const pB = new uB;
        return uB.OrthoLHToRef(BB, TB, dB, VB, pB, yB), pB
      }
      static OrthoLHToRef(BB, TB, dB, VB, yB, pB) {
        const lB = 2 / BB,
          JB = 2 / TB,
          YB = 2 / (VB - dB),
          gB = -(VB + dB) / (VB - dB);
        return uB.FromValuesToRef(lB, 0, 0, 0, 0, JB, 0, 0, 0, 0, YB, 0, 0, 0, gB, 1, yB), pB && yB.multiplyToRef(vB, yB), yB._updateIdentityStatus(1 === lB && 1 === JB && 1 === YB && 0 === gB), yB
      }
      static OrthoOffCenterLH(BB, TB, dB, VB, yB, pB, lB) {
        const JB = new uB;
        return uB.OrthoOffCenterLHToRef(BB, TB, dB, VB, yB, pB, JB, lB), JB
      }
      static OrthoOffCenterLHToRef(BB, TB, dB, VB, yB, pB, lB, JB) {
        const YB = 2 / (TB - BB),
          gB = 2 / (VB - dB),
          oB = 2 / (pB - yB),
          kB = -(pB + yB) / (pB - yB),
          LB = (BB + TB) / (BB - TB),
          OB = (VB + dB) / (dB - VB);
        return uB.FromValuesToRef(YB, 0, 0, 0, 0, gB, 0, 0, 0, 0, oB, 0, LB, OB, kB, 1, lB), JB && lB.multiplyToRef(vB, lB), lB.markAsUpdated(), lB
      }
      static ObliqueOffCenterLHToRef(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
        const kB = -lB * Math.cos(JB),
          LB = -lB * Math.sin(JB);
        return uB.TranslationToRef(0, 0, -YB, HB.Matrix[1]), uB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, kB, LB, 1, 0, 0, 0, 0, 1, HB.Matrix[0]), HB.Matrix[1].multiplyToRef(HB.Matrix[0], HB.Matrix[0]), uB.TranslationToRef(0, 0, YB, HB.Matrix[1]), HB.Matrix[0].multiplyToRef(HB.Matrix[1], HB.Matrix[0]), uB.OrthoOffCenterLHToRef(BB, TB, dB, VB, yB, pB, gB, oB), HB.Matrix[0].multiplyToRef(gB, gB), gB
      }
      static OrthoOffCenterRH(BB, TB, dB, VB, yB, pB, lB) {
        const JB = new uB;
        return uB.OrthoOffCenterRHToRef(BB, TB, dB, VB, yB, pB, JB, lB), JB
      }
      static OrthoOffCenterRHToRef(BB, TB, dB, VB, yB, pB, lB, JB) {
        return uB.OrthoOffCenterLHToRef(BB, TB, dB, VB, yB, pB, lB, JB), lB._m[10] *= -1, lB
      }
      static ObliqueOffCenterRHToRef(BB, TB, dB, VB, yB, pB, lB, JB, YB, gB, oB) {
        const kB = lB * Math.cos(JB),
          LB = lB * Math.sin(JB);
        return uB.TranslationToRef(0, 0, YB, HB.Matrix[1]), uB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, kB, LB, 1, 0, 0, 0, 0, 1, HB.Matrix[0]), HB.Matrix[1].multiplyToRef(HB.Matrix[0], HB.Matrix[0]), uB.TranslationToRef(0, 0, -YB, HB.Matrix[1]), HB.Matrix[0].multiplyToRef(HB.Matrix[1], HB.Matrix[0]), uB.OrthoOffCenterRHToRef(BB, TB, dB, VB, yB, pB, gB, oB), HB.Matrix[0].multiplyToRef(gB, gB), gB
      }
      static PerspectiveLH(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const lB = new uB,
          JB = 2 * dB / BB,
          YB = 2 * dB / TB,
          gB = (VB + dB) / (VB - dB),
          oB = -2 * VB * dB / (VB - dB),
          kB = Math.tan(pB);
        return uB.FromValuesToRef(JB, 0, 0, 0, 0, YB, 0, kB, 0, 0, gB, 1, 0, 0, oB, 0, lB), yB && lB.multiplyToRef(vB, lB), lB._updateIdentityStatus(!1), lB
      }
      static PerspectiveFovLH(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const JB = new uB;
        return uB.PerspectiveFovLHToRef(BB, TB, dB, VB, JB, !0, yB, pB, lB), JB
      }
      static PerspectiveFovLHToRef(BB, TB, dB, VB, yB) {
        let pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lB = arguments.length > 6 ? arguments[6] : void 0,
          JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          YB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const gB = dB,
          oB = VB,
          kB = 1 / Math.tan(.5 * BB),
          LB = pB ? kB / TB : kB,
          OB = pB ? kB : kB * TB,
          DB = YB && 0 === gB ? -1 : 0 !== oB ? (oB + gB) / (oB - gB) : 1,
          HB = YB && 0 === gB ? 2 * oB : 0 !== oB ? -2 * oB * gB / (oB - gB) : -2 * gB,
          EB = Math.tan(JB);
        return uB.FromValuesToRef(LB, 0, 0, 0, 0, OB, 0, EB, 0, 0, DB, 1, 0, 0, HB, 0, yB), lB && yB.multiplyToRef(vB, yB), yB._updateIdentityStatus(!1), yB
      }
      static PerspectiveFovReverseLHToRef(BB, TB, dB, VB, yB) {
        let pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lB = arguments.length > 6 ? arguments[6] : void 0,
          JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const YB = 1 / Math.tan(.5 * BB),
          gB = pB ? YB / TB : YB,
          oB = pB ? YB : YB * TB,
          kB = Math.tan(JB);
        return uB.FromValuesToRef(gB, 0, 0, 0, 0, oB, 0, kB, 0, 0, -dB, 1, 0, 0, 1, 0, yB), lB && yB.multiplyToRef(vB, yB), yB._updateIdentityStatus(!1), yB
      }
      static PerspectiveFovRH(BB, TB, dB, VB, yB) {
        let pB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          lB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const JB = new uB;
        return uB.PerspectiveFovRHToRef(BB, TB, dB, VB, JB, !0, yB, pB, lB), JB
      }
      static PerspectiveFovRHToRef(BB, TB, dB, VB, yB) {
        let pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lB = arguments.length > 6 ? arguments[6] : void 0,
          JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          YB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const gB = dB,
          oB = VB,
          kB = 1 / Math.tan(.5 * BB),
          LB = pB ? kB / TB : kB,
          OB = pB ? kB : kB * TB,
          DB = YB && 0 === gB ? 1 : 0 !== oB ? -(oB + gB) / (oB - gB) : -1,
          HB = YB && 0 === gB ? 2 * oB : 0 !== oB ? -2 * oB * gB / (oB - gB) : -2 * gB,
          EB = Math.tan(JB);
        return uB.FromValuesToRef(LB, 0, 0, 0, 0, OB, 0, EB, 0, 0, DB, -1, 0, 0, HB, 0, yB), lB && yB.multiplyToRef(vB, yB), yB._updateIdentityStatus(!1), yB
      }
      static PerspectiveFovReverseRHToRef(BB, TB, dB, VB, yB) {
        let pB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          lB = arguments.length > 6 ? arguments[6] : void 0,
          JB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const YB = 1 / Math.tan(.5 * BB),
          gB = pB ? YB / TB : YB,
          oB = pB ? YB : YB * TB,
          kB = Math.tan(JB);
        return uB.FromValuesToRef(gB, 0, 0, 0, 0, oB, 0, kB, 0, 0, -dB, -1, 0, 0, -1, 0, yB), lB && yB.multiplyToRef(vB, yB), yB._updateIdentityStatus(!1), yB
      }
      static GetFinalMatrix(BB, TB, dB, VB, yB, pB) {
        const lB = BB.width,
          JB = BB.height,
          YB = BB.x,
          gB = BB.y,
          oB = uB.FromValues(lB / 2, 0, 0, 0, 0, -JB / 2, 0, 0, 0, 0, pB - yB, 0, YB + lB / 2, JB / 2 + gB, yB, 1),
          kB = new uB;
        return TB.multiplyToRef(dB, kB), kB.multiplyToRef(VB, kB), kB.multiplyToRef(oB, kB)
      }
      static GetAsMatrix2x2(BB) {
        const TB = BB.m,
          dB = [TB[0], TB[1], TB[4], TB[5]];
        return pB.c.MatrixUse64Bits ? dB : new Float32Array(dB)
      }
      static GetAsMatrix3x3(BB) {
        const TB = BB.m,
          dB = [TB[0], TB[1], TB[2], TB[4], TB[5], TB[6], TB[8], TB[9], TB[10]];
        return pB.c.MatrixUse64Bits ? dB : new Float32Array(dB)
      }
      static Transpose(BB) {
        const TB = new uB;
        return uB.TransposeToRef(BB, TB), TB
      }
      static TransposeToRef(BB, TB) {
        const dB = BB.m,
          VB = dB[0],
          yB = dB[4],
          pB = dB[8],
          lB = dB[12],
          JB = dB[1],
          YB = dB[5],
          gB = dB[9],
          oB = dB[13],
          kB = dB[2],
          LB = dB[6],
          OB = dB[10],
          DB = dB[14],
          uB = dB[3],
          HB = dB[7],
          EB = dB[11],
          vB = dB[15],
          mB = TB._m;
        return mB[0] = VB, mB[1] = yB, mB[2] = pB, mB[3] = lB, mB[4] = JB, mB[5] = YB, mB[6] = gB, mB[7] = oB, mB[8] = kB, mB[9] = LB, mB[10] = OB, mB[11] = DB, mB[12] = uB, mB[13] = HB, mB[14] = EB, mB[15] = vB, TB.markAsUpdated(), TB._updateIdentityStatus(BB._isIdentity, BB._isIdentityDirty), TB
      }
      static Reflection(BB) {
        const TB = new uB;
        return uB.ReflectionToRef(BB, TB), TB
      }
      static ReflectionToRef(BB, TB) {
        BB.normalize();
        const dB = BB.normal.x,
          VB = BB.normal.y,
          yB = BB.normal.z,
          pB = -2 * dB,
          lB = -2 * VB,
          JB = -2 * yB;
        return uB.FromValuesToRef(pB * dB + 1, lB * dB, JB * dB, 0, pB * VB, lB * VB + 1, JB * VB, 0, pB * yB, lB * yB, JB * yB + 1, 0, pB * BB.d, lB * BB.d, JB * BB.d, 1, TB), TB
      }
      static FromXYZAxesToRef(BB, TB, dB, VB) {
        return uB.FromValuesToRef(BB._x, BB._y, BB._z, 0, TB._x, TB._y, TB._z, 0, dB._x, dB._y, dB._z, 0, 0, 0, 0, 1, VB), VB
      }
      static FromQuaternionToRef(BB, TB) {
        const dB = BB._x * BB._x,
          VB = BB._y * BB._y,
          yB = BB._z * BB._z,
          pB = BB._x * BB._y,
          lB = BB._z * BB._w,
          JB = BB._z * BB._x,
          YB = BB._y * BB._w,
          gB = BB._y * BB._z,
          oB = BB._x * BB._w;
        return TB._m[0] = 1 - 2 * (VB + yB), TB._m[1] = 2 * (pB + lB), TB._m[2] = 2 * (JB - YB), TB._m[3] = 0, TB._m[4] = 2 * (pB - lB), TB._m[5] = 1 - 2 * (yB + dB), TB._m[6] = 2 * (gB + oB), TB._m[7] = 0, TB._m[8] = 2 * (JB + YB), TB._m[9] = 2 * (gB - oB), TB._m[10] = 1 - 2 * (VB + dB), TB._m[11] = 0, TB._m[12] = 0, TB._m[13] = 0, TB._m[14] = 0, TB._m[15] = 1, TB.markAsUpdated(), TB
      }
    }
    uB._IdentityReadOnly = uB.Identity();
    class HB {}
    HB.RD = (0, yB.d)(11, LB.Zero), HB.Matrix = (0, yB.d)(2, uB.Identity), HB.Quaternion = (0, yB.d)(3, DB.Zero);
    class EB {}
    EB.Vector2 = (0, yB.d)(3, kB.Zero), EB.RD = (0, yB.d)(13, LB.Zero), EB.Vector4 = (0, yB.d)(3, OB.Zero), EB.Quaternion = (0, yB.d)(3, DB.Zero), EB.Matrix = (0, yB.d)(8, uB.Identity);
    const vB = uB.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let mB = !1;

    function iB() {
      mB || (mB = !0, Object.defineProperties(kB.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(LB.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(OB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(DB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(uB.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, gB.g)("BABYLON.Vector2", kB), (0, gB.g)("BABYLON.Vector3", LB), (0, gB.g)("BABYLON.Vector4", OB), (0, gB.g)("BABYLON.Matrix", uB))
    }
  },
  36150: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    const VB = "undefined" !== typeof WeakRef;
    class yB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(BB, TB, dB, VB)
      }
      initialize(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = BB, this.skipNextObservers = TB, this.target = dB, this.currentTarget = VB, this
      }
    }
    class pB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = BB, this.mask = TB, this.scope = dB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(BB)
      }
    }
    class lB {
      static FromPromise(BB, TB) {
        const dB = new lB;
        return BB.then((BB => {
          dB.notifyObservers(BB)
        })).catch((BB => {
          if (!TB) throw BB;
          TB.notifyObservers(BB)
        })), dB
      }
      get observers() {
        return this._observers
      }
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = TB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new yB(0), BB && (this._onObserverAdded = BB)
      }
      add(BB) {
        let TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!BB) return null;
        const yB = new pB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        yB.unregisterOnNextCall = dB, TB ? this._observers.unshift(yB) : this._observers.push(yB), this._onObserverAdded && this._onObserverAdded(yB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(yB, this._lastNotifiedValue);
        const lB = VB ? new WeakRef(this) : {
          deref: () => this
        };
        return yB._remove = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const TB = lB.deref();
          TB && (BB ? TB.remove(yB) : TB._remove(yB))
        }, yB
      }
      addOnce(BB) {
        return this.add(BB, void 0, void 0, void 0, !0)
      }
      remove(BB) {
        if (!BB) return !1;
        BB._remove = null;
        return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
      }
      removeCallback(BB, TB) {
        for (let dB = 0; dB < this._observers.length; dB++) {
          const VB = this._observers[dB];
          if (!VB._willBeUnregistered && (VB.callback === BB && (!TB || TB === VB.scope))) return this._deferUnregister(VB), !0
        }
        return !1
      }
      _deferUnregister(BB) {
        BB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, BB.unregisterOnNextCall = !1, BB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(BB)
        }), 0))
      }
      _remove(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB) return !1;
        const dB = this._observers.indexOf(BB);
        return -1 !== dB && (TB && this._numObserversMarkedAsDeleted--, this._observers.splice(dB, 1), !0)
      }
      makeObserverTopPriority(BB) {
        this._remove(BB, !1), this._observers.unshift(BB)
      }
      makeObserverBottomPriority(BB) {
        this._remove(BB, !1), this._observers.push(BB)
      }
      notifyObservers(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BB), !this._observers.length) return !0;
        const pB = this._eventState;
        pB.mask = TB, pB.target = dB, pB.currentTarget = VB, pB.skipNextObservers = !1, pB.lastReturnValue = BB, pB.userInfo = yB;
        for (const lB of this._observers)
          if (!lB._willBeUnregistered && (lB.mask & TB && (lB.unregisterOnNextCall && this._deferUnregister(lB), lB.scope ? pB.lastReturnValue = lB.callback.apply(lB.scope, [BB, pB]) : pB.lastReturnValue = lB.callback(BB, pB)), pB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = TB), BB._willBeUnregistered) return;
        const VB = this._eventState;
        VB.mask = dB, VB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(TB, VB)
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
        const BB = new lB;
        return BB._observers = this._observers.slice(0), BB
      }
      hasSpecificMask() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const TB of this._observers)
          if (TB.mask & BB || TB.mask === BB) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);