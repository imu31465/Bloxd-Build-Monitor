export const id = 236;
export const ids = [236];
export const modules = {
  37147: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(37153);
    class JB {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    JB.Instances = [], JB.OnEnginesDisposedObservable = new TB.b, JB._LastCreatedScene = null, JB.UseFallbackTexture = !0, JB.FallbackTexture = ""
  },
  37138: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => TB
    });
    class TB {
      static SetMatrixPrecision(BB) {
        if (TB.MatrixTrackPrecisionChange = !1, BB && !TB.MatrixUse64Bits && TB.MatrixTrackedMatrices)
          for (let IB = 0; IB < TB.MatrixTrackedMatrices.length; ++IB) {
            const BB = TB.MatrixTrackedMatrices[IB],
              ZB = BB._m;
            BB._m = new Array(16);
            for (let IB = 0; IB < 16; ++IB) BB._m[IB] = ZB[IB]
          }
        TB.MatrixUse64Bits = BB, TB.MatrixCurrentType = TB.MatrixUse64Bits ? Array : Float32Array, TB.MatrixTrackedMatrices = null
      }
    }
    TB.MatrixUse64Bits = !1, TB.MatrixTrackPrecisionChange = !0, TB.MatrixCurrentType = Float32Array, TB.MatrixTrackedMatrices = []
  },
  37166: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => vB,
      c: () => cB,
      f: () => kB,
      i: () => TB,
      l: () => oB,
      n: () => GB
    });
    class TB {}

    function JB(BB) {
      BB.updateFlag = TB._UpdateFlagSeed++
    }

    function oB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const JB = BB.HTB(),
        oB = IB.HTB(),
        GB = JB[0],
        vB = JB[1],
        kB = JB[2],
        cB = JB[3],
        nB = JB[4],
        hB = JB[5],
        zB = JB[6],
        FB = JB[7],
        NB = JB[8],
        gB = JB[9],
        qB = JB[10],
        yB = JB[11],
        UB = JB[12],
        WB = JB[13],
        dB = JB[14],
        CB = JB[15],
        QB = oB[0],
        sB = oB[1],
        wB = oB[2],
        OB = oB[3],
        YB = oB[4],
        iB = oB[5],
        pB = oB[6],
        aB = oB[7],
        HB = oB[8],
        MB = oB[9],
        jB = oB[10],
        PB = oB[11],
        RB = oB[12],
        rB = oB[13],
        mB = oB[14],
        XB = oB[15];
      ZB[TB] = GB * QB + vB * YB + kB * HB + cB * RB, ZB[TB + 1] = GB * sB + vB * iB + kB * MB + cB * rB, ZB[TB + 2] = GB * wB + vB * pB + kB * jB + cB * mB, ZB[TB + 3] = GB * OB + vB * aB + kB * PB + cB * XB, ZB[TB + 4] = nB * QB + hB * YB + zB * HB + FB * RB, ZB[TB + 5] = nB * sB + hB * iB + zB * MB + FB * rB, ZB[TB + 6] = nB * wB + hB * pB + zB * jB + FB * mB, ZB[TB + 7] = nB * OB + hB * aB + zB * PB + FB * XB, ZB[TB + 8] = NB * QB + gB * YB + qB * HB + yB * RB, ZB[TB + 9] = NB * sB + gB * iB + qB * MB + yB * rB, ZB[TB + 10] = NB * wB + gB * pB + qB * jB + yB * mB, ZB[TB + 11] = NB * OB + gB * aB + qB * PB + yB * XB, ZB[TB + 12] = UB * QB + WB * YB + dB * HB + CB * RB, ZB[TB + 13] = UB * sB + WB * iB + dB * MB + CB * rB, ZB[TB + 14] = UB * wB + WB * pB + dB * jB + CB * mB, ZB[TB + 15] = UB * OB + WB * aB + dB * PB + CB * XB
    }

    function GB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      oB(BB, IB, ZB.HTB(), TB), JB(ZB)
    }

    function vB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const TB = BB.HTB();
      IB[ZB] = TB[0], IB[ZB + 1] = TB[1], IB[ZB + 2] = TB[2], IB[ZB + 3] = TB[3], IB[ZB + 4] = TB[4], IB[ZB + 5] = TB[5], IB[ZB + 6] = TB[6], IB[ZB + 7] = TB[7], IB[ZB + 8] = TB[8], IB[ZB + 9] = TB[9], IB[ZB + 10] = TB[10], IB[ZB + 11] = TB[11], IB[ZB + 12] = TB[12], IB[ZB + 13] = TB[13], IB[ZB + 14] = TB[14], IB[ZB + 15] = TB[15]
    }

    function kB(BB, IB) {
      const ZB = cB(BB, IB.HTB());
      return ZB && JB(IB), ZB
    }

    function cB(BB, IB) {
      const ZB = BB.HTB(),
        TB = ZB[0],
        JB = ZB[1],
        oB = ZB[2],
        GB = ZB[3],
        vB = ZB[4],
        kB = ZB[5],
        cB = ZB[6],
        nB = ZB[7],
        hB = ZB[8],
        zB = ZB[9],
        FB = ZB[10],
        NB = ZB[11],
        gB = ZB[12],
        qB = ZB[13],
        yB = ZB[14],
        UB = ZB[15],
        WB = FB * UB - yB * NB,
        dB = zB * UB - qB * NB,
        CB = zB * yB - qB * FB,
        QB = hB * UB - gB * NB,
        sB = hB * yB - FB * gB,
        wB = hB * qB - gB * zB,
        OB = +(kB * WB - cB * dB + nB * CB),
        YB = -(vB * WB - cB * QB + nB * sB),
        iB = +(vB * dB - kB * QB + nB * wB),
        pB = -(vB * CB - kB * sB + cB * wB),
        aB = TB * OB + JB * YB + oB * iB + GB * pB;
      if (0 === aB) return !1;
      const HB = 1 / aB,
        MB = cB * UB - yB * nB,
        jB = kB * UB - qB * nB,
        PB = kB * yB - qB * cB,
        RB = vB * UB - gB * nB,
        rB = vB * yB - gB * cB,
        mB = vB * qB - gB * kB,
        XB = cB * NB - FB * nB,
        LB = kB * NB - zB * nB,
        eB = kB * FB - zB * cB,
        uB = vB * NB - hB * nB,
        fB = vB * FB - hB * cB,
        lB = vB * zB - hB * kB,
        AB = -(JB * WB - oB * dB + GB * CB),
        tB = +(TB * WB - oB * QB + GB * sB),
        bB = -(TB * dB - JB * QB + GB * wB),
        xB = +(TB * CB - JB * sB + oB * wB),
        EB = +(JB * MB - oB * jB + GB * PB),
        DB = -(TB * MB - oB * RB + GB * rB),
        KB = +(TB * jB - JB * RB + GB * mB),
        VB = -(TB * PB - JB * rB + oB * mB),
        SB = -(JB * XB - oB * LB + GB * eB),
        BI = +(TB * XB - oB * uB + GB * fB),
        II = -(TB * LB - JB * uB + GB * lB),
        ZI = +(TB * eB - JB * fB + oB * lB);
      return IB[0] = OB * HB, IB[1] = AB * HB, IB[2] = EB * HB, IB[3] = SB * HB, IB[4] = YB * HB, IB[5] = tB * HB, IB[6] = DB * HB, IB[7] = BI * HB, IB[8] = iB * HB, IB[9] = bB * HB, IB[10] = KB * HB, IB[11] = II * HB, IB[12] = pB * HB, IB[13] = xB * HB, IB[14] = VB * HB, IB[15] = ZI * HB, !0
    }
    TB._UpdateFlagSeed = 0
  },
  37120: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => gB,
      f: () => NB,
      j: () => dB,
      m: () => yB,
      p: () => hB,
      s: () => zB,
      t: () => FB
    });
    var TB = ZB(37129),
      JB = ZB(37131),
      oB = ZB(37138),
      GB = ZB(37147),
      vB = ZB(37158),
      kB = ZB(37166),
      cB = ZB(37170);
    const nB = BB => parseInt(BB.toString().replace(/\W/g, ""));
    class hB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = BB, this.y = IB
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let BB = nB(this.x);
        return BB = 397 * BB ^ nB(this.y), BB
      }
      toArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[IB] = this.x, BB[IB + 1] = this.y, this
      }
      WZB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return hB.FromArrayToRef(BB, IB, this), this
      }
      HTB() {
        return [this.x, this.y]
      }
      TY(BB) {
        return this.x = BB.x, this.y = BB.y, this
      }
      cBB(BB, IB) {
        return this.x = BB, this.y = IB, this
      }
      set(BB, IB) {
        return this.cBB(BB, IB)
      }
      K9(BB) {
        return this.cBB(BB, BB)
      }
      add(BB) {
        return new hB(this.x + BB.x, this.y + BB.y)
      }
      addToRef(BB, IB) {
        return IB.x = this.x + BB.x, IB.y = this.y + BB.y, IB
      }
      addInPlace(BB) {
        return this.x += BB.x, this.y += BB.y, this
      }
      addInPlaceFromFloats(BB, IB) {
        return this.x += BB, this.y += IB, this
      }
      addVector3(BB) {
        return new hB(this.x + BB.x, this.y + BB.y)
      }
      subtract(BB) {
        return new hB(this.x - BB.x, this.y - BB.y)
      }
      subtractToRef(BB, IB) {
        return IB.x = this.x - BB.x, IB.y = this.y - BB.y, IB
      }
      VTB(BB) {
        return this.x -= BB.x, this.y -= BB.y, this
      }
      multiplyInPlace(BB) {
        return this.x *= BB.x, this.y *= BB.y, this
      }
      multiply(BB) {
        return new hB(this.x * BB.x, this.y * BB.y)
      }
      multiplyToRef(BB, IB) {
        return IB.x = this.x * BB.x, IB.y = this.y * BB.y, IB
      }
      multiplyByFloats(BB, IB) {
        return new hB(this.x * BB, this.y * IB)
      }
      divide(BB) {
        return new hB(this.x / BB.x, this.y / BB.y)
      }
      divideToRef(BB, IB) {
        return IB.x = this.x / BB.x, IB.y = this.y / BB.y, IB
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
      minimizeInPlaceFromFloats(BB, IB) {
        return this.x = Math.min(BB, this.x), this.y = Math.min(IB, this.y), this
      }
      maximizeInPlaceFromFloats(BB, IB) {
        return this.x = Math.max(BB, this.x), this.y = Math.max(IB, this.y), this
      }
      subtractFromFloats(BB, IB) {
        return new hB(this.x - BB, this.y - IB)
      }
      subtractFromFloatsToRef(BB, IB, ZB) {
        return ZB.x = this.x - BB, ZB.y = this.y - IB, ZB
      }
      dv() {
        return new hB(-this.x, -this.y)
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
        return new hB(this.x * BB, this.y * BB)
      }
      scaleToRef(BB, IB) {
        return IB.x = this.x * BB, IB.y = this.y * BB, IB
      }
      scaleAndAddToRef(BB, IB) {
        return IB.x += this.x * BB, IB.y += this.y * BB, IB
      }
      equals(BB) {
        return BB && this.x === BB.x && this.y === BB.y
      }
      equalsWithEpsilon(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TB.d;
        return BB && (0, vB.WithinEpsilon)(this.x, BB.x, IB) && (0, vB.WithinEpsilon)(this.y, BB.y, IB)
      }
      kvB(BB, IB) {
        return this.x === BB && this.y === IB
      }
      floor() {
        return new hB(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(BB) {
        return BB.x = Math.floor(this.x), BB.y = Math.floor(this.y), BB
      }
      fract() {
        return new hB(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(BB) {
        return BB.x = this.x - Math.floor(this.x), BB.y = this.y - Math.floor(this.y), BB
      }
      rotate(BB) {
        return this.rotateToRef(BB, new hB)
      }
      rotateToRef(BB, IB) {
        const ZB = Math.cos(BB),
          TB = Math.sin(BB);
        return IB.x = ZB * this.x - TB * this.y, IB.y = TB * this.x + ZB * this.y, IB
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
        const BB = new hB;
        return this.normalizeToRef(BB), BB
      }
      normalizeToRef(BB) {
        const IB = this.length();
        return 0 === IB || 1 === IB ? (BB.x = this.x, BB.y = this.y, BB) : this.scaleToRef(1 / IB, BB)
      }
      clone() {
        return new hB(this.x, this.y)
      }
      dot(BB) {
        return this.x * BB.x + this.y * BB.y
      }
      static Zero() {
        return new hB(0, 0)
      }
      static One() {
        return new hB(1, 1)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new hB((0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).cBB((0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB))
      }
      static get ZeroReadOnly() {
        return hB._ZeroReadOnly
      }
      static FromArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new hB(BB[IB], BB[IB + 1])
      }
      static FromArrayToRef(BB, IB, ZB) {
        return ZB.x = BB[IB], ZB.y = BB[IB + 1], ZB
      }
      static FromFloatsToRef(BB, IB, ZB) {
        return ZB.cBB(BB, IB), ZB
      }
      static CatmullRom(BB, IB, ZB, TB, JB) {
        const oB = JB * JB,
          GB = JB * oB,
          vB = .5 * (2 * IB.x + (-BB.x + ZB.x) * JB + (2 * BB.x - 5 * IB.x + 4 * ZB.x - TB.x) * oB + (-BB.x + 3 * IB.x - 3 * ZB.x + TB.x) * GB),
          kB = .5 * (2 * IB.y + (-BB.y + ZB.y) * JB + (2 * BB.y - 5 * IB.y + 4 * ZB.y - TB.y) * oB + (-BB.y + 3 * IB.y - 3 * ZB.y + TB.y) * GB);
        return new hB(vB, kB)
      }
      static ClampToRef(BB, IB, ZB, TB) {
        return TB.x = (0, vB.Clamp)(BB.x, IB.x, ZB.x), TB.y = (0, vB.Clamp)(BB.y, IB.y, ZB.y), TB
      }
      static Clamp(BB, IB, ZB) {
        const TB = (0, vB.Clamp)(BB.x, IB.x, ZB.x),
          JB = (0, vB.Clamp)(BB.y, IB.y, ZB.y);
        return new hB(TB, JB)
      }
      static Hermite(BB, IB, ZB, TB, JB) {
        const oB = JB * JB,
          GB = JB * oB,
          vB = 2 * GB - 3 * oB + 1,
          kB = -2 * GB + 3 * oB,
          cB = GB - 2 * oB + JB,
          nB = GB - oB,
          zB = BB.x * vB + ZB.x * kB + IB.x * cB + TB.x * nB,
          FB = BB.y * vB + ZB.y * kB + IB.y * cB + TB.y * nB;
        return new hB(zB, FB)
      }
      static Hermite1stDerivative(BB, IB, ZB, TB, JB) {
        return this.Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, new hB)
      }
      static Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB) {
        const GB = JB * JB;
        return oB.x = 6 * (GB - JB) * BB.x + (3 * GB - 4 * JB + 1) * IB.x + 6 * (-GB + JB) * ZB.x + (3 * GB - 2 * JB) * TB.x, oB.y = 6 * (GB - JB) * BB.y + (3 * GB - 4 * JB + 1) * IB.y + 6 * (-GB + JB) * ZB.y + (3 * GB - 2 * JB) * TB.y, oB
      }
      static Lerp(BB, IB, ZB) {
        return hB.LerpToRef(BB, IB, ZB, new hB)
      }
      static LerpToRef(BB, IB, ZB, TB) {
        return TB.x = BB.x + (IB.x - BB.x) * ZB, TB.y = BB.y + (IB.y - BB.y) * ZB, TB
      }
      static Dot(BB, IB) {
        return BB.x * IB.x + BB.y * IB.y
      }
      static Normalize(BB) {
        return hB.NormalizeToRef(BB, new hB)
      }
      static NormalizeToRef(BB, IB) {
        return BB.normalizeToRef(IB), IB
      }
      static Minimize(BB, IB) {
        const ZB = BB.x < IB.x ? BB.x : IB.x,
          TB = BB.y < IB.y ? BB.y : IB.y;
        return new hB(ZB, TB)
      }
      static Maximize(BB, IB) {
        const ZB = BB.x > IB.x ? BB.x : IB.x,
          TB = BB.y > IB.y ? BB.y : IB.y;
        return new hB(ZB, TB)
      }
      static Transform(BB, IB) {
        return hB.TransformToRef(BB, IB, new hB)
      }
      static TransformToRef(BB, IB, ZB) {
        const TB = IB.m,
          JB = BB.x * TB[0] + BB.y * TB[4] + TB[12],
          oB = BB.x * TB[1] + BB.y * TB[5] + TB[13];
        return ZB.x = JB, ZB.y = oB, ZB
      }
      static PointInTriangle(BB, IB, ZB, TB) {
        const JB = .5 * (-ZB.y * TB.x + IB.y * (-ZB.x + TB.x) + IB.x * (ZB.y - TB.y) + ZB.x * TB.y),
          oB = JB < 0 ? -1 : 1,
          GB = (IB.y * TB.x - IB.x * TB.y + (TB.y - IB.y) * BB.x + (IB.x - TB.x) * BB.y) * oB,
          vB = (IB.x * ZB.y - IB.y * ZB.x + (IB.y - ZB.y) * BB.x + (ZB.x - IB.x) * BB.y) * oB;
        return GB > 0 && vB > 0 && GB + vB < 2 * JB * oB
      }
      static Distance(BB, IB) {
        return Math.sqrt(hB.DistanceSquared(BB, IB))
      }
      static DistanceSquared(BB, IB) {
        const ZB = BB.x - IB.x,
          TB = BB.y - IB.y;
        return ZB * ZB + TB * TB
      }
      static Center(BB, IB) {
        return hB.CenterToRef(BB, IB, new hB)
      }
      static CenterToRef(BB, IB, ZB) {
        return ZB.cBB((BB.x + IB.x) / 2, (BB.y + IB.y) / 2)
      }
      static DistanceOfPointFromSegment(BB, IB, ZB) {
        const TB = hB.DistanceSquared(IB, ZB);
        if (0 === TB) return hB.Distance(BB, IB);
        const JB = ZB.subtract(IB),
          oB = Math.max(0, Math.min(1, hB.Dot(BB.subtract(IB), JB) / TB)),
          GB = IB.add(JB.multiplyByFloats(oB, oB));
        return hB.Distance(BB, GB)
      }
    }
    hB._V8PerformanceHack = new hB(.5, .5), hB._ZeroReadOnly = hB.Zero();
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
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = BB, this._y = IB, this._z = ZB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "rN"
      }
      getHashCode() {
        let BB = nB(this._x);
        return BB = 397 * BB ^ nB(this._y), BB = 397 * BB ^ nB(this._z), BB
      }
      HTB() {
        return [this._x, this._y, this._z]
      }
      toArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[IB] = this._x, BB[IB + 1] = this._y, BB[IB + 2] = this._z, this
      }
      WZB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return zB.FromArrayToRef(BB, IB, this), this
      }
      toQuaternion() {
        return NB.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(BB) {
        return this._x += BB._x, this._y += BB._y, this._z += BB._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(BB, IB, ZB) {
        return this._x += BB, this._y += IB, this._z += ZB, this._isDirty = !0, this
      }
      add(BB) {
        return new zB(this._x + BB._x, this._y + BB._y, this._z + BB._z)
      }
      addToRef(BB, IB) {
        return IB._x = this._x + BB._x, IB._y = this._y + BB._y, IB._z = this._z + BB._z, IB._isDirty = !0, IB
      }
      VTB(BB) {
        return this._x -= BB._x, this._y -= BB._y, this._z -= BB._z, this._isDirty = !0, this
      }
      subtract(BB) {
        return new zB(this._x - BB._x, this._y - BB._y, this._z - BB._z)
      }
      subtractToRef(BB, IB) {
        return this.subtractFromFloatsToRef(BB._x, BB._y, BB._z, IB)
      }
      subtractFromFloats(BB, IB, ZB) {
        return new zB(this._x - BB, this._y - IB, this._z - ZB)
      }
      subtractFromFloatsToRef(BB, IB, ZB, TB) {
        return TB._x = this._x - BB, TB._y = this._y - IB, TB._z = this._z - ZB, TB._isDirty = !0, TB
      }
      dv() {
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
      scaleToRef(BB, IB) {
        return IB._x = this._x * BB, IB._y = this._y * BB, IB._z = this._z * BB, IB._isDirty = !0, IB
      }
      getNormalToRef(BB) {
        const IB = this.length();
        let ZB = Math.acos(this._y / IB);
        const TB = Math.atan2(this._z, this._x);
        ZB > Math.PI / 2 ? ZB -= Math.PI / 2 : ZB += Math.PI / 2;
        const JB = IB * Math.sin(ZB) * Math.cos(TB),
          oB = IB * Math.cos(ZB),
          GB = IB * Math.sin(ZB) * Math.sin(TB);
        return BB.set(JB, oB, GB), BB
      }
      applyRotationQuaternionToRef(BB, IB) {
        const ZB = this._x,
          TB = this._y,
          JB = this._z,
          oB = BB._x,
          GB = BB._y,
          vB = BB._z,
          kB = BB._w,
          cB = 2 * (GB * JB - vB * TB),
          nB = 2 * (vB * ZB - oB * JB),
          hB = 2 * (oB * TB - GB * ZB);
        return IB._x = ZB + kB * cB + GB * hB - vB * nB, IB._y = TB + kB * nB + vB * cB - oB * hB, IB._z = JB + kB * hB + oB * nB - GB * cB, IB._isDirty = !0, IB
      }
      applyRotationQuaternionInPlace(BB) {
        return this.applyRotationQuaternionToRef(BB, this)
      }
      applyRotationQuaternion(BB) {
        return this.applyRotationQuaternionToRef(BB, new zB)
      }
      scaleAndAddToRef(BB, IB) {
        return IB._x += this._x * BB, IB._y += this._y * BB, IB._z += this._z * BB, IB._isDirty = !0, IB
      }
      projectOnPlane(BB, IB) {
        return this.projectOnPlaneToRef(BB, IB, new zB)
      }
      projectOnPlaneToRef(BB, IB, ZB) {
        const TB = BB.normal,
          JB = BB.d,
          oB = qB.rN[0];
        this.subtractToRef(IB, oB), oB.normalize();
        const GB = zB.Dot(oB, TB);
        if (Math.abs(GB) < 1e-10) ZB.K9(1 / 0);
        else {
          const BB = -(zB.Dot(IB, TB) + JB) / GB,
            vB = oB.scaleInPlace(BB);
          IB.addToRef(vB, ZB)
        }
        return ZB
      }
      equals(BB) {
        return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z
      }
      equalsWithEpsilon(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TB.d;
        return BB && (0, vB.WithinEpsilon)(this._x, BB._x, IB) && (0, vB.WithinEpsilon)(this._y, BB._y, IB) && (0, vB.WithinEpsilon)(this._z, BB._z, IB)
      }
      kvB(BB, IB, ZB) {
        return this._x === BB && this._y === IB && this._z === ZB
      }
      multiplyInPlace(BB) {
        return this._x *= BB._x, this._y *= BB._y, this._z *= BB._z, this._isDirty = !0, this
      }
      multiply(BB) {
        return this.multiplyByFloats(BB._x, BB._y, BB._z)
      }
      multiplyToRef(BB, IB) {
        return IB._x = this._x * BB._x, IB._y = this._y * BB._y, IB._z = this._z * BB._z, IB._isDirty = !0, IB
      }
      multiplyByFloats(BB, IB, ZB) {
        return new zB(this._x * BB, this._y * IB, this._z * ZB)
      }
      divide(BB) {
        return new zB(this._x / BB._x, this._y / BB._y, this._z / BB._z)
      }
      divideToRef(BB, IB) {
        return IB._x = this._x / BB._x, IB._y = this._y / BB._y, IB._z = this._z / BB._z, IB._isDirty = !0, IB
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
      minimizeInPlaceFromFloats(BB, IB, ZB) {
        return BB < this._x && (this.x = BB), IB < this._y && (this.y = IB), ZB < this._z && (this.z = ZB), this
      }
      maximizeInPlaceFromFloats(BB, IB, ZB) {
        return BB > this._x && (this.x = BB), IB > this._y && (this.y = IB), ZB > this._z && (this.z = ZB), this
      }
      isNonUniformWithinEpsilon(BB) {
        const IB = Math.abs(this._x),
          ZB = Math.abs(this._y);
        if (!(0, vB.WithinEpsilon)(IB, ZB, BB)) return !0;
        const TB = Math.abs(this._z);
        return !(0, vB.WithinEpsilon)(IB, TB, BB) || !(0, vB.WithinEpsilon)(ZB, TB, BB)
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
        const IB = qB.rN[0].TY(this);
        return this.x = IB[BB[0]], this.y = IB[BB[1]], this.z = IB[BB[2]], this
      }
      rotateByQuaternionToRef(BB, IB) {
        return BB.toRotationMatrix(qB.Matrix[0]), zB.TransformCoordinatesToRef(this, qB.Matrix[0], IB), IB
      }
      rotateByQuaternionAroundPointToRef(BB, IB, ZB) {
        return this.subtractToRef(IB, qB.rN[0]), qB.rN[0].rotateByQuaternionToRef(BB, qB.rN[0]), IB.addToRef(qB.rN[0], ZB), ZB
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
        const IB = this.length();
        return 0 === IB || 1 === IB ? (BB._x = this._x, BB._y = this._y, BB._z = this._z, BB._isDirty = !0, BB) : this.scaleToRef(1 / IB, BB)
      }
      clone() {
        return new zB(this._x, this._y, this._z)
      }
      TY(BB) {
        return this.cBB(BB._x, BB._y, BB._z)
      }
      cBB(BB, IB, ZB) {
        return this._x = BB, this._y = IB, this._z = ZB, this._isDirty = !0, this
      }
      set(BB, IB, ZB) {
        return this.cBB(BB, IB, ZB)
      }
      K9(BB) {
        return this._x = this._y = this._z = BB, this._isDirty = !0, this
      }
      static GetClipFactor(BB, IB, ZB, TB) {
        const JB = zB.Dot(BB, ZB);
        return (JB - TB) / (JB - zB.Dot(IB, ZB))
      }
      static GetAngleBetweenVectors(BB, IB, ZB) {
        const TB = BB.normalizeToRef(qB.rN[1]),
          JB = IB.normalizeToRef(qB.rN[2]);
        let oB = zB.Dot(TB, JB);
        oB = (0, vB.Clamp)(oB, -1, 1);
        const GB = Math.acos(oB),
          kB = qB.rN[3];
        return zB.CrossToRef(TB, JB, kB), zB.Dot(kB, ZB) > 0 ? isNaN(GB) ? 0 : GB : isNaN(GB) ? -Math.PI : -Math.acos(oB)
      }
      static GetAngleBetweenVectorsOnPlane(BB, IB, ZB) {
        qB.rN[0].TY(BB);
        const TB = qB.rN[0];
        qB.rN[1].TY(IB);
        const JB = qB.rN[1];
        qB.rN[2].TY(ZB);
        const oB = qB.rN[2],
          GB = qB.rN[3],
          kB = qB.rN[4];
        TB.normalize(), JB.normalize(), oB.normalize(), zB.CrossToRef(oB, TB, GB), zB.CrossToRef(GB, oB, kB);
        const cB = Math.atan2(zB.Dot(JB, GB), zB.Dot(JB, kB));
        return (0, vB.NormalizeRadians)(cB)
      }
      static PitchYawRollToMoveBetweenPointsToRef(BB, IB, ZB) {
        const TB = yB.rN[0];
        return IB.subtractToRef(BB, TB), ZB._y = Math.atan2(TB.x, TB.z) || 0, ZB._x = Math.atan2(Math.sqrt(TB.x ** 2 + TB.z ** 2), TB.y) || 0, ZB._z = 0, ZB._isDirty = !0, ZB
      }
      static PitchYawRollToMoveBetweenPoints(BB, IB) {
        const ZB = zB.Zero();
        return zB.PitchYawRollToMoveBetweenPointsToRef(BB, IB, ZB)
      }
      static SlerpToRef(BB, IB, ZB, JB) {
        ZB = (0, vB.Clamp)(ZB, 0, 1);
        const oB = qB.rN[0],
          GB = qB.rN[1];
        oB.TY(BB);
        const kB = oB.length();
        oB.normalizeFromLength(kB), GB.TY(IB);
        const cB = GB.length();
        GB.normalizeFromLength(cB);
        const nB = zB.Dot(oB, GB);
        let hB, FB;
        if (nB < 1 - TB.d) {
          const BB = Math.acos(nB),
            IB = 1 / Math.sin(BB);
          hB = Math.sin((1 - ZB) * BB) * IB, FB = Math.sin(ZB * BB) * IB
        } else hB = 1 - ZB, FB = ZB;
        return oB.scaleInPlace(hB), GB.scaleInPlace(FB), JB.TY(oB).addInPlace(GB), JB.scaleInPlace((0, vB.Lerp)(kB, cB, ZB)), JB
      }
      static SmoothToRef(BB, IB, ZB, TB, JB) {
        return zB.SlerpToRef(BB, IB, 0 === TB ? 1 : ZB / TB, JB), JB
      }
      static FromArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new zB(BB[IB], BB[IB + 1], BB[IB + 2])
      }
      static FromFloatArray(BB, IB) {
        return zB.FromArray(BB, IB)
      }
      static FromArrayToRef(BB, IB, ZB) {
        return ZB._x = BB[IB], ZB._y = BB[IB + 1], ZB._z = BB[IB + 2], ZB._isDirty = !0, ZB
      }
      static FromFloatArrayToRef(BB, IB, ZB) {
        return zB.FromArrayToRef(BB, IB, ZB)
      }
      static FromFloatsToRef(BB, IB, ZB, TB) {
        return TB.cBB(BB, IB, ZB), TB
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
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new zB((0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).cBB((0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB))
      }
      static TransformCoordinates(BB, IB) {
        const ZB = zB.Zero();
        return zB.TransformCoordinatesToRef(BB, IB, ZB), ZB
      }
      static TransformCoordinatesToRef(BB, IB, ZB) {
        return zB.TransformCoordinatesFromFloatsToRef(BB._x, BB._y, BB._z, IB, ZB), ZB
      }
      static TransformCoordinatesFromFloatsToRef(BB, IB, ZB, TB, JB) {
        const oB = TB.m,
          GB = BB * oB[0] + IB * oB[4] + ZB * oB[8] + oB[12],
          vB = BB * oB[1] + IB * oB[5] + ZB * oB[9] + oB[13],
          kB = BB * oB[2] + IB * oB[6] + ZB * oB[10] + oB[14],
          cB = 1 / (BB * oB[3] + IB * oB[7] + ZB * oB[11] + oB[15]);
        return JB._x = GB * cB, JB._y = vB * cB, JB._z = kB * cB, JB._isDirty = !0, JB
      }
      static TransformNormal(BB, IB) {
        const ZB = zB.Zero();
        return zB.TransformNormalToRef(BB, IB, ZB), ZB
      }
      static TransformNormalToRef(BB, IB, ZB) {
        return this.TransformNormalFromFloatsToRef(BB._x, BB._y, BB._z, IB, ZB), ZB
      }
      static TransformNormalFromFloatsToRef(BB, IB, ZB, TB, JB) {
        const oB = TB.m;
        return JB._x = BB * oB[0] + IB * oB[4] + ZB * oB[8], JB._y = BB * oB[1] + IB * oB[5] + ZB * oB[9], JB._z = BB * oB[2] + IB * oB[6] + ZB * oB[10], JB._isDirty = !0, JB
      }
      static CatmullRom(BB, IB, ZB, TB, JB) {
        const oB = JB * JB,
          GB = JB * oB,
          vB = .5 * (2 * IB._x + (-BB._x + ZB._x) * JB + (2 * BB._x - 5 * IB._x + 4 * ZB._x - TB._x) * oB + (-BB._x + 3 * IB._x - 3 * ZB._x + TB._x) * GB),
          kB = .5 * (2 * IB._y + (-BB._y + ZB._y) * JB + (2 * BB._y - 5 * IB._y + 4 * ZB._y - TB._y) * oB + (-BB._y + 3 * IB._y - 3 * ZB._y + TB._y) * GB),
          cB = .5 * (2 * IB._z + (-BB._z + ZB._z) * JB + (2 * BB._z - 5 * IB._z + 4 * ZB._z - TB._z) * oB + (-BB._z + 3 * IB._z - 3 * ZB._z + TB._z) * GB);
        return new zB(vB, kB, cB)
      }
      static Clamp(BB, IB, ZB) {
        const TB = new zB;
        return zB.ClampToRef(BB, IB, ZB, TB), TB
      }
      static ClampToRef(BB, IB, ZB, TB) {
        let JB = BB._x;
        JB = JB > ZB._x ? ZB._x : JB, JB = JB < IB._x ? IB._x : JB;
        let oB = BB._y;
        oB = oB > ZB._y ? ZB._y : oB, oB = oB < IB._y ? IB._y : oB;
        let GB = BB._z;
        return GB = GB > ZB._z ? ZB._z : GB, GB = GB < IB._z ? IB._z : GB, TB.cBB(JB, oB, GB), TB
      }
      static CheckExtends(BB, IB, ZB) {
        IB.minimizeInPlace(BB), ZB.maximizeInPlace(BB)
      }
      static Hermite(BB, IB, ZB, TB, JB) {
        const oB = JB * JB,
          GB = JB * oB,
          vB = 2 * GB - 3 * oB + 1,
          kB = -2 * GB + 3 * oB,
          cB = GB - 2 * oB + JB,
          nB = GB - oB,
          hB = BB._x * vB + ZB._x * kB + IB._x * cB + TB._x * nB,
          FB = BB._y * vB + ZB._y * kB + IB._y * cB + TB._y * nB,
          NB = BB._z * vB + ZB._z * kB + IB._z * cB + TB._z * nB;
        return new zB(hB, FB, NB)
      }
      static Hermite1stDerivative(BB, IB, ZB, TB, JB) {
        const oB = new zB;
        return this.Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB), oB
      }
      static Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB) {
        const GB = JB * JB;
        return oB._x = 6 * (GB - JB) * BB._x + (3 * GB - 4 * JB + 1) * IB._x + 6 * (-GB + JB) * ZB._x + (3 * GB - 2 * JB) * TB._x, oB._y = 6 * (GB - JB) * BB._y + (3 * GB - 4 * JB + 1) * IB._y + 6 * (-GB + JB) * ZB._y + (3 * GB - 2 * JB) * TB._y, oB._z = 6 * (GB - JB) * BB._z + (3 * GB - 4 * JB + 1) * IB._z + 6 * (-GB + JB) * ZB._z + (3 * GB - 2 * JB) * TB._z, oB._isDirty = !0, oB
      }
      static Lerp(BB, IB, ZB) {
        const TB = new zB(0, 0, 0);
        return zB.LerpToRef(BB, IB, ZB, TB), TB
      }
      static LerpToRef(BB, IB, ZB, TB) {
        return TB._x = BB._x + (IB._x - BB._x) * ZB, TB._y = BB._y + (IB._y - BB._y) * ZB, TB._z = BB._z + (IB._z - BB._z) * ZB, TB._isDirty = !0, TB
      }
      static Dot(BB, IB) {
        return BB._x * IB._x + BB._y * IB._y + BB._z * IB._z
      }
      dot(BB) {
        return this._x * BB._x + this._y * BB._y + this._z * BB._z
      }
      static Cross(BB, IB) {
        const ZB = new zB;
        return zB.CrossToRef(BB, IB, ZB), ZB
      }
      static CrossToRef(BB, IB, ZB) {
        const TB = BB._y * IB._z - BB._z * IB._y,
          JB = BB._z * IB._x - BB._x * IB._z,
          oB = BB._x * IB._y - BB._y * IB._x;
        return ZB.cBB(TB, JB, oB), ZB
      }
      static Normalize(BB) {
        const IB = zB.Zero();
        return zB.NormalizeToRef(BB, IB), IB
      }
      static NormalizeToRef(BB, IB) {
        return BB.normalizeToRef(IB), IB
      }
      static Project(BB, IB, ZB, TB) {
        const JB = new zB;
        return zB.ProjectToRef(BB, IB, ZB, TB, JB), JB
      }
      static ProjectToRef(BB, IB, ZB, TB, JB) {
        const oB = TB.width,
          vB = TB.height,
          kB = TB.x,
          cB = TB.y,
          nB = qB.Matrix[1],
          hB = GB.e.LastCreatedEngine?.isNDCHalfZRange,
          FB = hB ? 1 : .5,
          NB = hB ? 0 : .5;
        gB.FromValuesToRef(oB / 2, 0, 0, 0, 0, -vB / 2, 0, 0, 0, 0, FB, 0, kB + oB / 2, vB / 2 + cB, NB, 1, nB);
        const yB = qB.Matrix[0];
        return IB.multiplyToRef(ZB, yB), yB.multiplyToRef(nB, yB), zB.TransformCoordinatesToRef(BB, yB, JB), JB
      }
      static Reflect(BB, IB) {
        return this.ReflectToRef(BB, IB, new zB)
      }
      static ReflectToRef(BB, IB, ZB) {
        const TB = yB.rN[0];
        return TB.TY(IB).scaleInPlace(2 * zB.Dot(BB, IB)), ZB.TY(BB).VTB(TB)
      }
      static UnprojectFromTransform(BB, IB, ZB, TB, JB) {
        return this.Unproject(BB, IB, ZB, TB, JB, gB.IdentityReadOnly)
      }
      static Unproject(BB, IB, ZB, TB, JB, oB) {
        const GB = new zB;
        return zB.UnprojectToRef(BB, IB, ZB, TB, JB, oB, GB), GB
      }
      static UnprojectToRef(BB, IB, ZB, TB, JB, oB, GB) {
        return zB.UnprojectFloatsToRef(BB._x, BB._y, BB._z, IB, ZB, TB, JB, oB, GB), GB
      }
      static UnprojectFloatsToRef(BB, IB, ZB, TB, JB, oB, vB, kB, cB) {
        const nB = qB.Matrix[0];
        oB.multiplyToRef(vB, nB), nB.multiplyToRef(kB, nB), nB.invert();
        const hB = qB.rN[0];
        return hB.x = BB / TB * 2 - 1, hB.y = -(IB / JB * 2 - 1), GB.e.LastCreatedEngine?.isNDCHalfZRange ? hB.z = ZB : hB.z = 2 * ZB - 1, zB.TransformCoordinatesToRef(hB, nB, cB), cB
      }
      static Minimize(BB, IB) {
        const ZB = new zB;
        return ZB.TY(BB), ZB.minimizeInPlace(IB), ZB
      }
      static Maximize(BB, IB) {
        const ZB = new zB;
        return ZB.TY(BB), ZB.maximizeInPlace(IB), ZB
      }
      static Distance(BB, IB) {
        return Math.sqrt(zB.DistanceSquared(BB, IB))
      }
      static DistanceSquared(BB, IB) {
        const ZB = BB._x - IB._x,
          TB = BB._y - IB._y,
          JB = BB._z - IB._z;
        return ZB * ZB + TB * TB + JB * JB
      }
      static ProjectOnTriangleToRef(BB, IB, ZB, JB, oB) {
        const GB = qB.rN[0],
          kB = qB.rN[1],
          cB = qB.rN[2],
          nB = qB.rN[3],
          hB = qB.rN[4];
        ZB.subtractToRef(IB, GB), JB.subtractToRef(IB, kB), JB.subtractToRef(ZB, cB);
        const FB = GB.length(),
          NB = kB.length(),
          gB = cB.length();
        if (FB < TB.d || NB < TB.d || gB < TB.d) return oB.TY(IB), zB.Distance(BB, IB);
        BB.subtractToRef(IB, hB), zB.CrossToRef(GB, kB, nB);
        const yB = nB.length();
        if (yB < TB.d) return oB.TY(IB), zB.Distance(BB, IB);
        nB.normalizeFromLength(yB);
        let UB = hB.length();
        if (UB < TB.d) return oB.TY(IB), 0;
        hB.normalizeFromLength(UB);
        const WB = zB.Dot(nB, hB),
          dB = qB.rN[5],
          CB = qB.rN[6];
        dB.TY(nB).scaleInPlace(-UB * WB), CB.TY(BB).addInPlace(dB);
        const QB = qB.rN[4],
          sB = qB.rN[5],
          wB = qB.rN[7],
          OB = qB.rN[8];
        QB.TY(GB).scaleInPlace(1 / FB), OB.TY(kB).scaleInPlace(1 / NB), QB.addInPlace(OB).scaleInPlace(-1), sB.TY(GB).scaleInPlace(-1 / FB), OB.TY(cB).scaleInPlace(1 / gB), sB.addInPlace(OB).scaleInPlace(-1), wB.TY(cB).scaleInPlace(-1 / gB), OB.TY(kB).scaleInPlace(-1 / NB), wB.addInPlace(OB).scaleInPlace(-1);
        const YB = qB.rN[9];
        let iB;
        YB.TY(CB).VTB(IB), zB.CrossToRef(QB, YB, OB), iB = zB.Dot(OB, nB);
        const pB = iB;
        YB.TY(CB).VTB(ZB), zB.CrossToRef(sB, YB, OB), iB = zB.Dot(OB, nB);
        const aB = iB;
        YB.TY(CB).VTB(JB), zB.CrossToRef(wB, YB, OB), iB = zB.Dot(OB, nB);
        const HB = iB,
          MB = qB.rN[10];
        let jB, PB;
        pB > 0 && aB < 0 ? (MB.TY(GB), jB = IB, PB = ZB) : aB > 0 && HB < 0 ? (MB.TY(cB), jB = ZB, PB = JB) : (MB.TY(kB).scaleInPlace(-1), jB = JB, PB = IB);
        const RB = qB.rN[9],
          rB = qB.rN[4];
        jB.subtractToRef(CB, OB), PB.subtractToRef(CB, RB), zB.CrossToRef(OB, RB, rB);
        if (!(zB.Dot(rB, nB) < 0)) return oB.TY(CB), Math.abs(UB * WB);
        const mB = qB.rN[5];
        zB.CrossToRef(MB, rB, mB), mB.normalize();
        const XB = qB.rN[9];
        XB.TY(jB).VTB(CB);
        const LB = XB.length();
        if (LB < TB.d) return oB.TY(jB), zB.Distance(BB, jB);
        XB.normalizeFromLength(LB);
        const eB = zB.Dot(mB, XB),
          uB = qB.rN[7];
        uB.TY(CB).addInPlace(mB.scaleInPlace(LB * eB)), OB.TY(uB).VTB(jB), UB = MB.length(), MB.normalizeFromLength(UB);
        let fB = zB.Dot(OB, MB) / Math.max(UB, TB.d);
        return fB = (0, vB.Clamp)(fB, 0, 1), uB.TY(jB).addInPlace(MB.scaleInPlace(fB * UB)), oB.TY(uB), zB.Distance(BB, uB)
      }
      static Center(BB, IB) {
        return zB.CenterToRef(BB, IB, zB.Zero())
      }
      static CenterToRef(BB, IB, ZB) {
        return ZB.cBB((BB._x + IB._x) / 2, (BB._y + IB._y) / 2, (BB._z + IB._z) / 2)
      }
      static RotationFromAxis(BB, IB, ZB) {
        const TB = new zB;
        return zB.RotationFromAxisToRef(BB, IB, ZB, TB), TB
      }
      static RotationFromAxisToRef(BB, IB, ZB, TB) {
        const JB = qB.Quaternion[0];
        return NB.RotationQuaternionFromAxisToRef(BB, IB, ZB, JB), JB.toEulerAnglesToRef(TB), TB
      }
    }
    zB._V8PerformanceHack = new zB(.5, .5, .5), zB._UpReadOnly = zB.Up(), zB._DownReadOnly = zB.Down(), zB._LeftHandedForwardReadOnly = zB.Forward(!1), zB._RightHandedForwardReadOnly = zB.Forward(!0), zB._LeftHandedBackwardReadOnly = zB.Backward(!1), zB._RightHandedBackwardReadOnly = zB.Backward(!0), zB._RightReadOnly = zB.Right(), zB._LeftReadOnly = zB.Left(), zB._ZeroReadOnly = zB.Zero(), zB._OneReadOnly = zB.One();
    class FB {
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
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = BB, this._y = IB, this._z = ZB, this._w = TB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let BB = nB(this._x);
        return BB = 397 * BB ^ nB(this._y), BB = 397 * BB ^ nB(this._z), BB = 397 * BB ^ nB(this._w), BB
      }
      HTB() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(BB, IB) {
        return void 0 === IB && (IB = 0), BB[IB] = this._x, BB[IB + 1] = this._y, BB[IB + 2] = this._z, BB[IB + 3] = this._w, this
      }
      WZB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return FB.FromArrayToRef(BB, IB, this), this
      }
      addInPlace(BB) {
        return this.x += BB._x, this.y += BB._y, this.z += BB._z, this.w += BB._w, this
      }
      addInPlaceFromFloats(BB, IB, ZB, TB) {
        return this.x += BB, this.y += IB, this.z += ZB, this.w += TB, this
      }
      add(BB) {
        return new FB(this._x + BB.x, this._y + BB.y, this._z + BB.z, this._w + BB.w)
      }
      addToRef(BB, IB) {
        return IB.x = this._x + BB.x, IB.y = this._y + BB.y, IB.z = this._z + BB.z, IB.w = this._w + BB.w, IB
      }
      VTB(BB) {
        return this.x -= BB.x, this.y -= BB.y, this.z -= BB.z, this.w -= BB.w, this
      }
      subtract(BB) {
        return new FB(this._x - BB.x, this._y - BB.y, this._z - BB.z, this._w - BB.w)
      }
      subtractToRef(BB, IB) {
        return IB.x = this._x - BB.x, IB.y = this._y - BB.y, IB.z = this._z - BB.z, IB.w = this._w - BB.w, IB
      }
      subtractFromFloats(BB, IB, ZB, TB) {
        return new FB(this._x - BB, this._y - IB, this._z - ZB, this._w - TB)
      }
      subtractFromFloatsToRef(BB, IB, ZB, TB, JB) {
        return JB.x = this._x - BB, JB.y = this._y - IB, JB.z = this._z - ZB, JB.w = this._w - TB, JB
      }
      dv() {
        return new FB(-this._x, -this._y, -this._z, -this._w)
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
        return new FB(this._x * BB, this._y * BB, this._z * BB, this._w * BB)
      }
      scaleToRef(BB, IB) {
        return IB.x = this._x * BB, IB.y = this._y * BB, IB.z = this._z * BB, IB.w = this._w * BB, IB
      }
      scaleAndAddToRef(BB, IB) {
        return IB.x += this._x * BB, IB.y += this._y * BB, IB.z += this._z * BB, IB.w += this._w * BB, IB
      }
      equals(BB) {
        return BB && this._x === BB.x && this._y === BB.y && this._z === BB.z && this._w === BB.w
      }
      equalsWithEpsilon(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TB.d;
        return BB && (0, vB.WithinEpsilon)(this._x, BB.x, IB) && (0, vB.WithinEpsilon)(this._y, BB.y, IB) && (0, vB.WithinEpsilon)(this._z, BB.z, IB) && (0, vB.WithinEpsilon)(this._w, BB.w, IB)
      }
      kvB(BB, IB, ZB, TB) {
        return this._x === BB && this._y === IB && this._z === ZB && this._w === TB
      }
      multiplyInPlace(BB) {
        return this.x *= BB.x, this.y *= BB.y, this.z *= BB.z, this.w *= BB.w, this
      }
      multiply(BB) {
        return new FB(this._x * BB.x, this._y * BB.y, this._z * BB.z, this._w * BB.w)
      }
      multiplyToRef(BB, IB) {
        return IB.x = this._x * BB.x, IB.y = this._y * BB.y, IB.z = this._z * BB.z, IB.w = this._w * BB.w, IB
      }
      multiplyByFloats(BB, IB, ZB, TB) {
        return new FB(this._x * BB, this._y * IB, this._z * ZB, this._w * TB)
      }
      divide(BB) {
        return new FB(this._x / BB.x, this._y / BB.y, this._z / BB.z, this._w / BB.w)
      }
      divideToRef(BB, IB) {
        return IB.x = this._x / BB.x, IB.y = this._y / BB.y, IB.z = this._z / BB.z, IB.w = this._w / BB.w, IB
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
      minimizeInPlaceFromFloats(BB, IB, ZB, TB) {
        return this.x = Math.min(BB, this._x), this.y = Math.min(IB, this._y), this.z = Math.min(ZB, this._z), this.w = Math.min(TB, this._w), this
      }
      maximizeInPlaceFromFloats(BB, IB, ZB, TB) {
        return this.x = Math.max(BB, this._x), this.y = Math.max(IB, this._y), this.z = Math.max(ZB, this._z), this.w = Math.max(TB, this._w), this
      }
      floorToRef(BB) {
        return BB.x = Math.floor(this._x), BB.y = Math.floor(this._y), BB.z = Math.floor(this._z), BB.w = Math.floor(this._w), BB
      }
      floor() {
        return new FB(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(BB) {
        return BB.x = this._x - Math.floor(this._x), BB.y = this._y - Math.floor(this._y), BB.z = this._z - Math.floor(this._z), BB.w = this._w - Math.floor(this._w), BB
      }
      fract() {
        return new FB(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new FB)
      }
      normalizeToRef(BB) {
        const IB = this.length();
        return 0 === IB || 1 === IB ? (BB.x = this._x, BB.y = this._y, BB.z = this._z, BB.w = this._w, BB) : this.scaleToRef(1 / IB, BB)
      }
      toVector3() {
        return new zB(this._x, this._y, this._z)
      }
      clone() {
        return new FB(this._x, this._y, this._z, this._w)
      }
      TY(BB) {
        return this.x = BB.x, this.y = BB.y, this.z = BB.z, this.w = BB.w, this
      }
      cBB(BB, IB, ZB, TB) {
        return this.x = BB, this.y = IB, this.z = ZB, this.w = TB, this
      }
      set(BB, IB, ZB, TB) {
        return this.cBB(BB, IB, ZB, TB)
      }
      K9(BB) {
        return this.x = this.y = this.z = this.w = BB, this
      }
      dot(BB) {
        return this._x * BB.x + this._y * BB.y + this._z * BB.z + this._w * BB.w
      }
      static FromArray(BB, IB) {
        return IB || (IB = 0), new FB(BB[IB], BB[IB + 1], BB[IB + 2], BB[IB + 3])
      }
      static FromArrayToRef(BB, IB, ZB) {
        return ZB.x = BB[IB], ZB.y = BB[IB + 1], ZB.z = BB[IB + 2], ZB.w = BB[IB + 3], ZB
      }
      static FromFloatArrayToRef(BB, IB, ZB) {
        return FB.FromArrayToRef(BB, IB, ZB), ZB
      }
      static FromFloatsToRef(BB, IB, ZB, TB, JB) {
        return JB.x = BB, JB.y = IB, JB.z = ZB, JB.w = TB, JB
      }
      static Zero() {
        return new FB(0, 0, 0, 0)
      }
      static One() {
        return new FB(1, 1, 1, 1)
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new FB((0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        return ZB.x = (0, vB.RandomRange)(BB, IB), ZB.y = (0, vB.RandomRange)(BB, IB), ZB.z = (0, vB.RandomRange)(BB, IB), ZB.w = (0, vB.RandomRange)(BB, IB), ZB
      }
      static Clamp(BB, IB, ZB) {
        return FB.ClampToRef(BB, IB, ZB, new FB)
      }
      static ClampToRef(BB, IB, ZB, TB) {
        return TB.x = (0, vB.Clamp)(BB.x, IB.x, ZB.x), TB.y = (0, vB.Clamp)(BB.y, IB.y, ZB.y), TB.z = (0, vB.Clamp)(BB.z, IB.z, ZB.z), TB.w = (0, vB.Clamp)(BB.w, IB.w, ZB.w), TB
      }
      static CheckExtends(BB, IB, ZB) {
        IB.minimizeInPlace(BB), ZB.maximizeInPlace(BB)
      }
      static get ZeroReadOnly() {
        return FB._ZeroReadOnly
      }
      static Normalize(BB) {
        return FB.NormalizeToRef(BB, new FB)
      }
      static NormalizeToRef(BB, IB) {
        return BB.normalizeToRef(IB), IB
      }
      static Minimize(BB, IB) {
        const ZB = new FB;
        return ZB.TY(BB), ZB.minimizeInPlace(IB), ZB
      }
      static Maximize(BB, IB) {
        const ZB = new FB;
        return ZB.TY(BB), ZB.maximizeInPlace(IB), ZB
      }
      static Distance(BB, IB) {
        return Math.sqrt(FB.DistanceSquared(BB, IB))
      }
      static DistanceSquared(BB, IB) {
        const ZB = BB.x - IB.x,
          TB = BB.y - IB.y,
          JB = BB.z - IB.z,
          oB = BB.w - IB.w;
        return ZB * ZB + TB * TB + JB * JB + oB * oB
      }
      static Center(BB, IB) {
        return FB.CenterToRef(BB, IB, new FB)
      }
      static CenterToRef(BB, IB, ZB) {
        return ZB.x = (BB.x + IB.x) / 2, ZB.y = (BB.y + IB.y) / 2, ZB.z = (BB.z + IB.z) / 2, ZB.w = (BB.w + IB.w) / 2, ZB
      }
      static TransformCoordinates(BB, IB) {
        return FB.TransformCoordinatesToRef(BB, IB, new FB)
      }
      static TransformCoordinatesToRef(BB, IB, ZB) {
        return FB.TransformCoordinatesFromFloatsToRef(BB._x, BB._y, BB._z, IB, ZB), ZB
      }
      static TransformCoordinatesFromFloatsToRef(BB, IB, ZB, TB, JB) {
        const oB = TB.m,
          GB = BB * oB[0] + IB * oB[4] + ZB * oB[8] + oB[12],
          vB = BB * oB[1] + IB * oB[5] + ZB * oB[9] + oB[13],
          kB = BB * oB[2] + IB * oB[6] + ZB * oB[10] + oB[14],
          cB = BB * oB[3] + IB * oB[7] + ZB * oB[11] + oB[15];
        return JB.x = GB, JB.y = vB, JB.z = kB, JB.w = cB, JB
      }
      static TransformNormal(BB, IB) {
        return FB.TransformNormalToRef(BB, IB, new FB)
      }
      static TransformNormalToRef(BB, IB, ZB) {
        const TB = IB.m,
          JB = BB.x * TB[0] + BB.y * TB[4] + BB.z * TB[8],
          oB = BB.x * TB[1] + BB.y * TB[5] + BB.z * TB[9],
          GB = BB.x * TB[2] + BB.y * TB[6] + BB.z * TB[10];
        return ZB.x = JB, ZB.y = oB, ZB.z = GB, ZB.w = BB.w, ZB
      }
      static TransformNormalFromFloatsToRef(BB, IB, ZB, TB, JB, oB) {
        const GB = JB.m;
        return oB.x = BB * GB[0] + IB * GB[4] + ZB * GB[8], oB.y = BB * GB[1] + IB * GB[5] + ZB * GB[9], oB.z = BB * GB[2] + IB * GB[6] + ZB * GB[10], oB.w = TB, oB
      }
      static FromVector3(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new FB(BB._x, BB._y, BB._z, IB)
      }
      static Dot(BB, IB) {
        return BB.x * IB.x + BB.y * IB.y + BB.z * IB.z + BB.w * IB.w
      }
    }
    FB._V8PerformanceHack = new FB(.5, .5, .5, .5), FB._ZeroReadOnly = FB.Zero();
    class NB {
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
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = BB, this._y = IB, this._z = ZB, this._w = TB
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let BB = nB(this._x);
        return BB = 397 * BB ^ nB(this._y), BB = 397 * BB ^ nB(this._z), BB = 397 * BB ^ nB(this._w), BB
      }
      HTB() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[IB] = this._x, BB[IB + 1] = this._y, BB[IB + 2] = this._z, BB[IB + 3] = this._w, this
      }
      WZB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return NB.FromArrayToRef(BB, IB, this)
      }
      equals(BB) {
        return BB && this._x === BB._x && this._y === BB._y && this._z === BB._z && this._w === BB._w
      }
      equalsWithEpsilon(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TB.d;
        return BB && (0, vB.WithinEpsilon)(this._x, BB._x, IB) && (0, vB.WithinEpsilon)(this._y, BB._y, IB) && (0, vB.WithinEpsilon)(this._z, BB._z, IB) && (0, vB.WithinEpsilon)(this._w, BB._w, IB)
      }
      isApprox(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : TB.d;
        return BB && ((0, vB.WithinEpsilon)(this._x, BB._x, IB) && (0, vB.WithinEpsilon)(this._y, BB._y, IB) && (0, vB.WithinEpsilon)(this._z, BB._z, IB) && (0, vB.WithinEpsilon)(this._w, BB._w, IB) || (0, vB.WithinEpsilon)(this._x, -BB._x, IB) && (0, vB.WithinEpsilon)(this._y, -BB._y, IB) && (0, vB.WithinEpsilon)(this._z, -BB._z, IB) && (0, vB.WithinEpsilon)(this._w, -BB._w, IB))
      }
      clone() {
        return new NB(this._x, this._y, this._z, this._w)
      }
      TY(BB) {
        return this._x = BB._x, this._y = BB._y, this._z = BB._z, this._w = BB._w, this._isDirty = !0, this
      }
      cBB(BB, IB, ZB, TB) {
        return this._x = BB, this._y = IB, this._z = ZB, this._w = TB, this._isDirty = !0, this
      }
      set(BB, IB, ZB, TB) {
        return this.cBB(BB, IB, ZB, TB)
      }
      K9(BB) {
        return this.cBB(BB, BB, BB, BB)
      }
      add(BB) {
        return new NB(this._x + BB._x, this._y + BB._y, this._z + BB._z, this._w + BB._w)
      }
      addInPlace(BB) {
        return this._x += BB._x, this._y += BB._y, this._z += BB._z, this._w += BB._w, this._isDirty = !0, this
      }
      addToRef(BB, IB) {
        return IB._x = this._x + BB._x, IB._y = this._y + BB._y, IB._z = this._z + BB._z, IB._w = this._w + BB._w, IB._isDirty = !0, IB
      }
      addInPlaceFromFloats(BB, IB, ZB, TB) {
        return this._x += BB, this._y += IB, this._z += ZB, this._w += TB, this._isDirty = !0, this
      }
      subtractToRef(BB, IB) {
        return IB._x = this._x - BB._x, IB._y = this._y - BB._y, IB._z = this._z - BB._z, IB._w = this._w - BB._w, IB._isDirty = !0, IB
      }
      subtractFromFloats(BB, IB, ZB, TB) {
        return this.subtractFromFloatsToRef(BB, IB, ZB, TB, new NB)
      }
      subtractFromFloatsToRef(BB, IB, ZB, TB, JB) {
        return JB._x = this._x - BB, JB._y = this._y - IB, JB._z = this._z - ZB, JB._w = this._w - TB, JB._isDirty = !0, JB
      }
      subtract(BB) {
        return new NB(this._x - BB._x, this._y - BB._y, this._z - BB._z, this._w - BB._w)
      }
      VTB(BB) {
        return this._x -= BB._x, this._y -= BB._y, this._z -= BB._z, this._w -= BB._w, this._isDirty = !0, this
      }
      scale(BB) {
        return new NB(this._x * BB, this._y * BB, this._z * BB, this._w * BB)
      }
      scaleToRef(BB, IB) {
        return IB._x = this._x * BB, IB._y = this._y * BB, IB._z = this._z * BB, IB._w = this._w * BB, IB._isDirty = !0, IB
      }
      scaleInPlace(BB) {
        return this._x *= BB, this._y *= BB, this._z *= BB, this._w *= BB, this._isDirty = !0, this
      }
      scaleAndAddToRef(BB, IB) {
        return IB._x += this._x * BB, IB._y += this._y * BB, IB._z += this._z * BB, IB._w += this._w * BB, IB._isDirty = !0, IB
      }
      multiply(BB) {
        const IB = new NB(0, 0, 0, 1);
        return this.multiplyToRef(BB, IB), IB
      }
      multiplyToRef(BB, IB) {
        const ZB = this._x * BB._w + this._y * BB._z - this._z * BB._y + this._w * BB._x,
          TB = -this._x * BB._z + this._y * BB._w + this._z * BB._x + this._w * BB._y,
          JB = this._x * BB._y - this._y * BB._x + this._z * BB._w + this._w * BB._z,
          oB = -this._x * BB._x - this._y * BB._y - this._z * BB._z + this._w * BB._w;
        return IB.cBB(ZB, TB, JB, oB), IB
      }
      multiplyInPlace(BB) {
        return this.multiplyToRef(BB, this)
      }
      multiplyByFloats(BB, IB, ZB, TB) {
        return this._x *= BB, this._y *= IB, this._z *= ZB, this._w *= TB, this._isDirty = !0, this
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(BB, IB) {
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
      dv() {
        return this.negateToRef(new NB)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(BB) {
        return BB._x = -this._x, BB._y = -this._y, BB._z = -this._z, BB._w = -this._w, BB._isDirty = !0, BB
      }
      kvB(BB, IB, ZB, TB) {
        return this._x === BB && this._y === IB && this._z === ZB && this._w === TB
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
        return BB.cBB(-this._x, -this._y, -this._z, this._w), BB
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new NB(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const BB = this.conjugate(),
          IB = this.lengthSquared();
        return 0 == IB || 1 == IB || BB.scaleInPlace(1 / IB), BB
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
        const BB = new NB(0, 0, 0, 1);
        return this.normalizeToRef(BB), BB
      }
      normalizeToRef(BB) {
        const IB = this.length();
        return 0 === IB || 1 === IB ? BB.cBB(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / IB, BB)
      }
      toEulerAngles() {
        const BB = zB.Zero();
        return this.toEulerAnglesToRef(BB), BB
      }
      toEulerAnglesToRef(BB) {
        const IB = this._z,
          ZB = this._x,
          TB = this._y,
          JB = this._w,
          oB = TB * IB - ZB * JB,
          GB = .4999999;
        if (oB < -GB) BB._y = 2 * Math.atan2(TB, JB), BB._x = Math.PI / 2, BB._z = 0, BB._isDirty = !0;
        else if (oB > GB) BB._y = 2 * Math.atan2(TB, JB), BB._x = -Math.PI / 2, BB._z = 0, BB._isDirty = !0;
        else {
          const GB = JB * JB,
            vB = IB * IB,
            kB = ZB * ZB,
            cB = TB * TB;
          BB._z = Math.atan2(2 * (ZB * TB + IB * JB), -vB - kB + cB + GB), BB._x = Math.asin(-2 * oB), BB._y = Math.atan2(2 * (IB * ZB + TB * JB), vB - kB - cB + GB), BB._isDirty = !0
        }
        return BB
      }
      toAlphaBetaGammaToRef(BB) {
        const IB = this._z,
          ZB = this._x,
          TB = this._y,
          JB = this._w,
          oB = Math.sqrt(ZB * ZB + TB * TB),
          GB = Math.sqrt(IB * IB + JB * JB),
          vB = 2 * Math.atan2(oB, GB),
          kB = 2 * Math.atan2(IB, JB),
          cB = 2 * Math.atan2(TB, ZB),
          nB = (kB + cB) / 2,
          hB = (kB - cB) / 2;
        return BB.set(hB, vB, nB), BB
      }
      toRotationMatrix(BB) {
        return gB.FromQuaternionToRef(this, BB), BB
      }
      fromRotationMatrix(BB) {
        return NB.FromRotationMatrixToRef(BB, this), this
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
        let IB;
        const ZB = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          TB = this._w;
        return ZB > 0 ? (IB = 2 * Math.atan2(ZB, TB), BB.set(this._x / ZB, this._y / ZB, this._z / ZB)) : (IB = 0, BB.set(1, 0, 0)), IB
      }
      static FromRotationMatrix(BB) {
        const IB = new NB;
        return NB.FromRotationMatrixToRef(BB, IB), IB
      }
      static FromRotationMatrixToRef(BB, IB) {
        const ZB = BB.m,
          TB = ZB[0],
          JB = ZB[4],
          oB = ZB[8],
          GB = ZB[1],
          vB = ZB[5],
          kB = ZB[9],
          cB = ZB[2],
          nB = ZB[6],
          hB = ZB[10],
          zB = TB + vB + hB;
        let FB;
        return zB > 0 ? (FB = .5 / Math.sqrt(zB + 1), IB._w = .25 / FB, IB._x = (nB - kB) * FB, IB._y = (oB - cB) * FB, IB._z = (GB - JB) * FB, IB._isDirty = !0) : TB > vB && TB > hB ? (FB = 2 * Math.sqrt(1 + TB - vB - hB), IB._w = (nB - kB) / FB, IB._x = .25 * FB, IB._y = (JB + GB) / FB, IB._z = (oB + cB) / FB, IB._isDirty = !0) : vB > hB ? (FB = 2 * Math.sqrt(1 + vB - TB - hB), IB._w = (oB - cB) / FB, IB._x = (JB + GB) / FB, IB._y = .25 * FB, IB._z = (kB + nB) / FB, IB._isDirty = !0) : (FB = 2 * Math.sqrt(1 + hB - TB - vB), IB._w = (GB - JB) / FB, IB._x = (oB + cB) / FB, IB._y = (kB + nB) / FB, IB._z = .25 * FB, IB._isDirty = !0), IB
      }
      static Dot(BB, IB) {
        return BB._x * IB._x + BB._y * IB._y + BB._z * IB._z + BB._w * IB._w
      }
      static AreClose(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const TB = NB.Dot(BB, IB);
        return 1 - TB * TB <= ZB
      }
      static SmoothToRef(BB, IB, ZB, TB, JB) {
        let oB = 0 === TB ? 1 : ZB / TB;
        return oB = (0, vB.Clamp)(oB, 0, 1), NB.SlerpToRef(BB, IB, oB, JB), JB
      }
      static Zero() {
        return new NB(0, 0, 0, 0)
      }
      static Inverse(BB) {
        return new NB(-BB._x, -BB._y, -BB._z, BB._w)
      }
      static InverseToRef(BB, IB) {
        return IB.set(-BB._x, -BB._y, -BB._z, BB._w), IB
      }
      static Identity() {
        return new NB(0, 0, 0, 1)
      }
      static IsIdentity(BB) {
        return BB && 0 === BB._x && 0 === BB._y && 0 === BB._z && 1 === BB._w
      }
      static RotationAxis(BB, IB) {
        return NB.RotationAxisToRef(BB, IB, new NB)
      }
      static RotationAxisToRef(BB, IB, ZB) {
        ZB._w = Math.cos(IB / 2);
        const TB = Math.sin(IB / 2) / BB.length();
        return ZB._x = BB._x * TB, ZB._y = BB._y * TB, ZB._z = BB._z * TB, ZB._isDirty = !0, ZB
      }
      static FromArray(BB, IB) {
        return IB || (IB = 0), new NB(BB[IB], BB[IB + 1], BB[IB + 2], BB[IB + 3])
      }
      static FromArrayToRef(BB, IB, ZB) {
        return ZB._x = BB[IB], ZB._y = BB[IB + 1], ZB._z = BB[IB + 2], ZB._w = BB[IB + 3], ZB._isDirty = !0, ZB
      }
      static FromFloatsToRef(BB, IB, ZB, TB, JB) {
        return JB.cBB(BB, IB, ZB, TB), JB
      }
      static FromEulerAngles(BB, IB, ZB) {
        const TB = new NB;
        return NB.RotationYawPitchRollToRef(IB, BB, ZB, TB), TB
      }
      static FromEulerAnglesToRef(BB, IB, ZB, TB) {
        return NB.RotationYawPitchRollToRef(IB, BB, ZB, TB), TB
      }
      static FromEulerVector(BB) {
        const IB = new NB;
        return NB.RotationYawPitchRollToRef(BB._y, BB._x, BB._z, IB), IB
      }
      static FromEulerVectorToRef(BB, IB) {
        return NB.RotationYawPitchRollToRef(BB._y, BB._x, BB._z, IB), IB
      }
      static FromUnitVectorsToRef(BB, IB, ZB) {
        let JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : TB.d;
        const oB = zB.Dot(BB, IB) + 1;
        return oB < JB ? Math.abs(BB.x) > Math.abs(BB.z) ? ZB.set(-BB.y, BB.x, 0, 0) : ZB.set(0, -BB.z, BB.y, 0) : (zB.CrossToRef(BB, IB, yB.rN[0]), ZB.set(yB.rN[0].x, yB.rN[0].y, yB.rN[0].z, oB)), ZB.normalize()
      }
      static RotationYawPitchRoll(BB, IB, ZB) {
        const TB = new NB;
        return NB.RotationYawPitchRollToRef(BB, IB, ZB, TB), TB
      }
      static RotationYawPitchRollToRef(BB, IB, ZB, TB) {
        const JB = .5 * ZB,
          oB = .5 * IB,
          GB = .5 * BB,
          vB = Math.sin(JB),
          kB = Math.cos(JB),
          cB = Math.sin(oB),
          nB = Math.cos(oB),
          hB = Math.sin(GB),
          zB = Math.cos(GB);
        return TB._x = zB * cB * kB + hB * nB * vB, TB._y = hB * nB * kB - zB * cB * vB, TB._z = zB * nB * vB - hB * cB * kB, TB._w = zB * nB * kB + hB * cB * vB, TB._isDirty = !0, TB
      }
      static RotationAlphaBetaGamma(BB, IB, ZB) {
        const TB = new NB;
        return NB.RotationAlphaBetaGammaToRef(BB, IB, ZB, TB), TB
      }
      static RotationAlphaBetaGammaToRef(BB, IB, ZB, TB) {
        const JB = .5 * (ZB + BB),
          oB = .5 * (ZB - BB),
          GB = .5 * IB;
        return TB._x = Math.cos(oB) * Math.sin(GB), TB._y = Math.sin(oB) * Math.sin(GB), TB._z = Math.sin(JB) * Math.cos(GB), TB._w = Math.cos(JB) * Math.cos(GB), TB._isDirty = !0, TB
      }
      static RotationQuaternionFromAxis(BB, IB, ZB) {
        const TB = new NB(0, 0, 0, 0);
        return NB.RotationQuaternionFromAxisToRef(BB, IB, ZB, TB), TB
      }
      static RotationQuaternionFromAxisToRef(BB, IB, ZB, TB) {
        const JB = qB.Matrix[0];
        return BB = BB.normalizeToRef(qB.rN[0]), IB = IB.normalizeToRef(qB.rN[1]), ZB = ZB.normalizeToRef(qB.rN[2]), gB.FromXYZAxesToRef(BB, IB, ZB, JB), NB.FromRotationMatrixToRef(JB, TB), TB
      }
      static FromLookDirectionLH(BB, IB) {
        const ZB = new NB;
        return NB.FromLookDirectionLHToRef(BB, IB, ZB), ZB
      }
      static FromLookDirectionLHToRef(BB, IB, ZB) {
        const TB = qB.Matrix[0];
        return gB.LookDirectionLHToRef(BB, IB, TB), NB.FromRotationMatrixToRef(TB, ZB), ZB
      }
      static FromLookDirectionRH(BB, IB) {
        const ZB = new NB;
        return NB.FromLookDirectionRHToRef(BB, IB, ZB), ZB
      }
      static FromLookDirectionRHToRef(BB, IB, ZB) {
        const TB = qB.Matrix[0];
        return gB.LookDirectionRHToRef(BB, IB, TB), NB.FromRotationMatrixToRef(TB, ZB)
      }
      static Slerp(BB, IB, ZB) {
        const TB = NB.Identity();
        return NB.SlerpToRef(BB, IB, ZB, TB), TB
      }
      static SlerpToRef(BB, IB, ZB, TB) {
        let JB, oB, GB = BB._x * IB._x + BB._y * IB._y + BB._z * IB._z + BB._w * IB._w,
          vB = !1;
        if (GB < 0 && (vB = !0, GB = -GB), GB > .999999) oB = 1 - ZB, JB = vB ? -ZB : ZB;
        else {
          const BB = Math.acos(GB),
            IB = 1 / Math.sin(BB);
          oB = Math.sin((1 - ZB) * BB) * IB, JB = vB ? -Math.sin(ZB * BB) * IB : Math.sin(ZB * BB) * IB
        }
        return TB._x = oB * BB._x + JB * IB._x, TB._y = oB * BB._y + JB * IB._y, TB._z = oB * BB._z + JB * IB._z, TB._w = oB * BB._w + JB * IB._w, TB._isDirty = !0, TB
      }
      static Hermite(BB, IB, ZB, TB, JB) {
        const oB = JB * JB,
          GB = JB * oB,
          vB = 2 * GB - 3 * oB + 1,
          kB = -2 * GB + 3 * oB,
          cB = GB - 2 * oB + JB,
          nB = GB - oB,
          hB = BB._x * vB + ZB._x * kB + IB._x * cB + TB._x * nB,
          zB = BB._y * vB + ZB._y * kB + IB._y * cB + TB._y * nB,
          FB = BB._z * vB + ZB._z * kB + IB._z * cB + TB._z * nB,
          gB = BB._w * vB + ZB._w * kB + IB._w * cB + TB._w * nB;
        return new NB(hB, zB, FB, gB)
      }
      static Hermite1stDerivative(BB, IB, ZB, TB, JB) {
        const oB = new NB;
        return this.Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB), oB
      }
      static Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB) {
        const GB = JB * JB;
        return oB._x = 6 * (GB - JB) * BB._x + (3 * GB - 4 * JB + 1) * IB._x + 6 * (-GB + JB) * ZB._x + (3 * GB - 2 * JB) * TB._x, oB._y = 6 * (GB - JB) * BB._y + (3 * GB - 4 * JB + 1) * IB._y + 6 * (-GB + JB) * ZB._y + (3 * GB - 2 * JB) * TB._y, oB._z = 6 * (GB - JB) * BB._z + (3 * GB - 4 * JB + 1) * IB._z + 6 * (-GB + JB) * ZB._z + (3 * GB - 2 * JB) * TB._z, oB._w = 6 * (GB - JB) * BB._w + (3 * GB - 4 * JB + 1) * IB._w + 6 * (-GB + JB) * ZB._w + (3 * GB - 2 * JB) * TB._w, oB._isDirty = !0, oB
      }
      static Normalize(BB) {
        const IB = NB.Zero();
        return NB.NormalizeToRef(BB, IB), IB
      }
      static NormalizeToRef(BB, IB) {
        return BB.normalizeToRef(IB), IB
      }
      static Clamp(BB, IB, ZB) {
        const TB = new NB;
        return NB.ClampToRef(BB, IB, ZB, TB), TB
      }
      static ClampToRef(BB, IB, ZB, TB) {
        return TB.cBB((0, vB.Clamp)(BB.x, IB.x, ZB.x), (0, vB.Clamp)(BB.y, IB.y, ZB.y), (0, vB.Clamp)(BB.z, IB.z, ZB.z), (0, vB.Clamp)(BB.w, IB.w, ZB.w))
      }
      static Random() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new NB((0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB))
      }
      static RandomToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).cBB((0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB), (0, vB.RandomRange)(BB, IB))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(BB, IB) {
        return Math.sqrt(NB.DistanceSquared(BB, IB))
      }
      static DistanceSquared(BB, IB) {
        const ZB = BB.x - IB.x,
          TB = BB.y - IB.y,
          JB = BB.z - IB.z,
          oB = BB.w - IB.w;
        return ZB * ZB + TB * TB + JB * JB + oB * oB
      }
      static Center(BB, IB) {
        return NB.CenterToRef(BB, IB, NB.Zero())
      }
      static CenterToRef(BB, IB, ZB) {
        return ZB.cBB((BB.x + IB.x) / 2, (BB.y + IB.y) / 2, (BB.z + IB.z) / 2, (BB.w + IB.w) / 2)
      }
    }
    NB._V8PerformanceHack = new NB(.5, .5, .5, .5);
    class gB {
      static get Use64Bits() {
        return oB.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = kB.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          TB = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = BB, this._isIdentity3x2 = BB || ZB, this._isIdentityDirty = !this._isIdentity && IB, this._isIdentity3x2Dirty = !this._isIdentity3x2 && TB
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, oB.b.MatrixTrackPrecisionChange && oB.b.MatrixTrackedMatrices.push(this), this._m = new oB.b.MatrixCurrentType(16), this.markAsUpdated()
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
          IB = BB[0],
          ZB = BB[1],
          TB = BB[2],
          JB = BB[3],
          oB = BB[4],
          GB = BB[5],
          vB = BB[6],
          kB = BB[7],
          cB = BB[8],
          nB = BB[9],
          hB = BB[10],
          zB = BB[11],
          FB = BB[12],
          NB = BB[13],
          gB = BB[14],
          qB = BB[15],
          yB = hB * qB - gB * zB,
          UB = nB * qB - NB * zB,
          WB = nB * gB - NB * hB,
          dB = cB * qB - FB * zB,
          CB = cB * gB - hB * FB,
          QB = cB * NB - FB * nB;
        return IB * +(GB * yB - vB * UB + kB * WB) + ZB * -(oB * yB - vB * dB + kB * CB) + TB * +(oB * UB - GB * dB + kB * QB) + JB * -(oB * WB - GB * CB + vB * QB)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!BB) return this._m;
        const ZB = this._m;
        for (let TB = 0; TB < 16; TB++) BB[IB + TB] = ZB[TB];
        return this
      }
      HTB() {
        return this._m
      }
      WZB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return gB.FromArrayToRef(BB, IB, this)
      }
      cBB() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        return gB.FromArrayToRef(IB, 0, this)
      }
      set() {
        const BB = this._m;
        for (let IB = 0; IB < 16; IB++) BB[IB] = IB < 0 || arguments.length <= IB ? void 0 : arguments[IB];
        return this.markAsUpdated(), this
      }
      K9(BB) {
        const IB = this._m;
        for (let ZB = 0; ZB < 16; ZB++) IB[ZB] = BB;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return gB.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(BB) {
        const IB = new gB;
        return this.addToRef(BB, IB), IB
      }
      addToRef(BB, IB) {
        const ZB = this._m,
          TB = IB._m,
          JB = BB.m;
        for (let oB = 0; oB < 16; oB++) TB[oB] = ZB[oB] + JB[oB];
        return IB.markAsUpdated(), IB
      }
      addToSelf(BB) {
        const IB = this._m,
          ZB = BB.m;
        return IB[0] += ZB[0], IB[1] += ZB[1], IB[2] += ZB[2], IB[3] += ZB[3], IB[4] += ZB[4], IB[5] += ZB[5], IB[6] += ZB[6], IB[7] += ZB[7], IB[8] += ZB[8], IB[9] += ZB[9], IB[10] += ZB[10], IB[11] += ZB[11], IB[12] += ZB[12], IB[13] += ZB[13], IB[14] += ZB[14], IB[15] += ZB[15], this.markAsUpdated(), this
      }
      addInPlace(BB) {
        const IB = this._m,
          ZB = BB.m;
        for (let TB = 0; TB < 16; TB++) IB[TB] += ZB[TB];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const BB = this._m;
        for (let IB = 0; IB < 16; IB++) BB[IB] += IB < 0 || arguments.length <= IB ? void 0 : arguments[IB];
        return this.markAsUpdated(), this
      }
      subtract(BB) {
        const IB = this._m,
          ZB = BB.m;
        for (let TB = 0; TB < 16; TB++) IB[TB] -= ZB[TB];
        return this.markAsUpdated(), this
      }
      subtractToRef(BB, IB) {
        const ZB = this._m,
          TB = BB.m,
          JB = IB._m;
        for (let oB = 0; oB < 16; oB++) JB[oB] = ZB[oB] - TB[oB];
        return IB.markAsUpdated(), IB
      }
      VTB(BB) {
        const IB = this._m,
          ZB = BB.m;
        for (let TB = 0; TB < 16; TB++) IB[TB] -= ZB[TB];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        return this.subtractFromFloatsToRef(...IB, new gB)
      }
      subtractFromFloatsToRef() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        const TB = IB.pop(),
          JB = this._m,
          oB = TB._m,
          GB = IB;
        for (let vB = 0; vB < 16; vB++) oB[vB] = JB[vB] - GB[vB];
        return TB.markAsUpdated(), TB
      }
      invertToRef(BB) {
        return !0 === this._isIdentity ? (gB.IdentityToRef(BB), BB) : ((0, kB.c)(this, BB.HTB()) ? BB.markAsUpdated() : BB.TY(this), BB)
      }
      addAtIndex(BB, IB) {
        return this._m[BB] += IB, this.markAsUpdated(), this
      }
      multiplyAtIndex(BB, IB) {
        return this._m[BB] *= IB, this.markAsUpdated(), this
      }
      setTranslationFromFloats(BB, IB, ZB) {
        return this._m[12] = BB, this._m[13] = IB, this._m[14] = ZB, this.markAsUpdated(), this
      }
      addTranslationFromFloats(BB, IB, ZB) {
        return this._m[12] += BB, this._m[13] += IB, this._m[14] += ZB, this.markAsUpdated(), this
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
        return gB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, BB[12], BB[13], BB[14], BB[15], this), this._updateIdentityStatus(0 === BB[12] && 0 === BB[13] && 0 === BB[14] && 1 === BB[15]), this
      }
      TY(BB) {
        BB.copyToArray(this._m);
        const IB = BB;
        return this.updateFlag = IB.updateFlag, this._updateIdentityStatus(IB._isIdentity, IB._isIdentityDirty, IB._isIdentity3x2, IB._isIdentity3x2Dirty), this
      }
      copyToArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, kB.b)(this, BB, IB), this
      }
      multiply(BB) {
        const IB = new gB;
        return this.multiplyToRef(BB, IB), IB
      }
      multiplyInPlace(BB) {
        const IB = this._m,
          ZB = BB.m;
        for (let TB = 0; TB < 16; TB++) IB[TB] *= ZB[TB];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const BB = this._m;
        for (let IB = 0; IB < 16; IB++) BB[IB] *= IB < 0 || arguments.length <= IB ? void 0 : arguments[IB];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        const TB = IB.pop(),
          JB = this._m,
          oB = TB._m,
          GB = IB;
        for (let vB = 0; vB < 16; vB++) oB[vB] = JB[vB] * GB[vB];
        return TB.markAsUpdated(), TB
      }
      multiplyToRef(BB, IB) {
        return this._isIdentity ? (IB.TY(BB), IB) : BB._isIdentity ? (IB.TY(this), IB) : (this.multiplyToArray(BB, IB._m, 0), IB.markAsUpdated(), IB)
      }
      multiplyToArray(BB, IB, ZB) {
        return (0, kB.l)(this, BB, IB, ZB), this
      }
      divide(BB) {
        return this.divideToRef(BB, new gB)
      }
      divideToRef(BB, IB) {
        const ZB = this._m,
          TB = BB.m,
          JB = IB._m;
        for (let oB = 0; oB < 16; oB++) JB[oB] = ZB[oB] / TB[oB];
        return IB.markAsUpdated(), IB
      }
      divideInPlace(BB) {
        const IB = this._m,
          ZB = BB.m;
        for (let TB = 0; TB < 16; TB++) IB[TB] /= ZB[TB];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(BB) {
        const IB = this._m,
          ZB = BB.m;
        for (let TB = 0; TB < 16; TB++) IB[TB] = Math.min(IB[TB], ZB[TB]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const BB = this._m;
        for (let IB = 0; IB < 16; IB++) BB[IB] = Math.min(BB[IB], IB < 0 || arguments.length <= IB ? void 0 : arguments[IB]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(BB) {
        const IB = this._m,
          ZB = BB.m;
        for (let TB = 0; TB < 16; TB++) IB[TB] = Math.max(IB[TB], ZB[TB]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const BB = this._m;
        for (let IB = 0; IB < 16; IB++) BB[IB] = Math.max(BB[IB], IB < 0 || arguments.length <= IB ? void 0 : arguments[IB]);
        return this.markAsUpdated(), this
      }
      dv() {
        return this.negateToRef(new gB)
      }
      negateInPlace() {
        const BB = this._m;
        for (let IB = 0; IB < 16; IB++) BB[IB] = -BB[IB];
        return this.markAsUpdated(), this
      }
      negateToRef(BB) {
        const IB = this._m,
          ZB = BB._m;
        for (let TB = 0; TB < 16; TB++) ZB[TB] = -IB[TB];
        return BB.markAsUpdated(), BB
      }
      equals(BB) {
        const IB = BB;
        if (!IB) return !1;
        if ((this._isIdentity || IB._isIdentity) && !this._isIdentityDirty && !IB._isIdentityDirty) return this._isIdentity && IB._isIdentity;
        const ZB = this.m,
          TB = IB.m;
        return ZB[0] === TB[0] && ZB[1] === TB[1] && ZB[2] === TB[2] && ZB[3] === TB[3] && ZB[4] === TB[4] && ZB[5] === TB[5] && ZB[6] === TB[6] && ZB[7] === TB[7] && ZB[8] === TB[8] && ZB[9] === TB[9] && ZB[10] === TB[10] && ZB[11] === TB[11] && ZB[12] === TB[12] && ZB[13] === TB[13] && ZB[14] === TB[14] && ZB[15] === TB[15]
      }
      equalsWithEpsilon(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = this._m,
          TB = BB.m;
        for (let JB = 0; JB < 16; JB++)
          if (!(0, vB.WithinEpsilon)(ZB[JB], TB[JB], IB)) return !1;
        return !0
      }
      kvB() {
        const BB = this._m;
        for (let IB = 0; IB < 16; IB++)
          if (BB[IB] != (IB < 0 || arguments.length <= IB ? void 0 : arguments[IB])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new gB)
      }
      floorToRef(BB) {
        const IB = this._m,
          ZB = BB._m;
        for (let TB = 0; TB < 16; TB++) ZB[TB] = Math.floor(IB[TB]);
        return BB.markAsUpdated(), BB
      }
      fract() {
        return this.fractToRef(new gB)
      }
      fractToRef(BB) {
        const IB = this._m,
          ZB = BB._m;
        for (let TB = 0; TB < 16; TB++) ZB[TB] = IB[TB] - Math.floor(IB[TB]);
        return BB.markAsUpdated(), BB
      }
      clone() {
        const BB = new gB;
        return BB.TY(this), BB
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let BB = nB(this._m[0]);
        for (let IB = 1; IB < 16; IB++) BB = 397 * BB ^ nB(this._m[IB]);
        return BB
      }
      decomposeToTransformNode(BB) {
        return BB.rotationQuaternion = BB.rotationQuaternion || new NB, this.decompose(BB.ek, BB.rotationQuaternion, BB.position)
      }
      decompose(BB, IB, ZB, TB) {
        let JB = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return ZB && ZB.K9(0), BB && BB.K9(1), IB && IB.cBB(0, 0, 0, 1), !0;
        const oB = this._m;
        if (ZB && ZB.cBB(oB[12], oB[13], oB[14]), (BB = BB || qB.rN[0]).x = Math.sqrt(oB[0] * oB[0] + oB[1] * oB[1] + oB[2] * oB[2]), BB.y = Math.sqrt(oB[4] * oB[4] + oB[5] * oB[5] + oB[6] * oB[6]), BB.z = Math.sqrt(oB[8] * oB[8] + oB[9] * oB[9] + oB[10] * oB[10]), TB) {
          const IB = (JB ? TB.absoluteScaling.x : TB.ek.x) < 0 ? -1 : 1,
            ZB = (JB ? TB.absoluteScaling.y : TB.ek.y) < 0 ? -1 : 1,
            oB = (JB ? TB.absoluteScaling.z : TB.ek.z) < 0 ? -1 : 1;
          BB.x *= IB, BB.y *= ZB, BB.z *= oB
        } else this.determinant() <= 0 && (BB.y *= -1);
        if (0 === BB._x || 0 === BB._y || 0 === BB._z) return IB && IB.cBB(0, 0, 0, 1), !1;
        if (IB) {
          const ZB = 1 / BB._x,
            TB = 1 / BB._y,
            JB = 1 / BB._z;
          gB.FromValuesToRef(oB[0] * ZB, oB[1] * ZB, oB[2] * ZB, 0, oB[4] * TB, oB[5] * TB, oB[6] * TB, 0, oB[8] * JB, oB[9] * JB, oB[10] * JB, 0, 0, 0, 0, 1, qB.Matrix[0]), NB.FromRotationMatrixToRef(qB.Matrix[0], IB)
        }
        return !0
      }
      getRow(BB) {
        if (BB < 0 || BB > 3) return null;
        const IB = 4 * BB;
        return new FB(this._m[IB + 0], this._m[IB + 1], this._m[IB + 2], this._m[IB + 3])
      }
      getRowToRef(BB, IB) {
        if (BB >= 0 && BB <= 3) {
          const ZB = 4 * BB;
          IB.x = this._m[ZB + 0], IB.y = this._m[ZB + 1], IB.z = this._m[ZB + 2], IB.w = this._m[ZB + 3]
        }
        return IB
      }
      setRow(BB, IB) {
        return this.setRowFromFloats(BB, IB.x, IB.y, IB.z, IB.w)
      }
      transpose() {
        const BB = new gB;
        return gB.TransposeToRef(this, BB), BB
      }
      transposeToRef(BB) {
        return gB.TransposeToRef(this, BB), BB
      }
      setRowFromFloats(BB, IB, ZB, TB, JB) {
        if (BB < 0 || BB > 3) return this;
        const oB = 4 * BB;
        return this._m[oB + 0] = IB, this._m[oB + 1] = ZB, this._m[oB + 2] = TB, this._m[oB + 3] = JB, this.markAsUpdated(), this
      }
      scale(BB) {
        const IB = new gB;
        return this.scaleToRef(BB, IB), IB
      }
      scaleToRef(BB, IB) {
        for (let ZB = 0; ZB < 16; ZB++) IB._m[ZB] = this._m[ZB] * BB;
        return IB.markAsUpdated(), IB
      }
      scaleAndAddToRef(BB, IB) {
        for (let ZB = 0; ZB < 16; ZB++) IB._m[ZB] += this._m[ZB] * BB;
        return IB.markAsUpdated(), IB
      }
      scaleInPlace(BB) {
        const IB = this._m;
        for (let ZB = 0; ZB < 16; ZB++) IB[ZB] *= BB;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(BB) {
        const IB = qB.Matrix[0];
        this.invertToRef(IB), IB.transposeToRef(BB);
        const ZB = BB._m;
        return gB.FromValuesToRef(ZB[0], ZB[1], ZB[2], 0, ZB[4], ZB[5], ZB[6], 0, ZB[8], ZB[9], ZB[10], 0, 0, 0, 0, 1, BB), BB
      }
      getRotationMatrix() {
        const BB = new gB;
        return this.getRotationMatrixToRef(BB), BB
      }
      getRotationMatrixToRef(BB) {
        const IB = qB.rN[0];
        if (!this.decompose(IB)) return gB.IdentityToRef(BB), BB;
        const ZB = this._m,
          TB = 1 / IB._x,
          JB = 1 / IB._y,
          oB = 1 / IB._z;
        return gB.FromValuesToRef(ZB[0] * TB, ZB[1] * TB, ZB[2] * TB, 0, ZB[4] * JB, ZB[5] * JB, ZB[6] * JB, 0, ZB[8] * oB, ZB[9] * oB, ZB[10] * oB, 0, 0, 0, 0, 1, BB), BB
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
        return this.multiplyToRef(UB, this), this
      }
      static FromArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZB = new gB;
        return gB.FromArrayToRef(BB, IB, ZB), ZB
      }
      static FromArrayToRef(BB, IB, ZB) {
        for (let TB = 0; TB < 16; TB++) ZB._m[TB] = BB[TB + IB];
        return ZB.markAsUpdated(), ZB
      }
      static FromFloat32ArrayToRefScaled(BB, IB, ZB, TB) {
        return TB._m[0] = BB[0 + IB] * ZB, TB._m[1] = BB[1 + IB] * ZB, TB._m[2] = BB[2 + IB] * ZB, TB._m[3] = BB[3 + IB] * ZB, TB._m[4] = BB[4 + IB] * ZB, TB._m[5] = BB[5 + IB] * ZB, TB._m[6] = BB[6 + IB] * ZB, TB._m[7] = BB[7 + IB] * ZB, TB._m[8] = BB[8 + IB] * ZB, TB._m[9] = BB[9 + IB] * ZB, TB._m[10] = BB[10 + IB] * ZB, TB._m[11] = BB[11 + IB] * ZB, TB._m[12] = BB[12 + IB] * ZB, TB._m[13] = BB[13 + IB] * ZB, TB._m[14] = BB[14 + IB] * ZB, TB._m[15] = BB[15 + IB] * ZB, TB.markAsUpdated(), TB
      }
      static get IdentityReadOnly() {
        return gB._IdentityReadOnly
      }
      static FromValuesToRef(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, gB, qB) {
        const yB = qB._m;
        yB[0] = BB, yB[1] = IB, yB[2] = ZB, yB[3] = TB, yB[4] = JB, yB[5] = oB, yB[6] = GB, yB[7] = vB, yB[8] = kB, yB[9] = cB, yB[10] = nB, yB[11] = hB, yB[12] = zB, yB[13] = FB, yB[14] = NB, yB[15] = gB, qB.markAsUpdated()
      }
      static FromValues(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB, FB, NB, qB) {
        const yB = new gB,
          UB = yB._m;
        return UB[0] = BB, UB[1] = IB, UB[2] = ZB, UB[3] = TB, UB[4] = JB, UB[5] = oB, UB[6] = GB, UB[7] = vB, UB[8] = kB, UB[9] = cB, UB[10] = nB, UB[11] = hB, UB[12] = zB, UB[13] = FB, UB[14] = NB, UB[15] = qB, yB.markAsUpdated(), yB
      }
      static Compose(BB, IB, ZB) {
        const TB = new gB;
        return gB.ComposeToRef(BB, IB, ZB, TB), TB
      }
      static ComposeToRef(BB, IB, ZB, TB) {
        const JB = TB._m,
          oB = IB._x,
          GB = IB._y,
          vB = IB._z,
          kB = IB._w,
          cB = oB + oB,
          nB = GB + GB,
          hB = vB + vB,
          zB = oB * cB,
          FB = oB * nB,
          NB = oB * hB,
          gB = GB * nB,
          qB = GB * hB,
          yB = vB * hB,
          UB = kB * cB,
          WB = kB * nB,
          dB = kB * hB,
          CB = BB._x,
          QB = BB._y,
          sB = BB._z;
        return JB[0] = (1 - (gB + yB)) * CB, JB[1] = (FB + dB) * CB, JB[2] = (NB - WB) * CB, JB[3] = 0, JB[4] = (FB - dB) * QB, JB[5] = (1 - (zB + yB)) * QB, JB[6] = (qB + UB) * QB, JB[7] = 0, JB[8] = (NB + WB) * sB, JB[9] = (qB - UB) * sB, JB[10] = (1 - (zB + gB)) * sB, JB[11] = 0, JB[12] = ZB._x, JB[13] = ZB._y, JB[14] = ZB._z, JB[15] = 1, TB.markAsUpdated(), TB
      }
      static Identity() {
        const BB = gB.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return BB._updateIdentityStatus(!0), BB
      }
      static IdentityToRef(BB) {
        return gB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, BB), BB._updateIdentityStatus(!0), BB
      }
      static Zero() {
        const BB = gB.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return BB._updateIdentityStatus(!1), BB
      }
      static RotationX(BB) {
        const IB = new gB;
        return gB.RotationXToRef(BB, IB), IB
      }
      static Invert(BB) {
        const IB = new gB;
        return BB.invertToRef(IB), IB
      }
      static RotationXToRef(BB, IB) {
        const ZB = Math.sin(BB),
          TB = Math.cos(BB);
        return gB.FromValuesToRef(1, 0, 0, 0, 0, TB, ZB, 0, 0, -ZB, TB, 0, 0, 0, 0, 1, IB), IB._updateIdentityStatus(1 === TB && 0 === ZB), IB
      }
      static RotationY(BB) {
        const IB = new gB;
        return gB.RotationYToRef(BB, IB), IB
      }
      static RotationYToRef(BB, IB) {
        const ZB = Math.sin(BB),
          TB = Math.cos(BB);
        return gB.FromValuesToRef(TB, 0, -ZB, 0, 0, 1, 0, 0, ZB, 0, TB, 0, 0, 0, 0, 1, IB), IB._updateIdentityStatus(1 === TB && 0 === ZB), IB
      }
      static RotationZ(BB) {
        const IB = new gB;
        return gB.RotationZToRef(BB, IB), IB
      }
      static RotationZToRef(BB, IB) {
        const ZB = Math.sin(BB),
          TB = Math.cos(BB);
        return gB.FromValuesToRef(TB, ZB, 0, 0, -ZB, TB, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, IB), IB._updateIdentityStatus(1 === TB && 0 === ZB), IB
      }
      static RotationAxis(BB, IB) {
        const ZB = new gB;
        return gB.RotationAxisToRef(BB, IB, ZB), ZB
      }
      static RotationAxisToRef(BB, IB, ZB) {
        const TB = Math.sin(-IB),
          JB = Math.cos(-IB),
          oB = 1 - JB;
        BB = BB.normalizeToRef(qB.rN[0]);
        const GB = ZB._m;
        return GB[0] = BB._x * BB._x * oB + JB, GB[1] = BB._x * BB._y * oB - BB._z * TB, GB[2] = BB._x * BB._z * oB + BB._y * TB, GB[3] = 0, GB[4] = BB._y * BB._x * oB + BB._z * TB, GB[5] = BB._y * BB._y * oB + JB, GB[6] = BB._y * BB._z * oB - BB._x * TB, GB[7] = 0, GB[8] = BB._z * BB._x * oB - BB._y * TB, GB[9] = BB._z * BB._y * oB + BB._x * TB, GB[10] = BB._z * BB._z * oB + JB, GB[11] = 0, GB[12] = 0, GB[13] = 0, GB[14] = 0, GB[15] = 1, ZB.markAsUpdated(), ZB
      }
      static RotationAlignToRef(BB, IB, ZB) {
        let JB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const oB = zB.Dot(IB, BB),
          GB = ZB._m;
        if (oB < -1 + TB.d) GB[0] = -1, GB[1] = 0, GB[2] = 0, GB[3] = 0, GB[4] = 0, GB[5] = JB ? 1 : -1, GB[6] = 0, GB[7] = 0, GB[8] = 0, GB[9] = 0, GB[10] = JB ? -1 : 1, GB[11] = 0;
        else {
          const ZB = zB.Cross(IB, BB),
            TB = 1 / (1 + oB);
          GB[0] = ZB._x * ZB._x * TB + oB, GB[1] = ZB._y * ZB._x * TB - ZB._z, GB[2] = ZB._z * ZB._x * TB + ZB._y, GB[3] = 0, GB[4] = ZB._x * ZB._y * TB + ZB._z, GB[5] = ZB._y * ZB._y * TB + oB, GB[6] = ZB._z * ZB._y * TB - ZB._x, GB[7] = 0, GB[8] = ZB._x * ZB._z * TB - ZB._y, GB[9] = ZB._y * ZB._z * TB + ZB._x, GB[10] = ZB._z * ZB._z * TB + oB, GB[11] = 0
        }
        return GB[12] = 0, GB[13] = 0, GB[14] = 0, GB[15] = 1, ZB.markAsUpdated(), ZB
      }
      static RotationYawPitchRoll(BB, IB, ZB) {
        const TB = new gB;
        return gB.RotationYawPitchRollToRef(BB, IB, ZB, TB), TB
      }
      static RotationYawPitchRollToRef(BB, IB, ZB, TB) {
        return NB.RotationYawPitchRollToRef(BB, IB, ZB, qB.Quaternion[0]), qB.Quaternion[0].toRotationMatrix(TB), TB
      }
      static Scaling(BB, IB, ZB) {
        const TB = new gB;
        return gB.ScalingToRef(BB, IB, ZB, TB), TB
      }
      static ScalingToRef(BB, IB, ZB, TB) {
        return gB.FromValuesToRef(BB, 0, 0, 0, 0, IB, 0, 0, 0, 0, ZB, 0, 0, 0, 0, 1, TB), TB._updateIdentityStatus(1 === BB && 1 === IB && 1 === ZB), TB
      }
      static Translation(BB, IB, ZB) {
        const TB = new gB;
        return gB.TranslationToRef(BB, IB, ZB, TB), TB
      }
      static TranslationToRef(BB, IB, ZB, TB) {
        return gB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, BB, IB, ZB, 1, TB), TB._updateIdentityStatus(0 === BB && 0 === IB && 0 === ZB), TB
      }
      static Lerp(BB, IB, ZB) {
        const TB = new gB;
        return gB.LerpToRef(BB, IB, ZB, TB), TB
      }
      static LerpToRef(BB, IB, ZB, TB) {
        const JB = TB._m,
          oB = BB.m,
          GB = IB.m;
        for (let vB = 0; vB < 16; vB++) JB[vB] = oB[vB] * (1 - ZB) + GB[vB] * ZB;
        return TB.markAsUpdated(), TB
      }
      static DecomposeLerp(BB, IB, ZB) {
        const TB = new gB;
        return gB.DecomposeLerpToRef(BB, IB, ZB, TB), TB
      }
      static DecomposeLerpToRef(BB, IB, ZB, TB) {
        const JB = qB.rN[0],
          oB = qB.Quaternion[0],
          GB = qB.rN[1];
        BB.decompose(JB, oB, GB);
        const vB = qB.rN[2],
          kB = qB.Quaternion[1],
          cB = qB.rN[3];
        IB.decompose(vB, kB, cB);
        const nB = qB.rN[4];
        zB.LerpToRef(JB, vB, ZB, nB);
        const hB = qB.Quaternion[2];
        NB.SlerpToRef(oB, kB, ZB, hB);
        const FB = qB.rN[5];
        return zB.LerpToRef(GB, cB, ZB, FB), gB.ComposeToRef(nB, hB, FB, TB), TB
      }
      static LookAtLH(BB, IB, ZB) {
        const TB = new gB;
        return gB.LookAtLHToRef(BB, IB, ZB, TB), TB
      }
      static LookAtLHToRef(BB, IB, ZB, TB) {
        const JB = qB.rN[0],
          oB = qB.rN[1],
          GB = qB.rN[2];
        IB.subtractToRef(BB, GB), GB.normalize(), zB.CrossToRef(ZB, GB, JB);
        const vB = JB.lengthSquared();
        0 === vB ? JB.x = 1 : JB.normalizeFromLength(Math.sqrt(vB)), zB.CrossToRef(GB, JB, oB), oB.normalize();
        const kB = -zB.Dot(JB, BB),
          cB = -zB.Dot(oB, BB),
          nB = -zB.Dot(GB, BB);
        return gB.FromValuesToRef(JB._x, oB._x, GB._x, 0, JB._y, oB._y, GB._y, 0, JB._z, oB._z, GB._z, 0, kB, cB, nB, 1, TB), TB
      }
      static LookAtRH(BB, IB, ZB) {
        const TB = new gB;
        return gB.LookAtRHToRef(BB, IB, ZB, TB), TB
      }
      static LookAtRHToRef(BB, IB, ZB, TB) {
        const JB = qB.rN[0],
          oB = qB.rN[1],
          GB = qB.rN[2];
        BB.subtractToRef(IB, GB), GB.normalize(), zB.CrossToRef(ZB, GB, JB);
        const vB = JB.lengthSquared();
        0 === vB ? JB.x = 1 : JB.normalizeFromLength(Math.sqrt(vB)), zB.CrossToRef(GB, JB, oB), oB.normalize();
        const kB = -zB.Dot(JB, BB),
          cB = -zB.Dot(oB, BB),
          nB = -zB.Dot(GB, BB);
        return gB.FromValuesToRef(JB._x, oB._x, GB._x, 0, JB._y, oB._y, GB._y, 0, JB._z, oB._z, GB._z, 0, kB, cB, nB, 1, TB), TB
      }
      static LookDirectionLH(BB, IB) {
        const ZB = new gB;
        return gB.LookDirectionLHToRef(BB, IB, ZB), ZB
      }
      static LookDirectionLHToRef(BB, IB, ZB) {
        const TB = qB.rN[0];
        TB.TY(BB), TB.scaleInPlace(-1);
        const JB = qB.rN[1];
        return zB.CrossToRef(IB, TB, JB), gB.FromValuesToRef(JB._x, JB._y, JB._z, 0, IB._x, IB._y, IB._z, 0, TB._x, TB._y, TB._z, 0, 0, 0, 0, 1, ZB), ZB
      }
      static LookDirectionRH(BB, IB) {
        const ZB = new gB;
        return gB.LookDirectionRHToRef(BB, IB, ZB), ZB
      }
      static LookDirectionRHToRef(BB, IB, ZB) {
        const TB = qB.rN[2];
        return zB.CrossToRef(IB, BB, TB), gB.FromValuesToRef(TB._x, TB._y, TB._z, 0, IB._x, IB._y, IB._z, 0, BB._x, BB._y, BB._z, 0, 0, 0, 0, 1, ZB), ZB
      }
      static OrthoLH(BB, IB, ZB, TB, JB) {
        const oB = new gB;
        return gB.OrthoLHToRef(BB, IB, ZB, TB, oB, JB), oB
      }
      static OrthoLHToRef(BB, IB, ZB, TB, JB, oB) {
        const GB = 2 / BB,
          vB = 2 / IB,
          kB = 2 / (TB - ZB),
          cB = -(TB + ZB) / (TB - ZB);
        return gB.FromValuesToRef(GB, 0, 0, 0, 0, vB, 0, 0, 0, 0, kB, 0, 0, 0, cB, 1, JB), oB && JB.multiplyToRef(UB, JB), JB._updateIdentityStatus(1 === GB && 1 === vB && 1 === kB && 0 === cB), JB
      }
      static OrthoOffCenterLH(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = new gB;
        return gB.OrthoOffCenterLHToRef(BB, IB, ZB, TB, JB, oB, vB, GB), vB
      }
      static OrthoOffCenterLHToRef(BB, IB, ZB, TB, JB, oB, GB, vB) {
        const kB = 2 / (IB - BB),
          cB = 2 / (TB - ZB),
          nB = 2 / (oB - JB),
          hB = -(oB + JB) / (oB - JB),
          zB = (BB + IB) / (BB - IB),
          FB = (TB + ZB) / (ZB - TB);
        return gB.FromValuesToRef(kB, 0, 0, 0, 0, cB, 0, 0, 0, 0, nB, 0, zB, FB, hB, 1, GB), vB && GB.multiplyToRef(UB, GB), GB.markAsUpdated(), GB
      }
      static ObliqueOffCenterLHToRef(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
        const hB = -GB * Math.cos(vB),
          zB = -GB * Math.sin(vB);
        return gB.TranslationToRef(0, 0, -kB, qB.Matrix[1]), gB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, hB, zB, 1, 0, 0, 0, 0, 1, qB.Matrix[0]), qB.Matrix[1].multiplyToRef(qB.Matrix[0], qB.Matrix[0]), gB.TranslationToRef(0, 0, kB, qB.Matrix[1]), qB.Matrix[0].multiplyToRef(qB.Matrix[1], qB.Matrix[0]), gB.OrthoOffCenterLHToRef(BB, IB, ZB, TB, JB, oB, cB, nB), qB.Matrix[0].multiplyToRef(cB, cB), cB
      }
      static OrthoOffCenterRH(BB, IB, ZB, TB, JB, oB, GB) {
        const vB = new gB;
        return gB.OrthoOffCenterRHToRef(BB, IB, ZB, TB, JB, oB, vB, GB), vB
      }
      static OrthoOffCenterRHToRef(BB, IB, ZB, TB, JB, oB, GB, vB) {
        return gB.OrthoOffCenterLHToRef(BB, IB, ZB, TB, JB, oB, GB, vB), GB._m[10] *= -1, GB
      }
      static ObliqueOffCenterRHToRef(BB, IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB) {
        const hB = GB * Math.cos(vB),
          zB = GB * Math.sin(vB);
        return gB.TranslationToRef(0, 0, kB, qB.Matrix[1]), gB.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, hB, zB, 1, 0, 0, 0, 0, 1, qB.Matrix[0]), qB.Matrix[1].multiplyToRef(qB.Matrix[0], qB.Matrix[0]), gB.TranslationToRef(0, 0, -kB, qB.Matrix[1]), qB.Matrix[0].multiplyToRef(qB.Matrix[1], qB.Matrix[0]), gB.OrthoOffCenterRHToRef(BB, IB, ZB, TB, JB, oB, cB, nB), qB.Matrix[0].multiplyToRef(cB, cB), cB
      }
      static PerspectiveLH(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const GB = new gB,
          vB = 2 * ZB / BB,
          kB = 2 * ZB / IB,
          cB = (TB + ZB) / (TB - ZB),
          nB = -2 * TB * ZB / (TB - ZB),
          hB = Math.tan(oB);
        return gB.FromValuesToRef(vB, 0, 0, 0, 0, kB, 0, hB, 0, 0, cB, 1, 0, 0, nB, 0, GB), JB && GB.multiplyToRef(UB, GB), GB._updateIdentityStatus(!1), GB
      }
      static PerspectiveFovLH(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const vB = new gB;
        return gB.PerspectiveFovLHToRef(BB, IB, ZB, TB, vB, !0, JB, oB, GB), vB
      }
      static PerspectiveFovLHToRef(BB, IB, ZB, TB, JB) {
        let oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          GB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          kB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const cB = ZB,
          nB = TB,
          hB = 1 / Math.tan(.5 * BB),
          zB = oB ? hB / IB : hB,
          FB = oB ? hB : hB * IB,
          NB = kB && 0 === cB ? -1 : 0 !== nB ? (nB + cB) / (nB - cB) : 1,
          qB = kB && 0 === cB ? 2 * nB : 0 !== nB ? -2 * nB * cB / (nB - cB) : -2 * cB,
          yB = Math.tan(vB);
        return gB.FromValuesToRef(zB, 0, 0, 0, 0, FB, 0, yB, 0, 0, NB, 1, 0, 0, qB, 0, JB), GB && JB.multiplyToRef(UB, JB), JB._updateIdentityStatus(!1), JB
      }
      static PerspectiveFovReverseLHToRef(BB, IB, ZB, TB, JB) {
        let oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          GB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const kB = 1 / Math.tan(.5 * BB),
          cB = oB ? kB / IB : kB,
          nB = oB ? kB : kB * IB,
          hB = Math.tan(vB);
        return gB.FromValuesToRef(cB, 0, 0, 0, 0, nB, 0, hB, 0, 0, -ZB, 1, 0, 0, 1, 0, JB), GB && JB.multiplyToRef(UB, JB), JB._updateIdentityStatus(!1), JB
      }
      static PerspectiveFovRH(BB, IB, ZB, TB, JB) {
        let oB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          GB = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const vB = new gB;
        return gB.PerspectiveFovRHToRef(BB, IB, ZB, TB, vB, !0, JB, oB, GB), vB
      }
      static PerspectiveFovRHToRef(BB, IB, ZB, TB, JB) {
        let oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          GB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          kB = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const cB = ZB,
          nB = TB,
          hB = 1 / Math.tan(.5 * BB),
          zB = oB ? hB / IB : hB,
          FB = oB ? hB : hB * IB,
          NB = kB && 0 === cB ? 1 : 0 !== nB ? -(nB + cB) / (nB - cB) : -1,
          qB = kB && 0 === cB ? 2 * nB : 0 !== nB ? -2 * nB * cB / (nB - cB) : -2 * cB,
          yB = Math.tan(vB);
        return gB.FromValuesToRef(zB, 0, 0, 0, 0, FB, 0, yB, 0, 0, NB, -1, 0, 0, qB, 0, JB), GB && JB.multiplyToRef(UB, JB), JB._updateIdentityStatus(!1), JB
      }
      static PerspectiveFovReverseRHToRef(BB, IB, ZB, TB, JB) {
        let oB = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          GB = arguments.length > 6 ? arguments[6] : void 0,
          vB = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const kB = 1 / Math.tan(.5 * BB),
          cB = oB ? kB / IB : kB,
          nB = oB ? kB : kB * IB,
          hB = Math.tan(vB);
        return gB.FromValuesToRef(cB, 0, 0, 0, 0, nB, 0, hB, 0, 0, -ZB, -1, 0, 0, -1, 0, JB), GB && JB.multiplyToRef(UB, JB), JB._updateIdentityStatus(!1), JB
      }
      static GetFinalMatrix(BB, IB, ZB, TB, JB, oB) {
        const GB = BB.width,
          vB = BB.height,
          kB = BB.x,
          cB = BB.y,
          nB = gB.FromValues(GB / 2, 0, 0, 0, 0, -vB / 2, 0, 0, 0, 0, oB - JB, 0, kB + GB / 2, vB / 2 + cB, JB, 1),
          hB = new gB;
        return IB.multiplyToRef(ZB, hB), hB.multiplyToRef(TB, hB), hB.multiplyToRef(nB, hB)
      }
      static GetAsMatrix2x2(BB) {
        const IB = BB.m,
          ZB = [IB[0], IB[1], IB[4], IB[5]];
        return oB.b.MatrixUse64Bits ? ZB : new Float32Array(ZB)
      }
      static GetAsMatrix3x3(BB) {
        const IB = BB.m,
          ZB = [IB[0], IB[1], IB[2], IB[4], IB[5], IB[6], IB[8], IB[9], IB[10]];
        return oB.b.MatrixUse64Bits ? ZB : new Float32Array(ZB)
      }
      static Transpose(BB) {
        const IB = new gB;
        return gB.TransposeToRef(BB, IB), IB
      }
      static TransposeToRef(BB, IB) {
        const ZB = BB.m,
          TB = ZB[0],
          JB = ZB[4],
          oB = ZB[8],
          GB = ZB[12],
          vB = ZB[1],
          kB = ZB[5],
          cB = ZB[9],
          nB = ZB[13],
          hB = ZB[2],
          zB = ZB[6],
          FB = ZB[10],
          NB = ZB[14],
          gB = ZB[3],
          qB = ZB[7],
          yB = ZB[11],
          UB = ZB[15],
          WB = IB._m;
        return WB[0] = TB, WB[1] = JB, WB[2] = oB, WB[3] = GB, WB[4] = vB, WB[5] = kB, WB[6] = cB, WB[7] = nB, WB[8] = hB, WB[9] = zB, WB[10] = FB, WB[11] = NB, WB[12] = gB, WB[13] = qB, WB[14] = yB, WB[15] = UB, IB.markAsUpdated(), IB._updateIdentityStatus(BB._isIdentity, BB._isIdentityDirty), IB
      }
      static Reflection(BB) {
        const IB = new gB;
        return gB.ReflectionToRef(BB, IB), IB
      }
      static ReflectionToRef(BB, IB) {
        BB.normalize();
        const ZB = BB.normal.x,
          TB = BB.normal.y,
          JB = BB.normal.z,
          oB = -2 * ZB,
          GB = -2 * TB,
          vB = -2 * JB;
        return gB.FromValuesToRef(oB * ZB + 1, GB * ZB, vB * ZB, 0, oB * TB, GB * TB + 1, vB * TB, 0, oB * JB, GB * JB, vB * JB + 1, 0, oB * BB.d, GB * BB.d, vB * BB.d, 1, IB), IB
      }
      static FromXYZAxesToRef(BB, IB, ZB, TB) {
        return gB.FromValuesToRef(BB._x, BB._y, BB._z, 0, IB._x, IB._y, IB._z, 0, ZB._x, ZB._y, ZB._z, 0, 0, 0, 0, 1, TB), TB
      }
      static FromQuaternionToRef(BB, IB) {
        const ZB = BB._x * BB._x,
          TB = BB._y * BB._y,
          JB = BB._z * BB._z,
          oB = BB._x * BB._y,
          GB = BB._z * BB._w,
          vB = BB._z * BB._x,
          kB = BB._y * BB._w,
          cB = BB._y * BB._z,
          nB = BB._x * BB._w;
        return IB._m[0] = 1 - 2 * (TB + JB), IB._m[1] = 2 * (oB + GB), IB._m[2] = 2 * (vB - kB), IB._m[3] = 0, IB._m[4] = 2 * (oB - GB), IB._m[5] = 1 - 2 * (JB + ZB), IB._m[6] = 2 * (cB + nB), IB._m[7] = 0, IB._m[8] = 2 * (vB + kB), IB._m[9] = 2 * (cB - nB), IB._m[10] = 1 - 2 * (TB + ZB), IB._m[11] = 0, IB._m[12] = 0, IB._m[13] = 0, IB._m[14] = 0, IB._m[15] = 1, IB.markAsUpdated(), IB
      }
    }
    gB._IdentityReadOnly = gB.Identity();
    class qB {}
    qB.rN = (0, JB.f)(11, zB.Zero), qB.Matrix = (0, JB.f)(2, gB.Identity), qB.Quaternion = (0, JB.f)(3, NB.Zero);
    class yB {}
    yB.Vector2 = (0, JB.f)(3, hB.Zero), yB.rN = (0, JB.f)(13, zB.Zero), yB.Vector4 = (0, JB.f)(3, FB.Zero), yB.Quaternion = (0, JB.f)(3, NB.Zero), yB.Matrix = (0, JB.f)(8, gB.Identity);
    const UB = gB.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let WB = !1;

    function dB() {
      WB || (WB = !0, Object.defineProperties(hB.prototype, {
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
      }), Object.defineProperties(FB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(NB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(gB.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, cB.i)("BABYLON.Vector2", hB), (0, cB.i)("BABYLON.Vector3", zB), (0, cB.i)("BABYLON.Vector4", FB), (0, cB.i)("BABYLON.Matrix", gB))
    }
  },
  37153: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    const TB = "undefined" !== typeof WeakRef;
    class JB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(BB, IB, ZB, TB)
      }
      initialize(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = BB, this.skipNextObservers = IB, this.target = ZB, this.currentTarget = TB, this
      }
    }
    class oB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = BB, this.mask = IB, this.scope = ZB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(BB)
      }
    }
    class GB {
      static FromPromise(BB, IB) {
        const ZB = new GB;
        return BB.then((BB => {
          ZB.notifyObservers(BB)
        })).catch((BB => {
          if (!IB) throw BB;
          IB.notifyObservers(BB)
        })), ZB
      }
      get observers() {
        return this._observers
      }
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = IB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new JB(0), BB && (this._onObserverAdded = BB)
      }
      add(BB) {
        let IB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ZB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!BB) return null;
        const JB = new oB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        JB.unregisterOnNextCall = ZB, IB ? this._observers.unshift(JB) : this._observers.push(JB), this._onObserverAdded && this._onObserverAdded(JB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(JB, this._lastNotifiedValue);
        const GB = TB ? new WeakRef(this) : {
          deref: () => this
        };
        return JB._remove = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const IB = GB.deref();
          IB && (BB ? IB.remove(JB) : IB._remove(JB))
        }, JB
      }
      addOnce(BB) {
        return this.add(BB, void 0, void 0, void 0, !0)
      }
      remove(BB) {
        if (!BB) return !1;
        BB._remove = null;
        return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
      }
      removeCallback(BB, IB) {
        for (let ZB = 0; ZB < this._observers.length; ZB++) {
          const TB = this._observers[ZB];
          if (!TB._willBeUnregistered && (TB.callback === BB && (!IB || IB === TB.scope))) return this._deferUnregister(TB), !0
        }
        return !1
      }
      _deferUnregister(BB) {
        BB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, BB.unregisterOnNextCall = !1, BB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(BB)
        }), 0))
      }
      _remove(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB) return !1;
        const ZB = this._observers.indexOf(BB);
        return -1 !== ZB && (IB && this._numObserversMarkedAsDeleted--, this._observers.splice(ZB, 1), !0)
      }
      makeObserverTopPriority(BB) {
        this._remove(BB, !1), this._observers.unshift(BB)
      }
      makeObserverBottomPriority(BB) {
        this._remove(BB, !1), this._observers.push(BB)
      }
      notifyObservers(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BB), !this._observers.length) return !0;
        const oB = this._eventState;
        oB.mask = IB, oB.target = ZB, oB.currentTarget = TB, oB.skipNextObservers = !1, oB.lastReturnValue = BB, oB.userInfo = JB;
        for (const GB of this._observers)
          if (!GB._willBeUnregistered && (GB.mask & IB && (GB.unregisterOnNextCall && this._deferUnregister(GB), GB.scope ? oB.lastReturnValue = GB.callback.apply(GB.scope, [BB, oB]) : oB.lastReturnValue = GB.callback(BB, oB)), oB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = IB), BB._willBeUnregistered) return;
        const TB = this._eventState;
        TB.mask = ZB, TB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(IB, TB)
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
        const BB = new GB;
        return BB._observers = this._observers.slice(0), BB
      }
      hasSpecificMask() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const IB of this._observers)
          if (IB.mask & BB || IB.mask === BB) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);