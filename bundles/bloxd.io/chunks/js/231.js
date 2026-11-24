export const id = 231;
export const ids = [231];
export const modules = {
  37110: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD
    });
    var pD = wD(37119);
    class sD {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    sD.Instances = [], sD.OnEnginesDisposedObservable = new pD.b, sD._LastCreatedScene = null, sD.UseFallbackTexture = !0, sD.FallbackTexture = ""
  },
  37103: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      static SetMatrixPrecision(DD) {
        if (pD.MatrixTrackPrecisionChange = !1, DD && !pD.MatrixUse64Bits && pD.MatrixTrackedMatrices)
          for (let zD = 0; zD < pD.MatrixTrackedMatrices.length; ++zD) {
            const DD = pD.MatrixTrackedMatrices[zD],
              wD = DD._m;
            DD._m = new Array(16);
            for (let zD = 0; zD < 16; ++zD) DD._m[zD] = wD[zD]
          }
        pD.MatrixUse64Bits = DD, pD.MatrixCurrentType = pD.MatrixUse64Bits ? Array : Float32Array, pD.MatrixTrackedMatrices = null
      }
    }
    pD.MatrixUse64Bits = !1, pD.MatrixTrackPrecisionChange = !0, pD.MatrixCurrentType = Float32Array, pD.MatrixTrackedMatrices = []
  },
  37127: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => LD,
      h: () => gD,
      j: () => cD,
      n: () => pD,
      r: () => KD,
      s: () => rD
    });
    class pD {}

    function sD(DD) {
      DD.updateFlag = pD._UpdateFlagSeed++
    }

    function KD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const sD = DD.QpD(),
        KD = zD.QpD(),
        rD = sD[0],
        LD = sD[1],
        cD = sD[2],
        gD = sD[3],
        RD = sD[4],
        AD = sD[5],
        UD = sD[6],
        fD = sD[7],
        ID = sD[8],
        BD = sD[9],
        GD = sD[10],
        hD = sD[11],
        nD = sD[12],
        MD = sD[13],
        OD = sD[14],
        JD = sD[15],
        ED = KD[0],
        QD = KD[1],
        XD = KD[2],
        VD = KD[3],
        PD = KD[4],
        CD = KD[5],
        xD = KD[6],
        TD = KD[7],
        bD = KD[8],
        jD = KD[9],
        dD = KD[10],
        SD = KD[11],
        iD = KD[12],
        lD = KD[13],
        WD = KD[14],
        ND = KD[15];
      wD[pD] = rD * ED + LD * PD + cD * bD + gD * iD, wD[pD + 1] = rD * QD + LD * CD + cD * jD + gD * lD, wD[pD + 2] = rD * XD + LD * xD + cD * dD + gD * WD, wD[pD + 3] = rD * VD + LD * TD + cD * SD + gD * ND, wD[pD + 4] = RD * ED + AD * PD + UD * bD + fD * iD, wD[pD + 5] = RD * QD + AD * CD + UD * jD + fD * lD, wD[pD + 6] = RD * XD + AD * xD + UD * dD + fD * WD, wD[pD + 7] = RD * VD + AD * TD + UD * SD + fD * ND, wD[pD + 8] = ID * ED + BD * PD + GD * bD + hD * iD, wD[pD + 9] = ID * QD + BD * CD + GD * jD + hD * lD, wD[pD + 10] = ID * XD + BD * xD + GD * dD + hD * WD, wD[pD + 11] = ID * VD + BD * TD + GD * SD + hD * ND, wD[pD + 12] = nD * ED + MD * PD + OD * bD + JD * iD, wD[pD + 13] = nD * QD + MD * CD + OD * jD + JD * lD, wD[pD + 14] = nD * XD + MD * xD + OD * dD + JD * WD, wD[pD + 15] = nD * VD + MD * TD + OD * SD + JD * ND
    }

    function rD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      KD(DD, zD, wD.QpD(), pD), sD(wD)
    }

    function LD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const pD = DD.QpD();
      zD[wD] = pD[0], zD[wD + 1] = pD[1], zD[wD + 2] = pD[2], zD[wD + 3] = pD[3], zD[wD + 4] = pD[4], zD[wD + 5] = pD[5], zD[wD + 6] = pD[6], zD[wD + 7] = pD[7], zD[wD + 8] = pD[8], zD[wD + 9] = pD[9], zD[wD + 10] = pD[10], zD[wD + 11] = pD[11], zD[wD + 12] = pD[12], zD[wD + 13] = pD[13], zD[wD + 14] = pD[14], zD[wD + 15] = pD[15]
    }

    function cD(DD, zD) {
      const wD = gD(DD, zD.QpD());
      return wD && sD(zD), wD
    }

    function gD(DD, zD) {
      const wD = DD.QpD(),
        pD = wD[0],
        sD = wD[1],
        KD = wD[2],
        rD = wD[3],
        LD = wD[4],
        cD = wD[5],
        gD = wD[6],
        RD = wD[7],
        AD = wD[8],
        UD = wD[9],
        fD = wD[10],
        ID = wD[11],
        BD = wD[12],
        GD = wD[13],
        hD = wD[14],
        nD = wD[15],
        MD = fD * nD - hD * ID,
        OD = UD * nD - GD * ID,
        JD = UD * hD - GD * fD,
        ED = AD * nD - BD * ID,
        QD = AD * hD - fD * BD,
        XD = AD * GD - BD * UD,
        VD = +(cD * MD - gD * OD + RD * JD),
        PD = -(LD * MD - gD * ED + RD * QD),
        CD = +(LD * OD - cD * ED + RD * XD),
        xD = -(LD * JD - cD * QD + gD * XD),
        TD = pD * VD + sD * PD + KD * CD + rD * xD;
      if (0 === TD) return !1;
      const bD = 1 / TD,
        jD = gD * nD - hD * RD,
        dD = cD * nD - GD * RD,
        SD = cD * hD - GD * gD,
        iD = LD * nD - BD * RD,
        lD = LD * hD - BD * gD,
        WD = LD * GD - BD * cD,
        ND = gD * ID - fD * RD,
        ZD = cD * ID - UD * RD,
        yD = cD * fD - UD * gD,
        kD = LD * ID - AD * RD,
        mD = LD * fD - AD * gD,
        eD = LD * UD - AD * cD,
        oD = -(sD * MD - KD * OD + rD * JD),
        aD = +(pD * MD - KD * ED + rD * QD),
        uD = -(pD * OD - sD * ED + rD * XD),
        vD = +(pD * JD - sD * QD + KD * XD),
        tD = +(sD * jD - KD * dD + rD * SD),
        FD = -(pD * jD - KD * iD + rD * lD),
        YD = +(pD * dD - sD * iD + rD * WD),
        HD = -(pD * SD - sD * lD + KD * WD),
        qD = -(sD * ND - KD * ZD + rD * yD),
        Dz = +(pD * ND - KD * kD + rD * mD),
        zz = -(pD * ZD - sD * kD + rD * eD),
        wz = +(pD * yD - sD * mD + KD * eD);
      return zD[0] = VD * bD, zD[1] = oD * bD, zD[2] = tD * bD, zD[3] = qD * bD, zD[4] = PD * bD, zD[5] = aD * bD, zD[6] = FD * bD, zD[7] = Dz * bD, zD[8] = CD * bD, zD[9] = uD * bD, zD[10] = YD * bD, zD[11] = zz * bD, zD[12] = xD * bD, zD[13] = vD * bD, zD[14] = HD * bD, zD[15] = wz * bD, !0
    }
    pD._UpdateFlagSeed = 0
  },
  37079: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => BD,
      i: () => ID,
      k: () => OD,
      n: () => hD,
      r: () => AD,
      s: () => UD,
      t: () => fD
    });
    var pD = wD(37088),
      sD = wD(37094),
      KD = wD(37103),
      rD = wD(37110),
      LD = wD(37125),
      cD = wD(37127),
      gD = wD(37134);
    const RD = DD => parseInt(DD.toString().replace(/\W/g, ""));
    class AD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = DD, this.y = zD
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let DD = RD(this.x);
        return DD = 397 * DD ^ RD(this.y), DD
      }
      toArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[zD] = this.x, DD[zD + 1] = this.y, this
      }
      cwD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return AD.FromArrayToRef(DD, zD, this), this
      }
      QpD() {
        return [this.x, this.y]
      }
      pC(DD) {
        return this.x = DD.x, this.y = DD.y, this
      }
      Z2(DD, zD) {
        return this.x = DD, this.y = zD, this
      }
      set(DD, zD) {
        return this.Z2(DD, zD)
      }
      I9(DD) {
        return this.Z2(DD, DD)
      }
      add(DD) {
        return new AD(this.x + DD.x, this.y + DD.y)
      }
      addToRef(DD, zD) {
        return zD.x = this.x + DD.x, zD.y = this.y + DD.y, zD
      }
      addInPlace(DD) {
        return this.x += DD.x, this.y += DD.y, this
      }
      addInPlaceFromFloats(DD, zD) {
        return this.x += DD, this.y += zD, this
      }
      addVector3(DD) {
        return new AD(this.x + DD.x, this.y + DD.y)
      }
      subtract(DD) {
        return new AD(this.x - DD.x, this.y - DD.y)
      }
      subtractToRef(DD, zD) {
        return zD.x = this.x - DD.x, zD.y = this.y - DD.y, zD
      }
      apD(DD) {
        return this.x -= DD.x, this.y -= DD.y, this
      }
      multiplyInPlace(DD) {
        return this.x *= DD.x, this.y *= DD.y, this
      }
      multiply(DD) {
        return new AD(this.x * DD.x, this.y * DD.y)
      }
      multiplyToRef(DD, zD) {
        return zD.x = this.x * DD.x, zD.y = this.y * DD.y, zD
      }
      multiplyByFloats(DD, zD) {
        return new AD(this.x * DD, this.y * zD)
      }
      divide(DD) {
        return new AD(this.x / DD.x, this.y / DD.y)
      }
      divideToRef(DD, zD) {
        return zD.x = this.x / DD.x, zD.y = this.y / DD.y, zD
      }
      divideInPlace(DD) {
        return this.x = this.x / DD.x, this.y = this.y / DD.y, this
      }
      minimizeInPlace(DD) {
        return this.minimizeInPlaceFromFloats(DD.x, DD.y)
      }
      maximizeInPlace(DD) {
        return this.maximizeInPlaceFromFloats(DD.x, DD.y)
      }
      minimizeInPlaceFromFloats(DD, zD) {
        return this.x = Math.min(DD, this.x), this.y = Math.min(zD, this.y), this
      }
      maximizeInPlaceFromFloats(DD, zD) {
        return this.x = Math.max(DD, this.x), this.y = Math.max(zD, this.y), this
      }
      subtractFromFloats(DD, zD) {
        return new AD(this.x - DD, this.y - zD)
      }
      subtractFromFloatsToRef(DD, zD, wD) {
        return wD.x = this.x - DD, wD.y = this.y - zD, wD
      }
      ep() {
        return new AD(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(DD) {
        return DD.x = -this.x, DD.y = -this.y, DD
      }
      scaleInPlace(DD) {
        return this.x *= DD, this.y *= DD, this
      }
      scale(DD) {
        return new AD(this.x * DD, this.y * DD)
      }
      scaleToRef(DD, zD) {
        return zD.x = this.x * DD, zD.y = this.y * DD, zD
      }
      scaleAndAddToRef(DD, zD) {
        return zD.x += this.x * DD, zD.y += this.y * DD, zD
      }
      equals(DD) {
        return DD && this.x === DD.x && this.y === DD.y
      }
      equalsWithEpsilon(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.b;
        return DD && (0, LD.WithinEpsilon)(this.x, DD.x, zD) && (0, LD.WithinEpsilon)(this.y, DD.y, zD)
      }
      sLD(DD, zD) {
        return this.x === DD && this.y === zD
      }
      floor() {
        return new AD(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(DD) {
        return DD.x = Math.floor(this.x), DD.y = Math.floor(this.y), DD
      }
      fract() {
        return new AD(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(DD) {
        return DD.x = this.x - Math.floor(this.x), DD.y = this.y - Math.floor(this.y), DD
      }
      rotate(DD) {
        return this.rotateToRef(DD, new AD)
      }
      rotateToRef(DD, zD) {
        const wD = Math.cos(DD),
          pD = Math.sin(DD);
        return zD.x = wD * this.x - pD * this.y, zD.y = pD * this.x + wD * this.y, zD
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
      normalizeFromLength(DD) {
        return 0 === DD || 1 === DD ? this : this.scaleInPlace(1 / DD)
      }
      normalizeToNew() {
        const DD = new AD;
        return this.normalizeToRef(DD), DD
      }
      normalizeToRef(DD) {
        const zD = this.length();
        return 0 === zD || 1 === zD ? (DD.x = this.x, DD.y = this.y, DD) : this.scaleToRef(1 / zD, DD)
      }
      clone() {
        return new AD(this.x, this.y)
      }
      dot(DD) {
        return this.x * DD.x + this.y * DD.y
      }
      static Zero() {
        return new AD(0, 0)
      }
      static One() {
        return new AD(1, 1)
      }
      static Random() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new AD((0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD))
      }
      static RandomToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z2((0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD))
      }
      static get ZeroReadOnly() {
        return AD._ZeroReadOnly
      }
      static FromArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new AD(DD[zD], DD[zD + 1])
      }
      static FromArrayToRef(DD, zD, wD) {
        return wD.x = DD[zD], wD.y = DD[zD + 1], wD
      }
      static FromFloatsToRef(DD, zD, wD) {
        return wD.Z2(DD, zD), wD
      }
      static CatmullRom(DD, zD, wD, pD, sD) {
        const KD = sD * sD,
          rD = sD * KD,
          LD = .5 * (2 * zD.x + (-DD.x + wD.x) * sD + (2 * DD.x - 5 * zD.x + 4 * wD.x - pD.x) * KD + (-DD.x + 3 * zD.x - 3 * wD.x + pD.x) * rD),
          cD = .5 * (2 * zD.y + (-DD.y + wD.y) * sD + (2 * DD.y - 5 * zD.y + 4 * wD.y - pD.y) * KD + (-DD.y + 3 * zD.y - 3 * wD.y + pD.y) * rD);
        return new AD(LD, cD)
      }
      static ClampToRef(DD, zD, wD, pD) {
        return pD.x = (0, LD.Clamp)(DD.x, zD.x, wD.x), pD.y = (0, LD.Clamp)(DD.y, zD.y, wD.y), pD
      }
      static Clamp(DD, zD, wD) {
        const pD = (0, LD.Clamp)(DD.x, zD.x, wD.x),
          sD = (0, LD.Clamp)(DD.y, zD.y, wD.y);
        return new AD(pD, sD)
      }
      static Hermite(DD, zD, wD, pD, sD) {
        const KD = sD * sD,
          rD = sD * KD,
          LD = 2 * rD - 3 * KD + 1,
          cD = -2 * rD + 3 * KD,
          gD = rD - 2 * KD + sD,
          RD = rD - KD,
          UD = DD.x * LD + wD.x * cD + zD.x * gD + pD.x * RD,
          fD = DD.y * LD + wD.y * cD + zD.y * gD + pD.y * RD;
        return new AD(UD, fD)
      }
      static Hermite1stDerivative(DD, zD, wD, pD, sD) {
        return this.Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, new AD)
      }
      static Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD) {
        const rD = sD * sD;
        return KD.x = 6 * (rD - sD) * DD.x + (3 * rD - 4 * sD + 1) * zD.x + 6 * (-rD + sD) * wD.x + (3 * rD - 2 * sD) * pD.x, KD.y = 6 * (rD - sD) * DD.y + (3 * rD - 4 * sD + 1) * zD.y + 6 * (-rD + sD) * wD.y + (3 * rD - 2 * sD) * pD.y, KD
      }
      static Lerp(DD, zD, wD) {
        return AD.LerpToRef(DD, zD, wD, new AD)
      }
      static LerpToRef(DD, zD, wD, pD) {
        return pD.x = DD.x + (zD.x - DD.x) * wD, pD.y = DD.y + (zD.y - DD.y) * wD, pD
      }
      static Dot(DD, zD) {
        return DD.x * zD.x + DD.y * zD.y
      }
      static Normalize(DD) {
        return AD.NormalizeToRef(DD, new AD)
      }
      static NormalizeToRef(DD, zD) {
        return DD.normalizeToRef(zD), zD
      }
      static Minimize(DD, zD) {
        const wD = DD.x < zD.x ? DD.x : zD.x,
          pD = DD.y < zD.y ? DD.y : zD.y;
        return new AD(wD, pD)
      }
      static Maximize(DD, zD) {
        const wD = DD.x > zD.x ? DD.x : zD.x,
          pD = DD.y > zD.y ? DD.y : zD.y;
        return new AD(wD, pD)
      }
      static Transform(DD, zD) {
        return AD.TransformToRef(DD, zD, new AD)
      }
      static TransformToRef(DD, zD, wD) {
        const pD = zD.m,
          sD = DD.x * pD[0] + DD.y * pD[4] + pD[12],
          KD = DD.x * pD[1] + DD.y * pD[5] + pD[13];
        return wD.x = sD, wD.y = KD, wD
      }
      static PointInTriangle(DD, zD, wD, pD) {
        const sD = .5 * (-wD.y * pD.x + zD.y * (-wD.x + pD.x) + zD.x * (wD.y - pD.y) + wD.x * pD.y),
          KD = sD < 0 ? -1 : 1,
          rD = (zD.y * pD.x - zD.x * pD.y + (pD.y - zD.y) * DD.x + (zD.x - pD.x) * DD.y) * KD,
          LD = (zD.x * wD.y - zD.y * wD.x + (zD.y - wD.y) * DD.x + (wD.x - zD.x) * DD.y) * KD;
        return rD > 0 && LD > 0 && rD + LD < 2 * sD * KD
      }
      static Distance(DD, zD) {
        return Math.sqrt(AD.DistanceSquared(DD, zD))
      }
      static DistanceSquared(DD, zD) {
        const wD = DD.x - zD.x,
          pD = DD.y - zD.y;
        return wD * wD + pD * pD
      }
      static Center(DD, zD) {
        return AD.CenterToRef(DD, zD, new AD)
      }
      static CenterToRef(DD, zD, wD) {
        return wD.Z2((DD.x + zD.x) / 2, (DD.y + zD.y) / 2)
      }
      static DistanceOfPointFromSegment(DD, zD, wD) {
        const pD = AD.DistanceSquared(zD, wD);
        if (0 === pD) return AD.Distance(DD, zD);
        const sD = wD.subtract(zD),
          KD = Math.max(0, Math.min(1, AD.Dot(DD.subtract(zD), sD) / pD)),
          rD = zD.add(sD.multiplyByFloats(KD, KD));
        return AD.Distance(DD, rD)
      }
    }
    AD._V8PerformanceHack = new AD(.5, .5), AD._ZeroReadOnly = AD.Zero();
    class UD {
      get x() {
        return this._x
      }
      set x(DD) {
        this._x = DD, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(DD) {
        this._y = DD, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(DD) {
        this._z = DD, this._isDirty = !0
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = DD, this._y = zD, this._z = wD
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "WI"
      }
      getHashCode() {
        let DD = RD(this._x);
        return DD = 397 * DD ^ RD(this._y), DD = 397 * DD ^ RD(this._z), DD
      }
      QpD() {
        return [this._x, this._y, this._z]
      }
      toArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[zD] = this._x, DD[zD + 1] = this._y, DD[zD + 2] = this._z, this
      }
      cwD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return UD.FromArrayToRef(DD, zD, this), this
      }
      toQuaternion() {
        return ID.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(DD) {
        return this._x += DD._x, this._y += DD._y, this._z += DD._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(DD, zD, wD) {
        return this._x += DD, this._y += zD, this._z += wD, this._isDirty = !0, this
      }
      add(DD) {
        return new UD(this._x + DD._x, this._y + DD._y, this._z + DD._z)
      }
      addToRef(DD, zD) {
        return zD._x = this._x + DD._x, zD._y = this._y + DD._y, zD._z = this._z + DD._z, zD._isDirty = !0, zD
      }
      apD(DD) {
        return this._x -= DD._x, this._y -= DD._y, this._z -= DD._z, this._isDirty = !0, this
      }
      subtract(DD) {
        return new UD(this._x - DD._x, this._y - DD._y, this._z - DD._z)
      }
      subtractToRef(DD, zD) {
        return this.subtractFromFloatsToRef(DD._x, DD._y, DD._z, zD)
      }
      subtractFromFloats(DD, zD, wD) {
        return new UD(this._x - DD, this._y - zD, this._z - wD)
      }
      subtractFromFloatsToRef(DD, zD, wD, pD) {
        return pD._x = this._x - DD, pD._y = this._y - zD, pD._z = this._z - wD, pD._isDirty = !0, pD
      }
      ep() {
        return new UD(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(DD) {
        return DD._x = -1 * this._x, DD._y = -1 * this._y, DD._z = -1 * this._z, DD._isDirty = !0, DD
      }
      scaleInPlace(DD) {
        return this._x *= DD, this._y *= DD, this._z *= DD, this._isDirty = !0, this
      }
      scale(DD) {
        return new UD(this._x * DD, this._y * DD, this._z * DD)
      }
      scaleToRef(DD, zD) {
        return zD._x = this._x * DD, zD._y = this._y * DD, zD._z = this._z * DD, zD._isDirty = !0, zD
      }
      getNormalToRef(DD) {
        const zD = this.length();
        let wD = Math.acos(this._y / zD);
        const pD = Math.atan2(this._z, this._x);
        wD > Math.PI / 2 ? wD -= Math.PI / 2 : wD += Math.PI / 2;
        const sD = zD * Math.sin(wD) * Math.cos(pD),
          KD = zD * Math.cos(wD),
          rD = zD * Math.sin(wD) * Math.sin(pD);
        return DD.set(sD, KD, rD), DD
      }
      applyRotationQuaternionToRef(DD, zD) {
        const wD = this._x,
          pD = this._y,
          sD = this._z,
          KD = DD._x,
          rD = DD._y,
          LD = DD._z,
          cD = DD._w,
          gD = 2 * (rD * sD - LD * pD),
          RD = 2 * (LD * wD - KD * sD),
          AD = 2 * (KD * pD - rD * wD);
        return zD._x = wD + cD * gD + rD * AD - LD * RD, zD._y = pD + cD * RD + LD * gD - KD * AD, zD._z = sD + cD * AD + KD * RD - rD * gD, zD._isDirty = !0, zD
      }
      applyRotationQuaternionInPlace(DD) {
        return this.applyRotationQuaternionToRef(DD, this)
      }
      applyRotationQuaternion(DD) {
        return this.applyRotationQuaternionToRef(DD, new UD)
      }
      scaleAndAddToRef(DD, zD) {
        return zD._x += this._x * DD, zD._y += this._y * DD, zD._z += this._z * DD, zD._isDirty = !0, zD
      }
      projectOnPlane(DD, zD) {
        return this.projectOnPlaneToRef(DD, zD, new UD)
      }
      projectOnPlaneToRef(DD, zD, wD) {
        const pD = DD.normal,
          sD = DD.d,
          KD = GD.WI[0];
        this.subtractToRef(zD, KD), KD.normalize();
        const rD = UD.Dot(KD, pD);
        if (Math.abs(rD) < 1e-10) wD.I9(1 / 0);
        else {
          const DD = -(UD.Dot(zD, pD) + sD) / rD,
            LD = KD.scaleInPlace(DD);
          zD.addToRef(LD, wD)
        }
        return wD
      }
      equals(DD) {
        return DD && this._x === DD._x && this._y === DD._y && this._z === DD._z
      }
      equalsWithEpsilon(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.b;
        return DD && (0, LD.WithinEpsilon)(this._x, DD._x, zD) && (0, LD.WithinEpsilon)(this._y, DD._y, zD) && (0, LD.WithinEpsilon)(this._z, DD._z, zD)
      }
      sLD(DD, zD, wD) {
        return this._x === DD && this._y === zD && this._z === wD
      }
      multiplyInPlace(DD) {
        return this._x *= DD._x, this._y *= DD._y, this._z *= DD._z, this._isDirty = !0, this
      }
      multiply(DD) {
        return this.multiplyByFloats(DD._x, DD._y, DD._z)
      }
      multiplyToRef(DD, zD) {
        return zD._x = this._x * DD._x, zD._y = this._y * DD._y, zD._z = this._z * DD._z, zD._isDirty = !0, zD
      }
      multiplyByFloats(DD, zD, wD) {
        return new UD(this._x * DD, this._y * zD, this._z * wD)
      }
      divide(DD) {
        return new UD(this._x / DD._x, this._y / DD._y, this._z / DD._z)
      }
      divideToRef(DD, zD) {
        return zD._x = this._x / DD._x, zD._y = this._y / DD._y, zD._z = this._z / DD._z, zD._isDirty = !0, zD
      }
      divideInPlace(DD) {
        return this._x = this._x / DD._x, this._y = this._y / DD._y, this._z = this._z / DD._z, this._isDirty = !0, this
      }
      minimizeInPlace(DD) {
        return this.minimizeInPlaceFromFloats(DD._x, DD._y, DD._z)
      }
      maximizeInPlace(DD) {
        return this.maximizeInPlaceFromFloats(DD._x, DD._y, DD._z)
      }
      minimizeInPlaceFromFloats(DD, zD, wD) {
        return DD < this._x && (this.x = DD), zD < this._y && (this.y = zD), wD < this._z && (this.z = wD), this
      }
      maximizeInPlaceFromFloats(DD, zD, wD) {
        return DD > this._x && (this.x = DD), zD > this._y && (this.y = zD), wD > this._z && (this.z = wD), this
      }
      isNonUniformWithinEpsilon(DD) {
        const zD = Math.abs(this._x),
          wD = Math.abs(this._y);
        if (!(0, LD.WithinEpsilon)(zD, wD, DD)) return !0;
        const pD = Math.abs(this._z);
        return !(0, LD.WithinEpsilon)(zD, pD, DD) || !(0, LD.WithinEpsilon)(wD, pD, DD)
      }
      get isNonUniform() {
        const DD = Math.abs(this._x);
        if (DD !== Math.abs(this._y)) return !0;
        return DD !== Math.abs(this._z)
      }
      floorToRef(DD) {
        return DD._x = Math.floor(this._x), DD._y = Math.floor(this._y), DD._z = Math.floor(this._z), DD._isDirty = !0, DD
      }
      floor() {
        return new UD(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(DD) {
        return DD._x = this._x - Math.floor(this._x), DD._y = this._y - Math.floor(this._y), DD._z = this._z - Math.floor(this._z), DD._isDirty = !0, DD
      }
      fract() {
        return new UD(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(DD) {
        if ("xyz" === (DD = DD.toLowerCase())) return this;
        const zD = GD.WI[0].pC(this);
        return this.x = zD[DD[0]], this.y = zD[DD[1]], this.z = zD[DD[2]], this
      }
      rotateByQuaternionToRef(DD, zD) {
        return DD.toRotationMatrix(GD.Matrix[0]), UD.TransformCoordinatesToRef(this, GD.Matrix[0], zD), zD
      }
      rotateByQuaternionAroundPointToRef(DD, zD, wD) {
        return this.subtractToRef(zD, GD.WI[0]), GD.WI[0].rotateByQuaternionToRef(DD, GD.WI[0]), zD.addToRef(GD.WI[0], wD), wD
      }
      cross(DD) {
        return UD.CrossToRef(this, DD, new UD)
      }
      normalizeFromLength(DD) {
        return 0 === DD || 1 === DD ? this : this.scaleInPlace(1 / DD)
      }
      normalizeToNew() {
        return this.normalizeToRef(new UD)
      }
      normalizeToRef(DD) {
        const zD = this.length();
        return 0 === zD || 1 === zD ? (DD._x = this._x, DD._y = this._y, DD._z = this._z, DD._isDirty = !0, DD) : this.scaleToRef(1 / zD, DD)
      }
      clone() {
        return new UD(this._x, this._y, this._z)
      }
      pC(DD) {
        return this.Z2(DD._x, DD._y, DD._z)
      }
      Z2(DD, zD, wD) {
        return this._x = DD, this._y = zD, this._z = wD, this._isDirty = !0, this
      }
      set(DD, zD, wD) {
        return this.Z2(DD, zD, wD)
      }
      I9(DD) {
        return this._x = this._y = this._z = DD, this._isDirty = !0, this
      }
      static GetClipFactor(DD, zD, wD, pD) {
        const sD = UD.Dot(DD, wD);
        return (sD - pD) / (sD - UD.Dot(zD, wD))
      }
      static GetAngleBetweenVectors(DD, zD, wD) {
        const pD = DD.normalizeToRef(GD.WI[1]),
          sD = zD.normalizeToRef(GD.WI[2]);
        let KD = UD.Dot(pD, sD);
        KD = (0, LD.Clamp)(KD, -1, 1);
        const rD = Math.acos(KD),
          cD = GD.WI[3];
        return UD.CrossToRef(pD, sD, cD), UD.Dot(cD, wD) > 0 ? isNaN(rD) ? 0 : rD : isNaN(rD) ? -Math.PI : -Math.acos(KD)
      }
      static GetAngleBetweenVectorsOnPlane(DD, zD, wD) {
        GD.WI[0].pC(DD);
        const pD = GD.WI[0];
        GD.WI[1].pC(zD);
        const sD = GD.WI[1];
        GD.WI[2].pC(wD);
        const KD = GD.WI[2],
          rD = GD.WI[3],
          cD = GD.WI[4];
        pD.normalize(), sD.normalize(), KD.normalize(), UD.CrossToRef(KD, pD, rD), UD.CrossToRef(rD, KD, cD);
        const gD = Math.atan2(UD.Dot(sD, rD), UD.Dot(sD, cD));
        return (0, LD.NormalizeRadians)(gD)
      }
      static PitchYawRollToMoveBetweenPointsToRef(DD, zD, wD) {
        const pD = hD.WI[0];
        return zD.subtractToRef(DD, pD), wD._y = Math.atan2(pD.x, pD.z) || 0, wD._x = Math.atan2(Math.sqrt(pD.x ** 2 + pD.z ** 2), pD.y) || 0, wD._z = 0, wD._isDirty = !0, wD
      }
      static PitchYawRollToMoveBetweenPoints(DD, zD) {
        const wD = UD.Zero();
        return UD.PitchYawRollToMoveBetweenPointsToRef(DD, zD, wD)
      }
      static SlerpToRef(DD, zD, wD, sD) {
        wD = (0, LD.Clamp)(wD, 0, 1);
        const KD = GD.WI[0],
          rD = GD.WI[1];
        KD.pC(DD);
        const cD = KD.length();
        KD.normalizeFromLength(cD), rD.pC(zD);
        const gD = rD.length();
        rD.normalizeFromLength(gD);
        const RD = UD.Dot(KD, rD);
        let AD, fD;
        if (RD < 1 - pD.b) {
          const DD = Math.acos(RD),
            zD = 1 / Math.sin(DD);
          AD = Math.sin((1 - wD) * DD) * zD, fD = Math.sin(wD * DD) * zD
        } else AD = 1 - wD, fD = wD;
        return KD.scaleInPlace(AD), rD.scaleInPlace(fD), sD.pC(KD).addInPlace(rD), sD.scaleInPlace((0, LD.Lerp)(cD, gD, wD)), sD
      }
      static SmoothToRef(DD, zD, wD, pD, sD) {
        return UD.SlerpToRef(DD, zD, 0 === pD ? 1 : wD / pD, sD), sD
      }
      static FromArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new UD(DD[zD], DD[zD + 1], DD[zD + 2])
      }
      static FromFloatArray(DD, zD) {
        return UD.FromArray(DD, zD)
      }
      static FromArrayToRef(DD, zD, wD) {
        return wD._x = DD[zD], wD._y = DD[zD + 1], wD._z = DD[zD + 2], wD._isDirty = !0, wD
      }
      static FromFloatArrayToRef(DD, zD, wD) {
        return UD.FromArrayToRef(DD, zD, wD)
      }
      static FromFloatsToRef(DD, zD, wD, pD) {
        return pD.Z2(DD, zD, wD), pD
      }
      static Zero() {
        return new UD(0, 0, 0)
      }
      static One() {
        return new UD(1, 1, 1)
      }
      static Up() {
        return new UD(0, 1, 0)
      }
      static get UpReadOnly() {
        return UD._UpReadOnly
      }
      static get DownReadOnly() {
        return UD._DownReadOnly
      }
      static get RightReadOnly() {
        return UD._RightReadOnly
      }
      static get LeftReadOnly() {
        return UD._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return UD._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return UD._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return UD._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return UD._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return UD._ZeroReadOnly
      }
      static get OneReadOnly() {
        return UD._OneReadOnly
      }
      static Down() {
        return new UD(0, -1, 0)
      }
      static Forward() {
        return new UD(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new UD(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new UD(1, 0, 0)
      }
      static Left() {
        return new UD(-1, 0, 0)
      }
      static Random() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new UD((0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD))
      }
      static RandomToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z2((0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD))
      }
      static TransformCoordinates(DD, zD) {
        const wD = UD.Zero();
        return UD.TransformCoordinatesToRef(DD, zD, wD), wD
      }
      static TransformCoordinatesToRef(DD, zD, wD) {
        return UD.TransformCoordinatesFromFloatsToRef(DD._x, DD._y, DD._z, zD, wD), wD
      }
      static TransformCoordinatesFromFloatsToRef(DD, zD, wD, pD, sD) {
        const KD = pD.m,
          rD = DD * KD[0] + zD * KD[4] + wD * KD[8] + KD[12],
          LD = DD * KD[1] + zD * KD[5] + wD * KD[9] + KD[13],
          cD = DD * KD[2] + zD * KD[6] + wD * KD[10] + KD[14],
          gD = 1 / (DD * KD[3] + zD * KD[7] + wD * KD[11] + KD[15]);
        return sD._x = rD * gD, sD._y = LD * gD, sD._z = cD * gD, sD._isDirty = !0, sD
      }
      static TransformNormal(DD, zD) {
        const wD = UD.Zero();
        return UD.TransformNormalToRef(DD, zD, wD), wD
      }
      static TransformNormalToRef(DD, zD, wD) {
        return this.TransformNormalFromFloatsToRef(DD._x, DD._y, DD._z, zD, wD), wD
      }
      static TransformNormalFromFloatsToRef(DD, zD, wD, pD, sD) {
        const KD = pD.m;
        return sD._x = DD * KD[0] + zD * KD[4] + wD * KD[8], sD._y = DD * KD[1] + zD * KD[5] + wD * KD[9], sD._z = DD * KD[2] + zD * KD[6] + wD * KD[10], sD._isDirty = !0, sD
      }
      static CatmullRom(DD, zD, wD, pD, sD) {
        const KD = sD * sD,
          rD = sD * KD,
          LD = .5 * (2 * zD._x + (-DD._x + wD._x) * sD + (2 * DD._x - 5 * zD._x + 4 * wD._x - pD._x) * KD + (-DD._x + 3 * zD._x - 3 * wD._x + pD._x) * rD),
          cD = .5 * (2 * zD._y + (-DD._y + wD._y) * sD + (2 * DD._y - 5 * zD._y + 4 * wD._y - pD._y) * KD + (-DD._y + 3 * zD._y - 3 * wD._y + pD._y) * rD),
          gD = .5 * (2 * zD._z + (-DD._z + wD._z) * sD + (2 * DD._z - 5 * zD._z + 4 * wD._z - pD._z) * KD + (-DD._z + 3 * zD._z - 3 * wD._z + pD._z) * rD);
        return new UD(LD, cD, gD)
      }
      static Clamp(DD, zD, wD) {
        const pD = new UD;
        return UD.ClampToRef(DD, zD, wD, pD), pD
      }
      static ClampToRef(DD, zD, wD, pD) {
        let sD = DD._x;
        sD = sD > wD._x ? wD._x : sD, sD = sD < zD._x ? zD._x : sD;
        let KD = DD._y;
        KD = KD > wD._y ? wD._y : KD, KD = KD < zD._y ? zD._y : KD;
        let rD = DD._z;
        return rD = rD > wD._z ? wD._z : rD, rD = rD < zD._z ? zD._z : rD, pD.Z2(sD, KD, rD), pD
      }
      static CheckExtends(DD, zD, wD) {
        zD.minimizeInPlace(DD), wD.maximizeInPlace(DD)
      }
      static Hermite(DD, zD, wD, pD, sD) {
        const KD = sD * sD,
          rD = sD * KD,
          LD = 2 * rD - 3 * KD + 1,
          cD = -2 * rD + 3 * KD,
          gD = rD - 2 * KD + sD,
          RD = rD - KD,
          AD = DD._x * LD + wD._x * cD + zD._x * gD + pD._x * RD,
          fD = DD._y * LD + wD._y * cD + zD._y * gD + pD._y * RD,
          ID = DD._z * LD + wD._z * cD + zD._z * gD + pD._z * RD;
        return new UD(AD, fD, ID)
      }
      static Hermite1stDerivative(DD, zD, wD, pD, sD) {
        const KD = new UD;
        return this.Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD), KD
      }
      static Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD) {
        const rD = sD * sD;
        return KD._x = 6 * (rD - sD) * DD._x + (3 * rD - 4 * sD + 1) * zD._x + 6 * (-rD + sD) * wD._x + (3 * rD - 2 * sD) * pD._x, KD._y = 6 * (rD - sD) * DD._y + (3 * rD - 4 * sD + 1) * zD._y + 6 * (-rD + sD) * wD._y + (3 * rD - 2 * sD) * pD._y, KD._z = 6 * (rD - sD) * DD._z + (3 * rD - 4 * sD + 1) * zD._z + 6 * (-rD + sD) * wD._z + (3 * rD - 2 * sD) * pD._z, KD._isDirty = !0, KD
      }
      static Lerp(DD, zD, wD) {
        const pD = new UD(0, 0, 0);
        return UD.LerpToRef(DD, zD, wD, pD), pD
      }
      static LerpToRef(DD, zD, wD, pD) {
        return pD._x = DD._x + (zD._x - DD._x) * wD, pD._y = DD._y + (zD._y - DD._y) * wD, pD._z = DD._z + (zD._z - DD._z) * wD, pD._isDirty = !0, pD
      }
      static Dot(DD, zD) {
        return DD._x * zD._x + DD._y * zD._y + DD._z * zD._z
      }
      dot(DD) {
        return this._x * DD._x + this._y * DD._y + this._z * DD._z
      }
      static Cross(DD, zD) {
        const wD = new UD;
        return UD.CrossToRef(DD, zD, wD), wD
      }
      static CrossToRef(DD, zD, wD) {
        const pD = DD._y * zD._z - DD._z * zD._y,
          sD = DD._z * zD._x - DD._x * zD._z,
          KD = DD._x * zD._y - DD._y * zD._x;
        return wD.Z2(pD, sD, KD), wD
      }
      static Normalize(DD) {
        const zD = UD.Zero();
        return UD.NormalizeToRef(DD, zD), zD
      }
      static NormalizeToRef(DD, zD) {
        return DD.normalizeToRef(zD), zD
      }
      static Project(DD, zD, wD, pD) {
        const sD = new UD;
        return UD.ProjectToRef(DD, zD, wD, pD, sD), sD
      }
      static ProjectToRef(DD, zD, wD, pD, sD) {
        const KD = pD.width,
          LD = pD.height,
          cD = pD.x,
          gD = pD.y,
          RD = GD.Matrix[1],
          AD = rD.d.LastCreatedEngine?.isNDCHalfZRange,
          fD = AD ? 1 : .5,
          ID = AD ? 0 : .5;
        BD.FromValuesToRef(KD / 2, 0, 0, 0, 0, -LD / 2, 0, 0, 0, 0, fD, 0, cD + KD / 2, LD / 2 + gD, ID, 1, RD);
        const hD = GD.Matrix[0];
        return zD.multiplyToRef(wD, hD), hD.multiplyToRef(RD, hD), UD.TransformCoordinatesToRef(DD, hD, sD), sD
      }
      static Reflect(DD, zD) {
        return this.ReflectToRef(DD, zD, new UD)
      }
      static ReflectToRef(DD, zD, wD) {
        const pD = hD.WI[0];
        return pD.pC(zD).scaleInPlace(2 * UD.Dot(DD, zD)), wD.pC(DD).apD(pD)
      }
      static UnprojectFromTransform(DD, zD, wD, pD, sD) {
        return this.Unproject(DD, zD, wD, pD, sD, BD.IdentityReadOnly)
      }
      static Unproject(DD, zD, wD, pD, sD, KD) {
        const rD = new UD;
        return UD.UnprojectToRef(DD, zD, wD, pD, sD, KD, rD), rD
      }
      static UnprojectToRef(DD, zD, wD, pD, sD, KD, rD) {
        return UD.UnprojectFloatsToRef(DD._x, DD._y, DD._z, zD, wD, pD, sD, KD, rD), rD
      }
      static UnprojectFloatsToRef(DD, zD, wD, pD, sD, KD, LD, cD, gD) {
        const RD = GD.Matrix[0];
        KD.multiplyToRef(LD, RD), RD.multiplyToRef(cD, RD), RD.invert();
        const AD = GD.WI[0];
        return AD.x = DD / pD * 2 - 1, AD.y = -(zD / sD * 2 - 1), rD.d.LastCreatedEngine?.isNDCHalfZRange ? AD.z = wD : AD.z = 2 * wD - 1, UD.TransformCoordinatesToRef(AD, RD, gD), gD
      }
      static Minimize(DD, zD) {
        const wD = new UD;
        return wD.pC(DD), wD.minimizeInPlace(zD), wD
      }
      static Maximize(DD, zD) {
        const wD = new UD;
        return wD.pC(DD), wD.maximizeInPlace(zD), wD
      }
      static Distance(DD, zD) {
        return Math.sqrt(UD.DistanceSquared(DD, zD))
      }
      static DistanceSquared(DD, zD) {
        const wD = DD._x - zD._x,
          pD = DD._y - zD._y,
          sD = DD._z - zD._z;
        return wD * wD + pD * pD + sD * sD
      }
      static ProjectOnTriangleToRef(DD, zD, wD, sD, KD) {
        const rD = GD.WI[0],
          cD = GD.WI[1],
          gD = GD.WI[2],
          RD = GD.WI[3],
          AD = GD.WI[4];
        wD.subtractToRef(zD, rD), sD.subtractToRef(zD, cD), sD.subtractToRef(wD, gD);
        const fD = rD.length(),
          ID = cD.length(),
          BD = gD.length();
        if (fD < pD.b || ID < pD.b || BD < pD.b) return KD.pC(zD), UD.Distance(DD, zD);
        DD.subtractToRef(zD, AD), UD.CrossToRef(rD, cD, RD);
        const hD = RD.length();
        if (hD < pD.b) return KD.pC(zD), UD.Distance(DD, zD);
        RD.normalizeFromLength(hD);
        let nD = AD.length();
        if (nD < pD.b) return KD.pC(zD), 0;
        AD.normalizeFromLength(nD);
        const MD = UD.Dot(RD, AD),
          OD = GD.WI[5],
          JD = GD.WI[6];
        OD.pC(RD).scaleInPlace(-nD * MD), JD.pC(DD).addInPlace(OD);
        const ED = GD.WI[4],
          QD = GD.WI[5],
          XD = GD.WI[7],
          VD = GD.WI[8];
        ED.pC(rD).scaleInPlace(1 / fD), VD.pC(cD).scaleInPlace(1 / ID), ED.addInPlace(VD).scaleInPlace(-1), QD.pC(rD).scaleInPlace(-1 / fD), VD.pC(gD).scaleInPlace(1 / BD), QD.addInPlace(VD).scaleInPlace(-1), XD.pC(gD).scaleInPlace(-1 / BD), VD.pC(cD).scaleInPlace(-1 / ID), XD.addInPlace(VD).scaleInPlace(-1);
        const PD = GD.WI[9];
        let CD;
        PD.pC(JD).apD(zD), UD.CrossToRef(ED, PD, VD), CD = UD.Dot(VD, RD);
        const xD = CD;
        PD.pC(JD).apD(wD), UD.CrossToRef(QD, PD, VD), CD = UD.Dot(VD, RD);
        const TD = CD;
        PD.pC(JD).apD(sD), UD.CrossToRef(XD, PD, VD), CD = UD.Dot(VD, RD);
        const bD = CD,
          jD = GD.WI[10];
        let dD, SD;
        xD > 0 && TD < 0 ? (jD.pC(rD), dD = zD, SD = wD) : TD > 0 && bD < 0 ? (jD.pC(gD), dD = wD, SD = sD) : (jD.pC(cD).scaleInPlace(-1), dD = sD, SD = zD);
        const iD = GD.WI[9],
          lD = GD.WI[4];
        dD.subtractToRef(JD, VD), SD.subtractToRef(JD, iD), UD.CrossToRef(VD, iD, lD);
        if (!(UD.Dot(lD, RD) < 0)) return KD.pC(JD), Math.abs(nD * MD);
        const WD = GD.WI[5];
        UD.CrossToRef(jD, lD, WD), WD.normalize();
        const ND = GD.WI[9];
        ND.pC(dD).apD(JD);
        const ZD = ND.length();
        if (ZD < pD.b) return KD.pC(dD), UD.Distance(DD, dD);
        ND.normalizeFromLength(ZD);
        const yD = UD.Dot(WD, ND),
          kD = GD.WI[7];
        kD.pC(JD).addInPlace(WD.scaleInPlace(ZD * yD)), VD.pC(kD).apD(dD), nD = jD.length(), jD.normalizeFromLength(nD);
        let mD = UD.Dot(VD, jD) / Math.max(nD, pD.b);
        return mD = (0, LD.Clamp)(mD, 0, 1), kD.pC(dD).addInPlace(jD.scaleInPlace(mD * nD)), KD.pC(kD), UD.Distance(DD, kD)
      }
      static Center(DD, zD) {
        return UD.CenterToRef(DD, zD, UD.Zero())
      }
      static CenterToRef(DD, zD, wD) {
        return wD.Z2((DD._x + zD._x) / 2, (DD._y + zD._y) / 2, (DD._z + zD._z) / 2)
      }
      static RotationFromAxis(DD, zD, wD) {
        const pD = new UD;
        return UD.RotationFromAxisToRef(DD, zD, wD, pD), pD
      }
      static RotationFromAxisToRef(DD, zD, wD, pD) {
        const sD = GD.Quaternion[0];
        return ID.RotationQuaternionFromAxisToRef(DD, zD, wD, sD), sD.toEulerAnglesToRef(pD), pD
      }
    }
    UD._V8PerformanceHack = new UD(.5, .5, .5), UD._UpReadOnly = UD.Up(), UD._DownReadOnly = UD.Down(), UD._LeftHandedForwardReadOnly = UD.Forward(!1), UD._RightHandedForwardReadOnly = UD.Forward(!0), UD._LeftHandedBackwardReadOnly = UD.Backward(!1), UD._RightHandedBackwardReadOnly = UD.Backward(!0), UD._RightReadOnly = UD.Right(), UD._LeftReadOnly = UD.Left(), UD._ZeroReadOnly = UD.Zero(), UD._OneReadOnly = UD.One();
    class fD {
      get x() {
        return this._x
      }
      set x(DD) {
        this._x = DD, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(DD) {
        this._y = DD, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(DD) {
        this._z = DD, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(DD) {
        this._w = DD, this._isDirty = !0
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = DD, this._y = zD, this._z = wD, this._w = pD
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let DD = RD(this._x);
        return DD = 397 * DD ^ RD(this._y), DD = 397 * DD ^ RD(this._z), DD = 397 * DD ^ RD(this._w), DD
      }
      QpD() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(DD, zD) {
        return void 0 === zD && (zD = 0), DD[zD] = this._x, DD[zD + 1] = this._y, DD[zD + 2] = this._z, DD[zD + 3] = this._w, this
      }
      cwD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return fD.FromArrayToRef(DD, zD, this), this
      }
      addInPlace(DD) {
        return this.x += DD._x, this.y += DD._y, this.z += DD._z, this.w += DD._w, this
      }
      addInPlaceFromFloats(DD, zD, wD, pD) {
        return this.x += DD, this.y += zD, this.z += wD, this.w += pD, this
      }
      add(DD) {
        return new fD(this._x + DD.x, this._y + DD.y, this._z + DD.z, this._w + DD.w)
      }
      addToRef(DD, zD) {
        return zD.x = this._x + DD.x, zD.y = this._y + DD.y, zD.z = this._z + DD.z, zD.w = this._w + DD.w, zD
      }
      apD(DD) {
        return this.x -= DD.x, this.y -= DD.y, this.z -= DD.z, this.w -= DD.w, this
      }
      subtract(DD) {
        return new fD(this._x - DD.x, this._y - DD.y, this._z - DD.z, this._w - DD.w)
      }
      subtractToRef(DD, zD) {
        return zD.x = this._x - DD.x, zD.y = this._y - DD.y, zD.z = this._z - DD.z, zD.w = this._w - DD.w, zD
      }
      subtractFromFloats(DD, zD, wD, pD) {
        return new fD(this._x - DD, this._y - zD, this._z - wD, this._w - pD)
      }
      subtractFromFloatsToRef(DD, zD, wD, pD, sD) {
        return sD.x = this._x - DD, sD.y = this._y - zD, sD.z = this._z - wD, sD.w = this._w - pD, sD
      }
      ep() {
        return new fD(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(DD) {
        return DD.x = -this._x, DD.y = -this._y, DD.z = -this._z, DD.w = -this._w, DD
      }
      scaleInPlace(DD) {
        return this.x *= DD, this.y *= DD, this.z *= DD, this.w *= DD, this
      }
      scale(DD) {
        return new fD(this._x * DD, this._y * DD, this._z * DD, this._w * DD)
      }
      scaleToRef(DD, zD) {
        return zD.x = this._x * DD, zD.y = this._y * DD, zD.z = this._z * DD, zD.w = this._w * DD, zD
      }
      scaleAndAddToRef(DD, zD) {
        return zD.x += this._x * DD, zD.y += this._y * DD, zD.z += this._z * DD, zD.w += this._w * DD, zD
      }
      equals(DD) {
        return DD && this._x === DD.x && this._y === DD.y && this._z === DD.z && this._w === DD.w
      }
      equalsWithEpsilon(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.b;
        return DD && (0, LD.WithinEpsilon)(this._x, DD.x, zD) && (0, LD.WithinEpsilon)(this._y, DD.y, zD) && (0, LD.WithinEpsilon)(this._z, DD.z, zD) && (0, LD.WithinEpsilon)(this._w, DD.w, zD)
      }
      sLD(DD, zD, wD, pD) {
        return this._x === DD && this._y === zD && this._z === wD && this._w === pD
      }
      multiplyInPlace(DD) {
        return this.x *= DD.x, this.y *= DD.y, this.z *= DD.z, this.w *= DD.w, this
      }
      multiply(DD) {
        return new fD(this._x * DD.x, this._y * DD.y, this._z * DD.z, this._w * DD.w)
      }
      multiplyToRef(DD, zD) {
        return zD.x = this._x * DD.x, zD.y = this._y * DD.y, zD.z = this._z * DD.z, zD.w = this._w * DD.w, zD
      }
      multiplyByFloats(DD, zD, wD, pD) {
        return new fD(this._x * DD, this._y * zD, this._z * wD, this._w * pD)
      }
      divide(DD) {
        return new fD(this._x / DD.x, this._y / DD.y, this._z / DD.z, this._w / DD.w)
      }
      divideToRef(DD, zD) {
        return zD.x = this._x / DD.x, zD.y = this._y / DD.y, zD.z = this._z / DD.z, zD.w = this._w / DD.w, zD
      }
      divideInPlace(DD) {
        return this.divideToRef(DD, this)
      }
      minimizeInPlace(DD) {
        return DD.x < this._x && (this.x = DD.x), DD.y < this._y && (this.y = DD.y), DD.z < this._z && (this.z = DD.z), DD.w < this._w && (this.w = DD.w), this
      }
      maximizeInPlace(DD) {
        return DD.x > this._x && (this.x = DD.x), DD.y > this._y && (this.y = DD.y), DD.z > this._z && (this.z = DD.z), DD.w > this._w && (this.w = DD.w), this
      }
      minimizeInPlaceFromFloats(DD, zD, wD, pD) {
        return this.x = Math.min(DD, this._x), this.y = Math.min(zD, this._y), this.z = Math.min(wD, this._z), this.w = Math.min(pD, this._w), this
      }
      maximizeInPlaceFromFloats(DD, zD, wD, pD) {
        return this.x = Math.max(DD, this._x), this.y = Math.max(zD, this._y), this.z = Math.max(wD, this._z), this.w = Math.max(pD, this._w), this
      }
      floorToRef(DD) {
        return DD.x = Math.floor(this._x), DD.y = Math.floor(this._y), DD.z = Math.floor(this._z), DD.w = Math.floor(this._w), DD
      }
      floor() {
        return new fD(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(DD) {
        return DD.x = this._x - Math.floor(this._x), DD.y = this._y - Math.floor(this._y), DD.z = this._z - Math.floor(this._z), DD.w = this._w - Math.floor(this._w), DD
      }
      fract() {
        return new fD(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(DD) {
        return 0 === DD || 1 === DD ? this : this.scaleInPlace(1 / DD)
      }
      normalizeToNew() {
        return this.normalizeToRef(new fD)
      }
      normalizeToRef(DD) {
        const zD = this.length();
        return 0 === zD || 1 === zD ? (DD.x = this._x, DD.y = this._y, DD.z = this._z, DD.w = this._w, DD) : this.scaleToRef(1 / zD, DD)
      }
      toVector3() {
        return new UD(this._x, this._y, this._z)
      }
      clone() {
        return new fD(this._x, this._y, this._z, this._w)
      }
      pC(DD) {
        return this.x = DD.x, this.y = DD.y, this.z = DD.z, this.w = DD.w, this
      }
      Z2(DD, zD, wD, pD) {
        return this.x = DD, this.y = zD, this.z = wD, this.w = pD, this
      }
      set(DD, zD, wD, pD) {
        return this.Z2(DD, zD, wD, pD)
      }
      I9(DD) {
        return this.x = this.y = this.z = this.w = DD, this
      }
      dot(DD) {
        return this._x * DD.x + this._y * DD.y + this._z * DD.z + this._w * DD.w
      }
      static FromArray(DD, zD) {
        return zD || (zD = 0), new fD(DD[zD], DD[zD + 1], DD[zD + 2], DD[zD + 3])
      }
      static FromArrayToRef(DD, zD, wD) {
        return wD.x = DD[zD], wD.y = DD[zD + 1], wD.z = DD[zD + 2], wD.w = DD[zD + 3], wD
      }
      static FromFloatArrayToRef(DD, zD, wD) {
        return fD.FromArrayToRef(DD, zD, wD), wD
      }
      static FromFloatsToRef(DD, zD, wD, pD, sD) {
        return sD.x = DD, sD.y = zD, sD.z = wD, sD.w = pD, sD
      }
      static Zero() {
        return new fD(0, 0, 0, 0)
      }
      static One() {
        return new fD(1, 1, 1, 1)
      }
      static Random() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new fD((0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD))
      }
      static RandomToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        return wD.x = (0, LD.RandomRange)(DD, zD), wD.y = (0, LD.RandomRange)(DD, zD), wD.z = (0, LD.RandomRange)(DD, zD), wD.w = (0, LD.RandomRange)(DD, zD), wD
      }
      static Clamp(DD, zD, wD) {
        return fD.ClampToRef(DD, zD, wD, new fD)
      }
      static ClampToRef(DD, zD, wD, pD) {
        return pD.x = (0, LD.Clamp)(DD.x, zD.x, wD.x), pD.y = (0, LD.Clamp)(DD.y, zD.y, wD.y), pD.z = (0, LD.Clamp)(DD.z, zD.z, wD.z), pD.w = (0, LD.Clamp)(DD.w, zD.w, wD.w), pD
      }
      static CheckExtends(DD, zD, wD) {
        zD.minimizeInPlace(DD), wD.maximizeInPlace(DD)
      }
      static get ZeroReadOnly() {
        return fD._ZeroReadOnly
      }
      static Normalize(DD) {
        return fD.NormalizeToRef(DD, new fD)
      }
      static NormalizeToRef(DD, zD) {
        return DD.normalizeToRef(zD), zD
      }
      static Minimize(DD, zD) {
        const wD = new fD;
        return wD.pC(DD), wD.minimizeInPlace(zD), wD
      }
      static Maximize(DD, zD) {
        const wD = new fD;
        return wD.pC(DD), wD.maximizeInPlace(zD), wD
      }
      static Distance(DD, zD) {
        return Math.sqrt(fD.DistanceSquared(DD, zD))
      }
      static DistanceSquared(DD, zD) {
        const wD = DD.x - zD.x,
          pD = DD.y - zD.y,
          sD = DD.z - zD.z,
          KD = DD.w - zD.w;
        return wD * wD + pD * pD + sD * sD + KD * KD
      }
      static Center(DD, zD) {
        return fD.CenterToRef(DD, zD, new fD)
      }
      static CenterToRef(DD, zD, wD) {
        return wD.x = (DD.x + zD.x) / 2, wD.y = (DD.y + zD.y) / 2, wD.z = (DD.z + zD.z) / 2, wD.w = (DD.w + zD.w) / 2, wD
      }
      static TransformCoordinates(DD, zD) {
        return fD.TransformCoordinatesToRef(DD, zD, new fD)
      }
      static TransformCoordinatesToRef(DD, zD, wD) {
        return fD.TransformCoordinatesFromFloatsToRef(DD._x, DD._y, DD._z, zD, wD), wD
      }
      static TransformCoordinatesFromFloatsToRef(DD, zD, wD, pD, sD) {
        const KD = pD.m,
          rD = DD * KD[0] + zD * KD[4] + wD * KD[8] + KD[12],
          LD = DD * KD[1] + zD * KD[5] + wD * KD[9] + KD[13],
          cD = DD * KD[2] + zD * KD[6] + wD * KD[10] + KD[14],
          gD = DD * KD[3] + zD * KD[7] + wD * KD[11] + KD[15];
        return sD.x = rD, sD.y = LD, sD.z = cD, sD.w = gD, sD
      }
      static TransformNormal(DD, zD) {
        return fD.TransformNormalToRef(DD, zD, new fD)
      }
      static TransformNormalToRef(DD, zD, wD) {
        const pD = zD.m,
          sD = DD.x * pD[0] + DD.y * pD[4] + DD.z * pD[8],
          KD = DD.x * pD[1] + DD.y * pD[5] + DD.z * pD[9],
          rD = DD.x * pD[2] + DD.y * pD[6] + DD.z * pD[10];
        return wD.x = sD, wD.y = KD, wD.z = rD, wD.w = DD.w, wD
      }
      static TransformNormalFromFloatsToRef(DD, zD, wD, pD, sD, KD) {
        const rD = sD.m;
        return KD.x = DD * rD[0] + zD * rD[4] + wD * rD[8], KD.y = DD * rD[1] + zD * rD[5] + wD * rD[9], KD.z = DD * rD[2] + zD * rD[6] + wD * rD[10], KD.w = pD, KD
      }
      static FromVector3(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new fD(DD._x, DD._y, DD._z, zD)
      }
      static Dot(DD, zD) {
        return DD.x * zD.x + DD.y * zD.y + DD.z * zD.z + DD.w * zD.w
      }
    }
    fD._V8PerformanceHack = new fD(.5, .5, .5, .5), fD._ZeroReadOnly = fD.Zero();
    class ID {
      get x() {
        return this._x
      }
      set x(DD) {
        this._x = DD, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(DD) {
        this._y = DD, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(DD) {
        this._z = DD, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(DD) {
        this._w = DD, this._isDirty = !0
      }
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = DD, this._y = zD, this._z = wD, this._w = pD
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let DD = RD(this._x);
        return DD = 397 * DD ^ RD(this._y), DD = 397 * DD ^ RD(this._z), DD = 397 * DD ^ RD(this._w), DD
      }
      QpD() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[zD] = this._x, DD[zD + 1] = this._y, DD[zD + 2] = this._z, DD[zD + 3] = this._w, this
      }
      cwD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ID.FromArrayToRef(DD, zD, this)
      }
      equals(DD) {
        return DD && this._x === DD._x && this._y === DD._y && this._z === DD._z && this._w === DD._w
      }
      equalsWithEpsilon(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.b;
        return DD && (0, LD.WithinEpsilon)(this._x, DD._x, zD) && (0, LD.WithinEpsilon)(this._y, DD._y, zD) && (0, LD.WithinEpsilon)(this._z, DD._z, zD) && (0, LD.WithinEpsilon)(this._w, DD._w, zD)
      }
      isApprox(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.b;
        return DD && ((0, LD.WithinEpsilon)(this._x, DD._x, zD) && (0, LD.WithinEpsilon)(this._y, DD._y, zD) && (0, LD.WithinEpsilon)(this._z, DD._z, zD) && (0, LD.WithinEpsilon)(this._w, DD._w, zD) || (0, LD.WithinEpsilon)(this._x, -DD._x, zD) && (0, LD.WithinEpsilon)(this._y, -DD._y, zD) && (0, LD.WithinEpsilon)(this._z, -DD._z, zD) && (0, LD.WithinEpsilon)(this._w, -DD._w, zD))
      }
      clone() {
        return new ID(this._x, this._y, this._z, this._w)
      }
      pC(DD) {
        return this._x = DD._x, this._y = DD._y, this._z = DD._z, this._w = DD._w, this._isDirty = !0, this
      }
      Z2(DD, zD, wD, pD) {
        return this._x = DD, this._y = zD, this._z = wD, this._w = pD, this._isDirty = !0, this
      }
      set(DD, zD, wD, pD) {
        return this.Z2(DD, zD, wD, pD)
      }
      I9(DD) {
        return this.Z2(DD, DD, DD, DD)
      }
      add(DD) {
        return new ID(this._x + DD._x, this._y + DD._y, this._z + DD._z, this._w + DD._w)
      }
      addInPlace(DD) {
        return this._x += DD._x, this._y += DD._y, this._z += DD._z, this._w += DD._w, this._isDirty = !0, this
      }
      addToRef(DD, zD) {
        return zD._x = this._x + DD._x, zD._y = this._y + DD._y, zD._z = this._z + DD._z, zD._w = this._w + DD._w, zD._isDirty = !0, zD
      }
      addInPlaceFromFloats(DD, zD, wD, pD) {
        return this._x += DD, this._y += zD, this._z += wD, this._w += pD, this._isDirty = !0, this
      }
      subtractToRef(DD, zD) {
        return zD._x = this._x - DD._x, zD._y = this._y - DD._y, zD._z = this._z - DD._z, zD._w = this._w - DD._w, zD._isDirty = !0, zD
      }
      subtractFromFloats(DD, zD, wD, pD) {
        return this.subtractFromFloatsToRef(DD, zD, wD, pD, new ID)
      }
      subtractFromFloatsToRef(DD, zD, wD, pD, sD) {
        return sD._x = this._x - DD, sD._y = this._y - zD, sD._z = this._z - wD, sD._w = this._w - pD, sD._isDirty = !0, sD
      }
      subtract(DD) {
        return new ID(this._x - DD._x, this._y - DD._y, this._z - DD._z, this._w - DD._w)
      }
      apD(DD) {
        return this._x -= DD._x, this._y -= DD._y, this._z -= DD._z, this._w -= DD._w, this._isDirty = !0, this
      }
      scale(DD) {
        return new ID(this._x * DD, this._y * DD, this._z * DD, this._w * DD)
      }
      scaleToRef(DD, zD) {
        return zD._x = this._x * DD, zD._y = this._y * DD, zD._z = this._z * DD, zD._w = this._w * DD, zD._isDirty = !0, zD
      }
      scaleInPlace(DD) {
        return this._x *= DD, this._y *= DD, this._z *= DD, this._w *= DD, this._isDirty = !0, this
      }
      scaleAndAddToRef(DD, zD) {
        return zD._x += this._x * DD, zD._y += this._y * DD, zD._z += this._z * DD, zD._w += this._w * DD, zD._isDirty = !0, zD
      }
      multiply(DD) {
        const zD = new ID(0, 0, 0, 1);
        return this.multiplyToRef(DD, zD), zD
      }
      multiplyToRef(DD, zD) {
        const wD = this._x * DD._w + this._y * DD._z - this._z * DD._y + this._w * DD._x,
          pD = -this._x * DD._z + this._y * DD._w + this._z * DD._x + this._w * DD._y,
          sD = this._x * DD._y - this._y * DD._x + this._z * DD._w + this._w * DD._z,
          KD = -this._x * DD._x - this._y * DD._y - this._z * DD._z + this._w * DD._w;
        return zD.Z2(wD, pD, sD, KD), zD
      }
      multiplyInPlace(DD) {
        return this.multiplyToRef(DD, this)
      }
      multiplyByFloats(DD, zD, wD, pD) {
        return this._x *= DD, this._y *= zD, this._z *= wD, this._w *= pD, this._isDirty = !0, this
      }
      divide(DD) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(DD, zD) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(DD) {
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
      ep() {
        return this.negateToRef(new ID)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(DD) {
        return DD._x = -this._x, DD._y = -this._y, DD._z = -this._z, DD._w = -this._w, DD._isDirty = !0, DD
      }
      sLD(DD, zD, wD, pD) {
        return this._x === DD && this._y === zD && this._z === wD && this._w === pD
      }
      floorToRef(DD) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(DD) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(DD) {
        return DD.Z2(-this._x, -this._y, -this._z, this._w), DD
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new ID(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const DD = this.conjugate(),
          zD = this.lengthSquared();
        return 0 == zD || 1 == zD || DD.scaleInPlace(1 / zD), DD
      }
      invertInPlace() {
        this.conjugateInPlace();
        const DD = this.lengthSquared();
        return 0 == DD || 1 == DD || this.scaleInPlace(1 / DD), this
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
      normalizeFromLength(DD) {
        return 0 === DD || 1 === DD ? this : this.scaleInPlace(1 / DD)
      }
      normalizeToNew() {
        const DD = new ID(0, 0, 0, 1);
        return this.normalizeToRef(DD), DD
      }
      normalizeToRef(DD) {
        const zD = this.length();
        return 0 === zD || 1 === zD ? DD.Z2(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / zD, DD)
      }
      toEulerAngles() {
        const DD = UD.Zero();
        return this.toEulerAnglesToRef(DD), DD
      }
      toEulerAnglesToRef(DD) {
        const zD = this._z,
          wD = this._x,
          pD = this._y,
          sD = this._w,
          KD = pD * zD - wD * sD,
          rD = .4999999;
        if (KD < -rD) DD._y = 2 * Math.atan2(pD, sD), DD._x = Math.PI / 2, DD._z = 0, DD._isDirty = !0;
        else if (KD > rD) DD._y = 2 * Math.atan2(pD, sD), DD._x = -Math.PI / 2, DD._z = 0, DD._isDirty = !0;
        else {
          const rD = sD * sD,
            LD = zD * zD,
            cD = wD * wD,
            gD = pD * pD;
          DD._z = Math.atan2(2 * (wD * pD + zD * sD), -LD - cD + gD + rD), DD._x = Math.asin(-2 * KD), DD._y = Math.atan2(2 * (zD * wD + pD * sD), LD - cD - gD + rD), DD._isDirty = !0
        }
        return DD
      }
      toAlphaBetaGammaToRef(DD) {
        const zD = this._z,
          wD = this._x,
          pD = this._y,
          sD = this._w,
          KD = Math.sqrt(wD * wD + pD * pD),
          rD = Math.sqrt(zD * zD + sD * sD),
          LD = 2 * Math.atan2(KD, rD),
          cD = 2 * Math.atan2(zD, sD),
          gD = 2 * Math.atan2(pD, wD),
          RD = (cD + gD) / 2,
          AD = (cD - gD) / 2;
        return DD.set(AD, LD, RD), DD
      }
      toRotationMatrix(DD) {
        return BD.FromQuaternionToRef(this, DD), DD
      }
      fromRotationMatrix(DD) {
        return ID.FromRotationMatrixToRef(DD, this), this
      }
      dot(DD) {
        return this._x * DD._x + this._y * DD._y + this._z * DD._z + this._w * DD._w
      }
      toAxisAngle() {
        const DD = UD.Zero();
        return {
          axis: DD,
          angle: this.toAxisAngleToRef(DD)
        }
      }
      toAxisAngleToRef(DD) {
        let zD;
        const wD = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          pD = this._w;
        return wD > 0 ? (zD = 2 * Math.atan2(wD, pD), DD.set(this._x / wD, this._y / wD, this._z / wD)) : (zD = 0, DD.set(1, 0, 0)), zD
      }
      static FromRotationMatrix(DD) {
        const zD = new ID;
        return ID.FromRotationMatrixToRef(DD, zD), zD
      }
      static FromRotationMatrixToRef(DD, zD) {
        const wD = DD.m,
          pD = wD[0],
          sD = wD[4],
          KD = wD[8],
          rD = wD[1],
          LD = wD[5],
          cD = wD[9],
          gD = wD[2],
          RD = wD[6],
          AD = wD[10],
          UD = pD + LD + AD;
        let fD;
        return UD > 0 ? (fD = .5 / Math.sqrt(UD + 1), zD._w = .25 / fD, zD._x = (RD - cD) * fD, zD._y = (KD - gD) * fD, zD._z = (rD - sD) * fD, zD._isDirty = !0) : pD > LD && pD > AD ? (fD = 2 * Math.sqrt(1 + pD - LD - AD), zD._w = (RD - cD) / fD, zD._x = .25 * fD, zD._y = (sD + rD) / fD, zD._z = (KD + gD) / fD, zD._isDirty = !0) : LD > AD ? (fD = 2 * Math.sqrt(1 + LD - pD - AD), zD._w = (KD - gD) / fD, zD._x = (sD + rD) / fD, zD._y = .25 * fD, zD._z = (cD + RD) / fD, zD._isDirty = !0) : (fD = 2 * Math.sqrt(1 + AD - pD - LD), zD._w = (rD - sD) / fD, zD._x = (KD + gD) / fD, zD._y = (cD + RD) / fD, zD._z = .25 * fD, zD._isDirty = !0), zD
      }
      static Dot(DD, zD) {
        return DD._x * zD._x + DD._y * zD._y + DD._z * zD._z + DD._w * zD._w
      }
      static AreClose(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const pD = ID.Dot(DD, zD);
        return 1 - pD * pD <= wD
      }
      static SmoothToRef(DD, zD, wD, pD, sD) {
        let KD = 0 === pD ? 1 : wD / pD;
        return KD = (0, LD.Clamp)(KD, 0, 1), ID.SlerpToRef(DD, zD, KD, sD), sD
      }
      static Zero() {
        return new ID(0, 0, 0, 0)
      }
      static Inverse(DD) {
        return new ID(-DD._x, -DD._y, -DD._z, DD._w)
      }
      static InverseToRef(DD, zD) {
        return zD.set(-DD._x, -DD._y, -DD._z, DD._w), zD
      }
      static Identity() {
        return new ID(0, 0, 0, 1)
      }
      static IsIdentity(DD) {
        return DD && 0 === DD._x && 0 === DD._y && 0 === DD._z && 1 === DD._w
      }
      static RotationAxis(DD, zD) {
        return ID.RotationAxisToRef(DD, zD, new ID)
      }
      static RotationAxisToRef(DD, zD, wD) {
        wD._w = Math.cos(zD / 2);
        const pD = Math.sin(zD / 2) / DD.length();
        return wD._x = DD._x * pD, wD._y = DD._y * pD, wD._z = DD._z * pD, wD._isDirty = !0, wD
      }
      static FromArray(DD, zD) {
        return zD || (zD = 0), new ID(DD[zD], DD[zD + 1], DD[zD + 2], DD[zD + 3])
      }
      static FromArrayToRef(DD, zD, wD) {
        return wD._x = DD[zD], wD._y = DD[zD + 1], wD._z = DD[zD + 2], wD._w = DD[zD + 3], wD._isDirty = !0, wD
      }
      static FromFloatsToRef(DD, zD, wD, pD, sD) {
        return sD.Z2(DD, zD, wD, pD), sD
      }
      static FromEulerAngles(DD, zD, wD) {
        const pD = new ID;
        return ID.RotationYawPitchRollToRef(zD, DD, wD, pD), pD
      }
      static FromEulerAnglesToRef(DD, zD, wD, pD) {
        return ID.RotationYawPitchRollToRef(zD, DD, wD, pD), pD
      }
      static FromEulerVector(DD) {
        const zD = new ID;
        return ID.RotationYawPitchRollToRef(DD._y, DD._x, DD._z, zD), zD
      }
      static FromEulerVectorToRef(DD, zD) {
        return ID.RotationYawPitchRollToRef(DD._y, DD._x, DD._z, zD), zD
      }
      static FromUnitVectorsToRef(DD, zD, wD) {
        let sD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pD.b;
        const KD = UD.Dot(DD, zD) + 1;
        return KD < sD ? Math.abs(DD.x) > Math.abs(DD.z) ? wD.set(-DD.y, DD.x, 0, 0) : wD.set(0, -DD.z, DD.y, 0) : (UD.CrossToRef(DD, zD, hD.WI[0]), wD.set(hD.WI[0].x, hD.WI[0].y, hD.WI[0].z, KD)), wD.normalize()
      }
      static RotationYawPitchRoll(DD, zD, wD) {
        const pD = new ID;
        return ID.RotationYawPitchRollToRef(DD, zD, wD, pD), pD
      }
      static RotationYawPitchRollToRef(DD, zD, wD, pD) {
        const sD = .5 * wD,
          KD = .5 * zD,
          rD = .5 * DD,
          LD = Math.sin(sD),
          cD = Math.cos(sD),
          gD = Math.sin(KD),
          RD = Math.cos(KD),
          AD = Math.sin(rD),
          UD = Math.cos(rD);
        return pD._x = UD * gD * cD + AD * RD * LD, pD._y = AD * RD * cD - UD * gD * LD, pD._z = UD * RD * LD - AD * gD * cD, pD._w = UD * RD * cD + AD * gD * LD, pD._isDirty = !0, pD
      }
      static RotationAlphaBetaGamma(DD, zD, wD) {
        const pD = new ID;
        return ID.RotationAlphaBetaGammaToRef(DD, zD, wD, pD), pD
      }
      static RotationAlphaBetaGammaToRef(DD, zD, wD, pD) {
        const sD = .5 * (wD + DD),
          KD = .5 * (wD - DD),
          rD = .5 * zD;
        return pD._x = Math.cos(KD) * Math.sin(rD), pD._y = Math.sin(KD) * Math.sin(rD), pD._z = Math.sin(sD) * Math.cos(rD), pD._w = Math.cos(sD) * Math.cos(rD), pD._isDirty = !0, pD
      }
      static RotationQuaternionFromAxis(DD, zD, wD) {
        const pD = new ID(0, 0, 0, 0);
        return ID.RotationQuaternionFromAxisToRef(DD, zD, wD, pD), pD
      }
      static RotationQuaternionFromAxisToRef(DD, zD, wD, pD) {
        const sD = GD.Matrix[0];
        return DD = DD.normalizeToRef(GD.WI[0]), zD = zD.normalizeToRef(GD.WI[1]), wD = wD.normalizeToRef(GD.WI[2]), BD.FromXYZAxesToRef(DD, zD, wD, sD), ID.FromRotationMatrixToRef(sD, pD), pD
      }
      static FromLookDirectionLH(DD, zD) {
        const wD = new ID;
        return ID.FromLookDirectionLHToRef(DD, zD, wD), wD
      }
      static FromLookDirectionLHToRef(DD, zD, wD) {
        const pD = GD.Matrix[0];
        return BD.LookDirectionLHToRef(DD, zD, pD), ID.FromRotationMatrixToRef(pD, wD), wD
      }
      static FromLookDirectionRH(DD, zD) {
        const wD = new ID;
        return ID.FromLookDirectionRHToRef(DD, zD, wD), wD
      }
      static FromLookDirectionRHToRef(DD, zD, wD) {
        const pD = GD.Matrix[0];
        return BD.LookDirectionRHToRef(DD, zD, pD), ID.FromRotationMatrixToRef(pD, wD)
      }
      static Slerp(DD, zD, wD) {
        const pD = ID.Identity();
        return ID.SlerpToRef(DD, zD, wD, pD), pD
      }
      static SlerpToRef(DD, zD, wD, pD) {
        let sD, KD, rD = DD._x * zD._x + DD._y * zD._y + DD._z * zD._z + DD._w * zD._w,
          LD = !1;
        if (rD < 0 && (LD = !0, rD = -rD), rD > .999999) KD = 1 - wD, sD = LD ? -wD : wD;
        else {
          const DD = Math.acos(rD),
            zD = 1 / Math.sin(DD);
          KD = Math.sin((1 - wD) * DD) * zD, sD = LD ? -Math.sin(wD * DD) * zD : Math.sin(wD * DD) * zD
        }
        return pD._x = KD * DD._x + sD * zD._x, pD._y = KD * DD._y + sD * zD._y, pD._z = KD * DD._z + sD * zD._z, pD._w = KD * DD._w + sD * zD._w, pD._isDirty = !0, pD
      }
      static Hermite(DD, zD, wD, pD, sD) {
        const KD = sD * sD,
          rD = sD * KD,
          LD = 2 * rD - 3 * KD + 1,
          cD = -2 * rD + 3 * KD,
          gD = rD - 2 * KD + sD,
          RD = rD - KD,
          AD = DD._x * LD + wD._x * cD + zD._x * gD + pD._x * RD,
          UD = DD._y * LD + wD._y * cD + zD._y * gD + pD._y * RD,
          fD = DD._z * LD + wD._z * cD + zD._z * gD + pD._z * RD,
          BD = DD._w * LD + wD._w * cD + zD._w * gD + pD._w * RD;
        return new ID(AD, UD, fD, BD)
      }
      static Hermite1stDerivative(DD, zD, wD, pD, sD) {
        const KD = new ID;
        return this.Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD), KD
      }
      static Hermite1stDerivativeToRef(DD, zD, wD, pD, sD, KD) {
        const rD = sD * sD;
        return KD._x = 6 * (rD - sD) * DD._x + (3 * rD - 4 * sD + 1) * zD._x + 6 * (-rD + sD) * wD._x + (3 * rD - 2 * sD) * pD._x, KD._y = 6 * (rD - sD) * DD._y + (3 * rD - 4 * sD + 1) * zD._y + 6 * (-rD + sD) * wD._y + (3 * rD - 2 * sD) * pD._y, KD._z = 6 * (rD - sD) * DD._z + (3 * rD - 4 * sD + 1) * zD._z + 6 * (-rD + sD) * wD._z + (3 * rD - 2 * sD) * pD._z, KD._w = 6 * (rD - sD) * DD._w + (3 * rD - 4 * sD + 1) * zD._w + 6 * (-rD + sD) * wD._w + (3 * rD - 2 * sD) * pD._w, KD._isDirty = !0, KD
      }
      static Normalize(DD) {
        const zD = ID.Zero();
        return ID.NormalizeToRef(DD, zD), zD
      }
      static NormalizeToRef(DD, zD) {
        return DD.normalizeToRef(zD), zD
      }
      static Clamp(DD, zD, wD) {
        const pD = new ID;
        return ID.ClampToRef(DD, zD, wD, pD), pD
      }
      static ClampToRef(DD, zD, wD, pD) {
        return pD.Z2((0, LD.Clamp)(DD.x, zD.x, wD.x), (0, LD.Clamp)(DD.y, zD.y, wD.y), (0, LD.Clamp)(DD.z, zD.z, wD.z), (0, LD.Clamp)(DD.w, zD.w, wD.w))
      }
      static Random() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ID((0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD))
      }
      static RandomToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z2((0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD), (0, LD.RandomRange)(DD, zD))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(DD, zD) {
        return Math.sqrt(ID.DistanceSquared(DD, zD))
      }
      static DistanceSquared(DD, zD) {
        const wD = DD.x - zD.x,
          pD = DD.y - zD.y,
          sD = DD.z - zD.z,
          KD = DD.w - zD.w;
        return wD * wD + pD * pD + sD * sD + KD * KD
      }
      static Center(DD, zD) {
        return ID.CenterToRef(DD, zD, ID.Zero())
      }
      static CenterToRef(DD, zD, wD) {
        return wD.Z2((DD.x + zD.x) / 2, (DD.y + zD.y) / 2, (DD.z + zD.z) / 2, (DD.w + zD.w) / 2)
      }
    }
    ID._V8PerformanceHack = new ID(.5, .5, .5, .5);
    class BD {
      static get Use64Bits() {
        return KD.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = cD.n._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          pD = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = DD, this._isIdentity3x2 = DD || wD, this._isIdentityDirty = !this._isIdentity && zD, this._isIdentity3x2Dirty = !this._isIdentity3x2 && pD
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, KD.d.MatrixTrackPrecisionChange && KD.d.MatrixTrackedMatrices.push(this), this._m = new KD.d.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const DD = this._m;
          this._isIdentity = 1 === DD[0] && 0 === DD[1] && 0 === DD[2] && 0 === DD[3] && 0 === DD[4] && 1 === DD[5] && 0 === DD[6] && 0 === DD[7] && 0 === DD[8] && 0 === DD[9] && 1 === DD[10] && 0 === DD[11] && 0 === DD[12] && 0 === DD[13] && 0 === DD[14] && 1 === DD[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const DD = this._m,
          zD = DD[0],
          wD = DD[1],
          pD = DD[2],
          sD = DD[3],
          KD = DD[4],
          rD = DD[5],
          LD = DD[6],
          cD = DD[7],
          gD = DD[8],
          RD = DD[9],
          AD = DD[10],
          UD = DD[11],
          fD = DD[12],
          ID = DD[13],
          BD = DD[14],
          GD = DD[15],
          hD = AD * GD - BD * UD,
          nD = RD * GD - ID * UD,
          MD = RD * BD - ID * AD,
          OD = gD * GD - fD * UD,
          JD = gD * BD - AD * fD,
          ED = gD * ID - fD * RD;
        return zD * +(rD * hD - LD * nD + cD * MD) + wD * -(KD * hD - LD * OD + cD * JD) + pD * +(KD * nD - rD * OD + cD * ED) + sD * -(KD * MD - rD * JD + LD * ED)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!DD) return this._m;
        const wD = this._m;
        for (let pD = 0; pD < 16; pD++) DD[zD + pD] = wD[pD];
        return this
      }
      QpD() {
        return this._m
      }
      cwD(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BD.FromArrayToRef(DD, zD, this)
      }
      Z2() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        return BD.FromArrayToRef(zD, 0, this)
      }
      set() {
        const DD = this._m;
        for (let zD = 0; zD < 16; zD++) DD[zD] = zD < 0 || arguments.length <= zD ? void 0 : arguments[zD];
        return this.markAsUpdated(), this
      }
      I9(DD) {
        const zD = this._m;
        for (let wD = 0; wD < 16; wD++) zD[wD] = DD;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return BD.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(DD) {
        const zD = new BD;
        return this.addToRef(DD, zD), zD
      }
      addToRef(DD, zD) {
        const wD = this._m,
          pD = zD._m,
          sD = DD.m;
        for (let KD = 0; KD < 16; KD++) pD[KD] = wD[KD] + sD[KD];
        return zD.markAsUpdated(), zD
      }
      addToSelf(DD) {
        const zD = this._m,
          wD = DD.m;
        return zD[0] += wD[0], zD[1] += wD[1], zD[2] += wD[2], zD[3] += wD[3], zD[4] += wD[4], zD[5] += wD[5], zD[6] += wD[6], zD[7] += wD[7], zD[8] += wD[8], zD[9] += wD[9], zD[10] += wD[10], zD[11] += wD[11], zD[12] += wD[12], zD[13] += wD[13], zD[14] += wD[14], zD[15] += wD[15], this.markAsUpdated(), this
      }
      addInPlace(DD) {
        const zD = this._m,
          wD = DD.m;
        for (let pD = 0; pD < 16; pD++) zD[pD] += wD[pD];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const DD = this._m;
        for (let zD = 0; zD < 16; zD++) DD[zD] += zD < 0 || arguments.length <= zD ? void 0 : arguments[zD];
        return this.markAsUpdated(), this
      }
      subtract(DD) {
        const zD = this._m,
          wD = DD.m;
        for (let pD = 0; pD < 16; pD++) zD[pD] -= wD[pD];
        return this.markAsUpdated(), this
      }
      subtractToRef(DD, zD) {
        const wD = this._m,
          pD = DD.m,
          sD = zD._m;
        for (let KD = 0; KD < 16; KD++) sD[KD] = wD[KD] - pD[KD];
        return zD.markAsUpdated(), zD
      }
      apD(DD) {
        const zD = this._m,
          wD = DD.m;
        for (let pD = 0; pD < 16; pD++) zD[pD] -= wD[pD];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        return this.subtractFromFloatsToRef(...zD, new BD)
      }
      subtractFromFloatsToRef() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        const pD = zD.pop(),
          sD = this._m,
          KD = pD._m,
          rD = zD;
        for (let LD = 0; LD < 16; LD++) KD[LD] = sD[LD] - rD[LD];
        return pD.markAsUpdated(), pD
      }
      invertToRef(DD) {
        return !0 === this._isIdentity ? (BD.IdentityToRef(DD), DD) : ((0, cD.h)(this, DD.QpD()) ? DD.markAsUpdated() : DD.pC(this), DD)
      }
      addAtIndex(DD, zD) {
        return this._m[DD] += zD, this.markAsUpdated(), this
      }
      multiplyAtIndex(DD, zD) {
        return this._m[DD] *= zD, this.markAsUpdated(), this
      }
      setTranslationFromFloats(DD, zD, wD) {
        return this._m[12] = DD, this._m[13] = zD, this._m[14] = wD, this.markAsUpdated(), this
      }
      addTranslationFromFloats(DD, zD, wD) {
        return this._m[12] += DD, this._m[13] += zD, this._m[14] += wD, this.markAsUpdated(), this
      }
      setTranslation(DD) {
        return this.setTranslationFromFloats(DD._x, DD._y, DD._z)
      }
      getTranslation() {
        return new UD(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(DD) {
        return DD.x = this._m[12], DD.y = this._m[13], DD.z = this._m[14], DD
      }
      removeRotationAndScaling() {
        const DD = this.m;
        return BD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, DD[12], DD[13], DD[14], DD[15], this), this._updateIdentityStatus(0 === DD[12] && 0 === DD[13] && 0 === DD[14] && 1 === DD[15]), this
      }
      pC(DD) {
        DD.copyToArray(this._m);
        const zD = DD;
        return this.updateFlag = zD.updateFlag, this._updateIdentityStatus(zD._isIdentity, zD._isIdentityDirty, zD._isIdentity3x2, zD._isIdentity3x2Dirty), this
      }
      copyToArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, cD.e)(this, DD, zD), this
      }
      multiply(DD) {
        const zD = new BD;
        return this.multiplyToRef(DD, zD), zD
      }
      multiplyInPlace(DD) {
        const zD = this._m,
          wD = DD.m;
        for (let pD = 0; pD < 16; pD++) zD[pD] *= wD[pD];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const DD = this._m;
        for (let zD = 0; zD < 16; zD++) DD[zD] *= zD < 0 || arguments.length <= zD ? void 0 : arguments[zD];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        const pD = zD.pop(),
          sD = this._m,
          KD = pD._m,
          rD = zD;
        for (let LD = 0; LD < 16; LD++) KD[LD] = sD[LD] * rD[LD];
        return pD.markAsUpdated(), pD
      }
      multiplyToRef(DD, zD) {
        return this._isIdentity ? (zD.pC(DD), zD) : DD._isIdentity ? (zD.pC(this), zD) : (this.multiplyToArray(DD, zD._m, 0), zD.markAsUpdated(), zD)
      }
      multiplyToArray(DD, zD, wD) {
        return (0, cD.r)(this, DD, zD, wD), this
      }
      divide(DD) {
        return this.divideToRef(DD, new BD)
      }
      divideToRef(DD, zD) {
        const wD = this._m,
          pD = DD.m,
          sD = zD._m;
        for (let KD = 0; KD < 16; KD++) sD[KD] = wD[KD] / pD[KD];
        return zD.markAsUpdated(), zD
      }
      divideInPlace(DD) {
        const zD = this._m,
          wD = DD.m;
        for (let pD = 0; pD < 16; pD++) zD[pD] /= wD[pD];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(DD) {
        const zD = this._m,
          wD = DD.m;
        for (let pD = 0; pD < 16; pD++) zD[pD] = Math.min(zD[pD], wD[pD]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const DD = this._m;
        for (let zD = 0; zD < 16; zD++) DD[zD] = Math.min(DD[zD], zD < 0 || arguments.length <= zD ? void 0 : arguments[zD]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(DD) {
        const zD = this._m,
          wD = DD.m;
        for (let pD = 0; pD < 16; pD++) zD[pD] = Math.max(zD[pD], wD[pD]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const DD = this._m;
        for (let zD = 0; zD < 16; zD++) DD[zD] = Math.max(DD[zD], zD < 0 || arguments.length <= zD ? void 0 : arguments[zD]);
        return this.markAsUpdated(), this
      }
      ep() {
        return this.negateToRef(new BD)
      }
      negateInPlace() {
        const DD = this._m;
        for (let zD = 0; zD < 16; zD++) DD[zD] = -DD[zD];
        return this.markAsUpdated(), this
      }
      negateToRef(DD) {
        const zD = this._m,
          wD = DD._m;
        for (let pD = 0; pD < 16; pD++) wD[pD] = -zD[pD];
        return DD.markAsUpdated(), DD
      }
      equals(DD) {
        const zD = DD;
        if (!zD) return !1;
        if ((this._isIdentity || zD._isIdentity) && !this._isIdentityDirty && !zD._isIdentityDirty) return this._isIdentity && zD._isIdentity;
        const wD = this.m,
          pD = zD.m;
        return wD[0] === pD[0] && wD[1] === pD[1] && wD[2] === pD[2] && wD[3] === pD[3] && wD[4] === pD[4] && wD[5] === pD[5] && wD[6] === pD[6] && wD[7] === pD[7] && wD[8] === pD[8] && wD[9] === pD[9] && wD[10] === pD[10] && wD[11] === pD[11] && wD[12] === pD[12] && wD[13] === pD[13] && wD[14] === pD[14] && wD[15] === pD[15]
      }
      equalsWithEpsilon(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = this._m,
          pD = DD.m;
        for (let sD = 0; sD < 16; sD++)
          if (!(0, LD.WithinEpsilon)(wD[sD], pD[sD], zD)) return !1;
        return !0
      }
      sLD() {
        const DD = this._m;
        for (let zD = 0; zD < 16; zD++)
          if (DD[zD] != (zD < 0 || arguments.length <= zD ? void 0 : arguments[zD])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new BD)
      }
      floorToRef(DD) {
        const zD = this._m,
          wD = DD._m;
        for (let pD = 0; pD < 16; pD++) wD[pD] = Math.floor(zD[pD]);
        return DD.markAsUpdated(), DD
      }
      fract() {
        return this.fractToRef(new BD)
      }
      fractToRef(DD) {
        const zD = this._m,
          wD = DD._m;
        for (let pD = 0; pD < 16; pD++) wD[pD] = zD[pD] - Math.floor(zD[pD]);
        return DD.markAsUpdated(), DD
      }
      clone() {
        const DD = new BD;
        return DD.pC(this), DD
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let DD = RD(this._m[0]);
        for (let zD = 1; zD < 16; zD++) DD = 397 * DD ^ RD(this._m[zD]);
        return DD
      }
      decomposeToTransformNode(DD) {
        return DD.rotationQuaternion = DD.rotationQuaternion || new ID, this.decompose(DD.rc, DD.rotationQuaternion, DD.position)
      }
      decompose(DD, zD, wD, pD) {
        let sD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return wD && wD.I9(0), DD && DD.I9(1), zD && zD.Z2(0, 0, 0, 1), !0;
        const KD = this._m;
        if (wD && wD.Z2(KD[12], KD[13], KD[14]), (DD = DD || GD.WI[0]).x = Math.sqrt(KD[0] * KD[0] + KD[1] * KD[1] + KD[2] * KD[2]), DD.y = Math.sqrt(KD[4] * KD[4] + KD[5] * KD[5] + KD[6] * KD[6]), DD.z = Math.sqrt(KD[8] * KD[8] + KD[9] * KD[9] + KD[10] * KD[10]), pD) {
          const zD = (sD ? pD.absoluteScaling.x : pD.rc.x) < 0 ? -1 : 1,
            wD = (sD ? pD.absoluteScaling.y : pD.rc.y) < 0 ? -1 : 1,
            KD = (sD ? pD.absoluteScaling.z : pD.rc.z) < 0 ? -1 : 1;
          DD.x *= zD, DD.y *= wD, DD.z *= KD
        } else this.determinant() <= 0 && (DD.y *= -1);
        if (0 === DD._x || 0 === DD._y || 0 === DD._z) return zD && zD.Z2(0, 0, 0, 1), !1;
        if (zD) {
          const wD = 1 / DD._x,
            pD = 1 / DD._y,
            sD = 1 / DD._z;
          BD.FromValuesToRef(KD[0] * wD, KD[1] * wD, KD[2] * wD, 0, KD[4] * pD, KD[5] * pD, KD[6] * pD, 0, KD[8] * sD, KD[9] * sD, KD[10] * sD, 0, 0, 0, 0, 1, GD.Matrix[0]), ID.FromRotationMatrixToRef(GD.Matrix[0], zD)
        }
        return !0
      }
      getRow(DD) {
        if (DD < 0 || DD > 3) return null;
        const zD = 4 * DD;
        return new fD(this._m[zD + 0], this._m[zD + 1], this._m[zD + 2], this._m[zD + 3])
      }
      getRowToRef(DD, zD) {
        if (DD >= 0 && DD <= 3) {
          const wD = 4 * DD;
          zD.x = this._m[wD + 0], zD.y = this._m[wD + 1], zD.z = this._m[wD + 2], zD.w = this._m[wD + 3]
        }
        return zD
      }
      setRow(DD, zD) {
        return this.setRowFromFloats(DD, zD.x, zD.y, zD.z, zD.w)
      }
      transpose() {
        const DD = new BD;
        return BD.TransposeToRef(this, DD), DD
      }
      transposeToRef(DD) {
        return BD.TransposeToRef(this, DD), DD
      }
      setRowFromFloats(DD, zD, wD, pD, sD) {
        if (DD < 0 || DD > 3) return this;
        const KD = 4 * DD;
        return this._m[KD + 0] = zD, this._m[KD + 1] = wD, this._m[KD + 2] = pD, this._m[KD + 3] = sD, this.markAsUpdated(), this
      }
      scale(DD) {
        const zD = new BD;
        return this.scaleToRef(DD, zD), zD
      }
      scaleToRef(DD, zD) {
        for (let wD = 0; wD < 16; wD++) zD._m[wD] = this._m[wD] * DD;
        return zD.markAsUpdated(), zD
      }
      scaleAndAddToRef(DD, zD) {
        for (let wD = 0; wD < 16; wD++) zD._m[wD] += this._m[wD] * DD;
        return zD.markAsUpdated(), zD
      }
      scaleInPlace(DD) {
        const zD = this._m;
        for (let wD = 0; wD < 16; wD++) zD[wD] *= DD;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(DD) {
        const zD = GD.Matrix[0];
        this.invertToRef(zD), zD.transposeToRef(DD);
        const wD = DD._m;
        return BD.FromValuesToRef(wD[0], wD[1], wD[2], 0, wD[4], wD[5], wD[6], 0, wD[8], wD[9], wD[10], 0, 0, 0, 0, 1, DD), DD
      }
      getRotationMatrix() {
        const DD = new BD;
        return this.getRotationMatrixToRef(DD), DD
      }
      getRotationMatrixToRef(DD) {
        const zD = GD.WI[0];
        if (!this.decompose(zD)) return BD.IdentityToRef(DD), DD;
        const wD = this._m,
          pD = 1 / zD._x,
          sD = 1 / zD._y,
          KD = 1 / zD._z;
        return BD.FromValuesToRef(wD[0] * pD, wD[1] * pD, wD[2] * pD, 0, wD[4] * sD, wD[5] * sD, wD[6] * sD, 0, wD[8] * KD, wD[9] * KD, wD[10] * KD, 0, 0, 0, 0, 1, DD), DD
      }
      toggleModelMatrixHandInPlace() {
        const DD = this._m;
        return DD[2] *= -1, DD[6] *= -1, DD[8] *= -1, DD[9] *= -1, DD[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const DD = this._m;
        return DD[8] *= -1, DD[9] *= -1, DD[10] *= -1, DD[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(nD, this), this
      }
      static FromArray(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const wD = new BD;
        return BD.FromArrayToRef(DD, zD, wD), wD
      }
      static FromArrayToRef(DD, zD, wD) {
        for (let pD = 0; pD < 16; pD++) wD._m[pD] = DD[pD + zD];
        return wD.markAsUpdated(), wD
      }
      static FromFloat32ArrayToRefScaled(DD, zD, wD, pD) {
        return pD._m[0] = DD[0 + zD] * wD, pD._m[1] = DD[1 + zD] * wD, pD._m[2] = DD[2 + zD] * wD, pD._m[3] = DD[3 + zD] * wD, pD._m[4] = DD[4 + zD] * wD, pD._m[5] = DD[5 + zD] * wD, pD._m[6] = DD[6 + zD] * wD, pD._m[7] = DD[7 + zD] * wD, pD._m[8] = DD[8 + zD] * wD, pD._m[9] = DD[9 + zD] * wD, pD._m[10] = DD[10 + zD] * wD, pD._m[11] = DD[11 + zD] * wD, pD._m[12] = DD[12 + zD] * wD, pD._m[13] = DD[13 + zD] * wD, pD._m[14] = DD[14 + zD] * wD, pD._m[15] = DD[15 + zD] * wD, pD.markAsUpdated(), pD
      }
      static get IdentityReadOnly() {
        return BD._IdentityReadOnly
      }
      static FromValuesToRef(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, BD, GD) {
        const hD = GD._m;
        hD[0] = DD, hD[1] = zD, hD[2] = wD, hD[3] = pD, hD[4] = sD, hD[5] = KD, hD[6] = rD, hD[7] = LD, hD[8] = cD, hD[9] = gD, hD[10] = RD, hD[11] = AD, hD[12] = UD, hD[13] = fD, hD[14] = ID, hD[15] = BD, GD.markAsUpdated()
      }
      static FromValues(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD, fD, ID, GD) {
        const hD = new BD,
          nD = hD._m;
        return nD[0] = DD, nD[1] = zD, nD[2] = wD, nD[3] = pD, nD[4] = sD, nD[5] = KD, nD[6] = rD, nD[7] = LD, nD[8] = cD, nD[9] = gD, nD[10] = RD, nD[11] = AD, nD[12] = UD, nD[13] = fD, nD[14] = ID, nD[15] = GD, hD.markAsUpdated(), hD
      }
      static Compose(DD, zD, wD) {
        const pD = new BD;
        return BD.ComposeToRef(DD, zD, wD, pD), pD
      }
      static ComposeToRef(DD, zD, wD, pD) {
        const sD = pD._m,
          KD = zD._x,
          rD = zD._y,
          LD = zD._z,
          cD = zD._w,
          gD = KD + KD,
          RD = rD + rD,
          AD = LD + LD,
          UD = KD * gD,
          fD = KD * RD,
          ID = KD * AD,
          BD = rD * RD,
          GD = rD * AD,
          hD = LD * AD,
          nD = cD * gD,
          MD = cD * RD,
          OD = cD * AD,
          JD = DD._x,
          ED = DD._y,
          QD = DD._z;
        return sD[0] = (1 - (BD + hD)) * JD, sD[1] = (fD + OD) * JD, sD[2] = (ID - MD) * JD, sD[3] = 0, sD[4] = (fD - OD) * ED, sD[5] = (1 - (UD + hD)) * ED, sD[6] = (GD + nD) * ED, sD[7] = 0, sD[8] = (ID + MD) * QD, sD[9] = (GD - nD) * QD, sD[10] = (1 - (UD + BD)) * QD, sD[11] = 0, sD[12] = wD._x, sD[13] = wD._y, sD[14] = wD._z, sD[15] = 1, pD.markAsUpdated(), pD
      }
      static Identity() {
        const DD = BD.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return DD._updateIdentityStatus(!0), DD
      }
      static IdentityToRef(DD) {
        return BD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, DD), DD._updateIdentityStatus(!0), DD
      }
      static Zero() {
        const DD = BD.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return DD._updateIdentityStatus(!1), DD
      }
      static RotationX(DD) {
        const zD = new BD;
        return BD.RotationXToRef(DD, zD), zD
      }
      static Invert(DD) {
        const zD = new BD;
        return DD.invertToRef(zD), zD
      }
      static RotationXToRef(DD, zD) {
        const wD = Math.sin(DD),
          pD = Math.cos(DD);
        return BD.FromValuesToRef(1, 0, 0, 0, 0, pD, wD, 0, 0, -wD, pD, 0, 0, 0, 0, 1, zD), zD._updateIdentityStatus(1 === pD && 0 === wD), zD
      }
      static RotationY(DD) {
        const zD = new BD;
        return BD.RotationYToRef(DD, zD), zD
      }
      static RotationYToRef(DD, zD) {
        const wD = Math.sin(DD),
          pD = Math.cos(DD);
        return BD.FromValuesToRef(pD, 0, -wD, 0, 0, 1, 0, 0, wD, 0, pD, 0, 0, 0, 0, 1, zD), zD._updateIdentityStatus(1 === pD && 0 === wD), zD
      }
      static RotationZ(DD) {
        const zD = new BD;
        return BD.RotationZToRef(DD, zD), zD
      }
      static RotationZToRef(DD, zD) {
        const wD = Math.sin(DD),
          pD = Math.cos(DD);
        return BD.FromValuesToRef(pD, wD, 0, 0, -wD, pD, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, zD), zD._updateIdentityStatus(1 === pD && 0 === wD), zD
      }
      static RotationAxis(DD, zD) {
        const wD = new BD;
        return BD.RotationAxisToRef(DD, zD, wD), wD
      }
      static RotationAxisToRef(DD, zD, wD) {
        const pD = Math.sin(-zD),
          sD = Math.cos(-zD),
          KD = 1 - sD;
        DD = DD.normalizeToRef(GD.WI[0]);
        const rD = wD._m;
        return rD[0] = DD._x * DD._x * KD + sD, rD[1] = DD._x * DD._y * KD - DD._z * pD, rD[2] = DD._x * DD._z * KD + DD._y * pD, rD[3] = 0, rD[4] = DD._y * DD._x * KD + DD._z * pD, rD[5] = DD._y * DD._y * KD + sD, rD[6] = DD._y * DD._z * KD - DD._x * pD, rD[7] = 0, rD[8] = DD._z * DD._x * KD - DD._y * pD, rD[9] = DD._z * DD._y * KD + DD._x * pD, rD[10] = DD._z * DD._z * KD + sD, rD[11] = 0, rD[12] = 0, rD[13] = 0, rD[14] = 0, rD[15] = 1, wD.markAsUpdated(), wD
      }
      static RotationAlignToRef(DD, zD, wD) {
        let sD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const KD = UD.Dot(zD, DD),
          rD = wD._m;
        if (KD < -1 + pD.b) rD[0] = -1, rD[1] = 0, rD[2] = 0, rD[3] = 0, rD[4] = 0, rD[5] = sD ? 1 : -1, rD[6] = 0, rD[7] = 0, rD[8] = 0, rD[9] = 0, rD[10] = sD ? -1 : 1, rD[11] = 0;
        else {
          const wD = UD.Cross(zD, DD),
            pD = 1 / (1 + KD);
          rD[0] = wD._x * wD._x * pD + KD, rD[1] = wD._y * wD._x * pD - wD._z, rD[2] = wD._z * wD._x * pD + wD._y, rD[3] = 0, rD[4] = wD._x * wD._y * pD + wD._z, rD[5] = wD._y * wD._y * pD + KD, rD[6] = wD._z * wD._y * pD - wD._x, rD[7] = 0, rD[8] = wD._x * wD._z * pD - wD._y, rD[9] = wD._y * wD._z * pD + wD._x, rD[10] = wD._z * wD._z * pD + KD, rD[11] = 0
        }
        return rD[12] = 0, rD[13] = 0, rD[14] = 0, rD[15] = 1, wD.markAsUpdated(), wD
      }
      static RotationYawPitchRoll(DD, zD, wD) {
        const pD = new BD;
        return BD.RotationYawPitchRollToRef(DD, zD, wD, pD), pD
      }
      static RotationYawPitchRollToRef(DD, zD, wD, pD) {
        return ID.RotationYawPitchRollToRef(DD, zD, wD, GD.Quaternion[0]), GD.Quaternion[0].toRotationMatrix(pD), pD
      }
      static Scaling(DD, zD, wD) {
        const pD = new BD;
        return BD.ScalingToRef(DD, zD, wD, pD), pD
      }
      static ScalingToRef(DD, zD, wD, pD) {
        return BD.FromValuesToRef(DD, 0, 0, 0, 0, zD, 0, 0, 0, 0, wD, 0, 0, 0, 0, 1, pD), pD._updateIdentityStatus(1 === DD && 1 === zD && 1 === wD), pD
      }
      static Translation(DD, zD, wD) {
        const pD = new BD;
        return BD.TranslationToRef(DD, zD, wD, pD), pD
      }
      static TranslationToRef(DD, zD, wD, pD) {
        return BD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, DD, zD, wD, 1, pD), pD._updateIdentityStatus(0 === DD && 0 === zD && 0 === wD), pD
      }
      static Lerp(DD, zD, wD) {
        const pD = new BD;
        return BD.LerpToRef(DD, zD, wD, pD), pD
      }
      static LerpToRef(DD, zD, wD, pD) {
        const sD = pD._m,
          KD = DD.m,
          rD = zD.m;
        for (let LD = 0; LD < 16; LD++) sD[LD] = KD[LD] * (1 - wD) + rD[LD] * wD;
        return pD.markAsUpdated(), pD
      }
      static DecomposeLerp(DD, zD, wD) {
        const pD = new BD;
        return BD.DecomposeLerpToRef(DD, zD, wD, pD), pD
      }
      static DecomposeLerpToRef(DD, zD, wD, pD) {
        const sD = GD.WI[0],
          KD = GD.Quaternion[0],
          rD = GD.WI[1];
        DD.decompose(sD, KD, rD);
        const LD = GD.WI[2],
          cD = GD.Quaternion[1],
          gD = GD.WI[3];
        zD.decompose(LD, cD, gD);
        const RD = GD.WI[4];
        UD.LerpToRef(sD, LD, wD, RD);
        const AD = GD.Quaternion[2];
        ID.SlerpToRef(KD, cD, wD, AD);
        const fD = GD.WI[5];
        return UD.LerpToRef(rD, gD, wD, fD), BD.ComposeToRef(RD, AD, fD, pD), pD
      }
      static LookAtLH(DD, zD, wD) {
        const pD = new BD;
        return BD.LookAtLHToRef(DD, zD, wD, pD), pD
      }
      static LookAtLHToRef(DD, zD, wD, pD) {
        const sD = GD.WI[0],
          KD = GD.WI[1],
          rD = GD.WI[2];
        zD.subtractToRef(DD, rD), rD.normalize(), UD.CrossToRef(wD, rD, sD);
        const LD = sD.lengthSquared();
        0 === LD ? sD.x = 1 : sD.normalizeFromLength(Math.sqrt(LD)), UD.CrossToRef(rD, sD, KD), KD.normalize();
        const cD = -UD.Dot(sD, DD),
          gD = -UD.Dot(KD, DD),
          RD = -UD.Dot(rD, DD);
        return BD.FromValuesToRef(sD._x, KD._x, rD._x, 0, sD._y, KD._y, rD._y, 0, sD._z, KD._z, rD._z, 0, cD, gD, RD, 1, pD), pD
      }
      static LookAtRH(DD, zD, wD) {
        const pD = new BD;
        return BD.LookAtRHToRef(DD, zD, wD, pD), pD
      }
      static LookAtRHToRef(DD, zD, wD, pD) {
        const sD = GD.WI[0],
          KD = GD.WI[1],
          rD = GD.WI[2];
        DD.subtractToRef(zD, rD), rD.normalize(), UD.CrossToRef(wD, rD, sD);
        const LD = sD.lengthSquared();
        0 === LD ? sD.x = 1 : sD.normalizeFromLength(Math.sqrt(LD)), UD.CrossToRef(rD, sD, KD), KD.normalize();
        const cD = -UD.Dot(sD, DD),
          gD = -UD.Dot(KD, DD),
          RD = -UD.Dot(rD, DD);
        return BD.FromValuesToRef(sD._x, KD._x, rD._x, 0, sD._y, KD._y, rD._y, 0, sD._z, KD._z, rD._z, 0, cD, gD, RD, 1, pD), pD
      }
      static LookDirectionLH(DD, zD) {
        const wD = new BD;
        return BD.LookDirectionLHToRef(DD, zD, wD), wD
      }
      static LookDirectionLHToRef(DD, zD, wD) {
        const pD = GD.WI[0];
        pD.pC(DD), pD.scaleInPlace(-1);
        const sD = GD.WI[1];
        return UD.CrossToRef(zD, pD, sD), BD.FromValuesToRef(sD._x, sD._y, sD._z, 0, zD._x, zD._y, zD._z, 0, pD._x, pD._y, pD._z, 0, 0, 0, 0, 1, wD), wD
      }
      static LookDirectionRH(DD, zD) {
        const wD = new BD;
        return BD.LookDirectionRHToRef(DD, zD, wD), wD
      }
      static LookDirectionRHToRef(DD, zD, wD) {
        const pD = GD.WI[2];
        return UD.CrossToRef(zD, DD, pD), BD.FromValuesToRef(pD._x, pD._y, pD._z, 0, zD._x, zD._y, zD._z, 0, DD._x, DD._y, DD._z, 0, 0, 0, 0, 1, wD), wD
      }
      static OrthoLH(DD, zD, wD, pD, sD) {
        const KD = new BD;
        return BD.OrthoLHToRef(DD, zD, wD, pD, KD, sD), KD
      }
      static OrthoLHToRef(DD, zD, wD, pD, sD, KD) {
        const rD = 2 / DD,
          LD = 2 / zD,
          cD = 2 / (pD - wD),
          gD = -(pD + wD) / (pD - wD);
        return BD.FromValuesToRef(rD, 0, 0, 0, 0, LD, 0, 0, 0, 0, cD, 0, 0, 0, gD, 1, sD), KD && sD.multiplyToRef(nD, sD), sD._updateIdentityStatus(1 === rD && 1 === LD && 1 === cD && 0 === gD), sD
      }
      static OrthoOffCenterLH(DD, zD, wD, pD, sD, KD, rD) {
        const LD = new BD;
        return BD.OrthoOffCenterLHToRef(DD, zD, wD, pD, sD, KD, LD, rD), LD
      }
      static OrthoOffCenterLHToRef(DD, zD, wD, pD, sD, KD, rD, LD) {
        const cD = 2 / (zD - DD),
          gD = 2 / (pD - wD),
          RD = 2 / (KD - sD),
          AD = -(KD + sD) / (KD - sD),
          UD = (DD + zD) / (DD - zD),
          fD = (pD + wD) / (wD - pD);
        return BD.FromValuesToRef(cD, 0, 0, 0, 0, gD, 0, 0, 0, 0, RD, 0, UD, fD, AD, 1, rD), LD && rD.multiplyToRef(nD, rD), rD.markAsUpdated(), rD
      }
      static ObliqueOffCenterLHToRef(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
        const AD = -rD * Math.cos(LD),
          UD = -rD * Math.sin(LD);
        return BD.TranslationToRef(0, 0, -cD, GD.Matrix[1]), BD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, AD, UD, 1, 0, 0, 0, 0, 1, GD.Matrix[0]), GD.Matrix[1].multiplyToRef(GD.Matrix[0], GD.Matrix[0]), BD.TranslationToRef(0, 0, cD, GD.Matrix[1]), GD.Matrix[0].multiplyToRef(GD.Matrix[1], GD.Matrix[0]), BD.OrthoOffCenterLHToRef(DD, zD, wD, pD, sD, KD, gD, RD), GD.Matrix[0].multiplyToRef(gD, gD), gD
      }
      static OrthoOffCenterRH(DD, zD, wD, pD, sD, KD, rD) {
        const LD = new BD;
        return BD.OrthoOffCenterRHToRef(DD, zD, wD, pD, sD, KD, LD, rD), LD
      }
      static OrthoOffCenterRHToRef(DD, zD, wD, pD, sD, KD, rD, LD) {
        return BD.OrthoOffCenterLHToRef(DD, zD, wD, pD, sD, KD, rD, LD), rD._m[10] *= -1, rD
      }
      static ObliqueOffCenterRHToRef(DD, zD, wD, pD, sD, KD, rD, LD, cD, gD, RD) {
        const AD = rD * Math.cos(LD),
          UD = rD * Math.sin(LD);
        return BD.TranslationToRef(0, 0, cD, GD.Matrix[1]), BD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, AD, UD, 1, 0, 0, 0, 0, 1, GD.Matrix[0]), GD.Matrix[1].multiplyToRef(GD.Matrix[0], GD.Matrix[0]), BD.TranslationToRef(0, 0, -cD, GD.Matrix[1]), GD.Matrix[0].multiplyToRef(GD.Matrix[1], GD.Matrix[0]), BD.OrthoOffCenterRHToRef(DD, zD, wD, pD, sD, KD, gD, RD), GD.Matrix[0].multiplyToRef(gD, gD), gD
      }
      static PerspectiveLH(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const rD = new BD,
          LD = 2 * wD / DD,
          cD = 2 * wD / zD,
          gD = (pD + wD) / (pD - wD),
          RD = -2 * pD * wD / (pD - wD),
          AD = Math.tan(KD);
        return BD.FromValuesToRef(LD, 0, 0, 0, 0, cD, 0, AD, 0, 0, gD, 1, 0, 0, RD, 0, rD), sD && rD.multiplyToRef(nD, rD), rD._updateIdentityStatus(!1), rD
      }
      static PerspectiveFovLH(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const LD = new BD;
        return BD.PerspectiveFovLHToRef(DD, zD, wD, pD, LD, !0, sD, KD, rD), LD
      }
      static PerspectiveFovLHToRef(DD, zD, wD, pD, sD) {
        let KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          rD = arguments.length > 6 ? arguments[6] : void 0,
          LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const gD = wD,
          RD = pD,
          AD = 1 / Math.tan(.5 * DD),
          UD = KD ? AD / zD : AD,
          fD = KD ? AD : AD * zD,
          ID = cD && 0 === gD ? -1 : 0 !== RD ? (RD + gD) / (RD - gD) : 1,
          GD = cD && 0 === gD ? 2 * RD : 0 !== RD ? -2 * RD * gD / (RD - gD) : -2 * gD,
          hD = Math.tan(LD);
        return BD.FromValuesToRef(UD, 0, 0, 0, 0, fD, 0, hD, 0, 0, ID, 1, 0, 0, GD, 0, sD), rD && sD.multiplyToRef(nD, sD), sD._updateIdentityStatus(!1), sD
      }
      static PerspectiveFovReverseLHToRef(DD, zD, wD, pD, sD) {
        let KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          rD = arguments.length > 6 ? arguments[6] : void 0,
          LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const cD = 1 / Math.tan(.5 * DD),
          gD = KD ? cD / zD : cD,
          RD = KD ? cD : cD * zD,
          AD = Math.tan(LD);
        return BD.FromValuesToRef(gD, 0, 0, 0, 0, RD, 0, AD, 0, 0, -wD, 1, 0, 0, 1, 0, sD), rD && sD.multiplyToRef(nD, sD), sD._updateIdentityStatus(!1), sD
      }
      static PerspectiveFovRH(DD, zD, wD, pD, sD) {
        let KD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          rD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const LD = new BD;
        return BD.PerspectiveFovRHToRef(DD, zD, wD, pD, LD, !0, sD, KD, rD), LD
      }
      static PerspectiveFovRHToRef(DD, zD, wD, pD, sD) {
        let KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          rD = arguments.length > 6 ? arguments[6] : void 0,
          LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          cD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const gD = wD,
          RD = pD,
          AD = 1 / Math.tan(.5 * DD),
          UD = KD ? AD / zD : AD,
          fD = KD ? AD : AD * zD,
          ID = cD && 0 === gD ? 1 : 0 !== RD ? -(RD + gD) / (RD - gD) : -1,
          GD = cD && 0 === gD ? 2 * RD : 0 !== RD ? -2 * RD * gD / (RD - gD) : -2 * gD,
          hD = Math.tan(LD);
        return BD.FromValuesToRef(UD, 0, 0, 0, 0, fD, 0, hD, 0, 0, ID, -1, 0, 0, GD, 0, sD), rD && sD.multiplyToRef(nD, sD), sD._updateIdentityStatus(!1), sD
      }
      static PerspectiveFovReverseRHToRef(DD, zD, wD, pD, sD) {
        let KD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          rD = arguments.length > 6 ? arguments[6] : void 0,
          LD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const cD = 1 / Math.tan(.5 * DD),
          gD = KD ? cD / zD : cD,
          RD = KD ? cD : cD * zD,
          AD = Math.tan(LD);
        return BD.FromValuesToRef(gD, 0, 0, 0, 0, RD, 0, AD, 0, 0, -wD, -1, 0, 0, -1, 0, sD), rD && sD.multiplyToRef(nD, sD), sD._updateIdentityStatus(!1), sD
      }
      static GetFinalMatrix(DD, zD, wD, pD, sD, KD) {
        const rD = DD.width,
          LD = DD.height,
          cD = DD.x,
          gD = DD.y,
          RD = BD.FromValues(rD / 2, 0, 0, 0, 0, -LD / 2, 0, 0, 0, 0, KD - sD, 0, cD + rD / 2, LD / 2 + gD, sD, 1),
          AD = new BD;
        return zD.multiplyToRef(wD, AD), AD.multiplyToRef(pD, AD), AD.multiplyToRef(RD, AD)
      }
      static GetAsMatrix2x2(DD) {
        const zD = DD.m,
          wD = [zD[0], zD[1], zD[4], zD[5]];
        return KD.d.MatrixUse64Bits ? wD : new Float32Array(wD)
      }
      static GetAsMatrix3x3(DD) {
        const zD = DD.m,
          wD = [zD[0], zD[1], zD[2], zD[4], zD[5], zD[6], zD[8], zD[9], zD[10]];
        return KD.d.MatrixUse64Bits ? wD : new Float32Array(wD)
      }
      static Transpose(DD) {
        const zD = new BD;
        return BD.TransposeToRef(DD, zD), zD
      }
      static TransposeToRef(DD, zD) {
        const wD = DD.m,
          pD = wD[0],
          sD = wD[4],
          KD = wD[8],
          rD = wD[12],
          LD = wD[1],
          cD = wD[5],
          gD = wD[9],
          RD = wD[13],
          AD = wD[2],
          UD = wD[6],
          fD = wD[10],
          ID = wD[14],
          BD = wD[3],
          GD = wD[7],
          hD = wD[11],
          nD = wD[15],
          MD = zD._m;
        return MD[0] = pD, MD[1] = sD, MD[2] = KD, MD[3] = rD, MD[4] = LD, MD[5] = cD, MD[6] = gD, MD[7] = RD, MD[8] = AD, MD[9] = UD, MD[10] = fD, MD[11] = ID, MD[12] = BD, MD[13] = GD, MD[14] = hD, MD[15] = nD, zD.markAsUpdated(), zD._updateIdentityStatus(DD._isIdentity, DD._isIdentityDirty), zD
      }
      static Reflection(DD) {
        const zD = new BD;
        return BD.ReflectionToRef(DD, zD), zD
      }
      static ReflectionToRef(DD, zD) {
        DD.normalize();
        const wD = DD.normal.x,
          pD = DD.normal.y,
          sD = DD.normal.z,
          KD = -2 * wD,
          rD = -2 * pD,
          LD = -2 * sD;
        return BD.FromValuesToRef(KD * wD + 1, rD * wD, LD * wD, 0, KD * pD, rD * pD + 1, LD * pD, 0, KD * sD, rD * sD, LD * sD + 1, 0, KD * DD.d, rD * DD.d, LD * DD.d, 1, zD), zD
      }
      static FromXYZAxesToRef(DD, zD, wD, pD) {
        return BD.FromValuesToRef(DD._x, DD._y, DD._z, 0, zD._x, zD._y, zD._z, 0, wD._x, wD._y, wD._z, 0, 0, 0, 0, 1, pD), pD
      }
      static FromQuaternionToRef(DD, zD) {
        const wD = DD._x * DD._x,
          pD = DD._y * DD._y,
          sD = DD._z * DD._z,
          KD = DD._x * DD._y,
          rD = DD._z * DD._w,
          LD = DD._z * DD._x,
          cD = DD._y * DD._w,
          gD = DD._y * DD._z,
          RD = DD._x * DD._w;
        return zD._m[0] = 1 - 2 * (pD + sD), zD._m[1] = 2 * (KD + rD), zD._m[2] = 2 * (LD - cD), zD._m[3] = 0, zD._m[4] = 2 * (KD - rD), zD._m[5] = 1 - 2 * (sD + wD), zD._m[6] = 2 * (gD + RD), zD._m[7] = 0, zD._m[8] = 2 * (LD + cD), zD._m[9] = 2 * (gD - RD), zD._m[10] = 1 - 2 * (pD + wD), zD._m[11] = 0, zD._m[12] = 0, zD._m[13] = 0, zD._m[14] = 0, zD._m[15] = 1, zD.markAsUpdated(), zD
      }
    }
    BD._IdentityReadOnly = BD.Identity();
    class GD {}
    GD.WI = (0, sD.e)(11, UD.Zero), GD.Matrix = (0, sD.e)(2, BD.Identity), GD.Quaternion = (0, sD.e)(3, ID.Zero);
    class hD {}
    hD.Vector2 = (0, sD.e)(3, AD.Zero), hD.WI = (0, sD.e)(13, UD.Zero), hD.Vector4 = (0, sD.e)(3, fD.Zero), hD.Quaternion = (0, sD.e)(3, ID.Zero), hD.Matrix = (0, sD.e)(8, BD.Identity);
    const nD = BD.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let MD = !1;

    function OD() {
      MD || (MD = !0, Object.defineProperties(AD.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(UD.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(fD.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ID.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(BD.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, gD.i)("BABYLON.Vector2", AD), (0, gD.i)("BABYLON.Vector3", UD), (0, gD.i)("BABYLON.Vector4", fD), (0, gD.i)("BABYLON.Matrix", BD))
    }
  },
  37119: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    const pD = "undefined" !== typeof WeakRef;
    class sD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(DD, zD, wD, pD)
      }
      initialize(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = DD, this.skipNextObservers = zD, this.target = wD, this.currentTarget = pD, this
      }
    }
    class KD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = DD, this.mask = zD, this.scope = wD, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(DD)
      }
    }
    class rD {
      static FromPromise(DD, zD) {
        const wD = new rD;
        return DD.then((DD => {
          wD.notifyObservers(DD)
        })).catch((DD => {
          if (!zD) throw DD;
          zD.notifyObservers(DD)
        })), wD
      }
      get observers() {
        return this._observers
      }
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = zD, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new sD(0), DD && (this._onObserverAdded = DD)
      }
      add(DD) {
        let zD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!DD) return null;
        const sD = new KD(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        sD.unregisterOnNextCall = wD, zD ? this._observers.unshift(sD) : this._observers.push(sD), this._onObserverAdded && this._onObserverAdded(sD), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(sD, this._lastNotifiedValue);
        const rD = pD ? new WeakRef(this) : {
          deref: () => this
        };
        return sD._remove = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const zD = rD.deref();
          zD && (DD ? zD.remove(sD) : zD._remove(sD))
        }, sD
      }
      addOnce(DD) {
        return this.add(DD, void 0, void 0, void 0, !0)
      }
      remove(DD) {
        if (!DD) return !1;
        DD._remove = null;
        return -1 !== this._observers.indexOf(DD) && (this._deferUnregister(DD), !0)
      }
      removeCallback(DD, zD) {
        for (let wD = 0; wD < this._observers.length; wD++) {
          const pD = this._observers[wD];
          if (!pD._willBeUnregistered && (pD.callback === DD && (!zD || zD === pD.scope))) return this._deferUnregister(pD), !0
        }
        return !1
      }
      _deferUnregister(DD) {
        DD._willBeUnregistered || (this._numObserversMarkedAsDeleted++, DD.unregisterOnNextCall = !1, DD._willBeUnregistered = !0, setTimeout((() => {
          this._remove(DD)
        }), 0))
      }
      _remove(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!DD) return !1;
        const wD = this._observers.indexOf(DD);
        return -1 !== wD && (zD && this._numObserversMarkedAsDeleted--, this._observers.splice(wD, 1), !0)
      }
      makeObserverTopPriority(DD) {
        this._remove(DD, !1), this._observers.unshift(DD)
      }
      makeObserverBottomPriority(DD) {
        this._remove(DD, !1), this._observers.push(DD)
      }
      notifyObservers(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = DD), !this._observers.length) return !0;
        const KD = this._eventState;
        KD.mask = zD, KD.target = wD, KD.currentTarget = pD, KD.skipNextObservers = !1, KD.lastReturnValue = DD, KD.userInfo = sD;
        for (const rD of this._observers)
          if (!rD._willBeUnregistered && (rD.mask & zD && (rD.unregisterOnNextCall && this._deferUnregister(rD), rD.scope ? KD.lastReturnValue = rD.callback.apply(rD.scope, [DD, KD]) : KD.lastReturnValue = rD.callback(DD, KD)), KD.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zD), DD._willBeUnregistered) return;
        const pD = this._eventState;
        pD.mask = wD, pD.skipNextObservers = !1, DD.unregisterOnNextCall && this._deferUnregister(DD), DD.callback(zD, pD)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const DD = this._observers.pop();
          DD && (DD._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const DD = new rD;
        return DD._observers = this._observers.slice(0), DD
      }
      hasSpecificMask() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const zD of this._observers)
          if (zD.mask & DD || zD.mask === DD) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);