export const id = 236;
export const ids = [236];
export const modules = {
  37463: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(37465);
    class SG {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    SG.Instances = [], SG.OnEnginesDisposedObservable = new wG.c, SG._LastCreatedScene = null, SG.UseFallbackTexture = !0, SG.FallbackTexture = ""
  },
  37456: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      static SetMatrixPrecision(GG) {
        if (wG.MatrixTrackPrecisionChange = !1, GG && !wG.MatrixUse64Bits && wG.MatrixTrackedMatrices)
          for (let bG = 0; bG < wG.MatrixTrackedMatrices.length; ++bG) {
            const GG = wG.MatrixTrackedMatrices[bG],
              ZG = GG._m;
            GG._m = new Array(16);
            for (let bG = 0; bG < 16; ++bG) GG._m[bG] = ZG[bG]
          }
        wG.MatrixUse64Bits = GG, wG.MatrixCurrentType = wG.MatrixUse64Bits ? Array : Float32Array, wG.MatrixTrackedMatrices = null
      }
    }
    wG.MatrixUse64Bits = !1, wG.MatrixTrackPrecisionChange = !0, wG.MatrixCurrentType = Float32Array, wG.MatrixTrackedMatrices = []
  },
  37475: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => kG,
      c: () => YG,
      f: () => UG,
      i: () => wG,
      l: () => LG,
      n: () => yG
    });
    class wG {}

    function SG(GG) {
      GG.updateFlag = wG._UpdateFlagSeed++
    }

    function LG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const SG = GG.mwG(),
        LG = bG.mwG(),
        yG = SG[0],
        kG = SG[1],
        UG = SG[2],
        YG = SG[3],
        VG = SG[4],
        pG = SG[5],
        fG = SG[6],
        QG = SG[7],
        KG = SG[8],
        hG = SG[9],
        dG = SG[10],
        JG = SG[11],
        rG = SG[12],
        zG = SG[13],
        EG = SG[14],
        oG = SG[15],
        XG = LG[0],
        uG = LG[1],
        iG = LG[2],
        CG = LG[3],
        WG = LG[4],
        mG = LG[5],
        IG = LG[6],
        FG = LG[7],
        vG = LG[8],
        aG = LG[9],
        cG = LG[10],
        lG = LG[11],
        jG = LG[12],
        PG = LG[13],
        MG = LG[14],
        AG = LG[15];
      ZG[wG] = yG * XG + kG * WG + UG * vG + YG * jG, ZG[wG + 1] = yG * uG + kG * mG + UG * aG + YG * PG, ZG[wG + 2] = yG * iG + kG * IG + UG * cG + YG * MG, ZG[wG + 3] = yG * CG + kG * FG + UG * lG + YG * AG, ZG[wG + 4] = VG * XG + pG * WG + fG * vG + QG * jG, ZG[wG + 5] = VG * uG + pG * mG + fG * aG + QG * PG, ZG[wG + 6] = VG * iG + pG * IG + fG * cG + QG * MG, ZG[wG + 7] = VG * CG + pG * FG + fG * lG + QG * AG, ZG[wG + 8] = KG * XG + hG * WG + dG * vG + JG * jG, ZG[wG + 9] = KG * uG + hG * mG + dG * aG + JG * PG, ZG[wG + 10] = KG * iG + hG * IG + dG * cG + JG * MG, ZG[wG + 11] = KG * CG + hG * FG + dG * lG + JG * AG, ZG[wG + 12] = rG * XG + zG * WG + EG * vG + oG * jG, ZG[wG + 13] = rG * uG + zG * mG + EG * aG + oG * PG, ZG[wG + 14] = rG * iG + zG * IG + EG * cG + oG * MG, ZG[wG + 15] = rG * CG + zG * FG + EG * lG + oG * AG
    }

    function yG(GG, bG, ZG) {
      let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      LG(GG, bG, ZG.mwG(), wG), SG(ZG)
    }

    function kG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wG = GG.mwG();
      bG[ZG] = wG[0], bG[ZG + 1] = wG[1], bG[ZG + 2] = wG[2], bG[ZG + 3] = wG[3], bG[ZG + 4] = wG[4], bG[ZG + 5] = wG[5], bG[ZG + 6] = wG[6], bG[ZG + 7] = wG[7], bG[ZG + 8] = wG[8], bG[ZG + 9] = wG[9], bG[ZG + 10] = wG[10], bG[ZG + 11] = wG[11], bG[ZG + 12] = wG[12], bG[ZG + 13] = wG[13], bG[ZG + 14] = wG[14], bG[ZG + 15] = wG[15]
    }

    function UG(GG, bG) {
      const ZG = YG(GG, bG.mwG());
      return ZG && SG(bG), ZG
    }

    function YG(GG, bG) {
      const ZG = GG.mwG(),
        wG = ZG[0],
        SG = ZG[1],
        LG = ZG[2],
        yG = ZG[3],
        kG = ZG[4],
        UG = ZG[5],
        YG = ZG[6],
        VG = ZG[7],
        pG = ZG[8],
        fG = ZG[9],
        QG = ZG[10],
        KG = ZG[11],
        hG = ZG[12],
        dG = ZG[13],
        JG = ZG[14],
        rG = ZG[15],
        zG = QG * rG - JG * KG,
        EG = fG * rG - dG * KG,
        oG = fG * JG - dG * QG,
        XG = pG * rG - hG * KG,
        uG = pG * JG - QG * hG,
        iG = pG * dG - hG * fG,
        CG = +(UG * zG - YG * EG + VG * oG),
        WG = -(kG * zG - YG * XG + VG * uG),
        mG = +(kG * EG - UG * XG + VG * iG),
        IG = -(kG * oG - UG * uG + YG * iG),
        FG = wG * CG + SG * WG + LG * mG + yG * IG;
      if (0 === FG) return !1;
      const vG = 1 / FG,
        aG = YG * rG - JG * VG,
        cG = UG * rG - dG * VG,
        lG = UG * JG - dG * YG,
        jG = kG * rG - hG * VG,
        PG = kG * JG - hG * YG,
        MG = kG * dG - hG * UG,
        AG = YG * KG - QG * VG,
        sG = UG * KG - fG * VG,
        qG = UG * QG - fG * YG,
        nG = kG * KG - pG * VG,
        gG = kG * QG - pG * YG,
        eG = kG * fG - pG * UG,
        RG = -(SG * zG - LG * EG + yG * oG),
        TG = +(wG * zG - LG * XG + yG * uG),
        HG = -(wG * EG - SG * XG + yG * iG),
        tG = +(wG * oG - SG * uG + LG * iG),
        DG = +(SG * aG - LG * cG + yG * lG),
        NG = -(wG * aG - LG * jG + yG * PG),
        OG = +(wG * cG - SG * jG + yG * MG),
        xG = -(wG * lG - SG * PG + LG * MG),
        BG = -(SG * AG - LG * sG + yG * qG),
        Gb = +(wG * AG - LG * nG + yG * gG),
        bb = -(wG * sG - SG * nG + yG * eG),
        Zb = +(wG * qG - SG * gG + LG * eG);
      return bG[0] = CG * vG, bG[1] = RG * vG, bG[2] = DG * vG, bG[3] = BG * vG, bG[4] = WG * vG, bG[5] = TG * vG, bG[6] = NG * vG, bG[7] = Gb * vG, bG[8] = mG * vG, bG[9] = HG * vG, bG[10] = OG * vG, bG[11] = bb * vG, bG[12] = IG * vG, bG[13] = tG * vG, bG[14] = xG * vG, bG[15] = Zb * vG, !0
    }
    wG._UpdateFlagSeed = 0
  },
  37439: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => hG,
      g: () => KG,
      h: () => EG,
      j: () => JG,
      m: () => pG,
      p: () => fG,
      t: () => QG
    });
    var wG = ZG(37443),
      SG = ZG(37448),
      LG = ZG(37456),
      yG = ZG(37463),
      kG = ZG(37471),
      UG = ZG(37475),
      YG = ZG(37484);
    const VG = GG => parseInt(GG.toString().replace(/\W/g, ""));
    class pG {
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = GG, this.y = bG
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let GG = VG(this.x);
        return GG = 397 * GG ^ VG(this.y), GG
      }
      toArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GG[bG] = this.x, GG[bG + 1] = this.y, this
      }
      hZG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pG.FromArrayToRef(GG, bG, this), this
      }
      mwG() {
        return [this.x, this.y]
      }
      oW(GG) {
        return this.x = GG.x, this.y = GG.y, this
      }
      fGG(GG, bG) {
        return this.x = GG, this.y = bG, this
      }
      set(GG, bG) {
        return this.fGG(GG, bG)
      }
      N7(GG) {
        return this.fGG(GG, GG)
      }
      add(GG) {
        return new pG(this.x + GG.x, this.y + GG.y)
      }
      addToRef(GG, bG) {
        return bG.x = this.x + GG.x, bG.y = this.y + GG.y, bG
      }
      addInPlace(GG) {
        return this.x += GG.x, this.y += GG.y, this
      }
      addInPlaceFromFloats(GG, bG) {
        return this.x += GG, this.y += bG, this
      }
      addVector3(GG) {
        return new pG(this.x + GG.x, this.y + GG.y)
      }
      subtract(GG) {
        return new pG(this.x - GG.x, this.y - GG.y)
      }
      subtractToRef(GG, bG) {
        return bG.x = this.x - GG.x, bG.y = this.y - GG.y, bG
      }
      twG(GG) {
        return this.x -= GG.x, this.y -= GG.y, this
      }
      multiplyInPlace(GG) {
        return this.x *= GG.x, this.y *= GG.y, this
      }
      multiply(GG) {
        return new pG(this.x * GG.x, this.y * GG.y)
      }
      multiplyToRef(GG, bG) {
        return bG.x = this.x * GG.x, bG.y = this.y * GG.y, bG
      }
      multiplyByFloats(GG, bG) {
        return new pG(this.x * GG, this.y * bG)
      }
      divide(GG) {
        return new pG(this.x / GG.x, this.y / GG.y)
      }
      divideToRef(GG, bG) {
        return bG.x = this.x / GG.x, bG.y = this.y / GG.y, bG
      }
      divideInPlace(GG) {
        return this.x = this.x / GG.x, this.y = this.y / GG.y, this
      }
      minimizeInPlace(GG) {
        return this.minimizeInPlaceFromFloats(GG.x, GG.y)
      }
      maximizeInPlace(GG) {
        return this.maximizeInPlaceFromFloats(GG.x, GG.y)
      }
      minimizeInPlaceFromFloats(GG, bG) {
        return this.x = Math.min(GG, this.x), this.y = Math.min(bG, this.y), this
      }
      maximizeInPlaceFromFloats(GG, bG) {
        return this.x = Math.max(GG, this.x), this.y = Math.max(bG, this.y), this
      }
      subtractFromFloats(GG, bG) {
        return new pG(this.x - GG, this.y - bG)
      }
      subtractFromFloatsToRef(GG, bG, ZG) {
        return ZG.x = this.x - GG, ZG.y = this.y - bG, ZG
      }
      By() {
        return new pG(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(GG) {
        return GG.x = -this.x, GG.y = -this.y, GG
      }
      scaleInPlace(GG) {
        return this.x *= GG, this.y *= GG, this
      }
      scale(GG) {
        return new pG(this.x * GG, this.y * GG)
      }
      scaleToRef(GG, bG) {
        return bG.x = this.x * GG, bG.y = this.y * GG, bG
      }
      scaleAndAddToRef(GG, bG) {
        return bG.x += this.x * GG, bG.y += this.y * GG, bG
      }
      equals(GG) {
        return GG && this.x === GG.x && this.y === GG.y
      }
      equalsWithEpsilon(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wG.d;
        return GG && (0, kG.WithinEpsilon)(this.x, GG.x, bG) && (0, kG.WithinEpsilon)(this.y, GG.y, bG)
      }
      ZkG(GG, bG) {
        return this.x === GG && this.y === bG
      }
      floor() {
        return new pG(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(GG) {
        return GG.x = Math.floor(this.x), GG.y = Math.floor(this.y), GG
      }
      fract() {
        return new pG(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(GG) {
        return GG.x = this.x - Math.floor(this.x), GG.y = this.y - Math.floor(this.y), GG
      }
      rotate(GG) {
        return this.rotateToRef(GG, new pG)
      }
      rotateToRef(GG, bG) {
        const ZG = Math.cos(GG),
          wG = Math.sin(GG);
        return bG.x = ZG * this.x - wG * this.y, bG.y = wG * this.x + ZG * this.y, bG
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
      normalizeFromLength(GG) {
        return 0 === GG || 1 === GG ? this : this.scaleInPlace(1 / GG)
      }
      normalizeToNew() {
        const GG = new pG;
        return this.normalizeToRef(GG), GG
      }
      normalizeToRef(GG) {
        const bG = this.length();
        return 0 === bG || 1 === bG ? (GG.x = this.x, GG.y = this.y, GG) : this.scaleToRef(1 / bG, GG)
      }
      clone() {
        return new pG(this.x, this.y)
      }
      dot(GG) {
        return this.x * GG.x + this.y * GG.y
      }
      static Zero() {
        return new pG(0, 0)
      }
      static One() {
        return new pG(1, 1)
      }
      static Random() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new pG((0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG))
      }
      static RandomToRef() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).fGG((0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG))
      }
      static get ZeroReadOnly() {
        return pG._ZeroReadOnly
      }
      static FromArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pG(GG[bG], GG[bG + 1])
      }
      static FromArrayToRef(GG, bG, ZG) {
        return ZG.x = GG[bG], ZG.y = GG[bG + 1], ZG
      }
      static FromFloatsToRef(GG, bG, ZG) {
        return ZG.fGG(GG, bG), ZG
      }
      static CatmullRom(GG, bG, ZG, wG, SG) {
        const LG = SG * SG,
          yG = SG * LG,
          kG = .5 * (2 * bG.x + (-GG.x + ZG.x) * SG + (2 * GG.x - 5 * bG.x + 4 * ZG.x - wG.x) * LG + (-GG.x + 3 * bG.x - 3 * ZG.x + wG.x) * yG),
          UG = .5 * (2 * bG.y + (-GG.y + ZG.y) * SG + (2 * GG.y - 5 * bG.y + 4 * ZG.y - wG.y) * LG + (-GG.y + 3 * bG.y - 3 * ZG.y + wG.y) * yG);
        return new pG(kG, UG)
      }
      static ClampToRef(GG, bG, ZG, wG) {
        return wG.x = (0, kG.Clamp)(GG.x, bG.x, ZG.x), wG.y = (0, kG.Clamp)(GG.y, bG.y, ZG.y), wG
      }
      static Clamp(GG, bG, ZG) {
        const wG = (0, kG.Clamp)(GG.x, bG.x, ZG.x),
          SG = (0, kG.Clamp)(GG.y, bG.y, ZG.y);
        return new pG(wG, SG)
      }
      static Hermite(GG, bG, ZG, wG, SG) {
        const LG = SG * SG,
          yG = SG * LG,
          kG = 2 * yG - 3 * LG + 1,
          UG = -2 * yG + 3 * LG,
          YG = yG - 2 * LG + SG,
          VG = yG - LG,
          fG = GG.x * kG + ZG.x * UG + bG.x * YG + wG.x * VG,
          QG = GG.y * kG + ZG.y * UG + bG.y * YG + wG.y * VG;
        return new pG(fG, QG)
      }
      static Hermite1stDerivative(GG, bG, ZG, wG, SG) {
        return this.Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, new pG)
      }
      static Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG) {
        const yG = SG * SG;
        return LG.x = 6 * (yG - SG) * GG.x + (3 * yG - 4 * SG + 1) * bG.x + 6 * (-yG + SG) * ZG.x + (3 * yG - 2 * SG) * wG.x, LG.y = 6 * (yG - SG) * GG.y + (3 * yG - 4 * SG + 1) * bG.y + 6 * (-yG + SG) * ZG.y + (3 * yG - 2 * SG) * wG.y, LG
      }
      static Lerp(GG, bG, ZG) {
        return pG.LerpToRef(GG, bG, ZG, new pG)
      }
      static LerpToRef(GG, bG, ZG, wG) {
        return wG.x = GG.x + (bG.x - GG.x) * ZG, wG.y = GG.y + (bG.y - GG.y) * ZG, wG
      }
      static Dot(GG, bG) {
        return GG.x * bG.x + GG.y * bG.y
      }
      static Normalize(GG) {
        return pG.NormalizeToRef(GG, new pG)
      }
      static NormalizeToRef(GG, bG) {
        return GG.normalizeToRef(bG), bG
      }
      static Minimize(GG, bG) {
        const ZG = GG.x < bG.x ? GG.x : bG.x,
          wG = GG.y < bG.y ? GG.y : bG.y;
        return new pG(ZG, wG)
      }
      static Maximize(GG, bG) {
        const ZG = GG.x > bG.x ? GG.x : bG.x,
          wG = GG.y > bG.y ? GG.y : bG.y;
        return new pG(ZG, wG)
      }
      static Transform(GG, bG) {
        return pG.TransformToRef(GG, bG, new pG)
      }
      static TransformToRef(GG, bG, ZG) {
        const wG = bG.m,
          SG = GG.x * wG[0] + GG.y * wG[4] + wG[12],
          LG = GG.x * wG[1] + GG.y * wG[5] + wG[13];
        return ZG.x = SG, ZG.y = LG, ZG
      }
      static PointInTriangle(GG, bG, ZG, wG) {
        const SG = .5 * (-ZG.y * wG.x + bG.y * (-ZG.x + wG.x) + bG.x * (ZG.y - wG.y) + ZG.x * wG.y),
          LG = SG < 0 ? -1 : 1,
          yG = (bG.y * wG.x - bG.x * wG.y + (wG.y - bG.y) * GG.x + (bG.x - wG.x) * GG.y) * LG,
          kG = (bG.x * ZG.y - bG.y * ZG.x + (bG.y - ZG.y) * GG.x + (ZG.x - bG.x) * GG.y) * LG;
        return yG > 0 && kG > 0 && yG + kG < 2 * SG * LG
      }
      static Distance(GG, bG) {
        return Math.sqrt(pG.DistanceSquared(GG, bG))
      }
      static DistanceSquared(GG, bG) {
        const ZG = GG.x - bG.x,
          wG = GG.y - bG.y;
        return ZG * ZG + wG * wG
      }
      static Center(GG, bG) {
        return pG.CenterToRef(GG, bG, new pG)
      }
      static CenterToRef(GG, bG, ZG) {
        return ZG.fGG((GG.x + bG.x) / 2, (GG.y + bG.y) / 2)
      }
      static DistanceOfPointFromSegment(GG, bG, ZG) {
        const wG = pG.DistanceSquared(bG, ZG);
        if (0 === wG) return pG.Distance(GG, bG);
        const SG = ZG.subtract(bG),
          LG = Math.max(0, Math.min(1, pG.Dot(GG.subtract(bG), SG) / wG)),
          yG = bG.add(SG.multiplyByFloats(LG, LG));
        return pG.Distance(GG, yG)
      }
    }
    pG._V8PerformanceHack = new pG(.5, .5), pG._ZeroReadOnly = pG.Zero();
    class fG {
      get x() {
        return this._x
      }
      set x(GG) {
        this._x = GG, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(GG) {
        this._y = GG, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(GG) {
        this._z = GG, this._isDirty = !0
      }
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = GG, this._y = bG, this._z = ZG
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "mK"
      }
      getHashCode() {
        let GG = VG(this._x);
        return GG = 397 * GG ^ VG(this._y), GG = 397 * GG ^ VG(this._z), GG
      }
      mwG() {
        return [this._x, this._y, this._z]
      }
      toArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GG[bG] = this._x, GG[bG + 1] = this._y, GG[bG + 2] = this._z, this
      }
      hZG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return fG.FromArrayToRef(GG, bG, this), this
      }
      toQuaternion() {
        return KG.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(GG) {
        return this._x += GG._x, this._y += GG._y, this._z += GG._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(GG, bG, ZG) {
        return this._x += GG, this._y += bG, this._z += ZG, this._isDirty = !0, this
      }
      add(GG) {
        return new fG(this._x + GG._x, this._y + GG._y, this._z + GG._z)
      }
      addToRef(GG, bG) {
        return bG._x = this._x + GG._x, bG._y = this._y + GG._y, bG._z = this._z + GG._z, bG._isDirty = !0, bG
      }
      twG(GG) {
        return this._x -= GG._x, this._y -= GG._y, this._z -= GG._z, this._isDirty = !0, this
      }
      subtract(GG) {
        return new fG(this._x - GG._x, this._y - GG._y, this._z - GG._z)
      }
      subtractToRef(GG, bG) {
        return this.subtractFromFloatsToRef(GG._x, GG._y, GG._z, bG)
      }
      subtractFromFloats(GG, bG, ZG) {
        return new fG(this._x - GG, this._y - bG, this._z - ZG)
      }
      subtractFromFloatsToRef(GG, bG, ZG, wG) {
        return wG._x = this._x - GG, wG._y = this._y - bG, wG._z = this._z - ZG, wG._isDirty = !0, wG
      }
      By() {
        return new fG(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(GG) {
        return GG._x = -1 * this._x, GG._y = -1 * this._y, GG._z = -1 * this._z, GG._isDirty = !0, GG
      }
      scaleInPlace(GG) {
        return this._x *= GG, this._y *= GG, this._z *= GG, this._isDirty = !0, this
      }
      scale(GG) {
        return new fG(this._x * GG, this._y * GG, this._z * GG)
      }
      scaleToRef(GG, bG) {
        return bG._x = this._x * GG, bG._y = this._y * GG, bG._z = this._z * GG, bG._isDirty = !0, bG
      }
      getNormalToRef(GG) {
        const bG = this.length();
        let ZG = Math.acos(this._y / bG);
        const wG = Math.atan2(this._z, this._x);
        ZG > Math.PI / 2 ? ZG -= Math.PI / 2 : ZG += Math.PI / 2;
        const SG = bG * Math.sin(ZG) * Math.cos(wG),
          LG = bG * Math.cos(ZG),
          yG = bG * Math.sin(ZG) * Math.sin(wG);
        return GG.set(SG, LG, yG), GG
      }
      applyRotationQuaternionToRef(GG, bG) {
        const ZG = this._x,
          wG = this._y,
          SG = this._z,
          LG = GG._x,
          yG = GG._y,
          kG = GG._z,
          UG = GG._w,
          YG = 2 * (yG * SG - kG * wG),
          VG = 2 * (kG * ZG - LG * SG),
          pG = 2 * (LG * wG - yG * ZG);
        return bG._x = ZG + UG * YG + yG * pG - kG * VG, bG._y = wG + UG * VG + kG * YG - LG * pG, bG._z = SG + UG * pG + LG * VG - yG * YG, bG._isDirty = !0, bG
      }
      applyRotationQuaternionInPlace(GG) {
        return this.applyRotationQuaternionToRef(GG, this)
      }
      applyRotationQuaternion(GG) {
        return this.applyRotationQuaternionToRef(GG, new fG)
      }
      scaleAndAddToRef(GG, bG) {
        return bG._x += this._x * GG, bG._y += this._y * GG, bG._z += this._z * GG, bG._isDirty = !0, bG
      }
      projectOnPlane(GG, bG) {
        return this.projectOnPlaneToRef(GG, bG, new fG)
      }
      projectOnPlaneToRef(GG, bG, ZG) {
        const wG = GG.normal,
          SG = GG.d,
          LG = dG.mK[0];
        this.subtractToRef(bG, LG), LG.normalize();
        const yG = fG.Dot(LG, wG);
        if (Math.abs(yG) < 1e-10) ZG.N7(1 / 0);
        else {
          const GG = -(fG.Dot(bG, wG) + SG) / yG,
            kG = LG.scaleInPlace(GG);
          bG.addToRef(kG, ZG)
        }
        return ZG
      }
      equals(GG) {
        return GG && this._x === GG._x && this._y === GG._y && this._z === GG._z
      }
      equalsWithEpsilon(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wG.d;
        return GG && (0, kG.WithinEpsilon)(this._x, GG._x, bG) && (0, kG.WithinEpsilon)(this._y, GG._y, bG) && (0, kG.WithinEpsilon)(this._z, GG._z, bG)
      }
      ZkG(GG, bG, ZG) {
        return this._x === GG && this._y === bG && this._z === ZG
      }
      multiplyInPlace(GG) {
        return this._x *= GG._x, this._y *= GG._y, this._z *= GG._z, this._isDirty = !0, this
      }
      multiply(GG) {
        return this.multiplyByFloats(GG._x, GG._y, GG._z)
      }
      multiplyToRef(GG, bG) {
        return bG._x = this._x * GG._x, bG._y = this._y * GG._y, bG._z = this._z * GG._z, bG._isDirty = !0, bG
      }
      multiplyByFloats(GG, bG, ZG) {
        return new fG(this._x * GG, this._y * bG, this._z * ZG)
      }
      divide(GG) {
        return new fG(this._x / GG._x, this._y / GG._y, this._z / GG._z)
      }
      divideToRef(GG, bG) {
        return bG._x = this._x / GG._x, bG._y = this._y / GG._y, bG._z = this._z / GG._z, bG._isDirty = !0, bG
      }
      divideInPlace(GG) {
        return this._x = this._x / GG._x, this._y = this._y / GG._y, this._z = this._z / GG._z, this._isDirty = !0, this
      }
      minimizeInPlace(GG) {
        return this.minimizeInPlaceFromFloats(GG._x, GG._y, GG._z)
      }
      maximizeInPlace(GG) {
        return this.maximizeInPlaceFromFloats(GG._x, GG._y, GG._z)
      }
      minimizeInPlaceFromFloats(GG, bG, ZG) {
        return GG < this._x && (this.x = GG), bG < this._y && (this.y = bG), ZG < this._z && (this.z = ZG), this
      }
      maximizeInPlaceFromFloats(GG, bG, ZG) {
        return GG > this._x && (this.x = GG), bG > this._y && (this.y = bG), ZG > this._z && (this.z = ZG), this
      }
      isNonUniformWithinEpsilon(GG) {
        const bG = Math.abs(this._x),
          ZG = Math.abs(this._y);
        if (!(0, kG.WithinEpsilon)(bG, ZG, GG)) return !0;
        const wG = Math.abs(this._z);
        return !(0, kG.WithinEpsilon)(bG, wG, GG) || !(0, kG.WithinEpsilon)(ZG, wG, GG)
      }
      get isNonUniform() {
        const GG = Math.abs(this._x);
        if (GG !== Math.abs(this._y)) return !0;
        return GG !== Math.abs(this._z)
      }
      floorToRef(GG) {
        return GG._x = Math.floor(this._x), GG._y = Math.floor(this._y), GG._z = Math.floor(this._z), GG._isDirty = !0, GG
      }
      floor() {
        return new fG(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(GG) {
        return GG._x = this._x - Math.floor(this._x), GG._y = this._y - Math.floor(this._y), GG._z = this._z - Math.floor(this._z), GG._isDirty = !0, GG
      }
      fract() {
        return new fG(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(GG) {
        if ("xyz" === (GG = GG.toLowerCase())) return this;
        const bG = dG.mK[0].oW(this);
        return this.x = bG[GG[0]], this.y = bG[GG[1]], this.z = bG[GG[2]], this
      }
      rotateByQuaternionToRef(GG, bG) {
        return GG.toRotationMatrix(dG.Matrix[0]), fG.TransformCoordinatesToRef(this, dG.Matrix[0], bG), bG
      }
      rotateByQuaternionAroundPointToRef(GG, bG, ZG) {
        return this.subtractToRef(bG, dG.mK[0]), dG.mK[0].rotateByQuaternionToRef(GG, dG.mK[0]), bG.addToRef(dG.mK[0], ZG), ZG
      }
      cross(GG) {
        return fG.CrossToRef(this, GG, new fG)
      }
      normalizeFromLength(GG) {
        return 0 === GG || 1 === GG ? this : this.scaleInPlace(1 / GG)
      }
      normalizeToNew() {
        return this.normalizeToRef(new fG)
      }
      normalizeToRef(GG) {
        const bG = this.length();
        return 0 === bG || 1 === bG ? (GG._x = this._x, GG._y = this._y, GG._z = this._z, GG._isDirty = !0, GG) : this.scaleToRef(1 / bG, GG)
      }
      clone() {
        return new fG(this._x, this._y, this._z)
      }
      oW(GG) {
        return this.fGG(GG._x, GG._y, GG._z)
      }
      fGG(GG, bG, ZG) {
        return this._x = GG, this._y = bG, this._z = ZG, this._isDirty = !0, this
      }
      set(GG, bG, ZG) {
        return this.fGG(GG, bG, ZG)
      }
      N7(GG) {
        return this._x = this._y = this._z = GG, this._isDirty = !0, this
      }
      static GetClipFactor(GG, bG, ZG, wG) {
        const SG = fG.Dot(GG, ZG);
        return (SG - wG) / (SG - fG.Dot(bG, ZG))
      }
      static GetAngleBetweenVectors(GG, bG, ZG) {
        const wG = GG.normalizeToRef(dG.mK[1]),
          SG = bG.normalizeToRef(dG.mK[2]);
        let LG = fG.Dot(wG, SG);
        LG = (0, kG.Clamp)(LG, -1, 1);
        const yG = Math.acos(LG),
          UG = dG.mK[3];
        return fG.CrossToRef(wG, SG, UG), fG.Dot(UG, ZG) > 0 ? isNaN(yG) ? 0 : yG : isNaN(yG) ? -Math.PI : -Math.acos(LG)
      }
      static GetAngleBetweenVectorsOnPlane(GG, bG, ZG) {
        dG.mK[0].oW(GG);
        const wG = dG.mK[0];
        dG.mK[1].oW(bG);
        const SG = dG.mK[1];
        dG.mK[2].oW(ZG);
        const LG = dG.mK[2],
          yG = dG.mK[3],
          UG = dG.mK[4];
        wG.normalize(), SG.normalize(), LG.normalize(), fG.CrossToRef(LG, wG, yG), fG.CrossToRef(yG, LG, UG);
        const YG = Math.atan2(fG.Dot(SG, yG), fG.Dot(SG, UG));
        return (0, kG.NormalizeRadians)(YG)
      }
      static PitchYawRollToMoveBetweenPointsToRef(GG, bG, ZG) {
        const wG = JG.mK[0];
        return bG.subtractToRef(GG, wG), ZG._y = Math.atan2(wG.x, wG.z) || 0, ZG._x = Math.atan2(Math.sqrt(wG.x ** 2 + wG.z ** 2), wG.y) || 0, ZG._z = 0, ZG._isDirty = !0, ZG
      }
      static PitchYawRollToMoveBetweenPoints(GG, bG) {
        const ZG = fG.Zero();
        return fG.PitchYawRollToMoveBetweenPointsToRef(GG, bG, ZG)
      }
      static SlerpToRef(GG, bG, ZG, SG) {
        ZG = (0, kG.Clamp)(ZG, 0, 1);
        const LG = dG.mK[0],
          yG = dG.mK[1];
        LG.oW(GG);
        const UG = LG.length();
        LG.normalizeFromLength(UG), yG.oW(bG);
        const YG = yG.length();
        yG.normalizeFromLength(YG);
        const VG = fG.Dot(LG, yG);
        let pG, QG;
        if (VG < 1 - wG.d) {
          const GG = Math.acos(VG),
            bG = 1 / Math.sin(GG);
          pG = Math.sin((1 - ZG) * GG) * bG, QG = Math.sin(ZG * GG) * bG
        } else pG = 1 - ZG, QG = ZG;
        return LG.scaleInPlace(pG), yG.scaleInPlace(QG), SG.oW(LG).addInPlace(yG), SG.scaleInPlace((0, kG.Lerp)(UG, YG, ZG)), SG
      }
      static SmoothToRef(GG, bG, ZG, wG, SG) {
        return fG.SlerpToRef(GG, bG, 0 === wG ? 1 : ZG / wG, SG), SG
      }
      static FromArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new fG(GG[bG], GG[bG + 1], GG[bG + 2])
      }
      static FromFloatArray(GG, bG) {
        return fG.FromArray(GG, bG)
      }
      static FromArrayToRef(GG, bG, ZG) {
        return ZG._x = GG[bG], ZG._y = GG[bG + 1], ZG._z = GG[bG + 2], ZG._isDirty = !0, ZG
      }
      static FromFloatArrayToRef(GG, bG, ZG) {
        return fG.FromArrayToRef(GG, bG, ZG)
      }
      static FromFloatsToRef(GG, bG, ZG, wG) {
        return wG.fGG(GG, bG, ZG), wG
      }
      static Zero() {
        return new fG(0, 0, 0)
      }
      static One() {
        return new fG(1, 1, 1)
      }
      static Up() {
        return new fG(0, 1, 0)
      }
      static get UpReadOnly() {
        return fG._UpReadOnly
      }
      static get DownReadOnly() {
        return fG._DownReadOnly
      }
      static get RightReadOnly() {
        return fG._RightReadOnly
      }
      static get LeftReadOnly() {
        return fG._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return fG._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return fG._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return fG._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return fG._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return fG._ZeroReadOnly
      }
      static get OneReadOnly() {
        return fG._OneReadOnly
      }
      static Down() {
        return new fG(0, -1, 0)
      }
      static Forward() {
        return new fG(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new fG(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new fG(1, 0, 0)
      }
      static Left() {
        return new fG(-1, 0, 0)
      }
      static Random() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new fG((0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG))
      }
      static RandomToRef() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).fGG((0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG))
      }
      static TransformCoordinates(GG, bG) {
        const ZG = fG.Zero();
        return fG.TransformCoordinatesToRef(GG, bG, ZG), ZG
      }
      static TransformCoordinatesToRef(GG, bG, ZG) {
        return fG.TransformCoordinatesFromFloatsToRef(GG._x, GG._y, GG._z, bG, ZG), ZG
      }
      static TransformCoordinatesFromFloatsToRef(GG, bG, ZG, wG, SG) {
        const LG = wG.m,
          yG = GG * LG[0] + bG * LG[4] + ZG * LG[8] + LG[12],
          kG = GG * LG[1] + bG * LG[5] + ZG * LG[9] + LG[13],
          UG = GG * LG[2] + bG * LG[6] + ZG * LG[10] + LG[14],
          YG = 1 / (GG * LG[3] + bG * LG[7] + ZG * LG[11] + LG[15]);
        return SG._x = yG * YG, SG._y = kG * YG, SG._z = UG * YG, SG._isDirty = !0, SG
      }
      static TransformNormal(GG, bG) {
        const ZG = fG.Zero();
        return fG.TransformNormalToRef(GG, bG, ZG), ZG
      }
      static TransformNormalToRef(GG, bG, ZG) {
        return this.TransformNormalFromFloatsToRef(GG._x, GG._y, GG._z, bG, ZG), ZG
      }
      static TransformNormalFromFloatsToRef(GG, bG, ZG, wG, SG) {
        const LG = wG.m;
        return SG._x = GG * LG[0] + bG * LG[4] + ZG * LG[8], SG._y = GG * LG[1] + bG * LG[5] + ZG * LG[9], SG._z = GG * LG[2] + bG * LG[6] + ZG * LG[10], SG._isDirty = !0, SG
      }
      static CatmullRom(GG, bG, ZG, wG, SG) {
        const LG = SG * SG,
          yG = SG * LG,
          kG = .5 * (2 * bG._x + (-GG._x + ZG._x) * SG + (2 * GG._x - 5 * bG._x + 4 * ZG._x - wG._x) * LG + (-GG._x + 3 * bG._x - 3 * ZG._x + wG._x) * yG),
          UG = .5 * (2 * bG._y + (-GG._y + ZG._y) * SG + (2 * GG._y - 5 * bG._y + 4 * ZG._y - wG._y) * LG + (-GG._y + 3 * bG._y - 3 * ZG._y + wG._y) * yG),
          YG = .5 * (2 * bG._z + (-GG._z + ZG._z) * SG + (2 * GG._z - 5 * bG._z + 4 * ZG._z - wG._z) * LG + (-GG._z + 3 * bG._z - 3 * ZG._z + wG._z) * yG);
        return new fG(kG, UG, YG)
      }
      static Clamp(GG, bG, ZG) {
        const wG = new fG;
        return fG.ClampToRef(GG, bG, ZG, wG), wG
      }
      static ClampToRef(GG, bG, ZG, wG) {
        let SG = GG._x;
        SG = SG > ZG._x ? ZG._x : SG, SG = SG < bG._x ? bG._x : SG;
        let LG = GG._y;
        LG = LG > ZG._y ? ZG._y : LG, LG = LG < bG._y ? bG._y : LG;
        let yG = GG._z;
        return yG = yG > ZG._z ? ZG._z : yG, yG = yG < bG._z ? bG._z : yG, wG.fGG(SG, LG, yG), wG
      }
      static CheckExtends(GG, bG, ZG) {
        bG.minimizeInPlace(GG), ZG.maximizeInPlace(GG)
      }
      static Hermite(GG, bG, ZG, wG, SG) {
        const LG = SG * SG,
          yG = SG * LG,
          kG = 2 * yG - 3 * LG + 1,
          UG = -2 * yG + 3 * LG,
          YG = yG - 2 * LG + SG,
          VG = yG - LG,
          pG = GG._x * kG + ZG._x * UG + bG._x * YG + wG._x * VG,
          QG = GG._y * kG + ZG._y * UG + bG._y * YG + wG._y * VG,
          KG = GG._z * kG + ZG._z * UG + bG._z * YG + wG._z * VG;
        return new fG(pG, QG, KG)
      }
      static Hermite1stDerivative(GG, bG, ZG, wG, SG) {
        const LG = new fG;
        return this.Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG), LG
      }
      static Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG) {
        const yG = SG * SG;
        return LG._x = 6 * (yG - SG) * GG._x + (3 * yG - 4 * SG + 1) * bG._x + 6 * (-yG + SG) * ZG._x + (3 * yG - 2 * SG) * wG._x, LG._y = 6 * (yG - SG) * GG._y + (3 * yG - 4 * SG + 1) * bG._y + 6 * (-yG + SG) * ZG._y + (3 * yG - 2 * SG) * wG._y, LG._z = 6 * (yG - SG) * GG._z + (3 * yG - 4 * SG + 1) * bG._z + 6 * (-yG + SG) * ZG._z + (3 * yG - 2 * SG) * wG._z, LG._isDirty = !0, LG
      }
      static Lerp(GG, bG, ZG) {
        const wG = new fG(0, 0, 0);
        return fG.LerpToRef(GG, bG, ZG, wG), wG
      }
      static LerpToRef(GG, bG, ZG, wG) {
        return wG._x = GG._x + (bG._x - GG._x) * ZG, wG._y = GG._y + (bG._y - GG._y) * ZG, wG._z = GG._z + (bG._z - GG._z) * ZG, wG._isDirty = !0, wG
      }
      static Dot(GG, bG) {
        return GG._x * bG._x + GG._y * bG._y + GG._z * bG._z
      }
      dot(GG) {
        return this._x * GG._x + this._y * GG._y + this._z * GG._z
      }
      static Cross(GG, bG) {
        const ZG = new fG;
        return fG.CrossToRef(GG, bG, ZG), ZG
      }
      static CrossToRef(GG, bG, ZG) {
        const wG = GG._y * bG._z - GG._z * bG._y,
          SG = GG._z * bG._x - GG._x * bG._z,
          LG = GG._x * bG._y - GG._y * bG._x;
        return ZG.fGG(wG, SG, LG), ZG
      }
      static Normalize(GG) {
        const bG = fG.Zero();
        return fG.NormalizeToRef(GG, bG), bG
      }
      static NormalizeToRef(GG, bG) {
        return GG.normalizeToRef(bG), bG
      }
      static Project(GG, bG, ZG, wG) {
        const SG = new fG;
        return fG.ProjectToRef(GG, bG, ZG, wG, SG), SG
      }
      static ProjectToRef(GG, bG, ZG, wG, SG) {
        const LG = wG.width,
          kG = wG.height,
          UG = wG.x,
          YG = wG.y,
          VG = dG.Matrix[1],
          pG = yG.c.LastCreatedEngine?.isNDCHalfZRange,
          QG = pG ? 1 : .5,
          KG = pG ? 0 : .5;
        hG.FromValuesToRef(LG / 2, 0, 0, 0, 0, -kG / 2, 0, 0, 0, 0, QG, 0, UG + LG / 2, kG / 2 + YG, KG, 1, VG);
        const JG = dG.Matrix[0];
        return bG.multiplyToRef(ZG, JG), JG.multiplyToRef(VG, JG), fG.TransformCoordinatesToRef(GG, JG, SG), SG
      }
      static Reflect(GG, bG) {
        return this.ReflectToRef(GG, bG, new fG)
      }
      static ReflectToRef(GG, bG, ZG) {
        const wG = JG.mK[0];
        return wG.oW(bG).scaleInPlace(2 * fG.Dot(GG, bG)), ZG.oW(GG).twG(wG)
      }
      static UnprojectFromTransform(GG, bG, ZG, wG, SG) {
        return this.Unproject(GG, bG, ZG, wG, SG, hG.IdentityReadOnly)
      }
      static Unproject(GG, bG, ZG, wG, SG, LG) {
        const yG = new fG;
        return fG.UnprojectToRef(GG, bG, ZG, wG, SG, LG, yG), yG
      }
      static UnprojectToRef(GG, bG, ZG, wG, SG, LG, yG) {
        return fG.UnprojectFloatsToRef(GG._x, GG._y, GG._z, bG, ZG, wG, SG, LG, yG), yG
      }
      static UnprojectFloatsToRef(GG, bG, ZG, wG, SG, LG, kG, UG, YG) {
        const VG = dG.Matrix[0];
        LG.multiplyToRef(kG, VG), VG.multiplyToRef(UG, VG), VG.invert();
        const pG = dG.mK[0];
        return pG.x = GG / wG * 2 - 1, pG.y = -(bG / SG * 2 - 1), yG.c.LastCreatedEngine?.isNDCHalfZRange ? pG.z = ZG : pG.z = 2 * ZG - 1, fG.TransformCoordinatesToRef(pG, VG, YG), YG
      }
      static Minimize(GG, bG) {
        const ZG = new fG;
        return ZG.oW(GG), ZG.minimizeInPlace(bG), ZG
      }
      static Maximize(GG, bG) {
        const ZG = new fG;
        return ZG.oW(GG), ZG.maximizeInPlace(bG), ZG
      }
      static Distance(GG, bG) {
        return Math.sqrt(fG.DistanceSquared(GG, bG))
      }
      static DistanceSquared(GG, bG) {
        const ZG = GG._x - bG._x,
          wG = GG._y - bG._y,
          SG = GG._z - bG._z;
        return ZG * ZG + wG * wG + SG * SG
      }
      static ProjectOnTriangleToRef(GG, bG, ZG, SG, LG) {
        const yG = dG.mK[0],
          UG = dG.mK[1],
          YG = dG.mK[2],
          VG = dG.mK[3],
          pG = dG.mK[4];
        ZG.subtractToRef(bG, yG), SG.subtractToRef(bG, UG), SG.subtractToRef(ZG, YG);
        const QG = yG.length(),
          KG = UG.length(),
          hG = YG.length();
        if (QG < wG.d || KG < wG.d || hG < wG.d) return LG.oW(bG), fG.Distance(GG, bG);
        GG.subtractToRef(bG, pG), fG.CrossToRef(yG, UG, VG);
        const JG = VG.length();
        if (JG < wG.d) return LG.oW(bG), fG.Distance(GG, bG);
        VG.normalizeFromLength(JG);
        let rG = pG.length();
        if (rG < wG.d) return LG.oW(bG), 0;
        pG.normalizeFromLength(rG);
        const zG = fG.Dot(VG, pG),
          EG = dG.mK[5],
          oG = dG.mK[6];
        EG.oW(VG).scaleInPlace(-rG * zG), oG.oW(GG).addInPlace(EG);
        const XG = dG.mK[4],
          uG = dG.mK[5],
          iG = dG.mK[7],
          CG = dG.mK[8];
        XG.oW(yG).scaleInPlace(1 / QG), CG.oW(UG).scaleInPlace(1 / KG), XG.addInPlace(CG).scaleInPlace(-1), uG.oW(yG).scaleInPlace(-1 / QG), CG.oW(YG).scaleInPlace(1 / hG), uG.addInPlace(CG).scaleInPlace(-1), iG.oW(YG).scaleInPlace(-1 / hG), CG.oW(UG).scaleInPlace(-1 / KG), iG.addInPlace(CG).scaleInPlace(-1);
        const WG = dG.mK[9];
        let mG;
        WG.oW(oG).twG(bG), fG.CrossToRef(XG, WG, CG), mG = fG.Dot(CG, VG);
        const IG = mG;
        WG.oW(oG).twG(ZG), fG.CrossToRef(uG, WG, CG), mG = fG.Dot(CG, VG);
        const FG = mG;
        WG.oW(oG).twG(SG), fG.CrossToRef(iG, WG, CG), mG = fG.Dot(CG, VG);
        const vG = mG,
          aG = dG.mK[10];
        let cG, lG;
        IG > 0 && FG < 0 ? (aG.oW(yG), cG = bG, lG = ZG) : FG > 0 && vG < 0 ? (aG.oW(YG), cG = ZG, lG = SG) : (aG.oW(UG).scaleInPlace(-1), cG = SG, lG = bG);
        const jG = dG.mK[9],
          PG = dG.mK[4];
        cG.subtractToRef(oG, CG), lG.subtractToRef(oG, jG), fG.CrossToRef(CG, jG, PG);
        if (!(fG.Dot(PG, VG) < 0)) return LG.oW(oG), Math.abs(rG * zG);
        const MG = dG.mK[5];
        fG.CrossToRef(aG, PG, MG), MG.normalize();
        const AG = dG.mK[9];
        AG.oW(cG).twG(oG);
        const sG = AG.length();
        if (sG < wG.d) return LG.oW(cG), fG.Distance(GG, cG);
        AG.normalizeFromLength(sG);
        const qG = fG.Dot(MG, AG),
          nG = dG.mK[7];
        nG.oW(oG).addInPlace(MG.scaleInPlace(sG * qG)), CG.oW(nG).twG(cG), rG = aG.length(), aG.normalizeFromLength(rG);
        let gG = fG.Dot(CG, aG) / Math.max(rG, wG.d);
        return gG = (0, kG.Clamp)(gG, 0, 1), nG.oW(cG).addInPlace(aG.scaleInPlace(gG * rG)), LG.oW(nG), fG.Distance(GG, nG)
      }
      static Center(GG, bG) {
        return fG.CenterToRef(GG, bG, fG.Zero())
      }
      static CenterToRef(GG, bG, ZG) {
        return ZG.fGG((GG._x + bG._x) / 2, (GG._y + bG._y) / 2, (GG._z + bG._z) / 2)
      }
      static RotationFromAxis(GG, bG, ZG) {
        const wG = new fG;
        return fG.RotationFromAxisToRef(GG, bG, ZG, wG), wG
      }
      static RotationFromAxisToRef(GG, bG, ZG, wG) {
        const SG = dG.Quaternion[0];
        return KG.RotationQuaternionFromAxisToRef(GG, bG, ZG, SG), SG.toEulerAnglesToRef(wG), wG
      }
    }
    fG._V8PerformanceHack = new fG(.5, .5, .5), fG._UpReadOnly = fG.Up(), fG._DownReadOnly = fG.Down(), fG._LeftHandedForwardReadOnly = fG.Forward(!1), fG._RightHandedForwardReadOnly = fG.Forward(!0), fG._LeftHandedBackwardReadOnly = fG.Backward(!1), fG._RightHandedBackwardReadOnly = fG.Backward(!0), fG._RightReadOnly = fG.Right(), fG._LeftReadOnly = fG.Left(), fG._ZeroReadOnly = fG.Zero(), fG._OneReadOnly = fG.One();
    class QG {
      get x() {
        return this._x
      }
      set x(GG) {
        this._x = GG, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(GG) {
        this._y = GG, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(GG) {
        this._z = GG, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(GG) {
        this._w = GG, this._isDirty = !0
      }
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = GG, this._y = bG, this._z = ZG, this._w = wG
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let GG = VG(this._x);
        return GG = 397 * GG ^ VG(this._y), GG = 397 * GG ^ VG(this._z), GG = 397 * GG ^ VG(this._w), GG
      }
      mwG() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(GG, bG) {
        return void 0 === bG && (bG = 0), GG[bG] = this._x, GG[bG + 1] = this._y, GG[bG + 2] = this._z, GG[bG + 3] = this._w, this
      }
      hZG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QG.FromArrayToRef(GG, bG, this), this
      }
      addInPlace(GG) {
        return this.x += GG._x, this.y += GG._y, this.z += GG._z, this.w += GG._w, this
      }
      addInPlaceFromFloats(GG, bG, ZG, wG) {
        return this.x += GG, this.y += bG, this.z += ZG, this.w += wG, this
      }
      add(GG) {
        return new QG(this._x + GG.x, this._y + GG.y, this._z + GG.z, this._w + GG.w)
      }
      addToRef(GG, bG) {
        return bG.x = this._x + GG.x, bG.y = this._y + GG.y, bG.z = this._z + GG.z, bG.w = this._w + GG.w, bG
      }
      twG(GG) {
        return this.x -= GG.x, this.y -= GG.y, this.z -= GG.z, this.w -= GG.w, this
      }
      subtract(GG) {
        return new QG(this._x - GG.x, this._y - GG.y, this._z - GG.z, this._w - GG.w)
      }
      subtractToRef(GG, bG) {
        return bG.x = this._x - GG.x, bG.y = this._y - GG.y, bG.z = this._z - GG.z, bG.w = this._w - GG.w, bG
      }
      subtractFromFloats(GG, bG, ZG, wG) {
        return new QG(this._x - GG, this._y - bG, this._z - ZG, this._w - wG)
      }
      subtractFromFloatsToRef(GG, bG, ZG, wG, SG) {
        return SG.x = this._x - GG, SG.y = this._y - bG, SG.z = this._z - ZG, SG.w = this._w - wG, SG
      }
      By() {
        return new QG(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(GG) {
        return GG.x = -this._x, GG.y = -this._y, GG.z = -this._z, GG.w = -this._w, GG
      }
      scaleInPlace(GG) {
        return this.x *= GG, this.y *= GG, this.z *= GG, this.w *= GG, this
      }
      scale(GG) {
        return new QG(this._x * GG, this._y * GG, this._z * GG, this._w * GG)
      }
      scaleToRef(GG, bG) {
        return bG.x = this._x * GG, bG.y = this._y * GG, bG.z = this._z * GG, bG.w = this._w * GG, bG
      }
      scaleAndAddToRef(GG, bG) {
        return bG.x += this._x * GG, bG.y += this._y * GG, bG.z += this._z * GG, bG.w += this._w * GG, bG
      }
      equals(GG) {
        return GG && this._x === GG.x && this._y === GG.y && this._z === GG.z && this._w === GG.w
      }
      equalsWithEpsilon(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wG.d;
        return GG && (0, kG.WithinEpsilon)(this._x, GG.x, bG) && (0, kG.WithinEpsilon)(this._y, GG.y, bG) && (0, kG.WithinEpsilon)(this._z, GG.z, bG) && (0, kG.WithinEpsilon)(this._w, GG.w, bG)
      }
      ZkG(GG, bG, ZG, wG) {
        return this._x === GG && this._y === bG && this._z === ZG && this._w === wG
      }
      multiplyInPlace(GG) {
        return this.x *= GG.x, this.y *= GG.y, this.z *= GG.z, this.w *= GG.w, this
      }
      multiply(GG) {
        return new QG(this._x * GG.x, this._y * GG.y, this._z * GG.z, this._w * GG.w)
      }
      multiplyToRef(GG, bG) {
        return bG.x = this._x * GG.x, bG.y = this._y * GG.y, bG.z = this._z * GG.z, bG.w = this._w * GG.w, bG
      }
      multiplyByFloats(GG, bG, ZG, wG) {
        return new QG(this._x * GG, this._y * bG, this._z * ZG, this._w * wG)
      }
      divide(GG) {
        return new QG(this._x / GG.x, this._y / GG.y, this._z / GG.z, this._w / GG.w)
      }
      divideToRef(GG, bG) {
        return bG.x = this._x / GG.x, bG.y = this._y / GG.y, bG.z = this._z / GG.z, bG.w = this._w / GG.w, bG
      }
      divideInPlace(GG) {
        return this.divideToRef(GG, this)
      }
      minimizeInPlace(GG) {
        return GG.x < this._x && (this.x = GG.x), GG.y < this._y && (this.y = GG.y), GG.z < this._z && (this.z = GG.z), GG.w < this._w && (this.w = GG.w), this
      }
      maximizeInPlace(GG) {
        return GG.x > this._x && (this.x = GG.x), GG.y > this._y && (this.y = GG.y), GG.z > this._z && (this.z = GG.z), GG.w > this._w && (this.w = GG.w), this
      }
      minimizeInPlaceFromFloats(GG, bG, ZG, wG) {
        return this.x = Math.min(GG, this._x), this.y = Math.min(bG, this._y), this.z = Math.min(ZG, this._z), this.w = Math.min(wG, this._w), this
      }
      maximizeInPlaceFromFloats(GG, bG, ZG, wG) {
        return this.x = Math.max(GG, this._x), this.y = Math.max(bG, this._y), this.z = Math.max(ZG, this._z), this.w = Math.max(wG, this._w), this
      }
      floorToRef(GG) {
        return GG.x = Math.floor(this._x), GG.y = Math.floor(this._y), GG.z = Math.floor(this._z), GG.w = Math.floor(this._w), GG
      }
      floor() {
        return new QG(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(GG) {
        return GG.x = this._x - Math.floor(this._x), GG.y = this._y - Math.floor(this._y), GG.z = this._z - Math.floor(this._z), GG.w = this._w - Math.floor(this._w), GG
      }
      fract() {
        return new QG(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(GG) {
        return 0 === GG || 1 === GG ? this : this.scaleInPlace(1 / GG)
      }
      normalizeToNew() {
        return this.normalizeToRef(new QG)
      }
      normalizeToRef(GG) {
        const bG = this.length();
        return 0 === bG || 1 === bG ? (GG.x = this._x, GG.y = this._y, GG.z = this._z, GG.w = this._w, GG) : this.scaleToRef(1 / bG, GG)
      }
      toVector3() {
        return new fG(this._x, this._y, this._z)
      }
      clone() {
        return new QG(this._x, this._y, this._z, this._w)
      }
      oW(GG) {
        return this.x = GG.x, this.y = GG.y, this.z = GG.z, this.w = GG.w, this
      }
      fGG(GG, bG, ZG, wG) {
        return this.x = GG, this.y = bG, this.z = ZG, this.w = wG, this
      }
      set(GG, bG, ZG, wG) {
        return this.fGG(GG, bG, ZG, wG)
      }
      N7(GG) {
        return this.x = this.y = this.z = this.w = GG, this
      }
      dot(GG) {
        return this._x * GG.x + this._y * GG.y + this._z * GG.z + this._w * GG.w
      }
      static FromArray(GG, bG) {
        return bG || (bG = 0), new QG(GG[bG], GG[bG + 1], GG[bG + 2], GG[bG + 3])
      }
      static FromArrayToRef(GG, bG, ZG) {
        return ZG.x = GG[bG], ZG.y = GG[bG + 1], ZG.z = GG[bG + 2], ZG.w = GG[bG + 3], ZG
      }
      static FromFloatArrayToRef(GG, bG, ZG) {
        return QG.FromArrayToRef(GG, bG, ZG), ZG
      }
      static FromFloatsToRef(GG, bG, ZG, wG, SG) {
        return SG.x = GG, SG.y = bG, SG.z = ZG, SG.w = wG, SG
      }
      static Zero() {
        return new QG(0, 0, 0, 0)
      }
      static One() {
        return new QG(1, 1, 1, 1)
      }
      static Random() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new QG((0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG))
      }
      static RandomToRef() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        return ZG.x = (0, kG.RandomRange)(GG, bG), ZG.y = (0, kG.RandomRange)(GG, bG), ZG.z = (0, kG.RandomRange)(GG, bG), ZG.w = (0, kG.RandomRange)(GG, bG), ZG
      }
      static Clamp(GG, bG, ZG) {
        return QG.ClampToRef(GG, bG, ZG, new QG)
      }
      static ClampToRef(GG, bG, ZG, wG) {
        return wG.x = (0, kG.Clamp)(GG.x, bG.x, ZG.x), wG.y = (0, kG.Clamp)(GG.y, bG.y, ZG.y), wG.z = (0, kG.Clamp)(GG.z, bG.z, ZG.z), wG.w = (0, kG.Clamp)(GG.w, bG.w, ZG.w), wG
      }
      static CheckExtends(GG, bG, ZG) {
        bG.minimizeInPlace(GG), ZG.maximizeInPlace(GG)
      }
      static get ZeroReadOnly() {
        return QG._ZeroReadOnly
      }
      static Normalize(GG) {
        return QG.NormalizeToRef(GG, new QG)
      }
      static NormalizeToRef(GG, bG) {
        return GG.normalizeToRef(bG), bG
      }
      static Minimize(GG, bG) {
        const ZG = new QG;
        return ZG.oW(GG), ZG.minimizeInPlace(bG), ZG
      }
      static Maximize(GG, bG) {
        const ZG = new QG;
        return ZG.oW(GG), ZG.maximizeInPlace(bG), ZG
      }
      static Distance(GG, bG) {
        return Math.sqrt(QG.DistanceSquared(GG, bG))
      }
      static DistanceSquared(GG, bG) {
        const ZG = GG.x - bG.x,
          wG = GG.y - bG.y,
          SG = GG.z - bG.z,
          LG = GG.w - bG.w;
        return ZG * ZG + wG * wG + SG * SG + LG * LG
      }
      static Center(GG, bG) {
        return QG.CenterToRef(GG, bG, new QG)
      }
      static CenterToRef(GG, bG, ZG) {
        return ZG.x = (GG.x + bG.x) / 2, ZG.y = (GG.y + bG.y) / 2, ZG.z = (GG.z + bG.z) / 2, ZG.w = (GG.w + bG.w) / 2, ZG
      }
      static TransformCoordinates(GG, bG) {
        return QG.TransformCoordinatesToRef(GG, bG, new QG)
      }
      static TransformCoordinatesToRef(GG, bG, ZG) {
        return QG.TransformCoordinatesFromFloatsToRef(GG._x, GG._y, GG._z, bG, ZG), ZG
      }
      static TransformCoordinatesFromFloatsToRef(GG, bG, ZG, wG, SG) {
        const LG = wG.m,
          yG = GG * LG[0] + bG * LG[4] + ZG * LG[8] + LG[12],
          kG = GG * LG[1] + bG * LG[5] + ZG * LG[9] + LG[13],
          UG = GG * LG[2] + bG * LG[6] + ZG * LG[10] + LG[14],
          YG = GG * LG[3] + bG * LG[7] + ZG * LG[11] + LG[15];
        return SG.x = yG, SG.y = kG, SG.z = UG, SG.w = YG, SG
      }
      static TransformNormal(GG, bG) {
        return QG.TransformNormalToRef(GG, bG, new QG)
      }
      static TransformNormalToRef(GG, bG, ZG) {
        const wG = bG.m,
          SG = GG.x * wG[0] + GG.y * wG[4] + GG.z * wG[8],
          LG = GG.x * wG[1] + GG.y * wG[5] + GG.z * wG[9],
          yG = GG.x * wG[2] + GG.y * wG[6] + GG.z * wG[10];
        return ZG.x = SG, ZG.y = LG, ZG.z = yG, ZG.w = GG.w, ZG
      }
      static TransformNormalFromFloatsToRef(GG, bG, ZG, wG, SG, LG) {
        const yG = SG.m;
        return LG.x = GG * yG[0] + bG * yG[4] + ZG * yG[8], LG.y = GG * yG[1] + bG * yG[5] + ZG * yG[9], LG.z = GG * yG[2] + bG * yG[6] + ZG * yG[10], LG.w = wG, LG
      }
      static FromVector3(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new QG(GG._x, GG._y, GG._z, bG)
      }
      static Dot(GG, bG) {
        return GG.x * bG.x + GG.y * bG.y + GG.z * bG.z + GG.w * bG.w
      }
    }
    QG._V8PerformanceHack = new QG(.5, .5, .5, .5), QG._ZeroReadOnly = QG.Zero();
    class KG {
      get x() {
        return this._x
      }
      set x(GG) {
        this._x = GG, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(GG) {
        this._y = GG, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(GG) {
        this._z = GG, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(GG) {
        this._w = GG, this._isDirty = !0
      }
      constructor() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = GG, this._y = bG, this._z = ZG, this._w = wG
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let GG = VG(this._x);
        return GG = 397 * GG ^ VG(this._y), GG = 397 * GG ^ VG(this._z), GG = 397 * GG ^ VG(this._w), GG
      }
      mwG() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return GG[bG] = this._x, GG[bG + 1] = this._y, GG[bG + 2] = this._z, GG[bG + 3] = this._w, this
      }
      hZG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return KG.FromArrayToRef(GG, bG, this)
      }
      equals(GG) {
        return GG && this._x === GG._x && this._y === GG._y && this._z === GG._z && this._w === GG._w
      }
      equalsWithEpsilon(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wG.d;
        return GG && (0, kG.WithinEpsilon)(this._x, GG._x, bG) && (0, kG.WithinEpsilon)(this._y, GG._y, bG) && (0, kG.WithinEpsilon)(this._z, GG._z, bG) && (0, kG.WithinEpsilon)(this._w, GG._w, bG)
      }
      isApprox(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wG.d;
        return GG && ((0, kG.WithinEpsilon)(this._x, GG._x, bG) && (0, kG.WithinEpsilon)(this._y, GG._y, bG) && (0, kG.WithinEpsilon)(this._z, GG._z, bG) && (0, kG.WithinEpsilon)(this._w, GG._w, bG) || (0, kG.WithinEpsilon)(this._x, -GG._x, bG) && (0, kG.WithinEpsilon)(this._y, -GG._y, bG) && (0, kG.WithinEpsilon)(this._z, -GG._z, bG) && (0, kG.WithinEpsilon)(this._w, -GG._w, bG))
      }
      clone() {
        return new KG(this._x, this._y, this._z, this._w)
      }
      oW(GG) {
        return this._x = GG._x, this._y = GG._y, this._z = GG._z, this._w = GG._w, this._isDirty = !0, this
      }
      fGG(GG, bG, ZG, wG) {
        return this._x = GG, this._y = bG, this._z = ZG, this._w = wG, this._isDirty = !0, this
      }
      set(GG, bG, ZG, wG) {
        return this.fGG(GG, bG, ZG, wG)
      }
      N7(GG) {
        return this.fGG(GG, GG, GG, GG)
      }
      add(GG) {
        return new KG(this._x + GG._x, this._y + GG._y, this._z + GG._z, this._w + GG._w)
      }
      addInPlace(GG) {
        return this._x += GG._x, this._y += GG._y, this._z += GG._z, this._w += GG._w, this._isDirty = !0, this
      }
      addToRef(GG, bG) {
        return bG._x = this._x + GG._x, bG._y = this._y + GG._y, bG._z = this._z + GG._z, bG._w = this._w + GG._w, bG._isDirty = !0, bG
      }
      addInPlaceFromFloats(GG, bG, ZG, wG) {
        return this._x += GG, this._y += bG, this._z += ZG, this._w += wG, this._isDirty = !0, this
      }
      subtractToRef(GG, bG) {
        return bG._x = this._x - GG._x, bG._y = this._y - GG._y, bG._z = this._z - GG._z, bG._w = this._w - GG._w, bG._isDirty = !0, bG
      }
      subtractFromFloats(GG, bG, ZG, wG) {
        return this.subtractFromFloatsToRef(GG, bG, ZG, wG, new KG)
      }
      subtractFromFloatsToRef(GG, bG, ZG, wG, SG) {
        return SG._x = this._x - GG, SG._y = this._y - bG, SG._z = this._z - ZG, SG._w = this._w - wG, SG._isDirty = !0, SG
      }
      subtract(GG) {
        return new KG(this._x - GG._x, this._y - GG._y, this._z - GG._z, this._w - GG._w)
      }
      twG(GG) {
        return this._x -= GG._x, this._y -= GG._y, this._z -= GG._z, this._w -= GG._w, this._isDirty = !0, this
      }
      scale(GG) {
        return new KG(this._x * GG, this._y * GG, this._z * GG, this._w * GG)
      }
      scaleToRef(GG, bG) {
        return bG._x = this._x * GG, bG._y = this._y * GG, bG._z = this._z * GG, bG._w = this._w * GG, bG._isDirty = !0, bG
      }
      scaleInPlace(GG) {
        return this._x *= GG, this._y *= GG, this._z *= GG, this._w *= GG, this._isDirty = !0, this
      }
      scaleAndAddToRef(GG, bG) {
        return bG._x += this._x * GG, bG._y += this._y * GG, bG._z += this._z * GG, bG._w += this._w * GG, bG._isDirty = !0, bG
      }
      multiply(GG) {
        const bG = new KG(0, 0, 0, 1);
        return this.multiplyToRef(GG, bG), bG
      }
      multiplyToRef(GG, bG) {
        const ZG = this._x * GG._w + this._y * GG._z - this._z * GG._y + this._w * GG._x,
          wG = -this._x * GG._z + this._y * GG._w + this._z * GG._x + this._w * GG._y,
          SG = this._x * GG._y - this._y * GG._x + this._z * GG._w + this._w * GG._z,
          LG = -this._x * GG._x - this._y * GG._y - this._z * GG._z + this._w * GG._w;
        return bG.fGG(ZG, wG, SG, LG), bG
      }
      multiplyInPlace(GG) {
        return this.multiplyToRef(GG, this)
      }
      multiplyByFloats(GG, bG, ZG, wG) {
        return this._x *= GG, this._y *= bG, this._z *= ZG, this._w *= wG, this._isDirty = !0, this
      }
      divide(GG) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(GG, bG) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(GG) {
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
      By() {
        return this.negateToRef(new KG)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(GG) {
        return GG._x = -this._x, GG._y = -this._y, GG._z = -this._z, GG._w = -this._w, GG._isDirty = !0, GG
      }
      ZkG(GG, bG, ZG, wG) {
        return this._x === GG && this._y === bG && this._z === ZG && this._w === wG
      }
      floorToRef(GG) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(GG) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(GG) {
        return GG.fGG(-this._x, -this._y, -this._z, this._w), GG
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new KG(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const GG = this.conjugate(),
          bG = this.lengthSquared();
        return 0 == bG || 1 == bG || GG.scaleInPlace(1 / bG), GG
      }
      invertInPlace() {
        this.conjugateInPlace();
        const GG = this.lengthSquared();
        return 0 == GG || 1 == GG || this.scaleInPlace(1 / GG), this
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
      normalizeFromLength(GG) {
        return 0 === GG || 1 === GG ? this : this.scaleInPlace(1 / GG)
      }
      normalizeToNew() {
        const GG = new KG(0, 0, 0, 1);
        return this.normalizeToRef(GG), GG
      }
      normalizeToRef(GG) {
        const bG = this.length();
        return 0 === bG || 1 === bG ? GG.fGG(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / bG, GG)
      }
      toEulerAngles() {
        const GG = fG.Zero();
        return this.toEulerAnglesToRef(GG), GG
      }
      toEulerAnglesToRef(GG) {
        const bG = this._z,
          ZG = this._x,
          wG = this._y,
          SG = this._w,
          LG = wG * bG - ZG * SG,
          yG = .4999999;
        if (LG < -yG) GG._y = 2 * Math.atan2(wG, SG), GG._x = Math.PI / 2, GG._z = 0, GG._isDirty = !0;
        else if (LG > yG) GG._y = 2 * Math.atan2(wG, SG), GG._x = -Math.PI / 2, GG._z = 0, GG._isDirty = !0;
        else {
          const yG = SG * SG,
            kG = bG * bG,
            UG = ZG * ZG,
            YG = wG * wG;
          GG._z = Math.atan2(2 * (ZG * wG + bG * SG), -kG - UG + YG + yG), GG._x = Math.asin(-2 * LG), GG._y = Math.atan2(2 * (bG * ZG + wG * SG), kG - UG - YG + yG), GG._isDirty = !0
        }
        return GG
      }
      toAlphaBetaGammaToRef(GG) {
        const bG = this._z,
          ZG = this._x,
          wG = this._y,
          SG = this._w,
          LG = Math.sqrt(ZG * ZG + wG * wG),
          yG = Math.sqrt(bG * bG + SG * SG),
          kG = 2 * Math.atan2(LG, yG),
          UG = 2 * Math.atan2(bG, SG),
          YG = 2 * Math.atan2(wG, ZG),
          VG = (UG + YG) / 2,
          pG = (UG - YG) / 2;
        return GG.set(pG, kG, VG), GG
      }
      toRotationMatrix(GG) {
        return hG.FromQuaternionToRef(this, GG), GG
      }
      fromRotationMatrix(GG) {
        return KG.FromRotationMatrixToRef(GG, this), this
      }
      dot(GG) {
        return this._x * GG._x + this._y * GG._y + this._z * GG._z + this._w * GG._w
      }
      toAxisAngle() {
        const GG = fG.Zero();
        return {
          axis: GG,
          angle: this.toAxisAngleToRef(GG)
        }
      }
      toAxisAngleToRef(GG) {
        let bG;
        const ZG = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          wG = this._w;
        return ZG > 0 ? (bG = 2 * Math.atan2(ZG, wG), GG.set(this._x / ZG, this._y / ZG, this._z / ZG)) : (bG = 0, GG.set(1, 0, 0)), bG
      }
      static FromRotationMatrix(GG) {
        const bG = new KG;
        return KG.FromRotationMatrixToRef(GG, bG), bG
      }
      static FromRotationMatrixToRef(GG, bG) {
        const ZG = GG.m,
          wG = ZG[0],
          SG = ZG[4],
          LG = ZG[8],
          yG = ZG[1],
          kG = ZG[5],
          UG = ZG[9],
          YG = ZG[2],
          VG = ZG[6],
          pG = ZG[10],
          fG = wG + kG + pG;
        let QG;
        return fG > 0 ? (QG = .5 / Math.sqrt(fG + 1), bG._w = .25 / QG, bG._x = (VG - UG) * QG, bG._y = (LG - YG) * QG, bG._z = (yG - SG) * QG, bG._isDirty = !0) : wG > kG && wG > pG ? (QG = 2 * Math.sqrt(1 + wG - kG - pG), bG._w = (VG - UG) / QG, bG._x = .25 * QG, bG._y = (SG + yG) / QG, bG._z = (LG + YG) / QG, bG._isDirty = !0) : kG > pG ? (QG = 2 * Math.sqrt(1 + kG - wG - pG), bG._w = (LG - YG) / QG, bG._x = (SG + yG) / QG, bG._y = .25 * QG, bG._z = (UG + VG) / QG, bG._isDirty = !0) : (QG = 2 * Math.sqrt(1 + pG - wG - kG), bG._w = (yG - SG) / QG, bG._x = (LG + YG) / QG, bG._y = (UG + VG) / QG, bG._z = .25 * QG, bG._isDirty = !0), bG
      }
      static Dot(GG, bG) {
        return GG._x * bG._x + GG._y * bG._y + GG._z * bG._z + GG._w * bG._w
      }
      static AreClose(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const wG = KG.Dot(GG, bG);
        return 1 - wG * wG <= ZG
      }
      static SmoothToRef(GG, bG, ZG, wG, SG) {
        let LG = 0 === wG ? 1 : ZG / wG;
        return LG = (0, kG.Clamp)(LG, 0, 1), KG.SlerpToRef(GG, bG, LG, SG), SG
      }
      static Zero() {
        return new KG(0, 0, 0, 0)
      }
      static Inverse(GG) {
        return new KG(-GG._x, -GG._y, -GG._z, GG._w)
      }
      static InverseToRef(GG, bG) {
        return bG.set(-GG._x, -GG._y, -GG._z, GG._w), bG
      }
      static Identity() {
        return new KG(0, 0, 0, 1)
      }
      static IsIdentity(GG) {
        return GG && 0 === GG._x && 0 === GG._y && 0 === GG._z && 1 === GG._w
      }
      static RotationAxis(GG, bG) {
        return KG.RotationAxisToRef(GG, bG, new KG)
      }
      static RotationAxisToRef(GG, bG, ZG) {
        ZG._w = Math.cos(bG / 2);
        const wG = Math.sin(bG / 2) / GG.length();
        return ZG._x = GG._x * wG, ZG._y = GG._y * wG, ZG._z = GG._z * wG, ZG._isDirty = !0, ZG
      }
      static FromArray(GG, bG) {
        return bG || (bG = 0), new KG(GG[bG], GG[bG + 1], GG[bG + 2], GG[bG + 3])
      }
      static FromArrayToRef(GG, bG, ZG) {
        return ZG._x = GG[bG], ZG._y = GG[bG + 1], ZG._z = GG[bG + 2], ZG._w = GG[bG + 3], ZG._isDirty = !0, ZG
      }
      static FromFloatsToRef(GG, bG, ZG, wG, SG) {
        return SG.fGG(GG, bG, ZG, wG), SG
      }
      static FromEulerAngles(GG, bG, ZG) {
        const wG = new KG;
        return KG.RotationYawPitchRollToRef(bG, GG, ZG, wG), wG
      }
      static FromEulerAnglesToRef(GG, bG, ZG, wG) {
        return KG.RotationYawPitchRollToRef(bG, GG, ZG, wG), wG
      }
      static FromEulerVector(GG) {
        const bG = new KG;
        return KG.RotationYawPitchRollToRef(GG._y, GG._x, GG._z, bG), bG
      }
      static FromEulerVectorToRef(GG, bG) {
        return KG.RotationYawPitchRollToRef(GG._y, GG._x, GG._z, bG), bG
      }
      static FromUnitVectorsToRef(GG, bG, ZG) {
        let SG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wG.d;
        const LG = fG.Dot(GG, bG) + 1;
        return LG < SG ? Math.abs(GG.x) > Math.abs(GG.z) ? ZG.set(-GG.y, GG.x, 0, 0) : ZG.set(0, -GG.z, GG.y, 0) : (fG.CrossToRef(GG, bG, JG.mK[0]), ZG.set(JG.mK[0].x, JG.mK[0].y, JG.mK[0].z, LG)), ZG.normalize()
      }
      static RotationYawPitchRoll(GG, bG, ZG) {
        const wG = new KG;
        return KG.RotationYawPitchRollToRef(GG, bG, ZG, wG), wG
      }
      static RotationYawPitchRollToRef(GG, bG, ZG, wG) {
        const SG = .5 * ZG,
          LG = .5 * bG,
          yG = .5 * GG,
          kG = Math.sin(SG),
          UG = Math.cos(SG),
          YG = Math.sin(LG),
          VG = Math.cos(LG),
          pG = Math.sin(yG),
          fG = Math.cos(yG);
        return wG._x = fG * YG * UG + pG * VG * kG, wG._y = pG * VG * UG - fG * YG * kG, wG._z = fG * VG * kG - pG * YG * UG, wG._w = fG * VG * UG + pG * YG * kG, wG._isDirty = !0, wG
      }
      static RotationAlphaBetaGamma(GG, bG, ZG) {
        const wG = new KG;
        return KG.RotationAlphaBetaGammaToRef(GG, bG, ZG, wG), wG
      }
      static RotationAlphaBetaGammaToRef(GG, bG, ZG, wG) {
        const SG = .5 * (ZG + GG),
          LG = .5 * (ZG - GG),
          yG = .5 * bG;
        return wG._x = Math.cos(LG) * Math.sin(yG), wG._y = Math.sin(LG) * Math.sin(yG), wG._z = Math.sin(SG) * Math.cos(yG), wG._w = Math.cos(SG) * Math.cos(yG), wG._isDirty = !0, wG
      }
      static RotationQuaternionFromAxis(GG, bG, ZG) {
        const wG = new KG(0, 0, 0, 0);
        return KG.RotationQuaternionFromAxisToRef(GG, bG, ZG, wG), wG
      }
      static RotationQuaternionFromAxisToRef(GG, bG, ZG, wG) {
        const SG = dG.Matrix[0];
        return GG = GG.normalizeToRef(dG.mK[0]), bG = bG.normalizeToRef(dG.mK[1]), ZG = ZG.normalizeToRef(dG.mK[2]), hG.FromXYZAxesToRef(GG, bG, ZG, SG), KG.FromRotationMatrixToRef(SG, wG), wG
      }
      static FromLookDirectionLH(GG, bG) {
        const ZG = new KG;
        return KG.FromLookDirectionLHToRef(GG, bG, ZG), ZG
      }
      static FromLookDirectionLHToRef(GG, bG, ZG) {
        const wG = dG.Matrix[0];
        return hG.LookDirectionLHToRef(GG, bG, wG), KG.FromRotationMatrixToRef(wG, ZG), ZG
      }
      static FromLookDirectionRH(GG, bG) {
        const ZG = new KG;
        return KG.FromLookDirectionRHToRef(GG, bG, ZG), ZG
      }
      static FromLookDirectionRHToRef(GG, bG, ZG) {
        const wG = dG.Matrix[0];
        return hG.LookDirectionRHToRef(GG, bG, wG), KG.FromRotationMatrixToRef(wG, ZG)
      }
      static Slerp(GG, bG, ZG) {
        const wG = KG.Identity();
        return KG.SlerpToRef(GG, bG, ZG, wG), wG
      }
      static SlerpToRef(GG, bG, ZG, wG) {
        let SG, LG, yG = GG._x * bG._x + GG._y * bG._y + GG._z * bG._z + GG._w * bG._w,
          kG = !1;
        if (yG < 0 && (kG = !0, yG = -yG), yG > .999999) LG = 1 - ZG, SG = kG ? -ZG : ZG;
        else {
          const GG = Math.acos(yG),
            bG = 1 / Math.sin(GG);
          LG = Math.sin((1 - ZG) * GG) * bG, SG = kG ? -Math.sin(ZG * GG) * bG : Math.sin(ZG * GG) * bG
        }
        return wG._x = LG * GG._x + SG * bG._x, wG._y = LG * GG._y + SG * bG._y, wG._z = LG * GG._z + SG * bG._z, wG._w = LG * GG._w + SG * bG._w, wG._isDirty = !0, wG
      }
      static Hermite(GG, bG, ZG, wG, SG) {
        const LG = SG * SG,
          yG = SG * LG,
          kG = 2 * yG - 3 * LG + 1,
          UG = -2 * yG + 3 * LG,
          YG = yG - 2 * LG + SG,
          VG = yG - LG,
          pG = GG._x * kG + ZG._x * UG + bG._x * YG + wG._x * VG,
          fG = GG._y * kG + ZG._y * UG + bG._y * YG + wG._y * VG,
          QG = GG._z * kG + ZG._z * UG + bG._z * YG + wG._z * VG,
          hG = GG._w * kG + ZG._w * UG + bG._w * YG + wG._w * VG;
        return new KG(pG, fG, QG, hG)
      }
      static Hermite1stDerivative(GG, bG, ZG, wG, SG) {
        const LG = new KG;
        return this.Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG), LG
      }
      static Hermite1stDerivativeToRef(GG, bG, ZG, wG, SG, LG) {
        const yG = SG * SG;
        return LG._x = 6 * (yG - SG) * GG._x + (3 * yG - 4 * SG + 1) * bG._x + 6 * (-yG + SG) * ZG._x + (3 * yG - 2 * SG) * wG._x, LG._y = 6 * (yG - SG) * GG._y + (3 * yG - 4 * SG + 1) * bG._y + 6 * (-yG + SG) * ZG._y + (3 * yG - 2 * SG) * wG._y, LG._z = 6 * (yG - SG) * GG._z + (3 * yG - 4 * SG + 1) * bG._z + 6 * (-yG + SG) * ZG._z + (3 * yG - 2 * SG) * wG._z, LG._w = 6 * (yG - SG) * GG._w + (3 * yG - 4 * SG + 1) * bG._w + 6 * (-yG + SG) * ZG._w + (3 * yG - 2 * SG) * wG._w, LG._isDirty = !0, LG
      }
      static Normalize(GG) {
        const bG = KG.Zero();
        return KG.NormalizeToRef(GG, bG), bG
      }
      static NormalizeToRef(GG, bG) {
        return GG.normalizeToRef(bG), bG
      }
      static Clamp(GG, bG, ZG) {
        const wG = new KG;
        return KG.ClampToRef(GG, bG, ZG, wG), wG
      }
      static ClampToRef(GG, bG, ZG, wG) {
        return wG.fGG((0, kG.Clamp)(GG.x, bG.x, ZG.x), (0, kG.Clamp)(GG.y, bG.y, ZG.y), (0, kG.Clamp)(GG.z, bG.z, ZG.z), (0, kG.Clamp)(GG.w, bG.w, ZG.w))
      }
      static Random() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new KG((0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG))
      }
      static RandomToRef() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).fGG((0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG), (0, kG.RandomRange)(GG, bG))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(GG, bG) {
        return Math.sqrt(KG.DistanceSquared(GG, bG))
      }
      static DistanceSquared(GG, bG) {
        const ZG = GG.x - bG.x,
          wG = GG.y - bG.y,
          SG = GG.z - bG.z,
          LG = GG.w - bG.w;
        return ZG * ZG + wG * wG + SG * SG + LG * LG
      }
      static Center(GG, bG) {
        return KG.CenterToRef(GG, bG, KG.Zero())
      }
      static CenterToRef(GG, bG, ZG) {
        return ZG.fGG((GG.x + bG.x) / 2, (GG.y + bG.y) / 2, (GG.z + bG.z) / 2, (GG.w + bG.w) / 2)
      }
    }
    KG._V8PerformanceHack = new KG(.5, .5, .5, .5);
    class hG {
      static get Use64Bits() {
        return LG.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = UG.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wG = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = GG, this._isIdentity3x2 = GG || ZG, this._isIdentityDirty = !this._isIdentity && bG, this._isIdentity3x2Dirty = !this._isIdentity3x2 && wG
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, LG.c.MatrixTrackPrecisionChange && LG.c.MatrixTrackedMatrices.push(this), this._m = new LG.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const GG = this._m;
          this._isIdentity = 1 === GG[0] && 0 === GG[1] && 0 === GG[2] && 0 === GG[3] && 0 === GG[4] && 1 === GG[5] && 0 === GG[6] && 0 === GG[7] && 0 === GG[8] && 0 === GG[9] && 1 === GG[10] && 0 === GG[11] && 0 === GG[12] && 0 === GG[13] && 0 === GG[14] && 1 === GG[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const GG = this._m,
          bG = GG[0],
          ZG = GG[1],
          wG = GG[2],
          SG = GG[3],
          LG = GG[4],
          yG = GG[5],
          kG = GG[6],
          UG = GG[7],
          YG = GG[8],
          VG = GG[9],
          pG = GG[10],
          fG = GG[11],
          QG = GG[12],
          KG = GG[13],
          hG = GG[14],
          dG = GG[15],
          JG = pG * dG - hG * fG,
          rG = VG * dG - KG * fG,
          zG = VG * hG - KG * pG,
          EG = YG * dG - QG * fG,
          oG = YG * hG - pG * QG,
          XG = YG * KG - QG * VG;
        return bG * +(yG * JG - kG * rG + UG * zG) + ZG * -(LG * JG - kG * EG + UG * oG) + wG * +(LG * rG - yG * EG + UG * XG) + SG * -(LG * zG - yG * oG + kG * XG)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!GG) return this._m;
        const ZG = this._m;
        for (let wG = 0; wG < 16; wG++) GG[bG + wG] = ZG[wG];
        return this
      }
      mwG() {
        return this._m
      }
      hZG(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return hG.FromArrayToRef(GG, bG, this)
      }
      fGG() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        return hG.FromArrayToRef(bG, 0, this)
      }
      set() {
        const GG = this._m;
        for (let bG = 0; bG < 16; bG++) GG[bG] = bG < 0 || arguments.length <= bG ? void 0 : arguments[bG];
        return this.markAsUpdated(), this
      }
      N7(GG) {
        const bG = this._m;
        for (let ZG = 0; ZG < 16; ZG++) bG[ZG] = GG;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return hG.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(GG) {
        const bG = new hG;
        return this.addToRef(GG, bG), bG
      }
      addToRef(GG, bG) {
        const ZG = this._m,
          wG = bG._m,
          SG = GG.m;
        for (let LG = 0; LG < 16; LG++) wG[LG] = ZG[LG] + SG[LG];
        return bG.markAsUpdated(), bG
      }
      addToSelf(GG) {
        const bG = this._m,
          ZG = GG.m;
        return bG[0] += ZG[0], bG[1] += ZG[1], bG[2] += ZG[2], bG[3] += ZG[3], bG[4] += ZG[4], bG[5] += ZG[5], bG[6] += ZG[6], bG[7] += ZG[7], bG[8] += ZG[8], bG[9] += ZG[9], bG[10] += ZG[10], bG[11] += ZG[11], bG[12] += ZG[12], bG[13] += ZG[13], bG[14] += ZG[14], bG[15] += ZG[15], this.markAsUpdated(), this
      }
      addInPlace(GG) {
        const bG = this._m,
          ZG = GG.m;
        for (let wG = 0; wG < 16; wG++) bG[wG] += ZG[wG];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const GG = this._m;
        for (let bG = 0; bG < 16; bG++) GG[bG] += bG < 0 || arguments.length <= bG ? void 0 : arguments[bG];
        return this.markAsUpdated(), this
      }
      subtract(GG) {
        const bG = this._m,
          ZG = GG.m;
        for (let wG = 0; wG < 16; wG++) bG[wG] -= ZG[wG];
        return this.markAsUpdated(), this
      }
      subtractToRef(GG, bG) {
        const ZG = this._m,
          wG = GG.m,
          SG = bG._m;
        for (let LG = 0; LG < 16; LG++) SG[LG] = ZG[LG] - wG[LG];
        return bG.markAsUpdated(), bG
      }
      twG(GG) {
        const bG = this._m,
          ZG = GG.m;
        for (let wG = 0; wG < 16; wG++) bG[wG] -= ZG[wG];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        return this.subtractFromFloatsToRef(...bG, new hG)
      }
      subtractFromFloatsToRef() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        const wG = bG.pop(),
          SG = this._m,
          LG = wG._m,
          yG = bG;
        for (let kG = 0; kG < 16; kG++) LG[kG] = SG[kG] - yG[kG];
        return wG.markAsUpdated(), wG
      }
      invertToRef(GG) {
        return !0 === this._isIdentity ? (hG.IdentityToRef(GG), GG) : ((0, UG.c)(this, GG.mwG()) ? GG.markAsUpdated() : GG.oW(this), GG)
      }
      addAtIndex(GG, bG) {
        return this._m[GG] += bG, this.markAsUpdated(), this
      }
      multiplyAtIndex(GG, bG) {
        return this._m[GG] *= bG, this.markAsUpdated(), this
      }
      setTranslationFromFloats(GG, bG, ZG) {
        return this._m[12] = GG, this._m[13] = bG, this._m[14] = ZG, this.markAsUpdated(), this
      }
      addTranslationFromFloats(GG, bG, ZG) {
        return this._m[12] += GG, this._m[13] += bG, this._m[14] += ZG, this.markAsUpdated(), this
      }
      setTranslation(GG) {
        return this.setTranslationFromFloats(GG._x, GG._y, GG._z)
      }
      getTranslation() {
        return new fG(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(GG) {
        return GG.x = this._m[12], GG.y = this._m[13], GG.z = this._m[14], GG
      }
      removeRotationAndScaling() {
        const GG = this.m;
        return hG.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, GG[12], GG[13], GG[14], GG[15], this), this._updateIdentityStatus(0 === GG[12] && 0 === GG[13] && 0 === GG[14] && 1 === GG[15]), this
      }
      oW(GG) {
        GG.copyToArray(this._m);
        const bG = GG;
        return this.updateFlag = bG.updateFlag, this._updateIdentityStatus(bG._isIdentity, bG._isIdentityDirty, bG._isIdentity3x2, bG._isIdentity3x2Dirty), this
      }
      copyToArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, UG.b)(this, GG, bG), this
      }
      multiply(GG) {
        const bG = new hG;
        return this.multiplyToRef(GG, bG), bG
      }
      multiplyInPlace(GG) {
        const bG = this._m,
          ZG = GG.m;
        for (let wG = 0; wG < 16; wG++) bG[wG] *= ZG[wG];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const GG = this._m;
        for (let bG = 0; bG < 16; bG++) GG[bG] *= bG < 0 || arguments.length <= bG ? void 0 : arguments[bG];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var GG = arguments.length, bG = new Array(GG), ZG = 0; ZG < GG; ZG++) bG[ZG] = arguments[ZG];
        const wG = bG.pop(),
          SG = this._m,
          LG = wG._m,
          yG = bG;
        for (let kG = 0; kG < 16; kG++) LG[kG] = SG[kG] * yG[kG];
        return wG.markAsUpdated(), wG
      }
      multiplyToRef(GG, bG) {
        return this._isIdentity ? (bG.oW(GG), bG) : GG._isIdentity ? (bG.oW(this), bG) : (this.multiplyToArray(GG, bG._m, 0), bG.markAsUpdated(), bG)
      }
      multiplyToArray(GG, bG, ZG) {
        return (0, UG.l)(this, GG, bG, ZG), this
      }
      divide(GG) {
        return this.divideToRef(GG, new hG)
      }
      divideToRef(GG, bG) {
        const ZG = this._m,
          wG = GG.m,
          SG = bG._m;
        for (let LG = 0; LG < 16; LG++) SG[LG] = ZG[LG] / wG[LG];
        return bG.markAsUpdated(), bG
      }
      divideInPlace(GG) {
        const bG = this._m,
          ZG = GG.m;
        for (let wG = 0; wG < 16; wG++) bG[wG] /= ZG[wG];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(GG) {
        const bG = this._m,
          ZG = GG.m;
        for (let wG = 0; wG < 16; wG++) bG[wG] = Math.min(bG[wG], ZG[wG]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const GG = this._m;
        for (let bG = 0; bG < 16; bG++) GG[bG] = Math.min(GG[bG], bG < 0 || arguments.length <= bG ? void 0 : arguments[bG]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(GG) {
        const bG = this._m,
          ZG = GG.m;
        for (let wG = 0; wG < 16; wG++) bG[wG] = Math.max(bG[wG], ZG[wG]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const GG = this._m;
        for (let bG = 0; bG < 16; bG++) GG[bG] = Math.max(GG[bG], bG < 0 || arguments.length <= bG ? void 0 : arguments[bG]);
        return this.markAsUpdated(), this
      }
      By() {
        return this.negateToRef(new hG)
      }
      negateInPlace() {
        const GG = this._m;
        for (let bG = 0; bG < 16; bG++) GG[bG] = -GG[bG];
        return this.markAsUpdated(), this
      }
      negateToRef(GG) {
        const bG = this._m,
          ZG = GG._m;
        for (let wG = 0; wG < 16; wG++) ZG[wG] = -bG[wG];
        return GG.markAsUpdated(), GG
      }
      equals(GG) {
        const bG = GG;
        if (!bG) return !1;
        if ((this._isIdentity || bG._isIdentity) && !this._isIdentityDirty && !bG._isIdentityDirty) return this._isIdentity && bG._isIdentity;
        const ZG = this.m,
          wG = bG.m;
        return ZG[0] === wG[0] && ZG[1] === wG[1] && ZG[2] === wG[2] && ZG[3] === wG[3] && ZG[4] === wG[4] && ZG[5] === wG[5] && ZG[6] === wG[6] && ZG[7] === wG[7] && ZG[8] === wG[8] && ZG[9] === wG[9] && ZG[10] === wG[10] && ZG[11] === wG[11] && ZG[12] === wG[12] && ZG[13] === wG[13] && ZG[14] === wG[14] && ZG[15] === wG[15]
      }
      equalsWithEpsilon(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = this._m,
          wG = GG.m;
        for (let SG = 0; SG < 16; SG++)
          if (!(0, kG.WithinEpsilon)(ZG[SG], wG[SG], bG)) return !1;
        return !0
      }
      ZkG() {
        const GG = this._m;
        for (let bG = 0; bG < 16; bG++)
          if (GG[bG] != (bG < 0 || arguments.length <= bG ? void 0 : arguments[bG])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new hG)
      }
      floorToRef(GG) {
        const bG = this._m,
          ZG = GG._m;
        for (let wG = 0; wG < 16; wG++) ZG[wG] = Math.floor(bG[wG]);
        return GG.markAsUpdated(), GG
      }
      fract() {
        return this.fractToRef(new hG)
      }
      fractToRef(GG) {
        const bG = this._m,
          ZG = GG._m;
        for (let wG = 0; wG < 16; wG++) ZG[wG] = bG[wG] - Math.floor(bG[wG]);
        return GG.markAsUpdated(), GG
      }
      clone() {
        const GG = new hG;
        return GG.oW(this), GG
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let GG = VG(this._m[0]);
        for (let bG = 1; bG < 16; bG++) GG = 397 * GG ^ VG(this._m[bG]);
        return GG
      }
      decomposeToTransformNode(GG) {
        return GG.rotationQuaternion = GG.rotationQuaternion || new KG, this.decompose(GG.nY, GG.rotationQuaternion, GG.position)
      }
      decompose(GG, bG, ZG, wG) {
        let SG = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return ZG && ZG.N7(0), GG && GG.N7(1), bG && bG.fGG(0, 0, 0, 1), !0;
        const LG = this._m;
        if (ZG && ZG.fGG(LG[12], LG[13], LG[14]), (GG = GG || dG.mK[0]).x = Math.sqrt(LG[0] * LG[0] + LG[1] * LG[1] + LG[2] * LG[2]), GG.y = Math.sqrt(LG[4] * LG[4] + LG[5] * LG[5] + LG[6] * LG[6]), GG.z = Math.sqrt(LG[8] * LG[8] + LG[9] * LG[9] + LG[10] * LG[10]), wG) {
          const bG = (SG ? wG.absoluteScaling.x : wG.nY.x) < 0 ? -1 : 1,
            ZG = (SG ? wG.absoluteScaling.y : wG.nY.y) < 0 ? -1 : 1,
            LG = (SG ? wG.absoluteScaling.z : wG.nY.z) < 0 ? -1 : 1;
          GG.x *= bG, GG.y *= ZG, GG.z *= LG
        } else this.determinant() <= 0 && (GG.y *= -1);
        if (0 === GG._x || 0 === GG._y || 0 === GG._z) return bG && bG.fGG(0, 0, 0, 1), !1;
        if (bG) {
          const ZG = 1 / GG._x,
            wG = 1 / GG._y,
            SG = 1 / GG._z;
          hG.FromValuesToRef(LG[0] * ZG, LG[1] * ZG, LG[2] * ZG, 0, LG[4] * wG, LG[5] * wG, LG[6] * wG, 0, LG[8] * SG, LG[9] * SG, LG[10] * SG, 0, 0, 0, 0, 1, dG.Matrix[0]), KG.FromRotationMatrixToRef(dG.Matrix[0], bG)
        }
        return !0
      }
      getRow(GG) {
        if (GG < 0 || GG > 3) return null;
        const bG = 4 * GG;
        return new QG(this._m[bG + 0], this._m[bG + 1], this._m[bG + 2], this._m[bG + 3])
      }
      getRowToRef(GG, bG) {
        if (GG >= 0 && GG <= 3) {
          const ZG = 4 * GG;
          bG.x = this._m[ZG + 0], bG.y = this._m[ZG + 1], bG.z = this._m[ZG + 2], bG.w = this._m[ZG + 3]
        }
        return bG
      }
      setRow(GG, bG) {
        return this.setRowFromFloats(GG, bG.x, bG.y, bG.z, bG.w)
      }
      transpose() {
        const GG = new hG;
        return hG.TransposeToRef(this, GG), GG
      }
      transposeToRef(GG) {
        return hG.TransposeToRef(this, GG), GG
      }
      setRowFromFloats(GG, bG, ZG, wG, SG) {
        if (GG < 0 || GG > 3) return this;
        const LG = 4 * GG;
        return this._m[LG + 0] = bG, this._m[LG + 1] = ZG, this._m[LG + 2] = wG, this._m[LG + 3] = SG, this.markAsUpdated(), this
      }
      scale(GG) {
        const bG = new hG;
        return this.scaleToRef(GG, bG), bG
      }
      scaleToRef(GG, bG) {
        for (let ZG = 0; ZG < 16; ZG++) bG._m[ZG] = this._m[ZG] * GG;
        return bG.markAsUpdated(), bG
      }
      scaleAndAddToRef(GG, bG) {
        for (let ZG = 0; ZG < 16; ZG++) bG._m[ZG] += this._m[ZG] * GG;
        return bG.markAsUpdated(), bG
      }
      scaleInPlace(GG) {
        const bG = this._m;
        for (let ZG = 0; ZG < 16; ZG++) bG[ZG] *= GG;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(GG) {
        const bG = dG.Matrix[0];
        this.invertToRef(bG), bG.transposeToRef(GG);
        const ZG = GG._m;
        return hG.FromValuesToRef(ZG[0], ZG[1], ZG[2], 0, ZG[4], ZG[5], ZG[6], 0, ZG[8], ZG[9], ZG[10], 0, 0, 0, 0, 1, GG), GG
      }
      getRotationMatrix() {
        const GG = new hG;
        return this.getRotationMatrixToRef(GG), GG
      }
      getRotationMatrixToRef(GG) {
        const bG = dG.mK[0];
        if (!this.decompose(bG)) return hG.IdentityToRef(GG), GG;
        const ZG = this._m,
          wG = 1 / bG._x,
          SG = 1 / bG._y,
          LG = 1 / bG._z;
        return hG.FromValuesToRef(ZG[0] * wG, ZG[1] * wG, ZG[2] * wG, 0, ZG[4] * SG, ZG[5] * SG, ZG[6] * SG, 0, ZG[8] * LG, ZG[9] * LG, ZG[10] * LG, 0, 0, 0, 0, 1, GG), GG
      }
      toggleModelMatrixHandInPlace() {
        const GG = this._m;
        return GG[2] *= -1, GG[6] *= -1, GG[8] *= -1, GG[9] *= -1, GG[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const GG = this._m;
        return GG[8] *= -1, GG[9] *= -1, GG[10] *= -1, GG[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(rG, this), this
      }
      static FromArray(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ZG = new hG;
        return hG.FromArrayToRef(GG, bG, ZG), ZG
      }
      static FromArrayToRef(GG, bG, ZG) {
        for (let wG = 0; wG < 16; wG++) ZG._m[wG] = GG[wG + bG];
        return ZG.markAsUpdated(), ZG
      }
      static FromFloat32ArrayToRefScaled(GG, bG, ZG, wG) {
        return wG._m[0] = GG[0 + bG] * ZG, wG._m[1] = GG[1 + bG] * ZG, wG._m[2] = GG[2 + bG] * ZG, wG._m[3] = GG[3 + bG] * ZG, wG._m[4] = GG[4 + bG] * ZG, wG._m[5] = GG[5 + bG] * ZG, wG._m[6] = GG[6 + bG] * ZG, wG._m[7] = GG[7 + bG] * ZG, wG._m[8] = GG[8 + bG] * ZG, wG._m[9] = GG[9 + bG] * ZG, wG._m[10] = GG[10 + bG] * ZG, wG._m[11] = GG[11 + bG] * ZG, wG._m[12] = GG[12 + bG] * ZG, wG._m[13] = GG[13 + bG] * ZG, wG._m[14] = GG[14 + bG] * ZG, wG._m[15] = GG[15 + bG] * ZG, wG.markAsUpdated(), wG
      }
      static get IdentityReadOnly() {
        return hG._IdentityReadOnly
      }
      static FromValuesToRef(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, hG, dG) {
        const JG = dG._m;
        JG[0] = GG, JG[1] = bG, JG[2] = ZG, JG[3] = wG, JG[4] = SG, JG[5] = LG, JG[6] = yG, JG[7] = kG, JG[8] = UG, JG[9] = YG, JG[10] = VG, JG[11] = pG, JG[12] = fG, JG[13] = QG, JG[14] = KG, JG[15] = hG, dG.markAsUpdated()
      }
      static FromValues(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG, pG, fG, QG, KG, dG) {
        const JG = new hG,
          rG = JG._m;
        return rG[0] = GG, rG[1] = bG, rG[2] = ZG, rG[3] = wG, rG[4] = SG, rG[5] = LG, rG[6] = yG, rG[7] = kG, rG[8] = UG, rG[9] = YG, rG[10] = VG, rG[11] = pG, rG[12] = fG, rG[13] = QG, rG[14] = KG, rG[15] = dG, JG.markAsUpdated(), JG
      }
      static Compose(GG, bG, ZG) {
        const wG = new hG;
        return hG.ComposeToRef(GG, bG, ZG, wG), wG
      }
      static ComposeToRef(GG, bG, ZG, wG) {
        const SG = wG._m,
          LG = bG._x,
          yG = bG._y,
          kG = bG._z,
          UG = bG._w,
          YG = LG + LG,
          VG = yG + yG,
          pG = kG + kG,
          fG = LG * YG,
          QG = LG * VG,
          KG = LG * pG,
          hG = yG * VG,
          dG = yG * pG,
          JG = kG * pG,
          rG = UG * YG,
          zG = UG * VG,
          EG = UG * pG,
          oG = GG._x,
          XG = GG._y,
          uG = GG._z;
        return SG[0] = (1 - (hG + JG)) * oG, SG[1] = (QG + EG) * oG, SG[2] = (KG - zG) * oG, SG[3] = 0, SG[4] = (QG - EG) * XG, SG[5] = (1 - (fG + JG)) * XG, SG[6] = (dG + rG) * XG, SG[7] = 0, SG[8] = (KG + zG) * uG, SG[9] = (dG - rG) * uG, SG[10] = (1 - (fG + hG)) * uG, SG[11] = 0, SG[12] = ZG._x, SG[13] = ZG._y, SG[14] = ZG._z, SG[15] = 1, wG.markAsUpdated(), wG
      }
      static Identity() {
        const GG = hG.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return GG._updateIdentityStatus(!0), GG
      }
      static IdentityToRef(GG) {
        return hG.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, GG), GG._updateIdentityStatus(!0), GG
      }
      static Zero() {
        const GG = hG.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return GG._updateIdentityStatus(!1), GG
      }
      static RotationX(GG) {
        const bG = new hG;
        return hG.RotationXToRef(GG, bG), bG
      }
      static Invert(GG) {
        const bG = new hG;
        return GG.invertToRef(bG), bG
      }
      static RotationXToRef(GG, bG) {
        const ZG = Math.sin(GG),
          wG = Math.cos(GG);
        return hG.FromValuesToRef(1, 0, 0, 0, 0, wG, ZG, 0, 0, -ZG, wG, 0, 0, 0, 0, 1, bG), bG._updateIdentityStatus(1 === wG && 0 === ZG), bG
      }
      static RotationY(GG) {
        const bG = new hG;
        return hG.RotationYToRef(GG, bG), bG
      }
      static RotationYToRef(GG, bG) {
        const ZG = Math.sin(GG),
          wG = Math.cos(GG);
        return hG.FromValuesToRef(wG, 0, -ZG, 0, 0, 1, 0, 0, ZG, 0, wG, 0, 0, 0, 0, 1, bG), bG._updateIdentityStatus(1 === wG && 0 === ZG), bG
      }
      static RotationZ(GG) {
        const bG = new hG;
        return hG.RotationZToRef(GG, bG), bG
      }
      static RotationZToRef(GG, bG) {
        const ZG = Math.sin(GG),
          wG = Math.cos(GG);
        return hG.FromValuesToRef(wG, ZG, 0, 0, -ZG, wG, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, bG), bG._updateIdentityStatus(1 === wG && 0 === ZG), bG
      }
      static RotationAxis(GG, bG) {
        const ZG = new hG;
        return hG.RotationAxisToRef(GG, bG, ZG), ZG
      }
      static RotationAxisToRef(GG, bG, ZG) {
        const wG = Math.sin(-bG),
          SG = Math.cos(-bG),
          LG = 1 - SG;
        GG = GG.normalizeToRef(dG.mK[0]);
        const yG = ZG._m;
        return yG[0] = GG._x * GG._x * LG + SG, yG[1] = GG._x * GG._y * LG - GG._z * wG, yG[2] = GG._x * GG._z * LG + GG._y * wG, yG[3] = 0, yG[4] = GG._y * GG._x * LG + GG._z * wG, yG[5] = GG._y * GG._y * LG + SG, yG[6] = GG._y * GG._z * LG - GG._x * wG, yG[7] = 0, yG[8] = GG._z * GG._x * LG - GG._y * wG, yG[9] = GG._z * GG._y * LG + GG._x * wG, yG[10] = GG._z * GG._z * LG + SG, yG[11] = 0, yG[12] = 0, yG[13] = 0, yG[14] = 0, yG[15] = 1, ZG.markAsUpdated(), ZG
      }
      static RotationAlignToRef(GG, bG, ZG) {
        let SG = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const LG = fG.Dot(bG, GG),
          yG = ZG._m;
        if (LG < -1 + wG.d) yG[0] = -1, yG[1] = 0, yG[2] = 0, yG[3] = 0, yG[4] = 0, yG[5] = SG ? 1 : -1, yG[6] = 0, yG[7] = 0, yG[8] = 0, yG[9] = 0, yG[10] = SG ? -1 : 1, yG[11] = 0;
        else {
          const ZG = fG.Cross(bG, GG),
            wG = 1 / (1 + LG);
          yG[0] = ZG._x * ZG._x * wG + LG, yG[1] = ZG._y * ZG._x * wG - ZG._z, yG[2] = ZG._z * ZG._x * wG + ZG._y, yG[3] = 0, yG[4] = ZG._x * ZG._y * wG + ZG._z, yG[5] = ZG._y * ZG._y * wG + LG, yG[6] = ZG._z * ZG._y * wG - ZG._x, yG[7] = 0, yG[8] = ZG._x * ZG._z * wG - ZG._y, yG[9] = ZG._y * ZG._z * wG + ZG._x, yG[10] = ZG._z * ZG._z * wG + LG, yG[11] = 0
        }
        return yG[12] = 0, yG[13] = 0, yG[14] = 0, yG[15] = 1, ZG.markAsUpdated(), ZG
      }
      static RotationYawPitchRoll(GG, bG, ZG) {
        const wG = new hG;
        return hG.RotationYawPitchRollToRef(GG, bG, ZG, wG), wG
      }
      static RotationYawPitchRollToRef(GG, bG, ZG, wG) {
        return KG.RotationYawPitchRollToRef(GG, bG, ZG, dG.Quaternion[0]), dG.Quaternion[0].toRotationMatrix(wG), wG
      }
      static Scaling(GG, bG, ZG) {
        const wG = new hG;
        return hG.ScalingToRef(GG, bG, ZG, wG), wG
      }
      static ScalingToRef(GG, bG, ZG, wG) {
        return hG.FromValuesToRef(GG, 0, 0, 0, 0, bG, 0, 0, 0, 0, ZG, 0, 0, 0, 0, 1, wG), wG._updateIdentityStatus(1 === GG && 1 === bG && 1 === ZG), wG
      }
      static Translation(GG, bG, ZG) {
        const wG = new hG;
        return hG.TranslationToRef(GG, bG, ZG, wG), wG
      }
      static TranslationToRef(GG, bG, ZG, wG) {
        return hG.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, GG, bG, ZG, 1, wG), wG._updateIdentityStatus(0 === GG && 0 === bG && 0 === ZG), wG
      }
      static Lerp(GG, bG, ZG) {
        const wG = new hG;
        return hG.LerpToRef(GG, bG, ZG, wG), wG
      }
      static LerpToRef(GG, bG, ZG, wG) {
        const SG = wG._m,
          LG = GG.m,
          yG = bG.m;
        for (let kG = 0; kG < 16; kG++) SG[kG] = LG[kG] * (1 - ZG) + yG[kG] * ZG;
        return wG.markAsUpdated(), wG
      }
      static DecomposeLerp(GG, bG, ZG) {
        const wG = new hG;
        return hG.DecomposeLerpToRef(GG, bG, ZG, wG), wG
      }
      static DecomposeLerpToRef(GG, bG, ZG, wG) {
        const SG = dG.mK[0],
          LG = dG.Quaternion[0],
          yG = dG.mK[1];
        GG.decompose(SG, LG, yG);
        const kG = dG.mK[2],
          UG = dG.Quaternion[1],
          YG = dG.mK[3];
        bG.decompose(kG, UG, YG);
        const VG = dG.mK[4];
        fG.LerpToRef(SG, kG, ZG, VG);
        const pG = dG.Quaternion[2];
        KG.SlerpToRef(LG, UG, ZG, pG);
        const QG = dG.mK[5];
        return fG.LerpToRef(yG, YG, ZG, QG), hG.ComposeToRef(VG, pG, QG, wG), wG
      }
      static LookAtLH(GG, bG, ZG) {
        const wG = new hG;
        return hG.LookAtLHToRef(GG, bG, ZG, wG), wG
      }
      static LookAtLHToRef(GG, bG, ZG, wG) {
        const SG = dG.mK[0],
          LG = dG.mK[1],
          yG = dG.mK[2];
        bG.subtractToRef(GG, yG), yG.normalize(), fG.CrossToRef(ZG, yG, SG);
        const kG = SG.lengthSquared();
        0 === kG ? SG.x = 1 : SG.normalizeFromLength(Math.sqrt(kG)), fG.CrossToRef(yG, SG, LG), LG.normalize();
        const UG = -fG.Dot(SG, GG),
          YG = -fG.Dot(LG, GG),
          VG = -fG.Dot(yG, GG);
        return hG.FromValuesToRef(SG._x, LG._x, yG._x, 0, SG._y, LG._y, yG._y, 0, SG._z, LG._z, yG._z, 0, UG, YG, VG, 1, wG), wG
      }
      static LookAtRH(GG, bG, ZG) {
        const wG = new hG;
        return hG.LookAtRHToRef(GG, bG, ZG, wG), wG
      }
      static LookAtRHToRef(GG, bG, ZG, wG) {
        const SG = dG.mK[0],
          LG = dG.mK[1],
          yG = dG.mK[2];
        GG.subtractToRef(bG, yG), yG.normalize(), fG.CrossToRef(ZG, yG, SG);
        const kG = SG.lengthSquared();
        0 === kG ? SG.x = 1 : SG.normalizeFromLength(Math.sqrt(kG)), fG.CrossToRef(yG, SG, LG), LG.normalize();
        const UG = -fG.Dot(SG, GG),
          YG = -fG.Dot(LG, GG),
          VG = -fG.Dot(yG, GG);
        return hG.FromValuesToRef(SG._x, LG._x, yG._x, 0, SG._y, LG._y, yG._y, 0, SG._z, LG._z, yG._z, 0, UG, YG, VG, 1, wG), wG
      }
      static LookDirectionLH(GG, bG) {
        const ZG = new hG;
        return hG.LookDirectionLHToRef(GG, bG, ZG), ZG
      }
      static LookDirectionLHToRef(GG, bG, ZG) {
        const wG = dG.mK[0];
        wG.oW(GG), wG.scaleInPlace(-1);
        const SG = dG.mK[1];
        return fG.CrossToRef(bG, wG, SG), hG.FromValuesToRef(SG._x, SG._y, SG._z, 0, bG._x, bG._y, bG._z, 0, wG._x, wG._y, wG._z, 0, 0, 0, 0, 1, ZG), ZG
      }
      static LookDirectionRH(GG, bG) {
        const ZG = new hG;
        return hG.LookDirectionRHToRef(GG, bG, ZG), ZG
      }
      static LookDirectionRHToRef(GG, bG, ZG) {
        const wG = dG.mK[2];
        return fG.CrossToRef(bG, GG, wG), hG.FromValuesToRef(wG._x, wG._y, wG._z, 0, bG._x, bG._y, bG._z, 0, GG._x, GG._y, GG._z, 0, 0, 0, 0, 1, ZG), ZG
      }
      static OrthoLH(GG, bG, ZG, wG, SG) {
        const LG = new hG;
        return hG.OrthoLHToRef(GG, bG, ZG, wG, LG, SG), LG
      }
      static OrthoLHToRef(GG, bG, ZG, wG, SG, LG) {
        const yG = 2 / GG,
          kG = 2 / bG,
          UG = 2 / (wG - ZG),
          YG = -(wG + ZG) / (wG - ZG);
        return hG.FromValuesToRef(yG, 0, 0, 0, 0, kG, 0, 0, 0, 0, UG, 0, 0, 0, YG, 1, SG), LG && SG.multiplyToRef(rG, SG), SG._updateIdentityStatus(1 === yG && 1 === kG && 1 === UG && 0 === YG), SG
      }
      static OrthoOffCenterLH(GG, bG, ZG, wG, SG, LG, yG) {
        const kG = new hG;
        return hG.OrthoOffCenterLHToRef(GG, bG, ZG, wG, SG, LG, kG, yG), kG
      }
      static OrthoOffCenterLHToRef(GG, bG, ZG, wG, SG, LG, yG, kG) {
        const UG = 2 / (bG - GG),
          YG = 2 / (wG - ZG),
          VG = 2 / (LG - SG),
          pG = -(LG + SG) / (LG - SG),
          fG = (GG + bG) / (GG - bG),
          QG = (wG + ZG) / (ZG - wG);
        return hG.FromValuesToRef(UG, 0, 0, 0, 0, YG, 0, 0, 0, 0, VG, 0, fG, QG, pG, 1, yG), kG && yG.multiplyToRef(rG, yG), yG.markAsUpdated(), yG
      }
      static ObliqueOffCenterLHToRef(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
        const pG = -yG * Math.cos(kG),
          fG = -yG * Math.sin(kG);
        return hG.TranslationToRef(0, 0, -UG, dG.Matrix[1]), hG.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pG, fG, 1, 0, 0, 0, 0, 1, dG.Matrix[0]), dG.Matrix[1].multiplyToRef(dG.Matrix[0], dG.Matrix[0]), hG.TranslationToRef(0, 0, UG, dG.Matrix[1]), dG.Matrix[0].multiplyToRef(dG.Matrix[1], dG.Matrix[0]), hG.OrthoOffCenterLHToRef(GG, bG, ZG, wG, SG, LG, YG, VG), dG.Matrix[0].multiplyToRef(YG, YG), YG
      }
      static OrthoOffCenterRH(GG, bG, ZG, wG, SG, LG, yG) {
        const kG = new hG;
        return hG.OrthoOffCenterRHToRef(GG, bG, ZG, wG, SG, LG, kG, yG), kG
      }
      static OrthoOffCenterRHToRef(GG, bG, ZG, wG, SG, LG, yG, kG) {
        return hG.OrthoOffCenterLHToRef(GG, bG, ZG, wG, SG, LG, yG, kG), yG._m[10] *= -1, yG
      }
      static ObliqueOffCenterRHToRef(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
        const pG = yG * Math.cos(kG),
          fG = yG * Math.sin(kG);
        return hG.TranslationToRef(0, 0, UG, dG.Matrix[1]), hG.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pG, fG, 1, 0, 0, 0, 0, 1, dG.Matrix[0]), dG.Matrix[1].multiplyToRef(dG.Matrix[0], dG.Matrix[0]), hG.TranslationToRef(0, 0, -UG, dG.Matrix[1]), dG.Matrix[0].multiplyToRef(dG.Matrix[1], dG.Matrix[0]), hG.OrthoOffCenterRHToRef(GG, bG, ZG, wG, SG, LG, YG, VG), dG.Matrix[0].multiplyToRef(YG, YG), YG
      }
      static PerspectiveLH(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const yG = new hG,
          kG = 2 * ZG / GG,
          UG = 2 * ZG / bG,
          YG = (wG + ZG) / (wG - ZG),
          VG = -2 * wG * ZG / (wG - ZG),
          pG = Math.tan(LG);
        return hG.FromValuesToRef(kG, 0, 0, 0, 0, UG, 0, pG, 0, 0, YG, 1, 0, 0, VG, 0, yG), SG && yG.multiplyToRef(rG, yG), yG._updateIdentityStatus(!1), yG
      }
      static PerspectiveFovLH(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const kG = new hG;
        return hG.PerspectiveFovLHToRef(GG, bG, ZG, wG, kG, !0, SG, LG, yG), kG
      }
      static PerspectiveFovLHToRef(GG, bG, ZG, wG, SG) {
        let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yG = arguments.length > 6 ? arguments[6] : void 0,
          kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const YG = ZG,
          VG = wG,
          pG = 1 / Math.tan(.5 * GG),
          fG = LG ? pG / bG : pG,
          QG = LG ? pG : pG * bG,
          KG = UG && 0 === YG ? -1 : 0 !== VG ? (VG + YG) / (VG - YG) : 1,
          dG = UG && 0 === YG ? 2 * VG : 0 !== VG ? -2 * VG * YG / (VG - YG) : -2 * YG,
          JG = Math.tan(kG);
        return hG.FromValuesToRef(fG, 0, 0, 0, 0, QG, 0, JG, 0, 0, KG, 1, 0, 0, dG, 0, SG), yG && SG.multiplyToRef(rG, SG), SG._updateIdentityStatus(!1), SG
      }
      static PerspectiveFovReverseLHToRef(GG, bG, ZG, wG, SG) {
        let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yG = arguments.length > 6 ? arguments[6] : void 0,
          kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const UG = 1 / Math.tan(.5 * GG),
          YG = LG ? UG / bG : UG,
          VG = LG ? UG : UG * bG,
          pG = Math.tan(kG);
        return hG.FromValuesToRef(YG, 0, 0, 0, 0, VG, 0, pG, 0, 0, -ZG, 1, 0, 0, 1, 0, SG), yG && SG.multiplyToRef(rG, SG), SG._updateIdentityStatus(!1), SG
      }
      static PerspectiveFovRH(GG, bG, ZG, wG, SG) {
        let LG = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yG = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const kG = new hG;
        return hG.PerspectiveFovRHToRef(GG, bG, ZG, wG, kG, !0, SG, LG, yG), kG
      }
      static PerspectiveFovRHToRef(GG, bG, ZG, wG, SG) {
        let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yG = arguments.length > 6 ? arguments[6] : void 0,
          kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          UG = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const YG = ZG,
          VG = wG,
          pG = 1 / Math.tan(.5 * GG),
          fG = LG ? pG / bG : pG,
          QG = LG ? pG : pG * bG,
          KG = UG && 0 === YG ? 1 : 0 !== VG ? -(VG + YG) / (VG - YG) : -1,
          dG = UG && 0 === YG ? 2 * VG : 0 !== VG ? -2 * VG * YG / (VG - YG) : -2 * YG,
          JG = Math.tan(kG);
        return hG.FromValuesToRef(fG, 0, 0, 0, 0, QG, 0, JG, 0, 0, KG, -1, 0, 0, dG, 0, SG), yG && SG.multiplyToRef(rG, SG), SG._updateIdentityStatus(!1), SG
      }
      static PerspectiveFovReverseRHToRef(GG, bG, ZG, wG, SG) {
        let LG = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yG = arguments.length > 6 ? arguments[6] : void 0,
          kG = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const UG = 1 / Math.tan(.5 * GG),
          YG = LG ? UG / bG : UG,
          VG = LG ? UG : UG * bG,
          pG = Math.tan(kG);
        return hG.FromValuesToRef(YG, 0, 0, 0, 0, VG, 0, pG, 0, 0, -ZG, -1, 0, 0, -1, 0, SG), yG && SG.multiplyToRef(rG, SG), SG._updateIdentityStatus(!1), SG
      }
      static GetFinalMatrix(GG, bG, ZG, wG, SG, LG) {
        const yG = GG.width,
          kG = GG.height,
          UG = GG.x,
          YG = GG.y,
          VG = hG.FromValues(yG / 2, 0, 0, 0, 0, -kG / 2, 0, 0, 0, 0, LG - SG, 0, UG + yG / 2, kG / 2 + YG, SG, 1),
          pG = new hG;
        return bG.multiplyToRef(ZG, pG), pG.multiplyToRef(wG, pG), pG.multiplyToRef(VG, pG)
      }
      static GetAsMatrix2x2(GG) {
        const bG = GG.m,
          ZG = [bG[0], bG[1], bG[4], bG[5]];
        return LG.c.MatrixUse64Bits ? ZG : new Float32Array(ZG)
      }
      static GetAsMatrix3x3(GG) {
        const bG = GG.m,
          ZG = [bG[0], bG[1], bG[2], bG[4], bG[5], bG[6], bG[8], bG[9], bG[10]];
        return LG.c.MatrixUse64Bits ? ZG : new Float32Array(ZG)
      }
      static Transpose(GG) {
        const bG = new hG;
        return hG.TransposeToRef(GG, bG), bG
      }
      static TransposeToRef(GG, bG) {
        const ZG = GG.m,
          wG = ZG[0],
          SG = ZG[4],
          LG = ZG[8],
          yG = ZG[12],
          kG = ZG[1],
          UG = ZG[5],
          YG = ZG[9],
          VG = ZG[13],
          pG = ZG[2],
          fG = ZG[6],
          QG = ZG[10],
          KG = ZG[14],
          hG = ZG[3],
          dG = ZG[7],
          JG = ZG[11],
          rG = ZG[15],
          zG = bG._m;
        return zG[0] = wG, zG[1] = SG, zG[2] = LG, zG[3] = yG, zG[4] = kG, zG[5] = UG, zG[6] = YG, zG[7] = VG, zG[8] = pG, zG[9] = fG, zG[10] = QG, zG[11] = KG, zG[12] = hG, zG[13] = dG, zG[14] = JG, zG[15] = rG, bG.markAsUpdated(), bG._updateIdentityStatus(GG._isIdentity, GG._isIdentityDirty), bG
      }
      static Reflection(GG) {
        const bG = new hG;
        return hG.ReflectionToRef(GG, bG), bG
      }
      static ReflectionToRef(GG, bG) {
        GG.normalize();
        const ZG = GG.normal.x,
          wG = GG.normal.y,
          SG = GG.normal.z,
          LG = -2 * ZG,
          yG = -2 * wG,
          kG = -2 * SG;
        return hG.FromValuesToRef(LG * ZG + 1, yG * ZG, kG * ZG, 0, LG * wG, yG * wG + 1, kG * wG, 0, LG * SG, yG * SG, kG * SG + 1, 0, LG * GG.d, yG * GG.d, kG * GG.d, 1, bG), bG
      }
      static FromXYZAxesToRef(GG, bG, ZG, wG) {
        return hG.FromValuesToRef(GG._x, GG._y, GG._z, 0, bG._x, bG._y, bG._z, 0, ZG._x, ZG._y, ZG._z, 0, 0, 0, 0, 1, wG), wG
      }
      static FromQuaternionToRef(GG, bG) {
        const ZG = GG._x * GG._x,
          wG = GG._y * GG._y,
          SG = GG._z * GG._z,
          LG = GG._x * GG._y,
          yG = GG._z * GG._w,
          kG = GG._z * GG._x,
          UG = GG._y * GG._w,
          YG = GG._y * GG._z,
          VG = GG._x * GG._w;
        return bG._m[0] = 1 - 2 * (wG + SG), bG._m[1] = 2 * (LG + yG), bG._m[2] = 2 * (kG - UG), bG._m[3] = 0, bG._m[4] = 2 * (LG - yG), bG._m[5] = 1 - 2 * (SG + ZG), bG._m[6] = 2 * (YG + VG), bG._m[7] = 0, bG._m[8] = 2 * (kG + UG), bG._m[9] = 2 * (YG - VG), bG._m[10] = 1 - 2 * (wG + ZG), bG._m[11] = 0, bG._m[12] = 0, bG._m[13] = 0, bG._m[14] = 0, bG._m[15] = 1, bG.markAsUpdated(), bG
      }
    }
    hG._IdentityReadOnly = hG.Identity();
    class dG {}
    dG.mK = (0, SG.f)(11, fG.Zero), dG.Matrix = (0, SG.f)(2, hG.Identity), dG.Quaternion = (0, SG.f)(3, KG.Zero);
    class JG {}
    JG.Vector2 = (0, SG.f)(3, pG.Zero), JG.mK = (0, SG.f)(13, fG.Zero), JG.Vector4 = (0, SG.f)(3, QG.Zero), JG.Quaternion = (0, SG.f)(3, KG.Zero), JG.Matrix = (0, SG.f)(8, hG.Identity);
    const rG = hG.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let zG = !1;

    function EG() {
      zG || (zG = !0, Object.defineProperties(pG.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(fG.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(QG.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(KG.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(hG.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, YG.i)("BABYLON.Vector2", pG), (0, YG.i)("BABYLON.Vector3", fG), (0, YG.i)("BABYLON.Vector4", QG), (0, YG.i)("BABYLON.Matrix", hG))
    }
  },
  37465: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    const wG = "undefined" !== typeof WeakRef;
    class SG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(GG, bG, ZG, wG)
      }
      initialize(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = GG, this.skipNextObservers = bG, this.target = ZG, this.currentTarget = wG, this
      }
    }
    class LG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = GG, this.mask = bG, this.scope = ZG, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(GG)
      }
    }
    class yG {
      static FromPromise(GG, bG) {
        const ZG = new yG;
        return GG.then((GG => {
          ZG.notifyObservers(GG)
        })).catch((GG => {
          if (!bG) throw GG;
          bG.notifyObservers(GG)
        })), ZG
      }
      get observers() {
        return this._observers
      }
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = bG, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new SG(0), GG && (this._onObserverAdded = GG)
      }
      add(GG) {
        let bG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ZG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!GG) return null;
        const SG = new LG(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        SG.unregisterOnNextCall = ZG, bG ? this._observers.unshift(SG) : this._observers.push(SG), this._onObserverAdded && this._onObserverAdded(SG), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(SG, this._lastNotifiedValue);
        const yG = wG ? new WeakRef(this) : {
          deref: () => this
        };
        return SG._remove = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const bG = yG.deref();
          bG && (GG ? bG.remove(SG) : bG._remove(SG))
        }, SG
      }
      addOnce(GG) {
        return this.add(GG, void 0, void 0, void 0, !0)
      }
      remove(GG) {
        if (!GG) return !1;
        GG._remove = null;
        return -1 !== this._observers.indexOf(GG) && (this._deferUnregister(GG), !0)
      }
      removeCallback(GG, bG) {
        for (let ZG = 0; ZG < this._observers.length; ZG++) {
          const wG = this._observers[ZG];
          if (!wG._willBeUnregistered && (wG.callback === GG && (!bG || bG === wG.scope))) return this._deferUnregister(wG), !0
        }
        return !1
      }
      _deferUnregister(GG) {
        GG._willBeUnregistered || (this._numObserversMarkedAsDeleted++, GG.unregisterOnNextCall = !1, GG._willBeUnregistered = !0, setTimeout((() => {
          this._remove(GG)
        }), 0))
      }
      _remove(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!GG) return !1;
        const ZG = this._observers.indexOf(GG);
        return -1 !== ZG && (bG && this._numObserversMarkedAsDeleted--, this._observers.splice(ZG, 1), !0)
      }
      makeObserverTopPriority(GG) {
        this._remove(GG, !1), this._observers.unshift(GG)
      }
      makeObserverBottomPriority(GG) {
        this._remove(GG, !1), this._observers.push(GG)
      }
      notifyObservers(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = GG), !this._observers.length) return !0;
        const LG = this._eventState;
        LG.mask = bG, LG.target = ZG, LG.currentTarget = wG, LG.skipNextObservers = !1, LG.lastReturnValue = GG, LG.userInfo = SG;
        for (const yG of this._observers)
          if (!yG._willBeUnregistered && (yG.mask & bG && (yG.unregisterOnNextCall && this._deferUnregister(yG), yG.scope ? LG.lastReturnValue = yG.callback.apply(yG.scope, [GG, LG]) : LG.lastReturnValue = yG.callback(GG, LG)), LG.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bG), GG._willBeUnregistered) return;
        const wG = this._eventState;
        wG.mask = ZG, wG.skipNextObservers = !1, GG.unregisterOnNextCall && this._deferUnregister(GG), GG.callback(bG, wG)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const GG = this._observers.pop();
          GG && (GG._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const GG = new yG;
        return GG._observers = this._observers.slice(0), GG
      }
      hasSpecificMask() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const bG of this._observers)
          if (bG.mask & GG || bG.mask === GG) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);