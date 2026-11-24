export const id = 236;
export const ids = [236];
export const modules = {
  37216: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    var WT = mT(37219);
    class zT {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    zT.Instances = [], zT.OnEnginesDisposedObservable = new WT.d, zT._LastCreatedScene = null, zT.UseFallbackTexture = !0, zT.FallbackTexture = ""
  },
  37211: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => WT
    });
    class WT {
      static SetMatrixPrecision(TT) {
        if (WT.MatrixTrackPrecisionChange = !1, TT && !WT.MatrixUse64Bits && WT.MatrixTrackedMatrices)
          for (let UT = 0; UT < WT.MatrixTrackedMatrices.length; ++UT) {
            const TT = WT.MatrixTrackedMatrices[UT],
              mT = TT._m;
            TT._m = new Array(16);
            for (let UT = 0; UT < 16; ++UT) TT._m[UT] = mT[UT]
          }
        WT.MatrixUse64Bits = TT, WT.MatrixCurrentType = WT.MatrixUse64Bits ? Array : Float32Array, WT.MatrixTrackedMatrices = null
      }
    }
    WT.MatrixUse64Bits = !1, WT.MatrixTrackPrecisionChange = !0, WT.MatrixCurrentType = Float32Array, WT.MatrixTrackedMatrices = []
  },
  37232: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => nT,
      i: () => kT,
      l: () => HT,
      m: () => WT,
      q: () => MT,
      t: () => gT
    });
    class WT {}

    function zT(TT) {
      TT.updateFlag = WT._UpdateFlagSeed++
    }

    function MT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const zT = TT.cWT(),
        MT = UT.cWT(),
        gT = zT[0],
        nT = zT[1],
        HT = zT[2],
        kT = zT[3],
        jT = zT[4],
        lT = zT[5],
        LT = zT[6],
        pT = zT[7],
        BT = zT[8],
        ZT = zT[9],
        cT = zT[10],
        vT = zT[11],
        fT = zT[12],
        qT = zT[13],
        iT = zT[14],
        bT = zT[15],
        OT = MT[0],
        eT = MT[1],
        YT = MT[2],
        JT = MT[3],
        xT = MT[4],
        dT = MT[5],
        wT = MT[6],
        tT = MT[7],
        aT = MT[8],
        yT = MT[9],
        XT = MT[10],
        IT = MT[11],
        QT = MT[12],
        sT = MT[13],
        FT = MT[14],
        PT = MT[15];
      mT[WT] = gT * OT + nT * xT + HT * aT + kT * QT, mT[WT + 1] = gT * eT + nT * dT + HT * yT + kT * sT, mT[WT + 2] = gT * YT + nT * wT + HT * XT + kT * FT, mT[WT + 3] = gT * JT + nT * tT + HT * IT + kT * PT, mT[WT + 4] = jT * OT + lT * xT + LT * aT + pT * QT, mT[WT + 5] = jT * eT + lT * dT + LT * yT + pT * sT, mT[WT + 6] = jT * YT + lT * wT + LT * XT + pT * FT, mT[WT + 7] = jT * JT + lT * tT + LT * IT + pT * PT, mT[WT + 8] = BT * OT + ZT * xT + cT * aT + vT * QT, mT[WT + 9] = BT * eT + ZT * dT + cT * yT + vT * sT, mT[WT + 10] = BT * YT + ZT * wT + cT * XT + vT * FT, mT[WT + 11] = BT * JT + ZT * tT + cT * IT + vT * PT, mT[WT + 12] = fT * OT + qT * xT + iT * aT + bT * QT, mT[WT + 13] = fT * eT + qT * dT + iT * yT + bT * sT, mT[WT + 14] = fT * YT + qT * wT + iT * XT + bT * FT, mT[WT + 15] = fT * JT + qT * tT + iT * IT + bT * PT
    }

    function gT(TT, UT, mT) {
      let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      MT(TT, UT, mT.cWT(), WT), zT(mT)
    }

    function nT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const WT = TT.cWT();
      UT[mT] = WT[0], UT[mT + 1] = WT[1], UT[mT + 2] = WT[2], UT[mT + 3] = WT[3], UT[mT + 4] = WT[4], UT[mT + 5] = WT[5], UT[mT + 6] = WT[6], UT[mT + 7] = WT[7], UT[mT + 8] = WT[8], UT[mT + 9] = WT[9], UT[mT + 10] = WT[10], UT[mT + 11] = WT[11], UT[mT + 12] = WT[12], UT[mT + 13] = WT[13], UT[mT + 14] = WT[14], UT[mT + 15] = WT[15]
    }

    function HT(TT, UT) {
      const mT = kT(TT, UT.cWT());
      return mT && zT(UT), mT
    }

    function kT(TT, UT) {
      const mT = TT.cWT(),
        WT = mT[0],
        zT = mT[1],
        MT = mT[2],
        gT = mT[3],
        nT = mT[4],
        HT = mT[5],
        kT = mT[6],
        jT = mT[7],
        lT = mT[8],
        LT = mT[9],
        pT = mT[10],
        BT = mT[11],
        ZT = mT[12],
        cT = mT[13],
        vT = mT[14],
        fT = mT[15],
        qT = pT * fT - vT * BT,
        iT = LT * fT - cT * BT,
        bT = LT * vT - cT * pT,
        OT = lT * fT - ZT * BT,
        eT = lT * vT - pT * ZT,
        YT = lT * cT - ZT * LT,
        JT = +(HT * qT - kT * iT + jT * bT),
        xT = -(nT * qT - kT * OT + jT * eT),
        dT = +(nT * iT - HT * OT + jT * YT),
        wT = -(nT * bT - HT * eT + kT * YT),
        tT = WT * JT + zT * xT + MT * dT + gT * wT;
      if (0 === tT) return !1;
      const aT = 1 / tT,
        yT = kT * fT - vT * jT,
        XT = HT * fT - cT * jT,
        IT = HT * vT - cT * kT,
        QT = nT * fT - ZT * jT,
        sT = nT * vT - ZT * kT,
        FT = nT * cT - ZT * HT,
        PT = kT * BT - pT * jT,
        VT = HT * BT - LT * jT,
        uT = HT * pT - LT * kT,
        CT = nT * BT - lT * jT,
        rT = nT * pT - lT * kT,
        KT = nT * LT - lT * HT,
        ST = -(zT * qT - MT * iT + gT * bT),
        GT = +(WT * qT - MT * OT + gT * eT),
        NT = -(WT * iT - zT * OT + gT * YT),
        ET = +(WT * bT - zT * eT + MT * YT),
        hT = +(zT * yT - MT * XT + gT * IT),
        DT = -(WT * yT - MT * QT + gT * sT),
        oT = +(WT * XT - zT * QT + gT * FT),
        AT = -(WT * IT - zT * sT + MT * FT),
        RT = -(zT * PT - MT * VT + gT * uT),
        TU = +(WT * PT - MT * CT + gT * rT),
        UU = -(WT * VT - zT * CT + gT * KT),
        mU = +(WT * uT - zT * rT + MT * KT);
      return UT[0] = JT * aT, UT[1] = ST * aT, UT[2] = hT * aT, UT[3] = RT * aT, UT[4] = xT * aT, UT[5] = GT * aT, UT[6] = DT * aT, UT[7] = TU * aT, UT[8] = dT * aT, UT[9] = NT * aT, UT[10] = oT * aT, UT[11] = UU * aT, UT[12] = wT * aT, UT[13] = ET * aT, UT[14] = AT * aT, UT[15] = mU * aT, !0
    }
    WT._UpdateFlagSeed = 0
  },
  37188: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => ZT,
      f: () => BT,
      j: () => iT,
      l: () => vT,
      o: () => lT,
      p: () => LT,
      t: () => pT
    });
    var WT = mT(37196),
      zT = mT(37205),
      MT = mT(37211),
      gT = mT(37216),
      nT = mT(37226),
      HT = mT(37232),
      kT = mT(37239);
    const jT = TT => parseInt(TT.toString().replace(/\W/g, ""));
    class lT {
      constructor() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = TT, this.y = UT
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let TT = jT(this.x);
        return TT = 397 * TT ^ jT(this.y), TT
      }
      toArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[UT] = this.x, TT[UT + 1] = this.y, this
      }
      MmT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return lT.FromArrayToRef(TT, UT, this), this
      }
      cWT() {
        return [this.x, this.y]
      }
      Gw(TT) {
        return this.x = TT.x, this.y = TT.y, this
      }
      J9(TT, UT) {
        return this.x = TT, this.y = UT, this
      }
      set(TT, UT) {
        return this.J9(TT, UT)
      }
      B3(TT) {
        return this.J9(TT, TT)
      }
      add(TT) {
        return new lT(this.x + TT.x, this.y + TT.y)
      }
      addToRef(TT, UT) {
        return UT.x = this.x + TT.x, UT.y = this.y + TT.y, UT
      }
      addInPlace(TT) {
        return this.x += TT.x, this.y += TT.y, this
      }
      addInPlaceFromFloats(TT, UT) {
        return this.x += TT, this.y += UT, this
      }
      addVector3(TT) {
        return new lT(this.x + TT.x, this.y + TT.y)
      }
      subtract(TT) {
        return new lT(this.x - TT.x, this.y - TT.y)
      }
      subtractToRef(TT, UT) {
        return UT.x = this.x - TT.x, UT.y = this.y - TT.y, UT
      }
      FWT(TT) {
        return this.x -= TT.x, this.y -= TT.y, this
      }
      multiplyInPlace(TT) {
        return this.x *= TT.x, this.y *= TT.y, this
      }
      multiply(TT) {
        return new lT(this.x * TT.x, this.y * TT.y)
      }
      multiplyToRef(TT, UT) {
        return UT.x = this.x * TT.x, UT.y = this.y * TT.y, UT
      }
      multiplyByFloats(TT, UT) {
        return new lT(this.x * TT, this.y * UT)
      }
      divide(TT) {
        return new lT(this.x / TT.x, this.y / TT.y)
      }
      divideToRef(TT, UT) {
        return UT.x = this.x / TT.x, UT.y = this.y / TT.y, UT
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
      minimizeInPlaceFromFloats(TT, UT) {
        return this.x = Math.min(TT, this.x), this.y = Math.min(UT, this.y), this
      }
      maximizeInPlaceFromFloats(TT, UT) {
        return this.x = Math.max(TT, this.x), this.y = Math.max(UT, this.y), this
      }
      subtractFromFloats(TT, UT) {
        return new lT(this.x - TT, this.y - UT)
      }
      subtractFromFloatsToRef(TT, UT, mT) {
        return mT.x = this.x - TT, mT.y = this.y - UT, mT
      }
      ck() {
        return new lT(-this.x, -this.y)
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
        return new lT(this.x * TT, this.y * TT)
      }
      scaleToRef(TT, UT) {
        return UT.x = this.x * TT, UT.y = this.y * TT, UT
      }
      scaleAndAddToRef(TT, UT) {
        return UT.x += this.x * TT, UT.y += this.y * TT, UT
      }
      equals(TT) {
        return TT && this.x === TT.x && this.y === TT.y
      }
      equalsWithEpsilon(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.c;
        return TT && (0, nT.WithinEpsilon)(this.x, TT.x, UT) && (0, nT.WithinEpsilon)(this.y, TT.y, UT)
      }
      UnT(TT, UT) {
        return this.x === TT && this.y === UT
      }
      floor() {
        return new lT(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(TT) {
        return TT.x = Math.floor(this.x), TT.y = Math.floor(this.y), TT
      }
      fract() {
        return new lT(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(TT) {
        return TT.x = this.x - Math.floor(this.x), TT.y = this.y - Math.floor(this.y), TT
      }
      rotate(TT) {
        return this.rotateToRef(TT, new lT)
      }
      rotateToRef(TT, UT) {
        const mT = Math.cos(TT),
          WT = Math.sin(TT);
        return UT.x = mT * this.x - WT * this.y, UT.y = WT * this.x + mT * this.y, UT
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
        const TT = new lT;
        return this.normalizeToRef(TT), TT
      }
      normalizeToRef(TT) {
        const UT = this.length();
        return 0 === UT || 1 === UT ? (TT.x = this.x, TT.y = this.y, TT) : this.scaleToRef(1 / UT, TT)
      }
      clone() {
        return new lT(this.x, this.y)
      }
      dot(TT) {
        return this.x * TT.x + this.y * TT.y
      }
      static Zero() {
        return new lT(0, 0)
      }
      static One() {
        return new lT(1, 1)
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new lT((0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).J9((0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT))
      }
      static get ZeroReadOnly() {
        return lT._ZeroReadOnly
      }
      static FromArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new lT(TT[UT], TT[UT + 1])
      }
      static FromArrayToRef(TT, UT, mT) {
        return mT.x = TT[UT], mT.y = TT[UT + 1], mT
      }
      static FromFloatsToRef(TT, UT, mT) {
        return mT.J9(TT, UT), mT
      }
      static CatmullRom(TT, UT, mT, WT, zT) {
        const MT = zT * zT,
          gT = zT * MT,
          nT = .5 * (2 * UT.x + (-TT.x + mT.x) * zT + (2 * TT.x - 5 * UT.x + 4 * mT.x - WT.x) * MT + (-TT.x + 3 * UT.x - 3 * mT.x + WT.x) * gT),
          HT = .5 * (2 * UT.y + (-TT.y + mT.y) * zT + (2 * TT.y - 5 * UT.y + 4 * mT.y - WT.y) * MT + (-TT.y + 3 * UT.y - 3 * mT.y + WT.y) * gT);
        return new lT(nT, HT)
      }
      static ClampToRef(TT, UT, mT, WT) {
        return WT.x = (0, nT.Clamp)(TT.x, UT.x, mT.x), WT.y = (0, nT.Clamp)(TT.y, UT.y, mT.y), WT
      }
      static Clamp(TT, UT, mT) {
        const WT = (0, nT.Clamp)(TT.x, UT.x, mT.x),
          zT = (0, nT.Clamp)(TT.y, UT.y, mT.y);
        return new lT(WT, zT)
      }
      static Hermite(TT, UT, mT, WT, zT) {
        const MT = zT * zT,
          gT = zT * MT,
          nT = 2 * gT - 3 * MT + 1,
          HT = -2 * gT + 3 * MT,
          kT = gT - 2 * MT + zT,
          jT = gT - MT,
          LT = TT.x * nT + mT.x * HT + UT.x * kT + WT.x * jT,
          pT = TT.y * nT + mT.y * HT + UT.y * kT + WT.y * jT;
        return new lT(LT, pT)
      }
      static Hermite1stDerivative(TT, UT, mT, WT, zT) {
        return this.Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, new lT)
      }
      static Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT) {
        const gT = zT * zT;
        return MT.x = 6 * (gT - zT) * TT.x + (3 * gT - 4 * zT + 1) * UT.x + 6 * (-gT + zT) * mT.x + (3 * gT - 2 * zT) * WT.x, MT.y = 6 * (gT - zT) * TT.y + (3 * gT - 4 * zT + 1) * UT.y + 6 * (-gT + zT) * mT.y + (3 * gT - 2 * zT) * WT.y, MT
      }
      static Lerp(TT, UT, mT) {
        return lT.LerpToRef(TT, UT, mT, new lT)
      }
      static LerpToRef(TT, UT, mT, WT) {
        return WT.x = TT.x + (UT.x - TT.x) * mT, WT.y = TT.y + (UT.y - TT.y) * mT, WT
      }
      static Dot(TT, UT) {
        return TT.x * UT.x + TT.y * UT.y
      }
      static Normalize(TT) {
        return lT.NormalizeToRef(TT, new lT)
      }
      static NormalizeToRef(TT, UT) {
        return TT.normalizeToRef(UT), UT
      }
      static Minimize(TT, UT) {
        const mT = TT.x < UT.x ? TT.x : UT.x,
          WT = TT.y < UT.y ? TT.y : UT.y;
        return new lT(mT, WT)
      }
      static Maximize(TT, UT) {
        const mT = TT.x > UT.x ? TT.x : UT.x,
          WT = TT.y > UT.y ? TT.y : UT.y;
        return new lT(mT, WT)
      }
      static Transform(TT, UT) {
        return lT.TransformToRef(TT, UT, new lT)
      }
      static TransformToRef(TT, UT, mT) {
        const WT = UT.m,
          zT = TT.x * WT[0] + TT.y * WT[4] + WT[12],
          MT = TT.x * WT[1] + TT.y * WT[5] + WT[13];
        return mT.x = zT, mT.y = MT, mT
      }
      static PointInTriangle(TT, UT, mT, WT) {
        const zT = .5 * (-mT.y * WT.x + UT.y * (-mT.x + WT.x) + UT.x * (mT.y - WT.y) + mT.x * WT.y),
          MT = zT < 0 ? -1 : 1,
          gT = (UT.y * WT.x - UT.x * WT.y + (WT.y - UT.y) * TT.x + (UT.x - WT.x) * TT.y) * MT,
          nT = (UT.x * mT.y - UT.y * mT.x + (UT.y - mT.y) * TT.x + (mT.x - UT.x) * TT.y) * MT;
        return gT > 0 && nT > 0 && gT + nT < 2 * zT * MT
      }
      static Distance(TT, UT) {
        return Math.sqrt(lT.DistanceSquared(TT, UT))
      }
      static DistanceSquared(TT, UT) {
        const mT = TT.x - UT.x,
          WT = TT.y - UT.y;
        return mT * mT + WT * WT
      }
      static Center(TT, UT) {
        return lT.CenterToRef(TT, UT, new lT)
      }
      static CenterToRef(TT, UT, mT) {
        return mT.J9((TT.x + UT.x) / 2, (TT.y + UT.y) / 2)
      }
      static DistanceOfPointFromSegment(TT, UT, mT) {
        const WT = lT.DistanceSquared(UT, mT);
        if (0 === WT) return lT.Distance(TT, UT);
        const zT = mT.subtract(UT),
          MT = Math.max(0, Math.min(1, lT.Dot(TT.subtract(UT), zT) / WT)),
          gT = UT.add(zT.multiplyByFloats(MT, MT));
        return lT.Distance(TT, gT)
      }
    }
    lT._V8PerformanceHack = new lT(.5, .5), lT._ZeroReadOnly = lT.Zero();
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
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = TT, this._y = UT, this._z = mT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "JB"
      }
      getHashCode() {
        let TT = jT(this._x);
        return TT = 397 * TT ^ jT(this._y), TT = 397 * TT ^ jT(this._z), TT
      }
      cWT() {
        return [this._x, this._y, this._z]
      }
      toArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[UT] = this._x, TT[UT + 1] = this._y, TT[UT + 2] = this._z, this
      }
      MmT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return LT.FromArrayToRef(TT, UT, this), this
      }
      toQuaternion() {
        return BT.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(TT) {
        return this._x += TT._x, this._y += TT._y, this._z += TT._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(TT, UT, mT) {
        return this._x += TT, this._y += UT, this._z += mT, this._isDirty = !0, this
      }
      add(TT) {
        return new LT(this._x + TT._x, this._y + TT._y, this._z + TT._z)
      }
      addToRef(TT, UT) {
        return UT._x = this._x + TT._x, UT._y = this._y + TT._y, UT._z = this._z + TT._z, UT._isDirty = !0, UT
      }
      FWT(TT) {
        return this._x -= TT._x, this._y -= TT._y, this._z -= TT._z, this._isDirty = !0, this
      }
      subtract(TT) {
        return new LT(this._x - TT._x, this._y - TT._y, this._z - TT._z)
      }
      subtractToRef(TT, UT) {
        return this.subtractFromFloatsToRef(TT._x, TT._y, TT._z, UT)
      }
      subtractFromFloats(TT, UT, mT) {
        return new LT(this._x - TT, this._y - UT, this._z - mT)
      }
      subtractFromFloatsToRef(TT, UT, mT, WT) {
        return WT._x = this._x - TT, WT._y = this._y - UT, WT._z = this._z - mT, WT._isDirty = !0, WT
      }
      ck() {
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
      scaleToRef(TT, UT) {
        return UT._x = this._x * TT, UT._y = this._y * TT, UT._z = this._z * TT, UT._isDirty = !0, UT
      }
      getNormalToRef(TT) {
        const UT = this.length();
        let mT = Math.acos(this._y / UT);
        const WT = Math.atan2(this._z, this._x);
        mT > Math.PI / 2 ? mT -= Math.PI / 2 : mT += Math.PI / 2;
        const zT = UT * Math.sin(mT) * Math.cos(WT),
          MT = UT * Math.cos(mT),
          gT = UT * Math.sin(mT) * Math.sin(WT);
        return TT.set(zT, MT, gT), TT
      }
      applyRotationQuaternionToRef(TT, UT) {
        const mT = this._x,
          WT = this._y,
          zT = this._z,
          MT = TT._x,
          gT = TT._y,
          nT = TT._z,
          HT = TT._w,
          kT = 2 * (gT * zT - nT * WT),
          jT = 2 * (nT * mT - MT * zT),
          lT = 2 * (MT * WT - gT * mT);
        return UT._x = mT + HT * kT + gT * lT - nT * jT, UT._y = WT + HT * jT + nT * kT - MT * lT, UT._z = zT + HT * lT + MT * jT - gT * kT, UT._isDirty = !0, UT
      }
      applyRotationQuaternionInPlace(TT) {
        return this.applyRotationQuaternionToRef(TT, this)
      }
      applyRotationQuaternion(TT) {
        return this.applyRotationQuaternionToRef(TT, new LT)
      }
      scaleAndAddToRef(TT, UT) {
        return UT._x += this._x * TT, UT._y += this._y * TT, UT._z += this._z * TT, UT._isDirty = !0, UT
      }
      projectOnPlane(TT, UT) {
        return this.projectOnPlaneToRef(TT, UT, new LT)
      }
      projectOnPlaneToRef(TT, UT, mT) {
        const WT = TT.normal,
          zT = TT.d,
          MT = cT.JB[0];
        this.subtractToRef(UT, MT), MT.normalize();
        const gT = LT.Dot(MT, WT);
        if (Math.abs(gT) < 1e-10) mT.B3(1 / 0);
        else {
          const TT = -(LT.Dot(UT, WT) + zT) / gT,
            nT = MT.scaleInPlace(TT);
          UT.addToRef(nT, mT)
        }
        return mT
      }
      equals(TT) {
        return TT && this._x === TT._x && this._y === TT._y && this._z === TT._z
      }
      equalsWithEpsilon(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.c;
        return TT && (0, nT.WithinEpsilon)(this._x, TT._x, UT) && (0, nT.WithinEpsilon)(this._y, TT._y, UT) && (0, nT.WithinEpsilon)(this._z, TT._z, UT)
      }
      UnT(TT, UT, mT) {
        return this._x === TT && this._y === UT && this._z === mT
      }
      multiplyInPlace(TT) {
        return this._x *= TT._x, this._y *= TT._y, this._z *= TT._z, this._isDirty = !0, this
      }
      multiply(TT) {
        return this.multiplyByFloats(TT._x, TT._y, TT._z)
      }
      multiplyToRef(TT, UT) {
        return UT._x = this._x * TT._x, UT._y = this._y * TT._y, UT._z = this._z * TT._z, UT._isDirty = !0, UT
      }
      multiplyByFloats(TT, UT, mT) {
        return new LT(this._x * TT, this._y * UT, this._z * mT)
      }
      divide(TT) {
        return new LT(this._x / TT._x, this._y / TT._y, this._z / TT._z)
      }
      divideToRef(TT, UT) {
        return UT._x = this._x / TT._x, UT._y = this._y / TT._y, UT._z = this._z / TT._z, UT._isDirty = !0, UT
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
      minimizeInPlaceFromFloats(TT, UT, mT) {
        return TT < this._x && (this.x = TT), UT < this._y && (this.y = UT), mT < this._z && (this.z = mT), this
      }
      maximizeInPlaceFromFloats(TT, UT, mT) {
        return TT > this._x && (this.x = TT), UT > this._y && (this.y = UT), mT > this._z && (this.z = mT), this
      }
      isNonUniformWithinEpsilon(TT) {
        const UT = Math.abs(this._x),
          mT = Math.abs(this._y);
        if (!(0, nT.WithinEpsilon)(UT, mT, TT)) return !0;
        const WT = Math.abs(this._z);
        return !(0, nT.WithinEpsilon)(UT, WT, TT) || !(0, nT.WithinEpsilon)(mT, WT, TT)
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
        const UT = cT.JB[0].Gw(this);
        return this.x = UT[TT[0]], this.y = UT[TT[1]], this.z = UT[TT[2]], this
      }
      rotateByQuaternionToRef(TT, UT) {
        return TT.toRotationMatrix(cT.Matrix[0]), LT.TransformCoordinatesToRef(this, cT.Matrix[0], UT), UT
      }
      rotateByQuaternionAroundPointToRef(TT, UT, mT) {
        return this.subtractToRef(UT, cT.JB[0]), cT.JB[0].rotateByQuaternionToRef(TT, cT.JB[0]), UT.addToRef(cT.JB[0], mT), mT
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
        const UT = this.length();
        return 0 === UT || 1 === UT ? (TT._x = this._x, TT._y = this._y, TT._z = this._z, TT._isDirty = !0, TT) : this.scaleToRef(1 / UT, TT)
      }
      clone() {
        return new LT(this._x, this._y, this._z)
      }
      Gw(TT) {
        return this.J9(TT._x, TT._y, TT._z)
      }
      J9(TT, UT, mT) {
        return this._x = TT, this._y = UT, this._z = mT, this._isDirty = !0, this
      }
      set(TT, UT, mT) {
        return this.J9(TT, UT, mT)
      }
      B3(TT) {
        return this._x = this._y = this._z = TT, this._isDirty = !0, this
      }
      static GetClipFactor(TT, UT, mT, WT) {
        const zT = LT.Dot(TT, mT);
        return (zT - WT) / (zT - LT.Dot(UT, mT))
      }
      static GetAngleBetweenVectors(TT, UT, mT) {
        const WT = TT.normalizeToRef(cT.JB[1]),
          zT = UT.normalizeToRef(cT.JB[2]);
        let MT = LT.Dot(WT, zT);
        MT = (0, nT.Clamp)(MT, -1, 1);
        const gT = Math.acos(MT),
          HT = cT.JB[3];
        return LT.CrossToRef(WT, zT, HT), LT.Dot(HT, mT) > 0 ? isNaN(gT) ? 0 : gT : isNaN(gT) ? -Math.PI : -Math.acos(MT)
      }
      static GetAngleBetweenVectorsOnPlane(TT, UT, mT) {
        cT.JB[0].Gw(TT);
        const WT = cT.JB[0];
        cT.JB[1].Gw(UT);
        const zT = cT.JB[1];
        cT.JB[2].Gw(mT);
        const MT = cT.JB[2],
          gT = cT.JB[3],
          HT = cT.JB[4];
        WT.normalize(), zT.normalize(), MT.normalize(), LT.CrossToRef(MT, WT, gT), LT.CrossToRef(gT, MT, HT);
        const kT = Math.atan2(LT.Dot(zT, gT), LT.Dot(zT, HT));
        return (0, nT.NormalizeRadians)(kT)
      }
      static PitchYawRollToMoveBetweenPointsToRef(TT, UT, mT) {
        const WT = vT.JB[0];
        return UT.subtractToRef(TT, WT), mT._y = Math.atan2(WT.x, WT.z) || 0, mT._x = Math.atan2(Math.sqrt(WT.x ** 2 + WT.z ** 2), WT.y) || 0, mT._z = 0, mT._isDirty = !0, mT
      }
      static PitchYawRollToMoveBetweenPoints(TT, UT) {
        const mT = LT.Zero();
        return LT.PitchYawRollToMoveBetweenPointsToRef(TT, UT, mT)
      }
      static SlerpToRef(TT, UT, mT, zT) {
        mT = (0, nT.Clamp)(mT, 0, 1);
        const MT = cT.JB[0],
          gT = cT.JB[1];
        MT.Gw(TT);
        const HT = MT.length();
        MT.normalizeFromLength(HT), gT.Gw(UT);
        const kT = gT.length();
        gT.normalizeFromLength(kT);
        const jT = LT.Dot(MT, gT);
        let lT, pT;
        if (jT < 1 - WT.c) {
          const TT = Math.acos(jT),
            UT = 1 / Math.sin(TT);
          lT = Math.sin((1 - mT) * TT) * UT, pT = Math.sin(mT * TT) * UT
        } else lT = 1 - mT, pT = mT;
        return MT.scaleInPlace(lT), gT.scaleInPlace(pT), zT.Gw(MT).addInPlace(gT), zT.scaleInPlace((0, nT.Lerp)(HT, kT, mT)), zT
      }
      static SmoothToRef(TT, UT, mT, WT, zT) {
        return LT.SlerpToRef(TT, UT, 0 === WT ? 1 : mT / WT, zT), zT
      }
      static FromArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new LT(TT[UT], TT[UT + 1], TT[UT + 2])
      }
      static FromFloatArray(TT, UT) {
        return LT.FromArray(TT, UT)
      }
      static FromArrayToRef(TT, UT, mT) {
        return mT._x = TT[UT], mT._y = TT[UT + 1], mT._z = TT[UT + 2], mT._isDirty = !0, mT
      }
      static FromFloatArrayToRef(TT, UT, mT) {
        return LT.FromArrayToRef(TT, UT, mT)
      }
      static FromFloatsToRef(TT, UT, mT, WT) {
        return WT.J9(TT, UT, mT), WT
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
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new LT((0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).J9((0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT))
      }
      static TransformCoordinates(TT, UT) {
        const mT = LT.Zero();
        return LT.TransformCoordinatesToRef(TT, UT, mT), mT
      }
      static TransformCoordinatesToRef(TT, UT, mT) {
        return LT.TransformCoordinatesFromFloatsToRef(TT._x, TT._y, TT._z, UT, mT), mT
      }
      static TransformCoordinatesFromFloatsToRef(TT, UT, mT, WT, zT) {
        const MT = WT.m,
          gT = TT * MT[0] + UT * MT[4] + mT * MT[8] + MT[12],
          nT = TT * MT[1] + UT * MT[5] + mT * MT[9] + MT[13],
          HT = TT * MT[2] + UT * MT[6] + mT * MT[10] + MT[14],
          kT = 1 / (TT * MT[3] + UT * MT[7] + mT * MT[11] + MT[15]);
        return zT._x = gT * kT, zT._y = nT * kT, zT._z = HT * kT, zT._isDirty = !0, zT
      }
      static TransformNormal(TT, UT) {
        const mT = LT.Zero();
        return LT.TransformNormalToRef(TT, UT, mT), mT
      }
      static TransformNormalToRef(TT, UT, mT) {
        return this.TransformNormalFromFloatsToRef(TT._x, TT._y, TT._z, UT, mT), mT
      }
      static TransformNormalFromFloatsToRef(TT, UT, mT, WT, zT) {
        const MT = WT.m;
        return zT._x = TT * MT[0] + UT * MT[4] + mT * MT[8], zT._y = TT * MT[1] + UT * MT[5] + mT * MT[9], zT._z = TT * MT[2] + UT * MT[6] + mT * MT[10], zT._isDirty = !0, zT
      }
      static CatmullRom(TT, UT, mT, WT, zT) {
        const MT = zT * zT,
          gT = zT * MT,
          nT = .5 * (2 * UT._x + (-TT._x + mT._x) * zT + (2 * TT._x - 5 * UT._x + 4 * mT._x - WT._x) * MT + (-TT._x + 3 * UT._x - 3 * mT._x + WT._x) * gT),
          HT = .5 * (2 * UT._y + (-TT._y + mT._y) * zT + (2 * TT._y - 5 * UT._y + 4 * mT._y - WT._y) * MT + (-TT._y + 3 * UT._y - 3 * mT._y + WT._y) * gT),
          kT = .5 * (2 * UT._z + (-TT._z + mT._z) * zT + (2 * TT._z - 5 * UT._z + 4 * mT._z - WT._z) * MT + (-TT._z + 3 * UT._z - 3 * mT._z + WT._z) * gT);
        return new LT(nT, HT, kT)
      }
      static Clamp(TT, UT, mT) {
        const WT = new LT;
        return LT.ClampToRef(TT, UT, mT, WT), WT
      }
      static ClampToRef(TT, UT, mT, WT) {
        let zT = TT._x;
        zT = zT > mT._x ? mT._x : zT, zT = zT < UT._x ? UT._x : zT;
        let MT = TT._y;
        MT = MT > mT._y ? mT._y : MT, MT = MT < UT._y ? UT._y : MT;
        let gT = TT._z;
        return gT = gT > mT._z ? mT._z : gT, gT = gT < UT._z ? UT._z : gT, WT.J9(zT, MT, gT), WT
      }
      static CheckExtends(TT, UT, mT) {
        UT.minimizeInPlace(TT), mT.maximizeInPlace(TT)
      }
      static Hermite(TT, UT, mT, WT, zT) {
        const MT = zT * zT,
          gT = zT * MT,
          nT = 2 * gT - 3 * MT + 1,
          HT = -2 * gT + 3 * MT,
          kT = gT - 2 * MT + zT,
          jT = gT - MT,
          lT = TT._x * nT + mT._x * HT + UT._x * kT + WT._x * jT,
          pT = TT._y * nT + mT._y * HT + UT._y * kT + WT._y * jT,
          BT = TT._z * nT + mT._z * HT + UT._z * kT + WT._z * jT;
        return new LT(lT, pT, BT)
      }
      static Hermite1stDerivative(TT, UT, mT, WT, zT) {
        const MT = new LT;
        return this.Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT), MT
      }
      static Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT) {
        const gT = zT * zT;
        return MT._x = 6 * (gT - zT) * TT._x + (3 * gT - 4 * zT + 1) * UT._x + 6 * (-gT + zT) * mT._x + (3 * gT - 2 * zT) * WT._x, MT._y = 6 * (gT - zT) * TT._y + (3 * gT - 4 * zT + 1) * UT._y + 6 * (-gT + zT) * mT._y + (3 * gT - 2 * zT) * WT._y, MT._z = 6 * (gT - zT) * TT._z + (3 * gT - 4 * zT + 1) * UT._z + 6 * (-gT + zT) * mT._z + (3 * gT - 2 * zT) * WT._z, MT._isDirty = !0, MT
      }
      static Lerp(TT, UT, mT) {
        const WT = new LT(0, 0, 0);
        return LT.LerpToRef(TT, UT, mT, WT), WT
      }
      static LerpToRef(TT, UT, mT, WT) {
        return WT._x = TT._x + (UT._x - TT._x) * mT, WT._y = TT._y + (UT._y - TT._y) * mT, WT._z = TT._z + (UT._z - TT._z) * mT, WT._isDirty = !0, WT
      }
      static Dot(TT, UT) {
        return TT._x * UT._x + TT._y * UT._y + TT._z * UT._z
      }
      dot(TT) {
        return this._x * TT._x + this._y * TT._y + this._z * TT._z
      }
      static Cross(TT, UT) {
        const mT = new LT;
        return LT.CrossToRef(TT, UT, mT), mT
      }
      static CrossToRef(TT, UT, mT) {
        const WT = TT._y * UT._z - TT._z * UT._y,
          zT = TT._z * UT._x - TT._x * UT._z,
          MT = TT._x * UT._y - TT._y * UT._x;
        return mT.J9(WT, zT, MT), mT
      }
      static Normalize(TT) {
        const UT = LT.Zero();
        return LT.NormalizeToRef(TT, UT), UT
      }
      static NormalizeToRef(TT, UT) {
        return TT.normalizeToRef(UT), UT
      }
      static Project(TT, UT, mT, WT) {
        const zT = new LT;
        return LT.ProjectToRef(TT, UT, mT, WT, zT), zT
      }
      static ProjectToRef(TT, UT, mT, WT, zT) {
        const MT = WT.width,
          nT = WT.height,
          HT = WT.x,
          kT = WT.y,
          jT = cT.Matrix[1],
          lT = gT.c.LastCreatedEngine?.isNDCHalfZRange,
          pT = lT ? 1 : .5,
          BT = lT ? 0 : .5;
        ZT.FromValuesToRef(MT / 2, 0, 0, 0, 0, -nT / 2, 0, 0, 0, 0, pT, 0, HT + MT / 2, nT / 2 + kT, BT, 1, jT);
        const vT = cT.Matrix[0];
        return UT.multiplyToRef(mT, vT), vT.multiplyToRef(jT, vT), LT.TransformCoordinatesToRef(TT, vT, zT), zT
      }
      static Reflect(TT, UT) {
        return this.ReflectToRef(TT, UT, new LT)
      }
      static ReflectToRef(TT, UT, mT) {
        const WT = vT.JB[0];
        return WT.Gw(UT).scaleInPlace(2 * LT.Dot(TT, UT)), mT.Gw(TT).FWT(WT)
      }
      static UnprojectFromTransform(TT, UT, mT, WT, zT) {
        return this.Unproject(TT, UT, mT, WT, zT, ZT.IdentityReadOnly)
      }
      static Unproject(TT, UT, mT, WT, zT, MT) {
        const gT = new LT;
        return LT.UnprojectToRef(TT, UT, mT, WT, zT, MT, gT), gT
      }
      static UnprojectToRef(TT, UT, mT, WT, zT, MT, gT) {
        return LT.UnprojectFloatsToRef(TT._x, TT._y, TT._z, UT, mT, WT, zT, MT, gT), gT
      }
      static UnprojectFloatsToRef(TT, UT, mT, WT, zT, MT, nT, HT, kT) {
        const jT = cT.Matrix[0];
        MT.multiplyToRef(nT, jT), jT.multiplyToRef(HT, jT), jT.invert();
        const lT = cT.JB[0];
        return lT.x = TT / WT * 2 - 1, lT.y = -(UT / zT * 2 - 1), gT.c.LastCreatedEngine?.isNDCHalfZRange ? lT.z = mT : lT.z = 2 * mT - 1, LT.TransformCoordinatesToRef(lT, jT, kT), kT
      }
      static Minimize(TT, UT) {
        const mT = new LT;
        return mT.Gw(TT), mT.minimizeInPlace(UT), mT
      }
      static Maximize(TT, UT) {
        const mT = new LT;
        return mT.Gw(TT), mT.maximizeInPlace(UT), mT
      }
      static Distance(TT, UT) {
        return Math.sqrt(LT.DistanceSquared(TT, UT))
      }
      static DistanceSquared(TT, UT) {
        const mT = TT._x - UT._x,
          WT = TT._y - UT._y,
          zT = TT._z - UT._z;
        return mT * mT + WT * WT + zT * zT
      }
      static ProjectOnTriangleToRef(TT, UT, mT, zT, MT) {
        const gT = cT.JB[0],
          HT = cT.JB[1],
          kT = cT.JB[2],
          jT = cT.JB[3],
          lT = cT.JB[4];
        mT.subtractToRef(UT, gT), zT.subtractToRef(UT, HT), zT.subtractToRef(mT, kT);
        const pT = gT.length(),
          BT = HT.length(),
          ZT = kT.length();
        if (pT < WT.c || BT < WT.c || ZT < WT.c) return MT.Gw(UT), LT.Distance(TT, UT);
        TT.subtractToRef(UT, lT), LT.CrossToRef(gT, HT, jT);
        const vT = jT.length();
        if (vT < WT.c) return MT.Gw(UT), LT.Distance(TT, UT);
        jT.normalizeFromLength(vT);
        let fT = lT.length();
        if (fT < WT.c) return MT.Gw(UT), 0;
        lT.normalizeFromLength(fT);
        const qT = LT.Dot(jT, lT),
          iT = cT.JB[5],
          bT = cT.JB[6];
        iT.Gw(jT).scaleInPlace(-fT * qT), bT.Gw(TT).addInPlace(iT);
        const OT = cT.JB[4],
          eT = cT.JB[5],
          YT = cT.JB[7],
          JT = cT.JB[8];
        OT.Gw(gT).scaleInPlace(1 / pT), JT.Gw(HT).scaleInPlace(1 / BT), OT.addInPlace(JT).scaleInPlace(-1), eT.Gw(gT).scaleInPlace(-1 / pT), JT.Gw(kT).scaleInPlace(1 / ZT), eT.addInPlace(JT).scaleInPlace(-1), YT.Gw(kT).scaleInPlace(-1 / ZT), JT.Gw(HT).scaleInPlace(-1 / BT), YT.addInPlace(JT).scaleInPlace(-1);
        const xT = cT.JB[9];
        let dT;
        xT.Gw(bT).FWT(UT), LT.CrossToRef(OT, xT, JT), dT = LT.Dot(JT, jT);
        const wT = dT;
        xT.Gw(bT).FWT(mT), LT.CrossToRef(eT, xT, JT), dT = LT.Dot(JT, jT);
        const tT = dT;
        xT.Gw(bT).FWT(zT), LT.CrossToRef(YT, xT, JT), dT = LT.Dot(JT, jT);
        const aT = dT,
          yT = cT.JB[10];
        let XT, IT;
        wT > 0 && tT < 0 ? (yT.Gw(gT), XT = UT, IT = mT) : tT > 0 && aT < 0 ? (yT.Gw(kT), XT = mT, IT = zT) : (yT.Gw(HT).scaleInPlace(-1), XT = zT, IT = UT);
        const QT = cT.JB[9],
          sT = cT.JB[4];
        XT.subtractToRef(bT, JT), IT.subtractToRef(bT, QT), LT.CrossToRef(JT, QT, sT);
        if (!(LT.Dot(sT, jT) < 0)) return MT.Gw(bT), Math.abs(fT * qT);
        const FT = cT.JB[5];
        LT.CrossToRef(yT, sT, FT), FT.normalize();
        const PT = cT.JB[9];
        PT.Gw(XT).FWT(bT);
        const VT = PT.length();
        if (VT < WT.c) return MT.Gw(XT), LT.Distance(TT, XT);
        PT.normalizeFromLength(VT);
        const uT = LT.Dot(FT, PT),
          CT = cT.JB[7];
        CT.Gw(bT).addInPlace(FT.scaleInPlace(VT * uT)), JT.Gw(CT).FWT(XT), fT = yT.length(), yT.normalizeFromLength(fT);
        let rT = LT.Dot(JT, yT) / Math.max(fT, WT.c);
        return rT = (0, nT.Clamp)(rT, 0, 1), CT.Gw(XT).addInPlace(yT.scaleInPlace(rT * fT)), MT.Gw(CT), LT.Distance(TT, CT)
      }
      static Center(TT, UT) {
        return LT.CenterToRef(TT, UT, LT.Zero())
      }
      static CenterToRef(TT, UT, mT) {
        return mT.J9((TT._x + UT._x) / 2, (TT._y + UT._y) / 2, (TT._z + UT._z) / 2)
      }
      static RotationFromAxis(TT, UT, mT) {
        const WT = new LT;
        return LT.RotationFromAxisToRef(TT, UT, mT, WT), WT
      }
      static RotationFromAxisToRef(TT, UT, mT, WT) {
        const zT = cT.Quaternion[0];
        return BT.RotationQuaternionFromAxisToRef(TT, UT, mT, zT), zT.toEulerAnglesToRef(WT), WT
      }
    }
    LT._V8PerformanceHack = new LT(.5, .5, .5), LT._UpReadOnly = LT.Up(), LT._DownReadOnly = LT.Down(), LT._LeftHandedForwardReadOnly = LT.Forward(!1), LT._RightHandedForwardReadOnly = LT.Forward(!0), LT._LeftHandedBackwardReadOnly = LT.Backward(!1), LT._RightHandedBackwardReadOnly = LT.Backward(!0), LT._RightReadOnly = LT.Right(), LT._LeftReadOnly = LT.Left(), LT._ZeroReadOnly = LT.Zero(), LT._OneReadOnly = LT.One();
    class pT {
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
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = TT, this._y = UT, this._z = mT, this._w = WT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let TT = jT(this._x);
        return TT = 397 * TT ^ jT(this._y), TT = 397 * TT ^ jT(this._z), TT = 397 * TT ^ jT(this._w), TT
      }
      cWT() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(TT, UT) {
        return void 0 === UT && (UT = 0), TT[UT] = this._x, TT[UT + 1] = this._y, TT[UT + 2] = this._z, TT[UT + 3] = this._w, this
      }
      MmT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pT.FromArrayToRef(TT, UT, this), this
      }
      addInPlace(TT) {
        return this.x += TT._x, this.y += TT._y, this.z += TT._z, this.w += TT._w, this
      }
      addInPlaceFromFloats(TT, UT, mT, WT) {
        return this.x += TT, this.y += UT, this.z += mT, this.w += WT, this
      }
      add(TT) {
        return new pT(this._x + TT.x, this._y + TT.y, this._z + TT.z, this._w + TT.w)
      }
      addToRef(TT, UT) {
        return UT.x = this._x + TT.x, UT.y = this._y + TT.y, UT.z = this._z + TT.z, UT.w = this._w + TT.w, UT
      }
      FWT(TT) {
        return this.x -= TT.x, this.y -= TT.y, this.z -= TT.z, this.w -= TT.w, this
      }
      subtract(TT) {
        return new pT(this._x - TT.x, this._y - TT.y, this._z - TT.z, this._w - TT.w)
      }
      subtractToRef(TT, UT) {
        return UT.x = this._x - TT.x, UT.y = this._y - TT.y, UT.z = this._z - TT.z, UT.w = this._w - TT.w, UT
      }
      subtractFromFloats(TT, UT, mT, WT) {
        return new pT(this._x - TT, this._y - UT, this._z - mT, this._w - WT)
      }
      subtractFromFloatsToRef(TT, UT, mT, WT, zT) {
        return zT.x = this._x - TT, zT.y = this._y - UT, zT.z = this._z - mT, zT.w = this._w - WT, zT
      }
      ck() {
        return new pT(-this._x, -this._y, -this._z, -this._w)
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
        return new pT(this._x * TT, this._y * TT, this._z * TT, this._w * TT)
      }
      scaleToRef(TT, UT) {
        return UT.x = this._x * TT, UT.y = this._y * TT, UT.z = this._z * TT, UT.w = this._w * TT, UT
      }
      scaleAndAddToRef(TT, UT) {
        return UT.x += this._x * TT, UT.y += this._y * TT, UT.z += this._z * TT, UT.w += this._w * TT, UT
      }
      equals(TT) {
        return TT && this._x === TT.x && this._y === TT.y && this._z === TT.z && this._w === TT.w
      }
      equalsWithEpsilon(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.c;
        return TT && (0, nT.WithinEpsilon)(this._x, TT.x, UT) && (0, nT.WithinEpsilon)(this._y, TT.y, UT) && (0, nT.WithinEpsilon)(this._z, TT.z, UT) && (0, nT.WithinEpsilon)(this._w, TT.w, UT)
      }
      UnT(TT, UT, mT, WT) {
        return this._x === TT && this._y === UT && this._z === mT && this._w === WT
      }
      multiplyInPlace(TT) {
        return this.x *= TT.x, this.y *= TT.y, this.z *= TT.z, this.w *= TT.w, this
      }
      multiply(TT) {
        return new pT(this._x * TT.x, this._y * TT.y, this._z * TT.z, this._w * TT.w)
      }
      multiplyToRef(TT, UT) {
        return UT.x = this._x * TT.x, UT.y = this._y * TT.y, UT.z = this._z * TT.z, UT.w = this._w * TT.w, UT
      }
      multiplyByFloats(TT, UT, mT, WT) {
        return new pT(this._x * TT, this._y * UT, this._z * mT, this._w * WT)
      }
      divide(TT) {
        return new pT(this._x / TT.x, this._y / TT.y, this._z / TT.z, this._w / TT.w)
      }
      divideToRef(TT, UT) {
        return UT.x = this._x / TT.x, UT.y = this._y / TT.y, UT.z = this._z / TT.z, UT.w = this._w / TT.w, UT
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
      minimizeInPlaceFromFloats(TT, UT, mT, WT) {
        return this.x = Math.min(TT, this._x), this.y = Math.min(UT, this._y), this.z = Math.min(mT, this._z), this.w = Math.min(WT, this._w), this
      }
      maximizeInPlaceFromFloats(TT, UT, mT, WT) {
        return this.x = Math.max(TT, this._x), this.y = Math.max(UT, this._y), this.z = Math.max(mT, this._z), this.w = Math.max(WT, this._w), this
      }
      floorToRef(TT) {
        return TT.x = Math.floor(this._x), TT.y = Math.floor(this._y), TT.z = Math.floor(this._z), TT.w = Math.floor(this._w), TT
      }
      floor() {
        return new pT(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(TT) {
        return TT.x = this._x - Math.floor(this._x), TT.y = this._y - Math.floor(this._y), TT.z = this._z - Math.floor(this._z), TT.w = this._w - Math.floor(this._w), TT
      }
      fract() {
        return new pT(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new pT)
      }
      normalizeToRef(TT) {
        const UT = this.length();
        return 0 === UT || 1 === UT ? (TT.x = this._x, TT.y = this._y, TT.z = this._z, TT.w = this._w, TT) : this.scaleToRef(1 / UT, TT)
      }
      toVector3() {
        return new LT(this._x, this._y, this._z)
      }
      clone() {
        return new pT(this._x, this._y, this._z, this._w)
      }
      Gw(TT) {
        return this.x = TT.x, this.y = TT.y, this.z = TT.z, this.w = TT.w, this
      }
      J9(TT, UT, mT, WT) {
        return this.x = TT, this.y = UT, this.z = mT, this.w = WT, this
      }
      set(TT, UT, mT, WT) {
        return this.J9(TT, UT, mT, WT)
      }
      B3(TT) {
        return this.x = this.y = this.z = this.w = TT, this
      }
      dot(TT) {
        return this._x * TT.x + this._y * TT.y + this._z * TT.z + this._w * TT.w
      }
      static FromArray(TT, UT) {
        return UT || (UT = 0), new pT(TT[UT], TT[UT + 1], TT[UT + 2], TT[UT + 3])
      }
      static FromArrayToRef(TT, UT, mT) {
        return mT.x = TT[UT], mT.y = TT[UT + 1], mT.z = TT[UT + 2], mT.w = TT[UT + 3], mT
      }
      static FromFloatArrayToRef(TT, UT, mT) {
        return pT.FromArrayToRef(TT, UT, mT), mT
      }
      static FromFloatsToRef(TT, UT, mT, WT, zT) {
        return zT.x = TT, zT.y = UT, zT.z = mT, zT.w = WT, zT
      }
      static Zero() {
        return new pT(0, 0, 0, 0)
      }
      static One() {
        return new pT(1, 1, 1, 1)
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new pT((0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        return mT.x = (0, nT.RandomRange)(TT, UT), mT.y = (0, nT.RandomRange)(TT, UT), mT.z = (0, nT.RandomRange)(TT, UT), mT.w = (0, nT.RandomRange)(TT, UT), mT
      }
      static Clamp(TT, UT, mT) {
        return pT.ClampToRef(TT, UT, mT, new pT)
      }
      static ClampToRef(TT, UT, mT, WT) {
        return WT.x = (0, nT.Clamp)(TT.x, UT.x, mT.x), WT.y = (0, nT.Clamp)(TT.y, UT.y, mT.y), WT.z = (0, nT.Clamp)(TT.z, UT.z, mT.z), WT.w = (0, nT.Clamp)(TT.w, UT.w, mT.w), WT
      }
      static CheckExtends(TT, UT, mT) {
        UT.minimizeInPlace(TT), mT.maximizeInPlace(TT)
      }
      static get ZeroReadOnly() {
        return pT._ZeroReadOnly
      }
      static Normalize(TT) {
        return pT.NormalizeToRef(TT, new pT)
      }
      static NormalizeToRef(TT, UT) {
        return TT.normalizeToRef(UT), UT
      }
      static Minimize(TT, UT) {
        const mT = new pT;
        return mT.Gw(TT), mT.minimizeInPlace(UT), mT
      }
      static Maximize(TT, UT) {
        const mT = new pT;
        return mT.Gw(TT), mT.maximizeInPlace(UT), mT
      }
      static Distance(TT, UT) {
        return Math.sqrt(pT.DistanceSquared(TT, UT))
      }
      static DistanceSquared(TT, UT) {
        const mT = TT.x - UT.x,
          WT = TT.y - UT.y,
          zT = TT.z - UT.z,
          MT = TT.w - UT.w;
        return mT * mT + WT * WT + zT * zT + MT * MT
      }
      static Center(TT, UT) {
        return pT.CenterToRef(TT, UT, new pT)
      }
      static CenterToRef(TT, UT, mT) {
        return mT.x = (TT.x + UT.x) / 2, mT.y = (TT.y + UT.y) / 2, mT.z = (TT.z + UT.z) / 2, mT.w = (TT.w + UT.w) / 2, mT
      }
      static TransformCoordinates(TT, UT) {
        return pT.TransformCoordinatesToRef(TT, UT, new pT)
      }
      static TransformCoordinatesToRef(TT, UT, mT) {
        return pT.TransformCoordinatesFromFloatsToRef(TT._x, TT._y, TT._z, UT, mT), mT
      }
      static TransformCoordinatesFromFloatsToRef(TT, UT, mT, WT, zT) {
        const MT = WT.m,
          gT = TT * MT[0] + UT * MT[4] + mT * MT[8] + MT[12],
          nT = TT * MT[1] + UT * MT[5] + mT * MT[9] + MT[13],
          HT = TT * MT[2] + UT * MT[6] + mT * MT[10] + MT[14],
          kT = TT * MT[3] + UT * MT[7] + mT * MT[11] + MT[15];
        return zT.x = gT, zT.y = nT, zT.z = HT, zT.w = kT, zT
      }
      static TransformNormal(TT, UT) {
        return pT.TransformNormalToRef(TT, UT, new pT)
      }
      static TransformNormalToRef(TT, UT, mT) {
        const WT = UT.m,
          zT = TT.x * WT[0] + TT.y * WT[4] + TT.z * WT[8],
          MT = TT.x * WT[1] + TT.y * WT[5] + TT.z * WT[9],
          gT = TT.x * WT[2] + TT.y * WT[6] + TT.z * WT[10];
        return mT.x = zT, mT.y = MT, mT.z = gT, mT.w = TT.w, mT
      }
      static TransformNormalFromFloatsToRef(TT, UT, mT, WT, zT, MT) {
        const gT = zT.m;
        return MT.x = TT * gT[0] + UT * gT[4] + mT * gT[8], MT.y = TT * gT[1] + UT * gT[5] + mT * gT[9], MT.z = TT * gT[2] + UT * gT[6] + mT * gT[10], MT.w = WT, MT
      }
      static FromVector3(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pT(TT._x, TT._y, TT._z, UT)
      }
      static Dot(TT, UT) {
        return TT.x * UT.x + TT.y * UT.y + TT.z * UT.z + TT.w * UT.w
      }
    }
    pT._V8PerformanceHack = new pT(.5, .5, .5, .5), pT._ZeroReadOnly = pT.Zero();
    class BT {
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
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = TT, this._y = UT, this._z = mT, this._w = WT
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let TT = jT(this._x);
        return TT = 397 * TT ^ jT(this._y), TT = 397 * TT ^ jT(this._z), TT = 397 * TT ^ jT(this._w), TT
      }
      cWT() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TT[UT] = this._x, TT[UT + 1] = this._y, TT[UT + 2] = this._z, TT[UT + 3] = this._w, this
      }
      MmT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BT.FromArrayToRef(TT, UT, this)
      }
      equals(TT) {
        return TT && this._x === TT._x && this._y === TT._y && this._z === TT._z && this._w === TT._w
      }
      equalsWithEpsilon(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.c;
        return TT && (0, nT.WithinEpsilon)(this._x, TT._x, UT) && (0, nT.WithinEpsilon)(this._y, TT._y, UT) && (0, nT.WithinEpsilon)(this._z, TT._z, UT) && (0, nT.WithinEpsilon)(this._w, TT._w, UT)
      }
      isApprox(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WT.c;
        return TT && ((0, nT.WithinEpsilon)(this._x, TT._x, UT) && (0, nT.WithinEpsilon)(this._y, TT._y, UT) && (0, nT.WithinEpsilon)(this._z, TT._z, UT) && (0, nT.WithinEpsilon)(this._w, TT._w, UT) || (0, nT.WithinEpsilon)(this._x, -TT._x, UT) && (0, nT.WithinEpsilon)(this._y, -TT._y, UT) && (0, nT.WithinEpsilon)(this._z, -TT._z, UT) && (0, nT.WithinEpsilon)(this._w, -TT._w, UT))
      }
      clone() {
        return new BT(this._x, this._y, this._z, this._w)
      }
      Gw(TT) {
        return this._x = TT._x, this._y = TT._y, this._z = TT._z, this._w = TT._w, this._isDirty = !0, this
      }
      J9(TT, UT, mT, WT) {
        return this._x = TT, this._y = UT, this._z = mT, this._w = WT, this._isDirty = !0, this
      }
      set(TT, UT, mT, WT) {
        return this.J9(TT, UT, mT, WT)
      }
      B3(TT) {
        return this.J9(TT, TT, TT, TT)
      }
      add(TT) {
        return new BT(this._x + TT._x, this._y + TT._y, this._z + TT._z, this._w + TT._w)
      }
      addInPlace(TT) {
        return this._x += TT._x, this._y += TT._y, this._z += TT._z, this._w += TT._w, this._isDirty = !0, this
      }
      addToRef(TT, UT) {
        return UT._x = this._x + TT._x, UT._y = this._y + TT._y, UT._z = this._z + TT._z, UT._w = this._w + TT._w, UT._isDirty = !0, UT
      }
      addInPlaceFromFloats(TT, UT, mT, WT) {
        return this._x += TT, this._y += UT, this._z += mT, this._w += WT, this._isDirty = !0, this
      }
      subtractToRef(TT, UT) {
        return UT._x = this._x - TT._x, UT._y = this._y - TT._y, UT._z = this._z - TT._z, UT._w = this._w - TT._w, UT._isDirty = !0, UT
      }
      subtractFromFloats(TT, UT, mT, WT) {
        return this.subtractFromFloatsToRef(TT, UT, mT, WT, new BT)
      }
      subtractFromFloatsToRef(TT, UT, mT, WT, zT) {
        return zT._x = this._x - TT, zT._y = this._y - UT, zT._z = this._z - mT, zT._w = this._w - WT, zT._isDirty = !0, zT
      }
      subtract(TT) {
        return new BT(this._x - TT._x, this._y - TT._y, this._z - TT._z, this._w - TT._w)
      }
      FWT(TT) {
        return this._x -= TT._x, this._y -= TT._y, this._z -= TT._z, this._w -= TT._w, this._isDirty = !0, this
      }
      scale(TT) {
        return new BT(this._x * TT, this._y * TT, this._z * TT, this._w * TT)
      }
      scaleToRef(TT, UT) {
        return UT._x = this._x * TT, UT._y = this._y * TT, UT._z = this._z * TT, UT._w = this._w * TT, UT._isDirty = !0, UT
      }
      scaleInPlace(TT) {
        return this._x *= TT, this._y *= TT, this._z *= TT, this._w *= TT, this._isDirty = !0, this
      }
      scaleAndAddToRef(TT, UT) {
        return UT._x += this._x * TT, UT._y += this._y * TT, UT._z += this._z * TT, UT._w += this._w * TT, UT._isDirty = !0, UT
      }
      multiply(TT) {
        const UT = new BT(0, 0, 0, 1);
        return this.multiplyToRef(TT, UT), UT
      }
      multiplyToRef(TT, UT) {
        const mT = this._x * TT._w + this._y * TT._z - this._z * TT._y + this._w * TT._x,
          WT = -this._x * TT._z + this._y * TT._w + this._z * TT._x + this._w * TT._y,
          zT = this._x * TT._y - this._y * TT._x + this._z * TT._w + this._w * TT._z,
          MT = -this._x * TT._x - this._y * TT._y - this._z * TT._z + this._w * TT._w;
        return UT.J9(mT, WT, zT, MT), UT
      }
      multiplyInPlace(TT) {
        return this.multiplyToRef(TT, this)
      }
      multiplyByFloats(TT, UT, mT, WT) {
        return this._x *= TT, this._y *= UT, this._z *= mT, this._w *= WT, this._isDirty = !0, this
      }
      divide(TT) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(TT, UT) {
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
      ck() {
        return this.negateToRef(new BT)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(TT) {
        return TT._x = -this._x, TT._y = -this._y, TT._z = -this._z, TT._w = -this._w, TT._isDirty = !0, TT
      }
      UnT(TT, UT, mT, WT) {
        return this._x === TT && this._y === UT && this._z === mT && this._w === WT
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
        return TT.J9(-this._x, -this._y, -this._z, this._w), TT
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new BT(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const TT = this.conjugate(),
          UT = this.lengthSquared();
        return 0 == UT || 1 == UT || TT.scaleInPlace(1 / UT), TT
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
        const TT = new BT(0, 0, 0, 1);
        return this.normalizeToRef(TT), TT
      }
      normalizeToRef(TT) {
        const UT = this.length();
        return 0 === UT || 1 === UT ? TT.J9(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / UT, TT)
      }
      toEulerAngles() {
        const TT = LT.Zero();
        return this.toEulerAnglesToRef(TT), TT
      }
      toEulerAnglesToRef(TT) {
        const UT = this._z,
          mT = this._x,
          WT = this._y,
          zT = this._w,
          MT = WT * UT - mT * zT,
          gT = .4999999;
        if (MT < -gT) TT._y = 2 * Math.atan2(WT, zT), TT._x = Math.PI / 2, TT._z = 0, TT._isDirty = !0;
        else if (MT > gT) TT._y = 2 * Math.atan2(WT, zT), TT._x = -Math.PI / 2, TT._z = 0, TT._isDirty = !0;
        else {
          const gT = zT * zT,
            nT = UT * UT,
            HT = mT * mT,
            kT = WT * WT;
          TT._z = Math.atan2(2 * (mT * WT + UT * zT), -nT - HT + kT + gT), TT._x = Math.asin(-2 * MT), TT._y = Math.atan2(2 * (UT * mT + WT * zT), nT - HT - kT + gT), TT._isDirty = !0
        }
        return TT
      }
      toAlphaBetaGammaToRef(TT) {
        const UT = this._z,
          mT = this._x,
          WT = this._y,
          zT = this._w,
          MT = Math.sqrt(mT * mT + WT * WT),
          gT = Math.sqrt(UT * UT + zT * zT),
          nT = 2 * Math.atan2(MT, gT),
          HT = 2 * Math.atan2(UT, zT),
          kT = 2 * Math.atan2(WT, mT),
          jT = (HT + kT) / 2,
          lT = (HT - kT) / 2;
        return TT.set(lT, nT, jT), TT
      }
      toRotationMatrix(TT) {
        return ZT.FromQuaternionToRef(this, TT), TT
      }
      fromRotationMatrix(TT) {
        return BT.FromRotationMatrixToRef(TT, this), this
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
        let UT;
        const mT = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          WT = this._w;
        return mT > 0 ? (UT = 2 * Math.atan2(mT, WT), TT.set(this._x / mT, this._y / mT, this._z / mT)) : (UT = 0, TT.set(1, 0, 0)), UT
      }
      static FromRotationMatrix(TT) {
        const UT = new BT;
        return BT.FromRotationMatrixToRef(TT, UT), UT
      }
      static FromRotationMatrixToRef(TT, UT) {
        const mT = TT.m,
          WT = mT[0],
          zT = mT[4],
          MT = mT[8],
          gT = mT[1],
          nT = mT[5],
          HT = mT[9],
          kT = mT[2],
          jT = mT[6],
          lT = mT[10],
          LT = WT + nT + lT;
        let pT;
        return LT > 0 ? (pT = .5 / Math.sqrt(LT + 1), UT._w = .25 / pT, UT._x = (jT - HT) * pT, UT._y = (MT - kT) * pT, UT._z = (gT - zT) * pT, UT._isDirty = !0) : WT > nT && WT > lT ? (pT = 2 * Math.sqrt(1 + WT - nT - lT), UT._w = (jT - HT) / pT, UT._x = .25 * pT, UT._y = (zT + gT) / pT, UT._z = (MT + kT) / pT, UT._isDirty = !0) : nT > lT ? (pT = 2 * Math.sqrt(1 + nT - WT - lT), UT._w = (MT - kT) / pT, UT._x = (zT + gT) / pT, UT._y = .25 * pT, UT._z = (HT + jT) / pT, UT._isDirty = !0) : (pT = 2 * Math.sqrt(1 + lT - WT - nT), UT._w = (gT - zT) / pT, UT._x = (MT + kT) / pT, UT._y = (HT + jT) / pT, UT._z = .25 * pT, UT._isDirty = !0), UT
      }
      static Dot(TT, UT) {
        return TT._x * UT._x + TT._y * UT._y + TT._z * UT._z + TT._w * UT._w
      }
      static AreClose(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const WT = BT.Dot(TT, UT);
        return 1 - WT * WT <= mT
      }
      static SmoothToRef(TT, UT, mT, WT, zT) {
        let MT = 0 === WT ? 1 : mT / WT;
        return MT = (0, nT.Clamp)(MT, 0, 1), BT.SlerpToRef(TT, UT, MT, zT), zT
      }
      static Zero() {
        return new BT(0, 0, 0, 0)
      }
      static Inverse(TT) {
        return new BT(-TT._x, -TT._y, -TT._z, TT._w)
      }
      static InverseToRef(TT, UT) {
        return UT.set(-TT._x, -TT._y, -TT._z, TT._w), UT
      }
      static Identity() {
        return new BT(0, 0, 0, 1)
      }
      static IsIdentity(TT) {
        return TT && 0 === TT._x && 0 === TT._y && 0 === TT._z && 1 === TT._w
      }
      static RotationAxis(TT, UT) {
        return BT.RotationAxisToRef(TT, UT, new BT)
      }
      static RotationAxisToRef(TT, UT, mT) {
        mT._w = Math.cos(UT / 2);
        const WT = Math.sin(UT / 2) / TT.length();
        return mT._x = TT._x * WT, mT._y = TT._y * WT, mT._z = TT._z * WT, mT._isDirty = !0, mT
      }
      static FromArray(TT, UT) {
        return UT || (UT = 0), new BT(TT[UT], TT[UT + 1], TT[UT + 2], TT[UT + 3])
      }
      static FromArrayToRef(TT, UT, mT) {
        return mT._x = TT[UT], mT._y = TT[UT + 1], mT._z = TT[UT + 2], mT._w = TT[UT + 3], mT._isDirty = !0, mT
      }
      static FromFloatsToRef(TT, UT, mT, WT, zT) {
        return zT.J9(TT, UT, mT, WT), zT
      }
      static FromEulerAngles(TT, UT, mT) {
        const WT = new BT;
        return BT.RotationYawPitchRollToRef(UT, TT, mT, WT), WT
      }
      static FromEulerAnglesToRef(TT, UT, mT, WT) {
        return BT.RotationYawPitchRollToRef(UT, TT, mT, WT), WT
      }
      static FromEulerVector(TT) {
        const UT = new BT;
        return BT.RotationYawPitchRollToRef(TT._y, TT._x, TT._z, UT), UT
      }
      static FromEulerVectorToRef(TT, UT) {
        return BT.RotationYawPitchRollToRef(TT._y, TT._x, TT._z, UT), UT
      }
      static FromUnitVectorsToRef(TT, UT, mT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : WT.c;
        const MT = LT.Dot(TT, UT) + 1;
        return MT < zT ? Math.abs(TT.x) > Math.abs(TT.z) ? mT.set(-TT.y, TT.x, 0, 0) : mT.set(0, -TT.z, TT.y, 0) : (LT.CrossToRef(TT, UT, vT.JB[0]), mT.set(vT.JB[0].x, vT.JB[0].y, vT.JB[0].z, MT)), mT.normalize()
      }
      static RotationYawPitchRoll(TT, UT, mT) {
        const WT = new BT;
        return BT.RotationYawPitchRollToRef(TT, UT, mT, WT), WT
      }
      static RotationYawPitchRollToRef(TT, UT, mT, WT) {
        const zT = .5 * mT,
          MT = .5 * UT,
          gT = .5 * TT,
          nT = Math.sin(zT),
          HT = Math.cos(zT),
          kT = Math.sin(MT),
          jT = Math.cos(MT),
          lT = Math.sin(gT),
          LT = Math.cos(gT);
        return WT._x = LT * kT * HT + lT * jT * nT, WT._y = lT * jT * HT - LT * kT * nT, WT._z = LT * jT * nT - lT * kT * HT, WT._w = LT * jT * HT + lT * kT * nT, WT._isDirty = !0, WT
      }
      static RotationAlphaBetaGamma(TT, UT, mT) {
        const WT = new BT;
        return BT.RotationAlphaBetaGammaToRef(TT, UT, mT, WT), WT
      }
      static RotationAlphaBetaGammaToRef(TT, UT, mT, WT) {
        const zT = .5 * (mT + TT),
          MT = .5 * (mT - TT),
          gT = .5 * UT;
        return WT._x = Math.cos(MT) * Math.sin(gT), WT._y = Math.sin(MT) * Math.sin(gT), WT._z = Math.sin(zT) * Math.cos(gT), WT._w = Math.cos(zT) * Math.cos(gT), WT._isDirty = !0, WT
      }
      static RotationQuaternionFromAxis(TT, UT, mT) {
        const WT = new BT(0, 0, 0, 0);
        return BT.RotationQuaternionFromAxisToRef(TT, UT, mT, WT), WT
      }
      static RotationQuaternionFromAxisToRef(TT, UT, mT, WT) {
        const zT = cT.Matrix[0];
        return TT = TT.normalizeToRef(cT.JB[0]), UT = UT.normalizeToRef(cT.JB[1]), mT = mT.normalizeToRef(cT.JB[2]), ZT.FromXYZAxesToRef(TT, UT, mT, zT), BT.FromRotationMatrixToRef(zT, WT), WT
      }
      static FromLookDirectionLH(TT, UT) {
        const mT = new BT;
        return BT.FromLookDirectionLHToRef(TT, UT, mT), mT
      }
      static FromLookDirectionLHToRef(TT, UT, mT) {
        const WT = cT.Matrix[0];
        return ZT.LookDirectionLHToRef(TT, UT, WT), BT.FromRotationMatrixToRef(WT, mT), mT
      }
      static FromLookDirectionRH(TT, UT) {
        const mT = new BT;
        return BT.FromLookDirectionRHToRef(TT, UT, mT), mT
      }
      static FromLookDirectionRHToRef(TT, UT, mT) {
        const WT = cT.Matrix[0];
        return ZT.LookDirectionRHToRef(TT, UT, WT), BT.FromRotationMatrixToRef(WT, mT)
      }
      static Slerp(TT, UT, mT) {
        const WT = BT.Identity();
        return BT.SlerpToRef(TT, UT, mT, WT), WT
      }
      static SlerpToRef(TT, UT, mT, WT) {
        let zT, MT, gT = TT._x * UT._x + TT._y * UT._y + TT._z * UT._z + TT._w * UT._w,
          nT = !1;
        if (gT < 0 && (nT = !0, gT = -gT), gT > .999999) MT = 1 - mT, zT = nT ? -mT : mT;
        else {
          const TT = Math.acos(gT),
            UT = 1 / Math.sin(TT);
          MT = Math.sin((1 - mT) * TT) * UT, zT = nT ? -Math.sin(mT * TT) * UT : Math.sin(mT * TT) * UT
        }
        return WT._x = MT * TT._x + zT * UT._x, WT._y = MT * TT._y + zT * UT._y, WT._z = MT * TT._z + zT * UT._z, WT._w = MT * TT._w + zT * UT._w, WT._isDirty = !0, WT
      }
      static Hermite(TT, UT, mT, WT, zT) {
        const MT = zT * zT,
          gT = zT * MT,
          nT = 2 * gT - 3 * MT + 1,
          HT = -2 * gT + 3 * MT,
          kT = gT - 2 * MT + zT,
          jT = gT - MT,
          lT = TT._x * nT + mT._x * HT + UT._x * kT + WT._x * jT,
          LT = TT._y * nT + mT._y * HT + UT._y * kT + WT._y * jT,
          pT = TT._z * nT + mT._z * HT + UT._z * kT + WT._z * jT,
          ZT = TT._w * nT + mT._w * HT + UT._w * kT + WT._w * jT;
        return new BT(lT, LT, pT, ZT)
      }
      static Hermite1stDerivative(TT, UT, mT, WT, zT) {
        const MT = new BT;
        return this.Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT), MT
      }
      static Hermite1stDerivativeToRef(TT, UT, mT, WT, zT, MT) {
        const gT = zT * zT;
        return MT._x = 6 * (gT - zT) * TT._x + (3 * gT - 4 * zT + 1) * UT._x + 6 * (-gT + zT) * mT._x + (3 * gT - 2 * zT) * WT._x, MT._y = 6 * (gT - zT) * TT._y + (3 * gT - 4 * zT + 1) * UT._y + 6 * (-gT + zT) * mT._y + (3 * gT - 2 * zT) * WT._y, MT._z = 6 * (gT - zT) * TT._z + (3 * gT - 4 * zT + 1) * UT._z + 6 * (-gT + zT) * mT._z + (3 * gT - 2 * zT) * WT._z, MT._w = 6 * (gT - zT) * TT._w + (3 * gT - 4 * zT + 1) * UT._w + 6 * (-gT + zT) * mT._w + (3 * gT - 2 * zT) * WT._w, MT._isDirty = !0, MT
      }
      static Normalize(TT) {
        const UT = BT.Zero();
        return BT.NormalizeToRef(TT, UT), UT
      }
      static NormalizeToRef(TT, UT) {
        return TT.normalizeToRef(UT), UT
      }
      static Clamp(TT, UT, mT) {
        const WT = new BT;
        return BT.ClampToRef(TT, UT, mT, WT), WT
      }
      static ClampToRef(TT, UT, mT, WT) {
        return WT.J9((0, nT.Clamp)(TT.x, UT.x, mT.x), (0, nT.Clamp)(TT.y, UT.y, mT.y), (0, nT.Clamp)(TT.z, UT.z, mT.z), (0, nT.Clamp)(TT.w, UT.w, mT.w))
      }
      static Random() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new BT((0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT))
      }
      static RandomToRef() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).J9((0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT), (0, nT.RandomRange)(TT, UT))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(TT, UT) {
        return Math.sqrt(BT.DistanceSquared(TT, UT))
      }
      static DistanceSquared(TT, UT) {
        const mT = TT.x - UT.x,
          WT = TT.y - UT.y,
          zT = TT.z - UT.z,
          MT = TT.w - UT.w;
        return mT * mT + WT * WT + zT * zT + MT * MT
      }
      static Center(TT, UT) {
        return BT.CenterToRef(TT, UT, BT.Zero())
      }
      static CenterToRef(TT, UT, mT) {
        return mT.J9((TT.x + UT.x) / 2, (TT.y + UT.y) / 2, (TT.z + UT.z) / 2, (TT.w + UT.w) / 2)
      }
    }
    BT._V8PerformanceHack = new BT(.5, .5, .5, .5);
    class ZT {
      static get Use64Bits() {
        return MT.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = HT.m._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          WT = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = TT, this._isIdentity3x2 = TT || mT, this._isIdentityDirty = !this._isIdentity && UT, this._isIdentity3x2Dirty = !this._isIdentity3x2 && WT
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, MT.c.MatrixTrackPrecisionChange && MT.c.MatrixTrackedMatrices.push(this), this._m = new MT.c.MatrixCurrentType(16), this.markAsUpdated()
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
          UT = TT[0],
          mT = TT[1],
          WT = TT[2],
          zT = TT[3],
          MT = TT[4],
          gT = TT[5],
          nT = TT[6],
          HT = TT[7],
          kT = TT[8],
          jT = TT[9],
          lT = TT[10],
          LT = TT[11],
          pT = TT[12],
          BT = TT[13],
          ZT = TT[14],
          cT = TT[15],
          vT = lT * cT - ZT * LT,
          fT = jT * cT - BT * LT,
          qT = jT * ZT - BT * lT,
          iT = kT * cT - pT * LT,
          bT = kT * ZT - lT * pT,
          OT = kT * BT - pT * jT;
        return UT * +(gT * vT - nT * fT + HT * qT) + mT * -(MT * vT - nT * iT + HT * bT) + WT * +(MT * fT - gT * iT + HT * OT) + zT * -(MT * qT - gT * bT + nT * OT)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!TT) return this._m;
        const mT = this._m;
        for (let WT = 0; WT < 16; WT++) TT[UT + WT] = mT[WT];
        return this
      }
      cWT() {
        return this._m
      }
      MmT(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ZT.FromArrayToRef(TT, UT, this)
      }
      J9() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        return ZT.FromArrayToRef(UT, 0, this)
      }
      set() {
        const TT = this._m;
        for (let UT = 0; UT < 16; UT++) TT[UT] = UT < 0 || arguments.length <= UT ? void 0 : arguments[UT];
        return this.markAsUpdated(), this
      }
      B3(TT) {
        const UT = this._m;
        for (let mT = 0; mT < 16; mT++) UT[mT] = TT;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return ZT.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(TT) {
        const UT = new ZT;
        return this.addToRef(TT, UT), UT
      }
      addToRef(TT, UT) {
        const mT = this._m,
          WT = UT._m,
          zT = TT.m;
        for (let MT = 0; MT < 16; MT++) WT[MT] = mT[MT] + zT[MT];
        return UT.markAsUpdated(), UT
      }
      addToSelf(TT) {
        const UT = this._m,
          mT = TT.m;
        return UT[0] += mT[0], UT[1] += mT[1], UT[2] += mT[2], UT[3] += mT[3], UT[4] += mT[4], UT[5] += mT[5], UT[6] += mT[6], UT[7] += mT[7], UT[8] += mT[8], UT[9] += mT[9], UT[10] += mT[10], UT[11] += mT[11], UT[12] += mT[12], UT[13] += mT[13], UT[14] += mT[14], UT[15] += mT[15], this.markAsUpdated(), this
      }
      addInPlace(TT) {
        const UT = this._m,
          mT = TT.m;
        for (let WT = 0; WT < 16; WT++) UT[WT] += mT[WT];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const TT = this._m;
        for (let UT = 0; UT < 16; UT++) TT[UT] += UT < 0 || arguments.length <= UT ? void 0 : arguments[UT];
        return this.markAsUpdated(), this
      }
      subtract(TT) {
        const UT = this._m,
          mT = TT.m;
        for (let WT = 0; WT < 16; WT++) UT[WT] -= mT[WT];
        return this.markAsUpdated(), this
      }
      subtractToRef(TT, UT) {
        const mT = this._m,
          WT = TT.m,
          zT = UT._m;
        for (let MT = 0; MT < 16; MT++) zT[MT] = mT[MT] - WT[MT];
        return UT.markAsUpdated(), UT
      }
      FWT(TT) {
        const UT = this._m,
          mT = TT.m;
        for (let WT = 0; WT < 16; WT++) UT[WT] -= mT[WT];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        return this.subtractFromFloatsToRef(...UT, new ZT)
      }
      subtractFromFloatsToRef() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        const WT = UT.pop(),
          zT = this._m,
          MT = WT._m,
          gT = UT;
        for (let nT = 0; nT < 16; nT++) MT[nT] = zT[nT] - gT[nT];
        return WT.markAsUpdated(), WT
      }
      invertToRef(TT) {
        return !0 === this._isIdentity ? (ZT.IdentityToRef(TT), TT) : ((0, HT.i)(this, TT.cWT()) ? TT.markAsUpdated() : TT.Gw(this), TT)
      }
      addAtIndex(TT, UT) {
        return this._m[TT] += UT, this.markAsUpdated(), this
      }
      multiplyAtIndex(TT, UT) {
        return this._m[TT] *= UT, this.markAsUpdated(), this
      }
      setTranslationFromFloats(TT, UT, mT) {
        return this._m[12] = TT, this._m[13] = UT, this._m[14] = mT, this.markAsUpdated(), this
      }
      addTranslationFromFloats(TT, UT, mT) {
        return this._m[12] += TT, this._m[13] += UT, this._m[14] += mT, this.markAsUpdated(), this
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
        return ZT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, TT[12], TT[13], TT[14], TT[15], this), this._updateIdentityStatus(0 === TT[12] && 0 === TT[13] && 0 === TT[14] && 1 === TT[15]), this
      }
      Gw(TT) {
        TT.copyToArray(this._m);
        const UT = TT;
        return this.updateFlag = UT.updateFlag, this._updateIdentityStatus(UT._isIdentity, UT._isIdentityDirty, UT._isIdentity3x2, UT._isIdentity3x2Dirty), this
      }
      copyToArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, HT.e)(this, TT, UT), this
      }
      multiply(TT) {
        const UT = new ZT;
        return this.multiplyToRef(TT, UT), UT
      }
      multiplyInPlace(TT) {
        const UT = this._m,
          mT = TT.m;
        for (let WT = 0; WT < 16; WT++) UT[WT] *= mT[WT];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const TT = this._m;
        for (let UT = 0; UT < 16; UT++) TT[UT] *= UT < 0 || arguments.length <= UT ? void 0 : arguments[UT];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var TT = arguments.length, UT = new Array(TT), mT = 0; mT < TT; mT++) UT[mT] = arguments[mT];
        const WT = UT.pop(),
          zT = this._m,
          MT = WT._m,
          gT = UT;
        for (let nT = 0; nT < 16; nT++) MT[nT] = zT[nT] * gT[nT];
        return WT.markAsUpdated(), WT
      }
      multiplyToRef(TT, UT) {
        return this._isIdentity ? (UT.Gw(TT), UT) : TT._isIdentity ? (UT.Gw(this), UT) : (this.multiplyToArray(TT, UT._m, 0), UT.markAsUpdated(), UT)
      }
      multiplyToArray(TT, UT, mT) {
        return (0, HT.q)(this, TT, UT, mT), this
      }
      divide(TT) {
        return this.divideToRef(TT, new ZT)
      }
      divideToRef(TT, UT) {
        const mT = this._m,
          WT = TT.m,
          zT = UT._m;
        for (let MT = 0; MT < 16; MT++) zT[MT] = mT[MT] / WT[MT];
        return UT.markAsUpdated(), UT
      }
      divideInPlace(TT) {
        const UT = this._m,
          mT = TT.m;
        for (let WT = 0; WT < 16; WT++) UT[WT] /= mT[WT];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(TT) {
        const UT = this._m,
          mT = TT.m;
        for (let WT = 0; WT < 16; WT++) UT[WT] = Math.min(UT[WT], mT[WT]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const TT = this._m;
        for (let UT = 0; UT < 16; UT++) TT[UT] = Math.min(TT[UT], UT < 0 || arguments.length <= UT ? void 0 : arguments[UT]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(TT) {
        const UT = this._m,
          mT = TT.m;
        for (let WT = 0; WT < 16; WT++) UT[WT] = Math.max(UT[WT], mT[WT]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const TT = this._m;
        for (let UT = 0; UT < 16; UT++) TT[UT] = Math.max(TT[UT], UT < 0 || arguments.length <= UT ? void 0 : arguments[UT]);
        return this.markAsUpdated(), this
      }
      ck() {
        return this.negateToRef(new ZT)
      }
      negateInPlace() {
        const TT = this._m;
        for (let UT = 0; UT < 16; UT++) TT[UT] = -TT[UT];
        return this.markAsUpdated(), this
      }
      negateToRef(TT) {
        const UT = this._m,
          mT = TT._m;
        for (let WT = 0; WT < 16; WT++) mT[WT] = -UT[WT];
        return TT.markAsUpdated(), TT
      }
      equals(TT) {
        const UT = TT;
        if (!UT) return !1;
        if ((this._isIdentity || UT._isIdentity) && !this._isIdentityDirty && !UT._isIdentityDirty) return this._isIdentity && UT._isIdentity;
        const mT = this.m,
          WT = UT.m;
        return mT[0] === WT[0] && mT[1] === WT[1] && mT[2] === WT[2] && mT[3] === WT[3] && mT[4] === WT[4] && mT[5] === WT[5] && mT[6] === WT[6] && mT[7] === WT[7] && mT[8] === WT[8] && mT[9] === WT[9] && mT[10] === WT[10] && mT[11] === WT[11] && mT[12] === WT[12] && mT[13] === WT[13] && mT[14] === WT[14] && mT[15] === WT[15]
      }
      equalsWithEpsilon(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = this._m,
          WT = TT.m;
        for (let zT = 0; zT < 16; zT++)
          if (!(0, nT.WithinEpsilon)(mT[zT], WT[zT], UT)) return !1;
        return !0
      }
      UnT() {
        const TT = this._m;
        for (let UT = 0; UT < 16; UT++)
          if (TT[UT] != (UT < 0 || arguments.length <= UT ? void 0 : arguments[UT])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new ZT)
      }
      floorToRef(TT) {
        const UT = this._m,
          mT = TT._m;
        for (let WT = 0; WT < 16; WT++) mT[WT] = Math.floor(UT[WT]);
        return TT.markAsUpdated(), TT
      }
      fract() {
        return this.fractToRef(new ZT)
      }
      fractToRef(TT) {
        const UT = this._m,
          mT = TT._m;
        for (let WT = 0; WT < 16; WT++) mT[WT] = UT[WT] - Math.floor(UT[WT]);
        return TT.markAsUpdated(), TT
      }
      clone() {
        const TT = new ZT;
        return TT.Gw(this), TT
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let TT = jT(this._m[0]);
        for (let UT = 1; UT < 16; UT++) TT = 397 * TT ^ jT(this._m[UT]);
        return TT
      }
      decomposeToTransformNode(TT) {
        return TT.rotationQuaternion = TT.rotationQuaternion || new BT, this.decompose(TT.gp, TT.rotationQuaternion, TT.position)
      }
      decompose(TT, UT, mT, WT) {
        let zT = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return mT && mT.B3(0), TT && TT.B3(1), UT && UT.J9(0, 0, 0, 1), !0;
        const MT = this._m;
        if (mT && mT.J9(MT[12], MT[13], MT[14]), (TT = TT || cT.JB[0]).x = Math.sqrt(MT[0] * MT[0] + MT[1] * MT[1] + MT[2] * MT[2]), TT.y = Math.sqrt(MT[4] * MT[4] + MT[5] * MT[5] + MT[6] * MT[6]), TT.z = Math.sqrt(MT[8] * MT[8] + MT[9] * MT[9] + MT[10] * MT[10]), WT) {
          const UT = (zT ? WT.absoluteScaling.x : WT.gp.x) < 0 ? -1 : 1,
            mT = (zT ? WT.absoluteScaling.y : WT.gp.y) < 0 ? -1 : 1,
            MT = (zT ? WT.absoluteScaling.z : WT.gp.z) < 0 ? -1 : 1;
          TT.x *= UT, TT.y *= mT, TT.z *= MT
        } else this.determinant() <= 0 && (TT.y *= -1);
        if (0 === TT._x || 0 === TT._y || 0 === TT._z) return UT && UT.J9(0, 0, 0, 1), !1;
        if (UT) {
          const mT = 1 / TT._x,
            WT = 1 / TT._y,
            zT = 1 / TT._z;
          ZT.FromValuesToRef(MT[0] * mT, MT[1] * mT, MT[2] * mT, 0, MT[4] * WT, MT[5] * WT, MT[6] * WT, 0, MT[8] * zT, MT[9] * zT, MT[10] * zT, 0, 0, 0, 0, 1, cT.Matrix[0]), BT.FromRotationMatrixToRef(cT.Matrix[0], UT)
        }
        return !0
      }
      getRow(TT) {
        if (TT < 0 || TT > 3) return null;
        const UT = 4 * TT;
        return new pT(this._m[UT + 0], this._m[UT + 1], this._m[UT + 2], this._m[UT + 3])
      }
      getRowToRef(TT, UT) {
        if (TT >= 0 && TT <= 3) {
          const mT = 4 * TT;
          UT.x = this._m[mT + 0], UT.y = this._m[mT + 1], UT.z = this._m[mT + 2], UT.w = this._m[mT + 3]
        }
        return UT
      }
      setRow(TT, UT) {
        return this.setRowFromFloats(TT, UT.x, UT.y, UT.z, UT.w)
      }
      transpose() {
        const TT = new ZT;
        return ZT.TransposeToRef(this, TT), TT
      }
      transposeToRef(TT) {
        return ZT.TransposeToRef(this, TT), TT
      }
      setRowFromFloats(TT, UT, mT, WT, zT) {
        if (TT < 0 || TT > 3) return this;
        const MT = 4 * TT;
        return this._m[MT + 0] = UT, this._m[MT + 1] = mT, this._m[MT + 2] = WT, this._m[MT + 3] = zT, this.markAsUpdated(), this
      }
      scale(TT) {
        const UT = new ZT;
        return this.scaleToRef(TT, UT), UT
      }
      scaleToRef(TT, UT) {
        for (let mT = 0; mT < 16; mT++) UT._m[mT] = this._m[mT] * TT;
        return UT.markAsUpdated(), UT
      }
      scaleAndAddToRef(TT, UT) {
        for (let mT = 0; mT < 16; mT++) UT._m[mT] += this._m[mT] * TT;
        return UT.markAsUpdated(), UT
      }
      scaleInPlace(TT) {
        const UT = this._m;
        for (let mT = 0; mT < 16; mT++) UT[mT] *= TT;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(TT) {
        const UT = cT.Matrix[0];
        this.invertToRef(UT), UT.transposeToRef(TT);
        const mT = TT._m;
        return ZT.FromValuesToRef(mT[0], mT[1], mT[2], 0, mT[4], mT[5], mT[6], 0, mT[8], mT[9], mT[10], 0, 0, 0, 0, 1, TT), TT
      }
      getRotationMatrix() {
        const TT = new ZT;
        return this.getRotationMatrixToRef(TT), TT
      }
      getRotationMatrixToRef(TT) {
        const UT = cT.JB[0];
        if (!this.decompose(UT)) return ZT.IdentityToRef(TT), TT;
        const mT = this._m,
          WT = 1 / UT._x,
          zT = 1 / UT._y,
          MT = 1 / UT._z;
        return ZT.FromValuesToRef(mT[0] * WT, mT[1] * WT, mT[2] * WT, 0, mT[4] * zT, mT[5] * zT, mT[6] * zT, 0, mT[8] * MT, mT[9] * MT, mT[10] * MT, 0, 0, 0, 0, 1, TT), TT
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
        return this.multiplyToRef(fT, this), this
      }
      static FromArray(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const mT = new ZT;
        return ZT.FromArrayToRef(TT, UT, mT), mT
      }
      static FromArrayToRef(TT, UT, mT) {
        for (let WT = 0; WT < 16; WT++) mT._m[WT] = TT[WT + UT];
        return mT.markAsUpdated(), mT
      }
      static FromFloat32ArrayToRefScaled(TT, UT, mT, WT) {
        return WT._m[0] = TT[0 + UT] * mT, WT._m[1] = TT[1 + UT] * mT, WT._m[2] = TT[2 + UT] * mT, WT._m[3] = TT[3 + UT] * mT, WT._m[4] = TT[4 + UT] * mT, WT._m[5] = TT[5 + UT] * mT, WT._m[6] = TT[6 + UT] * mT, WT._m[7] = TT[7 + UT] * mT, WT._m[8] = TT[8 + UT] * mT, WT._m[9] = TT[9 + UT] * mT, WT._m[10] = TT[10 + UT] * mT, WT._m[11] = TT[11 + UT] * mT, WT._m[12] = TT[12 + UT] * mT, WT._m[13] = TT[13 + UT] * mT, WT._m[14] = TT[14 + UT] * mT, WT._m[15] = TT[15 + UT] * mT, WT.markAsUpdated(), WT
      }
      static get IdentityReadOnly() {
        return ZT._IdentityReadOnly
      }
      static FromValuesToRef(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT) {
        const vT = cT._m;
        vT[0] = TT, vT[1] = UT, vT[2] = mT, vT[3] = WT, vT[4] = zT, vT[5] = MT, vT[6] = gT, vT[7] = nT, vT[8] = HT, vT[9] = kT, vT[10] = jT, vT[11] = lT, vT[12] = LT, vT[13] = pT, vT[14] = BT, vT[15] = ZT, cT.markAsUpdated()
      }
      static FromValues(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, cT) {
        const vT = new ZT,
          fT = vT._m;
        return fT[0] = TT, fT[1] = UT, fT[2] = mT, fT[3] = WT, fT[4] = zT, fT[5] = MT, fT[6] = gT, fT[7] = nT, fT[8] = HT, fT[9] = kT, fT[10] = jT, fT[11] = lT, fT[12] = LT, fT[13] = pT, fT[14] = BT, fT[15] = cT, vT.markAsUpdated(), vT
      }
      static Compose(TT, UT, mT) {
        const WT = new ZT;
        return ZT.ComposeToRef(TT, UT, mT, WT), WT
      }
      static ComposeToRef(TT, UT, mT, WT) {
        const zT = WT._m,
          MT = UT._x,
          gT = UT._y,
          nT = UT._z,
          HT = UT._w,
          kT = MT + MT,
          jT = gT + gT,
          lT = nT + nT,
          LT = MT * kT,
          pT = MT * jT,
          BT = MT * lT,
          ZT = gT * jT,
          cT = gT * lT,
          vT = nT * lT,
          fT = HT * kT,
          qT = HT * jT,
          iT = HT * lT,
          bT = TT._x,
          OT = TT._y,
          eT = TT._z;
        return zT[0] = (1 - (ZT + vT)) * bT, zT[1] = (pT + iT) * bT, zT[2] = (BT - qT) * bT, zT[3] = 0, zT[4] = (pT - iT) * OT, zT[5] = (1 - (LT + vT)) * OT, zT[6] = (cT + fT) * OT, zT[7] = 0, zT[8] = (BT + qT) * eT, zT[9] = (cT - fT) * eT, zT[10] = (1 - (LT + ZT)) * eT, zT[11] = 0, zT[12] = mT._x, zT[13] = mT._y, zT[14] = mT._z, zT[15] = 1, WT.markAsUpdated(), WT
      }
      static Identity() {
        const TT = ZT.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return TT._updateIdentityStatus(!0), TT
      }
      static IdentityToRef(TT) {
        return ZT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, TT), TT._updateIdentityStatus(!0), TT
      }
      static Zero() {
        const TT = ZT.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return TT._updateIdentityStatus(!1), TT
      }
      static RotationX(TT) {
        const UT = new ZT;
        return ZT.RotationXToRef(TT, UT), UT
      }
      static Invert(TT) {
        const UT = new ZT;
        return TT.invertToRef(UT), UT
      }
      static RotationXToRef(TT, UT) {
        const mT = Math.sin(TT),
          WT = Math.cos(TT);
        return ZT.FromValuesToRef(1, 0, 0, 0, 0, WT, mT, 0, 0, -mT, WT, 0, 0, 0, 0, 1, UT), UT._updateIdentityStatus(1 === WT && 0 === mT), UT
      }
      static RotationY(TT) {
        const UT = new ZT;
        return ZT.RotationYToRef(TT, UT), UT
      }
      static RotationYToRef(TT, UT) {
        const mT = Math.sin(TT),
          WT = Math.cos(TT);
        return ZT.FromValuesToRef(WT, 0, -mT, 0, 0, 1, 0, 0, mT, 0, WT, 0, 0, 0, 0, 1, UT), UT._updateIdentityStatus(1 === WT && 0 === mT), UT
      }
      static RotationZ(TT) {
        const UT = new ZT;
        return ZT.RotationZToRef(TT, UT), UT
      }
      static RotationZToRef(TT, UT) {
        const mT = Math.sin(TT),
          WT = Math.cos(TT);
        return ZT.FromValuesToRef(WT, mT, 0, 0, -mT, WT, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, UT), UT._updateIdentityStatus(1 === WT && 0 === mT), UT
      }
      static RotationAxis(TT, UT) {
        const mT = new ZT;
        return ZT.RotationAxisToRef(TT, UT, mT), mT
      }
      static RotationAxisToRef(TT, UT, mT) {
        const WT = Math.sin(-UT),
          zT = Math.cos(-UT),
          MT = 1 - zT;
        TT = TT.normalizeToRef(cT.JB[0]);
        const gT = mT._m;
        return gT[0] = TT._x * TT._x * MT + zT, gT[1] = TT._x * TT._y * MT - TT._z * WT, gT[2] = TT._x * TT._z * MT + TT._y * WT, gT[3] = 0, gT[4] = TT._y * TT._x * MT + TT._z * WT, gT[5] = TT._y * TT._y * MT + zT, gT[6] = TT._y * TT._z * MT - TT._x * WT, gT[7] = 0, gT[8] = TT._z * TT._x * MT - TT._y * WT, gT[9] = TT._z * TT._y * MT + TT._x * WT, gT[10] = TT._z * TT._z * MT + zT, gT[11] = 0, gT[12] = 0, gT[13] = 0, gT[14] = 0, gT[15] = 1, mT.markAsUpdated(), mT
      }
      static RotationAlignToRef(TT, UT, mT) {
        let zT = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const MT = LT.Dot(UT, TT),
          gT = mT._m;
        if (MT < -1 + WT.c) gT[0] = -1, gT[1] = 0, gT[2] = 0, gT[3] = 0, gT[4] = 0, gT[5] = zT ? 1 : -1, gT[6] = 0, gT[7] = 0, gT[8] = 0, gT[9] = 0, gT[10] = zT ? -1 : 1, gT[11] = 0;
        else {
          const mT = LT.Cross(UT, TT),
            WT = 1 / (1 + MT);
          gT[0] = mT._x * mT._x * WT + MT, gT[1] = mT._y * mT._x * WT - mT._z, gT[2] = mT._z * mT._x * WT + mT._y, gT[3] = 0, gT[4] = mT._x * mT._y * WT + mT._z, gT[5] = mT._y * mT._y * WT + MT, gT[6] = mT._z * mT._y * WT - mT._x, gT[7] = 0, gT[8] = mT._x * mT._z * WT - mT._y, gT[9] = mT._y * mT._z * WT + mT._x, gT[10] = mT._z * mT._z * WT + MT, gT[11] = 0
        }
        return gT[12] = 0, gT[13] = 0, gT[14] = 0, gT[15] = 1, mT.markAsUpdated(), mT
      }
      static RotationYawPitchRoll(TT, UT, mT) {
        const WT = new ZT;
        return ZT.RotationYawPitchRollToRef(TT, UT, mT, WT), WT
      }
      static RotationYawPitchRollToRef(TT, UT, mT, WT) {
        return BT.RotationYawPitchRollToRef(TT, UT, mT, cT.Quaternion[0]), cT.Quaternion[0].toRotationMatrix(WT), WT
      }
      static Scaling(TT, UT, mT) {
        const WT = new ZT;
        return ZT.ScalingToRef(TT, UT, mT, WT), WT
      }
      static ScalingToRef(TT, UT, mT, WT) {
        return ZT.FromValuesToRef(TT, 0, 0, 0, 0, UT, 0, 0, 0, 0, mT, 0, 0, 0, 0, 1, WT), WT._updateIdentityStatus(1 === TT && 1 === UT && 1 === mT), WT
      }
      static Translation(TT, UT, mT) {
        const WT = new ZT;
        return ZT.TranslationToRef(TT, UT, mT, WT), WT
      }
      static TranslationToRef(TT, UT, mT, WT) {
        return ZT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, TT, UT, mT, 1, WT), WT._updateIdentityStatus(0 === TT && 0 === UT && 0 === mT), WT
      }
      static Lerp(TT, UT, mT) {
        const WT = new ZT;
        return ZT.LerpToRef(TT, UT, mT, WT), WT
      }
      static LerpToRef(TT, UT, mT, WT) {
        const zT = WT._m,
          MT = TT.m,
          gT = UT.m;
        for (let nT = 0; nT < 16; nT++) zT[nT] = MT[nT] * (1 - mT) + gT[nT] * mT;
        return WT.markAsUpdated(), WT
      }
      static DecomposeLerp(TT, UT, mT) {
        const WT = new ZT;
        return ZT.DecomposeLerpToRef(TT, UT, mT, WT), WT
      }
      static DecomposeLerpToRef(TT, UT, mT, WT) {
        const zT = cT.JB[0],
          MT = cT.Quaternion[0],
          gT = cT.JB[1];
        TT.decompose(zT, MT, gT);
        const nT = cT.JB[2],
          HT = cT.Quaternion[1],
          kT = cT.JB[3];
        UT.decompose(nT, HT, kT);
        const jT = cT.JB[4];
        LT.LerpToRef(zT, nT, mT, jT);
        const lT = cT.Quaternion[2];
        BT.SlerpToRef(MT, HT, mT, lT);
        const pT = cT.JB[5];
        return LT.LerpToRef(gT, kT, mT, pT), ZT.ComposeToRef(jT, lT, pT, WT), WT
      }
      static LookAtLH(TT, UT, mT) {
        const WT = new ZT;
        return ZT.LookAtLHToRef(TT, UT, mT, WT), WT
      }
      static LookAtLHToRef(TT, UT, mT, WT) {
        const zT = cT.JB[0],
          MT = cT.JB[1],
          gT = cT.JB[2];
        UT.subtractToRef(TT, gT), gT.normalize(), LT.CrossToRef(mT, gT, zT);
        const nT = zT.lengthSquared();
        0 === nT ? zT.x = 1 : zT.normalizeFromLength(Math.sqrt(nT)), LT.CrossToRef(gT, zT, MT), MT.normalize();
        const HT = -LT.Dot(zT, TT),
          kT = -LT.Dot(MT, TT),
          jT = -LT.Dot(gT, TT);
        return ZT.FromValuesToRef(zT._x, MT._x, gT._x, 0, zT._y, MT._y, gT._y, 0, zT._z, MT._z, gT._z, 0, HT, kT, jT, 1, WT), WT
      }
      static LookAtRH(TT, UT, mT) {
        const WT = new ZT;
        return ZT.LookAtRHToRef(TT, UT, mT, WT), WT
      }
      static LookAtRHToRef(TT, UT, mT, WT) {
        const zT = cT.JB[0],
          MT = cT.JB[1],
          gT = cT.JB[2];
        TT.subtractToRef(UT, gT), gT.normalize(), LT.CrossToRef(mT, gT, zT);
        const nT = zT.lengthSquared();
        0 === nT ? zT.x = 1 : zT.normalizeFromLength(Math.sqrt(nT)), LT.CrossToRef(gT, zT, MT), MT.normalize();
        const HT = -LT.Dot(zT, TT),
          kT = -LT.Dot(MT, TT),
          jT = -LT.Dot(gT, TT);
        return ZT.FromValuesToRef(zT._x, MT._x, gT._x, 0, zT._y, MT._y, gT._y, 0, zT._z, MT._z, gT._z, 0, HT, kT, jT, 1, WT), WT
      }
      static LookDirectionLH(TT, UT) {
        const mT = new ZT;
        return ZT.LookDirectionLHToRef(TT, UT, mT), mT
      }
      static LookDirectionLHToRef(TT, UT, mT) {
        const WT = cT.JB[0];
        WT.Gw(TT), WT.scaleInPlace(-1);
        const zT = cT.JB[1];
        return LT.CrossToRef(UT, WT, zT), ZT.FromValuesToRef(zT._x, zT._y, zT._z, 0, UT._x, UT._y, UT._z, 0, WT._x, WT._y, WT._z, 0, 0, 0, 0, 1, mT), mT
      }
      static LookDirectionRH(TT, UT) {
        const mT = new ZT;
        return ZT.LookDirectionRHToRef(TT, UT, mT), mT
      }
      static LookDirectionRHToRef(TT, UT, mT) {
        const WT = cT.JB[2];
        return LT.CrossToRef(UT, TT, WT), ZT.FromValuesToRef(WT._x, WT._y, WT._z, 0, UT._x, UT._y, UT._z, 0, TT._x, TT._y, TT._z, 0, 0, 0, 0, 1, mT), mT
      }
      static OrthoLH(TT, UT, mT, WT, zT) {
        const MT = new ZT;
        return ZT.OrthoLHToRef(TT, UT, mT, WT, MT, zT), MT
      }
      static OrthoLHToRef(TT, UT, mT, WT, zT, MT) {
        const gT = 2 / TT,
          nT = 2 / UT,
          HT = 2 / (WT - mT),
          kT = -(WT + mT) / (WT - mT);
        return ZT.FromValuesToRef(gT, 0, 0, 0, 0, nT, 0, 0, 0, 0, HT, 0, 0, 0, kT, 1, zT), MT && zT.multiplyToRef(fT, zT), zT._updateIdentityStatus(1 === gT && 1 === nT && 1 === HT && 0 === kT), zT
      }
      static OrthoOffCenterLH(TT, UT, mT, WT, zT, MT, gT) {
        const nT = new ZT;
        return ZT.OrthoOffCenterLHToRef(TT, UT, mT, WT, zT, MT, nT, gT), nT
      }
      static OrthoOffCenterLHToRef(TT, UT, mT, WT, zT, MT, gT, nT) {
        const HT = 2 / (UT - TT),
          kT = 2 / (WT - mT),
          jT = 2 / (MT - zT),
          lT = -(MT + zT) / (MT - zT),
          LT = (TT + UT) / (TT - UT),
          pT = (WT + mT) / (mT - WT);
        return ZT.FromValuesToRef(HT, 0, 0, 0, 0, kT, 0, 0, 0, 0, jT, 0, LT, pT, lT, 1, gT), nT && gT.multiplyToRef(fT, gT), gT.markAsUpdated(), gT
      }
      static ObliqueOffCenterLHToRef(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
        const lT = -gT * Math.cos(nT),
          LT = -gT * Math.sin(nT);
        return ZT.TranslationToRef(0, 0, -HT, cT.Matrix[1]), ZT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, lT, LT, 1, 0, 0, 0, 0, 1, cT.Matrix[0]), cT.Matrix[1].multiplyToRef(cT.Matrix[0], cT.Matrix[0]), ZT.TranslationToRef(0, 0, HT, cT.Matrix[1]), cT.Matrix[0].multiplyToRef(cT.Matrix[1], cT.Matrix[0]), ZT.OrthoOffCenterLHToRef(TT, UT, mT, WT, zT, MT, kT, jT), cT.Matrix[0].multiplyToRef(kT, kT), kT
      }
      static OrthoOffCenterRH(TT, UT, mT, WT, zT, MT, gT) {
        const nT = new ZT;
        return ZT.OrthoOffCenterRHToRef(TT, UT, mT, WT, zT, MT, nT, gT), nT
      }
      static OrthoOffCenterRHToRef(TT, UT, mT, WT, zT, MT, gT, nT) {
        return ZT.OrthoOffCenterLHToRef(TT, UT, mT, WT, zT, MT, gT, nT), gT._m[10] *= -1, gT
      }
      static ObliqueOffCenterRHToRef(TT, UT, mT, WT, zT, MT, gT, nT, HT, kT, jT) {
        const lT = gT * Math.cos(nT),
          LT = gT * Math.sin(nT);
        return ZT.TranslationToRef(0, 0, HT, cT.Matrix[1]), ZT.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, lT, LT, 1, 0, 0, 0, 0, 1, cT.Matrix[0]), cT.Matrix[1].multiplyToRef(cT.Matrix[0], cT.Matrix[0]), ZT.TranslationToRef(0, 0, -HT, cT.Matrix[1]), cT.Matrix[0].multiplyToRef(cT.Matrix[1], cT.Matrix[0]), ZT.OrthoOffCenterRHToRef(TT, UT, mT, WT, zT, MT, kT, jT), cT.Matrix[0].multiplyToRef(kT, kT), kT
      }
      static PerspectiveLH(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const gT = new ZT,
          nT = 2 * mT / TT,
          HT = 2 * mT / UT,
          kT = (WT + mT) / (WT - mT),
          jT = -2 * WT * mT / (WT - mT),
          lT = Math.tan(MT);
        return ZT.FromValuesToRef(nT, 0, 0, 0, 0, HT, 0, lT, 0, 0, kT, 1, 0, 0, jT, 0, gT), zT && gT.multiplyToRef(fT, gT), gT._updateIdentityStatus(!1), gT
      }
      static PerspectiveFovLH(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const nT = new ZT;
        return ZT.PerspectiveFovLHToRef(TT, UT, mT, WT, nT, !0, zT, MT, gT), nT
      }
      static PerspectiveFovLHToRef(TT, UT, mT, WT, zT) {
        let MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gT = arguments.length > 6 ? arguments[6] : void 0,
          nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          HT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const kT = mT,
          jT = WT,
          lT = 1 / Math.tan(.5 * TT),
          LT = MT ? lT / UT : lT,
          pT = MT ? lT : lT * UT,
          BT = HT && 0 === kT ? -1 : 0 !== jT ? (jT + kT) / (jT - kT) : 1,
          cT = HT && 0 === kT ? 2 * jT : 0 !== jT ? -2 * jT * kT / (jT - kT) : -2 * kT,
          vT = Math.tan(nT);
        return ZT.FromValuesToRef(LT, 0, 0, 0, 0, pT, 0, vT, 0, 0, BT, 1, 0, 0, cT, 0, zT), gT && zT.multiplyToRef(fT, zT), zT._updateIdentityStatus(!1), zT
      }
      static PerspectiveFovReverseLHToRef(TT, UT, mT, WT, zT) {
        let MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gT = arguments.length > 6 ? arguments[6] : void 0,
          nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const HT = 1 / Math.tan(.5 * TT),
          kT = MT ? HT / UT : HT,
          jT = MT ? HT : HT * UT,
          lT = Math.tan(nT);
        return ZT.FromValuesToRef(kT, 0, 0, 0, 0, jT, 0, lT, 0, 0, -mT, 1, 0, 0, 1, 0, zT), gT && zT.multiplyToRef(fT, zT), zT._updateIdentityStatus(!1), zT
      }
      static PerspectiveFovRH(TT, UT, mT, WT, zT) {
        let MT = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          gT = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const nT = new ZT;
        return ZT.PerspectiveFovRHToRef(TT, UT, mT, WT, nT, !0, zT, MT, gT), nT
      }
      static PerspectiveFovRHToRef(TT, UT, mT, WT, zT) {
        let MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gT = arguments.length > 6 ? arguments[6] : void 0,
          nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          HT = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const kT = mT,
          jT = WT,
          lT = 1 / Math.tan(.5 * TT),
          LT = MT ? lT / UT : lT,
          pT = MT ? lT : lT * UT,
          BT = HT && 0 === kT ? 1 : 0 !== jT ? -(jT + kT) / (jT - kT) : -1,
          cT = HT && 0 === kT ? 2 * jT : 0 !== jT ? -2 * jT * kT / (jT - kT) : -2 * kT,
          vT = Math.tan(nT);
        return ZT.FromValuesToRef(LT, 0, 0, 0, 0, pT, 0, vT, 0, 0, BT, -1, 0, 0, cT, 0, zT), gT && zT.multiplyToRef(fT, zT), zT._updateIdentityStatus(!1), zT
      }
      static PerspectiveFovReverseRHToRef(TT, UT, mT, WT, zT) {
        let MT = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          gT = arguments.length > 6 ? arguments[6] : void 0,
          nT = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const HT = 1 / Math.tan(.5 * TT),
          kT = MT ? HT / UT : HT,
          jT = MT ? HT : HT * UT,
          lT = Math.tan(nT);
        return ZT.FromValuesToRef(kT, 0, 0, 0, 0, jT, 0, lT, 0, 0, -mT, -1, 0, 0, -1, 0, zT), gT && zT.multiplyToRef(fT, zT), zT._updateIdentityStatus(!1), zT
      }
      static GetFinalMatrix(TT, UT, mT, WT, zT, MT) {
        const gT = TT.width,
          nT = TT.height,
          HT = TT.x,
          kT = TT.y,
          jT = ZT.FromValues(gT / 2, 0, 0, 0, 0, -nT / 2, 0, 0, 0, 0, MT - zT, 0, HT + gT / 2, nT / 2 + kT, zT, 1),
          lT = new ZT;
        return UT.multiplyToRef(mT, lT), lT.multiplyToRef(WT, lT), lT.multiplyToRef(jT, lT)
      }
      static GetAsMatrix2x2(TT) {
        const UT = TT.m,
          mT = [UT[0], UT[1], UT[4], UT[5]];
        return MT.c.MatrixUse64Bits ? mT : new Float32Array(mT)
      }
      static GetAsMatrix3x3(TT) {
        const UT = TT.m,
          mT = [UT[0], UT[1], UT[2], UT[4], UT[5], UT[6], UT[8], UT[9], UT[10]];
        return MT.c.MatrixUse64Bits ? mT : new Float32Array(mT)
      }
      static Transpose(TT) {
        const UT = new ZT;
        return ZT.TransposeToRef(TT, UT), UT
      }
      static TransposeToRef(TT, UT) {
        const mT = TT.m,
          WT = mT[0],
          zT = mT[4],
          MT = mT[8],
          gT = mT[12],
          nT = mT[1],
          HT = mT[5],
          kT = mT[9],
          jT = mT[13],
          lT = mT[2],
          LT = mT[6],
          pT = mT[10],
          BT = mT[14],
          ZT = mT[3],
          cT = mT[7],
          vT = mT[11],
          fT = mT[15],
          qT = UT._m;
        return qT[0] = WT, qT[1] = zT, qT[2] = MT, qT[3] = gT, qT[4] = nT, qT[5] = HT, qT[6] = kT, qT[7] = jT, qT[8] = lT, qT[9] = LT, qT[10] = pT, qT[11] = BT, qT[12] = ZT, qT[13] = cT, qT[14] = vT, qT[15] = fT, UT.markAsUpdated(), UT._updateIdentityStatus(TT._isIdentity, TT._isIdentityDirty), UT
      }
      static Reflection(TT) {
        const UT = new ZT;
        return ZT.ReflectionToRef(TT, UT), UT
      }
      static ReflectionToRef(TT, UT) {
        TT.normalize();
        const mT = TT.normal.x,
          WT = TT.normal.y,
          zT = TT.normal.z,
          MT = -2 * mT,
          gT = -2 * WT,
          nT = -2 * zT;
        return ZT.FromValuesToRef(MT * mT + 1, gT * mT, nT * mT, 0, MT * WT, gT * WT + 1, nT * WT, 0, MT * zT, gT * zT, nT * zT + 1, 0, MT * TT.d, gT * TT.d, nT * TT.d, 1, UT), UT
      }
      static FromXYZAxesToRef(TT, UT, mT, WT) {
        return ZT.FromValuesToRef(TT._x, TT._y, TT._z, 0, UT._x, UT._y, UT._z, 0, mT._x, mT._y, mT._z, 0, 0, 0, 0, 1, WT), WT
      }
      static FromQuaternionToRef(TT, UT) {
        const mT = TT._x * TT._x,
          WT = TT._y * TT._y,
          zT = TT._z * TT._z,
          MT = TT._x * TT._y,
          gT = TT._z * TT._w,
          nT = TT._z * TT._x,
          HT = TT._y * TT._w,
          kT = TT._y * TT._z,
          jT = TT._x * TT._w;
        return UT._m[0] = 1 - 2 * (WT + zT), UT._m[1] = 2 * (MT + gT), UT._m[2] = 2 * (nT - HT), UT._m[3] = 0, UT._m[4] = 2 * (MT - gT), UT._m[5] = 1 - 2 * (zT + mT), UT._m[6] = 2 * (kT + jT), UT._m[7] = 0, UT._m[8] = 2 * (nT + HT), UT._m[9] = 2 * (kT - jT), UT._m[10] = 1 - 2 * (WT + mT), UT._m[11] = 0, UT._m[12] = 0, UT._m[13] = 0, UT._m[14] = 0, UT._m[15] = 1, UT.markAsUpdated(), UT
      }
    }
    ZT._IdentityReadOnly = ZT.Identity();
    class cT {}
    cT.JB = (0, zT.d)(11, LT.Zero), cT.Matrix = (0, zT.d)(2, ZT.Identity), cT.Quaternion = (0, zT.d)(3, BT.Zero);
    class vT {}
    vT.Vector2 = (0, zT.d)(3, lT.Zero), vT.JB = (0, zT.d)(13, LT.Zero), vT.Vector4 = (0, zT.d)(3, pT.Zero), vT.Quaternion = (0, zT.d)(3, BT.Zero), vT.Matrix = (0, zT.d)(8, ZT.Identity);
    const fT = ZT.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let qT = !1;

    function iT() {
      qT || (qT = !0, Object.defineProperties(lT.prototype, {
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
      }), Object.defineProperties(pT.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(BT.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ZT.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, kT.h)("BABYLON.Vector2", lT), (0, kT.h)("BABYLON.Vector3", LT), (0, kT.h)("BABYLON.Vector4", pT), (0, kT.h)("BABYLON.Matrix", ZT))
    }
  },
  37219: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    const WT = "undefined" !== typeof WeakRef;
    class zT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(TT, UT, mT, WT)
      }
      initialize(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = TT, this.skipNextObservers = UT, this.target = mT, this.currentTarget = WT, this
      }
    }
    class MT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = TT, this.mask = UT, this.scope = mT, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(TT)
      }
    }
    class gT {
      static FromPromise(TT, UT) {
        const mT = new gT;
        return TT.then((TT => {
          mT.notifyObservers(TT)
        })).catch((TT => {
          if (!UT) throw TT;
          UT.notifyObservers(TT)
        })), mT
      }
      get observers() {
        return this._observers
      }
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = UT, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new zT(0), TT && (this._onObserverAdded = TT)
      }
      add(TT) {
        let UT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!TT) return null;
        const zT = new MT(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        zT.unregisterOnNextCall = mT, UT ? this._observers.unshift(zT) : this._observers.push(zT), this._onObserverAdded && this._onObserverAdded(zT), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(zT, this._lastNotifiedValue);
        const gT = WT ? new WeakRef(this) : {
          deref: () => this
        };
        return zT._remove = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const UT = gT.deref();
          UT && (TT ? UT.remove(zT) : UT._remove(zT))
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
      removeCallback(TT, UT) {
        for (let mT = 0; mT < this._observers.length; mT++) {
          const WT = this._observers[mT];
          if (!WT._willBeUnregistered && (WT.callback === TT && (!UT || UT === WT.scope))) return this._deferUnregister(WT), !0
        }
        return !1
      }
      _deferUnregister(TT) {
        TT._willBeUnregistered || (this._numObserversMarkedAsDeleted++, TT.unregisterOnNextCall = !1, TT._willBeUnregistered = !0, setTimeout((() => {
          this._remove(TT)
        }), 0))
      }
      _remove(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT) return !1;
        const mT = this._observers.indexOf(TT);
        return -1 !== mT && (UT && this._numObserversMarkedAsDeleted--, this._observers.splice(mT, 1), !0)
      }
      makeObserverTopPriority(TT) {
        this._remove(TT, !1), this._observers.unshift(TT)
      }
      makeObserverBottomPriority(TT) {
        this._remove(TT, !1), this._observers.push(TT)
      }
      notifyObservers(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = TT), !this._observers.length) return !0;
        const MT = this._eventState;
        MT.mask = UT, MT.target = mT, MT.currentTarget = WT, MT.skipNextObservers = !1, MT.lastReturnValue = TT, MT.userInfo = zT;
        for (const gT of this._observers)
          if (!gT._willBeUnregistered && (gT.mask & UT && (gT.unregisterOnNextCall && this._deferUnregister(gT), gT.scope ? MT.lastReturnValue = gT.callback.apply(gT.scope, [TT, MT]) : MT.lastReturnValue = gT.callback(TT, MT)), MT.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = UT), TT._willBeUnregistered) return;
        const WT = this._eventState;
        WT.mask = mT, WT.skipNextObservers = !1, TT.unregisterOnNextCall && this._deferUnregister(TT), TT.callback(UT, WT)
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
        const TT = new gT;
        return TT._observers = this._observers.slice(0), TT
      }
      hasSpecificMask() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const UT of this._observers)
          if (UT.mask & TT || UT.mask === TT) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);