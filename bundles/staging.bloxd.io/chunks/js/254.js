export const id = 254;
export const ids = [254];
export const modules = {
  38064: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    var OM = iM(38068);
    class SM {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    SM.Instances = [], SM.OnEnginesDisposedObservable = new OM.d, SM._LastCreatedScene = null, SM.UseFallbackTexture = !0, SM.FallbackTexture = ""
  },
  38056: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => OM
    });
    class OM {
      static SetMatrixPrecision(MM) {
        if (OM.MatrixTrackPrecisionChange = !1, MM && !OM.MatrixUse64Bits && OM.MatrixTrackedMatrices)
          for (let rM = 0; rM < OM.MatrixTrackedMatrices.length; ++rM) {
            const MM = OM.MatrixTrackedMatrices[rM],
              iM = MM._m;
            MM._m = new Array(16);
            for (let rM = 0; rM < 16; ++rM) MM._m[rM] = iM[rM]
          }
        OM.MatrixUse64Bits = MM, OM.MatrixCurrentType = OM.MatrixUse64Bits ? Array : Float32Array, OM.MatrixTrackedMatrices = null
      }
    }
    OM.MatrixUse64Bits = !1, OM.MatrixTrackPrecisionChange = !0, OM.MatrixCurrentType = Float32Array, OM.MatrixTrackedMatrices = []
  },
  38083: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => PM,
      e: () => QM,
      f: () => nM,
      h: () => OM,
      l: () => jM,
      p: () => aM
    });
    class OM {}

    function SM(MM) {
      MM.updateFlag = OM._UpdateFlagSeed++
    }

    function jM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const SM = MM.HOM(),
        jM = rM.HOM(),
        aM = SM[0],
        PM = SM[1],
        nM = SM[2],
        QM = SM[3],
        zM = SM[4],
        LM = SM[5],
        mM = SM[6],
        HM = SM[7],
        hM = SM[8],
        JM = SM[9],
        dM = SM[10],
        yM = SM[11],
        lM = SM[12],
        EM = SM[13],
        UM = SM[14],
        GM = SM[15],
        CM = jM[0],
        eM = jM[1],
        bM = jM[2],
        wM = jM[3],
        tM = jM[4],
        gM = jM[5],
        uM = jM[6],
        RM = jM[7],
        pM = jM[8],
        WM = jM[9],
        sM = jM[10],
        DM = jM[11],
        kM = jM[12],
        ZM = jM[13],
        oM = jM[14],
        fM = jM[15];
      iM[OM] = aM * CM + PM * tM + nM * pM + QM * kM, iM[OM + 1] = aM * eM + PM * gM + nM * WM + QM * ZM, iM[OM + 2] = aM * bM + PM * uM + nM * sM + QM * oM, iM[OM + 3] = aM * wM + PM * RM + nM * DM + QM * fM, iM[OM + 4] = zM * CM + LM * tM + mM * pM + HM * kM, iM[OM + 5] = zM * eM + LM * gM + mM * WM + HM * ZM, iM[OM + 6] = zM * bM + LM * uM + mM * sM + HM * oM, iM[OM + 7] = zM * wM + LM * RM + mM * DM + HM * fM, iM[OM + 8] = hM * CM + JM * tM + dM * pM + yM * kM, iM[OM + 9] = hM * eM + JM * gM + dM * WM + yM * ZM, iM[OM + 10] = hM * bM + JM * uM + dM * sM + yM * oM, iM[OM + 11] = hM * wM + JM * RM + dM * DM + yM * fM, iM[OM + 12] = lM * CM + EM * tM + UM * pM + GM * kM, iM[OM + 13] = lM * eM + EM * gM + UM * WM + GM * ZM, iM[OM + 14] = lM * bM + EM * uM + UM * sM + GM * oM, iM[OM + 15] = lM * wM + EM * RM + UM * DM + GM * fM
    }

    function aM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      jM(MM, rM, iM.HOM(), OM), SM(iM)
    }

    function PM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const OM = MM.HOM();
      rM[iM] = OM[0], rM[iM + 1] = OM[1], rM[iM + 2] = OM[2], rM[iM + 3] = OM[3], rM[iM + 4] = OM[4], rM[iM + 5] = OM[5], rM[iM + 6] = OM[6], rM[iM + 7] = OM[7], rM[iM + 8] = OM[8], rM[iM + 9] = OM[9], rM[iM + 10] = OM[10], rM[iM + 11] = OM[11], rM[iM + 12] = OM[12], rM[iM + 13] = OM[13], rM[iM + 14] = OM[14], rM[iM + 15] = OM[15]
    }

    function nM(MM, rM) {
      const iM = QM(MM, rM.HOM());
      return iM && SM(rM), iM
    }

    function QM(MM, rM) {
      const iM = MM.HOM(),
        OM = iM[0],
        SM = iM[1],
        jM = iM[2],
        aM = iM[3],
        PM = iM[4],
        nM = iM[5],
        QM = iM[6],
        zM = iM[7],
        LM = iM[8],
        mM = iM[9],
        HM = iM[10],
        hM = iM[11],
        JM = iM[12],
        dM = iM[13],
        yM = iM[14],
        lM = iM[15],
        EM = HM * lM - yM * hM,
        UM = mM * lM - dM * hM,
        GM = mM * yM - dM * HM,
        CM = LM * lM - JM * hM,
        eM = LM * yM - HM * JM,
        bM = LM * dM - JM * mM,
        wM = +(nM * EM - QM * UM + zM * GM),
        tM = -(PM * EM - QM * CM + zM * eM),
        gM = +(PM * UM - nM * CM + zM * bM),
        uM = -(PM * GM - nM * eM + QM * bM),
        RM = OM * wM + SM * tM + jM * gM + aM * uM;
      if (0 === RM) return !1;
      const pM = 1 / RM,
        WM = QM * lM - yM * zM,
        sM = nM * lM - dM * zM,
        DM = nM * yM - dM * QM,
        kM = PM * lM - JM * zM,
        ZM = PM * yM - JM * QM,
        oM = PM * dM - JM * nM,
        fM = QM * hM - HM * zM,
        YM = nM * hM - mM * zM,
        NM = nM * HM - mM * QM,
        AM = PM * hM - LM * zM,
        xM = PM * HM - LM * QM,
        vM = PM * mM - LM * nM,
        FM = -(SM * EM - jM * UM + aM * GM),
        BM = +(OM * EM - jM * CM + aM * eM),
        XM = -(OM * UM - SM * CM + aM * bM),
        IM = +(OM * GM - SM * eM + jM * bM),
        KM = +(SM * WM - jM * sM + aM * DM),
        qM = -(OM * WM - jM * kM + aM * ZM),
        TM = +(OM * sM - SM * kM + aM * oM),
        VM = -(OM * DM - SM * ZM + jM * oM),
        cM = -(SM * fM - jM * YM + aM * NM),
        Mr = +(OM * fM - jM * AM + aM * xM),
        rr = -(OM * YM - SM * AM + aM * vM),
        ir = +(OM * NM - SM * xM + jM * vM);
      return rM[0] = wM * pM, rM[1] = FM * pM, rM[2] = KM * pM, rM[3] = cM * pM, rM[4] = tM * pM, rM[5] = BM * pM, rM[6] = qM * pM, rM[7] = Mr * pM, rM[8] = gM * pM, rM[9] = XM * pM, rM[10] = TM * pM, rM[11] = rr * pM, rM[12] = uM * pM, rM[13] = IM * pM, rM[14] = VM * pM, rM[15] = ir * pM, !0
    }
    OM._UpdateFlagSeed = 0
  },
  38040: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => JM,
      h: () => hM,
      i: () => UM,
      l: () => yM,
      o: () => LM,
      q: () => mM,
      u: () => HM
    });
    var OM = iM(38044),
      SM = iM(38048),
      jM = iM(38056),
      aM = iM(38064),
      PM = iM(38074),
      nM = iM(38083),
      QM = iM(38085);
    const zM = MM => parseInt(MM.toString().replace(/\W/g, ""));
    class LM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = MM, this.y = rM
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let MM = zM(this.x);
        return MM = 397 * MM ^ zM(this.y), MM
      }
      toArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return MM[rM] = this.x, MM[rM + 1] = this.y, this
      }
      cz(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return LM.FromArrayToRef(MM, rM, this), this
      }
      HOM() {
        return [this.x, this.y]
      }
      jR(MM) {
        return this.x = MM.x, this.y = MM.y, this
      }
      iMM(MM, rM) {
        return this.x = MM, this.y = rM, this
      }
      set(MM, rM) {
        return this.iMM(MM, rM)
      }
      P_(MM) {
        return this.iMM(MM, MM)
      }
      add(MM) {
        return new LM(this.x + MM.x, this.y + MM.y)
      }
      addToRef(MM, rM) {
        return rM.x = this.x + MM.x, rM.y = this.y + MM.y, rM
      }
      addInPlace(MM) {
        return this.x += MM.x, this.y += MM.y, this
      }
      addInPlaceFromFloats(MM, rM) {
        return this.x += MM, this.y += rM, this
      }
      addVector3(MM) {
        return new LM(this.x + MM.x, this.y + MM.y)
      }
      subtract(MM) {
        return new LM(this.x - MM.x, this.y - MM.y)
      }
      subtractToRef(MM, rM) {
        return rM.x = this.x - MM.x, rM.y = this.y - MM.y, rM
      }
      kOM(MM) {
        return this.x -= MM.x, this.y -= MM.y, this
      }
      multiplyInPlace(MM) {
        return this.x *= MM.x, this.y *= MM.y, this
      }
      multiply(MM) {
        return new LM(this.x * MM.x, this.y * MM.y)
      }
      multiplyToRef(MM, rM) {
        return rM.x = this.x * MM.x, rM.y = this.y * MM.y, rM
      }
      multiplyByFloats(MM, rM) {
        return new LM(this.x * MM, this.y * rM)
      }
      divide(MM) {
        return new LM(this.x / MM.x, this.y / MM.y)
      }
      divideToRef(MM, rM) {
        return rM.x = this.x / MM.x, rM.y = this.y / MM.y, rM
      }
      divideInPlace(MM) {
        return this.x = this.x / MM.x, this.y = this.y / MM.y, this
      }
      minimizeInPlace(MM) {
        return this.minimizeInPlaceFromFloats(MM.x, MM.y)
      }
      maximizeInPlace(MM) {
        return this.maximizeInPlaceFromFloats(MM.x, MM.y)
      }
      minimizeInPlaceFromFloats(MM, rM) {
        return this.x = Math.min(MM, this.x), this.y = Math.min(rM, this.y), this
      }
      maximizeInPlaceFromFloats(MM, rM) {
        return this.x = Math.max(MM, this.x), this.y = Math.max(rM, this.y), this
      }
      subtractFromFloats(MM, rM) {
        return new LM(this.x - MM, this.y - rM)
      }
      subtractFromFloatsToRef(MM, rM, iM) {
        return iM.x = this.x - MM, iM.y = this.y - rM, iM
      }
      VJ() {
        return new LM(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(MM) {
        return MM.x = -this.x, MM.y = -this.y, MM
      }
      scaleInPlace(MM) {
        return this.x *= MM, this.y *= MM, this
      }
      scale(MM) {
        return new LM(this.x * MM, this.y * MM)
      }
      scaleToRef(MM, rM) {
        return rM.x = this.x * MM, rM.y = this.y * MM, rM
      }
      scaleAndAddToRef(MM, rM) {
        return rM.x += this.x * MM, rM.y += this.y * MM, rM
      }
      equals(MM) {
        return MM && this.x === MM.x && this.y === MM.y
      }
      equalsWithEpsilon(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OM.d;
        return MM && (0, PM.WithinEpsilon)(this.x, MM.x, rM) && (0, PM.WithinEpsilon)(this.y, MM.y, rM)
      }
      IaM(MM, rM) {
        return this.x === MM && this.y === rM
      }
      floor() {
        return new LM(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(MM) {
        return MM.x = Math.floor(this.x), MM.y = Math.floor(this.y), MM
      }
      fract() {
        return new LM(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(MM) {
        return MM.x = this.x - Math.floor(this.x), MM.y = this.y - Math.floor(this.y), MM
      }
      rotate(MM) {
        return this.rotateToRef(MM, new LM)
      }
      rotateToRef(MM, rM) {
        const iM = Math.cos(MM),
          OM = Math.sin(MM);
        return rM.x = iM * this.x - OM * this.y, rM.y = OM * this.x + iM * this.y, rM
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
      normalizeFromLength(MM) {
        return 0 === MM || 1 === MM ? this : this.scaleInPlace(1 / MM)
      }
      normalizeToNew() {
        const MM = new LM;
        return this.normalizeToRef(MM), MM
      }
      normalizeToRef(MM) {
        const rM = this.length();
        return 0 === rM || 1 === rM ? (MM.x = this.x, MM.y = this.y, MM) : this.scaleToRef(1 / rM, MM)
      }
      clone() {
        return new LM(this.x, this.y)
      }
      dot(MM) {
        return this.x * MM.x + this.y * MM.y
      }
      static Zero() {
        return new LM(0, 0)
      }
      static One() {
        return new LM(1, 1)
      }
      static Random() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new LM((0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM))
      }
      static RandomToRef() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).iMM((0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM))
      }
      static get ZeroReadOnly() {
        return LM._ZeroReadOnly
      }
      static FromArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new LM(MM[rM], MM[rM + 1])
      }
      static FromArrayToRef(MM, rM, iM) {
        return iM.x = MM[rM], iM.y = MM[rM + 1], iM
      }
      static FromFloatsToRef(MM, rM, iM) {
        return iM.iMM(MM, rM), iM
      }
      static CatmullRom(MM, rM, iM, OM, SM) {
        const jM = SM * SM,
          aM = SM * jM,
          PM = .5 * (2 * rM.x + (-MM.x + iM.x) * SM + (2 * MM.x - 5 * rM.x + 4 * iM.x - OM.x) * jM + (-MM.x + 3 * rM.x - 3 * iM.x + OM.x) * aM),
          nM = .5 * (2 * rM.y + (-MM.y + iM.y) * SM + (2 * MM.y - 5 * rM.y + 4 * iM.y - OM.y) * jM + (-MM.y + 3 * rM.y - 3 * iM.y + OM.y) * aM);
        return new LM(PM, nM)
      }
      static ClampToRef(MM, rM, iM, OM) {
        return OM.x = (0, PM.Clamp)(MM.x, rM.x, iM.x), OM.y = (0, PM.Clamp)(MM.y, rM.y, iM.y), OM
      }
      static Clamp(MM, rM, iM) {
        const OM = (0, PM.Clamp)(MM.x, rM.x, iM.x),
          SM = (0, PM.Clamp)(MM.y, rM.y, iM.y);
        return new LM(OM, SM)
      }
      static Hermite(MM, rM, iM, OM, SM) {
        const jM = SM * SM,
          aM = SM * jM,
          PM = 2 * aM - 3 * jM + 1,
          nM = -2 * aM + 3 * jM,
          QM = aM - 2 * jM + SM,
          zM = aM - jM,
          mM = MM.x * PM + iM.x * nM + rM.x * QM + OM.x * zM,
          HM = MM.y * PM + iM.y * nM + rM.y * QM + OM.y * zM;
        return new LM(mM, HM)
      }
      static Hermite1stDerivative(MM, rM, iM, OM, SM) {
        return this.Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, new LM)
      }
      static Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM) {
        const aM = SM * SM;
        return jM.x = 6 * (aM - SM) * MM.x + (3 * aM - 4 * SM + 1) * rM.x + 6 * (-aM + SM) * iM.x + (3 * aM - 2 * SM) * OM.x, jM.y = 6 * (aM - SM) * MM.y + (3 * aM - 4 * SM + 1) * rM.y + 6 * (-aM + SM) * iM.y + (3 * aM - 2 * SM) * OM.y, jM
      }
      static Lerp(MM, rM, iM) {
        return LM.LerpToRef(MM, rM, iM, new LM)
      }
      static LerpToRef(MM, rM, iM, OM) {
        return OM.x = MM.x + (rM.x - MM.x) * iM, OM.y = MM.y + (rM.y - MM.y) * iM, OM
      }
      static Dot(MM, rM) {
        return MM.x * rM.x + MM.y * rM.y
      }
      static Normalize(MM) {
        return LM.NormalizeToRef(MM, new LM)
      }
      static NormalizeToRef(MM, rM) {
        return MM.normalizeToRef(rM), rM
      }
      static Minimize(MM, rM) {
        const iM = MM.x < rM.x ? MM.x : rM.x,
          OM = MM.y < rM.y ? MM.y : rM.y;
        return new LM(iM, OM)
      }
      static Maximize(MM, rM) {
        const iM = MM.x > rM.x ? MM.x : rM.x,
          OM = MM.y > rM.y ? MM.y : rM.y;
        return new LM(iM, OM)
      }
      static Transform(MM, rM) {
        return LM.TransformToRef(MM, rM, new LM)
      }
      static TransformToRef(MM, rM, iM) {
        const OM = rM.m,
          SM = MM.x * OM[0] + MM.y * OM[4] + OM[12],
          jM = MM.x * OM[1] + MM.y * OM[5] + OM[13];
        return iM.x = SM, iM.y = jM, iM
      }
      static PointInTriangle(MM, rM, iM, OM) {
        const SM = .5 * (-iM.y * OM.x + rM.y * (-iM.x + OM.x) + rM.x * (iM.y - OM.y) + iM.x * OM.y),
          jM = SM < 0 ? -1 : 1,
          aM = (rM.y * OM.x - rM.x * OM.y + (OM.y - rM.y) * MM.x + (rM.x - OM.x) * MM.y) * jM,
          PM = (rM.x * iM.y - rM.y * iM.x + (rM.y - iM.y) * MM.x + (iM.x - rM.x) * MM.y) * jM;
        return aM > 0 && PM > 0 && aM + PM < 2 * SM * jM
      }
      static Distance(MM, rM) {
        return Math.sqrt(LM.DistanceSquared(MM, rM))
      }
      static DistanceSquared(MM, rM) {
        const iM = MM.x - rM.x,
          OM = MM.y - rM.y;
        return iM * iM + OM * OM
      }
      static Center(MM, rM) {
        return LM.CenterToRef(MM, rM, new LM)
      }
      static CenterToRef(MM, rM, iM) {
        return iM.iMM((MM.x + rM.x) / 2, (MM.y + rM.y) / 2)
      }
      static DistanceOfPointFromSegment(MM, rM, iM) {
        const OM = LM.DistanceSquared(rM, iM);
        if (0 === OM) return LM.Distance(MM, rM);
        const SM = iM.subtract(rM),
          jM = Math.max(0, Math.min(1, LM.Dot(MM.subtract(rM), SM) / OM)),
          aM = rM.add(SM.multiplyByFloats(jM, jM));
        return LM.Distance(MM, aM)
      }
    }
    LM._V8PerformanceHack = new LM(.5, .5), LM._ZeroReadOnly = LM.Zero();
    class mM {
      get x() {
        return this._x
      }
      set x(MM) {
        this._x = MM, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(MM) {
        this._y = MM, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(MM) {
        this._z = MM, this._isDirty = !0
      }
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = MM, this._y = rM, this._z = iM
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "sh"
      }
      getHashCode() {
        let MM = zM(this._x);
        return MM = 397 * MM ^ zM(this._y), MM = 397 * MM ^ zM(this._z), MM
      }
      HOM() {
        return [this._x, this._y, this._z]
      }
      toArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return MM[rM] = this._x, MM[rM + 1] = this._y, MM[rM + 2] = this._z, this
      }
      cz(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mM.FromArrayToRef(MM, rM, this), this
      }
      toQuaternion() {
        return hM.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(MM) {
        return this._x += MM._x, this._y += MM._y, this._z += MM._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(MM, rM, iM) {
        return this._x += MM, this._y += rM, this._z += iM, this._isDirty = !0, this
      }
      add(MM) {
        return new mM(this._x + MM._x, this._y + MM._y, this._z + MM._z)
      }
      addToRef(MM, rM) {
        return rM._x = this._x + MM._x, rM._y = this._y + MM._y, rM._z = this._z + MM._z, rM._isDirty = !0, rM
      }
      kOM(MM) {
        return this._x -= MM._x, this._y -= MM._y, this._z -= MM._z, this._isDirty = !0, this
      }
      subtract(MM) {
        return new mM(this._x - MM._x, this._y - MM._y, this._z - MM._z)
      }
      subtractToRef(MM, rM) {
        return this.subtractFromFloatsToRef(MM._x, MM._y, MM._z, rM)
      }
      subtractFromFloats(MM, rM, iM) {
        return new mM(this._x - MM, this._y - rM, this._z - iM)
      }
      subtractFromFloatsToRef(MM, rM, iM, OM) {
        return OM._x = this._x - MM, OM._y = this._y - rM, OM._z = this._z - iM, OM._isDirty = !0, OM
      }
      VJ() {
        return new mM(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(MM) {
        return MM._x = -1 * this._x, MM._y = -1 * this._y, MM._z = -1 * this._z, MM._isDirty = !0, MM
      }
      scaleInPlace(MM) {
        return this._x *= MM, this._y *= MM, this._z *= MM, this._isDirty = !0, this
      }
      scale(MM) {
        return new mM(this._x * MM, this._y * MM, this._z * MM)
      }
      scaleToRef(MM, rM) {
        return rM._x = this._x * MM, rM._y = this._y * MM, rM._z = this._z * MM, rM._isDirty = !0, rM
      }
      getNormalToRef(MM) {
        const rM = this.length();
        let iM = Math.acos(this._y / rM);
        const OM = Math.atan2(this._z, this._x);
        iM > Math.PI / 2 ? iM -= Math.PI / 2 : iM += Math.PI / 2;
        const SM = rM * Math.sin(iM) * Math.cos(OM),
          jM = rM * Math.cos(iM),
          aM = rM * Math.sin(iM) * Math.sin(OM);
        return MM.set(SM, jM, aM), MM
      }
      applyRotationQuaternionToRef(MM, rM) {
        const iM = this._x,
          OM = this._y,
          SM = this._z,
          jM = MM._x,
          aM = MM._y,
          PM = MM._z,
          nM = MM._w,
          QM = 2 * (aM * SM - PM * OM),
          zM = 2 * (PM * iM - jM * SM),
          LM = 2 * (jM * OM - aM * iM);
        return rM._x = iM + nM * QM + aM * LM - PM * zM, rM._y = OM + nM * zM + PM * QM - jM * LM, rM._z = SM + nM * LM + jM * zM - aM * QM, rM._isDirty = !0, rM
      }
      applyRotationQuaternionInPlace(MM) {
        return this.applyRotationQuaternionToRef(MM, this)
      }
      applyRotationQuaternion(MM) {
        return this.applyRotationQuaternionToRef(MM, new mM)
      }
      scaleAndAddToRef(MM, rM) {
        return rM._x += this._x * MM, rM._y += this._y * MM, rM._z += this._z * MM, rM._isDirty = !0, rM
      }
      projectOnPlane(MM, rM) {
        return this.projectOnPlaneToRef(MM, rM, new mM)
      }
      projectOnPlaneToRef(MM, rM, iM) {
        const OM = MM.normal,
          SM = MM.d,
          jM = dM.sh[0];
        this.subtractToRef(rM, jM), jM.normalize();
        const aM = mM.Dot(jM, OM);
        if (Math.abs(aM) < 1e-10) iM.P_(1 / 0);
        else {
          const MM = -(mM.Dot(rM, OM) + SM) / aM,
            PM = jM.scaleInPlace(MM);
          rM.addToRef(PM, iM)
        }
        return iM
      }
      equals(MM) {
        return MM && this._x === MM._x && this._y === MM._y && this._z === MM._z
      }
      equalsWithEpsilon(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OM.d;
        return MM && (0, PM.WithinEpsilon)(this._x, MM._x, rM) && (0, PM.WithinEpsilon)(this._y, MM._y, rM) && (0, PM.WithinEpsilon)(this._z, MM._z, rM)
      }
      IaM(MM, rM, iM) {
        return this._x === MM && this._y === rM && this._z === iM
      }
      multiplyInPlace(MM) {
        return this._x *= MM._x, this._y *= MM._y, this._z *= MM._z, this._isDirty = !0, this
      }
      multiply(MM) {
        return this.multiplyByFloats(MM._x, MM._y, MM._z)
      }
      multiplyToRef(MM, rM) {
        return rM._x = this._x * MM._x, rM._y = this._y * MM._y, rM._z = this._z * MM._z, rM._isDirty = !0, rM
      }
      multiplyByFloats(MM, rM, iM) {
        return new mM(this._x * MM, this._y * rM, this._z * iM)
      }
      divide(MM) {
        return new mM(this._x / MM._x, this._y / MM._y, this._z / MM._z)
      }
      divideToRef(MM, rM) {
        return rM._x = this._x / MM._x, rM._y = this._y / MM._y, rM._z = this._z / MM._z, rM._isDirty = !0, rM
      }
      divideInPlace(MM) {
        return this._x = this._x / MM._x, this._y = this._y / MM._y, this._z = this._z / MM._z, this._isDirty = !0, this
      }
      minimizeInPlace(MM) {
        return this.minimizeInPlaceFromFloats(MM._x, MM._y, MM._z)
      }
      maximizeInPlace(MM) {
        return this.maximizeInPlaceFromFloats(MM._x, MM._y, MM._z)
      }
      minimizeInPlaceFromFloats(MM, rM, iM) {
        return MM < this._x && (this.x = MM), rM < this._y && (this.y = rM), iM < this._z && (this.z = iM), this
      }
      maximizeInPlaceFromFloats(MM, rM, iM) {
        return MM > this._x && (this.x = MM), rM > this._y && (this.y = rM), iM > this._z && (this.z = iM), this
      }
      isNonUniformWithinEpsilon(MM) {
        const rM = Math.abs(this._x),
          iM = Math.abs(this._y);
        if (!(0, PM.WithinEpsilon)(rM, iM, MM)) return !0;
        const OM = Math.abs(this._z);
        return !(0, PM.WithinEpsilon)(rM, OM, MM) || !(0, PM.WithinEpsilon)(iM, OM, MM)
      }
      get isNonUniform() {
        const MM = Math.abs(this._x);
        if (MM !== Math.abs(this._y)) return !0;
        return MM !== Math.abs(this._z)
      }
      floorToRef(MM) {
        return MM._x = Math.floor(this._x), MM._y = Math.floor(this._y), MM._z = Math.floor(this._z), MM._isDirty = !0, MM
      }
      floor() {
        return new mM(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(MM) {
        return MM._x = this._x - Math.floor(this._x), MM._y = this._y - Math.floor(this._y), MM._z = this._z - Math.floor(this._z), MM._isDirty = !0, MM
      }
      fract() {
        return new mM(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(MM) {
        if ("xyz" === (MM = MM.toLowerCase())) return this;
        const rM = dM.sh[0].jR(this);
        return this.x = rM[MM[0]], this.y = rM[MM[1]], this.z = rM[MM[2]], this
      }
      rotateByQuaternionToRef(MM, rM) {
        return MM.toRotationMatrix(dM.Matrix[0]), mM.TransformCoordinatesToRef(this, dM.Matrix[0], rM), rM
      }
      rotateByQuaternionAroundPointToRef(MM, rM, iM) {
        return this.subtractToRef(rM, dM.sh[0]), dM.sh[0].rotateByQuaternionToRef(MM, dM.sh[0]), rM.addToRef(dM.sh[0], iM), iM
      }
      cross(MM) {
        return mM.CrossToRef(this, MM, new mM)
      }
      normalizeFromLength(MM) {
        return 0 === MM || 1 === MM ? this : this.scaleInPlace(1 / MM)
      }
      normalizeToNew() {
        return this.normalizeToRef(new mM)
      }
      normalizeToRef(MM) {
        const rM = this.length();
        return 0 === rM || 1 === rM ? (MM._x = this._x, MM._y = this._y, MM._z = this._z, MM._isDirty = !0, MM) : this.scaleToRef(1 / rM, MM)
      }
      clone() {
        return new mM(this._x, this._y, this._z)
      }
      jR(MM) {
        return this.iMM(MM._x, MM._y, MM._z)
      }
      iMM(MM, rM, iM) {
        return this._x = MM, this._y = rM, this._z = iM, this._isDirty = !0, this
      }
      set(MM, rM, iM) {
        return this.iMM(MM, rM, iM)
      }
      P_(MM) {
        return this._x = this._y = this._z = MM, this._isDirty = !0, this
      }
      static GetClipFactor(MM, rM, iM, OM) {
        const SM = mM.Dot(MM, iM);
        return (SM - OM) / (SM - mM.Dot(rM, iM))
      }
      static GetAngleBetweenVectors(MM, rM, iM) {
        const OM = MM.normalizeToRef(dM.sh[1]),
          SM = rM.normalizeToRef(dM.sh[2]);
        let jM = mM.Dot(OM, SM);
        jM = (0, PM.Clamp)(jM, -1, 1);
        const aM = Math.acos(jM),
          nM = dM.sh[3];
        return mM.CrossToRef(OM, SM, nM), mM.Dot(nM, iM) > 0 ? isNaN(aM) ? 0 : aM : isNaN(aM) ? -Math.PI : -Math.acos(jM)
      }
      static GetAngleBetweenVectorsOnPlane(MM, rM, iM) {
        dM.sh[0].jR(MM);
        const OM = dM.sh[0];
        dM.sh[1].jR(rM);
        const SM = dM.sh[1];
        dM.sh[2].jR(iM);
        const jM = dM.sh[2],
          aM = dM.sh[3],
          nM = dM.sh[4];
        OM.normalize(), SM.normalize(), jM.normalize(), mM.CrossToRef(jM, OM, aM), mM.CrossToRef(aM, jM, nM);
        const QM = Math.atan2(mM.Dot(SM, aM), mM.Dot(SM, nM));
        return (0, PM.NormalizeRadians)(QM)
      }
      static PitchYawRollToMoveBetweenPointsToRef(MM, rM, iM) {
        const OM = yM.sh[0];
        return rM.subtractToRef(MM, OM), iM._y = Math.atan2(OM.x, OM.z) || 0, iM._x = Math.atan2(Math.sqrt(OM.x ** 2 + OM.z ** 2), OM.y) || 0, iM._z = 0, iM._isDirty = !0, iM
      }
      static PitchYawRollToMoveBetweenPoints(MM, rM) {
        const iM = mM.Zero();
        return mM.PitchYawRollToMoveBetweenPointsToRef(MM, rM, iM)
      }
      static SlerpToRef(MM, rM, iM, SM) {
        iM = (0, PM.Clamp)(iM, 0, 1);
        const jM = dM.sh[0],
          aM = dM.sh[1];
        jM.jR(MM);
        const nM = jM.length();
        jM.normalizeFromLength(nM), aM.jR(rM);
        const QM = aM.length();
        aM.normalizeFromLength(QM);
        const zM = mM.Dot(jM, aM);
        let LM, HM;
        if (zM < 1 - OM.d) {
          const MM = Math.acos(zM),
            rM = 1 / Math.sin(MM);
          LM = Math.sin((1 - iM) * MM) * rM, HM = Math.sin(iM * MM) * rM
        } else LM = 1 - iM, HM = iM;
        return jM.scaleInPlace(LM), aM.scaleInPlace(HM), SM.jR(jM).addInPlace(aM), SM.scaleInPlace((0, PM.Lerp)(nM, QM, iM)), SM
      }
      static SmoothToRef(MM, rM, iM, OM, SM) {
        return mM.SlerpToRef(MM, rM, 0 === OM ? 1 : iM / OM, SM), SM
      }
      static FromArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new mM(MM[rM], MM[rM + 1], MM[rM + 2])
      }
      static FromFloatArray(MM, rM) {
        return mM.FromArray(MM, rM)
      }
      static FromArrayToRef(MM, rM, iM) {
        return iM._x = MM[rM], iM._y = MM[rM + 1], iM._z = MM[rM + 2], iM._isDirty = !0, iM
      }
      static FromFloatArrayToRef(MM, rM, iM) {
        return mM.FromArrayToRef(MM, rM, iM)
      }
      static FromFloatsToRef(MM, rM, iM, OM) {
        return OM.iMM(MM, rM, iM), OM
      }
      static Zero() {
        return new mM(0, 0, 0)
      }
      static One() {
        return new mM(1, 1, 1)
      }
      static Up() {
        return new mM(0, 1, 0)
      }
      static get UpReadOnly() {
        return mM._UpReadOnly
      }
      static get DownReadOnly() {
        return mM._DownReadOnly
      }
      static get RightReadOnly() {
        return mM._RightReadOnly
      }
      static get LeftReadOnly() {
        return mM._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return mM._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return mM._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return mM._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return mM._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return mM._ZeroReadOnly
      }
      static get OneReadOnly() {
        return mM._OneReadOnly
      }
      static Down() {
        return new mM(0, -1, 0)
      }
      static Forward() {
        return new mM(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new mM(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new mM(1, 0, 0)
      }
      static Left() {
        return new mM(-1, 0, 0)
      }
      static Random() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new mM((0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM))
      }
      static RandomToRef() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).iMM((0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM))
      }
      static TransformCoordinates(MM, rM) {
        const iM = mM.Zero();
        return mM.TransformCoordinatesToRef(MM, rM, iM), iM
      }
      static TransformCoordinatesToRef(MM, rM, iM) {
        return mM.TransformCoordinatesFromFloatsToRef(MM._x, MM._y, MM._z, rM, iM), iM
      }
      static TransformCoordinatesFromFloatsToRef(MM, rM, iM, OM, SM) {
        const jM = OM.m,
          aM = MM * jM[0] + rM * jM[4] + iM * jM[8] + jM[12],
          PM = MM * jM[1] + rM * jM[5] + iM * jM[9] + jM[13],
          nM = MM * jM[2] + rM * jM[6] + iM * jM[10] + jM[14],
          QM = 1 / (MM * jM[3] + rM * jM[7] + iM * jM[11] + jM[15]);
        return SM._x = aM * QM, SM._y = PM * QM, SM._z = nM * QM, SM._isDirty = !0, SM
      }
      static TransformNormal(MM, rM) {
        const iM = mM.Zero();
        return mM.TransformNormalToRef(MM, rM, iM), iM
      }
      static TransformNormalToRef(MM, rM, iM) {
        return this.TransformNormalFromFloatsToRef(MM._x, MM._y, MM._z, rM, iM), iM
      }
      static TransformNormalFromFloatsToRef(MM, rM, iM, OM, SM) {
        const jM = OM.m;
        return SM._x = MM * jM[0] + rM * jM[4] + iM * jM[8], SM._y = MM * jM[1] + rM * jM[5] + iM * jM[9], SM._z = MM * jM[2] + rM * jM[6] + iM * jM[10], SM._isDirty = !0, SM
      }
      static CatmullRom(MM, rM, iM, OM, SM) {
        const jM = SM * SM,
          aM = SM * jM,
          PM = .5 * (2 * rM._x + (-MM._x + iM._x) * SM + (2 * MM._x - 5 * rM._x + 4 * iM._x - OM._x) * jM + (-MM._x + 3 * rM._x - 3 * iM._x + OM._x) * aM),
          nM = .5 * (2 * rM._y + (-MM._y + iM._y) * SM + (2 * MM._y - 5 * rM._y + 4 * iM._y - OM._y) * jM + (-MM._y + 3 * rM._y - 3 * iM._y + OM._y) * aM),
          QM = .5 * (2 * rM._z + (-MM._z + iM._z) * SM + (2 * MM._z - 5 * rM._z + 4 * iM._z - OM._z) * jM + (-MM._z + 3 * rM._z - 3 * iM._z + OM._z) * aM);
        return new mM(PM, nM, QM)
      }
      static Clamp(MM, rM, iM) {
        const OM = new mM;
        return mM.ClampToRef(MM, rM, iM, OM), OM
      }
      static ClampToRef(MM, rM, iM, OM) {
        let SM = MM._x;
        SM = SM > iM._x ? iM._x : SM, SM = SM < rM._x ? rM._x : SM;
        let jM = MM._y;
        jM = jM > iM._y ? iM._y : jM, jM = jM < rM._y ? rM._y : jM;
        let aM = MM._z;
        return aM = aM > iM._z ? iM._z : aM, aM = aM < rM._z ? rM._z : aM, OM.iMM(SM, jM, aM), OM
      }
      static CheckExtends(MM, rM, iM) {
        rM.minimizeInPlace(MM), iM.maximizeInPlace(MM)
      }
      static Hermite(MM, rM, iM, OM, SM) {
        const jM = SM * SM,
          aM = SM * jM,
          PM = 2 * aM - 3 * jM + 1,
          nM = -2 * aM + 3 * jM,
          QM = aM - 2 * jM + SM,
          zM = aM - jM,
          LM = MM._x * PM + iM._x * nM + rM._x * QM + OM._x * zM,
          HM = MM._y * PM + iM._y * nM + rM._y * QM + OM._y * zM,
          hM = MM._z * PM + iM._z * nM + rM._z * QM + OM._z * zM;
        return new mM(LM, HM, hM)
      }
      static Hermite1stDerivative(MM, rM, iM, OM, SM) {
        const jM = new mM;
        return this.Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM), jM
      }
      static Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM) {
        const aM = SM * SM;
        return jM._x = 6 * (aM - SM) * MM._x + (3 * aM - 4 * SM + 1) * rM._x + 6 * (-aM + SM) * iM._x + (3 * aM - 2 * SM) * OM._x, jM._y = 6 * (aM - SM) * MM._y + (3 * aM - 4 * SM + 1) * rM._y + 6 * (-aM + SM) * iM._y + (3 * aM - 2 * SM) * OM._y, jM._z = 6 * (aM - SM) * MM._z + (3 * aM - 4 * SM + 1) * rM._z + 6 * (-aM + SM) * iM._z + (3 * aM - 2 * SM) * OM._z, jM._isDirty = !0, jM
      }
      static Lerp(MM, rM, iM) {
        const OM = new mM(0, 0, 0);
        return mM.LerpToRef(MM, rM, iM, OM), OM
      }
      static LerpToRef(MM, rM, iM, OM) {
        return OM._x = MM._x + (rM._x - MM._x) * iM, OM._y = MM._y + (rM._y - MM._y) * iM, OM._z = MM._z + (rM._z - MM._z) * iM, OM._isDirty = !0, OM
      }
      static Dot(MM, rM) {
        return MM._x * rM._x + MM._y * rM._y + MM._z * rM._z
      }
      dot(MM) {
        return this._x * MM._x + this._y * MM._y + this._z * MM._z
      }
      static Cross(MM, rM) {
        const iM = new mM;
        return mM.CrossToRef(MM, rM, iM), iM
      }
      static CrossToRef(MM, rM, iM) {
        const OM = MM._y * rM._z - MM._z * rM._y,
          SM = MM._z * rM._x - MM._x * rM._z,
          jM = MM._x * rM._y - MM._y * rM._x;
        return iM.iMM(OM, SM, jM), iM
      }
      static Normalize(MM) {
        const rM = mM.Zero();
        return mM.NormalizeToRef(MM, rM), rM
      }
      static NormalizeToRef(MM, rM) {
        return MM.normalizeToRef(rM), rM
      }
      static Project(MM, rM, iM, OM) {
        const SM = new mM;
        return mM.ProjectToRef(MM, rM, iM, OM, SM), SM
      }
      static ProjectToRef(MM, rM, iM, OM, SM) {
        const jM = OM.width,
          PM = OM.height,
          nM = OM.x,
          QM = OM.y,
          zM = dM.Matrix[1],
          LM = aM.c.LastCreatedEngine?.isNDCHalfZRange,
          HM = LM ? 1 : .5,
          hM = LM ? 0 : .5;
        JM.FromValuesToRef(jM / 2, 0, 0, 0, 0, -PM / 2, 0, 0, 0, 0, HM, 0, nM + jM / 2, PM / 2 + QM, hM, 1, zM);
        const yM = dM.Matrix[0];
        return rM.multiplyToRef(iM, yM), yM.multiplyToRef(zM, yM), mM.TransformCoordinatesToRef(MM, yM, SM), SM
      }
      static Reflect(MM, rM) {
        return this.ReflectToRef(MM, rM, new mM)
      }
      static ReflectToRef(MM, rM, iM) {
        const OM = yM.sh[0];
        return OM.jR(rM).scaleInPlace(2 * mM.Dot(MM, rM)), iM.jR(MM).kOM(OM)
      }
      static UnprojectFromTransform(MM, rM, iM, OM, SM) {
        return this.Unproject(MM, rM, iM, OM, SM, JM.IdentityReadOnly)
      }
      static Unproject(MM, rM, iM, OM, SM, jM) {
        const aM = new mM;
        return mM.UnprojectToRef(MM, rM, iM, OM, SM, jM, aM), aM
      }
      static UnprojectToRef(MM, rM, iM, OM, SM, jM, aM) {
        return mM.UnprojectFloatsToRef(MM._x, MM._y, MM._z, rM, iM, OM, SM, jM, aM), aM
      }
      static UnprojectFloatsToRef(MM, rM, iM, OM, SM, jM, PM, nM, QM) {
        const zM = dM.Matrix[0];
        jM.multiplyToRef(PM, zM), zM.multiplyToRef(nM, zM), zM.invert();
        const LM = dM.sh[0];
        return LM.x = MM / OM * 2 - 1, LM.y = -(rM / SM * 2 - 1), aM.c.LastCreatedEngine?.isNDCHalfZRange ? LM.z = iM : LM.z = 2 * iM - 1, mM.TransformCoordinatesToRef(LM, zM, QM), QM
      }
      static Minimize(MM, rM) {
        const iM = new mM;
        return iM.jR(MM), iM.minimizeInPlace(rM), iM
      }
      static Maximize(MM, rM) {
        const iM = new mM;
        return iM.jR(MM), iM.maximizeInPlace(rM), iM
      }
      static Distance(MM, rM) {
        return Math.sqrt(mM.DistanceSquared(MM, rM))
      }
      static DistanceSquared(MM, rM) {
        const iM = MM._x - rM._x,
          OM = MM._y - rM._y,
          SM = MM._z - rM._z;
        return iM * iM + OM * OM + SM * SM
      }
      static ProjectOnTriangleToRef(MM, rM, iM, SM, jM) {
        const aM = dM.sh[0],
          nM = dM.sh[1],
          QM = dM.sh[2],
          zM = dM.sh[3],
          LM = dM.sh[4];
        iM.subtractToRef(rM, aM), SM.subtractToRef(rM, nM), SM.subtractToRef(iM, QM);
        const HM = aM.length(),
          hM = nM.length(),
          JM = QM.length();
        if (HM < OM.d || hM < OM.d || JM < OM.d) return jM.jR(rM), mM.Distance(MM, rM);
        MM.subtractToRef(rM, LM), mM.CrossToRef(aM, nM, zM);
        const yM = zM.length();
        if (yM < OM.d) return jM.jR(rM), mM.Distance(MM, rM);
        zM.normalizeFromLength(yM);
        let lM = LM.length();
        if (lM < OM.d) return jM.jR(rM), 0;
        LM.normalizeFromLength(lM);
        const EM = mM.Dot(zM, LM),
          UM = dM.sh[5],
          GM = dM.sh[6];
        UM.jR(zM).scaleInPlace(-lM * EM), GM.jR(MM).addInPlace(UM);
        const CM = dM.sh[4],
          eM = dM.sh[5],
          bM = dM.sh[7],
          wM = dM.sh[8];
        CM.jR(aM).scaleInPlace(1 / HM), wM.jR(nM).scaleInPlace(1 / hM), CM.addInPlace(wM).scaleInPlace(-1), eM.jR(aM).scaleInPlace(-1 / HM), wM.jR(QM).scaleInPlace(1 / JM), eM.addInPlace(wM).scaleInPlace(-1), bM.jR(QM).scaleInPlace(-1 / JM), wM.jR(nM).scaleInPlace(-1 / hM), bM.addInPlace(wM).scaleInPlace(-1);
        const tM = dM.sh[9];
        let gM;
        tM.jR(GM).kOM(rM), mM.CrossToRef(CM, tM, wM), gM = mM.Dot(wM, zM);
        const uM = gM;
        tM.jR(GM).kOM(iM), mM.CrossToRef(eM, tM, wM), gM = mM.Dot(wM, zM);
        const RM = gM;
        tM.jR(GM).kOM(SM), mM.CrossToRef(bM, tM, wM), gM = mM.Dot(wM, zM);
        const pM = gM,
          WM = dM.sh[10];
        let sM, DM;
        uM > 0 && RM < 0 ? (WM.jR(aM), sM = rM, DM = iM) : RM > 0 && pM < 0 ? (WM.jR(QM), sM = iM, DM = SM) : (WM.jR(nM).scaleInPlace(-1), sM = SM, DM = rM);
        const kM = dM.sh[9],
          ZM = dM.sh[4];
        sM.subtractToRef(GM, wM), DM.subtractToRef(GM, kM), mM.CrossToRef(wM, kM, ZM);
        if (!(mM.Dot(ZM, zM) < 0)) return jM.jR(GM), Math.abs(lM * EM);
        const oM = dM.sh[5];
        mM.CrossToRef(WM, ZM, oM), oM.normalize();
        const fM = dM.sh[9];
        fM.jR(sM).kOM(GM);
        const YM = fM.length();
        if (YM < OM.d) return jM.jR(sM), mM.Distance(MM, sM);
        fM.normalizeFromLength(YM);
        const NM = mM.Dot(oM, fM),
          AM = dM.sh[7];
        AM.jR(GM).addInPlace(oM.scaleInPlace(YM * NM)), wM.jR(AM).kOM(sM), lM = WM.length(), WM.normalizeFromLength(lM);
        let xM = mM.Dot(wM, WM) / Math.max(lM, OM.d);
        return xM = (0, PM.Clamp)(xM, 0, 1), AM.jR(sM).addInPlace(WM.scaleInPlace(xM * lM)), jM.jR(AM), mM.Distance(MM, AM)
      }
      static Center(MM, rM) {
        return mM.CenterToRef(MM, rM, mM.Zero())
      }
      static CenterToRef(MM, rM, iM) {
        return iM.iMM((MM._x + rM._x) / 2, (MM._y + rM._y) / 2, (MM._z + rM._z) / 2)
      }
      static RotationFromAxis(MM, rM, iM) {
        const OM = new mM;
        return mM.RotationFromAxisToRef(MM, rM, iM, OM), OM
      }
      static RotationFromAxisToRef(MM, rM, iM, OM) {
        const SM = dM.Quaternion[0];
        return hM.RotationQuaternionFromAxisToRef(MM, rM, iM, SM), SM.toEulerAnglesToRef(OM), OM
      }
    }
    mM._V8PerformanceHack = new mM(.5, .5, .5), mM._UpReadOnly = mM.Up(), mM._DownReadOnly = mM.Down(), mM._LeftHandedForwardReadOnly = mM.Forward(!1), mM._RightHandedForwardReadOnly = mM.Forward(!0), mM._LeftHandedBackwardReadOnly = mM.Backward(!1), mM._RightHandedBackwardReadOnly = mM.Backward(!0), mM._RightReadOnly = mM.Right(), mM._LeftReadOnly = mM.Left(), mM._ZeroReadOnly = mM.Zero(), mM._OneReadOnly = mM.One();
    class HM {
      get x() {
        return this._x
      }
      set x(MM) {
        this._x = MM, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(MM) {
        this._y = MM, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(MM) {
        this._z = MM, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(MM) {
        this._w = MM, this._isDirty = !0
      }
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = MM, this._y = rM, this._z = iM, this._w = OM
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let MM = zM(this._x);
        return MM = 397 * MM ^ zM(this._y), MM = 397 * MM ^ zM(this._z), MM = 397 * MM ^ zM(this._w), MM
      }
      HOM() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(MM, rM) {
        return void 0 === rM && (rM = 0), MM[rM] = this._x, MM[rM + 1] = this._y, MM[rM + 2] = this._z, MM[rM + 3] = this._w, this
      }
      cz(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HM.FromArrayToRef(MM, rM, this), this
      }
      addInPlace(MM) {
        return this.x += MM._x, this.y += MM._y, this.z += MM._z, this.w += MM._w, this
      }
      addInPlaceFromFloats(MM, rM, iM, OM) {
        return this.x += MM, this.y += rM, this.z += iM, this.w += OM, this
      }
      add(MM) {
        return new HM(this._x + MM.x, this._y + MM.y, this._z + MM.z, this._w + MM.w)
      }
      addToRef(MM, rM) {
        return rM.x = this._x + MM.x, rM.y = this._y + MM.y, rM.z = this._z + MM.z, rM.w = this._w + MM.w, rM
      }
      kOM(MM) {
        return this.x -= MM.x, this.y -= MM.y, this.z -= MM.z, this.w -= MM.w, this
      }
      subtract(MM) {
        return new HM(this._x - MM.x, this._y - MM.y, this._z - MM.z, this._w - MM.w)
      }
      subtractToRef(MM, rM) {
        return rM.x = this._x - MM.x, rM.y = this._y - MM.y, rM.z = this._z - MM.z, rM.w = this._w - MM.w, rM
      }
      subtractFromFloats(MM, rM, iM, OM) {
        return new HM(this._x - MM, this._y - rM, this._z - iM, this._w - OM)
      }
      subtractFromFloatsToRef(MM, rM, iM, OM, SM) {
        return SM.x = this._x - MM, SM.y = this._y - rM, SM.z = this._z - iM, SM.w = this._w - OM, SM
      }
      VJ() {
        return new HM(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(MM) {
        return MM.x = -this._x, MM.y = -this._y, MM.z = -this._z, MM.w = -this._w, MM
      }
      scaleInPlace(MM) {
        return this.x *= MM, this.y *= MM, this.z *= MM, this.w *= MM, this
      }
      scale(MM) {
        return new HM(this._x * MM, this._y * MM, this._z * MM, this._w * MM)
      }
      scaleToRef(MM, rM) {
        return rM.x = this._x * MM, rM.y = this._y * MM, rM.z = this._z * MM, rM.w = this._w * MM, rM
      }
      scaleAndAddToRef(MM, rM) {
        return rM.x += this._x * MM, rM.y += this._y * MM, rM.z += this._z * MM, rM.w += this._w * MM, rM
      }
      equals(MM) {
        return MM && this._x === MM.x && this._y === MM.y && this._z === MM.z && this._w === MM.w
      }
      equalsWithEpsilon(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OM.d;
        return MM && (0, PM.WithinEpsilon)(this._x, MM.x, rM) && (0, PM.WithinEpsilon)(this._y, MM.y, rM) && (0, PM.WithinEpsilon)(this._z, MM.z, rM) && (0, PM.WithinEpsilon)(this._w, MM.w, rM)
      }
      IaM(MM, rM, iM, OM) {
        return this._x === MM && this._y === rM && this._z === iM && this._w === OM
      }
      multiplyInPlace(MM) {
        return this.x *= MM.x, this.y *= MM.y, this.z *= MM.z, this.w *= MM.w, this
      }
      multiply(MM) {
        return new HM(this._x * MM.x, this._y * MM.y, this._z * MM.z, this._w * MM.w)
      }
      multiplyToRef(MM, rM) {
        return rM.x = this._x * MM.x, rM.y = this._y * MM.y, rM.z = this._z * MM.z, rM.w = this._w * MM.w, rM
      }
      multiplyByFloats(MM, rM, iM, OM) {
        return new HM(this._x * MM, this._y * rM, this._z * iM, this._w * OM)
      }
      divide(MM) {
        return new HM(this._x / MM.x, this._y / MM.y, this._z / MM.z, this._w / MM.w)
      }
      divideToRef(MM, rM) {
        return rM.x = this._x / MM.x, rM.y = this._y / MM.y, rM.z = this._z / MM.z, rM.w = this._w / MM.w, rM
      }
      divideInPlace(MM) {
        return this.divideToRef(MM, this)
      }
      minimizeInPlace(MM) {
        return MM.x < this._x && (this.x = MM.x), MM.y < this._y && (this.y = MM.y), MM.z < this._z && (this.z = MM.z), MM.w < this._w && (this.w = MM.w), this
      }
      maximizeInPlace(MM) {
        return MM.x > this._x && (this.x = MM.x), MM.y > this._y && (this.y = MM.y), MM.z > this._z && (this.z = MM.z), MM.w > this._w && (this.w = MM.w), this
      }
      minimizeInPlaceFromFloats(MM, rM, iM, OM) {
        return this.x = Math.min(MM, this._x), this.y = Math.min(rM, this._y), this.z = Math.min(iM, this._z), this.w = Math.min(OM, this._w), this
      }
      maximizeInPlaceFromFloats(MM, rM, iM, OM) {
        return this.x = Math.max(MM, this._x), this.y = Math.max(rM, this._y), this.z = Math.max(iM, this._z), this.w = Math.max(OM, this._w), this
      }
      floorToRef(MM) {
        return MM.x = Math.floor(this._x), MM.y = Math.floor(this._y), MM.z = Math.floor(this._z), MM.w = Math.floor(this._w), MM
      }
      floor() {
        return new HM(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(MM) {
        return MM.x = this._x - Math.floor(this._x), MM.y = this._y - Math.floor(this._y), MM.z = this._z - Math.floor(this._z), MM.w = this._w - Math.floor(this._w), MM
      }
      fract() {
        return new HM(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(MM) {
        return 0 === MM || 1 === MM ? this : this.scaleInPlace(1 / MM)
      }
      normalizeToNew() {
        return this.normalizeToRef(new HM)
      }
      normalizeToRef(MM) {
        const rM = this.length();
        return 0 === rM || 1 === rM ? (MM.x = this._x, MM.y = this._y, MM.z = this._z, MM.w = this._w, MM) : this.scaleToRef(1 / rM, MM)
      }
      toVector3() {
        return new mM(this._x, this._y, this._z)
      }
      clone() {
        return new HM(this._x, this._y, this._z, this._w)
      }
      jR(MM) {
        return this.x = MM.x, this.y = MM.y, this.z = MM.z, this.w = MM.w, this
      }
      iMM(MM, rM, iM, OM) {
        return this.x = MM, this.y = rM, this.z = iM, this.w = OM, this
      }
      set(MM, rM, iM, OM) {
        return this.iMM(MM, rM, iM, OM)
      }
      P_(MM) {
        return this.x = this.y = this.z = this.w = MM, this
      }
      dot(MM) {
        return this._x * MM.x + this._y * MM.y + this._z * MM.z + this._w * MM.w
      }
      static FromArray(MM, rM) {
        return rM || (rM = 0), new HM(MM[rM], MM[rM + 1], MM[rM + 2], MM[rM + 3])
      }
      static FromArrayToRef(MM, rM, iM) {
        return iM.x = MM[rM], iM.y = MM[rM + 1], iM.z = MM[rM + 2], iM.w = MM[rM + 3], iM
      }
      static FromFloatArrayToRef(MM, rM, iM) {
        return HM.FromArrayToRef(MM, rM, iM), iM
      }
      static FromFloatsToRef(MM, rM, iM, OM, SM) {
        return SM.x = MM, SM.y = rM, SM.z = iM, SM.w = OM, SM
      }
      static Zero() {
        return new HM(0, 0, 0, 0)
      }
      static One() {
        return new HM(1, 1, 1, 1)
      }
      static Random() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new HM((0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM))
      }
      static RandomToRef() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        return iM.x = (0, PM.RandomRange)(MM, rM), iM.y = (0, PM.RandomRange)(MM, rM), iM.z = (0, PM.RandomRange)(MM, rM), iM.w = (0, PM.RandomRange)(MM, rM), iM
      }
      static Clamp(MM, rM, iM) {
        return HM.ClampToRef(MM, rM, iM, new HM)
      }
      static ClampToRef(MM, rM, iM, OM) {
        return OM.x = (0, PM.Clamp)(MM.x, rM.x, iM.x), OM.y = (0, PM.Clamp)(MM.y, rM.y, iM.y), OM.z = (0, PM.Clamp)(MM.z, rM.z, iM.z), OM.w = (0, PM.Clamp)(MM.w, rM.w, iM.w), OM
      }
      static CheckExtends(MM, rM, iM) {
        rM.minimizeInPlace(MM), iM.maximizeInPlace(MM)
      }
      static get ZeroReadOnly() {
        return HM._ZeroReadOnly
      }
      static Normalize(MM) {
        return HM.NormalizeToRef(MM, new HM)
      }
      static NormalizeToRef(MM, rM) {
        return MM.normalizeToRef(rM), rM
      }
      static Minimize(MM, rM) {
        const iM = new HM;
        return iM.jR(MM), iM.minimizeInPlace(rM), iM
      }
      static Maximize(MM, rM) {
        const iM = new HM;
        return iM.jR(MM), iM.maximizeInPlace(rM), iM
      }
      static Distance(MM, rM) {
        return Math.sqrt(HM.DistanceSquared(MM, rM))
      }
      static DistanceSquared(MM, rM) {
        const iM = MM.x - rM.x,
          OM = MM.y - rM.y,
          SM = MM.z - rM.z,
          jM = MM.w - rM.w;
        return iM * iM + OM * OM + SM * SM + jM * jM
      }
      static Center(MM, rM) {
        return HM.CenterToRef(MM, rM, new HM)
      }
      static CenterToRef(MM, rM, iM) {
        return iM.x = (MM.x + rM.x) / 2, iM.y = (MM.y + rM.y) / 2, iM.z = (MM.z + rM.z) / 2, iM.w = (MM.w + rM.w) / 2, iM
      }
      static TransformCoordinates(MM, rM) {
        return HM.TransformCoordinatesToRef(MM, rM, new HM)
      }
      static TransformCoordinatesToRef(MM, rM, iM) {
        return HM.TransformCoordinatesFromFloatsToRef(MM._x, MM._y, MM._z, rM, iM), iM
      }
      static TransformCoordinatesFromFloatsToRef(MM, rM, iM, OM, SM) {
        const jM = OM.m,
          aM = MM * jM[0] + rM * jM[4] + iM * jM[8] + jM[12],
          PM = MM * jM[1] + rM * jM[5] + iM * jM[9] + jM[13],
          nM = MM * jM[2] + rM * jM[6] + iM * jM[10] + jM[14],
          QM = MM * jM[3] + rM * jM[7] + iM * jM[11] + jM[15];
        return SM.x = aM, SM.y = PM, SM.z = nM, SM.w = QM, SM
      }
      static TransformNormal(MM, rM) {
        return HM.TransformNormalToRef(MM, rM, new HM)
      }
      static TransformNormalToRef(MM, rM, iM) {
        const OM = rM.m,
          SM = MM.x * OM[0] + MM.y * OM[4] + MM.z * OM[8],
          jM = MM.x * OM[1] + MM.y * OM[5] + MM.z * OM[9],
          aM = MM.x * OM[2] + MM.y * OM[6] + MM.z * OM[10];
        return iM.x = SM, iM.y = jM, iM.z = aM, iM.w = MM.w, iM
      }
      static TransformNormalFromFloatsToRef(MM, rM, iM, OM, SM, jM) {
        const aM = SM.m;
        return jM.x = MM * aM[0] + rM * aM[4] + iM * aM[8], jM.y = MM * aM[1] + rM * aM[5] + iM * aM[9], jM.z = MM * aM[2] + rM * aM[6] + iM * aM[10], jM.w = OM, jM
      }
      static FromVector3(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new HM(MM._x, MM._y, MM._z, rM)
      }
      static Dot(MM, rM) {
        return MM.x * rM.x + MM.y * rM.y + MM.z * rM.z + MM.w * rM.w
      }
    }
    HM._V8PerformanceHack = new HM(.5, .5, .5, .5), HM._ZeroReadOnly = HM.Zero();
    class hM {
      get x() {
        return this._x
      }
      set x(MM) {
        this._x = MM, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(MM) {
        this._y = MM, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(MM) {
        this._z = MM, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(MM) {
        this._w = MM, this._isDirty = !0
      }
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = MM, this._y = rM, this._z = iM, this._w = OM
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let MM = zM(this._x);
        return MM = 397 * MM ^ zM(this._y), MM = 397 * MM ^ zM(this._z), MM = 397 * MM ^ zM(this._w), MM
      }
      HOM() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return MM[rM] = this._x, MM[rM + 1] = this._y, MM[rM + 2] = this._z, MM[rM + 3] = this._w, this
      }
      cz(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return hM.FromArrayToRef(MM, rM, this)
      }
      equals(MM) {
        return MM && this._x === MM._x && this._y === MM._y && this._z === MM._z && this._w === MM._w
      }
      equalsWithEpsilon(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OM.d;
        return MM && (0, PM.WithinEpsilon)(this._x, MM._x, rM) && (0, PM.WithinEpsilon)(this._y, MM._y, rM) && (0, PM.WithinEpsilon)(this._z, MM._z, rM) && (0, PM.WithinEpsilon)(this._w, MM._w, rM)
      }
      isApprox(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OM.d;
        return MM && ((0, PM.WithinEpsilon)(this._x, MM._x, rM) && (0, PM.WithinEpsilon)(this._y, MM._y, rM) && (0, PM.WithinEpsilon)(this._z, MM._z, rM) && (0, PM.WithinEpsilon)(this._w, MM._w, rM) || (0, PM.WithinEpsilon)(this._x, -MM._x, rM) && (0, PM.WithinEpsilon)(this._y, -MM._y, rM) && (0, PM.WithinEpsilon)(this._z, -MM._z, rM) && (0, PM.WithinEpsilon)(this._w, -MM._w, rM))
      }
      clone() {
        return new hM(this._x, this._y, this._z, this._w)
      }
      jR(MM) {
        return this._x = MM._x, this._y = MM._y, this._z = MM._z, this._w = MM._w, this._isDirty = !0, this
      }
      iMM(MM, rM, iM, OM) {
        return this._x = MM, this._y = rM, this._z = iM, this._w = OM, this._isDirty = !0, this
      }
      set(MM, rM, iM, OM) {
        return this.iMM(MM, rM, iM, OM)
      }
      P_(MM) {
        return this.iMM(MM, MM, MM, MM)
      }
      add(MM) {
        return new hM(this._x + MM._x, this._y + MM._y, this._z + MM._z, this._w + MM._w)
      }
      addInPlace(MM) {
        return this._x += MM._x, this._y += MM._y, this._z += MM._z, this._w += MM._w, this._isDirty = !0, this
      }
      addToRef(MM, rM) {
        return rM._x = this._x + MM._x, rM._y = this._y + MM._y, rM._z = this._z + MM._z, rM._w = this._w + MM._w, rM._isDirty = !0, rM
      }
      addInPlaceFromFloats(MM, rM, iM, OM) {
        return this._x += MM, this._y += rM, this._z += iM, this._w += OM, this._isDirty = !0, this
      }
      subtractToRef(MM, rM) {
        return rM._x = this._x - MM._x, rM._y = this._y - MM._y, rM._z = this._z - MM._z, rM._w = this._w - MM._w, rM._isDirty = !0, rM
      }
      subtractFromFloats(MM, rM, iM, OM) {
        return this.subtractFromFloatsToRef(MM, rM, iM, OM, new hM)
      }
      subtractFromFloatsToRef(MM, rM, iM, OM, SM) {
        return SM._x = this._x - MM, SM._y = this._y - rM, SM._z = this._z - iM, SM._w = this._w - OM, SM._isDirty = !0, SM
      }
      subtract(MM) {
        return new hM(this._x - MM._x, this._y - MM._y, this._z - MM._z, this._w - MM._w)
      }
      kOM(MM) {
        return this._x -= MM._x, this._y -= MM._y, this._z -= MM._z, this._w -= MM._w, this._isDirty = !0, this
      }
      scale(MM) {
        return new hM(this._x * MM, this._y * MM, this._z * MM, this._w * MM)
      }
      scaleToRef(MM, rM) {
        return rM._x = this._x * MM, rM._y = this._y * MM, rM._z = this._z * MM, rM._w = this._w * MM, rM._isDirty = !0, rM
      }
      scaleInPlace(MM) {
        return this._x *= MM, this._y *= MM, this._z *= MM, this._w *= MM, this._isDirty = !0, this
      }
      scaleAndAddToRef(MM, rM) {
        return rM._x += this._x * MM, rM._y += this._y * MM, rM._z += this._z * MM, rM._w += this._w * MM, rM._isDirty = !0, rM
      }
      multiply(MM) {
        const rM = new hM(0, 0, 0, 1);
        return this.multiplyToRef(MM, rM), rM
      }
      multiplyToRef(MM, rM) {
        const iM = this._x * MM._w + this._y * MM._z - this._z * MM._y + this._w * MM._x,
          OM = -this._x * MM._z + this._y * MM._w + this._z * MM._x + this._w * MM._y,
          SM = this._x * MM._y - this._y * MM._x + this._z * MM._w + this._w * MM._z,
          jM = -this._x * MM._x - this._y * MM._y - this._z * MM._z + this._w * MM._w;
        return rM.iMM(iM, OM, SM, jM), rM
      }
      multiplyInPlace(MM) {
        return this.multiplyToRef(MM, this)
      }
      multiplyByFloats(MM, rM, iM, OM) {
        return this._x *= MM, this._y *= rM, this._z *= iM, this._w *= OM, this._isDirty = !0, this
      }
      divide(MM) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(MM, rM) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(MM) {
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
      VJ() {
        return this.negateToRef(new hM)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(MM) {
        return MM._x = -this._x, MM._y = -this._y, MM._z = -this._z, MM._w = -this._w, MM._isDirty = !0, MM
      }
      IaM(MM, rM, iM, OM) {
        return this._x === MM && this._y === rM && this._z === iM && this._w === OM
      }
      floorToRef(MM) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(MM) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(MM) {
        return MM.iMM(-this._x, -this._y, -this._z, this._w), MM
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new hM(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const MM = this.conjugate(),
          rM = this.lengthSquared();
        return 0 == rM || 1 == rM || MM.scaleInPlace(1 / rM), MM
      }
      invertInPlace() {
        this.conjugateInPlace();
        const MM = this.lengthSquared();
        return 0 == MM || 1 == MM || this.scaleInPlace(1 / MM), this
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
      normalizeFromLength(MM) {
        return 0 === MM || 1 === MM ? this : this.scaleInPlace(1 / MM)
      }
      normalizeToNew() {
        const MM = new hM(0, 0, 0, 1);
        return this.normalizeToRef(MM), MM
      }
      normalizeToRef(MM) {
        const rM = this.length();
        return 0 === rM || 1 === rM ? MM.iMM(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / rM, MM)
      }
      toEulerAngles() {
        const MM = mM.Zero();
        return this.toEulerAnglesToRef(MM), MM
      }
      toEulerAnglesToRef(MM) {
        const rM = this._z,
          iM = this._x,
          OM = this._y,
          SM = this._w,
          jM = OM * rM - iM * SM,
          aM = .4999999;
        if (jM < -aM) MM._y = 2 * Math.atan2(OM, SM), MM._x = Math.PI / 2, MM._z = 0, MM._isDirty = !0;
        else if (jM > aM) MM._y = 2 * Math.atan2(OM, SM), MM._x = -Math.PI / 2, MM._z = 0, MM._isDirty = !0;
        else {
          const aM = SM * SM,
            PM = rM * rM,
            nM = iM * iM,
            QM = OM * OM;
          MM._z = Math.atan2(2 * (iM * OM + rM * SM), -PM - nM + QM + aM), MM._x = Math.asin(-2 * jM), MM._y = Math.atan2(2 * (rM * iM + OM * SM), PM - nM - QM + aM), MM._isDirty = !0
        }
        return MM
      }
      toAlphaBetaGammaToRef(MM) {
        const rM = this._z,
          iM = this._x,
          OM = this._y,
          SM = this._w,
          jM = Math.sqrt(iM * iM + OM * OM),
          aM = Math.sqrt(rM * rM + SM * SM),
          PM = 2 * Math.atan2(jM, aM),
          nM = 2 * Math.atan2(rM, SM),
          QM = 2 * Math.atan2(OM, iM),
          zM = (nM + QM) / 2,
          LM = (nM - QM) / 2;
        return MM.set(LM, PM, zM), MM
      }
      toRotationMatrix(MM) {
        return JM.FromQuaternionToRef(this, MM), MM
      }
      fromRotationMatrix(MM) {
        return hM.FromRotationMatrixToRef(MM, this), this
      }
      dot(MM) {
        return this._x * MM._x + this._y * MM._y + this._z * MM._z + this._w * MM._w
      }
      toAxisAngle() {
        const MM = mM.Zero();
        return {
          axis: MM,
          angle: this.toAxisAngleToRef(MM)
        }
      }
      toAxisAngleToRef(MM) {
        let rM;
        const iM = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          OM = this._w;
        return iM > 0 ? (rM = 2 * Math.atan2(iM, OM), MM.set(this._x / iM, this._y / iM, this._z / iM)) : (rM = 0, MM.set(1, 0, 0)), rM
      }
      static FromRotationMatrix(MM) {
        const rM = new hM;
        return hM.FromRotationMatrixToRef(MM, rM), rM
      }
      static FromRotationMatrixToRef(MM, rM) {
        const iM = MM.m,
          OM = iM[0],
          SM = iM[4],
          jM = iM[8],
          aM = iM[1],
          PM = iM[5],
          nM = iM[9],
          QM = iM[2],
          zM = iM[6],
          LM = iM[10],
          mM = OM + PM + LM;
        let HM;
        return mM > 0 ? (HM = .5 / Math.sqrt(mM + 1), rM._w = .25 / HM, rM._x = (zM - nM) * HM, rM._y = (jM - QM) * HM, rM._z = (aM - SM) * HM, rM._isDirty = !0) : OM > PM && OM > LM ? (HM = 2 * Math.sqrt(1 + OM - PM - LM), rM._w = (zM - nM) / HM, rM._x = .25 * HM, rM._y = (SM + aM) / HM, rM._z = (jM + QM) / HM, rM._isDirty = !0) : PM > LM ? (HM = 2 * Math.sqrt(1 + PM - OM - LM), rM._w = (jM - QM) / HM, rM._x = (SM + aM) / HM, rM._y = .25 * HM, rM._z = (nM + zM) / HM, rM._isDirty = !0) : (HM = 2 * Math.sqrt(1 + LM - OM - PM), rM._w = (aM - SM) / HM, rM._x = (jM + QM) / HM, rM._y = (nM + zM) / HM, rM._z = .25 * HM, rM._isDirty = !0), rM
      }
      static Dot(MM, rM) {
        return MM._x * rM._x + MM._y * rM._y + MM._z * rM._z + MM._w * rM._w
      }
      static AreClose(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const OM = hM.Dot(MM, rM);
        return 1 - OM * OM <= iM
      }
      static SmoothToRef(MM, rM, iM, OM, SM) {
        let jM = 0 === OM ? 1 : iM / OM;
        return jM = (0, PM.Clamp)(jM, 0, 1), hM.SlerpToRef(MM, rM, jM, SM), SM
      }
      static Zero() {
        return new hM(0, 0, 0, 0)
      }
      static Inverse(MM) {
        return new hM(-MM._x, -MM._y, -MM._z, MM._w)
      }
      static InverseToRef(MM, rM) {
        return rM.set(-MM._x, -MM._y, -MM._z, MM._w), rM
      }
      static Identity() {
        return new hM(0, 0, 0, 1)
      }
      static IsIdentity(MM) {
        return MM && 0 === MM._x && 0 === MM._y && 0 === MM._z && 1 === MM._w
      }
      static RotationAxis(MM, rM) {
        return hM.RotationAxisToRef(MM, rM, new hM)
      }
      static RotationAxisToRef(MM, rM, iM) {
        iM._w = Math.cos(rM / 2);
        const OM = Math.sin(rM / 2) / MM.length();
        return iM._x = MM._x * OM, iM._y = MM._y * OM, iM._z = MM._z * OM, iM._isDirty = !0, iM
      }
      static FromArray(MM, rM) {
        return rM || (rM = 0), new hM(MM[rM], MM[rM + 1], MM[rM + 2], MM[rM + 3])
      }
      static FromArrayToRef(MM, rM, iM) {
        return iM._x = MM[rM], iM._y = MM[rM + 1], iM._z = MM[rM + 2], iM._w = MM[rM + 3], iM._isDirty = !0, iM
      }
      static FromFloatsToRef(MM, rM, iM, OM, SM) {
        return SM.iMM(MM, rM, iM, OM), SM
      }
      static FromEulerAngles(MM, rM, iM) {
        const OM = new hM;
        return hM.RotationYawPitchRollToRef(rM, MM, iM, OM), OM
      }
      static FromEulerAnglesToRef(MM, rM, iM, OM) {
        return hM.RotationYawPitchRollToRef(rM, MM, iM, OM), OM
      }
      static FromEulerVector(MM) {
        const rM = new hM;
        return hM.RotationYawPitchRollToRef(MM._y, MM._x, MM._z, rM), rM
      }
      static FromEulerVectorToRef(MM, rM) {
        return hM.RotationYawPitchRollToRef(MM._y, MM._x, MM._z, rM), rM
      }
      static FromUnitVectorsToRef(MM, rM, iM) {
        let SM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : OM.d;
        const jM = mM.Dot(MM, rM) + 1;
        return jM < SM ? Math.abs(MM.x) > Math.abs(MM.z) ? iM.set(-MM.y, MM.x, 0, 0) : iM.set(0, -MM.z, MM.y, 0) : (mM.CrossToRef(MM, rM, yM.sh[0]), iM.set(yM.sh[0].x, yM.sh[0].y, yM.sh[0].z, jM)), iM.normalize()
      }
      static RotationYawPitchRoll(MM, rM, iM) {
        const OM = new hM;
        return hM.RotationYawPitchRollToRef(MM, rM, iM, OM), OM
      }
      static RotationYawPitchRollToRef(MM, rM, iM, OM) {
        const SM = .5 * iM,
          jM = .5 * rM,
          aM = .5 * MM,
          PM = Math.sin(SM),
          nM = Math.cos(SM),
          QM = Math.sin(jM),
          zM = Math.cos(jM),
          LM = Math.sin(aM),
          mM = Math.cos(aM);
        return OM._x = mM * QM * nM + LM * zM * PM, OM._y = LM * zM * nM - mM * QM * PM, OM._z = mM * zM * PM - LM * QM * nM, OM._w = mM * zM * nM + LM * QM * PM, OM._isDirty = !0, OM
      }
      static RotationAlphaBetaGamma(MM, rM, iM) {
        const OM = new hM;
        return hM.RotationAlphaBetaGammaToRef(MM, rM, iM, OM), OM
      }
      static RotationAlphaBetaGammaToRef(MM, rM, iM, OM) {
        const SM = .5 * (iM + MM),
          jM = .5 * (iM - MM),
          aM = .5 * rM;
        return OM._x = Math.cos(jM) * Math.sin(aM), OM._y = Math.sin(jM) * Math.sin(aM), OM._z = Math.sin(SM) * Math.cos(aM), OM._w = Math.cos(SM) * Math.cos(aM), OM._isDirty = !0, OM
      }
      static RotationQuaternionFromAxis(MM, rM, iM) {
        const OM = new hM(0, 0, 0, 0);
        return hM.RotationQuaternionFromAxisToRef(MM, rM, iM, OM), OM
      }
      static RotationQuaternionFromAxisToRef(MM, rM, iM, OM) {
        const SM = dM.Matrix[0];
        return MM = MM.normalizeToRef(dM.sh[0]), rM = rM.normalizeToRef(dM.sh[1]), iM = iM.normalizeToRef(dM.sh[2]), JM.FromXYZAxesToRef(MM, rM, iM, SM), hM.FromRotationMatrixToRef(SM, OM), OM
      }
      static FromLookDirectionLH(MM, rM) {
        const iM = new hM;
        return hM.FromLookDirectionLHToRef(MM, rM, iM), iM
      }
      static FromLookDirectionLHToRef(MM, rM, iM) {
        const OM = dM.Matrix[0];
        return JM.LookDirectionLHToRef(MM, rM, OM), hM.FromRotationMatrixToRef(OM, iM), iM
      }
      static FromLookDirectionRH(MM, rM) {
        const iM = new hM;
        return hM.FromLookDirectionRHToRef(MM, rM, iM), iM
      }
      static FromLookDirectionRHToRef(MM, rM, iM) {
        const OM = dM.Matrix[0];
        return JM.LookDirectionRHToRef(MM, rM, OM), hM.FromRotationMatrixToRef(OM, iM)
      }
      static Slerp(MM, rM, iM) {
        const OM = hM.Identity();
        return hM.SlerpToRef(MM, rM, iM, OM), OM
      }
      static SlerpToRef(MM, rM, iM, OM) {
        let SM, jM, aM = MM._x * rM._x + MM._y * rM._y + MM._z * rM._z + MM._w * rM._w,
          PM = !1;
        if (aM < 0 && (PM = !0, aM = -aM), aM > .999999) jM = 1 - iM, SM = PM ? -iM : iM;
        else {
          const MM = Math.acos(aM),
            rM = 1 / Math.sin(MM);
          jM = Math.sin((1 - iM) * MM) * rM, SM = PM ? -Math.sin(iM * MM) * rM : Math.sin(iM * MM) * rM
        }
        return OM._x = jM * MM._x + SM * rM._x, OM._y = jM * MM._y + SM * rM._y, OM._z = jM * MM._z + SM * rM._z, OM._w = jM * MM._w + SM * rM._w, OM._isDirty = !0, OM
      }
      static Hermite(MM, rM, iM, OM, SM) {
        const jM = SM * SM,
          aM = SM * jM,
          PM = 2 * aM - 3 * jM + 1,
          nM = -2 * aM + 3 * jM,
          QM = aM - 2 * jM + SM,
          zM = aM - jM,
          LM = MM._x * PM + iM._x * nM + rM._x * QM + OM._x * zM,
          mM = MM._y * PM + iM._y * nM + rM._y * QM + OM._y * zM,
          HM = MM._z * PM + iM._z * nM + rM._z * QM + OM._z * zM,
          JM = MM._w * PM + iM._w * nM + rM._w * QM + OM._w * zM;
        return new hM(LM, mM, HM, JM)
      }
      static Hermite1stDerivative(MM, rM, iM, OM, SM) {
        const jM = new hM;
        return this.Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM), jM
      }
      static Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM) {
        const aM = SM * SM;
        return jM._x = 6 * (aM - SM) * MM._x + (3 * aM - 4 * SM + 1) * rM._x + 6 * (-aM + SM) * iM._x + (3 * aM - 2 * SM) * OM._x, jM._y = 6 * (aM - SM) * MM._y + (3 * aM - 4 * SM + 1) * rM._y + 6 * (-aM + SM) * iM._y + (3 * aM - 2 * SM) * OM._y, jM._z = 6 * (aM - SM) * MM._z + (3 * aM - 4 * SM + 1) * rM._z + 6 * (-aM + SM) * iM._z + (3 * aM - 2 * SM) * OM._z, jM._w = 6 * (aM - SM) * MM._w + (3 * aM - 4 * SM + 1) * rM._w + 6 * (-aM + SM) * iM._w + (3 * aM - 2 * SM) * OM._w, jM._isDirty = !0, jM
      }
      static Normalize(MM) {
        const rM = hM.Zero();
        return hM.NormalizeToRef(MM, rM), rM
      }
      static NormalizeToRef(MM, rM) {
        return MM.normalizeToRef(rM), rM
      }
      static Clamp(MM, rM, iM) {
        const OM = new hM;
        return hM.ClampToRef(MM, rM, iM, OM), OM
      }
      static ClampToRef(MM, rM, iM, OM) {
        return OM.iMM((0, PM.Clamp)(MM.x, rM.x, iM.x), (0, PM.Clamp)(MM.y, rM.y, iM.y), (0, PM.Clamp)(MM.z, rM.z, iM.z), (0, PM.Clamp)(MM.w, rM.w, iM.w))
      }
      static Random() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new hM((0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM))
      }
      static RandomToRef() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).iMM((0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM), (0, PM.RandomRange)(MM, rM))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(MM, rM) {
        return Math.sqrt(hM.DistanceSquared(MM, rM))
      }
      static DistanceSquared(MM, rM) {
        const iM = MM.x - rM.x,
          OM = MM.y - rM.y,
          SM = MM.z - rM.z,
          jM = MM.w - rM.w;
        return iM * iM + OM * OM + SM * SM + jM * jM
      }
      static Center(MM, rM) {
        return hM.CenterToRef(MM, rM, hM.Zero())
      }
      static CenterToRef(MM, rM, iM) {
        return iM.iMM((MM.x + rM.x) / 2, (MM.y + rM.y) / 2, (MM.z + rM.z) / 2, (MM.w + rM.w) / 2)
      }
    }
    hM._V8PerformanceHack = new hM(.5, .5, .5, .5);
    class JM {
      static get Use64Bits() {
        return jM.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = nM.h._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OM = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = MM, this._isIdentity3x2 = MM || iM, this._isIdentityDirty = !this._isIdentity && rM, this._isIdentity3x2Dirty = !this._isIdentity3x2 && OM
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, jM.b.MatrixTrackPrecisionChange && jM.b.MatrixTrackedMatrices.push(this), this._m = new jM.b.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const MM = this._m;
          this._isIdentity = 1 === MM[0] && 0 === MM[1] && 0 === MM[2] && 0 === MM[3] && 0 === MM[4] && 1 === MM[5] && 0 === MM[6] && 0 === MM[7] && 0 === MM[8] && 0 === MM[9] && 1 === MM[10] && 0 === MM[11] && 0 === MM[12] && 0 === MM[13] && 0 === MM[14] && 1 === MM[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const MM = this._m,
          rM = MM[0],
          iM = MM[1],
          OM = MM[2],
          SM = MM[3],
          jM = MM[4],
          aM = MM[5],
          PM = MM[6],
          nM = MM[7],
          QM = MM[8],
          zM = MM[9],
          LM = MM[10],
          mM = MM[11],
          HM = MM[12],
          hM = MM[13],
          JM = MM[14],
          dM = MM[15],
          yM = LM * dM - JM * mM,
          lM = zM * dM - hM * mM,
          EM = zM * JM - hM * LM,
          UM = QM * dM - HM * mM,
          GM = QM * JM - LM * HM,
          CM = QM * hM - HM * zM;
        return rM * +(aM * yM - PM * lM + nM * EM) + iM * -(jM * yM - PM * UM + nM * GM) + OM * +(jM * lM - aM * UM + nM * CM) + SM * -(jM * EM - aM * GM + PM * CM)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!MM) return this._m;
        const iM = this._m;
        for (let OM = 0; OM < 16; OM++) MM[rM + OM] = iM[OM];
        return this
      }
      HOM() {
        return this._m
      }
      cz(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JM.FromArrayToRef(MM, rM, this)
      }
      iMM() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return JM.FromArrayToRef(rM, 0, this)
      }
      set() {
        const MM = this._m;
        for (let rM = 0; rM < 16; rM++) MM[rM] = rM < 0 || arguments.length <= rM ? void 0 : arguments[rM];
        return this.markAsUpdated(), this
      }
      P_(MM) {
        const rM = this._m;
        for (let iM = 0; iM < 16; iM++) rM[iM] = MM;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return JM.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(MM) {
        const rM = new JM;
        return this.addToRef(MM, rM), rM
      }
      addToRef(MM, rM) {
        const iM = this._m,
          OM = rM._m,
          SM = MM.m;
        for (let jM = 0; jM < 16; jM++) OM[jM] = iM[jM] + SM[jM];
        return rM.markAsUpdated(), rM
      }
      addToSelf(MM) {
        const rM = this._m,
          iM = MM.m;
        return rM[0] += iM[0], rM[1] += iM[1], rM[2] += iM[2], rM[3] += iM[3], rM[4] += iM[4], rM[5] += iM[5], rM[6] += iM[6], rM[7] += iM[7], rM[8] += iM[8], rM[9] += iM[9], rM[10] += iM[10], rM[11] += iM[11], rM[12] += iM[12], rM[13] += iM[13], rM[14] += iM[14], rM[15] += iM[15], this.markAsUpdated(), this
      }
      addInPlace(MM) {
        const rM = this._m,
          iM = MM.m;
        for (let OM = 0; OM < 16; OM++) rM[OM] += iM[OM];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const MM = this._m;
        for (let rM = 0; rM < 16; rM++) MM[rM] += rM < 0 || arguments.length <= rM ? void 0 : arguments[rM];
        return this.markAsUpdated(), this
      }
      subtract(MM) {
        const rM = this._m,
          iM = MM.m;
        for (let OM = 0; OM < 16; OM++) rM[OM] -= iM[OM];
        return this.markAsUpdated(), this
      }
      subtractToRef(MM, rM) {
        const iM = this._m,
          OM = MM.m,
          SM = rM._m;
        for (let jM = 0; jM < 16; jM++) SM[jM] = iM[jM] - OM[jM];
        return rM.markAsUpdated(), rM
      }
      kOM(MM) {
        const rM = this._m,
          iM = MM.m;
        for (let OM = 0; OM < 16; OM++) rM[OM] -= iM[OM];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return this.subtractFromFloatsToRef(...rM, new JM)
      }
      subtractFromFloatsToRef() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        const OM = rM.pop(),
          SM = this._m,
          jM = OM._m,
          aM = rM;
        for (let PM = 0; PM < 16; PM++) jM[PM] = SM[PM] - aM[PM];
        return OM.markAsUpdated(), OM
      }
      invertToRef(MM) {
        return !0 === this._isIdentity ? (JM.IdentityToRef(MM), MM) : ((0, nM.e)(this, MM.HOM()) ? MM.markAsUpdated() : MM.jR(this), MM)
      }
      addAtIndex(MM, rM) {
        return this._m[MM] += rM, this.markAsUpdated(), this
      }
      multiplyAtIndex(MM, rM) {
        return this._m[MM] *= rM, this.markAsUpdated(), this
      }
      setTranslationFromFloats(MM, rM, iM) {
        return this._m[12] = MM, this._m[13] = rM, this._m[14] = iM, this.markAsUpdated(), this
      }
      addTranslationFromFloats(MM, rM, iM) {
        return this._m[12] += MM, this._m[13] += rM, this._m[14] += iM, this.markAsUpdated(), this
      }
      setTranslation(MM) {
        return this.setTranslationFromFloats(MM._x, MM._y, MM._z)
      }
      getTranslation() {
        return new mM(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(MM) {
        return MM.x = this._m[12], MM.y = this._m[13], MM.z = this._m[14], MM
      }
      removeRotationAndScaling() {
        const MM = this.m;
        return JM.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, MM[12], MM[13], MM[14], MM[15], this), this._updateIdentityStatus(0 === MM[12] && 0 === MM[13] && 0 === MM[14] && 1 === MM[15]), this
      }
      jR(MM) {
        MM.copyToArray(this._m);
        const rM = MM;
        return this.updateFlag = rM.updateFlag, this._updateIdentityStatus(rM._isIdentity, rM._isIdentityDirty, rM._isIdentity3x2, rM._isIdentity3x2Dirty), this
      }
      copyToArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, nM.d)(this, MM, rM), this
      }
      multiply(MM) {
        const rM = new JM;
        return this.multiplyToRef(MM, rM), rM
      }
      multiplyInPlace(MM) {
        const rM = this._m,
          iM = MM.m;
        for (let OM = 0; OM < 16; OM++) rM[OM] *= iM[OM];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const MM = this._m;
        for (let rM = 0; rM < 16; rM++) MM[rM] *= rM < 0 || arguments.length <= rM ? void 0 : arguments[rM];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        const OM = rM.pop(),
          SM = this._m,
          jM = OM._m,
          aM = rM;
        for (let PM = 0; PM < 16; PM++) jM[PM] = SM[PM] * aM[PM];
        return OM.markAsUpdated(), OM
      }
      multiplyToRef(MM, rM) {
        return this._isIdentity ? (rM.jR(MM), rM) : MM._isIdentity ? (rM.jR(this), rM) : (this.multiplyToArray(MM, rM._m, 0), rM.markAsUpdated(), rM)
      }
      multiplyToArray(MM, rM, iM) {
        return (0, nM.l)(this, MM, rM, iM), this
      }
      divide(MM) {
        return this.divideToRef(MM, new JM)
      }
      divideToRef(MM, rM) {
        const iM = this._m,
          OM = MM.m,
          SM = rM._m;
        for (let jM = 0; jM < 16; jM++) SM[jM] = iM[jM] / OM[jM];
        return rM.markAsUpdated(), rM
      }
      divideInPlace(MM) {
        const rM = this._m,
          iM = MM.m;
        for (let OM = 0; OM < 16; OM++) rM[OM] /= iM[OM];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(MM) {
        const rM = this._m,
          iM = MM.m;
        for (let OM = 0; OM < 16; OM++) rM[OM] = Math.min(rM[OM], iM[OM]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const MM = this._m;
        for (let rM = 0; rM < 16; rM++) MM[rM] = Math.min(MM[rM], rM < 0 || arguments.length <= rM ? void 0 : arguments[rM]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(MM) {
        const rM = this._m,
          iM = MM.m;
        for (let OM = 0; OM < 16; OM++) rM[OM] = Math.max(rM[OM], iM[OM]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const MM = this._m;
        for (let rM = 0; rM < 16; rM++) MM[rM] = Math.max(MM[rM], rM < 0 || arguments.length <= rM ? void 0 : arguments[rM]);
        return this.markAsUpdated(), this
      }
      VJ() {
        return this.negateToRef(new JM)
      }
      negateInPlace() {
        const MM = this._m;
        for (let rM = 0; rM < 16; rM++) MM[rM] = -MM[rM];
        return this.markAsUpdated(), this
      }
      negateToRef(MM) {
        const rM = this._m,
          iM = MM._m;
        for (let OM = 0; OM < 16; OM++) iM[OM] = -rM[OM];
        return MM.markAsUpdated(), MM
      }
      equals(MM) {
        const rM = MM;
        if (!rM) return !1;
        if ((this._isIdentity || rM._isIdentity) && !this._isIdentityDirty && !rM._isIdentityDirty) return this._isIdentity && rM._isIdentity;
        const iM = this.m,
          OM = rM.m;
        return iM[0] === OM[0] && iM[1] === OM[1] && iM[2] === OM[2] && iM[3] === OM[3] && iM[4] === OM[4] && iM[5] === OM[5] && iM[6] === OM[6] && iM[7] === OM[7] && iM[8] === OM[8] && iM[9] === OM[9] && iM[10] === OM[10] && iM[11] === OM[11] && iM[12] === OM[12] && iM[13] === OM[13] && iM[14] === OM[14] && iM[15] === OM[15]
      }
      equalsWithEpsilon(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = this._m,
          OM = MM.m;
        for (let SM = 0; SM < 16; SM++)
          if (!(0, PM.WithinEpsilon)(iM[SM], OM[SM], rM)) return !1;
        return !0
      }
      IaM() {
        const MM = this._m;
        for (let rM = 0; rM < 16; rM++)
          if (MM[rM] != (rM < 0 || arguments.length <= rM ? void 0 : arguments[rM])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new JM)
      }
      floorToRef(MM) {
        const rM = this._m,
          iM = MM._m;
        for (let OM = 0; OM < 16; OM++) iM[OM] = Math.floor(rM[OM]);
        return MM.markAsUpdated(), MM
      }
      fract() {
        return this.fractToRef(new JM)
      }
      fractToRef(MM) {
        const rM = this._m,
          iM = MM._m;
        for (let OM = 0; OM < 16; OM++) iM[OM] = rM[OM] - Math.floor(rM[OM]);
        return MM.markAsUpdated(), MM
      }
      clone() {
        const MM = new JM;
        return MM.jR(this), MM
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let MM = zM(this._m[0]);
        for (let rM = 1; rM < 16; rM++) MM = 397 * MM ^ zM(this._m[rM]);
        return MM
      }
      decomposeToTransformNode(MM) {
        return MM.rotationQuaternion = MM.rotationQuaternion || new hM, this.decompose(MM.UL, MM.rotationQuaternion, MM.position)
      }
      decompose(MM, rM, iM, OM) {
        let SM = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return iM && iM.P_(0), MM && MM.P_(1), rM && rM.iMM(0, 0, 0, 1), !0;
        const jM = this._m;
        if (iM && iM.iMM(jM[12], jM[13], jM[14]), (MM = MM || dM.sh[0]).x = Math.sqrt(jM[0] * jM[0] + jM[1] * jM[1] + jM[2] * jM[2]), MM.y = Math.sqrt(jM[4] * jM[4] + jM[5] * jM[5] + jM[6] * jM[6]), MM.z = Math.sqrt(jM[8] * jM[8] + jM[9] * jM[9] + jM[10] * jM[10]), OM) {
          const rM = (SM ? OM.absoluteScaling.x : OM.UL.x) < 0 ? -1 : 1,
            iM = (SM ? OM.absoluteScaling.y : OM.UL.y) < 0 ? -1 : 1,
            jM = (SM ? OM.absoluteScaling.z : OM.UL.z) < 0 ? -1 : 1;
          MM.x *= rM, MM.y *= iM, MM.z *= jM
        } else this.determinant() <= 0 && (MM.y *= -1);
        if (0 === MM._x || 0 === MM._y || 0 === MM._z) return rM && rM.iMM(0, 0, 0, 1), !1;
        if (rM) {
          const iM = 1 / MM._x,
            OM = 1 / MM._y,
            SM = 1 / MM._z;
          JM.FromValuesToRef(jM[0] * iM, jM[1] * iM, jM[2] * iM, 0, jM[4] * OM, jM[5] * OM, jM[6] * OM, 0, jM[8] * SM, jM[9] * SM, jM[10] * SM, 0, 0, 0, 0, 1, dM.Matrix[0]), hM.FromRotationMatrixToRef(dM.Matrix[0], rM)
        }
        return !0
      }
      getRow(MM) {
        if (MM < 0 || MM > 3) return null;
        const rM = 4 * MM;
        return new HM(this._m[rM + 0], this._m[rM + 1], this._m[rM + 2], this._m[rM + 3])
      }
      getRowToRef(MM, rM) {
        if (MM >= 0 && MM <= 3) {
          const iM = 4 * MM;
          rM.x = this._m[iM + 0], rM.y = this._m[iM + 1], rM.z = this._m[iM + 2], rM.w = this._m[iM + 3]
        }
        return rM
      }
      setRow(MM, rM) {
        return this.setRowFromFloats(MM, rM.x, rM.y, rM.z, rM.w)
      }
      transpose() {
        const MM = new JM;
        return JM.TransposeToRef(this, MM), MM
      }
      transposeToRef(MM) {
        return JM.TransposeToRef(this, MM), MM
      }
      setRowFromFloats(MM, rM, iM, OM, SM) {
        if (MM < 0 || MM > 3) return this;
        const jM = 4 * MM;
        return this._m[jM + 0] = rM, this._m[jM + 1] = iM, this._m[jM + 2] = OM, this._m[jM + 3] = SM, this.markAsUpdated(), this
      }
      scale(MM) {
        const rM = new JM;
        return this.scaleToRef(MM, rM), rM
      }
      scaleToRef(MM, rM) {
        for (let iM = 0; iM < 16; iM++) rM._m[iM] = this._m[iM] * MM;
        return rM.markAsUpdated(), rM
      }
      scaleAndAddToRef(MM, rM) {
        for (let iM = 0; iM < 16; iM++) rM._m[iM] += this._m[iM] * MM;
        return rM.markAsUpdated(), rM
      }
      scaleInPlace(MM) {
        const rM = this._m;
        for (let iM = 0; iM < 16; iM++) rM[iM] *= MM;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(MM) {
        const rM = dM.Matrix[0];
        this.invertToRef(rM), rM.transposeToRef(MM);
        const iM = MM._m;
        return JM.FromValuesToRef(iM[0], iM[1], iM[2], 0, iM[4], iM[5], iM[6], 0, iM[8], iM[9], iM[10], 0, 0, 0, 0, 1, MM), MM
      }
      getRotationMatrix() {
        const MM = new JM;
        return this.getRotationMatrixToRef(MM), MM
      }
      getRotationMatrixToRef(MM) {
        const rM = dM.sh[0];
        if (!this.decompose(rM)) return JM.IdentityToRef(MM), MM;
        const iM = this._m,
          OM = 1 / rM._x,
          SM = 1 / rM._y,
          jM = 1 / rM._z;
        return JM.FromValuesToRef(iM[0] * OM, iM[1] * OM, iM[2] * OM, 0, iM[4] * SM, iM[5] * SM, iM[6] * SM, 0, iM[8] * jM, iM[9] * jM, iM[10] * jM, 0, 0, 0, 0, 1, MM), MM
      }
      toggleModelMatrixHandInPlace() {
        const MM = this._m;
        return MM[2] *= -1, MM[6] *= -1, MM[8] *= -1, MM[9] *= -1, MM[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const MM = this._m;
        return MM[8] *= -1, MM[9] *= -1, MM[10] *= -1, MM[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(lM, this), this
      }
      static FromArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const iM = new JM;
        return JM.FromArrayToRef(MM, rM, iM), iM
      }
      static FromArrayToRef(MM, rM, iM) {
        for (let OM = 0; OM < 16; OM++) iM._m[OM] = MM[OM + rM];
        return iM.markAsUpdated(), iM
      }
      static FromFloat32ArrayToRefScaled(MM, rM, iM, OM) {
        return OM._m[0] = MM[0 + rM] * iM, OM._m[1] = MM[1 + rM] * iM, OM._m[2] = MM[2 + rM] * iM, OM._m[3] = MM[3 + rM] * iM, OM._m[4] = MM[4 + rM] * iM, OM._m[5] = MM[5 + rM] * iM, OM._m[6] = MM[6 + rM] * iM, OM._m[7] = MM[7 + rM] * iM, OM._m[8] = MM[8 + rM] * iM, OM._m[9] = MM[9 + rM] * iM, OM._m[10] = MM[10 + rM] * iM, OM._m[11] = MM[11 + rM] * iM, OM._m[12] = MM[12 + rM] * iM, OM._m[13] = MM[13 + rM] * iM, OM._m[14] = MM[14 + rM] * iM, OM._m[15] = MM[15 + rM] * iM, OM.markAsUpdated(), OM
      }
      static get IdentityReadOnly() {
        return JM._IdentityReadOnly
      }
      static FromValuesToRef(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, JM, dM) {
        const yM = dM._m;
        yM[0] = MM, yM[1] = rM, yM[2] = iM, yM[3] = OM, yM[4] = SM, yM[5] = jM, yM[6] = aM, yM[7] = PM, yM[8] = nM, yM[9] = QM, yM[10] = zM, yM[11] = LM, yM[12] = mM, yM[13] = HM, yM[14] = hM, yM[15] = JM, dM.markAsUpdated()
      }
      static FromValues(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM, HM, hM, dM) {
        const yM = new JM,
          lM = yM._m;
        return lM[0] = MM, lM[1] = rM, lM[2] = iM, lM[3] = OM, lM[4] = SM, lM[5] = jM, lM[6] = aM, lM[7] = PM, lM[8] = nM, lM[9] = QM, lM[10] = zM, lM[11] = LM, lM[12] = mM, lM[13] = HM, lM[14] = hM, lM[15] = dM, yM.markAsUpdated(), yM
      }
      static Compose(MM, rM, iM) {
        const OM = new JM;
        return JM.ComposeToRef(MM, rM, iM, OM), OM
      }
      static ComposeToRef(MM, rM, iM, OM) {
        const SM = OM._m,
          jM = rM._x,
          aM = rM._y,
          PM = rM._z,
          nM = rM._w,
          QM = jM + jM,
          zM = aM + aM,
          LM = PM + PM,
          mM = jM * QM,
          HM = jM * zM,
          hM = jM * LM,
          JM = aM * zM,
          dM = aM * LM,
          yM = PM * LM,
          lM = nM * QM,
          EM = nM * zM,
          UM = nM * LM,
          GM = MM._x,
          CM = MM._y,
          eM = MM._z;
        return SM[0] = (1 - (JM + yM)) * GM, SM[1] = (HM + UM) * GM, SM[2] = (hM - EM) * GM, SM[3] = 0, SM[4] = (HM - UM) * CM, SM[5] = (1 - (mM + yM)) * CM, SM[6] = (dM + lM) * CM, SM[7] = 0, SM[8] = (hM + EM) * eM, SM[9] = (dM - lM) * eM, SM[10] = (1 - (mM + JM)) * eM, SM[11] = 0, SM[12] = iM._x, SM[13] = iM._y, SM[14] = iM._z, SM[15] = 1, OM.markAsUpdated(), OM
      }
      static Identity() {
        const MM = JM.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return MM._updateIdentityStatus(!0), MM
      }
      static IdentityToRef(MM) {
        return JM.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, MM), MM._updateIdentityStatus(!0), MM
      }
      static Zero() {
        const MM = JM.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return MM._updateIdentityStatus(!1), MM
      }
      static RotationX(MM) {
        const rM = new JM;
        return JM.RotationXToRef(MM, rM), rM
      }
      static Invert(MM) {
        const rM = new JM;
        return MM.invertToRef(rM), rM
      }
      static RotationXToRef(MM, rM) {
        const iM = Math.sin(MM),
          OM = Math.cos(MM);
        return JM.FromValuesToRef(1, 0, 0, 0, 0, OM, iM, 0, 0, -iM, OM, 0, 0, 0, 0, 1, rM), rM._updateIdentityStatus(1 === OM && 0 === iM), rM
      }
      static RotationY(MM) {
        const rM = new JM;
        return JM.RotationYToRef(MM, rM), rM
      }
      static RotationYToRef(MM, rM) {
        const iM = Math.sin(MM),
          OM = Math.cos(MM);
        return JM.FromValuesToRef(OM, 0, -iM, 0, 0, 1, 0, 0, iM, 0, OM, 0, 0, 0, 0, 1, rM), rM._updateIdentityStatus(1 === OM && 0 === iM), rM
      }
      static RotationZ(MM) {
        const rM = new JM;
        return JM.RotationZToRef(MM, rM), rM
      }
      static RotationZToRef(MM, rM) {
        const iM = Math.sin(MM),
          OM = Math.cos(MM);
        return JM.FromValuesToRef(OM, iM, 0, 0, -iM, OM, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, rM), rM._updateIdentityStatus(1 === OM && 0 === iM), rM
      }
      static RotationAxis(MM, rM) {
        const iM = new JM;
        return JM.RotationAxisToRef(MM, rM, iM), iM
      }
      static RotationAxisToRef(MM, rM, iM) {
        const OM = Math.sin(-rM),
          SM = Math.cos(-rM),
          jM = 1 - SM;
        MM = MM.normalizeToRef(dM.sh[0]);
        const aM = iM._m;
        return aM[0] = MM._x * MM._x * jM + SM, aM[1] = MM._x * MM._y * jM - MM._z * OM, aM[2] = MM._x * MM._z * jM + MM._y * OM, aM[3] = 0, aM[4] = MM._y * MM._x * jM + MM._z * OM, aM[5] = MM._y * MM._y * jM + SM, aM[6] = MM._y * MM._z * jM - MM._x * OM, aM[7] = 0, aM[8] = MM._z * MM._x * jM - MM._y * OM, aM[9] = MM._z * MM._y * jM + MM._x * OM, aM[10] = MM._z * MM._z * jM + SM, aM[11] = 0, aM[12] = 0, aM[13] = 0, aM[14] = 0, aM[15] = 1, iM.markAsUpdated(), iM
      }
      static RotationAlignToRef(MM, rM, iM) {
        let SM = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const jM = mM.Dot(rM, MM),
          aM = iM._m;
        if (jM < -1 + OM.d) aM[0] = -1, aM[1] = 0, aM[2] = 0, aM[3] = 0, aM[4] = 0, aM[5] = SM ? 1 : -1, aM[6] = 0, aM[7] = 0, aM[8] = 0, aM[9] = 0, aM[10] = SM ? -1 : 1, aM[11] = 0;
        else {
          const iM = mM.Cross(rM, MM),
            OM = 1 / (1 + jM);
          aM[0] = iM._x * iM._x * OM + jM, aM[1] = iM._y * iM._x * OM - iM._z, aM[2] = iM._z * iM._x * OM + iM._y, aM[3] = 0, aM[4] = iM._x * iM._y * OM + iM._z, aM[5] = iM._y * iM._y * OM + jM, aM[6] = iM._z * iM._y * OM - iM._x, aM[7] = 0, aM[8] = iM._x * iM._z * OM - iM._y, aM[9] = iM._y * iM._z * OM + iM._x, aM[10] = iM._z * iM._z * OM + jM, aM[11] = 0
        }
        return aM[12] = 0, aM[13] = 0, aM[14] = 0, aM[15] = 1, iM.markAsUpdated(), iM
      }
      static RotationYawPitchRoll(MM, rM, iM) {
        const OM = new JM;
        return JM.RotationYawPitchRollToRef(MM, rM, iM, OM), OM
      }
      static RotationYawPitchRollToRef(MM, rM, iM, OM) {
        return hM.RotationYawPitchRollToRef(MM, rM, iM, dM.Quaternion[0]), dM.Quaternion[0].toRotationMatrix(OM), OM
      }
      static Scaling(MM, rM, iM) {
        const OM = new JM;
        return JM.ScalingToRef(MM, rM, iM, OM), OM
      }
      static ScalingToRef(MM, rM, iM, OM) {
        return JM.FromValuesToRef(MM, 0, 0, 0, 0, rM, 0, 0, 0, 0, iM, 0, 0, 0, 0, 1, OM), OM._updateIdentityStatus(1 === MM && 1 === rM && 1 === iM), OM
      }
      static Translation(MM, rM, iM) {
        const OM = new JM;
        return JM.TranslationToRef(MM, rM, iM, OM), OM
      }
      static TranslationToRef(MM, rM, iM, OM) {
        return JM.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, MM, rM, iM, 1, OM), OM._updateIdentityStatus(0 === MM && 0 === rM && 0 === iM), OM
      }
      static Lerp(MM, rM, iM) {
        const OM = new JM;
        return JM.LerpToRef(MM, rM, iM, OM), OM
      }
      static LerpToRef(MM, rM, iM, OM) {
        const SM = OM._m,
          jM = MM.m,
          aM = rM.m;
        for (let PM = 0; PM < 16; PM++) SM[PM] = jM[PM] * (1 - iM) + aM[PM] * iM;
        return OM.markAsUpdated(), OM
      }
      static DecomposeLerp(MM, rM, iM) {
        const OM = new JM;
        return JM.DecomposeLerpToRef(MM, rM, iM, OM), OM
      }
      static DecomposeLerpToRef(MM, rM, iM, OM) {
        const SM = dM.sh[0],
          jM = dM.Quaternion[0],
          aM = dM.sh[1];
        MM.decompose(SM, jM, aM);
        const PM = dM.sh[2],
          nM = dM.Quaternion[1],
          QM = dM.sh[3];
        rM.decompose(PM, nM, QM);
        const zM = dM.sh[4];
        mM.LerpToRef(SM, PM, iM, zM);
        const LM = dM.Quaternion[2];
        hM.SlerpToRef(jM, nM, iM, LM);
        const HM = dM.sh[5];
        return mM.LerpToRef(aM, QM, iM, HM), JM.ComposeToRef(zM, LM, HM, OM), OM
      }
      static LookAtLH(MM, rM, iM) {
        const OM = new JM;
        return JM.LookAtLHToRef(MM, rM, iM, OM), OM
      }
      static LookAtLHToRef(MM, rM, iM, OM) {
        const SM = dM.sh[0],
          jM = dM.sh[1],
          aM = dM.sh[2];
        rM.subtractToRef(MM, aM), aM.normalize(), mM.CrossToRef(iM, aM, SM);
        const PM = SM.lengthSquared();
        0 === PM ? SM.x = 1 : SM.normalizeFromLength(Math.sqrt(PM)), mM.CrossToRef(aM, SM, jM), jM.normalize();
        const nM = -mM.Dot(SM, MM),
          QM = -mM.Dot(jM, MM),
          zM = -mM.Dot(aM, MM);
        return JM.FromValuesToRef(SM._x, jM._x, aM._x, 0, SM._y, jM._y, aM._y, 0, SM._z, jM._z, aM._z, 0, nM, QM, zM, 1, OM), OM
      }
      static LookAtRH(MM, rM, iM) {
        const OM = new JM;
        return JM.LookAtRHToRef(MM, rM, iM, OM), OM
      }
      static LookAtRHToRef(MM, rM, iM, OM) {
        const SM = dM.sh[0],
          jM = dM.sh[1],
          aM = dM.sh[2];
        MM.subtractToRef(rM, aM), aM.normalize(), mM.CrossToRef(iM, aM, SM);
        const PM = SM.lengthSquared();
        0 === PM ? SM.x = 1 : SM.normalizeFromLength(Math.sqrt(PM)), mM.CrossToRef(aM, SM, jM), jM.normalize();
        const nM = -mM.Dot(SM, MM),
          QM = -mM.Dot(jM, MM),
          zM = -mM.Dot(aM, MM);
        return JM.FromValuesToRef(SM._x, jM._x, aM._x, 0, SM._y, jM._y, aM._y, 0, SM._z, jM._z, aM._z, 0, nM, QM, zM, 1, OM), OM
      }
      static LookDirectionLH(MM, rM) {
        const iM = new JM;
        return JM.LookDirectionLHToRef(MM, rM, iM), iM
      }
      static LookDirectionLHToRef(MM, rM, iM) {
        const OM = dM.sh[0];
        OM.jR(MM), OM.scaleInPlace(-1);
        const SM = dM.sh[1];
        return mM.CrossToRef(rM, OM, SM), JM.FromValuesToRef(SM._x, SM._y, SM._z, 0, rM._x, rM._y, rM._z, 0, OM._x, OM._y, OM._z, 0, 0, 0, 0, 1, iM), iM
      }
      static LookDirectionRH(MM, rM) {
        const iM = new JM;
        return JM.LookDirectionRHToRef(MM, rM, iM), iM
      }
      static LookDirectionRHToRef(MM, rM, iM) {
        const OM = dM.sh[2];
        return mM.CrossToRef(rM, MM, OM), JM.FromValuesToRef(OM._x, OM._y, OM._z, 0, rM._x, rM._y, rM._z, 0, MM._x, MM._y, MM._z, 0, 0, 0, 0, 1, iM), iM
      }
      static OrthoLH(MM, rM, iM, OM, SM) {
        const jM = new JM;
        return JM.OrthoLHToRef(MM, rM, iM, OM, jM, SM), jM
      }
      static OrthoLHToRef(MM, rM, iM, OM, SM, jM) {
        const aM = 2 / MM,
          PM = 2 / rM,
          nM = 2 / (OM - iM),
          QM = -(OM + iM) / (OM - iM);
        return JM.FromValuesToRef(aM, 0, 0, 0, 0, PM, 0, 0, 0, 0, nM, 0, 0, 0, QM, 1, SM), jM && SM.multiplyToRef(lM, SM), SM._updateIdentityStatus(1 === aM && 1 === PM && 1 === nM && 0 === QM), SM
      }
      static OrthoOffCenterLH(MM, rM, iM, OM, SM, jM, aM) {
        const PM = new JM;
        return JM.OrthoOffCenterLHToRef(MM, rM, iM, OM, SM, jM, PM, aM), PM
      }
      static OrthoOffCenterLHToRef(MM, rM, iM, OM, SM, jM, aM, PM) {
        const nM = 2 / (rM - MM),
          QM = 2 / (OM - iM),
          zM = 2 / (jM - SM),
          LM = -(jM + SM) / (jM - SM),
          mM = (MM + rM) / (MM - rM),
          HM = (OM + iM) / (iM - OM);
        return JM.FromValuesToRef(nM, 0, 0, 0, 0, QM, 0, 0, 0, 0, zM, 0, mM, HM, LM, 1, aM), PM && aM.multiplyToRef(lM, aM), aM.markAsUpdated(), aM
      }
      static ObliqueOffCenterLHToRef(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
        const LM = -aM * Math.cos(PM),
          mM = -aM * Math.sin(PM);
        return JM.TranslationToRef(0, 0, -nM, dM.Matrix[1]), JM.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, LM, mM, 1, 0, 0, 0, 0, 1, dM.Matrix[0]), dM.Matrix[1].multiplyToRef(dM.Matrix[0], dM.Matrix[0]), JM.TranslationToRef(0, 0, nM, dM.Matrix[1]), dM.Matrix[0].multiplyToRef(dM.Matrix[1], dM.Matrix[0]), JM.OrthoOffCenterLHToRef(MM, rM, iM, OM, SM, jM, QM, zM), dM.Matrix[0].multiplyToRef(QM, QM), QM
      }
      static OrthoOffCenterRH(MM, rM, iM, OM, SM, jM, aM) {
        const PM = new JM;
        return JM.OrthoOffCenterRHToRef(MM, rM, iM, OM, SM, jM, PM, aM), PM
      }
      static OrthoOffCenterRHToRef(MM, rM, iM, OM, SM, jM, aM, PM) {
        return JM.OrthoOffCenterLHToRef(MM, rM, iM, OM, SM, jM, aM, PM), aM._m[10] *= -1, aM
      }
      static ObliqueOffCenterRHToRef(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
        const LM = aM * Math.cos(PM),
          mM = aM * Math.sin(PM);
        return JM.TranslationToRef(0, 0, nM, dM.Matrix[1]), JM.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, LM, mM, 1, 0, 0, 0, 0, 1, dM.Matrix[0]), dM.Matrix[1].multiplyToRef(dM.Matrix[0], dM.Matrix[0]), JM.TranslationToRef(0, 0, -nM, dM.Matrix[1]), dM.Matrix[0].multiplyToRef(dM.Matrix[1], dM.Matrix[0]), JM.OrthoOffCenterRHToRef(MM, rM, iM, OM, SM, jM, QM, zM), dM.Matrix[0].multiplyToRef(QM, QM), QM
      }
      static PerspectiveLH(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const aM = new JM,
          PM = 2 * iM / MM,
          nM = 2 * iM / rM,
          QM = (OM + iM) / (OM - iM),
          zM = -2 * OM * iM / (OM - iM),
          LM = Math.tan(jM);
        return JM.FromValuesToRef(PM, 0, 0, 0, 0, nM, 0, LM, 0, 0, QM, 1, 0, 0, zM, 0, aM), SM && aM.multiplyToRef(lM, aM), aM._updateIdentityStatus(!1), aM
      }
      static PerspectiveFovLH(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const PM = new JM;
        return JM.PerspectiveFovLHToRef(MM, rM, iM, OM, PM, !0, SM, jM, aM), PM
      }
      static PerspectiveFovLHToRef(MM, rM, iM, OM, SM) {
        let jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          aM = arguments.length > 6 ? arguments[6] : void 0,
          PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const QM = iM,
          zM = OM,
          LM = 1 / Math.tan(.5 * MM),
          mM = jM ? LM / rM : LM,
          HM = jM ? LM : LM * rM,
          hM = nM && 0 === QM ? -1 : 0 !== zM ? (zM + QM) / (zM - QM) : 1,
          dM = nM && 0 === QM ? 2 * zM : 0 !== zM ? -2 * zM * QM / (zM - QM) : -2 * QM,
          yM = Math.tan(PM);
        return JM.FromValuesToRef(mM, 0, 0, 0, 0, HM, 0, yM, 0, 0, hM, 1, 0, 0, dM, 0, SM), aM && SM.multiplyToRef(lM, SM), SM._updateIdentityStatus(!1), SM
      }
      static PerspectiveFovReverseLHToRef(MM, rM, iM, OM, SM) {
        let jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          aM = arguments.length > 6 ? arguments[6] : void 0,
          PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const nM = 1 / Math.tan(.5 * MM),
          QM = jM ? nM / rM : nM,
          zM = jM ? nM : nM * rM,
          LM = Math.tan(PM);
        return JM.FromValuesToRef(QM, 0, 0, 0, 0, zM, 0, LM, 0, 0, -iM, 1, 0, 0, 1, 0, SM), aM && SM.multiplyToRef(lM, SM), SM._updateIdentityStatus(!1), SM
      }
      static PerspectiveFovRH(MM, rM, iM, OM, SM) {
        let jM = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          aM = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const PM = new JM;
        return JM.PerspectiveFovRHToRef(MM, rM, iM, OM, PM, !0, SM, jM, aM), PM
      }
      static PerspectiveFovRHToRef(MM, rM, iM, OM, SM) {
        let jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          aM = arguments.length > 6 ? arguments[6] : void 0,
          PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          nM = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const QM = iM,
          zM = OM,
          LM = 1 / Math.tan(.5 * MM),
          mM = jM ? LM / rM : LM,
          HM = jM ? LM : LM * rM,
          hM = nM && 0 === QM ? 1 : 0 !== zM ? -(zM + QM) / (zM - QM) : -1,
          dM = nM && 0 === QM ? 2 * zM : 0 !== zM ? -2 * zM * QM / (zM - QM) : -2 * QM,
          yM = Math.tan(PM);
        return JM.FromValuesToRef(mM, 0, 0, 0, 0, HM, 0, yM, 0, 0, hM, -1, 0, 0, dM, 0, SM), aM && SM.multiplyToRef(lM, SM), SM._updateIdentityStatus(!1), SM
      }
      static PerspectiveFovReverseRHToRef(MM, rM, iM, OM, SM) {
        let jM = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          aM = arguments.length > 6 ? arguments[6] : void 0,
          PM = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const nM = 1 / Math.tan(.5 * MM),
          QM = jM ? nM / rM : nM,
          zM = jM ? nM : nM * rM,
          LM = Math.tan(PM);
        return JM.FromValuesToRef(QM, 0, 0, 0, 0, zM, 0, LM, 0, 0, -iM, -1, 0, 0, -1, 0, SM), aM && SM.multiplyToRef(lM, SM), SM._updateIdentityStatus(!1), SM
      }
      static GetFinalMatrix(MM, rM, iM, OM, SM, jM) {
        const aM = MM.width,
          PM = MM.height,
          nM = MM.x,
          QM = MM.y,
          zM = JM.FromValues(aM / 2, 0, 0, 0, 0, -PM / 2, 0, 0, 0, 0, jM - SM, 0, nM + aM / 2, PM / 2 + QM, SM, 1),
          LM = new JM;
        return rM.multiplyToRef(iM, LM), LM.multiplyToRef(OM, LM), LM.multiplyToRef(zM, LM)
      }
      static GetAsMatrix2x2(MM) {
        const rM = MM.m,
          iM = [rM[0], rM[1], rM[4], rM[5]];
        return jM.b.MatrixUse64Bits ? iM : new Float32Array(iM)
      }
      static GetAsMatrix3x3(MM) {
        const rM = MM.m,
          iM = [rM[0], rM[1], rM[2], rM[4], rM[5], rM[6], rM[8], rM[9], rM[10]];
        return jM.b.MatrixUse64Bits ? iM : new Float32Array(iM)
      }
      static Transpose(MM) {
        const rM = new JM;
        return JM.TransposeToRef(MM, rM), rM
      }
      static TransposeToRef(MM, rM) {
        const iM = MM.m,
          OM = iM[0],
          SM = iM[4],
          jM = iM[8],
          aM = iM[12],
          PM = iM[1],
          nM = iM[5],
          QM = iM[9],
          zM = iM[13],
          LM = iM[2],
          mM = iM[6],
          HM = iM[10],
          hM = iM[14],
          JM = iM[3],
          dM = iM[7],
          yM = iM[11],
          lM = iM[15],
          EM = rM._m;
        return EM[0] = OM, EM[1] = SM, EM[2] = jM, EM[3] = aM, EM[4] = PM, EM[5] = nM, EM[6] = QM, EM[7] = zM, EM[8] = LM, EM[9] = mM, EM[10] = HM, EM[11] = hM, EM[12] = JM, EM[13] = dM, EM[14] = yM, EM[15] = lM, rM.markAsUpdated(), rM._updateIdentityStatus(MM._isIdentity, MM._isIdentityDirty), rM
      }
      static Reflection(MM) {
        const rM = new JM;
        return JM.ReflectionToRef(MM, rM), rM
      }
      static ReflectionToRef(MM, rM) {
        MM.normalize();
        const iM = MM.normal.x,
          OM = MM.normal.y,
          SM = MM.normal.z,
          jM = -2 * iM,
          aM = -2 * OM,
          PM = -2 * SM;
        return JM.FromValuesToRef(jM * iM + 1, aM * iM, PM * iM, 0, jM * OM, aM * OM + 1, PM * OM, 0, jM * SM, aM * SM, PM * SM + 1, 0, jM * MM.d, aM * MM.d, PM * MM.d, 1, rM), rM
      }
      static FromXYZAxesToRef(MM, rM, iM, OM) {
        return JM.FromValuesToRef(MM._x, MM._y, MM._z, 0, rM._x, rM._y, rM._z, 0, iM._x, iM._y, iM._z, 0, 0, 0, 0, 1, OM), OM
      }
      static FromQuaternionToRef(MM, rM) {
        const iM = MM._x * MM._x,
          OM = MM._y * MM._y,
          SM = MM._z * MM._z,
          jM = MM._x * MM._y,
          aM = MM._z * MM._w,
          PM = MM._z * MM._x,
          nM = MM._y * MM._w,
          QM = MM._y * MM._z,
          zM = MM._x * MM._w;
        return rM._m[0] = 1 - 2 * (OM + SM), rM._m[1] = 2 * (jM + aM), rM._m[2] = 2 * (PM - nM), rM._m[3] = 0, rM._m[4] = 2 * (jM - aM), rM._m[5] = 1 - 2 * (SM + iM), rM._m[6] = 2 * (QM + zM), rM._m[7] = 0, rM._m[8] = 2 * (PM + nM), rM._m[9] = 2 * (QM - zM), rM._m[10] = 1 - 2 * (OM + iM), rM._m[11] = 0, rM._m[12] = 0, rM._m[13] = 0, rM._m[14] = 0, rM._m[15] = 1, rM.markAsUpdated(), rM
      }
    }
    JM._IdentityReadOnly = JM.Identity();
    class dM {}
    dM.sh = (0, SM.g)(11, mM.Zero), dM.Matrix = (0, SM.g)(2, JM.Identity), dM.Quaternion = (0, SM.g)(3, hM.Zero);
    class yM {}
    yM.Vector2 = (0, SM.g)(3, LM.Zero), yM.sh = (0, SM.g)(13, mM.Zero), yM.Vector4 = (0, SM.g)(3, HM.Zero), yM.Quaternion = (0, SM.g)(3, hM.Zero), yM.Matrix = (0, SM.g)(8, JM.Identity);
    const lM = JM.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let EM = !1;

    function UM() {
      EM || (EM = !0, Object.defineProperties(LM.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(mM.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(HM.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(hM.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(JM.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, QM.e)("BABYLON.Vector2", LM), (0, QM.e)("BABYLON.Vector3", mM), (0, QM.e)("BABYLON.Vector4", HM), (0, QM.e)("BABYLON.Matrix", JM))
    }
  },
  38068: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    const OM = "undefined" !== typeof WeakRef;
    class SM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(MM, rM, iM, OM)
      }
      initialize(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = MM, this.skipNextObservers = rM, this.target = iM, this.currentTarget = OM, this
      }
    }
    class jM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = MM, this.mask = rM, this.scope = iM, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(MM)
      }
    }
    class aM {
      static FromPromise(MM, rM) {
        const iM = new aM;
        return MM.then((MM => {
          iM.notifyObservers(MM)
        })).catch((MM => {
          if (!rM) throw MM;
          rM.notifyObservers(MM)
        })), iM
      }
      get observers() {
        return this._observers
      }
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = rM, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new SM(0), MM && (this._onObserverAdded = MM)
      }
      add(MM) {
        let rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!MM) return null;
        const SM = new jM(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        SM.unregisterOnNextCall = iM, rM ? this._observers.unshift(SM) : this._observers.push(SM), this._onObserverAdded && this._onObserverAdded(SM), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(SM, this._lastNotifiedValue);
        const aM = OM ? new WeakRef(this) : {
          deref: () => this
        };
        return SM._remove = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const rM = aM.deref();
          rM && (MM ? rM.remove(SM) : rM._remove(SM))
        }, SM
      }
      addOnce(MM) {
        return this.add(MM, void 0, void 0, void 0, !0)
      }
      remove(MM) {
        if (!MM) return !1;
        MM._remove = null;
        return -1 !== this._observers.indexOf(MM) && (this._deferUnregister(MM), !0)
      }
      removeCallback(MM, rM) {
        for (let iM = 0; iM < this._observers.length; iM++) {
          const OM = this._observers[iM];
          if (!OM._willBeUnregistered && (OM.callback === MM && (!rM || rM === OM.scope))) return this._deferUnregister(OM), !0
        }
        return !1
      }
      _deferUnregister(MM) {
        MM._willBeUnregistered || (this._numObserversMarkedAsDeleted++, MM.unregisterOnNextCall = !1, MM._willBeUnregistered = !0, setTimeout((() => {
          this._remove(MM)
        }), 0))
      }
      _remove(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!MM) return !1;
        const iM = this._observers.indexOf(MM);
        return -1 !== iM && (rM && this._numObserversMarkedAsDeleted--, this._observers.splice(iM, 1), !0)
      }
      makeObserverTopPriority(MM) {
        this._remove(MM, !1), this._observers.unshift(MM)
      }
      makeObserverBottomPriority(MM) {
        this._remove(MM, !1), this._observers.push(MM)
      }
      notifyObservers(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = MM), !this._observers.length) return !0;
        const jM = this._eventState;
        jM.mask = rM, jM.target = iM, jM.currentTarget = OM, jM.skipNextObservers = !1, jM.lastReturnValue = MM, jM.userInfo = SM;
        for (const aM of this._observers)
          if (!aM._willBeUnregistered && (aM.mask & rM && (aM.unregisterOnNextCall && this._deferUnregister(aM), aM.scope ? jM.lastReturnValue = aM.callback.apply(aM.scope, [MM, jM]) : jM.lastReturnValue = aM.callback(MM, jM)), jM.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = rM), MM._willBeUnregistered) return;
        const OM = this._eventState;
        OM.mask = iM, OM.skipNextObservers = !1, MM.unregisterOnNextCall && this._deferUnregister(MM), MM.callback(rM, OM)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const MM = this._observers.pop();
          MM && (MM._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const MM = new aM;
        return MM._observers = this._observers.slice(0), MM
      }
      hasSpecificMask() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const rM of this._observers)
          if (rM.mask & MM || rM.mask === MM) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);