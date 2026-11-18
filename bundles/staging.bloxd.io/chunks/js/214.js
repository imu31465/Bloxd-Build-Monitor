export const id = 214;
export const ids = [214];
export const modules = {
  36192: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36200);
    class UJ {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    UJ.Instances = [], UJ.OnEnginesDisposedObservable = new FJ.c, UJ._LastCreatedScene = null, UJ.UseFallbackTexture = !0, UJ.FallbackTexture = ""
  },
  36189: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => FJ
    });
    class FJ {
      static SetMatrixPrecision(JJ) {
        if (FJ.MatrixTrackPrecisionChange = !1, JJ && !FJ.MatrixUse64Bits && FJ.MatrixTrackedMatrices)
          for (let cJ = 0; cJ < FJ.MatrixTrackedMatrices.length; ++cJ) {
            const JJ = FJ.MatrixTrackedMatrices[cJ],
              ZJ = JJ._m;
            JJ._m = new Array(16);
            for (let cJ = 0; cJ < 16; ++cJ) JJ._m[cJ] = ZJ[cJ]
          }
        FJ.MatrixUse64Bits = JJ, FJ.MatrixCurrentType = FJ.MatrixUse64Bits ? Array : Float32Array, FJ.MatrixTrackedMatrices = null
      }
    }
    FJ.MatrixUse64Bits = !1, FJ.MatrixTrackPrecisionChange = !0, FJ.MatrixCurrentType = Float32Array, FJ.MatrixTrackedMatrices = []
  },
  36212: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => AJ,
      e: () => jJ,
      g: () => qJ,
      i: () => FJ,
      k: () => eJ,
      l: () => XJ
    });
    class FJ {}

    function UJ(JJ) {
      JJ.updateFlag = FJ._UpdateFlagSeed++
    }

    function eJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const UJ = JJ.JFJ(),
        eJ = cJ.JFJ(),
        XJ = UJ[0],
        AJ = UJ[1],
        qJ = UJ[2],
        jJ = UJ[3],
        YJ = UJ[4],
        hJ = UJ[5],
        DJ = UJ[6],
        sJ = UJ[7],
        nJ = UJ[8],
        GJ = UJ[9],
        fJ = UJ[10],
        xJ = UJ[11],
        rJ = UJ[12],
        vJ = UJ[13],
        mJ = UJ[14],
        QJ = UJ[15],
        EJ = eJ[0],
        VJ = eJ[1],
        KJ = eJ[2],
        yJ = eJ[3],
        SJ = eJ[4],
        IJ = eJ[5],
        MJ = eJ[6],
        bJ = eJ[7],
        wJ = eJ[8],
        WJ = eJ[9],
        gJ = eJ[10],
        HJ = eJ[11],
        PJ = eJ[12],
        kJ = eJ[13],
        pJ = eJ[14],
        dJ = eJ[15];
      ZJ[FJ] = XJ * EJ + AJ * SJ + qJ * wJ + jJ * PJ, ZJ[FJ + 1] = XJ * VJ + AJ * IJ + qJ * WJ + jJ * kJ, ZJ[FJ + 2] = XJ * KJ + AJ * MJ + qJ * gJ + jJ * pJ, ZJ[FJ + 3] = XJ * yJ + AJ * bJ + qJ * HJ + jJ * dJ, ZJ[FJ + 4] = YJ * EJ + hJ * SJ + DJ * wJ + sJ * PJ, ZJ[FJ + 5] = YJ * VJ + hJ * IJ + DJ * WJ + sJ * kJ, ZJ[FJ + 6] = YJ * KJ + hJ * MJ + DJ * gJ + sJ * pJ, ZJ[FJ + 7] = YJ * yJ + hJ * bJ + DJ * HJ + sJ * dJ, ZJ[FJ + 8] = nJ * EJ + GJ * SJ + fJ * wJ + xJ * PJ, ZJ[FJ + 9] = nJ * VJ + GJ * IJ + fJ * WJ + xJ * kJ, ZJ[FJ + 10] = nJ * KJ + GJ * MJ + fJ * gJ + xJ * pJ, ZJ[FJ + 11] = nJ * yJ + GJ * bJ + fJ * HJ + xJ * dJ, ZJ[FJ + 12] = rJ * EJ + vJ * SJ + mJ * wJ + QJ * PJ, ZJ[FJ + 13] = rJ * VJ + vJ * IJ + mJ * WJ + QJ * kJ, ZJ[FJ + 14] = rJ * KJ + vJ * MJ + mJ * gJ + QJ * pJ, ZJ[FJ + 15] = rJ * yJ + vJ * bJ + mJ * HJ + QJ * dJ
    }

    function XJ(JJ, cJ, ZJ) {
      let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      eJ(JJ, cJ, ZJ.JFJ(), FJ), UJ(ZJ)
    }

    function AJ(JJ, cJ) {
      let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const FJ = JJ.JFJ();
      cJ[ZJ] = FJ[0], cJ[ZJ + 1] = FJ[1], cJ[ZJ + 2] = FJ[2], cJ[ZJ + 3] = FJ[3], cJ[ZJ + 4] = FJ[4], cJ[ZJ + 5] = FJ[5], cJ[ZJ + 6] = FJ[6], cJ[ZJ + 7] = FJ[7], cJ[ZJ + 8] = FJ[8], cJ[ZJ + 9] = FJ[9], cJ[ZJ + 10] = FJ[10], cJ[ZJ + 11] = FJ[11], cJ[ZJ + 12] = FJ[12], cJ[ZJ + 13] = FJ[13], cJ[ZJ + 14] = FJ[14], cJ[ZJ + 15] = FJ[15]
    }

    function qJ(JJ, cJ) {
      const ZJ = jJ(JJ, cJ.JFJ());
      return ZJ && UJ(cJ), ZJ
    }

    function jJ(JJ, cJ) {
      const ZJ = JJ.JFJ(),
        FJ = ZJ[0],
        UJ = ZJ[1],
        eJ = ZJ[2],
        XJ = ZJ[3],
        AJ = ZJ[4],
        qJ = ZJ[5],
        jJ = ZJ[6],
        YJ = ZJ[7],
        hJ = ZJ[8],
        DJ = ZJ[9],
        sJ = ZJ[10],
        nJ = ZJ[11],
        GJ = ZJ[12],
        fJ = ZJ[13],
        xJ = ZJ[14],
        rJ = ZJ[15],
        vJ = sJ * rJ - xJ * nJ,
        mJ = DJ * rJ - fJ * nJ,
        QJ = DJ * xJ - fJ * sJ,
        EJ = hJ * rJ - GJ * nJ,
        VJ = hJ * xJ - sJ * GJ,
        KJ = hJ * fJ - GJ * DJ,
        yJ = +(qJ * vJ - jJ * mJ + YJ * QJ),
        SJ = -(AJ * vJ - jJ * EJ + YJ * VJ),
        IJ = +(AJ * mJ - qJ * EJ + YJ * KJ),
        MJ = -(AJ * QJ - qJ * VJ + jJ * KJ),
        bJ = FJ * yJ + UJ * SJ + eJ * IJ + XJ * MJ;
      if (0 === bJ) return !1;
      const wJ = 1 / bJ,
        WJ = jJ * rJ - xJ * YJ,
        gJ = qJ * rJ - fJ * YJ,
        HJ = qJ * xJ - fJ * jJ,
        PJ = AJ * rJ - GJ * YJ,
        kJ = AJ * xJ - GJ * jJ,
        pJ = AJ * fJ - GJ * qJ,
        dJ = jJ * nJ - sJ * YJ,
        zJ = qJ * nJ - DJ * YJ,
        NJ = qJ * sJ - DJ * jJ,
        OJ = AJ * nJ - hJ * YJ,
        TJ = AJ * sJ - hJ * jJ,
        CJ = AJ * DJ - hJ * qJ,
        uJ = -(UJ * vJ - eJ * mJ + XJ * QJ),
        iJ = +(FJ * vJ - eJ * EJ + XJ * VJ),
        RJ = -(FJ * mJ - UJ * EJ + XJ * KJ),
        LJ = +(FJ * QJ - UJ * VJ + eJ * KJ),
        aJ = +(UJ * WJ - eJ * gJ + XJ * HJ),
        BJ = -(FJ * WJ - eJ * PJ + XJ * kJ),
        tJ = +(FJ * gJ - UJ * PJ + XJ * pJ),
        oJ = -(FJ * HJ - UJ * kJ + eJ * pJ),
        lJ = -(UJ * dJ - eJ * zJ + XJ * NJ),
        Jc = +(FJ * dJ - eJ * OJ + XJ * TJ),
        cc = -(FJ * zJ - UJ * OJ + XJ * CJ),
        Zc = +(FJ * NJ - UJ * TJ + eJ * CJ);
      return cJ[0] = yJ * wJ, cJ[1] = uJ * wJ, cJ[2] = aJ * wJ, cJ[3] = lJ * wJ, cJ[4] = SJ * wJ, cJ[5] = iJ * wJ, cJ[6] = BJ * wJ, cJ[7] = Jc * wJ, cJ[8] = IJ * wJ, cJ[9] = RJ * wJ, cJ[10] = tJ * wJ, cJ[11] = cc * wJ, cJ[12] = MJ * wJ, cJ[13] = LJ * wJ, cJ[14] = oJ * wJ, cJ[15] = Zc * wJ, !0
    }
    FJ._UpdateFlagSeed = 0
  },
  36174: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      b: () => GJ,
      e: () => nJ,
      f: () => mJ,
      h: () => xJ,
      i: () => hJ,
      j: () => DJ,
      k: () => sJ
    });
    var FJ = ZJ(36177),
      UJ = ZJ(36183),
      eJ = ZJ(36189),
      XJ = ZJ(36192),
      AJ = ZJ(36207),
      qJ = ZJ(36212),
      jJ = ZJ(36216);
    const YJ = JJ => parseInt(JJ.toString().replace(/\W/g, ""));
    class hJ {
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = JJ, this.y = cJ
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let JJ = YJ(this.x);
        return JJ = 397 * JJ ^ YJ(this.y), JJ
      }
      toArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JJ[cJ] = this.x, JJ[cJ + 1] = this.y, this
      }
      zcJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return hJ.FromArrayToRef(JJ, cJ, this), this
      }
      JFJ() {
        return [this.x, this.y]
      }
      rZJ(JJ) {
        return this.x = JJ.x, this.y = JJ.y, this
      }
      K9(JJ, cJ) {
        return this.x = JJ, this.y = cJ, this
      }
      set(JJ, cJ) {
        return this.K9(JJ, cJ)
      }
      X3(JJ) {
        return this.K9(JJ, JJ)
      }
      add(JJ) {
        return new hJ(this.x + JJ.x, this.y + JJ.y)
      }
      addToRef(JJ, cJ) {
        return cJ.x = this.x + JJ.x, cJ.y = this.y + JJ.y, cJ
      }
      addInPlace(JJ) {
        return this.x += JJ.x, this.y += JJ.y, this
      }
      addInPlaceFromFloats(JJ, cJ) {
        return this.x += JJ, this.y += cJ, this
      }
      addVector3(JJ) {
        return new hJ(this.x + JJ.x, this.y + JJ.y)
      }
      subtract(JJ) {
        return new hJ(this.x - JJ.x, this.y - JJ.y)
      }
      subtractToRef(JJ, cJ) {
        return cJ.x = this.x - JJ.x, cJ.y = this.y - JJ.y, cJ
      }
      xFJ(JJ) {
        return this.x -= JJ.x, this.y -= JJ.y, this
      }
      multiplyInPlace(JJ) {
        return this.x *= JJ.x, this.y *= JJ.y, this
      }
      multiply(JJ) {
        return new hJ(this.x * JJ.x, this.y * JJ.y)
      }
      multiplyToRef(JJ, cJ) {
        return cJ.x = this.x * JJ.x, cJ.y = this.y * JJ.y, cJ
      }
      multiplyByFloats(JJ, cJ) {
        return new hJ(this.x * JJ, this.y * cJ)
      }
      divide(JJ) {
        return new hJ(this.x / JJ.x, this.y / JJ.y)
      }
      divideToRef(JJ, cJ) {
        return cJ.x = this.x / JJ.x, cJ.y = this.y / JJ.y, cJ
      }
      divideInPlace(JJ) {
        return this.x = this.x / JJ.x, this.y = this.y / JJ.y, this
      }
      minimizeInPlace(JJ) {
        return this.minimizeInPlaceFromFloats(JJ.x, JJ.y)
      }
      maximizeInPlace(JJ) {
        return this.maximizeInPlaceFromFloats(JJ.x, JJ.y)
      }
      minimizeInPlaceFromFloats(JJ, cJ) {
        return this.x = Math.min(JJ, this.x), this.y = Math.min(cJ, this.y), this
      }
      maximizeInPlaceFromFloats(JJ, cJ) {
        return this.x = Math.max(JJ, this.x), this.y = Math.max(cJ, this.y), this
      }
      subtractFromFloats(JJ, cJ) {
        return new hJ(this.x - JJ, this.y - cJ)
      }
      subtractFromFloatsToRef(JJ, cJ, ZJ) {
        return ZJ.x = this.x - JJ, ZJ.y = this.y - cJ, ZJ
      }
      nZ() {
        return new hJ(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(JJ) {
        return JJ.x = -this.x, JJ.y = -this.y, JJ
      }
      scaleInPlace(JJ) {
        return this.x *= JJ, this.y *= JJ, this
      }
      scale(JJ) {
        return new hJ(this.x * JJ, this.y * JJ)
      }
      scaleToRef(JJ, cJ) {
        return cJ.x = this.x * JJ, cJ.y = this.y * JJ, cJ
      }
      scaleAndAddToRef(JJ, cJ) {
        return cJ.x += this.x * JJ, cJ.y += this.y * JJ, cJ
      }
      equals(JJ) {
        return JJ && this.x === JJ.x && this.y === JJ.y
      }
      equalsWithEpsilon(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FJ.e;
        return JJ && (0, AJ.WithinEpsilon)(this.x, JJ.x, cJ) && (0, AJ.WithinEpsilon)(this.y, JJ.y, cJ)
      }
      KXJ(JJ, cJ) {
        return this.x === JJ && this.y === cJ
      }
      floor() {
        return new hJ(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(JJ) {
        return JJ.x = Math.floor(this.x), JJ.y = Math.floor(this.y), JJ
      }
      fract() {
        return new hJ(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(JJ) {
        return JJ.x = this.x - Math.floor(this.x), JJ.y = this.y - Math.floor(this.y), JJ
      }
      rotate(JJ) {
        return this.rotateToRef(JJ, new hJ)
      }
      rotateToRef(JJ, cJ) {
        const ZJ = Math.cos(JJ),
          FJ = Math.sin(JJ);
        return cJ.x = ZJ * this.x - FJ * this.y, cJ.y = FJ * this.x + ZJ * this.y, cJ
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
      normalizeFromLength(JJ) {
        return 0 === JJ || 1 === JJ ? this : this.scaleInPlace(1 / JJ)
      }
      normalizeToNew() {
        const JJ = new hJ;
        return this.normalizeToRef(JJ), JJ
      }
      normalizeToRef(JJ) {
        const cJ = this.length();
        return 0 === cJ || 1 === cJ ? (JJ.x = this.x, JJ.y = this.y, JJ) : this.scaleToRef(1 / cJ, JJ)
      }
      clone() {
        return new hJ(this.x, this.y)
      }
      dot(JJ) {
        return this.x * JJ.x + this.y * JJ.y
      }
      static Zero() {
        return new hJ(0, 0)
      }
      static One() {
        return new hJ(1, 1)
      }
      static Random() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new hJ((0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ))
      }
      static RandomToRef() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K9((0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ))
      }
      static get ZeroReadOnly() {
        return hJ._ZeroReadOnly
      }
      static FromArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new hJ(JJ[cJ], JJ[cJ + 1])
      }
      static FromArrayToRef(JJ, cJ, ZJ) {
        return ZJ.x = JJ[cJ], ZJ.y = JJ[cJ + 1], ZJ
      }
      static FromFloatsToRef(JJ, cJ, ZJ) {
        return ZJ.K9(JJ, cJ), ZJ
      }
      static CatmullRom(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = UJ * UJ,
          XJ = UJ * eJ,
          AJ = .5 * (2 * cJ.x + (-JJ.x + ZJ.x) * UJ + (2 * JJ.x - 5 * cJ.x + 4 * ZJ.x - FJ.x) * eJ + (-JJ.x + 3 * cJ.x - 3 * ZJ.x + FJ.x) * XJ),
          qJ = .5 * (2 * cJ.y + (-JJ.y + ZJ.y) * UJ + (2 * JJ.y - 5 * cJ.y + 4 * ZJ.y - FJ.y) * eJ + (-JJ.y + 3 * cJ.y - 3 * ZJ.y + FJ.y) * XJ);
        return new hJ(AJ, qJ)
      }
      static ClampToRef(JJ, cJ, ZJ, FJ) {
        return FJ.x = (0, AJ.Clamp)(JJ.x, cJ.x, ZJ.x), FJ.y = (0, AJ.Clamp)(JJ.y, cJ.y, ZJ.y), FJ
      }
      static Clamp(JJ, cJ, ZJ) {
        const FJ = (0, AJ.Clamp)(JJ.x, cJ.x, ZJ.x),
          UJ = (0, AJ.Clamp)(JJ.y, cJ.y, ZJ.y);
        return new hJ(FJ, UJ)
      }
      static Hermite(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = UJ * UJ,
          XJ = UJ * eJ,
          AJ = 2 * XJ - 3 * eJ + 1,
          qJ = -2 * XJ + 3 * eJ,
          jJ = XJ - 2 * eJ + UJ,
          YJ = XJ - eJ,
          DJ = JJ.x * AJ + ZJ.x * qJ + cJ.x * jJ + FJ.x * YJ,
          sJ = JJ.y * AJ + ZJ.y * qJ + cJ.y * jJ + FJ.y * YJ;
        return new hJ(DJ, sJ)
      }
      static Hermite1stDerivative(JJ, cJ, ZJ, FJ, UJ) {
        return this.Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, new hJ)
      }
      static Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = UJ * UJ;
        return eJ.x = 6 * (XJ - UJ) * JJ.x + (3 * XJ - 4 * UJ + 1) * cJ.x + 6 * (-XJ + UJ) * ZJ.x + (3 * XJ - 2 * UJ) * FJ.x, eJ.y = 6 * (XJ - UJ) * JJ.y + (3 * XJ - 4 * UJ + 1) * cJ.y + 6 * (-XJ + UJ) * ZJ.y + (3 * XJ - 2 * UJ) * FJ.y, eJ
      }
      static Lerp(JJ, cJ, ZJ) {
        return hJ.LerpToRef(JJ, cJ, ZJ, new hJ)
      }
      static LerpToRef(JJ, cJ, ZJ, FJ) {
        return FJ.x = JJ.x + (cJ.x - JJ.x) * ZJ, FJ.y = JJ.y + (cJ.y - JJ.y) * ZJ, FJ
      }
      static Dot(JJ, cJ) {
        return JJ.x * cJ.x + JJ.y * cJ.y
      }
      static Normalize(JJ) {
        return hJ.NormalizeToRef(JJ, new hJ)
      }
      static NormalizeToRef(JJ, cJ) {
        return JJ.normalizeToRef(cJ), cJ
      }
      static Minimize(JJ, cJ) {
        const ZJ = JJ.x < cJ.x ? JJ.x : cJ.x,
          FJ = JJ.y < cJ.y ? JJ.y : cJ.y;
        return new hJ(ZJ, FJ)
      }
      static Maximize(JJ, cJ) {
        const ZJ = JJ.x > cJ.x ? JJ.x : cJ.x,
          FJ = JJ.y > cJ.y ? JJ.y : cJ.y;
        return new hJ(ZJ, FJ)
      }
      static Transform(JJ, cJ) {
        return hJ.TransformToRef(JJ, cJ, new hJ)
      }
      static TransformToRef(JJ, cJ, ZJ) {
        const FJ = cJ.m,
          UJ = JJ.x * FJ[0] + JJ.y * FJ[4] + FJ[12],
          eJ = JJ.x * FJ[1] + JJ.y * FJ[5] + FJ[13];
        return ZJ.x = UJ, ZJ.y = eJ, ZJ
      }
      static PointInTriangle(JJ, cJ, ZJ, FJ) {
        const UJ = .5 * (-ZJ.y * FJ.x + cJ.y * (-ZJ.x + FJ.x) + cJ.x * (ZJ.y - FJ.y) + ZJ.x * FJ.y),
          eJ = UJ < 0 ? -1 : 1,
          XJ = (cJ.y * FJ.x - cJ.x * FJ.y + (FJ.y - cJ.y) * JJ.x + (cJ.x - FJ.x) * JJ.y) * eJ,
          AJ = (cJ.x * ZJ.y - cJ.y * ZJ.x + (cJ.y - ZJ.y) * JJ.x + (ZJ.x - cJ.x) * JJ.y) * eJ;
        return XJ > 0 && AJ > 0 && XJ + AJ < 2 * UJ * eJ
      }
      static Distance(JJ, cJ) {
        return Math.sqrt(hJ.DistanceSquared(JJ, cJ))
      }
      static DistanceSquared(JJ, cJ) {
        const ZJ = JJ.x - cJ.x,
          FJ = JJ.y - cJ.y;
        return ZJ * ZJ + FJ * FJ
      }
      static Center(JJ, cJ) {
        return hJ.CenterToRef(JJ, cJ, new hJ)
      }
      static CenterToRef(JJ, cJ, ZJ) {
        return ZJ.K9((JJ.x + cJ.x) / 2, (JJ.y + cJ.y) / 2)
      }
      static DistanceOfPointFromSegment(JJ, cJ, ZJ) {
        const FJ = hJ.DistanceSquared(cJ, ZJ);
        if (0 === FJ) return hJ.Distance(JJ, cJ);
        const UJ = ZJ.subtract(cJ),
          eJ = Math.max(0, Math.min(1, hJ.Dot(JJ.subtract(cJ), UJ) / FJ)),
          XJ = cJ.add(UJ.multiplyByFloats(eJ, eJ));
        return hJ.Distance(JJ, XJ)
      }
    }
    hJ._V8PerformanceHack = new hJ(.5, .5), hJ._ZeroReadOnly = hJ.Zero();
    class DJ {
      get x() {
        return this._x
      }
      set x(JJ) {
        this._x = JJ, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(JJ) {
        this._y = JJ, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(JJ) {
        this._z = JJ, this._isDirty = !0
      }
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = JJ, this._y = cJ, this._z = ZJ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Pn"
      }
      getHashCode() {
        let JJ = YJ(this._x);
        return JJ = 397 * JJ ^ YJ(this._y), JJ = 397 * JJ ^ YJ(this._z), JJ
      }
      JFJ() {
        return [this._x, this._y, this._z]
      }
      toArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JJ[cJ] = this._x, JJ[cJ + 1] = this._y, JJ[cJ + 2] = this._z, this
      }
      zcJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DJ.FromArrayToRef(JJ, cJ, this), this
      }
      toQuaternion() {
        return nJ.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(JJ) {
        return this._x += JJ._x, this._y += JJ._y, this._z += JJ._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(JJ, cJ, ZJ) {
        return this._x += JJ, this._y += cJ, this._z += ZJ, this._isDirty = !0, this
      }
      add(JJ) {
        return new DJ(this._x + JJ._x, this._y + JJ._y, this._z + JJ._z)
      }
      addToRef(JJ, cJ) {
        return cJ._x = this._x + JJ._x, cJ._y = this._y + JJ._y, cJ._z = this._z + JJ._z, cJ._isDirty = !0, cJ
      }
      xFJ(JJ) {
        return this._x -= JJ._x, this._y -= JJ._y, this._z -= JJ._z, this._isDirty = !0, this
      }
      subtract(JJ) {
        return new DJ(this._x - JJ._x, this._y - JJ._y, this._z - JJ._z)
      }
      subtractToRef(JJ, cJ) {
        return this.subtractFromFloatsToRef(JJ._x, JJ._y, JJ._z, cJ)
      }
      subtractFromFloats(JJ, cJ, ZJ) {
        return new DJ(this._x - JJ, this._y - cJ, this._z - ZJ)
      }
      subtractFromFloatsToRef(JJ, cJ, ZJ, FJ) {
        return FJ._x = this._x - JJ, FJ._y = this._y - cJ, FJ._z = this._z - ZJ, FJ._isDirty = !0, FJ
      }
      nZ() {
        return new DJ(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(JJ) {
        return JJ._x = -1 * this._x, JJ._y = -1 * this._y, JJ._z = -1 * this._z, JJ._isDirty = !0, JJ
      }
      scaleInPlace(JJ) {
        return this._x *= JJ, this._y *= JJ, this._z *= JJ, this._isDirty = !0, this
      }
      scale(JJ) {
        return new DJ(this._x * JJ, this._y * JJ, this._z * JJ)
      }
      scaleToRef(JJ, cJ) {
        return cJ._x = this._x * JJ, cJ._y = this._y * JJ, cJ._z = this._z * JJ, cJ._isDirty = !0, cJ
      }
      getNormalToRef(JJ) {
        const cJ = this.length();
        let ZJ = Math.acos(this._y / cJ);
        const FJ = Math.atan2(this._z, this._x);
        ZJ > Math.PI / 2 ? ZJ -= Math.PI / 2 : ZJ += Math.PI / 2;
        const UJ = cJ * Math.sin(ZJ) * Math.cos(FJ),
          eJ = cJ * Math.cos(ZJ),
          XJ = cJ * Math.sin(ZJ) * Math.sin(FJ);
        return JJ.set(UJ, eJ, XJ), JJ
      }
      applyRotationQuaternionToRef(JJ, cJ) {
        const ZJ = this._x,
          FJ = this._y,
          UJ = this._z,
          eJ = JJ._x,
          XJ = JJ._y,
          AJ = JJ._z,
          qJ = JJ._w,
          jJ = 2 * (XJ * UJ - AJ * FJ),
          YJ = 2 * (AJ * ZJ - eJ * UJ),
          hJ = 2 * (eJ * FJ - XJ * ZJ);
        return cJ._x = ZJ + qJ * jJ + XJ * hJ - AJ * YJ, cJ._y = FJ + qJ * YJ + AJ * jJ - eJ * hJ, cJ._z = UJ + qJ * hJ + eJ * YJ - XJ * jJ, cJ._isDirty = !0, cJ
      }
      applyRotationQuaternionInPlace(JJ) {
        return this.applyRotationQuaternionToRef(JJ, this)
      }
      applyRotationQuaternion(JJ) {
        return this.applyRotationQuaternionToRef(JJ, new DJ)
      }
      scaleAndAddToRef(JJ, cJ) {
        return cJ._x += this._x * JJ, cJ._y += this._y * JJ, cJ._z += this._z * JJ, cJ._isDirty = !0, cJ
      }
      projectOnPlane(JJ, cJ) {
        return this.projectOnPlaneToRef(JJ, cJ, new DJ)
      }
      projectOnPlaneToRef(JJ, cJ, ZJ) {
        const FJ = JJ.normal,
          UJ = JJ.d,
          eJ = fJ.Pn[0];
        this.subtractToRef(cJ, eJ), eJ.normalize();
        const XJ = DJ.Dot(eJ, FJ);
        if (Math.abs(XJ) < 1e-10) ZJ.X3(1 / 0);
        else {
          const JJ = -(DJ.Dot(cJ, FJ) + UJ) / XJ,
            AJ = eJ.scaleInPlace(JJ);
          cJ.addToRef(AJ, ZJ)
        }
        return ZJ
      }
      equals(JJ) {
        return JJ && this._x === JJ._x && this._y === JJ._y && this._z === JJ._z
      }
      equalsWithEpsilon(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FJ.e;
        return JJ && (0, AJ.WithinEpsilon)(this._x, JJ._x, cJ) && (0, AJ.WithinEpsilon)(this._y, JJ._y, cJ) && (0, AJ.WithinEpsilon)(this._z, JJ._z, cJ)
      }
      KXJ(JJ, cJ, ZJ) {
        return this._x === JJ && this._y === cJ && this._z === ZJ
      }
      multiplyInPlace(JJ) {
        return this._x *= JJ._x, this._y *= JJ._y, this._z *= JJ._z, this._isDirty = !0, this
      }
      multiply(JJ) {
        return this.multiplyByFloats(JJ._x, JJ._y, JJ._z)
      }
      multiplyToRef(JJ, cJ) {
        return cJ._x = this._x * JJ._x, cJ._y = this._y * JJ._y, cJ._z = this._z * JJ._z, cJ._isDirty = !0, cJ
      }
      multiplyByFloats(JJ, cJ, ZJ) {
        return new DJ(this._x * JJ, this._y * cJ, this._z * ZJ)
      }
      divide(JJ) {
        return new DJ(this._x / JJ._x, this._y / JJ._y, this._z / JJ._z)
      }
      divideToRef(JJ, cJ) {
        return cJ._x = this._x / JJ._x, cJ._y = this._y / JJ._y, cJ._z = this._z / JJ._z, cJ._isDirty = !0, cJ
      }
      divideInPlace(JJ) {
        return this._x = this._x / JJ._x, this._y = this._y / JJ._y, this._z = this._z / JJ._z, this._isDirty = !0, this
      }
      minimizeInPlace(JJ) {
        return this.minimizeInPlaceFromFloats(JJ._x, JJ._y, JJ._z)
      }
      maximizeInPlace(JJ) {
        return this.maximizeInPlaceFromFloats(JJ._x, JJ._y, JJ._z)
      }
      minimizeInPlaceFromFloats(JJ, cJ, ZJ) {
        return JJ < this._x && (this.x = JJ), cJ < this._y && (this.y = cJ), ZJ < this._z && (this.z = ZJ), this
      }
      maximizeInPlaceFromFloats(JJ, cJ, ZJ) {
        return JJ > this._x && (this.x = JJ), cJ > this._y && (this.y = cJ), ZJ > this._z && (this.z = ZJ), this
      }
      isNonUniformWithinEpsilon(JJ) {
        const cJ = Math.abs(this._x),
          ZJ = Math.abs(this._y);
        if (!(0, AJ.WithinEpsilon)(cJ, ZJ, JJ)) return !0;
        const FJ = Math.abs(this._z);
        return !(0, AJ.WithinEpsilon)(cJ, FJ, JJ) || !(0, AJ.WithinEpsilon)(ZJ, FJ, JJ)
      }
      get isNonUniform() {
        const JJ = Math.abs(this._x);
        if (JJ !== Math.abs(this._y)) return !0;
        return JJ !== Math.abs(this._z)
      }
      floorToRef(JJ) {
        return JJ._x = Math.floor(this._x), JJ._y = Math.floor(this._y), JJ._z = Math.floor(this._z), JJ._isDirty = !0, JJ
      }
      floor() {
        return new DJ(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(JJ) {
        return JJ._x = this._x - Math.floor(this._x), JJ._y = this._y - Math.floor(this._y), JJ._z = this._z - Math.floor(this._z), JJ._isDirty = !0, JJ
      }
      fract() {
        return new DJ(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(JJ) {
        if ("xyz" === (JJ = JJ.toLowerCase())) return this;
        const cJ = fJ.Pn[0].rZJ(this);
        return this.x = cJ[JJ[0]], this.y = cJ[JJ[1]], this.z = cJ[JJ[2]], this
      }
      rotateByQuaternionToRef(JJ, cJ) {
        return JJ.toRotationMatrix(fJ.Matrix[0]), DJ.TransformCoordinatesToRef(this, fJ.Matrix[0], cJ), cJ
      }
      rotateByQuaternionAroundPointToRef(JJ, cJ, ZJ) {
        return this.subtractToRef(cJ, fJ.Pn[0]), fJ.Pn[0].rotateByQuaternionToRef(JJ, fJ.Pn[0]), cJ.addToRef(fJ.Pn[0], ZJ), ZJ
      }
      cross(JJ) {
        return DJ.CrossToRef(this, JJ, new DJ)
      }
      normalizeFromLength(JJ) {
        return 0 === JJ || 1 === JJ ? this : this.scaleInPlace(1 / JJ)
      }
      normalizeToNew() {
        return this.normalizeToRef(new DJ)
      }
      normalizeToRef(JJ) {
        const cJ = this.length();
        return 0 === cJ || 1 === cJ ? (JJ._x = this._x, JJ._y = this._y, JJ._z = this._z, JJ._isDirty = !0, JJ) : this.scaleToRef(1 / cJ, JJ)
      }
      clone() {
        return new DJ(this._x, this._y, this._z)
      }
      rZJ(JJ) {
        return this.K9(JJ._x, JJ._y, JJ._z)
      }
      K9(JJ, cJ, ZJ) {
        return this._x = JJ, this._y = cJ, this._z = ZJ, this._isDirty = !0, this
      }
      set(JJ, cJ, ZJ) {
        return this.K9(JJ, cJ, ZJ)
      }
      X3(JJ) {
        return this._x = this._y = this._z = JJ, this._isDirty = !0, this
      }
      static GetClipFactor(JJ, cJ, ZJ, FJ) {
        const UJ = DJ.Dot(JJ, ZJ);
        return (UJ - FJ) / (UJ - DJ.Dot(cJ, ZJ))
      }
      static GetAngleBetweenVectors(JJ, cJ, ZJ) {
        const FJ = JJ.normalizeToRef(fJ.Pn[1]),
          UJ = cJ.normalizeToRef(fJ.Pn[2]);
        let eJ = DJ.Dot(FJ, UJ);
        eJ = (0, AJ.Clamp)(eJ, -1, 1);
        const XJ = Math.acos(eJ),
          qJ = fJ.Pn[3];
        return DJ.CrossToRef(FJ, UJ, qJ), DJ.Dot(qJ, ZJ) > 0 ? isNaN(XJ) ? 0 : XJ : isNaN(XJ) ? -Math.PI : -Math.acos(eJ)
      }
      static GetAngleBetweenVectorsOnPlane(JJ, cJ, ZJ) {
        fJ.Pn[0].rZJ(JJ);
        const FJ = fJ.Pn[0];
        fJ.Pn[1].rZJ(cJ);
        const UJ = fJ.Pn[1];
        fJ.Pn[2].rZJ(ZJ);
        const eJ = fJ.Pn[2],
          XJ = fJ.Pn[3],
          qJ = fJ.Pn[4];
        FJ.normalize(), UJ.normalize(), eJ.normalize(), DJ.CrossToRef(eJ, FJ, XJ), DJ.CrossToRef(XJ, eJ, qJ);
        const jJ = Math.atan2(DJ.Dot(UJ, XJ), DJ.Dot(UJ, qJ));
        return (0, AJ.NormalizeRadians)(jJ)
      }
      static PitchYawRollToMoveBetweenPointsToRef(JJ, cJ, ZJ) {
        const FJ = xJ.Pn[0];
        return cJ.subtractToRef(JJ, FJ), ZJ._y = Math.atan2(FJ.x, FJ.z) || 0, ZJ._x = Math.atan2(Math.sqrt(FJ.x ** 2 + FJ.z ** 2), FJ.y) || 0, ZJ._z = 0, ZJ._isDirty = !0, ZJ
      }
      static PitchYawRollToMoveBetweenPoints(JJ, cJ) {
        const ZJ = DJ.Zero();
        return DJ.PitchYawRollToMoveBetweenPointsToRef(JJ, cJ, ZJ)
      }
      static SlerpToRef(JJ, cJ, ZJ, UJ) {
        ZJ = (0, AJ.Clamp)(ZJ, 0, 1);
        const eJ = fJ.Pn[0],
          XJ = fJ.Pn[1];
        eJ.rZJ(JJ);
        const qJ = eJ.length();
        eJ.normalizeFromLength(qJ), XJ.rZJ(cJ);
        const jJ = XJ.length();
        XJ.normalizeFromLength(jJ);
        const YJ = DJ.Dot(eJ, XJ);
        let hJ, sJ;
        if (YJ < 1 - FJ.e) {
          const JJ = Math.acos(YJ),
            cJ = 1 / Math.sin(JJ);
          hJ = Math.sin((1 - ZJ) * JJ) * cJ, sJ = Math.sin(ZJ * JJ) * cJ
        } else hJ = 1 - ZJ, sJ = ZJ;
        return eJ.scaleInPlace(hJ), XJ.scaleInPlace(sJ), UJ.rZJ(eJ).addInPlace(XJ), UJ.scaleInPlace((0, AJ.Lerp)(qJ, jJ, ZJ)), UJ
      }
      static SmoothToRef(JJ, cJ, ZJ, FJ, UJ) {
        return DJ.SlerpToRef(JJ, cJ, 0 === FJ ? 1 : ZJ / FJ, UJ), UJ
      }
      static FromArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new DJ(JJ[cJ], JJ[cJ + 1], JJ[cJ + 2])
      }
      static FromFloatArray(JJ, cJ) {
        return DJ.FromArray(JJ, cJ)
      }
      static FromArrayToRef(JJ, cJ, ZJ) {
        return ZJ._x = JJ[cJ], ZJ._y = JJ[cJ + 1], ZJ._z = JJ[cJ + 2], ZJ._isDirty = !0, ZJ
      }
      static FromFloatArrayToRef(JJ, cJ, ZJ) {
        return DJ.FromArrayToRef(JJ, cJ, ZJ)
      }
      static FromFloatsToRef(JJ, cJ, ZJ, FJ) {
        return FJ.K9(JJ, cJ, ZJ), FJ
      }
      static Zero() {
        return new DJ(0, 0, 0)
      }
      static One() {
        return new DJ(1, 1, 1)
      }
      static Up() {
        return new DJ(0, 1, 0)
      }
      static get UpReadOnly() {
        return DJ._UpReadOnly
      }
      static get DownReadOnly() {
        return DJ._DownReadOnly
      }
      static get RightReadOnly() {
        return DJ._RightReadOnly
      }
      static get LeftReadOnly() {
        return DJ._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return DJ._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return DJ._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return DJ._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return DJ._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return DJ._ZeroReadOnly
      }
      static get OneReadOnly() {
        return DJ._OneReadOnly
      }
      static Down() {
        return new DJ(0, -1, 0)
      }
      static Forward() {
        return new DJ(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new DJ(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new DJ(1, 0, 0)
      }
      static Left() {
        return new DJ(-1, 0, 0)
      }
      static Random() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new DJ((0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ))
      }
      static RandomToRef() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K9((0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ))
      }
      static TransformCoordinates(JJ, cJ) {
        const ZJ = DJ.Zero();
        return DJ.TransformCoordinatesToRef(JJ, cJ, ZJ), ZJ
      }
      static TransformCoordinatesToRef(JJ, cJ, ZJ) {
        return DJ.TransformCoordinatesFromFloatsToRef(JJ._x, JJ._y, JJ._z, cJ, ZJ), ZJ
      }
      static TransformCoordinatesFromFloatsToRef(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = FJ.m,
          XJ = JJ * eJ[0] + cJ * eJ[4] + ZJ * eJ[8] + eJ[12],
          AJ = JJ * eJ[1] + cJ * eJ[5] + ZJ * eJ[9] + eJ[13],
          qJ = JJ * eJ[2] + cJ * eJ[6] + ZJ * eJ[10] + eJ[14],
          jJ = 1 / (JJ * eJ[3] + cJ * eJ[7] + ZJ * eJ[11] + eJ[15]);
        return UJ._x = XJ * jJ, UJ._y = AJ * jJ, UJ._z = qJ * jJ, UJ._isDirty = !0, UJ
      }
      static TransformNormal(JJ, cJ) {
        const ZJ = DJ.Zero();
        return DJ.TransformNormalToRef(JJ, cJ, ZJ), ZJ
      }
      static TransformNormalToRef(JJ, cJ, ZJ) {
        return this.TransformNormalFromFloatsToRef(JJ._x, JJ._y, JJ._z, cJ, ZJ), ZJ
      }
      static TransformNormalFromFloatsToRef(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = FJ.m;
        return UJ._x = JJ * eJ[0] + cJ * eJ[4] + ZJ * eJ[8], UJ._y = JJ * eJ[1] + cJ * eJ[5] + ZJ * eJ[9], UJ._z = JJ * eJ[2] + cJ * eJ[6] + ZJ * eJ[10], UJ._isDirty = !0, UJ
      }
      static CatmullRom(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = UJ * UJ,
          XJ = UJ * eJ,
          AJ = .5 * (2 * cJ._x + (-JJ._x + ZJ._x) * UJ + (2 * JJ._x - 5 * cJ._x + 4 * ZJ._x - FJ._x) * eJ + (-JJ._x + 3 * cJ._x - 3 * ZJ._x + FJ._x) * XJ),
          qJ = .5 * (2 * cJ._y + (-JJ._y + ZJ._y) * UJ + (2 * JJ._y - 5 * cJ._y + 4 * ZJ._y - FJ._y) * eJ + (-JJ._y + 3 * cJ._y - 3 * ZJ._y + FJ._y) * XJ),
          jJ = .5 * (2 * cJ._z + (-JJ._z + ZJ._z) * UJ + (2 * JJ._z - 5 * cJ._z + 4 * ZJ._z - FJ._z) * eJ + (-JJ._z + 3 * cJ._z - 3 * ZJ._z + FJ._z) * XJ);
        return new DJ(AJ, qJ, jJ)
      }
      static Clamp(JJ, cJ, ZJ) {
        const FJ = new DJ;
        return DJ.ClampToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static ClampToRef(JJ, cJ, ZJ, FJ) {
        let UJ = JJ._x;
        UJ = UJ > ZJ._x ? ZJ._x : UJ, UJ = UJ < cJ._x ? cJ._x : UJ;
        let eJ = JJ._y;
        eJ = eJ > ZJ._y ? ZJ._y : eJ, eJ = eJ < cJ._y ? cJ._y : eJ;
        let XJ = JJ._z;
        return XJ = XJ > ZJ._z ? ZJ._z : XJ, XJ = XJ < cJ._z ? cJ._z : XJ, FJ.K9(UJ, eJ, XJ), FJ
      }
      static CheckExtends(JJ, cJ, ZJ) {
        cJ.minimizeInPlace(JJ), ZJ.maximizeInPlace(JJ)
      }
      static Hermite(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = UJ * UJ,
          XJ = UJ * eJ,
          AJ = 2 * XJ - 3 * eJ + 1,
          qJ = -2 * XJ + 3 * eJ,
          jJ = XJ - 2 * eJ + UJ,
          YJ = XJ - eJ,
          hJ = JJ._x * AJ + ZJ._x * qJ + cJ._x * jJ + FJ._x * YJ,
          sJ = JJ._y * AJ + ZJ._y * qJ + cJ._y * jJ + FJ._y * YJ,
          nJ = JJ._z * AJ + ZJ._z * qJ + cJ._z * jJ + FJ._z * YJ;
        return new DJ(hJ, sJ, nJ)
      }
      static Hermite1stDerivative(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = new DJ;
        return this.Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ), eJ
      }
      static Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = UJ * UJ;
        return eJ._x = 6 * (XJ - UJ) * JJ._x + (3 * XJ - 4 * UJ + 1) * cJ._x + 6 * (-XJ + UJ) * ZJ._x + (3 * XJ - 2 * UJ) * FJ._x, eJ._y = 6 * (XJ - UJ) * JJ._y + (3 * XJ - 4 * UJ + 1) * cJ._y + 6 * (-XJ + UJ) * ZJ._y + (3 * XJ - 2 * UJ) * FJ._y, eJ._z = 6 * (XJ - UJ) * JJ._z + (3 * XJ - 4 * UJ + 1) * cJ._z + 6 * (-XJ + UJ) * ZJ._z + (3 * XJ - 2 * UJ) * FJ._z, eJ._isDirty = !0, eJ
      }
      static Lerp(JJ, cJ, ZJ) {
        const FJ = new DJ(0, 0, 0);
        return DJ.LerpToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static LerpToRef(JJ, cJ, ZJ, FJ) {
        return FJ._x = JJ._x + (cJ._x - JJ._x) * ZJ, FJ._y = JJ._y + (cJ._y - JJ._y) * ZJ, FJ._z = JJ._z + (cJ._z - JJ._z) * ZJ, FJ._isDirty = !0, FJ
      }
      static Dot(JJ, cJ) {
        return JJ._x * cJ._x + JJ._y * cJ._y + JJ._z * cJ._z
      }
      dot(JJ) {
        return this._x * JJ._x + this._y * JJ._y + this._z * JJ._z
      }
      static Cross(JJ, cJ) {
        const ZJ = new DJ;
        return DJ.CrossToRef(JJ, cJ, ZJ), ZJ
      }
      static CrossToRef(JJ, cJ, ZJ) {
        const FJ = JJ._y * cJ._z - JJ._z * cJ._y,
          UJ = JJ._z * cJ._x - JJ._x * cJ._z,
          eJ = JJ._x * cJ._y - JJ._y * cJ._x;
        return ZJ.K9(FJ, UJ, eJ), ZJ
      }
      static Normalize(JJ) {
        const cJ = DJ.Zero();
        return DJ.NormalizeToRef(JJ, cJ), cJ
      }
      static NormalizeToRef(JJ, cJ) {
        return JJ.normalizeToRef(cJ), cJ
      }
      static Project(JJ, cJ, ZJ, FJ) {
        const UJ = new DJ;
        return DJ.ProjectToRef(JJ, cJ, ZJ, FJ, UJ), UJ
      }
      static ProjectToRef(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = FJ.width,
          AJ = FJ.height,
          qJ = FJ.x,
          jJ = FJ.y,
          YJ = fJ.Matrix[1],
          hJ = XJ.c.LastCreatedEngine?.isNDCHalfZRange,
          sJ = hJ ? 1 : .5,
          nJ = hJ ? 0 : .5;
        GJ.FromValuesToRef(eJ / 2, 0, 0, 0, 0, -AJ / 2, 0, 0, 0, 0, sJ, 0, qJ + eJ / 2, AJ / 2 + jJ, nJ, 1, YJ);
        const xJ = fJ.Matrix[0];
        return cJ.multiplyToRef(ZJ, xJ), xJ.multiplyToRef(YJ, xJ), DJ.TransformCoordinatesToRef(JJ, xJ, UJ), UJ
      }
      static Reflect(JJ, cJ) {
        return this.ReflectToRef(JJ, cJ, new DJ)
      }
      static ReflectToRef(JJ, cJ, ZJ) {
        const FJ = xJ.Pn[0];
        return FJ.rZJ(cJ).scaleInPlace(2 * DJ.Dot(JJ, cJ)), ZJ.rZJ(JJ).xFJ(FJ)
      }
      static UnprojectFromTransform(JJ, cJ, ZJ, FJ, UJ) {
        return this.Unproject(JJ, cJ, ZJ, FJ, UJ, GJ.IdentityReadOnly)
      }
      static Unproject(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = new DJ;
        return DJ.UnprojectToRef(JJ, cJ, ZJ, FJ, UJ, eJ, XJ), XJ
      }
      static UnprojectToRef(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        return DJ.UnprojectFloatsToRef(JJ._x, JJ._y, JJ._z, cJ, ZJ, FJ, UJ, eJ, XJ), XJ
      }
      static UnprojectFloatsToRef(JJ, cJ, ZJ, FJ, UJ, eJ, AJ, qJ, jJ) {
        const YJ = fJ.Matrix[0];
        eJ.multiplyToRef(AJ, YJ), YJ.multiplyToRef(qJ, YJ), YJ.invert();
        const hJ = fJ.Pn[0];
        return hJ.x = JJ / FJ * 2 - 1, hJ.y = -(cJ / UJ * 2 - 1), XJ.c.LastCreatedEngine?.isNDCHalfZRange ? hJ.z = ZJ : hJ.z = 2 * ZJ - 1, DJ.TransformCoordinatesToRef(hJ, YJ, jJ), jJ
      }
      static Minimize(JJ, cJ) {
        const ZJ = new DJ;
        return ZJ.rZJ(JJ), ZJ.minimizeInPlace(cJ), ZJ
      }
      static Maximize(JJ, cJ) {
        const ZJ = new DJ;
        return ZJ.rZJ(JJ), ZJ.maximizeInPlace(cJ), ZJ
      }
      static Distance(JJ, cJ) {
        return Math.sqrt(DJ.DistanceSquared(JJ, cJ))
      }
      static DistanceSquared(JJ, cJ) {
        const ZJ = JJ._x - cJ._x,
          FJ = JJ._y - cJ._y,
          UJ = JJ._z - cJ._z;
        return ZJ * ZJ + FJ * FJ + UJ * UJ
      }
      static ProjectOnTriangleToRef(JJ, cJ, ZJ, UJ, eJ) {
        const XJ = fJ.Pn[0],
          qJ = fJ.Pn[1],
          jJ = fJ.Pn[2],
          YJ = fJ.Pn[3],
          hJ = fJ.Pn[4];
        ZJ.subtractToRef(cJ, XJ), UJ.subtractToRef(cJ, qJ), UJ.subtractToRef(ZJ, jJ);
        const sJ = XJ.length(),
          nJ = qJ.length(),
          GJ = jJ.length();
        if (sJ < FJ.e || nJ < FJ.e || GJ < FJ.e) return eJ.rZJ(cJ), DJ.Distance(JJ, cJ);
        JJ.subtractToRef(cJ, hJ), DJ.CrossToRef(XJ, qJ, YJ);
        const xJ = YJ.length();
        if (xJ < FJ.e) return eJ.rZJ(cJ), DJ.Distance(JJ, cJ);
        YJ.normalizeFromLength(xJ);
        let rJ = hJ.length();
        if (rJ < FJ.e) return eJ.rZJ(cJ), 0;
        hJ.normalizeFromLength(rJ);
        const vJ = DJ.Dot(YJ, hJ),
          mJ = fJ.Pn[5],
          QJ = fJ.Pn[6];
        mJ.rZJ(YJ).scaleInPlace(-rJ * vJ), QJ.rZJ(JJ).addInPlace(mJ);
        const EJ = fJ.Pn[4],
          VJ = fJ.Pn[5],
          KJ = fJ.Pn[7],
          yJ = fJ.Pn[8];
        EJ.rZJ(XJ).scaleInPlace(1 / sJ), yJ.rZJ(qJ).scaleInPlace(1 / nJ), EJ.addInPlace(yJ).scaleInPlace(-1), VJ.rZJ(XJ).scaleInPlace(-1 / sJ), yJ.rZJ(jJ).scaleInPlace(1 / GJ), VJ.addInPlace(yJ).scaleInPlace(-1), KJ.rZJ(jJ).scaleInPlace(-1 / GJ), yJ.rZJ(qJ).scaleInPlace(-1 / nJ), KJ.addInPlace(yJ).scaleInPlace(-1);
        const SJ = fJ.Pn[9];
        let IJ;
        SJ.rZJ(QJ).xFJ(cJ), DJ.CrossToRef(EJ, SJ, yJ), IJ = DJ.Dot(yJ, YJ);
        const MJ = IJ;
        SJ.rZJ(QJ).xFJ(ZJ), DJ.CrossToRef(VJ, SJ, yJ), IJ = DJ.Dot(yJ, YJ);
        const bJ = IJ;
        SJ.rZJ(QJ).xFJ(UJ), DJ.CrossToRef(KJ, SJ, yJ), IJ = DJ.Dot(yJ, YJ);
        const wJ = IJ,
          WJ = fJ.Pn[10];
        let gJ, HJ;
        MJ > 0 && bJ < 0 ? (WJ.rZJ(XJ), gJ = cJ, HJ = ZJ) : bJ > 0 && wJ < 0 ? (WJ.rZJ(jJ), gJ = ZJ, HJ = UJ) : (WJ.rZJ(qJ).scaleInPlace(-1), gJ = UJ, HJ = cJ);
        const PJ = fJ.Pn[9],
          kJ = fJ.Pn[4];
        gJ.subtractToRef(QJ, yJ), HJ.subtractToRef(QJ, PJ), DJ.CrossToRef(yJ, PJ, kJ);
        if (!(DJ.Dot(kJ, YJ) < 0)) return eJ.rZJ(QJ), Math.abs(rJ * vJ);
        const pJ = fJ.Pn[5];
        DJ.CrossToRef(WJ, kJ, pJ), pJ.normalize();
        const dJ = fJ.Pn[9];
        dJ.rZJ(gJ).xFJ(QJ);
        const zJ = dJ.length();
        if (zJ < FJ.e) return eJ.rZJ(gJ), DJ.Distance(JJ, gJ);
        dJ.normalizeFromLength(zJ);
        const NJ = DJ.Dot(pJ, dJ),
          OJ = fJ.Pn[7];
        OJ.rZJ(QJ).addInPlace(pJ.scaleInPlace(zJ * NJ)), yJ.rZJ(OJ).xFJ(gJ), rJ = WJ.length(), WJ.normalizeFromLength(rJ);
        let TJ = DJ.Dot(yJ, WJ) / Math.max(rJ, FJ.e);
        return TJ = (0, AJ.Clamp)(TJ, 0, 1), OJ.rZJ(gJ).addInPlace(WJ.scaleInPlace(TJ * rJ)), eJ.rZJ(OJ), DJ.Distance(JJ, OJ)
      }
      static Center(JJ, cJ) {
        return DJ.CenterToRef(JJ, cJ, DJ.Zero())
      }
      static CenterToRef(JJ, cJ, ZJ) {
        return ZJ.K9((JJ._x + cJ._x) / 2, (JJ._y + cJ._y) / 2, (JJ._z + cJ._z) / 2)
      }
      static RotationFromAxis(JJ, cJ, ZJ) {
        const FJ = new DJ;
        return DJ.RotationFromAxisToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static RotationFromAxisToRef(JJ, cJ, ZJ, FJ) {
        const UJ = fJ.Quaternion[0];
        return nJ.RotationQuaternionFromAxisToRef(JJ, cJ, ZJ, UJ), UJ.toEulerAnglesToRef(FJ), FJ
      }
    }
    DJ._V8PerformanceHack = new DJ(.5, .5, .5), DJ._UpReadOnly = DJ.Up(), DJ._DownReadOnly = DJ.Down(), DJ._LeftHandedForwardReadOnly = DJ.Forward(!1), DJ._RightHandedForwardReadOnly = DJ.Forward(!0), DJ._LeftHandedBackwardReadOnly = DJ.Backward(!1), DJ._RightHandedBackwardReadOnly = DJ.Backward(!0), DJ._RightReadOnly = DJ.Right(), DJ._LeftReadOnly = DJ.Left(), DJ._ZeroReadOnly = DJ.Zero(), DJ._OneReadOnly = DJ.One();
    class sJ {
      get x() {
        return this._x
      }
      set x(JJ) {
        this._x = JJ, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(JJ) {
        this._y = JJ, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(JJ) {
        this._z = JJ, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(JJ) {
        this._w = JJ, this._isDirty = !0
      }
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = JJ, this._y = cJ, this._z = ZJ, this._w = FJ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let JJ = YJ(this._x);
        return JJ = 397 * JJ ^ YJ(this._y), JJ = 397 * JJ ^ YJ(this._z), JJ = 397 * JJ ^ YJ(this._w), JJ
      }
      JFJ() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(JJ, cJ) {
        return void 0 === cJ && (cJ = 0), JJ[cJ] = this._x, JJ[cJ + 1] = this._y, JJ[cJ + 2] = this._z, JJ[cJ + 3] = this._w, this
      }
      zcJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return sJ.FromArrayToRef(JJ, cJ, this), this
      }
      addInPlace(JJ) {
        return this.x += JJ._x, this.y += JJ._y, this.z += JJ._z, this.w += JJ._w, this
      }
      addInPlaceFromFloats(JJ, cJ, ZJ, FJ) {
        return this.x += JJ, this.y += cJ, this.z += ZJ, this.w += FJ, this
      }
      add(JJ) {
        return new sJ(this._x + JJ.x, this._y + JJ.y, this._z + JJ.z, this._w + JJ.w)
      }
      addToRef(JJ, cJ) {
        return cJ.x = this._x + JJ.x, cJ.y = this._y + JJ.y, cJ.z = this._z + JJ.z, cJ.w = this._w + JJ.w, cJ
      }
      xFJ(JJ) {
        return this.x -= JJ.x, this.y -= JJ.y, this.z -= JJ.z, this.w -= JJ.w, this
      }
      subtract(JJ) {
        return new sJ(this._x - JJ.x, this._y - JJ.y, this._z - JJ.z, this._w - JJ.w)
      }
      subtractToRef(JJ, cJ) {
        return cJ.x = this._x - JJ.x, cJ.y = this._y - JJ.y, cJ.z = this._z - JJ.z, cJ.w = this._w - JJ.w, cJ
      }
      subtractFromFloats(JJ, cJ, ZJ, FJ) {
        return new sJ(this._x - JJ, this._y - cJ, this._z - ZJ, this._w - FJ)
      }
      subtractFromFloatsToRef(JJ, cJ, ZJ, FJ, UJ) {
        return UJ.x = this._x - JJ, UJ.y = this._y - cJ, UJ.z = this._z - ZJ, UJ.w = this._w - FJ, UJ
      }
      nZ() {
        return new sJ(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(JJ) {
        return JJ.x = -this._x, JJ.y = -this._y, JJ.z = -this._z, JJ.w = -this._w, JJ
      }
      scaleInPlace(JJ) {
        return this.x *= JJ, this.y *= JJ, this.z *= JJ, this.w *= JJ, this
      }
      scale(JJ) {
        return new sJ(this._x * JJ, this._y * JJ, this._z * JJ, this._w * JJ)
      }
      scaleToRef(JJ, cJ) {
        return cJ.x = this._x * JJ, cJ.y = this._y * JJ, cJ.z = this._z * JJ, cJ.w = this._w * JJ, cJ
      }
      scaleAndAddToRef(JJ, cJ) {
        return cJ.x += this._x * JJ, cJ.y += this._y * JJ, cJ.z += this._z * JJ, cJ.w += this._w * JJ, cJ
      }
      equals(JJ) {
        return JJ && this._x === JJ.x && this._y === JJ.y && this._z === JJ.z && this._w === JJ.w
      }
      equalsWithEpsilon(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FJ.e;
        return JJ && (0, AJ.WithinEpsilon)(this._x, JJ.x, cJ) && (0, AJ.WithinEpsilon)(this._y, JJ.y, cJ) && (0, AJ.WithinEpsilon)(this._z, JJ.z, cJ) && (0, AJ.WithinEpsilon)(this._w, JJ.w, cJ)
      }
      KXJ(JJ, cJ, ZJ, FJ) {
        return this._x === JJ && this._y === cJ && this._z === ZJ && this._w === FJ
      }
      multiplyInPlace(JJ) {
        return this.x *= JJ.x, this.y *= JJ.y, this.z *= JJ.z, this.w *= JJ.w, this
      }
      multiply(JJ) {
        return new sJ(this._x * JJ.x, this._y * JJ.y, this._z * JJ.z, this._w * JJ.w)
      }
      multiplyToRef(JJ, cJ) {
        return cJ.x = this._x * JJ.x, cJ.y = this._y * JJ.y, cJ.z = this._z * JJ.z, cJ.w = this._w * JJ.w, cJ
      }
      multiplyByFloats(JJ, cJ, ZJ, FJ) {
        return new sJ(this._x * JJ, this._y * cJ, this._z * ZJ, this._w * FJ)
      }
      divide(JJ) {
        return new sJ(this._x / JJ.x, this._y / JJ.y, this._z / JJ.z, this._w / JJ.w)
      }
      divideToRef(JJ, cJ) {
        return cJ.x = this._x / JJ.x, cJ.y = this._y / JJ.y, cJ.z = this._z / JJ.z, cJ.w = this._w / JJ.w, cJ
      }
      divideInPlace(JJ) {
        return this.divideToRef(JJ, this)
      }
      minimizeInPlace(JJ) {
        return JJ.x < this._x && (this.x = JJ.x), JJ.y < this._y && (this.y = JJ.y), JJ.z < this._z && (this.z = JJ.z), JJ.w < this._w && (this.w = JJ.w), this
      }
      maximizeInPlace(JJ) {
        return JJ.x > this._x && (this.x = JJ.x), JJ.y > this._y && (this.y = JJ.y), JJ.z > this._z && (this.z = JJ.z), JJ.w > this._w && (this.w = JJ.w), this
      }
      minimizeInPlaceFromFloats(JJ, cJ, ZJ, FJ) {
        return this.x = Math.min(JJ, this._x), this.y = Math.min(cJ, this._y), this.z = Math.min(ZJ, this._z), this.w = Math.min(FJ, this._w), this
      }
      maximizeInPlaceFromFloats(JJ, cJ, ZJ, FJ) {
        return this.x = Math.max(JJ, this._x), this.y = Math.max(cJ, this._y), this.z = Math.max(ZJ, this._z), this.w = Math.max(FJ, this._w), this
      }
      floorToRef(JJ) {
        return JJ.x = Math.floor(this._x), JJ.y = Math.floor(this._y), JJ.z = Math.floor(this._z), JJ.w = Math.floor(this._w), JJ
      }
      floor() {
        return new sJ(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(JJ) {
        return JJ.x = this._x - Math.floor(this._x), JJ.y = this._y - Math.floor(this._y), JJ.z = this._z - Math.floor(this._z), JJ.w = this._w - Math.floor(this._w), JJ
      }
      fract() {
        return new sJ(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(JJ) {
        return 0 === JJ || 1 === JJ ? this : this.scaleInPlace(1 / JJ)
      }
      normalizeToNew() {
        return this.normalizeToRef(new sJ)
      }
      normalizeToRef(JJ) {
        const cJ = this.length();
        return 0 === cJ || 1 === cJ ? (JJ.x = this._x, JJ.y = this._y, JJ.z = this._z, JJ.w = this._w, JJ) : this.scaleToRef(1 / cJ, JJ)
      }
      toVector3() {
        return new DJ(this._x, this._y, this._z)
      }
      clone() {
        return new sJ(this._x, this._y, this._z, this._w)
      }
      rZJ(JJ) {
        return this.x = JJ.x, this.y = JJ.y, this.z = JJ.z, this.w = JJ.w, this
      }
      K9(JJ, cJ, ZJ, FJ) {
        return this.x = JJ, this.y = cJ, this.z = ZJ, this.w = FJ, this
      }
      set(JJ, cJ, ZJ, FJ) {
        return this.K9(JJ, cJ, ZJ, FJ)
      }
      X3(JJ) {
        return this.x = this.y = this.z = this.w = JJ, this
      }
      dot(JJ) {
        return this._x * JJ.x + this._y * JJ.y + this._z * JJ.z + this._w * JJ.w
      }
      static FromArray(JJ, cJ) {
        return cJ || (cJ = 0), new sJ(JJ[cJ], JJ[cJ + 1], JJ[cJ + 2], JJ[cJ + 3])
      }
      static FromArrayToRef(JJ, cJ, ZJ) {
        return ZJ.x = JJ[cJ], ZJ.y = JJ[cJ + 1], ZJ.z = JJ[cJ + 2], ZJ.w = JJ[cJ + 3], ZJ
      }
      static FromFloatArrayToRef(JJ, cJ, ZJ) {
        return sJ.FromArrayToRef(JJ, cJ, ZJ), ZJ
      }
      static FromFloatsToRef(JJ, cJ, ZJ, FJ, UJ) {
        return UJ.x = JJ, UJ.y = cJ, UJ.z = ZJ, UJ.w = FJ, UJ
      }
      static Zero() {
        return new sJ(0, 0, 0, 0)
      }
      static One() {
        return new sJ(1, 1, 1, 1)
      }
      static Random() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new sJ((0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ))
      }
      static RandomToRef() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        return ZJ.x = (0, AJ.RandomRange)(JJ, cJ), ZJ.y = (0, AJ.RandomRange)(JJ, cJ), ZJ.z = (0, AJ.RandomRange)(JJ, cJ), ZJ.w = (0, AJ.RandomRange)(JJ, cJ), ZJ
      }
      static Clamp(JJ, cJ, ZJ) {
        return sJ.ClampToRef(JJ, cJ, ZJ, new sJ)
      }
      static ClampToRef(JJ, cJ, ZJ, FJ) {
        return FJ.x = (0, AJ.Clamp)(JJ.x, cJ.x, ZJ.x), FJ.y = (0, AJ.Clamp)(JJ.y, cJ.y, ZJ.y), FJ.z = (0, AJ.Clamp)(JJ.z, cJ.z, ZJ.z), FJ.w = (0, AJ.Clamp)(JJ.w, cJ.w, ZJ.w), FJ
      }
      static CheckExtends(JJ, cJ, ZJ) {
        cJ.minimizeInPlace(JJ), ZJ.maximizeInPlace(JJ)
      }
      static get ZeroReadOnly() {
        return sJ._ZeroReadOnly
      }
      static Normalize(JJ) {
        return sJ.NormalizeToRef(JJ, new sJ)
      }
      static NormalizeToRef(JJ, cJ) {
        return JJ.normalizeToRef(cJ), cJ
      }
      static Minimize(JJ, cJ) {
        const ZJ = new sJ;
        return ZJ.rZJ(JJ), ZJ.minimizeInPlace(cJ), ZJ
      }
      static Maximize(JJ, cJ) {
        const ZJ = new sJ;
        return ZJ.rZJ(JJ), ZJ.maximizeInPlace(cJ), ZJ
      }
      static Distance(JJ, cJ) {
        return Math.sqrt(sJ.DistanceSquared(JJ, cJ))
      }
      static DistanceSquared(JJ, cJ) {
        const ZJ = JJ.x - cJ.x,
          FJ = JJ.y - cJ.y,
          UJ = JJ.z - cJ.z,
          eJ = JJ.w - cJ.w;
        return ZJ * ZJ + FJ * FJ + UJ * UJ + eJ * eJ
      }
      static Center(JJ, cJ) {
        return sJ.CenterToRef(JJ, cJ, new sJ)
      }
      static CenterToRef(JJ, cJ, ZJ) {
        return ZJ.x = (JJ.x + cJ.x) / 2, ZJ.y = (JJ.y + cJ.y) / 2, ZJ.z = (JJ.z + cJ.z) / 2, ZJ.w = (JJ.w + cJ.w) / 2, ZJ
      }
      static TransformCoordinates(JJ, cJ) {
        return sJ.TransformCoordinatesToRef(JJ, cJ, new sJ)
      }
      static TransformCoordinatesToRef(JJ, cJ, ZJ) {
        return sJ.TransformCoordinatesFromFloatsToRef(JJ._x, JJ._y, JJ._z, cJ, ZJ), ZJ
      }
      static TransformCoordinatesFromFloatsToRef(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = FJ.m,
          XJ = JJ * eJ[0] + cJ * eJ[4] + ZJ * eJ[8] + eJ[12],
          AJ = JJ * eJ[1] + cJ * eJ[5] + ZJ * eJ[9] + eJ[13],
          qJ = JJ * eJ[2] + cJ * eJ[6] + ZJ * eJ[10] + eJ[14],
          jJ = JJ * eJ[3] + cJ * eJ[7] + ZJ * eJ[11] + eJ[15];
        return UJ.x = XJ, UJ.y = AJ, UJ.z = qJ, UJ.w = jJ, UJ
      }
      static TransformNormal(JJ, cJ) {
        return sJ.TransformNormalToRef(JJ, cJ, new sJ)
      }
      static TransformNormalToRef(JJ, cJ, ZJ) {
        const FJ = cJ.m,
          UJ = JJ.x * FJ[0] + JJ.y * FJ[4] + JJ.z * FJ[8],
          eJ = JJ.x * FJ[1] + JJ.y * FJ[5] + JJ.z * FJ[9],
          XJ = JJ.x * FJ[2] + JJ.y * FJ[6] + JJ.z * FJ[10];
        return ZJ.x = UJ, ZJ.y = eJ, ZJ.z = XJ, ZJ.w = JJ.w, ZJ
      }
      static TransformNormalFromFloatsToRef(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = UJ.m;
        return eJ.x = JJ * XJ[0] + cJ * XJ[4] + ZJ * XJ[8], eJ.y = JJ * XJ[1] + cJ * XJ[5] + ZJ * XJ[9], eJ.z = JJ * XJ[2] + cJ * XJ[6] + ZJ * XJ[10], eJ.w = FJ, eJ
      }
      static FromVector3(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new sJ(JJ._x, JJ._y, JJ._z, cJ)
      }
      static Dot(JJ, cJ) {
        return JJ.x * cJ.x + JJ.y * cJ.y + JJ.z * cJ.z + JJ.w * cJ.w
      }
    }
    sJ._V8PerformanceHack = new sJ(.5, .5, .5, .5), sJ._ZeroReadOnly = sJ.Zero();
    class nJ {
      get x() {
        return this._x
      }
      set x(JJ) {
        this._x = JJ, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(JJ) {
        this._y = JJ, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(JJ) {
        this._z = JJ, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(JJ) {
        this._w = JJ, this._isDirty = !0
      }
      constructor() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = JJ, this._y = cJ, this._z = ZJ, this._w = FJ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let JJ = YJ(this._x);
        return JJ = 397 * JJ ^ YJ(this._y), JJ = 397 * JJ ^ YJ(this._z), JJ = 397 * JJ ^ YJ(this._w), JJ
      }
      JFJ() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JJ[cJ] = this._x, JJ[cJ + 1] = this._y, JJ[cJ + 2] = this._z, JJ[cJ + 3] = this._w, this
      }
      zcJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return nJ.FromArrayToRef(JJ, cJ, this)
      }
      equals(JJ) {
        return JJ && this._x === JJ._x && this._y === JJ._y && this._z === JJ._z && this._w === JJ._w
      }
      equalsWithEpsilon(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FJ.e;
        return JJ && (0, AJ.WithinEpsilon)(this._x, JJ._x, cJ) && (0, AJ.WithinEpsilon)(this._y, JJ._y, cJ) && (0, AJ.WithinEpsilon)(this._z, JJ._z, cJ) && (0, AJ.WithinEpsilon)(this._w, JJ._w, cJ)
      }
      isApprox(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FJ.e;
        return JJ && ((0, AJ.WithinEpsilon)(this._x, JJ._x, cJ) && (0, AJ.WithinEpsilon)(this._y, JJ._y, cJ) && (0, AJ.WithinEpsilon)(this._z, JJ._z, cJ) && (0, AJ.WithinEpsilon)(this._w, JJ._w, cJ) || (0, AJ.WithinEpsilon)(this._x, -JJ._x, cJ) && (0, AJ.WithinEpsilon)(this._y, -JJ._y, cJ) && (0, AJ.WithinEpsilon)(this._z, -JJ._z, cJ) && (0, AJ.WithinEpsilon)(this._w, -JJ._w, cJ))
      }
      clone() {
        return new nJ(this._x, this._y, this._z, this._w)
      }
      rZJ(JJ) {
        return this._x = JJ._x, this._y = JJ._y, this._z = JJ._z, this._w = JJ._w, this._isDirty = !0, this
      }
      K9(JJ, cJ, ZJ, FJ) {
        return this._x = JJ, this._y = cJ, this._z = ZJ, this._w = FJ, this._isDirty = !0, this
      }
      set(JJ, cJ, ZJ, FJ) {
        return this.K9(JJ, cJ, ZJ, FJ)
      }
      X3(JJ) {
        return this.K9(JJ, JJ, JJ, JJ)
      }
      add(JJ) {
        return new nJ(this._x + JJ._x, this._y + JJ._y, this._z + JJ._z, this._w + JJ._w)
      }
      addInPlace(JJ) {
        return this._x += JJ._x, this._y += JJ._y, this._z += JJ._z, this._w += JJ._w, this._isDirty = !0, this
      }
      addToRef(JJ, cJ) {
        return cJ._x = this._x + JJ._x, cJ._y = this._y + JJ._y, cJ._z = this._z + JJ._z, cJ._w = this._w + JJ._w, cJ._isDirty = !0, cJ
      }
      addInPlaceFromFloats(JJ, cJ, ZJ, FJ) {
        return this._x += JJ, this._y += cJ, this._z += ZJ, this._w += FJ, this._isDirty = !0, this
      }
      subtractToRef(JJ, cJ) {
        return cJ._x = this._x - JJ._x, cJ._y = this._y - JJ._y, cJ._z = this._z - JJ._z, cJ._w = this._w - JJ._w, cJ._isDirty = !0, cJ
      }
      subtractFromFloats(JJ, cJ, ZJ, FJ) {
        return this.subtractFromFloatsToRef(JJ, cJ, ZJ, FJ, new nJ)
      }
      subtractFromFloatsToRef(JJ, cJ, ZJ, FJ, UJ) {
        return UJ._x = this._x - JJ, UJ._y = this._y - cJ, UJ._z = this._z - ZJ, UJ._w = this._w - FJ, UJ._isDirty = !0, UJ
      }
      subtract(JJ) {
        return new nJ(this._x - JJ._x, this._y - JJ._y, this._z - JJ._z, this._w - JJ._w)
      }
      xFJ(JJ) {
        return this._x -= JJ._x, this._y -= JJ._y, this._z -= JJ._z, this._w -= JJ._w, this._isDirty = !0, this
      }
      scale(JJ) {
        return new nJ(this._x * JJ, this._y * JJ, this._z * JJ, this._w * JJ)
      }
      scaleToRef(JJ, cJ) {
        return cJ._x = this._x * JJ, cJ._y = this._y * JJ, cJ._z = this._z * JJ, cJ._w = this._w * JJ, cJ._isDirty = !0, cJ
      }
      scaleInPlace(JJ) {
        return this._x *= JJ, this._y *= JJ, this._z *= JJ, this._w *= JJ, this._isDirty = !0, this
      }
      scaleAndAddToRef(JJ, cJ) {
        return cJ._x += this._x * JJ, cJ._y += this._y * JJ, cJ._z += this._z * JJ, cJ._w += this._w * JJ, cJ._isDirty = !0, cJ
      }
      multiply(JJ) {
        const cJ = new nJ(0, 0, 0, 1);
        return this.multiplyToRef(JJ, cJ), cJ
      }
      multiplyToRef(JJ, cJ) {
        const ZJ = this._x * JJ._w + this._y * JJ._z - this._z * JJ._y + this._w * JJ._x,
          FJ = -this._x * JJ._z + this._y * JJ._w + this._z * JJ._x + this._w * JJ._y,
          UJ = this._x * JJ._y - this._y * JJ._x + this._z * JJ._w + this._w * JJ._z,
          eJ = -this._x * JJ._x - this._y * JJ._y - this._z * JJ._z + this._w * JJ._w;
        return cJ.K9(ZJ, FJ, UJ, eJ), cJ
      }
      multiplyInPlace(JJ) {
        return this.multiplyToRef(JJ, this)
      }
      multiplyByFloats(JJ, cJ, ZJ, FJ) {
        return this._x *= JJ, this._y *= cJ, this._z *= ZJ, this._w *= FJ, this._isDirty = !0, this
      }
      divide(JJ) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(JJ, cJ) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(JJ) {
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
      nZ() {
        return this.negateToRef(new nJ)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(JJ) {
        return JJ._x = -this._x, JJ._y = -this._y, JJ._z = -this._z, JJ._w = -this._w, JJ._isDirty = !0, JJ
      }
      KXJ(JJ, cJ, ZJ, FJ) {
        return this._x === JJ && this._y === cJ && this._z === ZJ && this._w === FJ
      }
      floorToRef(JJ) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(JJ) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(JJ) {
        return JJ.K9(-this._x, -this._y, -this._z, this._w), JJ
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new nJ(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const JJ = this.conjugate(),
          cJ = this.lengthSquared();
        return 0 == cJ || 1 == cJ || JJ.scaleInPlace(1 / cJ), JJ
      }
      invertInPlace() {
        this.conjugateInPlace();
        const JJ = this.lengthSquared();
        return 0 == JJ || 1 == JJ || this.scaleInPlace(1 / JJ), this
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
      normalizeFromLength(JJ) {
        return 0 === JJ || 1 === JJ ? this : this.scaleInPlace(1 / JJ)
      }
      normalizeToNew() {
        const JJ = new nJ(0, 0, 0, 1);
        return this.normalizeToRef(JJ), JJ
      }
      normalizeToRef(JJ) {
        const cJ = this.length();
        return 0 === cJ || 1 === cJ ? JJ.K9(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / cJ, JJ)
      }
      toEulerAngles() {
        const JJ = DJ.Zero();
        return this.toEulerAnglesToRef(JJ), JJ
      }
      toEulerAnglesToRef(JJ) {
        const cJ = this._z,
          ZJ = this._x,
          FJ = this._y,
          UJ = this._w,
          eJ = FJ * cJ - ZJ * UJ,
          XJ = .4999999;
        if (eJ < -XJ) JJ._y = 2 * Math.atan2(FJ, UJ), JJ._x = Math.PI / 2, JJ._z = 0, JJ._isDirty = !0;
        else if (eJ > XJ) JJ._y = 2 * Math.atan2(FJ, UJ), JJ._x = -Math.PI / 2, JJ._z = 0, JJ._isDirty = !0;
        else {
          const XJ = UJ * UJ,
            AJ = cJ * cJ,
            qJ = ZJ * ZJ,
            jJ = FJ * FJ;
          JJ._z = Math.atan2(2 * (ZJ * FJ + cJ * UJ), -AJ - qJ + jJ + XJ), JJ._x = Math.asin(-2 * eJ), JJ._y = Math.atan2(2 * (cJ * ZJ + FJ * UJ), AJ - qJ - jJ + XJ), JJ._isDirty = !0
        }
        return JJ
      }
      toAlphaBetaGammaToRef(JJ) {
        const cJ = this._z,
          ZJ = this._x,
          FJ = this._y,
          UJ = this._w,
          eJ = Math.sqrt(ZJ * ZJ + FJ * FJ),
          XJ = Math.sqrt(cJ * cJ + UJ * UJ),
          AJ = 2 * Math.atan2(eJ, XJ),
          qJ = 2 * Math.atan2(cJ, UJ),
          jJ = 2 * Math.atan2(FJ, ZJ),
          YJ = (qJ + jJ) / 2,
          hJ = (qJ - jJ) / 2;
        return JJ.set(hJ, AJ, YJ), JJ
      }
      toRotationMatrix(JJ) {
        return GJ.FromQuaternionToRef(this, JJ), JJ
      }
      fromRotationMatrix(JJ) {
        return nJ.FromRotationMatrixToRef(JJ, this), this
      }
      dot(JJ) {
        return this._x * JJ._x + this._y * JJ._y + this._z * JJ._z + this._w * JJ._w
      }
      toAxisAngle() {
        const JJ = DJ.Zero();
        return {
          axis: JJ,
          angle: this.toAxisAngleToRef(JJ)
        }
      }
      toAxisAngleToRef(JJ) {
        let cJ;
        const ZJ = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          FJ = this._w;
        return ZJ > 0 ? (cJ = 2 * Math.atan2(ZJ, FJ), JJ.set(this._x / ZJ, this._y / ZJ, this._z / ZJ)) : (cJ = 0, JJ.set(1, 0, 0)), cJ
      }
      static FromRotationMatrix(JJ) {
        const cJ = new nJ;
        return nJ.FromRotationMatrixToRef(JJ, cJ), cJ
      }
      static FromRotationMatrixToRef(JJ, cJ) {
        const ZJ = JJ.m,
          FJ = ZJ[0],
          UJ = ZJ[4],
          eJ = ZJ[8],
          XJ = ZJ[1],
          AJ = ZJ[5],
          qJ = ZJ[9],
          jJ = ZJ[2],
          YJ = ZJ[6],
          hJ = ZJ[10],
          DJ = FJ + AJ + hJ;
        let sJ;
        return DJ > 0 ? (sJ = .5 / Math.sqrt(DJ + 1), cJ._w = .25 / sJ, cJ._x = (YJ - qJ) * sJ, cJ._y = (eJ - jJ) * sJ, cJ._z = (XJ - UJ) * sJ, cJ._isDirty = !0) : FJ > AJ && FJ > hJ ? (sJ = 2 * Math.sqrt(1 + FJ - AJ - hJ), cJ._w = (YJ - qJ) / sJ, cJ._x = .25 * sJ, cJ._y = (UJ + XJ) / sJ, cJ._z = (eJ + jJ) / sJ, cJ._isDirty = !0) : AJ > hJ ? (sJ = 2 * Math.sqrt(1 + AJ - FJ - hJ), cJ._w = (eJ - jJ) / sJ, cJ._x = (UJ + XJ) / sJ, cJ._y = .25 * sJ, cJ._z = (qJ + YJ) / sJ, cJ._isDirty = !0) : (sJ = 2 * Math.sqrt(1 + hJ - FJ - AJ), cJ._w = (XJ - UJ) / sJ, cJ._x = (eJ + jJ) / sJ, cJ._y = (qJ + YJ) / sJ, cJ._z = .25 * sJ, cJ._isDirty = !0), cJ
      }
      static Dot(JJ, cJ) {
        return JJ._x * cJ._x + JJ._y * cJ._y + JJ._z * cJ._z + JJ._w * cJ._w
      }
      static AreClose(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const FJ = nJ.Dot(JJ, cJ);
        return 1 - FJ * FJ <= ZJ
      }
      static SmoothToRef(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = 0 === FJ ? 1 : ZJ / FJ;
        return eJ = (0, AJ.Clamp)(eJ, 0, 1), nJ.SlerpToRef(JJ, cJ, eJ, UJ), UJ
      }
      static Zero() {
        return new nJ(0, 0, 0, 0)
      }
      static Inverse(JJ) {
        return new nJ(-JJ._x, -JJ._y, -JJ._z, JJ._w)
      }
      static InverseToRef(JJ, cJ) {
        return cJ.set(-JJ._x, -JJ._y, -JJ._z, JJ._w), cJ
      }
      static Identity() {
        return new nJ(0, 0, 0, 1)
      }
      static IsIdentity(JJ) {
        return JJ && 0 === JJ._x && 0 === JJ._y && 0 === JJ._z && 1 === JJ._w
      }
      static RotationAxis(JJ, cJ) {
        return nJ.RotationAxisToRef(JJ, cJ, new nJ)
      }
      static RotationAxisToRef(JJ, cJ, ZJ) {
        ZJ._w = Math.cos(cJ / 2);
        const FJ = Math.sin(cJ / 2) / JJ.length();
        return ZJ._x = JJ._x * FJ, ZJ._y = JJ._y * FJ, ZJ._z = JJ._z * FJ, ZJ._isDirty = !0, ZJ
      }
      static FromArray(JJ, cJ) {
        return cJ || (cJ = 0), new nJ(JJ[cJ], JJ[cJ + 1], JJ[cJ + 2], JJ[cJ + 3])
      }
      static FromArrayToRef(JJ, cJ, ZJ) {
        return ZJ._x = JJ[cJ], ZJ._y = JJ[cJ + 1], ZJ._z = JJ[cJ + 2], ZJ._w = JJ[cJ + 3], ZJ._isDirty = !0, ZJ
      }
      static FromFloatsToRef(JJ, cJ, ZJ, FJ, UJ) {
        return UJ.K9(JJ, cJ, ZJ, FJ), UJ
      }
      static FromEulerAngles(JJ, cJ, ZJ) {
        const FJ = new nJ;
        return nJ.RotationYawPitchRollToRef(cJ, JJ, ZJ, FJ), FJ
      }
      static FromEulerAnglesToRef(JJ, cJ, ZJ, FJ) {
        return nJ.RotationYawPitchRollToRef(cJ, JJ, ZJ, FJ), FJ
      }
      static FromEulerVector(JJ) {
        const cJ = new nJ;
        return nJ.RotationYawPitchRollToRef(JJ._y, JJ._x, JJ._z, cJ), cJ
      }
      static FromEulerVectorToRef(JJ, cJ) {
        return nJ.RotationYawPitchRollToRef(JJ._y, JJ._x, JJ._z, cJ), cJ
      }
      static FromUnitVectorsToRef(JJ, cJ, ZJ) {
        let UJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FJ.e;
        const eJ = DJ.Dot(JJ, cJ) + 1;
        return eJ < UJ ? Math.abs(JJ.x) > Math.abs(JJ.z) ? ZJ.set(-JJ.y, JJ.x, 0, 0) : ZJ.set(0, -JJ.z, JJ.y, 0) : (DJ.CrossToRef(JJ, cJ, xJ.Pn[0]), ZJ.set(xJ.Pn[0].x, xJ.Pn[0].y, xJ.Pn[0].z, eJ)), ZJ.normalize()
      }
      static RotationYawPitchRoll(JJ, cJ, ZJ) {
        const FJ = new nJ;
        return nJ.RotationYawPitchRollToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static RotationYawPitchRollToRef(JJ, cJ, ZJ, FJ) {
        const UJ = .5 * ZJ,
          eJ = .5 * cJ,
          XJ = .5 * JJ,
          AJ = Math.sin(UJ),
          qJ = Math.cos(UJ),
          jJ = Math.sin(eJ),
          YJ = Math.cos(eJ),
          hJ = Math.sin(XJ),
          DJ = Math.cos(XJ);
        return FJ._x = DJ * jJ * qJ + hJ * YJ * AJ, FJ._y = hJ * YJ * qJ - DJ * jJ * AJ, FJ._z = DJ * YJ * AJ - hJ * jJ * qJ, FJ._w = DJ * YJ * qJ + hJ * jJ * AJ, FJ._isDirty = !0, FJ
      }
      static RotationAlphaBetaGamma(JJ, cJ, ZJ) {
        const FJ = new nJ;
        return nJ.RotationAlphaBetaGammaToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static RotationAlphaBetaGammaToRef(JJ, cJ, ZJ, FJ) {
        const UJ = .5 * (ZJ + JJ),
          eJ = .5 * (ZJ - JJ),
          XJ = .5 * cJ;
        return FJ._x = Math.cos(eJ) * Math.sin(XJ), FJ._y = Math.sin(eJ) * Math.sin(XJ), FJ._z = Math.sin(UJ) * Math.cos(XJ), FJ._w = Math.cos(UJ) * Math.cos(XJ), FJ._isDirty = !0, FJ
      }
      static RotationQuaternionFromAxis(JJ, cJ, ZJ) {
        const FJ = new nJ(0, 0, 0, 0);
        return nJ.RotationQuaternionFromAxisToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static RotationQuaternionFromAxisToRef(JJ, cJ, ZJ, FJ) {
        const UJ = fJ.Matrix[0];
        return JJ = JJ.normalizeToRef(fJ.Pn[0]), cJ = cJ.normalizeToRef(fJ.Pn[1]), ZJ = ZJ.normalizeToRef(fJ.Pn[2]), GJ.FromXYZAxesToRef(JJ, cJ, ZJ, UJ), nJ.FromRotationMatrixToRef(UJ, FJ), FJ
      }
      static FromLookDirectionLH(JJ, cJ) {
        const ZJ = new nJ;
        return nJ.FromLookDirectionLHToRef(JJ, cJ, ZJ), ZJ
      }
      static FromLookDirectionLHToRef(JJ, cJ, ZJ) {
        const FJ = fJ.Matrix[0];
        return GJ.LookDirectionLHToRef(JJ, cJ, FJ), nJ.FromRotationMatrixToRef(FJ, ZJ), ZJ
      }
      static FromLookDirectionRH(JJ, cJ) {
        const ZJ = new nJ;
        return nJ.FromLookDirectionRHToRef(JJ, cJ, ZJ), ZJ
      }
      static FromLookDirectionRHToRef(JJ, cJ, ZJ) {
        const FJ = fJ.Matrix[0];
        return GJ.LookDirectionRHToRef(JJ, cJ, FJ), nJ.FromRotationMatrixToRef(FJ, ZJ)
      }
      static Slerp(JJ, cJ, ZJ) {
        const FJ = nJ.Identity();
        return nJ.SlerpToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static SlerpToRef(JJ, cJ, ZJ, FJ) {
        let UJ, eJ, XJ = JJ._x * cJ._x + JJ._y * cJ._y + JJ._z * cJ._z + JJ._w * cJ._w,
          AJ = !1;
        if (XJ < 0 && (AJ = !0, XJ = -XJ), XJ > .999999) eJ = 1 - ZJ, UJ = AJ ? -ZJ : ZJ;
        else {
          const JJ = Math.acos(XJ),
            cJ = 1 / Math.sin(JJ);
          eJ = Math.sin((1 - ZJ) * JJ) * cJ, UJ = AJ ? -Math.sin(ZJ * JJ) * cJ : Math.sin(ZJ * JJ) * cJ
        }
        return FJ._x = eJ * JJ._x + UJ * cJ._x, FJ._y = eJ * JJ._y + UJ * cJ._y, FJ._z = eJ * JJ._z + UJ * cJ._z, FJ._w = eJ * JJ._w + UJ * cJ._w, FJ._isDirty = !0, FJ
      }
      static Hermite(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = UJ * UJ,
          XJ = UJ * eJ,
          AJ = 2 * XJ - 3 * eJ + 1,
          qJ = -2 * XJ + 3 * eJ,
          jJ = XJ - 2 * eJ + UJ,
          YJ = XJ - eJ,
          hJ = JJ._x * AJ + ZJ._x * qJ + cJ._x * jJ + FJ._x * YJ,
          DJ = JJ._y * AJ + ZJ._y * qJ + cJ._y * jJ + FJ._y * YJ,
          sJ = JJ._z * AJ + ZJ._z * qJ + cJ._z * jJ + FJ._z * YJ,
          GJ = JJ._w * AJ + ZJ._w * qJ + cJ._w * jJ + FJ._w * YJ;
        return new nJ(hJ, DJ, sJ, GJ)
      }
      static Hermite1stDerivative(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = new nJ;
        return this.Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ), eJ
      }
      static Hermite1stDerivativeToRef(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = UJ * UJ;
        return eJ._x = 6 * (XJ - UJ) * JJ._x + (3 * XJ - 4 * UJ + 1) * cJ._x + 6 * (-XJ + UJ) * ZJ._x + (3 * XJ - 2 * UJ) * FJ._x, eJ._y = 6 * (XJ - UJ) * JJ._y + (3 * XJ - 4 * UJ + 1) * cJ._y + 6 * (-XJ + UJ) * ZJ._y + (3 * XJ - 2 * UJ) * FJ._y, eJ._z = 6 * (XJ - UJ) * JJ._z + (3 * XJ - 4 * UJ + 1) * cJ._z + 6 * (-XJ + UJ) * ZJ._z + (3 * XJ - 2 * UJ) * FJ._z, eJ._w = 6 * (XJ - UJ) * JJ._w + (3 * XJ - 4 * UJ + 1) * cJ._w + 6 * (-XJ + UJ) * ZJ._w + (3 * XJ - 2 * UJ) * FJ._w, eJ._isDirty = !0, eJ
      }
      static Normalize(JJ) {
        const cJ = nJ.Zero();
        return nJ.NormalizeToRef(JJ, cJ), cJ
      }
      static NormalizeToRef(JJ, cJ) {
        return JJ.normalizeToRef(cJ), cJ
      }
      static Clamp(JJ, cJ, ZJ) {
        const FJ = new nJ;
        return nJ.ClampToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static ClampToRef(JJ, cJ, ZJ, FJ) {
        return FJ.K9((0, AJ.Clamp)(JJ.x, cJ.x, ZJ.x), (0, AJ.Clamp)(JJ.y, cJ.y, ZJ.y), (0, AJ.Clamp)(JJ.z, cJ.z, ZJ.z), (0, AJ.Clamp)(JJ.w, cJ.w, ZJ.w))
      }
      static Random() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new nJ((0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ))
      }
      static RandomToRef() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K9((0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ), (0, AJ.RandomRange)(JJ, cJ))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(JJ, cJ) {
        return Math.sqrt(nJ.DistanceSquared(JJ, cJ))
      }
      static DistanceSquared(JJ, cJ) {
        const ZJ = JJ.x - cJ.x,
          FJ = JJ.y - cJ.y,
          UJ = JJ.z - cJ.z,
          eJ = JJ.w - cJ.w;
        return ZJ * ZJ + FJ * FJ + UJ * UJ + eJ * eJ
      }
      static Center(JJ, cJ) {
        return nJ.CenterToRef(JJ, cJ, nJ.Zero())
      }
      static CenterToRef(JJ, cJ, ZJ) {
        return ZJ.K9((JJ.x + cJ.x) / 2, (JJ.y + cJ.y) / 2, (JJ.z + cJ.z) / 2, (JJ.w + cJ.w) / 2)
      }
    }
    nJ._V8PerformanceHack = new nJ(.5, .5, .5, .5);
    class GJ {
      static get Use64Bits() {
        return eJ.e.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = qJ.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FJ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = JJ, this._isIdentity3x2 = JJ || ZJ, this._isIdentityDirty = !this._isIdentity && cJ, this._isIdentity3x2Dirty = !this._isIdentity3x2 && FJ
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, eJ.e.MatrixTrackPrecisionChange && eJ.e.MatrixTrackedMatrices.push(this), this._m = new eJ.e.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const JJ = this._m;
          this._isIdentity = 1 === JJ[0] && 0 === JJ[1] && 0 === JJ[2] && 0 === JJ[3] && 0 === JJ[4] && 1 === JJ[5] && 0 === JJ[6] && 0 === JJ[7] && 0 === JJ[8] && 0 === JJ[9] && 1 === JJ[10] && 0 === JJ[11] && 0 === JJ[12] && 0 === JJ[13] && 0 === JJ[14] && 1 === JJ[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const JJ = this._m,
          cJ = JJ[0],
          ZJ = JJ[1],
          FJ = JJ[2],
          UJ = JJ[3],
          eJ = JJ[4],
          XJ = JJ[5],
          AJ = JJ[6],
          qJ = JJ[7],
          jJ = JJ[8],
          YJ = JJ[9],
          hJ = JJ[10],
          DJ = JJ[11],
          sJ = JJ[12],
          nJ = JJ[13],
          GJ = JJ[14],
          fJ = JJ[15],
          xJ = hJ * fJ - GJ * DJ,
          rJ = YJ * fJ - nJ * DJ,
          vJ = YJ * GJ - nJ * hJ,
          mJ = jJ * fJ - sJ * DJ,
          QJ = jJ * GJ - hJ * sJ,
          EJ = jJ * nJ - sJ * YJ;
        return cJ * +(XJ * xJ - AJ * rJ + qJ * vJ) + ZJ * -(eJ * xJ - AJ * mJ + qJ * QJ) + FJ * +(eJ * rJ - XJ * mJ + qJ * EJ) + UJ * -(eJ * vJ - XJ * QJ + AJ * EJ)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!JJ) return this._m;
        const ZJ = this._m;
        for (let FJ = 0; FJ < 16; FJ++) JJ[cJ + FJ] = ZJ[FJ];
        return this
      }
      JFJ() {
        return this._m
      }
      zcJ(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GJ.FromArrayToRef(JJ, cJ, this)
      }
      K9() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        return GJ.FromArrayToRef(cJ, 0, this)
      }
      set() {
        const JJ = this._m;
        for (let cJ = 0; cJ < 16; cJ++) JJ[cJ] = cJ < 0 || arguments.length <= cJ ? void 0 : arguments[cJ];
        return this.markAsUpdated(), this
      }
      X3(JJ) {
        const cJ = this._m;
        for (let ZJ = 0; ZJ < 16; ZJ++) cJ[ZJ] = JJ;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return GJ.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(JJ) {
        const cJ = new GJ;
        return this.addToRef(JJ, cJ), cJ
      }
      addToRef(JJ, cJ) {
        const ZJ = this._m,
          FJ = cJ._m,
          UJ = JJ.m;
        for (let eJ = 0; eJ < 16; eJ++) FJ[eJ] = ZJ[eJ] + UJ[eJ];
        return cJ.markAsUpdated(), cJ
      }
      addToSelf(JJ) {
        const cJ = this._m,
          ZJ = JJ.m;
        return cJ[0] += ZJ[0], cJ[1] += ZJ[1], cJ[2] += ZJ[2], cJ[3] += ZJ[3], cJ[4] += ZJ[4], cJ[5] += ZJ[5], cJ[6] += ZJ[6], cJ[7] += ZJ[7], cJ[8] += ZJ[8], cJ[9] += ZJ[9], cJ[10] += ZJ[10], cJ[11] += ZJ[11], cJ[12] += ZJ[12], cJ[13] += ZJ[13], cJ[14] += ZJ[14], cJ[15] += ZJ[15], this.markAsUpdated(), this
      }
      addInPlace(JJ) {
        const cJ = this._m,
          ZJ = JJ.m;
        for (let FJ = 0; FJ < 16; FJ++) cJ[FJ] += ZJ[FJ];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const JJ = this._m;
        for (let cJ = 0; cJ < 16; cJ++) JJ[cJ] += cJ < 0 || arguments.length <= cJ ? void 0 : arguments[cJ];
        return this.markAsUpdated(), this
      }
      subtract(JJ) {
        const cJ = this._m,
          ZJ = JJ.m;
        for (let FJ = 0; FJ < 16; FJ++) cJ[FJ] -= ZJ[FJ];
        return this.markAsUpdated(), this
      }
      subtractToRef(JJ, cJ) {
        const ZJ = this._m,
          FJ = JJ.m,
          UJ = cJ._m;
        for (let eJ = 0; eJ < 16; eJ++) UJ[eJ] = ZJ[eJ] - FJ[eJ];
        return cJ.markAsUpdated(), cJ
      }
      xFJ(JJ) {
        const cJ = this._m,
          ZJ = JJ.m;
        for (let FJ = 0; FJ < 16; FJ++) cJ[FJ] -= ZJ[FJ];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        return this.subtractFromFloatsToRef(...cJ, new GJ)
      }
      subtractFromFloatsToRef() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        const FJ = cJ.pop(),
          UJ = this._m,
          eJ = FJ._m,
          XJ = cJ;
        for (let AJ = 0; AJ < 16; AJ++) eJ[AJ] = UJ[AJ] - XJ[AJ];
        return FJ.markAsUpdated(), FJ
      }
      invertToRef(JJ) {
        return !0 === this._isIdentity ? (GJ.IdentityToRef(JJ), JJ) : ((0, qJ.e)(this, JJ.JFJ()) ? JJ.markAsUpdated() : JJ.rZJ(this), JJ)
      }
      addAtIndex(JJ, cJ) {
        return this._m[JJ] += cJ, this.markAsUpdated(), this
      }
      multiplyAtIndex(JJ, cJ) {
        return this._m[JJ] *= cJ, this.markAsUpdated(), this
      }
      setTranslationFromFloats(JJ, cJ, ZJ) {
        return this._m[12] = JJ, this._m[13] = cJ, this._m[14] = ZJ, this.markAsUpdated(), this
      }
      addTranslationFromFloats(JJ, cJ, ZJ) {
        return this._m[12] += JJ, this._m[13] += cJ, this._m[14] += ZJ, this.markAsUpdated(), this
      }
      setTranslation(JJ) {
        return this.setTranslationFromFloats(JJ._x, JJ._y, JJ._z)
      }
      getTranslation() {
        return new DJ(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(JJ) {
        return JJ.x = this._m[12], JJ.y = this._m[13], JJ.z = this._m[14], JJ
      }
      removeRotationAndScaling() {
        const JJ = this.m;
        return GJ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, JJ[12], JJ[13], JJ[14], JJ[15], this), this._updateIdentityStatus(0 === JJ[12] && 0 === JJ[13] && 0 === JJ[14] && 1 === JJ[15]), this
      }
      rZJ(JJ) {
        JJ.copyToArray(this._m);
        const cJ = JJ;
        return this.updateFlag = cJ.updateFlag, this._updateIdentityStatus(cJ._isIdentity, cJ._isIdentityDirty, cJ._isIdentity3x2, cJ._isIdentity3x2Dirty), this
      }
      copyToArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, qJ.b)(this, JJ, cJ), this
      }
      multiply(JJ) {
        const cJ = new GJ;
        return this.multiplyToRef(JJ, cJ), cJ
      }
      multiplyInPlace(JJ) {
        const cJ = this._m,
          ZJ = JJ.m;
        for (let FJ = 0; FJ < 16; FJ++) cJ[FJ] *= ZJ[FJ];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const JJ = this._m;
        for (let cJ = 0; cJ < 16; cJ++) JJ[cJ] *= cJ < 0 || arguments.length <= cJ ? void 0 : arguments[cJ];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var JJ = arguments.length, cJ = new Array(JJ), ZJ = 0; ZJ < JJ; ZJ++) cJ[ZJ] = arguments[ZJ];
        const FJ = cJ.pop(),
          UJ = this._m,
          eJ = FJ._m,
          XJ = cJ;
        for (let AJ = 0; AJ < 16; AJ++) eJ[AJ] = UJ[AJ] * XJ[AJ];
        return FJ.markAsUpdated(), FJ
      }
      multiplyToRef(JJ, cJ) {
        return this._isIdentity ? (cJ.rZJ(JJ), cJ) : JJ._isIdentity ? (cJ.rZJ(this), cJ) : (this.multiplyToArray(JJ, cJ._m, 0), cJ.markAsUpdated(), cJ)
      }
      multiplyToArray(JJ, cJ, ZJ) {
        return (0, qJ.k)(this, JJ, cJ, ZJ), this
      }
      divide(JJ) {
        return this.divideToRef(JJ, new GJ)
      }
      divideToRef(JJ, cJ) {
        const ZJ = this._m,
          FJ = JJ.m,
          UJ = cJ._m;
        for (let eJ = 0; eJ < 16; eJ++) UJ[eJ] = ZJ[eJ] / FJ[eJ];
        return cJ.markAsUpdated(), cJ
      }
      divideInPlace(JJ) {
        const cJ = this._m,
          ZJ = JJ.m;
        for (let FJ = 0; FJ < 16; FJ++) cJ[FJ] /= ZJ[FJ];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(JJ) {
        const cJ = this._m,
          ZJ = JJ.m;
        for (let FJ = 0; FJ < 16; FJ++) cJ[FJ] = Math.min(cJ[FJ], ZJ[FJ]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const JJ = this._m;
        for (let cJ = 0; cJ < 16; cJ++) JJ[cJ] = Math.min(JJ[cJ], cJ < 0 || arguments.length <= cJ ? void 0 : arguments[cJ]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(JJ) {
        const cJ = this._m,
          ZJ = JJ.m;
        for (let FJ = 0; FJ < 16; FJ++) cJ[FJ] = Math.max(cJ[FJ], ZJ[FJ]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const JJ = this._m;
        for (let cJ = 0; cJ < 16; cJ++) JJ[cJ] = Math.max(JJ[cJ], cJ < 0 || arguments.length <= cJ ? void 0 : arguments[cJ]);
        return this.markAsUpdated(), this
      }
      nZ() {
        return this.negateToRef(new GJ)
      }
      negateInPlace() {
        const JJ = this._m;
        for (let cJ = 0; cJ < 16; cJ++) JJ[cJ] = -JJ[cJ];
        return this.markAsUpdated(), this
      }
      negateToRef(JJ) {
        const cJ = this._m,
          ZJ = JJ._m;
        for (let FJ = 0; FJ < 16; FJ++) ZJ[FJ] = -cJ[FJ];
        return JJ.markAsUpdated(), JJ
      }
      equals(JJ) {
        const cJ = JJ;
        if (!cJ) return !1;
        if ((this._isIdentity || cJ._isIdentity) && !this._isIdentityDirty && !cJ._isIdentityDirty) return this._isIdentity && cJ._isIdentity;
        const ZJ = this.m,
          FJ = cJ.m;
        return ZJ[0] === FJ[0] && ZJ[1] === FJ[1] && ZJ[2] === FJ[2] && ZJ[3] === FJ[3] && ZJ[4] === FJ[4] && ZJ[5] === FJ[5] && ZJ[6] === FJ[6] && ZJ[7] === FJ[7] && ZJ[8] === FJ[8] && ZJ[9] === FJ[9] && ZJ[10] === FJ[10] && ZJ[11] === FJ[11] && ZJ[12] === FJ[12] && ZJ[13] === FJ[13] && ZJ[14] === FJ[14] && ZJ[15] === FJ[15]
      }
      equalsWithEpsilon(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = this._m,
          FJ = JJ.m;
        for (let UJ = 0; UJ < 16; UJ++)
          if (!(0, AJ.WithinEpsilon)(ZJ[UJ], FJ[UJ], cJ)) return !1;
        return !0
      }
      KXJ() {
        const JJ = this._m;
        for (let cJ = 0; cJ < 16; cJ++)
          if (JJ[cJ] != (cJ < 0 || arguments.length <= cJ ? void 0 : arguments[cJ])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new GJ)
      }
      floorToRef(JJ) {
        const cJ = this._m,
          ZJ = JJ._m;
        for (let FJ = 0; FJ < 16; FJ++) ZJ[FJ] = Math.floor(cJ[FJ]);
        return JJ.markAsUpdated(), JJ
      }
      fract() {
        return this.fractToRef(new GJ)
      }
      fractToRef(JJ) {
        const cJ = this._m,
          ZJ = JJ._m;
        for (let FJ = 0; FJ < 16; FJ++) ZJ[FJ] = cJ[FJ] - Math.floor(cJ[FJ]);
        return JJ.markAsUpdated(), JJ
      }
      clone() {
        const JJ = new GJ;
        return JJ.rZJ(this), JJ
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let JJ = YJ(this._m[0]);
        for (let cJ = 1; cJ < 16; cJ++) JJ = 397 * JJ ^ YJ(this._m[cJ]);
        return JJ
      }
      decomposeToTransformNode(JJ) {
        return JJ.rotationQuaternion = JJ.rotationQuaternion || new nJ, this.decompose(JJ.GA, JJ.rotationQuaternion, JJ.position)
      }
      decompose(JJ, cJ, ZJ, FJ) {
        let UJ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return ZJ && ZJ.X3(0), JJ && JJ.X3(1), cJ && cJ.K9(0, 0, 0, 1), !0;
        const eJ = this._m;
        if (ZJ && ZJ.K9(eJ[12], eJ[13], eJ[14]), (JJ = JJ || fJ.Pn[0]).x = Math.sqrt(eJ[0] * eJ[0] + eJ[1] * eJ[1] + eJ[2] * eJ[2]), JJ.y = Math.sqrt(eJ[4] * eJ[4] + eJ[5] * eJ[5] + eJ[6] * eJ[6]), JJ.z = Math.sqrt(eJ[8] * eJ[8] + eJ[9] * eJ[9] + eJ[10] * eJ[10]), FJ) {
          const cJ = (UJ ? FJ.absoluteScaling.x : FJ.GA.x) < 0 ? -1 : 1,
            ZJ = (UJ ? FJ.absoluteScaling.y : FJ.GA.y) < 0 ? -1 : 1,
            eJ = (UJ ? FJ.absoluteScaling.z : FJ.GA.z) < 0 ? -1 : 1;
          JJ.x *= cJ, JJ.y *= ZJ, JJ.z *= eJ
        } else this.determinant() <= 0 && (JJ.y *= -1);
        if (0 === JJ._x || 0 === JJ._y || 0 === JJ._z) return cJ && cJ.K9(0, 0, 0, 1), !1;
        if (cJ) {
          const ZJ = 1 / JJ._x,
            FJ = 1 / JJ._y,
            UJ = 1 / JJ._z;
          GJ.FromValuesToRef(eJ[0] * ZJ, eJ[1] * ZJ, eJ[2] * ZJ, 0, eJ[4] * FJ, eJ[5] * FJ, eJ[6] * FJ, 0, eJ[8] * UJ, eJ[9] * UJ, eJ[10] * UJ, 0, 0, 0, 0, 1, fJ.Matrix[0]), nJ.FromRotationMatrixToRef(fJ.Matrix[0], cJ)
        }
        return !0
      }
      getRow(JJ) {
        if (JJ < 0 || JJ > 3) return null;
        const cJ = 4 * JJ;
        return new sJ(this._m[cJ + 0], this._m[cJ + 1], this._m[cJ + 2], this._m[cJ + 3])
      }
      getRowToRef(JJ, cJ) {
        if (JJ >= 0 && JJ <= 3) {
          const ZJ = 4 * JJ;
          cJ.x = this._m[ZJ + 0], cJ.y = this._m[ZJ + 1], cJ.z = this._m[ZJ + 2], cJ.w = this._m[ZJ + 3]
        }
        return cJ
      }
      setRow(JJ, cJ) {
        return this.setRowFromFloats(JJ, cJ.x, cJ.y, cJ.z, cJ.w)
      }
      transpose() {
        const JJ = new GJ;
        return GJ.TransposeToRef(this, JJ), JJ
      }
      transposeToRef(JJ) {
        return GJ.TransposeToRef(this, JJ), JJ
      }
      setRowFromFloats(JJ, cJ, ZJ, FJ, UJ) {
        if (JJ < 0 || JJ > 3) return this;
        const eJ = 4 * JJ;
        return this._m[eJ + 0] = cJ, this._m[eJ + 1] = ZJ, this._m[eJ + 2] = FJ, this._m[eJ + 3] = UJ, this.markAsUpdated(), this
      }
      scale(JJ) {
        const cJ = new GJ;
        return this.scaleToRef(JJ, cJ), cJ
      }
      scaleToRef(JJ, cJ) {
        for (let ZJ = 0; ZJ < 16; ZJ++) cJ._m[ZJ] = this._m[ZJ] * JJ;
        return cJ.markAsUpdated(), cJ
      }
      scaleAndAddToRef(JJ, cJ) {
        for (let ZJ = 0; ZJ < 16; ZJ++) cJ._m[ZJ] += this._m[ZJ] * JJ;
        return cJ.markAsUpdated(), cJ
      }
      scaleInPlace(JJ) {
        const cJ = this._m;
        for (let ZJ = 0; ZJ < 16; ZJ++) cJ[ZJ] *= JJ;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(JJ) {
        const cJ = fJ.Matrix[0];
        this.invertToRef(cJ), cJ.transposeToRef(JJ);
        const ZJ = JJ._m;
        return GJ.FromValuesToRef(ZJ[0], ZJ[1], ZJ[2], 0, ZJ[4], ZJ[5], ZJ[6], 0, ZJ[8], ZJ[9], ZJ[10], 0, 0, 0, 0, 1, JJ), JJ
      }
      getRotationMatrix() {
        const JJ = new GJ;
        return this.getRotationMatrixToRef(JJ), JJ
      }
      getRotationMatrixToRef(JJ) {
        const cJ = fJ.Pn[0];
        if (!this.decompose(cJ)) return GJ.IdentityToRef(JJ), JJ;
        const ZJ = this._m,
          FJ = 1 / cJ._x,
          UJ = 1 / cJ._y,
          eJ = 1 / cJ._z;
        return GJ.FromValuesToRef(ZJ[0] * FJ, ZJ[1] * FJ, ZJ[2] * FJ, 0, ZJ[4] * UJ, ZJ[5] * UJ, ZJ[6] * UJ, 0, ZJ[8] * eJ, ZJ[9] * eJ, ZJ[10] * eJ, 0, 0, 0, 0, 1, JJ), JJ
      }
      toggleModelMatrixHandInPlace() {
        const JJ = this._m;
        return JJ[2] *= -1, JJ[6] *= -1, JJ[8] *= -1, JJ[9] *= -1, JJ[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const JJ = this._m;
        return JJ[8] *= -1, JJ[9] *= -1, JJ[10] *= -1, JJ[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(rJ, this), this
      }
      static FromArray(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZJ = new GJ;
        return GJ.FromArrayToRef(JJ, cJ, ZJ), ZJ
      }
      static FromArrayToRef(JJ, cJ, ZJ) {
        for (let FJ = 0; FJ < 16; FJ++) ZJ._m[FJ] = JJ[FJ + cJ];
        return ZJ.markAsUpdated(), ZJ
      }
      static FromFloat32ArrayToRefScaled(JJ, cJ, ZJ, FJ) {
        return FJ._m[0] = JJ[0 + cJ] * ZJ, FJ._m[1] = JJ[1 + cJ] * ZJ, FJ._m[2] = JJ[2 + cJ] * ZJ, FJ._m[3] = JJ[3 + cJ] * ZJ, FJ._m[4] = JJ[4 + cJ] * ZJ, FJ._m[5] = JJ[5 + cJ] * ZJ, FJ._m[6] = JJ[6 + cJ] * ZJ, FJ._m[7] = JJ[7 + cJ] * ZJ, FJ._m[8] = JJ[8 + cJ] * ZJ, FJ._m[9] = JJ[9 + cJ] * ZJ, FJ._m[10] = JJ[10 + cJ] * ZJ, FJ._m[11] = JJ[11 + cJ] * ZJ, FJ._m[12] = JJ[12 + cJ] * ZJ, FJ._m[13] = JJ[13 + cJ] * ZJ, FJ._m[14] = JJ[14 + cJ] * ZJ, FJ._m[15] = JJ[15 + cJ] * ZJ, FJ.markAsUpdated(), FJ
      }
      static get IdentityReadOnly() {
        return GJ._IdentityReadOnly
      }
      static FromValuesToRef(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, GJ, fJ) {
        const xJ = fJ._m;
        xJ[0] = JJ, xJ[1] = cJ, xJ[2] = ZJ, xJ[3] = FJ, xJ[4] = UJ, xJ[5] = eJ, xJ[6] = XJ, xJ[7] = AJ, xJ[8] = qJ, xJ[9] = jJ, xJ[10] = YJ, xJ[11] = hJ, xJ[12] = DJ, xJ[13] = sJ, xJ[14] = nJ, xJ[15] = GJ, fJ.markAsUpdated()
      }
      static FromValues(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ, hJ, DJ, sJ, nJ, fJ) {
        const xJ = new GJ,
          rJ = xJ._m;
        return rJ[0] = JJ, rJ[1] = cJ, rJ[2] = ZJ, rJ[3] = FJ, rJ[4] = UJ, rJ[5] = eJ, rJ[6] = XJ, rJ[7] = AJ, rJ[8] = qJ, rJ[9] = jJ, rJ[10] = YJ, rJ[11] = hJ, rJ[12] = DJ, rJ[13] = sJ, rJ[14] = nJ, rJ[15] = fJ, xJ.markAsUpdated(), xJ
      }
      static Compose(JJ, cJ, ZJ) {
        const FJ = new GJ;
        return GJ.ComposeToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static ComposeToRef(JJ, cJ, ZJ, FJ) {
        const UJ = FJ._m,
          eJ = cJ._x,
          XJ = cJ._y,
          AJ = cJ._z,
          qJ = cJ._w,
          jJ = eJ + eJ,
          YJ = XJ + XJ,
          hJ = AJ + AJ,
          DJ = eJ * jJ,
          sJ = eJ * YJ,
          nJ = eJ * hJ,
          GJ = XJ * YJ,
          fJ = XJ * hJ,
          xJ = AJ * hJ,
          rJ = qJ * jJ,
          vJ = qJ * YJ,
          mJ = qJ * hJ,
          QJ = JJ._x,
          EJ = JJ._y,
          VJ = JJ._z;
        return UJ[0] = (1 - (GJ + xJ)) * QJ, UJ[1] = (sJ + mJ) * QJ, UJ[2] = (nJ - vJ) * QJ, UJ[3] = 0, UJ[4] = (sJ - mJ) * EJ, UJ[5] = (1 - (DJ + xJ)) * EJ, UJ[6] = (fJ + rJ) * EJ, UJ[7] = 0, UJ[8] = (nJ + vJ) * VJ, UJ[9] = (fJ - rJ) * VJ, UJ[10] = (1 - (DJ + GJ)) * VJ, UJ[11] = 0, UJ[12] = ZJ._x, UJ[13] = ZJ._y, UJ[14] = ZJ._z, UJ[15] = 1, FJ.markAsUpdated(), FJ
      }
      static Identity() {
        const JJ = GJ.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return JJ._updateIdentityStatus(!0), JJ
      }
      static IdentityToRef(JJ) {
        return GJ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, JJ), JJ._updateIdentityStatus(!0), JJ
      }
      static Zero() {
        const JJ = GJ.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return JJ._updateIdentityStatus(!1), JJ
      }
      static RotationX(JJ) {
        const cJ = new GJ;
        return GJ.RotationXToRef(JJ, cJ), cJ
      }
      static Invert(JJ) {
        const cJ = new GJ;
        return JJ.invertToRef(cJ), cJ
      }
      static RotationXToRef(JJ, cJ) {
        const ZJ = Math.sin(JJ),
          FJ = Math.cos(JJ);
        return GJ.FromValuesToRef(1, 0, 0, 0, 0, FJ, ZJ, 0, 0, -ZJ, FJ, 0, 0, 0, 0, 1, cJ), cJ._updateIdentityStatus(1 === FJ && 0 === ZJ), cJ
      }
      static RotationY(JJ) {
        const cJ = new GJ;
        return GJ.RotationYToRef(JJ, cJ), cJ
      }
      static RotationYToRef(JJ, cJ) {
        const ZJ = Math.sin(JJ),
          FJ = Math.cos(JJ);
        return GJ.FromValuesToRef(FJ, 0, -ZJ, 0, 0, 1, 0, 0, ZJ, 0, FJ, 0, 0, 0, 0, 1, cJ), cJ._updateIdentityStatus(1 === FJ && 0 === ZJ), cJ
      }
      static RotationZ(JJ) {
        const cJ = new GJ;
        return GJ.RotationZToRef(JJ, cJ), cJ
      }
      static RotationZToRef(JJ, cJ) {
        const ZJ = Math.sin(JJ),
          FJ = Math.cos(JJ);
        return GJ.FromValuesToRef(FJ, ZJ, 0, 0, -ZJ, FJ, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, cJ), cJ._updateIdentityStatus(1 === FJ && 0 === ZJ), cJ
      }
      static RotationAxis(JJ, cJ) {
        const ZJ = new GJ;
        return GJ.RotationAxisToRef(JJ, cJ, ZJ), ZJ
      }
      static RotationAxisToRef(JJ, cJ, ZJ) {
        const FJ = Math.sin(-cJ),
          UJ = Math.cos(-cJ),
          eJ = 1 - UJ;
        JJ = JJ.normalizeToRef(fJ.Pn[0]);
        const XJ = ZJ._m;
        return XJ[0] = JJ._x * JJ._x * eJ + UJ, XJ[1] = JJ._x * JJ._y * eJ - JJ._z * FJ, XJ[2] = JJ._x * JJ._z * eJ + JJ._y * FJ, XJ[3] = 0, XJ[4] = JJ._y * JJ._x * eJ + JJ._z * FJ, XJ[5] = JJ._y * JJ._y * eJ + UJ, XJ[6] = JJ._y * JJ._z * eJ - JJ._x * FJ, XJ[7] = 0, XJ[8] = JJ._z * JJ._x * eJ - JJ._y * FJ, XJ[9] = JJ._z * JJ._y * eJ + JJ._x * FJ, XJ[10] = JJ._z * JJ._z * eJ + UJ, XJ[11] = 0, XJ[12] = 0, XJ[13] = 0, XJ[14] = 0, XJ[15] = 1, ZJ.markAsUpdated(), ZJ
      }
      static RotationAlignToRef(JJ, cJ, ZJ) {
        let UJ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const eJ = DJ.Dot(cJ, JJ),
          XJ = ZJ._m;
        if (eJ < -1 + FJ.e) XJ[0] = -1, XJ[1] = 0, XJ[2] = 0, XJ[3] = 0, XJ[4] = 0, XJ[5] = UJ ? 1 : -1, XJ[6] = 0, XJ[7] = 0, XJ[8] = 0, XJ[9] = 0, XJ[10] = UJ ? -1 : 1, XJ[11] = 0;
        else {
          const ZJ = DJ.Cross(cJ, JJ),
            FJ = 1 / (1 + eJ);
          XJ[0] = ZJ._x * ZJ._x * FJ + eJ, XJ[1] = ZJ._y * ZJ._x * FJ - ZJ._z, XJ[2] = ZJ._z * ZJ._x * FJ + ZJ._y, XJ[3] = 0, XJ[4] = ZJ._x * ZJ._y * FJ + ZJ._z, XJ[5] = ZJ._y * ZJ._y * FJ + eJ, XJ[6] = ZJ._z * ZJ._y * FJ - ZJ._x, XJ[7] = 0, XJ[8] = ZJ._x * ZJ._z * FJ - ZJ._y, XJ[9] = ZJ._y * ZJ._z * FJ + ZJ._x, XJ[10] = ZJ._z * ZJ._z * FJ + eJ, XJ[11] = 0
        }
        return XJ[12] = 0, XJ[13] = 0, XJ[14] = 0, XJ[15] = 1, ZJ.markAsUpdated(), ZJ
      }
      static RotationYawPitchRoll(JJ, cJ, ZJ) {
        const FJ = new GJ;
        return GJ.RotationYawPitchRollToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static RotationYawPitchRollToRef(JJ, cJ, ZJ, FJ) {
        return nJ.RotationYawPitchRollToRef(JJ, cJ, ZJ, fJ.Quaternion[0]), fJ.Quaternion[0].toRotationMatrix(FJ), FJ
      }
      static Scaling(JJ, cJ, ZJ) {
        const FJ = new GJ;
        return GJ.ScalingToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static ScalingToRef(JJ, cJ, ZJ, FJ) {
        return GJ.FromValuesToRef(JJ, 0, 0, 0, 0, cJ, 0, 0, 0, 0, ZJ, 0, 0, 0, 0, 1, FJ), FJ._updateIdentityStatus(1 === JJ && 1 === cJ && 1 === ZJ), FJ
      }
      static Translation(JJ, cJ, ZJ) {
        const FJ = new GJ;
        return GJ.TranslationToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static TranslationToRef(JJ, cJ, ZJ, FJ) {
        return GJ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, JJ, cJ, ZJ, 1, FJ), FJ._updateIdentityStatus(0 === JJ && 0 === cJ && 0 === ZJ), FJ
      }
      static Lerp(JJ, cJ, ZJ) {
        const FJ = new GJ;
        return GJ.LerpToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static LerpToRef(JJ, cJ, ZJ, FJ) {
        const UJ = FJ._m,
          eJ = JJ.m,
          XJ = cJ.m;
        for (let AJ = 0; AJ < 16; AJ++) UJ[AJ] = eJ[AJ] * (1 - ZJ) + XJ[AJ] * ZJ;
        return FJ.markAsUpdated(), FJ
      }
      static DecomposeLerp(JJ, cJ, ZJ) {
        const FJ = new GJ;
        return GJ.DecomposeLerpToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static DecomposeLerpToRef(JJ, cJ, ZJ, FJ) {
        const UJ = fJ.Pn[0],
          eJ = fJ.Quaternion[0],
          XJ = fJ.Pn[1];
        JJ.decompose(UJ, eJ, XJ);
        const AJ = fJ.Pn[2],
          qJ = fJ.Quaternion[1],
          jJ = fJ.Pn[3];
        cJ.decompose(AJ, qJ, jJ);
        const YJ = fJ.Pn[4];
        DJ.LerpToRef(UJ, AJ, ZJ, YJ);
        const hJ = fJ.Quaternion[2];
        nJ.SlerpToRef(eJ, qJ, ZJ, hJ);
        const sJ = fJ.Pn[5];
        return DJ.LerpToRef(XJ, jJ, ZJ, sJ), GJ.ComposeToRef(YJ, hJ, sJ, FJ), FJ
      }
      static LookAtLH(JJ, cJ, ZJ) {
        const FJ = new GJ;
        return GJ.LookAtLHToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static LookAtLHToRef(JJ, cJ, ZJ, FJ) {
        const UJ = fJ.Pn[0],
          eJ = fJ.Pn[1],
          XJ = fJ.Pn[2];
        cJ.subtractToRef(JJ, XJ), XJ.normalize(), DJ.CrossToRef(ZJ, XJ, UJ);
        const AJ = UJ.lengthSquared();
        0 === AJ ? UJ.x = 1 : UJ.normalizeFromLength(Math.sqrt(AJ)), DJ.CrossToRef(XJ, UJ, eJ), eJ.normalize();
        const qJ = -DJ.Dot(UJ, JJ),
          jJ = -DJ.Dot(eJ, JJ),
          YJ = -DJ.Dot(XJ, JJ);
        return GJ.FromValuesToRef(UJ._x, eJ._x, XJ._x, 0, UJ._y, eJ._y, XJ._y, 0, UJ._z, eJ._z, XJ._z, 0, qJ, jJ, YJ, 1, FJ), FJ
      }
      static LookAtRH(JJ, cJ, ZJ) {
        const FJ = new GJ;
        return GJ.LookAtRHToRef(JJ, cJ, ZJ, FJ), FJ
      }
      static LookAtRHToRef(JJ, cJ, ZJ, FJ) {
        const UJ = fJ.Pn[0],
          eJ = fJ.Pn[1],
          XJ = fJ.Pn[2];
        JJ.subtractToRef(cJ, XJ), XJ.normalize(), DJ.CrossToRef(ZJ, XJ, UJ);
        const AJ = UJ.lengthSquared();
        0 === AJ ? UJ.x = 1 : UJ.normalizeFromLength(Math.sqrt(AJ)), DJ.CrossToRef(XJ, UJ, eJ), eJ.normalize();
        const qJ = -DJ.Dot(UJ, JJ),
          jJ = -DJ.Dot(eJ, JJ),
          YJ = -DJ.Dot(XJ, JJ);
        return GJ.FromValuesToRef(UJ._x, eJ._x, XJ._x, 0, UJ._y, eJ._y, XJ._y, 0, UJ._z, eJ._z, XJ._z, 0, qJ, jJ, YJ, 1, FJ), FJ
      }
      static LookDirectionLH(JJ, cJ) {
        const ZJ = new GJ;
        return GJ.LookDirectionLHToRef(JJ, cJ, ZJ), ZJ
      }
      static LookDirectionLHToRef(JJ, cJ, ZJ) {
        const FJ = fJ.Pn[0];
        FJ.rZJ(JJ), FJ.scaleInPlace(-1);
        const UJ = fJ.Pn[1];
        return DJ.CrossToRef(cJ, FJ, UJ), GJ.FromValuesToRef(UJ._x, UJ._y, UJ._z, 0, cJ._x, cJ._y, cJ._z, 0, FJ._x, FJ._y, FJ._z, 0, 0, 0, 0, 1, ZJ), ZJ
      }
      static LookDirectionRH(JJ, cJ) {
        const ZJ = new GJ;
        return GJ.LookDirectionRHToRef(JJ, cJ, ZJ), ZJ
      }
      static LookDirectionRHToRef(JJ, cJ, ZJ) {
        const FJ = fJ.Pn[2];
        return DJ.CrossToRef(cJ, JJ, FJ), GJ.FromValuesToRef(FJ._x, FJ._y, FJ._z, 0, cJ._x, cJ._y, cJ._z, 0, JJ._x, JJ._y, JJ._z, 0, 0, 0, 0, 1, ZJ), ZJ
      }
      static OrthoLH(JJ, cJ, ZJ, FJ, UJ) {
        const eJ = new GJ;
        return GJ.OrthoLHToRef(JJ, cJ, ZJ, FJ, eJ, UJ), eJ
      }
      static OrthoLHToRef(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = 2 / JJ,
          AJ = 2 / cJ,
          qJ = 2 / (FJ - ZJ),
          jJ = -(FJ + ZJ) / (FJ - ZJ);
        return GJ.FromValuesToRef(XJ, 0, 0, 0, 0, AJ, 0, 0, 0, 0, qJ, 0, 0, 0, jJ, 1, UJ), eJ && UJ.multiplyToRef(rJ, UJ), UJ._updateIdentityStatus(1 === XJ && 1 === AJ && 1 === qJ && 0 === jJ), UJ
      }
      static OrthoOffCenterLH(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = new GJ;
        return GJ.OrthoOffCenterLHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, AJ, XJ), AJ
      }
      static OrthoOffCenterLHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        const qJ = 2 / (cJ - JJ),
          jJ = 2 / (FJ - ZJ),
          YJ = 2 / (eJ - UJ),
          hJ = -(eJ + UJ) / (eJ - UJ),
          DJ = (JJ + cJ) / (JJ - cJ),
          sJ = (FJ + ZJ) / (ZJ - FJ);
        return GJ.FromValuesToRef(qJ, 0, 0, 0, 0, jJ, 0, 0, 0, 0, YJ, 0, DJ, sJ, hJ, 1, XJ), AJ && XJ.multiplyToRef(rJ, XJ), XJ.markAsUpdated(), XJ
      }
      static ObliqueOffCenterLHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
        const hJ = -XJ * Math.cos(AJ),
          DJ = -XJ * Math.sin(AJ);
        return GJ.TranslationToRef(0, 0, -qJ, fJ.Matrix[1]), GJ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, hJ, DJ, 1, 0, 0, 0, 0, 1, fJ.Matrix[0]), fJ.Matrix[1].multiplyToRef(fJ.Matrix[0], fJ.Matrix[0]), GJ.TranslationToRef(0, 0, qJ, fJ.Matrix[1]), fJ.Matrix[0].multiplyToRef(fJ.Matrix[1], fJ.Matrix[0]), GJ.OrthoOffCenterLHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, jJ, YJ), fJ.Matrix[0].multiplyToRef(jJ, jJ), jJ
      }
      static OrthoOffCenterRH(JJ, cJ, ZJ, FJ, UJ, eJ, XJ) {
        const AJ = new GJ;
        return GJ.OrthoOffCenterRHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, AJ, XJ), AJ
      }
      static OrthoOffCenterRHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ) {
        return GJ.OrthoOffCenterLHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ), XJ._m[10] *= -1, XJ
      }
      static ObliqueOffCenterRHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, XJ, AJ, qJ, jJ, YJ) {
        const hJ = XJ * Math.cos(AJ),
          DJ = XJ * Math.sin(AJ);
        return GJ.TranslationToRef(0, 0, qJ, fJ.Matrix[1]), GJ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, hJ, DJ, 1, 0, 0, 0, 0, 1, fJ.Matrix[0]), fJ.Matrix[1].multiplyToRef(fJ.Matrix[0], fJ.Matrix[0]), GJ.TranslationToRef(0, 0, -qJ, fJ.Matrix[1]), fJ.Matrix[0].multiplyToRef(fJ.Matrix[1], fJ.Matrix[0]), GJ.OrthoOffCenterRHToRef(JJ, cJ, ZJ, FJ, UJ, eJ, jJ, YJ), fJ.Matrix[0].multiplyToRef(jJ, jJ), jJ
      }
      static PerspectiveLH(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const XJ = new GJ,
          AJ = 2 * ZJ / JJ,
          qJ = 2 * ZJ / cJ,
          jJ = (FJ + ZJ) / (FJ - ZJ),
          YJ = -2 * FJ * ZJ / (FJ - ZJ),
          hJ = Math.tan(eJ);
        return GJ.FromValuesToRef(AJ, 0, 0, 0, 0, qJ, 0, hJ, 0, 0, jJ, 1, 0, 0, YJ, 0, XJ), UJ && XJ.multiplyToRef(rJ, XJ), XJ._updateIdentityStatus(!1), XJ
      }
      static PerspectiveFovLH(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const AJ = new GJ;
        return GJ.PerspectiveFovLHToRef(JJ, cJ, ZJ, FJ, AJ, !0, UJ, eJ, XJ), AJ
      }
      static PerspectiveFovLHToRef(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const jJ = ZJ,
          YJ = FJ,
          hJ = 1 / Math.tan(.5 * JJ),
          DJ = eJ ? hJ / cJ : hJ,
          sJ = eJ ? hJ : hJ * cJ,
          nJ = qJ && 0 === jJ ? -1 : 0 !== YJ ? (YJ + jJ) / (YJ - jJ) : 1,
          fJ = qJ && 0 === jJ ? 2 * YJ : 0 !== YJ ? -2 * YJ * jJ / (YJ - jJ) : -2 * jJ,
          xJ = Math.tan(AJ);
        return GJ.FromValuesToRef(DJ, 0, 0, 0, 0, sJ, 0, xJ, 0, 0, nJ, 1, 0, 0, fJ, 0, UJ), XJ && UJ.multiplyToRef(rJ, UJ), UJ._updateIdentityStatus(!1), UJ
      }
      static PerspectiveFovReverseLHToRef(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const qJ = 1 / Math.tan(.5 * JJ),
          jJ = eJ ? qJ / cJ : qJ,
          YJ = eJ ? qJ : qJ * cJ,
          hJ = Math.tan(AJ);
        return GJ.FromValuesToRef(jJ, 0, 0, 0, 0, YJ, 0, hJ, 0, 0, -ZJ, 1, 0, 0, 1, 0, UJ), XJ && UJ.multiplyToRef(rJ, UJ), UJ._updateIdentityStatus(!1), UJ
      }
      static PerspectiveFovRH(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          XJ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const AJ = new GJ;
        return GJ.PerspectiveFovRHToRef(JJ, cJ, ZJ, FJ, AJ, !0, UJ, eJ, XJ), AJ
      }
      static PerspectiveFovRHToRef(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qJ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const jJ = ZJ,
          YJ = FJ,
          hJ = 1 / Math.tan(.5 * JJ),
          DJ = eJ ? hJ / cJ : hJ,
          sJ = eJ ? hJ : hJ * cJ,
          nJ = qJ && 0 === jJ ? 1 : 0 !== YJ ? -(YJ + jJ) / (YJ - jJ) : -1,
          fJ = qJ && 0 === jJ ? 2 * YJ : 0 !== YJ ? -2 * YJ * jJ / (YJ - jJ) : -2 * jJ,
          xJ = Math.tan(AJ);
        return GJ.FromValuesToRef(DJ, 0, 0, 0, 0, sJ, 0, xJ, 0, 0, nJ, -1, 0, 0, fJ, 0, UJ), XJ && UJ.multiplyToRef(rJ, UJ), UJ._updateIdentityStatus(!1), UJ
      }
      static PerspectiveFovReverseRHToRef(JJ, cJ, ZJ, FJ, UJ) {
        let eJ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          XJ = arguments.length > 6 ? arguments[6] : void 0,
          AJ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const qJ = 1 / Math.tan(.5 * JJ),
          jJ = eJ ? qJ / cJ : qJ,
          YJ = eJ ? qJ : qJ * cJ,
          hJ = Math.tan(AJ);
        return GJ.FromValuesToRef(jJ, 0, 0, 0, 0, YJ, 0, hJ, 0, 0, -ZJ, -1, 0, 0, -1, 0, UJ), XJ && UJ.multiplyToRef(rJ, UJ), UJ._updateIdentityStatus(!1), UJ
      }
      static GetFinalMatrix(JJ, cJ, ZJ, FJ, UJ, eJ) {
        const XJ = JJ.width,
          AJ = JJ.height,
          qJ = JJ.x,
          jJ = JJ.y,
          YJ = GJ.FromValues(XJ / 2, 0, 0, 0, 0, -AJ / 2, 0, 0, 0, 0, eJ - UJ, 0, qJ + XJ / 2, AJ / 2 + jJ, UJ, 1),
          hJ = new GJ;
        return cJ.multiplyToRef(ZJ, hJ), hJ.multiplyToRef(FJ, hJ), hJ.multiplyToRef(YJ, hJ)
      }
      static GetAsMatrix2x2(JJ) {
        const cJ = JJ.m,
          ZJ = [cJ[0], cJ[1], cJ[4], cJ[5]];
        return eJ.e.MatrixUse64Bits ? ZJ : new Float32Array(ZJ)
      }
      static GetAsMatrix3x3(JJ) {
        const cJ = JJ.m,
          ZJ = [cJ[0], cJ[1], cJ[2], cJ[4], cJ[5], cJ[6], cJ[8], cJ[9], cJ[10]];
        return eJ.e.MatrixUse64Bits ? ZJ : new Float32Array(ZJ)
      }
      static Transpose(JJ) {
        const cJ = new GJ;
        return GJ.TransposeToRef(JJ, cJ), cJ
      }
      static TransposeToRef(JJ, cJ) {
        const ZJ = JJ.m,
          FJ = ZJ[0],
          UJ = ZJ[4],
          eJ = ZJ[8],
          XJ = ZJ[12],
          AJ = ZJ[1],
          qJ = ZJ[5],
          jJ = ZJ[9],
          YJ = ZJ[13],
          hJ = ZJ[2],
          DJ = ZJ[6],
          sJ = ZJ[10],
          nJ = ZJ[14],
          GJ = ZJ[3],
          fJ = ZJ[7],
          xJ = ZJ[11],
          rJ = ZJ[15],
          vJ = cJ._m;
        return vJ[0] = FJ, vJ[1] = UJ, vJ[2] = eJ, vJ[3] = XJ, vJ[4] = AJ, vJ[5] = qJ, vJ[6] = jJ, vJ[7] = YJ, vJ[8] = hJ, vJ[9] = DJ, vJ[10] = sJ, vJ[11] = nJ, vJ[12] = GJ, vJ[13] = fJ, vJ[14] = xJ, vJ[15] = rJ, cJ.markAsUpdated(), cJ._updateIdentityStatus(JJ._isIdentity, JJ._isIdentityDirty), cJ
      }
      static Reflection(JJ) {
        const cJ = new GJ;
        return GJ.ReflectionToRef(JJ, cJ), cJ
      }
      static ReflectionToRef(JJ, cJ) {
        JJ.normalize();
        const ZJ = JJ.normal.x,
          FJ = JJ.normal.y,
          UJ = JJ.normal.z,
          eJ = -2 * ZJ,
          XJ = -2 * FJ,
          AJ = -2 * UJ;
        return GJ.FromValuesToRef(eJ * ZJ + 1, XJ * ZJ, AJ * ZJ, 0, eJ * FJ, XJ * FJ + 1, AJ * FJ, 0, eJ * UJ, XJ * UJ, AJ * UJ + 1, 0, eJ * JJ.d, XJ * JJ.d, AJ * JJ.d, 1, cJ), cJ
      }
      static FromXYZAxesToRef(JJ, cJ, ZJ, FJ) {
        return GJ.FromValuesToRef(JJ._x, JJ._y, JJ._z, 0, cJ._x, cJ._y, cJ._z, 0, ZJ._x, ZJ._y, ZJ._z, 0, 0, 0, 0, 1, FJ), FJ
      }
      static FromQuaternionToRef(JJ, cJ) {
        const ZJ = JJ._x * JJ._x,
          FJ = JJ._y * JJ._y,
          UJ = JJ._z * JJ._z,
          eJ = JJ._x * JJ._y,
          XJ = JJ._z * JJ._w,
          AJ = JJ._z * JJ._x,
          qJ = JJ._y * JJ._w,
          jJ = JJ._y * JJ._z,
          YJ = JJ._x * JJ._w;
        return cJ._m[0] = 1 - 2 * (FJ + UJ), cJ._m[1] = 2 * (eJ + XJ), cJ._m[2] = 2 * (AJ - qJ), cJ._m[3] = 0, cJ._m[4] = 2 * (eJ - XJ), cJ._m[5] = 1 - 2 * (UJ + ZJ), cJ._m[6] = 2 * (jJ + YJ), cJ._m[7] = 0, cJ._m[8] = 2 * (AJ + qJ), cJ._m[9] = 2 * (jJ - YJ), cJ._m[10] = 1 - 2 * (FJ + ZJ), cJ._m[11] = 0, cJ._m[12] = 0, cJ._m[13] = 0, cJ._m[14] = 0, cJ._m[15] = 1, cJ.markAsUpdated(), cJ
      }
    }
    GJ._IdentityReadOnly = GJ.Identity();
    class fJ {}
    fJ.Pn = (0, UJ.h)(11, DJ.Zero), fJ.Matrix = (0, UJ.h)(2, GJ.Identity), fJ.Quaternion = (0, UJ.h)(3, nJ.Zero);
    class xJ {}
    xJ.Vector2 = (0, UJ.h)(3, hJ.Zero), xJ.Pn = (0, UJ.h)(13, DJ.Zero), xJ.Vector4 = (0, UJ.h)(3, sJ.Zero), xJ.Quaternion = (0, UJ.h)(3, nJ.Zero), xJ.Matrix = (0, UJ.h)(8, GJ.Identity);
    const rJ = GJ.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let vJ = !1;

    function mJ() {
      vJ || (vJ = !0, Object.defineProperties(hJ.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(DJ.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(sJ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(nJ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(GJ.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, jJ.f)("BABYLON.Vector2", hJ), (0, jJ.f)("BABYLON.Vector3", DJ), (0, jJ.f)("BABYLON.Vector4", sJ), (0, jJ.f)("BABYLON.Matrix", GJ))
    }
  },
  36200: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    const FJ = "undefined" !== typeof WeakRef;
    class UJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(JJ, cJ, ZJ, FJ)
      }
      initialize(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = JJ, this.skipNextObservers = cJ, this.target = ZJ, this.currentTarget = FJ, this
      }
    }
    class eJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = JJ, this.mask = cJ, this.scope = ZJ, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(JJ)
      }
    }
    class XJ {
      static FromPromise(JJ, cJ) {
        const ZJ = new XJ;
        return JJ.then((JJ => {
          ZJ.notifyObservers(JJ)
        })).catch((JJ => {
          if (!cJ) throw JJ;
          cJ.notifyObservers(JJ)
        })), ZJ
      }
      get observers() {
        return this._observers
      }
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = cJ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new UJ(0), JJ && (this._onObserverAdded = JJ)
      }
      add(JJ) {
        let cJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ZJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!JJ) return null;
        const UJ = new eJ(JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        UJ.unregisterOnNextCall = ZJ, cJ ? this._observers.unshift(UJ) : this._observers.push(UJ), this._onObserverAdded && this._onObserverAdded(UJ), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(UJ, this._lastNotifiedValue);
        const XJ = FJ ? new WeakRef(this) : {
          deref: () => this
        };
        return UJ._remove = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const cJ = XJ.deref();
          cJ && (JJ ? cJ.remove(UJ) : cJ._remove(UJ))
        }, UJ
      }
      addOnce(JJ) {
        return this.add(JJ, void 0, void 0, void 0, !0)
      }
      remove(JJ) {
        if (!JJ) return !1;
        JJ._remove = null;
        return -1 !== this._observers.indexOf(JJ) && (this._deferUnregister(JJ), !0)
      }
      removeCallback(JJ, cJ) {
        for (let ZJ = 0; ZJ < this._observers.length; ZJ++) {
          const FJ = this._observers[ZJ];
          if (!FJ._willBeUnregistered && (FJ.callback === JJ && (!cJ || cJ === FJ.scope))) return this._deferUnregister(FJ), !0
        }
        return !1
      }
      _deferUnregister(JJ) {
        JJ._willBeUnregistered || (this._numObserversMarkedAsDeleted++, JJ.unregisterOnNextCall = !1, JJ._willBeUnregistered = !0, setTimeout((() => {
          this._remove(JJ)
        }), 0))
      }
      _remove(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!JJ) return !1;
        const ZJ = this._observers.indexOf(JJ);
        return -1 !== ZJ && (cJ && this._numObserversMarkedAsDeleted--, this._observers.splice(ZJ, 1), !0)
      }
      makeObserverTopPriority(JJ) {
        this._remove(JJ, !1), this._observers.unshift(JJ)
      }
      makeObserverBottomPriority(JJ) {
        this._remove(JJ, !1), this._observers.push(JJ)
      }
      notifyObservers(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = JJ), !this._observers.length) return !0;
        const eJ = this._eventState;
        eJ.mask = cJ, eJ.target = ZJ, eJ.currentTarget = FJ, eJ.skipNextObservers = !1, eJ.lastReturnValue = JJ, eJ.userInfo = UJ;
        for (const XJ of this._observers)
          if (!XJ._willBeUnregistered && (XJ.mask & cJ && (XJ.unregisterOnNextCall && this._deferUnregister(XJ), XJ.scope ? eJ.lastReturnValue = XJ.callback.apply(XJ.scope, [JJ, eJ]) : eJ.lastReturnValue = XJ.callback(JJ, eJ)), eJ.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = cJ), JJ._willBeUnregistered) return;
        const FJ = this._eventState;
        FJ.mask = ZJ, FJ.skipNextObservers = !1, JJ.unregisterOnNextCall && this._deferUnregister(JJ), JJ.callback(cJ, FJ)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const JJ = this._observers.pop();
          JJ && (JJ._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const JJ = new XJ;
        return JJ._observers = this._observers.slice(0), JJ
      }
      hasSpecificMask() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const cJ of this._observers)
          if (cJ.mask & JJ || cJ.mask === JJ) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);