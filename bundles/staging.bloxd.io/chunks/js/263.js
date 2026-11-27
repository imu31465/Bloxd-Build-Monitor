export const id = 263;
export const ids = [263];
export const modules = {
  38270: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(38276);
    class EW {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    EW.Instances = [], EW.OnEnginesDisposedObservable = new mW.e, EW._LastCreatedScene = null, EW.UseFallbackTexture = !0, EW.FallbackTexture = ""
  },
  38262: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => mW
    });
    class mW {
      static SetMatrixPrecision(WW) {
        if (mW.MatrixTrackPrecisionChange = !1, WW && !mW.MatrixUse64Bits && mW.MatrixTrackedMatrices)
          for (let iW = 0; iW < mW.MatrixTrackedMatrices.length; ++iW) {
            const WW = mW.MatrixTrackedMatrices[iW],
              OW = WW._m;
            WW._m = new Array(16);
            for (let iW = 0; iW < 16; ++iW) WW._m[iW] = OW[iW]
          }
        mW.MatrixUse64Bits = WW, mW.MatrixCurrentType = mW.MatrixUse64Bits ? Array : Float32Array, mW.MatrixTrackedMatrices = null
      }
    }
    mW.MatrixUse64Bits = !1, mW.MatrixTrackPrecisionChange = !0, mW.MatrixCurrentType = Float32Array, mW.MatrixTrackedMatrices = []
  },
  38291: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => LW,
      f: () => wW,
      i: () => cW,
      k: () => mW,
      m: () => NW,
      o: () => PW
    });
    class mW {}

    function EW(WW) {
      WW.updateFlag = mW._UpdateFlagSeed++
    }

    function NW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const EW = WW.wEW(),
        NW = iW.wEW(),
        PW = EW[0],
        LW = EW[1],
        cW = EW[2],
        wW = EW[3],
        tW = EW[4],
        ZW = EW[5],
        xW = EW[6],
        lW = EW[7],
        AW = EW[8],
        bW = EW[9],
        jW = EW[10],
        UW = EW[11],
        kW = EW[12],
        sW = EW[13],
        MW = EW[14],
        KW = EW[15],
        SW = NW[0],
        YW = NW[1],
        yW = NW[2],
        TW = NW[3],
        JW = NW[4],
        hW = NW[5],
        HW = NW[6],
        nW = NW[7],
        uW = NW[8],
        oW = NW[9],
        dW = NW[10],
        eW = NW[11],
        vW = NW[12],
        gW = NW[13],
        DW = NW[14],
        VW = NW[15];
      OW[mW] = PW * SW + LW * JW + cW * uW + wW * vW, OW[mW + 1] = PW * YW + LW * hW + cW * oW + wW * gW, OW[mW + 2] = PW * yW + LW * HW + cW * dW + wW * DW, OW[mW + 3] = PW * TW + LW * nW + cW * eW + wW * VW, OW[mW + 4] = tW * SW + ZW * JW + xW * uW + lW * vW, OW[mW + 5] = tW * YW + ZW * hW + xW * oW + lW * gW, OW[mW + 6] = tW * yW + ZW * HW + xW * dW + lW * DW, OW[mW + 7] = tW * TW + ZW * nW + xW * eW + lW * VW, OW[mW + 8] = AW * SW + bW * JW + jW * uW + UW * vW, OW[mW + 9] = AW * YW + bW * hW + jW * oW + UW * gW, OW[mW + 10] = AW * yW + bW * HW + jW * dW + UW * DW, OW[mW + 11] = AW * TW + bW * nW + jW * eW + UW * VW, OW[mW + 12] = kW * SW + sW * JW + MW * uW + KW * vW, OW[mW + 13] = kW * YW + sW * hW + MW * oW + KW * gW, OW[mW + 14] = kW * yW + sW * HW + MW * dW + KW * DW, OW[mW + 15] = kW * TW + sW * nW + MW * eW + KW * VW
    }

    function PW(WW, iW, OW) {
      let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      NW(WW, iW, OW.wEW(), mW), EW(OW)
    }

    function LW(WW, iW) {
      let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const mW = WW.wEW();
      iW[OW] = mW[0], iW[OW + 1] = mW[1], iW[OW + 2] = mW[2], iW[OW + 3] = mW[3], iW[OW + 4] = mW[4], iW[OW + 5] = mW[5], iW[OW + 6] = mW[6], iW[OW + 7] = mW[7], iW[OW + 8] = mW[8], iW[OW + 9] = mW[9], iW[OW + 10] = mW[10], iW[OW + 11] = mW[11], iW[OW + 12] = mW[12], iW[OW + 13] = mW[13], iW[OW + 14] = mW[14], iW[OW + 15] = mW[15]
    }

    function cW(WW, iW) {
      const OW = wW(WW, iW.wEW());
      return OW && EW(iW), OW
    }

    function wW(WW, iW) {
      const OW = WW.wEW(),
        mW = OW[0],
        EW = OW[1],
        NW = OW[2],
        PW = OW[3],
        LW = OW[4],
        cW = OW[5],
        wW = OW[6],
        tW = OW[7],
        ZW = OW[8],
        xW = OW[9],
        lW = OW[10],
        AW = OW[11],
        bW = OW[12],
        jW = OW[13],
        UW = OW[14],
        kW = OW[15],
        sW = lW * kW - UW * AW,
        MW = xW * kW - jW * AW,
        KW = xW * UW - jW * lW,
        SW = ZW * kW - bW * AW,
        YW = ZW * UW - lW * bW,
        yW = ZW * jW - bW * xW,
        TW = +(cW * sW - wW * MW + tW * KW),
        JW = -(LW * sW - wW * SW + tW * YW),
        hW = +(LW * MW - cW * SW + tW * yW),
        HW = -(LW * KW - cW * YW + wW * yW),
        nW = mW * TW + EW * JW + NW * hW + PW * HW;
      if (0 === nW) return !1;
      const uW = 1 / nW,
        oW = wW * kW - UW * tW,
        dW = cW * kW - jW * tW,
        eW = cW * UW - jW * wW,
        vW = LW * kW - bW * tW,
        gW = LW * UW - bW * wW,
        DW = LW * jW - bW * cW,
        VW = wW * AW - lW * tW,
        pW = cW * AW - xW * tW,
        fW = cW * lW - xW * wW,
        CW = LW * AW - ZW * tW,
        XW = LW * lW - ZW * wW,
        BW = LW * xW - ZW * cW,
        qW = -(EW * sW - NW * MW + PW * KW),
        RW = +(mW * sW - NW * SW + PW * YW),
        GW = -(mW * MW - EW * SW + PW * yW),
        IW = +(mW * KW - EW * YW + NW * yW),
        aW = +(EW * oW - NW * dW + PW * eW),
        rW = -(mW * oW - NW * vW + PW * gW),
        zW = +(mW * dW - EW * vW + PW * DW),
        FW = -(mW * eW - EW * gW + NW * DW),
        QW = -(EW * VW - NW * pW + PW * fW),
        Wi = +(mW * VW - NW * CW + PW * XW),
        ii = -(mW * pW - EW * CW + PW * BW),
        Oi = +(mW * fW - EW * XW + NW * BW);
      return iW[0] = TW * uW, iW[1] = qW * uW, iW[2] = aW * uW, iW[3] = QW * uW, iW[4] = JW * uW, iW[5] = RW * uW, iW[6] = rW * uW, iW[7] = Wi * uW, iW[8] = hW * uW, iW[9] = GW * uW, iW[10] = zW * uW, iW[11] = ii * uW, iW[12] = HW * uW, iW[13] = IW * uW, iW[14] = FW * uW, iW[15] = Oi * uW, !0
    }
    mW._UpdateFlagSeed = 0
  },
  38241: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => bW,
      g: () => AW,
      j: () => MW,
      l: () => UW,
      m: () => ZW,
      q: () => xW,
      r: () => lW
    });
    var mW = OW(38249),
      EW = OW(38253),
      NW = OW(38262),
      PW = OW(38270),
      LW = OW(38285),
      cW = OW(38291),
      wW = OW(38299);
    const tW = WW => parseInt(WW.toString().replace(/\W/g, ""));
    class ZW {
      constructor() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = WW, this.y = iW
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let WW = tW(this.x);
        return WW = 397 * WW ^ tW(this.y), WW
      }
      toArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[iW] = this.x, WW[iW + 1] = this.y, this
      }
      mZ(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ZW.FromArrayToRef(WW, iW, this), this
      }
      wEW() {
        return [this.x, this.y]
      }
      HJ(WW) {
        return this.x = WW.x, this.y = WW.y, this
      }
      yWW(WW, iW) {
        return this.x = WW, this.y = iW, this
      }
      set(WW, iW) {
        return this.yWW(WW, iW)
      }
      Z5(WW) {
        return this.yWW(WW, WW)
      }
      add(WW) {
        return new ZW(this.x + WW.x, this.y + WW.y)
      }
      addToRef(WW, iW) {
        return iW.x = this.x + WW.x, iW.y = this.y + WW.y, iW
      }
      addInPlace(WW) {
        return this.x += WW.x, this.y += WW.y, this
      }
      addInPlaceFromFloats(WW, iW) {
        return this.x += WW, this.y += iW, this
      }
      addVector3(WW) {
        return new ZW(this.x + WW.x, this.y + WW.y)
      }
      subtract(WW) {
        return new ZW(this.x - WW.x, this.y - WW.y)
      }
      subtractToRef(WW, iW) {
        return iW.x = this.x - WW.x, iW.y = this.y - WW.y, iW
      }
      yEW(WW) {
        return this.x -= WW.x, this.y -= WW.y, this
      }
      multiplyInPlace(WW) {
        return this.x *= WW.x, this.y *= WW.y, this
      }
      multiply(WW) {
        return new ZW(this.x * WW.x, this.y * WW.y)
      }
      multiplyToRef(WW, iW) {
        return iW.x = this.x * WW.x, iW.y = this.y * WW.y, iW
      }
      multiplyByFloats(WW, iW) {
        return new ZW(this.x * WW, this.y * iW)
      }
      divide(WW) {
        return new ZW(this.x / WW.x, this.y / WW.y)
      }
      divideToRef(WW, iW) {
        return iW.x = this.x / WW.x, iW.y = this.y / WW.y, iW
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
      minimizeInPlaceFromFloats(WW, iW) {
        return this.x = Math.min(WW, this.x), this.y = Math.min(iW, this.y), this
      }
      maximizeInPlaceFromFloats(WW, iW) {
        return this.x = Math.max(WW, this.x), this.y = Math.max(iW, this.y), this
      }
      subtractFromFloats(WW, iW) {
        return new ZW(this.x - WW, this.y - iW)
      }
      subtractFromFloatsToRef(WW, iW, OW) {
        return OW.x = this.x - WW, OW.y = this.y - iW, OW
      }
      Lj() {
        return new ZW(-this.x, -this.y)
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
        return new ZW(this.x * WW, this.y * WW)
      }
      scaleToRef(WW, iW) {
        return iW.x = this.x * WW, iW.y = this.y * WW, iW
      }
      scaleAndAddToRef(WW, iW) {
        return iW.x += this.x * WW, iW.y += this.y * WW, iW
      }
      equals(WW) {
        return WW && this.x === WW.x && this.y === WW.y
      }
      equalsWithEpsilon(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.e;
        return WW && (0, LW.WithinEpsilon)(this.x, WW.x, iW) && (0, LW.WithinEpsilon)(this.y, WW.y, iW)
      }
      jLW(WW, iW) {
        return this.x === WW && this.y === iW
      }
      floor() {
        return new ZW(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(WW) {
        return WW.x = Math.floor(this.x), WW.y = Math.floor(this.y), WW
      }
      fract() {
        return new ZW(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(WW) {
        return WW.x = this.x - Math.floor(this.x), WW.y = this.y - Math.floor(this.y), WW
      }
      rotate(WW) {
        return this.rotateToRef(WW, new ZW)
      }
      rotateToRef(WW, iW) {
        const OW = Math.cos(WW),
          mW = Math.sin(WW);
        return iW.x = OW * this.x - mW * this.y, iW.y = mW * this.x + OW * this.y, iW
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
        const WW = new ZW;
        return this.normalizeToRef(WW), WW
      }
      normalizeToRef(WW) {
        const iW = this.length();
        return 0 === iW || 1 === iW ? (WW.x = this.x, WW.y = this.y, WW) : this.scaleToRef(1 / iW, WW)
      }
      clone() {
        return new ZW(this.x, this.y)
      }
      dot(WW) {
        return this.x * WW.x + this.y * WW.y
      }
      static Zero() {
        return new ZW(0, 0)
      }
      static One() {
        return new ZW(1, 1)
      }
      static Random() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ZW((0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW))
      }
      static RandomToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).yWW((0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW))
      }
      static get ZeroReadOnly() {
        return ZW._ZeroReadOnly
      }
      static FromArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ZW(WW[iW], WW[iW + 1])
      }
      static FromArrayToRef(WW, iW, OW) {
        return OW.x = WW[iW], OW.y = WW[iW + 1], OW
      }
      static FromFloatsToRef(WW, iW, OW) {
        return OW.yWW(WW, iW), OW
      }
      static CatmullRom(WW, iW, OW, mW, EW) {
        const NW = EW * EW,
          PW = EW * NW,
          LW = .5 * (2 * iW.x + (-WW.x + OW.x) * EW + (2 * WW.x - 5 * iW.x + 4 * OW.x - mW.x) * NW + (-WW.x + 3 * iW.x - 3 * OW.x + mW.x) * PW),
          cW = .5 * (2 * iW.y + (-WW.y + OW.y) * EW + (2 * WW.y - 5 * iW.y + 4 * OW.y - mW.y) * NW + (-WW.y + 3 * iW.y - 3 * OW.y + mW.y) * PW);
        return new ZW(LW, cW)
      }
      static ClampToRef(WW, iW, OW, mW) {
        return mW.x = (0, LW.Clamp)(WW.x, iW.x, OW.x), mW.y = (0, LW.Clamp)(WW.y, iW.y, OW.y), mW
      }
      static Clamp(WW, iW, OW) {
        const mW = (0, LW.Clamp)(WW.x, iW.x, OW.x),
          EW = (0, LW.Clamp)(WW.y, iW.y, OW.y);
        return new ZW(mW, EW)
      }
      static Hermite(WW, iW, OW, mW, EW) {
        const NW = EW * EW,
          PW = EW * NW,
          LW = 2 * PW - 3 * NW + 1,
          cW = -2 * PW + 3 * NW,
          wW = PW - 2 * NW + EW,
          tW = PW - NW,
          xW = WW.x * LW + OW.x * cW + iW.x * wW + mW.x * tW,
          lW = WW.y * LW + OW.y * cW + iW.y * wW + mW.y * tW;
        return new ZW(xW, lW)
      }
      static Hermite1stDerivative(WW, iW, OW, mW, EW) {
        return this.Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, new ZW)
      }
      static Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW) {
        const PW = EW * EW;
        return NW.x = 6 * (PW - EW) * WW.x + (3 * PW - 4 * EW + 1) * iW.x + 6 * (-PW + EW) * OW.x + (3 * PW - 2 * EW) * mW.x, NW.y = 6 * (PW - EW) * WW.y + (3 * PW - 4 * EW + 1) * iW.y + 6 * (-PW + EW) * OW.y + (3 * PW - 2 * EW) * mW.y, NW
      }
      static Lerp(WW, iW, OW) {
        return ZW.LerpToRef(WW, iW, OW, new ZW)
      }
      static LerpToRef(WW, iW, OW, mW) {
        return mW.x = WW.x + (iW.x - WW.x) * OW, mW.y = WW.y + (iW.y - WW.y) * OW, mW
      }
      static Dot(WW, iW) {
        return WW.x * iW.x + WW.y * iW.y
      }
      static Normalize(WW) {
        return ZW.NormalizeToRef(WW, new ZW)
      }
      static NormalizeToRef(WW, iW) {
        return WW.normalizeToRef(iW), iW
      }
      static Minimize(WW, iW) {
        const OW = WW.x < iW.x ? WW.x : iW.x,
          mW = WW.y < iW.y ? WW.y : iW.y;
        return new ZW(OW, mW)
      }
      static Maximize(WW, iW) {
        const OW = WW.x > iW.x ? WW.x : iW.x,
          mW = WW.y > iW.y ? WW.y : iW.y;
        return new ZW(OW, mW)
      }
      static Transform(WW, iW) {
        return ZW.TransformToRef(WW, iW, new ZW)
      }
      static TransformToRef(WW, iW, OW) {
        const mW = iW.m,
          EW = WW.x * mW[0] + WW.y * mW[4] + mW[12],
          NW = WW.x * mW[1] + WW.y * mW[5] + mW[13];
        return OW.x = EW, OW.y = NW, OW
      }
      static PointInTriangle(WW, iW, OW, mW) {
        const EW = .5 * (-OW.y * mW.x + iW.y * (-OW.x + mW.x) + iW.x * (OW.y - mW.y) + OW.x * mW.y),
          NW = EW < 0 ? -1 : 1,
          PW = (iW.y * mW.x - iW.x * mW.y + (mW.y - iW.y) * WW.x + (iW.x - mW.x) * WW.y) * NW,
          LW = (iW.x * OW.y - iW.y * OW.x + (iW.y - OW.y) * WW.x + (OW.x - iW.x) * WW.y) * NW;
        return PW > 0 && LW > 0 && PW + LW < 2 * EW * NW
      }
      static Distance(WW, iW) {
        return Math.sqrt(ZW.DistanceSquared(WW, iW))
      }
      static DistanceSquared(WW, iW) {
        const OW = WW.x - iW.x,
          mW = WW.y - iW.y;
        return OW * OW + mW * mW
      }
      static Center(WW, iW) {
        return ZW.CenterToRef(WW, iW, new ZW)
      }
      static CenterToRef(WW, iW, OW) {
        return OW.yWW((WW.x + iW.x) / 2, (WW.y + iW.y) / 2)
      }
      static DistanceOfPointFromSegment(WW, iW, OW) {
        const mW = ZW.DistanceSquared(iW, OW);
        if (0 === mW) return ZW.Distance(WW, iW);
        const EW = OW.subtract(iW),
          NW = Math.max(0, Math.min(1, ZW.Dot(WW.subtract(iW), EW) / mW)),
          PW = iW.add(EW.multiplyByFloats(NW, NW));
        return ZW.Distance(WW, PW)
      }
    }
    ZW._V8PerformanceHack = new ZW(.5, .5), ZW._ZeroReadOnly = ZW.Zero();
    class xW {
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
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = WW, this._y = iW, this._z = OW
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "fA"
      }
      getHashCode() {
        let WW = tW(this._x);
        return WW = 397 * WW ^ tW(this._y), WW = 397 * WW ^ tW(this._z), WW
      }
      wEW() {
        return [this._x, this._y, this._z]
      }
      toArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[iW] = this._x, WW[iW + 1] = this._y, WW[iW + 2] = this._z, this
      }
      mZ(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xW.FromArrayToRef(WW, iW, this), this
      }
      toQuaternion() {
        return AW.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(WW) {
        return this._x += WW._x, this._y += WW._y, this._z += WW._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(WW, iW, OW) {
        return this._x += WW, this._y += iW, this._z += OW, this._isDirty = !0, this
      }
      add(WW) {
        return new xW(this._x + WW._x, this._y + WW._y, this._z + WW._z)
      }
      addToRef(WW, iW) {
        return iW._x = this._x + WW._x, iW._y = this._y + WW._y, iW._z = this._z + WW._z, iW._isDirty = !0, iW
      }
      yEW(WW) {
        return this._x -= WW._x, this._y -= WW._y, this._z -= WW._z, this._isDirty = !0, this
      }
      subtract(WW) {
        return new xW(this._x - WW._x, this._y - WW._y, this._z - WW._z)
      }
      subtractToRef(WW, iW) {
        return this.subtractFromFloatsToRef(WW._x, WW._y, WW._z, iW)
      }
      subtractFromFloats(WW, iW, OW) {
        return new xW(this._x - WW, this._y - iW, this._z - OW)
      }
      subtractFromFloatsToRef(WW, iW, OW, mW) {
        return mW._x = this._x - WW, mW._y = this._y - iW, mW._z = this._z - OW, mW._isDirty = !0, mW
      }
      Lj() {
        return new xW(-this._x, -this._y, -this._z)
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
        return new xW(this._x * WW, this._y * WW, this._z * WW)
      }
      scaleToRef(WW, iW) {
        return iW._x = this._x * WW, iW._y = this._y * WW, iW._z = this._z * WW, iW._isDirty = !0, iW
      }
      getNormalToRef(WW) {
        const iW = this.length();
        let OW = Math.acos(this._y / iW);
        const mW = Math.atan2(this._z, this._x);
        OW > Math.PI / 2 ? OW -= Math.PI / 2 : OW += Math.PI / 2;
        const EW = iW * Math.sin(OW) * Math.cos(mW),
          NW = iW * Math.cos(OW),
          PW = iW * Math.sin(OW) * Math.sin(mW);
        return WW.set(EW, NW, PW), WW
      }
      applyRotationQuaternionToRef(WW, iW) {
        const OW = this._x,
          mW = this._y,
          EW = this._z,
          NW = WW._x,
          PW = WW._y,
          LW = WW._z,
          cW = WW._w,
          wW = 2 * (PW * EW - LW * mW),
          tW = 2 * (LW * OW - NW * EW),
          ZW = 2 * (NW * mW - PW * OW);
        return iW._x = OW + cW * wW + PW * ZW - LW * tW, iW._y = mW + cW * tW + LW * wW - NW * ZW, iW._z = EW + cW * ZW + NW * tW - PW * wW, iW._isDirty = !0, iW
      }
      applyRotationQuaternionInPlace(WW) {
        return this.applyRotationQuaternionToRef(WW, this)
      }
      applyRotationQuaternion(WW) {
        return this.applyRotationQuaternionToRef(WW, new xW)
      }
      scaleAndAddToRef(WW, iW) {
        return iW._x += this._x * WW, iW._y += this._y * WW, iW._z += this._z * WW, iW._isDirty = !0, iW
      }
      projectOnPlane(WW, iW) {
        return this.projectOnPlaneToRef(WW, iW, new xW)
      }
      projectOnPlaneToRef(WW, iW, OW) {
        const mW = WW.normal,
          EW = WW.d,
          NW = jW.fA[0];
        this.subtractToRef(iW, NW), NW.normalize();
        const PW = xW.Dot(NW, mW);
        if (Math.abs(PW) < 1e-10) OW.Z5(1 / 0);
        else {
          const WW = -(xW.Dot(iW, mW) + EW) / PW,
            LW = NW.scaleInPlace(WW);
          iW.addToRef(LW, OW)
        }
        return OW
      }
      equals(WW) {
        return WW && this._x === WW._x && this._y === WW._y && this._z === WW._z
      }
      equalsWithEpsilon(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.e;
        return WW && (0, LW.WithinEpsilon)(this._x, WW._x, iW) && (0, LW.WithinEpsilon)(this._y, WW._y, iW) && (0, LW.WithinEpsilon)(this._z, WW._z, iW)
      }
      jLW(WW, iW, OW) {
        return this._x === WW && this._y === iW && this._z === OW
      }
      multiplyInPlace(WW) {
        return this._x *= WW._x, this._y *= WW._y, this._z *= WW._z, this._isDirty = !0, this
      }
      multiply(WW) {
        return this.multiplyByFloats(WW._x, WW._y, WW._z)
      }
      multiplyToRef(WW, iW) {
        return iW._x = this._x * WW._x, iW._y = this._y * WW._y, iW._z = this._z * WW._z, iW._isDirty = !0, iW
      }
      multiplyByFloats(WW, iW, OW) {
        return new xW(this._x * WW, this._y * iW, this._z * OW)
      }
      divide(WW) {
        return new xW(this._x / WW._x, this._y / WW._y, this._z / WW._z)
      }
      divideToRef(WW, iW) {
        return iW._x = this._x / WW._x, iW._y = this._y / WW._y, iW._z = this._z / WW._z, iW._isDirty = !0, iW
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
      minimizeInPlaceFromFloats(WW, iW, OW) {
        return WW < this._x && (this.x = WW), iW < this._y && (this.y = iW), OW < this._z && (this.z = OW), this
      }
      maximizeInPlaceFromFloats(WW, iW, OW) {
        return WW > this._x && (this.x = WW), iW > this._y && (this.y = iW), OW > this._z && (this.z = OW), this
      }
      isNonUniformWithinEpsilon(WW) {
        const iW = Math.abs(this._x),
          OW = Math.abs(this._y);
        if (!(0, LW.WithinEpsilon)(iW, OW, WW)) return !0;
        const mW = Math.abs(this._z);
        return !(0, LW.WithinEpsilon)(iW, mW, WW) || !(0, LW.WithinEpsilon)(OW, mW, WW)
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
        return new xW(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(WW) {
        return WW._x = this._x - Math.floor(this._x), WW._y = this._y - Math.floor(this._y), WW._z = this._z - Math.floor(this._z), WW._isDirty = !0, WW
      }
      fract() {
        return new xW(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const iW = jW.fA[0].HJ(this);
        return this.x = iW[WW[0]], this.y = iW[WW[1]], this.z = iW[WW[2]], this
      }
      rotateByQuaternionToRef(WW, iW) {
        return WW.toRotationMatrix(jW.Matrix[0]), xW.TransformCoordinatesToRef(this, jW.Matrix[0], iW), iW
      }
      rotateByQuaternionAroundPointToRef(WW, iW, OW) {
        return this.subtractToRef(iW, jW.fA[0]), jW.fA[0].rotateByQuaternionToRef(WW, jW.fA[0]), iW.addToRef(jW.fA[0], OW), OW
      }
      cross(WW) {
        return xW.CrossToRef(this, WW, new xW)
      }
      normalizeFromLength(WW) {
        return 0 === WW || 1 === WW ? this : this.scaleInPlace(1 / WW)
      }
      normalizeToNew() {
        return this.normalizeToRef(new xW)
      }
      normalizeToRef(WW) {
        const iW = this.length();
        return 0 === iW || 1 === iW ? (WW._x = this._x, WW._y = this._y, WW._z = this._z, WW._isDirty = !0, WW) : this.scaleToRef(1 / iW, WW)
      }
      clone() {
        return new xW(this._x, this._y, this._z)
      }
      HJ(WW) {
        return this.yWW(WW._x, WW._y, WW._z)
      }
      yWW(WW, iW, OW) {
        return this._x = WW, this._y = iW, this._z = OW, this._isDirty = !0, this
      }
      set(WW, iW, OW) {
        return this.yWW(WW, iW, OW)
      }
      Z5(WW) {
        return this._x = this._y = this._z = WW, this._isDirty = !0, this
      }
      static GetClipFactor(WW, iW, OW, mW) {
        const EW = xW.Dot(WW, OW);
        return (EW - mW) / (EW - xW.Dot(iW, OW))
      }
      static GetAngleBetweenVectors(WW, iW, OW) {
        const mW = WW.normalizeToRef(jW.fA[1]),
          EW = iW.normalizeToRef(jW.fA[2]);
        let NW = xW.Dot(mW, EW);
        NW = (0, LW.Clamp)(NW, -1, 1);
        const PW = Math.acos(NW),
          cW = jW.fA[3];
        return xW.CrossToRef(mW, EW, cW), xW.Dot(cW, OW) > 0 ? isNaN(PW) ? 0 : PW : isNaN(PW) ? -Math.PI : -Math.acos(NW)
      }
      static GetAngleBetweenVectorsOnPlane(WW, iW, OW) {
        jW.fA[0].HJ(WW);
        const mW = jW.fA[0];
        jW.fA[1].HJ(iW);
        const EW = jW.fA[1];
        jW.fA[2].HJ(OW);
        const NW = jW.fA[2],
          PW = jW.fA[3],
          cW = jW.fA[4];
        mW.normalize(), EW.normalize(), NW.normalize(), xW.CrossToRef(NW, mW, PW), xW.CrossToRef(PW, NW, cW);
        const wW = Math.atan2(xW.Dot(EW, PW), xW.Dot(EW, cW));
        return (0, LW.NormalizeRadians)(wW)
      }
      static PitchYawRollToMoveBetweenPointsToRef(WW, iW, OW) {
        const mW = UW.fA[0];
        return iW.subtractToRef(WW, mW), OW._y = Math.atan2(mW.x, mW.z) || 0, OW._x = Math.atan2(Math.sqrt(mW.x ** 2 + mW.z ** 2), mW.y) || 0, OW._z = 0, OW._isDirty = !0, OW
      }
      static PitchYawRollToMoveBetweenPoints(WW, iW) {
        const OW = xW.Zero();
        return xW.PitchYawRollToMoveBetweenPointsToRef(WW, iW, OW)
      }
      static SlerpToRef(WW, iW, OW, EW) {
        OW = (0, LW.Clamp)(OW, 0, 1);
        const NW = jW.fA[0],
          PW = jW.fA[1];
        NW.HJ(WW);
        const cW = NW.length();
        NW.normalizeFromLength(cW), PW.HJ(iW);
        const wW = PW.length();
        PW.normalizeFromLength(wW);
        const tW = xW.Dot(NW, PW);
        let ZW, lW;
        if (tW < 1 - mW.e) {
          const WW = Math.acos(tW),
            iW = 1 / Math.sin(WW);
          ZW = Math.sin((1 - OW) * WW) * iW, lW = Math.sin(OW * WW) * iW
        } else ZW = 1 - OW, lW = OW;
        return NW.scaleInPlace(ZW), PW.scaleInPlace(lW), EW.HJ(NW).addInPlace(PW), EW.scaleInPlace((0, LW.Lerp)(cW, wW, OW)), EW
      }
      static SmoothToRef(WW, iW, OW, mW, EW) {
        return xW.SlerpToRef(WW, iW, 0 === mW ? 1 : OW / mW, EW), EW
      }
      static FromArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new xW(WW[iW], WW[iW + 1], WW[iW + 2])
      }
      static FromFloatArray(WW, iW) {
        return xW.FromArray(WW, iW)
      }
      static FromArrayToRef(WW, iW, OW) {
        return OW._x = WW[iW], OW._y = WW[iW + 1], OW._z = WW[iW + 2], OW._isDirty = !0, OW
      }
      static FromFloatArrayToRef(WW, iW, OW) {
        return xW.FromArrayToRef(WW, iW, OW)
      }
      static FromFloatsToRef(WW, iW, OW, mW) {
        return mW.yWW(WW, iW, OW), mW
      }
      static Zero() {
        return new xW(0, 0, 0)
      }
      static One() {
        return new xW(1, 1, 1)
      }
      static Up() {
        return new xW(0, 1, 0)
      }
      static get UpReadOnly() {
        return xW._UpReadOnly
      }
      static get DownReadOnly() {
        return xW._DownReadOnly
      }
      static get RightReadOnly() {
        return xW._RightReadOnly
      }
      static get LeftReadOnly() {
        return xW._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return xW._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return xW._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return xW._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return xW._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return xW._ZeroReadOnly
      }
      static get OneReadOnly() {
        return xW._OneReadOnly
      }
      static Down() {
        return new xW(0, -1, 0)
      }
      static Forward() {
        return new xW(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new xW(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new xW(1, 0, 0)
      }
      static Left() {
        return new xW(-1, 0, 0)
      }
      static Random() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new xW((0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW))
      }
      static RandomToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).yWW((0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW))
      }
      static TransformCoordinates(WW, iW) {
        const OW = xW.Zero();
        return xW.TransformCoordinatesToRef(WW, iW, OW), OW
      }
      static TransformCoordinatesToRef(WW, iW, OW) {
        return xW.TransformCoordinatesFromFloatsToRef(WW._x, WW._y, WW._z, iW, OW), OW
      }
      static TransformCoordinatesFromFloatsToRef(WW, iW, OW, mW, EW) {
        const NW = mW.m,
          PW = WW * NW[0] + iW * NW[4] + OW * NW[8] + NW[12],
          LW = WW * NW[1] + iW * NW[5] + OW * NW[9] + NW[13],
          cW = WW * NW[2] + iW * NW[6] + OW * NW[10] + NW[14],
          wW = 1 / (WW * NW[3] + iW * NW[7] + OW * NW[11] + NW[15]);
        return EW._x = PW * wW, EW._y = LW * wW, EW._z = cW * wW, EW._isDirty = !0, EW
      }
      static TransformNormal(WW, iW) {
        const OW = xW.Zero();
        return xW.TransformNormalToRef(WW, iW, OW), OW
      }
      static TransformNormalToRef(WW, iW, OW) {
        return this.TransformNormalFromFloatsToRef(WW._x, WW._y, WW._z, iW, OW), OW
      }
      static TransformNormalFromFloatsToRef(WW, iW, OW, mW, EW) {
        const NW = mW.m;
        return EW._x = WW * NW[0] + iW * NW[4] + OW * NW[8], EW._y = WW * NW[1] + iW * NW[5] + OW * NW[9], EW._z = WW * NW[2] + iW * NW[6] + OW * NW[10], EW._isDirty = !0, EW
      }
      static CatmullRom(WW, iW, OW, mW, EW) {
        const NW = EW * EW,
          PW = EW * NW,
          LW = .5 * (2 * iW._x + (-WW._x + OW._x) * EW + (2 * WW._x - 5 * iW._x + 4 * OW._x - mW._x) * NW + (-WW._x + 3 * iW._x - 3 * OW._x + mW._x) * PW),
          cW = .5 * (2 * iW._y + (-WW._y + OW._y) * EW + (2 * WW._y - 5 * iW._y + 4 * OW._y - mW._y) * NW + (-WW._y + 3 * iW._y - 3 * OW._y + mW._y) * PW),
          wW = .5 * (2 * iW._z + (-WW._z + OW._z) * EW + (2 * WW._z - 5 * iW._z + 4 * OW._z - mW._z) * NW + (-WW._z + 3 * iW._z - 3 * OW._z + mW._z) * PW);
        return new xW(LW, cW, wW)
      }
      static Clamp(WW, iW, OW) {
        const mW = new xW;
        return xW.ClampToRef(WW, iW, OW, mW), mW
      }
      static ClampToRef(WW, iW, OW, mW) {
        let EW = WW._x;
        EW = EW > OW._x ? OW._x : EW, EW = EW < iW._x ? iW._x : EW;
        let NW = WW._y;
        NW = NW > OW._y ? OW._y : NW, NW = NW < iW._y ? iW._y : NW;
        let PW = WW._z;
        return PW = PW > OW._z ? OW._z : PW, PW = PW < iW._z ? iW._z : PW, mW.yWW(EW, NW, PW), mW
      }
      static CheckExtends(WW, iW, OW) {
        iW.minimizeInPlace(WW), OW.maximizeInPlace(WW)
      }
      static Hermite(WW, iW, OW, mW, EW) {
        const NW = EW * EW,
          PW = EW * NW,
          LW = 2 * PW - 3 * NW + 1,
          cW = -2 * PW + 3 * NW,
          wW = PW - 2 * NW + EW,
          tW = PW - NW,
          ZW = WW._x * LW + OW._x * cW + iW._x * wW + mW._x * tW,
          lW = WW._y * LW + OW._y * cW + iW._y * wW + mW._y * tW,
          AW = WW._z * LW + OW._z * cW + iW._z * wW + mW._z * tW;
        return new xW(ZW, lW, AW)
      }
      static Hermite1stDerivative(WW, iW, OW, mW, EW) {
        const NW = new xW;
        return this.Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW), NW
      }
      static Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW) {
        const PW = EW * EW;
        return NW._x = 6 * (PW - EW) * WW._x + (3 * PW - 4 * EW + 1) * iW._x + 6 * (-PW + EW) * OW._x + (3 * PW - 2 * EW) * mW._x, NW._y = 6 * (PW - EW) * WW._y + (3 * PW - 4 * EW + 1) * iW._y + 6 * (-PW + EW) * OW._y + (3 * PW - 2 * EW) * mW._y, NW._z = 6 * (PW - EW) * WW._z + (3 * PW - 4 * EW + 1) * iW._z + 6 * (-PW + EW) * OW._z + (3 * PW - 2 * EW) * mW._z, NW._isDirty = !0, NW
      }
      static Lerp(WW, iW, OW) {
        const mW = new xW(0, 0, 0);
        return xW.LerpToRef(WW, iW, OW, mW), mW
      }
      static LerpToRef(WW, iW, OW, mW) {
        return mW._x = WW._x + (iW._x - WW._x) * OW, mW._y = WW._y + (iW._y - WW._y) * OW, mW._z = WW._z + (iW._z - WW._z) * OW, mW._isDirty = !0, mW
      }
      static Dot(WW, iW) {
        return WW._x * iW._x + WW._y * iW._y + WW._z * iW._z
      }
      dot(WW) {
        return this._x * WW._x + this._y * WW._y + this._z * WW._z
      }
      static Cross(WW, iW) {
        const OW = new xW;
        return xW.CrossToRef(WW, iW, OW), OW
      }
      static CrossToRef(WW, iW, OW) {
        const mW = WW._y * iW._z - WW._z * iW._y,
          EW = WW._z * iW._x - WW._x * iW._z,
          NW = WW._x * iW._y - WW._y * iW._x;
        return OW.yWW(mW, EW, NW), OW
      }
      static Normalize(WW) {
        const iW = xW.Zero();
        return xW.NormalizeToRef(WW, iW), iW
      }
      static NormalizeToRef(WW, iW) {
        return WW.normalizeToRef(iW), iW
      }
      static Project(WW, iW, OW, mW) {
        const EW = new xW;
        return xW.ProjectToRef(WW, iW, OW, mW, EW), EW
      }
      static ProjectToRef(WW, iW, OW, mW, EW) {
        const NW = mW.width,
          LW = mW.height,
          cW = mW.x,
          wW = mW.y,
          tW = jW.Matrix[1],
          ZW = PW.d.LastCreatedEngine?.isNDCHalfZRange,
          lW = ZW ? 1 : .5,
          AW = ZW ? 0 : .5;
        bW.FromValuesToRef(NW / 2, 0, 0, 0, 0, -LW / 2, 0, 0, 0, 0, lW, 0, cW + NW / 2, LW / 2 + wW, AW, 1, tW);
        const UW = jW.Matrix[0];
        return iW.multiplyToRef(OW, UW), UW.multiplyToRef(tW, UW), xW.TransformCoordinatesToRef(WW, UW, EW), EW
      }
      static Reflect(WW, iW) {
        return this.ReflectToRef(WW, iW, new xW)
      }
      static ReflectToRef(WW, iW, OW) {
        const mW = UW.fA[0];
        return mW.HJ(iW).scaleInPlace(2 * xW.Dot(WW, iW)), OW.HJ(WW).yEW(mW)
      }
      static UnprojectFromTransform(WW, iW, OW, mW, EW) {
        return this.Unproject(WW, iW, OW, mW, EW, bW.IdentityReadOnly)
      }
      static Unproject(WW, iW, OW, mW, EW, NW) {
        const PW = new xW;
        return xW.UnprojectToRef(WW, iW, OW, mW, EW, NW, PW), PW
      }
      static UnprojectToRef(WW, iW, OW, mW, EW, NW, PW) {
        return xW.UnprojectFloatsToRef(WW._x, WW._y, WW._z, iW, OW, mW, EW, NW, PW), PW
      }
      static UnprojectFloatsToRef(WW, iW, OW, mW, EW, NW, LW, cW, wW) {
        const tW = jW.Matrix[0];
        NW.multiplyToRef(LW, tW), tW.multiplyToRef(cW, tW), tW.invert();
        const ZW = jW.fA[0];
        return ZW.x = WW / mW * 2 - 1, ZW.y = -(iW / EW * 2 - 1), PW.d.LastCreatedEngine?.isNDCHalfZRange ? ZW.z = OW : ZW.z = 2 * OW - 1, xW.TransformCoordinatesToRef(ZW, tW, wW), wW
      }
      static Minimize(WW, iW) {
        const OW = new xW;
        return OW.HJ(WW), OW.minimizeInPlace(iW), OW
      }
      static Maximize(WW, iW) {
        const OW = new xW;
        return OW.HJ(WW), OW.maximizeInPlace(iW), OW
      }
      static Distance(WW, iW) {
        return Math.sqrt(xW.DistanceSquared(WW, iW))
      }
      static DistanceSquared(WW, iW) {
        const OW = WW._x - iW._x,
          mW = WW._y - iW._y,
          EW = WW._z - iW._z;
        return OW * OW + mW * mW + EW * EW
      }
      static ProjectOnTriangleToRef(WW, iW, OW, EW, NW) {
        const PW = jW.fA[0],
          cW = jW.fA[1],
          wW = jW.fA[2],
          tW = jW.fA[3],
          ZW = jW.fA[4];
        OW.subtractToRef(iW, PW), EW.subtractToRef(iW, cW), EW.subtractToRef(OW, wW);
        const lW = PW.length(),
          AW = cW.length(),
          bW = wW.length();
        if (lW < mW.e || AW < mW.e || bW < mW.e) return NW.HJ(iW), xW.Distance(WW, iW);
        WW.subtractToRef(iW, ZW), xW.CrossToRef(PW, cW, tW);
        const UW = tW.length();
        if (UW < mW.e) return NW.HJ(iW), xW.Distance(WW, iW);
        tW.normalizeFromLength(UW);
        let kW = ZW.length();
        if (kW < mW.e) return NW.HJ(iW), 0;
        ZW.normalizeFromLength(kW);
        const sW = xW.Dot(tW, ZW),
          MW = jW.fA[5],
          KW = jW.fA[6];
        MW.HJ(tW).scaleInPlace(-kW * sW), KW.HJ(WW).addInPlace(MW);
        const SW = jW.fA[4],
          YW = jW.fA[5],
          yW = jW.fA[7],
          TW = jW.fA[8];
        SW.HJ(PW).scaleInPlace(1 / lW), TW.HJ(cW).scaleInPlace(1 / AW), SW.addInPlace(TW).scaleInPlace(-1), YW.HJ(PW).scaleInPlace(-1 / lW), TW.HJ(wW).scaleInPlace(1 / bW), YW.addInPlace(TW).scaleInPlace(-1), yW.HJ(wW).scaleInPlace(-1 / bW), TW.HJ(cW).scaleInPlace(-1 / AW), yW.addInPlace(TW).scaleInPlace(-1);
        const JW = jW.fA[9];
        let hW;
        JW.HJ(KW).yEW(iW), xW.CrossToRef(SW, JW, TW), hW = xW.Dot(TW, tW);
        const HW = hW;
        JW.HJ(KW).yEW(OW), xW.CrossToRef(YW, JW, TW), hW = xW.Dot(TW, tW);
        const nW = hW;
        JW.HJ(KW).yEW(EW), xW.CrossToRef(yW, JW, TW), hW = xW.Dot(TW, tW);
        const uW = hW,
          oW = jW.fA[10];
        let dW, eW;
        HW > 0 && nW < 0 ? (oW.HJ(PW), dW = iW, eW = OW) : nW > 0 && uW < 0 ? (oW.HJ(wW), dW = OW, eW = EW) : (oW.HJ(cW).scaleInPlace(-1), dW = EW, eW = iW);
        const vW = jW.fA[9],
          gW = jW.fA[4];
        dW.subtractToRef(KW, TW), eW.subtractToRef(KW, vW), xW.CrossToRef(TW, vW, gW);
        if (!(xW.Dot(gW, tW) < 0)) return NW.HJ(KW), Math.abs(kW * sW);
        const DW = jW.fA[5];
        xW.CrossToRef(oW, gW, DW), DW.normalize();
        const VW = jW.fA[9];
        VW.HJ(dW).yEW(KW);
        const pW = VW.length();
        if (pW < mW.e) return NW.HJ(dW), xW.Distance(WW, dW);
        VW.normalizeFromLength(pW);
        const fW = xW.Dot(DW, VW),
          CW = jW.fA[7];
        CW.HJ(KW).addInPlace(DW.scaleInPlace(pW * fW)), TW.HJ(CW).yEW(dW), kW = oW.length(), oW.normalizeFromLength(kW);
        let XW = xW.Dot(TW, oW) / Math.max(kW, mW.e);
        return XW = (0, LW.Clamp)(XW, 0, 1), CW.HJ(dW).addInPlace(oW.scaleInPlace(XW * kW)), NW.HJ(CW), xW.Distance(WW, CW)
      }
      static Center(WW, iW) {
        return xW.CenterToRef(WW, iW, xW.Zero())
      }
      static CenterToRef(WW, iW, OW) {
        return OW.yWW((WW._x + iW._x) / 2, (WW._y + iW._y) / 2, (WW._z + iW._z) / 2)
      }
      static RotationFromAxis(WW, iW, OW) {
        const mW = new xW;
        return xW.RotationFromAxisToRef(WW, iW, OW, mW), mW
      }
      static RotationFromAxisToRef(WW, iW, OW, mW) {
        const EW = jW.Quaternion[0];
        return AW.RotationQuaternionFromAxisToRef(WW, iW, OW, EW), EW.toEulerAnglesToRef(mW), mW
      }
    }
    xW._V8PerformanceHack = new xW(.5, .5, .5), xW._UpReadOnly = xW.Up(), xW._DownReadOnly = xW.Down(), xW._LeftHandedForwardReadOnly = xW.Forward(!1), xW._RightHandedForwardReadOnly = xW.Forward(!0), xW._LeftHandedBackwardReadOnly = xW.Backward(!1), xW._RightHandedBackwardReadOnly = xW.Backward(!0), xW._RightReadOnly = xW.Right(), xW._LeftReadOnly = xW.Left(), xW._ZeroReadOnly = xW.Zero(), xW._OneReadOnly = xW.One();
    class lW {
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
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = WW, this._y = iW, this._z = OW, this._w = mW
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let WW = tW(this._x);
        return WW = 397 * WW ^ tW(this._y), WW = 397 * WW ^ tW(this._z), WW = 397 * WW ^ tW(this._w), WW
      }
      wEW() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(WW, iW) {
        return void 0 === iW && (iW = 0), WW[iW] = this._x, WW[iW + 1] = this._y, WW[iW + 2] = this._z, WW[iW + 3] = this._w, this
      }
      mZ(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return lW.FromArrayToRef(WW, iW, this), this
      }
      addInPlace(WW) {
        return this.x += WW._x, this.y += WW._y, this.z += WW._z, this.w += WW._w, this
      }
      addInPlaceFromFloats(WW, iW, OW, mW) {
        return this.x += WW, this.y += iW, this.z += OW, this.w += mW, this
      }
      add(WW) {
        return new lW(this._x + WW.x, this._y + WW.y, this._z + WW.z, this._w + WW.w)
      }
      addToRef(WW, iW) {
        return iW.x = this._x + WW.x, iW.y = this._y + WW.y, iW.z = this._z + WW.z, iW.w = this._w + WW.w, iW
      }
      yEW(WW) {
        return this.x -= WW.x, this.y -= WW.y, this.z -= WW.z, this.w -= WW.w, this
      }
      subtract(WW) {
        return new lW(this._x - WW.x, this._y - WW.y, this._z - WW.z, this._w - WW.w)
      }
      subtractToRef(WW, iW) {
        return iW.x = this._x - WW.x, iW.y = this._y - WW.y, iW.z = this._z - WW.z, iW.w = this._w - WW.w, iW
      }
      subtractFromFloats(WW, iW, OW, mW) {
        return new lW(this._x - WW, this._y - iW, this._z - OW, this._w - mW)
      }
      subtractFromFloatsToRef(WW, iW, OW, mW, EW) {
        return EW.x = this._x - WW, EW.y = this._y - iW, EW.z = this._z - OW, EW.w = this._w - mW, EW
      }
      Lj() {
        return new lW(-this._x, -this._y, -this._z, -this._w)
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
        return new lW(this._x * WW, this._y * WW, this._z * WW, this._w * WW)
      }
      scaleToRef(WW, iW) {
        return iW.x = this._x * WW, iW.y = this._y * WW, iW.z = this._z * WW, iW.w = this._w * WW, iW
      }
      scaleAndAddToRef(WW, iW) {
        return iW.x += this._x * WW, iW.y += this._y * WW, iW.z += this._z * WW, iW.w += this._w * WW, iW
      }
      equals(WW) {
        return WW && this._x === WW.x && this._y === WW.y && this._z === WW.z && this._w === WW.w
      }
      equalsWithEpsilon(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.e;
        return WW && (0, LW.WithinEpsilon)(this._x, WW.x, iW) && (0, LW.WithinEpsilon)(this._y, WW.y, iW) && (0, LW.WithinEpsilon)(this._z, WW.z, iW) && (0, LW.WithinEpsilon)(this._w, WW.w, iW)
      }
      jLW(WW, iW, OW, mW) {
        return this._x === WW && this._y === iW && this._z === OW && this._w === mW
      }
      multiplyInPlace(WW) {
        return this.x *= WW.x, this.y *= WW.y, this.z *= WW.z, this.w *= WW.w, this
      }
      multiply(WW) {
        return new lW(this._x * WW.x, this._y * WW.y, this._z * WW.z, this._w * WW.w)
      }
      multiplyToRef(WW, iW) {
        return iW.x = this._x * WW.x, iW.y = this._y * WW.y, iW.z = this._z * WW.z, iW.w = this._w * WW.w, iW
      }
      multiplyByFloats(WW, iW, OW, mW) {
        return new lW(this._x * WW, this._y * iW, this._z * OW, this._w * mW)
      }
      divide(WW) {
        return new lW(this._x / WW.x, this._y / WW.y, this._z / WW.z, this._w / WW.w)
      }
      divideToRef(WW, iW) {
        return iW.x = this._x / WW.x, iW.y = this._y / WW.y, iW.z = this._z / WW.z, iW.w = this._w / WW.w, iW
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
      minimizeInPlaceFromFloats(WW, iW, OW, mW) {
        return this.x = Math.min(WW, this._x), this.y = Math.min(iW, this._y), this.z = Math.min(OW, this._z), this.w = Math.min(mW, this._w), this
      }
      maximizeInPlaceFromFloats(WW, iW, OW, mW) {
        return this.x = Math.max(WW, this._x), this.y = Math.max(iW, this._y), this.z = Math.max(OW, this._z), this.w = Math.max(mW, this._w), this
      }
      floorToRef(WW) {
        return WW.x = Math.floor(this._x), WW.y = Math.floor(this._y), WW.z = Math.floor(this._z), WW.w = Math.floor(this._w), WW
      }
      floor() {
        return new lW(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(WW) {
        return WW.x = this._x - Math.floor(this._x), WW.y = this._y - Math.floor(this._y), WW.z = this._z - Math.floor(this._z), WW.w = this._w - Math.floor(this._w), WW
      }
      fract() {
        return new lW(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new lW)
      }
      normalizeToRef(WW) {
        const iW = this.length();
        return 0 === iW || 1 === iW ? (WW.x = this._x, WW.y = this._y, WW.z = this._z, WW.w = this._w, WW) : this.scaleToRef(1 / iW, WW)
      }
      toVector3() {
        return new xW(this._x, this._y, this._z)
      }
      clone() {
        return new lW(this._x, this._y, this._z, this._w)
      }
      HJ(WW) {
        return this.x = WW.x, this.y = WW.y, this.z = WW.z, this.w = WW.w, this
      }
      yWW(WW, iW, OW, mW) {
        return this.x = WW, this.y = iW, this.z = OW, this.w = mW, this
      }
      set(WW, iW, OW, mW) {
        return this.yWW(WW, iW, OW, mW)
      }
      Z5(WW) {
        return this.x = this.y = this.z = this.w = WW, this
      }
      dot(WW) {
        return this._x * WW.x + this._y * WW.y + this._z * WW.z + this._w * WW.w
      }
      static FromArray(WW, iW) {
        return iW || (iW = 0), new lW(WW[iW], WW[iW + 1], WW[iW + 2], WW[iW + 3])
      }
      static FromArrayToRef(WW, iW, OW) {
        return OW.x = WW[iW], OW.y = WW[iW + 1], OW.z = WW[iW + 2], OW.w = WW[iW + 3], OW
      }
      static FromFloatArrayToRef(WW, iW, OW) {
        return lW.FromArrayToRef(WW, iW, OW), OW
      }
      static FromFloatsToRef(WW, iW, OW, mW, EW) {
        return EW.x = WW, EW.y = iW, EW.z = OW, EW.w = mW, EW
      }
      static Zero() {
        return new lW(0, 0, 0, 0)
      }
      static One() {
        return new lW(1, 1, 1, 1)
      }
      static Random() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new lW((0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW))
      }
      static RandomToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        return OW.x = (0, LW.RandomRange)(WW, iW), OW.y = (0, LW.RandomRange)(WW, iW), OW.z = (0, LW.RandomRange)(WW, iW), OW.w = (0, LW.RandomRange)(WW, iW), OW
      }
      static Clamp(WW, iW, OW) {
        return lW.ClampToRef(WW, iW, OW, new lW)
      }
      static ClampToRef(WW, iW, OW, mW) {
        return mW.x = (0, LW.Clamp)(WW.x, iW.x, OW.x), mW.y = (0, LW.Clamp)(WW.y, iW.y, OW.y), mW.z = (0, LW.Clamp)(WW.z, iW.z, OW.z), mW.w = (0, LW.Clamp)(WW.w, iW.w, OW.w), mW
      }
      static CheckExtends(WW, iW, OW) {
        iW.minimizeInPlace(WW), OW.maximizeInPlace(WW)
      }
      static get ZeroReadOnly() {
        return lW._ZeroReadOnly
      }
      static Normalize(WW) {
        return lW.NormalizeToRef(WW, new lW)
      }
      static NormalizeToRef(WW, iW) {
        return WW.normalizeToRef(iW), iW
      }
      static Minimize(WW, iW) {
        const OW = new lW;
        return OW.HJ(WW), OW.minimizeInPlace(iW), OW
      }
      static Maximize(WW, iW) {
        const OW = new lW;
        return OW.HJ(WW), OW.maximizeInPlace(iW), OW
      }
      static Distance(WW, iW) {
        return Math.sqrt(lW.DistanceSquared(WW, iW))
      }
      static DistanceSquared(WW, iW) {
        const OW = WW.x - iW.x,
          mW = WW.y - iW.y,
          EW = WW.z - iW.z,
          NW = WW.w - iW.w;
        return OW * OW + mW * mW + EW * EW + NW * NW
      }
      static Center(WW, iW) {
        return lW.CenterToRef(WW, iW, new lW)
      }
      static CenterToRef(WW, iW, OW) {
        return OW.x = (WW.x + iW.x) / 2, OW.y = (WW.y + iW.y) / 2, OW.z = (WW.z + iW.z) / 2, OW.w = (WW.w + iW.w) / 2, OW
      }
      static TransformCoordinates(WW, iW) {
        return lW.TransformCoordinatesToRef(WW, iW, new lW)
      }
      static TransformCoordinatesToRef(WW, iW, OW) {
        return lW.TransformCoordinatesFromFloatsToRef(WW._x, WW._y, WW._z, iW, OW), OW
      }
      static TransformCoordinatesFromFloatsToRef(WW, iW, OW, mW, EW) {
        const NW = mW.m,
          PW = WW * NW[0] + iW * NW[4] + OW * NW[8] + NW[12],
          LW = WW * NW[1] + iW * NW[5] + OW * NW[9] + NW[13],
          cW = WW * NW[2] + iW * NW[6] + OW * NW[10] + NW[14],
          wW = WW * NW[3] + iW * NW[7] + OW * NW[11] + NW[15];
        return EW.x = PW, EW.y = LW, EW.z = cW, EW.w = wW, EW
      }
      static TransformNormal(WW, iW) {
        return lW.TransformNormalToRef(WW, iW, new lW)
      }
      static TransformNormalToRef(WW, iW, OW) {
        const mW = iW.m,
          EW = WW.x * mW[0] + WW.y * mW[4] + WW.z * mW[8],
          NW = WW.x * mW[1] + WW.y * mW[5] + WW.z * mW[9],
          PW = WW.x * mW[2] + WW.y * mW[6] + WW.z * mW[10];
        return OW.x = EW, OW.y = NW, OW.z = PW, OW.w = WW.w, OW
      }
      static TransformNormalFromFloatsToRef(WW, iW, OW, mW, EW, NW) {
        const PW = EW.m;
        return NW.x = WW * PW[0] + iW * PW[4] + OW * PW[8], NW.y = WW * PW[1] + iW * PW[5] + OW * PW[9], NW.z = WW * PW[2] + iW * PW[6] + OW * PW[10], NW.w = mW, NW
      }
      static FromVector3(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new lW(WW._x, WW._y, WW._z, iW)
      }
      static Dot(WW, iW) {
        return WW.x * iW.x + WW.y * iW.y + WW.z * iW.z + WW.w * iW.w
      }
    }
    lW._V8PerformanceHack = new lW(.5, .5, .5, .5), lW._ZeroReadOnly = lW.Zero();
    class AW {
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
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = WW, this._y = iW, this._z = OW, this._w = mW
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let WW = tW(this._x);
        return WW = 397 * WW ^ tW(this._y), WW = 397 * WW ^ tW(this._z), WW = 397 * WW ^ tW(this._w), WW
      }
      wEW() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WW[iW] = this._x, WW[iW + 1] = this._y, WW[iW + 2] = this._z, WW[iW + 3] = this._w, this
      }
      mZ(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return AW.FromArrayToRef(WW, iW, this)
      }
      equals(WW) {
        return WW && this._x === WW._x && this._y === WW._y && this._z === WW._z && this._w === WW._w
      }
      equalsWithEpsilon(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.e;
        return WW && (0, LW.WithinEpsilon)(this._x, WW._x, iW) && (0, LW.WithinEpsilon)(this._y, WW._y, iW) && (0, LW.WithinEpsilon)(this._z, WW._z, iW) && (0, LW.WithinEpsilon)(this._w, WW._w, iW)
      }
      isApprox(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mW.e;
        return WW && ((0, LW.WithinEpsilon)(this._x, WW._x, iW) && (0, LW.WithinEpsilon)(this._y, WW._y, iW) && (0, LW.WithinEpsilon)(this._z, WW._z, iW) && (0, LW.WithinEpsilon)(this._w, WW._w, iW) || (0, LW.WithinEpsilon)(this._x, -WW._x, iW) && (0, LW.WithinEpsilon)(this._y, -WW._y, iW) && (0, LW.WithinEpsilon)(this._z, -WW._z, iW) && (0, LW.WithinEpsilon)(this._w, -WW._w, iW))
      }
      clone() {
        return new AW(this._x, this._y, this._z, this._w)
      }
      HJ(WW) {
        return this._x = WW._x, this._y = WW._y, this._z = WW._z, this._w = WW._w, this._isDirty = !0, this
      }
      yWW(WW, iW, OW, mW) {
        return this._x = WW, this._y = iW, this._z = OW, this._w = mW, this._isDirty = !0, this
      }
      set(WW, iW, OW, mW) {
        return this.yWW(WW, iW, OW, mW)
      }
      Z5(WW) {
        return this.yWW(WW, WW, WW, WW)
      }
      add(WW) {
        return new AW(this._x + WW._x, this._y + WW._y, this._z + WW._z, this._w + WW._w)
      }
      addInPlace(WW) {
        return this._x += WW._x, this._y += WW._y, this._z += WW._z, this._w += WW._w, this._isDirty = !0, this
      }
      addToRef(WW, iW) {
        return iW._x = this._x + WW._x, iW._y = this._y + WW._y, iW._z = this._z + WW._z, iW._w = this._w + WW._w, iW._isDirty = !0, iW
      }
      addInPlaceFromFloats(WW, iW, OW, mW) {
        return this._x += WW, this._y += iW, this._z += OW, this._w += mW, this._isDirty = !0, this
      }
      subtractToRef(WW, iW) {
        return iW._x = this._x - WW._x, iW._y = this._y - WW._y, iW._z = this._z - WW._z, iW._w = this._w - WW._w, iW._isDirty = !0, iW
      }
      subtractFromFloats(WW, iW, OW, mW) {
        return this.subtractFromFloatsToRef(WW, iW, OW, mW, new AW)
      }
      subtractFromFloatsToRef(WW, iW, OW, mW, EW) {
        return EW._x = this._x - WW, EW._y = this._y - iW, EW._z = this._z - OW, EW._w = this._w - mW, EW._isDirty = !0, EW
      }
      subtract(WW) {
        return new AW(this._x - WW._x, this._y - WW._y, this._z - WW._z, this._w - WW._w)
      }
      yEW(WW) {
        return this._x -= WW._x, this._y -= WW._y, this._z -= WW._z, this._w -= WW._w, this._isDirty = !0, this
      }
      scale(WW) {
        return new AW(this._x * WW, this._y * WW, this._z * WW, this._w * WW)
      }
      scaleToRef(WW, iW) {
        return iW._x = this._x * WW, iW._y = this._y * WW, iW._z = this._z * WW, iW._w = this._w * WW, iW._isDirty = !0, iW
      }
      scaleInPlace(WW) {
        return this._x *= WW, this._y *= WW, this._z *= WW, this._w *= WW, this._isDirty = !0, this
      }
      scaleAndAddToRef(WW, iW) {
        return iW._x += this._x * WW, iW._y += this._y * WW, iW._z += this._z * WW, iW._w += this._w * WW, iW._isDirty = !0, iW
      }
      multiply(WW) {
        const iW = new AW(0, 0, 0, 1);
        return this.multiplyToRef(WW, iW), iW
      }
      multiplyToRef(WW, iW) {
        const OW = this._x * WW._w + this._y * WW._z - this._z * WW._y + this._w * WW._x,
          mW = -this._x * WW._z + this._y * WW._w + this._z * WW._x + this._w * WW._y,
          EW = this._x * WW._y - this._y * WW._x + this._z * WW._w + this._w * WW._z,
          NW = -this._x * WW._x - this._y * WW._y - this._z * WW._z + this._w * WW._w;
        return iW.yWW(OW, mW, EW, NW), iW
      }
      multiplyInPlace(WW) {
        return this.multiplyToRef(WW, this)
      }
      multiplyByFloats(WW, iW, OW, mW) {
        return this._x *= WW, this._y *= iW, this._z *= OW, this._w *= mW, this._isDirty = !0, this
      }
      divide(WW) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(WW, iW) {
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
      Lj() {
        return this.negateToRef(new AW)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(WW) {
        return WW._x = -this._x, WW._y = -this._y, WW._z = -this._z, WW._w = -this._w, WW._isDirty = !0, WW
      }
      jLW(WW, iW, OW, mW) {
        return this._x === WW && this._y === iW && this._z === OW && this._w === mW
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
        return WW.yWW(-this._x, -this._y, -this._z, this._w), WW
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new AW(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const WW = this.conjugate(),
          iW = this.lengthSquared();
        return 0 == iW || 1 == iW || WW.scaleInPlace(1 / iW), WW
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
        const WW = new AW(0, 0, 0, 1);
        return this.normalizeToRef(WW), WW
      }
      normalizeToRef(WW) {
        const iW = this.length();
        return 0 === iW || 1 === iW ? WW.yWW(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / iW, WW)
      }
      toEulerAngles() {
        const WW = xW.Zero();
        return this.toEulerAnglesToRef(WW), WW
      }
      toEulerAnglesToRef(WW) {
        const iW = this._z,
          OW = this._x,
          mW = this._y,
          EW = this._w,
          NW = mW * iW - OW * EW,
          PW = .4999999;
        if (NW < -PW) WW._y = 2 * Math.atan2(mW, EW), WW._x = Math.PI / 2, WW._z = 0, WW._isDirty = !0;
        else if (NW > PW) WW._y = 2 * Math.atan2(mW, EW), WW._x = -Math.PI / 2, WW._z = 0, WW._isDirty = !0;
        else {
          const PW = EW * EW,
            LW = iW * iW,
            cW = OW * OW,
            wW = mW * mW;
          WW._z = Math.atan2(2 * (OW * mW + iW * EW), -LW - cW + wW + PW), WW._x = Math.asin(-2 * NW), WW._y = Math.atan2(2 * (iW * OW + mW * EW), LW - cW - wW + PW), WW._isDirty = !0
        }
        return WW
      }
      toAlphaBetaGammaToRef(WW) {
        const iW = this._z,
          OW = this._x,
          mW = this._y,
          EW = this._w,
          NW = Math.sqrt(OW * OW + mW * mW),
          PW = Math.sqrt(iW * iW + EW * EW),
          LW = 2 * Math.atan2(NW, PW),
          cW = 2 * Math.atan2(iW, EW),
          wW = 2 * Math.atan2(mW, OW),
          tW = (cW + wW) / 2,
          ZW = (cW - wW) / 2;
        return WW.set(ZW, LW, tW), WW
      }
      toRotationMatrix(WW) {
        return bW.FromQuaternionToRef(this, WW), WW
      }
      fromRotationMatrix(WW) {
        return AW.FromRotationMatrixToRef(WW, this), this
      }
      dot(WW) {
        return this._x * WW._x + this._y * WW._y + this._z * WW._z + this._w * WW._w
      }
      toAxisAngle() {
        const WW = xW.Zero();
        return {
          axis: WW,
          angle: this.toAxisAngleToRef(WW)
        }
      }
      toAxisAngleToRef(WW) {
        let iW;
        const OW = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          mW = this._w;
        return OW > 0 ? (iW = 2 * Math.atan2(OW, mW), WW.set(this._x / OW, this._y / OW, this._z / OW)) : (iW = 0, WW.set(1, 0, 0)), iW
      }
      static FromRotationMatrix(WW) {
        const iW = new AW;
        return AW.FromRotationMatrixToRef(WW, iW), iW
      }
      static FromRotationMatrixToRef(WW, iW) {
        const OW = WW.m,
          mW = OW[0],
          EW = OW[4],
          NW = OW[8],
          PW = OW[1],
          LW = OW[5],
          cW = OW[9],
          wW = OW[2],
          tW = OW[6],
          ZW = OW[10],
          xW = mW + LW + ZW;
        let lW;
        return xW > 0 ? (lW = .5 / Math.sqrt(xW + 1), iW._w = .25 / lW, iW._x = (tW - cW) * lW, iW._y = (NW - wW) * lW, iW._z = (PW - EW) * lW, iW._isDirty = !0) : mW > LW && mW > ZW ? (lW = 2 * Math.sqrt(1 + mW - LW - ZW), iW._w = (tW - cW) / lW, iW._x = .25 * lW, iW._y = (EW + PW) / lW, iW._z = (NW + wW) / lW, iW._isDirty = !0) : LW > ZW ? (lW = 2 * Math.sqrt(1 + LW - mW - ZW), iW._w = (NW - wW) / lW, iW._x = (EW + PW) / lW, iW._y = .25 * lW, iW._z = (cW + tW) / lW, iW._isDirty = !0) : (lW = 2 * Math.sqrt(1 + ZW - mW - LW), iW._w = (PW - EW) / lW, iW._x = (NW + wW) / lW, iW._y = (cW + tW) / lW, iW._z = .25 * lW, iW._isDirty = !0), iW
      }
      static Dot(WW, iW) {
        return WW._x * iW._x + WW._y * iW._y + WW._z * iW._z + WW._w * iW._w
      }
      static AreClose(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const mW = AW.Dot(WW, iW);
        return 1 - mW * mW <= OW
      }
      static SmoothToRef(WW, iW, OW, mW, EW) {
        let NW = 0 === mW ? 1 : OW / mW;
        return NW = (0, LW.Clamp)(NW, 0, 1), AW.SlerpToRef(WW, iW, NW, EW), EW
      }
      static Zero() {
        return new AW(0, 0, 0, 0)
      }
      static Inverse(WW) {
        return new AW(-WW._x, -WW._y, -WW._z, WW._w)
      }
      static InverseToRef(WW, iW) {
        return iW.set(-WW._x, -WW._y, -WW._z, WW._w), iW
      }
      static Identity() {
        return new AW(0, 0, 0, 1)
      }
      static IsIdentity(WW) {
        return WW && 0 === WW._x && 0 === WW._y && 0 === WW._z && 1 === WW._w
      }
      static RotationAxis(WW, iW) {
        return AW.RotationAxisToRef(WW, iW, new AW)
      }
      static RotationAxisToRef(WW, iW, OW) {
        OW._w = Math.cos(iW / 2);
        const mW = Math.sin(iW / 2) / WW.length();
        return OW._x = WW._x * mW, OW._y = WW._y * mW, OW._z = WW._z * mW, OW._isDirty = !0, OW
      }
      static FromArray(WW, iW) {
        return iW || (iW = 0), new AW(WW[iW], WW[iW + 1], WW[iW + 2], WW[iW + 3])
      }
      static FromArrayToRef(WW, iW, OW) {
        return OW._x = WW[iW], OW._y = WW[iW + 1], OW._z = WW[iW + 2], OW._w = WW[iW + 3], OW._isDirty = !0, OW
      }
      static FromFloatsToRef(WW, iW, OW, mW, EW) {
        return EW.yWW(WW, iW, OW, mW), EW
      }
      static FromEulerAngles(WW, iW, OW) {
        const mW = new AW;
        return AW.RotationYawPitchRollToRef(iW, WW, OW, mW), mW
      }
      static FromEulerAnglesToRef(WW, iW, OW, mW) {
        return AW.RotationYawPitchRollToRef(iW, WW, OW, mW), mW
      }
      static FromEulerVector(WW) {
        const iW = new AW;
        return AW.RotationYawPitchRollToRef(WW._y, WW._x, WW._z, iW), iW
      }
      static FromEulerVectorToRef(WW, iW) {
        return AW.RotationYawPitchRollToRef(WW._y, WW._x, WW._z, iW), iW
      }
      static FromUnitVectorsToRef(WW, iW, OW) {
        let EW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : mW.e;
        const NW = xW.Dot(WW, iW) + 1;
        return NW < EW ? Math.abs(WW.x) > Math.abs(WW.z) ? OW.set(-WW.y, WW.x, 0, 0) : OW.set(0, -WW.z, WW.y, 0) : (xW.CrossToRef(WW, iW, UW.fA[0]), OW.set(UW.fA[0].x, UW.fA[0].y, UW.fA[0].z, NW)), OW.normalize()
      }
      static RotationYawPitchRoll(WW, iW, OW) {
        const mW = new AW;
        return AW.RotationYawPitchRollToRef(WW, iW, OW, mW), mW
      }
      static RotationYawPitchRollToRef(WW, iW, OW, mW) {
        const EW = .5 * OW,
          NW = .5 * iW,
          PW = .5 * WW,
          LW = Math.sin(EW),
          cW = Math.cos(EW),
          wW = Math.sin(NW),
          tW = Math.cos(NW),
          ZW = Math.sin(PW),
          xW = Math.cos(PW);
        return mW._x = xW * wW * cW + ZW * tW * LW, mW._y = ZW * tW * cW - xW * wW * LW, mW._z = xW * tW * LW - ZW * wW * cW, mW._w = xW * tW * cW + ZW * wW * LW, mW._isDirty = !0, mW
      }
      static RotationAlphaBetaGamma(WW, iW, OW) {
        const mW = new AW;
        return AW.RotationAlphaBetaGammaToRef(WW, iW, OW, mW), mW
      }
      static RotationAlphaBetaGammaToRef(WW, iW, OW, mW) {
        const EW = .5 * (OW + WW),
          NW = .5 * (OW - WW),
          PW = .5 * iW;
        return mW._x = Math.cos(NW) * Math.sin(PW), mW._y = Math.sin(NW) * Math.sin(PW), mW._z = Math.sin(EW) * Math.cos(PW), mW._w = Math.cos(EW) * Math.cos(PW), mW._isDirty = !0, mW
      }
      static RotationQuaternionFromAxis(WW, iW, OW) {
        const mW = new AW(0, 0, 0, 0);
        return AW.RotationQuaternionFromAxisToRef(WW, iW, OW, mW), mW
      }
      static RotationQuaternionFromAxisToRef(WW, iW, OW, mW) {
        const EW = jW.Matrix[0];
        return WW = WW.normalizeToRef(jW.fA[0]), iW = iW.normalizeToRef(jW.fA[1]), OW = OW.normalizeToRef(jW.fA[2]), bW.FromXYZAxesToRef(WW, iW, OW, EW), AW.FromRotationMatrixToRef(EW, mW), mW
      }
      static FromLookDirectionLH(WW, iW) {
        const OW = new AW;
        return AW.FromLookDirectionLHToRef(WW, iW, OW), OW
      }
      static FromLookDirectionLHToRef(WW, iW, OW) {
        const mW = jW.Matrix[0];
        return bW.LookDirectionLHToRef(WW, iW, mW), AW.FromRotationMatrixToRef(mW, OW), OW
      }
      static FromLookDirectionRH(WW, iW) {
        const OW = new AW;
        return AW.FromLookDirectionRHToRef(WW, iW, OW), OW
      }
      static FromLookDirectionRHToRef(WW, iW, OW) {
        const mW = jW.Matrix[0];
        return bW.LookDirectionRHToRef(WW, iW, mW), AW.FromRotationMatrixToRef(mW, OW)
      }
      static Slerp(WW, iW, OW) {
        const mW = AW.Identity();
        return AW.SlerpToRef(WW, iW, OW, mW), mW
      }
      static SlerpToRef(WW, iW, OW, mW) {
        let EW, NW, PW = WW._x * iW._x + WW._y * iW._y + WW._z * iW._z + WW._w * iW._w,
          LW = !1;
        if (PW < 0 && (LW = !0, PW = -PW), PW > .999999) NW = 1 - OW, EW = LW ? -OW : OW;
        else {
          const WW = Math.acos(PW),
            iW = 1 / Math.sin(WW);
          NW = Math.sin((1 - OW) * WW) * iW, EW = LW ? -Math.sin(OW * WW) * iW : Math.sin(OW * WW) * iW
        }
        return mW._x = NW * WW._x + EW * iW._x, mW._y = NW * WW._y + EW * iW._y, mW._z = NW * WW._z + EW * iW._z, mW._w = NW * WW._w + EW * iW._w, mW._isDirty = !0, mW
      }
      static Hermite(WW, iW, OW, mW, EW) {
        const NW = EW * EW,
          PW = EW * NW,
          LW = 2 * PW - 3 * NW + 1,
          cW = -2 * PW + 3 * NW,
          wW = PW - 2 * NW + EW,
          tW = PW - NW,
          ZW = WW._x * LW + OW._x * cW + iW._x * wW + mW._x * tW,
          xW = WW._y * LW + OW._y * cW + iW._y * wW + mW._y * tW,
          lW = WW._z * LW + OW._z * cW + iW._z * wW + mW._z * tW,
          bW = WW._w * LW + OW._w * cW + iW._w * wW + mW._w * tW;
        return new AW(ZW, xW, lW, bW)
      }
      static Hermite1stDerivative(WW, iW, OW, mW, EW) {
        const NW = new AW;
        return this.Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW), NW
      }
      static Hermite1stDerivativeToRef(WW, iW, OW, mW, EW, NW) {
        const PW = EW * EW;
        return NW._x = 6 * (PW - EW) * WW._x + (3 * PW - 4 * EW + 1) * iW._x + 6 * (-PW + EW) * OW._x + (3 * PW - 2 * EW) * mW._x, NW._y = 6 * (PW - EW) * WW._y + (3 * PW - 4 * EW + 1) * iW._y + 6 * (-PW + EW) * OW._y + (3 * PW - 2 * EW) * mW._y, NW._z = 6 * (PW - EW) * WW._z + (3 * PW - 4 * EW + 1) * iW._z + 6 * (-PW + EW) * OW._z + (3 * PW - 2 * EW) * mW._z, NW._w = 6 * (PW - EW) * WW._w + (3 * PW - 4 * EW + 1) * iW._w + 6 * (-PW + EW) * OW._w + (3 * PW - 2 * EW) * mW._w, NW._isDirty = !0, NW
      }
      static Normalize(WW) {
        const iW = AW.Zero();
        return AW.NormalizeToRef(WW, iW), iW
      }
      static NormalizeToRef(WW, iW) {
        return WW.normalizeToRef(iW), iW
      }
      static Clamp(WW, iW, OW) {
        const mW = new AW;
        return AW.ClampToRef(WW, iW, OW, mW), mW
      }
      static ClampToRef(WW, iW, OW, mW) {
        return mW.yWW((0, LW.Clamp)(WW.x, iW.x, OW.x), (0, LW.Clamp)(WW.y, iW.y, OW.y), (0, LW.Clamp)(WW.z, iW.z, OW.z), (0, LW.Clamp)(WW.w, iW.w, OW.w))
      }
      static Random() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new AW((0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW))
      }
      static RandomToRef() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).yWW((0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW), (0, LW.RandomRange)(WW, iW))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(WW, iW) {
        return Math.sqrt(AW.DistanceSquared(WW, iW))
      }
      static DistanceSquared(WW, iW) {
        const OW = WW.x - iW.x,
          mW = WW.y - iW.y,
          EW = WW.z - iW.z,
          NW = WW.w - iW.w;
        return OW * OW + mW * mW + EW * EW + NW * NW
      }
      static Center(WW, iW) {
        return AW.CenterToRef(WW, iW, AW.Zero())
      }
      static CenterToRef(WW, iW, OW) {
        return OW.yWW((WW.x + iW.x) / 2, (WW.y + iW.y) / 2, (WW.z + iW.z) / 2, (WW.w + iW.w) / 2)
      }
    }
    AW._V8PerformanceHack = new AW(.5, .5, .5, .5);
    class bW {
      static get Use64Bits() {
        return NW.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = cW.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mW = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = WW, this._isIdentity3x2 = WW || OW, this._isIdentityDirty = !this._isIdentity && iW, this._isIdentity3x2Dirty = !this._isIdentity3x2 && mW
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, NW.c.MatrixTrackPrecisionChange && NW.c.MatrixTrackedMatrices.push(this), this._m = new NW.c.MatrixCurrentType(16), this.markAsUpdated()
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
          iW = WW[0],
          OW = WW[1],
          mW = WW[2],
          EW = WW[3],
          NW = WW[4],
          PW = WW[5],
          LW = WW[6],
          cW = WW[7],
          wW = WW[8],
          tW = WW[9],
          ZW = WW[10],
          xW = WW[11],
          lW = WW[12],
          AW = WW[13],
          bW = WW[14],
          jW = WW[15],
          UW = ZW * jW - bW * xW,
          kW = tW * jW - AW * xW,
          sW = tW * bW - AW * ZW,
          MW = wW * jW - lW * xW,
          KW = wW * bW - ZW * lW,
          SW = wW * AW - lW * tW;
        return iW * +(PW * UW - LW * kW + cW * sW) + OW * -(NW * UW - LW * MW + cW * KW) + mW * +(NW * kW - PW * MW + cW * SW) + EW * -(NW * sW - PW * KW + LW * SW)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!WW) return this._m;
        const OW = this._m;
        for (let mW = 0; mW < 16; mW++) WW[iW + mW] = OW[mW];
        return this
      }
      wEW() {
        return this._m
      }
      mZ(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bW.FromArrayToRef(WW, iW, this)
      }
      yWW() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return bW.FromArrayToRef(iW, 0, this)
      }
      set() {
        const WW = this._m;
        for (let iW = 0; iW < 16; iW++) WW[iW] = iW < 0 || arguments.length <= iW ? void 0 : arguments[iW];
        return this.markAsUpdated(), this
      }
      Z5(WW) {
        const iW = this._m;
        for (let OW = 0; OW < 16; OW++) iW[OW] = WW;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return bW.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(WW) {
        const iW = new bW;
        return this.addToRef(WW, iW), iW
      }
      addToRef(WW, iW) {
        const OW = this._m,
          mW = iW._m,
          EW = WW.m;
        for (let NW = 0; NW < 16; NW++) mW[NW] = OW[NW] + EW[NW];
        return iW.markAsUpdated(), iW
      }
      addToSelf(WW) {
        const iW = this._m,
          OW = WW.m;
        return iW[0] += OW[0], iW[1] += OW[1], iW[2] += OW[2], iW[3] += OW[3], iW[4] += OW[4], iW[5] += OW[5], iW[6] += OW[6], iW[7] += OW[7], iW[8] += OW[8], iW[9] += OW[9], iW[10] += OW[10], iW[11] += OW[11], iW[12] += OW[12], iW[13] += OW[13], iW[14] += OW[14], iW[15] += OW[15], this.markAsUpdated(), this
      }
      addInPlace(WW) {
        const iW = this._m,
          OW = WW.m;
        for (let mW = 0; mW < 16; mW++) iW[mW] += OW[mW];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const WW = this._m;
        for (let iW = 0; iW < 16; iW++) WW[iW] += iW < 0 || arguments.length <= iW ? void 0 : arguments[iW];
        return this.markAsUpdated(), this
      }
      subtract(WW) {
        const iW = this._m,
          OW = WW.m;
        for (let mW = 0; mW < 16; mW++) iW[mW] -= OW[mW];
        return this.markAsUpdated(), this
      }
      subtractToRef(WW, iW) {
        const OW = this._m,
          mW = WW.m,
          EW = iW._m;
        for (let NW = 0; NW < 16; NW++) EW[NW] = OW[NW] - mW[NW];
        return iW.markAsUpdated(), iW
      }
      yEW(WW) {
        const iW = this._m,
          OW = WW.m;
        for (let mW = 0; mW < 16; mW++) iW[mW] -= OW[mW];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        return this.subtractFromFloatsToRef(...iW, new bW)
      }
      subtractFromFloatsToRef() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        const mW = iW.pop(),
          EW = this._m,
          NW = mW._m,
          PW = iW;
        for (let LW = 0; LW < 16; LW++) NW[LW] = EW[LW] - PW[LW];
        return mW.markAsUpdated(), mW
      }
      invertToRef(WW) {
        return !0 === this._isIdentity ? (bW.IdentityToRef(WW), WW) : ((0, cW.f)(this, WW.wEW()) ? WW.markAsUpdated() : WW.HJ(this), WW)
      }
      addAtIndex(WW, iW) {
        return this._m[WW] += iW, this.markAsUpdated(), this
      }
      multiplyAtIndex(WW, iW) {
        return this._m[WW] *= iW, this.markAsUpdated(), this
      }
      setTranslationFromFloats(WW, iW, OW) {
        return this._m[12] = WW, this._m[13] = iW, this._m[14] = OW, this.markAsUpdated(), this
      }
      addTranslationFromFloats(WW, iW, OW) {
        return this._m[12] += WW, this._m[13] += iW, this._m[14] += OW, this.markAsUpdated(), this
      }
      setTranslation(WW) {
        return this.setTranslationFromFloats(WW._x, WW._y, WW._z)
      }
      getTranslation() {
        return new xW(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(WW) {
        return WW.x = this._m[12], WW.y = this._m[13], WW.z = this._m[14], WW
      }
      removeRotationAndScaling() {
        const WW = this.m;
        return bW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, WW[12], WW[13], WW[14], WW[15], this), this._updateIdentityStatus(0 === WW[12] && 0 === WW[13] && 0 === WW[14] && 1 === WW[15]), this
      }
      HJ(WW) {
        WW.copyToArray(this._m);
        const iW = WW;
        return this.updateFlag = iW.updateFlag, this._updateIdentityStatus(iW._isIdentity, iW._isIdentityDirty, iW._isIdentity3x2, iW._isIdentity3x2Dirty), this
      }
      copyToArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, cW.d)(this, WW, iW), this
      }
      multiply(WW) {
        const iW = new bW;
        return this.multiplyToRef(WW, iW), iW
      }
      multiplyInPlace(WW) {
        const iW = this._m,
          OW = WW.m;
        for (let mW = 0; mW < 16; mW++) iW[mW] *= OW[mW];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const WW = this._m;
        for (let iW = 0; iW < 16; iW++) WW[iW] *= iW < 0 || arguments.length <= iW ? void 0 : arguments[iW];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var WW = arguments.length, iW = new Array(WW), OW = 0; OW < WW; OW++) iW[OW] = arguments[OW];
        const mW = iW.pop(),
          EW = this._m,
          NW = mW._m,
          PW = iW;
        for (let LW = 0; LW < 16; LW++) NW[LW] = EW[LW] * PW[LW];
        return mW.markAsUpdated(), mW
      }
      multiplyToRef(WW, iW) {
        return this._isIdentity ? (iW.HJ(WW), iW) : WW._isIdentity ? (iW.HJ(this), iW) : (this.multiplyToArray(WW, iW._m, 0), iW.markAsUpdated(), iW)
      }
      multiplyToArray(WW, iW, OW) {
        return (0, cW.m)(this, WW, iW, OW), this
      }
      divide(WW) {
        return this.divideToRef(WW, new bW)
      }
      divideToRef(WW, iW) {
        const OW = this._m,
          mW = WW.m,
          EW = iW._m;
        for (let NW = 0; NW < 16; NW++) EW[NW] = OW[NW] / mW[NW];
        return iW.markAsUpdated(), iW
      }
      divideInPlace(WW) {
        const iW = this._m,
          OW = WW.m;
        for (let mW = 0; mW < 16; mW++) iW[mW] /= OW[mW];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(WW) {
        const iW = this._m,
          OW = WW.m;
        for (let mW = 0; mW < 16; mW++) iW[mW] = Math.min(iW[mW], OW[mW]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const WW = this._m;
        for (let iW = 0; iW < 16; iW++) WW[iW] = Math.min(WW[iW], iW < 0 || arguments.length <= iW ? void 0 : arguments[iW]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(WW) {
        const iW = this._m,
          OW = WW.m;
        for (let mW = 0; mW < 16; mW++) iW[mW] = Math.max(iW[mW], OW[mW]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const WW = this._m;
        for (let iW = 0; iW < 16; iW++) WW[iW] = Math.max(WW[iW], iW < 0 || arguments.length <= iW ? void 0 : arguments[iW]);
        return this.markAsUpdated(), this
      }
      Lj() {
        return this.negateToRef(new bW)
      }
      negateInPlace() {
        const WW = this._m;
        for (let iW = 0; iW < 16; iW++) WW[iW] = -WW[iW];
        return this.markAsUpdated(), this
      }
      negateToRef(WW) {
        const iW = this._m,
          OW = WW._m;
        for (let mW = 0; mW < 16; mW++) OW[mW] = -iW[mW];
        return WW.markAsUpdated(), WW
      }
      equals(WW) {
        const iW = WW;
        if (!iW) return !1;
        if ((this._isIdentity || iW._isIdentity) && !this._isIdentityDirty && !iW._isIdentityDirty) return this._isIdentity && iW._isIdentity;
        const OW = this.m,
          mW = iW.m;
        return OW[0] === mW[0] && OW[1] === mW[1] && OW[2] === mW[2] && OW[3] === mW[3] && OW[4] === mW[4] && OW[5] === mW[5] && OW[6] === mW[6] && OW[7] === mW[7] && OW[8] === mW[8] && OW[9] === mW[9] && OW[10] === mW[10] && OW[11] === mW[11] && OW[12] === mW[12] && OW[13] === mW[13] && OW[14] === mW[14] && OW[15] === mW[15]
      }
      equalsWithEpsilon(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = this._m,
          mW = WW.m;
        for (let EW = 0; EW < 16; EW++)
          if (!(0, LW.WithinEpsilon)(OW[EW], mW[EW], iW)) return !1;
        return !0
      }
      jLW() {
        const WW = this._m;
        for (let iW = 0; iW < 16; iW++)
          if (WW[iW] != (iW < 0 || arguments.length <= iW ? void 0 : arguments[iW])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new bW)
      }
      floorToRef(WW) {
        const iW = this._m,
          OW = WW._m;
        for (let mW = 0; mW < 16; mW++) OW[mW] = Math.floor(iW[mW]);
        return WW.markAsUpdated(), WW
      }
      fract() {
        return this.fractToRef(new bW)
      }
      fractToRef(WW) {
        const iW = this._m,
          OW = WW._m;
        for (let mW = 0; mW < 16; mW++) OW[mW] = iW[mW] - Math.floor(iW[mW]);
        return WW.markAsUpdated(), WW
      }
      clone() {
        const WW = new bW;
        return WW.HJ(this), WW
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let WW = tW(this._m[0]);
        for (let iW = 1; iW < 16; iW++) WW = 397 * WW ^ tW(this._m[iW]);
        return WW
      }
      decomposeToTransformNode(WW) {
        return WW.rotationQuaternion = WW.rotationQuaternion || new AW, this.decompose(WW.YZ, WW.rotationQuaternion, WW.position)
      }
      decompose(WW, iW, OW, mW) {
        let EW = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return OW && OW.Z5(0), WW && WW.Z5(1), iW && iW.yWW(0, 0, 0, 1), !0;
        const NW = this._m;
        if (OW && OW.yWW(NW[12], NW[13], NW[14]), (WW = WW || jW.fA[0]).x = Math.sqrt(NW[0] * NW[0] + NW[1] * NW[1] + NW[2] * NW[2]), WW.y = Math.sqrt(NW[4] * NW[4] + NW[5] * NW[5] + NW[6] * NW[6]), WW.z = Math.sqrt(NW[8] * NW[8] + NW[9] * NW[9] + NW[10] * NW[10]), mW) {
          const iW = (EW ? mW.absoluteScaling.x : mW.YZ.x) < 0 ? -1 : 1,
            OW = (EW ? mW.absoluteScaling.y : mW.YZ.y) < 0 ? -1 : 1,
            NW = (EW ? mW.absoluteScaling.z : mW.YZ.z) < 0 ? -1 : 1;
          WW.x *= iW, WW.y *= OW, WW.z *= NW
        } else this.determinant() <= 0 && (WW.y *= -1);
        if (0 === WW._x || 0 === WW._y || 0 === WW._z) return iW && iW.yWW(0, 0, 0, 1), !1;
        if (iW) {
          const OW = 1 / WW._x,
            mW = 1 / WW._y,
            EW = 1 / WW._z;
          bW.FromValuesToRef(NW[0] * OW, NW[1] * OW, NW[2] * OW, 0, NW[4] * mW, NW[5] * mW, NW[6] * mW, 0, NW[8] * EW, NW[9] * EW, NW[10] * EW, 0, 0, 0, 0, 1, jW.Matrix[0]), AW.FromRotationMatrixToRef(jW.Matrix[0], iW)
        }
        return !0
      }
      getRow(WW) {
        if (WW < 0 || WW > 3) return null;
        const iW = 4 * WW;
        return new lW(this._m[iW + 0], this._m[iW + 1], this._m[iW + 2], this._m[iW + 3])
      }
      getRowToRef(WW, iW) {
        if (WW >= 0 && WW <= 3) {
          const OW = 4 * WW;
          iW.x = this._m[OW + 0], iW.y = this._m[OW + 1], iW.z = this._m[OW + 2], iW.w = this._m[OW + 3]
        }
        return iW
      }
      setRow(WW, iW) {
        return this.setRowFromFloats(WW, iW.x, iW.y, iW.z, iW.w)
      }
      transpose() {
        const WW = new bW;
        return bW.TransposeToRef(this, WW), WW
      }
      transposeToRef(WW) {
        return bW.TransposeToRef(this, WW), WW
      }
      setRowFromFloats(WW, iW, OW, mW, EW) {
        if (WW < 0 || WW > 3) return this;
        const NW = 4 * WW;
        return this._m[NW + 0] = iW, this._m[NW + 1] = OW, this._m[NW + 2] = mW, this._m[NW + 3] = EW, this.markAsUpdated(), this
      }
      scale(WW) {
        const iW = new bW;
        return this.scaleToRef(WW, iW), iW
      }
      scaleToRef(WW, iW) {
        for (let OW = 0; OW < 16; OW++) iW._m[OW] = this._m[OW] * WW;
        return iW.markAsUpdated(), iW
      }
      scaleAndAddToRef(WW, iW) {
        for (let OW = 0; OW < 16; OW++) iW._m[OW] += this._m[OW] * WW;
        return iW.markAsUpdated(), iW
      }
      scaleInPlace(WW) {
        const iW = this._m;
        for (let OW = 0; OW < 16; OW++) iW[OW] *= WW;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(WW) {
        const iW = jW.Matrix[0];
        this.invertToRef(iW), iW.transposeToRef(WW);
        const OW = WW._m;
        return bW.FromValuesToRef(OW[0], OW[1], OW[2], 0, OW[4], OW[5], OW[6], 0, OW[8], OW[9], OW[10], 0, 0, 0, 0, 1, WW), WW
      }
      getRotationMatrix() {
        const WW = new bW;
        return this.getRotationMatrixToRef(WW), WW
      }
      getRotationMatrixToRef(WW) {
        const iW = jW.fA[0];
        if (!this.decompose(iW)) return bW.IdentityToRef(WW), WW;
        const OW = this._m,
          mW = 1 / iW._x,
          EW = 1 / iW._y,
          NW = 1 / iW._z;
        return bW.FromValuesToRef(OW[0] * mW, OW[1] * mW, OW[2] * mW, 0, OW[4] * EW, OW[5] * EW, OW[6] * EW, 0, OW[8] * NW, OW[9] * NW, OW[10] * NW, 0, 0, 0, 0, 1, WW), WW
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
        return this.multiplyToRef(kW, this), this
      }
      static FromArray(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const OW = new bW;
        return bW.FromArrayToRef(WW, iW, OW), OW
      }
      static FromArrayToRef(WW, iW, OW) {
        for (let mW = 0; mW < 16; mW++) OW._m[mW] = WW[mW + iW];
        return OW.markAsUpdated(), OW
      }
      static FromFloat32ArrayToRefScaled(WW, iW, OW, mW) {
        return mW._m[0] = WW[0 + iW] * OW, mW._m[1] = WW[1 + iW] * OW, mW._m[2] = WW[2 + iW] * OW, mW._m[3] = WW[3 + iW] * OW, mW._m[4] = WW[4 + iW] * OW, mW._m[5] = WW[5 + iW] * OW, mW._m[6] = WW[6 + iW] * OW, mW._m[7] = WW[7 + iW] * OW, mW._m[8] = WW[8 + iW] * OW, mW._m[9] = WW[9 + iW] * OW, mW._m[10] = WW[10 + iW] * OW, mW._m[11] = WW[11 + iW] * OW, mW._m[12] = WW[12 + iW] * OW, mW._m[13] = WW[13 + iW] * OW, mW._m[14] = WW[14 + iW] * OW, mW._m[15] = WW[15 + iW] * OW, mW.markAsUpdated(), mW
      }
      static get IdentityReadOnly() {
        return bW._IdentityReadOnly
      }
      static FromValuesToRef(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, bW, jW) {
        const UW = jW._m;
        UW[0] = WW, UW[1] = iW, UW[2] = OW, UW[3] = mW, UW[4] = EW, UW[5] = NW, UW[6] = PW, UW[7] = LW, UW[8] = cW, UW[9] = wW, UW[10] = tW, UW[11] = ZW, UW[12] = xW, UW[13] = lW, UW[14] = AW, UW[15] = bW, jW.markAsUpdated()
      }
      static FromValues(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW, ZW, xW, lW, AW, jW) {
        const UW = new bW,
          kW = UW._m;
        return kW[0] = WW, kW[1] = iW, kW[2] = OW, kW[3] = mW, kW[4] = EW, kW[5] = NW, kW[6] = PW, kW[7] = LW, kW[8] = cW, kW[9] = wW, kW[10] = tW, kW[11] = ZW, kW[12] = xW, kW[13] = lW, kW[14] = AW, kW[15] = jW, UW.markAsUpdated(), UW
      }
      static Compose(WW, iW, OW) {
        const mW = new bW;
        return bW.ComposeToRef(WW, iW, OW, mW), mW
      }
      static ComposeToRef(WW, iW, OW, mW) {
        const EW = mW._m,
          NW = iW._x,
          PW = iW._y,
          LW = iW._z,
          cW = iW._w,
          wW = NW + NW,
          tW = PW + PW,
          ZW = LW + LW,
          xW = NW * wW,
          lW = NW * tW,
          AW = NW * ZW,
          bW = PW * tW,
          jW = PW * ZW,
          UW = LW * ZW,
          kW = cW * wW,
          sW = cW * tW,
          MW = cW * ZW,
          KW = WW._x,
          SW = WW._y,
          YW = WW._z;
        return EW[0] = (1 - (bW + UW)) * KW, EW[1] = (lW + MW) * KW, EW[2] = (AW - sW) * KW, EW[3] = 0, EW[4] = (lW - MW) * SW, EW[5] = (1 - (xW + UW)) * SW, EW[6] = (jW + kW) * SW, EW[7] = 0, EW[8] = (AW + sW) * YW, EW[9] = (jW - kW) * YW, EW[10] = (1 - (xW + bW)) * YW, EW[11] = 0, EW[12] = OW._x, EW[13] = OW._y, EW[14] = OW._z, EW[15] = 1, mW.markAsUpdated(), mW
      }
      static Identity() {
        const WW = bW.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return WW._updateIdentityStatus(!0), WW
      }
      static IdentityToRef(WW) {
        return bW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, WW), WW._updateIdentityStatus(!0), WW
      }
      static Zero() {
        const WW = bW.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return WW._updateIdentityStatus(!1), WW
      }
      static RotationX(WW) {
        const iW = new bW;
        return bW.RotationXToRef(WW, iW), iW
      }
      static Invert(WW) {
        const iW = new bW;
        return WW.invertToRef(iW), iW
      }
      static RotationXToRef(WW, iW) {
        const OW = Math.sin(WW),
          mW = Math.cos(WW);
        return bW.FromValuesToRef(1, 0, 0, 0, 0, mW, OW, 0, 0, -OW, mW, 0, 0, 0, 0, 1, iW), iW._updateIdentityStatus(1 === mW && 0 === OW), iW
      }
      static RotationY(WW) {
        const iW = new bW;
        return bW.RotationYToRef(WW, iW), iW
      }
      static RotationYToRef(WW, iW) {
        const OW = Math.sin(WW),
          mW = Math.cos(WW);
        return bW.FromValuesToRef(mW, 0, -OW, 0, 0, 1, 0, 0, OW, 0, mW, 0, 0, 0, 0, 1, iW), iW._updateIdentityStatus(1 === mW && 0 === OW), iW
      }
      static RotationZ(WW) {
        const iW = new bW;
        return bW.RotationZToRef(WW, iW), iW
      }
      static RotationZToRef(WW, iW) {
        const OW = Math.sin(WW),
          mW = Math.cos(WW);
        return bW.FromValuesToRef(mW, OW, 0, 0, -OW, mW, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, iW), iW._updateIdentityStatus(1 === mW && 0 === OW), iW
      }
      static RotationAxis(WW, iW) {
        const OW = new bW;
        return bW.RotationAxisToRef(WW, iW, OW), OW
      }
      static RotationAxisToRef(WW, iW, OW) {
        const mW = Math.sin(-iW),
          EW = Math.cos(-iW),
          NW = 1 - EW;
        WW = WW.normalizeToRef(jW.fA[0]);
        const PW = OW._m;
        return PW[0] = WW._x * WW._x * NW + EW, PW[1] = WW._x * WW._y * NW - WW._z * mW, PW[2] = WW._x * WW._z * NW + WW._y * mW, PW[3] = 0, PW[4] = WW._y * WW._x * NW + WW._z * mW, PW[5] = WW._y * WW._y * NW + EW, PW[6] = WW._y * WW._z * NW - WW._x * mW, PW[7] = 0, PW[8] = WW._z * WW._x * NW - WW._y * mW, PW[9] = WW._z * WW._y * NW + WW._x * mW, PW[10] = WW._z * WW._z * NW + EW, PW[11] = 0, PW[12] = 0, PW[13] = 0, PW[14] = 0, PW[15] = 1, OW.markAsUpdated(), OW
      }
      static RotationAlignToRef(WW, iW, OW) {
        let EW = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const NW = xW.Dot(iW, WW),
          PW = OW._m;
        if (NW < -1 + mW.e) PW[0] = -1, PW[1] = 0, PW[2] = 0, PW[3] = 0, PW[4] = 0, PW[5] = EW ? 1 : -1, PW[6] = 0, PW[7] = 0, PW[8] = 0, PW[9] = 0, PW[10] = EW ? -1 : 1, PW[11] = 0;
        else {
          const OW = xW.Cross(iW, WW),
            mW = 1 / (1 + NW);
          PW[0] = OW._x * OW._x * mW + NW, PW[1] = OW._y * OW._x * mW - OW._z, PW[2] = OW._z * OW._x * mW + OW._y, PW[3] = 0, PW[4] = OW._x * OW._y * mW + OW._z, PW[5] = OW._y * OW._y * mW + NW, PW[6] = OW._z * OW._y * mW - OW._x, PW[7] = 0, PW[8] = OW._x * OW._z * mW - OW._y, PW[9] = OW._y * OW._z * mW + OW._x, PW[10] = OW._z * OW._z * mW + NW, PW[11] = 0
        }
        return PW[12] = 0, PW[13] = 0, PW[14] = 0, PW[15] = 1, OW.markAsUpdated(), OW
      }
      static RotationYawPitchRoll(WW, iW, OW) {
        const mW = new bW;
        return bW.RotationYawPitchRollToRef(WW, iW, OW, mW), mW
      }
      static RotationYawPitchRollToRef(WW, iW, OW, mW) {
        return AW.RotationYawPitchRollToRef(WW, iW, OW, jW.Quaternion[0]), jW.Quaternion[0].toRotationMatrix(mW), mW
      }
      static Scaling(WW, iW, OW) {
        const mW = new bW;
        return bW.ScalingToRef(WW, iW, OW, mW), mW
      }
      static ScalingToRef(WW, iW, OW, mW) {
        return bW.FromValuesToRef(WW, 0, 0, 0, 0, iW, 0, 0, 0, 0, OW, 0, 0, 0, 0, 1, mW), mW._updateIdentityStatus(1 === WW && 1 === iW && 1 === OW), mW
      }
      static Translation(WW, iW, OW) {
        const mW = new bW;
        return bW.TranslationToRef(WW, iW, OW, mW), mW
      }
      static TranslationToRef(WW, iW, OW, mW) {
        return bW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, WW, iW, OW, 1, mW), mW._updateIdentityStatus(0 === WW && 0 === iW && 0 === OW), mW
      }
      static Lerp(WW, iW, OW) {
        const mW = new bW;
        return bW.LerpToRef(WW, iW, OW, mW), mW
      }
      static LerpToRef(WW, iW, OW, mW) {
        const EW = mW._m,
          NW = WW.m,
          PW = iW.m;
        for (let LW = 0; LW < 16; LW++) EW[LW] = NW[LW] * (1 - OW) + PW[LW] * OW;
        return mW.markAsUpdated(), mW
      }
      static DecomposeLerp(WW, iW, OW) {
        const mW = new bW;
        return bW.DecomposeLerpToRef(WW, iW, OW, mW), mW
      }
      static DecomposeLerpToRef(WW, iW, OW, mW) {
        const EW = jW.fA[0],
          NW = jW.Quaternion[0],
          PW = jW.fA[1];
        WW.decompose(EW, NW, PW);
        const LW = jW.fA[2],
          cW = jW.Quaternion[1],
          wW = jW.fA[3];
        iW.decompose(LW, cW, wW);
        const tW = jW.fA[4];
        xW.LerpToRef(EW, LW, OW, tW);
        const ZW = jW.Quaternion[2];
        AW.SlerpToRef(NW, cW, OW, ZW);
        const lW = jW.fA[5];
        return xW.LerpToRef(PW, wW, OW, lW), bW.ComposeToRef(tW, ZW, lW, mW), mW
      }
      static LookAtLH(WW, iW, OW) {
        const mW = new bW;
        return bW.LookAtLHToRef(WW, iW, OW, mW), mW
      }
      static LookAtLHToRef(WW, iW, OW, mW) {
        const EW = jW.fA[0],
          NW = jW.fA[1],
          PW = jW.fA[2];
        iW.subtractToRef(WW, PW), PW.normalize(), xW.CrossToRef(OW, PW, EW);
        const LW = EW.lengthSquared();
        0 === LW ? EW.x = 1 : EW.normalizeFromLength(Math.sqrt(LW)), xW.CrossToRef(PW, EW, NW), NW.normalize();
        const cW = -xW.Dot(EW, WW),
          wW = -xW.Dot(NW, WW),
          tW = -xW.Dot(PW, WW);
        return bW.FromValuesToRef(EW._x, NW._x, PW._x, 0, EW._y, NW._y, PW._y, 0, EW._z, NW._z, PW._z, 0, cW, wW, tW, 1, mW), mW
      }
      static LookAtRH(WW, iW, OW) {
        const mW = new bW;
        return bW.LookAtRHToRef(WW, iW, OW, mW), mW
      }
      static LookAtRHToRef(WW, iW, OW, mW) {
        const EW = jW.fA[0],
          NW = jW.fA[1],
          PW = jW.fA[2];
        WW.subtractToRef(iW, PW), PW.normalize(), xW.CrossToRef(OW, PW, EW);
        const LW = EW.lengthSquared();
        0 === LW ? EW.x = 1 : EW.normalizeFromLength(Math.sqrt(LW)), xW.CrossToRef(PW, EW, NW), NW.normalize();
        const cW = -xW.Dot(EW, WW),
          wW = -xW.Dot(NW, WW),
          tW = -xW.Dot(PW, WW);
        return bW.FromValuesToRef(EW._x, NW._x, PW._x, 0, EW._y, NW._y, PW._y, 0, EW._z, NW._z, PW._z, 0, cW, wW, tW, 1, mW), mW
      }
      static LookDirectionLH(WW, iW) {
        const OW = new bW;
        return bW.LookDirectionLHToRef(WW, iW, OW), OW
      }
      static LookDirectionLHToRef(WW, iW, OW) {
        const mW = jW.fA[0];
        mW.HJ(WW), mW.scaleInPlace(-1);
        const EW = jW.fA[1];
        return xW.CrossToRef(iW, mW, EW), bW.FromValuesToRef(EW._x, EW._y, EW._z, 0, iW._x, iW._y, iW._z, 0, mW._x, mW._y, mW._z, 0, 0, 0, 0, 1, OW), OW
      }
      static LookDirectionRH(WW, iW) {
        const OW = new bW;
        return bW.LookDirectionRHToRef(WW, iW, OW), OW
      }
      static LookDirectionRHToRef(WW, iW, OW) {
        const mW = jW.fA[2];
        return xW.CrossToRef(iW, WW, mW), bW.FromValuesToRef(mW._x, mW._y, mW._z, 0, iW._x, iW._y, iW._z, 0, WW._x, WW._y, WW._z, 0, 0, 0, 0, 1, OW), OW
      }
      static OrthoLH(WW, iW, OW, mW, EW) {
        const NW = new bW;
        return bW.OrthoLHToRef(WW, iW, OW, mW, NW, EW), NW
      }
      static OrthoLHToRef(WW, iW, OW, mW, EW, NW) {
        const PW = 2 / WW,
          LW = 2 / iW,
          cW = 2 / (mW - OW),
          wW = -(mW + OW) / (mW - OW);
        return bW.FromValuesToRef(PW, 0, 0, 0, 0, LW, 0, 0, 0, 0, cW, 0, 0, 0, wW, 1, EW), NW && EW.multiplyToRef(kW, EW), EW._updateIdentityStatus(1 === PW && 1 === LW && 1 === cW && 0 === wW), EW
      }
      static OrthoOffCenterLH(WW, iW, OW, mW, EW, NW, PW) {
        const LW = new bW;
        return bW.OrthoOffCenterLHToRef(WW, iW, OW, mW, EW, NW, LW, PW), LW
      }
      static OrthoOffCenterLHToRef(WW, iW, OW, mW, EW, NW, PW, LW) {
        const cW = 2 / (iW - WW),
          wW = 2 / (mW - OW),
          tW = 2 / (NW - EW),
          ZW = -(NW + EW) / (NW - EW),
          xW = (WW + iW) / (WW - iW),
          lW = (mW + OW) / (OW - mW);
        return bW.FromValuesToRef(cW, 0, 0, 0, 0, wW, 0, 0, 0, 0, tW, 0, xW, lW, ZW, 1, PW), LW && PW.multiplyToRef(kW, PW), PW.markAsUpdated(), PW
      }
      static ObliqueOffCenterLHToRef(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
        const ZW = -PW * Math.cos(LW),
          xW = -PW * Math.sin(LW);
        return bW.TranslationToRef(0, 0, -cW, jW.Matrix[1]), bW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, ZW, xW, 1, 0, 0, 0, 0, 1, jW.Matrix[0]), jW.Matrix[1].multiplyToRef(jW.Matrix[0], jW.Matrix[0]), bW.TranslationToRef(0, 0, cW, jW.Matrix[1]), jW.Matrix[0].multiplyToRef(jW.Matrix[1], jW.Matrix[0]), bW.OrthoOffCenterLHToRef(WW, iW, OW, mW, EW, NW, wW, tW), jW.Matrix[0].multiplyToRef(wW, wW), wW
      }
      static OrthoOffCenterRH(WW, iW, OW, mW, EW, NW, PW) {
        const LW = new bW;
        return bW.OrthoOffCenterRHToRef(WW, iW, OW, mW, EW, NW, LW, PW), LW
      }
      static OrthoOffCenterRHToRef(WW, iW, OW, mW, EW, NW, PW, LW) {
        return bW.OrthoOffCenterLHToRef(WW, iW, OW, mW, EW, NW, PW, LW), PW._m[10] *= -1, PW
      }
      static ObliqueOffCenterRHToRef(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
        const ZW = PW * Math.cos(LW),
          xW = PW * Math.sin(LW);
        return bW.TranslationToRef(0, 0, cW, jW.Matrix[1]), bW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, ZW, xW, 1, 0, 0, 0, 0, 1, jW.Matrix[0]), jW.Matrix[1].multiplyToRef(jW.Matrix[0], jW.Matrix[0]), bW.TranslationToRef(0, 0, -cW, jW.Matrix[1]), jW.Matrix[0].multiplyToRef(jW.Matrix[1], jW.Matrix[0]), bW.OrthoOffCenterRHToRef(WW, iW, OW, mW, EW, NW, wW, tW), jW.Matrix[0].multiplyToRef(wW, wW), wW
      }
      static PerspectiveLH(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const PW = new bW,
          LW = 2 * OW / WW,
          cW = 2 * OW / iW,
          wW = (mW + OW) / (mW - OW),
          tW = -2 * mW * OW / (mW - OW),
          ZW = Math.tan(NW);
        return bW.FromValuesToRef(LW, 0, 0, 0, 0, cW, 0, ZW, 0, 0, wW, 1, 0, 0, tW, 0, PW), EW && PW.multiplyToRef(kW, PW), PW._updateIdentityStatus(!1), PW
      }
      static PerspectiveFovLH(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const LW = new bW;
        return bW.PerspectiveFovLHToRef(WW, iW, OW, mW, LW, !0, EW, NW, PW), LW
      }
      static PerspectiveFovLHToRef(WW, iW, OW, mW, EW) {
        let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const wW = OW,
          tW = mW,
          ZW = 1 / Math.tan(.5 * WW),
          xW = NW ? ZW / iW : ZW,
          lW = NW ? ZW : ZW * iW,
          AW = cW && 0 === wW ? -1 : 0 !== tW ? (tW + wW) / (tW - wW) : 1,
          jW = cW && 0 === wW ? 2 * tW : 0 !== tW ? -2 * tW * wW / (tW - wW) : -2 * wW,
          UW = Math.tan(LW);
        return bW.FromValuesToRef(xW, 0, 0, 0, 0, lW, 0, UW, 0, 0, AW, 1, 0, 0, jW, 0, EW), PW && EW.multiplyToRef(kW, EW), EW._updateIdentityStatus(!1), EW
      }
      static PerspectiveFovReverseLHToRef(WW, iW, OW, mW, EW) {
        let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const cW = 1 / Math.tan(.5 * WW),
          wW = NW ? cW / iW : cW,
          tW = NW ? cW : cW * iW,
          ZW = Math.tan(LW);
        return bW.FromValuesToRef(wW, 0, 0, 0, 0, tW, 0, ZW, 0, 0, -OW, 1, 0, 0, 1, 0, EW), PW && EW.multiplyToRef(kW, EW), EW._updateIdentityStatus(!1), EW
      }
      static PerspectiveFovRH(WW, iW, OW, mW, EW) {
        let NW = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          PW = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const LW = new bW;
        return bW.PerspectiveFovRHToRef(WW, iW, OW, mW, LW, !0, EW, NW, PW), LW
      }
      static PerspectiveFovRHToRef(WW, iW, OW, mW, EW) {
        let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          cW = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const wW = OW,
          tW = mW,
          ZW = 1 / Math.tan(.5 * WW),
          xW = NW ? ZW / iW : ZW,
          lW = NW ? ZW : ZW * iW,
          AW = cW && 0 === wW ? 1 : 0 !== tW ? -(tW + wW) / (tW - wW) : -1,
          jW = cW && 0 === wW ? 2 * tW : 0 !== tW ? -2 * tW * wW / (tW - wW) : -2 * wW,
          UW = Math.tan(LW);
        return bW.FromValuesToRef(xW, 0, 0, 0, 0, lW, 0, UW, 0, 0, AW, -1, 0, 0, jW, 0, EW), PW && EW.multiplyToRef(kW, EW), EW._updateIdentityStatus(!1), EW
      }
      static PerspectiveFovReverseRHToRef(WW, iW, OW, mW, EW) {
        let NW = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          PW = arguments.length > 6 ? arguments[6] : void 0,
          LW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const cW = 1 / Math.tan(.5 * WW),
          wW = NW ? cW / iW : cW,
          tW = NW ? cW : cW * iW,
          ZW = Math.tan(LW);
        return bW.FromValuesToRef(wW, 0, 0, 0, 0, tW, 0, ZW, 0, 0, -OW, -1, 0, 0, -1, 0, EW), PW && EW.multiplyToRef(kW, EW), EW._updateIdentityStatus(!1), EW
      }
      static GetFinalMatrix(WW, iW, OW, mW, EW, NW) {
        const PW = WW.width,
          LW = WW.height,
          cW = WW.x,
          wW = WW.y,
          tW = bW.FromValues(PW / 2, 0, 0, 0, 0, -LW / 2, 0, 0, 0, 0, NW - EW, 0, cW + PW / 2, LW / 2 + wW, EW, 1),
          ZW = new bW;
        return iW.multiplyToRef(OW, ZW), ZW.multiplyToRef(mW, ZW), ZW.multiplyToRef(tW, ZW)
      }
      static GetAsMatrix2x2(WW) {
        const iW = WW.m,
          OW = [iW[0], iW[1], iW[4], iW[5]];
        return NW.c.MatrixUse64Bits ? OW : new Float32Array(OW)
      }
      static GetAsMatrix3x3(WW) {
        const iW = WW.m,
          OW = [iW[0], iW[1], iW[2], iW[4], iW[5], iW[6], iW[8], iW[9], iW[10]];
        return NW.c.MatrixUse64Bits ? OW : new Float32Array(OW)
      }
      static Transpose(WW) {
        const iW = new bW;
        return bW.TransposeToRef(WW, iW), iW
      }
      static TransposeToRef(WW, iW) {
        const OW = WW.m,
          mW = OW[0],
          EW = OW[4],
          NW = OW[8],
          PW = OW[12],
          LW = OW[1],
          cW = OW[5],
          wW = OW[9],
          tW = OW[13],
          ZW = OW[2],
          xW = OW[6],
          lW = OW[10],
          AW = OW[14],
          bW = OW[3],
          jW = OW[7],
          UW = OW[11],
          kW = OW[15],
          sW = iW._m;
        return sW[0] = mW, sW[1] = EW, sW[2] = NW, sW[3] = PW, sW[4] = LW, sW[5] = cW, sW[6] = wW, sW[7] = tW, sW[8] = ZW, sW[9] = xW, sW[10] = lW, sW[11] = AW, sW[12] = bW, sW[13] = jW, sW[14] = UW, sW[15] = kW, iW.markAsUpdated(), iW._updateIdentityStatus(WW._isIdentity, WW._isIdentityDirty), iW
      }
      static Reflection(WW) {
        const iW = new bW;
        return bW.ReflectionToRef(WW, iW), iW
      }
      static ReflectionToRef(WW, iW) {
        WW.normalize();
        const OW = WW.normal.x,
          mW = WW.normal.y,
          EW = WW.normal.z,
          NW = -2 * OW,
          PW = -2 * mW,
          LW = -2 * EW;
        return bW.FromValuesToRef(NW * OW + 1, PW * OW, LW * OW, 0, NW * mW, PW * mW + 1, LW * mW, 0, NW * EW, PW * EW, LW * EW + 1, 0, NW * WW.d, PW * WW.d, LW * WW.d, 1, iW), iW
      }
      static FromXYZAxesToRef(WW, iW, OW, mW) {
        return bW.FromValuesToRef(WW._x, WW._y, WW._z, 0, iW._x, iW._y, iW._z, 0, OW._x, OW._y, OW._z, 0, 0, 0, 0, 1, mW), mW
      }
      static FromQuaternionToRef(WW, iW) {
        const OW = WW._x * WW._x,
          mW = WW._y * WW._y,
          EW = WW._z * WW._z,
          NW = WW._x * WW._y,
          PW = WW._z * WW._w,
          LW = WW._z * WW._x,
          cW = WW._y * WW._w,
          wW = WW._y * WW._z,
          tW = WW._x * WW._w;
        return iW._m[0] = 1 - 2 * (mW + EW), iW._m[1] = 2 * (NW + PW), iW._m[2] = 2 * (LW - cW), iW._m[3] = 0, iW._m[4] = 2 * (NW - PW), iW._m[5] = 1 - 2 * (EW + OW), iW._m[6] = 2 * (wW + tW), iW._m[7] = 0, iW._m[8] = 2 * (LW + cW), iW._m[9] = 2 * (wW - tW), iW._m[10] = 1 - 2 * (mW + OW), iW._m[11] = 0, iW._m[12] = 0, iW._m[13] = 0, iW._m[14] = 0, iW._m[15] = 1, iW.markAsUpdated(), iW
      }
    }
    bW._IdentityReadOnly = bW.Identity();
    class jW {}
    jW.fA = (0, EW.f)(11, xW.Zero), jW.Matrix = (0, EW.f)(2, bW.Identity), jW.Quaternion = (0, EW.f)(3, AW.Zero);
    class UW {}
    UW.Vector2 = (0, EW.f)(3, ZW.Zero), UW.fA = (0, EW.f)(13, xW.Zero), UW.Vector4 = (0, EW.f)(3, lW.Zero), UW.Quaternion = (0, EW.f)(3, AW.Zero), UW.Matrix = (0, EW.f)(8, bW.Identity);
    const kW = bW.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let sW = !1;

    function MW() {
      sW || (sW = !0, Object.defineProperties(ZW.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(xW.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(lW.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(AW.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(bW.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, wW.h)("BABYLON.Vector2", ZW), (0, wW.h)("BABYLON.Vector3", xW), (0, wW.h)("BABYLON.Vector4", lW), (0, wW.h)("BABYLON.Matrix", bW))
    }
  },
  38276: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    const mW = "undefined" !== typeof WeakRef;
    class EW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(WW, iW, OW, mW)
      }
      initialize(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = WW, this.skipNextObservers = iW, this.target = OW, this.currentTarget = mW, this
      }
    }
    class NW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = WW, this.mask = iW, this.scope = OW, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(WW)
      }
    }
    class PW {
      static FromPromise(WW, iW) {
        const OW = new PW;
        return WW.then((WW => {
          OW.notifyObservers(WW)
        })).catch((WW => {
          if (!iW) throw WW;
          iW.notifyObservers(WW)
        })), OW
      }
      get observers() {
        return this._observers
      }
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = iW, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new EW(0), WW && (this._onObserverAdded = WW)
      }
      add(WW) {
        let iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!WW) return null;
        const EW = new NW(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        EW.unregisterOnNextCall = OW, iW ? this._observers.unshift(EW) : this._observers.push(EW), this._onObserverAdded && this._onObserverAdded(EW), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(EW, this._lastNotifiedValue);
        const PW = mW ? new WeakRef(this) : {
          deref: () => this
        };
        return EW._remove = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const iW = PW.deref();
          iW && (WW ? iW.remove(EW) : iW._remove(EW))
        }, EW
      }
      addOnce(WW) {
        return this.add(WW, void 0, void 0, void 0, !0)
      }
      remove(WW) {
        if (!WW) return !1;
        WW._remove = null;
        return -1 !== this._observers.indexOf(WW) && (this._deferUnregister(WW), !0)
      }
      removeCallback(WW, iW) {
        for (let OW = 0; OW < this._observers.length; OW++) {
          const mW = this._observers[OW];
          if (!mW._willBeUnregistered && (mW.callback === WW && (!iW || iW === mW.scope))) return this._deferUnregister(mW), !0
        }
        return !1
      }
      _deferUnregister(WW) {
        WW._willBeUnregistered || (this._numObserversMarkedAsDeleted++, WW.unregisterOnNextCall = !1, WW._willBeUnregistered = !0, setTimeout((() => {
          this._remove(WW)
        }), 0))
      }
      _remove(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!WW) return !1;
        const OW = this._observers.indexOf(WW);
        return -1 !== OW && (iW && this._numObserversMarkedAsDeleted--, this._observers.splice(OW, 1), !0)
      }
      makeObserverTopPriority(WW) {
        this._remove(WW, !1), this._observers.unshift(WW)
      }
      makeObserverBottomPriority(WW) {
        this._remove(WW, !1), this._observers.push(WW)
      }
      notifyObservers(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WW), !this._observers.length) return !0;
        const NW = this._eventState;
        NW.mask = iW, NW.target = OW, NW.currentTarget = mW, NW.skipNextObservers = !1, NW.lastReturnValue = WW, NW.userInfo = EW;
        for (const PW of this._observers)
          if (!PW._willBeUnregistered && (PW.mask & iW && (PW.unregisterOnNextCall && this._deferUnregister(PW), PW.scope ? NW.lastReturnValue = PW.callback.apply(PW.scope, [WW, NW]) : NW.lastReturnValue = PW.callback(WW, NW)), NW.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = iW), WW._willBeUnregistered) return;
        const mW = this._eventState;
        mW.mask = OW, mW.skipNextObservers = !1, WW.unregisterOnNextCall && this._deferUnregister(WW), WW.callback(iW, mW)
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
        const WW = new PW;
        return WW._observers = this._observers.slice(0), WW
      }
      hasSpecificMask() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const iW of this._observers)
          if (iW.mask & WW || iW.mask === WW) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);