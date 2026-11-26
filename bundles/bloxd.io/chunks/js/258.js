export const id = 258;
export const ids = [258];
export const modules = {
  37989: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(37997);
    class rH {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    rH.Instances = [], rH.OnEnginesDisposedObservable = new AH.d, rH._LastCreatedScene = null, rH.UseFallbackTexture = !0, rH.FallbackTexture = ""
  },
  37982: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      static SetMatrixPrecision(HH) {
        if (AH.MatrixTrackPrecisionChange = !1, HH && !AH.MatrixUse64Bits && AH.MatrixTrackedMatrices)
          for (let BH = 0; BH < AH.MatrixTrackedMatrices.length; ++BH) {
            const HH = AH.MatrixTrackedMatrices[BH],
              LH = HH._m;
            HH._m = new Array(16);
            for (let BH = 0; BH < 16; ++BH) HH._m[BH] = LH[BH]
          }
        AH.MatrixUse64Bits = HH, AH.MatrixCurrentType = AH.MatrixUse64Bits ? Array : Float32Array, AH.MatrixTrackedMatrices = null
      }
    }
    AH.MatrixUse64Bits = !1, AH.MatrixTrackPrecisionChange = !0, AH.MatrixCurrentType = Float32Array, AH.MatrixTrackedMatrices = []
  },
  38008: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => tH,
      d: () => CH,
      h: () => zH,
      l: () => AH,
      p: () => SH,
      r: () => hH
    });
    class AH {}

    function rH(HH) {
      HH.updateFlag = AH._UpdateFlagSeed++
    }

    function SH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const rH = HH.xrH(),
        SH = BH.xrH(),
        hH = rH[0],
        tH = rH[1],
        zH = rH[2],
        CH = rH[3],
        EH = rH[4],
        XH = rH[5],
        GH = rH[6],
        YH = rH[7],
        uH = rH[8],
        QH = rH[9],
        WH = rH[10],
        MH = rH[11],
        xH = rH[12],
        vH = rH[13],
        PH = rH[14],
        TH = rH[15],
        UH = SH[0],
        VH = SH[1],
        OH = SH[2],
        bH = SH[3],
        kH = SH[4],
        mH = SH[5],
        oH = SH[6],
        IH = SH[7],
        fH = SH[8],
        lH = SH[9],
        KH = SH[10],
        cH = SH[11],
        eH = SH[12],
        qH = SH[13],
        gH = SH[14],
        NH = SH[15];
      LH[AH] = hH * UH + tH * kH + zH * fH + CH * eH, LH[AH + 1] = hH * VH + tH * mH + zH * lH + CH * qH, LH[AH + 2] = hH * OH + tH * oH + zH * KH + CH * gH, LH[AH + 3] = hH * bH + tH * IH + zH * cH + CH * NH, LH[AH + 4] = EH * UH + XH * kH + GH * fH + YH * eH, LH[AH + 5] = EH * VH + XH * mH + GH * lH + YH * qH, LH[AH + 6] = EH * OH + XH * oH + GH * KH + YH * gH, LH[AH + 7] = EH * bH + XH * IH + GH * cH + YH * NH, LH[AH + 8] = uH * UH + QH * kH + WH * fH + MH * eH, LH[AH + 9] = uH * VH + QH * mH + WH * lH + MH * qH, LH[AH + 10] = uH * OH + QH * oH + WH * KH + MH * gH, LH[AH + 11] = uH * bH + QH * IH + WH * cH + MH * NH, LH[AH + 12] = xH * UH + vH * kH + PH * fH + TH * eH, LH[AH + 13] = xH * VH + vH * mH + PH * lH + TH * qH, LH[AH + 14] = xH * OH + vH * oH + PH * KH + TH * gH, LH[AH + 15] = xH * bH + vH * IH + PH * cH + TH * NH
    }

    function hH(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      SH(HH, BH, LH.xrH(), AH), rH(LH)
    }

    function tH(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const AH = HH.xrH();
      BH[LH] = AH[0], BH[LH + 1] = AH[1], BH[LH + 2] = AH[2], BH[LH + 3] = AH[3], BH[LH + 4] = AH[4], BH[LH + 5] = AH[5], BH[LH + 6] = AH[6], BH[LH + 7] = AH[7], BH[LH + 8] = AH[8], BH[LH + 9] = AH[9], BH[LH + 10] = AH[10], BH[LH + 11] = AH[11], BH[LH + 12] = AH[12], BH[LH + 13] = AH[13], BH[LH + 14] = AH[14], BH[LH + 15] = AH[15]
    }

    function zH(HH, BH) {
      const LH = CH(HH, BH.xrH());
      return LH && rH(BH), LH
    }

    function CH(HH, BH) {
      const LH = HH.xrH(),
        AH = LH[0],
        rH = LH[1],
        SH = LH[2],
        hH = LH[3],
        tH = LH[4],
        zH = LH[5],
        CH = LH[6],
        EH = LH[7],
        XH = LH[8],
        GH = LH[9],
        YH = LH[10],
        uH = LH[11],
        QH = LH[12],
        WH = LH[13],
        MH = LH[14],
        xH = LH[15],
        vH = YH * xH - MH * uH,
        PH = GH * xH - WH * uH,
        TH = GH * MH - WH * YH,
        UH = XH * xH - QH * uH,
        VH = XH * MH - YH * QH,
        OH = XH * WH - QH * GH,
        bH = +(zH * vH - CH * PH + EH * TH),
        kH = -(tH * vH - CH * UH + EH * VH),
        mH = +(tH * PH - zH * UH + EH * OH),
        oH = -(tH * TH - zH * VH + CH * OH),
        IH = AH * bH + rH * kH + SH * mH + hH * oH;
      if (0 === IH) return !1;
      const fH = 1 / IH,
        lH = CH * xH - MH * EH,
        KH = zH * xH - WH * EH,
        cH = zH * MH - WH * CH,
        eH = tH * xH - QH * EH,
        qH = tH * MH - QH * CH,
        gH = tH * WH - QH * zH,
        NH = CH * uH - YH * EH,
        RH = zH * uH - GH * EH,
        jH = zH * YH - GH * CH,
        nH = tH * uH - XH * EH,
        FH = tH * YH - XH * CH,
        DH = tH * GH - XH * zH,
        wH = -(rH * vH - SH * PH + hH * TH),
        ZH = +(AH * vH - SH * UH + hH * VH),
        dH = -(AH * PH - rH * UH + hH * OH),
        aH = +(AH * TH - rH * VH + SH * OH),
        sH = +(rH * lH - SH * KH + hH * cH),
        JH = -(AH * lH - SH * eH + hH * qH),
        iH = +(AH * KH - rH * eH + hH * gH),
        pH = -(AH * cH - rH * qH + SH * gH),
        yH = -(rH * NH - SH * RH + hH * jH),
        HB = +(AH * NH - SH * nH + hH * FH),
        BB = -(AH * RH - rH * nH + hH * DH),
        LB = +(AH * jH - rH * FH + SH * DH);
      return BH[0] = bH * fH, BH[1] = wH * fH, BH[2] = sH * fH, BH[3] = yH * fH, BH[4] = kH * fH, BH[5] = ZH * fH, BH[6] = JH * fH, BH[7] = HB * fH, BH[8] = mH * fH, BH[9] = dH * fH, BH[10] = iH * fH, BH[11] = BB * fH, BH[12] = oH * fH, BH[13] = aH * fH, BH[14] = pH * fH, BH[15] = LB * fH, !0
    }
    AH._UpdateFlagSeed = 0
  },
  37963: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => QH,
      f: () => uH,
      h: () => PH,
      l: () => MH,
      n: () => XH,
      o: () => GH,
      q: () => YH
    });
    var AH = LH(37972),
      rH = LH(37974),
      SH = LH(37982),
      hH = LH(37989),
      tH = LH(38002),
      zH = LH(38008),
      CH = LH(38012);
    const EH = HH => parseInt(HH.toString().replace(/\W/g, ""));
    class XH {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = HH, this.y = BH
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let HH = EH(this.x);
        return HH = 397 * HH ^ EH(this.y), HH
      }
      toArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[BH] = this.x, HH[BH + 1] = this.y, this
      }
      SX(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return XH.FromArrayToRef(HH, BH, this), this
      }
      xrH() {
        return [this.x, this.y]
      }
      Tm(HH) {
        return this.x = HH.x, this.y = HH.y, this
      }
      SBH(HH, BH) {
        return this.x = HH, this.y = BH, this
      }
      set(HH, BH) {
        return this.SBH(HH, BH)
      }
      IHH(HH) {
        return this.SBH(HH, HH)
      }
      add(HH) {
        return new XH(this.x + HH.x, this.y + HH.y)
      }
      addToRef(HH, BH) {
        return BH.x = this.x + HH.x, BH.y = this.y + HH.y, BH
      }
      addInPlace(HH) {
        return this.x += HH.x, this.y += HH.y, this
      }
      addInPlaceFromFloats(HH, BH) {
        return this.x += HH, this.y += BH, this
      }
      addVector3(HH) {
        return new XH(this.x + HH.x, this.y + HH.y)
      }
      subtract(HH) {
        return new XH(this.x - HH.x, this.y - HH.y)
      }
      subtractToRef(HH, BH) {
        return BH.x = this.x - HH.x, BH.y = this.y - HH.y, BH
      }
      grH(HH) {
        return this.x -= HH.x, this.y -= HH.y, this
      }
      multiplyInPlace(HH) {
        return this.x *= HH.x, this.y *= HH.y, this
      }
      multiply(HH) {
        return new XH(this.x * HH.x, this.y * HH.y)
      }
      multiplyToRef(HH, BH) {
        return BH.x = this.x * HH.x, BH.y = this.y * HH.y, BH
      }
      multiplyByFloats(HH, BH) {
        return new XH(this.x * HH, this.y * BH)
      }
      divide(HH) {
        return new XH(this.x / HH.x, this.y / HH.y)
      }
      divideToRef(HH, BH) {
        return BH.x = this.x / HH.x, BH.y = this.y / HH.y, BH
      }
      divideInPlace(HH) {
        return this.x = this.x / HH.x, this.y = this.y / HH.y, this
      }
      minimizeInPlace(HH) {
        return this.minimizeInPlaceFromFloats(HH.x, HH.y)
      }
      maximizeInPlace(HH) {
        return this.maximizeInPlaceFromFloats(HH.x, HH.y)
      }
      minimizeInPlaceFromFloats(HH, BH) {
        return this.x = Math.min(HH, this.x), this.y = Math.min(BH, this.y), this
      }
      maximizeInPlaceFromFloats(HH, BH) {
        return this.x = Math.max(HH, this.x), this.y = Math.max(BH, this.y), this
      }
      subtractFromFloats(HH, BH) {
        return new XH(this.x - HH, this.y - BH)
      }
      subtractFromFloatsToRef(HH, BH, LH) {
        return LH.x = this.x - HH, LH.y = this.y - BH, LH
      }
      du() {
        return new XH(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(HH) {
        return HH.x = -this.x, HH.y = -this.y, HH
      }
      scaleInPlace(HH) {
        return this.x *= HH, this.y *= HH, this
      }
      scale(HH) {
        return new XH(this.x * HH, this.y * HH)
      }
      scaleToRef(HH, BH) {
        return BH.x = this.x * HH, BH.y = this.y * HH, BH
      }
      scaleAndAddToRef(HH, BH) {
        return BH.x += this.x * HH, BH.y += this.y * HH, BH
      }
      equals(HH) {
        return HH && this.x === HH.x && this.y === HH.y
      }
      equalsWithEpsilon(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH.d;
        return HH && (0, tH.WithinEpsilon)(this.x, HH.x, BH) && (0, tH.WithinEpsilon)(this.y, HH.y, BH)
      }
      dtH(HH, BH) {
        return this.x === HH && this.y === BH
      }
      floor() {
        return new XH(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(HH) {
        return HH.x = Math.floor(this.x), HH.y = Math.floor(this.y), HH
      }
      fract() {
        return new XH(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(HH) {
        return HH.x = this.x - Math.floor(this.x), HH.y = this.y - Math.floor(this.y), HH
      }
      rotate(HH) {
        return this.rotateToRef(HH, new XH)
      }
      rotateToRef(HH, BH) {
        const LH = Math.cos(HH),
          AH = Math.sin(HH);
        return BH.x = LH * this.x - AH * this.y, BH.y = AH * this.x + LH * this.y, BH
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
      normalizeFromLength(HH) {
        return 0 === HH || 1 === HH ? this : this.scaleInPlace(1 / HH)
      }
      normalizeToNew() {
        const HH = new XH;
        return this.normalizeToRef(HH), HH
      }
      normalizeToRef(HH) {
        const BH = this.length();
        return 0 === BH || 1 === BH ? (HH.x = this.x, HH.y = this.y, HH) : this.scaleToRef(1 / BH, HH)
      }
      clone() {
        return new XH(this.x, this.y)
      }
      dot(HH) {
        return this.x * HH.x + this.y * HH.y
      }
      static Zero() {
        return new XH(0, 0)
      }
      static One() {
        return new XH(1, 1)
      }
      static Random() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new XH((0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH))
      }
      static RandomToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).SBH((0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH))
      }
      static get ZeroReadOnly() {
        return XH._ZeroReadOnly
      }
      static FromArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new XH(HH[BH], HH[BH + 1])
      }
      static FromArrayToRef(HH, BH, LH) {
        return LH.x = HH[BH], LH.y = HH[BH + 1], LH
      }
      static FromFloatsToRef(HH, BH, LH) {
        return LH.SBH(HH, BH), LH
      }
      static CatmullRom(HH, BH, LH, AH, rH) {
        const SH = rH * rH,
          hH = rH * SH,
          tH = .5 * (2 * BH.x + (-HH.x + LH.x) * rH + (2 * HH.x - 5 * BH.x + 4 * LH.x - AH.x) * SH + (-HH.x + 3 * BH.x - 3 * LH.x + AH.x) * hH),
          zH = .5 * (2 * BH.y + (-HH.y + LH.y) * rH + (2 * HH.y - 5 * BH.y + 4 * LH.y - AH.y) * SH + (-HH.y + 3 * BH.y - 3 * LH.y + AH.y) * hH);
        return new XH(tH, zH)
      }
      static ClampToRef(HH, BH, LH, AH) {
        return AH.x = (0, tH.Clamp)(HH.x, BH.x, LH.x), AH.y = (0, tH.Clamp)(HH.y, BH.y, LH.y), AH
      }
      static Clamp(HH, BH, LH) {
        const AH = (0, tH.Clamp)(HH.x, BH.x, LH.x),
          rH = (0, tH.Clamp)(HH.y, BH.y, LH.y);
        return new XH(AH, rH)
      }
      static Hermite(HH, BH, LH, AH, rH) {
        const SH = rH * rH,
          hH = rH * SH,
          tH = 2 * hH - 3 * SH + 1,
          zH = -2 * hH + 3 * SH,
          CH = hH - 2 * SH + rH,
          EH = hH - SH,
          GH = HH.x * tH + LH.x * zH + BH.x * CH + AH.x * EH,
          YH = HH.y * tH + LH.y * zH + BH.y * CH + AH.y * EH;
        return new XH(GH, YH)
      }
      static Hermite1stDerivative(HH, BH, LH, AH, rH) {
        return this.Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, new XH)
      }
      static Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH) {
        const hH = rH * rH;
        return SH.x = 6 * (hH - rH) * HH.x + (3 * hH - 4 * rH + 1) * BH.x + 6 * (-hH + rH) * LH.x + (3 * hH - 2 * rH) * AH.x, SH.y = 6 * (hH - rH) * HH.y + (3 * hH - 4 * rH + 1) * BH.y + 6 * (-hH + rH) * LH.y + (3 * hH - 2 * rH) * AH.y, SH
      }
      static Lerp(HH, BH, LH) {
        return XH.LerpToRef(HH, BH, LH, new XH)
      }
      static LerpToRef(HH, BH, LH, AH) {
        return AH.x = HH.x + (BH.x - HH.x) * LH, AH.y = HH.y + (BH.y - HH.y) * LH, AH
      }
      static Dot(HH, BH) {
        return HH.x * BH.x + HH.y * BH.y
      }
      static Normalize(HH) {
        return XH.NormalizeToRef(HH, new XH)
      }
      static NormalizeToRef(HH, BH) {
        return HH.normalizeToRef(BH), BH
      }
      static Minimize(HH, BH) {
        const LH = HH.x < BH.x ? HH.x : BH.x,
          AH = HH.y < BH.y ? HH.y : BH.y;
        return new XH(LH, AH)
      }
      static Maximize(HH, BH) {
        const LH = HH.x > BH.x ? HH.x : BH.x,
          AH = HH.y > BH.y ? HH.y : BH.y;
        return new XH(LH, AH)
      }
      static Transform(HH, BH) {
        return XH.TransformToRef(HH, BH, new XH)
      }
      static TransformToRef(HH, BH, LH) {
        const AH = BH.m,
          rH = HH.x * AH[0] + HH.y * AH[4] + AH[12],
          SH = HH.x * AH[1] + HH.y * AH[5] + AH[13];
        return LH.x = rH, LH.y = SH, LH
      }
      static PointInTriangle(HH, BH, LH, AH) {
        const rH = .5 * (-LH.y * AH.x + BH.y * (-LH.x + AH.x) + BH.x * (LH.y - AH.y) + LH.x * AH.y),
          SH = rH < 0 ? -1 : 1,
          hH = (BH.y * AH.x - BH.x * AH.y + (AH.y - BH.y) * HH.x + (BH.x - AH.x) * HH.y) * SH,
          tH = (BH.x * LH.y - BH.y * LH.x + (BH.y - LH.y) * HH.x + (LH.x - BH.x) * HH.y) * SH;
        return hH > 0 && tH > 0 && hH + tH < 2 * rH * SH
      }
      static Distance(HH, BH) {
        return Math.sqrt(XH.DistanceSquared(HH, BH))
      }
      static DistanceSquared(HH, BH) {
        const LH = HH.x - BH.x,
          AH = HH.y - BH.y;
        return LH * LH + AH * AH
      }
      static Center(HH, BH) {
        return XH.CenterToRef(HH, BH, new XH)
      }
      static CenterToRef(HH, BH, LH) {
        return LH.SBH((HH.x + BH.x) / 2, (HH.y + BH.y) / 2)
      }
      static DistanceOfPointFromSegment(HH, BH, LH) {
        const AH = XH.DistanceSquared(BH, LH);
        if (0 === AH) return XH.Distance(HH, BH);
        const rH = LH.subtract(BH),
          SH = Math.max(0, Math.min(1, XH.Dot(HH.subtract(BH), rH) / AH)),
          hH = BH.add(rH.multiplyByFloats(SH, SH));
        return XH.Distance(HH, hH)
      }
    }
    XH._V8PerformanceHack = new XH(.5, .5), XH._ZeroReadOnly = XH.Zero();
    class GH {
      get x() {
        return this._x
      }
      set x(HH) {
        this._x = HH, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(HH) {
        this._y = HH, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(HH) {
        this._z = HH, this._isDirty = !0
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = HH, this._y = BH, this._z = LH
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "lu"
      }
      getHashCode() {
        let HH = EH(this._x);
        return HH = 397 * HH ^ EH(this._y), HH = 397 * HH ^ EH(this._z), HH
      }
      xrH() {
        return [this._x, this._y, this._z]
      }
      toArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[BH] = this._x, HH[BH + 1] = this._y, HH[BH + 2] = this._z, this
      }
      SX(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GH.FromArrayToRef(HH, BH, this), this
      }
      toQuaternion() {
        return uH.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(HH) {
        return this._x += HH._x, this._y += HH._y, this._z += HH._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(HH, BH, LH) {
        return this._x += HH, this._y += BH, this._z += LH, this._isDirty = !0, this
      }
      add(HH) {
        return new GH(this._x + HH._x, this._y + HH._y, this._z + HH._z)
      }
      addToRef(HH, BH) {
        return BH._x = this._x + HH._x, BH._y = this._y + HH._y, BH._z = this._z + HH._z, BH._isDirty = !0, BH
      }
      grH(HH) {
        return this._x -= HH._x, this._y -= HH._y, this._z -= HH._z, this._isDirty = !0, this
      }
      subtract(HH) {
        return new GH(this._x - HH._x, this._y - HH._y, this._z - HH._z)
      }
      subtractToRef(HH, BH) {
        return this.subtractFromFloatsToRef(HH._x, HH._y, HH._z, BH)
      }
      subtractFromFloats(HH, BH, LH) {
        return new GH(this._x - HH, this._y - BH, this._z - LH)
      }
      subtractFromFloatsToRef(HH, BH, LH, AH) {
        return AH._x = this._x - HH, AH._y = this._y - BH, AH._z = this._z - LH, AH._isDirty = !0, AH
      }
      du() {
        return new GH(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(HH) {
        return HH._x = -1 * this._x, HH._y = -1 * this._y, HH._z = -1 * this._z, HH._isDirty = !0, HH
      }
      scaleInPlace(HH) {
        return this._x *= HH, this._y *= HH, this._z *= HH, this._isDirty = !0, this
      }
      scale(HH) {
        return new GH(this._x * HH, this._y * HH, this._z * HH)
      }
      scaleToRef(HH, BH) {
        return BH._x = this._x * HH, BH._y = this._y * HH, BH._z = this._z * HH, BH._isDirty = !0, BH
      }
      getNormalToRef(HH) {
        const BH = this.length();
        let LH = Math.acos(this._y / BH);
        const AH = Math.atan2(this._z, this._x);
        LH > Math.PI / 2 ? LH -= Math.PI / 2 : LH += Math.PI / 2;
        const rH = BH * Math.sin(LH) * Math.cos(AH),
          SH = BH * Math.cos(LH),
          hH = BH * Math.sin(LH) * Math.sin(AH);
        return HH.set(rH, SH, hH), HH
      }
      applyRotationQuaternionToRef(HH, BH) {
        const LH = this._x,
          AH = this._y,
          rH = this._z,
          SH = HH._x,
          hH = HH._y,
          tH = HH._z,
          zH = HH._w,
          CH = 2 * (hH * rH - tH * AH),
          EH = 2 * (tH * LH - SH * rH),
          XH = 2 * (SH * AH - hH * LH);
        return BH._x = LH + zH * CH + hH * XH - tH * EH, BH._y = AH + zH * EH + tH * CH - SH * XH, BH._z = rH + zH * XH + SH * EH - hH * CH, BH._isDirty = !0, BH
      }
      applyRotationQuaternionInPlace(HH) {
        return this.applyRotationQuaternionToRef(HH, this)
      }
      applyRotationQuaternion(HH) {
        return this.applyRotationQuaternionToRef(HH, new GH)
      }
      scaleAndAddToRef(HH, BH) {
        return BH._x += this._x * HH, BH._y += this._y * HH, BH._z += this._z * HH, BH._isDirty = !0, BH
      }
      projectOnPlane(HH, BH) {
        return this.projectOnPlaneToRef(HH, BH, new GH)
      }
      projectOnPlaneToRef(HH, BH, LH) {
        const AH = HH.normal,
          rH = HH.d,
          SH = WH.lu[0];
        this.subtractToRef(BH, SH), SH.normalize();
        const hH = GH.Dot(SH, AH);
        if (Math.abs(hH) < 1e-10) LH.IHH(1 / 0);
        else {
          const HH = -(GH.Dot(BH, AH) + rH) / hH,
            tH = SH.scaleInPlace(HH);
          BH.addToRef(tH, LH)
        }
        return LH
      }
      equals(HH) {
        return HH && this._x === HH._x && this._y === HH._y && this._z === HH._z
      }
      equalsWithEpsilon(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH.d;
        return HH && (0, tH.WithinEpsilon)(this._x, HH._x, BH) && (0, tH.WithinEpsilon)(this._y, HH._y, BH) && (0, tH.WithinEpsilon)(this._z, HH._z, BH)
      }
      dtH(HH, BH, LH) {
        return this._x === HH && this._y === BH && this._z === LH
      }
      multiplyInPlace(HH) {
        return this._x *= HH._x, this._y *= HH._y, this._z *= HH._z, this._isDirty = !0, this
      }
      multiply(HH) {
        return this.multiplyByFloats(HH._x, HH._y, HH._z)
      }
      multiplyToRef(HH, BH) {
        return BH._x = this._x * HH._x, BH._y = this._y * HH._y, BH._z = this._z * HH._z, BH._isDirty = !0, BH
      }
      multiplyByFloats(HH, BH, LH) {
        return new GH(this._x * HH, this._y * BH, this._z * LH)
      }
      divide(HH) {
        return new GH(this._x / HH._x, this._y / HH._y, this._z / HH._z)
      }
      divideToRef(HH, BH) {
        return BH._x = this._x / HH._x, BH._y = this._y / HH._y, BH._z = this._z / HH._z, BH._isDirty = !0, BH
      }
      divideInPlace(HH) {
        return this._x = this._x / HH._x, this._y = this._y / HH._y, this._z = this._z / HH._z, this._isDirty = !0, this
      }
      minimizeInPlace(HH) {
        return this.minimizeInPlaceFromFloats(HH._x, HH._y, HH._z)
      }
      maximizeInPlace(HH) {
        return this.maximizeInPlaceFromFloats(HH._x, HH._y, HH._z)
      }
      minimizeInPlaceFromFloats(HH, BH, LH) {
        return HH < this._x && (this.x = HH), BH < this._y && (this.y = BH), LH < this._z && (this.z = LH), this
      }
      maximizeInPlaceFromFloats(HH, BH, LH) {
        return HH > this._x && (this.x = HH), BH > this._y && (this.y = BH), LH > this._z && (this.z = LH), this
      }
      isNonUniformWithinEpsilon(HH) {
        const BH = Math.abs(this._x),
          LH = Math.abs(this._y);
        if (!(0, tH.WithinEpsilon)(BH, LH, HH)) return !0;
        const AH = Math.abs(this._z);
        return !(0, tH.WithinEpsilon)(BH, AH, HH) || !(0, tH.WithinEpsilon)(LH, AH, HH)
      }
      get isNonUniform() {
        const HH = Math.abs(this._x);
        if (HH !== Math.abs(this._y)) return !0;
        return HH !== Math.abs(this._z)
      }
      floorToRef(HH) {
        return HH._x = Math.floor(this._x), HH._y = Math.floor(this._y), HH._z = Math.floor(this._z), HH._isDirty = !0, HH
      }
      floor() {
        return new GH(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(HH) {
        return HH._x = this._x - Math.floor(this._x), HH._y = this._y - Math.floor(this._y), HH._z = this._z - Math.floor(this._z), HH._isDirty = !0, HH
      }
      fract() {
        return new GH(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(HH) {
        if ("xyz" === (HH = HH.toLowerCase())) return this;
        const BH = WH.lu[0].Tm(this);
        return this.x = BH[HH[0]], this.y = BH[HH[1]], this.z = BH[HH[2]], this
      }
      rotateByQuaternionToRef(HH, BH) {
        return HH.toRotationMatrix(WH.Matrix[0]), GH.TransformCoordinatesToRef(this, WH.Matrix[0], BH), BH
      }
      rotateByQuaternionAroundPointToRef(HH, BH, LH) {
        return this.subtractToRef(BH, WH.lu[0]), WH.lu[0].rotateByQuaternionToRef(HH, WH.lu[0]), BH.addToRef(WH.lu[0], LH), LH
      }
      cross(HH) {
        return GH.CrossToRef(this, HH, new GH)
      }
      normalizeFromLength(HH) {
        return 0 === HH || 1 === HH ? this : this.scaleInPlace(1 / HH)
      }
      normalizeToNew() {
        return this.normalizeToRef(new GH)
      }
      normalizeToRef(HH) {
        const BH = this.length();
        return 0 === BH || 1 === BH ? (HH._x = this._x, HH._y = this._y, HH._z = this._z, HH._isDirty = !0, HH) : this.scaleToRef(1 / BH, HH)
      }
      clone() {
        return new GH(this._x, this._y, this._z)
      }
      Tm(HH) {
        return this.SBH(HH._x, HH._y, HH._z)
      }
      SBH(HH, BH, LH) {
        return this._x = HH, this._y = BH, this._z = LH, this._isDirty = !0, this
      }
      set(HH, BH, LH) {
        return this.SBH(HH, BH, LH)
      }
      IHH(HH) {
        return this._x = this._y = this._z = HH, this._isDirty = !0, this
      }
      static GetClipFactor(HH, BH, LH, AH) {
        const rH = GH.Dot(HH, LH);
        return (rH - AH) / (rH - GH.Dot(BH, LH))
      }
      static GetAngleBetweenVectors(HH, BH, LH) {
        const AH = HH.normalizeToRef(WH.lu[1]),
          rH = BH.normalizeToRef(WH.lu[2]);
        let SH = GH.Dot(AH, rH);
        SH = (0, tH.Clamp)(SH, -1, 1);
        const hH = Math.acos(SH),
          zH = WH.lu[3];
        return GH.CrossToRef(AH, rH, zH), GH.Dot(zH, LH) > 0 ? isNaN(hH) ? 0 : hH : isNaN(hH) ? -Math.PI : -Math.acos(SH)
      }
      static GetAngleBetweenVectorsOnPlane(HH, BH, LH) {
        WH.lu[0].Tm(HH);
        const AH = WH.lu[0];
        WH.lu[1].Tm(BH);
        const rH = WH.lu[1];
        WH.lu[2].Tm(LH);
        const SH = WH.lu[2],
          hH = WH.lu[3],
          zH = WH.lu[4];
        AH.normalize(), rH.normalize(), SH.normalize(), GH.CrossToRef(SH, AH, hH), GH.CrossToRef(hH, SH, zH);
        const CH = Math.atan2(GH.Dot(rH, hH), GH.Dot(rH, zH));
        return (0, tH.NormalizeRadians)(CH)
      }
      static PitchYawRollToMoveBetweenPointsToRef(HH, BH, LH) {
        const AH = MH.lu[0];
        return BH.subtractToRef(HH, AH), LH._y = Math.atan2(AH.x, AH.z) || 0, LH._x = Math.atan2(Math.sqrt(AH.x ** 2 + AH.z ** 2), AH.y) || 0, LH._z = 0, LH._isDirty = !0, LH
      }
      static PitchYawRollToMoveBetweenPoints(HH, BH) {
        const LH = GH.Zero();
        return GH.PitchYawRollToMoveBetweenPointsToRef(HH, BH, LH)
      }
      static SlerpToRef(HH, BH, LH, rH) {
        LH = (0, tH.Clamp)(LH, 0, 1);
        const SH = WH.lu[0],
          hH = WH.lu[1];
        SH.Tm(HH);
        const zH = SH.length();
        SH.normalizeFromLength(zH), hH.Tm(BH);
        const CH = hH.length();
        hH.normalizeFromLength(CH);
        const EH = GH.Dot(SH, hH);
        let XH, YH;
        if (EH < 1 - AH.d) {
          const HH = Math.acos(EH),
            BH = 1 / Math.sin(HH);
          XH = Math.sin((1 - LH) * HH) * BH, YH = Math.sin(LH * HH) * BH
        } else XH = 1 - LH, YH = LH;
        return SH.scaleInPlace(XH), hH.scaleInPlace(YH), rH.Tm(SH).addInPlace(hH), rH.scaleInPlace((0, tH.Lerp)(zH, CH, LH)), rH
      }
      static SmoothToRef(HH, BH, LH, AH, rH) {
        return GH.SlerpToRef(HH, BH, 0 === AH ? 1 : LH / AH, rH), rH
      }
      static FromArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new GH(HH[BH], HH[BH + 1], HH[BH + 2])
      }
      static FromFloatArray(HH, BH) {
        return GH.FromArray(HH, BH)
      }
      static FromArrayToRef(HH, BH, LH) {
        return LH._x = HH[BH], LH._y = HH[BH + 1], LH._z = HH[BH + 2], LH._isDirty = !0, LH
      }
      static FromFloatArrayToRef(HH, BH, LH) {
        return GH.FromArrayToRef(HH, BH, LH)
      }
      static FromFloatsToRef(HH, BH, LH, AH) {
        return AH.SBH(HH, BH, LH), AH
      }
      static Zero() {
        return new GH(0, 0, 0)
      }
      static One() {
        return new GH(1, 1, 1)
      }
      static Up() {
        return new GH(0, 1, 0)
      }
      static get UpReadOnly() {
        return GH._UpReadOnly
      }
      static get DownReadOnly() {
        return GH._DownReadOnly
      }
      static get RightReadOnly() {
        return GH._RightReadOnly
      }
      static get LeftReadOnly() {
        return GH._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return GH._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return GH._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return GH._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return GH._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return GH._ZeroReadOnly
      }
      static get OneReadOnly() {
        return GH._OneReadOnly
      }
      static Down() {
        return new GH(0, -1, 0)
      }
      static Forward() {
        return new GH(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new GH(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new GH(1, 0, 0)
      }
      static Left() {
        return new GH(-1, 0, 0)
      }
      static Random() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new GH((0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH))
      }
      static RandomToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).SBH((0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH))
      }
      static TransformCoordinates(HH, BH) {
        const LH = GH.Zero();
        return GH.TransformCoordinatesToRef(HH, BH, LH), LH
      }
      static TransformCoordinatesToRef(HH, BH, LH) {
        return GH.TransformCoordinatesFromFloatsToRef(HH._x, HH._y, HH._z, BH, LH), LH
      }
      static TransformCoordinatesFromFloatsToRef(HH, BH, LH, AH, rH) {
        const SH = AH.m,
          hH = HH * SH[0] + BH * SH[4] + LH * SH[8] + SH[12],
          tH = HH * SH[1] + BH * SH[5] + LH * SH[9] + SH[13],
          zH = HH * SH[2] + BH * SH[6] + LH * SH[10] + SH[14],
          CH = 1 / (HH * SH[3] + BH * SH[7] + LH * SH[11] + SH[15]);
        return rH._x = hH * CH, rH._y = tH * CH, rH._z = zH * CH, rH._isDirty = !0, rH
      }
      static TransformNormal(HH, BH) {
        const LH = GH.Zero();
        return GH.TransformNormalToRef(HH, BH, LH), LH
      }
      static TransformNormalToRef(HH, BH, LH) {
        return this.TransformNormalFromFloatsToRef(HH._x, HH._y, HH._z, BH, LH), LH
      }
      static TransformNormalFromFloatsToRef(HH, BH, LH, AH, rH) {
        const SH = AH.m;
        return rH._x = HH * SH[0] + BH * SH[4] + LH * SH[8], rH._y = HH * SH[1] + BH * SH[5] + LH * SH[9], rH._z = HH * SH[2] + BH * SH[6] + LH * SH[10], rH._isDirty = !0, rH
      }
      static CatmullRom(HH, BH, LH, AH, rH) {
        const SH = rH * rH,
          hH = rH * SH,
          tH = .5 * (2 * BH._x + (-HH._x + LH._x) * rH + (2 * HH._x - 5 * BH._x + 4 * LH._x - AH._x) * SH + (-HH._x + 3 * BH._x - 3 * LH._x + AH._x) * hH),
          zH = .5 * (2 * BH._y + (-HH._y + LH._y) * rH + (2 * HH._y - 5 * BH._y + 4 * LH._y - AH._y) * SH + (-HH._y + 3 * BH._y - 3 * LH._y + AH._y) * hH),
          CH = .5 * (2 * BH._z + (-HH._z + LH._z) * rH + (2 * HH._z - 5 * BH._z + 4 * LH._z - AH._z) * SH + (-HH._z + 3 * BH._z - 3 * LH._z + AH._z) * hH);
        return new GH(tH, zH, CH)
      }
      static Clamp(HH, BH, LH) {
        const AH = new GH;
        return GH.ClampToRef(HH, BH, LH, AH), AH
      }
      static ClampToRef(HH, BH, LH, AH) {
        let rH = HH._x;
        rH = rH > LH._x ? LH._x : rH, rH = rH < BH._x ? BH._x : rH;
        let SH = HH._y;
        SH = SH > LH._y ? LH._y : SH, SH = SH < BH._y ? BH._y : SH;
        let hH = HH._z;
        return hH = hH > LH._z ? LH._z : hH, hH = hH < BH._z ? BH._z : hH, AH.SBH(rH, SH, hH), AH
      }
      static CheckExtends(HH, BH, LH) {
        BH.minimizeInPlace(HH), LH.maximizeInPlace(HH)
      }
      static Hermite(HH, BH, LH, AH, rH) {
        const SH = rH * rH,
          hH = rH * SH,
          tH = 2 * hH - 3 * SH + 1,
          zH = -2 * hH + 3 * SH,
          CH = hH - 2 * SH + rH,
          EH = hH - SH,
          XH = HH._x * tH + LH._x * zH + BH._x * CH + AH._x * EH,
          YH = HH._y * tH + LH._y * zH + BH._y * CH + AH._y * EH,
          uH = HH._z * tH + LH._z * zH + BH._z * CH + AH._z * EH;
        return new GH(XH, YH, uH)
      }
      static Hermite1stDerivative(HH, BH, LH, AH, rH) {
        const SH = new GH;
        return this.Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH), SH
      }
      static Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH) {
        const hH = rH * rH;
        return SH._x = 6 * (hH - rH) * HH._x + (3 * hH - 4 * rH + 1) * BH._x + 6 * (-hH + rH) * LH._x + (3 * hH - 2 * rH) * AH._x, SH._y = 6 * (hH - rH) * HH._y + (3 * hH - 4 * rH + 1) * BH._y + 6 * (-hH + rH) * LH._y + (3 * hH - 2 * rH) * AH._y, SH._z = 6 * (hH - rH) * HH._z + (3 * hH - 4 * rH + 1) * BH._z + 6 * (-hH + rH) * LH._z + (3 * hH - 2 * rH) * AH._z, SH._isDirty = !0, SH
      }
      static Lerp(HH, BH, LH) {
        const AH = new GH(0, 0, 0);
        return GH.LerpToRef(HH, BH, LH, AH), AH
      }
      static LerpToRef(HH, BH, LH, AH) {
        return AH._x = HH._x + (BH._x - HH._x) * LH, AH._y = HH._y + (BH._y - HH._y) * LH, AH._z = HH._z + (BH._z - HH._z) * LH, AH._isDirty = !0, AH
      }
      static Dot(HH, BH) {
        return HH._x * BH._x + HH._y * BH._y + HH._z * BH._z
      }
      dot(HH) {
        return this._x * HH._x + this._y * HH._y + this._z * HH._z
      }
      static Cross(HH, BH) {
        const LH = new GH;
        return GH.CrossToRef(HH, BH, LH), LH
      }
      static CrossToRef(HH, BH, LH) {
        const AH = HH._y * BH._z - HH._z * BH._y,
          rH = HH._z * BH._x - HH._x * BH._z,
          SH = HH._x * BH._y - HH._y * BH._x;
        return LH.SBH(AH, rH, SH), LH
      }
      static Normalize(HH) {
        const BH = GH.Zero();
        return GH.NormalizeToRef(HH, BH), BH
      }
      static NormalizeToRef(HH, BH) {
        return HH.normalizeToRef(BH), BH
      }
      static Project(HH, BH, LH, AH) {
        const rH = new GH;
        return GH.ProjectToRef(HH, BH, LH, AH, rH), rH
      }
      static ProjectToRef(HH, BH, LH, AH, rH) {
        const SH = AH.width,
          tH = AH.height,
          zH = AH.x,
          CH = AH.y,
          EH = WH.Matrix[1],
          XH = hH.d.LastCreatedEngine?.isNDCHalfZRange,
          YH = XH ? 1 : .5,
          uH = XH ? 0 : .5;
        QH.FromValuesToRef(SH / 2, 0, 0, 0, 0, -tH / 2, 0, 0, 0, 0, YH, 0, zH + SH / 2, tH / 2 + CH, uH, 1, EH);
        const MH = WH.Matrix[0];
        return BH.multiplyToRef(LH, MH), MH.multiplyToRef(EH, MH), GH.TransformCoordinatesToRef(HH, MH, rH), rH
      }
      static Reflect(HH, BH) {
        return this.ReflectToRef(HH, BH, new GH)
      }
      static ReflectToRef(HH, BH, LH) {
        const AH = MH.lu[0];
        return AH.Tm(BH).scaleInPlace(2 * GH.Dot(HH, BH)), LH.Tm(HH).grH(AH)
      }
      static UnprojectFromTransform(HH, BH, LH, AH, rH) {
        return this.Unproject(HH, BH, LH, AH, rH, QH.IdentityReadOnly)
      }
      static Unproject(HH, BH, LH, AH, rH, SH) {
        const hH = new GH;
        return GH.UnprojectToRef(HH, BH, LH, AH, rH, SH, hH), hH
      }
      static UnprojectToRef(HH, BH, LH, AH, rH, SH, hH) {
        return GH.UnprojectFloatsToRef(HH._x, HH._y, HH._z, BH, LH, AH, rH, SH, hH), hH
      }
      static UnprojectFloatsToRef(HH, BH, LH, AH, rH, SH, tH, zH, CH) {
        const EH = WH.Matrix[0];
        SH.multiplyToRef(tH, EH), EH.multiplyToRef(zH, EH), EH.invert();
        const XH = WH.lu[0];
        return XH.x = HH / AH * 2 - 1, XH.y = -(BH / rH * 2 - 1), hH.d.LastCreatedEngine?.isNDCHalfZRange ? XH.z = LH : XH.z = 2 * LH - 1, GH.TransformCoordinatesToRef(XH, EH, CH), CH
      }
      static Minimize(HH, BH) {
        const LH = new GH;
        return LH.Tm(HH), LH.minimizeInPlace(BH), LH
      }
      static Maximize(HH, BH) {
        const LH = new GH;
        return LH.Tm(HH), LH.maximizeInPlace(BH), LH
      }
      static Distance(HH, BH) {
        return Math.sqrt(GH.DistanceSquared(HH, BH))
      }
      static DistanceSquared(HH, BH) {
        const LH = HH._x - BH._x,
          AH = HH._y - BH._y,
          rH = HH._z - BH._z;
        return LH * LH + AH * AH + rH * rH
      }
      static ProjectOnTriangleToRef(HH, BH, LH, rH, SH) {
        const hH = WH.lu[0],
          zH = WH.lu[1],
          CH = WH.lu[2],
          EH = WH.lu[3],
          XH = WH.lu[4];
        LH.subtractToRef(BH, hH), rH.subtractToRef(BH, zH), rH.subtractToRef(LH, CH);
        const YH = hH.length(),
          uH = zH.length(),
          QH = CH.length();
        if (YH < AH.d || uH < AH.d || QH < AH.d) return SH.Tm(BH), GH.Distance(HH, BH);
        HH.subtractToRef(BH, XH), GH.CrossToRef(hH, zH, EH);
        const MH = EH.length();
        if (MH < AH.d) return SH.Tm(BH), GH.Distance(HH, BH);
        EH.normalizeFromLength(MH);
        let xH = XH.length();
        if (xH < AH.d) return SH.Tm(BH), 0;
        XH.normalizeFromLength(xH);
        const vH = GH.Dot(EH, XH),
          PH = WH.lu[5],
          TH = WH.lu[6];
        PH.Tm(EH).scaleInPlace(-xH * vH), TH.Tm(HH).addInPlace(PH);
        const UH = WH.lu[4],
          VH = WH.lu[5],
          OH = WH.lu[7],
          bH = WH.lu[8];
        UH.Tm(hH).scaleInPlace(1 / YH), bH.Tm(zH).scaleInPlace(1 / uH), UH.addInPlace(bH).scaleInPlace(-1), VH.Tm(hH).scaleInPlace(-1 / YH), bH.Tm(CH).scaleInPlace(1 / QH), VH.addInPlace(bH).scaleInPlace(-1), OH.Tm(CH).scaleInPlace(-1 / QH), bH.Tm(zH).scaleInPlace(-1 / uH), OH.addInPlace(bH).scaleInPlace(-1);
        const kH = WH.lu[9];
        let mH;
        kH.Tm(TH).grH(BH), GH.CrossToRef(UH, kH, bH), mH = GH.Dot(bH, EH);
        const oH = mH;
        kH.Tm(TH).grH(LH), GH.CrossToRef(VH, kH, bH), mH = GH.Dot(bH, EH);
        const IH = mH;
        kH.Tm(TH).grH(rH), GH.CrossToRef(OH, kH, bH), mH = GH.Dot(bH, EH);
        const fH = mH,
          lH = WH.lu[10];
        let KH, cH;
        oH > 0 && IH < 0 ? (lH.Tm(hH), KH = BH, cH = LH) : IH > 0 && fH < 0 ? (lH.Tm(CH), KH = LH, cH = rH) : (lH.Tm(zH).scaleInPlace(-1), KH = rH, cH = BH);
        const eH = WH.lu[9],
          qH = WH.lu[4];
        KH.subtractToRef(TH, bH), cH.subtractToRef(TH, eH), GH.CrossToRef(bH, eH, qH);
        if (!(GH.Dot(qH, EH) < 0)) return SH.Tm(TH), Math.abs(xH * vH);
        const gH = WH.lu[5];
        GH.CrossToRef(lH, qH, gH), gH.normalize();
        const NH = WH.lu[9];
        NH.Tm(KH).grH(TH);
        const RH = NH.length();
        if (RH < AH.d) return SH.Tm(KH), GH.Distance(HH, KH);
        NH.normalizeFromLength(RH);
        const jH = GH.Dot(gH, NH),
          nH = WH.lu[7];
        nH.Tm(TH).addInPlace(gH.scaleInPlace(RH * jH)), bH.Tm(nH).grH(KH), xH = lH.length(), lH.normalizeFromLength(xH);
        let FH = GH.Dot(bH, lH) / Math.max(xH, AH.d);
        return FH = (0, tH.Clamp)(FH, 0, 1), nH.Tm(KH).addInPlace(lH.scaleInPlace(FH * xH)), SH.Tm(nH), GH.Distance(HH, nH)
      }
      static Center(HH, BH) {
        return GH.CenterToRef(HH, BH, GH.Zero())
      }
      static CenterToRef(HH, BH, LH) {
        return LH.SBH((HH._x + BH._x) / 2, (HH._y + BH._y) / 2, (HH._z + BH._z) / 2)
      }
      static RotationFromAxis(HH, BH, LH) {
        const AH = new GH;
        return GH.RotationFromAxisToRef(HH, BH, LH, AH), AH
      }
      static RotationFromAxisToRef(HH, BH, LH, AH) {
        const rH = WH.Quaternion[0];
        return uH.RotationQuaternionFromAxisToRef(HH, BH, LH, rH), rH.toEulerAnglesToRef(AH), AH
      }
    }
    GH._V8PerformanceHack = new GH(.5, .5, .5), GH._UpReadOnly = GH.Up(), GH._DownReadOnly = GH.Down(), GH._LeftHandedForwardReadOnly = GH.Forward(!1), GH._RightHandedForwardReadOnly = GH.Forward(!0), GH._LeftHandedBackwardReadOnly = GH.Backward(!1), GH._RightHandedBackwardReadOnly = GH.Backward(!0), GH._RightReadOnly = GH.Right(), GH._LeftReadOnly = GH.Left(), GH._ZeroReadOnly = GH.Zero(), GH._OneReadOnly = GH.One();
    class YH {
      get x() {
        return this._x
      }
      set x(HH) {
        this._x = HH, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(HH) {
        this._y = HH, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(HH) {
        this._z = HH, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(HH) {
        this._w = HH, this._isDirty = !0
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = HH, this._y = BH, this._z = LH, this._w = AH
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let HH = EH(this._x);
        return HH = 397 * HH ^ EH(this._y), HH = 397 * HH ^ EH(this._z), HH = 397 * HH ^ EH(this._w), HH
      }
      xrH() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(HH, BH) {
        return void 0 === BH && (BH = 0), HH[BH] = this._x, HH[BH + 1] = this._y, HH[BH + 2] = this._z, HH[BH + 3] = this._w, this
      }
      SX(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YH.FromArrayToRef(HH, BH, this), this
      }
      addInPlace(HH) {
        return this.x += HH._x, this.y += HH._y, this.z += HH._z, this.w += HH._w, this
      }
      addInPlaceFromFloats(HH, BH, LH, AH) {
        return this.x += HH, this.y += BH, this.z += LH, this.w += AH, this
      }
      add(HH) {
        return new YH(this._x + HH.x, this._y + HH.y, this._z + HH.z, this._w + HH.w)
      }
      addToRef(HH, BH) {
        return BH.x = this._x + HH.x, BH.y = this._y + HH.y, BH.z = this._z + HH.z, BH.w = this._w + HH.w, BH
      }
      grH(HH) {
        return this.x -= HH.x, this.y -= HH.y, this.z -= HH.z, this.w -= HH.w, this
      }
      subtract(HH) {
        return new YH(this._x - HH.x, this._y - HH.y, this._z - HH.z, this._w - HH.w)
      }
      subtractToRef(HH, BH) {
        return BH.x = this._x - HH.x, BH.y = this._y - HH.y, BH.z = this._z - HH.z, BH.w = this._w - HH.w, BH
      }
      subtractFromFloats(HH, BH, LH, AH) {
        return new YH(this._x - HH, this._y - BH, this._z - LH, this._w - AH)
      }
      subtractFromFloatsToRef(HH, BH, LH, AH, rH) {
        return rH.x = this._x - HH, rH.y = this._y - BH, rH.z = this._z - LH, rH.w = this._w - AH, rH
      }
      du() {
        return new YH(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(HH) {
        return HH.x = -this._x, HH.y = -this._y, HH.z = -this._z, HH.w = -this._w, HH
      }
      scaleInPlace(HH) {
        return this.x *= HH, this.y *= HH, this.z *= HH, this.w *= HH, this
      }
      scale(HH) {
        return new YH(this._x * HH, this._y * HH, this._z * HH, this._w * HH)
      }
      scaleToRef(HH, BH) {
        return BH.x = this._x * HH, BH.y = this._y * HH, BH.z = this._z * HH, BH.w = this._w * HH, BH
      }
      scaleAndAddToRef(HH, BH) {
        return BH.x += this._x * HH, BH.y += this._y * HH, BH.z += this._z * HH, BH.w += this._w * HH, BH
      }
      equals(HH) {
        return HH && this._x === HH.x && this._y === HH.y && this._z === HH.z && this._w === HH.w
      }
      equalsWithEpsilon(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH.d;
        return HH && (0, tH.WithinEpsilon)(this._x, HH.x, BH) && (0, tH.WithinEpsilon)(this._y, HH.y, BH) && (0, tH.WithinEpsilon)(this._z, HH.z, BH) && (0, tH.WithinEpsilon)(this._w, HH.w, BH)
      }
      dtH(HH, BH, LH, AH) {
        return this._x === HH && this._y === BH && this._z === LH && this._w === AH
      }
      multiplyInPlace(HH) {
        return this.x *= HH.x, this.y *= HH.y, this.z *= HH.z, this.w *= HH.w, this
      }
      multiply(HH) {
        return new YH(this._x * HH.x, this._y * HH.y, this._z * HH.z, this._w * HH.w)
      }
      multiplyToRef(HH, BH) {
        return BH.x = this._x * HH.x, BH.y = this._y * HH.y, BH.z = this._z * HH.z, BH.w = this._w * HH.w, BH
      }
      multiplyByFloats(HH, BH, LH, AH) {
        return new YH(this._x * HH, this._y * BH, this._z * LH, this._w * AH)
      }
      divide(HH) {
        return new YH(this._x / HH.x, this._y / HH.y, this._z / HH.z, this._w / HH.w)
      }
      divideToRef(HH, BH) {
        return BH.x = this._x / HH.x, BH.y = this._y / HH.y, BH.z = this._z / HH.z, BH.w = this._w / HH.w, BH
      }
      divideInPlace(HH) {
        return this.divideToRef(HH, this)
      }
      minimizeInPlace(HH) {
        return HH.x < this._x && (this.x = HH.x), HH.y < this._y && (this.y = HH.y), HH.z < this._z && (this.z = HH.z), HH.w < this._w && (this.w = HH.w), this
      }
      maximizeInPlace(HH) {
        return HH.x > this._x && (this.x = HH.x), HH.y > this._y && (this.y = HH.y), HH.z > this._z && (this.z = HH.z), HH.w > this._w && (this.w = HH.w), this
      }
      minimizeInPlaceFromFloats(HH, BH, LH, AH) {
        return this.x = Math.min(HH, this._x), this.y = Math.min(BH, this._y), this.z = Math.min(LH, this._z), this.w = Math.min(AH, this._w), this
      }
      maximizeInPlaceFromFloats(HH, BH, LH, AH) {
        return this.x = Math.max(HH, this._x), this.y = Math.max(BH, this._y), this.z = Math.max(LH, this._z), this.w = Math.max(AH, this._w), this
      }
      floorToRef(HH) {
        return HH.x = Math.floor(this._x), HH.y = Math.floor(this._y), HH.z = Math.floor(this._z), HH.w = Math.floor(this._w), HH
      }
      floor() {
        return new YH(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(HH) {
        return HH.x = this._x - Math.floor(this._x), HH.y = this._y - Math.floor(this._y), HH.z = this._z - Math.floor(this._z), HH.w = this._w - Math.floor(this._w), HH
      }
      fract() {
        return new YH(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(HH) {
        return 0 === HH || 1 === HH ? this : this.scaleInPlace(1 / HH)
      }
      normalizeToNew() {
        return this.normalizeToRef(new YH)
      }
      normalizeToRef(HH) {
        const BH = this.length();
        return 0 === BH || 1 === BH ? (HH.x = this._x, HH.y = this._y, HH.z = this._z, HH.w = this._w, HH) : this.scaleToRef(1 / BH, HH)
      }
      toVector3() {
        return new GH(this._x, this._y, this._z)
      }
      clone() {
        return new YH(this._x, this._y, this._z, this._w)
      }
      Tm(HH) {
        return this.x = HH.x, this.y = HH.y, this.z = HH.z, this.w = HH.w, this
      }
      SBH(HH, BH, LH, AH) {
        return this.x = HH, this.y = BH, this.z = LH, this.w = AH, this
      }
      set(HH, BH, LH, AH) {
        return this.SBH(HH, BH, LH, AH)
      }
      IHH(HH) {
        return this.x = this.y = this.z = this.w = HH, this
      }
      dot(HH) {
        return this._x * HH.x + this._y * HH.y + this._z * HH.z + this._w * HH.w
      }
      static FromArray(HH, BH) {
        return BH || (BH = 0), new YH(HH[BH], HH[BH + 1], HH[BH + 2], HH[BH + 3])
      }
      static FromArrayToRef(HH, BH, LH) {
        return LH.x = HH[BH], LH.y = HH[BH + 1], LH.z = HH[BH + 2], LH.w = HH[BH + 3], LH
      }
      static FromFloatArrayToRef(HH, BH, LH) {
        return YH.FromArrayToRef(HH, BH, LH), LH
      }
      static FromFloatsToRef(HH, BH, LH, AH, rH) {
        return rH.x = HH, rH.y = BH, rH.z = LH, rH.w = AH, rH
      }
      static Zero() {
        return new YH(0, 0, 0, 0)
      }
      static One() {
        return new YH(1, 1, 1, 1)
      }
      static Random() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new YH((0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH))
      }
      static RandomToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        return LH.x = (0, tH.RandomRange)(HH, BH), LH.y = (0, tH.RandomRange)(HH, BH), LH.z = (0, tH.RandomRange)(HH, BH), LH.w = (0, tH.RandomRange)(HH, BH), LH
      }
      static Clamp(HH, BH, LH) {
        return YH.ClampToRef(HH, BH, LH, new YH)
      }
      static ClampToRef(HH, BH, LH, AH) {
        return AH.x = (0, tH.Clamp)(HH.x, BH.x, LH.x), AH.y = (0, tH.Clamp)(HH.y, BH.y, LH.y), AH.z = (0, tH.Clamp)(HH.z, BH.z, LH.z), AH.w = (0, tH.Clamp)(HH.w, BH.w, LH.w), AH
      }
      static CheckExtends(HH, BH, LH) {
        BH.minimizeInPlace(HH), LH.maximizeInPlace(HH)
      }
      static get ZeroReadOnly() {
        return YH._ZeroReadOnly
      }
      static Normalize(HH) {
        return YH.NormalizeToRef(HH, new YH)
      }
      static NormalizeToRef(HH, BH) {
        return HH.normalizeToRef(BH), BH
      }
      static Minimize(HH, BH) {
        const LH = new YH;
        return LH.Tm(HH), LH.minimizeInPlace(BH), LH
      }
      static Maximize(HH, BH) {
        const LH = new YH;
        return LH.Tm(HH), LH.maximizeInPlace(BH), LH
      }
      static Distance(HH, BH) {
        return Math.sqrt(YH.DistanceSquared(HH, BH))
      }
      static DistanceSquared(HH, BH) {
        const LH = HH.x - BH.x,
          AH = HH.y - BH.y,
          rH = HH.z - BH.z,
          SH = HH.w - BH.w;
        return LH * LH + AH * AH + rH * rH + SH * SH
      }
      static Center(HH, BH) {
        return YH.CenterToRef(HH, BH, new YH)
      }
      static CenterToRef(HH, BH, LH) {
        return LH.x = (HH.x + BH.x) / 2, LH.y = (HH.y + BH.y) / 2, LH.z = (HH.z + BH.z) / 2, LH.w = (HH.w + BH.w) / 2, LH
      }
      static TransformCoordinates(HH, BH) {
        return YH.TransformCoordinatesToRef(HH, BH, new YH)
      }
      static TransformCoordinatesToRef(HH, BH, LH) {
        return YH.TransformCoordinatesFromFloatsToRef(HH._x, HH._y, HH._z, BH, LH), LH
      }
      static TransformCoordinatesFromFloatsToRef(HH, BH, LH, AH, rH) {
        const SH = AH.m,
          hH = HH * SH[0] + BH * SH[4] + LH * SH[8] + SH[12],
          tH = HH * SH[1] + BH * SH[5] + LH * SH[9] + SH[13],
          zH = HH * SH[2] + BH * SH[6] + LH * SH[10] + SH[14],
          CH = HH * SH[3] + BH * SH[7] + LH * SH[11] + SH[15];
        return rH.x = hH, rH.y = tH, rH.z = zH, rH.w = CH, rH
      }
      static TransformNormal(HH, BH) {
        return YH.TransformNormalToRef(HH, BH, new YH)
      }
      static TransformNormalToRef(HH, BH, LH) {
        const AH = BH.m,
          rH = HH.x * AH[0] + HH.y * AH[4] + HH.z * AH[8],
          SH = HH.x * AH[1] + HH.y * AH[5] + HH.z * AH[9],
          hH = HH.x * AH[2] + HH.y * AH[6] + HH.z * AH[10];
        return LH.x = rH, LH.y = SH, LH.z = hH, LH.w = HH.w, LH
      }
      static TransformNormalFromFloatsToRef(HH, BH, LH, AH, rH, SH) {
        const hH = rH.m;
        return SH.x = HH * hH[0] + BH * hH[4] + LH * hH[8], SH.y = HH * hH[1] + BH * hH[5] + LH * hH[9], SH.z = HH * hH[2] + BH * hH[6] + LH * hH[10], SH.w = AH, SH
      }
      static FromVector3(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new YH(HH._x, HH._y, HH._z, BH)
      }
      static Dot(HH, BH) {
        return HH.x * BH.x + HH.y * BH.y + HH.z * BH.z + HH.w * BH.w
      }
    }
    YH._V8PerformanceHack = new YH(.5, .5, .5, .5), YH._ZeroReadOnly = YH.Zero();
    class uH {
      get x() {
        return this._x
      }
      set x(HH) {
        this._x = HH, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(HH) {
        this._y = HH, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(HH) {
        this._z = HH, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(HH) {
        this._w = HH, this._isDirty = !0
      }
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = HH, this._y = BH, this._z = LH, this._w = AH
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let HH = EH(this._x);
        return HH = 397 * HH ^ EH(this._y), HH = 397 * HH ^ EH(this._z), HH = 397 * HH ^ EH(this._w), HH
      }
      xrH() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HH[BH] = this._x, HH[BH + 1] = this._y, HH[BH + 2] = this._z, HH[BH + 3] = this._w, this
      }
      SX(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uH.FromArrayToRef(HH, BH, this)
      }
      equals(HH) {
        return HH && this._x === HH._x && this._y === HH._y && this._z === HH._z && this._w === HH._w
      }
      equalsWithEpsilon(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH.d;
        return HH && (0, tH.WithinEpsilon)(this._x, HH._x, BH) && (0, tH.WithinEpsilon)(this._y, HH._y, BH) && (0, tH.WithinEpsilon)(this._z, HH._z, BH) && (0, tH.WithinEpsilon)(this._w, HH._w, BH)
      }
      isApprox(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AH.d;
        return HH && ((0, tH.WithinEpsilon)(this._x, HH._x, BH) && (0, tH.WithinEpsilon)(this._y, HH._y, BH) && (0, tH.WithinEpsilon)(this._z, HH._z, BH) && (0, tH.WithinEpsilon)(this._w, HH._w, BH) || (0, tH.WithinEpsilon)(this._x, -HH._x, BH) && (0, tH.WithinEpsilon)(this._y, -HH._y, BH) && (0, tH.WithinEpsilon)(this._z, -HH._z, BH) && (0, tH.WithinEpsilon)(this._w, -HH._w, BH))
      }
      clone() {
        return new uH(this._x, this._y, this._z, this._w)
      }
      Tm(HH) {
        return this._x = HH._x, this._y = HH._y, this._z = HH._z, this._w = HH._w, this._isDirty = !0, this
      }
      SBH(HH, BH, LH, AH) {
        return this._x = HH, this._y = BH, this._z = LH, this._w = AH, this._isDirty = !0, this
      }
      set(HH, BH, LH, AH) {
        return this.SBH(HH, BH, LH, AH)
      }
      IHH(HH) {
        return this.SBH(HH, HH, HH, HH)
      }
      add(HH) {
        return new uH(this._x + HH._x, this._y + HH._y, this._z + HH._z, this._w + HH._w)
      }
      addInPlace(HH) {
        return this._x += HH._x, this._y += HH._y, this._z += HH._z, this._w += HH._w, this._isDirty = !0, this
      }
      addToRef(HH, BH) {
        return BH._x = this._x + HH._x, BH._y = this._y + HH._y, BH._z = this._z + HH._z, BH._w = this._w + HH._w, BH._isDirty = !0, BH
      }
      addInPlaceFromFloats(HH, BH, LH, AH) {
        return this._x += HH, this._y += BH, this._z += LH, this._w += AH, this._isDirty = !0, this
      }
      subtractToRef(HH, BH) {
        return BH._x = this._x - HH._x, BH._y = this._y - HH._y, BH._z = this._z - HH._z, BH._w = this._w - HH._w, BH._isDirty = !0, BH
      }
      subtractFromFloats(HH, BH, LH, AH) {
        return this.subtractFromFloatsToRef(HH, BH, LH, AH, new uH)
      }
      subtractFromFloatsToRef(HH, BH, LH, AH, rH) {
        return rH._x = this._x - HH, rH._y = this._y - BH, rH._z = this._z - LH, rH._w = this._w - AH, rH._isDirty = !0, rH
      }
      subtract(HH) {
        return new uH(this._x - HH._x, this._y - HH._y, this._z - HH._z, this._w - HH._w)
      }
      grH(HH) {
        return this._x -= HH._x, this._y -= HH._y, this._z -= HH._z, this._w -= HH._w, this._isDirty = !0, this
      }
      scale(HH) {
        return new uH(this._x * HH, this._y * HH, this._z * HH, this._w * HH)
      }
      scaleToRef(HH, BH) {
        return BH._x = this._x * HH, BH._y = this._y * HH, BH._z = this._z * HH, BH._w = this._w * HH, BH._isDirty = !0, BH
      }
      scaleInPlace(HH) {
        return this._x *= HH, this._y *= HH, this._z *= HH, this._w *= HH, this._isDirty = !0, this
      }
      scaleAndAddToRef(HH, BH) {
        return BH._x += this._x * HH, BH._y += this._y * HH, BH._z += this._z * HH, BH._w += this._w * HH, BH._isDirty = !0, BH
      }
      multiply(HH) {
        const BH = new uH(0, 0, 0, 1);
        return this.multiplyToRef(HH, BH), BH
      }
      multiplyToRef(HH, BH) {
        const LH = this._x * HH._w + this._y * HH._z - this._z * HH._y + this._w * HH._x,
          AH = -this._x * HH._z + this._y * HH._w + this._z * HH._x + this._w * HH._y,
          rH = this._x * HH._y - this._y * HH._x + this._z * HH._w + this._w * HH._z,
          SH = -this._x * HH._x - this._y * HH._y - this._z * HH._z + this._w * HH._w;
        return BH.SBH(LH, AH, rH, SH), BH
      }
      multiplyInPlace(HH) {
        return this.multiplyToRef(HH, this)
      }
      multiplyByFloats(HH, BH, LH, AH) {
        return this._x *= HH, this._y *= BH, this._z *= LH, this._w *= AH, this._isDirty = !0, this
      }
      divide(HH) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(HH, BH) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(HH) {
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
      du() {
        return this.negateToRef(new uH)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(HH) {
        return HH._x = -this._x, HH._y = -this._y, HH._z = -this._z, HH._w = -this._w, HH._isDirty = !0, HH
      }
      dtH(HH, BH, LH, AH) {
        return this._x === HH && this._y === BH && this._z === LH && this._w === AH
      }
      floorToRef(HH) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(HH) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(HH) {
        return HH.SBH(-this._x, -this._y, -this._z, this._w), HH
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new uH(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const HH = this.conjugate(),
          BH = this.lengthSquared();
        return 0 == BH || 1 == BH || HH.scaleInPlace(1 / BH), HH
      }
      invertInPlace() {
        this.conjugateInPlace();
        const HH = this.lengthSquared();
        return 0 == HH || 1 == HH || this.scaleInPlace(1 / HH), this
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
      normalizeFromLength(HH) {
        return 0 === HH || 1 === HH ? this : this.scaleInPlace(1 / HH)
      }
      normalizeToNew() {
        const HH = new uH(0, 0, 0, 1);
        return this.normalizeToRef(HH), HH
      }
      normalizeToRef(HH) {
        const BH = this.length();
        return 0 === BH || 1 === BH ? HH.SBH(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / BH, HH)
      }
      toEulerAngles() {
        const HH = GH.Zero();
        return this.toEulerAnglesToRef(HH), HH
      }
      toEulerAnglesToRef(HH) {
        const BH = this._z,
          LH = this._x,
          AH = this._y,
          rH = this._w,
          SH = AH * BH - LH * rH,
          hH = .4999999;
        if (SH < -hH) HH._y = 2 * Math.atan2(AH, rH), HH._x = Math.PI / 2, HH._z = 0, HH._isDirty = !0;
        else if (SH > hH) HH._y = 2 * Math.atan2(AH, rH), HH._x = -Math.PI / 2, HH._z = 0, HH._isDirty = !0;
        else {
          const hH = rH * rH,
            tH = BH * BH,
            zH = LH * LH,
            CH = AH * AH;
          HH._z = Math.atan2(2 * (LH * AH + BH * rH), -tH - zH + CH + hH), HH._x = Math.asin(-2 * SH), HH._y = Math.atan2(2 * (BH * LH + AH * rH), tH - zH - CH + hH), HH._isDirty = !0
        }
        return HH
      }
      toAlphaBetaGammaToRef(HH) {
        const BH = this._z,
          LH = this._x,
          AH = this._y,
          rH = this._w,
          SH = Math.sqrt(LH * LH + AH * AH),
          hH = Math.sqrt(BH * BH + rH * rH),
          tH = 2 * Math.atan2(SH, hH),
          zH = 2 * Math.atan2(BH, rH),
          CH = 2 * Math.atan2(AH, LH),
          EH = (zH + CH) / 2,
          XH = (zH - CH) / 2;
        return HH.set(XH, tH, EH), HH
      }
      toRotationMatrix(HH) {
        return QH.FromQuaternionToRef(this, HH), HH
      }
      fromRotationMatrix(HH) {
        return uH.FromRotationMatrixToRef(HH, this), this
      }
      dot(HH) {
        return this._x * HH._x + this._y * HH._y + this._z * HH._z + this._w * HH._w
      }
      toAxisAngle() {
        const HH = GH.Zero();
        return {
          axis: HH,
          angle: this.toAxisAngleToRef(HH)
        }
      }
      toAxisAngleToRef(HH) {
        let BH;
        const LH = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          AH = this._w;
        return LH > 0 ? (BH = 2 * Math.atan2(LH, AH), HH.set(this._x / LH, this._y / LH, this._z / LH)) : (BH = 0, HH.set(1, 0, 0)), BH
      }
      static FromRotationMatrix(HH) {
        const BH = new uH;
        return uH.FromRotationMatrixToRef(HH, BH), BH
      }
      static FromRotationMatrixToRef(HH, BH) {
        const LH = HH.m,
          AH = LH[0],
          rH = LH[4],
          SH = LH[8],
          hH = LH[1],
          tH = LH[5],
          zH = LH[9],
          CH = LH[2],
          EH = LH[6],
          XH = LH[10],
          GH = AH + tH + XH;
        let YH;
        return GH > 0 ? (YH = .5 / Math.sqrt(GH + 1), BH._w = .25 / YH, BH._x = (EH - zH) * YH, BH._y = (SH - CH) * YH, BH._z = (hH - rH) * YH, BH._isDirty = !0) : AH > tH && AH > XH ? (YH = 2 * Math.sqrt(1 + AH - tH - XH), BH._w = (EH - zH) / YH, BH._x = .25 * YH, BH._y = (rH + hH) / YH, BH._z = (SH + CH) / YH, BH._isDirty = !0) : tH > XH ? (YH = 2 * Math.sqrt(1 + tH - AH - XH), BH._w = (SH - CH) / YH, BH._x = (rH + hH) / YH, BH._y = .25 * YH, BH._z = (zH + EH) / YH, BH._isDirty = !0) : (YH = 2 * Math.sqrt(1 + XH - AH - tH), BH._w = (hH - rH) / YH, BH._x = (SH + CH) / YH, BH._y = (zH + EH) / YH, BH._z = .25 * YH, BH._isDirty = !0), BH
      }
      static Dot(HH, BH) {
        return HH._x * BH._x + HH._y * BH._y + HH._z * BH._z + HH._w * BH._w
      }
      static AreClose(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const AH = uH.Dot(HH, BH);
        return 1 - AH * AH <= LH
      }
      static SmoothToRef(HH, BH, LH, AH, rH) {
        let SH = 0 === AH ? 1 : LH / AH;
        return SH = (0, tH.Clamp)(SH, 0, 1), uH.SlerpToRef(HH, BH, SH, rH), rH
      }
      static Zero() {
        return new uH(0, 0, 0, 0)
      }
      static Inverse(HH) {
        return new uH(-HH._x, -HH._y, -HH._z, HH._w)
      }
      static InverseToRef(HH, BH) {
        return BH.set(-HH._x, -HH._y, -HH._z, HH._w), BH
      }
      static Identity() {
        return new uH(0, 0, 0, 1)
      }
      static IsIdentity(HH) {
        return HH && 0 === HH._x && 0 === HH._y && 0 === HH._z && 1 === HH._w
      }
      static RotationAxis(HH, BH) {
        return uH.RotationAxisToRef(HH, BH, new uH)
      }
      static RotationAxisToRef(HH, BH, LH) {
        LH._w = Math.cos(BH / 2);
        const AH = Math.sin(BH / 2) / HH.length();
        return LH._x = HH._x * AH, LH._y = HH._y * AH, LH._z = HH._z * AH, LH._isDirty = !0, LH
      }
      static FromArray(HH, BH) {
        return BH || (BH = 0), new uH(HH[BH], HH[BH + 1], HH[BH + 2], HH[BH + 3])
      }
      static FromArrayToRef(HH, BH, LH) {
        return LH._x = HH[BH], LH._y = HH[BH + 1], LH._z = HH[BH + 2], LH._w = HH[BH + 3], LH._isDirty = !0, LH
      }
      static FromFloatsToRef(HH, BH, LH, AH, rH) {
        return rH.SBH(HH, BH, LH, AH), rH
      }
      static FromEulerAngles(HH, BH, LH) {
        const AH = new uH;
        return uH.RotationYawPitchRollToRef(BH, HH, LH, AH), AH
      }
      static FromEulerAnglesToRef(HH, BH, LH, AH) {
        return uH.RotationYawPitchRollToRef(BH, HH, LH, AH), AH
      }
      static FromEulerVector(HH) {
        const BH = new uH;
        return uH.RotationYawPitchRollToRef(HH._y, HH._x, HH._z, BH), BH
      }
      static FromEulerVectorToRef(HH, BH) {
        return uH.RotationYawPitchRollToRef(HH._y, HH._x, HH._z, BH), BH
      }
      static FromUnitVectorsToRef(HH, BH, LH) {
        let rH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : AH.d;
        const SH = GH.Dot(HH, BH) + 1;
        return SH < rH ? Math.abs(HH.x) > Math.abs(HH.z) ? LH.set(-HH.y, HH.x, 0, 0) : LH.set(0, -HH.z, HH.y, 0) : (GH.CrossToRef(HH, BH, MH.lu[0]), LH.set(MH.lu[0].x, MH.lu[0].y, MH.lu[0].z, SH)), LH.normalize()
      }
      static RotationYawPitchRoll(HH, BH, LH) {
        const AH = new uH;
        return uH.RotationYawPitchRollToRef(HH, BH, LH, AH), AH
      }
      static RotationYawPitchRollToRef(HH, BH, LH, AH) {
        const rH = .5 * LH,
          SH = .5 * BH,
          hH = .5 * HH,
          tH = Math.sin(rH),
          zH = Math.cos(rH),
          CH = Math.sin(SH),
          EH = Math.cos(SH),
          XH = Math.sin(hH),
          GH = Math.cos(hH);
        return AH._x = GH * CH * zH + XH * EH * tH, AH._y = XH * EH * zH - GH * CH * tH, AH._z = GH * EH * tH - XH * CH * zH, AH._w = GH * EH * zH + XH * CH * tH, AH._isDirty = !0, AH
      }
      static RotationAlphaBetaGamma(HH, BH, LH) {
        const AH = new uH;
        return uH.RotationAlphaBetaGammaToRef(HH, BH, LH, AH), AH
      }
      static RotationAlphaBetaGammaToRef(HH, BH, LH, AH) {
        const rH = .5 * (LH + HH),
          SH = .5 * (LH - HH),
          hH = .5 * BH;
        return AH._x = Math.cos(SH) * Math.sin(hH), AH._y = Math.sin(SH) * Math.sin(hH), AH._z = Math.sin(rH) * Math.cos(hH), AH._w = Math.cos(rH) * Math.cos(hH), AH._isDirty = !0, AH
      }
      static RotationQuaternionFromAxis(HH, BH, LH) {
        const AH = new uH(0, 0, 0, 0);
        return uH.RotationQuaternionFromAxisToRef(HH, BH, LH, AH), AH
      }
      static RotationQuaternionFromAxisToRef(HH, BH, LH, AH) {
        const rH = WH.Matrix[0];
        return HH = HH.normalizeToRef(WH.lu[0]), BH = BH.normalizeToRef(WH.lu[1]), LH = LH.normalizeToRef(WH.lu[2]), QH.FromXYZAxesToRef(HH, BH, LH, rH), uH.FromRotationMatrixToRef(rH, AH), AH
      }
      static FromLookDirectionLH(HH, BH) {
        const LH = new uH;
        return uH.FromLookDirectionLHToRef(HH, BH, LH), LH
      }
      static FromLookDirectionLHToRef(HH, BH, LH) {
        const AH = WH.Matrix[0];
        return QH.LookDirectionLHToRef(HH, BH, AH), uH.FromRotationMatrixToRef(AH, LH), LH
      }
      static FromLookDirectionRH(HH, BH) {
        const LH = new uH;
        return uH.FromLookDirectionRHToRef(HH, BH, LH), LH
      }
      static FromLookDirectionRHToRef(HH, BH, LH) {
        const AH = WH.Matrix[0];
        return QH.LookDirectionRHToRef(HH, BH, AH), uH.FromRotationMatrixToRef(AH, LH)
      }
      static Slerp(HH, BH, LH) {
        const AH = uH.Identity();
        return uH.SlerpToRef(HH, BH, LH, AH), AH
      }
      static SlerpToRef(HH, BH, LH, AH) {
        let rH, SH, hH = HH._x * BH._x + HH._y * BH._y + HH._z * BH._z + HH._w * BH._w,
          tH = !1;
        if (hH < 0 && (tH = !0, hH = -hH), hH > .999999) SH = 1 - LH, rH = tH ? -LH : LH;
        else {
          const HH = Math.acos(hH),
            BH = 1 / Math.sin(HH);
          SH = Math.sin((1 - LH) * HH) * BH, rH = tH ? -Math.sin(LH * HH) * BH : Math.sin(LH * HH) * BH
        }
        return AH._x = SH * HH._x + rH * BH._x, AH._y = SH * HH._y + rH * BH._y, AH._z = SH * HH._z + rH * BH._z, AH._w = SH * HH._w + rH * BH._w, AH._isDirty = !0, AH
      }
      static Hermite(HH, BH, LH, AH, rH) {
        const SH = rH * rH,
          hH = rH * SH,
          tH = 2 * hH - 3 * SH + 1,
          zH = -2 * hH + 3 * SH,
          CH = hH - 2 * SH + rH,
          EH = hH - SH,
          XH = HH._x * tH + LH._x * zH + BH._x * CH + AH._x * EH,
          GH = HH._y * tH + LH._y * zH + BH._y * CH + AH._y * EH,
          YH = HH._z * tH + LH._z * zH + BH._z * CH + AH._z * EH,
          QH = HH._w * tH + LH._w * zH + BH._w * CH + AH._w * EH;
        return new uH(XH, GH, YH, QH)
      }
      static Hermite1stDerivative(HH, BH, LH, AH, rH) {
        const SH = new uH;
        return this.Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH), SH
      }
      static Hermite1stDerivativeToRef(HH, BH, LH, AH, rH, SH) {
        const hH = rH * rH;
        return SH._x = 6 * (hH - rH) * HH._x + (3 * hH - 4 * rH + 1) * BH._x + 6 * (-hH + rH) * LH._x + (3 * hH - 2 * rH) * AH._x, SH._y = 6 * (hH - rH) * HH._y + (3 * hH - 4 * rH + 1) * BH._y + 6 * (-hH + rH) * LH._y + (3 * hH - 2 * rH) * AH._y, SH._z = 6 * (hH - rH) * HH._z + (3 * hH - 4 * rH + 1) * BH._z + 6 * (-hH + rH) * LH._z + (3 * hH - 2 * rH) * AH._z, SH._w = 6 * (hH - rH) * HH._w + (3 * hH - 4 * rH + 1) * BH._w + 6 * (-hH + rH) * LH._w + (3 * hH - 2 * rH) * AH._w, SH._isDirty = !0, SH
      }
      static Normalize(HH) {
        const BH = uH.Zero();
        return uH.NormalizeToRef(HH, BH), BH
      }
      static NormalizeToRef(HH, BH) {
        return HH.normalizeToRef(BH), BH
      }
      static Clamp(HH, BH, LH) {
        const AH = new uH;
        return uH.ClampToRef(HH, BH, LH, AH), AH
      }
      static ClampToRef(HH, BH, LH, AH) {
        return AH.SBH((0, tH.Clamp)(HH.x, BH.x, LH.x), (0, tH.Clamp)(HH.y, BH.y, LH.y), (0, tH.Clamp)(HH.z, BH.z, LH.z), (0, tH.Clamp)(HH.w, BH.w, LH.w))
      }
      static Random() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new uH((0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH))
      }
      static RandomToRef() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).SBH((0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH), (0, tH.RandomRange)(HH, BH))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(HH, BH) {
        return Math.sqrt(uH.DistanceSquared(HH, BH))
      }
      static DistanceSquared(HH, BH) {
        const LH = HH.x - BH.x,
          AH = HH.y - BH.y,
          rH = HH.z - BH.z,
          SH = HH.w - BH.w;
        return LH * LH + AH * AH + rH * rH + SH * SH
      }
      static Center(HH, BH) {
        return uH.CenterToRef(HH, BH, uH.Zero())
      }
      static CenterToRef(HH, BH, LH) {
        return LH.SBH((HH.x + BH.x) / 2, (HH.y + BH.y) / 2, (HH.z + BH.z) / 2, (HH.w + BH.w) / 2)
      }
    }
    uH._V8PerformanceHack = new uH(.5, .5, .5, .5);
    class QH {
      static get Use64Bits() {
        return SH.e.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = zH.l._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          AH = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = HH, this._isIdentity3x2 = HH || LH, this._isIdentityDirty = !this._isIdentity && BH, this._isIdentity3x2Dirty = !this._isIdentity3x2 && AH
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, SH.e.MatrixTrackPrecisionChange && SH.e.MatrixTrackedMatrices.push(this), this._m = new SH.e.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const HH = this._m;
          this._isIdentity = 1 === HH[0] && 0 === HH[1] && 0 === HH[2] && 0 === HH[3] && 0 === HH[4] && 1 === HH[5] && 0 === HH[6] && 0 === HH[7] && 0 === HH[8] && 0 === HH[9] && 1 === HH[10] && 0 === HH[11] && 0 === HH[12] && 0 === HH[13] && 0 === HH[14] && 1 === HH[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const HH = this._m,
          BH = HH[0],
          LH = HH[1],
          AH = HH[2],
          rH = HH[3],
          SH = HH[4],
          hH = HH[5],
          tH = HH[6],
          zH = HH[7],
          CH = HH[8],
          EH = HH[9],
          XH = HH[10],
          GH = HH[11],
          YH = HH[12],
          uH = HH[13],
          QH = HH[14],
          WH = HH[15],
          MH = XH * WH - QH * GH,
          xH = EH * WH - uH * GH,
          vH = EH * QH - uH * XH,
          PH = CH * WH - YH * GH,
          TH = CH * QH - XH * YH,
          UH = CH * uH - YH * EH;
        return BH * +(hH * MH - tH * xH + zH * vH) + LH * -(SH * MH - tH * PH + zH * TH) + AH * +(SH * xH - hH * PH + zH * UH) + rH * -(SH * vH - hH * TH + tH * UH)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!HH) return this._m;
        const LH = this._m;
        for (let AH = 0; AH < 16; AH++) HH[BH + AH] = LH[AH];
        return this
      }
      xrH() {
        return this._m
      }
      SX(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QH.FromArrayToRef(HH, BH, this)
      }
      SBH() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return QH.FromArrayToRef(BH, 0, this)
      }
      set() {
        const HH = this._m;
        for (let BH = 0; BH < 16; BH++) HH[BH] = BH < 0 || arguments.length <= BH ? void 0 : arguments[BH];
        return this.markAsUpdated(), this
      }
      IHH(HH) {
        const BH = this._m;
        for (let LH = 0; LH < 16; LH++) BH[LH] = HH;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return QH.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(HH) {
        const BH = new QH;
        return this.addToRef(HH, BH), BH
      }
      addToRef(HH, BH) {
        const LH = this._m,
          AH = BH._m,
          rH = HH.m;
        for (let SH = 0; SH < 16; SH++) AH[SH] = LH[SH] + rH[SH];
        return BH.markAsUpdated(), BH
      }
      addToSelf(HH) {
        const BH = this._m,
          LH = HH.m;
        return BH[0] += LH[0], BH[1] += LH[1], BH[2] += LH[2], BH[3] += LH[3], BH[4] += LH[4], BH[5] += LH[5], BH[6] += LH[6], BH[7] += LH[7], BH[8] += LH[8], BH[9] += LH[9], BH[10] += LH[10], BH[11] += LH[11], BH[12] += LH[12], BH[13] += LH[13], BH[14] += LH[14], BH[15] += LH[15], this.markAsUpdated(), this
      }
      addInPlace(HH) {
        const BH = this._m,
          LH = HH.m;
        for (let AH = 0; AH < 16; AH++) BH[AH] += LH[AH];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const HH = this._m;
        for (let BH = 0; BH < 16; BH++) HH[BH] += BH < 0 || arguments.length <= BH ? void 0 : arguments[BH];
        return this.markAsUpdated(), this
      }
      subtract(HH) {
        const BH = this._m,
          LH = HH.m;
        for (let AH = 0; AH < 16; AH++) BH[AH] -= LH[AH];
        return this.markAsUpdated(), this
      }
      subtractToRef(HH, BH) {
        const LH = this._m,
          AH = HH.m,
          rH = BH._m;
        for (let SH = 0; SH < 16; SH++) rH[SH] = LH[SH] - AH[SH];
        return BH.markAsUpdated(), BH
      }
      grH(HH) {
        const BH = this._m,
          LH = HH.m;
        for (let AH = 0; AH < 16; AH++) BH[AH] -= LH[AH];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return this.subtractFromFloatsToRef(...BH, new QH)
      }
      subtractFromFloatsToRef() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        const AH = BH.pop(),
          rH = this._m,
          SH = AH._m,
          hH = BH;
        for (let tH = 0; tH < 16; tH++) SH[tH] = rH[tH] - hH[tH];
        return AH.markAsUpdated(), AH
      }
      invertToRef(HH) {
        return !0 === this._isIdentity ? (QH.IdentityToRef(HH), HH) : ((0, zH.d)(this, HH.xrH()) ? HH.markAsUpdated() : HH.Tm(this), HH)
      }
      addAtIndex(HH, BH) {
        return this._m[HH] += BH, this.markAsUpdated(), this
      }
      multiplyAtIndex(HH, BH) {
        return this._m[HH] *= BH, this.markAsUpdated(), this
      }
      setTranslationFromFloats(HH, BH, LH) {
        return this._m[12] = HH, this._m[13] = BH, this._m[14] = LH, this.markAsUpdated(), this
      }
      addTranslationFromFloats(HH, BH, LH) {
        return this._m[12] += HH, this._m[13] += BH, this._m[14] += LH, this.markAsUpdated(), this
      }
      setTranslation(HH) {
        return this.setTranslationFromFloats(HH._x, HH._y, HH._z)
      }
      getTranslation() {
        return new GH(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(HH) {
        return HH.x = this._m[12], HH.y = this._m[13], HH.z = this._m[14], HH
      }
      removeRotationAndScaling() {
        const HH = this.m;
        return QH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, HH[12], HH[13], HH[14], HH[15], this), this._updateIdentityStatus(0 === HH[12] && 0 === HH[13] && 0 === HH[14] && 1 === HH[15]), this
      }
      Tm(HH) {
        HH.copyToArray(this._m);
        const BH = HH;
        return this.updateFlag = BH.updateFlag, this._updateIdentityStatus(BH._isIdentity, BH._isIdentityDirty, BH._isIdentity3x2, BH._isIdentity3x2Dirty), this
      }
      copyToArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, zH.b)(this, HH, BH), this
      }
      multiply(HH) {
        const BH = new QH;
        return this.multiplyToRef(HH, BH), BH
      }
      multiplyInPlace(HH) {
        const BH = this._m,
          LH = HH.m;
        for (let AH = 0; AH < 16; AH++) BH[AH] *= LH[AH];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const HH = this._m;
        for (let BH = 0; BH < 16; BH++) HH[BH] *= BH < 0 || arguments.length <= BH ? void 0 : arguments[BH];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        const AH = BH.pop(),
          rH = this._m,
          SH = AH._m,
          hH = BH;
        for (let tH = 0; tH < 16; tH++) SH[tH] = rH[tH] * hH[tH];
        return AH.markAsUpdated(), AH
      }
      multiplyToRef(HH, BH) {
        return this._isIdentity ? (BH.Tm(HH), BH) : HH._isIdentity ? (BH.Tm(this), BH) : (this.multiplyToArray(HH, BH._m, 0), BH.markAsUpdated(), BH)
      }
      multiplyToArray(HH, BH, LH) {
        return (0, zH.p)(this, HH, BH, LH), this
      }
      divide(HH) {
        return this.divideToRef(HH, new QH)
      }
      divideToRef(HH, BH) {
        const LH = this._m,
          AH = HH.m,
          rH = BH._m;
        for (let SH = 0; SH < 16; SH++) rH[SH] = LH[SH] / AH[SH];
        return BH.markAsUpdated(), BH
      }
      divideInPlace(HH) {
        const BH = this._m,
          LH = HH.m;
        for (let AH = 0; AH < 16; AH++) BH[AH] /= LH[AH];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(HH) {
        const BH = this._m,
          LH = HH.m;
        for (let AH = 0; AH < 16; AH++) BH[AH] = Math.min(BH[AH], LH[AH]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const HH = this._m;
        for (let BH = 0; BH < 16; BH++) HH[BH] = Math.min(HH[BH], BH < 0 || arguments.length <= BH ? void 0 : arguments[BH]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(HH) {
        const BH = this._m,
          LH = HH.m;
        for (let AH = 0; AH < 16; AH++) BH[AH] = Math.max(BH[AH], LH[AH]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const HH = this._m;
        for (let BH = 0; BH < 16; BH++) HH[BH] = Math.max(HH[BH], BH < 0 || arguments.length <= BH ? void 0 : arguments[BH]);
        return this.markAsUpdated(), this
      }
      du() {
        return this.negateToRef(new QH)
      }
      negateInPlace() {
        const HH = this._m;
        for (let BH = 0; BH < 16; BH++) HH[BH] = -HH[BH];
        return this.markAsUpdated(), this
      }
      negateToRef(HH) {
        const BH = this._m,
          LH = HH._m;
        for (let AH = 0; AH < 16; AH++) LH[AH] = -BH[AH];
        return HH.markAsUpdated(), HH
      }
      equals(HH) {
        const BH = HH;
        if (!BH) return !1;
        if ((this._isIdentity || BH._isIdentity) && !this._isIdentityDirty && !BH._isIdentityDirty) return this._isIdentity && BH._isIdentity;
        const LH = this.m,
          AH = BH.m;
        return LH[0] === AH[0] && LH[1] === AH[1] && LH[2] === AH[2] && LH[3] === AH[3] && LH[4] === AH[4] && LH[5] === AH[5] && LH[6] === AH[6] && LH[7] === AH[7] && LH[8] === AH[8] && LH[9] === AH[9] && LH[10] === AH[10] && LH[11] === AH[11] && LH[12] === AH[12] && LH[13] === AH[13] && LH[14] === AH[14] && LH[15] === AH[15]
      }
      equalsWithEpsilon(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = this._m,
          AH = HH.m;
        for (let rH = 0; rH < 16; rH++)
          if (!(0, tH.WithinEpsilon)(LH[rH], AH[rH], BH)) return !1;
        return !0
      }
      dtH() {
        const HH = this._m;
        for (let BH = 0; BH < 16; BH++)
          if (HH[BH] != (BH < 0 || arguments.length <= BH ? void 0 : arguments[BH])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new QH)
      }
      floorToRef(HH) {
        const BH = this._m,
          LH = HH._m;
        for (let AH = 0; AH < 16; AH++) LH[AH] = Math.floor(BH[AH]);
        return HH.markAsUpdated(), HH
      }
      fract() {
        return this.fractToRef(new QH)
      }
      fractToRef(HH) {
        const BH = this._m,
          LH = HH._m;
        for (let AH = 0; AH < 16; AH++) LH[AH] = BH[AH] - Math.floor(BH[AH]);
        return HH.markAsUpdated(), HH
      }
      clone() {
        const HH = new QH;
        return HH.Tm(this), HH
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let HH = EH(this._m[0]);
        for (let BH = 1; BH < 16; BH++) HH = 397 * HH ^ EH(this._m[BH]);
        return HH
      }
      decomposeToTransformNode(HH) {
        return HH.rotationQuaternion = HH.rotationQuaternion || new uH, this.decompose(HH.bX, HH.rotationQuaternion, HH.position)
      }
      decompose(HH, BH, LH, AH) {
        let rH = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return LH && LH.IHH(0), HH && HH.IHH(1), BH && BH.SBH(0, 0, 0, 1), !0;
        const SH = this._m;
        if (LH && LH.SBH(SH[12], SH[13], SH[14]), (HH = HH || WH.lu[0]).x = Math.sqrt(SH[0] * SH[0] + SH[1] * SH[1] + SH[2] * SH[2]), HH.y = Math.sqrt(SH[4] * SH[4] + SH[5] * SH[5] + SH[6] * SH[6]), HH.z = Math.sqrt(SH[8] * SH[8] + SH[9] * SH[9] + SH[10] * SH[10]), AH) {
          const BH = (rH ? AH.absoluteScaling.x : AH.bX.x) < 0 ? -1 : 1,
            LH = (rH ? AH.absoluteScaling.y : AH.bX.y) < 0 ? -1 : 1,
            SH = (rH ? AH.absoluteScaling.z : AH.bX.z) < 0 ? -1 : 1;
          HH.x *= BH, HH.y *= LH, HH.z *= SH
        } else this.determinant() <= 0 && (HH.y *= -1);
        if (0 === HH._x || 0 === HH._y || 0 === HH._z) return BH && BH.SBH(0, 0, 0, 1), !1;
        if (BH) {
          const LH = 1 / HH._x,
            AH = 1 / HH._y,
            rH = 1 / HH._z;
          QH.FromValuesToRef(SH[0] * LH, SH[1] * LH, SH[2] * LH, 0, SH[4] * AH, SH[5] * AH, SH[6] * AH, 0, SH[8] * rH, SH[9] * rH, SH[10] * rH, 0, 0, 0, 0, 1, WH.Matrix[0]), uH.FromRotationMatrixToRef(WH.Matrix[0], BH)
        }
        return !0
      }
      getRow(HH) {
        if (HH < 0 || HH > 3) return null;
        const BH = 4 * HH;
        return new YH(this._m[BH + 0], this._m[BH + 1], this._m[BH + 2], this._m[BH + 3])
      }
      getRowToRef(HH, BH) {
        if (HH >= 0 && HH <= 3) {
          const LH = 4 * HH;
          BH.x = this._m[LH + 0], BH.y = this._m[LH + 1], BH.z = this._m[LH + 2], BH.w = this._m[LH + 3]
        }
        return BH
      }
      setRow(HH, BH) {
        return this.setRowFromFloats(HH, BH.x, BH.y, BH.z, BH.w)
      }
      transpose() {
        const HH = new QH;
        return QH.TransposeToRef(this, HH), HH
      }
      transposeToRef(HH) {
        return QH.TransposeToRef(this, HH), HH
      }
      setRowFromFloats(HH, BH, LH, AH, rH) {
        if (HH < 0 || HH > 3) return this;
        const SH = 4 * HH;
        return this._m[SH + 0] = BH, this._m[SH + 1] = LH, this._m[SH + 2] = AH, this._m[SH + 3] = rH, this.markAsUpdated(), this
      }
      scale(HH) {
        const BH = new QH;
        return this.scaleToRef(HH, BH), BH
      }
      scaleToRef(HH, BH) {
        for (let LH = 0; LH < 16; LH++) BH._m[LH] = this._m[LH] * HH;
        return BH.markAsUpdated(), BH
      }
      scaleAndAddToRef(HH, BH) {
        for (let LH = 0; LH < 16; LH++) BH._m[LH] += this._m[LH] * HH;
        return BH.markAsUpdated(), BH
      }
      scaleInPlace(HH) {
        const BH = this._m;
        for (let LH = 0; LH < 16; LH++) BH[LH] *= HH;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(HH) {
        const BH = WH.Matrix[0];
        this.invertToRef(BH), BH.transposeToRef(HH);
        const LH = HH._m;
        return QH.FromValuesToRef(LH[0], LH[1], LH[2], 0, LH[4], LH[5], LH[6], 0, LH[8], LH[9], LH[10], 0, 0, 0, 0, 1, HH), HH
      }
      getRotationMatrix() {
        const HH = new QH;
        return this.getRotationMatrixToRef(HH), HH
      }
      getRotationMatrixToRef(HH) {
        const BH = WH.lu[0];
        if (!this.decompose(BH)) return QH.IdentityToRef(HH), HH;
        const LH = this._m,
          AH = 1 / BH._x,
          rH = 1 / BH._y,
          SH = 1 / BH._z;
        return QH.FromValuesToRef(LH[0] * AH, LH[1] * AH, LH[2] * AH, 0, LH[4] * rH, LH[5] * rH, LH[6] * rH, 0, LH[8] * SH, LH[9] * SH, LH[10] * SH, 0, 0, 0, 0, 1, HH), HH
      }
      toggleModelMatrixHandInPlace() {
        const HH = this._m;
        return HH[2] *= -1, HH[6] *= -1, HH[8] *= -1, HH[9] *= -1, HH[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const HH = this._m;
        return HH[8] *= -1, HH[9] *= -1, HH[10] *= -1, HH[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(xH, this), this
      }
      static FromArray(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const LH = new QH;
        return QH.FromArrayToRef(HH, BH, LH), LH
      }
      static FromArrayToRef(HH, BH, LH) {
        for (let AH = 0; AH < 16; AH++) LH._m[AH] = HH[AH + BH];
        return LH.markAsUpdated(), LH
      }
      static FromFloat32ArrayToRefScaled(HH, BH, LH, AH) {
        return AH._m[0] = HH[0 + BH] * LH, AH._m[1] = HH[1 + BH] * LH, AH._m[2] = HH[2 + BH] * LH, AH._m[3] = HH[3 + BH] * LH, AH._m[4] = HH[4 + BH] * LH, AH._m[5] = HH[5 + BH] * LH, AH._m[6] = HH[6 + BH] * LH, AH._m[7] = HH[7 + BH] * LH, AH._m[8] = HH[8 + BH] * LH, AH._m[9] = HH[9 + BH] * LH, AH._m[10] = HH[10 + BH] * LH, AH._m[11] = HH[11 + BH] * LH, AH._m[12] = HH[12 + BH] * LH, AH._m[13] = HH[13 + BH] * LH, AH._m[14] = HH[14 + BH] * LH, AH._m[15] = HH[15 + BH] * LH, AH.markAsUpdated(), AH
      }
      static get IdentityReadOnly() {
        return QH._IdentityReadOnly
      }
      static FromValuesToRef(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, QH, WH) {
        const MH = WH._m;
        MH[0] = HH, MH[1] = BH, MH[2] = LH, MH[3] = AH, MH[4] = rH, MH[5] = SH, MH[6] = hH, MH[7] = tH, MH[8] = zH, MH[9] = CH, MH[10] = EH, MH[11] = XH, MH[12] = GH, MH[13] = YH, MH[14] = uH, MH[15] = QH, WH.markAsUpdated()
      }
      static FromValues(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH, YH, uH, WH) {
        const MH = new QH,
          xH = MH._m;
        return xH[0] = HH, xH[1] = BH, xH[2] = LH, xH[3] = AH, xH[4] = rH, xH[5] = SH, xH[6] = hH, xH[7] = tH, xH[8] = zH, xH[9] = CH, xH[10] = EH, xH[11] = XH, xH[12] = GH, xH[13] = YH, xH[14] = uH, xH[15] = WH, MH.markAsUpdated(), MH
      }
      static Compose(HH, BH, LH) {
        const AH = new QH;
        return QH.ComposeToRef(HH, BH, LH, AH), AH
      }
      static ComposeToRef(HH, BH, LH, AH) {
        const rH = AH._m,
          SH = BH._x,
          hH = BH._y,
          tH = BH._z,
          zH = BH._w,
          CH = SH + SH,
          EH = hH + hH,
          XH = tH + tH,
          GH = SH * CH,
          YH = SH * EH,
          uH = SH * XH,
          QH = hH * EH,
          WH = hH * XH,
          MH = tH * XH,
          xH = zH * CH,
          vH = zH * EH,
          PH = zH * XH,
          TH = HH._x,
          UH = HH._y,
          VH = HH._z;
        return rH[0] = (1 - (QH + MH)) * TH, rH[1] = (YH + PH) * TH, rH[2] = (uH - vH) * TH, rH[3] = 0, rH[4] = (YH - PH) * UH, rH[5] = (1 - (GH + MH)) * UH, rH[6] = (WH + xH) * UH, rH[7] = 0, rH[8] = (uH + vH) * VH, rH[9] = (WH - xH) * VH, rH[10] = (1 - (GH + QH)) * VH, rH[11] = 0, rH[12] = LH._x, rH[13] = LH._y, rH[14] = LH._z, rH[15] = 1, AH.markAsUpdated(), AH
      }
      static Identity() {
        const HH = QH.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return HH._updateIdentityStatus(!0), HH
      }
      static IdentityToRef(HH) {
        return QH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, HH), HH._updateIdentityStatus(!0), HH
      }
      static Zero() {
        const HH = QH.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return HH._updateIdentityStatus(!1), HH
      }
      static RotationX(HH) {
        const BH = new QH;
        return QH.RotationXToRef(HH, BH), BH
      }
      static Invert(HH) {
        const BH = new QH;
        return HH.invertToRef(BH), BH
      }
      static RotationXToRef(HH, BH) {
        const LH = Math.sin(HH),
          AH = Math.cos(HH);
        return QH.FromValuesToRef(1, 0, 0, 0, 0, AH, LH, 0, 0, -LH, AH, 0, 0, 0, 0, 1, BH), BH._updateIdentityStatus(1 === AH && 0 === LH), BH
      }
      static RotationY(HH) {
        const BH = new QH;
        return QH.RotationYToRef(HH, BH), BH
      }
      static RotationYToRef(HH, BH) {
        const LH = Math.sin(HH),
          AH = Math.cos(HH);
        return QH.FromValuesToRef(AH, 0, -LH, 0, 0, 1, 0, 0, LH, 0, AH, 0, 0, 0, 0, 1, BH), BH._updateIdentityStatus(1 === AH && 0 === LH), BH
      }
      static RotationZ(HH) {
        const BH = new QH;
        return QH.RotationZToRef(HH, BH), BH
      }
      static RotationZToRef(HH, BH) {
        const LH = Math.sin(HH),
          AH = Math.cos(HH);
        return QH.FromValuesToRef(AH, LH, 0, 0, -LH, AH, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, BH), BH._updateIdentityStatus(1 === AH && 0 === LH), BH
      }
      static RotationAxis(HH, BH) {
        const LH = new QH;
        return QH.RotationAxisToRef(HH, BH, LH), LH
      }
      static RotationAxisToRef(HH, BH, LH) {
        const AH = Math.sin(-BH),
          rH = Math.cos(-BH),
          SH = 1 - rH;
        HH = HH.normalizeToRef(WH.lu[0]);
        const hH = LH._m;
        return hH[0] = HH._x * HH._x * SH + rH, hH[1] = HH._x * HH._y * SH - HH._z * AH, hH[2] = HH._x * HH._z * SH + HH._y * AH, hH[3] = 0, hH[4] = HH._y * HH._x * SH + HH._z * AH, hH[5] = HH._y * HH._y * SH + rH, hH[6] = HH._y * HH._z * SH - HH._x * AH, hH[7] = 0, hH[8] = HH._z * HH._x * SH - HH._y * AH, hH[9] = HH._z * HH._y * SH + HH._x * AH, hH[10] = HH._z * HH._z * SH + rH, hH[11] = 0, hH[12] = 0, hH[13] = 0, hH[14] = 0, hH[15] = 1, LH.markAsUpdated(), LH
      }
      static RotationAlignToRef(HH, BH, LH) {
        let rH = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const SH = GH.Dot(BH, HH),
          hH = LH._m;
        if (SH < -1 + AH.d) hH[0] = -1, hH[1] = 0, hH[2] = 0, hH[3] = 0, hH[4] = 0, hH[5] = rH ? 1 : -1, hH[6] = 0, hH[7] = 0, hH[8] = 0, hH[9] = 0, hH[10] = rH ? -1 : 1, hH[11] = 0;
        else {
          const LH = GH.Cross(BH, HH),
            AH = 1 / (1 + SH);
          hH[0] = LH._x * LH._x * AH + SH, hH[1] = LH._y * LH._x * AH - LH._z, hH[2] = LH._z * LH._x * AH + LH._y, hH[3] = 0, hH[4] = LH._x * LH._y * AH + LH._z, hH[5] = LH._y * LH._y * AH + SH, hH[6] = LH._z * LH._y * AH - LH._x, hH[7] = 0, hH[8] = LH._x * LH._z * AH - LH._y, hH[9] = LH._y * LH._z * AH + LH._x, hH[10] = LH._z * LH._z * AH + SH, hH[11] = 0
        }
        return hH[12] = 0, hH[13] = 0, hH[14] = 0, hH[15] = 1, LH.markAsUpdated(), LH
      }
      static RotationYawPitchRoll(HH, BH, LH) {
        const AH = new QH;
        return QH.RotationYawPitchRollToRef(HH, BH, LH, AH), AH
      }
      static RotationYawPitchRollToRef(HH, BH, LH, AH) {
        return uH.RotationYawPitchRollToRef(HH, BH, LH, WH.Quaternion[0]), WH.Quaternion[0].toRotationMatrix(AH), AH
      }
      static Scaling(HH, BH, LH) {
        const AH = new QH;
        return QH.ScalingToRef(HH, BH, LH, AH), AH
      }
      static ScalingToRef(HH, BH, LH, AH) {
        return QH.FromValuesToRef(HH, 0, 0, 0, 0, BH, 0, 0, 0, 0, LH, 0, 0, 0, 0, 1, AH), AH._updateIdentityStatus(1 === HH && 1 === BH && 1 === LH), AH
      }
      static Translation(HH, BH, LH) {
        const AH = new QH;
        return QH.TranslationToRef(HH, BH, LH, AH), AH
      }
      static TranslationToRef(HH, BH, LH, AH) {
        return QH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, HH, BH, LH, 1, AH), AH._updateIdentityStatus(0 === HH && 0 === BH && 0 === LH), AH
      }
      static Lerp(HH, BH, LH) {
        const AH = new QH;
        return QH.LerpToRef(HH, BH, LH, AH), AH
      }
      static LerpToRef(HH, BH, LH, AH) {
        const rH = AH._m,
          SH = HH.m,
          hH = BH.m;
        for (let tH = 0; tH < 16; tH++) rH[tH] = SH[tH] * (1 - LH) + hH[tH] * LH;
        return AH.markAsUpdated(), AH
      }
      static DecomposeLerp(HH, BH, LH) {
        const AH = new QH;
        return QH.DecomposeLerpToRef(HH, BH, LH, AH), AH
      }
      static DecomposeLerpToRef(HH, BH, LH, AH) {
        const rH = WH.lu[0],
          SH = WH.Quaternion[0],
          hH = WH.lu[1];
        HH.decompose(rH, SH, hH);
        const tH = WH.lu[2],
          zH = WH.Quaternion[1],
          CH = WH.lu[3];
        BH.decompose(tH, zH, CH);
        const EH = WH.lu[4];
        GH.LerpToRef(rH, tH, LH, EH);
        const XH = WH.Quaternion[2];
        uH.SlerpToRef(SH, zH, LH, XH);
        const YH = WH.lu[5];
        return GH.LerpToRef(hH, CH, LH, YH), QH.ComposeToRef(EH, XH, YH, AH), AH
      }
      static LookAtLH(HH, BH, LH) {
        const AH = new QH;
        return QH.LookAtLHToRef(HH, BH, LH, AH), AH
      }
      static LookAtLHToRef(HH, BH, LH, AH) {
        const rH = WH.lu[0],
          SH = WH.lu[1],
          hH = WH.lu[2];
        BH.subtractToRef(HH, hH), hH.normalize(), GH.CrossToRef(LH, hH, rH);
        const tH = rH.lengthSquared();
        0 === tH ? rH.x = 1 : rH.normalizeFromLength(Math.sqrt(tH)), GH.CrossToRef(hH, rH, SH), SH.normalize();
        const zH = -GH.Dot(rH, HH),
          CH = -GH.Dot(SH, HH),
          EH = -GH.Dot(hH, HH);
        return QH.FromValuesToRef(rH._x, SH._x, hH._x, 0, rH._y, SH._y, hH._y, 0, rH._z, SH._z, hH._z, 0, zH, CH, EH, 1, AH), AH
      }
      static LookAtRH(HH, BH, LH) {
        const AH = new QH;
        return QH.LookAtRHToRef(HH, BH, LH, AH), AH
      }
      static LookAtRHToRef(HH, BH, LH, AH) {
        const rH = WH.lu[0],
          SH = WH.lu[1],
          hH = WH.lu[2];
        HH.subtractToRef(BH, hH), hH.normalize(), GH.CrossToRef(LH, hH, rH);
        const tH = rH.lengthSquared();
        0 === tH ? rH.x = 1 : rH.normalizeFromLength(Math.sqrt(tH)), GH.CrossToRef(hH, rH, SH), SH.normalize();
        const zH = -GH.Dot(rH, HH),
          CH = -GH.Dot(SH, HH),
          EH = -GH.Dot(hH, HH);
        return QH.FromValuesToRef(rH._x, SH._x, hH._x, 0, rH._y, SH._y, hH._y, 0, rH._z, SH._z, hH._z, 0, zH, CH, EH, 1, AH), AH
      }
      static LookDirectionLH(HH, BH) {
        const LH = new QH;
        return QH.LookDirectionLHToRef(HH, BH, LH), LH
      }
      static LookDirectionLHToRef(HH, BH, LH) {
        const AH = WH.lu[0];
        AH.Tm(HH), AH.scaleInPlace(-1);
        const rH = WH.lu[1];
        return GH.CrossToRef(BH, AH, rH), QH.FromValuesToRef(rH._x, rH._y, rH._z, 0, BH._x, BH._y, BH._z, 0, AH._x, AH._y, AH._z, 0, 0, 0, 0, 1, LH), LH
      }
      static LookDirectionRH(HH, BH) {
        const LH = new QH;
        return QH.LookDirectionRHToRef(HH, BH, LH), LH
      }
      static LookDirectionRHToRef(HH, BH, LH) {
        const AH = WH.lu[2];
        return GH.CrossToRef(BH, HH, AH), QH.FromValuesToRef(AH._x, AH._y, AH._z, 0, BH._x, BH._y, BH._z, 0, HH._x, HH._y, HH._z, 0, 0, 0, 0, 1, LH), LH
      }
      static OrthoLH(HH, BH, LH, AH, rH) {
        const SH = new QH;
        return QH.OrthoLHToRef(HH, BH, LH, AH, SH, rH), SH
      }
      static OrthoLHToRef(HH, BH, LH, AH, rH, SH) {
        const hH = 2 / HH,
          tH = 2 / BH,
          zH = 2 / (AH - LH),
          CH = -(AH + LH) / (AH - LH);
        return QH.FromValuesToRef(hH, 0, 0, 0, 0, tH, 0, 0, 0, 0, zH, 0, 0, 0, CH, 1, rH), SH && rH.multiplyToRef(xH, rH), rH._updateIdentityStatus(1 === hH && 1 === tH && 1 === zH && 0 === CH), rH
      }
      static OrthoOffCenterLH(HH, BH, LH, AH, rH, SH, hH) {
        const tH = new QH;
        return QH.OrthoOffCenterLHToRef(HH, BH, LH, AH, rH, SH, tH, hH), tH
      }
      static OrthoOffCenterLHToRef(HH, BH, LH, AH, rH, SH, hH, tH) {
        const zH = 2 / (BH - HH),
          CH = 2 / (AH - LH),
          EH = 2 / (SH - rH),
          XH = -(SH + rH) / (SH - rH),
          GH = (HH + BH) / (HH - BH),
          YH = (AH + LH) / (LH - AH);
        return QH.FromValuesToRef(zH, 0, 0, 0, 0, CH, 0, 0, 0, 0, EH, 0, GH, YH, XH, 1, hH), tH && hH.multiplyToRef(xH, hH), hH.markAsUpdated(), hH
      }
      static ObliqueOffCenterLHToRef(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
        const XH = -hH * Math.cos(tH),
          GH = -hH * Math.sin(tH);
        return QH.TranslationToRef(0, 0, -zH, WH.Matrix[1]), QH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, XH, GH, 1, 0, 0, 0, 0, 1, WH.Matrix[0]), WH.Matrix[1].multiplyToRef(WH.Matrix[0], WH.Matrix[0]), QH.TranslationToRef(0, 0, zH, WH.Matrix[1]), WH.Matrix[0].multiplyToRef(WH.Matrix[1], WH.Matrix[0]), QH.OrthoOffCenterLHToRef(HH, BH, LH, AH, rH, SH, CH, EH), WH.Matrix[0].multiplyToRef(CH, CH), CH
      }
      static OrthoOffCenterRH(HH, BH, LH, AH, rH, SH, hH) {
        const tH = new QH;
        return QH.OrthoOffCenterRHToRef(HH, BH, LH, AH, rH, SH, tH, hH), tH
      }
      static OrthoOffCenterRHToRef(HH, BH, LH, AH, rH, SH, hH, tH) {
        return QH.OrthoOffCenterLHToRef(HH, BH, LH, AH, rH, SH, hH, tH), hH._m[10] *= -1, hH
      }
      static ObliqueOffCenterRHToRef(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
        const XH = hH * Math.cos(tH),
          GH = hH * Math.sin(tH);
        return QH.TranslationToRef(0, 0, zH, WH.Matrix[1]), QH.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, XH, GH, 1, 0, 0, 0, 0, 1, WH.Matrix[0]), WH.Matrix[1].multiplyToRef(WH.Matrix[0], WH.Matrix[0]), QH.TranslationToRef(0, 0, -zH, WH.Matrix[1]), WH.Matrix[0].multiplyToRef(WH.Matrix[1], WH.Matrix[0]), QH.OrthoOffCenterRHToRef(HH, BH, LH, AH, rH, SH, CH, EH), WH.Matrix[0].multiplyToRef(CH, CH), CH
      }
      static PerspectiveLH(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const hH = new QH,
          tH = 2 * LH / HH,
          zH = 2 * LH / BH,
          CH = (AH + LH) / (AH - LH),
          EH = -2 * AH * LH / (AH - LH),
          XH = Math.tan(SH);
        return QH.FromValuesToRef(tH, 0, 0, 0, 0, zH, 0, XH, 0, 0, CH, 1, 0, 0, EH, 0, hH), rH && hH.multiplyToRef(xH, hH), hH._updateIdentityStatus(!1), hH
      }
      static PerspectiveFovLH(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const tH = new QH;
        return QH.PerspectiveFovLHToRef(HH, BH, LH, AH, tH, !0, rH, SH, hH), tH
      }
      static PerspectiveFovLHToRef(HH, BH, LH, AH, rH) {
        let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const CH = LH,
          EH = AH,
          XH = 1 / Math.tan(.5 * HH),
          GH = SH ? XH / BH : XH,
          YH = SH ? XH : XH * BH,
          uH = zH && 0 === CH ? -1 : 0 !== EH ? (EH + CH) / (EH - CH) : 1,
          WH = zH && 0 === CH ? 2 * EH : 0 !== EH ? -2 * EH * CH / (EH - CH) : -2 * CH,
          MH = Math.tan(tH);
        return QH.FromValuesToRef(GH, 0, 0, 0, 0, YH, 0, MH, 0, 0, uH, 1, 0, 0, WH, 0, rH), hH && rH.multiplyToRef(xH, rH), rH._updateIdentityStatus(!1), rH
      }
      static PerspectiveFovReverseLHToRef(HH, BH, LH, AH, rH) {
        let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const zH = 1 / Math.tan(.5 * HH),
          CH = SH ? zH / BH : zH,
          EH = SH ? zH : zH * BH,
          XH = Math.tan(tH);
        return QH.FromValuesToRef(CH, 0, 0, 0, 0, EH, 0, XH, 0, 0, -LH, 1, 0, 0, 1, 0, rH), hH && rH.multiplyToRef(xH, rH), rH._updateIdentityStatus(!1), rH
      }
      static PerspectiveFovRH(HH, BH, LH, AH, rH) {
        let SH = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hH = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const tH = new QH;
        return QH.PerspectiveFovRHToRef(HH, BH, LH, AH, tH, !0, rH, SH, hH), tH
      }
      static PerspectiveFovRHToRef(HH, BH, LH, AH, rH) {
        let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          zH = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const CH = LH,
          EH = AH,
          XH = 1 / Math.tan(.5 * HH),
          GH = SH ? XH / BH : XH,
          YH = SH ? XH : XH * BH,
          uH = zH && 0 === CH ? 1 : 0 !== EH ? -(EH + CH) / (EH - CH) : -1,
          WH = zH && 0 === CH ? 2 * EH : 0 !== EH ? -2 * EH * CH / (EH - CH) : -2 * CH,
          MH = Math.tan(tH);
        return QH.FromValuesToRef(GH, 0, 0, 0, 0, YH, 0, MH, 0, 0, uH, -1, 0, 0, WH, 0, rH), hH && rH.multiplyToRef(xH, rH), rH._updateIdentityStatus(!1), rH
      }
      static PerspectiveFovReverseRHToRef(HH, BH, LH, AH, rH) {
        let SH = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hH = arguments.length > 6 ? arguments[6] : void 0,
          tH = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const zH = 1 / Math.tan(.5 * HH),
          CH = SH ? zH / BH : zH,
          EH = SH ? zH : zH * BH,
          XH = Math.tan(tH);
        return QH.FromValuesToRef(CH, 0, 0, 0, 0, EH, 0, XH, 0, 0, -LH, -1, 0, 0, -1, 0, rH), hH && rH.multiplyToRef(xH, rH), rH._updateIdentityStatus(!1), rH
      }
      static GetFinalMatrix(HH, BH, LH, AH, rH, SH) {
        const hH = HH.width,
          tH = HH.height,
          zH = HH.x,
          CH = HH.y,
          EH = QH.FromValues(hH / 2, 0, 0, 0, 0, -tH / 2, 0, 0, 0, 0, SH - rH, 0, zH + hH / 2, tH / 2 + CH, rH, 1),
          XH = new QH;
        return BH.multiplyToRef(LH, XH), XH.multiplyToRef(AH, XH), XH.multiplyToRef(EH, XH)
      }
      static GetAsMatrix2x2(HH) {
        const BH = HH.m,
          LH = [BH[0], BH[1], BH[4], BH[5]];
        return SH.e.MatrixUse64Bits ? LH : new Float32Array(LH)
      }
      static GetAsMatrix3x3(HH) {
        const BH = HH.m,
          LH = [BH[0], BH[1], BH[2], BH[4], BH[5], BH[6], BH[8], BH[9], BH[10]];
        return SH.e.MatrixUse64Bits ? LH : new Float32Array(LH)
      }
      static Transpose(HH) {
        const BH = new QH;
        return QH.TransposeToRef(HH, BH), BH
      }
      static TransposeToRef(HH, BH) {
        const LH = HH.m,
          AH = LH[0],
          rH = LH[4],
          SH = LH[8],
          hH = LH[12],
          tH = LH[1],
          zH = LH[5],
          CH = LH[9],
          EH = LH[13],
          XH = LH[2],
          GH = LH[6],
          YH = LH[10],
          uH = LH[14],
          QH = LH[3],
          WH = LH[7],
          MH = LH[11],
          xH = LH[15],
          vH = BH._m;
        return vH[0] = AH, vH[1] = rH, vH[2] = SH, vH[3] = hH, vH[4] = tH, vH[5] = zH, vH[6] = CH, vH[7] = EH, vH[8] = XH, vH[9] = GH, vH[10] = YH, vH[11] = uH, vH[12] = QH, vH[13] = WH, vH[14] = MH, vH[15] = xH, BH.markAsUpdated(), BH._updateIdentityStatus(HH._isIdentity, HH._isIdentityDirty), BH
      }
      static Reflection(HH) {
        const BH = new QH;
        return QH.ReflectionToRef(HH, BH), BH
      }
      static ReflectionToRef(HH, BH) {
        HH.normalize();
        const LH = HH.normal.x,
          AH = HH.normal.y,
          rH = HH.normal.z,
          SH = -2 * LH,
          hH = -2 * AH,
          tH = -2 * rH;
        return QH.FromValuesToRef(SH * LH + 1, hH * LH, tH * LH, 0, SH * AH, hH * AH + 1, tH * AH, 0, SH * rH, hH * rH, tH * rH + 1, 0, SH * HH.d, hH * HH.d, tH * HH.d, 1, BH), BH
      }
      static FromXYZAxesToRef(HH, BH, LH, AH) {
        return QH.FromValuesToRef(HH._x, HH._y, HH._z, 0, BH._x, BH._y, BH._z, 0, LH._x, LH._y, LH._z, 0, 0, 0, 0, 1, AH), AH
      }
      static FromQuaternionToRef(HH, BH) {
        const LH = HH._x * HH._x,
          AH = HH._y * HH._y,
          rH = HH._z * HH._z,
          SH = HH._x * HH._y,
          hH = HH._z * HH._w,
          tH = HH._z * HH._x,
          zH = HH._y * HH._w,
          CH = HH._y * HH._z,
          EH = HH._x * HH._w;
        return BH._m[0] = 1 - 2 * (AH + rH), BH._m[1] = 2 * (SH + hH), BH._m[2] = 2 * (tH - zH), BH._m[3] = 0, BH._m[4] = 2 * (SH - hH), BH._m[5] = 1 - 2 * (rH + LH), BH._m[6] = 2 * (CH + EH), BH._m[7] = 0, BH._m[8] = 2 * (tH + zH), BH._m[9] = 2 * (CH - EH), BH._m[10] = 1 - 2 * (AH + LH), BH._m[11] = 0, BH._m[12] = 0, BH._m[13] = 0, BH._m[14] = 0, BH._m[15] = 1, BH.markAsUpdated(), BH
      }
    }
    QH._IdentityReadOnly = QH.Identity();
    class WH {}
    WH.lu = (0, rH.g)(11, GH.Zero), WH.Matrix = (0, rH.g)(2, QH.Identity), WH.Quaternion = (0, rH.g)(3, uH.Zero);
    class MH {}
    MH.Vector2 = (0, rH.g)(3, XH.Zero), MH.lu = (0, rH.g)(13, GH.Zero), MH.Vector4 = (0, rH.g)(3, YH.Zero), MH.Quaternion = (0, rH.g)(3, uH.Zero), MH.Matrix = (0, rH.g)(8, QH.Identity);
    const xH = QH.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let vH = !1;

    function PH() {
      vH || (vH = !0, Object.defineProperties(XH.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(GH.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(YH.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(uH.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(QH.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, CH.f)("BABYLON.Vector2", XH), (0, CH.f)("BABYLON.Vector3", GH), (0, CH.f)("BABYLON.Vector4", YH), (0, CH.f)("BABYLON.Matrix", QH))
    }
  },
  37997: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    const AH = "undefined" !== typeof WeakRef;
    class rH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(HH, BH, LH, AH)
      }
      initialize(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = HH, this.skipNextObservers = BH, this.target = LH, this.currentTarget = AH, this
      }
    }
    class SH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = HH, this.mask = BH, this.scope = LH, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(HH)
      }
    }
    class hH {
      static FromPromise(HH, BH) {
        const LH = new hH;
        return HH.then((HH => {
          LH.notifyObservers(HH)
        })).catch((HH => {
          if (!BH) throw HH;
          BH.notifyObservers(HH)
        })), LH
      }
      get observers() {
        return this._observers
      }
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = BH, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new rH(0), HH && (this._onObserverAdded = HH)
      }
      add(HH) {
        let BH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!HH) return null;
        const rH = new SH(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        rH.unregisterOnNextCall = LH, BH ? this._observers.unshift(rH) : this._observers.push(rH), this._onObserverAdded && this._onObserverAdded(rH), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(rH, this._lastNotifiedValue);
        const hH = AH ? new WeakRef(this) : {
          deref: () => this
        };
        return rH._remove = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const BH = hH.deref();
          BH && (HH ? BH.remove(rH) : BH._remove(rH))
        }, rH
      }
      addOnce(HH) {
        return this.add(HH, void 0, void 0, void 0, !0)
      }
      remove(HH) {
        if (!HH) return !1;
        HH._remove = null;
        return -1 !== this._observers.indexOf(HH) && (this._deferUnregister(HH), !0)
      }
      removeCallback(HH, BH) {
        for (let LH = 0; LH < this._observers.length; LH++) {
          const AH = this._observers[LH];
          if (!AH._willBeUnregistered && (AH.callback === HH && (!BH || BH === AH.scope))) return this._deferUnregister(AH), !0
        }
        return !1
      }
      _deferUnregister(HH) {
        HH._willBeUnregistered || (this._numObserversMarkedAsDeleted++, HH.unregisterOnNextCall = !1, HH._willBeUnregistered = !0, setTimeout((() => {
          this._remove(HH)
        }), 0))
      }
      _remove(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!HH) return !1;
        const LH = this._observers.indexOf(HH);
        return -1 !== LH && (BH && this._numObserversMarkedAsDeleted--, this._observers.splice(LH, 1), !0)
      }
      makeObserverTopPriority(HH) {
        this._remove(HH, !1), this._observers.unshift(HH)
      }
      makeObserverBottomPriority(HH) {
        this._remove(HH, !1), this._observers.push(HH)
      }
      notifyObservers(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = HH), !this._observers.length) return !0;
        const SH = this._eventState;
        SH.mask = BH, SH.target = LH, SH.currentTarget = AH, SH.skipNextObservers = !1, SH.lastReturnValue = HH, SH.userInfo = rH;
        for (const hH of this._observers)
          if (!hH._willBeUnregistered && (hH.mask & BH && (hH.unregisterOnNextCall && this._deferUnregister(hH), hH.scope ? SH.lastReturnValue = hH.callback.apply(hH.scope, [HH, SH]) : SH.lastReturnValue = hH.callback(HH, SH)), SH.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BH), HH._willBeUnregistered) return;
        const AH = this._eventState;
        AH.mask = LH, AH.skipNextObservers = !1, HH.unregisterOnNextCall && this._deferUnregister(HH), HH.callback(BH, AH)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const HH = this._observers.pop();
          HH && (HH._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const HH = new hH;
        return HH._observers = this._observers.slice(0), HH
      }
      hasSpecificMask() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const BH of this._observers)
          if (BH.mask & HH || BH.mask === HH) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);