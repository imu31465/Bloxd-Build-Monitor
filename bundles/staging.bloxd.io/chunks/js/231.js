export const id = 231;
export const ids = [231];
export const modules = {
  37138: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(37144);
    class bS {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    bS.Instances = [], bS.OnEnginesDisposedObservable = new tS.e, bS._LastCreatedScene = null, bS.UseFallbackTexture = !0, bS.FallbackTexture = ""
  },
  37134: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => tS
    });
    class tS {
      static SetMatrixPrecision(SS) {
        if (tS.MatrixTrackPrecisionChange = !1, SS && !tS.MatrixUse64Bits && tS.MatrixTrackedMatrices)
          for (let HS = 0; HS < tS.MatrixTrackedMatrices.length; ++HS) {
            const SS = tS.MatrixTrackedMatrices[HS],
              gS = SS._m;
            SS._m = new Array(16);
            for (let HS = 0; HS < 16; ++HS) SS._m[HS] = gS[HS]
          }
        tS.MatrixUse64Bits = SS, tS.MatrixCurrentType = tS.MatrixUse64Bits ? Array : Float32Array, tS.MatrixTrackedMatrices = null
      }
    }
    tS.MatrixUse64Bits = !1, tS.MatrixTrackPrecisionChange = !0, tS.MatrixCurrentType = Float32Array, tS.MatrixTrackedMatrices = []
  },
  37157: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => NS,
      f: () => uS,
      h: () => qS,
      i: () => tS,
      j: () => XS,
      n: () => xS
    });
    class tS {}

    function bS(SS) {
      SS.updateFlag = tS._UpdateFlagSeed++
    }

    function XS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const bS = SS.lgS(),
        XS = HS.lgS(),
        xS = bS[0],
        NS = bS[1],
        qS = bS[2],
        uS = bS[3],
        IS = bS[4],
        fS = bS[5],
        kS = bS[6],
        aS = bS[7],
        KS = bS[8],
        jS = bS[9],
        GS = bS[10],
        CS = bS[11],
        nS = bS[12],
        PS = bS[13],
        QS = bS[14],
        DS = bS[15],
        wS = XS[0],
        hS = XS[1],
        ZS = XS[2],
        JS = XS[3],
        OS = XS[4],
        dS = XS[5],
        cS = XS[6],
        vS = XS[7],
        ES = XS[8],
        LS = XS[9],
        YS = XS[10],
        AS = XS[11],
        yS = XS[12],
        VS = XS[13],
        iS = XS[14],
        WS = XS[15];
      gS[tS] = xS * wS + NS * OS + qS * ES + uS * yS, gS[tS + 1] = xS * hS + NS * dS + qS * LS + uS * VS, gS[tS + 2] = xS * ZS + NS * cS + qS * YS + uS * iS, gS[tS + 3] = xS * JS + NS * vS + qS * AS + uS * WS, gS[tS + 4] = IS * wS + fS * OS + kS * ES + aS * yS, gS[tS + 5] = IS * hS + fS * dS + kS * LS + aS * VS, gS[tS + 6] = IS * ZS + fS * cS + kS * YS + aS * iS, gS[tS + 7] = IS * JS + fS * vS + kS * AS + aS * WS, gS[tS + 8] = KS * wS + jS * OS + GS * ES + CS * yS, gS[tS + 9] = KS * hS + jS * dS + GS * LS + CS * VS, gS[tS + 10] = KS * ZS + jS * cS + GS * YS + CS * iS, gS[tS + 11] = KS * JS + jS * vS + GS * AS + CS * WS, gS[tS + 12] = nS * wS + PS * OS + QS * ES + DS * yS, gS[tS + 13] = nS * hS + PS * dS + QS * LS + DS * VS, gS[tS + 14] = nS * ZS + PS * cS + QS * YS + DS * iS, gS[tS + 15] = nS * JS + PS * vS + QS * AS + DS * WS
    }

    function xS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      XS(SS, HS, gS.lgS(), tS), bS(gS)
    }

    function NS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const tS = SS.lgS();
      HS[gS] = tS[0], HS[gS + 1] = tS[1], HS[gS + 2] = tS[2], HS[gS + 3] = tS[3], HS[gS + 4] = tS[4], HS[gS + 5] = tS[5], HS[gS + 6] = tS[6], HS[gS + 7] = tS[7], HS[gS + 8] = tS[8], HS[gS + 9] = tS[9], HS[gS + 10] = tS[10], HS[gS + 11] = tS[11], HS[gS + 12] = tS[12], HS[gS + 13] = tS[13], HS[gS + 14] = tS[14], HS[gS + 15] = tS[15]
    }

    function qS(SS, HS) {
      const gS = uS(SS, HS.lgS());
      return gS && bS(HS), gS
    }

    function uS(SS, HS) {
      const gS = SS.lgS(),
        tS = gS[0],
        bS = gS[1],
        XS = gS[2],
        xS = gS[3],
        NS = gS[4],
        qS = gS[5],
        uS = gS[6],
        IS = gS[7],
        fS = gS[8],
        kS = gS[9],
        aS = gS[10],
        KS = gS[11],
        jS = gS[12],
        GS = gS[13],
        CS = gS[14],
        nS = gS[15],
        PS = aS * nS - CS * KS,
        QS = kS * nS - GS * KS,
        DS = kS * CS - GS * aS,
        wS = fS * nS - jS * KS,
        hS = fS * CS - aS * jS,
        ZS = fS * GS - jS * kS,
        JS = +(qS * PS - uS * QS + IS * DS),
        OS = -(NS * PS - uS * wS + IS * hS),
        dS = +(NS * QS - qS * wS + IS * ZS),
        cS = -(NS * DS - qS * hS + uS * ZS),
        vS = tS * JS + bS * OS + XS * dS + xS * cS;
      if (0 === vS) return !1;
      const ES = 1 / vS,
        LS = uS * nS - CS * IS,
        YS = qS * nS - GS * IS,
        AS = qS * CS - GS * uS,
        yS = NS * nS - jS * IS,
        VS = NS * CS - jS * uS,
        iS = NS * GS - jS * qS,
        WS = uS * KS - aS * IS,
        zS = qS * KS - kS * IS,
        US = qS * aS - kS * uS,
        pS = NS * KS - fS * IS,
        sS = NS * aS - fS * uS,
        BS = NS * kS - fS * qS,
        MS = -(bS * PS - XS * QS + xS * DS),
        FS = +(tS * PS - XS * wS + xS * hS),
        RS = -(tS * QS - bS * wS + xS * ZS),
        TS = +(tS * DS - bS * hS + XS * ZS),
        oS = +(bS * LS - XS * YS + xS * AS),
        lS = -(tS * LS - XS * yS + xS * VS),
        mS = +(tS * YS - bS * yS + xS * iS),
        eS = -(tS * AS - bS * VS + XS * iS),
        rS = -(bS * WS - XS * zS + xS * US),
        SH = +(tS * WS - XS * pS + xS * sS),
        HH = -(tS * zS - bS * pS + xS * BS),
        gH = +(tS * US - bS * sS + XS * BS);
      return HS[0] = JS * ES, HS[1] = MS * ES, HS[2] = oS * ES, HS[3] = rS * ES, HS[4] = OS * ES, HS[5] = FS * ES, HS[6] = lS * ES, HS[7] = SH * ES, HS[8] = dS * ES, HS[9] = RS * ES, HS[10] = mS * ES, HS[11] = HH * ES, HS[12] = cS * ES, HS[13] = TS * ES, HS[14] = eS * ES, HS[15] = gH * ES, !0
    }
    tS._UpdateFlagSeed = 0
  },
  37117: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => jS,
      i: () => KS,
      k: () => QS,
      l: () => CS,
      m: () => fS,
      n: () => kS,
      r: () => aS
    });
    var tS = gS(37123),
      bS = gS(37129),
      XS = gS(37134),
      xS = gS(37138),
      NS = gS(37149),
      qS = gS(37157),
      uS = gS(37164);
    const IS = SS => parseInt(SS.toString().replace(/\W/g, ""));
    class fS {
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = SS, this.y = HS
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let SS = IS(this.x);
        return SS = 397 * SS ^ IS(this.y), SS
      }
      toArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return SS[HS] = this.x, SS[HS + 1] = this.y, this
      }
      UHS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return fS.FromArrayToRef(SS, HS, this), this
      }
      lgS() {
        return [this.x, this.y]
      }
      dJ(SS) {
        return this.x = SS.x, this.y = SS.y, this
      }
      I5(SS, HS) {
        return this.x = SS, this.y = HS, this
      }
      set(SS, HS) {
        return this.I5(SS, HS)
      }
      o_(SS) {
        return this.I5(SS, SS)
      }
      add(SS) {
        return new fS(this.x + SS.x, this.y + SS.y)
      }
      addToRef(SS, HS) {
        return HS.x = this.x + SS.x, HS.y = this.y + SS.y, HS
      }
      addInPlace(SS) {
        return this.x += SS.x, this.y += SS.y, this
      }
      addInPlaceFromFloats(SS, HS) {
        return this.x += SS, this.y += HS, this
      }
      addVector3(SS) {
        return new fS(this.x + SS.x, this.y + SS.y)
      }
      subtract(SS) {
        return new fS(this.x - SS.x, this.y - SS.y)
      }
      subtractToRef(SS, HS) {
        return HS.x = this.x - SS.x, HS.y = this.y - SS.y, HS
      }
      GtS(SS) {
        return this.x -= SS.x, this.y -= SS.y, this
      }
      multiplyInPlace(SS) {
        return this.x *= SS.x, this.y *= SS.y, this
      }
      multiply(SS) {
        return new fS(this.x * SS.x, this.y * SS.y)
      }
      multiplyToRef(SS, HS) {
        return HS.x = this.x * SS.x, HS.y = this.y * SS.y, HS
      }
      multiplyByFloats(SS, HS) {
        return new fS(this.x * SS, this.y * HS)
      }
      divide(SS) {
        return new fS(this.x / SS.x, this.y / SS.y)
      }
      divideToRef(SS, HS) {
        return HS.x = this.x / SS.x, HS.y = this.y / SS.y, HS
      }
      divideInPlace(SS) {
        return this.x = this.x / SS.x, this.y = this.y / SS.y, this
      }
      minimizeInPlace(SS) {
        return this.minimizeInPlaceFromFloats(SS.x, SS.y)
      }
      maximizeInPlace(SS) {
        return this.maximizeInPlaceFromFloats(SS.x, SS.y)
      }
      minimizeInPlaceFromFloats(SS, HS) {
        return this.x = Math.min(SS, this.x), this.y = Math.min(HS, this.y), this
      }
      maximizeInPlaceFromFloats(SS, HS) {
        return this.x = Math.max(SS, this.x), this.y = Math.max(HS, this.y), this
      }
      subtractFromFloats(SS, HS) {
        return new fS(this.x - SS, this.y - HS)
      }
      subtractFromFloatsToRef(SS, HS, gS) {
        return gS.x = this.x - SS, gS.y = this.y - HS, gS
      }
      gq() {
        return new fS(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(SS) {
        return SS.x = -this.x, SS.y = -this.y, SS
      }
      scaleInPlace(SS) {
        return this.x *= SS, this.y *= SS, this
      }
      scale(SS) {
        return new fS(this.x * SS, this.y * SS)
      }
      scaleToRef(SS, HS) {
        return HS.x = this.x * SS, HS.y = this.y * SS, HS
      }
      scaleAndAddToRef(SS, HS) {
        return HS.x += this.x * SS, HS.y += this.y * SS, HS
      }
      equals(SS) {
        return SS && this.x === SS.x && this.y === SS.y
      }
      equalsWithEpsilon(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.d;
        return SS && (0, NS.WithinEpsilon)(this.x, SS.x, HS) && (0, NS.WithinEpsilon)(this.y, SS.y, HS)
      }
      ZxS(SS, HS) {
        return this.x === SS && this.y === HS
      }
      floor() {
        return new fS(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(SS) {
        return SS.x = Math.floor(this.x), SS.y = Math.floor(this.y), SS
      }
      fract() {
        return new fS(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(SS) {
        return SS.x = this.x - Math.floor(this.x), SS.y = this.y - Math.floor(this.y), SS
      }
      rotate(SS) {
        return this.rotateToRef(SS, new fS)
      }
      rotateToRef(SS, HS) {
        const gS = Math.cos(SS),
          tS = Math.sin(SS);
        return HS.x = gS * this.x - tS * this.y, HS.y = tS * this.x + gS * this.y, HS
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
      normalizeFromLength(SS) {
        return 0 === SS || 1 === SS ? this : this.scaleInPlace(1 / SS)
      }
      normalizeToNew() {
        const SS = new fS;
        return this.normalizeToRef(SS), SS
      }
      normalizeToRef(SS) {
        const HS = this.length();
        return 0 === HS || 1 === HS ? (SS.x = this.x, SS.y = this.y, SS) : this.scaleToRef(1 / HS, SS)
      }
      clone() {
        return new fS(this.x, this.y)
      }
      dot(SS) {
        return this.x * SS.x + this.y * SS.y
      }
      static Zero() {
        return new fS(0, 0)
      }
      static One() {
        return new fS(1, 1)
      }
      static Random() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new fS((0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS))
      }
      static RandomToRef() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS))
      }
      static get ZeroReadOnly() {
        return fS._ZeroReadOnly
      }
      static FromArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new fS(SS[HS], SS[HS + 1])
      }
      static FromArrayToRef(SS, HS, gS) {
        return gS.x = SS[HS], gS.y = SS[HS + 1], gS
      }
      static FromFloatsToRef(SS, HS, gS) {
        return gS.I5(SS, HS), gS
      }
      static CatmullRom(SS, HS, gS, tS, bS) {
        const XS = bS * bS,
          xS = bS * XS,
          NS = .5 * (2 * HS.x + (-SS.x + gS.x) * bS + (2 * SS.x - 5 * HS.x + 4 * gS.x - tS.x) * XS + (-SS.x + 3 * HS.x - 3 * gS.x + tS.x) * xS),
          qS = .5 * (2 * HS.y + (-SS.y + gS.y) * bS + (2 * SS.y - 5 * HS.y + 4 * gS.y - tS.y) * XS + (-SS.y + 3 * HS.y - 3 * gS.y + tS.y) * xS);
        return new fS(NS, qS)
      }
      static ClampToRef(SS, HS, gS, tS) {
        return tS.x = (0, NS.Clamp)(SS.x, HS.x, gS.x), tS.y = (0, NS.Clamp)(SS.y, HS.y, gS.y), tS
      }
      static Clamp(SS, HS, gS) {
        const tS = (0, NS.Clamp)(SS.x, HS.x, gS.x),
          bS = (0, NS.Clamp)(SS.y, HS.y, gS.y);
        return new fS(tS, bS)
      }
      static Hermite(SS, HS, gS, tS, bS) {
        const XS = bS * bS,
          xS = bS * XS,
          NS = 2 * xS - 3 * XS + 1,
          qS = -2 * xS + 3 * XS,
          uS = xS - 2 * XS + bS,
          IS = xS - XS,
          kS = SS.x * NS + gS.x * qS + HS.x * uS + tS.x * IS,
          aS = SS.y * NS + gS.y * qS + HS.y * uS + tS.y * IS;
        return new fS(kS, aS)
      }
      static Hermite1stDerivative(SS, HS, gS, tS, bS) {
        return this.Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, new fS)
      }
      static Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS) {
        const xS = bS * bS;
        return XS.x = 6 * (xS - bS) * SS.x + (3 * xS - 4 * bS + 1) * HS.x + 6 * (-xS + bS) * gS.x + (3 * xS - 2 * bS) * tS.x, XS.y = 6 * (xS - bS) * SS.y + (3 * xS - 4 * bS + 1) * HS.y + 6 * (-xS + bS) * gS.y + (3 * xS - 2 * bS) * tS.y, XS
      }
      static Lerp(SS, HS, gS) {
        return fS.LerpToRef(SS, HS, gS, new fS)
      }
      static LerpToRef(SS, HS, gS, tS) {
        return tS.x = SS.x + (HS.x - SS.x) * gS, tS.y = SS.y + (HS.y - SS.y) * gS, tS
      }
      static Dot(SS, HS) {
        return SS.x * HS.x + SS.y * HS.y
      }
      static Normalize(SS) {
        return fS.NormalizeToRef(SS, new fS)
      }
      static NormalizeToRef(SS, HS) {
        return SS.normalizeToRef(HS), HS
      }
      static Minimize(SS, HS) {
        const gS = SS.x < HS.x ? SS.x : HS.x,
          tS = SS.y < HS.y ? SS.y : HS.y;
        return new fS(gS, tS)
      }
      static Maximize(SS, HS) {
        const gS = SS.x > HS.x ? SS.x : HS.x,
          tS = SS.y > HS.y ? SS.y : HS.y;
        return new fS(gS, tS)
      }
      static Transform(SS, HS) {
        return fS.TransformToRef(SS, HS, new fS)
      }
      static TransformToRef(SS, HS, gS) {
        const tS = HS.m,
          bS = SS.x * tS[0] + SS.y * tS[4] + tS[12],
          XS = SS.x * tS[1] + SS.y * tS[5] + tS[13];
        return gS.x = bS, gS.y = XS, gS
      }
      static PointInTriangle(SS, HS, gS, tS) {
        const bS = .5 * (-gS.y * tS.x + HS.y * (-gS.x + tS.x) + HS.x * (gS.y - tS.y) + gS.x * tS.y),
          XS = bS < 0 ? -1 : 1,
          xS = (HS.y * tS.x - HS.x * tS.y + (tS.y - HS.y) * SS.x + (HS.x - tS.x) * SS.y) * XS,
          NS = (HS.x * gS.y - HS.y * gS.x + (HS.y - gS.y) * SS.x + (gS.x - HS.x) * SS.y) * XS;
        return xS > 0 && NS > 0 && xS + NS < 2 * bS * XS
      }
      static Distance(SS, HS) {
        return Math.sqrt(fS.DistanceSquared(SS, HS))
      }
      static DistanceSquared(SS, HS) {
        const gS = SS.x - HS.x,
          tS = SS.y - HS.y;
        return gS * gS + tS * tS
      }
      static Center(SS, HS) {
        return fS.CenterToRef(SS, HS, new fS)
      }
      static CenterToRef(SS, HS, gS) {
        return gS.I5((SS.x + HS.x) / 2, (SS.y + HS.y) / 2)
      }
      static DistanceOfPointFromSegment(SS, HS, gS) {
        const tS = fS.DistanceSquared(HS, gS);
        if (0 === tS) return fS.Distance(SS, HS);
        const bS = gS.subtract(HS),
          XS = Math.max(0, Math.min(1, fS.Dot(SS.subtract(HS), bS) / tS)),
          xS = HS.add(bS.multiplyByFloats(XS, XS));
        return fS.Distance(SS, xS)
      }
    }
    fS._V8PerformanceHack = new fS(.5, .5), fS._ZeroReadOnly = fS.Zero();
    class kS {
      get x() {
        return this._x
      }
      set x(SS) {
        this._x = SS, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(SS) {
        this._y = SS, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(SS) {
        this._z = SS, this._isDirty = !0
      }
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = SS, this._y = HS, this._z = gS
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "VK"
      }
      getHashCode() {
        let SS = IS(this._x);
        return SS = 397 * SS ^ IS(this._y), SS = 397 * SS ^ IS(this._z), SS
      }
      lgS() {
        return [this._x, this._y, this._z]
      }
      toArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return SS[HS] = this._x, SS[HS + 1] = this._y, SS[HS + 2] = this._z, this
      }
      UHS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kS.FromArrayToRef(SS, HS, this), this
      }
      toQuaternion() {
        return KS.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(SS) {
        return this._x += SS._x, this._y += SS._y, this._z += SS._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(SS, HS, gS) {
        return this._x += SS, this._y += HS, this._z += gS, this._isDirty = !0, this
      }
      add(SS) {
        return new kS(this._x + SS._x, this._y + SS._y, this._z + SS._z)
      }
      addToRef(SS, HS) {
        return HS._x = this._x + SS._x, HS._y = this._y + SS._y, HS._z = this._z + SS._z, HS._isDirty = !0, HS
      }
      GtS(SS) {
        return this._x -= SS._x, this._y -= SS._y, this._z -= SS._z, this._isDirty = !0, this
      }
      subtract(SS) {
        return new kS(this._x - SS._x, this._y - SS._y, this._z - SS._z)
      }
      subtractToRef(SS, HS) {
        return this.subtractFromFloatsToRef(SS._x, SS._y, SS._z, HS)
      }
      subtractFromFloats(SS, HS, gS) {
        return new kS(this._x - SS, this._y - HS, this._z - gS)
      }
      subtractFromFloatsToRef(SS, HS, gS, tS) {
        return tS._x = this._x - SS, tS._y = this._y - HS, tS._z = this._z - gS, tS._isDirty = !0, tS
      }
      gq() {
        return new kS(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(SS) {
        return SS._x = -1 * this._x, SS._y = -1 * this._y, SS._z = -1 * this._z, SS._isDirty = !0, SS
      }
      scaleInPlace(SS) {
        return this._x *= SS, this._y *= SS, this._z *= SS, this._isDirty = !0, this
      }
      scale(SS) {
        return new kS(this._x * SS, this._y * SS, this._z * SS)
      }
      scaleToRef(SS, HS) {
        return HS._x = this._x * SS, HS._y = this._y * SS, HS._z = this._z * SS, HS._isDirty = !0, HS
      }
      getNormalToRef(SS) {
        const HS = this.length();
        let gS = Math.acos(this._y / HS);
        const tS = Math.atan2(this._z, this._x);
        gS > Math.PI / 2 ? gS -= Math.PI / 2 : gS += Math.PI / 2;
        const bS = HS * Math.sin(gS) * Math.cos(tS),
          XS = HS * Math.cos(gS),
          xS = HS * Math.sin(gS) * Math.sin(tS);
        return SS.set(bS, XS, xS), SS
      }
      applyRotationQuaternionToRef(SS, HS) {
        const gS = this._x,
          tS = this._y,
          bS = this._z,
          XS = SS._x,
          xS = SS._y,
          NS = SS._z,
          qS = SS._w,
          uS = 2 * (xS * bS - NS * tS),
          IS = 2 * (NS * gS - XS * bS),
          fS = 2 * (XS * tS - xS * gS);
        return HS._x = gS + qS * uS + xS * fS - NS * IS, HS._y = tS + qS * IS + NS * uS - XS * fS, HS._z = bS + qS * fS + XS * IS - xS * uS, HS._isDirty = !0, HS
      }
      applyRotationQuaternionInPlace(SS) {
        return this.applyRotationQuaternionToRef(SS, this)
      }
      applyRotationQuaternion(SS) {
        return this.applyRotationQuaternionToRef(SS, new kS)
      }
      scaleAndAddToRef(SS, HS) {
        return HS._x += this._x * SS, HS._y += this._y * SS, HS._z += this._z * SS, HS._isDirty = !0, HS
      }
      projectOnPlane(SS, HS) {
        return this.projectOnPlaneToRef(SS, HS, new kS)
      }
      projectOnPlaneToRef(SS, HS, gS) {
        const tS = SS.normal,
          bS = SS.d,
          XS = GS.VK[0];
        this.subtractToRef(HS, XS), XS.normalize();
        const xS = kS.Dot(XS, tS);
        if (Math.abs(xS) < 1e-10) gS.o_(1 / 0);
        else {
          const SS = -(kS.Dot(HS, tS) + bS) / xS,
            NS = XS.scaleInPlace(SS);
          HS.addToRef(NS, gS)
        }
        return gS
      }
      equals(SS) {
        return SS && this._x === SS._x && this._y === SS._y && this._z === SS._z
      }
      equalsWithEpsilon(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.d;
        return SS && (0, NS.WithinEpsilon)(this._x, SS._x, HS) && (0, NS.WithinEpsilon)(this._y, SS._y, HS) && (0, NS.WithinEpsilon)(this._z, SS._z, HS)
      }
      ZxS(SS, HS, gS) {
        return this._x === SS && this._y === HS && this._z === gS
      }
      multiplyInPlace(SS) {
        return this._x *= SS._x, this._y *= SS._y, this._z *= SS._z, this._isDirty = !0, this
      }
      multiply(SS) {
        return this.multiplyByFloats(SS._x, SS._y, SS._z)
      }
      multiplyToRef(SS, HS) {
        return HS._x = this._x * SS._x, HS._y = this._y * SS._y, HS._z = this._z * SS._z, HS._isDirty = !0, HS
      }
      multiplyByFloats(SS, HS, gS) {
        return new kS(this._x * SS, this._y * HS, this._z * gS)
      }
      divide(SS) {
        return new kS(this._x / SS._x, this._y / SS._y, this._z / SS._z)
      }
      divideToRef(SS, HS) {
        return HS._x = this._x / SS._x, HS._y = this._y / SS._y, HS._z = this._z / SS._z, HS._isDirty = !0, HS
      }
      divideInPlace(SS) {
        return this._x = this._x / SS._x, this._y = this._y / SS._y, this._z = this._z / SS._z, this._isDirty = !0, this
      }
      minimizeInPlace(SS) {
        return this.minimizeInPlaceFromFloats(SS._x, SS._y, SS._z)
      }
      maximizeInPlace(SS) {
        return this.maximizeInPlaceFromFloats(SS._x, SS._y, SS._z)
      }
      minimizeInPlaceFromFloats(SS, HS, gS) {
        return SS < this._x && (this.x = SS), HS < this._y && (this.y = HS), gS < this._z && (this.z = gS), this
      }
      maximizeInPlaceFromFloats(SS, HS, gS) {
        return SS > this._x && (this.x = SS), HS > this._y && (this.y = HS), gS > this._z && (this.z = gS), this
      }
      isNonUniformWithinEpsilon(SS) {
        const HS = Math.abs(this._x),
          gS = Math.abs(this._y);
        if (!(0, NS.WithinEpsilon)(HS, gS, SS)) return !0;
        const tS = Math.abs(this._z);
        return !(0, NS.WithinEpsilon)(HS, tS, SS) || !(0, NS.WithinEpsilon)(gS, tS, SS)
      }
      get isNonUniform() {
        const SS = Math.abs(this._x);
        if (SS !== Math.abs(this._y)) return !0;
        return SS !== Math.abs(this._z)
      }
      floorToRef(SS) {
        return SS._x = Math.floor(this._x), SS._y = Math.floor(this._y), SS._z = Math.floor(this._z), SS._isDirty = !0, SS
      }
      floor() {
        return new kS(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(SS) {
        return SS._x = this._x - Math.floor(this._x), SS._y = this._y - Math.floor(this._y), SS._z = this._z - Math.floor(this._z), SS._isDirty = !0, SS
      }
      fract() {
        return new kS(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(SS) {
        if ("xyz" === (SS = SS.toLowerCase())) return this;
        const HS = GS.VK[0].dJ(this);
        return this.x = HS[SS[0]], this.y = HS[SS[1]], this.z = HS[SS[2]], this
      }
      rotateByQuaternionToRef(SS, HS) {
        return SS.toRotationMatrix(GS.Matrix[0]), kS.TransformCoordinatesToRef(this, GS.Matrix[0], HS), HS
      }
      rotateByQuaternionAroundPointToRef(SS, HS, gS) {
        return this.subtractToRef(HS, GS.VK[0]), GS.VK[0].rotateByQuaternionToRef(SS, GS.VK[0]), HS.addToRef(GS.VK[0], gS), gS
      }
      cross(SS) {
        return kS.CrossToRef(this, SS, new kS)
      }
      normalizeFromLength(SS) {
        return 0 === SS || 1 === SS ? this : this.scaleInPlace(1 / SS)
      }
      normalizeToNew() {
        return this.normalizeToRef(new kS)
      }
      normalizeToRef(SS) {
        const HS = this.length();
        return 0 === HS || 1 === HS ? (SS._x = this._x, SS._y = this._y, SS._z = this._z, SS._isDirty = !0, SS) : this.scaleToRef(1 / HS, SS)
      }
      clone() {
        return new kS(this._x, this._y, this._z)
      }
      dJ(SS) {
        return this.I5(SS._x, SS._y, SS._z)
      }
      I5(SS, HS, gS) {
        return this._x = SS, this._y = HS, this._z = gS, this._isDirty = !0, this
      }
      set(SS, HS, gS) {
        return this.I5(SS, HS, gS)
      }
      o_(SS) {
        return this._x = this._y = this._z = SS, this._isDirty = !0, this
      }
      static GetClipFactor(SS, HS, gS, tS) {
        const bS = kS.Dot(SS, gS);
        return (bS - tS) / (bS - kS.Dot(HS, gS))
      }
      static GetAngleBetweenVectors(SS, HS, gS) {
        const tS = SS.normalizeToRef(GS.VK[1]),
          bS = HS.normalizeToRef(GS.VK[2]);
        let XS = kS.Dot(tS, bS);
        XS = (0, NS.Clamp)(XS, -1, 1);
        const xS = Math.acos(XS),
          qS = GS.VK[3];
        return kS.CrossToRef(tS, bS, qS), kS.Dot(qS, gS) > 0 ? isNaN(xS) ? 0 : xS : isNaN(xS) ? -Math.PI : -Math.acos(XS)
      }
      static GetAngleBetweenVectorsOnPlane(SS, HS, gS) {
        GS.VK[0].dJ(SS);
        const tS = GS.VK[0];
        GS.VK[1].dJ(HS);
        const bS = GS.VK[1];
        GS.VK[2].dJ(gS);
        const XS = GS.VK[2],
          xS = GS.VK[3],
          qS = GS.VK[4];
        tS.normalize(), bS.normalize(), XS.normalize(), kS.CrossToRef(XS, tS, xS), kS.CrossToRef(xS, XS, qS);
        const uS = Math.atan2(kS.Dot(bS, xS), kS.Dot(bS, qS));
        return (0, NS.NormalizeRadians)(uS)
      }
      static PitchYawRollToMoveBetweenPointsToRef(SS, HS, gS) {
        const tS = CS.VK[0];
        return HS.subtractToRef(SS, tS), gS._y = Math.atan2(tS.x, tS.z) || 0, gS._x = Math.atan2(Math.sqrt(tS.x ** 2 + tS.z ** 2), tS.y) || 0, gS._z = 0, gS._isDirty = !0, gS
      }
      static PitchYawRollToMoveBetweenPoints(SS, HS) {
        const gS = kS.Zero();
        return kS.PitchYawRollToMoveBetweenPointsToRef(SS, HS, gS)
      }
      static SlerpToRef(SS, HS, gS, bS) {
        gS = (0, NS.Clamp)(gS, 0, 1);
        const XS = GS.VK[0],
          xS = GS.VK[1];
        XS.dJ(SS);
        const qS = XS.length();
        XS.normalizeFromLength(qS), xS.dJ(HS);
        const uS = xS.length();
        xS.normalizeFromLength(uS);
        const IS = kS.Dot(XS, xS);
        let fS, aS;
        if (IS < 1 - tS.d) {
          const SS = Math.acos(IS),
            HS = 1 / Math.sin(SS);
          fS = Math.sin((1 - gS) * SS) * HS, aS = Math.sin(gS * SS) * HS
        } else fS = 1 - gS, aS = gS;
        return XS.scaleInPlace(fS), xS.scaleInPlace(aS), bS.dJ(XS).addInPlace(xS), bS.scaleInPlace((0, NS.Lerp)(qS, uS, gS)), bS
      }
      static SmoothToRef(SS, HS, gS, tS, bS) {
        return kS.SlerpToRef(SS, HS, 0 === tS ? 1 : gS / tS, bS), bS
      }
      static FromArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new kS(SS[HS], SS[HS + 1], SS[HS + 2])
      }
      static FromFloatArray(SS, HS) {
        return kS.FromArray(SS, HS)
      }
      static FromArrayToRef(SS, HS, gS) {
        return gS._x = SS[HS], gS._y = SS[HS + 1], gS._z = SS[HS + 2], gS._isDirty = !0, gS
      }
      static FromFloatArrayToRef(SS, HS, gS) {
        return kS.FromArrayToRef(SS, HS, gS)
      }
      static FromFloatsToRef(SS, HS, gS, tS) {
        return tS.I5(SS, HS, gS), tS
      }
      static Zero() {
        return new kS(0, 0, 0)
      }
      static One() {
        return new kS(1, 1, 1)
      }
      static Up() {
        return new kS(0, 1, 0)
      }
      static get UpReadOnly() {
        return kS._UpReadOnly
      }
      static get DownReadOnly() {
        return kS._DownReadOnly
      }
      static get RightReadOnly() {
        return kS._RightReadOnly
      }
      static get LeftReadOnly() {
        return kS._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return kS._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return kS._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return kS._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return kS._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return kS._ZeroReadOnly
      }
      static get OneReadOnly() {
        return kS._OneReadOnly
      }
      static Down() {
        return new kS(0, -1, 0)
      }
      static Forward() {
        return new kS(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new kS(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new kS(1, 0, 0)
      }
      static Left() {
        return new kS(-1, 0, 0)
      }
      static Random() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new kS((0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS))
      }
      static RandomToRef() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS))
      }
      static TransformCoordinates(SS, HS) {
        const gS = kS.Zero();
        return kS.TransformCoordinatesToRef(SS, HS, gS), gS
      }
      static TransformCoordinatesToRef(SS, HS, gS) {
        return kS.TransformCoordinatesFromFloatsToRef(SS._x, SS._y, SS._z, HS, gS), gS
      }
      static TransformCoordinatesFromFloatsToRef(SS, HS, gS, tS, bS) {
        const XS = tS.m,
          xS = SS * XS[0] + HS * XS[4] + gS * XS[8] + XS[12],
          NS = SS * XS[1] + HS * XS[5] + gS * XS[9] + XS[13],
          qS = SS * XS[2] + HS * XS[6] + gS * XS[10] + XS[14],
          uS = 1 / (SS * XS[3] + HS * XS[7] + gS * XS[11] + XS[15]);
        return bS._x = xS * uS, bS._y = NS * uS, bS._z = qS * uS, bS._isDirty = !0, bS
      }
      static TransformNormal(SS, HS) {
        const gS = kS.Zero();
        return kS.TransformNormalToRef(SS, HS, gS), gS
      }
      static TransformNormalToRef(SS, HS, gS) {
        return this.TransformNormalFromFloatsToRef(SS._x, SS._y, SS._z, HS, gS), gS
      }
      static TransformNormalFromFloatsToRef(SS, HS, gS, tS, bS) {
        const XS = tS.m;
        return bS._x = SS * XS[0] + HS * XS[4] + gS * XS[8], bS._y = SS * XS[1] + HS * XS[5] + gS * XS[9], bS._z = SS * XS[2] + HS * XS[6] + gS * XS[10], bS._isDirty = !0, bS
      }
      static CatmullRom(SS, HS, gS, tS, bS) {
        const XS = bS * bS,
          xS = bS * XS,
          NS = .5 * (2 * HS._x + (-SS._x + gS._x) * bS + (2 * SS._x - 5 * HS._x + 4 * gS._x - tS._x) * XS + (-SS._x + 3 * HS._x - 3 * gS._x + tS._x) * xS),
          qS = .5 * (2 * HS._y + (-SS._y + gS._y) * bS + (2 * SS._y - 5 * HS._y + 4 * gS._y - tS._y) * XS + (-SS._y + 3 * HS._y - 3 * gS._y + tS._y) * xS),
          uS = .5 * (2 * HS._z + (-SS._z + gS._z) * bS + (2 * SS._z - 5 * HS._z + 4 * gS._z - tS._z) * XS + (-SS._z + 3 * HS._z - 3 * gS._z + tS._z) * xS);
        return new kS(NS, qS, uS)
      }
      static Clamp(SS, HS, gS) {
        const tS = new kS;
        return kS.ClampToRef(SS, HS, gS, tS), tS
      }
      static ClampToRef(SS, HS, gS, tS) {
        let bS = SS._x;
        bS = bS > gS._x ? gS._x : bS, bS = bS < HS._x ? HS._x : bS;
        let XS = SS._y;
        XS = XS > gS._y ? gS._y : XS, XS = XS < HS._y ? HS._y : XS;
        let xS = SS._z;
        return xS = xS > gS._z ? gS._z : xS, xS = xS < HS._z ? HS._z : xS, tS.I5(bS, XS, xS), tS
      }
      static CheckExtends(SS, HS, gS) {
        HS.minimizeInPlace(SS), gS.maximizeInPlace(SS)
      }
      static Hermite(SS, HS, gS, tS, bS) {
        const XS = bS * bS,
          xS = bS * XS,
          NS = 2 * xS - 3 * XS + 1,
          qS = -2 * xS + 3 * XS,
          uS = xS - 2 * XS + bS,
          IS = xS - XS,
          fS = SS._x * NS + gS._x * qS + HS._x * uS + tS._x * IS,
          aS = SS._y * NS + gS._y * qS + HS._y * uS + tS._y * IS,
          KS = SS._z * NS + gS._z * qS + HS._z * uS + tS._z * IS;
        return new kS(fS, aS, KS)
      }
      static Hermite1stDerivative(SS, HS, gS, tS, bS) {
        const XS = new kS;
        return this.Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS), XS
      }
      static Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS) {
        const xS = bS * bS;
        return XS._x = 6 * (xS - bS) * SS._x + (3 * xS - 4 * bS + 1) * HS._x + 6 * (-xS + bS) * gS._x + (3 * xS - 2 * bS) * tS._x, XS._y = 6 * (xS - bS) * SS._y + (3 * xS - 4 * bS + 1) * HS._y + 6 * (-xS + bS) * gS._y + (3 * xS - 2 * bS) * tS._y, XS._z = 6 * (xS - bS) * SS._z + (3 * xS - 4 * bS + 1) * HS._z + 6 * (-xS + bS) * gS._z + (3 * xS - 2 * bS) * tS._z, XS._isDirty = !0, XS
      }
      static Lerp(SS, HS, gS) {
        const tS = new kS(0, 0, 0);
        return kS.LerpToRef(SS, HS, gS, tS), tS
      }
      static LerpToRef(SS, HS, gS, tS) {
        return tS._x = SS._x + (HS._x - SS._x) * gS, tS._y = SS._y + (HS._y - SS._y) * gS, tS._z = SS._z + (HS._z - SS._z) * gS, tS._isDirty = !0, tS
      }
      static Dot(SS, HS) {
        return SS._x * HS._x + SS._y * HS._y + SS._z * HS._z
      }
      dot(SS) {
        return this._x * SS._x + this._y * SS._y + this._z * SS._z
      }
      static Cross(SS, HS) {
        const gS = new kS;
        return kS.CrossToRef(SS, HS, gS), gS
      }
      static CrossToRef(SS, HS, gS) {
        const tS = SS._y * HS._z - SS._z * HS._y,
          bS = SS._z * HS._x - SS._x * HS._z,
          XS = SS._x * HS._y - SS._y * HS._x;
        return gS.I5(tS, bS, XS), gS
      }
      static Normalize(SS) {
        const HS = kS.Zero();
        return kS.NormalizeToRef(SS, HS), HS
      }
      static NormalizeToRef(SS, HS) {
        return SS.normalizeToRef(HS), HS
      }
      static Project(SS, HS, gS, tS) {
        const bS = new kS;
        return kS.ProjectToRef(SS, HS, gS, tS, bS), bS
      }
      static ProjectToRef(SS, HS, gS, tS, bS) {
        const XS = tS.width,
          NS = tS.height,
          qS = tS.x,
          uS = tS.y,
          IS = GS.Matrix[1],
          fS = xS.d.LastCreatedEngine?.isNDCHalfZRange,
          aS = fS ? 1 : .5,
          KS = fS ? 0 : .5;
        jS.FromValuesToRef(XS / 2, 0, 0, 0, 0, -NS / 2, 0, 0, 0, 0, aS, 0, qS + XS / 2, NS / 2 + uS, KS, 1, IS);
        const CS = GS.Matrix[0];
        return HS.multiplyToRef(gS, CS), CS.multiplyToRef(IS, CS), kS.TransformCoordinatesToRef(SS, CS, bS), bS
      }
      static Reflect(SS, HS) {
        return this.ReflectToRef(SS, HS, new kS)
      }
      static ReflectToRef(SS, HS, gS) {
        const tS = CS.VK[0];
        return tS.dJ(HS).scaleInPlace(2 * kS.Dot(SS, HS)), gS.dJ(SS).GtS(tS)
      }
      static UnprojectFromTransform(SS, HS, gS, tS, bS) {
        return this.Unproject(SS, HS, gS, tS, bS, jS.IdentityReadOnly)
      }
      static Unproject(SS, HS, gS, tS, bS, XS) {
        const xS = new kS;
        return kS.UnprojectToRef(SS, HS, gS, tS, bS, XS, xS), xS
      }
      static UnprojectToRef(SS, HS, gS, tS, bS, XS, xS) {
        return kS.UnprojectFloatsToRef(SS._x, SS._y, SS._z, HS, gS, tS, bS, XS, xS), xS
      }
      static UnprojectFloatsToRef(SS, HS, gS, tS, bS, XS, NS, qS, uS) {
        const IS = GS.Matrix[0];
        XS.multiplyToRef(NS, IS), IS.multiplyToRef(qS, IS), IS.invert();
        const fS = GS.VK[0];
        return fS.x = SS / tS * 2 - 1, fS.y = -(HS / bS * 2 - 1), xS.d.LastCreatedEngine?.isNDCHalfZRange ? fS.z = gS : fS.z = 2 * gS - 1, kS.TransformCoordinatesToRef(fS, IS, uS), uS
      }
      static Minimize(SS, HS) {
        const gS = new kS;
        return gS.dJ(SS), gS.minimizeInPlace(HS), gS
      }
      static Maximize(SS, HS) {
        const gS = new kS;
        return gS.dJ(SS), gS.maximizeInPlace(HS), gS
      }
      static Distance(SS, HS) {
        return Math.sqrt(kS.DistanceSquared(SS, HS))
      }
      static DistanceSquared(SS, HS) {
        const gS = SS._x - HS._x,
          tS = SS._y - HS._y,
          bS = SS._z - HS._z;
        return gS * gS + tS * tS + bS * bS
      }
      static ProjectOnTriangleToRef(SS, HS, gS, bS, XS) {
        const xS = GS.VK[0],
          qS = GS.VK[1],
          uS = GS.VK[2],
          IS = GS.VK[3],
          fS = GS.VK[4];
        gS.subtractToRef(HS, xS), bS.subtractToRef(HS, qS), bS.subtractToRef(gS, uS);
        const aS = xS.length(),
          KS = qS.length(),
          jS = uS.length();
        if (aS < tS.d || KS < tS.d || jS < tS.d) return XS.dJ(HS), kS.Distance(SS, HS);
        SS.subtractToRef(HS, fS), kS.CrossToRef(xS, qS, IS);
        const CS = IS.length();
        if (CS < tS.d) return XS.dJ(HS), kS.Distance(SS, HS);
        IS.normalizeFromLength(CS);
        let nS = fS.length();
        if (nS < tS.d) return XS.dJ(HS), 0;
        fS.normalizeFromLength(nS);
        const PS = kS.Dot(IS, fS),
          QS = GS.VK[5],
          DS = GS.VK[6];
        QS.dJ(IS).scaleInPlace(-nS * PS), DS.dJ(SS).addInPlace(QS);
        const wS = GS.VK[4],
          hS = GS.VK[5],
          ZS = GS.VK[7],
          JS = GS.VK[8];
        wS.dJ(xS).scaleInPlace(1 / aS), JS.dJ(qS).scaleInPlace(1 / KS), wS.addInPlace(JS).scaleInPlace(-1), hS.dJ(xS).scaleInPlace(-1 / aS), JS.dJ(uS).scaleInPlace(1 / jS), hS.addInPlace(JS).scaleInPlace(-1), ZS.dJ(uS).scaleInPlace(-1 / jS), JS.dJ(qS).scaleInPlace(-1 / KS), ZS.addInPlace(JS).scaleInPlace(-1);
        const OS = GS.VK[9];
        let dS;
        OS.dJ(DS).GtS(HS), kS.CrossToRef(wS, OS, JS), dS = kS.Dot(JS, IS);
        const cS = dS;
        OS.dJ(DS).GtS(gS), kS.CrossToRef(hS, OS, JS), dS = kS.Dot(JS, IS);
        const vS = dS;
        OS.dJ(DS).GtS(bS), kS.CrossToRef(ZS, OS, JS), dS = kS.Dot(JS, IS);
        const ES = dS,
          LS = GS.VK[10];
        let YS, AS;
        cS > 0 && vS < 0 ? (LS.dJ(xS), YS = HS, AS = gS) : vS > 0 && ES < 0 ? (LS.dJ(uS), YS = gS, AS = bS) : (LS.dJ(qS).scaleInPlace(-1), YS = bS, AS = HS);
        const yS = GS.VK[9],
          VS = GS.VK[4];
        YS.subtractToRef(DS, JS), AS.subtractToRef(DS, yS), kS.CrossToRef(JS, yS, VS);
        if (!(kS.Dot(VS, IS) < 0)) return XS.dJ(DS), Math.abs(nS * PS);
        const iS = GS.VK[5];
        kS.CrossToRef(LS, VS, iS), iS.normalize();
        const WS = GS.VK[9];
        WS.dJ(YS).GtS(DS);
        const zS = WS.length();
        if (zS < tS.d) return XS.dJ(YS), kS.Distance(SS, YS);
        WS.normalizeFromLength(zS);
        const US = kS.Dot(iS, WS),
          pS = GS.VK[7];
        pS.dJ(DS).addInPlace(iS.scaleInPlace(zS * US)), JS.dJ(pS).GtS(YS), nS = LS.length(), LS.normalizeFromLength(nS);
        let sS = kS.Dot(JS, LS) / Math.max(nS, tS.d);
        return sS = (0, NS.Clamp)(sS, 0, 1), pS.dJ(YS).addInPlace(LS.scaleInPlace(sS * nS)), XS.dJ(pS), kS.Distance(SS, pS)
      }
      static Center(SS, HS) {
        return kS.CenterToRef(SS, HS, kS.Zero())
      }
      static CenterToRef(SS, HS, gS) {
        return gS.I5((SS._x + HS._x) / 2, (SS._y + HS._y) / 2, (SS._z + HS._z) / 2)
      }
      static RotationFromAxis(SS, HS, gS) {
        const tS = new kS;
        return kS.RotationFromAxisToRef(SS, HS, gS, tS), tS
      }
      static RotationFromAxisToRef(SS, HS, gS, tS) {
        const bS = GS.Quaternion[0];
        return KS.RotationQuaternionFromAxisToRef(SS, HS, gS, bS), bS.toEulerAnglesToRef(tS), tS
      }
    }
    kS._V8PerformanceHack = new kS(.5, .5, .5), kS._UpReadOnly = kS.Up(), kS._DownReadOnly = kS.Down(), kS._LeftHandedForwardReadOnly = kS.Forward(!1), kS._RightHandedForwardReadOnly = kS.Forward(!0), kS._LeftHandedBackwardReadOnly = kS.Backward(!1), kS._RightHandedBackwardReadOnly = kS.Backward(!0), kS._RightReadOnly = kS.Right(), kS._LeftReadOnly = kS.Left(), kS._ZeroReadOnly = kS.Zero(), kS._OneReadOnly = kS.One();
    class aS {
      get x() {
        return this._x
      }
      set x(SS) {
        this._x = SS, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(SS) {
        this._y = SS, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(SS) {
        this._z = SS, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(SS) {
        this._w = SS, this._isDirty = !0
      }
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = SS, this._y = HS, this._z = gS, this._w = tS
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let SS = IS(this._x);
        return SS = 397 * SS ^ IS(this._y), SS = 397 * SS ^ IS(this._z), SS = 397 * SS ^ IS(this._w), SS
      }
      lgS() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(SS, HS) {
        return void 0 === HS && (HS = 0), SS[HS] = this._x, SS[HS + 1] = this._y, SS[HS + 2] = this._z, SS[HS + 3] = this._w, this
      }
      UHS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return aS.FromArrayToRef(SS, HS, this), this
      }
      addInPlace(SS) {
        return this.x += SS._x, this.y += SS._y, this.z += SS._z, this.w += SS._w, this
      }
      addInPlaceFromFloats(SS, HS, gS, tS) {
        return this.x += SS, this.y += HS, this.z += gS, this.w += tS, this
      }
      add(SS) {
        return new aS(this._x + SS.x, this._y + SS.y, this._z + SS.z, this._w + SS.w)
      }
      addToRef(SS, HS) {
        return HS.x = this._x + SS.x, HS.y = this._y + SS.y, HS.z = this._z + SS.z, HS.w = this._w + SS.w, HS
      }
      GtS(SS) {
        return this.x -= SS.x, this.y -= SS.y, this.z -= SS.z, this.w -= SS.w, this
      }
      subtract(SS) {
        return new aS(this._x - SS.x, this._y - SS.y, this._z - SS.z, this._w - SS.w)
      }
      subtractToRef(SS, HS) {
        return HS.x = this._x - SS.x, HS.y = this._y - SS.y, HS.z = this._z - SS.z, HS.w = this._w - SS.w, HS
      }
      subtractFromFloats(SS, HS, gS, tS) {
        return new aS(this._x - SS, this._y - HS, this._z - gS, this._w - tS)
      }
      subtractFromFloatsToRef(SS, HS, gS, tS, bS) {
        return bS.x = this._x - SS, bS.y = this._y - HS, bS.z = this._z - gS, bS.w = this._w - tS, bS
      }
      gq() {
        return new aS(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(SS) {
        return SS.x = -this._x, SS.y = -this._y, SS.z = -this._z, SS.w = -this._w, SS
      }
      scaleInPlace(SS) {
        return this.x *= SS, this.y *= SS, this.z *= SS, this.w *= SS, this
      }
      scale(SS) {
        return new aS(this._x * SS, this._y * SS, this._z * SS, this._w * SS)
      }
      scaleToRef(SS, HS) {
        return HS.x = this._x * SS, HS.y = this._y * SS, HS.z = this._z * SS, HS.w = this._w * SS, HS
      }
      scaleAndAddToRef(SS, HS) {
        return HS.x += this._x * SS, HS.y += this._y * SS, HS.z += this._z * SS, HS.w += this._w * SS, HS
      }
      equals(SS) {
        return SS && this._x === SS.x && this._y === SS.y && this._z === SS.z && this._w === SS.w
      }
      equalsWithEpsilon(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.d;
        return SS && (0, NS.WithinEpsilon)(this._x, SS.x, HS) && (0, NS.WithinEpsilon)(this._y, SS.y, HS) && (0, NS.WithinEpsilon)(this._z, SS.z, HS) && (0, NS.WithinEpsilon)(this._w, SS.w, HS)
      }
      ZxS(SS, HS, gS, tS) {
        return this._x === SS && this._y === HS && this._z === gS && this._w === tS
      }
      multiplyInPlace(SS) {
        return this.x *= SS.x, this.y *= SS.y, this.z *= SS.z, this.w *= SS.w, this
      }
      multiply(SS) {
        return new aS(this._x * SS.x, this._y * SS.y, this._z * SS.z, this._w * SS.w)
      }
      multiplyToRef(SS, HS) {
        return HS.x = this._x * SS.x, HS.y = this._y * SS.y, HS.z = this._z * SS.z, HS.w = this._w * SS.w, HS
      }
      multiplyByFloats(SS, HS, gS, tS) {
        return new aS(this._x * SS, this._y * HS, this._z * gS, this._w * tS)
      }
      divide(SS) {
        return new aS(this._x / SS.x, this._y / SS.y, this._z / SS.z, this._w / SS.w)
      }
      divideToRef(SS, HS) {
        return HS.x = this._x / SS.x, HS.y = this._y / SS.y, HS.z = this._z / SS.z, HS.w = this._w / SS.w, HS
      }
      divideInPlace(SS) {
        return this.divideToRef(SS, this)
      }
      minimizeInPlace(SS) {
        return SS.x < this._x && (this.x = SS.x), SS.y < this._y && (this.y = SS.y), SS.z < this._z && (this.z = SS.z), SS.w < this._w && (this.w = SS.w), this
      }
      maximizeInPlace(SS) {
        return SS.x > this._x && (this.x = SS.x), SS.y > this._y && (this.y = SS.y), SS.z > this._z && (this.z = SS.z), SS.w > this._w && (this.w = SS.w), this
      }
      minimizeInPlaceFromFloats(SS, HS, gS, tS) {
        return this.x = Math.min(SS, this._x), this.y = Math.min(HS, this._y), this.z = Math.min(gS, this._z), this.w = Math.min(tS, this._w), this
      }
      maximizeInPlaceFromFloats(SS, HS, gS, tS) {
        return this.x = Math.max(SS, this._x), this.y = Math.max(HS, this._y), this.z = Math.max(gS, this._z), this.w = Math.max(tS, this._w), this
      }
      floorToRef(SS) {
        return SS.x = Math.floor(this._x), SS.y = Math.floor(this._y), SS.z = Math.floor(this._z), SS.w = Math.floor(this._w), SS
      }
      floor() {
        return new aS(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(SS) {
        return SS.x = this._x - Math.floor(this._x), SS.y = this._y - Math.floor(this._y), SS.z = this._z - Math.floor(this._z), SS.w = this._w - Math.floor(this._w), SS
      }
      fract() {
        return new aS(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(SS) {
        return 0 === SS || 1 === SS ? this : this.scaleInPlace(1 / SS)
      }
      normalizeToNew() {
        return this.normalizeToRef(new aS)
      }
      normalizeToRef(SS) {
        const HS = this.length();
        return 0 === HS || 1 === HS ? (SS.x = this._x, SS.y = this._y, SS.z = this._z, SS.w = this._w, SS) : this.scaleToRef(1 / HS, SS)
      }
      toVector3() {
        return new kS(this._x, this._y, this._z)
      }
      clone() {
        return new aS(this._x, this._y, this._z, this._w)
      }
      dJ(SS) {
        return this.x = SS.x, this.y = SS.y, this.z = SS.z, this.w = SS.w, this
      }
      I5(SS, HS, gS, tS) {
        return this.x = SS, this.y = HS, this.z = gS, this.w = tS, this
      }
      set(SS, HS, gS, tS) {
        return this.I5(SS, HS, gS, tS)
      }
      o_(SS) {
        return this.x = this.y = this.z = this.w = SS, this
      }
      dot(SS) {
        return this._x * SS.x + this._y * SS.y + this._z * SS.z + this._w * SS.w
      }
      static FromArray(SS, HS) {
        return HS || (HS = 0), new aS(SS[HS], SS[HS + 1], SS[HS + 2], SS[HS + 3])
      }
      static FromArrayToRef(SS, HS, gS) {
        return gS.x = SS[HS], gS.y = SS[HS + 1], gS.z = SS[HS + 2], gS.w = SS[HS + 3], gS
      }
      static FromFloatArrayToRef(SS, HS, gS) {
        return aS.FromArrayToRef(SS, HS, gS), gS
      }
      static FromFloatsToRef(SS, HS, gS, tS, bS) {
        return bS.x = SS, bS.y = HS, bS.z = gS, bS.w = tS, bS
      }
      static Zero() {
        return new aS(0, 0, 0, 0)
      }
      static One() {
        return new aS(1, 1, 1, 1)
      }
      static Random() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new aS((0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS))
      }
      static RandomToRef() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        return gS.x = (0, NS.RandomRange)(SS, HS), gS.y = (0, NS.RandomRange)(SS, HS), gS.z = (0, NS.RandomRange)(SS, HS), gS.w = (0, NS.RandomRange)(SS, HS), gS
      }
      static Clamp(SS, HS, gS) {
        return aS.ClampToRef(SS, HS, gS, new aS)
      }
      static ClampToRef(SS, HS, gS, tS) {
        return tS.x = (0, NS.Clamp)(SS.x, HS.x, gS.x), tS.y = (0, NS.Clamp)(SS.y, HS.y, gS.y), tS.z = (0, NS.Clamp)(SS.z, HS.z, gS.z), tS.w = (0, NS.Clamp)(SS.w, HS.w, gS.w), tS
      }
      static CheckExtends(SS, HS, gS) {
        HS.minimizeInPlace(SS), gS.maximizeInPlace(SS)
      }
      static get ZeroReadOnly() {
        return aS._ZeroReadOnly
      }
      static Normalize(SS) {
        return aS.NormalizeToRef(SS, new aS)
      }
      static NormalizeToRef(SS, HS) {
        return SS.normalizeToRef(HS), HS
      }
      static Minimize(SS, HS) {
        const gS = new aS;
        return gS.dJ(SS), gS.minimizeInPlace(HS), gS
      }
      static Maximize(SS, HS) {
        const gS = new aS;
        return gS.dJ(SS), gS.maximizeInPlace(HS), gS
      }
      static Distance(SS, HS) {
        return Math.sqrt(aS.DistanceSquared(SS, HS))
      }
      static DistanceSquared(SS, HS) {
        const gS = SS.x - HS.x,
          tS = SS.y - HS.y,
          bS = SS.z - HS.z,
          XS = SS.w - HS.w;
        return gS * gS + tS * tS + bS * bS + XS * XS
      }
      static Center(SS, HS) {
        return aS.CenterToRef(SS, HS, new aS)
      }
      static CenterToRef(SS, HS, gS) {
        return gS.x = (SS.x + HS.x) / 2, gS.y = (SS.y + HS.y) / 2, gS.z = (SS.z + HS.z) / 2, gS.w = (SS.w + HS.w) / 2, gS
      }
      static TransformCoordinates(SS, HS) {
        return aS.TransformCoordinatesToRef(SS, HS, new aS)
      }
      static TransformCoordinatesToRef(SS, HS, gS) {
        return aS.TransformCoordinatesFromFloatsToRef(SS._x, SS._y, SS._z, HS, gS), gS
      }
      static TransformCoordinatesFromFloatsToRef(SS, HS, gS, tS, bS) {
        const XS = tS.m,
          xS = SS * XS[0] + HS * XS[4] + gS * XS[8] + XS[12],
          NS = SS * XS[1] + HS * XS[5] + gS * XS[9] + XS[13],
          qS = SS * XS[2] + HS * XS[6] + gS * XS[10] + XS[14],
          uS = SS * XS[3] + HS * XS[7] + gS * XS[11] + XS[15];
        return bS.x = xS, bS.y = NS, bS.z = qS, bS.w = uS, bS
      }
      static TransformNormal(SS, HS) {
        return aS.TransformNormalToRef(SS, HS, new aS)
      }
      static TransformNormalToRef(SS, HS, gS) {
        const tS = HS.m,
          bS = SS.x * tS[0] + SS.y * tS[4] + SS.z * tS[8],
          XS = SS.x * tS[1] + SS.y * tS[5] + SS.z * tS[9],
          xS = SS.x * tS[2] + SS.y * tS[6] + SS.z * tS[10];
        return gS.x = bS, gS.y = XS, gS.z = xS, gS.w = SS.w, gS
      }
      static TransformNormalFromFloatsToRef(SS, HS, gS, tS, bS, XS) {
        const xS = bS.m;
        return XS.x = SS * xS[0] + HS * xS[4] + gS * xS[8], XS.y = SS * xS[1] + HS * xS[5] + gS * xS[9], XS.z = SS * xS[2] + HS * xS[6] + gS * xS[10], XS.w = tS, XS
      }
      static FromVector3(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new aS(SS._x, SS._y, SS._z, HS)
      }
      static Dot(SS, HS) {
        return SS.x * HS.x + SS.y * HS.y + SS.z * HS.z + SS.w * HS.w
      }
    }
    aS._V8PerformanceHack = new aS(.5, .5, .5, .5), aS._ZeroReadOnly = aS.Zero();
    class KS {
      get x() {
        return this._x
      }
      set x(SS) {
        this._x = SS, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(SS) {
        this._y = SS, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(SS) {
        this._z = SS, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(SS) {
        this._w = SS, this._isDirty = !0
      }
      constructor() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = SS, this._y = HS, this._z = gS, this._w = tS
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let SS = IS(this._x);
        return SS = 397 * SS ^ IS(this._y), SS = 397 * SS ^ IS(this._z), SS = 397 * SS ^ IS(this._w), SS
      }
      lgS() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return SS[HS] = this._x, SS[HS + 1] = this._y, SS[HS + 2] = this._z, SS[HS + 3] = this._w, this
      }
      UHS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return KS.FromArrayToRef(SS, HS, this)
      }
      equals(SS) {
        return SS && this._x === SS._x && this._y === SS._y && this._z === SS._z && this._w === SS._w
      }
      equalsWithEpsilon(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.d;
        return SS && (0, NS.WithinEpsilon)(this._x, SS._x, HS) && (0, NS.WithinEpsilon)(this._y, SS._y, HS) && (0, NS.WithinEpsilon)(this._z, SS._z, HS) && (0, NS.WithinEpsilon)(this._w, SS._w, HS)
      }
      isApprox(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tS.d;
        return SS && ((0, NS.WithinEpsilon)(this._x, SS._x, HS) && (0, NS.WithinEpsilon)(this._y, SS._y, HS) && (0, NS.WithinEpsilon)(this._z, SS._z, HS) && (0, NS.WithinEpsilon)(this._w, SS._w, HS) || (0, NS.WithinEpsilon)(this._x, -SS._x, HS) && (0, NS.WithinEpsilon)(this._y, -SS._y, HS) && (0, NS.WithinEpsilon)(this._z, -SS._z, HS) && (0, NS.WithinEpsilon)(this._w, -SS._w, HS))
      }
      clone() {
        return new KS(this._x, this._y, this._z, this._w)
      }
      dJ(SS) {
        return this._x = SS._x, this._y = SS._y, this._z = SS._z, this._w = SS._w, this._isDirty = !0, this
      }
      I5(SS, HS, gS, tS) {
        return this._x = SS, this._y = HS, this._z = gS, this._w = tS, this._isDirty = !0, this
      }
      set(SS, HS, gS, tS) {
        return this.I5(SS, HS, gS, tS)
      }
      o_(SS) {
        return this.I5(SS, SS, SS, SS)
      }
      add(SS) {
        return new KS(this._x + SS._x, this._y + SS._y, this._z + SS._z, this._w + SS._w)
      }
      addInPlace(SS) {
        return this._x += SS._x, this._y += SS._y, this._z += SS._z, this._w += SS._w, this._isDirty = !0, this
      }
      addToRef(SS, HS) {
        return HS._x = this._x + SS._x, HS._y = this._y + SS._y, HS._z = this._z + SS._z, HS._w = this._w + SS._w, HS._isDirty = !0, HS
      }
      addInPlaceFromFloats(SS, HS, gS, tS) {
        return this._x += SS, this._y += HS, this._z += gS, this._w += tS, this._isDirty = !0, this
      }
      subtractToRef(SS, HS) {
        return HS._x = this._x - SS._x, HS._y = this._y - SS._y, HS._z = this._z - SS._z, HS._w = this._w - SS._w, HS._isDirty = !0, HS
      }
      subtractFromFloats(SS, HS, gS, tS) {
        return this.subtractFromFloatsToRef(SS, HS, gS, tS, new KS)
      }
      subtractFromFloatsToRef(SS, HS, gS, tS, bS) {
        return bS._x = this._x - SS, bS._y = this._y - HS, bS._z = this._z - gS, bS._w = this._w - tS, bS._isDirty = !0, bS
      }
      subtract(SS) {
        return new KS(this._x - SS._x, this._y - SS._y, this._z - SS._z, this._w - SS._w)
      }
      GtS(SS) {
        return this._x -= SS._x, this._y -= SS._y, this._z -= SS._z, this._w -= SS._w, this._isDirty = !0, this
      }
      scale(SS) {
        return new KS(this._x * SS, this._y * SS, this._z * SS, this._w * SS)
      }
      scaleToRef(SS, HS) {
        return HS._x = this._x * SS, HS._y = this._y * SS, HS._z = this._z * SS, HS._w = this._w * SS, HS._isDirty = !0, HS
      }
      scaleInPlace(SS) {
        return this._x *= SS, this._y *= SS, this._z *= SS, this._w *= SS, this._isDirty = !0, this
      }
      scaleAndAddToRef(SS, HS) {
        return HS._x += this._x * SS, HS._y += this._y * SS, HS._z += this._z * SS, HS._w += this._w * SS, HS._isDirty = !0, HS
      }
      multiply(SS) {
        const HS = new KS(0, 0, 0, 1);
        return this.multiplyToRef(SS, HS), HS
      }
      multiplyToRef(SS, HS) {
        const gS = this._x * SS._w + this._y * SS._z - this._z * SS._y + this._w * SS._x,
          tS = -this._x * SS._z + this._y * SS._w + this._z * SS._x + this._w * SS._y,
          bS = this._x * SS._y - this._y * SS._x + this._z * SS._w + this._w * SS._z,
          XS = -this._x * SS._x - this._y * SS._y - this._z * SS._z + this._w * SS._w;
        return HS.I5(gS, tS, bS, XS), HS
      }
      multiplyInPlace(SS) {
        return this.multiplyToRef(SS, this)
      }
      multiplyByFloats(SS, HS, gS, tS) {
        return this._x *= SS, this._y *= HS, this._z *= gS, this._w *= tS, this._isDirty = !0, this
      }
      divide(SS) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(SS, HS) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(SS) {
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
      gq() {
        return this.negateToRef(new KS)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(SS) {
        return SS._x = -this._x, SS._y = -this._y, SS._z = -this._z, SS._w = -this._w, SS._isDirty = !0, SS
      }
      ZxS(SS, HS, gS, tS) {
        return this._x === SS && this._y === HS && this._z === gS && this._w === tS
      }
      floorToRef(SS) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(SS) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(SS) {
        return SS.I5(-this._x, -this._y, -this._z, this._w), SS
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new KS(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const SS = this.conjugate(),
          HS = this.lengthSquared();
        return 0 == HS || 1 == HS || SS.scaleInPlace(1 / HS), SS
      }
      invertInPlace() {
        this.conjugateInPlace();
        const SS = this.lengthSquared();
        return 0 == SS || 1 == SS || this.scaleInPlace(1 / SS), this
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
      normalizeFromLength(SS) {
        return 0 === SS || 1 === SS ? this : this.scaleInPlace(1 / SS)
      }
      normalizeToNew() {
        const SS = new KS(0, 0, 0, 1);
        return this.normalizeToRef(SS), SS
      }
      normalizeToRef(SS) {
        const HS = this.length();
        return 0 === HS || 1 === HS ? SS.I5(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / HS, SS)
      }
      toEulerAngles() {
        const SS = kS.Zero();
        return this.toEulerAnglesToRef(SS), SS
      }
      toEulerAnglesToRef(SS) {
        const HS = this._z,
          gS = this._x,
          tS = this._y,
          bS = this._w,
          XS = tS * HS - gS * bS,
          xS = .4999999;
        if (XS < -xS) SS._y = 2 * Math.atan2(tS, bS), SS._x = Math.PI / 2, SS._z = 0, SS._isDirty = !0;
        else if (XS > xS) SS._y = 2 * Math.atan2(tS, bS), SS._x = -Math.PI / 2, SS._z = 0, SS._isDirty = !0;
        else {
          const xS = bS * bS,
            NS = HS * HS,
            qS = gS * gS,
            uS = tS * tS;
          SS._z = Math.atan2(2 * (gS * tS + HS * bS), -NS - qS + uS + xS), SS._x = Math.asin(-2 * XS), SS._y = Math.atan2(2 * (HS * gS + tS * bS), NS - qS - uS + xS), SS._isDirty = !0
        }
        return SS
      }
      toAlphaBetaGammaToRef(SS) {
        const HS = this._z,
          gS = this._x,
          tS = this._y,
          bS = this._w,
          XS = Math.sqrt(gS * gS + tS * tS),
          xS = Math.sqrt(HS * HS + bS * bS),
          NS = 2 * Math.atan2(XS, xS),
          qS = 2 * Math.atan2(HS, bS),
          uS = 2 * Math.atan2(tS, gS),
          IS = (qS + uS) / 2,
          fS = (qS - uS) / 2;
        return SS.set(fS, NS, IS), SS
      }
      toRotationMatrix(SS) {
        return jS.FromQuaternionToRef(this, SS), SS
      }
      fromRotationMatrix(SS) {
        return KS.FromRotationMatrixToRef(SS, this), this
      }
      dot(SS) {
        return this._x * SS._x + this._y * SS._y + this._z * SS._z + this._w * SS._w
      }
      toAxisAngle() {
        const SS = kS.Zero();
        return {
          axis: SS,
          angle: this.toAxisAngleToRef(SS)
        }
      }
      toAxisAngleToRef(SS) {
        let HS;
        const gS = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          tS = this._w;
        return gS > 0 ? (HS = 2 * Math.atan2(gS, tS), SS.set(this._x / gS, this._y / gS, this._z / gS)) : (HS = 0, SS.set(1, 0, 0)), HS
      }
      static FromRotationMatrix(SS) {
        const HS = new KS;
        return KS.FromRotationMatrixToRef(SS, HS), HS
      }
      static FromRotationMatrixToRef(SS, HS) {
        const gS = SS.m,
          tS = gS[0],
          bS = gS[4],
          XS = gS[8],
          xS = gS[1],
          NS = gS[5],
          qS = gS[9],
          uS = gS[2],
          IS = gS[6],
          fS = gS[10],
          kS = tS + NS + fS;
        let aS;
        return kS > 0 ? (aS = .5 / Math.sqrt(kS + 1), HS._w = .25 / aS, HS._x = (IS - qS) * aS, HS._y = (XS - uS) * aS, HS._z = (xS - bS) * aS, HS._isDirty = !0) : tS > NS && tS > fS ? (aS = 2 * Math.sqrt(1 + tS - NS - fS), HS._w = (IS - qS) / aS, HS._x = .25 * aS, HS._y = (bS + xS) / aS, HS._z = (XS + uS) / aS, HS._isDirty = !0) : NS > fS ? (aS = 2 * Math.sqrt(1 + NS - tS - fS), HS._w = (XS - uS) / aS, HS._x = (bS + xS) / aS, HS._y = .25 * aS, HS._z = (qS + IS) / aS, HS._isDirty = !0) : (aS = 2 * Math.sqrt(1 + fS - tS - NS), HS._w = (xS - bS) / aS, HS._x = (XS + uS) / aS, HS._y = (qS + IS) / aS, HS._z = .25 * aS, HS._isDirty = !0), HS
      }
      static Dot(SS, HS) {
        return SS._x * HS._x + SS._y * HS._y + SS._z * HS._z + SS._w * HS._w
      }
      static AreClose(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const tS = KS.Dot(SS, HS);
        return 1 - tS * tS <= gS
      }
      static SmoothToRef(SS, HS, gS, tS, bS) {
        let XS = 0 === tS ? 1 : gS / tS;
        return XS = (0, NS.Clamp)(XS, 0, 1), KS.SlerpToRef(SS, HS, XS, bS), bS
      }
      static Zero() {
        return new KS(0, 0, 0, 0)
      }
      static Inverse(SS) {
        return new KS(-SS._x, -SS._y, -SS._z, SS._w)
      }
      static InverseToRef(SS, HS) {
        return HS.set(-SS._x, -SS._y, -SS._z, SS._w), HS
      }
      static Identity() {
        return new KS(0, 0, 0, 1)
      }
      static IsIdentity(SS) {
        return SS && 0 === SS._x && 0 === SS._y && 0 === SS._z && 1 === SS._w
      }
      static RotationAxis(SS, HS) {
        return KS.RotationAxisToRef(SS, HS, new KS)
      }
      static RotationAxisToRef(SS, HS, gS) {
        gS._w = Math.cos(HS / 2);
        const tS = Math.sin(HS / 2) / SS.length();
        return gS._x = SS._x * tS, gS._y = SS._y * tS, gS._z = SS._z * tS, gS._isDirty = !0, gS
      }
      static FromArray(SS, HS) {
        return HS || (HS = 0), new KS(SS[HS], SS[HS + 1], SS[HS + 2], SS[HS + 3])
      }
      static FromArrayToRef(SS, HS, gS) {
        return gS._x = SS[HS], gS._y = SS[HS + 1], gS._z = SS[HS + 2], gS._w = SS[HS + 3], gS._isDirty = !0, gS
      }
      static FromFloatsToRef(SS, HS, gS, tS, bS) {
        return bS.I5(SS, HS, gS, tS), bS
      }
      static FromEulerAngles(SS, HS, gS) {
        const tS = new KS;
        return KS.RotationYawPitchRollToRef(HS, SS, gS, tS), tS
      }
      static FromEulerAnglesToRef(SS, HS, gS, tS) {
        return KS.RotationYawPitchRollToRef(HS, SS, gS, tS), tS
      }
      static FromEulerVector(SS) {
        const HS = new KS;
        return KS.RotationYawPitchRollToRef(SS._y, SS._x, SS._z, HS), HS
      }
      static FromEulerVectorToRef(SS, HS) {
        return KS.RotationYawPitchRollToRef(SS._y, SS._x, SS._z, HS), HS
      }
      static FromUnitVectorsToRef(SS, HS, gS) {
        let bS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : tS.d;
        const XS = kS.Dot(SS, HS) + 1;
        return XS < bS ? Math.abs(SS.x) > Math.abs(SS.z) ? gS.set(-SS.y, SS.x, 0, 0) : gS.set(0, -SS.z, SS.y, 0) : (kS.CrossToRef(SS, HS, CS.VK[0]), gS.set(CS.VK[0].x, CS.VK[0].y, CS.VK[0].z, XS)), gS.normalize()
      }
      static RotationYawPitchRoll(SS, HS, gS) {
        const tS = new KS;
        return KS.RotationYawPitchRollToRef(SS, HS, gS, tS), tS
      }
      static RotationYawPitchRollToRef(SS, HS, gS, tS) {
        const bS = .5 * gS,
          XS = .5 * HS,
          xS = .5 * SS,
          NS = Math.sin(bS),
          qS = Math.cos(bS),
          uS = Math.sin(XS),
          IS = Math.cos(XS),
          fS = Math.sin(xS),
          kS = Math.cos(xS);
        return tS._x = kS * uS * qS + fS * IS * NS, tS._y = fS * IS * qS - kS * uS * NS, tS._z = kS * IS * NS - fS * uS * qS, tS._w = kS * IS * qS + fS * uS * NS, tS._isDirty = !0, tS
      }
      static RotationAlphaBetaGamma(SS, HS, gS) {
        const tS = new KS;
        return KS.RotationAlphaBetaGammaToRef(SS, HS, gS, tS), tS
      }
      static RotationAlphaBetaGammaToRef(SS, HS, gS, tS) {
        const bS = .5 * (gS + SS),
          XS = .5 * (gS - SS),
          xS = .5 * HS;
        return tS._x = Math.cos(XS) * Math.sin(xS), tS._y = Math.sin(XS) * Math.sin(xS), tS._z = Math.sin(bS) * Math.cos(xS), tS._w = Math.cos(bS) * Math.cos(xS), tS._isDirty = !0, tS
      }
      static RotationQuaternionFromAxis(SS, HS, gS) {
        const tS = new KS(0, 0, 0, 0);
        return KS.RotationQuaternionFromAxisToRef(SS, HS, gS, tS), tS
      }
      static RotationQuaternionFromAxisToRef(SS, HS, gS, tS) {
        const bS = GS.Matrix[0];
        return SS = SS.normalizeToRef(GS.VK[0]), HS = HS.normalizeToRef(GS.VK[1]), gS = gS.normalizeToRef(GS.VK[2]), jS.FromXYZAxesToRef(SS, HS, gS, bS), KS.FromRotationMatrixToRef(bS, tS), tS
      }
      static FromLookDirectionLH(SS, HS) {
        const gS = new KS;
        return KS.FromLookDirectionLHToRef(SS, HS, gS), gS
      }
      static FromLookDirectionLHToRef(SS, HS, gS) {
        const tS = GS.Matrix[0];
        return jS.LookDirectionLHToRef(SS, HS, tS), KS.FromRotationMatrixToRef(tS, gS), gS
      }
      static FromLookDirectionRH(SS, HS) {
        const gS = new KS;
        return KS.FromLookDirectionRHToRef(SS, HS, gS), gS
      }
      static FromLookDirectionRHToRef(SS, HS, gS) {
        const tS = GS.Matrix[0];
        return jS.LookDirectionRHToRef(SS, HS, tS), KS.FromRotationMatrixToRef(tS, gS)
      }
      static Slerp(SS, HS, gS) {
        const tS = KS.Identity();
        return KS.SlerpToRef(SS, HS, gS, tS), tS
      }
      static SlerpToRef(SS, HS, gS, tS) {
        let bS, XS, xS = SS._x * HS._x + SS._y * HS._y + SS._z * HS._z + SS._w * HS._w,
          NS = !1;
        if (xS < 0 && (NS = !0, xS = -xS), xS > .999999) XS = 1 - gS, bS = NS ? -gS : gS;
        else {
          const SS = Math.acos(xS),
            HS = 1 / Math.sin(SS);
          XS = Math.sin((1 - gS) * SS) * HS, bS = NS ? -Math.sin(gS * SS) * HS : Math.sin(gS * SS) * HS
        }
        return tS._x = XS * SS._x + bS * HS._x, tS._y = XS * SS._y + bS * HS._y, tS._z = XS * SS._z + bS * HS._z, tS._w = XS * SS._w + bS * HS._w, tS._isDirty = !0, tS
      }
      static Hermite(SS, HS, gS, tS, bS) {
        const XS = bS * bS,
          xS = bS * XS,
          NS = 2 * xS - 3 * XS + 1,
          qS = -2 * xS + 3 * XS,
          uS = xS - 2 * XS + bS,
          IS = xS - XS,
          fS = SS._x * NS + gS._x * qS + HS._x * uS + tS._x * IS,
          kS = SS._y * NS + gS._y * qS + HS._y * uS + tS._y * IS,
          aS = SS._z * NS + gS._z * qS + HS._z * uS + tS._z * IS,
          jS = SS._w * NS + gS._w * qS + HS._w * uS + tS._w * IS;
        return new KS(fS, kS, aS, jS)
      }
      static Hermite1stDerivative(SS, HS, gS, tS, bS) {
        const XS = new KS;
        return this.Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS), XS
      }
      static Hermite1stDerivativeToRef(SS, HS, gS, tS, bS, XS) {
        const xS = bS * bS;
        return XS._x = 6 * (xS - bS) * SS._x + (3 * xS - 4 * bS + 1) * HS._x + 6 * (-xS + bS) * gS._x + (3 * xS - 2 * bS) * tS._x, XS._y = 6 * (xS - bS) * SS._y + (3 * xS - 4 * bS + 1) * HS._y + 6 * (-xS + bS) * gS._y + (3 * xS - 2 * bS) * tS._y, XS._z = 6 * (xS - bS) * SS._z + (3 * xS - 4 * bS + 1) * HS._z + 6 * (-xS + bS) * gS._z + (3 * xS - 2 * bS) * tS._z, XS._w = 6 * (xS - bS) * SS._w + (3 * xS - 4 * bS + 1) * HS._w + 6 * (-xS + bS) * gS._w + (3 * xS - 2 * bS) * tS._w, XS._isDirty = !0, XS
      }
      static Normalize(SS) {
        const HS = KS.Zero();
        return KS.NormalizeToRef(SS, HS), HS
      }
      static NormalizeToRef(SS, HS) {
        return SS.normalizeToRef(HS), HS
      }
      static Clamp(SS, HS, gS) {
        const tS = new KS;
        return KS.ClampToRef(SS, HS, gS, tS), tS
      }
      static ClampToRef(SS, HS, gS, tS) {
        return tS.I5((0, NS.Clamp)(SS.x, HS.x, gS.x), (0, NS.Clamp)(SS.y, HS.y, gS.y), (0, NS.Clamp)(SS.z, HS.z, gS.z), (0, NS.Clamp)(SS.w, HS.w, gS.w))
      }
      static Random() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new KS((0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS))
      }
      static RandomToRef() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS), (0, NS.RandomRange)(SS, HS))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(SS, HS) {
        return Math.sqrt(KS.DistanceSquared(SS, HS))
      }
      static DistanceSquared(SS, HS) {
        const gS = SS.x - HS.x,
          tS = SS.y - HS.y,
          bS = SS.z - HS.z,
          XS = SS.w - HS.w;
        return gS * gS + tS * tS + bS * bS + XS * XS
      }
      static Center(SS, HS) {
        return KS.CenterToRef(SS, HS, KS.Zero())
      }
      static CenterToRef(SS, HS, gS) {
        return gS.I5((SS.x + HS.x) / 2, (SS.y + HS.y) / 2, (SS.z + HS.z) / 2, (SS.w + HS.w) / 2)
      }
    }
    KS._V8PerformanceHack = new KS(.5, .5, .5, .5);
    class jS {
      static get Use64Bits() {
        return XS.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = qS.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          tS = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = SS, this._isIdentity3x2 = SS || gS, this._isIdentityDirty = !this._isIdentity && HS, this._isIdentity3x2Dirty = !this._isIdentity3x2 && tS
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, XS.d.MatrixTrackPrecisionChange && XS.d.MatrixTrackedMatrices.push(this), this._m = new XS.d.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const SS = this._m;
          this._isIdentity = 1 === SS[0] && 0 === SS[1] && 0 === SS[2] && 0 === SS[3] && 0 === SS[4] && 1 === SS[5] && 0 === SS[6] && 0 === SS[7] && 0 === SS[8] && 0 === SS[9] && 1 === SS[10] && 0 === SS[11] && 0 === SS[12] && 0 === SS[13] && 0 === SS[14] && 1 === SS[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const SS = this._m,
          HS = SS[0],
          gS = SS[1],
          tS = SS[2],
          bS = SS[3],
          XS = SS[4],
          xS = SS[5],
          NS = SS[6],
          qS = SS[7],
          uS = SS[8],
          IS = SS[9],
          fS = SS[10],
          kS = SS[11],
          aS = SS[12],
          KS = SS[13],
          jS = SS[14],
          GS = SS[15],
          CS = fS * GS - jS * kS,
          nS = IS * GS - KS * kS,
          PS = IS * jS - KS * fS,
          QS = uS * GS - aS * kS,
          DS = uS * jS - fS * aS,
          wS = uS * KS - aS * IS;
        return HS * +(xS * CS - NS * nS + qS * PS) + gS * -(XS * CS - NS * QS + qS * DS) + tS * +(XS * nS - xS * QS + qS * wS) + bS * -(XS * PS - xS * DS + NS * wS)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!SS) return this._m;
        const gS = this._m;
        for (let tS = 0; tS < 16; tS++) SS[HS + tS] = gS[tS];
        return this
      }
      lgS() {
        return this._m
      }
      UHS(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return jS.FromArrayToRef(SS, HS, this)
      }
      I5() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        return jS.FromArrayToRef(HS, 0, this)
      }
      set() {
        const SS = this._m;
        for (let HS = 0; HS < 16; HS++) SS[HS] = HS < 0 || arguments.length <= HS ? void 0 : arguments[HS];
        return this.markAsUpdated(), this
      }
      o_(SS) {
        const HS = this._m;
        for (let gS = 0; gS < 16; gS++) HS[gS] = SS;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return jS.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(SS) {
        const HS = new jS;
        return this.addToRef(SS, HS), HS
      }
      addToRef(SS, HS) {
        const gS = this._m,
          tS = HS._m,
          bS = SS.m;
        for (let XS = 0; XS < 16; XS++) tS[XS] = gS[XS] + bS[XS];
        return HS.markAsUpdated(), HS
      }
      addToSelf(SS) {
        const HS = this._m,
          gS = SS.m;
        return HS[0] += gS[0], HS[1] += gS[1], HS[2] += gS[2], HS[3] += gS[3], HS[4] += gS[4], HS[5] += gS[5], HS[6] += gS[6], HS[7] += gS[7], HS[8] += gS[8], HS[9] += gS[9], HS[10] += gS[10], HS[11] += gS[11], HS[12] += gS[12], HS[13] += gS[13], HS[14] += gS[14], HS[15] += gS[15], this.markAsUpdated(), this
      }
      addInPlace(SS) {
        const HS = this._m,
          gS = SS.m;
        for (let tS = 0; tS < 16; tS++) HS[tS] += gS[tS];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const SS = this._m;
        for (let HS = 0; HS < 16; HS++) SS[HS] += HS < 0 || arguments.length <= HS ? void 0 : arguments[HS];
        return this.markAsUpdated(), this
      }
      subtract(SS) {
        const HS = this._m,
          gS = SS.m;
        for (let tS = 0; tS < 16; tS++) HS[tS] -= gS[tS];
        return this.markAsUpdated(), this
      }
      subtractToRef(SS, HS) {
        const gS = this._m,
          tS = SS.m,
          bS = HS._m;
        for (let XS = 0; XS < 16; XS++) bS[XS] = gS[XS] - tS[XS];
        return HS.markAsUpdated(), HS
      }
      GtS(SS) {
        const HS = this._m,
          gS = SS.m;
        for (let tS = 0; tS < 16; tS++) HS[tS] -= gS[tS];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        return this.subtractFromFloatsToRef(...HS, new jS)
      }
      subtractFromFloatsToRef() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        const tS = HS.pop(),
          bS = this._m,
          XS = tS._m,
          xS = HS;
        for (let NS = 0; NS < 16; NS++) XS[NS] = bS[NS] - xS[NS];
        return tS.markAsUpdated(), tS
      }
      invertToRef(SS) {
        return !0 === this._isIdentity ? (jS.IdentityToRef(SS), SS) : ((0, qS.f)(this, SS.lgS()) ? SS.markAsUpdated() : SS.dJ(this), SS)
      }
      addAtIndex(SS, HS) {
        return this._m[SS] += HS, this.markAsUpdated(), this
      }
      multiplyAtIndex(SS, HS) {
        return this._m[SS] *= HS, this.markAsUpdated(), this
      }
      setTranslationFromFloats(SS, HS, gS) {
        return this._m[12] = SS, this._m[13] = HS, this._m[14] = gS, this.markAsUpdated(), this
      }
      addTranslationFromFloats(SS, HS, gS) {
        return this._m[12] += SS, this._m[13] += HS, this._m[14] += gS, this.markAsUpdated(), this
      }
      setTranslation(SS) {
        return this.setTranslationFromFloats(SS._x, SS._y, SS._z)
      }
      getTranslation() {
        return new kS(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(SS) {
        return SS.x = this._m[12], SS.y = this._m[13], SS.z = this._m[14], SS
      }
      removeRotationAndScaling() {
        const SS = this.m;
        return jS.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, SS[12], SS[13], SS[14], SS[15], this), this._updateIdentityStatus(0 === SS[12] && 0 === SS[13] && 0 === SS[14] && 1 === SS[15]), this
      }
      dJ(SS) {
        SS.copyToArray(this._m);
        const HS = SS;
        return this.updateFlag = HS.updateFlag, this._updateIdentityStatus(HS._isIdentity, HS._isIdentityDirty, HS._isIdentity3x2, HS._isIdentity3x2Dirty), this
      }
      copyToArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, qS.d)(this, SS, HS), this
      }
      multiply(SS) {
        const HS = new jS;
        return this.multiplyToRef(SS, HS), HS
      }
      multiplyInPlace(SS) {
        const HS = this._m,
          gS = SS.m;
        for (let tS = 0; tS < 16; tS++) HS[tS] *= gS[tS];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const SS = this._m;
        for (let HS = 0; HS < 16; HS++) SS[HS] *= HS < 0 || arguments.length <= HS ? void 0 : arguments[HS];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        const tS = HS.pop(),
          bS = this._m,
          XS = tS._m,
          xS = HS;
        for (let NS = 0; NS < 16; NS++) XS[NS] = bS[NS] * xS[NS];
        return tS.markAsUpdated(), tS
      }
      multiplyToRef(SS, HS) {
        return this._isIdentity ? (HS.dJ(SS), HS) : SS._isIdentity ? (HS.dJ(this), HS) : (this.multiplyToArray(SS, HS._m, 0), HS.markAsUpdated(), HS)
      }
      multiplyToArray(SS, HS, gS) {
        return (0, qS.j)(this, SS, HS, gS), this
      }
      divide(SS) {
        return this.divideToRef(SS, new jS)
      }
      divideToRef(SS, HS) {
        const gS = this._m,
          tS = SS.m,
          bS = HS._m;
        for (let XS = 0; XS < 16; XS++) bS[XS] = gS[XS] / tS[XS];
        return HS.markAsUpdated(), HS
      }
      divideInPlace(SS) {
        const HS = this._m,
          gS = SS.m;
        for (let tS = 0; tS < 16; tS++) HS[tS] /= gS[tS];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(SS) {
        const HS = this._m,
          gS = SS.m;
        for (let tS = 0; tS < 16; tS++) HS[tS] = Math.min(HS[tS], gS[tS]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const SS = this._m;
        for (let HS = 0; HS < 16; HS++) SS[HS] = Math.min(SS[HS], HS < 0 || arguments.length <= HS ? void 0 : arguments[HS]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(SS) {
        const HS = this._m,
          gS = SS.m;
        for (let tS = 0; tS < 16; tS++) HS[tS] = Math.max(HS[tS], gS[tS]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const SS = this._m;
        for (let HS = 0; HS < 16; HS++) SS[HS] = Math.max(SS[HS], HS < 0 || arguments.length <= HS ? void 0 : arguments[HS]);
        return this.markAsUpdated(), this
      }
      gq() {
        return this.negateToRef(new jS)
      }
      negateInPlace() {
        const SS = this._m;
        for (let HS = 0; HS < 16; HS++) SS[HS] = -SS[HS];
        return this.markAsUpdated(), this
      }
      negateToRef(SS) {
        const HS = this._m,
          gS = SS._m;
        for (let tS = 0; tS < 16; tS++) gS[tS] = -HS[tS];
        return SS.markAsUpdated(), SS
      }
      equals(SS) {
        const HS = SS;
        if (!HS) return !1;
        if ((this._isIdentity || HS._isIdentity) && !this._isIdentityDirty && !HS._isIdentityDirty) return this._isIdentity && HS._isIdentity;
        const gS = this.m,
          tS = HS.m;
        return gS[0] === tS[0] && gS[1] === tS[1] && gS[2] === tS[2] && gS[3] === tS[3] && gS[4] === tS[4] && gS[5] === tS[5] && gS[6] === tS[6] && gS[7] === tS[7] && gS[8] === tS[8] && gS[9] === tS[9] && gS[10] === tS[10] && gS[11] === tS[11] && gS[12] === tS[12] && gS[13] === tS[13] && gS[14] === tS[14] && gS[15] === tS[15]
      }
      equalsWithEpsilon(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = this._m,
          tS = SS.m;
        for (let bS = 0; bS < 16; bS++)
          if (!(0, NS.WithinEpsilon)(gS[bS], tS[bS], HS)) return !1;
        return !0
      }
      ZxS() {
        const SS = this._m;
        for (let HS = 0; HS < 16; HS++)
          if (SS[HS] != (HS < 0 || arguments.length <= HS ? void 0 : arguments[HS])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new jS)
      }
      floorToRef(SS) {
        const HS = this._m,
          gS = SS._m;
        for (let tS = 0; tS < 16; tS++) gS[tS] = Math.floor(HS[tS]);
        return SS.markAsUpdated(), SS
      }
      fract() {
        return this.fractToRef(new jS)
      }
      fractToRef(SS) {
        const HS = this._m,
          gS = SS._m;
        for (let tS = 0; tS < 16; tS++) gS[tS] = HS[tS] - Math.floor(HS[tS]);
        return SS.markAsUpdated(), SS
      }
      clone() {
        const SS = new jS;
        return SS.dJ(this), SS
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let SS = IS(this._m[0]);
        for (let HS = 1; HS < 16; HS++) SS = 397 * SS ^ IS(this._m[HS]);
        return SS
      }
      decomposeToTransformNode(SS) {
        return SS.rotationQuaternion = SS.rotationQuaternion || new KS, this.decompose(SS.nf, SS.rotationQuaternion, SS.position)
      }
      decompose(SS, HS, gS, tS) {
        let bS = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return gS && gS.o_(0), SS && SS.o_(1), HS && HS.I5(0, 0, 0, 1), !0;
        const XS = this._m;
        if (gS && gS.I5(XS[12], XS[13], XS[14]), (SS = SS || GS.VK[0]).x = Math.sqrt(XS[0] * XS[0] + XS[1] * XS[1] + XS[2] * XS[2]), SS.y = Math.sqrt(XS[4] * XS[4] + XS[5] * XS[5] + XS[6] * XS[6]), SS.z = Math.sqrt(XS[8] * XS[8] + XS[9] * XS[9] + XS[10] * XS[10]), tS) {
          const HS = (bS ? tS.absoluteScaling.x : tS.nf.x) < 0 ? -1 : 1,
            gS = (bS ? tS.absoluteScaling.y : tS.nf.y) < 0 ? -1 : 1,
            XS = (bS ? tS.absoluteScaling.z : tS.nf.z) < 0 ? -1 : 1;
          SS.x *= HS, SS.y *= gS, SS.z *= XS
        } else this.determinant() <= 0 && (SS.y *= -1);
        if (0 === SS._x || 0 === SS._y || 0 === SS._z) return HS && HS.I5(0, 0, 0, 1), !1;
        if (HS) {
          const gS = 1 / SS._x,
            tS = 1 / SS._y,
            bS = 1 / SS._z;
          jS.FromValuesToRef(XS[0] * gS, XS[1] * gS, XS[2] * gS, 0, XS[4] * tS, XS[5] * tS, XS[6] * tS, 0, XS[8] * bS, XS[9] * bS, XS[10] * bS, 0, 0, 0, 0, 1, GS.Matrix[0]), KS.FromRotationMatrixToRef(GS.Matrix[0], HS)
        }
        return !0
      }
      getRow(SS) {
        if (SS < 0 || SS > 3) return null;
        const HS = 4 * SS;
        return new aS(this._m[HS + 0], this._m[HS + 1], this._m[HS + 2], this._m[HS + 3])
      }
      getRowToRef(SS, HS) {
        if (SS >= 0 && SS <= 3) {
          const gS = 4 * SS;
          HS.x = this._m[gS + 0], HS.y = this._m[gS + 1], HS.z = this._m[gS + 2], HS.w = this._m[gS + 3]
        }
        return HS
      }
      setRow(SS, HS) {
        return this.setRowFromFloats(SS, HS.x, HS.y, HS.z, HS.w)
      }
      transpose() {
        const SS = new jS;
        return jS.TransposeToRef(this, SS), SS
      }
      transposeToRef(SS) {
        return jS.TransposeToRef(this, SS), SS
      }
      setRowFromFloats(SS, HS, gS, tS, bS) {
        if (SS < 0 || SS > 3) return this;
        const XS = 4 * SS;
        return this._m[XS + 0] = HS, this._m[XS + 1] = gS, this._m[XS + 2] = tS, this._m[XS + 3] = bS, this.markAsUpdated(), this
      }
      scale(SS) {
        const HS = new jS;
        return this.scaleToRef(SS, HS), HS
      }
      scaleToRef(SS, HS) {
        for (let gS = 0; gS < 16; gS++) HS._m[gS] = this._m[gS] * SS;
        return HS.markAsUpdated(), HS
      }
      scaleAndAddToRef(SS, HS) {
        for (let gS = 0; gS < 16; gS++) HS._m[gS] += this._m[gS] * SS;
        return HS.markAsUpdated(), HS
      }
      scaleInPlace(SS) {
        const HS = this._m;
        for (let gS = 0; gS < 16; gS++) HS[gS] *= SS;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(SS) {
        const HS = GS.Matrix[0];
        this.invertToRef(HS), HS.transposeToRef(SS);
        const gS = SS._m;
        return jS.FromValuesToRef(gS[0], gS[1], gS[2], 0, gS[4], gS[5], gS[6], 0, gS[8], gS[9], gS[10], 0, 0, 0, 0, 1, SS), SS
      }
      getRotationMatrix() {
        const SS = new jS;
        return this.getRotationMatrixToRef(SS), SS
      }
      getRotationMatrixToRef(SS) {
        const HS = GS.VK[0];
        if (!this.decompose(HS)) return jS.IdentityToRef(SS), SS;
        const gS = this._m,
          tS = 1 / HS._x,
          bS = 1 / HS._y,
          XS = 1 / HS._z;
        return jS.FromValuesToRef(gS[0] * tS, gS[1] * tS, gS[2] * tS, 0, gS[4] * bS, gS[5] * bS, gS[6] * bS, 0, gS[8] * XS, gS[9] * XS, gS[10] * XS, 0, 0, 0, 0, 1, SS), SS
      }
      toggleModelMatrixHandInPlace() {
        const SS = this._m;
        return SS[2] *= -1, SS[6] *= -1, SS[8] *= -1, SS[9] *= -1, SS[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const SS = this._m;
        return SS[8] *= -1, SS[9] *= -1, SS[10] *= -1, SS[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(nS, this), this
      }
      static FromArray(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gS = new jS;
        return jS.FromArrayToRef(SS, HS, gS), gS
      }
      static FromArrayToRef(SS, HS, gS) {
        for (let tS = 0; tS < 16; tS++) gS._m[tS] = SS[tS + HS];
        return gS.markAsUpdated(), gS
      }
      static FromFloat32ArrayToRefScaled(SS, HS, gS, tS) {
        return tS._m[0] = SS[0 + HS] * gS, tS._m[1] = SS[1 + HS] * gS, tS._m[2] = SS[2 + HS] * gS, tS._m[3] = SS[3 + HS] * gS, tS._m[4] = SS[4 + HS] * gS, tS._m[5] = SS[5 + HS] * gS, tS._m[6] = SS[6 + HS] * gS, tS._m[7] = SS[7 + HS] * gS, tS._m[8] = SS[8 + HS] * gS, tS._m[9] = SS[9 + HS] * gS, tS._m[10] = SS[10 + HS] * gS, tS._m[11] = SS[11 + HS] * gS, tS._m[12] = SS[12 + HS] * gS, tS._m[13] = SS[13 + HS] * gS, tS._m[14] = SS[14 + HS] * gS, tS._m[15] = SS[15 + HS] * gS, tS.markAsUpdated(), tS
      }
      static get IdentityReadOnly() {
        return jS._IdentityReadOnly
      }
      static FromValuesToRef(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, jS, GS) {
        const CS = GS._m;
        CS[0] = SS, CS[1] = HS, CS[2] = gS, CS[3] = tS, CS[4] = bS, CS[5] = XS, CS[6] = xS, CS[7] = NS, CS[8] = qS, CS[9] = uS, CS[10] = IS, CS[11] = fS, CS[12] = kS, CS[13] = aS, CS[14] = KS, CS[15] = jS, GS.markAsUpdated()
      }
      static FromValues(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS, aS, KS, GS) {
        const CS = new jS,
          nS = CS._m;
        return nS[0] = SS, nS[1] = HS, nS[2] = gS, nS[3] = tS, nS[4] = bS, nS[5] = XS, nS[6] = xS, nS[7] = NS, nS[8] = qS, nS[9] = uS, nS[10] = IS, nS[11] = fS, nS[12] = kS, nS[13] = aS, nS[14] = KS, nS[15] = GS, CS.markAsUpdated(), CS
      }
      static Compose(SS, HS, gS) {
        const tS = new jS;
        return jS.ComposeToRef(SS, HS, gS, tS), tS
      }
      static ComposeToRef(SS, HS, gS, tS) {
        const bS = tS._m,
          XS = HS._x,
          xS = HS._y,
          NS = HS._z,
          qS = HS._w,
          uS = XS + XS,
          IS = xS + xS,
          fS = NS + NS,
          kS = XS * uS,
          aS = XS * IS,
          KS = XS * fS,
          jS = xS * IS,
          GS = xS * fS,
          CS = NS * fS,
          nS = qS * uS,
          PS = qS * IS,
          QS = qS * fS,
          DS = SS._x,
          wS = SS._y,
          hS = SS._z;
        return bS[0] = (1 - (jS + CS)) * DS, bS[1] = (aS + QS) * DS, bS[2] = (KS - PS) * DS, bS[3] = 0, bS[4] = (aS - QS) * wS, bS[5] = (1 - (kS + CS)) * wS, bS[6] = (GS + nS) * wS, bS[7] = 0, bS[8] = (KS + PS) * hS, bS[9] = (GS - nS) * hS, bS[10] = (1 - (kS + jS)) * hS, bS[11] = 0, bS[12] = gS._x, bS[13] = gS._y, bS[14] = gS._z, bS[15] = 1, tS.markAsUpdated(), tS
      }
      static Identity() {
        const SS = jS.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return SS._updateIdentityStatus(!0), SS
      }
      static IdentityToRef(SS) {
        return jS.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, SS), SS._updateIdentityStatus(!0), SS
      }
      static Zero() {
        const SS = jS.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return SS._updateIdentityStatus(!1), SS
      }
      static RotationX(SS) {
        const HS = new jS;
        return jS.RotationXToRef(SS, HS), HS
      }
      static Invert(SS) {
        const HS = new jS;
        return SS.invertToRef(HS), HS
      }
      static RotationXToRef(SS, HS) {
        const gS = Math.sin(SS),
          tS = Math.cos(SS);
        return jS.FromValuesToRef(1, 0, 0, 0, 0, tS, gS, 0, 0, -gS, tS, 0, 0, 0, 0, 1, HS), HS._updateIdentityStatus(1 === tS && 0 === gS), HS
      }
      static RotationY(SS) {
        const HS = new jS;
        return jS.RotationYToRef(SS, HS), HS
      }
      static RotationYToRef(SS, HS) {
        const gS = Math.sin(SS),
          tS = Math.cos(SS);
        return jS.FromValuesToRef(tS, 0, -gS, 0, 0, 1, 0, 0, gS, 0, tS, 0, 0, 0, 0, 1, HS), HS._updateIdentityStatus(1 === tS && 0 === gS), HS
      }
      static RotationZ(SS) {
        const HS = new jS;
        return jS.RotationZToRef(SS, HS), HS
      }
      static RotationZToRef(SS, HS) {
        const gS = Math.sin(SS),
          tS = Math.cos(SS);
        return jS.FromValuesToRef(tS, gS, 0, 0, -gS, tS, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, HS), HS._updateIdentityStatus(1 === tS && 0 === gS), HS
      }
      static RotationAxis(SS, HS) {
        const gS = new jS;
        return jS.RotationAxisToRef(SS, HS, gS), gS
      }
      static RotationAxisToRef(SS, HS, gS) {
        const tS = Math.sin(-HS),
          bS = Math.cos(-HS),
          XS = 1 - bS;
        SS = SS.normalizeToRef(GS.VK[0]);
        const xS = gS._m;
        return xS[0] = SS._x * SS._x * XS + bS, xS[1] = SS._x * SS._y * XS - SS._z * tS, xS[2] = SS._x * SS._z * XS + SS._y * tS, xS[3] = 0, xS[4] = SS._y * SS._x * XS + SS._z * tS, xS[5] = SS._y * SS._y * XS + bS, xS[6] = SS._y * SS._z * XS - SS._x * tS, xS[7] = 0, xS[8] = SS._z * SS._x * XS - SS._y * tS, xS[9] = SS._z * SS._y * XS + SS._x * tS, xS[10] = SS._z * SS._z * XS + bS, xS[11] = 0, xS[12] = 0, xS[13] = 0, xS[14] = 0, xS[15] = 1, gS.markAsUpdated(), gS
      }
      static RotationAlignToRef(SS, HS, gS) {
        let bS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const XS = kS.Dot(HS, SS),
          xS = gS._m;
        if (XS < -1 + tS.d) xS[0] = -1, xS[1] = 0, xS[2] = 0, xS[3] = 0, xS[4] = 0, xS[5] = bS ? 1 : -1, xS[6] = 0, xS[7] = 0, xS[8] = 0, xS[9] = 0, xS[10] = bS ? -1 : 1, xS[11] = 0;
        else {
          const gS = kS.Cross(HS, SS),
            tS = 1 / (1 + XS);
          xS[0] = gS._x * gS._x * tS + XS, xS[1] = gS._y * gS._x * tS - gS._z, xS[2] = gS._z * gS._x * tS + gS._y, xS[3] = 0, xS[4] = gS._x * gS._y * tS + gS._z, xS[5] = gS._y * gS._y * tS + XS, xS[6] = gS._z * gS._y * tS - gS._x, xS[7] = 0, xS[8] = gS._x * gS._z * tS - gS._y, xS[9] = gS._y * gS._z * tS + gS._x, xS[10] = gS._z * gS._z * tS + XS, xS[11] = 0
        }
        return xS[12] = 0, xS[13] = 0, xS[14] = 0, xS[15] = 1, gS.markAsUpdated(), gS
      }
      static RotationYawPitchRoll(SS, HS, gS) {
        const tS = new jS;
        return jS.RotationYawPitchRollToRef(SS, HS, gS, tS), tS
      }
      static RotationYawPitchRollToRef(SS, HS, gS, tS) {
        return KS.RotationYawPitchRollToRef(SS, HS, gS, GS.Quaternion[0]), GS.Quaternion[0].toRotationMatrix(tS), tS
      }
      static Scaling(SS, HS, gS) {
        const tS = new jS;
        return jS.ScalingToRef(SS, HS, gS, tS), tS
      }
      static ScalingToRef(SS, HS, gS, tS) {
        return jS.FromValuesToRef(SS, 0, 0, 0, 0, HS, 0, 0, 0, 0, gS, 0, 0, 0, 0, 1, tS), tS._updateIdentityStatus(1 === SS && 1 === HS && 1 === gS), tS
      }
      static Translation(SS, HS, gS) {
        const tS = new jS;
        return jS.TranslationToRef(SS, HS, gS, tS), tS
      }
      static TranslationToRef(SS, HS, gS, tS) {
        return jS.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, SS, HS, gS, 1, tS), tS._updateIdentityStatus(0 === SS && 0 === HS && 0 === gS), tS
      }
      static Lerp(SS, HS, gS) {
        const tS = new jS;
        return jS.LerpToRef(SS, HS, gS, tS), tS
      }
      static LerpToRef(SS, HS, gS, tS) {
        const bS = tS._m,
          XS = SS.m,
          xS = HS.m;
        for (let NS = 0; NS < 16; NS++) bS[NS] = XS[NS] * (1 - gS) + xS[NS] * gS;
        return tS.markAsUpdated(), tS
      }
      static DecomposeLerp(SS, HS, gS) {
        const tS = new jS;
        return jS.DecomposeLerpToRef(SS, HS, gS, tS), tS
      }
      static DecomposeLerpToRef(SS, HS, gS, tS) {
        const bS = GS.VK[0],
          XS = GS.Quaternion[0],
          xS = GS.VK[1];
        SS.decompose(bS, XS, xS);
        const NS = GS.VK[2],
          qS = GS.Quaternion[1],
          uS = GS.VK[3];
        HS.decompose(NS, qS, uS);
        const IS = GS.VK[4];
        kS.LerpToRef(bS, NS, gS, IS);
        const fS = GS.Quaternion[2];
        KS.SlerpToRef(XS, qS, gS, fS);
        const aS = GS.VK[5];
        return kS.LerpToRef(xS, uS, gS, aS), jS.ComposeToRef(IS, fS, aS, tS), tS
      }
      static LookAtLH(SS, HS, gS) {
        const tS = new jS;
        return jS.LookAtLHToRef(SS, HS, gS, tS), tS
      }
      static LookAtLHToRef(SS, HS, gS, tS) {
        const bS = GS.VK[0],
          XS = GS.VK[1],
          xS = GS.VK[2];
        HS.subtractToRef(SS, xS), xS.normalize(), kS.CrossToRef(gS, xS, bS);
        const NS = bS.lengthSquared();
        0 === NS ? bS.x = 1 : bS.normalizeFromLength(Math.sqrt(NS)), kS.CrossToRef(xS, bS, XS), XS.normalize();
        const qS = -kS.Dot(bS, SS),
          uS = -kS.Dot(XS, SS),
          IS = -kS.Dot(xS, SS);
        return jS.FromValuesToRef(bS._x, XS._x, xS._x, 0, bS._y, XS._y, xS._y, 0, bS._z, XS._z, xS._z, 0, qS, uS, IS, 1, tS), tS
      }
      static LookAtRH(SS, HS, gS) {
        const tS = new jS;
        return jS.LookAtRHToRef(SS, HS, gS, tS), tS
      }
      static LookAtRHToRef(SS, HS, gS, tS) {
        const bS = GS.VK[0],
          XS = GS.VK[1],
          xS = GS.VK[2];
        SS.subtractToRef(HS, xS), xS.normalize(), kS.CrossToRef(gS, xS, bS);
        const NS = bS.lengthSquared();
        0 === NS ? bS.x = 1 : bS.normalizeFromLength(Math.sqrt(NS)), kS.CrossToRef(xS, bS, XS), XS.normalize();
        const qS = -kS.Dot(bS, SS),
          uS = -kS.Dot(XS, SS),
          IS = -kS.Dot(xS, SS);
        return jS.FromValuesToRef(bS._x, XS._x, xS._x, 0, bS._y, XS._y, xS._y, 0, bS._z, XS._z, xS._z, 0, qS, uS, IS, 1, tS), tS
      }
      static LookDirectionLH(SS, HS) {
        const gS = new jS;
        return jS.LookDirectionLHToRef(SS, HS, gS), gS
      }
      static LookDirectionLHToRef(SS, HS, gS) {
        const tS = GS.VK[0];
        tS.dJ(SS), tS.scaleInPlace(-1);
        const bS = GS.VK[1];
        return kS.CrossToRef(HS, tS, bS), jS.FromValuesToRef(bS._x, bS._y, bS._z, 0, HS._x, HS._y, HS._z, 0, tS._x, tS._y, tS._z, 0, 0, 0, 0, 1, gS), gS
      }
      static LookDirectionRH(SS, HS) {
        const gS = new jS;
        return jS.LookDirectionRHToRef(SS, HS, gS), gS
      }
      static LookDirectionRHToRef(SS, HS, gS) {
        const tS = GS.VK[2];
        return kS.CrossToRef(HS, SS, tS), jS.FromValuesToRef(tS._x, tS._y, tS._z, 0, HS._x, HS._y, HS._z, 0, SS._x, SS._y, SS._z, 0, 0, 0, 0, 1, gS), gS
      }
      static OrthoLH(SS, HS, gS, tS, bS) {
        const XS = new jS;
        return jS.OrthoLHToRef(SS, HS, gS, tS, XS, bS), XS
      }
      static OrthoLHToRef(SS, HS, gS, tS, bS, XS) {
        const xS = 2 / SS,
          NS = 2 / HS,
          qS = 2 / (tS - gS),
          uS = -(tS + gS) / (tS - gS);
        return jS.FromValuesToRef(xS, 0, 0, 0, 0, NS, 0, 0, 0, 0, qS, 0, 0, 0, uS, 1, bS), XS && bS.multiplyToRef(nS, bS), bS._updateIdentityStatus(1 === xS && 1 === NS && 1 === qS && 0 === uS), bS
      }
      static OrthoOffCenterLH(SS, HS, gS, tS, bS, XS, xS) {
        const NS = new jS;
        return jS.OrthoOffCenterLHToRef(SS, HS, gS, tS, bS, XS, NS, xS), NS
      }
      static OrthoOffCenterLHToRef(SS, HS, gS, tS, bS, XS, xS, NS) {
        const qS = 2 / (HS - SS),
          uS = 2 / (tS - gS),
          IS = 2 / (XS - bS),
          fS = -(XS + bS) / (XS - bS),
          kS = (SS + HS) / (SS - HS),
          aS = (tS + gS) / (gS - tS);
        return jS.FromValuesToRef(qS, 0, 0, 0, 0, uS, 0, 0, 0, 0, IS, 0, kS, aS, fS, 1, xS), NS && xS.multiplyToRef(nS, xS), xS.markAsUpdated(), xS
      }
      static ObliqueOffCenterLHToRef(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
        const fS = -xS * Math.cos(NS),
          kS = -xS * Math.sin(NS);
        return jS.TranslationToRef(0, 0, -qS, GS.Matrix[1]), jS.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, fS, kS, 1, 0, 0, 0, 0, 1, GS.Matrix[0]), GS.Matrix[1].multiplyToRef(GS.Matrix[0], GS.Matrix[0]), jS.TranslationToRef(0, 0, qS, GS.Matrix[1]), GS.Matrix[0].multiplyToRef(GS.Matrix[1], GS.Matrix[0]), jS.OrthoOffCenterLHToRef(SS, HS, gS, tS, bS, XS, uS, IS), GS.Matrix[0].multiplyToRef(uS, uS), uS
      }
      static OrthoOffCenterRH(SS, HS, gS, tS, bS, XS, xS) {
        const NS = new jS;
        return jS.OrthoOffCenterRHToRef(SS, HS, gS, tS, bS, XS, NS, xS), NS
      }
      static OrthoOffCenterRHToRef(SS, HS, gS, tS, bS, XS, xS, NS) {
        return jS.OrthoOffCenterLHToRef(SS, HS, gS, tS, bS, XS, xS, NS), xS._m[10] *= -1, xS
      }
      static ObliqueOffCenterRHToRef(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
        const fS = xS * Math.cos(NS),
          kS = xS * Math.sin(NS);
        return jS.TranslationToRef(0, 0, qS, GS.Matrix[1]), jS.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, fS, kS, 1, 0, 0, 0, 0, 1, GS.Matrix[0]), GS.Matrix[1].multiplyToRef(GS.Matrix[0], GS.Matrix[0]), jS.TranslationToRef(0, 0, -qS, GS.Matrix[1]), GS.Matrix[0].multiplyToRef(GS.Matrix[1], GS.Matrix[0]), jS.OrthoOffCenterRHToRef(SS, HS, gS, tS, bS, XS, uS, IS), GS.Matrix[0].multiplyToRef(uS, uS), uS
      }
      static PerspectiveLH(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const xS = new jS,
          NS = 2 * gS / SS,
          qS = 2 * gS / HS,
          uS = (tS + gS) / (tS - gS),
          IS = -2 * tS * gS / (tS - gS),
          fS = Math.tan(XS);
        return jS.FromValuesToRef(NS, 0, 0, 0, 0, qS, 0, fS, 0, 0, uS, 1, 0, 0, IS, 0, xS), bS && xS.multiplyToRef(nS, xS), xS._updateIdentityStatus(!1), xS
      }
      static PerspectiveFovLH(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const NS = new jS;
        return jS.PerspectiveFovLHToRef(SS, HS, gS, tS, NS, !0, bS, XS, xS), NS
      }
      static PerspectiveFovLHToRef(SS, HS, gS, tS, bS) {
        let XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const uS = gS,
          IS = tS,
          fS = 1 / Math.tan(.5 * SS),
          kS = XS ? fS / HS : fS,
          aS = XS ? fS : fS * HS,
          KS = qS && 0 === uS ? -1 : 0 !== IS ? (IS + uS) / (IS - uS) : 1,
          GS = qS && 0 === uS ? 2 * IS : 0 !== IS ? -2 * IS * uS / (IS - uS) : -2 * uS,
          CS = Math.tan(NS);
        return jS.FromValuesToRef(kS, 0, 0, 0, 0, aS, 0, CS, 0, 0, KS, 1, 0, 0, GS, 0, bS), xS && bS.multiplyToRef(nS, bS), bS._updateIdentityStatus(!1), bS
      }
      static PerspectiveFovReverseLHToRef(SS, HS, gS, tS, bS) {
        let XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const qS = 1 / Math.tan(.5 * SS),
          uS = XS ? qS / HS : qS,
          IS = XS ? qS : qS * HS,
          fS = Math.tan(NS);
        return jS.FromValuesToRef(uS, 0, 0, 0, 0, IS, 0, fS, 0, 0, -gS, 1, 0, 0, 1, 0, bS), xS && bS.multiplyToRef(nS, bS), bS._updateIdentityStatus(!1), bS
      }
      static PerspectiveFovRH(SS, HS, gS, tS, bS) {
        let XS = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xS = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const NS = new jS;
        return jS.PerspectiveFovRHToRef(SS, HS, gS, tS, NS, !0, bS, XS, xS), NS
      }
      static PerspectiveFovRHToRef(SS, HS, gS, tS, bS) {
        let XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          qS = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const uS = gS,
          IS = tS,
          fS = 1 / Math.tan(.5 * SS),
          kS = XS ? fS / HS : fS,
          aS = XS ? fS : fS * HS,
          KS = qS && 0 === uS ? 1 : 0 !== IS ? -(IS + uS) / (IS - uS) : -1,
          GS = qS && 0 === uS ? 2 * IS : 0 !== IS ? -2 * IS * uS / (IS - uS) : -2 * uS,
          CS = Math.tan(NS);
        return jS.FromValuesToRef(kS, 0, 0, 0, 0, aS, 0, CS, 0, 0, KS, -1, 0, 0, GS, 0, bS), xS && bS.multiplyToRef(nS, bS), bS._updateIdentityStatus(!1), bS
      }
      static PerspectiveFovReverseRHToRef(SS, HS, gS, tS, bS) {
        let XS = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xS = arguments.length > 6 ? arguments[6] : void 0,
          NS = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const qS = 1 / Math.tan(.5 * SS),
          uS = XS ? qS / HS : qS,
          IS = XS ? qS : qS * HS,
          fS = Math.tan(NS);
        return jS.FromValuesToRef(uS, 0, 0, 0, 0, IS, 0, fS, 0, 0, -gS, -1, 0, 0, -1, 0, bS), xS && bS.multiplyToRef(nS, bS), bS._updateIdentityStatus(!1), bS
      }
      static GetFinalMatrix(SS, HS, gS, tS, bS, XS) {
        const xS = SS.width,
          NS = SS.height,
          qS = SS.x,
          uS = SS.y,
          IS = jS.FromValues(xS / 2, 0, 0, 0, 0, -NS / 2, 0, 0, 0, 0, XS - bS, 0, qS + xS / 2, NS / 2 + uS, bS, 1),
          fS = new jS;
        return HS.multiplyToRef(gS, fS), fS.multiplyToRef(tS, fS), fS.multiplyToRef(IS, fS)
      }
      static GetAsMatrix2x2(SS) {
        const HS = SS.m,
          gS = [HS[0], HS[1], HS[4], HS[5]];
        return XS.d.MatrixUse64Bits ? gS : new Float32Array(gS)
      }
      static GetAsMatrix3x3(SS) {
        const HS = SS.m,
          gS = [HS[0], HS[1], HS[2], HS[4], HS[5], HS[6], HS[8], HS[9], HS[10]];
        return XS.d.MatrixUse64Bits ? gS : new Float32Array(gS)
      }
      static Transpose(SS) {
        const HS = new jS;
        return jS.TransposeToRef(SS, HS), HS
      }
      static TransposeToRef(SS, HS) {
        const gS = SS.m,
          tS = gS[0],
          bS = gS[4],
          XS = gS[8],
          xS = gS[12],
          NS = gS[1],
          qS = gS[5],
          uS = gS[9],
          IS = gS[13],
          fS = gS[2],
          kS = gS[6],
          aS = gS[10],
          KS = gS[14],
          jS = gS[3],
          GS = gS[7],
          CS = gS[11],
          nS = gS[15],
          PS = HS._m;
        return PS[0] = tS, PS[1] = bS, PS[2] = XS, PS[3] = xS, PS[4] = NS, PS[5] = qS, PS[6] = uS, PS[7] = IS, PS[8] = fS, PS[9] = kS, PS[10] = aS, PS[11] = KS, PS[12] = jS, PS[13] = GS, PS[14] = CS, PS[15] = nS, HS.markAsUpdated(), HS._updateIdentityStatus(SS._isIdentity, SS._isIdentityDirty), HS
      }
      static Reflection(SS) {
        const HS = new jS;
        return jS.ReflectionToRef(SS, HS), HS
      }
      static ReflectionToRef(SS, HS) {
        SS.normalize();
        const gS = SS.normal.x,
          tS = SS.normal.y,
          bS = SS.normal.z,
          XS = -2 * gS,
          xS = -2 * tS,
          NS = -2 * bS;
        return jS.FromValuesToRef(XS * gS + 1, xS * gS, NS * gS, 0, XS * tS, xS * tS + 1, NS * tS, 0, XS * bS, xS * bS, NS * bS + 1, 0, XS * SS.d, xS * SS.d, NS * SS.d, 1, HS), HS
      }
      static FromXYZAxesToRef(SS, HS, gS, tS) {
        return jS.FromValuesToRef(SS._x, SS._y, SS._z, 0, HS._x, HS._y, HS._z, 0, gS._x, gS._y, gS._z, 0, 0, 0, 0, 1, tS), tS
      }
      static FromQuaternionToRef(SS, HS) {
        const gS = SS._x * SS._x,
          tS = SS._y * SS._y,
          bS = SS._z * SS._z,
          XS = SS._x * SS._y,
          xS = SS._z * SS._w,
          NS = SS._z * SS._x,
          qS = SS._y * SS._w,
          uS = SS._y * SS._z,
          IS = SS._x * SS._w;
        return HS._m[0] = 1 - 2 * (tS + bS), HS._m[1] = 2 * (XS + xS), HS._m[2] = 2 * (NS - qS), HS._m[3] = 0, HS._m[4] = 2 * (XS - xS), HS._m[5] = 1 - 2 * (bS + gS), HS._m[6] = 2 * (uS + IS), HS._m[7] = 0, HS._m[8] = 2 * (NS + qS), HS._m[9] = 2 * (uS - IS), HS._m[10] = 1 - 2 * (tS + gS), HS._m[11] = 0, HS._m[12] = 0, HS._m[13] = 0, HS._m[14] = 0, HS._m[15] = 1, HS.markAsUpdated(), HS
      }
    }
    jS._IdentityReadOnly = jS.Identity();
    class GS {}
    GS.VK = (0, bS.g)(11, kS.Zero), GS.Matrix = (0, bS.g)(2, jS.Identity), GS.Quaternion = (0, bS.g)(3, KS.Zero);
    class CS {}
    CS.Vector2 = (0, bS.g)(3, fS.Zero), CS.VK = (0, bS.g)(13, kS.Zero), CS.Vector4 = (0, bS.g)(3, aS.Zero), CS.Quaternion = (0, bS.g)(3, KS.Zero), CS.Matrix = (0, bS.g)(8, jS.Identity);
    const nS = jS.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let PS = !1;

    function QS() {
      PS || (PS = !0, Object.defineProperties(fS.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(kS.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(aS.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(KS.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(jS.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, uS.f)("BABYLON.Vector2", fS), (0, uS.f)("BABYLON.Vector3", kS), (0, uS.f)("BABYLON.Vector4", aS), (0, uS.f)("BABYLON.Matrix", jS))
    }
  },
  37144: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    const tS = "undefined" !== typeof WeakRef;
    class bS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(SS, HS, gS, tS)
      }
      initialize(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = SS, this.skipNextObservers = HS, this.target = gS, this.currentTarget = tS, this
      }
    }
    class XS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = SS, this.mask = HS, this.scope = gS, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(SS)
      }
    }
    class xS {
      static FromPromise(SS, HS) {
        const gS = new xS;
        return SS.then((SS => {
          gS.notifyObservers(SS)
        })).catch((SS => {
          if (!HS) throw SS;
          HS.notifyObservers(SS)
        })), gS
      }
      get observers() {
        return this._observers
      }
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = HS, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new bS(0), SS && (this._onObserverAdded = SS)
      }
      add(SS) {
        let HS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          gS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!SS) return null;
        const bS = new XS(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        bS.unregisterOnNextCall = gS, HS ? this._observers.unshift(bS) : this._observers.push(bS), this._onObserverAdded && this._onObserverAdded(bS), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(bS, this._lastNotifiedValue);
        const xS = tS ? new WeakRef(this) : {
          deref: () => this
        };
        return bS._remove = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const HS = xS.deref();
          HS && (SS ? HS.remove(bS) : HS._remove(bS))
        }, bS
      }
      addOnce(SS) {
        return this.add(SS, void 0, void 0, void 0, !0)
      }
      remove(SS) {
        if (!SS) return !1;
        SS._remove = null;
        return -1 !== this._observers.indexOf(SS) && (this._deferUnregister(SS), !0)
      }
      removeCallback(SS, HS) {
        for (let gS = 0; gS < this._observers.length; gS++) {
          const tS = this._observers[gS];
          if (!tS._willBeUnregistered && (tS.callback === SS && (!HS || HS === tS.scope))) return this._deferUnregister(tS), !0
        }
        return !1
      }
      _deferUnregister(SS) {
        SS._willBeUnregistered || (this._numObserversMarkedAsDeleted++, SS.unregisterOnNextCall = !1, SS._willBeUnregistered = !0, setTimeout((() => {
          this._remove(SS)
        }), 0))
      }
      _remove(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!SS) return !1;
        const gS = this._observers.indexOf(SS);
        return -1 !== gS && (HS && this._numObserversMarkedAsDeleted--, this._observers.splice(gS, 1), !0)
      }
      makeObserverTopPriority(SS) {
        this._remove(SS, !1), this._observers.unshift(SS)
      }
      makeObserverBottomPriority(SS) {
        this._remove(SS, !1), this._observers.push(SS)
      }
      notifyObservers(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = SS), !this._observers.length) return !0;
        const XS = this._eventState;
        XS.mask = HS, XS.target = gS, XS.currentTarget = tS, XS.skipNextObservers = !1, XS.lastReturnValue = SS, XS.userInfo = bS;
        for (const xS of this._observers)
          if (!xS._willBeUnregistered && (xS.mask & HS && (xS.unregisterOnNextCall && this._deferUnregister(xS), xS.scope ? XS.lastReturnValue = xS.callback.apply(xS.scope, [SS, XS]) : XS.lastReturnValue = xS.callback(SS, XS)), XS.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = HS), SS._willBeUnregistered) return;
        const tS = this._eventState;
        tS.mask = gS, tS.skipNextObservers = !1, SS.unregisterOnNextCall && this._deferUnregister(SS), SS.callback(HS, tS)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const SS = this._observers.pop();
          SS && (SS._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const SS = new xS;
        return SS._observers = this._observers.slice(0), SS
      }
      hasSpecificMask() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const HS of this._observers)
          if (HS.mask & SS || HS.mask === SS) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);