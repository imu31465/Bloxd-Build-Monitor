export const id = 206;
export const ids = [206];
export const modules = {
  35344: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(35346);
    class CW {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    CW.Instances = [], CW.OnEnginesDisposedObservable = new wW.c, CW._LastCreatedScene = null, CW.UseFallbackTexture = !0, CW.FallbackTexture = ""
  },
  35336: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      static SetMatrixPrecision(WW) {
        if (wW.MatrixTrackPrecisionChange = !1, WW && !wW.MatrixUse64Bits && wW.MatrixTrackedMatrices)
          for (let RW = 0; RW < wW.MatrixTrackedMatrices.length; ++RW) {
            const WW = wW.MatrixTrackedMatrices[RW],
              MW = WW._m;
            WW._m = new Array(16);
            for (let RW = 0; RW < 16; ++RW) WW._m[RW] = MW[RW]
          }
        wW.MatrixUse64Bits = WW, wW.MatrixCurrentType = wW.MatrixUse64Bits ? Array : Float32Array, wW.MatrixTrackedMatrices = null
      }
    }
    wW.MatrixUse64Bits = !1, wW.MatrixTrackPrecisionChange = !0, wW.MatrixCurrentType = Float32Array, wW.MatrixTrackedMatrices = []
  },
  35359: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => bR,
      f: () => NW,
      j: () => yR,
      k: () => wW,
      n: () => zR,
      q: () => AW
    });
    class wW {}

    function CW(WW) {
      WW.updateFlag = wW._UpdateFlagSeed++
    }

    function zR(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const CW = WW.JNW(),
        zR = RW.JNW(),
        AW = CW[0],
        bR = CW[1],
        yR = CW[2],
        NW = CW[3],
        eW = CW[4],
        BW = CW[5],
        tR = CW[6],
        TW = CW[7],
        gR = CW[8],
        iR = CW[9],
        YW = CW[10],
        JW = CW[11],
        PW = CW[12],
        IW = CW[13],
        oW = CW[14],
        lW = CW[15],
        FW = zR[0],
        fW = zR[1],
        QW = zR[2],
        rR = zR[3],
        cR = zR[4],
        XW = zR[5],
        jR = zR[6],
        kR = zR[7],
        aR = zR[8],
        sW = zR[9],
        dW = zR[10],
        pW = zR[11],
        hW = zR[12],
        UW = zR[13],
        EW = zR[14],
        VW = zR[15];
      MW[wW] = AW * FW + bR * cR + yR * aR + NW * hW, MW[wW + 1] = AW * fW + bR * XW + yR * sW + NW * UW, MW[wW + 2] = AW * QW + bR * jR + yR * dW + NW * EW, MW[wW + 3] = AW * rR + bR * kR + yR * pW + NW * VW, MW[wW + 4] = eW * FW + BW * cR + tR * aR + TW * hW, MW[wW + 5] = eW * fW + BW * XW + tR * sW + TW * UW, MW[wW + 6] = eW * QW + BW * jR + tR * dW + TW * EW, MW[wW + 7] = eW * rR + BW * kR + tR * pW + TW * VW, MW[wW + 8] = gR * FW + iR * cR + YW * aR + JW * hW, MW[wW + 9] = gR * fW + iR * XW + YW * sW + JW * UW, MW[wW + 10] = gR * QW + iR * jR + YW * dW + JW * EW, MW[wW + 11] = gR * rR + iR * kR + YW * pW + JW * VW, MW[wW + 12] = PW * FW + IW * cR + oW * aR + lW * hW, MW[wW + 13] = PW * fW + IW * XW + oW * sW + lW * UW, MW[wW + 14] = PW * QW + IW * jR + oW * dW + lW * EW, MW[wW + 15] = PW * rR + IW * kR + oW * pW + lW * VW
    }

    function AW(WW, RW, MW) {
      let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      zR(WW, RW, MW.JNW(), wW), CW(MW)
    }

    function bR(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const wW = WW.JNW();
      RW[MW] = wW[0], RW[MW + 1] = wW[1], RW[MW + 2] = wW[2], RW[MW + 3] = wW[3], RW[MW + 4] = wW[4], RW[MW + 5] = wW[5], RW[MW + 6] = wW[6], RW[MW + 7] = wW[7], RW[MW + 8] = wW[8], RW[MW + 9] = wW[9], RW[MW + 10] = wW[10], RW[MW + 11] = wW[11], RW[MW + 12] = wW[12], RW[MW + 13] = wW[13], RW[MW + 14] = wW[14], RW[MW + 15] = wW[15]
    }

    function yR(WW, RW) {
      const MW = NW(WW, RW.JNW());
      return MW && CW(RW), MW
    }

    function NW(WW, RW) {
      const MW = WW.JNW(),
        wW = MW[0],
        CW = MW[1],
        zR = MW[2],
        AW = MW[3],
        bR = MW[4],
        yR = MW[5],
        NW = MW[6],
        eW = MW[7],
        BW = MW[8],
        tR = MW[9],
        TW = MW[10],
        gR = MW[11],
        iR = MW[12],
        YW = MW[13],
        JW = MW[14],
        PW = MW[15],
        IW = TW * PW - JW * gR,
        oW = tR * PW - YW * gR,
        lW = tR * JW - YW * TW,
        FW = BW * PW - iR * gR,
        fW = BW * JW - TW * iR,
        QW = BW * YW - iR * tR,
        rR = +(yR * IW - NW * oW + eW * lW),
        cR = -(bR * IW - NW * FW + eW * fW),
        XW = +(bR * oW - yR * FW + eW * QW),
        jR = -(bR * lW - yR * fW + NW * QW),
        kR = wW * rR + CW * cR + zR * XW + AW * jR;
      if (0 === kR) return !1;
      const aR = 1 / kR,
        sW = NW * PW - JW * eW,
        dW = yR * PW - YW * eW,
        pW = yR * JW - YW * NW,
        hW = bR * PW - iR * eW,
        UW = bR * JW - iR * NW,
        EW = bR * YW - iR * yR,
        VW = NW * gR - TW * eW,
        mR = yR * gR - tR * eW,
        xR = yR * TW - tR * NW,
        vR = bR * gR - BW * eW,
        KW = bR * TW - BW * NW,
        uW = bR * tR - BW * yR,
        OW = -(CW * IW - zR * oW + AW * lW),
        nW = +(wW * IW - zR * FW + AW * fW),
        GW = -(wW * oW - CW * FW + AW * QW),
        LW = +(wW * lW - CW * fW + zR * QW),
        HW = +(CW * sW - zR * dW + AW * pW),
        DW = -(wW * sW - zR * hW + AW * UW),
        qR = +(wW * dW - CW * hW + AW * EW),
        ZW = -(wW * pW - CW * UW + zR * EW),
        SW = -(CW * VW - zR * mR + AW * xR),
        WR = +(wW * VW - zR * vR + AW * KW),
        RR = -(wW * mR - CW * vR + AW * uW),
        MR = +(wW * xR - CW * KW + zR * uW);
      return RW[0] = rR * aR, RW[1] = OW * aR, RW[2] = HW * aR, RW[3] = SW * aR, RW[4] = cR * aR, RW[5] = nW * aR, RW[6] = DW * aR, RW[7] = WR * aR, RW[8] = XW * aR, RW[9] = GW * aR, RW[10] = qR * aR, RW[11] = RR * aR, RW[12] = jR * aR, RW[13] = LW * aR, RW[14] = ZW * aR, RW[15] = MR * aR, !0
    }
    wW._UpdateFlagSeed = 0
  },
  35324: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => iR,
      e: () => gR,
      h: () => oW,
      k: () => JW,
      n: () => BW,
      q: () => tR,
      s: () => TW
    });
    var wW = MW(35328),
      CW = MW(35330),
      zR = MW(35336),
      AW = MW(35344),
      bR = MW(35353),
      yR = MW(35359),
      NW = MW(35361);
    const eW = WW => parseInt(WW.toString().replace(/\W/g, ""));
    class BW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = WW, this.y = RW
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let WW = eW(this.x);
        return WW = 397 * WW ^ eW(this.y), WW
      }
      toArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[RW] = this.x, WW[RW + 1] = this.y, this
      }
      MyW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BW.FromArrayToRef(WW, RW, this), this
      }
      JNW() {
        return [this.x, this.y]
      }
      hyW(WW) {
        return this.x = WW.x, this.y = WW.y, this
      }
      nzW(WW, RW) {
        return this.x = WW, this.y = RW, this
      }
      set(WW, RW) {
        return this.nzW(WW, RW)
      }
      YzW(WW) {
        return this.nzW(WW, WW)
      }
      add(WW) {
        return new BW(this.x + WW.x, this.y + WW.y)
      }
      addToRef(WW, RW) {
        return RW.x = this.x + WW.x, RW.y = this.y + WW.y, RW
      }
      addInPlace(WW) {
        return this.x += WW.x, this.y += WW.y, this
      }
      addInPlaceFromFloats(WW, RW) {
        return this.x += WW, this.y += RW, this
      }
      addVector3(WW) {
        return new BW(this.x + WW.x, this.y + WW.y)
      }
      subtract(WW) {
        return new BW(this.x - WW.x, this.y - WW.y)
      }
      subtractToRef(WW, RW) {
        return RW.x = this.x - WW.x, RW.y = this.y - WW.y, RW
      }
      pNW(WW) {
        return this.x -= WW.x, this.y -= WW.y, this
      }
      multiplyInPlace(WW) {
        return this.x *= WW.x, this.y *= WW.y, this
      }
      multiply(WW) {
        return new BW(this.x * WW.x, this.y * WW.y)
      }
      multiplyToRef(WW, RW) {
        return RW.x = this.x * WW.x, RW.y = this.y * WW.y, RW
      }
      multiplyByFloats(WW, RW) {
        return new BW(this.x * WW, this.y * RW)
      }
      divide(WW) {
        return new BW(this.x / WW.x, this.y / WW.y)
      }
      divideToRef(WW, RW) {
        return RW.x = this.x / WW.x, RW.y = this.y / WW.y, RW
      }
      divideInPlace(WW) {
        return this.x = this.x / WW.x, this.y = this.y / WW.y, this
      }
      minimizeInPlace(WW) {
        return this.minimizeInPlaceFromFloats(WW.x, WW.y)
      }
      maximizeInPlace(WW) {
        return this.maximizeInPlaceFromFloats(WW.x, WW.y)
      }
      minimizeInPlaceFromFloats(WW, RW) {
        return this.x = Math.min(WW, this.x), this.y = Math.min(RW, this.y), this
      }
      maximizeInPlaceFromFloats(WW, RW) {
        return this.x = Math.max(WW, this.x), this.y = Math.max(RW, this.y), this
      }
      subtractFromFloats(WW, RW) {
        return new BW(this.x - WW, this.y - RW)
      }
      subtractFromFloatsToRef(WW, RW, MW) {
        return MW.x = this.x - WW, MW.y = this.y - RW, MW
      }
      zb() {
        return new BW(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(WW) {
        return WW.x = -this.x, WW.y = -this.y, WW
      }
      scaleInPlace(WW) {
        return this.x *= WW, this.y *= WW, this
      }
      scale(WW) {
        return new BW(this.x * WW, this.y * WW)
      }
      scaleToRef(WW, RW) {
        return RW.x = this.x * WW, RW.y = this.y * WW, RW
      }
      scaleAndAddToRef(WW, RW) {
        return RW.x += this.x * WW, RW.y += this.y * WW, RW
      }
      equals(WW) {
        return WW && this.x === WW.x && this.y === WW.y
      }
      equalsWithEpsilon(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wW.c;
        return WW && (0, bR.WithinEpsilon)(this.x, WW.x, RW) && (0, bR.WithinEpsilon)(this.y, WW.y, RW)
      }
      EtW(WW, RW) {
        return this.x === WW && this.y === RW
      }
      floor() {
        return new BW(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(WW) {
        return WW.x = Math.floor(this.x), WW.y = Math.floor(this.y), WW
      }
      fract() {
        return new BW(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(WW) {
        return WW.x = this.x - Math.floor(this.x), WW.y = this.y - Math.floor(this.y), WW
      }
      rotate(WW) {
        return this.rotateToRef(WW, new BW)
      }
      rotateToRef(WW, RW) {
        const MW = Math.cos(WW),
          wW = Math.sin(WW);
        return RW.x = MW * this.x - wW * this.y, RW.y = wW * this.x + MW * this.y, RW
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
      normalizeFromLength(WW) {
        return 0 === WW || 1 === WW ? this : this.scaleInPlace(1 / WW)
      }
      normalizeToNew() {
        const WW = new BW;
        return this.normalizeToRef(WW), WW
      }
      normalizeToRef(WW) {
        const RW = this.length();
        return 0 === RW || 1 === RW ? (WW.x = this.x, WW.y = this.y, WW) : this.scaleToRef(1 / RW, WW)
      }
      clone() {
        return new BW(this.x, this.y)
      }
      dot(WW) {
        return this.x * WW.x + this.y * WW.y
      }
      static Zero() {
        return new BW(0, 0)
      }
      static One() {
        return new BW(1, 1)
      }
      static Random() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new BW((0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW))
      }
      static RandomToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).nzW((0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW))
      }
      static get ZeroReadOnly() {
        return BW._ZeroReadOnly
      }
      static FromArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new BW(WW[RW], WW[RW + 1])
      }
      static FromArrayToRef(WW, RW, MW) {
        return MW.x = WW[RW], MW.y = WW[RW + 1], MW
      }
      static FromFloatsToRef(WW, RW, MW) {
        return MW.nzW(WW, RW), MW
      }
      static CatmullRom(WW, RW, MW, wW, CW) {
        const zR = CW * CW,
          AW = CW * zR,
          bR = .5 * (2 * RW.x + (-WW.x + MW.x) * CW + (2 * WW.x - 5 * RW.x + 4 * MW.x - wW.x) * zR + (-WW.x + 3 * RW.x - 3 * MW.x + wW.x) * AW),
          yR = .5 * (2 * RW.y + (-WW.y + MW.y) * CW + (2 * WW.y - 5 * RW.y + 4 * MW.y - wW.y) * zR + (-WW.y + 3 * RW.y - 3 * MW.y + wW.y) * AW);
        return new BW(bR, yR)
      }
      static ClampToRef(WW, RW, MW, wW) {
        return wW.x = (0, bR.Clamp)(WW.x, RW.x, MW.x), wW.y = (0, bR.Clamp)(WW.y, RW.y, MW.y), wW
      }
      static Clamp(WW, RW, MW) {
        const wW = (0, bR.Clamp)(WW.x, RW.x, MW.x),
          CW = (0, bR.Clamp)(WW.y, RW.y, MW.y);
        return new BW(wW, CW)
      }
      static Hermite(WW, RW, MW, wW, CW) {
        const zR = CW * CW,
          AW = CW * zR,
          bR = 2 * AW - 3 * zR + 1,
          yR = -2 * AW + 3 * zR,
          NW = AW - 2 * zR + CW,
          eW = AW - zR,
          tR = WW.x * bR + MW.x * yR + RW.x * NW + wW.x * eW,
          TW = WW.y * bR + MW.y * yR + RW.y * NW + wW.y * eW;
        return new BW(tR, TW)
      }
      static Hermite1stDerivative(WW, RW, MW, wW, CW) {
        return this.Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, new BW)
      }
      static Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR) {
        const AW = CW * CW;
        return zR.x = 6 * (AW - CW) * WW.x + (3 * AW - 4 * CW + 1) * RW.x + 6 * (-AW + CW) * MW.x + (3 * AW - 2 * CW) * wW.x, zR.y = 6 * (AW - CW) * WW.y + (3 * AW - 4 * CW + 1) * RW.y + 6 * (-AW + CW) * MW.y + (3 * AW - 2 * CW) * wW.y, zR
      }
      static Lerp(WW, RW, MW) {
        return BW.LerpToRef(WW, RW, MW, new BW)
      }
      static LerpToRef(WW, RW, MW, wW) {
        return wW.x = WW.x + (RW.x - WW.x) * MW, wW.y = WW.y + (RW.y - WW.y) * MW, wW
      }
      static Dot(WW, RW) {
        return WW.x * RW.x + WW.y * RW.y
      }
      static Normalize(WW) {
        return BW.NormalizeToRef(WW, new BW)
      }
      static NormalizeToRef(WW, RW) {
        return WW.normalizeToRef(RW), RW
      }
      static Minimize(WW, RW) {
        const MW = WW.x < RW.x ? WW.x : RW.x,
          wW = WW.y < RW.y ? WW.y : RW.y;
        return new BW(MW, wW)
      }
      static Maximize(WW, RW) {
        const MW = WW.x > RW.x ? WW.x : RW.x,
          wW = WW.y > RW.y ? WW.y : RW.y;
        return new BW(MW, wW)
      }
      static Transform(WW, RW) {
        return BW.TransformToRef(WW, RW, new BW)
      }
      static TransformToRef(WW, RW, MW) {
        const wW = RW.m,
          CW = WW.x * wW[0] + WW.y * wW[4] + wW[12],
          zR = WW.x * wW[1] + WW.y * wW[5] + wW[13];
        return MW.x = CW, MW.y = zR, MW
      }
      static PointInTriangle(WW, RW, MW, wW) {
        const CW = .5 * (-MW.y * wW.x + RW.y * (-MW.x + wW.x) + RW.x * (MW.y - wW.y) + MW.x * wW.y),
          zR = CW < 0 ? -1 : 1,
          AW = (RW.y * wW.x - RW.x * wW.y + (wW.y - RW.y) * WW.x + (RW.x - wW.x) * WW.y) * zR,
          bR = (RW.x * MW.y - RW.y * MW.x + (RW.y - MW.y) * WW.x + (MW.x - RW.x) * WW.y) * zR;
        return AW > 0 && bR > 0 && AW + bR < 2 * CW * zR
      }
      static Distance(WW, RW) {
        return Math.sqrt(BW.DistanceSquared(WW, RW))
      }
      static DistanceSquared(WW, RW) {
        const MW = WW.x - RW.x,
          wW = WW.y - RW.y;
        return MW * MW + wW * wW
      }
      static Center(WW, RW) {
        return BW.CenterToRef(WW, RW, new BW)
      }
      static CenterToRef(WW, RW, MW) {
        return MW.nzW((WW.x + RW.x) / 2, (WW.y + RW.y) / 2)
      }
      static DistanceOfPointFromSegment(WW, RW, MW) {
        const wW = BW.DistanceSquared(RW, MW);
        if (0 === wW) return BW.Distance(WW, RW);
        const CW = MW.subtract(RW),
          zR = Math.max(0, Math.min(1, BW.Dot(WW.subtract(RW), CW) / wW)),
          AW = RW.add(CW.multiplyByFloats(zR, zR));
        return BW.Distance(WW, AW)
      }
    }
    BW._V8PerformanceHack = new BW(.5, .5), BW._ZeroReadOnly = BW.Zero();
    class tR {
      get x() {
        return this._x
      }
      set x(WW) {
        this._x = WW, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(WW) {
        this._y = WW, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(WW) {
        this._z = WW, this._isDirty = !0
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = WW, this._y = RW, this._z = MW
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "vC"
      }
      getHashCode() {
        let WW = eW(this._x);
        return WW = 397 * WW ^ eW(this._y), WW = 397 * WW ^ eW(this._z), WW
      }
      JNW() {
        return [this._x, this._y, this._z]
      }
      toArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[RW] = this._x, WW[RW + 1] = this._y, WW[RW + 2] = this._z, this
      }
      MyW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tR.FromArrayToRef(WW, RW, this), this
      }
      toQuaternion() {
        return gR.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(WW) {
        return this._x += WW._x, this._y += WW._y, this._z += WW._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(WW, RW, MW) {
        return this._x += WW, this._y += RW, this._z += MW, this._isDirty = !0, this
      }
      add(WW) {
        return new tR(this._x + WW._x, this._y + WW._y, this._z + WW._z)
      }
      addToRef(WW, RW) {
        return RW._x = this._x + WW._x, RW._y = this._y + WW._y, RW._z = this._z + WW._z, RW._isDirty = !0, RW
      }
      pNW(WW) {
        return this._x -= WW._x, this._y -= WW._y, this._z -= WW._z, this._isDirty = !0, this
      }
      subtract(WW) {
        return new tR(this._x - WW._x, this._y - WW._y, this._z - WW._z)
      }
      subtractToRef(WW, RW) {
        return this.subtractFromFloatsToRef(WW._x, WW._y, WW._z, RW)
      }
      subtractFromFloats(WW, RW, MW) {
        return new tR(this._x - WW, this._y - RW, this._z - MW)
      }
      subtractFromFloatsToRef(WW, RW, MW, wW) {
        return wW._x = this._x - WW, wW._y = this._y - RW, wW._z = this._z - MW, wW._isDirty = !0, wW
      }
      zb() {
        return new tR(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(WW) {
        return WW._x = -1 * this._x, WW._y = -1 * this._y, WW._z = -1 * this._z, WW._isDirty = !0, WW
      }
      scaleInPlace(WW) {
        return this._x *= WW, this._y *= WW, this._z *= WW, this._isDirty = !0, this
      }
      scale(WW) {
        return new tR(this._x * WW, this._y * WW, this._z * WW)
      }
      scaleToRef(WW, RW) {
        return RW._x = this._x * WW, RW._y = this._y * WW, RW._z = this._z * WW, RW._isDirty = !0, RW
      }
      getNormalToRef(WW) {
        const RW = this.length();
        let MW = Math.acos(this._y / RW);
        const wW = Math.atan2(this._z, this._x);
        MW > Math.PI / 2 ? MW -= Math.PI / 2 : MW += Math.PI / 2;
        const CW = RW * Math.sin(MW) * Math.cos(wW),
          zR = RW * Math.cos(MW),
          AW = RW * Math.sin(MW) * Math.sin(wW);
        return WW.set(CW, zR, AW), WW
      }
      applyRotationQuaternionToRef(WW, RW) {
        const MW = this._x,
          wW = this._y,
          CW = this._z,
          zR = WW._x,
          AW = WW._y,
          bR = WW._z,
          yR = WW._w,
          NW = 2 * (AW * CW - bR * wW),
          eW = 2 * (bR * MW - zR * CW),
          BW = 2 * (zR * wW - AW * MW);
        return RW._x = MW + yR * NW + AW * BW - bR * eW, RW._y = wW + yR * eW + bR * NW - zR * BW, RW._z = CW + yR * BW + zR * eW - AW * NW, RW._isDirty = !0, RW
      }
      applyRotationQuaternionInPlace(WW) {
        return this.applyRotationQuaternionToRef(WW, this)
      }
      applyRotationQuaternion(WW) {
        return this.applyRotationQuaternionToRef(WW, new tR)
      }
      scaleAndAddToRef(WW, RW) {
        return RW._x += this._x * WW, RW._y += this._y * WW, RW._z += this._z * WW, RW._isDirty = !0, RW
      }
      projectOnPlane(WW, RW) {
        return this.projectOnPlaneToRef(WW, RW, new tR)
      }
      projectOnPlaneToRef(WW, RW, MW) {
        const wW = WW.normal,
          CW = WW.d,
          zR = YW.vC[0];
        this.subtractToRef(RW, zR), zR.normalize();
        const AW = tR.Dot(zR, wW);
        if (Math.abs(AW) < 1e-10) MW.YzW(1 / 0);
        else {
          const WW = -(tR.Dot(RW, wW) + CW) / AW,
            bR = zR.scaleInPlace(WW);
          RW.addToRef(bR, MW)
        }
        return MW
      }
      equals(WW) {
        return WW && this._x === WW._x && this._y === WW._y && this._z === WW._z
      }
      equalsWithEpsilon(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wW.c;
        return WW && (0, bR.WithinEpsilon)(this._x, WW._x, RW) && (0, bR.WithinEpsilon)(this._y, WW._y, RW) && (0, bR.WithinEpsilon)(this._z, WW._z, RW)
      }
      EtW(WW, RW, MW) {
        return this._x === WW && this._y === RW && this._z === MW
      }
      multiplyInPlace(WW) {
        return this._x *= WW._x, this._y *= WW._y, this._z *= WW._z, this._isDirty = !0, this
      }
      multiply(WW) {
        return this.multiplyByFloats(WW._x, WW._y, WW._z)
      }
      multiplyToRef(WW, RW) {
        return RW._x = this._x * WW._x, RW._y = this._y * WW._y, RW._z = this._z * WW._z, RW._isDirty = !0, RW
      }
      multiplyByFloats(WW, RW, MW) {
        return new tR(this._x * WW, this._y * RW, this._z * MW)
      }
      divide(WW) {
        return new tR(this._x / WW._x, this._y / WW._y, this._z / WW._z)
      }
      divideToRef(WW, RW) {
        return RW._x = this._x / WW._x, RW._y = this._y / WW._y, RW._z = this._z / WW._z, RW._isDirty = !0, RW
      }
      divideInPlace(WW) {
        return this._x = this._x / WW._x, this._y = this._y / WW._y, this._z = this._z / WW._z, this._isDirty = !0, this
      }
      minimizeInPlace(WW) {
        return this.minimizeInPlaceFromFloats(WW._x, WW._y, WW._z)
      }
      maximizeInPlace(WW) {
        return this.maximizeInPlaceFromFloats(WW._x, WW._y, WW._z)
      }
      minimizeInPlaceFromFloats(WW, RW, MW) {
        return WW < this._x && (this.x = WW), RW < this._y && (this.y = RW), MW < this._z && (this.z = MW), this
      }
      maximizeInPlaceFromFloats(WW, RW, MW) {
        return WW > this._x && (this.x = WW), RW > this._y && (this.y = RW), MW > this._z && (this.z = MW), this
      }
      isNonUniformWithinEpsilon(WW) {
        const RW = Math.abs(this._x),
          MW = Math.abs(this._y);
        if (!(0, bR.WithinEpsilon)(RW, MW, WW)) return !0;
        const wW = Math.abs(this._z);
        return !(0, bR.WithinEpsilon)(RW, wW, WW) || !(0, bR.WithinEpsilon)(MW, wW, WW)
      }
      get isNonUniform() {
        const WW = Math.abs(this._x);
        if (WW !== Math.abs(this._y)) return !0;
        return WW !== Math.abs(this._z)
      }
      floorToRef(WW) {
        return WW._x = Math.floor(this._x), WW._y = Math.floor(this._y), WW._z = Math.floor(this._z), WW._isDirty = !0, WW
      }
      floor() {
        return new tR(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(WW) {
        return WW._x = this._x - Math.floor(this._x), WW._y = this._y - Math.floor(this._y), WW._z = this._z - Math.floor(this._z), WW._isDirty = !0, WW
      }
      fract() {
        return new tR(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(WW) {
        if ("xyz" === (WW = WW.toLowerCase())) return this;
        const RW = YW.vC[0].hyW(this);
        return this.x = RW[WW[0]], this.y = RW[WW[1]], this.z = RW[WW[2]], this
      }
      rotateByQuaternionToRef(WW, RW) {
        return WW.toRotationMatrix(YW.Matrix[0]), tR.TransformCoordinatesToRef(this, YW.Matrix[0], RW), RW
      }
      rotateByQuaternionAroundPointToRef(WW, RW, MW) {
        return this.subtractToRef(RW, YW.vC[0]), YW.vC[0].rotateByQuaternionToRef(WW, YW.vC[0]), RW.addToRef(YW.vC[0], MW), MW
      }
      cross(WW) {
        return tR.CrossToRef(this, WW, new tR)
      }
      normalizeFromLength(WW) {
        return 0 === WW || 1 === WW ? this : this.scaleInPlace(1 / WW)
      }
      normalizeToNew() {
        return this.normalizeToRef(new tR)
      }
      normalizeToRef(WW) {
        const RW = this.length();
        return 0 === RW || 1 === RW ? (WW._x = this._x, WW._y = this._y, WW._z = this._z, WW._isDirty = !0, WW) : this.scaleToRef(1 / RW, WW)
      }
      clone() {
        return new tR(this._x, this._y, this._z)
      }
      hyW(WW) {
        return this.nzW(WW._x, WW._y, WW._z)
      }
      nzW(WW, RW, MW) {
        return this._x = WW, this._y = RW, this._z = MW, this._isDirty = !0, this
      }
      set(WW, RW, MW) {
        return this.nzW(WW, RW, MW)
      }
      YzW(WW) {
        return this._x = this._y = this._z = WW, this._isDirty = !0, this
      }
      static GetClipFactor(WW, RW, MW, wW) {
        const CW = tR.Dot(WW, MW);
        return (CW - wW) / (CW - tR.Dot(RW, MW))
      }
      static GetAngleBetweenVectors(WW, RW, MW) {
        const wW = WW.normalizeToRef(YW.vC[1]),
          CW = RW.normalizeToRef(YW.vC[2]);
        let zR = tR.Dot(wW, CW);
        zR = (0, bR.Clamp)(zR, -1, 1);
        const AW = Math.acos(zR),
          yR = YW.vC[3];
        return tR.CrossToRef(wW, CW, yR), tR.Dot(yR, MW) > 0 ? isNaN(AW) ? 0 : AW : isNaN(AW) ? -Math.PI : -Math.acos(zR)
      }
      static GetAngleBetweenVectorsOnPlane(WW, RW, MW) {
        YW.vC[0].hyW(WW);
        const wW = YW.vC[0];
        YW.vC[1].hyW(RW);
        const CW = YW.vC[1];
        YW.vC[2].hyW(MW);
        const zR = YW.vC[2],
          AW = YW.vC[3],
          yR = YW.vC[4];
        wW.normalize(), CW.normalize(), zR.normalize(), tR.CrossToRef(zR, wW, AW), tR.CrossToRef(AW, zR, yR);
        const NW = Math.atan2(tR.Dot(CW, AW), tR.Dot(CW, yR));
        return (0, bR.NormalizeRadians)(NW)
      }
      static PitchYawRollToMoveBetweenPointsToRef(WW, RW, MW) {
        const wW = JW.vC[0];
        return RW.subtractToRef(WW, wW), MW._y = Math.atan2(wW.x, wW.z) || 0, MW._x = Math.atan2(Math.sqrt(wW.x ** 2 + wW.z ** 2), wW.y) || 0, MW._z = 0, MW._isDirty = !0, MW
      }
      static PitchYawRollToMoveBetweenPoints(WW, RW) {
        const MW = tR.Zero();
        return tR.PitchYawRollToMoveBetweenPointsToRef(WW, RW, MW)
      }
      static SlerpToRef(WW, RW, MW, CW) {
        MW = (0, bR.Clamp)(MW, 0, 1);
        const zR = YW.vC[0],
          AW = YW.vC[1];
        zR.hyW(WW);
        const yR = zR.length();
        zR.normalizeFromLength(yR), AW.hyW(RW);
        const NW = AW.length();
        AW.normalizeFromLength(NW);
        const eW = tR.Dot(zR, AW);
        let BW, TW;
        if (eW < 1 - wW.c) {
          const WW = Math.acos(eW),
            RW = 1 / Math.sin(WW);
          BW = Math.sin((1 - MW) * WW) * RW, TW = Math.sin(MW * WW) * RW
        } else BW = 1 - MW, TW = MW;
        return zR.scaleInPlace(BW), AW.scaleInPlace(TW), CW.hyW(zR).addInPlace(AW), CW.scaleInPlace((0, bR.Lerp)(yR, NW, MW)), CW
      }
      static SmoothToRef(WW, RW, MW, wW, CW) {
        return tR.SlerpToRef(WW, RW, 0 === wW ? 1 : MW / wW, CW), CW
      }
      static FromArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new tR(WW[RW], WW[RW + 1], WW[RW + 2])
      }
      static FromFloatArray(WW, RW) {
        return tR.FromArray(WW, RW)
      }
      static FromArrayToRef(WW, RW, MW) {
        return MW._x = WW[RW], MW._y = WW[RW + 1], MW._z = WW[RW + 2], MW._isDirty = !0, MW
      }
      static FromFloatArrayToRef(WW, RW, MW) {
        return tR.FromArrayToRef(WW, RW, MW)
      }
      static FromFloatsToRef(WW, RW, MW, wW) {
        return wW.nzW(WW, RW, MW), wW
      }
      static Zero() {
        return new tR(0, 0, 0)
      }
      static One() {
        return new tR(1, 1, 1)
      }
      static Up() {
        return new tR(0, 1, 0)
      }
      static get UpReadOnly() {
        return tR._UpReadOnly
      }
      static get DownReadOnly() {
        return tR._DownReadOnly
      }
      static get RightReadOnly() {
        return tR._RightReadOnly
      }
      static get LeftReadOnly() {
        return tR._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return tR._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return tR._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return tR._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return tR._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return tR._ZeroReadOnly
      }
      static get OneReadOnly() {
        return tR._OneReadOnly
      }
      static Down() {
        return new tR(0, -1, 0)
      }
      static Forward() {
        return new tR(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new tR(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new tR(1, 0, 0)
      }
      static Left() {
        return new tR(-1, 0, 0)
      }
      static Random() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new tR((0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW))
      }
      static RandomToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).nzW((0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW))
      }
      static TransformCoordinates(WW, RW) {
        const MW = tR.Zero();
        return tR.TransformCoordinatesToRef(WW, RW, MW), MW
      }
      static TransformCoordinatesToRef(WW, RW, MW) {
        return tR.TransformCoordinatesFromFloatsToRef(WW._x, WW._y, WW._z, RW, MW), MW
      }
      static TransformCoordinatesFromFloatsToRef(WW, RW, MW, wW, CW) {
        const zR = wW.m,
          AW = WW * zR[0] + RW * zR[4] + MW * zR[8] + zR[12],
          bR = WW * zR[1] + RW * zR[5] + MW * zR[9] + zR[13],
          yR = WW * zR[2] + RW * zR[6] + MW * zR[10] + zR[14],
          NW = 1 / (WW * zR[3] + RW * zR[7] + MW * zR[11] + zR[15]);
        return CW._x = AW * NW, CW._y = bR * NW, CW._z = yR * NW, CW._isDirty = !0, CW
      }
      static TransformNormal(WW, RW) {
        const MW = tR.Zero();
        return tR.TransformNormalToRef(WW, RW, MW), MW
      }
      static TransformNormalToRef(WW, RW, MW) {
        return this.TransformNormalFromFloatsToRef(WW._x, WW._y, WW._z, RW, MW), MW
      }
      static TransformNormalFromFloatsToRef(WW, RW, MW, wW, CW) {
        const zR = wW.m;
        return CW._x = WW * zR[0] + RW * zR[4] + MW * zR[8], CW._y = WW * zR[1] + RW * zR[5] + MW * zR[9], CW._z = WW * zR[2] + RW * zR[6] + MW * zR[10], CW._isDirty = !0, CW
      }
      static CatmullRom(WW, RW, MW, wW, CW) {
        const zR = CW * CW,
          AW = CW * zR,
          bR = .5 * (2 * RW._x + (-WW._x + MW._x) * CW + (2 * WW._x - 5 * RW._x + 4 * MW._x - wW._x) * zR + (-WW._x + 3 * RW._x - 3 * MW._x + wW._x) * AW),
          yR = .5 * (2 * RW._y + (-WW._y + MW._y) * CW + (2 * WW._y - 5 * RW._y + 4 * MW._y - wW._y) * zR + (-WW._y + 3 * RW._y - 3 * MW._y + wW._y) * AW),
          NW = .5 * (2 * RW._z + (-WW._z + MW._z) * CW + (2 * WW._z - 5 * RW._z + 4 * MW._z - wW._z) * zR + (-WW._z + 3 * RW._z - 3 * MW._z + wW._z) * AW);
        return new tR(bR, yR, NW)
      }
      static Clamp(WW, RW, MW) {
        const wW = new tR;
        return tR.ClampToRef(WW, RW, MW, wW), wW
      }
      static ClampToRef(WW, RW, MW, wW) {
        let CW = WW._x;
        CW = CW > MW._x ? MW._x : CW, CW = CW < RW._x ? RW._x : CW;
        let zR = WW._y;
        zR = zR > MW._y ? MW._y : zR, zR = zR < RW._y ? RW._y : zR;
        let AW = WW._z;
        return AW = AW > MW._z ? MW._z : AW, AW = AW < RW._z ? RW._z : AW, wW.nzW(CW, zR, AW), wW
      }
      static CheckExtends(WW, RW, MW) {
        RW.minimizeInPlace(WW), MW.maximizeInPlace(WW)
      }
      static Hermite(WW, RW, MW, wW, CW) {
        const zR = CW * CW,
          AW = CW * zR,
          bR = 2 * AW - 3 * zR + 1,
          yR = -2 * AW + 3 * zR,
          NW = AW - 2 * zR + CW,
          eW = AW - zR,
          BW = WW._x * bR + MW._x * yR + RW._x * NW + wW._x * eW,
          TW = WW._y * bR + MW._y * yR + RW._y * NW + wW._y * eW,
          gR = WW._z * bR + MW._z * yR + RW._z * NW + wW._z * eW;
        return new tR(BW, TW, gR)
      }
      static Hermite1stDerivative(WW, RW, MW, wW, CW) {
        const zR = new tR;
        return this.Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR), zR
      }
      static Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR) {
        const AW = CW * CW;
        return zR._x = 6 * (AW - CW) * WW._x + (3 * AW - 4 * CW + 1) * RW._x + 6 * (-AW + CW) * MW._x + (3 * AW - 2 * CW) * wW._x, zR._y = 6 * (AW - CW) * WW._y + (3 * AW - 4 * CW + 1) * RW._y + 6 * (-AW + CW) * MW._y + (3 * AW - 2 * CW) * wW._y, zR._z = 6 * (AW - CW) * WW._z + (3 * AW - 4 * CW + 1) * RW._z + 6 * (-AW + CW) * MW._z + (3 * AW - 2 * CW) * wW._z, zR._isDirty = !0, zR
      }
      static Lerp(WW, RW, MW) {
        const wW = new tR(0, 0, 0);
        return tR.LerpToRef(WW, RW, MW, wW), wW
      }
      static LerpToRef(WW, RW, MW, wW) {
        return wW._x = WW._x + (RW._x - WW._x) * MW, wW._y = WW._y + (RW._y - WW._y) * MW, wW._z = WW._z + (RW._z - WW._z) * MW, wW._isDirty = !0, wW
      }
      static Dot(WW, RW) {
        return WW._x * RW._x + WW._y * RW._y + WW._z * RW._z
      }
      dot(WW) {
        return this._x * WW._x + this._y * WW._y + this._z * WW._z
      }
      static Cross(WW, RW) {
        const MW = new tR;
        return tR.CrossToRef(WW, RW, MW), MW
      }
      static CrossToRef(WW, RW, MW) {
        const wW = WW._y * RW._z - WW._z * RW._y,
          CW = WW._z * RW._x - WW._x * RW._z,
          zR = WW._x * RW._y - WW._y * RW._x;
        return MW.nzW(wW, CW, zR), MW
      }
      static Normalize(WW) {
        const RW = tR.Zero();
        return tR.NormalizeToRef(WW, RW), RW
      }
      static NormalizeToRef(WW, RW) {
        return WW.normalizeToRef(RW), RW
      }
      static Project(WW, RW, MW, wW) {
        const CW = new tR;
        return tR.ProjectToRef(WW, RW, MW, wW, CW), CW
      }
      static ProjectToRef(WW, RW, MW, wW, CW) {
        const zR = wW.width,
          bR = wW.height,
          yR = wW.x,
          NW = wW.y,
          eW = YW.Matrix[1],
          BW = AW.d.LastCreatedEngine?.isNDCHalfZRange,
          TW = BW ? 1 : .5,
          gR = BW ? 0 : .5;
        iR.FromValuesToRef(zR / 2, 0, 0, 0, 0, -bR / 2, 0, 0, 0, 0, TW, 0, yR + zR / 2, bR / 2 + NW, gR, 1, eW);
        const JW = YW.Matrix[0];
        return RW.multiplyToRef(MW, JW), JW.multiplyToRef(eW, JW), tR.TransformCoordinatesToRef(WW, JW, CW), CW
      }
      static Reflect(WW, RW) {
        return this.ReflectToRef(WW, RW, new tR)
      }
      static ReflectToRef(WW, RW, MW) {
        const wW = JW.vC[0];
        return wW.hyW(RW).scaleInPlace(2 * tR.Dot(WW, RW)), MW.hyW(WW).pNW(wW)
      }
      static UnprojectFromTransform(WW, RW, MW, wW, CW) {
        return this.Unproject(WW, RW, MW, wW, CW, iR.IdentityReadOnly)
      }
      static Unproject(WW, RW, MW, wW, CW, zR) {
        const AW = new tR;
        return tR.UnprojectToRef(WW, RW, MW, wW, CW, zR, AW), AW
      }
      static UnprojectToRef(WW, RW, MW, wW, CW, zR, AW) {
        return tR.UnprojectFloatsToRef(WW._x, WW._y, WW._z, RW, MW, wW, CW, zR, AW), AW
      }
      static UnprojectFloatsToRef(WW, RW, MW, wW, CW, zR, bR, yR, NW) {
        const eW = YW.Matrix[0];
        zR.multiplyToRef(bR, eW), eW.multiplyToRef(yR, eW), eW.invert();
        const BW = YW.vC[0];
        return BW.x = WW / wW * 2 - 1, BW.y = -(RW / CW * 2 - 1), AW.d.LastCreatedEngine?.isNDCHalfZRange ? BW.z = MW : BW.z = 2 * MW - 1, tR.TransformCoordinatesToRef(BW, eW, NW), NW
      }
      static Minimize(WW, RW) {
        const MW = new tR;
        return MW.hyW(WW), MW.minimizeInPlace(RW), MW
      }
      static Maximize(WW, RW) {
        const MW = new tR;
        return MW.hyW(WW), MW.maximizeInPlace(RW), MW
      }
      static Distance(WW, RW) {
        return Math.sqrt(tR.DistanceSquared(WW, RW))
      }
      static DistanceSquared(WW, RW) {
        const MW = WW._x - RW._x,
          wW = WW._y - RW._y,
          CW = WW._z - RW._z;
        return MW * MW + wW * wW + CW * CW
      }
      static ProjectOnTriangleToRef(WW, RW, MW, CW, zR) {
        const AW = YW.vC[0],
          yR = YW.vC[1],
          NW = YW.vC[2],
          eW = YW.vC[3],
          BW = YW.vC[4];
        MW.subtractToRef(RW, AW), CW.subtractToRef(RW, yR), CW.subtractToRef(MW, NW);
        const TW = AW.length(),
          gR = yR.length(),
          iR = NW.length();
        if (TW < wW.c || gR < wW.c || iR < wW.c) return zR.hyW(RW), tR.Distance(WW, RW);
        WW.subtractToRef(RW, BW), tR.CrossToRef(AW, yR, eW);
        const JW = eW.length();
        if (JW < wW.c) return zR.hyW(RW), tR.Distance(WW, RW);
        eW.normalizeFromLength(JW);
        let PW = BW.length();
        if (PW < wW.c) return zR.hyW(RW), 0;
        BW.normalizeFromLength(PW);
        const IW = tR.Dot(eW, BW),
          oW = YW.vC[5],
          lW = YW.vC[6];
        oW.hyW(eW).scaleInPlace(-PW * IW), lW.hyW(WW).addInPlace(oW);
        const FW = YW.vC[4],
          fW = YW.vC[5],
          QW = YW.vC[7],
          rR = YW.vC[8];
        FW.hyW(AW).scaleInPlace(1 / TW), rR.hyW(yR).scaleInPlace(1 / gR), FW.addInPlace(rR).scaleInPlace(-1), fW.hyW(AW).scaleInPlace(-1 / TW), rR.hyW(NW).scaleInPlace(1 / iR), fW.addInPlace(rR).scaleInPlace(-1), QW.hyW(NW).scaleInPlace(-1 / iR), rR.hyW(yR).scaleInPlace(-1 / gR), QW.addInPlace(rR).scaleInPlace(-1);
        const cR = YW.vC[9];
        let XW;
        cR.hyW(lW).pNW(RW), tR.CrossToRef(FW, cR, rR), XW = tR.Dot(rR, eW);
        const jR = XW;
        cR.hyW(lW).pNW(MW), tR.CrossToRef(fW, cR, rR), XW = tR.Dot(rR, eW);
        const kR = XW;
        cR.hyW(lW).pNW(CW), tR.CrossToRef(QW, cR, rR), XW = tR.Dot(rR, eW);
        const aR = XW,
          sW = YW.vC[10];
        let dW, pW;
        jR > 0 && kR < 0 ? (sW.hyW(AW), dW = RW, pW = MW) : kR > 0 && aR < 0 ? (sW.hyW(NW), dW = MW, pW = CW) : (sW.hyW(yR).scaleInPlace(-1), dW = CW, pW = RW);
        const hW = YW.vC[9],
          UW = YW.vC[4];
        dW.subtractToRef(lW, rR), pW.subtractToRef(lW, hW), tR.CrossToRef(rR, hW, UW);
        if (!(tR.Dot(UW, eW) < 0)) return zR.hyW(lW), Math.abs(PW * IW);
        const EW = YW.vC[5];
        tR.CrossToRef(sW, UW, EW), EW.normalize();
        const VW = YW.vC[9];
        VW.hyW(dW).pNW(lW);
        const mR = VW.length();
        if (mR < wW.c) return zR.hyW(dW), tR.Distance(WW, dW);
        VW.normalizeFromLength(mR);
        const xR = tR.Dot(EW, VW),
          vR = YW.vC[7];
        vR.hyW(lW).addInPlace(EW.scaleInPlace(mR * xR)), rR.hyW(vR).pNW(dW), PW = sW.length(), sW.normalizeFromLength(PW);
        let KW = tR.Dot(rR, sW) / Math.max(PW, wW.c);
        return KW = (0, bR.Clamp)(KW, 0, 1), vR.hyW(dW).addInPlace(sW.scaleInPlace(KW * PW)), zR.hyW(vR), tR.Distance(WW, vR)
      }
      static Center(WW, RW) {
        return tR.CenterToRef(WW, RW, tR.Zero())
      }
      static CenterToRef(WW, RW, MW) {
        return MW.nzW((WW._x + RW._x) / 2, (WW._y + RW._y) / 2, (WW._z + RW._z) / 2)
      }
      static RotationFromAxis(WW, RW, MW) {
        const wW = new tR;
        return tR.RotationFromAxisToRef(WW, RW, MW, wW), wW
      }
      static RotationFromAxisToRef(WW, RW, MW, wW) {
        const CW = YW.Quaternion[0];
        return gR.RotationQuaternionFromAxisToRef(WW, RW, MW, CW), CW.toEulerAnglesToRef(wW), wW
      }
    }
    tR._V8PerformanceHack = new tR(.5, .5, .5), tR._UpReadOnly = tR.Up(), tR._DownReadOnly = tR.Down(), tR._LeftHandedForwardReadOnly = tR.Forward(!1), tR._RightHandedForwardReadOnly = tR.Forward(!0), tR._LeftHandedBackwardReadOnly = tR.Backward(!1), tR._RightHandedBackwardReadOnly = tR.Backward(!0), tR._RightReadOnly = tR.Right(), tR._LeftReadOnly = tR.Left(), tR._ZeroReadOnly = tR.Zero(), tR._OneReadOnly = tR.One();
    class TW {
      get x() {
        return this._x
      }
      set x(WW) {
        this._x = WW, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(WW) {
        this._y = WW, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(WW) {
        this._z = WW, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(WW) {
        this._w = WW, this._isDirty = !0
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = WW, this._y = RW, this._z = MW, this._w = wW
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let WW = eW(this._x);
        return WW = 397 * WW ^ eW(this._y), WW = 397 * WW ^ eW(this._z), WW = 397 * WW ^ eW(this._w), WW
      }
      JNW() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(WW, RW) {
        return void 0 === RW && (RW = 0), WW[RW] = this._x, WW[RW + 1] = this._y, WW[RW + 2] = this._z, WW[RW + 3] = this._w, this
      }
      MyW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return TW.FromArrayToRef(WW, RW, this), this
      }
      addInPlace(WW) {
        return this.x += WW._x, this.y += WW._y, this.z += WW._z, this.w += WW._w, this
      }
      addInPlaceFromFloats(WW, RW, MW, wW) {
        return this.x += WW, this.y += RW, this.z += MW, this.w += wW, this
      }
      add(WW) {
        return new TW(this._x + WW.x, this._y + WW.y, this._z + WW.z, this._w + WW.w)
      }
      addToRef(WW, RW) {
        return RW.x = this._x + WW.x, RW.y = this._y + WW.y, RW.z = this._z + WW.z, RW.w = this._w + WW.w, RW
      }
      pNW(WW) {
        return this.x -= WW.x, this.y -= WW.y, this.z -= WW.z, this.w -= WW.w, this
      }
      subtract(WW) {
        return new TW(this._x - WW.x, this._y - WW.y, this._z - WW.z, this._w - WW.w)
      }
      subtractToRef(WW, RW) {
        return RW.x = this._x - WW.x, RW.y = this._y - WW.y, RW.z = this._z - WW.z, RW.w = this._w - WW.w, RW
      }
      subtractFromFloats(WW, RW, MW, wW) {
        return new TW(this._x - WW, this._y - RW, this._z - MW, this._w - wW)
      }
      subtractFromFloatsToRef(WW, RW, MW, wW, CW) {
        return CW.x = this._x - WW, CW.y = this._y - RW, CW.z = this._z - MW, CW.w = this._w - wW, CW
      }
      zb() {
        return new TW(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(WW) {
        return WW.x = -this._x, WW.y = -this._y, WW.z = -this._z, WW.w = -this._w, WW
      }
      scaleInPlace(WW) {
        return this.x *= WW, this.y *= WW, this.z *= WW, this.w *= WW, this
      }
      scale(WW) {
        return new TW(this._x * WW, this._y * WW, this._z * WW, this._w * WW)
      }
      scaleToRef(WW, RW) {
        return RW.x = this._x * WW, RW.y = this._y * WW, RW.z = this._z * WW, RW.w = this._w * WW, RW
      }
      scaleAndAddToRef(WW, RW) {
        return RW.x += this._x * WW, RW.y += this._y * WW, RW.z += this._z * WW, RW.w += this._w * WW, RW
      }
      equals(WW) {
        return WW && this._x === WW.x && this._y === WW.y && this._z === WW.z && this._w === WW.w
      }
      equalsWithEpsilon(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wW.c;
        return WW && (0, bR.WithinEpsilon)(this._x, WW.x, RW) && (0, bR.WithinEpsilon)(this._y, WW.y, RW) && (0, bR.WithinEpsilon)(this._z, WW.z, RW) && (0, bR.WithinEpsilon)(this._w, WW.w, RW)
      }
      EtW(WW, RW, MW, wW) {
        return this._x === WW && this._y === RW && this._z === MW && this._w === wW
      }
      multiplyInPlace(WW) {
        return this.x *= WW.x, this.y *= WW.y, this.z *= WW.z, this.w *= WW.w, this
      }
      multiply(WW) {
        return new TW(this._x * WW.x, this._y * WW.y, this._z * WW.z, this._w * WW.w)
      }
      multiplyToRef(WW, RW) {
        return RW.x = this._x * WW.x, RW.y = this._y * WW.y, RW.z = this._z * WW.z, RW.w = this._w * WW.w, RW
      }
      multiplyByFloats(WW, RW, MW, wW) {
        return new TW(this._x * WW, this._y * RW, this._z * MW, this._w * wW)
      }
      divide(WW) {
        return new TW(this._x / WW.x, this._y / WW.y, this._z / WW.z, this._w / WW.w)
      }
      divideToRef(WW, RW) {
        return RW.x = this._x / WW.x, RW.y = this._y / WW.y, RW.z = this._z / WW.z, RW.w = this._w / WW.w, RW
      }
      divideInPlace(WW) {
        return this.divideToRef(WW, this)
      }
      minimizeInPlace(WW) {
        return WW.x < this._x && (this.x = WW.x), WW.y < this._y && (this.y = WW.y), WW.z < this._z && (this.z = WW.z), WW.w < this._w && (this.w = WW.w), this
      }
      maximizeInPlace(WW) {
        return WW.x > this._x && (this.x = WW.x), WW.y > this._y && (this.y = WW.y), WW.z > this._z && (this.z = WW.z), WW.w > this._w && (this.w = WW.w), this
      }
      minimizeInPlaceFromFloats(WW, RW, MW, wW) {
        return this.x = Math.min(WW, this._x), this.y = Math.min(RW, this._y), this.z = Math.min(MW, this._z), this.w = Math.min(wW, this._w), this
      }
      maximizeInPlaceFromFloats(WW, RW, MW, wW) {
        return this.x = Math.max(WW, this._x), this.y = Math.max(RW, this._y), this.z = Math.max(MW, this._z), this.w = Math.max(wW, this._w), this
      }
      floorToRef(WW) {
        return WW.x = Math.floor(this._x), WW.y = Math.floor(this._y), WW.z = Math.floor(this._z), WW.w = Math.floor(this._w), WW
      }
      floor() {
        return new TW(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(WW) {
        return WW.x = this._x - Math.floor(this._x), WW.y = this._y - Math.floor(this._y), WW.z = this._z - Math.floor(this._z), WW.w = this._w - Math.floor(this._w), WW
      }
      fract() {
        return new TW(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(WW) {
        return 0 === WW || 1 === WW ? this : this.scaleInPlace(1 / WW)
      }
      normalizeToNew() {
        return this.normalizeToRef(new TW)
      }
      normalizeToRef(WW) {
        const RW = this.length();
        return 0 === RW || 1 === RW ? (WW.x = this._x, WW.y = this._y, WW.z = this._z, WW.w = this._w, WW) : this.scaleToRef(1 / RW, WW)
      }
      toVector3() {
        return new tR(this._x, this._y, this._z)
      }
      clone() {
        return new TW(this._x, this._y, this._z, this._w)
      }
      hyW(WW) {
        return this.x = WW.x, this.y = WW.y, this.z = WW.z, this.w = WW.w, this
      }
      nzW(WW, RW, MW, wW) {
        return this.x = WW, this.y = RW, this.z = MW, this.w = wW, this
      }
      set(WW, RW, MW, wW) {
        return this.nzW(WW, RW, MW, wW)
      }
      YzW(WW) {
        return this.x = this.y = this.z = this.w = WW, this
      }
      dot(WW) {
        return this._x * WW.x + this._y * WW.y + this._z * WW.z + this._w * WW.w
      }
      static FromArray(WW, RW) {
        return RW || (RW = 0), new TW(WW[RW], WW[RW + 1], WW[RW + 2], WW[RW + 3])
      }
      static FromArrayToRef(WW, RW, MW) {
        return MW.x = WW[RW], MW.y = WW[RW + 1], MW.z = WW[RW + 2], MW.w = WW[RW + 3], MW
      }
      static FromFloatArrayToRef(WW, RW, MW) {
        return TW.FromArrayToRef(WW, RW, MW), MW
      }
      static FromFloatsToRef(WW, RW, MW, wW, CW) {
        return CW.x = WW, CW.y = RW, CW.z = MW, CW.w = wW, CW
      }
      static Zero() {
        return new TW(0, 0, 0, 0)
      }
      static One() {
        return new TW(1, 1, 1, 1)
      }
      static Random() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new TW((0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW))
      }
      static RandomToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        return MW.x = (0, bR.RandomRange)(WW, RW), MW.y = (0, bR.RandomRange)(WW, RW), MW.z = (0, bR.RandomRange)(WW, RW), MW.w = (0, bR.RandomRange)(WW, RW), MW
      }
      static Clamp(WW, RW, MW) {
        return TW.ClampToRef(WW, RW, MW, new TW)
      }
      static ClampToRef(WW, RW, MW, wW) {
        return wW.x = (0, bR.Clamp)(WW.x, RW.x, MW.x), wW.y = (0, bR.Clamp)(WW.y, RW.y, MW.y), wW.z = (0, bR.Clamp)(WW.z, RW.z, MW.z), wW.w = (0, bR.Clamp)(WW.w, RW.w, MW.w), wW
      }
      static CheckExtends(WW, RW, MW) {
        RW.minimizeInPlace(WW), MW.maximizeInPlace(WW)
      }
      static get ZeroReadOnly() {
        return TW._ZeroReadOnly
      }
      static Normalize(WW) {
        return TW.NormalizeToRef(WW, new TW)
      }
      static NormalizeToRef(WW, RW) {
        return WW.normalizeToRef(RW), RW
      }
      static Minimize(WW, RW) {
        const MW = new TW;
        return MW.hyW(WW), MW.minimizeInPlace(RW), MW
      }
      static Maximize(WW, RW) {
        const MW = new TW;
        return MW.hyW(WW), MW.maximizeInPlace(RW), MW
      }
      static Distance(WW, RW) {
        return Math.sqrt(TW.DistanceSquared(WW, RW))
      }
      static DistanceSquared(WW, RW) {
        const MW = WW.x - RW.x,
          wW = WW.y - RW.y,
          CW = WW.z - RW.z,
          zR = WW.w - RW.w;
        return MW * MW + wW * wW + CW * CW + zR * zR
      }
      static Center(WW, RW) {
        return TW.CenterToRef(WW, RW, new TW)
      }
      static CenterToRef(WW, RW, MW) {
        return MW.x = (WW.x + RW.x) / 2, MW.y = (WW.y + RW.y) / 2, MW.z = (WW.z + RW.z) / 2, MW.w = (WW.w + RW.w) / 2, MW
      }
      static TransformCoordinates(WW, RW) {
        return TW.TransformCoordinatesToRef(WW, RW, new TW)
      }
      static TransformCoordinatesToRef(WW, RW, MW) {
        return TW.TransformCoordinatesFromFloatsToRef(WW._x, WW._y, WW._z, RW, MW), MW
      }
      static TransformCoordinatesFromFloatsToRef(WW, RW, MW, wW, CW) {
        const zR = wW.m,
          AW = WW * zR[0] + RW * zR[4] + MW * zR[8] + zR[12],
          bR = WW * zR[1] + RW * zR[5] + MW * zR[9] + zR[13],
          yR = WW * zR[2] + RW * zR[6] + MW * zR[10] + zR[14],
          NW = WW * zR[3] + RW * zR[7] + MW * zR[11] + zR[15];
        return CW.x = AW, CW.y = bR, CW.z = yR, CW.w = NW, CW
      }
      static TransformNormal(WW, RW) {
        return TW.TransformNormalToRef(WW, RW, new TW)
      }
      static TransformNormalToRef(WW, RW, MW) {
        const wW = RW.m,
          CW = WW.x * wW[0] + WW.y * wW[4] + WW.z * wW[8],
          zR = WW.x * wW[1] + WW.y * wW[5] + WW.z * wW[9],
          AW = WW.x * wW[2] + WW.y * wW[6] + WW.z * wW[10];
        return MW.x = CW, MW.y = zR, MW.z = AW, MW.w = WW.w, MW
      }
      static TransformNormalFromFloatsToRef(WW, RW, MW, wW, CW, zR) {
        const AW = CW.m;
        return zR.x = WW * AW[0] + RW * AW[4] + MW * AW[8], zR.y = WW * AW[1] + RW * AW[5] + MW * AW[9], zR.z = WW * AW[2] + RW * AW[6] + MW * AW[10], zR.w = wW, zR
      }
      static FromVector3(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new TW(WW._x, WW._y, WW._z, RW)
      }
      static Dot(WW, RW) {
        return WW.x * RW.x + WW.y * RW.y + WW.z * RW.z + WW.w * RW.w
      }
    }
    TW._V8PerformanceHack = new TW(.5, .5, .5, .5), TW._ZeroReadOnly = TW.Zero();
    class gR {
      get x() {
        return this._x
      }
      set x(WW) {
        this._x = WW, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(WW) {
        this._y = WW, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(WW) {
        this._z = WW, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(WW) {
        this._w = WW, this._isDirty = !0
      }
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = WW, this._y = RW, this._z = MW, this._w = wW
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let WW = eW(this._x);
        return WW = 397 * WW ^ eW(this._y), WW = 397 * WW ^ eW(this._z), WW = 397 * WW ^ eW(this._w), WW
      }
      JNW() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[RW] = this._x, WW[RW + 1] = this._y, WW[RW + 2] = this._z, WW[RW + 3] = this._w, this
      }
      MyW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return gR.FromArrayToRef(WW, RW, this)
      }
      equals(WW) {
        return WW && this._x === WW._x && this._y === WW._y && this._z === WW._z && this._w === WW._w
      }
      equalsWithEpsilon(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wW.c;
        return WW && (0, bR.WithinEpsilon)(this._x, WW._x, RW) && (0, bR.WithinEpsilon)(this._y, WW._y, RW) && (0, bR.WithinEpsilon)(this._z, WW._z, RW) && (0, bR.WithinEpsilon)(this._w, WW._w, RW)
      }
      isApprox(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wW.c;
        return WW && ((0, bR.WithinEpsilon)(this._x, WW._x, RW) && (0, bR.WithinEpsilon)(this._y, WW._y, RW) && (0, bR.WithinEpsilon)(this._z, WW._z, RW) && (0, bR.WithinEpsilon)(this._w, WW._w, RW) || (0, bR.WithinEpsilon)(this._x, -WW._x, RW) && (0, bR.WithinEpsilon)(this._y, -WW._y, RW) && (0, bR.WithinEpsilon)(this._z, -WW._z, RW) && (0, bR.WithinEpsilon)(this._w, -WW._w, RW))
      }
      clone() {
        return new gR(this._x, this._y, this._z, this._w)
      }
      hyW(WW) {
        return this._x = WW._x, this._y = WW._y, this._z = WW._z, this._w = WW._w, this._isDirty = !0, this
      }
      nzW(WW, RW, MW, wW) {
        return this._x = WW, this._y = RW, this._z = MW, this._w = wW, this._isDirty = !0, this
      }
      set(WW, RW, MW, wW) {
        return this.nzW(WW, RW, MW, wW)
      }
      YzW(WW) {
        return this.nzW(WW, WW, WW, WW)
      }
      add(WW) {
        return new gR(this._x + WW._x, this._y + WW._y, this._z + WW._z, this._w + WW._w)
      }
      addInPlace(WW) {
        return this._x += WW._x, this._y += WW._y, this._z += WW._z, this._w += WW._w, this._isDirty = !0, this
      }
      addToRef(WW, RW) {
        return RW._x = this._x + WW._x, RW._y = this._y + WW._y, RW._z = this._z + WW._z, RW._w = this._w + WW._w, RW._isDirty = !0, RW
      }
      addInPlaceFromFloats(WW, RW, MW, wW) {
        return this._x += WW, this._y += RW, this._z += MW, this._w += wW, this._isDirty = !0, this
      }
      subtractToRef(WW, RW) {
        return RW._x = this._x - WW._x, RW._y = this._y - WW._y, RW._z = this._z - WW._z, RW._w = this._w - WW._w, RW._isDirty = !0, RW
      }
      subtractFromFloats(WW, RW, MW, wW) {
        return this.subtractFromFloatsToRef(WW, RW, MW, wW, new gR)
      }
      subtractFromFloatsToRef(WW, RW, MW, wW, CW) {
        return CW._x = this._x - WW, CW._y = this._y - RW, CW._z = this._z - MW, CW._w = this._w - wW, CW._isDirty = !0, CW
      }
      subtract(WW) {
        return new gR(this._x - WW._x, this._y - WW._y, this._z - WW._z, this._w - WW._w)
      }
      pNW(WW) {
        return this._x -= WW._x, this._y -= WW._y, this._z -= WW._z, this._w -= WW._w, this._isDirty = !0, this
      }
      scale(WW) {
        return new gR(this._x * WW, this._y * WW, this._z * WW, this._w * WW)
      }
      scaleToRef(WW, RW) {
        return RW._x = this._x * WW, RW._y = this._y * WW, RW._z = this._z * WW, RW._w = this._w * WW, RW._isDirty = !0, RW
      }
      scaleInPlace(WW) {
        return this._x *= WW, this._y *= WW, this._z *= WW, this._w *= WW, this._isDirty = !0, this
      }
      scaleAndAddToRef(WW, RW) {
        return RW._x += this._x * WW, RW._y += this._y * WW, RW._z += this._z * WW, RW._w += this._w * WW, RW._isDirty = !0, RW
      }
      multiply(WW) {
        const RW = new gR(0, 0, 0, 1);
        return this.multiplyToRef(WW, RW), RW
      }
      multiplyToRef(WW, RW) {
        const MW = this._x * WW._w + this._y * WW._z - this._z * WW._y + this._w * WW._x,
          wW = -this._x * WW._z + this._y * WW._w + this._z * WW._x + this._w * WW._y,
          CW = this._x * WW._y - this._y * WW._x + this._z * WW._w + this._w * WW._z,
          zR = -this._x * WW._x - this._y * WW._y - this._z * WW._z + this._w * WW._w;
        return RW.nzW(MW, wW, CW, zR), RW
      }
      multiplyInPlace(WW) {
        return this.multiplyToRef(WW, this)
      }
      multiplyByFloats(WW, RW, MW, wW) {
        return this._x *= WW, this._y *= RW, this._z *= MW, this._w *= wW, this._isDirty = !0, this
      }
      divide(WW) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(WW, RW) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(WW) {
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
      zb() {
        return this.negateToRef(new gR)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(WW) {
        return WW._x = -this._x, WW._y = -this._y, WW._z = -this._z, WW._w = -this._w, WW._isDirty = !0, WW
      }
      EtW(WW, RW, MW, wW) {
        return this._x === WW && this._y === RW && this._z === MW && this._w === wW
      }
      floorToRef(WW) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(WW) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(WW) {
        return WW.nzW(-this._x, -this._y, -this._z, this._w), WW
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new gR(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const WW = this.conjugate(),
          RW = this.lengthSquared();
        return 0 == RW || 1 == RW || WW.scaleInPlace(1 / RW), WW
      }
      invertInPlace() {
        this.conjugateInPlace();
        const WW = this.lengthSquared();
        return 0 == WW || 1 == WW || this.scaleInPlace(1 / WW), this
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
      normalizeFromLength(WW) {
        return 0 === WW || 1 === WW ? this : this.scaleInPlace(1 / WW)
      }
      normalizeToNew() {
        const WW = new gR(0, 0, 0, 1);
        return this.normalizeToRef(WW), WW
      }
      normalizeToRef(WW) {
        const RW = this.length();
        return 0 === RW || 1 === RW ? WW.nzW(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / RW, WW)
      }
      toEulerAngles() {
        const WW = tR.Zero();
        return this.toEulerAnglesToRef(WW), WW
      }
      toEulerAnglesToRef(WW) {
        const RW = this._z,
          MW = this._x,
          wW = this._y,
          CW = this._w,
          zR = wW * RW - MW * CW,
          AW = .4999999;
        if (zR < -AW) WW._y = 2 * Math.atan2(wW, CW), WW._x = Math.PI / 2, WW._z = 0, WW._isDirty = !0;
        else if (zR > AW) WW._y = 2 * Math.atan2(wW, CW), WW._x = -Math.PI / 2, WW._z = 0, WW._isDirty = !0;
        else {
          const AW = CW * CW,
            bR = RW * RW,
            yR = MW * MW,
            NW = wW * wW;
          WW._z = Math.atan2(2 * (MW * wW + RW * CW), -bR - yR + NW + AW), WW._x = Math.asin(-2 * zR), WW._y = Math.atan2(2 * (RW * MW + wW * CW), bR - yR - NW + AW), WW._isDirty = !0
        }
        return WW
      }
      toAlphaBetaGammaToRef(WW) {
        const RW = this._z,
          MW = this._x,
          wW = this._y,
          CW = this._w,
          zR = Math.sqrt(MW * MW + wW * wW),
          AW = Math.sqrt(RW * RW + CW * CW),
          bR = 2 * Math.atan2(zR, AW),
          yR = 2 * Math.atan2(RW, CW),
          NW = 2 * Math.atan2(wW, MW),
          eW = (yR + NW) / 2,
          BW = (yR - NW) / 2;
        return WW.set(BW, bR, eW), WW
      }
      toRotationMatrix(WW) {
        return iR.FromQuaternionToRef(this, WW), WW
      }
      fromRotationMatrix(WW) {
        return gR.FromRotationMatrixToRef(WW, this), this
      }
      dot(WW) {
        return this._x * WW._x + this._y * WW._y + this._z * WW._z + this._w * WW._w
      }
      toAxisAngle() {
        const WW = tR.Zero();
        return {
          axis: WW,
          angle: this.toAxisAngleToRef(WW)
        }
      }
      toAxisAngleToRef(WW) {
        let RW;
        const MW = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          wW = this._w;
        return MW > 0 ? (RW = 2 * Math.atan2(MW, wW), WW.set(this._x / MW, this._y / MW, this._z / MW)) : (RW = 0, WW.set(1, 0, 0)), RW
      }
      static FromRotationMatrix(WW) {
        const RW = new gR;
        return gR.FromRotationMatrixToRef(WW, RW), RW
      }
      static FromRotationMatrixToRef(WW, RW) {
        const MW = WW.m,
          wW = MW[0],
          CW = MW[4],
          zR = MW[8],
          AW = MW[1],
          bR = MW[5],
          yR = MW[9],
          NW = MW[2],
          eW = MW[6],
          BW = MW[10],
          tR = wW + bR + BW;
        let TW;
        return tR > 0 ? (TW = .5 / Math.sqrt(tR + 1), RW._w = .25 / TW, RW._x = (eW - yR) * TW, RW._y = (zR - NW) * TW, RW._z = (AW - CW) * TW, RW._isDirty = !0) : wW > bR && wW > BW ? (TW = 2 * Math.sqrt(1 + wW - bR - BW), RW._w = (eW - yR) / TW, RW._x = .25 * TW, RW._y = (CW + AW) / TW, RW._z = (zR + NW) / TW, RW._isDirty = !0) : bR > BW ? (TW = 2 * Math.sqrt(1 + bR - wW - BW), RW._w = (zR - NW) / TW, RW._x = (CW + AW) / TW, RW._y = .25 * TW, RW._z = (yR + eW) / TW, RW._isDirty = !0) : (TW = 2 * Math.sqrt(1 + BW - wW - bR), RW._w = (AW - CW) / TW, RW._x = (zR + NW) / TW, RW._y = (yR + eW) / TW, RW._z = .25 * TW, RW._isDirty = !0), RW
      }
      static Dot(WW, RW) {
        return WW._x * RW._x + WW._y * RW._y + WW._z * RW._z + WW._w * RW._w
      }
      static AreClose(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const wW = gR.Dot(WW, RW);
        return 1 - wW * wW <= MW
      }
      static SmoothToRef(WW, RW, MW, wW, CW) {
        let zR = 0 === wW ? 1 : MW / wW;
        return zR = (0, bR.Clamp)(zR, 0, 1), gR.SlerpToRef(WW, RW, zR, CW), CW
      }
      static Zero() {
        return new gR(0, 0, 0, 0)
      }
      static Inverse(WW) {
        return new gR(-WW._x, -WW._y, -WW._z, WW._w)
      }
      static InverseToRef(WW, RW) {
        return RW.set(-WW._x, -WW._y, -WW._z, WW._w), RW
      }
      static Identity() {
        return new gR(0, 0, 0, 1)
      }
      static IsIdentity(WW) {
        return WW && 0 === WW._x && 0 === WW._y && 0 === WW._z && 1 === WW._w
      }
      static RotationAxis(WW, RW) {
        return gR.RotationAxisToRef(WW, RW, new gR)
      }
      static RotationAxisToRef(WW, RW, MW) {
        MW._w = Math.cos(RW / 2);
        const wW = Math.sin(RW / 2) / WW.length();
        return MW._x = WW._x * wW, MW._y = WW._y * wW, MW._z = WW._z * wW, MW._isDirty = !0, MW
      }
      static FromArray(WW, RW) {
        return RW || (RW = 0), new gR(WW[RW], WW[RW + 1], WW[RW + 2], WW[RW + 3])
      }
      static FromArrayToRef(WW, RW, MW) {
        return MW._x = WW[RW], MW._y = WW[RW + 1], MW._z = WW[RW + 2], MW._w = WW[RW + 3], MW._isDirty = !0, MW
      }
      static FromFloatsToRef(WW, RW, MW, wW, CW) {
        return CW.nzW(WW, RW, MW, wW), CW
      }
      static FromEulerAngles(WW, RW, MW) {
        const wW = new gR;
        return gR.RotationYawPitchRollToRef(RW, WW, MW, wW), wW
      }
      static FromEulerAnglesToRef(WW, RW, MW, wW) {
        return gR.RotationYawPitchRollToRef(RW, WW, MW, wW), wW
      }
      static FromEulerVector(WW) {
        const RW = new gR;
        return gR.RotationYawPitchRollToRef(WW._y, WW._x, WW._z, RW), RW
      }
      static FromEulerVectorToRef(WW, RW) {
        return gR.RotationYawPitchRollToRef(WW._y, WW._x, WW._z, RW), RW
      }
      static FromUnitVectorsToRef(WW, RW, MW) {
        let CW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wW.c;
        const zR = tR.Dot(WW, RW) + 1;
        return zR < CW ? Math.abs(WW.x) > Math.abs(WW.z) ? MW.set(-WW.y, WW.x, 0, 0) : MW.set(0, -WW.z, WW.y, 0) : (tR.CrossToRef(WW, RW, JW.vC[0]), MW.set(JW.vC[0].x, JW.vC[0].y, JW.vC[0].z, zR)), MW.normalize()
      }
      static RotationYawPitchRoll(WW, RW, MW) {
        const wW = new gR;
        return gR.RotationYawPitchRollToRef(WW, RW, MW, wW), wW
      }
      static RotationYawPitchRollToRef(WW, RW, MW, wW) {
        const CW = .5 * MW,
          zR = .5 * RW,
          AW = .5 * WW,
          bR = Math.sin(CW),
          yR = Math.cos(CW),
          NW = Math.sin(zR),
          eW = Math.cos(zR),
          BW = Math.sin(AW),
          tR = Math.cos(AW);
        return wW._x = tR * NW * yR + BW * eW * bR, wW._y = BW * eW * yR - tR * NW * bR, wW._z = tR * eW * bR - BW * NW * yR, wW._w = tR * eW * yR + BW * NW * bR, wW._isDirty = !0, wW
      }
      static RotationAlphaBetaGamma(WW, RW, MW) {
        const wW = new gR;
        return gR.RotationAlphaBetaGammaToRef(WW, RW, MW, wW), wW
      }
      static RotationAlphaBetaGammaToRef(WW, RW, MW, wW) {
        const CW = .5 * (MW + WW),
          zR = .5 * (MW - WW),
          AW = .5 * RW;
        return wW._x = Math.cos(zR) * Math.sin(AW), wW._y = Math.sin(zR) * Math.sin(AW), wW._z = Math.sin(CW) * Math.cos(AW), wW._w = Math.cos(CW) * Math.cos(AW), wW._isDirty = !0, wW
      }
      static RotationQuaternionFromAxis(WW, RW, MW) {
        const wW = new gR(0, 0, 0, 0);
        return gR.RotationQuaternionFromAxisToRef(WW, RW, MW, wW), wW
      }
      static RotationQuaternionFromAxisToRef(WW, RW, MW, wW) {
        const CW = YW.Matrix[0];
        return WW = WW.normalizeToRef(YW.vC[0]), RW = RW.normalizeToRef(YW.vC[1]), MW = MW.normalizeToRef(YW.vC[2]), iR.FromXYZAxesToRef(WW, RW, MW, CW), gR.FromRotationMatrixToRef(CW, wW), wW
      }
      static FromLookDirectionLH(WW, RW) {
        const MW = new gR;
        return gR.FromLookDirectionLHToRef(WW, RW, MW), MW
      }
      static FromLookDirectionLHToRef(WW, RW, MW) {
        const wW = YW.Matrix[0];
        return iR.LookDirectionLHToRef(WW, RW, wW), gR.FromRotationMatrixToRef(wW, MW), MW
      }
      static FromLookDirectionRH(WW, RW) {
        const MW = new gR;
        return gR.FromLookDirectionRHToRef(WW, RW, MW), MW
      }
      static FromLookDirectionRHToRef(WW, RW, MW) {
        const wW = YW.Matrix[0];
        return iR.LookDirectionRHToRef(WW, RW, wW), gR.FromRotationMatrixToRef(wW, MW)
      }
      static Slerp(WW, RW, MW) {
        const wW = gR.Identity();
        return gR.SlerpToRef(WW, RW, MW, wW), wW
      }
      static SlerpToRef(WW, RW, MW, wW) {
        let CW, zR, AW = WW._x * RW._x + WW._y * RW._y + WW._z * RW._z + WW._w * RW._w,
          bR = !1;
        if (AW < 0 && (bR = !0, AW = -AW), AW > .999999) zR = 1 - MW, CW = bR ? -MW : MW;
        else {
          const WW = Math.acos(AW),
            RW = 1 / Math.sin(WW);
          zR = Math.sin((1 - MW) * WW) * RW, CW = bR ? -Math.sin(MW * WW) * RW : Math.sin(MW * WW) * RW
        }
        return wW._x = zR * WW._x + CW * RW._x, wW._y = zR * WW._y + CW * RW._y, wW._z = zR * WW._z + CW * RW._z, wW._w = zR * WW._w + CW * RW._w, wW._isDirty = !0, wW
      }
      static Hermite(WW, RW, MW, wW, CW) {
        const zR = CW * CW,
          AW = CW * zR,
          bR = 2 * AW - 3 * zR + 1,
          yR = -2 * AW + 3 * zR,
          NW = AW - 2 * zR + CW,
          eW = AW - zR,
          BW = WW._x * bR + MW._x * yR + RW._x * NW + wW._x * eW,
          tR = WW._y * bR + MW._y * yR + RW._y * NW + wW._y * eW,
          TW = WW._z * bR + MW._z * yR + RW._z * NW + wW._z * eW,
          iR = WW._w * bR + MW._w * yR + RW._w * NW + wW._w * eW;
        return new gR(BW, tR, TW, iR)
      }
      static Hermite1stDerivative(WW, RW, MW, wW, CW) {
        const zR = new gR;
        return this.Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR), zR
      }
      static Hermite1stDerivativeToRef(WW, RW, MW, wW, CW, zR) {
        const AW = CW * CW;
        return zR._x = 6 * (AW - CW) * WW._x + (3 * AW - 4 * CW + 1) * RW._x + 6 * (-AW + CW) * MW._x + (3 * AW - 2 * CW) * wW._x, zR._y = 6 * (AW - CW) * WW._y + (3 * AW - 4 * CW + 1) * RW._y + 6 * (-AW + CW) * MW._y + (3 * AW - 2 * CW) * wW._y, zR._z = 6 * (AW - CW) * WW._z + (3 * AW - 4 * CW + 1) * RW._z + 6 * (-AW + CW) * MW._z + (3 * AW - 2 * CW) * wW._z, zR._w = 6 * (AW - CW) * WW._w + (3 * AW - 4 * CW + 1) * RW._w + 6 * (-AW + CW) * MW._w + (3 * AW - 2 * CW) * wW._w, zR._isDirty = !0, zR
      }
      static Normalize(WW) {
        const RW = gR.Zero();
        return gR.NormalizeToRef(WW, RW), RW
      }
      static NormalizeToRef(WW, RW) {
        return WW.normalizeToRef(RW), RW
      }
      static Clamp(WW, RW, MW) {
        const wW = new gR;
        return gR.ClampToRef(WW, RW, MW, wW), wW
      }
      static ClampToRef(WW, RW, MW, wW) {
        return wW.nzW((0, bR.Clamp)(WW.x, RW.x, MW.x), (0, bR.Clamp)(WW.y, RW.y, MW.y), (0, bR.Clamp)(WW.z, RW.z, MW.z), (0, bR.Clamp)(WW.w, RW.w, MW.w))
      }
      static Random() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new gR((0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW))
      }
      static RandomToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).nzW((0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW), (0, bR.RandomRange)(WW, RW))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(WW, RW) {
        return Math.sqrt(gR.DistanceSquared(WW, RW))
      }
      static DistanceSquared(WW, RW) {
        const MW = WW.x - RW.x,
          wW = WW.y - RW.y,
          CW = WW.z - RW.z,
          zR = WW.w - RW.w;
        return MW * MW + wW * wW + CW * CW + zR * zR
      }
      static Center(WW, RW) {
        return gR.CenterToRef(WW, RW, gR.Zero())
      }
      static CenterToRef(WW, RW, MW) {
        return MW.nzW((WW.x + RW.x) / 2, (WW.y + RW.y) / 2, (WW.z + RW.z) / 2, (WW.w + RW.w) / 2)
      }
    }
    gR._V8PerformanceHack = new gR(.5, .5, .5, .5);
    class iR {
      static get Use64Bits() {
        return zR.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = yR.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = WW, this._isIdentity3x2 = WW || MW, this._isIdentityDirty = !this._isIdentity && RW, this._isIdentity3x2Dirty = !this._isIdentity3x2 && wW
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, zR.d.MatrixTrackPrecisionChange && zR.d.MatrixTrackedMatrices.push(this), this._m = new zR.d.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const WW = this._m;
          this._isIdentity = 1 === WW[0] && 0 === WW[1] && 0 === WW[2] && 0 === WW[3] && 0 === WW[4] && 1 === WW[5] && 0 === WW[6] && 0 === WW[7] && 0 === WW[8] && 0 === WW[9] && 1 === WW[10] && 0 === WW[11] && 0 === WW[12] && 0 === WW[13] && 0 === WW[14] && 1 === WW[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const WW = this._m,
          RW = WW[0],
          MW = WW[1],
          wW = WW[2],
          CW = WW[3],
          zR = WW[4],
          AW = WW[5],
          bR = WW[6],
          yR = WW[7],
          NW = WW[8],
          eW = WW[9],
          BW = WW[10],
          tR = WW[11],
          TW = WW[12],
          gR = WW[13],
          iR = WW[14],
          YW = WW[15],
          JW = BW * YW - iR * tR,
          PW = eW * YW - gR * tR,
          IW = eW * iR - gR * BW,
          oW = NW * YW - TW * tR,
          lW = NW * iR - BW * TW,
          FW = NW * gR - TW * eW;
        return RW * +(AW * JW - bR * PW + yR * IW) + MW * -(zR * JW - bR * oW + yR * lW) + wW * +(zR * PW - AW * oW + yR * FW) + CW * -(zR * IW - AW * lW + bR * FW)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!WW) return this._m;
        const MW = this._m;
        for (let wW = 0; wW < 16; wW++) WW[RW + wW] = MW[wW];
        return this
      }
      JNW() {
        return this._m
      }
      MyW(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return iR.FromArrayToRef(WW, RW, this)
      }
      nzW() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        return iR.FromArrayToRef(RW, 0, this)
      }
      set() {
        const WW = this._m;
        for (let RW = 0; RW < 16; RW++) WW[RW] = RW < 0 || arguments.length <= RW ? void 0 : arguments[RW];
        return this.markAsUpdated(), this
      }
      YzW(WW) {
        const RW = this._m;
        for (let MW = 0; MW < 16; MW++) RW[MW] = WW;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return iR.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(WW) {
        const RW = new iR;
        return this.addToRef(WW, RW), RW
      }
      addToRef(WW, RW) {
        const MW = this._m,
          wW = RW._m,
          CW = WW.m;
        for (let zR = 0; zR < 16; zR++) wW[zR] = MW[zR] + CW[zR];
        return RW.markAsUpdated(), RW
      }
      addToSelf(WW) {
        const RW = this._m,
          MW = WW.m;
        return RW[0] += MW[0], RW[1] += MW[1], RW[2] += MW[2], RW[3] += MW[3], RW[4] += MW[4], RW[5] += MW[5], RW[6] += MW[6], RW[7] += MW[7], RW[8] += MW[8], RW[9] += MW[9], RW[10] += MW[10], RW[11] += MW[11], RW[12] += MW[12], RW[13] += MW[13], RW[14] += MW[14], RW[15] += MW[15], this.markAsUpdated(), this
      }
      addInPlace(WW) {
        const RW = this._m,
          MW = WW.m;
        for (let wW = 0; wW < 16; wW++) RW[wW] += MW[wW];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const WW = this._m;
        for (let RW = 0; RW < 16; RW++) WW[RW] += RW < 0 || arguments.length <= RW ? void 0 : arguments[RW];
        return this.markAsUpdated(), this
      }
      subtract(WW) {
        const RW = this._m,
          MW = WW.m;
        for (let wW = 0; wW < 16; wW++) RW[wW] -= MW[wW];
        return this.markAsUpdated(), this
      }
      subtractToRef(WW, RW) {
        const MW = this._m,
          wW = WW.m,
          CW = RW._m;
        for (let zR = 0; zR < 16; zR++) CW[zR] = MW[zR] - wW[zR];
        return RW.markAsUpdated(), RW
      }
      pNW(WW) {
        const RW = this._m,
          MW = WW.m;
        for (let wW = 0; wW < 16; wW++) RW[wW] -= MW[wW];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        return this.subtractFromFloatsToRef(...RW, new iR)
      }
      subtractFromFloatsToRef() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        const wW = RW.pop(),
          CW = this._m,
          zR = wW._m,
          AW = RW;
        for (let bR = 0; bR < 16; bR++) zR[bR] = CW[bR] - AW[bR];
        return wW.markAsUpdated(), wW
      }
      invertToRef(WW) {
        return !0 === this._isIdentity ? (iR.IdentityToRef(WW), WW) : ((0, yR.f)(this, WW.JNW()) ? WW.markAsUpdated() : WW.hyW(this), WW)
      }
      addAtIndex(WW, RW) {
        return this._m[WW] += RW, this.markAsUpdated(), this
      }
      multiplyAtIndex(WW, RW) {
        return this._m[WW] *= RW, this.markAsUpdated(), this
      }
      setTranslationFromFloats(WW, RW, MW) {
        return this._m[12] = WW, this._m[13] = RW, this._m[14] = MW, this.markAsUpdated(), this
      }
      addTranslationFromFloats(WW, RW, MW) {
        return this._m[12] += WW, this._m[13] += RW, this._m[14] += MW, this.markAsUpdated(), this
      }
      setTranslation(WW) {
        return this.setTranslationFromFloats(WW._x, WW._y, WW._z)
      }
      getTranslation() {
        return new tR(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(WW) {
        return WW.x = this._m[12], WW.y = this._m[13], WW.z = this._m[14], WW
      }
      removeRotationAndScaling() {
        const WW = this.m;
        return iR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, WW[12], WW[13], WW[14], WW[15], this), this._updateIdentityStatus(0 === WW[12] && 0 === WW[13] && 0 === WW[14] && 1 === WW[15]), this
      }
      hyW(WW) {
        WW.copyToArray(this._m);
        const RW = WW;
        return this.updateFlag = RW.updateFlag, this._updateIdentityStatus(RW._isIdentity, RW._isIdentityDirty, RW._isIdentity3x2, RW._isIdentity3x2Dirty), this
      }
      copyToArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, yR.e)(this, WW, RW), this
      }
      multiply(WW) {
        const RW = new iR;
        return this.multiplyToRef(WW, RW), RW
      }
      multiplyInPlace(WW) {
        const RW = this._m,
          MW = WW.m;
        for (let wW = 0; wW < 16; wW++) RW[wW] *= MW[wW];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const WW = this._m;
        for (let RW = 0; RW < 16; RW++) WW[RW] *= RW < 0 || arguments.length <= RW ? void 0 : arguments[RW];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var WW = arguments.length, RW = new Array(WW), MW = 0; MW < WW; MW++) RW[MW] = arguments[MW];
        const wW = RW.pop(),
          CW = this._m,
          zR = wW._m,
          AW = RW;
        for (let bR = 0; bR < 16; bR++) zR[bR] = CW[bR] * AW[bR];
        return wW.markAsUpdated(), wW
      }
      multiplyToRef(WW, RW) {
        return this._isIdentity ? (RW.hyW(WW), RW) : WW._isIdentity ? (RW.hyW(this), RW) : (this.multiplyToArray(WW, RW._m, 0), RW.markAsUpdated(), RW)
      }
      multiplyToArray(WW, RW, MW) {
        return (0, yR.n)(this, WW, RW, MW), this
      }
      divide(WW) {
        return this.divideToRef(WW, new iR)
      }
      divideToRef(WW, RW) {
        const MW = this._m,
          wW = WW.m,
          CW = RW._m;
        for (let zR = 0; zR < 16; zR++) CW[zR] = MW[zR] / wW[zR];
        return RW.markAsUpdated(), RW
      }
      divideInPlace(WW) {
        const RW = this._m,
          MW = WW.m;
        for (let wW = 0; wW < 16; wW++) RW[wW] /= MW[wW];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(WW) {
        const RW = this._m,
          MW = WW.m;
        for (let wW = 0; wW < 16; wW++) RW[wW] = Math.min(RW[wW], MW[wW]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const WW = this._m;
        for (let RW = 0; RW < 16; RW++) WW[RW] = Math.min(WW[RW], RW < 0 || arguments.length <= RW ? void 0 : arguments[RW]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(WW) {
        const RW = this._m,
          MW = WW.m;
        for (let wW = 0; wW < 16; wW++) RW[wW] = Math.max(RW[wW], MW[wW]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const WW = this._m;
        for (let RW = 0; RW < 16; RW++) WW[RW] = Math.max(WW[RW], RW < 0 || arguments.length <= RW ? void 0 : arguments[RW]);
        return this.markAsUpdated(), this
      }
      zb() {
        return this.negateToRef(new iR)
      }
      negateInPlace() {
        const WW = this._m;
        for (let RW = 0; RW < 16; RW++) WW[RW] = -WW[RW];
        return this.markAsUpdated(), this
      }
      negateToRef(WW) {
        const RW = this._m,
          MW = WW._m;
        for (let wW = 0; wW < 16; wW++) MW[wW] = -RW[wW];
        return WW.markAsUpdated(), WW
      }
      equals(WW) {
        const RW = WW;
        if (!RW) return !1;
        if ((this._isIdentity || RW._isIdentity) && !this._isIdentityDirty && !RW._isIdentityDirty) return this._isIdentity && RW._isIdentity;
        const MW = this.m,
          wW = RW.m;
        return MW[0] === wW[0] && MW[1] === wW[1] && MW[2] === wW[2] && MW[3] === wW[3] && MW[4] === wW[4] && MW[5] === wW[5] && MW[6] === wW[6] && MW[7] === wW[7] && MW[8] === wW[8] && MW[9] === wW[9] && MW[10] === wW[10] && MW[11] === wW[11] && MW[12] === wW[12] && MW[13] === wW[13] && MW[14] === wW[14] && MW[15] === wW[15]
      }
      equalsWithEpsilon(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const MW = this._m,
          wW = WW.m;
        for (let CW = 0; CW < 16; CW++)
          if (!(0, bR.WithinEpsilon)(MW[CW], wW[CW], RW)) return !1;
        return !0
      }
      EtW() {
        const WW = this._m;
        for (let RW = 0; RW < 16; RW++)
          if (WW[RW] != (RW < 0 || arguments.length <= RW ? void 0 : arguments[RW])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new iR)
      }
      floorToRef(WW) {
        const RW = this._m,
          MW = WW._m;
        for (let wW = 0; wW < 16; wW++) MW[wW] = Math.floor(RW[wW]);
        return WW.markAsUpdated(), WW
      }
      fract() {
        return this.fractToRef(new iR)
      }
      fractToRef(WW) {
        const RW = this._m,
          MW = WW._m;
        for (let wW = 0; wW < 16; wW++) MW[wW] = RW[wW] - Math.floor(RW[wW]);
        return WW.markAsUpdated(), WW
      }
      clone() {
        const WW = new iR;
        return WW.hyW(this), WW
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let WW = eW(this._m[0]);
        for (let RW = 1; RW < 16; RW++) WW = 397 * WW ^ eW(this._m[RW]);
        return WW
      }
      decomposeToTransformNode(WW) {
        return WW.rotationQuaternion = WW.rotationQuaternion || new gR, this.decompose(WW.NA, WW.rotationQuaternion, WW.position)
      }
      decompose(WW, RW, MW, wW) {
        let CW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return MW && MW.YzW(0), WW && WW.YzW(1), RW && RW.nzW(0, 0, 0, 1), !0;
        const zR = this._m;
        if (MW && MW.nzW(zR[12], zR[13], zR[14]), (WW = WW || YW.vC[0]).x = Math.sqrt(zR[0] * zR[0] + zR[1] * zR[1] + zR[2] * zR[2]), WW.y = Math.sqrt(zR[4] * zR[4] + zR[5] * zR[5] + zR[6] * zR[6]), WW.z = Math.sqrt(zR[8] * zR[8] + zR[9] * zR[9] + zR[10] * zR[10]), wW) {
          const RW = (CW ? wW.absoluteScaling.x : wW.NA.x) < 0 ? -1 : 1,
            MW = (CW ? wW.absoluteScaling.y : wW.NA.y) < 0 ? -1 : 1,
            zR = (CW ? wW.absoluteScaling.z : wW.NA.z) < 0 ? -1 : 1;
          WW.x *= RW, WW.y *= MW, WW.z *= zR
        } else this.determinant() <= 0 && (WW.y *= -1);
        if (0 === WW._x || 0 === WW._y || 0 === WW._z) return RW && RW.nzW(0, 0, 0, 1), !1;
        if (RW) {
          const MW = 1 / WW._x,
            wW = 1 / WW._y,
            CW = 1 / WW._z;
          iR.FromValuesToRef(zR[0] * MW, zR[1] * MW, zR[2] * MW, 0, zR[4] * wW, zR[5] * wW, zR[6] * wW, 0, zR[8] * CW, zR[9] * CW, zR[10] * CW, 0, 0, 0, 0, 1, YW.Matrix[0]), gR.FromRotationMatrixToRef(YW.Matrix[0], RW)
        }
        return !0
      }
      getRow(WW) {
        if (WW < 0 || WW > 3) return null;
        const RW = 4 * WW;
        return new TW(this._m[RW + 0], this._m[RW + 1], this._m[RW + 2], this._m[RW + 3])
      }
      getRowToRef(WW, RW) {
        if (WW >= 0 && WW <= 3) {
          const MW = 4 * WW;
          RW.x = this._m[MW + 0], RW.y = this._m[MW + 1], RW.z = this._m[MW + 2], RW.w = this._m[MW + 3]
        }
        return RW
      }
      setRow(WW, RW) {
        return this.setRowFromFloats(WW, RW.x, RW.y, RW.z, RW.w)
      }
      transpose() {
        const WW = new iR;
        return iR.TransposeToRef(this, WW), WW
      }
      transposeToRef(WW) {
        return iR.TransposeToRef(this, WW), WW
      }
      setRowFromFloats(WW, RW, MW, wW, CW) {
        if (WW < 0 || WW > 3) return this;
        const zR = 4 * WW;
        return this._m[zR + 0] = RW, this._m[zR + 1] = MW, this._m[zR + 2] = wW, this._m[zR + 3] = CW, this.markAsUpdated(), this
      }
      scale(WW) {
        const RW = new iR;
        return this.scaleToRef(WW, RW), RW
      }
      scaleToRef(WW, RW) {
        for (let MW = 0; MW < 16; MW++) RW._m[MW] = this._m[MW] * WW;
        return RW.markAsUpdated(), RW
      }
      scaleAndAddToRef(WW, RW) {
        for (let MW = 0; MW < 16; MW++) RW._m[MW] += this._m[MW] * WW;
        return RW.markAsUpdated(), RW
      }
      scaleInPlace(WW) {
        const RW = this._m;
        for (let MW = 0; MW < 16; MW++) RW[MW] *= WW;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(WW) {
        const RW = YW.Matrix[0];
        this.invertToRef(RW), RW.transposeToRef(WW);
        const MW = WW._m;
        return iR.FromValuesToRef(MW[0], MW[1], MW[2], 0, MW[4], MW[5], MW[6], 0, MW[8], MW[9], MW[10], 0, 0, 0, 0, 1, WW), WW
      }
      getRotationMatrix() {
        const WW = new iR;
        return this.getRotationMatrixToRef(WW), WW
      }
      getRotationMatrixToRef(WW) {
        const RW = YW.vC[0];
        if (!this.decompose(RW)) return iR.IdentityToRef(WW), WW;
        const MW = this._m,
          wW = 1 / RW._x,
          CW = 1 / RW._y,
          zR = 1 / RW._z;
        return iR.FromValuesToRef(MW[0] * wW, MW[1] * wW, MW[2] * wW, 0, MW[4] * CW, MW[5] * CW, MW[6] * CW, 0, MW[8] * zR, MW[9] * zR, MW[10] * zR, 0, 0, 0, 0, 1, WW), WW
      }
      toggleModelMatrixHandInPlace() {
        const WW = this._m;
        return WW[2] *= -1, WW[6] *= -1, WW[8] *= -1, WW[9] *= -1, WW[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const WW = this._m;
        return WW[8] *= -1, WW[9] *= -1, WW[10] *= -1, WW[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(PW, this), this
      }
      static FromArray(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const MW = new iR;
        return iR.FromArrayToRef(WW, RW, MW), MW
      }
      static FromArrayToRef(WW, RW, MW) {
        for (let wW = 0; wW < 16; wW++) MW._m[wW] = WW[wW + RW];
        return MW.markAsUpdated(), MW
      }
      static FromFloat32ArrayToRefScaled(WW, RW, MW, wW) {
        return wW._m[0] = WW[0 + RW] * MW, wW._m[1] = WW[1 + RW] * MW, wW._m[2] = WW[2 + RW] * MW, wW._m[3] = WW[3 + RW] * MW, wW._m[4] = WW[4 + RW] * MW, wW._m[5] = WW[5 + RW] * MW, wW._m[6] = WW[6 + RW] * MW, wW._m[7] = WW[7 + RW] * MW, wW._m[8] = WW[8 + RW] * MW, wW._m[9] = WW[9 + RW] * MW, wW._m[10] = WW[10 + RW] * MW, wW._m[11] = WW[11 + RW] * MW, wW._m[12] = WW[12 + RW] * MW, wW._m[13] = WW[13 + RW] * MW, wW._m[14] = WW[14 + RW] * MW, wW._m[15] = WW[15 + RW] * MW, wW.markAsUpdated(), wW
      }
      static get IdentityReadOnly() {
        return iR._IdentityReadOnly
      }
      static FromValuesToRef(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, iR, YW) {
        const JW = YW._m;
        JW[0] = WW, JW[1] = RW, JW[2] = MW, JW[3] = wW, JW[4] = CW, JW[5] = zR, JW[6] = AW, JW[7] = bR, JW[8] = yR, JW[9] = NW, JW[10] = eW, JW[11] = BW, JW[12] = tR, JW[13] = TW, JW[14] = gR, JW[15] = iR, YW.markAsUpdated()
      }
      static FromValues(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW, BW, tR, TW, gR, YW) {
        const JW = new iR,
          PW = JW._m;
        return PW[0] = WW, PW[1] = RW, PW[2] = MW, PW[3] = wW, PW[4] = CW, PW[5] = zR, PW[6] = AW, PW[7] = bR, PW[8] = yR, PW[9] = NW, PW[10] = eW, PW[11] = BW, PW[12] = tR, PW[13] = TW, PW[14] = gR, PW[15] = YW, JW.markAsUpdated(), JW
      }
      static Compose(WW, RW, MW) {
        const wW = new iR;
        return iR.ComposeToRef(WW, RW, MW, wW), wW
      }
      static ComposeToRef(WW, RW, MW, wW) {
        const CW = wW._m,
          zR = RW._x,
          AW = RW._y,
          bR = RW._z,
          yR = RW._w,
          NW = zR + zR,
          eW = AW + AW,
          BW = bR + bR,
          tR = zR * NW,
          TW = zR * eW,
          gR = zR * BW,
          iR = AW * eW,
          YW = AW * BW,
          JW = bR * BW,
          PW = yR * NW,
          IW = yR * eW,
          oW = yR * BW,
          lW = WW._x,
          FW = WW._y,
          fW = WW._z;
        return CW[0] = (1 - (iR + JW)) * lW, CW[1] = (TW + oW) * lW, CW[2] = (gR - IW) * lW, CW[3] = 0, CW[4] = (TW - oW) * FW, CW[5] = (1 - (tR + JW)) * FW, CW[6] = (YW + PW) * FW, CW[7] = 0, CW[8] = (gR + IW) * fW, CW[9] = (YW - PW) * fW, CW[10] = (1 - (tR + iR)) * fW, CW[11] = 0, CW[12] = MW._x, CW[13] = MW._y, CW[14] = MW._z, CW[15] = 1, wW.markAsUpdated(), wW
      }
      static Identity() {
        const WW = iR.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return WW._updateIdentityStatus(!0), WW
      }
      static IdentityToRef(WW) {
        return iR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, WW), WW._updateIdentityStatus(!0), WW
      }
      static Zero() {
        const WW = iR.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return WW._updateIdentityStatus(!1), WW
      }
      static RotationX(WW) {
        const RW = new iR;
        return iR.RotationXToRef(WW, RW), RW
      }
      static Invert(WW) {
        const RW = new iR;
        return WW.invertToRef(RW), RW
      }
      static RotationXToRef(WW, RW) {
        const MW = Math.sin(WW),
          wW = Math.cos(WW);
        return iR.FromValuesToRef(1, 0, 0, 0, 0, wW, MW, 0, 0, -MW, wW, 0, 0, 0, 0, 1, RW), RW._updateIdentityStatus(1 === wW && 0 === MW), RW
      }
      static RotationY(WW) {
        const RW = new iR;
        return iR.RotationYToRef(WW, RW), RW
      }
      static RotationYToRef(WW, RW) {
        const MW = Math.sin(WW),
          wW = Math.cos(WW);
        return iR.FromValuesToRef(wW, 0, -MW, 0, 0, 1, 0, 0, MW, 0, wW, 0, 0, 0, 0, 1, RW), RW._updateIdentityStatus(1 === wW && 0 === MW), RW
      }
      static RotationZ(WW) {
        const RW = new iR;
        return iR.RotationZToRef(WW, RW), RW
      }
      static RotationZToRef(WW, RW) {
        const MW = Math.sin(WW),
          wW = Math.cos(WW);
        return iR.FromValuesToRef(wW, MW, 0, 0, -MW, wW, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, RW), RW._updateIdentityStatus(1 === wW && 0 === MW), RW
      }
      static RotationAxis(WW, RW) {
        const MW = new iR;
        return iR.RotationAxisToRef(WW, RW, MW), MW
      }
      static RotationAxisToRef(WW, RW, MW) {
        const wW = Math.sin(-RW),
          CW = Math.cos(-RW),
          zR = 1 - CW;
        WW = WW.normalizeToRef(YW.vC[0]);
        const AW = MW._m;
        return AW[0] = WW._x * WW._x * zR + CW, AW[1] = WW._x * WW._y * zR - WW._z * wW, AW[2] = WW._x * WW._z * zR + WW._y * wW, AW[3] = 0, AW[4] = WW._y * WW._x * zR + WW._z * wW, AW[5] = WW._y * WW._y * zR + CW, AW[6] = WW._y * WW._z * zR - WW._x * wW, AW[7] = 0, AW[8] = WW._z * WW._x * zR - WW._y * wW, AW[9] = WW._z * WW._y * zR + WW._x * wW, AW[10] = WW._z * WW._z * zR + CW, AW[11] = 0, AW[12] = 0, AW[13] = 0, AW[14] = 0, AW[15] = 1, MW.markAsUpdated(), MW
      }
      static RotationAlignToRef(WW, RW, MW) {
        let CW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const zR = tR.Dot(RW, WW),
          AW = MW._m;
        if (zR < -1 + wW.c) AW[0] = -1, AW[1] = 0, AW[2] = 0, AW[3] = 0, AW[4] = 0, AW[5] = CW ? 1 : -1, AW[6] = 0, AW[7] = 0, AW[8] = 0, AW[9] = 0, AW[10] = CW ? -1 : 1, AW[11] = 0;
        else {
          const MW = tR.Cross(RW, WW),
            wW = 1 / (1 + zR);
          AW[0] = MW._x * MW._x * wW + zR, AW[1] = MW._y * MW._x * wW - MW._z, AW[2] = MW._z * MW._x * wW + MW._y, AW[3] = 0, AW[4] = MW._x * MW._y * wW + MW._z, AW[5] = MW._y * MW._y * wW + zR, AW[6] = MW._z * MW._y * wW - MW._x, AW[7] = 0, AW[8] = MW._x * MW._z * wW - MW._y, AW[9] = MW._y * MW._z * wW + MW._x, AW[10] = MW._z * MW._z * wW + zR, AW[11] = 0
        }
        return AW[12] = 0, AW[13] = 0, AW[14] = 0, AW[15] = 1, MW.markAsUpdated(), MW
      }
      static RotationYawPitchRoll(WW, RW, MW) {
        const wW = new iR;
        return iR.RotationYawPitchRollToRef(WW, RW, MW, wW), wW
      }
      static RotationYawPitchRollToRef(WW, RW, MW, wW) {
        return gR.RotationYawPitchRollToRef(WW, RW, MW, YW.Quaternion[0]), YW.Quaternion[0].toRotationMatrix(wW), wW
      }
      static Scaling(WW, RW, MW) {
        const wW = new iR;
        return iR.ScalingToRef(WW, RW, MW, wW), wW
      }
      static ScalingToRef(WW, RW, MW, wW) {
        return iR.FromValuesToRef(WW, 0, 0, 0, 0, RW, 0, 0, 0, 0, MW, 0, 0, 0, 0, 1, wW), wW._updateIdentityStatus(1 === WW && 1 === RW && 1 === MW), wW
      }
      static Translation(WW, RW, MW) {
        const wW = new iR;
        return iR.TranslationToRef(WW, RW, MW, wW), wW
      }
      static TranslationToRef(WW, RW, MW, wW) {
        return iR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, WW, RW, MW, 1, wW), wW._updateIdentityStatus(0 === WW && 0 === RW && 0 === MW), wW
      }
      static Lerp(WW, RW, MW) {
        const wW = new iR;
        return iR.LerpToRef(WW, RW, MW, wW), wW
      }
      static LerpToRef(WW, RW, MW, wW) {
        const CW = wW._m,
          zR = WW.m,
          AW = RW.m;
        for (let bR = 0; bR < 16; bR++) CW[bR] = zR[bR] * (1 - MW) + AW[bR] * MW;
        return wW.markAsUpdated(), wW
      }
      static DecomposeLerp(WW, RW, MW) {
        const wW = new iR;
        return iR.DecomposeLerpToRef(WW, RW, MW, wW), wW
      }
      static DecomposeLerpToRef(WW, RW, MW, wW) {
        const CW = YW.vC[0],
          zR = YW.Quaternion[0],
          AW = YW.vC[1];
        WW.decompose(CW, zR, AW);
        const bR = YW.vC[2],
          yR = YW.Quaternion[1],
          NW = YW.vC[3];
        RW.decompose(bR, yR, NW);
        const eW = YW.vC[4];
        tR.LerpToRef(CW, bR, MW, eW);
        const BW = YW.Quaternion[2];
        gR.SlerpToRef(zR, yR, MW, BW);
        const TW = YW.vC[5];
        return tR.LerpToRef(AW, NW, MW, TW), iR.ComposeToRef(eW, BW, TW, wW), wW
      }
      static LookAtLH(WW, RW, MW) {
        const wW = new iR;
        return iR.LookAtLHToRef(WW, RW, MW, wW), wW
      }
      static LookAtLHToRef(WW, RW, MW, wW) {
        const CW = YW.vC[0],
          zR = YW.vC[1],
          AW = YW.vC[2];
        RW.subtractToRef(WW, AW), AW.normalize(), tR.CrossToRef(MW, AW, CW);
        const bR = CW.lengthSquared();
        0 === bR ? CW.x = 1 : CW.normalizeFromLength(Math.sqrt(bR)), tR.CrossToRef(AW, CW, zR), zR.normalize();
        const yR = -tR.Dot(CW, WW),
          NW = -tR.Dot(zR, WW),
          eW = -tR.Dot(AW, WW);
        return iR.FromValuesToRef(CW._x, zR._x, AW._x, 0, CW._y, zR._y, AW._y, 0, CW._z, zR._z, AW._z, 0, yR, NW, eW, 1, wW), wW
      }
      static LookAtRH(WW, RW, MW) {
        const wW = new iR;
        return iR.LookAtRHToRef(WW, RW, MW, wW), wW
      }
      static LookAtRHToRef(WW, RW, MW, wW) {
        const CW = YW.vC[0],
          zR = YW.vC[1],
          AW = YW.vC[2];
        WW.subtractToRef(RW, AW), AW.normalize(), tR.CrossToRef(MW, AW, CW);
        const bR = CW.lengthSquared();
        0 === bR ? CW.x = 1 : CW.normalizeFromLength(Math.sqrt(bR)), tR.CrossToRef(AW, CW, zR), zR.normalize();
        const yR = -tR.Dot(CW, WW),
          NW = -tR.Dot(zR, WW),
          eW = -tR.Dot(AW, WW);
        return iR.FromValuesToRef(CW._x, zR._x, AW._x, 0, CW._y, zR._y, AW._y, 0, CW._z, zR._z, AW._z, 0, yR, NW, eW, 1, wW), wW
      }
      static LookDirectionLH(WW, RW) {
        const MW = new iR;
        return iR.LookDirectionLHToRef(WW, RW, MW), MW
      }
      static LookDirectionLHToRef(WW, RW, MW) {
        const wW = YW.vC[0];
        wW.hyW(WW), wW.scaleInPlace(-1);
        const CW = YW.vC[1];
        return tR.CrossToRef(RW, wW, CW), iR.FromValuesToRef(CW._x, CW._y, CW._z, 0, RW._x, RW._y, RW._z, 0, wW._x, wW._y, wW._z, 0, 0, 0, 0, 1, MW), MW
      }
      static LookDirectionRH(WW, RW) {
        const MW = new iR;
        return iR.LookDirectionRHToRef(WW, RW, MW), MW
      }
      static LookDirectionRHToRef(WW, RW, MW) {
        const wW = YW.vC[2];
        return tR.CrossToRef(RW, WW, wW), iR.FromValuesToRef(wW._x, wW._y, wW._z, 0, RW._x, RW._y, RW._z, 0, WW._x, WW._y, WW._z, 0, 0, 0, 0, 1, MW), MW
      }
      static OrthoLH(WW, RW, MW, wW, CW) {
        const zR = new iR;
        return iR.OrthoLHToRef(WW, RW, MW, wW, zR, CW), zR
      }
      static OrthoLHToRef(WW, RW, MW, wW, CW, zR) {
        const AW = 2 / WW,
          bR = 2 / RW,
          yR = 2 / (wW - MW),
          NW = -(wW + MW) / (wW - MW);
        return iR.FromValuesToRef(AW, 0, 0, 0, 0, bR, 0, 0, 0, 0, yR, 0, 0, 0, NW, 1, CW), zR && CW.multiplyToRef(PW, CW), CW._updateIdentityStatus(1 === AW && 1 === bR && 1 === yR && 0 === NW), CW
      }
      static OrthoOffCenterLH(WW, RW, MW, wW, CW, zR, AW) {
        const bR = new iR;
        return iR.OrthoOffCenterLHToRef(WW, RW, MW, wW, CW, zR, bR, AW), bR
      }
      static OrthoOffCenterLHToRef(WW, RW, MW, wW, CW, zR, AW, bR) {
        const yR = 2 / (RW - WW),
          NW = 2 / (wW - MW),
          eW = 2 / (zR - CW),
          BW = -(zR + CW) / (zR - CW),
          tR = (WW + RW) / (WW - RW),
          TW = (wW + MW) / (MW - wW);
        return iR.FromValuesToRef(yR, 0, 0, 0, 0, NW, 0, 0, 0, 0, eW, 0, tR, TW, BW, 1, AW), bR && AW.multiplyToRef(PW, AW), AW.markAsUpdated(), AW
      }
      static ObliqueOffCenterLHToRef(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
        const BW = -AW * Math.cos(bR),
          tR = -AW * Math.sin(bR);
        return iR.TranslationToRef(0, 0, -yR, YW.Matrix[1]), iR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, BW, tR, 1, 0, 0, 0, 0, 1, YW.Matrix[0]), YW.Matrix[1].multiplyToRef(YW.Matrix[0], YW.Matrix[0]), iR.TranslationToRef(0, 0, yR, YW.Matrix[1]), YW.Matrix[0].multiplyToRef(YW.Matrix[1], YW.Matrix[0]), iR.OrthoOffCenterLHToRef(WW, RW, MW, wW, CW, zR, NW, eW), YW.Matrix[0].multiplyToRef(NW, NW), NW
      }
      static OrthoOffCenterRH(WW, RW, MW, wW, CW, zR, AW) {
        const bR = new iR;
        return iR.OrthoOffCenterRHToRef(WW, RW, MW, wW, CW, zR, bR, AW), bR
      }
      static OrthoOffCenterRHToRef(WW, RW, MW, wW, CW, zR, AW, bR) {
        return iR.OrthoOffCenterLHToRef(WW, RW, MW, wW, CW, zR, AW, bR), AW._m[10] *= -1, AW
      }
      static ObliqueOffCenterRHToRef(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
        const BW = AW * Math.cos(bR),
          tR = AW * Math.sin(bR);
        return iR.TranslationToRef(0, 0, yR, YW.Matrix[1]), iR.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, BW, tR, 1, 0, 0, 0, 0, 1, YW.Matrix[0]), YW.Matrix[1].multiplyToRef(YW.Matrix[0], YW.Matrix[0]), iR.TranslationToRef(0, 0, -yR, YW.Matrix[1]), YW.Matrix[0].multiplyToRef(YW.Matrix[1], YW.Matrix[0]), iR.OrthoOffCenterRHToRef(WW, RW, MW, wW, CW, zR, NW, eW), YW.Matrix[0].multiplyToRef(NW, NW), NW
      }
      static PerspectiveLH(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const AW = new iR,
          bR = 2 * MW / WW,
          yR = 2 * MW / RW,
          NW = (wW + MW) / (wW - MW),
          eW = -2 * wW * MW / (wW - MW),
          BW = Math.tan(zR);
        return iR.FromValuesToRef(bR, 0, 0, 0, 0, yR, 0, BW, 0, 0, NW, 1, 0, 0, eW, 0, AW), CW && AW.multiplyToRef(PW, AW), AW._updateIdentityStatus(!1), AW
      }
      static PerspectiveFovLH(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bR = new iR;
        return iR.PerspectiveFovLHToRef(WW, RW, MW, wW, bR, !0, CW, zR, AW), bR
      }
      static PerspectiveFovLHToRef(WW, RW, MW, wW, CW) {
        let zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AW = arguments.length > 6 ? arguments[6] : void 0,
          bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          yR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const NW = MW,
          eW = wW,
          BW = 1 / Math.tan(.5 * WW),
          tR = zR ? BW / RW : BW,
          TW = zR ? BW : BW * RW,
          gR = yR && 0 === NW ? -1 : 0 !== eW ? (eW + NW) / (eW - NW) : 1,
          YW = yR && 0 === NW ? 2 * eW : 0 !== eW ? -2 * eW * NW / (eW - NW) : -2 * NW,
          JW = Math.tan(bR);
        return iR.FromValuesToRef(tR, 0, 0, 0, 0, TW, 0, JW, 0, 0, gR, 1, 0, 0, YW, 0, CW), AW && CW.multiplyToRef(PW, CW), CW._updateIdentityStatus(!1), CW
      }
      static PerspectiveFovReverseLHToRef(WW, RW, MW, wW, CW) {
        let zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AW = arguments.length > 6 ? arguments[6] : void 0,
          bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const yR = 1 / Math.tan(.5 * WW),
          NW = zR ? yR / RW : yR,
          eW = zR ? yR : yR * RW,
          BW = Math.tan(bR);
        return iR.FromValuesToRef(NW, 0, 0, 0, 0, eW, 0, BW, 0, 0, -MW, 1, 0, 0, 1, 0, CW), AW && CW.multiplyToRef(PW, CW), CW._updateIdentityStatus(!1), CW
      }
      static PerspectiveFovRH(WW, RW, MW, wW, CW) {
        let zR = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          AW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bR = new iR;
        return iR.PerspectiveFovRHToRef(WW, RW, MW, wW, bR, !0, CW, zR, AW), bR
      }
      static PerspectiveFovRHToRef(WW, RW, MW, wW, CW) {
        let zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AW = arguments.length > 6 ? arguments[6] : void 0,
          bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          yR = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const NW = MW,
          eW = wW,
          BW = 1 / Math.tan(.5 * WW),
          tR = zR ? BW / RW : BW,
          TW = zR ? BW : BW * RW,
          gR = yR && 0 === NW ? 1 : 0 !== eW ? -(eW + NW) / (eW - NW) : -1,
          YW = yR && 0 === NW ? 2 * eW : 0 !== eW ? -2 * eW * NW / (eW - NW) : -2 * NW,
          JW = Math.tan(bR);
        return iR.FromValuesToRef(tR, 0, 0, 0, 0, TW, 0, JW, 0, 0, gR, -1, 0, 0, YW, 0, CW), AW && CW.multiplyToRef(PW, CW), CW._updateIdentityStatus(!1), CW
      }
      static PerspectiveFovReverseRHToRef(WW, RW, MW, wW, CW) {
        let zR = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          AW = arguments.length > 6 ? arguments[6] : void 0,
          bR = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const yR = 1 / Math.tan(.5 * WW),
          NW = zR ? yR / RW : yR,
          eW = zR ? yR : yR * RW,
          BW = Math.tan(bR);
        return iR.FromValuesToRef(NW, 0, 0, 0, 0, eW, 0, BW, 0, 0, -MW, -1, 0, 0, -1, 0, CW), AW && CW.multiplyToRef(PW, CW), CW._updateIdentityStatus(!1), CW
      }
      static GetFinalMatrix(WW, RW, MW, wW, CW, zR) {
        const AW = WW.width,
          bR = WW.height,
          yR = WW.x,
          NW = WW.y,
          eW = iR.FromValues(AW / 2, 0, 0, 0, 0, -bR / 2, 0, 0, 0, 0, zR - CW, 0, yR + AW / 2, bR / 2 + NW, CW, 1),
          BW = new iR;
        return RW.multiplyToRef(MW, BW), BW.multiplyToRef(wW, BW), BW.multiplyToRef(eW, BW)
      }
      static GetAsMatrix2x2(WW) {
        const RW = WW.m,
          MW = [RW[0], RW[1], RW[4], RW[5]];
        return zR.d.MatrixUse64Bits ? MW : new Float32Array(MW)
      }
      static GetAsMatrix3x3(WW) {
        const RW = WW.m,
          MW = [RW[0], RW[1], RW[2], RW[4], RW[5], RW[6], RW[8], RW[9], RW[10]];
        return zR.d.MatrixUse64Bits ? MW : new Float32Array(MW)
      }
      static Transpose(WW) {
        const RW = new iR;
        return iR.TransposeToRef(WW, RW), RW
      }
      static TransposeToRef(WW, RW) {
        const MW = WW.m,
          wW = MW[0],
          CW = MW[4],
          zR = MW[8],
          AW = MW[12],
          bR = MW[1],
          yR = MW[5],
          NW = MW[9],
          eW = MW[13],
          BW = MW[2],
          tR = MW[6],
          TW = MW[10],
          gR = MW[14],
          iR = MW[3],
          YW = MW[7],
          JW = MW[11],
          PW = MW[15],
          IW = RW._m;
        return IW[0] = wW, IW[1] = CW, IW[2] = zR, IW[3] = AW, IW[4] = bR, IW[5] = yR, IW[6] = NW, IW[7] = eW, IW[8] = BW, IW[9] = tR, IW[10] = TW, IW[11] = gR, IW[12] = iR, IW[13] = YW, IW[14] = JW, IW[15] = PW, RW.markAsUpdated(), RW._updateIdentityStatus(WW._isIdentity, WW._isIdentityDirty), RW
      }
      static Reflection(WW) {
        const RW = new iR;
        return iR.ReflectionToRef(WW, RW), RW
      }
      static ReflectionToRef(WW, RW) {
        WW.normalize();
        const MW = WW.normal.x,
          wW = WW.normal.y,
          CW = WW.normal.z,
          zR = -2 * MW,
          AW = -2 * wW,
          bR = -2 * CW;
        return iR.FromValuesToRef(zR * MW + 1, AW * MW, bR * MW, 0, zR * wW, AW * wW + 1, bR * wW, 0, zR * CW, AW * CW, bR * CW + 1, 0, zR * WW.d, AW * WW.d, bR * WW.d, 1, RW), RW
      }
      static FromXYZAxesToRef(WW, RW, MW, wW) {
        return iR.FromValuesToRef(WW._x, WW._y, WW._z, 0, RW._x, RW._y, RW._z, 0, MW._x, MW._y, MW._z, 0, 0, 0, 0, 1, wW), wW
      }
      static FromQuaternionToRef(WW, RW) {
        const MW = WW._x * WW._x,
          wW = WW._y * WW._y,
          CW = WW._z * WW._z,
          zR = WW._x * WW._y,
          AW = WW._z * WW._w,
          bR = WW._z * WW._x,
          yR = WW._y * WW._w,
          NW = WW._y * WW._z,
          eW = WW._x * WW._w;
        return RW._m[0] = 1 - 2 * (wW + CW), RW._m[1] = 2 * (zR + AW), RW._m[2] = 2 * (bR - yR), RW._m[3] = 0, RW._m[4] = 2 * (zR - AW), RW._m[5] = 1 - 2 * (CW + MW), RW._m[6] = 2 * (NW + eW), RW._m[7] = 0, RW._m[8] = 2 * (bR + yR), RW._m[9] = 2 * (NW - eW), RW._m[10] = 1 - 2 * (wW + MW), RW._m[11] = 0, RW._m[12] = 0, RW._m[13] = 0, RW._m[14] = 0, RW._m[15] = 1, RW.markAsUpdated(), RW
      }
    }
    iR._IdentityReadOnly = iR.Identity();
    class YW {}
    YW.vC = (0, CW.d)(11, tR.Zero), YW.Matrix = (0, CW.d)(2, iR.Identity), YW.Quaternion = (0, CW.d)(3, gR.Zero);
    class JW {}
    JW.Vector2 = (0, CW.d)(3, BW.Zero), JW.vC = (0, CW.d)(13, tR.Zero), JW.Vector4 = (0, CW.d)(3, TW.Zero), JW.Quaternion = (0, CW.d)(3, gR.Zero), JW.Matrix = (0, CW.d)(8, iR.Identity);
    const PW = iR.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let IW = !1;

    function oW() {
      IW || (IW = !0, Object.defineProperties(BW.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(tR.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(TW.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(gR.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(iR.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, NW.e)("BABYLON.Vector2", BW), (0, NW.e)("BABYLON.Vector3", tR), (0, NW.e)("BABYLON.Vector4", TW), (0, NW.e)("BABYLON.Matrix", iR))
    }
  },
  35346: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    const wW = "undefined" !== typeof WeakRef;
    class CW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(WW, RW, MW, wW)
      }
      initialize(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = WW, this.skipNextObservers = RW, this.target = MW, this.currentTarget = wW, this
      }
    }
    class zR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = WW, this.mask = RW, this.scope = MW, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(WW)
      }
    }
    class AW {
      static FromPromise(WW, RW) {
        const MW = new AW;
        return WW.then((WW => {
          MW.notifyObservers(WW)
        })).catch((WW => {
          if (!RW) throw WW;
          RW.notifyObservers(WW)
        })), MW
      }
      get observers() {
        return this._observers
      }
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = RW, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new CW(0), WW && (this._onObserverAdded = WW)
      }
      add(WW) {
        let RW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          MW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!WW) return null;
        const CW = new zR(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        CW.unregisterOnNextCall = MW, RW ? this._observers.unshift(CW) : this._observers.push(CW), this._onObserverAdded && this._onObserverAdded(CW), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(CW, this._lastNotifiedValue);
        const AW = wW ? new WeakRef(this) : {
          deref: () => this
        };
        return CW._remove = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const RW = AW.deref();
          RW && (WW ? RW.remove(CW) : RW._remove(CW))
        }, CW
      }
      addOnce(WW) {
        return this.add(WW, void 0, void 0, void 0, !0)
      }
      remove(WW) {
        if (!WW) return !1;
        WW._remove = null;
        return -1 !== this._observers.indexOf(WW) && (this._deferUnregister(WW), !0)
      }
      removeCallback(WW, RW) {
        for (let MW = 0; MW < this._observers.length; MW++) {
          const wW = this._observers[MW];
          if (!wW._willBeUnregistered && (wW.callback === WW && (!RW || RW === wW.scope))) return this._deferUnregister(wW), !0
        }
        return !1
      }
      _deferUnregister(WW) {
        WW._willBeUnregistered || (this._numObserversMarkedAsDeleted++, WW.unregisterOnNextCall = !1, WW._willBeUnregistered = !0, setTimeout((() => {
          this._remove(WW)
        }), 0))
      }
      _remove(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!WW) return !1;
        const MW = this._observers.indexOf(WW);
        return -1 !== MW && (RW && this._numObserversMarkedAsDeleted--, this._observers.splice(MW, 1), !0)
      }
      makeObserverTopPriority(WW) {
        this._remove(WW, !1), this._observers.unshift(WW)
      }
      makeObserverBottomPriority(WW) {
        this._remove(WW, !1), this._observers.push(WW)
      }
      notifyObservers(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WW), !this._observers.length) return !0;
        const zR = this._eventState;
        zR.mask = RW, zR.target = MW, zR.currentTarget = wW, zR.skipNextObservers = !1, zR.lastReturnValue = WW, zR.userInfo = CW;
        for (const AW of this._observers)
          if (!AW._willBeUnregistered && (AW.mask & RW && (AW.unregisterOnNextCall && this._deferUnregister(AW), AW.scope ? zR.lastReturnValue = AW.callback.apply(AW.scope, [WW, zR]) : zR.lastReturnValue = AW.callback(WW, zR)), zR.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = RW), WW._willBeUnregistered) return;
        const wW = this._eventState;
        wW.mask = MW, wW.skipNextObservers = !1, WW.unregisterOnNextCall && this._deferUnregister(WW), WW.callback(RW, wW)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const WW = this._observers.pop();
          WW && (WW._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const WW = new AW;
        return WW._observers = this._observers.slice(0), WW
      }
      hasSpecificMask() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const RW of this._observers)
          if (RW.mask & WW || RW.mask === WW) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);