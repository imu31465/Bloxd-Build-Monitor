export const id = 222;
export const ids = [222];
export const modules = {
  36146: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT
    });
    var iT = IT(36149);
    class zT {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    zT.Instances = [], zT.OnEnginesDisposedObservable = new iT.d, zT._LastCreatedScene = null, zT.UseFallbackTexture = !0, zT.FallbackTexture = ""
  },
  36137: (TT, oT, IT) => {
    IT.d(oT, {
      c: () => iT
    });
    class iT {
      static SetMatrixPrecision(TT) {
        if (iT.MatrixTrackPrecisionChange = !1, TT && !iT.MatrixUse64Bits && iT.MatrixTrackedMatrices)
          for (let oT = 0; oT < iT.MatrixTrackedMatrices.length; ++oT) {
            const TT = iT.MatrixTrackedMatrices[oT],
              IT = TT._m;
            TT._m = new Array(16);
            for (let oT = 0; oT < 16; ++oT) TT._m[oT] = IT[oT]
          }
        iT.MatrixUse64Bits = TT, iT.MatrixCurrentType = iT.MatrixUse64Bits ? Array : Float32Array, iT.MatrixTrackedMatrices = null
      }
    }
    iT.MatrixUse64Bits = !1, iT.MatrixTrackPrecisionChange = !0, iT.MatrixCurrentType = Float32Array, iT.MatrixTrackedMatrices = []
  },
  36159: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => XT,
      g: () => FT,
      i: () => BT,
      m: () => iT,
      o: () => kT,
      p: () => WT
    });
    class iT {}

    function zT(TT) {
      TT.updateFlag = iT._UpdateFlagSeed++
    }

    function kT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const zT = TT.bIT(),
        kT = oT.bIT(),
        WT = zT[0],
        XT = zT[1],
        BT = zT[2],
        FT = zT[3],
        ST = zT[4],
        DT = zT[5],
        LT = zT[6],
        xT = zT[7],
        cT = zT[8],
        KT = zT[9],
        MT = zT[10],
        rT = zT[11],
        AT = zT[12],
        gT = zT[13],
        hT = zT[14],
        wT = zT[15],
        mT = kT[0],
        eT = kT[1],
        RT = kT[2],
        uT = kT[3],
        vT = kT[4],
        ET = kT[5],
        fT = kT[6],
        CT = kT[7],
        jT = kT[8],
        JT = kT[9],
        UT = kT[10],
        aT = kT[11],
        YT = kT[12],
        QT = kT[13],
        OT = kT[14],
        HT = kT[15];
      IT[iT] = WT * mT + XT * vT + BT * jT + FT * YT, IT[iT + 1] = WT * eT + XT * ET + BT * JT + FT * QT, IT[iT + 2] = WT * RT + XT * fT + BT * UT + FT * OT, IT[iT + 3] = WT * uT + XT * CT + BT * aT + FT * HT, IT[iT + 4] = ST * mT + DT * vT + LT * jT + xT * YT, IT[iT + 5] = ST * eT + DT * ET + LT * JT + xT * QT, IT[iT + 6] = ST * RT + DT * fT + LT * UT + xT * OT, IT[iT + 7] = ST * uT + DT * CT + LT * aT + xT * HT, IT[iT + 8] = cT * mT + KT * vT + MT * jT + rT * YT, IT[iT + 9] = cT * eT + KT * ET + MT * JT + rT * QT, IT[iT + 10] = cT * RT + KT * fT + MT * UT + rT * OT, IT[iT + 11] = cT * uT + KT * CT + MT * aT + rT * HT, IT[iT + 12] = AT * mT + gT * vT + hT * jT + wT * YT, IT[iT + 13] = AT * eT + gT * ET + hT * JT + wT * QT, IT[iT + 14] = AT * RT + gT * fT + hT * UT + wT * OT, IT[iT + 15] = AT * uT + gT * CT + hT * aT + wT * HT
    }

    function WT(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      kT(TT, oT, IT.bIT(), iT), zT(IT)
    }

    function XT(TT, oT) {
      let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const iT = TT.bIT();
      oT[IT] = iT[0], oT[IT + 1] = iT[1], oT[IT + 2] = iT[2], oT[IT + 3] = iT[3], oT[IT + 4] = iT[4], oT[IT + 5] = iT[5], oT[IT + 6] = iT[6], oT[IT + 7] = iT[7], oT[IT + 8] = iT[8], oT[IT + 9] = iT[9], oT[IT + 10] = iT[10], oT[IT + 11] = iT[11], oT[IT + 12] = iT[12], oT[IT + 13] = iT[13], oT[IT + 14] = iT[14], oT[IT + 15] = iT[15]
    }

    function BT(TT, oT) {
      const IT = FT(TT, oT.bIT());
      return IT && zT(oT), IT
    }

    function FT(TT, oT) {
      const IT = TT.bIT(),
        iT = IT[0],
        zT = IT[1],
        kT = IT[2],
        WT = IT[3],
        XT = IT[4],
        BT = IT[5],
        FT = IT[6],
        ST = IT[7],
        DT = IT[8],
        LT = IT[9],
        xT = IT[10],
        cT = IT[11],
        KT = IT[12],
        MT = IT[13],
        rT = IT[14],
        AT = IT[15],
        gT = xT * AT - rT * cT,
        hT = LT * AT - MT * cT,
        wT = LT * rT - MT * xT,
        mT = DT * AT - KT * cT,
        eT = DT * rT - xT * KT,
        RT = DT * MT - KT * LT,
        uT = +(BT * gT - FT * hT + ST * wT),
        vT = -(XT * gT - FT * mT + ST * eT),
        ET = +(XT * hT - BT * mT + ST * RT),
        fT = -(XT * wT - BT * eT + FT * RT),
        CT = iT * uT + zT * vT + kT * ET + WT * fT;
      if (0 === CT) return !1;
      const jT = 1 / CT,
        JT = FT * AT - rT * ST,
        UT = BT * AT - MT * ST,
        aT = BT * rT - MT * FT,
        YT = XT * AT - KT * ST,
        QT = XT * rT - KT * FT,
        OT = XT * MT - KT * BT,
        HT = FT * cT - xT * ST,
        nT = BT * cT - LT * ST,
        qT = BT * xT - LT * FT,
        ZT = XT * cT - DT * ST,
        lT = XT * xT - DT * FT,
        sT = XT * LT - DT * BT,
        tT = -(zT * gT - kT * hT + WT * wT),
        GT = +(iT * gT - kT * mT + WT * eT),
        pT = -(iT * hT - zT * mT + WT * RT),
        bT = +(iT * wT - zT * eT + kT * RT),
        yT = +(zT * JT - kT * UT + WT * aT),
        NT = -(iT * JT - kT * YT + WT * QT),
        PT = +(iT * UT - zT * YT + WT * OT),
        dT = -(iT * aT - zT * QT + kT * OT),
        VT = -(zT * HT - kT * nT + WT * qT),
        To = +(iT * HT - kT * ZT + WT * lT),
        oo = -(iT * nT - zT * ZT + WT * sT),
        Io = +(iT * qT - zT * lT + kT * sT);
      return oT[0] = uT * jT, oT[1] = tT * jT, oT[2] = yT * jT, oT[3] = VT * jT, oT[4] = vT * jT, oT[5] = GT * jT, oT[6] = NT * jT, oT[7] = To * jT, oT[8] = ET * jT, oT[9] = pT * jT, oT[10] = PT * jT, oT[11] = oo * jT, oT[12] = fT * jT, oT[13] = bT * jT, oT[14] = dT * jT, oT[15] = Io * jT, !0
    }
    iT._UpdateFlagSeed = 0
  },
  36118: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => KT,
      c: () => cT,
      g: () => hT,
      i: () => rT,
      j: () => DT,
      m: () => LT,
      n: () => xT
    });
    var iT = IT(36125),
      zT = IT(36134),
      kT = IT(36137),
      WT = IT(36146),
      XT = IT(36156),
      BT = IT(36159),
      FT = IT(36166);
    const ST = TT => parseInt(TT.toString().replace(/\W/g, ""));
    class DT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = TT, this.y = oT
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let TT = ST(this.x);
        return TT = 397 * TT ^ ST(this.y), TT
      }
      toArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[oT] = this.x, TT[oT + 1] = this.y, this
      }
      joT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DT.FromArrayToRef(TT, oT, this), this
      }
      bIT() {
        return [this.x, this.y]
      }
      SIT(TT) {
        return this.x = TT.x, this.y = TT.y, this
      }
      S_(TT, oT) {
        return this.x = TT, this.y = oT, this
      }
      set(TT, oT) {
        return this.S_(TT, oT)
      }
      W8(TT) {
        return this.S_(TT, TT)
      }
      add(TT) {
        return new DT(this.x + TT.x, this.y + TT.y)
      }
      addToRef(TT, oT) {
        return oT.x = this.x + TT.x, oT.y = this.y + TT.y, oT
      }
      addInPlace(TT) {
        return this.x += TT.x, this.y += TT.y, this
      }
      addInPlaceFromFloats(TT, oT) {
        return this.x += TT, this.y += oT, this
      }
      addVector3(TT) {
        return new DT(this.x + TT.x, this.y + TT.y)
      }
      subtract(TT) {
        return new DT(this.x - TT.x, this.y - TT.y)
      }
      subtractToRef(TT, oT) {
        return oT.x = this.x - TT.x, oT.y = this.y - TT.y, oT
      }
      SiT(TT) {
        return this.x -= TT.x, this.y -= TT.y, this
      }
      multiplyInPlace(TT) {
        return this.x *= TT.x, this.y *= TT.y, this
      }
      multiply(TT) {
        return new DT(this.x * TT.x, this.y * TT.y)
      }
      multiplyToRef(TT, oT) {
        return oT.x = this.x * TT.x, oT.y = this.y * TT.y, oT
      }
      multiplyByFloats(TT, oT) {
        return new DT(this.x * TT, this.y * oT)
      }
      divide(TT) {
        return new DT(this.x / TT.x, this.y / TT.y)
      }
      divideToRef(TT, oT) {
        return oT.x = this.x / TT.x, oT.y = this.y / TT.y, oT
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
      minimizeInPlaceFromFloats(TT, oT) {
        return this.x = Math.min(TT, this.x), this.y = Math.min(oT, this.y), this
      }
      maximizeInPlaceFromFloats(TT, oT) {
        return this.x = Math.max(TT, this.x), this.y = Math.max(oT, this.y), this
      }
      subtractFromFloats(TT, oT) {
        return new DT(this.x - TT, this.y - oT)
      }
      subtractFromFloatsToRef(TT, oT, IT) {
        return IT.x = this.x - TT, IT.y = this.y - oT, IT
      }
      ri() {
        return new DT(-this.x, -this.y)
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
        return new DT(this.x * TT, this.y * TT)
      }
      scaleToRef(TT, oT) {
        return oT.x = this.x * TT, oT.y = this.y * TT, oT
      }
      scaleAndAddToRef(TT, oT) {
        return oT.x += this.x * TT, oT.y += this.y * TT, oT
      }
      equals(TT) {
        return TT && this.x === TT.x && this.y === TT.y
      }
      equalsWithEpsilon(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iT.d;
        return TT && (0, XT.WithinEpsilon)(this.x, TT.x, oT) && (0, XT.WithinEpsilon)(this.y, TT.y, oT)
      }
      eWT(TT, oT) {
        return this.x === TT && this.y === oT
      }
      floor() {
        return new DT(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(TT) {
        return TT.x = Math.floor(this.x), TT.y = Math.floor(this.y), TT
      }
      fract() {
        return new DT(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(TT) {
        return TT.x = this.x - Math.floor(this.x), TT.y = this.y - Math.floor(this.y), TT
      }
      rotate(TT) {
        return this.rotateToRef(TT, new DT)
      }
      rotateToRef(TT, oT) {
        const IT = Math.cos(TT),
          iT = Math.sin(TT);
        return oT.x = IT * this.x - iT * this.y, oT.y = iT * this.x + IT * this.y, oT
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
        const TT = new DT;
        return this.normalizeToRef(TT), TT
      }
      normalizeToRef(TT) {
        const oT = this.length();
        return 0 === oT || 1 === oT ? (TT.x = this.x, TT.y = this.y, TT) : this.scaleToRef(1 / oT, TT)
      }
      clone() {
        return new DT(this.x, this.y)
      }
      dot(TT) {
        return this.x * TT.x + this.y * TT.y
      }
      static Zero() {
        return new DT(0, 0)
      }
      static One() {
        return new DT(1, 1)
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new DT((0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).S_((0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT))
      }
      static get ZeroReadOnly() {
        return DT._ZeroReadOnly
      }
      static FromArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new DT(TT[oT], TT[oT + 1])
      }
      static FromArrayToRef(TT, oT, IT) {
        return IT.x = TT[oT], IT.y = TT[oT + 1], IT
      }
      static FromFloatsToRef(TT, oT, IT) {
        return IT.S_(TT, oT), IT
      }
      static CatmullRom(TT, oT, IT, iT, zT) {
        const kT = zT * zT,
          WT = zT * kT,
          XT = .5 * (2 * oT.x + (-TT.x + IT.x) * zT + (2 * TT.x - 5 * oT.x + 4 * IT.x - iT.x) * kT + (-TT.x + 3 * oT.x - 3 * IT.x + iT.x) * WT),
          BT = .5 * (2 * oT.y + (-TT.y + IT.y) * zT + (2 * TT.y - 5 * oT.y + 4 * IT.y - iT.y) * kT + (-TT.y + 3 * oT.y - 3 * IT.y + iT.y) * WT);
        return new DT(XT, BT)
      }
      static ClampToRef(TT, oT, IT, iT) {
        return iT.x = (0, XT.Clamp)(TT.x, oT.x, IT.x), iT.y = (0, XT.Clamp)(TT.y, oT.y, IT.y), iT
      }
      static Clamp(TT, oT, IT) {
        const iT = (0, XT.Clamp)(TT.x, oT.x, IT.x),
          zT = (0, XT.Clamp)(TT.y, oT.y, IT.y);
        return new DT(iT, zT)
      }
      static Hermite(TT, oT, IT, iT, zT) {
        const kT = zT * zT,
          WT = zT * kT,
          XT = 2 * WT - 3 * kT + 1,
          BT = -2 * WT + 3 * kT,
          FT = WT - 2 * kT + zT,
          ST = WT - kT,
          LT = TT.x * XT + IT.x * BT + oT.x * FT + iT.x * ST,
          xT = TT.y * XT + IT.y * BT + oT.y * FT + iT.y * ST;
        return new DT(LT, xT)
      }
      static Hermite1stDerivative(TT, oT, IT, iT, zT) {
        return this.Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, new DT)
      }
      static Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT) {
        const WT = zT * zT;
        return kT.x = 6 * (WT - zT) * TT.x + (3 * WT - 4 * zT + 1) * oT.x + 6 * (-WT + zT) * IT.x + (3 * WT - 2 * zT) * iT.x, kT.y = 6 * (WT - zT) * TT.y + (3 * WT - 4 * zT + 1) * oT.y + 6 * (-WT + zT) * IT.y + (3 * WT - 2 * zT) * iT.y, kT
      }
      static Lerp(TT, oT, IT) {
        return DT.LerpToRef(TT, oT, IT, new DT)
      }
      static LerpToRef(TT, oT, IT, iT) {
        return iT.x = TT.x + (oT.x - TT.x) * IT, iT.y = TT.y + (oT.y - TT.y) * IT, iT
      }
      static Dot(TT, oT) {
        return TT.x * oT.x + TT.y * oT.y
      }
      static Normalize(TT) {
        return DT.NormalizeToRef(TT, new DT)
      }
      static NormalizeToRef(TT, oT) {
        return TT.normalizeToRef(oT), oT
      }
      static Minimize(TT, oT) {
        const IT = TT.x < oT.x ? TT.x : oT.x,
          iT = TT.y < oT.y ? TT.y : oT.y;
        return new DT(IT, iT)
      }
      static Maximize(TT, oT) {
        const IT = TT.x > oT.x ? TT.x : oT.x,
          iT = TT.y > oT.y ? TT.y : oT.y;
        return new DT(IT, iT)
      }
      static Transform(TT, oT) {
        return DT.TransformToRef(TT, oT, new DT)
      }
      static TransformToRef(TT, oT, IT) {
        const iT = oT.m,
          zT = TT.x * iT[0] + TT.y * iT[4] + iT[12],
          kT = TT.x * iT[1] + TT.y * iT[5] + iT[13];
        return IT.x = zT, IT.y = kT, IT
      }
      static PointInTriangle(TT, oT, IT, iT) {
        const zT = .5 * (-IT.y * iT.x + oT.y * (-IT.x + iT.x) + oT.x * (IT.y - iT.y) + IT.x * iT.y),
          kT = zT < 0 ? -1 : 1,
          WT = (oT.y * iT.x - oT.x * iT.y + (iT.y - oT.y) * TT.x + (oT.x - iT.x) * TT.y) * kT,
          XT = (oT.x * IT.y - oT.y * IT.x + (oT.y - IT.y) * TT.x + (IT.x - oT.x) * TT.y) * kT;
        return WT > 0 && XT > 0 && WT + XT < 2 * zT * kT
      }
      static Distance(TT, oT) {
        return Math.sqrt(DT.DistanceSquared(TT, oT))
      }
      static DistanceSquared(TT, oT) {
        const IT = TT.x - oT.x,
          iT = TT.y - oT.y;
        return IT * IT + iT * iT
      }
      static Center(TT, oT) {
        return DT.CenterToRef(TT, oT, new DT)
      }
      static CenterToRef(TT, oT, IT) {
        return IT.S_((TT.x + oT.x) / 2, (TT.y + oT.y) / 2)
      }
      static DistanceOfPointFromSegment(TT, oT, IT) {
        const iT = DT.DistanceSquared(oT, IT);
        if (0 === iT) return DT.Distance(TT, oT);
        const zT = IT.subtract(oT),
          kT = Math.max(0, Math.min(1, DT.Dot(TT.subtract(oT), zT) / iT)),
          WT = oT.add(zT.multiplyByFloats(kT, kT));
        return DT.Distance(TT, WT)
      }
    }
    DT._V8PerformanceHack = new DT(.5, .5), DT._ZeroReadOnly = DT.Zero();
    class LT {
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
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = TT, this._y = oT, this._z = IT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "sc"
      }
      getHashCode() {
        let TT = ST(this._x);
        return TT = 397 * TT ^ ST(this._y), TT = 397 * TT ^ ST(this._z), TT
      }
      bIT() {
        return [this._x, this._y, this._z]
      }
      toArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[oT] = this._x, TT[oT + 1] = this._y, TT[oT + 2] = this._z, this
      }
      joT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return LT.FromArrayToRef(TT, oT, this), this
      }
      toQuaternion() {
        return cT.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(TT) {
        return this._x += TT._x, this._y += TT._y, this._z += TT._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(TT, oT, IT) {
        return this._x += TT, this._y += oT, this._z += IT, this._isDirty = !0, this
      }
      add(TT) {
        return new LT(this._x + TT._x, this._y + TT._y, this._z + TT._z)
      }
      addToRef(TT, oT) {
        return oT._x = this._x + TT._x, oT._y = this._y + TT._y, oT._z = this._z + TT._z, oT._isDirty = !0, oT
      }
      SiT(TT) {
        return this._x -= TT._x, this._y -= TT._y, this._z -= TT._z, this._isDirty = !0, this
      }
      subtract(TT) {
        return new LT(this._x - TT._x, this._y - TT._y, this._z - TT._z)
      }
      subtractToRef(TT, oT) {
        return this.subtractFromFloatsToRef(TT._x, TT._y, TT._z, oT)
      }
      subtractFromFloats(TT, oT, IT) {
        return new LT(this._x - TT, this._y - oT, this._z - IT)
      }
      subtractFromFloatsToRef(TT, oT, IT, iT) {
        return iT._x = this._x - TT, iT._y = this._y - oT, iT._z = this._z - IT, iT._isDirty = !0, iT
      }
      ri() {
        return new LT(-this._x, -this._y, -this._z)
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
        return new LT(this._x * TT, this._y * TT, this._z * TT)
      }
      scaleToRef(TT, oT) {
        return oT._x = this._x * TT, oT._y = this._y * TT, oT._z = this._z * TT, oT._isDirty = !0, oT
      }
      getNormalToRef(TT) {
        const oT = this.length();
        let IT = Math.acos(this._y / oT);
        const iT = Math.atan2(this._z, this._x);
        IT > Math.PI / 2 ? IT -= Math.PI / 2 : IT += Math.PI / 2;
        const zT = oT * Math.sin(IT) * Math.cos(iT),
          kT = oT * Math.cos(IT),
          WT = oT * Math.sin(IT) * Math.sin(iT);
        return TT.set(zT, kT, WT), TT
      }
      applyRotationQuaternionToRef(TT, oT) {
        const IT = this._x,
          iT = this._y,
          zT = this._z,
          kT = TT._x,
          WT = TT._y,
          XT = TT._z,
          BT = TT._w,
          FT = 2 * (WT * zT - XT * iT),
          ST = 2 * (XT * IT - kT * zT),
          DT = 2 * (kT * iT - WT * IT);
        return oT._x = IT + BT * FT + WT * DT - XT * ST, oT._y = iT + BT * ST + XT * FT - kT * DT, oT._z = zT + BT * DT + kT * ST - WT * FT, oT._isDirty = !0, oT
      }
      applyRotationQuaternionInPlace(TT) {
        return this.applyRotationQuaternionToRef(TT, this)
      }
      applyRotationQuaternion(TT) {
        return this.applyRotationQuaternionToRef(TT, new LT)
      }
      scaleAndAddToRef(TT, oT) {
        return oT._x += this._x * TT, oT._y += this._y * TT, oT._z += this._z * TT, oT._isDirty = !0, oT
      }
      projectOnPlane(TT, oT) {
        return this.projectOnPlaneToRef(TT, oT, new LT)
      }
      projectOnPlaneToRef(TT, oT, IT) {
        const iT = TT.normal,
          zT = TT.d,
          kT = MT.sc[0];
        this.subtractToRef(oT, kT), kT.normalize();
        const WT = LT.Dot(kT, iT);
        if (Math.abs(WT) < 1e-10) IT.W8(1 / 0);
        else {
          const TT = -(LT.Dot(oT, iT) + zT) / WT,
            XT = kT.scaleInPlace(TT);
          oT.addToRef(XT, IT)
        }
        return IT
      }
      equals(TT) {
        return TT && this._x === TT._x && this._y === TT._y && this._z === TT._z
      }
      equalsWithEpsilon(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iT.d;
        return TT && (0, XT.WithinEpsilon)(this._x, TT._x, oT) && (0, XT.WithinEpsilon)(this._y, TT._y, oT) && (0, XT.WithinEpsilon)(this._z, TT._z, oT)
      }
      eWT(TT, oT, IT) {
        return this._x === TT && this._y === oT && this._z === IT
      }
      multiplyInPlace(TT) {
        return this._x *= TT._x, this._y *= TT._y, this._z *= TT._z, this._isDirty = !0, this
      }
      multiply(TT) {
        return this.multiplyByFloats(TT._x, TT._y, TT._z)
      }
      multiplyToRef(TT, oT) {
        return oT._x = this._x * TT._x, oT._y = this._y * TT._y, oT._z = this._z * TT._z, oT._isDirty = !0, oT
      }
      multiplyByFloats(TT, oT, IT) {
        return new LT(this._x * TT, this._y * oT, this._z * IT)
      }
      divide(TT) {
        return new LT(this._x / TT._x, this._y / TT._y, this._z / TT._z)
      }
      divideToRef(TT, oT) {
        return oT._x = this._x / TT._x, oT._y = this._y / TT._y, oT._z = this._z / TT._z, oT._isDirty = !0, oT
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
      minimizeInPlaceFromFloats(TT, oT, IT) {
        return TT < this._x && (this.x = TT), oT < this._y && (this.y = oT), IT < this._z && (this.z = IT), this
      }
      maximizeInPlaceFromFloats(TT, oT, IT) {
        return TT > this._x && (this.x = TT), oT > this._y && (this.y = oT), IT > this._z && (this.z = IT), this
      }
      isNonUniformWithinEpsilon(TT) {
        const oT = Math.abs(this._x),
          IT = Math.abs(this._y);
        if (!(0, XT.WithinEpsilon)(oT, IT, TT)) return !0;
        const iT = Math.abs(this._z);
        return !(0, XT.WithinEpsilon)(oT, iT, TT) || !(0, XT.WithinEpsilon)(IT, iT, TT)
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
        return new LT(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(TT) {
        return TT._x = this._x - Math.floor(this._x), TT._y = this._y - Math.floor(this._y), TT._z = this._z - Math.floor(this._z), TT._isDirty = !0, TT
      }
      fract() {
        return new LT(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const oT = MT.sc[0].SIT(this);
        return this.x = oT[TT[0]], this.y = oT[TT[1]], this.z = oT[TT[2]], this
      }
      rotateByQuaternionToRef(TT, oT) {
        return TT.toRotationMatrix(MT.Matrix[0]), LT.TransformCoordinatesToRef(this, MT.Matrix[0], oT), oT
      }
      rotateByQuaternionAroundPointToRef(TT, oT, IT) {
        return this.subtractToRef(oT, MT.sc[0]), MT.sc[0].rotateByQuaternionToRef(TT, MT.sc[0]), oT.addToRef(MT.sc[0], IT), IT
      }
      cross(TT) {
        return LT.CrossToRef(this, TT, new LT)
      }
      normalizeFromLength(TT) {
        return 0 === TT || 1 === TT ? this : this.scaleInPlace(1 / TT)
      }
      normalizeToNew() {
        return this.normalizeToRef(new LT)
      }
      normalizeToRef(TT) {
        const oT = this.length();
        return 0 === oT || 1 === oT ? (TT._x = this._x, TT._y = this._y, TT._z = this._z, TT._isDirty = !0, TT) : this.scaleToRef(1 / oT, TT)
      }
      clone() {
        return new LT(this._x, this._y, this._z)
      }
      SIT(TT) {
        return this.S_(TT._x, TT._y, TT._z)
      }
      S_(TT, oT, IT) {
        return this._x = TT, this._y = oT, this._z = IT, this._isDirty = !0, this
      }
      set(TT, oT, IT) {
        return this.S_(TT, oT, IT)
      }
      W8(TT) {
        return this._x = this._y = this._z = TT, this._isDirty = !0, this
      }
      static GetClipFactor(TT, oT, IT, iT) {
        const zT = LT.Dot(TT, IT);
        return (zT - iT) / (zT - LT.Dot(oT, IT))
      }
      static GetAngleBetweenVectors(TT, oT, IT) {
        const iT = TT.normalizeToRef(MT.sc[1]),
          zT = oT.normalizeToRef(MT.sc[2]);
        let kT = LT.Dot(iT, zT);
        kT = (0, XT.Clamp)(kT, -1, 1);
        const WT = Math.acos(kT),
          BT = MT.sc[3];
        return LT.CrossToRef(iT, zT, BT), LT.Dot(BT, IT) > 0 ? isNaN(WT) ? 0 : WT : isNaN(WT) ? -Math.PI : -Math.acos(kT)
      }
      static GetAngleBetweenVectorsOnPlane(TT, oT, IT) {
        MT.sc[0].SIT(TT);
        const iT = MT.sc[0];
        MT.sc[1].SIT(oT);
        const zT = MT.sc[1];
        MT.sc[2].SIT(IT);
        const kT = MT.sc[2],
          WT = MT.sc[3],
          BT = MT.sc[4];
        iT.normalize(), zT.normalize(), kT.normalize(), LT.CrossToRef(kT, iT, WT), LT.CrossToRef(WT, kT, BT);
        const FT = Math.atan2(LT.Dot(zT, WT), LT.Dot(zT, BT));
        return (0, XT.NormalizeRadians)(FT)
      }
      static PitchYawRollToMoveBetweenPointsToRef(TT, oT, IT) {
        const iT = rT.sc[0];
        return oT.subtractToRef(TT, iT), IT._y = Math.atan2(iT.x, iT.z) || 0, IT._x = Math.atan2(Math.sqrt(iT.x ** 2 + iT.z ** 2), iT.y) || 0, IT._z = 0, IT._isDirty = !0, IT
      }
      static PitchYawRollToMoveBetweenPoints(TT, oT) {
        const IT = LT.Zero();
        return LT.PitchYawRollToMoveBetweenPointsToRef(TT, oT, IT)
      }
      static SlerpToRef(TT, oT, IT, zT) {
        IT = (0, XT.Clamp)(IT, 0, 1);
        const kT = MT.sc[0],
          WT = MT.sc[1];
        kT.SIT(TT);
        const BT = kT.length();
        kT.normalizeFromLength(BT), WT.SIT(oT);
        const FT = WT.length();
        WT.normalizeFromLength(FT);
        const ST = LT.Dot(kT, WT);
        let DT, xT;
        if (ST < 1 - iT.d) {
          const TT = Math.acos(ST),
            oT = 1 / Math.sin(TT);
          DT = Math.sin((1 - IT) * TT) * oT, xT = Math.sin(IT * TT) * oT
        } else DT = 1 - IT, xT = IT;
        return kT.scaleInPlace(DT), WT.scaleInPlace(xT), zT.SIT(kT).addInPlace(WT), zT.scaleInPlace((0, XT.Lerp)(BT, FT, IT)), zT
      }
      static SmoothToRef(TT, oT, IT, iT, zT) {
        return LT.SlerpToRef(TT, oT, 0 === iT ? 1 : IT / iT, zT), zT
      }
      static FromArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new LT(TT[oT], TT[oT + 1], TT[oT + 2])
      }
      static FromFloatArray(TT, oT) {
        return LT.FromArray(TT, oT)
      }
      static FromArrayToRef(TT, oT, IT) {
        return IT._x = TT[oT], IT._y = TT[oT + 1], IT._z = TT[oT + 2], IT._isDirty = !0, IT
      }
      static FromFloatArrayToRef(TT, oT, IT) {
        return LT.FromArrayToRef(TT, oT, IT)
      }
      static FromFloatsToRef(TT, oT, IT, iT) {
        return iT.S_(TT, oT, IT), iT
      }
      static Zero() {
        return new LT(0, 0, 0)
      }
      static One() {
        return new LT(1, 1, 1)
      }
      static Up() {
        return new LT(0, 1, 0)
      }
      static get UpReadOnly() {
        return LT._UpReadOnly
      }
      static get DownReadOnly() {
        return LT._DownReadOnly
      }
      static get RightReadOnly() {
        return LT._RightReadOnly
      }
      static get LeftReadOnly() {
        return LT._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return LT._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return LT._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return LT._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return LT._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return LT._ZeroReadOnly
      }
      static get OneReadOnly() {
        return LT._OneReadOnly
      }
      static Down() {
        return new LT(0, -1, 0)
      }
      static Forward() {
        return new LT(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new LT(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new LT(1, 0, 0)
      }
      static Left() {
        return new LT(-1, 0, 0)
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new LT((0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).S_((0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT))
      }
      static TransformCoordinates(TT, oT) {
        const IT = LT.Zero();
        return LT.TransformCoordinatesToRef(TT, oT, IT), IT
      }
      static TransformCoordinatesToRef(TT, oT, IT) {
        return LT.TransformCoordinatesFromFloatsToRef(TT._x, TT._y, TT._z, oT, IT), IT
      }
      static TransformCoordinatesFromFloatsToRef(TT, oT, IT, iT, zT) {
        const kT = iT.m,
          WT = TT * kT[0] + oT * kT[4] + IT * kT[8] + kT[12],
          XT = TT * kT[1] + oT * kT[5] + IT * kT[9] + kT[13],
          BT = TT * kT[2] + oT * kT[6] + IT * kT[10] + kT[14],
          FT = 1 / (TT * kT[3] + oT * kT[7] + IT * kT[11] + kT[15]);
        return zT._x = WT * FT, zT._y = XT * FT, zT._z = BT * FT, zT._isDirty = !0, zT
      }
      static TransformNormal(TT, oT) {
        const IT = LT.Zero();
        return LT.TransformNormalToRef(TT, oT, IT), IT
      }
      static TransformNormalToRef(TT, oT, IT) {
        return this.TransformNormalFromFloatsToRef(TT._x, TT._y, TT._z, oT, IT), IT
      }
      static TransformNormalFromFloatsToRef(TT, oT, IT, iT, zT) {
        const kT = iT.m;
        return zT._x = TT * kT[0] + oT * kT[4] + IT * kT[8], zT._y = TT * kT[1] + oT * kT[5] + IT * kT[9], zT._z = TT * kT[2] + oT * kT[6] + IT * kT[10], zT._isDirty = !0, zT
      }
      static CatmullRom(TT, oT, IT, iT, zT) {
        const kT = zT * zT,
          WT = zT * kT,
          XT = .5 * (2 * oT._x + (-TT._x + IT._x) * zT + (2 * TT._x - 5 * oT._x + 4 * IT._x - iT._x) * kT + (-TT._x + 3 * oT._x - 3 * IT._x + iT._x) * WT),
          BT = .5 * (2 * oT._y + (-TT._y + IT._y) * zT + (2 * TT._y - 5 * oT._y + 4 * IT._y - iT._y) * kT + (-TT._y + 3 * oT._y - 3 * IT._y + iT._y) * WT),
          FT = .5 * (2 * oT._z + (-TT._z + IT._z) * zT + (2 * TT._z - 5 * oT._z + 4 * IT._z - iT._z) * kT + (-TT._z + 3 * oT._z - 3 * IT._z + iT._z) * WT);
        return new LT(XT, BT, FT)
      }
      static Clamp(TT, oT, IT) {
        const iT = new LT;
        return LT.ClampToRef(TT, oT, IT, iT), iT
      }
      static ClampToRef(TT, oT, IT, iT) {
        let zT = TT._x;
        zT = zT > IT._x ? IT._x : zT, zT = zT < oT._x ? oT._x : zT;
        let kT = TT._y;
        kT = kT > IT._y ? IT._y : kT, kT = kT < oT._y ? oT._y : kT;
        let WT = TT._z;
        return WT = WT > IT._z ? IT._z : WT, WT = WT < oT._z ? oT._z : WT, iT.S_(zT, kT, WT), iT
      }
      static CheckExtends(TT, oT, IT) {
        oT.minimizeInPlace(TT), IT.maximizeInPlace(TT)
      }
      static Hermite(TT, oT, IT, iT, zT) {
        const kT = zT * zT,
          WT = zT * kT,
          XT = 2 * WT - 3 * kT + 1,
          BT = -2 * WT + 3 * kT,
          FT = WT - 2 * kT + zT,
          ST = WT - kT,
          DT = TT._x * XT + IT._x * BT + oT._x * FT + iT._x * ST,
          xT = TT._y * XT + IT._y * BT + oT._y * FT + iT._y * ST,
          cT = TT._z * XT + IT._z * BT + oT._z * FT + iT._z * ST;
        return new LT(DT, xT, cT)
      }
      static Hermite1stDerivative(TT, oT, IT, iT, zT) {
        const kT = new LT;
        return this.Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT), kT
      }
      static Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT) {
        const WT = zT * zT;
        return kT._x = 6 * (WT - zT) * TT._x + (3 * WT - 4 * zT + 1) * oT._x + 6 * (-WT + zT) * IT._x + (3 * WT - 2 * zT) * iT._x, kT._y = 6 * (WT - zT) * TT._y + (3 * WT - 4 * zT + 1) * oT._y + 6 * (-WT + zT) * IT._y + (3 * WT - 2 * zT) * iT._y, kT._z = 6 * (WT - zT) * TT._z + (3 * WT - 4 * zT + 1) * oT._z + 6 * (-WT + zT) * IT._z + (3 * WT - 2 * zT) * iT._z, kT._isDirty = !0, kT
      }
      static Lerp(TT, oT, IT) {
        const iT = new LT(0, 0, 0);
        return LT.LerpToRef(TT, oT, IT, iT), iT
      }
      static LerpToRef(TT, oT, IT, iT) {
        return iT._x = TT._x + (oT._x - TT._x) * IT, iT._y = TT._y + (oT._y - TT._y) * IT, iT._z = TT._z + (oT._z - TT._z) * IT, iT._isDirty = !0, iT
      }
      static Dot(TT, oT) {
        return TT._x * oT._x + TT._y * oT._y + TT._z * oT._z
      }
      dot(TT) {
        return this._x * TT._x + this._y * TT._y + this._z * TT._z
      }
      static Cross(TT, oT) {
        const IT = new LT;
        return LT.CrossToRef(TT, oT, IT), IT
      }
      static CrossToRef(TT, oT, IT) {
        const iT = TT._y * oT._z - TT._z * oT._y,
          zT = TT._z * oT._x - TT._x * oT._z,
          kT = TT._x * oT._y - TT._y * oT._x;
        return IT.S_(iT, zT, kT), IT
      }
      static Normalize(TT) {
        const oT = LT.Zero();
        return LT.NormalizeToRef(TT, oT), oT
      }
      static NormalizeToRef(TT, oT) {
        return TT.normalizeToRef(oT), oT
      }
      static Project(TT, oT, IT, iT) {
        const zT = new LT;
        return LT.ProjectToRef(TT, oT, IT, iT, zT), zT
      }
      static ProjectToRef(TT, oT, IT, iT, zT) {
        const kT = iT.width,
          XT = iT.height,
          BT = iT.x,
          FT = iT.y,
          ST = MT.Matrix[1],
          DT = WT.d.LastCreatedEngine?.isNDCHalfZRange,
          xT = DT ? 1 : .5,
          cT = DT ? 0 : .5;
        KT.FromValuesToRef(kT / 2, 0, 0, 0, 0, -XT / 2, 0, 0, 0, 0, xT, 0, BT + kT / 2, XT / 2 + FT, cT, 1, ST);
        const rT = MT.Matrix[0];
        return oT.multiplyToRef(IT, rT), rT.multiplyToRef(ST, rT), LT.TransformCoordinatesToRef(TT, rT, zT), zT
      }
      static Reflect(TT, oT) {
        return this.ReflectToRef(TT, oT, new LT)
      }
      static ReflectToRef(TT, oT, IT) {
        const iT = rT.sc[0];
        return iT.SIT(oT).scaleInPlace(2 * LT.Dot(TT, oT)), IT.SIT(TT).SiT(iT)
      }
      static UnprojectFromTransform(TT, oT, IT, iT, zT) {
        return this.Unproject(TT, oT, IT, iT, zT, KT.IdentityReadOnly)
      }
      static Unproject(TT, oT, IT, iT, zT, kT) {
        const WT = new LT;
        return LT.UnprojectToRef(TT, oT, IT, iT, zT, kT, WT), WT
      }
      static UnprojectToRef(TT, oT, IT, iT, zT, kT, WT) {
        return LT.UnprojectFloatsToRef(TT._x, TT._y, TT._z, oT, IT, iT, zT, kT, WT), WT
      }
      static UnprojectFloatsToRef(TT, oT, IT, iT, zT, kT, XT, BT, FT) {
        const ST = MT.Matrix[0];
        kT.multiplyToRef(XT, ST), ST.multiplyToRef(BT, ST), ST.invert();
        const DT = MT.sc[0];
        return DT.x = TT / iT * 2 - 1, DT.y = -(oT / zT * 2 - 1), WT.d.LastCreatedEngine?.isNDCHalfZRange ? DT.z = IT : DT.z = 2 * IT - 1, LT.TransformCoordinatesToRef(DT, ST, FT), FT
      }
      static Minimize(TT, oT) {
        const IT = new LT;
        return IT.SIT(TT), IT.minimizeInPlace(oT), IT
      }
      static Maximize(TT, oT) {
        const IT = new LT;
        return IT.SIT(TT), IT.maximizeInPlace(oT), IT
      }
      static Distance(TT, oT) {
        return Math.sqrt(LT.DistanceSquared(TT, oT))
      }
      static DistanceSquared(TT, oT) {
        const IT = TT._x - oT._x,
          iT = TT._y - oT._y,
          zT = TT._z - oT._z;
        return IT * IT + iT * iT + zT * zT
      }
      static ProjectOnTriangleToRef(TT, oT, IT, zT, kT) {
        const WT = MT.sc[0],
          BT = MT.sc[1],
          FT = MT.sc[2],
          ST = MT.sc[3],
          DT = MT.sc[4];
        IT.subtractToRef(oT, WT), zT.subtractToRef(oT, BT), zT.subtractToRef(IT, FT);
        const xT = WT.length(),
          cT = BT.length(),
          KT = FT.length();
        if (xT < iT.d || cT < iT.d || KT < iT.d) return kT.SIT(oT), LT.Distance(TT, oT);
        TT.subtractToRef(oT, DT), LT.CrossToRef(WT, BT, ST);
        const rT = ST.length();
        if (rT < iT.d) return kT.SIT(oT), LT.Distance(TT, oT);
        ST.normalizeFromLength(rT);
        let AT = DT.length();
        if (AT < iT.d) return kT.SIT(oT), 0;
        DT.normalizeFromLength(AT);
        const gT = LT.Dot(ST, DT),
          hT = MT.sc[5],
          wT = MT.sc[6];
        hT.SIT(ST).scaleInPlace(-AT * gT), wT.SIT(TT).addInPlace(hT);
        const mT = MT.sc[4],
          eT = MT.sc[5],
          RT = MT.sc[7],
          uT = MT.sc[8];
        mT.SIT(WT).scaleInPlace(1 / xT), uT.SIT(BT).scaleInPlace(1 / cT), mT.addInPlace(uT).scaleInPlace(-1), eT.SIT(WT).scaleInPlace(-1 / xT), uT.SIT(FT).scaleInPlace(1 / KT), eT.addInPlace(uT).scaleInPlace(-1), RT.SIT(FT).scaleInPlace(-1 / KT), uT.SIT(BT).scaleInPlace(-1 / cT), RT.addInPlace(uT).scaleInPlace(-1);
        const vT = MT.sc[9];
        let ET;
        vT.SIT(wT).SiT(oT), LT.CrossToRef(mT, vT, uT), ET = LT.Dot(uT, ST);
        const fT = ET;
        vT.SIT(wT).SiT(IT), LT.CrossToRef(eT, vT, uT), ET = LT.Dot(uT, ST);
        const CT = ET;
        vT.SIT(wT).SiT(zT), LT.CrossToRef(RT, vT, uT), ET = LT.Dot(uT, ST);
        const jT = ET,
          JT = MT.sc[10];
        let UT, aT;
        fT > 0 && CT < 0 ? (JT.SIT(WT), UT = oT, aT = IT) : CT > 0 && jT < 0 ? (JT.SIT(FT), UT = IT, aT = zT) : (JT.SIT(BT).scaleInPlace(-1), UT = zT, aT = oT);
        const YT = MT.sc[9],
          QT = MT.sc[4];
        UT.subtractToRef(wT, uT), aT.subtractToRef(wT, YT), LT.CrossToRef(uT, YT, QT);
        if (!(LT.Dot(QT, ST) < 0)) return kT.SIT(wT), Math.abs(AT * gT);
        const OT = MT.sc[5];
        LT.CrossToRef(JT, QT, OT), OT.normalize();
        const HT = MT.sc[9];
        HT.SIT(UT).SiT(wT);
        const nT = HT.length();
        if (nT < iT.d) return kT.SIT(UT), LT.Distance(TT, UT);
        HT.normalizeFromLength(nT);
        const qT = LT.Dot(OT, HT),
          ZT = MT.sc[7];
        ZT.SIT(wT).addInPlace(OT.scaleInPlace(nT * qT)), uT.SIT(ZT).SiT(UT), AT = JT.length(), JT.normalizeFromLength(AT);
        let lT = LT.Dot(uT, JT) / Math.max(AT, iT.d);
        return lT = (0, XT.Clamp)(lT, 0, 1), ZT.SIT(UT).addInPlace(JT.scaleInPlace(lT * AT)), kT.SIT(ZT), LT.Distance(TT, ZT)
      }
      static Center(TT, oT) {
        return LT.CenterToRef(TT, oT, LT.Zero())
      }
      static CenterToRef(TT, oT, IT) {
        return IT.S_((TT._x + oT._x) / 2, (TT._y + oT._y) / 2, (TT._z + oT._z) / 2)
      }
      static RotationFromAxis(TT, oT, IT) {
        const iT = new LT;
        return LT.RotationFromAxisToRef(TT, oT, IT, iT), iT
      }
      static RotationFromAxisToRef(TT, oT, IT, iT) {
        const zT = MT.Quaternion[0];
        return cT.RotationQuaternionFromAxisToRef(TT, oT, IT, zT), zT.toEulerAnglesToRef(iT), iT
      }
    }
    LT._V8PerformanceHack = new LT(.5, .5, .5), LT._UpReadOnly = LT.Up(), LT._DownReadOnly = LT.Down(), LT._LeftHandedForwardReadOnly = LT.Forward(!1), LT._RightHandedForwardReadOnly = LT.Forward(!0), LT._LeftHandedBackwardReadOnly = LT.Backward(!1), LT._RightHandedBackwardReadOnly = LT.Backward(!0), LT._RightReadOnly = LT.Right(), LT._LeftReadOnly = LT.Left(), LT._ZeroReadOnly = LT.Zero(), LT._OneReadOnly = LT.One();
    class xT {
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
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = TT, this._y = oT, this._z = IT, this._w = iT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let TT = ST(this._x);
        return TT = 397 * TT ^ ST(this._y), TT = 397 * TT ^ ST(this._z), TT = 397 * TT ^ ST(this._w), TT
      }
      bIT() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(TT, oT) {
        return void 0 === oT && (oT = 0), TT[oT] = this._x, TT[oT + 1] = this._y, TT[oT + 2] = this._z, TT[oT + 3] = this._w, this
      }
      joT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xT.FromArrayToRef(TT, oT, this), this
      }
      addInPlace(TT) {
        return this.x += TT._x, this.y += TT._y, this.z += TT._z, this.w += TT._w, this
      }
      addInPlaceFromFloats(TT, oT, IT, iT) {
        return this.x += TT, this.y += oT, this.z += IT, this.w += iT, this
      }
      add(TT) {
        return new xT(this._x + TT.x, this._y + TT.y, this._z + TT.z, this._w + TT.w)
      }
      addToRef(TT, oT) {
        return oT.x = this._x + TT.x, oT.y = this._y + TT.y, oT.z = this._z + TT.z, oT.w = this._w + TT.w, oT
      }
      SiT(TT) {
        return this.x -= TT.x, this.y -= TT.y, this.z -= TT.z, this.w -= TT.w, this
      }
      subtract(TT) {
        return new xT(this._x - TT.x, this._y - TT.y, this._z - TT.z, this._w - TT.w)
      }
      subtractToRef(TT, oT) {
        return oT.x = this._x - TT.x, oT.y = this._y - TT.y, oT.z = this._z - TT.z, oT.w = this._w - TT.w, oT
      }
      subtractFromFloats(TT, oT, IT, iT) {
        return new xT(this._x - TT, this._y - oT, this._z - IT, this._w - iT)
      }
      subtractFromFloatsToRef(TT, oT, IT, iT, zT) {
        return zT.x = this._x - TT, zT.y = this._y - oT, zT.z = this._z - IT, zT.w = this._w - iT, zT
      }
      ri() {
        return new xT(-this._x, -this._y, -this._z, -this._w)
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
        return new xT(this._x * TT, this._y * TT, this._z * TT, this._w * TT)
      }
      scaleToRef(TT, oT) {
        return oT.x = this._x * TT, oT.y = this._y * TT, oT.z = this._z * TT, oT.w = this._w * TT, oT
      }
      scaleAndAddToRef(TT, oT) {
        return oT.x += this._x * TT, oT.y += this._y * TT, oT.z += this._z * TT, oT.w += this._w * TT, oT
      }
      equals(TT) {
        return TT && this._x === TT.x && this._y === TT.y && this._z === TT.z && this._w === TT.w
      }
      equalsWithEpsilon(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iT.d;
        return TT && (0, XT.WithinEpsilon)(this._x, TT.x, oT) && (0, XT.WithinEpsilon)(this._y, TT.y, oT) && (0, XT.WithinEpsilon)(this._z, TT.z, oT) && (0, XT.WithinEpsilon)(this._w, TT.w, oT)
      }
      eWT(TT, oT, IT, iT) {
        return this._x === TT && this._y === oT && this._z === IT && this._w === iT
      }
      multiplyInPlace(TT) {
        return this.x *= TT.x, this.y *= TT.y, this.z *= TT.z, this.w *= TT.w, this
      }
      multiply(TT) {
        return new xT(this._x * TT.x, this._y * TT.y, this._z * TT.z, this._w * TT.w)
      }
      multiplyToRef(TT, oT) {
        return oT.x = this._x * TT.x, oT.y = this._y * TT.y, oT.z = this._z * TT.z, oT.w = this._w * TT.w, oT
      }
      multiplyByFloats(TT, oT, IT, iT) {
        return new xT(this._x * TT, this._y * oT, this._z * IT, this._w * iT)
      }
      divide(TT) {
        return new xT(this._x / TT.x, this._y / TT.y, this._z / TT.z, this._w / TT.w)
      }
      divideToRef(TT, oT) {
        return oT.x = this._x / TT.x, oT.y = this._y / TT.y, oT.z = this._z / TT.z, oT.w = this._w / TT.w, oT
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
      minimizeInPlaceFromFloats(TT, oT, IT, iT) {
        return this.x = Math.min(TT, this._x), this.y = Math.min(oT, this._y), this.z = Math.min(IT, this._z), this.w = Math.min(iT, this._w), this
      }
      maximizeInPlaceFromFloats(TT, oT, IT, iT) {
        return this.x = Math.max(TT, this._x), this.y = Math.max(oT, this._y), this.z = Math.max(IT, this._z), this.w = Math.max(iT, this._w), this
      }
      floorToRef(TT) {
        return TT.x = Math.floor(this._x), TT.y = Math.floor(this._y), TT.z = Math.floor(this._z), TT.w = Math.floor(this._w), TT
      }
      floor() {
        return new xT(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(TT) {
        return TT.x = this._x - Math.floor(this._x), TT.y = this._y - Math.floor(this._y), TT.z = this._z - Math.floor(this._z), TT.w = this._w - Math.floor(this._w), TT
      }
      fract() {
        return new xT(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new xT)
      }
      normalizeToRef(TT) {
        const oT = this.length();
        return 0 === oT || 1 === oT ? (TT.x = this._x, TT.y = this._y, TT.z = this._z, TT.w = this._w, TT) : this.scaleToRef(1 / oT, TT)
      }
      toVector3() {
        return new LT(this._x, this._y, this._z)
      }
      clone() {
        return new xT(this._x, this._y, this._z, this._w)
      }
      SIT(TT) {
        return this.x = TT.x, this.y = TT.y, this.z = TT.z, this.w = TT.w, this
      }
      S_(TT, oT, IT, iT) {
        return this.x = TT, this.y = oT, this.z = IT, this.w = iT, this
      }
      set(TT, oT, IT, iT) {
        return this.S_(TT, oT, IT, iT)
      }
      W8(TT) {
        return this.x = this.y = this.z = this.w = TT, this
      }
      dot(TT) {
        return this._x * TT.x + this._y * TT.y + this._z * TT.z + this._w * TT.w
      }
      static FromArray(TT, oT) {
        return oT || (oT = 0), new xT(TT[oT], TT[oT + 1], TT[oT + 2], TT[oT + 3])
      }
      static FromArrayToRef(TT, oT, IT) {
        return IT.x = TT[oT], IT.y = TT[oT + 1], IT.z = TT[oT + 2], IT.w = TT[oT + 3], IT
      }
      static FromFloatArrayToRef(TT, oT, IT) {
        return xT.FromArrayToRef(TT, oT, IT), IT
      }
      static FromFloatsToRef(TT, oT, IT, iT, zT) {
        return zT.x = TT, zT.y = oT, zT.z = IT, zT.w = iT, zT
      }
      static Zero() {
        return new xT(0, 0, 0, 0)
      }
      static One() {
        return new xT(1, 1, 1, 1)
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new xT((0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        return IT.x = (0, XT.RandomRange)(TT, oT), IT.y = (0, XT.RandomRange)(TT, oT), IT.z = (0, XT.RandomRange)(TT, oT), IT.w = (0, XT.RandomRange)(TT, oT), IT
      }
      static Clamp(TT, oT, IT) {
        return xT.ClampToRef(TT, oT, IT, new xT)
      }
      static ClampToRef(TT, oT, IT, iT) {
        return iT.x = (0, XT.Clamp)(TT.x, oT.x, IT.x), iT.y = (0, XT.Clamp)(TT.y, oT.y, IT.y), iT.z = (0, XT.Clamp)(TT.z, oT.z, IT.z), iT.w = (0, XT.Clamp)(TT.w, oT.w, IT.w), iT
      }
      static CheckExtends(TT, oT, IT) {
        oT.minimizeInPlace(TT), IT.maximizeInPlace(TT)
      }
      static get ZeroReadOnly() {
        return xT._ZeroReadOnly
      }
      static Normalize(TT) {
        return xT.NormalizeToRef(TT, new xT)
      }
      static NormalizeToRef(TT, oT) {
        return TT.normalizeToRef(oT), oT
      }
      static Minimize(TT, oT) {
        const IT = new xT;
        return IT.SIT(TT), IT.minimizeInPlace(oT), IT
      }
      static Maximize(TT, oT) {
        const IT = new xT;
        return IT.SIT(TT), IT.maximizeInPlace(oT), IT
      }
      static Distance(TT, oT) {
        return Math.sqrt(xT.DistanceSquared(TT, oT))
      }
      static DistanceSquared(TT, oT) {
        const IT = TT.x - oT.x,
          iT = TT.y - oT.y,
          zT = TT.z - oT.z,
          kT = TT.w - oT.w;
        return IT * IT + iT * iT + zT * zT + kT * kT
      }
      static Center(TT, oT) {
        return xT.CenterToRef(TT, oT, new xT)
      }
      static CenterToRef(TT, oT, IT) {
        return IT.x = (TT.x + oT.x) / 2, IT.y = (TT.y + oT.y) / 2, IT.z = (TT.z + oT.z) / 2, IT.w = (TT.w + oT.w) / 2, IT
      }
      static TransformCoordinates(TT, oT) {
        return xT.TransformCoordinatesToRef(TT, oT, new xT)
      }
      static TransformCoordinatesToRef(TT, oT, IT) {
        return xT.TransformCoordinatesFromFloatsToRef(TT._x, TT._y, TT._z, oT, IT), IT
      }
      static TransformCoordinatesFromFloatsToRef(TT, oT, IT, iT, zT) {
        const kT = iT.m,
          WT = TT * kT[0] + oT * kT[4] + IT * kT[8] + kT[12],
          XT = TT * kT[1] + oT * kT[5] + IT * kT[9] + kT[13],
          BT = TT * kT[2] + oT * kT[6] + IT * kT[10] + kT[14],
          FT = TT * kT[3] + oT * kT[7] + IT * kT[11] + kT[15];
        return zT.x = WT, zT.y = XT, zT.z = BT, zT.w = FT, zT
      }
      static TransformNormal(TT, oT) {
        return xT.TransformNormalToRef(TT, oT, new xT)
      }
      static TransformNormalToRef(TT, oT, IT) {
        const iT = oT.m,
          zT = TT.x * iT[0] + TT.y * iT[4] + TT.z * iT[8],
          kT = TT.x * iT[1] + TT.y * iT[5] + TT.z * iT[9],
          WT = TT.x * iT[2] + TT.y * iT[6] + TT.z * iT[10];
        return IT.x = zT, IT.y = kT, IT.z = WT, IT.w = TT.w, IT
      }
      static TransformNormalFromFloatsToRef(TT, oT, IT, iT, zT, kT) {
        const WT = zT.m;
        return kT.x = TT * WT[0] + oT * WT[4] + IT * WT[8], kT.y = TT * WT[1] + oT * WT[5] + IT * WT[9], kT.z = TT * WT[2] + oT * WT[6] + IT * WT[10], kT.w = iT, kT
      }
      static FromVector3(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new xT(TT._x, TT._y, TT._z, oT)
      }
      static Dot(TT, oT) {
        return TT.x * oT.x + TT.y * oT.y + TT.z * oT.z + TT.w * oT.w
      }
    }
    xT._V8PerformanceHack = new xT(.5, .5, .5, .5), xT._ZeroReadOnly = xT.Zero();
    class cT {
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
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = TT, this._y = oT, this._z = IT, this._w = iT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let TT = ST(this._x);
        return TT = 397 * TT ^ ST(this._y), TT = 397 * TT ^ ST(this._z), TT = 397 * TT ^ ST(this._w), TT
      }
      bIT() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[oT] = this._x, TT[oT + 1] = this._y, TT[oT + 2] = this._z, TT[oT + 3] = this._w, this
      }
      joT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return cT.FromArrayToRef(TT, oT, this)
      }
      equals(TT) {
        return TT && this._x === TT._x && this._y === TT._y && this._z === TT._z && this._w === TT._w
      }
      equalsWithEpsilon(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iT.d;
        return TT && (0, XT.WithinEpsilon)(this._x, TT._x, oT) && (0, XT.WithinEpsilon)(this._y, TT._y, oT) && (0, XT.WithinEpsilon)(this._z, TT._z, oT) && (0, XT.WithinEpsilon)(this._w, TT._w, oT)
      }
      isApprox(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : iT.d;
        return TT && ((0, XT.WithinEpsilon)(this._x, TT._x, oT) && (0, XT.WithinEpsilon)(this._y, TT._y, oT) && (0, XT.WithinEpsilon)(this._z, TT._z, oT) && (0, XT.WithinEpsilon)(this._w, TT._w, oT) || (0, XT.WithinEpsilon)(this._x, -TT._x, oT) && (0, XT.WithinEpsilon)(this._y, -TT._y, oT) && (0, XT.WithinEpsilon)(this._z, -TT._z, oT) && (0, XT.WithinEpsilon)(this._w, -TT._w, oT))
      }
      clone() {
        return new cT(this._x, this._y, this._z, this._w)
      }
      SIT(TT) {
        return this._x = TT._x, this._y = TT._y, this._z = TT._z, this._w = TT._w, this._isDirty = !0, this
      }
      S_(TT, oT, IT, iT) {
        return this._x = TT, this._y = oT, this._z = IT, this._w = iT, this._isDirty = !0, this
      }
      set(TT, oT, IT, iT) {
        return this.S_(TT, oT, IT, iT)
      }
      W8(TT) {
        return this.S_(TT, TT, TT, TT)
      }
      add(TT) {
        return new cT(this._x + TT._x, this._y + TT._y, this._z + TT._z, this._w + TT._w)
      }
      addInPlace(TT) {
        return this._x += TT._x, this._y += TT._y, this._z += TT._z, this._w += TT._w, this._isDirty = !0, this
      }
      addToRef(TT, oT) {
        return oT._x = this._x + TT._x, oT._y = this._y + TT._y, oT._z = this._z + TT._z, oT._w = this._w + TT._w, oT._isDirty = !0, oT
      }
      addInPlaceFromFloats(TT, oT, IT, iT) {
        return this._x += TT, this._y += oT, this._z += IT, this._w += iT, this._isDirty = !0, this
      }
      subtractToRef(TT, oT) {
        return oT._x = this._x - TT._x, oT._y = this._y - TT._y, oT._z = this._z - TT._z, oT._w = this._w - TT._w, oT._isDirty = !0, oT
      }
      subtractFromFloats(TT, oT, IT, iT) {
        return this.subtractFromFloatsToRef(TT, oT, IT, iT, new cT)
      }
      subtractFromFloatsToRef(TT, oT, IT, iT, zT) {
        return zT._x = this._x - TT, zT._y = this._y - oT, zT._z = this._z - IT, zT._w = this._w - iT, zT._isDirty = !0, zT
      }
      subtract(TT) {
        return new cT(this._x - TT._x, this._y - TT._y, this._z - TT._z, this._w - TT._w)
      }
      SiT(TT) {
        return this._x -= TT._x, this._y -= TT._y, this._z -= TT._z, this._w -= TT._w, this._isDirty = !0, this
      }
      scale(TT) {
        return new cT(this._x * TT, this._y * TT, this._z * TT, this._w * TT)
      }
      scaleToRef(TT, oT) {
        return oT._x = this._x * TT, oT._y = this._y * TT, oT._z = this._z * TT, oT._w = this._w * TT, oT._isDirty = !0, oT
      }
      scaleInPlace(TT) {
        return this._x *= TT, this._y *= TT, this._z *= TT, this._w *= TT, this._isDirty = !0, this
      }
      scaleAndAddToRef(TT, oT) {
        return oT._x += this._x * TT, oT._y += this._y * TT, oT._z += this._z * TT, oT._w += this._w * TT, oT._isDirty = !0, oT
      }
      multiply(TT) {
        const oT = new cT(0, 0, 0, 1);
        return this.multiplyToRef(TT, oT), oT
      }
      multiplyToRef(TT, oT) {
        const IT = this._x * TT._w + this._y * TT._z - this._z * TT._y + this._w * TT._x,
          iT = -this._x * TT._z + this._y * TT._w + this._z * TT._x + this._w * TT._y,
          zT = this._x * TT._y - this._y * TT._x + this._z * TT._w + this._w * TT._z,
          kT = -this._x * TT._x - this._y * TT._y - this._z * TT._z + this._w * TT._w;
        return oT.S_(IT, iT, zT, kT), oT
      }
      multiplyInPlace(TT) {
        return this.multiplyToRef(TT, this)
      }
      multiplyByFloats(TT, oT, IT, iT) {
        return this._x *= TT, this._y *= oT, this._z *= IT, this._w *= iT, this._isDirty = !0, this
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(TT, oT) {
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
      ri() {
        return this.negateToRef(new cT)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(TT) {
        return TT._x = -this._x, TT._y = -this._y, TT._z = -this._z, TT._w = -this._w, TT._isDirty = !0, TT
      }
      eWT(TT, oT, IT, iT) {
        return this._x === TT && this._y === oT && this._z === IT && this._w === iT
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
        return TT.S_(-this._x, -this._y, -this._z, this._w), TT
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new cT(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const TT = this.conjugate(),
          oT = this.lengthSquared();
        return 0 == oT || 1 == oT || TT.scaleInPlace(1 / oT), TT
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
        const TT = new cT(0, 0, 0, 1);
        return this.normalizeToRef(TT), TT
      }
      normalizeToRef(TT) {
        const oT = this.length();
        return 0 === oT || 1 === oT ? TT.S_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / oT, TT)
      }
      toEulerAngles() {
        const TT = LT.Zero();
        return this.toEulerAnglesToRef(TT), TT
      }
      toEulerAnglesToRef(TT) {
        const oT = this._z,
          IT = this._x,
          iT = this._y,
          zT = this._w,
          kT = iT * oT - IT * zT,
          WT = .4999999;
        if (kT < -WT) TT._y = 2 * Math.atan2(iT, zT), TT._x = Math.PI / 2, TT._z = 0, TT._isDirty = !0;
        else if (kT > WT) TT._y = 2 * Math.atan2(iT, zT), TT._x = -Math.PI / 2, TT._z = 0, TT._isDirty = !0;
        else {
          const WT = zT * zT,
            XT = oT * oT,
            BT = IT * IT,
            FT = iT * iT;
          TT._z = Math.atan2(2 * (IT * iT + oT * zT), -XT - BT + FT + WT), TT._x = Math.asin(-2 * kT), TT._y = Math.atan2(2 * (oT * IT + iT * zT), XT - BT - FT + WT), TT._isDirty = !0
        }
        return TT
      }
      toAlphaBetaGammaToRef(TT) {
        const oT = this._z,
          IT = this._x,
          iT = this._y,
          zT = this._w,
          kT = Math.sqrt(IT * IT + iT * iT),
          WT = Math.sqrt(oT * oT + zT * zT),
          XT = 2 * Math.atan2(kT, WT),
          BT = 2 * Math.atan2(oT, zT),
          FT = 2 * Math.atan2(iT, IT),
          ST = (BT + FT) / 2,
          DT = (BT - FT) / 2;
        return TT.set(DT, XT, ST), TT
      }
      toRotationMatrix(TT) {
        return KT.FromQuaternionToRef(this, TT), TT
      }
      fromRotationMatrix(TT) {
        return cT.FromRotationMatrixToRef(TT, this), this
      }
      dot(TT) {
        return this._x * TT._x + this._y * TT._y + this._z * TT._z + this._w * TT._w
      }
      toAxisAngle() {
        const TT = LT.Zero();
        return {
          axis: TT,
          angle: this.toAxisAngleToRef(TT)
        }
      }
      toAxisAngleToRef(TT) {
        let oT;
        const IT = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          iT = this._w;
        return IT > 0 ? (oT = 2 * Math.atan2(IT, iT), TT.set(this._x / IT, this._y / IT, this._z / IT)) : (oT = 0, TT.set(1, 0, 0)), oT
      }
      static FromRotationMatrix(TT) {
        const oT = new cT;
        return cT.FromRotationMatrixToRef(TT, oT), oT
      }
      static FromRotationMatrixToRef(TT, oT) {
        const IT = TT.m,
          iT = IT[0],
          zT = IT[4],
          kT = IT[8],
          WT = IT[1],
          XT = IT[5],
          BT = IT[9],
          FT = IT[2],
          ST = IT[6],
          DT = IT[10],
          LT = iT + XT + DT;
        let xT;
        return LT > 0 ? (xT = .5 / Math.sqrt(LT + 1), oT._w = .25 / xT, oT._x = (ST - BT) * xT, oT._y = (kT - FT) * xT, oT._z = (WT - zT) * xT, oT._isDirty = !0) : iT > XT && iT > DT ? (xT = 2 * Math.sqrt(1 + iT - XT - DT), oT._w = (ST - BT) / xT, oT._x = .25 * xT, oT._y = (zT + WT) / xT, oT._z = (kT + FT) / xT, oT._isDirty = !0) : XT > DT ? (xT = 2 * Math.sqrt(1 + XT - iT - DT), oT._w = (kT - FT) / xT, oT._x = (zT + WT) / xT, oT._y = .25 * xT, oT._z = (BT + ST) / xT, oT._isDirty = !0) : (xT = 2 * Math.sqrt(1 + DT - iT - XT), oT._w = (WT - zT) / xT, oT._x = (kT + FT) / xT, oT._y = (BT + ST) / xT, oT._z = .25 * xT, oT._isDirty = !0), oT
      }
      static Dot(TT, oT) {
        return TT._x * oT._x + TT._y * oT._y + TT._z * oT._z + TT._w * oT._w
      }
      static AreClose(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const iT = cT.Dot(TT, oT);
        return 1 - iT * iT <= IT
      }
      static SmoothToRef(TT, oT, IT, iT, zT) {
        let kT = 0 === iT ? 1 : IT / iT;
        return kT = (0, XT.Clamp)(kT, 0, 1), cT.SlerpToRef(TT, oT, kT, zT), zT
      }
      static Zero() {
        return new cT(0, 0, 0, 0)
      }
      static Inverse(TT) {
        return new cT(-TT._x, -TT._y, -TT._z, TT._w)
      }
      static InverseToRef(TT, oT) {
        return oT.set(-TT._x, -TT._y, -TT._z, TT._w), oT
      }
      static Identity() {
        return new cT(0, 0, 0, 1)
      }
      static IsIdentity(TT) {
        return TT && 0 === TT._x && 0 === TT._y && 0 === TT._z && 1 === TT._w
      }
      static RotationAxis(TT, oT) {
        return cT.RotationAxisToRef(TT, oT, new cT)
      }
      static RotationAxisToRef(TT, oT, IT) {
        IT._w = Math.cos(oT / 2);
        const iT = Math.sin(oT / 2) / TT.length();
        return IT._x = TT._x * iT, IT._y = TT._y * iT, IT._z = TT._z * iT, IT._isDirty = !0, IT
      }
      static FromArray(TT, oT) {
        return oT || (oT = 0), new cT(TT[oT], TT[oT + 1], TT[oT + 2], TT[oT + 3])
      }
      static FromArrayToRef(TT, oT, IT) {
        return IT._x = TT[oT], IT._y = TT[oT + 1], IT._z = TT[oT + 2], IT._w = TT[oT + 3], IT._isDirty = !0, IT
      }
      static FromFloatsToRef(TT, oT, IT, iT, zT) {
        return zT.S_(TT, oT, IT, iT), zT
      }
      static FromEulerAngles(TT, oT, IT) {
        const iT = new cT;
        return cT.RotationYawPitchRollToRef(oT, TT, IT, iT), iT
      }
      static FromEulerAnglesToRef(TT, oT, IT, iT) {
        return cT.RotationYawPitchRollToRef(oT, TT, IT, iT), iT
      }
      static FromEulerVector(TT) {
        const oT = new cT;
        return cT.RotationYawPitchRollToRef(TT._y, TT._x, TT._z, oT), oT
      }
      static FromEulerVectorToRef(TT, oT) {
        return cT.RotationYawPitchRollToRef(TT._y, TT._x, TT._z, oT), oT
      }
      static FromUnitVectorsToRef(TT, oT, IT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : iT.d;
        const kT = LT.Dot(TT, oT) + 1;
        return kT < zT ? Math.abs(TT.x) > Math.abs(TT.z) ? IT.set(-TT.y, TT.x, 0, 0) : IT.set(0, -TT.z, TT.y, 0) : (LT.CrossToRef(TT, oT, rT.sc[0]), IT.set(rT.sc[0].x, rT.sc[0].y, rT.sc[0].z, kT)), IT.normalize()
      }
      static RotationYawPitchRoll(TT, oT, IT) {
        const iT = new cT;
        return cT.RotationYawPitchRollToRef(TT, oT, IT, iT), iT
      }
      static RotationYawPitchRollToRef(TT, oT, IT, iT) {
        const zT = .5 * IT,
          kT = .5 * oT,
          WT = .5 * TT,
          XT = Math.sin(zT),
          BT = Math.cos(zT),
          FT = Math.sin(kT),
          ST = Math.cos(kT),
          DT = Math.sin(WT),
          LT = Math.cos(WT);
        return iT._x = LT * FT * BT + DT * ST * XT, iT._y = DT * ST * BT - LT * FT * XT, iT._z = LT * ST * XT - DT * FT * BT, iT._w = LT * ST * BT + DT * FT * XT, iT._isDirty = !0, iT
      }
      static RotationAlphaBetaGamma(TT, oT, IT) {
        const iT = new cT;
        return cT.RotationAlphaBetaGammaToRef(TT, oT, IT, iT), iT
      }
      static RotationAlphaBetaGammaToRef(TT, oT, IT, iT) {
        const zT = .5 * (IT + TT),
          kT = .5 * (IT - TT),
          WT = .5 * oT;
        return iT._x = Math.cos(kT) * Math.sin(WT), iT._y = Math.sin(kT) * Math.sin(WT), iT._z = Math.sin(zT) * Math.cos(WT), iT._w = Math.cos(zT) * Math.cos(WT), iT._isDirty = !0, iT
      }
      static RotationQuaternionFromAxis(TT, oT, IT) {
        const iT = new cT(0, 0, 0, 0);
        return cT.RotationQuaternionFromAxisToRef(TT, oT, IT, iT), iT
      }
      static RotationQuaternionFromAxisToRef(TT, oT, IT, iT) {
        const zT = MT.Matrix[0];
        return TT = TT.normalizeToRef(MT.sc[0]), oT = oT.normalizeToRef(MT.sc[1]), IT = IT.normalizeToRef(MT.sc[2]), KT.FromXYZAxesToRef(TT, oT, IT, zT), cT.FromRotationMatrixToRef(zT, iT), iT
      }
      static FromLookDirectionLH(TT, oT) {
        const IT = new cT;
        return cT.FromLookDirectionLHToRef(TT, oT, IT), IT
      }
      static FromLookDirectionLHToRef(TT, oT, IT) {
        const iT = MT.Matrix[0];
        return KT.LookDirectionLHToRef(TT, oT, iT), cT.FromRotationMatrixToRef(iT, IT), IT
      }
      static FromLookDirectionRH(TT, oT) {
        const IT = new cT;
        return cT.FromLookDirectionRHToRef(TT, oT, IT), IT
      }
      static FromLookDirectionRHToRef(TT, oT, IT) {
        const iT = MT.Matrix[0];
        return KT.LookDirectionRHToRef(TT, oT, iT), cT.FromRotationMatrixToRef(iT, IT)
      }
      static Slerp(TT, oT, IT) {
        const iT = cT.Identity();
        return cT.SlerpToRef(TT, oT, IT, iT), iT
      }
      static SlerpToRef(TT, oT, IT, iT) {
        let zT, kT, WT = TT._x * oT._x + TT._y * oT._y + TT._z * oT._z + TT._w * oT._w,
          XT = !1;
        if (WT < 0 && (XT = !0, WT = -WT), WT > .999999) kT = 1 - IT, zT = XT ? -IT : IT;
        else {
          const TT = Math.acos(WT),
            oT = 1 / Math.sin(TT);
          kT = Math.sin((1 - IT) * TT) * oT, zT = XT ? -Math.sin(IT * TT) * oT : Math.sin(IT * TT) * oT
        }
        return iT._x = kT * TT._x + zT * oT._x, iT._y = kT * TT._y + zT * oT._y, iT._z = kT * TT._z + zT * oT._z, iT._w = kT * TT._w + zT * oT._w, iT._isDirty = !0, iT
      }
      static Hermite(TT, oT, IT, iT, zT) {
        const kT = zT * zT,
          WT = zT * kT,
          XT = 2 * WT - 3 * kT + 1,
          BT = -2 * WT + 3 * kT,
          FT = WT - 2 * kT + zT,
          ST = WT - kT,
          DT = TT._x * XT + IT._x * BT + oT._x * FT + iT._x * ST,
          LT = TT._y * XT + IT._y * BT + oT._y * FT + iT._y * ST,
          xT = TT._z * XT + IT._z * BT + oT._z * FT + iT._z * ST,
          KT = TT._w * XT + IT._w * BT + oT._w * FT + iT._w * ST;
        return new cT(DT, LT, xT, KT)
      }
      static Hermite1stDerivative(TT, oT, IT, iT, zT) {
        const kT = new cT;
        return this.Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT), kT
      }
      static Hermite1stDerivativeToRef(TT, oT, IT, iT, zT, kT) {
        const WT = zT * zT;
        return kT._x = 6 * (WT - zT) * TT._x + (3 * WT - 4 * zT + 1) * oT._x + 6 * (-WT + zT) * IT._x + (3 * WT - 2 * zT) * iT._x, kT._y = 6 * (WT - zT) * TT._y + (3 * WT - 4 * zT + 1) * oT._y + 6 * (-WT + zT) * IT._y + (3 * WT - 2 * zT) * iT._y, kT._z = 6 * (WT - zT) * TT._z + (3 * WT - 4 * zT + 1) * oT._z + 6 * (-WT + zT) * IT._z + (3 * WT - 2 * zT) * iT._z, kT._w = 6 * (WT - zT) * TT._w + (3 * WT - 4 * zT + 1) * oT._w + 6 * (-WT + zT) * IT._w + (3 * WT - 2 * zT) * iT._w, kT._isDirty = !0, kT
      }
      static Normalize(TT) {
        const oT = cT.Zero();
        return cT.NormalizeToRef(TT, oT), oT
      }
      static NormalizeToRef(TT, oT) {
        return TT.normalizeToRef(oT), oT
      }
      static Clamp(TT, oT, IT) {
        const iT = new cT;
        return cT.ClampToRef(TT, oT, IT, iT), iT
      }
      static ClampToRef(TT, oT, IT, iT) {
        return iT.S_((0, XT.Clamp)(TT.x, oT.x, IT.x), (0, XT.Clamp)(TT.y, oT.y, IT.y), (0, XT.Clamp)(TT.z, oT.z, IT.z), (0, XT.Clamp)(TT.w, oT.w, IT.w))
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new cT((0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).S_((0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT), (0, XT.RandomRange)(TT, oT))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(TT, oT) {
        return Math.sqrt(cT.DistanceSquared(TT, oT))
      }
      static DistanceSquared(TT, oT) {
        const IT = TT.x - oT.x,
          iT = TT.y - oT.y,
          zT = TT.z - oT.z,
          kT = TT.w - oT.w;
        return IT * IT + iT * iT + zT * zT + kT * kT
      }
      static Center(TT, oT) {
        return cT.CenterToRef(TT, oT, cT.Zero())
      }
      static CenterToRef(TT, oT, IT) {
        return IT.S_((TT.x + oT.x) / 2, (TT.y + oT.y) / 2, (TT.z + oT.z) / 2, (TT.w + oT.w) / 2)
      }
    }
    cT._V8PerformanceHack = new cT(.5, .5, .5, .5);
    class KT {
      static get Use64Bits() {
        return kT.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = BT.m._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = TT, this._isIdentity3x2 = TT || IT, this._isIdentityDirty = !this._isIdentity && oT, this._isIdentity3x2Dirty = !this._isIdentity3x2 && iT
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, kT.c.MatrixTrackPrecisionChange && kT.c.MatrixTrackedMatrices.push(this), this._m = new kT.c.MatrixCurrentType(16), this.markAsUpdated()
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
          oT = TT[0],
          IT = TT[1],
          iT = TT[2],
          zT = TT[3],
          kT = TT[4],
          WT = TT[5],
          XT = TT[6],
          BT = TT[7],
          FT = TT[8],
          ST = TT[9],
          DT = TT[10],
          LT = TT[11],
          xT = TT[12],
          cT = TT[13],
          KT = TT[14],
          MT = TT[15],
          rT = DT * MT - KT * LT,
          AT = ST * MT - cT * LT,
          gT = ST * KT - cT * DT,
          hT = FT * MT - xT * LT,
          wT = FT * KT - DT * xT,
          mT = FT * cT - xT * ST;
        return oT * +(WT * rT - XT * AT + BT * gT) + IT * -(kT * rT - XT * hT + BT * wT) + iT * +(kT * AT - WT * hT + BT * mT) + zT * -(kT * gT - WT * wT + XT * mT)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!TT) return this._m;
        const IT = this._m;
        for (let iT = 0; iT < 16; iT++) TT[oT + iT] = IT[iT];
        return this
      }
      bIT() {
        return this._m
      }
      joT(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return KT.FromArrayToRef(TT, oT, this)
      }
      S_() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        return KT.FromArrayToRef(oT, 0, this)
      }
      set() {
        const TT = this._m;
        for (let oT = 0; oT < 16; oT++) TT[oT] = oT < 0 || arguments.length <= oT ? void 0 : arguments[oT];
        return this.markAsUpdated(), this
      }
      W8(TT) {
        const oT = this._m;
        for (let IT = 0; IT < 16; IT++) oT[IT] = TT;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return KT.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(TT) {
        const oT = new KT;
        return this.addToRef(TT, oT), oT
      }
      addToRef(TT, oT) {
        const IT = this._m,
          iT = oT._m,
          zT = TT.m;
        for (let kT = 0; kT < 16; kT++) iT[kT] = IT[kT] + zT[kT];
        return oT.markAsUpdated(), oT
      }
      addToSelf(TT) {
        const oT = this._m,
          IT = TT.m;
        return oT[0] += IT[0], oT[1] += IT[1], oT[2] += IT[2], oT[3] += IT[3], oT[4] += IT[4], oT[5] += IT[5], oT[6] += IT[6], oT[7] += IT[7], oT[8] += IT[8], oT[9] += IT[9], oT[10] += IT[10], oT[11] += IT[11], oT[12] += IT[12], oT[13] += IT[13], oT[14] += IT[14], oT[15] += IT[15], this.markAsUpdated(), this
      }
      addInPlace(TT) {
        const oT = this._m,
          IT = TT.m;
        for (let iT = 0; iT < 16; iT++) oT[iT] += IT[iT];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const TT = this._m;
        for (let oT = 0; oT < 16; oT++) TT[oT] += oT < 0 || arguments.length <= oT ? void 0 : arguments[oT];
        return this.markAsUpdated(), this
      }
      subtract(TT) {
        const oT = this._m,
          IT = TT.m;
        for (let iT = 0; iT < 16; iT++) oT[iT] -= IT[iT];
        return this.markAsUpdated(), this
      }
      subtractToRef(TT, oT) {
        const IT = this._m,
          iT = TT.m,
          zT = oT._m;
        for (let kT = 0; kT < 16; kT++) zT[kT] = IT[kT] - iT[kT];
        return oT.markAsUpdated(), oT
      }
      SiT(TT) {
        const oT = this._m,
          IT = TT.m;
        for (let iT = 0; iT < 16; iT++) oT[iT] -= IT[iT];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        return this.subtractFromFloatsToRef(...oT, new KT)
      }
      subtractFromFloatsToRef() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        const iT = oT.pop(),
          zT = this._m,
          kT = iT._m,
          WT = oT;
        for (let XT = 0; XT < 16; XT++) kT[XT] = zT[XT] - WT[XT];
        return iT.markAsUpdated(), iT
      }
      invertToRef(TT) {
        return !0 === this._isIdentity ? (KT.IdentityToRef(TT), TT) : ((0, BT.g)(this, TT.bIT()) ? TT.markAsUpdated() : TT.SIT(this), TT)
      }
      addAtIndex(TT, oT) {
        return this._m[TT] += oT, this.markAsUpdated(), this
      }
      multiplyAtIndex(TT, oT) {
        return this._m[TT] *= oT, this.markAsUpdated(), this
      }
      setTranslationFromFloats(TT, oT, IT) {
        return this._m[12] = TT, this._m[13] = oT, this._m[14] = IT, this.markAsUpdated(), this
      }
      addTranslationFromFloats(TT, oT, IT) {
        return this._m[12] += TT, this._m[13] += oT, this._m[14] += IT, this.markAsUpdated(), this
      }
      setTranslation(TT) {
        return this.setTranslationFromFloats(TT._x, TT._y, TT._z)
      }
      getTranslation() {
        return new LT(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(TT) {
        return TT.x = this._m[12], TT.y = this._m[13], TT.z = this._m[14], TT
      }
      removeRotationAndScaling() {
        const TT = this.m;
        return KT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, TT[12], TT[13], TT[14], TT[15], this), this._updateIdentityStatus(0 === TT[12] && 0 === TT[13] && 0 === TT[14] && 1 === TT[15]), this
      }
      SIT(TT) {
        TT.copyToArray(this._m);
        const oT = TT;
        return this.updateFlag = oT.updateFlag, this._updateIdentityStatus(oT._isIdentity, oT._isIdentityDirty, oT._isIdentity3x2, oT._isIdentity3x2Dirty), this
      }
      copyToArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, BT.d)(this, TT, oT), this
      }
      multiply(TT) {
        const oT = new KT;
        return this.multiplyToRef(TT, oT), oT
      }
      multiplyInPlace(TT) {
        const oT = this._m,
          IT = TT.m;
        for (let iT = 0; iT < 16; iT++) oT[iT] *= IT[iT];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const TT = this._m;
        for (let oT = 0; oT < 16; oT++) TT[oT] *= oT < 0 || arguments.length <= oT ? void 0 : arguments[oT];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        const iT = oT.pop(),
          zT = this._m,
          kT = iT._m,
          WT = oT;
        for (let XT = 0; XT < 16; XT++) kT[XT] = zT[XT] * WT[XT];
        return iT.markAsUpdated(), iT
      }
      multiplyToRef(TT, oT) {
        return this._isIdentity ? (oT.SIT(TT), oT) : TT._isIdentity ? (oT.SIT(this), oT) : (this.multiplyToArray(TT, oT._m, 0), oT.markAsUpdated(), oT)
      }
      multiplyToArray(TT, oT, IT) {
        return (0, BT.o)(this, TT, oT, IT), this
      }
      divide(TT) {
        return this.divideToRef(TT, new KT)
      }
      divideToRef(TT, oT) {
        const IT = this._m,
          iT = TT.m,
          zT = oT._m;
        for (let kT = 0; kT < 16; kT++) zT[kT] = IT[kT] / iT[kT];
        return oT.markAsUpdated(), oT
      }
      divideInPlace(TT) {
        const oT = this._m,
          IT = TT.m;
        for (let iT = 0; iT < 16; iT++) oT[iT] /= IT[iT];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(TT) {
        const oT = this._m,
          IT = TT.m;
        for (let iT = 0; iT < 16; iT++) oT[iT] = Math.min(oT[iT], IT[iT]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const TT = this._m;
        for (let oT = 0; oT < 16; oT++) TT[oT] = Math.min(TT[oT], oT < 0 || arguments.length <= oT ? void 0 : arguments[oT]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(TT) {
        const oT = this._m,
          IT = TT.m;
        for (let iT = 0; iT < 16; iT++) oT[iT] = Math.max(oT[iT], IT[iT]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const TT = this._m;
        for (let oT = 0; oT < 16; oT++) TT[oT] = Math.max(TT[oT], oT < 0 || arguments.length <= oT ? void 0 : arguments[oT]);
        return this.markAsUpdated(), this
      }
      ri() {
        return this.negateToRef(new KT)
      }
      negateInPlace() {
        const TT = this._m;
        for (let oT = 0; oT < 16; oT++) TT[oT] = -TT[oT];
        return this.markAsUpdated(), this
      }
      negateToRef(TT) {
        const oT = this._m,
          IT = TT._m;
        for (let iT = 0; iT < 16; iT++) IT[iT] = -oT[iT];
        return TT.markAsUpdated(), TT
      }
      equals(TT) {
        const oT = TT;
        if (!oT) return !1;
        if ((this._isIdentity || oT._isIdentity) && !this._isIdentityDirty && !oT._isIdentityDirty) return this._isIdentity && oT._isIdentity;
        const IT = this.m,
          iT = oT.m;
        return IT[0] === iT[0] && IT[1] === iT[1] && IT[2] === iT[2] && IT[3] === iT[3] && IT[4] === iT[4] && IT[5] === iT[5] && IT[6] === iT[6] && IT[7] === iT[7] && IT[8] === iT[8] && IT[9] === iT[9] && IT[10] === iT[10] && IT[11] === iT[11] && IT[12] === iT[12] && IT[13] === iT[13] && IT[14] === iT[14] && IT[15] === iT[15]
      }
      equalsWithEpsilon(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = this._m,
          iT = TT.m;
        for (let zT = 0; zT < 16; zT++)
          if (!(0, XT.WithinEpsilon)(IT[zT], iT[zT], oT)) return !1;
        return !0
      }
      eWT() {
        const TT = this._m;
        for (let oT = 0; oT < 16; oT++)
          if (TT[oT] != (oT < 0 || arguments.length <= oT ? void 0 : arguments[oT])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new KT)
      }
      floorToRef(TT) {
        const oT = this._m,
          IT = TT._m;
        for (let iT = 0; iT < 16; iT++) IT[iT] = Math.floor(oT[iT]);
        return TT.markAsUpdated(), TT
      }
      fract() {
        return this.fractToRef(new KT)
      }
      fractToRef(TT) {
        const oT = this._m,
          IT = TT._m;
        for (let iT = 0; iT < 16; iT++) IT[iT] = oT[iT] - Math.floor(oT[iT]);
        return TT.markAsUpdated(), TT
      }
      clone() {
        const TT = new KT;
        return TT.SIT(this), TT
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let TT = ST(this._m[0]);
        for (let oT = 1; oT < 16; oT++) TT = 397 * TT ^ ST(this._m[oT]);
        return TT
      }
      decomposeToTransformNode(TT) {
        return TT.rotationQuaternion = TT.rotationQuaternion || new cT, this.decompose(TT.ti, TT.rotationQuaternion, TT.position)
      }
      decompose(TT, oT, IT, iT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return IT && IT.W8(0), TT && TT.W8(1), oT && oT.S_(0, 0, 0, 1), !0;
        const kT = this._m;
        if (IT && IT.S_(kT[12], kT[13], kT[14]), (TT = TT || MT.sc[0]).x = Math.sqrt(kT[0] * kT[0] + kT[1] * kT[1] + kT[2] * kT[2]), TT.y = Math.sqrt(kT[4] * kT[4] + kT[5] * kT[5] + kT[6] * kT[6]), TT.z = Math.sqrt(kT[8] * kT[8] + kT[9] * kT[9] + kT[10] * kT[10]), iT) {
          const oT = (zT ? iT.absoluteScaling.x : iT.ti.x) < 0 ? -1 : 1,
            IT = (zT ? iT.absoluteScaling.y : iT.ti.y) < 0 ? -1 : 1,
            kT = (zT ? iT.absoluteScaling.z : iT.ti.z) < 0 ? -1 : 1;
          TT.x *= oT, TT.y *= IT, TT.z *= kT
        } else this.determinant() <= 0 && (TT.y *= -1);
        if (0 === TT._x || 0 === TT._y || 0 === TT._z) return oT && oT.S_(0, 0, 0, 1), !1;
        if (oT) {
          const IT = 1 / TT._x,
            iT = 1 / TT._y,
            zT = 1 / TT._z;
          KT.FromValuesToRef(kT[0] * IT, kT[1] * IT, kT[2] * IT, 0, kT[4] * iT, kT[5] * iT, kT[6] * iT, 0, kT[8] * zT, kT[9] * zT, kT[10] * zT, 0, 0, 0, 0, 1, MT.Matrix[0]), cT.FromRotationMatrixToRef(MT.Matrix[0], oT)
        }
        return !0
      }
      getRow(TT) {
        if (TT < 0 || TT > 3) return null;
        const oT = 4 * TT;
        return new xT(this._m[oT + 0], this._m[oT + 1], this._m[oT + 2], this._m[oT + 3])
      }
      getRowToRef(TT, oT) {
        if (TT >= 0 && TT <= 3) {
          const IT = 4 * TT;
          oT.x = this._m[IT + 0], oT.y = this._m[IT + 1], oT.z = this._m[IT + 2], oT.w = this._m[IT + 3]
        }
        return oT
      }
      setRow(TT, oT) {
        return this.setRowFromFloats(TT, oT.x, oT.y, oT.z, oT.w)
      }
      transpose() {
        const TT = new KT;
        return KT.TransposeToRef(this, TT), TT
      }
      transposeToRef(TT) {
        return KT.TransposeToRef(this, TT), TT
      }
      setRowFromFloats(TT, oT, IT, iT, zT) {
        if (TT < 0 || TT > 3) return this;
        const kT = 4 * TT;
        return this._m[kT + 0] = oT, this._m[kT + 1] = IT, this._m[kT + 2] = iT, this._m[kT + 3] = zT, this.markAsUpdated(), this
      }
      scale(TT) {
        const oT = new KT;
        return this.scaleToRef(TT, oT), oT
      }
      scaleToRef(TT, oT) {
        for (let IT = 0; IT < 16; IT++) oT._m[IT] = this._m[IT] * TT;
        return oT.markAsUpdated(), oT
      }
      scaleAndAddToRef(TT, oT) {
        for (let IT = 0; IT < 16; IT++) oT._m[IT] += this._m[IT] * TT;
        return oT.markAsUpdated(), oT
      }
      scaleInPlace(TT) {
        const oT = this._m;
        for (let IT = 0; IT < 16; IT++) oT[IT] *= TT;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(TT) {
        const oT = MT.Matrix[0];
        this.invertToRef(oT), oT.transposeToRef(TT);
        const IT = TT._m;
        return KT.FromValuesToRef(IT[0], IT[1], IT[2], 0, IT[4], IT[5], IT[6], 0, IT[8], IT[9], IT[10], 0, 0, 0, 0, 1, TT), TT
      }
      getRotationMatrix() {
        const TT = new KT;
        return this.getRotationMatrixToRef(TT), TT
      }
      getRotationMatrixToRef(TT) {
        const oT = MT.sc[0];
        if (!this.decompose(oT)) return KT.IdentityToRef(TT), TT;
        const IT = this._m,
          iT = 1 / oT._x,
          zT = 1 / oT._y,
          kT = 1 / oT._z;
        return KT.FromValuesToRef(IT[0] * iT, IT[1] * iT, IT[2] * iT, 0, IT[4] * zT, IT[5] * zT, IT[6] * zT, 0, IT[8] * kT, IT[9] * kT, IT[10] * kT, 0, 0, 0, 0, 1, TT), TT
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
        return this.multiplyToRef(AT, this), this
      }
      static FromArray(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const IT = new KT;
        return KT.FromArrayToRef(TT, oT, IT), IT
      }
      static FromArrayToRef(TT, oT, IT) {
        for (let iT = 0; iT < 16; iT++) IT._m[iT] = TT[iT + oT];
        return IT.markAsUpdated(), IT
      }
      static FromFloat32ArrayToRefScaled(TT, oT, IT, iT) {
        return iT._m[0] = TT[0 + oT] * IT, iT._m[1] = TT[1 + oT] * IT, iT._m[2] = TT[2 + oT] * IT, iT._m[3] = TT[3 + oT] * IT, iT._m[4] = TT[4 + oT] * IT, iT._m[5] = TT[5 + oT] * IT, iT._m[6] = TT[6 + oT] * IT, iT._m[7] = TT[7 + oT] * IT, iT._m[8] = TT[8 + oT] * IT, iT._m[9] = TT[9 + oT] * IT, iT._m[10] = TT[10 + oT] * IT, iT._m[11] = TT[11 + oT] * IT, iT._m[12] = TT[12 + oT] * IT, iT._m[13] = TT[13 + oT] * IT, iT._m[14] = TT[14 + oT] * IT, iT._m[15] = TT[15 + oT] * IT, iT.markAsUpdated(), iT
      }
      static get IdentityReadOnly() {
        return KT._IdentityReadOnly
      }
      static FromValuesToRef(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, KT, MT) {
        const rT = MT._m;
        rT[0] = TT, rT[1] = oT, rT[2] = IT, rT[3] = iT, rT[4] = zT, rT[5] = kT, rT[6] = WT, rT[7] = XT, rT[8] = BT, rT[9] = FT, rT[10] = ST, rT[11] = DT, rT[12] = LT, rT[13] = xT, rT[14] = cT, rT[15] = KT, MT.markAsUpdated()
      }
      static FromValues(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT, xT, cT, MT) {
        const rT = new KT,
          AT = rT._m;
        return AT[0] = TT, AT[1] = oT, AT[2] = IT, AT[3] = iT, AT[4] = zT, AT[5] = kT, AT[6] = WT, AT[7] = XT, AT[8] = BT, AT[9] = FT, AT[10] = ST, AT[11] = DT, AT[12] = LT, AT[13] = xT, AT[14] = cT, AT[15] = MT, rT.markAsUpdated(), rT
      }
      static Compose(TT, oT, IT) {
        const iT = new KT;
        return KT.ComposeToRef(TT, oT, IT, iT), iT
      }
      static ComposeToRef(TT, oT, IT, iT) {
        const zT = iT._m,
          kT = oT._x,
          WT = oT._y,
          XT = oT._z,
          BT = oT._w,
          FT = kT + kT,
          ST = WT + WT,
          DT = XT + XT,
          LT = kT * FT,
          xT = kT * ST,
          cT = kT * DT,
          KT = WT * ST,
          MT = WT * DT,
          rT = XT * DT,
          AT = BT * FT,
          gT = BT * ST,
          hT = BT * DT,
          wT = TT._x,
          mT = TT._y,
          eT = TT._z;
        return zT[0] = (1 - (KT + rT)) * wT, zT[1] = (xT + hT) * wT, zT[2] = (cT - gT) * wT, zT[3] = 0, zT[4] = (xT - hT) * mT, zT[5] = (1 - (LT + rT)) * mT, zT[6] = (MT + AT) * mT, zT[7] = 0, zT[8] = (cT + gT) * eT, zT[9] = (MT - AT) * eT, zT[10] = (1 - (LT + KT)) * eT, zT[11] = 0, zT[12] = IT._x, zT[13] = IT._y, zT[14] = IT._z, zT[15] = 1, iT.markAsUpdated(), iT
      }
      static Identity() {
        const TT = KT.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return TT._updateIdentityStatus(!0), TT
      }
      static IdentityToRef(TT) {
        return KT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, TT), TT._updateIdentityStatus(!0), TT
      }
      static Zero() {
        const TT = KT.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return TT._updateIdentityStatus(!1), TT
      }
      static RotationX(TT) {
        const oT = new KT;
        return KT.RotationXToRef(TT, oT), oT
      }
      static Invert(TT) {
        const oT = new KT;
        return TT.invertToRef(oT), oT
      }
      static RotationXToRef(TT, oT) {
        const IT = Math.sin(TT),
          iT = Math.cos(TT);
        return KT.FromValuesToRef(1, 0, 0, 0, 0, iT, IT, 0, 0, -IT, iT, 0, 0, 0, 0, 1, oT), oT._updateIdentityStatus(1 === iT && 0 === IT), oT
      }
      static RotationY(TT) {
        const oT = new KT;
        return KT.RotationYToRef(TT, oT), oT
      }
      static RotationYToRef(TT, oT) {
        const IT = Math.sin(TT),
          iT = Math.cos(TT);
        return KT.FromValuesToRef(iT, 0, -IT, 0, 0, 1, 0, 0, IT, 0, iT, 0, 0, 0, 0, 1, oT), oT._updateIdentityStatus(1 === iT && 0 === IT), oT
      }
      static RotationZ(TT) {
        const oT = new KT;
        return KT.RotationZToRef(TT, oT), oT
      }
      static RotationZToRef(TT, oT) {
        const IT = Math.sin(TT),
          iT = Math.cos(TT);
        return KT.FromValuesToRef(iT, IT, 0, 0, -IT, iT, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, oT), oT._updateIdentityStatus(1 === iT && 0 === IT), oT
      }
      static RotationAxis(TT, oT) {
        const IT = new KT;
        return KT.RotationAxisToRef(TT, oT, IT), IT
      }
      static RotationAxisToRef(TT, oT, IT) {
        const iT = Math.sin(-oT),
          zT = Math.cos(-oT),
          kT = 1 - zT;
        TT = TT.normalizeToRef(MT.sc[0]);
        const WT = IT._m;
        return WT[0] = TT._x * TT._x * kT + zT, WT[1] = TT._x * TT._y * kT - TT._z * iT, WT[2] = TT._x * TT._z * kT + TT._y * iT, WT[3] = 0, WT[4] = TT._y * TT._x * kT + TT._z * iT, WT[5] = TT._y * TT._y * kT + zT, WT[6] = TT._y * TT._z * kT - TT._x * iT, WT[7] = 0, WT[8] = TT._z * TT._x * kT - TT._y * iT, WT[9] = TT._z * TT._y * kT + TT._x * iT, WT[10] = TT._z * TT._z * kT + zT, WT[11] = 0, WT[12] = 0, WT[13] = 0, WT[14] = 0, WT[15] = 1, IT.markAsUpdated(), IT
      }
      static RotationAlignToRef(TT, oT, IT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const kT = LT.Dot(oT, TT),
          WT = IT._m;
        if (kT < -1 + iT.d) WT[0] = -1, WT[1] = 0, WT[2] = 0, WT[3] = 0, WT[4] = 0, WT[5] = zT ? 1 : -1, WT[6] = 0, WT[7] = 0, WT[8] = 0, WT[9] = 0, WT[10] = zT ? -1 : 1, WT[11] = 0;
        else {
          const IT = LT.Cross(oT, TT),
            iT = 1 / (1 + kT);
          WT[0] = IT._x * IT._x * iT + kT, WT[1] = IT._y * IT._x * iT - IT._z, WT[2] = IT._z * IT._x * iT + IT._y, WT[3] = 0, WT[4] = IT._x * IT._y * iT + IT._z, WT[5] = IT._y * IT._y * iT + kT, WT[6] = IT._z * IT._y * iT - IT._x, WT[7] = 0, WT[8] = IT._x * IT._z * iT - IT._y, WT[9] = IT._y * IT._z * iT + IT._x, WT[10] = IT._z * IT._z * iT + kT, WT[11] = 0
        }
        return WT[12] = 0, WT[13] = 0, WT[14] = 0, WT[15] = 1, IT.markAsUpdated(), IT
      }
      static RotationYawPitchRoll(TT, oT, IT) {
        const iT = new KT;
        return KT.RotationYawPitchRollToRef(TT, oT, IT, iT), iT
      }
      static RotationYawPitchRollToRef(TT, oT, IT, iT) {
        return cT.RotationYawPitchRollToRef(TT, oT, IT, MT.Quaternion[0]), MT.Quaternion[0].toRotationMatrix(iT), iT
      }
      static Scaling(TT, oT, IT) {
        const iT = new KT;
        return KT.ScalingToRef(TT, oT, IT, iT), iT
      }
      static ScalingToRef(TT, oT, IT, iT) {
        return KT.FromValuesToRef(TT, 0, 0, 0, 0, oT, 0, 0, 0, 0, IT, 0, 0, 0, 0, 1, iT), iT._updateIdentityStatus(1 === TT && 1 === oT && 1 === IT), iT
      }
      static Translation(TT, oT, IT) {
        const iT = new KT;
        return KT.TranslationToRef(TT, oT, IT, iT), iT
      }
      static TranslationToRef(TT, oT, IT, iT) {
        return KT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, TT, oT, IT, 1, iT), iT._updateIdentityStatus(0 === TT && 0 === oT && 0 === IT), iT
      }
      static Lerp(TT, oT, IT) {
        const iT = new KT;
        return KT.LerpToRef(TT, oT, IT, iT), iT
      }
      static LerpToRef(TT, oT, IT, iT) {
        const zT = iT._m,
          kT = TT.m,
          WT = oT.m;
        for (let XT = 0; XT < 16; XT++) zT[XT] = kT[XT] * (1 - IT) + WT[XT] * IT;
        return iT.markAsUpdated(), iT
      }
      static DecomposeLerp(TT, oT, IT) {
        const iT = new KT;
        return KT.DecomposeLerpToRef(TT, oT, IT, iT), iT
      }
      static DecomposeLerpToRef(TT, oT, IT, iT) {
        const zT = MT.sc[0],
          kT = MT.Quaternion[0],
          WT = MT.sc[1];
        TT.decompose(zT, kT, WT);
        const XT = MT.sc[2],
          BT = MT.Quaternion[1],
          FT = MT.sc[3];
        oT.decompose(XT, BT, FT);
        const ST = MT.sc[4];
        LT.LerpToRef(zT, XT, IT, ST);
        const DT = MT.Quaternion[2];
        cT.SlerpToRef(kT, BT, IT, DT);
        const xT = MT.sc[5];
        return LT.LerpToRef(WT, FT, IT, xT), KT.ComposeToRef(ST, DT, xT, iT), iT
      }
      static LookAtLH(TT, oT, IT) {
        const iT = new KT;
        return KT.LookAtLHToRef(TT, oT, IT, iT), iT
      }
      static LookAtLHToRef(TT, oT, IT, iT) {
        const zT = MT.sc[0],
          kT = MT.sc[1],
          WT = MT.sc[2];
        oT.subtractToRef(TT, WT), WT.normalize(), LT.CrossToRef(IT, WT, zT);
        const XT = zT.lengthSquared();
        0 === XT ? zT.x = 1 : zT.normalizeFromLength(Math.sqrt(XT)), LT.CrossToRef(WT, zT, kT), kT.normalize();
        const BT = -LT.Dot(zT, TT),
          FT = -LT.Dot(kT, TT),
          ST = -LT.Dot(WT, TT);
        return KT.FromValuesToRef(zT._x, kT._x, WT._x, 0, zT._y, kT._y, WT._y, 0, zT._z, kT._z, WT._z, 0, BT, FT, ST, 1, iT), iT
      }
      static LookAtRH(TT, oT, IT) {
        const iT = new KT;
        return KT.LookAtRHToRef(TT, oT, IT, iT), iT
      }
      static LookAtRHToRef(TT, oT, IT, iT) {
        const zT = MT.sc[0],
          kT = MT.sc[1],
          WT = MT.sc[2];
        TT.subtractToRef(oT, WT), WT.normalize(), LT.CrossToRef(IT, WT, zT);
        const XT = zT.lengthSquared();
        0 === XT ? zT.x = 1 : zT.normalizeFromLength(Math.sqrt(XT)), LT.CrossToRef(WT, zT, kT), kT.normalize();
        const BT = -LT.Dot(zT, TT),
          FT = -LT.Dot(kT, TT),
          ST = -LT.Dot(WT, TT);
        return KT.FromValuesToRef(zT._x, kT._x, WT._x, 0, zT._y, kT._y, WT._y, 0, zT._z, kT._z, WT._z, 0, BT, FT, ST, 1, iT), iT
      }
      static LookDirectionLH(TT, oT) {
        const IT = new KT;
        return KT.LookDirectionLHToRef(TT, oT, IT), IT
      }
      static LookDirectionLHToRef(TT, oT, IT) {
        const iT = MT.sc[0];
        iT.SIT(TT), iT.scaleInPlace(-1);
        const zT = MT.sc[1];
        return LT.CrossToRef(oT, iT, zT), KT.FromValuesToRef(zT._x, zT._y, zT._z, 0, oT._x, oT._y, oT._z, 0, iT._x, iT._y, iT._z, 0, 0, 0, 0, 1, IT), IT
      }
      static LookDirectionRH(TT, oT) {
        const IT = new KT;
        return KT.LookDirectionRHToRef(TT, oT, IT), IT
      }
      static LookDirectionRHToRef(TT, oT, IT) {
        const iT = MT.sc[2];
        return LT.CrossToRef(oT, TT, iT), KT.FromValuesToRef(iT._x, iT._y, iT._z, 0, oT._x, oT._y, oT._z, 0, TT._x, TT._y, TT._z, 0, 0, 0, 0, 1, IT), IT
      }
      static OrthoLH(TT, oT, IT, iT, zT) {
        const kT = new KT;
        return KT.OrthoLHToRef(TT, oT, IT, iT, kT, zT), kT
      }
      static OrthoLHToRef(TT, oT, IT, iT, zT, kT) {
        const WT = 2 / TT,
          XT = 2 / oT,
          BT = 2 / (iT - IT),
          FT = -(iT + IT) / (iT - IT);
        return KT.FromValuesToRef(WT, 0, 0, 0, 0, XT, 0, 0, 0, 0, BT, 0, 0, 0, FT, 1, zT), kT && zT.multiplyToRef(AT, zT), zT._updateIdentityStatus(1 === WT && 1 === XT && 1 === BT && 0 === FT), zT
      }
      static OrthoOffCenterLH(TT, oT, IT, iT, zT, kT, WT) {
        const XT = new KT;
        return KT.OrthoOffCenterLHToRef(TT, oT, IT, iT, zT, kT, XT, WT), XT
      }
      static OrthoOffCenterLHToRef(TT, oT, IT, iT, zT, kT, WT, XT) {
        const BT = 2 / (oT - TT),
          FT = 2 / (iT - IT),
          ST = 2 / (kT - zT),
          DT = -(kT + zT) / (kT - zT),
          LT = (TT + oT) / (TT - oT),
          xT = (iT + IT) / (IT - iT);
        return KT.FromValuesToRef(BT, 0, 0, 0, 0, FT, 0, 0, 0, 0, ST, 0, LT, xT, DT, 1, WT), XT && WT.multiplyToRef(AT, WT), WT.markAsUpdated(), WT
      }
      static ObliqueOffCenterLHToRef(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
        const DT = -WT * Math.cos(XT),
          LT = -WT * Math.sin(XT);
        return KT.TranslationToRef(0, 0, -BT, MT.Matrix[1]), KT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, DT, LT, 1, 0, 0, 0, 0, 1, MT.Matrix[0]), MT.Matrix[1].multiplyToRef(MT.Matrix[0], MT.Matrix[0]), KT.TranslationToRef(0, 0, BT, MT.Matrix[1]), MT.Matrix[0].multiplyToRef(MT.Matrix[1], MT.Matrix[0]), KT.OrthoOffCenterLHToRef(TT, oT, IT, iT, zT, kT, FT, ST), MT.Matrix[0].multiplyToRef(FT, FT), FT
      }
      static OrthoOffCenterRH(TT, oT, IT, iT, zT, kT, WT) {
        const XT = new KT;
        return KT.OrthoOffCenterRHToRef(TT, oT, IT, iT, zT, kT, XT, WT), XT
      }
      static OrthoOffCenterRHToRef(TT, oT, IT, iT, zT, kT, WT, XT) {
        return KT.OrthoOffCenterLHToRef(TT, oT, IT, iT, zT, kT, WT, XT), WT._m[10] *= -1, WT
      }
      static ObliqueOffCenterRHToRef(TT, oT, IT, iT, zT, kT, WT, XT, BT, FT, ST) {
        const DT = WT * Math.cos(XT),
          LT = WT * Math.sin(XT);
        return KT.TranslationToRef(0, 0, BT, MT.Matrix[1]), KT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, DT, LT, 1, 0, 0, 0, 0, 1, MT.Matrix[0]), MT.Matrix[1].multiplyToRef(MT.Matrix[0], MT.Matrix[0]), KT.TranslationToRef(0, 0, -BT, MT.Matrix[1]), MT.Matrix[0].multiplyToRef(MT.Matrix[1], MT.Matrix[0]), KT.OrthoOffCenterRHToRef(TT, oT, IT, iT, zT, kT, FT, ST), MT.Matrix[0].multiplyToRef(FT, FT), FT
      }
      static PerspectiveLH(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const WT = new KT,
          XT = 2 * IT / TT,
          BT = 2 * IT / oT,
          FT = (iT + IT) / (iT - IT),
          ST = -2 * iT * IT / (iT - IT),
          DT = Math.tan(kT);
        return KT.FromValuesToRef(XT, 0, 0, 0, 0, BT, 0, DT, 0, 0, FT, 1, 0, 0, ST, 0, WT), zT && WT.multiplyToRef(AT, WT), WT._updateIdentityStatus(!1), WT
      }
      static PerspectiveFovLH(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const XT = new KT;
        return KT.PerspectiveFovLHToRef(TT, oT, IT, iT, XT, !0, zT, kT, WT), XT
      }
      static PerspectiveFovLHToRef(TT, oT, IT, iT, zT) {
        let kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          WT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          BT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const FT = IT,
          ST = iT,
          DT = 1 / Math.tan(.5 * TT),
          LT = kT ? DT / oT : DT,
          xT = kT ? DT : DT * oT,
          cT = BT && 0 === FT ? -1 : 0 !== ST ? (ST + FT) / (ST - FT) : 1,
          MT = BT && 0 === FT ? 2 * ST : 0 !== ST ? -2 * ST * FT / (ST - FT) : -2 * FT,
          rT = Math.tan(XT);
        return KT.FromValuesToRef(LT, 0, 0, 0, 0, xT, 0, rT, 0, 0, cT, 1, 0, 0, MT, 0, zT), WT && zT.multiplyToRef(AT, zT), zT._updateIdentityStatus(!1), zT
      }
      static PerspectiveFovReverseLHToRef(TT, oT, IT, iT, zT) {
        let kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          WT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const BT = 1 / Math.tan(.5 * TT),
          FT = kT ? BT / oT : BT,
          ST = kT ? BT : BT * oT,
          DT = Math.tan(XT);
        return KT.FromValuesToRef(FT, 0, 0, 0, 0, ST, 0, DT, 0, 0, -IT, 1, 0, 0, 1, 0, zT), WT && zT.multiplyToRef(AT, zT), zT._updateIdentityStatus(!1), zT
      }
      static PerspectiveFovRH(TT, oT, IT, iT, zT) {
        let kT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          WT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const XT = new KT;
        return KT.PerspectiveFovRHToRef(TT, oT, IT, iT, XT, !0, zT, kT, WT), XT
      }
      static PerspectiveFovRHToRef(TT, oT, IT, iT, zT) {
        let kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          WT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          BT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const FT = IT,
          ST = iT,
          DT = 1 / Math.tan(.5 * TT),
          LT = kT ? DT / oT : DT,
          xT = kT ? DT : DT * oT,
          cT = BT && 0 === FT ? 1 : 0 !== ST ? -(ST + FT) / (ST - FT) : -1,
          MT = BT && 0 === FT ? 2 * ST : 0 !== ST ? -2 * ST * FT / (ST - FT) : -2 * FT,
          rT = Math.tan(XT);
        return KT.FromValuesToRef(LT, 0, 0, 0, 0, xT, 0, rT, 0, 0, cT, -1, 0, 0, MT, 0, zT), WT && zT.multiplyToRef(AT, zT), zT._updateIdentityStatus(!1), zT
      }
      static PerspectiveFovReverseRHToRef(TT, oT, IT, iT, zT) {
        let kT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          WT = arguments.length > 6 ? arguments[6] : void 0,
          XT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const BT = 1 / Math.tan(.5 * TT),
          FT = kT ? BT / oT : BT,
          ST = kT ? BT : BT * oT,
          DT = Math.tan(XT);
        return KT.FromValuesToRef(FT, 0, 0, 0, 0, ST, 0, DT, 0, 0, -IT, -1, 0, 0, -1, 0, zT), WT && zT.multiplyToRef(AT, zT), zT._updateIdentityStatus(!1), zT
      }
      static GetFinalMatrix(TT, oT, IT, iT, zT, kT) {
        const WT = TT.width,
          XT = TT.height,
          BT = TT.x,
          FT = TT.y,
          ST = KT.FromValues(WT / 2, 0, 0, 0, 0, -XT / 2, 0, 0, 0, 0, kT - zT, 0, BT + WT / 2, XT / 2 + FT, zT, 1),
          DT = new KT;
        return oT.multiplyToRef(IT, DT), DT.multiplyToRef(iT, DT), DT.multiplyToRef(ST, DT)
      }
      static GetAsMatrix2x2(TT) {
        const oT = TT.m,
          IT = [oT[0], oT[1], oT[4], oT[5]];
        return kT.c.MatrixUse64Bits ? IT : new Float32Array(IT)
      }
      static GetAsMatrix3x3(TT) {
        const oT = TT.m,
          IT = [oT[0], oT[1], oT[2], oT[4], oT[5], oT[6], oT[8], oT[9], oT[10]];
        return kT.c.MatrixUse64Bits ? IT : new Float32Array(IT)
      }
      static Transpose(TT) {
        const oT = new KT;
        return KT.TransposeToRef(TT, oT), oT
      }
      static TransposeToRef(TT, oT) {
        const IT = TT.m,
          iT = IT[0],
          zT = IT[4],
          kT = IT[8],
          WT = IT[12],
          XT = IT[1],
          BT = IT[5],
          FT = IT[9],
          ST = IT[13],
          DT = IT[2],
          LT = IT[6],
          xT = IT[10],
          cT = IT[14],
          KT = IT[3],
          MT = IT[7],
          rT = IT[11],
          AT = IT[15],
          gT = oT._m;
        return gT[0] = iT, gT[1] = zT, gT[2] = kT, gT[3] = WT, gT[4] = XT, gT[5] = BT, gT[6] = FT, gT[7] = ST, gT[8] = DT, gT[9] = LT, gT[10] = xT, gT[11] = cT, gT[12] = KT, gT[13] = MT, gT[14] = rT, gT[15] = AT, oT.markAsUpdated(), oT._updateIdentityStatus(TT._isIdentity, TT._isIdentityDirty), oT
      }
      static Reflection(TT) {
        const oT = new KT;
        return KT.ReflectionToRef(TT, oT), oT
      }
      static ReflectionToRef(TT, oT) {
        TT.normalize();
        const IT = TT.normal.x,
          iT = TT.normal.y,
          zT = TT.normal.z,
          kT = -2 * IT,
          WT = -2 * iT,
          XT = -2 * zT;
        return KT.FromValuesToRef(kT * IT + 1, WT * IT, XT * IT, 0, kT * iT, WT * iT + 1, XT * iT, 0, kT * zT, WT * zT, XT * zT + 1, 0, kT * TT.d, WT * TT.d, XT * TT.d, 1, oT), oT
      }
      static FromXYZAxesToRef(TT, oT, IT, iT) {
        return KT.FromValuesToRef(TT._x, TT._y, TT._z, 0, oT._x, oT._y, oT._z, 0, IT._x, IT._y, IT._z, 0, 0, 0, 0, 1, iT), iT
      }
      static FromQuaternionToRef(TT, oT) {
        const IT = TT._x * TT._x,
          iT = TT._y * TT._y,
          zT = TT._z * TT._z,
          kT = TT._x * TT._y,
          WT = TT._z * TT._w,
          XT = TT._z * TT._x,
          BT = TT._y * TT._w,
          FT = TT._y * TT._z,
          ST = TT._x * TT._w;
        return oT._m[0] = 1 - 2 * (iT + zT), oT._m[1] = 2 * (kT + WT), oT._m[2] = 2 * (XT - BT), oT._m[3] = 0, oT._m[4] = 2 * (kT - WT), oT._m[5] = 1 - 2 * (zT + IT), oT._m[6] = 2 * (FT + ST), oT._m[7] = 0, oT._m[8] = 2 * (XT + BT), oT._m[9] = 2 * (FT - ST), oT._m[10] = 1 - 2 * (iT + IT), oT._m[11] = 0, oT._m[12] = 0, oT._m[13] = 0, oT._m[14] = 0, oT._m[15] = 1, oT.markAsUpdated(), oT
      }
    }
    KT._IdentityReadOnly = KT.Identity();
    class MT {}
    MT.sc = (0, zT.g)(11, LT.Zero), MT.Matrix = (0, zT.g)(2, KT.Identity), MT.Quaternion = (0, zT.g)(3, cT.Zero);
    class rT {}
    rT.Vector2 = (0, zT.g)(3, DT.Zero), rT.sc = (0, zT.g)(13, LT.Zero), rT.Vector4 = (0, zT.g)(3, xT.Zero), rT.Quaternion = (0, zT.g)(3, cT.Zero), rT.Matrix = (0, zT.g)(8, KT.Identity);
    const AT = KT.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let gT = !1;

    function hT() {
      gT || (gT = !0, Object.defineProperties(DT.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(LT.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(xT.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(cT.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(KT.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, FT.h)("BABYLON.Vector2", DT), (0, FT.h)("BABYLON.Vector3", LT), (0, FT.h)("BABYLON.Vector4", xT), (0, FT.h)("BABYLON.Matrix", KT))
    }
  },
  36149: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    const iT = "undefined" !== typeof WeakRef;
    class zT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(TT, oT, IT, iT)
      }
      initialize(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = TT, this.skipNextObservers = oT, this.target = IT, this.currentTarget = iT, this
      }
    }
    class kT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = TT, this.mask = oT, this.scope = IT, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(TT)
      }
    }
    class WT {
      static FromPromise(TT, oT) {
        const IT = new WT;
        return TT.then((TT => {
          IT.notifyObservers(TT)
        })).catch((TT => {
          if (!oT) throw TT;
          oT.notifyObservers(TT)
        })), IT
      }
      get observers() {
        return this._observers
      }
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = oT, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new zT(0), TT && (this._onObserverAdded = TT)
      }
      add(TT) {
        let oT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          IT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!TT) return null;
        const zT = new kT(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        zT.unregisterOnNextCall = IT, oT ? this._observers.unshift(zT) : this._observers.push(zT), this._onObserverAdded && this._onObserverAdded(zT), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(zT, this._lastNotifiedValue);
        const WT = iT ? new WeakRef(this) : {
          deref: () => this
        };
        return zT._remove = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const oT = WT.deref();
          oT && (TT ? oT.remove(zT) : oT._remove(zT))
        }, zT
      }
      addOnce(TT) {
        return this.add(TT, void 0, void 0, void 0, !0)
      }
      remove(TT) {
        if (!TT) return !1;
        TT._remove = null;
        return -1 !== this._observers.indexOf(TT) && (this._deferUnregister(TT), !0)
      }
      removeCallback(TT, oT) {
        for (let IT = 0; IT < this._observers.length; IT++) {
          const iT = this._observers[IT];
          if (!iT._willBeUnregistered && (iT.callback === TT && (!oT || oT === iT.scope))) return this._deferUnregister(iT), !0
        }
        return !1
      }
      _deferUnregister(TT) {
        TT._willBeUnregistered || (this._numObserversMarkedAsDeleted++, TT.unregisterOnNextCall = !1, TT._willBeUnregistered = !0, setTimeout((() => {
          this._remove(TT)
        }), 0))
      }
      _remove(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT) return !1;
        const IT = this._observers.indexOf(TT);
        return -1 !== IT && (oT && this._numObserversMarkedAsDeleted--, this._observers.splice(IT, 1), !0)
      }
      makeObserverTopPriority(TT) {
        this._remove(TT, !1), this._observers.unshift(TT)
      }
      makeObserverBottomPriority(TT) {
        this._remove(TT, !1), this._observers.push(TT)
      }
      notifyObservers(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = TT), !this._observers.length) return !0;
        const kT = this._eventState;
        kT.mask = oT, kT.target = IT, kT.currentTarget = iT, kT.skipNextObservers = !1, kT.lastReturnValue = TT, kT.userInfo = zT;
        for (const WT of this._observers)
          if (!WT._willBeUnregistered && (WT.mask & oT && (WT.unregisterOnNextCall && this._deferUnregister(WT), WT.scope ? kT.lastReturnValue = WT.callback.apply(WT.scope, [TT, kT]) : kT.lastReturnValue = WT.callback(TT, kT)), kT.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = oT), TT._willBeUnregistered) return;
        const iT = this._eventState;
        iT.mask = IT, iT.skipNextObservers = !1, TT.unregisterOnNextCall && this._deferUnregister(TT), TT.callback(oT, iT)
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
        const TT = new WT;
        return TT._observers = this._observers.slice(0), TT
      }
      hasSpecificMask() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const oT of this._observers)
          if (oT.mask & TT || oT.mask === TT) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);