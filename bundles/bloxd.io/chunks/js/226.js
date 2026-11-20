export const id = 226;
export const ids = [226];
export const modules = {
  36925: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT
    });
    var lT = cT(36932);
    class MT {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    MT.Instances = [], MT.OnEnginesDisposedObservable = new lT.b, MT._LastCreatedScene = null, MT.UseFallbackTexture = !0, MT.FallbackTexture = ""
  },
  36918: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => lT
    });
    class lT {
      static SetMatrixPrecision(TT) {
        if (lT.MatrixTrackPrecisionChange = !1, TT && !lT.MatrixUse64Bits && lT.MatrixTrackedMatrices)
          for (let kT = 0; kT < lT.MatrixTrackedMatrices.length; ++kT) {
            const TT = lT.MatrixTrackedMatrices[kT],
              cT = TT._m;
            TT._m = new Array(16);
            for (let kT = 0; kT < 16; ++kT) TT._m[kT] = cT[kT]
          }
        lT.MatrixUse64Bits = TT, lT.MatrixCurrentType = lT.MatrixUse64Bits ? Array : Float32Array, lT.MatrixTrackedMatrices = null
      }
    }
    lT.MatrixUse64Bits = !1, lT.MatrixTrackPrecisionChange = !0, lT.MatrixCurrentType = Float32Array, lT.MatrixTrackedMatrices = []
  },
  36942: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => yT,
      h: () => xT,
      k: () => fT,
      m: () => lT,
      o: () => KT,
      r: () => OT
    });
    class lT {}

    function MT(TT) {
      TT.updateFlag = lT._UpdateFlagSeed++
    }

    function KT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const MT = TT.acT(),
        KT = kT.acT(),
        OT = MT[0],
        yT = MT[1],
        fT = MT[2],
        xT = MT[3],
        IT = MT[4],
        AT = MT[5],
        CT = MT[6],
        jT = MT[7],
        vT = MT[8],
        tT = MT[9],
        hT = MT[10],
        NT = MT[11],
        QT = MT[12],
        ST = MT[13],
        DT = MT[14],
        aT = MT[15],
        FT = KT[0],
        rT = KT[1],
        PT = KT[2],
        wT = KT[3],
        mT = KT[4],
        bT = KT[5],
        zT = KT[6],
        JT = KT[7],
        oT = KT[8],
        HT = KT[9],
        eT = KT[10],
        GT = KT[11],
        VT = KT[12],
        ET = KT[13],
        ZT = KT[14],
        uT = KT[15];
      cT[lT] = OT * FT + yT * mT + fT * oT + xT * VT, cT[lT + 1] = OT * rT + yT * bT + fT * HT + xT * ET, cT[lT + 2] = OT * PT + yT * zT + fT * eT + xT * ZT, cT[lT + 3] = OT * wT + yT * JT + fT * GT + xT * uT, cT[lT + 4] = IT * FT + AT * mT + CT * oT + jT * VT, cT[lT + 5] = IT * rT + AT * bT + CT * HT + jT * ET, cT[lT + 6] = IT * PT + AT * zT + CT * eT + jT * ZT, cT[lT + 7] = IT * wT + AT * JT + CT * GT + jT * uT, cT[lT + 8] = vT * FT + tT * mT + hT * oT + NT * VT, cT[lT + 9] = vT * rT + tT * bT + hT * HT + NT * ET, cT[lT + 10] = vT * PT + tT * zT + hT * eT + NT * ZT, cT[lT + 11] = vT * wT + tT * JT + hT * GT + NT * uT, cT[lT + 12] = QT * FT + ST * mT + DT * oT + aT * VT, cT[lT + 13] = QT * rT + ST * bT + DT * HT + aT * ET, cT[lT + 14] = QT * PT + ST * zT + DT * eT + aT * ZT, cT[lT + 15] = QT * wT + ST * JT + DT * GT + aT * uT
    }

    function OT(TT, kT, cT) {
      let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      KT(TT, kT, cT.acT(), lT), MT(cT)
    }

    function yT(TT, kT) {
      let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const lT = TT.acT();
      kT[cT] = lT[0], kT[cT + 1] = lT[1], kT[cT + 2] = lT[2], kT[cT + 3] = lT[3], kT[cT + 4] = lT[4], kT[cT + 5] = lT[5], kT[cT + 6] = lT[6], kT[cT + 7] = lT[7], kT[cT + 8] = lT[8], kT[cT + 9] = lT[9], kT[cT + 10] = lT[10], kT[cT + 11] = lT[11], kT[cT + 12] = lT[12], kT[cT + 13] = lT[13], kT[cT + 14] = lT[14], kT[cT + 15] = lT[15]
    }

    function fT(TT, kT) {
      const cT = xT(TT, kT.acT());
      return cT && MT(kT), cT
    }

    function xT(TT, kT) {
      const cT = TT.acT(),
        lT = cT[0],
        MT = cT[1],
        KT = cT[2],
        OT = cT[3],
        yT = cT[4],
        fT = cT[5],
        xT = cT[6],
        IT = cT[7],
        AT = cT[8],
        CT = cT[9],
        jT = cT[10],
        vT = cT[11],
        tT = cT[12],
        hT = cT[13],
        NT = cT[14],
        QT = cT[15],
        ST = jT * QT - NT * vT,
        DT = CT * QT - hT * vT,
        aT = CT * NT - hT * jT,
        FT = AT * QT - tT * vT,
        rT = AT * NT - jT * tT,
        PT = AT * hT - tT * CT,
        wT = +(fT * ST - xT * DT + IT * aT),
        mT = -(yT * ST - xT * FT + IT * rT),
        bT = +(yT * DT - fT * FT + IT * PT),
        zT = -(yT * aT - fT * rT + xT * PT),
        JT = lT * wT + MT * mT + KT * bT + OT * zT;
      if (0 === JT) return !1;
      const oT = 1 / JT,
        HT = xT * QT - NT * IT,
        eT = fT * QT - hT * IT,
        GT = fT * NT - hT * xT,
        VT = yT * QT - tT * IT,
        ET = yT * NT - tT * xT,
        ZT = yT * hT - tT * fT,
        uT = xT * vT - jT * IT,
        XT = fT * vT - CT * IT,
        dT = fT * jT - CT * xT,
        LT = yT * vT - AT * IT,
        RT = yT * jT - AT * xT,
        gT = yT * CT - AT * fT,
        UT = -(MT * ST - KT * DT + OT * aT),
        YT = +(lT * ST - KT * FT + OT * rT),
        BT = -(lT * DT - MT * FT + OT * PT),
        WT = +(lT * aT - MT * rT + KT * PT),
        nT = +(MT * HT - KT * eT + OT * GT),
        pT = -(lT * HT - KT * VT + OT * ET),
        iT = +(lT * eT - MT * VT + OT * ZT),
        qT = -(lT * GT - MT * ET + KT * ZT),
        sT = -(MT * uT - KT * XT + OT * dT),
        Tk = +(lT * uT - KT * LT + OT * RT),
        kk = -(lT * XT - MT * LT + OT * gT),
        ck = +(lT * dT - MT * RT + KT * gT);
      return kT[0] = wT * oT, kT[1] = UT * oT, kT[2] = nT * oT, kT[3] = sT * oT, kT[4] = mT * oT, kT[5] = YT * oT, kT[6] = pT * oT, kT[7] = Tk * oT, kT[8] = bT * oT, kT[9] = BT * oT, kT[10] = iT * oT, kT[11] = kk * oT, kT[12] = zT * oT, kT[13] = WT * oT, kT[14] = qT * oT, kT[15] = ck * oT, !0
    }
    lT._UpdateFlagSeed = 0
  },
  36892: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => tT,
      f: () => vT,
      g: () => DT,
      h: () => NT,
      i: () => AT,
      m: () => CT,
      o: () => jT
    });
    var lT = cT(36901),
      MT = cT(36910),
      KT = cT(36918),
      OT = cT(36925),
      yT = cT(36937),
      fT = cT(36942),
      xT = cT(36949);
    const IT = TT => parseInt(TT.toString().replace(/\W/g, ""));
    class AT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = TT, this.y = kT
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let TT = IT(this.x);
        return TT = 397 * TT ^ IT(this.y), TT
      }
      toArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[kT] = this.x, TT[kT + 1] = this.y, this
      }
      xkT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return AT.FromArrayToRef(TT, kT, this), this
      }
      acT() {
        return [this.x, this.y]
      }
      UkT(TT) {
        return this.x = TT.x, this.y = TT.y, this
      }
      I5(TT, kT) {
        return this.x = TT, this.y = kT, this
      }
      set(TT, kT) {
        return this.I5(TT, kT)
      }
      Xs(TT) {
        return this.I5(TT, TT)
      }
      add(TT) {
        return new AT(this.x + TT.x, this.y + TT.y)
      }
      addToRef(TT, kT) {
        return kT.x = this.x + TT.x, kT.y = this.y + TT.y, kT
      }
      addInPlace(TT) {
        return this.x += TT.x, this.y += TT.y, this
      }
      addInPlaceFromFloats(TT, kT) {
        return this.x += TT, this.y += kT, this
      }
      addVector3(TT) {
        return new AT(this.x + TT.x, this.y + TT.y)
      }
      subtract(TT) {
        return new AT(this.x - TT.x, this.y - TT.y)
      }
      subtractToRef(TT, kT) {
        return kT.x = this.x - TT.x, kT.y = this.y - TT.y, kT
      }
      gcT(TT) {
        return this.x -= TT.x, this.y -= TT.y, this
      }
      multiplyInPlace(TT) {
        return this.x *= TT.x, this.y *= TT.y, this
      }
      multiply(TT) {
        return new AT(this.x * TT.x, this.y * TT.y)
      }
      multiplyToRef(TT, kT) {
        return kT.x = this.x * TT.x, kT.y = this.y * TT.y, kT
      }
      multiplyByFloats(TT, kT) {
        return new AT(this.x * TT, this.y * kT)
      }
      divide(TT) {
        return new AT(this.x / TT.x, this.y / TT.y)
      }
      divideToRef(TT, kT) {
        return kT.x = this.x / TT.x, kT.y = this.y / TT.y, kT
      }
      divideInPlace(TT) {
        return this.x = this.x / TT.x, this.y = this.y / TT.y, this
      }
      minimizeInPlace(TT) {
        return this.minimizeInPlaceFromFloats(TT.x, TT.y)
      }
      maximizeInPlace(TT) {
        return this.maximizeInPlaceFromFloats(TT.x, TT.y)
      }
      minimizeInPlaceFromFloats(TT, kT) {
        return this.x = Math.min(TT, this.x), this.y = Math.min(kT, this.y), this
      }
      maximizeInPlaceFromFloats(TT, kT) {
        return this.x = Math.max(TT, this.x), this.y = Math.max(kT, this.y), this
      }
      subtractFromFloats(TT, kT) {
        return new AT(this.x - TT, this.y - kT)
      }
      subtractFromFloatsToRef(TT, kT, cT) {
        return cT.x = this.x - TT, cT.y = this.y - kT, cT
      }
      rc() {
        return new AT(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(TT) {
        return TT.x = -this.x, TT.y = -this.y, TT
      }
      scaleInPlace(TT) {
        return this.x *= TT, this.y *= TT, this
      }
      scale(TT) {
        return new AT(this.x * TT, this.y * TT)
      }
      scaleToRef(TT, kT) {
        return kT.x = this.x * TT, kT.y = this.y * TT, kT
      }
      scaleAndAddToRef(TT, kT) {
        return kT.x += this.x * TT, kT.y += this.y * TT, kT
      }
      equals(TT) {
        return TT && this.x === TT.x && this.y === TT.y
      }
      equalsWithEpsilon(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lT.b;
        return TT && (0, yT.WithinEpsilon)(this.x, TT.x, kT) && (0, yT.WithinEpsilon)(this.y, TT.y, kT)
      }
      qKT(TT, kT) {
        return this.x === TT && this.y === kT
      }
      floor() {
        return new AT(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(TT) {
        return TT.x = Math.floor(this.x), TT.y = Math.floor(this.y), TT
      }
      fract() {
        return new AT(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(TT) {
        return TT.x = this.x - Math.floor(this.x), TT.y = this.y - Math.floor(this.y), TT
      }
      rotate(TT) {
        return this.rotateToRef(TT, new AT)
      }
      rotateToRef(TT, kT) {
        const cT = Math.cos(TT),
          lT = Math.sin(TT);
        return kT.x = cT * this.x - lT * this.y, kT.y = lT * this.x + cT * this.y, kT
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
      normalizeFromLength(TT) {
        return 0 === TT || 1 === TT ? this : this.scaleInPlace(1 / TT)
      }
      normalizeToNew() {
        const TT = new AT;
        return this.normalizeToRef(TT), TT
      }
      normalizeToRef(TT) {
        const kT = this.length();
        return 0 === kT || 1 === kT ? (TT.x = this.x, TT.y = this.y, TT) : this.scaleToRef(1 / kT, TT)
      }
      clone() {
        return new AT(this.x, this.y)
      }
      dot(TT) {
        return this.x * TT.x + this.y * TT.y
      }
      static Zero() {
        return new AT(0, 0)
      }
      static One() {
        return new AT(1, 1)
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new AT((0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT))
      }
      static get ZeroReadOnly() {
        return AT._ZeroReadOnly
      }
      static FromArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new AT(TT[kT], TT[kT + 1])
      }
      static FromArrayToRef(TT, kT, cT) {
        return cT.x = TT[kT], cT.y = TT[kT + 1], cT
      }
      static FromFloatsToRef(TT, kT, cT) {
        return cT.I5(TT, kT), cT
      }
      static CatmullRom(TT, kT, cT, lT, MT) {
        const KT = MT * MT,
          OT = MT * KT,
          yT = .5 * (2 * kT.x + (-TT.x + cT.x) * MT + (2 * TT.x - 5 * kT.x + 4 * cT.x - lT.x) * KT + (-TT.x + 3 * kT.x - 3 * cT.x + lT.x) * OT),
          fT = .5 * (2 * kT.y + (-TT.y + cT.y) * MT + (2 * TT.y - 5 * kT.y + 4 * cT.y - lT.y) * KT + (-TT.y + 3 * kT.y - 3 * cT.y + lT.y) * OT);
        return new AT(yT, fT)
      }
      static ClampToRef(TT, kT, cT, lT) {
        return lT.x = (0, yT.Clamp)(TT.x, kT.x, cT.x), lT.y = (0, yT.Clamp)(TT.y, kT.y, cT.y), lT
      }
      static Clamp(TT, kT, cT) {
        const lT = (0, yT.Clamp)(TT.x, kT.x, cT.x),
          MT = (0, yT.Clamp)(TT.y, kT.y, cT.y);
        return new AT(lT, MT)
      }
      static Hermite(TT, kT, cT, lT, MT) {
        const KT = MT * MT,
          OT = MT * KT,
          yT = 2 * OT - 3 * KT + 1,
          fT = -2 * OT + 3 * KT,
          xT = OT - 2 * KT + MT,
          IT = OT - KT,
          CT = TT.x * yT + cT.x * fT + kT.x * xT + lT.x * IT,
          jT = TT.y * yT + cT.y * fT + kT.y * xT + lT.y * IT;
        return new AT(CT, jT)
      }
      static Hermite1stDerivative(TT, kT, cT, lT, MT) {
        return this.Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, new AT)
      }
      static Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT) {
        const OT = MT * MT;
        return KT.x = 6 * (OT - MT) * TT.x + (3 * OT - 4 * MT + 1) * kT.x + 6 * (-OT + MT) * cT.x + (3 * OT - 2 * MT) * lT.x, KT.y = 6 * (OT - MT) * TT.y + (3 * OT - 4 * MT + 1) * kT.y + 6 * (-OT + MT) * cT.y + (3 * OT - 2 * MT) * lT.y, KT
      }
      static Lerp(TT, kT, cT) {
        return AT.LerpToRef(TT, kT, cT, new AT)
      }
      static LerpToRef(TT, kT, cT, lT) {
        return lT.x = TT.x + (kT.x - TT.x) * cT, lT.y = TT.y + (kT.y - TT.y) * cT, lT
      }
      static Dot(TT, kT) {
        return TT.x * kT.x + TT.y * kT.y
      }
      static Normalize(TT) {
        return AT.NormalizeToRef(TT, new AT)
      }
      static NormalizeToRef(TT, kT) {
        return TT.normalizeToRef(kT), kT
      }
      static Minimize(TT, kT) {
        const cT = TT.x < kT.x ? TT.x : kT.x,
          lT = TT.y < kT.y ? TT.y : kT.y;
        return new AT(cT, lT)
      }
      static Maximize(TT, kT) {
        const cT = TT.x > kT.x ? TT.x : kT.x,
          lT = TT.y > kT.y ? TT.y : kT.y;
        return new AT(cT, lT)
      }
      static Transform(TT, kT) {
        return AT.TransformToRef(TT, kT, new AT)
      }
      static TransformToRef(TT, kT, cT) {
        const lT = kT.m,
          MT = TT.x * lT[0] + TT.y * lT[4] + lT[12],
          KT = TT.x * lT[1] + TT.y * lT[5] + lT[13];
        return cT.x = MT, cT.y = KT, cT
      }
      static PointInTriangle(TT, kT, cT, lT) {
        const MT = .5 * (-cT.y * lT.x + kT.y * (-cT.x + lT.x) + kT.x * (cT.y - lT.y) + cT.x * lT.y),
          KT = MT < 0 ? -1 : 1,
          OT = (kT.y * lT.x - kT.x * lT.y + (lT.y - kT.y) * TT.x + (kT.x - lT.x) * TT.y) * KT,
          yT = (kT.x * cT.y - kT.y * cT.x + (kT.y - cT.y) * TT.x + (cT.x - kT.x) * TT.y) * KT;
        return OT > 0 && yT > 0 && OT + yT < 2 * MT * KT
      }
      static Distance(TT, kT) {
        return Math.sqrt(AT.DistanceSquared(TT, kT))
      }
      static DistanceSquared(TT, kT) {
        const cT = TT.x - kT.x,
          lT = TT.y - kT.y;
        return cT * cT + lT * lT
      }
      static Center(TT, kT) {
        return AT.CenterToRef(TT, kT, new AT)
      }
      static CenterToRef(TT, kT, cT) {
        return cT.I5((TT.x + kT.x) / 2, (TT.y + kT.y) / 2)
      }
      static DistanceOfPointFromSegment(TT, kT, cT) {
        const lT = AT.DistanceSquared(kT, cT);
        if (0 === lT) return AT.Distance(TT, kT);
        const MT = cT.subtract(kT),
          KT = Math.max(0, Math.min(1, AT.Dot(TT.subtract(kT), MT) / lT)),
          OT = kT.add(MT.multiplyByFloats(KT, KT));
        return AT.Distance(TT, OT)
      }
    }
    AT._V8PerformanceHack = new AT(.5, .5), AT._ZeroReadOnly = AT.Zero();
    class CT {
      get x() {
        return this._x
      }
      set x(TT) {
        this._x = TT, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(TT) {
        this._y = TT, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(TT) {
        this._z = TT, this._isDirty = !0
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = TT, this._y = kT, this._z = cT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Fv"
      }
      getHashCode() {
        let TT = IT(this._x);
        return TT = 397 * TT ^ IT(this._y), TT = 397 * TT ^ IT(this._z), TT
      }
      acT() {
        return [this._x, this._y, this._z]
      }
      toArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[kT] = this._x, TT[kT + 1] = this._y, TT[kT + 2] = this._z, this
      }
      xkT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return CT.FromArrayToRef(TT, kT, this), this
      }
      toQuaternion() {
        return vT.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(TT) {
        return this._x += TT._x, this._y += TT._y, this._z += TT._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(TT, kT, cT) {
        return this._x += TT, this._y += kT, this._z += cT, this._isDirty = !0, this
      }
      add(TT) {
        return new CT(this._x + TT._x, this._y + TT._y, this._z + TT._z)
      }
      addToRef(TT, kT) {
        return kT._x = this._x + TT._x, kT._y = this._y + TT._y, kT._z = this._z + TT._z, kT._isDirty = !0, kT
      }
      gcT(TT) {
        return this._x -= TT._x, this._y -= TT._y, this._z -= TT._z, this._isDirty = !0, this
      }
      subtract(TT) {
        return new CT(this._x - TT._x, this._y - TT._y, this._z - TT._z)
      }
      subtractToRef(TT, kT) {
        return this.subtractFromFloatsToRef(TT._x, TT._y, TT._z, kT)
      }
      subtractFromFloats(TT, kT, cT) {
        return new CT(this._x - TT, this._y - kT, this._z - cT)
      }
      subtractFromFloatsToRef(TT, kT, cT, lT) {
        return lT._x = this._x - TT, lT._y = this._y - kT, lT._z = this._z - cT, lT._isDirty = !0, lT
      }
      rc() {
        return new CT(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(TT) {
        return TT._x = -1 * this._x, TT._y = -1 * this._y, TT._z = -1 * this._z, TT._isDirty = !0, TT
      }
      scaleInPlace(TT) {
        return this._x *= TT, this._y *= TT, this._z *= TT, this._isDirty = !0, this
      }
      scale(TT) {
        return new CT(this._x * TT, this._y * TT, this._z * TT)
      }
      scaleToRef(TT, kT) {
        return kT._x = this._x * TT, kT._y = this._y * TT, kT._z = this._z * TT, kT._isDirty = !0, kT
      }
      getNormalToRef(TT) {
        const kT = this.length();
        let cT = Math.acos(this._y / kT);
        const lT = Math.atan2(this._z, this._x);
        cT > Math.PI / 2 ? cT -= Math.PI / 2 : cT += Math.PI / 2;
        const MT = kT * Math.sin(cT) * Math.cos(lT),
          KT = kT * Math.cos(cT),
          OT = kT * Math.sin(cT) * Math.sin(lT);
        return TT.set(MT, KT, OT), TT
      }
      applyRotationQuaternionToRef(TT, kT) {
        const cT = this._x,
          lT = this._y,
          MT = this._z,
          KT = TT._x,
          OT = TT._y,
          yT = TT._z,
          fT = TT._w,
          xT = 2 * (OT * MT - yT * lT),
          IT = 2 * (yT * cT - KT * MT),
          AT = 2 * (KT * lT - OT * cT);
        return kT._x = cT + fT * xT + OT * AT - yT * IT, kT._y = lT + fT * IT + yT * xT - KT * AT, kT._z = MT + fT * AT + KT * IT - OT * xT, kT._isDirty = !0, kT
      }
      applyRotationQuaternionInPlace(TT) {
        return this.applyRotationQuaternionToRef(TT, this)
      }
      applyRotationQuaternion(TT) {
        return this.applyRotationQuaternionToRef(TT, new CT)
      }
      scaleAndAddToRef(TT, kT) {
        return kT._x += this._x * TT, kT._y += this._y * TT, kT._z += this._z * TT, kT._isDirty = !0, kT
      }
      projectOnPlane(TT, kT) {
        return this.projectOnPlaneToRef(TT, kT, new CT)
      }
      projectOnPlaneToRef(TT, kT, cT) {
        const lT = TT.normal,
          MT = TT.d,
          KT = hT.Fv[0];
        this.subtractToRef(kT, KT), KT.normalize();
        const OT = CT.Dot(KT, lT);
        if (Math.abs(OT) < 1e-10) cT.Xs(1 / 0);
        else {
          const TT = -(CT.Dot(kT, lT) + MT) / OT,
            yT = KT.scaleInPlace(TT);
          kT.addToRef(yT, cT)
        }
        return cT
      }
      equals(TT) {
        return TT && this._x === TT._x && this._y === TT._y && this._z === TT._z
      }
      equalsWithEpsilon(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lT.b;
        return TT && (0, yT.WithinEpsilon)(this._x, TT._x, kT) && (0, yT.WithinEpsilon)(this._y, TT._y, kT) && (0, yT.WithinEpsilon)(this._z, TT._z, kT)
      }
      qKT(TT, kT, cT) {
        return this._x === TT && this._y === kT && this._z === cT
      }
      multiplyInPlace(TT) {
        return this._x *= TT._x, this._y *= TT._y, this._z *= TT._z, this._isDirty = !0, this
      }
      multiply(TT) {
        return this.multiplyByFloats(TT._x, TT._y, TT._z)
      }
      multiplyToRef(TT, kT) {
        return kT._x = this._x * TT._x, kT._y = this._y * TT._y, kT._z = this._z * TT._z, kT._isDirty = !0, kT
      }
      multiplyByFloats(TT, kT, cT) {
        return new CT(this._x * TT, this._y * kT, this._z * cT)
      }
      divide(TT) {
        return new CT(this._x / TT._x, this._y / TT._y, this._z / TT._z)
      }
      divideToRef(TT, kT) {
        return kT._x = this._x / TT._x, kT._y = this._y / TT._y, kT._z = this._z / TT._z, kT._isDirty = !0, kT
      }
      divideInPlace(TT) {
        return this._x = this._x / TT._x, this._y = this._y / TT._y, this._z = this._z / TT._z, this._isDirty = !0, this
      }
      minimizeInPlace(TT) {
        return this.minimizeInPlaceFromFloats(TT._x, TT._y, TT._z)
      }
      maximizeInPlace(TT) {
        return this.maximizeInPlaceFromFloats(TT._x, TT._y, TT._z)
      }
      minimizeInPlaceFromFloats(TT, kT, cT) {
        return TT < this._x && (this.x = TT), kT < this._y && (this.y = kT), cT < this._z && (this.z = cT), this
      }
      maximizeInPlaceFromFloats(TT, kT, cT) {
        return TT > this._x && (this.x = TT), kT > this._y && (this.y = kT), cT > this._z && (this.z = cT), this
      }
      isNonUniformWithinEpsilon(TT) {
        const kT = Math.abs(this._x),
          cT = Math.abs(this._y);
        if (!(0, yT.WithinEpsilon)(kT, cT, TT)) return !0;
        const lT = Math.abs(this._z);
        return !(0, yT.WithinEpsilon)(kT, lT, TT) || !(0, yT.WithinEpsilon)(cT, lT, TT)
      }
      get isNonUniform() {
        const TT = Math.abs(this._x);
        if (TT !== Math.abs(this._y)) return !0;
        return TT !== Math.abs(this._z)
      }
      floorToRef(TT) {
        return TT._x = Math.floor(this._x), TT._y = Math.floor(this._y), TT._z = Math.floor(this._z), TT._isDirty = !0, TT
      }
      floor() {
        return new CT(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(TT) {
        return TT._x = this._x - Math.floor(this._x), TT._y = this._y - Math.floor(this._y), TT._z = this._z - Math.floor(this._z), TT._isDirty = !0, TT
      }
      fract() {
        return new CT(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(TT) {
        if ("xyz" === (TT = TT.toLowerCase())) return this;
        const kT = hT.Fv[0].UkT(this);
        return this.x = kT[TT[0]], this.y = kT[TT[1]], this.z = kT[TT[2]], this
      }
      rotateByQuaternionToRef(TT, kT) {
        return TT.toRotationMatrix(hT.Matrix[0]), CT.TransformCoordinatesToRef(this, hT.Matrix[0], kT), kT
      }
      rotateByQuaternionAroundPointToRef(TT, kT, cT) {
        return this.subtractToRef(kT, hT.Fv[0]), hT.Fv[0].rotateByQuaternionToRef(TT, hT.Fv[0]), kT.addToRef(hT.Fv[0], cT), cT
      }
      cross(TT) {
        return CT.CrossToRef(this, TT, new CT)
      }
      normalizeFromLength(TT) {
        return 0 === TT || 1 === TT ? this : this.scaleInPlace(1 / TT)
      }
      normalizeToNew() {
        return this.normalizeToRef(new CT)
      }
      normalizeToRef(TT) {
        const kT = this.length();
        return 0 === kT || 1 === kT ? (TT._x = this._x, TT._y = this._y, TT._z = this._z, TT._isDirty = !0, TT) : this.scaleToRef(1 / kT, TT)
      }
      clone() {
        return new CT(this._x, this._y, this._z)
      }
      UkT(TT) {
        return this.I5(TT._x, TT._y, TT._z)
      }
      I5(TT, kT, cT) {
        return this._x = TT, this._y = kT, this._z = cT, this._isDirty = !0, this
      }
      set(TT, kT, cT) {
        return this.I5(TT, kT, cT)
      }
      Xs(TT) {
        return this._x = this._y = this._z = TT, this._isDirty = !0, this
      }
      static GetClipFactor(TT, kT, cT, lT) {
        const MT = CT.Dot(TT, cT);
        return (MT - lT) / (MT - CT.Dot(kT, cT))
      }
      static GetAngleBetweenVectors(TT, kT, cT) {
        const lT = TT.normalizeToRef(hT.Fv[1]),
          MT = kT.normalizeToRef(hT.Fv[2]);
        let KT = CT.Dot(lT, MT);
        KT = (0, yT.Clamp)(KT, -1, 1);
        const OT = Math.acos(KT),
          fT = hT.Fv[3];
        return CT.CrossToRef(lT, MT, fT), CT.Dot(fT, cT) > 0 ? isNaN(OT) ? 0 : OT : isNaN(OT) ? -Math.PI : -Math.acos(KT)
      }
      static GetAngleBetweenVectorsOnPlane(TT, kT, cT) {
        hT.Fv[0].UkT(TT);
        const lT = hT.Fv[0];
        hT.Fv[1].UkT(kT);
        const MT = hT.Fv[1];
        hT.Fv[2].UkT(cT);
        const KT = hT.Fv[2],
          OT = hT.Fv[3],
          fT = hT.Fv[4];
        lT.normalize(), MT.normalize(), KT.normalize(), CT.CrossToRef(KT, lT, OT), CT.CrossToRef(OT, KT, fT);
        const xT = Math.atan2(CT.Dot(MT, OT), CT.Dot(MT, fT));
        return (0, yT.NormalizeRadians)(xT)
      }
      static PitchYawRollToMoveBetweenPointsToRef(TT, kT, cT) {
        const lT = NT.Fv[0];
        return kT.subtractToRef(TT, lT), cT._y = Math.atan2(lT.x, lT.z) || 0, cT._x = Math.atan2(Math.sqrt(lT.x ** 2 + lT.z ** 2), lT.y) || 0, cT._z = 0, cT._isDirty = !0, cT
      }
      static PitchYawRollToMoveBetweenPoints(TT, kT) {
        const cT = CT.Zero();
        return CT.PitchYawRollToMoveBetweenPointsToRef(TT, kT, cT)
      }
      static SlerpToRef(TT, kT, cT, MT) {
        cT = (0, yT.Clamp)(cT, 0, 1);
        const KT = hT.Fv[0],
          OT = hT.Fv[1];
        KT.UkT(TT);
        const fT = KT.length();
        KT.normalizeFromLength(fT), OT.UkT(kT);
        const xT = OT.length();
        OT.normalizeFromLength(xT);
        const IT = CT.Dot(KT, OT);
        let AT, jT;
        if (IT < 1 - lT.b) {
          const TT = Math.acos(IT),
            kT = 1 / Math.sin(TT);
          AT = Math.sin((1 - cT) * TT) * kT, jT = Math.sin(cT * TT) * kT
        } else AT = 1 - cT, jT = cT;
        return KT.scaleInPlace(AT), OT.scaleInPlace(jT), MT.UkT(KT).addInPlace(OT), MT.scaleInPlace((0, yT.Lerp)(fT, xT, cT)), MT
      }
      static SmoothToRef(TT, kT, cT, lT, MT) {
        return CT.SlerpToRef(TT, kT, 0 === lT ? 1 : cT / lT, MT), MT
      }
      static FromArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new CT(TT[kT], TT[kT + 1], TT[kT + 2])
      }
      static FromFloatArray(TT, kT) {
        return CT.FromArray(TT, kT)
      }
      static FromArrayToRef(TT, kT, cT) {
        return cT._x = TT[kT], cT._y = TT[kT + 1], cT._z = TT[kT + 2], cT._isDirty = !0, cT
      }
      static FromFloatArrayToRef(TT, kT, cT) {
        return CT.FromArrayToRef(TT, kT, cT)
      }
      static FromFloatsToRef(TT, kT, cT, lT) {
        return lT.I5(TT, kT, cT), lT
      }
      static Zero() {
        return new CT(0, 0, 0)
      }
      static One() {
        return new CT(1, 1, 1)
      }
      static Up() {
        return new CT(0, 1, 0)
      }
      static get UpReadOnly() {
        return CT._UpReadOnly
      }
      static get DownReadOnly() {
        return CT._DownReadOnly
      }
      static get RightReadOnly() {
        return CT._RightReadOnly
      }
      static get LeftReadOnly() {
        return CT._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return CT._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return CT._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return CT._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return CT._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return CT._ZeroReadOnly
      }
      static get OneReadOnly() {
        return CT._OneReadOnly
      }
      static Down() {
        return new CT(0, -1, 0)
      }
      static Forward() {
        return new CT(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new CT(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new CT(1, 0, 0)
      }
      static Left() {
        return new CT(-1, 0, 0)
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new CT((0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT))
      }
      static TransformCoordinates(TT, kT) {
        const cT = CT.Zero();
        return CT.TransformCoordinatesToRef(TT, kT, cT), cT
      }
      static TransformCoordinatesToRef(TT, kT, cT) {
        return CT.TransformCoordinatesFromFloatsToRef(TT._x, TT._y, TT._z, kT, cT), cT
      }
      static TransformCoordinatesFromFloatsToRef(TT, kT, cT, lT, MT) {
        const KT = lT.m,
          OT = TT * KT[0] + kT * KT[4] + cT * KT[8] + KT[12],
          yT = TT * KT[1] + kT * KT[5] + cT * KT[9] + KT[13],
          fT = TT * KT[2] + kT * KT[6] + cT * KT[10] + KT[14],
          xT = 1 / (TT * KT[3] + kT * KT[7] + cT * KT[11] + KT[15]);
        return MT._x = OT * xT, MT._y = yT * xT, MT._z = fT * xT, MT._isDirty = !0, MT
      }
      static TransformNormal(TT, kT) {
        const cT = CT.Zero();
        return CT.TransformNormalToRef(TT, kT, cT), cT
      }
      static TransformNormalToRef(TT, kT, cT) {
        return this.TransformNormalFromFloatsToRef(TT._x, TT._y, TT._z, kT, cT), cT
      }
      static TransformNormalFromFloatsToRef(TT, kT, cT, lT, MT) {
        const KT = lT.m;
        return MT._x = TT * KT[0] + kT * KT[4] + cT * KT[8], MT._y = TT * KT[1] + kT * KT[5] + cT * KT[9], MT._z = TT * KT[2] + kT * KT[6] + cT * KT[10], MT._isDirty = !0, MT
      }
      static CatmullRom(TT, kT, cT, lT, MT) {
        const KT = MT * MT,
          OT = MT * KT,
          yT = .5 * (2 * kT._x + (-TT._x + cT._x) * MT + (2 * TT._x - 5 * kT._x + 4 * cT._x - lT._x) * KT + (-TT._x + 3 * kT._x - 3 * cT._x + lT._x) * OT),
          fT = .5 * (2 * kT._y + (-TT._y + cT._y) * MT + (2 * TT._y - 5 * kT._y + 4 * cT._y - lT._y) * KT + (-TT._y + 3 * kT._y - 3 * cT._y + lT._y) * OT),
          xT = .5 * (2 * kT._z + (-TT._z + cT._z) * MT + (2 * TT._z - 5 * kT._z + 4 * cT._z - lT._z) * KT + (-TT._z + 3 * kT._z - 3 * cT._z + lT._z) * OT);
        return new CT(yT, fT, xT)
      }
      static Clamp(TT, kT, cT) {
        const lT = new CT;
        return CT.ClampToRef(TT, kT, cT, lT), lT
      }
      static ClampToRef(TT, kT, cT, lT) {
        let MT = TT._x;
        MT = MT > cT._x ? cT._x : MT, MT = MT < kT._x ? kT._x : MT;
        let KT = TT._y;
        KT = KT > cT._y ? cT._y : KT, KT = KT < kT._y ? kT._y : KT;
        let OT = TT._z;
        return OT = OT > cT._z ? cT._z : OT, OT = OT < kT._z ? kT._z : OT, lT.I5(MT, KT, OT), lT
      }
      static CheckExtends(TT, kT, cT) {
        kT.minimizeInPlace(TT), cT.maximizeInPlace(TT)
      }
      static Hermite(TT, kT, cT, lT, MT) {
        const KT = MT * MT,
          OT = MT * KT,
          yT = 2 * OT - 3 * KT + 1,
          fT = -2 * OT + 3 * KT,
          xT = OT - 2 * KT + MT,
          IT = OT - KT,
          AT = TT._x * yT + cT._x * fT + kT._x * xT + lT._x * IT,
          jT = TT._y * yT + cT._y * fT + kT._y * xT + lT._y * IT,
          vT = TT._z * yT + cT._z * fT + kT._z * xT + lT._z * IT;
        return new CT(AT, jT, vT)
      }
      static Hermite1stDerivative(TT, kT, cT, lT, MT) {
        const KT = new CT;
        return this.Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT), KT
      }
      static Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT) {
        const OT = MT * MT;
        return KT._x = 6 * (OT - MT) * TT._x + (3 * OT - 4 * MT + 1) * kT._x + 6 * (-OT + MT) * cT._x + (3 * OT - 2 * MT) * lT._x, KT._y = 6 * (OT - MT) * TT._y + (3 * OT - 4 * MT + 1) * kT._y + 6 * (-OT + MT) * cT._y + (3 * OT - 2 * MT) * lT._y, KT._z = 6 * (OT - MT) * TT._z + (3 * OT - 4 * MT + 1) * kT._z + 6 * (-OT + MT) * cT._z + (3 * OT - 2 * MT) * lT._z, KT._isDirty = !0, KT
      }
      static Lerp(TT, kT, cT) {
        const lT = new CT(0, 0, 0);
        return CT.LerpToRef(TT, kT, cT, lT), lT
      }
      static LerpToRef(TT, kT, cT, lT) {
        return lT._x = TT._x + (kT._x - TT._x) * cT, lT._y = TT._y + (kT._y - TT._y) * cT, lT._z = TT._z + (kT._z - TT._z) * cT, lT._isDirty = !0, lT
      }
      static Dot(TT, kT) {
        return TT._x * kT._x + TT._y * kT._y + TT._z * kT._z
      }
      dot(TT) {
        return this._x * TT._x + this._y * TT._y + this._z * TT._z
      }
      static Cross(TT, kT) {
        const cT = new CT;
        return CT.CrossToRef(TT, kT, cT), cT
      }
      static CrossToRef(TT, kT, cT) {
        const lT = TT._y * kT._z - TT._z * kT._y,
          MT = TT._z * kT._x - TT._x * kT._z,
          KT = TT._x * kT._y - TT._y * kT._x;
        return cT.I5(lT, MT, KT), cT
      }
      static Normalize(TT) {
        const kT = CT.Zero();
        return CT.NormalizeToRef(TT, kT), kT
      }
      static NormalizeToRef(TT, kT) {
        return TT.normalizeToRef(kT), kT
      }
      static Project(TT, kT, cT, lT) {
        const MT = new CT;
        return CT.ProjectToRef(TT, kT, cT, lT, MT), MT
      }
      static ProjectToRef(TT, kT, cT, lT, MT) {
        const KT = lT.width,
          yT = lT.height,
          fT = lT.x,
          xT = lT.y,
          IT = hT.Matrix[1],
          AT = OT.d.LastCreatedEngine?.isNDCHalfZRange,
          jT = AT ? 1 : .5,
          vT = AT ? 0 : .5;
        tT.FromValuesToRef(KT / 2, 0, 0, 0, 0, -yT / 2, 0, 0, 0, 0, jT, 0, fT + KT / 2, yT / 2 + xT, vT, 1, IT);
        const NT = hT.Matrix[0];
        return kT.multiplyToRef(cT, NT), NT.multiplyToRef(IT, NT), CT.TransformCoordinatesToRef(TT, NT, MT), MT
      }
      static Reflect(TT, kT) {
        return this.ReflectToRef(TT, kT, new CT)
      }
      static ReflectToRef(TT, kT, cT) {
        const lT = NT.Fv[0];
        return lT.UkT(kT).scaleInPlace(2 * CT.Dot(TT, kT)), cT.UkT(TT).gcT(lT)
      }
      static UnprojectFromTransform(TT, kT, cT, lT, MT) {
        return this.Unproject(TT, kT, cT, lT, MT, tT.IdentityReadOnly)
      }
      static Unproject(TT, kT, cT, lT, MT, KT) {
        const OT = new CT;
        return CT.UnprojectToRef(TT, kT, cT, lT, MT, KT, OT), OT
      }
      static UnprojectToRef(TT, kT, cT, lT, MT, KT, OT) {
        return CT.UnprojectFloatsToRef(TT._x, TT._y, TT._z, kT, cT, lT, MT, KT, OT), OT
      }
      static UnprojectFloatsToRef(TT, kT, cT, lT, MT, KT, yT, fT, xT) {
        const IT = hT.Matrix[0];
        KT.multiplyToRef(yT, IT), IT.multiplyToRef(fT, IT), IT.invert();
        const AT = hT.Fv[0];
        return AT.x = TT / lT * 2 - 1, AT.y = -(kT / MT * 2 - 1), OT.d.LastCreatedEngine?.isNDCHalfZRange ? AT.z = cT : AT.z = 2 * cT - 1, CT.TransformCoordinatesToRef(AT, IT, xT), xT
      }
      static Minimize(TT, kT) {
        const cT = new CT;
        return cT.UkT(TT), cT.minimizeInPlace(kT), cT
      }
      static Maximize(TT, kT) {
        const cT = new CT;
        return cT.UkT(TT), cT.maximizeInPlace(kT), cT
      }
      static Distance(TT, kT) {
        return Math.sqrt(CT.DistanceSquared(TT, kT))
      }
      static DistanceSquared(TT, kT) {
        const cT = TT._x - kT._x,
          lT = TT._y - kT._y,
          MT = TT._z - kT._z;
        return cT * cT + lT * lT + MT * MT
      }
      static ProjectOnTriangleToRef(TT, kT, cT, MT, KT) {
        const OT = hT.Fv[0],
          fT = hT.Fv[1],
          xT = hT.Fv[2],
          IT = hT.Fv[3],
          AT = hT.Fv[4];
        cT.subtractToRef(kT, OT), MT.subtractToRef(kT, fT), MT.subtractToRef(cT, xT);
        const jT = OT.length(),
          vT = fT.length(),
          tT = xT.length();
        if (jT < lT.b || vT < lT.b || tT < lT.b) return KT.UkT(kT), CT.Distance(TT, kT);
        TT.subtractToRef(kT, AT), CT.CrossToRef(OT, fT, IT);
        const NT = IT.length();
        if (NT < lT.b) return KT.UkT(kT), CT.Distance(TT, kT);
        IT.normalizeFromLength(NT);
        let QT = AT.length();
        if (QT < lT.b) return KT.UkT(kT), 0;
        AT.normalizeFromLength(QT);
        const ST = CT.Dot(IT, AT),
          DT = hT.Fv[5],
          aT = hT.Fv[6];
        DT.UkT(IT).scaleInPlace(-QT * ST), aT.UkT(TT).addInPlace(DT);
        const FT = hT.Fv[4],
          rT = hT.Fv[5],
          PT = hT.Fv[7],
          wT = hT.Fv[8];
        FT.UkT(OT).scaleInPlace(1 / jT), wT.UkT(fT).scaleInPlace(1 / vT), FT.addInPlace(wT).scaleInPlace(-1), rT.UkT(OT).scaleInPlace(-1 / jT), wT.UkT(xT).scaleInPlace(1 / tT), rT.addInPlace(wT).scaleInPlace(-1), PT.UkT(xT).scaleInPlace(-1 / tT), wT.UkT(fT).scaleInPlace(-1 / vT), PT.addInPlace(wT).scaleInPlace(-1);
        const mT = hT.Fv[9];
        let bT;
        mT.UkT(aT).gcT(kT), CT.CrossToRef(FT, mT, wT), bT = CT.Dot(wT, IT);
        const zT = bT;
        mT.UkT(aT).gcT(cT), CT.CrossToRef(rT, mT, wT), bT = CT.Dot(wT, IT);
        const JT = bT;
        mT.UkT(aT).gcT(MT), CT.CrossToRef(PT, mT, wT), bT = CT.Dot(wT, IT);
        const oT = bT,
          HT = hT.Fv[10];
        let eT, GT;
        zT > 0 && JT < 0 ? (HT.UkT(OT), eT = kT, GT = cT) : JT > 0 && oT < 0 ? (HT.UkT(xT), eT = cT, GT = MT) : (HT.UkT(fT).scaleInPlace(-1), eT = MT, GT = kT);
        const VT = hT.Fv[9],
          ET = hT.Fv[4];
        eT.subtractToRef(aT, wT), GT.subtractToRef(aT, VT), CT.CrossToRef(wT, VT, ET);
        if (!(CT.Dot(ET, IT) < 0)) return KT.UkT(aT), Math.abs(QT * ST);
        const ZT = hT.Fv[5];
        CT.CrossToRef(HT, ET, ZT), ZT.normalize();
        const uT = hT.Fv[9];
        uT.UkT(eT).gcT(aT);
        const XT = uT.length();
        if (XT < lT.b) return KT.UkT(eT), CT.Distance(TT, eT);
        uT.normalizeFromLength(XT);
        const dT = CT.Dot(ZT, uT),
          LT = hT.Fv[7];
        LT.UkT(aT).addInPlace(ZT.scaleInPlace(XT * dT)), wT.UkT(LT).gcT(eT), QT = HT.length(), HT.normalizeFromLength(QT);
        let RT = CT.Dot(wT, HT) / Math.max(QT, lT.b);
        return RT = (0, yT.Clamp)(RT, 0, 1), LT.UkT(eT).addInPlace(HT.scaleInPlace(RT * QT)), KT.UkT(LT), CT.Distance(TT, LT)
      }
      static Center(TT, kT) {
        return CT.CenterToRef(TT, kT, CT.Zero())
      }
      static CenterToRef(TT, kT, cT) {
        return cT.I5((TT._x + kT._x) / 2, (TT._y + kT._y) / 2, (TT._z + kT._z) / 2)
      }
      static RotationFromAxis(TT, kT, cT) {
        const lT = new CT;
        return CT.RotationFromAxisToRef(TT, kT, cT, lT), lT
      }
      static RotationFromAxisToRef(TT, kT, cT, lT) {
        const MT = hT.Quaternion[0];
        return vT.RotationQuaternionFromAxisToRef(TT, kT, cT, MT), MT.toEulerAnglesToRef(lT), lT
      }
    }
    CT._V8PerformanceHack = new CT(.5, .5, .5), CT._UpReadOnly = CT.Up(), CT._DownReadOnly = CT.Down(), CT._LeftHandedForwardReadOnly = CT.Forward(!1), CT._RightHandedForwardReadOnly = CT.Forward(!0), CT._LeftHandedBackwardReadOnly = CT.Backward(!1), CT._RightHandedBackwardReadOnly = CT.Backward(!0), CT._RightReadOnly = CT.Right(), CT._LeftReadOnly = CT.Left(), CT._ZeroReadOnly = CT.Zero(), CT._OneReadOnly = CT.One();
    class jT {
      get x() {
        return this._x
      }
      set x(TT) {
        this._x = TT, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(TT) {
        this._y = TT, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(TT) {
        this._z = TT, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(TT) {
        this._w = TT, this._isDirty = !0
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = TT, this._y = kT, this._z = cT, this._w = lT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let TT = IT(this._x);
        return TT = 397 * TT ^ IT(this._y), TT = 397 * TT ^ IT(this._z), TT = 397 * TT ^ IT(this._w), TT
      }
      acT() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(TT, kT) {
        return void 0 === kT && (kT = 0), TT[kT] = this._x, TT[kT + 1] = this._y, TT[kT + 2] = this._z, TT[kT + 3] = this._w, this
      }
      xkT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return jT.FromArrayToRef(TT, kT, this), this
      }
      addInPlace(TT) {
        return this.x += TT._x, this.y += TT._y, this.z += TT._z, this.w += TT._w, this
      }
      addInPlaceFromFloats(TT, kT, cT, lT) {
        return this.x += TT, this.y += kT, this.z += cT, this.w += lT, this
      }
      add(TT) {
        return new jT(this._x + TT.x, this._y + TT.y, this._z + TT.z, this._w + TT.w)
      }
      addToRef(TT, kT) {
        return kT.x = this._x + TT.x, kT.y = this._y + TT.y, kT.z = this._z + TT.z, kT.w = this._w + TT.w, kT
      }
      gcT(TT) {
        return this.x -= TT.x, this.y -= TT.y, this.z -= TT.z, this.w -= TT.w, this
      }
      subtract(TT) {
        return new jT(this._x - TT.x, this._y - TT.y, this._z - TT.z, this._w - TT.w)
      }
      subtractToRef(TT, kT) {
        return kT.x = this._x - TT.x, kT.y = this._y - TT.y, kT.z = this._z - TT.z, kT.w = this._w - TT.w, kT
      }
      subtractFromFloats(TT, kT, cT, lT) {
        return new jT(this._x - TT, this._y - kT, this._z - cT, this._w - lT)
      }
      subtractFromFloatsToRef(TT, kT, cT, lT, MT) {
        return MT.x = this._x - TT, MT.y = this._y - kT, MT.z = this._z - cT, MT.w = this._w - lT, MT
      }
      rc() {
        return new jT(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(TT) {
        return TT.x = -this._x, TT.y = -this._y, TT.z = -this._z, TT.w = -this._w, TT
      }
      scaleInPlace(TT) {
        return this.x *= TT, this.y *= TT, this.z *= TT, this.w *= TT, this
      }
      scale(TT) {
        return new jT(this._x * TT, this._y * TT, this._z * TT, this._w * TT)
      }
      scaleToRef(TT, kT) {
        return kT.x = this._x * TT, kT.y = this._y * TT, kT.z = this._z * TT, kT.w = this._w * TT, kT
      }
      scaleAndAddToRef(TT, kT) {
        return kT.x += this._x * TT, kT.y += this._y * TT, kT.z += this._z * TT, kT.w += this._w * TT, kT
      }
      equals(TT) {
        return TT && this._x === TT.x && this._y === TT.y && this._z === TT.z && this._w === TT.w
      }
      equalsWithEpsilon(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lT.b;
        return TT && (0, yT.WithinEpsilon)(this._x, TT.x, kT) && (0, yT.WithinEpsilon)(this._y, TT.y, kT) && (0, yT.WithinEpsilon)(this._z, TT.z, kT) && (0, yT.WithinEpsilon)(this._w, TT.w, kT)
      }
      qKT(TT, kT, cT, lT) {
        return this._x === TT && this._y === kT && this._z === cT && this._w === lT
      }
      multiplyInPlace(TT) {
        return this.x *= TT.x, this.y *= TT.y, this.z *= TT.z, this.w *= TT.w, this
      }
      multiply(TT) {
        return new jT(this._x * TT.x, this._y * TT.y, this._z * TT.z, this._w * TT.w)
      }
      multiplyToRef(TT, kT) {
        return kT.x = this._x * TT.x, kT.y = this._y * TT.y, kT.z = this._z * TT.z, kT.w = this._w * TT.w, kT
      }
      multiplyByFloats(TT, kT, cT, lT) {
        return new jT(this._x * TT, this._y * kT, this._z * cT, this._w * lT)
      }
      divide(TT) {
        return new jT(this._x / TT.x, this._y / TT.y, this._z / TT.z, this._w / TT.w)
      }
      divideToRef(TT, kT) {
        return kT.x = this._x / TT.x, kT.y = this._y / TT.y, kT.z = this._z / TT.z, kT.w = this._w / TT.w, kT
      }
      divideInPlace(TT) {
        return this.divideToRef(TT, this)
      }
      minimizeInPlace(TT) {
        return TT.x < this._x && (this.x = TT.x), TT.y < this._y && (this.y = TT.y), TT.z < this._z && (this.z = TT.z), TT.w < this._w && (this.w = TT.w), this
      }
      maximizeInPlace(TT) {
        return TT.x > this._x && (this.x = TT.x), TT.y > this._y && (this.y = TT.y), TT.z > this._z && (this.z = TT.z), TT.w > this._w && (this.w = TT.w), this
      }
      minimizeInPlaceFromFloats(TT, kT, cT, lT) {
        return this.x = Math.min(TT, this._x), this.y = Math.min(kT, this._y), this.z = Math.min(cT, this._z), this.w = Math.min(lT, this._w), this
      }
      maximizeInPlaceFromFloats(TT, kT, cT, lT) {
        return this.x = Math.max(TT, this._x), this.y = Math.max(kT, this._y), this.z = Math.max(cT, this._z), this.w = Math.max(lT, this._w), this
      }
      floorToRef(TT) {
        return TT.x = Math.floor(this._x), TT.y = Math.floor(this._y), TT.z = Math.floor(this._z), TT.w = Math.floor(this._w), TT
      }
      floor() {
        return new jT(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(TT) {
        return TT.x = this._x - Math.floor(this._x), TT.y = this._y - Math.floor(this._y), TT.z = this._z - Math.floor(this._z), TT.w = this._w - Math.floor(this._w), TT
      }
      fract() {
        return new jT(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(TT) {
        return 0 === TT || 1 === TT ? this : this.scaleInPlace(1 / TT)
      }
      normalizeToNew() {
        return this.normalizeToRef(new jT)
      }
      normalizeToRef(TT) {
        const kT = this.length();
        return 0 === kT || 1 === kT ? (TT.x = this._x, TT.y = this._y, TT.z = this._z, TT.w = this._w, TT) : this.scaleToRef(1 / kT, TT)
      }
      toVector3() {
        return new CT(this._x, this._y, this._z)
      }
      clone() {
        return new jT(this._x, this._y, this._z, this._w)
      }
      UkT(TT) {
        return this.x = TT.x, this.y = TT.y, this.z = TT.z, this.w = TT.w, this
      }
      I5(TT, kT, cT, lT) {
        return this.x = TT, this.y = kT, this.z = cT, this.w = lT, this
      }
      set(TT, kT, cT, lT) {
        return this.I5(TT, kT, cT, lT)
      }
      Xs(TT) {
        return this.x = this.y = this.z = this.w = TT, this
      }
      dot(TT) {
        return this._x * TT.x + this._y * TT.y + this._z * TT.z + this._w * TT.w
      }
      static FromArray(TT, kT) {
        return kT || (kT = 0), new jT(TT[kT], TT[kT + 1], TT[kT + 2], TT[kT + 3])
      }
      static FromArrayToRef(TT, kT, cT) {
        return cT.x = TT[kT], cT.y = TT[kT + 1], cT.z = TT[kT + 2], cT.w = TT[kT + 3], cT
      }
      static FromFloatArrayToRef(TT, kT, cT) {
        return jT.FromArrayToRef(TT, kT, cT), cT
      }
      static FromFloatsToRef(TT, kT, cT, lT, MT) {
        return MT.x = TT, MT.y = kT, MT.z = cT, MT.w = lT, MT
      }
      static Zero() {
        return new jT(0, 0, 0, 0)
      }
      static One() {
        return new jT(1, 1, 1, 1)
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new jT((0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        return cT.x = (0, yT.RandomRange)(TT, kT), cT.y = (0, yT.RandomRange)(TT, kT), cT.z = (0, yT.RandomRange)(TT, kT), cT.w = (0, yT.RandomRange)(TT, kT), cT
      }
      static Clamp(TT, kT, cT) {
        return jT.ClampToRef(TT, kT, cT, new jT)
      }
      static ClampToRef(TT, kT, cT, lT) {
        return lT.x = (0, yT.Clamp)(TT.x, kT.x, cT.x), lT.y = (0, yT.Clamp)(TT.y, kT.y, cT.y), lT.z = (0, yT.Clamp)(TT.z, kT.z, cT.z), lT.w = (0, yT.Clamp)(TT.w, kT.w, cT.w), lT
      }
      static CheckExtends(TT, kT, cT) {
        kT.minimizeInPlace(TT), cT.maximizeInPlace(TT)
      }
      static get ZeroReadOnly() {
        return jT._ZeroReadOnly
      }
      static Normalize(TT) {
        return jT.NormalizeToRef(TT, new jT)
      }
      static NormalizeToRef(TT, kT) {
        return TT.normalizeToRef(kT), kT
      }
      static Minimize(TT, kT) {
        const cT = new jT;
        return cT.UkT(TT), cT.minimizeInPlace(kT), cT
      }
      static Maximize(TT, kT) {
        const cT = new jT;
        return cT.UkT(TT), cT.maximizeInPlace(kT), cT
      }
      static Distance(TT, kT) {
        return Math.sqrt(jT.DistanceSquared(TT, kT))
      }
      static DistanceSquared(TT, kT) {
        const cT = TT.x - kT.x,
          lT = TT.y - kT.y,
          MT = TT.z - kT.z,
          KT = TT.w - kT.w;
        return cT * cT + lT * lT + MT * MT + KT * KT
      }
      static Center(TT, kT) {
        return jT.CenterToRef(TT, kT, new jT)
      }
      static CenterToRef(TT, kT, cT) {
        return cT.x = (TT.x + kT.x) / 2, cT.y = (TT.y + kT.y) / 2, cT.z = (TT.z + kT.z) / 2, cT.w = (TT.w + kT.w) / 2, cT
      }
      static TransformCoordinates(TT, kT) {
        return jT.TransformCoordinatesToRef(TT, kT, new jT)
      }
      static TransformCoordinatesToRef(TT, kT, cT) {
        return jT.TransformCoordinatesFromFloatsToRef(TT._x, TT._y, TT._z, kT, cT), cT
      }
      static TransformCoordinatesFromFloatsToRef(TT, kT, cT, lT, MT) {
        const KT = lT.m,
          OT = TT * KT[0] + kT * KT[4] + cT * KT[8] + KT[12],
          yT = TT * KT[1] + kT * KT[5] + cT * KT[9] + KT[13],
          fT = TT * KT[2] + kT * KT[6] + cT * KT[10] + KT[14],
          xT = TT * KT[3] + kT * KT[7] + cT * KT[11] + KT[15];
        return MT.x = OT, MT.y = yT, MT.z = fT, MT.w = xT, MT
      }
      static TransformNormal(TT, kT) {
        return jT.TransformNormalToRef(TT, kT, new jT)
      }
      static TransformNormalToRef(TT, kT, cT) {
        const lT = kT.m,
          MT = TT.x * lT[0] + TT.y * lT[4] + TT.z * lT[8],
          KT = TT.x * lT[1] + TT.y * lT[5] + TT.z * lT[9],
          OT = TT.x * lT[2] + TT.y * lT[6] + TT.z * lT[10];
        return cT.x = MT, cT.y = KT, cT.z = OT, cT.w = TT.w, cT
      }
      static TransformNormalFromFloatsToRef(TT, kT, cT, lT, MT, KT) {
        const OT = MT.m;
        return KT.x = TT * OT[0] + kT * OT[4] + cT * OT[8], KT.y = TT * OT[1] + kT * OT[5] + cT * OT[9], KT.z = TT * OT[2] + kT * OT[6] + cT * OT[10], KT.w = lT, KT
      }
      static FromVector3(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new jT(TT._x, TT._y, TT._z, kT)
      }
      static Dot(TT, kT) {
        return TT.x * kT.x + TT.y * kT.y + TT.z * kT.z + TT.w * kT.w
      }
    }
    jT._V8PerformanceHack = new jT(.5, .5, .5, .5), jT._ZeroReadOnly = jT.Zero();
    class vT {
      get x() {
        return this._x
      }
      set x(TT) {
        this._x = TT, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(TT) {
        this._y = TT, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(TT) {
        this._z = TT, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(TT) {
        this._w = TT, this._isDirty = !0
      }
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = TT, this._y = kT, this._z = cT, this._w = lT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let TT = IT(this._x);
        return TT = 397 * TT ^ IT(this._y), TT = 397 * TT ^ IT(this._z), TT = 397 * TT ^ IT(this._w), TT
      }
      acT() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[kT] = this._x, TT[kT + 1] = this._y, TT[kT + 2] = this._z, TT[kT + 3] = this._w, this
      }
      xkT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return vT.FromArrayToRef(TT, kT, this)
      }
      equals(TT) {
        return TT && this._x === TT._x && this._y === TT._y && this._z === TT._z && this._w === TT._w
      }
      equalsWithEpsilon(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lT.b;
        return TT && (0, yT.WithinEpsilon)(this._x, TT._x, kT) && (0, yT.WithinEpsilon)(this._y, TT._y, kT) && (0, yT.WithinEpsilon)(this._z, TT._z, kT) && (0, yT.WithinEpsilon)(this._w, TT._w, kT)
      }
      isApprox(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lT.b;
        return TT && ((0, yT.WithinEpsilon)(this._x, TT._x, kT) && (0, yT.WithinEpsilon)(this._y, TT._y, kT) && (0, yT.WithinEpsilon)(this._z, TT._z, kT) && (0, yT.WithinEpsilon)(this._w, TT._w, kT) || (0, yT.WithinEpsilon)(this._x, -TT._x, kT) && (0, yT.WithinEpsilon)(this._y, -TT._y, kT) && (0, yT.WithinEpsilon)(this._z, -TT._z, kT) && (0, yT.WithinEpsilon)(this._w, -TT._w, kT))
      }
      clone() {
        return new vT(this._x, this._y, this._z, this._w)
      }
      UkT(TT) {
        return this._x = TT._x, this._y = TT._y, this._z = TT._z, this._w = TT._w, this._isDirty = !0, this
      }
      I5(TT, kT, cT, lT) {
        return this._x = TT, this._y = kT, this._z = cT, this._w = lT, this._isDirty = !0, this
      }
      set(TT, kT, cT, lT) {
        return this.I5(TT, kT, cT, lT)
      }
      Xs(TT) {
        return this.I5(TT, TT, TT, TT)
      }
      add(TT) {
        return new vT(this._x + TT._x, this._y + TT._y, this._z + TT._z, this._w + TT._w)
      }
      addInPlace(TT) {
        return this._x += TT._x, this._y += TT._y, this._z += TT._z, this._w += TT._w, this._isDirty = !0, this
      }
      addToRef(TT, kT) {
        return kT._x = this._x + TT._x, kT._y = this._y + TT._y, kT._z = this._z + TT._z, kT._w = this._w + TT._w, kT._isDirty = !0, kT
      }
      addInPlaceFromFloats(TT, kT, cT, lT) {
        return this._x += TT, this._y += kT, this._z += cT, this._w += lT, this._isDirty = !0, this
      }
      subtractToRef(TT, kT) {
        return kT._x = this._x - TT._x, kT._y = this._y - TT._y, kT._z = this._z - TT._z, kT._w = this._w - TT._w, kT._isDirty = !0, kT
      }
      subtractFromFloats(TT, kT, cT, lT) {
        return this.subtractFromFloatsToRef(TT, kT, cT, lT, new vT)
      }
      subtractFromFloatsToRef(TT, kT, cT, lT, MT) {
        return MT._x = this._x - TT, MT._y = this._y - kT, MT._z = this._z - cT, MT._w = this._w - lT, MT._isDirty = !0, MT
      }
      subtract(TT) {
        return new vT(this._x - TT._x, this._y - TT._y, this._z - TT._z, this._w - TT._w)
      }
      gcT(TT) {
        return this._x -= TT._x, this._y -= TT._y, this._z -= TT._z, this._w -= TT._w, this._isDirty = !0, this
      }
      scale(TT) {
        return new vT(this._x * TT, this._y * TT, this._z * TT, this._w * TT)
      }
      scaleToRef(TT, kT) {
        return kT._x = this._x * TT, kT._y = this._y * TT, kT._z = this._z * TT, kT._w = this._w * TT, kT._isDirty = !0, kT
      }
      scaleInPlace(TT) {
        return this._x *= TT, this._y *= TT, this._z *= TT, this._w *= TT, this._isDirty = !0, this
      }
      scaleAndAddToRef(TT, kT) {
        return kT._x += this._x * TT, kT._y += this._y * TT, kT._z += this._z * TT, kT._w += this._w * TT, kT._isDirty = !0, kT
      }
      multiply(TT) {
        const kT = new vT(0, 0, 0, 1);
        return this.multiplyToRef(TT, kT), kT
      }
      multiplyToRef(TT, kT) {
        const cT = this._x * TT._w + this._y * TT._z - this._z * TT._y + this._w * TT._x,
          lT = -this._x * TT._z + this._y * TT._w + this._z * TT._x + this._w * TT._y,
          MT = this._x * TT._y - this._y * TT._x + this._z * TT._w + this._w * TT._z,
          KT = -this._x * TT._x - this._y * TT._y - this._z * TT._z + this._w * TT._w;
        return kT.I5(cT, lT, MT, KT), kT
      }
      multiplyInPlace(TT) {
        return this.multiplyToRef(TT, this)
      }
      multiplyByFloats(TT, kT, cT, lT) {
        return this._x *= TT, this._y *= kT, this._z *= cT, this._w *= lT, this._isDirty = !0, this
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(TT, kT) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(TT) {
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
      rc() {
        return this.negateToRef(new vT)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(TT) {
        return TT._x = -this._x, TT._y = -this._y, TT._z = -this._z, TT._w = -this._w, TT._isDirty = !0, TT
      }
      qKT(TT, kT, cT, lT) {
        return this._x === TT && this._y === kT && this._z === cT && this._w === lT
      }
      floorToRef(TT) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(TT) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(TT) {
        return TT.I5(-this._x, -this._y, -this._z, this._w), TT
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new vT(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const TT = this.conjugate(),
          kT = this.lengthSquared();
        return 0 == kT || 1 == kT || TT.scaleInPlace(1 / kT), TT
      }
      invertInPlace() {
        this.conjugateInPlace();
        const TT = this.lengthSquared();
        return 0 == TT || 1 == TT || this.scaleInPlace(1 / TT), this
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
      normalizeFromLength(TT) {
        return 0 === TT || 1 === TT ? this : this.scaleInPlace(1 / TT)
      }
      normalizeToNew() {
        const TT = new vT(0, 0, 0, 1);
        return this.normalizeToRef(TT), TT
      }
      normalizeToRef(TT) {
        const kT = this.length();
        return 0 === kT || 1 === kT ? TT.I5(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / kT, TT)
      }
      toEulerAngles() {
        const TT = CT.Zero();
        return this.toEulerAnglesToRef(TT), TT
      }
      toEulerAnglesToRef(TT) {
        const kT = this._z,
          cT = this._x,
          lT = this._y,
          MT = this._w,
          KT = lT * kT - cT * MT,
          OT = .4999999;
        if (KT < -OT) TT._y = 2 * Math.atan2(lT, MT), TT._x = Math.PI / 2, TT._z = 0, TT._isDirty = !0;
        else if (KT > OT) TT._y = 2 * Math.atan2(lT, MT), TT._x = -Math.PI / 2, TT._z = 0, TT._isDirty = !0;
        else {
          const OT = MT * MT,
            yT = kT * kT,
            fT = cT * cT,
            xT = lT * lT;
          TT._z = Math.atan2(2 * (cT * lT + kT * MT), -yT - fT + xT + OT), TT._x = Math.asin(-2 * KT), TT._y = Math.atan2(2 * (kT * cT + lT * MT), yT - fT - xT + OT), TT._isDirty = !0
        }
        return TT
      }
      toAlphaBetaGammaToRef(TT) {
        const kT = this._z,
          cT = this._x,
          lT = this._y,
          MT = this._w,
          KT = Math.sqrt(cT * cT + lT * lT),
          OT = Math.sqrt(kT * kT + MT * MT),
          yT = 2 * Math.atan2(KT, OT),
          fT = 2 * Math.atan2(kT, MT),
          xT = 2 * Math.atan2(lT, cT),
          IT = (fT + xT) / 2,
          AT = (fT - xT) / 2;
        return TT.set(AT, yT, IT), TT
      }
      toRotationMatrix(TT) {
        return tT.FromQuaternionToRef(this, TT), TT
      }
      fromRotationMatrix(TT) {
        return vT.FromRotationMatrixToRef(TT, this), this
      }
      dot(TT) {
        return this._x * TT._x + this._y * TT._y + this._z * TT._z + this._w * TT._w
      }
      toAxisAngle() {
        const TT = CT.Zero();
        return {
          axis: TT,
          angle: this.toAxisAngleToRef(TT)
        }
      }
      toAxisAngleToRef(TT) {
        let kT;
        const cT = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          lT = this._w;
        return cT > 0 ? (kT = 2 * Math.atan2(cT, lT), TT.set(this._x / cT, this._y / cT, this._z / cT)) : (kT = 0, TT.set(1, 0, 0)), kT
      }
      static FromRotationMatrix(TT) {
        const kT = new vT;
        return vT.FromRotationMatrixToRef(TT, kT), kT
      }
      static FromRotationMatrixToRef(TT, kT) {
        const cT = TT.m,
          lT = cT[0],
          MT = cT[4],
          KT = cT[8],
          OT = cT[1],
          yT = cT[5],
          fT = cT[9],
          xT = cT[2],
          IT = cT[6],
          AT = cT[10],
          CT = lT + yT + AT;
        let jT;
        return CT > 0 ? (jT = .5 / Math.sqrt(CT + 1), kT._w = .25 / jT, kT._x = (IT - fT) * jT, kT._y = (KT - xT) * jT, kT._z = (OT - MT) * jT, kT._isDirty = !0) : lT > yT && lT > AT ? (jT = 2 * Math.sqrt(1 + lT - yT - AT), kT._w = (IT - fT) / jT, kT._x = .25 * jT, kT._y = (MT + OT) / jT, kT._z = (KT + xT) / jT, kT._isDirty = !0) : yT > AT ? (jT = 2 * Math.sqrt(1 + yT - lT - AT), kT._w = (KT - xT) / jT, kT._x = (MT + OT) / jT, kT._y = .25 * jT, kT._z = (fT + IT) / jT, kT._isDirty = !0) : (jT = 2 * Math.sqrt(1 + AT - lT - yT), kT._w = (OT - MT) / jT, kT._x = (KT + xT) / jT, kT._y = (fT + IT) / jT, kT._z = .25 * jT, kT._isDirty = !0), kT
      }
      static Dot(TT, kT) {
        return TT._x * kT._x + TT._y * kT._y + TT._z * kT._z + TT._w * kT._w
      }
      static AreClose(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const lT = vT.Dot(TT, kT);
        return 1 - lT * lT <= cT
      }
      static SmoothToRef(TT, kT, cT, lT, MT) {
        let KT = 0 === lT ? 1 : cT / lT;
        return KT = (0, yT.Clamp)(KT, 0, 1), vT.SlerpToRef(TT, kT, KT, MT), MT
      }
      static Zero() {
        return new vT(0, 0, 0, 0)
      }
      static Inverse(TT) {
        return new vT(-TT._x, -TT._y, -TT._z, TT._w)
      }
      static InverseToRef(TT, kT) {
        return kT.set(-TT._x, -TT._y, -TT._z, TT._w), kT
      }
      static Identity() {
        return new vT(0, 0, 0, 1)
      }
      static IsIdentity(TT) {
        return TT && 0 === TT._x && 0 === TT._y && 0 === TT._z && 1 === TT._w
      }
      static RotationAxis(TT, kT) {
        return vT.RotationAxisToRef(TT, kT, new vT)
      }
      static RotationAxisToRef(TT, kT, cT) {
        cT._w = Math.cos(kT / 2);
        const lT = Math.sin(kT / 2) / TT.length();
        return cT._x = TT._x * lT, cT._y = TT._y * lT, cT._z = TT._z * lT, cT._isDirty = !0, cT
      }
      static FromArray(TT, kT) {
        return kT || (kT = 0), new vT(TT[kT], TT[kT + 1], TT[kT + 2], TT[kT + 3])
      }
      static FromArrayToRef(TT, kT, cT) {
        return cT._x = TT[kT], cT._y = TT[kT + 1], cT._z = TT[kT + 2], cT._w = TT[kT + 3], cT._isDirty = !0, cT
      }
      static FromFloatsToRef(TT, kT, cT, lT, MT) {
        return MT.I5(TT, kT, cT, lT), MT
      }
      static FromEulerAngles(TT, kT, cT) {
        const lT = new vT;
        return vT.RotationYawPitchRollToRef(kT, TT, cT, lT), lT
      }
      static FromEulerAnglesToRef(TT, kT, cT, lT) {
        return vT.RotationYawPitchRollToRef(kT, TT, cT, lT), lT
      }
      static FromEulerVector(TT) {
        const kT = new vT;
        return vT.RotationYawPitchRollToRef(TT._y, TT._x, TT._z, kT), kT
      }
      static FromEulerVectorToRef(TT, kT) {
        return vT.RotationYawPitchRollToRef(TT._y, TT._x, TT._z, kT), kT
      }
      static FromUnitVectorsToRef(TT, kT, cT) {
        let MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : lT.b;
        const KT = CT.Dot(TT, kT) + 1;
        return KT < MT ? Math.abs(TT.x) > Math.abs(TT.z) ? cT.set(-TT.y, TT.x, 0, 0) : cT.set(0, -TT.z, TT.y, 0) : (CT.CrossToRef(TT, kT, NT.Fv[0]), cT.set(NT.Fv[0].x, NT.Fv[0].y, NT.Fv[0].z, KT)), cT.normalize()
      }
      static RotationYawPitchRoll(TT, kT, cT) {
        const lT = new vT;
        return vT.RotationYawPitchRollToRef(TT, kT, cT, lT), lT
      }
      static RotationYawPitchRollToRef(TT, kT, cT, lT) {
        const MT = .5 * cT,
          KT = .5 * kT,
          OT = .5 * TT,
          yT = Math.sin(MT),
          fT = Math.cos(MT),
          xT = Math.sin(KT),
          IT = Math.cos(KT),
          AT = Math.sin(OT),
          CT = Math.cos(OT);
        return lT._x = CT * xT * fT + AT * IT * yT, lT._y = AT * IT * fT - CT * xT * yT, lT._z = CT * IT * yT - AT * xT * fT, lT._w = CT * IT * fT + AT * xT * yT, lT._isDirty = !0, lT
      }
      static RotationAlphaBetaGamma(TT, kT, cT) {
        const lT = new vT;
        return vT.RotationAlphaBetaGammaToRef(TT, kT, cT, lT), lT
      }
      static RotationAlphaBetaGammaToRef(TT, kT, cT, lT) {
        const MT = .5 * (cT + TT),
          KT = .5 * (cT - TT),
          OT = .5 * kT;
        return lT._x = Math.cos(KT) * Math.sin(OT), lT._y = Math.sin(KT) * Math.sin(OT), lT._z = Math.sin(MT) * Math.cos(OT), lT._w = Math.cos(MT) * Math.cos(OT), lT._isDirty = !0, lT
      }
      static RotationQuaternionFromAxis(TT, kT, cT) {
        const lT = new vT(0, 0, 0, 0);
        return vT.RotationQuaternionFromAxisToRef(TT, kT, cT, lT), lT
      }
      static RotationQuaternionFromAxisToRef(TT, kT, cT, lT) {
        const MT = hT.Matrix[0];
        return TT = TT.normalizeToRef(hT.Fv[0]), kT = kT.normalizeToRef(hT.Fv[1]), cT = cT.normalizeToRef(hT.Fv[2]), tT.FromXYZAxesToRef(TT, kT, cT, MT), vT.FromRotationMatrixToRef(MT, lT), lT
      }
      static FromLookDirectionLH(TT, kT) {
        const cT = new vT;
        return vT.FromLookDirectionLHToRef(TT, kT, cT), cT
      }
      static FromLookDirectionLHToRef(TT, kT, cT) {
        const lT = hT.Matrix[0];
        return tT.LookDirectionLHToRef(TT, kT, lT), vT.FromRotationMatrixToRef(lT, cT), cT
      }
      static FromLookDirectionRH(TT, kT) {
        const cT = new vT;
        return vT.FromLookDirectionRHToRef(TT, kT, cT), cT
      }
      static FromLookDirectionRHToRef(TT, kT, cT) {
        const lT = hT.Matrix[0];
        return tT.LookDirectionRHToRef(TT, kT, lT), vT.FromRotationMatrixToRef(lT, cT)
      }
      static Slerp(TT, kT, cT) {
        const lT = vT.Identity();
        return vT.SlerpToRef(TT, kT, cT, lT), lT
      }
      static SlerpToRef(TT, kT, cT, lT) {
        let MT, KT, OT = TT._x * kT._x + TT._y * kT._y + TT._z * kT._z + TT._w * kT._w,
          yT = !1;
        if (OT < 0 && (yT = !0, OT = -OT), OT > .999999) KT = 1 - cT, MT = yT ? -cT : cT;
        else {
          const TT = Math.acos(OT),
            kT = 1 / Math.sin(TT);
          KT = Math.sin((1 - cT) * TT) * kT, MT = yT ? -Math.sin(cT * TT) * kT : Math.sin(cT * TT) * kT
        }
        return lT._x = KT * TT._x + MT * kT._x, lT._y = KT * TT._y + MT * kT._y, lT._z = KT * TT._z + MT * kT._z, lT._w = KT * TT._w + MT * kT._w, lT._isDirty = !0, lT
      }
      static Hermite(TT, kT, cT, lT, MT) {
        const KT = MT * MT,
          OT = MT * KT,
          yT = 2 * OT - 3 * KT + 1,
          fT = -2 * OT + 3 * KT,
          xT = OT - 2 * KT + MT,
          IT = OT - KT,
          AT = TT._x * yT + cT._x * fT + kT._x * xT + lT._x * IT,
          CT = TT._y * yT + cT._y * fT + kT._y * xT + lT._y * IT,
          jT = TT._z * yT + cT._z * fT + kT._z * xT + lT._z * IT,
          tT = TT._w * yT + cT._w * fT + kT._w * xT + lT._w * IT;
        return new vT(AT, CT, jT, tT)
      }
      static Hermite1stDerivative(TT, kT, cT, lT, MT) {
        const KT = new vT;
        return this.Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT), KT
      }
      static Hermite1stDerivativeToRef(TT, kT, cT, lT, MT, KT) {
        const OT = MT * MT;
        return KT._x = 6 * (OT - MT) * TT._x + (3 * OT - 4 * MT + 1) * kT._x + 6 * (-OT + MT) * cT._x + (3 * OT - 2 * MT) * lT._x, KT._y = 6 * (OT - MT) * TT._y + (3 * OT - 4 * MT + 1) * kT._y + 6 * (-OT + MT) * cT._y + (3 * OT - 2 * MT) * lT._y, KT._z = 6 * (OT - MT) * TT._z + (3 * OT - 4 * MT + 1) * kT._z + 6 * (-OT + MT) * cT._z + (3 * OT - 2 * MT) * lT._z, KT._w = 6 * (OT - MT) * TT._w + (3 * OT - 4 * MT + 1) * kT._w + 6 * (-OT + MT) * cT._w + (3 * OT - 2 * MT) * lT._w, KT._isDirty = !0, KT
      }
      static Normalize(TT) {
        const kT = vT.Zero();
        return vT.NormalizeToRef(TT, kT), kT
      }
      static NormalizeToRef(TT, kT) {
        return TT.normalizeToRef(kT), kT
      }
      static Clamp(TT, kT, cT) {
        const lT = new vT;
        return vT.ClampToRef(TT, kT, cT, lT), lT
      }
      static ClampToRef(TT, kT, cT, lT) {
        return lT.I5((0, yT.Clamp)(TT.x, kT.x, cT.x), (0, yT.Clamp)(TT.y, kT.y, cT.y), (0, yT.Clamp)(TT.z, kT.z, cT.z), (0, yT.Clamp)(TT.w, kT.w, cT.w))
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new vT((0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT), (0, yT.RandomRange)(TT, kT))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(TT, kT) {
        return Math.sqrt(vT.DistanceSquared(TT, kT))
      }
      static DistanceSquared(TT, kT) {
        const cT = TT.x - kT.x,
          lT = TT.y - kT.y,
          MT = TT.z - kT.z,
          KT = TT.w - kT.w;
        return cT * cT + lT * lT + MT * MT + KT * KT
      }
      static Center(TT, kT) {
        return vT.CenterToRef(TT, kT, vT.Zero())
      }
      static CenterToRef(TT, kT, cT) {
        return cT.I5((TT.x + kT.x) / 2, (TT.y + kT.y) / 2, (TT.z + kT.z) / 2, (TT.w + kT.w) / 2)
      }
    }
    vT._V8PerformanceHack = new vT(.5, .5, .5, .5);
    class tT {
      static get Use64Bits() {
        return KT.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = fT.m._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          lT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = TT, this._isIdentity3x2 = TT || cT, this._isIdentityDirty = !this._isIdentity && kT, this._isIdentity3x2Dirty = !this._isIdentity3x2 && lT
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, KT.d.MatrixTrackPrecisionChange && KT.d.MatrixTrackedMatrices.push(this), this._m = new KT.d.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const TT = this._m;
          this._isIdentity = 1 === TT[0] && 0 === TT[1] && 0 === TT[2] && 0 === TT[3] && 0 === TT[4] && 1 === TT[5] && 0 === TT[6] && 0 === TT[7] && 0 === TT[8] && 0 === TT[9] && 1 === TT[10] && 0 === TT[11] && 0 === TT[12] && 0 === TT[13] && 0 === TT[14] && 1 === TT[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const TT = this._m,
          kT = TT[0],
          cT = TT[1],
          lT = TT[2],
          MT = TT[3],
          KT = TT[4],
          OT = TT[5],
          yT = TT[6],
          fT = TT[7],
          xT = TT[8],
          IT = TT[9],
          AT = TT[10],
          CT = TT[11],
          jT = TT[12],
          vT = TT[13],
          tT = TT[14],
          hT = TT[15],
          NT = AT * hT - tT * CT,
          QT = IT * hT - vT * CT,
          ST = IT * tT - vT * AT,
          DT = xT * hT - jT * CT,
          aT = xT * tT - AT * jT,
          FT = xT * vT - jT * IT;
        return kT * +(OT * NT - yT * QT + fT * ST) + cT * -(KT * NT - yT * DT + fT * aT) + lT * +(KT * QT - OT * DT + fT * FT) + MT * -(KT * ST - OT * aT + yT * FT)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!TT) return this._m;
        const cT = this._m;
        for (let lT = 0; lT < 16; lT++) TT[kT + lT] = cT[lT];
        return this
      }
      acT() {
        return this._m
      }
      xkT(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tT.FromArrayToRef(TT, kT, this)
      }
      I5() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        return tT.FromArrayToRef(kT, 0, this)
      }
      set() {
        const TT = this._m;
        for (let kT = 0; kT < 16; kT++) TT[kT] = kT < 0 || arguments.length <= kT ? void 0 : arguments[kT];
        return this.markAsUpdated(), this
      }
      Xs(TT) {
        const kT = this._m;
        for (let cT = 0; cT < 16; cT++) kT[cT] = TT;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return tT.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(TT) {
        const kT = new tT;
        return this.addToRef(TT, kT), kT
      }
      addToRef(TT, kT) {
        const cT = this._m,
          lT = kT._m,
          MT = TT.m;
        for (let KT = 0; KT < 16; KT++) lT[KT] = cT[KT] + MT[KT];
        return kT.markAsUpdated(), kT
      }
      addToSelf(TT) {
        const kT = this._m,
          cT = TT.m;
        return kT[0] += cT[0], kT[1] += cT[1], kT[2] += cT[2], kT[3] += cT[3], kT[4] += cT[4], kT[5] += cT[5], kT[6] += cT[6], kT[7] += cT[7], kT[8] += cT[8], kT[9] += cT[9], kT[10] += cT[10], kT[11] += cT[11], kT[12] += cT[12], kT[13] += cT[13], kT[14] += cT[14], kT[15] += cT[15], this.markAsUpdated(), this
      }
      addInPlace(TT) {
        const kT = this._m,
          cT = TT.m;
        for (let lT = 0; lT < 16; lT++) kT[lT] += cT[lT];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const TT = this._m;
        for (let kT = 0; kT < 16; kT++) TT[kT] += kT < 0 || arguments.length <= kT ? void 0 : arguments[kT];
        return this.markAsUpdated(), this
      }
      subtract(TT) {
        const kT = this._m,
          cT = TT.m;
        for (let lT = 0; lT < 16; lT++) kT[lT] -= cT[lT];
        return this.markAsUpdated(), this
      }
      subtractToRef(TT, kT) {
        const cT = this._m,
          lT = TT.m,
          MT = kT._m;
        for (let KT = 0; KT < 16; KT++) MT[KT] = cT[KT] - lT[KT];
        return kT.markAsUpdated(), kT
      }
      gcT(TT) {
        const kT = this._m,
          cT = TT.m;
        for (let lT = 0; lT < 16; lT++) kT[lT] -= cT[lT];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        return this.subtractFromFloatsToRef(...kT, new tT)
      }
      subtractFromFloatsToRef() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        const lT = kT.pop(),
          MT = this._m,
          KT = lT._m,
          OT = kT;
        for (let yT = 0; yT < 16; yT++) KT[yT] = MT[yT] - OT[yT];
        return lT.markAsUpdated(), lT
      }
      invertToRef(TT) {
        return !0 === this._isIdentity ? (tT.IdentityToRef(TT), TT) : ((0, fT.h)(this, TT.acT()) ? TT.markAsUpdated() : TT.UkT(this), TT)
      }
      addAtIndex(TT, kT) {
        return this._m[TT] += kT, this.markAsUpdated(), this
      }
      multiplyAtIndex(TT, kT) {
        return this._m[TT] *= kT, this.markAsUpdated(), this
      }
      setTranslationFromFloats(TT, kT, cT) {
        return this._m[12] = TT, this._m[13] = kT, this._m[14] = cT, this.markAsUpdated(), this
      }
      addTranslationFromFloats(TT, kT, cT) {
        return this._m[12] += TT, this._m[13] += kT, this._m[14] += cT, this.markAsUpdated(), this
      }
      setTranslation(TT) {
        return this.setTranslationFromFloats(TT._x, TT._y, TT._z)
      }
      getTranslation() {
        return new CT(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(TT) {
        return TT.x = this._m[12], TT.y = this._m[13], TT.z = this._m[14], TT
      }
      removeRotationAndScaling() {
        const TT = this.m;
        return tT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, TT[12], TT[13], TT[14], TT[15], this), this._updateIdentityStatus(0 === TT[12] && 0 === TT[13] && 0 === TT[14] && 1 === TT[15]), this
      }
      UkT(TT) {
        TT.copyToArray(this._m);
        const kT = TT;
        return this.updateFlag = kT.updateFlag, this._updateIdentityStatus(kT._isIdentity, kT._isIdentityDirty, kT._isIdentity3x2, kT._isIdentity3x2Dirty), this
      }
      copyToArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, fT.e)(this, TT, kT), this
      }
      multiply(TT) {
        const kT = new tT;
        return this.multiplyToRef(TT, kT), kT
      }
      multiplyInPlace(TT) {
        const kT = this._m,
          cT = TT.m;
        for (let lT = 0; lT < 16; lT++) kT[lT] *= cT[lT];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const TT = this._m;
        for (let kT = 0; kT < 16; kT++) TT[kT] *= kT < 0 || arguments.length <= kT ? void 0 : arguments[kT];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var TT = arguments.length, kT = new Array(TT), cT = 0; cT < TT; cT++) kT[cT] = arguments[cT];
        const lT = kT.pop(),
          MT = this._m,
          KT = lT._m,
          OT = kT;
        for (let yT = 0; yT < 16; yT++) KT[yT] = MT[yT] * OT[yT];
        return lT.markAsUpdated(), lT
      }
      multiplyToRef(TT, kT) {
        return this._isIdentity ? (kT.UkT(TT), kT) : TT._isIdentity ? (kT.UkT(this), kT) : (this.multiplyToArray(TT, kT._m, 0), kT.markAsUpdated(), kT)
      }
      multiplyToArray(TT, kT, cT) {
        return (0, fT.o)(this, TT, kT, cT), this
      }
      divide(TT) {
        return this.divideToRef(TT, new tT)
      }
      divideToRef(TT, kT) {
        const cT = this._m,
          lT = TT.m,
          MT = kT._m;
        for (let KT = 0; KT < 16; KT++) MT[KT] = cT[KT] / lT[KT];
        return kT.markAsUpdated(), kT
      }
      divideInPlace(TT) {
        const kT = this._m,
          cT = TT.m;
        for (let lT = 0; lT < 16; lT++) kT[lT] /= cT[lT];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(TT) {
        const kT = this._m,
          cT = TT.m;
        for (let lT = 0; lT < 16; lT++) kT[lT] = Math.min(kT[lT], cT[lT]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const TT = this._m;
        for (let kT = 0; kT < 16; kT++) TT[kT] = Math.min(TT[kT], kT < 0 || arguments.length <= kT ? void 0 : arguments[kT]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(TT) {
        const kT = this._m,
          cT = TT.m;
        for (let lT = 0; lT < 16; lT++) kT[lT] = Math.max(kT[lT], cT[lT]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const TT = this._m;
        for (let kT = 0; kT < 16; kT++) TT[kT] = Math.max(TT[kT], kT < 0 || arguments.length <= kT ? void 0 : arguments[kT]);
        return this.markAsUpdated(), this
      }
      rc() {
        return this.negateToRef(new tT)
      }
      negateInPlace() {
        const TT = this._m;
        for (let kT = 0; kT < 16; kT++) TT[kT] = -TT[kT];
        return this.markAsUpdated(), this
      }
      negateToRef(TT) {
        const kT = this._m,
          cT = TT._m;
        for (let lT = 0; lT < 16; lT++) cT[lT] = -kT[lT];
        return TT.markAsUpdated(), TT
      }
      equals(TT) {
        const kT = TT;
        if (!kT) return !1;
        if ((this._isIdentity || kT._isIdentity) && !this._isIdentityDirty && !kT._isIdentityDirty) return this._isIdentity && kT._isIdentity;
        const cT = this.m,
          lT = kT.m;
        return cT[0] === lT[0] && cT[1] === lT[1] && cT[2] === lT[2] && cT[3] === lT[3] && cT[4] === lT[4] && cT[5] === lT[5] && cT[6] === lT[6] && cT[7] === lT[7] && cT[8] === lT[8] && cT[9] === lT[9] && cT[10] === lT[10] && cT[11] === lT[11] && cT[12] === lT[12] && cT[13] === lT[13] && cT[14] === lT[14] && cT[15] === lT[15]
      }
      equalsWithEpsilon(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = this._m,
          lT = TT.m;
        for (let MT = 0; MT < 16; MT++)
          if (!(0, yT.WithinEpsilon)(cT[MT], lT[MT], kT)) return !1;
        return !0
      }
      qKT() {
        const TT = this._m;
        for (let kT = 0; kT < 16; kT++)
          if (TT[kT] != (kT < 0 || arguments.length <= kT ? void 0 : arguments[kT])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new tT)
      }
      floorToRef(TT) {
        const kT = this._m,
          cT = TT._m;
        for (let lT = 0; lT < 16; lT++) cT[lT] = Math.floor(kT[lT]);
        return TT.markAsUpdated(), TT
      }
      fract() {
        return this.fractToRef(new tT)
      }
      fractToRef(TT) {
        const kT = this._m,
          cT = TT._m;
        for (let lT = 0; lT < 16; lT++) cT[lT] = kT[lT] - Math.floor(kT[lT]);
        return TT.markAsUpdated(), TT
      }
      clone() {
        const TT = new tT;
        return TT.UkT(this), TT
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let TT = IT(this._m[0]);
        for (let kT = 1; kT < 16; kT++) TT = 397 * TT ^ IT(this._m[kT]);
        return TT
      }
      decomposeToTransformNode(TT) {
        return TT.rotationQuaternion = TT.rotationQuaternion || new vT, this.decompose(TT.GA, TT.rotationQuaternion, TT.position)
      }
      decompose(TT, kT, cT, lT) {
        let MT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return cT && cT.Xs(0), TT && TT.Xs(1), kT && kT.I5(0, 0, 0, 1), !0;
        const KT = this._m;
        if (cT && cT.I5(KT[12], KT[13], KT[14]), (TT = TT || hT.Fv[0]).x = Math.sqrt(KT[0] * KT[0] + KT[1] * KT[1] + KT[2] * KT[2]), TT.y = Math.sqrt(KT[4] * KT[4] + KT[5] * KT[5] + KT[6] * KT[6]), TT.z = Math.sqrt(KT[8] * KT[8] + KT[9] * KT[9] + KT[10] * KT[10]), lT) {
          const kT = (MT ? lT.absoluteScaling.x : lT.GA.x) < 0 ? -1 : 1,
            cT = (MT ? lT.absoluteScaling.y : lT.GA.y) < 0 ? -1 : 1,
            KT = (MT ? lT.absoluteScaling.z : lT.GA.z) < 0 ? -1 : 1;
          TT.x *= kT, TT.y *= cT, TT.z *= KT
        } else this.determinant() <= 0 && (TT.y *= -1);
        if (0 === TT._x || 0 === TT._y || 0 === TT._z) return kT && kT.I5(0, 0, 0, 1), !1;
        if (kT) {
          const cT = 1 / TT._x,
            lT = 1 / TT._y,
            MT = 1 / TT._z;
          tT.FromValuesToRef(KT[0] * cT, KT[1] * cT, KT[2] * cT, 0, KT[4] * lT, KT[5] * lT, KT[6] * lT, 0, KT[8] * MT, KT[9] * MT, KT[10] * MT, 0, 0, 0, 0, 1, hT.Matrix[0]), vT.FromRotationMatrixToRef(hT.Matrix[0], kT)
        }
        return !0
      }
      getRow(TT) {
        if (TT < 0 || TT > 3) return null;
        const kT = 4 * TT;
        return new jT(this._m[kT + 0], this._m[kT + 1], this._m[kT + 2], this._m[kT + 3])
      }
      getRowToRef(TT, kT) {
        if (TT >= 0 && TT <= 3) {
          const cT = 4 * TT;
          kT.x = this._m[cT + 0], kT.y = this._m[cT + 1], kT.z = this._m[cT + 2], kT.w = this._m[cT + 3]
        }
        return kT
      }
      setRow(TT, kT) {
        return this.setRowFromFloats(TT, kT.x, kT.y, kT.z, kT.w)
      }
      transpose() {
        const TT = new tT;
        return tT.TransposeToRef(this, TT), TT
      }
      transposeToRef(TT) {
        return tT.TransposeToRef(this, TT), TT
      }
      setRowFromFloats(TT, kT, cT, lT, MT) {
        if (TT < 0 || TT > 3) return this;
        const KT = 4 * TT;
        return this._m[KT + 0] = kT, this._m[KT + 1] = cT, this._m[KT + 2] = lT, this._m[KT + 3] = MT, this.markAsUpdated(), this
      }
      scale(TT) {
        const kT = new tT;
        return this.scaleToRef(TT, kT), kT
      }
      scaleToRef(TT, kT) {
        for (let cT = 0; cT < 16; cT++) kT._m[cT] = this._m[cT] * TT;
        return kT.markAsUpdated(), kT
      }
      scaleAndAddToRef(TT, kT) {
        for (let cT = 0; cT < 16; cT++) kT._m[cT] += this._m[cT] * TT;
        return kT.markAsUpdated(), kT
      }
      scaleInPlace(TT) {
        const kT = this._m;
        for (let cT = 0; cT < 16; cT++) kT[cT] *= TT;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(TT) {
        const kT = hT.Matrix[0];
        this.invertToRef(kT), kT.transposeToRef(TT);
        const cT = TT._m;
        return tT.FromValuesToRef(cT[0], cT[1], cT[2], 0, cT[4], cT[5], cT[6], 0, cT[8], cT[9], cT[10], 0, 0, 0, 0, 1, TT), TT
      }
      getRotationMatrix() {
        const TT = new tT;
        return this.getRotationMatrixToRef(TT), TT
      }
      getRotationMatrixToRef(TT) {
        const kT = hT.Fv[0];
        if (!this.decompose(kT)) return tT.IdentityToRef(TT), TT;
        const cT = this._m,
          lT = 1 / kT._x,
          MT = 1 / kT._y,
          KT = 1 / kT._z;
        return tT.FromValuesToRef(cT[0] * lT, cT[1] * lT, cT[2] * lT, 0, cT[4] * MT, cT[5] * MT, cT[6] * MT, 0, cT[8] * KT, cT[9] * KT, cT[10] * KT, 0, 0, 0, 0, 1, TT), TT
      }
      toggleModelMatrixHandInPlace() {
        const TT = this._m;
        return TT[2] *= -1, TT[6] *= -1, TT[8] *= -1, TT[9] *= -1, TT[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const TT = this._m;
        return TT[8] *= -1, TT[9] *= -1, TT[10] *= -1, TT[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(QT, this), this
      }
      static FromArray(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cT = new tT;
        return tT.FromArrayToRef(TT, kT, cT), cT
      }
      static FromArrayToRef(TT, kT, cT) {
        for (let lT = 0; lT < 16; lT++) cT._m[lT] = TT[lT + kT];
        return cT.markAsUpdated(), cT
      }
      static FromFloat32ArrayToRefScaled(TT, kT, cT, lT) {
        return lT._m[0] = TT[0 + kT] * cT, lT._m[1] = TT[1 + kT] * cT, lT._m[2] = TT[2 + kT] * cT, lT._m[3] = TT[3 + kT] * cT, lT._m[4] = TT[4 + kT] * cT, lT._m[5] = TT[5 + kT] * cT, lT._m[6] = TT[6 + kT] * cT, lT._m[7] = TT[7 + kT] * cT, lT._m[8] = TT[8 + kT] * cT, lT._m[9] = TT[9 + kT] * cT, lT._m[10] = TT[10 + kT] * cT, lT._m[11] = TT[11 + kT] * cT, lT._m[12] = TT[12 + kT] * cT, lT._m[13] = TT[13 + kT] * cT, lT._m[14] = TT[14 + kT] * cT, lT._m[15] = TT[15 + kT] * cT, lT.markAsUpdated(), lT
      }
      static get IdentityReadOnly() {
        return tT._IdentityReadOnly
      }
      static FromValuesToRef(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, tT, hT) {
        const NT = hT._m;
        NT[0] = TT, NT[1] = kT, NT[2] = cT, NT[3] = lT, NT[4] = MT, NT[5] = KT, NT[6] = OT, NT[7] = yT, NT[8] = fT, NT[9] = xT, NT[10] = IT, NT[11] = AT, NT[12] = CT, NT[13] = jT, NT[14] = vT, NT[15] = tT, hT.markAsUpdated()
      }
      static FromValues(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT, AT, CT, jT, vT, hT) {
        const NT = new tT,
          QT = NT._m;
        return QT[0] = TT, QT[1] = kT, QT[2] = cT, QT[3] = lT, QT[4] = MT, QT[5] = KT, QT[6] = OT, QT[7] = yT, QT[8] = fT, QT[9] = xT, QT[10] = IT, QT[11] = AT, QT[12] = CT, QT[13] = jT, QT[14] = vT, QT[15] = hT, NT.markAsUpdated(), NT
      }
      static Compose(TT, kT, cT) {
        const lT = new tT;
        return tT.ComposeToRef(TT, kT, cT, lT), lT
      }
      static ComposeToRef(TT, kT, cT, lT) {
        const MT = lT._m,
          KT = kT._x,
          OT = kT._y,
          yT = kT._z,
          fT = kT._w,
          xT = KT + KT,
          IT = OT + OT,
          AT = yT + yT,
          CT = KT * xT,
          jT = KT * IT,
          vT = KT * AT,
          tT = OT * IT,
          hT = OT * AT,
          NT = yT * AT,
          QT = fT * xT,
          ST = fT * IT,
          DT = fT * AT,
          aT = TT._x,
          FT = TT._y,
          rT = TT._z;
        return MT[0] = (1 - (tT + NT)) * aT, MT[1] = (jT + DT) * aT, MT[2] = (vT - ST) * aT, MT[3] = 0, MT[4] = (jT - DT) * FT, MT[5] = (1 - (CT + NT)) * FT, MT[6] = (hT + QT) * FT, MT[7] = 0, MT[8] = (vT + ST) * rT, MT[9] = (hT - QT) * rT, MT[10] = (1 - (CT + tT)) * rT, MT[11] = 0, MT[12] = cT._x, MT[13] = cT._y, MT[14] = cT._z, MT[15] = 1, lT.markAsUpdated(), lT
      }
      static Identity() {
        const TT = tT.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return TT._updateIdentityStatus(!0), TT
      }
      static IdentityToRef(TT) {
        return tT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, TT), TT._updateIdentityStatus(!0), TT
      }
      static Zero() {
        const TT = tT.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return TT._updateIdentityStatus(!1), TT
      }
      static RotationX(TT) {
        const kT = new tT;
        return tT.RotationXToRef(TT, kT), kT
      }
      static Invert(TT) {
        const kT = new tT;
        return TT.invertToRef(kT), kT
      }
      static RotationXToRef(TT, kT) {
        const cT = Math.sin(TT),
          lT = Math.cos(TT);
        return tT.FromValuesToRef(1, 0, 0, 0, 0, lT, cT, 0, 0, -cT, lT, 0, 0, 0, 0, 1, kT), kT._updateIdentityStatus(1 === lT && 0 === cT), kT
      }
      static RotationY(TT) {
        const kT = new tT;
        return tT.RotationYToRef(TT, kT), kT
      }
      static RotationYToRef(TT, kT) {
        const cT = Math.sin(TT),
          lT = Math.cos(TT);
        return tT.FromValuesToRef(lT, 0, -cT, 0, 0, 1, 0, 0, cT, 0, lT, 0, 0, 0, 0, 1, kT), kT._updateIdentityStatus(1 === lT && 0 === cT), kT
      }
      static RotationZ(TT) {
        const kT = new tT;
        return tT.RotationZToRef(TT, kT), kT
      }
      static RotationZToRef(TT, kT) {
        const cT = Math.sin(TT),
          lT = Math.cos(TT);
        return tT.FromValuesToRef(lT, cT, 0, 0, -cT, lT, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, kT), kT._updateIdentityStatus(1 === lT && 0 === cT), kT
      }
      static RotationAxis(TT, kT) {
        const cT = new tT;
        return tT.RotationAxisToRef(TT, kT, cT), cT
      }
      static RotationAxisToRef(TT, kT, cT) {
        const lT = Math.sin(-kT),
          MT = Math.cos(-kT),
          KT = 1 - MT;
        TT = TT.normalizeToRef(hT.Fv[0]);
        const OT = cT._m;
        return OT[0] = TT._x * TT._x * KT + MT, OT[1] = TT._x * TT._y * KT - TT._z * lT, OT[2] = TT._x * TT._z * KT + TT._y * lT, OT[3] = 0, OT[4] = TT._y * TT._x * KT + TT._z * lT, OT[5] = TT._y * TT._y * KT + MT, OT[6] = TT._y * TT._z * KT - TT._x * lT, OT[7] = 0, OT[8] = TT._z * TT._x * KT - TT._y * lT, OT[9] = TT._z * TT._y * KT + TT._x * lT, OT[10] = TT._z * TT._z * KT + MT, OT[11] = 0, OT[12] = 0, OT[13] = 0, OT[14] = 0, OT[15] = 1, cT.markAsUpdated(), cT
      }
      static RotationAlignToRef(TT, kT, cT) {
        let MT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const KT = CT.Dot(kT, TT),
          OT = cT._m;
        if (KT < -1 + lT.b) OT[0] = -1, OT[1] = 0, OT[2] = 0, OT[3] = 0, OT[4] = 0, OT[5] = MT ? 1 : -1, OT[6] = 0, OT[7] = 0, OT[8] = 0, OT[9] = 0, OT[10] = MT ? -1 : 1, OT[11] = 0;
        else {
          const cT = CT.Cross(kT, TT),
            lT = 1 / (1 + KT);
          OT[0] = cT._x * cT._x * lT + KT, OT[1] = cT._y * cT._x * lT - cT._z, OT[2] = cT._z * cT._x * lT + cT._y, OT[3] = 0, OT[4] = cT._x * cT._y * lT + cT._z, OT[5] = cT._y * cT._y * lT + KT, OT[6] = cT._z * cT._y * lT - cT._x, OT[7] = 0, OT[8] = cT._x * cT._z * lT - cT._y, OT[9] = cT._y * cT._z * lT + cT._x, OT[10] = cT._z * cT._z * lT + KT, OT[11] = 0
        }
        return OT[12] = 0, OT[13] = 0, OT[14] = 0, OT[15] = 1, cT.markAsUpdated(), cT
      }
      static RotationYawPitchRoll(TT, kT, cT) {
        const lT = new tT;
        return tT.RotationYawPitchRollToRef(TT, kT, cT, lT), lT
      }
      static RotationYawPitchRollToRef(TT, kT, cT, lT) {
        return vT.RotationYawPitchRollToRef(TT, kT, cT, hT.Quaternion[0]), hT.Quaternion[0].toRotationMatrix(lT), lT
      }
      static Scaling(TT, kT, cT) {
        const lT = new tT;
        return tT.ScalingToRef(TT, kT, cT, lT), lT
      }
      static ScalingToRef(TT, kT, cT, lT) {
        return tT.FromValuesToRef(TT, 0, 0, 0, 0, kT, 0, 0, 0, 0, cT, 0, 0, 0, 0, 1, lT), lT._updateIdentityStatus(1 === TT && 1 === kT && 1 === cT), lT
      }
      static Translation(TT, kT, cT) {
        const lT = new tT;
        return tT.TranslationToRef(TT, kT, cT, lT), lT
      }
      static TranslationToRef(TT, kT, cT, lT) {
        return tT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, TT, kT, cT, 1, lT), lT._updateIdentityStatus(0 === TT && 0 === kT && 0 === cT), lT
      }
      static Lerp(TT, kT, cT) {
        const lT = new tT;
        return tT.LerpToRef(TT, kT, cT, lT), lT
      }
      static LerpToRef(TT, kT, cT, lT) {
        const MT = lT._m,
          KT = TT.m,
          OT = kT.m;
        for (let yT = 0; yT < 16; yT++) MT[yT] = KT[yT] * (1 - cT) + OT[yT] * cT;
        return lT.markAsUpdated(), lT
      }
      static DecomposeLerp(TT, kT, cT) {
        const lT = new tT;
        return tT.DecomposeLerpToRef(TT, kT, cT, lT), lT
      }
      static DecomposeLerpToRef(TT, kT, cT, lT) {
        const MT = hT.Fv[0],
          KT = hT.Quaternion[0],
          OT = hT.Fv[1];
        TT.decompose(MT, KT, OT);
        const yT = hT.Fv[2],
          fT = hT.Quaternion[1],
          xT = hT.Fv[3];
        kT.decompose(yT, fT, xT);
        const IT = hT.Fv[4];
        CT.LerpToRef(MT, yT, cT, IT);
        const AT = hT.Quaternion[2];
        vT.SlerpToRef(KT, fT, cT, AT);
        const jT = hT.Fv[5];
        return CT.LerpToRef(OT, xT, cT, jT), tT.ComposeToRef(IT, AT, jT, lT), lT
      }
      static LookAtLH(TT, kT, cT) {
        const lT = new tT;
        return tT.LookAtLHToRef(TT, kT, cT, lT), lT
      }
      static LookAtLHToRef(TT, kT, cT, lT) {
        const MT = hT.Fv[0],
          KT = hT.Fv[1],
          OT = hT.Fv[2];
        kT.subtractToRef(TT, OT), OT.normalize(), CT.CrossToRef(cT, OT, MT);
        const yT = MT.lengthSquared();
        0 === yT ? MT.x = 1 : MT.normalizeFromLength(Math.sqrt(yT)), CT.CrossToRef(OT, MT, KT), KT.normalize();
        const fT = -CT.Dot(MT, TT),
          xT = -CT.Dot(KT, TT),
          IT = -CT.Dot(OT, TT);
        return tT.FromValuesToRef(MT._x, KT._x, OT._x, 0, MT._y, KT._y, OT._y, 0, MT._z, KT._z, OT._z, 0, fT, xT, IT, 1, lT), lT
      }
      static LookAtRH(TT, kT, cT) {
        const lT = new tT;
        return tT.LookAtRHToRef(TT, kT, cT, lT), lT
      }
      static LookAtRHToRef(TT, kT, cT, lT) {
        const MT = hT.Fv[0],
          KT = hT.Fv[1],
          OT = hT.Fv[2];
        TT.subtractToRef(kT, OT), OT.normalize(), CT.CrossToRef(cT, OT, MT);
        const yT = MT.lengthSquared();
        0 === yT ? MT.x = 1 : MT.normalizeFromLength(Math.sqrt(yT)), CT.CrossToRef(OT, MT, KT), KT.normalize();
        const fT = -CT.Dot(MT, TT),
          xT = -CT.Dot(KT, TT),
          IT = -CT.Dot(OT, TT);
        return tT.FromValuesToRef(MT._x, KT._x, OT._x, 0, MT._y, KT._y, OT._y, 0, MT._z, KT._z, OT._z, 0, fT, xT, IT, 1, lT), lT
      }
      static LookDirectionLH(TT, kT) {
        const cT = new tT;
        return tT.LookDirectionLHToRef(TT, kT, cT), cT
      }
      static LookDirectionLHToRef(TT, kT, cT) {
        const lT = hT.Fv[0];
        lT.UkT(TT), lT.scaleInPlace(-1);
        const MT = hT.Fv[1];
        return CT.CrossToRef(kT, lT, MT), tT.FromValuesToRef(MT._x, MT._y, MT._z, 0, kT._x, kT._y, kT._z, 0, lT._x, lT._y, lT._z, 0, 0, 0, 0, 1, cT), cT
      }
      static LookDirectionRH(TT, kT) {
        const cT = new tT;
        return tT.LookDirectionRHToRef(TT, kT, cT), cT
      }
      static LookDirectionRHToRef(TT, kT, cT) {
        const lT = hT.Fv[2];
        return CT.CrossToRef(kT, TT, lT), tT.FromValuesToRef(lT._x, lT._y, lT._z, 0, kT._x, kT._y, kT._z, 0, TT._x, TT._y, TT._z, 0, 0, 0, 0, 1, cT), cT
      }
      static OrthoLH(TT, kT, cT, lT, MT) {
        const KT = new tT;
        return tT.OrthoLHToRef(TT, kT, cT, lT, KT, MT), KT
      }
      static OrthoLHToRef(TT, kT, cT, lT, MT, KT) {
        const OT = 2 / TT,
          yT = 2 / kT,
          fT = 2 / (lT - cT),
          xT = -(lT + cT) / (lT - cT);
        return tT.FromValuesToRef(OT, 0, 0, 0, 0, yT, 0, 0, 0, 0, fT, 0, 0, 0, xT, 1, MT), KT && MT.multiplyToRef(QT, MT), MT._updateIdentityStatus(1 === OT && 1 === yT && 1 === fT && 0 === xT), MT
      }
      static OrthoOffCenterLH(TT, kT, cT, lT, MT, KT, OT) {
        const yT = new tT;
        return tT.OrthoOffCenterLHToRef(TT, kT, cT, lT, MT, KT, yT, OT), yT
      }
      static OrthoOffCenterLHToRef(TT, kT, cT, lT, MT, KT, OT, yT) {
        const fT = 2 / (kT - TT),
          xT = 2 / (lT - cT),
          IT = 2 / (KT - MT),
          AT = -(KT + MT) / (KT - MT),
          CT = (TT + kT) / (TT - kT),
          jT = (lT + cT) / (cT - lT);
        return tT.FromValuesToRef(fT, 0, 0, 0, 0, xT, 0, 0, 0, 0, IT, 0, CT, jT, AT, 1, OT), yT && OT.multiplyToRef(QT, OT), OT.markAsUpdated(), OT
      }
      static ObliqueOffCenterLHToRef(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
        const AT = -OT * Math.cos(yT),
          CT = -OT * Math.sin(yT);
        return tT.TranslationToRef(0, 0, -fT, hT.Matrix[1]), tT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, AT, CT, 1, 0, 0, 0, 0, 1, hT.Matrix[0]), hT.Matrix[1].multiplyToRef(hT.Matrix[0], hT.Matrix[0]), tT.TranslationToRef(0, 0, fT, hT.Matrix[1]), hT.Matrix[0].multiplyToRef(hT.Matrix[1], hT.Matrix[0]), tT.OrthoOffCenterLHToRef(TT, kT, cT, lT, MT, KT, xT, IT), hT.Matrix[0].multiplyToRef(xT, xT), xT
      }
      static OrthoOffCenterRH(TT, kT, cT, lT, MT, KT, OT) {
        const yT = new tT;
        return tT.OrthoOffCenterRHToRef(TT, kT, cT, lT, MT, KT, yT, OT), yT
      }
      static OrthoOffCenterRHToRef(TT, kT, cT, lT, MT, KT, OT, yT) {
        return tT.OrthoOffCenterLHToRef(TT, kT, cT, lT, MT, KT, OT, yT), OT._m[10] *= -1, OT
      }
      static ObliqueOffCenterRHToRef(TT, kT, cT, lT, MT, KT, OT, yT, fT, xT, IT) {
        const AT = OT * Math.cos(yT),
          CT = OT * Math.sin(yT);
        return tT.TranslationToRef(0, 0, fT, hT.Matrix[1]), tT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, AT, CT, 1, 0, 0, 0, 0, 1, hT.Matrix[0]), hT.Matrix[1].multiplyToRef(hT.Matrix[0], hT.Matrix[0]), tT.TranslationToRef(0, 0, -fT, hT.Matrix[1]), hT.Matrix[0].multiplyToRef(hT.Matrix[1], hT.Matrix[0]), tT.OrthoOffCenterRHToRef(TT, kT, cT, lT, MT, KT, xT, IT), hT.Matrix[0].multiplyToRef(xT, xT), xT
      }
      static PerspectiveLH(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const OT = new tT,
          yT = 2 * cT / TT,
          fT = 2 * cT / kT,
          xT = (lT + cT) / (lT - cT),
          IT = -2 * lT * cT / (lT - cT),
          AT = Math.tan(KT);
        return tT.FromValuesToRef(yT, 0, 0, 0, 0, fT, 0, AT, 0, 0, xT, 1, 0, 0, IT, 0, OT), MT && OT.multiplyToRef(QT, OT), OT._updateIdentityStatus(!1), OT
      }
      static PerspectiveFovLH(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const yT = new tT;
        return tT.PerspectiveFovLHToRef(TT, kT, cT, lT, yT, !0, MT, KT, OT), yT
      }
      static PerspectiveFovLHToRef(TT, kT, cT, lT, MT) {
        let KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          fT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const xT = cT,
          IT = lT,
          AT = 1 / Math.tan(.5 * TT),
          CT = KT ? AT / kT : AT,
          jT = KT ? AT : AT * kT,
          vT = fT && 0 === xT ? -1 : 0 !== IT ? (IT + xT) / (IT - xT) : 1,
          hT = fT && 0 === xT ? 2 * IT : 0 !== IT ? -2 * IT * xT / (IT - xT) : -2 * xT,
          NT = Math.tan(yT);
        return tT.FromValuesToRef(CT, 0, 0, 0, 0, jT, 0, NT, 0, 0, vT, 1, 0, 0, hT, 0, MT), OT && MT.multiplyToRef(QT, MT), MT._updateIdentityStatus(!1), MT
      }
      static PerspectiveFovReverseLHToRef(TT, kT, cT, lT, MT) {
        let KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const fT = 1 / Math.tan(.5 * TT),
          xT = KT ? fT / kT : fT,
          IT = KT ? fT : fT * kT,
          AT = Math.tan(yT);
        return tT.FromValuesToRef(xT, 0, 0, 0, 0, IT, 0, AT, 0, 0, -cT, 1, 0, 0, 1, 0, MT), OT && MT.multiplyToRef(QT, MT), MT._updateIdentityStatus(!1), MT
      }
      static PerspectiveFovRH(TT, kT, cT, lT, MT) {
        let KT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          OT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const yT = new tT;
        return tT.PerspectiveFovRHToRef(TT, kT, cT, lT, yT, !0, MT, KT, OT), yT
      }
      static PerspectiveFovRHToRef(TT, kT, cT, lT, MT) {
        let KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          fT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const xT = cT,
          IT = lT,
          AT = 1 / Math.tan(.5 * TT),
          CT = KT ? AT / kT : AT,
          jT = KT ? AT : AT * kT,
          vT = fT && 0 === xT ? 1 : 0 !== IT ? -(IT + xT) / (IT - xT) : -1,
          hT = fT && 0 === xT ? 2 * IT : 0 !== IT ? -2 * IT * xT / (IT - xT) : -2 * xT,
          NT = Math.tan(yT);
        return tT.FromValuesToRef(CT, 0, 0, 0, 0, jT, 0, NT, 0, 0, vT, -1, 0, 0, hT, 0, MT), OT && MT.multiplyToRef(QT, MT), MT._updateIdentityStatus(!1), MT
      }
      static PerspectiveFovReverseRHToRef(TT, kT, cT, lT, MT) {
        let KT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          OT = arguments.length > 6 ? arguments[6] : void 0,
          yT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const fT = 1 / Math.tan(.5 * TT),
          xT = KT ? fT / kT : fT,
          IT = KT ? fT : fT * kT,
          AT = Math.tan(yT);
        return tT.FromValuesToRef(xT, 0, 0, 0, 0, IT, 0, AT, 0, 0, -cT, -1, 0, 0, -1, 0, MT), OT && MT.multiplyToRef(QT, MT), MT._updateIdentityStatus(!1), MT
      }
      static GetFinalMatrix(TT, kT, cT, lT, MT, KT) {
        const OT = TT.width,
          yT = TT.height,
          fT = TT.x,
          xT = TT.y,
          IT = tT.FromValues(OT / 2, 0, 0, 0, 0, -yT / 2, 0, 0, 0, 0, KT - MT, 0, fT + OT / 2, yT / 2 + xT, MT, 1),
          AT = new tT;
        return kT.multiplyToRef(cT, AT), AT.multiplyToRef(lT, AT), AT.multiplyToRef(IT, AT)
      }
      static GetAsMatrix2x2(TT) {
        const kT = TT.m,
          cT = [kT[0], kT[1], kT[4], kT[5]];
        return KT.d.MatrixUse64Bits ? cT : new Float32Array(cT)
      }
      static GetAsMatrix3x3(TT) {
        const kT = TT.m,
          cT = [kT[0], kT[1], kT[2], kT[4], kT[5], kT[6], kT[8], kT[9], kT[10]];
        return KT.d.MatrixUse64Bits ? cT : new Float32Array(cT)
      }
      static Transpose(TT) {
        const kT = new tT;
        return tT.TransposeToRef(TT, kT), kT
      }
      static TransposeToRef(TT, kT) {
        const cT = TT.m,
          lT = cT[0],
          MT = cT[4],
          KT = cT[8],
          OT = cT[12],
          yT = cT[1],
          fT = cT[5],
          xT = cT[9],
          IT = cT[13],
          AT = cT[2],
          CT = cT[6],
          jT = cT[10],
          vT = cT[14],
          tT = cT[3],
          hT = cT[7],
          NT = cT[11],
          QT = cT[15],
          ST = kT._m;
        return ST[0] = lT, ST[1] = MT, ST[2] = KT, ST[3] = OT, ST[4] = yT, ST[5] = fT, ST[6] = xT, ST[7] = IT, ST[8] = AT, ST[9] = CT, ST[10] = jT, ST[11] = vT, ST[12] = tT, ST[13] = hT, ST[14] = NT, ST[15] = QT, kT.markAsUpdated(), kT._updateIdentityStatus(TT._isIdentity, TT._isIdentityDirty), kT
      }
      static Reflection(TT) {
        const kT = new tT;
        return tT.ReflectionToRef(TT, kT), kT
      }
      static ReflectionToRef(TT, kT) {
        TT.normalize();
        const cT = TT.normal.x,
          lT = TT.normal.y,
          MT = TT.normal.z,
          KT = -2 * cT,
          OT = -2 * lT,
          yT = -2 * MT;
        return tT.FromValuesToRef(KT * cT + 1, OT * cT, yT * cT, 0, KT * lT, OT * lT + 1, yT * lT, 0, KT * MT, OT * MT, yT * MT + 1, 0, KT * TT.d, OT * TT.d, yT * TT.d, 1, kT), kT
      }
      static FromXYZAxesToRef(TT, kT, cT, lT) {
        return tT.FromValuesToRef(TT._x, TT._y, TT._z, 0, kT._x, kT._y, kT._z, 0, cT._x, cT._y, cT._z, 0, 0, 0, 0, 1, lT), lT
      }
      static FromQuaternionToRef(TT, kT) {
        const cT = TT._x * TT._x,
          lT = TT._y * TT._y,
          MT = TT._z * TT._z,
          KT = TT._x * TT._y,
          OT = TT._z * TT._w,
          yT = TT._z * TT._x,
          fT = TT._y * TT._w,
          xT = TT._y * TT._z,
          IT = TT._x * TT._w;
        return kT._m[0] = 1 - 2 * (lT + MT), kT._m[1] = 2 * (KT + OT), kT._m[2] = 2 * (yT - fT), kT._m[3] = 0, kT._m[4] = 2 * (KT - OT), kT._m[5] = 1 - 2 * (MT + cT), kT._m[6] = 2 * (xT + IT), kT._m[7] = 0, kT._m[8] = 2 * (yT + fT), kT._m[9] = 2 * (xT - IT), kT._m[10] = 1 - 2 * (lT + cT), kT._m[11] = 0, kT._m[12] = 0, kT._m[13] = 0, kT._m[14] = 0, kT._m[15] = 1, kT.markAsUpdated(), kT
      }
    }
    tT._IdentityReadOnly = tT.Identity();
    class hT {}
    hT.Fv = (0, MT.f)(11, CT.Zero), hT.Matrix = (0, MT.f)(2, tT.Identity), hT.Quaternion = (0, MT.f)(3, vT.Zero);
    class NT {}
    NT.Vector2 = (0, MT.f)(3, AT.Zero), NT.Fv = (0, MT.f)(13, CT.Zero), NT.Vector4 = (0, MT.f)(3, jT.Zero), NT.Quaternion = (0, MT.f)(3, vT.Zero), NT.Matrix = (0, MT.f)(8, tT.Identity);
    const QT = tT.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let ST = !1;

    function DT() {
      ST || (ST = !0, Object.defineProperties(AT.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(CT.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(jT.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(vT.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(tT.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, xT.g)("BABYLON.Vector2", AT), (0, xT.g)("BABYLON.Vector3", CT), (0, xT.g)("BABYLON.Vector4", jT), (0, xT.g)("BABYLON.Matrix", tT))
    }
  },
  36932: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    const lT = "undefined" !== typeof WeakRef;
    class MT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(TT, kT, cT, lT)
      }
      initialize(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = TT, this.skipNextObservers = kT, this.target = cT, this.currentTarget = lT, this
      }
    }
    class KT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = TT, this.mask = kT, this.scope = cT, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(TT)
      }
    }
    class OT {
      static FromPromise(TT, kT) {
        const cT = new OT;
        return TT.then((TT => {
          cT.notifyObservers(TT)
        })).catch((TT => {
          if (!kT) throw TT;
          kT.notifyObservers(TT)
        })), cT
      }
      get observers() {
        return this._observers
      }
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = kT, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new MT(0), TT && (this._onObserverAdded = TT)
      }
      add(TT) {
        let kT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!TT) return null;
        const MT = new KT(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        MT.unregisterOnNextCall = cT, kT ? this._observers.unshift(MT) : this._observers.push(MT), this._onObserverAdded && this._onObserverAdded(MT), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(MT, this._lastNotifiedValue);
        const OT = lT ? new WeakRef(this) : {
          deref: () => this
        };
        return MT._remove = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const kT = OT.deref();
          kT && (TT ? kT.remove(MT) : kT._remove(MT))
        }, MT
      }
      addOnce(TT) {
        return this.add(TT, void 0, void 0, void 0, !0)
      }
      remove(TT) {
        if (!TT) return !1;
        TT._remove = null;
        return -1 !== this._observers.indexOf(TT) && (this._deferUnregister(TT), !0)
      }
      removeCallback(TT, kT) {
        for (let cT = 0; cT < this._observers.length; cT++) {
          const lT = this._observers[cT];
          if (!lT._willBeUnregistered && (lT.callback === TT && (!kT || kT === lT.scope))) return this._deferUnregister(lT), !0
        }
        return !1
      }
      _deferUnregister(TT) {
        TT._willBeUnregistered || (this._numObserversMarkedAsDeleted++, TT.unregisterOnNextCall = !1, TT._willBeUnregistered = !0, setTimeout((() => {
          this._remove(TT)
        }), 0))
      }
      _remove(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT) return !1;
        const cT = this._observers.indexOf(TT);
        return -1 !== cT && (kT && this._numObserversMarkedAsDeleted--, this._observers.splice(cT, 1), !0)
      }
      makeObserverTopPriority(TT) {
        this._remove(TT, !1), this._observers.unshift(TT)
      }
      makeObserverBottomPriority(TT) {
        this._remove(TT, !1), this._observers.push(TT)
      }
      notifyObservers(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = TT), !this._observers.length) return !0;
        const KT = this._eventState;
        KT.mask = kT, KT.target = cT, KT.currentTarget = lT, KT.skipNextObservers = !1, KT.lastReturnValue = TT, KT.userInfo = MT;
        for (const OT of this._observers)
          if (!OT._willBeUnregistered && (OT.mask & kT && (OT.unregisterOnNextCall && this._deferUnregister(OT), OT.scope ? KT.lastReturnValue = OT.callback.apply(OT.scope, [TT, KT]) : KT.lastReturnValue = OT.callback(TT, KT)), KT.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = kT), TT._willBeUnregistered) return;
        const lT = this._eventState;
        lT.mask = cT, lT.skipNextObservers = !1, TT.unregisterOnNextCall && this._deferUnregister(TT), TT.callback(kT, lT)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const TT = this._observers.pop();
          TT && (TT._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const TT = new OT;
        return TT._observers = this._observers.slice(0), TT
      }
      hasSpecificMask() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const kT of this._observers)
          if (kT.mask & TT || kT.mask === TT) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);