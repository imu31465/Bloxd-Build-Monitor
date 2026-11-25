export const id = 240;
export const ids = [240];
export const modules = {
  37392: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(37399);
    class qQ {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    qQ.Instances = [], qQ.OnEnginesDisposedObservable = new wQ.b, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
  },
  37387: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => wQ
    });
    class wQ {
      static SetMatrixPrecision(QQ) {
        if (wQ.MatrixTrackPrecisionChange = !1, QQ && !wQ.MatrixUse64Bits && wQ.MatrixTrackedMatrices)
          for (let WQ = 0; WQ < wQ.MatrixTrackedMatrices.length; ++WQ) {
            const QQ = wQ.MatrixTrackedMatrices[WQ],
              XQ = QQ._m;
            QQ._m = new Array(16);
            for (let WQ = 0; WQ < 16; ++WQ) QQ._m[WQ] = XQ[WQ]
          }
        wQ.MatrixUse64Bits = QQ, wQ.MatrixCurrentType = wQ.MatrixUse64Bits ? Array : Float32Array, wQ.MatrixTrackedMatrices = null
      }
    }
    wQ.MatrixUse64Bits = !1, wQ.MatrixTrackPrecisionChange = !0, wQ.MatrixCurrentType = Float32Array, wQ.MatrixTrackedMatrices = []
  },
  37412: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => sQ,
      d: () => PQ,
      f: () => FQ,
      h: () => wQ,
      j: () => TQ,
      l: () => zQ
    });
    class wQ {}

    function qQ(QQ) {
      QQ.updateFlag = wQ._UpdateFlagSeed++
    }

    function TQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const qQ = QQ.awQ(),
        TQ = WQ.awQ(),
        zQ = qQ[0],
        sQ = qQ[1],
        FQ = qQ[2],
        PQ = qQ[3],
        gQ = qQ[4],
        JQ = qQ[5],
        rQ = qQ[6],
        IQ = qQ[7],
        jQ = qQ[8],
        BQ = qQ[9],
        yQ = qQ[10],
        VQ = qQ[11],
        DQ = qQ[12],
        pQ = qQ[13],
        GQ = qQ[14],
        UQ = qQ[15],
        bQ = TQ[0],
        vQ = TQ[1],
        dQ = TQ[2],
        HQ = TQ[3],
        aQ = TQ[4],
        lQ = TQ[5],
        hQ = TQ[6],
        iQ = TQ[7],
        cQ = TQ[8],
        AQ = TQ[9],
        RQ = TQ[10],
        EQ = TQ[11],
        CQ = TQ[12],
        uQ = TQ[13],
        LQ = TQ[14],
        kQ = TQ[15];
      XQ[wQ] = zQ * bQ + sQ * aQ + FQ * cQ + PQ * CQ, XQ[wQ + 1] = zQ * vQ + sQ * lQ + FQ * AQ + PQ * uQ, XQ[wQ + 2] = zQ * dQ + sQ * hQ + FQ * RQ + PQ * LQ, XQ[wQ + 3] = zQ * HQ + sQ * iQ + FQ * EQ + PQ * kQ, XQ[wQ + 4] = gQ * bQ + JQ * aQ + rQ * cQ + IQ * CQ, XQ[wQ + 5] = gQ * vQ + JQ * lQ + rQ * AQ + IQ * uQ, XQ[wQ + 6] = gQ * dQ + JQ * hQ + rQ * RQ + IQ * LQ, XQ[wQ + 7] = gQ * HQ + JQ * iQ + rQ * EQ + IQ * kQ, XQ[wQ + 8] = jQ * bQ + BQ * aQ + yQ * cQ + VQ * CQ, XQ[wQ + 9] = jQ * vQ + BQ * lQ + yQ * AQ + VQ * uQ, XQ[wQ + 10] = jQ * dQ + BQ * hQ + yQ * RQ + VQ * LQ, XQ[wQ + 11] = jQ * HQ + BQ * iQ + yQ * EQ + VQ * kQ, XQ[wQ + 12] = DQ * bQ + pQ * aQ + GQ * cQ + UQ * CQ, XQ[wQ + 13] = DQ * vQ + pQ * lQ + GQ * AQ + UQ * uQ, XQ[wQ + 14] = DQ * dQ + pQ * hQ + GQ * RQ + UQ * LQ, XQ[wQ + 15] = DQ * HQ + pQ * iQ + GQ * EQ + UQ * kQ
    }

    function zQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      TQ(QQ, WQ, XQ.awQ(), wQ), qQ(XQ)
    }

    function sQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wQ = QQ.awQ();
      WQ[XQ] = wQ[0], WQ[XQ + 1] = wQ[1], WQ[XQ + 2] = wQ[2], WQ[XQ + 3] = wQ[3], WQ[XQ + 4] = wQ[4], WQ[XQ + 5] = wQ[5], WQ[XQ + 6] = wQ[6], WQ[XQ + 7] = wQ[7], WQ[XQ + 8] = wQ[8], WQ[XQ + 9] = wQ[9], WQ[XQ + 10] = wQ[10], WQ[XQ + 11] = wQ[11], WQ[XQ + 12] = wQ[12], WQ[XQ + 13] = wQ[13], WQ[XQ + 14] = wQ[14], WQ[XQ + 15] = wQ[15]
    }

    function FQ(QQ, WQ) {
      const XQ = PQ(QQ, WQ.awQ());
      return XQ && qQ(WQ), XQ
    }

    function PQ(QQ, WQ) {
      const XQ = QQ.awQ(),
        wQ = XQ[0],
        qQ = XQ[1],
        TQ = XQ[2],
        zQ = XQ[3],
        sQ = XQ[4],
        FQ = XQ[5],
        PQ = XQ[6],
        gQ = XQ[7],
        JQ = XQ[8],
        rQ = XQ[9],
        IQ = XQ[10],
        jQ = XQ[11],
        BQ = XQ[12],
        yQ = XQ[13],
        VQ = XQ[14],
        DQ = XQ[15],
        pQ = IQ * DQ - VQ * jQ,
        GQ = rQ * DQ - yQ * jQ,
        UQ = rQ * VQ - yQ * IQ,
        bQ = JQ * DQ - BQ * jQ,
        vQ = JQ * VQ - IQ * BQ,
        dQ = JQ * yQ - BQ * rQ,
        HQ = +(FQ * pQ - PQ * GQ + gQ * UQ),
        aQ = -(sQ * pQ - PQ * bQ + gQ * vQ),
        lQ = +(sQ * GQ - FQ * bQ + gQ * dQ),
        hQ = -(sQ * UQ - FQ * vQ + PQ * dQ),
        iQ = wQ * HQ + qQ * aQ + TQ * lQ + zQ * hQ;
      if (0 === iQ) return !1;
      const cQ = 1 / iQ,
        AQ = PQ * DQ - VQ * gQ,
        RQ = FQ * DQ - yQ * gQ,
        EQ = FQ * VQ - yQ * PQ,
        CQ = sQ * DQ - BQ * gQ,
        uQ = sQ * VQ - BQ * PQ,
        LQ = sQ * yQ - BQ * FQ,
        kQ = PQ * jQ - IQ * gQ,
        fQ = FQ * jQ - rQ * gQ,
        SQ = FQ * IQ - rQ * PQ,
        tQ = sQ * jQ - JQ * gQ,
        oQ = sQ * IQ - JQ * PQ,
        eQ = sQ * rQ - JQ * FQ,
        nQ = -(qQ * pQ - TQ * GQ + zQ * UQ),
        xQ = +(wQ * pQ - TQ * bQ + zQ * vQ),
        YQ = -(wQ * GQ - qQ * bQ + zQ * dQ),
        NQ = +(wQ * UQ - qQ * vQ + TQ * dQ),
        ZQ = +(qQ * AQ - TQ * RQ + zQ * EQ),
        OQ = -(wQ * AQ - TQ * CQ + zQ * uQ),
        KQ = +(wQ * RQ - qQ * CQ + zQ * LQ),
        mQ = -(wQ * EQ - qQ * uQ + TQ * LQ),
        MQ = -(qQ * kQ - TQ * fQ + zQ * SQ),
        QW = +(wQ * kQ - TQ * tQ + zQ * oQ),
        WW = -(wQ * fQ - qQ * tQ + zQ * eQ),
        XW = +(wQ * SQ - qQ * oQ + TQ * eQ);
      return WQ[0] = HQ * cQ, WQ[1] = nQ * cQ, WQ[2] = ZQ * cQ, WQ[3] = MQ * cQ, WQ[4] = aQ * cQ, WQ[5] = xQ * cQ, WQ[6] = OQ * cQ, WQ[7] = QW * cQ, WQ[8] = lQ * cQ, WQ[9] = YQ * cQ, WQ[10] = KQ * cQ, WQ[11] = WW * cQ, WQ[12] = hQ * cQ, WQ[13] = NQ * cQ, WQ[14] = mQ * cQ, WQ[15] = XW * cQ, !0
    }
    wQ._UpdateFlagSeed = 0
  },
  37370: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => BQ,
      h: () => jQ,
      l: () => GQ,
      m: () => VQ,
      q: () => JQ,
      s: () => rQ,
      w: () => IQ
    });
    var wQ = XQ(37374),
      qQ = XQ(37379),
      TQ = XQ(37387),
      zQ = XQ(37392),
      sQ = XQ(37404),
      FQ = XQ(37412),
      PQ = XQ(37418);
    const gQ = QQ => parseInt(QQ.toString().replace(/\W/g, ""));
    class JQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = QQ, this.y = WQ
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let QQ = gQ(this.x);
        return QQ = 397 * QQ ^ gQ(this.y), QQ
      }
      toArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[WQ] = this.x, QQ[WQ + 1] = this.y, this
      }
      gXQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JQ.FromArrayToRef(QQ, WQ, this), this
      }
      awQ() {
        return [this.x, this.y]
      }
      WH(QQ) {
        return this.x = QQ.x, this.y = QQ.y, this
      }
      XQQ(QQ, WQ) {
        return this.x = QQ, this.y = WQ, this
      }
      set(QQ, WQ) {
        return this.XQQ(QQ, WQ)
      }
      h_(QQ) {
        return this.XQQ(QQ, QQ)
      }
      add(QQ) {
        return new JQ(this.x + QQ.x, this.y + QQ.y)
      }
      addToRef(QQ, WQ) {
        return WQ.x = this.x + QQ.x, WQ.y = this.y + QQ.y, WQ
      }
      addInPlace(QQ) {
        return this.x += QQ.x, this.y += QQ.y, this
      }
      addInPlaceFromFloats(QQ, WQ) {
        return this.x += QQ, this.y += WQ, this
      }
      addVector3(QQ) {
        return new JQ(this.x + QQ.x, this.y + QQ.y)
      }
      subtract(QQ) {
        return new JQ(this.x - QQ.x, this.y - QQ.y)
      }
      subtractToRef(QQ, WQ) {
        return WQ.x = this.x - QQ.x, WQ.y = this.y - QQ.y, WQ
      }
      YwQ(QQ) {
        return this.x -= QQ.x, this.y -= QQ.y, this
      }
      multiplyInPlace(QQ) {
        return this.x *= QQ.x, this.y *= QQ.y, this
      }
      multiply(QQ) {
        return new JQ(this.x * QQ.x, this.y * QQ.y)
      }
      multiplyToRef(QQ, WQ) {
        return WQ.x = this.x * QQ.x, WQ.y = this.y * QQ.y, WQ
      }
      multiplyByFloats(QQ, WQ) {
        return new JQ(this.x * QQ, this.y * WQ)
      }
      divide(QQ) {
        return new JQ(this.x / QQ.x, this.y / QQ.y)
      }
      divideToRef(QQ, WQ) {
        return WQ.x = this.x / QQ.x, WQ.y = this.y / QQ.y, WQ
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
      minimizeInPlaceFromFloats(QQ, WQ) {
        return this.x = Math.min(QQ, this.x), this.y = Math.min(WQ, this.y), this
      }
      maximizeInPlaceFromFloats(QQ, WQ) {
        return this.x = Math.max(QQ, this.x), this.y = Math.max(WQ, this.y), this
      }
      subtractFromFloats(QQ, WQ) {
        return new JQ(this.x - QQ, this.y - WQ)
      }
      subtractFromFloatsToRef(QQ, WQ, XQ) {
        return XQ.x = this.x - QQ, XQ.y = this.y - WQ, XQ
      }
      pg() {
        return new JQ(-this.x, -this.y)
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
        return new JQ(this.x * QQ, this.y * QQ)
      }
      scaleToRef(QQ, WQ) {
        return WQ.x = this.x * QQ, WQ.y = this.y * QQ, WQ
      }
      scaleAndAddToRef(QQ, WQ) {
        return WQ.x += this.x * QQ, WQ.y += this.y * QQ, WQ
      }
      equals(QQ) {
        return QQ && this.x === QQ.x && this.y === QQ.y
      }
      equalsWithEpsilon(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wQ.b;
        return QQ && (0, sQ.WithinEpsilon)(this.x, QQ.x, WQ) && (0, sQ.WithinEpsilon)(this.y, QQ.y, WQ)
      }
      PsQ(QQ, WQ) {
        return this.x === QQ && this.y === WQ
      }
      floor() {
        return new JQ(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(QQ) {
        return QQ.x = Math.floor(this.x), QQ.y = Math.floor(this.y), QQ
      }
      fract() {
        return new JQ(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(QQ) {
        return QQ.x = this.x - Math.floor(this.x), QQ.y = this.y - Math.floor(this.y), QQ
      }
      rotate(QQ) {
        return this.rotateToRef(QQ, new JQ)
      }
      rotateToRef(QQ, WQ) {
        const XQ = Math.cos(QQ),
          wQ = Math.sin(QQ);
        return WQ.x = XQ * this.x - wQ * this.y, WQ.y = wQ * this.x + XQ * this.y, WQ
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
        const QQ = new JQ;
        return this.normalizeToRef(QQ), QQ
      }
      normalizeToRef(QQ) {
        const WQ = this.length();
        return 0 === WQ || 1 === WQ ? (QQ.x = this.x, QQ.y = this.y, QQ) : this.scaleToRef(1 / WQ, QQ)
      }
      clone() {
        return new JQ(this.x, this.y)
      }
      dot(QQ) {
        return this.x * QQ.x + this.y * QQ.y
      }
      static Zero() {
        return new JQ(0, 0)
      }
      static One() {
        return new JQ(1, 1)
      }
      static Random() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new JQ((0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ))
      }
      static RandomToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).XQQ((0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ))
      }
      static get ZeroReadOnly() {
        return JQ._ZeroReadOnly
      }
      static FromArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new JQ(QQ[WQ], QQ[WQ + 1])
      }
      static FromArrayToRef(QQ, WQ, XQ) {
        return XQ.x = QQ[WQ], XQ.y = QQ[WQ + 1], XQ
      }
      static FromFloatsToRef(QQ, WQ, XQ) {
        return XQ.XQQ(QQ, WQ), XQ
      }
      static CatmullRom(QQ, WQ, XQ, wQ, qQ) {
        const TQ = qQ * qQ,
          zQ = qQ * TQ,
          sQ = .5 * (2 * WQ.x + (-QQ.x + XQ.x) * qQ + (2 * QQ.x - 5 * WQ.x + 4 * XQ.x - wQ.x) * TQ + (-QQ.x + 3 * WQ.x - 3 * XQ.x + wQ.x) * zQ),
          FQ = .5 * (2 * WQ.y + (-QQ.y + XQ.y) * qQ + (2 * QQ.y - 5 * WQ.y + 4 * XQ.y - wQ.y) * TQ + (-QQ.y + 3 * WQ.y - 3 * XQ.y + wQ.y) * zQ);
        return new JQ(sQ, FQ)
      }
      static ClampToRef(QQ, WQ, XQ, wQ) {
        return wQ.x = (0, sQ.Clamp)(QQ.x, WQ.x, XQ.x), wQ.y = (0, sQ.Clamp)(QQ.y, WQ.y, XQ.y), wQ
      }
      static Clamp(QQ, WQ, XQ) {
        const wQ = (0, sQ.Clamp)(QQ.x, WQ.x, XQ.x),
          qQ = (0, sQ.Clamp)(QQ.y, WQ.y, XQ.y);
        return new JQ(wQ, qQ)
      }
      static Hermite(QQ, WQ, XQ, wQ, qQ) {
        const TQ = qQ * qQ,
          zQ = qQ * TQ,
          sQ = 2 * zQ - 3 * TQ + 1,
          FQ = -2 * zQ + 3 * TQ,
          PQ = zQ - 2 * TQ + qQ,
          gQ = zQ - TQ,
          rQ = QQ.x * sQ + XQ.x * FQ + WQ.x * PQ + wQ.x * gQ,
          IQ = QQ.y * sQ + XQ.y * FQ + WQ.y * PQ + wQ.y * gQ;
        return new JQ(rQ, IQ)
      }
      static Hermite1stDerivative(QQ, WQ, XQ, wQ, qQ) {
        return this.Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, new JQ)
      }
      static Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = qQ * qQ;
        return TQ.x = 6 * (zQ - qQ) * QQ.x + (3 * zQ - 4 * qQ + 1) * WQ.x + 6 * (-zQ + qQ) * XQ.x + (3 * zQ - 2 * qQ) * wQ.x, TQ.y = 6 * (zQ - qQ) * QQ.y + (3 * zQ - 4 * qQ + 1) * WQ.y + 6 * (-zQ + qQ) * XQ.y + (3 * zQ - 2 * qQ) * wQ.y, TQ
      }
      static Lerp(QQ, WQ, XQ) {
        return JQ.LerpToRef(QQ, WQ, XQ, new JQ)
      }
      static LerpToRef(QQ, WQ, XQ, wQ) {
        return wQ.x = QQ.x + (WQ.x - QQ.x) * XQ, wQ.y = QQ.y + (WQ.y - QQ.y) * XQ, wQ
      }
      static Dot(QQ, WQ) {
        return QQ.x * WQ.x + QQ.y * WQ.y
      }
      static Normalize(QQ) {
        return JQ.NormalizeToRef(QQ, new JQ)
      }
      static NormalizeToRef(QQ, WQ) {
        return QQ.normalizeToRef(WQ), WQ
      }
      static Minimize(QQ, WQ) {
        const XQ = QQ.x < WQ.x ? QQ.x : WQ.x,
          wQ = QQ.y < WQ.y ? QQ.y : WQ.y;
        return new JQ(XQ, wQ)
      }
      static Maximize(QQ, WQ) {
        const XQ = QQ.x > WQ.x ? QQ.x : WQ.x,
          wQ = QQ.y > WQ.y ? QQ.y : WQ.y;
        return new JQ(XQ, wQ)
      }
      static Transform(QQ, WQ) {
        return JQ.TransformToRef(QQ, WQ, new JQ)
      }
      static TransformToRef(QQ, WQ, XQ) {
        const wQ = WQ.m,
          qQ = QQ.x * wQ[0] + QQ.y * wQ[4] + wQ[12],
          TQ = QQ.x * wQ[1] + QQ.y * wQ[5] + wQ[13];
        return XQ.x = qQ, XQ.y = TQ, XQ
      }
      static PointInTriangle(QQ, WQ, XQ, wQ) {
        const qQ = .5 * (-XQ.y * wQ.x + WQ.y * (-XQ.x + wQ.x) + WQ.x * (XQ.y - wQ.y) + XQ.x * wQ.y),
          TQ = qQ < 0 ? -1 : 1,
          zQ = (WQ.y * wQ.x - WQ.x * wQ.y + (wQ.y - WQ.y) * QQ.x + (WQ.x - wQ.x) * QQ.y) * TQ,
          sQ = (WQ.x * XQ.y - WQ.y * XQ.x + (WQ.y - XQ.y) * QQ.x + (XQ.x - WQ.x) * QQ.y) * TQ;
        return zQ > 0 && sQ > 0 && zQ + sQ < 2 * qQ * TQ
      }
      static Distance(QQ, WQ) {
        return Math.sqrt(JQ.DistanceSquared(QQ, WQ))
      }
      static DistanceSquared(QQ, WQ) {
        const XQ = QQ.x - WQ.x,
          wQ = QQ.y - WQ.y;
        return XQ * XQ + wQ * wQ
      }
      static Center(QQ, WQ) {
        return JQ.CenterToRef(QQ, WQ, new JQ)
      }
      static CenterToRef(QQ, WQ, XQ) {
        return XQ.XQQ((QQ.x + WQ.x) / 2, (QQ.y + WQ.y) / 2)
      }
      static DistanceOfPointFromSegment(QQ, WQ, XQ) {
        const wQ = JQ.DistanceSquared(WQ, XQ);
        if (0 === wQ) return JQ.Distance(QQ, WQ);
        const qQ = XQ.subtract(WQ),
          TQ = Math.max(0, Math.min(1, JQ.Dot(QQ.subtract(WQ), qQ) / wQ)),
          zQ = WQ.add(qQ.multiplyByFloats(TQ, TQ));
        return JQ.Distance(QQ, zQ)
      }
    }
    JQ._V8PerformanceHack = new JQ(.5, .5), JQ._ZeroReadOnly = JQ.Zero();
    class rQ {
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
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = QQ, this._y = WQ, this._z = XQ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "vj"
      }
      getHashCode() {
        let QQ = gQ(this._x);
        return QQ = 397 * QQ ^ gQ(this._y), QQ = 397 * QQ ^ gQ(this._z), QQ
      }
      awQ() {
        return [this._x, this._y, this._z]
      }
      toArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[WQ] = this._x, QQ[WQ + 1] = this._y, QQ[WQ + 2] = this._z, this
      }
      gXQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rQ.FromArrayToRef(QQ, WQ, this), this
      }
      toQuaternion() {
        return jQ.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(QQ) {
        return this._x += QQ._x, this._y += QQ._y, this._z += QQ._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(QQ, WQ, XQ) {
        return this._x += QQ, this._y += WQ, this._z += XQ, this._isDirty = !0, this
      }
      add(QQ) {
        return new rQ(this._x + QQ._x, this._y + QQ._y, this._z + QQ._z)
      }
      addToRef(QQ, WQ) {
        return WQ._x = this._x + QQ._x, WQ._y = this._y + QQ._y, WQ._z = this._z + QQ._z, WQ._isDirty = !0, WQ
      }
      YwQ(QQ) {
        return this._x -= QQ._x, this._y -= QQ._y, this._z -= QQ._z, this._isDirty = !0, this
      }
      subtract(QQ) {
        return new rQ(this._x - QQ._x, this._y - QQ._y, this._z - QQ._z)
      }
      subtractToRef(QQ, WQ) {
        return this.subtractFromFloatsToRef(QQ._x, QQ._y, QQ._z, WQ)
      }
      subtractFromFloats(QQ, WQ, XQ) {
        return new rQ(this._x - QQ, this._y - WQ, this._z - XQ)
      }
      subtractFromFloatsToRef(QQ, WQ, XQ, wQ) {
        return wQ._x = this._x - QQ, wQ._y = this._y - WQ, wQ._z = this._z - XQ, wQ._isDirty = !0, wQ
      }
      pg() {
        return new rQ(-this._x, -this._y, -this._z)
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
        return new rQ(this._x * QQ, this._y * QQ, this._z * QQ)
      }
      scaleToRef(QQ, WQ) {
        return WQ._x = this._x * QQ, WQ._y = this._y * QQ, WQ._z = this._z * QQ, WQ._isDirty = !0, WQ
      }
      getNormalToRef(QQ) {
        const WQ = this.length();
        let XQ = Math.acos(this._y / WQ);
        const wQ = Math.atan2(this._z, this._x);
        XQ > Math.PI / 2 ? XQ -= Math.PI / 2 : XQ += Math.PI / 2;
        const qQ = WQ * Math.sin(XQ) * Math.cos(wQ),
          TQ = WQ * Math.cos(XQ),
          zQ = WQ * Math.sin(XQ) * Math.sin(wQ);
        return QQ.set(qQ, TQ, zQ), QQ
      }
      applyRotationQuaternionToRef(QQ, WQ) {
        const XQ = this._x,
          wQ = this._y,
          qQ = this._z,
          TQ = QQ._x,
          zQ = QQ._y,
          sQ = QQ._z,
          FQ = QQ._w,
          PQ = 2 * (zQ * qQ - sQ * wQ),
          gQ = 2 * (sQ * XQ - TQ * qQ),
          JQ = 2 * (TQ * wQ - zQ * XQ);
        return WQ._x = XQ + FQ * PQ + zQ * JQ - sQ * gQ, WQ._y = wQ + FQ * gQ + sQ * PQ - TQ * JQ, WQ._z = qQ + FQ * JQ + TQ * gQ - zQ * PQ, WQ._isDirty = !0, WQ
      }
      applyRotationQuaternionInPlace(QQ) {
        return this.applyRotationQuaternionToRef(QQ, this)
      }
      applyRotationQuaternion(QQ) {
        return this.applyRotationQuaternionToRef(QQ, new rQ)
      }
      scaleAndAddToRef(QQ, WQ) {
        return WQ._x += this._x * QQ, WQ._y += this._y * QQ, WQ._z += this._z * QQ, WQ._isDirty = !0, WQ
      }
      projectOnPlane(QQ, WQ) {
        return this.projectOnPlaneToRef(QQ, WQ, new rQ)
      }
      projectOnPlaneToRef(QQ, WQ, XQ) {
        const wQ = QQ.normal,
          qQ = QQ.d,
          TQ = yQ.vj[0];
        this.subtractToRef(WQ, TQ), TQ.normalize();
        const zQ = rQ.Dot(TQ, wQ);
        if (Math.abs(zQ) < 1e-10) XQ.h_(1 / 0);
        else {
          const QQ = -(rQ.Dot(WQ, wQ) + qQ) / zQ,
            sQ = TQ.scaleInPlace(QQ);
          WQ.addToRef(sQ, XQ)
        }
        return XQ
      }
      equals(QQ) {
        return QQ && this._x === QQ._x && this._y === QQ._y && this._z === QQ._z
      }
      equalsWithEpsilon(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wQ.b;
        return QQ && (0, sQ.WithinEpsilon)(this._x, QQ._x, WQ) && (0, sQ.WithinEpsilon)(this._y, QQ._y, WQ) && (0, sQ.WithinEpsilon)(this._z, QQ._z, WQ)
      }
      PsQ(QQ, WQ, XQ) {
        return this._x === QQ && this._y === WQ && this._z === XQ
      }
      multiplyInPlace(QQ) {
        return this._x *= QQ._x, this._y *= QQ._y, this._z *= QQ._z, this._isDirty = !0, this
      }
      multiply(QQ) {
        return this.multiplyByFloats(QQ._x, QQ._y, QQ._z)
      }
      multiplyToRef(QQ, WQ) {
        return WQ._x = this._x * QQ._x, WQ._y = this._y * QQ._y, WQ._z = this._z * QQ._z, WQ._isDirty = !0, WQ
      }
      multiplyByFloats(QQ, WQ, XQ) {
        return new rQ(this._x * QQ, this._y * WQ, this._z * XQ)
      }
      divide(QQ) {
        return new rQ(this._x / QQ._x, this._y / QQ._y, this._z / QQ._z)
      }
      divideToRef(QQ, WQ) {
        return WQ._x = this._x / QQ._x, WQ._y = this._y / QQ._y, WQ._z = this._z / QQ._z, WQ._isDirty = !0, WQ
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
      minimizeInPlaceFromFloats(QQ, WQ, XQ) {
        return QQ < this._x && (this.x = QQ), WQ < this._y && (this.y = WQ), XQ < this._z && (this.z = XQ), this
      }
      maximizeInPlaceFromFloats(QQ, WQ, XQ) {
        return QQ > this._x && (this.x = QQ), WQ > this._y && (this.y = WQ), XQ > this._z && (this.z = XQ), this
      }
      isNonUniformWithinEpsilon(QQ) {
        const WQ = Math.abs(this._x),
          XQ = Math.abs(this._y);
        if (!(0, sQ.WithinEpsilon)(WQ, XQ, QQ)) return !0;
        const wQ = Math.abs(this._z);
        return !(0, sQ.WithinEpsilon)(WQ, wQ, QQ) || !(0, sQ.WithinEpsilon)(XQ, wQ, QQ)
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
        return new rQ(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(QQ) {
        return QQ._x = this._x - Math.floor(this._x), QQ._y = this._y - Math.floor(this._y), QQ._z = this._z - Math.floor(this._z), QQ._isDirty = !0, QQ
      }
      fract() {
        return new rQ(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const WQ = yQ.vj[0].WH(this);
        return this.x = WQ[QQ[0]], this.y = WQ[QQ[1]], this.z = WQ[QQ[2]], this
      }
      rotateByQuaternionToRef(QQ, WQ) {
        return QQ.toRotationMatrix(yQ.Matrix[0]), rQ.TransformCoordinatesToRef(this, yQ.Matrix[0], WQ), WQ
      }
      rotateByQuaternionAroundPointToRef(QQ, WQ, XQ) {
        return this.subtractToRef(WQ, yQ.vj[0]), yQ.vj[0].rotateByQuaternionToRef(QQ, yQ.vj[0]), WQ.addToRef(yQ.vj[0], XQ), XQ
      }
      cross(QQ) {
        return rQ.CrossToRef(this, QQ, new rQ)
      }
      normalizeFromLength(QQ) {
        return 0 === QQ || 1 === QQ ? this : this.scaleInPlace(1 / QQ)
      }
      normalizeToNew() {
        return this.normalizeToRef(new rQ)
      }
      normalizeToRef(QQ) {
        const WQ = this.length();
        return 0 === WQ || 1 === WQ ? (QQ._x = this._x, QQ._y = this._y, QQ._z = this._z, QQ._isDirty = !0, QQ) : this.scaleToRef(1 / WQ, QQ)
      }
      clone() {
        return new rQ(this._x, this._y, this._z)
      }
      WH(QQ) {
        return this.XQQ(QQ._x, QQ._y, QQ._z)
      }
      XQQ(QQ, WQ, XQ) {
        return this._x = QQ, this._y = WQ, this._z = XQ, this._isDirty = !0, this
      }
      set(QQ, WQ, XQ) {
        return this.XQQ(QQ, WQ, XQ)
      }
      h_(QQ) {
        return this._x = this._y = this._z = QQ, this._isDirty = !0, this
      }
      static GetClipFactor(QQ, WQ, XQ, wQ) {
        const qQ = rQ.Dot(QQ, XQ);
        return (qQ - wQ) / (qQ - rQ.Dot(WQ, XQ))
      }
      static GetAngleBetweenVectors(QQ, WQ, XQ) {
        const wQ = QQ.normalizeToRef(yQ.vj[1]),
          qQ = WQ.normalizeToRef(yQ.vj[2]);
        let TQ = rQ.Dot(wQ, qQ);
        TQ = (0, sQ.Clamp)(TQ, -1, 1);
        const zQ = Math.acos(TQ),
          FQ = yQ.vj[3];
        return rQ.CrossToRef(wQ, qQ, FQ), rQ.Dot(FQ, XQ) > 0 ? isNaN(zQ) ? 0 : zQ : isNaN(zQ) ? -Math.PI : -Math.acos(TQ)
      }
      static GetAngleBetweenVectorsOnPlane(QQ, WQ, XQ) {
        yQ.vj[0].WH(QQ);
        const wQ = yQ.vj[0];
        yQ.vj[1].WH(WQ);
        const qQ = yQ.vj[1];
        yQ.vj[2].WH(XQ);
        const TQ = yQ.vj[2],
          zQ = yQ.vj[3],
          FQ = yQ.vj[4];
        wQ.normalize(), qQ.normalize(), TQ.normalize(), rQ.CrossToRef(TQ, wQ, zQ), rQ.CrossToRef(zQ, TQ, FQ);
        const PQ = Math.atan2(rQ.Dot(qQ, zQ), rQ.Dot(qQ, FQ));
        return (0, sQ.NormalizeRadians)(PQ)
      }
      static PitchYawRollToMoveBetweenPointsToRef(QQ, WQ, XQ) {
        const wQ = VQ.vj[0];
        return WQ.subtractToRef(QQ, wQ), XQ._y = Math.atan2(wQ.x, wQ.z) || 0, XQ._x = Math.atan2(Math.sqrt(wQ.x ** 2 + wQ.z ** 2), wQ.y) || 0, XQ._z = 0, XQ._isDirty = !0, XQ
      }
      static PitchYawRollToMoveBetweenPoints(QQ, WQ) {
        const XQ = rQ.Zero();
        return rQ.PitchYawRollToMoveBetweenPointsToRef(QQ, WQ, XQ)
      }
      static SlerpToRef(QQ, WQ, XQ, qQ) {
        XQ = (0, sQ.Clamp)(XQ, 0, 1);
        const TQ = yQ.vj[0],
          zQ = yQ.vj[1];
        TQ.WH(QQ);
        const FQ = TQ.length();
        TQ.normalizeFromLength(FQ), zQ.WH(WQ);
        const PQ = zQ.length();
        zQ.normalizeFromLength(PQ);
        const gQ = rQ.Dot(TQ, zQ);
        let JQ, IQ;
        if (gQ < 1 - wQ.b) {
          const QQ = Math.acos(gQ),
            WQ = 1 / Math.sin(QQ);
          JQ = Math.sin((1 - XQ) * QQ) * WQ, IQ = Math.sin(XQ * QQ) * WQ
        } else JQ = 1 - XQ, IQ = XQ;
        return TQ.scaleInPlace(JQ), zQ.scaleInPlace(IQ), qQ.WH(TQ).addInPlace(zQ), qQ.scaleInPlace((0, sQ.Lerp)(FQ, PQ, XQ)), qQ
      }
      static SmoothToRef(QQ, WQ, XQ, wQ, qQ) {
        return rQ.SlerpToRef(QQ, WQ, 0 === wQ ? 1 : XQ / wQ, qQ), qQ
      }
      static FromArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new rQ(QQ[WQ], QQ[WQ + 1], QQ[WQ + 2])
      }
      static FromFloatArray(QQ, WQ) {
        return rQ.FromArray(QQ, WQ)
      }
      static FromArrayToRef(QQ, WQ, XQ) {
        return XQ._x = QQ[WQ], XQ._y = QQ[WQ + 1], XQ._z = QQ[WQ + 2], XQ._isDirty = !0, XQ
      }
      static FromFloatArrayToRef(QQ, WQ, XQ) {
        return rQ.FromArrayToRef(QQ, WQ, XQ)
      }
      static FromFloatsToRef(QQ, WQ, XQ, wQ) {
        return wQ.XQQ(QQ, WQ, XQ), wQ
      }
      static Zero() {
        return new rQ(0, 0, 0)
      }
      static One() {
        return new rQ(1, 1, 1)
      }
      static Up() {
        return new rQ(0, 1, 0)
      }
      static get UpReadOnly() {
        return rQ._UpReadOnly
      }
      static get DownReadOnly() {
        return rQ._DownReadOnly
      }
      static get RightReadOnly() {
        return rQ._RightReadOnly
      }
      static get LeftReadOnly() {
        return rQ._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return rQ._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return rQ._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return rQ._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return rQ._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return rQ._ZeroReadOnly
      }
      static get OneReadOnly() {
        return rQ._OneReadOnly
      }
      static Down() {
        return new rQ(0, -1, 0)
      }
      static Forward() {
        return new rQ(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new rQ(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new rQ(1, 0, 0)
      }
      static Left() {
        return new rQ(-1, 0, 0)
      }
      static Random() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new rQ((0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ))
      }
      static RandomToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).XQQ((0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ))
      }
      static TransformCoordinates(QQ, WQ) {
        const XQ = rQ.Zero();
        return rQ.TransformCoordinatesToRef(QQ, WQ, XQ), XQ
      }
      static TransformCoordinatesToRef(QQ, WQ, XQ) {
        return rQ.TransformCoordinatesFromFloatsToRef(QQ._x, QQ._y, QQ._z, WQ, XQ), XQ
      }
      static TransformCoordinatesFromFloatsToRef(QQ, WQ, XQ, wQ, qQ) {
        const TQ = wQ.m,
          zQ = QQ * TQ[0] + WQ * TQ[4] + XQ * TQ[8] + TQ[12],
          sQ = QQ * TQ[1] + WQ * TQ[5] + XQ * TQ[9] + TQ[13],
          FQ = QQ * TQ[2] + WQ * TQ[6] + XQ * TQ[10] + TQ[14],
          PQ = 1 / (QQ * TQ[3] + WQ * TQ[7] + XQ * TQ[11] + TQ[15]);
        return qQ._x = zQ * PQ, qQ._y = sQ * PQ, qQ._z = FQ * PQ, qQ._isDirty = !0, qQ
      }
      static TransformNormal(QQ, WQ) {
        const XQ = rQ.Zero();
        return rQ.TransformNormalToRef(QQ, WQ, XQ), XQ
      }
      static TransformNormalToRef(QQ, WQ, XQ) {
        return this.TransformNormalFromFloatsToRef(QQ._x, QQ._y, QQ._z, WQ, XQ), XQ
      }
      static TransformNormalFromFloatsToRef(QQ, WQ, XQ, wQ, qQ) {
        const TQ = wQ.m;
        return qQ._x = QQ * TQ[0] + WQ * TQ[4] + XQ * TQ[8], qQ._y = QQ * TQ[1] + WQ * TQ[5] + XQ * TQ[9], qQ._z = QQ * TQ[2] + WQ * TQ[6] + XQ * TQ[10], qQ._isDirty = !0, qQ
      }
      static CatmullRom(QQ, WQ, XQ, wQ, qQ) {
        const TQ = qQ * qQ,
          zQ = qQ * TQ,
          sQ = .5 * (2 * WQ._x + (-QQ._x + XQ._x) * qQ + (2 * QQ._x - 5 * WQ._x + 4 * XQ._x - wQ._x) * TQ + (-QQ._x + 3 * WQ._x - 3 * XQ._x + wQ._x) * zQ),
          FQ = .5 * (2 * WQ._y + (-QQ._y + XQ._y) * qQ + (2 * QQ._y - 5 * WQ._y + 4 * XQ._y - wQ._y) * TQ + (-QQ._y + 3 * WQ._y - 3 * XQ._y + wQ._y) * zQ),
          PQ = .5 * (2 * WQ._z + (-QQ._z + XQ._z) * qQ + (2 * QQ._z - 5 * WQ._z + 4 * XQ._z - wQ._z) * TQ + (-QQ._z + 3 * WQ._z - 3 * XQ._z + wQ._z) * zQ);
        return new rQ(sQ, FQ, PQ)
      }
      static Clamp(QQ, WQ, XQ) {
        const wQ = new rQ;
        return rQ.ClampToRef(QQ, WQ, XQ, wQ), wQ
      }
      static ClampToRef(QQ, WQ, XQ, wQ) {
        let qQ = QQ._x;
        qQ = qQ > XQ._x ? XQ._x : qQ, qQ = qQ < WQ._x ? WQ._x : qQ;
        let TQ = QQ._y;
        TQ = TQ > XQ._y ? XQ._y : TQ, TQ = TQ < WQ._y ? WQ._y : TQ;
        let zQ = QQ._z;
        return zQ = zQ > XQ._z ? XQ._z : zQ, zQ = zQ < WQ._z ? WQ._z : zQ, wQ.XQQ(qQ, TQ, zQ), wQ
      }
      static CheckExtends(QQ, WQ, XQ) {
        WQ.minimizeInPlace(QQ), XQ.maximizeInPlace(QQ)
      }
      static Hermite(QQ, WQ, XQ, wQ, qQ) {
        const TQ = qQ * qQ,
          zQ = qQ * TQ,
          sQ = 2 * zQ - 3 * TQ + 1,
          FQ = -2 * zQ + 3 * TQ,
          PQ = zQ - 2 * TQ + qQ,
          gQ = zQ - TQ,
          JQ = QQ._x * sQ + XQ._x * FQ + WQ._x * PQ + wQ._x * gQ,
          IQ = QQ._y * sQ + XQ._y * FQ + WQ._y * PQ + wQ._y * gQ,
          jQ = QQ._z * sQ + XQ._z * FQ + WQ._z * PQ + wQ._z * gQ;
        return new rQ(JQ, IQ, jQ)
      }
      static Hermite1stDerivative(QQ, WQ, XQ, wQ, qQ) {
        const TQ = new rQ;
        return this.Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ), TQ
      }
      static Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = qQ * qQ;
        return TQ._x = 6 * (zQ - qQ) * QQ._x + (3 * zQ - 4 * qQ + 1) * WQ._x + 6 * (-zQ + qQ) * XQ._x + (3 * zQ - 2 * qQ) * wQ._x, TQ._y = 6 * (zQ - qQ) * QQ._y + (3 * zQ - 4 * qQ + 1) * WQ._y + 6 * (-zQ + qQ) * XQ._y + (3 * zQ - 2 * qQ) * wQ._y, TQ._z = 6 * (zQ - qQ) * QQ._z + (3 * zQ - 4 * qQ + 1) * WQ._z + 6 * (-zQ + qQ) * XQ._z + (3 * zQ - 2 * qQ) * wQ._z, TQ._isDirty = !0, TQ
      }
      static Lerp(QQ, WQ, XQ) {
        const wQ = new rQ(0, 0, 0);
        return rQ.LerpToRef(QQ, WQ, XQ, wQ), wQ
      }
      static LerpToRef(QQ, WQ, XQ, wQ) {
        return wQ._x = QQ._x + (WQ._x - QQ._x) * XQ, wQ._y = QQ._y + (WQ._y - QQ._y) * XQ, wQ._z = QQ._z + (WQ._z - QQ._z) * XQ, wQ._isDirty = !0, wQ
      }
      static Dot(QQ, WQ) {
        return QQ._x * WQ._x + QQ._y * WQ._y + QQ._z * WQ._z
      }
      dot(QQ) {
        return this._x * QQ._x + this._y * QQ._y + this._z * QQ._z
      }
      static Cross(QQ, WQ) {
        const XQ = new rQ;
        return rQ.CrossToRef(QQ, WQ, XQ), XQ
      }
      static CrossToRef(QQ, WQ, XQ) {
        const wQ = QQ._y * WQ._z - QQ._z * WQ._y,
          qQ = QQ._z * WQ._x - QQ._x * WQ._z,
          TQ = QQ._x * WQ._y - QQ._y * WQ._x;
        return XQ.XQQ(wQ, qQ, TQ), XQ
      }
      static Normalize(QQ) {
        const WQ = rQ.Zero();
        return rQ.NormalizeToRef(QQ, WQ), WQ
      }
      static NormalizeToRef(QQ, WQ) {
        return QQ.normalizeToRef(WQ), WQ
      }
      static Project(QQ, WQ, XQ, wQ) {
        const qQ = new rQ;
        return rQ.ProjectToRef(QQ, WQ, XQ, wQ, qQ), qQ
      }
      static ProjectToRef(QQ, WQ, XQ, wQ, qQ) {
        const TQ = wQ.width,
          sQ = wQ.height,
          FQ = wQ.x,
          PQ = wQ.y,
          gQ = yQ.Matrix[1],
          JQ = zQ.d.LastCreatedEngine?.isNDCHalfZRange,
          IQ = JQ ? 1 : .5,
          jQ = JQ ? 0 : .5;
        BQ.FromValuesToRef(TQ / 2, 0, 0, 0, 0, -sQ / 2, 0, 0, 0, 0, IQ, 0, FQ + TQ / 2, sQ / 2 + PQ, jQ, 1, gQ);
        const VQ = yQ.Matrix[0];
        return WQ.multiplyToRef(XQ, VQ), VQ.multiplyToRef(gQ, VQ), rQ.TransformCoordinatesToRef(QQ, VQ, qQ), qQ
      }
      static Reflect(QQ, WQ) {
        return this.ReflectToRef(QQ, WQ, new rQ)
      }
      static ReflectToRef(QQ, WQ, XQ) {
        const wQ = VQ.vj[0];
        return wQ.WH(WQ).scaleInPlace(2 * rQ.Dot(QQ, WQ)), XQ.WH(QQ).YwQ(wQ)
      }
      static UnprojectFromTransform(QQ, WQ, XQ, wQ, qQ) {
        return this.Unproject(QQ, WQ, XQ, wQ, qQ, BQ.IdentityReadOnly)
      }
      static Unproject(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = new rQ;
        return rQ.UnprojectToRef(QQ, WQ, XQ, wQ, qQ, TQ, zQ), zQ
      }
      static UnprojectToRef(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        return rQ.UnprojectFloatsToRef(QQ._x, QQ._y, QQ._z, WQ, XQ, wQ, qQ, TQ, zQ), zQ
      }
      static UnprojectFloatsToRef(QQ, WQ, XQ, wQ, qQ, TQ, sQ, FQ, PQ) {
        const gQ = yQ.Matrix[0];
        TQ.multiplyToRef(sQ, gQ), gQ.multiplyToRef(FQ, gQ), gQ.invert();
        const JQ = yQ.vj[0];
        return JQ.x = QQ / wQ * 2 - 1, JQ.y = -(WQ / qQ * 2 - 1), zQ.d.LastCreatedEngine?.isNDCHalfZRange ? JQ.z = XQ : JQ.z = 2 * XQ - 1, rQ.TransformCoordinatesToRef(JQ, gQ, PQ), PQ
      }
      static Minimize(QQ, WQ) {
        const XQ = new rQ;
        return XQ.WH(QQ), XQ.minimizeInPlace(WQ), XQ
      }
      static Maximize(QQ, WQ) {
        const XQ = new rQ;
        return XQ.WH(QQ), XQ.maximizeInPlace(WQ), XQ
      }
      static Distance(QQ, WQ) {
        return Math.sqrt(rQ.DistanceSquared(QQ, WQ))
      }
      static DistanceSquared(QQ, WQ) {
        const XQ = QQ._x - WQ._x,
          wQ = QQ._y - WQ._y,
          qQ = QQ._z - WQ._z;
        return XQ * XQ + wQ * wQ + qQ * qQ
      }
      static ProjectOnTriangleToRef(QQ, WQ, XQ, qQ, TQ) {
        const zQ = yQ.vj[0],
          FQ = yQ.vj[1],
          PQ = yQ.vj[2],
          gQ = yQ.vj[3],
          JQ = yQ.vj[4];
        XQ.subtractToRef(WQ, zQ), qQ.subtractToRef(WQ, FQ), qQ.subtractToRef(XQ, PQ);
        const IQ = zQ.length(),
          jQ = FQ.length(),
          BQ = PQ.length();
        if (IQ < wQ.b || jQ < wQ.b || BQ < wQ.b) return TQ.WH(WQ), rQ.Distance(QQ, WQ);
        QQ.subtractToRef(WQ, JQ), rQ.CrossToRef(zQ, FQ, gQ);
        const VQ = gQ.length();
        if (VQ < wQ.b) return TQ.WH(WQ), rQ.Distance(QQ, WQ);
        gQ.normalizeFromLength(VQ);
        let DQ = JQ.length();
        if (DQ < wQ.b) return TQ.WH(WQ), 0;
        JQ.normalizeFromLength(DQ);
        const pQ = rQ.Dot(gQ, JQ),
          GQ = yQ.vj[5],
          UQ = yQ.vj[6];
        GQ.WH(gQ).scaleInPlace(-DQ * pQ), UQ.WH(QQ).addInPlace(GQ);
        const bQ = yQ.vj[4],
          vQ = yQ.vj[5],
          dQ = yQ.vj[7],
          HQ = yQ.vj[8];
        bQ.WH(zQ).scaleInPlace(1 / IQ), HQ.WH(FQ).scaleInPlace(1 / jQ), bQ.addInPlace(HQ).scaleInPlace(-1), vQ.WH(zQ).scaleInPlace(-1 / IQ), HQ.WH(PQ).scaleInPlace(1 / BQ), vQ.addInPlace(HQ).scaleInPlace(-1), dQ.WH(PQ).scaleInPlace(-1 / BQ), HQ.WH(FQ).scaleInPlace(-1 / jQ), dQ.addInPlace(HQ).scaleInPlace(-1);
        const aQ = yQ.vj[9];
        let lQ;
        aQ.WH(UQ).YwQ(WQ), rQ.CrossToRef(bQ, aQ, HQ), lQ = rQ.Dot(HQ, gQ);
        const hQ = lQ;
        aQ.WH(UQ).YwQ(XQ), rQ.CrossToRef(vQ, aQ, HQ), lQ = rQ.Dot(HQ, gQ);
        const iQ = lQ;
        aQ.WH(UQ).YwQ(qQ), rQ.CrossToRef(dQ, aQ, HQ), lQ = rQ.Dot(HQ, gQ);
        const cQ = lQ,
          AQ = yQ.vj[10];
        let RQ, EQ;
        hQ > 0 && iQ < 0 ? (AQ.WH(zQ), RQ = WQ, EQ = XQ) : iQ > 0 && cQ < 0 ? (AQ.WH(PQ), RQ = XQ, EQ = qQ) : (AQ.WH(FQ).scaleInPlace(-1), RQ = qQ, EQ = WQ);
        const CQ = yQ.vj[9],
          uQ = yQ.vj[4];
        RQ.subtractToRef(UQ, HQ), EQ.subtractToRef(UQ, CQ), rQ.CrossToRef(HQ, CQ, uQ);
        if (!(rQ.Dot(uQ, gQ) < 0)) return TQ.WH(UQ), Math.abs(DQ * pQ);
        const LQ = yQ.vj[5];
        rQ.CrossToRef(AQ, uQ, LQ), LQ.normalize();
        const kQ = yQ.vj[9];
        kQ.WH(RQ).YwQ(UQ);
        const fQ = kQ.length();
        if (fQ < wQ.b) return TQ.WH(RQ), rQ.Distance(QQ, RQ);
        kQ.normalizeFromLength(fQ);
        const SQ = rQ.Dot(LQ, kQ),
          tQ = yQ.vj[7];
        tQ.WH(UQ).addInPlace(LQ.scaleInPlace(fQ * SQ)), HQ.WH(tQ).YwQ(RQ), DQ = AQ.length(), AQ.normalizeFromLength(DQ);
        let oQ = rQ.Dot(HQ, AQ) / Math.max(DQ, wQ.b);
        return oQ = (0, sQ.Clamp)(oQ, 0, 1), tQ.WH(RQ).addInPlace(AQ.scaleInPlace(oQ * DQ)), TQ.WH(tQ), rQ.Distance(QQ, tQ)
      }
      static Center(QQ, WQ) {
        return rQ.CenterToRef(QQ, WQ, rQ.Zero())
      }
      static CenterToRef(QQ, WQ, XQ) {
        return XQ.XQQ((QQ._x + WQ._x) / 2, (QQ._y + WQ._y) / 2, (QQ._z + WQ._z) / 2)
      }
      static RotationFromAxis(QQ, WQ, XQ) {
        const wQ = new rQ;
        return rQ.RotationFromAxisToRef(QQ, WQ, XQ, wQ), wQ
      }
      static RotationFromAxisToRef(QQ, WQ, XQ, wQ) {
        const qQ = yQ.Quaternion[0];
        return jQ.RotationQuaternionFromAxisToRef(QQ, WQ, XQ, qQ), qQ.toEulerAnglesToRef(wQ), wQ
      }
    }
    rQ._V8PerformanceHack = new rQ(.5, .5, .5), rQ._UpReadOnly = rQ.Up(), rQ._DownReadOnly = rQ.Down(), rQ._LeftHandedForwardReadOnly = rQ.Forward(!1), rQ._RightHandedForwardReadOnly = rQ.Forward(!0), rQ._LeftHandedBackwardReadOnly = rQ.Backward(!1), rQ._RightHandedBackwardReadOnly = rQ.Backward(!0), rQ._RightReadOnly = rQ.Right(), rQ._LeftReadOnly = rQ.Left(), rQ._ZeroReadOnly = rQ.Zero(), rQ._OneReadOnly = rQ.One();
    class IQ {
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
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = QQ, this._y = WQ, this._z = XQ, this._w = wQ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let QQ = gQ(this._x);
        return QQ = 397 * QQ ^ gQ(this._y), QQ = 397 * QQ ^ gQ(this._z), QQ = 397 * QQ ^ gQ(this._w), QQ
      }
      awQ() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(QQ, WQ) {
        return void 0 === WQ && (WQ = 0), QQ[WQ] = this._x, QQ[WQ + 1] = this._y, QQ[WQ + 2] = this._z, QQ[WQ + 3] = this._w, this
      }
      gXQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return IQ.FromArrayToRef(QQ, WQ, this), this
      }
      addInPlace(QQ) {
        return this.x += QQ._x, this.y += QQ._y, this.z += QQ._z, this.w += QQ._w, this
      }
      addInPlaceFromFloats(QQ, WQ, XQ, wQ) {
        return this.x += QQ, this.y += WQ, this.z += XQ, this.w += wQ, this
      }
      add(QQ) {
        return new IQ(this._x + QQ.x, this._y + QQ.y, this._z + QQ.z, this._w + QQ.w)
      }
      addToRef(QQ, WQ) {
        return WQ.x = this._x + QQ.x, WQ.y = this._y + QQ.y, WQ.z = this._z + QQ.z, WQ.w = this._w + QQ.w, WQ
      }
      YwQ(QQ) {
        return this.x -= QQ.x, this.y -= QQ.y, this.z -= QQ.z, this.w -= QQ.w, this
      }
      subtract(QQ) {
        return new IQ(this._x - QQ.x, this._y - QQ.y, this._z - QQ.z, this._w - QQ.w)
      }
      subtractToRef(QQ, WQ) {
        return WQ.x = this._x - QQ.x, WQ.y = this._y - QQ.y, WQ.z = this._z - QQ.z, WQ.w = this._w - QQ.w, WQ
      }
      subtractFromFloats(QQ, WQ, XQ, wQ) {
        return new IQ(this._x - QQ, this._y - WQ, this._z - XQ, this._w - wQ)
      }
      subtractFromFloatsToRef(QQ, WQ, XQ, wQ, qQ) {
        return qQ.x = this._x - QQ, qQ.y = this._y - WQ, qQ.z = this._z - XQ, qQ.w = this._w - wQ, qQ
      }
      pg() {
        return new IQ(-this._x, -this._y, -this._z, -this._w)
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
        return new IQ(this._x * QQ, this._y * QQ, this._z * QQ, this._w * QQ)
      }
      scaleToRef(QQ, WQ) {
        return WQ.x = this._x * QQ, WQ.y = this._y * QQ, WQ.z = this._z * QQ, WQ.w = this._w * QQ, WQ
      }
      scaleAndAddToRef(QQ, WQ) {
        return WQ.x += this._x * QQ, WQ.y += this._y * QQ, WQ.z += this._z * QQ, WQ.w += this._w * QQ, WQ
      }
      equals(QQ) {
        return QQ && this._x === QQ.x && this._y === QQ.y && this._z === QQ.z && this._w === QQ.w
      }
      equalsWithEpsilon(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wQ.b;
        return QQ && (0, sQ.WithinEpsilon)(this._x, QQ.x, WQ) && (0, sQ.WithinEpsilon)(this._y, QQ.y, WQ) && (0, sQ.WithinEpsilon)(this._z, QQ.z, WQ) && (0, sQ.WithinEpsilon)(this._w, QQ.w, WQ)
      }
      PsQ(QQ, WQ, XQ, wQ) {
        return this._x === QQ && this._y === WQ && this._z === XQ && this._w === wQ
      }
      multiplyInPlace(QQ) {
        return this.x *= QQ.x, this.y *= QQ.y, this.z *= QQ.z, this.w *= QQ.w, this
      }
      multiply(QQ) {
        return new IQ(this._x * QQ.x, this._y * QQ.y, this._z * QQ.z, this._w * QQ.w)
      }
      multiplyToRef(QQ, WQ) {
        return WQ.x = this._x * QQ.x, WQ.y = this._y * QQ.y, WQ.z = this._z * QQ.z, WQ.w = this._w * QQ.w, WQ
      }
      multiplyByFloats(QQ, WQ, XQ, wQ) {
        return new IQ(this._x * QQ, this._y * WQ, this._z * XQ, this._w * wQ)
      }
      divide(QQ) {
        return new IQ(this._x / QQ.x, this._y / QQ.y, this._z / QQ.z, this._w / QQ.w)
      }
      divideToRef(QQ, WQ) {
        return WQ.x = this._x / QQ.x, WQ.y = this._y / QQ.y, WQ.z = this._z / QQ.z, WQ.w = this._w / QQ.w, WQ
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
      minimizeInPlaceFromFloats(QQ, WQ, XQ, wQ) {
        return this.x = Math.min(QQ, this._x), this.y = Math.min(WQ, this._y), this.z = Math.min(XQ, this._z), this.w = Math.min(wQ, this._w), this
      }
      maximizeInPlaceFromFloats(QQ, WQ, XQ, wQ) {
        return this.x = Math.max(QQ, this._x), this.y = Math.max(WQ, this._y), this.z = Math.max(XQ, this._z), this.w = Math.max(wQ, this._w), this
      }
      floorToRef(QQ) {
        return QQ.x = Math.floor(this._x), QQ.y = Math.floor(this._y), QQ.z = Math.floor(this._z), QQ.w = Math.floor(this._w), QQ
      }
      floor() {
        return new IQ(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(QQ) {
        return QQ.x = this._x - Math.floor(this._x), QQ.y = this._y - Math.floor(this._y), QQ.z = this._z - Math.floor(this._z), QQ.w = this._w - Math.floor(this._w), QQ
      }
      fract() {
        return new IQ(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new IQ)
      }
      normalizeToRef(QQ) {
        const WQ = this.length();
        return 0 === WQ || 1 === WQ ? (QQ.x = this._x, QQ.y = this._y, QQ.z = this._z, QQ.w = this._w, QQ) : this.scaleToRef(1 / WQ, QQ)
      }
      toVector3() {
        return new rQ(this._x, this._y, this._z)
      }
      clone() {
        return new IQ(this._x, this._y, this._z, this._w)
      }
      WH(QQ) {
        return this.x = QQ.x, this.y = QQ.y, this.z = QQ.z, this.w = QQ.w, this
      }
      XQQ(QQ, WQ, XQ, wQ) {
        return this.x = QQ, this.y = WQ, this.z = XQ, this.w = wQ, this
      }
      set(QQ, WQ, XQ, wQ) {
        return this.XQQ(QQ, WQ, XQ, wQ)
      }
      h_(QQ) {
        return this.x = this.y = this.z = this.w = QQ, this
      }
      dot(QQ) {
        return this._x * QQ.x + this._y * QQ.y + this._z * QQ.z + this._w * QQ.w
      }
      static FromArray(QQ, WQ) {
        return WQ || (WQ = 0), new IQ(QQ[WQ], QQ[WQ + 1], QQ[WQ + 2], QQ[WQ + 3])
      }
      static FromArrayToRef(QQ, WQ, XQ) {
        return XQ.x = QQ[WQ], XQ.y = QQ[WQ + 1], XQ.z = QQ[WQ + 2], XQ.w = QQ[WQ + 3], XQ
      }
      static FromFloatArrayToRef(QQ, WQ, XQ) {
        return IQ.FromArrayToRef(QQ, WQ, XQ), XQ
      }
      static FromFloatsToRef(QQ, WQ, XQ, wQ, qQ) {
        return qQ.x = QQ, qQ.y = WQ, qQ.z = XQ, qQ.w = wQ, qQ
      }
      static Zero() {
        return new IQ(0, 0, 0, 0)
      }
      static One() {
        return new IQ(1, 1, 1, 1)
      }
      static Random() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new IQ((0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ))
      }
      static RandomToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        return XQ.x = (0, sQ.RandomRange)(QQ, WQ), XQ.y = (0, sQ.RandomRange)(QQ, WQ), XQ.z = (0, sQ.RandomRange)(QQ, WQ), XQ.w = (0, sQ.RandomRange)(QQ, WQ), XQ
      }
      static Clamp(QQ, WQ, XQ) {
        return IQ.ClampToRef(QQ, WQ, XQ, new IQ)
      }
      static ClampToRef(QQ, WQ, XQ, wQ) {
        return wQ.x = (0, sQ.Clamp)(QQ.x, WQ.x, XQ.x), wQ.y = (0, sQ.Clamp)(QQ.y, WQ.y, XQ.y), wQ.z = (0, sQ.Clamp)(QQ.z, WQ.z, XQ.z), wQ.w = (0, sQ.Clamp)(QQ.w, WQ.w, XQ.w), wQ
      }
      static CheckExtends(QQ, WQ, XQ) {
        WQ.minimizeInPlace(QQ), XQ.maximizeInPlace(QQ)
      }
      static get ZeroReadOnly() {
        return IQ._ZeroReadOnly
      }
      static Normalize(QQ) {
        return IQ.NormalizeToRef(QQ, new IQ)
      }
      static NormalizeToRef(QQ, WQ) {
        return QQ.normalizeToRef(WQ), WQ
      }
      static Minimize(QQ, WQ) {
        const XQ = new IQ;
        return XQ.WH(QQ), XQ.minimizeInPlace(WQ), XQ
      }
      static Maximize(QQ, WQ) {
        const XQ = new IQ;
        return XQ.WH(QQ), XQ.maximizeInPlace(WQ), XQ
      }
      static Distance(QQ, WQ) {
        return Math.sqrt(IQ.DistanceSquared(QQ, WQ))
      }
      static DistanceSquared(QQ, WQ) {
        const XQ = QQ.x - WQ.x,
          wQ = QQ.y - WQ.y,
          qQ = QQ.z - WQ.z,
          TQ = QQ.w - WQ.w;
        return XQ * XQ + wQ * wQ + qQ * qQ + TQ * TQ
      }
      static Center(QQ, WQ) {
        return IQ.CenterToRef(QQ, WQ, new IQ)
      }
      static CenterToRef(QQ, WQ, XQ) {
        return XQ.x = (QQ.x + WQ.x) / 2, XQ.y = (QQ.y + WQ.y) / 2, XQ.z = (QQ.z + WQ.z) / 2, XQ.w = (QQ.w + WQ.w) / 2, XQ
      }
      static TransformCoordinates(QQ, WQ) {
        return IQ.TransformCoordinatesToRef(QQ, WQ, new IQ)
      }
      static TransformCoordinatesToRef(QQ, WQ, XQ) {
        return IQ.TransformCoordinatesFromFloatsToRef(QQ._x, QQ._y, QQ._z, WQ, XQ), XQ
      }
      static TransformCoordinatesFromFloatsToRef(QQ, WQ, XQ, wQ, qQ) {
        const TQ = wQ.m,
          zQ = QQ * TQ[0] + WQ * TQ[4] + XQ * TQ[8] + TQ[12],
          sQ = QQ * TQ[1] + WQ * TQ[5] + XQ * TQ[9] + TQ[13],
          FQ = QQ * TQ[2] + WQ * TQ[6] + XQ * TQ[10] + TQ[14],
          PQ = QQ * TQ[3] + WQ * TQ[7] + XQ * TQ[11] + TQ[15];
        return qQ.x = zQ, qQ.y = sQ, qQ.z = FQ, qQ.w = PQ, qQ
      }
      static TransformNormal(QQ, WQ) {
        return IQ.TransformNormalToRef(QQ, WQ, new IQ)
      }
      static TransformNormalToRef(QQ, WQ, XQ) {
        const wQ = WQ.m,
          qQ = QQ.x * wQ[0] + QQ.y * wQ[4] + QQ.z * wQ[8],
          TQ = QQ.x * wQ[1] + QQ.y * wQ[5] + QQ.z * wQ[9],
          zQ = QQ.x * wQ[2] + QQ.y * wQ[6] + QQ.z * wQ[10];
        return XQ.x = qQ, XQ.y = TQ, XQ.z = zQ, XQ.w = QQ.w, XQ
      }
      static TransformNormalFromFloatsToRef(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = qQ.m;
        return TQ.x = QQ * zQ[0] + WQ * zQ[4] + XQ * zQ[8], TQ.y = QQ * zQ[1] + WQ * zQ[5] + XQ * zQ[9], TQ.z = QQ * zQ[2] + WQ * zQ[6] + XQ * zQ[10], TQ.w = wQ, TQ
      }
      static FromVector3(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new IQ(QQ._x, QQ._y, QQ._z, WQ)
      }
      static Dot(QQ, WQ) {
        return QQ.x * WQ.x + QQ.y * WQ.y + QQ.z * WQ.z + QQ.w * WQ.w
      }
    }
    IQ._V8PerformanceHack = new IQ(.5, .5, .5, .5), IQ._ZeroReadOnly = IQ.Zero();
    class jQ {
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
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = QQ, this._y = WQ, this._z = XQ, this._w = wQ
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let QQ = gQ(this._x);
        return QQ = 397 * QQ ^ gQ(this._y), QQ = 397 * QQ ^ gQ(this._z), QQ = 397 * QQ ^ gQ(this._w), QQ
      }
      awQ() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[WQ] = this._x, QQ[WQ + 1] = this._y, QQ[WQ + 2] = this._z, QQ[WQ + 3] = this._w, this
      }
      gXQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return jQ.FromArrayToRef(QQ, WQ, this)
      }
      equals(QQ) {
        return QQ && this._x === QQ._x && this._y === QQ._y && this._z === QQ._z && this._w === QQ._w
      }
      equalsWithEpsilon(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wQ.b;
        return QQ && (0, sQ.WithinEpsilon)(this._x, QQ._x, WQ) && (0, sQ.WithinEpsilon)(this._y, QQ._y, WQ) && (0, sQ.WithinEpsilon)(this._z, QQ._z, WQ) && (0, sQ.WithinEpsilon)(this._w, QQ._w, WQ)
      }
      isApprox(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wQ.b;
        return QQ && ((0, sQ.WithinEpsilon)(this._x, QQ._x, WQ) && (0, sQ.WithinEpsilon)(this._y, QQ._y, WQ) && (0, sQ.WithinEpsilon)(this._z, QQ._z, WQ) && (0, sQ.WithinEpsilon)(this._w, QQ._w, WQ) || (0, sQ.WithinEpsilon)(this._x, -QQ._x, WQ) && (0, sQ.WithinEpsilon)(this._y, -QQ._y, WQ) && (0, sQ.WithinEpsilon)(this._z, -QQ._z, WQ) && (0, sQ.WithinEpsilon)(this._w, -QQ._w, WQ))
      }
      clone() {
        return new jQ(this._x, this._y, this._z, this._w)
      }
      WH(QQ) {
        return this._x = QQ._x, this._y = QQ._y, this._z = QQ._z, this._w = QQ._w, this._isDirty = !0, this
      }
      XQQ(QQ, WQ, XQ, wQ) {
        return this._x = QQ, this._y = WQ, this._z = XQ, this._w = wQ, this._isDirty = !0, this
      }
      set(QQ, WQ, XQ, wQ) {
        return this.XQQ(QQ, WQ, XQ, wQ)
      }
      h_(QQ) {
        return this.XQQ(QQ, QQ, QQ, QQ)
      }
      add(QQ) {
        return new jQ(this._x + QQ._x, this._y + QQ._y, this._z + QQ._z, this._w + QQ._w)
      }
      addInPlace(QQ) {
        return this._x += QQ._x, this._y += QQ._y, this._z += QQ._z, this._w += QQ._w, this._isDirty = !0, this
      }
      addToRef(QQ, WQ) {
        return WQ._x = this._x + QQ._x, WQ._y = this._y + QQ._y, WQ._z = this._z + QQ._z, WQ._w = this._w + QQ._w, WQ._isDirty = !0, WQ
      }
      addInPlaceFromFloats(QQ, WQ, XQ, wQ) {
        return this._x += QQ, this._y += WQ, this._z += XQ, this._w += wQ, this._isDirty = !0, this
      }
      subtractToRef(QQ, WQ) {
        return WQ._x = this._x - QQ._x, WQ._y = this._y - QQ._y, WQ._z = this._z - QQ._z, WQ._w = this._w - QQ._w, WQ._isDirty = !0, WQ
      }
      subtractFromFloats(QQ, WQ, XQ, wQ) {
        return this.subtractFromFloatsToRef(QQ, WQ, XQ, wQ, new jQ)
      }
      subtractFromFloatsToRef(QQ, WQ, XQ, wQ, qQ) {
        return qQ._x = this._x - QQ, qQ._y = this._y - WQ, qQ._z = this._z - XQ, qQ._w = this._w - wQ, qQ._isDirty = !0, qQ
      }
      subtract(QQ) {
        return new jQ(this._x - QQ._x, this._y - QQ._y, this._z - QQ._z, this._w - QQ._w)
      }
      YwQ(QQ) {
        return this._x -= QQ._x, this._y -= QQ._y, this._z -= QQ._z, this._w -= QQ._w, this._isDirty = !0, this
      }
      scale(QQ) {
        return new jQ(this._x * QQ, this._y * QQ, this._z * QQ, this._w * QQ)
      }
      scaleToRef(QQ, WQ) {
        return WQ._x = this._x * QQ, WQ._y = this._y * QQ, WQ._z = this._z * QQ, WQ._w = this._w * QQ, WQ._isDirty = !0, WQ
      }
      scaleInPlace(QQ) {
        return this._x *= QQ, this._y *= QQ, this._z *= QQ, this._w *= QQ, this._isDirty = !0, this
      }
      scaleAndAddToRef(QQ, WQ) {
        return WQ._x += this._x * QQ, WQ._y += this._y * QQ, WQ._z += this._z * QQ, WQ._w += this._w * QQ, WQ._isDirty = !0, WQ
      }
      multiply(QQ) {
        const WQ = new jQ(0, 0, 0, 1);
        return this.multiplyToRef(QQ, WQ), WQ
      }
      multiplyToRef(QQ, WQ) {
        const XQ = this._x * QQ._w + this._y * QQ._z - this._z * QQ._y + this._w * QQ._x,
          wQ = -this._x * QQ._z + this._y * QQ._w + this._z * QQ._x + this._w * QQ._y,
          qQ = this._x * QQ._y - this._y * QQ._x + this._z * QQ._w + this._w * QQ._z,
          TQ = -this._x * QQ._x - this._y * QQ._y - this._z * QQ._z + this._w * QQ._w;
        return WQ.XQQ(XQ, wQ, qQ, TQ), WQ
      }
      multiplyInPlace(QQ) {
        return this.multiplyToRef(QQ, this)
      }
      multiplyByFloats(QQ, WQ, XQ, wQ) {
        return this._x *= QQ, this._y *= WQ, this._z *= XQ, this._w *= wQ, this._isDirty = !0, this
      }
      divide(QQ) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(QQ, WQ) {
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
      pg() {
        return this.negateToRef(new jQ)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(QQ) {
        return QQ._x = -this._x, QQ._y = -this._y, QQ._z = -this._z, QQ._w = -this._w, QQ._isDirty = !0, QQ
      }
      PsQ(QQ, WQ, XQ, wQ) {
        return this._x === QQ && this._y === WQ && this._z === XQ && this._w === wQ
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
        return QQ.XQQ(-this._x, -this._y, -this._z, this._w), QQ
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new jQ(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const QQ = this.conjugate(),
          WQ = this.lengthSquared();
        return 0 == WQ || 1 == WQ || QQ.scaleInPlace(1 / WQ), QQ
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
        const QQ = new jQ(0, 0, 0, 1);
        return this.normalizeToRef(QQ), QQ
      }
      normalizeToRef(QQ) {
        const WQ = this.length();
        return 0 === WQ || 1 === WQ ? QQ.XQQ(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / WQ, QQ)
      }
      toEulerAngles() {
        const QQ = rQ.Zero();
        return this.toEulerAnglesToRef(QQ), QQ
      }
      toEulerAnglesToRef(QQ) {
        const WQ = this._z,
          XQ = this._x,
          wQ = this._y,
          qQ = this._w,
          TQ = wQ * WQ - XQ * qQ,
          zQ = .4999999;
        if (TQ < -zQ) QQ._y = 2 * Math.atan2(wQ, qQ), QQ._x = Math.PI / 2, QQ._z = 0, QQ._isDirty = !0;
        else if (TQ > zQ) QQ._y = 2 * Math.atan2(wQ, qQ), QQ._x = -Math.PI / 2, QQ._z = 0, QQ._isDirty = !0;
        else {
          const zQ = qQ * qQ,
            sQ = WQ * WQ,
            FQ = XQ * XQ,
            PQ = wQ * wQ;
          QQ._z = Math.atan2(2 * (XQ * wQ + WQ * qQ), -sQ - FQ + PQ + zQ), QQ._x = Math.asin(-2 * TQ), QQ._y = Math.atan2(2 * (WQ * XQ + wQ * qQ), sQ - FQ - PQ + zQ), QQ._isDirty = !0
        }
        return QQ
      }
      toAlphaBetaGammaToRef(QQ) {
        const WQ = this._z,
          XQ = this._x,
          wQ = this._y,
          qQ = this._w,
          TQ = Math.sqrt(XQ * XQ + wQ * wQ),
          zQ = Math.sqrt(WQ * WQ + qQ * qQ),
          sQ = 2 * Math.atan2(TQ, zQ),
          FQ = 2 * Math.atan2(WQ, qQ),
          PQ = 2 * Math.atan2(wQ, XQ),
          gQ = (FQ + PQ) / 2,
          JQ = (FQ - PQ) / 2;
        return QQ.set(JQ, sQ, gQ), QQ
      }
      toRotationMatrix(QQ) {
        return BQ.FromQuaternionToRef(this, QQ), QQ
      }
      fromRotationMatrix(QQ) {
        return jQ.FromRotationMatrixToRef(QQ, this), this
      }
      dot(QQ) {
        return this._x * QQ._x + this._y * QQ._y + this._z * QQ._z + this._w * QQ._w
      }
      toAxisAngle() {
        const QQ = rQ.Zero();
        return {
          axis: QQ,
          angle: this.toAxisAngleToRef(QQ)
        }
      }
      toAxisAngleToRef(QQ) {
        let WQ;
        const XQ = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          wQ = this._w;
        return XQ > 0 ? (WQ = 2 * Math.atan2(XQ, wQ), QQ.set(this._x / XQ, this._y / XQ, this._z / XQ)) : (WQ = 0, QQ.set(1, 0, 0)), WQ
      }
      static FromRotationMatrix(QQ) {
        const WQ = new jQ;
        return jQ.FromRotationMatrixToRef(QQ, WQ), WQ
      }
      static FromRotationMatrixToRef(QQ, WQ) {
        const XQ = QQ.m,
          wQ = XQ[0],
          qQ = XQ[4],
          TQ = XQ[8],
          zQ = XQ[1],
          sQ = XQ[5],
          FQ = XQ[9],
          PQ = XQ[2],
          gQ = XQ[6],
          JQ = XQ[10],
          rQ = wQ + sQ + JQ;
        let IQ;
        return rQ > 0 ? (IQ = .5 / Math.sqrt(rQ + 1), WQ._w = .25 / IQ, WQ._x = (gQ - FQ) * IQ, WQ._y = (TQ - PQ) * IQ, WQ._z = (zQ - qQ) * IQ, WQ._isDirty = !0) : wQ > sQ && wQ > JQ ? (IQ = 2 * Math.sqrt(1 + wQ - sQ - JQ), WQ._w = (gQ - FQ) / IQ, WQ._x = .25 * IQ, WQ._y = (qQ + zQ) / IQ, WQ._z = (TQ + PQ) / IQ, WQ._isDirty = !0) : sQ > JQ ? (IQ = 2 * Math.sqrt(1 + sQ - wQ - JQ), WQ._w = (TQ - PQ) / IQ, WQ._x = (qQ + zQ) / IQ, WQ._y = .25 * IQ, WQ._z = (FQ + gQ) / IQ, WQ._isDirty = !0) : (IQ = 2 * Math.sqrt(1 + JQ - wQ - sQ), WQ._w = (zQ - qQ) / IQ, WQ._x = (TQ + PQ) / IQ, WQ._y = (FQ + gQ) / IQ, WQ._z = .25 * IQ, WQ._isDirty = !0), WQ
      }
      static Dot(QQ, WQ) {
        return QQ._x * WQ._x + QQ._y * WQ._y + QQ._z * WQ._z + QQ._w * WQ._w
      }
      static AreClose(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const wQ = jQ.Dot(QQ, WQ);
        return 1 - wQ * wQ <= XQ
      }
      static SmoothToRef(QQ, WQ, XQ, wQ, qQ) {
        let TQ = 0 === wQ ? 1 : XQ / wQ;
        return TQ = (0, sQ.Clamp)(TQ, 0, 1), jQ.SlerpToRef(QQ, WQ, TQ, qQ), qQ
      }
      static Zero() {
        return new jQ(0, 0, 0, 0)
      }
      static Inverse(QQ) {
        return new jQ(-QQ._x, -QQ._y, -QQ._z, QQ._w)
      }
      static InverseToRef(QQ, WQ) {
        return WQ.set(-QQ._x, -QQ._y, -QQ._z, QQ._w), WQ
      }
      static Identity() {
        return new jQ(0, 0, 0, 1)
      }
      static IsIdentity(QQ) {
        return QQ && 0 === QQ._x && 0 === QQ._y && 0 === QQ._z && 1 === QQ._w
      }
      static RotationAxis(QQ, WQ) {
        return jQ.RotationAxisToRef(QQ, WQ, new jQ)
      }
      static RotationAxisToRef(QQ, WQ, XQ) {
        XQ._w = Math.cos(WQ / 2);
        const wQ = Math.sin(WQ / 2) / QQ.length();
        return XQ._x = QQ._x * wQ, XQ._y = QQ._y * wQ, XQ._z = QQ._z * wQ, XQ._isDirty = !0, XQ
      }
      static FromArray(QQ, WQ) {
        return WQ || (WQ = 0), new jQ(QQ[WQ], QQ[WQ + 1], QQ[WQ + 2], QQ[WQ + 3])
      }
      static FromArrayToRef(QQ, WQ, XQ) {
        return XQ._x = QQ[WQ], XQ._y = QQ[WQ + 1], XQ._z = QQ[WQ + 2], XQ._w = QQ[WQ + 3], XQ._isDirty = !0, XQ
      }
      static FromFloatsToRef(QQ, WQ, XQ, wQ, qQ) {
        return qQ.XQQ(QQ, WQ, XQ, wQ), qQ
      }
      static FromEulerAngles(QQ, WQ, XQ) {
        const wQ = new jQ;
        return jQ.RotationYawPitchRollToRef(WQ, QQ, XQ, wQ), wQ
      }
      static FromEulerAnglesToRef(QQ, WQ, XQ, wQ) {
        return jQ.RotationYawPitchRollToRef(WQ, QQ, XQ, wQ), wQ
      }
      static FromEulerVector(QQ) {
        const WQ = new jQ;
        return jQ.RotationYawPitchRollToRef(QQ._y, QQ._x, QQ._z, WQ), WQ
      }
      static FromEulerVectorToRef(QQ, WQ) {
        return jQ.RotationYawPitchRollToRef(QQ._y, QQ._x, QQ._z, WQ), WQ
      }
      static FromUnitVectorsToRef(QQ, WQ, XQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wQ.b;
        const TQ = rQ.Dot(QQ, WQ) + 1;
        return TQ < qQ ? Math.abs(QQ.x) > Math.abs(QQ.z) ? XQ.set(-QQ.y, QQ.x, 0, 0) : XQ.set(0, -QQ.z, QQ.y, 0) : (rQ.CrossToRef(QQ, WQ, VQ.vj[0]), XQ.set(VQ.vj[0].x, VQ.vj[0].y, VQ.vj[0].z, TQ)), XQ.normalize()
      }
      static RotationYawPitchRoll(QQ, WQ, XQ) {
        const wQ = new jQ;
        return jQ.RotationYawPitchRollToRef(QQ, WQ, XQ, wQ), wQ
      }
      static RotationYawPitchRollToRef(QQ, WQ, XQ, wQ) {
        const qQ = .5 * XQ,
          TQ = .5 * WQ,
          zQ = .5 * QQ,
          sQ = Math.sin(qQ),
          FQ = Math.cos(qQ),
          PQ = Math.sin(TQ),
          gQ = Math.cos(TQ),
          JQ = Math.sin(zQ),
          rQ = Math.cos(zQ);
        return wQ._x = rQ * PQ * FQ + JQ * gQ * sQ, wQ._y = JQ * gQ * FQ - rQ * PQ * sQ, wQ._z = rQ * gQ * sQ - JQ * PQ * FQ, wQ._w = rQ * gQ * FQ + JQ * PQ * sQ, wQ._isDirty = !0, wQ
      }
      static RotationAlphaBetaGamma(QQ, WQ, XQ) {
        const wQ = new jQ;
        return jQ.RotationAlphaBetaGammaToRef(QQ, WQ, XQ, wQ), wQ
      }
      static RotationAlphaBetaGammaToRef(QQ, WQ, XQ, wQ) {
        const qQ = .5 * (XQ + QQ),
          TQ = .5 * (XQ - QQ),
          zQ = .5 * WQ;
        return wQ._x = Math.cos(TQ) * Math.sin(zQ), wQ._y = Math.sin(TQ) * Math.sin(zQ), wQ._z = Math.sin(qQ) * Math.cos(zQ), wQ._w = Math.cos(qQ) * Math.cos(zQ), wQ._isDirty = !0, wQ
      }
      static RotationQuaternionFromAxis(QQ, WQ, XQ) {
        const wQ = new jQ(0, 0, 0, 0);
        return jQ.RotationQuaternionFromAxisToRef(QQ, WQ, XQ, wQ), wQ
      }
      static RotationQuaternionFromAxisToRef(QQ, WQ, XQ, wQ) {
        const qQ = yQ.Matrix[0];
        return QQ = QQ.normalizeToRef(yQ.vj[0]), WQ = WQ.normalizeToRef(yQ.vj[1]), XQ = XQ.normalizeToRef(yQ.vj[2]), BQ.FromXYZAxesToRef(QQ, WQ, XQ, qQ), jQ.FromRotationMatrixToRef(qQ, wQ), wQ
      }
      static FromLookDirectionLH(QQ, WQ) {
        const XQ = new jQ;
        return jQ.FromLookDirectionLHToRef(QQ, WQ, XQ), XQ
      }
      static FromLookDirectionLHToRef(QQ, WQ, XQ) {
        const wQ = yQ.Matrix[0];
        return BQ.LookDirectionLHToRef(QQ, WQ, wQ), jQ.FromRotationMatrixToRef(wQ, XQ), XQ
      }
      static FromLookDirectionRH(QQ, WQ) {
        const XQ = new jQ;
        return jQ.FromLookDirectionRHToRef(QQ, WQ, XQ), XQ
      }
      static FromLookDirectionRHToRef(QQ, WQ, XQ) {
        const wQ = yQ.Matrix[0];
        return BQ.LookDirectionRHToRef(QQ, WQ, wQ), jQ.FromRotationMatrixToRef(wQ, XQ)
      }
      static Slerp(QQ, WQ, XQ) {
        const wQ = jQ.Identity();
        return jQ.SlerpToRef(QQ, WQ, XQ, wQ), wQ
      }
      static SlerpToRef(QQ, WQ, XQ, wQ) {
        let qQ, TQ, zQ = QQ._x * WQ._x + QQ._y * WQ._y + QQ._z * WQ._z + QQ._w * WQ._w,
          sQ = !1;
        if (zQ < 0 && (sQ = !0, zQ = -zQ), zQ > .999999) TQ = 1 - XQ, qQ = sQ ? -XQ : XQ;
        else {
          const QQ = Math.acos(zQ),
            WQ = 1 / Math.sin(QQ);
          TQ = Math.sin((1 - XQ) * QQ) * WQ, qQ = sQ ? -Math.sin(XQ * QQ) * WQ : Math.sin(XQ * QQ) * WQ
        }
        return wQ._x = TQ * QQ._x + qQ * WQ._x, wQ._y = TQ * QQ._y + qQ * WQ._y, wQ._z = TQ * QQ._z + qQ * WQ._z, wQ._w = TQ * QQ._w + qQ * WQ._w, wQ._isDirty = !0, wQ
      }
      static Hermite(QQ, WQ, XQ, wQ, qQ) {
        const TQ = qQ * qQ,
          zQ = qQ * TQ,
          sQ = 2 * zQ - 3 * TQ + 1,
          FQ = -2 * zQ + 3 * TQ,
          PQ = zQ - 2 * TQ + qQ,
          gQ = zQ - TQ,
          JQ = QQ._x * sQ + XQ._x * FQ + WQ._x * PQ + wQ._x * gQ,
          rQ = QQ._y * sQ + XQ._y * FQ + WQ._y * PQ + wQ._y * gQ,
          IQ = QQ._z * sQ + XQ._z * FQ + WQ._z * PQ + wQ._z * gQ,
          BQ = QQ._w * sQ + XQ._w * FQ + WQ._w * PQ + wQ._w * gQ;
        return new jQ(JQ, rQ, IQ, BQ)
      }
      static Hermite1stDerivative(QQ, WQ, XQ, wQ, qQ) {
        const TQ = new jQ;
        return this.Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ), TQ
      }
      static Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = qQ * qQ;
        return TQ._x = 6 * (zQ - qQ) * QQ._x + (3 * zQ - 4 * qQ + 1) * WQ._x + 6 * (-zQ + qQ) * XQ._x + (3 * zQ - 2 * qQ) * wQ._x, TQ._y = 6 * (zQ - qQ) * QQ._y + (3 * zQ - 4 * qQ + 1) * WQ._y + 6 * (-zQ + qQ) * XQ._y + (3 * zQ - 2 * qQ) * wQ._y, TQ._z = 6 * (zQ - qQ) * QQ._z + (3 * zQ - 4 * qQ + 1) * WQ._z + 6 * (-zQ + qQ) * XQ._z + (3 * zQ - 2 * qQ) * wQ._z, TQ._w = 6 * (zQ - qQ) * QQ._w + (3 * zQ - 4 * qQ + 1) * WQ._w + 6 * (-zQ + qQ) * XQ._w + (3 * zQ - 2 * qQ) * wQ._w, TQ._isDirty = !0, TQ
      }
      static Normalize(QQ) {
        const WQ = jQ.Zero();
        return jQ.NormalizeToRef(QQ, WQ), WQ
      }
      static NormalizeToRef(QQ, WQ) {
        return QQ.normalizeToRef(WQ), WQ
      }
      static Clamp(QQ, WQ, XQ) {
        const wQ = new jQ;
        return jQ.ClampToRef(QQ, WQ, XQ, wQ), wQ
      }
      static ClampToRef(QQ, WQ, XQ, wQ) {
        return wQ.XQQ((0, sQ.Clamp)(QQ.x, WQ.x, XQ.x), (0, sQ.Clamp)(QQ.y, WQ.y, XQ.y), (0, sQ.Clamp)(QQ.z, WQ.z, XQ.z), (0, sQ.Clamp)(QQ.w, WQ.w, XQ.w))
      }
      static Random() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new jQ((0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ))
      }
      static RandomToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).XQQ((0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ), (0, sQ.RandomRange)(QQ, WQ))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(QQ, WQ) {
        return Math.sqrt(jQ.DistanceSquared(QQ, WQ))
      }
      static DistanceSquared(QQ, WQ) {
        const XQ = QQ.x - WQ.x,
          wQ = QQ.y - WQ.y,
          qQ = QQ.z - WQ.z,
          TQ = QQ.w - WQ.w;
        return XQ * XQ + wQ * wQ + qQ * qQ + TQ * TQ
      }
      static Center(QQ, WQ) {
        return jQ.CenterToRef(QQ, WQ, jQ.Zero())
      }
      static CenterToRef(QQ, WQ, XQ) {
        return XQ.XQQ((QQ.x + WQ.x) / 2, (QQ.y + WQ.y) / 2, (QQ.z + WQ.z) / 2, (QQ.w + WQ.w) / 2)
      }
    }
    jQ._V8PerformanceHack = new jQ(.5, .5, .5, .5);
    class BQ {
      static get Use64Bits() {
        return TQ.e.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = FQ.h._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = QQ, this._isIdentity3x2 = QQ || XQ, this._isIdentityDirty = !this._isIdentity && WQ, this._isIdentity3x2Dirty = !this._isIdentity3x2 && wQ
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, TQ.e.MatrixTrackPrecisionChange && TQ.e.MatrixTrackedMatrices.push(this), this._m = new TQ.e.MatrixCurrentType(16), this.markAsUpdated()
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
          WQ = QQ[0],
          XQ = QQ[1],
          wQ = QQ[2],
          qQ = QQ[3],
          TQ = QQ[4],
          zQ = QQ[5],
          sQ = QQ[6],
          FQ = QQ[7],
          PQ = QQ[8],
          gQ = QQ[9],
          JQ = QQ[10],
          rQ = QQ[11],
          IQ = QQ[12],
          jQ = QQ[13],
          BQ = QQ[14],
          yQ = QQ[15],
          VQ = JQ * yQ - BQ * rQ,
          DQ = gQ * yQ - jQ * rQ,
          pQ = gQ * BQ - jQ * JQ,
          GQ = PQ * yQ - IQ * rQ,
          UQ = PQ * BQ - JQ * IQ,
          bQ = PQ * jQ - IQ * gQ;
        return WQ * +(zQ * VQ - sQ * DQ + FQ * pQ) + XQ * -(TQ * VQ - sQ * GQ + FQ * UQ) + wQ * +(TQ * DQ - zQ * GQ + FQ * bQ) + qQ * -(TQ * pQ - zQ * UQ + sQ * bQ)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!QQ) return this._m;
        const XQ = this._m;
        for (let wQ = 0; wQ < 16; wQ++) QQ[WQ + wQ] = XQ[wQ];
        return this
      }
      awQ() {
        return this._m
      }
      gXQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BQ.FromArrayToRef(QQ, WQ, this)
      }
      XQQ() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        return BQ.FromArrayToRef(WQ, 0, this)
      }
      set() {
        const QQ = this._m;
        for (let WQ = 0; WQ < 16; WQ++) QQ[WQ] = WQ < 0 || arguments.length <= WQ ? void 0 : arguments[WQ];
        return this.markAsUpdated(), this
      }
      h_(QQ) {
        const WQ = this._m;
        for (let XQ = 0; XQ < 16; XQ++) WQ[XQ] = QQ;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return BQ.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(QQ) {
        const WQ = new BQ;
        return this.addToRef(QQ, WQ), WQ
      }
      addToRef(QQ, WQ) {
        const XQ = this._m,
          wQ = WQ._m,
          qQ = QQ.m;
        for (let TQ = 0; TQ < 16; TQ++) wQ[TQ] = XQ[TQ] + qQ[TQ];
        return WQ.markAsUpdated(), WQ
      }
      addToSelf(QQ) {
        const WQ = this._m,
          XQ = QQ.m;
        return WQ[0] += XQ[0], WQ[1] += XQ[1], WQ[2] += XQ[2], WQ[3] += XQ[3], WQ[4] += XQ[4], WQ[5] += XQ[5], WQ[6] += XQ[6], WQ[7] += XQ[7], WQ[8] += XQ[8], WQ[9] += XQ[9], WQ[10] += XQ[10], WQ[11] += XQ[11], WQ[12] += XQ[12], WQ[13] += XQ[13], WQ[14] += XQ[14], WQ[15] += XQ[15], this.markAsUpdated(), this
      }
      addInPlace(QQ) {
        const WQ = this._m,
          XQ = QQ.m;
        for (let wQ = 0; wQ < 16; wQ++) WQ[wQ] += XQ[wQ];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const QQ = this._m;
        for (let WQ = 0; WQ < 16; WQ++) QQ[WQ] += WQ < 0 || arguments.length <= WQ ? void 0 : arguments[WQ];
        return this.markAsUpdated(), this
      }
      subtract(QQ) {
        const WQ = this._m,
          XQ = QQ.m;
        for (let wQ = 0; wQ < 16; wQ++) WQ[wQ] -= XQ[wQ];
        return this.markAsUpdated(), this
      }
      subtractToRef(QQ, WQ) {
        const XQ = this._m,
          wQ = QQ.m,
          qQ = WQ._m;
        for (let TQ = 0; TQ < 16; TQ++) qQ[TQ] = XQ[TQ] - wQ[TQ];
        return WQ.markAsUpdated(), WQ
      }
      YwQ(QQ) {
        const WQ = this._m,
          XQ = QQ.m;
        for (let wQ = 0; wQ < 16; wQ++) WQ[wQ] -= XQ[wQ];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        return this.subtractFromFloatsToRef(...WQ, new BQ)
      }
      subtractFromFloatsToRef() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        const wQ = WQ.pop(),
          qQ = this._m,
          TQ = wQ._m,
          zQ = WQ;
        for (let sQ = 0; sQ < 16; sQ++) TQ[sQ] = qQ[sQ] - zQ[sQ];
        return wQ.markAsUpdated(), wQ
      }
      invertToRef(QQ) {
        return !0 === this._isIdentity ? (BQ.IdentityToRef(QQ), QQ) : ((0, FQ.d)(this, QQ.awQ()) ? QQ.markAsUpdated() : QQ.WH(this), QQ)
      }
      addAtIndex(QQ, WQ) {
        return this._m[QQ] += WQ, this.markAsUpdated(), this
      }
      multiplyAtIndex(QQ, WQ) {
        return this._m[QQ] *= WQ, this.markAsUpdated(), this
      }
      setTranslationFromFloats(QQ, WQ, XQ) {
        return this._m[12] = QQ, this._m[13] = WQ, this._m[14] = XQ, this.markAsUpdated(), this
      }
      addTranslationFromFloats(QQ, WQ, XQ) {
        return this._m[12] += QQ, this._m[13] += WQ, this._m[14] += XQ, this.markAsUpdated(), this
      }
      setTranslation(QQ) {
        return this.setTranslationFromFloats(QQ._x, QQ._y, QQ._z)
      }
      getTranslation() {
        return new rQ(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(QQ) {
        return QQ.x = this._m[12], QQ.y = this._m[13], QQ.z = this._m[14], QQ
      }
      removeRotationAndScaling() {
        const QQ = this.m;
        return BQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, QQ[12], QQ[13], QQ[14], QQ[15], this), this._updateIdentityStatus(0 === QQ[12] && 0 === QQ[13] && 0 === QQ[14] && 1 === QQ[15]), this
      }
      WH(QQ) {
        QQ.copyToArray(this._m);
        const WQ = QQ;
        return this.updateFlag = WQ.updateFlag, this._updateIdentityStatus(WQ._isIdentity, WQ._isIdentityDirty, WQ._isIdentity3x2, WQ._isIdentity3x2Dirty), this
      }
      copyToArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, FQ.c)(this, QQ, WQ), this
      }
      multiply(QQ) {
        const WQ = new BQ;
        return this.multiplyToRef(QQ, WQ), WQ
      }
      multiplyInPlace(QQ) {
        const WQ = this._m,
          XQ = QQ.m;
        for (let wQ = 0; wQ < 16; wQ++) WQ[wQ] *= XQ[wQ];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const QQ = this._m;
        for (let WQ = 0; WQ < 16; WQ++) QQ[WQ] *= WQ < 0 || arguments.length <= WQ ? void 0 : arguments[WQ];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var QQ = arguments.length, WQ = new Array(QQ), XQ = 0; XQ < QQ; XQ++) WQ[XQ] = arguments[XQ];
        const wQ = WQ.pop(),
          qQ = this._m,
          TQ = wQ._m,
          zQ = WQ;
        for (let sQ = 0; sQ < 16; sQ++) TQ[sQ] = qQ[sQ] * zQ[sQ];
        return wQ.markAsUpdated(), wQ
      }
      multiplyToRef(QQ, WQ) {
        return this._isIdentity ? (WQ.WH(QQ), WQ) : QQ._isIdentity ? (WQ.WH(this), WQ) : (this.multiplyToArray(QQ, WQ._m, 0), WQ.markAsUpdated(), WQ)
      }
      multiplyToArray(QQ, WQ, XQ) {
        return (0, FQ.j)(this, QQ, WQ, XQ), this
      }
      divide(QQ) {
        return this.divideToRef(QQ, new BQ)
      }
      divideToRef(QQ, WQ) {
        const XQ = this._m,
          wQ = QQ.m,
          qQ = WQ._m;
        for (let TQ = 0; TQ < 16; TQ++) qQ[TQ] = XQ[TQ] / wQ[TQ];
        return WQ.markAsUpdated(), WQ
      }
      divideInPlace(QQ) {
        const WQ = this._m,
          XQ = QQ.m;
        for (let wQ = 0; wQ < 16; wQ++) WQ[wQ] /= XQ[wQ];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(QQ) {
        const WQ = this._m,
          XQ = QQ.m;
        for (let wQ = 0; wQ < 16; wQ++) WQ[wQ] = Math.min(WQ[wQ], XQ[wQ]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const QQ = this._m;
        for (let WQ = 0; WQ < 16; WQ++) QQ[WQ] = Math.min(QQ[WQ], WQ < 0 || arguments.length <= WQ ? void 0 : arguments[WQ]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(QQ) {
        const WQ = this._m,
          XQ = QQ.m;
        for (let wQ = 0; wQ < 16; wQ++) WQ[wQ] = Math.max(WQ[wQ], XQ[wQ]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const QQ = this._m;
        for (let WQ = 0; WQ < 16; WQ++) QQ[WQ] = Math.max(QQ[WQ], WQ < 0 || arguments.length <= WQ ? void 0 : arguments[WQ]);
        return this.markAsUpdated(), this
      }
      pg() {
        return this.negateToRef(new BQ)
      }
      negateInPlace() {
        const QQ = this._m;
        for (let WQ = 0; WQ < 16; WQ++) QQ[WQ] = -QQ[WQ];
        return this.markAsUpdated(), this
      }
      negateToRef(QQ) {
        const WQ = this._m,
          XQ = QQ._m;
        for (let wQ = 0; wQ < 16; wQ++) XQ[wQ] = -WQ[wQ];
        return QQ.markAsUpdated(), QQ
      }
      equals(QQ) {
        const WQ = QQ;
        if (!WQ) return !1;
        if ((this._isIdentity || WQ._isIdentity) && !this._isIdentityDirty && !WQ._isIdentityDirty) return this._isIdentity && WQ._isIdentity;
        const XQ = this.m,
          wQ = WQ.m;
        return XQ[0] === wQ[0] && XQ[1] === wQ[1] && XQ[2] === wQ[2] && XQ[3] === wQ[3] && XQ[4] === wQ[4] && XQ[5] === wQ[5] && XQ[6] === wQ[6] && XQ[7] === wQ[7] && XQ[8] === wQ[8] && XQ[9] === wQ[9] && XQ[10] === wQ[10] && XQ[11] === wQ[11] && XQ[12] === wQ[12] && XQ[13] === wQ[13] && XQ[14] === wQ[14] && XQ[15] === wQ[15]
      }
      equalsWithEpsilon(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = this._m,
          wQ = QQ.m;
        for (let qQ = 0; qQ < 16; qQ++)
          if (!(0, sQ.WithinEpsilon)(XQ[qQ], wQ[qQ], WQ)) return !1;
        return !0
      }
      PsQ() {
        const QQ = this._m;
        for (let WQ = 0; WQ < 16; WQ++)
          if (QQ[WQ] != (WQ < 0 || arguments.length <= WQ ? void 0 : arguments[WQ])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new BQ)
      }
      floorToRef(QQ) {
        const WQ = this._m,
          XQ = QQ._m;
        for (let wQ = 0; wQ < 16; wQ++) XQ[wQ] = Math.floor(WQ[wQ]);
        return QQ.markAsUpdated(), QQ
      }
      fract() {
        return this.fractToRef(new BQ)
      }
      fractToRef(QQ) {
        const WQ = this._m,
          XQ = QQ._m;
        for (let wQ = 0; wQ < 16; wQ++) XQ[wQ] = WQ[wQ] - Math.floor(WQ[wQ]);
        return QQ.markAsUpdated(), QQ
      }
      clone() {
        const QQ = new BQ;
        return QQ.WH(this), QQ
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let QQ = gQ(this._m[0]);
        for (let WQ = 1; WQ < 16; WQ++) QQ = 397 * QQ ^ gQ(this._m[WQ]);
        return QQ
      }
      decomposeToTransformNode(QQ) {
        return QQ.rotationQuaternion = QQ.rotationQuaternion || new jQ, this.decompose(QQ.oB, QQ.rotationQuaternion, QQ.position)
      }
      decompose(QQ, WQ, XQ, wQ) {
        let qQ = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return XQ && XQ.h_(0), QQ && QQ.h_(1), WQ && WQ.XQQ(0, 0, 0, 1), !0;
        const TQ = this._m;
        if (XQ && XQ.XQQ(TQ[12], TQ[13], TQ[14]), (QQ = QQ || yQ.vj[0]).x = Math.sqrt(TQ[0] * TQ[0] + TQ[1] * TQ[1] + TQ[2] * TQ[2]), QQ.y = Math.sqrt(TQ[4] * TQ[4] + TQ[5] * TQ[5] + TQ[6] * TQ[6]), QQ.z = Math.sqrt(TQ[8] * TQ[8] + TQ[9] * TQ[9] + TQ[10] * TQ[10]), wQ) {
          const WQ = (qQ ? wQ.absoluteScaling.x : wQ.oB.x) < 0 ? -1 : 1,
            XQ = (qQ ? wQ.absoluteScaling.y : wQ.oB.y) < 0 ? -1 : 1,
            TQ = (qQ ? wQ.absoluteScaling.z : wQ.oB.z) < 0 ? -1 : 1;
          QQ.x *= WQ, QQ.y *= XQ, QQ.z *= TQ
        } else this.determinant() <= 0 && (QQ.y *= -1);
        if (0 === QQ._x || 0 === QQ._y || 0 === QQ._z) return WQ && WQ.XQQ(0, 0, 0, 1), !1;
        if (WQ) {
          const XQ = 1 / QQ._x,
            wQ = 1 / QQ._y,
            qQ = 1 / QQ._z;
          BQ.FromValuesToRef(TQ[0] * XQ, TQ[1] * XQ, TQ[2] * XQ, 0, TQ[4] * wQ, TQ[5] * wQ, TQ[6] * wQ, 0, TQ[8] * qQ, TQ[9] * qQ, TQ[10] * qQ, 0, 0, 0, 0, 1, yQ.Matrix[0]), jQ.FromRotationMatrixToRef(yQ.Matrix[0], WQ)
        }
        return !0
      }
      getRow(QQ) {
        if (QQ < 0 || QQ > 3) return null;
        const WQ = 4 * QQ;
        return new IQ(this._m[WQ + 0], this._m[WQ + 1], this._m[WQ + 2], this._m[WQ + 3])
      }
      getRowToRef(QQ, WQ) {
        if (QQ >= 0 && QQ <= 3) {
          const XQ = 4 * QQ;
          WQ.x = this._m[XQ + 0], WQ.y = this._m[XQ + 1], WQ.z = this._m[XQ + 2], WQ.w = this._m[XQ + 3]
        }
        return WQ
      }
      setRow(QQ, WQ) {
        return this.setRowFromFloats(QQ, WQ.x, WQ.y, WQ.z, WQ.w)
      }
      transpose() {
        const QQ = new BQ;
        return BQ.TransposeToRef(this, QQ), QQ
      }
      transposeToRef(QQ) {
        return BQ.TransposeToRef(this, QQ), QQ
      }
      setRowFromFloats(QQ, WQ, XQ, wQ, qQ) {
        if (QQ < 0 || QQ > 3) return this;
        const TQ = 4 * QQ;
        return this._m[TQ + 0] = WQ, this._m[TQ + 1] = XQ, this._m[TQ + 2] = wQ, this._m[TQ + 3] = qQ, this.markAsUpdated(), this
      }
      scale(QQ) {
        const WQ = new BQ;
        return this.scaleToRef(QQ, WQ), WQ
      }
      scaleToRef(QQ, WQ) {
        for (let XQ = 0; XQ < 16; XQ++) WQ._m[XQ] = this._m[XQ] * QQ;
        return WQ.markAsUpdated(), WQ
      }
      scaleAndAddToRef(QQ, WQ) {
        for (let XQ = 0; XQ < 16; XQ++) WQ._m[XQ] += this._m[XQ] * QQ;
        return WQ.markAsUpdated(), WQ
      }
      scaleInPlace(QQ) {
        const WQ = this._m;
        for (let XQ = 0; XQ < 16; XQ++) WQ[XQ] *= QQ;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(QQ) {
        const WQ = yQ.Matrix[0];
        this.invertToRef(WQ), WQ.transposeToRef(QQ);
        const XQ = QQ._m;
        return BQ.FromValuesToRef(XQ[0], XQ[1], XQ[2], 0, XQ[4], XQ[5], XQ[6], 0, XQ[8], XQ[9], XQ[10], 0, 0, 0, 0, 1, QQ), QQ
      }
      getRotationMatrix() {
        const QQ = new BQ;
        return this.getRotationMatrixToRef(QQ), QQ
      }
      getRotationMatrixToRef(QQ) {
        const WQ = yQ.vj[0];
        if (!this.decompose(WQ)) return BQ.IdentityToRef(QQ), QQ;
        const XQ = this._m,
          wQ = 1 / WQ._x,
          qQ = 1 / WQ._y,
          TQ = 1 / WQ._z;
        return BQ.FromValuesToRef(XQ[0] * wQ, XQ[1] * wQ, XQ[2] * wQ, 0, XQ[4] * qQ, XQ[5] * qQ, XQ[6] * qQ, 0, XQ[8] * TQ, XQ[9] * TQ, XQ[10] * TQ, 0, 0, 0, 0, 1, QQ), QQ
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
        return this.multiplyToRef(DQ, this), this
      }
      static FromArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const XQ = new BQ;
        return BQ.FromArrayToRef(QQ, WQ, XQ), XQ
      }
      static FromArrayToRef(QQ, WQ, XQ) {
        for (let wQ = 0; wQ < 16; wQ++) XQ._m[wQ] = QQ[wQ + WQ];
        return XQ.markAsUpdated(), XQ
      }
      static FromFloat32ArrayToRefScaled(QQ, WQ, XQ, wQ) {
        return wQ._m[0] = QQ[0 + WQ] * XQ, wQ._m[1] = QQ[1 + WQ] * XQ, wQ._m[2] = QQ[2 + WQ] * XQ, wQ._m[3] = QQ[3 + WQ] * XQ, wQ._m[4] = QQ[4 + WQ] * XQ, wQ._m[5] = QQ[5 + WQ] * XQ, wQ._m[6] = QQ[6 + WQ] * XQ, wQ._m[7] = QQ[7 + WQ] * XQ, wQ._m[8] = QQ[8 + WQ] * XQ, wQ._m[9] = QQ[9 + WQ] * XQ, wQ._m[10] = QQ[10 + WQ] * XQ, wQ._m[11] = QQ[11 + WQ] * XQ, wQ._m[12] = QQ[12 + WQ] * XQ, wQ._m[13] = QQ[13 + WQ] * XQ, wQ._m[14] = QQ[14 + WQ] * XQ, wQ._m[15] = QQ[15 + WQ] * XQ, wQ.markAsUpdated(), wQ
      }
      static get IdentityReadOnly() {
        return BQ._IdentityReadOnly
      }
      static FromValuesToRef(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, BQ, yQ) {
        const VQ = yQ._m;
        VQ[0] = QQ, VQ[1] = WQ, VQ[2] = XQ, VQ[3] = wQ, VQ[4] = qQ, VQ[5] = TQ, VQ[6] = zQ, VQ[7] = sQ, VQ[8] = FQ, VQ[9] = PQ, VQ[10] = gQ, VQ[11] = JQ, VQ[12] = rQ, VQ[13] = IQ, VQ[14] = jQ, VQ[15] = BQ, yQ.markAsUpdated()
      }
      static FromValues(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ, JQ, rQ, IQ, jQ, yQ) {
        const VQ = new BQ,
          DQ = VQ._m;
        return DQ[0] = QQ, DQ[1] = WQ, DQ[2] = XQ, DQ[3] = wQ, DQ[4] = qQ, DQ[5] = TQ, DQ[6] = zQ, DQ[7] = sQ, DQ[8] = FQ, DQ[9] = PQ, DQ[10] = gQ, DQ[11] = JQ, DQ[12] = rQ, DQ[13] = IQ, DQ[14] = jQ, DQ[15] = yQ, VQ.markAsUpdated(), VQ
      }
      static Compose(QQ, WQ, XQ) {
        const wQ = new BQ;
        return BQ.ComposeToRef(QQ, WQ, XQ, wQ), wQ
      }
      static ComposeToRef(QQ, WQ, XQ, wQ) {
        const qQ = wQ._m,
          TQ = WQ._x,
          zQ = WQ._y,
          sQ = WQ._z,
          FQ = WQ._w,
          PQ = TQ + TQ,
          gQ = zQ + zQ,
          JQ = sQ + sQ,
          rQ = TQ * PQ,
          IQ = TQ * gQ,
          jQ = TQ * JQ,
          BQ = zQ * gQ,
          yQ = zQ * JQ,
          VQ = sQ * JQ,
          DQ = FQ * PQ,
          pQ = FQ * gQ,
          GQ = FQ * JQ,
          UQ = QQ._x,
          bQ = QQ._y,
          vQ = QQ._z;
        return qQ[0] = (1 - (BQ + VQ)) * UQ, qQ[1] = (IQ + GQ) * UQ, qQ[2] = (jQ - pQ) * UQ, qQ[3] = 0, qQ[4] = (IQ - GQ) * bQ, qQ[5] = (1 - (rQ + VQ)) * bQ, qQ[6] = (yQ + DQ) * bQ, qQ[7] = 0, qQ[8] = (jQ + pQ) * vQ, qQ[9] = (yQ - DQ) * vQ, qQ[10] = (1 - (rQ + BQ)) * vQ, qQ[11] = 0, qQ[12] = XQ._x, qQ[13] = XQ._y, qQ[14] = XQ._z, qQ[15] = 1, wQ.markAsUpdated(), wQ
      }
      static Identity() {
        const QQ = BQ.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return QQ._updateIdentityStatus(!0), QQ
      }
      static IdentityToRef(QQ) {
        return BQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, QQ), QQ._updateIdentityStatus(!0), QQ
      }
      static Zero() {
        const QQ = BQ.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return QQ._updateIdentityStatus(!1), QQ
      }
      static RotationX(QQ) {
        const WQ = new BQ;
        return BQ.RotationXToRef(QQ, WQ), WQ
      }
      static Invert(QQ) {
        const WQ = new BQ;
        return QQ.invertToRef(WQ), WQ
      }
      static RotationXToRef(QQ, WQ) {
        const XQ = Math.sin(QQ),
          wQ = Math.cos(QQ);
        return BQ.FromValuesToRef(1, 0, 0, 0, 0, wQ, XQ, 0, 0, -XQ, wQ, 0, 0, 0, 0, 1, WQ), WQ._updateIdentityStatus(1 === wQ && 0 === XQ), WQ
      }
      static RotationY(QQ) {
        const WQ = new BQ;
        return BQ.RotationYToRef(QQ, WQ), WQ
      }
      static RotationYToRef(QQ, WQ) {
        const XQ = Math.sin(QQ),
          wQ = Math.cos(QQ);
        return BQ.FromValuesToRef(wQ, 0, -XQ, 0, 0, 1, 0, 0, XQ, 0, wQ, 0, 0, 0, 0, 1, WQ), WQ._updateIdentityStatus(1 === wQ && 0 === XQ), WQ
      }
      static RotationZ(QQ) {
        const WQ = new BQ;
        return BQ.RotationZToRef(QQ, WQ), WQ
      }
      static RotationZToRef(QQ, WQ) {
        const XQ = Math.sin(QQ),
          wQ = Math.cos(QQ);
        return BQ.FromValuesToRef(wQ, XQ, 0, 0, -XQ, wQ, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, WQ), WQ._updateIdentityStatus(1 === wQ && 0 === XQ), WQ
      }
      static RotationAxis(QQ, WQ) {
        const XQ = new BQ;
        return BQ.RotationAxisToRef(QQ, WQ, XQ), XQ
      }
      static RotationAxisToRef(QQ, WQ, XQ) {
        const wQ = Math.sin(-WQ),
          qQ = Math.cos(-WQ),
          TQ = 1 - qQ;
        QQ = QQ.normalizeToRef(yQ.vj[0]);
        const zQ = XQ._m;
        return zQ[0] = QQ._x * QQ._x * TQ + qQ, zQ[1] = QQ._x * QQ._y * TQ - QQ._z * wQ, zQ[2] = QQ._x * QQ._z * TQ + QQ._y * wQ, zQ[3] = 0, zQ[4] = QQ._y * QQ._x * TQ + QQ._z * wQ, zQ[5] = QQ._y * QQ._y * TQ + qQ, zQ[6] = QQ._y * QQ._z * TQ - QQ._x * wQ, zQ[7] = 0, zQ[8] = QQ._z * QQ._x * TQ - QQ._y * wQ, zQ[9] = QQ._z * QQ._y * TQ + QQ._x * wQ, zQ[10] = QQ._z * QQ._z * TQ + qQ, zQ[11] = 0, zQ[12] = 0, zQ[13] = 0, zQ[14] = 0, zQ[15] = 1, XQ.markAsUpdated(), XQ
      }
      static RotationAlignToRef(QQ, WQ, XQ) {
        let qQ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const TQ = rQ.Dot(WQ, QQ),
          zQ = XQ._m;
        if (TQ < -1 + wQ.b) zQ[0] = -1, zQ[1] = 0, zQ[2] = 0, zQ[3] = 0, zQ[4] = 0, zQ[5] = qQ ? 1 : -1, zQ[6] = 0, zQ[7] = 0, zQ[8] = 0, zQ[9] = 0, zQ[10] = qQ ? -1 : 1, zQ[11] = 0;
        else {
          const XQ = rQ.Cross(WQ, QQ),
            wQ = 1 / (1 + TQ);
          zQ[0] = XQ._x * XQ._x * wQ + TQ, zQ[1] = XQ._y * XQ._x * wQ - XQ._z, zQ[2] = XQ._z * XQ._x * wQ + XQ._y, zQ[3] = 0, zQ[4] = XQ._x * XQ._y * wQ + XQ._z, zQ[5] = XQ._y * XQ._y * wQ + TQ, zQ[6] = XQ._z * XQ._y * wQ - XQ._x, zQ[7] = 0, zQ[8] = XQ._x * XQ._z * wQ - XQ._y, zQ[9] = XQ._y * XQ._z * wQ + XQ._x, zQ[10] = XQ._z * XQ._z * wQ + TQ, zQ[11] = 0
        }
        return zQ[12] = 0, zQ[13] = 0, zQ[14] = 0, zQ[15] = 1, XQ.markAsUpdated(), XQ
      }
      static RotationYawPitchRoll(QQ, WQ, XQ) {
        const wQ = new BQ;
        return BQ.RotationYawPitchRollToRef(QQ, WQ, XQ, wQ), wQ
      }
      static RotationYawPitchRollToRef(QQ, WQ, XQ, wQ) {
        return jQ.RotationYawPitchRollToRef(QQ, WQ, XQ, yQ.Quaternion[0]), yQ.Quaternion[0].toRotationMatrix(wQ), wQ
      }
      static Scaling(QQ, WQ, XQ) {
        const wQ = new BQ;
        return BQ.ScalingToRef(QQ, WQ, XQ, wQ), wQ
      }
      static ScalingToRef(QQ, WQ, XQ, wQ) {
        return BQ.FromValuesToRef(QQ, 0, 0, 0, 0, WQ, 0, 0, 0, 0, XQ, 0, 0, 0, 0, 1, wQ), wQ._updateIdentityStatus(1 === QQ && 1 === WQ && 1 === XQ), wQ
      }
      static Translation(QQ, WQ, XQ) {
        const wQ = new BQ;
        return BQ.TranslationToRef(QQ, WQ, XQ, wQ), wQ
      }
      static TranslationToRef(QQ, WQ, XQ, wQ) {
        return BQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, QQ, WQ, XQ, 1, wQ), wQ._updateIdentityStatus(0 === QQ && 0 === WQ && 0 === XQ), wQ
      }
      static Lerp(QQ, WQ, XQ) {
        const wQ = new BQ;
        return BQ.LerpToRef(QQ, WQ, XQ, wQ), wQ
      }
      static LerpToRef(QQ, WQ, XQ, wQ) {
        const qQ = wQ._m,
          TQ = QQ.m,
          zQ = WQ.m;
        for (let sQ = 0; sQ < 16; sQ++) qQ[sQ] = TQ[sQ] * (1 - XQ) + zQ[sQ] * XQ;
        return wQ.markAsUpdated(), wQ
      }
      static DecomposeLerp(QQ, WQ, XQ) {
        const wQ = new BQ;
        return BQ.DecomposeLerpToRef(QQ, WQ, XQ, wQ), wQ
      }
      static DecomposeLerpToRef(QQ, WQ, XQ, wQ) {
        const qQ = yQ.vj[0],
          TQ = yQ.Quaternion[0],
          zQ = yQ.vj[1];
        QQ.decompose(qQ, TQ, zQ);
        const sQ = yQ.vj[2],
          FQ = yQ.Quaternion[1],
          PQ = yQ.vj[3];
        WQ.decompose(sQ, FQ, PQ);
        const gQ = yQ.vj[4];
        rQ.LerpToRef(qQ, sQ, XQ, gQ);
        const JQ = yQ.Quaternion[2];
        jQ.SlerpToRef(TQ, FQ, XQ, JQ);
        const IQ = yQ.vj[5];
        return rQ.LerpToRef(zQ, PQ, XQ, IQ), BQ.ComposeToRef(gQ, JQ, IQ, wQ), wQ
      }
      static LookAtLH(QQ, WQ, XQ) {
        const wQ = new BQ;
        return BQ.LookAtLHToRef(QQ, WQ, XQ, wQ), wQ
      }
      static LookAtLHToRef(QQ, WQ, XQ, wQ) {
        const qQ = yQ.vj[0],
          TQ = yQ.vj[1],
          zQ = yQ.vj[2];
        WQ.subtractToRef(QQ, zQ), zQ.normalize(), rQ.CrossToRef(XQ, zQ, qQ);
        const sQ = qQ.lengthSquared();
        0 === sQ ? qQ.x = 1 : qQ.normalizeFromLength(Math.sqrt(sQ)), rQ.CrossToRef(zQ, qQ, TQ), TQ.normalize();
        const FQ = -rQ.Dot(qQ, QQ),
          PQ = -rQ.Dot(TQ, QQ),
          gQ = -rQ.Dot(zQ, QQ);
        return BQ.FromValuesToRef(qQ._x, TQ._x, zQ._x, 0, qQ._y, TQ._y, zQ._y, 0, qQ._z, TQ._z, zQ._z, 0, FQ, PQ, gQ, 1, wQ), wQ
      }
      static LookAtRH(QQ, WQ, XQ) {
        const wQ = new BQ;
        return BQ.LookAtRHToRef(QQ, WQ, XQ, wQ), wQ
      }
      static LookAtRHToRef(QQ, WQ, XQ, wQ) {
        const qQ = yQ.vj[0],
          TQ = yQ.vj[1],
          zQ = yQ.vj[2];
        QQ.subtractToRef(WQ, zQ), zQ.normalize(), rQ.CrossToRef(XQ, zQ, qQ);
        const sQ = qQ.lengthSquared();
        0 === sQ ? qQ.x = 1 : qQ.normalizeFromLength(Math.sqrt(sQ)), rQ.CrossToRef(zQ, qQ, TQ), TQ.normalize();
        const FQ = -rQ.Dot(qQ, QQ),
          PQ = -rQ.Dot(TQ, QQ),
          gQ = -rQ.Dot(zQ, QQ);
        return BQ.FromValuesToRef(qQ._x, TQ._x, zQ._x, 0, qQ._y, TQ._y, zQ._y, 0, qQ._z, TQ._z, zQ._z, 0, FQ, PQ, gQ, 1, wQ), wQ
      }
      static LookDirectionLH(QQ, WQ) {
        const XQ = new BQ;
        return BQ.LookDirectionLHToRef(QQ, WQ, XQ), XQ
      }
      static LookDirectionLHToRef(QQ, WQ, XQ) {
        const wQ = yQ.vj[0];
        wQ.WH(QQ), wQ.scaleInPlace(-1);
        const qQ = yQ.vj[1];
        return rQ.CrossToRef(WQ, wQ, qQ), BQ.FromValuesToRef(qQ._x, qQ._y, qQ._z, 0, WQ._x, WQ._y, WQ._z, 0, wQ._x, wQ._y, wQ._z, 0, 0, 0, 0, 1, XQ), XQ
      }
      static LookDirectionRH(QQ, WQ) {
        const XQ = new BQ;
        return BQ.LookDirectionRHToRef(QQ, WQ, XQ), XQ
      }
      static LookDirectionRHToRef(QQ, WQ, XQ) {
        const wQ = yQ.vj[2];
        return rQ.CrossToRef(WQ, QQ, wQ), BQ.FromValuesToRef(wQ._x, wQ._y, wQ._z, 0, WQ._x, WQ._y, WQ._z, 0, QQ._x, QQ._y, QQ._z, 0, 0, 0, 0, 1, XQ), XQ
      }
      static OrthoLH(QQ, WQ, XQ, wQ, qQ) {
        const TQ = new BQ;
        return BQ.OrthoLHToRef(QQ, WQ, XQ, wQ, TQ, qQ), TQ
      }
      static OrthoLHToRef(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = 2 / QQ,
          sQ = 2 / WQ,
          FQ = 2 / (wQ - XQ),
          PQ = -(wQ + XQ) / (wQ - XQ);
        return BQ.FromValuesToRef(zQ, 0, 0, 0, 0, sQ, 0, 0, 0, 0, FQ, 0, 0, 0, PQ, 1, qQ), TQ && qQ.multiplyToRef(DQ, qQ), qQ._updateIdentityStatus(1 === zQ && 1 === sQ && 1 === FQ && 0 === PQ), qQ
      }
      static OrthoOffCenterLH(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        const sQ = new BQ;
        return BQ.OrthoOffCenterLHToRef(QQ, WQ, XQ, wQ, qQ, TQ, sQ, zQ), sQ
      }
      static OrthoOffCenterLHToRef(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        const FQ = 2 / (WQ - QQ),
          PQ = 2 / (wQ - XQ),
          gQ = 2 / (TQ - qQ),
          JQ = -(TQ + qQ) / (TQ - qQ),
          rQ = (QQ + WQ) / (QQ - WQ),
          IQ = (wQ + XQ) / (XQ - wQ);
        return BQ.FromValuesToRef(FQ, 0, 0, 0, 0, PQ, 0, 0, 0, 0, gQ, 0, rQ, IQ, JQ, 1, zQ), sQ && zQ.multiplyToRef(DQ, zQ), zQ.markAsUpdated(), zQ
      }
      static ObliqueOffCenterLHToRef(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
        const JQ = -zQ * Math.cos(sQ),
          rQ = -zQ * Math.sin(sQ);
        return BQ.TranslationToRef(0, 0, -FQ, yQ.Matrix[1]), BQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, JQ, rQ, 1, 0, 0, 0, 0, 1, yQ.Matrix[0]), yQ.Matrix[1].multiplyToRef(yQ.Matrix[0], yQ.Matrix[0]), BQ.TranslationToRef(0, 0, FQ, yQ.Matrix[1]), yQ.Matrix[0].multiplyToRef(yQ.Matrix[1], yQ.Matrix[0]), BQ.OrthoOffCenterLHToRef(QQ, WQ, XQ, wQ, qQ, TQ, PQ, gQ), yQ.Matrix[0].multiplyToRef(PQ, PQ), PQ
      }
      static OrthoOffCenterRH(QQ, WQ, XQ, wQ, qQ, TQ, zQ) {
        const sQ = new BQ;
        return BQ.OrthoOffCenterRHToRef(QQ, WQ, XQ, wQ, qQ, TQ, sQ, zQ), sQ
      }
      static OrthoOffCenterRHToRef(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ) {
        return BQ.OrthoOffCenterLHToRef(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ), zQ._m[10] *= -1, zQ
      }
      static ObliqueOffCenterRHToRef(QQ, WQ, XQ, wQ, qQ, TQ, zQ, sQ, FQ, PQ, gQ) {
        const JQ = zQ * Math.cos(sQ),
          rQ = zQ * Math.sin(sQ);
        return BQ.TranslationToRef(0, 0, FQ, yQ.Matrix[1]), BQ.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, JQ, rQ, 1, 0, 0, 0, 0, 1, yQ.Matrix[0]), yQ.Matrix[1].multiplyToRef(yQ.Matrix[0], yQ.Matrix[0]), BQ.TranslationToRef(0, 0, -FQ, yQ.Matrix[1]), yQ.Matrix[0].multiplyToRef(yQ.Matrix[1], yQ.Matrix[0]), BQ.OrthoOffCenterRHToRef(QQ, WQ, XQ, wQ, qQ, TQ, PQ, gQ), yQ.Matrix[0].multiplyToRef(PQ, PQ), PQ
      }
      static PerspectiveLH(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const zQ = new BQ,
          sQ = 2 * XQ / QQ,
          FQ = 2 * XQ / WQ,
          PQ = (wQ + XQ) / (wQ - XQ),
          gQ = -2 * wQ * XQ / (wQ - XQ),
          JQ = Math.tan(TQ);
        return BQ.FromValuesToRef(sQ, 0, 0, 0, 0, FQ, 0, JQ, 0, 0, PQ, 1, 0, 0, gQ, 0, zQ), qQ && zQ.multiplyToRef(DQ, zQ), zQ._updateIdentityStatus(!1), zQ
      }
      static PerspectiveFovLH(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const sQ = new BQ;
        return BQ.PerspectiveFovLHToRef(QQ, WQ, XQ, wQ, sQ, !0, qQ, TQ, zQ), sQ
      }
      static PerspectiveFovLHToRef(QQ, WQ, XQ, wQ, qQ) {
        let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          zQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const PQ = XQ,
          gQ = wQ,
          JQ = 1 / Math.tan(.5 * QQ),
          rQ = TQ ? JQ / WQ : JQ,
          IQ = TQ ? JQ : JQ * WQ,
          jQ = FQ && 0 === PQ ? -1 : 0 !== gQ ? (gQ + PQ) / (gQ - PQ) : 1,
          yQ = FQ && 0 === PQ ? 2 * gQ : 0 !== gQ ? -2 * gQ * PQ / (gQ - PQ) : -2 * PQ,
          VQ = Math.tan(sQ);
        return BQ.FromValuesToRef(rQ, 0, 0, 0, 0, IQ, 0, VQ, 0, 0, jQ, 1, 0, 0, yQ, 0, qQ), zQ && qQ.multiplyToRef(DQ, qQ), qQ._updateIdentityStatus(!1), qQ
      }
      static PerspectiveFovReverseLHToRef(QQ, WQ, XQ, wQ, qQ) {
        let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          zQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const FQ = 1 / Math.tan(.5 * QQ),
          PQ = TQ ? FQ / WQ : FQ,
          gQ = TQ ? FQ : FQ * WQ,
          JQ = Math.tan(sQ);
        return BQ.FromValuesToRef(PQ, 0, 0, 0, 0, gQ, 0, JQ, 0, 0, -XQ, 1, 0, 0, 1, 0, qQ), zQ && qQ.multiplyToRef(DQ, qQ), qQ._updateIdentityStatus(!1), qQ
      }
      static PerspectiveFovRH(QQ, WQ, XQ, wQ, qQ) {
        let TQ = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          zQ = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const sQ = new BQ;
        return BQ.PerspectiveFovRHToRef(QQ, WQ, XQ, wQ, sQ, !0, qQ, TQ, zQ), sQ
      }
      static PerspectiveFovRHToRef(QQ, WQ, XQ, wQ, qQ) {
        let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          zQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          FQ = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const PQ = XQ,
          gQ = wQ,
          JQ = 1 / Math.tan(.5 * QQ),
          rQ = TQ ? JQ / WQ : JQ,
          IQ = TQ ? JQ : JQ * WQ,
          jQ = FQ && 0 === PQ ? 1 : 0 !== gQ ? -(gQ + PQ) / (gQ - PQ) : -1,
          yQ = FQ && 0 === PQ ? 2 * gQ : 0 !== gQ ? -2 * gQ * PQ / (gQ - PQ) : -2 * PQ,
          VQ = Math.tan(sQ);
        return BQ.FromValuesToRef(rQ, 0, 0, 0, 0, IQ, 0, VQ, 0, 0, jQ, -1, 0, 0, yQ, 0, qQ), zQ && qQ.multiplyToRef(DQ, qQ), qQ._updateIdentityStatus(!1), qQ
      }
      static PerspectiveFovReverseRHToRef(QQ, WQ, XQ, wQ, qQ) {
        let TQ = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          zQ = arguments.length > 6 ? arguments[6] : void 0,
          sQ = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const FQ = 1 / Math.tan(.5 * QQ),
          PQ = TQ ? FQ / WQ : FQ,
          gQ = TQ ? FQ : FQ * WQ,
          JQ = Math.tan(sQ);
        return BQ.FromValuesToRef(PQ, 0, 0, 0, 0, gQ, 0, JQ, 0, 0, -XQ, -1, 0, 0, -1, 0, qQ), zQ && qQ.multiplyToRef(DQ, qQ), qQ._updateIdentityStatus(!1), qQ
      }
      static GetFinalMatrix(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = QQ.width,
          sQ = QQ.height,
          FQ = QQ.x,
          PQ = QQ.y,
          gQ = BQ.FromValues(zQ / 2, 0, 0, 0, 0, -sQ / 2, 0, 0, 0, 0, TQ - qQ, 0, FQ + zQ / 2, sQ / 2 + PQ, qQ, 1),
          JQ = new BQ;
        return WQ.multiplyToRef(XQ, JQ), JQ.multiplyToRef(wQ, JQ), JQ.multiplyToRef(gQ, JQ)
      }
      static GetAsMatrix2x2(QQ) {
        const WQ = QQ.m,
          XQ = [WQ[0], WQ[1], WQ[4], WQ[5]];
        return TQ.e.MatrixUse64Bits ? XQ : new Float32Array(XQ)
      }
      static GetAsMatrix3x3(QQ) {
        const WQ = QQ.m,
          XQ = [WQ[0], WQ[1], WQ[2], WQ[4], WQ[5], WQ[6], WQ[8], WQ[9], WQ[10]];
        return TQ.e.MatrixUse64Bits ? XQ : new Float32Array(XQ)
      }
      static Transpose(QQ) {
        const WQ = new BQ;
        return BQ.TransposeToRef(QQ, WQ), WQ
      }
      static TransposeToRef(QQ, WQ) {
        const XQ = QQ.m,
          wQ = XQ[0],
          qQ = XQ[4],
          TQ = XQ[8],
          zQ = XQ[12],
          sQ = XQ[1],
          FQ = XQ[5],
          PQ = XQ[9],
          gQ = XQ[13],
          JQ = XQ[2],
          rQ = XQ[6],
          IQ = XQ[10],
          jQ = XQ[14],
          BQ = XQ[3],
          yQ = XQ[7],
          VQ = XQ[11],
          DQ = XQ[15],
          pQ = WQ._m;
        return pQ[0] = wQ, pQ[1] = qQ, pQ[2] = TQ, pQ[3] = zQ, pQ[4] = sQ, pQ[5] = FQ, pQ[6] = PQ, pQ[7] = gQ, pQ[8] = JQ, pQ[9] = rQ, pQ[10] = IQ, pQ[11] = jQ, pQ[12] = BQ, pQ[13] = yQ, pQ[14] = VQ, pQ[15] = DQ, WQ.markAsUpdated(), WQ._updateIdentityStatus(QQ._isIdentity, QQ._isIdentityDirty), WQ
      }
      static Reflection(QQ) {
        const WQ = new BQ;
        return BQ.ReflectionToRef(QQ, WQ), WQ
      }
      static ReflectionToRef(QQ, WQ) {
        QQ.normalize();
        const XQ = QQ.normal.x,
          wQ = QQ.normal.y,
          qQ = QQ.normal.z,
          TQ = -2 * XQ,
          zQ = -2 * wQ,
          sQ = -2 * qQ;
        return BQ.FromValuesToRef(TQ * XQ + 1, zQ * XQ, sQ * XQ, 0, TQ * wQ, zQ * wQ + 1, sQ * wQ, 0, TQ * qQ, zQ * qQ, sQ * qQ + 1, 0, TQ * QQ.d, zQ * QQ.d, sQ * QQ.d, 1, WQ), WQ
      }
      static FromXYZAxesToRef(QQ, WQ, XQ, wQ) {
        return BQ.FromValuesToRef(QQ._x, QQ._y, QQ._z, 0, WQ._x, WQ._y, WQ._z, 0, XQ._x, XQ._y, XQ._z, 0, 0, 0, 0, 1, wQ), wQ
      }
      static FromQuaternionToRef(QQ, WQ) {
        const XQ = QQ._x * QQ._x,
          wQ = QQ._y * QQ._y,
          qQ = QQ._z * QQ._z,
          TQ = QQ._x * QQ._y,
          zQ = QQ._z * QQ._w,
          sQ = QQ._z * QQ._x,
          FQ = QQ._y * QQ._w,
          PQ = QQ._y * QQ._z,
          gQ = QQ._x * QQ._w;
        return WQ._m[0] = 1 - 2 * (wQ + qQ), WQ._m[1] = 2 * (TQ + zQ), WQ._m[2] = 2 * (sQ - FQ), WQ._m[3] = 0, WQ._m[4] = 2 * (TQ - zQ), WQ._m[5] = 1 - 2 * (qQ + XQ), WQ._m[6] = 2 * (PQ + gQ), WQ._m[7] = 0, WQ._m[8] = 2 * (sQ + FQ), WQ._m[9] = 2 * (PQ - gQ), WQ._m[10] = 1 - 2 * (wQ + XQ), WQ._m[11] = 0, WQ._m[12] = 0, WQ._m[13] = 0, WQ._m[14] = 0, WQ._m[15] = 1, WQ.markAsUpdated(), WQ
      }
    }
    BQ._IdentityReadOnly = BQ.Identity();
    class yQ {}
    yQ.vj = (0, qQ.e)(11, rQ.Zero), yQ.Matrix = (0, qQ.e)(2, BQ.Identity), yQ.Quaternion = (0, qQ.e)(3, jQ.Zero);
    class VQ {}
    VQ.Vector2 = (0, qQ.e)(3, JQ.Zero), VQ.vj = (0, qQ.e)(13, rQ.Zero), VQ.Vector4 = (0, qQ.e)(3, IQ.Zero), VQ.Quaternion = (0, qQ.e)(3, jQ.Zero), VQ.Matrix = (0, qQ.e)(8, BQ.Identity);
    const DQ = BQ.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let pQ = !1;

    function GQ() {
      pQ || (pQ = !0, Object.defineProperties(JQ.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(rQ.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(IQ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(jQ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(BQ.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, PQ.d)("BABYLON.Vector2", JQ), (0, PQ.d)("BABYLON.Vector3", rQ), (0, PQ.d)("BABYLON.Vector4", IQ), (0, PQ.d)("BABYLON.Matrix", BQ))
    }
  },
  37399: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    const wQ = "undefined" !== typeof WeakRef;
    class qQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(QQ, WQ, XQ, wQ)
      }
      initialize(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = QQ, this.skipNextObservers = WQ, this.target = XQ, this.currentTarget = wQ, this
      }
    }
    class TQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = QQ, this.mask = WQ, this.scope = XQ, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(QQ)
      }
    }
    class zQ {
      static FromPromise(QQ, WQ) {
        const XQ = new zQ;
        return QQ.then((QQ => {
          XQ.notifyObservers(QQ)
        })).catch((QQ => {
          if (!WQ) throw QQ;
          WQ.notifyObservers(QQ)
        })), XQ
      }
      get observers() {
        return this._observers
      }
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = WQ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qQ(0), QQ && (this._onObserverAdded = QQ)
      }
      add(QQ) {
        let WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          XQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!QQ) return null;
        const qQ = new TQ(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        qQ.unregisterOnNextCall = XQ, WQ ? this._observers.unshift(qQ) : this._observers.push(qQ), this._onObserverAdded && this._onObserverAdded(qQ), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(qQ, this._lastNotifiedValue);
        const zQ = wQ ? new WeakRef(this) : {
          deref: () => this
        };
        return qQ._remove = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const WQ = zQ.deref();
          WQ && (QQ ? WQ.remove(qQ) : WQ._remove(qQ))
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
      removeCallback(QQ, WQ) {
        for (let XQ = 0; XQ < this._observers.length; XQ++) {
          const wQ = this._observers[XQ];
          if (!wQ._willBeUnregistered && (wQ.callback === QQ && (!WQ || WQ === wQ.scope))) return this._deferUnregister(wQ), !0
        }
        return !1
      }
      _deferUnregister(QQ) {
        QQ._willBeUnregistered || (this._numObserversMarkedAsDeleted++, QQ.unregisterOnNextCall = !1, QQ._willBeUnregistered = !0, setTimeout((() => {
          this._remove(QQ)
        }), 0))
      }
      _remove(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!QQ) return !1;
        const XQ = this._observers.indexOf(QQ);
        return -1 !== XQ && (WQ && this._numObserversMarkedAsDeleted--, this._observers.splice(XQ, 1), !0)
      }
      makeObserverTopPriority(QQ) {
        this._remove(QQ, !1), this._observers.unshift(QQ)
      }
      makeObserverBottomPriority(QQ) {
        this._remove(QQ, !1), this._observers.push(QQ)
      }
      notifyObservers(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = QQ), !this._observers.length) return !0;
        const TQ = this._eventState;
        TQ.mask = WQ, TQ.target = XQ, TQ.currentTarget = wQ, TQ.skipNextObservers = !1, TQ.lastReturnValue = QQ, TQ.userInfo = qQ;
        for (const zQ of this._observers)
          if (!zQ._willBeUnregistered && (zQ.mask & WQ && (zQ.unregisterOnNextCall && this._deferUnregister(zQ), zQ.scope ? TQ.lastReturnValue = zQ.callback.apply(zQ.scope, [QQ, TQ]) : TQ.lastReturnValue = zQ.callback(QQ, TQ)), TQ.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WQ), QQ._willBeUnregistered) return;
        const wQ = this._eventState;
        wQ.mask = XQ, wQ.skipNextObservers = !1, QQ.unregisterOnNextCall && this._deferUnregister(QQ), QQ.callback(WQ, wQ)
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
        const QQ = new zQ;
        return QQ._observers = this._observers.slice(0), QQ
      }
      hasSpecificMask() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const WQ of this._observers)
          if (WQ.mask & QQ || WQ.mask === QQ) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);