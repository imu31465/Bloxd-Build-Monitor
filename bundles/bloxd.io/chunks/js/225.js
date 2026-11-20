export const id = 225;
export const ids = [225];
export const modules = {
  36622: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(36624);
    class pU {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    pU.Instances = [], pU.OnEnginesDisposedObservable = new tU.b, pU._LastCreatedScene = null, pU.UseFallbackTexture = !0, pU.FallbackTexture = ""
  },
  36619: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => tU
    });
    class tU {
      static SetMatrixPrecision(UU) {
        if (tU.MatrixTrackPrecisionChange = !1, UU && !tU.MatrixUse64Bits && tU.MatrixTrackedMatrices)
          for (let RU = 0; RU < tU.MatrixTrackedMatrices.length; ++RU) {
            const UU = tU.MatrixTrackedMatrices[RU],
              gU = UU._m;
            UU._m = new Array(16);
            for (let RU = 0; RU < 16; ++RU) UU._m[RU] = gU[RU]
          }
        tU.MatrixUse64Bits = UU, tU.MatrixCurrentType = tU.MatrixUse64Bits ? Array : Float32Array, tU.MatrixTrackedMatrices = null
      }
    }
    tU.MatrixUse64Bits = !1, tU.MatrixTrackPrecisionChange = !0, tU.MatrixCurrentType = Float32Array, tU.MatrixTrackedMatrices = []
  },
  36634: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => TU,
      g: () => KU,
      j: () => qU,
      n: () => tU,
      q: () => EU,
      u: () => PU
    });
    class tU {}

    function pU(UU) {
      UU.updateFlag = tU._UpdateFlagSeed++
    }

    function EU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const pU = UU.vgU(),
        EU = RU.vgU(),
        PU = pU[0],
        TU = pU[1],
        qU = pU[2],
        KU = pU[3],
        cU = pU[4],
        GU = pU[5],
        jU = pU[6],
        uU = pU[7],
        CU = pU[8],
        hU = pU[9],
        QU = pU[10],
        eU = pU[11],
        WU = pU[12],
        fU = pU[13],
        xU = pU[14],
        mU = pU[15],
        IU = EU[0],
        JU = EU[1],
        wU = EU[2],
        nU = EU[3],
        bU = EU[4],
        oU = EU[5],
        ZU = EU[6],
        aU = EU[7],
        YU = EU[8],
        BU = EU[9],
        VU = EU[10],
        rU = EU[11],
        XU = EU[12],
        vU = EU[13],
        dU = EU[14],
        HU = EU[15];
      gU[tU] = PU * IU + TU * bU + qU * YU + KU * XU, gU[tU + 1] = PU * JU + TU * oU + qU * BU + KU * vU, gU[tU + 2] = PU * wU + TU * ZU + qU * VU + KU * dU, gU[tU + 3] = PU * nU + TU * aU + qU * rU + KU * HU, gU[tU + 4] = cU * IU + GU * bU + jU * YU + uU * XU, gU[tU + 5] = cU * JU + GU * oU + jU * BU + uU * vU, gU[tU + 6] = cU * wU + GU * ZU + jU * VU + uU * dU, gU[tU + 7] = cU * nU + GU * aU + jU * rU + uU * HU, gU[tU + 8] = CU * IU + hU * bU + QU * YU + eU * XU, gU[tU + 9] = CU * JU + hU * oU + QU * BU + eU * vU, gU[tU + 10] = CU * wU + hU * ZU + QU * VU + eU * dU, gU[tU + 11] = CU * nU + hU * aU + QU * rU + eU * HU, gU[tU + 12] = WU * IU + fU * bU + xU * YU + mU * XU, gU[tU + 13] = WU * JU + fU * oU + xU * BU + mU * vU, gU[tU + 14] = WU * wU + fU * ZU + xU * VU + mU * dU, gU[tU + 15] = WU * nU + fU * aU + xU * rU + mU * HU
    }

    function PU(UU, RU, gU) {
      let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      EU(UU, RU, gU.vgU(), tU), pU(gU)
    }

    function TU(UU, RU) {
      let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const tU = UU.vgU();
      RU[gU] = tU[0], RU[gU + 1] = tU[1], RU[gU + 2] = tU[2], RU[gU + 3] = tU[3], RU[gU + 4] = tU[4], RU[gU + 5] = tU[5], RU[gU + 6] = tU[6], RU[gU + 7] = tU[7], RU[gU + 8] = tU[8], RU[gU + 9] = tU[9], RU[gU + 10] = tU[10], RU[gU + 11] = tU[11], RU[gU + 12] = tU[12], RU[gU + 13] = tU[13], RU[gU + 14] = tU[14], RU[gU + 15] = tU[15]
    }

    function qU(UU, RU) {
      const gU = KU(UU, RU.vgU());
      return gU && pU(RU), gU
    }

    function KU(UU, RU) {
      const gU = UU.vgU(),
        tU = gU[0],
        pU = gU[1],
        EU = gU[2],
        PU = gU[3],
        TU = gU[4],
        qU = gU[5],
        KU = gU[6],
        cU = gU[7],
        GU = gU[8],
        jU = gU[9],
        uU = gU[10],
        CU = gU[11],
        hU = gU[12],
        QU = gU[13],
        eU = gU[14],
        WU = gU[15],
        fU = uU * WU - eU * CU,
        xU = jU * WU - QU * CU,
        mU = jU * eU - QU * uU,
        IU = GU * WU - hU * CU,
        JU = GU * eU - uU * hU,
        wU = GU * QU - hU * jU,
        nU = +(qU * fU - KU * xU + cU * mU),
        bU = -(TU * fU - KU * IU + cU * JU),
        oU = +(TU * xU - qU * IU + cU * wU),
        ZU = -(TU * mU - qU * JU + KU * wU),
        aU = tU * nU + pU * bU + EU * oU + PU * ZU;
      if (0 === aU) return !1;
      const YU = 1 / aU,
        BU = KU * WU - eU * cU,
        VU = qU * WU - QU * cU,
        rU = qU * eU - QU * KU,
        XU = TU * WU - hU * cU,
        vU = TU * eU - hU * KU,
        dU = TU * QU - hU * qU,
        HU = KU * CU - uU * cU,
        SU = qU * CU - jU * cU,
        sU = qU * uU - jU * KU,
        yU = TU * CU - GU * cU,
        kU = TU * uU - GU * KU,
        FU = TU * jU - GU * qU,
        iU = -(pU * fU - EU * xU + PU * mU),
        AU = +(tU * fU - EU * IU + PU * JU),
        zU = -(tU * xU - pU * IU + PU * wU),
        MU = +(tU * mU - pU * JU + EU * wU),
        DU = +(pU * BU - EU * VU + PU * rU),
        LU = -(tU * BU - EU * XU + PU * vU),
        NU = +(tU * VU - pU * XU + PU * dU),
        lU = -(tU * rU - pU * vU + EU * dU),
        OU = -(pU * HU - EU * SU + PU * sU),
        UR = +(tU * HU - EU * yU + PU * kU),
        RR = -(tU * SU - pU * yU + PU * FU),
        gR = +(tU * sU - pU * kU + EU * FU);
      return RU[0] = nU * YU, RU[1] = iU * YU, RU[2] = DU * YU, RU[3] = OU * YU, RU[4] = bU * YU, RU[5] = AU * YU, RU[6] = LU * YU, RU[7] = UR * YU, RU[8] = oU * YU, RU[9] = zU * YU, RU[10] = NU * YU, RU[11] = RR * YU, RU[12] = ZU * YU, RU[13] = MU * YU, RU[14] = lU * YU, RU[15] = gR * YU, !0
    }
    tU._UpdateFlagSeed = 0
  },
  36600: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => hU,
      d: () => CU,
      g: () => xU,
      h: () => eU,
      l: () => GU,
      n: () => jU,
      q: () => uU
    });
    var tU = gU(36602),
      pU = gU(36610),
      EU = gU(36619),
      PU = gU(36622),
      TU = gU(36626),
      qU = gU(36634),
      KU = gU(36639);
    const cU = UU => parseInt(UU.toString().replace(/\W/g, ""));
    class GU {
      constructor() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = UU, this.y = RU
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let UU = cU(this.x);
        return UU = 397 * UU ^ cU(this.y), UU
      }
      toArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[RU] = this.x, UU[RU + 1] = this.y, this
      }
      bRU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GU.FromArrayToRef(UU, RU, this), this
      }
      vgU() {
        return [this.x, this.y]
      }
      PgU(UU) {
        return this.x = UU.x, this.y = UU.y, this
      }
      b_(UU, RU) {
        return this.x = UU, this.y = RU, this
      }
      set(UU, RU) {
        return this.b_(UU, RU)
      }
      Y5(UU) {
        return this.b_(UU, UU)
      }
      add(UU) {
        return new GU(this.x + UU.x, this.y + UU.y)
      }
      addToRef(UU, RU) {
        return RU.x = this.x + UU.x, RU.y = this.y + UU.y, RU
      }
      addInPlace(UU) {
        return this.x += UU.x, this.y += UU.y, this
      }
      addInPlaceFromFloats(UU, RU) {
        return this.x += UU, this.y += RU, this
      }
      addVector3(UU) {
        return new GU(this.x + UU.x, this.y + UU.y)
      }
      subtract(UU) {
        return new GU(this.x - UU.x, this.y - UU.y)
      }
      subtractToRef(UU, RU) {
        return RU.x = this.x - UU.x, RU.y = this.y - UU.y, RU
      }
      ptU(UU) {
        return this.x -= UU.x, this.y -= UU.y, this
      }
      multiplyInPlace(UU) {
        return this.x *= UU.x, this.y *= UU.y, this
      }
      multiply(UU) {
        return new GU(this.x * UU.x, this.y * UU.y)
      }
      multiplyToRef(UU, RU) {
        return RU.x = this.x * UU.x, RU.y = this.y * UU.y, RU
      }
      multiplyByFloats(UU, RU) {
        return new GU(this.x * UU, this.y * RU)
      }
      divide(UU) {
        return new GU(this.x / UU.x, this.y / UU.y)
      }
      divideToRef(UU, RU) {
        return RU.x = this.x / UU.x, RU.y = this.y / UU.y, RU
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
      minimizeInPlaceFromFloats(UU, RU) {
        return this.x = Math.min(UU, this.x), this.y = Math.min(RU, this.y), this
      }
      maximizeInPlaceFromFloats(UU, RU) {
        return this.x = Math.max(UU, this.x), this.y = Math.max(RU, this.y), this
      }
      subtractFromFloats(UU, RU) {
        return new GU(this.x - UU, this.y - RU)
      }
      subtractFromFloatsToRef(UU, RU, gU) {
        return gU.x = this.x - UU, gU.y = this.y - RU, gU
      }
      nt() {
        return new GU(-this.x, -this.y)
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
        return new GU(this.x * UU, this.y * UU)
      }
      scaleToRef(UU, RU) {
        return RU.x = this.x * UU, RU.y = this.y * UU, RU
      }
      scaleAndAddToRef(UU, RU) {
        return RU.x += this.x * UU, RU.y += this.y * UU, RU
      }
      equals(UU) {
        return UU && this.x === UU.x && this.y === UU.y
      }
      equalsWithEpsilon(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU.e;
        return UU && (0, TU.WithinEpsilon)(this.x, UU.x, RU) && (0, TU.WithinEpsilon)(this.y, UU.y, RU)
      }
      cPU(UU, RU) {
        return this.x === UU && this.y === RU
      }
      floor() {
        return new GU(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(UU) {
        return UU.x = Math.floor(this.x), UU.y = Math.floor(this.y), UU
      }
      fract() {
        return new GU(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(UU) {
        return UU.x = this.x - Math.floor(this.x), UU.y = this.y - Math.floor(this.y), UU
      }
      rotate(UU) {
        return this.rotateToRef(UU, new GU)
      }
      rotateToRef(UU, RU) {
        const gU = Math.cos(UU),
          tU = Math.sin(UU);
        return RU.x = gU * this.x - tU * this.y, RU.y = tU * this.x + gU * this.y, RU
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
        const UU = new GU;
        return this.normalizeToRef(UU), UU
      }
      normalizeToRef(UU) {
        const RU = this.length();
        return 0 === RU || 1 === RU ? (UU.x = this.x, UU.y = this.y, UU) : this.scaleToRef(1 / RU, UU)
      }
      clone() {
        return new GU(this.x, this.y)
      }
      dot(UU) {
        return this.x * UU.x + this.y * UU.y
      }
      static Zero() {
        return new GU(0, 0)
      }
      static One() {
        return new GU(1, 1)
      }
      static Random() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new GU((0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU))
      }
      static RandomToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).b_((0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU))
      }
      static get ZeroReadOnly() {
        return GU._ZeroReadOnly
      }
      static FromArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new GU(UU[RU], UU[RU + 1])
      }
      static FromArrayToRef(UU, RU, gU) {
        return gU.x = UU[RU], gU.y = UU[RU + 1], gU
      }
      static FromFloatsToRef(UU, RU, gU) {
        return gU.b_(UU, RU), gU
      }
      static CatmullRom(UU, RU, gU, tU, pU) {
        const EU = pU * pU,
          PU = pU * EU,
          TU = .5 * (2 * RU.x + (-UU.x + gU.x) * pU + (2 * UU.x - 5 * RU.x + 4 * gU.x - tU.x) * EU + (-UU.x + 3 * RU.x - 3 * gU.x + tU.x) * PU),
          qU = .5 * (2 * RU.y + (-UU.y + gU.y) * pU + (2 * UU.y - 5 * RU.y + 4 * gU.y - tU.y) * EU + (-UU.y + 3 * RU.y - 3 * gU.y + tU.y) * PU);
        return new GU(TU, qU)
      }
      static ClampToRef(UU, RU, gU, tU) {
        return tU.x = (0, TU.Clamp)(UU.x, RU.x, gU.x), tU.y = (0, TU.Clamp)(UU.y, RU.y, gU.y), tU
      }
      static Clamp(UU, RU, gU) {
        const tU = (0, TU.Clamp)(UU.x, RU.x, gU.x),
          pU = (0, TU.Clamp)(UU.y, RU.y, gU.y);
        return new GU(tU, pU)
      }
      static Hermite(UU, RU, gU, tU, pU) {
        const EU = pU * pU,
          PU = pU * EU,
          TU = 2 * PU - 3 * EU + 1,
          qU = -2 * PU + 3 * EU,
          KU = PU - 2 * EU + pU,
          cU = PU - EU,
          jU = UU.x * TU + gU.x * qU + RU.x * KU + tU.x * cU,
          uU = UU.y * TU + gU.y * qU + RU.y * KU + tU.y * cU;
        return new GU(jU, uU)
      }
      static Hermite1stDerivative(UU, RU, gU, tU, pU) {
        return this.Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, new GU)
      }
      static Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU) {
        const PU = pU * pU;
        return EU.x = 6 * (PU - pU) * UU.x + (3 * PU - 4 * pU + 1) * RU.x + 6 * (-PU + pU) * gU.x + (3 * PU - 2 * pU) * tU.x, EU.y = 6 * (PU - pU) * UU.y + (3 * PU - 4 * pU + 1) * RU.y + 6 * (-PU + pU) * gU.y + (3 * PU - 2 * pU) * tU.y, EU
      }
      static Lerp(UU, RU, gU) {
        return GU.LerpToRef(UU, RU, gU, new GU)
      }
      static LerpToRef(UU, RU, gU, tU) {
        return tU.x = UU.x + (RU.x - UU.x) * gU, tU.y = UU.y + (RU.y - UU.y) * gU, tU
      }
      static Dot(UU, RU) {
        return UU.x * RU.x + UU.y * RU.y
      }
      static Normalize(UU) {
        return GU.NormalizeToRef(UU, new GU)
      }
      static NormalizeToRef(UU, RU) {
        return UU.normalizeToRef(RU), RU
      }
      static Minimize(UU, RU) {
        const gU = UU.x < RU.x ? UU.x : RU.x,
          tU = UU.y < RU.y ? UU.y : RU.y;
        return new GU(gU, tU)
      }
      static Maximize(UU, RU) {
        const gU = UU.x > RU.x ? UU.x : RU.x,
          tU = UU.y > RU.y ? UU.y : RU.y;
        return new GU(gU, tU)
      }
      static Transform(UU, RU) {
        return GU.TransformToRef(UU, RU, new GU)
      }
      static TransformToRef(UU, RU, gU) {
        const tU = RU.m,
          pU = UU.x * tU[0] + UU.y * tU[4] + tU[12],
          EU = UU.x * tU[1] + UU.y * tU[5] + tU[13];
        return gU.x = pU, gU.y = EU, gU
      }
      static PointInTriangle(UU, RU, gU, tU) {
        const pU = .5 * (-gU.y * tU.x + RU.y * (-gU.x + tU.x) + RU.x * (gU.y - tU.y) + gU.x * tU.y),
          EU = pU < 0 ? -1 : 1,
          PU = (RU.y * tU.x - RU.x * tU.y + (tU.y - RU.y) * UU.x + (RU.x - tU.x) * UU.y) * EU,
          TU = (RU.x * gU.y - RU.y * gU.x + (RU.y - gU.y) * UU.x + (gU.x - RU.x) * UU.y) * EU;
        return PU > 0 && TU > 0 && PU + TU < 2 * pU * EU
      }
      static Distance(UU, RU) {
        return Math.sqrt(GU.DistanceSquared(UU, RU))
      }
      static DistanceSquared(UU, RU) {
        const gU = UU.x - RU.x,
          tU = UU.y - RU.y;
        return gU * gU + tU * tU
      }
      static Center(UU, RU) {
        return GU.CenterToRef(UU, RU, new GU)
      }
      static CenterToRef(UU, RU, gU) {
        return gU.b_((UU.x + RU.x) / 2, (UU.y + RU.y) / 2)
      }
      static DistanceOfPointFromSegment(UU, RU, gU) {
        const tU = GU.DistanceSquared(RU, gU);
        if (0 === tU) return GU.Distance(UU, RU);
        const pU = gU.subtract(RU),
          EU = Math.max(0, Math.min(1, GU.Dot(UU.subtract(RU), pU) / tU)),
          PU = RU.add(pU.multiplyByFloats(EU, EU));
        return GU.Distance(UU, PU)
      }
    }
    GU._V8PerformanceHack = new GU(.5, .5), GU._ZeroReadOnly = GU.Zero();
    class jU {
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
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = UU, this._y = RU, this._z = gU
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "xC"
      }
      getHashCode() {
        let UU = cU(this._x);
        return UU = 397 * UU ^ cU(this._y), UU = 397 * UU ^ cU(this._z), UU
      }
      vgU() {
        return [this._x, this._y, this._z]
      }
      toArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[RU] = this._x, UU[RU + 1] = this._y, UU[RU + 2] = this._z, this
      }
      bRU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return jU.FromArrayToRef(UU, RU, this), this
      }
      toQuaternion() {
        return CU.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(UU) {
        return this._x += UU._x, this._y += UU._y, this._z += UU._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(UU, RU, gU) {
        return this._x += UU, this._y += RU, this._z += gU, this._isDirty = !0, this
      }
      add(UU) {
        return new jU(this._x + UU._x, this._y + UU._y, this._z + UU._z)
      }
      addToRef(UU, RU) {
        return RU._x = this._x + UU._x, RU._y = this._y + UU._y, RU._z = this._z + UU._z, RU._isDirty = !0, RU
      }
      ptU(UU) {
        return this._x -= UU._x, this._y -= UU._y, this._z -= UU._z, this._isDirty = !0, this
      }
      subtract(UU) {
        return new jU(this._x - UU._x, this._y - UU._y, this._z - UU._z)
      }
      subtractToRef(UU, RU) {
        return this.subtractFromFloatsToRef(UU._x, UU._y, UU._z, RU)
      }
      subtractFromFloats(UU, RU, gU) {
        return new jU(this._x - UU, this._y - RU, this._z - gU)
      }
      subtractFromFloatsToRef(UU, RU, gU, tU) {
        return tU._x = this._x - UU, tU._y = this._y - RU, tU._z = this._z - gU, tU._isDirty = !0, tU
      }
      nt() {
        return new jU(-this._x, -this._y, -this._z)
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
        return new jU(this._x * UU, this._y * UU, this._z * UU)
      }
      scaleToRef(UU, RU) {
        return RU._x = this._x * UU, RU._y = this._y * UU, RU._z = this._z * UU, RU._isDirty = !0, RU
      }
      getNormalToRef(UU) {
        const RU = this.length();
        let gU = Math.acos(this._y / RU);
        const tU = Math.atan2(this._z, this._x);
        gU > Math.PI / 2 ? gU -= Math.PI / 2 : gU += Math.PI / 2;
        const pU = RU * Math.sin(gU) * Math.cos(tU),
          EU = RU * Math.cos(gU),
          PU = RU * Math.sin(gU) * Math.sin(tU);
        return UU.set(pU, EU, PU), UU
      }
      applyRotationQuaternionToRef(UU, RU) {
        const gU = this._x,
          tU = this._y,
          pU = this._z,
          EU = UU._x,
          PU = UU._y,
          TU = UU._z,
          qU = UU._w,
          KU = 2 * (PU * pU - TU * tU),
          cU = 2 * (TU * gU - EU * pU),
          GU = 2 * (EU * tU - PU * gU);
        return RU._x = gU + qU * KU + PU * GU - TU * cU, RU._y = tU + qU * cU + TU * KU - EU * GU, RU._z = pU + qU * GU + EU * cU - PU * KU, RU._isDirty = !0, RU
      }
      applyRotationQuaternionInPlace(UU) {
        return this.applyRotationQuaternionToRef(UU, this)
      }
      applyRotationQuaternion(UU) {
        return this.applyRotationQuaternionToRef(UU, new jU)
      }
      scaleAndAddToRef(UU, RU) {
        return RU._x += this._x * UU, RU._y += this._y * UU, RU._z += this._z * UU, RU._isDirty = !0, RU
      }
      projectOnPlane(UU, RU) {
        return this.projectOnPlaneToRef(UU, RU, new jU)
      }
      projectOnPlaneToRef(UU, RU, gU) {
        const tU = UU.normal,
          pU = UU.d,
          EU = QU.xC[0];
        this.subtractToRef(RU, EU), EU.normalize();
        const PU = jU.Dot(EU, tU);
        if (Math.abs(PU) < 1e-10) gU.Y5(1 / 0);
        else {
          const UU = -(jU.Dot(RU, tU) + pU) / PU,
            TU = EU.scaleInPlace(UU);
          RU.addToRef(TU, gU)
        }
        return gU
      }
      equals(UU) {
        return UU && this._x === UU._x && this._y === UU._y && this._z === UU._z
      }
      equalsWithEpsilon(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU.e;
        return UU && (0, TU.WithinEpsilon)(this._x, UU._x, RU) && (0, TU.WithinEpsilon)(this._y, UU._y, RU) && (0, TU.WithinEpsilon)(this._z, UU._z, RU)
      }
      cPU(UU, RU, gU) {
        return this._x === UU && this._y === RU && this._z === gU
      }
      multiplyInPlace(UU) {
        return this._x *= UU._x, this._y *= UU._y, this._z *= UU._z, this._isDirty = !0, this
      }
      multiply(UU) {
        return this.multiplyByFloats(UU._x, UU._y, UU._z)
      }
      multiplyToRef(UU, RU) {
        return RU._x = this._x * UU._x, RU._y = this._y * UU._y, RU._z = this._z * UU._z, RU._isDirty = !0, RU
      }
      multiplyByFloats(UU, RU, gU) {
        return new jU(this._x * UU, this._y * RU, this._z * gU)
      }
      divide(UU) {
        return new jU(this._x / UU._x, this._y / UU._y, this._z / UU._z)
      }
      divideToRef(UU, RU) {
        return RU._x = this._x / UU._x, RU._y = this._y / UU._y, RU._z = this._z / UU._z, RU._isDirty = !0, RU
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
      minimizeInPlaceFromFloats(UU, RU, gU) {
        return UU < this._x && (this.x = UU), RU < this._y && (this.y = RU), gU < this._z && (this.z = gU), this
      }
      maximizeInPlaceFromFloats(UU, RU, gU) {
        return UU > this._x && (this.x = UU), RU > this._y && (this.y = RU), gU > this._z && (this.z = gU), this
      }
      isNonUniformWithinEpsilon(UU) {
        const RU = Math.abs(this._x),
          gU = Math.abs(this._y);
        if (!(0, TU.WithinEpsilon)(RU, gU, UU)) return !0;
        const tU = Math.abs(this._z);
        return !(0, TU.WithinEpsilon)(RU, tU, UU) || !(0, TU.WithinEpsilon)(gU, tU, UU)
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
        return new jU(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(UU) {
        return UU._x = this._x - Math.floor(this._x), UU._y = this._y - Math.floor(this._y), UU._z = this._z - Math.floor(this._z), UU._isDirty = !0, UU
      }
      fract() {
        return new jU(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const RU = QU.xC[0].PgU(this);
        return this.x = RU[UU[0]], this.y = RU[UU[1]], this.z = RU[UU[2]], this
      }
      rotateByQuaternionToRef(UU, RU) {
        return UU.toRotationMatrix(QU.Matrix[0]), jU.TransformCoordinatesToRef(this, QU.Matrix[0], RU), RU
      }
      rotateByQuaternionAroundPointToRef(UU, RU, gU) {
        return this.subtractToRef(RU, QU.xC[0]), QU.xC[0].rotateByQuaternionToRef(UU, QU.xC[0]), RU.addToRef(QU.xC[0], gU), gU
      }
      cross(UU) {
        return jU.CrossToRef(this, UU, new jU)
      }
      normalizeFromLength(UU) {
        return 0 === UU || 1 === UU ? this : this.scaleInPlace(1 / UU)
      }
      normalizeToNew() {
        return this.normalizeToRef(new jU)
      }
      normalizeToRef(UU) {
        const RU = this.length();
        return 0 === RU || 1 === RU ? (UU._x = this._x, UU._y = this._y, UU._z = this._z, UU._isDirty = !0, UU) : this.scaleToRef(1 / RU, UU)
      }
      clone() {
        return new jU(this._x, this._y, this._z)
      }
      PgU(UU) {
        return this.b_(UU._x, UU._y, UU._z)
      }
      b_(UU, RU, gU) {
        return this._x = UU, this._y = RU, this._z = gU, this._isDirty = !0, this
      }
      set(UU, RU, gU) {
        return this.b_(UU, RU, gU)
      }
      Y5(UU) {
        return this._x = this._y = this._z = UU, this._isDirty = !0, this
      }
      static GetClipFactor(UU, RU, gU, tU) {
        const pU = jU.Dot(UU, gU);
        return (pU - tU) / (pU - jU.Dot(RU, gU))
      }
      static GetAngleBetweenVectors(UU, RU, gU) {
        const tU = UU.normalizeToRef(QU.xC[1]),
          pU = RU.normalizeToRef(QU.xC[2]);
        let EU = jU.Dot(tU, pU);
        EU = (0, TU.Clamp)(EU, -1, 1);
        const PU = Math.acos(EU),
          qU = QU.xC[3];
        return jU.CrossToRef(tU, pU, qU), jU.Dot(qU, gU) > 0 ? isNaN(PU) ? 0 : PU : isNaN(PU) ? -Math.PI : -Math.acos(EU)
      }
      static GetAngleBetweenVectorsOnPlane(UU, RU, gU) {
        QU.xC[0].PgU(UU);
        const tU = QU.xC[0];
        QU.xC[1].PgU(RU);
        const pU = QU.xC[1];
        QU.xC[2].PgU(gU);
        const EU = QU.xC[2],
          PU = QU.xC[3],
          qU = QU.xC[4];
        tU.normalize(), pU.normalize(), EU.normalize(), jU.CrossToRef(EU, tU, PU), jU.CrossToRef(PU, EU, qU);
        const KU = Math.atan2(jU.Dot(pU, PU), jU.Dot(pU, qU));
        return (0, TU.NormalizeRadians)(KU)
      }
      static PitchYawRollToMoveBetweenPointsToRef(UU, RU, gU) {
        const tU = eU.xC[0];
        return RU.subtractToRef(UU, tU), gU._y = Math.atan2(tU.x, tU.z) || 0, gU._x = Math.atan2(Math.sqrt(tU.x ** 2 + tU.z ** 2), tU.y) || 0, gU._z = 0, gU._isDirty = !0, gU
      }
      static PitchYawRollToMoveBetweenPoints(UU, RU) {
        const gU = jU.Zero();
        return jU.PitchYawRollToMoveBetweenPointsToRef(UU, RU, gU)
      }
      static SlerpToRef(UU, RU, gU, pU) {
        gU = (0, TU.Clamp)(gU, 0, 1);
        const EU = QU.xC[0],
          PU = QU.xC[1];
        EU.PgU(UU);
        const qU = EU.length();
        EU.normalizeFromLength(qU), PU.PgU(RU);
        const KU = PU.length();
        PU.normalizeFromLength(KU);
        const cU = jU.Dot(EU, PU);
        let GU, uU;
        if (cU < 1 - tU.e) {
          const UU = Math.acos(cU),
            RU = 1 / Math.sin(UU);
          GU = Math.sin((1 - gU) * UU) * RU, uU = Math.sin(gU * UU) * RU
        } else GU = 1 - gU, uU = gU;
        return EU.scaleInPlace(GU), PU.scaleInPlace(uU), pU.PgU(EU).addInPlace(PU), pU.scaleInPlace((0, TU.Lerp)(qU, KU, gU)), pU
      }
      static SmoothToRef(UU, RU, gU, tU, pU) {
        return jU.SlerpToRef(UU, RU, 0 === tU ? 1 : gU / tU, pU), pU
      }
      static FromArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new jU(UU[RU], UU[RU + 1], UU[RU + 2])
      }
      static FromFloatArray(UU, RU) {
        return jU.FromArray(UU, RU)
      }
      static FromArrayToRef(UU, RU, gU) {
        return gU._x = UU[RU], gU._y = UU[RU + 1], gU._z = UU[RU + 2], gU._isDirty = !0, gU
      }
      static FromFloatArrayToRef(UU, RU, gU) {
        return jU.FromArrayToRef(UU, RU, gU)
      }
      static FromFloatsToRef(UU, RU, gU, tU) {
        return tU.b_(UU, RU, gU), tU
      }
      static Zero() {
        return new jU(0, 0, 0)
      }
      static One() {
        return new jU(1, 1, 1)
      }
      static Up() {
        return new jU(0, 1, 0)
      }
      static get UpReadOnly() {
        return jU._UpReadOnly
      }
      static get DownReadOnly() {
        return jU._DownReadOnly
      }
      static get RightReadOnly() {
        return jU._RightReadOnly
      }
      static get LeftReadOnly() {
        return jU._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return jU._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return jU._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return jU._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return jU._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return jU._ZeroReadOnly
      }
      static get OneReadOnly() {
        return jU._OneReadOnly
      }
      static Down() {
        return new jU(0, -1, 0)
      }
      static Forward() {
        return new jU(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new jU(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new jU(1, 0, 0)
      }
      static Left() {
        return new jU(-1, 0, 0)
      }
      static Random() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new jU((0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU))
      }
      static RandomToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).b_((0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU))
      }
      static TransformCoordinates(UU, RU) {
        const gU = jU.Zero();
        return jU.TransformCoordinatesToRef(UU, RU, gU), gU
      }
      static TransformCoordinatesToRef(UU, RU, gU) {
        return jU.TransformCoordinatesFromFloatsToRef(UU._x, UU._y, UU._z, RU, gU), gU
      }
      static TransformCoordinatesFromFloatsToRef(UU, RU, gU, tU, pU) {
        const EU = tU.m,
          PU = UU * EU[0] + RU * EU[4] + gU * EU[8] + EU[12],
          TU = UU * EU[1] + RU * EU[5] + gU * EU[9] + EU[13],
          qU = UU * EU[2] + RU * EU[6] + gU * EU[10] + EU[14],
          KU = 1 / (UU * EU[3] + RU * EU[7] + gU * EU[11] + EU[15]);
        return pU._x = PU * KU, pU._y = TU * KU, pU._z = qU * KU, pU._isDirty = !0, pU
      }
      static TransformNormal(UU, RU) {
        const gU = jU.Zero();
        return jU.TransformNormalToRef(UU, RU, gU), gU
      }
      static TransformNormalToRef(UU, RU, gU) {
        return this.TransformNormalFromFloatsToRef(UU._x, UU._y, UU._z, RU, gU), gU
      }
      static TransformNormalFromFloatsToRef(UU, RU, gU, tU, pU) {
        const EU = tU.m;
        return pU._x = UU * EU[0] + RU * EU[4] + gU * EU[8], pU._y = UU * EU[1] + RU * EU[5] + gU * EU[9], pU._z = UU * EU[2] + RU * EU[6] + gU * EU[10], pU._isDirty = !0, pU
      }
      static CatmullRom(UU, RU, gU, tU, pU) {
        const EU = pU * pU,
          PU = pU * EU,
          TU = .5 * (2 * RU._x + (-UU._x + gU._x) * pU + (2 * UU._x - 5 * RU._x + 4 * gU._x - tU._x) * EU + (-UU._x + 3 * RU._x - 3 * gU._x + tU._x) * PU),
          qU = .5 * (2 * RU._y + (-UU._y + gU._y) * pU + (2 * UU._y - 5 * RU._y + 4 * gU._y - tU._y) * EU + (-UU._y + 3 * RU._y - 3 * gU._y + tU._y) * PU),
          KU = .5 * (2 * RU._z + (-UU._z + gU._z) * pU + (2 * UU._z - 5 * RU._z + 4 * gU._z - tU._z) * EU + (-UU._z + 3 * RU._z - 3 * gU._z + tU._z) * PU);
        return new jU(TU, qU, KU)
      }
      static Clamp(UU, RU, gU) {
        const tU = new jU;
        return jU.ClampToRef(UU, RU, gU, tU), tU
      }
      static ClampToRef(UU, RU, gU, tU) {
        let pU = UU._x;
        pU = pU > gU._x ? gU._x : pU, pU = pU < RU._x ? RU._x : pU;
        let EU = UU._y;
        EU = EU > gU._y ? gU._y : EU, EU = EU < RU._y ? RU._y : EU;
        let PU = UU._z;
        return PU = PU > gU._z ? gU._z : PU, PU = PU < RU._z ? RU._z : PU, tU.b_(pU, EU, PU), tU
      }
      static CheckExtends(UU, RU, gU) {
        RU.minimizeInPlace(UU), gU.maximizeInPlace(UU)
      }
      static Hermite(UU, RU, gU, tU, pU) {
        const EU = pU * pU,
          PU = pU * EU,
          TU = 2 * PU - 3 * EU + 1,
          qU = -2 * PU + 3 * EU,
          KU = PU - 2 * EU + pU,
          cU = PU - EU,
          GU = UU._x * TU + gU._x * qU + RU._x * KU + tU._x * cU,
          uU = UU._y * TU + gU._y * qU + RU._y * KU + tU._y * cU,
          CU = UU._z * TU + gU._z * qU + RU._z * KU + tU._z * cU;
        return new jU(GU, uU, CU)
      }
      static Hermite1stDerivative(UU, RU, gU, tU, pU) {
        const EU = new jU;
        return this.Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU), EU
      }
      static Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU) {
        const PU = pU * pU;
        return EU._x = 6 * (PU - pU) * UU._x + (3 * PU - 4 * pU + 1) * RU._x + 6 * (-PU + pU) * gU._x + (3 * PU - 2 * pU) * tU._x, EU._y = 6 * (PU - pU) * UU._y + (3 * PU - 4 * pU + 1) * RU._y + 6 * (-PU + pU) * gU._y + (3 * PU - 2 * pU) * tU._y, EU._z = 6 * (PU - pU) * UU._z + (3 * PU - 4 * pU + 1) * RU._z + 6 * (-PU + pU) * gU._z + (3 * PU - 2 * pU) * tU._z, EU._isDirty = !0, EU
      }
      static Lerp(UU, RU, gU) {
        const tU = new jU(0, 0, 0);
        return jU.LerpToRef(UU, RU, gU, tU), tU
      }
      static LerpToRef(UU, RU, gU, tU) {
        return tU._x = UU._x + (RU._x - UU._x) * gU, tU._y = UU._y + (RU._y - UU._y) * gU, tU._z = UU._z + (RU._z - UU._z) * gU, tU._isDirty = !0, tU
      }
      static Dot(UU, RU) {
        return UU._x * RU._x + UU._y * RU._y + UU._z * RU._z
      }
      dot(UU) {
        return this._x * UU._x + this._y * UU._y + this._z * UU._z
      }
      static Cross(UU, RU) {
        const gU = new jU;
        return jU.CrossToRef(UU, RU, gU), gU
      }
      static CrossToRef(UU, RU, gU) {
        const tU = UU._y * RU._z - UU._z * RU._y,
          pU = UU._z * RU._x - UU._x * RU._z,
          EU = UU._x * RU._y - UU._y * RU._x;
        return gU.b_(tU, pU, EU), gU
      }
      static Normalize(UU) {
        const RU = jU.Zero();
        return jU.NormalizeToRef(UU, RU), RU
      }
      static NormalizeToRef(UU, RU) {
        return UU.normalizeToRef(RU), RU
      }
      static Project(UU, RU, gU, tU) {
        const pU = new jU;
        return jU.ProjectToRef(UU, RU, gU, tU, pU), pU
      }
      static ProjectToRef(UU, RU, gU, tU, pU) {
        const EU = tU.width,
          TU = tU.height,
          qU = tU.x,
          KU = tU.y,
          cU = QU.Matrix[1],
          GU = PU.c.LastCreatedEngine?.isNDCHalfZRange,
          uU = GU ? 1 : .5,
          CU = GU ? 0 : .5;
        hU.FromValuesToRef(EU / 2, 0, 0, 0, 0, -TU / 2, 0, 0, 0, 0, uU, 0, qU + EU / 2, TU / 2 + KU, CU, 1, cU);
        const eU = QU.Matrix[0];
        return RU.multiplyToRef(gU, eU), eU.multiplyToRef(cU, eU), jU.TransformCoordinatesToRef(UU, eU, pU), pU
      }
      static Reflect(UU, RU) {
        return this.ReflectToRef(UU, RU, new jU)
      }
      static ReflectToRef(UU, RU, gU) {
        const tU = eU.xC[0];
        return tU.PgU(RU).scaleInPlace(2 * jU.Dot(UU, RU)), gU.PgU(UU).ptU(tU)
      }
      static UnprojectFromTransform(UU, RU, gU, tU, pU) {
        return this.Unproject(UU, RU, gU, tU, pU, hU.IdentityReadOnly)
      }
      static Unproject(UU, RU, gU, tU, pU, EU) {
        const PU = new jU;
        return jU.UnprojectToRef(UU, RU, gU, tU, pU, EU, PU), PU
      }
      static UnprojectToRef(UU, RU, gU, tU, pU, EU, PU) {
        return jU.UnprojectFloatsToRef(UU._x, UU._y, UU._z, RU, gU, tU, pU, EU, PU), PU
      }
      static UnprojectFloatsToRef(UU, RU, gU, tU, pU, EU, TU, qU, KU) {
        const cU = QU.Matrix[0];
        EU.multiplyToRef(TU, cU), cU.multiplyToRef(qU, cU), cU.invert();
        const GU = QU.xC[0];
        return GU.x = UU / tU * 2 - 1, GU.y = -(RU / pU * 2 - 1), PU.c.LastCreatedEngine?.isNDCHalfZRange ? GU.z = gU : GU.z = 2 * gU - 1, jU.TransformCoordinatesToRef(GU, cU, KU), KU
      }
      static Minimize(UU, RU) {
        const gU = new jU;
        return gU.PgU(UU), gU.minimizeInPlace(RU), gU
      }
      static Maximize(UU, RU) {
        const gU = new jU;
        return gU.PgU(UU), gU.maximizeInPlace(RU), gU
      }
      static Distance(UU, RU) {
        return Math.sqrt(jU.DistanceSquared(UU, RU))
      }
      static DistanceSquared(UU, RU) {
        const gU = UU._x - RU._x,
          tU = UU._y - RU._y,
          pU = UU._z - RU._z;
        return gU * gU + tU * tU + pU * pU
      }
      static ProjectOnTriangleToRef(UU, RU, gU, pU, EU) {
        const PU = QU.xC[0],
          qU = QU.xC[1],
          KU = QU.xC[2],
          cU = QU.xC[3],
          GU = QU.xC[4];
        gU.subtractToRef(RU, PU), pU.subtractToRef(RU, qU), pU.subtractToRef(gU, KU);
        const uU = PU.length(),
          CU = qU.length(),
          hU = KU.length();
        if (uU < tU.e || CU < tU.e || hU < tU.e) return EU.PgU(RU), jU.Distance(UU, RU);
        UU.subtractToRef(RU, GU), jU.CrossToRef(PU, qU, cU);
        const eU = cU.length();
        if (eU < tU.e) return EU.PgU(RU), jU.Distance(UU, RU);
        cU.normalizeFromLength(eU);
        let WU = GU.length();
        if (WU < tU.e) return EU.PgU(RU), 0;
        GU.normalizeFromLength(WU);
        const fU = jU.Dot(cU, GU),
          xU = QU.xC[5],
          mU = QU.xC[6];
        xU.PgU(cU).scaleInPlace(-WU * fU), mU.PgU(UU).addInPlace(xU);
        const IU = QU.xC[4],
          JU = QU.xC[5],
          wU = QU.xC[7],
          nU = QU.xC[8];
        IU.PgU(PU).scaleInPlace(1 / uU), nU.PgU(qU).scaleInPlace(1 / CU), IU.addInPlace(nU).scaleInPlace(-1), JU.PgU(PU).scaleInPlace(-1 / uU), nU.PgU(KU).scaleInPlace(1 / hU), JU.addInPlace(nU).scaleInPlace(-1), wU.PgU(KU).scaleInPlace(-1 / hU), nU.PgU(qU).scaleInPlace(-1 / CU), wU.addInPlace(nU).scaleInPlace(-1);
        const bU = QU.xC[9];
        let oU;
        bU.PgU(mU).ptU(RU), jU.CrossToRef(IU, bU, nU), oU = jU.Dot(nU, cU);
        const ZU = oU;
        bU.PgU(mU).ptU(gU), jU.CrossToRef(JU, bU, nU), oU = jU.Dot(nU, cU);
        const aU = oU;
        bU.PgU(mU).ptU(pU), jU.CrossToRef(wU, bU, nU), oU = jU.Dot(nU, cU);
        const YU = oU,
          BU = QU.xC[10];
        let VU, rU;
        ZU > 0 && aU < 0 ? (BU.PgU(PU), VU = RU, rU = gU) : aU > 0 && YU < 0 ? (BU.PgU(KU), VU = gU, rU = pU) : (BU.PgU(qU).scaleInPlace(-1), VU = pU, rU = RU);
        const XU = QU.xC[9],
          vU = QU.xC[4];
        VU.subtractToRef(mU, nU), rU.subtractToRef(mU, XU), jU.CrossToRef(nU, XU, vU);
        if (!(jU.Dot(vU, cU) < 0)) return EU.PgU(mU), Math.abs(WU * fU);
        const dU = QU.xC[5];
        jU.CrossToRef(BU, vU, dU), dU.normalize();
        const HU = QU.xC[9];
        HU.PgU(VU).ptU(mU);
        const SU = HU.length();
        if (SU < tU.e) return EU.PgU(VU), jU.Distance(UU, VU);
        HU.normalizeFromLength(SU);
        const sU = jU.Dot(dU, HU),
          yU = QU.xC[7];
        yU.PgU(mU).addInPlace(dU.scaleInPlace(SU * sU)), nU.PgU(yU).ptU(VU), WU = BU.length(), BU.normalizeFromLength(WU);
        let kU = jU.Dot(nU, BU) / Math.max(WU, tU.e);
        return kU = (0, TU.Clamp)(kU, 0, 1), yU.PgU(VU).addInPlace(BU.scaleInPlace(kU * WU)), EU.PgU(yU), jU.Distance(UU, yU)
      }
      static Center(UU, RU) {
        return jU.CenterToRef(UU, RU, jU.Zero())
      }
      static CenterToRef(UU, RU, gU) {
        return gU.b_((UU._x + RU._x) / 2, (UU._y + RU._y) / 2, (UU._z + RU._z) / 2)
      }
      static RotationFromAxis(UU, RU, gU) {
        const tU = new jU;
        return jU.RotationFromAxisToRef(UU, RU, gU, tU), tU
      }
      static RotationFromAxisToRef(UU, RU, gU, tU) {
        const pU = QU.Quaternion[0];
        return CU.RotationQuaternionFromAxisToRef(UU, RU, gU, pU), pU.toEulerAnglesToRef(tU), tU
      }
    }
    jU._V8PerformanceHack = new jU(.5, .5, .5), jU._UpReadOnly = jU.Up(), jU._DownReadOnly = jU.Down(), jU._LeftHandedForwardReadOnly = jU.Forward(!1), jU._RightHandedForwardReadOnly = jU.Forward(!0), jU._LeftHandedBackwardReadOnly = jU.Backward(!1), jU._RightHandedBackwardReadOnly = jU.Backward(!0), jU._RightReadOnly = jU.Right(), jU._LeftReadOnly = jU.Left(), jU._ZeroReadOnly = jU.Zero(), jU._OneReadOnly = jU.One();
    class uU {
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
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = UU, this._y = RU, this._z = gU, this._w = tU
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let UU = cU(this._x);
        return UU = 397 * UU ^ cU(this._y), UU = 397 * UU ^ cU(this._z), UU = 397 * UU ^ cU(this._w), UU
      }
      vgU() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(UU, RU) {
        return void 0 === RU && (RU = 0), UU[RU] = this._x, UU[RU + 1] = this._y, UU[RU + 2] = this._z, UU[RU + 3] = this._w, this
      }
      bRU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uU.FromArrayToRef(UU, RU, this), this
      }
      addInPlace(UU) {
        return this.x += UU._x, this.y += UU._y, this.z += UU._z, this.w += UU._w, this
      }
      addInPlaceFromFloats(UU, RU, gU, tU) {
        return this.x += UU, this.y += RU, this.z += gU, this.w += tU, this
      }
      add(UU) {
        return new uU(this._x + UU.x, this._y + UU.y, this._z + UU.z, this._w + UU.w)
      }
      addToRef(UU, RU) {
        return RU.x = this._x + UU.x, RU.y = this._y + UU.y, RU.z = this._z + UU.z, RU.w = this._w + UU.w, RU
      }
      ptU(UU) {
        return this.x -= UU.x, this.y -= UU.y, this.z -= UU.z, this.w -= UU.w, this
      }
      subtract(UU) {
        return new uU(this._x - UU.x, this._y - UU.y, this._z - UU.z, this._w - UU.w)
      }
      subtractToRef(UU, RU) {
        return RU.x = this._x - UU.x, RU.y = this._y - UU.y, RU.z = this._z - UU.z, RU.w = this._w - UU.w, RU
      }
      subtractFromFloats(UU, RU, gU, tU) {
        return new uU(this._x - UU, this._y - RU, this._z - gU, this._w - tU)
      }
      subtractFromFloatsToRef(UU, RU, gU, tU, pU) {
        return pU.x = this._x - UU, pU.y = this._y - RU, pU.z = this._z - gU, pU.w = this._w - tU, pU
      }
      nt() {
        return new uU(-this._x, -this._y, -this._z, -this._w)
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
        return new uU(this._x * UU, this._y * UU, this._z * UU, this._w * UU)
      }
      scaleToRef(UU, RU) {
        return RU.x = this._x * UU, RU.y = this._y * UU, RU.z = this._z * UU, RU.w = this._w * UU, RU
      }
      scaleAndAddToRef(UU, RU) {
        return RU.x += this._x * UU, RU.y += this._y * UU, RU.z += this._z * UU, RU.w += this._w * UU, RU
      }
      equals(UU) {
        return UU && this._x === UU.x && this._y === UU.y && this._z === UU.z && this._w === UU.w
      }
      equalsWithEpsilon(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU.e;
        return UU && (0, TU.WithinEpsilon)(this._x, UU.x, RU) && (0, TU.WithinEpsilon)(this._y, UU.y, RU) && (0, TU.WithinEpsilon)(this._z, UU.z, RU) && (0, TU.WithinEpsilon)(this._w, UU.w, RU)
      }
      cPU(UU, RU, gU, tU) {
        return this._x === UU && this._y === RU && this._z === gU && this._w === tU
      }
      multiplyInPlace(UU) {
        return this.x *= UU.x, this.y *= UU.y, this.z *= UU.z, this.w *= UU.w, this
      }
      multiply(UU) {
        return new uU(this._x * UU.x, this._y * UU.y, this._z * UU.z, this._w * UU.w)
      }
      multiplyToRef(UU, RU) {
        return RU.x = this._x * UU.x, RU.y = this._y * UU.y, RU.z = this._z * UU.z, RU.w = this._w * UU.w, RU
      }
      multiplyByFloats(UU, RU, gU, tU) {
        return new uU(this._x * UU, this._y * RU, this._z * gU, this._w * tU)
      }
      divide(UU) {
        return new uU(this._x / UU.x, this._y / UU.y, this._z / UU.z, this._w / UU.w)
      }
      divideToRef(UU, RU) {
        return RU.x = this._x / UU.x, RU.y = this._y / UU.y, RU.z = this._z / UU.z, RU.w = this._w / UU.w, RU
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
      minimizeInPlaceFromFloats(UU, RU, gU, tU) {
        return this.x = Math.min(UU, this._x), this.y = Math.min(RU, this._y), this.z = Math.min(gU, this._z), this.w = Math.min(tU, this._w), this
      }
      maximizeInPlaceFromFloats(UU, RU, gU, tU) {
        return this.x = Math.max(UU, this._x), this.y = Math.max(RU, this._y), this.z = Math.max(gU, this._z), this.w = Math.max(tU, this._w), this
      }
      floorToRef(UU) {
        return UU.x = Math.floor(this._x), UU.y = Math.floor(this._y), UU.z = Math.floor(this._z), UU.w = Math.floor(this._w), UU
      }
      floor() {
        return new uU(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(UU) {
        return UU.x = this._x - Math.floor(this._x), UU.y = this._y - Math.floor(this._y), UU.z = this._z - Math.floor(this._z), UU.w = this._w - Math.floor(this._w), UU
      }
      fract() {
        return new uU(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new uU)
      }
      normalizeToRef(UU) {
        const RU = this.length();
        return 0 === RU || 1 === RU ? (UU.x = this._x, UU.y = this._y, UU.z = this._z, UU.w = this._w, UU) : this.scaleToRef(1 / RU, UU)
      }
      toVector3() {
        return new jU(this._x, this._y, this._z)
      }
      clone() {
        return new uU(this._x, this._y, this._z, this._w)
      }
      PgU(UU) {
        return this.x = UU.x, this.y = UU.y, this.z = UU.z, this.w = UU.w, this
      }
      b_(UU, RU, gU, tU) {
        return this.x = UU, this.y = RU, this.z = gU, this.w = tU, this
      }
      set(UU, RU, gU, tU) {
        return this.b_(UU, RU, gU, tU)
      }
      Y5(UU) {
        return this.x = this.y = this.z = this.w = UU, this
      }
      dot(UU) {
        return this._x * UU.x + this._y * UU.y + this._z * UU.z + this._w * UU.w
      }
      static FromArray(UU, RU) {
        return RU || (RU = 0), new uU(UU[RU], UU[RU + 1], UU[RU + 2], UU[RU + 3])
      }
      static FromArrayToRef(UU, RU, gU) {
        return gU.x = UU[RU], gU.y = UU[RU + 1], gU.z = UU[RU + 2], gU.w = UU[RU + 3], gU
      }
      static FromFloatArrayToRef(UU, RU, gU) {
        return uU.FromArrayToRef(UU, RU, gU), gU
      }
      static FromFloatsToRef(UU, RU, gU, tU, pU) {
        return pU.x = UU, pU.y = RU, pU.z = gU, pU.w = tU, pU
      }
      static Zero() {
        return new uU(0, 0, 0, 0)
      }
      static One() {
        return new uU(1, 1, 1, 1)
      }
      static Random() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new uU((0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU))
      }
      static RandomToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        return gU.x = (0, TU.RandomRange)(UU, RU), gU.y = (0, TU.RandomRange)(UU, RU), gU.z = (0, TU.RandomRange)(UU, RU), gU.w = (0, TU.RandomRange)(UU, RU), gU
      }
      static Clamp(UU, RU, gU) {
        return uU.ClampToRef(UU, RU, gU, new uU)
      }
      static ClampToRef(UU, RU, gU, tU) {
        return tU.x = (0, TU.Clamp)(UU.x, RU.x, gU.x), tU.y = (0, TU.Clamp)(UU.y, RU.y, gU.y), tU.z = (0, TU.Clamp)(UU.z, RU.z, gU.z), tU.w = (0, TU.Clamp)(UU.w, RU.w, gU.w), tU
      }
      static CheckExtends(UU, RU, gU) {
        RU.minimizeInPlace(UU), gU.maximizeInPlace(UU)
      }
      static get ZeroReadOnly() {
        return uU._ZeroReadOnly
      }
      static Normalize(UU) {
        return uU.NormalizeToRef(UU, new uU)
      }
      static NormalizeToRef(UU, RU) {
        return UU.normalizeToRef(RU), RU
      }
      static Minimize(UU, RU) {
        const gU = new uU;
        return gU.PgU(UU), gU.minimizeInPlace(RU), gU
      }
      static Maximize(UU, RU) {
        const gU = new uU;
        return gU.PgU(UU), gU.maximizeInPlace(RU), gU
      }
      static Distance(UU, RU) {
        return Math.sqrt(uU.DistanceSquared(UU, RU))
      }
      static DistanceSquared(UU, RU) {
        const gU = UU.x - RU.x,
          tU = UU.y - RU.y,
          pU = UU.z - RU.z,
          EU = UU.w - RU.w;
        return gU * gU + tU * tU + pU * pU + EU * EU
      }
      static Center(UU, RU) {
        return uU.CenterToRef(UU, RU, new uU)
      }
      static CenterToRef(UU, RU, gU) {
        return gU.x = (UU.x + RU.x) / 2, gU.y = (UU.y + RU.y) / 2, gU.z = (UU.z + RU.z) / 2, gU.w = (UU.w + RU.w) / 2, gU
      }
      static TransformCoordinates(UU, RU) {
        return uU.TransformCoordinatesToRef(UU, RU, new uU)
      }
      static TransformCoordinatesToRef(UU, RU, gU) {
        return uU.TransformCoordinatesFromFloatsToRef(UU._x, UU._y, UU._z, RU, gU), gU
      }
      static TransformCoordinatesFromFloatsToRef(UU, RU, gU, tU, pU) {
        const EU = tU.m,
          PU = UU * EU[0] + RU * EU[4] + gU * EU[8] + EU[12],
          TU = UU * EU[1] + RU * EU[5] + gU * EU[9] + EU[13],
          qU = UU * EU[2] + RU * EU[6] + gU * EU[10] + EU[14],
          KU = UU * EU[3] + RU * EU[7] + gU * EU[11] + EU[15];
        return pU.x = PU, pU.y = TU, pU.z = qU, pU.w = KU, pU
      }
      static TransformNormal(UU, RU) {
        return uU.TransformNormalToRef(UU, RU, new uU)
      }
      static TransformNormalToRef(UU, RU, gU) {
        const tU = RU.m,
          pU = UU.x * tU[0] + UU.y * tU[4] + UU.z * tU[8],
          EU = UU.x * tU[1] + UU.y * tU[5] + UU.z * tU[9],
          PU = UU.x * tU[2] + UU.y * tU[6] + UU.z * tU[10];
        return gU.x = pU, gU.y = EU, gU.z = PU, gU.w = UU.w, gU
      }
      static TransformNormalFromFloatsToRef(UU, RU, gU, tU, pU, EU) {
        const PU = pU.m;
        return EU.x = UU * PU[0] + RU * PU[4] + gU * PU[8], EU.y = UU * PU[1] + RU * PU[5] + gU * PU[9], EU.z = UU * PU[2] + RU * PU[6] + gU * PU[10], EU.w = tU, EU
      }
      static FromVector3(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new uU(UU._x, UU._y, UU._z, RU)
      }
      static Dot(UU, RU) {
        return UU.x * RU.x + UU.y * RU.y + UU.z * RU.z + UU.w * RU.w
      }
    }
    uU._V8PerformanceHack = new uU(.5, .5, .5, .5), uU._ZeroReadOnly = uU.Zero();
    class CU {
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
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = UU, this._y = RU, this._z = gU, this._w = tU
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let UU = cU(this._x);
        return UU = 397 * UU ^ cU(this._y), UU = 397 * UU ^ cU(this._z), UU = 397 * UU ^ cU(this._w), UU
      }
      vgU() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UU[RU] = this._x, UU[RU + 1] = this._y, UU[RU + 2] = this._z, UU[RU + 3] = this._w, this
      }
      bRU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return CU.FromArrayToRef(UU, RU, this)
      }
      equals(UU) {
        return UU && this._x === UU._x && this._y === UU._y && this._z === UU._z && this._w === UU._w
      }
      equalsWithEpsilon(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU.e;
        return UU && (0, TU.WithinEpsilon)(this._x, UU._x, RU) && (0, TU.WithinEpsilon)(this._y, UU._y, RU) && (0, TU.WithinEpsilon)(this._z, UU._z, RU) && (0, TU.WithinEpsilon)(this._w, UU._w, RU)
      }
      isApprox(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tU.e;
        return UU && ((0, TU.WithinEpsilon)(this._x, UU._x, RU) && (0, TU.WithinEpsilon)(this._y, UU._y, RU) && (0, TU.WithinEpsilon)(this._z, UU._z, RU) && (0, TU.WithinEpsilon)(this._w, UU._w, RU) || (0, TU.WithinEpsilon)(this._x, -UU._x, RU) && (0, TU.WithinEpsilon)(this._y, -UU._y, RU) && (0, TU.WithinEpsilon)(this._z, -UU._z, RU) && (0, TU.WithinEpsilon)(this._w, -UU._w, RU))
      }
      clone() {
        return new CU(this._x, this._y, this._z, this._w)
      }
      PgU(UU) {
        return this._x = UU._x, this._y = UU._y, this._z = UU._z, this._w = UU._w, this._isDirty = !0, this
      }
      b_(UU, RU, gU, tU) {
        return this._x = UU, this._y = RU, this._z = gU, this._w = tU, this._isDirty = !0, this
      }
      set(UU, RU, gU, tU) {
        return this.b_(UU, RU, gU, tU)
      }
      Y5(UU) {
        return this.b_(UU, UU, UU, UU)
      }
      add(UU) {
        return new CU(this._x + UU._x, this._y + UU._y, this._z + UU._z, this._w + UU._w)
      }
      addInPlace(UU) {
        return this._x += UU._x, this._y += UU._y, this._z += UU._z, this._w += UU._w, this._isDirty = !0, this
      }
      addToRef(UU, RU) {
        return RU._x = this._x + UU._x, RU._y = this._y + UU._y, RU._z = this._z + UU._z, RU._w = this._w + UU._w, RU._isDirty = !0, RU
      }
      addInPlaceFromFloats(UU, RU, gU, tU) {
        return this._x += UU, this._y += RU, this._z += gU, this._w += tU, this._isDirty = !0, this
      }
      subtractToRef(UU, RU) {
        return RU._x = this._x - UU._x, RU._y = this._y - UU._y, RU._z = this._z - UU._z, RU._w = this._w - UU._w, RU._isDirty = !0, RU
      }
      subtractFromFloats(UU, RU, gU, tU) {
        return this.subtractFromFloatsToRef(UU, RU, gU, tU, new CU)
      }
      subtractFromFloatsToRef(UU, RU, gU, tU, pU) {
        return pU._x = this._x - UU, pU._y = this._y - RU, pU._z = this._z - gU, pU._w = this._w - tU, pU._isDirty = !0, pU
      }
      subtract(UU) {
        return new CU(this._x - UU._x, this._y - UU._y, this._z - UU._z, this._w - UU._w)
      }
      ptU(UU) {
        return this._x -= UU._x, this._y -= UU._y, this._z -= UU._z, this._w -= UU._w, this._isDirty = !0, this
      }
      scale(UU) {
        return new CU(this._x * UU, this._y * UU, this._z * UU, this._w * UU)
      }
      scaleToRef(UU, RU) {
        return RU._x = this._x * UU, RU._y = this._y * UU, RU._z = this._z * UU, RU._w = this._w * UU, RU._isDirty = !0, RU
      }
      scaleInPlace(UU) {
        return this._x *= UU, this._y *= UU, this._z *= UU, this._w *= UU, this._isDirty = !0, this
      }
      scaleAndAddToRef(UU, RU) {
        return RU._x += this._x * UU, RU._y += this._y * UU, RU._z += this._z * UU, RU._w += this._w * UU, RU._isDirty = !0, RU
      }
      multiply(UU) {
        const RU = new CU(0, 0, 0, 1);
        return this.multiplyToRef(UU, RU), RU
      }
      multiplyToRef(UU, RU) {
        const gU = this._x * UU._w + this._y * UU._z - this._z * UU._y + this._w * UU._x,
          tU = -this._x * UU._z + this._y * UU._w + this._z * UU._x + this._w * UU._y,
          pU = this._x * UU._y - this._y * UU._x + this._z * UU._w + this._w * UU._z,
          EU = -this._x * UU._x - this._y * UU._y - this._z * UU._z + this._w * UU._w;
        return RU.b_(gU, tU, pU, EU), RU
      }
      multiplyInPlace(UU) {
        return this.multiplyToRef(UU, this)
      }
      multiplyByFloats(UU, RU, gU, tU) {
        return this._x *= UU, this._y *= RU, this._z *= gU, this._w *= tU, this._isDirty = !0, this
      }
      divide(UU) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(UU, RU) {
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
      nt() {
        return this.negateToRef(new CU)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(UU) {
        return UU._x = -this._x, UU._y = -this._y, UU._z = -this._z, UU._w = -this._w, UU._isDirty = !0, UU
      }
      cPU(UU, RU, gU, tU) {
        return this._x === UU && this._y === RU && this._z === gU && this._w === tU
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
        return UU.b_(-this._x, -this._y, -this._z, this._w), UU
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new CU(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const UU = this.conjugate(),
          RU = this.lengthSquared();
        return 0 == RU || 1 == RU || UU.scaleInPlace(1 / RU), UU
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
        const UU = new CU(0, 0, 0, 1);
        return this.normalizeToRef(UU), UU
      }
      normalizeToRef(UU) {
        const RU = this.length();
        return 0 === RU || 1 === RU ? UU.b_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / RU, UU)
      }
      toEulerAngles() {
        const UU = jU.Zero();
        return this.toEulerAnglesToRef(UU), UU
      }
      toEulerAnglesToRef(UU) {
        const RU = this._z,
          gU = this._x,
          tU = this._y,
          pU = this._w,
          EU = tU * RU - gU * pU,
          PU = .4999999;
        if (EU < -PU) UU._y = 2 * Math.atan2(tU, pU), UU._x = Math.PI / 2, UU._z = 0, UU._isDirty = !0;
        else if (EU > PU) UU._y = 2 * Math.atan2(tU, pU), UU._x = -Math.PI / 2, UU._z = 0, UU._isDirty = !0;
        else {
          const PU = pU * pU,
            TU = RU * RU,
            qU = gU * gU,
            KU = tU * tU;
          UU._z = Math.atan2(2 * (gU * tU + RU * pU), -TU - qU + KU + PU), UU._x = Math.asin(-2 * EU), UU._y = Math.atan2(2 * (RU * gU + tU * pU), TU - qU - KU + PU), UU._isDirty = !0
        }
        return UU
      }
      toAlphaBetaGammaToRef(UU) {
        const RU = this._z,
          gU = this._x,
          tU = this._y,
          pU = this._w,
          EU = Math.sqrt(gU * gU + tU * tU),
          PU = Math.sqrt(RU * RU + pU * pU),
          TU = 2 * Math.atan2(EU, PU),
          qU = 2 * Math.atan2(RU, pU),
          KU = 2 * Math.atan2(tU, gU),
          cU = (qU + KU) / 2,
          GU = (qU - KU) / 2;
        return UU.set(GU, TU, cU), UU
      }
      toRotationMatrix(UU) {
        return hU.FromQuaternionToRef(this, UU), UU
      }
      fromRotationMatrix(UU) {
        return CU.FromRotationMatrixToRef(UU, this), this
      }
      dot(UU) {
        return this._x * UU._x + this._y * UU._y + this._z * UU._z + this._w * UU._w
      }
      toAxisAngle() {
        const UU = jU.Zero();
        return {
          axis: UU,
          angle: this.toAxisAngleToRef(UU)
        }
      }
      toAxisAngleToRef(UU) {
        let RU;
        const gU = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          tU = this._w;
        return gU > 0 ? (RU = 2 * Math.atan2(gU, tU), UU.set(this._x / gU, this._y / gU, this._z / gU)) : (RU = 0, UU.set(1, 0, 0)), RU
      }
      static FromRotationMatrix(UU) {
        const RU = new CU;
        return CU.FromRotationMatrixToRef(UU, RU), RU
      }
      static FromRotationMatrixToRef(UU, RU) {
        const gU = UU.m,
          tU = gU[0],
          pU = gU[4],
          EU = gU[8],
          PU = gU[1],
          TU = gU[5],
          qU = gU[9],
          KU = gU[2],
          cU = gU[6],
          GU = gU[10],
          jU = tU + TU + GU;
        let uU;
        return jU > 0 ? (uU = .5 / Math.sqrt(jU + 1), RU._w = .25 / uU, RU._x = (cU - qU) * uU, RU._y = (EU - KU) * uU, RU._z = (PU - pU) * uU, RU._isDirty = !0) : tU > TU && tU > GU ? (uU = 2 * Math.sqrt(1 + tU - TU - GU), RU._w = (cU - qU) / uU, RU._x = .25 * uU, RU._y = (pU + PU) / uU, RU._z = (EU + KU) / uU, RU._isDirty = !0) : TU > GU ? (uU = 2 * Math.sqrt(1 + TU - tU - GU), RU._w = (EU - KU) / uU, RU._x = (pU + PU) / uU, RU._y = .25 * uU, RU._z = (qU + cU) / uU, RU._isDirty = !0) : (uU = 2 * Math.sqrt(1 + GU - tU - TU), RU._w = (PU - pU) / uU, RU._x = (EU + KU) / uU, RU._y = (qU + cU) / uU, RU._z = .25 * uU, RU._isDirty = !0), RU
      }
      static Dot(UU, RU) {
        return UU._x * RU._x + UU._y * RU._y + UU._z * RU._z + UU._w * RU._w
      }
      static AreClose(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const tU = CU.Dot(UU, RU);
        return 1 - tU * tU <= gU
      }
      static SmoothToRef(UU, RU, gU, tU, pU) {
        let EU = 0 === tU ? 1 : gU / tU;
        return EU = (0, TU.Clamp)(EU, 0, 1), CU.SlerpToRef(UU, RU, EU, pU), pU
      }
      static Zero() {
        return new CU(0, 0, 0, 0)
      }
      static Inverse(UU) {
        return new CU(-UU._x, -UU._y, -UU._z, UU._w)
      }
      static InverseToRef(UU, RU) {
        return RU.set(-UU._x, -UU._y, -UU._z, UU._w), RU
      }
      static Identity() {
        return new CU(0, 0, 0, 1)
      }
      static IsIdentity(UU) {
        return UU && 0 === UU._x && 0 === UU._y && 0 === UU._z && 1 === UU._w
      }
      static RotationAxis(UU, RU) {
        return CU.RotationAxisToRef(UU, RU, new CU)
      }
      static RotationAxisToRef(UU, RU, gU) {
        gU._w = Math.cos(RU / 2);
        const tU = Math.sin(RU / 2) / UU.length();
        return gU._x = UU._x * tU, gU._y = UU._y * tU, gU._z = UU._z * tU, gU._isDirty = !0, gU
      }
      static FromArray(UU, RU) {
        return RU || (RU = 0), new CU(UU[RU], UU[RU + 1], UU[RU + 2], UU[RU + 3])
      }
      static FromArrayToRef(UU, RU, gU) {
        return gU._x = UU[RU], gU._y = UU[RU + 1], gU._z = UU[RU + 2], gU._w = UU[RU + 3], gU._isDirty = !0, gU
      }
      static FromFloatsToRef(UU, RU, gU, tU, pU) {
        return pU.b_(UU, RU, gU, tU), pU
      }
      static FromEulerAngles(UU, RU, gU) {
        const tU = new CU;
        return CU.RotationYawPitchRollToRef(RU, UU, gU, tU), tU
      }
      static FromEulerAnglesToRef(UU, RU, gU, tU) {
        return CU.RotationYawPitchRollToRef(RU, UU, gU, tU), tU
      }
      static FromEulerVector(UU) {
        const RU = new CU;
        return CU.RotationYawPitchRollToRef(UU._y, UU._x, UU._z, RU), RU
      }
      static FromEulerVectorToRef(UU, RU) {
        return CU.RotationYawPitchRollToRef(UU._y, UU._x, UU._z, RU), RU
      }
      static FromUnitVectorsToRef(UU, RU, gU) {
        let pU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tU.e;
        const EU = jU.Dot(UU, RU) + 1;
        return EU < pU ? Math.abs(UU.x) > Math.abs(UU.z) ? gU.set(-UU.y, UU.x, 0, 0) : gU.set(0, -UU.z, UU.y, 0) : (jU.CrossToRef(UU, RU, eU.xC[0]), gU.set(eU.xC[0].x, eU.xC[0].y, eU.xC[0].z, EU)), gU.normalize()
      }
      static RotationYawPitchRoll(UU, RU, gU) {
        const tU = new CU;
        return CU.RotationYawPitchRollToRef(UU, RU, gU, tU), tU
      }
      static RotationYawPitchRollToRef(UU, RU, gU, tU) {
        const pU = .5 * gU,
          EU = .5 * RU,
          PU = .5 * UU,
          TU = Math.sin(pU),
          qU = Math.cos(pU),
          KU = Math.sin(EU),
          cU = Math.cos(EU),
          GU = Math.sin(PU),
          jU = Math.cos(PU);
        return tU._x = jU * KU * qU + GU * cU * TU, tU._y = GU * cU * qU - jU * KU * TU, tU._z = jU * cU * TU - GU * KU * qU, tU._w = jU * cU * qU + GU * KU * TU, tU._isDirty = !0, tU
      }
      static RotationAlphaBetaGamma(UU, RU, gU) {
        const tU = new CU;
        return CU.RotationAlphaBetaGammaToRef(UU, RU, gU, tU), tU
      }
      static RotationAlphaBetaGammaToRef(UU, RU, gU, tU) {
        const pU = .5 * (gU + UU),
          EU = .5 * (gU - UU),
          PU = .5 * RU;
        return tU._x = Math.cos(EU) * Math.sin(PU), tU._y = Math.sin(EU) * Math.sin(PU), tU._z = Math.sin(pU) * Math.cos(PU), tU._w = Math.cos(pU) * Math.cos(PU), tU._isDirty = !0, tU
      }
      static RotationQuaternionFromAxis(UU, RU, gU) {
        const tU = new CU(0, 0, 0, 0);
        return CU.RotationQuaternionFromAxisToRef(UU, RU, gU, tU), tU
      }
      static RotationQuaternionFromAxisToRef(UU, RU, gU, tU) {
        const pU = QU.Matrix[0];
        return UU = UU.normalizeToRef(QU.xC[0]), RU = RU.normalizeToRef(QU.xC[1]), gU = gU.normalizeToRef(QU.xC[2]), hU.FromXYZAxesToRef(UU, RU, gU, pU), CU.FromRotationMatrixToRef(pU, tU), tU
      }
      static FromLookDirectionLH(UU, RU) {
        const gU = new CU;
        return CU.FromLookDirectionLHToRef(UU, RU, gU), gU
      }
      static FromLookDirectionLHToRef(UU, RU, gU) {
        const tU = QU.Matrix[0];
        return hU.LookDirectionLHToRef(UU, RU, tU), CU.FromRotationMatrixToRef(tU, gU), gU
      }
      static FromLookDirectionRH(UU, RU) {
        const gU = new CU;
        return CU.FromLookDirectionRHToRef(UU, RU, gU), gU
      }
      static FromLookDirectionRHToRef(UU, RU, gU) {
        const tU = QU.Matrix[0];
        return hU.LookDirectionRHToRef(UU, RU, tU), CU.FromRotationMatrixToRef(tU, gU)
      }
      static Slerp(UU, RU, gU) {
        const tU = CU.Identity();
        return CU.SlerpToRef(UU, RU, gU, tU), tU
      }
      static SlerpToRef(UU, RU, gU, tU) {
        let pU, EU, PU = UU._x * RU._x + UU._y * RU._y + UU._z * RU._z + UU._w * RU._w,
          TU = !1;
        if (PU < 0 && (TU = !0, PU = -PU), PU > .999999) EU = 1 - gU, pU = TU ? -gU : gU;
        else {
          const UU = Math.acos(PU),
            RU = 1 / Math.sin(UU);
          EU = Math.sin((1 - gU) * UU) * RU, pU = TU ? -Math.sin(gU * UU) * RU : Math.sin(gU * UU) * RU
        }
        return tU._x = EU * UU._x + pU * RU._x, tU._y = EU * UU._y + pU * RU._y, tU._z = EU * UU._z + pU * RU._z, tU._w = EU * UU._w + pU * RU._w, tU._isDirty = !0, tU
      }
      static Hermite(UU, RU, gU, tU, pU) {
        const EU = pU * pU,
          PU = pU * EU,
          TU = 2 * PU - 3 * EU + 1,
          qU = -2 * PU + 3 * EU,
          KU = PU - 2 * EU + pU,
          cU = PU - EU,
          GU = UU._x * TU + gU._x * qU + RU._x * KU + tU._x * cU,
          jU = UU._y * TU + gU._y * qU + RU._y * KU + tU._y * cU,
          uU = UU._z * TU + gU._z * qU + RU._z * KU + tU._z * cU,
          hU = UU._w * TU + gU._w * qU + RU._w * KU + tU._w * cU;
        return new CU(GU, jU, uU, hU)
      }
      static Hermite1stDerivative(UU, RU, gU, tU, pU) {
        const EU = new CU;
        return this.Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU), EU
      }
      static Hermite1stDerivativeToRef(UU, RU, gU, tU, pU, EU) {
        const PU = pU * pU;
        return EU._x = 6 * (PU - pU) * UU._x + (3 * PU - 4 * pU + 1) * RU._x + 6 * (-PU + pU) * gU._x + (3 * PU - 2 * pU) * tU._x, EU._y = 6 * (PU - pU) * UU._y + (3 * PU - 4 * pU + 1) * RU._y + 6 * (-PU + pU) * gU._y + (3 * PU - 2 * pU) * tU._y, EU._z = 6 * (PU - pU) * UU._z + (3 * PU - 4 * pU + 1) * RU._z + 6 * (-PU + pU) * gU._z + (3 * PU - 2 * pU) * tU._z, EU._w = 6 * (PU - pU) * UU._w + (3 * PU - 4 * pU + 1) * RU._w + 6 * (-PU + pU) * gU._w + (3 * PU - 2 * pU) * tU._w, EU._isDirty = !0, EU
      }
      static Normalize(UU) {
        const RU = CU.Zero();
        return CU.NormalizeToRef(UU, RU), RU
      }
      static NormalizeToRef(UU, RU) {
        return UU.normalizeToRef(RU), RU
      }
      static Clamp(UU, RU, gU) {
        const tU = new CU;
        return CU.ClampToRef(UU, RU, gU, tU), tU
      }
      static ClampToRef(UU, RU, gU, tU) {
        return tU.b_((0, TU.Clamp)(UU.x, RU.x, gU.x), (0, TU.Clamp)(UU.y, RU.y, gU.y), (0, TU.Clamp)(UU.z, RU.z, gU.z), (0, TU.Clamp)(UU.w, RU.w, gU.w))
      }
      static Random() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new CU((0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU))
      }
      static RandomToRef() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).b_((0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU), (0, TU.RandomRange)(UU, RU))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(UU, RU) {
        return Math.sqrt(CU.DistanceSquared(UU, RU))
      }
      static DistanceSquared(UU, RU) {
        const gU = UU.x - RU.x,
          tU = UU.y - RU.y,
          pU = UU.z - RU.z,
          EU = UU.w - RU.w;
        return gU * gU + tU * tU + pU * pU + EU * EU
      }
      static Center(UU, RU) {
        return CU.CenterToRef(UU, RU, CU.Zero())
      }
      static CenterToRef(UU, RU, gU) {
        return gU.b_((UU.x + RU.x) / 2, (UU.y + RU.y) / 2, (UU.z + RU.z) / 2, (UU.w + RU.w) / 2)
      }
    }
    CU._V8PerformanceHack = new CU(.5, .5, .5, .5);
    class hU {
      static get Use64Bits() {
        return EU.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = qU.n._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tU = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = UU, this._isIdentity3x2 = UU || gU, this._isIdentityDirty = !this._isIdentity && RU, this._isIdentity3x2Dirty = !this._isIdentity3x2 && tU
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, EU.c.MatrixTrackPrecisionChange && EU.c.MatrixTrackedMatrices.push(this), this._m = new EU.c.MatrixCurrentType(16), this.markAsUpdated()
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
          RU = UU[0],
          gU = UU[1],
          tU = UU[2],
          pU = UU[3],
          EU = UU[4],
          PU = UU[5],
          TU = UU[6],
          qU = UU[7],
          KU = UU[8],
          cU = UU[9],
          GU = UU[10],
          jU = UU[11],
          uU = UU[12],
          CU = UU[13],
          hU = UU[14],
          QU = UU[15],
          eU = GU * QU - hU * jU,
          WU = cU * QU - CU * jU,
          fU = cU * hU - CU * GU,
          xU = KU * QU - uU * jU,
          mU = KU * hU - GU * uU,
          IU = KU * CU - uU * cU;
        return RU * +(PU * eU - TU * WU + qU * fU) + gU * -(EU * eU - TU * xU + qU * mU) + tU * +(EU * WU - PU * xU + qU * IU) + pU * -(EU * fU - PU * mU + TU * IU)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!UU) return this._m;
        const gU = this._m;
        for (let tU = 0; tU < 16; tU++) UU[RU + tU] = gU[tU];
        return this
      }
      vgU() {
        return this._m
      }
      bRU(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return hU.FromArrayToRef(UU, RU, this)
      }
      b_() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        return hU.FromArrayToRef(RU, 0, this)
      }
      set() {
        const UU = this._m;
        for (let RU = 0; RU < 16; RU++) UU[RU] = RU < 0 || arguments.length <= RU ? void 0 : arguments[RU];
        return this.markAsUpdated(), this
      }
      Y5(UU) {
        const RU = this._m;
        for (let gU = 0; gU < 16; gU++) RU[gU] = UU;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return hU.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(UU) {
        const RU = new hU;
        return this.addToRef(UU, RU), RU
      }
      addToRef(UU, RU) {
        const gU = this._m,
          tU = RU._m,
          pU = UU.m;
        for (let EU = 0; EU < 16; EU++) tU[EU] = gU[EU] + pU[EU];
        return RU.markAsUpdated(), RU
      }
      addToSelf(UU) {
        const RU = this._m,
          gU = UU.m;
        return RU[0] += gU[0], RU[1] += gU[1], RU[2] += gU[2], RU[3] += gU[3], RU[4] += gU[4], RU[5] += gU[5], RU[6] += gU[6], RU[7] += gU[7], RU[8] += gU[8], RU[9] += gU[9], RU[10] += gU[10], RU[11] += gU[11], RU[12] += gU[12], RU[13] += gU[13], RU[14] += gU[14], RU[15] += gU[15], this.markAsUpdated(), this
      }
      addInPlace(UU) {
        const RU = this._m,
          gU = UU.m;
        for (let tU = 0; tU < 16; tU++) RU[tU] += gU[tU];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const UU = this._m;
        for (let RU = 0; RU < 16; RU++) UU[RU] += RU < 0 || arguments.length <= RU ? void 0 : arguments[RU];
        return this.markAsUpdated(), this
      }
      subtract(UU) {
        const RU = this._m,
          gU = UU.m;
        for (let tU = 0; tU < 16; tU++) RU[tU] -= gU[tU];
        return this.markAsUpdated(), this
      }
      subtractToRef(UU, RU) {
        const gU = this._m,
          tU = UU.m,
          pU = RU._m;
        for (let EU = 0; EU < 16; EU++) pU[EU] = gU[EU] - tU[EU];
        return RU.markAsUpdated(), RU
      }
      ptU(UU) {
        const RU = this._m,
          gU = UU.m;
        for (let tU = 0; tU < 16; tU++) RU[tU] -= gU[tU];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        return this.subtractFromFloatsToRef(...RU, new hU)
      }
      subtractFromFloatsToRef() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        const tU = RU.pop(),
          pU = this._m,
          EU = tU._m,
          PU = RU;
        for (let TU = 0; TU < 16; TU++) EU[TU] = pU[TU] - PU[TU];
        return tU.markAsUpdated(), tU
      }
      invertToRef(UU) {
        return !0 === this._isIdentity ? (hU.IdentityToRef(UU), UU) : ((0, qU.g)(this, UU.vgU()) ? UU.markAsUpdated() : UU.PgU(this), UU)
      }
      addAtIndex(UU, RU) {
        return this._m[UU] += RU, this.markAsUpdated(), this
      }
      multiplyAtIndex(UU, RU) {
        return this._m[UU] *= RU, this.markAsUpdated(), this
      }
      setTranslationFromFloats(UU, RU, gU) {
        return this._m[12] = UU, this._m[13] = RU, this._m[14] = gU, this.markAsUpdated(), this
      }
      addTranslationFromFloats(UU, RU, gU) {
        return this._m[12] += UU, this._m[13] += RU, this._m[14] += gU, this.markAsUpdated(), this
      }
      setTranslation(UU) {
        return this.setTranslationFromFloats(UU._x, UU._y, UU._z)
      }
      getTranslation() {
        return new jU(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(UU) {
        return UU.x = this._m[12], UU.y = this._m[13], UU.z = this._m[14], UU
      }
      removeRotationAndScaling() {
        const UU = this.m;
        return hU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, UU[12], UU[13], UU[14], UU[15], this), this._updateIdentityStatus(0 === UU[12] && 0 === UU[13] && 0 === UU[14] && 1 === UU[15]), this
      }
      PgU(UU) {
        UU.copyToArray(this._m);
        const RU = UU;
        return this.updateFlag = RU.updateFlag, this._updateIdentityStatus(RU._isIdentity, RU._isIdentityDirty, RU._isIdentity3x2, RU._isIdentity3x2Dirty), this
      }
      copyToArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, qU.c)(this, UU, RU), this
      }
      multiply(UU) {
        const RU = new hU;
        return this.multiplyToRef(UU, RU), RU
      }
      multiplyInPlace(UU) {
        const RU = this._m,
          gU = UU.m;
        for (let tU = 0; tU < 16; tU++) RU[tU] *= gU[tU];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const UU = this._m;
        for (let RU = 0; RU < 16; RU++) UU[RU] *= RU < 0 || arguments.length <= RU ? void 0 : arguments[RU];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var UU = arguments.length, RU = new Array(UU), gU = 0; gU < UU; gU++) RU[gU] = arguments[gU];
        const tU = RU.pop(),
          pU = this._m,
          EU = tU._m,
          PU = RU;
        for (let TU = 0; TU < 16; TU++) EU[TU] = pU[TU] * PU[TU];
        return tU.markAsUpdated(), tU
      }
      multiplyToRef(UU, RU) {
        return this._isIdentity ? (RU.PgU(UU), RU) : UU._isIdentity ? (RU.PgU(this), RU) : (this.multiplyToArray(UU, RU._m, 0), RU.markAsUpdated(), RU)
      }
      multiplyToArray(UU, RU, gU) {
        return (0, qU.q)(this, UU, RU, gU), this
      }
      divide(UU) {
        return this.divideToRef(UU, new hU)
      }
      divideToRef(UU, RU) {
        const gU = this._m,
          tU = UU.m,
          pU = RU._m;
        for (let EU = 0; EU < 16; EU++) pU[EU] = gU[EU] / tU[EU];
        return RU.markAsUpdated(), RU
      }
      divideInPlace(UU) {
        const RU = this._m,
          gU = UU.m;
        for (let tU = 0; tU < 16; tU++) RU[tU] /= gU[tU];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(UU) {
        const RU = this._m,
          gU = UU.m;
        for (let tU = 0; tU < 16; tU++) RU[tU] = Math.min(RU[tU], gU[tU]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const UU = this._m;
        for (let RU = 0; RU < 16; RU++) UU[RU] = Math.min(UU[RU], RU < 0 || arguments.length <= RU ? void 0 : arguments[RU]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(UU) {
        const RU = this._m,
          gU = UU.m;
        for (let tU = 0; tU < 16; tU++) RU[tU] = Math.max(RU[tU], gU[tU]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const UU = this._m;
        for (let RU = 0; RU < 16; RU++) UU[RU] = Math.max(UU[RU], RU < 0 || arguments.length <= RU ? void 0 : arguments[RU]);
        return this.markAsUpdated(), this
      }
      nt() {
        return this.negateToRef(new hU)
      }
      negateInPlace() {
        const UU = this._m;
        for (let RU = 0; RU < 16; RU++) UU[RU] = -UU[RU];
        return this.markAsUpdated(), this
      }
      negateToRef(UU) {
        const RU = this._m,
          gU = UU._m;
        for (let tU = 0; tU < 16; tU++) gU[tU] = -RU[tU];
        return UU.markAsUpdated(), UU
      }
      equals(UU) {
        const RU = UU;
        if (!RU) return !1;
        if ((this._isIdentity || RU._isIdentity) && !this._isIdentityDirty && !RU._isIdentityDirty) return this._isIdentity && RU._isIdentity;
        const gU = this.m,
          tU = RU.m;
        return gU[0] === tU[0] && gU[1] === tU[1] && gU[2] === tU[2] && gU[3] === tU[3] && gU[4] === tU[4] && gU[5] === tU[5] && gU[6] === tU[6] && gU[7] === tU[7] && gU[8] === tU[8] && gU[9] === tU[9] && gU[10] === tU[10] && gU[11] === tU[11] && gU[12] === tU[12] && gU[13] === tU[13] && gU[14] === tU[14] && gU[15] === tU[15]
      }
      equalsWithEpsilon(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = this._m,
          tU = UU.m;
        for (let pU = 0; pU < 16; pU++)
          if (!(0, TU.WithinEpsilon)(gU[pU], tU[pU], RU)) return !1;
        return !0
      }
      cPU() {
        const UU = this._m;
        for (let RU = 0; RU < 16; RU++)
          if (UU[RU] != (RU < 0 || arguments.length <= RU ? void 0 : arguments[RU])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new hU)
      }
      floorToRef(UU) {
        const RU = this._m,
          gU = UU._m;
        for (let tU = 0; tU < 16; tU++) gU[tU] = Math.floor(RU[tU]);
        return UU.markAsUpdated(), UU
      }
      fract() {
        return this.fractToRef(new hU)
      }
      fractToRef(UU) {
        const RU = this._m,
          gU = UU._m;
        for (let tU = 0; tU < 16; tU++) gU[tU] = RU[tU] - Math.floor(RU[tU]);
        return UU.markAsUpdated(), UU
      }
      clone() {
        const UU = new hU;
        return UU.PgU(this), UU
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let UU = cU(this._m[0]);
        for (let RU = 1; RU < 16; RU++) UU = 397 * UU ^ cU(this._m[RU]);
        return UU
      }
      decomposeToTransformNode(UU) {
        return UU.rotationQuaternion = UU.rotationQuaternion || new CU, this.decompose(UU.ep, UU.rotationQuaternion, UU.position)
      }
      decompose(UU, RU, gU, tU) {
        let pU = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return gU && gU.Y5(0), UU && UU.Y5(1), RU && RU.b_(0, 0, 0, 1), !0;
        const EU = this._m;
        if (gU && gU.b_(EU[12], EU[13], EU[14]), (UU = UU || QU.xC[0]).x = Math.sqrt(EU[0] * EU[0] + EU[1] * EU[1] + EU[2] * EU[2]), UU.y = Math.sqrt(EU[4] * EU[4] + EU[5] * EU[5] + EU[6] * EU[6]), UU.z = Math.sqrt(EU[8] * EU[8] + EU[9] * EU[9] + EU[10] * EU[10]), tU) {
          const RU = (pU ? tU.absoluteScaling.x : tU.ep.x) < 0 ? -1 : 1,
            gU = (pU ? tU.absoluteScaling.y : tU.ep.y) < 0 ? -1 : 1,
            EU = (pU ? tU.absoluteScaling.z : tU.ep.z) < 0 ? -1 : 1;
          UU.x *= RU, UU.y *= gU, UU.z *= EU
        } else this.determinant() <= 0 && (UU.y *= -1);
        if (0 === UU._x || 0 === UU._y || 0 === UU._z) return RU && RU.b_(0, 0, 0, 1), !1;
        if (RU) {
          const gU = 1 / UU._x,
            tU = 1 / UU._y,
            pU = 1 / UU._z;
          hU.FromValuesToRef(EU[0] * gU, EU[1] * gU, EU[2] * gU, 0, EU[4] * tU, EU[5] * tU, EU[6] * tU, 0, EU[8] * pU, EU[9] * pU, EU[10] * pU, 0, 0, 0, 0, 1, QU.Matrix[0]), CU.FromRotationMatrixToRef(QU.Matrix[0], RU)
        }
        return !0
      }
      getRow(UU) {
        if (UU < 0 || UU > 3) return null;
        const RU = 4 * UU;
        return new uU(this._m[RU + 0], this._m[RU + 1], this._m[RU + 2], this._m[RU + 3])
      }
      getRowToRef(UU, RU) {
        if (UU >= 0 && UU <= 3) {
          const gU = 4 * UU;
          RU.x = this._m[gU + 0], RU.y = this._m[gU + 1], RU.z = this._m[gU + 2], RU.w = this._m[gU + 3]
        }
        return RU
      }
      setRow(UU, RU) {
        return this.setRowFromFloats(UU, RU.x, RU.y, RU.z, RU.w)
      }
      transpose() {
        const UU = new hU;
        return hU.TransposeToRef(this, UU), UU
      }
      transposeToRef(UU) {
        return hU.TransposeToRef(this, UU), UU
      }
      setRowFromFloats(UU, RU, gU, tU, pU) {
        if (UU < 0 || UU > 3) return this;
        const EU = 4 * UU;
        return this._m[EU + 0] = RU, this._m[EU + 1] = gU, this._m[EU + 2] = tU, this._m[EU + 3] = pU, this.markAsUpdated(), this
      }
      scale(UU) {
        const RU = new hU;
        return this.scaleToRef(UU, RU), RU
      }
      scaleToRef(UU, RU) {
        for (let gU = 0; gU < 16; gU++) RU._m[gU] = this._m[gU] * UU;
        return RU.markAsUpdated(), RU
      }
      scaleAndAddToRef(UU, RU) {
        for (let gU = 0; gU < 16; gU++) RU._m[gU] += this._m[gU] * UU;
        return RU.markAsUpdated(), RU
      }
      scaleInPlace(UU) {
        const RU = this._m;
        for (let gU = 0; gU < 16; gU++) RU[gU] *= UU;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(UU) {
        const RU = QU.Matrix[0];
        this.invertToRef(RU), RU.transposeToRef(UU);
        const gU = UU._m;
        return hU.FromValuesToRef(gU[0], gU[1], gU[2], 0, gU[4], gU[5], gU[6], 0, gU[8], gU[9], gU[10], 0, 0, 0, 0, 1, UU), UU
      }
      getRotationMatrix() {
        const UU = new hU;
        return this.getRotationMatrixToRef(UU), UU
      }
      getRotationMatrixToRef(UU) {
        const RU = QU.xC[0];
        if (!this.decompose(RU)) return hU.IdentityToRef(UU), UU;
        const gU = this._m,
          tU = 1 / RU._x,
          pU = 1 / RU._y,
          EU = 1 / RU._z;
        return hU.FromValuesToRef(gU[0] * tU, gU[1] * tU, gU[2] * tU, 0, gU[4] * pU, gU[5] * pU, gU[6] * pU, 0, gU[8] * EU, gU[9] * EU, gU[10] * EU, 0, 0, 0, 0, 1, UU), UU
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
        return this.multiplyToRef(WU, this), this
      }
      static FromArray(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gU = new hU;
        return hU.FromArrayToRef(UU, RU, gU), gU
      }
      static FromArrayToRef(UU, RU, gU) {
        for (let tU = 0; tU < 16; tU++) gU._m[tU] = UU[tU + RU];
        return gU.markAsUpdated(), gU
      }
      static FromFloat32ArrayToRefScaled(UU, RU, gU, tU) {
        return tU._m[0] = UU[0 + RU] * gU, tU._m[1] = UU[1 + RU] * gU, tU._m[2] = UU[2 + RU] * gU, tU._m[3] = UU[3 + RU] * gU, tU._m[4] = UU[4 + RU] * gU, tU._m[5] = UU[5 + RU] * gU, tU._m[6] = UU[6 + RU] * gU, tU._m[7] = UU[7 + RU] * gU, tU._m[8] = UU[8 + RU] * gU, tU._m[9] = UU[9 + RU] * gU, tU._m[10] = UU[10 + RU] * gU, tU._m[11] = UU[11 + RU] * gU, tU._m[12] = UU[12 + RU] * gU, tU._m[13] = UU[13 + RU] * gU, tU._m[14] = UU[14 + RU] * gU, tU._m[15] = UU[15 + RU] * gU, tU.markAsUpdated(), tU
      }
      static get IdentityReadOnly() {
        return hU._IdentityReadOnly
      }
      static FromValuesToRef(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, hU, QU) {
        const eU = QU._m;
        eU[0] = UU, eU[1] = RU, eU[2] = gU, eU[3] = tU, eU[4] = pU, eU[5] = EU, eU[6] = PU, eU[7] = TU, eU[8] = qU, eU[9] = KU, eU[10] = cU, eU[11] = GU, eU[12] = jU, eU[13] = uU, eU[14] = CU, eU[15] = hU, QU.markAsUpdated()
      }
      static FromValues(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU, GU, jU, uU, CU, QU) {
        const eU = new hU,
          WU = eU._m;
        return WU[0] = UU, WU[1] = RU, WU[2] = gU, WU[3] = tU, WU[4] = pU, WU[5] = EU, WU[6] = PU, WU[7] = TU, WU[8] = qU, WU[9] = KU, WU[10] = cU, WU[11] = GU, WU[12] = jU, WU[13] = uU, WU[14] = CU, WU[15] = QU, eU.markAsUpdated(), eU
      }
      static Compose(UU, RU, gU) {
        const tU = new hU;
        return hU.ComposeToRef(UU, RU, gU, tU), tU
      }
      static ComposeToRef(UU, RU, gU, tU) {
        const pU = tU._m,
          EU = RU._x,
          PU = RU._y,
          TU = RU._z,
          qU = RU._w,
          KU = EU + EU,
          cU = PU + PU,
          GU = TU + TU,
          jU = EU * KU,
          uU = EU * cU,
          CU = EU * GU,
          hU = PU * cU,
          QU = PU * GU,
          eU = TU * GU,
          WU = qU * KU,
          fU = qU * cU,
          xU = qU * GU,
          mU = UU._x,
          IU = UU._y,
          JU = UU._z;
        return pU[0] = (1 - (hU + eU)) * mU, pU[1] = (uU + xU) * mU, pU[2] = (CU - fU) * mU, pU[3] = 0, pU[4] = (uU - xU) * IU, pU[5] = (1 - (jU + eU)) * IU, pU[6] = (QU + WU) * IU, pU[7] = 0, pU[8] = (CU + fU) * JU, pU[9] = (QU - WU) * JU, pU[10] = (1 - (jU + hU)) * JU, pU[11] = 0, pU[12] = gU._x, pU[13] = gU._y, pU[14] = gU._z, pU[15] = 1, tU.markAsUpdated(), tU
      }
      static Identity() {
        const UU = hU.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return UU._updateIdentityStatus(!0), UU
      }
      static IdentityToRef(UU) {
        return hU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, UU), UU._updateIdentityStatus(!0), UU
      }
      static Zero() {
        const UU = hU.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return UU._updateIdentityStatus(!1), UU
      }
      static RotationX(UU) {
        const RU = new hU;
        return hU.RotationXToRef(UU, RU), RU
      }
      static Invert(UU) {
        const RU = new hU;
        return UU.invertToRef(RU), RU
      }
      static RotationXToRef(UU, RU) {
        const gU = Math.sin(UU),
          tU = Math.cos(UU);
        return hU.FromValuesToRef(1, 0, 0, 0, 0, tU, gU, 0, 0, -gU, tU, 0, 0, 0, 0, 1, RU), RU._updateIdentityStatus(1 === tU && 0 === gU), RU
      }
      static RotationY(UU) {
        const RU = new hU;
        return hU.RotationYToRef(UU, RU), RU
      }
      static RotationYToRef(UU, RU) {
        const gU = Math.sin(UU),
          tU = Math.cos(UU);
        return hU.FromValuesToRef(tU, 0, -gU, 0, 0, 1, 0, 0, gU, 0, tU, 0, 0, 0, 0, 1, RU), RU._updateIdentityStatus(1 === tU && 0 === gU), RU
      }
      static RotationZ(UU) {
        const RU = new hU;
        return hU.RotationZToRef(UU, RU), RU
      }
      static RotationZToRef(UU, RU) {
        const gU = Math.sin(UU),
          tU = Math.cos(UU);
        return hU.FromValuesToRef(tU, gU, 0, 0, -gU, tU, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, RU), RU._updateIdentityStatus(1 === tU && 0 === gU), RU
      }
      static RotationAxis(UU, RU) {
        const gU = new hU;
        return hU.RotationAxisToRef(UU, RU, gU), gU
      }
      static RotationAxisToRef(UU, RU, gU) {
        const tU = Math.sin(-RU),
          pU = Math.cos(-RU),
          EU = 1 - pU;
        UU = UU.normalizeToRef(QU.xC[0]);
        const PU = gU._m;
        return PU[0] = UU._x * UU._x * EU + pU, PU[1] = UU._x * UU._y * EU - UU._z * tU, PU[2] = UU._x * UU._z * EU + UU._y * tU, PU[3] = 0, PU[4] = UU._y * UU._x * EU + UU._z * tU, PU[5] = UU._y * UU._y * EU + pU, PU[6] = UU._y * UU._z * EU - UU._x * tU, PU[7] = 0, PU[8] = UU._z * UU._x * EU - UU._y * tU, PU[9] = UU._z * UU._y * EU + UU._x * tU, PU[10] = UU._z * UU._z * EU + pU, PU[11] = 0, PU[12] = 0, PU[13] = 0, PU[14] = 0, PU[15] = 1, gU.markAsUpdated(), gU
      }
      static RotationAlignToRef(UU, RU, gU) {
        let pU = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const EU = jU.Dot(RU, UU),
          PU = gU._m;
        if (EU < -1 + tU.e) PU[0] = -1, PU[1] = 0, PU[2] = 0, PU[3] = 0, PU[4] = 0, PU[5] = pU ? 1 : -1, PU[6] = 0, PU[7] = 0, PU[8] = 0, PU[9] = 0, PU[10] = pU ? -1 : 1, PU[11] = 0;
        else {
          const gU = jU.Cross(RU, UU),
            tU = 1 / (1 + EU);
          PU[0] = gU._x * gU._x * tU + EU, PU[1] = gU._y * gU._x * tU - gU._z, PU[2] = gU._z * gU._x * tU + gU._y, PU[3] = 0, PU[4] = gU._x * gU._y * tU + gU._z, PU[5] = gU._y * gU._y * tU + EU, PU[6] = gU._z * gU._y * tU - gU._x, PU[7] = 0, PU[8] = gU._x * gU._z * tU - gU._y, PU[9] = gU._y * gU._z * tU + gU._x, PU[10] = gU._z * gU._z * tU + EU, PU[11] = 0
        }
        return PU[12] = 0, PU[13] = 0, PU[14] = 0, PU[15] = 1, gU.markAsUpdated(), gU
      }
      static RotationYawPitchRoll(UU, RU, gU) {
        const tU = new hU;
        return hU.RotationYawPitchRollToRef(UU, RU, gU, tU), tU
      }
      static RotationYawPitchRollToRef(UU, RU, gU, tU) {
        return CU.RotationYawPitchRollToRef(UU, RU, gU, QU.Quaternion[0]), QU.Quaternion[0].toRotationMatrix(tU), tU
      }
      static Scaling(UU, RU, gU) {
        const tU = new hU;
        return hU.ScalingToRef(UU, RU, gU, tU), tU
      }
      static ScalingToRef(UU, RU, gU, tU) {
        return hU.FromValuesToRef(UU, 0, 0, 0, 0, RU, 0, 0, 0, 0, gU, 0, 0, 0, 0, 1, tU), tU._updateIdentityStatus(1 === UU && 1 === RU && 1 === gU), tU
      }
      static Translation(UU, RU, gU) {
        const tU = new hU;
        return hU.TranslationToRef(UU, RU, gU, tU), tU
      }
      static TranslationToRef(UU, RU, gU, tU) {
        return hU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, UU, RU, gU, 1, tU), tU._updateIdentityStatus(0 === UU && 0 === RU && 0 === gU), tU
      }
      static Lerp(UU, RU, gU) {
        const tU = new hU;
        return hU.LerpToRef(UU, RU, gU, tU), tU
      }
      static LerpToRef(UU, RU, gU, tU) {
        const pU = tU._m,
          EU = UU.m,
          PU = RU.m;
        for (let TU = 0; TU < 16; TU++) pU[TU] = EU[TU] * (1 - gU) + PU[TU] * gU;
        return tU.markAsUpdated(), tU
      }
      static DecomposeLerp(UU, RU, gU) {
        const tU = new hU;
        return hU.DecomposeLerpToRef(UU, RU, gU, tU), tU
      }
      static DecomposeLerpToRef(UU, RU, gU, tU) {
        const pU = QU.xC[0],
          EU = QU.Quaternion[0],
          PU = QU.xC[1];
        UU.decompose(pU, EU, PU);
        const TU = QU.xC[2],
          qU = QU.Quaternion[1],
          KU = QU.xC[3];
        RU.decompose(TU, qU, KU);
        const cU = QU.xC[4];
        jU.LerpToRef(pU, TU, gU, cU);
        const GU = QU.Quaternion[2];
        CU.SlerpToRef(EU, qU, gU, GU);
        const uU = QU.xC[5];
        return jU.LerpToRef(PU, KU, gU, uU), hU.ComposeToRef(cU, GU, uU, tU), tU
      }
      static LookAtLH(UU, RU, gU) {
        const tU = new hU;
        return hU.LookAtLHToRef(UU, RU, gU, tU), tU
      }
      static LookAtLHToRef(UU, RU, gU, tU) {
        const pU = QU.xC[0],
          EU = QU.xC[1],
          PU = QU.xC[2];
        RU.subtractToRef(UU, PU), PU.normalize(), jU.CrossToRef(gU, PU, pU);
        const TU = pU.lengthSquared();
        0 === TU ? pU.x = 1 : pU.normalizeFromLength(Math.sqrt(TU)), jU.CrossToRef(PU, pU, EU), EU.normalize();
        const qU = -jU.Dot(pU, UU),
          KU = -jU.Dot(EU, UU),
          cU = -jU.Dot(PU, UU);
        return hU.FromValuesToRef(pU._x, EU._x, PU._x, 0, pU._y, EU._y, PU._y, 0, pU._z, EU._z, PU._z, 0, qU, KU, cU, 1, tU), tU
      }
      static LookAtRH(UU, RU, gU) {
        const tU = new hU;
        return hU.LookAtRHToRef(UU, RU, gU, tU), tU
      }
      static LookAtRHToRef(UU, RU, gU, tU) {
        const pU = QU.xC[0],
          EU = QU.xC[1],
          PU = QU.xC[2];
        UU.subtractToRef(RU, PU), PU.normalize(), jU.CrossToRef(gU, PU, pU);
        const TU = pU.lengthSquared();
        0 === TU ? pU.x = 1 : pU.normalizeFromLength(Math.sqrt(TU)), jU.CrossToRef(PU, pU, EU), EU.normalize();
        const qU = -jU.Dot(pU, UU),
          KU = -jU.Dot(EU, UU),
          cU = -jU.Dot(PU, UU);
        return hU.FromValuesToRef(pU._x, EU._x, PU._x, 0, pU._y, EU._y, PU._y, 0, pU._z, EU._z, PU._z, 0, qU, KU, cU, 1, tU), tU
      }
      static LookDirectionLH(UU, RU) {
        const gU = new hU;
        return hU.LookDirectionLHToRef(UU, RU, gU), gU
      }
      static LookDirectionLHToRef(UU, RU, gU) {
        const tU = QU.xC[0];
        tU.PgU(UU), tU.scaleInPlace(-1);
        const pU = QU.xC[1];
        return jU.CrossToRef(RU, tU, pU), hU.FromValuesToRef(pU._x, pU._y, pU._z, 0, RU._x, RU._y, RU._z, 0, tU._x, tU._y, tU._z, 0, 0, 0, 0, 1, gU), gU
      }
      static LookDirectionRH(UU, RU) {
        const gU = new hU;
        return hU.LookDirectionRHToRef(UU, RU, gU), gU
      }
      static LookDirectionRHToRef(UU, RU, gU) {
        const tU = QU.xC[2];
        return jU.CrossToRef(RU, UU, tU), hU.FromValuesToRef(tU._x, tU._y, tU._z, 0, RU._x, RU._y, RU._z, 0, UU._x, UU._y, UU._z, 0, 0, 0, 0, 1, gU), gU
      }
      static OrthoLH(UU, RU, gU, tU, pU) {
        const EU = new hU;
        return hU.OrthoLHToRef(UU, RU, gU, tU, EU, pU), EU
      }
      static OrthoLHToRef(UU, RU, gU, tU, pU, EU) {
        const PU = 2 / UU,
          TU = 2 / RU,
          qU = 2 / (tU - gU),
          KU = -(tU + gU) / (tU - gU);
        return hU.FromValuesToRef(PU, 0, 0, 0, 0, TU, 0, 0, 0, 0, qU, 0, 0, 0, KU, 1, pU), EU && pU.multiplyToRef(WU, pU), pU._updateIdentityStatus(1 === PU && 1 === TU && 1 === qU && 0 === KU), pU
      }
      static OrthoOffCenterLH(UU, RU, gU, tU, pU, EU, PU) {
        const TU = new hU;
        return hU.OrthoOffCenterLHToRef(UU, RU, gU, tU, pU, EU, TU, PU), TU
      }
      static OrthoOffCenterLHToRef(UU, RU, gU, tU, pU, EU, PU, TU) {
        const qU = 2 / (RU - UU),
          KU = 2 / (tU - gU),
          cU = 2 / (EU - pU),
          GU = -(EU + pU) / (EU - pU),
          jU = (UU + RU) / (UU - RU),
          uU = (tU + gU) / (gU - tU);
        return hU.FromValuesToRef(qU, 0, 0, 0, 0, KU, 0, 0, 0, 0, cU, 0, jU, uU, GU, 1, PU), TU && PU.multiplyToRef(WU, PU), PU.markAsUpdated(), PU
      }
      static ObliqueOffCenterLHToRef(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
        const GU = -PU * Math.cos(TU),
          jU = -PU * Math.sin(TU);
        return hU.TranslationToRef(0, 0, -qU, QU.Matrix[1]), hU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, GU, jU, 1, 0, 0, 0, 0, 1, QU.Matrix[0]), QU.Matrix[1].multiplyToRef(QU.Matrix[0], QU.Matrix[0]), hU.TranslationToRef(0, 0, qU, QU.Matrix[1]), QU.Matrix[0].multiplyToRef(QU.Matrix[1], QU.Matrix[0]), hU.OrthoOffCenterLHToRef(UU, RU, gU, tU, pU, EU, KU, cU), QU.Matrix[0].multiplyToRef(KU, KU), KU
      }
      static OrthoOffCenterRH(UU, RU, gU, tU, pU, EU, PU) {
        const TU = new hU;
        return hU.OrthoOffCenterRHToRef(UU, RU, gU, tU, pU, EU, TU, PU), TU
      }
      static OrthoOffCenterRHToRef(UU, RU, gU, tU, pU, EU, PU, TU) {
        return hU.OrthoOffCenterLHToRef(UU, RU, gU, tU, pU, EU, PU, TU), PU._m[10] *= -1, PU
      }
      static ObliqueOffCenterRHToRef(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
        const GU = PU * Math.cos(TU),
          jU = PU * Math.sin(TU);
        return hU.TranslationToRef(0, 0, qU, QU.Matrix[1]), hU.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, GU, jU, 1, 0, 0, 0, 0, 1, QU.Matrix[0]), QU.Matrix[1].multiplyToRef(QU.Matrix[0], QU.Matrix[0]), hU.TranslationToRef(0, 0, -qU, QU.Matrix[1]), QU.Matrix[0].multiplyToRef(QU.Matrix[1], QU.Matrix[0]), hU.OrthoOffCenterRHToRef(UU, RU, gU, tU, pU, EU, KU, cU), QU.Matrix[0].multiplyToRef(KU, KU), KU
      }
      static PerspectiveLH(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const PU = new hU,
          TU = 2 * gU / UU,
          qU = 2 * gU / RU,
          KU = (tU + gU) / (tU - gU),
          cU = -2 * tU * gU / (tU - gU),
          GU = Math.tan(EU);
        return hU.FromValuesToRef(TU, 0, 0, 0, 0, qU, 0, GU, 0, 0, KU, 1, 0, 0, cU, 0, PU), pU && PU.multiplyToRef(WU, PU), PU._updateIdentityStatus(!1), PU
      }
      static PerspectiveFovLH(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const TU = new hU;
        return hU.PerspectiveFovLHToRef(UU, RU, gU, tU, TU, !0, pU, EU, PU), TU
      }
      static PerspectiveFovLHToRef(UU, RU, gU, tU, pU) {
        let EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const KU = gU,
          cU = tU,
          GU = 1 / Math.tan(.5 * UU),
          jU = EU ? GU / RU : GU,
          uU = EU ? GU : GU * RU,
          CU = qU && 0 === KU ? -1 : 0 !== cU ? (cU + KU) / (cU - KU) : 1,
          QU = qU && 0 === KU ? 2 * cU : 0 !== cU ? -2 * cU * KU / (cU - KU) : -2 * KU,
          eU = Math.tan(TU);
        return hU.FromValuesToRef(jU, 0, 0, 0, 0, uU, 0, eU, 0, 0, CU, 1, 0, 0, QU, 0, pU), PU && pU.multiplyToRef(WU, pU), pU._updateIdentityStatus(!1), pU
      }
      static PerspectiveFovReverseLHToRef(UU, RU, gU, tU, pU) {
        let EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const qU = 1 / Math.tan(.5 * UU),
          KU = EU ? qU / RU : qU,
          cU = EU ? qU : qU * RU,
          GU = Math.tan(TU);
        return hU.FromValuesToRef(KU, 0, 0, 0, 0, cU, 0, GU, 0, 0, -gU, 1, 0, 0, 1, 0, pU), PU && pU.multiplyToRef(WU, pU), pU._updateIdentityStatus(!1), pU
      }
      static PerspectiveFovRH(UU, RU, gU, tU, pU) {
        let EU = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PU = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const TU = new hU;
        return hU.PerspectiveFovRHToRef(UU, RU, gU, tU, TU, !0, pU, EU, PU), TU
      }
      static PerspectiveFovRHToRef(UU, RU, gU, tU, pU) {
        let EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qU = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const KU = gU,
          cU = tU,
          GU = 1 / Math.tan(.5 * UU),
          jU = EU ? GU / RU : GU,
          uU = EU ? GU : GU * RU,
          CU = qU && 0 === KU ? 1 : 0 !== cU ? -(cU + KU) / (cU - KU) : -1,
          QU = qU && 0 === KU ? 2 * cU : 0 !== cU ? -2 * cU * KU / (cU - KU) : -2 * KU,
          eU = Math.tan(TU);
        return hU.FromValuesToRef(jU, 0, 0, 0, 0, uU, 0, eU, 0, 0, CU, -1, 0, 0, QU, 0, pU), PU && pU.multiplyToRef(WU, pU), pU._updateIdentityStatus(!1), pU
      }
      static PerspectiveFovReverseRHToRef(UU, RU, gU, tU, pU) {
        let EU = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PU = arguments.length > 6 ? arguments[6] : void 0,
          TU = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const qU = 1 / Math.tan(.5 * UU),
          KU = EU ? qU / RU : qU,
          cU = EU ? qU : qU * RU,
          GU = Math.tan(TU);
        return hU.FromValuesToRef(KU, 0, 0, 0, 0, cU, 0, GU, 0, 0, -gU, -1, 0, 0, -1, 0, pU), PU && pU.multiplyToRef(WU, pU), pU._updateIdentityStatus(!1), pU
      }
      static GetFinalMatrix(UU, RU, gU, tU, pU, EU) {
        const PU = UU.width,
          TU = UU.height,
          qU = UU.x,
          KU = UU.y,
          cU = hU.FromValues(PU / 2, 0, 0, 0, 0, -TU / 2, 0, 0, 0, 0, EU - pU, 0, qU + PU / 2, TU / 2 + KU, pU, 1),
          GU = new hU;
        return RU.multiplyToRef(gU, GU), GU.multiplyToRef(tU, GU), GU.multiplyToRef(cU, GU)
      }
      static GetAsMatrix2x2(UU) {
        const RU = UU.m,
          gU = [RU[0], RU[1], RU[4], RU[5]];
        return EU.c.MatrixUse64Bits ? gU : new Float32Array(gU)
      }
      static GetAsMatrix3x3(UU) {
        const RU = UU.m,
          gU = [RU[0], RU[1], RU[2], RU[4], RU[5], RU[6], RU[8], RU[9], RU[10]];
        return EU.c.MatrixUse64Bits ? gU : new Float32Array(gU)
      }
      static Transpose(UU) {
        const RU = new hU;
        return hU.TransposeToRef(UU, RU), RU
      }
      static TransposeToRef(UU, RU) {
        const gU = UU.m,
          tU = gU[0],
          pU = gU[4],
          EU = gU[8],
          PU = gU[12],
          TU = gU[1],
          qU = gU[5],
          KU = gU[9],
          cU = gU[13],
          GU = gU[2],
          jU = gU[6],
          uU = gU[10],
          CU = gU[14],
          hU = gU[3],
          QU = gU[7],
          eU = gU[11],
          WU = gU[15],
          fU = RU._m;
        return fU[0] = tU, fU[1] = pU, fU[2] = EU, fU[3] = PU, fU[4] = TU, fU[5] = qU, fU[6] = KU, fU[7] = cU, fU[8] = GU, fU[9] = jU, fU[10] = uU, fU[11] = CU, fU[12] = hU, fU[13] = QU, fU[14] = eU, fU[15] = WU, RU.markAsUpdated(), RU._updateIdentityStatus(UU._isIdentity, UU._isIdentityDirty), RU
      }
      static Reflection(UU) {
        const RU = new hU;
        return hU.ReflectionToRef(UU, RU), RU
      }
      static ReflectionToRef(UU, RU) {
        UU.normalize();
        const gU = UU.normal.x,
          tU = UU.normal.y,
          pU = UU.normal.z,
          EU = -2 * gU,
          PU = -2 * tU,
          TU = -2 * pU;
        return hU.FromValuesToRef(EU * gU + 1, PU * gU, TU * gU, 0, EU * tU, PU * tU + 1, TU * tU, 0, EU * pU, PU * pU, TU * pU + 1, 0, EU * UU.d, PU * UU.d, TU * UU.d, 1, RU), RU
      }
      static FromXYZAxesToRef(UU, RU, gU, tU) {
        return hU.FromValuesToRef(UU._x, UU._y, UU._z, 0, RU._x, RU._y, RU._z, 0, gU._x, gU._y, gU._z, 0, 0, 0, 0, 1, tU), tU
      }
      static FromQuaternionToRef(UU, RU) {
        const gU = UU._x * UU._x,
          tU = UU._y * UU._y,
          pU = UU._z * UU._z,
          EU = UU._x * UU._y,
          PU = UU._z * UU._w,
          TU = UU._z * UU._x,
          qU = UU._y * UU._w,
          KU = UU._y * UU._z,
          cU = UU._x * UU._w;
        return RU._m[0] = 1 - 2 * (tU + pU), RU._m[1] = 2 * (EU + PU), RU._m[2] = 2 * (TU - qU), RU._m[3] = 0, RU._m[4] = 2 * (EU - PU), RU._m[5] = 1 - 2 * (pU + gU), RU._m[6] = 2 * (KU + cU), RU._m[7] = 0, RU._m[8] = 2 * (TU + qU), RU._m[9] = 2 * (KU - cU), RU._m[10] = 1 - 2 * (tU + gU), RU._m[11] = 0, RU._m[12] = 0, RU._m[13] = 0, RU._m[14] = 0, RU._m[15] = 1, RU.markAsUpdated(), RU
      }
    }
    hU._IdentityReadOnly = hU.Identity();
    class QU {}
    QU.xC = (0, pU.f)(11, jU.Zero), QU.Matrix = (0, pU.f)(2, hU.Identity), QU.Quaternion = (0, pU.f)(3, CU.Zero);
    class eU {}
    eU.Vector2 = (0, pU.f)(3, GU.Zero), eU.xC = (0, pU.f)(13, jU.Zero), eU.Vector4 = (0, pU.f)(3, uU.Zero), eU.Quaternion = (0, pU.f)(3, CU.Zero), eU.Matrix = (0, pU.f)(8, hU.Identity);
    const WU = hU.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let fU = !1;

    function xU() {
      fU || (fU = !0, Object.defineProperties(GU.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(jU.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(uU.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(CU.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(hU.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, KU.g)("BABYLON.Vector2", GU), (0, KU.g)("BABYLON.Vector3", jU), (0, KU.g)("BABYLON.Vector4", uU), (0, KU.g)("BABYLON.Matrix", hU))
    }
  },
  36624: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    const tU = "undefined" !== typeof WeakRef;
    class pU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(UU, RU, gU, tU)
      }
      initialize(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = UU, this.skipNextObservers = RU, this.target = gU, this.currentTarget = tU, this
      }
    }
    class EU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = UU, this.mask = RU, this.scope = gU, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(UU)
      }
    }
    class PU {
      static FromPromise(UU, RU) {
        const gU = new PU;
        return UU.then((UU => {
          gU.notifyObservers(UU)
        })).catch((UU => {
          if (!RU) throw UU;
          RU.notifyObservers(UU)
        })), gU
      }
      get observers() {
        return this._observers
      }
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = RU, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new pU(0), UU && (this._onObserverAdded = UU)
      }
      add(UU) {
        let RU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          gU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!UU) return null;
        const pU = new EU(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        pU.unregisterOnNextCall = gU, RU ? this._observers.unshift(pU) : this._observers.push(pU), this._onObserverAdded && this._onObserverAdded(pU), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(pU, this._lastNotifiedValue);
        const PU = tU ? new WeakRef(this) : {
          deref: () => this
        };
        return pU._remove = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const RU = PU.deref();
          RU && (UU ? RU.remove(pU) : RU._remove(pU))
        }, pU
      }
      addOnce(UU) {
        return this.add(UU, void 0, void 0, void 0, !0)
      }
      remove(UU) {
        if (!UU) return !1;
        UU._remove = null;
        return -1 !== this._observers.indexOf(UU) && (this._deferUnregister(UU), !0)
      }
      removeCallback(UU, RU) {
        for (let gU = 0; gU < this._observers.length; gU++) {
          const tU = this._observers[gU];
          if (!tU._willBeUnregistered && (tU.callback === UU && (!RU || RU === tU.scope))) return this._deferUnregister(tU), !0
        }
        return !1
      }
      _deferUnregister(UU) {
        UU._willBeUnregistered || (this._numObserversMarkedAsDeleted++, UU.unregisterOnNextCall = !1, UU._willBeUnregistered = !0, setTimeout((() => {
          this._remove(UU)
        }), 0))
      }
      _remove(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!UU) return !1;
        const gU = this._observers.indexOf(UU);
        return -1 !== gU && (RU && this._numObserversMarkedAsDeleted--, this._observers.splice(gU, 1), !0)
      }
      makeObserverTopPriority(UU) {
        this._remove(UU, !1), this._observers.unshift(UU)
      }
      makeObserverBottomPriority(UU) {
        this._remove(UU, !1), this._observers.push(UU)
      }
      notifyObservers(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = UU), !this._observers.length) return !0;
        const EU = this._eventState;
        EU.mask = RU, EU.target = gU, EU.currentTarget = tU, EU.skipNextObservers = !1, EU.lastReturnValue = UU, EU.userInfo = pU;
        for (const PU of this._observers)
          if (!PU._willBeUnregistered && (PU.mask & RU && (PU.unregisterOnNextCall && this._deferUnregister(PU), PU.scope ? EU.lastReturnValue = PU.callback.apply(PU.scope, [UU, EU]) : EU.lastReturnValue = PU.callback(UU, EU)), EU.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = RU), UU._willBeUnregistered) return;
        const tU = this._eventState;
        tU.mask = gU, tU.skipNextObservers = !1, UU.unregisterOnNextCall && this._deferUnregister(UU), UU.callback(RU, tU)
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
        const UU = new PU;
        return UU._observers = this._observers.slice(0), UU
      }
      hasSpecificMask() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const RU of this._observers)
          if (RU.mask & UU || RU.mask === UU) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);