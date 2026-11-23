export const id = 231;
export const ids = [231];
export const modules = {
  36985: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC
    });
    var QC = ZC(36987);
    class wC {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    wC.Instances = [], wC.OnEnginesDisposedObservable = new QC.d, wC._LastCreatedScene = null, wC.UseFallbackTexture = !0, wC.FallbackTexture = ""
  },
  36977: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      static SetMatrixPrecision(CC) {
        if (QC.MatrixTrackPrecisionChange = !1, CC && !QC.MatrixUse64Bits && QC.MatrixTrackedMatrices)
          for (let zC = 0; zC < QC.MatrixTrackedMatrices.length; ++zC) {
            const CC = QC.MatrixTrackedMatrices[zC],
              ZC = CC._m;
            CC._m = new Array(16);
            for (let zC = 0; zC < 16; ++zC) CC._m[zC] = ZC[zC]
          }
        QC.MatrixUse64Bits = CC, QC.MatrixCurrentType = QC.MatrixUse64Bits ? Array : Float32Array, QC.MatrixTrackedMatrices = null
      }
    }
    QC.MatrixUse64Bits = !1, QC.MatrixTrackPrecisionChange = !0, QC.MatrixCurrentType = Float32Array, QC.MatrixTrackedMatrices = []
  },
  36996: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => fC,
      h: () => qC,
      l: () => oC,
      m: () => QC,
      o: () => bC,
      q: () => nC
    });
    class QC {}

    function wC(CC) {
      CC.updateFlag = QC._UpdateFlagSeed++
    }

    function bC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const wC = CC.VZC(),
        bC = zC.VZC(),
        nC = wC[0],
        fC = wC[1],
        oC = wC[2],
        qC = wC[3],
        FC = wC[4],
        WC = wC[5],
        NC = wC[6],
        MC = wC[7],
        gC = wC[8],
        SC = wC[9],
        pC = wC[10],
        PC = wC[11],
        GC = wC[12],
        RC = wC[13],
        AC = wC[14],
        xC = wC[15],
        JC = bC[0],
        IC = bC[1],
        iC = bC[2],
        vC = bC[3],
        eC = bC[4],
        hC = bC[5],
        KC = bC[6],
        YC = bC[7],
        dC = bC[8],
        mC = bC[9],
        HC = bC[10],
        EC = bC[11],
        lC = bC[12],
        XC = bC[13],
        cC = bC[14],
        uC = bC[15];
      ZC[QC] = nC * JC + fC * eC + oC * dC + qC * lC, ZC[QC + 1] = nC * IC + fC * hC + oC * mC + qC * XC, ZC[QC + 2] = nC * iC + fC * KC + oC * HC + qC * cC, ZC[QC + 3] = nC * vC + fC * YC + oC * EC + qC * uC, ZC[QC + 4] = FC * JC + WC * eC + NC * dC + MC * lC, ZC[QC + 5] = FC * IC + WC * hC + NC * mC + MC * XC, ZC[QC + 6] = FC * iC + WC * KC + NC * HC + MC * cC, ZC[QC + 7] = FC * vC + WC * YC + NC * EC + MC * uC, ZC[QC + 8] = gC * JC + SC * eC + pC * dC + PC * lC, ZC[QC + 9] = gC * IC + SC * hC + pC * mC + PC * XC, ZC[QC + 10] = gC * iC + SC * KC + pC * HC + PC * cC, ZC[QC + 11] = gC * vC + SC * YC + pC * EC + PC * uC, ZC[QC + 12] = GC * JC + RC * eC + AC * dC + xC * lC, ZC[QC + 13] = GC * IC + RC * hC + AC * mC + xC * XC, ZC[QC + 14] = GC * iC + RC * KC + AC * HC + xC * cC, ZC[QC + 15] = GC * vC + RC * YC + AC * EC + xC * uC
    }

    function nC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      bC(CC, zC, ZC.VZC(), QC), wC(ZC)
    }

    function fC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const QC = CC.VZC();
      zC[ZC] = QC[0], zC[ZC + 1] = QC[1], zC[ZC + 2] = QC[2], zC[ZC + 3] = QC[3], zC[ZC + 4] = QC[4], zC[ZC + 5] = QC[5], zC[ZC + 6] = QC[6], zC[ZC + 7] = QC[7], zC[ZC + 8] = QC[8], zC[ZC + 9] = QC[9], zC[ZC + 10] = QC[10], zC[ZC + 11] = QC[11], zC[ZC + 12] = QC[12], zC[ZC + 13] = QC[13], zC[ZC + 14] = QC[14], zC[ZC + 15] = QC[15]
    }

    function oC(CC, zC) {
      const ZC = qC(CC, zC.VZC());
      return ZC && wC(zC), ZC
    }

    function qC(CC, zC) {
      const ZC = CC.VZC(),
        QC = ZC[0],
        wC = ZC[1],
        bC = ZC[2],
        nC = ZC[3],
        fC = ZC[4],
        oC = ZC[5],
        qC = ZC[6],
        FC = ZC[7],
        WC = ZC[8],
        NC = ZC[9],
        MC = ZC[10],
        gC = ZC[11],
        SC = ZC[12],
        pC = ZC[13],
        PC = ZC[14],
        GC = ZC[15],
        RC = MC * GC - PC * gC,
        AC = NC * GC - pC * gC,
        xC = NC * PC - pC * MC,
        JC = WC * GC - SC * gC,
        IC = WC * PC - MC * SC,
        iC = WC * pC - SC * NC,
        vC = +(oC * RC - qC * AC + FC * xC),
        eC = -(fC * RC - qC * JC + FC * IC),
        hC = +(fC * AC - oC * JC + FC * iC),
        KC = -(fC * xC - oC * IC + qC * iC),
        YC = QC * vC + wC * eC + bC * hC + nC * KC;
      if (0 === YC) return !1;
      const dC = 1 / YC,
        mC = qC * GC - PC * FC,
        HC = oC * GC - pC * FC,
        EC = oC * PC - pC * qC,
        lC = fC * GC - SC * FC,
        XC = fC * PC - SC * qC,
        cC = fC * pC - SC * oC,
        uC = qC * gC - MC * FC,
        rC = oC * gC - NC * FC,
        sC = oC * MC - NC * qC,
        TC = fC * gC - WC * FC,
        aC = fC * MC - WC * qC,
        tC = fC * NC - WC * oC,
        DC = -(wC * RC - bC * AC + nC * xC),
        jC = +(QC * RC - bC * JC + nC * IC),
        yC = -(QC * AC - wC * JC + nC * iC),
        LC = +(QC * xC - wC * IC + bC * iC),
        UC = +(wC * mC - bC * HC + nC * EC),
        BC = -(QC * mC - bC * lC + nC * XC),
        OC = +(QC * HC - wC * lC + nC * cC),
        kC = -(QC * EC - wC * XC + bC * cC),
        VC = -(wC * uC - bC * rC + nC * sC),
        Cz = +(QC * uC - bC * TC + nC * aC),
        zz = -(QC * rC - wC * TC + nC * tC),
        Zz = +(QC * sC - wC * aC + bC * tC);
      return zC[0] = vC * dC, zC[1] = DC * dC, zC[2] = UC * dC, zC[3] = VC * dC, zC[4] = eC * dC, zC[5] = jC * dC, zC[6] = BC * dC, zC[7] = Cz * dC, zC[8] = hC * dC, zC[9] = yC * dC, zC[10] = OC * dC, zC[11] = zz * dC, zC[12] = KC * dC, zC[13] = LC * dC, zC[14] = kC * dC, zC[15] = Zz * dC, !0
    }
    QC._UpdateFlagSeed = 0
  },
  36963: (CC, zC, ZC) => {
    ZC.d(zC, {
      b: () => SC,
      f: () => gC,
      g: () => AC,
      j: () => PC,
      n: () => WC,
      r: () => NC,
      u: () => MC
    });
    var QC = ZC(36968),
      wC = ZC(36971),
      bC = ZC(36977),
      nC = ZC(36985),
      fC = ZC(36991),
      oC = ZC(36996),
      qC = ZC(37002);
    const FC = CC => parseInt(CC.toString().replace(/\W/g, ""));
    class WC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = CC, this.y = zC
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let CC = FC(this.x);
        return CC = 397 * CC ^ FC(this.y), CC
      }
      toArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return CC[zC] = this.x, CC[zC + 1] = this.y, this
      }
      azC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WC.FromArrayToRef(CC, zC, this), this
      }
      VZC() {
        return [this.x, this.y]
      }
      Av(CC) {
        return this.x = CC.x, this.y = CC.y, this
      }
      L_(CC, zC) {
        return this.x = CC, this.y = zC, this
      }
      set(CC, zC) {
        return this.L_(CC, zC)
      }
      Q_(CC) {
        return this.L_(CC, CC)
      }
      add(CC) {
        return new WC(this.x + CC.x, this.y + CC.y)
      }
      addToRef(CC, zC) {
        return zC.x = this.x + CC.x, zC.y = this.y + CC.y, zC
      }
      addInPlace(CC) {
        return this.x += CC.x, this.y += CC.y, this
      }
      addInPlaceFromFloats(CC, zC) {
        return this.x += CC, this.y += zC, this
      }
      addVector3(CC) {
        return new WC(this.x + CC.x, this.y + CC.y)
      }
      subtract(CC) {
        return new WC(this.x - CC.x, this.y - CC.y)
      }
      subtractToRef(CC, zC) {
        return zC.x = this.x - CC.x, zC.y = this.y - CC.y, zC
      }
      RQC(CC) {
        return this.x -= CC.x, this.y -= CC.y, this
      }
      multiplyInPlace(CC) {
        return this.x *= CC.x, this.y *= CC.y, this
      }
      multiply(CC) {
        return new WC(this.x * CC.x, this.y * CC.y)
      }
      multiplyToRef(CC, zC) {
        return zC.x = this.x * CC.x, zC.y = this.y * CC.y, zC
      }
      multiplyByFloats(CC, zC) {
        return new WC(this.x * CC, this.y * zC)
      }
      divide(CC) {
        return new WC(this.x / CC.x, this.y / CC.y)
      }
      divideToRef(CC, zC) {
        return zC.x = this.x / CC.x, zC.y = this.y / CC.y, zC
      }
      divideInPlace(CC) {
        return this.x = this.x / CC.x, this.y = this.y / CC.y, this
      }
      minimizeInPlace(CC) {
        return this.minimizeInPlaceFromFloats(CC.x, CC.y)
      }
      maximizeInPlace(CC) {
        return this.maximizeInPlaceFromFloats(CC.x, CC.y)
      }
      minimizeInPlaceFromFloats(CC, zC) {
        return this.x = Math.min(CC, this.x), this.y = Math.min(zC, this.y), this
      }
      maximizeInPlaceFromFloats(CC, zC) {
        return this.x = Math.max(CC, this.x), this.y = Math.max(zC, this.y), this
      }
      subtractFromFloats(CC, zC) {
        return new WC(this.x - CC, this.y - zC)
      }
      subtractFromFloatsToRef(CC, zC, ZC) {
        return ZC.x = this.x - CC, ZC.y = this.y - zC, ZC
      }
      Of() {
        return new WC(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(CC) {
        return CC.x = -this.x, CC.y = -this.y, CC
      }
      scaleInPlace(CC) {
        return this.x *= CC, this.y *= CC, this
      }
      scale(CC) {
        return new WC(this.x * CC, this.y * CC)
      }
      scaleToRef(CC, zC) {
        return zC.x = this.x * CC, zC.y = this.y * CC, zC
      }
      scaleAndAddToRef(CC, zC) {
        return zC.x += this.x * CC, zC.y += this.y * CC, zC
      }
      equals(CC) {
        return CC && this.x === CC.x && this.y === CC.y
      }
      equalsWithEpsilon(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.e;
        return CC && (0, fC.WithinEpsilon)(this.x, CC.x, zC) && (0, fC.WithinEpsilon)(this.y, CC.y, zC)
      }
      dnC(CC, zC) {
        return this.x === CC && this.y === zC
      }
      floor() {
        return new WC(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(CC) {
        return CC.x = Math.floor(this.x), CC.y = Math.floor(this.y), CC
      }
      fract() {
        return new WC(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(CC) {
        return CC.x = this.x - Math.floor(this.x), CC.y = this.y - Math.floor(this.y), CC
      }
      rotate(CC) {
        return this.rotateToRef(CC, new WC)
      }
      rotateToRef(CC, zC) {
        const ZC = Math.cos(CC),
          QC = Math.sin(CC);
        return zC.x = ZC * this.x - QC * this.y, zC.y = QC * this.x + ZC * this.y, zC
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
      normalizeFromLength(CC) {
        return 0 === CC || 1 === CC ? this : this.scaleInPlace(1 / CC)
      }
      normalizeToNew() {
        const CC = new WC;
        return this.normalizeToRef(CC), CC
      }
      normalizeToRef(CC) {
        const zC = this.length();
        return 0 === zC || 1 === zC ? (CC.x = this.x, CC.y = this.y, CC) : this.scaleToRef(1 / zC, CC)
      }
      clone() {
        return new WC(this.x, this.y)
      }
      dot(CC) {
        return this.x * CC.x + this.y * CC.y
      }
      static Zero() {
        return new WC(0, 0)
      }
      static One() {
        return new WC(1, 1)
      }
      static Random() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new WC((0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC))
      }
      static RandomToRef() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).L_((0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC))
      }
      static get ZeroReadOnly() {
        return WC._ZeroReadOnly
      }
      static FromArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new WC(CC[zC], CC[zC + 1])
      }
      static FromArrayToRef(CC, zC, ZC) {
        return ZC.x = CC[zC], ZC.y = CC[zC + 1], ZC
      }
      static FromFloatsToRef(CC, zC, ZC) {
        return ZC.L_(CC, zC), ZC
      }
      static CatmullRom(CC, zC, ZC, QC, wC) {
        const bC = wC * wC,
          nC = wC * bC,
          fC = .5 * (2 * zC.x + (-CC.x + ZC.x) * wC + (2 * CC.x - 5 * zC.x + 4 * ZC.x - QC.x) * bC + (-CC.x + 3 * zC.x - 3 * ZC.x + QC.x) * nC),
          oC = .5 * (2 * zC.y + (-CC.y + ZC.y) * wC + (2 * CC.y - 5 * zC.y + 4 * ZC.y - QC.y) * bC + (-CC.y + 3 * zC.y - 3 * ZC.y + QC.y) * nC);
        return new WC(fC, oC)
      }
      static ClampToRef(CC, zC, ZC, QC) {
        return QC.x = (0, fC.Clamp)(CC.x, zC.x, ZC.x), QC.y = (0, fC.Clamp)(CC.y, zC.y, ZC.y), QC
      }
      static Clamp(CC, zC, ZC) {
        const QC = (0, fC.Clamp)(CC.x, zC.x, ZC.x),
          wC = (0, fC.Clamp)(CC.y, zC.y, ZC.y);
        return new WC(QC, wC)
      }
      static Hermite(CC, zC, ZC, QC, wC) {
        const bC = wC * wC,
          nC = wC * bC,
          fC = 2 * nC - 3 * bC + 1,
          oC = -2 * nC + 3 * bC,
          qC = nC - 2 * bC + wC,
          FC = nC - bC,
          NC = CC.x * fC + ZC.x * oC + zC.x * qC + QC.x * FC,
          MC = CC.y * fC + ZC.y * oC + zC.y * qC + QC.y * FC;
        return new WC(NC, MC)
      }
      static Hermite1stDerivative(CC, zC, ZC, QC, wC) {
        return this.Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, new WC)
      }
      static Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC) {
        const nC = wC * wC;
        return bC.x = 6 * (nC - wC) * CC.x + (3 * nC - 4 * wC + 1) * zC.x + 6 * (-nC + wC) * ZC.x + (3 * nC - 2 * wC) * QC.x, bC.y = 6 * (nC - wC) * CC.y + (3 * nC - 4 * wC + 1) * zC.y + 6 * (-nC + wC) * ZC.y + (3 * nC - 2 * wC) * QC.y, bC
      }
      static Lerp(CC, zC, ZC) {
        return WC.LerpToRef(CC, zC, ZC, new WC)
      }
      static LerpToRef(CC, zC, ZC, QC) {
        return QC.x = CC.x + (zC.x - CC.x) * ZC, QC.y = CC.y + (zC.y - CC.y) * ZC, QC
      }
      static Dot(CC, zC) {
        return CC.x * zC.x + CC.y * zC.y
      }
      static Normalize(CC) {
        return WC.NormalizeToRef(CC, new WC)
      }
      static NormalizeToRef(CC, zC) {
        return CC.normalizeToRef(zC), zC
      }
      static Minimize(CC, zC) {
        const ZC = CC.x < zC.x ? CC.x : zC.x,
          QC = CC.y < zC.y ? CC.y : zC.y;
        return new WC(ZC, QC)
      }
      static Maximize(CC, zC) {
        const ZC = CC.x > zC.x ? CC.x : zC.x,
          QC = CC.y > zC.y ? CC.y : zC.y;
        return new WC(ZC, QC)
      }
      static Transform(CC, zC) {
        return WC.TransformToRef(CC, zC, new WC)
      }
      static TransformToRef(CC, zC, ZC) {
        const QC = zC.m,
          wC = CC.x * QC[0] + CC.y * QC[4] + QC[12],
          bC = CC.x * QC[1] + CC.y * QC[5] + QC[13];
        return ZC.x = wC, ZC.y = bC, ZC
      }
      static PointInTriangle(CC, zC, ZC, QC) {
        const wC = .5 * (-ZC.y * QC.x + zC.y * (-ZC.x + QC.x) + zC.x * (ZC.y - QC.y) + ZC.x * QC.y),
          bC = wC < 0 ? -1 : 1,
          nC = (zC.y * QC.x - zC.x * QC.y + (QC.y - zC.y) * CC.x + (zC.x - QC.x) * CC.y) * bC,
          fC = (zC.x * ZC.y - zC.y * ZC.x + (zC.y - ZC.y) * CC.x + (ZC.x - zC.x) * CC.y) * bC;
        return nC > 0 && fC > 0 && nC + fC < 2 * wC * bC
      }
      static Distance(CC, zC) {
        return Math.sqrt(WC.DistanceSquared(CC, zC))
      }
      static DistanceSquared(CC, zC) {
        const ZC = CC.x - zC.x,
          QC = CC.y - zC.y;
        return ZC * ZC + QC * QC
      }
      static Center(CC, zC) {
        return WC.CenterToRef(CC, zC, new WC)
      }
      static CenterToRef(CC, zC, ZC) {
        return ZC.L_((CC.x + zC.x) / 2, (CC.y + zC.y) / 2)
      }
      static DistanceOfPointFromSegment(CC, zC, ZC) {
        const QC = WC.DistanceSquared(zC, ZC);
        if (0 === QC) return WC.Distance(CC, zC);
        const wC = ZC.subtract(zC),
          bC = Math.max(0, Math.min(1, WC.Dot(CC.subtract(zC), wC) / QC)),
          nC = zC.add(wC.multiplyByFloats(bC, bC));
        return WC.Distance(CC, nC)
      }
    }
    WC._V8PerformanceHack = new WC(.5, .5), WC._ZeroReadOnly = WC.Zero();
    class NC {
      get x() {
        return this._x
      }
      set x(CC) {
        this._x = CC, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(CC) {
        this._y = CC, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(CC) {
        this._z = CC, this._isDirty = !0
      }
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = CC, this._y = zC, this._z = ZC
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Eg"
      }
      getHashCode() {
        let CC = FC(this._x);
        return CC = 397 * CC ^ FC(this._y), CC = 397 * CC ^ FC(this._z), CC
      }
      VZC() {
        return [this._x, this._y, this._z]
      }
      toArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return CC[zC] = this._x, CC[zC + 1] = this._y, CC[zC + 2] = this._z, this
      }
      azC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return NC.FromArrayToRef(CC, zC, this), this
      }
      toQuaternion() {
        return gC.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(CC) {
        return this._x += CC._x, this._y += CC._y, this._z += CC._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(CC, zC, ZC) {
        return this._x += CC, this._y += zC, this._z += ZC, this._isDirty = !0, this
      }
      add(CC) {
        return new NC(this._x + CC._x, this._y + CC._y, this._z + CC._z)
      }
      addToRef(CC, zC) {
        return zC._x = this._x + CC._x, zC._y = this._y + CC._y, zC._z = this._z + CC._z, zC._isDirty = !0, zC
      }
      RQC(CC) {
        return this._x -= CC._x, this._y -= CC._y, this._z -= CC._z, this._isDirty = !0, this
      }
      subtract(CC) {
        return new NC(this._x - CC._x, this._y - CC._y, this._z - CC._z)
      }
      subtractToRef(CC, zC) {
        return this.subtractFromFloatsToRef(CC._x, CC._y, CC._z, zC)
      }
      subtractFromFloats(CC, zC, ZC) {
        return new NC(this._x - CC, this._y - zC, this._z - ZC)
      }
      subtractFromFloatsToRef(CC, zC, ZC, QC) {
        return QC._x = this._x - CC, QC._y = this._y - zC, QC._z = this._z - ZC, QC._isDirty = !0, QC
      }
      Of() {
        return new NC(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(CC) {
        return CC._x = -1 * this._x, CC._y = -1 * this._y, CC._z = -1 * this._z, CC._isDirty = !0, CC
      }
      scaleInPlace(CC) {
        return this._x *= CC, this._y *= CC, this._z *= CC, this._isDirty = !0, this
      }
      scale(CC) {
        return new NC(this._x * CC, this._y * CC, this._z * CC)
      }
      scaleToRef(CC, zC) {
        return zC._x = this._x * CC, zC._y = this._y * CC, zC._z = this._z * CC, zC._isDirty = !0, zC
      }
      getNormalToRef(CC) {
        const zC = this.length();
        let ZC = Math.acos(this._y / zC);
        const QC = Math.atan2(this._z, this._x);
        ZC > Math.PI / 2 ? ZC -= Math.PI / 2 : ZC += Math.PI / 2;
        const wC = zC * Math.sin(ZC) * Math.cos(QC),
          bC = zC * Math.cos(ZC),
          nC = zC * Math.sin(ZC) * Math.sin(QC);
        return CC.set(wC, bC, nC), CC
      }
      applyRotationQuaternionToRef(CC, zC) {
        const ZC = this._x,
          QC = this._y,
          wC = this._z,
          bC = CC._x,
          nC = CC._y,
          fC = CC._z,
          oC = CC._w,
          qC = 2 * (nC * wC - fC * QC),
          FC = 2 * (fC * ZC - bC * wC),
          WC = 2 * (bC * QC - nC * ZC);
        return zC._x = ZC + oC * qC + nC * WC - fC * FC, zC._y = QC + oC * FC + fC * qC - bC * WC, zC._z = wC + oC * WC + bC * FC - nC * qC, zC._isDirty = !0, zC
      }
      applyRotationQuaternionInPlace(CC) {
        return this.applyRotationQuaternionToRef(CC, this)
      }
      applyRotationQuaternion(CC) {
        return this.applyRotationQuaternionToRef(CC, new NC)
      }
      scaleAndAddToRef(CC, zC) {
        return zC._x += this._x * CC, zC._y += this._y * CC, zC._z += this._z * CC, zC._isDirty = !0, zC
      }
      projectOnPlane(CC, zC) {
        return this.projectOnPlaneToRef(CC, zC, new NC)
      }
      projectOnPlaneToRef(CC, zC, ZC) {
        const QC = CC.normal,
          wC = CC.d,
          bC = pC.Eg[0];
        this.subtractToRef(zC, bC), bC.normalize();
        const nC = NC.Dot(bC, QC);
        if (Math.abs(nC) < 1e-10) ZC.Q_(1 / 0);
        else {
          const CC = -(NC.Dot(zC, QC) + wC) / nC,
            fC = bC.scaleInPlace(CC);
          zC.addToRef(fC, ZC)
        }
        return ZC
      }
      equals(CC) {
        return CC && this._x === CC._x && this._y === CC._y && this._z === CC._z
      }
      equalsWithEpsilon(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.e;
        return CC && (0, fC.WithinEpsilon)(this._x, CC._x, zC) && (0, fC.WithinEpsilon)(this._y, CC._y, zC) && (0, fC.WithinEpsilon)(this._z, CC._z, zC)
      }
      dnC(CC, zC, ZC) {
        return this._x === CC && this._y === zC && this._z === ZC
      }
      multiplyInPlace(CC) {
        return this._x *= CC._x, this._y *= CC._y, this._z *= CC._z, this._isDirty = !0, this
      }
      multiply(CC) {
        return this.multiplyByFloats(CC._x, CC._y, CC._z)
      }
      multiplyToRef(CC, zC) {
        return zC._x = this._x * CC._x, zC._y = this._y * CC._y, zC._z = this._z * CC._z, zC._isDirty = !0, zC
      }
      multiplyByFloats(CC, zC, ZC) {
        return new NC(this._x * CC, this._y * zC, this._z * ZC)
      }
      divide(CC) {
        return new NC(this._x / CC._x, this._y / CC._y, this._z / CC._z)
      }
      divideToRef(CC, zC) {
        return zC._x = this._x / CC._x, zC._y = this._y / CC._y, zC._z = this._z / CC._z, zC._isDirty = !0, zC
      }
      divideInPlace(CC) {
        return this._x = this._x / CC._x, this._y = this._y / CC._y, this._z = this._z / CC._z, this._isDirty = !0, this
      }
      minimizeInPlace(CC) {
        return this.minimizeInPlaceFromFloats(CC._x, CC._y, CC._z)
      }
      maximizeInPlace(CC) {
        return this.maximizeInPlaceFromFloats(CC._x, CC._y, CC._z)
      }
      minimizeInPlaceFromFloats(CC, zC, ZC) {
        return CC < this._x && (this.x = CC), zC < this._y && (this.y = zC), ZC < this._z && (this.z = ZC), this
      }
      maximizeInPlaceFromFloats(CC, zC, ZC) {
        return CC > this._x && (this.x = CC), zC > this._y && (this.y = zC), ZC > this._z && (this.z = ZC), this
      }
      isNonUniformWithinEpsilon(CC) {
        const zC = Math.abs(this._x),
          ZC = Math.abs(this._y);
        if (!(0, fC.WithinEpsilon)(zC, ZC, CC)) return !0;
        const QC = Math.abs(this._z);
        return !(0, fC.WithinEpsilon)(zC, QC, CC) || !(0, fC.WithinEpsilon)(ZC, QC, CC)
      }
      get isNonUniform() {
        const CC = Math.abs(this._x);
        if (CC !== Math.abs(this._y)) return !0;
        return CC !== Math.abs(this._z)
      }
      floorToRef(CC) {
        return CC._x = Math.floor(this._x), CC._y = Math.floor(this._y), CC._z = Math.floor(this._z), CC._isDirty = !0, CC
      }
      floor() {
        return new NC(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(CC) {
        return CC._x = this._x - Math.floor(this._x), CC._y = this._y - Math.floor(this._y), CC._z = this._z - Math.floor(this._z), CC._isDirty = !0, CC
      }
      fract() {
        return new NC(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(CC) {
        if ("xyz" === (CC = CC.toLowerCase())) return this;
        const zC = pC.Eg[0].Av(this);
        return this.x = zC[CC[0]], this.y = zC[CC[1]], this.z = zC[CC[2]], this
      }
      rotateByQuaternionToRef(CC, zC) {
        return CC.toRotationMatrix(pC.Matrix[0]), NC.TransformCoordinatesToRef(this, pC.Matrix[0], zC), zC
      }
      rotateByQuaternionAroundPointToRef(CC, zC, ZC) {
        return this.subtractToRef(zC, pC.Eg[0]), pC.Eg[0].rotateByQuaternionToRef(CC, pC.Eg[0]), zC.addToRef(pC.Eg[0], ZC), ZC
      }
      cross(CC) {
        return NC.CrossToRef(this, CC, new NC)
      }
      normalizeFromLength(CC) {
        return 0 === CC || 1 === CC ? this : this.scaleInPlace(1 / CC)
      }
      normalizeToNew() {
        return this.normalizeToRef(new NC)
      }
      normalizeToRef(CC) {
        const zC = this.length();
        return 0 === zC || 1 === zC ? (CC._x = this._x, CC._y = this._y, CC._z = this._z, CC._isDirty = !0, CC) : this.scaleToRef(1 / zC, CC)
      }
      clone() {
        return new NC(this._x, this._y, this._z)
      }
      Av(CC) {
        return this.L_(CC._x, CC._y, CC._z)
      }
      L_(CC, zC, ZC) {
        return this._x = CC, this._y = zC, this._z = ZC, this._isDirty = !0, this
      }
      set(CC, zC, ZC) {
        return this.L_(CC, zC, ZC)
      }
      Q_(CC) {
        return this._x = this._y = this._z = CC, this._isDirty = !0, this
      }
      static GetClipFactor(CC, zC, ZC, QC) {
        const wC = NC.Dot(CC, ZC);
        return (wC - QC) / (wC - NC.Dot(zC, ZC))
      }
      static GetAngleBetweenVectors(CC, zC, ZC) {
        const QC = CC.normalizeToRef(pC.Eg[1]),
          wC = zC.normalizeToRef(pC.Eg[2]);
        let bC = NC.Dot(QC, wC);
        bC = (0, fC.Clamp)(bC, -1, 1);
        const nC = Math.acos(bC),
          oC = pC.Eg[3];
        return NC.CrossToRef(QC, wC, oC), NC.Dot(oC, ZC) > 0 ? isNaN(nC) ? 0 : nC : isNaN(nC) ? -Math.PI : -Math.acos(bC)
      }
      static GetAngleBetweenVectorsOnPlane(CC, zC, ZC) {
        pC.Eg[0].Av(CC);
        const QC = pC.Eg[0];
        pC.Eg[1].Av(zC);
        const wC = pC.Eg[1];
        pC.Eg[2].Av(ZC);
        const bC = pC.Eg[2],
          nC = pC.Eg[3],
          oC = pC.Eg[4];
        QC.normalize(), wC.normalize(), bC.normalize(), NC.CrossToRef(bC, QC, nC), NC.CrossToRef(nC, bC, oC);
        const qC = Math.atan2(NC.Dot(wC, nC), NC.Dot(wC, oC));
        return (0, fC.NormalizeRadians)(qC)
      }
      static PitchYawRollToMoveBetweenPointsToRef(CC, zC, ZC) {
        const QC = PC.Eg[0];
        return zC.subtractToRef(CC, QC), ZC._y = Math.atan2(QC.x, QC.z) || 0, ZC._x = Math.atan2(Math.sqrt(QC.x ** 2 + QC.z ** 2), QC.y) || 0, ZC._z = 0, ZC._isDirty = !0, ZC
      }
      static PitchYawRollToMoveBetweenPoints(CC, zC) {
        const ZC = NC.Zero();
        return NC.PitchYawRollToMoveBetweenPointsToRef(CC, zC, ZC)
      }
      static SlerpToRef(CC, zC, ZC, wC) {
        ZC = (0, fC.Clamp)(ZC, 0, 1);
        const bC = pC.Eg[0],
          nC = pC.Eg[1];
        bC.Av(CC);
        const oC = bC.length();
        bC.normalizeFromLength(oC), nC.Av(zC);
        const qC = nC.length();
        nC.normalizeFromLength(qC);
        const FC = NC.Dot(bC, nC);
        let WC, MC;
        if (FC < 1 - QC.e) {
          const CC = Math.acos(FC),
            zC = 1 / Math.sin(CC);
          WC = Math.sin((1 - ZC) * CC) * zC, MC = Math.sin(ZC * CC) * zC
        } else WC = 1 - ZC, MC = ZC;
        return bC.scaleInPlace(WC), nC.scaleInPlace(MC), wC.Av(bC).addInPlace(nC), wC.scaleInPlace((0, fC.Lerp)(oC, qC, ZC)), wC
      }
      static SmoothToRef(CC, zC, ZC, QC, wC) {
        return NC.SlerpToRef(CC, zC, 0 === QC ? 1 : ZC / QC, wC), wC
      }
      static FromArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new NC(CC[zC], CC[zC + 1], CC[zC + 2])
      }
      static FromFloatArray(CC, zC) {
        return NC.FromArray(CC, zC)
      }
      static FromArrayToRef(CC, zC, ZC) {
        return ZC._x = CC[zC], ZC._y = CC[zC + 1], ZC._z = CC[zC + 2], ZC._isDirty = !0, ZC
      }
      static FromFloatArrayToRef(CC, zC, ZC) {
        return NC.FromArrayToRef(CC, zC, ZC)
      }
      static FromFloatsToRef(CC, zC, ZC, QC) {
        return QC.L_(CC, zC, ZC), QC
      }
      static Zero() {
        return new NC(0, 0, 0)
      }
      static One() {
        return new NC(1, 1, 1)
      }
      static Up() {
        return new NC(0, 1, 0)
      }
      static get UpReadOnly() {
        return NC._UpReadOnly
      }
      static get DownReadOnly() {
        return NC._DownReadOnly
      }
      static get RightReadOnly() {
        return NC._RightReadOnly
      }
      static get LeftReadOnly() {
        return NC._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return NC._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return NC._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return NC._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return NC._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return NC._ZeroReadOnly
      }
      static get OneReadOnly() {
        return NC._OneReadOnly
      }
      static Down() {
        return new NC(0, -1, 0)
      }
      static Forward() {
        return new NC(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new NC(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new NC(1, 0, 0)
      }
      static Left() {
        return new NC(-1, 0, 0)
      }
      static Random() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new NC((0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC))
      }
      static RandomToRef() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).L_((0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC))
      }
      static TransformCoordinates(CC, zC) {
        const ZC = NC.Zero();
        return NC.TransformCoordinatesToRef(CC, zC, ZC), ZC
      }
      static TransformCoordinatesToRef(CC, zC, ZC) {
        return NC.TransformCoordinatesFromFloatsToRef(CC._x, CC._y, CC._z, zC, ZC), ZC
      }
      static TransformCoordinatesFromFloatsToRef(CC, zC, ZC, QC, wC) {
        const bC = QC.m,
          nC = CC * bC[0] + zC * bC[4] + ZC * bC[8] + bC[12],
          fC = CC * bC[1] + zC * bC[5] + ZC * bC[9] + bC[13],
          oC = CC * bC[2] + zC * bC[6] + ZC * bC[10] + bC[14],
          qC = 1 / (CC * bC[3] + zC * bC[7] + ZC * bC[11] + bC[15]);
        return wC._x = nC * qC, wC._y = fC * qC, wC._z = oC * qC, wC._isDirty = !0, wC
      }
      static TransformNormal(CC, zC) {
        const ZC = NC.Zero();
        return NC.TransformNormalToRef(CC, zC, ZC), ZC
      }
      static TransformNormalToRef(CC, zC, ZC) {
        return this.TransformNormalFromFloatsToRef(CC._x, CC._y, CC._z, zC, ZC), ZC
      }
      static TransformNormalFromFloatsToRef(CC, zC, ZC, QC, wC) {
        const bC = QC.m;
        return wC._x = CC * bC[0] + zC * bC[4] + ZC * bC[8], wC._y = CC * bC[1] + zC * bC[5] + ZC * bC[9], wC._z = CC * bC[2] + zC * bC[6] + ZC * bC[10], wC._isDirty = !0, wC
      }
      static CatmullRom(CC, zC, ZC, QC, wC) {
        const bC = wC * wC,
          nC = wC * bC,
          fC = .5 * (2 * zC._x + (-CC._x + ZC._x) * wC + (2 * CC._x - 5 * zC._x + 4 * ZC._x - QC._x) * bC + (-CC._x + 3 * zC._x - 3 * ZC._x + QC._x) * nC),
          oC = .5 * (2 * zC._y + (-CC._y + ZC._y) * wC + (2 * CC._y - 5 * zC._y + 4 * ZC._y - QC._y) * bC + (-CC._y + 3 * zC._y - 3 * ZC._y + QC._y) * nC),
          qC = .5 * (2 * zC._z + (-CC._z + ZC._z) * wC + (2 * CC._z - 5 * zC._z + 4 * ZC._z - QC._z) * bC + (-CC._z + 3 * zC._z - 3 * ZC._z + QC._z) * nC);
        return new NC(fC, oC, qC)
      }
      static Clamp(CC, zC, ZC) {
        const QC = new NC;
        return NC.ClampToRef(CC, zC, ZC, QC), QC
      }
      static ClampToRef(CC, zC, ZC, QC) {
        let wC = CC._x;
        wC = wC > ZC._x ? ZC._x : wC, wC = wC < zC._x ? zC._x : wC;
        let bC = CC._y;
        bC = bC > ZC._y ? ZC._y : bC, bC = bC < zC._y ? zC._y : bC;
        let nC = CC._z;
        return nC = nC > ZC._z ? ZC._z : nC, nC = nC < zC._z ? zC._z : nC, QC.L_(wC, bC, nC), QC
      }
      static CheckExtends(CC, zC, ZC) {
        zC.minimizeInPlace(CC), ZC.maximizeInPlace(CC)
      }
      static Hermite(CC, zC, ZC, QC, wC) {
        const bC = wC * wC,
          nC = wC * bC,
          fC = 2 * nC - 3 * bC + 1,
          oC = -2 * nC + 3 * bC,
          qC = nC - 2 * bC + wC,
          FC = nC - bC,
          WC = CC._x * fC + ZC._x * oC + zC._x * qC + QC._x * FC,
          MC = CC._y * fC + ZC._y * oC + zC._y * qC + QC._y * FC,
          gC = CC._z * fC + ZC._z * oC + zC._z * qC + QC._z * FC;
        return new NC(WC, MC, gC)
      }
      static Hermite1stDerivative(CC, zC, ZC, QC, wC) {
        const bC = new NC;
        return this.Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC), bC
      }
      static Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC) {
        const nC = wC * wC;
        return bC._x = 6 * (nC - wC) * CC._x + (3 * nC - 4 * wC + 1) * zC._x + 6 * (-nC + wC) * ZC._x + (3 * nC - 2 * wC) * QC._x, bC._y = 6 * (nC - wC) * CC._y + (3 * nC - 4 * wC + 1) * zC._y + 6 * (-nC + wC) * ZC._y + (3 * nC - 2 * wC) * QC._y, bC._z = 6 * (nC - wC) * CC._z + (3 * nC - 4 * wC + 1) * zC._z + 6 * (-nC + wC) * ZC._z + (3 * nC - 2 * wC) * QC._z, bC._isDirty = !0, bC
      }
      static Lerp(CC, zC, ZC) {
        const QC = new NC(0, 0, 0);
        return NC.LerpToRef(CC, zC, ZC, QC), QC
      }
      static LerpToRef(CC, zC, ZC, QC) {
        return QC._x = CC._x + (zC._x - CC._x) * ZC, QC._y = CC._y + (zC._y - CC._y) * ZC, QC._z = CC._z + (zC._z - CC._z) * ZC, QC._isDirty = !0, QC
      }
      static Dot(CC, zC) {
        return CC._x * zC._x + CC._y * zC._y + CC._z * zC._z
      }
      dot(CC) {
        return this._x * CC._x + this._y * CC._y + this._z * CC._z
      }
      static Cross(CC, zC) {
        const ZC = new NC;
        return NC.CrossToRef(CC, zC, ZC), ZC
      }
      static CrossToRef(CC, zC, ZC) {
        const QC = CC._y * zC._z - CC._z * zC._y,
          wC = CC._z * zC._x - CC._x * zC._z,
          bC = CC._x * zC._y - CC._y * zC._x;
        return ZC.L_(QC, wC, bC), ZC
      }
      static Normalize(CC) {
        const zC = NC.Zero();
        return NC.NormalizeToRef(CC, zC), zC
      }
      static NormalizeToRef(CC, zC) {
        return CC.normalizeToRef(zC), zC
      }
      static Project(CC, zC, ZC, QC) {
        const wC = new NC;
        return NC.ProjectToRef(CC, zC, ZC, QC, wC), wC
      }
      static ProjectToRef(CC, zC, ZC, QC, wC) {
        const bC = QC.width,
          fC = QC.height,
          oC = QC.x,
          qC = QC.y,
          FC = pC.Matrix[1],
          WC = nC.c.LastCreatedEngine?.isNDCHalfZRange,
          MC = WC ? 1 : .5,
          gC = WC ? 0 : .5;
        SC.FromValuesToRef(bC / 2, 0, 0, 0, 0, -fC / 2, 0, 0, 0, 0, MC, 0, oC + bC / 2, fC / 2 + qC, gC, 1, FC);
        const PC = pC.Matrix[0];
        return zC.multiplyToRef(ZC, PC), PC.multiplyToRef(FC, PC), NC.TransformCoordinatesToRef(CC, PC, wC), wC
      }
      static Reflect(CC, zC) {
        return this.ReflectToRef(CC, zC, new NC)
      }
      static ReflectToRef(CC, zC, ZC) {
        const QC = PC.Eg[0];
        return QC.Av(zC).scaleInPlace(2 * NC.Dot(CC, zC)), ZC.Av(CC).RQC(QC)
      }
      static UnprojectFromTransform(CC, zC, ZC, QC, wC) {
        return this.Unproject(CC, zC, ZC, QC, wC, SC.IdentityReadOnly)
      }
      static Unproject(CC, zC, ZC, QC, wC, bC) {
        const nC = new NC;
        return NC.UnprojectToRef(CC, zC, ZC, QC, wC, bC, nC), nC
      }
      static UnprojectToRef(CC, zC, ZC, QC, wC, bC, nC) {
        return NC.UnprojectFloatsToRef(CC._x, CC._y, CC._z, zC, ZC, QC, wC, bC, nC), nC
      }
      static UnprojectFloatsToRef(CC, zC, ZC, QC, wC, bC, fC, oC, qC) {
        const FC = pC.Matrix[0];
        bC.multiplyToRef(fC, FC), FC.multiplyToRef(oC, FC), FC.invert();
        const WC = pC.Eg[0];
        return WC.x = CC / QC * 2 - 1, WC.y = -(zC / wC * 2 - 1), nC.c.LastCreatedEngine?.isNDCHalfZRange ? WC.z = ZC : WC.z = 2 * ZC - 1, NC.TransformCoordinatesToRef(WC, FC, qC), qC
      }
      static Minimize(CC, zC) {
        const ZC = new NC;
        return ZC.Av(CC), ZC.minimizeInPlace(zC), ZC
      }
      static Maximize(CC, zC) {
        const ZC = new NC;
        return ZC.Av(CC), ZC.maximizeInPlace(zC), ZC
      }
      static Distance(CC, zC) {
        return Math.sqrt(NC.DistanceSquared(CC, zC))
      }
      static DistanceSquared(CC, zC) {
        const ZC = CC._x - zC._x,
          QC = CC._y - zC._y,
          wC = CC._z - zC._z;
        return ZC * ZC + QC * QC + wC * wC
      }
      static ProjectOnTriangleToRef(CC, zC, ZC, wC, bC) {
        const nC = pC.Eg[0],
          oC = pC.Eg[1],
          qC = pC.Eg[2],
          FC = pC.Eg[3],
          WC = pC.Eg[4];
        ZC.subtractToRef(zC, nC), wC.subtractToRef(zC, oC), wC.subtractToRef(ZC, qC);
        const MC = nC.length(),
          gC = oC.length(),
          SC = qC.length();
        if (MC < QC.e || gC < QC.e || SC < QC.e) return bC.Av(zC), NC.Distance(CC, zC);
        CC.subtractToRef(zC, WC), NC.CrossToRef(nC, oC, FC);
        const PC = FC.length();
        if (PC < QC.e) return bC.Av(zC), NC.Distance(CC, zC);
        FC.normalizeFromLength(PC);
        let GC = WC.length();
        if (GC < QC.e) return bC.Av(zC), 0;
        WC.normalizeFromLength(GC);
        const RC = NC.Dot(FC, WC),
          AC = pC.Eg[5],
          xC = pC.Eg[6];
        AC.Av(FC).scaleInPlace(-GC * RC), xC.Av(CC).addInPlace(AC);
        const JC = pC.Eg[4],
          IC = pC.Eg[5],
          iC = pC.Eg[7],
          vC = pC.Eg[8];
        JC.Av(nC).scaleInPlace(1 / MC), vC.Av(oC).scaleInPlace(1 / gC), JC.addInPlace(vC).scaleInPlace(-1), IC.Av(nC).scaleInPlace(-1 / MC), vC.Av(qC).scaleInPlace(1 / SC), IC.addInPlace(vC).scaleInPlace(-1), iC.Av(qC).scaleInPlace(-1 / SC), vC.Av(oC).scaleInPlace(-1 / gC), iC.addInPlace(vC).scaleInPlace(-1);
        const eC = pC.Eg[9];
        let hC;
        eC.Av(xC).RQC(zC), NC.CrossToRef(JC, eC, vC), hC = NC.Dot(vC, FC);
        const KC = hC;
        eC.Av(xC).RQC(ZC), NC.CrossToRef(IC, eC, vC), hC = NC.Dot(vC, FC);
        const YC = hC;
        eC.Av(xC).RQC(wC), NC.CrossToRef(iC, eC, vC), hC = NC.Dot(vC, FC);
        const dC = hC,
          mC = pC.Eg[10];
        let HC, EC;
        KC > 0 && YC < 0 ? (mC.Av(nC), HC = zC, EC = ZC) : YC > 0 && dC < 0 ? (mC.Av(qC), HC = ZC, EC = wC) : (mC.Av(oC).scaleInPlace(-1), HC = wC, EC = zC);
        const lC = pC.Eg[9],
          XC = pC.Eg[4];
        HC.subtractToRef(xC, vC), EC.subtractToRef(xC, lC), NC.CrossToRef(vC, lC, XC);
        if (!(NC.Dot(XC, FC) < 0)) return bC.Av(xC), Math.abs(GC * RC);
        const cC = pC.Eg[5];
        NC.CrossToRef(mC, XC, cC), cC.normalize();
        const uC = pC.Eg[9];
        uC.Av(HC).RQC(xC);
        const rC = uC.length();
        if (rC < QC.e) return bC.Av(HC), NC.Distance(CC, HC);
        uC.normalizeFromLength(rC);
        const sC = NC.Dot(cC, uC),
          TC = pC.Eg[7];
        TC.Av(xC).addInPlace(cC.scaleInPlace(rC * sC)), vC.Av(TC).RQC(HC), GC = mC.length(), mC.normalizeFromLength(GC);
        let aC = NC.Dot(vC, mC) / Math.max(GC, QC.e);
        return aC = (0, fC.Clamp)(aC, 0, 1), TC.Av(HC).addInPlace(mC.scaleInPlace(aC * GC)), bC.Av(TC), NC.Distance(CC, TC)
      }
      static Center(CC, zC) {
        return NC.CenterToRef(CC, zC, NC.Zero())
      }
      static CenterToRef(CC, zC, ZC) {
        return ZC.L_((CC._x + zC._x) / 2, (CC._y + zC._y) / 2, (CC._z + zC._z) / 2)
      }
      static RotationFromAxis(CC, zC, ZC) {
        const QC = new NC;
        return NC.RotationFromAxisToRef(CC, zC, ZC, QC), QC
      }
      static RotationFromAxisToRef(CC, zC, ZC, QC) {
        const wC = pC.Quaternion[0];
        return gC.RotationQuaternionFromAxisToRef(CC, zC, ZC, wC), wC.toEulerAnglesToRef(QC), QC
      }
    }
    NC._V8PerformanceHack = new NC(.5, .5, .5), NC._UpReadOnly = NC.Up(), NC._DownReadOnly = NC.Down(), NC._LeftHandedForwardReadOnly = NC.Forward(!1), NC._RightHandedForwardReadOnly = NC.Forward(!0), NC._LeftHandedBackwardReadOnly = NC.Backward(!1), NC._RightHandedBackwardReadOnly = NC.Backward(!0), NC._RightReadOnly = NC.Right(), NC._LeftReadOnly = NC.Left(), NC._ZeroReadOnly = NC.Zero(), NC._OneReadOnly = NC.One();
    class MC {
      get x() {
        return this._x
      }
      set x(CC) {
        this._x = CC, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(CC) {
        this._y = CC, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(CC) {
        this._z = CC, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(CC) {
        this._w = CC, this._isDirty = !0
      }
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = CC, this._y = zC, this._z = ZC, this._w = QC
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let CC = FC(this._x);
        return CC = 397 * CC ^ FC(this._y), CC = 397 * CC ^ FC(this._z), CC = 397 * CC ^ FC(this._w), CC
      }
      VZC() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(CC, zC) {
        return void 0 === zC && (zC = 0), CC[zC] = this._x, CC[zC + 1] = this._y, CC[zC + 2] = this._z, CC[zC + 3] = this._w, this
      }
      azC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return MC.FromArrayToRef(CC, zC, this), this
      }
      addInPlace(CC) {
        return this.x += CC._x, this.y += CC._y, this.z += CC._z, this.w += CC._w, this
      }
      addInPlaceFromFloats(CC, zC, ZC, QC) {
        return this.x += CC, this.y += zC, this.z += ZC, this.w += QC, this
      }
      add(CC) {
        return new MC(this._x + CC.x, this._y + CC.y, this._z + CC.z, this._w + CC.w)
      }
      addToRef(CC, zC) {
        return zC.x = this._x + CC.x, zC.y = this._y + CC.y, zC.z = this._z + CC.z, zC.w = this._w + CC.w, zC
      }
      RQC(CC) {
        return this.x -= CC.x, this.y -= CC.y, this.z -= CC.z, this.w -= CC.w, this
      }
      subtract(CC) {
        return new MC(this._x - CC.x, this._y - CC.y, this._z - CC.z, this._w - CC.w)
      }
      subtractToRef(CC, zC) {
        return zC.x = this._x - CC.x, zC.y = this._y - CC.y, zC.z = this._z - CC.z, zC.w = this._w - CC.w, zC
      }
      subtractFromFloats(CC, zC, ZC, QC) {
        return new MC(this._x - CC, this._y - zC, this._z - ZC, this._w - QC)
      }
      subtractFromFloatsToRef(CC, zC, ZC, QC, wC) {
        return wC.x = this._x - CC, wC.y = this._y - zC, wC.z = this._z - ZC, wC.w = this._w - QC, wC
      }
      Of() {
        return new MC(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(CC) {
        return CC.x = -this._x, CC.y = -this._y, CC.z = -this._z, CC.w = -this._w, CC
      }
      scaleInPlace(CC) {
        return this.x *= CC, this.y *= CC, this.z *= CC, this.w *= CC, this
      }
      scale(CC) {
        return new MC(this._x * CC, this._y * CC, this._z * CC, this._w * CC)
      }
      scaleToRef(CC, zC) {
        return zC.x = this._x * CC, zC.y = this._y * CC, zC.z = this._z * CC, zC.w = this._w * CC, zC
      }
      scaleAndAddToRef(CC, zC) {
        return zC.x += this._x * CC, zC.y += this._y * CC, zC.z += this._z * CC, zC.w += this._w * CC, zC
      }
      equals(CC) {
        return CC && this._x === CC.x && this._y === CC.y && this._z === CC.z && this._w === CC.w
      }
      equalsWithEpsilon(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.e;
        return CC && (0, fC.WithinEpsilon)(this._x, CC.x, zC) && (0, fC.WithinEpsilon)(this._y, CC.y, zC) && (0, fC.WithinEpsilon)(this._z, CC.z, zC) && (0, fC.WithinEpsilon)(this._w, CC.w, zC)
      }
      dnC(CC, zC, ZC, QC) {
        return this._x === CC && this._y === zC && this._z === ZC && this._w === QC
      }
      multiplyInPlace(CC) {
        return this.x *= CC.x, this.y *= CC.y, this.z *= CC.z, this.w *= CC.w, this
      }
      multiply(CC) {
        return new MC(this._x * CC.x, this._y * CC.y, this._z * CC.z, this._w * CC.w)
      }
      multiplyToRef(CC, zC) {
        return zC.x = this._x * CC.x, zC.y = this._y * CC.y, zC.z = this._z * CC.z, zC.w = this._w * CC.w, zC
      }
      multiplyByFloats(CC, zC, ZC, QC) {
        return new MC(this._x * CC, this._y * zC, this._z * ZC, this._w * QC)
      }
      divide(CC) {
        return new MC(this._x / CC.x, this._y / CC.y, this._z / CC.z, this._w / CC.w)
      }
      divideToRef(CC, zC) {
        return zC.x = this._x / CC.x, zC.y = this._y / CC.y, zC.z = this._z / CC.z, zC.w = this._w / CC.w, zC
      }
      divideInPlace(CC) {
        return this.divideToRef(CC, this)
      }
      minimizeInPlace(CC) {
        return CC.x < this._x && (this.x = CC.x), CC.y < this._y && (this.y = CC.y), CC.z < this._z && (this.z = CC.z), CC.w < this._w && (this.w = CC.w), this
      }
      maximizeInPlace(CC) {
        return CC.x > this._x && (this.x = CC.x), CC.y > this._y && (this.y = CC.y), CC.z > this._z && (this.z = CC.z), CC.w > this._w && (this.w = CC.w), this
      }
      minimizeInPlaceFromFloats(CC, zC, ZC, QC) {
        return this.x = Math.min(CC, this._x), this.y = Math.min(zC, this._y), this.z = Math.min(ZC, this._z), this.w = Math.min(QC, this._w), this
      }
      maximizeInPlaceFromFloats(CC, zC, ZC, QC) {
        return this.x = Math.max(CC, this._x), this.y = Math.max(zC, this._y), this.z = Math.max(ZC, this._z), this.w = Math.max(QC, this._w), this
      }
      floorToRef(CC) {
        return CC.x = Math.floor(this._x), CC.y = Math.floor(this._y), CC.z = Math.floor(this._z), CC.w = Math.floor(this._w), CC
      }
      floor() {
        return new MC(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(CC) {
        return CC.x = this._x - Math.floor(this._x), CC.y = this._y - Math.floor(this._y), CC.z = this._z - Math.floor(this._z), CC.w = this._w - Math.floor(this._w), CC
      }
      fract() {
        return new MC(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(CC) {
        return 0 === CC || 1 === CC ? this : this.scaleInPlace(1 / CC)
      }
      normalizeToNew() {
        return this.normalizeToRef(new MC)
      }
      normalizeToRef(CC) {
        const zC = this.length();
        return 0 === zC || 1 === zC ? (CC.x = this._x, CC.y = this._y, CC.z = this._z, CC.w = this._w, CC) : this.scaleToRef(1 / zC, CC)
      }
      toVector3() {
        return new NC(this._x, this._y, this._z)
      }
      clone() {
        return new MC(this._x, this._y, this._z, this._w)
      }
      Av(CC) {
        return this.x = CC.x, this.y = CC.y, this.z = CC.z, this.w = CC.w, this
      }
      L_(CC, zC, ZC, QC) {
        return this.x = CC, this.y = zC, this.z = ZC, this.w = QC, this
      }
      set(CC, zC, ZC, QC) {
        return this.L_(CC, zC, ZC, QC)
      }
      Q_(CC) {
        return this.x = this.y = this.z = this.w = CC, this
      }
      dot(CC) {
        return this._x * CC.x + this._y * CC.y + this._z * CC.z + this._w * CC.w
      }
      static FromArray(CC, zC) {
        return zC || (zC = 0), new MC(CC[zC], CC[zC + 1], CC[zC + 2], CC[zC + 3])
      }
      static FromArrayToRef(CC, zC, ZC) {
        return ZC.x = CC[zC], ZC.y = CC[zC + 1], ZC.z = CC[zC + 2], ZC.w = CC[zC + 3], ZC
      }
      static FromFloatArrayToRef(CC, zC, ZC) {
        return MC.FromArrayToRef(CC, zC, ZC), ZC
      }
      static FromFloatsToRef(CC, zC, ZC, QC, wC) {
        return wC.x = CC, wC.y = zC, wC.z = ZC, wC.w = QC, wC
      }
      static Zero() {
        return new MC(0, 0, 0, 0)
      }
      static One() {
        return new MC(1, 1, 1, 1)
      }
      static Random() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new MC((0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC))
      }
      static RandomToRef() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        return ZC.x = (0, fC.RandomRange)(CC, zC), ZC.y = (0, fC.RandomRange)(CC, zC), ZC.z = (0, fC.RandomRange)(CC, zC), ZC.w = (0, fC.RandomRange)(CC, zC), ZC
      }
      static Clamp(CC, zC, ZC) {
        return MC.ClampToRef(CC, zC, ZC, new MC)
      }
      static ClampToRef(CC, zC, ZC, QC) {
        return QC.x = (0, fC.Clamp)(CC.x, zC.x, ZC.x), QC.y = (0, fC.Clamp)(CC.y, zC.y, ZC.y), QC.z = (0, fC.Clamp)(CC.z, zC.z, ZC.z), QC.w = (0, fC.Clamp)(CC.w, zC.w, ZC.w), QC
      }
      static CheckExtends(CC, zC, ZC) {
        zC.minimizeInPlace(CC), ZC.maximizeInPlace(CC)
      }
      static get ZeroReadOnly() {
        return MC._ZeroReadOnly
      }
      static Normalize(CC) {
        return MC.NormalizeToRef(CC, new MC)
      }
      static NormalizeToRef(CC, zC) {
        return CC.normalizeToRef(zC), zC
      }
      static Minimize(CC, zC) {
        const ZC = new MC;
        return ZC.Av(CC), ZC.minimizeInPlace(zC), ZC
      }
      static Maximize(CC, zC) {
        const ZC = new MC;
        return ZC.Av(CC), ZC.maximizeInPlace(zC), ZC
      }
      static Distance(CC, zC) {
        return Math.sqrt(MC.DistanceSquared(CC, zC))
      }
      static DistanceSquared(CC, zC) {
        const ZC = CC.x - zC.x,
          QC = CC.y - zC.y,
          wC = CC.z - zC.z,
          bC = CC.w - zC.w;
        return ZC * ZC + QC * QC + wC * wC + bC * bC
      }
      static Center(CC, zC) {
        return MC.CenterToRef(CC, zC, new MC)
      }
      static CenterToRef(CC, zC, ZC) {
        return ZC.x = (CC.x + zC.x) / 2, ZC.y = (CC.y + zC.y) / 2, ZC.z = (CC.z + zC.z) / 2, ZC.w = (CC.w + zC.w) / 2, ZC
      }
      static TransformCoordinates(CC, zC) {
        return MC.TransformCoordinatesToRef(CC, zC, new MC)
      }
      static TransformCoordinatesToRef(CC, zC, ZC) {
        return MC.TransformCoordinatesFromFloatsToRef(CC._x, CC._y, CC._z, zC, ZC), ZC
      }
      static TransformCoordinatesFromFloatsToRef(CC, zC, ZC, QC, wC) {
        const bC = QC.m,
          nC = CC * bC[0] + zC * bC[4] + ZC * bC[8] + bC[12],
          fC = CC * bC[1] + zC * bC[5] + ZC * bC[9] + bC[13],
          oC = CC * bC[2] + zC * bC[6] + ZC * bC[10] + bC[14],
          qC = CC * bC[3] + zC * bC[7] + ZC * bC[11] + bC[15];
        return wC.x = nC, wC.y = fC, wC.z = oC, wC.w = qC, wC
      }
      static TransformNormal(CC, zC) {
        return MC.TransformNormalToRef(CC, zC, new MC)
      }
      static TransformNormalToRef(CC, zC, ZC) {
        const QC = zC.m,
          wC = CC.x * QC[0] + CC.y * QC[4] + CC.z * QC[8],
          bC = CC.x * QC[1] + CC.y * QC[5] + CC.z * QC[9],
          nC = CC.x * QC[2] + CC.y * QC[6] + CC.z * QC[10];
        return ZC.x = wC, ZC.y = bC, ZC.z = nC, ZC.w = CC.w, ZC
      }
      static TransformNormalFromFloatsToRef(CC, zC, ZC, QC, wC, bC) {
        const nC = wC.m;
        return bC.x = CC * nC[0] + zC * nC[4] + ZC * nC[8], bC.y = CC * nC[1] + zC * nC[5] + ZC * nC[9], bC.z = CC * nC[2] + zC * nC[6] + ZC * nC[10], bC.w = QC, bC
      }
      static FromVector3(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new MC(CC._x, CC._y, CC._z, zC)
      }
      static Dot(CC, zC) {
        return CC.x * zC.x + CC.y * zC.y + CC.z * zC.z + CC.w * zC.w
      }
    }
    MC._V8PerformanceHack = new MC(.5, .5, .5, .5), MC._ZeroReadOnly = MC.Zero();
    class gC {
      get x() {
        return this._x
      }
      set x(CC) {
        this._x = CC, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(CC) {
        this._y = CC, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(CC) {
        this._z = CC, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(CC) {
        this._w = CC, this._isDirty = !0
      }
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = CC, this._y = zC, this._z = ZC, this._w = QC
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let CC = FC(this._x);
        return CC = 397 * CC ^ FC(this._y), CC = 397 * CC ^ FC(this._z), CC = 397 * CC ^ FC(this._w), CC
      }
      VZC() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return CC[zC] = this._x, CC[zC + 1] = this._y, CC[zC + 2] = this._z, CC[zC + 3] = this._w, this
      }
      azC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return gC.FromArrayToRef(CC, zC, this)
      }
      equals(CC) {
        return CC && this._x === CC._x && this._y === CC._y && this._z === CC._z && this._w === CC._w
      }
      equalsWithEpsilon(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.e;
        return CC && (0, fC.WithinEpsilon)(this._x, CC._x, zC) && (0, fC.WithinEpsilon)(this._y, CC._y, zC) && (0, fC.WithinEpsilon)(this._z, CC._z, zC) && (0, fC.WithinEpsilon)(this._w, CC._w, zC)
      }
      isApprox(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : QC.e;
        return CC && ((0, fC.WithinEpsilon)(this._x, CC._x, zC) && (0, fC.WithinEpsilon)(this._y, CC._y, zC) && (0, fC.WithinEpsilon)(this._z, CC._z, zC) && (0, fC.WithinEpsilon)(this._w, CC._w, zC) || (0, fC.WithinEpsilon)(this._x, -CC._x, zC) && (0, fC.WithinEpsilon)(this._y, -CC._y, zC) && (0, fC.WithinEpsilon)(this._z, -CC._z, zC) && (0, fC.WithinEpsilon)(this._w, -CC._w, zC))
      }
      clone() {
        return new gC(this._x, this._y, this._z, this._w)
      }
      Av(CC) {
        return this._x = CC._x, this._y = CC._y, this._z = CC._z, this._w = CC._w, this._isDirty = !0, this
      }
      L_(CC, zC, ZC, QC) {
        return this._x = CC, this._y = zC, this._z = ZC, this._w = QC, this._isDirty = !0, this
      }
      set(CC, zC, ZC, QC) {
        return this.L_(CC, zC, ZC, QC)
      }
      Q_(CC) {
        return this.L_(CC, CC, CC, CC)
      }
      add(CC) {
        return new gC(this._x + CC._x, this._y + CC._y, this._z + CC._z, this._w + CC._w)
      }
      addInPlace(CC) {
        return this._x += CC._x, this._y += CC._y, this._z += CC._z, this._w += CC._w, this._isDirty = !0, this
      }
      addToRef(CC, zC) {
        return zC._x = this._x + CC._x, zC._y = this._y + CC._y, zC._z = this._z + CC._z, zC._w = this._w + CC._w, zC._isDirty = !0, zC
      }
      addInPlaceFromFloats(CC, zC, ZC, QC) {
        return this._x += CC, this._y += zC, this._z += ZC, this._w += QC, this._isDirty = !0, this
      }
      subtractToRef(CC, zC) {
        return zC._x = this._x - CC._x, zC._y = this._y - CC._y, zC._z = this._z - CC._z, zC._w = this._w - CC._w, zC._isDirty = !0, zC
      }
      subtractFromFloats(CC, zC, ZC, QC) {
        return this.subtractFromFloatsToRef(CC, zC, ZC, QC, new gC)
      }
      subtractFromFloatsToRef(CC, zC, ZC, QC, wC) {
        return wC._x = this._x - CC, wC._y = this._y - zC, wC._z = this._z - ZC, wC._w = this._w - QC, wC._isDirty = !0, wC
      }
      subtract(CC) {
        return new gC(this._x - CC._x, this._y - CC._y, this._z - CC._z, this._w - CC._w)
      }
      RQC(CC) {
        return this._x -= CC._x, this._y -= CC._y, this._z -= CC._z, this._w -= CC._w, this._isDirty = !0, this
      }
      scale(CC) {
        return new gC(this._x * CC, this._y * CC, this._z * CC, this._w * CC)
      }
      scaleToRef(CC, zC) {
        return zC._x = this._x * CC, zC._y = this._y * CC, zC._z = this._z * CC, zC._w = this._w * CC, zC._isDirty = !0, zC
      }
      scaleInPlace(CC) {
        return this._x *= CC, this._y *= CC, this._z *= CC, this._w *= CC, this._isDirty = !0, this
      }
      scaleAndAddToRef(CC, zC) {
        return zC._x += this._x * CC, zC._y += this._y * CC, zC._z += this._z * CC, zC._w += this._w * CC, zC._isDirty = !0, zC
      }
      multiply(CC) {
        const zC = new gC(0, 0, 0, 1);
        return this.multiplyToRef(CC, zC), zC
      }
      multiplyToRef(CC, zC) {
        const ZC = this._x * CC._w + this._y * CC._z - this._z * CC._y + this._w * CC._x,
          QC = -this._x * CC._z + this._y * CC._w + this._z * CC._x + this._w * CC._y,
          wC = this._x * CC._y - this._y * CC._x + this._z * CC._w + this._w * CC._z,
          bC = -this._x * CC._x - this._y * CC._y - this._z * CC._z + this._w * CC._w;
        return zC.L_(ZC, QC, wC, bC), zC
      }
      multiplyInPlace(CC) {
        return this.multiplyToRef(CC, this)
      }
      multiplyByFloats(CC, zC, ZC, QC) {
        return this._x *= CC, this._y *= zC, this._z *= ZC, this._w *= QC, this._isDirty = !0, this
      }
      divide(CC) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(CC, zC) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(CC) {
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
      Of() {
        return this.negateToRef(new gC)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(CC) {
        return CC._x = -this._x, CC._y = -this._y, CC._z = -this._z, CC._w = -this._w, CC._isDirty = !0, CC
      }
      dnC(CC, zC, ZC, QC) {
        return this._x === CC && this._y === zC && this._z === ZC && this._w === QC
      }
      floorToRef(CC) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(CC) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(CC) {
        return CC.L_(-this._x, -this._y, -this._z, this._w), CC
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new gC(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const CC = this.conjugate(),
          zC = this.lengthSquared();
        return 0 == zC || 1 == zC || CC.scaleInPlace(1 / zC), CC
      }
      invertInPlace() {
        this.conjugateInPlace();
        const CC = this.lengthSquared();
        return 0 == CC || 1 == CC || this.scaleInPlace(1 / CC), this
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
      normalizeFromLength(CC) {
        return 0 === CC || 1 === CC ? this : this.scaleInPlace(1 / CC)
      }
      normalizeToNew() {
        const CC = new gC(0, 0, 0, 1);
        return this.normalizeToRef(CC), CC
      }
      normalizeToRef(CC) {
        const zC = this.length();
        return 0 === zC || 1 === zC ? CC.L_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / zC, CC)
      }
      toEulerAngles() {
        const CC = NC.Zero();
        return this.toEulerAnglesToRef(CC), CC
      }
      toEulerAnglesToRef(CC) {
        const zC = this._z,
          ZC = this._x,
          QC = this._y,
          wC = this._w,
          bC = QC * zC - ZC * wC,
          nC = .4999999;
        if (bC < -nC) CC._y = 2 * Math.atan2(QC, wC), CC._x = Math.PI / 2, CC._z = 0, CC._isDirty = !0;
        else if (bC > nC) CC._y = 2 * Math.atan2(QC, wC), CC._x = -Math.PI / 2, CC._z = 0, CC._isDirty = !0;
        else {
          const nC = wC * wC,
            fC = zC * zC,
            oC = ZC * ZC,
            qC = QC * QC;
          CC._z = Math.atan2(2 * (ZC * QC + zC * wC), -fC - oC + qC + nC), CC._x = Math.asin(-2 * bC), CC._y = Math.atan2(2 * (zC * ZC + QC * wC), fC - oC - qC + nC), CC._isDirty = !0
        }
        return CC
      }
      toAlphaBetaGammaToRef(CC) {
        const zC = this._z,
          ZC = this._x,
          QC = this._y,
          wC = this._w,
          bC = Math.sqrt(ZC * ZC + QC * QC),
          nC = Math.sqrt(zC * zC + wC * wC),
          fC = 2 * Math.atan2(bC, nC),
          oC = 2 * Math.atan2(zC, wC),
          qC = 2 * Math.atan2(QC, ZC),
          FC = (oC + qC) / 2,
          WC = (oC - qC) / 2;
        return CC.set(WC, fC, FC), CC
      }
      toRotationMatrix(CC) {
        return SC.FromQuaternionToRef(this, CC), CC
      }
      fromRotationMatrix(CC) {
        return gC.FromRotationMatrixToRef(CC, this), this
      }
      dot(CC) {
        return this._x * CC._x + this._y * CC._y + this._z * CC._z + this._w * CC._w
      }
      toAxisAngle() {
        const CC = NC.Zero();
        return {
          axis: CC,
          angle: this.toAxisAngleToRef(CC)
        }
      }
      toAxisAngleToRef(CC) {
        let zC;
        const ZC = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          QC = this._w;
        return ZC > 0 ? (zC = 2 * Math.atan2(ZC, QC), CC.set(this._x / ZC, this._y / ZC, this._z / ZC)) : (zC = 0, CC.set(1, 0, 0)), zC
      }
      static FromRotationMatrix(CC) {
        const zC = new gC;
        return gC.FromRotationMatrixToRef(CC, zC), zC
      }
      static FromRotationMatrixToRef(CC, zC) {
        const ZC = CC.m,
          QC = ZC[0],
          wC = ZC[4],
          bC = ZC[8],
          nC = ZC[1],
          fC = ZC[5],
          oC = ZC[9],
          qC = ZC[2],
          FC = ZC[6],
          WC = ZC[10],
          NC = QC + fC + WC;
        let MC;
        return NC > 0 ? (MC = .5 / Math.sqrt(NC + 1), zC._w = .25 / MC, zC._x = (FC - oC) * MC, zC._y = (bC - qC) * MC, zC._z = (nC - wC) * MC, zC._isDirty = !0) : QC > fC && QC > WC ? (MC = 2 * Math.sqrt(1 + QC - fC - WC), zC._w = (FC - oC) / MC, zC._x = .25 * MC, zC._y = (wC + nC) / MC, zC._z = (bC + qC) / MC, zC._isDirty = !0) : fC > WC ? (MC = 2 * Math.sqrt(1 + fC - QC - WC), zC._w = (bC - qC) / MC, zC._x = (wC + nC) / MC, zC._y = .25 * MC, zC._z = (oC + FC) / MC, zC._isDirty = !0) : (MC = 2 * Math.sqrt(1 + WC - QC - fC), zC._w = (nC - wC) / MC, zC._x = (bC + qC) / MC, zC._y = (oC + FC) / MC, zC._z = .25 * MC, zC._isDirty = !0), zC
      }
      static Dot(CC, zC) {
        return CC._x * zC._x + CC._y * zC._y + CC._z * zC._z + CC._w * zC._w
      }
      static AreClose(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const QC = gC.Dot(CC, zC);
        return 1 - QC * QC <= ZC
      }
      static SmoothToRef(CC, zC, ZC, QC, wC) {
        let bC = 0 === QC ? 1 : ZC / QC;
        return bC = (0, fC.Clamp)(bC, 0, 1), gC.SlerpToRef(CC, zC, bC, wC), wC
      }
      static Zero() {
        return new gC(0, 0, 0, 0)
      }
      static Inverse(CC) {
        return new gC(-CC._x, -CC._y, -CC._z, CC._w)
      }
      static InverseToRef(CC, zC) {
        return zC.set(-CC._x, -CC._y, -CC._z, CC._w), zC
      }
      static Identity() {
        return new gC(0, 0, 0, 1)
      }
      static IsIdentity(CC) {
        return CC && 0 === CC._x && 0 === CC._y && 0 === CC._z && 1 === CC._w
      }
      static RotationAxis(CC, zC) {
        return gC.RotationAxisToRef(CC, zC, new gC)
      }
      static RotationAxisToRef(CC, zC, ZC) {
        ZC._w = Math.cos(zC / 2);
        const QC = Math.sin(zC / 2) / CC.length();
        return ZC._x = CC._x * QC, ZC._y = CC._y * QC, ZC._z = CC._z * QC, ZC._isDirty = !0, ZC
      }
      static FromArray(CC, zC) {
        return zC || (zC = 0), new gC(CC[zC], CC[zC + 1], CC[zC + 2], CC[zC + 3])
      }
      static FromArrayToRef(CC, zC, ZC) {
        return ZC._x = CC[zC], ZC._y = CC[zC + 1], ZC._z = CC[zC + 2], ZC._w = CC[zC + 3], ZC._isDirty = !0, ZC
      }
      static FromFloatsToRef(CC, zC, ZC, QC, wC) {
        return wC.L_(CC, zC, ZC, QC), wC
      }
      static FromEulerAngles(CC, zC, ZC) {
        const QC = new gC;
        return gC.RotationYawPitchRollToRef(zC, CC, ZC, QC), QC
      }
      static FromEulerAnglesToRef(CC, zC, ZC, QC) {
        return gC.RotationYawPitchRollToRef(zC, CC, ZC, QC), QC
      }
      static FromEulerVector(CC) {
        const zC = new gC;
        return gC.RotationYawPitchRollToRef(CC._y, CC._x, CC._z, zC), zC
      }
      static FromEulerVectorToRef(CC, zC) {
        return gC.RotationYawPitchRollToRef(CC._y, CC._x, CC._z, zC), zC
      }
      static FromUnitVectorsToRef(CC, zC, ZC) {
        let wC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : QC.e;
        const bC = NC.Dot(CC, zC) + 1;
        return bC < wC ? Math.abs(CC.x) > Math.abs(CC.z) ? ZC.set(-CC.y, CC.x, 0, 0) : ZC.set(0, -CC.z, CC.y, 0) : (NC.CrossToRef(CC, zC, PC.Eg[0]), ZC.set(PC.Eg[0].x, PC.Eg[0].y, PC.Eg[0].z, bC)), ZC.normalize()
      }
      static RotationYawPitchRoll(CC, zC, ZC) {
        const QC = new gC;
        return gC.RotationYawPitchRollToRef(CC, zC, ZC, QC), QC
      }
      static RotationYawPitchRollToRef(CC, zC, ZC, QC) {
        const wC = .5 * ZC,
          bC = .5 * zC,
          nC = .5 * CC,
          fC = Math.sin(wC),
          oC = Math.cos(wC),
          qC = Math.sin(bC),
          FC = Math.cos(bC),
          WC = Math.sin(nC),
          NC = Math.cos(nC);
        return QC._x = NC * qC * oC + WC * FC * fC, QC._y = WC * FC * oC - NC * qC * fC, QC._z = NC * FC * fC - WC * qC * oC, QC._w = NC * FC * oC + WC * qC * fC, QC._isDirty = !0, QC
      }
      static RotationAlphaBetaGamma(CC, zC, ZC) {
        const QC = new gC;
        return gC.RotationAlphaBetaGammaToRef(CC, zC, ZC, QC), QC
      }
      static RotationAlphaBetaGammaToRef(CC, zC, ZC, QC) {
        const wC = .5 * (ZC + CC),
          bC = .5 * (ZC - CC),
          nC = .5 * zC;
        return QC._x = Math.cos(bC) * Math.sin(nC), QC._y = Math.sin(bC) * Math.sin(nC), QC._z = Math.sin(wC) * Math.cos(nC), QC._w = Math.cos(wC) * Math.cos(nC), QC._isDirty = !0, QC
      }
      static RotationQuaternionFromAxis(CC, zC, ZC) {
        const QC = new gC(0, 0, 0, 0);
        return gC.RotationQuaternionFromAxisToRef(CC, zC, ZC, QC), QC
      }
      static RotationQuaternionFromAxisToRef(CC, zC, ZC, QC) {
        const wC = pC.Matrix[0];
        return CC = CC.normalizeToRef(pC.Eg[0]), zC = zC.normalizeToRef(pC.Eg[1]), ZC = ZC.normalizeToRef(pC.Eg[2]), SC.FromXYZAxesToRef(CC, zC, ZC, wC), gC.FromRotationMatrixToRef(wC, QC), QC
      }
      static FromLookDirectionLH(CC, zC) {
        const ZC = new gC;
        return gC.FromLookDirectionLHToRef(CC, zC, ZC), ZC
      }
      static FromLookDirectionLHToRef(CC, zC, ZC) {
        const QC = pC.Matrix[0];
        return SC.LookDirectionLHToRef(CC, zC, QC), gC.FromRotationMatrixToRef(QC, ZC), ZC
      }
      static FromLookDirectionRH(CC, zC) {
        const ZC = new gC;
        return gC.FromLookDirectionRHToRef(CC, zC, ZC), ZC
      }
      static FromLookDirectionRHToRef(CC, zC, ZC) {
        const QC = pC.Matrix[0];
        return SC.LookDirectionRHToRef(CC, zC, QC), gC.FromRotationMatrixToRef(QC, ZC)
      }
      static Slerp(CC, zC, ZC) {
        const QC = gC.Identity();
        return gC.SlerpToRef(CC, zC, ZC, QC), QC
      }
      static SlerpToRef(CC, zC, ZC, QC) {
        let wC, bC, nC = CC._x * zC._x + CC._y * zC._y + CC._z * zC._z + CC._w * zC._w,
          fC = !1;
        if (nC < 0 && (fC = !0, nC = -nC), nC > .999999) bC = 1 - ZC, wC = fC ? -ZC : ZC;
        else {
          const CC = Math.acos(nC),
            zC = 1 / Math.sin(CC);
          bC = Math.sin((1 - ZC) * CC) * zC, wC = fC ? -Math.sin(ZC * CC) * zC : Math.sin(ZC * CC) * zC
        }
        return QC._x = bC * CC._x + wC * zC._x, QC._y = bC * CC._y + wC * zC._y, QC._z = bC * CC._z + wC * zC._z, QC._w = bC * CC._w + wC * zC._w, QC._isDirty = !0, QC
      }
      static Hermite(CC, zC, ZC, QC, wC) {
        const bC = wC * wC,
          nC = wC * bC,
          fC = 2 * nC - 3 * bC + 1,
          oC = -2 * nC + 3 * bC,
          qC = nC - 2 * bC + wC,
          FC = nC - bC,
          WC = CC._x * fC + ZC._x * oC + zC._x * qC + QC._x * FC,
          NC = CC._y * fC + ZC._y * oC + zC._y * qC + QC._y * FC,
          MC = CC._z * fC + ZC._z * oC + zC._z * qC + QC._z * FC,
          SC = CC._w * fC + ZC._w * oC + zC._w * qC + QC._w * FC;
        return new gC(WC, NC, MC, SC)
      }
      static Hermite1stDerivative(CC, zC, ZC, QC, wC) {
        const bC = new gC;
        return this.Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC), bC
      }
      static Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC) {
        const nC = wC * wC;
        return bC._x = 6 * (nC - wC) * CC._x + (3 * nC - 4 * wC + 1) * zC._x + 6 * (-nC + wC) * ZC._x + (3 * nC - 2 * wC) * QC._x, bC._y = 6 * (nC - wC) * CC._y + (3 * nC - 4 * wC + 1) * zC._y + 6 * (-nC + wC) * ZC._y + (3 * nC - 2 * wC) * QC._y, bC._z = 6 * (nC - wC) * CC._z + (3 * nC - 4 * wC + 1) * zC._z + 6 * (-nC + wC) * ZC._z + (3 * nC - 2 * wC) * QC._z, bC._w = 6 * (nC - wC) * CC._w + (3 * nC - 4 * wC + 1) * zC._w + 6 * (-nC + wC) * ZC._w + (3 * nC - 2 * wC) * QC._w, bC._isDirty = !0, bC
      }
      static Normalize(CC) {
        const zC = gC.Zero();
        return gC.NormalizeToRef(CC, zC), zC
      }
      static NormalizeToRef(CC, zC) {
        return CC.normalizeToRef(zC), zC
      }
      static Clamp(CC, zC, ZC) {
        const QC = new gC;
        return gC.ClampToRef(CC, zC, ZC, QC), QC
      }
      static ClampToRef(CC, zC, ZC, QC) {
        return QC.L_((0, fC.Clamp)(CC.x, zC.x, ZC.x), (0, fC.Clamp)(CC.y, zC.y, ZC.y), (0, fC.Clamp)(CC.z, zC.z, ZC.z), (0, fC.Clamp)(CC.w, zC.w, ZC.w))
      }
      static Random() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new gC((0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC))
      }
      static RandomToRef() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).L_((0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC), (0, fC.RandomRange)(CC, zC))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(CC, zC) {
        return Math.sqrt(gC.DistanceSquared(CC, zC))
      }
      static DistanceSquared(CC, zC) {
        const ZC = CC.x - zC.x,
          QC = CC.y - zC.y,
          wC = CC.z - zC.z,
          bC = CC.w - zC.w;
        return ZC * ZC + QC * QC + wC * wC + bC * bC
      }
      static Center(CC, zC) {
        return gC.CenterToRef(CC, zC, gC.Zero())
      }
      static CenterToRef(CC, zC, ZC) {
        return ZC.L_((CC.x + zC.x) / 2, (CC.y + zC.y) / 2, (CC.z + zC.z) / 2, (CC.w + zC.w) / 2)
      }
    }
    gC._V8PerformanceHack = new gC(.5, .5, .5, .5);
    class SC {
      static get Use64Bits() {
        return bC.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = oC.m._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          QC = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = CC, this._isIdentity3x2 = CC || ZC, this._isIdentityDirty = !this._isIdentity && zC, this._isIdentity3x2Dirty = !this._isIdentity3x2 && QC
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, bC.c.MatrixTrackPrecisionChange && bC.c.MatrixTrackedMatrices.push(this), this._m = new bC.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const CC = this._m;
          this._isIdentity = 1 === CC[0] && 0 === CC[1] && 0 === CC[2] && 0 === CC[3] && 0 === CC[4] && 1 === CC[5] && 0 === CC[6] && 0 === CC[7] && 0 === CC[8] && 0 === CC[9] && 1 === CC[10] && 0 === CC[11] && 0 === CC[12] && 0 === CC[13] && 0 === CC[14] && 1 === CC[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const CC = this._m,
          zC = CC[0],
          ZC = CC[1],
          QC = CC[2],
          wC = CC[3],
          bC = CC[4],
          nC = CC[5],
          fC = CC[6],
          oC = CC[7],
          qC = CC[8],
          FC = CC[9],
          WC = CC[10],
          NC = CC[11],
          MC = CC[12],
          gC = CC[13],
          SC = CC[14],
          pC = CC[15],
          PC = WC * pC - SC * NC,
          GC = FC * pC - gC * NC,
          RC = FC * SC - gC * WC,
          AC = qC * pC - MC * NC,
          xC = qC * SC - WC * MC,
          JC = qC * gC - MC * FC;
        return zC * +(nC * PC - fC * GC + oC * RC) + ZC * -(bC * PC - fC * AC + oC * xC) + QC * +(bC * GC - nC * AC + oC * JC) + wC * -(bC * RC - nC * xC + fC * JC)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!CC) return this._m;
        const ZC = this._m;
        for (let QC = 0; QC < 16; QC++) CC[zC + QC] = ZC[QC];
        return this
      }
      VZC() {
        return this._m
      }
      azC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return SC.FromArrayToRef(CC, zC, this)
      }
      L_() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        return SC.FromArrayToRef(zC, 0, this)
      }
      set() {
        const CC = this._m;
        for (let zC = 0; zC < 16; zC++) CC[zC] = zC < 0 || arguments.length <= zC ? void 0 : arguments[zC];
        return this.markAsUpdated(), this
      }
      Q_(CC) {
        const zC = this._m;
        for (let ZC = 0; ZC < 16; ZC++) zC[ZC] = CC;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return SC.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(CC) {
        const zC = new SC;
        return this.addToRef(CC, zC), zC
      }
      addToRef(CC, zC) {
        const ZC = this._m,
          QC = zC._m,
          wC = CC.m;
        for (let bC = 0; bC < 16; bC++) QC[bC] = ZC[bC] + wC[bC];
        return zC.markAsUpdated(), zC
      }
      addToSelf(CC) {
        const zC = this._m,
          ZC = CC.m;
        return zC[0] += ZC[0], zC[1] += ZC[1], zC[2] += ZC[2], zC[3] += ZC[3], zC[4] += ZC[4], zC[5] += ZC[5], zC[6] += ZC[6], zC[7] += ZC[7], zC[8] += ZC[8], zC[9] += ZC[9], zC[10] += ZC[10], zC[11] += ZC[11], zC[12] += ZC[12], zC[13] += ZC[13], zC[14] += ZC[14], zC[15] += ZC[15], this.markAsUpdated(), this
      }
      addInPlace(CC) {
        const zC = this._m,
          ZC = CC.m;
        for (let QC = 0; QC < 16; QC++) zC[QC] += ZC[QC];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const CC = this._m;
        for (let zC = 0; zC < 16; zC++) CC[zC] += zC < 0 || arguments.length <= zC ? void 0 : arguments[zC];
        return this.markAsUpdated(), this
      }
      subtract(CC) {
        const zC = this._m,
          ZC = CC.m;
        for (let QC = 0; QC < 16; QC++) zC[QC] -= ZC[QC];
        return this.markAsUpdated(), this
      }
      subtractToRef(CC, zC) {
        const ZC = this._m,
          QC = CC.m,
          wC = zC._m;
        for (let bC = 0; bC < 16; bC++) wC[bC] = ZC[bC] - QC[bC];
        return zC.markAsUpdated(), zC
      }
      RQC(CC) {
        const zC = this._m,
          ZC = CC.m;
        for (let QC = 0; QC < 16; QC++) zC[QC] -= ZC[QC];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        return this.subtractFromFloatsToRef(...zC, new SC)
      }
      subtractFromFloatsToRef() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        const QC = zC.pop(),
          wC = this._m,
          bC = QC._m,
          nC = zC;
        for (let fC = 0; fC < 16; fC++) bC[fC] = wC[fC] - nC[fC];
        return QC.markAsUpdated(), QC
      }
      invertToRef(CC) {
        return !0 === this._isIdentity ? (SC.IdentityToRef(CC), CC) : ((0, oC.h)(this, CC.VZC()) ? CC.markAsUpdated() : CC.Av(this), CC)
      }
      addAtIndex(CC, zC) {
        return this._m[CC] += zC, this.markAsUpdated(), this
      }
      multiplyAtIndex(CC, zC) {
        return this._m[CC] *= zC, this.markAsUpdated(), this
      }
      setTranslationFromFloats(CC, zC, ZC) {
        return this._m[12] = CC, this._m[13] = zC, this._m[14] = ZC, this.markAsUpdated(), this
      }
      addTranslationFromFloats(CC, zC, ZC) {
        return this._m[12] += CC, this._m[13] += zC, this._m[14] += ZC, this.markAsUpdated(), this
      }
      setTranslation(CC) {
        return this.setTranslationFromFloats(CC._x, CC._y, CC._z)
      }
      getTranslation() {
        return new NC(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(CC) {
        return CC.x = this._m[12], CC.y = this._m[13], CC.z = this._m[14], CC
      }
      removeRotationAndScaling() {
        const CC = this.m;
        return SC.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, CC[12], CC[13], CC[14], CC[15], this), this._updateIdentityStatus(0 === CC[12] && 0 === CC[13] && 0 === CC[14] && 1 === CC[15]), this
      }
      Av(CC) {
        CC.copyToArray(this._m);
        const zC = CC;
        return this.updateFlag = zC.updateFlag, this._updateIdentityStatus(zC._isIdentity, zC._isIdentityDirty, zC._isIdentity3x2, zC._isIdentity3x2Dirty), this
      }
      copyToArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, oC.d)(this, CC, zC), this
      }
      multiply(CC) {
        const zC = new SC;
        return this.multiplyToRef(CC, zC), zC
      }
      multiplyInPlace(CC) {
        const zC = this._m,
          ZC = CC.m;
        for (let QC = 0; QC < 16; QC++) zC[QC] *= ZC[QC];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const CC = this._m;
        for (let zC = 0; zC < 16; zC++) CC[zC] *= zC < 0 || arguments.length <= zC ? void 0 : arguments[zC];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        const QC = zC.pop(),
          wC = this._m,
          bC = QC._m,
          nC = zC;
        for (let fC = 0; fC < 16; fC++) bC[fC] = wC[fC] * nC[fC];
        return QC.markAsUpdated(), QC
      }
      multiplyToRef(CC, zC) {
        return this._isIdentity ? (zC.Av(CC), zC) : CC._isIdentity ? (zC.Av(this), zC) : (this.multiplyToArray(CC, zC._m, 0), zC.markAsUpdated(), zC)
      }
      multiplyToArray(CC, zC, ZC) {
        return (0, oC.o)(this, CC, zC, ZC), this
      }
      divide(CC) {
        return this.divideToRef(CC, new SC)
      }
      divideToRef(CC, zC) {
        const ZC = this._m,
          QC = CC.m,
          wC = zC._m;
        for (let bC = 0; bC < 16; bC++) wC[bC] = ZC[bC] / QC[bC];
        return zC.markAsUpdated(), zC
      }
      divideInPlace(CC) {
        const zC = this._m,
          ZC = CC.m;
        for (let QC = 0; QC < 16; QC++) zC[QC] /= ZC[QC];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(CC) {
        const zC = this._m,
          ZC = CC.m;
        for (let QC = 0; QC < 16; QC++) zC[QC] = Math.min(zC[QC], ZC[QC]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const CC = this._m;
        for (let zC = 0; zC < 16; zC++) CC[zC] = Math.min(CC[zC], zC < 0 || arguments.length <= zC ? void 0 : arguments[zC]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(CC) {
        const zC = this._m,
          ZC = CC.m;
        for (let QC = 0; QC < 16; QC++) zC[QC] = Math.max(zC[QC], ZC[QC]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const CC = this._m;
        for (let zC = 0; zC < 16; zC++) CC[zC] = Math.max(CC[zC], zC < 0 || arguments.length <= zC ? void 0 : arguments[zC]);
        return this.markAsUpdated(), this
      }
      Of() {
        return this.negateToRef(new SC)
      }
      negateInPlace() {
        const CC = this._m;
        for (let zC = 0; zC < 16; zC++) CC[zC] = -CC[zC];
        return this.markAsUpdated(), this
      }
      negateToRef(CC) {
        const zC = this._m,
          ZC = CC._m;
        for (let QC = 0; QC < 16; QC++) ZC[QC] = -zC[QC];
        return CC.markAsUpdated(), CC
      }
      equals(CC) {
        const zC = CC;
        if (!zC) return !1;
        if ((this._isIdentity || zC._isIdentity) && !this._isIdentityDirty && !zC._isIdentityDirty) return this._isIdentity && zC._isIdentity;
        const ZC = this.m,
          QC = zC.m;
        return ZC[0] === QC[0] && ZC[1] === QC[1] && ZC[2] === QC[2] && ZC[3] === QC[3] && ZC[4] === QC[4] && ZC[5] === QC[5] && ZC[6] === QC[6] && ZC[7] === QC[7] && ZC[8] === QC[8] && ZC[9] === QC[9] && ZC[10] === QC[10] && ZC[11] === QC[11] && ZC[12] === QC[12] && ZC[13] === QC[13] && ZC[14] === QC[14] && ZC[15] === QC[15]
      }
      equalsWithEpsilon(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = this._m,
          QC = CC.m;
        for (let wC = 0; wC < 16; wC++)
          if (!(0, fC.WithinEpsilon)(ZC[wC], QC[wC], zC)) return !1;
        return !0
      }
      dnC() {
        const CC = this._m;
        for (let zC = 0; zC < 16; zC++)
          if (CC[zC] != (zC < 0 || arguments.length <= zC ? void 0 : arguments[zC])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new SC)
      }
      floorToRef(CC) {
        const zC = this._m,
          ZC = CC._m;
        for (let QC = 0; QC < 16; QC++) ZC[QC] = Math.floor(zC[QC]);
        return CC.markAsUpdated(), CC
      }
      fract() {
        return this.fractToRef(new SC)
      }
      fractToRef(CC) {
        const zC = this._m,
          ZC = CC._m;
        for (let QC = 0; QC < 16; QC++) ZC[QC] = zC[QC] - Math.floor(zC[QC]);
        return CC.markAsUpdated(), CC
      }
      clone() {
        const CC = new SC;
        return CC.Av(this), CC
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let CC = FC(this._m[0]);
        for (let zC = 1; zC < 16; zC++) CC = 397 * CC ^ FC(this._m[zC]);
        return CC
      }
      decomposeToTransformNode(CC) {
        return CC.rotationQuaternion = CC.rotationQuaternion || new gC, this.decompose(CC.sq, CC.rotationQuaternion, CC.position)
      }
      decompose(CC, zC, ZC, QC) {
        let wC = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return ZC && ZC.Q_(0), CC && CC.Q_(1), zC && zC.L_(0, 0, 0, 1), !0;
        const bC = this._m;
        if (ZC && ZC.L_(bC[12], bC[13], bC[14]), (CC = CC || pC.Eg[0]).x = Math.sqrt(bC[0] * bC[0] + bC[1] * bC[1] + bC[2] * bC[2]), CC.y = Math.sqrt(bC[4] * bC[4] + bC[5] * bC[5] + bC[6] * bC[6]), CC.z = Math.sqrt(bC[8] * bC[8] + bC[9] * bC[9] + bC[10] * bC[10]), QC) {
          const zC = (wC ? QC.absoluteScaling.x : QC.sq.x) < 0 ? -1 : 1,
            ZC = (wC ? QC.absoluteScaling.y : QC.sq.y) < 0 ? -1 : 1,
            bC = (wC ? QC.absoluteScaling.z : QC.sq.z) < 0 ? -1 : 1;
          CC.x *= zC, CC.y *= ZC, CC.z *= bC
        } else this.determinant() <= 0 && (CC.y *= -1);
        if (0 === CC._x || 0 === CC._y || 0 === CC._z) return zC && zC.L_(0, 0, 0, 1), !1;
        if (zC) {
          const ZC = 1 / CC._x,
            QC = 1 / CC._y,
            wC = 1 / CC._z;
          SC.FromValuesToRef(bC[0] * ZC, bC[1] * ZC, bC[2] * ZC, 0, bC[4] * QC, bC[5] * QC, bC[6] * QC, 0, bC[8] * wC, bC[9] * wC, bC[10] * wC, 0, 0, 0, 0, 1, pC.Matrix[0]), gC.FromRotationMatrixToRef(pC.Matrix[0], zC)
        }
        return !0
      }
      getRow(CC) {
        if (CC < 0 || CC > 3) return null;
        const zC = 4 * CC;
        return new MC(this._m[zC + 0], this._m[zC + 1], this._m[zC + 2], this._m[zC + 3])
      }
      getRowToRef(CC, zC) {
        if (CC >= 0 && CC <= 3) {
          const ZC = 4 * CC;
          zC.x = this._m[ZC + 0], zC.y = this._m[ZC + 1], zC.z = this._m[ZC + 2], zC.w = this._m[ZC + 3]
        }
        return zC
      }
      setRow(CC, zC) {
        return this.setRowFromFloats(CC, zC.x, zC.y, zC.z, zC.w)
      }
      transpose() {
        const CC = new SC;
        return SC.TransposeToRef(this, CC), CC
      }
      transposeToRef(CC) {
        return SC.TransposeToRef(this, CC), CC
      }
      setRowFromFloats(CC, zC, ZC, QC, wC) {
        if (CC < 0 || CC > 3) return this;
        const bC = 4 * CC;
        return this._m[bC + 0] = zC, this._m[bC + 1] = ZC, this._m[bC + 2] = QC, this._m[bC + 3] = wC, this.markAsUpdated(), this
      }
      scale(CC) {
        const zC = new SC;
        return this.scaleToRef(CC, zC), zC
      }
      scaleToRef(CC, zC) {
        for (let ZC = 0; ZC < 16; ZC++) zC._m[ZC] = this._m[ZC] * CC;
        return zC.markAsUpdated(), zC
      }
      scaleAndAddToRef(CC, zC) {
        for (let ZC = 0; ZC < 16; ZC++) zC._m[ZC] += this._m[ZC] * CC;
        return zC.markAsUpdated(), zC
      }
      scaleInPlace(CC) {
        const zC = this._m;
        for (let ZC = 0; ZC < 16; ZC++) zC[ZC] *= CC;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(CC) {
        const zC = pC.Matrix[0];
        this.invertToRef(zC), zC.transposeToRef(CC);
        const ZC = CC._m;
        return SC.FromValuesToRef(ZC[0], ZC[1], ZC[2], 0, ZC[4], ZC[5], ZC[6], 0, ZC[8], ZC[9], ZC[10], 0, 0, 0, 0, 1, CC), CC
      }
      getRotationMatrix() {
        const CC = new SC;
        return this.getRotationMatrixToRef(CC), CC
      }
      getRotationMatrixToRef(CC) {
        const zC = pC.Eg[0];
        if (!this.decompose(zC)) return SC.IdentityToRef(CC), CC;
        const ZC = this._m,
          QC = 1 / zC._x,
          wC = 1 / zC._y,
          bC = 1 / zC._z;
        return SC.FromValuesToRef(ZC[0] * QC, ZC[1] * QC, ZC[2] * QC, 0, ZC[4] * wC, ZC[5] * wC, ZC[6] * wC, 0, ZC[8] * bC, ZC[9] * bC, ZC[10] * bC, 0, 0, 0, 0, 1, CC), CC
      }
      toggleModelMatrixHandInPlace() {
        const CC = this._m;
        return CC[2] *= -1, CC[6] *= -1, CC[8] *= -1, CC[9] *= -1, CC[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const CC = this._m;
        return CC[8] *= -1, CC[9] *= -1, CC[10] *= -1, CC[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(GC, this), this
      }
      static FromArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZC = new SC;
        return SC.FromArrayToRef(CC, zC, ZC), ZC
      }
      static FromArrayToRef(CC, zC, ZC) {
        for (let QC = 0; QC < 16; QC++) ZC._m[QC] = CC[QC + zC];
        return ZC.markAsUpdated(), ZC
      }
      static FromFloat32ArrayToRefScaled(CC, zC, ZC, QC) {
        return QC._m[0] = CC[0 + zC] * ZC, QC._m[1] = CC[1 + zC] * ZC, QC._m[2] = CC[2 + zC] * ZC, QC._m[3] = CC[3 + zC] * ZC, QC._m[4] = CC[4 + zC] * ZC, QC._m[5] = CC[5 + zC] * ZC, QC._m[6] = CC[6 + zC] * ZC, QC._m[7] = CC[7 + zC] * ZC, QC._m[8] = CC[8 + zC] * ZC, QC._m[9] = CC[9 + zC] * ZC, QC._m[10] = CC[10 + zC] * ZC, QC._m[11] = CC[11 + zC] * ZC, QC._m[12] = CC[12 + zC] * ZC, QC._m[13] = CC[13 + zC] * ZC, QC._m[14] = CC[14 + zC] * ZC, QC._m[15] = CC[15 + zC] * ZC, QC.markAsUpdated(), QC
      }
      static get IdentityReadOnly() {
        return SC._IdentityReadOnly
      }
      static FromValuesToRef(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, SC, pC) {
        const PC = pC._m;
        PC[0] = CC, PC[1] = zC, PC[2] = ZC, PC[3] = QC, PC[4] = wC, PC[5] = bC, PC[6] = nC, PC[7] = fC, PC[8] = oC, PC[9] = qC, PC[10] = FC, PC[11] = WC, PC[12] = NC, PC[13] = MC, PC[14] = gC, PC[15] = SC, pC.markAsUpdated()
      }
      static FromValues(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC, MC, gC, pC) {
        const PC = new SC,
          GC = PC._m;
        return GC[0] = CC, GC[1] = zC, GC[2] = ZC, GC[3] = QC, GC[4] = wC, GC[5] = bC, GC[6] = nC, GC[7] = fC, GC[8] = oC, GC[9] = qC, GC[10] = FC, GC[11] = WC, GC[12] = NC, GC[13] = MC, GC[14] = gC, GC[15] = pC, PC.markAsUpdated(), PC
      }
      static Compose(CC, zC, ZC) {
        const QC = new SC;
        return SC.ComposeToRef(CC, zC, ZC, QC), QC
      }
      static ComposeToRef(CC, zC, ZC, QC) {
        const wC = QC._m,
          bC = zC._x,
          nC = zC._y,
          fC = zC._z,
          oC = zC._w,
          qC = bC + bC,
          FC = nC + nC,
          WC = fC + fC,
          NC = bC * qC,
          MC = bC * FC,
          gC = bC * WC,
          SC = nC * FC,
          pC = nC * WC,
          PC = fC * WC,
          GC = oC * qC,
          RC = oC * FC,
          AC = oC * WC,
          xC = CC._x,
          JC = CC._y,
          IC = CC._z;
        return wC[0] = (1 - (SC + PC)) * xC, wC[1] = (MC + AC) * xC, wC[2] = (gC - RC) * xC, wC[3] = 0, wC[4] = (MC - AC) * JC, wC[5] = (1 - (NC + PC)) * JC, wC[6] = (pC + GC) * JC, wC[7] = 0, wC[8] = (gC + RC) * IC, wC[9] = (pC - GC) * IC, wC[10] = (1 - (NC + SC)) * IC, wC[11] = 0, wC[12] = ZC._x, wC[13] = ZC._y, wC[14] = ZC._z, wC[15] = 1, QC.markAsUpdated(), QC
      }
      static Identity() {
        const CC = SC.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return CC._updateIdentityStatus(!0), CC
      }
      static IdentityToRef(CC) {
        return SC.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, CC), CC._updateIdentityStatus(!0), CC
      }
      static Zero() {
        const CC = SC.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return CC._updateIdentityStatus(!1), CC
      }
      static RotationX(CC) {
        const zC = new SC;
        return SC.RotationXToRef(CC, zC), zC
      }
      static Invert(CC) {
        const zC = new SC;
        return CC.invertToRef(zC), zC
      }
      static RotationXToRef(CC, zC) {
        const ZC = Math.sin(CC),
          QC = Math.cos(CC);
        return SC.FromValuesToRef(1, 0, 0, 0, 0, QC, ZC, 0, 0, -ZC, QC, 0, 0, 0, 0, 1, zC), zC._updateIdentityStatus(1 === QC && 0 === ZC), zC
      }
      static RotationY(CC) {
        const zC = new SC;
        return SC.RotationYToRef(CC, zC), zC
      }
      static RotationYToRef(CC, zC) {
        const ZC = Math.sin(CC),
          QC = Math.cos(CC);
        return SC.FromValuesToRef(QC, 0, -ZC, 0, 0, 1, 0, 0, ZC, 0, QC, 0, 0, 0, 0, 1, zC), zC._updateIdentityStatus(1 === QC && 0 === ZC), zC
      }
      static RotationZ(CC) {
        const zC = new SC;
        return SC.RotationZToRef(CC, zC), zC
      }
      static RotationZToRef(CC, zC) {
        const ZC = Math.sin(CC),
          QC = Math.cos(CC);
        return SC.FromValuesToRef(QC, ZC, 0, 0, -ZC, QC, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, zC), zC._updateIdentityStatus(1 === QC && 0 === ZC), zC
      }
      static RotationAxis(CC, zC) {
        const ZC = new SC;
        return SC.RotationAxisToRef(CC, zC, ZC), ZC
      }
      static RotationAxisToRef(CC, zC, ZC) {
        const QC = Math.sin(-zC),
          wC = Math.cos(-zC),
          bC = 1 - wC;
        CC = CC.normalizeToRef(pC.Eg[0]);
        const nC = ZC._m;
        return nC[0] = CC._x * CC._x * bC + wC, nC[1] = CC._x * CC._y * bC - CC._z * QC, nC[2] = CC._x * CC._z * bC + CC._y * QC, nC[3] = 0, nC[4] = CC._y * CC._x * bC + CC._z * QC, nC[5] = CC._y * CC._y * bC + wC, nC[6] = CC._y * CC._z * bC - CC._x * QC, nC[7] = 0, nC[8] = CC._z * CC._x * bC - CC._y * QC, nC[9] = CC._z * CC._y * bC + CC._x * QC, nC[10] = CC._z * CC._z * bC + wC, nC[11] = 0, nC[12] = 0, nC[13] = 0, nC[14] = 0, nC[15] = 1, ZC.markAsUpdated(), ZC
      }
      static RotationAlignToRef(CC, zC, ZC) {
        let wC = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const bC = NC.Dot(zC, CC),
          nC = ZC._m;
        if (bC < -1 + QC.e) nC[0] = -1, nC[1] = 0, nC[2] = 0, nC[3] = 0, nC[4] = 0, nC[5] = wC ? 1 : -1, nC[6] = 0, nC[7] = 0, nC[8] = 0, nC[9] = 0, nC[10] = wC ? -1 : 1, nC[11] = 0;
        else {
          const ZC = NC.Cross(zC, CC),
            QC = 1 / (1 + bC);
          nC[0] = ZC._x * ZC._x * QC + bC, nC[1] = ZC._y * ZC._x * QC - ZC._z, nC[2] = ZC._z * ZC._x * QC + ZC._y, nC[3] = 0, nC[4] = ZC._x * ZC._y * QC + ZC._z, nC[5] = ZC._y * ZC._y * QC + bC, nC[6] = ZC._z * ZC._y * QC - ZC._x, nC[7] = 0, nC[8] = ZC._x * ZC._z * QC - ZC._y, nC[9] = ZC._y * ZC._z * QC + ZC._x, nC[10] = ZC._z * ZC._z * QC + bC, nC[11] = 0
        }
        return nC[12] = 0, nC[13] = 0, nC[14] = 0, nC[15] = 1, ZC.markAsUpdated(), ZC
      }
      static RotationYawPitchRoll(CC, zC, ZC) {
        const QC = new SC;
        return SC.RotationYawPitchRollToRef(CC, zC, ZC, QC), QC
      }
      static RotationYawPitchRollToRef(CC, zC, ZC, QC) {
        return gC.RotationYawPitchRollToRef(CC, zC, ZC, pC.Quaternion[0]), pC.Quaternion[0].toRotationMatrix(QC), QC
      }
      static Scaling(CC, zC, ZC) {
        const QC = new SC;
        return SC.ScalingToRef(CC, zC, ZC, QC), QC
      }
      static ScalingToRef(CC, zC, ZC, QC) {
        return SC.FromValuesToRef(CC, 0, 0, 0, 0, zC, 0, 0, 0, 0, ZC, 0, 0, 0, 0, 1, QC), QC._updateIdentityStatus(1 === CC && 1 === zC && 1 === ZC), QC
      }
      static Translation(CC, zC, ZC) {
        const QC = new SC;
        return SC.TranslationToRef(CC, zC, ZC, QC), QC
      }
      static TranslationToRef(CC, zC, ZC, QC) {
        return SC.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, CC, zC, ZC, 1, QC), QC._updateIdentityStatus(0 === CC && 0 === zC && 0 === ZC), QC
      }
      static Lerp(CC, zC, ZC) {
        const QC = new SC;
        return SC.LerpToRef(CC, zC, ZC, QC), QC
      }
      static LerpToRef(CC, zC, ZC, QC) {
        const wC = QC._m,
          bC = CC.m,
          nC = zC.m;
        for (let fC = 0; fC < 16; fC++) wC[fC] = bC[fC] * (1 - ZC) + nC[fC] * ZC;
        return QC.markAsUpdated(), QC
      }
      static DecomposeLerp(CC, zC, ZC) {
        const QC = new SC;
        return SC.DecomposeLerpToRef(CC, zC, ZC, QC), QC
      }
      static DecomposeLerpToRef(CC, zC, ZC, QC) {
        const wC = pC.Eg[0],
          bC = pC.Quaternion[0],
          nC = pC.Eg[1];
        CC.decompose(wC, bC, nC);
        const fC = pC.Eg[2],
          oC = pC.Quaternion[1],
          qC = pC.Eg[3];
        zC.decompose(fC, oC, qC);
        const FC = pC.Eg[4];
        NC.LerpToRef(wC, fC, ZC, FC);
        const WC = pC.Quaternion[2];
        gC.SlerpToRef(bC, oC, ZC, WC);
        const MC = pC.Eg[5];
        return NC.LerpToRef(nC, qC, ZC, MC), SC.ComposeToRef(FC, WC, MC, QC), QC
      }
      static LookAtLH(CC, zC, ZC) {
        const QC = new SC;
        return SC.LookAtLHToRef(CC, zC, ZC, QC), QC
      }
      static LookAtLHToRef(CC, zC, ZC, QC) {
        const wC = pC.Eg[0],
          bC = pC.Eg[1],
          nC = pC.Eg[2];
        zC.subtractToRef(CC, nC), nC.normalize(), NC.CrossToRef(ZC, nC, wC);
        const fC = wC.lengthSquared();
        0 === fC ? wC.x = 1 : wC.normalizeFromLength(Math.sqrt(fC)), NC.CrossToRef(nC, wC, bC), bC.normalize();
        const oC = -NC.Dot(wC, CC),
          qC = -NC.Dot(bC, CC),
          FC = -NC.Dot(nC, CC);
        return SC.FromValuesToRef(wC._x, bC._x, nC._x, 0, wC._y, bC._y, nC._y, 0, wC._z, bC._z, nC._z, 0, oC, qC, FC, 1, QC), QC
      }
      static LookAtRH(CC, zC, ZC) {
        const QC = new SC;
        return SC.LookAtRHToRef(CC, zC, ZC, QC), QC
      }
      static LookAtRHToRef(CC, zC, ZC, QC) {
        const wC = pC.Eg[0],
          bC = pC.Eg[1],
          nC = pC.Eg[2];
        CC.subtractToRef(zC, nC), nC.normalize(), NC.CrossToRef(ZC, nC, wC);
        const fC = wC.lengthSquared();
        0 === fC ? wC.x = 1 : wC.normalizeFromLength(Math.sqrt(fC)), NC.CrossToRef(nC, wC, bC), bC.normalize();
        const oC = -NC.Dot(wC, CC),
          qC = -NC.Dot(bC, CC),
          FC = -NC.Dot(nC, CC);
        return SC.FromValuesToRef(wC._x, bC._x, nC._x, 0, wC._y, bC._y, nC._y, 0, wC._z, bC._z, nC._z, 0, oC, qC, FC, 1, QC), QC
      }
      static LookDirectionLH(CC, zC) {
        const ZC = new SC;
        return SC.LookDirectionLHToRef(CC, zC, ZC), ZC
      }
      static LookDirectionLHToRef(CC, zC, ZC) {
        const QC = pC.Eg[0];
        QC.Av(CC), QC.scaleInPlace(-1);
        const wC = pC.Eg[1];
        return NC.CrossToRef(zC, QC, wC), SC.FromValuesToRef(wC._x, wC._y, wC._z, 0, zC._x, zC._y, zC._z, 0, QC._x, QC._y, QC._z, 0, 0, 0, 0, 1, ZC), ZC
      }
      static LookDirectionRH(CC, zC) {
        const ZC = new SC;
        return SC.LookDirectionRHToRef(CC, zC, ZC), ZC
      }
      static LookDirectionRHToRef(CC, zC, ZC) {
        const QC = pC.Eg[2];
        return NC.CrossToRef(zC, CC, QC), SC.FromValuesToRef(QC._x, QC._y, QC._z, 0, zC._x, zC._y, zC._z, 0, CC._x, CC._y, CC._z, 0, 0, 0, 0, 1, ZC), ZC
      }
      static OrthoLH(CC, zC, ZC, QC, wC) {
        const bC = new SC;
        return SC.OrthoLHToRef(CC, zC, ZC, QC, bC, wC), bC
      }
      static OrthoLHToRef(CC, zC, ZC, QC, wC, bC) {
        const nC = 2 / CC,
          fC = 2 / zC,
          oC = 2 / (QC - ZC),
          qC = -(QC + ZC) / (QC - ZC);
        return SC.FromValuesToRef(nC, 0, 0, 0, 0, fC, 0, 0, 0, 0, oC, 0, 0, 0, qC, 1, wC), bC && wC.multiplyToRef(GC, wC), wC._updateIdentityStatus(1 === nC && 1 === fC && 1 === oC && 0 === qC), wC
      }
      static OrthoOffCenterLH(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = new SC;
        return SC.OrthoOffCenterLHToRef(CC, zC, ZC, QC, wC, bC, fC, nC), fC
      }
      static OrthoOffCenterLHToRef(CC, zC, ZC, QC, wC, bC, nC, fC) {
        const oC = 2 / (zC - CC),
          qC = 2 / (QC - ZC),
          FC = 2 / (bC - wC),
          WC = -(bC + wC) / (bC - wC),
          NC = (CC + zC) / (CC - zC),
          MC = (QC + ZC) / (ZC - QC);
        return SC.FromValuesToRef(oC, 0, 0, 0, 0, qC, 0, 0, 0, 0, FC, 0, NC, MC, WC, 1, nC), fC && nC.multiplyToRef(GC, nC), nC.markAsUpdated(), nC
      }
      static ObliqueOffCenterLHToRef(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
        const WC = -nC * Math.cos(fC),
          NC = -nC * Math.sin(fC);
        return SC.TranslationToRef(0, 0, -oC, pC.Matrix[1]), SC.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, WC, NC, 1, 0, 0, 0, 0, 1, pC.Matrix[0]), pC.Matrix[1].multiplyToRef(pC.Matrix[0], pC.Matrix[0]), SC.TranslationToRef(0, 0, oC, pC.Matrix[1]), pC.Matrix[0].multiplyToRef(pC.Matrix[1], pC.Matrix[0]), SC.OrthoOffCenterLHToRef(CC, zC, ZC, QC, wC, bC, qC, FC), pC.Matrix[0].multiplyToRef(qC, qC), qC
      }
      static OrthoOffCenterRH(CC, zC, ZC, QC, wC, bC, nC) {
        const fC = new SC;
        return SC.OrthoOffCenterRHToRef(CC, zC, ZC, QC, wC, bC, fC, nC), fC
      }
      static OrthoOffCenterRHToRef(CC, zC, ZC, QC, wC, bC, nC, fC) {
        return SC.OrthoOffCenterLHToRef(CC, zC, ZC, QC, wC, bC, nC, fC), nC._m[10] *= -1, nC
      }
      static ObliqueOffCenterRHToRef(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
        const WC = nC * Math.cos(fC),
          NC = nC * Math.sin(fC);
        return SC.TranslationToRef(0, 0, oC, pC.Matrix[1]), SC.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, WC, NC, 1, 0, 0, 0, 0, 1, pC.Matrix[0]), pC.Matrix[1].multiplyToRef(pC.Matrix[0], pC.Matrix[0]), SC.TranslationToRef(0, 0, -oC, pC.Matrix[1]), pC.Matrix[0].multiplyToRef(pC.Matrix[1], pC.Matrix[0]), SC.OrthoOffCenterRHToRef(CC, zC, ZC, QC, wC, bC, qC, FC), pC.Matrix[0].multiplyToRef(qC, qC), qC
      }
      static PerspectiveLH(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const nC = new SC,
          fC = 2 * ZC / CC,
          oC = 2 * ZC / zC,
          qC = (QC + ZC) / (QC - ZC),
          FC = -2 * QC * ZC / (QC - ZC),
          WC = Math.tan(bC);
        return SC.FromValuesToRef(fC, 0, 0, 0, 0, oC, 0, WC, 0, 0, qC, 1, 0, 0, FC, 0, nC), wC && nC.multiplyToRef(GC, nC), nC._updateIdentityStatus(!1), nC
      }
      static PerspectiveFovLH(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const fC = new SC;
        return SC.PerspectiveFovLHToRef(CC, zC, ZC, QC, fC, !0, wC, bC, nC), fC
      }
      static PerspectiveFovLHToRef(CC, zC, ZC, QC, wC) {
        let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          nC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const qC = ZC,
          FC = QC,
          WC = 1 / Math.tan(.5 * CC),
          NC = bC ? WC / zC : WC,
          MC = bC ? WC : WC * zC,
          gC = oC && 0 === qC ? -1 : 0 !== FC ? (FC + qC) / (FC - qC) : 1,
          pC = oC && 0 === qC ? 2 * FC : 0 !== FC ? -2 * FC * qC / (FC - qC) : -2 * qC,
          PC = Math.tan(fC);
        return SC.FromValuesToRef(NC, 0, 0, 0, 0, MC, 0, PC, 0, 0, gC, 1, 0, 0, pC, 0, wC), nC && wC.multiplyToRef(GC, wC), wC._updateIdentityStatus(!1), wC
      }
      static PerspectiveFovReverseLHToRef(CC, zC, ZC, QC, wC) {
        let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          nC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const oC = 1 / Math.tan(.5 * CC),
          qC = bC ? oC / zC : oC,
          FC = bC ? oC : oC * zC,
          WC = Math.tan(fC);
        return SC.FromValuesToRef(qC, 0, 0, 0, 0, FC, 0, WC, 0, 0, -ZC, 1, 0, 0, 1, 0, wC), nC && wC.multiplyToRef(GC, wC), wC._updateIdentityStatus(!1), wC
      }
      static PerspectiveFovRH(CC, zC, ZC, QC, wC) {
        let bC = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          nC = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const fC = new SC;
        return SC.PerspectiveFovRHToRef(CC, zC, ZC, QC, fC, !0, wC, bC, nC), fC
      }
      static PerspectiveFovRHToRef(CC, zC, ZC, QC, wC) {
        let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          nC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          oC = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const qC = ZC,
          FC = QC,
          WC = 1 / Math.tan(.5 * CC),
          NC = bC ? WC / zC : WC,
          MC = bC ? WC : WC * zC,
          gC = oC && 0 === qC ? 1 : 0 !== FC ? -(FC + qC) / (FC - qC) : -1,
          pC = oC && 0 === qC ? 2 * FC : 0 !== FC ? -2 * FC * qC / (FC - qC) : -2 * qC,
          PC = Math.tan(fC);
        return SC.FromValuesToRef(NC, 0, 0, 0, 0, MC, 0, PC, 0, 0, gC, -1, 0, 0, pC, 0, wC), nC && wC.multiplyToRef(GC, wC), wC._updateIdentityStatus(!1), wC
      }
      static PerspectiveFovReverseRHToRef(CC, zC, ZC, QC, wC) {
        let bC = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          nC = arguments.length > 6 ? arguments[6] : void 0,
          fC = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const oC = 1 / Math.tan(.5 * CC),
          qC = bC ? oC / zC : oC,
          FC = bC ? oC : oC * zC,
          WC = Math.tan(fC);
        return SC.FromValuesToRef(qC, 0, 0, 0, 0, FC, 0, WC, 0, 0, -ZC, -1, 0, 0, -1, 0, wC), nC && wC.multiplyToRef(GC, wC), wC._updateIdentityStatus(!1), wC
      }
      static GetFinalMatrix(CC, zC, ZC, QC, wC, bC) {
        const nC = CC.width,
          fC = CC.height,
          oC = CC.x,
          qC = CC.y,
          FC = SC.FromValues(nC / 2, 0, 0, 0, 0, -fC / 2, 0, 0, 0, 0, bC - wC, 0, oC + nC / 2, fC / 2 + qC, wC, 1),
          WC = new SC;
        return zC.multiplyToRef(ZC, WC), WC.multiplyToRef(QC, WC), WC.multiplyToRef(FC, WC)
      }
      static GetAsMatrix2x2(CC) {
        const zC = CC.m,
          ZC = [zC[0], zC[1], zC[4], zC[5]];
        return bC.c.MatrixUse64Bits ? ZC : new Float32Array(ZC)
      }
      static GetAsMatrix3x3(CC) {
        const zC = CC.m,
          ZC = [zC[0], zC[1], zC[2], zC[4], zC[5], zC[6], zC[8], zC[9], zC[10]];
        return bC.c.MatrixUse64Bits ? ZC : new Float32Array(ZC)
      }
      static Transpose(CC) {
        const zC = new SC;
        return SC.TransposeToRef(CC, zC), zC
      }
      static TransposeToRef(CC, zC) {
        const ZC = CC.m,
          QC = ZC[0],
          wC = ZC[4],
          bC = ZC[8],
          nC = ZC[12],
          fC = ZC[1],
          oC = ZC[5],
          qC = ZC[9],
          FC = ZC[13],
          WC = ZC[2],
          NC = ZC[6],
          MC = ZC[10],
          gC = ZC[14],
          SC = ZC[3],
          pC = ZC[7],
          PC = ZC[11],
          GC = ZC[15],
          RC = zC._m;
        return RC[0] = QC, RC[1] = wC, RC[2] = bC, RC[3] = nC, RC[4] = fC, RC[5] = oC, RC[6] = qC, RC[7] = FC, RC[8] = WC, RC[9] = NC, RC[10] = MC, RC[11] = gC, RC[12] = SC, RC[13] = pC, RC[14] = PC, RC[15] = GC, zC.markAsUpdated(), zC._updateIdentityStatus(CC._isIdentity, CC._isIdentityDirty), zC
      }
      static Reflection(CC) {
        const zC = new SC;
        return SC.ReflectionToRef(CC, zC), zC
      }
      static ReflectionToRef(CC, zC) {
        CC.normalize();
        const ZC = CC.normal.x,
          QC = CC.normal.y,
          wC = CC.normal.z,
          bC = -2 * ZC,
          nC = -2 * QC,
          fC = -2 * wC;
        return SC.FromValuesToRef(bC * ZC + 1, nC * ZC, fC * ZC, 0, bC * QC, nC * QC + 1, fC * QC, 0, bC * wC, nC * wC, fC * wC + 1, 0, bC * CC.d, nC * CC.d, fC * CC.d, 1, zC), zC
      }
      static FromXYZAxesToRef(CC, zC, ZC, QC) {
        return SC.FromValuesToRef(CC._x, CC._y, CC._z, 0, zC._x, zC._y, zC._z, 0, ZC._x, ZC._y, ZC._z, 0, 0, 0, 0, 1, QC), QC
      }
      static FromQuaternionToRef(CC, zC) {
        const ZC = CC._x * CC._x,
          QC = CC._y * CC._y,
          wC = CC._z * CC._z,
          bC = CC._x * CC._y,
          nC = CC._z * CC._w,
          fC = CC._z * CC._x,
          oC = CC._y * CC._w,
          qC = CC._y * CC._z,
          FC = CC._x * CC._w;
        return zC._m[0] = 1 - 2 * (QC + wC), zC._m[1] = 2 * (bC + nC), zC._m[2] = 2 * (fC - oC), zC._m[3] = 0, zC._m[4] = 2 * (bC - nC), zC._m[5] = 1 - 2 * (wC + ZC), zC._m[6] = 2 * (qC + FC), zC._m[7] = 0, zC._m[8] = 2 * (fC + oC), zC._m[9] = 2 * (qC - FC), zC._m[10] = 1 - 2 * (QC + ZC), zC._m[11] = 0, zC._m[12] = 0, zC._m[13] = 0, zC._m[14] = 0, zC._m[15] = 1, zC.markAsUpdated(), zC
      }
    }
    SC._IdentityReadOnly = SC.Identity();
    class pC {}
    pC.Eg = (0, wC.g)(11, NC.Zero), pC.Matrix = (0, wC.g)(2, SC.Identity), pC.Quaternion = (0, wC.g)(3, gC.Zero);
    class PC {}
    PC.Vector2 = (0, wC.g)(3, WC.Zero), PC.Eg = (0, wC.g)(13, NC.Zero), PC.Vector4 = (0, wC.g)(3, MC.Zero), PC.Quaternion = (0, wC.g)(3, gC.Zero), PC.Matrix = (0, wC.g)(8, SC.Identity);
    const GC = SC.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let RC = !1;

    function AC() {
      RC || (RC = !0, Object.defineProperties(WC.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(NC.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(MC.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(gC.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(SC.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, qC.d)("BABYLON.Vector2", WC), (0, qC.d)("BABYLON.Vector3", NC), (0, qC.d)("BABYLON.Vector4", MC), (0, qC.d)("BABYLON.Matrix", SC))
    }
  },
  36987: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    const QC = "undefined" !== typeof WeakRef;
    class wC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(CC, zC, ZC, QC)
      }
      initialize(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = CC, this.skipNextObservers = zC, this.target = ZC, this.currentTarget = QC, this
      }
    }
    class bC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = CC, this.mask = zC, this.scope = ZC, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(CC)
      }
    }
    class nC {
      static FromPromise(CC, zC) {
        const ZC = new nC;
        return CC.then((CC => {
          ZC.notifyObservers(CC)
        })).catch((CC => {
          if (!zC) throw CC;
          zC.notifyObservers(CC)
        })), ZC
      }
      get observers() {
        return this._observers
      }
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = zC, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new wC(0), CC && (this._onObserverAdded = CC)
      }
      add(CC) {
        let zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ZC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!CC) return null;
        const wC = new bC(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        wC.unregisterOnNextCall = ZC, zC ? this._observers.unshift(wC) : this._observers.push(wC), this._onObserverAdded && this._onObserverAdded(wC), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(wC, this._lastNotifiedValue);
        const nC = QC ? new WeakRef(this) : {
          deref: () => this
        };
        return wC._remove = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const zC = nC.deref();
          zC && (CC ? zC.remove(wC) : zC._remove(wC))
        }, wC
      }
      addOnce(CC) {
        return this.add(CC, void 0, void 0, void 0, !0)
      }
      remove(CC) {
        if (!CC) return !1;
        CC._remove = null;
        return -1 !== this._observers.indexOf(CC) && (this._deferUnregister(CC), !0)
      }
      removeCallback(CC, zC) {
        for (let ZC = 0; ZC < this._observers.length; ZC++) {
          const QC = this._observers[ZC];
          if (!QC._willBeUnregistered && (QC.callback === CC && (!zC || zC === QC.scope))) return this._deferUnregister(QC), !0
        }
        return !1
      }
      _deferUnregister(CC) {
        CC._willBeUnregistered || (this._numObserversMarkedAsDeleted++, CC.unregisterOnNextCall = !1, CC._willBeUnregistered = !0, setTimeout((() => {
          this._remove(CC)
        }), 0))
      }
      _remove(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!CC) return !1;
        const ZC = this._observers.indexOf(CC);
        return -1 !== ZC && (zC && this._numObserversMarkedAsDeleted--, this._observers.splice(ZC, 1), !0)
      }
      makeObserverTopPriority(CC) {
        this._remove(CC, !1), this._observers.unshift(CC)
      }
      makeObserverBottomPriority(CC) {
        this._remove(CC, !1), this._observers.push(CC)
      }
      notifyObservers(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = CC), !this._observers.length) return !0;
        const bC = this._eventState;
        bC.mask = zC, bC.target = ZC, bC.currentTarget = QC, bC.skipNextObservers = !1, bC.lastReturnValue = CC, bC.userInfo = wC;
        for (const nC of this._observers)
          if (!nC._willBeUnregistered && (nC.mask & zC && (nC.unregisterOnNextCall && this._deferUnregister(nC), nC.scope ? bC.lastReturnValue = nC.callback.apply(nC.scope, [CC, bC]) : bC.lastReturnValue = nC.callback(CC, bC)), bC.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zC), CC._willBeUnregistered) return;
        const QC = this._eventState;
        QC.mask = ZC, QC.skipNextObservers = !1, CC.unregisterOnNextCall && this._deferUnregister(CC), CC.callback(zC, QC)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const CC = this._observers.pop();
          CC && (CC._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const CC = new nC;
        return CC._observers = this._observers.slice(0), CC
      }
      hasSpecificMask() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const zC of this._observers)
          if (zC.mask & CC || zC.mask === CC) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);