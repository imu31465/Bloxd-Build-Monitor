export const id = 263;
export const ids = [263];
export const modules = {
  38224: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(38233);
    class tR {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    tR.Instances = [], tR.OnEnginesDisposedObservable = new yR.b, tR._LastCreatedScene = null, tR.UseFallbackTexture = !0, tR.FallbackTexture = ""
  },
  38219: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static SetMatrixPrecision(RR) {
        if (yR.MatrixTrackPrecisionChange = !1, RR && !yR.MatrixUse64Bits && yR.MatrixTrackedMatrices)
          for (let JR = 0; JR < yR.MatrixTrackedMatrices.length; ++JR) {
            const RR = yR.MatrixTrackedMatrices[JR],
              GR = RR._m;
            RR._m = new Array(16);
            for (let JR = 0; JR < 16; ++JR) RR._m[JR] = GR[JR]
          }
        yR.MatrixUse64Bits = RR, yR.MatrixCurrentType = yR.MatrixUse64Bits ? Array : Float32Array, yR.MatrixTrackedMatrices = null
      }
    }
    yR.MatrixUse64Bits = !1, yR.MatrixTrackPrecisionChange = !0, yR.MatrixCurrentType = Float32Array, yR.MatrixTrackedMatrices = []
  },
  38247: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => qR,
      e: () => fR,
      h: () => iR,
      k: () => yR,
      n: () => uR,
      r: () => ZR
    });
    class yR {}

    function tR(RR) {
      RR.updateFlag = yR._UpdateFlagSeed++
    }

    function uR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const tR = RR.QtR(),
        uR = JR.QtR(),
        ZR = tR[0],
        qR = tR[1],
        iR = tR[2],
        fR = tR[3],
        VR = tR[4],
        KR = tR[5],
        wR = tR[6],
        rR = tR[7],
        eR = tR[8],
        aR = tR[9],
        LR = tR[10],
        nR = tR[11],
        UR = tR[12],
        WR = tR[13],
        AR = tR[14],
        CR = tR[15],
        XR = uR[0],
        MR = uR[1],
        BR = uR[2],
        lR = uR[3],
        pR = uR[4],
        gR = uR[5],
        bR = uR[6],
        vR = uR[7],
        OR = uR[8],
        xR = uR[9],
        NR = uR[10],
        DR = uR[11],
        HR = uR[12],
        oR = uR[13],
        cR = uR[14],
        PR = uR[15];
      GR[yR] = ZR * XR + qR * pR + iR * OR + fR * HR, GR[yR + 1] = ZR * MR + qR * gR + iR * xR + fR * oR, GR[yR + 2] = ZR * BR + qR * bR + iR * NR + fR * cR, GR[yR + 3] = ZR * lR + qR * vR + iR * DR + fR * PR, GR[yR + 4] = VR * XR + KR * pR + wR * OR + rR * HR, GR[yR + 5] = VR * MR + KR * gR + wR * xR + rR * oR, GR[yR + 6] = VR * BR + KR * bR + wR * NR + rR * cR, GR[yR + 7] = VR * lR + KR * vR + wR * DR + rR * PR, GR[yR + 8] = eR * XR + aR * pR + LR * OR + nR * HR, GR[yR + 9] = eR * MR + aR * gR + LR * xR + nR * oR, GR[yR + 10] = eR * BR + aR * bR + LR * NR + nR * cR, GR[yR + 11] = eR * lR + aR * vR + LR * DR + nR * PR, GR[yR + 12] = UR * XR + WR * pR + AR * OR + CR * HR, GR[yR + 13] = UR * MR + WR * gR + AR * xR + CR * oR, GR[yR + 14] = UR * BR + WR * bR + AR * NR + CR * cR, GR[yR + 15] = UR * lR + WR * vR + AR * DR + CR * PR
    }

    function ZR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      uR(RR, JR, GR.QtR(), yR), tR(GR)
    }

    function qR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const yR = RR.QtR();
      JR[GR] = yR[0], JR[GR + 1] = yR[1], JR[GR + 2] = yR[2], JR[GR + 3] = yR[3], JR[GR + 4] = yR[4], JR[GR + 5] = yR[5], JR[GR + 6] = yR[6], JR[GR + 7] = yR[7], JR[GR + 8] = yR[8], JR[GR + 9] = yR[9], JR[GR + 10] = yR[10], JR[GR + 11] = yR[11], JR[GR + 12] = yR[12], JR[GR + 13] = yR[13], JR[GR + 14] = yR[14], JR[GR + 15] = yR[15]
    }

    function iR(RR, JR) {
      const GR = fR(RR, JR.QtR());
      return GR && tR(JR), GR
    }

    function fR(RR, JR) {
      const GR = RR.QtR(),
        yR = GR[0],
        tR = GR[1],
        uR = GR[2],
        ZR = GR[3],
        qR = GR[4],
        iR = GR[5],
        fR = GR[6],
        VR = GR[7],
        KR = GR[8],
        wR = GR[9],
        rR = GR[10],
        eR = GR[11],
        aR = GR[12],
        LR = GR[13],
        nR = GR[14],
        UR = GR[15],
        WR = rR * UR - nR * eR,
        AR = wR * UR - LR * eR,
        CR = wR * nR - LR * rR,
        XR = KR * UR - aR * eR,
        MR = KR * nR - rR * aR,
        BR = KR * LR - aR * wR,
        lR = +(iR * WR - fR * AR + VR * CR),
        pR = -(qR * WR - fR * XR + VR * MR),
        gR = +(qR * AR - iR * XR + VR * BR),
        bR = -(qR * CR - iR * MR + fR * BR),
        vR = yR * lR + tR * pR + uR * gR + ZR * bR;
      if (0 === vR) return !1;
      const OR = 1 / vR,
        xR = fR * UR - nR * VR,
        NR = iR * UR - LR * VR,
        DR = iR * nR - LR * fR,
        HR = qR * UR - aR * VR,
        oR = qR * nR - aR * fR,
        cR = qR * LR - aR * iR,
        PR = fR * eR - rR * VR,
        IR = iR * eR - wR * VR,
        mR = iR * rR - wR * fR,
        zR = qR * eR - KR * VR,
        SR = qR * rR - KR * fR,
        jR = qR * wR - KR * iR,
        dR = -(tR * WR - uR * AR + ZR * CR),
        ER = +(yR * WR - uR * XR + ZR * MR),
        YR = -(yR * AR - tR * XR + ZR * BR),
        kR = +(yR * CR - tR * MR + uR * BR),
        QR = +(tR * xR - uR * NR + ZR * DR),
        FR = -(yR * xR - uR * HR + ZR * oR),
        TR = +(yR * NR - tR * HR + ZR * cR),
        sR = -(yR * DR - tR * oR + uR * cR),
        hR = -(tR * PR - uR * IR + ZR * mR),
        RJ = +(yR * PR - uR * zR + ZR * SR),
        JJ = -(yR * IR - tR * zR + ZR * jR),
        GJ = +(yR * mR - tR * SR + uR * jR);
      return JR[0] = lR * OR, JR[1] = dR * OR, JR[2] = QR * OR, JR[3] = hR * OR, JR[4] = pR * OR, JR[5] = ER * OR, JR[6] = FR * OR, JR[7] = RJ * OR, JR[8] = gR * OR, JR[9] = YR * OR, JR[10] = TR * OR, JR[11] = JJ * OR, JR[12] = bR * OR, JR[13] = kR * OR, JR[14] = sR * OR, JR[15] = GJ * OR, !0
    }
    yR._UpdateFlagSeed = 0
  },
  38204: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => aR,
      i: () => eR,
      j: () => AR,
      l: () => nR,
      n: () => KR,
      r: () => wR,
      s: () => rR
    });
    var yR = GR(38213),
      tR = GR(38217),
      uR = GR(38219),
      ZR = GR(38224),
      qR = GR(38239),
      iR = GR(38247),
      fR = GR(38253);
    const VR = RR => parseInt(RR.toString().replace(/\W/g, ""));
    class KR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = RR, this.y = JR
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let RR = VR(this.x);
        return RR = 397 * RR ^ VR(this.y), RR
      }
      toArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return RR[JR] = this.x, RR[JR + 1] = this.y, this
      }
      yK(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return KR.FromArrayToRef(RR, JR, this), this
      }
      QtR() {
        return [this.x, this.y]
      }
      vN(RR) {
        return this.x = RR.x, this.y = RR.y, this
      }
      VJR(RR, JR) {
        return this.x = RR, this.y = JR, this
      }
      set(RR, JR) {
        return this.VJR(RR, JR)
      }
      NRR(RR) {
        return this.VJR(RR, RR)
      }
      add(RR) {
        return new KR(this.x + RR.x, this.y + RR.y)
      }
      addToRef(RR, JR) {
        return JR.x = this.x + RR.x, JR.y = this.y + RR.y, JR
      }
      addInPlace(RR) {
        return this.x += RR.x, this.y += RR.y, this
      }
      addInPlaceFromFloats(RR, JR) {
        return this.x += RR, this.y += JR, this
      }
      addVector3(RR) {
        return new KR(this.x + RR.x, this.y + RR.y)
      }
      subtract(RR) {
        return new KR(this.x - RR.x, this.y - RR.y)
      }
      subtractToRef(RR, JR) {
        return JR.x = this.x - RR.x, JR.y = this.y - RR.y, JR
      }
      VuR(RR) {
        return this.x -= RR.x, this.y -= RR.y, this
      }
      multiplyInPlace(RR) {
        return this.x *= RR.x, this.y *= RR.y, this
      }
      multiply(RR) {
        return new KR(this.x * RR.x, this.y * RR.y)
      }
      multiplyToRef(RR, JR) {
        return JR.x = this.x * RR.x, JR.y = this.y * RR.y, JR
      }
      multiplyByFloats(RR, JR) {
        return new KR(this.x * RR, this.y * JR)
      }
      divide(RR) {
        return new KR(this.x / RR.x, this.y / RR.y)
      }
      divideToRef(RR, JR) {
        return JR.x = this.x / RR.x, JR.y = this.y / RR.y, JR
      }
      divideInPlace(RR) {
        return this.x = this.x / RR.x, this.y = this.y / RR.y, this
      }
      minimizeInPlace(RR) {
        return this.minimizeInPlaceFromFloats(RR.x, RR.y)
      }
      maximizeInPlace(RR) {
        return this.maximizeInPlaceFromFloats(RR.x, RR.y)
      }
      minimizeInPlaceFromFloats(RR, JR) {
        return this.x = Math.min(RR, this.x), this.y = Math.min(JR, this.y), this
      }
      maximizeInPlaceFromFloats(RR, JR) {
        return this.x = Math.max(RR, this.x), this.y = Math.max(JR, this.y), this
      }
      subtractFromFloats(RR, JR) {
        return new KR(this.x - RR, this.y - JR)
      }
      subtractFromFloatsToRef(RR, JR, GR) {
        return GR.x = this.x - RR, GR.y = this.y - JR, GR
      }
      Re() {
        return new KR(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(RR) {
        return RR.x = -this.x, RR.y = -this.y, RR
      }
      scaleInPlace(RR) {
        return this.x *= RR, this.y *= RR, this
      }
      scale(RR) {
        return new KR(this.x * RR, this.y * RR)
      }
      scaleToRef(RR, JR) {
        return JR.x = this.x * RR, JR.y = this.y * RR, JR
      }
      scaleAndAddToRef(RR, JR) {
        return JR.x += this.x * RR, JR.y += this.y * RR, JR
      }
      equals(RR) {
        return RR && this.x === RR.x && this.y === RR.y
      }
      equalsWithEpsilon(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.c;
        return RR && (0, qR.WithinEpsilon)(this.x, RR.x, JR) && (0, qR.WithinEpsilon)(this.y, RR.y, JR)
      }
      JiR(RR, JR) {
        return this.x === RR && this.y === JR
      }
      floor() {
        return new KR(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(RR) {
        return RR.x = Math.floor(this.x), RR.y = Math.floor(this.y), RR
      }
      fract() {
        return new KR(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(RR) {
        return RR.x = this.x - Math.floor(this.x), RR.y = this.y - Math.floor(this.y), RR
      }
      rotate(RR) {
        return this.rotateToRef(RR, new KR)
      }
      rotateToRef(RR, JR) {
        const GR = Math.cos(RR),
          yR = Math.sin(RR);
        return JR.x = GR * this.x - yR * this.y, JR.y = yR * this.x + GR * this.y, JR
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
      normalizeFromLength(RR) {
        return 0 === RR || 1 === RR ? this : this.scaleInPlace(1 / RR)
      }
      normalizeToNew() {
        const RR = new KR;
        return this.normalizeToRef(RR), RR
      }
      normalizeToRef(RR) {
        const JR = this.length();
        return 0 === JR || 1 === JR ? (RR.x = this.x, RR.y = this.y, RR) : this.scaleToRef(1 / JR, RR)
      }
      clone() {
        return new KR(this.x, this.y)
      }
      dot(RR) {
        return this.x * RR.x + this.y * RR.y
      }
      static Zero() {
        return new KR(0, 0)
      }
      static One() {
        return new KR(1, 1)
      }
      static Random() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new KR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
      }
      static RandomToRef() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).VJR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
      }
      static get ZeroReadOnly() {
        return KR._ZeroReadOnly
      }
      static FromArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new KR(RR[JR], RR[JR + 1])
      }
      static FromArrayToRef(RR, JR, GR) {
        return GR.x = RR[JR], GR.y = RR[JR + 1], GR
      }
      static FromFloatsToRef(RR, JR, GR) {
        return GR.VJR(RR, JR), GR
      }
      static CatmullRom(RR, JR, GR, yR, tR) {
        const uR = tR * tR,
          ZR = tR * uR,
          qR = .5 * (2 * JR.x + (-RR.x + GR.x) * tR + (2 * RR.x - 5 * JR.x + 4 * GR.x - yR.x) * uR + (-RR.x + 3 * JR.x - 3 * GR.x + yR.x) * ZR),
          iR = .5 * (2 * JR.y + (-RR.y + GR.y) * tR + (2 * RR.y - 5 * JR.y + 4 * GR.y - yR.y) * uR + (-RR.y + 3 * JR.y - 3 * GR.y + yR.y) * ZR);
        return new KR(qR, iR)
      }
      static ClampToRef(RR, JR, GR, yR) {
        return yR.x = (0, qR.Clamp)(RR.x, JR.x, GR.x), yR.y = (0, qR.Clamp)(RR.y, JR.y, GR.y), yR
      }
      static Clamp(RR, JR, GR) {
        const yR = (0, qR.Clamp)(RR.x, JR.x, GR.x),
          tR = (0, qR.Clamp)(RR.y, JR.y, GR.y);
        return new KR(yR, tR)
      }
      static Hermite(RR, JR, GR, yR, tR) {
        const uR = tR * tR,
          ZR = tR * uR,
          qR = 2 * ZR - 3 * uR + 1,
          iR = -2 * ZR + 3 * uR,
          fR = ZR - 2 * uR + tR,
          VR = ZR - uR,
          wR = RR.x * qR + GR.x * iR + JR.x * fR + yR.x * VR,
          rR = RR.y * qR + GR.y * iR + JR.y * fR + yR.y * VR;
        return new KR(wR, rR)
      }
      static Hermite1stDerivative(RR, JR, GR, yR, tR) {
        return this.Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, new KR)
      }
      static Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR) {
        const ZR = tR * tR;
        return uR.x = 6 * (ZR - tR) * RR.x + (3 * ZR - 4 * tR + 1) * JR.x + 6 * (-ZR + tR) * GR.x + (3 * ZR - 2 * tR) * yR.x, uR.y = 6 * (ZR - tR) * RR.y + (3 * ZR - 4 * tR + 1) * JR.y + 6 * (-ZR + tR) * GR.y + (3 * ZR - 2 * tR) * yR.y, uR
      }
      static Lerp(RR, JR, GR) {
        return KR.LerpToRef(RR, JR, GR, new KR)
      }
      static LerpToRef(RR, JR, GR, yR) {
        return yR.x = RR.x + (JR.x - RR.x) * GR, yR.y = RR.y + (JR.y - RR.y) * GR, yR
      }
      static Dot(RR, JR) {
        return RR.x * JR.x + RR.y * JR.y
      }
      static Normalize(RR) {
        return KR.NormalizeToRef(RR, new KR)
      }
      static NormalizeToRef(RR, JR) {
        return RR.normalizeToRef(JR), JR
      }
      static Minimize(RR, JR) {
        const GR = RR.x < JR.x ? RR.x : JR.x,
          yR = RR.y < JR.y ? RR.y : JR.y;
        return new KR(GR, yR)
      }
      static Maximize(RR, JR) {
        const GR = RR.x > JR.x ? RR.x : JR.x,
          yR = RR.y > JR.y ? RR.y : JR.y;
        return new KR(GR, yR)
      }
      static Transform(RR, JR) {
        return KR.TransformToRef(RR, JR, new KR)
      }
      static TransformToRef(RR, JR, GR) {
        const yR = JR.m,
          tR = RR.x * yR[0] + RR.y * yR[4] + yR[12],
          uR = RR.x * yR[1] + RR.y * yR[5] + yR[13];
        return GR.x = tR, GR.y = uR, GR
      }
      static PointInTriangle(RR, JR, GR, yR) {
        const tR = .5 * (-GR.y * yR.x + JR.y * (-GR.x + yR.x) + JR.x * (GR.y - yR.y) + GR.x * yR.y),
          uR = tR < 0 ? -1 : 1,
          ZR = (JR.y * yR.x - JR.x * yR.y + (yR.y - JR.y) * RR.x + (JR.x - yR.x) * RR.y) * uR,
          qR = (JR.x * GR.y - JR.y * GR.x + (JR.y - GR.y) * RR.x + (GR.x - JR.x) * RR.y) * uR;
        return ZR > 0 && qR > 0 && ZR + qR < 2 * tR * uR
      }
      static Distance(RR, JR) {
        return Math.sqrt(KR.DistanceSquared(RR, JR))
      }
      static DistanceSquared(RR, JR) {
        const GR = RR.x - JR.x,
          yR = RR.y - JR.y;
        return GR * GR + yR * yR
      }
      static Center(RR, JR) {
        return KR.CenterToRef(RR, JR, new KR)
      }
      static CenterToRef(RR, JR, GR) {
        return GR.VJR((RR.x + JR.x) / 2, (RR.y + JR.y) / 2)
      }
      static DistanceOfPointFromSegment(RR, JR, GR) {
        const yR = KR.DistanceSquared(JR, GR);
        if (0 === yR) return KR.Distance(RR, JR);
        const tR = GR.subtract(JR),
          uR = Math.max(0, Math.min(1, KR.Dot(RR.subtract(JR), tR) / yR)),
          ZR = JR.add(tR.multiplyByFloats(uR, uR));
        return KR.Distance(RR, ZR)
      }
    }
    KR._V8PerformanceHack = new KR(.5, .5), KR._ZeroReadOnly = KR.Zero();
    class wR {
      get x() {
        return this._x
      }
      set x(RR) {
        this._x = RR, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(RR) {
        this._y = RR, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(RR) {
        this._z = RR, this._isDirty = !0
      }
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = RR, this._y = JR, this._z = GR
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Fe"
      }
      getHashCode() {
        let RR = VR(this._x);
        return RR = 397 * RR ^ VR(this._y), RR = 397 * RR ^ VR(this._z), RR
      }
      QtR() {
        return [this._x, this._y, this._z]
      }
      toArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return RR[JR] = this._x, RR[JR + 1] = this._y, RR[JR + 2] = this._z, this
      }
      yK(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return wR.FromArrayToRef(RR, JR, this), this
      }
      toQuaternion() {
        return eR.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(RR) {
        return this._x += RR._x, this._y += RR._y, this._z += RR._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(RR, JR, GR) {
        return this._x += RR, this._y += JR, this._z += GR, this._isDirty = !0, this
      }
      add(RR) {
        return new wR(this._x + RR._x, this._y + RR._y, this._z + RR._z)
      }
      addToRef(RR, JR) {
        return JR._x = this._x + RR._x, JR._y = this._y + RR._y, JR._z = this._z + RR._z, JR._isDirty = !0, JR
      }
      VuR(RR) {
        return this._x -= RR._x, this._y -= RR._y, this._z -= RR._z, this._isDirty = !0, this
      }
      subtract(RR) {
        return new wR(this._x - RR._x, this._y - RR._y, this._z - RR._z)
      }
      subtractToRef(RR, JR) {
        return this.subtractFromFloatsToRef(RR._x, RR._y, RR._z, JR)
      }
      subtractFromFloats(RR, JR, GR) {
        return new wR(this._x - RR, this._y - JR, this._z - GR)
      }
      subtractFromFloatsToRef(RR, JR, GR, yR) {
        return yR._x = this._x - RR, yR._y = this._y - JR, yR._z = this._z - GR, yR._isDirty = !0, yR
      }
      Re() {
        return new wR(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(RR) {
        return RR._x = -1 * this._x, RR._y = -1 * this._y, RR._z = -1 * this._z, RR._isDirty = !0, RR
      }
      scaleInPlace(RR) {
        return this._x *= RR, this._y *= RR, this._z *= RR, this._isDirty = !0, this
      }
      scale(RR) {
        return new wR(this._x * RR, this._y * RR, this._z * RR)
      }
      scaleToRef(RR, JR) {
        return JR._x = this._x * RR, JR._y = this._y * RR, JR._z = this._z * RR, JR._isDirty = !0, JR
      }
      getNormalToRef(RR) {
        const JR = this.length();
        let GR = Math.acos(this._y / JR);
        const yR = Math.atan2(this._z, this._x);
        GR > Math.PI / 2 ? GR -= Math.PI / 2 : GR += Math.PI / 2;
        const tR = JR * Math.sin(GR) * Math.cos(yR),
          uR = JR * Math.cos(GR),
          ZR = JR * Math.sin(GR) * Math.sin(yR);
        return RR.set(tR, uR, ZR), RR
      }
      applyRotationQuaternionToRef(RR, JR) {
        const GR = this._x,
          yR = this._y,
          tR = this._z,
          uR = RR._x,
          ZR = RR._y,
          qR = RR._z,
          iR = RR._w,
          fR = 2 * (ZR * tR - qR * yR),
          VR = 2 * (qR * GR - uR * tR),
          KR = 2 * (uR * yR - ZR * GR);
        return JR._x = GR + iR * fR + ZR * KR - qR * VR, JR._y = yR + iR * VR + qR * fR - uR * KR, JR._z = tR + iR * KR + uR * VR - ZR * fR, JR._isDirty = !0, JR
      }
      applyRotationQuaternionInPlace(RR) {
        return this.applyRotationQuaternionToRef(RR, this)
      }
      applyRotationQuaternion(RR) {
        return this.applyRotationQuaternionToRef(RR, new wR)
      }
      scaleAndAddToRef(RR, JR) {
        return JR._x += this._x * RR, JR._y += this._y * RR, JR._z += this._z * RR, JR._isDirty = !0, JR
      }
      projectOnPlane(RR, JR) {
        return this.projectOnPlaneToRef(RR, JR, new wR)
      }
      projectOnPlaneToRef(RR, JR, GR) {
        const yR = RR.normal,
          tR = RR.d,
          uR = LR.Fe[0];
        this.subtractToRef(JR, uR), uR.normalize();
        const ZR = wR.Dot(uR, yR);
        if (Math.abs(ZR) < 1e-10) GR.NRR(1 / 0);
        else {
          const RR = -(wR.Dot(JR, yR) + tR) / ZR,
            qR = uR.scaleInPlace(RR);
          JR.addToRef(qR, GR)
        }
        return GR
      }
      equals(RR) {
        return RR && this._x === RR._x && this._y === RR._y && this._z === RR._z
      }
      equalsWithEpsilon(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.c;
        return RR && (0, qR.WithinEpsilon)(this._x, RR._x, JR) && (0, qR.WithinEpsilon)(this._y, RR._y, JR) && (0, qR.WithinEpsilon)(this._z, RR._z, JR)
      }
      JiR(RR, JR, GR) {
        return this._x === RR && this._y === JR && this._z === GR
      }
      multiplyInPlace(RR) {
        return this._x *= RR._x, this._y *= RR._y, this._z *= RR._z, this._isDirty = !0, this
      }
      multiply(RR) {
        return this.multiplyByFloats(RR._x, RR._y, RR._z)
      }
      multiplyToRef(RR, JR) {
        return JR._x = this._x * RR._x, JR._y = this._y * RR._y, JR._z = this._z * RR._z, JR._isDirty = !0, JR
      }
      multiplyByFloats(RR, JR, GR) {
        return new wR(this._x * RR, this._y * JR, this._z * GR)
      }
      divide(RR) {
        return new wR(this._x / RR._x, this._y / RR._y, this._z / RR._z)
      }
      divideToRef(RR, JR) {
        return JR._x = this._x / RR._x, JR._y = this._y / RR._y, JR._z = this._z / RR._z, JR._isDirty = !0, JR
      }
      divideInPlace(RR) {
        return this._x = this._x / RR._x, this._y = this._y / RR._y, this._z = this._z / RR._z, this._isDirty = !0, this
      }
      minimizeInPlace(RR) {
        return this.minimizeInPlaceFromFloats(RR._x, RR._y, RR._z)
      }
      maximizeInPlace(RR) {
        return this.maximizeInPlaceFromFloats(RR._x, RR._y, RR._z)
      }
      minimizeInPlaceFromFloats(RR, JR, GR) {
        return RR < this._x && (this.x = RR), JR < this._y && (this.y = JR), GR < this._z && (this.z = GR), this
      }
      maximizeInPlaceFromFloats(RR, JR, GR) {
        return RR > this._x && (this.x = RR), JR > this._y && (this.y = JR), GR > this._z && (this.z = GR), this
      }
      isNonUniformWithinEpsilon(RR) {
        const JR = Math.abs(this._x),
          GR = Math.abs(this._y);
        if (!(0, qR.WithinEpsilon)(JR, GR, RR)) return !0;
        const yR = Math.abs(this._z);
        return !(0, qR.WithinEpsilon)(JR, yR, RR) || !(0, qR.WithinEpsilon)(GR, yR, RR)
      }
      get isNonUniform() {
        const RR = Math.abs(this._x);
        if (RR !== Math.abs(this._y)) return !0;
        return RR !== Math.abs(this._z)
      }
      floorToRef(RR) {
        return RR._x = Math.floor(this._x), RR._y = Math.floor(this._y), RR._z = Math.floor(this._z), RR._isDirty = !0, RR
      }
      floor() {
        return new wR(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(RR) {
        return RR._x = this._x - Math.floor(this._x), RR._y = this._y - Math.floor(this._y), RR._z = this._z - Math.floor(this._z), RR._isDirty = !0, RR
      }
      fract() {
        return new wR(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(RR) {
        if ("xyz" === (RR = RR.toLowerCase())) return this;
        const JR = LR.Fe[0].vN(this);
        return this.x = JR[RR[0]], this.y = JR[RR[1]], this.z = JR[RR[2]], this
      }
      rotateByQuaternionToRef(RR, JR) {
        return RR.toRotationMatrix(LR.Matrix[0]), wR.TransformCoordinatesToRef(this, LR.Matrix[0], JR), JR
      }
      rotateByQuaternionAroundPointToRef(RR, JR, GR) {
        return this.subtractToRef(JR, LR.Fe[0]), LR.Fe[0].rotateByQuaternionToRef(RR, LR.Fe[0]), JR.addToRef(LR.Fe[0], GR), GR
      }
      cross(RR) {
        return wR.CrossToRef(this, RR, new wR)
      }
      normalizeFromLength(RR) {
        return 0 === RR || 1 === RR ? this : this.scaleInPlace(1 / RR)
      }
      normalizeToNew() {
        return this.normalizeToRef(new wR)
      }
      normalizeToRef(RR) {
        const JR = this.length();
        return 0 === JR || 1 === JR ? (RR._x = this._x, RR._y = this._y, RR._z = this._z, RR._isDirty = !0, RR) : this.scaleToRef(1 / JR, RR)
      }
      clone() {
        return new wR(this._x, this._y, this._z)
      }
      vN(RR) {
        return this.VJR(RR._x, RR._y, RR._z)
      }
      VJR(RR, JR, GR) {
        return this._x = RR, this._y = JR, this._z = GR, this._isDirty = !0, this
      }
      set(RR, JR, GR) {
        return this.VJR(RR, JR, GR)
      }
      NRR(RR) {
        return this._x = this._y = this._z = RR, this._isDirty = !0, this
      }
      static GetClipFactor(RR, JR, GR, yR) {
        const tR = wR.Dot(RR, GR);
        return (tR - yR) / (tR - wR.Dot(JR, GR))
      }
      static GetAngleBetweenVectors(RR, JR, GR) {
        const yR = RR.normalizeToRef(LR.Fe[1]),
          tR = JR.normalizeToRef(LR.Fe[2]);
        let uR = wR.Dot(yR, tR);
        uR = (0, qR.Clamp)(uR, -1, 1);
        const ZR = Math.acos(uR),
          iR = LR.Fe[3];
        return wR.CrossToRef(yR, tR, iR), wR.Dot(iR, GR) > 0 ? isNaN(ZR) ? 0 : ZR : isNaN(ZR) ? -Math.PI : -Math.acos(uR)
      }
      static GetAngleBetweenVectorsOnPlane(RR, JR, GR) {
        LR.Fe[0].vN(RR);
        const yR = LR.Fe[0];
        LR.Fe[1].vN(JR);
        const tR = LR.Fe[1];
        LR.Fe[2].vN(GR);
        const uR = LR.Fe[2],
          ZR = LR.Fe[3],
          iR = LR.Fe[4];
        yR.normalize(), tR.normalize(), uR.normalize(), wR.CrossToRef(uR, yR, ZR), wR.CrossToRef(ZR, uR, iR);
        const fR = Math.atan2(wR.Dot(tR, ZR), wR.Dot(tR, iR));
        return (0, qR.NormalizeRadians)(fR)
      }
      static PitchYawRollToMoveBetweenPointsToRef(RR, JR, GR) {
        const yR = nR.Fe[0];
        return JR.subtractToRef(RR, yR), GR._y = Math.atan2(yR.x, yR.z) || 0, GR._x = Math.atan2(Math.sqrt(yR.x ** 2 + yR.z ** 2), yR.y) || 0, GR._z = 0, GR._isDirty = !0, GR
      }
      static PitchYawRollToMoveBetweenPoints(RR, JR) {
        const GR = wR.Zero();
        return wR.PitchYawRollToMoveBetweenPointsToRef(RR, JR, GR)
      }
      static SlerpToRef(RR, JR, GR, tR) {
        GR = (0, qR.Clamp)(GR, 0, 1);
        const uR = LR.Fe[0],
          ZR = LR.Fe[1];
        uR.vN(RR);
        const iR = uR.length();
        uR.normalizeFromLength(iR), ZR.vN(JR);
        const fR = ZR.length();
        ZR.normalizeFromLength(fR);
        const VR = wR.Dot(uR, ZR);
        let KR, rR;
        if (VR < 1 - yR.c) {
          const RR = Math.acos(VR),
            JR = 1 / Math.sin(RR);
          KR = Math.sin((1 - GR) * RR) * JR, rR = Math.sin(GR * RR) * JR
        } else KR = 1 - GR, rR = GR;
        return uR.scaleInPlace(KR), ZR.scaleInPlace(rR), tR.vN(uR).addInPlace(ZR), tR.scaleInPlace((0, qR.Lerp)(iR, fR, GR)), tR
      }
      static SmoothToRef(RR, JR, GR, yR, tR) {
        return wR.SlerpToRef(RR, JR, 0 === yR ? 1 : GR / yR, tR), tR
      }
      static FromArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new wR(RR[JR], RR[JR + 1], RR[JR + 2])
      }
      static FromFloatArray(RR, JR) {
        return wR.FromArray(RR, JR)
      }
      static FromArrayToRef(RR, JR, GR) {
        return GR._x = RR[JR], GR._y = RR[JR + 1], GR._z = RR[JR + 2], GR._isDirty = !0, GR
      }
      static FromFloatArrayToRef(RR, JR, GR) {
        return wR.FromArrayToRef(RR, JR, GR)
      }
      static FromFloatsToRef(RR, JR, GR, yR) {
        return yR.VJR(RR, JR, GR), yR
      }
      static Zero() {
        return new wR(0, 0, 0)
      }
      static One() {
        return new wR(1, 1, 1)
      }
      static Up() {
        return new wR(0, 1, 0)
      }
      static get UpReadOnly() {
        return wR._UpReadOnly
      }
      static get DownReadOnly() {
        return wR._DownReadOnly
      }
      static get RightReadOnly() {
        return wR._RightReadOnly
      }
      static get LeftReadOnly() {
        return wR._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return wR._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return wR._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return wR._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return wR._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return wR._ZeroReadOnly
      }
      static get OneReadOnly() {
        return wR._OneReadOnly
      }
      static Down() {
        return new wR(0, -1, 0)
      }
      static Forward() {
        return new wR(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new wR(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new wR(1, 0, 0)
      }
      static Left() {
        return new wR(-1, 0, 0)
      }
      static Random() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new wR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
      }
      static RandomToRef() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).VJR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
      }
      static TransformCoordinates(RR, JR) {
        const GR = wR.Zero();
        return wR.TransformCoordinatesToRef(RR, JR, GR), GR
      }
      static TransformCoordinatesToRef(RR, JR, GR) {
        return wR.TransformCoordinatesFromFloatsToRef(RR._x, RR._y, RR._z, JR, GR), GR
      }
      static TransformCoordinatesFromFloatsToRef(RR, JR, GR, yR, tR) {
        const uR = yR.m,
          ZR = RR * uR[0] + JR * uR[4] + GR * uR[8] + uR[12],
          qR = RR * uR[1] + JR * uR[5] + GR * uR[9] + uR[13],
          iR = RR * uR[2] + JR * uR[6] + GR * uR[10] + uR[14],
          fR = 1 / (RR * uR[3] + JR * uR[7] + GR * uR[11] + uR[15]);
        return tR._x = ZR * fR, tR._y = qR * fR, tR._z = iR * fR, tR._isDirty = !0, tR
      }
      static TransformNormal(RR, JR) {
        const GR = wR.Zero();
        return wR.TransformNormalToRef(RR, JR, GR), GR
      }
      static TransformNormalToRef(RR, JR, GR) {
        return this.TransformNormalFromFloatsToRef(RR._x, RR._y, RR._z, JR, GR), GR
      }
      static TransformNormalFromFloatsToRef(RR, JR, GR, yR, tR) {
        const uR = yR.m;
        return tR._x = RR * uR[0] + JR * uR[4] + GR * uR[8], tR._y = RR * uR[1] + JR * uR[5] + GR * uR[9], tR._z = RR * uR[2] + JR * uR[6] + GR * uR[10], tR._isDirty = !0, tR
      }
      static CatmullRom(RR, JR, GR, yR, tR) {
        const uR = tR * tR,
          ZR = tR * uR,
          qR = .5 * (2 * JR._x + (-RR._x + GR._x) * tR + (2 * RR._x - 5 * JR._x + 4 * GR._x - yR._x) * uR + (-RR._x + 3 * JR._x - 3 * GR._x + yR._x) * ZR),
          iR = .5 * (2 * JR._y + (-RR._y + GR._y) * tR + (2 * RR._y - 5 * JR._y + 4 * GR._y - yR._y) * uR + (-RR._y + 3 * JR._y - 3 * GR._y + yR._y) * ZR),
          fR = .5 * (2 * JR._z + (-RR._z + GR._z) * tR + (2 * RR._z - 5 * JR._z + 4 * GR._z - yR._z) * uR + (-RR._z + 3 * JR._z - 3 * GR._z + yR._z) * ZR);
        return new wR(qR, iR, fR)
      }
      static Clamp(RR, JR, GR) {
        const yR = new wR;
        return wR.ClampToRef(RR, JR, GR, yR), yR
      }
      static ClampToRef(RR, JR, GR, yR) {
        let tR = RR._x;
        tR = tR > GR._x ? GR._x : tR, tR = tR < JR._x ? JR._x : tR;
        let uR = RR._y;
        uR = uR > GR._y ? GR._y : uR, uR = uR < JR._y ? JR._y : uR;
        let ZR = RR._z;
        return ZR = ZR > GR._z ? GR._z : ZR, ZR = ZR < JR._z ? JR._z : ZR, yR.VJR(tR, uR, ZR), yR
      }
      static CheckExtends(RR, JR, GR) {
        JR.minimizeInPlace(RR), GR.maximizeInPlace(RR)
      }
      static Hermite(RR, JR, GR, yR, tR) {
        const uR = tR * tR,
          ZR = tR * uR,
          qR = 2 * ZR - 3 * uR + 1,
          iR = -2 * ZR + 3 * uR,
          fR = ZR - 2 * uR + tR,
          VR = ZR - uR,
          KR = RR._x * qR + GR._x * iR + JR._x * fR + yR._x * VR,
          rR = RR._y * qR + GR._y * iR + JR._y * fR + yR._y * VR,
          eR = RR._z * qR + GR._z * iR + JR._z * fR + yR._z * VR;
        return new wR(KR, rR, eR)
      }
      static Hermite1stDerivative(RR, JR, GR, yR, tR) {
        const uR = new wR;
        return this.Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR), uR
      }
      static Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR) {
        const ZR = tR * tR;
        return uR._x = 6 * (ZR - tR) * RR._x + (3 * ZR - 4 * tR + 1) * JR._x + 6 * (-ZR + tR) * GR._x + (3 * ZR - 2 * tR) * yR._x, uR._y = 6 * (ZR - tR) * RR._y + (3 * ZR - 4 * tR + 1) * JR._y + 6 * (-ZR + tR) * GR._y + (3 * ZR - 2 * tR) * yR._y, uR._z = 6 * (ZR - tR) * RR._z + (3 * ZR - 4 * tR + 1) * JR._z + 6 * (-ZR + tR) * GR._z + (3 * ZR - 2 * tR) * yR._z, uR._isDirty = !0, uR
      }
      static Lerp(RR, JR, GR) {
        const yR = new wR(0, 0, 0);
        return wR.LerpToRef(RR, JR, GR, yR), yR
      }
      static LerpToRef(RR, JR, GR, yR) {
        return yR._x = RR._x + (JR._x - RR._x) * GR, yR._y = RR._y + (JR._y - RR._y) * GR, yR._z = RR._z + (JR._z - RR._z) * GR, yR._isDirty = !0, yR
      }
      static Dot(RR, JR) {
        return RR._x * JR._x + RR._y * JR._y + RR._z * JR._z
      }
      dot(RR) {
        return this._x * RR._x + this._y * RR._y + this._z * RR._z
      }
      static Cross(RR, JR) {
        const GR = new wR;
        return wR.CrossToRef(RR, JR, GR), GR
      }
      static CrossToRef(RR, JR, GR) {
        const yR = RR._y * JR._z - RR._z * JR._y,
          tR = RR._z * JR._x - RR._x * JR._z,
          uR = RR._x * JR._y - RR._y * JR._x;
        return GR.VJR(yR, tR, uR), GR
      }
      static Normalize(RR) {
        const JR = wR.Zero();
        return wR.NormalizeToRef(RR, JR), JR
      }
      static NormalizeToRef(RR, JR) {
        return RR.normalizeToRef(JR), JR
      }
      static Project(RR, JR, GR, yR) {
        const tR = new wR;
        return wR.ProjectToRef(RR, JR, GR, yR, tR), tR
      }
      static ProjectToRef(RR, JR, GR, yR, tR) {
        const uR = yR.width,
          qR = yR.height,
          iR = yR.x,
          fR = yR.y,
          VR = LR.Matrix[1],
          KR = ZR.c.LastCreatedEngine?.isNDCHalfZRange,
          rR = KR ? 1 : .5,
          eR = KR ? 0 : .5;
        aR.FromValuesToRef(uR / 2, 0, 0, 0, 0, -qR / 2, 0, 0, 0, 0, rR, 0, iR + uR / 2, qR / 2 + fR, eR, 1, VR);
        const nR = LR.Matrix[0];
        return JR.multiplyToRef(GR, nR), nR.multiplyToRef(VR, nR), wR.TransformCoordinatesToRef(RR, nR, tR), tR
      }
      static Reflect(RR, JR) {
        return this.ReflectToRef(RR, JR, new wR)
      }
      static ReflectToRef(RR, JR, GR) {
        const yR = nR.Fe[0];
        return yR.vN(JR).scaleInPlace(2 * wR.Dot(RR, JR)), GR.vN(RR).VuR(yR)
      }
      static UnprojectFromTransform(RR, JR, GR, yR, tR) {
        return this.Unproject(RR, JR, GR, yR, tR, aR.IdentityReadOnly)
      }
      static Unproject(RR, JR, GR, yR, tR, uR) {
        const ZR = new wR;
        return wR.UnprojectToRef(RR, JR, GR, yR, tR, uR, ZR), ZR
      }
      static UnprojectToRef(RR, JR, GR, yR, tR, uR, ZR) {
        return wR.UnprojectFloatsToRef(RR._x, RR._y, RR._z, JR, GR, yR, tR, uR, ZR), ZR
      }
      static UnprojectFloatsToRef(RR, JR, GR, yR, tR, uR, qR, iR, fR) {
        const VR = LR.Matrix[0];
        uR.multiplyToRef(qR, VR), VR.multiplyToRef(iR, VR), VR.invert();
        const KR = LR.Fe[0];
        return KR.x = RR / yR * 2 - 1, KR.y = -(JR / tR * 2 - 1), ZR.c.LastCreatedEngine?.isNDCHalfZRange ? KR.z = GR : KR.z = 2 * GR - 1, wR.TransformCoordinatesToRef(KR, VR, fR), fR
      }
      static Minimize(RR, JR) {
        const GR = new wR;
        return GR.vN(RR), GR.minimizeInPlace(JR), GR
      }
      static Maximize(RR, JR) {
        const GR = new wR;
        return GR.vN(RR), GR.maximizeInPlace(JR), GR
      }
      static Distance(RR, JR) {
        return Math.sqrt(wR.DistanceSquared(RR, JR))
      }
      static DistanceSquared(RR, JR) {
        const GR = RR._x - JR._x,
          yR = RR._y - JR._y,
          tR = RR._z - JR._z;
        return GR * GR + yR * yR + tR * tR
      }
      static ProjectOnTriangleToRef(RR, JR, GR, tR, uR) {
        const ZR = LR.Fe[0],
          iR = LR.Fe[1],
          fR = LR.Fe[2],
          VR = LR.Fe[3],
          KR = LR.Fe[4];
        GR.subtractToRef(JR, ZR), tR.subtractToRef(JR, iR), tR.subtractToRef(GR, fR);
        const rR = ZR.length(),
          eR = iR.length(),
          aR = fR.length();
        if (rR < yR.c || eR < yR.c || aR < yR.c) return uR.vN(JR), wR.Distance(RR, JR);
        RR.subtractToRef(JR, KR), wR.CrossToRef(ZR, iR, VR);
        const nR = VR.length();
        if (nR < yR.c) return uR.vN(JR), wR.Distance(RR, JR);
        VR.normalizeFromLength(nR);
        let UR = KR.length();
        if (UR < yR.c) return uR.vN(JR), 0;
        KR.normalizeFromLength(UR);
        const WR = wR.Dot(VR, KR),
          AR = LR.Fe[5],
          CR = LR.Fe[6];
        AR.vN(VR).scaleInPlace(-UR * WR), CR.vN(RR).addInPlace(AR);
        const XR = LR.Fe[4],
          MR = LR.Fe[5],
          BR = LR.Fe[7],
          lR = LR.Fe[8];
        XR.vN(ZR).scaleInPlace(1 / rR), lR.vN(iR).scaleInPlace(1 / eR), XR.addInPlace(lR).scaleInPlace(-1), MR.vN(ZR).scaleInPlace(-1 / rR), lR.vN(fR).scaleInPlace(1 / aR), MR.addInPlace(lR).scaleInPlace(-1), BR.vN(fR).scaleInPlace(-1 / aR), lR.vN(iR).scaleInPlace(-1 / eR), BR.addInPlace(lR).scaleInPlace(-1);
        const pR = LR.Fe[9];
        let gR;
        pR.vN(CR).VuR(JR), wR.CrossToRef(XR, pR, lR), gR = wR.Dot(lR, VR);
        const bR = gR;
        pR.vN(CR).VuR(GR), wR.CrossToRef(MR, pR, lR), gR = wR.Dot(lR, VR);
        const vR = gR;
        pR.vN(CR).VuR(tR), wR.CrossToRef(BR, pR, lR), gR = wR.Dot(lR, VR);
        const OR = gR,
          xR = LR.Fe[10];
        let NR, DR;
        bR > 0 && vR < 0 ? (xR.vN(ZR), NR = JR, DR = GR) : vR > 0 && OR < 0 ? (xR.vN(fR), NR = GR, DR = tR) : (xR.vN(iR).scaleInPlace(-1), NR = tR, DR = JR);
        const HR = LR.Fe[9],
          oR = LR.Fe[4];
        NR.subtractToRef(CR, lR), DR.subtractToRef(CR, HR), wR.CrossToRef(lR, HR, oR);
        if (!(wR.Dot(oR, VR) < 0)) return uR.vN(CR), Math.abs(UR * WR);
        const cR = LR.Fe[5];
        wR.CrossToRef(xR, oR, cR), cR.normalize();
        const PR = LR.Fe[9];
        PR.vN(NR).VuR(CR);
        const IR = PR.length();
        if (IR < yR.c) return uR.vN(NR), wR.Distance(RR, NR);
        PR.normalizeFromLength(IR);
        const mR = wR.Dot(cR, PR),
          zR = LR.Fe[7];
        zR.vN(CR).addInPlace(cR.scaleInPlace(IR * mR)), lR.vN(zR).VuR(NR), UR = xR.length(), xR.normalizeFromLength(UR);
        let SR = wR.Dot(lR, xR) / Math.max(UR, yR.c);
        return SR = (0, qR.Clamp)(SR, 0, 1), zR.vN(NR).addInPlace(xR.scaleInPlace(SR * UR)), uR.vN(zR), wR.Distance(RR, zR)
      }
      static Center(RR, JR) {
        return wR.CenterToRef(RR, JR, wR.Zero())
      }
      static CenterToRef(RR, JR, GR) {
        return GR.VJR((RR._x + JR._x) / 2, (RR._y + JR._y) / 2, (RR._z + JR._z) / 2)
      }
      static RotationFromAxis(RR, JR, GR) {
        const yR = new wR;
        return wR.RotationFromAxisToRef(RR, JR, GR, yR), yR
      }
      static RotationFromAxisToRef(RR, JR, GR, yR) {
        const tR = LR.Quaternion[0];
        return eR.RotationQuaternionFromAxisToRef(RR, JR, GR, tR), tR.toEulerAnglesToRef(yR), yR
      }
    }
    wR._V8PerformanceHack = new wR(.5, .5, .5), wR._UpReadOnly = wR.Up(), wR._DownReadOnly = wR.Down(), wR._LeftHandedForwardReadOnly = wR.Forward(!1), wR._RightHandedForwardReadOnly = wR.Forward(!0), wR._LeftHandedBackwardReadOnly = wR.Backward(!1), wR._RightHandedBackwardReadOnly = wR.Backward(!0), wR._RightReadOnly = wR.Right(), wR._LeftReadOnly = wR.Left(), wR._ZeroReadOnly = wR.Zero(), wR._OneReadOnly = wR.One();
    class rR {
      get x() {
        return this._x
      }
      set x(RR) {
        this._x = RR, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(RR) {
        this._y = RR, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(RR) {
        this._z = RR, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(RR) {
        this._w = RR, this._isDirty = !0
      }
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = RR, this._y = JR, this._z = GR, this._w = yR
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let RR = VR(this._x);
        return RR = 397 * RR ^ VR(this._y), RR = 397 * RR ^ VR(this._z), RR = 397 * RR ^ VR(this._w), RR
      }
      QtR() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(RR, JR) {
        return void 0 === JR && (JR = 0), RR[JR] = this._x, RR[JR + 1] = this._y, RR[JR + 2] = this._z, RR[JR + 3] = this._w, this
      }
      yK(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rR.FromArrayToRef(RR, JR, this), this
      }
      addInPlace(RR) {
        return this.x += RR._x, this.y += RR._y, this.z += RR._z, this.w += RR._w, this
      }
      addInPlaceFromFloats(RR, JR, GR, yR) {
        return this.x += RR, this.y += JR, this.z += GR, this.w += yR, this
      }
      add(RR) {
        return new rR(this._x + RR.x, this._y + RR.y, this._z + RR.z, this._w + RR.w)
      }
      addToRef(RR, JR) {
        return JR.x = this._x + RR.x, JR.y = this._y + RR.y, JR.z = this._z + RR.z, JR.w = this._w + RR.w, JR
      }
      VuR(RR) {
        return this.x -= RR.x, this.y -= RR.y, this.z -= RR.z, this.w -= RR.w, this
      }
      subtract(RR) {
        return new rR(this._x - RR.x, this._y - RR.y, this._z - RR.z, this._w - RR.w)
      }
      subtractToRef(RR, JR) {
        return JR.x = this._x - RR.x, JR.y = this._y - RR.y, JR.z = this._z - RR.z, JR.w = this._w - RR.w, JR
      }
      subtractFromFloats(RR, JR, GR, yR) {
        return new rR(this._x - RR, this._y - JR, this._z - GR, this._w - yR)
      }
      subtractFromFloatsToRef(RR, JR, GR, yR, tR) {
        return tR.x = this._x - RR, tR.y = this._y - JR, tR.z = this._z - GR, tR.w = this._w - yR, tR
      }
      Re() {
        return new rR(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(RR) {
        return RR.x = -this._x, RR.y = -this._y, RR.z = -this._z, RR.w = -this._w, RR
      }
      scaleInPlace(RR) {
        return this.x *= RR, this.y *= RR, this.z *= RR, this.w *= RR, this
      }
      scale(RR) {
        return new rR(this._x * RR, this._y * RR, this._z * RR, this._w * RR)
      }
      scaleToRef(RR, JR) {
        return JR.x = this._x * RR, JR.y = this._y * RR, JR.z = this._z * RR, JR.w = this._w * RR, JR
      }
      scaleAndAddToRef(RR, JR) {
        return JR.x += this._x * RR, JR.y += this._y * RR, JR.z += this._z * RR, JR.w += this._w * RR, JR
      }
      equals(RR) {
        return RR && this._x === RR.x && this._y === RR.y && this._z === RR.z && this._w === RR.w
      }
      equalsWithEpsilon(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.c;
        return RR && (0, qR.WithinEpsilon)(this._x, RR.x, JR) && (0, qR.WithinEpsilon)(this._y, RR.y, JR) && (0, qR.WithinEpsilon)(this._z, RR.z, JR) && (0, qR.WithinEpsilon)(this._w, RR.w, JR)
      }
      JiR(RR, JR, GR, yR) {
        return this._x === RR && this._y === JR && this._z === GR && this._w === yR
      }
      multiplyInPlace(RR) {
        return this.x *= RR.x, this.y *= RR.y, this.z *= RR.z, this.w *= RR.w, this
      }
      multiply(RR) {
        return new rR(this._x * RR.x, this._y * RR.y, this._z * RR.z, this._w * RR.w)
      }
      multiplyToRef(RR, JR) {
        return JR.x = this._x * RR.x, JR.y = this._y * RR.y, JR.z = this._z * RR.z, JR.w = this._w * RR.w, JR
      }
      multiplyByFloats(RR, JR, GR, yR) {
        return new rR(this._x * RR, this._y * JR, this._z * GR, this._w * yR)
      }
      divide(RR) {
        return new rR(this._x / RR.x, this._y / RR.y, this._z / RR.z, this._w / RR.w)
      }
      divideToRef(RR, JR) {
        return JR.x = this._x / RR.x, JR.y = this._y / RR.y, JR.z = this._z / RR.z, JR.w = this._w / RR.w, JR
      }
      divideInPlace(RR) {
        return this.divideToRef(RR, this)
      }
      minimizeInPlace(RR) {
        return RR.x < this._x && (this.x = RR.x), RR.y < this._y && (this.y = RR.y), RR.z < this._z && (this.z = RR.z), RR.w < this._w && (this.w = RR.w), this
      }
      maximizeInPlace(RR) {
        return RR.x > this._x && (this.x = RR.x), RR.y > this._y && (this.y = RR.y), RR.z > this._z && (this.z = RR.z), RR.w > this._w && (this.w = RR.w), this
      }
      minimizeInPlaceFromFloats(RR, JR, GR, yR) {
        return this.x = Math.min(RR, this._x), this.y = Math.min(JR, this._y), this.z = Math.min(GR, this._z), this.w = Math.min(yR, this._w), this
      }
      maximizeInPlaceFromFloats(RR, JR, GR, yR) {
        return this.x = Math.max(RR, this._x), this.y = Math.max(JR, this._y), this.z = Math.max(GR, this._z), this.w = Math.max(yR, this._w), this
      }
      floorToRef(RR) {
        return RR.x = Math.floor(this._x), RR.y = Math.floor(this._y), RR.z = Math.floor(this._z), RR.w = Math.floor(this._w), RR
      }
      floor() {
        return new rR(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(RR) {
        return RR.x = this._x - Math.floor(this._x), RR.y = this._y - Math.floor(this._y), RR.z = this._z - Math.floor(this._z), RR.w = this._w - Math.floor(this._w), RR
      }
      fract() {
        return new rR(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(RR) {
        return 0 === RR || 1 === RR ? this : this.scaleInPlace(1 / RR)
      }
      normalizeToNew() {
        return this.normalizeToRef(new rR)
      }
      normalizeToRef(RR) {
        const JR = this.length();
        return 0 === JR || 1 === JR ? (RR.x = this._x, RR.y = this._y, RR.z = this._z, RR.w = this._w, RR) : this.scaleToRef(1 / JR, RR)
      }
      toVector3() {
        return new wR(this._x, this._y, this._z)
      }
      clone() {
        return new rR(this._x, this._y, this._z, this._w)
      }
      vN(RR) {
        return this.x = RR.x, this.y = RR.y, this.z = RR.z, this.w = RR.w, this
      }
      VJR(RR, JR, GR, yR) {
        return this.x = RR, this.y = JR, this.z = GR, this.w = yR, this
      }
      set(RR, JR, GR, yR) {
        return this.VJR(RR, JR, GR, yR)
      }
      NRR(RR) {
        return this.x = this.y = this.z = this.w = RR, this
      }
      dot(RR) {
        return this._x * RR.x + this._y * RR.y + this._z * RR.z + this._w * RR.w
      }
      static FromArray(RR, JR) {
        return JR || (JR = 0), new rR(RR[JR], RR[JR + 1], RR[JR + 2], RR[JR + 3])
      }
      static FromArrayToRef(RR, JR, GR) {
        return GR.x = RR[JR], GR.y = RR[JR + 1], GR.z = RR[JR + 2], GR.w = RR[JR + 3], GR
      }
      static FromFloatArrayToRef(RR, JR, GR) {
        return rR.FromArrayToRef(RR, JR, GR), GR
      }
      static FromFloatsToRef(RR, JR, GR, yR, tR) {
        return tR.x = RR, tR.y = JR, tR.z = GR, tR.w = yR, tR
      }
      static Zero() {
        return new rR(0, 0, 0, 0)
      }
      static One() {
        return new rR(1, 1, 1, 1)
      }
      static Random() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new rR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
      }
      static RandomToRef() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        return GR.x = (0, qR.RandomRange)(RR, JR), GR.y = (0, qR.RandomRange)(RR, JR), GR.z = (0, qR.RandomRange)(RR, JR), GR.w = (0, qR.RandomRange)(RR, JR), GR
      }
      static Clamp(RR, JR, GR) {
        return rR.ClampToRef(RR, JR, GR, new rR)
      }
      static ClampToRef(RR, JR, GR, yR) {
        return yR.x = (0, qR.Clamp)(RR.x, JR.x, GR.x), yR.y = (0, qR.Clamp)(RR.y, JR.y, GR.y), yR.z = (0, qR.Clamp)(RR.z, JR.z, GR.z), yR.w = (0, qR.Clamp)(RR.w, JR.w, GR.w), yR
      }
      static CheckExtends(RR, JR, GR) {
        JR.minimizeInPlace(RR), GR.maximizeInPlace(RR)
      }
      static get ZeroReadOnly() {
        return rR._ZeroReadOnly
      }
      static Normalize(RR) {
        return rR.NormalizeToRef(RR, new rR)
      }
      static NormalizeToRef(RR, JR) {
        return RR.normalizeToRef(JR), JR
      }
      static Minimize(RR, JR) {
        const GR = new rR;
        return GR.vN(RR), GR.minimizeInPlace(JR), GR
      }
      static Maximize(RR, JR) {
        const GR = new rR;
        return GR.vN(RR), GR.maximizeInPlace(JR), GR
      }
      static Distance(RR, JR) {
        return Math.sqrt(rR.DistanceSquared(RR, JR))
      }
      static DistanceSquared(RR, JR) {
        const GR = RR.x - JR.x,
          yR = RR.y - JR.y,
          tR = RR.z - JR.z,
          uR = RR.w - JR.w;
        return GR * GR + yR * yR + tR * tR + uR * uR
      }
      static Center(RR, JR) {
        return rR.CenterToRef(RR, JR, new rR)
      }
      static CenterToRef(RR, JR, GR) {
        return GR.x = (RR.x + JR.x) / 2, GR.y = (RR.y + JR.y) / 2, GR.z = (RR.z + JR.z) / 2, GR.w = (RR.w + JR.w) / 2, GR
      }
      static TransformCoordinates(RR, JR) {
        return rR.TransformCoordinatesToRef(RR, JR, new rR)
      }
      static TransformCoordinatesToRef(RR, JR, GR) {
        return rR.TransformCoordinatesFromFloatsToRef(RR._x, RR._y, RR._z, JR, GR), GR
      }
      static TransformCoordinatesFromFloatsToRef(RR, JR, GR, yR, tR) {
        const uR = yR.m,
          ZR = RR * uR[0] + JR * uR[4] + GR * uR[8] + uR[12],
          qR = RR * uR[1] + JR * uR[5] + GR * uR[9] + uR[13],
          iR = RR * uR[2] + JR * uR[6] + GR * uR[10] + uR[14],
          fR = RR * uR[3] + JR * uR[7] + GR * uR[11] + uR[15];
        return tR.x = ZR, tR.y = qR, tR.z = iR, tR.w = fR, tR
      }
      static TransformNormal(RR, JR) {
        return rR.TransformNormalToRef(RR, JR, new rR)
      }
      static TransformNormalToRef(RR, JR, GR) {
        const yR = JR.m,
          tR = RR.x * yR[0] + RR.y * yR[4] + RR.z * yR[8],
          uR = RR.x * yR[1] + RR.y * yR[5] + RR.z * yR[9],
          ZR = RR.x * yR[2] + RR.y * yR[6] + RR.z * yR[10];
        return GR.x = tR, GR.y = uR, GR.z = ZR, GR.w = RR.w, GR
      }
      static TransformNormalFromFloatsToRef(RR, JR, GR, yR, tR, uR) {
        const ZR = tR.m;
        return uR.x = RR * ZR[0] + JR * ZR[4] + GR * ZR[8], uR.y = RR * ZR[1] + JR * ZR[5] + GR * ZR[9], uR.z = RR * ZR[2] + JR * ZR[6] + GR * ZR[10], uR.w = yR, uR
      }
      static FromVector3(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new rR(RR._x, RR._y, RR._z, JR)
      }
      static Dot(RR, JR) {
        return RR.x * JR.x + RR.y * JR.y + RR.z * JR.z + RR.w * JR.w
      }
    }
    rR._V8PerformanceHack = new rR(.5, .5, .5, .5), rR._ZeroReadOnly = rR.Zero();
    class eR {
      get x() {
        return this._x
      }
      set x(RR) {
        this._x = RR, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(RR) {
        this._y = RR, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(RR) {
        this._z = RR, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(RR) {
        this._w = RR, this._isDirty = !0
      }
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = RR, this._y = JR, this._z = GR, this._w = yR
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let RR = VR(this._x);
        return RR = 397 * RR ^ VR(this._y), RR = 397 * RR ^ VR(this._z), RR = 397 * RR ^ VR(this._w), RR
      }
      QtR() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return RR[JR] = this._x, RR[JR + 1] = this._y, RR[JR + 2] = this._z, RR[JR + 3] = this._w, this
      }
      yK(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return eR.FromArrayToRef(RR, JR, this)
      }
      equals(RR) {
        return RR && this._x === RR._x && this._y === RR._y && this._z === RR._z && this._w === RR._w
      }
      equalsWithEpsilon(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.c;
        return RR && (0, qR.WithinEpsilon)(this._x, RR._x, JR) && (0, qR.WithinEpsilon)(this._y, RR._y, JR) && (0, qR.WithinEpsilon)(this._z, RR._z, JR) && (0, qR.WithinEpsilon)(this._w, RR._w, JR)
      }
      isApprox(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yR.c;
        return RR && ((0, qR.WithinEpsilon)(this._x, RR._x, JR) && (0, qR.WithinEpsilon)(this._y, RR._y, JR) && (0, qR.WithinEpsilon)(this._z, RR._z, JR) && (0, qR.WithinEpsilon)(this._w, RR._w, JR) || (0, qR.WithinEpsilon)(this._x, -RR._x, JR) && (0, qR.WithinEpsilon)(this._y, -RR._y, JR) && (0, qR.WithinEpsilon)(this._z, -RR._z, JR) && (0, qR.WithinEpsilon)(this._w, -RR._w, JR))
      }
      clone() {
        return new eR(this._x, this._y, this._z, this._w)
      }
      vN(RR) {
        return this._x = RR._x, this._y = RR._y, this._z = RR._z, this._w = RR._w, this._isDirty = !0, this
      }
      VJR(RR, JR, GR, yR) {
        return this._x = RR, this._y = JR, this._z = GR, this._w = yR, this._isDirty = !0, this
      }
      set(RR, JR, GR, yR) {
        return this.VJR(RR, JR, GR, yR)
      }
      NRR(RR) {
        return this.VJR(RR, RR, RR, RR)
      }
      add(RR) {
        return new eR(this._x + RR._x, this._y + RR._y, this._z + RR._z, this._w + RR._w)
      }
      addInPlace(RR) {
        return this._x += RR._x, this._y += RR._y, this._z += RR._z, this._w += RR._w, this._isDirty = !0, this
      }
      addToRef(RR, JR) {
        return JR._x = this._x + RR._x, JR._y = this._y + RR._y, JR._z = this._z + RR._z, JR._w = this._w + RR._w, JR._isDirty = !0, JR
      }
      addInPlaceFromFloats(RR, JR, GR, yR) {
        return this._x += RR, this._y += JR, this._z += GR, this._w += yR, this._isDirty = !0, this
      }
      subtractToRef(RR, JR) {
        return JR._x = this._x - RR._x, JR._y = this._y - RR._y, JR._z = this._z - RR._z, JR._w = this._w - RR._w, JR._isDirty = !0, JR
      }
      subtractFromFloats(RR, JR, GR, yR) {
        return this.subtractFromFloatsToRef(RR, JR, GR, yR, new eR)
      }
      subtractFromFloatsToRef(RR, JR, GR, yR, tR) {
        return tR._x = this._x - RR, tR._y = this._y - JR, tR._z = this._z - GR, tR._w = this._w - yR, tR._isDirty = !0, tR
      }
      subtract(RR) {
        return new eR(this._x - RR._x, this._y - RR._y, this._z - RR._z, this._w - RR._w)
      }
      VuR(RR) {
        return this._x -= RR._x, this._y -= RR._y, this._z -= RR._z, this._w -= RR._w, this._isDirty = !0, this
      }
      scale(RR) {
        return new eR(this._x * RR, this._y * RR, this._z * RR, this._w * RR)
      }
      scaleToRef(RR, JR) {
        return JR._x = this._x * RR, JR._y = this._y * RR, JR._z = this._z * RR, JR._w = this._w * RR, JR._isDirty = !0, JR
      }
      scaleInPlace(RR) {
        return this._x *= RR, this._y *= RR, this._z *= RR, this._w *= RR, this._isDirty = !0, this
      }
      scaleAndAddToRef(RR, JR) {
        return JR._x += this._x * RR, JR._y += this._y * RR, JR._z += this._z * RR, JR._w += this._w * RR, JR._isDirty = !0, JR
      }
      multiply(RR) {
        const JR = new eR(0, 0, 0, 1);
        return this.multiplyToRef(RR, JR), JR
      }
      multiplyToRef(RR, JR) {
        const GR = this._x * RR._w + this._y * RR._z - this._z * RR._y + this._w * RR._x,
          yR = -this._x * RR._z + this._y * RR._w + this._z * RR._x + this._w * RR._y,
          tR = this._x * RR._y - this._y * RR._x + this._z * RR._w + this._w * RR._z,
          uR = -this._x * RR._x - this._y * RR._y - this._z * RR._z + this._w * RR._w;
        return JR.VJR(GR, yR, tR, uR), JR
      }
      multiplyInPlace(RR) {
        return this.multiplyToRef(RR, this)
      }
      multiplyByFloats(RR, JR, GR, yR) {
        return this._x *= RR, this._y *= JR, this._z *= GR, this._w *= yR, this._isDirty = !0, this
      }
      divide(RR) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(RR, JR) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(RR) {
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
      Re() {
        return this.negateToRef(new eR)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(RR) {
        return RR._x = -this._x, RR._y = -this._y, RR._z = -this._z, RR._w = -this._w, RR._isDirty = !0, RR
      }
      JiR(RR, JR, GR, yR) {
        return this._x === RR && this._y === JR && this._z === GR && this._w === yR
      }
      floorToRef(RR) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(RR) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(RR) {
        return RR.VJR(-this._x, -this._y, -this._z, this._w), RR
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new eR(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const RR = this.conjugate(),
          JR = this.lengthSquared();
        return 0 == JR || 1 == JR || RR.scaleInPlace(1 / JR), RR
      }
      invertInPlace() {
        this.conjugateInPlace();
        const RR = this.lengthSquared();
        return 0 == RR || 1 == RR || this.scaleInPlace(1 / RR), this
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
      normalizeFromLength(RR) {
        return 0 === RR || 1 === RR ? this : this.scaleInPlace(1 / RR)
      }
      normalizeToNew() {
        const RR = new eR(0, 0, 0, 1);
        return this.normalizeToRef(RR), RR
      }
      normalizeToRef(RR) {
        const JR = this.length();
        return 0 === JR || 1 === JR ? RR.VJR(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / JR, RR)
      }
      toEulerAngles() {
        const RR = wR.Zero();
        return this.toEulerAnglesToRef(RR), RR
      }
      toEulerAnglesToRef(RR) {
        const JR = this._z,
          GR = this._x,
          yR = this._y,
          tR = this._w,
          uR = yR * JR - GR * tR,
          ZR = .4999999;
        if (uR < -ZR) RR._y = 2 * Math.atan2(yR, tR), RR._x = Math.PI / 2, RR._z = 0, RR._isDirty = !0;
        else if (uR > ZR) RR._y = 2 * Math.atan2(yR, tR), RR._x = -Math.PI / 2, RR._z = 0, RR._isDirty = !0;
        else {
          const ZR = tR * tR,
            qR = JR * JR,
            iR = GR * GR,
            fR = yR * yR;
          RR._z = Math.atan2(2 * (GR * yR + JR * tR), -qR - iR + fR + ZR), RR._x = Math.asin(-2 * uR), RR._y = Math.atan2(2 * (JR * GR + yR * tR), qR - iR - fR + ZR), RR._isDirty = !0
        }
        return RR
      }
      toAlphaBetaGammaToRef(RR) {
        const JR = this._z,
          GR = this._x,
          yR = this._y,
          tR = this._w,
          uR = Math.sqrt(GR * GR + yR * yR),
          ZR = Math.sqrt(JR * JR + tR * tR),
          qR = 2 * Math.atan2(uR, ZR),
          iR = 2 * Math.atan2(JR, tR),
          fR = 2 * Math.atan2(yR, GR),
          VR = (iR + fR) / 2,
          KR = (iR - fR) / 2;
        return RR.set(KR, qR, VR), RR
      }
      toRotationMatrix(RR) {
        return aR.FromQuaternionToRef(this, RR), RR
      }
      fromRotationMatrix(RR) {
        return eR.FromRotationMatrixToRef(RR, this), this
      }
      dot(RR) {
        return this._x * RR._x + this._y * RR._y + this._z * RR._z + this._w * RR._w
      }
      toAxisAngle() {
        const RR = wR.Zero();
        return {
          axis: RR,
          angle: this.toAxisAngleToRef(RR)
        }
      }
      toAxisAngleToRef(RR) {
        let JR;
        const GR = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          yR = this._w;
        return GR > 0 ? (JR = 2 * Math.atan2(GR, yR), RR.set(this._x / GR, this._y / GR, this._z / GR)) : (JR = 0, RR.set(1, 0, 0)), JR
      }
      static FromRotationMatrix(RR) {
        const JR = new eR;
        return eR.FromRotationMatrixToRef(RR, JR), JR
      }
      static FromRotationMatrixToRef(RR, JR) {
        const GR = RR.m,
          yR = GR[0],
          tR = GR[4],
          uR = GR[8],
          ZR = GR[1],
          qR = GR[5],
          iR = GR[9],
          fR = GR[2],
          VR = GR[6],
          KR = GR[10],
          wR = yR + qR + KR;
        let rR;
        return wR > 0 ? (rR = .5 / Math.sqrt(wR + 1), JR._w = .25 / rR, JR._x = (VR - iR) * rR, JR._y = (uR - fR) * rR, JR._z = (ZR - tR) * rR, JR._isDirty = !0) : yR > qR && yR > KR ? (rR = 2 * Math.sqrt(1 + yR - qR - KR), JR._w = (VR - iR) / rR, JR._x = .25 * rR, JR._y = (tR + ZR) / rR, JR._z = (uR + fR) / rR, JR._isDirty = !0) : qR > KR ? (rR = 2 * Math.sqrt(1 + qR - yR - KR), JR._w = (uR - fR) / rR, JR._x = (tR + ZR) / rR, JR._y = .25 * rR, JR._z = (iR + VR) / rR, JR._isDirty = !0) : (rR = 2 * Math.sqrt(1 + KR - yR - qR), JR._w = (ZR - tR) / rR, JR._x = (uR + fR) / rR, JR._y = (iR + VR) / rR, JR._z = .25 * rR, JR._isDirty = !0), JR
      }
      static Dot(RR, JR) {
        return RR._x * JR._x + RR._y * JR._y + RR._z * JR._z + RR._w * JR._w
      }
      static AreClose(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const yR = eR.Dot(RR, JR);
        return 1 - yR * yR <= GR
      }
      static SmoothToRef(RR, JR, GR, yR, tR) {
        let uR = 0 === yR ? 1 : GR / yR;
        return uR = (0, qR.Clamp)(uR, 0, 1), eR.SlerpToRef(RR, JR, uR, tR), tR
      }
      static Zero() {
        return new eR(0, 0, 0, 0)
      }
      static Inverse(RR) {
        return new eR(-RR._x, -RR._y, -RR._z, RR._w)
      }
      static InverseToRef(RR, JR) {
        return JR.set(-RR._x, -RR._y, -RR._z, RR._w), JR
      }
      static Identity() {
        return new eR(0, 0, 0, 1)
      }
      static IsIdentity(RR) {
        return RR && 0 === RR._x && 0 === RR._y && 0 === RR._z && 1 === RR._w
      }
      static RotationAxis(RR, JR) {
        return eR.RotationAxisToRef(RR, JR, new eR)
      }
      static RotationAxisToRef(RR, JR, GR) {
        GR._w = Math.cos(JR / 2);
        const yR = Math.sin(JR / 2) / RR.length();
        return GR._x = RR._x * yR, GR._y = RR._y * yR, GR._z = RR._z * yR, GR._isDirty = !0, GR
      }
      static FromArray(RR, JR) {
        return JR || (JR = 0), new eR(RR[JR], RR[JR + 1], RR[JR + 2], RR[JR + 3])
      }
      static FromArrayToRef(RR, JR, GR) {
        return GR._x = RR[JR], GR._y = RR[JR + 1], GR._z = RR[JR + 2], GR._w = RR[JR + 3], GR._isDirty = !0, GR
      }
      static FromFloatsToRef(RR, JR, GR, yR, tR) {
        return tR.VJR(RR, JR, GR, yR), tR
      }
      static FromEulerAngles(RR, JR, GR) {
        const yR = new eR;
        return eR.RotationYawPitchRollToRef(JR, RR, GR, yR), yR
      }
      static FromEulerAnglesToRef(RR, JR, GR, yR) {
        return eR.RotationYawPitchRollToRef(JR, RR, GR, yR), yR
      }
      static FromEulerVector(RR) {
        const JR = new eR;
        return eR.RotationYawPitchRollToRef(RR._y, RR._x, RR._z, JR), JR
      }
      static FromEulerVectorToRef(RR, JR) {
        return eR.RotationYawPitchRollToRef(RR._y, RR._x, RR._z, JR), JR
      }
      static FromUnitVectorsToRef(RR, JR, GR) {
        let tR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : yR.c;
        const uR = wR.Dot(RR, JR) + 1;
        return uR < tR ? Math.abs(RR.x) > Math.abs(RR.z) ? GR.set(-RR.y, RR.x, 0, 0) : GR.set(0, -RR.z, RR.y, 0) : (wR.CrossToRef(RR, JR, nR.Fe[0]), GR.set(nR.Fe[0].x, nR.Fe[0].y, nR.Fe[0].z, uR)), GR.normalize()
      }
      static RotationYawPitchRoll(RR, JR, GR) {
        const yR = new eR;
        return eR.RotationYawPitchRollToRef(RR, JR, GR, yR), yR
      }
      static RotationYawPitchRollToRef(RR, JR, GR, yR) {
        const tR = .5 * GR,
          uR = .5 * JR,
          ZR = .5 * RR,
          qR = Math.sin(tR),
          iR = Math.cos(tR),
          fR = Math.sin(uR),
          VR = Math.cos(uR),
          KR = Math.sin(ZR),
          wR = Math.cos(ZR);
        return yR._x = wR * fR * iR + KR * VR * qR, yR._y = KR * VR * iR - wR * fR * qR, yR._z = wR * VR * qR - KR * fR * iR, yR._w = wR * VR * iR + KR * fR * qR, yR._isDirty = !0, yR
      }
      static RotationAlphaBetaGamma(RR, JR, GR) {
        const yR = new eR;
        return eR.RotationAlphaBetaGammaToRef(RR, JR, GR, yR), yR
      }
      static RotationAlphaBetaGammaToRef(RR, JR, GR, yR) {
        const tR = .5 * (GR + RR),
          uR = .5 * (GR - RR),
          ZR = .5 * JR;
        return yR._x = Math.cos(uR) * Math.sin(ZR), yR._y = Math.sin(uR) * Math.sin(ZR), yR._z = Math.sin(tR) * Math.cos(ZR), yR._w = Math.cos(tR) * Math.cos(ZR), yR._isDirty = !0, yR
      }
      static RotationQuaternionFromAxis(RR, JR, GR) {
        const yR = new eR(0, 0, 0, 0);
        return eR.RotationQuaternionFromAxisToRef(RR, JR, GR, yR), yR
      }
      static RotationQuaternionFromAxisToRef(RR, JR, GR, yR) {
        const tR = LR.Matrix[0];
        return RR = RR.normalizeToRef(LR.Fe[0]), JR = JR.normalizeToRef(LR.Fe[1]), GR = GR.normalizeToRef(LR.Fe[2]), aR.FromXYZAxesToRef(RR, JR, GR, tR), eR.FromRotationMatrixToRef(tR, yR), yR
      }
      static FromLookDirectionLH(RR, JR) {
        const GR = new eR;
        return eR.FromLookDirectionLHToRef(RR, JR, GR), GR
      }
      static FromLookDirectionLHToRef(RR, JR, GR) {
        const yR = LR.Matrix[0];
        return aR.LookDirectionLHToRef(RR, JR, yR), eR.FromRotationMatrixToRef(yR, GR), GR
      }
      static FromLookDirectionRH(RR, JR) {
        const GR = new eR;
        return eR.FromLookDirectionRHToRef(RR, JR, GR), GR
      }
      static FromLookDirectionRHToRef(RR, JR, GR) {
        const yR = LR.Matrix[0];
        return aR.LookDirectionRHToRef(RR, JR, yR), eR.FromRotationMatrixToRef(yR, GR)
      }
      static Slerp(RR, JR, GR) {
        const yR = eR.Identity();
        return eR.SlerpToRef(RR, JR, GR, yR), yR
      }
      static SlerpToRef(RR, JR, GR, yR) {
        let tR, uR, ZR = RR._x * JR._x + RR._y * JR._y + RR._z * JR._z + RR._w * JR._w,
          qR = !1;
        if (ZR < 0 && (qR = !0, ZR = -ZR), ZR > .999999) uR = 1 - GR, tR = qR ? -GR : GR;
        else {
          const RR = Math.acos(ZR),
            JR = 1 / Math.sin(RR);
          uR = Math.sin((1 - GR) * RR) * JR, tR = qR ? -Math.sin(GR * RR) * JR : Math.sin(GR * RR) * JR
        }
        return yR._x = uR * RR._x + tR * JR._x, yR._y = uR * RR._y + tR * JR._y, yR._z = uR * RR._z + tR * JR._z, yR._w = uR * RR._w + tR * JR._w, yR._isDirty = !0, yR
      }
      static Hermite(RR, JR, GR, yR, tR) {
        const uR = tR * tR,
          ZR = tR * uR,
          qR = 2 * ZR - 3 * uR + 1,
          iR = -2 * ZR + 3 * uR,
          fR = ZR - 2 * uR + tR,
          VR = ZR - uR,
          KR = RR._x * qR + GR._x * iR + JR._x * fR + yR._x * VR,
          wR = RR._y * qR + GR._y * iR + JR._y * fR + yR._y * VR,
          rR = RR._z * qR + GR._z * iR + JR._z * fR + yR._z * VR,
          aR = RR._w * qR + GR._w * iR + JR._w * fR + yR._w * VR;
        return new eR(KR, wR, rR, aR)
      }
      static Hermite1stDerivative(RR, JR, GR, yR, tR) {
        const uR = new eR;
        return this.Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR), uR
      }
      static Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR) {
        const ZR = tR * tR;
        return uR._x = 6 * (ZR - tR) * RR._x + (3 * ZR - 4 * tR + 1) * JR._x + 6 * (-ZR + tR) * GR._x + (3 * ZR - 2 * tR) * yR._x, uR._y = 6 * (ZR - tR) * RR._y + (3 * ZR - 4 * tR + 1) * JR._y + 6 * (-ZR + tR) * GR._y + (3 * ZR - 2 * tR) * yR._y, uR._z = 6 * (ZR - tR) * RR._z + (3 * ZR - 4 * tR + 1) * JR._z + 6 * (-ZR + tR) * GR._z + (3 * ZR - 2 * tR) * yR._z, uR._w = 6 * (ZR - tR) * RR._w + (3 * ZR - 4 * tR + 1) * JR._w + 6 * (-ZR + tR) * GR._w + (3 * ZR - 2 * tR) * yR._w, uR._isDirty = !0, uR
      }
      static Normalize(RR) {
        const JR = eR.Zero();
        return eR.NormalizeToRef(RR, JR), JR
      }
      static NormalizeToRef(RR, JR) {
        return RR.normalizeToRef(JR), JR
      }
      static Clamp(RR, JR, GR) {
        const yR = new eR;
        return eR.ClampToRef(RR, JR, GR, yR), yR
      }
      static ClampToRef(RR, JR, GR, yR) {
        return yR.VJR((0, qR.Clamp)(RR.x, JR.x, GR.x), (0, qR.Clamp)(RR.y, JR.y, GR.y), (0, qR.Clamp)(RR.z, JR.z, GR.z), (0, qR.Clamp)(RR.w, JR.w, GR.w))
      }
      static Random() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new eR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
      }
      static RandomToRef() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).VJR((0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR), (0, qR.RandomRange)(RR, JR))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(RR, JR) {
        return Math.sqrt(eR.DistanceSquared(RR, JR))
      }
      static DistanceSquared(RR, JR) {
        const GR = RR.x - JR.x,
          yR = RR.y - JR.y,
          tR = RR.z - JR.z,
          uR = RR.w - JR.w;
        return GR * GR + yR * yR + tR * tR + uR * uR
      }
      static Center(RR, JR) {
        return eR.CenterToRef(RR, JR, eR.Zero())
      }
      static CenterToRef(RR, JR, GR) {
        return GR.VJR((RR.x + JR.x) / 2, (RR.y + JR.y) / 2, (RR.z + JR.z) / 2, (RR.w + JR.w) / 2)
      }
    }
    eR._V8PerformanceHack = new eR(.5, .5, .5, .5);
    class aR {
      static get Use64Bits() {
        return uR.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = iR.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yR = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = RR, this._isIdentity3x2 = RR || GR, this._isIdentityDirty = !this._isIdentity && JR, this._isIdentity3x2Dirty = !this._isIdentity3x2 && yR
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, uR.c.MatrixTrackPrecisionChange && uR.c.MatrixTrackedMatrices.push(this), this._m = new uR.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const RR = this._m;
          this._isIdentity = 1 === RR[0] && 0 === RR[1] && 0 === RR[2] && 0 === RR[3] && 0 === RR[4] && 1 === RR[5] && 0 === RR[6] && 0 === RR[7] && 0 === RR[8] && 0 === RR[9] && 1 === RR[10] && 0 === RR[11] && 0 === RR[12] && 0 === RR[13] && 0 === RR[14] && 1 === RR[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const RR = this._m,
          JR = RR[0],
          GR = RR[1],
          yR = RR[2],
          tR = RR[3],
          uR = RR[4],
          ZR = RR[5],
          qR = RR[6],
          iR = RR[7],
          fR = RR[8],
          VR = RR[9],
          KR = RR[10],
          wR = RR[11],
          rR = RR[12],
          eR = RR[13],
          aR = RR[14],
          LR = RR[15],
          nR = KR * LR - aR * wR,
          UR = VR * LR - eR * wR,
          WR = VR * aR - eR * KR,
          AR = fR * LR - rR * wR,
          CR = fR * aR - KR * rR,
          XR = fR * eR - rR * VR;
        return JR * +(ZR * nR - qR * UR + iR * WR) + GR * -(uR * nR - qR * AR + iR * CR) + yR * +(uR * UR - ZR * AR + iR * XR) + tR * -(uR * WR - ZR * CR + qR * XR)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!RR) return this._m;
        const GR = this._m;
        for (let yR = 0; yR < 16; yR++) RR[JR + yR] = GR[yR];
        return this
      }
      QtR() {
        return this._m
      }
      yK(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return aR.FromArrayToRef(RR, JR, this)
      }
      VJR() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return aR.FromArrayToRef(JR, 0, this)
      }
      set() {
        const RR = this._m;
        for (let JR = 0; JR < 16; JR++) RR[JR] = JR < 0 || arguments.length <= JR ? void 0 : arguments[JR];
        return this.markAsUpdated(), this
      }
      NRR(RR) {
        const JR = this._m;
        for (let GR = 0; GR < 16; GR++) JR[GR] = RR;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return aR.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(RR) {
        const JR = new aR;
        return this.addToRef(RR, JR), JR
      }
      addToRef(RR, JR) {
        const GR = this._m,
          yR = JR._m,
          tR = RR.m;
        for (let uR = 0; uR < 16; uR++) yR[uR] = GR[uR] + tR[uR];
        return JR.markAsUpdated(), JR
      }
      addToSelf(RR) {
        const JR = this._m,
          GR = RR.m;
        return JR[0] += GR[0], JR[1] += GR[1], JR[2] += GR[2], JR[3] += GR[3], JR[4] += GR[4], JR[5] += GR[5], JR[6] += GR[6], JR[7] += GR[7], JR[8] += GR[8], JR[9] += GR[9], JR[10] += GR[10], JR[11] += GR[11], JR[12] += GR[12], JR[13] += GR[13], JR[14] += GR[14], JR[15] += GR[15], this.markAsUpdated(), this
      }
      addInPlace(RR) {
        const JR = this._m,
          GR = RR.m;
        for (let yR = 0; yR < 16; yR++) JR[yR] += GR[yR];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const RR = this._m;
        for (let JR = 0; JR < 16; JR++) RR[JR] += JR < 0 || arguments.length <= JR ? void 0 : arguments[JR];
        return this.markAsUpdated(), this
      }
      subtract(RR) {
        const JR = this._m,
          GR = RR.m;
        for (let yR = 0; yR < 16; yR++) JR[yR] -= GR[yR];
        return this.markAsUpdated(), this
      }
      subtractToRef(RR, JR) {
        const GR = this._m,
          yR = RR.m,
          tR = JR._m;
        for (let uR = 0; uR < 16; uR++) tR[uR] = GR[uR] - yR[uR];
        return JR.markAsUpdated(), JR
      }
      VuR(RR) {
        const JR = this._m,
          GR = RR.m;
        for (let yR = 0; yR < 16; yR++) JR[yR] -= GR[yR];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        return this.subtractFromFloatsToRef(...JR, new aR)
      }
      subtractFromFloatsToRef() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        const yR = JR.pop(),
          tR = this._m,
          uR = yR._m,
          ZR = JR;
        for (let qR = 0; qR < 16; qR++) uR[qR] = tR[qR] - ZR[qR];
        return yR.markAsUpdated(), yR
      }
      invertToRef(RR) {
        return !0 === this._isIdentity ? (aR.IdentityToRef(RR), RR) : ((0, iR.e)(this, RR.QtR()) ? RR.markAsUpdated() : RR.vN(this), RR)
      }
      addAtIndex(RR, JR) {
        return this._m[RR] += JR, this.markAsUpdated(), this
      }
      multiplyAtIndex(RR, JR) {
        return this._m[RR] *= JR, this.markAsUpdated(), this
      }
      setTranslationFromFloats(RR, JR, GR) {
        return this._m[12] = RR, this._m[13] = JR, this._m[14] = GR, this.markAsUpdated(), this
      }
      addTranslationFromFloats(RR, JR, GR) {
        return this._m[12] += RR, this._m[13] += JR, this._m[14] += GR, this.markAsUpdated(), this
      }
      setTranslation(RR) {
        return this.setTranslationFromFloats(RR._x, RR._y, RR._z)
      }
      getTranslation() {
        return new wR(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(RR) {
        return RR.x = this._m[12], RR.y = this._m[13], RR.z = this._m[14], RR
      }
      removeRotationAndScaling() {
        const RR = this.m;
        return aR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, RR[12], RR[13], RR[14], RR[15], this), this._updateIdentityStatus(0 === RR[12] && 0 === RR[13] && 0 === RR[14] && 1 === RR[15]), this
      }
      vN(RR) {
        RR.copyToArray(this._m);
        const JR = RR;
        return this.updateFlag = JR.updateFlag, this._updateIdentityStatus(JR._isIdentity, JR._isIdentityDirty, JR._isIdentity3x2, JR._isIdentity3x2Dirty), this
      }
      copyToArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, iR.c)(this, RR, JR), this
      }
      multiply(RR) {
        const JR = new aR;
        return this.multiplyToRef(RR, JR), JR
      }
      multiplyInPlace(RR) {
        const JR = this._m,
          GR = RR.m;
        for (let yR = 0; yR < 16; yR++) JR[yR] *= GR[yR];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const RR = this._m;
        for (let JR = 0; JR < 16; JR++) RR[JR] *= JR < 0 || arguments.length <= JR ? void 0 : arguments[JR];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var RR = arguments.length, JR = new Array(RR), GR = 0; GR < RR; GR++) JR[GR] = arguments[GR];
        const yR = JR.pop(),
          tR = this._m,
          uR = yR._m,
          ZR = JR;
        for (let qR = 0; qR < 16; qR++) uR[qR] = tR[qR] * ZR[qR];
        return yR.markAsUpdated(), yR
      }
      multiplyToRef(RR, JR) {
        return this._isIdentity ? (JR.vN(RR), JR) : RR._isIdentity ? (JR.vN(this), JR) : (this.multiplyToArray(RR, JR._m, 0), JR.markAsUpdated(), JR)
      }
      multiplyToArray(RR, JR, GR) {
        return (0, iR.n)(this, RR, JR, GR), this
      }
      divide(RR) {
        return this.divideToRef(RR, new aR)
      }
      divideToRef(RR, JR) {
        const GR = this._m,
          yR = RR.m,
          tR = JR._m;
        for (let uR = 0; uR < 16; uR++) tR[uR] = GR[uR] / yR[uR];
        return JR.markAsUpdated(), JR
      }
      divideInPlace(RR) {
        const JR = this._m,
          GR = RR.m;
        for (let yR = 0; yR < 16; yR++) JR[yR] /= GR[yR];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(RR) {
        const JR = this._m,
          GR = RR.m;
        for (let yR = 0; yR < 16; yR++) JR[yR] = Math.min(JR[yR], GR[yR]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const RR = this._m;
        for (let JR = 0; JR < 16; JR++) RR[JR] = Math.min(RR[JR], JR < 0 || arguments.length <= JR ? void 0 : arguments[JR]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(RR) {
        const JR = this._m,
          GR = RR.m;
        for (let yR = 0; yR < 16; yR++) JR[yR] = Math.max(JR[yR], GR[yR]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const RR = this._m;
        for (let JR = 0; JR < 16; JR++) RR[JR] = Math.max(RR[JR], JR < 0 || arguments.length <= JR ? void 0 : arguments[JR]);
        return this.markAsUpdated(), this
      }
      Re() {
        return this.negateToRef(new aR)
      }
      negateInPlace() {
        const RR = this._m;
        for (let JR = 0; JR < 16; JR++) RR[JR] = -RR[JR];
        return this.markAsUpdated(), this
      }
      negateToRef(RR) {
        const JR = this._m,
          GR = RR._m;
        for (let yR = 0; yR < 16; yR++) GR[yR] = -JR[yR];
        return RR.markAsUpdated(), RR
      }
      equals(RR) {
        const JR = RR;
        if (!JR) return !1;
        if ((this._isIdentity || JR._isIdentity) && !this._isIdentityDirty && !JR._isIdentityDirty) return this._isIdentity && JR._isIdentity;
        const GR = this.m,
          yR = JR.m;
        return GR[0] === yR[0] && GR[1] === yR[1] && GR[2] === yR[2] && GR[3] === yR[3] && GR[4] === yR[4] && GR[5] === yR[5] && GR[6] === yR[6] && GR[7] === yR[7] && GR[8] === yR[8] && GR[9] === yR[9] && GR[10] === yR[10] && GR[11] === yR[11] && GR[12] === yR[12] && GR[13] === yR[13] && GR[14] === yR[14] && GR[15] === yR[15]
      }
      equalsWithEpsilon(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = this._m,
          yR = RR.m;
        for (let tR = 0; tR < 16; tR++)
          if (!(0, qR.WithinEpsilon)(GR[tR], yR[tR], JR)) return !1;
        return !0
      }
      JiR() {
        const RR = this._m;
        for (let JR = 0; JR < 16; JR++)
          if (RR[JR] != (JR < 0 || arguments.length <= JR ? void 0 : arguments[JR])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new aR)
      }
      floorToRef(RR) {
        const JR = this._m,
          GR = RR._m;
        for (let yR = 0; yR < 16; yR++) GR[yR] = Math.floor(JR[yR]);
        return RR.markAsUpdated(), RR
      }
      fract() {
        return this.fractToRef(new aR)
      }
      fractToRef(RR) {
        const JR = this._m,
          GR = RR._m;
        for (let yR = 0; yR < 16; yR++) GR[yR] = JR[yR] - Math.floor(JR[yR]);
        return RR.markAsUpdated(), RR
      }
      clone() {
        const RR = new aR;
        return RR.vN(this), RR
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let RR = VR(this._m[0]);
        for (let JR = 1; JR < 16; JR++) RR = 397 * RR ^ VR(this._m[JR]);
        return RR
      }
      decomposeToTransformNode(RR) {
        return RR.rotationQuaternion = RR.rotationQuaternion || new eR, this.decompose(RR.MK, RR.rotationQuaternion, RR.position)
      }
      decompose(RR, JR, GR, yR) {
        let tR = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return GR && GR.NRR(0), RR && RR.NRR(1), JR && JR.VJR(0, 0, 0, 1), !0;
        const uR = this._m;
        if (GR && GR.VJR(uR[12], uR[13], uR[14]), (RR = RR || LR.Fe[0]).x = Math.sqrt(uR[0] * uR[0] + uR[1] * uR[1] + uR[2] * uR[2]), RR.y = Math.sqrt(uR[4] * uR[4] + uR[5] * uR[5] + uR[6] * uR[6]), RR.z = Math.sqrt(uR[8] * uR[8] + uR[9] * uR[9] + uR[10] * uR[10]), yR) {
          const JR = (tR ? yR.absoluteScaling.x : yR.MK.x) < 0 ? -1 : 1,
            GR = (tR ? yR.absoluteScaling.y : yR.MK.y) < 0 ? -1 : 1,
            uR = (tR ? yR.absoluteScaling.z : yR.MK.z) < 0 ? -1 : 1;
          RR.x *= JR, RR.y *= GR, RR.z *= uR
        } else this.determinant() <= 0 && (RR.y *= -1);
        if (0 === RR._x || 0 === RR._y || 0 === RR._z) return JR && JR.VJR(0, 0, 0, 1), !1;
        if (JR) {
          const GR = 1 / RR._x,
            yR = 1 / RR._y,
            tR = 1 / RR._z;
          aR.FromValuesToRef(uR[0] * GR, uR[1] * GR, uR[2] * GR, 0, uR[4] * yR, uR[5] * yR, uR[6] * yR, 0, uR[8] * tR, uR[9] * tR, uR[10] * tR, 0, 0, 0, 0, 1, LR.Matrix[0]), eR.FromRotationMatrixToRef(LR.Matrix[0], JR)
        }
        return !0
      }
      getRow(RR) {
        if (RR < 0 || RR > 3) return null;
        const JR = 4 * RR;
        return new rR(this._m[JR + 0], this._m[JR + 1], this._m[JR + 2], this._m[JR + 3])
      }
      getRowToRef(RR, JR) {
        if (RR >= 0 && RR <= 3) {
          const GR = 4 * RR;
          JR.x = this._m[GR + 0], JR.y = this._m[GR + 1], JR.z = this._m[GR + 2], JR.w = this._m[GR + 3]
        }
        return JR
      }
      setRow(RR, JR) {
        return this.setRowFromFloats(RR, JR.x, JR.y, JR.z, JR.w)
      }
      transpose() {
        const RR = new aR;
        return aR.TransposeToRef(this, RR), RR
      }
      transposeToRef(RR) {
        return aR.TransposeToRef(this, RR), RR
      }
      setRowFromFloats(RR, JR, GR, yR, tR) {
        if (RR < 0 || RR > 3) return this;
        const uR = 4 * RR;
        return this._m[uR + 0] = JR, this._m[uR + 1] = GR, this._m[uR + 2] = yR, this._m[uR + 3] = tR, this.markAsUpdated(), this
      }
      scale(RR) {
        const JR = new aR;
        return this.scaleToRef(RR, JR), JR
      }
      scaleToRef(RR, JR) {
        for (let GR = 0; GR < 16; GR++) JR._m[GR] = this._m[GR] * RR;
        return JR.markAsUpdated(), JR
      }
      scaleAndAddToRef(RR, JR) {
        for (let GR = 0; GR < 16; GR++) JR._m[GR] += this._m[GR] * RR;
        return JR.markAsUpdated(), JR
      }
      scaleInPlace(RR) {
        const JR = this._m;
        for (let GR = 0; GR < 16; GR++) JR[GR] *= RR;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(RR) {
        const JR = LR.Matrix[0];
        this.invertToRef(JR), JR.transposeToRef(RR);
        const GR = RR._m;
        return aR.FromValuesToRef(GR[0], GR[1], GR[2], 0, GR[4], GR[5], GR[6], 0, GR[8], GR[9], GR[10], 0, 0, 0, 0, 1, RR), RR
      }
      getRotationMatrix() {
        const RR = new aR;
        return this.getRotationMatrixToRef(RR), RR
      }
      getRotationMatrixToRef(RR) {
        const JR = LR.Fe[0];
        if (!this.decompose(JR)) return aR.IdentityToRef(RR), RR;
        const GR = this._m,
          yR = 1 / JR._x,
          tR = 1 / JR._y,
          uR = 1 / JR._z;
        return aR.FromValuesToRef(GR[0] * yR, GR[1] * yR, GR[2] * yR, 0, GR[4] * tR, GR[5] * tR, GR[6] * tR, 0, GR[8] * uR, GR[9] * uR, GR[10] * uR, 0, 0, 0, 0, 1, RR), RR
      }
      toggleModelMatrixHandInPlace() {
        const RR = this._m;
        return RR[2] *= -1, RR[6] *= -1, RR[8] *= -1, RR[9] *= -1, RR[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const RR = this._m;
        return RR[8] *= -1, RR[9] *= -1, RR[10] *= -1, RR[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(UR, this), this
      }
      static FromArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const GR = new aR;
        return aR.FromArrayToRef(RR, JR, GR), GR
      }
      static FromArrayToRef(RR, JR, GR) {
        for (let yR = 0; yR < 16; yR++) GR._m[yR] = RR[yR + JR];
        return GR.markAsUpdated(), GR
      }
      static FromFloat32ArrayToRefScaled(RR, JR, GR, yR) {
        return yR._m[0] = RR[0 + JR] * GR, yR._m[1] = RR[1 + JR] * GR, yR._m[2] = RR[2 + JR] * GR, yR._m[3] = RR[3 + JR] * GR, yR._m[4] = RR[4 + JR] * GR, yR._m[5] = RR[5 + JR] * GR, yR._m[6] = RR[6 + JR] * GR, yR._m[7] = RR[7 + JR] * GR, yR._m[8] = RR[8 + JR] * GR, yR._m[9] = RR[9 + JR] * GR, yR._m[10] = RR[10 + JR] * GR, yR._m[11] = RR[11 + JR] * GR, yR._m[12] = RR[12 + JR] * GR, yR._m[13] = RR[13 + JR] * GR, yR._m[14] = RR[14 + JR] * GR, yR._m[15] = RR[15 + JR] * GR, yR.markAsUpdated(), yR
      }
      static get IdentityReadOnly() {
        return aR._IdentityReadOnly
      }
      static FromValuesToRef(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, aR, LR) {
        const nR = LR._m;
        nR[0] = RR, nR[1] = JR, nR[2] = GR, nR[3] = yR, nR[4] = tR, nR[5] = uR, nR[6] = ZR, nR[7] = qR, nR[8] = iR, nR[9] = fR, nR[10] = VR, nR[11] = KR, nR[12] = wR, nR[13] = rR, nR[14] = eR, nR[15] = aR, LR.markAsUpdated()
      }
      static FromValues(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR, KR, wR, rR, eR, LR) {
        const nR = new aR,
          UR = nR._m;
        return UR[0] = RR, UR[1] = JR, UR[2] = GR, UR[3] = yR, UR[4] = tR, UR[5] = uR, UR[6] = ZR, UR[7] = qR, UR[8] = iR, UR[9] = fR, UR[10] = VR, UR[11] = KR, UR[12] = wR, UR[13] = rR, UR[14] = eR, UR[15] = LR, nR.markAsUpdated(), nR
      }
      static Compose(RR, JR, GR) {
        const yR = new aR;
        return aR.ComposeToRef(RR, JR, GR, yR), yR
      }
      static ComposeToRef(RR, JR, GR, yR) {
        const tR = yR._m,
          uR = JR._x,
          ZR = JR._y,
          qR = JR._z,
          iR = JR._w,
          fR = uR + uR,
          VR = ZR + ZR,
          KR = qR + qR,
          wR = uR * fR,
          rR = uR * VR,
          eR = uR * KR,
          aR = ZR * VR,
          LR = ZR * KR,
          nR = qR * KR,
          UR = iR * fR,
          WR = iR * VR,
          AR = iR * KR,
          CR = RR._x,
          XR = RR._y,
          MR = RR._z;
        return tR[0] = (1 - (aR + nR)) * CR, tR[1] = (rR + AR) * CR, tR[2] = (eR - WR) * CR, tR[3] = 0, tR[4] = (rR - AR) * XR, tR[5] = (1 - (wR + nR)) * XR, tR[6] = (LR + UR) * XR, tR[7] = 0, tR[8] = (eR + WR) * MR, tR[9] = (LR - UR) * MR, tR[10] = (1 - (wR + aR)) * MR, tR[11] = 0, tR[12] = GR._x, tR[13] = GR._y, tR[14] = GR._z, tR[15] = 1, yR.markAsUpdated(), yR
      }
      static Identity() {
        const RR = aR.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return RR._updateIdentityStatus(!0), RR
      }
      static IdentityToRef(RR) {
        return aR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, RR), RR._updateIdentityStatus(!0), RR
      }
      static Zero() {
        const RR = aR.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return RR._updateIdentityStatus(!1), RR
      }
      static RotationX(RR) {
        const JR = new aR;
        return aR.RotationXToRef(RR, JR), JR
      }
      static Invert(RR) {
        const JR = new aR;
        return RR.invertToRef(JR), JR
      }
      static RotationXToRef(RR, JR) {
        const GR = Math.sin(RR),
          yR = Math.cos(RR);
        return aR.FromValuesToRef(1, 0, 0, 0, 0, yR, GR, 0, 0, -GR, yR, 0, 0, 0, 0, 1, JR), JR._updateIdentityStatus(1 === yR && 0 === GR), JR
      }
      static RotationY(RR) {
        const JR = new aR;
        return aR.RotationYToRef(RR, JR), JR
      }
      static RotationYToRef(RR, JR) {
        const GR = Math.sin(RR),
          yR = Math.cos(RR);
        return aR.FromValuesToRef(yR, 0, -GR, 0, 0, 1, 0, 0, GR, 0, yR, 0, 0, 0, 0, 1, JR), JR._updateIdentityStatus(1 === yR && 0 === GR), JR
      }
      static RotationZ(RR) {
        const JR = new aR;
        return aR.RotationZToRef(RR, JR), JR
      }
      static RotationZToRef(RR, JR) {
        const GR = Math.sin(RR),
          yR = Math.cos(RR);
        return aR.FromValuesToRef(yR, GR, 0, 0, -GR, yR, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, JR), JR._updateIdentityStatus(1 === yR && 0 === GR), JR
      }
      static RotationAxis(RR, JR) {
        const GR = new aR;
        return aR.RotationAxisToRef(RR, JR, GR), GR
      }
      static RotationAxisToRef(RR, JR, GR) {
        const yR = Math.sin(-JR),
          tR = Math.cos(-JR),
          uR = 1 - tR;
        RR = RR.normalizeToRef(LR.Fe[0]);
        const ZR = GR._m;
        return ZR[0] = RR._x * RR._x * uR + tR, ZR[1] = RR._x * RR._y * uR - RR._z * yR, ZR[2] = RR._x * RR._z * uR + RR._y * yR, ZR[3] = 0, ZR[4] = RR._y * RR._x * uR + RR._z * yR, ZR[5] = RR._y * RR._y * uR + tR, ZR[6] = RR._y * RR._z * uR - RR._x * yR, ZR[7] = 0, ZR[8] = RR._z * RR._x * uR - RR._y * yR, ZR[9] = RR._z * RR._y * uR + RR._x * yR, ZR[10] = RR._z * RR._z * uR + tR, ZR[11] = 0, ZR[12] = 0, ZR[13] = 0, ZR[14] = 0, ZR[15] = 1, GR.markAsUpdated(), GR
      }
      static RotationAlignToRef(RR, JR, GR) {
        let tR = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const uR = wR.Dot(JR, RR),
          ZR = GR._m;
        if (uR < -1 + yR.c) ZR[0] = -1, ZR[1] = 0, ZR[2] = 0, ZR[3] = 0, ZR[4] = 0, ZR[5] = tR ? 1 : -1, ZR[6] = 0, ZR[7] = 0, ZR[8] = 0, ZR[9] = 0, ZR[10] = tR ? -1 : 1, ZR[11] = 0;
        else {
          const GR = wR.Cross(JR, RR),
            yR = 1 / (1 + uR);
          ZR[0] = GR._x * GR._x * yR + uR, ZR[1] = GR._y * GR._x * yR - GR._z, ZR[2] = GR._z * GR._x * yR + GR._y, ZR[3] = 0, ZR[4] = GR._x * GR._y * yR + GR._z, ZR[5] = GR._y * GR._y * yR + uR, ZR[6] = GR._z * GR._y * yR - GR._x, ZR[7] = 0, ZR[8] = GR._x * GR._z * yR - GR._y, ZR[9] = GR._y * GR._z * yR + GR._x, ZR[10] = GR._z * GR._z * yR + uR, ZR[11] = 0
        }
        return ZR[12] = 0, ZR[13] = 0, ZR[14] = 0, ZR[15] = 1, GR.markAsUpdated(), GR
      }
      static RotationYawPitchRoll(RR, JR, GR) {
        const yR = new aR;
        return aR.RotationYawPitchRollToRef(RR, JR, GR, yR), yR
      }
      static RotationYawPitchRollToRef(RR, JR, GR, yR) {
        return eR.RotationYawPitchRollToRef(RR, JR, GR, LR.Quaternion[0]), LR.Quaternion[0].toRotationMatrix(yR), yR
      }
      static Scaling(RR, JR, GR) {
        const yR = new aR;
        return aR.ScalingToRef(RR, JR, GR, yR), yR
      }
      static ScalingToRef(RR, JR, GR, yR) {
        return aR.FromValuesToRef(RR, 0, 0, 0, 0, JR, 0, 0, 0, 0, GR, 0, 0, 0, 0, 1, yR), yR._updateIdentityStatus(1 === RR && 1 === JR && 1 === GR), yR
      }
      static Translation(RR, JR, GR) {
        const yR = new aR;
        return aR.TranslationToRef(RR, JR, GR, yR), yR
      }
      static TranslationToRef(RR, JR, GR, yR) {
        return aR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, RR, JR, GR, 1, yR), yR._updateIdentityStatus(0 === RR && 0 === JR && 0 === GR), yR
      }
      static Lerp(RR, JR, GR) {
        const yR = new aR;
        return aR.LerpToRef(RR, JR, GR, yR), yR
      }
      static LerpToRef(RR, JR, GR, yR) {
        const tR = yR._m,
          uR = RR.m,
          ZR = JR.m;
        for (let qR = 0; qR < 16; qR++) tR[qR] = uR[qR] * (1 - GR) + ZR[qR] * GR;
        return yR.markAsUpdated(), yR
      }
      static DecomposeLerp(RR, JR, GR) {
        const yR = new aR;
        return aR.DecomposeLerpToRef(RR, JR, GR, yR), yR
      }
      static DecomposeLerpToRef(RR, JR, GR, yR) {
        const tR = LR.Fe[0],
          uR = LR.Quaternion[0],
          ZR = LR.Fe[1];
        RR.decompose(tR, uR, ZR);
        const qR = LR.Fe[2],
          iR = LR.Quaternion[1],
          fR = LR.Fe[3];
        JR.decompose(qR, iR, fR);
        const VR = LR.Fe[4];
        wR.LerpToRef(tR, qR, GR, VR);
        const KR = LR.Quaternion[2];
        eR.SlerpToRef(uR, iR, GR, KR);
        const rR = LR.Fe[5];
        return wR.LerpToRef(ZR, fR, GR, rR), aR.ComposeToRef(VR, KR, rR, yR), yR
      }
      static LookAtLH(RR, JR, GR) {
        const yR = new aR;
        return aR.LookAtLHToRef(RR, JR, GR, yR), yR
      }
      static LookAtLHToRef(RR, JR, GR, yR) {
        const tR = LR.Fe[0],
          uR = LR.Fe[1],
          ZR = LR.Fe[2];
        JR.subtractToRef(RR, ZR), ZR.normalize(), wR.CrossToRef(GR, ZR, tR);
        const qR = tR.lengthSquared();
        0 === qR ? tR.x = 1 : tR.normalizeFromLength(Math.sqrt(qR)), wR.CrossToRef(ZR, tR, uR), uR.normalize();
        const iR = -wR.Dot(tR, RR),
          fR = -wR.Dot(uR, RR),
          VR = -wR.Dot(ZR, RR);
        return aR.FromValuesToRef(tR._x, uR._x, ZR._x, 0, tR._y, uR._y, ZR._y, 0, tR._z, uR._z, ZR._z, 0, iR, fR, VR, 1, yR), yR
      }
      static LookAtRH(RR, JR, GR) {
        const yR = new aR;
        return aR.LookAtRHToRef(RR, JR, GR, yR), yR
      }
      static LookAtRHToRef(RR, JR, GR, yR) {
        const tR = LR.Fe[0],
          uR = LR.Fe[1],
          ZR = LR.Fe[2];
        RR.subtractToRef(JR, ZR), ZR.normalize(), wR.CrossToRef(GR, ZR, tR);
        const qR = tR.lengthSquared();
        0 === qR ? tR.x = 1 : tR.normalizeFromLength(Math.sqrt(qR)), wR.CrossToRef(ZR, tR, uR), uR.normalize();
        const iR = -wR.Dot(tR, RR),
          fR = -wR.Dot(uR, RR),
          VR = -wR.Dot(ZR, RR);
        return aR.FromValuesToRef(tR._x, uR._x, ZR._x, 0, tR._y, uR._y, ZR._y, 0, tR._z, uR._z, ZR._z, 0, iR, fR, VR, 1, yR), yR
      }
      static LookDirectionLH(RR, JR) {
        const GR = new aR;
        return aR.LookDirectionLHToRef(RR, JR, GR), GR
      }
      static LookDirectionLHToRef(RR, JR, GR) {
        const yR = LR.Fe[0];
        yR.vN(RR), yR.scaleInPlace(-1);
        const tR = LR.Fe[1];
        return wR.CrossToRef(JR, yR, tR), aR.FromValuesToRef(tR._x, tR._y, tR._z, 0, JR._x, JR._y, JR._z, 0, yR._x, yR._y, yR._z, 0, 0, 0, 0, 1, GR), GR
      }
      static LookDirectionRH(RR, JR) {
        const GR = new aR;
        return aR.LookDirectionRHToRef(RR, JR, GR), GR
      }
      static LookDirectionRHToRef(RR, JR, GR) {
        const yR = LR.Fe[2];
        return wR.CrossToRef(JR, RR, yR), aR.FromValuesToRef(yR._x, yR._y, yR._z, 0, JR._x, JR._y, JR._z, 0, RR._x, RR._y, RR._z, 0, 0, 0, 0, 1, GR), GR
      }
      static OrthoLH(RR, JR, GR, yR, tR) {
        const uR = new aR;
        return aR.OrthoLHToRef(RR, JR, GR, yR, uR, tR), uR
      }
      static OrthoLHToRef(RR, JR, GR, yR, tR, uR) {
        const ZR = 2 / RR,
          qR = 2 / JR,
          iR = 2 / (yR - GR),
          fR = -(yR + GR) / (yR - GR);
        return aR.FromValuesToRef(ZR, 0, 0, 0, 0, qR, 0, 0, 0, 0, iR, 0, 0, 0, fR, 1, tR), uR && tR.multiplyToRef(UR, tR), tR._updateIdentityStatus(1 === ZR && 1 === qR && 1 === iR && 0 === fR), tR
      }
      static OrthoOffCenterLH(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = new aR;
        return aR.OrthoOffCenterLHToRef(RR, JR, GR, yR, tR, uR, qR, ZR), qR
      }
      static OrthoOffCenterLHToRef(RR, JR, GR, yR, tR, uR, ZR, qR) {
        const iR = 2 / (JR - RR),
          fR = 2 / (yR - GR),
          VR = 2 / (uR - tR),
          KR = -(uR + tR) / (uR - tR),
          wR = (RR + JR) / (RR - JR),
          rR = (yR + GR) / (GR - yR);
        return aR.FromValuesToRef(iR, 0, 0, 0, 0, fR, 0, 0, 0, 0, VR, 0, wR, rR, KR, 1, ZR), qR && ZR.multiplyToRef(UR, ZR), ZR.markAsUpdated(), ZR
      }
      static ObliqueOffCenterLHToRef(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
        const KR = -ZR * Math.cos(qR),
          wR = -ZR * Math.sin(qR);
        return aR.TranslationToRef(0, 0, -iR, LR.Matrix[1]), aR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, KR, wR, 1, 0, 0, 0, 0, 1, LR.Matrix[0]), LR.Matrix[1].multiplyToRef(LR.Matrix[0], LR.Matrix[0]), aR.TranslationToRef(0, 0, iR, LR.Matrix[1]), LR.Matrix[0].multiplyToRef(LR.Matrix[1], LR.Matrix[0]), aR.OrthoOffCenterLHToRef(RR, JR, GR, yR, tR, uR, fR, VR), LR.Matrix[0].multiplyToRef(fR, fR), fR
      }
      static OrthoOffCenterRH(RR, JR, GR, yR, tR, uR, ZR) {
        const qR = new aR;
        return aR.OrthoOffCenterRHToRef(RR, JR, GR, yR, tR, uR, qR, ZR), qR
      }
      static OrthoOffCenterRHToRef(RR, JR, GR, yR, tR, uR, ZR, qR) {
        return aR.OrthoOffCenterLHToRef(RR, JR, GR, yR, tR, uR, ZR, qR), ZR._m[10] *= -1, ZR
      }
      static ObliqueOffCenterRHToRef(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
        const KR = ZR * Math.cos(qR),
          wR = ZR * Math.sin(qR);
        return aR.TranslationToRef(0, 0, iR, LR.Matrix[1]), aR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, KR, wR, 1, 0, 0, 0, 0, 1, LR.Matrix[0]), LR.Matrix[1].multiplyToRef(LR.Matrix[0], LR.Matrix[0]), aR.TranslationToRef(0, 0, -iR, LR.Matrix[1]), LR.Matrix[0].multiplyToRef(LR.Matrix[1], LR.Matrix[0]), aR.OrthoOffCenterRHToRef(RR, JR, GR, yR, tR, uR, fR, VR), LR.Matrix[0].multiplyToRef(fR, fR), fR
      }
      static PerspectiveLH(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const ZR = new aR,
          qR = 2 * GR / RR,
          iR = 2 * GR / JR,
          fR = (yR + GR) / (yR - GR),
          VR = -2 * yR * GR / (yR - GR),
          KR = Math.tan(uR);
        return aR.FromValuesToRef(qR, 0, 0, 0, 0, iR, 0, KR, 0, 0, fR, 1, 0, 0, VR, 0, ZR), tR && ZR.multiplyToRef(UR, ZR), ZR._updateIdentityStatus(!1), ZR
      }
      static PerspectiveFovLH(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const qR = new aR;
        return aR.PerspectiveFovLHToRef(RR, JR, GR, yR, qR, !0, tR, uR, ZR), qR
      }
      static PerspectiveFovLHToRef(RR, JR, GR, yR, tR) {
        let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZR = arguments.length > 6 ? arguments[6] : void 0,
          qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const fR = GR,
          VR = yR,
          KR = 1 / Math.tan(.5 * RR),
          wR = uR ? KR / JR : KR,
          rR = uR ? KR : KR * JR,
          eR = iR && 0 === fR ? -1 : 0 !== VR ? (VR + fR) / (VR - fR) : 1,
          LR = iR && 0 === fR ? 2 * VR : 0 !== VR ? -2 * VR * fR / (VR - fR) : -2 * fR,
          nR = Math.tan(qR);
        return aR.FromValuesToRef(wR, 0, 0, 0, 0, rR, 0, nR, 0, 0, eR, 1, 0, 0, LR, 0, tR), ZR && tR.multiplyToRef(UR, tR), tR._updateIdentityStatus(!1), tR
      }
      static PerspectiveFovReverseLHToRef(RR, JR, GR, yR, tR) {
        let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZR = arguments.length > 6 ? arguments[6] : void 0,
          qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const iR = 1 / Math.tan(.5 * RR),
          fR = uR ? iR / JR : iR,
          VR = uR ? iR : iR * JR,
          KR = Math.tan(qR);
        return aR.FromValuesToRef(fR, 0, 0, 0, 0, VR, 0, KR, 0, 0, -GR, 1, 0, 0, 1, 0, tR), ZR && tR.multiplyToRef(UR, tR), tR._updateIdentityStatus(!1), tR
      }
      static PerspectiveFovRH(RR, JR, GR, yR, tR) {
        let uR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          ZR = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const qR = new aR;
        return aR.PerspectiveFovRHToRef(RR, JR, GR, yR, qR, !0, tR, uR, ZR), qR
      }
      static PerspectiveFovRHToRef(RR, JR, GR, yR, tR) {
        let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZR = arguments.length > 6 ? arguments[6] : void 0,
          qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          iR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const fR = GR,
          VR = yR,
          KR = 1 / Math.tan(.5 * RR),
          wR = uR ? KR / JR : KR,
          rR = uR ? KR : KR * JR,
          eR = iR && 0 === fR ? 1 : 0 !== VR ? -(VR + fR) / (VR - fR) : -1,
          LR = iR && 0 === fR ? 2 * VR : 0 !== VR ? -2 * VR * fR / (VR - fR) : -2 * fR,
          nR = Math.tan(qR);
        return aR.FromValuesToRef(wR, 0, 0, 0, 0, rR, 0, nR, 0, 0, eR, -1, 0, 0, LR, 0, tR), ZR && tR.multiplyToRef(UR, tR), tR._updateIdentityStatus(!1), tR
      }
      static PerspectiveFovReverseRHToRef(RR, JR, GR, yR, tR) {
        let uR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          ZR = arguments.length > 6 ? arguments[6] : void 0,
          qR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const iR = 1 / Math.tan(.5 * RR),
          fR = uR ? iR / JR : iR,
          VR = uR ? iR : iR * JR,
          KR = Math.tan(qR);
        return aR.FromValuesToRef(fR, 0, 0, 0, 0, VR, 0, KR, 0, 0, -GR, -1, 0, 0, -1, 0, tR), ZR && tR.multiplyToRef(UR, tR), tR._updateIdentityStatus(!1), tR
      }
      static GetFinalMatrix(RR, JR, GR, yR, tR, uR) {
        const ZR = RR.width,
          qR = RR.height,
          iR = RR.x,
          fR = RR.y,
          VR = aR.FromValues(ZR / 2, 0, 0, 0, 0, -qR / 2, 0, 0, 0, 0, uR - tR, 0, iR + ZR / 2, qR / 2 + fR, tR, 1),
          KR = new aR;
        return JR.multiplyToRef(GR, KR), KR.multiplyToRef(yR, KR), KR.multiplyToRef(VR, KR)
      }
      static GetAsMatrix2x2(RR) {
        const JR = RR.m,
          GR = [JR[0], JR[1], JR[4], JR[5]];
        return uR.c.MatrixUse64Bits ? GR : new Float32Array(GR)
      }
      static GetAsMatrix3x3(RR) {
        const JR = RR.m,
          GR = [JR[0], JR[1], JR[2], JR[4], JR[5], JR[6], JR[8], JR[9], JR[10]];
        return uR.c.MatrixUse64Bits ? GR : new Float32Array(GR)
      }
      static Transpose(RR) {
        const JR = new aR;
        return aR.TransposeToRef(RR, JR), JR
      }
      static TransposeToRef(RR, JR) {
        const GR = RR.m,
          yR = GR[0],
          tR = GR[4],
          uR = GR[8],
          ZR = GR[12],
          qR = GR[1],
          iR = GR[5],
          fR = GR[9],
          VR = GR[13],
          KR = GR[2],
          wR = GR[6],
          rR = GR[10],
          eR = GR[14],
          aR = GR[3],
          LR = GR[7],
          nR = GR[11],
          UR = GR[15],
          WR = JR._m;
        return WR[0] = yR, WR[1] = tR, WR[2] = uR, WR[3] = ZR, WR[4] = qR, WR[5] = iR, WR[6] = fR, WR[7] = VR, WR[8] = KR, WR[9] = wR, WR[10] = rR, WR[11] = eR, WR[12] = aR, WR[13] = LR, WR[14] = nR, WR[15] = UR, JR.markAsUpdated(), JR._updateIdentityStatus(RR._isIdentity, RR._isIdentityDirty), JR
      }
      static Reflection(RR) {
        const JR = new aR;
        return aR.ReflectionToRef(RR, JR), JR
      }
      static ReflectionToRef(RR, JR) {
        RR.normalize();
        const GR = RR.normal.x,
          yR = RR.normal.y,
          tR = RR.normal.z,
          uR = -2 * GR,
          ZR = -2 * yR,
          qR = -2 * tR;
        return aR.FromValuesToRef(uR * GR + 1, ZR * GR, qR * GR, 0, uR * yR, ZR * yR + 1, qR * yR, 0, uR * tR, ZR * tR, qR * tR + 1, 0, uR * RR.d, ZR * RR.d, qR * RR.d, 1, JR), JR
      }
      static FromXYZAxesToRef(RR, JR, GR, yR) {
        return aR.FromValuesToRef(RR._x, RR._y, RR._z, 0, JR._x, JR._y, JR._z, 0, GR._x, GR._y, GR._z, 0, 0, 0, 0, 1, yR), yR
      }
      static FromQuaternionToRef(RR, JR) {
        const GR = RR._x * RR._x,
          yR = RR._y * RR._y,
          tR = RR._z * RR._z,
          uR = RR._x * RR._y,
          ZR = RR._z * RR._w,
          qR = RR._z * RR._x,
          iR = RR._y * RR._w,
          fR = RR._y * RR._z,
          VR = RR._x * RR._w;
        return JR._m[0] = 1 - 2 * (yR + tR), JR._m[1] = 2 * (uR + ZR), JR._m[2] = 2 * (qR - iR), JR._m[3] = 0, JR._m[4] = 2 * (uR - ZR), JR._m[5] = 1 - 2 * (tR + GR), JR._m[6] = 2 * (fR + VR), JR._m[7] = 0, JR._m[8] = 2 * (qR + iR), JR._m[9] = 2 * (fR - VR), JR._m[10] = 1 - 2 * (yR + GR), JR._m[11] = 0, JR._m[12] = 0, JR._m[13] = 0, JR._m[14] = 0, JR._m[15] = 1, JR.markAsUpdated(), JR
      }
    }
    aR._IdentityReadOnly = aR.Identity();
    class LR {}
    LR.Fe = (0, tR.g)(11, wR.Zero), LR.Matrix = (0, tR.g)(2, aR.Identity), LR.Quaternion = (0, tR.g)(3, eR.Zero);
    class nR {}
    nR.Vector2 = (0, tR.g)(3, KR.Zero), nR.Fe = (0, tR.g)(13, wR.Zero), nR.Vector4 = (0, tR.g)(3, rR.Zero), nR.Quaternion = (0, tR.g)(3, eR.Zero), nR.Matrix = (0, tR.g)(8, aR.Identity);
    const UR = aR.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let WR = !1;

    function AR() {
      WR || (WR = !0, Object.defineProperties(KR.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(wR.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(rR.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(eR.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(aR.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, fR.f)("BABYLON.Vector2", KR), (0, fR.f)("BABYLON.Vector3", wR), (0, fR.f)("BABYLON.Vector4", rR), (0, fR.f)("BABYLON.Matrix", aR))
    }
  },
  38233: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    const yR = "undefined" !== typeof WeakRef;
    class tR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(RR, JR, GR, yR)
      }
      initialize(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = RR, this.skipNextObservers = JR, this.target = GR, this.currentTarget = yR, this
      }
    }
    class uR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = RR, this.mask = JR, this.scope = GR, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(RR)
      }
    }
    class ZR {
      static FromPromise(RR, JR) {
        const GR = new ZR;
        return RR.then((RR => {
          GR.notifyObservers(RR)
        })).catch((RR => {
          if (!JR) throw RR;
          JR.notifyObservers(RR)
        })), GR
      }
      get observers() {
        return this._observers
      }
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = JR, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new tR(0), RR && (this._onObserverAdded = RR)
      }
      add(RR) {
        let JR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          GR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!RR) return null;
        const tR = new uR(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        tR.unregisterOnNextCall = GR, JR ? this._observers.unshift(tR) : this._observers.push(tR), this._onObserverAdded && this._onObserverAdded(tR), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(tR, this._lastNotifiedValue);
        const ZR = yR ? new WeakRef(this) : {
          deref: () => this
        };
        return tR._remove = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const JR = ZR.deref();
          JR && (RR ? JR.remove(tR) : JR._remove(tR))
        }, tR
      }
      addOnce(RR) {
        return this.add(RR, void 0, void 0, void 0, !0)
      }
      remove(RR) {
        if (!RR) return !1;
        RR._remove = null;
        return -1 !== this._observers.indexOf(RR) && (this._deferUnregister(RR), !0)
      }
      removeCallback(RR, JR) {
        for (let GR = 0; GR < this._observers.length; GR++) {
          const yR = this._observers[GR];
          if (!yR._willBeUnregistered && (yR.callback === RR && (!JR || JR === yR.scope))) return this._deferUnregister(yR), !0
        }
        return !1
      }
      _deferUnregister(RR) {
        RR._willBeUnregistered || (this._numObserversMarkedAsDeleted++, RR.unregisterOnNextCall = !1, RR._willBeUnregistered = !0, setTimeout((() => {
          this._remove(RR)
        }), 0))
      }
      _remove(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!RR) return !1;
        const GR = this._observers.indexOf(RR);
        return -1 !== GR && (JR && this._numObserversMarkedAsDeleted--, this._observers.splice(GR, 1), !0)
      }
      makeObserverTopPriority(RR) {
        this._remove(RR, !1), this._observers.unshift(RR)
      }
      makeObserverBottomPriority(RR) {
        this._remove(RR, !1), this._observers.push(RR)
      }
      notifyObservers(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = RR), !this._observers.length) return !0;
        const uR = this._eventState;
        uR.mask = JR, uR.target = GR, uR.currentTarget = yR, uR.skipNextObservers = !1, uR.lastReturnValue = RR, uR.userInfo = tR;
        for (const ZR of this._observers)
          if (!ZR._willBeUnregistered && (ZR.mask & JR && (ZR.unregisterOnNextCall && this._deferUnregister(ZR), ZR.scope ? uR.lastReturnValue = ZR.callback.apply(ZR.scope, [RR, uR]) : uR.lastReturnValue = ZR.callback(RR, uR)), uR.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = JR), RR._willBeUnregistered) return;
        const yR = this._eventState;
        yR.mask = GR, yR.skipNextObservers = !1, RR.unregisterOnNextCall && this._deferUnregister(RR), RR.callback(JR, yR)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const RR = this._observers.pop();
          RR && (RR._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const RR = new ZR;
        return RR._observers = this._observers.slice(0), RR
      }
      hasSpecificMask() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const JR of this._observers)
          if (JR.mask & RR || JR.mask === RR) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);