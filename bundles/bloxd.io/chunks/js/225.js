export const id = 225;
export const ids = [225];
export const modules = {
  36464: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    var ID = cD(36473);
    class pD {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    pD.Instances = [], pD.OnEnginesDisposedObservable = new ID.c, pD._LastCreatedScene = null, pD.UseFallbackTexture = !0, pD.FallbackTexture = ""
  },
  36455: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static SetMatrixPrecision(DD) {
        if (ID.MatrixTrackPrecisionChange = !1, DD && !ID.MatrixUse64Bits && ID.MatrixTrackedMatrices)
          for (let CD = 0; CD < ID.MatrixTrackedMatrices.length; ++CD) {
            const DD = ID.MatrixTrackedMatrices[CD],
              cD = DD._m;
            DD._m = new Array(16);
            for (let CD = 0; CD < 16; ++CD) DD._m[CD] = cD[CD]
          }
        ID.MatrixUse64Bits = DD, ID.MatrixCurrentType = ID.MatrixUse64Bits ? Array : Float32Array, ID.MatrixTrackedMatrices = null
      }
    }
    ID.MatrixUse64Bits = !1, ID.MatrixTrackPrecisionChange = !0, ID.MatrixCurrentType = Float32Array, ID.MatrixTrackedMatrices = []
  },
  36481: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => bD,
      d: () => wD,
      g: () => QD,
      h: () => ID,
      k: () => iD,
      n: () => fD
    });
    class ID {}

    function pD(DD) {
      DD.updateFlag = ID._UpdateFlagSeed++
    }

    function iD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const pD = DD.XcD(),
        iD = CD.XcD(),
        fD = pD[0],
        bD = pD[1],
        QD = pD[2],
        wD = pD[3],
        SD = pD[4],
        BD = pD[5],
        yD = pD[6],
        MD = pD[7],
        tD = pD[8],
        ZD = pD[9],
        oD = pD[10],
        vD = pD[11],
        ND = pD[12],
        gD = pD[13],
        XD = pD[14],
        mD = pD[15],
        nD = iD[0],
        OD = iD[1],
        PD = iD[2],
        HD = iD[3],
        UD = iD[4],
        xD = iD[5],
        qD = iD[6],
        JD = iD[7],
        KD = iD[8],
        aD = iD[9],
        VD = iD[10],
        zD = iD[11],
        jD = iD[12],
        lD = iD[13],
        LD = iD[14],
        TD = iD[15];
      cD[ID] = fD * nD + bD * UD + QD * KD + wD * jD, cD[ID + 1] = fD * OD + bD * xD + QD * aD + wD * lD, cD[ID + 2] = fD * PD + bD * qD + QD * VD + wD * LD, cD[ID + 3] = fD * HD + bD * JD + QD * zD + wD * TD, cD[ID + 4] = SD * nD + BD * UD + yD * KD + MD * jD, cD[ID + 5] = SD * OD + BD * xD + yD * aD + MD * lD, cD[ID + 6] = SD * PD + BD * qD + yD * VD + MD * LD, cD[ID + 7] = SD * HD + BD * JD + yD * zD + MD * TD, cD[ID + 8] = tD * nD + ZD * UD + oD * KD + vD * jD, cD[ID + 9] = tD * OD + ZD * xD + oD * aD + vD * lD, cD[ID + 10] = tD * PD + ZD * qD + oD * VD + vD * LD, cD[ID + 11] = tD * HD + ZD * JD + oD * zD + vD * TD, cD[ID + 12] = ND * nD + gD * UD + XD * KD + mD * jD, cD[ID + 13] = ND * OD + gD * xD + XD * aD + mD * lD, cD[ID + 14] = ND * PD + gD * qD + XD * VD + mD * LD, cD[ID + 15] = ND * HD + gD * JD + XD * zD + mD * TD
    }

    function fD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      iD(DD, CD, cD.XcD(), ID), pD(cD)
    }

    function bD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ID = DD.XcD();
      CD[cD] = ID[0], CD[cD + 1] = ID[1], CD[cD + 2] = ID[2], CD[cD + 3] = ID[3], CD[cD + 4] = ID[4], CD[cD + 5] = ID[5], CD[cD + 6] = ID[6], CD[cD + 7] = ID[7], CD[cD + 8] = ID[8], CD[cD + 9] = ID[9], CD[cD + 10] = ID[10], CD[cD + 11] = ID[11], CD[cD + 12] = ID[12], CD[cD + 13] = ID[13], CD[cD + 14] = ID[14], CD[cD + 15] = ID[15]
    }

    function QD(DD, CD) {
      const cD = wD(DD, CD.XcD());
      return cD && pD(CD), cD
    }

    function wD(DD, CD) {
      const cD = DD.XcD(),
        ID = cD[0],
        pD = cD[1],
        iD = cD[2],
        fD = cD[3],
        bD = cD[4],
        QD = cD[5],
        wD = cD[6],
        SD = cD[7],
        BD = cD[8],
        yD = cD[9],
        MD = cD[10],
        tD = cD[11],
        ZD = cD[12],
        oD = cD[13],
        vD = cD[14],
        ND = cD[15],
        gD = MD * ND - vD * tD,
        XD = yD * ND - oD * tD,
        mD = yD * vD - oD * MD,
        nD = BD * ND - ZD * tD,
        OD = BD * vD - MD * ZD,
        PD = BD * oD - ZD * yD,
        HD = +(QD * gD - wD * XD + SD * mD),
        UD = -(bD * gD - wD * nD + SD * OD),
        xD = +(bD * XD - QD * nD + SD * PD),
        qD = -(bD * mD - QD * OD + wD * PD),
        JD = ID * HD + pD * UD + iD * xD + fD * qD;
      if (0 === JD) return !1;
      const KD = 1 / JD,
        aD = wD * ND - vD * SD,
        VD = QD * ND - oD * SD,
        zD = QD * vD - oD * wD,
        jD = bD * ND - ZD * SD,
        lD = bD * vD - ZD * wD,
        LD = bD * oD - ZD * QD,
        TD = wD * tD - MD * SD,
        GD = QD * tD - yD * SD,
        RD = QD * MD - yD * wD,
        kD = bD * tD - BD * SD,
        dD = bD * MD - BD * wD,
        YD = bD * yD - BD * QD,
        WD = -(pD * gD - iD * XD + fD * mD),
        sD = +(ID * gD - iD * nD + fD * OD),
        ED = -(ID * XD - pD * nD + fD * PD),
        eD = +(ID * mD - pD * OD + iD * PD),
        uD = +(pD * aD - iD * VD + fD * zD),
        hD = -(ID * aD - iD * jD + fD * lD),
        rD = +(ID * VD - pD * jD + fD * LD),
        AD = -(ID * zD - pD * lD + iD * LD),
        FD = -(pD * TD - iD * GD + fD * RD),
        DC = +(ID * TD - iD * kD + fD * dD),
        CC = -(ID * GD - pD * kD + fD * YD),
        cC = +(ID * RD - pD * dD + iD * YD);
      return CD[0] = HD * KD, CD[1] = WD * KD, CD[2] = uD * KD, CD[3] = FD * KD, CD[4] = UD * KD, CD[5] = sD * KD, CD[6] = hD * KD, CD[7] = DC * KD, CD[8] = xD * KD, CD[9] = ED * KD, CD[10] = rD * KD, CD[11] = CC * KD, CD[12] = qD * KD, CD[13] = eD * KD, CD[14] = AD * KD, CD[15] = cC * KD, !0
    }
    ID._UpdateFlagSeed = 0
  },
  36446: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => ZD,
      h: () => tD,
      k: () => XD,
      l: () => vD,
      n: () => BD,
      p: () => yD,
      s: () => MD
    });
    var ID = cD(36449),
      pD = cD(36452),
      iD = cD(36455),
      fD = cD(36464),
      bD = cD(36479),
      QD = cD(36481),
      wD = cD(36488);
    const SD = DD => parseInt(DD.toString().replace(/\W/g, ""));
    class BD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = DD, this.y = CD
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let DD = SD(this.x);
        return DD = 397 * DD ^ SD(this.y), DD
      }
      toArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[CD] = this.x, DD[CD + 1] = this.y, this
      }
      QCD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BD.FromArrayToRef(DD, CD, this), this
      }
      XcD() {
        return [this.x, this.y]
      }
      YCD(DD) {
        return this.x = DD.x, this.y = DD.y, this
      }
      K4(DD, CD) {
        return this.x = DD, this.y = CD, this
      }
      set(DD, CD) {
        return this.K4(DD, CD)
      }
      YF(DD) {
        return this.K4(DD, DD)
      }
      add(DD) {
        return new BD(this.x + DD.x, this.y + DD.y)
      }
      addToRef(DD, CD) {
        return CD.x = this.x + DD.x, CD.y = this.y + DD.y, CD
      }
      addInPlace(DD) {
        return this.x += DD.x, this.y += DD.y, this
      }
      addInPlaceFromFloats(DD, CD) {
        return this.x += DD, this.y += CD, this
      }
      addVector3(DD) {
        return new BD(this.x + DD.x, this.y + DD.y)
      }
      subtract(DD) {
        return new BD(this.x - DD.x, this.y - DD.y)
      }
      subtractToRef(DD, CD) {
        return CD.x = this.x - DD.x, CD.y = this.y - DD.y, CD
      }
      EcD(DD) {
        return this.x -= DD.x, this.y -= DD.y, this
      }
      multiplyInPlace(DD) {
        return this.x *= DD.x, this.y *= DD.y, this
      }
      multiply(DD) {
        return new BD(this.x * DD.x, this.y * DD.y)
      }
      multiplyToRef(DD, CD) {
        return CD.x = this.x * DD.x, CD.y = this.y * DD.y, CD
      }
      multiplyByFloats(DD, CD) {
        return new BD(this.x * DD, this.y * CD)
      }
      divide(DD) {
        return new BD(this.x / DD.x, this.y / DD.y)
      }
      divideToRef(DD, CD) {
        return CD.x = this.x / DD.x, CD.y = this.y / DD.y, CD
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
      minimizeInPlaceFromFloats(DD, CD) {
        return this.x = Math.min(DD, this.x), this.y = Math.min(CD, this.y), this
      }
      maximizeInPlaceFromFloats(DD, CD) {
        return this.x = Math.max(DD, this.x), this.y = Math.max(CD, this.y), this
      }
      subtractFromFloats(DD, CD) {
        return new BD(this.x - DD, this.y - CD)
      }
      subtractFromFloatsToRef(DD, CD, cD) {
        return cD.x = this.x - DD, cD.y = this.y - CD, cD
      }
      pp() {
        return new BD(-this.x, -this.y)
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
        return new BD(this.x * DD, this.y * DD)
      }
      scaleToRef(DD, CD) {
        return CD.x = this.x * DD, CD.y = this.y * DD, CD
      }
      scaleAndAddToRef(DD, CD) {
        return CD.x += this.x * DD, CD.y += this.y * DD, CD
      }
      equals(DD) {
        return DD && this.x === DD.x && this.y === DD.y
      }
      equalsWithEpsilon(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ID.c;
        return DD && (0, bD.WithinEpsilon)(this.x, DD.x, CD) && (0, bD.WithinEpsilon)(this.y, DD.y, CD)
      }
      wfD(DD, CD) {
        return this.x === DD && this.y === CD
      }
      floor() {
        return new BD(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(DD) {
        return DD.x = Math.floor(this.x), DD.y = Math.floor(this.y), DD
      }
      fract() {
        return new BD(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(DD) {
        return DD.x = this.x - Math.floor(this.x), DD.y = this.y - Math.floor(this.y), DD
      }
      rotate(DD) {
        return this.rotateToRef(DD, new BD)
      }
      rotateToRef(DD, CD) {
        const cD = Math.cos(DD),
          ID = Math.sin(DD);
        return CD.x = cD * this.x - ID * this.y, CD.y = ID * this.x + cD * this.y, CD
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
        const DD = new BD;
        return this.normalizeToRef(DD), DD
      }
      normalizeToRef(DD) {
        const CD = this.length();
        return 0 === CD || 1 === CD ? (DD.x = this.x, DD.y = this.y, DD) : this.scaleToRef(1 / CD, DD)
      }
      clone() {
        return new BD(this.x, this.y)
      }
      dot(DD) {
        return this.x * DD.x + this.y * DD.y
      }
      static Zero() {
        return new BD(0, 0)
      }
      static One() {
        return new BD(1, 1)
      }
      static Random() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new BD((0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD))
      }
      static RandomToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K4((0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD))
      }
      static get ZeroReadOnly() {
        return BD._ZeroReadOnly
      }
      static FromArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new BD(DD[CD], DD[CD + 1])
      }
      static FromArrayToRef(DD, CD, cD) {
        return cD.x = DD[CD], cD.y = DD[CD + 1], cD
      }
      static FromFloatsToRef(DD, CD, cD) {
        return cD.K4(DD, CD), cD
      }
      static CatmullRom(DD, CD, cD, ID, pD) {
        const iD = pD * pD,
          fD = pD * iD,
          bD = .5 * (2 * CD.x + (-DD.x + cD.x) * pD + (2 * DD.x - 5 * CD.x + 4 * cD.x - ID.x) * iD + (-DD.x + 3 * CD.x - 3 * cD.x + ID.x) * fD),
          QD = .5 * (2 * CD.y + (-DD.y + cD.y) * pD + (2 * DD.y - 5 * CD.y + 4 * cD.y - ID.y) * iD + (-DD.y + 3 * CD.y - 3 * cD.y + ID.y) * fD);
        return new BD(bD, QD)
      }
      static ClampToRef(DD, CD, cD, ID) {
        return ID.x = (0, bD.Clamp)(DD.x, CD.x, cD.x), ID.y = (0, bD.Clamp)(DD.y, CD.y, cD.y), ID
      }
      static Clamp(DD, CD, cD) {
        const ID = (0, bD.Clamp)(DD.x, CD.x, cD.x),
          pD = (0, bD.Clamp)(DD.y, CD.y, cD.y);
        return new BD(ID, pD)
      }
      static Hermite(DD, CD, cD, ID, pD) {
        const iD = pD * pD,
          fD = pD * iD,
          bD = 2 * fD - 3 * iD + 1,
          QD = -2 * fD + 3 * iD,
          wD = fD - 2 * iD + pD,
          SD = fD - iD,
          yD = DD.x * bD + cD.x * QD + CD.x * wD + ID.x * SD,
          MD = DD.y * bD + cD.y * QD + CD.y * wD + ID.y * SD;
        return new BD(yD, MD)
      }
      static Hermite1stDerivative(DD, CD, cD, ID, pD) {
        return this.Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, new BD)
      }
      static Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD) {
        const fD = pD * pD;
        return iD.x = 6 * (fD - pD) * DD.x + (3 * fD - 4 * pD + 1) * CD.x + 6 * (-fD + pD) * cD.x + (3 * fD - 2 * pD) * ID.x, iD.y = 6 * (fD - pD) * DD.y + (3 * fD - 4 * pD + 1) * CD.y + 6 * (-fD + pD) * cD.y + (3 * fD - 2 * pD) * ID.y, iD
      }
      static Lerp(DD, CD, cD) {
        return BD.LerpToRef(DD, CD, cD, new BD)
      }
      static LerpToRef(DD, CD, cD, ID) {
        return ID.x = DD.x + (CD.x - DD.x) * cD, ID.y = DD.y + (CD.y - DD.y) * cD, ID
      }
      static Dot(DD, CD) {
        return DD.x * CD.x + DD.y * CD.y
      }
      static Normalize(DD) {
        return BD.NormalizeToRef(DD, new BD)
      }
      static NormalizeToRef(DD, CD) {
        return DD.normalizeToRef(CD), CD
      }
      static Minimize(DD, CD) {
        const cD = DD.x < CD.x ? DD.x : CD.x,
          ID = DD.y < CD.y ? DD.y : CD.y;
        return new BD(cD, ID)
      }
      static Maximize(DD, CD) {
        const cD = DD.x > CD.x ? DD.x : CD.x,
          ID = DD.y > CD.y ? DD.y : CD.y;
        return new BD(cD, ID)
      }
      static Transform(DD, CD) {
        return BD.TransformToRef(DD, CD, new BD)
      }
      static TransformToRef(DD, CD, cD) {
        const ID = CD.m,
          pD = DD.x * ID[0] + DD.y * ID[4] + ID[12],
          iD = DD.x * ID[1] + DD.y * ID[5] + ID[13];
        return cD.x = pD, cD.y = iD, cD
      }
      static PointInTriangle(DD, CD, cD, ID) {
        const pD = .5 * (-cD.y * ID.x + CD.y * (-cD.x + ID.x) + CD.x * (cD.y - ID.y) + cD.x * ID.y),
          iD = pD < 0 ? -1 : 1,
          fD = (CD.y * ID.x - CD.x * ID.y + (ID.y - CD.y) * DD.x + (CD.x - ID.x) * DD.y) * iD,
          bD = (CD.x * cD.y - CD.y * cD.x + (CD.y - cD.y) * DD.x + (cD.x - CD.x) * DD.y) * iD;
        return fD > 0 && bD > 0 && fD + bD < 2 * pD * iD
      }
      static Distance(DD, CD) {
        return Math.sqrt(BD.DistanceSquared(DD, CD))
      }
      static DistanceSquared(DD, CD) {
        const cD = DD.x - CD.x,
          ID = DD.y - CD.y;
        return cD * cD + ID * ID
      }
      static Center(DD, CD) {
        return BD.CenterToRef(DD, CD, new BD)
      }
      static CenterToRef(DD, CD, cD) {
        return cD.K4((DD.x + CD.x) / 2, (DD.y + CD.y) / 2)
      }
      static DistanceOfPointFromSegment(DD, CD, cD) {
        const ID = BD.DistanceSquared(CD, cD);
        if (0 === ID) return BD.Distance(DD, CD);
        const pD = cD.subtract(CD),
          iD = Math.max(0, Math.min(1, BD.Dot(DD.subtract(CD), pD) / ID)),
          fD = CD.add(pD.multiplyByFloats(iD, iD));
        return BD.Distance(DD, fD)
      }
    }
    BD._V8PerformanceHack = new BD(.5, .5), BD._ZeroReadOnly = BD.Zero();
    class yD {
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
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = DD, this._y = CD, this._z = cD
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "cZ"
      }
      getHashCode() {
        let DD = SD(this._x);
        return DD = 397 * DD ^ SD(this._y), DD = 397 * DD ^ SD(this._z), DD
      }
      XcD() {
        return [this._x, this._y, this._z]
      }
      toArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[CD] = this._x, DD[CD + 1] = this._y, DD[CD + 2] = this._z, this
      }
      QCD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yD.FromArrayToRef(DD, CD, this), this
      }
      toQuaternion() {
        return tD.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(DD) {
        return this._x += DD._x, this._y += DD._y, this._z += DD._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(DD, CD, cD) {
        return this._x += DD, this._y += CD, this._z += cD, this._isDirty = !0, this
      }
      add(DD) {
        return new yD(this._x + DD._x, this._y + DD._y, this._z + DD._z)
      }
      addToRef(DD, CD) {
        return CD._x = this._x + DD._x, CD._y = this._y + DD._y, CD._z = this._z + DD._z, CD._isDirty = !0, CD
      }
      EcD(DD) {
        return this._x -= DD._x, this._y -= DD._y, this._z -= DD._z, this._isDirty = !0, this
      }
      subtract(DD) {
        return new yD(this._x - DD._x, this._y - DD._y, this._z - DD._z)
      }
      subtractToRef(DD, CD) {
        return this.subtractFromFloatsToRef(DD._x, DD._y, DD._z, CD)
      }
      subtractFromFloats(DD, CD, cD) {
        return new yD(this._x - DD, this._y - CD, this._z - cD)
      }
      subtractFromFloatsToRef(DD, CD, cD, ID) {
        return ID._x = this._x - DD, ID._y = this._y - CD, ID._z = this._z - cD, ID._isDirty = !0, ID
      }
      pp() {
        return new yD(-this._x, -this._y, -this._z)
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
        return new yD(this._x * DD, this._y * DD, this._z * DD)
      }
      scaleToRef(DD, CD) {
        return CD._x = this._x * DD, CD._y = this._y * DD, CD._z = this._z * DD, CD._isDirty = !0, CD
      }
      getNormalToRef(DD) {
        const CD = this.length();
        let cD = Math.acos(this._y / CD);
        const ID = Math.atan2(this._z, this._x);
        cD > Math.PI / 2 ? cD -= Math.PI / 2 : cD += Math.PI / 2;
        const pD = CD * Math.sin(cD) * Math.cos(ID),
          iD = CD * Math.cos(cD),
          fD = CD * Math.sin(cD) * Math.sin(ID);
        return DD.set(pD, iD, fD), DD
      }
      applyRotationQuaternionToRef(DD, CD) {
        const cD = this._x,
          ID = this._y,
          pD = this._z,
          iD = DD._x,
          fD = DD._y,
          bD = DD._z,
          QD = DD._w,
          wD = 2 * (fD * pD - bD * ID),
          SD = 2 * (bD * cD - iD * pD),
          BD = 2 * (iD * ID - fD * cD);
        return CD._x = cD + QD * wD + fD * BD - bD * SD, CD._y = ID + QD * SD + bD * wD - iD * BD, CD._z = pD + QD * BD + iD * SD - fD * wD, CD._isDirty = !0, CD
      }
      applyRotationQuaternionInPlace(DD) {
        return this.applyRotationQuaternionToRef(DD, this)
      }
      applyRotationQuaternion(DD) {
        return this.applyRotationQuaternionToRef(DD, new yD)
      }
      scaleAndAddToRef(DD, CD) {
        return CD._x += this._x * DD, CD._y += this._y * DD, CD._z += this._z * DD, CD._isDirty = !0, CD
      }
      projectOnPlane(DD, CD) {
        return this.projectOnPlaneToRef(DD, CD, new yD)
      }
      projectOnPlaneToRef(DD, CD, cD) {
        const ID = DD.normal,
          pD = DD.d,
          iD = oD.cZ[0];
        this.subtractToRef(CD, iD), iD.normalize();
        const fD = yD.Dot(iD, ID);
        if (Math.abs(fD) < 1e-10) cD.YF(1 / 0);
        else {
          const DD = -(yD.Dot(CD, ID) + pD) / fD,
            bD = iD.scaleInPlace(DD);
          CD.addToRef(bD, cD)
        }
        return cD
      }
      equals(DD) {
        return DD && this._x === DD._x && this._y === DD._y && this._z === DD._z
      }
      equalsWithEpsilon(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ID.c;
        return DD && (0, bD.WithinEpsilon)(this._x, DD._x, CD) && (0, bD.WithinEpsilon)(this._y, DD._y, CD) && (0, bD.WithinEpsilon)(this._z, DD._z, CD)
      }
      wfD(DD, CD, cD) {
        return this._x === DD && this._y === CD && this._z === cD
      }
      multiplyInPlace(DD) {
        return this._x *= DD._x, this._y *= DD._y, this._z *= DD._z, this._isDirty = !0, this
      }
      multiply(DD) {
        return this.multiplyByFloats(DD._x, DD._y, DD._z)
      }
      multiplyToRef(DD, CD) {
        return CD._x = this._x * DD._x, CD._y = this._y * DD._y, CD._z = this._z * DD._z, CD._isDirty = !0, CD
      }
      multiplyByFloats(DD, CD, cD) {
        return new yD(this._x * DD, this._y * CD, this._z * cD)
      }
      divide(DD) {
        return new yD(this._x / DD._x, this._y / DD._y, this._z / DD._z)
      }
      divideToRef(DD, CD) {
        return CD._x = this._x / DD._x, CD._y = this._y / DD._y, CD._z = this._z / DD._z, CD._isDirty = !0, CD
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
      minimizeInPlaceFromFloats(DD, CD, cD) {
        return DD < this._x && (this.x = DD), CD < this._y && (this.y = CD), cD < this._z && (this.z = cD), this
      }
      maximizeInPlaceFromFloats(DD, CD, cD) {
        return DD > this._x && (this.x = DD), CD > this._y && (this.y = CD), cD > this._z && (this.z = cD), this
      }
      isNonUniformWithinEpsilon(DD) {
        const CD = Math.abs(this._x),
          cD = Math.abs(this._y);
        if (!(0, bD.WithinEpsilon)(CD, cD, DD)) return !0;
        const ID = Math.abs(this._z);
        return !(0, bD.WithinEpsilon)(CD, ID, DD) || !(0, bD.WithinEpsilon)(cD, ID, DD)
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
        return new yD(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(DD) {
        return DD._x = this._x - Math.floor(this._x), DD._y = this._y - Math.floor(this._y), DD._z = this._z - Math.floor(this._z), DD._isDirty = !0, DD
      }
      fract() {
        return new yD(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const CD = oD.cZ[0].YCD(this);
        return this.x = CD[DD[0]], this.y = CD[DD[1]], this.z = CD[DD[2]], this
      }
      rotateByQuaternionToRef(DD, CD) {
        return DD.toRotationMatrix(oD.Matrix[0]), yD.TransformCoordinatesToRef(this, oD.Matrix[0], CD), CD
      }
      rotateByQuaternionAroundPointToRef(DD, CD, cD) {
        return this.subtractToRef(CD, oD.cZ[0]), oD.cZ[0].rotateByQuaternionToRef(DD, oD.cZ[0]), CD.addToRef(oD.cZ[0], cD), cD
      }
      cross(DD) {
        return yD.CrossToRef(this, DD, new yD)
      }
      normalizeFromLength(DD) {
        return 0 === DD || 1 === DD ? this : this.scaleInPlace(1 / DD)
      }
      normalizeToNew() {
        return this.normalizeToRef(new yD)
      }
      normalizeToRef(DD) {
        const CD = this.length();
        return 0 === CD || 1 === CD ? (DD._x = this._x, DD._y = this._y, DD._z = this._z, DD._isDirty = !0, DD) : this.scaleToRef(1 / CD, DD)
      }
      clone() {
        return new yD(this._x, this._y, this._z)
      }
      YCD(DD) {
        return this.K4(DD._x, DD._y, DD._z)
      }
      K4(DD, CD, cD) {
        return this._x = DD, this._y = CD, this._z = cD, this._isDirty = !0, this
      }
      set(DD, CD, cD) {
        return this.K4(DD, CD, cD)
      }
      YF(DD) {
        return this._x = this._y = this._z = DD, this._isDirty = !0, this
      }
      static GetClipFactor(DD, CD, cD, ID) {
        const pD = yD.Dot(DD, cD);
        return (pD - ID) / (pD - yD.Dot(CD, cD))
      }
      static GetAngleBetweenVectors(DD, CD, cD) {
        const ID = DD.normalizeToRef(oD.cZ[1]),
          pD = CD.normalizeToRef(oD.cZ[2]);
        let iD = yD.Dot(ID, pD);
        iD = (0, bD.Clamp)(iD, -1, 1);
        const fD = Math.acos(iD),
          QD = oD.cZ[3];
        return yD.CrossToRef(ID, pD, QD), yD.Dot(QD, cD) > 0 ? isNaN(fD) ? 0 : fD : isNaN(fD) ? -Math.PI : -Math.acos(iD)
      }
      static GetAngleBetweenVectorsOnPlane(DD, CD, cD) {
        oD.cZ[0].YCD(DD);
        const ID = oD.cZ[0];
        oD.cZ[1].YCD(CD);
        const pD = oD.cZ[1];
        oD.cZ[2].YCD(cD);
        const iD = oD.cZ[2],
          fD = oD.cZ[3],
          QD = oD.cZ[4];
        ID.normalize(), pD.normalize(), iD.normalize(), yD.CrossToRef(iD, ID, fD), yD.CrossToRef(fD, iD, QD);
        const wD = Math.atan2(yD.Dot(pD, fD), yD.Dot(pD, QD));
        return (0, bD.NormalizeRadians)(wD)
      }
      static PitchYawRollToMoveBetweenPointsToRef(DD, CD, cD) {
        const ID = vD.cZ[0];
        return CD.subtractToRef(DD, ID), cD._y = Math.atan2(ID.x, ID.z) || 0, cD._x = Math.atan2(Math.sqrt(ID.x ** 2 + ID.z ** 2), ID.y) || 0, cD._z = 0, cD._isDirty = !0, cD
      }
      static PitchYawRollToMoveBetweenPoints(DD, CD) {
        const cD = yD.Zero();
        return yD.PitchYawRollToMoveBetweenPointsToRef(DD, CD, cD)
      }
      static SlerpToRef(DD, CD, cD, pD) {
        cD = (0, bD.Clamp)(cD, 0, 1);
        const iD = oD.cZ[0],
          fD = oD.cZ[1];
        iD.YCD(DD);
        const QD = iD.length();
        iD.normalizeFromLength(QD), fD.YCD(CD);
        const wD = fD.length();
        fD.normalizeFromLength(wD);
        const SD = yD.Dot(iD, fD);
        let BD, MD;
        if (SD < 1 - ID.c) {
          const DD = Math.acos(SD),
            CD = 1 / Math.sin(DD);
          BD = Math.sin((1 - cD) * DD) * CD, MD = Math.sin(cD * DD) * CD
        } else BD = 1 - cD, MD = cD;
        return iD.scaleInPlace(BD), fD.scaleInPlace(MD), pD.YCD(iD).addInPlace(fD), pD.scaleInPlace((0, bD.Lerp)(QD, wD, cD)), pD
      }
      static SmoothToRef(DD, CD, cD, ID, pD) {
        return yD.SlerpToRef(DD, CD, 0 === ID ? 1 : cD / ID, pD), pD
      }
      static FromArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new yD(DD[CD], DD[CD + 1], DD[CD + 2])
      }
      static FromFloatArray(DD, CD) {
        return yD.FromArray(DD, CD)
      }
      static FromArrayToRef(DD, CD, cD) {
        return cD._x = DD[CD], cD._y = DD[CD + 1], cD._z = DD[CD + 2], cD._isDirty = !0, cD
      }
      static FromFloatArrayToRef(DD, CD, cD) {
        return yD.FromArrayToRef(DD, CD, cD)
      }
      static FromFloatsToRef(DD, CD, cD, ID) {
        return ID.K4(DD, CD, cD), ID
      }
      static Zero() {
        return new yD(0, 0, 0)
      }
      static One() {
        return new yD(1, 1, 1)
      }
      static Up() {
        return new yD(0, 1, 0)
      }
      static get UpReadOnly() {
        return yD._UpReadOnly
      }
      static get DownReadOnly() {
        return yD._DownReadOnly
      }
      static get RightReadOnly() {
        return yD._RightReadOnly
      }
      static get LeftReadOnly() {
        return yD._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return yD._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return yD._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return yD._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return yD._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return yD._ZeroReadOnly
      }
      static get OneReadOnly() {
        return yD._OneReadOnly
      }
      static Down() {
        return new yD(0, -1, 0)
      }
      static Forward() {
        return new yD(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new yD(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new yD(1, 0, 0)
      }
      static Left() {
        return new yD(-1, 0, 0)
      }
      static Random() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new yD((0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD))
      }
      static RandomToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K4((0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD))
      }
      static TransformCoordinates(DD, CD) {
        const cD = yD.Zero();
        return yD.TransformCoordinatesToRef(DD, CD, cD), cD
      }
      static TransformCoordinatesToRef(DD, CD, cD) {
        return yD.TransformCoordinatesFromFloatsToRef(DD._x, DD._y, DD._z, CD, cD), cD
      }
      static TransformCoordinatesFromFloatsToRef(DD, CD, cD, ID, pD) {
        const iD = ID.m,
          fD = DD * iD[0] + CD * iD[4] + cD * iD[8] + iD[12],
          bD = DD * iD[1] + CD * iD[5] + cD * iD[9] + iD[13],
          QD = DD * iD[2] + CD * iD[6] + cD * iD[10] + iD[14],
          wD = 1 / (DD * iD[3] + CD * iD[7] + cD * iD[11] + iD[15]);
        return pD._x = fD * wD, pD._y = bD * wD, pD._z = QD * wD, pD._isDirty = !0, pD
      }
      static TransformNormal(DD, CD) {
        const cD = yD.Zero();
        return yD.TransformNormalToRef(DD, CD, cD), cD
      }
      static TransformNormalToRef(DD, CD, cD) {
        return this.TransformNormalFromFloatsToRef(DD._x, DD._y, DD._z, CD, cD), cD
      }
      static TransformNormalFromFloatsToRef(DD, CD, cD, ID, pD) {
        const iD = ID.m;
        return pD._x = DD * iD[0] + CD * iD[4] + cD * iD[8], pD._y = DD * iD[1] + CD * iD[5] + cD * iD[9], pD._z = DD * iD[2] + CD * iD[6] + cD * iD[10], pD._isDirty = !0, pD
      }
      static CatmullRom(DD, CD, cD, ID, pD) {
        const iD = pD * pD,
          fD = pD * iD,
          bD = .5 * (2 * CD._x + (-DD._x + cD._x) * pD + (2 * DD._x - 5 * CD._x + 4 * cD._x - ID._x) * iD + (-DD._x + 3 * CD._x - 3 * cD._x + ID._x) * fD),
          QD = .5 * (2 * CD._y + (-DD._y + cD._y) * pD + (2 * DD._y - 5 * CD._y + 4 * cD._y - ID._y) * iD + (-DD._y + 3 * CD._y - 3 * cD._y + ID._y) * fD),
          wD = .5 * (2 * CD._z + (-DD._z + cD._z) * pD + (2 * DD._z - 5 * CD._z + 4 * cD._z - ID._z) * iD + (-DD._z + 3 * CD._z - 3 * cD._z + ID._z) * fD);
        return new yD(bD, QD, wD)
      }
      static Clamp(DD, CD, cD) {
        const ID = new yD;
        return yD.ClampToRef(DD, CD, cD, ID), ID
      }
      static ClampToRef(DD, CD, cD, ID) {
        let pD = DD._x;
        pD = pD > cD._x ? cD._x : pD, pD = pD < CD._x ? CD._x : pD;
        let iD = DD._y;
        iD = iD > cD._y ? cD._y : iD, iD = iD < CD._y ? CD._y : iD;
        let fD = DD._z;
        return fD = fD > cD._z ? cD._z : fD, fD = fD < CD._z ? CD._z : fD, ID.K4(pD, iD, fD), ID
      }
      static CheckExtends(DD, CD, cD) {
        CD.minimizeInPlace(DD), cD.maximizeInPlace(DD)
      }
      static Hermite(DD, CD, cD, ID, pD) {
        const iD = pD * pD,
          fD = pD * iD,
          bD = 2 * fD - 3 * iD + 1,
          QD = -2 * fD + 3 * iD,
          wD = fD - 2 * iD + pD,
          SD = fD - iD,
          BD = DD._x * bD + cD._x * QD + CD._x * wD + ID._x * SD,
          MD = DD._y * bD + cD._y * QD + CD._y * wD + ID._y * SD,
          tD = DD._z * bD + cD._z * QD + CD._z * wD + ID._z * SD;
        return new yD(BD, MD, tD)
      }
      static Hermite1stDerivative(DD, CD, cD, ID, pD) {
        const iD = new yD;
        return this.Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD), iD
      }
      static Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD) {
        const fD = pD * pD;
        return iD._x = 6 * (fD - pD) * DD._x + (3 * fD - 4 * pD + 1) * CD._x + 6 * (-fD + pD) * cD._x + (3 * fD - 2 * pD) * ID._x, iD._y = 6 * (fD - pD) * DD._y + (3 * fD - 4 * pD + 1) * CD._y + 6 * (-fD + pD) * cD._y + (3 * fD - 2 * pD) * ID._y, iD._z = 6 * (fD - pD) * DD._z + (3 * fD - 4 * pD + 1) * CD._z + 6 * (-fD + pD) * cD._z + (3 * fD - 2 * pD) * ID._z, iD._isDirty = !0, iD
      }
      static Lerp(DD, CD, cD) {
        const ID = new yD(0, 0, 0);
        return yD.LerpToRef(DD, CD, cD, ID), ID
      }
      static LerpToRef(DD, CD, cD, ID) {
        return ID._x = DD._x + (CD._x - DD._x) * cD, ID._y = DD._y + (CD._y - DD._y) * cD, ID._z = DD._z + (CD._z - DD._z) * cD, ID._isDirty = !0, ID
      }
      static Dot(DD, CD) {
        return DD._x * CD._x + DD._y * CD._y + DD._z * CD._z
      }
      dot(DD) {
        return this._x * DD._x + this._y * DD._y + this._z * DD._z
      }
      static Cross(DD, CD) {
        const cD = new yD;
        return yD.CrossToRef(DD, CD, cD), cD
      }
      static CrossToRef(DD, CD, cD) {
        const ID = DD._y * CD._z - DD._z * CD._y,
          pD = DD._z * CD._x - DD._x * CD._z,
          iD = DD._x * CD._y - DD._y * CD._x;
        return cD.K4(ID, pD, iD), cD
      }
      static Normalize(DD) {
        const CD = yD.Zero();
        return yD.NormalizeToRef(DD, CD), CD
      }
      static NormalizeToRef(DD, CD) {
        return DD.normalizeToRef(CD), CD
      }
      static Project(DD, CD, cD, ID) {
        const pD = new yD;
        return yD.ProjectToRef(DD, CD, cD, ID, pD), pD
      }
      static ProjectToRef(DD, CD, cD, ID, pD) {
        const iD = ID.width,
          bD = ID.height,
          QD = ID.x,
          wD = ID.y,
          SD = oD.Matrix[1],
          BD = fD.b.LastCreatedEngine?.isNDCHalfZRange,
          MD = BD ? 1 : .5,
          tD = BD ? 0 : .5;
        ZD.FromValuesToRef(iD / 2, 0, 0, 0, 0, -bD / 2, 0, 0, 0, 0, MD, 0, QD + iD / 2, bD / 2 + wD, tD, 1, SD);
        const vD = oD.Matrix[0];
        return CD.multiplyToRef(cD, vD), vD.multiplyToRef(SD, vD), yD.TransformCoordinatesToRef(DD, vD, pD), pD
      }
      static Reflect(DD, CD) {
        return this.ReflectToRef(DD, CD, new yD)
      }
      static ReflectToRef(DD, CD, cD) {
        const ID = vD.cZ[0];
        return ID.YCD(CD).scaleInPlace(2 * yD.Dot(DD, CD)), cD.YCD(DD).EcD(ID)
      }
      static UnprojectFromTransform(DD, CD, cD, ID, pD) {
        return this.Unproject(DD, CD, cD, ID, pD, ZD.IdentityReadOnly)
      }
      static Unproject(DD, CD, cD, ID, pD, iD) {
        const fD = new yD;
        return yD.UnprojectToRef(DD, CD, cD, ID, pD, iD, fD), fD
      }
      static UnprojectToRef(DD, CD, cD, ID, pD, iD, fD) {
        return yD.UnprojectFloatsToRef(DD._x, DD._y, DD._z, CD, cD, ID, pD, iD, fD), fD
      }
      static UnprojectFloatsToRef(DD, CD, cD, ID, pD, iD, bD, QD, wD) {
        const SD = oD.Matrix[0];
        iD.multiplyToRef(bD, SD), SD.multiplyToRef(QD, SD), SD.invert();
        const BD = oD.cZ[0];
        return BD.x = DD / ID * 2 - 1, BD.y = -(CD / pD * 2 - 1), fD.b.LastCreatedEngine?.isNDCHalfZRange ? BD.z = cD : BD.z = 2 * cD - 1, yD.TransformCoordinatesToRef(BD, SD, wD), wD
      }
      static Minimize(DD, CD) {
        const cD = new yD;
        return cD.YCD(DD), cD.minimizeInPlace(CD), cD
      }
      static Maximize(DD, CD) {
        const cD = new yD;
        return cD.YCD(DD), cD.maximizeInPlace(CD), cD
      }
      static Distance(DD, CD) {
        return Math.sqrt(yD.DistanceSquared(DD, CD))
      }
      static DistanceSquared(DD, CD) {
        const cD = DD._x - CD._x,
          ID = DD._y - CD._y,
          pD = DD._z - CD._z;
        return cD * cD + ID * ID + pD * pD
      }
      static ProjectOnTriangleToRef(DD, CD, cD, pD, iD) {
        const fD = oD.cZ[0],
          QD = oD.cZ[1],
          wD = oD.cZ[2],
          SD = oD.cZ[3],
          BD = oD.cZ[4];
        cD.subtractToRef(CD, fD), pD.subtractToRef(CD, QD), pD.subtractToRef(cD, wD);
        const MD = fD.length(),
          tD = QD.length(),
          ZD = wD.length();
        if (MD < ID.c || tD < ID.c || ZD < ID.c) return iD.YCD(CD), yD.Distance(DD, CD);
        DD.subtractToRef(CD, BD), yD.CrossToRef(fD, QD, SD);
        const vD = SD.length();
        if (vD < ID.c) return iD.YCD(CD), yD.Distance(DD, CD);
        SD.normalizeFromLength(vD);
        let ND = BD.length();
        if (ND < ID.c) return iD.YCD(CD), 0;
        BD.normalizeFromLength(ND);
        const gD = yD.Dot(SD, BD),
          XD = oD.cZ[5],
          mD = oD.cZ[6];
        XD.YCD(SD).scaleInPlace(-ND * gD), mD.YCD(DD).addInPlace(XD);
        const nD = oD.cZ[4],
          OD = oD.cZ[5],
          PD = oD.cZ[7],
          HD = oD.cZ[8];
        nD.YCD(fD).scaleInPlace(1 / MD), HD.YCD(QD).scaleInPlace(1 / tD), nD.addInPlace(HD).scaleInPlace(-1), OD.YCD(fD).scaleInPlace(-1 / MD), HD.YCD(wD).scaleInPlace(1 / ZD), OD.addInPlace(HD).scaleInPlace(-1), PD.YCD(wD).scaleInPlace(-1 / ZD), HD.YCD(QD).scaleInPlace(-1 / tD), PD.addInPlace(HD).scaleInPlace(-1);
        const UD = oD.cZ[9];
        let xD;
        UD.YCD(mD).EcD(CD), yD.CrossToRef(nD, UD, HD), xD = yD.Dot(HD, SD);
        const qD = xD;
        UD.YCD(mD).EcD(cD), yD.CrossToRef(OD, UD, HD), xD = yD.Dot(HD, SD);
        const JD = xD;
        UD.YCD(mD).EcD(pD), yD.CrossToRef(PD, UD, HD), xD = yD.Dot(HD, SD);
        const KD = xD,
          aD = oD.cZ[10];
        let VD, zD;
        qD > 0 && JD < 0 ? (aD.YCD(fD), VD = CD, zD = cD) : JD > 0 && KD < 0 ? (aD.YCD(wD), VD = cD, zD = pD) : (aD.YCD(QD).scaleInPlace(-1), VD = pD, zD = CD);
        const jD = oD.cZ[9],
          lD = oD.cZ[4];
        VD.subtractToRef(mD, HD), zD.subtractToRef(mD, jD), yD.CrossToRef(HD, jD, lD);
        if (!(yD.Dot(lD, SD) < 0)) return iD.YCD(mD), Math.abs(ND * gD);
        const LD = oD.cZ[5];
        yD.CrossToRef(aD, lD, LD), LD.normalize();
        const TD = oD.cZ[9];
        TD.YCD(VD).EcD(mD);
        const GD = TD.length();
        if (GD < ID.c) return iD.YCD(VD), yD.Distance(DD, VD);
        TD.normalizeFromLength(GD);
        const RD = yD.Dot(LD, TD),
          kD = oD.cZ[7];
        kD.YCD(mD).addInPlace(LD.scaleInPlace(GD * RD)), HD.YCD(kD).EcD(VD), ND = aD.length(), aD.normalizeFromLength(ND);
        let dD = yD.Dot(HD, aD) / Math.max(ND, ID.c);
        return dD = (0, bD.Clamp)(dD, 0, 1), kD.YCD(VD).addInPlace(aD.scaleInPlace(dD * ND)), iD.YCD(kD), yD.Distance(DD, kD)
      }
      static Center(DD, CD) {
        return yD.CenterToRef(DD, CD, yD.Zero())
      }
      static CenterToRef(DD, CD, cD) {
        return cD.K4((DD._x + CD._x) / 2, (DD._y + CD._y) / 2, (DD._z + CD._z) / 2)
      }
      static RotationFromAxis(DD, CD, cD) {
        const ID = new yD;
        return yD.RotationFromAxisToRef(DD, CD, cD, ID), ID
      }
      static RotationFromAxisToRef(DD, CD, cD, ID) {
        const pD = oD.Quaternion[0];
        return tD.RotationQuaternionFromAxisToRef(DD, CD, cD, pD), pD.toEulerAnglesToRef(ID), ID
      }
    }
    yD._V8PerformanceHack = new yD(.5, .5, .5), yD._UpReadOnly = yD.Up(), yD._DownReadOnly = yD.Down(), yD._LeftHandedForwardReadOnly = yD.Forward(!1), yD._RightHandedForwardReadOnly = yD.Forward(!0), yD._LeftHandedBackwardReadOnly = yD.Backward(!1), yD._RightHandedBackwardReadOnly = yD.Backward(!0), yD._RightReadOnly = yD.Right(), yD._LeftReadOnly = yD.Left(), yD._ZeroReadOnly = yD.Zero(), yD._OneReadOnly = yD.One();
    class MD {
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
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = DD, this._y = CD, this._z = cD, this._w = ID
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let DD = SD(this._x);
        return DD = 397 * DD ^ SD(this._y), DD = 397 * DD ^ SD(this._z), DD = 397 * DD ^ SD(this._w), DD
      }
      XcD() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(DD, CD) {
        return void 0 === CD && (CD = 0), DD[CD] = this._x, DD[CD + 1] = this._y, DD[CD + 2] = this._z, DD[CD + 3] = this._w, this
      }
      QCD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return MD.FromArrayToRef(DD, CD, this), this
      }
      addInPlace(DD) {
        return this.x += DD._x, this.y += DD._y, this.z += DD._z, this.w += DD._w, this
      }
      addInPlaceFromFloats(DD, CD, cD, ID) {
        return this.x += DD, this.y += CD, this.z += cD, this.w += ID, this
      }
      add(DD) {
        return new MD(this._x + DD.x, this._y + DD.y, this._z + DD.z, this._w + DD.w)
      }
      addToRef(DD, CD) {
        return CD.x = this._x + DD.x, CD.y = this._y + DD.y, CD.z = this._z + DD.z, CD.w = this._w + DD.w, CD
      }
      EcD(DD) {
        return this.x -= DD.x, this.y -= DD.y, this.z -= DD.z, this.w -= DD.w, this
      }
      subtract(DD) {
        return new MD(this._x - DD.x, this._y - DD.y, this._z - DD.z, this._w - DD.w)
      }
      subtractToRef(DD, CD) {
        return CD.x = this._x - DD.x, CD.y = this._y - DD.y, CD.z = this._z - DD.z, CD.w = this._w - DD.w, CD
      }
      subtractFromFloats(DD, CD, cD, ID) {
        return new MD(this._x - DD, this._y - CD, this._z - cD, this._w - ID)
      }
      subtractFromFloatsToRef(DD, CD, cD, ID, pD) {
        return pD.x = this._x - DD, pD.y = this._y - CD, pD.z = this._z - cD, pD.w = this._w - ID, pD
      }
      pp() {
        return new MD(-this._x, -this._y, -this._z, -this._w)
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
        return new MD(this._x * DD, this._y * DD, this._z * DD, this._w * DD)
      }
      scaleToRef(DD, CD) {
        return CD.x = this._x * DD, CD.y = this._y * DD, CD.z = this._z * DD, CD.w = this._w * DD, CD
      }
      scaleAndAddToRef(DD, CD) {
        return CD.x += this._x * DD, CD.y += this._y * DD, CD.z += this._z * DD, CD.w += this._w * DD, CD
      }
      equals(DD) {
        return DD && this._x === DD.x && this._y === DD.y && this._z === DD.z && this._w === DD.w
      }
      equalsWithEpsilon(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ID.c;
        return DD && (0, bD.WithinEpsilon)(this._x, DD.x, CD) && (0, bD.WithinEpsilon)(this._y, DD.y, CD) && (0, bD.WithinEpsilon)(this._z, DD.z, CD) && (0, bD.WithinEpsilon)(this._w, DD.w, CD)
      }
      wfD(DD, CD, cD, ID) {
        return this._x === DD && this._y === CD && this._z === cD && this._w === ID
      }
      multiplyInPlace(DD) {
        return this.x *= DD.x, this.y *= DD.y, this.z *= DD.z, this.w *= DD.w, this
      }
      multiply(DD) {
        return new MD(this._x * DD.x, this._y * DD.y, this._z * DD.z, this._w * DD.w)
      }
      multiplyToRef(DD, CD) {
        return CD.x = this._x * DD.x, CD.y = this._y * DD.y, CD.z = this._z * DD.z, CD.w = this._w * DD.w, CD
      }
      multiplyByFloats(DD, CD, cD, ID) {
        return new MD(this._x * DD, this._y * CD, this._z * cD, this._w * ID)
      }
      divide(DD) {
        return new MD(this._x / DD.x, this._y / DD.y, this._z / DD.z, this._w / DD.w)
      }
      divideToRef(DD, CD) {
        return CD.x = this._x / DD.x, CD.y = this._y / DD.y, CD.z = this._z / DD.z, CD.w = this._w / DD.w, CD
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
      minimizeInPlaceFromFloats(DD, CD, cD, ID) {
        return this.x = Math.min(DD, this._x), this.y = Math.min(CD, this._y), this.z = Math.min(cD, this._z), this.w = Math.min(ID, this._w), this
      }
      maximizeInPlaceFromFloats(DD, CD, cD, ID) {
        return this.x = Math.max(DD, this._x), this.y = Math.max(CD, this._y), this.z = Math.max(cD, this._z), this.w = Math.max(ID, this._w), this
      }
      floorToRef(DD) {
        return DD.x = Math.floor(this._x), DD.y = Math.floor(this._y), DD.z = Math.floor(this._z), DD.w = Math.floor(this._w), DD
      }
      floor() {
        return new MD(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(DD) {
        return DD.x = this._x - Math.floor(this._x), DD.y = this._y - Math.floor(this._y), DD.z = this._z - Math.floor(this._z), DD.w = this._w - Math.floor(this._w), DD
      }
      fract() {
        return new MD(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new MD)
      }
      normalizeToRef(DD) {
        const CD = this.length();
        return 0 === CD || 1 === CD ? (DD.x = this._x, DD.y = this._y, DD.z = this._z, DD.w = this._w, DD) : this.scaleToRef(1 / CD, DD)
      }
      toVector3() {
        return new yD(this._x, this._y, this._z)
      }
      clone() {
        return new MD(this._x, this._y, this._z, this._w)
      }
      YCD(DD) {
        return this.x = DD.x, this.y = DD.y, this.z = DD.z, this.w = DD.w, this
      }
      K4(DD, CD, cD, ID) {
        return this.x = DD, this.y = CD, this.z = cD, this.w = ID, this
      }
      set(DD, CD, cD, ID) {
        return this.K4(DD, CD, cD, ID)
      }
      YF(DD) {
        return this.x = this.y = this.z = this.w = DD, this
      }
      dot(DD) {
        return this._x * DD.x + this._y * DD.y + this._z * DD.z + this._w * DD.w
      }
      static FromArray(DD, CD) {
        return CD || (CD = 0), new MD(DD[CD], DD[CD + 1], DD[CD + 2], DD[CD + 3])
      }
      static FromArrayToRef(DD, CD, cD) {
        return cD.x = DD[CD], cD.y = DD[CD + 1], cD.z = DD[CD + 2], cD.w = DD[CD + 3], cD
      }
      static FromFloatArrayToRef(DD, CD, cD) {
        return MD.FromArrayToRef(DD, CD, cD), cD
      }
      static FromFloatsToRef(DD, CD, cD, ID, pD) {
        return pD.x = DD, pD.y = CD, pD.z = cD, pD.w = ID, pD
      }
      static Zero() {
        return new MD(0, 0, 0, 0)
      }
      static One() {
        return new MD(1, 1, 1, 1)
      }
      static Random() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new MD((0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD))
      }
      static RandomToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        return cD.x = (0, bD.RandomRange)(DD, CD), cD.y = (0, bD.RandomRange)(DD, CD), cD.z = (0, bD.RandomRange)(DD, CD), cD.w = (0, bD.RandomRange)(DD, CD), cD
      }
      static Clamp(DD, CD, cD) {
        return MD.ClampToRef(DD, CD, cD, new MD)
      }
      static ClampToRef(DD, CD, cD, ID) {
        return ID.x = (0, bD.Clamp)(DD.x, CD.x, cD.x), ID.y = (0, bD.Clamp)(DD.y, CD.y, cD.y), ID.z = (0, bD.Clamp)(DD.z, CD.z, cD.z), ID.w = (0, bD.Clamp)(DD.w, CD.w, cD.w), ID
      }
      static CheckExtends(DD, CD, cD) {
        CD.minimizeInPlace(DD), cD.maximizeInPlace(DD)
      }
      static get ZeroReadOnly() {
        return MD._ZeroReadOnly
      }
      static Normalize(DD) {
        return MD.NormalizeToRef(DD, new MD)
      }
      static NormalizeToRef(DD, CD) {
        return DD.normalizeToRef(CD), CD
      }
      static Minimize(DD, CD) {
        const cD = new MD;
        return cD.YCD(DD), cD.minimizeInPlace(CD), cD
      }
      static Maximize(DD, CD) {
        const cD = new MD;
        return cD.YCD(DD), cD.maximizeInPlace(CD), cD
      }
      static Distance(DD, CD) {
        return Math.sqrt(MD.DistanceSquared(DD, CD))
      }
      static DistanceSquared(DD, CD) {
        const cD = DD.x - CD.x,
          ID = DD.y - CD.y,
          pD = DD.z - CD.z,
          iD = DD.w - CD.w;
        return cD * cD + ID * ID + pD * pD + iD * iD
      }
      static Center(DD, CD) {
        return MD.CenterToRef(DD, CD, new MD)
      }
      static CenterToRef(DD, CD, cD) {
        return cD.x = (DD.x + CD.x) / 2, cD.y = (DD.y + CD.y) / 2, cD.z = (DD.z + CD.z) / 2, cD.w = (DD.w + CD.w) / 2, cD
      }
      static TransformCoordinates(DD, CD) {
        return MD.TransformCoordinatesToRef(DD, CD, new MD)
      }
      static TransformCoordinatesToRef(DD, CD, cD) {
        return MD.TransformCoordinatesFromFloatsToRef(DD._x, DD._y, DD._z, CD, cD), cD
      }
      static TransformCoordinatesFromFloatsToRef(DD, CD, cD, ID, pD) {
        const iD = ID.m,
          fD = DD * iD[0] + CD * iD[4] + cD * iD[8] + iD[12],
          bD = DD * iD[1] + CD * iD[5] + cD * iD[9] + iD[13],
          QD = DD * iD[2] + CD * iD[6] + cD * iD[10] + iD[14],
          wD = DD * iD[3] + CD * iD[7] + cD * iD[11] + iD[15];
        return pD.x = fD, pD.y = bD, pD.z = QD, pD.w = wD, pD
      }
      static TransformNormal(DD, CD) {
        return MD.TransformNormalToRef(DD, CD, new MD)
      }
      static TransformNormalToRef(DD, CD, cD) {
        const ID = CD.m,
          pD = DD.x * ID[0] + DD.y * ID[4] + DD.z * ID[8],
          iD = DD.x * ID[1] + DD.y * ID[5] + DD.z * ID[9],
          fD = DD.x * ID[2] + DD.y * ID[6] + DD.z * ID[10];
        return cD.x = pD, cD.y = iD, cD.z = fD, cD.w = DD.w, cD
      }
      static TransformNormalFromFloatsToRef(DD, CD, cD, ID, pD, iD) {
        const fD = pD.m;
        return iD.x = DD * fD[0] + CD * fD[4] + cD * fD[8], iD.y = DD * fD[1] + CD * fD[5] + cD * fD[9], iD.z = DD * fD[2] + CD * fD[6] + cD * fD[10], iD.w = ID, iD
      }
      static FromVector3(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new MD(DD._x, DD._y, DD._z, CD)
      }
      static Dot(DD, CD) {
        return DD.x * CD.x + DD.y * CD.y + DD.z * CD.z + DD.w * CD.w
      }
    }
    MD._V8PerformanceHack = new MD(.5, .5, .5, .5), MD._ZeroReadOnly = MD.Zero();
    class tD {
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
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = DD, this._y = CD, this._z = cD, this._w = ID
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let DD = SD(this._x);
        return DD = 397 * DD ^ SD(this._y), DD = 397 * DD ^ SD(this._z), DD = 397 * DD ^ SD(this._w), DD
      }
      XcD() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[CD] = this._x, DD[CD + 1] = this._y, DD[CD + 2] = this._z, DD[CD + 3] = this._w, this
      }
      QCD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tD.FromArrayToRef(DD, CD, this)
      }
      equals(DD) {
        return DD && this._x === DD._x && this._y === DD._y && this._z === DD._z && this._w === DD._w
      }
      equalsWithEpsilon(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ID.c;
        return DD && (0, bD.WithinEpsilon)(this._x, DD._x, CD) && (0, bD.WithinEpsilon)(this._y, DD._y, CD) && (0, bD.WithinEpsilon)(this._z, DD._z, CD) && (0, bD.WithinEpsilon)(this._w, DD._w, CD)
      }
      isApprox(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ID.c;
        return DD && ((0, bD.WithinEpsilon)(this._x, DD._x, CD) && (0, bD.WithinEpsilon)(this._y, DD._y, CD) && (0, bD.WithinEpsilon)(this._z, DD._z, CD) && (0, bD.WithinEpsilon)(this._w, DD._w, CD) || (0, bD.WithinEpsilon)(this._x, -DD._x, CD) && (0, bD.WithinEpsilon)(this._y, -DD._y, CD) && (0, bD.WithinEpsilon)(this._z, -DD._z, CD) && (0, bD.WithinEpsilon)(this._w, -DD._w, CD))
      }
      clone() {
        return new tD(this._x, this._y, this._z, this._w)
      }
      YCD(DD) {
        return this._x = DD._x, this._y = DD._y, this._z = DD._z, this._w = DD._w, this._isDirty = !0, this
      }
      K4(DD, CD, cD, ID) {
        return this._x = DD, this._y = CD, this._z = cD, this._w = ID, this._isDirty = !0, this
      }
      set(DD, CD, cD, ID) {
        return this.K4(DD, CD, cD, ID)
      }
      YF(DD) {
        return this.K4(DD, DD, DD, DD)
      }
      add(DD) {
        return new tD(this._x + DD._x, this._y + DD._y, this._z + DD._z, this._w + DD._w)
      }
      addInPlace(DD) {
        return this._x += DD._x, this._y += DD._y, this._z += DD._z, this._w += DD._w, this._isDirty = !0, this
      }
      addToRef(DD, CD) {
        return CD._x = this._x + DD._x, CD._y = this._y + DD._y, CD._z = this._z + DD._z, CD._w = this._w + DD._w, CD._isDirty = !0, CD
      }
      addInPlaceFromFloats(DD, CD, cD, ID) {
        return this._x += DD, this._y += CD, this._z += cD, this._w += ID, this._isDirty = !0, this
      }
      subtractToRef(DD, CD) {
        return CD._x = this._x - DD._x, CD._y = this._y - DD._y, CD._z = this._z - DD._z, CD._w = this._w - DD._w, CD._isDirty = !0, CD
      }
      subtractFromFloats(DD, CD, cD, ID) {
        return this.subtractFromFloatsToRef(DD, CD, cD, ID, new tD)
      }
      subtractFromFloatsToRef(DD, CD, cD, ID, pD) {
        return pD._x = this._x - DD, pD._y = this._y - CD, pD._z = this._z - cD, pD._w = this._w - ID, pD._isDirty = !0, pD
      }
      subtract(DD) {
        return new tD(this._x - DD._x, this._y - DD._y, this._z - DD._z, this._w - DD._w)
      }
      EcD(DD) {
        return this._x -= DD._x, this._y -= DD._y, this._z -= DD._z, this._w -= DD._w, this._isDirty = !0, this
      }
      scale(DD) {
        return new tD(this._x * DD, this._y * DD, this._z * DD, this._w * DD)
      }
      scaleToRef(DD, CD) {
        return CD._x = this._x * DD, CD._y = this._y * DD, CD._z = this._z * DD, CD._w = this._w * DD, CD._isDirty = !0, CD
      }
      scaleInPlace(DD) {
        return this._x *= DD, this._y *= DD, this._z *= DD, this._w *= DD, this._isDirty = !0, this
      }
      scaleAndAddToRef(DD, CD) {
        return CD._x += this._x * DD, CD._y += this._y * DD, CD._z += this._z * DD, CD._w += this._w * DD, CD._isDirty = !0, CD
      }
      multiply(DD) {
        const CD = new tD(0, 0, 0, 1);
        return this.multiplyToRef(DD, CD), CD
      }
      multiplyToRef(DD, CD) {
        const cD = this._x * DD._w + this._y * DD._z - this._z * DD._y + this._w * DD._x,
          ID = -this._x * DD._z + this._y * DD._w + this._z * DD._x + this._w * DD._y,
          pD = this._x * DD._y - this._y * DD._x + this._z * DD._w + this._w * DD._z,
          iD = -this._x * DD._x - this._y * DD._y - this._z * DD._z + this._w * DD._w;
        return CD.K4(cD, ID, pD, iD), CD
      }
      multiplyInPlace(DD) {
        return this.multiplyToRef(DD, this)
      }
      multiplyByFloats(DD, CD, cD, ID) {
        return this._x *= DD, this._y *= CD, this._z *= cD, this._w *= ID, this._isDirty = !0, this
      }
      divide(DD) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(DD, CD) {
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
      pp() {
        return this.negateToRef(new tD)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(DD) {
        return DD._x = -this._x, DD._y = -this._y, DD._z = -this._z, DD._w = -this._w, DD._isDirty = !0, DD
      }
      wfD(DD, CD, cD, ID) {
        return this._x === DD && this._y === CD && this._z === cD && this._w === ID
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
        return DD.K4(-this._x, -this._y, -this._z, this._w), DD
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new tD(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const DD = this.conjugate(),
          CD = this.lengthSquared();
        return 0 == CD || 1 == CD || DD.scaleInPlace(1 / CD), DD
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
        const DD = new tD(0, 0, 0, 1);
        return this.normalizeToRef(DD), DD
      }
      normalizeToRef(DD) {
        const CD = this.length();
        return 0 === CD || 1 === CD ? DD.K4(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / CD, DD)
      }
      toEulerAngles() {
        const DD = yD.Zero();
        return this.toEulerAnglesToRef(DD), DD
      }
      toEulerAnglesToRef(DD) {
        const CD = this._z,
          cD = this._x,
          ID = this._y,
          pD = this._w,
          iD = ID * CD - cD * pD,
          fD = .4999999;
        if (iD < -fD) DD._y = 2 * Math.atan2(ID, pD), DD._x = Math.PI / 2, DD._z = 0, DD._isDirty = !0;
        else if (iD > fD) DD._y = 2 * Math.atan2(ID, pD), DD._x = -Math.PI / 2, DD._z = 0, DD._isDirty = !0;
        else {
          const fD = pD * pD,
            bD = CD * CD,
            QD = cD * cD,
            wD = ID * ID;
          DD._z = Math.atan2(2 * (cD * ID + CD * pD), -bD - QD + wD + fD), DD._x = Math.asin(-2 * iD), DD._y = Math.atan2(2 * (CD * cD + ID * pD), bD - QD - wD + fD), DD._isDirty = !0
        }
        return DD
      }
      toAlphaBetaGammaToRef(DD) {
        const CD = this._z,
          cD = this._x,
          ID = this._y,
          pD = this._w,
          iD = Math.sqrt(cD * cD + ID * ID),
          fD = Math.sqrt(CD * CD + pD * pD),
          bD = 2 * Math.atan2(iD, fD),
          QD = 2 * Math.atan2(CD, pD),
          wD = 2 * Math.atan2(ID, cD),
          SD = (QD + wD) / 2,
          BD = (QD - wD) / 2;
        return DD.set(BD, bD, SD), DD
      }
      toRotationMatrix(DD) {
        return ZD.FromQuaternionToRef(this, DD), DD
      }
      fromRotationMatrix(DD) {
        return tD.FromRotationMatrixToRef(DD, this), this
      }
      dot(DD) {
        return this._x * DD._x + this._y * DD._y + this._z * DD._z + this._w * DD._w
      }
      toAxisAngle() {
        const DD = yD.Zero();
        return {
          axis: DD,
          angle: this.toAxisAngleToRef(DD)
        }
      }
      toAxisAngleToRef(DD) {
        let CD;
        const cD = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          ID = this._w;
        return cD > 0 ? (CD = 2 * Math.atan2(cD, ID), DD.set(this._x / cD, this._y / cD, this._z / cD)) : (CD = 0, DD.set(1, 0, 0)), CD
      }
      static FromRotationMatrix(DD) {
        const CD = new tD;
        return tD.FromRotationMatrixToRef(DD, CD), CD
      }
      static FromRotationMatrixToRef(DD, CD) {
        const cD = DD.m,
          ID = cD[0],
          pD = cD[4],
          iD = cD[8],
          fD = cD[1],
          bD = cD[5],
          QD = cD[9],
          wD = cD[2],
          SD = cD[6],
          BD = cD[10],
          yD = ID + bD + BD;
        let MD;
        return yD > 0 ? (MD = .5 / Math.sqrt(yD + 1), CD._w = .25 / MD, CD._x = (SD - QD) * MD, CD._y = (iD - wD) * MD, CD._z = (fD - pD) * MD, CD._isDirty = !0) : ID > bD && ID > BD ? (MD = 2 * Math.sqrt(1 + ID - bD - BD), CD._w = (SD - QD) / MD, CD._x = .25 * MD, CD._y = (pD + fD) / MD, CD._z = (iD + wD) / MD, CD._isDirty = !0) : bD > BD ? (MD = 2 * Math.sqrt(1 + bD - ID - BD), CD._w = (iD - wD) / MD, CD._x = (pD + fD) / MD, CD._y = .25 * MD, CD._z = (QD + SD) / MD, CD._isDirty = !0) : (MD = 2 * Math.sqrt(1 + BD - ID - bD), CD._w = (fD - pD) / MD, CD._x = (iD + wD) / MD, CD._y = (QD + SD) / MD, CD._z = .25 * MD, CD._isDirty = !0), CD
      }
      static Dot(DD, CD) {
        return DD._x * CD._x + DD._y * CD._y + DD._z * CD._z + DD._w * CD._w
      }
      static AreClose(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const ID = tD.Dot(DD, CD);
        return 1 - ID * ID <= cD
      }
      static SmoothToRef(DD, CD, cD, ID, pD) {
        let iD = 0 === ID ? 1 : cD / ID;
        return iD = (0, bD.Clamp)(iD, 0, 1), tD.SlerpToRef(DD, CD, iD, pD), pD
      }
      static Zero() {
        return new tD(0, 0, 0, 0)
      }
      static Inverse(DD) {
        return new tD(-DD._x, -DD._y, -DD._z, DD._w)
      }
      static InverseToRef(DD, CD) {
        return CD.set(-DD._x, -DD._y, -DD._z, DD._w), CD
      }
      static Identity() {
        return new tD(0, 0, 0, 1)
      }
      static IsIdentity(DD) {
        return DD && 0 === DD._x && 0 === DD._y && 0 === DD._z && 1 === DD._w
      }
      static RotationAxis(DD, CD) {
        return tD.RotationAxisToRef(DD, CD, new tD)
      }
      static RotationAxisToRef(DD, CD, cD) {
        cD._w = Math.cos(CD / 2);
        const ID = Math.sin(CD / 2) / DD.length();
        return cD._x = DD._x * ID, cD._y = DD._y * ID, cD._z = DD._z * ID, cD._isDirty = !0, cD
      }
      static FromArray(DD, CD) {
        return CD || (CD = 0), new tD(DD[CD], DD[CD + 1], DD[CD + 2], DD[CD + 3])
      }
      static FromArrayToRef(DD, CD, cD) {
        return cD._x = DD[CD], cD._y = DD[CD + 1], cD._z = DD[CD + 2], cD._w = DD[CD + 3], cD._isDirty = !0, cD
      }
      static FromFloatsToRef(DD, CD, cD, ID, pD) {
        return pD.K4(DD, CD, cD, ID), pD
      }
      static FromEulerAngles(DD, CD, cD) {
        const ID = new tD;
        return tD.RotationYawPitchRollToRef(CD, DD, cD, ID), ID
      }
      static FromEulerAnglesToRef(DD, CD, cD, ID) {
        return tD.RotationYawPitchRollToRef(CD, DD, cD, ID), ID
      }
      static FromEulerVector(DD) {
        const CD = new tD;
        return tD.RotationYawPitchRollToRef(DD._y, DD._x, DD._z, CD), CD
      }
      static FromEulerVectorToRef(DD, CD) {
        return tD.RotationYawPitchRollToRef(DD._y, DD._x, DD._z, CD), CD
      }
      static FromUnitVectorsToRef(DD, CD, cD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ID.c;
        const iD = yD.Dot(DD, CD) + 1;
        return iD < pD ? Math.abs(DD.x) > Math.abs(DD.z) ? cD.set(-DD.y, DD.x, 0, 0) : cD.set(0, -DD.z, DD.y, 0) : (yD.CrossToRef(DD, CD, vD.cZ[0]), cD.set(vD.cZ[0].x, vD.cZ[0].y, vD.cZ[0].z, iD)), cD.normalize()
      }
      static RotationYawPitchRoll(DD, CD, cD) {
        const ID = new tD;
        return tD.RotationYawPitchRollToRef(DD, CD, cD, ID), ID
      }
      static RotationYawPitchRollToRef(DD, CD, cD, ID) {
        const pD = .5 * cD,
          iD = .5 * CD,
          fD = .5 * DD,
          bD = Math.sin(pD),
          QD = Math.cos(pD),
          wD = Math.sin(iD),
          SD = Math.cos(iD),
          BD = Math.sin(fD),
          yD = Math.cos(fD);
        return ID._x = yD * wD * QD + BD * SD * bD, ID._y = BD * SD * QD - yD * wD * bD, ID._z = yD * SD * bD - BD * wD * QD, ID._w = yD * SD * QD + BD * wD * bD, ID._isDirty = !0, ID
      }
      static RotationAlphaBetaGamma(DD, CD, cD) {
        const ID = new tD;
        return tD.RotationAlphaBetaGammaToRef(DD, CD, cD, ID), ID
      }
      static RotationAlphaBetaGammaToRef(DD, CD, cD, ID) {
        const pD = .5 * (cD + DD),
          iD = .5 * (cD - DD),
          fD = .5 * CD;
        return ID._x = Math.cos(iD) * Math.sin(fD), ID._y = Math.sin(iD) * Math.sin(fD), ID._z = Math.sin(pD) * Math.cos(fD), ID._w = Math.cos(pD) * Math.cos(fD), ID._isDirty = !0, ID
      }
      static RotationQuaternionFromAxis(DD, CD, cD) {
        const ID = new tD(0, 0, 0, 0);
        return tD.RotationQuaternionFromAxisToRef(DD, CD, cD, ID), ID
      }
      static RotationQuaternionFromAxisToRef(DD, CD, cD, ID) {
        const pD = oD.Matrix[0];
        return DD = DD.normalizeToRef(oD.cZ[0]), CD = CD.normalizeToRef(oD.cZ[1]), cD = cD.normalizeToRef(oD.cZ[2]), ZD.FromXYZAxesToRef(DD, CD, cD, pD), tD.FromRotationMatrixToRef(pD, ID), ID
      }
      static FromLookDirectionLH(DD, CD) {
        const cD = new tD;
        return tD.FromLookDirectionLHToRef(DD, CD, cD), cD
      }
      static FromLookDirectionLHToRef(DD, CD, cD) {
        const ID = oD.Matrix[0];
        return ZD.LookDirectionLHToRef(DD, CD, ID), tD.FromRotationMatrixToRef(ID, cD), cD
      }
      static FromLookDirectionRH(DD, CD) {
        const cD = new tD;
        return tD.FromLookDirectionRHToRef(DD, CD, cD), cD
      }
      static FromLookDirectionRHToRef(DD, CD, cD) {
        const ID = oD.Matrix[0];
        return ZD.LookDirectionRHToRef(DD, CD, ID), tD.FromRotationMatrixToRef(ID, cD)
      }
      static Slerp(DD, CD, cD) {
        const ID = tD.Identity();
        return tD.SlerpToRef(DD, CD, cD, ID), ID
      }
      static SlerpToRef(DD, CD, cD, ID) {
        let pD, iD, fD = DD._x * CD._x + DD._y * CD._y + DD._z * CD._z + DD._w * CD._w,
          bD = !1;
        if (fD < 0 && (bD = !0, fD = -fD), fD > .999999) iD = 1 - cD, pD = bD ? -cD : cD;
        else {
          const DD = Math.acos(fD),
            CD = 1 / Math.sin(DD);
          iD = Math.sin((1 - cD) * DD) * CD, pD = bD ? -Math.sin(cD * DD) * CD : Math.sin(cD * DD) * CD
        }
        return ID._x = iD * DD._x + pD * CD._x, ID._y = iD * DD._y + pD * CD._y, ID._z = iD * DD._z + pD * CD._z, ID._w = iD * DD._w + pD * CD._w, ID._isDirty = !0, ID
      }
      static Hermite(DD, CD, cD, ID, pD) {
        const iD = pD * pD,
          fD = pD * iD,
          bD = 2 * fD - 3 * iD + 1,
          QD = -2 * fD + 3 * iD,
          wD = fD - 2 * iD + pD,
          SD = fD - iD,
          BD = DD._x * bD + cD._x * QD + CD._x * wD + ID._x * SD,
          yD = DD._y * bD + cD._y * QD + CD._y * wD + ID._y * SD,
          MD = DD._z * bD + cD._z * QD + CD._z * wD + ID._z * SD,
          ZD = DD._w * bD + cD._w * QD + CD._w * wD + ID._w * SD;
        return new tD(BD, yD, MD, ZD)
      }
      static Hermite1stDerivative(DD, CD, cD, ID, pD) {
        const iD = new tD;
        return this.Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD), iD
      }
      static Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD) {
        const fD = pD * pD;
        return iD._x = 6 * (fD - pD) * DD._x + (3 * fD - 4 * pD + 1) * CD._x + 6 * (-fD + pD) * cD._x + (3 * fD - 2 * pD) * ID._x, iD._y = 6 * (fD - pD) * DD._y + (3 * fD - 4 * pD + 1) * CD._y + 6 * (-fD + pD) * cD._y + (3 * fD - 2 * pD) * ID._y, iD._z = 6 * (fD - pD) * DD._z + (3 * fD - 4 * pD + 1) * CD._z + 6 * (-fD + pD) * cD._z + (3 * fD - 2 * pD) * ID._z, iD._w = 6 * (fD - pD) * DD._w + (3 * fD - 4 * pD + 1) * CD._w + 6 * (-fD + pD) * cD._w + (3 * fD - 2 * pD) * ID._w, iD._isDirty = !0, iD
      }
      static Normalize(DD) {
        const CD = tD.Zero();
        return tD.NormalizeToRef(DD, CD), CD
      }
      static NormalizeToRef(DD, CD) {
        return DD.normalizeToRef(CD), CD
      }
      static Clamp(DD, CD, cD) {
        const ID = new tD;
        return tD.ClampToRef(DD, CD, cD, ID), ID
      }
      static ClampToRef(DD, CD, cD, ID) {
        return ID.K4((0, bD.Clamp)(DD.x, CD.x, cD.x), (0, bD.Clamp)(DD.y, CD.y, cD.y), (0, bD.Clamp)(DD.z, CD.z, cD.z), (0, bD.Clamp)(DD.w, CD.w, cD.w))
      }
      static Random() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new tD((0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD))
      }
      static RandomToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K4((0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD), (0, bD.RandomRange)(DD, CD))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(DD, CD) {
        return Math.sqrt(tD.DistanceSquared(DD, CD))
      }
      static DistanceSquared(DD, CD) {
        const cD = DD.x - CD.x,
          ID = DD.y - CD.y,
          pD = DD.z - CD.z,
          iD = DD.w - CD.w;
        return cD * cD + ID * ID + pD * pD + iD * iD
      }
      static Center(DD, CD) {
        return tD.CenterToRef(DD, CD, tD.Zero())
      }
      static CenterToRef(DD, CD, cD) {
        return cD.K4((DD.x + CD.x) / 2, (DD.y + CD.y) / 2, (DD.z + CD.z) / 2, (DD.w + CD.w) / 2)
      }
    }
    tD._V8PerformanceHack = new tD(.5, .5, .5, .5);
    class ZD {
      static get Use64Bits() {
        return iD.e.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = QD.h._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ID = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = DD, this._isIdentity3x2 = DD || cD, this._isIdentityDirty = !this._isIdentity && CD, this._isIdentity3x2Dirty = !this._isIdentity3x2 && ID
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, iD.e.MatrixTrackPrecisionChange && iD.e.MatrixTrackedMatrices.push(this), this._m = new iD.e.MatrixCurrentType(16), this.markAsUpdated()
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
          CD = DD[0],
          cD = DD[1],
          ID = DD[2],
          pD = DD[3],
          iD = DD[4],
          fD = DD[5],
          bD = DD[6],
          QD = DD[7],
          wD = DD[8],
          SD = DD[9],
          BD = DD[10],
          yD = DD[11],
          MD = DD[12],
          tD = DD[13],
          ZD = DD[14],
          oD = DD[15],
          vD = BD * oD - ZD * yD,
          ND = SD * oD - tD * yD,
          gD = SD * ZD - tD * BD,
          XD = wD * oD - MD * yD,
          mD = wD * ZD - BD * MD,
          nD = wD * tD - MD * SD;
        return CD * +(fD * vD - bD * ND + QD * gD) + cD * -(iD * vD - bD * XD + QD * mD) + ID * +(iD * ND - fD * XD + QD * nD) + pD * -(iD * gD - fD * mD + bD * nD)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!DD) return this._m;
        const cD = this._m;
        for (let ID = 0; ID < 16; ID++) DD[CD + ID] = cD[ID];
        return this
      }
      XcD() {
        return this._m
      }
      QCD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ZD.FromArrayToRef(DD, CD, this)
      }
      K4() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        return ZD.FromArrayToRef(CD, 0, this)
      }
      set() {
        const DD = this._m;
        for (let CD = 0; CD < 16; CD++) DD[CD] = CD < 0 || arguments.length <= CD ? void 0 : arguments[CD];
        return this.markAsUpdated(), this
      }
      YF(DD) {
        const CD = this._m;
        for (let cD = 0; cD < 16; cD++) CD[cD] = DD;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return ZD.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(DD) {
        const CD = new ZD;
        return this.addToRef(DD, CD), CD
      }
      addToRef(DD, CD) {
        const cD = this._m,
          ID = CD._m,
          pD = DD.m;
        for (let iD = 0; iD < 16; iD++) ID[iD] = cD[iD] + pD[iD];
        return CD.markAsUpdated(), CD
      }
      addToSelf(DD) {
        const CD = this._m,
          cD = DD.m;
        return CD[0] += cD[0], CD[1] += cD[1], CD[2] += cD[2], CD[3] += cD[3], CD[4] += cD[4], CD[5] += cD[5], CD[6] += cD[6], CD[7] += cD[7], CD[8] += cD[8], CD[9] += cD[9], CD[10] += cD[10], CD[11] += cD[11], CD[12] += cD[12], CD[13] += cD[13], CD[14] += cD[14], CD[15] += cD[15], this.markAsUpdated(), this
      }
      addInPlace(DD) {
        const CD = this._m,
          cD = DD.m;
        for (let ID = 0; ID < 16; ID++) CD[ID] += cD[ID];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const DD = this._m;
        for (let CD = 0; CD < 16; CD++) DD[CD] += CD < 0 || arguments.length <= CD ? void 0 : arguments[CD];
        return this.markAsUpdated(), this
      }
      subtract(DD) {
        const CD = this._m,
          cD = DD.m;
        for (let ID = 0; ID < 16; ID++) CD[ID] -= cD[ID];
        return this.markAsUpdated(), this
      }
      subtractToRef(DD, CD) {
        const cD = this._m,
          ID = DD.m,
          pD = CD._m;
        for (let iD = 0; iD < 16; iD++) pD[iD] = cD[iD] - ID[iD];
        return CD.markAsUpdated(), CD
      }
      EcD(DD) {
        const CD = this._m,
          cD = DD.m;
        for (let ID = 0; ID < 16; ID++) CD[ID] -= cD[ID];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        return this.subtractFromFloatsToRef(...CD, new ZD)
      }
      subtractFromFloatsToRef() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        const ID = CD.pop(),
          pD = this._m,
          iD = ID._m,
          fD = CD;
        for (let bD = 0; bD < 16; bD++) iD[bD] = pD[bD] - fD[bD];
        return ID.markAsUpdated(), ID
      }
      invertToRef(DD) {
        return !0 === this._isIdentity ? (ZD.IdentityToRef(DD), DD) : ((0, QD.d)(this, DD.XcD()) ? DD.markAsUpdated() : DD.YCD(this), DD)
      }
      addAtIndex(DD, CD) {
        return this._m[DD] += CD, this.markAsUpdated(), this
      }
      multiplyAtIndex(DD, CD) {
        return this._m[DD] *= CD, this.markAsUpdated(), this
      }
      setTranslationFromFloats(DD, CD, cD) {
        return this._m[12] = DD, this._m[13] = CD, this._m[14] = cD, this.markAsUpdated(), this
      }
      addTranslationFromFloats(DD, CD, cD) {
        return this._m[12] += DD, this._m[13] += CD, this._m[14] += cD, this.markAsUpdated(), this
      }
      setTranslation(DD) {
        return this.setTranslationFromFloats(DD._x, DD._y, DD._z)
      }
      getTranslation() {
        return new yD(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(DD) {
        return DD.x = this._m[12], DD.y = this._m[13], DD.z = this._m[14], DD
      }
      removeRotationAndScaling() {
        const DD = this.m;
        return ZD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, DD[12], DD[13], DD[14], DD[15], this), this._updateIdentityStatus(0 === DD[12] && 0 === DD[13] && 0 === DD[14] && 1 === DD[15]), this
      }
      YCD(DD) {
        DD.copyToArray(this._m);
        const CD = DD;
        return this.updateFlag = CD.updateFlag, this._updateIdentityStatus(CD._isIdentity, CD._isIdentityDirty, CD._isIdentity3x2, CD._isIdentity3x2Dirty), this
      }
      copyToArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, QD.c)(this, DD, CD), this
      }
      multiply(DD) {
        const CD = new ZD;
        return this.multiplyToRef(DD, CD), CD
      }
      multiplyInPlace(DD) {
        const CD = this._m,
          cD = DD.m;
        for (let ID = 0; ID < 16; ID++) CD[ID] *= cD[ID];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const DD = this._m;
        for (let CD = 0; CD < 16; CD++) DD[CD] *= CD < 0 || arguments.length <= CD ? void 0 : arguments[CD];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        const ID = CD.pop(),
          pD = this._m,
          iD = ID._m,
          fD = CD;
        for (let bD = 0; bD < 16; bD++) iD[bD] = pD[bD] * fD[bD];
        return ID.markAsUpdated(), ID
      }
      multiplyToRef(DD, CD) {
        return this._isIdentity ? (CD.YCD(DD), CD) : DD._isIdentity ? (CD.YCD(this), CD) : (this.multiplyToArray(DD, CD._m, 0), CD.markAsUpdated(), CD)
      }
      multiplyToArray(DD, CD, cD) {
        return (0, QD.k)(this, DD, CD, cD), this
      }
      divide(DD) {
        return this.divideToRef(DD, new ZD)
      }
      divideToRef(DD, CD) {
        const cD = this._m,
          ID = DD.m,
          pD = CD._m;
        for (let iD = 0; iD < 16; iD++) pD[iD] = cD[iD] / ID[iD];
        return CD.markAsUpdated(), CD
      }
      divideInPlace(DD) {
        const CD = this._m,
          cD = DD.m;
        for (let ID = 0; ID < 16; ID++) CD[ID] /= cD[ID];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(DD) {
        const CD = this._m,
          cD = DD.m;
        for (let ID = 0; ID < 16; ID++) CD[ID] = Math.min(CD[ID], cD[ID]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const DD = this._m;
        for (let CD = 0; CD < 16; CD++) DD[CD] = Math.min(DD[CD], CD < 0 || arguments.length <= CD ? void 0 : arguments[CD]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(DD) {
        const CD = this._m,
          cD = DD.m;
        for (let ID = 0; ID < 16; ID++) CD[ID] = Math.max(CD[ID], cD[ID]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const DD = this._m;
        for (let CD = 0; CD < 16; CD++) DD[CD] = Math.max(DD[CD], CD < 0 || arguments.length <= CD ? void 0 : arguments[CD]);
        return this.markAsUpdated(), this
      }
      pp() {
        return this.negateToRef(new ZD)
      }
      negateInPlace() {
        const DD = this._m;
        for (let CD = 0; CD < 16; CD++) DD[CD] = -DD[CD];
        return this.markAsUpdated(), this
      }
      negateToRef(DD) {
        const CD = this._m,
          cD = DD._m;
        for (let ID = 0; ID < 16; ID++) cD[ID] = -CD[ID];
        return DD.markAsUpdated(), DD
      }
      equals(DD) {
        const CD = DD;
        if (!CD) return !1;
        if ((this._isIdentity || CD._isIdentity) && !this._isIdentityDirty && !CD._isIdentityDirty) return this._isIdentity && CD._isIdentity;
        const cD = this.m,
          ID = CD.m;
        return cD[0] === ID[0] && cD[1] === ID[1] && cD[2] === ID[2] && cD[3] === ID[3] && cD[4] === ID[4] && cD[5] === ID[5] && cD[6] === ID[6] && cD[7] === ID[7] && cD[8] === ID[8] && cD[9] === ID[9] && cD[10] === ID[10] && cD[11] === ID[11] && cD[12] === ID[12] && cD[13] === ID[13] && cD[14] === ID[14] && cD[15] === ID[15]
      }
      equalsWithEpsilon(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = this._m,
          ID = DD.m;
        for (let pD = 0; pD < 16; pD++)
          if (!(0, bD.WithinEpsilon)(cD[pD], ID[pD], CD)) return !1;
        return !0
      }
      wfD() {
        const DD = this._m;
        for (let CD = 0; CD < 16; CD++)
          if (DD[CD] != (CD < 0 || arguments.length <= CD ? void 0 : arguments[CD])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new ZD)
      }
      floorToRef(DD) {
        const CD = this._m,
          cD = DD._m;
        for (let ID = 0; ID < 16; ID++) cD[ID] = Math.floor(CD[ID]);
        return DD.markAsUpdated(), DD
      }
      fract() {
        return this.fractToRef(new ZD)
      }
      fractToRef(DD) {
        const CD = this._m,
          cD = DD._m;
        for (let ID = 0; ID < 16; ID++) cD[ID] = CD[ID] - Math.floor(CD[ID]);
        return DD.markAsUpdated(), DD
      }
      clone() {
        const DD = new ZD;
        return DD.YCD(this), DD
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let DD = SD(this._m[0]);
        for (let CD = 1; CD < 16; CD++) DD = 397 * DD ^ SD(this._m[CD]);
        return DD
      }
      decomposeToTransformNode(DD) {
        return DD.rotationQuaternion = DD.rotationQuaternion || new tD, this.decompose(DD.ci, DD.rotationQuaternion, DD.position)
      }
      decompose(DD, CD, cD, ID) {
        let pD = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return cD && cD.YF(0), DD && DD.YF(1), CD && CD.K4(0, 0, 0, 1), !0;
        const iD = this._m;
        if (cD && cD.K4(iD[12], iD[13], iD[14]), (DD = DD || oD.cZ[0]).x = Math.sqrt(iD[0] * iD[0] + iD[1] * iD[1] + iD[2] * iD[2]), DD.y = Math.sqrt(iD[4] * iD[4] + iD[5] * iD[5] + iD[6] * iD[6]), DD.z = Math.sqrt(iD[8] * iD[8] + iD[9] * iD[9] + iD[10] * iD[10]), ID) {
          const CD = (pD ? ID.absoluteScaling.x : ID.ci.x) < 0 ? -1 : 1,
            cD = (pD ? ID.absoluteScaling.y : ID.ci.y) < 0 ? -1 : 1,
            iD = (pD ? ID.absoluteScaling.z : ID.ci.z) < 0 ? -1 : 1;
          DD.x *= CD, DD.y *= cD, DD.z *= iD
        } else this.determinant() <= 0 && (DD.y *= -1);
        if (0 === DD._x || 0 === DD._y || 0 === DD._z) return CD && CD.K4(0, 0, 0, 1), !1;
        if (CD) {
          const cD = 1 / DD._x,
            ID = 1 / DD._y,
            pD = 1 / DD._z;
          ZD.FromValuesToRef(iD[0] * cD, iD[1] * cD, iD[2] * cD, 0, iD[4] * ID, iD[5] * ID, iD[6] * ID, 0, iD[8] * pD, iD[9] * pD, iD[10] * pD, 0, 0, 0, 0, 1, oD.Matrix[0]), tD.FromRotationMatrixToRef(oD.Matrix[0], CD)
        }
        return !0
      }
      getRow(DD) {
        if (DD < 0 || DD > 3) return null;
        const CD = 4 * DD;
        return new MD(this._m[CD + 0], this._m[CD + 1], this._m[CD + 2], this._m[CD + 3])
      }
      getRowToRef(DD, CD) {
        if (DD >= 0 && DD <= 3) {
          const cD = 4 * DD;
          CD.x = this._m[cD + 0], CD.y = this._m[cD + 1], CD.z = this._m[cD + 2], CD.w = this._m[cD + 3]
        }
        return CD
      }
      setRow(DD, CD) {
        return this.setRowFromFloats(DD, CD.x, CD.y, CD.z, CD.w)
      }
      transpose() {
        const DD = new ZD;
        return ZD.TransposeToRef(this, DD), DD
      }
      transposeToRef(DD) {
        return ZD.TransposeToRef(this, DD), DD
      }
      setRowFromFloats(DD, CD, cD, ID, pD) {
        if (DD < 0 || DD > 3) return this;
        const iD = 4 * DD;
        return this._m[iD + 0] = CD, this._m[iD + 1] = cD, this._m[iD + 2] = ID, this._m[iD + 3] = pD, this.markAsUpdated(), this
      }
      scale(DD) {
        const CD = new ZD;
        return this.scaleToRef(DD, CD), CD
      }
      scaleToRef(DD, CD) {
        for (let cD = 0; cD < 16; cD++) CD._m[cD] = this._m[cD] * DD;
        return CD.markAsUpdated(), CD
      }
      scaleAndAddToRef(DD, CD) {
        for (let cD = 0; cD < 16; cD++) CD._m[cD] += this._m[cD] * DD;
        return CD.markAsUpdated(), CD
      }
      scaleInPlace(DD) {
        const CD = this._m;
        for (let cD = 0; cD < 16; cD++) CD[cD] *= DD;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(DD) {
        const CD = oD.Matrix[0];
        this.invertToRef(CD), CD.transposeToRef(DD);
        const cD = DD._m;
        return ZD.FromValuesToRef(cD[0], cD[1], cD[2], 0, cD[4], cD[5], cD[6], 0, cD[8], cD[9], cD[10], 0, 0, 0, 0, 1, DD), DD
      }
      getRotationMatrix() {
        const DD = new ZD;
        return this.getRotationMatrixToRef(DD), DD
      }
      getRotationMatrixToRef(DD) {
        const CD = oD.cZ[0];
        if (!this.decompose(CD)) return ZD.IdentityToRef(DD), DD;
        const cD = this._m,
          ID = 1 / CD._x,
          pD = 1 / CD._y,
          iD = 1 / CD._z;
        return ZD.FromValuesToRef(cD[0] * ID, cD[1] * ID, cD[2] * ID, 0, cD[4] * pD, cD[5] * pD, cD[6] * pD, 0, cD[8] * iD, cD[9] * iD, cD[10] * iD, 0, 0, 0, 0, 1, DD), DD
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
        return this.multiplyToRef(ND, this), this
      }
      static FromArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cD = new ZD;
        return ZD.FromArrayToRef(DD, CD, cD), cD
      }
      static FromArrayToRef(DD, CD, cD) {
        for (let ID = 0; ID < 16; ID++) cD._m[ID] = DD[ID + CD];
        return cD.markAsUpdated(), cD
      }
      static FromFloat32ArrayToRefScaled(DD, CD, cD, ID) {
        return ID._m[0] = DD[0 + CD] * cD, ID._m[1] = DD[1 + CD] * cD, ID._m[2] = DD[2 + CD] * cD, ID._m[3] = DD[3 + CD] * cD, ID._m[4] = DD[4 + CD] * cD, ID._m[5] = DD[5 + CD] * cD, ID._m[6] = DD[6 + CD] * cD, ID._m[7] = DD[7 + CD] * cD, ID._m[8] = DD[8 + CD] * cD, ID._m[9] = DD[9 + CD] * cD, ID._m[10] = DD[10 + CD] * cD, ID._m[11] = DD[11 + CD] * cD, ID._m[12] = DD[12 + CD] * cD, ID._m[13] = DD[13 + CD] * cD, ID._m[14] = DD[14 + CD] * cD, ID._m[15] = DD[15 + CD] * cD, ID.markAsUpdated(), ID
      }
      static get IdentityReadOnly() {
        return ZD._IdentityReadOnly
      }
      static FromValuesToRef(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD) {
        const vD = oD._m;
        vD[0] = DD, vD[1] = CD, vD[2] = cD, vD[3] = ID, vD[4] = pD, vD[5] = iD, vD[6] = fD, vD[7] = bD, vD[8] = QD, vD[9] = wD, vD[10] = SD, vD[11] = BD, vD[12] = yD, vD[13] = MD, vD[14] = tD, vD[15] = ZD, oD.markAsUpdated()
      }
      static FromValues(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD, MD, tD, oD) {
        const vD = new ZD,
          ND = vD._m;
        return ND[0] = DD, ND[1] = CD, ND[2] = cD, ND[3] = ID, ND[4] = pD, ND[5] = iD, ND[6] = fD, ND[7] = bD, ND[8] = QD, ND[9] = wD, ND[10] = SD, ND[11] = BD, ND[12] = yD, ND[13] = MD, ND[14] = tD, ND[15] = oD, vD.markAsUpdated(), vD
      }
      static Compose(DD, CD, cD) {
        const ID = new ZD;
        return ZD.ComposeToRef(DD, CD, cD, ID), ID
      }
      static ComposeToRef(DD, CD, cD, ID) {
        const pD = ID._m,
          iD = CD._x,
          fD = CD._y,
          bD = CD._z,
          QD = CD._w,
          wD = iD + iD,
          SD = fD + fD,
          BD = bD + bD,
          yD = iD * wD,
          MD = iD * SD,
          tD = iD * BD,
          ZD = fD * SD,
          oD = fD * BD,
          vD = bD * BD,
          ND = QD * wD,
          gD = QD * SD,
          XD = QD * BD,
          mD = DD._x,
          nD = DD._y,
          OD = DD._z;
        return pD[0] = (1 - (ZD + vD)) * mD, pD[1] = (MD + XD) * mD, pD[2] = (tD - gD) * mD, pD[3] = 0, pD[4] = (MD - XD) * nD, pD[5] = (1 - (yD + vD)) * nD, pD[6] = (oD + ND) * nD, pD[7] = 0, pD[8] = (tD + gD) * OD, pD[9] = (oD - ND) * OD, pD[10] = (1 - (yD + ZD)) * OD, pD[11] = 0, pD[12] = cD._x, pD[13] = cD._y, pD[14] = cD._z, pD[15] = 1, ID.markAsUpdated(), ID
      }
      static Identity() {
        const DD = ZD.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return DD._updateIdentityStatus(!0), DD
      }
      static IdentityToRef(DD) {
        return ZD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, DD), DD._updateIdentityStatus(!0), DD
      }
      static Zero() {
        const DD = ZD.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return DD._updateIdentityStatus(!1), DD
      }
      static RotationX(DD) {
        const CD = new ZD;
        return ZD.RotationXToRef(DD, CD), CD
      }
      static Invert(DD) {
        const CD = new ZD;
        return DD.invertToRef(CD), CD
      }
      static RotationXToRef(DD, CD) {
        const cD = Math.sin(DD),
          ID = Math.cos(DD);
        return ZD.FromValuesToRef(1, 0, 0, 0, 0, ID, cD, 0, 0, -cD, ID, 0, 0, 0, 0, 1, CD), CD._updateIdentityStatus(1 === ID && 0 === cD), CD
      }
      static RotationY(DD) {
        const CD = new ZD;
        return ZD.RotationYToRef(DD, CD), CD
      }
      static RotationYToRef(DD, CD) {
        const cD = Math.sin(DD),
          ID = Math.cos(DD);
        return ZD.FromValuesToRef(ID, 0, -cD, 0, 0, 1, 0, 0, cD, 0, ID, 0, 0, 0, 0, 1, CD), CD._updateIdentityStatus(1 === ID && 0 === cD), CD
      }
      static RotationZ(DD) {
        const CD = new ZD;
        return ZD.RotationZToRef(DD, CD), CD
      }
      static RotationZToRef(DD, CD) {
        const cD = Math.sin(DD),
          ID = Math.cos(DD);
        return ZD.FromValuesToRef(ID, cD, 0, 0, -cD, ID, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, CD), CD._updateIdentityStatus(1 === ID && 0 === cD), CD
      }
      static RotationAxis(DD, CD) {
        const cD = new ZD;
        return ZD.RotationAxisToRef(DD, CD, cD), cD
      }
      static RotationAxisToRef(DD, CD, cD) {
        const ID = Math.sin(-CD),
          pD = Math.cos(-CD),
          iD = 1 - pD;
        DD = DD.normalizeToRef(oD.cZ[0]);
        const fD = cD._m;
        return fD[0] = DD._x * DD._x * iD + pD, fD[1] = DD._x * DD._y * iD - DD._z * ID, fD[2] = DD._x * DD._z * iD + DD._y * ID, fD[3] = 0, fD[4] = DD._y * DD._x * iD + DD._z * ID, fD[5] = DD._y * DD._y * iD + pD, fD[6] = DD._y * DD._z * iD - DD._x * ID, fD[7] = 0, fD[8] = DD._z * DD._x * iD - DD._y * ID, fD[9] = DD._z * DD._y * iD + DD._x * ID, fD[10] = DD._z * DD._z * iD + pD, fD[11] = 0, fD[12] = 0, fD[13] = 0, fD[14] = 0, fD[15] = 1, cD.markAsUpdated(), cD
      }
      static RotationAlignToRef(DD, CD, cD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const iD = yD.Dot(CD, DD),
          fD = cD._m;
        if (iD < -1 + ID.c) fD[0] = -1, fD[1] = 0, fD[2] = 0, fD[3] = 0, fD[4] = 0, fD[5] = pD ? 1 : -1, fD[6] = 0, fD[7] = 0, fD[8] = 0, fD[9] = 0, fD[10] = pD ? -1 : 1, fD[11] = 0;
        else {
          const cD = yD.Cross(CD, DD),
            ID = 1 / (1 + iD);
          fD[0] = cD._x * cD._x * ID + iD, fD[1] = cD._y * cD._x * ID - cD._z, fD[2] = cD._z * cD._x * ID + cD._y, fD[3] = 0, fD[4] = cD._x * cD._y * ID + cD._z, fD[5] = cD._y * cD._y * ID + iD, fD[6] = cD._z * cD._y * ID - cD._x, fD[7] = 0, fD[8] = cD._x * cD._z * ID - cD._y, fD[9] = cD._y * cD._z * ID + cD._x, fD[10] = cD._z * cD._z * ID + iD, fD[11] = 0
        }
        return fD[12] = 0, fD[13] = 0, fD[14] = 0, fD[15] = 1, cD.markAsUpdated(), cD
      }
      static RotationYawPitchRoll(DD, CD, cD) {
        const ID = new ZD;
        return ZD.RotationYawPitchRollToRef(DD, CD, cD, ID), ID
      }
      static RotationYawPitchRollToRef(DD, CD, cD, ID) {
        return tD.RotationYawPitchRollToRef(DD, CD, cD, oD.Quaternion[0]), oD.Quaternion[0].toRotationMatrix(ID), ID
      }
      static Scaling(DD, CD, cD) {
        const ID = new ZD;
        return ZD.ScalingToRef(DD, CD, cD, ID), ID
      }
      static ScalingToRef(DD, CD, cD, ID) {
        return ZD.FromValuesToRef(DD, 0, 0, 0, 0, CD, 0, 0, 0, 0, cD, 0, 0, 0, 0, 1, ID), ID._updateIdentityStatus(1 === DD && 1 === CD && 1 === cD), ID
      }
      static Translation(DD, CD, cD) {
        const ID = new ZD;
        return ZD.TranslationToRef(DD, CD, cD, ID), ID
      }
      static TranslationToRef(DD, CD, cD, ID) {
        return ZD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, DD, CD, cD, 1, ID), ID._updateIdentityStatus(0 === DD && 0 === CD && 0 === cD), ID
      }
      static Lerp(DD, CD, cD) {
        const ID = new ZD;
        return ZD.LerpToRef(DD, CD, cD, ID), ID
      }
      static LerpToRef(DD, CD, cD, ID) {
        const pD = ID._m,
          iD = DD.m,
          fD = CD.m;
        for (let bD = 0; bD < 16; bD++) pD[bD] = iD[bD] * (1 - cD) + fD[bD] * cD;
        return ID.markAsUpdated(), ID
      }
      static DecomposeLerp(DD, CD, cD) {
        const ID = new ZD;
        return ZD.DecomposeLerpToRef(DD, CD, cD, ID), ID
      }
      static DecomposeLerpToRef(DD, CD, cD, ID) {
        const pD = oD.cZ[0],
          iD = oD.Quaternion[0],
          fD = oD.cZ[1];
        DD.decompose(pD, iD, fD);
        const bD = oD.cZ[2],
          QD = oD.Quaternion[1],
          wD = oD.cZ[3];
        CD.decompose(bD, QD, wD);
        const SD = oD.cZ[4];
        yD.LerpToRef(pD, bD, cD, SD);
        const BD = oD.Quaternion[2];
        tD.SlerpToRef(iD, QD, cD, BD);
        const MD = oD.cZ[5];
        return yD.LerpToRef(fD, wD, cD, MD), ZD.ComposeToRef(SD, BD, MD, ID), ID
      }
      static LookAtLH(DD, CD, cD) {
        const ID = new ZD;
        return ZD.LookAtLHToRef(DD, CD, cD, ID), ID
      }
      static LookAtLHToRef(DD, CD, cD, ID) {
        const pD = oD.cZ[0],
          iD = oD.cZ[1],
          fD = oD.cZ[2];
        CD.subtractToRef(DD, fD), fD.normalize(), yD.CrossToRef(cD, fD, pD);
        const bD = pD.lengthSquared();
        0 === bD ? pD.x = 1 : pD.normalizeFromLength(Math.sqrt(bD)), yD.CrossToRef(fD, pD, iD), iD.normalize();
        const QD = -yD.Dot(pD, DD),
          wD = -yD.Dot(iD, DD),
          SD = -yD.Dot(fD, DD);
        return ZD.FromValuesToRef(pD._x, iD._x, fD._x, 0, pD._y, iD._y, fD._y, 0, pD._z, iD._z, fD._z, 0, QD, wD, SD, 1, ID), ID
      }
      static LookAtRH(DD, CD, cD) {
        const ID = new ZD;
        return ZD.LookAtRHToRef(DD, CD, cD, ID), ID
      }
      static LookAtRHToRef(DD, CD, cD, ID) {
        const pD = oD.cZ[0],
          iD = oD.cZ[1],
          fD = oD.cZ[2];
        DD.subtractToRef(CD, fD), fD.normalize(), yD.CrossToRef(cD, fD, pD);
        const bD = pD.lengthSquared();
        0 === bD ? pD.x = 1 : pD.normalizeFromLength(Math.sqrt(bD)), yD.CrossToRef(fD, pD, iD), iD.normalize();
        const QD = -yD.Dot(pD, DD),
          wD = -yD.Dot(iD, DD),
          SD = -yD.Dot(fD, DD);
        return ZD.FromValuesToRef(pD._x, iD._x, fD._x, 0, pD._y, iD._y, fD._y, 0, pD._z, iD._z, fD._z, 0, QD, wD, SD, 1, ID), ID
      }
      static LookDirectionLH(DD, CD) {
        const cD = new ZD;
        return ZD.LookDirectionLHToRef(DD, CD, cD), cD
      }
      static LookDirectionLHToRef(DD, CD, cD) {
        const ID = oD.cZ[0];
        ID.YCD(DD), ID.scaleInPlace(-1);
        const pD = oD.cZ[1];
        return yD.CrossToRef(CD, ID, pD), ZD.FromValuesToRef(pD._x, pD._y, pD._z, 0, CD._x, CD._y, CD._z, 0, ID._x, ID._y, ID._z, 0, 0, 0, 0, 1, cD), cD
      }
      static LookDirectionRH(DD, CD) {
        const cD = new ZD;
        return ZD.LookDirectionRHToRef(DD, CD, cD), cD
      }
      static LookDirectionRHToRef(DD, CD, cD) {
        const ID = oD.cZ[2];
        return yD.CrossToRef(CD, DD, ID), ZD.FromValuesToRef(ID._x, ID._y, ID._z, 0, CD._x, CD._y, CD._z, 0, DD._x, DD._y, DD._z, 0, 0, 0, 0, 1, cD), cD
      }
      static OrthoLH(DD, CD, cD, ID, pD) {
        const iD = new ZD;
        return ZD.OrthoLHToRef(DD, CD, cD, ID, iD, pD), iD
      }
      static OrthoLHToRef(DD, CD, cD, ID, pD, iD) {
        const fD = 2 / DD,
          bD = 2 / CD,
          QD = 2 / (ID - cD),
          wD = -(ID + cD) / (ID - cD);
        return ZD.FromValuesToRef(fD, 0, 0, 0, 0, bD, 0, 0, 0, 0, QD, 0, 0, 0, wD, 1, pD), iD && pD.multiplyToRef(ND, pD), pD._updateIdentityStatus(1 === fD && 1 === bD && 1 === QD && 0 === wD), pD
      }
      static OrthoOffCenterLH(DD, CD, cD, ID, pD, iD, fD) {
        const bD = new ZD;
        return ZD.OrthoOffCenterLHToRef(DD, CD, cD, ID, pD, iD, bD, fD), bD
      }
      static OrthoOffCenterLHToRef(DD, CD, cD, ID, pD, iD, fD, bD) {
        const QD = 2 / (CD - DD),
          wD = 2 / (ID - cD),
          SD = 2 / (iD - pD),
          BD = -(iD + pD) / (iD - pD),
          yD = (DD + CD) / (DD - CD),
          MD = (ID + cD) / (cD - ID);
        return ZD.FromValuesToRef(QD, 0, 0, 0, 0, wD, 0, 0, 0, 0, SD, 0, yD, MD, BD, 1, fD), bD && fD.multiplyToRef(ND, fD), fD.markAsUpdated(), fD
      }
      static ObliqueOffCenterLHToRef(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
        const BD = -fD * Math.cos(bD),
          yD = -fD * Math.sin(bD);
        return ZD.TranslationToRef(0, 0, -QD, oD.Matrix[1]), ZD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, BD, yD, 1, 0, 0, 0, 0, 1, oD.Matrix[0]), oD.Matrix[1].multiplyToRef(oD.Matrix[0], oD.Matrix[0]), ZD.TranslationToRef(0, 0, QD, oD.Matrix[1]), oD.Matrix[0].multiplyToRef(oD.Matrix[1], oD.Matrix[0]), ZD.OrthoOffCenterLHToRef(DD, CD, cD, ID, pD, iD, wD, SD), oD.Matrix[0].multiplyToRef(wD, wD), wD
      }
      static OrthoOffCenterRH(DD, CD, cD, ID, pD, iD, fD) {
        const bD = new ZD;
        return ZD.OrthoOffCenterRHToRef(DD, CD, cD, ID, pD, iD, bD, fD), bD
      }
      static OrthoOffCenterRHToRef(DD, CD, cD, ID, pD, iD, fD, bD) {
        return ZD.OrthoOffCenterLHToRef(DD, CD, cD, ID, pD, iD, fD, bD), fD._m[10] *= -1, fD
      }
      static ObliqueOffCenterRHToRef(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
        const BD = fD * Math.cos(bD),
          yD = fD * Math.sin(bD);
        return ZD.TranslationToRef(0, 0, QD, oD.Matrix[1]), ZD.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, BD, yD, 1, 0, 0, 0, 0, 1, oD.Matrix[0]), oD.Matrix[1].multiplyToRef(oD.Matrix[0], oD.Matrix[0]), ZD.TranslationToRef(0, 0, -QD, oD.Matrix[1]), oD.Matrix[0].multiplyToRef(oD.Matrix[1], oD.Matrix[0]), ZD.OrthoOffCenterRHToRef(DD, CD, cD, ID, pD, iD, wD, SD), oD.Matrix[0].multiplyToRef(wD, wD), wD
      }
      static PerspectiveLH(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const fD = new ZD,
          bD = 2 * cD / DD,
          QD = 2 * cD / CD,
          wD = (ID + cD) / (ID - cD),
          SD = -2 * ID * cD / (ID - cD),
          BD = Math.tan(iD);
        return ZD.FromValuesToRef(bD, 0, 0, 0, 0, QD, 0, BD, 0, 0, wD, 1, 0, 0, SD, 0, fD), pD && fD.multiplyToRef(ND, fD), fD._updateIdentityStatus(!1), fD
      }
      static PerspectiveFovLH(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bD = new ZD;
        return ZD.PerspectiveFovLHToRef(DD, CD, cD, ID, bD, !0, pD, iD, fD), bD
      }
      static PerspectiveFovLHToRef(DD, CD, cD, ID, pD) {
        let iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fD = arguments.length > 6 ? arguments[6] : void 0,
          bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          QD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const wD = cD,
          SD = ID,
          BD = 1 / Math.tan(.5 * DD),
          yD = iD ? BD / CD : BD,
          MD = iD ? BD : BD * CD,
          tD = QD && 0 === wD ? -1 : 0 !== SD ? (SD + wD) / (SD - wD) : 1,
          oD = QD && 0 === wD ? 2 * SD : 0 !== SD ? -2 * SD * wD / (SD - wD) : -2 * wD,
          vD = Math.tan(bD);
        return ZD.FromValuesToRef(yD, 0, 0, 0, 0, MD, 0, vD, 0, 0, tD, 1, 0, 0, oD, 0, pD), fD && pD.multiplyToRef(ND, pD), pD._updateIdentityStatus(!1), pD
      }
      static PerspectiveFovReverseLHToRef(DD, CD, cD, ID, pD) {
        let iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fD = arguments.length > 6 ? arguments[6] : void 0,
          bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const QD = 1 / Math.tan(.5 * DD),
          wD = iD ? QD / CD : QD,
          SD = iD ? QD : QD * CD,
          BD = Math.tan(bD);
        return ZD.FromValuesToRef(wD, 0, 0, 0, 0, SD, 0, BD, 0, 0, -cD, 1, 0, 0, 1, 0, pD), fD && pD.multiplyToRef(ND, pD), pD._updateIdentityStatus(!1), pD
      }
      static PerspectiveFovRH(DD, CD, cD, ID, pD) {
        let iD = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          fD = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bD = new ZD;
        return ZD.PerspectiveFovRHToRef(DD, CD, cD, ID, bD, !0, pD, iD, fD), bD
      }
      static PerspectiveFovRHToRef(DD, CD, cD, ID, pD) {
        let iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fD = arguments.length > 6 ? arguments[6] : void 0,
          bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          QD = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const wD = cD,
          SD = ID,
          BD = 1 / Math.tan(.5 * DD),
          yD = iD ? BD / CD : BD,
          MD = iD ? BD : BD * CD,
          tD = QD && 0 === wD ? 1 : 0 !== SD ? -(SD + wD) / (SD - wD) : -1,
          oD = QD && 0 === wD ? 2 * SD : 0 !== SD ? -2 * SD * wD / (SD - wD) : -2 * wD,
          vD = Math.tan(bD);
        return ZD.FromValuesToRef(yD, 0, 0, 0, 0, MD, 0, vD, 0, 0, tD, -1, 0, 0, oD, 0, pD), fD && pD.multiplyToRef(ND, pD), pD._updateIdentityStatus(!1), pD
      }
      static PerspectiveFovReverseRHToRef(DD, CD, cD, ID, pD) {
        let iD = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          fD = arguments.length > 6 ? arguments[6] : void 0,
          bD = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const QD = 1 / Math.tan(.5 * DD),
          wD = iD ? QD / CD : QD,
          SD = iD ? QD : QD * CD,
          BD = Math.tan(bD);
        return ZD.FromValuesToRef(wD, 0, 0, 0, 0, SD, 0, BD, 0, 0, -cD, -1, 0, 0, -1, 0, pD), fD && pD.multiplyToRef(ND, pD), pD._updateIdentityStatus(!1), pD
      }
      static GetFinalMatrix(DD, CD, cD, ID, pD, iD) {
        const fD = DD.width,
          bD = DD.height,
          QD = DD.x,
          wD = DD.y,
          SD = ZD.FromValues(fD / 2, 0, 0, 0, 0, -bD / 2, 0, 0, 0, 0, iD - pD, 0, QD + fD / 2, bD / 2 + wD, pD, 1),
          BD = new ZD;
        return CD.multiplyToRef(cD, BD), BD.multiplyToRef(ID, BD), BD.multiplyToRef(SD, BD)
      }
      static GetAsMatrix2x2(DD) {
        const CD = DD.m,
          cD = [CD[0], CD[1], CD[4], CD[5]];
        return iD.e.MatrixUse64Bits ? cD : new Float32Array(cD)
      }
      static GetAsMatrix3x3(DD) {
        const CD = DD.m,
          cD = [CD[0], CD[1], CD[2], CD[4], CD[5], CD[6], CD[8], CD[9], CD[10]];
        return iD.e.MatrixUse64Bits ? cD : new Float32Array(cD)
      }
      static Transpose(DD) {
        const CD = new ZD;
        return ZD.TransposeToRef(DD, CD), CD
      }
      static TransposeToRef(DD, CD) {
        const cD = DD.m,
          ID = cD[0],
          pD = cD[4],
          iD = cD[8],
          fD = cD[12],
          bD = cD[1],
          QD = cD[5],
          wD = cD[9],
          SD = cD[13],
          BD = cD[2],
          yD = cD[6],
          MD = cD[10],
          tD = cD[14],
          ZD = cD[3],
          oD = cD[7],
          vD = cD[11],
          ND = cD[15],
          gD = CD._m;
        return gD[0] = ID, gD[1] = pD, gD[2] = iD, gD[3] = fD, gD[4] = bD, gD[5] = QD, gD[6] = wD, gD[7] = SD, gD[8] = BD, gD[9] = yD, gD[10] = MD, gD[11] = tD, gD[12] = ZD, gD[13] = oD, gD[14] = vD, gD[15] = ND, CD.markAsUpdated(), CD._updateIdentityStatus(DD._isIdentity, DD._isIdentityDirty), CD
      }
      static Reflection(DD) {
        const CD = new ZD;
        return ZD.ReflectionToRef(DD, CD), CD
      }
      static ReflectionToRef(DD, CD) {
        DD.normalize();
        const cD = DD.normal.x,
          ID = DD.normal.y,
          pD = DD.normal.z,
          iD = -2 * cD,
          fD = -2 * ID,
          bD = -2 * pD;
        return ZD.FromValuesToRef(iD * cD + 1, fD * cD, bD * cD, 0, iD * ID, fD * ID + 1, bD * ID, 0, iD * pD, fD * pD, bD * pD + 1, 0, iD * DD.d, fD * DD.d, bD * DD.d, 1, CD), CD
      }
      static FromXYZAxesToRef(DD, CD, cD, ID) {
        return ZD.FromValuesToRef(DD._x, DD._y, DD._z, 0, CD._x, CD._y, CD._z, 0, cD._x, cD._y, cD._z, 0, 0, 0, 0, 1, ID), ID
      }
      static FromQuaternionToRef(DD, CD) {
        const cD = DD._x * DD._x,
          ID = DD._y * DD._y,
          pD = DD._z * DD._z,
          iD = DD._x * DD._y,
          fD = DD._z * DD._w,
          bD = DD._z * DD._x,
          QD = DD._y * DD._w,
          wD = DD._y * DD._z,
          SD = DD._x * DD._w;
        return CD._m[0] = 1 - 2 * (ID + pD), CD._m[1] = 2 * (iD + fD), CD._m[2] = 2 * (bD - QD), CD._m[3] = 0, CD._m[4] = 2 * (iD - fD), CD._m[5] = 1 - 2 * (pD + cD), CD._m[6] = 2 * (wD + SD), CD._m[7] = 0, CD._m[8] = 2 * (bD + QD), CD._m[9] = 2 * (wD - SD), CD._m[10] = 1 - 2 * (ID + cD), CD._m[11] = 0, CD._m[12] = 0, CD._m[13] = 0, CD._m[14] = 0, CD._m[15] = 1, CD.markAsUpdated(), CD
      }
    }
    ZD._IdentityReadOnly = ZD.Identity();
    class oD {}
    oD.cZ = (0, pD.d)(11, yD.Zero), oD.Matrix = (0, pD.d)(2, ZD.Identity), oD.Quaternion = (0, pD.d)(3, tD.Zero);
    class vD {}
    vD.Vector2 = (0, pD.d)(3, BD.Zero), vD.cZ = (0, pD.d)(13, yD.Zero), vD.Vector4 = (0, pD.d)(3, MD.Zero), vD.Quaternion = (0, pD.d)(3, tD.Zero), vD.Matrix = (0, pD.d)(8, ZD.Identity);
    const ND = ZD.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let gD = !1;

    function XD() {
      gD || (gD = !0, Object.defineProperties(BD.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(yD.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(MD.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(tD.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ZD.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, wD.d)("BABYLON.Vector2", BD), (0, wD.d)("BABYLON.Vector3", yD), (0, wD.d)("BABYLON.Vector4", MD), (0, wD.d)("BABYLON.Matrix", ZD))
    }
  },
  36473: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    const ID = "undefined" !== typeof WeakRef;
    class pD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(DD, CD, cD, ID)
      }
      initialize(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = DD, this.skipNextObservers = CD, this.target = cD, this.currentTarget = ID, this
      }
    }
    class iD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = DD, this.mask = CD, this.scope = cD, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(DD)
      }
    }
    class fD {
      static FromPromise(DD, CD) {
        const cD = new fD;
        return DD.then((DD => {
          cD.notifyObservers(DD)
        })).catch((DD => {
          if (!CD) throw DD;
          CD.notifyObservers(DD)
        })), cD
      }
      get observers() {
        return this._observers
      }
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = CD, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new pD(0), DD && (this._onObserverAdded = DD)
      }
      add(DD) {
        let CD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!DD) return null;
        const pD = new iD(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        pD.unregisterOnNextCall = cD, CD ? this._observers.unshift(pD) : this._observers.push(pD), this._onObserverAdded && this._onObserverAdded(pD), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(pD, this._lastNotifiedValue);
        const fD = ID ? new WeakRef(this) : {
          deref: () => this
        };
        return pD._remove = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const CD = fD.deref();
          CD && (DD ? CD.remove(pD) : CD._remove(pD))
        }, pD
      }
      addOnce(DD) {
        return this.add(DD, void 0, void 0, void 0, !0)
      }
      remove(DD) {
        if (!DD) return !1;
        DD._remove = null;
        return -1 !== this._observers.indexOf(DD) && (this._deferUnregister(DD), !0)
      }
      removeCallback(DD, CD) {
        for (let cD = 0; cD < this._observers.length; cD++) {
          const ID = this._observers[cD];
          if (!ID._willBeUnregistered && (ID.callback === DD && (!CD || CD === ID.scope))) return this._deferUnregister(ID), !0
        }
        return !1
      }
      _deferUnregister(DD) {
        DD._willBeUnregistered || (this._numObserversMarkedAsDeleted++, DD.unregisterOnNextCall = !1, DD._willBeUnregistered = !0, setTimeout((() => {
          this._remove(DD)
        }), 0))
      }
      _remove(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!DD) return !1;
        const cD = this._observers.indexOf(DD);
        return -1 !== cD && (CD && this._numObserversMarkedAsDeleted--, this._observers.splice(cD, 1), !0)
      }
      makeObserverTopPriority(DD) {
        this._remove(DD, !1), this._observers.unshift(DD)
      }
      makeObserverBottomPriority(DD) {
        this._remove(DD, !1), this._observers.push(DD)
      }
      notifyObservers(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = DD), !this._observers.length) return !0;
        const iD = this._eventState;
        iD.mask = CD, iD.target = cD, iD.currentTarget = ID, iD.skipNextObservers = !1, iD.lastReturnValue = DD, iD.userInfo = pD;
        for (const fD of this._observers)
          if (!fD._willBeUnregistered && (fD.mask & CD && (fD.unregisterOnNextCall && this._deferUnregister(fD), fD.scope ? iD.lastReturnValue = fD.callback.apply(fD.scope, [DD, iD]) : iD.lastReturnValue = fD.callback(DD, iD)), iD.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = CD), DD._willBeUnregistered) return;
        const ID = this._eventState;
        ID.mask = cD, ID.skipNextObservers = !1, DD.unregisterOnNextCall && this._deferUnregister(DD), DD.callback(CD, ID)
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
        const DD = new fD;
        return DD._observers = this._observers.slice(0), DD
      }
      hasSpecificMask() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const CD of this._observers)
          if (CD.mask & DD || CD.mask === DD) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);