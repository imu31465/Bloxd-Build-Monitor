export const id = 254;
export const ids = [254];
export const modules = {
  38287: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(38296);
    class YV {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    YV.Instances = [], YV.OnEnginesDisposedObservable = new JV.c, YV._LastCreatedScene = null, YV.UseFallbackTexture = !0, YV.FallbackTexture = ""
  },
  38280: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => JV
    });
    class JV {
      static SetMatrixPrecision(VV) {
        if (JV.MatrixTrackPrecisionChange = !1, VV && !JV.MatrixUse64Bits && JV.MatrixTrackedMatrices)
          for (let eV = 0; eV < JV.MatrixTrackedMatrices.length; ++eV) {
            const VV = JV.MatrixTrackedMatrices[eV],
              xV = VV._m;
            VV._m = new Array(16);
            for (let eV = 0; eV < 16; ++eV) VV._m[eV] = xV[eV]
          }
        JV.MatrixUse64Bits = VV, JV.MatrixCurrentType = JV.MatrixUse64Bits ? Array : Float32Array, JV.MatrixTrackedMatrices = null
      }
    }
    JV.MatrixUse64Bits = !1, JV.MatrixTrackPrecisionChange = !0, JV.MatrixCurrentType = Float32Array, JV.MatrixTrackedMatrices = []
  },
  38311: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => pV,
      f: () => nV,
      g: () => QV,
      h: () => JV,
      j: () => UV,
      m: () => yV
    });
    class JV {}

    function YV(VV) {
      VV.updateFlag = JV._UpdateFlagSeed++
    }

    function UV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const YV = VV.WYV(),
        UV = eV.WYV(),
        yV = YV[0],
        pV = YV[1],
        QV = YV[2],
        nV = YV[3],
        wV = YV[4],
        ZV = YV[5],
        vV = YV[6],
        rV = YV[7],
        kV = YV[8],
        bV = YV[9],
        EV = YV[10],
        BV = YV[11],
        jV = YV[12],
        qV = YV[13],
        tV = YV[14],
        FV = YV[15],
        TV = UV[0],
        PV = UV[1],
        AV = UV[2],
        NV = UV[3],
        XV = UV[4],
        MV = UV[5],
        zV = UV[6],
        GV = UV[7],
        WV = UV[8],
        RV = UV[9],
        gV = UV[10],
        DV = UV[11],
        iV = UV[12],
        CV = UV[13],
        aV = UV[14],
        oV = UV[15];
      xV[JV] = yV * TV + pV * XV + QV * WV + nV * iV, xV[JV + 1] = yV * PV + pV * MV + QV * RV + nV * CV, xV[JV + 2] = yV * AV + pV * zV + QV * gV + nV * aV, xV[JV + 3] = yV * NV + pV * GV + QV * DV + nV * oV, xV[JV + 4] = wV * TV + ZV * XV + vV * WV + rV * iV, xV[JV + 5] = wV * PV + ZV * MV + vV * RV + rV * CV, xV[JV + 6] = wV * AV + ZV * zV + vV * gV + rV * aV, xV[JV + 7] = wV * NV + ZV * GV + vV * DV + rV * oV, xV[JV + 8] = kV * TV + bV * XV + EV * WV + BV * iV, xV[JV + 9] = kV * PV + bV * MV + EV * RV + BV * CV, xV[JV + 10] = kV * AV + bV * zV + EV * gV + BV * aV, xV[JV + 11] = kV * NV + bV * GV + EV * DV + BV * oV, xV[JV + 12] = jV * TV + qV * XV + tV * WV + FV * iV, xV[JV + 13] = jV * PV + qV * MV + tV * RV + FV * CV, xV[JV + 14] = jV * AV + qV * zV + tV * gV + FV * aV, xV[JV + 15] = jV * NV + qV * GV + tV * DV + FV * oV
    }

    function yV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      UV(VV, eV, xV.WYV(), JV), YV(xV)
    }

    function pV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const JV = VV.WYV();
      eV[xV] = JV[0], eV[xV + 1] = JV[1], eV[xV + 2] = JV[2], eV[xV + 3] = JV[3], eV[xV + 4] = JV[4], eV[xV + 5] = JV[5], eV[xV + 6] = JV[6], eV[xV + 7] = JV[7], eV[xV + 8] = JV[8], eV[xV + 9] = JV[9], eV[xV + 10] = JV[10], eV[xV + 11] = JV[11], eV[xV + 12] = JV[12], eV[xV + 13] = JV[13], eV[xV + 14] = JV[14], eV[xV + 15] = JV[15]
    }

    function QV(VV, eV) {
      const xV = nV(VV, eV.WYV());
      return xV && YV(eV), xV
    }

    function nV(VV, eV) {
      const xV = VV.WYV(),
        JV = xV[0],
        YV = xV[1],
        UV = xV[2],
        yV = xV[3],
        pV = xV[4],
        QV = xV[5],
        nV = xV[6],
        wV = xV[7],
        ZV = xV[8],
        vV = xV[9],
        rV = xV[10],
        kV = xV[11],
        bV = xV[12],
        EV = xV[13],
        BV = xV[14],
        jV = xV[15],
        qV = rV * jV - BV * kV,
        tV = vV * jV - EV * kV,
        FV = vV * BV - EV * rV,
        TV = ZV * jV - bV * kV,
        PV = ZV * BV - rV * bV,
        AV = ZV * EV - bV * vV,
        NV = +(QV * qV - nV * tV + wV * FV),
        XV = -(pV * qV - nV * TV + wV * PV),
        MV = +(pV * tV - QV * TV + wV * AV),
        zV = -(pV * FV - QV * PV + nV * AV),
        GV = JV * NV + YV * XV + UV * MV + yV * zV;
      if (0 === GV) return !1;
      const WV = 1 / GV,
        RV = nV * jV - BV * wV,
        gV = QV * jV - EV * wV,
        DV = QV * BV - EV * nV,
        iV = pV * jV - bV * wV,
        CV = pV * BV - bV * nV,
        aV = pV * EV - bV * QV,
        oV = nV * kV - rV * wV,
        cV = QV * kV - vV * wV,
        hV = QV * rV - vV * nV,
        lV = pV * kV - ZV * wV,
        LV = pV * rV - ZV * nV,
        fV = pV * vV - ZV * QV,
        mV = -(YV * qV - UV * tV + yV * FV),
        KV = +(JV * qV - UV * TV + yV * PV),
        HV = -(JV * tV - YV * TV + yV * AV),
        uV = +(JV * FV - YV * PV + UV * AV),
        sV = +(YV * RV - UV * gV + yV * DV),
        SV = -(JV * RV - UV * iV + yV * CV),
        IV = +(JV * gV - YV * iV + yV * aV),
        dV = -(JV * DV - YV * CV + UV * aV),
        OV = -(YV * oV - UV * cV + yV * hV),
        Ve = +(JV * oV - UV * lV + yV * LV),
        ee = -(JV * cV - YV * lV + yV * fV),
        xe = +(JV * hV - YV * LV + UV * fV);
      return eV[0] = NV * WV, eV[1] = mV * WV, eV[2] = sV * WV, eV[3] = OV * WV, eV[4] = XV * WV, eV[5] = KV * WV, eV[6] = SV * WV, eV[7] = Ve * WV, eV[8] = MV * WV, eV[9] = HV * WV, eV[10] = IV * WV, eV[11] = ee * WV, eV[12] = zV * WV, eV[13] = uV * WV, eV[14] = dV * WV, eV[15] = xe * WV, !0
    }
    JV._UpdateFlagSeed = 0
  },
  38269: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => bV,
      h: () => kV,
      j: () => tV,
      l: () => BV,
      n: () => ZV,
      o: () => vV,
      q: () => rV
    });
    var JV = xV(38272),
      YV = xV(38278),
      UV = xV(38280),
      yV = xV(38287),
      pV = xV(38303),
      QV = xV(38311),
      nV = xV(38318);
    const wV = VV => parseInt(VV.toString().replace(/\W/g, ""));
    class ZV {
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = VV, this.y = eV
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let VV = wV(this.x);
        return VV = 397 * VV ^ wV(this.y), VV
      }
      toArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return VV[eV] = this.x, VV[eV + 1] = this.y, this
      }
      wZ(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ZV.FromArrayToRef(VV, eV, this), this
      }
      WYV() {
        return [this.x, this.y]
      }
      iG(VV) {
        return this.x = VV.x, this.y = VV.y, this
      }
      FeV(VV, eV) {
        return this.x = VV, this.y = eV, this
      }
      set(VV, eV) {
        return this.FeV(VV, eV)
      }
      HVV(VV) {
        return this.FeV(VV, VV)
      }
      add(VV) {
        return new ZV(this.x + VV.x, this.y + VV.y)
      }
      addToRef(VV, eV) {
        return eV.x = this.x + VV.x, eV.y = this.y + VV.y, eV
      }
      addInPlace(VV) {
        return this.x += VV.x, this.y += VV.y, this
      }
      addInPlaceFromFloats(VV, eV) {
        return this.x += VV, this.y += eV, this
      }
      addVector3(VV) {
        return new ZV(this.x + VV.x, this.y + VV.y)
      }
      subtract(VV) {
        return new ZV(this.x - VV.x, this.y - VV.y)
      }
      subtractToRef(VV, eV) {
        return eV.x = this.x - VV.x, eV.y = this.y - VV.y, eV
      }
      IYV(VV) {
        return this.x -= VV.x, this.y -= VV.y, this
      }
      multiplyInPlace(VV) {
        return this.x *= VV.x, this.y *= VV.y, this
      }
      multiply(VV) {
        return new ZV(this.x * VV.x, this.y * VV.y)
      }
      multiplyToRef(VV, eV) {
        return eV.x = this.x * VV.x, eV.y = this.y * VV.y, eV
      }
      multiplyByFloats(VV, eV) {
        return new ZV(this.x * VV, this.y * eV)
      }
      divide(VV) {
        return new ZV(this.x / VV.x, this.y / VV.y)
      }
      divideToRef(VV, eV) {
        return eV.x = this.x / VV.x, eV.y = this.y / VV.y, eV
      }
      divideInPlace(VV) {
        return this.x = this.x / VV.x, this.y = this.y / VV.y, this
      }
      minimizeInPlace(VV) {
        return this.minimizeInPlaceFromFloats(VV.x, VV.y)
      }
      maximizeInPlace(VV) {
        return this.maximizeInPlaceFromFloats(VV.x, VV.y)
      }
      minimizeInPlaceFromFloats(VV, eV) {
        return this.x = Math.min(VV, this.x), this.y = Math.min(eV, this.y), this
      }
      maximizeInPlaceFromFloats(VV, eV) {
        return this.x = Math.max(VV, this.x), this.y = Math.max(eV, this.y), this
      }
      subtractFromFloats(VV, eV) {
        return new ZV(this.x - VV, this.y - eV)
      }
      subtractFromFloatsToRef(VV, eV, xV) {
        return xV.x = this.x - VV, xV.y = this.y - eV, xV
      }
      gr() {
        return new ZV(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(VV) {
        return VV.x = -this.x, VV.y = -this.y, VV
      }
      scaleInPlace(VV) {
        return this.x *= VV, this.y *= VV, this
      }
      scale(VV) {
        return new ZV(this.x * VV, this.y * VV)
      }
      scaleToRef(VV, eV) {
        return eV.x = this.x * VV, eV.y = this.y * VV, eV
      }
      scaleAndAddToRef(VV, eV) {
        return eV.x += this.x * VV, eV.y += this.y * VV, eV
      }
      equals(VV) {
        return VV && this.x === VV.x && this.y === VV.y
      }
      equalsWithEpsilon(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JV.b;
        return VV && (0, pV.WithinEpsilon)(this.x, VV.x, eV) && (0, pV.WithinEpsilon)(this.y, VV.y, eV)
      }
      rQV(VV, eV) {
        return this.x === VV && this.y === eV
      }
      floor() {
        return new ZV(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(VV) {
        return VV.x = Math.floor(this.x), VV.y = Math.floor(this.y), VV
      }
      fract() {
        return new ZV(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(VV) {
        return VV.x = this.x - Math.floor(this.x), VV.y = this.y - Math.floor(this.y), VV
      }
      rotate(VV) {
        return this.rotateToRef(VV, new ZV)
      }
      rotateToRef(VV, eV) {
        const xV = Math.cos(VV),
          JV = Math.sin(VV);
        return eV.x = xV * this.x - JV * this.y, eV.y = JV * this.x + xV * this.y, eV
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
      normalizeFromLength(VV) {
        return 0 === VV || 1 === VV ? this : this.scaleInPlace(1 / VV)
      }
      normalizeToNew() {
        const VV = new ZV;
        return this.normalizeToRef(VV), VV
      }
      normalizeToRef(VV) {
        const eV = this.length();
        return 0 === eV || 1 === eV ? (VV.x = this.x, VV.y = this.y, VV) : this.scaleToRef(1 / eV, VV)
      }
      clone() {
        return new ZV(this.x, this.y)
      }
      dot(VV) {
        return this.x * VV.x + this.y * VV.y
      }
      static Zero() {
        return new ZV(0, 0)
      }
      static One() {
        return new ZV(1, 1)
      }
      static Random() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ZV((0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV))
      }
      static RandomToRef() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).FeV((0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV))
      }
      static get ZeroReadOnly() {
        return ZV._ZeroReadOnly
      }
      static FromArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ZV(VV[eV], VV[eV + 1])
      }
      static FromArrayToRef(VV, eV, xV) {
        return xV.x = VV[eV], xV.y = VV[eV + 1], xV
      }
      static FromFloatsToRef(VV, eV, xV) {
        return xV.FeV(VV, eV), xV
      }
      static CatmullRom(VV, eV, xV, JV, YV) {
        const UV = YV * YV,
          yV = YV * UV,
          pV = .5 * (2 * eV.x + (-VV.x + xV.x) * YV + (2 * VV.x - 5 * eV.x + 4 * xV.x - JV.x) * UV + (-VV.x + 3 * eV.x - 3 * xV.x + JV.x) * yV),
          QV = .5 * (2 * eV.y + (-VV.y + xV.y) * YV + (2 * VV.y - 5 * eV.y + 4 * xV.y - JV.y) * UV + (-VV.y + 3 * eV.y - 3 * xV.y + JV.y) * yV);
        return new ZV(pV, QV)
      }
      static ClampToRef(VV, eV, xV, JV) {
        return JV.x = (0, pV.Clamp)(VV.x, eV.x, xV.x), JV.y = (0, pV.Clamp)(VV.y, eV.y, xV.y), JV
      }
      static Clamp(VV, eV, xV) {
        const JV = (0, pV.Clamp)(VV.x, eV.x, xV.x),
          YV = (0, pV.Clamp)(VV.y, eV.y, xV.y);
        return new ZV(JV, YV)
      }
      static Hermite(VV, eV, xV, JV, YV) {
        const UV = YV * YV,
          yV = YV * UV,
          pV = 2 * yV - 3 * UV + 1,
          QV = -2 * yV + 3 * UV,
          nV = yV - 2 * UV + YV,
          wV = yV - UV,
          vV = VV.x * pV + xV.x * QV + eV.x * nV + JV.x * wV,
          rV = VV.y * pV + xV.y * QV + eV.y * nV + JV.y * wV;
        return new ZV(vV, rV)
      }
      static Hermite1stDerivative(VV, eV, xV, JV, YV) {
        return this.Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, new ZV)
      }
      static Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV) {
        const yV = YV * YV;
        return UV.x = 6 * (yV - YV) * VV.x + (3 * yV - 4 * YV + 1) * eV.x + 6 * (-yV + YV) * xV.x + (3 * yV - 2 * YV) * JV.x, UV.y = 6 * (yV - YV) * VV.y + (3 * yV - 4 * YV + 1) * eV.y + 6 * (-yV + YV) * xV.y + (3 * yV - 2 * YV) * JV.y, UV
      }
      static Lerp(VV, eV, xV) {
        return ZV.LerpToRef(VV, eV, xV, new ZV)
      }
      static LerpToRef(VV, eV, xV, JV) {
        return JV.x = VV.x + (eV.x - VV.x) * xV, JV.y = VV.y + (eV.y - VV.y) * xV, JV
      }
      static Dot(VV, eV) {
        return VV.x * eV.x + VV.y * eV.y
      }
      static Normalize(VV) {
        return ZV.NormalizeToRef(VV, new ZV)
      }
      static NormalizeToRef(VV, eV) {
        return VV.normalizeToRef(eV), eV
      }
      static Minimize(VV, eV) {
        const xV = VV.x < eV.x ? VV.x : eV.x,
          JV = VV.y < eV.y ? VV.y : eV.y;
        return new ZV(xV, JV)
      }
      static Maximize(VV, eV) {
        const xV = VV.x > eV.x ? VV.x : eV.x,
          JV = VV.y > eV.y ? VV.y : eV.y;
        return new ZV(xV, JV)
      }
      static Transform(VV, eV) {
        return ZV.TransformToRef(VV, eV, new ZV)
      }
      static TransformToRef(VV, eV, xV) {
        const JV = eV.m,
          YV = VV.x * JV[0] + VV.y * JV[4] + JV[12],
          UV = VV.x * JV[1] + VV.y * JV[5] + JV[13];
        return xV.x = YV, xV.y = UV, xV
      }
      static PointInTriangle(VV, eV, xV, JV) {
        const YV = .5 * (-xV.y * JV.x + eV.y * (-xV.x + JV.x) + eV.x * (xV.y - JV.y) + xV.x * JV.y),
          UV = YV < 0 ? -1 : 1,
          yV = (eV.y * JV.x - eV.x * JV.y + (JV.y - eV.y) * VV.x + (eV.x - JV.x) * VV.y) * UV,
          pV = (eV.x * xV.y - eV.y * xV.x + (eV.y - xV.y) * VV.x + (xV.x - eV.x) * VV.y) * UV;
        return yV > 0 && pV > 0 && yV + pV < 2 * YV * UV
      }
      static Distance(VV, eV) {
        return Math.sqrt(ZV.DistanceSquared(VV, eV))
      }
      static DistanceSquared(VV, eV) {
        const xV = VV.x - eV.x,
          JV = VV.y - eV.y;
        return xV * xV + JV * JV
      }
      static Center(VV, eV) {
        return ZV.CenterToRef(VV, eV, new ZV)
      }
      static CenterToRef(VV, eV, xV) {
        return xV.FeV((VV.x + eV.x) / 2, (VV.y + eV.y) / 2)
      }
      static DistanceOfPointFromSegment(VV, eV, xV) {
        const JV = ZV.DistanceSquared(eV, xV);
        if (0 === JV) return ZV.Distance(VV, eV);
        const YV = xV.subtract(eV),
          UV = Math.max(0, Math.min(1, ZV.Dot(VV.subtract(eV), YV) / JV)),
          yV = eV.add(YV.multiplyByFloats(UV, UV));
        return ZV.Distance(VV, yV)
      }
    }
    ZV._V8PerformanceHack = new ZV(.5, .5), ZV._ZeroReadOnly = ZV.Zero();
    class vV {
      get x() {
        return this._x
      }
      set x(VV) {
        this._x = VV, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(VV) {
        this._y = VV, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(VV) {
        this._z = VV, this._isDirty = !0
      }
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = VV, this._y = eV, this._z = xV
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Ik"
      }
      getHashCode() {
        let VV = wV(this._x);
        return VV = 397 * VV ^ wV(this._y), VV = 397 * VV ^ wV(this._z), VV
      }
      WYV() {
        return [this._x, this._y, this._z]
      }
      toArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return VV[eV] = this._x, VV[eV + 1] = this._y, VV[eV + 2] = this._z, this
      }
      wZ(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return vV.FromArrayToRef(VV, eV, this), this
      }
      toQuaternion() {
        return kV.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(VV) {
        return this._x += VV._x, this._y += VV._y, this._z += VV._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(VV, eV, xV) {
        return this._x += VV, this._y += eV, this._z += xV, this._isDirty = !0, this
      }
      add(VV) {
        return new vV(this._x + VV._x, this._y + VV._y, this._z + VV._z)
      }
      addToRef(VV, eV) {
        return eV._x = this._x + VV._x, eV._y = this._y + VV._y, eV._z = this._z + VV._z, eV._isDirty = !0, eV
      }
      IYV(VV) {
        return this._x -= VV._x, this._y -= VV._y, this._z -= VV._z, this._isDirty = !0, this
      }
      subtract(VV) {
        return new vV(this._x - VV._x, this._y - VV._y, this._z - VV._z)
      }
      subtractToRef(VV, eV) {
        return this.subtractFromFloatsToRef(VV._x, VV._y, VV._z, eV)
      }
      subtractFromFloats(VV, eV, xV) {
        return new vV(this._x - VV, this._y - eV, this._z - xV)
      }
      subtractFromFloatsToRef(VV, eV, xV, JV) {
        return JV._x = this._x - VV, JV._y = this._y - eV, JV._z = this._z - xV, JV._isDirty = !0, JV
      }
      gr() {
        return new vV(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(VV) {
        return VV._x = -1 * this._x, VV._y = -1 * this._y, VV._z = -1 * this._z, VV._isDirty = !0, VV
      }
      scaleInPlace(VV) {
        return this._x *= VV, this._y *= VV, this._z *= VV, this._isDirty = !0, this
      }
      scale(VV) {
        return new vV(this._x * VV, this._y * VV, this._z * VV)
      }
      scaleToRef(VV, eV) {
        return eV._x = this._x * VV, eV._y = this._y * VV, eV._z = this._z * VV, eV._isDirty = !0, eV
      }
      getNormalToRef(VV) {
        const eV = this.length();
        let xV = Math.acos(this._y / eV);
        const JV = Math.atan2(this._z, this._x);
        xV > Math.PI / 2 ? xV -= Math.PI / 2 : xV += Math.PI / 2;
        const YV = eV * Math.sin(xV) * Math.cos(JV),
          UV = eV * Math.cos(xV),
          yV = eV * Math.sin(xV) * Math.sin(JV);
        return VV.set(YV, UV, yV), VV
      }
      applyRotationQuaternionToRef(VV, eV) {
        const xV = this._x,
          JV = this._y,
          YV = this._z,
          UV = VV._x,
          yV = VV._y,
          pV = VV._z,
          QV = VV._w,
          nV = 2 * (yV * YV - pV * JV),
          wV = 2 * (pV * xV - UV * YV),
          ZV = 2 * (UV * JV - yV * xV);
        return eV._x = xV + QV * nV + yV * ZV - pV * wV, eV._y = JV + QV * wV + pV * nV - UV * ZV, eV._z = YV + QV * ZV + UV * wV - yV * nV, eV._isDirty = !0, eV
      }
      applyRotationQuaternionInPlace(VV) {
        return this.applyRotationQuaternionToRef(VV, this)
      }
      applyRotationQuaternion(VV) {
        return this.applyRotationQuaternionToRef(VV, new vV)
      }
      scaleAndAddToRef(VV, eV) {
        return eV._x += this._x * VV, eV._y += this._y * VV, eV._z += this._z * VV, eV._isDirty = !0, eV
      }
      projectOnPlane(VV, eV) {
        return this.projectOnPlaneToRef(VV, eV, new vV)
      }
      projectOnPlaneToRef(VV, eV, xV) {
        const JV = VV.normal,
          YV = VV.d,
          UV = EV.Ik[0];
        this.subtractToRef(eV, UV), UV.normalize();
        const yV = vV.Dot(UV, JV);
        if (Math.abs(yV) < 1e-10) xV.HVV(1 / 0);
        else {
          const VV = -(vV.Dot(eV, JV) + YV) / yV,
            pV = UV.scaleInPlace(VV);
          eV.addToRef(pV, xV)
        }
        return xV
      }
      equals(VV) {
        return VV && this._x === VV._x && this._y === VV._y && this._z === VV._z
      }
      equalsWithEpsilon(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JV.b;
        return VV && (0, pV.WithinEpsilon)(this._x, VV._x, eV) && (0, pV.WithinEpsilon)(this._y, VV._y, eV) && (0, pV.WithinEpsilon)(this._z, VV._z, eV)
      }
      rQV(VV, eV, xV) {
        return this._x === VV && this._y === eV && this._z === xV
      }
      multiplyInPlace(VV) {
        return this._x *= VV._x, this._y *= VV._y, this._z *= VV._z, this._isDirty = !0, this
      }
      multiply(VV) {
        return this.multiplyByFloats(VV._x, VV._y, VV._z)
      }
      multiplyToRef(VV, eV) {
        return eV._x = this._x * VV._x, eV._y = this._y * VV._y, eV._z = this._z * VV._z, eV._isDirty = !0, eV
      }
      multiplyByFloats(VV, eV, xV) {
        return new vV(this._x * VV, this._y * eV, this._z * xV)
      }
      divide(VV) {
        return new vV(this._x / VV._x, this._y / VV._y, this._z / VV._z)
      }
      divideToRef(VV, eV) {
        return eV._x = this._x / VV._x, eV._y = this._y / VV._y, eV._z = this._z / VV._z, eV._isDirty = !0, eV
      }
      divideInPlace(VV) {
        return this._x = this._x / VV._x, this._y = this._y / VV._y, this._z = this._z / VV._z, this._isDirty = !0, this
      }
      minimizeInPlace(VV) {
        return this.minimizeInPlaceFromFloats(VV._x, VV._y, VV._z)
      }
      maximizeInPlace(VV) {
        return this.maximizeInPlaceFromFloats(VV._x, VV._y, VV._z)
      }
      minimizeInPlaceFromFloats(VV, eV, xV) {
        return VV < this._x && (this.x = VV), eV < this._y && (this.y = eV), xV < this._z && (this.z = xV), this
      }
      maximizeInPlaceFromFloats(VV, eV, xV) {
        return VV > this._x && (this.x = VV), eV > this._y && (this.y = eV), xV > this._z && (this.z = xV), this
      }
      isNonUniformWithinEpsilon(VV) {
        const eV = Math.abs(this._x),
          xV = Math.abs(this._y);
        if (!(0, pV.WithinEpsilon)(eV, xV, VV)) return !0;
        const JV = Math.abs(this._z);
        return !(0, pV.WithinEpsilon)(eV, JV, VV) || !(0, pV.WithinEpsilon)(xV, JV, VV)
      }
      get isNonUniform() {
        const VV = Math.abs(this._x);
        if (VV !== Math.abs(this._y)) return !0;
        return VV !== Math.abs(this._z)
      }
      floorToRef(VV) {
        return VV._x = Math.floor(this._x), VV._y = Math.floor(this._y), VV._z = Math.floor(this._z), VV._isDirty = !0, VV
      }
      floor() {
        return new vV(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(VV) {
        return VV._x = this._x - Math.floor(this._x), VV._y = this._y - Math.floor(this._y), VV._z = this._z - Math.floor(this._z), VV._isDirty = !0, VV
      }
      fract() {
        return new vV(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(VV) {
        if ("xyz" === (VV = VV.toLowerCase())) return this;
        const eV = EV.Ik[0].iG(this);
        return this.x = eV[VV[0]], this.y = eV[VV[1]], this.z = eV[VV[2]], this
      }
      rotateByQuaternionToRef(VV, eV) {
        return VV.toRotationMatrix(EV.Matrix[0]), vV.TransformCoordinatesToRef(this, EV.Matrix[0], eV), eV
      }
      rotateByQuaternionAroundPointToRef(VV, eV, xV) {
        return this.subtractToRef(eV, EV.Ik[0]), EV.Ik[0].rotateByQuaternionToRef(VV, EV.Ik[0]), eV.addToRef(EV.Ik[0], xV), xV
      }
      cross(VV) {
        return vV.CrossToRef(this, VV, new vV)
      }
      normalizeFromLength(VV) {
        return 0 === VV || 1 === VV ? this : this.scaleInPlace(1 / VV)
      }
      normalizeToNew() {
        return this.normalizeToRef(new vV)
      }
      normalizeToRef(VV) {
        const eV = this.length();
        return 0 === eV || 1 === eV ? (VV._x = this._x, VV._y = this._y, VV._z = this._z, VV._isDirty = !0, VV) : this.scaleToRef(1 / eV, VV)
      }
      clone() {
        return new vV(this._x, this._y, this._z)
      }
      iG(VV) {
        return this.FeV(VV._x, VV._y, VV._z)
      }
      FeV(VV, eV, xV) {
        return this._x = VV, this._y = eV, this._z = xV, this._isDirty = !0, this
      }
      set(VV, eV, xV) {
        return this.FeV(VV, eV, xV)
      }
      HVV(VV) {
        return this._x = this._y = this._z = VV, this._isDirty = !0, this
      }
      static GetClipFactor(VV, eV, xV, JV) {
        const YV = vV.Dot(VV, xV);
        return (YV - JV) / (YV - vV.Dot(eV, xV))
      }
      static GetAngleBetweenVectors(VV, eV, xV) {
        const JV = VV.normalizeToRef(EV.Ik[1]),
          YV = eV.normalizeToRef(EV.Ik[2]);
        let UV = vV.Dot(JV, YV);
        UV = (0, pV.Clamp)(UV, -1, 1);
        const yV = Math.acos(UV),
          QV = EV.Ik[3];
        return vV.CrossToRef(JV, YV, QV), vV.Dot(QV, xV) > 0 ? isNaN(yV) ? 0 : yV : isNaN(yV) ? -Math.PI : -Math.acos(UV)
      }
      static GetAngleBetweenVectorsOnPlane(VV, eV, xV) {
        EV.Ik[0].iG(VV);
        const JV = EV.Ik[0];
        EV.Ik[1].iG(eV);
        const YV = EV.Ik[1];
        EV.Ik[2].iG(xV);
        const UV = EV.Ik[2],
          yV = EV.Ik[3],
          QV = EV.Ik[4];
        JV.normalize(), YV.normalize(), UV.normalize(), vV.CrossToRef(UV, JV, yV), vV.CrossToRef(yV, UV, QV);
        const nV = Math.atan2(vV.Dot(YV, yV), vV.Dot(YV, QV));
        return (0, pV.NormalizeRadians)(nV)
      }
      static PitchYawRollToMoveBetweenPointsToRef(VV, eV, xV) {
        const JV = BV.Ik[0];
        return eV.subtractToRef(VV, JV), xV._y = Math.atan2(JV.x, JV.z) || 0, xV._x = Math.atan2(Math.sqrt(JV.x ** 2 + JV.z ** 2), JV.y) || 0, xV._z = 0, xV._isDirty = !0, xV
      }
      static PitchYawRollToMoveBetweenPoints(VV, eV) {
        const xV = vV.Zero();
        return vV.PitchYawRollToMoveBetweenPointsToRef(VV, eV, xV)
      }
      static SlerpToRef(VV, eV, xV, YV) {
        xV = (0, pV.Clamp)(xV, 0, 1);
        const UV = EV.Ik[0],
          yV = EV.Ik[1];
        UV.iG(VV);
        const QV = UV.length();
        UV.normalizeFromLength(QV), yV.iG(eV);
        const nV = yV.length();
        yV.normalizeFromLength(nV);
        const wV = vV.Dot(UV, yV);
        let ZV, rV;
        if (wV < 1 - JV.b) {
          const VV = Math.acos(wV),
            eV = 1 / Math.sin(VV);
          ZV = Math.sin((1 - xV) * VV) * eV, rV = Math.sin(xV * VV) * eV
        } else ZV = 1 - xV, rV = xV;
        return UV.scaleInPlace(ZV), yV.scaleInPlace(rV), YV.iG(UV).addInPlace(yV), YV.scaleInPlace((0, pV.Lerp)(QV, nV, xV)), YV
      }
      static SmoothToRef(VV, eV, xV, JV, YV) {
        return vV.SlerpToRef(VV, eV, 0 === JV ? 1 : xV / JV, YV), YV
      }
      static FromArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new vV(VV[eV], VV[eV + 1], VV[eV + 2])
      }
      static FromFloatArray(VV, eV) {
        return vV.FromArray(VV, eV)
      }
      static FromArrayToRef(VV, eV, xV) {
        return xV._x = VV[eV], xV._y = VV[eV + 1], xV._z = VV[eV + 2], xV._isDirty = !0, xV
      }
      static FromFloatArrayToRef(VV, eV, xV) {
        return vV.FromArrayToRef(VV, eV, xV)
      }
      static FromFloatsToRef(VV, eV, xV, JV) {
        return JV.FeV(VV, eV, xV), JV
      }
      static Zero() {
        return new vV(0, 0, 0)
      }
      static One() {
        return new vV(1, 1, 1)
      }
      static Up() {
        return new vV(0, 1, 0)
      }
      static get UpReadOnly() {
        return vV._UpReadOnly
      }
      static get DownReadOnly() {
        return vV._DownReadOnly
      }
      static get RightReadOnly() {
        return vV._RightReadOnly
      }
      static get LeftReadOnly() {
        return vV._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return vV._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return vV._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return vV._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return vV._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return vV._ZeroReadOnly
      }
      static get OneReadOnly() {
        return vV._OneReadOnly
      }
      static Down() {
        return new vV(0, -1, 0)
      }
      static Forward() {
        return new vV(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new vV(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new vV(1, 0, 0)
      }
      static Left() {
        return new vV(-1, 0, 0)
      }
      static Random() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new vV((0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV))
      }
      static RandomToRef() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).FeV((0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV))
      }
      static TransformCoordinates(VV, eV) {
        const xV = vV.Zero();
        return vV.TransformCoordinatesToRef(VV, eV, xV), xV
      }
      static TransformCoordinatesToRef(VV, eV, xV) {
        return vV.TransformCoordinatesFromFloatsToRef(VV._x, VV._y, VV._z, eV, xV), xV
      }
      static TransformCoordinatesFromFloatsToRef(VV, eV, xV, JV, YV) {
        const UV = JV.m,
          yV = VV * UV[0] + eV * UV[4] + xV * UV[8] + UV[12],
          pV = VV * UV[1] + eV * UV[5] + xV * UV[9] + UV[13],
          QV = VV * UV[2] + eV * UV[6] + xV * UV[10] + UV[14],
          nV = 1 / (VV * UV[3] + eV * UV[7] + xV * UV[11] + UV[15]);
        return YV._x = yV * nV, YV._y = pV * nV, YV._z = QV * nV, YV._isDirty = !0, YV
      }
      static TransformNormal(VV, eV) {
        const xV = vV.Zero();
        return vV.TransformNormalToRef(VV, eV, xV), xV
      }
      static TransformNormalToRef(VV, eV, xV) {
        return this.TransformNormalFromFloatsToRef(VV._x, VV._y, VV._z, eV, xV), xV
      }
      static TransformNormalFromFloatsToRef(VV, eV, xV, JV, YV) {
        const UV = JV.m;
        return YV._x = VV * UV[0] + eV * UV[4] + xV * UV[8], YV._y = VV * UV[1] + eV * UV[5] + xV * UV[9], YV._z = VV * UV[2] + eV * UV[6] + xV * UV[10], YV._isDirty = !0, YV
      }
      static CatmullRom(VV, eV, xV, JV, YV) {
        const UV = YV * YV,
          yV = YV * UV,
          pV = .5 * (2 * eV._x + (-VV._x + xV._x) * YV + (2 * VV._x - 5 * eV._x + 4 * xV._x - JV._x) * UV + (-VV._x + 3 * eV._x - 3 * xV._x + JV._x) * yV),
          QV = .5 * (2 * eV._y + (-VV._y + xV._y) * YV + (2 * VV._y - 5 * eV._y + 4 * xV._y - JV._y) * UV + (-VV._y + 3 * eV._y - 3 * xV._y + JV._y) * yV),
          nV = .5 * (2 * eV._z + (-VV._z + xV._z) * YV + (2 * VV._z - 5 * eV._z + 4 * xV._z - JV._z) * UV + (-VV._z + 3 * eV._z - 3 * xV._z + JV._z) * yV);
        return new vV(pV, QV, nV)
      }
      static Clamp(VV, eV, xV) {
        const JV = new vV;
        return vV.ClampToRef(VV, eV, xV, JV), JV
      }
      static ClampToRef(VV, eV, xV, JV) {
        let YV = VV._x;
        YV = YV > xV._x ? xV._x : YV, YV = YV < eV._x ? eV._x : YV;
        let UV = VV._y;
        UV = UV > xV._y ? xV._y : UV, UV = UV < eV._y ? eV._y : UV;
        let yV = VV._z;
        return yV = yV > xV._z ? xV._z : yV, yV = yV < eV._z ? eV._z : yV, JV.FeV(YV, UV, yV), JV
      }
      static CheckExtends(VV, eV, xV) {
        eV.minimizeInPlace(VV), xV.maximizeInPlace(VV)
      }
      static Hermite(VV, eV, xV, JV, YV) {
        const UV = YV * YV,
          yV = YV * UV,
          pV = 2 * yV - 3 * UV + 1,
          QV = -2 * yV + 3 * UV,
          nV = yV - 2 * UV + YV,
          wV = yV - UV,
          ZV = VV._x * pV + xV._x * QV + eV._x * nV + JV._x * wV,
          rV = VV._y * pV + xV._y * QV + eV._y * nV + JV._y * wV,
          kV = VV._z * pV + xV._z * QV + eV._z * nV + JV._z * wV;
        return new vV(ZV, rV, kV)
      }
      static Hermite1stDerivative(VV, eV, xV, JV, YV) {
        const UV = new vV;
        return this.Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV), UV
      }
      static Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV) {
        const yV = YV * YV;
        return UV._x = 6 * (yV - YV) * VV._x + (3 * yV - 4 * YV + 1) * eV._x + 6 * (-yV + YV) * xV._x + (3 * yV - 2 * YV) * JV._x, UV._y = 6 * (yV - YV) * VV._y + (3 * yV - 4 * YV + 1) * eV._y + 6 * (-yV + YV) * xV._y + (3 * yV - 2 * YV) * JV._y, UV._z = 6 * (yV - YV) * VV._z + (3 * yV - 4 * YV + 1) * eV._z + 6 * (-yV + YV) * xV._z + (3 * yV - 2 * YV) * JV._z, UV._isDirty = !0, UV
      }
      static Lerp(VV, eV, xV) {
        const JV = new vV(0, 0, 0);
        return vV.LerpToRef(VV, eV, xV, JV), JV
      }
      static LerpToRef(VV, eV, xV, JV) {
        return JV._x = VV._x + (eV._x - VV._x) * xV, JV._y = VV._y + (eV._y - VV._y) * xV, JV._z = VV._z + (eV._z - VV._z) * xV, JV._isDirty = !0, JV
      }
      static Dot(VV, eV) {
        return VV._x * eV._x + VV._y * eV._y + VV._z * eV._z
      }
      dot(VV) {
        return this._x * VV._x + this._y * VV._y + this._z * VV._z
      }
      static Cross(VV, eV) {
        const xV = new vV;
        return vV.CrossToRef(VV, eV, xV), xV
      }
      static CrossToRef(VV, eV, xV) {
        const JV = VV._y * eV._z - VV._z * eV._y,
          YV = VV._z * eV._x - VV._x * eV._z,
          UV = VV._x * eV._y - VV._y * eV._x;
        return xV.FeV(JV, YV, UV), xV
      }
      static Normalize(VV) {
        const eV = vV.Zero();
        return vV.NormalizeToRef(VV, eV), eV
      }
      static NormalizeToRef(VV, eV) {
        return VV.normalizeToRef(eV), eV
      }
      static Project(VV, eV, xV, JV) {
        const YV = new vV;
        return vV.ProjectToRef(VV, eV, xV, JV, YV), YV
      }
      static ProjectToRef(VV, eV, xV, JV, YV) {
        const UV = JV.width,
          pV = JV.height,
          QV = JV.x,
          nV = JV.y,
          wV = EV.Matrix[1],
          ZV = yV.d.LastCreatedEngine?.isNDCHalfZRange,
          rV = ZV ? 1 : .5,
          kV = ZV ? 0 : .5;
        bV.FromValuesToRef(UV / 2, 0, 0, 0, 0, -pV / 2, 0, 0, 0, 0, rV, 0, QV + UV / 2, pV / 2 + nV, kV, 1, wV);
        const BV = EV.Matrix[0];
        return eV.multiplyToRef(xV, BV), BV.multiplyToRef(wV, BV), vV.TransformCoordinatesToRef(VV, BV, YV), YV
      }
      static Reflect(VV, eV) {
        return this.ReflectToRef(VV, eV, new vV)
      }
      static ReflectToRef(VV, eV, xV) {
        const JV = BV.Ik[0];
        return JV.iG(eV).scaleInPlace(2 * vV.Dot(VV, eV)), xV.iG(VV).IYV(JV)
      }
      static UnprojectFromTransform(VV, eV, xV, JV, YV) {
        return this.Unproject(VV, eV, xV, JV, YV, bV.IdentityReadOnly)
      }
      static Unproject(VV, eV, xV, JV, YV, UV) {
        const yV = new vV;
        return vV.UnprojectToRef(VV, eV, xV, JV, YV, UV, yV), yV
      }
      static UnprojectToRef(VV, eV, xV, JV, YV, UV, yV) {
        return vV.UnprojectFloatsToRef(VV._x, VV._y, VV._z, eV, xV, JV, YV, UV, yV), yV
      }
      static UnprojectFloatsToRef(VV, eV, xV, JV, YV, UV, pV, QV, nV) {
        const wV = EV.Matrix[0];
        UV.multiplyToRef(pV, wV), wV.multiplyToRef(QV, wV), wV.invert();
        const ZV = EV.Ik[0];
        return ZV.x = VV / JV * 2 - 1, ZV.y = -(eV / YV * 2 - 1), yV.d.LastCreatedEngine?.isNDCHalfZRange ? ZV.z = xV : ZV.z = 2 * xV - 1, vV.TransformCoordinatesToRef(ZV, wV, nV), nV
      }
      static Minimize(VV, eV) {
        const xV = new vV;
        return xV.iG(VV), xV.minimizeInPlace(eV), xV
      }
      static Maximize(VV, eV) {
        const xV = new vV;
        return xV.iG(VV), xV.maximizeInPlace(eV), xV
      }
      static Distance(VV, eV) {
        return Math.sqrt(vV.DistanceSquared(VV, eV))
      }
      static DistanceSquared(VV, eV) {
        const xV = VV._x - eV._x,
          JV = VV._y - eV._y,
          YV = VV._z - eV._z;
        return xV * xV + JV * JV + YV * YV
      }
      static ProjectOnTriangleToRef(VV, eV, xV, YV, UV) {
        const yV = EV.Ik[0],
          QV = EV.Ik[1],
          nV = EV.Ik[2],
          wV = EV.Ik[3],
          ZV = EV.Ik[4];
        xV.subtractToRef(eV, yV), YV.subtractToRef(eV, QV), YV.subtractToRef(xV, nV);
        const rV = yV.length(),
          kV = QV.length(),
          bV = nV.length();
        if (rV < JV.b || kV < JV.b || bV < JV.b) return UV.iG(eV), vV.Distance(VV, eV);
        VV.subtractToRef(eV, ZV), vV.CrossToRef(yV, QV, wV);
        const BV = wV.length();
        if (BV < JV.b) return UV.iG(eV), vV.Distance(VV, eV);
        wV.normalizeFromLength(BV);
        let jV = ZV.length();
        if (jV < JV.b) return UV.iG(eV), 0;
        ZV.normalizeFromLength(jV);
        const qV = vV.Dot(wV, ZV),
          tV = EV.Ik[5],
          FV = EV.Ik[6];
        tV.iG(wV).scaleInPlace(-jV * qV), FV.iG(VV).addInPlace(tV);
        const TV = EV.Ik[4],
          PV = EV.Ik[5],
          AV = EV.Ik[7],
          NV = EV.Ik[8];
        TV.iG(yV).scaleInPlace(1 / rV), NV.iG(QV).scaleInPlace(1 / kV), TV.addInPlace(NV).scaleInPlace(-1), PV.iG(yV).scaleInPlace(-1 / rV), NV.iG(nV).scaleInPlace(1 / bV), PV.addInPlace(NV).scaleInPlace(-1), AV.iG(nV).scaleInPlace(-1 / bV), NV.iG(QV).scaleInPlace(-1 / kV), AV.addInPlace(NV).scaleInPlace(-1);
        const XV = EV.Ik[9];
        let MV;
        XV.iG(FV).IYV(eV), vV.CrossToRef(TV, XV, NV), MV = vV.Dot(NV, wV);
        const zV = MV;
        XV.iG(FV).IYV(xV), vV.CrossToRef(PV, XV, NV), MV = vV.Dot(NV, wV);
        const GV = MV;
        XV.iG(FV).IYV(YV), vV.CrossToRef(AV, XV, NV), MV = vV.Dot(NV, wV);
        const WV = MV,
          RV = EV.Ik[10];
        let gV, DV;
        zV > 0 && GV < 0 ? (RV.iG(yV), gV = eV, DV = xV) : GV > 0 && WV < 0 ? (RV.iG(nV), gV = xV, DV = YV) : (RV.iG(QV).scaleInPlace(-1), gV = YV, DV = eV);
        const iV = EV.Ik[9],
          CV = EV.Ik[4];
        gV.subtractToRef(FV, NV), DV.subtractToRef(FV, iV), vV.CrossToRef(NV, iV, CV);
        if (!(vV.Dot(CV, wV) < 0)) return UV.iG(FV), Math.abs(jV * qV);
        const aV = EV.Ik[5];
        vV.CrossToRef(RV, CV, aV), aV.normalize();
        const oV = EV.Ik[9];
        oV.iG(gV).IYV(FV);
        const cV = oV.length();
        if (cV < JV.b) return UV.iG(gV), vV.Distance(VV, gV);
        oV.normalizeFromLength(cV);
        const hV = vV.Dot(aV, oV),
          lV = EV.Ik[7];
        lV.iG(FV).addInPlace(aV.scaleInPlace(cV * hV)), NV.iG(lV).IYV(gV), jV = RV.length(), RV.normalizeFromLength(jV);
        let LV = vV.Dot(NV, RV) / Math.max(jV, JV.b);
        return LV = (0, pV.Clamp)(LV, 0, 1), lV.iG(gV).addInPlace(RV.scaleInPlace(LV * jV)), UV.iG(lV), vV.Distance(VV, lV)
      }
      static Center(VV, eV) {
        return vV.CenterToRef(VV, eV, vV.Zero())
      }
      static CenterToRef(VV, eV, xV) {
        return xV.FeV((VV._x + eV._x) / 2, (VV._y + eV._y) / 2, (VV._z + eV._z) / 2)
      }
      static RotationFromAxis(VV, eV, xV) {
        const JV = new vV;
        return vV.RotationFromAxisToRef(VV, eV, xV, JV), JV
      }
      static RotationFromAxisToRef(VV, eV, xV, JV) {
        const YV = EV.Quaternion[0];
        return kV.RotationQuaternionFromAxisToRef(VV, eV, xV, YV), YV.toEulerAnglesToRef(JV), JV
      }
    }
    vV._V8PerformanceHack = new vV(.5, .5, .5), vV._UpReadOnly = vV.Up(), vV._DownReadOnly = vV.Down(), vV._LeftHandedForwardReadOnly = vV.Forward(!1), vV._RightHandedForwardReadOnly = vV.Forward(!0), vV._LeftHandedBackwardReadOnly = vV.Backward(!1), vV._RightHandedBackwardReadOnly = vV.Backward(!0), vV._RightReadOnly = vV.Right(), vV._LeftReadOnly = vV.Left(), vV._ZeroReadOnly = vV.Zero(), vV._OneReadOnly = vV.One();
    class rV {
      get x() {
        return this._x
      }
      set x(VV) {
        this._x = VV, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(VV) {
        this._y = VV, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(VV) {
        this._z = VV, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(VV) {
        this._w = VV, this._isDirty = !0
      }
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = VV, this._y = eV, this._z = xV, this._w = JV
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let VV = wV(this._x);
        return VV = 397 * VV ^ wV(this._y), VV = 397 * VV ^ wV(this._z), VV = 397 * VV ^ wV(this._w), VV
      }
      WYV() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(VV, eV) {
        return void 0 === eV && (eV = 0), VV[eV] = this._x, VV[eV + 1] = this._y, VV[eV + 2] = this._z, VV[eV + 3] = this._w, this
      }
      wZ(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rV.FromArrayToRef(VV, eV, this), this
      }
      addInPlace(VV) {
        return this.x += VV._x, this.y += VV._y, this.z += VV._z, this.w += VV._w, this
      }
      addInPlaceFromFloats(VV, eV, xV, JV) {
        return this.x += VV, this.y += eV, this.z += xV, this.w += JV, this
      }
      add(VV) {
        return new rV(this._x + VV.x, this._y + VV.y, this._z + VV.z, this._w + VV.w)
      }
      addToRef(VV, eV) {
        return eV.x = this._x + VV.x, eV.y = this._y + VV.y, eV.z = this._z + VV.z, eV.w = this._w + VV.w, eV
      }
      IYV(VV) {
        return this.x -= VV.x, this.y -= VV.y, this.z -= VV.z, this.w -= VV.w, this
      }
      subtract(VV) {
        return new rV(this._x - VV.x, this._y - VV.y, this._z - VV.z, this._w - VV.w)
      }
      subtractToRef(VV, eV) {
        return eV.x = this._x - VV.x, eV.y = this._y - VV.y, eV.z = this._z - VV.z, eV.w = this._w - VV.w, eV
      }
      subtractFromFloats(VV, eV, xV, JV) {
        return new rV(this._x - VV, this._y - eV, this._z - xV, this._w - JV)
      }
      subtractFromFloatsToRef(VV, eV, xV, JV, YV) {
        return YV.x = this._x - VV, YV.y = this._y - eV, YV.z = this._z - xV, YV.w = this._w - JV, YV
      }
      gr() {
        return new rV(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(VV) {
        return VV.x = -this._x, VV.y = -this._y, VV.z = -this._z, VV.w = -this._w, VV
      }
      scaleInPlace(VV) {
        return this.x *= VV, this.y *= VV, this.z *= VV, this.w *= VV, this
      }
      scale(VV) {
        return new rV(this._x * VV, this._y * VV, this._z * VV, this._w * VV)
      }
      scaleToRef(VV, eV) {
        return eV.x = this._x * VV, eV.y = this._y * VV, eV.z = this._z * VV, eV.w = this._w * VV, eV
      }
      scaleAndAddToRef(VV, eV) {
        return eV.x += this._x * VV, eV.y += this._y * VV, eV.z += this._z * VV, eV.w += this._w * VV, eV
      }
      equals(VV) {
        return VV && this._x === VV.x && this._y === VV.y && this._z === VV.z && this._w === VV.w
      }
      equalsWithEpsilon(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JV.b;
        return VV && (0, pV.WithinEpsilon)(this._x, VV.x, eV) && (0, pV.WithinEpsilon)(this._y, VV.y, eV) && (0, pV.WithinEpsilon)(this._z, VV.z, eV) && (0, pV.WithinEpsilon)(this._w, VV.w, eV)
      }
      rQV(VV, eV, xV, JV) {
        return this._x === VV && this._y === eV && this._z === xV && this._w === JV
      }
      multiplyInPlace(VV) {
        return this.x *= VV.x, this.y *= VV.y, this.z *= VV.z, this.w *= VV.w, this
      }
      multiply(VV) {
        return new rV(this._x * VV.x, this._y * VV.y, this._z * VV.z, this._w * VV.w)
      }
      multiplyToRef(VV, eV) {
        return eV.x = this._x * VV.x, eV.y = this._y * VV.y, eV.z = this._z * VV.z, eV.w = this._w * VV.w, eV
      }
      multiplyByFloats(VV, eV, xV, JV) {
        return new rV(this._x * VV, this._y * eV, this._z * xV, this._w * JV)
      }
      divide(VV) {
        return new rV(this._x / VV.x, this._y / VV.y, this._z / VV.z, this._w / VV.w)
      }
      divideToRef(VV, eV) {
        return eV.x = this._x / VV.x, eV.y = this._y / VV.y, eV.z = this._z / VV.z, eV.w = this._w / VV.w, eV
      }
      divideInPlace(VV) {
        return this.divideToRef(VV, this)
      }
      minimizeInPlace(VV) {
        return VV.x < this._x && (this.x = VV.x), VV.y < this._y && (this.y = VV.y), VV.z < this._z && (this.z = VV.z), VV.w < this._w && (this.w = VV.w), this
      }
      maximizeInPlace(VV) {
        return VV.x > this._x && (this.x = VV.x), VV.y > this._y && (this.y = VV.y), VV.z > this._z && (this.z = VV.z), VV.w > this._w && (this.w = VV.w), this
      }
      minimizeInPlaceFromFloats(VV, eV, xV, JV) {
        return this.x = Math.min(VV, this._x), this.y = Math.min(eV, this._y), this.z = Math.min(xV, this._z), this.w = Math.min(JV, this._w), this
      }
      maximizeInPlaceFromFloats(VV, eV, xV, JV) {
        return this.x = Math.max(VV, this._x), this.y = Math.max(eV, this._y), this.z = Math.max(xV, this._z), this.w = Math.max(JV, this._w), this
      }
      floorToRef(VV) {
        return VV.x = Math.floor(this._x), VV.y = Math.floor(this._y), VV.z = Math.floor(this._z), VV.w = Math.floor(this._w), VV
      }
      floor() {
        return new rV(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(VV) {
        return VV.x = this._x - Math.floor(this._x), VV.y = this._y - Math.floor(this._y), VV.z = this._z - Math.floor(this._z), VV.w = this._w - Math.floor(this._w), VV
      }
      fract() {
        return new rV(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(VV) {
        return 0 === VV || 1 === VV ? this : this.scaleInPlace(1 / VV)
      }
      normalizeToNew() {
        return this.normalizeToRef(new rV)
      }
      normalizeToRef(VV) {
        const eV = this.length();
        return 0 === eV || 1 === eV ? (VV.x = this._x, VV.y = this._y, VV.z = this._z, VV.w = this._w, VV) : this.scaleToRef(1 / eV, VV)
      }
      toVector3() {
        return new vV(this._x, this._y, this._z)
      }
      clone() {
        return new rV(this._x, this._y, this._z, this._w)
      }
      iG(VV) {
        return this.x = VV.x, this.y = VV.y, this.z = VV.z, this.w = VV.w, this
      }
      FeV(VV, eV, xV, JV) {
        return this.x = VV, this.y = eV, this.z = xV, this.w = JV, this
      }
      set(VV, eV, xV, JV) {
        return this.FeV(VV, eV, xV, JV)
      }
      HVV(VV) {
        return this.x = this.y = this.z = this.w = VV, this
      }
      dot(VV) {
        return this._x * VV.x + this._y * VV.y + this._z * VV.z + this._w * VV.w
      }
      static FromArray(VV, eV) {
        return eV || (eV = 0), new rV(VV[eV], VV[eV + 1], VV[eV + 2], VV[eV + 3])
      }
      static FromArrayToRef(VV, eV, xV) {
        return xV.x = VV[eV], xV.y = VV[eV + 1], xV.z = VV[eV + 2], xV.w = VV[eV + 3], xV
      }
      static FromFloatArrayToRef(VV, eV, xV) {
        return rV.FromArrayToRef(VV, eV, xV), xV
      }
      static FromFloatsToRef(VV, eV, xV, JV, YV) {
        return YV.x = VV, YV.y = eV, YV.z = xV, YV.w = JV, YV
      }
      static Zero() {
        return new rV(0, 0, 0, 0)
      }
      static One() {
        return new rV(1, 1, 1, 1)
      }
      static Random() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new rV((0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV))
      }
      static RandomToRef() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        return xV.x = (0, pV.RandomRange)(VV, eV), xV.y = (0, pV.RandomRange)(VV, eV), xV.z = (0, pV.RandomRange)(VV, eV), xV.w = (0, pV.RandomRange)(VV, eV), xV
      }
      static Clamp(VV, eV, xV) {
        return rV.ClampToRef(VV, eV, xV, new rV)
      }
      static ClampToRef(VV, eV, xV, JV) {
        return JV.x = (0, pV.Clamp)(VV.x, eV.x, xV.x), JV.y = (0, pV.Clamp)(VV.y, eV.y, xV.y), JV.z = (0, pV.Clamp)(VV.z, eV.z, xV.z), JV.w = (0, pV.Clamp)(VV.w, eV.w, xV.w), JV
      }
      static CheckExtends(VV, eV, xV) {
        eV.minimizeInPlace(VV), xV.maximizeInPlace(VV)
      }
      static get ZeroReadOnly() {
        return rV._ZeroReadOnly
      }
      static Normalize(VV) {
        return rV.NormalizeToRef(VV, new rV)
      }
      static NormalizeToRef(VV, eV) {
        return VV.normalizeToRef(eV), eV
      }
      static Minimize(VV, eV) {
        const xV = new rV;
        return xV.iG(VV), xV.minimizeInPlace(eV), xV
      }
      static Maximize(VV, eV) {
        const xV = new rV;
        return xV.iG(VV), xV.maximizeInPlace(eV), xV
      }
      static Distance(VV, eV) {
        return Math.sqrt(rV.DistanceSquared(VV, eV))
      }
      static DistanceSquared(VV, eV) {
        const xV = VV.x - eV.x,
          JV = VV.y - eV.y,
          YV = VV.z - eV.z,
          UV = VV.w - eV.w;
        return xV * xV + JV * JV + YV * YV + UV * UV
      }
      static Center(VV, eV) {
        return rV.CenterToRef(VV, eV, new rV)
      }
      static CenterToRef(VV, eV, xV) {
        return xV.x = (VV.x + eV.x) / 2, xV.y = (VV.y + eV.y) / 2, xV.z = (VV.z + eV.z) / 2, xV.w = (VV.w + eV.w) / 2, xV
      }
      static TransformCoordinates(VV, eV) {
        return rV.TransformCoordinatesToRef(VV, eV, new rV)
      }
      static TransformCoordinatesToRef(VV, eV, xV) {
        return rV.TransformCoordinatesFromFloatsToRef(VV._x, VV._y, VV._z, eV, xV), xV
      }
      static TransformCoordinatesFromFloatsToRef(VV, eV, xV, JV, YV) {
        const UV = JV.m,
          yV = VV * UV[0] + eV * UV[4] + xV * UV[8] + UV[12],
          pV = VV * UV[1] + eV * UV[5] + xV * UV[9] + UV[13],
          QV = VV * UV[2] + eV * UV[6] + xV * UV[10] + UV[14],
          nV = VV * UV[3] + eV * UV[7] + xV * UV[11] + UV[15];
        return YV.x = yV, YV.y = pV, YV.z = QV, YV.w = nV, YV
      }
      static TransformNormal(VV, eV) {
        return rV.TransformNormalToRef(VV, eV, new rV)
      }
      static TransformNormalToRef(VV, eV, xV) {
        const JV = eV.m,
          YV = VV.x * JV[0] + VV.y * JV[4] + VV.z * JV[8],
          UV = VV.x * JV[1] + VV.y * JV[5] + VV.z * JV[9],
          yV = VV.x * JV[2] + VV.y * JV[6] + VV.z * JV[10];
        return xV.x = YV, xV.y = UV, xV.z = yV, xV.w = VV.w, xV
      }
      static TransformNormalFromFloatsToRef(VV, eV, xV, JV, YV, UV) {
        const yV = YV.m;
        return UV.x = VV * yV[0] + eV * yV[4] + xV * yV[8], UV.y = VV * yV[1] + eV * yV[5] + xV * yV[9], UV.z = VV * yV[2] + eV * yV[6] + xV * yV[10], UV.w = JV, UV
      }
      static FromVector3(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new rV(VV._x, VV._y, VV._z, eV)
      }
      static Dot(VV, eV) {
        return VV.x * eV.x + VV.y * eV.y + VV.z * eV.z + VV.w * eV.w
      }
    }
    rV._V8PerformanceHack = new rV(.5, .5, .5, .5), rV._ZeroReadOnly = rV.Zero();
    class kV {
      get x() {
        return this._x
      }
      set x(VV) {
        this._x = VV, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(VV) {
        this._y = VV, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(VV) {
        this._z = VV, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(VV) {
        this._w = VV, this._isDirty = !0
      }
      constructor() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = VV, this._y = eV, this._z = xV, this._w = JV
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let VV = wV(this._x);
        return VV = 397 * VV ^ wV(this._y), VV = 397 * VV ^ wV(this._z), VV = 397 * VV ^ wV(this._w), VV
      }
      WYV() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return VV[eV] = this._x, VV[eV + 1] = this._y, VV[eV + 2] = this._z, VV[eV + 3] = this._w, this
      }
      wZ(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kV.FromArrayToRef(VV, eV, this)
      }
      equals(VV) {
        return VV && this._x === VV._x && this._y === VV._y && this._z === VV._z && this._w === VV._w
      }
      equalsWithEpsilon(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JV.b;
        return VV && (0, pV.WithinEpsilon)(this._x, VV._x, eV) && (0, pV.WithinEpsilon)(this._y, VV._y, eV) && (0, pV.WithinEpsilon)(this._z, VV._z, eV) && (0, pV.WithinEpsilon)(this._w, VV._w, eV)
      }
      isApprox(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JV.b;
        return VV && ((0, pV.WithinEpsilon)(this._x, VV._x, eV) && (0, pV.WithinEpsilon)(this._y, VV._y, eV) && (0, pV.WithinEpsilon)(this._z, VV._z, eV) && (0, pV.WithinEpsilon)(this._w, VV._w, eV) || (0, pV.WithinEpsilon)(this._x, -VV._x, eV) && (0, pV.WithinEpsilon)(this._y, -VV._y, eV) && (0, pV.WithinEpsilon)(this._z, -VV._z, eV) && (0, pV.WithinEpsilon)(this._w, -VV._w, eV))
      }
      clone() {
        return new kV(this._x, this._y, this._z, this._w)
      }
      iG(VV) {
        return this._x = VV._x, this._y = VV._y, this._z = VV._z, this._w = VV._w, this._isDirty = !0, this
      }
      FeV(VV, eV, xV, JV) {
        return this._x = VV, this._y = eV, this._z = xV, this._w = JV, this._isDirty = !0, this
      }
      set(VV, eV, xV, JV) {
        return this.FeV(VV, eV, xV, JV)
      }
      HVV(VV) {
        return this.FeV(VV, VV, VV, VV)
      }
      add(VV) {
        return new kV(this._x + VV._x, this._y + VV._y, this._z + VV._z, this._w + VV._w)
      }
      addInPlace(VV) {
        return this._x += VV._x, this._y += VV._y, this._z += VV._z, this._w += VV._w, this._isDirty = !0, this
      }
      addToRef(VV, eV) {
        return eV._x = this._x + VV._x, eV._y = this._y + VV._y, eV._z = this._z + VV._z, eV._w = this._w + VV._w, eV._isDirty = !0, eV
      }
      addInPlaceFromFloats(VV, eV, xV, JV) {
        return this._x += VV, this._y += eV, this._z += xV, this._w += JV, this._isDirty = !0, this
      }
      subtractToRef(VV, eV) {
        return eV._x = this._x - VV._x, eV._y = this._y - VV._y, eV._z = this._z - VV._z, eV._w = this._w - VV._w, eV._isDirty = !0, eV
      }
      subtractFromFloats(VV, eV, xV, JV) {
        return this.subtractFromFloatsToRef(VV, eV, xV, JV, new kV)
      }
      subtractFromFloatsToRef(VV, eV, xV, JV, YV) {
        return YV._x = this._x - VV, YV._y = this._y - eV, YV._z = this._z - xV, YV._w = this._w - JV, YV._isDirty = !0, YV
      }
      subtract(VV) {
        return new kV(this._x - VV._x, this._y - VV._y, this._z - VV._z, this._w - VV._w)
      }
      IYV(VV) {
        return this._x -= VV._x, this._y -= VV._y, this._z -= VV._z, this._w -= VV._w, this._isDirty = !0, this
      }
      scale(VV) {
        return new kV(this._x * VV, this._y * VV, this._z * VV, this._w * VV)
      }
      scaleToRef(VV, eV) {
        return eV._x = this._x * VV, eV._y = this._y * VV, eV._z = this._z * VV, eV._w = this._w * VV, eV._isDirty = !0, eV
      }
      scaleInPlace(VV) {
        return this._x *= VV, this._y *= VV, this._z *= VV, this._w *= VV, this._isDirty = !0, this
      }
      scaleAndAddToRef(VV, eV) {
        return eV._x += this._x * VV, eV._y += this._y * VV, eV._z += this._z * VV, eV._w += this._w * VV, eV._isDirty = !0, eV
      }
      multiply(VV) {
        const eV = new kV(0, 0, 0, 1);
        return this.multiplyToRef(VV, eV), eV
      }
      multiplyToRef(VV, eV) {
        const xV = this._x * VV._w + this._y * VV._z - this._z * VV._y + this._w * VV._x,
          JV = -this._x * VV._z + this._y * VV._w + this._z * VV._x + this._w * VV._y,
          YV = this._x * VV._y - this._y * VV._x + this._z * VV._w + this._w * VV._z,
          UV = -this._x * VV._x - this._y * VV._y - this._z * VV._z + this._w * VV._w;
        return eV.FeV(xV, JV, YV, UV), eV
      }
      multiplyInPlace(VV) {
        return this.multiplyToRef(VV, this)
      }
      multiplyByFloats(VV, eV, xV, JV) {
        return this._x *= VV, this._y *= eV, this._z *= xV, this._w *= JV, this._isDirty = !0, this
      }
      divide(VV) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(VV, eV) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(VV) {
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
      gr() {
        return this.negateToRef(new kV)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(VV) {
        return VV._x = -this._x, VV._y = -this._y, VV._z = -this._z, VV._w = -this._w, VV._isDirty = !0, VV
      }
      rQV(VV, eV, xV, JV) {
        return this._x === VV && this._y === eV && this._z === xV && this._w === JV
      }
      floorToRef(VV) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(VV) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(VV) {
        return VV.FeV(-this._x, -this._y, -this._z, this._w), VV
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new kV(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const VV = this.conjugate(),
          eV = this.lengthSquared();
        return 0 == eV || 1 == eV || VV.scaleInPlace(1 / eV), VV
      }
      invertInPlace() {
        this.conjugateInPlace();
        const VV = this.lengthSquared();
        return 0 == VV || 1 == VV || this.scaleInPlace(1 / VV), this
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
      normalizeFromLength(VV) {
        return 0 === VV || 1 === VV ? this : this.scaleInPlace(1 / VV)
      }
      normalizeToNew() {
        const VV = new kV(0, 0, 0, 1);
        return this.normalizeToRef(VV), VV
      }
      normalizeToRef(VV) {
        const eV = this.length();
        return 0 === eV || 1 === eV ? VV.FeV(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / eV, VV)
      }
      toEulerAngles() {
        const VV = vV.Zero();
        return this.toEulerAnglesToRef(VV), VV
      }
      toEulerAnglesToRef(VV) {
        const eV = this._z,
          xV = this._x,
          JV = this._y,
          YV = this._w,
          UV = JV * eV - xV * YV,
          yV = .4999999;
        if (UV < -yV) VV._y = 2 * Math.atan2(JV, YV), VV._x = Math.PI / 2, VV._z = 0, VV._isDirty = !0;
        else if (UV > yV) VV._y = 2 * Math.atan2(JV, YV), VV._x = -Math.PI / 2, VV._z = 0, VV._isDirty = !0;
        else {
          const yV = YV * YV,
            pV = eV * eV,
            QV = xV * xV,
            nV = JV * JV;
          VV._z = Math.atan2(2 * (xV * JV + eV * YV), -pV - QV + nV + yV), VV._x = Math.asin(-2 * UV), VV._y = Math.atan2(2 * (eV * xV + JV * YV), pV - QV - nV + yV), VV._isDirty = !0
        }
        return VV
      }
      toAlphaBetaGammaToRef(VV) {
        const eV = this._z,
          xV = this._x,
          JV = this._y,
          YV = this._w,
          UV = Math.sqrt(xV * xV + JV * JV),
          yV = Math.sqrt(eV * eV + YV * YV),
          pV = 2 * Math.atan2(UV, yV),
          QV = 2 * Math.atan2(eV, YV),
          nV = 2 * Math.atan2(JV, xV),
          wV = (QV + nV) / 2,
          ZV = (QV - nV) / 2;
        return VV.set(ZV, pV, wV), VV
      }
      toRotationMatrix(VV) {
        return bV.FromQuaternionToRef(this, VV), VV
      }
      fromRotationMatrix(VV) {
        return kV.FromRotationMatrixToRef(VV, this), this
      }
      dot(VV) {
        return this._x * VV._x + this._y * VV._y + this._z * VV._z + this._w * VV._w
      }
      toAxisAngle() {
        const VV = vV.Zero();
        return {
          axis: VV,
          angle: this.toAxisAngleToRef(VV)
        }
      }
      toAxisAngleToRef(VV) {
        let eV;
        const xV = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          JV = this._w;
        return xV > 0 ? (eV = 2 * Math.atan2(xV, JV), VV.set(this._x / xV, this._y / xV, this._z / xV)) : (eV = 0, VV.set(1, 0, 0)), eV
      }
      static FromRotationMatrix(VV) {
        const eV = new kV;
        return kV.FromRotationMatrixToRef(VV, eV), eV
      }
      static FromRotationMatrixToRef(VV, eV) {
        const xV = VV.m,
          JV = xV[0],
          YV = xV[4],
          UV = xV[8],
          yV = xV[1],
          pV = xV[5],
          QV = xV[9],
          nV = xV[2],
          wV = xV[6],
          ZV = xV[10],
          vV = JV + pV + ZV;
        let rV;
        return vV > 0 ? (rV = .5 / Math.sqrt(vV + 1), eV._w = .25 / rV, eV._x = (wV - QV) * rV, eV._y = (UV - nV) * rV, eV._z = (yV - YV) * rV, eV._isDirty = !0) : JV > pV && JV > ZV ? (rV = 2 * Math.sqrt(1 + JV - pV - ZV), eV._w = (wV - QV) / rV, eV._x = .25 * rV, eV._y = (YV + yV) / rV, eV._z = (UV + nV) / rV, eV._isDirty = !0) : pV > ZV ? (rV = 2 * Math.sqrt(1 + pV - JV - ZV), eV._w = (UV - nV) / rV, eV._x = (YV + yV) / rV, eV._y = .25 * rV, eV._z = (QV + wV) / rV, eV._isDirty = !0) : (rV = 2 * Math.sqrt(1 + ZV - JV - pV), eV._w = (yV - YV) / rV, eV._x = (UV + nV) / rV, eV._y = (QV + wV) / rV, eV._z = .25 * rV, eV._isDirty = !0), eV
      }
      static Dot(VV, eV) {
        return VV._x * eV._x + VV._y * eV._y + VV._z * eV._z + VV._w * eV._w
      }
      static AreClose(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const JV = kV.Dot(VV, eV);
        return 1 - JV * JV <= xV
      }
      static SmoothToRef(VV, eV, xV, JV, YV) {
        let UV = 0 === JV ? 1 : xV / JV;
        return UV = (0, pV.Clamp)(UV, 0, 1), kV.SlerpToRef(VV, eV, UV, YV), YV
      }
      static Zero() {
        return new kV(0, 0, 0, 0)
      }
      static Inverse(VV) {
        return new kV(-VV._x, -VV._y, -VV._z, VV._w)
      }
      static InverseToRef(VV, eV) {
        return eV.set(-VV._x, -VV._y, -VV._z, VV._w), eV
      }
      static Identity() {
        return new kV(0, 0, 0, 1)
      }
      static IsIdentity(VV) {
        return VV && 0 === VV._x && 0 === VV._y && 0 === VV._z && 1 === VV._w
      }
      static RotationAxis(VV, eV) {
        return kV.RotationAxisToRef(VV, eV, new kV)
      }
      static RotationAxisToRef(VV, eV, xV) {
        xV._w = Math.cos(eV / 2);
        const JV = Math.sin(eV / 2) / VV.length();
        return xV._x = VV._x * JV, xV._y = VV._y * JV, xV._z = VV._z * JV, xV._isDirty = !0, xV
      }
      static FromArray(VV, eV) {
        return eV || (eV = 0), new kV(VV[eV], VV[eV + 1], VV[eV + 2], VV[eV + 3])
      }
      static FromArrayToRef(VV, eV, xV) {
        return xV._x = VV[eV], xV._y = VV[eV + 1], xV._z = VV[eV + 2], xV._w = VV[eV + 3], xV._isDirty = !0, xV
      }
      static FromFloatsToRef(VV, eV, xV, JV, YV) {
        return YV.FeV(VV, eV, xV, JV), YV
      }
      static FromEulerAngles(VV, eV, xV) {
        const JV = new kV;
        return kV.RotationYawPitchRollToRef(eV, VV, xV, JV), JV
      }
      static FromEulerAnglesToRef(VV, eV, xV, JV) {
        return kV.RotationYawPitchRollToRef(eV, VV, xV, JV), JV
      }
      static FromEulerVector(VV) {
        const eV = new kV;
        return kV.RotationYawPitchRollToRef(VV._y, VV._x, VV._z, eV), eV
      }
      static FromEulerVectorToRef(VV, eV) {
        return kV.RotationYawPitchRollToRef(VV._y, VV._x, VV._z, eV), eV
      }
      static FromUnitVectorsToRef(VV, eV, xV) {
        let YV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : JV.b;
        const UV = vV.Dot(VV, eV) + 1;
        return UV < YV ? Math.abs(VV.x) > Math.abs(VV.z) ? xV.set(-VV.y, VV.x, 0, 0) : xV.set(0, -VV.z, VV.y, 0) : (vV.CrossToRef(VV, eV, BV.Ik[0]), xV.set(BV.Ik[0].x, BV.Ik[0].y, BV.Ik[0].z, UV)), xV.normalize()
      }
      static RotationYawPitchRoll(VV, eV, xV) {
        const JV = new kV;
        return kV.RotationYawPitchRollToRef(VV, eV, xV, JV), JV
      }
      static RotationYawPitchRollToRef(VV, eV, xV, JV) {
        const YV = .5 * xV,
          UV = .5 * eV,
          yV = .5 * VV,
          pV = Math.sin(YV),
          QV = Math.cos(YV),
          nV = Math.sin(UV),
          wV = Math.cos(UV),
          ZV = Math.sin(yV),
          vV = Math.cos(yV);
        return JV._x = vV * nV * QV + ZV * wV * pV, JV._y = ZV * wV * QV - vV * nV * pV, JV._z = vV * wV * pV - ZV * nV * QV, JV._w = vV * wV * QV + ZV * nV * pV, JV._isDirty = !0, JV
      }
      static RotationAlphaBetaGamma(VV, eV, xV) {
        const JV = new kV;
        return kV.RotationAlphaBetaGammaToRef(VV, eV, xV, JV), JV
      }
      static RotationAlphaBetaGammaToRef(VV, eV, xV, JV) {
        const YV = .5 * (xV + VV),
          UV = .5 * (xV - VV),
          yV = .5 * eV;
        return JV._x = Math.cos(UV) * Math.sin(yV), JV._y = Math.sin(UV) * Math.sin(yV), JV._z = Math.sin(YV) * Math.cos(yV), JV._w = Math.cos(YV) * Math.cos(yV), JV._isDirty = !0, JV
      }
      static RotationQuaternionFromAxis(VV, eV, xV) {
        const JV = new kV(0, 0, 0, 0);
        return kV.RotationQuaternionFromAxisToRef(VV, eV, xV, JV), JV
      }
      static RotationQuaternionFromAxisToRef(VV, eV, xV, JV) {
        const YV = EV.Matrix[0];
        return VV = VV.normalizeToRef(EV.Ik[0]), eV = eV.normalizeToRef(EV.Ik[1]), xV = xV.normalizeToRef(EV.Ik[2]), bV.FromXYZAxesToRef(VV, eV, xV, YV), kV.FromRotationMatrixToRef(YV, JV), JV
      }
      static FromLookDirectionLH(VV, eV) {
        const xV = new kV;
        return kV.FromLookDirectionLHToRef(VV, eV, xV), xV
      }
      static FromLookDirectionLHToRef(VV, eV, xV) {
        const JV = EV.Matrix[0];
        return bV.LookDirectionLHToRef(VV, eV, JV), kV.FromRotationMatrixToRef(JV, xV), xV
      }
      static FromLookDirectionRH(VV, eV) {
        const xV = new kV;
        return kV.FromLookDirectionRHToRef(VV, eV, xV), xV
      }
      static FromLookDirectionRHToRef(VV, eV, xV) {
        const JV = EV.Matrix[0];
        return bV.LookDirectionRHToRef(VV, eV, JV), kV.FromRotationMatrixToRef(JV, xV)
      }
      static Slerp(VV, eV, xV) {
        const JV = kV.Identity();
        return kV.SlerpToRef(VV, eV, xV, JV), JV
      }
      static SlerpToRef(VV, eV, xV, JV) {
        let YV, UV, yV = VV._x * eV._x + VV._y * eV._y + VV._z * eV._z + VV._w * eV._w,
          pV = !1;
        if (yV < 0 && (pV = !0, yV = -yV), yV > .999999) UV = 1 - xV, YV = pV ? -xV : xV;
        else {
          const VV = Math.acos(yV),
            eV = 1 / Math.sin(VV);
          UV = Math.sin((1 - xV) * VV) * eV, YV = pV ? -Math.sin(xV * VV) * eV : Math.sin(xV * VV) * eV
        }
        return JV._x = UV * VV._x + YV * eV._x, JV._y = UV * VV._y + YV * eV._y, JV._z = UV * VV._z + YV * eV._z, JV._w = UV * VV._w + YV * eV._w, JV._isDirty = !0, JV
      }
      static Hermite(VV, eV, xV, JV, YV) {
        const UV = YV * YV,
          yV = YV * UV,
          pV = 2 * yV - 3 * UV + 1,
          QV = -2 * yV + 3 * UV,
          nV = yV - 2 * UV + YV,
          wV = yV - UV,
          ZV = VV._x * pV + xV._x * QV + eV._x * nV + JV._x * wV,
          vV = VV._y * pV + xV._y * QV + eV._y * nV + JV._y * wV,
          rV = VV._z * pV + xV._z * QV + eV._z * nV + JV._z * wV,
          bV = VV._w * pV + xV._w * QV + eV._w * nV + JV._w * wV;
        return new kV(ZV, vV, rV, bV)
      }
      static Hermite1stDerivative(VV, eV, xV, JV, YV) {
        const UV = new kV;
        return this.Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV), UV
      }
      static Hermite1stDerivativeToRef(VV, eV, xV, JV, YV, UV) {
        const yV = YV * YV;
        return UV._x = 6 * (yV - YV) * VV._x + (3 * yV - 4 * YV + 1) * eV._x + 6 * (-yV + YV) * xV._x + (3 * yV - 2 * YV) * JV._x, UV._y = 6 * (yV - YV) * VV._y + (3 * yV - 4 * YV + 1) * eV._y + 6 * (-yV + YV) * xV._y + (3 * yV - 2 * YV) * JV._y, UV._z = 6 * (yV - YV) * VV._z + (3 * yV - 4 * YV + 1) * eV._z + 6 * (-yV + YV) * xV._z + (3 * yV - 2 * YV) * JV._z, UV._w = 6 * (yV - YV) * VV._w + (3 * yV - 4 * YV + 1) * eV._w + 6 * (-yV + YV) * xV._w + (3 * yV - 2 * YV) * JV._w, UV._isDirty = !0, UV
      }
      static Normalize(VV) {
        const eV = kV.Zero();
        return kV.NormalizeToRef(VV, eV), eV
      }
      static NormalizeToRef(VV, eV) {
        return VV.normalizeToRef(eV), eV
      }
      static Clamp(VV, eV, xV) {
        const JV = new kV;
        return kV.ClampToRef(VV, eV, xV, JV), JV
      }
      static ClampToRef(VV, eV, xV, JV) {
        return JV.FeV((0, pV.Clamp)(VV.x, eV.x, xV.x), (0, pV.Clamp)(VV.y, eV.y, xV.y), (0, pV.Clamp)(VV.z, eV.z, xV.z), (0, pV.Clamp)(VV.w, eV.w, xV.w))
      }
      static Random() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new kV((0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV))
      }
      static RandomToRef() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).FeV((0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV), (0, pV.RandomRange)(VV, eV))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(VV, eV) {
        return Math.sqrt(kV.DistanceSquared(VV, eV))
      }
      static DistanceSquared(VV, eV) {
        const xV = VV.x - eV.x,
          JV = VV.y - eV.y,
          YV = VV.z - eV.z,
          UV = VV.w - eV.w;
        return xV * xV + JV * JV + YV * YV + UV * UV
      }
      static Center(VV, eV) {
        return kV.CenterToRef(VV, eV, kV.Zero())
      }
      static CenterToRef(VV, eV, xV) {
        return xV.FeV((VV.x + eV.x) / 2, (VV.y + eV.y) / 2, (VV.z + eV.z) / 2, (VV.w + eV.w) / 2)
      }
    }
    kV._V8PerformanceHack = new kV(.5, .5, .5, .5);
    class bV {
      static get Use64Bits() {
        return UV.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = QV.h._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          JV = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = VV, this._isIdentity3x2 = VV || xV, this._isIdentityDirty = !this._isIdentity && eV, this._isIdentity3x2Dirty = !this._isIdentity3x2 && JV
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, UV.c.MatrixTrackPrecisionChange && UV.c.MatrixTrackedMatrices.push(this), this._m = new UV.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const VV = this._m;
          this._isIdentity = 1 === VV[0] && 0 === VV[1] && 0 === VV[2] && 0 === VV[3] && 0 === VV[4] && 1 === VV[5] && 0 === VV[6] && 0 === VV[7] && 0 === VV[8] && 0 === VV[9] && 1 === VV[10] && 0 === VV[11] && 0 === VV[12] && 0 === VV[13] && 0 === VV[14] && 1 === VV[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const VV = this._m,
          eV = VV[0],
          xV = VV[1],
          JV = VV[2],
          YV = VV[3],
          UV = VV[4],
          yV = VV[5],
          pV = VV[6],
          QV = VV[7],
          nV = VV[8],
          wV = VV[9],
          ZV = VV[10],
          vV = VV[11],
          rV = VV[12],
          kV = VV[13],
          bV = VV[14],
          EV = VV[15],
          BV = ZV * EV - bV * vV,
          jV = wV * EV - kV * vV,
          qV = wV * bV - kV * ZV,
          tV = nV * EV - rV * vV,
          FV = nV * bV - ZV * rV,
          TV = nV * kV - rV * wV;
        return eV * +(yV * BV - pV * jV + QV * qV) + xV * -(UV * BV - pV * tV + QV * FV) + JV * +(UV * jV - yV * tV + QV * TV) + YV * -(UV * qV - yV * FV + pV * TV)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!VV) return this._m;
        const xV = this._m;
        for (let JV = 0; JV < 16; JV++) VV[eV + JV] = xV[JV];
        return this
      }
      WYV() {
        return this._m
      }
      wZ(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bV.FromArrayToRef(VV, eV, this)
      }
      FeV() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return bV.FromArrayToRef(eV, 0, this)
      }
      set() {
        const VV = this._m;
        for (let eV = 0; eV < 16; eV++) VV[eV] = eV < 0 || arguments.length <= eV ? void 0 : arguments[eV];
        return this.markAsUpdated(), this
      }
      HVV(VV) {
        const eV = this._m;
        for (let xV = 0; xV < 16; xV++) eV[xV] = VV;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return bV.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(VV) {
        const eV = new bV;
        return this.addToRef(VV, eV), eV
      }
      addToRef(VV, eV) {
        const xV = this._m,
          JV = eV._m,
          YV = VV.m;
        for (let UV = 0; UV < 16; UV++) JV[UV] = xV[UV] + YV[UV];
        return eV.markAsUpdated(), eV
      }
      addToSelf(VV) {
        const eV = this._m,
          xV = VV.m;
        return eV[0] += xV[0], eV[1] += xV[1], eV[2] += xV[2], eV[3] += xV[3], eV[4] += xV[4], eV[5] += xV[5], eV[6] += xV[6], eV[7] += xV[7], eV[8] += xV[8], eV[9] += xV[9], eV[10] += xV[10], eV[11] += xV[11], eV[12] += xV[12], eV[13] += xV[13], eV[14] += xV[14], eV[15] += xV[15], this.markAsUpdated(), this
      }
      addInPlace(VV) {
        const eV = this._m,
          xV = VV.m;
        for (let JV = 0; JV < 16; JV++) eV[JV] += xV[JV];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const VV = this._m;
        for (let eV = 0; eV < 16; eV++) VV[eV] += eV < 0 || arguments.length <= eV ? void 0 : arguments[eV];
        return this.markAsUpdated(), this
      }
      subtract(VV) {
        const eV = this._m,
          xV = VV.m;
        for (let JV = 0; JV < 16; JV++) eV[JV] -= xV[JV];
        return this.markAsUpdated(), this
      }
      subtractToRef(VV, eV) {
        const xV = this._m,
          JV = VV.m,
          YV = eV._m;
        for (let UV = 0; UV < 16; UV++) YV[UV] = xV[UV] - JV[UV];
        return eV.markAsUpdated(), eV
      }
      IYV(VV) {
        const eV = this._m,
          xV = VV.m;
        for (let JV = 0; JV < 16; JV++) eV[JV] -= xV[JV];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return this.subtractFromFloatsToRef(...eV, new bV)
      }
      subtractFromFloatsToRef() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        const JV = eV.pop(),
          YV = this._m,
          UV = JV._m,
          yV = eV;
        for (let pV = 0; pV < 16; pV++) UV[pV] = YV[pV] - yV[pV];
        return JV.markAsUpdated(), JV
      }
      invertToRef(VV) {
        return !0 === this._isIdentity ? (bV.IdentityToRef(VV), VV) : ((0, QV.f)(this, VV.WYV()) ? VV.markAsUpdated() : VV.iG(this), VV)
      }
      addAtIndex(VV, eV) {
        return this._m[VV] += eV, this.markAsUpdated(), this
      }
      multiplyAtIndex(VV, eV) {
        return this._m[VV] *= eV, this.markAsUpdated(), this
      }
      setTranslationFromFloats(VV, eV, xV) {
        return this._m[12] = VV, this._m[13] = eV, this._m[14] = xV, this.markAsUpdated(), this
      }
      addTranslationFromFloats(VV, eV, xV) {
        return this._m[12] += VV, this._m[13] += eV, this._m[14] += xV, this.markAsUpdated(), this
      }
      setTranslation(VV) {
        return this.setTranslationFromFloats(VV._x, VV._y, VV._z)
      }
      getTranslation() {
        return new vV(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(VV) {
        return VV.x = this._m[12], VV.y = this._m[13], VV.z = this._m[14], VV
      }
      removeRotationAndScaling() {
        const VV = this.m;
        return bV.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, VV[12], VV[13], VV[14], VV[15], this), this._updateIdentityStatus(0 === VV[12] && 0 === VV[13] && 0 === VV[14] && 1 === VV[15]), this
      }
      iG(VV) {
        VV.copyToArray(this._m);
        const eV = VV;
        return this.updateFlag = eV.updateFlag, this._updateIdentityStatus(eV._isIdentity, eV._isIdentityDirty, eV._isIdentity3x2, eV._isIdentity3x2Dirty), this
      }
      copyToArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, QV.d)(this, VV, eV), this
      }
      multiply(VV) {
        const eV = new bV;
        return this.multiplyToRef(VV, eV), eV
      }
      multiplyInPlace(VV) {
        const eV = this._m,
          xV = VV.m;
        for (let JV = 0; JV < 16; JV++) eV[JV] *= xV[JV];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const VV = this._m;
        for (let eV = 0; eV < 16; eV++) VV[eV] *= eV < 0 || arguments.length <= eV ? void 0 : arguments[eV];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        const JV = eV.pop(),
          YV = this._m,
          UV = JV._m,
          yV = eV;
        for (let pV = 0; pV < 16; pV++) UV[pV] = YV[pV] * yV[pV];
        return JV.markAsUpdated(), JV
      }
      multiplyToRef(VV, eV) {
        return this._isIdentity ? (eV.iG(VV), eV) : VV._isIdentity ? (eV.iG(this), eV) : (this.multiplyToArray(VV, eV._m, 0), eV.markAsUpdated(), eV)
      }
      multiplyToArray(VV, eV, xV) {
        return (0, QV.j)(this, VV, eV, xV), this
      }
      divide(VV) {
        return this.divideToRef(VV, new bV)
      }
      divideToRef(VV, eV) {
        const xV = this._m,
          JV = VV.m,
          YV = eV._m;
        for (let UV = 0; UV < 16; UV++) YV[UV] = xV[UV] / JV[UV];
        return eV.markAsUpdated(), eV
      }
      divideInPlace(VV) {
        const eV = this._m,
          xV = VV.m;
        for (let JV = 0; JV < 16; JV++) eV[JV] /= xV[JV];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(VV) {
        const eV = this._m,
          xV = VV.m;
        for (let JV = 0; JV < 16; JV++) eV[JV] = Math.min(eV[JV], xV[JV]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const VV = this._m;
        for (let eV = 0; eV < 16; eV++) VV[eV] = Math.min(VV[eV], eV < 0 || arguments.length <= eV ? void 0 : arguments[eV]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(VV) {
        const eV = this._m,
          xV = VV.m;
        for (let JV = 0; JV < 16; JV++) eV[JV] = Math.max(eV[JV], xV[JV]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const VV = this._m;
        for (let eV = 0; eV < 16; eV++) VV[eV] = Math.max(VV[eV], eV < 0 || arguments.length <= eV ? void 0 : arguments[eV]);
        return this.markAsUpdated(), this
      }
      gr() {
        return this.negateToRef(new bV)
      }
      negateInPlace() {
        const VV = this._m;
        for (let eV = 0; eV < 16; eV++) VV[eV] = -VV[eV];
        return this.markAsUpdated(), this
      }
      negateToRef(VV) {
        const eV = this._m,
          xV = VV._m;
        for (let JV = 0; JV < 16; JV++) xV[JV] = -eV[JV];
        return VV.markAsUpdated(), VV
      }
      equals(VV) {
        const eV = VV;
        if (!eV) return !1;
        if ((this._isIdentity || eV._isIdentity) && !this._isIdentityDirty && !eV._isIdentityDirty) return this._isIdentity && eV._isIdentity;
        const xV = this.m,
          JV = eV.m;
        return xV[0] === JV[0] && xV[1] === JV[1] && xV[2] === JV[2] && xV[3] === JV[3] && xV[4] === JV[4] && xV[5] === JV[5] && xV[6] === JV[6] && xV[7] === JV[7] && xV[8] === JV[8] && xV[9] === JV[9] && xV[10] === JV[10] && xV[11] === JV[11] && xV[12] === JV[12] && xV[13] === JV[13] && xV[14] === JV[14] && xV[15] === JV[15]
      }
      equalsWithEpsilon(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = this._m,
          JV = VV.m;
        for (let YV = 0; YV < 16; YV++)
          if (!(0, pV.WithinEpsilon)(xV[YV], JV[YV], eV)) return !1;
        return !0
      }
      rQV() {
        const VV = this._m;
        for (let eV = 0; eV < 16; eV++)
          if (VV[eV] != (eV < 0 || arguments.length <= eV ? void 0 : arguments[eV])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new bV)
      }
      floorToRef(VV) {
        const eV = this._m,
          xV = VV._m;
        for (let JV = 0; JV < 16; JV++) xV[JV] = Math.floor(eV[JV]);
        return VV.markAsUpdated(), VV
      }
      fract() {
        return this.fractToRef(new bV)
      }
      fractToRef(VV) {
        const eV = this._m,
          xV = VV._m;
        for (let JV = 0; JV < 16; JV++) xV[JV] = eV[JV] - Math.floor(eV[JV]);
        return VV.markAsUpdated(), VV
      }
      clone() {
        const VV = new bV;
        return VV.iG(this), VV
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let VV = wV(this._m[0]);
        for (let eV = 1; eV < 16; eV++) VV = 397 * VV ^ wV(this._m[eV]);
        return VV
      }
      decomposeToTransformNode(VV) {
        return VV.rotationQuaternion = VV.rotationQuaternion || new kV, this.decompose(VV.WZ, VV.rotationQuaternion, VV.position)
      }
      decompose(VV, eV, xV, JV) {
        let YV = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return xV && xV.HVV(0), VV && VV.HVV(1), eV && eV.FeV(0, 0, 0, 1), !0;
        const UV = this._m;
        if (xV && xV.FeV(UV[12], UV[13], UV[14]), (VV = VV || EV.Ik[0]).x = Math.sqrt(UV[0] * UV[0] + UV[1] * UV[1] + UV[2] * UV[2]), VV.y = Math.sqrt(UV[4] * UV[4] + UV[5] * UV[5] + UV[6] * UV[6]), VV.z = Math.sqrt(UV[8] * UV[8] + UV[9] * UV[9] + UV[10] * UV[10]), JV) {
          const eV = (YV ? JV.absoluteScaling.x : JV.WZ.x) < 0 ? -1 : 1,
            xV = (YV ? JV.absoluteScaling.y : JV.WZ.y) < 0 ? -1 : 1,
            UV = (YV ? JV.absoluteScaling.z : JV.WZ.z) < 0 ? -1 : 1;
          VV.x *= eV, VV.y *= xV, VV.z *= UV
        } else this.determinant() <= 0 && (VV.y *= -1);
        if (0 === VV._x || 0 === VV._y || 0 === VV._z) return eV && eV.FeV(0, 0, 0, 1), !1;
        if (eV) {
          const xV = 1 / VV._x,
            JV = 1 / VV._y,
            YV = 1 / VV._z;
          bV.FromValuesToRef(UV[0] * xV, UV[1] * xV, UV[2] * xV, 0, UV[4] * JV, UV[5] * JV, UV[6] * JV, 0, UV[8] * YV, UV[9] * YV, UV[10] * YV, 0, 0, 0, 0, 1, EV.Matrix[0]), kV.FromRotationMatrixToRef(EV.Matrix[0], eV)
        }
        return !0
      }
      getRow(VV) {
        if (VV < 0 || VV > 3) return null;
        const eV = 4 * VV;
        return new rV(this._m[eV + 0], this._m[eV + 1], this._m[eV + 2], this._m[eV + 3])
      }
      getRowToRef(VV, eV) {
        if (VV >= 0 && VV <= 3) {
          const xV = 4 * VV;
          eV.x = this._m[xV + 0], eV.y = this._m[xV + 1], eV.z = this._m[xV + 2], eV.w = this._m[xV + 3]
        }
        return eV
      }
      setRow(VV, eV) {
        return this.setRowFromFloats(VV, eV.x, eV.y, eV.z, eV.w)
      }
      transpose() {
        const VV = new bV;
        return bV.TransposeToRef(this, VV), VV
      }
      transposeToRef(VV) {
        return bV.TransposeToRef(this, VV), VV
      }
      setRowFromFloats(VV, eV, xV, JV, YV) {
        if (VV < 0 || VV > 3) return this;
        const UV = 4 * VV;
        return this._m[UV + 0] = eV, this._m[UV + 1] = xV, this._m[UV + 2] = JV, this._m[UV + 3] = YV, this.markAsUpdated(), this
      }
      scale(VV) {
        const eV = new bV;
        return this.scaleToRef(VV, eV), eV
      }
      scaleToRef(VV, eV) {
        for (let xV = 0; xV < 16; xV++) eV._m[xV] = this._m[xV] * VV;
        return eV.markAsUpdated(), eV
      }
      scaleAndAddToRef(VV, eV) {
        for (let xV = 0; xV < 16; xV++) eV._m[xV] += this._m[xV] * VV;
        return eV.markAsUpdated(), eV
      }
      scaleInPlace(VV) {
        const eV = this._m;
        for (let xV = 0; xV < 16; xV++) eV[xV] *= VV;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(VV) {
        const eV = EV.Matrix[0];
        this.invertToRef(eV), eV.transposeToRef(VV);
        const xV = VV._m;
        return bV.FromValuesToRef(xV[0], xV[1], xV[2], 0, xV[4], xV[5], xV[6], 0, xV[8], xV[9], xV[10], 0, 0, 0, 0, 1, VV), VV
      }
      getRotationMatrix() {
        const VV = new bV;
        return this.getRotationMatrixToRef(VV), VV
      }
      getRotationMatrixToRef(VV) {
        const eV = EV.Ik[0];
        if (!this.decompose(eV)) return bV.IdentityToRef(VV), VV;
        const xV = this._m,
          JV = 1 / eV._x,
          YV = 1 / eV._y,
          UV = 1 / eV._z;
        return bV.FromValuesToRef(xV[0] * JV, xV[1] * JV, xV[2] * JV, 0, xV[4] * YV, xV[5] * YV, xV[6] * YV, 0, xV[8] * UV, xV[9] * UV, xV[10] * UV, 0, 0, 0, 0, 1, VV), VV
      }
      toggleModelMatrixHandInPlace() {
        const VV = this._m;
        return VV[2] *= -1, VV[6] *= -1, VV[8] *= -1, VV[9] *= -1, VV[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const VV = this._m;
        return VV[8] *= -1, VV[9] *= -1, VV[10] *= -1, VV[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(jV, this), this
      }
      static FromArray(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const xV = new bV;
        return bV.FromArrayToRef(VV, eV, xV), xV
      }
      static FromArrayToRef(VV, eV, xV) {
        for (let JV = 0; JV < 16; JV++) xV._m[JV] = VV[JV + eV];
        return xV.markAsUpdated(), xV
      }
      static FromFloat32ArrayToRefScaled(VV, eV, xV, JV) {
        return JV._m[0] = VV[0 + eV] * xV, JV._m[1] = VV[1 + eV] * xV, JV._m[2] = VV[2 + eV] * xV, JV._m[3] = VV[3 + eV] * xV, JV._m[4] = VV[4 + eV] * xV, JV._m[5] = VV[5 + eV] * xV, JV._m[6] = VV[6 + eV] * xV, JV._m[7] = VV[7 + eV] * xV, JV._m[8] = VV[8 + eV] * xV, JV._m[9] = VV[9 + eV] * xV, JV._m[10] = VV[10 + eV] * xV, JV._m[11] = VV[11 + eV] * xV, JV._m[12] = VV[12 + eV] * xV, JV._m[13] = VV[13 + eV] * xV, JV._m[14] = VV[14 + eV] * xV, JV._m[15] = VV[15 + eV] * xV, JV.markAsUpdated(), JV
      }
      static get IdentityReadOnly() {
        return bV._IdentityReadOnly
      }
      static FromValuesToRef(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV) {
        const BV = EV._m;
        BV[0] = VV, BV[1] = eV, BV[2] = xV, BV[3] = JV, BV[4] = YV, BV[5] = UV, BV[6] = yV, BV[7] = pV, BV[8] = QV, BV[9] = nV, BV[10] = wV, BV[11] = ZV, BV[12] = vV, BV[13] = rV, BV[14] = kV, BV[15] = bV, EV.markAsUpdated()
      }
      static FromValues(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV, rV, kV, EV) {
        const BV = new bV,
          jV = BV._m;
        return jV[0] = VV, jV[1] = eV, jV[2] = xV, jV[3] = JV, jV[4] = YV, jV[5] = UV, jV[6] = yV, jV[7] = pV, jV[8] = QV, jV[9] = nV, jV[10] = wV, jV[11] = ZV, jV[12] = vV, jV[13] = rV, jV[14] = kV, jV[15] = EV, BV.markAsUpdated(), BV
      }
      static Compose(VV, eV, xV) {
        const JV = new bV;
        return bV.ComposeToRef(VV, eV, xV, JV), JV
      }
      static ComposeToRef(VV, eV, xV, JV) {
        const YV = JV._m,
          UV = eV._x,
          yV = eV._y,
          pV = eV._z,
          QV = eV._w,
          nV = UV + UV,
          wV = yV + yV,
          ZV = pV + pV,
          vV = UV * nV,
          rV = UV * wV,
          kV = UV * ZV,
          bV = yV * wV,
          EV = yV * ZV,
          BV = pV * ZV,
          jV = QV * nV,
          qV = QV * wV,
          tV = QV * ZV,
          FV = VV._x,
          TV = VV._y,
          PV = VV._z;
        return YV[0] = (1 - (bV + BV)) * FV, YV[1] = (rV + tV) * FV, YV[2] = (kV - qV) * FV, YV[3] = 0, YV[4] = (rV - tV) * TV, YV[5] = (1 - (vV + BV)) * TV, YV[6] = (EV + jV) * TV, YV[7] = 0, YV[8] = (kV + qV) * PV, YV[9] = (EV - jV) * PV, YV[10] = (1 - (vV + bV)) * PV, YV[11] = 0, YV[12] = xV._x, YV[13] = xV._y, YV[14] = xV._z, YV[15] = 1, JV.markAsUpdated(), JV
      }
      static Identity() {
        const VV = bV.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return VV._updateIdentityStatus(!0), VV
      }
      static IdentityToRef(VV) {
        return bV.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, VV), VV._updateIdentityStatus(!0), VV
      }
      static Zero() {
        const VV = bV.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return VV._updateIdentityStatus(!1), VV
      }
      static RotationX(VV) {
        const eV = new bV;
        return bV.RotationXToRef(VV, eV), eV
      }
      static Invert(VV) {
        const eV = new bV;
        return VV.invertToRef(eV), eV
      }
      static RotationXToRef(VV, eV) {
        const xV = Math.sin(VV),
          JV = Math.cos(VV);
        return bV.FromValuesToRef(1, 0, 0, 0, 0, JV, xV, 0, 0, -xV, JV, 0, 0, 0, 0, 1, eV), eV._updateIdentityStatus(1 === JV && 0 === xV), eV
      }
      static RotationY(VV) {
        const eV = new bV;
        return bV.RotationYToRef(VV, eV), eV
      }
      static RotationYToRef(VV, eV) {
        const xV = Math.sin(VV),
          JV = Math.cos(VV);
        return bV.FromValuesToRef(JV, 0, -xV, 0, 0, 1, 0, 0, xV, 0, JV, 0, 0, 0, 0, 1, eV), eV._updateIdentityStatus(1 === JV && 0 === xV), eV
      }
      static RotationZ(VV) {
        const eV = new bV;
        return bV.RotationZToRef(VV, eV), eV
      }
      static RotationZToRef(VV, eV) {
        const xV = Math.sin(VV),
          JV = Math.cos(VV);
        return bV.FromValuesToRef(JV, xV, 0, 0, -xV, JV, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, eV), eV._updateIdentityStatus(1 === JV && 0 === xV), eV
      }
      static RotationAxis(VV, eV) {
        const xV = new bV;
        return bV.RotationAxisToRef(VV, eV, xV), xV
      }
      static RotationAxisToRef(VV, eV, xV) {
        const JV = Math.sin(-eV),
          YV = Math.cos(-eV),
          UV = 1 - YV;
        VV = VV.normalizeToRef(EV.Ik[0]);
        const yV = xV._m;
        return yV[0] = VV._x * VV._x * UV + YV, yV[1] = VV._x * VV._y * UV - VV._z * JV, yV[2] = VV._x * VV._z * UV + VV._y * JV, yV[3] = 0, yV[4] = VV._y * VV._x * UV + VV._z * JV, yV[5] = VV._y * VV._y * UV + YV, yV[6] = VV._y * VV._z * UV - VV._x * JV, yV[7] = 0, yV[8] = VV._z * VV._x * UV - VV._y * JV, yV[9] = VV._z * VV._y * UV + VV._x * JV, yV[10] = VV._z * VV._z * UV + YV, yV[11] = 0, yV[12] = 0, yV[13] = 0, yV[14] = 0, yV[15] = 1, xV.markAsUpdated(), xV
      }
      static RotationAlignToRef(VV, eV, xV) {
        let YV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const UV = vV.Dot(eV, VV),
          yV = xV._m;
        if (UV < -1 + JV.b) yV[0] = -1, yV[1] = 0, yV[2] = 0, yV[3] = 0, yV[4] = 0, yV[5] = YV ? 1 : -1, yV[6] = 0, yV[7] = 0, yV[8] = 0, yV[9] = 0, yV[10] = YV ? -1 : 1, yV[11] = 0;
        else {
          const xV = vV.Cross(eV, VV),
            JV = 1 / (1 + UV);
          yV[0] = xV._x * xV._x * JV + UV, yV[1] = xV._y * xV._x * JV - xV._z, yV[2] = xV._z * xV._x * JV + xV._y, yV[3] = 0, yV[4] = xV._x * xV._y * JV + xV._z, yV[5] = xV._y * xV._y * JV + UV, yV[6] = xV._z * xV._y * JV - xV._x, yV[7] = 0, yV[8] = xV._x * xV._z * JV - xV._y, yV[9] = xV._y * xV._z * JV + xV._x, yV[10] = xV._z * xV._z * JV + UV, yV[11] = 0
        }
        return yV[12] = 0, yV[13] = 0, yV[14] = 0, yV[15] = 1, xV.markAsUpdated(), xV
      }
      static RotationYawPitchRoll(VV, eV, xV) {
        const JV = new bV;
        return bV.RotationYawPitchRollToRef(VV, eV, xV, JV), JV
      }
      static RotationYawPitchRollToRef(VV, eV, xV, JV) {
        return kV.RotationYawPitchRollToRef(VV, eV, xV, EV.Quaternion[0]), EV.Quaternion[0].toRotationMatrix(JV), JV
      }
      static Scaling(VV, eV, xV) {
        const JV = new bV;
        return bV.ScalingToRef(VV, eV, xV, JV), JV
      }
      static ScalingToRef(VV, eV, xV, JV) {
        return bV.FromValuesToRef(VV, 0, 0, 0, 0, eV, 0, 0, 0, 0, xV, 0, 0, 0, 0, 1, JV), JV._updateIdentityStatus(1 === VV && 1 === eV && 1 === xV), JV
      }
      static Translation(VV, eV, xV) {
        const JV = new bV;
        return bV.TranslationToRef(VV, eV, xV, JV), JV
      }
      static TranslationToRef(VV, eV, xV, JV) {
        return bV.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, VV, eV, xV, 1, JV), JV._updateIdentityStatus(0 === VV && 0 === eV && 0 === xV), JV
      }
      static Lerp(VV, eV, xV) {
        const JV = new bV;
        return bV.LerpToRef(VV, eV, xV, JV), JV
      }
      static LerpToRef(VV, eV, xV, JV) {
        const YV = JV._m,
          UV = VV.m,
          yV = eV.m;
        for (let pV = 0; pV < 16; pV++) YV[pV] = UV[pV] * (1 - xV) + yV[pV] * xV;
        return JV.markAsUpdated(), JV
      }
      static DecomposeLerp(VV, eV, xV) {
        const JV = new bV;
        return bV.DecomposeLerpToRef(VV, eV, xV, JV), JV
      }
      static DecomposeLerpToRef(VV, eV, xV, JV) {
        const YV = EV.Ik[0],
          UV = EV.Quaternion[0],
          yV = EV.Ik[1];
        VV.decompose(YV, UV, yV);
        const pV = EV.Ik[2],
          QV = EV.Quaternion[1],
          nV = EV.Ik[3];
        eV.decompose(pV, QV, nV);
        const wV = EV.Ik[4];
        vV.LerpToRef(YV, pV, xV, wV);
        const ZV = EV.Quaternion[2];
        kV.SlerpToRef(UV, QV, xV, ZV);
        const rV = EV.Ik[5];
        return vV.LerpToRef(yV, nV, xV, rV), bV.ComposeToRef(wV, ZV, rV, JV), JV
      }
      static LookAtLH(VV, eV, xV) {
        const JV = new bV;
        return bV.LookAtLHToRef(VV, eV, xV, JV), JV
      }
      static LookAtLHToRef(VV, eV, xV, JV) {
        const YV = EV.Ik[0],
          UV = EV.Ik[1],
          yV = EV.Ik[2];
        eV.subtractToRef(VV, yV), yV.normalize(), vV.CrossToRef(xV, yV, YV);
        const pV = YV.lengthSquared();
        0 === pV ? YV.x = 1 : YV.normalizeFromLength(Math.sqrt(pV)), vV.CrossToRef(yV, YV, UV), UV.normalize();
        const QV = -vV.Dot(YV, VV),
          nV = -vV.Dot(UV, VV),
          wV = -vV.Dot(yV, VV);
        return bV.FromValuesToRef(YV._x, UV._x, yV._x, 0, YV._y, UV._y, yV._y, 0, YV._z, UV._z, yV._z, 0, QV, nV, wV, 1, JV), JV
      }
      static LookAtRH(VV, eV, xV) {
        const JV = new bV;
        return bV.LookAtRHToRef(VV, eV, xV, JV), JV
      }
      static LookAtRHToRef(VV, eV, xV, JV) {
        const YV = EV.Ik[0],
          UV = EV.Ik[1],
          yV = EV.Ik[2];
        VV.subtractToRef(eV, yV), yV.normalize(), vV.CrossToRef(xV, yV, YV);
        const pV = YV.lengthSquared();
        0 === pV ? YV.x = 1 : YV.normalizeFromLength(Math.sqrt(pV)), vV.CrossToRef(yV, YV, UV), UV.normalize();
        const QV = -vV.Dot(YV, VV),
          nV = -vV.Dot(UV, VV),
          wV = -vV.Dot(yV, VV);
        return bV.FromValuesToRef(YV._x, UV._x, yV._x, 0, YV._y, UV._y, yV._y, 0, YV._z, UV._z, yV._z, 0, QV, nV, wV, 1, JV), JV
      }
      static LookDirectionLH(VV, eV) {
        const xV = new bV;
        return bV.LookDirectionLHToRef(VV, eV, xV), xV
      }
      static LookDirectionLHToRef(VV, eV, xV) {
        const JV = EV.Ik[0];
        JV.iG(VV), JV.scaleInPlace(-1);
        const YV = EV.Ik[1];
        return vV.CrossToRef(eV, JV, YV), bV.FromValuesToRef(YV._x, YV._y, YV._z, 0, eV._x, eV._y, eV._z, 0, JV._x, JV._y, JV._z, 0, 0, 0, 0, 1, xV), xV
      }
      static LookDirectionRH(VV, eV) {
        const xV = new bV;
        return bV.LookDirectionRHToRef(VV, eV, xV), xV
      }
      static LookDirectionRHToRef(VV, eV, xV) {
        const JV = EV.Ik[2];
        return vV.CrossToRef(eV, VV, JV), bV.FromValuesToRef(JV._x, JV._y, JV._z, 0, eV._x, eV._y, eV._z, 0, VV._x, VV._y, VV._z, 0, 0, 0, 0, 1, xV), xV
      }
      static OrthoLH(VV, eV, xV, JV, YV) {
        const UV = new bV;
        return bV.OrthoLHToRef(VV, eV, xV, JV, UV, YV), UV
      }
      static OrthoLHToRef(VV, eV, xV, JV, YV, UV) {
        const yV = 2 / VV,
          pV = 2 / eV,
          QV = 2 / (JV - xV),
          nV = -(JV + xV) / (JV - xV);
        return bV.FromValuesToRef(yV, 0, 0, 0, 0, pV, 0, 0, 0, 0, QV, 0, 0, 0, nV, 1, YV), UV && YV.multiplyToRef(jV, YV), YV._updateIdentityStatus(1 === yV && 1 === pV && 1 === QV && 0 === nV), YV
      }
      static OrthoOffCenterLH(VV, eV, xV, JV, YV, UV, yV) {
        const pV = new bV;
        return bV.OrthoOffCenterLHToRef(VV, eV, xV, JV, YV, UV, pV, yV), pV
      }
      static OrthoOffCenterLHToRef(VV, eV, xV, JV, YV, UV, yV, pV) {
        const QV = 2 / (eV - VV),
          nV = 2 / (JV - xV),
          wV = 2 / (UV - YV),
          ZV = -(UV + YV) / (UV - YV),
          vV = (VV + eV) / (VV - eV),
          rV = (JV + xV) / (xV - JV);
        return bV.FromValuesToRef(QV, 0, 0, 0, 0, nV, 0, 0, 0, 0, wV, 0, vV, rV, ZV, 1, yV), pV && yV.multiplyToRef(jV, yV), yV.markAsUpdated(), yV
      }
      static ObliqueOffCenterLHToRef(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
        const ZV = -yV * Math.cos(pV),
          vV = -yV * Math.sin(pV);
        return bV.TranslationToRef(0, 0, -QV, EV.Matrix[1]), bV.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, ZV, vV, 1, 0, 0, 0, 0, 1, EV.Matrix[0]), EV.Matrix[1].multiplyToRef(EV.Matrix[0], EV.Matrix[0]), bV.TranslationToRef(0, 0, QV, EV.Matrix[1]), EV.Matrix[0].multiplyToRef(EV.Matrix[1], EV.Matrix[0]), bV.OrthoOffCenterLHToRef(VV, eV, xV, JV, YV, UV, nV, wV), EV.Matrix[0].multiplyToRef(nV, nV), nV
      }
      static OrthoOffCenterRH(VV, eV, xV, JV, YV, UV, yV) {
        const pV = new bV;
        return bV.OrthoOffCenterRHToRef(VV, eV, xV, JV, YV, UV, pV, yV), pV
      }
      static OrthoOffCenterRHToRef(VV, eV, xV, JV, YV, UV, yV, pV) {
        return bV.OrthoOffCenterLHToRef(VV, eV, xV, JV, YV, UV, yV, pV), yV._m[10] *= -1, yV
      }
      static ObliqueOffCenterRHToRef(VV, eV, xV, JV, YV, UV, yV, pV, QV, nV, wV) {
        const ZV = yV * Math.cos(pV),
          vV = yV * Math.sin(pV);
        return bV.TranslationToRef(0, 0, QV, EV.Matrix[1]), bV.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, ZV, vV, 1, 0, 0, 0, 0, 1, EV.Matrix[0]), EV.Matrix[1].multiplyToRef(EV.Matrix[0], EV.Matrix[0]), bV.TranslationToRef(0, 0, -QV, EV.Matrix[1]), EV.Matrix[0].multiplyToRef(EV.Matrix[1], EV.Matrix[0]), bV.OrthoOffCenterRHToRef(VV, eV, xV, JV, YV, UV, nV, wV), EV.Matrix[0].multiplyToRef(nV, nV), nV
      }
      static PerspectiveLH(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const yV = new bV,
          pV = 2 * xV / VV,
          QV = 2 * xV / eV,
          nV = (JV + xV) / (JV - xV),
          wV = -2 * JV * xV / (JV - xV),
          ZV = Math.tan(UV);
        return bV.FromValuesToRef(pV, 0, 0, 0, 0, QV, 0, ZV, 0, 0, nV, 1, 0, 0, wV, 0, yV), YV && yV.multiplyToRef(jV, yV), yV._updateIdentityStatus(!1), yV
      }
      static PerspectiveFovLH(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const pV = new bV;
        return bV.PerspectiveFovLHToRef(VV, eV, xV, JV, pV, !0, YV, UV, yV), pV
      }
      static PerspectiveFovLHToRef(VV, eV, xV, JV, YV) {
        let UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const nV = xV,
          wV = JV,
          ZV = 1 / Math.tan(.5 * VV),
          vV = UV ? ZV / eV : ZV,
          rV = UV ? ZV : ZV * eV,
          kV = QV && 0 === nV ? -1 : 0 !== wV ? (wV + nV) / (wV - nV) : 1,
          EV = QV && 0 === nV ? 2 * wV : 0 !== wV ? -2 * wV * nV / (wV - nV) : -2 * nV,
          BV = Math.tan(pV);
        return bV.FromValuesToRef(vV, 0, 0, 0, 0, rV, 0, BV, 0, 0, kV, 1, 0, 0, EV, 0, YV), yV && YV.multiplyToRef(jV, YV), YV._updateIdentityStatus(!1), YV
      }
      static PerspectiveFovReverseLHToRef(VV, eV, xV, JV, YV) {
        let UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const QV = 1 / Math.tan(.5 * VV),
          nV = UV ? QV / eV : QV,
          wV = UV ? QV : QV * eV,
          ZV = Math.tan(pV);
        return bV.FromValuesToRef(nV, 0, 0, 0, 0, wV, 0, ZV, 0, 0, -xV, 1, 0, 0, 1, 0, YV), yV && YV.multiplyToRef(jV, YV), YV._updateIdentityStatus(!1), YV
      }
      static PerspectiveFovRH(VV, eV, xV, JV, YV) {
        let UV = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yV = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const pV = new bV;
        return bV.PerspectiveFovRHToRef(VV, eV, xV, JV, pV, !0, YV, UV, yV), pV
      }
      static PerspectiveFovRHToRef(VV, eV, xV, JV, YV) {
        let UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          QV = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const nV = xV,
          wV = JV,
          ZV = 1 / Math.tan(.5 * VV),
          vV = UV ? ZV / eV : ZV,
          rV = UV ? ZV : ZV * eV,
          kV = QV && 0 === nV ? 1 : 0 !== wV ? -(wV + nV) / (wV - nV) : -1,
          EV = QV && 0 === nV ? 2 * wV : 0 !== wV ? -2 * wV * nV / (wV - nV) : -2 * nV,
          BV = Math.tan(pV);
        return bV.FromValuesToRef(vV, 0, 0, 0, 0, rV, 0, BV, 0, 0, kV, -1, 0, 0, EV, 0, YV), yV && YV.multiplyToRef(jV, YV), YV._updateIdentityStatus(!1), YV
      }
      static PerspectiveFovReverseRHToRef(VV, eV, xV, JV, YV) {
        let UV = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yV = arguments.length > 6 ? arguments[6] : void 0,
          pV = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const QV = 1 / Math.tan(.5 * VV),
          nV = UV ? QV / eV : QV,
          wV = UV ? QV : QV * eV,
          ZV = Math.tan(pV);
        return bV.FromValuesToRef(nV, 0, 0, 0, 0, wV, 0, ZV, 0, 0, -xV, -1, 0, 0, -1, 0, YV), yV && YV.multiplyToRef(jV, YV), YV._updateIdentityStatus(!1), YV
      }
      static GetFinalMatrix(VV, eV, xV, JV, YV, UV) {
        const yV = VV.width,
          pV = VV.height,
          QV = VV.x,
          nV = VV.y,
          wV = bV.FromValues(yV / 2, 0, 0, 0, 0, -pV / 2, 0, 0, 0, 0, UV - YV, 0, QV + yV / 2, pV / 2 + nV, YV, 1),
          ZV = new bV;
        return eV.multiplyToRef(xV, ZV), ZV.multiplyToRef(JV, ZV), ZV.multiplyToRef(wV, ZV)
      }
      static GetAsMatrix2x2(VV) {
        const eV = VV.m,
          xV = [eV[0], eV[1], eV[4], eV[5]];
        return UV.c.MatrixUse64Bits ? xV : new Float32Array(xV)
      }
      static GetAsMatrix3x3(VV) {
        const eV = VV.m,
          xV = [eV[0], eV[1], eV[2], eV[4], eV[5], eV[6], eV[8], eV[9], eV[10]];
        return UV.c.MatrixUse64Bits ? xV : new Float32Array(xV)
      }
      static Transpose(VV) {
        const eV = new bV;
        return bV.TransposeToRef(VV, eV), eV
      }
      static TransposeToRef(VV, eV) {
        const xV = VV.m,
          JV = xV[0],
          YV = xV[4],
          UV = xV[8],
          yV = xV[12],
          pV = xV[1],
          QV = xV[5],
          nV = xV[9],
          wV = xV[13],
          ZV = xV[2],
          vV = xV[6],
          rV = xV[10],
          kV = xV[14],
          bV = xV[3],
          EV = xV[7],
          BV = xV[11],
          jV = xV[15],
          qV = eV._m;
        return qV[0] = JV, qV[1] = YV, qV[2] = UV, qV[3] = yV, qV[4] = pV, qV[5] = QV, qV[6] = nV, qV[7] = wV, qV[8] = ZV, qV[9] = vV, qV[10] = rV, qV[11] = kV, qV[12] = bV, qV[13] = EV, qV[14] = BV, qV[15] = jV, eV.markAsUpdated(), eV._updateIdentityStatus(VV._isIdentity, VV._isIdentityDirty), eV
      }
      static Reflection(VV) {
        const eV = new bV;
        return bV.ReflectionToRef(VV, eV), eV
      }
      static ReflectionToRef(VV, eV) {
        VV.normalize();
        const xV = VV.normal.x,
          JV = VV.normal.y,
          YV = VV.normal.z,
          UV = -2 * xV,
          yV = -2 * JV,
          pV = -2 * YV;
        return bV.FromValuesToRef(UV * xV + 1, yV * xV, pV * xV, 0, UV * JV, yV * JV + 1, pV * JV, 0, UV * YV, yV * YV, pV * YV + 1, 0, UV * VV.d, yV * VV.d, pV * VV.d, 1, eV), eV
      }
      static FromXYZAxesToRef(VV, eV, xV, JV) {
        return bV.FromValuesToRef(VV._x, VV._y, VV._z, 0, eV._x, eV._y, eV._z, 0, xV._x, xV._y, xV._z, 0, 0, 0, 0, 1, JV), JV
      }
      static FromQuaternionToRef(VV, eV) {
        const xV = VV._x * VV._x,
          JV = VV._y * VV._y,
          YV = VV._z * VV._z,
          UV = VV._x * VV._y,
          yV = VV._z * VV._w,
          pV = VV._z * VV._x,
          QV = VV._y * VV._w,
          nV = VV._y * VV._z,
          wV = VV._x * VV._w;
        return eV._m[0] = 1 - 2 * (JV + YV), eV._m[1] = 2 * (UV + yV), eV._m[2] = 2 * (pV - QV), eV._m[3] = 0, eV._m[4] = 2 * (UV - yV), eV._m[5] = 1 - 2 * (YV + xV), eV._m[6] = 2 * (nV + wV), eV._m[7] = 0, eV._m[8] = 2 * (pV + QV), eV._m[9] = 2 * (nV - wV), eV._m[10] = 1 - 2 * (JV + xV), eV._m[11] = 0, eV._m[12] = 0, eV._m[13] = 0, eV._m[14] = 0, eV._m[15] = 1, eV.markAsUpdated(), eV
      }
    }
    bV._IdentityReadOnly = bV.Identity();
    class EV {}
    EV.Ik = (0, YV.h)(11, vV.Zero), EV.Matrix = (0, YV.h)(2, bV.Identity), EV.Quaternion = (0, YV.h)(3, kV.Zero);
    class BV {}
    BV.Vector2 = (0, YV.h)(3, ZV.Zero), BV.Ik = (0, YV.h)(13, vV.Zero), BV.Vector4 = (0, YV.h)(3, rV.Zero), BV.Quaternion = (0, YV.h)(3, kV.Zero), BV.Matrix = (0, YV.h)(8, bV.Identity);
    const jV = bV.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let qV = !1;

    function tV() {
      qV || (qV = !0, Object.defineProperties(ZV.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(vV.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(rV.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(kV.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(bV.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, nV.d)("BABYLON.Vector2", ZV), (0, nV.d)("BABYLON.Vector3", vV), (0, nV.d)("BABYLON.Vector4", rV), (0, nV.d)("BABYLON.Matrix", bV))
    }
  },
  38296: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    const JV = "undefined" !== typeof WeakRef;
    class YV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(VV, eV, xV, JV)
      }
      initialize(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = VV, this.skipNextObservers = eV, this.target = xV, this.currentTarget = JV, this
      }
    }
    class UV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = VV, this.mask = eV, this.scope = xV, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(VV)
      }
    }
    class yV {
      static FromPromise(VV, eV) {
        const xV = new yV;
        return VV.then((VV => {
          xV.notifyObservers(VV)
        })).catch((VV => {
          if (!eV) throw VV;
          eV.notifyObservers(VV)
        })), xV
      }
      get observers() {
        return this._observers
      }
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = eV, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new YV(0), VV && (this._onObserverAdded = VV)
      }
      add(VV) {
        let eV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          xV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!VV) return null;
        const YV = new UV(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        YV.unregisterOnNextCall = xV, eV ? this._observers.unshift(YV) : this._observers.push(YV), this._onObserverAdded && this._onObserverAdded(YV), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(YV, this._lastNotifiedValue);
        const yV = JV ? new WeakRef(this) : {
          deref: () => this
        };
        return YV._remove = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const eV = yV.deref();
          eV && (VV ? eV.remove(YV) : eV._remove(YV))
        }, YV
      }
      addOnce(VV) {
        return this.add(VV, void 0, void 0, void 0, !0)
      }
      remove(VV) {
        if (!VV) return !1;
        VV._remove = null;
        return -1 !== this._observers.indexOf(VV) && (this._deferUnregister(VV), !0)
      }
      removeCallback(VV, eV) {
        for (let xV = 0; xV < this._observers.length; xV++) {
          const JV = this._observers[xV];
          if (!JV._willBeUnregistered && (JV.callback === VV && (!eV || eV === JV.scope))) return this._deferUnregister(JV), !0
        }
        return !1
      }
      _deferUnregister(VV) {
        VV._willBeUnregistered || (this._numObserversMarkedAsDeleted++, VV.unregisterOnNextCall = !1, VV._willBeUnregistered = !0, setTimeout((() => {
          this._remove(VV)
        }), 0))
      }
      _remove(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!VV) return !1;
        const xV = this._observers.indexOf(VV);
        return -1 !== xV && (eV && this._numObserversMarkedAsDeleted--, this._observers.splice(xV, 1), !0)
      }
      makeObserverTopPriority(VV) {
        this._remove(VV, !1), this._observers.unshift(VV)
      }
      makeObserverBottomPriority(VV) {
        this._remove(VV, !1), this._observers.push(VV)
      }
      notifyObservers(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = VV), !this._observers.length) return !0;
        const UV = this._eventState;
        UV.mask = eV, UV.target = xV, UV.currentTarget = JV, UV.skipNextObservers = !1, UV.lastReturnValue = VV, UV.userInfo = YV;
        for (const yV of this._observers)
          if (!yV._willBeUnregistered && (yV.mask & eV && (yV.unregisterOnNextCall && this._deferUnregister(yV), yV.scope ? UV.lastReturnValue = yV.callback.apply(yV.scope, [VV, UV]) : UV.lastReturnValue = yV.callback(VV, UV)), UV.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = eV), VV._willBeUnregistered) return;
        const JV = this._eventState;
        JV.mask = xV, JV.skipNextObservers = !1, VV.unregisterOnNextCall && this._deferUnregister(VV), VV.callback(eV, JV)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const VV = this._observers.pop();
          VV && (VV._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const VV = new yV;
        return VV._observers = this._observers.slice(0), VV
      }
      hasSpecificMask() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const eV of this._observers)
          if (eV.mask & VV || eV.mask === VV) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);