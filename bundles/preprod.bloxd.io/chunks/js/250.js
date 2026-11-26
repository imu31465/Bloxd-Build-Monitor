export const id = 250;
export const ids = [250];
export const modules = {
  37841: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(37846);
    class yU {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    yU.Instances = [], yU.OnEnginesDisposedObservable = new cU.e, yU._LastCreatedScene = null, yU.UseFallbackTexture = !0, yU.FallbackTexture = ""
  },
  37834: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static SetMatrixPrecision(UU) {
        if (cU.MatrixTrackPrecisionChange = !1, UU && !cU.MatrixUse64Bits && cU.MatrixTrackedMatrices)
          for (let XU = 0; XU < cU.MatrixTrackedMatrices.length; ++XU) {
            const UU = cU.MatrixTrackedMatrices[XU],
              zU = UU._m;
            UU._m = new Array(16);
            for (let XU = 0; XU < 16; ++XU) UU._m[XU] = zU[XU]
          }
        cU.MatrixUse64Bits = UU, cU.MatrixCurrentType = cU.MatrixUse64Bits ? Array : Float32Array, cU.MatrixTrackedMatrices = null
      }
    }
    cU.MatrixUse64Bits = !1, cU.MatrixTrackPrecisionChange = !0, cU.MatrixCurrentType = Float32Array, cU.MatrixTrackedMatrices = []
  },
  37861: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      e: () => DU,
      i: () => oU,
      m: () => cU,
      o: () => QU,
      q: () => AU
    });
    class cU {}

    function yU(UU) {
      UU.updateFlag = cU._UpdateFlagSeed++
    }

    function QU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const yU = UU.cyU(),
        QU = XU.cyU(),
        AU = yU[0],
        FU = yU[1],
        oU = yU[2],
        DU = yU[3],
        EU = yU[4],
        YU = yU[5],
        NU = yU[6],
        IU = yU[7],
        pU = yU[8],
        aU = yU[9],
        tU = yU[10],
        gU = yU[11],
        kU = yU[12],
        GU = yU[13],
        BU = yU[14],
        ZU = yU[15],
        RU = QU[0],
        PU = QU[1],
        WU = QU[2],
        dU = QU[3],
        LU = QU[4],
        eU = QU[5],
        CU = QU[6],
        wU = QU[7],
        qU = QU[8],
        OU = QU[9],
        SU = QU[10],
        rU = QU[11],
        uU = QU[12],
        fU = QU[13],
        iU = QU[14],
        HU = QU[15];
      zU[cU] = AU * RU + FU * LU + oU * qU + DU * uU, zU[cU + 1] = AU * PU + FU * eU + oU * OU + DU * fU, zU[cU + 2] = AU * WU + FU * CU + oU * SU + DU * iU, zU[cU + 3] = AU * dU + FU * wU + oU * rU + DU * HU, zU[cU + 4] = EU * RU + YU * LU + NU * qU + IU * uU, zU[cU + 5] = EU * PU + YU * eU + NU * OU + IU * fU, zU[cU + 6] = EU * WU + YU * CU + NU * SU + IU * iU, zU[cU + 7] = EU * dU + YU * wU + NU * rU + IU * HU, zU[cU + 8] = pU * RU + aU * LU + tU * qU + gU * uU, zU[cU + 9] = pU * PU + aU * eU + tU * OU + gU * fU, zU[cU + 10] = pU * WU + aU * CU + tU * SU + gU * iU, zU[cU + 11] = pU * dU + aU * wU + tU * rU + gU * HU, zU[cU + 12] = kU * RU + GU * LU + BU * qU + ZU * uU, zU[cU + 13] = kU * PU + GU * eU + BU * OU + ZU * fU, zU[cU + 14] = kU * WU + GU * CU + BU * SU + ZU * iU, zU[cU + 15] = kU * dU + GU * wU + BU * rU + ZU * HU
    }

    function AU(UU, XU, zU) {
      let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      QU(UU, XU, zU.cyU(), cU), yU(zU)
    }

    function FU(UU, XU) {
      let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const cU = UU.cyU();
      XU[zU] = cU[0], XU[zU + 1] = cU[1], XU[zU + 2] = cU[2], XU[zU + 3] = cU[3], XU[zU + 4] = cU[4], XU[zU + 5] = cU[5], XU[zU + 6] = cU[6], XU[zU + 7] = cU[7], XU[zU + 8] = cU[8], XU[zU + 9] = cU[9], XU[zU + 10] = cU[10], XU[zU + 11] = cU[11], XU[zU + 12] = cU[12], XU[zU + 13] = cU[13], XU[zU + 14] = cU[14], XU[zU + 15] = cU[15]
    }

    function oU(UU, XU) {
      const zU = DU(UU, XU.cyU());
      return zU && yU(XU), zU
    }

    function DU(UU, XU) {
      const zU = UU.cyU(),
        cU = zU[0],
        yU = zU[1],
        QU = zU[2],
        AU = zU[3],
        FU = zU[4],
        oU = zU[5],
        DU = zU[6],
        EU = zU[7],
        YU = zU[8],
        NU = zU[9],
        IU = zU[10],
        pU = zU[11],
        aU = zU[12],
        tU = zU[13],
        gU = zU[14],
        kU = zU[15],
        GU = IU * kU - gU * pU,
        BU = NU * kU - tU * pU,
        ZU = NU * gU - tU * IU,
        RU = YU * kU - aU * pU,
        PU = YU * gU - IU * aU,
        WU = YU * tU - aU * NU,
        dU = +(oU * GU - DU * BU + EU * ZU),
        LU = -(FU * GU - DU * RU + EU * PU),
        eU = +(FU * BU - oU * RU + EU * WU),
        CU = -(FU * ZU - oU * PU + DU * WU),
        wU = cU * dU + yU * LU + QU * eU + AU * CU;
      if (0 === wU) return !1;
      const qU = 1 / wU,
        OU = DU * kU - gU * EU,
        SU = oU * kU - tU * EU,
        rU = oU * gU - tU * DU,
        uU = FU * kU - aU * EU,
        fU = FU * gU - aU * DU,
        iU = FU * tU - aU * oU,
        HU = DU * pU - IU * EU,
        MU = oU * pU - NU * EU,
        vU = oU * IU - NU * DU,
        VU = FU * pU - YU * EU,
        sU = FU * IU - YU * DU,
        nU = FU * NU - YU * oU,
        mU = -(yU * GU - QU * BU + AU * ZU),
        lU = +(cU * GU - QU * RU + AU * PU),
        xU = -(cU * BU - yU * RU + AU * WU),
        JU = +(cU * ZU - yU * PU + QU * WU),
        jU = +(yU * OU - QU * SU + AU * rU),
        KU = -(cU * OU - QU * uU + AU * fU),
        bU = +(cU * SU - yU * uU + AU * iU),
        TU = -(cU * rU - yU * fU + QU * iU),
        hU = -(yU * HU - QU * MU + AU * vU),
        UX = +(cU * HU - QU * VU + AU * sU),
        XX = -(cU * MU - yU * VU + AU * nU),
        zX = +(cU * vU - yU * sU + QU * nU);
      return XU[0] = dU * qU, XU[1] = mU * qU, XU[2] = jU * qU, XU[3] = hU * qU, XU[4] = LU * qU, XU[5] = lU * qU, XU[6] = KU * qU, XU[7] = UX * qU, XU[8] = eU * qU, XU[9] = xU * qU, XU[10] = bU * qU, XU[11] = XX * qU, XU[12] = CU * qU, XU[13] = JU * qU, XU[14] = TU * qU, XU[15] = zX * qU, !0
    }
    cU._UpdateFlagSeed = 0
  },
  37819: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => aU,
      f: () => pU,
      h: () => BU,
      l: () => gU,
      m: () => YU,
      q: () => NU,
      t: () => IU
    });
    var cU = zU(37825),
      yU = zU(37827),
      QU = zU(37834),
      AU = zU(37841),
      FU = zU(37855),
      oU = zU(37861),
      DU = zU(37863);
    const EU = UU => parseInt(UU.toString().replace(/\W/g, ""));
    class YU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = UU, this.y = XU
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let UU = EU(this.x);
        return UU = 397 * UU ^ EU(this.y), UU
      }
      toArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[XU] = this.x, UU[XU + 1] = this.y, this
      }
      zY(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YU.FromArrayToRef(UU, XU, this), this
      }
      cyU() {
        return [this.x, this.y]
      }
      YL(UU) {
        return this.x = UU.x, this.y = UU.y, this
      }
      sUU(UU, XU) {
        return this.x = UU, this.y = XU, this
      }
      set(UU, XU) {
        return this.sUU(UU, XU)
      }
      IUU(UU) {
        return this.sUU(UU, UU)
      }
      add(UU) {
        return new YU(this.x + UU.x, this.y + UU.y)
      }
      addToRef(UU, XU) {
        return XU.x = this.x + UU.x, XU.y = this.y + UU.y, XU
      }
      addInPlace(UU) {
        return this.x += UU.x, this.y += UU.y, this
      }
      addInPlaceFromFloats(UU, XU) {
        return this.x += UU, this.y += XU, this
      }
      addVector3(UU) {
        return new YU(this.x + UU.x, this.y + UU.y)
      }
      subtract(UU) {
        return new YU(this.x - UU.x, this.y - UU.y)
      }
      subtractToRef(UU, XU) {
        return XU.x = this.x - UU.x, XU.y = this.y - UU.y, XU
      }
      ZyU(UU) {
        return this.x -= UU.x, this.y -= UU.y, this
      }
      multiplyInPlace(UU) {
        return this.x *= UU.x, this.y *= UU.y, this
      }
      multiply(UU) {
        return new YU(this.x * UU.x, this.y * UU.y)
      }
      multiplyToRef(UU, XU) {
        return XU.x = this.x * UU.x, XU.y = this.y * UU.y, XU
      }
      multiplyByFloats(UU, XU) {
        return new YU(this.x * UU, this.y * XU)
      }
      divide(UU) {
        return new YU(this.x / UU.x, this.y / UU.y)
      }
      divideToRef(UU, XU) {
        return XU.x = this.x / UU.x, XU.y = this.y / UU.y, XU
      }
      divideInPlace(UU) {
        return this.x = this.x / UU.x, this.y = this.y / UU.y, this
      }
      minimizeInPlace(UU) {
        return this.minimizeInPlaceFromFloats(UU.x, UU.y)
      }
      maximizeInPlace(UU) {
        return this.maximizeInPlaceFromFloats(UU.x, UU.y)
      }
      minimizeInPlaceFromFloats(UU, XU) {
        return this.x = Math.min(UU, this.x), this.y = Math.min(XU, this.y), this
      }
      maximizeInPlaceFromFloats(UU, XU) {
        return this.x = Math.max(UU, this.x), this.y = Math.max(XU, this.y), this
      }
      subtractFromFloats(UU, XU) {
        return new YU(this.x - UU, this.y - XU)
      }
      subtractFromFloatsToRef(UU, XU, zU) {
        return zU.x = this.x - UU, zU.y = this.y - XU, zU
      }
      fp() {
        return new YU(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(UU) {
        return UU.x = -this.x, UU.y = -this.y, UU
      }
      scaleInPlace(UU) {
        return this.x *= UU, this.y *= UU, this
      }
      scale(UU) {
        return new YU(this.x * UU, this.y * UU)
      }
      scaleToRef(UU, XU) {
        return XU.x = this.x * UU, XU.y = this.y * UU, XU
      }
      scaleAndAddToRef(UU, XU) {
        return XU.x += this.x * UU, XU.y += this.y * UU, XU
      }
      equals(UU) {
        return UU && this.x === UU.x && this.y === UU.y
      }
      equalsWithEpsilon(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU.c;
        return UU && (0, FU.WithinEpsilon)(this.x, UU.x, XU) && (0, FU.WithinEpsilon)(this.y, UU.y, XU)
      }
      SFU(UU, XU) {
        return this.x === UU && this.y === XU
      }
      floor() {
        return new YU(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(UU) {
        return UU.x = Math.floor(this.x), UU.y = Math.floor(this.y), UU
      }
      fract() {
        return new YU(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(UU) {
        return UU.x = this.x - Math.floor(this.x), UU.y = this.y - Math.floor(this.y), UU
      }
      rotate(UU) {
        return this.rotateToRef(UU, new YU)
      }
      rotateToRef(UU, XU) {
        const zU = Math.cos(UU),
          cU = Math.sin(UU);
        return XU.x = zU * this.x - cU * this.y, XU.y = cU * this.x + zU * this.y, XU
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
      normalizeFromLength(UU) {
        return 0 === UU || 1 === UU ? this : this.scaleInPlace(1 / UU)
      }
      normalizeToNew() {
        const UU = new YU;
        return this.normalizeToRef(UU), UU
      }
      normalizeToRef(UU) {
        const XU = this.length();
        return 0 === XU || 1 === XU ? (UU.x = this.x, UU.y = this.y, UU) : this.scaleToRef(1 / XU, UU)
      }
      clone() {
        return new YU(this.x, this.y)
      }
      dot(UU) {
        return this.x * UU.x + this.y * UU.y
      }
      static Zero() {
        return new YU(0, 0)
      }
      static One() {
        return new YU(1, 1)
      }
      static Random() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new YU((0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU))
      }
      static RandomToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).sUU((0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU))
      }
      static get ZeroReadOnly() {
        return YU._ZeroReadOnly
      }
      static FromArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new YU(UU[XU], UU[XU + 1])
      }
      static FromArrayToRef(UU, XU, zU) {
        return zU.x = UU[XU], zU.y = UU[XU + 1], zU
      }
      static FromFloatsToRef(UU, XU, zU) {
        return zU.sUU(UU, XU), zU
      }
      static CatmullRom(UU, XU, zU, cU, yU) {
        const QU = yU * yU,
          AU = yU * QU,
          FU = .5 * (2 * XU.x + (-UU.x + zU.x) * yU + (2 * UU.x - 5 * XU.x + 4 * zU.x - cU.x) * QU + (-UU.x + 3 * XU.x - 3 * zU.x + cU.x) * AU),
          oU = .5 * (2 * XU.y + (-UU.y + zU.y) * yU + (2 * UU.y - 5 * XU.y + 4 * zU.y - cU.y) * QU + (-UU.y + 3 * XU.y - 3 * zU.y + cU.y) * AU);
        return new YU(FU, oU)
      }
      static ClampToRef(UU, XU, zU, cU) {
        return cU.x = (0, FU.Clamp)(UU.x, XU.x, zU.x), cU.y = (0, FU.Clamp)(UU.y, XU.y, zU.y), cU
      }
      static Clamp(UU, XU, zU) {
        const cU = (0, FU.Clamp)(UU.x, XU.x, zU.x),
          yU = (0, FU.Clamp)(UU.y, XU.y, zU.y);
        return new YU(cU, yU)
      }
      static Hermite(UU, XU, zU, cU, yU) {
        const QU = yU * yU,
          AU = yU * QU,
          FU = 2 * AU - 3 * QU + 1,
          oU = -2 * AU + 3 * QU,
          DU = AU - 2 * QU + yU,
          EU = AU - QU,
          NU = UU.x * FU + zU.x * oU + XU.x * DU + cU.x * EU,
          IU = UU.y * FU + zU.y * oU + XU.y * DU + cU.y * EU;
        return new YU(NU, IU)
      }
      static Hermite1stDerivative(UU, XU, zU, cU, yU) {
        return this.Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, new YU)
      }
      static Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU) {
        const AU = yU * yU;
        return QU.x = 6 * (AU - yU) * UU.x + (3 * AU - 4 * yU + 1) * XU.x + 6 * (-AU + yU) * zU.x + (3 * AU - 2 * yU) * cU.x, QU.y = 6 * (AU - yU) * UU.y + (3 * AU - 4 * yU + 1) * XU.y + 6 * (-AU + yU) * zU.y + (3 * AU - 2 * yU) * cU.y, QU
      }
      static Lerp(UU, XU, zU) {
        return YU.LerpToRef(UU, XU, zU, new YU)
      }
      static LerpToRef(UU, XU, zU, cU) {
        return cU.x = UU.x + (XU.x - UU.x) * zU, cU.y = UU.y + (XU.y - UU.y) * zU, cU
      }
      static Dot(UU, XU) {
        return UU.x * XU.x + UU.y * XU.y
      }
      static Normalize(UU) {
        return YU.NormalizeToRef(UU, new YU)
      }
      static NormalizeToRef(UU, XU) {
        return UU.normalizeToRef(XU), XU
      }
      static Minimize(UU, XU) {
        const zU = UU.x < XU.x ? UU.x : XU.x,
          cU = UU.y < XU.y ? UU.y : XU.y;
        return new YU(zU, cU)
      }
      static Maximize(UU, XU) {
        const zU = UU.x > XU.x ? UU.x : XU.x,
          cU = UU.y > XU.y ? UU.y : XU.y;
        return new YU(zU, cU)
      }
      static Transform(UU, XU) {
        return YU.TransformToRef(UU, XU, new YU)
      }
      static TransformToRef(UU, XU, zU) {
        const cU = XU.m,
          yU = UU.x * cU[0] + UU.y * cU[4] + cU[12],
          QU = UU.x * cU[1] + UU.y * cU[5] + cU[13];
        return zU.x = yU, zU.y = QU, zU
      }
      static PointInTriangle(UU, XU, zU, cU) {
        const yU = .5 * (-zU.y * cU.x + XU.y * (-zU.x + cU.x) + XU.x * (zU.y - cU.y) + zU.x * cU.y),
          QU = yU < 0 ? -1 : 1,
          AU = (XU.y * cU.x - XU.x * cU.y + (cU.y - XU.y) * UU.x + (XU.x - cU.x) * UU.y) * QU,
          FU = (XU.x * zU.y - XU.y * zU.x + (XU.y - zU.y) * UU.x + (zU.x - XU.x) * UU.y) * QU;
        return AU > 0 && FU > 0 && AU + FU < 2 * yU * QU
      }
      static Distance(UU, XU) {
        return Math.sqrt(YU.DistanceSquared(UU, XU))
      }
      static DistanceSquared(UU, XU) {
        const zU = UU.x - XU.x,
          cU = UU.y - XU.y;
        return zU * zU + cU * cU
      }
      static Center(UU, XU) {
        return YU.CenterToRef(UU, XU, new YU)
      }
      static CenterToRef(UU, XU, zU) {
        return zU.sUU((UU.x + XU.x) / 2, (UU.y + XU.y) / 2)
      }
      static DistanceOfPointFromSegment(UU, XU, zU) {
        const cU = YU.DistanceSquared(XU, zU);
        if (0 === cU) return YU.Distance(UU, XU);
        const yU = zU.subtract(XU),
          QU = Math.max(0, Math.min(1, YU.Dot(UU.subtract(XU), yU) / cU)),
          AU = XU.add(yU.multiplyByFloats(QU, QU));
        return YU.Distance(UU, AU)
      }
    }
    YU._V8PerformanceHack = new YU(.5, .5), YU._ZeroReadOnly = YU.Zero();
    class NU {
      get x() {
        return this._x
      }
      set x(UU) {
        this._x = UU, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(UU) {
        this._y = UU, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(UU) {
        this._z = UU, this._isDirty = !0
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = UU, this._y = XU, this._z = zU
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Sp"
      }
      getHashCode() {
        let UU = EU(this._x);
        return UU = 397 * UU ^ EU(this._y), UU = 397 * UU ^ EU(this._z), UU
      }
      cyU() {
        return [this._x, this._y, this._z]
      }
      toArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[XU] = this._x, UU[XU + 1] = this._y, UU[XU + 2] = this._z, this
      }
      zY(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return NU.FromArrayToRef(UU, XU, this), this
      }
      toQuaternion() {
        return pU.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(UU) {
        return this._x += UU._x, this._y += UU._y, this._z += UU._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(UU, XU, zU) {
        return this._x += UU, this._y += XU, this._z += zU, this._isDirty = !0, this
      }
      add(UU) {
        return new NU(this._x + UU._x, this._y + UU._y, this._z + UU._z)
      }
      addToRef(UU, XU) {
        return XU._x = this._x + UU._x, XU._y = this._y + UU._y, XU._z = this._z + UU._z, XU._isDirty = !0, XU
      }
      ZyU(UU) {
        return this._x -= UU._x, this._y -= UU._y, this._z -= UU._z, this._isDirty = !0, this
      }
      subtract(UU) {
        return new NU(this._x - UU._x, this._y - UU._y, this._z - UU._z)
      }
      subtractToRef(UU, XU) {
        return this.subtractFromFloatsToRef(UU._x, UU._y, UU._z, XU)
      }
      subtractFromFloats(UU, XU, zU) {
        return new NU(this._x - UU, this._y - XU, this._z - zU)
      }
      subtractFromFloatsToRef(UU, XU, zU, cU) {
        return cU._x = this._x - UU, cU._y = this._y - XU, cU._z = this._z - zU, cU._isDirty = !0, cU
      }
      fp() {
        return new NU(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(UU) {
        return UU._x = -1 * this._x, UU._y = -1 * this._y, UU._z = -1 * this._z, UU._isDirty = !0, UU
      }
      scaleInPlace(UU) {
        return this._x *= UU, this._y *= UU, this._z *= UU, this._isDirty = !0, this
      }
      scale(UU) {
        return new NU(this._x * UU, this._y * UU, this._z * UU)
      }
      scaleToRef(UU, XU) {
        return XU._x = this._x * UU, XU._y = this._y * UU, XU._z = this._z * UU, XU._isDirty = !0, XU
      }
      getNormalToRef(UU) {
        const XU = this.length();
        let zU = Math.acos(this._y / XU);
        const cU = Math.atan2(this._z, this._x);
        zU > Math.PI / 2 ? zU -= Math.PI / 2 : zU += Math.PI / 2;
        const yU = XU * Math.sin(zU) * Math.cos(cU),
          QU = XU * Math.cos(zU),
          AU = XU * Math.sin(zU) * Math.sin(cU);
        return UU.set(yU, QU, AU), UU
      }
      applyRotationQuaternionToRef(UU, XU) {
        const zU = this._x,
          cU = this._y,
          yU = this._z,
          QU = UU._x,
          AU = UU._y,
          FU = UU._z,
          oU = UU._w,
          DU = 2 * (AU * yU - FU * cU),
          EU = 2 * (FU * zU - QU * yU),
          YU = 2 * (QU * cU - AU * zU);
        return XU._x = zU + oU * DU + AU * YU - FU * EU, XU._y = cU + oU * EU + FU * DU - QU * YU, XU._z = yU + oU * YU + QU * EU - AU * DU, XU._isDirty = !0, XU
      }
      applyRotationQuaternionInPlace(UU) {
        return this.applyRotationQuaternionToRef(UU, this)
      }
      applyRotationQuaternion(UU) {
        return this.applyRotationQuaternionToRef(UU, new NU)
      }
      scaleAndAddToRef(UU, XU) {
        return XU._x += this._x * UU, XU._y += this._y * UU, XU._z += this._z * UU, XU._isDirty = !0, XU
      }
      projectOnPlane(UU, XU) {
        return this.projectOnPlaneToRef(UU, XU, new NU)
      }
      projectOnPlaneToRef(UU, XU, zU) {
        const cU = UU.normal,
          yU = UU.d,
          QU = tU.Sp[0];
        this.subtractToRef(XU, QU), QU.normalize();
        const AU = NU.Dot(QU, cU);
        if (Math.abs(AU) < 1e-10) zU.IUU(1 / 0);
        else {
          const UU = -(NU.Dot(XU, cU) + yU) / AU,
            FU = QU.scaleInPlace(UU);
          XU.addToRef(FU, zU)
        }
        return zU
      }
      equals(UU) {
        return UU && this._x === UU._x && this._y === UU._y && this._z === UU._z
      }
      equalsWithEpsilon(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU.c;
        return UU && (0, FU.WithinEpsilon)(this._x, UU._x, XU) && (0, FU.WithinEpsilon)(this._y, UU._y, XU) && (0, FU.WithinEpsilon)(this._z, UU._z, XU)
      }
      SFU(UU, XU, zU) {
        return this._x === UU && this._y === XU && this._z === zU
      }
      multiplyInPlace(UU) {
        return this._x *= UU._x, this._y *= UU._y, this._z *= UU._z, this._isDirty = !0, this
      }
      multiply(UU) {
        return this.multiplyByFloats(UU._x, UU._y, UU._z)
      }
      multiplyToRef(UU, XU) {
        return XU._x = this._x * UU._x, XU._y = this._y * UU._y, XU._z = this._z * UU._z, XU._isDirty = !0, XU
      }
      multiplyByFloats(UU, XU, zU) {
        return new NU(this._x * UU, this._y * XU, this._z * zU)
      }
      divide(UU) {
        return new NU(this._x / UU._x, this._y / UU._y, this._z / UU._z)
      }
      divideToRef(UU, XU) {
        return XU._x = this._x / UU._x, XU._y = this._y / UU._y, XU._z = this._z / UU._z, XU._isDirty = !0, XU
      }
      divideInPlace(UU) {
        return this._x = this._x / UU._x, this._y = this._y / UU._y, this._z = this._z / UU._z, this._isDirty = !0, this
      }
      minimizeInPlace(UU) {
        return this.minimizeInPlaceFromFloats(UU._x, UU._y, UU._z)
      }
      maximizeInPlace(UU) {
        return this.maximizeInPlaceFromFloats(UU._x, UU._y, UU._z)
      }
      minimizeInPlaceFromFloats(UU, XU, zU) {
        return UU < this._x && (this.x = UU), XU < this._y && (this.y = XU), zU < this._z && (this.z = zU), this
      }
      maximizeInPlaceFromFloats(UU, XU, zU) {
        return UU > this._x && (this.x = UU), XU > this._y && (this.y = XU), zU > this._z && (this.z = zU), this
      }
      isNonUniformWithinEpsilon(UU) {
        const XU = Math.abs(this._x),
          zU = Math.abs(this._y);
        if (!(0, FU.WithinEpsilon)(XU, zU, UU)) return !0;
        const cU = Math.abs(this._z);
        return !(0, FU.WithinEpsilon)(XU, cU, UU) || !(0, FU.WithinEpsilon)(zU, cU, UU)
      }
      get isNonUniform() {
        const UU = Math.abs(this._x);
        if (UU !== Math.abs(this._y)) return !0;
        return UU !== Math.abs(this._z)
      }
      floorToRef(UU) {
        return UU._x = Math.floor(this._x), UU._y = Math.floor(this._y), UU._z = Math.floor(this._z), UU._isDirty = !0, UU
      }
      floor() {
        return new NU(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(UU) {
        return UU._x = this._x - Math.floor(this._x), UU._y = this._y - Math.floor(this._y), UU._z = this._z - Math.floor(this._z), UU._isDirty = !0, UU
      }
      fract() {
        return new NU(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(UU) {
        if ("xyz" === (UU = UU.toLowerCase())) return this;
        const XU = tU.Sp[0].YL(this);
        return this.x = XU[UU[0]], this.y = XU[UU[1]], this.z = XU[UU[2]], this
      }
      rotateByQuaternionToRef(UU, XU) {
        return UU.toRotationMatrix(tU.Matrix[0]), NU.TransformCoordinatesToRef(this, tU.Matrix[0], XU), XU
      }
      rotateByQuaternionAroundPointToRef(UU, XU, zU) {
        return this.subtractToRef(XU, tU.Sp[0]), tU.Sp[0].rotateByQuaternionToRef(UU, tU.Sp[0]), XU.addToRef(tU.Sp[0], zU), zU
      }
      cross(UU) {
        return NU.CrossToRef(this, UU, new NU)
      }
      normalizeFromLength(UU) {
        return 0 === UU || 1 === UU ? this : this.scaleInPlace(1 / UU)
      }
      normalizeToNew() {
        return this.normalizeToRef(new NU)
      }
      normalizeToRef(UU) {
        const XU = this.length();
        return 0 === XU || 1 === XU ? (UU._x = this._x, UU._y = this._y, UU._z = this._z, UU._isDirty = !0, UU) : this.scaleToRef(1 / XU, UU)
      }
      clone() {
        return new NU(this._x, this._y, this._z)
      }
      YL(UU) {
        return this.sUU(UU._x, UU._y, UU._z)
      }
      sUU(UU, XU, zU) {
        return this._x = UU, this._y = XU, this._z = zU, this._isDirty = !0, this
      }
      set(UU, XU, zU) {
        return this.sUU(UU, XU, zU)
      }
      IUU(UU) {
        return this._x = this._y = this._z = UU, this._isDirty = !0, this
      }
      static GetClipFactor(UU, XU, zU, cU) {
        const yU = NU.Dot(UU, zU);
        return (yU - cU) / (yU - NU.Dot(XU, zU))
      }
      static GetAngleBetweenVectors(UU, XU, zU) {
        const cU = UU.normalizeToRef(tU.Sp[1]),
          yU = XU.normalizeToRef(tU.Sp[2]);
        let QU = NU.Dot(cU, yU);
        QU = (0, FU.Clamp)(QU, -1, 1);
        const AU = Math.acos(QU),
          oU = tU.Sp[3];
        return NU.CrossToRef(cU, yU, oU), NU.Dot(oU, zU) > 0 ? isNaN(AU) ? 0 : AU : isNaN(AU) ? -Math.PI : -Math.acos(QU)
      }
      static GetAngleBetweenVectorsOnPlane(UU, XU, zU) {
        tU.Sp[0].YL(UU);
        const cU = tU.Sp[0];
        tU.Sp[1].YL(XU);
        const yU = tU.Sp[1];
        tU.Sp[2].YL(zU);
        const QU = tU.Sp[2],
          AU = tU.Sp[3],
          oU = tU.Sp[4];
        cU.normalize(), yU.normalize(), QU.normalize(), NU.CrossToRef(QU, cU, AU), NU.CrossToRef(AU, QU, oU);
        const DU = Math.atan2(NU.Dot(yU, AU), NU.Dot(yU, oU));
        return (0, FU.NormalizeRadians)(DU)
      }
      static PitchYawRollToMoveBetweenPointsToRef(UU, XU, zU) {
        const cU = gU.Sp[0];
        return XU.subtractToRef(UU, cU), zU._y = Math.atan2(cU.x, cU.z) || 0, zU._x = Math.atan2(Math.sqrt(cU.x ** 2 + cU.z ** 2), cU.y) || 0, zU._z = 0, zU._isDirty = !0, zU
      }
      static PitchYawRollToMoveBetweenPoints(UU, XU) {
        const zU = NU.Zero();
        return NU.PitchYawRollToMoveBetweenPointsToRef(UU, XU, zU)
      }
      static SlerpToRef(UU, XU, zU, yU) {
        zU = (0, FU.Clamp)(zU, 0, 1);
        const QU = tU.Sp[0],
          AU = tU.Sp[1];
        QU.YL(UU);
        const oU = QU.length();
        QU.normalizeFromLength(oU), AU.YL(XU);
        const DU = AU.length();
        AU.normalizeFromLength(DU);
        const EU = NU.Dot(QU, AU);
        let YU, IU;
        if (EU < 1 - cU.c) {
          const UU = Math.acos(EU),
            XU = 1 / Math.sin(UU);
          YU = Math.sin((1 - zU) * UU) * XU, IU = Math.sin(zU * UU) * XU
        } else YU = 1 - zU, IU = zU;
        return QU.scaleInPlace(YU), AU.scaleInPlace(IU), yU.YL(QU).addInPlace(AU), yU.scaleInPlace((0, FU.Lerp)(oU, DU, zU)), yU
      }
      static SmoothToRef(UU, XU, zU, cU, yU) {
        return NU.SlerpToRef(UU, XU, 0 === cU ? 1 : zU / cU, yU), yU
      }
      static FromArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new NU(UU[XU], UU[XU + 1], UU[XU + 2])
      }
      static FromFloatArray(UU, XU) {
        return NU.FromArray(UU, XU)
      }
      static FromArrayToRef(UU, XU, zU) {
        return zU._x = UU[XU], zU._y = UU[XU + 1], zU._z = UU[XU + 2], zU._isDirty = !0, zU
      }
      static FromFloatArrayToRef(UU, XU, zU) {
        return NU.FromArrayToRef(UU, XU, zU)
      }
      static FromFloatsToRef(UU, XU, zU, cU) {
        return cU.sUU(UU, XU, zU), cU
      }
      static Zero() {
        return new NU(0, 0, 0)
      }
      static One() {
        return new NU(1, 1, 1)
      }
      static Up() {
        return new NU(0, 1, 0)
      }
      static get UpReadOnly() {
        return NU._UpReadOnly
      }
      static get DownReadOnly() {
        return NU._DownReadOnly
      }
      static get RightReadOnly() {
        return NU._RightReadOnly
      }
      static get LeftReadOnly() {
        return NU._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return NU._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return NU._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return NU._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return NU._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return NU._ZeroReadOnly
      }
      static get OneReadOnly() {
        return NU._OneReadOnly
      }
      static Down() {
        return new NU(0, -1, 0)
      }
      static Forward() {
        return new NU(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new NU(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new NU(1, 0, 0)
      }
      static Left() {
        return new NU(-1, 0, 0)
      }
      static Random() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new NU((0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU))
      }
      static RandomToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).sUU((0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU))
      }
      static TransformCoordinates(UU, XU) {
        const zU = NU.Zero();
        return NU.TransformCoordinatesToRef(UU, XU, zU), zU
      }
      static TransformCoordinatesToRef(UU, XU, zU) {
        return NU.TransformCoordinatesFromFloatsToRef(UU._x, UU._y, UU._z, XU, zU), zU
      }
      static TransformCoordinatesFromFloatsToRef(UU, XU, zU, cU, yU) {
        const QU = cU.m,
          AU = UU * QU[0] + XU * QU[4] + zU * QU[8] + QU[12],
          FU = UU * QU[1] + XU * QU[5] + zU * QU[9] + QU[13],
          oU = UU * QU[2] + XU * QU[6] + zU * QU[10] + QU[14],
          DU = 1 / (UU * QU[3] + XU * QU[7] + zU * QU[11] + QU[15]);
        return yU._x = AU * DU, yU._y = FU * DU, yU._z = oU * DU, yU._isDirty = !0, yU
      }
      static TransformNormal(UU, XU) {
        const zU = NU.Zero();
        return NU.TransformNormalToRef(UU, XU, zU), zU
      }
      static TransformNormalToRef(UU, XU, zU) {
        return this.TransformNormalFromFloatsToRef(UU._x, UU._y, UU._z, XU, zU), zU
      }
      static TransformNormalFromFloatsToRef(UU, XU, zU, cU, yU) {
        const QU = cU.m;
        return yU._x = UU * QU[0] + XU * QU[4] + zU * QU[8], yU._y = UU * QU[1] + XU * QU[5] + zU * QU[9], yU._z = UU * QU[2] + XU * QU[6] + zU * QU[10], yU._isDirty = !0, yU
      }
      static CatmullRom(UU, XU, zU, cU, yU) {
        const QU = yU * yU,
          AU = yU * QU,
          FU = .5 * (2 * XU._x + (-UU._x + zU._x) * yU + (2 * UU._x - 5 * XU._x + 4 * zU._x - cU._x) * QU + (-UU._x + 3 * XU._x - 3 * zU._x + cU._x) * AU),
          oU = .5 * (2 * XU._y + (-UU._y + zU._y) * yU + (2 * UU._y - 5 * XU._y + 4 * zU._y - cU._y) * QU + (-UU._y + 3 * XU._y - 3 * zU._y + cU._y) * AU),
          DU = .5 * (2 * XU._z + (-UU._z + zU._z) * yU + (2 * UU._z - 5 * XU._z + 4 * zU._z - cU._z) * QU + (-UU._z + 3 * XU._z - 3 * zU._z + cU._z) * AU);
        return new NU(FU, oU, DU)
      }
      static Clamp(UU, XU, zU) {
        const cU = new NU;
        return NU.ClampToRef(UU, XU, zU, cU), cU
      }
      static ClampToRef(UU, XU, zU, cU) {
        let yU = UU._x;
        yU = yU > zU._x ? zU._x : yU, yU = yU < XU._x ? XU._x : yU;
        let QU = UU._y;
        QU = QU > zU._y ? zU._y : QU, QU = QU < XU._y ? XU._y : QU;
        let AU = UU._z;
        return AU = AU > zU._z ? zU._z : AU, AU = AU < XU._z ? XU._z : AU, cU.sUU(yU, QU, AU), cU
      }
      static CheckExtends(UU, XU, zU) {
        XU.minimizeInPlace(UU), zU.maximizeInPlace(UU)
      }
      static Hermite(UU, XU, zU, cU, yU) {
        const QU = yU * yU,
          AU = yU * QU,
          FU = 2 * AU - 3 * QU + 1,
          oU = -2 * AU + 3 * QU,
          DU = AU - 2 * QU + yU,
          EU = AU - QU,
          YU = UU._x * FU + zU._x * oU + XU._x * DU + cU._x * EU,
          IU = UU._y * FU + zU._y * oU + XU._y * DU + cU._y * EU,
          pU = UU._z * FU + zU._z * oU + XU._z * DU + cU._z * EU;
        return new NU(YU, IU, pU)
      }
      static Hermite1stDerivative(UU, XU, zU, cU, yU) {
        const QU = new NU;
        return this.Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU), QU
      }
      static Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU) {
        const AU = yU * yU;
        return QU._x = 6 * (AU - yU) * UU._x + (3 * AU - 4 * yU + 1) * XU._x + 6 * (-AU + yU) * zU._x + (3 * AU - 2 * yU) * cU._x, QU._y = 6 * (AU - yU) * UU._y + (3 * AU - 4 * yU + 1) * XU._y + 6 * (-AU + yU) * zU._y + (3 * AU - 2 * yU) * cU._y, QU._z = 6 * (AU - yU) * UU._z + (3 * AU - 4 * yU + 1) * XU._z + 6 * (-AU + yU) * zU._z + (3 * AU - 2 * yU) * cU._z, QU._isDirty = !0, QU
      }
      static Lerp(UU, XU, zU) {
        const cU = new NU(0, 0, 0);
        return NU.LerpToRef(UU, XU, zU, cU), cU
      }
      static LerpToRef(UU, XU, zU, cU) {
        return cU._x = UU._x + (XU._x - UU._x) * zU, cU._y = UU._y + (XU._y - UU._y) * zU, cU._z = UU._z + (XU._z - UU._z) * zU, cU._isDirty = !0, cU
      }
      static Dot(UU, XU) {
        return UU._x * XU._x + UU._y * XU._y + UU._z * XU._z
      }
      dot(UU) {
        return this._x * UU._x + this._y * UU._y + this._z * UU._z
      }
      static Cross(UU, XU) {
        const zU = new NU;
        return NU.CrossToRef(UU, XU, zU), zU
      }
      static CrossToRef(UU, XU, zU) {
        const cU = UU._y * XU._z - UU._z * XU._y,
          yU = UU._z * XU._x - UU._x * XU._z,
          QU = UU._x * XU._y - UU._y * XU._x;
        return zU.sUU(cU, yU, QU), zU
      }
      static Normalize(UU) {
        const XU = NU.Zero();
        return NU.NormalizeToRef(UU, XU), XU
      }
      static NormalizeToRef(UU, XU) {
        return UU.normalizeToRef(XU), XU
      }
      static Project(UU, XU, zU, cU) {
        const yU = new NU;
        return NU.ProjectToRef(UU, XU, zU, cU, yU), yU
      }
      static ProjectToRef(UU, XU, zU, cU, yU) {
        const QU = cU.width,
          FU = cU.height,
          oU = cU.x,
          DU = cU.y,
          EU = tU.Matrix[1],
          YU = AU.b.LastCreatedEngine?.isNDCHalfZRange,
          IU = YU ? 1 : .5,
          pU = YU ? 0 : .5;
        aU.FromValuesToRef(QU / 2, 0, 0, 0, 0, -FU / 2, 0, 0, 0, 0, IU, 0, oU + QU / 2, FU / 2 + DU, pU, 1, EU);
        const gU = tU.Matrix[0];
        return XU.multiplyToRef(zU, gU), gU.multiplyToRef(EU, gU), NU.TransformCoordinatesToRef(UU, gU, yU), yU
      }
      static Reflect(UU, XU) {
        return this.ReflectToRef(UU, XU, new NU)
      }
      static ReflectToRef(UU, XU, zU) {
        const cU = gU.Sp[0];
        return cU.YL(XU).scaleInPlace(2 * NU.Dot(UU, XU)), zU.YL(UU).ZyU(cU)
      }
      static UnprojectFromTransform(UU, XU, zU, cU, yU) {
        return this.Unproject(UU, XU, zU, cU, yU, aU.IdentityReadOnly)
      }
      static Unproject(UU, XU, zU, cU, yU, QU) {
        const AU = new NU;
        return NU.UnprojectToRef(UU, XU, zU, cU, yU, QU, AU), AU
      }
      static UnprojectToRef(UU, XU, zU, cU, yU, QU, AU) {
        return NU.UnprojectFloatsToRef(UU._x, UU._y, UU._z, XU, zU, cU, yU, QU, AU), AU
      }
      static UnprojectFloatsToRef(UU, XU, zU, cU, yU, QU, FU, oU, DU) {
        const EU = tU.Matrix[0];
        QU.multiplyToRef(FU, EU), EU.multiplyToRef(oU, EU), EU.invert();
        const YU = tU.Sp[0];
        return YU.x = UU / cU * 2 - 1, YU.y = -(XU / yU * 2 - 1), AU.b.LastCreatedEngine?.isNDCHalfZRange ? YU.z = zU : YU.z = 2 * zU - 1, NU.TransformCoordinatesToRef(YU, EU, DU), DU
      }
      static Minimize(UU, XU) {
        const zU = new NU;
        return zU.YL(UU), zU.minimizeInPlace(XU), zU
      }
      static Maximize(UU, XU) {
        const zU = new NU;
        return zU.YL(UU), zU.maximizeInPlace(XU), zU
      }
      static Distance(UU, XU) {
        return Math.sqrt(NU.DistanceSquared(UU, XU))
      }
      static DistanceSquared(UU, XU) {
        const zU = UU._x - XU._x,
          cU = UU._y - XU._y,
          yU = UU._z - XU._z;
        return zU * zU + cU * cU + yU * yU
      }
      static ProjectOnTriangleToRef(UU, XU, zU, yU, QU) {
        const AU = tU.Sp[0],
          oU = tU.Sp[1],
          DU = tU.Sp[2],
          EU = tU.Sp[3],
          YU = tU.Sp[4];
        zU.subtractToRef(XU, AU), yU.subtractToRef(XU, oU), yU.subtractToRef(zU, DU);
        const IU = AU.length(),
          pU = oU.length(),
          aU = DU.length();
        if (IU < cU.c || pU < cU.c || aU < cU.c) return QU.YL(XU), NU.Distance(UU, XU);
        UU.subtractToRef(XU, YU), NU.CrossToRef(AU, oU, EU);
        const gU = EU.length();
        if (gU < cU.c) return QU.YL(XU), NU.Distance(UU, XU);
        EU.normalizeFromLength(gU);
        let kU = YU.length();
        if (kU < cU.c) return QU.YL(XU), 0;
        YU.normalizeFromLength(kU);
        const GU = NU.Dot(EU, YU),
          BU = tU.Sp[5],
          ZU = tU.Sp[6];
        BU.YL(EU).scaleInPlace(-kU * GU), ZU.YL(UU).addInPlace(BU);
        const RU = tU.Sp[4],
          PU = tU.Sp[5],
          WU = tU.Sp[7],
          dU = tU.Sp[8];
        RU.YL(AU).scaleInPlace(1 / IU), dU.YL(oU).scaleInPlace(1 / pU), RU.addInPlace(dU).scaleInPlace(-1), PU.YL(AU).scaleInPlace(-1 / IU), dU.YL(DU).scaleInPlace(1 / aU), PU.addInPlace(dU).scaleInPlace(-1), WU.YL(DU).scaleInPlace(-1 / aU), dU.YL(oU).scaleInPlace(-1 / pU), WU.addInPlace(dU).scaleInPlace(-1);
        const LU = tU.Sp[9];
        let eU;
        LU.YL(ZU).ZyU(XU), NU.CrossToRef(RU, LU, dU), eU = NU.Dot(dU, EU);
        const CU = eU;
        LU.YL(ZU).ZyU(zU), NU.CrossToRef(PU, LU, dU), eU = NU.Dot(dU, EU);
        const wU = eU;
        LU.YL(ZU).ZyU(yU), NU.CrossToRef(WU, LU, dU), eU = NU.Dot(dU, EU);
        const qU = eU,
          OU = tU.Sp[10];
        let SU, rU;
        CU > 0 && wU < 0 ? (OU.YL(AU), SU = XU, rU = zU) : wU > 0 && qU < 0 ? (OU.YL(DU), SU = zU, rU = yU) : (OU.YL(oU).scaleInPlace(-1), SU = yU, rU = XU);
        const uU = tU.Sp[9],
          fU = tU.Sp[4];
        SU.subtractToRef(ZU, dU), rU.subtractToRef(ZU, uU), NU.CrossToRef(dU, uU, fU);
        if (!(NU.Dot(fU, EU) < 0)) return QU.YL(ZU), Math.abs(kU * GU);
        const iU = tU.Sp[5];
        NU.CrossToRef(OU, fU, iU), iU.normalize();
        const HU = tU.Sp[9];
        HU.YL(SU).ZyU(ZU);
        const MU = HU.length();
        if (MU < cU.c) return QU.YL(SU), NU.Distance(UU, SU);
        HU.normalizeFromLength(MU);
        const vU = NU.Dot(iU, HU),
          VU = tU.Sp[7];
        VU.YL(ZU).addInPlace(iU.scaleInPlace(MU * vU)), dU.YL(VU).ZyU(SU), kU = OU.length(), OU.normalizeFromLength(kU);
        let sU = NU.Dot(dU, OU) / Math.max(kU, cU.c);
        return sU = (0, FU.Clamp)(sU, 0, 1), VU.YL(SU).addInPlace(OU.scaleInPlace(sU * kU)), QU.YL(VU), NU.Distance(UU, VU)
      }
      static Center(UU, XU) {
        return NU.CenterToRef(UU, XU, NU.Zero())
      }
      static CenterToRef(UU, XU, zU) {
        return zU.sUU((UU._x + XU._x) / 2, (UU._y + XU._y) / 2, (UU._z + XU._z) / 2)
      }
      static RotationFromAxis(UU, XU, zU) {
        const cU = new NU;
        return NU.RotationFromAxisToRef(UU, XU, zU, cU), cU
      }
      static RotationFromAxisToRef(UU, XU, zU, cU) {
        const yU = tU.Quaternion[0];
        return pU.RotationQuaternionFromAxisToRef(UU, XU, zU, yU), yU.toEulerAnglesToRef(cU), cU
      }
    }
    NU._V8PerformanceHack = new NU(.5, .5, .5), NU._UpReadOnly = NU.Up(), NU._DownReadOnly = NU.Down(), NU._LeftHandedForwardReadOnly = NU.Forward(!1), NU._RightHandedForwardReadOnly = NU.Forward(!0), NU._LeftHandedBackwardReadOnly = NU.Backward(!1), NU._RightHandedBackwardReadOnly = NU.Backward(!0), NU._RightReadOnly = NU.Right(), NU._LeftReadOnly = NU.Left(), NU._ZeroReadOnly = NU.Zero(), NU._OneReadOnly = NU.One();
    class IU {
      get x() {
        return this._x
      }
      set x(UU) {
        this._x = UU, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(UU) {
        this._y = UU, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(UU) {
        this._z = UU, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(UU) {
        this._w = UU, this._isDirty = !0
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = UU, this._y = XU, this._z = zU, this._w = cU
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let UU = EU(this._x);
        return UU = 397 * UU ^ EU(this._y), UU = 397 * UU ^ EU(this._z), UU = 397 * UU ^ EU(this._w), UU
      }
      cyU() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(UU, XU) {
        return void 0 === XU && (XU = 0), UU[XU] = this._x, UU[XU + 1] = this._y, UU[XU + 2] = this._z, UU[XU + 3] = this._w, this
      }
      zY(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return IU.FromArrayToRef(UU, XU, this), this
      }
      addInPlace(UU) {
        return this.x += UU._x, this.y += UU._y, this.z += UU._z, this.w += UU._w, this
      }
      addInPlaceFromFloats(UU, XU, zU, cU) {
        return this.x += UU, this.y += XU, this.z += zU, this.w += cU, this
      }
      add(UU) {
        return new IU(this._x + UU.x, this._y + UU.y, this._z + UU.z, this._w + UU.w)
      }
      addToRef(UU, XU) {
        return XU.x = this._x + UU.x, XU.y = this._y + UU.y, XU.z = this._z + UU.z, XU.w = this._w + UU.w, XU
      }
      ZyU(UU) {
        return this.x -= UU.x, this.y -= UU.y, this.z -= UU.z, this.w -= UU.w, this
      }
      subtract(UU) {
        return new IU(this._x - UU.x, this._y - UU.y, this._z - UU.z, this._w - UU.w)
      }
      subtractToRef(UU, XU) {
        return XU.x = this._x - UU.x, XU.y = this._y - UU.y, XU.z = this._z - UU.z, XU.w = this._w - UU.w, XU
      }
      subtractFromFloats(UU, XU, zU, cU) {
        return new IU(this._x - UU, this._y - XU, this._z - zU, this._w - cU)
      }
      subtractFromFloatsToRef(UU, XU, zU, cU, yU) {
        return yU.x = this._x - UU, yU.y = this._y - XU, yU.z = this._z - zU, yU.w = this._w - cU, yU
      }
      fp() {
        return new IU(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(UU) {
        return UU.x = -this._x, UU.y = -this._y, UU.z = -this._z, UU.w = -this._w, UU
      }
      scaleInPlace(UU) {
        return this.x *= UU, this.y *= UU, this.z *= UU, this.w *= UU, this
      }
      scale(UU) {
        return new IU(this._x * UU, this._y * UU, this._z * UU, this._w * UU)
      }
      scaleToRef(UU, XU) {
        return XU.x = this._x * UU, XU.y = this._y * UU, XU.z = this._z * UU, XU.w = this._w * UU, XU
      }
      scaleAndAddToRef(UU, XU) {
        return XU.x += this._x * UU, XU.y += this._y * UU, XU.z += this._z * UU, XU.w += this._w * UU, XU
      }
      equals(UU) {
        return UU && this._x === UU.x && this._y === UU.y && this._z === UU.z && this._w === UU.w
      }
      equalsWithEpsilon(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU.c;
        return UU && (0, FU.WithinEpsilon)(this._x, UU.x, XU) && (0, FU.WithinEpsilon)(this._y, UU.y, XU) && (0, FU.WithinEpsilon)(this._z, UU.z, XU) && (0, FU.WithinEpsilon)(this._w, UU.w, XU)
      }
      SFU(UU, XU, zU, cU) {
        return this._x === UU && this._y === XU && this._z === zU && this._w === cU
      }
      multiplyInPlace(UU) {
        return this.x *= UU.x, this.y *= UU.y, this.z *= UU.z, this.w *= UU.w, this
      }
      multiply(UU) {
        return new IU(this._x * UU.x, this._y * UU.y, this._z * UU.z, this._w * UU.w)
      }
      multiplyToRef(UU, XU) {
        return XU.x = this._x * UU.x, XU.y = this._y * UU.y, XU.z = this._z * UU.z, XU.w = this._w * UU.w, XU
      }
      multiplyByFloats(UU, XU, zU, cU) {
        return new IU(this._x * UU, this._y * XU, this._z * zU, this._w * cU)
      }
      divide(UU) {
        return new IU(this._x / UU.x, this._y / UU.y, this._z / UU.z, this._w / UU.w)
      }
      divideToRef(UU, XU) {
        return XU.x = this._x / UU.x, XU.y = this._y / UU.y, XU.z = this._z / UU.z, XU.w = this._w / UU.w, XU
      }
      divideInPlace(UU) {
        return this.divideToRef(UU, this)
      }
      minimizeInPlace(UU) {
        return UU.x < this._x && (this.x = UU.x), UU.y < this._y && (this.y = UU.y), UU.z < this._z && (this.z = UU.z), UU.w < this._w && (this.w = UU.w), this
      }
      maximizeInPlace(UU) {
        return UU.x > this._x && (this.x = UU.x), UU.y > this._y && (this.y = UU.y), UU.z > this._z && (this.z = UU.z), UU.w > this._w && (this.w = UU.w), this
      }
      minimizeInPlaceFromFloats(UU, XU, zU, cU) {
        return this.x = Math.min(UU, this._x), this.y = Math.min(XU, this._y), this.z = Math.min(zU, this._z), this.w = Math.min(cU, this._w), this
      }
      maximizeInPlaceFromFloats(UU, XU, zU, cU) {
        return this.x = Math.max(UU, this._x), this.y = Math.max(XU, this._y), this.z = Math.max(zU, this._z), this.w = Math.max(cU, this._w), this
      }
      floorToRef(UU) {
        return UU.x = Math.floor(this._x), UU.y = Math.floor(this._y), UU.z = Math.floor(this._z), UU.w = Math.floor(this._w), UU
      }
      floor() {
        return new IU(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(UU) {
        return UU.x = this._x - Math.floor(this._x), UU.y = this._y - Math.floor(this._y), UU.z = this._z - Math.floor(this._z), UU.w = this._w - Math.floor(this._w), UU
      }
      fract() {
        return new IU(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(UU) {
        return 0 === UU || 1 === UU ? this : this.scaleInPlace(1 / UU)
      }
      normalizeToNew() {
        return this.normalizeToRef(new IU)
      }
      normalizeToRef(UU) {
        const XU = this.length();
        return 0 === XU || 1 === XU ? (UU.x = this._x, UU.y = this._y, UU.z = this._z, UU.w = this._w, UU) : this.scaleToRef(1 / XU, UU)
      }
      toVector3() {
        return new NU(this._x, this._y, this._z)
      }
      clone() {
        return new IU(this._x, this._y, this._z, this._w)
      }
      YL(UU) {
        return this.x = UU.x, this.y = UU.y, this.z = UU.z, this.w = UU.w, this
      }
      sUU(UU, XU, zU, cU) {
        return this.x = UU, this.y = XU, this.z = zU, this.w = cU, this
      }
      set(UU, XU, zU, cU) {
        return this.sUU(UU, XU, zU, cU)
      }
      IUU(UU) {
        return this.x = this.y = this.z = this.w = UU, this
      }
      dot(UU) {
        return this._x * UU.x + this._y * UU.y + this._z * UU.z + this._w * UU.w
      }
      static FromArray(UU, XU) {
        return XU || (XU = 0), new IU(UU[XU], UU[XU + 1], UU[XU + 2], UU[XU + 3])
      }
      static FromArrayToRef(UU, XU, zU) {
        return zU.x = UU[XU], zU.y = UU[XU + 1], zU.z = UU[XU + 2], zU.w = UU[XU + 3], zU
      }
      static FromFloatArrayToRef(UU, XU, zU) {
        return IU.FromArrayToRef(UU, XU, zU), zU
      }
      static FromFloatsToRef(UU, XU, zU, cU, yU) {
        return yU.x = UU, yU.y = XU, yU.z = zU, yU.w = cU, yU
      }
      static Zero() {
        return new IU(0, 0, 0, 0)
      }
      static One() {
        return new IU(1, 1, 1, 1)
      }
      static Random() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new IU((0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU))
      }
      static RandomToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        return zU.x = (0, FU.RandomRange)(UU, XU), zU.y = (0, FU.RandomRange)(UU, XU), zU.z = (0, FU.RandomRange)(UU, XU), zU.w = (0, FU.RandomRange)(UU, XU), zU
      }
      static Clamp(UU, XU, zU) {
        return IU.ClampToRef(UU, XU, zU, new IU)
      }
      static ClampToRef(UU, XU, zU, cU) {
        return cU.x = (0, FU.Clamp)(UU.x, XU.x, zU.x), cU.y = (0, FU.Clamp)(UU.y, XU.y, zU.y), cU.z = (0, FU.Clamp)(UU.z, XU.z, zU.z), cU.w = (0, FU.Clamp)(UU.w, XU.w, zU.w), cU
      }
      static CheckExtends(UU, XU, zU) {
        XU.minimizeInPlace(UU), zU.maximizeInPlace(UU)
      }
      static get ZeroReadOnly() {
        return IU._ZeroReadOnly
      }
      static Normalize(UU) {
        return IU.NormalizeToRef(UU, new IU)
      }
      static NormalizeToRef(UU, XU) {
        return UU.normalizeToRef(XU), XU
      }
      static Minimize(UU, XU) {
        const zU = new IU;
        return zU.YL(UU), zU.minimizeInPlace(XU), zU
      }
      static Maximize(UU, XU) {
        const zU = new IU;
        return zU.YL(UU), zU.maximizeInPlace(XU), zU
      }
      static Distance(UU, XU) {
        return Math.sqrt(IU.DistanceSquared(UU, XU))
      }
      static DistanceSquared(UU, XU) {
        const zU = UU.x - XU.x,
          cU = UU.y - XU.y,
          yU = UU.z - XU.z,
          QU = UU.w - XU.w;
        return zU * zU + cU * cU + yU * yU + QU * QU
      }
      static Center(UU, XU) {
        return IU.CenterToRef(UU, XU, new IU)
      }
      static CenterToRef(UU, XU, zU) {
        return zU.x = (UU.x + XU.x) / 2, zU.y = (UU.y + XU.y) / 2, zU.z = (UU.z + XU.z) / 2, zU.w = (UU.w + XU.w) / 2, zU
      }
      static TransformCoordinates(UU, XU) {
        return IU.TransformCoordinatesToRef(UU, XU, new IU)
      }
      static TransformCoordinatesToRef(UU, XU, zU) {
        return IU.TransformCoordinatesFromFloatsToRef(UU._x, UU._y, UU._z, XU, zU), zU
      }
      static TransformCoordinatesFromFloatsToRef(UU, XU, zU, cU, yU) {
        const QU = cU.m,
          AU = UU * QU[0] + XU * QU[4] + zU * QU[8] + QU[12],
          FU = UU * QU[1] + XU * QU[5] + zU * QU[9] + QU[13],
          oU = UU * QU[2] + XU * QU[6] + zU * QU[10] + QU[14],
          DU = UU * QU[3] + XU * QU[7] + zU * QU[11] + QU[15];
        return yU.x = AU, yU.y = FU, yU.z = oU, yU.w = DU, yU
      }
      static TransformNormal(UU, XU) {
        return IU.TransformNormalToRef(UU, XU, new IU)
      }
      static TransformNormalToRef(UU, XU, zU) {
        const cU = XU.m,
          yU = UU.x * cU[0] + UU.y * cU[4] + UU.z * cU[8],
          QU = UU.x * cU[1] + UU.y * cU[5] + UU.z * cU[9],
          AU = UU.x * cU[2] + UU.y * cU[6] + UU.z * cU[10];
        return zU.x = yU, zU.y = QU, zU.z = AU, zU.w = UU.w, zU
      }
      static TransformNormalFromFloatsToRef(UU, XU, zU, cU, yU, QU) {
        const AU = yU.m;
        return QU.x = UU * AU[0] + XU * AU[4] + zU * AU[8], QU.y = UU * AU[1] + XU * AU[5] + zU * AU[9], QU.z = UU * AU[2] + XU * AU[6] + zU * AU[10], QU.w = cU, QU
      }
      static FromVector3(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new IU(UU._x, UU._y, UU._z, XU)
      }
      static Dot(UU, XU) {
        return UU.x * XU.x + UU.y * XU.y + UU.z * XU.z + UU.w * XU.w
      }
    }
    IU._V8PerformanceHack = new IU(.5, .5, .5, .5), IU._ZeroReadOnly = IU.Zero();
    class pU {
      get x() {
        return this._x
      }
      set x(UU) {
        this._x = UU, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(UU) {
        this._y = UU, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(UU) {
        this._z = UU, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(UU) {
        this._w = UU, this._isDirty = !0
      }
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = UU, this._y = XU, this._z = zU, this._w = cU
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let UU = EU(this._x);
        return UU = 397 * UU ^ EU(this._y), UU = 397 * UU ^ EU(this._z), UU = 397 * UU ^ EU(this._w), UU
      }
      cyU() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[XU] = this._x, UU[XU + 1] = this._y, UU[XU + 2] = this._z, UU[XU + 3] = this._w, this
      }
      zY(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pU.FromArrayToRef(UU, XU, this)
      }
      equals(UU) {
        return UU && this._x === UU._x && this._y === UU._y && this._z === UU._z && this._w === UU._w
      }
      equalsWithEpsilon(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU.c;
        return UU && (0, FU.WithinEpsilon)(this._x, UU._x, XU) && (0, FU.WithinEpsilon)(this._y, UU._y, XU) && (0, FU.WithinEpsilon)(this._z, UU._z, XU) && (0, FU.WithinEpsilon)(this._w, UU._w, XU)
      }
      isApprox(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : cU.c;
        return UU && ((0, FU.WithinEpsilon)(this._x, UU._x, XU) && (0, FU.WithinEpsilon)(this._y, UU._y, XU) && (0, FU.WithinEpsilon)(this._z, UU._z, XU) && (0, FU.WithinEpsilon)(this._w, UU._w, XU) || (0, FU.WithinEpsilon)(this._x, -UU._x, XU) && (0, FU.WithinEpsilon)(this._y, -UU._y, XU) && (0, FU.WithinEpsilon)(this._z, -UU._z, XU) && (0, FU.WithinEpsilon)(this._w, -UU._w, XU))
      }
      clone() {
        return new pU(this._x, this._y, this._z, this._w)
      }
      YL(UU) {
        return this._x = UU._x, this._y = UU._y, this._z = UU._z, this._w = UU._w, this._isDirty = !0, this
      }
      sUU(UU, XU, zU, cU) {
        return this._x = UU, this._y = XU, this._z = zU, this._w = cU, this._isDirty = !0, this
      }
      set(UU, XU, zU, cU) {
        return this.sUU(UU, XU, zU, cU)
      }
      IUU(UU) {
        return this.sUU(UU, UU, UU, UU)
      }
      add(UU) {
        return new pU(this._x + UU._x, this._y + UU._y, this._z + UU._z, this._w + UU._w)
      }
      addInPlace(UU) {
        return this._x += UU._x, this._y += UU._y, this._z += UU._z, this._w += UU._w, this._isDirty = !0, this
      }
      addToRef(UU, XU) {
        return XU._x = this._x + UU._x, XU._y = this._y + UU._y, XU._z = this._z + UU._z, XU._w = this._w + UU._w, XU._isDirty = !0, XU
      }
      addInPlaceFromFloats(UU, XU, zU, cU) {
        return this._x += UU, this._y += XU, this._z += zU, this._w += cU, this._isDirty = !0, this
      }
      subtractToRef(UU, XU) {
        return XU._x = this._x - UU._x, XU._y = this._y - UU._y, XU._z = this._z - UU._z, XU._w = this._w - UU._w, XU._isDirty = !0, XU
      }
      subtractFromFloats(UU, XU, zU, cU) {
        return this.subtractFromFloatsToRef(UU, XU, zU, cU, new pU)
      }
      subtractFromFloatsToRef(UU, XU, zU, cU, yU) {
        return yU._x = this._x - UU, yU._y = this._y - XU, yU._z = this._z - zU, yU._w = this._w - cU, yU._isDirty = !0, yU
      }
      subtract(UU) {
        return new pU(this._x - UU._x, this._y - UU._y, this._z - UU._z, this._w - UU._w)
      }
      ZyU(UU) {
        return this._x -= UU._x, this._y -= UU._y, this._z -= UU._z, this._w -= UU._w, this._isDirty = !0, this
      }
      scale(UU) {
        return new pU(this._x * UU, this._y * UU, this._z * UU, this._w * UU)
      }
      scaleToRef(UU, XU) {
        return XU._x = this._x * UU, XU._y = this._y * UU, XU._z = this._z * UU, XU._w = this._w * UU, XU._isDirty = !0, XU
      }
      scaleInPlace(UU) {
        return this._x *= UU, this._y *= UU, this._z *= UU, this._w *= UU, this._isDirty = !0, this
      }
      scaleAndAddToRef(UU, XU) {
        return XU._x += this._x * UU, XU._y += this._y * UU, XU._z += this._z * UU, XU._w += this._w * UU, XU._isDirty = !0, XU
      }
      multiply(UU) {
        const XU = new pU(0, 0, 0, 1);
        return this.multiplyToRef(UU, XU), XU
      }
      multiplyToRef(UU, XU) {
        const zU = this._x * UU._w + this._y * UU._z - this._z * UU._y + this._w * UU._x,
          cU = -this._x * UU._z + this._y * UU._w + this._z * UU._x + this._w * UU._y,
          yU = this._x * UU._y - this._y * UU._x + this._z * UU._w + this._w * UU._z,
          QU = -this._x * UU._x - this._y * UU._y - this._z * UU._z + this._w * UU._w;
        return XU.sUU(zU, cU, yU, QU), XU
      }
      multiplyInPlace(UU) {
        return this.multiplyToRef(UU, this)
      }
      multiplyByFloats(UU, XU, zU, cU) {
        return this._x *= UU, this._y *= XU, this._z *= zU, this._w *= cU, this._isDirty = !0, this
      }
      divide(UU) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(UU, XU) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(UU) {
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
        return this.negateToRef(new pU)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(UU) {
        return UU._x = -this._x, UU._y = -this._y, UU._z = -this._z, UU._w = -this._w, UU._isDirty = !0, UU
      }
      SFU(UU, XU, zU, cU) {
        return this._x === UU && this._y === XU && this._z === zU && this._w === cU
      }
      floorToRef(UU) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(UU) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(UU) {
        return UU.sUU(-this._x, -this._y, -this._z, this._w), UU
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new pU(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const UU = this.conjugate(),
          XU = this.lengthSquared();
        return 0 == XU || 1 == XU || UU.scaleInPlace(1 / XU), UU
      }
      invertInPlace() {
        this.conjugateInPlace();
        const UU = this.lengthSquared();
        return 0 == UU || 1 == UU || this.scaleInPlace(1 / UU), this
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
      normalizeFromLength(UU) {
        return 0 === UU || 1 === UU ? this : this.scaleInPlace(1 / UU)
      }
      normalizeToNew() {
        const UU = new pU(0, 0, 0, 1);
        return this.normalizeToRef(UU), UU
      }
      normalizeToRef(UU) {
        const XU = this.length();
        return 0 === XU || 1 === XU ? UU.sUU(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / XU, UU)
      }
      toEulerAngles() {
        const UU = NU.Zero();
        return this.toEulerAnglesToRef(UU), UU
      }
      toEulerAnglesToRef(UU) {
        const XU = this._z,
          zU = this._x,
          cU = this._y,
          yU = this._w,
          QU = cU * XU - zU * yU,
          AU = .4999999;
        if (QU < -AU) UU._y = 2 * Math.atan2(cU, yU), UU._x = Math.PI / 2, UU._z = 0, UU._isDirty = !0;
        else if (QU > AU) UU._y = 2 * Math.atan2(cU, yU), UU._x = -Math.PI / 2, UU._z = 0, UU._isDirty = !0;
        else {
          const AU = yU * yU,
            FU = XU * XU,
            oU = zU * zU,
            DU = cU * cU;
          UU._z = Math.atan2(2 * (zU * cU + XU * yU), -FU - oU + DU + AU), UU._x = Math.asin(-2 * QU), UU._y = Math.atan2(2 * (XU * zU + cU * yU), FU - oU - DU + AU), UU._isDirty = !0
        }
        return UU
      }
      toAlphaBetaGammaToRef(UU) {
        const XU = this._z,
          zU = this._x,
          cU = this._y,
          yU = this._w,
          QU = Math.sqrt(zU * zU + cU * cU),
          AU = Math.sqrt(XU * XU + yU * yU),
          FU = 2 * Math.atan2(QU, AU),
          oU = 2 * Math.atan2(XU, yU),
          DU = 2 * Math.atan2(cU, zU),
          EU = (oU + DU) / 2,
          YU = (oU - DU) / 2;
        return UU.set(YU, FU, EU), UU
      }
      toRotationMatrix(UU) {
        return aU.FromQuaternionToRef(this, UU), UU
      }
      fromRotationMatrix(UU) {
        return pU.FromRotationMatrixToRef(UU, this), this
      }
      dot(UU) {
        return this._x * UU._x + this._y * UU._y + this._z * UU._z + this._w * UU._w
      }
      toAxisAngle() {
        const UU = NU.Zero();
        return {
          axis: UU,
          angle: this.toAxisAngleToRef(UU)
        }
      }
      toAxisAngleToRef(UU) {
        let XU;
        const zU = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          cU = this._w;
        return zU > 0 ? (XU = 2 * Math.atan2(zU, cU), UU.set(this._x / zU, this._y / zU, this._z / zU)) : (XU = 0, UU.set(1, 0, 0)), XU
      }
      static FromRotationMatrix(UU) {
        const XU = new pU;
        return pU.FromRotationMatrixToRef(UU, XU), XU
      }
      static FromRotationMatrixToRef(UU, XU) {
        const zU = UU.m,
          cU = zU[0],
          yU = zU[4],
          QU = zU[8],
          AU = zU[1],
          FU = zU[5],
          oU = zU[9],
          DU = zU[2],
          EU = zU[6],
          YU = zU[10],
          NU = cU + FU + YU;
        let IU;
        return NU > 0 ? (IU = .5 / Math.sqrt(NU + 1), XU._w = .25 / IU, XU._x = (EU - oU) * IU, XU._y = (QU - DU) * IU, XU._z = (AU - yU) * IU, XU._isDirty = !0) : cU > FU && cU > YU ? (IU = 2 * Math.sqrt(1 + cU - FU - YU), XU._w = (EU - oU) / IU, XU._x = .25 * IU, XU._y = (yU + AU) / IU, XU._z = (QU + DU) / IU, XU._isDirty = !0) : FU > YU ? (IU = 2 * Math.sqrt(1 + FU - cU - YU), XU._w = (QU - DU) / IU, XU._x = (yU + AU) / IU, XU._y = .25 * IU, XU._z = (oU + EU) / IU, XU._isDirty = !0) : (IU = 2 * Math.sqrt(1 + YU - cU - FU), XU._w = (AU - yU) / IU, XU._x = (QU + DU) / IU, XU._y = (oU + EU) / IU, XU._z = .25 * IU, XU._isDirty = !0), XU
      }
      static Dot(UU, XU) {
        return UU._x * XU._x + UU._y * XU._y + UU._z * XU._z + UU._w * XU._w
      }
      static AreClose(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const cU = pU.Dot(UU, XU);
        return 1 - cU * cU <= zU
      }
      static SmoothToRef(UU, XU, zU, cU, yU) {
        let QU = 0 === cU ? 1 : zU / cU;
        return QU = (0, FU.Clamp)(QU, 0, 1), pU.SlerpToRef(UU, XU, QU, yU), yU
      }
      static Zero() {
        return new pU(0, 0, 0, 0)
      }
      static Inverse(UU) {
        return new pU(-UU._x, -UU._y, -UU._z, UU._w)
      }
      static InverseToRef(UU, XU) {
        return XU.set(-UU._x, -UU._y, -UU._z, UU._w), XU
      }
      static Identity() {
        return new pU(0, 0, 0, 1)
      }
      static IsIdentity(UU) {
        return UU && 0 === UU._x && 0 === UU._y && 0 === UU._z && 1 === UU._w
      }
      static RotationAxis(UU, XU) {
        return pU.RotationAxisToRef(UU, XU, new pU)
      }
      static RotationAxisToRef(UU, XU, zU) {
        zU._w = Math.cos(XU / 2);
        const cU = Math.sin(XU / 2) / UU.length();
        return zU._x = UU._x * cU, zU._y = UU._y * cU, zU._z = UU._z * cU, zU._isDirty = !0, zU
      }
      static FromArray(UU, XU) {
        return XU || (XU = 0), new pU(UU[XU], UU[XU + 1], UU[XU + 2], UU[XU + 3])
      }
      static FromArrayToRef(UU, XU, zU) {
        return zU._x = UU[XU], zU._y = UU[XU + 1], zU._z = UU[XU + 2], zU._w = UU[XU + 3], zU._isDirty = !0, zU
      }
      static FromFloatsToRef(UU, XU, zU, cU, yU) {
        return yU.sUU(UU, XU, zU, cU), yU
      }
      static FromEulerAngles(UU, XU, zU) {
        const cU = new pU;
        return pU.RotationYawPitchRollToRef(XU, UU, zU, cU), cU
      }
      static FromEulerAnglesToRef(UU, XU, zU, cU) {
        return pU.RotationYawPitchRollToRef(XU, UU, zU, cU), cU
      }
      static FromEulerVector(UU) {
        const XU = new pU;
        return pU.RotationYawPitchRollToRef(UU._y, UU._x, UU._z, XU), XU
      }
      static FromEulerVectorToRef(UU, XU) {
        return pU.RotationYawPitchRollToRef(UU._y, UU._x, UU._z, XU), XU
      }
      static FromUnitVectorsToRef(UU, XU, zU) {
        let yU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : cU.c;
        const QU = NU.Dot(UU, XU) + 1;
        return QU < yU ? Math.abs(UU.x) > Math.abs(UU.z) ? zU.set(-UU.y, UU.x, 0, 0) : zU.set(0, -UU.z, UU.y, 0) : (NU.CrossToRef(UU, XU, gU.Sp[0]), zU.set(gU.Sp[0].x, gU.Sp[0].y, gU.Sp[0].z, QU)), zU.normalize()
      }
      static RotationYawPitchRoll(UU, XU, zU) {
        const cU = new pU;
        return pU.RotationYawPitchRollToRef(UU, XU, zU, cU), cU
      }
      static RotationYawPitchRollToRef(UU, XU, zU, cU) {
        const yU = .5 * zU,
          QU = .5 * XU,
          AU = .5 * UU,
          FU = Math.sin(yU),
          oU = Math.cos(yU),
          DU = Math.sin(QU),
          EU = Math.cos(QU),
          YU = Math.sin(AU),
          NU = Math.cos(AU);
        return cU._x = NU * DU * oU + YU * EU * FU, cU._y = YU * EU * oU - NU * DU * FU, cU._z = NU * EU * FU - YU * DU * oU, cU._w = NU * EU * oU + YU * DU * FU, cU._isDirty = !0, cU
      }
      static RotationAlphaBetaGamma(UU, XU, zU) {
        const cU = new pU;
        return pU.RotationAlphaBetaGammaToRef(UU, XU, zU, cU), cU
      }
      static RotationAlphaBetaGammaToRef(UU, XU, zU, cU) {
        const yU = .5 * (zU + UU),
          QU = .5 * (zU - UU),
          AU = .5 * XU;
        return cU._x = Math.cos(QU) * Math.sin(AU), cU._y = Math.sin(QU) * Math.sin(AU), cU._z = Math.sin(yU) * Math.cos(AU), cU._w = Math.cos(yU) * Math.cos(AU), cU._isDirty = !0, cU
      }
      static RotationQuaternionFromAxis(UU, XU, zU) {
        const cU = new pU(0, 0, 0, 0);
        return pU.RotationQuaternionFromAxisToRef(UU, XU, zU, cU), cU
      }
      static RotationQuaternionFromAxisToRef(UU, XU, zU, cU) {
        const yU = tU.Matrix[0];
        return UU = UU.normalizeToRef(tU.Sp[0]), XU = XU.normalizeToRef(tU.Sp[1]), zU = zU.normalizeToRef(tU.Sp[2]), aU.FromXYZAxesToRef(UU, XU, zU, yU), pU.FromRotationMatrixToRef(yU, cU), cU
      }
      static FromLookDirectionLH(UU, XU) {
        const zU = new pU;
        return pU.FromLookDirectionLHToRef(UU, XU, zU), zU
      }
      static FromLookDirectionLHToRef(UU, XU, zU) {
        const cU = tU.Matrix[0];
        return aU.LookDirectionLHToRef(UU, XU, cU), pU.FromRotationMatrixToRef(cU, zU), zU
      }
      static FromLookDirectionRH(UU, XU) {
        const zU = new pU;
        return pU.FromLookDirectionRHToRef(UU, XU, zU), zU
      }
      static FromLookDirectionRHToRef(UU, XU, zU) {
        const cU = tU.Matrix[0];
        return aU.LookDirectionRHToRef(UU, XU, cU), pU.FromRotationMatrixToRef(cU, zU)
      }
      static Slerp(UU, XU, zU) {
        const cU = pU.Identity();
        return pU.SlerpToRef(UU, XU, zU, cU), cU
      }
      static SlerpToRef(UU, XU, zU, cU) {
        let yU, QU, AU = UU._x * XU._x + UU._y * XU._y + UU._z * XU._z + UU._w * XU._w,
          FU = !1;
        if (AU < 0 && (FU = !0, AU = -AU), AU > .999999) QU = 1 - zU, yU = FU ? -zU : zU;
        else {
          const UU = Math.acos(AU),
            XU = 1 / Math.sin(UU);
          QU = Math.sin((1 - zU) * UU) * XU, yU = FU ? -Math.sin(zU * UU) * XU : Math.sin(zU * UU) * XU
        }
        return cU._x = QU * UU._x + yU * XU._x, cU._y = QU * UU._y + yU * XU._y, cU._z = QU * UU._z + yU * XU._z, cU._w = QU * UU._w + yU * XU._w, cU._isDirty = !0, cU
      }
      static Hermite(UU, XU, zU, cU, yU) {
        const QU = yU * yU,
          AU = yU * QU,
          FU = 2 * AU - 3 * QU + 1,
          oU = -2 * AU + 3 * QU,
          DU = AU - 2 * QU + yU,
          EU = AU - QU,
          YU = UU._x * FU + zU._x * oU + XU._x * DU + cU._x * EU,
          NU = UU._y * FU + zU._y * oU + XU._y * DU + cU._y * EU,
          IU = UU._z * FU + zU._z * oU + XU._z * DU + cU._z * EU,
          aU = UU._w * FU + zU._w * oU + XU._w * DU + cU._w * EU;
        return new pU(YU, NU, IU, aU)
      }
      static Hermite1stDerivative(UU, XU, zU, cU, yU) {
        const QU = new pU;
        return this.Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU), QU
      }
      static Hermite1stDerivativeToRef(UU, XU, zU, cU, yU, QU) {
        const AU = yU * yU;
        return QU._x = 6 * (AU - yU) * UU._x + (3 * AU - 4 * yU + 1) * XU._x + 6 * (-AU + yU) * zU._x + (3 * AU - 2 * yU) * cU._x, QU._y = 6 * (AU - yU) * UU._y + (3 * AU - 4 * yU + 1) * XU._y + 6 * (-AU + yU) * zU._y + (3 * AU - 2 * yU) * cU._y, QU._z = 6 * (AU - yU) * UU._z + (3 * AU - 4 * yU + 1) * XU._z + 6 * (-AU + yU) * zU._z + (3 * AU - 2 * yU) * cU._z, QU._w = 6 * (AU - yU) * UU._w + (3 * AU - 4 * yU + 1) * XU._w + 6 * (-AU + yU) * zU._w + (3 * AU - 2 * yU) * cU._w, QU._isDirty = !0, QU
      }
      static Normalize(UU) {
        const XU = pU.Zero();
        return pU.NormalizeToRef(UU, XU), XU
      }
      static NormalizeToRef(UU, XU) {
        return UU.normalizeToRef(XU), XU
      }
      static Clamp(UU, XU, zU) {
        const cU = new pU;
        return pU.ClampToRef(UU, XU, zU, cU), cU
      }
      static ClampToRef(UU, XU, zU, cU) {
        return cU.sUU((0, FU.Clamp)(UU.x, XU.x, zU.x), (0, FU.Clamp)(UU.y, XU.y, zU.y), (0, FU.Clamp)(UU.z, XU.z, zU.z), (0, FU.Clamp)(UU.w, XU.w, zU.w))
      }
      static Random() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new pU((0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU))
      }
      static RandomToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).sUU((0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU), (0, FU.RandomRange)(UU, XU))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(UU, XU) {
        return Math.sqrt(pU.DistanceSquared(UU, XU))
      }
      static DistanceSquared(UU, XU) {
        const zU = UU.x - XU.x,
          cU = UU.y - XU.y,
          yU = UU.z - XU.z,
          QU = UU.w - XU.w;
        return zU * zU + cU * cU + yU * yU + QU * QU
      }
      static Center(UU, XU) {
        return pU.CenterToRef(UU, XU, pU.Zero())
      }
      static CenterToRef(UU, XU, zU) {
        return zU.sUU((UU.x + XU.x) / 2, (UU.y + XU.y) / 2, (UU.z + XU.z) / 2, (UU.w + XU.w) / 2)
      }
    }
    pU._V8PerformanceHack = new pU(.5, .5, .5, .5);
    class aU {
      static get Use64Bits() {
        return QU.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = oU.m._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = UU, this._isIdentity3x2 = UU || zU, this._isIdentityDirty = !this._isIdentity && XU, this._isIdentity3x2Dirty = !this._isIdentity3x2 && cU
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, QU.b.MatrixTrackPrecisionChange && QU.b.MatrixTrackedMatrices.push(this), this._m = new QU.b.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const UU = this._m;
          this._isIdentity = 1 === UU[0] && 0 === UU[1] && 0 === UU[2] && 0 === UU[3] && 0 === UU[4] && 1 === UU[5] && 0 === UU[6] && 0 === UU[7] && 0 === UU[8] && 0 === UU[9] && 1 === UU[10] && 0 === UU[11] && 0 === UU[12] && 0 === UU[13] && 0 === UU[14] && 1 === UU[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const UU = this._m,
          XU = UU[0],
          zU = UU[1],
          cU = UU[2],
          yU = UU[3],
          QU = UU[4],
          AU = UU[5],
          FU = UU[6],
          oU = UU[7],
          DU = UU[8],
          EU = UU[9],
          YU = UU[10],
          NU = UU[11],
          IU = UU[12],
          pU = UU[13],
          aU = UU[14],
          tU = UU[15],
          gU = YU * tU - aU * NU,
          kU = EU * tU - pU * NU,
          GU = EU * aU - pU * YU,
          BU = DU * tU - IU * NU,
          ZU = DU * aU - YU * IU,
          RU = DU * pU - IU * EU;
        return XU * +(AU * gU - FU * kU + oU * GU) + zU * -(QU * gU - FU * BU + oU * ZU) + cU * +(QU * kU - AU * BU + oU * RU) + yU * -(QU * GU - AU * ZU + FU * RU)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!UU) return this._m;
        const zU = this._m;
        for (let cU = 0; cU < 16; cU++) UU[XU + cU] = zU[cU];
        return this
      }
      cyU() {
        return this._m
      }
      zY(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return aU.FromArrayToRef(UU, XU, this)
      }
      sUU() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        return aU.FromArrayToRef(XU, 0, this)
      }
      set() {
        const UU = this._m;
        for (let XU = 0; XU < 16; XU++) UU[XU] = XU < 0 || arguments.length <= XU ? void 0 : arguments[XU];
        return this.markAsUpdated(), this
      }
      IUU(UU) {
        const XU = this._m;
        for (let zU = 0; zU < 16; zU++) XU[zU] = UU;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return aU.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(UU) {
        const XU = new aU;
        return this.addToRef(UU, XU), XU
      }
      addToRef(UU, XU) {
        const zU = this._m,
          cU = XU._m,
          yU = UU.m;
        for (let QU = 0; QU < 16; QU++) cU[QU] = zU[QU] + yU[QU];
        return XU.markAsUpdated(), XU
      }
      addToSelf(UU) {
        const XU = this._m,
          zU = UU.m;
        return XU[0] += zU[0], XU[1] += zU[1], XU[2] += zU[2], XU[3] += zU[3], XU[4] += zU[4], XU[5] += zU[5], XU[6] += zU[6], XU[7] += zU[7], XU[8] += zU[8], XU[9] += zU[9], XU[10] += zU[10], XU[11] += zU[11], XU[12] += zU[12], XU[13] += zU[13], XU[14] += zU[14], XU[15] += zU[15], this.markAsUpdated(), this
      }
      addInPlace(UU) {
        const XU = this._m,
          zU = UU.m;
        for (let cU = 0; cU < 16; cU++) XU[cU] += zU[cU];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const UU = this._m;
        for (let XU = 0; XU < 16; XU++) UU[XU] += XU < 0 || arguments.length <= XU ? void 0 : arguments[XU];
        return this.markAsUpdated(), this
      }
      subtract(UU) {
        const XU = this._m,
          zU = UU.m;
        for (let cU = 0; cU < 16; cU++) XU[cU] -= zU[cU];
        return this.markAsUpdated(), this
      }
      subtractToRef(UU, XU) {
        const zU = this._m,
          cU = UU.m,
          yU = XU._m;
        for (let QU = 0; QU < 16; QU++) yU[QU] = zU[QU] - cU[QU];
        return XU.markAsUpdated(), XU
      }
      ZyU(UU) {
        const XU = this._m,
          zU = UU.m;
        for (let cU = 0; cU < 16; cU++) XU[cU] -= zU[cU];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        return this.subtractFromFloatsToRef(...XU, new aU)
      }
      subtractFromFloatsToRef() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        const cU = XU.pop(),
          yU = this._m,
          QU = cU._m,
          AU = XU;
        for (let FU = 0; FU < 16; FU++) QU[FU] = yU[FU] - AU[FU];
        return cU.markAsUpdated(), cU
      }
      invertToRef(UU) {
        return !0 === this._isIdentity ? (aU.IdentityToRef(UU), UU) : ((0, oU.e)(this, UU.cyU()) ? UU.markAsUpdated() : UU.YL(this), UU)
      }
      addAtIndex(UU, XU) {
        return this._m[UU] += XU, this.markAsUpdated(), this
      }
      multiplyAtIndex(UU, XU) {
        return this._m[UU] *= XU, this.markAsUpdated(), this
      }
      setTranslationFromFloats(UU, XU, zU) {
        return this._m[12] = UU, this._m[13] = XU, this._m[14] = zU, this.markAsUpdated(), this
      }
      addTranslationFromFloats(UU, XU, zU) {
        return this._m[12] += UU, this._m[13] += XU, this._m[14] += zU, this.markAsUpdated(), this
      }
      setTranslation(UU) {
        return this.setTranslationFromFloats(UU._x, UU._y, UU._z)
      }
      getTranslation() {
        return new NU(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(UU) {
        return UU.x = this._m[12], UU.y = this._m[13], UU.z = this._m[14], UU
      }
      removeRotationAndScaling() {
        const UU = this.m;
        return aU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, UU[12], UU[13], UU[14], UU[15], this), this._updateIdentityStatus(0 === UU[12] && 0 === UU[13] && 0 === UU[14] && 1 === UU[15]), this
      }
      YL(UU) {
        UU.copyToArray(this._m);
        const XU = UU;
        return this.updateFlag = XU.updateFlag, this._updateIdentityStatus(XU._isIdentity, XU._isIdentityDirty, XU._isIdentity3x2, XU._isIdentity3x2Dirty), this
      }
      copyToArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, oU.c)(this, UU, XU), this
      }
      multiply(UU) {
        const XU = new aU;
        return this.multiplyToRef(UU, XU), XU
      }
      multiplyInPlace(UU) {
        const XU = this._m,
          zU = UU.m;
        for (let cU = 0; cU < 16; cU++) XU[cU] *= zU[cU];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const UU = this._m;
        for (let XU = 0; XU < 16; XU++) UU[XU] *= XU < 0 || arguments.length <= XU ? void 0 : arguments[XU];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var UU = arguments.length, XU = new Array(UU), zU = 0; zU < UU; zU++) XU[zU] = arguments[zU];
        const cU = XU.pop(),
          yU = this._m,
          QU = cU._m,
          AU = XU;
        for (let FU = 0; FU < 16; FU++) QU[FU] = yU[FU] * AU[FU];
        return cU.markAsUpdated(), cU
      }
      multiplyToRef(UU, XU) {
        return this._isIdentity ? (XU.YL(UU), XU) : UU._isIdentity ? (XU.YL(this), XU) : (this.multiplyToArray(UU, XU._m, 0), XU.markAsUpdated(), XU)
      }
      multiplyToArray(UU, XU, zU) {
        return (0, oU.o)(this, UU, XU, zU), this
      }
      divide(UU) {
        return this.divideToRef(UU, new aU)
      }
      divideToRef(UU, XU) {
        const zU = this._m,
          cU = UU.m,
          yU = XU._m;
        for (let QU = 0; QU < 16; QU++) yU[QU] = zU[QU] / cU[QU];
        return XU.markAsUpdated(), XU
      }
      divideInPlace(UU) {
        const XU = this._m,
          zU = UU.m;
        for (let cU = 0; cU < 16; cU++) XU[cU] /= zU[cU];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(UU) {
        const XU = this._m,
          zU = UU.m;
        for (let cU = 0; cU < 16; cU++) XU[cU] = Math.min(XU[cU], zU[cU]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const UU = this._m;
        for (let XU = 0; XU < 16; XU++) UU[XU] = Math.min(UU[XU], XU < 0 || arguments.length <= XU ? void 0 : arguments[XU]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(UU) {
        const XU = this._m,
          zU = UU.m;
        for (let cU = 0; cU < 16; cU++) XU[cU] = Math.max(XU[cU], zU[cU]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const UU = this._m;
        for (let XU = 0; XU < 16; XU++) UU[XU] = Math.max(UU[XU], XU < 0 || arguments.length <= XU ? void 0 : arguments[XU]);
        return this.markAsUpdated(), this
      }
      fp() {
        return this.negateToRef(new aU)
      }
      negateInPlace() {
        const UU = this._m;
        for (let XU = 0; XU < 16; XU++) UU[XU] = -UU[XU];
        return this.markAsUpdated(), this
      }
      negateToRef(UU) {
        const XU = this._m,
          zU = UU._m;
        for (let cU = 0; cU < 16; cU++) zU[cU] = -XU[cU];
        return UU.markAsUpdated(), UU
      }
      equals(UU) {
        const XU = UU;
        if (!XU) return !1;
        if ((this._isIdentity || XU._isIdentity) && !this._isIdentityDirty && !XU._isIdentityDirty) return this._isIdentity && XU._isIdentity;
        const zU = this.m,
          cU = XU.m;
        return zU[0] === cU[0] && zU[1] === cU[1] && zU[2] === cU[2] && zU[3] === cU[3] && zU[4] === cU[4] && zU[5] === cU[5] && zU[6] === cU[6] && zU[7] === cU[7] && zU[8] === cU[8] && zU[9] === cU[9] && zU[10] === cU[10] && zU[11] === cU[11] && zU[12] === cU[12] && zU[13] === cU[13] && zU[14] === cU[14] && zU[15] === cU[15]
      }
      equalsWithEpsilon(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = this._m,
          cU = UU.m;
        for (let yU = 0; yU < 16; yU++)
          if (!(0, FU.WithinEpsilon)(zU[yU], cU[yU], XU)) return !1;
        return !0
      }
      SFU() {
        const UU = this._m;
        for (let XU = 0; XU < 16; XU++)
          if (UU[XU] != (XU < 0 || arguments.length <= XU ? void 0 : arguments[XU])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new aU)
      }
      floorToRef(UU) {
        const XU = this._m,
          zU = UU._m;
        for (let cU = 0; cU < 16; cU++) zU[cU] = Math.floor(XU[cU]);
        return UU.markAsUpdated(), UU
      }
      fract() {
        return this.fractToRef(new aU)
      }
      fractToRef(UU) {
        const XU = this._m,
          zU = UU._m;
        for (let cU = 0; cU < 16; cU++) zU[cU] = XU[cU] - Math.floor(XU[cU]);
        return UU.markAsUpdated(), UU
      }
      clone() {
        const UU = new aU;
        return UU.YL(this), UU
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let UU = EU(this._m[0]);
        for (let XU = 1; XU < 16; XU++) UU = 397 * UU ^ EU(this._m[XU]);
        return UU
      }
      decomposeToTransformNode(UU) {
        return UU.rotationQuaternion = UU.rotationQuaternion || new pU, this.decompose(UU.RY, UU.rotationQuaternion, UU.position)
      }
      decompose(UU, XU, zU, cU) {
        let yU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return zU && zU.IUU(0), UU && UU.IUU(1), XU && XU.sUU(0, 0, 0, 1), !0;
        const QU = this._m;
        if (zU && zU.sUU(QU[12], QU[13], QU[14]), (UU = UU || tU.Sp[0]).x = Math.sqrt(QU[0] * QU[0] + QU[1] * QU[1] + QU[2] * QU[2]), UU.y = Math.sqrt(QU[4] * QU[4] + QU[5] * QU[5] + QU[6] * QU[6]), UU.z = Math.sqrt(QU[8] * QU[8] + QU[9] * QU[9] + QU[10] * QU[10]), cU) {
          const XU = (yU ? cU.absoluteScaling.x : cU.RY.x) < 0 ? -1 : 1,
            zU = (yU ? cU.absoluteScaling.y : cU.RY.y) < 0 ? -1 : 1,
            QU = (yU ? cU.absoluteScaling.z : cU.RY.z) < 0 ? -1 : 1;
          UU.x *= XU, UU.y *= zU, UU.z *= QU
        } else this.determinant() <= 0 && (UU.y *= -1);
        if (0 === UU._x || 0 === UU._y || 0 === UU._z) return XU && XU.sUU(0, 0, 0, 1), !1;
        if (XU) {
          const zU = 1 / UU._x,
            cU = 1 / UU._y,
            yU = 1 / UU._z;
          aU.FromValuesToRef(QU[0] * zU, QU[1] * zU, QU[2] * zU, 0, QU[4] * cU, QU[5] * cU, QU[6] * cU, 0, QU[8] * yU, QU[9] * yU, QU[10] * yU, 0, 0, 0, 0, 1, tU.Matrix[0]), pU.FromRotationMatrixToRef(tU.Matrix[0], XU)
        }
        return !0
      }
      getRow(UU) {
        if (UU < 0 || UU > 3) return null;
        const XU = 4 * UU;
        return new IU(this._m[XU + 0], this._m[XU + 1], this._m[XU + 2], this._m[XU + 3])
      }
      getRowToRef(UU, XU) {
        if (UU >= 0 && UU <= 3) {
          const zU = 4 * UU;
          XU.x = this._m[zU + 0], XU.y = this._m[zU + 1], XU.z = this._m[zU + 2], XU.w = this._m[zU + 3]
        }
        return XU
      }
      setRow(UU, XU) {
        return this.setRowFromFloats(UU, XU.x, XU.y, XU.z, XU.w)
      }
      transpose() {
        const UU = new aU;
        return aU.TransposeToRef(this, UU), UU
      }
      transposeToRef(UU) {
        return aU.TransposeToRef(this, UU), UU
      }
      setRowFromFloats(UU, XU, zU, cU, yU) {
        if (UU < 0 || UU > 3) return this;
        const QU = 4 * UU;
        return this._m[QU + 0] = XU, this._m[QU + 1] = zU, this._m[QU + 2] = cU, this._m[QU + 3] = yU, this.markAsUpdated(), this
      }
      scale(UU) {
        const XU = new aU;
        return this.scaleToRef(UU, XU), XU
      }
      scaleToRef(UU, XU) {
        for (let zU = 0; zU < 16; zU++) XU._m[zU] = this._m[zU] * UU;
        return XU.markAsUpdated(), XU
      }
      scaleAndAddToRef(UU, XU) {
        for (let zU = 0; zU < 16; zU++) XU._m[zU] += this._m[zU] * UU;
        return XU.markAsUpdated(), XU
      }
      scaleInPlace(UU) {
        const XU = this._m;
        for (let zU = 0; zU < 16; zU++) XU[zU] *= UU;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(UU) {
        const XU = tU.Matrix[0];
        this.invertToRef(XU), XU.transposeToRef(UU);
        const zU = UU._m;
        return aU.FromValuesToRef(zU[0], zU[1], zU[2], 0, zU[4], zU[5], zU[6], 0, zU[8], zU[9], zU[10], 0, 0, 0, 0, 1, UU), UU
      }
      getRotationMatrix() {
        const UU = new aU;
        return this.getRotationMatrixToRef(UU), UU
      }
      getRotationMatrixToRef(UU) {
        const XU = tU.Sp[0];
        if (!this.decompose(XU)) return aU.IdentityToRef(UU), UU;
        const zU = this._m,
          cU = 1 / XU._x,
          yU = 1 / XU._y,
          QU = 1 / XU._z;
        return aU.FromValuesToRef(zU[0] * cU, zU[1] * cU, zU[2] * cU, 0, zU[4] * yU, zU[5] * yU, zU[6] * yU, 0, zU[8] * QU, zU[9] * QU, zU[10] * QU, 0, 0, 0, 0, 1, UU), UU
      }
      toggleModelMatrixHandInPlace() {
        const UU = this._m;
        return UU[2] *= -1, UU[6] *= -1, UU[8] *= -1, UU[9] *= -1, UU[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const UU = this._m;
        return UU[8] *= -1, UU[9] *= -1, UU[10] *= -1, UU[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(kU, this), this
      }
      static FromArray(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const zU = new aU;
        return aU.FromArrayToRef(UU, XU, zU), zU
      }
      static FromArrayToRef(UU, XU, zU) {
        for (let cU = 0; cU < 16; cU++) zU._m[cU] = UU[cU + XU];
        return zU.markAsUpdated(), zU
      }
      static FromFloat32ArrayToRefScaled(UU, XU, zU, cU) {
        return cU._m[0] = UU[0 + XU] * zU, cU._m[1] = UU[1 + XU] * zU, cU._m[2] = UU[2 + XU] * zU, cU._m[3] = UU[3 + XU] * zU, cU._m[4] = UU[4 + XU] * zU, cU._m[5] = UU[5 + XU] * zU, cU._m[6] = UU[6 + XU] * zU, cU._m[7] = UU[7 + XU] * zU, cU._m[8] = UU[8 + XU] * zU, cU._m[9] = UU[9 + XU] * zU, cU._m[10] = UU[10 + XU] * zU, cU._m[11] = UU[11 + XU] * zU, cU._m[12] = UU[12 + XU] * zU, cU._m[13] = UU[13 + XU] * zU, cU._m[14] = UU[14 + XU] * zU, cU._m[15] = UU[15 + XU] * zU, cU.markAsUpdated(), cU
      }
      static get IdentityReadOnly() {
        return aU._IdentityReadOnly
      }
      static FromValuesToRef(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, aU, tU) {
        const gU = tU._m;
        gU[0] = UU, gU[1] = XU, gU[2] = zU, gU[3] = cU, gU[4] = yU, gU[5] = QU, gU[6] = AU, gU[7] = FU, gU[8] = oU, gU[9] = DU, gU[10] = EU, gU[11] = YU, gU[12] = NU, gU[13] = IU, gU[14] = pU, gU[15] = aU, tU.markAsUpdated()
      }
      static FromValues(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU, YU, NU, IU, pU, tU) {
        const gU = new aU,
          kU = gU._m;
        return kU[0] = UU, kU[1] = XU, kU[2] = zU, kU[3] = cU, kU[4] = yU, kU[5] = QU, kU[6] = AU, kU[7] = FU, kU[8] = oU, kU[9] = DU, kU[10] = EU, kU[11] = YU, kU[12] = NU, kU[13] = IU, kU[14] = pU, kU[15] = tU, gU.markAsUpdated(), gU
      }
      static Compose(UU, XU, zU) {
        const cU = new aU;
        return aU.ComposeToRef(UU, XU, zU, cU), cU
      }
      static ComposeToRef(UU, XU, zU, cU) {
        const yU = cU._m,
          QU = XU._x,
          AU = XU._y,
          FU = XU._z,
          oU = XU._w,
          DU = QU + QU,
          EU = AU + AU,
          YU = FU + FU,
          NU = QU * DU,
          IU = QU * EU,
          pU = QU * YU,
          aU = AU * EU,
          tU = AU * YU,
          gU = FU * YU,
          kU = oU * DU,
          GU = oU * EU,
          BU = oU * YU,
          ZU = UU._x,
          RU = UU._y,
          PU = UU._z;
        return yU[0] = (1 - (aU + gU)) * ZU, yU[1] = (IU + BU) * ZU, yU[2] = (pU - GU) * ZU, yU[3] = 0, yU[4] = (IU - BU) * RU, yU[5] = (1 - (NU + gU)) * RU, yU[6] = (tU + kU) * RU, yU[7] = 0, yU[8] = (pU + GU) * PU, yU[9] = (tU - kU) * PU, yU[10] = (1 - (NU + aU)) * PU, yU[11] = 0, yU[12] = zU._x, yU[13] = zU._y, yU[14] = zU._z, yU[15] = 1, cU.markAsUpdated(), cU
      }
      static Identity() {
        const UU = aU.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return UU._updateIdentityStatus(!0), UU
      }
      static IdentityToRef(UU) {
        return aU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, UU), UU._updateIdentityStatus(!0), UU
      }
      static Zero() {
        const UU = aU.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return UU._updateIdentityStatus(!1), UU
      }
      static RotationX(UU) {
        const XU = new aU;
        return aU.RotationXToRef(UU, XU), XU
      }
      static Invert(UU) {
        const XU = new aU;
        return UU.invertToRef(XU), XU
      }
      static RotationXToRef(UU, XU) {
        const zU = Math.sin(UU),
          cU = Math.cos(UU);
        return aU.FromValuesToRef(1, 0, 0, 0, 0, cU, zU, 0, 0, -zU, cU, 0, 0, 0, 0, 1, XU), XU._updateIdentityStatus(1 === cU && 0 === zU), XU
      }
      static RotationY(UU) {
        const XU = new aU;
        return aU.RotationYToRef(UU, XU), XU
      }
      static RotationYToRef(UU, XU) {
        const zU = Math.sin(UU),
          cU = Math.cos(UU);
        return aU.FromValuesToRef(cU, 0, -zU, 0, 0, 1, 0, 0, zU, 0, cU, 0, 0, 0, 0, 1, XU), XU._updateIdentityStatus(1 === cU && 0 === zU), XU
      }
      static RotationZ(UU) {
        const XU = new aU;
        return aU.RotationZToRef(UU, XU), XU
      }
      static RotationZToRef(UU, XU) {
        const zU = Math.sin(UU),
          cU = Math.cos(UU);
        return aU.FromValuesToRef(cU, zU, 0, 0, -zU, cU, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, XU), XU._updateIdentityStatus(1 === cU && 0 === zU), XU
      }
      static RotationAxis(UU, XU) {
        const zU = new aU;
        return aU.RotationAxisToRef(UU, XU, zU), zU
      }
      static RotationAxisToRef(UU, XU, zU) {
        const cU = Math.sin(-XU),
          yU = Math.cos(-XU),
          QU = 1 - yU;
        UU = UU.normalizeToRef(tU.Sp[0]);
        const AU = zU._m;
        return AU[0] = UU._x * UU._x * QU + yU, AU[1] = UU._x * UU._y * QU - UU._z * cU, AU[2] = UU._x * UU._z * QU + UU._y * cU, AU[3] = 0, AU[4] = UU._y * UU._x * QU + UU._z * cU, AU[5] = UU._y * UU._y * QU + yU, AU[6] = UU._y * UU._z * QU - UU._x * cU, AU[7] = 0, AU[8] = UU._z * UU._x * QU - UU._y * cU, AU[9] = UU._z * UU._y * QU + UU._x * cU, AU[10] = UU._z * UU._z * QU + yU, AU[11] = 0, AU[12] = 0, AU[13] = 0, AU[14] = 0, AU[15] = 1, zU.markAsUpdated(), zU
      }
      static RotationAlignToRef(UU, XU, zU) {
        let yU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const QU = NU.Dot(XU, UU),
          AU = zU._m;
        if (QU < -1 + cU.c) AU[0] = -1, AU[1] = 0, AU[2] = 0, AU[3] = 0, AU[4] = 0, AU[5] = yU ? 1 : -1, AU[6] = 0, AU[7] = 0, AU[8] = 0, AU[9] = 0, AU[10] = yU ? -1 : 1, AU[11] = 0;
        else {
          const zU = NU.Cross(XU, UU),
            cU = 1 / (1 + QU);
          AU[0] = zU._x * zU._x * cU + QU, AU[1] = zU._y * zU._x * cU - zU._z, AU[2] = zU._z * zU._x * cU + zU._y, AU[3] = 0, AU[4] = zU._x * zU._y * cU + zU._z, AU[5] = zU._y * zU._y * cU + QU, AU[6] = zU._z * zU._y * cU - zU._x, AU[7] = 0, AU[8] = zU._x * zU._z * cU - zU._y, AU[9] = zU._y * zU._z * cU + zU._x, AU[10] = zU._z * zU._z * cU + QU, AU[11] = 0
        }
        return AU[12] = 0, AU[13] = 0, AU[14] = 0, AU[15] = 1, zU.markAsUpdated(), zU
      }
      static RotationYawPitchRoll(UU, XU, zU) {
        const cU = new aU;
        return aU.RotationYawPitchRollToRef(UU, XU, zU, cU), cU
      }
      static RotationYawPitchRollToRef(UU, XU, zU, cU) {
        return pU.RotationYawPitchRollToRef(UU, XU, zU, tU.Quaternion[0]), tU.Quaternion[0].toRotationMatrix(cU), cU
      }
      static Scaling(UU, XU, zU) {
        const cU = new aU;
        return aU.ScalingToRef(UU, XU, zU, cU), cU
      }
      static ScalingToRef(UU, XU, zU, cU) {
        return aU.FromValuesToRef(UU, 0, 0, 0, 0, XU, 0, 0, 0, 0, zU, 0, 0, 0, 0, 1, cU), cU._updateIdentityStatus(1 === UU && 1 === XU && 1 === zU), cU
      }
      static Translation(UU, XU, zU) {
        const cU = new aU;
        return aU.TranslationToRef(UU, XU, zU, cU), cU
      }
      static TranslationToRef(UU, XU, zU, cU) {
        return aU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, UU, XU, zU, 1, cU), cU._updateIdentityStatus(0 === UU && 0 === XU && 0 === zU), cU
      }
      static Lerp(UU, XU, zU) {
        const cU = new aU;
        return aU.LerpToRef(UU, XU, zU, cU), cU
      }
      static LerpToRef(UU, XU, zU, cU) {
        const yU = cU._m,
          QU = UU.m,
          AU = XU.m;
        for (let FU = 0; FU < 16; FU++) yU[FU] = QU[FU] * (1 - zU) + AU[FU] * zU;
        return cU.markAsUpdated(), cU
      }
      static DecomposeLerp(UU, XU, zU) {
        const cU = new aU;
        return aU.DecomposeLerpToRef(UU, XU, zU, cU), cU
      }
      static DecomposeLerpToRef(UU, XU, zU, cU) {
        const yU = tU.Sp[0],
          QU = tU.Quaternion[0],
          AU = tU.Sp[1];
        UU.decompose(yU, QU, AU);
        const FU = tU.Sp[2],
          oU = tU.Quaternion[1],
          DU = tU.Sp[3];
        XU.decompose(FU, oU, DU);
        const EU = tU.Sp[4];
        NU.LerpToRef(yU, FU, zU, EU);
        const YU = tU.Quaternion[2];
        pU.SlerpToRef(QU, oU, zU, YU);
        const IU = tU.Sp[5];
        return NU.LerpToRef(AU, DU, zU, IU), aU.ComposeToRef(EU, YU, IU, cU), cU
      }
      static LookAtLH(UU, XU, zU) {
        const cU = new aU;
        return aU.LookAtLHToRef(UU, XU, zU, cU), cU
      }
      static LookAtLHToRef(UU, XU, zU, cU) {
        const yU = tU.Sp[0],
          QU = tU.Sp[1],
          AU = tU.Sp[2];
        XU.subtractToRef(UU, AU), AU.normalize(), NU.CrossToRef(zU, AU, yU);
        const FU = yU.lengthSquared();
        0 === FU ? yU.x = 1 : yU.normalizeFromLength(Math.sqrt(FU)), NU.CrossToRef(AU, yU, QU), QU.normalize();
        const oU = -NU.Dot(yU, UU),
          DU = -NU.Dot(QU, UU),
          EU = -NU.Dot(AU, UU);
        return aU.FromValuesToRef(yU._x, QU._x, AU._x, 0, yU._y, QU._y, AU._y, 0, yU._z, QU._z, AU._z, 0, oU, DU, EU, 1, cU), cU
      }
      static LookAtRH(UU, XU, zU) {
        const cU = new aU;
        return aU.LookAtRHToRef(UU, XU, zU, cU), cU
      }
      static LookAtRHToRef(UU, XU, zU, cU) {
        const yU = tU.Sp[0],
          QU = tU.Sp[1],
          AU = tU.Sp[2];
        UU.subtractToRef(XU, AU), AU.normalize(), NU.CrossToRef(zU, AU, yU);
        const FU = yU.lengthSquared();
        0 === FU ? yU.x = 1 : yU.normalizeFromLength(Math.sqrt(FU)), NU.CrossToRef(AU, yU, QU), QU.normalize();
        const oU = -NU.Dot(yU, UU),
          DU = -NU.Dot(QU, UU),
          EU = -NU.Dot(AU, UU);
        return aU.FromValuesToRef(yU._x, QU._x, AU._x, 0, yU._y, QU._y, AU._y, 0, yU._z, QU._z, AU._z, 0, oU, DU, EU, 1, cU), cU
      }
      static LookDirectionLH(UU, XU) {
        const zU = new aU;
        return aU.LookDirectionLHToRef(UU, XU, zU), zU
      }
      static LookDirectionLHToRef(UU, XU, zU) {
        const cU = tU.Sp[0];
        cU.YL(UU), cU.scaleInPlace(-1);
        const yU = tU.Sp[1];
        return NU.CrossToRef(XU, cU, yU), aU.FromValuesToRef(yU._x, yU._y, yU._z, 0, XU._x, XU._y, XU._z, 0, cU._x, cU._y, cU._z, 0, 0, 0, 0, 1, zU), zU
      }
      static LookDirectionRH(UU, XU) {
        const zU = new aU;
        return aU.LookDirectionRHToRef(UU, XU, zU), zU
      }
      static LookDirectionRHToRef(UU, XU, zU) {
        const cU = tU.Sp[2];
        return NU.CrossToRef(XU, UU, cU), aU.FromValuesToRef(cU._x, cU._y, cU._z, 0, XU._x, XU._y, XU._z, 0, UU._x, UU._y, UU._z, 0, 0, 0, 0, 1, zU), zU
      }
      static OrthoLH(UU, XU, zU, cU, yU) {
        const QU = new aU;
        return aU.OrthoLHToRef(UU, XU, zU, cU, QU, yU), QU
      }
      static OrthoLHToRef(UU, XU, zU, cU, yU, QU) {
        const AU = 2 / UU,
          FU = 2 / XU,
          oU = 2 / (cU - zU),
          DU = -(cU + zU) / (cU - zU);
        return aU.FromValuesToRef(AU, 0, 0, 0, 0, FU, 0, 0, 0, 0, oU, 0, 0, 0, DU, 1, yU), QU && yU.multiplyToRef(kU, yU), yU._updateIdentityStatus(1 === AU && 1 === FU && 1 === oU && 0 === DU), yU
      }
      static OrthoOffCenterLH(UU, XU, zU, cU, yU, QU, AU) {
        const FU = new aU;
        return aU.OrthoOffCenterLHToRef(UU, XU, zU, cU, yU, QU, FU, AU), FU
      }
      static OrthoOffCenterLHToRef(UU, XU, zU, cU, yU, QU, AU, FU) {
        const oU = 2 / (XU - UU),
          DU = 2 / (cU - zU),
          EU = 2 / (QU - yU),
          YU = -(QU + yU) / (QU - yU),
          NU = (UU + XU) / (UU - XU),
          IU = (cU + zU) / (zU - cU);
        return aU.FromValuesToRef(oU, 0, 0, 0, 0, DU, 0, 0, 0, 0, EU, 0, NU, IU, YU, 1, AU), FU && AU.multiplyToRef(kU, AU), AU.markAsUpdated(), AU
      }
      static ObliqueOffCenterLHToRef(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
        const YU = -AU * Math.cos(FU),
          NU = -AU * Math.sin(FU);
        return aU.TranslationToRef(0, 0, -oU, tU.Matrix[1]), aU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, YU, NU, 1, 0, 0, 0, 0, 1, tU.Matrix[0]), tU.Matrix[1].multiplyToRef(tU.Matrix[0], tU.Matrix[0]), aU.TranslationToRef(0, 0, oU, tU.Matrix[1]), tU.Matrix[0].multiplyToRef(tU.Matrix[1], tU.Matrix[0]), aU.OrthoOffCenterLHToRef(UU, XU, zU, cU, yU, QU, DU, EU), tU.Matrix[0].multiplyToRef(DU, DU), DU
      }
      static OrthoOffCenterRH(UU, XU, zU, cU, yU, QU, AU) {
        const FU = new aU;
        return aU.OrthoOffCenterRHToRef(UU, XU, zU, cU, yU, QU, FU, AU), FU
      }
      static OrthoOffCenterRHToRef(UU, XU, zU, cU, yU, QU, AU, FU) {
        return aU.OrthoOffCenterLHToRef(UU, XU, zU, cU, yU, QU, AU, FU), AU._m[10] *= -1, AU
      }
      static ObliqueOffCenterRHToRef(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
        const YU = AU * Math.cos(FU),
          NU = AU * Math.sin(FU);
        return aU.TranslationToRef(0, 0, oU, tU.Matrix[1]), aU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, YU, NU, 1, 0, 0, 0, 0, 1, tU.Matrix[0]), tU.Matrix[1].multiplyToRef(tU.Matrix[0], tU.Matrix[0]), aU.TranslationToRef(0, 0, -oU, tU.Matrix[1]), tU.Matrix[0].multiplyToRef(tU.Matrix[1], tU.Matrix[0]), aU.OrthoOffCenterRHToRef(UU, XU, zU, cU, yU, QU, DU, EU), tU.Matrix[0].multiplyToRef(DU, DU), DU
      }
      static PerspectiveLH(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const AU = new aU,
          FU = 2 * zU / UU,
          oU = 2 * zU / XU,
          DU = (cU + zU) / (cU - zU),
          EU = -2 * cU * zU / (cU - zU),
          YU = Math.tan(QU);
        return aU.FromValuesToRef(FU, 0, 0, 0, 0, oU, 0, YU, 0, 0, DU, 1, 0, 0, EU, 0, AU), yU && AU.multiplyToRef(kU, AU), AU._updateIdentityStatus(!1), AU
      }
      static PerspectiveFovLH(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const FU = new aU;
        return aU.PerspectiveFovLHToRef(UU, XU, zU, cU, FU, !0, yU, QU, AU), FU
      }
      static PerspectiveFovLHToRef(UU, XU, zU, cU, yU) {
        let QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const DU = zU,
          EU = cU,
          YU = 1 / Math.tan(.5 * UU),
          NU = QU ? YU / XU : YU,
          IU = QU ? YU : YU * XU,
          pU = oU && 0 === DU ? -1 : 0 !== EU ? (EU + DU) / (EU - DU) : 1,
          tU = oU && 0 === DU ? 2 * EU : 0 !== EU ? -2 * EU * DU / (EU - DU) : -2 * DU,
          gU = Math.tan(FU);
        return aU.FromValuesToRef(NU, 0, 0, 0, 0, IU, 0, gU, 0, 0, pU, 1, 0, 0, tU, 0, yU), AU && yU.multiplyToRef(kU, yU), yU._updateIdentityStatus(!1), yU
      }
      static PerspectiveFovReverseLHToRef(UU, XU, zU, cU, yU) {
        let QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const oU = 1 / Math.tan(.5 * UU),
          DU = QU ? oU / XU : oU,
          EU = QU ? oU : oU * XU,
          YU = Math.tan(FU);
        return aU.FromValuesToRef(DU, 0, 0, 0, 0, EU, 0, YU, 0, 0, -zU, 1, 0, 0, 1, 0, yU), AU && yU.multiplyToRef(kU, yU), yU._updateIdentityStatus(!1), yU
      }
      static PerspectiveFovRH(UU, XU, zU, cU, yU) {
        let QU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const FU = new aU;
        return aU.PerspectiveFovRHToRef(UU, XU, zU, cU, FU, !0, yU, QU, AU), FU
      }
      static PerspectiveFovRHToRef(UU, XU, zU, cU, yU) {
        let QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          oU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const DU = zU,
          EU = cU,
          YU = 1 / Math.tan(.5 * UU),
          NU = QU ? YU / XU : YU,
          IU = QU ? YU : YU * XU,
          pU = oU && 0 === DU ? 1 : 0 !== EU ? -(EU + DU) / (EU - DU) : -1,
          tU = oU && 0 === DU ? 2 * EU : 0 !== EU ? -2 * EU * DU / (EU - DU) : -2 * DU,
          gU = Math.tan(FU);
        return aU.FromValuesToRef(NU, 0, 0, 0, 0, IU, 0, gU, 0, 0, pU, -1, 0, 0, tU, 0, yU), AU && yU.multiplyToRef(kU, yU), yU._updateIdentityStatus(!1), yU
      }
      static PerspectiveFovReverseRHToRef(UU, XU, zU, cU, yU) {
        let QU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AU = arguments.length > 6 ? arguments[6] : void 0,
          FU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const oU = 1 / Math.tan(.5 * UU),
          DU = QU ? oU / XU : oU,
          EU = QU ? oU : oU * XU,
          YU = Math.tan(FU);
        return aU.FromValuesToRef(DU, 0, 0, 0, 0, EU, 0, YU, 0, 0, -zU, -1, 0, 0, -1, 0, yU), AU && yU.multiplyToRef(kU, yU), yU._updateIdentityStatus(!1), yU
      }
      static GetFinalMatrix(UU, XU, zU, cU, yU, QU) {
        const AU = UU.width,
          FU = UU.height,
          oU = UU.x,
          DU = UU.y,
          EU = aU.FromValues(AU / 2, 0, 0, 0, 0, -FU / 2, 0, 0, 0, 0, QU - yU, 0, oU + AU / 2, FU / 2 + DU, yU, 1),
          YU = new aU;
        return XU.multiplyToRef(zU, YU), YU.multiplyToRef(cU, YU), YU.multiplyToRef(EU, YU)
      }
      static GetAsMatrix2x2(UU) {
        const XU = UU.m,
          zU = [XU[0], XU[1], XU[4], XU[5]];
        return QU.b.MatrixUse64Bits ? zU : new Float32Array(zU)
      }
      static GetAsMatrix3x3(UU) {
        const XU = UU.m,
          zU = [XU[0], XU[1], XU[2], XU[4], XU[5], XU[6], XU[8], XU[9], XU[10]];
        return QU.b.MatrixUse64Bits ? zU : new Float32Array(zU)
      }
      static Transpose(UU) {
        const XU = new aU;
        return aU.TransposeToRef(UU, XU), XU
      }
      static TransposeToRef(UU, XU) {
        const zU = UU.m,
          cU = zU[0],
          yU = zU[4],
          QU = zU[8],
          AU = zU[12],
          FU = zU[1],
          oU = zU[5],
          DU = zU[9],
          EU = zU[13],
          YU = zU[2],
          NU = zU[6],
          IU = zU[10],
          pU = zU[14],
          aU = zU[3],
          tU = zU[7],
          gU = zU[11],
          kU = zU[15],
          GU = XU._m;
        return GU[0] = cU, GU[1] = yU, GU[2] = QU, GU[3] = AU, GU[4] = FU, GU[5] = oU, GU[6] = DU, GU[7] = EU, GU[8] = YU, GU[9] = NU, GU[10] = IU, GU[11] = pU, GU[12] = aU, GU[13] = tU, GU[14] = gU, GU[15] = kU, XU.markAsUpdated(), XU._updateIdentityStatus(UU._isIdentity, UU._isIdentityDirty), XU
      }
      static Reflection(UU) {
        const XU = new aU;
        return aU.ReflectionToRef(UU, XU), XU
      }
      static ReflectionToRef(UU, XU) {
        UU.normalize();
        const zU = UU.normal.x,
          cU = UU.normal.y,
          yU = UU.normal.z,
          QU = -2 * zU,
          AU = -2 * cU,
          FU = -2 * yU;
        return aU.FromValuesToRef(QU * zU + 1, AU * zU, FU * zU, 0, QU * cU, AU * cU + 1, FU * cU, 0, QU * yU, AU * yU, FU * yU + 1, 0, QU * UU.d, AU * UU.d, FU * UU.d, 1, XU), XU
      }
      static FromXYZAxesToRef(UU, XU, zU, cU) {
        return aU.FromValuesToRef(UU._x, UU._y, UU._z, 0, XU._x, XU._y, XU._z, 0, zU._x, zU._y, zU._z, 0, 0, 0, 0, 1, cU), cU
      }
      static FromQuaternionToRef(UU, XU) {
        const zU = UU._x * UU._x,
          cU = UU._y * UU._y,
          yU = UU._z * UU._z,
          QU = UU._x * UU._y,
          AU = UU._z * UU._w,
          FU = UU._z * UU._x,
          oU = UU._y * UU._w,
          DU = UU._y * UU._z,
          EU = UU._x * UU._w;
        return XU._m[0] = 1 - 2 * (cU + yU), XU._m[1] = 2 * (QU + AU), XU._m[2] = 2 * (FU - oU), XU._m[3] = 0, XU._m[4] = 2 * (QU - AU), XU._m[5] = 1 - 2 * (yU + zU), XU._m[6] = 2 * (DU + EU), XU._m[7] = 0, XU._m[8] = 2 * (FU + oU), XU._m[9] = 2 * (DU - EU), XU._m[10] = 1 - 2 * (cU + zU), XU._m[11] = 0, XU._m[12] = 0, XU._m[13] = 0, XU._m[14] = 0, XU._m[15] = 1, XU.markAsUpdated(), XU
      }
    }
    aU._IdentityReadOnly = aU.Identity();
    class tU {}
    tU.Sp = (0, yU.f)(11, NU.Zero), tU.Matrix = (0, yU.f)(2, aU.Identity), tU.Quaternion = (0, yU.f)(3, pU.Zero);
    class gU {}
    gU.Vector2 = (0, yU.f)(3, YU.Zero), gU.Sp = (0, yU.f)(13, NU.Zero), gU.Vector4 = (0, yU.f)(3, IU.Zero), gU.Quaternion = (0, yU.f)(3, pU.Zero), gU.Matrix = (0, yU.f)(8, aU.Identity);
    const kU = aU.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let GU = !1;

    function BU() {
      GU || (GU = !0, Object.defineProperties(YU.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(NU.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(IU.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(pU.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(aU.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, DU.h)("BABYLON.Vector2", YU), (0, DU.h)("BABYLON.Vector3", NU), (0, DU.h)("BABYLON.Vector4", IU), (0, DU.h)("BABYLON.Matrix", aU))
    }
  },
  37846: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    const cU = "undefined" !== typeof WeakRef;
    class yU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(UU, XU, zU, cU)
      }
      initialize(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = UU, this.skipNextObservers = XU, this.target = zU, this.currentTarget = cU, this
      }
    }
    class QU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = UU, this.mask = XU, this.scope = zU, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(UU)
      }
    }
    class AU {
      static FromPromise(UU, XU) {
        const zU = new AU;
        return UU.then((UU => {
          zU.notifyObservers(UU)
        })).catch((UU => {
          if (!XU) throw UU;
          XU.notifyObservers(UU)
        })), zU
      }
      get observers() {
        return this._observers
      }
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = XU, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new yU(0), UU && (this._onObserverAdded = UU)
      }
      add(UU) {
        let XU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          zU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!UU) return null;
        const yU = new QU(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        yU.unregisterOnNextCall = zU, XU ? this._observers.unshift(yU) : this._observers.push(yU), this._onObserverAdded && this._onObserverAdded(yU), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(yU, this._lastNotifiedValue);
        const AU = cU ? new WeakRef(this) : {
          deref: () => this
        };
        return yU._remove = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const XU = AU.deref();
          XU && (UU ? XU.remove(yU) : XU._remove(yU))
        }, yU
      }
      addOnce(UU) {
        return this.add(UU, void 0, void 0, void 0, !0)
      }
      remove(UU) {
        if (!UU) return !1;
        UU._remove = null;
        return -1 !== this._observers.indexOf(UU) && (this._deferUnregister(UU), !0)
      }
      removeCallback(UU, XU) {
        for (let zU = 0; zU < this._observers.length; zU++) {
          const cU = this._observers[zU];
          if (!cU._willBeUnregistered && (cU.callback === UU && (!XU || XU === cU.scope))) return this._deferUnregister(cU), !0
        }
        return !1
      }
      _deferUnregister(UU) {
        UU._willBeUnregistered || (this._numObserversMarkedAsDeleted++, UU.unregisterOnNextCall = !1, UU._willBeUnregistered = !0, setTimeout((() => {
          this._remove(UU)
        }), 0))
      }
      _remove(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!UU) return !1;
        const zU = this._observers.indexOf(UU);
        return -1 !== zU && (XU && this._numObserversMarkedAsDeleted--, this._observers.splice(zU, 1), !0)
      }
      makeObserverTopPriority(UU) {
        this._remove(UU, !1), this._observers.unshift(UU)
      }
      makeObserverBottomPriority(UU) {
        this._remove(UU, !1), this._observers.push(UU)
      }
      notifyObservers(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = UU), !this._observers.length) return !0;
        const QU = this._eventState;
        QU.mask = XU, QU.target = zU, QU.currentTarget = cU, QU.skipNextObservers = !1, QU.lastReturnValue = UU, QU.userInfo = yU;
        for (const AU of this._observers)
          if (!AU._willBeUnregistered && (AU.mask & XU && (AU.unregisterOnNextCall && this._deferUnregister(AU), AU.scope ? QU.lastReturnValue = AU.callback.apply(AU.scope, [UU, QU]) : QU.lastReturnValue = AU.callback(UU, QU)), QU.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = XU), UU._willBeUnregistered) return;
        const cU = this._eventState;
        cU.mask = zU, cU.skipNextObservers = !1, UU.unregisterOnNextCall && this._deferUnregister(UU), UU.callback(XU, cU)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const UU = this._observers.pop();
          UU && (UU._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const UU = new AU;
        return UU._observers = this._observers.slice(0), UU
      }
      hasSpecificMask() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const XU of this._observers)
          if (XU.mask & UU || XU.mask === UU) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);