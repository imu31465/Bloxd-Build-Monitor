export const id = 222;
export const ids = [222];
export const modules = {
  36546: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(36552);
    class AY {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    AY.Instances = [], AY.OnEnginesDisposedObservable = new FY.e, AY._LastCreatedScene = null, AY.UseFallbackTexture = !0, AY.FallbackTexture = ""
  },
  36542: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => FY
    });
    class FY {
      static SetMatrixPrecision(YY) {
        if (FY.MatrixTrackPrecisionChange = !1, YY && !FY.MatrixUse64Bits && FY.MatrixTrackedMatrices)
          for (let rY = 0; rY < FY.MatrixTrackedMatrices.length; ++rY) {
            const YY = FY.MatrixTrackedMatrices[rY],
              DY = YY._m;
            YY._m = new Array(16);
            for (let rY = 0; rY < 16; ++rY) YY._m[rY] = DY[rY]
          }
        FY.MatrixUse64Bits = YY, FY.MatrixCurrentType = FY.MatrixUse64Bits ? Array : Float32Array, FY.MatrixTrackedMatrices = null
      }
    }
    FY.MatrixUse64Bits = !1, FY.MatrixTrackPrecisionChange = !0, FY.MatrixCurrentType = Float32Array, FY.MatrixTrackedMatrices = []
  },
  36561: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => OY,
      e: () => aY,
      f: () => gY,
      h: () => FY,
      i: () => IY,
      j: () => RY
    });
    class FY {}

    function AY(YY) {
      YY.updateFlag = FY._UpdateFlagSeed++
    }

    function IY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const AY = YY.VDY(),
        IY = rY.VDY(),
        RY = AY[0],
        OY = AY[1],
        gY = AY[2],
        aY = AY[3],
        vY = AY[4],
        uY = AY[5],
        sY = AY[6],
        iY = AY[7],
        yY = AY[8],
        QY = AY[9],
        oY = AY[10],
        WY = AY[11],
        EY = AY[12],
        mY = AY[13],
        VY = AY[14],
        SY = AY[15],
        lY = IY[0],
        TY = IY[1],
        eY = IY[2],
        NY = IY[3],
        BY = IY[4],
        cY = IY[5],
        KY = IY[6],
        HY = IY[7],
        zY = IY[8],
        ZY = IY[9],
        CY = IY[10],
        fY = IY[11],
        jY = IY[12],
        hY = IY[13],
        dY = IY[14],
        JY = IY[15];
      DY[FY] = RY * lY + OY * BY + gY * zY + aY * jY, DY[FY + 1] = RY * TY + OY * cY + gY * ZY + aY * hY, DY[FY + 2] = RY * eY + OY * KY + gY * CY + aY * dY, DY[FY + 3] = RY * NY + OY * HY + gY * fY + aY * JY, DY[FY + 4] = vY * lY + uY * BY + sY * zY + iY * jY, DY[FY + 5] = vY * TY + uY * cY + sY * ZY + iY * hY, DY[FY + 6] = vY * eY + uY * KY + sY * CY + iY * dY, DY[FY + 7] = vY * NY + uY * HY + sY * fY + iY * JY, DY[FY + 8] = yY * lY + QY * BY + oY * zY + WY * jY, DY[FY + 9] = yY * TY + QY * cY + oY * ZY + WY * hY, DY[FY + 10] = yY * eY + QY * KY + oY * CY + WY * dY, DY[FY + 11] = yY * NY + QY * HY + oY * fY + WY * JY, DY[FY + 12] = EY * lY + mY * BY + VY * zY + SY * jY, DY[FY + 13] = EY * TY + mY * cY + VY * ZY + SY * hY, DY[FY + 14] = EY * eY + mY * KY + VY * CY + SY * dY, DY[FY + 15] = EY * NY + mY * HY + VY * fY + SY * JY
    }

    function RY(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      IY(YY, rY, DY.VDY(), FY), AY(DY)
    }

    function OY(YY, rY) {
      let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const FY = YY.VDY();
      rY[DY] = FY[0], rY[DY + 1] = FY[1], rY[DY + 2] = FY[2], rY[DY + 3] = FY[3], rY[DY + 4] = FY[4], rY[DY + 5] = FY[5], rY[DY + 6] = FY[6], rY[DY + 7] = FY[7], rY[DY + 8] = FY[8], rY[DY + 9] = FY[9], rY[DY + 10] = FY[10], rY[DY + 11] = FY[11], rY[DY + 12] = FY[12], rY[DY + 13] = FY[13], rY[DY + 14] = FY[14], rY[DY + 15] = FY[15]
    }

    function gY(YY, rY) {
      const DY = aY(YY, rY.VDY());
      return DY && AY(rY), DY
    }

    function aY(YY, rY) {
      const DY = YY.VDY(),
        FY = DY[0],
        AY = DY[1],
        IY = DY[2],
        RY = DY[3],
        OY = DY[4],
        gY = DY[5],
        aY = DY[6],
        vY = DY[7],
        uY = DY[8],
        sY = DY[9],
        iY = DY[10],
        yY = DY[11],
        QY = DY[12],
        oY = DY[13],
        WY = DY[14],
        EY = DY[15],
        mY = iY * EY - WY * yY,
        VY = sY * EY - oY * yY,
        SY = sY * WY - oY * iY,
        lY = uY * EY - QY * yY,
        TY = uY * WY - iY * QY,
        eY = uY * oY - QY * sY,
        NY = +(gY * mY - aY * VY + vY * SY),
        BY = -(OY * mY - aY * lY + vY * TY),
        cY = +(OY * VY - gY * lY + vY * eY),
        KY = -(OY * SY - gY * TY + aY * eY),
        HY = FY * NY + AY * BY + IY * cY + RY * KY;
      if (0 === HY) return !1;
      const zY = 1 / HY,
        ZY = aY * EY - WY * vY,
        CY = gY * EY - oY * vY,
        fY = gY * WY - oY * aY,
        jY = OY * EY - QY * vY,
        hY = OY * WY - QY * aY,
        dY = OY * oY - QY * gY,
        JY = aY * yY - iY * vY,
        MY = gY * yY - sY * vY,
        wY = gY * iY - sY * aY,
        bY = OY * yY - uY * vY,
        XY = OY * iY - uY * aY,
        qY = OY * sY - uY * gY,
        pY = -(AY * mY - IY * VY + RY * SY),
        kY = +(FY * mY - IY * lY + RY * TY),
        GY = -(FY * VY - AY * lY + RY * eY),
        xY = +(FY * SY - AY * TY + IY * eY),
        nY = +(AY * ZY - IY * CY + RY * fY),
        PY = -(FY * ZY - IY * jY + RY * hY),
        UY = +(FY * CY - AY * jY + RY * dY),
        LY = -(FY * fY - AY * hY + IY * dY),
        tY = -(AY * JY - IY * MY + RY * wY),
        Yr = +(FY * JY - IY * bY + RY * XY),
        rr = -(FY * MY - AY * bY + RY * qY),
        Dr = +(FY * wY - AY * XY + IY * qY);
      return rY[0] = NY * zY, rY[1] = pY * zY, rY[2] = nY * zY, rY[3] = tY * zY, rY[4] = BY * zY, rY[5] = kY * zY, rY[6] = PY * zY, rY[7] = Yr * zY, rY[8] = cY * zY, rY[9] = GY * zY, rY[10] = UY * zY, rY[11] = rr * zY, rY[12] = KY * zY, rY[13] = xY * zY, rY[14] = LY * zY, rY[15] = Dr * zY, !0
    }
    FY._UpdateFlagSeed = 0
  },
  36524: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => QY,
      g: () => yY,
      j: () => VY,
      n: () => WY,
      q: () => uY,
      r: () => sY,
      v: () => iY
    });
    var FY = DY(36533),
      AY = DY(36539),
      IY = DY(36542),
      RY = DY(36546),
      OY = DY(36559),
      gY = DY(36561),
      aY = DY(36569);
    const vY = YY => parseInt(YY.toString().replace(/\W/g, ""));
    class uY {
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = YY, this.y = rY
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let YY = vY(this.x);
        return YY = 397 * YY ^ vY(this.y), YY
      }
      toArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YY[rY] = this.x, YY[rY + 1] = this.y, this
      }
      grY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return uY.FromArrayToRef(YY, rY, this), this
      }
      VDY() {
        return [this.x, this.y]
      }
      brY(YY) {
        return this.x = YY.x, this.y = YY.y, this
      }
      p_(YY, rY) {
        return this.x = YY, this.y = rY, this
      }
      set(YY, rY) {
        return this.p_(YY, rY)
      }
      o3(YY) {
        return this.p_(YY, YY)
      }
      add(YY) {
        return new uY(this.x + YY.x, this.y + YY.y)
      }
      addToRef(YY, rY) {
        return rY.x = this.x + YY.x, rY.y = this.y + YY.y, rY
      }
      addInPlace(YY) {
        return this.x += YY.x, this.y += YY.y, this
      }
      addInPlaceFromFloats(YY, rY) {
        return this.x += YY, this.y += rY, this
      }
      addVector3(YY) {
        return new uY(this.x + YY.x, this.y + YY.y)
      }
      subtract(YY) {
        return new uY(this.x - YY.x, this.y - YY.y)
      }
      subtractToRef(YY, rY) {
        return rY.x = this.x - YY.x, rY.y = this.y - YY.y, rY
      }
      dDY(YY) {
        return this.x -= YY.x, this.y -= YY.y, this
      }
      multiplyInPlace(YY) {
        return this.x *= YY.x, this.y *= YY.y, this
      }
      multiply(YY) {
        return new uY(this.x * YY.x, this.y * YY.y)
      }
      multiplyToRef(YY, rY) {
        return rY.x = this.x * YY.x, rY.y = this.y * YY.y, rY
      }
      multiplyByFloats(YY, rY) {
        return new uY(this.x * YY, this.y * rY)
      }
      divide(YY) {
        return new uY(this.x / YY.x, this.y / YY.y)
      }
      divideToRef(YY, rY) {
        return rY.x = this.x / YY.x, rY.y = this.y / YY.y, rY
      }
      divideInPlace(YY) {
        return this.x = this.x / YY.x, this.y = this.y / YY.y, this
      }
      minimizeInPlace(YY) {
        return this.minimizeInPlaceFromFloats(YY.x, YY.y)
      }
      maximizeInPlace(YY) {
        return this.maximizeInPlaceFromFloats(YY.x, YY.y)
      }
      minimizeInPlaceFromFloats(YY, rY) {
        return this.x = Math.min(YY, this.x), this.y = Math.min(rY, this.y), this
      }
      maximizeInPlaceFromFloats(YY, rY) {
        return this.x = Math.max(YY, this.x), this.y = Math.max(rY, this.y), this
      }
      subtractFromFloats(YY, rY) {
        return new uY(this.x - YY, this.y - rY)
      }
      subtractFromFloatsToRef(YY, rY, DY) {
        return DY.x = this.x - YY, DY.y = this.y - rY, DY
      }
      GA() {
        return new uY(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(YY) {
        return YY.x = -this.x, YY.y = -this.y, YY
      }
      scaleInPlace(YY) {
        return this.x *= YY, this.y *= YY, this
      }
      scale(YY) {
        return new uY(this.x * YY, this.y * YY)
      }
      scaleToRef(YY, rY) {
        return rY.x = this.x * YY, rY.y = this.y * YY, rY
      }
      scaleAndAddToRef(YY, rY) {
        return rY.x += this.x * YY, rY.y += this.y * YY, rY
      }
      equals(YY) {
        return YY && this.x === YY.x && this.y === YY.y
      }
      equalsWithEpsilon(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FY.c;
        return YY && (0, OY.WithinEpsilon)(this.x, YY.x, rY) && (0, OY.WithinEpsilon)(this.y, YY.y, rY)
      }
      kIY(YY, rY) {
        return this.x === YY && this.y === rY
      }
      floor() {
        return new uY(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(YY) {
        return YY.x = Math.floor(this.x), YY.y = Math.floor(this.y), YY
      }
      fract() {
        return new uY(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(YY) {
        return YY.x = this.x - Math.floor(this.x), YY.y = this.y - Math.floor(this.y), YY
      }
      rotate(YY) {
        return this.rotateToRef(YY, new uY)
      }
      rotateToRef(YY, rY) {
        const DY = Math.cos(YY),
          FY = Math.sin(YY);
        return rY.x = DY * this.x - FY * this.y, rY.y = FY * this.x + DY * this.y, rY
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
      normalizeFromLength(YY) {
        return 0 === YY || 1 === YY ? this : this.scaleInPlace(1 / YY)
      }
      normalizeToNew() {
        const YY = new uY;
        return this.normalizeToRef(YY), YY
      }
      normalizeToRef(YY) {
        const rY = this.length();
        return 0 === rY || 1 === rY ? (YY.x = this.x, YY.y = this.y, YY) : this.scaleToRef(1 / rY, YY)
      }
      clone() {
        return new uY(this.x, this.y)
      }
      dot(YY) {
        return this.x * YY.x + this.y * YY.y
      }
      static Zero() {
        return new uY(0, 0)
      }
      static One() {
        return new uY(1, 1)
      }
      static Random() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new uY((0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY))
      }
      static RandomToRef() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).p_((0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY))
      }
      static get ZeroReadOnly() {
        return uY._ZeroReadOnly
      }
      static FromArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new uY(YY[rY], YY[rY + 1])
      }
      static FromArrayToRef(YY, rY, DY) {
        return DY.x = YY[rY], DY.y = YY[rY + 1], DY
      }
      static FromFloatsToRef(YY, rY, DY) {
        return DY.p_(YY, rY), DY
      }
      static CatmullRom(YY, rY, DY, FY, AY) {
        const IY = AY * AY,
          RY = AY * IY,
          OY = .5 * (2 * rY.x + (-YY.x + DY.x) * AY + (2 * YY.x - 5 * rY.x + 4 * DY.x - FY.x) * IY + (-YY.x + 3 * rY.x - 3 * DY.x + FY.x) * RY),
          gY = .5 * (2 * rY.y + (-YY.y + DY.y) * AY + (2 * YY.y - 5 * rY.y + 4 * DY.y - FY.y) * IY + (-YY.y + 3 * rY.y - 3 * DY.y + FY.y) * RY);
        return new uY(OY, gY)
      }
      static ClampToRef(YY, rY, DY, FY) {
        return FY.x = (0, OY.Clamp)(YY.x, rY.x, DY.x), FY.y = (0, OY.Clamp)(YY.y, rY.y, DY.y), FY
      }
      static Clamp(YY, rY, DY) {
        const FY = (0, OY.Clamp)(YY.x, rY.x, DY.x),
          AY = (0, OY.Clamp)(YY.y, rY.y, DY.y);
        return new uY(FY, AY)
      }
      static Hermite(YY, rY, DY, FY, AY) {
        const IY = AY * AY,
          RY = AY * IY,
          OY = 2 * RY - 3 * IY + 1,
          gY = -2 * RY + 3 * IY,
          aY = RY - 2 * IY + AY,
          vY = RY - IY,
          sY = YY.x * OY + DY.x * gY + rY.x * aY + FY.x * vY,
          iY = YY.y * OY + DY.y * gY + rY.y * aY + FY.y * vY;
        return new uY(sY, iY)
      }
      static Hermite1stDerivative(YY, rY, DY, FY, AY) {
        return this.Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, new uY)
      }
      static Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY) {
        const RY = AY * AY;
        return IY.x = 6 * (RY - AY) * YY.x + (3 * RY - 4 * AY + 1) * rY.x + 6 * (-RY + AY) * DY.x + (3 * RY - 2 * AY) * FY.x, IY.y = 6 * (RY - AY) * YY.y + (3 * RY - 4 * AY + 1) * rY.y + 6 * (-RY + AY) * DY.y + (3 * RY - 2 * AY) * FY.y, IY
      }
      static Lerp(YY, rY, DY) {
        return uY.LerpToRef(YY, rY, DY, new uY)
      }
      static LerpToRef(YY, rY, DY, FY) {
        return FY.x = YY.x + (rY.x - YY.x) * DY, FY.y = YY.y + (rY.y - YY.y) * DY, FY
      }
      static Dot(YY, rY) {
        return YY.x * rY.x + YY.y * rY.y
      }
      static Normalize(YY) {
        return uY.NormalizeToRef(YY, new uY)
      }
      static NormalizeToRef(YY, rY) {
        return YY.normalizeToRef(rY), rY
      }
      static Minimize(YY, rY) {
        const DY = YY.x < rY.x ? YY.x : rY.x,
          FY = YY.y < rY.y ? YY.y : rY.y;
        return new uY(DY, FY)
      }
      static Maximize(YY, rY) {
        const DY = YY.x > rY.x ? YY.x : rY.x,
          FY = YY.y > rY.y ? YY.y : rY.y;
        return new uY(DY, FY)
      }
      static Transform(YY, rY) {
        return uY.TransformToRef(YY, rY, new uY)
      }
      static TransformToRef(YY, rY, DY) {
        const FY = rY.m,
          AY = YY.x * FY[0] + YY.y * FY[4] + FY[12],
          IY = YY.x * FY[1] + YY.y * FY[5] + FY[13];
        return DY.x = AY, DY.y = IY, DY
      }
      static PointInTriangle(YY, rY, DY, FY) {
        const AY = .5 * (-DY.y * FY.x + rY.y * (-DY.x + FY.x) + rY.x * (DY.y - FY.y) + DY.x * FY.y),
          IY = AY < 0 ? -1 : 1,
          RY = (rY.y * FY.x - rY.x * FY.y + (FY.y - rY.y) * YY.x + (rY.x - FY.x) * YY.y) * IY,
          OY = (rY.x * DY.y - rY.y * DY.x + (rY.y - DY.y) * YY.x + (DY.x - rY.x) * YY.y) * IY;
        return RY > 0 && OY > 0 && RY + OY < 2 * AY * IY
      }
      static Distance(YY, rY) {
        return Math.sqrt(uY.DistanceSquared(YY, rY))
      }
      static DistanceSquared(YY, rY) {
        const DY = YY.x - rY.x,
          FY = YY.y - rY.y;
        return DY * DY + FY * FY
      }
      static Center(YY, rY) {
        return uY.CenterToRef(YY, rY, new uY)
      }
      static CenterToRef(YY, rY, DY) {
        return DY.p_((YY.x + rY.x) / 2, (YY.y + rY.y) / 2)
      }
      static DistanceOfPointFromSegment(YY, rY, DY) {
        const FY = uY.DistanceSquared(rY, DY);
        if (0 === FY) return uY.Distance(YY, rY);
        const AY = DY.subtract(rY),
          IY = Math.max(0, Math.min(1, uY.Dot(YY.subtract(rY), AY) / FY)),
          RY = rY.add(AY.multiplyByFloats(IY, IY));
        return uY.Distance(YY, RY)
      }
    }
    uY._V8PerformanceHack = new uY(.5, .5), uY._ZeroReadOnly = uY.Zero();
    class sY {
      get x() {
        return this._x
      }
      set x(YY) {
        this._x = YY, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(YY) {
        this._y = YY, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(YY) {
        this._z = YY, this._isDirty = !0
      }
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = YY, this._y = rY, this._z = DY
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "xy"
      }
      getHashCode() {
        let YY = vY(this._x);
        return YY = 397 * YY ^ vY(this._y), YY = 397 * YY ^ vY(this._z), YY
      }
      VDY() {
        return [this._x, this._y, this._z]
      }
      toArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YY[rY] = this._x, YY[rY + 1] = this._y, YY[rY + 2] = this._z, this
      }
      grY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return sY.FromArrayToRef(YY, rY, this), this
      }
      toQuaternion() {
        return yY.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(YY) {
        return this._x += YY._x, this._y += YY._y, this._z += YY._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(YY, rY, DY) {
        return this._x += YY, this._y += rY, this._z += DY, this._isDirty = !0, this
      }
      add(YY) {
        return new sY(this._x + YY._x, this._y + YY._y, this._z + YY._z)
      }
      addToRef(YY, rY) {
        return rY._x = this._x + YY._x, rY._y = this._y + YY._y, rY._z = this._z + YY._z, rY._isDirty = !0, rY
      }
      dDY(YY) {
        return this._x -= YY._x, this._y -= YY._y, this._z -= YY._z, this._isDirty = !0, this
      }
      subtract(YY) {
        return new sY(this._x - YY._x, this._y - YY._y, this._z - YY._z)
      }
      subtractToRef(YY, rY) {
        return this.subtractFromFloatsToRef(YY._x, YY._y, YY._z, rY)
      }
      subtractFromFloats(YY, rY, DY) {
        return new sY(this._x - YY, this._y - rY, this._z - DY)
      }
      subtractFromFloatsToRef(YY, rY, DY, FY) {
        return FY._x = this._x - YY, FY._y = this._y - rY, FY._z = this._z - DY, FY._isDirty = !0, FY
      }
      GA() {
        return new sY(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(YY) {
        return YY._x = -1 * this._x, YY._y = -1 * this._y, YY._z = -1 * this._z, YY._isDirty = !0, YY
      }
      scaleInPlace(YY) {
        return this._x *= YY, this._y *= YY, this._z *= YY, this._isDirty = !0, this
      }
      scale(YY) {
        return new sY(this._x * YY, this._y * YY, this._z * YY)
      }
      scaleToRef(YY, rY) {
        return rY._x = this._x * YY, rY._y = this._y * YY, rY._z = this._z * YY, rY._isDirty = !0, rY
      }
      getNormalToRef(YY) {
        const rY = this.length();
        let DY = Math.acos(this._y / rY);
        const FY = Math.atan2(this._z, this._x);
        DY > Math.PI / 2 ? DY -= Math.PI / 2 : DY += Math.PI / 2;
        const AY = rY * Math.sin(DY) * Math.cos(FY),
          IY = rY * Math.cos(DY),
          RY = rY * Math.sin(DY) * Math.sin(FY);
        return YY.set(AY, IY, RY), YY
      }
      applyRotationQuaternionToRef(YY, rY) {
        const DY = this._x,
          FY = this._y,
          AY = this._z,
          IY = YY._x,
          RY = YY._y,
          OY = YY._z,
          gY = YY._w,
          aY = 2 * (RY * AY - OY * FY),
          vY = 2 * (OY * DY - IY * AY),
          uY = 2 * (IY * FY - RY * DY);
        return rY._x = DY + gY * aY + RY * uY - OY * vY, rY._y = FY + gY * vY + OY * aY - IY * uY, rY._z = AY + gY * uY + IY * vY - RY * aY, rY._isDirty = !0, rY
      }
      applyRotationQuaternionInPlace(YY) {
        return this.applyRotationQuaternionToRef(YY, this)
      }
      applyRotationQuaternion(YY) {
        return this.applyRotationQuaternionToRef(YY, new sY)
      }
      scaleAndAddToRef(YY, rY) {
        return rY._x += this._x * YY, rY._y += this._y * YY, rY._z += this._z * YY, rY._isDirty = !0, rY
      }
      projectOnPlane(YY, rY) {
        return this.projectOnPlaneToRef(YY, rY, new sY)
      }
      projectOnPlaneToRef(YY, rY, DY) {
        const FY = YY.normal,
          AY = YY.d,
          IY = oY.xy[0];
        this.subtractToRef(rY, IY), IY.normalize();
        const RY = sY.Dot(IY, FY);
        if (Math.abs(RY) < 1e-10) DY.o3(1 / 0);
        else {
          const YY = -(sY.Dot(rY, FY) + AY) / RY,
            OY = IY.scaleInPlace(YY);
          rY.addToRef(OY, DY)
        }
        return DY
      }
      equals(YY) {
        return YY && this._x === YY._x && this._y === YY._y && this._z === YY._z
      }
      equalsWithEpsilon(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FY.c;
        return YY && (0, OY.WithinEpsilon)(this._x, YY._x, rY) && (0, OY.WithinEpsilon)(this._y, YY._y, rY) && (0, OY.WithinEpsilon)(this._z, YY._z, rY)
      }
      kIY(YY, rY, DY) {
        return this._x === YY && this._y === rY && this._z === DY
      }
      multiplyInPlace(YY) {
        return this._x *= YY._x, this._y *= YY._y, this._z *= YY._z, this._isDirty = !0, this
      }
      multiply(YY) {
        return this.multiplyByFloats(YY._x, YY._y, YY._z)
      }
      multiplyToRef(YY, rY) {
        return rY._x = this._x * YY._x, rY._y = this._y * YY._y, rY._z = this._z * YY._z, rY._isDirty = !0, rY
      }
      multiplyByFloats(YY, rY, DY) {
        return new sY(this._x * YY, this._y * rY, this._z * DY)
      }
      divide(YY) {
        return new sY(this._x / YY._x, this._y / YY._y, this._z / YY._z)
      }
      divideToRef(YY, rY) {
        return rY._x = this._x / YY._x, rY._y = this._y / YY._y, rY._z = this._z / YY._z, rY._isDirty = !0, rY
      }
      divideInPlace(YY) {
        return this._x = this._x / YY._x, this._y = this._y / YY._y, this._z = this._z / YY._z, this._isDirty = !0, this
      }
      minimizeInPlace(YY) {
        return this.minimizeInPlaceFromFloats(YY._x, YY._y, YY._z)
      }
      maximizeInPlace(YY) {
        return this.maximizeInPlaceFromFloats(YY._x, YY._y, YY._z)
      }
      minimizeInPlaceFromFloats(YY, rY, DY) {
        return YY < this._x && (this.x = YY), rY < this._y && (this.y = rY), DY < this._z && (this.z = DY), this
      }
      maximizeInPlaceFromFloats(YY, rY, DY) {
        return YY > this._x && (this.x = YY), rY > this._y && (this.y = rY), DY > this._z && (this.z = DY), this
      }
      isNonUniformWithinEpsilon(YY) {
        const rY = Math.abs(this._x),
          DY = Math.abs(this._y);
        if (!(0, OY.WithinEpsilon)(rY, DY, YY)) return !0;
        const FY = Math.abs(this._z);
        return !(0, OY.WithinEpsilon)(rY, FY, YY) || !(0, OY.WithinEpsilon)(DY, FY, YY)
      }
      get isNonUniform() {
        const YY = Math.abs(this._x);
        if (YY !== Math.abs(this._y)) return !0;
        return YY !== Math.abs(this._z)
      }
      floorToRef(YY) {
        return YY._x = Math.floor(this._x), YY._y = Math.floor(this._y), YY._z = Math.floor(this._z), YY._isDirty = !0, YY
      }
      floor() {
        return new sY(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(YY) {
        return YY._x = this._x - Math.floor(this._x), YY._y = this._y - Math.floor(this._y), YY._z = this._z - Math.floor(this._z), YY._isDirty = !0, YY
      }
      fract() {
        return new sY(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(YY) {
        if ("xyz" === (YY = YY.toLowerCase())) return this;
        const rY = oY.xy[0].brY(this);
        return this.x = rY[YY[0]], this.y = rY[YY[1]], this.z = rY[YY[2]], this
      }
      rotateByQuaternionToRef(YY, rY) {
        return YY.toRotationMatrix(oY.Matrix[0]), sY.TransformCoordinatesToRef(this, oY.Matrix[0], rY), rY
      }
      rotateByQuaternionAroundPointToRef(YY, rY, DY) {
        return this.subtractToRef(rY, oY.xy[0]), oY.xy[0].rotateByQuaternionToRef(YY, oY.xy[0]), rY.addToRef(oY.xy[0], DY), DY
      }
      cross(YY) {
        return sY.CrossToRef(this, YY, new sY)
      }
      normalizeFromLength(YY) {
        return 0 === YY || 1 === YY ? this : this.scaleInPlace(1 / YY)
      }
      normalizeToNew() {
        return this.normalizeToRef(new sY)
      }
      normalizeToRef(YY) {
        const rY = this.length();
        return 0 === rY || 1 === rY ? (YY._x = this._x, YY._y = this._y, YY._z = this._z, YY._isDirty = !0, YY) : this.scaleToRef(1 / rY, YY)
      }
      clone() {
        return new sY(this._x, this._y, this._z)
      }
      brY(YY) {
        return this.p_(YY._x, YY._y, YY._z)
      }
      p_(YY, rY, DY) {
        return this._x = YY, this._y = rY, this._z = DY, this._isDirty = !0, this
      }
      set(YY, rY, DY) {
        return this.p_(YY, rY, DY)
      }
      o3(YY) {
        return this._x = this._y = this._z = YY, this._isDirty = !0, this
      }
      static GetClipFactor(YY, rY, DY, FY) {
        const AY = sY.Dot(YY, DY);
        return (AY - FY) / (AY - sY.Dot(rY, DY))
      }
      static GetAngleBetweenVectors(YY, rY, DY) {
        const FY = YY.normalizeToRef(oY.xy[1]),
          AY = rY.normalizeToRef(oY.xy[2]);
        let IY = sY.Dot(FY, AY);
        IY = (0, OY.Clamp)(IY, -1, 1);
        const RY = Math.acos(IY),
          gY = oY.xy[3];
        return sY.CrossToRef(FY, AY, gY), sY.Dot(gY, DY) > 0 ? isNaN(RY) ? 0 : RY : isNaN(RY) ? -Math.PI : -Math.acos(IY)
      }
      static GetAngleBetweenVectorsOnPlane(YY, rY, DY) {
        oY.xy[0].brY(YY);
        const FY = oY.xy[0];
        oY.xy[1].brY(rY);
        const AY = oY.xy[1];
        oY.xy[2].brY(DY);
        const IY = oY.xy[2],
          RY = oY.xy[3],
          gY = oY.xy[4];
        FY.normalize(), AY.normalize(), IY.normalize(), sY.CrossToRef(IY, FY, RY), sY.CrossToRef(RY, IY, gY);
        const aY = Math.atan2(sY.Dot(AY, RY), sY.Dot(AY, gY));
        return (0, OY.NormalizeRadians)(aY)
      }
      static PitchYawRollToMoveBetweenPointsToRef(YY, rY, DY) {
        const FY = WY.xy[0];
        return rY.subtractToRef(YY, FY), DY._y = Math.atan2(FY.x, FY.z) || 0, DY._x = Math.atan2(Math.sqrt(FY.x ** 2 + FY.z ** 2), FY.y) || 0, DY._z = 0, DY._isDirty = !0, DY
      }
      static PitchYawRollToMoveBetweenPoints(YY, rY) {
        const DY = sY.Zero();
        return sY.PitchYawRollToMoveBetweenPointsToRef(YY, rY, DY)
      }
      static SlerpToRef(YY, rY, DY, AY) {
        DY = (0, OY.Clamp)(DY, 0, 1);
        const IY = oY.xy[0],
          RY = oY.xy[1];
        IY.brY(YY);
        const gY = IY.length();
        IY.normalizeFromLength(gY), RY.brY(rY);
        const aY = RY.length();
        RY.normalizeFromLength(aY);
        const vY = sY.Dot(IY, RY);
        let uY, iY;
        if (vY < 1 - FY.c) {
          const YY = Math.acos(vY),
            rY = 1 / Math.sin(YY);
          uY = Math.sin((1 - DY) * YY) * rY, iY = Math.sin(DY * YY) * rY
        } else uY = 1 - DY, iY = DY;
        return IY.scaleInPlace(uY), RY.scaleInPlace(iY), AY.brY(IY).addInPlace(RY), AY.scaleInPlace((0, OY.Lerp)(gY, aY, DY)), AY
      }
      static SmoothToRef(YY, rY, DY, FY, AY) {
        return sY.SlerpToRef(YY, rY, 0 === FY ? 1 : DY / FY, AY), AY
      }
      static FromArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new sY(YY[rY], YY[rY + 1], YY[rY + 2])
      }
      static FromFloatArray(YY, rY) {
        return sY.FromArray(YY, rY)
      }
      static FromArrayToRef(YY, rY, DY) {
        return DY._x = YY[rY], DY._y = YY[rY + 1], DY._z = YY[rY + 2], DY._isDirty = !0, DY
      }
      static FromFloatArrayToRef(YY, rY, DY) {
        return sY.FromArrayToRef(YY, rY, DY)
      }
      static FromFloatsToRef(YY, rY, DY, FY) {
        return FY.p_(YY, rY, DY), FY
      }
      static Zero() {
        return new sY(0, 0, 0)
      }
      static One() {
        return new sY(1, 1, 1)
      }
      static Up() {
        return new sY(0, 1, 0)
      }
      static get UpReadOnly() {
        return sY._UpReadOnly
      }
      static get DownReadOnly() {
        return sY._DownReadOnly
      }
      static get RightReadOnly() {
        return sY._RightReadOnly
      }
      static get LeftReadOnly() {
        return sY._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return sY._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return sY._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return sY._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return sY._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return sY._ZeroReadOnly
      }
      static get OneReadOnly() {
        return sY._OneReadOnly
      }
      static Down() {
        return new sY(0, -1, 0)
      }
      static Forward() {
        return new sY(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new sY(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new sY(1, 0, 0)
      }
      static Left() {
        return new sY(-1, 0, 0)
      }
      static Random() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new sY((0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY))
      }
      static RandomToRef() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).p_((0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY))
      }
      static TransformCoordinates(YY, rY) {
        const DY = sY.Zero();
        return sY.TransformCoordinatesToRef(YY, rY, DY), DY
      }
      static TransformCoordinatesToRef(YY, rY, DY) {
        return sY.TransformCoordinatesFromFloatsToRef(YY._x, YY._y, YY._z, rY, DY), DY
      }
      static TransformCoordinatesFromFloatsToRef(YY, rY, DY, FY, AY) {
        const IY = FY.m,
          RY = YY * IY[0] + rY * IY[4] + DY * IY[8] + IY[12],
          OY = YY * IY[1] + rY * IY[5] + DY * IY[9] + IY[13],
          gY = YY * IY[2] + rY * IY[6] + DY * IY[10] + IY[14],
          aY = 1 / (YY * IY[3] + rY * IY[7] + DY * IY[11] + IY[15]);
        return AY._x = RY * aY, AY._y = OY * aY, AY._z = gY * aY, AY._isDirty = !0, AY
      }
      static TransformNormal(YY, rY) {
        const DY = sY.Zero();
        return sY.TransformNormalToRef(YY, rY, DY), DY
      }
      static TransformNormalToRef(YY, rY, DY) {
        return this.TransformNormalFromFloatsToRef(YY._x, YY._y, YY._z, rY, DY), DY
      }
      static TransformNormalFromFloatsToRef(YY, rY, DY, FY, AY) {
        const IY = FY.m;
        return AY._x = YY * IY[0] + rY * IY[4] + DY * IY[8], AY._y = YY * IY[1] + rY * IY[5] + DY * IY[9], AY._z = YY * IY[2] + rY * IY[6] + DY * IY[10], AY._isDirty = !0, AY
      }
      static CatmullRom(YY, rY, DY, FY, AY) {
        const IY = AY * AY,
          RY = AY * IY,
          OY = .5 * (2 * rY._x + (-YY._x + DY._x) * AY + (2 * YY._x - 5 * rY._x + 4 * DY._x - FY._x) * IY + (-YY._x + 3 * rY._x - 3 * DY._x + FY._x) * RY),
          gY = .5 * (2 * rY._y + (-YY._y + DY._y) * AY + (2 * YY._y - 5 * rY._y + 4 * DY._y - FY._y) * IY + (-YY._y + 3 * rY._y - 3 * DY._y + FY._y) * RY),
          aY = .5 * (2 * rY._z + (-YY._z + DY._z) * AY + (2 * YY._z - 5 * rY._z + 4 * DY._z - FY._z) * IY + (-YY._z + 3 * rY._z - 3 * DY._z + FY._z) * RY);
        return new sY(OY, gY, aY)
      }
      static Clamp(YY, rY, DY) {
        const FY = new sY;
        return sY.ClampToRef(YY, rY, DY, FY), FY
      }
      static ClampToRef(YY, rY, DY, FY) {
        let AY = YY._x;
        AY = AY > DY._x ? DY._x : AY, AY = AY < rY._x ? rY._x : AY;
        let IY = YY._y;
        IY = IY > DY._y ? DY._y : IY, IY = IY < rY._y ? rY._y : IY;
        let RY = YY._z;
        return RY = RY > DY._z ? DY._z : RY, RY = RY < rY._z ? rY._z : RY, FY.p_(AY, IY, RY), FY
      }
      static CheckExtends(YY, rY, DY) {
        rY.minimizeInPlace(YY), DY.maximizeInPlace(YY)
      }
      static Hermite(YY, rY, DY, FY, AY) {
        const IY = AY * AY,
          RY = AY * IY,
          OY = 2 * RY - 3 * IY + 1,
          gY = -2 * RY + 3 * IY,
          aY = RY - 2 * IY + AY,
          vY = RY - IY,
          uY = YY._x * OY + DY._x * gY + rY._x * aY + FY._x * vY,
          iY = YY._y * OY + DY._y * gY + rY._y * aY + FY._y * vY,
          yY = YY._z * OY + DY._z * gY + rY._z * aY + FY._z * vY;
        return new sY(uY, iY, yY)
      }
      static Hermite1stDerivative(YY, rY, DY, FY, AY) {
        const IY = new sY;
        return this.Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY), IY
      }
      static Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY) {
        const RY = AY * AY;
        return IY._x = 6 * (RY - AY) * YY._x + (3 * RY - 4 * AY + 1) * rY._x + 6 * (-RY + AY) * DY._x + (3 * RY - 2 * AY) * FY._x, IY._y = 6 * (RY - AY) * YY._y + (3 * RY - 4 * AY + 1) * rY._y + 6 * (-RY + AY) * DY._y + (3 * RY - 2 * AY) * FY._y, IY._z = 6 * (RY - AY) * YY._z + (3 * RY - 4 * AY + 1) * rY._z + 6 * (-RY + AY) * DY._z + (3 * RY - 2 * AY) * FY._z, IY._isDirty = !0, IY
      }
      static Lerp(YY, rY, DY) {
        const FY = new sY(0, 0, 0);
        return sY.LerpToRef(YY, rY, DY, FY), FY
      }
      static LerpToRef(YY, rY, DY, FY) {
        return FY._x = YY._x + (rY._x - YY._x) * DY, FY._y = YY._y + (rY._y - YY._y) * DY, FY._z = YY._z + (rY._z - YY._z) * DY, FY._isDirty = !0, FY
      }
      static Dot(YY, rY) {
        return YY._x * rY._x + YY._y * rY._y + YY._z * rY._z
      }
      dot(YY) {
        return this._x * YY._x + this._y * YY._y + this._z * YY._z
      }
      static Cross(YY, rY) {
        const DY = new sY;
        return sY.CrossToRef(YY, rY, DY), DY
      }
      static CrossToRef(YY, rY, DY) {
        const FY = YY._y * rY._z - YY._z * rY._y,
          AY = YY._z * rY._x - YY._x * rY._z,
          IY = YY._x * rY._y - YY._y * rY._x;
        return DY.p_(FY, AY, IY), DY
      }
      static Normalize(YY) {
        const rY = sY.Zero();
        return sY.NormalizeToRef(YY, rY), rY
      }
      static NormalizeToRef(YY, rY) {
        return YY.normalizeToRef(rY), rY
      }
      static Project(YY, rY, DY, FY) {
        const AY = new sY;
        return sY.ProjectToRef(YY, rY, DY, FY, AY), AY
      }
      static ProjectToRef(YY, rY, DY, FY, AY) {
        const IY = FY.width,
          OY = FY.height,
          gY = FY.x,
          aY = FY.y,
          vY = oY.Matrix[1],
          uY = RY.d.LastCreatedEngine?.isNDCHalfZRange,
          iY = uY ? 1 : .5,
          yY = uY ? 0 : .5;
        QY.FromValuesToRef(IY / 2, 0, 0, 0, 0, -OY / 2, 0, 0, 0, 0, iY, 0, gY + IY / 2, OY / 2 + aY, yY, 1, vY);
        const WY = oY.Matrix[0];
        return rY.multiplyToRef(DY, WY), WY.multiplyToRef(vY, WY), sY.TransformCoordinatesToRef(YY, WY, AY), AY
      }
      static Reflect(YY, rY) {
        return this.ReflectToRef(YY, rY, new sY)
      }
      static ReflectToRef(YY, rY, DY) {
        const FY = WY.xy[0];
        return FY.brY(rY).scaleInPlace(2 * sY.Dot(YY, rY)), DY.brY(YY).dDY(FY)
      }
      static UnprojectFromTransform(YY, rY, DY, FY, AY) {
        return this.Unproject(YY, rY, DY, FY, AY, QY.IdentityReadOnly)
      }
      static Unproject(YY, rY, DY, FY, AY, IY) {
        const RY = new sY;
        return sY.UnprojectToRef(YY, rY, DY, FY, AY, IY, RY), RY
      }
      static UnprojectToRef(YY, rY, DY, FY, AY, IY, RY) {
        return sY.UnprojectFloatsToRef(YY._x, YY._y, YY._z, rY, DY, FY, AY, IY, RY), RY
      }
      static UnprojectFloatsToRef(YY, rY, DY, FY, AY, IY, OY, gY, aY) {
        const vY = oY.Matrix[0];
        IY.multiplyToRef(OY, vY), vY.multiplyToRef(gY, vY), vY.invert();
        const uY = oY.xy[0];
        return uY.x = YY / FY * 2 - 1, uY.y = -(rY / AY * 2 - 1), RY.d.LastCreatedEngine?.isNDCHalfZRange ? uY.z = DY : uY.z = 2 * DY - 1, sY.TransformCoordinatesToRef(uY, vY, aY), aY
      }
      static Minimize(YY, rY) {
        const DY = new sY;
        return DY.brY(YY), DY.minimizeInPlace(rY), DY
      }
      static Maximize(YY, rY) {
        const DY = new sY;
        return DY.brY(YY), DY.maximizeInPlace(rY), DY
      }
      static Distance(YY, rY) {
        return Math.sqrt(sY.DistanceSquared(YY, rY))
      }
      static DistanceSquared(YY, rY) {
        const DY = YY._x - rY._x,
          FY = YY._y - rY._y,
          AY = YY._z - rY._z;
        return DY * DY + FY * FY + AY * AY
      }
      static ProjectOnTriangleToRef(YY, rY, DY, AY, IY) {
        const RY = oY.xy[0],
          gY = oY.xy[1],
          aY = oY.xy[2],
          vY = oY.xy[3],
          uY = oY.xy[4];
        DY.subtractToRef(rY, RY), AY.subtractToRef(rY, gY), AY.subtractToRef(DY, aY);
        const iY = RY.length(),
          yY = gY.length(),
          QY = aY.length();
        if (iY < FY.c || yY < FY.c || QY < FY.c) return IY.brY(rY), sY.Distance(YY, rY);
        YY.subtractToRef(rY, uY), sY.CrossToRef(RY, gY, vY);
        const WY = vY.length();
        if (WY < FY.c) return IY.brY(rY), sY.Distance(YY, rY);
        vY.normalizeFromLength(WY);
        let EY = uY.length();
        if (EY < FY.c) return IY.brY(rY), 0;
        uY.normalizeFromLength(EY);
        const mY = sY.Dot(vY, uY),
          VY = oY.xy[5],
          SY = oY.xy[6];
        VY.brY(vY).scaleInPlace(-EY * mY), SY.brY(YY).addInPlace(VY);
        const lY = oY.xy[4],
          TY = oY.xy[5],
          eY = oY.xy[7],
          NY = oY.xy[8];
        lY.brY(RY).scaleInPlace(1 / iY), NY.brY(gY).scaleInPlace(1 / yY), lY.addInPlace(NY).scaleInPlace(-1), TY.brY(RY).scaleInPlace(-1 / iY), NY.brY(aY).scaleInPlace(1 / QY), TY.addInPlace(NY).scaleInPlace(-1), eY.brY(aY).scaleInPlace(-1 / QY), NY.brY(gY).scaleInPlace(-1 / yY), eY.addInPlace(NY).scaleInPlace(-1);
        const BY = oY.xy[9];
        let cY;
        BY.brY(SY).dDY(rY), sY.CrossToRef(lY, BY, NY), cY = sY.Dot(NY, vY);
        const KY = cY;
        BY.brY(SY).dDY(DY), sY.CrossToRef(TY, BY, NY), cY = sY.Dot(NY, vY);
        const HY = cY;
        BY.brY(SY).dDY(AY), sY.CrossToRef(eY, BY, NY), cY = sY.Dot(NY, vY);
        const zY = cY,
          ZY = oY.xy[10];
        let CY, fY;
        KY > 0 && HY < 0 ? (ZY.brY(RY), CY = rY, fY = DY) : HY > 0 && zY < 0 ? (ZY.brY(aY), CY = DY, fY = AY) : (ZY.brY(gY).scaleInPlace(-1), CY = AY, fY = rY);
        const jY = oY.xy[9],
          hY = oY.xy[4];
        CY.subtractToRef(SY, NY), fY.subtractToRef(SY, jY), sY.CrossToRef(NY, jY, hY);
        if (!(sY.Dot(hY, vY) < 0)) return IY.brY(SY), Math.abs(EY * mY);
        const dY = oY.xy[5];
        sY.CrossToRef(ZY, hY, dY), dY.normalize();
        const JY = oY.xy[9];
        JY.brY(CY).dDY(SY);
        const MY = JY.length();
        if (MY < FY.c) return IY.brY(CY), sY.Distance(YY, CY);
        JY.normalizeFromLength(MY);
        const wY = sY.Dot(dY, JY),
          bY = oY.xy[7];
        bY.brY(SY).addInPlace(dY.scaleInPlace(MY * wY)), NY.brY(bY).dDY(CY), EY = ZY.length(), ZY.normalizeFromLength(EY);
        let XY = sY.Dot(NY, ZY) / Math.max(EY, FY.c);
        return XY = (0, OY.Clamp)(XY, 0, 1), bY.brY(CY).addInPlace(ZY.scaleInPlace(XY * EY)), IY.brY(bY), sY.Distance(YY, bY)
      }
      static Center(YY, rY) {
        return sY.CenterToRef(YY, rY, sY.Zero())
      }
      static CenterToRef(YY, rY, DY) {
        return DY.p_((YY._x + rY._x) / 2, (YY._y + rY._y) / 2, (YY._z + rY._z) / 2)
      }
      static RotationFromAxis(YY, rY, DY) {
        const FY = new sY;
        return sY.RotationFromAxisToRef(YY, rY, DY, FY), FY
      }
      static RotationFromAxisToRef(YY, rY, DY, FY) {
        const AY = oY.Quaternion[0];
        return yY.RotationQuaternionFromAxisToRef(YY, rY, DY, AY), AY.toEulerAnglesToRef(FY), FY
      }
    }
    sY._V8PerformanceHack = new sY(.5, .5, .5), sY._UpReadOnly = sY.Up(), sY._DownReadOnly = sY.Down(), sY._LeftHandedForwardReadOnly = sY.Forward(!1), sY._RightHandedForwardReadOnly = sY.Forward(!0), sY._LeftHandedBackwardReadOnly = sY.Backward(!1), sY._RightHandedBackwardReadOnly = sY.Backward(!0), sY._RightReadOnly = sY.Right(), sY._LeftReadOnly = sY.Left(), sY._ZeroReadOnly = sY.Zero(), sY._OneReadOnly = sY.One();
    class iY {
      get x() {
        return this._x
      }
      set x(YY) {
        this._x = YY, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(YY) {
        this._y = YY, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(YY) {
        this._z = YY, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(YY) {
        this._w = YY, this._isDirty = !0
      }
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = YY, this._y = rY, this._z = DY, this._w = FY
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let YY = vY(this._x);
        return YY = 397 * YY ^ vY(this._y), YY = 397 * YY ^ vY(this._z), YY = 397 * YY ^ vY(this._w), YY
      }
      VDY() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(YY, rY) {
        return void 0 === rY && (rY = 0), YY[rY] = this._x, YY[rY + 1] = this._y, YY[rY + 2] = this._z, YY[rY + 3] = this._w, this
      }
      grY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return iY.FromArrayToRef(YY, rY, this), this
      }
      addInPlace(YY) {
        return this.x += YY._x, this.y += YY._y, this.z += YY._z, this.w += YY._w, this
      }
      addInPlaceFromFloats(YY, rY, DY, FY) {
        return this.x += YY, this.y += rY, this.z += DY, this.w += FY, this
      }
      add(YY) {
        return new iY(this._x + YY.x, this._y + YY.y, this._z + YY.z, this._w + YY.w)
      }
      addToRef(YY, rY) {
        return rY.x = this._x + YY.x, rY.y = this._y + YY.y, rY.z = this._z + YY.z, rY.w = this._w + YY.w, rY
      }
      dDY(YY) {
        return this.x -= YY.x, this.y -= YY.y, this.z -= YY.z, this.w -= YY.w, this
      }
      subtract(YY) {
        return new iY(this._x - YY.x, this._y - YY.y, this._z - YY.z, this._w - YY.w)
      }
      subtractToRef(YY, rY) {
        return rY.x = this._x - YY.x, rY.y = this._y - YY.y, rY.z = this._z - YY.z, rY.w = this._w - YY.w, rY
      }
      subtractFromFloats(YY, rY, DY, FY) {
        return new iY(this._x - YY, this._y - rY, this._z - DY, this._w - FY)
      }
      subtractFromFloatsToRef(YY, rY, DY, FY, AY) {
        return AY.x = this._x - YY, AY.y = this._y - rY, AY.z = this._z - DY, AY.w = this._w - FY, AY
      }
      GA() {
        return new iY(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(YY) {
        return YY.x = -this._x, YY.y = -this._y, YY.z = -this._z, YY.w = -this._w, YY
      }
      scaleInPlace(YY) {
        return this.x *= YY, this.y *= YY, this.z *= YY, this.w *= YY, this
      }
      scale(YY) {
        return new iY(this._x * YY, this._y * YY, this._z * YY, this._w * YY)
      }
      scaleToRef(YY, rY) {
        return rY.x = this._x * YY, rY.y = this._y * YY, rY.z = this._z * YY, rY.w = this._w * YY, rY
      }
      scaleAndAddToRef(YY, rY) {
        return rY.x += this._x * YY, rY.y += this._y * YY, rY.z += this._z * YY, rY.w += this._w * YY, rY
      }
      equals(YY) {
        return YY && this._x === YY.x && this._y === YY.y && this._z === YY.z && this._w === YY.w
      }
      equalsWithEpsilon(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FY.c;
        return YY && (0, OY.WithinEpsilon)(this._x, YY.x, rY) && (0, OY.WithinEpsilon)(this._y, YY.y, rY) && (0, OY.WithinEpsilon)(this._z, YY.z, rY) && (0, OY.WithinEpsilon)(this._w, YY.w, rY)
      }
      kIY(YY, rY, DY, FY) {
        return this._x === YY && this._y === rY && this._z === DY && this._w === FY
      }
      multiplyInPlace(YY) {
        return this.x *= YY.x, this.y *= YY.y, this.z *= YY.z, this.w *= YY.w, this
      }
      multiply(YY) {
        return new iY(this._x * YY.x, this._y * YY.y, this._z * YY.z, this._w * YY.w)
      }
      multiplyToRef(YY, rY) {
        return rY.x = this._x * YY.x, rY.y = this._y * YY.y, rY.z = this._z * YY.z, rY.w = this._w * YY.w, rY
      }
      multiplyByFloats(YY, rY, DY, FY) {
        return new iY(this._x * YY, this._y * rY, this._z * DY, this._w * FY)
      }
      divide(YY) {
        return new iY(this._x / YY.x, this._y / YY.y, this._z / YY.z, this._w / YY.w)
      }
      divideToRef(YY, rY) {
        return rY.x = this._x / YY.x, rY.y = this._y / YY.y, rY.z = this._z / YY.z, rY.w = this._w / YY.w, rY
      }
      divideInPlace(YY) {
        return this.divideToRef(YY, this)
      }
      minimizeInPlace(YY) {
        return YY.x < this._x && (this.x = YY.x), YY.y < this._y && (this.y = YY.y), YY.z < this._z && (this.z = YY.z), YY.w < this._w && (this.w = YY.w), this
      }
      maximizeInPlace(YY) {
        return YY.x > this._x && (this.x = YY.x), YY.y > this._y && (this.y = YY.y), YY.z > this._z && (this.z = YY.z), YY.w > this._w && (this.w = YY.w), this
      }
      minimizeInPlaceFromFloats(YY, rY, DY, FY) {
        return this.x = Math.min(YY, this._x), this.y = Math.min(rY, this._y), this.z = Math.min(DY, this._z), this.w = Math.min(FY, this._w), this
      }
      maximizeInPlaceFromFloats(YY, rY, DY, FY) {
        return this.x = Math.max(YY, this._x), this.y = Math.max(rY, this._y), this.z = Math.max(DY, this._z), this.w = Math.max(FY, this._w), this
      }
      floorToRef(YY) {
        return YY.x = Math.floor(this._x), YY.y = Math.floor(this._y), YY.z = Math.floor(this._z), YY.w = Math.floor(this._w), YY
      }
      floor() {
        return new iY(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(YY) {
        return YY.x = this._x - Math.floor(this._x), YY.y = this._y - Math.floor(this._y), YY.z = this._z - Math.floor(this._z), YY.w = this._w - Math.floor(this._w), YY
      }
      fract() {
        return new iY(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(YY) {
        return 0 === YY || 1 === YY ? this : this.scaleInPlace(1 / YY)
      }
      normalizeToNew() {
        return this.normalizeToRef(new iY)
      }
      normalizeToRef(YY) {
        const rY = this.length();
        return 0 === rY || 1 === rY ? (YY.x = this._x, YY.y = this._y, YY.z = this._z, YY.w = this._w, YY) : this.scaleToRef(1 / rY, YY)
      }
      toVector3() {
        return new sY(this._x, this._y, this._z)
      }
      clone() {
        return new iY(this._x, this._y, this._z, this._w)
      }
      brY(YY) {
        return this.x = YY.x, this.y = YY.y, this.z = YY.z, this.w = YY.w, this
      }
      p_(YY, rY, DY, FY) {
        return this.x = YY, this.y = rY, this.z = DY, this.w = FY, this
      }
      set(YY, rY, DY, FY) {
        return this.p_(YY, rY, DY, FY)
      }
      o3(YY) {
        return this.x = this.y = this.z = this.w = YY, this
      }
      dot(YY) {
        return this._x * YY.x + this._y * YY.y + this._z * YY.z + this._w * YY.w
      }
      static FromArray(YY, rY) {
        return rY || (rY = 0), new iY(YY[rY], YY[rY + 1], YY[rY + 2], YY[rY + 3])
      }
      static FromArrayToRef(YY, rY, DY) {
        return DY.x = YY[rY], DY.y = YY[rY + 1], DY.z = YY[rY + 2], DY.w = YY[rY + 3], DY
      }
      static FromFloatArrayToRef(YY, rY, DY) {
        return iY.FromArrayToRef(YY, rY, DY), DY
      }
      static FromFloatsToRef(YY, rY, DY, FY, AY) {
        return AY.x = YY, AY.y = rY, AY.z = DY, AY.w = FY, AY
      }
      static Zero() {
        return new iY(0, 0, 0, 0)
      }
      static One() {
        return new iY(1, 1, 1, 1)
      }
      static Random() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new iY((0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY))
      }
      static RandomToRef() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        return DY.x = (0, OY.RandomRange)(YY, rY), DY.y = (0, OY.RandomRange)(YY, rY), DY.z = (0, OY.RandomRange)(YY, rY), DY.w = (0, OY.RandomRange)(YY, rY), DY
      }
      static Clamp(YY, rY, DY) {
        return iY.ClampToRef(YY, rY, DY, new iY)
      }
      static ClampToRef(YY, rY, DY, FY) {
        return FY.x = (0, OY.Clamp)(YY.x, rY.x, DY.x), FY.y = (0, OY.Clamp)(YY.y, rY.y, DY.y), FY.z = (0, OY.Clamp)(YY.z, rY.z, DY.z), FY.w = (0, OY.Clamp)(YY.w, rY.w, DY.w), FY
      }
      static CheckExtends(YY, rY, DY) {
        rY.minimizeInPlace(YY), DY.maximizeInPlace(YY)
      }
      static get ZeroReadOnly() {
        return iY._ZeroReadOnly
      }
      static Normalize(YY) {
        return iY.NormalizeToRef(YY, new iY)
      }
      static NormalizeToRef(YY, rY) {
        return YY.normalizeToRef(rY), rY
      }
      static Minimize(YY, rY) {
        const DY = new iY;
        return DY.brY(YY), DY.minimizeInPlace(rY), DY
      }
      static Maximize(YY, rY) {
        const DY = new iY;
        return DY.brY(YY), DY.maximizeInPlace(rY), DY
      }
      static Distance(YY, rY) {
        return Math.sqrt(iY.DistanceSquared(YY, rY))
      }
      static DistanceSquared(YY, rY) {
        const DY = YY.x - rY.x,
          FY = YY.y - rY.y,
          AY = YY.z - rY.z,
          IY = YY.w - rY.w;
        return DY * DY + FY * FY + AY * AY + IY * IY
      }
      static Center(YY, rY) {
        return iY.CenterToRef(YY, rY, new iY)
      }
      static CenterToRef(YY, rY, DY) {
        return DY.x = (YY.x + rY.x) / 2, DY.y = (YY.y + rY.y) / 2, DY.z = (YY.z + rY.z) / 2, DY.w = (YY.w + rY.w) / 2, DY
      }
      static TransformCoordinates(YY, rY) {
        return iY.TransformCoordinatesToRef(YY, rY, new iY)
      }
      static TransformCoordinatesToRef(YY, rY, DY) {
        return iY.TransformCoordinatesFromFloatsToRef(YY._x, YY._y, YY._z, rY, DY), DY
      }
      static TransformCoordinatesFromFloatsToRef(YY, rY, DY, FY, AY) {
        const IY = FY.m,
          RY = YY * IY[0] + rY * IY[4] + DY * IY[8] + IY[12],
          OY = YY * IY[1] + rY * IY[5] + DY * IY[9] + IY[13],
          gY = YY * IY[2] + rY * IY[6] + DY * IY[10] + IY[14],
          aY = YY * IY[3] + rY * IY[7] + DY * IY[11] + IY[15];
        return AY.x = RY, AY.y = OY, AY.z = gY, AY.w = aY, AY
      }
      static TransformNormal(YY, rY) {
        return iY.TransformNormalToRef(YY, rY, new iY)
      }
      static TransformNormalToRef(YY, rY, DY) {
        const FY = rY.m,
          AY = YY.x * FY[0] + YY.y * FY[4] + YY.z * FY[8],
          IY = YY.x * FY[1] + YY.y * FY[5] + YY.z * FY[9],
          RY = YY.x * FY[2] + YY.y * FY[6] + YY.z * FY[10];
        return DY.x = AY, DY.y = IY, DY.z = RY, DY.w = YY.w, DY
      }
      static TransformNormalFromFloatsToRef(YY, rY, DY, FY, AY, IY) {
        const RY = AY.m;
        return IY.x = YY * RY[0] + rY * RY[4] + DY * RY[8], IY.y = YY * RY[1] + rY * RY[5] + DY * RY[9], IY.z = YY * RY[2] + rY * RY[6] + DY * RY[10], IY.w = FY, IY
      }
      static FromVector3(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new iY(YY._x, YY._y, YY._z, rY)
      }
      static Dot(YY, rY) {
        return YY.x * rY.x + YY.y * rY.y + YY.z * rY.z + YY.w * rY.w
      }
    }
    iY._V8PerformanceHack = new iY(.5, .5, .5, .5), iY._ZeroReadOnly = iY.Zero();
    class yY {
      get x() {
        return this._x
      }
      set x(YY) {
        this._x = YY, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(YY) {
        this._y = YY, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(YY) {
        this._z = YY, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(YY) {
        this._w = YY, this._isDirty = !0
      }
      constructor() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = YY, this._y = rY, this._z = DY, this._w = FY
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let YY = vY(this._x);
        return YY = 397 * YY ^ vY(this._y), YY = 397 * YY ^ vY(this._z), YY = 397 * YY ^ vY(this._w), YY
      }
      VDY() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return YY[rY] = this._x, YY[rY + 1] = this._y, YY[rY + 2] = this._z, YY[rY + 3] = this._w, this
      }
      grY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yY.FromArrayToRef(YY, rY, this)
      }
      equals(YY) {
        return YY && this._x === YY._x && this._y === YY._y && this._z === YY._z && this._w === YY._w
      }
      equalsWithEpsilon(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FY.c;
        return YY && (0, OY.WithinEpsilon)(this._x, YY._x, rY) && (0, OY.WithinEpsilon)(this._y, YY._y, rY) && (0, OY.WithinEpsilon)(this._z, YY._z, rY) && (0, OY.WithinEpsilon)(this._w, YY._w, rY)
      }
      isApprox(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : FY.c;
        return YY && ((0, OY.WithinEpsilon)(this._x, YY._x, rY) && (0, OY.WithinEpsilon)(this._y, YY._y, rY) && (0, OY.WithinEpsilon)(this._z, YY._z, rY) && (0, OY.WithinEpsilon)(this._w, YY._w, rY) || (0, OY.WithinEpsilon)(this._x, -YY._x, rY) && (0, OY.WithinEpsilon)(this._y, -YY._y, rY) && (0, OY.WithinEpsilon)(this._z, -YY._z, rY) && (0, OY.WithinEpsilon)(this._w, -YY._w, rY))
      }
      clone() {
        return new yY(this._x, this._y, this._z, this._w)
      }
      brY(YY) {
        return this._x = YY._x, this._y = YY._y, this._z = YY._z, this._w = YY._w, this._isDirty = !0, this
      }
      p_(YY, rY, DY, FY) {
        return this._x = YY, this._y = rY, this._z = DY, this._w = FY, this._isDirty = !0, this
      }
      set(YY, rY, DY, FY) {
        return this.p_(YY, rY, DY, FY)
      }
      o3(YY) {
        return this.p_(YY, YY, YY, YY)
      }
      add(YY) {
        return new yY(this._x + YY._x, this._y + YY._y, this._z + YY._z, this._w + YY._w)
      }
      addInPlace(YY) {
        return this._x += YY._x, this._y += YY._y, this._z += YY._z, this._w += YY._w, this._isDirty = !0, this
      }
      addToRef(YY, rY) {
        return rY._x = this._x + YY._x, rY._y = this._y + YY._y, rY._z = this._z + YY._z, rY._w = this._w + YY._w, rY._isDirty = !0, rY
      }
      addInPlaceFromFloats(YY, rY, DY, FY) {
        return this._x += YY, this._y += rY, this._z += DY, this._w += FY, this._isDirty = !0, this
      }
      subtractToRef(YY, rY) {
        return rY._x = this._x - YY._x, rY._y = this._y - YY._y, rY._z = this._z - YY._z, rY._w = this._w - YY._w, rY._isDirty = !0, rY
      }
      subtractFromFloats(YY, rY, DY, FY) {
        return this.subtractFromFloatsToRef(YY, rY, DY, FY, new yY)
      }
      subtractFromFloatsToRef(YY, rY, DY, FY, AY) {
        return AY._x = this._x - YY, AY._y = this._y - rY, AY._z = this._z - DY, AY._w = this._w - FY, AY._isDirty = !0, AY
      }
      subtract(YY) {
        return new yY(this._x - YY._x, this._y - YY._y, this._z - YY._z, this._w - YY._w)
      }
      dDY(YY) {
        return this._x -= YY._x, this._y -= YY._y, this._z -= YY._z, this._w -= YY._w, this._isDirty = !0, this
      }
      scale(YY) {
        return new yY(this._x * YY, this._y * YY, this._z * YY, this._w * YY)
      }
      scaleToRef(YY, rY) {
        return rY._x = this._x * YY, rY._y = this._y * YY, rY._z = this._z * YY, rY._w = this._w * YY, rY._isDirty = !0, rY
      }
      scaleInPlace(YY) {
        return this._x *= YY, this._y *= YY, this._z *= YY, this._w *= YY, this._isDirty = !0, this
      }
      scaleAndAddToRef(YY, rY) {
        return rY._x += this._x * YY, rY._y += this._y * YY, rY._z += this._z * YY, rY._w += this._w * YY, rY._isDirty = !0, rY
      }
      multiply(YY) {
        const rY = new yY(0, 0, 0, 1);
        return this.multiplyToRef(YY, rY), rY
      }
      multiplyToRef(YY, rY) {
        const DY = this._x * YY._w + this._y * YY._z - this._z * YY._y + this._w * YY._x,
          FY = -this._x * YY._z + this._y * YY._w + this._z * YY._x + this._w * YY._y,
          AY = this._x * YY._y - this._y * YY._x + this._z * YY._w + this._w * YY._z,
          IY = -this._x * YY._x - this._y * YY._y - this._z * YY._z + this._w * YY._w;
        return rY.p_(DY, FY, AY, IY), rY
      }
      multiplyInPlace(YY) {
        return this.multiplyToRef(YY, this)
      }
      multiplyByFloats(YY, rY, DY, FY) {
        return this._x *= YY, this._y *= rY, this._z *= DY, this._w *= FY, this._isDirty = !0, this
      }
      divide(YY) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(YY, rY) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(YY) {
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
      GA() {
        return this.negateToRef(new yY)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(YY) {
        return YY._x = -this._x, YY._y = -this._y, YY._z = -this._z, YY._w = -this._w, YY._isDirty = !0, YY
      }
      kIY(YY, rY, DY, FY) {
        return this._x === YY && this._y === rY && this._z === DY && this._w === FY
      }
      floorToRef(YY) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(YY) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(YY) {
        return YY.p_(-this._x, -this._y, -this._z, this._w), YY
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new yY(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const YY = this.conjugate(),
          rY = this.lengthSquared();
        return 0 == rY || 1 == rY || YY.scaleInPlace(1 / rY), YY
      }
      invertInPlace() {
        this.conjugateInPlace();
        const YY = this.lengthSquared();
        return 0 == YY || 1 == YY || this.scaleInPlace(1 / YY), this
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
      normalizeFromLength(YY) {
        return 0 === YY || 1 === YY ? this : this.scaleInPlace(1 / YY)
      }
      normalizeToNew() {
        const YY = new yY(0, 0, 0, 1);
        return this.normalizeToRef(YY), YY
      }
      normalizeToRef(YY) {
        const rY = this.length();
        return 0 === rY || 1 === rY ? YY.p_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / rY, YY)
      }
      toEulerAngles() {
        const YY = sY.Zero();
        return this.toEulerAnglesToRef(YY), YY
      }
      toEulerAnglesToRef(YY) {
        const rY = this._z,
          DY = this._x,
          FY = this._y,
          AY = this._w,
          IY = FY * rY - DY * AY,
          RY = .4999999;
        if (IY < -RY) YY._y = 2 * Math.atan2(FY, AY), YY._x = Math.PI / 2, YY._z = 0, YY._isDirty = !0;
        else if (IY > RY) YY._y = 2 * Math.atan2(FY, AY), YY._x = -Math.PI / 2, YY._z = 0, YY._isDirty = !0;
        else {
          const RY = AY * AY,
            OY = rY * rY,
            gY = DY * DY,
            aY = FY * FY;
          YY._z = Math.atan2(2 * (DY * FY + rY * AY), -OY - gY + aY + RY), YY._x = Math.asin(-2 * IY), YY._y = Math.atan2(2 * (rY * DY + FY * AY), OY - gY - aY + RY), YY._isDirty = !0
        }
        return YY
      }
      toAlphaBetaGammaToRef(YY) {
        const rY = this._z,
          DY = this._x,
          FY = this._y,
          AY = this._w,
          IY = Math.sqrt(DY * DY + FY * FY),
          RY = Math.sqrt(rY * rY + AY * AY),
          OY = 2 * Math.atan2(IY, RY),
          gY = 2 * Math.atan2(rY, AY),
          aY = 2 * Math.atan2(FY, DY),
          vY = (gY + aY) / 2,
          uY = (gY - aY) / 2;
        return YY.set(uY, OY, vY), YY
      }
      toRotationMatrix(YY) {
        return QY.FromQuaternionToRef(this, YY), YY
      }
      fromRotationMatrix(YY) {
        return yY.FromRotationMatrixToRef(YY, this), this
      }
      dot(YY) {
        return this._x * YY._x + this._y * YY._y + this._z * YY._z + this._w * YY._w
      }
      toAxisAngle() {
        const YY = sY.Zero();
        return {
          axis: YY,
          angle: this.toAxisAngleToRef(YY)
        }
      }
      toAxisAngleToRef(YY) {
        let rY;
        const DY = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          FY = this._w;
        return DY > 0 ? (rY = 2 * Math.atan2(DY, FY), YY.set(this._x / DY, this._y / DY, this._z / DY)) : (rY = 0, YY.set(1, 0, 0)), rY
      }
      static FromRotationMatrix(YY) {
        const rY = new yY;
        return yY.FromRotationMatrixToRef(YY, rY), rY
      }
      static FromRotationMatrixToRef(YY, rY) {
        const DY = YY.m,
          FY = DY[0],
          AY = DY[4],
          IY = DY[8],
          RY = DY[1],
          OY = DY[5],
          gY = DY[9],
          aY = DY[2],
          vY = DY[6],
          uY = DY[10],
          sY = FY + OY + uY;
        let iY;
        return sY > 0 ? (iY = .5 / Math.sqrt(sY + 1), rY._w = .25 / iY, rY._x = (vY - gY) * iY, rY._y = (IY - aY) * iY, rY._z = (RY - AY) * iY, rY._isDirty = !0) : FY > OY && FY > uY ? (iY = 2 * Math.sqrt(1 + FY - OY - uY), rY._w = (vY - gY) / iY, rY._x = .25 * iY, rY._y = (AY + RY) / iY, rY._z = (IY + aY) / iY, rY._isDirty = !0) : OY > uY ? (iY = 2 * Math.sqrt(1 + OY - FY - uY), rY._w = (IY - aY) / iY, rY._x = (AY + RY) / iY, rY._y = .25 * iY, rY._z = (gY + vY) / iY, rY._isDirty = !0) : (iY = 2 * Math.sqrt(1 + uY - FY - OY), rY._w = (RY - AY) / iY, rY._x = (IY + aY) / iY, rY._y = (gY + vY) / iY, rY._z = .25 * iY, rY._isDirty = !0), rY
      }
      static Dot(YY, rY) {
        return YY._x * rY._x + YY._y * rY._y + YY._z * rY._z + YY._w * rY._w
      }
      static AreClose(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const FY = yY.Dot(YY, rY);
        return 1 - FY * FY <= DY
      }
      static SmoothToRef(YY, rY, DY, FY, AY) {
        let IY = 0 === FY ? 1 : DY / FY;
        return IY = (0, OY.Clamp)(IY, 0, 1), yY.SlerpToRef(YY, rY, IY, AY), AY
      }
      static Zero() {
        return new yY(0, 0, 0, 0)
      }
      static Inverse(YY) {
        return new yY(-YY._x, -YY._y, -YY._z, YY._w)
      }
      static InverseToRef(YY, rY) {
        return rY.set(-YY._x, -YY._y, -YY._z, YY._w), rY
      }
      static Identity() {
        return new yY(0, 0, 0, 1)
      }
      static IsIdentity(YY) {
        return YY && 0 === YY._x && 0 === YY._y && 0 === YY._z && 1 === YY._w
      }
      static RotationAxis(YY, rY) {
        return yY.RotationAxisToRef(YY, rY, new yY)
      }
      static RotationAxisToRef(YY, rY, DY) {
        DY._w = Math.cos(rY / 2);
        const FY = Math.sin(rY / 2) / YY.length();
        return DY._x = YY._x * FY, DY._y = YY._y * FY, DY._z = YY._z * FY, DY._isDirty = !0, DY
      }
      static FromArray(YY, rY) {
        return rY || (rY = 0), new yY(YY[rY], YY[rY + 1], YY[rY + 2], YY[rY + 3])
      }
      static FromArrayToRef(YY, rY, DY) {
        return DY._x = YY[rY], DY._y = YY[rY + 1], DY._z = YY[rY + 2], DY._w = YY[rY + 3], DY._isDirty = !0, DY
      }
      static FromFloatsToRef(YY, rY, DY, FY, AY) {
        return AY.p_(YY, rY, DY, FY), AY
      }
      static FromEulerAngles(YY, rY, DY) {
        const FY = new yY;
        return yY.RotationYawPitchRollToRef(rY, YY, DY, FY), FY
      }
      static FromEulerAnglesToRef(YY, rY, DY, FY) {
        return yY.RotationYawPitchRollToRef(rY, YY, DY, FY), FY
      }
      static FromEulerVector(YY) {
        const rY = new yY;
        return yY.RotationYawPitchRollToRef(YY._y, YY._x, YY._z, rY), rY
      }
      static FromEulerVectorToRef(YY, rY) {
        return yY.RotationYawPitchRollToRef(YY._y, YY._x, YY._z, rY), rY
      }
      static FromUnitVectorsToRef(YY, rY, DY) {
        let AY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : FY.c;
        const IY = sY.Dot(YY, rY) + 1;
        return IY < AY ? Math.abs(YY.x) > Math.abs(YY.z) ? DY.set(-YY.y, YY.x, 0, 0) : DY.set(0, -YY.z, YY.y, 0) : (sY.CrossToRef(YY, rY, WY.xy[0]), DY.set(WY.xy[0].x, WY.xy[0].y, WY.xy[0].z, IY)), DY.normalize()
      }
      static RotationYawPitchRoll(YY, rY, DY) {
        const FY = new yY;
        return yY.RotationYawPitchRollToRef(YY, rY, DY, FY), FY
      }
      static RotationYawPitchRollToRef(YY, rY, DY, FY) {
        const AY = .5 * DY,
          IY = .5 * rY,
          RY = .5 * YY,
          OY = Math.sin(AY),
          gY = Math.cos(AY),
          aY = Math.sin(IY),
          vY = Math.cos(IY),
          uY = Math.sin(RY),
          sY = Math.cos(RY);
        return FY._x = sY * aY * gY + uY * vY * OY, FY._y = uY * vY * gY - sY * aY * OY, FY._z = sY * vY * OY - uY * aY * gY, FY._w = sY * vY * gY + uY * aY * OY, FY._isDirty = !0, FY
      }
      static RotationAlphaBetaGamma(YY, rY, DY) {
        const FY = new yY;
        return yY.RotationAlphaBetaGammaToRef(YY, rY, DY, FY), FY
      }
      static RotationAlphaBetaGammaToRef(YY, rY, DY, FY) {
        const AY = .5 * (DY + YY),
          IY = .5 * (DY - YY),
          RY = .5 * rY;
        return FY._x = Math.cos(IY) * Math.sin(RY), FY._y = Math.sin(IY) * Math.sin(RY), FY._z = Math.sin(AY) * Math.cos(RY), FY._w = Math.cos(AY) * Math.cos(RY), FY._isDirty = !0, FY
      }
      static RotationQuaternionFromAxis(YY, rY, DY) {
        const FY = new yY(0, 0, 0, 0);
        return yY.RotationQuaternionFromAxisToRef(YY, rY, DY, FY), FY
      }
      static RotationQuaternionFromAxisToRef(YY, rY, DY, FY) {
        const AY = oY.Matrix[0];
        return YY = YY.normalizeToRef(oY.xy[0]), rY = rY.normalizeToRef(oY.xy[1]), DY = DY.normalizeToRef(oY.xy[2]), QY.FromXYZAxesToRef(YY, rY, DY, AY), yY.FromRotationMatrixToRef(AY, FY), FY
      }
      static FromLookDirectionLH(YY, rY) {
        const DY = new yY;
        return yY.FromLookDirectionLHToRef(YY, rY, DY), DY
      }
      static FromLookDirectionLHToRef(YY, rY, DY) {
        const FY = oY.Matrix[0];
        return QY.LookDirectionLHToRef(YY, rY, FY), yY.FromRotationMatrixToRef(FY, DY), DY
      }
      static FromLookDirectionRH(YY, rY) {
        const DY = new yY;
        return yY.FromLookDirectionRHToRef(YY, rY, DY), DY
      }
      static FromLookDirectionRHToRef(YY, rY, DY) {
        const FY = oY.Matrix[0];
        return QY.LookDirectionRHToRef(YY, rY, FY), yY.FromRotationMatrixToRef(FY, DY)
      }
      static Slerp(YY, rY, DY) {
        const FY = yY.Identity();
        return yY.SlerpToRef(YY, rY, DY, FY), FY
      }
      static SlerpToRef(YY, rY, DY, FY) {
        let AY, IY, RY = YY._x * rY._x + YY._y * rY._y + YY._z * rY._z + YY._w * rY._w,
          OY = !1;
        if (RY < 0 && (OY = !0, RY = -RY), RY > .999999) IY = 1 - DY, AY = OY ? -DY : DY;
        else {
          const YY = Math.acos(RY),
            rY = 1 / Math.sin(YY);
          IY = Math.sin((1 - DY) * YY) * rY, AY = OY ? -Math.sin(DY * YY) * rY : Math.sin(DY * YY) * rY
        }
        return FY._x = IY * YY._x + AY * rY._x, FY._y = IY * YY._y + AY * rY._y, FY._z = IY * YY._z + AY * rY._z, FY._w = IY * YY._w + AY * rY._w, FY._isDirty = !0, FY
      }
      static Hermite(YY, rY, DY, FY, AY) {
        const IY = AY * AY,
          RY = AY * IY,
          OY = 2 * RY - 3 * IY + 1,
          gY = -2 * RY + 3 * IY,
          aY = RY - 2 * IY + AY,
          vY = RY - IY,
          uY = YY._x * OY + DY._x * gY + rY._x * aY + FY._x * vY,
          sY = YY._y * OY + DY._y * gY + rY._y * aY + FY._y * vY,
          iY = YY._z * OY + DY._z * gY + rY._z * aY + FY._z * vY,
          QY = YY._w * OY + DY._w * gY + rY._w * aY + FY._w * vY;
        return new yY(uY, sY, iY, QY)
      }
      static Hermite1stDerivative(YY, rY, DY, FY, AY) {
        const IY = new yY;
        return this.Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY), IY
      }
      static Hermite1stDerivativeToRef(YY, rY, DY, FY, AY, IY) {
        const RY = AY * AY;
        return IY._x = 6 * (RY - AY) * YY._x + (3 * RY - 4 * AY + 1) * rY._x + 6 * (-RY + AY) * DY._x + (3 * RY - 2 * AY) * FY._x, IY._y = 6 * (RY - AY) * YY._y + (3 * RY - 4 * AY + 1) * rY._y + 6 * (-RY + AY) * DY._y + (3 * RY - 2 * AY) * FY._y, IY._z = 6 * (RY - AY) * YY._z + (3 * RY - 4 * AY + 1) * rY._z + 6 * (-RY + AY) * DY._z + (3 * RY - 2 * AY) * FY._z, IY._w = 6 * (RY - AY) * YY._w + (3 * RY - 4 * AY + 1) * rY._w + 6 * (-RY + AY) * DY._w + (3 * RY - 2 * AY) * FY._w, IY._isDirty = !0, IY
      }
      static Normalize(YY) {
        const rY = yY.Zero();
        return yY.NormalizeToRef(YY, rY), rY
      }
      static NormalizeToRef(YY, rY) {
        return YY.normalizeToRef(rY), rY
      }
      static Clamp(YY, rY, DY) {
        const FY = new yY;
        return yY.ClampToRef(YY, rY, DY, FY), FY
      }
      static ClampToRef(YY, rY, DY, FY) {
        return FY.p_((0, OY.Clamp)(YY.x, rY.x, DY.x), (0, OY.Clamp)(YY.y, rY.y, DY.y), (0, OY.Clamp)(YY.z, rY.z, DY.z), (0, OY.Clamp)(YY.w, rY.w, DY.w))
      }
      static Random() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new yY((0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY))
      }
      static RandomToRef() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).p_((0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY), (0, OY.RandomRange)(YY, rY))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(YY, rY) {
        return Math.sqrt(yY.DistanceSquared(YY, rY))
      }
      static DistanceSquared(YY, rY) {
        const DY = YY.x - rY.x,
          FY = YY.y - rY.y,
          AY = YY.z - rY.z,
          IY = YY.w - rY.w;
        return DY * DY + FY * FY + AY * AY + IY * IY
      }
      static Center(YY, rY) {
        return yY.CenterToRef(YY, rY, yY.Zero())
      }
      static CenterToRef(YY, rY, DY) {
        return DY.p_((YY.x + rY.x) / 2, (YY.y + rY.y) / 2, (YY.z + rY.z) / 2, (YY.w + rY.w) / 2)
      }
    }
    yY._V8PerformanceHack = new yY(.5, .5, .5, .5);
    class QY {
      static get Use64Bits() {
        return IY.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = gY.h._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          FY = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = YY, this._isIdentity3x2 = YY || DY, this._isIdentityDirty = !this._isIdentity && rY, this._isIdentity3x2Dirty = !this._isIdentity3x2 && FY
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, IY.c.MatrixTrackPrecisionChange && IY.c.MatrixTrackedMatrices.push(this), this._m = new IY.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const YY = this._m;
          this._isIdentity = 1 === YY[0] && 0 === YY[1] && 0 === YY[2] && 0 === YY[3] && 0 === YY[4] && 1 === YY[5] && 0 === YY[6] && 0 === YY[7] && 0 === YY[8] && 0 === YY[9] && 1 === YY[10] && 0 === YY[11] && 0 === YY[12] && 0 === YY[13] && 0 === YY[14] && 1 === YY[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const YY = this._m,
          rY = YY[0],
          DY = YY[1],
          FY = YY[2],
          AY = YY[3],
          IY = YY[4],
          RY = YY[5],
          OY = YY[6],
          gY = YY[7],
          aY = YY[8],
          vY = YY[9],
          uY = YY[10],
          sY = YY[11],
          iY = YY[12],
          yY = YY[13],
          QY = YY[14],
          oY = YY[15],
          WY = uY * oY - QY * sY,
          EY = vY * oY - yY * sY,
          mY = vY * QY - yY * uY,
          VY = aY * oY - iY * sY,
          SY = aY * QY - uY * iY,
          lY = aY * yY - iY * vY;
        return rY * +(RY * WY - OY * EY + gY * mY) + DY * -(IY * WY - OY * VY + gY * SY) + FY * +(IY * EY - RY * VY + gY * lY) + AY * -(IY * mY - RY * SY + OY * lY)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!YY) return this._m;
        const DY = this._m;
        for (let FY = 0; FY < 16; FY++) YY[rY + FY] = DY[FY];
        return this
      }
      VDY() {
        return this._m
      }
      grY(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QY.FromArrayToRef(YY, rY, this)
      }
      p_() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        return QY.FromArrayToRef(rY, 0, this)
      }
      set() {
        const YY = this._m;
        for (let rY = 0; rY < 16; rY++) YY[rY] = rY < 0 || arguments.length <= rY ? void 0 : arguments[rY];
        return this.markAsUpdated(), this
      }
      o3(YY) {
        const rY = this._m;
        for (let DY = 0; DY < 16; DY++) rY[DY] = YY;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return QY.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(YY) {
        const rY = new QY;
        return this.addToRef(YY, rY), rY
      }
      addToRef(YY, rY) {
        const DY = this._m,
          FY = rY._m,
          AY = YY.m;
        for (let IY = 0; IY < 16; IY++) FY[IY] = DY[IY] + AY[IY];
        return rY.markAsUpdated(), rY
      }
      addToSelf(YY) {
        const rY = this._m,
          DY = YY.m;
        return rY[0] += DY[0], rY[1] += DY[1], rY[2] += DY[2], rY[3] += DY[3], rY[4] += DY[4], rY[5] += DY[5], rY[6] += DY[6], rY[7] += DY[7], rY[8] += DY[8], rY[9] += DY[9], rY[10] += DY[10], rY[11] += DY[11], rY[12] += DY[12], rY[13] += DY[13], rY[14] += DY[14], rY[15] += DY[15], this.markAsUpdated(), this
      }
      addInPlace(YY) {
        const rY = this._m,
          DY = YY.m;
        for (let FY = 0; FY < 16; FY++) rY[FY] += DY[FY];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const YY = this._m;
        for (let rY = 0; rY < 16; rY++) YY[rY] += rY < 0 || arguments.length <= rY ? void 0 : arguments[rY];
        return this.markAsUpdated(), this
      }
      subtract(YY) {
        const rY = this._m,
          DY = YY.m;
        for (let FY = 0; FY < 16; FY++) rY[FY] -= DY[FY];
        return this.markAsUpdated(), this
      }
      subtractToRef(YY, rY) {
        const DY = this._m,
          FY = YY.m,
          AY = rY._m;
        for (let IY = 0; IY < 16; IY++) AY[IY] = DY[IY] - FY[IY];
        return rY.markAsUpdated(), rY
      }
      dDY(YY) {
        const rY = this._m,
          DY = YY.m;
        for (let FY = 0; FY < 16; FY++) rY[FY] -= DY[FY];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        return this.subtractFromFloatsToRef(...rY, new QY)
      }
      subtractFromFloatsToRef() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        const FY = rY.pop(),
          AY = this._m,
          IY = FY._m,
          RY = rY;
        for (let OY = 0; OY < 16; OY++) IY[OY] = AY[OY] - RY[OY];
        return FY.markAsUpdated(), FY
      }
      invertToRef(YY) {
        return !0 === this._isIdentity ? (QY.IdentityToRef(YY), YY) : ((0, gY.e)(this, YY.VDY()) ? YY.markAsUpdated() : YY.brY(this), YY)
      }
      addAtIndex(YY, rY) {
        return this._m[YY] += rY, this.markAsUpdated(), this
      }
      multiplyAtIndex(YY, rY) {
        return this._m[YY] *= rY, this.markAsUpdated(), this
      }
      setTranslationFromFloats(YY, rY, DY) {
        return this._m[12] = YY, this._m[13] = rY, this._m[14] = DY, this.markAsUpdated(), this
      }
      addTranslationFromFloats(YY, rY, DY) {
        return this._m[12] += YY, this._m[13] += rY, this._m[14] += DY, this.markAsUpdated(), this
      }
      setTranslation(YY) {
        return this.setTranslationFromFloats(YY._x, YY._y, YY._z)
      }
      getTranslation() {
        return new sY(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(YY) {
        return YY.x = this._m[12], YY.y = this._m[13], YY.z = this._m[14], YY
      }
      removeRotationAndScaling() {
        const YY = this.m;
        return QY.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, YY[12], YY[13], YY[14], YY[15], this), this._updateIdentityStatus(0 === YY[12] && 0 === YY[13] && 0 === YY[14] && 1 === YY[15]), this
      }
      brY(YY) {
        YY.copyToArray(this._m);
        const rY = YY;
        return this.updateFlag = rY.updateFlag, this._updateIdentityStatus(rY._isIdentity, rY._isIdentityDirty, rY._isIdentity3x2, rY._isIdentity3x2Dirty), this
      }
      copyToArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, gY.b)(this, YY, rY), this
      }
      multiply(YY) {
        const rY = new QY;
        return this.multiplyToRef(YY, rY), rY
      }
      multiplyInPlace(YY) {
        const rY = this._m,
          DY = YY.m;
        for (let FY = 0; FY < 16; FY++) rY[FY] *= DY[FY];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const YY = this._m;
        for (let rY = 0; rY < 16; rY++) YY[rY] *= rY < 0 || arguments.length <= rY ? void 0 : arguments[rY];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        const FY = rY.pop(),
          AY = this._m,
          IY = FY._m,
          RY = rY;
        for (let OY = 0; OY < 16; OY++) IY[OY] = AY[OY] * RY[OY];
        return FY.markAsUpdated(), FY
      }
      multiplyToRef(YY, rY) {
        return this._isIdentity ? (rY.brY(YY), rY) : YY._isIdentity ? (rY.brY(this), rY) : (this.multiplyToArray(YY, rY._m, 0), rY.markAsUpdated(), rY)
      }
      multiplyToArray(YY, rY, DY) {
        return (0, gY.i)(this, YY, rY, DY), this
      }
      divide(YY) {
        return this.divideToRef(YY, new QY)
      }
      divideToRef(YY, rY) {
        const DY = this._m,
          FY = YY.m,
          AY = rY._m;
        for (let IY = 0; IY < 16; IY++) AY[IY] = DY[IY] / FY[IY];
        return rY.markAsUpdated(), rY
      }
      divideInPlace(YY) {
        const rY = this._m,
          DY = YY.m;
        for (let FY = 0; FY < 16; FY++) rY[FY] /= DY[FY];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(YY) {
        const rY = this._m,
          DY = YY.m;
        for (let FY = 0; FY < 16; FY++) rY[FY] = Math.min(rY[FY], DY[FY]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const YY = this._m;
        for (let rY = 0; rY < 16; rY++) YY[rY] = Math.min(YY[rY], rY < 0 || arguments.length <= rY ? void 0 : arguments[rY]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(YY) {
        const rY = this._m,
          DY = YY.m;
        for (let FY = 0; FY < 16; FY++) rY[FY] = Math.max(rY[FY], DY[FY]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const YY = this._m;
        for (let rY = 0; rY < 16; rY++) YY[rY] = Math.max(YY[rY], rY < 0 || arguments.length <= rY ? void 0 : arguments[rY]);
        return this.markAsUpdated(), this
      }
      GA() {
        return this.negateToRef(new QY)
      }
      negateInPlace() {
        const YY = this._m;
        for (let rY = 0; rY < 16; rY++) YY[rY] = -YY[rY];
        return this.markAsUpdated(), this
      }
      negateToRef(YY) {
        const rY = this._m,
          DY = YY._m;
        for (let FY = 0; FY < 16; FY++) DY[FY] = -rY[FY];
        return YY.markAsUpdated(), YY
      }
      equals(YY) {
        const rY = YY;
        if (!rY) return !1;
        if ((this._isIdentity || rY._isIdentity) && !this._isIdentityDirty && !rY._isIdentityDirty) return this._isIdentity && rY._isIdentity;
        const DY = this.m,
          FY = rY.m;
        return DY[0] === FY[0] && DY[1] === FY[1] && DY[2] === FY[2] && DY[3] === FY[3] && DY[4] === FY[4] && DY[5] === FY[5] && DY[6] === FY[6] && DY[7] === FY[7] && DY[8] === FY[8] && DY[9] === FY[9] && DY[10] === FY[10] && DY[11] === FY[11] && DY[12] === FY[12] && DY[13] === FY[13] && DY[14] === FY[14] && DY[15] === FY[15]
      }
      equalsWithEpsilon(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = this._m,
          FY = YY.m;
        for (let AY = 0; AY < 16; AY++)
          if (!(0, OY.WithinEpsilon)(DY[AY], FY[AY], rY)) return !1;
        return !0
      }
      kIY() {
        const YY = this._m;
        for (let rY = 0; rY < 16; rY++)
          if (YY[rY] != (rY < 0 || arguments.length <= rY ? void 0 : arguments[rY])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new QY)
      }
      floorToRef(YY) {
        const rY = this._m,
          DY = YY._m;
        for (let FY = 0; FY < 16; FY++) DY[FY] = Math.floor(rY[FY]);
        return YY.markAsUpdated(), YY
      }
      fract() {
        return this.fractToRef(new QY)
      }
      fractToRef(YY) {
        const rY = this._m,
          DY = YY._m;
        for (let FY = 0; FY < 16; FY++) DY[FY] = rY[FY] - Math.floor(rY[FY]);
        return YY.markAsUpdated(), YY
      }
      clone() {
        const YY = new QY;
        return YY.brY(this), YY
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let YY = vY(this._m[0]);
        for (let rY = 1; rY < 16; rY++) YY = 397 * YY ^ vY(this._m[rY]);
        return YY
      }
      decomposeToTransformNode(YY) {
        return YY.rotationQuaternion = YY.rotationQuaternion || new yY, this.decompose(YY.pa, YY.rotationQuaternion, YY.position)
      }
      decompose(YY, rY, DY, FY) {
        let AY = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return DY && DY.o3(0), YY && YY.o3(1), rY && rY.p_(0, 0, 0, 1), !0;
        const IY = this._m;
        if (DY && DY.p_(IY[12], IY[13], IY[14]), (YY = YY || oY.xy[0]).x = Math.sqrt(IY[0] * IY[0] + IY[1] * IY[1] + IY[2] * IY[2]), YY.y = Math.sqrt(IY[4] * IY[4] + IY[5] * IY[5] + IY[6] * IY[6]), YY.z = Math.sqrt(IY[8] * IY[8] + IY[9] * IY[9] + IY[10] * IY[10]), FY) {
          const rY = (AY ? FY.absoluteScaling.x : FY.pa.x) < 0 ? -1 : 1,
            DY = (AY ? FY.absoluteScaling.y : FY.pa.y) < 0 ? -1 : 1,
            IY = (AY ? FY.absoluteScaling.z : FY.pa.z) < 0 ? -1 : 1;
          YY.x *= rY, YY.y *= DY, YY.z *= IY
        } else this.determinant() <= 0 && (YY.y *= -1);
        if (0 === YY._x || 0 === YY._y || 0 === YY._z) return rY && rY.p_(0, 0, 0, 1), !1;
        if (rY) {
          const DY = 1 / YY._x,
            FY = 1 / YY._y,
            AY = 1 / YY._z;
          QY.FromValuesToRef(IY[0] * DY, IY[1] * DY, IY[2] * DY, 0, IY[4] * FY, IY[5] * FY, IY[6] * FY, 0, IY[8] * AY, IY[9] * AY, IY[10] * AY, 0, 0, 0, 0, 1, oY.Matrix[0]), yY.FromRotationMatrixToRef(oY.Matrix[0], rY)
        }
        return !0
      }
      getRow(YY) {
        if (YY < 0 || YY > 3) return null;
        const rY = 4 * YY;
        return new iY(this._m[rY + 0], this._m[rY + 1], this._m[rY + 2], this._m[rY + 3])
      }
      getRowToRef(YY, rY) {
        if (YY >= 0 && YY <= 3) {
          const DY = 4 * YY;
          rY.x = this._m[DY + 0], rY.y = this._m[DY + 1], rY.z = this._m[DY + 2], rY.w = this._m[DY + 3]
        }
        return rY
      }
      setRow(YY, rY) {
        return this.setRowFromFloats(YY, rY.x, rY.y, rY.z, rY.w)
      }
      transpose() {
        const YY = new QY;
        return QY.TransposeToRef(this, YY), YY
      }
      transposeToRef(YY) {
        return QY.TransposeToRef(this, YY), YY
      }
      setRowFromFloats(YY, rY, DY, FY, AY) {
        if (YY < 0 || YY > 3) return this;
        const IY = 4 * YY;
        return this._m[IY + 0] = rY, this._m[IY + 1] = DY, this._m[IY + 2] = FY, this._m[IY + 3] = AY, this.markAsUpdated(), this
      }
      scale(YY) {
        const rY = new QY;
        return this.scaleToRef(YY, rY), rY
      }
      scaleToRef(YY, rY) {
        for (let DY = 0; DY < 16; DY++) rY._m[DY] = this._m[DY] * YY;
        return rY.markAsUpdated(), rY
      }
      scaleAndAddToRef(YY, rY) {
        for (let DY = 0; DY < 16; DY++) rY._m[DY] += this._m[DY] * YY;
        return rY.markAsUpdated(), rY
      }
      scaleInPlace(YY) {
        const rY = this._m;
        for (let DY = 0; DY < 16; DY++) rY[DY] *= YY;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(YY) {
        const rY = oY.Matrix[0];
        this.invertToRef(rY), rY.transposeToRef(YY);
        const DY = YY._m;
        return QY.FromValuesToRef(DY[0], DY[1], DY[2], 0, DY[4], DY[5], DY[6], 0, DY[8], DY[9], DY[10], 0, 0, 0, 0, 1, YY), YY
      }
      getRotationMatrix() {
        const YY = new QY;
        return this.getRotationMatrixToRef(YY), YY
      }
      getRotationMatrixToRef(YY) {
        const rY = oY.xy[0];
        if (!this.decompose(rY)) return QY.IdentityToRef(YY), YY;
        const DY = this._m,
          FY = 1 / rY._x,
          AY = 1 / rY._y,
          IY = 1 / rY._z;
        return QY.FromValuesToRef(DY[0] * FY, DY[1] * FY, DY[2] * FY, 0, DY[4] * AY, DY[5] * AY, DY[6] * AY, 0, DY[8] * IY, DY[9] * IY, DY[10] * IY, 0, 0, 0, 0, 1, YY), YY
      }
      toggleModelMatrixHandInPlace() {
        const YY = this._m;
        return YY[2] *= -1, YY[6] *= -1, YY[8] *= -1, YY[9] *= -1, YY[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const YY = this._m;
        return YY[8] *= -1, YY[9] *= -1, YY[10] *= -1, YY[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(EY, this), this
      }
      static FromArray(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const DY = new QY;
        return QY.FromArrayToRef(YY, rY, DY), DY
      }
      static FromArrayToRef(YY, rY, DY) {
        for (let FY = 0; FY < 16; FY++) DY._m[FY] = YY[FY + rY];
        return DY.markAsUpdated(), DY
      }
      static FromFloat32ArrayToRefScaled(YY, rY, DY, FY) {
        return FY._m[0] = YY[0 + rY] * DY, FY._m[1] = YY[1 + rY] * DY, FY._m[2] = YY[2 + rY] * DY, FY._m[3] = YY[3 + rY] * DY, FY._m[4] = YY[4 + rY] * DY, FY._m[5] = YY[5 + rY] * DY, FY._m[6] = YY[6 + rY] * DY, FY._m[7] = YY[7 + rY] * DY, FY._m[8] = YY[8 + rY] * DY, FY._m[9] = YY[9 + rY] * DY, FY._m[10] = YY[10 + rY] * DY, FY._m[11] = YY[11 + rY] * DY, FY._m[12] = YY[12 + rY] * DY, FY._m[13] = YY[13 + rY] * DY, FY._m[14] = YY[14 + rY] * DY, FY._m[15] = YY[15 + rY] * DY, FY.markAsUpdated(), FY
      }
      static get IdentityReadOnly() {
        return QY._IdentityReadOnly
      }
      static FromValuesToRef(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, QY, oY) {
        const WY = oY._m;
        WY[0] = YY, WY[1] = rY, WY[2] = DY, WY[3] = FY, WY[4] = AY, WY[5] = IY, WY[6] = RY, WY[7] = OY, WY[8] = gY, WY[9] = aY, WY[10] = vY, WY[11] = uY, WY[12] = sY, WY[13] = iY, WY[14] = yY, WY[15] = QY, oY.markAsUpdated()
      }
      static FromValues(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY, iY, yY, oY) {
        const WY = new QY,
          EY = WY._m;
        return EY[0] = YY, EY[1] = rY, EY[2] = DY, EY[3] = FY, EY[4] = AY, EY[5] = IY, EY[6] = RY, EY[7] = OY, EY[8] = gY, EY[9] = aY, EY[10] = vY, EY[11] = uY, EY[12] = sY, EY[13] = iY, EY[14] = yY, EY[15] = oY, WY.markAsUpdated(), WY
      }
      static Compose(YY, rY, DY) {
        const FY = new QY;
        return QY.ComposeToRef(YY, rY, DY, FY), FY
      }
      static ComposeToRef(YY, rY, DY, FY) {
        const AY = FY._m,
          IY = rY._x,
          RY = rY._y,
          OY = rY._z,
          gY = rY._w,
          aY = IY + IY,
          vY = RY + RY,
          uY = OY + OY,
          sY = IY * aY,
          iY = IY * vY,
          yY = IY * uY,
          QY = RY * vY,
          oY = RY * uY,
          WY = OY * uY,
          EY = gY * aY,
          mY = gY * vY,
          VY = gY * uY,
          SY = YY._x,
          lY = YY._y,
          TY = YY._z;
        return AY[0] = (1 - (QY + WY)) * SY, AY[1] = (iY + VY) * SY, AY[2] = (yY - mY) * SY, AY[3] = 0, AY[4] = (iY - VY) * lY, AY[5] = (1 - (sY + WY)) * lY, AY[6] = (oY + EY) * lY, AY[7] = 0, AY[8] = (yY + mY) * TY, AY[9] = (oY - EY) * TY, AY[10] = (1 - (sY + QY)) * TY, AY[11] = 0, AY[12] = DY._x, AY[13] = DY._y, AY[14] = DY._z, AY[15] = 1, FY.markAsUpdated(), FY
      }
      static Identity() {
        const YY = QY.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return YY._updateIdentityStatus(!0), YY
      }
      static IdentityToRef(YY) {
        return QY.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, YY), YY._updateIdentityStatus(!0), YY
      }
      static Zero() {
        const YY = QY.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return YY._updateIdentityStatus(!1), YY
      }
      static RotationX(YY) {
        const rY = new QY;
        return QY.RotationXToRef(YY, rY), rY
      }
      static Invert(YY) {
        const rY = new QY;
        return YY.invertToRef(rY), rY
      }
      static RotationXToRef(YY, rY) {
        const DY = Math.sin(YY),
          FY = Math.cos(YY);
        return QY.FromValuesToRef(1, 0, 0, 0, 0, FY, DY, 0, 0, -DY, FY, 0, 0, 0, 0, 1, rY), rY._updateIdentityStatus(1 === FY && 0 === DY), rY
      }
      static RotationY(YY) {
        const rY = new QY;
        return QY.RotationYToRef(YY, rY), rY
      }
      static RotationYToRef(YY, rY) {
        const DY = Math.sin(YY),
          FY = Math.cos(YY);
        return QY.FromValuesToRef(FY, 0, -DY, 0, 0, 1, 0, 0, DY, 0, FY, 0, 0, 0, 0, 1, rY), rY._updateIdentityStatus(1 === FY && 0 === DY), rY
      }
      static RotationZ(YY) {
        const rY = new QY;
        return QY.RotationZToRef(YY, rY), rY
      }
      static RotationZToRef(YY, rY) {
        const DY = Math.sin(YY),
          FY = Math.cos(YY);
        return QY.FromValuesToRef(FY, DY, 0, 0, -DY, FY, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, rY), rY._updateIdentityStatus(1 === FY && 0 === DY), rY
      }
      static RotationAxis(YY, rY) {
        const DY = new QY;
        return QY.RotationAxisToRef(YY, rY, DY), DY
      }
      static RotationAxisToRef(YY, rY, DY) {
        const FY = Math.sin(-rY),
          AY = Math.cos(-rY),
          IY = 1 - AY;
        YY = YY.normalizeToRef(oY.xy[0]);
        const RY = DY._m;
        return RY[0] = YY._x * YY._x * IY + AY, RY[1] = YY._x * YY._y * IY - YY._z * FY, RY[2] = YY._x * YY._z * IY + YY._y * FY, RY[3] = 0, RY[4] = YY._y * YY._x * IY + YY._z * FY, RY[5] = YY._y * YY._y * IY + AY, RY[6] = YY._y * YY._z * IY - YY._x * FY, RY[7] = 0, RY[8] = YY._z * YY._x * IY - YY._y * FY, RY[9] = YY._z * YY._y * IY + YY._x * FY, RY[10] = YY._z * YY._z * IY + AY, RY[11] = 0, RY[12] = 0, RY[13] = 0, RY[14] = 0, RY[15] = 1, DY.markAsUpdated(), DY
      }
      static RotationAlignToRef(YY, rY, DY) {
        let AY = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const IY = sY.Dot(rY, YY),
          RY = DY._m;
        if (IY < -1 + FY.c) RY[0] = -1, RY[1] = 0, RY[2] = 0, RY[3] = 0, RY[4] = 0, RY[5] = AY ? 1 : -1, RY[6] = 0, RY[7] = 0, RY[8] = 0, RY[9] = 0, RY[10] = AY ? -1 : 1, RY[11] = 0;
        else {
          const DY = sY.Cross(rY, YY),
            FY = 1 / (1 + IY);
          RY[0] = DY._x * DY._x * FY + IY, RY[1] = DY._y * DY._x * FY - DY._z, RY[2] = DY._z * DY._x * FY + DY._y, RY[3] = 0, RY[4] = DY._x * DY._y * FY + DY._z, RY[5] = DY._y * DY._y * FY + IY, RY[6] = DY._z * DY._y * FY - DY._x, RY[7] = 0, RY[8] = DY._x * DY._z * FY - DY._y, RY[9] = DY._y * DY._z * FY + DY._x, RY[10] = DY._z * DY._z * FY + IY, RY[11] = 0
        }
        return RY[12] = 0, RY[13] = 0, RY[14] = 0, RY[15] = 1, DY.markAsUpdated(), DY
      }
      static RotationYawPitchRoll(YY, rY, DY) {
        const FY = new QY;
        return QY.RotationYawPitchRollToRef(YY, rY, DY, FY), FY
      }
      static RotationYawPitchRollToRef(YY, rY, DY, FY) {
        return yY.RotationYawPitchRollToRef(YY, rY, DY, oY.Quaternion[0]), oY.Quaternion[0].toRotationMatrix(FY), FY
      }
      static Scaling(YY, rY, DY) {
        const FY = new QY;
        return QY.ScalingToRef(YY, rY, DY, FY), FY
      }
      static ScalingToRef(YY, rY, DY, FY) {
        return QY.FromValuesToRef(YY, 0, 0, 0, 0, rY, 0, 0, 0, 0, DY, 0, 0, 0, 0, 1, FY), FY._updateIdentityStatus(1 === YY && 1 === rY && 1 === DY), FY
      }
      static Translation(YY, rY, DY) {
        const FY = new QY;
        return QY.TranslationToRef(YY, rY, DY, FY), FY
      }
      static TranslationToRef(YY, rY, DY, FY) {
        return QY.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, YY, rY, DY, 1, FY), FY._updateIdentityStatus(0 === YY && 0 === rY && 0 === DY), FY
      }
      static Lerp(YY, rY, DY) {
        const FY = new QY;
        return QY.LerpToRef(YY, rY, DY, FY), FY
      }
      static LerpToRef(YY, rY, DY, FY) {
        const AY = FY._m,
          IY = YY.m,
          RY = rY.m;
        for (let OY = 0; OY < 16; OY++) AY[OY] = IY[OY] * (1 - DY) + RY[OY] * DY;
        return FY.markAsUpdated(), FY
      }
      static DecomposeLerp(YY, rY, DY) {
        const FY = new QY;
        return QY.DecomposeLerpToRef(YY, rY, DY, FY), FY
      }
      static DecomposeLerpToRef(YY, rY, DY, FY) {
        const AY = oY.xy[0],
          IY = oY.Quaternion[0],
          RY = oY.xy[1];
        YY.decompose(AY, IY, RY);
        const OY = oY.xy[2],
          gY = oY.Quaternion[1],
          aY = oY.xy[3];
        rY.decompose(OY, gY, aY);
        const vY = oY.xy[4];
        sY.LerpToRef(AY, OY, DY, vY);
        const uY = oY.Quaternion[2];
        yY.SlerpToRef(IY, gY, DY, uY);
        const iY = oY.xy[5];
        return sY.LerpToRef(RY, aY, DY, iY), QY.ComposeToRef(vY, uY, iY, FY), FY
      }
      static LookAtLH(YY, rY, DY) {
        const FY = new QY;
        return QY.LookAtLHToRef(YY, rY, DY, FY), FY
      }
      static LookAtLHToRef(YY, rY, DY, FY) {
        const AY = oY.xy[0],
          IY = oY.xy[1],
          RY = oY.xy[2];
        rY.subtractToRef(YY, RY), RY.normalize(), sY.CrossToRef(DY, RY, AY);
        const OY = AY.lengthSquared();
        0 === OY ? AY.x = 1 : AY.normalizeFromLength(Math.sqrt(OY)), sY.CrossToRef(RY, AY, IY), IY.normalize();
        const gY = -sY.Dot(AY, YY),
          aY = -sY.Dot(IY, YY),
          vY = -sY.Dot(RY, YY);
        return QY.FromValuesToRef(AY._x, IY._x, RY._x, 0, AY._y, IY._y, RY._y, 0, AY._z, IY._z, RY._z, 0, gY, aY, vY, 1, FY), FY
      }
      static LookAtRH(YY, rY, DY) {
        const FY = new QY;
        return QY.LookAtRHToRef(YY, rY, DY, FY), FY
      }
      static LookAtRHToRef(YY, rY, DY, FY) {
        const AY = oY.xy[0],
          IY = oY.xy[1],
          RY = oY.xy[2];
        YY.subtractToRef(rY, RY), RY.normalize(), sY.CrossToRef(DY, RY, AY);
        const OY = AY.lengthSquared();
        0 === OY ? AY.x = 1 : AY.normalizeFromLength(Math.sqrt(OY)), sY.CrossToRef(RY, AY, IY), IY.normalize();
        const gY = -sY.Dot(AY, YY),
          aY = -sY.Dot(IY, YY),
          vY = -sY.Dot(RY, YY);
        return QY.FromValuesToRef(AY._x, IY._x, RY._x, 0, AY._y, IY._y, RY._y, 0, AY._z, IY._z, RY._z, 0, gY, aY, vY, 1, FY), FY
      }
      static LookDirectionLH(YY, rY) {
        const DY = new QY;
        return QY.LookDirectionLHToRef(YY, rY, DY), DY
      }
      static LookDirectionLHToRef(YY, rY, DY) {
        const FY = oY.xy[0];
        FY.brY(YY), FY.scaleInPlace(-1);
        const AY = oY.xy[1];
        return sY.CrossToRef(rY, FY, AY), QY.FromValuesToRef(AY._x, AY._y, AY._z, 0, rY._x, rY._y, rY._z, 0, FY._x, FY._y, FY._z, 0, 0, 0, 0, 1, DY), DY
      }
      static LookDirectionRH(YY, rY) {
        const DY = new QY;
        return QY.LookDirectionRHToRef(YY, rY, DY), DY
      }
      static LookDirectionRHToRef(YY, rY, DY) {
        const FY = oY.xy[2];
        return sY.CrossToRef(rY, YY, FY), QY.FromValuesToRef(FY._x, FY._y, FY._z, 0, rY._x, rY._y, rY._z, 0, YY._x, YY._y, YY._z, 0, 0, 0, 0, 1, DY), DY
      }
      static OrthoLH(YY, rY, DY, FY, AY) {
        const IY = new QY;
        return QY.OrthoLHToRef(YY, rY, DY, FY, IY, AY), IY
      }
      static OrthoLHToRef(YY, rY, DY, FY, AY, IY) {
        const RY = 2 / YY,
          OY = 2 / rY,
          gY = 2 / (FY - DY),
          aY = -(FY + DY) / (FY - DY);
        return QY.FromValuesToRef(RY, 0, 0, 0, 0, OY, 0, 0, 0, 0, gY, 0, 0, 0, aY, 1, AY), IY && AY.multiplyToRef(EY, AY), AY._updateIdentityStatus(1 === RY && 1 === OY && 1 === gY && 0 === aY), AY
      }
      static OrthoOffCenterLH(YY, rY, DY, FY, AY, IY, RY) {
        const OY = new QY;
        return QY.OrthoOffCenterLHToRef(YY, rY, DY, FY, AY, IY, OY, RY), OY
      }
      static OrthoOffCenterLHToRef(YY, rY, DY, FY, AY, IY, RY, OY) {
        const gY = 2 / (rY - YY),
          aY = 2 / (FY - DY),
          vY = 2 / (IY - AY),
          uY = -(IY + AY) / (IY - AY),
          sY = (YY + rY) / (YY - rY),
          iY = (FY + DY) / (DY - FY);
        return QY.FromValuesToRef(gY, 0, 0, 0, 0, aY, 0, 0, 0, 0, vY, 0, sY, iY, uY, 1, RY), OY && RY.multiplyToRef(EY, RY), RY.markAsUpdated(), RY
      }
      static ObliqueOffCenterLHToRef(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
        const uY = -RY * Math.cos(OY),
          sY = -RY * Math.sin(OY);
        return QY.TranslationToRef(0, 0, -gY, oY.Matrix[1]), QY.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, uY, sY, 1, 0, 0, 0, 0, 1, oY.Matrix[0]), oY.Matrix[1].multiplyToRef(oY.Matrix[0], oY.Matrix[0]), QY.TranslationToRef(0, 0, gY, oY.Matrix[1]), oY.Matrix[0].multiplyToRef(oY.Matrix[1], oY.Matrix[0]), QY.OrthoOffCenterLHToRef(YY, rY, DY, FY, AY, IY, aY, vY), oY.Matrix[0].multiplyToRef(aY, aY), aY
      }
      static OrthoOffCenterRH(YY, rY, DY, FY, AY, IY, RY) {
        const OY = new QY;
        return QY.OrthoOffCenterRHToRef(YY, rY, DY, FY, AY, IY, OY, RY), OY
      }
      static OrthoOffCenterRHToRef(YY, rY, DY, FY, AY, IY, RY, OY) {
        return QY.OrthoOffCenterLHToRef(YY, rY, DY, FY, AY, IY, RY, OY), RY._m[10] *= -1, RY
      }
      static ObliqueOffCenterRHToRef(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
        const uY = RY * Math.cos(OY),
          sY = RY * Math.sin(OY);
        return QY.TranslationToRef(0, 0, gY, oY.Matrix[1]), QY.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, uY, sY, 1, 0, 0, 0, 0, 1, oY.Matrix[0]), oY.Matrix[1].multiplyToRef(oY.Matrix[0], oY.Matrix[0]), QY.TranslationToRef(0, 0, -gY, oY.Matrix[1]), oY.Matrix[0].multiplyToRef(oY.Matrix[1], oY.Matrix[0]), QY.OrthoOffCenterRHToRef(YY, rY, DY, FY, AY, IY, aY, vY), oY.Matrix[0].multiplyToRef(aY, aY), aY
      }
      static PerspectiveLH(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const RY = new QY,
          OY = 2 * DY / YY,
          gY = 2 * DY / rY,
          aY = (FY + DY) / (FY - DY),
          vY = -2 * FY * DY / (FY - DY),
          uY = Math.tan(IY);
        return QY.FromValuesToRef(OY, 0, 0, 0, 0, gY, 0, uY, 0, 0, aY, 1, 0, 0, vY, 0, RY), AY && RY.multiplyToRef(EY, RY), RY._updateIdentityStatus(!1), RY
      }
      static PerspectiveFovLH(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const OY = new QY;
        return QY.PerspectiveFovLHToRef(YY, rY, DY, FY, OY, !0, AY, IY, RY), OY
      }
      static PerspectiveFovLHToRef(YY, rY, DY, FY, AY) {
        let IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          RY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          gY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const aY = DY,
          vY = FY,
          uY = 1 / Math.tan(.5 * YY),
          sY = IY ? uY / rY : uY,
          iY = IY ? uY : uY * rY,
          yY = gY && 0 === aY ? -1 : 0 !== vY ? (vY + aY) / (vY - aY) : 1,
          oY = gY && 0 === aY ? 2 * vY : 0 !== vY ? -2 * vY * aY / (vY - aY) : -2 * aY,
          WY = Math.tan(OY);
        return QY.FromValuesToRef(sY, 0, 0, 0, 0, iY, 0, WY, 0, 0, yY, 1, 0, 0, oY, 0, AY), RY && AY.multiplyToRef(EY, AY), AY._updateIdentityStatus(!1), AY
      }
      static PerspectiveFovReverseLHToRef(YY, rY, DY, FY, AY) {
        let IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          RY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const gY = 1 / Math.tan(.5 * YY),
          aY = IY ? gY / rY : gY,
          vY = IY ? gY : gY * rY,
          uY = Math.tan(OY);
        return QY.FromValuesToRef(aY, 0, 0, 0, 0, vY, 0, uY, 0, 0, -DY, 1, 0, 0, 1, 0, AY), RY && AY.multiplyToRef(EY, AY), AY._updateIdentityStatus(!1), AY
      }
      static PerspectiveFovRH(YY, rY, DY, FY, AY) {
        let IY = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          RY = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const OY = new QY;
        return QY.PerspectiveFovRHToRef(YY, rY, DY, FY, OY, !0, AY, IY, RY), OY
      }
      static PerspectiveFovRHToRef(YY, rY, DY, FY, AY) {
        let IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          RY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          gY = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const aY = DY,
          vY = FY,
          uY = 1 / Math.tan(.5 * YY),
          sY = IY ? uY / rY : uY,
          iY = IY ? uY : uY * rY,
          yY = gY && 0 === aY ? 1 : 0 !== vY ? -(vY + aY) / (vY - aY) : -1,
          oY = gY && 0 === aY ? 2 * vY : 0 !== vY ? -2 * vY * aY / (vY - aY) : -2 * aY,
          WY = Math.tan(OY);
        return QY.FromValuesToRef(sY, 0, 0, 0, 0, iY, 0, WY, 0, 0, yY, -1, 0, 0, oY, 0, AY), RY && AY.multiplyToRef(EY, AY), AY._updateIdentityStatus(!1), AY
      }
      static PerspectiveFovReverseRHToRef(YY, rY, DY, FY, AY) {
        let IY = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          RY = arguments.length > 6 ? arguments[6] : void 0,
          OY = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const gY = 1 / Math.tan(.5 * YY),
          aY = IY ? gY / rY : gY,
          vY = IY ? gY : gY * rY,
          uY = Math.tan(OY);
        return QY.FromValuesToRef(aY, 0, 0, 0, 0, vY, 0, uY, 0, 0, -DY, -1, 0, 0, -1, 0, AY), RY && AY.multiplyToRef(EY, AY), AY._updateIdentityStatus(!1), AY
      }
      static GetFinalMatrix(YY, rY, DY, FY, AY, IY) {
        const RY = YY.width,
          OY = YY.height,
          gY = YY.x,
          aY = YY.y,
          vY = QY.FromValues(RY / 2, 0, 0, 0, 0, -OY / 2, 0, 0, 0, 0, IY - AY, 0, gY + RY / 2, OY / 2 + aY, AY, 1),
          uY = new QY;
        return rY.multiplyToRef(DY, uY), uY.multiplyToRef(FY, uY), uY.multiplyToRef(vY, uY)
      }
      static GetAsMatrix2x2(YY) {
        const rY = YY.m,
          DY = [rY[0], rY[1], rY[4], rY[5]];
        return IY.c.MatrixUse64Bits ? DY : new Float32Array(DY)
      }
      static GetAsMatrix3x3(YY) {
        const rY = YY.m,
          DY = [rY[0], rY[1], rY[2], rY[4], rY[5], rY[6], rY[8], rY[9], rY[10]];
        return IY.c.MatrixUse64Bits ? DY : new Float32Array(DY)
      }
      static Transpose(YY) {
        const rY = new QY;
        return QY.TransposeToRef(YY, rY), rY
      }
      static TransposeToRef(YY, rY) {
        const DY = YY.m,
          FY = DY[0],
          AY = DY[4],
          IY = DY[8],
          RY = DY[12],
          OY = DY[1],
          gY = DY[5],
          aY = DY[9],
          vY = DY[13],
          uY = DY[2],
          sY = DY[6],
          iY = DY[10],
          yY = DY[14],
          QY = DY[3],
          oY = DY[7],
          WY = DY[11],
          EY = DY[15],
          mY = rY._m;
        return mY[0] = FY, mY[1] = AY, mY[2] = IY, mY[3] = RY, mY[4] = OY, mY[5] = gY, mY[6] = aY, mY[7] = vY, mY[8] = uY, mY[9] = sY, mY[10] = iY, mY[11] = yY, mY[12] = QY, mY[13] = oY, mY[14] = WY, mY[15] = EY, rY.markAsUpdated(), rY._updateIdentityStatus(YY._isIdentity, YY._isIdentityDirty), rY
      }
      static Reflection(YY) {
        const rY = new QY;
        return QY.ReflectionToRef(YY, rY), rY
      }
      static ReflectionToRef(YY, rY) {
        YY.normalize();
        const DY = YY.normal.x,
          FY = YY.normal.y,
          AY = YY.normal.z,
          IY = -2 * DY,
          RY = -2 * FY,
          OY = -2 * AY;
        return QY.FromValuesToRef(IY * DY + 1, RY * DY, OY * DY, 0, IY * FY, RY * FY + 1, OY * FY, 0, IY * AY, RY * AY, OY * AY + 1, 0, IY * YY.d, RY * YY.d, OY * YY.d, 1, rY), rY
      }
      static FromXYZAxesToRef(YY, rY, DY, FY) {
        return QY.FromValuesToRef(YY._x, YY._y, YY._z, 0, rY._x, rY._y, rY._z, 0, DY._x, DY._y, DY._z, 0, 0, 0, 0, 1, FY), FY
      }
      static FromQuaternionToRef(YY, rY) {
        const DY = YY._x * YY._x,
          FY = YY._y * YY._y,
          AY = YY._z * YY._z,
          IY = YY._x * YY._y,
          RY = YY._z * YY._w,
          OY = YY._z * YY._x,
          gY = YY._y * YY._w,
          aY = YY._y * YY._z,
          vY = YY._x * YY._w;
        return rY._m[0] = 1 - 2 * (FY + AY), rY._m[1] = 2 * (IY + RY), rY._m[2] = 2 * (OY - gY), rY._m[3] = 0, rY._m[4] = 2 * (IY - RY), rY._m[5] = 1 - 2 * (AY + DY), rY._m[6] = 2 * (aY + vY), rY._m[7] = 0, rY._m[8] = 2 * (OY + gY), rY._m[9] = 2 * (aY - vY), rY._m[10] = 1 - 2 * (FY + DY), rY._m[11] = 0, rY._m[12] = 0, rY._m[13] = 0, rY._m[14] = 0, rY._m[15] = 1, rY.markAsUpdated(), rY
      }
    }
    QY._IdentityReadOnly = QY.Identity();
    class oY {}
    oY.xy = (0, AY.g)(11, sY.Zero), oY.Matrix = (0, AY.g)(2, QY.Identity), oY.Quaternion = (0, AY.g)(3, yY.Zero);
    class WY {}
    WY.Vector2 = (0, AY.g)(3, uY.Zero), WY.xy = (0, AY.g)(13, sY.Zero), WY.Vector4 = (0, AY.g)(3, iY.Zero), WY.Quaternion = (0, AY.g)(3, yY.Zero), WY.Matrix = (0, AY.g)(8, QY.Identity);
    const EY = QY.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let mY = !1;

    function VY() {
      mY || (mY = !0, Object.defineProperties(uY.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(sY.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(iY.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(yY.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(QY.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, aY.i)("BABYLON.Vector2", uY), (0, aY.i)("BABYLON.Vector3", sY), (0, aY.i)("BABYLON.Vector4", iY), (0, aY.i)("BABYLON.Matrix", QY))
    }
  },
  36552: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    const FY = "undefined" !== typeof WeakRef;
    class AY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(YY, rY, DY, FY)
      }
      initialize(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = YY, this.skipNextObservers = rY, this.target = DY, this.currentTarget = FY, this
      }
    }
    class IY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = YY, this.mask = rY, this.scope = DY, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(YY)
      }
    }
    class RY {
      static FromPromise(YY, rY) {
        const DY = new RY;
        return YY.then((YY => {
          DY.notifyObservers(YY)
        })).catch((YY => {
          if (!rY) throw YY;
          rY.notifyObservers(YY)
        })), DY
      }
      get observers() {
        return this._observers
      }
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = rY, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new AY(0), YY && (this._onObserverAdded = YY)
      }
      add(YY) {
        let rY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          DY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!YY) return null;
        const AY = new IY(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        AY.unregisterOnNextCall = DY, rY ? this._observers.unshift(AY) : this._observers.push(AY), this._onObserverAdded && this._onObserverAdded(AY), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(AY, this._lastNotifiedValue);
        const RY = FY ? new WeakRef(this) : {
          deref: () => this
        };
        return AY._remove = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const rY = RY.deref();
          rY && (YY ? rY.remove(AY) : rY._remove(AY))
        }, AY
      }
      addOnce(YY) {
        return this.add(YY, void 0, void 0, void 0, !0)
      }
      remove(YY) {
        if (!YY) return !1;
        YY._remove = null;
        return -1 !== this._observers.indexOf(YY) && (this._deferUnregister(YY), !0)
      }
      removeCallback(YY, rY) {
        for (let DY = 0; DY < this._observers.length; DY++) {
          const FY = this._observers[DY];
          if (!FY._willBeUnregistered && (FY.callback === YY && (!rY || rY === FY.scope))) return this._deferUnregister(FY), !0
        }
        return !1
      }
      _deferUnregister(YY) {
        YY._willBeUnregistered || (this._numObserversMarkedAsDeleted++, YY.unregisterOnNextCall = !1, YY._willBeUnregistered = !0, setTimeout((() => {
          this._remove(YY)
        }), 0))
      }
      _remove(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!YY) return !1;
        const DY = this._observers.indexOf(YY);
        return -1 !== DY && (rY && this._numObserversMarkedAsDeleted--, this._observers.splice(DY, 1), !0)
      }
      makeObserverTopPriority(YY) {
        this._remove(YY, !1), this._observers.unshift(YY)
      }
      makeObserverBottomPriority(YY) {
        this._remove(YY, !1), this._observers.push(YY)
      }
      notifyObservers(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = YY), !this._observers.length) return !0;
        const IY = this._eventState;
        IY.mask = rY, IY.target = DY, IY.currentTarget = FY, IY.skipNextObservers = !1, IY.lastReturnValue = YY, IY.userInfo = AY;
        for (const RY of this._observers)
          if (!RY._willBeUnregistered && (RY.mask & rY && (RY.unregisterOnNextCall && this._deferUnregister(RY), RY.scope ? IY.lastReturnValue = RY.callback.apply(RY.scope, [YY, IY]) : IY.lastReturnValue = RY.callback(YY, IY)), IY.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = rY), YY._willBeUnregistered) return;
        const FY = this._eventState;
        FY.mask = DY, FY.skipNextObservers = !1, YY.unregisterOnNextCall && this._deferUnregister(YY), YY.callback(rY, FY)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const YY = this._observers.pop();
          YY && (YY._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const YY = new RY;
        return YY._observers = this._observers.slice(0), YY
      }
      hasSpecificMask() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const rY of this._observers)
          if (rY.mask & YY || rY.mask === YY) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);