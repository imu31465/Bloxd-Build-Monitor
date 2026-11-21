export const id = 226;
export const ids = [226];
export const modules = {
  36720: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(36722);
    class qQ {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    qQ.Instances = [], qQ.OnEnginesDisposedObservable = new LQ.e, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
  },
  36717: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => LQ
    });
    class LQ {
      static SetMatrixPrecision(QQ) {
        if (LQ.MatrixTrackPrecisionChange = !1, QQ && !LQ.MatrixUse64Bits && LQ.MatrixTrackedMatrices)
          for (let FQ = 0; FQ < LQ.MatrixTrackedMatrices.length; ++FQ) {
            const QQ = LQ.MatrixTrackedMatrices[FQ],
              wQ = QQ._m;
            QQ._m = new Array(16);
            for (let FQ = 0; FQ < 16; ++FQ) QQ._m[FQ] = wQ[FQ]
          }
        LQ.MatrixUse64Bits = QQ, LQ.MatrixCurrentType = LQ.MatrixUse64Bits ? Array : Float32Array, LQ.MatrixTrackedMatrices = null
      }
    }
    LQ.MatrixUse64Bits = !1, LQ.MatrixTrackPrecisionChange = !0, LQ.MatrixCurrentType = Float32Array, LQ.MatrixTrackedMatrices = []
  },
  36732: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => kQ,
      f: () => mQ,
      i: () => vQ,
      l: () => LQ,
      m: () => oQ,
      o: () => DQ
    });
    class LQ {}

    function qQ(QQ) {
      QQ.updateFlag = LQ._UpdateFlagSeed++
    }

    function oQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const qQ = QQ.RLQ(),
        oQ = FQ.RLQ(),
        DQ = qQ[0],
        kQ = qQ[1],
        vQ = qQ[2],
        mQ = qQ[3],
        uQ = qQ[4],
        HQ = qQ[5],
        bQ = qQ[6],
        YQ = qQ[7],
        xQ = qQ[8],
        AQ = qQ[9],
        tQ = qQ[10],
        eQ = qQ[11],
        MQ = qQ[12],
        GQ = qQ[13],
        pQ = qQ[14],
        cQ = qQ[15],
        CQ = oQ[0],
        SQ = oQ[1],
        iQ = oQ[2],
        WQ = oQ[3],
        RQ = oQ[4],
        OQ = oQ[5],
        sQ = oQ[6],
        rQ = oQ[7],
        IQ = oQ[8],
        UQ = oQ[9],
        NQ = oQ[10],
        TQ = oQ[11],
        KQ = oQ[12],
        zQ = oQ[13],
        lQ = oQ[14],
        jQ = oQ[15];
      wQ[LQ] = DQ * CQ + kQ * RQ + vQ * IQ + mQ * KQ, wQ[LQ + 1] = DQ * SQ + kQ * OQ + vQ * UQ + mQ * zQ, wQ[LQ + 2] = DQ * iQ + kQ * sQ + vQ * NQ + mQ * lQ, wQ[LQ + 3] = DQ * WQ + kQ * rQ + vQ * TQ + mQ * jQ, wQ[LQ + 4] = uQ * CQ + HQ * RQ + bQ * IQ + YQ * KQ, wQ[LQ + 5] = uQ * SQ + HQ * OQ + bQ * UQ + YQ * zQ, wQ[LQ + 6] = uQ * iQ + HQ * sQ + bQ * NQ + YQ * lQ, wQ[LQ + 7] = uQ * WQ + HQ * rQ + bQ * TQ + YQ * jQ, wQ[LQ + 8] = xQ * CQ + AQ * RQ + tQ * IQ + eQ * KQ, wQ[LQ + 9] = xQ * SQ + AQ * OQ + tQ * UQ + eQ * zQ, wQ[LQ + 10] = xQ * iQ + AQ * sQ + tQ * NQ + eQ * lQ, wQ[LQ + 11] = xQ * WQ + AQ * rQ + tQ * TQ + eQ * jQ, wQ[LQ + 12] = MQ * CQ + GQ * RQ + pQ * IQ + cQ * KQ, wQ[LQ + 13] = MQ * SQ + GQ * OQ + pQ * UQ + cQ * zQ, wQ[LQ + 14] = MQ * iQ + GQ * sQ + pQ * NQ + cQ * lQ, wQ[LQ + 15] = MQ * WQ + GQ * rQ + pQ * TQ + cQ * jQ
    }

    function DQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      oQ(QQ, FQ, wQ.RLQ(), LQ), qQ(wQ)
    }

    function kQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const LQ = QQ.RLQ();
      FQ[wQ] = LQ[0], FQ[wQ + 1] = LQ[1], FQ[wQ + 2] = LQ[2], FQ[wQ + 3] = LQ[3], FQ[wQ + 4] = LQ[4], FQ[wQ + 5] = LQ[5], FQ[wQ + 6] = LQ[6], FQ[wQ + 7] = LQ[7], FQ[wQ + 8] = LQ[8], FQ[wQ + 9] = LQ[9], FQ[wQ + 10] = LQ[10], FQ[wQ + 11] = LQ[11], FQ[wQ + 12] = LQ[12], FQ[wQ + 13] = LQ[13], FQ[wQ + 14] = LQ[14], FQ[wQ + 15] = LQ[15]
    }

    function vQ(QQ, FQ) {
      const wQ = mQ(QQ, FQ.RLQ());
      return wQ && qQ(FQ), wQ
    }

    function mQ(QQ, FQ) {
      const wQ = QQ.RLQ(),
        LQ = wQ[0],
        qQ = wQ[1],
        oQ = wQ[2],
        DQ = wQ[3],
        kQ = wQ[4],
        vQ = wQ[5],
        mQ = wQ[6],
        uQ = wQ[7],
        HQ = wQ[8],
        bQ = wQ[9],
        YQ = wQ[10],
        xQ = wQ[11],
        AQ = wQ[12],
        tQ = wQ[13],
        eQ = wQ[14],
        MQ = wQ[15],
        GQ = YQ * MQ - eQ * xQ,
        pQ = bQ * MQ - tQ * xQ,
        cQ = bQ * eQ - tQ * YQ,
        CQ = HQ * MQ - AQ * xQ,
        SQ = HQ * eQ - YQ * AQ,
        iQ = HQ * tQ - AQ * bQ,
        WQ = +(vQ * GQ - mQ * pQ + uQ * cQ),
        RQ = -(kQ * GQ - mQ * CQ + uQ * SQ),
        OQ = +(kQ * pQ - vQ * CQ + uQ * iQ),
        sQ = -(kQ * cQ - vQ * SQ + mQ * iQ),
        rQ = LQ * WQ + qQ * RQ + oQ * OQ + DQ * sQ;
      if (0 === rQ) return !1;
      const IQ = 1 / rQ,
        UQ = mQ * MQ - eQ * uQ,
        NQ = vQ * MQ - tQ * uQ,
        TQ = vQ * eQ - tQ * mQ,
        KQ = kQ * MQ - AQ * uQ,
        zQ = kQ * eQ - AQ * mQ,
        lQ = kQ * tQ - AQ * vQ,
        jQ = mQ * xQ - YQ * uQ,
        aQ = vQ * xQ - bQ * uQ,
        XQ = vQ * YQ - bQ * mQ,
        fQ = kQ * xQ - HQ * uQ,
        VQ = kQ * YQ - HQ * mQ,
        hQ = kQ * bQ - HQ * vQ,
        JQ = -(qQ * GQ - oQ * pQ + DQ * cQ),
        EQ = +(LQ * GQ - oQ * CQ + DQ * SQ),
        nQ = -(LQ * pQ - qQ * CQ + DQ * iQ),
        gQ = +(LQ * cQ - qQ * SQ + oQ * iQ),
        PQ = +(qQ * UQ - oQ * NQ + DQ * TQ),
        ZQ = -(LQ * UQ - oQ * KQ + DQ * zQ),
        yQ = +(LQ * NQ - qQ * KQ + DQ * lQ),
        BQ = -(LQ * TQ - qQ * zQ + oQ * lQ),
        dQ = -(qQ * jQ - oQ * aQ + DQ * XQ),
        QF = +(LQ * jQ - oQ * fQ + DQ * VQ),
        FF = -(LQ * aQ - qQ * fQ + DQ * hQ),
        wF = +(LQ * XQ - qQ * VQ + oQ * hQ);
      return FQ[0] = WQ * IQ, FQ[1] = JQ * IQ, FQ[2] = PQ * IQ, FQ[3] = dQ * IQ, FQ[4] = RQ * IQ, FQ[5] = EQ * IQ, FQ[6] = ZQ * IQ, FQ[7] = QF * IQ, FQ[8] = OQ * IQ, FQ[9] = nQ * IQ, FQ[10] = yQ * IQ, FQ[11] = FF * IQ, FQ[12] = sQ * IQ, FQ[13] = gQ * IQ, FQ[14] = BQ * IQ, FQ[15] = wF * IQ, !0
    }
    LQ._UpdateFlagSeed = 0
  },
  36696: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => AQ,
      e: () => xQ,
      i: () => pQ,
      k: () => eQ,
      n: () => HQ,
      p: () => bQ,
      t: () => YQ
    });
    var LQ = wQ(36705),
      qQ = wQ(36709),
      oQ = wQ(36717),
      DQ = wQ(36720),
      kQ = wQ(36729),
      vQ = wQ(36732),
      mQ = wQ(36741);
    const uQ = QQ => parseInt(QQ.toString().replace(/\W/g, ""));
    class HQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = QQ, this.y = FQ
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let QQ = uQ(this.x);
        return QQ = 397 * QQ ^ uQ(this.y), QQ
      }
      toArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[FQ] = this.x, QQ[FQ + 1] = this.y, this
      }
      bwQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HQ.FromArrayToRef(QQ, FQ, this), this
      }
      RLQ() {
        return [this.x, this.y]
      }
      Qs(QQ) {
        return this.x = QQ.x, this.y = QQ.y, this
      }
      vQQ(QQ, FQ) {
        return this.x = QQ, this.y = FQ, this
      }
      set(QQ, FQ) {
        return this.vQQ(QQ, FQ)
      }
      K3(QQ) {
        return this.vQQ(QQ, QQ)
      }
      add(QQ) {
        return new HQ(this.x + QQ.x, this.y + QQ.y)
      }
      addToRef(QQ, FQ) {
        return FQ.x = this.x + QQ.x, FQ.y = this.y + QQ.y, FQ
      }
      addInPlace(QQ) {
        return this.x += QQ.x, this.y += QQ.y, this
      }
      addInPlaceFromFloats(QQ, FQ) {
        return this.x += QQ, this.y += FQ, this
      }
      addVector3(QQ) {
        return new HQ(this.x + QQ.x, this.y + QQ.y)
      }
      subtract(QQ) {
        return new HQ(this.x - QQ.x, this.y - QQ.y)
      }
      subtractToRef(QQ, FQ) {
        return FQ.x = this.x - QQ.x, FQ.y = this.y - QQ.y, FQ
      }
      gLQ(QQ) {
        return this.x -= QQ.x, this.y -= QQ.y, this
      }
      multiplyInPlace(QQ) {
        return this.x *= QQ.x, this.y *= QQ.y, this
      }
      multiply(QQ) {
        return new HQ(this.x * QQ.x, this.y * QQ.y)
      }
      multiplyToRef(QQ, FQ) {
        return FQ.x = this.x * QQ.x, FQ.y = this.y * QQ.y, FQ
      }
      multiplyByFloats(QQ, FQ) {
        return new HQ(this.x * QQ, this.y * FQ)
      }
      divide(QQ) {
        return new HQ(this.x / QQ.x, this.y / QQ.y)
      }
      divideToRef(QQ, FQ) {
        return FQ.x = this.x / QQ.x, FQ.y = this.y / QQ.y, FQ
      }
      divideInPlace(QQ) {
        return this.x = this.x / QQ.x, this.y = this.y / QQ.y, this
      }
      minimizeInPlace(QQ) {
        return this.minimizeInPlaceFromFloats(QQ.x, QQ.y)
      }
      maximizeInPlace(QQ) {
        return this.maximizeInPlaceFromFloats(QQ.x, QQ.y)
      }
      minimizeInPlaceFromFloats(QQ, FQ) {
        return this.x = Math.min(QQ, this.x), this.y = Math.min(FQ, this.y), this
      }
      maximizeInPlaceFromFloats(QQ, FQ) {
        return this.x = Math.max(QQ, this.x), this.y = Math.max(FQ, this.y), this
      }
      subtractFromFloats(QQ, FQ) {
        return new HQ(this.x - QQ, this.y - FQ)
      }
      subtractFromFloatsToRef(QQ, FQ, wQ) {
        return wQ.x = this.x - QQ, wQ.y = this.y - FQ, wQ
      }
      mo() {
        return new HQ(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(QQ) {
        return QQ.x = -this.x, QQ.y = -this.y, QQ
      }
      scaleInPlace(QQ) {
        return this.x *= QQ, this.y *= QQ, this
      }
      scale(QQ) {
        return new HQ(this.x * QQ, this.y * QQ)
      }
      scaleToRef(QQ, FQ) {
        return FQ.x = this.x * QQ, FQ.y = this.y * QQ, FQ
      }
      scaleAndAddToRef(QQ, FQ) {
        return FQ.x += this.x * QQ, FQ.y += this.y * QQ, FQ
      }
      equals(QQ) {
        return QQ && this.x === QQ.x && this.y === QQ.y
      }
      equalsWithEpsilon(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LQ.b;
        return QQ && (0, kQ.WithinEpsilon)(this.x, QQ.x, FQ) && (0, kQ.WithinEpsilon)(this.y, QQ.y, FQ)
      }
      LkQ(QQ, FQ) {
        return this.x === QQ && this.y === FQ
      }
      floor() {
        return new HQ(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(QQ) {
        return QQ.x = Math.floor(this.x), QQ.y = Math.floor(this.y), QQ
      }
      fract() {
        return new HQ(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(QQ) {
        return QQ.x = this.x - Math.floor(this.x), QQ.y = this.y - Math.floor(this.y), QQ
      }
      rotate(QQ) {
        return this.rotateToRef(QQ, new HQ)
      }
      rotateToRef(QQ, FQ) {
        const wQ = Math.cos(QQ),
          LQ = Math.sin(QQ);
        return FQ.x = wQ * this.x - LQ * this.y, FQ.y = LQ * this.x + wQ * this.y, FQ
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
      normalizeFromLength(QQ) {
        return 0 === QQ || 1 === QQ ? this : this.scaleInPlace(1 / QQ)
      }
      normalizeToNew() {
        const QQ = new HQ;
        return this.normalizeToRef(QQ), QQ
      }
      normalizeToRef(QQ) {
        const FQ = this.length();
        return 0 === FQ || 1 === FQ ? (QQ.x = this.x, QQ.y = this.y, QQ) : this.scaleToRef(1 / FQ, QQ)
      }
      clone() {
        return new HQ(this.x, this.y)
      }
      dot(QQ) {
        return this.x * QQ.x + this.y * QQ.y
      }
      static Zero() {
        return new HQ(0, 0)
      }
      static One() {
        return new HQ(1, 1)
      }
      static Random() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new HQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
      }
      static RandomToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).vQQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
      }
      static get ZeroReadOnly() {
        return HQ._ZeroReadOnly
      }
      static FromArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new HQ(QQ[FQ], QQ[FQ + 1])
      }
      static FromArrayToRef(QQ, FQ, wQ) {
        return wQ.x = QQ[FQ], wQ.y = QQ[FQ + 1], wQ
      }
      static FromFloatsToRef(QQ, FQ, wQ) {
        return wQ.vQQ(QQ, FQ), wQ
      }
      static CatmullRom(QQ, FQ, wQ, LQ, qQ) {
        const oQ = qQ * qQ,
          DQ = qQ * oQ,
          kQ = .5 * (2 * FQ.x + (-QQ.x + wQ.x) * qQ + (2 * QQ.x - 5 * FQ.x + 4 * wQ.x - LQ.x) * oQ + (-QQ.x + 3 * FQ.x - 3 * wQ.x + LQ.x) * DQ),
          vQ = .5 * (2 * FQ.y + (-QQ.y + wQ.y) * qQ + (2 * QQ.y - 5 * FQ.y + 4 * wQ.y - LQ.y) * oQ + (-QQ.y + 3 * FQ.y - 3 * wQ.y + LQ.y) * DQ);
        return new HQ(kQ, vQ)
      }
      static ClampToRef(QQ, FQ, wQ, LQ) {
        return LQ.x = (0, kQ.Clamp)(QQ.x, FQ.x, wQ.x), LQ.y = (0, kQ.Clamp)(QQ.y, FQ.y, wQ.y), LQ
      }
      static Clamp(QQ, FQ, wQ) {
        const LQ = (0, kQ.Clamp)(QQ.x, FQ.x, wQ.x),
          qQ = (0, kQ.Clamp)(QQ.y, FQ.y, wQ.y);
        return new HQ(LQ, qQ)
      }
      static Hermite(QQ, FQ, wQ, LQ, qQ) {
        const oQ = qQ * qQ,
          DQ = qQ * oQ,
          kQ = 2 * DQ - 3 * oQ + 1,
          vQ = -2 * DQ + 3 * oQ,
          mQ = DQ - 2 * oQ + qQ,
          uQ = DQ - oQ,
          bQ = QQ.x * kQ + wQ.x * vQ + FQ.x * mQ + LQ.x * uQ,
          YQ = QQ.y * kQ + wQ.y * vQ + FQ.y * mQ + LQ.y * uQ;
        return new HQ(bQ, YQ)
      }
      static Hermite1stDerivative(QQ, FQ, wQ, LQ, qQ) {
        return this.Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, new HQ)
      }
      static Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = qQ * qQ;
        return oQ.x = 6 * (DQ - qQ) * QQ.x + (3 * DQ - 4 * qQ + 1) * FQ.x + 6 * (-DQ + qQ) * wQ.x + (3 * DQ - 2 * qQ) * LQ.x, oQ.y = 6 * (DQ - qQ) * QQ.y + (3 * DQ - 4 * qQ + 1) * FQ.y + 6 * (-DQ + qQ) * wQ.y + (3 * DQ - 2 * qQ) * LQ.y, oQ
      }
      static Lerp(QQ, FQ, wQ) {
        return HQ.LerpToRef(QQ, FQ, wQ, new HQ)
      }
      static LerpToRef(QQ, FQ, wQ, LQ) {
        return LQ.x = QQ.x + (FQ.x - QQ.x) * wQ, LQ.y = QQ.y + (FQ.y - QQ.y) * wQ, LQ
      }
      static Dot(QQ, FQ) {
        return QQ.x * FQ.x + QQ.y * FQ.y
      }
      static Normalize(QQ) {
        return HQ.NormalizeToRef(QQ, new HQ)
      }
      static NormalizeToRef(QQ, FQ) {
        return QQ.normalizeToRef(FQ), FQ
      }
      static Minimize(QQ, FQ) {
        const wQ = QQ.x < FQ.x ? QQ.x : FQ.x,
          LQ = QQ.y < FQ.y ? QQ.y : FQ.y;
        return new HQ(wQ, LQ)
      }
      static Maximize(QQ, FQ) {
        const wQ = QQ.x > FQ.x ? QQ.x : FQ.x,
          LQ = QQ.y > FQ.y ? QQ.y : FQ.y;
        return new HQ(wQ, LQ)
      }
      static Transform(QQ, FQ) {
        return HQ.TransformToRef(QQ, FQ, new HQ)
      }
      static TransformToRef(QQ, FQ, wQ) {
        const LQ = FQ.m,
          qQ = QQ.x * LQ[0] + QQ.y * LQ[4] + LQ[12],
          oQ = QQ.x * LQ[1] + QQ.y * LQ[5] + LQ[13];
        return wQ.x = qQ, wQ.y = oQ, wQ
      }
      static PointInTriangle(QQ, FQ, wQ, LQ) {
        const qQ = .5 * (-wQ.y * LQ.x + FQ.y * (-wQ.x + LQ.x) + FQ.x * (wQ.y - LQ.y) + wQ.x * LQ.y),
          oQ = qQ < 0 ? -1 : 1,
          DQ = (FQ.y * LQ.x - FQ.x * LQ.y + (LQ.y - FQ.y) * QQ.x + (FQ.x - LQ.x) * QQ.y) * oQ,
          kQ = (FQ.x * wQ.y - FQ.y * wQ.x + (FQ.y - wQ.y) * QQ.x + (wQ.x - FQ.x) * QQ.y) * oQ;
        return DQ > 0 && kQ > 0 && DQ + kQ < 2 * qQ * oQ
      }
      static Distance(QQ, FQ) {
        return Math.sqrt(HQ.DistanceSquared(QQ, FQ))
      }
      static DistanceSquared(QQ, FQ) {
        const wQ = QQ.x - FQ.x,
          LQ = QQ.y - FQ.y;
        return wQ * wQ + LQ * LQ
      }
      static Center(QQ, FQ) {
        return HQ.CenterToRef(QQ, FQ, new HQ)
      }
      static CenterToRef(QQ, FQ, wQ) {
        return wQ.vQQ((QQ.x + FQ.x) / 2, (QQ.y + FQ.y) / 2)
      }
      static DistanceOfPointFromSegment(QQ, FQ, wQ) {
        const LQ = HQ.DistanceSquared(FQ, wQ);
        if (0 === LQ) return HQ.Distance(QQ, FQ);
        const qQ = wQ.subtract(FQ),
          oQ = Math.max(0, Math.min(1, HQ.Dot(QQ.subtract(FQ), qQ) / LQ)),
          DQ = FQ.add(qQ.multiplyByFloats(oQ, oQ));
        return HQ.Distance(QQ, DQ)
      }
    }
    HQ._V8PerformanceHack = new HQ(.5, .5), HQ._ZeroReadOnly = HQ.Zero();
    class bQ {
      get x() {
        return this._x
      }
      set x(QQ) {
        this._x = QQ, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(QQ) {
        this._y = QQ, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(QQ) {
        this._z = QQ, this._isDirty = !0
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = QQ, this._y = FQ, this._z = wQ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Ox"
      }
      getHashCode() {
        let QQ = uQ(this._x);
        return QQ = 397 * QQ ^ uQ(this._y), QQ = 397 * QQ ^ uQ(this._z), QQ
      }
      RLQ() {
        return [this._x, this._y, this._z]
      }
      toArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[FQ] = this._x, QQ[FQ + 1] = this._y, QQ[FQ + 2] = this._z, this
      }
      bwQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bQ.FromArrayToRef(QQ, FQ, this), this
      }
      toQuaternion() {
        return xQ.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(QQ) {
        return this._x += QQ._x, this._y += QQ._y, this._z += QQ._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(QQ, FQ, wQ) {
        return this._x += QQ, this._y += FQ, this._z += wQ, this._isDirty = !0, this
      }
      add(QQ) {
        return new bQ(this._x + QQ._x, this._y + QQ._y, this._z + QQ._z)
      }
      addToRef(QQ, FQ) {
        return FQ._x = this._x + QQ._x, FQ._y = this._y + QQ._y, FQ._z = this._z + QQ._z, FQ._isDirty = !0, FQ
      }
      gLQ(QQ) {
        return this._x -= QQ._x, this._y -= QQ._y, this._z -= QQ._z, this._isDirty = !0, this
      }
      subtract(QQ) {
        return new bQ(this._x - QQ._x, this._y - QQ._y, this._z - QQ._z)
      }
      subtractToRef(QQ, FQ) {
        return this.subtractFromFloatsToRef(QQ._x, QQ._y, QQ._z, FQ)
      }
      subtractFromFloats(QQ, FQ, wQ) {
        return new bQ(this._x - QQ, this._y - FQ, this._z - wQ)
      }
      subtractFromFloatsToRef(QQ, FQ, wQ, LQ) {
        return LQ._x = this._x - QQ, LQ._y = this._y - FQ, LQ._z = this._z - wQ, LQ._isDirty = !0, LQ
      }
      mo() {
        return new bQ(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(QQ) {
        return QQ._x = -1 * this._x, QQ._y = -1 * this._y, QQ._z = -1 * this._z, QQ._isDirty = !0, QQ
      }
      scaleInPlace(QQ) {
        return this._x *= QQ, this._y *= QQ, this._z *= QQ, this._isDirty = !0, this
      }
      scale(QQ) {
        return new bQ(this._x * QQ, this._y * QQ, this._z * QQ)
      }
      scaleToRef(QQ, FQ) {
        return FQ._x = this._x * QQ, FQ._y = this._y * QQ, FQ._z = this._z * QQ, FQ._isDirty = !0, FQ
      }
      getNormalToRef(QQ) {
        const FQ = this.length();
        let wQ = Math.acos(this._y / FQ);
        const LQ = Math.atan2(this._z, this._x);
        wQ > Math.PI / 2 ? wQ -= Math.PI / 2 : wQ += Math.PI / 2;
        const qQ = FQ * Math.sin(wQ) * Math.cos(LQ),
          oQ = FQ * Math.cos(wQ),
          DQ = FQ * Math.sin(wQ) * Math.sin(LQ);
        return QQ.set(qQ, oQ, DQ), QQ
      }
      applyRotationQuaternionToRef(QQ, FQ) {
        const wQ = this._x,
          LQ = this._y,
          qQ = this._z,
          oQ = QQ._x,
          DQ = QQ._y,
          kQ = QQ._z,
          vQ = QQ._w,
          mQ = 2 * (DQ * qQ - kQ * LQ),
          uQ = 2 * (kQ * wQ - oQ * qQ),
          HQ = 2 * (oQ * LQ - DQ * wQ);
        return FQ._x = wQ + vQ * mQ + DQ * HQ - kQ * uQ, FQ._y = LQ + vQ * uQ + kQ * mQ - oQ * HQ, FQ._z = qQ + vQ * HQ + oQ * uQ - DQ * mQ, FQ._isDirty = !0, FQ
      }
      applyRotationQuaternionInPlace(QQ) {
        return this.applyRotationQuaternionToRef(QQ, this)
      }
      applyRotationQuaternion(QQ) {
        return this.applyRotationQuaternionToRef(QQ, new bQ)
      }
      scaleAndAddToRef(QQ, FQ) {
        return FQ._x += this._x * QQ, FQ._y += this._y * QQ, FQ._z += this._z * QQ, FQ._isDirty = !0, FQ
      }
      projectOnPlane(QQ, FQ) {
        return this.projectOnPlaneToRef(QQ, FQ, new bQ)
      }
      projectOnPlaneToRef(QQ, FQ, wQ) {
        const LQ = QQ.normal,
          qQ = QQ.d,
          oQ = tQ.Ox[0];
        this.subtractToRef(FQ, oQ), oQ.normalize();
        const DQ = bQ.Dot(oQ, LQ);
        if (Math.abs(DQ) < 1e-10) wQ.K3(1 / 0);
        else {
          const QQ = -(bQ.Dot(FQ, LQ) + qQ) / DQ,
            kQ = oQ.scaleInPlace(QQ);
          FQ.addToRef(kQ, wQ)
        }
        return wQ
      }
      equals(QQ) {
        return QQ && this._x === QQ._x && this._y === QQ._y && this._z === QQ._z
      }
      equalsWithEpsilon(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LQ.b;
        return QQ && (0, kQ.WithinEpsilon)(this._x, QQ._x, FQ) && (0, kQ.WithinEpsilon)(this._y, QQ._y, FQ) && (0, kQ.WithinEpsilon)(this._z, QQ._z, FQ)
      }
      LkQ(QQ, FQ, wQ) {
        return this._x === QQ && this._y === FQ && this._z === wQ
      }
      multiplyInPlace(QQ) {
        return this._x *= QQ._x, this._y *= QQ._y, this._z *= QQ._z, this._isDirty = !0, this
      }
      multiply(QQ) {
        return this.multiplyByFloats(QQ._x, QQ._y, QQ._z)
      }
      multiplyToRef(QQ, FQ) {
        return FQ._x = this._x * QQ._x, FQ._y = this._y * QQ._y, FQ._z = this._z * QQ._z, FQ._isDirty = !0, FQ
      }
      multiplyByFloats(QQ, FQ, wQ) {
        return new bQ(this._x * QQ, this._y * FQ, this._z * wQ)
      }
      divide(QQ) {
        return new bQ(this._x / QQ._x, this._y / QQ._y, this._z / QQ._z)
      }
      divideToRef(QQ, FQ) {
        return FQ._x = this._x / QQ._x, FQ._y = this._y / QQ._y, FQ._z = this._z / QQ._z, FQ._isDirty = !0, FQ
      }
      divideInPlace(QQ) {
        return this._x = this._x / QQ._x, this._y = this._y / QQ._y, this._z = this._z / QQ._z, this._isDirty = !0, this
      }
      minimizeInPlace(QQ) {
        return this.minimizeInPlaceFromFloats(QQ._x, QQ._y, QQ._z)
      }
      maximizeInPlace(QQ) {
        return this.maximizeInPlaceFromFloats(QQ._x, QQ._y, QQ._z)
      }
      minimizeInPlaceFromFloats(QQ, FQ, wQ) {
        return QQ < this._x && (this.x = QQ), FQ < this._y && (this.y = FQ), wQ < this._z && (this.z = wQ), this
      }
      maximizeInPlaceFromFloats(QQ, FQ, wQ) {
        return QQ > this._x && (this.x = QQ), FQ > this._y && (this.y = FQ), wQ > this._z && (this.z = wQ), this
      }
      isNonUniformWithinEpsilon(QQ) {
        const FQ = Math.abs(this._x),
          wQ = Math.abs(this._y);
        if (!(0, kQ.WithinEpsilon)(FQ, wQ, QQ)) return !0;
        const LQ = Math.abs(this._z);
        return !(0, kQ.WithinEpsilon)(FQ, LQ, QQ) || !(0, kQ.WithinEpsilon)(wQ, LQ, QQ)
      }
      get isNonUniform() {
        const QQ = Math.abs(this._x);
        if (QQ !== Math.abs(this._y)) return !0;
        return QQ !== Math.abs(this._z)
      }
      floorToRef(QQ) {
        return QQ._x = Math.floor(this._x), QQ._y = Math.floor(this._y), QQ._z = Math.floor(this._z), QQ._isDirty = !0, QQ
      }
      floor() {
        return new bQ(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(QQ) {
        return QQ._x = this._x - Math.floor(this._x), QQ._y = this._y - Math.floor(this._y), QQ._z = this._z - Math.floor(this._z), QQ._isDirty = !0, QQ
      }
      fract() {
        return new bQ(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(QQ) {
        if ("xyz" === (QQ = QQ.toLowerCase())) return this;
        const FQ = tQ.Ox[0].Qs(this);
        return this.x = FQ[QQ[0]], this.y = FQ[QQ[1]], this.z = FQ[QQ[2]], this
      }
      rotateByQuaternionToRef(QQ, FQ) {
        return QQ.toRotationMatrix(tQ.Matrix[0]), bQ.TransformCoordinatesToRef(this, tQ.Matrix[0], FQ), FQ
      }
      rotateByQuaternionAroundPointToRef(QQ, FQ, wQ) {
        return this.subtractToRef(FQ, tQ.Ox[0]), tQ.Ox[0].rotateByQuaternionToRef(QQ, tQ.Ox[0]), FQ.addToRef(tQ.Ox[0], wQ), wQ
      }
      cross(QQ) {
        return bQ.CrossToRef(this, QQ, new bQ)
      }
      normalizeFromLength(QQ) {
        return 0 === QQ || 1 === QQ ? this : this.scaleInPlace(1 / QQ)
      }
      normalizeToNew() {
        return this.normalizeToRef(new bQ)
      }
      normalizeToRef(QQ) {
        const FQ = this.length();
        return 0 === FQ || 1 === FQ ? (QQ._x = this._x, QQ._y = this._y, QQ._z = this._z, QQ._isDirty = !0, QQ) : this.scaleToRef(1 / FQ, QQ)
      }
      clone() {
        return new bQ(this._x, this._y, this._z)
      }
      Qs(QQ) {
        return this.vQQ(QQ._x, QQ._y, QQ._z)
      }
      vQQ(QQ, FQ, wQ) {
        return this._x = QQ, this._y = FQ, this._z = wQ, this._isDirty = !0, this
      }
      set(QQ, FQ, wQ) {
        return this.vQQ(QQ, FQ, wQ)
      }
      K3(QQ) {
        return this._x = this._y = this._z = QQ, this._isDirty = !0, this
      }
      static GetClipFactor(QQ, FQ, wQ, LQ) {
        const qQ = bQ.Dot(QQ, wQ);
        return (qQ - LQ) / (qQ - bQ.Dot(FQ, wQ))
      }
      static GetAngleBetweenVectors(QQ, FQ, wQ) {
        const LQ = QQ.normalizeToRef(tQ.Ox[1]),
          qQ = FQ.normalizeToRef(tQ.Ox[2]);
        let oQ = bQ.Dot(LQ, qQ);
        oQ = (0, kQ.Clamp)(oQ, -1, 1);
        const DQ = Math.acos(oQ),
          vQ = tQ.Ox[3];
        return bQ.CrossToRef(LQ, qQ, vQ), bQ.Dot(vQ, wQ) > 0 ? isNaN(DQ) ? 0 : DQ : isNaN(DQ) ? -Math.PI : -Math.acos(oQ)
      }
      static GetAngleBetweenVectorsOnPlane(QQ, FQ, wQ) {
        tQ.Ox[0].Qs(QQ);
        const LQ = tQ.Ox[0];
        tQ.Ox[1].Qs(FQ);
        const qQ = tQ.Ox[1];
        tQ.Ox[2].Qs(wQ);
        const oQ = tQ.Ox[2],
          DQ = tQ.Ox[3],
          vQ = tQ.Ox[4];
        LQ.normalize(), qQ.normalize(), oQ.normalize(), bQ.CrossToRef(oQ, LQ, DQ), bQ.CrossToRef(DQ, oQ, vQ);
        const mQ = Math.atan2(bQ.Dot(qQ, DQ), bQ.Dot(qQ, vQ));
        return (0, kQ.NormalizeRadians)(mQ)
      }
      static PitchYawRollToMoveBetweenPointsToRef(QQ, FQ, wQ) {
        const LQ = eQ.Ox[0];
        return FQ.subtractToRef(QQ, LQ), wQ._y = Math.atan2(LQ.x, LQ.z) || 0, wQ._x = Math.atan2(Math.sqrt(LQ.x ** 2 + LQ.z ** 2), LQ.y) || 0, wQ._z = 0, wQ._isDirty = !0, wQ
      }
      static PitchYawRollToMoveBetweenPoints(QQ, FQ) {
        const wQ = bQ.Zero();
        return bQ.PitchYawRollToMoveBetweenPointsToRef(QQ, FQ, wQ)
      }
      static SlerpToRef(QQ, FQ, wQ, qQ) {
        wQ = (0, kQ.Clamp)(wQ, 0, 1);
        const oQ = tQ.Ox[0],
          DQ = tQ.Ox[1];
        oQ.Qs(QQ);
        const vQ = oQ.length();
        oQ.normalizeFromLength(vQ), DQ.Qs(FQ);
        const mQ = DQ.length();
        DQ.normalizeFromLength(mQ);
        const uQ = bQ.Dot(oQ, DQ);
        let HQ, YQ;
        if (uQ < 1 - LQ.b) {
          const QQ = Math.acos(uQ),
            FQ = 1 / Math.sin(QQ);
          HQ = Math.sin((1 - wQ) * QQ) * FQ, YQ = Math.sin(wQ * QQ) * FQ
        } else HQ = 1 - wQ, YQ = wQ;
        return oQ.scaleInPlace(HQ), DQ.scaleInPlace(YQ), qQ.Qs(oQ).addInPlace(DQ), qQ.scaleInPlace((0, kQ.Lerp)(vQ, mQ, wQ)), qQ
      }
      static SmoothToRef(QQ, FQ, wQ, LQ, qQ) {
        return bQ.SlerpToRef(QQ, FQ, 0 === LQ ? 1 : wQ / LQ, qQ), qQ
      }
      static FromArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new bQ(QQ[FQ], QQ[FQ + 1], QQ[FQ + 2])
      }
      static FromFloatArray(QQ, FQ) {
        return bQ.FromArray(QQ, FQ)
      }
      static FromArrayToRef(QQ, FQ, wQ) {
        return wQ._x = QQ[FQ], wQ._y = QQ[FQ + 1], wQ._z = QQ[FQ + 2], wQ._isDirty = !0, wQ
      }
      static FromFloatArrayToRef(QQ, FQ, wQ) {
        return bQ.FromArrayToRef(QQ, FQ, wQ)
      }
      static FromFloatsToRef(QQ, FQ, wQ, LQ) {
        return LQ.vQQ(QQ, FQ, wQ), LQ
      }
      static Zero() {
        return new bQ(0, 0, 0)
      }
      static One() {
        return new bQ(1, 1, 1)
      }
      static Up() {
        return new bQ(0, 1, 0)
      }
      static get UpReadOnly() {
        return bQ._UpReadOnly
      }
      static get DownReadOnly() {
        return bQ._DownReadOnly
      }
      static get RightReadOnly() {
        return bQ._RightReadOnly
      }
      static get LeftReadOnly() {
        return bQ._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return bQ._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return bQ._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return bQ._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return bQ._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return bQ._ZeroReadOnly
      }
      static get OneReadOnly() {
        return bQ._OneReadOnly
      }
      static Down() {
        return new bQ(0, -1, 0)
      }
      static Forward() {
        return new bQ(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new bQ(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new bQ(1, 0, 0)
      }
      static Left() {
        return new bQ(-1, 0, 0)
      }
      static Random() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new bQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
      }
      static RandomToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).vQQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
      }
      static TransformCoordinates(QQ, FQ) {
        const wQ = bQ.Zero();
        return bQ.TransformCoordinatesToRef(QQ, FQ, wQ), wQ
      }
      static TransformCoordinatesToRef(QQ, FQ, wQ) {
        return bQ.TransformCoordinatesFromFloatsToRef(QQ._x, QQ._y, QQ._z, FQ, wQ), wQ
      }
      static TransformCoordinatesFromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
        const oQ = LQ.m,
          DQ = QQ * oQ[0] + FQ * oQ[4] + wQ * oQ[8] + oQ[12],
          kQ = QQ * oQ[1] + FQ * oQ[5] + wQ * oQ[9] + oQ[13],
          vQ = QQ * oQ[2] + FQ * oQ[6] + wQ * oQ[10] + oQ[14],
          mQ = 1 / (QQ * oQ[3] + FQ * oQ[7] + wQ * oQ[11] + oQ[15]);
        return qQ._x = DQ * mQ, qQ._y = kQ * mQ, qQ._z = vQ * mQ, qQ._isDirty = !0, qQ
      }
      static TransformNormal(QQ, FQ) {
        const wQ = bQ.Zero();
        return bQ.TransformNormalToRef(QQ, FQ, wQ), wQ
      }
      static TransformNormalToRef(QQ, FQ, wQ) {
        return this.TransformNormalFromFloatsToRef(QQ._x, QQ._y, QQ._z, FQ, wQ), wQ
      }
      static TransformNormalFromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
        const oQ = LQ.m;
        return qQ._x = QQ * oQ[0] + FQ * oQ[4] + wQ * oQ[8], qQ._y = QQ * oQ[1] + FQ * oQ[5] + wQ * oQ[9], qQ._z = QQ * oQ[2] + FQ * oQ[6] + wQ * oQ[10], qQ._isDirty = !0, qQ
      }
      static CatmullRom(QQ, FQ, wQ, LQ, qQ) {
        const oQ = qQ * qQ,
          DQ = qQ * oQ,
          kQ = .5 * (2 * FQ._x + (-QQ._x + wQ._x) * qQ + (2 * QQ._x - 5 * FQ._x + 4 * wQ._x - LQ._x) * oQ + (-QQ._x + 3 * FQ._x - 3 * wQ._x + LQ._x) * DQ),
          vQ = .5 * (2 * FQ._y + (-QQ._y + wQ._y) * qQ + (2 * QQ._y - 5 * FQ._y + 4 * wQ._y - LQ._y) * oQ + (-QQ._y + 3 * FQ._y - 3 * wQ._y + LQ._y) * DQ),
          mQ = .5 * (2 * FQ._z + (-QQ._z + wQ._z) * qQ + (2 * QQ._z - 5 * FQ._z + 4 * wQ._z - LQ._z) * oQ + (-QQ._z + 3 * FQ._z - 3 * wQ._z + LQ._z) * DQ);
        return new bQ(kQ, vQ, mQ)
      }
      static Clamp(QQ, FQ, wQ) {
        const LQ = new bQ;
        return bQ.ClampToRef(QQ, FQ, wQ, LQ), LQ
      }
      static ClampToRef(QQ, FQ, wQ, LQ) {
        let qQ = QQ._x;
        qQ = qQ > wQ._x ? wQ._x : qQ, qQ = qQ < FQ._x ? FQ._x : qQ;
        let oQ = QQ._y;
        oQ = oQ > wQ._y ? wQ._y : oQ, oQ = oQ < FQ._y ? FQ._y : oQ;
        let DQ = QQ._z;
        return DQ = DQ > wQ._z ? wQ._z : DQ, DQ = DQ < FQ._z ? FQ._z : DQ, LQ.vQQ(qQ, oQ, DQ), LQ
      }
      static CheckExtends(QQ, FQ, wQ) {
        FQ.minimizeInPlace(QQ), wQ.maximizeInPlace(QQ)
      }
      static Hermite(QQ, FQ, wQ, LQ, qQ) {
        const oQ = qQ * qQ,
          DQ = qQ * oQ,
          kQ = 2 * DQ - 3 * oQ + 1,
          vQ = -2 * DQ + 3 * oQ,
          mQ = DQ - 2 * oQ + qQ,
          uQ = DQ - oQ,
          HQ = QQ._x * kQ + wQ._x * vQ + FQ._x * mQ + LQ._x * uQ,
          YQ = QQ._y * kQ + wQ._y * vQ + FQ._y * mQ + LQ._y * uQ,
          xQ = QQ._z * kQ + wQ._z * vQ + FQ._z * mQ + LQ._z * uQ;
        return new bQ(HQ, YQ, xQ)
      }
      static Hermite1stDerivative(QQ, FQ, wQ, LQ, qQ) {
        const oQ = new bQ;
        return this.Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ), oQ
      }
      static Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = qQ * qQ;
        return oQ._x = 6 * (DQ - qQ) * QQ._x + (3 * DQ - 4 * qQ + 1) * FQ._x + 6 * (-DQ + qQ) * wQ._x + (3 * DQ - 2 * qQ) * LQ._x, oQ._y = 6 * (DQ - qQ) * QQ._y + (3 * DQ - 4 * qQ + 1) * FQ._y + 6 * (-DQ + qQ) * wQ._y + (3 * DQ - 2 * qQ) * LQ._y, oQ._z = 6 * (DQ - qQ) * QQ._z + (3 * DQ - 4 * qQ + 1) * FQ._z + 6 * (-DQ + qQ) * wQ._z + (3 * DQ - 2 * qQ) * LQ._z, oQ._isDirty = !0, oQ
      }
      static Lerp(QQ, FQ, wQ) {
        const LQ = new bQ(0, 0, 0);
        return bQ.LerpToRef(QQ, FQ, wQ, LQ), LQ
      }
      static LerpToRef(QQ, FQ, wQ, LQ) {
        return LQ._x = QQ._x + (FQ._x - QQ._x) * wQ, LQ._y = QQ._y + (FQ._y - QQ._y) * wQ, LQ._z = QQ._z + (FQ._z - QQ._z) * wQ, LQ._isDirty = !0, LQ
      }
      static Dot(QQ, FQ) {
        return QQ._x * FQ._x + QQ._y * FQ._y + QQ._z * FQ._z
      }
      dot(QQ) {
        return this._x * QQ._x + this._y * QQ._y + this._z * QQ._z
      }
      static Cross(QQ, FQ) {
        const wQ = new bQ;
        return bQ.CrossToRef(QQ, FQ, wQ), wQ
      }
      static CrossToRef(QQ, FQ, wQ) {
        const LQ = QQ._y * FQ._z - QQ._z * FQ._y,
          qQ = QQ._z * FQ._x - QQ._x * FQ._z,
          oQ = QQ._x * FQ._y - QQ._y * FQ._x;
        return wQ.vQQ(LQ, qQ, oQ), wQ
      }
      static Normalize(QQ) {
        const FQ = bQ.Zero();
        return bQ.NormalizeToRef(QQ, FQ), FQ
      }
      static NormalizeToRef(QQ, FQ) {
        return QQ.normalizeToRef(FQ), FQ
      }
      static Project(QQ, FQ, wQ, LQ) {
        const qQ = new bQ;
        return bQ.ProjectToRef(QQ, FQ, wQ, LQ, qQ), qQ
      }
      static ProjectToRef(QQ, FQ, wQ, LQ, qQ) {
        const oQ = LQ.width,
          kQ = LQ.height,
          vQ = LQ.x,
          mQ = LQ.y,
          uQ = tQ.Matrix[1],
          HQ = DQ.d.LastCreatedEngine?.isNDCHalfZRange,
          YQ = HQ ? 1 : .5,
          xQ = HQ ? 0 : .5;
        AQ.FromValuesToRef(oQ / 2, 0, 0, 0, 0, -kQ / 2, 0, 0, 0, 0, YQ, 0, vQ + oQ / 2, kQ / 2 + mQ, xQ, 1, uQ);
        const eQ = tQ.Matrix[0];
        return FQ.multiplyToRef(wQ, eQ), eQ.multiplyToRef(uQ, eQ), bQ.TransformCoordinatesToRef(QQ, eQ, qQ), qQ
      }
      static Reflect(QQ, FQ) {
        return this.ReflectToRef(QQ, FQ, new bQ)
      }
      static ReflectToRef(QQ, FQ, wQ) {
        const LQ = eQ.Ox[0];
        return LQ.Qs(FQ).scaleInPlace(2 * bQ.Dot(QQ, FQ)), wQ.Qs(QQ).gLQ(LQ)
      }
      static UnprojectFromTransform(QQ, FQ, wQ, LQ, qQ) {
        return this.Unproject(QQ, FQ, wQ, LQ, qQ, AQ.IdentityReadOnly)
      }
      static Unproject(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = new bQ;
        return bQ.UnprojectToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ), DQ
      }
      static UnprojectToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        return bQ.UnprojectFloatsToRef(QQ._x, QQ._y, QQ._z, FQ, wQ, LQ, qQ, oQ, DQ), DQ
      }
      static UnprojectFloatsToRef(QQ, FQ, wQ, LQ, qQ, oQ, kQ, vQ, mQ) {
        const uQ = tQ.Matrix[0];
        oQ.multiplyToRef(kQ, uQ), uQ.multiplyToRef(vQ, uQ), uQ.invert();
        const HQ = tQ.Ox[0];
        return HQ.x = QQ / LQ * 2 - 1, HQ.y = -(FQ / qQ * 2 - 1), DQ.d.LastCreatedEngine?.isNDCHalfZRange ? HQ.z = wQ : HQ.z = 2 * wQ - 1, bQ.TransformCoordinatesToRef(HQ, uQ, mQ), mQ
      }
      static Minimize(QQ, FQ) {
        const wQ = new bQ;
        return wQ.Qs(QQ), wQ.minimizeInPlace(FQ), wQ
      }
      static Maximize(QQ, FQ) {
        const wQ = new bQ;
        return wQ.Qs(QQ), wQ.maximizeInPlace(FQ), wQ
      }
      static Distance(QQ, FQ) {
        return Math.sqrt(bQ.DistanceSquared(QQ, FQ))
      }
      static DistanceSquared(QQ, FQ) {
        const wQ = QQ._x - FQ._x,
          LQ = QQ._y - FQ._y,
          qQ = QQ._z - FQ._z;
        return wQ * wQ + LQ * LQ + qQ * qQ
      }
      static ProjectOnTriangleToRef(QQ, FQ, wQ, qQ, oQ) {
        const DQ = tQ.Ox[0],
          vQ = tQ.Ox[1],
          mQ = tQ.Ox[2],
          uQ = tQ.Ox[3],
          HQ = tQ.Ox[4];
        wQ.subtractToRef(FQ, DQ), qQ.subtractToRef(FQ, vQ), qQ.subtractToRef(wQ, mQ);
        const YQ = DQ.length(),
          xQ = vQ.length(),
          AQ = mQ.length();
        if (YQ < LQ.b || xQ < LQ.b || AQ < LQ.b) return oQ.Qs(FQ), bQ.Distance(QQ, FQ);
        QQ.subtractToRef(FQ, HQ), bQ.CrossToRef(DQ, vQ, uQ);
        const eQ = uQ.length();
        if (eQ < LQ.b) return oQ.Qs(FQ), bQ.Distance(QQ, FQ);
        uQ.normalizeFromLength(eQ);
        let MQ = HQ.length();
        if (MQ < LQ.b) return oQ.Qs(FQ), 0;
        HQ.normalizeFromLength(MQ);
        const GQ = bQ.Dot(uQ, HQ),
          pQ = tQ.Ox[5],
          cQ = tQ.Ox[6];
        pQ.Qs(uQ).scaleInPlace(-MQ * GQ), cQ.Qs(QQ).addInPlace(pQ);
        const CQ = tQ.Ox[4],
          SQ = tQ.Ox[5],
          iQ = tQ.Ox[7],
          WQ = tQ.Ox[8];
        CQ.Qs(DQ).scaleInPlace(1 / YQ), WQ.Qs(vQ).scaleInPlace(1 / xQ), CQ.addInPlace(WQ).scaleInPlace(-1), SQ.Qs(DQ).scaleInPlace(-1 / YQ), WQ.Qs(mQ).scaleInPlace(1 / AQ), SQ.addInPlace(WQ).scaleInPlace(-1), iQ.Qs(mQ).scaleInPlace(-1 / AQ), WQ.Qs(vQ).scaleInPlace(-1 / xQ), iQ.addInPlace(WQ).scaleInPlace(-1);
        const RQ = tQ.Ox[9];
        let OQ;
        RQ.Qs(cQ).gLQ(FQ), bQ.CrossToRef(CQ, RQ, WQ), OQ = bQ.Dot(WQ, uQ);
        const sQ = OQ;
        RQ.Qs(cQ).gLQ(wQ), bQ.CrossToRef(SQ, RQ, WQ), OQ = bQ.Dot(WQ, uQ);
        const rQ = OQ;
        RQ.Qs(cQ).gLQ(qQ), bQ.CrossToRef(iQ, RQ, WQ), OQ = bQ.Dot(WQ, uQ);
        const IQ = OQ,
          UQ = tQ.Ox[10];
        let NQ, TQ;
        sQ > 0 && rQ < 0 ? (UQ.Qs(DQ), NQ = FQ, TQ = wQ) : rQ > 0 && IQ < 0 ? (UQ.Qs(mQ), NQ = wQ, TQ = qQ) : (UQ.Qs(vQ).scaleInPlace(-1), NQ = qQ, TQ = FQ);
        const KQ = tQ.Ox[9],
          zQ = tQ.Ox[4];
        NQ.subtractToRef(cQ, WQ), TQ.subtractToRef(cQ, KQ), bQ.CrossToRef(WQ, KQ, zQ);
        if (!(bQ.Dot(zQ, uQ) < 0)) return oQ.Qs(cQ), Math.abs(MQ * GQ);
        const lQ = tQ.Ox[5];
        bQ.CrossToRef(UQ, zQ, lQ), lQ.normalize();
        const jQ = tQ.Ox[9];
        jQ.Qs(NQ).gLQ(cQ);
        const aQ = jQ.length();
        if (aQ < LQ.b) return oQ.Qs(NQ), bQ.Distance(QQ, NQ);
        jQ.normalizeFromLength(aQ);
        const XQ = bQ.Dot(lQ, jQ),
          fQ = tQ.Ox[7];
        fQ.Qs(cQ).addInPlace(lQ.scaleInPlace(aQ * XQ)), WQ.Qs(fQ).gLQ(NQ), MQ = UQ.length(), UQ.normalizeFromLength(MQ);
        let VQ = bQ.Dot(WQ, UQ) / Math.max(MQ, LQ.b);
        return VQ = (0, kQ.Clamp)(VQ, 0, 1), fQ.Qs(NQ).addInPlace(UQ.scaleInPlace(VQ * MQ)), oQ.Qs(fQ), bQ.Distance(QQ, fQ)
      }
      static Center(QQ, FQ) {
        return bQ.CenterToRef(QQ, FQ, bQ.Zero())
      }
      static CenterToRef(QQ, FQ, wQ) {
        return wQ.vQQ((QQ._x + FQ._x) / 2, (QQ._y + FQ._y) / 2, (QQ._z + FQ._z) / 2)
      }
      static RotationFromAxis(QQ, FQ, wQ) {
        const LQ = new bQ;
        return bQ.RotationFromAxisToRef(QQ, FQ, wQ, LQ), LQ
      }
      static RotationFromAxisToRef(QQ, FQ, wQ, LQ) {
        const qQ = tQ.Quaternion[0];
        return xQ.RotationQuaternionFromAxisToRef(QQ, FQ, wQ, qQ), qQ.toEulerAnglesToRef(LQ), LQ
      }
    }
    bQ._V8PerformanceHack = new bQ(.5, .5, .5), bQ._UpReadOnly = bQ.Up(), bQ._DownReadOnly = bQ.Down(), bQ._LeftHandedForwardReadOnly = bQ.Forward(!1), bQ._RightHandedForwardReadOnly = bQ.Forward(!0), bQ._LeftHandedBackwardReadOnly = bQ.Backward(!1), bQ._RightHandedBackwardReadOnly = bQ.Backward(!0), bQ._RightReadOnly = bQ.Right(), bQ._LeftReadOnly = bQ.Left(), bQ._ZeroReadOnly = bQ.Zero(), bQ._OneReadOnly = bQ.One();
    class YQ {
      get x() {
        return this._x
      }
      set x(QQ) {
        this._x = QQ, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(QQ) {
        this._y = QQ, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(QQ) {
        this._z = QQ, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(QQ) {
        this._w = QQ, this._isDirty = !0
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = QQ, this._y = FQ, this._z = wQ, this._w = LQ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let QQ = uQ(this._x);
        return QQ = 397 * QQ ^ uQ(this._y), QQ = 397 * QQ ^ uQ(this._z), QQ = 397 * QQ ^ uQ(this._w), QQ
      }
      RLQ() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(QQ, FQ) {
        return void 0 === FQ && (FQ = 0), QQ[FQ] = this._x, QQ[FQ + 1] = this._y, QQ[FQ + 2] = this._z, QQ[FQ + 3] = this._w, this
      }
      bwQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YQ.FromArrayToRef(QQ, FQ, this), this
      }
      addInPlace(QQ) {
        return this.x += QQ._x, this.y += QQ._y, this.z += QQ._z, this.w += QQ._w, this
      }
      addInPlaceFromFloats(QQ, FQ, wQ, LQ) {
        return this.x += QQ, this.y += FQ, this.z += wQ, this.w += LQ, this
      }
      add(QQ) {
        return new YQ(this._x + QQ.x, this._y + QQ.y, this._z + QQ.z, this._w + QQ.w)
      }
      addToRef(QQ, FQ) {
        return FQ.x = this._x + QQ.x, FQ.y = this._y + QQ.y, FQ.z = this._z + QQ.z, FQ.w = this._w + QQ.w, FQ
      }
      gLQ(QQ) {
        return this.x -= QQ.x, this.y -= QQ.y, this.z -= QQ.z, this.w -= QQ.w, this
      }
      subtract(QQ) {
        return new YQ(this._x - QQ.x, this._y - QQ.y, this._z - QQ.z, this._w - QQ.w)
      }
      subtractToRef(QQ, FQ) {
        return FQ.x = this._x - QQ.x, FQ.y = this._y - QQ.y, FQ.z = this._z - QQ.z, FQ.w = this._w - QQ.w, FQ
      }
      subtractFromFloats(QQ, FQ, wQ, LQ) {
        return new YQ(this._x - QQ, this._y - FQ, this._z - wQ, this._w - LQ)
      }
      subtractFromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
        return qQ.x = this._x - QQ, qQ.y = this._y - FQ, qQ.z = this._z - wQ, qQ.w = this._w - LQ, qQ
      }
      mo() {
        return new YQ(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(QQ) {
        return QQ.x = -this._x, QQ.y = -this._y, QQ.z = -this._z, QQ.w = -this._w, QQ
      }
      scaleInPlace(QQ) {
        return this.x *= QQ, this.y *= QQ, this.z *= QQ, this.w *= QQ, this
      }
      scale(QQ) {
        return new YQ(this._x * QQ, this._y * QQ, this._z * QQ, this._w * QQ)
      }
      scaleToRef(QQ, FQ) {
        return FQ.x = this._x * QQ, FQ.y = this._y * QQ, FQ.z = this._z * QQ, FQ.w = this._w * QQ, FQ
      }
      scaleAndAddToRef(QQ, FQ) {
        return FQ.x += this._x * QQ, FQ.y += this._y * QQ, FQ.z += this._z * QQ, FQ.w += this._w * QQ, FQ
      }
      equals(QQ) {
        return QQ && this._x === QQ.x && this._y === QQ.y && this._z === QQ.z && this._w === QQ.w
      }
      equalsWithEpsilon(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LQ.b;
        return QQ && (0, kQ.WithinEpsilon)(this._x, QQ.x, FQ) && (0, kQ.WithinEpsilon)(this._y, QQ.y, FQ) && (0, kQ.WithinEpsilon)(this._z, QQ.z, FQ) && (0, kQ.WithinEpsilon)(this._w, QQ.w, FQ)
      }
      LkQ(QQ, FQ, wQ, LQ) {
        return this._x === QQ && this._y === FQ && this._z === wQ && this._w === LQ
      }
      multiplyInPlace(QQ) {
        return this.x *= QQ.x, this.y *= QQ.y, this.z *= QQ.z, this.w *= QQ.w, this
      }
      multiply(QQ) {
        return new YQ(this._x * QQ.x, this._y * QQ.y, this._z * QQ.z, this._w * QQ.w)
      }
      multiplyToRef(QQ, FQ) {
        return FQ.x = this._x * QQ.x, FQ.y = this._y * QQ.y, FQ.z = this._z * QQ.z, FQ.w = this._w * QQ.w, FQ
      }
      multiplyByFloats(QQ, FQ, wQ, LQ) {
        return new YQ(this._x * QQ, this._y * FQ, this._z * wQ, this._w * LQ)
      }
      divide(QQ) {
        return new YQ(this._x / QQ.x, this._y / QQ.y, this._z / QQ.z, this._w / QQ.w)
      }
      divideToRef(QQ, FQ) {
        return FQ.x = this._x / QQ.x, FQ.y = this._y / QQ.y, FQ.z = this._z / QQ.z, FQ.w = this._w / QQ.w, FQ
      }
      divideInPlace(QQ) {
        return this.divideToRef(QQ, this)
      }
      minimizeInPlace(QQ) {
        return QQ.x < this._x && (this.x = QQ.x), QQ.y < this._y && (this.y = QQ.y), QQ.z < this._z && (this.z = QQ.z), QQ.w < this._w && (this.w = QQ.w), this
      }
      maximizeInPlace(QQ) {
        return QQ.x > this._x && (this.x = QQ.x), QQ.y > this._y && (this.y = QQ.y), QQ.z > this._z && (this.z = QQ.z), QQ.w > this._w && (this.w = QQ.w), this
      }
      minimizeInPlaceFromFloats(QQ, FQ, wQ, LQ) {
        return this.x = Math.min(QQ, this._x), this.y = Math.min(FQ, this._y), this.z = Math.min(wQ, this._z), this.w = Math.min(LQ, this._w), this
      }
      maximizeInPlaceFromFloats(QQ, FQ, wQ, LQ) {
        return this.x = Math.max(QQ, this._x), this.y = Math.max(FQ, this._y), this.z = Math.max(wQ, this._z), this.w = Math.max(LQ, this._w), this
      }
      floorToRef(QQ) {
        return QQ.x = Math.floor(this._x), QQ.y = Math.floor(this._y), QQ.z = Math.floor(this._z), QQ.w = Math.floor(this._w), QQ
      }
      floor() {
        return new YQ(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(QQ) {
        return QQ.x = this._x - Math.floor(this._x), QQ.y = this._y - Math.floor(this._y), QQ.z = this._z - Math.floor(this._z), QQ.w = this._w - Math.floor(this._w), QQ
      }
      fract() {
        return new YQ(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(QQ) {
        return 0 === QQ || 1 === QQ ? this : this.scaleInPlace(1 / QQ)
      }
      normalizeToNew() {
        return this.normalizeToRef(new YQ)
      }
      normalizeToRef(QQ) {
        const FQ = this.length();
        return 0 === FQ || 1 === FQ ? (QQ.x = this._x, QQ.y = this._y, QQ.z = this._z, QQ.w = this._w, QQ) : this.scaleToRef(1 / FQ, QQ)
      }
      toVector3() {
        return new bQ(this._x, this._y, this._z)
      }
      clone() {
        return new YQ(this._x, this._y, this._z, this._w)
      }
      Qs(QQ) {
        return this.x = QQ.x, this.y = QQ.y, this.z = QQ.z, this.w = QQ.w, this
      }
      vQQ(QQ, FQ, wQ, LQ) {
        return this.x = QQ, this.y = FQ, this.z = wQ, this.w = LQ, this
      }
      set(QQ, FQ, wQ, LQ) {
        return this.vQQ(QQ, FQ, wQ, LQ)
      }
      K3(QQ) {
        return this.x = this.y = this.z = this.w = QQ, this
      }
      dot(QQ) {
        return this._x * QQ.x + this._y * QQ.y + this._z * QQ.z + this._w * QQ.w
      }
      static FromArray(QQ, FQ) {
        return FQ || (FQ = 0), new YQ(QQ[FQ], QQ[FQ + 1], QQ[FQ + 2], QQ[FQ + 3])
      }
      static FromArrayToRef(QQ, FQ, wQ) {
        return wQ.x = QQ[FQ], wQ.y = QQ[FQ + 1], wQ.z = QQ[FQ + 2], wQ.w = QQ[FQ + 3], wQ
      }
      static FromFloatArrayToRef(QQ, FQ, wQ) {
        return YQ.FromArrayToRef(QQ, FQ, wQ), wQ
      }
      static FromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
        return qQ.x = QQ, qQ.y = FQ, qQ.z = wQ, qQ.w = LQ, qQ
      }
      static Zero() {
        return new YQ(0, 0, 0, 0)
      }
      static One() {
        return new YQ(1, 1, 1, 1)
      }
      static Random() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new YQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
      }
      static RandomToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        return wQ.x = (0, kQ.RandomRange)(QQ, FQ), wQ.y = (0, kQ.RandomRange)(QQ, FQ), wQ.z = (0, kQ.RandomRange)(QQ, FQ), wQ.w = (0, kQ.RandomRange)(QQ, FQ), wQ
      }
      static Clamp(QQ, FQ, wQ) {
        return YQ.ClampToRef(QQ, FQ, wQ, new YQ)
      }
      static ClampToRef(QQ, FQ, wQ, LQ) {
        return LQ.x = (0, kQ.Clamp)(QQ.x, FQ.x, wQ.x), LQ.y = (0, kQ.Clamp)(QQ.y, FQ.y, wQ.y), LQ.z = (0, kQ.Clamp)(QQ.z, FQ.z, wQ.z), LQ.w = (0, kQ.Clamp)(QQ.w, FQ.w, wQ.w), LQ
      }
      static CheckExtends(QQ, FQ, wQ) {
        FQ.minimizeInPlace(QQ), wQ.maximizeInPlace(QQ)
      }
      static get ZeroReadOnly() {
        return YQ._ZeroReadOnly
      }
      static Normalize(QQ) {
        return YQ.NormalizeToRef(QQ, new YQ)
      }
      static NormalizeToRef(QQ, FQ) {
        return QQ.normalizeToRef(FQ), FQ
      }
      static Minimize(QQ, FQ) {
        const wQ = new YQ;
        return wQ.Qs(QQ), wQ.minimizeInPlace(FQ), wQ
      }
      static Maximize(QQ, FQ) {
        const wQ = new YQ;
        return wQ.Qs(QQ), wQ.maximizeInPlace(FQ), wQ
      }
      static Distance(QQ, FQ) {
        return Math.sqrt(YQ.DistanceSquared(QQ, FQ))
      }
      static DistanceSquared(QQ, FQ) {
        const wQ = QQ.x - FQ.x,
          LQ = QQ.y - FQ.y,
          qQ = QQ.z - FQ.z,
          oQ = QQ.w - FQ.w;
        return wQ * wQ + LQ * LQ + qQ * qQ + oQ * oQ
      }
      static Center(QQ, FQ) {
        return YQ.CenterToRef(QQ, FQ, new YQ)
      }
      static CenterToRef(QQ, FQ, wQ) {
        return wQ.x = (QQ.x + FQ.x) / 2, wQ.y = (QQ.y + FQ.y) / 2, wQ.z = (QQ.z + FQ.z) / 2, wQ.w = (QQ.w + FQ.w) / 2, wQ
      }
      static TransformCoordinates(QQ, FQ) {
        return YQ.TransformCoordinatesToRef(QQ, FQ, new YQ)
      }
      static TransformCoordinatesToRef(QQ, FQ, wQ) {
        return YQ.TransformCoordinatesFromFloatsToRef(QQ._x, QQ._y, QQ._z, FQ, wQ), wQ
      }
      static TransformCoordinatesFromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
        const oQ = LQ.m,
          DQ = QQ * oQ[0] + FQ * oQ[4] + wQ * oQ[8] + oQ[12],
          kQ = QQ * oQ[1] + FQ * oQ[5] + wQ * oQ[9] + oQ[13],
          vQ = QQ * oQ[2] + FQ * oQ[6] + wQ * oQ[10] + oQ[14],
          mQ = QQ * oQ[3] + FQ * oQ[7] + wQ * oQ[11] + oQ[15];
        return qQ.x = DQ, qQ.y = kQ, qQ.z = vQ, qQ.w = mQ, qQ
      }
      static TransformNormal(QQ, FQ) {
        return YQ.TransformNormalToRef(QQ, FQ, new YQ)
      }
      static TransformNormalToRef(QQ, FQ, wQ) {
        const LQ = FQ.m,
          qQ = QQ.x * LQ[0] + QQ.y * LQ[4] + QQ.z * LQ[8],
          oQ = QQ.x * LQ[1] + QQ.y * LQ[5] + QQ.z * LQ[9],
          DQ = QQ.x * LQ[2] + QQ.y * LQ[6] + QQ.z * LQ[10];
        return wQ.x = qQ, wQ.y = oQ, wQ.z = DQ, wQ.w = QQ.w, wQ
      }
      static TransformNormalFromFloatsToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = qQ.m;
        return oQ.x = QQ * DQ[0] + FQ * DQ[4] + wQ * DQ[8], oQ.y = QQ * DQ[1] + FQ * DQ[5] + wQ * DQ[9], oQ.z = QQ * DQ[2] + FQ * DQ[6] + wQ * DQ[10], oQ.w = LQ, oQ
      }
      static FromVector3(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new YQ(QQ._x, QQ._y, QQ._z, FQ)
      }
      static Dot(QQ, FQ) {
        return QQ.x * FQ.x + QQ.y * FQ.y + QQ.z * FQ.z + QQ.w * FQ.w
      }
    }
    YQ._V8PerformanceHack = new YQ(.5, .5, .5, .5), YQ._ZeroReadOnly = YQ.Zero();
    class xQ {
      get x() {
        return this._x
      }
      set x(QQ) {
        this._x = QQ, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(QQ) {
        this._y = QQ, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(QQ) {
        this._z = QQ, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(QQ) {
        this._w = QQ, this._isDirty = !0
      }
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = QQ, this._y = FQ, this._z = wQ, this._w = LQ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let QQ = uQ(this._x);
        return QQ = 397 * QQ ^ uQ(this._y), QQ = 397 * QQ ^ uQ(this._z), QQ = 397 * QQ ^ uQ(this._w), QQ
      }
      RLQ() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[FQ] = this._x, QQ[FQ + 1] = this._y, QQ[FQ + 2] = this._z, QQ[FQ + 3] = this._w, this
      }
      bwQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xQ.FromArrayToRef(QQ, FQ, this)
      }
      equals(QQ) {
        return QQ && this._x === QQ._x && this._y === QQ._y && this._z === QQ._z && this._w === QQ._w
      }
      equalsWithEpsilon(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LQ.b;
        return QQ && (0, kQ.WithinEpsilon)(this._x, QQ._x, FQ) && (0, kQ.WithinEpsilon)(this._y, QQ._y, FQ) && (0, kQ.WithinEpsilon)(this._z, QQ._z, FQ) && (0, kQ.WithinEpsilon)(this._w, QQ._w, FQ)
      }
      isApprox(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : LQ.b;
        return QQ && ((0, kQ.WithinEpsilon)(this._x, QQ._x, FQ) && (0, kQ.WithinEpsilon)(this._y, QQ._y, FQ) && (0, kQ.WithinEpsilon)(this._z, QQ._z, FQ) && (0, kQ.WithinEpsilon)(this._w, QQ._w, FQ) || (0, kQ.WithinEpsilon)(this._x, -QQ._x, FQ) && (0, kQ.WithinEpsilon)(this._y, -QQ._y, FQ) && (0, kQ.WithinEpsilon)(this._z, -QQ._z, FQ) && (0, kQ.WithinEpsilon)(this._w, -QQ._w, FQ))
      }
      clone() {
        return new xQ(this._x, this._y, this._z, this._w)
      }
      Qs(QQ) {
        return this._x = QQ._x, this._y = QQ._y, this._z = QQ._z, this._w = QQ._w, this._isDirty = !0, this
      }
      vQQ(QQ, FQ, wQ, LQ) {
        return this._x = QQ, this._y = FQ, this._z = wQ, this._w = LQ, this._isDirty = !0, this
      }
      set(QQ, FQ, wQ, LQ) {
        return this.vQQ(QQ, FQ, wQ, LQ)
      }
      K3(QQ) {
        return this.vQQ(QQ, QQ, QQ, QQ)
      }
      add(QQ) {
        return new xQ(this._x + QQ._x, this._y + QQ._y, this._z + QQ._z, this._w + QQ._w)
      }
      addInPlace(QQ) {
        return this._x += QQ._x, this._y += QQ._y, this._z += QQ._z, this._w += QQ._w, this._isDirty = !0, this
      }
      addToRef(QQ, FQ) {
        return FQ._x = this._x + QQ._x, FQ._y = this._y + QQ._y, FQ._z = this._z + QQ._z, FQ._w = this._w + QQ._w, FQ._isDirty = !0, FQ
      }
      addInPlaceFromFloats(QQ, FQ, wQ, LQ) {
        return this._x += QQ, this._y += FQ, this._z += wQ, this._w += LQ, this._isDirty = !0, this
      }
      subtractToRef(QQ, FQ) {
        return FQ._x = this._x - QQ._x, FQ._y = this._y - QQ._y, FQ._z = this._z - QQ._z, FQ._w = this._w - QQ._w, FQ._isDirty = !0, FQ
      }
      subtractFromFloats(QQ, FQ, wQ, LQ) {
        return this.subtractFromFloatsToRef(QQ, FQ, wQ, LQ, new xQ)
      }
      subtractFromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
        return qQ._x = this._x - QQ, qQ._y = this._y - FQ, qQ._z = this._z - wQ, qQ._w = this._w - LQ, qQ._isDirty = !0, qQ
      }
      subtract(QQ) {
        return new xQ(this._x - QQ._x, this._y - QQ._y, this._z - QQ._z, this._w - QQ._w)
      }
      gLQ(QQ) {
        return this._x -= QQ._x, this._y -= QQ._y, this._z -= QQ._z, this._w -= QQ._w, this._isDirty = !0, this
      }
      scale(QQ) {
        return new xQ(this._x * QQ, this._y * QQ, this._z * QQ, this._w * QQ)
      }
      scaleToRef(QQ, FQ) {
        return FQ._x = this._x * QQ, FQ._y = this._y * QQ, FQ._z = this._z * QQ, FQ._w = this._w * QQ, FQ._isDirty = !0, FQ
      }
      scaleInPlace(QQ) {
        return this._x *= QQ, this._y *= QQ, this._z *= QQ, this._w *= QQ, this._isDirty = !0, this
      }
      scaleAndAddToRef(QQ, FQ) {
        return FQ._x += this._x * QQ, FQ._y += this._y * QQ, FQ._z += this._z * QQ, FQ._w += this._w * QQ, FQ._isDirty = !0, FQ
      }
      multiply(QQ) {
        const FQ = new xQ(0, 0, 0, 1);
        return this.multiplyToRef(QQ, FQ), FQ
      }
      multiplyToRef(QQ, FQ) {
        const wQ = this._x * QQ._w + this._y * QQ._z - this._z * QQ._y + this._w * QQ._x,
          LQ = -this._x * QQ._z + this._y * QQ._w + this._z * QQ._x + this._w * QQ._y,
          qQ = this._x * QQ._y - this._y * QQ._x + this._z * QQ._w + this._w * QQ._z,
          oQ = -this._x * QQ._x - this._y * QQ._y - this._z * QQ._z + this._w * QQ._w;
        return FQ.vQQ(wQ, LQ, qQ, oQ), FQ
      }
      multiplyInPlace(QQ) {
        return this.multiplyToRef(QQ, this)
      }
      multiplyByFloats(QQ, FQ, wQ, LQ) {
        return this._x *= QQ, this._y *= FQ, this._z *= wQ, this._w *= LQ, this._isDirty = !0, this
      }
      divide(QQ) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(QQ, FQ) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(QQ) {
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
      mo() {
        return this.negateToRef(new xQ)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(QQ) {
        return QQ._x = -this._x, QQ._y = -this._y, QQ._z = -this._z, QQ._w = -this._w, QQ._isDirty = !0, QQ
      }
      LkQ(QQ, FQ, wQ, LQ) {
        return this._x === QQ && this._y === FQ && this._z === wQ && this._w === LQ
      }
      floorToRef(QQ) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(QQ) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(QQ) {
        return QQ.vQQ(-this._x, -this._y, -this._z, this._w), QQ
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new xQ(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const QQ = this.conjugate(),
          FQ = this.lengthSquared();
        return 0 == FQ || 1 == FQ || QQ.scaleInPlace(1 / FQ), QQ
      }
      invertInPlace() {
        this.conjugateInPlace();
        const QQ = this.lengthSquared();
        return 0 == QQ || 1 == QQ || this.scaleInPlace(1 / QQ), this
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
      normalizeFromLength(QQ) {
        return 0 === QQ || 1 === QQ ? this : this.scaleInPlace(1 / QQ)
      }
      normalizeToNew() {
        const QQ = new xQ(0, 0, 0, 1);
        return this.normalizeToRef(QQ), QQ
      }
      normalizeToRef(QQ) {
        const FQ = this.length();
        return 0 === FQ || 1 === FQ ? QQ.vQQ(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / FQ, QQ)
      }
      toEulerAngles() {
        const QQ = bQ.Zero();
        return this.toEulerAnglesToRef(QQ), QQ
      }
      toEulerAnglesToRef(QQ) {
        const FQ = this._z,
          wQ = this._x,
          LQ = this._y,
          qQ = this._w,
          oQ = LQ * FQ - wQ * qQ,
          DQ = .4999999;
        if (oQ < -DQ) QQ._y = 2 * Math.atan2(LQ, qQ), QQ._x = Math.PI / 2, QQ._z = 0, QQ._isDirty = !0;
        else if (oQ > DQ) QQ._y = 2 * Math.atan2(LQ, qQ), QQ._x = -Math.PI / 2, QQ._z = 0, QQ._isDirty = !0;
        else {
          const DQ = qQ * qQ,
            kQ = FQ * FQ,
            vQ = wQ * wQ,
            mQ = LQ * LQ;
          QQ._z = Math.atan2(2 * (wQ * LQ + FQ * qQ), -kQ - vQ + mQ + DQ), QQ._x = Math.asin(-2 * oQ), QQ._y = Math.atan2(2 * (FQ * wQ + LQ * qQ), kQ - vQ - mQ + DQ), QQ._isDirty = !0
        }
        return QQ
      }
      toAlphaBetaGammaToRef(QQ) {
        const FQ = this._z,
          wQ = this._x,
          LQ = this._y,
          qQ = this._w,
          oQ = Math.sqrt(wQ * wQ + LQ * LQ),
          DQ = Math.sqrt(FQ * FQ + qQ * qQ),
          kQ = 2 * Math.atan2(oQ, DQ),
          vQ = 2 * Math.atan2(FQ, qQ),
          mQ = 2 * Math.atan2(LQ, wQ),
          uQ = (vQ + mQ) / 2,
          HQ = (vQ - mQ) / 2;
        return QQ.set(HQ, kQ, uQ), QQ
      }
      toRotationMatrix(QQ) {
        return AQ.FromQuaternionToRef(this, QQ), QQ
      }
      fromRotationMatrix(QQ) {
        return xQ.FromRotationMatrixToRef(QQ, this), this
      }
      dot(QQ) {
        return this._x * QQ._x + this._y * QQ._y + this._z * QQ._z + this._w * QQ._w
      }
      toAxisAngle() {
        const QQ = bQ.Zero();
        return {
          axis: QQ,
          angle: this.toAxisAngleToRef(QQ)
        }
      }
      toAxisAngleToRef(QQ) {
        let FQ;
        const wQ = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          LQ = this._w;
        return wQ > 0 ? (FQ = 2 * Math.atan2(wQ, LQ), QQ.set(this._x / wQ, this._y / wQ, this._z / wQ)) : (FQ = 0, QQ.set(1, 0, 0)), FQ
      }
      static FromRotationMatrix(QQ) {
        const FQ = new xQ;
        return xQ.FromRotationMatrixToRef(QQ, FQ), FQ
      }
      static FromRotationMatrixToRef(QQ, FQ) {
        const wQ = QQ.m,
          LQ = wQ[0],
          qQ = wQ[4],
          oQ = wQ[8],
          DQ = wQ[1],
          kQ = wQ[5],
          vQ = wQ[9],
          mQ = wQ[2],
          uQ = wQ[6],
          HQ = wQ[10],
          bQ = LQ + kQ + HQ;
        let YQ;
        return bQ > 0 ? (YQ = .5 / Math.sqrt(bQ + 1), FQ._w = .25 / YQ, FQ._x = (uQ - vQ) * YQ, FQ._y = (oQ - mQ) * YQ, FQ._z = (DQ - qQ) * YQ, FQ._isDirty = !0) : LQ > kQ && LQ > HQ ? (YQ = 2 * Math.sqrt(1 + LQ - kQ - HQ), FQ._w = (uQ - vQ) / YQ, FQ._x = .25 * YQ, FQ._y = (qQ + DQ) / YQ, FQ._z = (oQ + mQ) / YQ, FQ._isDirty = !0) : kQ > HQ ? (YQ = 2 * Math.sqrt(1 + kQ - LQ - HQ), FQ._w = (oQ - mQ) / YQ, FQ._x = (qQ + DQ) / YQ, FQ._y = .25 * YQ, FQ._z = (vQ + uQ) / YQ, FQ._isDirty = !0) : (YQ = 2 * Math.sqrt(1 + HQ - LQ - kQ), FQ._w = (DQ - qQ) / YQ, FQ._x = (oQ + mQ) / YQ, FQ._y = (vQ + uQ) / YQ, FQ._z = .25 * YQ, FQ._isDirty = !0), FQ
      }
      static Dot(QQ, FQ) {
        return QQ._x * FQ._x + QQ._y * FQ._y + QQ._z * FQ._z + QQ._w * FQ._w
      }
      static AreClose(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const LQ = xQ.Dot(QQ, FQ);
        return 1 - LQ * LQ <= wQ
      }
      static SmoothToRef(QQ, FQ, wQ, LQ, qQ) {
        let oQ = 0 === LQ ? 1 : wQ / LQ;
        return oQ = (0, kQ.Clamp)(oQ, 0, 1), xQ.SlerpToRef(QQ, FQ, oQ, qQ), qQ
      }
      static Zero() {
        return new xQ(0, 0, 0, 0)
      }
      static Inverse(QQ) {
        return new xQ(-QQ._x, -QQ._y, -QQ._z, QQ._w)
      }
      static InverseToRef(QQ, FQ) {
        return FQ.set(-QQ._x, -QQ._y, -QQ._z, QQ._w), FQ
      }
      static Identity() {
        return new xQ(0, 0, 0, 1)
      }
      static IsIdentity(QQ) {
        return QQ && 0 === QQ._x && 0 === QQ._y && 0 === QQ._z && 1 === QQ._w
      }
      static RotationAxis(QQ, FQ) {
        return xQ.RotationAxisToRef(QQ, FQ, new xQ)
      }
      static RotationAxisToRef(QQ, FQ, wQ) {
        wQ._w = Math.cos(FQ / 2);
        const LQ = Math.sin(FQ / 2) / QQ.length();
        return wQ._x = QQ._x * LQ, wQ._y = QQ._y * LQ, wQ._z = QQ._z * LQ, wQ._isDirty = !0, wQ
      }
      static FromArray(QQ, FQ) {
        return FQ || (FQ = 0), new xQ(QQ[FQ], QQ[FQ + 1], QQ[FQ + 2], QQ[FQ + 3])
      }
      static FromArrayToRef(QQ, FQ, wQ) {
        return wQ._x = QQ[FQ], wQ._y = QQ[FQ + 1], wQ._z = QQ[FQ + 2], wQ._w = QQ[FQ + 3], wQ._isDirty = !0, wQ
      }
      static FromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
        return qQ.vQQ(QQ, FQ, wQ, LQ), qQ
      }
      static FromEulerAngles(QQ, FQ, wQ) {
        const LQ = new xQ;
        return xQ.RotationYawPitchRollToRef(FQ, QQ, wQ, LQ), LQ
      }
      static FromEulerAnglesToRef(QQ, FQ, wQ, LQ) {
        return xQ.RotationYawPitchRollToRef(FQ, QQ, wQ, LQ), LQ
      }
      static FromEulerVector(QQ) {
        const FQ = new xQ;
        return xQ.RotationYawPitchRollToRef(QQ._y, QQ._x, QQ._z, FQ), FQ
      }
      static FromEulerVectorToRef(QQ, FQ) {
        return xQ.RotationYawPitchRollToRef(QQ._y, QQ._x, QQ._z, FQ), FQ
      }
      static FromUnitVectorsToRef(QQ, FQ, wQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : LQ.b;
        const oQ = bQ.Dot(QQ, FQ) + 1;
        return oQ < qQ ? Math.abs(QQ.x) > Math.abs(QQ.z) ? wQ.set(-QQ.y, QQ.x, 0, 0) : wQ.set(0, -QQ.z, QQ.y, 0) : (bQ.CrossToRef(QQ, FQ, eQ.Ox[0]), wQ.set(eQ.Ox[0].x, eQ.Ox[0].y, eQ.Ox[0].z, oQ)), wQ.normalize()
      }
      static RotationYawPitchRoll(QQ, FQ, wQ) {
        const LQ = new xQ;
        return xQ.RotationYawPitchRollToRef(QQ, FQ, wQ, LQ), LQ
      }
      static RotationYawPitchRollToRef(QQ, FQ, wQ, LQ) {
        const qQ = .5 * wQ,
          oQ = .5 * FQ,
          DQ = .5 * QQ,
          kQ = Math.sin(qQ),
          vQ = Math.cos(qQ),
          mQ = Math.sin(oQ),
          uQ = Math.cos(oQ),
          HQ = Math.sin(DQ),
          bQ = Math.cos(DQ);
        return LQ._x = bQ * mQ * vQ + HQ * uQ * kQ, LQ._y = HQ * uQ * vQ - bQ * mQ * kQ, LQ._z = bQ * uQ * kQ - HQ * mQ * vQ, LQ._w = bQ * uQ * vQ + HQ * mQ * kQ, LQ._isDirty = !0, LQ
      }
      static RotationAlphaBetaGamma(QQ, FQ, wQ) {
        const LQ = new xQ;
        return xQ.RotationAlphaBetaGammaToRef(QQ, FQ, wQ, LQ), LQ
      }
      static RotationAlphaBetaGammaToRef(QQ, FQ, wQ, LQ) {
        const qQ = .5 * (wQ + QQ),
          oQ = .5 * (wQ - QQ),
          DQ = .5 * FQ;
        return LQ._x = Math.cos(oQ) * Math.sin(DQ), LQ._y = Math.sin(oQ) * Math.sin(DQ), LQ._z = Math.sin(qQ) * Math.cos(DQ), LQ._w = Math.cos(qQ) * Math.cos(DQ), LQ._isDirty = !0, LQ
      }
      static RotationQuaternionFromAxis(QQ, FQ, wQ) {
        const LQ = new xQ(0, 0, 0, 0);
        return xQ.RotationQuaternionFromAxisToRef(QQ, FQ, wQ, LQ), LQ
      }
      static RotationQuaternionFromAxisToRef(QQ, FQ, wQ, LQ) {
        const qQ = tQ.Matrix[0];
        return QQ = QQ.normalizeToRef(tQ.Ox[0]), FQ = FQ.normalizeToRef(tQ.Ox[1]), wQ = wQ.normalizeToRef(tQ.Ox[2]), AQ.FromXYZAxesToRef(QQ, FQ, wQ, qQ), xQ.FromRotationMatrixToRef(qQ, LQ), LQ
      }
      static FromLookDirectionLH(QQ, FQ) {
        const wQ = new xQ;
        return xQ.FromLookDirectionLHToRef(QQ, FQ, wQ), wQ
      }
      static FromLookDirectionLHToRef(QQ, FQ, wQ) {
        const LQ = tQ.Matrix[0];
        return AQ.LookDirectionLHToRef(QQ, FQ, LQ), xQ.FromRotationMatrixToRef(LQ, wQ), wQ
      }
      static FromLookDirectionRH(QQ, FQ) {
        const wQ = new xQ;
        return xQ.FromLookDirectionRHToRef(QQ, FQ, wQ), wQ
      }
      static FromLookDirectionRHToRef(QQ, FQ, wQ) {
        const LQ = tQ.Matrix[0];
        return AQ.LookDirectionRHToRef(QQ, FQ, LQ), xQ.FromRotationMatrixToRef(LQ, wQ)
      }
      static Slerp(QQ, FQ, wQ) {
        const LQ = xQ.Identity();
        return xQ.SlerpToRef(QQ, FQ, wQ, LQ), LQ
      }
      static SlerpToRef(QQ, FQ, wQ, LQ) {
        let qQ, oQ, DQ = QQ._x * FQ._x + QQ._y * FQ._y + QQ._z * FQ._z + QQ._w * FQ._w,
          kQ = !1;
        if (DQ < 0 && (kQ = !0, DQ = -DQ), DQ > .999999) oQ = 1 - wQ, qQ = kQ ? -wQ : wQ;
        else {
          const QQ = Math.acos(DQ),
            FQ = 1 / Math.sin(QQ);
          oQ = Math.sin((1 - wQ) * QQ) * FQ, qQ = kQ ? -Math.sin(wQ * QQ) * FQ : Math.sin(wQ * QQ) * FQ
        }
        return LQ._x = oQ * QQ._x + qQ * FQ._x, LQ._y = oQ * QQ._y + qQ * FQ._y, LQ._z = oQ * QQ._z + qQ * FQ._z, LQ._w = oQ * QQ._w + qQ * FQ._w, LQ._isDirty = !0, LQ
      }
      static Hermite(QQ, FQ, wQ, LQ, qQ) {
        const oQ = qQ * qQ,
          DQ = qQ * oQ,
          kQ = 2 * DQ - 3 * oQ + 1,
          vQ = -2 * DQ + 3 * oQ,
          mQ = DQ - 2 * oQ + qQ,
          uQ = DQ - oQ,
          HQ = QQ._x * kQ + wQ._x * vQ + FQ._x * mQ + LQ._x * uQ,
          bQ = QQ._y * kQ + wQ._y * vQ + FQ._y * mQ + LQ._y * uQ,
          YQ = QQ._z * kQ + wQ._z * vQ + FQ._z * mQ + LQ._z * uQ,
          AQ = QQ._w * kQ + wQ._w * vQ + FQ._w * mQ + LQ._w * uQ;
        return new xQ(HQ, bQ, YQ, AQ)
      }
      static Hermite1stDerivative(QQ, FQ, wQ, LQ, qQ) {
        const oQ = new xQ;
        return this.Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ), oQ
      }
      static Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = qQ * qQ;
        return oQ._x = 6 * (DQ - qQ) * QQ._x + (3 * DQ - 4 * qQ + 1) * FQ._x + 6 * (-DQ + qQ) * wQ._x + (3 * DQ - 2 * qQ) * LQ._x, oQ._y = 6 * (DQ - qQ) * QQ._y + (3 * DQ - 4 * qQ + 1) * FQ._y + 6 * (-DQ + qQ) * wQ._y + (3 * DQ - 2 * qQ) * LQ._y, oQ._z = 6 * (DQ - qQ) * QQ._z + (3 * DQ - 4 * qQ + 1) * FQ._z + 6 * (-DQ + qQ) * wQ._z + (3 * DQ - 2 * qQ) * LQ._z, oQ._w = 6 * (DQ - qQ) * QQ._w + (3 * DQ - 4 * qQ + 1) * FQ._w + 6 * (-DQ + qQ) * wQ._w + (3 * DQ - 2 * qQ) * LQ._w, oQ._isDirty = !0, oQ
      }
      static Normalize(QQ) {
        const FQ = xQ.Zero();
        return xQ.NormalizeToRef(QQ, FQ), FQ
      }
      static NormalizeToRef(QQ, FQ) {
        return QQ.normalizeToRef(FQ), FQ
      }
      static Clamp(QQ, FQ, wQ) {
        const LQ = new xQ;
        return xQ.ClampToRef(QQ, FQ, wQ, LQ), LQ
      }
      static ClampToRef(QQ, FQ, wQ, LQ) {
        return LQ.vQQ((0, kQ.Clamp)(QQ.x, FQ.x, wQ.x), (0, kQ.Clamp)(QQ.y, FQ.y, wQ.y), (0, kQ.Clamp)(QQ.z, FQ.z, wQ.z), (0, kQ.Clamp)(QQ.w, FQ.w, wQ.w))
      }
      static Random() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new xQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
      }
      static RandomToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).vQQ((0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ), (0, kQ.RandomRange)(QQ, FQ))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(QQ, FQ) {
        return Math.sqrt(xQ.DistanceSquared(QQ, FQ))
      }
      static DistanceSquared(QQ, FQ) {
        const wQ = QQ.x - FQ.x,
          LQ = QQ.y - FQ.y,
          qQ = QQ.z - FQ.z,
          oQ = QQ.w - FQ.w;
        return wQ * wQ + LQ * LQ + qQ * qQ + oQ * oQ
      }
      static Center(QQ, FQ) {
        return xQ.CenterToRef(QQ, FQ, xQ.Zero())
      }
      static CenterToRef(QQ, FQ, wQ) {
        return wQ.vQQ((QQ.x + FQ.x) / 2, (QQ.y + FQ.y) / 2, (QQ.z + FQ.z) / 2, (QQ.w + FQ.w) / 2)
      }
    }
    xQ._V8PerformanceHack = new xQ(.5, .5, .5, .5);
    class AQ {
      static get Use64Bits() {
        return oQ.e.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = vQ.l._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = QQ, this._isIdentity3x2 = QQ || wQ, this._isIdentityDirty = !this._isIdentity && FQ, this._isIdentity3x2Dirty = !this._isIdentity3x2 && LQ
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, oQ.e.MatrixTrackPrecisionChange && oQ.e.MatrixTrackedMatrices.push(this), this._m = new oQ.e.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const QQ = this._m;
          this._isIdentity = 1 === QQ[0] && 0 === QQ[1] && 0 === QQ[2] && 0 === QQ[3] && 0 === QQ[4] && 1 === QQ[5] && 0 === QQ[6] && 0 === QQ[7] && 0 === QQ[8] && 0 === QQ[9] && 1 === QQ[10] && 0 === QQ[11] && 0 === QQ[12] && 0 === QQ[13] && 0 === QQ[14] && 1 === QQ[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const QQ = this._m,
          FQ = QQ[0],
          wQ = QQ[1],
          LQ = QQ[2],
          qQ = QQ[3],
          oQ = QQ[4],
          DQ = QQ[5],
          kQ = QQ[6],
          vQ = QQ[7],
          mQ = QQ[8],
          uQ = QQ[9],
          HQ = QQ[10],
          bQ = QQ[11],
          YQ = QQ[12],
          xQ = QQ[13],
          AQ = QQ[14],
          tQ = QQ[15],
          eQ = HQ * tQ - AQ * bQ,
          MQ = uQ * tQ - xQ * bQ,
          GQ = uQ * AQ - xQ * HQ,
          pQ = mQ * tQ - YQ * bQ,
          cQ = mQ * AQ - HQ * YQ,
          CQ = mQ * xQ - YQ * uQ;
        return FQ * +(DQ * eQ - kQ * MQ + vQ * GQ) + wQ * -(oQ * eQ - kQ * pQ + vQ * cQ) + LQ * +(oQ * MQ - DQ * pQ + vQ * CQ) + qQ * -(oQ * GQ - DQ * cQ + kQ * CQ)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!QQ) return this._m;
        const wQ = this._m;
        for (let LQ = 0; LQ < 16; LQ++) QQ[FQ + LQ] = wQ[LQ];
        return this
      }
      RLQ() {
        return this._m
      }
      bwQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return AQ.FromArrayToRef(QQ, FQ, this)
      }
      vQQ() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        return AQ.FromArrayToRef(FQ, 0, this)
      }
      set() {
        const QQ = this._m;
        for (let FQ = 0; FQ < 16; FQ++) QQ[FQ] = FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ];
        return this.markAsUpdated(), this
      }
      K3(QQ) {
        const FQ = this._m;
        for (let wQ = 0; wQ < 16; wQ++) FQ[wQ] = QQ;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return AQ.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(QQ) {
        const FQ = new AQ;
        return this.addToRef(QQ, FQ), FQ
      }
      addToRef(QQ, FQ) {
        const wQ = this._m,
          LQ = FQ._m,
          qQ = QQ.m;
        for (let oQ = 0; oQ < 16; oQ++) LQ[oQ] = wQ[oQ] + qQ[oQ];
        return FQ.markAsUpdated(), FQ
      }
      addToSelf(QQ) {
        const FQ = this._m,
          wQ = QQ.m;
        return FQ[0] += wQ[0], FQ[1] += wQ[1], FQ[2] += wQ[2], FQ[3] += wQ[3], FQ[4] += wQ[4], FQ[5] += wQ[5], FQ[6] += wQ[6], FQ[7] += wQ[7], FQ[8] += wQ[8], FQ[9] += wQ[9], FQ[10] += wQ[10], FQ[11] += wQ[11], FQ[12] += wQ[12], FQ[13] += wQ[13], FQ[14] += wQ[14], FQ[15] += wQ[15], this.markAsUpdated(), this
      }
      addInPlace(QQ) {
        const FQ = this._m,
          wQ = QQ.m;
        for (let LQ = 0; LQ < 16; LQ++) FQ[LQ] += wQ[LQ];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const QQ = this._m;
        for (let FQ = 0; FQ < 16; FQ++) QQ[FQ] += FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ];
        return this.markAsUpdated(), this
      }
      subtract(QQ) {
        const FQ = this._m,
          wQ = QQ.m;
        for (let LQ = 0; LQ < 16; LQ++) FQ[LQ] -= wQ[LQ];
        return this.markAsUpdated(), this
      }
      subtractToRef(QQ, FQ) {
        const wQ = this._m,
          LQ = QQ.m,
          qQ = FQ._m;
        for (let oQ = 0; oQ < 16; oQ++) qQ[oQ] = wQ[oQ] - LQ[oQ];
        return FQ.markAsUpdated(), FQ
      }
      gLQ(QQ) {
        const FQ = this._m,
          wQ = QQ.m;
        for (let LQ = 0; LQ < 16; LQ++) FQ[LQ] -= wQ[LQ];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        return this.subtractFromFloatsToRef(...FQ, new AQ)
      }
      subtractFromFloatsToRef() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        const LQ = FQ.pop(),
          qQ = this._m,
          oQ = LQ._m,
          DQ = FQ;
        for (let kQ = 0; kQ < 16; kQ++) oQ[kQ] = qQ[kQ] - DQ[kQ];
        return LQ.markAsUpdated(), LQ
      }
      invertToRef(QQ) {
        return !0 === this._isIdentity ? (AQ.IdentityToRef(QQ), QQ) : ((0, vQ.f)(this, QQ.RLQ()) ? QQ.markAsUpdated() : QQ.Qs(this), QQ)
      }
      addAtIndex(QQ, FQ) {
        return this._m[QQ] += FQ, this.markAsUpdated(), this
      }
      multiplyAtIndex(QQ, FQ) {
        return this._m[QQ] *= FQ, this.markAsUpdated(), this
      }
      setTranslationFromFloats(QQ, FQ, wQ) {
        return this._m[12] = QQ, this._m[13] = FQ, this._m[14] = wQ, this.markAsUpdated(), this
      }
      addTranslationFromFloats(QQ, FQ, wQ) {
        return this._m[12] += QQ, this._m[13] += FQ, this._m[14] += wQ, this.markAsUpdated(), this
      }
      setTranslation(QQ) {
        return this.setTranslationFromFloats(QQ._x, QQ._y, QQ._z)
      }
      getTranslation() {
        return new bQ(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(QQ) {
        return QQ.x = this._m[12], QQ.y = this._m[13], QQ.z = this._m[14], QQ
      }
      removeRotationAndScaling() {
        const QQ = this.m;
        return AQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, QQ[12], QQ[13], QQ[14], QQ[15], this), this._updateIdentityStatus(0 === QQ[12] && 0 === QQ[13] && 0 === QQ[14] && 1 === QQ[15]), this
      }
      Qs(QQ) {
        QQ.copyToArray(this._m);
        const FQ = QQ;
        return this.updateFlag = FQ.updateFlag, this._updateIdentityStatus(FQ._isIdentity, FQ._isIdentityDirty, FQ._isIdentity3x2, FQ._isIdentity3x2Dirty), this
      }
      copyToArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, vQ.b)(this, QQ, FQ), this
      }
      multiply(QQ) {
        const FQ = new AQ;
        return this.multiplyToRef(QQ, FQ), FQ
      }
      multiplyInPlace(QQ) {
        const FQ = this._m,
          wQ = QQ.m;
        for (let LQ = 0; LQ < 16; LQ++) FQ[LQ] *= wQ[LQ];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const QQ = this._m;
        for (let FQ = 0; FQ < 16; FQ++) QQ[FQ] *= FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var QQ = arguments.length, FQ = new Array(QQ), wQ = 0; wQ < QQ; wQ++) FQ[wQ] = arguments[wQ];
        const LQ = FQ.pop(),
          qQ = this._m,
          oQ = LQ._m,
          DQ = FQ;
        for (let kQ = 0; kQ < 16; kQ++) oQ[kQ] = qQ[kQ] * DQ[kQ];
        return LQ.markAsUpdated(), LQ
      }
      multiplyToRef(QQ, FQ) {
        return this._isIdentity ? (FQ.Qs(QQ), FQ) : QQ._isIdentity ? (FQ.Qs(this), FQ) : (this.multiplyToArray(QQ, FQ._m, 0), FQ.markAsUpdated(), FQ)
      }
      multiplyToArray(QQ, FQ, wQ) {
        return (0, vQ.m)(this, QQ, FQ, wQ), this
      }
      divide(QQ) {
        return this.divideToRef(QQ, new AQ)
      }
      divideToRef(QQ, FQ) {
        const wQ = this._m,
          LQ = QQ.m,
          qQ = FQ._m;
        for (let oQ = 0; oQ < 16; oQ++) qQ[oQ] = wQ[oQ] / LQ[oQ];
        return FQ.markAsUpdated(), FQ
      }
      divideInPlace(QQ) {
        const FQ = this._m,
          wQ = QQ.m;
        for (let LQ = 0; LQ < 16; LQ++) FQ[LQ] /= wQ[LQ];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(QQ) {
        const FQ = this._m,
          wQ = QQ.m;
        for (let LQ = 0; LQ < 16; LQ++) FQ[LQ] = Math.min(FQ[LQ], wQ[LQ]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const QQ = this._m;
        for (let FQ = 0; FQ < 16; FQ++) QQ[FQ] = Math.min(QQ[FQ], FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(QQ) {
        const FQ = this._m,
          wQ = QQ.m;
        for (let LQ = 0; LQ < 16; LQ++) FQ[LQ] = Math.max(FQ[LQ], wQ[LQ]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const QQ = this._m;
        for (let FQ = 0; FQ < 16; FQ++) QQ[FQ] = Math.max(QQ[FQ], FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ]);
        return this.markAsUpdated(), this
      }
      mo() {
        return this.negateToRef(new AQ)
      }
      negateInPlace() {
        const QQ = this._m;
        for (let FQ = 0; FQ < 16; FQ++) QQ[FQ] = -QQ[FQ];
        return this.markAsUpdated(), this
      }
      negateToRef(QQ) {
        const FQ = this._m,
          wQ = QQ._m;
        for (let LQ = 0; LQ < 16; LQ++) wQ[LQ] = -FQ[LQ];
        return QQ.markAsUpdated(), QQ
      }
      equals(QQ) {
        const FQ = QQ;
        if (!FQ) return !1;
        if ((this._isIdentity || FQ._isIdentity) && !this._isIdentityDirty && !FQ._isIdentityDirty) return this._isIdentity && FQ._isIdentity;
        const wQ = this.m,
          LQ = FQ.m;
        return wQ[0] === LQ[0] && wQ[1] === LQ[1] && wQ[2] === LQ[2] && wQ[3] === LQ[3] && wQ[4] === LQ[4] && wQ[5] === LQ[5] && wQ[6] === LQ[6] && wQ[7] === LQ[7] && wQ[8] === LQ[8] && wQ[9] === LQ[9] && wQ[10] === LQ[10] && wQ[11] === LQ[11] && wQ[12] === LQ[12] && wQ[13] === LQ[13] && wQ[14] === LQ[14] && wQ[15] === LQ[15]
      }
      equalsWithEpsilon(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = this._m,
          LQ = QQ.m;
        for (let qQ = 0; qQ < 16; qQ++)
          if (!(0, kQ.WithinEpsilon)(wQ[qQ], LQ[qQ], FQ)) return !1;
        return !0
      }
      LkQ() {
        const QQ = this._m;
        for (let FQ = 0; FQ < 16; FQ++)
          if (QQ[FQ] != (FQ < 0 || arguments.length <= FQ ? void 0 : arguments[FQ])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new AQ)
      }
      floorToRef(QQ) {
        const FQ = this._m,
          wQ = QQ._m;
        for (let LQ = 0; LQ < 16; LQ++) wQ[LQ] = Math.floor(FQ[LQ]);
        return QQ.markAsUpdated(), QQ
      }
      fract() {
        return this.fractToRef(new AQ)
      }
      fractToRef(QQ) {
        const FQ = this._m,
          wQ = QQ._m;
        for (let LQ = 0; LQ < 16; LQ++) wQ[LQ] = FQ[LQ] - Math.floor(FQ[LQ]);
        return QQ.markAsUpdated(), QQ
      }
      clone() {
        const QQ = new AQ;
        return QQ.Qs(this), QQ
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let QQ = uQ(this._m[0]);
        for (let FQ = 1; FQ < 16; FQ++) QQ = 397 * QQ ^ uQ(this._m[FQ]);
        return QQ
      }
      decomposeToTransformNode(QQ) {
        return QQ.rotationQuaternion = QQ.rotationQuaternion || new xQ, this.decompose(QQ.ck, QQ.rotationQuaternion, QQ.position)
      }
      decompose(QQ, FQ, wQ, LQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return wQ && wQ.K3(0), QQ && QQ.K3(1), FQ && FQ.vQQ(0, 0, 0, 1), !0;
        const oQ = this._m;
        if (wQ && wQ.vQQ(oQ[12], oQ[13], oQ[14]), (QQ = QQ || tQ.Ox[0]).x = Math.sqrt(oQ[0] * oQ[0] + oQ[1] * oQ[1] + oQ[2] * oQ[2]), QQ.y = Math.sqrt(oQ[4] * oQ[4] + oQ[5] * oQ[5] + oQ[6] * oQ[6]), QQ.z = Math.sqrt(oQ[8] * oQ[8] + oQ[9] * oQ[9] + oQ[10] * oQ[10]), LQ) {
          const FQ = (qQ ? LQ.absoluteScaling.x : LQ.ck.x) < 0 ? -1 : 1,
            wQ = (qQ ? LQ.absoluteScaling.y : LQ.ck.y) < 0 ? -1 : 1,
            oQ = (qQ ? LQ.absoluteScaling.z : LQ.ck.z) < 0 ? -1 : 1;
          QQ.x *= FQ, QQ.y *= wQ, QQ.z *= oQ
        } else this.determinant() <= 0 && (QQ.y *= -1);
        if (0 === QQ._x || 0 === QQ._y || 0 === QQ._z) return FQ && FQ.vQQ(0, 0, 0, 1), !1;
        if (FQ) {
          const wQ = 1 / QQ._x,
            LQ = 1 / QQ._y,
            qQ = 1 / QQ._z;
          AQ.FromValuesToRef(oQ[0] * wQ, oQ[1] * wQ, oQ[2] * wQ, 0, oQ[4] * LQ, oQ[5] * LQ, oQ[6] * LQ, 0, oQ[8] * qQ, oQ[9] * qQ, oQ[10] * qQ, 0, 0, 0, 0, 1, tQ.Matrix[0]), xQ.FromRotationMatrixToRef(tQ.Matrix[0], FQ)
        }
        return !0
      }
      getRow(QQ) {
        if (QQ < 0 || QQ > 3) return null;
        const FQ = 4 * QQ;
        return new YQ(this._m[FQ + 0], this._m[FQ + 1], this._m[FQ + 2], this._m[FQ + 3])
      }
      getRowToRef(QQ, FQ) {
        if (QQ >= 0 && QQ <= 3) {
          const wQ = 4 * QQ;
          FQ.x = this._m[wQ + 0], FQ.y = this._m[wQ + 1], FQ.z = this._m[wQ + 2], FQ.w = this._m[wQ + 3]
        }
        return FQ
      }
      setRow(QQ, FQ) {
        return this.setRowFromFloats(QQ, FQ.x, FQ.y, FQ.z, FQ.w)
      }
      transpose() {
        const QQ = new AQ;
        return AQ.TransposeToRef(this, QQ), QQ
      }
      transposeToRef(QQ) {
        return AQ.TransposeToRef(this, QQ), QQ
      }
      setRowFromFloats(QQ, FQ, wQ, LQ, qQ) {
        if (QQ < 0 || QQ > 3) return this;
        const oQ = 4 * QQ;
        return this._m[oQ + 0] = FQ, this._m[oQ + 1] = wQ, this._m[oQ + 2] = LQ, this._m[oQ + 3] = qQ, this.markAsUpdated(), this
      }
      scale(QQ) {
        const FQ = new AQ;
        return this.scaleToRef(QQ, FQ), FQ
      }
      scaleToRef(QQ, FQ) {
        for (let wQ = 0; wQ < 16; wQ++) FQ._m[wQ] = this._m[wQ] * QQ;
        return FQ.markAsUpdated(), FQ
      }
      scaleAndAddToRef(QQ, FQ) {
        for (let wQ = 0; wQ < 16; wQ++) FQ._m[wQ] += this._m[wQ] * QQ;
        return FQ.markAsUpdated(), FQ
      }
      scaleInPlace(QQ) {
        const FQ = this._m;
        for (let wQ = 0; wQ < 16; wQ++) FQ[wQ] *= QQ;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(QQ) {
        const FQ = tQ.Matrix[0];
        this.invertToRef(FQ), FQ.transposeToRef(QQ);
        const wQ = QQ._m;
        return AQ.FromValuesToRef(wQ[0], wQ[1], wQ[2], 0, wQ[4], wQ[5], wQ[6], 0, wQ[8], wQ[9], wQ[10], 0, 0, 0, 0, 1, QQ), QQ
      }
      getRotationMatrix() {
        const QQ = new AQ;
        return this.getRotationMatrixToRef(QQ), QQ
      }
      getRotationMatrixToRef(QQ) {
        const FQ = tQ.Ox[0];
        if (!this.decompose(FQ)) return AQ.IdentityToRef(QQ), QQ;
        const wQ = this._m,
          LQ = 1 / FQ._x,
          qQ = 1 / FQ._y,
          oQ = 1 / FQ._z;
        return AQ.FromValuesToRef(wQ[0] * LQ, wQ[1] * LQ, wQ[2] * LQ, 0, wQ[4] * qQ, wQ[5] * qQ, wQ[6] * qQ, 0, wQ[8] * oQ, wQ[9] * oQ, wQ[10] * oQ, 0, 0, 0, 0, 1, QQ), QQ
      }
      toggleModelMatrixHandInPlace() {
        const QQ = this._m;
        return QQ[2] *= -1, QQ[6] *= -1, QQ[8] *= -1, QQ[9] *= -1, QQ[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const QQ = this._m;
        return QQ[8] *= -1, QQ[9] *= -1, QQ[10] *= -1, QQ[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(MQ, this), this
      }
      static FromArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wQ = new AQ;
        return AQ.FromArrayToRef(QQ, FQ, wQ), wQ
      }
      static FromArrayToRef(QQ, FQ, wQ) {
        for (let LQ = 0; LQ < 16; LQ++) wQ._m[LQ] = QQ[LQ + FQ];
        return wQ.markAsUpdated(), wQ
      }
      static FromFloat32ArrayToRefScaled(QQ, FQ, wQ, LQ) {
        return LQ._m[0] = QQ[0 + FQ] * wQ, LQ._m[1] = QQ[1 + FQ] * wQ, LQ._m[2] = QQ[2 + FQ] * wQ, LQ._m[3] = QQ[3 + FQ] * wQ, LQ._m[4] = QQ[4 + FQ] * wQ, LQ._m[5] = QQ[5 + FQ] * wQ, LQ._m[6] = QQ[6 + FQ] * wQ, LQ._m[7] = QQ[7 + FQ] * wQ, LQ._m[8] = QQ[8 + FQ] * wQ, LQ._m[9] = QQ[9 + FQ] * wQ, LQ._m[10] = QQ[10 + FQ] * wQ, LQ._m[11] = QQ[11 + FQ] * wQ, LQ._m[12] = QQ[12 + FQ] * wQ, LQ._m[13] = QQ[13 + FQ] * wQ, LQ._m[14] = QQ[14 + FQ] * wQ, LQ._m[15] = QQ[15 + FQ] * wQ, LQ.markAsUpdated(), LQ
      }
      static get IdentityReadOnly() {
        return AQ._IdentityReadOnly
      }
      static FromValuesToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, AQ, tQ) {
        const eQ = tQ._m;
        eQ[0] = QQ, eQ[1] = FQ, eQ[2] = wQ, eQ[3] = LQ, eQ[4] = qQ, eQ[5] = oQ, eQ[6] = DQ, eQ[7] = kQ, eQ[8] = vQ, eQ[9] = mQ, eQ[10] = uQ, eQ[11] = HQ, eQ[12] = bQ, eQ[13] = YQ, eQ[14] = xQ, eQ[15] = AQ, tQ.markAsUpdated()
      }
      static FromValues(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ, HQ, bQ, YQ, xQ, tQ) {
        const eQ = new AQ,
          MQ = eQ._m;
        return MQ[0] = QQ, MQ[1] = FQ, MQ[2] = wQ, MQ[3] = LQ, MQ[4] = qQ, MQ[5] = oQ, MQ[6] = DQ, MQ[7] = kQ, MQ[8] = vQ, MQ[9] = mQ, MQ[10] = uQ, MQ[11] = HQ, MQ[12] = bQ, MQ[13] = YQ, MQ[14] = xQ, MQ[15] = tQ, eQ.markAsUpdated(), eQ
      }
      static Compose(QQ, FQ, wQ) {
        const LQ = new AQ;
        return AQ.ComposeToRef(QQ, FQ, wQ, LQ), LQ
      }
      static ComposeToRef(QQ, FQ, wQ, LQ) {
        const qQ = LQ._m,
          oQ = FQ._x,
          DQ = FQ._y,
          kQ = FQ._z,
          vQ = FQ._w,
          mQ = oQ + oQ,
          uQ = DQ + DQ,
          HQ = kQ + kQ,
          bQ = oQ * mQ,
          YQ = oQ * uQ,
          xQ = oQ * HQ,
          AQ = DQ * uQ,
          tQ = DQ * HQ,
          eQ = kQ * HQ,
          MQ = vQ * mQ,
          GQ = vQ * uQ,
          pQ = vQ * HQ,
          cQ = QQ._x,
          CQ = QQ._y,
          SQ = QQ._z;
        return qQ[0] = (1 - (AQ + eQ)) * cQ, qQ[1] = (YQ + pQ) * cQ, qQ[2] = (xQ - GQ) * cQ, qQ[3] = 0, qQ[4] = (YQ - pQ) * CQ, qQ[5] = (1 - (bQ + eQ)) * CQ, qQ[6] = (tQ + MQ) * CQ, qQ[7] = 0, qQ[8] = (xQ + GQ) * SQ, qQ[9] = (tQ - MQ) * SQ, qQ[10] = (1 - (bQ + AQ)) * SQ, qQ[11] = 0, qQ[12] = wQ._x, qQ[13] = wQ._y, qQ[14] = wQ._z, qQ[15] = 1, LQ.markAsUpdated(), LQ
      }
      static Identity() {
        const QQ = AQ.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return QQ._updateIdentityStatus(!0), QQ
      }
      static IdentityToRef(QQ) {
        return AQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, QQ), QQ._updateIdentityStatus(!0), QQ
      }
      static Zero() {
        const QQ = AQ.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return QQ._updateIdentityStatus(!1), QQ
      }
      static RotationX(QQ) {
        const FQ = new AQ;
        return AQ.RotationXToRef(QQ, FQ), FQ
      }
      static Invert(QQ) {
        const FQ = new AQ;
        return QQ.invertToRef(FQ), FQ
      }
      static RotationXToRef(QQ, FQ) {
        const wQ = Math.sin(QQ),
          LQ = Math.cos(QQ);
        return AQ.FromValuesToRef(1, 0, 0, 0, 0, LQ, wQ, 0, 0, -wQ, LQ, 0, 0, 0, 0, 1, FQ), FQ._updateIdentityStatus(1 === LQ && 0 === wQ), FQ
      }
      static RotationY(QQ) {
        const FQ = new AQ;
        return AQ.RotationYToRef(QQ, FQ), FQ
      }
      static RotationYToRef(QQ, FQ) {
        const wQ = Math.sin(QQ),
          LQ = Math.cos(QQ);
        return AQ.FromValuesToRef(LQ, 0, -wQ, 0, 0, 1, 0, 0, wQ, 0, LQ, 0, 0, 0, 0, 1, FQ), FQ._updateIdentityStatus(1 === LQ && 0 === wQ), FQ
      }
      static RotationZ(QQ) {
        const FQ = new AQ;
        return AQ.RotationZToRef(QQ, FQ), FQ
      }
      static RotationZToRef(QQ, FQ) {
        const wQ = Math.sin(QQ),
          LQ = Math.cos(QQ);
        return AQ.FromValuesToRef(LQ, wQ, 0, 0, -wQ, LQ, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, FQ), FQ._updateIdentityStatus(1 === LQ && 0 === wQ), FQ
      }
      static RotationAxis(QQ, FQ) {
        const wQ = new AQ;
        return AQ.RotationAxisToRef(QQ, FQ, wQ), wQ
      }
      static RotationAxisToRef(QQ, FQ, wQ) {
        const LQ = Math.sin(-FQ),
          qQ = Math.cos(-FQ),
          oQ = 1 - qQ;
        QQ = QQ.normalizeToRef(tQ.Ox[0]);
        const DQ = wQ._m;
        return DQ[0] = QQ._x * QQ._x * oQ + qQ, DQ[1] = QQ._x * QQ._y * oQ - QQ._z * LQ, DQ[2] = QQ._x * QQ._z * oQ + QQ._y * LQ, DQ[3] = 0, DQ[4] = QQ._y * QQ._x * oQ + QQ._z * LQ, DQ[5] = QQ._y * QQ._y * oQ + qQ, DQ[6] = QQ._y * QQ._z * oQ - QQ._x * LQ, DQ[7] = 0, DQ[8] = QQ._z * QQ._x * oQ - QQ._y * LQ, DQ[9] = QQ._z * QQ._y * oQ + QQ._x * LQ, DQ[10] = QQ._z * QQ._z * oQ + qQ, DQ[11] = 0, DQ[12] = 0, DQ[13] = 0, DQ[14] = 0, DQ[15] = 1, wQ.markAsUpdated(), wQ
      }
      static RotationAlignToRef(QQ, FQ, wQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const oQ = bQ.Dot(FQ, QQ),
          DQ = wQ._m;
        if (oQ < -1 + LQ.b) DQ[0] = -1, DQ[1] = 0, DQ[2] = 0, DQ[3] = 0, DQ[4] = 0, DQ[5] = qQ ? 1 : -1, DQ[6] = 0, DQ[7] = 0, DQ[8] = 0, DQ[9] = 0, DQ[10] = qQ ? -1 : 1, DQ[11] = 0;
        else {
          const wQ = bQ.Cross(FQ, QQ),
            LQ = 1 / (1 + oQ);
          DQ[0] = wQ._x * wQ._x * LQ + oQ, DQ[1] = wQ._y * wQ._x * LQ - wQ._z, DQ[2] = wQ._z * wQ._x * LQ + wQ._y, DQ[3] = 0, DQ[4] = wQ._x * wQ._y * LQ + wQ._z, DQ[5] = wQ._y * wQ._y * LQ + oQ, DQ[6] = wQ._z * wQ._y * LQ - wQ._x, DQ[7] = 0, DQ[8] = wQ._x * wQ._z * LQ - wQ._y, DQ[9] = wQ._y * wQ._z * LQ + wQ._x, DQ[10] = wQ._z * wQ._z * LQ + oQ, DQ[11] = 0
        }
        return DQ[12] = 0, DQ[13] = 0, DQ[14] = 0, DQ[15] = 1, wQ.markAsUpdated(), wQ
      }
      static RotationYawPitchRoll(QQ, FQ, wQ) {
        const LQ = new AQ;
        return AQ.RotationYawPitchRollToRef(QQ, FQ, wQ, LQ), LQ
      }
      static RotationYawPitchRollToRef(QQ, FQ, wQ, LQ) {
        return xQ.RotationYawPitchRollToRef(QQ, FQ, wQ, tQ.Quaternion[0]), tQ.Quaternion[0].toRotationMatrix(LQ), LQ
      }
      static Scaling(QQ, FQ, wQ) {
        const LQ = new AQ;
        return AQ.ScalingToRef(QQ, FQ, wQ, LQ), LQ
      }
      static ScalingToRef(QQ, FQ, wQ, LQ) {
        return AQ.FromValuesToRef(QQ, 0, 0, 0, 0, FQ, 0, 0, 0, 0, wQ, 0, 0, 0, 0, 1, LQ), LQ._updateIdentityStatus(1 === QQ && 1 === FQ && 1 === wQ), LQ
      }
      static Translation(QQ, FQ, wQ) {
        const LQ = new AQ;
        return AQ.TranslationToRef(QQ, FQ, wQ, LQ), LQ
      }
      static TranslationToRef(QQ, FQ, wQ, LQ) {
        return AQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, QQ, FQ, wQ, 1, LQ), LQ._updateIdentityStatus(0 === QQ && 0 === FQ && 0 === wQ), LQ
      }
      static Lerp(QQ, FQ, wQ) {
        const LQ = new AQ;
        return AQ.LerpToRef(QQ, FQ, wQ, LQ), LQ
      }
      static LerpToRef(QQ, FQ, wQ, LQ) {
        const qQ = LQ._m,
          oQ = QQ.m,
          DQ = FQ.m;
        for (let kQ = 0; kQ < 16; kQ++) qQ[kQ] = oQ[kQ] * (1 - wQ) + DQ[kQ] * wQ;
        return LQ.markAsUpdated(), LQ
      }
      static DecomposeLerp(QQ, FQ, wQ) {
        const LQ = new AQ;
        return AQ.DecomposeLerpToRef(QQ, FQ, wQ, LQ), LQ
      }
      static DecomposeLerpToRef(QQ, FQ, wQ, LQ) {
        const qQ = tQ.Ox[0],
          oQ = tQ.Quaternion[0],
          DQ = tQ.Ox[1];
        QQ.decompose(qQ, oQ, DQ);
        const kQ = tQ.Ox[2],
          vQ = tQ.Quaternion[1],
          mQ = tQ.Ox[3];
        FQ.decompose(kQ, vQ, mQ);
        const uQ = tQ.Ox[4];
        bQ.LerpToRef(qQ, kQ, wQ, uQ);
        const HQ = tQ.Quaternion[2];
        xQ.SlerpToRef(oQ, vQ, wQ, HQ);
        const YQ = tQ.Ox[5];
        return bQ.LerpToRef(DQ, mQ, wQ, YQ), AQ.ComposeToRef(uQ, HQ, YQ, LQ), LQ
      }
      static LookAtLH(QQ, FQ, wQ) {
        const LQ = new AQ;
        return AQ.LookAtLHToRef(QQ, FQ, wQ, LQ), LQ
      }
      static LookAtLHToRef(QQ, FQ, wQ, LQ) {
        const qQ = tQ.Ox[0],
          oQ = tQ.Ox[1],
          DQ = tQ.Ox[2];
        FQ.subtractToRef(QQ, DQ), DQ.normalize(), bQ.CrossToRef(wQ, DQ, qQ);
        const kQ = qQ.lengthSquared();
        0 === kQ ? qQ.x = 1 : qQ.normalizeFromLength(Math.sqrt(kQ)), bQ.CrossToRef(DQ, qQ, oQ), oQ.normalize();
        const vQ = -bQ.Dot(qQ, QQ),
          mQ = -bQ.Dot(oQ, QQ),
          uQ = -bQ.Dot(DQ, QQ);
        return AQ.FromValuesToRef(qQ._x, oQ._x, DQ._x, 0, qQ._y, oQ._y, DQ._y, 0, qQ._z, oQ._z, DQ._z, 0, vQ, mQ, uQ, 1, LQ), LQ
      }
      static LookAtRH(QQ, FQ, wQ) {
        const LQ = new AQ;
        return AQ.LookAtRHToRef(QQ, FQ, wQ, LQ), LQ
      }
      static LookAtRHToRef(QQ, FQ, wQ, LQ) {
        const qQ = tQ.Ox[0],
          oQ = tQ.Ox[1],
          DQ = tQ.Ox[2];
        QQ.subtractToRef(FQ, DQ), DQ.normalize(), bQ.CrossToRef(wQ, DQ, qQ);
        const kQ = qQ.lengthSquared();
        0 === kQ ? qQ.x = 1 : qQ.normalizeFromLength(Math.sqrt(kQ)), bQ.CrossToRef(DQ, qQ, oQ), oQ.normalize();
        const vQ = -bQ.Dot(qQ, QQ),
          mQ = -bQ.Dot(oQ, QQ),
          uQ = -bQ.Dot(DQ, QQ);
        return AQ.FromValuesToRef(qQ._x, oQ._x, DQ._x, 0, qQ._y, oQ._y, DQ._y, 0, qQ._z, oQ._z, DQ._z, 0, vQ, mQ, uQ, 1, LQ), LQ
      }
      static LookDirectionLH(QQ, FQ) {
        const wQ = new AQ;
        return AQ.LookDirectionLHToRef(QQ, FQ, wQ), wQ
      }
      static LookDirectionLHToRef(QQ, FQ, wQ) {
        const LQ = tQ.Ox[0];
        LQ.Qs(QQ), LQ.scaleInPlace(-1);
        const qQ = tQ.Ox[1];
        return bQ.CrossToRef(FQ, LQ, qQ), AQ.FromValuesToRef(qQ._x, qQ._y, qQ._z, 0, FQ._x, FQ._y, FQ._z, 0, LQ._x, LQ._y, LQ._z, 0, 0, 0, 0, 1, wQ), wQ
      }
      static LookDirectionRH(QQ, FQ) {
        const wQ = new AQ;
        return AQ.LookDirectionRHToRef(QQ, FQ, wQ), wQ
      }
      static LookDirectionRHToRef(QQ, FQ, wQ) {
        const LQ = tQ.Ox[2];
        return bQ.CrossToRef(FQ, QQ, LQ), AQ.FromValuesToRef(LQ._x, LQ._y, LQ._z, 0, FQ._x, FQ._y, FQ._z, 0, QQ._x, QQ._y, QQ._z, 0, 0, 0, 0, 1, wQ), wQ
      }
      static OrthoLH(QQ, FQ, wQ, LQ, qQ) {
        const oQ = new AQ;
        return AQ.OrthoLHToRef(QQ, FQ, wQ, LQ, oQ, qQ), oQ
      }
      static OrthoLHToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = 2 / QQ,
          kQ = 2 / FQ,
          vQ = 2 / (LQ - wQ),
          mQ = -(LQ + wQ) / (LQ - wQ);
        return AQ.FromValuesToRef(DQ, 0, 0, 0, 0, kQ, 0, 0, 0, 0, vQ, 0, 0, 0, mQ, 1, qQ), oQ && qQ.multiplyToRef(MQ, qQ), qQ._updateIdentityStatus(1 === DQ && 1 === kQ && 1 === vQ && 0 === mQ), qQ
      }
      static OrthoOffCenterLH(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        const kQ = new AQ;
        return AQ.OrthoOffCenterLHToRef(QQ, FQ, wQ, LQ, qQ, oQ, kQ, DQ), kQ
      }
      static OrthoOffCenterLHToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        const vQ = 2 / (FQ - QQ),
          mQ = 2 / (LQ - wQ),
          uQ = 2 / (oQ - qQ),
          HQ = -(oQ + qQ) / (oQ - qQ),
          bQ = (QQ + FQ) / (QQ - FQ),
          YQ = (LQ + wQ) / (wQ - LQ);
        return AQ.FromValuesToRef(vQ, 0, 0, 0, 0, mQ, 0, 0, 0, 0, uQ, 0, bQ, YQ, HQ, 1, DQ), kQ && DQ.multiplyToRef(MQ, DQ), DQ.markAsUpdated(), DQ
      }
      static ObliqueOffCenterLHToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
        const HQ = -DQ * Math.cos(kQ),
          bQ = -DQ * Math.sin(kQ);
        return AQ.TranslationToRef(0, 0, -vQ, tQ.Matrix[1]), AQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, HQ, bQ, 1, 0, 0, 0, 0, 1, tQ.Matrix[0]), tQ.Matrix[1].multiplyToRef(tQ.Matrix[0], tQ.Matrix[0]), AQ.TranslationToRef(0, 0, vQ, tQ.Matrix[1]), tQ.Matrix[0].multiplyToRef(tQ.Matrix[1], tQ.Matrix[0]), AQ.OrthoOffCenterLHToRef(QQ, FQ, wQ, LQ, qQ, oQ, mQ, uQ), tQ.Matrix[0].multiplyToRef(mQ, mQ), mQ
      }
      static OrthoOffCenterRH(QQ, FQ, wQ, LQ, qQ, oQ, DQ) {
        const kQ = new AQ;
        return AQ.OrthoOffCenterRHToRef(QQ, FQ, wQ, LQ, qQ, oQ, kQ, DQ), kQ
      }
      static OrthoOffCenterRHToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ) {
        return AQ.OrthoOffCenterLHToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ), DQ._m[10] *= -1, DQ
      }
      static ObliqueOffCenterRHToRef(QQ, FQ, wQ, LQ, qQ, oQ, DQ, kQ, vQ, mQ, uQ) {
        const HQ = DQ * Math.cos(kQ),
          bQ = DQ * Math.sin(kQ);
        return AQ.TranslationToRef(0, 0, vQ, tQ.Matrix[1]), AQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, HQ, bQ, 1, 0, 0, 0, 0, 1, tQ.Matrix[0]), tQ.Matrix[1].multiplyToRef(tQ.Matrix[0], tQ.Matrix[0]), AQ.TranslationToRef(0, 0, -vQ, tQ.Matrix[1]), tQ.Matrix[0].multiplyToRef(tQ.Matrix[1], tQ.Matrix[0]), AQ.OrthoOffCenterRHToRef(QQ, FQ, wQ, LQ, qQ, oQ, mQ, uQ), tQ.Matrix[0].multiplyToRef(mQ, mQ), mQ
      }
      static PerspectiveLH(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const DQ = new AQ,
          kQ = 2 * wQ / QQ,
          vQ = 2 * wQ / FQ,
          mQ = (LQ + wQ) / (LQ - wQ),
          uQ = -2 * LQ * wQ / (LQ - wQ),
          HQ = Math.tan(oQ);
        return AQ.FromValuesToRef(kQ, 0, 0, 0, 0, vQ, 0, HQ, 0, 0, mQ, 1, 0, 0, uQ, 0, DQ), qQ && DQ.multiplyToRef(MQ, DQ), DQ._updateIdentityStatus(!1), DQ
      }
      static PerspectiveFovLH(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const kQ = new AQ;
        return AQ.PerspectiveFovLHToRef(QQ, FQ, wQ, LQ, kQ, !0, qQ, oQ, DQ), kQ
      }
      static PerspectiveFovLHToRef(QQ, FQ, wQ, LQ, qQ) {
        let oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          DQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const mQ = wQ,
          uQ = LQ,
          HQ = 1 / Math.tan(.5 * QQ),
          bQ = oQ ? HQ / FQ : HQ,
          YQ = oQ ? HQ : HQ * FQ,
          xQ = vQ && 0 === mQ ? -1 : 0 !== uQ ? (uQ + mQ) / (uQ - mQ) : 1,
          tQ = vQ && 0 === mQ ? 2 * uQ : 0 !== uQ ? -2 * uQ * mQ / (uQ - mQ) : -2 * mQ,
          eQ = Math.tan(kQ);
        return AQ.FromValuesToRef(bQ, 0, 0, 0, 0, YQ, 0, eQ, 0, 0, xQ, 1, 0, 0, tQ, 0, qQ), DQ && qQ.multiplyToRef(MQ, qQ), qQ._updateIdentityStatus(!1), qQ
      }
      static PerspectiveFovReverseLHToRef(QQ, FQ, wQ, LQ, qQ) {
        let oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          DQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const vQ = 1 / Math.tan(.5 * QQ),
          mQ = oQ ? vQ / FQ : vQ,
          uQ = oQ ? vQ : vQ * FQ,
          HQ = Math.tan(kQ);
        return AQ.FromValuesToRef(mQ, 0, 0, 0, 0, uQ, 0, HQ, 0, 0, -wQ, 1, 0, 0, 1, 0, qQ), DQ && qQ.multiplyToRef(MQ, qQ), qQ._updateIdentityStatus(!1), qQ
      }
      static PerspectiveFovRH(QQ, FQ, wQ, LQ, qQ) {
        let oQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          DQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const kQ = new AQ;
        return AQ.PerspectiveFovRHToRef(QQ, FQ, wQ, LQ, kQ, !0, qQ, oQ, DQ), kQ
      }
      static PerspectiveFovRHToRef(QQ, FQ, wQ, LQ, qQ) {
        let oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          DQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          vQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const mQ = wQ,
          uQ = LQ,
          HQ = 1 / Math.tan(.5 * QQ),
          bQ = oQ ? HQ / FQ : HQ,
          YQ = oQ ? HQ : HQ * FQ,
          xQ = vQ && 0 === mQ ? 1 : 0 !== uQ ? -(uQ + mQ) / (uQ - mQ) : -1,
          tQ = vQ && 0 === mQ ? 2 * uQ : 0 !== uQ ? -2 * uQ * mQ / (uQ - mQ) : -2 * mQ,
          eQ = Math.tan(kQ);
        return AQ.FromValuesToRef(bQ, 0, 0, 0, 0, YQ, 0, eQ, 0, 0, xQ, -1, 0, 0, tQ, 0, qQ), DQ && qQ.multiplyToRef(MQ, qQ), qQ._updateIdentityStatus(!1), qQ
      }
      static PerspectiveFovReverseRHToRef(QQ, FQ, wQ, LQ, qQ) {
        let oQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          DQ = arguments.length > 6 ? arguments[6] : void 0,
          kQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const vQ = 1 / Math.tan(.5 * QQ),
          mQ = oQ ? vQ / FQ : vQ,
          uQ = oQ ? vQ : vQ * FQ,
          HQ = Math.tan(kQ);
        return AQ.FromValuesToRef(mQ, 0, 0, 0, 0, uQ, 0, HQ, 0, 0, -wQ, -1, 0, 0, -1, 0, qQ), DQ && qQ.multiplyToRef(MQ, qQ), qQ._updateIdentityStatus(!1), qQ
      }
      static GetFinalMatrix(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = QQ.width,
          kQ = QQ.height,
          vQ = QQ.x,
          mQ = QQ.y,
          uQ = AQ.FromValues(DQ / 2, 0, 0, 0, 0, -kQ / 2, 0, 0, 0, 0, oQ - qQ, 0, vQ + DQ / 2, kQ / 2 + mQ, qQ, 1),
          HQ = new AQ;
        return FQ.multiplyToRef(wQ, HQ), HQ.multiplyToRef(LQ, HQ), HQ.multiplyToRef(uQ, HQ)
      }
      static GetAsMatrix2x2(QQ) {
        const FQ = QQ.m,
          wQ = [FQ[0], FQ[1], FQ[4], FQ[5]];
        return oQ.e.MatrixUse64Bits ? wQ : new Float32Array(wQ)
      }
      static GetAsMatrix3x3(QQ) {
        const FQ = QQ.m,
          wQ = [FQ[0], FQ[1], FQ[2], FQ[4], FQ[5], FQ[6], FQ[8], FQ[9], FQ[10]];
        return oQ.e.MatrixUse64Bits ? wQ : new Float32Array(wQ)
      }
      static Transpose(QQ) {
        const FQ = new AQ;
        return AQ.TransposeToRef(QQ, FQ), FQ
      }
      static TransposeToRef(QQ, FQ) {
        const wQ = QQ.m,
          LQ = wQ[0],
          qQ = wQ[4],
          oQ = wQ[8],
          DQ = wQ[12],
          kQ = wQ[1],
          vQ = wQ[5],
          mQ = wQ[9],
          uQ = wQ[13],
          HQ = wQ[2],
          bQ = wQ[6],
          YQ = wQ[10],
          xQ = wQ[14],
          AQ = wQ[3],
          tQ = wQ[7],
          eQ = wQ[11],
          MQ = wQ[15],
          GQ = FQ._m;
        return GQ[0] = LQ, GQ[1] = qQ, GQ[2] = oQ, GQ[3] = DQ, GQ[4] = kQ, GQ[5] = vQ, GQ[6] = mQ, GQ[7] = uQ, GQ[8] = HQ, GQ[9] = bQ, GQ[10] = YQ, GQ[11] = xQ, GQ[12] = AQ, GQ[13] = tQ, GQ[14] = eQ, GQ[15] = MQ, FQ.markAsUpdated(), FQ._updateIdentityStatus(QQ._isIdentity, QQ._isIdentityDirty), FQ
      }
      static Reflection(QQ) {
        const FQ = new AQ;
        return AQ.ReflectionToRef(QQ, FQ), FQ
      }
      static ReflectionToRef(QQ, FQ) {
        QQ.normalize();
        const wQ = QQ.normal.x,
          LQ = QQ.normal.y,
          qQ = QQ.normal.z,
          oQ = -2 * wQ,
          DQ = -2 * LQ,
          kQ = -2 * qQ;
        return AQ.FromValuesToRef(oQ * wQ + 1, DQ * wQ, kQ * wQ, 0, oQ * LQ, DQ * LQ + 1, kQ * LQ, 0, oQ * qQ, DQ * qQ, kQ * qQ + 1, 0, oQ * QQ.d, DQ * QQ.d, kQ * QQ.d, 1, FQ), FQ
      }
      static FromXYZAxesToRef(QQ, FQ, wQ, LQ) {
        return AQ.FromValuesToRef(QQ._x, QQ._y, QQ._z, 0, FQ._x, FQ._y, FQ._z, 0, wQ._x, wQ._y, wQ._z, 0, 0, 0, 0, 1, LQ), LQ
      }
      static FromQuaternionToRef(QQ, FQ) {
        const wQ = QQ._x * QQ._x,
          LQ = QQ._y * QQ._y,
          qQ = QQ._z * QQ._z,
          oQ = QQ._x * QQ._y,
          DQ = QQ._z * QQ._w,
          kQ = QQ._z * QQ._x,
          vQ = QQ._y * QQ._w,
          mQ = QQ._y * QQ._z,
          uQ = QQ._x * QQ._w;
        return FQ._m[0] = 1 - 2 * (LQ + qQ), FQ._m[1] = 2 * (oQ + DQ), FQ._m[2] = 2 * (kQ - vQ), FQ._m[3] = 0, FQ._m[4] = 2 * (oQ - DQ), FQ._m[5] = 1 - 2 * (qQ + wQ), FQ._m[6] = 2 * (mQ + uQ), FQ._m[7] = 0, FQ._m[8] = 2 * (kQ + vQ), FQ._m[9] = 2 * (mQ - uQ), FQ._m[10] = 1 - 2 * (LQ + wQ), FQ._m[11] = 0, FQ._m[12] = 0, FQ._m[13] = 0, FQ._m[14] = 0, FQ._m[15] = 1, FQ.markAsUpdated(), FQ
      }
    }
    AQ._IdentityReadOnly = AQ.Identity();
    class tQ {}
    tQ.Ox = (0, qQ.f)(11, bQ.Zero), tQ.Matrix = (0, qQ.f)(2, AQ.Identity), tQ.Quaternion = (0, qQ.f)(3, xQ.Zero);
    class eQ {}
    eQ.Vector2 = (0, qQ.f)(3, HQ.Zero), eQ.Ox = (0, qQ.f)(13, bQ.Zero), eQ.Vector4 = (0, qQ.f)(3, YQ.Zero), eQ.Quaternion = (0, qQ.f)(3, xQ.Zero), eQ.Matrix = (0, qQ.f)(8, AQ.Identity);
    const MQ = AQ.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let GQ = !1;

    function pQ() {
      GQ || (GQ = !0, Object.defineProperties(HQ.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(bQ.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(YQ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(xQ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(AQ.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, mQ.e)("BABYLON.Vector2", HQ), (0, mQ.e)("BABYLON.Vector3", bQ), (0, mQ.e)("BABYLON.Vector4", YQ), (0, mQ.e)("BABYLON.Matrix", AQ))
    }
  },
  36722: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    const LQ = "undefined" !== typeof WeakRef;
    class qQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(QQ, FQ, wQ, LQ)
      }
      initialize(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = QQ, this.skipNextObservers = FQ, this.target = wQ, this.currentTarget = LQ, this
      }
    }
    class oQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = QQ, this.mask = FQ, this.scope = wQ, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(QQ)
      }
    }
    class DQ {
      static FromPromise(QQ, FQ) {
        const wQ = new DQ;
        return QQ.then((QQ => {
          wQ.notifyObservers(QQ)
        })).catch((QQ => {
          if (!FQ) throw QQ;
          FQ.notifyObservers(QQ)
        })), wQ
      }
      get observers() {
        return this._observers
      }
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = FQ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qQ(0), QQ && (this._onObserverAdded = QQ)
      }
      add(QQ) {
        let FQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!QQ) return null;
        const qQ = new oQ(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        qQ.unregisterOnNextCall = wQ, FQ ? this._observers.unshift(qQ) : this._observers.push(qQ), this._onObserverAdded && this._onObserverAdded(qQ), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(qQ, this._lastNotifiedValue);
        const DQ = LQ ? new WeakRef(this) : {
          deref: () => this
        };
        return qQ._remove = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const FQ = DQ.deref();
          FQ && (QQ ? FQ.remove(qQ) : FQ._remove(qQ))
        }, qQ
      }
      addOnce(QQ) {
        return this.add(QQ, void 0, void 0, void 0, !0)
      }
      remove(QQ) {
        if (!QQ) return !1;
        QQ._remove = null;
        return -1 !== this._observers.indexOf(QQ) && (this._deferUnregister(QQ), !0)
      }
      removeCallback(QQ, FQ) {
        for (let wQ = 0; wQ < this._observers.length; wQ++) {
          const LQ = this._observers[wQ];
          if (!LQ._willBeUnregistered && (LQ.callback === QQ && (!FQ || FQ === LQ.scope))) return this._deferUnregister(LQ), !0
        }
        return !1
      }
      _deferUnregister(QQ) {
        QQ._willBeUnregistered || (this._numObserversMarkedAsDeleted++, QQ.unregisterOnNextCall = !1, QQ._willBeUnregistered = !0, setTimeout((() => {
          this._remove(QQ)
        }), 0))
      }
      _remove(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!QQ) return !1;
        const wQ = this._observers.indexOf(QQ);
        return -1 !== wQ && (FQ && this._numObserversMarkedAsDeleted--, this._observers.splice(wQ, 1), !0)
      }
      makeObserverTopPriority(QQ) {
        this._remove(QQ, !1), this._observers.unshift(QQ)
      }
      makeObserverBottomPriority(QQ) {
        this._remove(QQ, !1), this._observers.push(QQ)
      }
      notifyObservers(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = QQ), !this._observers.length) return !0;
        const oQ = this._eventState;
        oQ.mask = FQ, oQ.target = wQ, oQ.currentTarget = LQ, oQ.skipNextObservers = !1, oQ.lastReturnValue = QQ, oQ.userInfo = qQ;
        for (const DQ of this._observers)
          if (!DQ._willBeUnregistered && (DQ.mask & FQ && (DQ.unregisterOnNextCall && this._deferUnregister(DQ), DQ.scope ? oQ.lastReturnValue = DQ.callback.apply(DQ.scope, [QQ, oQ]) : oQ.lastReturnValue = DQ.callback(QQ, oQ)), oQ.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = FQ), QQ._willBeUnregistered) return;
        const LQ = this._eventState;
        LQ.mask = wQ, LQ.skipNextObservers = !1, QQ.unregisterOnNextCall && this._deferUnregister(QQ), QQ.callback(FQ, LQ)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const QQ = this._observers.pop();
          QQ && (QQ._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const QQ = new DQ;
        return QQ._observers = this._observers.slice(0), QQ
      }
      hasSpecificMask() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const FQ of this._observers)
          if (FQ.mask & QQ || FQ.mask === QQ) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);