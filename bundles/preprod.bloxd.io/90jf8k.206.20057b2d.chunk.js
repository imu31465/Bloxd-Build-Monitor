export const id = 206;
export const ids = [206];
export const modules = {
  35639: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(35647);
    class AF {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    AF.Instances = [], AF.OnEnginesDisposedObservable = new CF.b, AF._LastCreatedScene = null, AF.UseFallbackTexture = !0, AF.FallbackTexture = ""
  },
  35634: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => CF
    });
    class CF {
      static SetMatrixPrecision(FF) {
        if (CF.MatrixTrackPrecisionChange = !1, FF && !CF.MatrixUse64Bits && CF.MatrixTrackedMatrices)
          for (let WF = 0; WF < CF.MatrixTrackedMatrices.length; ++WF) {
            const FF = CF.MatrixTrackedMatrices[WF],
              SF = FF._m;
            FF._m = new Array(16);
            for (let WF = 0; WF < 16; ++WF) FF._m[WF] = SF[WF]
          }
        CF.MatrixUse64Bits = FF, CF.MatrixCurrentType = CF.MatrixUse64Bits ? Array : Float32Array, CF.MatrixTrackedMatrices = null
      }
    }
    CF.MatrixUse64Bits = !1, CF.MatrixTrackPrecisionChange = !0, CF.MatrixCurrentType = Float32Array, CF.MatrixTrackedMatrices = []
  },
  35657: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => bW,
      h: () => PF,
      j: () => dF,
      m: () => CF,
      p: () => uF,
      t: () => hF
    });
    class CF {}

    function AF(FF) {
      FF.updateFlag = CF._UpdateFlagSeed++
    }

    function uF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const AF = FF.kRF(),
        uF = WF.kRF(),
        hF = AF[0],
        bW = AF[1],
        dF = AF[2],
        PF = AF[3],
        RF = AF[4],
        iW = AF[5],
        eF = AF[6],
        EF = AF[7],
        QF = AF[8],
        rW = AF[9],
        gW = AF[10],
        tW = AF[11],
        TF = AF[12],
        aW = AF[13],
        kW = AF[14],
        qW = AF[15],
        VF = uF[0],
        NF = uF[1],
        DF = uF[2],
        LF = uF[3],
        mW = uF[4],
        OF = uF[5],
        xW = uF[6],
        ZF = uF[7],
        oF = uF[8],
        YF = uF[9],
        MF = uF[10],
        cW = uF[11],
        GF = uF[12],
        zW = uF[13],
        IF = uF[14],
        fF = uF[15];
      SF[CF] = hF * VF + bW * mW + dF * oF + PF * GF, SF[CF + 1] = hF * NF + bW * OF + dF * YF + PF * zW, SF[CF + 2] = hF * DF + bW * xW + dF * MF + PF * IF, SF[CF + 3] = hF * LF + bW * ZF + dF * cW + PF * fF, SF[CF + 4] = RF * VF + iW * mW + eF * oF + EF * GF, SF[CF + 5] = RF * NF + iW * OF + eF * YF + EF * zW, SF[CF + 6] = RF * DF + iW * xW + eF * MF + EF * IF, SF[CF + 7] = RF * LF + iW * ZF + eF * cW + EF * fF, SF[CF + 8] = QF * VF + rW * mW + gW * oF + tW * GF, SF[CF + 9] = QF * NF + rW * OF + gW * YF + tW * zW, SF[CF + 10] = QF * DF + rW * xW + gW * MF + tW * IF, SF[CF + 11] = QF * LF + rW * ZF + gW * cW + tW * fF, SF[CF + 12] = TF * VF + aW * mW + kW * oF + qW * GF, SF[CF + 13] = TF * NF + aW * OF + kW * YF + qW * zW, SF[CF + 14] = TF * DF + aW * xW + kW * MF + qW * IF, SF[CF + 15] = TF * LF + aW * ZF + kW * cW + qW * fF
    }

    function hF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      uF(FF, WF, SF.kRF(), CF), AF(SF)
    }

    function bW(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const CF = FF.kRF();
      WF[SF] = CF[0], WF[SF + 1] = CF[1], WF[SF + 2] = CF[2], WF[SF + 3] = CF[3], WF[SF + 4] = CF[4], WF[SF + 5] = CF[5], WF[SF + 6] = CF[6], WF[SF + 7] = CF[7], WF[SF + 8] = CF[8], WF[SF + 9] = CF[9], WF[SF + 10] = CF[10], WF[SF + 11] = CF[11], WF[SF + 12] = CF[12], WF[SF + 13] = CF[13], WF[SF + 14] = CF[14], WF[SF + 15] = CF[15]
    }

    function dF(FF, WF) {
      const SF = PF(FF, WF.kRF());
      return SF && AF(WF), SF
    }

    function PF(FF, WF) {
      const SF = FF.kRF(),
        CF = SF[0],
        AF = SF[1],
        uF = SF[2],
        hF = SF[3],
        bW = SF[4],
        dF = SF[5],
        PF = SF[6],
        RF = SF[7],
        iW = SF[8],
        eF = SF[9],
        EF = SF[10],
        QF = SF[11],
        rW = SF[12],
        gW = SF[13],
        tW = SF[14],
        TF = SF[15],
        aW = EF * TF - tW * QF,
        kW = eF * TF - gW * QF,
        qW = eF * tW - gW * EF,
        VF = iW * TF - rW * QF,
        NF = iW * tW - EF * rW,
        DF = iW * gW - rW * eF,
        LF = +(dF * aW - PF * kW + RF * qW),
        mW = -(bW * aW - PF * VF + RF * NF),
        OF = +(bW * kW - dF * VF + RF * DF),
        xW = -(bW * qW - dF * NF + PF * DF),
        ZF = CF * LF + AF * mW + uF * OF + hF * xW;
      if (0 === ZF) return !1;
      const oF = 1 / ZF,
        YF = PF * TF - tW * RF,
        MF = dF * TF - gW * RF,
        cW = dF * tW - gW * PF,
        GF = bW * TF - rW * RF,
        zW = bW * tW - rW * PF,
        IF = bW * gW - rW * dF,
        fF = PF * QF - EF * RF,
        yW = dF * QF - eF * RF,
        sF = dF * EF - eF * PF,
        nF = bW * QF - iW * RF,
        HF = bW * EF - iW * PF,
        KF = bW * eF - iW * dF,
        wF = -(AF * aW - uF * kW + hF * qW),
        XF = +(CF * aW - uF * VF + hF * NF),
        UF = -(CF * kW - AF * VF + hF * DF),
        BF = +(CF * qW - AF * NF + uF * DF),
        jW = +(AF * YF - uF * MF + hF * cW),
        vW = -(CF * YF - uF * GF + hF * zW),
        JF = +(CF * MF - AF * GF + hF * IF),
        pF = -(CF * cW - AF * zW + uF * IF),
        lF = -(AF * fF - uF * yW + hF * sF),
        FW = +(CF * fF - uF * nF + hF * HF),
        WW = -(CF * yW - AF * nF + hF * KF),
        SW = +(CF * sF - AF * HF + uF * KF);
      return WF[0] = LF * oF, WF[1] = wF * oF, WF[2] = jW * oF, WF[3] = lF * oF, WF[4] = mW * oF, WF[5] = XF * oF, WF[6] = vW * oF, WF[7] = FW * oF, WF[8] = OF * oF, WF[9] = UF * oF, WF[10] = JF * oF, WF[11] = WW * oF, WF[12] = xW * oF, WF[13] = BF * oF, WF[14] = pF * oF, WF[15] = SW * oF, !0
    }
    CF._UpdateFlagSeed = 0
  },
  35623: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => rW,
      e: () => QF,
      g: () => kW,
      j: () => tW,
      n: () => iW,
      r: () => eF,
      v: () => EF
    });
    var CF = SF(35625),
      AF = SF(35631),
      uF = SF(35634),
      hF = SF(35639),
      bW = SF(35650),
      dF = SF(35657),
      PF = SF(35660);
    const RF = FF => parseInt(FF.toString().replace(/\W/g, ""));
    class iW {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = FF, this.y = WF
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let FF = RF(this.x);
        return FF = 397 * FF ^ RF(this.y), FF
      }
      toArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return FF[WF] = this.x, FF[WF + 1] = this.y, this
      }
      udF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return iW.FromArrayToRef(FF, WF, this), this
      }
      kRF() {
        return [this.x, this.y]
      }
      fdF(FF) {
        return this.x = FF.x, this.y = FF.y, this
      }
      FhF(FF, WF) {
        return this.x = FF, this.y = WF, this
      }
      set(FF, WF) {
        return this.FhF(FF, WF)
      }
      DuF(FF) {
        return this.FhF(FF, FF)
      }
      add(FF) {
        return new iW(this.x + FF.x, this.y + FF.y)
      }
      addToRef(FF, WF) {
        return WF.x = this.x + FF.x, WF.y = this.y + FF.y, WF
      }
      addInPlace(FF) {
        return this.x += FF.x, this.y += FF.y, this
      }
      addInPlaceFromFloats(FF, WF) {
        return this.x += FF, this.y += WF, this
      }
      addVector3(FF) {
        return new iW(this.x + FF.x, this.y + FF.y)
      }
      subtract(FF) {
        return new iW(this.x - FF.x, this.y - FF.y)
      }
      subtractToRef(FF, WF) {
        return WF.x = this.x - FF.x, WF.y = this.y - FF.y, WF
      }
      IPF(FF) {
        return this.x -= FF.x, this.y -= FF.y, this
      }
      multiplyInPlace(FF) {
        return this.x *= FF.x, this.y *= FF.y, this
      }
      multiply(FF) {
        return new iW(this.x * FF.x, this.y * FF.y)
      }
      multiplyToRef(FF, WF) {
        return WF.x = this.x * FF.x, WF.y = this.y * FF.y, WF
      }
      multiplyByFloats(FF, WF) {
        return new iW(this.x * FF, this.y * WF)
      }
      divide(FF) {
        return new iW(this.x / FF.x, this.y / FF.y)
      }
      divideToRef(FF, WF) {
        return WF.x = this.x / FF.x, WF.y = this.y / FF.y, WF
      }
      divideInPlace(FF) {
        return this.x = this.x / FF.x, this.y = this.y / FF.y, this
      }
      minimizeInPlace(FF) {
        return this.minimizeInPlaceFromFloats(FF.x, FF.y)
      }
      maximizeInPlace(FF) {
        return this.maximizeInPlaceFromFloats(FF.x, FF.y)
      }
      minimizeInPlaceFromFloats(FF, WF) {
        return this.x = Math.min(FF, this.x), this.y = Math.min(WF, this.y), this
      }
      maximizeInPlaceFromFloats(FF, WF) {
        return this.x = Math.max(FF, this.x), this.y = Math.max(WF, this.y), this
      }
      subtractFromFloats(FF, WF) {
        return new iW(this.x - FF, this.y - WF)
      }
      subtractFromFloatsToRef(FF, WF, SF) {
        return SF.x = this.x - FF, SF.y = this.y - WF, SF
      }
      Fh() {
        return new iW(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(FF) {
        return FF.x = -this.x, FF.y = -this.y, FF
      }
      scaleInPlace(FF) {
        return this.x *= FF, this.y *= FF, this
      }
      scale(FF) {
        return new iW(this.x * FF, this.y * FF)
      }
      scaleToRef(FF, WF) {
        return WF.x = this.x * FF, WF.y = this.y * FF, WF
      }
      scaleAndAddToRef(FF, WF) {
        return WF.x += this.x * FF, WF.y += this.y * FF, WF
      }
      equals(FF) {
        return FF && this.x === FF.x && this.y === FF.y
      }
      equalsWithEpsilon(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CF.c;
        return FF && (0, bW.WithinEpsilon)(this.x, FF.x, WF) && (0, bW.WithinEpsilon)(this.y, FF.y, WF)
      }
      HeF(FF, WF) {
        return this.x === FF && this.y === WF
      }
      floor() {
        return new iW(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(FF) {
        return FF.x = Math.floor(this.x), FF.y = Math.floor(this.y), FF
      }
      fract() {
        return new iW(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(FF) {
        return FF.x = this.x - Math.floor(this.x), FF.y = this.y - Math.floor(this.y), FF
      }
      rotate(FF) {
        return this.rotateToRef(FF, new iW)
      }
      rotateToRef(FF, WF) {
        const SF = Math.cos(FF),
          CF = Math.sin(FF);
        return WF.x = SF * this.x - CF * this.y, WF.y = CF * this.x + SF * this.y, WF
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
      normalizeFromLength(FF) {
        return 0 === FF || 1 === FF ? this : this.scaleInPlace(1 / FF)
      }
      normalizeToNew() {
        const FF = new iW;
        return this.normalizeToRef(FF), FF
      }
      normalizeToRef(FF) {
        const WF = this.length();
        return 0 === WF || 1 === WF ? (FF.x = this.x, FF.y = this.y, FF) : this.scaleToRef(1 / WF, FF)
      }
      clone() {
        return new iW(this.x, this.y)
      }
      dot(FF) {
        return this.x * FF.x + this.y * FF.y
      }
      static Zero() {
        return new iW(0, 0)
      }
      static One() {
        return new iW(1, 1)
      }
      static Random() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new iW((0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF))
      }
      static RandomToRef() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).FhF((0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF))
      }
      static get ZeroReadOnly() {
        return iW._ZeroReadOnly
      }
      static FromArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new iW(FF[WF], FF[WF + 1])
      }
      static FromArrayToRef(FF, WF, SF) {
        return SF.x = FF[WF], SF.y = FF[WF + 1], SF
      }
      static FromFloatsToRef(FF, WF, SF) {
        return SF.FhF(FF, WF), SF
      }
      static CatmullRom(FF, WF, SF, CF, AF) {
        const uF = AF * AF,
          hF = AF * uF,
          bW = .5 * (2 * WF.x + (-FF.x + SF.x) * AF + (2 * FF.x - 5 * WF.x + 4 * SF.x - CF.x) * uF + (-FF.x + 3 * WF.x - 3 * SF.x + CF.x) * hF),
          dF = .5 * (2 * WF.y + (-FF.y + SF.y) * AF + (2 * FF.y - 5 * WF.y + 4 * SF.y - CF.y) * uF + (-FF.y + 3 * WF.y - 3 * SF.y + CF.y) * hF);
        return new iW(bW, dF)
      }
      static ClampToRef(FF, WF, SF, CF) {
        return CF.x = (0, bW.Clamp)(FF.x, WF.x, SF.x), CF.y = (0, bW.Clamp)(FF.y, WF.y, SF.y), CF
      }
      static Clamp(FF, WF, SF) {
        const CF = (0, bW.Clamp)(FF.x, WF.x, SF.x),
          AF = (0, bW.Clamp)(FF.y, WF.y, SF.y);
        return new iW(CF, AF)
      }
      static Hermite(FF, WF, SF, CF, AF) {
        const uF = AF * AF,
          hF = AF * uF,
          bW = 2 * hF - 3 * uF + 1,
          dF = -2 * hF + 3 * uF,
          PF = hF - 2 * uF + AF,
          RF = hF - uF,
          eF = FF.x * bW + SF.x * dF + WF.x * PF + CF.x * RF,
          EF = FF.y * bW + SF.y * dF + WF.y * PF + CF.y * RF;
        return new iW(eF, EF)
      }
      static Hermite1stDerivative(FF, WF, SF, CF, AF) {
        return this.Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, new iW)
      }
      static Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF) {
        const hF = AF * AF;
        return uF.x = 6 * (hF - AF) * FF.x + (3 * hF - 4 * AF + 1) * WF.x + 6 * (-hF + AF) * SF.x + (3 * hF - 2 * AF) * CF.x, uF.y = 6 * (hF - AF) * FF.y + (3 * hF - 4 * AF + 1) * WF.y + 6 * (-hF + AF) * SF.y + (3 * hF - 2 * AF) * CF.y, uF
      }
      static Lerp(FF, WF, SF) {
        return iW.LerpToRef(FF, WF, SF, new iW)
      }
      static LerpToRef(FF, WF, SF, CF) {
        return CF.x = FF.x + (WF.x - FF.x) * SF, CF.y = FF.y + (WF.y - FF.y) * SF, CF
      }
      static Dot(FF, WF) {
        return FF.x * WF.x + FF.y * WF.y
      }
      static Normalize(FF) {
        return iW.NormalizeToRef(FF, new iW)
      }
      static NormalizeToRef(FF, WF) {
        return FF.normalizeToRef(WF), WF
      }
      static Minimize(FF, WF) {
        const SF = FF.x < WF.x ? FF.x : WF.x,
          CF = FF.y < WF.y ? FF.y : WF.y;
        return new iW(SF, CF)
      }
      static Maximize(FF, WF) {
        const SF = FF.x > WF.x ? FF.x : WF.x,
          CF = FF.y > WF.y ? FF.y : WF.y;
        return new iW(SF, CF)
      }
      static Transform(FF, WF) {
        return iW.TransformToRef(FF, WF, new iW)
      }
      static TransformToRef(FF, WF, SF) {
        const CF = WF.m,
          AF = FF.x * CF[0] + FF.y * CF[4] + CF[12],
          uF = FF.x * CF[1] + FF.y * CF[5] + CF[13];
        return SF.x = AF, SF.y = uF, SF
      }
      static PointInTriangle(FF, WF, SF, CF) {
        const AF = .5 * (-SF.y * CF.x + WF.y * (-SF.x + CF.x) + WF.x * (SF.y - CF.y) + SF.x * CF.y),
          uF = AF < 0 ? -1 : 1,
          hF = (WF.y * CF.x - WF.x * CF.y + (CF.y - WF.y) * FF.x + (WF.x - CF.x) * FF.y) * uF,
          bW = (WF.x * SF.y - WF.y * SF.x + (WF.y - SF.y) * FF.x + (SF.x - WF.x) * FF.y) * uF;
        return hF > 0 && bW > 0 && hF + bW < 2 * AF * uF
      }
      static Distance(FF, WF) {
        return Math.sqrt(iW.DistanceSquared(FF, WF))
      }
      static DistanceSquared(FF, WF) {
        const SF = FF.x - WF.x,
          CF = FF.y - WF.y;
        return SF * SF + CF * CF
      }
      static Center(FF, WF) {
        return iW.CenterToRef(FF, WF, new iW)
      }
      static CenterToRef(FF, WF, SF) {
        return SF.FhF((FF.x + WF.x) / 2, (FF.y + WF.y) / 2)
      }
      static DistanceOfPointFromSegment(FF, WF, SF) {
        const CF = iW.DistanceSquared(WF, SF);
        if (0 === CF) return iW.Distance(FF, WF);
        const AF = SF.subtract(WF),
          uF = Math.max(0, Math.min(1, iW.Dot(FF.subtract(WF), AF) / CF)),
          hF = WF.add(AF.multiplyByFloats(uF, uF));
        return iW.Distance(FF, hF)
      }
    }
    iW._V8PerformanceHack = new iW(.5, .5), iW._ZeroReadOnly = iW.Zero();
    class eF {
      get x() {
        return this._x
      }
      set x(FF) {
        this._x = FF, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(FF) {
        this._y = FF, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(FF) {
        this._z = FF, this._isDirty = !0
      }
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = FF, this._y = WF, this._z = SF
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "HC"
      }
      getHashCode() {
        let FF = RF(this._x);
        return FF = 397 * FF ^ RF(this._y), FF = 397 * FF ^ RF(this._z), FF
      }
      kRF() {
        return [this._x, this._y, this._z]
      }
      toArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return FF[WF] = this._x, FF[WF + 1] = this._y, FF[WF + 2] = this._z, this
      }
      udF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return eF.FromArrayToRef(FF, WF, this), this
      }
      toQuaternion() {
        return QF.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(FF) {
        return this._x += FF._x, this._y += FF._y, this._z += FF._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(FF, WF, SF) {
        return this._x += FF, this._y += WF, this._z += SF, this._isDirty = !0, this
      }
      add(FF) {
        return new eF(this._x + FF._x, this._y + FF._y, this._z + FF._z)
      }
      addToRef(FF, WF) {
        return WF._x = this._x + FF._x, WF._y = this._y + FF._y, WF._z = this._z + FF._z, WF._isDirty = !0, WF
      }
      IPF(FF) {
        return this._x -= FF._x, this._y -= FF._y, this._z -= FF._z, this._isDirty = !0, this
      }
      subtract(FF) {
        return new eF(this._x - FF._x, this._y - FF._y, this._z - FF._z)
      }
      subtractToRef(FF, WF) {
        return this.subtractFromFloatsToRef(FF._x, FF._y, FF._z, WF)
      }
      subtractFromFloats(FF, WF, SF) {
        return new eF(this._x - FF, this._y - WF, this._z - SF)
      }
      subtractFromFloatsToRef(FF, WF, SF, CF) {
        return CF._x = this._x - FF, CF._y = this._y - WF, CF._z = this._z - SF, CF._isDirty = !0, CF
      }
      Fh() {
        return new eF(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(FF) {
        return FF._x = -1 * this._x, FF._y = -1 * this._y, FF._z = -1 * this._z, FF._isDirty = !0, FF
      }
      scaleInPlace(FF) {
        return this._x *= FF, this._y *= FF, this._z *= FF, this._isDirty = !0, this
      }
      scale(FF) {
        return new eF(this._x * FF, this._y * FF, this._z * FF)
      }
      scaleToRef(FF, WF) {
        return WF._x = this._x * FF, WF._y = this._y * FF, WF._z = this._z * FF, WF._isDirty = !0, WF
      }
      getNormalToRef(FF) {
        const WF = this.length();
        let SF = Math.acos(this._y / WF);
        const CF = Math.atan2(this._z, this._x);
        SF > Math.PI / 2 ? SF -= Math.PI / 2 : SF += Math.PI / 2;
        const AF = WF * Math.sin(SF) * Math.cos(CF),
          uF = WF * Math.cos(SF),
          hF = WF * Math.sin(SF) * Math.sin(CF);
        return FF.set(AF, uF, hF), FF
      }
      applyRotationQuaternionToRef(FF, WF) {
        const SF = this._x,
          CF = this._y,
          AF = this._z,
          uF = FF._x,
          hF = FF._y,
          bW = FF._z,
          dF = FF._w,
          PF = 2 * (hF * AF - bW * CF),
          RF = 2 * (bW * SF - uF * AF),
          iW = 2 * (uF * CF - hF * SF);
        return WF._x = SF + dF * PF + hF * iW - bW * RF, WF._y = CF + dF * RF + bW * PF - uF * iW, WF._z = AF + dF * iW + uF * RF - hF * PF, WF._isDirty = !0, WF
      }
      applyRotationQuaternionInPlace(FF) {
        return this.applyRotationQuaternionToRef(FF, this)
      }
      applyRotationQuaternion(FF) {
        return this.applyRotationQuaternionToRef(FF, new eF)
      }
      scaleAndAddToRef(FF, WF) {
        return WF._x += this._x * FF, WF._y += this._y * FF, WF._z += this._z * FF, WF._isDirty = !0, WF
      }
      projectOnPlane(FF, WF) {
        return this.projectOnPlaneToRef(FF, WF, new eF)
      }
      projectOnPlaneToRef(FF, WF, SF) {
        const CF = FF.normal,
          AF = FF.d,
          uF = gW.HC[0];
        this.subtractToRef(WF, uF), uF.normalize();
        const hF = eF.Dot(uF, CF);
        if (Math.abs(hF) < 1e-10) SF.DuF(1 / 0);
        else {
          const FF = -(eF.Dot(WF, CF) + AF) / hF,
            bW = uF.scaleInPlace(FF);
          WF.addToRef(bW, SF)
        }
        return SF
      }
      equals(FF) {
        return FF && this._x === FF._x && this._y === FF._y && this._z === FF._z
      }
      equalsWithEpsilon(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CF.c;
        return FF && (0, bW.WithinEpsilon)(this._x, FF._x, WF) && (0, bW.WithinEpsilon)(this._y, FF._y, WF) && (0, bW.WithinEpsilon)(this._z, FF._z, WF)
      }
      HeF(FF, WF, SF) {
        return this._x === FF && this._y === WF && this._z === SF
      }
      multiplyInPlace(FF) {
        return this._x *= FF._x, this._y *= FF._y, this._z *= FF._z, this._isDirty = !0, this
      }
      multiply(FF) {
        return this.multiplyByFloats(FF._x, FF._y, FF._z)
      }
      multiplyToRef(FF, WF) {
        return WF._x = this._x * FF._x, WF._y = this._y * FF._y, WF._z = this._z * FF._z, WF._isDirty = !0, WF
      }
      multiplyByFloats(FF, WF, SF) {
        return new eF(this._x * FF, this._y * WF, this._z * SF)
      }
      divide(FF) {
        return new eF(this._x / FF._x, this._y / FF._y, this._z / FF._z)
      }
      divideToRef(FF, WF) {
        return WF._x = this._x / FF._x, WF._y = this._y / FF._y, WF._z = this._z / FF._z, WF._isDirty = !0, WF
      }
      divideInPlace(FF) {
        return this._x = this._x / FF._x, this._y = this._y / FF._y, this._z = this._z / FF._z, this._isDirty = !0, this
      }
      minimizeInPlace(FF) {
        return this.minimizeInPlaceFromFloats(FF._x, FF._y, FF._z)
      }
      maximizeInPlace(FF) {
        return this.maximizeInPlaceFromFloats(FF._x, FF._y, FF._z)
      }
      minimizeInPlaceFromFloats(FF, WF, SF) {
        return FF < this._x && (this.x = FF), WF < this._y && (this.y = WF), SF < this._z && (this.z = SF), this
      }
      maximizeInPlaceFromFloats(FF, WF, SF) {
        return FF > this._x && (this.x = FF), WF > this._y && (this.y = WF), SF > this._z && (this.z = SF), this
      }
      isNonUniformWithinEpsilon(FF) {
        const WF = Math.abs(this._x),
          SF = Math.abs(this._y);
        if (!(0, bW.WithinEpsilon)(WF, SF, FF)) return !0;
        const CF = Math.abs(this._z);
        return !(0, bW.WithinEpsilon)(WF, CF, FF) || !(0, bW.WithinEpsilon)(SF, CF, FF)
      }
      get isNonUniform() {
        const FF = Math.abs(this._x);
        if (FF !== Math.abs(this._y)) return !0;
        return FF !== Math.abs(this._z)
      }
      floorToRef(FF) {
        return FF._x = Math.floor(this._x), FF._y = Math.floor(this._y), FF._z = Math.floor(this._z), FF._isDirty = !0, FF
      }
      floor() {
        return new eF(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(FF) {
        return FF._x = this._x - Math.floor(this._x), FF._y = this._y - Math.floor(this._y), FF._z = this._z - Math.floor(this._z), FF._isDirty = !0, FF
      }
      fract() {
        return new eF(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(FF) {
        if ("xyz" === (FF = FF.toLowerCase())) return this;
        const WF = gW.HC[0].fdF(this);
        return this.x = WF[FF[0]], this.y = WF[FF[1]], this.z = WF[FF[2]], this
      }
      rotateByQuaternionToRef(FF, WF) {
        return FF.toRotationMatrix(gW.Matrix[0]), eF.TransformCoordinatesToRef(this, gW.Matrix[0], WF), WF
      }
      rotateByQuaternionAroundPointToRef(FF, WF, SF) {
        return this.subtractToRef(WF, gW.HC[0]), gW.HC[0].rotateByQuaternionToRef(FF, gW.HC[0]), WF.addToRef(gW.HC[0], SF), SF
      }
      cross(FF) {
        return eF.CrossToRef(this, FF, new eF)
      }
      normalizeFromLength(FF) {
        return 0 === FF || 1 === FF ? this : this.scaleInPlace(1 / FF)
      }
      normalizeToNew() {
        return this.normalizeToRef(new eF)
      }
      normalizeToRef(FF) {
        const WF = this.length();
        return 0 === WF || 1 === WF ? (FF._x = this._x, FF._y = this._y, FF._z = this._z, FF._isDirty = !0, FF) : this.scaleToRef(1 / WF, FF)
      }
      clone() {
        return new eF(this._x, this._y, this._z)
      }
      fdF(FF) {
        return this.FhF(FF._x, FF._y, FF._z)
      }
      FhF(FF, WF, SF) {
        return this._x = FF, this._y = WF, this._z = SF, this._isDirty = !0, this
      }
      set(FF, WF, SF) {
        return this.FhF(FF, WF, SF)
      }
      DuF(FF) {
        return this._x = this._y = this._z = FF, this._isDirty = !0, this
      }
      static GetClipFactor(FF, WF, SF, CF) {
        const AF = eF.Dot(FF, SF);
        return (AF - CF) / (AF - eF.Dot(WF, SF))
      }
      static GetAngleBetweenVectors(FF, WF, SF) {
        const CF = FF.normalizeToRef(gW.HC[1]),
          AF = WF.normalizeToRef(gW.HC[2]);
        let uF = eF.Dot(CF, AF);
        uF = (0, bW.Clamp)(uF, -1, 1);
        const hF = Math.acos(uF),
          dF = gW.HC[3];
        return eF.CrossToRef(CF, AF, dF), eF.Dot(dF, SF) > 0 ? isNaN(hF) ? 0 : hF : isNaN(hF) ? -Math.PI : -Math.acos(uF)
      }
      static GetAngleBetweenVectorsOnPlane(FF, WF, SF) {
        gW.HC[0].fdF(FF);
        const CF = gW.HC[0];
        gW.HC[1].fdF(WF);
        const AF = gW.HC[1];
        gW.HC[2].fdF(SF);
        const uF = gW.HC[2],
          hF = gW.HC[3],
          dF = gW.HC[4];
        CF.normalize(), AF.normalize(), uF.normalize(), eF.CrossToRef(uF, CF, hF), eF.CrossToRef(hF, uF, dF);
        const PF = Math.atan2(eF.Dot(AF, hF), eF.Dot(AF, dF));
        return (0, bW.NormalizeRadians)(PF)
      }
      static PitchYawRollToMoveBetweenPointsToRef(FF, WF, SF) {
        const CF = tW.HC[0];
        return WF.subtractToRef(FF, CF), SF._y = Math.atan2(CF.x, CF.z) || 0, SF._x = Math.atan2(Math.sqrt(CF.x ** 2 + CF.z ** 2), CF.y) || 0, SF._z = 0, SF._isDirty = !0, SF
      }
      static PitchYawRollToMoveBetweenPoints(FF, WF) {
        const SF = eF.Zero();
        return eF.PitchYawRollToMoveBetweenPointsToRef(FF, WF, SF)
      }
      static SlerpToRef(FF, WF, SF, AF) {
        SF = (0, bW.Clamp)(SF, 0, 1);
        const uF = gW.HC[0],
          hF = gW.HC[1];
        uF.fdF(FF);
        const dF = uF.length();
        uF.normalizeFromLength(dF), hF.fdF(WF);
        const PF = hF.length();
        hF.normalizeFromLength(PF);
        const RF = eF.Dot(uF, hF);
        let iW, EF;
        if (RF < 1 - CF.c) {
          const FF = Math.acos(RF),
            WF = 1 / Math.sin(FF);
          iW = Math.sin((1 - SF) * FF) * WF, EF = Math.sin(SF * FF) * WF
        } else iW = 1 - SF, EF = SF;
        return uF.scaleInPlace(iW), hF.scaleInPlace(EF), AF.fdF(uF).addInPlace(hF), AF.scaleInPlace((0, bW.Lerp)(dF, PF, SF)), AF
      }
      static SmoothToRef(FF, WF, SF, CF, AF) {
        return eF.SlerpToRef(FF, WF, 0 === CF ? 1 : SF / CF, AF), AF
      }
      static FromArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new eF(FF[WF], FF[WF + 1], FF[WF + 2])
      }
      static FromFloatArray(FF, WF) {
        return eF.FromArray(FF, WF)
      }
      static FromArrayToRef(FF, WF, SF) {
        return SF._x = FF[WF], SF._y = FF[WF + 1], SF._z = FF[WF + 2], SF._isDirty = !0, SF
      }
      static FromFloatArrayToRef(FF, WF, SF) {
        return eF.FromArrayToRef(FF, WF, SF)
      }
      static FromFloatsToRef(FF, WF, SF, CF) {
        return CF.FhF(FF, WF, SF), CF
      }
      static Zero() {
        return new eF(0, 0, 0)
      }
      static One() {
        return new eF(1, 1, 1)
      }
      static Up() {
        return new eF(0, 1, 0)
      }
      static get UpReadOnly() {
        return eF._UpReadOnly
      }
      static get DownReadOnly() {
        return eF._DownReadOnly
      }
      static get RightReadOnly() {
        return eF._RightReadOnly
      }
      static get LeftReadOnly() {
        return eF._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return eF._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return eF._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return eF._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return eF._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return eF._ZeroReadOnly
      }
      static get OneReadOnly() {
        return eF._OneReadOnly
      }
      static Down() {
        return new eF(0, -1, 0)
      }
      static Forward() {
        return new eF(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new eF(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new eF(1, 0, 0)
      }
      static Left() {
        return new eF(-1, 0, 0)
      }
      static Random() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new eF((0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF))
      }
      static RandomToRef() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).FhF((0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF))
      }
      static TransformCoordinates(FF, WF) {
        const SF = eF.Zero();
        return eF.TransformCoordinatesToRef(FF, WF, SF), SF
      }
      static TransformCoordinatesToRef(FF, WF, SF) {
        return eF.TransformCoordinatesFromFloatsToRef(FF._x, FF._y, FF._z, WF, SF), SF
      }
      static TransformCoordinatesFromFloatsToRef(FF, WF, SF, CF, AF) {
        const uF = CF.m,
          hF = FF * uF[0] + WF * uF[4] + SF * uF[8] + uF[12],
          bW = FF * uF[1] + WF * uF[5] + SF * uF[9] + uF[13],
          dF = FF * uF[2] + WF * uF[6] + SF * uF[10] + uF[14],
          PF = 1 / (FF * uF[3] + WF * uF[7] + SF * uF[11] + uF[15]);
        return AF._x = hF * PF, AF._y = bW * PF, AF._z = dF * PF, AF._isDirty = !0, AF
      }
      static TransformNormal(FF, WF) {
        const SF = eF.Zero();
        return eF.TransformNormalToRef(FF, WF, SF), SF
      }
      static TransformNormalToRef(FF, WF, SF) {
        return this.TransformNormalFromFloatsToRef(FF._x, FF._y, FF._z, WF, SF), SF
      }
      static TransformNormalFromFloatsToRef(FF, WF, SF, CF, AF) {
        const uF = CF.m;
        return AF._x = FF * uF[0] + WF * uF[4] + SF * uF[8], AF._y = FF * uF[1] + WF * uF[5] + SF * uF[9], AF._z = FF * uF[2] + WF * uF[6] + SF * uF[10], AF._isDirty = !0, AF
      }
      static CatmullRom(FF, WF, SF, CF, AF) {
        const uF = AF * AF,
          hF = AF * uF,
          bW = .5 * (2 * WF._x + (-FF._x + SF._x) * AF + (2 * FF._x - 5 * WF._x + 4 * SF._x - CF._x) * uF + (-FF._x + 3 * WF._x - 3 * SF._x + CF._x) * hF),
          dF = .5 * (2 * WF._y + (-FF._y + SF._y) * AF + (2 * FF._y - 5 * WF._y + 4 * SF._y - CF._y) * uF + (-FF._y + 3 * WF._y - 3 * SF._y + CF._y) * hF),
          PF = .5 * (2 * WF._z + (-FF._z + SF._z) * AF + (2 * FF._z - 5 * WF._z + 4 * SF._z - CF._z) * uF + (-FF._z + 3 * WF._z - 3 * SF._z + CF._z) * hF);
        return new eF(bW, dF, PF)
      }
      static Clamp(FF, WF, SF) {
        const CF = new eF;
        return eF.ClampToRef(FF, WF, SF, CF), CF
      }
      static ClampToRef(FF, WF, SF, CF) {
        let AF = FF._x;
        AF = AF > SF._x ? SF._x : AF, AF = AF < WF._x ? WF._x : AF;
        let uF = FF._y;
        uF = uF > SF._y ? SF._y : uF, uF = uF < WF._y ? WF._y : uF;
        let hF = FF._z;
        return hF = hF > SF._z ? SF._z : hF, hF = hF < WF._z ? WF._z : hF, CF.FhF(AF, uF, hF), CF
      }
      static CheckExtends(FF, WF, SF) {
        WF.minimizeInPlace(FF), SF.maximizeInPlace(FF)
      }
      static Hermite(FF, WF, SF, CF, AF) {
        const uF = AF * AF,
          hF = AF * uF,
          bW = 2 * hF - 3 * uF + 1,
          dF = -2 * hF + 3 * uF,
          PF = hF - 2 * uF + AF,
          RF = hF - uF,
          iW = FF._x * bW + SF._x * dF + WF._x * PF + CF._x * RF,
          EF = FF._y * bW + SF._y * dF + WF._y * PF + CF._y * RF,
          QF = FF._z * bW + SF._z * dF + WF._z * PF + CF._z * RF;
        return new eF(iW, EF, QF)
      }
      static Hermite1stDerivative(FF, WF, SF, CF, AF) {
        const uF = new eF;
        return this.Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF), uF
      }
      static Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF) {
        const hF = AF * AF;
        return uF._x = 6 * (hF - AF) * FF._x + (3 * hF - 4 * AF + 1) * WF._x + 6 * (-hF + AF) * SF._x + (3 * hF - 2 * AF) * CF._x, uF._y = 6 * (hF - AF) * FF._y + (3 * hF - 4 * AF + 1) * WF._y + 6 * (-hF + AF) * SF._y + (3 * hF - 2 * AF) * CF._y, uF._z = 6 * (hF - AF) * FF._z + (3 * hF - 4 * AF + 1) * WF._z + 6 * (-hF + AF) * SF._z + (3 * hF - 2 * AF) * CF._z, uF._isDirty = !0, uF
      }
      static Lerp(FF, WF, SF) {
        const CF = new eF(0, 0, 0);
        return eF.LerpToRef(FF, WF, SF, CF), CF
      }
      static LerpToRef(FF, WF, SF, CF) {
        return CF._x = FF._x + (WF._x - FF._x) * SF, CF._y = FF._y + (WF._y - FF._y) * SF, CF._z = FF._z + (WF._z - FF._z) * SF, CF._isDirty = !0, CF
      }
      static Dot(FF, WF) {
        return FF._x * WF._x + FF._y * WF._y + FF._z * WF._z
      }
      dot(FF) {
        return this._x * FF._x + this._y * FF._y + this._z * FF._z
      }
      static Cross(FF, WF) {
        const SF = new eF;
        return eF.CrossToRef(FF, WF, SF), SF
      }
      static CrossToRef(FF, WF, SF) {
        const CF = FF._y * WF._z - FF._z * WF._y,
          AF = FF._z * WF._x - FF._x * WF._z,
          uF = FF._x * WF._y - FF._y * WF._x;
        return SF.FhF(CF, AF, uF), SF
      }
      static Normalize(FF) {
        const WF = eF.Zero();
        return eF.NormalizeToRef(FF, WF), WF
      }
      static NormalizeToRef(FF, WF) {
        return FF.normalizeToRef(WF), WF
      }
      static Project(FF, WF, SF, CF) {
        const AF = new eF;
        return eF.ProjectToRef(FF, WF, SF, CF, AF), AF
      }
      static ProjectToRef(FF, WF, SF, CF, AF) {
        const uF = CF.width,
          bW = CF.height,
          dF = CF.x,
          PF = CF.y,
          RF = gW.Matrix[1],
          iW = hF.e.LastCreatedEngine?.isNDCHalfZRange,
          EF = iW ? 1 : .5,
          QF = iW ? 0 : .5;
        rW.FromValuesToRef(uF / 2, 0, 0, 0, 0, -bW / 2, 0, 0, 0, 0, EF, 0, dF + uF / 2, bW / 2 + PF, QF, 1, RF);
        const tW = gW.Matrix[0];
        return WF.multiplyToRef(SF, tW), tW.multiplyToRef(RF, tW), eF.TransformCoordinatesToRef(FF, tW, AF), AF
      }
      static Reflect(FF, WF) {
        return this.ReflectToRef(FF, WF, new eF)
      }
      static ReflectToRef(FF, WF, SF) {
        const CF = tW.HC[0];
        return CF.fdF(WF).scaleInPlace(2 * eF.Dot(FF, WF)), SF.fdF(FF).IPF(CF)
      }
      static UnprojectFromTransform(FF, WF, SF, CF, AF) {
        return this.Unproject(FF, WF, SF, CF, AF, rW.IdentityReadOnly)
      }
      static Unproject(FF, WF, SF, CF, AF, uF) {
        const hF = new eF;
        return eF.UnprojectToRef(FF, WF, SF, CF, AF, uF, hF), hF
      }
      static UnprojectToRef(FF, WF, SF, CF, AF, uF, hF) {
        return eF.UnprojectFloatsToRef(FF._x, FF._y, FF._z, WF, SF, CF, AF, uF, hF), hF
      }
      static UnprojectFloatsToRef(FF, WF, SF, CF, AF, uF, bW, dF, PF) {
        const RF = gW.Matrix[0];
        uF.multiplyToRef(bW, RF), RF.multiplyToRef(dF, RF), RF.invert();
        const iW = gW.HC[0];
        return iW.x = FF / CF * 2 - 1, iW.y = -(WF / AF * 2 - 1), hF.e.LastCreatedEngine?.isNDCHalfZRange ? iW.z = SF : iW.z = 2 * SF - 1, eF.TransformCoordinatesToRef(iW, RF, PF), PF
      }
      static Minimize(FF, WF) {
        const SF = new eF;
        return SF.fdF(FF), SF.minimizeInPlace(WF), SF
      }
      static Maximize(FF, WF) {
        const SF = new eF;
        return SF.fdF(FF), SF.maximizeInPlace(WF), SF
      }
      static Distance(FF, WF) {
        return Math.sqrt(eF.DistanceSquared(FF, WF))
      }
      static DistanceSquared(FF, WF) {
        const SF = FF._x - WF._x,
          CF = FF._y - WF._y,
          AF = FF._z - WF._z;
        return SF * SF + CF * CF + AF * AF
      }
      static ProjectOnTriangleToRef(FF, WF, SF, AF, uF) {
        const hF = gW.HC[0],
          dF = gW.HC[1],
          PF = gW.HC[2],
          RF = gW.HC[3],
          iW = gW.HC[4];
        SF.subtractToRef(WF, hF), AF.subtractToRef(WF, dF), AF.subtractToRef(SF, PF);
        const EF = hF.length(),
          QF = dF.length(),
          rW = PF.length();
        if (EF < CF.c || QF < CF.c || rW < CF.c) return uF.fdF(WF), eF.Distance(FF, WF);
        FF.subtractToRef(WF, iW), eF.CrossToRef(hF, dF, RF);
        const tW = RF.length();
        if (tW < CF.c) return uF.fdF(WF), eF.Distance(FF, WF);
        RF.normalizeFromLength(tW);
        let TF = iW.length();
        if (TF < CF.c) return uF.fdF(WF), 0;
        iW.normalizeFromLength(TF);
        const aW = eF.Dot(RF, iW),
          kW = gW.HC[5],
          qW = gW.HC[6];
        kW.fdF(RF).scaleInPlace(-TF * aW), qW.fdF(FF).addInPlace(kW);
        const VF = gW.HC[4],
          NF = gW.HC[5],
          DF = gW.HC[7],
          LF = gW.HC[8];
        VF.fdF(hF).scaleInPlace(1 / EF), LF.fdF(dF).scaleInPlace(1 / QF), VF.addInPlace(LF).scaleInPlace(-1), NF.fdF(hF).scaleInPlace(-1 / EF), LF.fdF(PF).scaleInPlace(1 / rW), NF.addInPlace(LF).scaleInPlace(-1), DF.fdF(PF).scaleInPlace(-1 / rW), LF.fdF(dF).scaleInPlace(-1 / QF), DF.addInPlace(LF).scaleInPlace(-1);
        const mW = gW.HC[9];
        let OF;
        mW.fdF(qW).IPF(WF), eF.CrossToRef(VF, mW, LF), OF = eF.Dot(LF, RF);
        const xW = OF;
        mW.fdF(qW).IPF(SF), eF.CrossToRef(NF, mW, LF), OF = eF.Dot(LF, RF);
        const ZF = OF;
        mW.fdF(qW).IPF(AF), eF.CrossToRef(DF, mW, LF), OF = eF.Dot(LF, RF);
        const oF = OF,
          YF = gW.HC[10];
        let MF, cW;
        xW > 0 && ZF < 0 ? (YF.fdF(hF), MF = WF, cW = SF) : ZF > 0 && oF < 0 ? (YF.fdF(PF), MF = SF, cW = AF) : (YF.fdF(dF).scaleInPlace(-1), MF = AF, cW = WF);
        const GF = gW.HC[9],
          zW = gW.HC[4];
        MF.subtractToRef(qW, LF), cW.subtractToRef(qW, GF), eF.CrossToRef(LF, GF, zW);
        if (!(eF.Dot(zW, RF) < 0)) return uF.fdF(qW), Math.abs(TF * aW);
        const IF = gW.HC[5];
        eF.CrossToRef(YF, zW, IF), IF.normalize();
        const fF = gW.HC[9];
        fF.fdF(MF).IPF(qW);
        const yW = fF.length();
        if (yW < CF.c) return uF.fdF(MF), eF.Distance(FF, MF);
        fF.normalizeFromLength(yW);
        const sF = eF.Dot(IF, fF),
          nF = gW.HC[7];
        nF.fdF(qW).addInPlace(IF.scaleInPlace(yW * sF)), LF.fdF(nF).IPF(MF), TF = YF.length(), YF.normalizeFromLength(TF);
        let HF = eF.Dot(LF, YF) / Math.max(TF, CF.c);
        return HF = (0, bW.Clamp)(HF, 0, 1), nF.fdF(MF).addInPlace(YF.scaleInPlace(HF * TF)), uF.fdF(nF), eF.Distance(FF, nF)
      }
      static Center(FF, WF) {
        return eF.CenterToRef(FF, WF, eF.Zero())
      }
      static CenterToRef(FF, WF, SF) {
        return SF.FhF((FF._x + WF._x) / 2, (FF._y + WF._y) / 2, (FF._z + WF._z) / 2)
      }
      static RotationFromAxis(FF, WF, SF) {
        const CF = new eF;
        return eF.RotationFromAxisToRef(FF, WF, SF, CF), CF
      }
      static RotationFromAxisToRef(FF, WF, SF, CF) {
        const AF = gW.Quaternion[0];
        return QF.RotationQuaternionFromAxisToRef(FF, WF, SF, AF), AF.toEulerAnglesToRef(CF), CF
      }
    }
    eF._V8PerformanceHack = new eF(.5, .5, .5), eF._UpReadOnly = eF.Up(), eF._DownReadOnly = eF.Down(), eF._LeftHandedForwardReadOnly = eF.Forward(!1), eF._RightHandedForwardReadOnly = eF.Forward(!0), eF._LeftHandedBackwardReadOnly = eF.Backward(!1), eF._RightHandedBackwardReadOnly = eF.Backward(!0), eF._RightReadOnly = eF.Right(), eF._LeftReadOnly = eF.Left(), eF._ZeroReadOnly = eF.Zero(), eF._OneReadOnly = eF.One();
    class EF {
      get x() {
        return this._x
      }
      set x(FF) {
        this._x = FF, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(FF) {
        this._y = FF, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(FF) {
        this._z = FF, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(FF) {
        this._w = FF, this._isDirty = !0
      }
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = FF, this._y = WF, this._z = SF, this._w = CF
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let FF = RF(this._x);
        return FF = 397 * FF ^ RF(this._y), FF = 397 * FF ^ RF(this._z), FF = 397 * FF ^ RF(this._w), FF
      }
      kRF() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(FF, WF) {
        return void 0 === WF && (WF = 0), FF[WF] = this._x, FF[WF + 1] = this._y, FF[WF + 2] = this._z, FF[WF + 3] = this._w, this
      }
      udF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return EF.FromArrayToRef(FF, WF, this), this
      }
      addInPlace(FF) {
        return this.x += FF._x, this.y += FF._y, this.z += FF._z, this.w += FF._w, this
      }
      addInPlaceFromFloats(FF, WF, SF, CF) {
        return this.x += FF, this.y += WF, this.z += SF, this.w += CF, this
      }
      add(FF) {
        return new EF(this._x + FF.x, this._y + FF.y, this._z + FF.z, this._w + FF.w)
      }
      addToRef(FF, WF) {
        return WF.x = this._x + FF.x, WF.y = this._y + FF.y, WF.z = this._z + FF.z, WF.w = this._w + FF.w, WF
      }
      IPF(FF) {
        return this.x -= FF.x, this.y -= FF.y, this.z -= FF.z, this.w -= FF.w, this
      }
      subtract(FF) {
        return new EF(this._x - FF.x, this._y - FF.y, this._z - FF.z, this._w - FF.w)
      }
      subtractToRef(FF, WF) {
        return WF.x = this._x - FF.x, WF.y = this._y - FF.y, WF.z = this._z - FF.z, WF.w = this._w - FF.w, WF
      }
      subtractFromFloats(FF, WF, SF, CF) {
        return new EF(this._x - FF, this._y - WF, this._z - SF, this._w - CF)
      }
      subtractFromFloatsToRef(FF, WF, SF, CF, AF) {
        return AF.x = this._x - FF, AF.y = this._y - WF, AF.z = this._z - SF, AF.w = this._w - CF, AF
      }
      Fh() {
        return new EF(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(FF) {
        return FF.x = -this._x, FF.y = -this._y, FF.z = -this._z, FF.w = -this._w, FF
      }
      scaleInPlace(FF) {
        return this.x *= FF, this.y *= FF, this.z *= FF, this.w *= FF, this
      }
      scale(FF) {
        return new EF(this._x * FF, this._y * FF, this._z * FF, this._w * FF)
      }
      scaleToRef(FF, WF) {
        return WF.x = this._x * FF, WF.y = this._y * FF, WF.z = this._z * FF, WF.w = this._w * FF, WF
      }
      scaleAndAddToRef(FF, WF) {
        return WF.x += this._x * FF, WF.y += this._y * FF, WF.z += this._z * FF, WF.w += this._w * FF, WF
      }
      equals(FF) {
        return FF && this._x === FF.x && this._y === FF.y && this._z === FF.z && this._w === FF.w
      }
      equalsWithEpsilon(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CF.c;
        return FF && (0, bW.WithinEpsilon)(this._x, FF.x, WF) && (0, bW.WithinEpsilon)(this._y, FF.y, WF) && (0, bW.WithinEpsilon)(this._z, FF.z, WF) && (0, bW.WithinEpsilon)(this._w, FF.w, WF)
      }
      HeF(FF, WF, SF, CF) {
        return this._x === FF && this._y === WF && this._z === SF && this._w === CF
      }
      multiplyInPlace(FF) {
        return this.x *= FF.x, this.y *= FF.y, this.z *= FF.z, this.w *= FF.w, this
      }
      multiply(FF) {
        return new EF(this._x * FF.x, this._y * FF.y, this._z * FF.z, this._w * FF.w)
      }
      multiplyToRef(FF, WF) {
        return WF.x = this._x * FF.x, WF.y = this._y * FF.y, WF.z = this._z * FF.z, WF.w = this._w * FF.w, WF
      }
      multiplyByFloats(FF, WF, SF, CF) {
        return new EF(this._x * FF, this._y * WF, this._z * SF, this._w * CF)
      }
      divide(FF) {
        return new EF(this._x / FF.x, this._y / FF.y, this._z / FF.z, this._w / FF.w)
      }
      divideToRef(FF, WF) {
        return WF.x = this._x / FF.x, WF.y = this._y / FF.y, WF.z = this._z / FF.z, WF.w = this._w / FF.w, WF
      }
      divideInPlace(FF) {
        return this.divideToRef(FF, this)
      }
      minimizeInPlace(FF) {
        return FF.x < this._x && (this.x = FF.x), FF.y < this._y && (this.y = FF.y), FF.z < this._z && (this.z = FF.z), FF.w < this._w && (this.w = FF.w), this
      }
      maximizeInPlace(FF) {
        return FF.x > this._x && (this.x = FF.x), FF.y > this._y && (this.y = FF.y), FF.z > this._z && (this.z = FF.z), FF.w > this._w && (this.w = FF.w), this
      }
      minimizeInPlaceFromFloats(FF, WF, SF, CF) {
        return this.x = Math.min(FF, this._x), this.y = Math.min(WF, this._y), this.z = Math.min(SF, this._z), this.w = Math.min(CF, this._w), this
      }
      maximizeInPlaceFromFloats(FF, WF, SF, CF) {
        return this.x = Math.max(FF, this._x), this.y = Math.max(WF, this._y), this.z = Math.max(SF, this._z), this.w = Math.max(CF, this._w), this
      }
      floorToRef(FF) {
        return FF.x = Math.floor(this._x), FF.y = Math.floor(this._y), FF.z = Math.floor(this._z), FF.w = Math.floor(this._w), FF
      }
      floor() {
        return new EF(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(FF) {
        return FF.x = this._x - Math.floor(this._x), FF.y = this._y - Math.floor(this._y), FF.z = this._z - Math.floor(this._z), FF.w = this._w - Math.floor(this._w), FF
      }
      fract() {
        return new EF(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(FF) {
        return 0 === FF || 1 === FF ? this : this.scaleInPlace(1 / FF)
      }
      normalizeToNew() {
        return this.normalizeToRef(new EF)
      }
      normalizeToRef(FF) {
        const WF = this.length();
        return 0 === WF || 1 === WF ? (FF.x = this._x, FF.y = this._y, FF.z = this._z, FF.w = this._w, FF) : this.scaleToRef(1 / WF, FF)
      }
      toVector3() {
        return new eF(this._x, this._y, this._z)
      }
      clone() {
        return new EF(this._x, this._y, this._z, this._w)
      }
      fdF(FF) {
        return this.x = FF.x, this.y = FF.y, this.z = FF.z, this.w = FF.w, this
      }
      FhF(FF, WF, SF, CF) {
        return this.x = FF, this.y = WF, this.z = SF, this.w = CF, this
      }
      set(FF, WF, SF, CF) {
        return this.FhF(FF, WF, SF, CF)
      }
      DuF(FF) {
        return this.x = this.y = this.z = this.w = FF, this
      }
      dot(FF) {
        return this._x * FF.x + this._y * FF.y + this._z * FF.z + this._w * FF.w
      }
      static FromArray(FF, WF) {
        return WF || (WF = 0), new EF(FF[WF], FF[WF + 1], FF[WF + 2], FF[WF + 3])
      }
      static FromArrayToRef(FF, WF, SF) {
        return SF.x = FF[WF], SF.y = FF[WF + 1], SF.z = FF[WF + 2], SF.w = FF[WF + 3], SF
      }
      static FromFloatArrayToRef(FF, WF, SF) {
        return EF.FromArrayToRef(FF, WF, SF), SF
      }
      static FromFloatsToRef(FF, WF, SF, CF, AF) {
        return AF.x = FF, AF.y = WF, AF.z = SF, AF.w = CF, AF
      }
      static Zero() {
        return new EF(0, 0, 0, 0)
      }
      static One() {
        return new EF(1, 1, 1, 1)
      }
      static Random() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new EF((0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF))
      }
      static RandomToRef() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        return SF.x = (0, bW.RandomRange)(FF, WF), SF.y = (0, bW.RandomRange)(FF, WF), SF.z = (0, bW.RandomRange)(FF, WF), SF.w = (0, bW.RandomRange)(FF, WF), SF
      }
      static Clamp(FF, WF, SF) {
        return EF.ClampToRef(FF, WF, SF, new EF)
      }
      static ClampToRef(FF, WF, SF, CF) {
        return CF.x = (0, bW.Clamp)(FF.x, WF.x, SF.x), CF.y = (0, bW.Clamp)(FF.y, WF.y, SF.y), CF.z = (0, bW.Clamp)(FF.z, WF.z, SF.z), CF.w = (0, bW.Clamp)(FF.w, WF.w, SF.w), CF
      }
      static CheckExtends(FF, WF, SF) {
        WF.minimizeInPlace(FF), SF.maximizeInPlace(FF)
      }
      static get ZeroReadOnly() {
        return EF._ZeroReadOnly
      }
      static Normalize(FF) {
        return EF.NormalizeToRef(FF, new EF)
      }
      static NormalizeToRef(FF, WF) {
        return FF.normalizeToRef(WF), WF
      }
      static Minimize(FF, WF) {
        const SF = new EF;
        return SF.fdF(FF), SF.minimizeInPlace(WF), SF
      }
      static Maximize(FF, WF) {
        const SF = new EF;
        return SF.fdF(FF), SF.maximizeInPlace(WF), SF
      }
      static Distance(FF, WF) {
        return Math.sqrt(EF.DistanceSquared(FF, WF))
      }
      static DistanceSquared(FF, WF) {
        const SF = FF.x - WF.x,
          CF = FF.y - WF.y,
          AF = FF.z - WF.z,
          uF = FF.w - WF.w;
        return SF * SF + CF * CF + AF * AF + uF * uF
      }
      static Center(FF, WF) {
        return EF.CenterToRef(FF, WF, new EF)
      }
      static CenterToRef(FF, WF, SF) {
        return SF.x = (FF.x + WF.x) / 2, SF.y = (FF.y + WF.y) / 2, SF.z = (FF.z + WF.z) / 2, SF.w = (FF.w + WF.w) / 2, SF
      }
      static TransformCoordinates(FF, WF) {
        return EF.TransformCoordinatesToRef(FF, WF, new EF)
      }
      static TransformCoordinatesToRef(FF, WF, SF) {
        return EF.TransformCoordinatesFromFloatsToRef(FF._x, FF._y, FF._z, WF, SF), SF
      }
      static TransformCoordinatesFromFloatsToRef(FF, WF, SF, CF, AF) {
        const uF = CF.m,
          hF = FF * uF[0] + WF * uF[4] + SF * uF[8] + uF[12],
          bW = FF * uF[1] + WF * uF[5] + SF * uF[9] + uF[13],
          dF = FF * uF[2] + WF * uF[6] + SF * uF[10] + uF[14],
          PF = FF * uF[3] + WF * uF[7] + SF * uF[11] + uF[15];
        return AF.x = hF, AF.y = bW, AF.z = dF, AF.w = PF, AF
      }
      static TransformNormal(FF, WF) {
        return EF.TransformNormalToRef(FF, WF, new EF)
      }
      static TransformNormalToRef(FF, WF, SF) {
        const CF = WF.m,
          AF = FF.x * CF[0] + FF.y * CF[4] + FF.z * CF[8],
          uF = FF.x * CF[1] + FF.y * CF[5] + FF.z * CF[9],
          hF = FF.x * CF[2] + FF.y * CF[6] + FF.z * CF[10];
        return SF.x = AF, SF.y = uF, SF.z = hF, SF.w = FF.w, SF
      }
      static TransformNormalFromFloatsToRef(FF, WF, SF, CF, AF, uF) {
        const hF = AF.m;
        return uF.x = FF * hF[0] + WF * hF[4] + SF * hF[8], uF.y = FF * hF[1] + WF * hF[5] + SF * hF[9], uF.z = FF * hF[2] + WF * hF[6] + SF * hF[10], uF.w = CF, uF
      }
      static FromVector3(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new EF(FF._x, FF._y, FF._z, WF)
      }
      static Dot(FF, WF) {
        return FF.x * WF.x + FF.y * WF.y + FF.z * WF.z + FF.w * WF.w
      }
    }
    EF._V8PerformanceHack = new EF(.5, .5, .5, .5), EF._ZeroReadOnly = EF.Zero();
    class QF {
      get x() {
        return this._x
      }
      set x(FF) {
        this._x = FF, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(FF) {
        this._y = FF, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(FF) {
        this._z = FF, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(FF) {
        this._w = FF, this._isDirty = !0
      }
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = FF, this._y = WF, this._z = SF, this._w = CF
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let FF = RF(this._x);
        return FF = 397 * FF ^ RF(this._y), FF = 397 * FF ^ RF(this._z), FF = 397 * FF ^ RF(this._w), FF
      }
      kRF() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return FF[WF] = this._x, FF[WF + 1] = this._y, FF[WF + 2] = this._z, FF[WF + 3] = this._w, this
      }
      udF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QF.FromArrayToRef(FF, WF, this)
      }
      equals(FF) {
        return FF && this._x === FF._x && this._y === FF._y && this._z === FF._z && this._w === FF._w
      }
      equalsWithEpsilon(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CF.c;
        return FF && (0, bW.WithinEpsilon)(this._x, FF._x, WF) && (0, bW.WithinEpsilon)(this._y, FF._y, WF) && (0, bW.WithinEpsilon)(this._z, FF._z, WF) && (0, bW.WithinEpsilon)(this._w, FF._w, WF)
      }
      isApprox(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : CF.c;
        return FF && ((0, bW.WithinEpsilon)(this._x, FF._x, WF) && (0, bW.WithinEpsilon)(this._y, FF._y, WF) && (0, bW.WithinEpsilon)(this._z, FF._z, WF) && (0, bW.WithinEpsilon)(this._w, FF._w, WF) || (0, bW.WithinEpsilon)(this._x, -FF._x, WF) && (0, bW.WithinEpsilon)(this._y, -FF._y, WF) && (0, bW.WithinEpsilon)(this._z, -FF._z, WF) && (0, bW.WithinEpsilon)(this._w, -FF._w, WF))
      }
      clone() {
        return new QF(this._x, this._y, this._z, this._w)
      }
      fdF(FF) {
        return this._x = FF._x, this._y = FF._y, this._z = FF._z, this._w = FF._w, this._isDirty = !0, this
      }
      FhF(FF, WF, SF, CF) {
        return this._x = FF, this._y = WF, this._z = SF, this._w = CF, this._isDirty = !0, this
      }
      set(FF, WF, SF, CF) {
        return this.FhF(FF, WF, SF, CF)
      }
      DuF(FF) {
        return this.FhF(FF, FF, FF, FF)
      }
      add(FF) {
        return new QF(this._x + FF._x, this._y + FF._y, this._z + FF._z, this._w + FF._w)
      }
      addInPlace(FF) {
        return this._x += FF._x, this._y += FF._y, this._z += FF._z, this._w += FF._w, this._isDirty = !0, this
      }
      addToRef(FF, WF) {
        return WF._x = this._x + FF._x, WF._y = this._y + FF._y, WF._z = this._z + FF._z, WF._w = this._w + FF._w, WF._isDirty = !0, WF
      }
      addInPlaceFromFloats(FF, WF, SF, CF) {
        return this._x += FF, this._y += WF, this._z += SF, this._w += CF, this._isDirty = !0, this
      }
      subtractToRef(FF, WF) {
        return WF._x = this._x - FF._x, WF._y = this._y - FF._y, WF._z = this._z - FF._z, WF._w = this._w - FF._w, WF._isDirty = !0, WF
      }
      subtractFromFloats(FF, WF, SF, CF) {
        return this.subtractFromFloatsToRef(FF, WF, SF, CF, new QF)
      }
      subtractFromFloatsToRef(FF, WF, SF, CF, AF) {
        return AF._x = this._x - FF, AF._y = this._y - WF, AF._z = this._z - SF, AF._w = this._w - CF, AF._isDirty = !0, AF
      }
      subtract(FF) {
        return new QF(this._x - FF._x, this._y - FF._y, this._z - FF._z, this._w - FF._w)
      }
      IPF(FF) {
        return this._x -= FF._x, this._y -= FF._y, this._z -= FF._z, this._w -= FF._w, this._isDirty = !0, this
      }
      scale(FF) {
        return new QF(this._x * FF, this._y * FF, this._z * FF, this._w * FF)
      }
      scaleToRef(FF, WF) {
        return WF._x = this._x * FF, WF._y = this._y * FF, WF._z = this._z * FF, WF._w = this._w * FF, WF._isDirty = !0, WF
      }
      scaleInPlace(FF) {
        return this._x *= FF, this._y *= FF, this._z *= FF, this._w *= FF, this._isDirty = !0, this
      }
      scaleAndAddToRef(FF, WF) {
        return WF._x += this._x * FF, WF._y += this._y * FF, WF._z += this._z * FF, WF._w += this._w * FF, WF._isDirty = !0, WF
      }
      multiply(FF) {
        const WF = new QF(0, 0, 0, 1);
        return this.multiplyToRef(FF, WF), WF
      }
      multiplyToRef(FF, WF) {
        const SF = this._x * FF._w + this._y * FF._z - this._z * FF._y + this._w * FF._x,
          CF = -this._x * FF._z + this._y * FF._w + this._z * FF._x + this._w * FF._y,
          AF = this._x * FF._y - this._y * FF._x + this._z * FF._w + this._w * FF._z,
          uF = -this._x * FF._x - this._y * FF._y - this._z * FF._z + this._w * FF._w;
        return WF.FhF(SF, CF, AF, uF), WF
      }
      multiplyInPlace(FF) {
        return this.multiplyToRef(FF, this)
      }
      multiplyByFloats(FF, WF, SF, CF) {
        return this._x *= FF, this._y *= WF, this._z *= SF, this._w *= CF, this._isDirty = !0, this
      }
      divide(FF) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(FF, WF) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(FF) {
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
      Fh() {
        return this.negateToRef(new QF)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(FF) {
        return FF._x = -this._x, FF._y = -this._y, FF._z = -this._z, FF._w = -this._w, FF._isDirty = !0, FF
      }
      HeF(FF, WF, SF, CF) {
        return this._x === FF && this._y === WF && this._z === SF && this._w === CF
      }
      floorToRef(FF) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(FF) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(FF) {
        return FF.FhF(-this._x, -this._y, -this._z, this._w), FF
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new QF(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const FF = this.conjugate(),
          WF = this.lengthSquared();
        return 0 == WF || 1 == WF || FF.scaleInPlace(1 / WF), FF
      }
      invertInPlace() {
        this.conjugateInPlace();
        const FF = this.lengthSquared();
        return 0 == FF || 1 == FF || this.scaleInPlace(1 / FF), this
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
      normalizeFromLength(FF) {
        return 0 === FF || 1 === FF ? this : this.scaleInPlace(1 / FF)
      }
      normalizeToNew() {
        const FF = new QF(0, 0, 0, 1);
        return this.normalizeToRef(FF), FF
      }
      normalizeToRef(FF) {
        const WF = this.length();
        return 0 === WF || 1 === WF ? FF.FhF(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / WF, FF)
      }
      toEulerAngles() {
        const FF = eF.Zero();
        return this.toEulerAnglesToRef(FF), FF
      }
      toEulerAnglesToRef(FF) {
        const WF = this._z,
          SF = this._x,
          CF = this._y,
          AF = this._w,
          uF = CF * WF - SF * AF,
          hF = .4999999;
        if (uF < -hF) FF._y = 2 * Math.atan2(CF, AF), FF._x = Math.PI / 2, FF._z = 0, FF._isDirty = !0;
        else if (uF > hF) FF._y = 2 * Math.atan2(CF, AF), FF._x = -Math.PI / 2, FF._z = 0, FF._isDirty = !0;
        else {
          const hF = AF * AF,
            bW = WF * WF,
            dF = SF * SF,
            PF = CF * CF;
          FF._z = Math.atan2(2 * (SF * CF + WF * AF), -bW - dF + PF + hF), FF._x = Math.asin(-2 * uF), FF._y = Math.atan2(2 * (WF * SF + CF * AF), bW - dF - PF + hF), FF._isDirty = !0
        }
        return FF
      }
      toAlphaBetaGammaToRef(FF) {
        const WF = this._z,
          SF = this._x,
          CF = this._y,
          AF = this._w,
          uF = Math.sqrt(SF * SF + CF * CF),
          hF = Math.sqrt(WF * WF + AF * AF),
          bW = 2 * Math.atan2(uF, hF),
          dF = 2 * Math.atan2(WF, AF),
          PF = 2 * Math.atan2(CF, SF),
          RF = (dF + PF) / 2,
          iW = (dF - PF) / 2;
        return FF.set(iW, bW, RF), FF
      }
      toRotationMatrix(FF) {
        return rW.FromQuaternionToRef(this, FF), FF
      }
      fromRotationMatrix(FF) {
        return QF.FromRotationMatrixToRef(FF, this), this
      }
      dot(FF) {
        return this._x * FF._x + this._y * FF._y + this._z * FF._z + this._w * FF._w
      }
      toAxisAngle() {
        const FF = eF.Zero();
        return {
          axis: FF,
          angle: this.toAxisAngleToRef(FF)
        }
      }
      toAxisAngleToRef(FF) {
        let WF;
        const SF = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          CF = this._w;
        return SF > 0 ? (WF = 2 * Math.atan2(SF, CF), FF.set(this._x / SF, this._y / SF, this._z / SF)) : (WF = 0, FF.set(1, 0, 0)), WF
      }
      static FromRotationMatrix(FF) {
        const WF = new QF;
        return QF.FromRotationMatrixToRef(FF, WF), WF
      }
      static FromRotationMatrixToRef(FF, WF) {
        const SF = FF.m,
          CF = SF[0],
          AF = SF[4],
          uF = SF[8],
          hF = SF[1],
          bW = SF[5],
          dF = SF[9],
          PF = SF[2],
          RF = SF[6],
          iW = SF[10],
          eF = CF + bW + iW;
        let EF;
        return eF > 0 ? (EF = .5 / Math.sqrt(eF + 1), WF._w = .25 / EF, WF._x = (RF - dF) * EF, WF._y = (uF - PF) * EF, WF._z = (hF - AF) * EF, WF._isDirty = !0) : CF > bW && CF > iW ? (EF = 2 * Math.sqrt(1 + CF - bW - iW), WF._w = (RF - dF) / EF, WF._x = .25 * EF, WF._y = (AF + hF) / EF, WF._z = (uF + PF) / EF, WF._isDirty = !0) : bW > iW ? (EF = 2 * Math.sqrt(1 + bW - CF - iW), WF._w = (uF - PF) / EF, WF._x = (AF + hF) / EF, WF._y = .25 * EF, WF._z = (dF + RF) / EF, WF._isDirty = !0) : (EF = 2 * Math.sqrt(1 + iW - CF - bW), WF._w = (hF - AF) / EF, WF._x = (uF + PF) / EF, WF._y = (dF + RF) / EF, WF._z = .25 * EF, WF._isDirty = !0), WF
      }
      static Dot(FF, WF) {
        return FF._x * WF._x + FF._y * WF._y + FF._z * WF._z + FF._w * WF._w
      }
      static AreClose(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const CF = QF.Dot(FF, WF);
        return 1 - CF * CF <= SF
      }
      static SmoothToRef(FF, WF, SF, CF, AF) {
        let uF = 0 === CF ? 1 : SF / CF;
        return uF = (0, bW.Clamp)(uF, 0, 1), QF.SlerpToRef(FF, WF, uF, AF), AF
      }
      static Zero() {
        return new QF(0, 0, 0, 0)
      }
      static Inverse(FF) {
        return new QF(-FF._x, -FF._y, -FF._z, FF._w)
      }
      static InverseToRef(FF, WF) {
        return WF.set(-FF._x, -FF._y, -FF._z, FF._w), WF
      }
      static Identity() {
        return new QF(0, 0, 0, 1)
      }
      static IsIdentity(FF) {
        return FF && 0 === FF._x && 0 === FF._y && 0 === FF._z && 1 === FF._w
      }
      static RotationAxis(FF, WF) {
        return QF.RotationAxisToRef(FF, WF, new QF)
      }
      static RotationAxisToRef(FF, WF, SF) {
        SF._w = Math.cos(WF / 2);
        const CF = Math.sin(WF / 2) / FF.length();
        return SF._x = FF._x * CF, SF._y = FF._y * CF, SF._z = FF._z * CF, SF._isDirty = !0, SF
      }
      static FromArray(FF, WF) {
        return WF || (WF = 0), new QF(FF[WF], FF[WF + 1], FF[WF + 2], FF[WF + 3])
      }
      static FromArrayToRef(FF, WF, SF) {
        return SF._x = FF[WF], SF._y = FF[WF + 1], SF._z = FF[WF + 2], SF._w = FF[WF + 3], SF._isDirty = !0, SF
      }
      static FromFloatsToRef(FF, WF, SF, CF, AF) {
        return AF.FhF(FF, WF, SF, CF), AF
      }
      static FromEulerAngles(FF, WF, SF) {
        const CF = new QF;
        return QF.RotationYawPitchRollToRef(WF, FF, SF, CF), CF
      }
      static FromEulerAnglesToRef(FF, WF, SF, CF) {
        return QF.RotationYawPitchRollToRef(WF, FF, SF, CF), CF
      }
      static FromEulerVector(FF) {
        const WF = new QF;
        return QF.RotationYawPitchRollToRef(FF._y, FF._x, FF._z, WF), WF
      }
      static FromEulerVectorToRef(FF, WF) {
        return QF.RotationYawPitchRollToRef(FF._y, FF._x, FF._z, WF), WF
      }
      static FromUnitVectorsToRef(FF, WF, SF) {
        let AF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : CF.c;
        const uF = eF.Dot(FF, WF) + 1;
        return uF < AF ? Math.abs(FF.x) > Math.abs(FF.z) ? SF.set(-FF.y, FF.x, 0, 0) : SF.set(0, -FF.z, FF.y, 0) : (eF.CrossToRef(FF, WF, tW.HC[0]), SF.set(tW.HC[0].x, tW.HC[0].y, tW.HC[0].z, uF)), SF.normalize()
      }
      static RotationYawPitchRoll(FF, WF, SF) {
        const CF = new QF;
        return QF.RotationYawPitchRollToRef(FF, WF, SF, CF), CF
      }
      static RotationYawPitchRollToRef(FF, WF, SF, CF) {
        const AF = .5 * SF,
          uF = .5 * WF,
          hF = .5 * FF,
          bW = Math.sin(AF),
          dF = Math.cos(AF),
          PF = Math.sin(uF),
          RF = Math.cos(uF),
          iW = Math.sin(hF),
          eF = Math.cos(hF);
        return CF._x = eF * PF * dF + iW * RF * bW, CF._y = iW * RF * dF - eF * PF * bW, CF._z = eF * RF * bW - iW * PF * dF, CF._w = eF * RF * dF + iW * PF * bW, CF._isDirty = !0, CF
      }
      static RotationAlphaBetaGamma(FF, WF, SF) {
        const CF = new QF;
        return QF.RotationAlphaBetaGammaToRef(FF, WF, SF, CF), CF
      }
      static RotationAlphaBetaGammaToRef(FF, WF, SF, CF) {
        const AF = .5 * (SF + FF),
          uF = .5 * (SF - FF),
          hF = .5 * WF;
        return CF._x = Math.cos(uF) * Math.sin(hF), CF._y = Math.sin(uF) * Math.sin(hF), CF._z = Math.sin(AF) * Math.cos(hF), CF._w = Math.cos(AF) * Math.cos(hF), CF._isDirty = !0, CF
      }
      static RotationQuaternionFromAxis(FF, WF, SF) {
        const CF = new QF(0, 0, 0, 0);
        return QF.RotationQuaternionFromAxisToRef(FF, WF, SF, CF), CF
      }
      static RotationQuaternionFromAxisToRef(FF, WF, SF, CF) {
        const AF = gW.Matrix[0];
        return FF = FF.normalizeToRef(gW.HC[0]), WF = WF.normalizeToRef(gW.HC[1]), SF = SF.normalizeToRef(gW.HC[2]), rW.FromXYZAxesToRef(FF, WF, SF, AF), QF.FromRotationMatrixToRef(AF, CF), CF
      }
      static FromLookDirectionLH(FF, WF) {
        const SF = new QF;
        return QF.FromLookDirectionLHToRef(FF, WF, SF), SF
      }
      static FromLookDirectionLHToRef(FF, WF, SF) {
        const CF = gW.Matrix[0];
        return rW.LookDirectionLHToRef(FF, WF, CF), QF.FromRotationMatrixToRef(CF, SF), SF
      }
      static FromLookDirectionRH(FF, WF) {
        const SF = new QF;
        return QF.FromLookDirectionRHToRef(FF, WF, SF), SF
      }
      static FromLookDirectionRHToRef(FF, WF, SF) {
        const CF = gW.Matrix[0];
        return rW.LookDirectionRHToRef(FF, WF, CF), QF.FromRotationMatrixToRef(CF, SF)
      }
      static Slerp(FF, WF, SF) {
        const CF = QF.Identity();
        return QF.SlerpToRef(FF, WF, SF, CF), CF
      }
      static SlerpToRef(FF, WF, SF, CF) {
        let AF, uF, hF = FF._x * WF._x + FF._y * WF._y + FF._z * WF._z + FF._w * WF._w,
          bW = !1;
        if (hF < 0 && (bW = !0, hF = -hF), hF > .999999) uF = 1 - SF, AF = bW ? -SF : SF;
        else {
          const FF = Math.acos(hF),
            WF = 1 / Math.sin(FF);
          uF = Math.sin((1 - SF) * FF) * WF, AF = bW ? -Math.sin(SF * FF) * WF : Math.sin(SF * FF) * WF
        }
        return CF._x = uF * FF._x + AF * WF._x, CF._y = uF * FF._y + AF * WF._y, CF._z = uF * FF._z + AF * WF._z, CF._w = uF * FF._w + AF * WF._w, CF._isDirty = !0, CF
      }
      static Hermite(FF, WF, SF, CF, AF) {
        const uF = AF * AF,
          hF = AF * uF,
          bW = 2 * hF - 3 * uF + 1,
          dF = -2 * hF + 3 * uF,
          PF = hF - 2 * uF + AF,
          RF = hF - uF,
          iW = FF._x * bW + SF._x * dF + WF._x * PF + CF._x * RF,
          eF = FF._y * bW + SF._y * dF + WF._y * PF + CF._y * RF,
          EF = FF._z * bW + SF._z * dF + WF._z * PF + CF._z * RF,
          rW = FF._w * bW + SF._w * dF + WF._w * PF + CF._w * RF;
        return new QF(iW, eF, EF, rW)
      }
      static Hermite1stDerivative(FF, WF, SF, CF, AF) {
        const uF = new QF;
        return this.Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF), uF
      }
      static Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF) {
        const hF = AF * AF;
        return uF._x = 6 * (hF - AF) * FF._x + (3 * hF - 4 * AF + 1) * WF._x + 6 * (-hF + AF) * SF._x + (3 * hF - 2 * AF) * CF._x, uF._y = 6 * (hF - AF) * FF._y + (3 * hF - 4 * AF + 1) * WF._y + 6 * (-hF + AF) * SF._y + (3 * hF - 2 * AF) * CF._y, uF._z = 6 * (hF - AF) * FF._z + (3 * hF - 4 * AF + 1) * WF._z + 6 * (-hF + AF) * SF._z + (3 * hF - 2 * AF) * CF._z, uF._w = 6 * (hF - AF) * FF._w + (3 * hF - 4 * AF + 1) * WF._w + 6 * (-hF + AF) * SF._w + (3 * hF - 2 * AF) * CF._w, uF._isDirty = !0, uF
      }
      static Normalize(FF) {
        const WF = QF.Zero();
        return QF.NormalizeToRef(FF, WF), WF
      }
      static NormalizeToRef(FF, WF) {
        return FF.normalizeToRef(WF), WF
      }
      static Clamp(FF, WF, SF) {
        const CF = new QF;
        return QF.ClampToRef(FF, WF, SF, CF), CF
      }
      static ClampToRef(FF, WF, SF, CF) {
        return CF.FhF((0, bW.Clamp)(FF.x, WF.x, SF.x), (0, bW.Clamp)(FF.y, WF.y, SF.y), (0, bW.Clamp)(FF.z, WF.z, SF.z), (0, bW.Clamp)(FF.w, WF.w, SF.w))
      }
      static Random() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new QF((0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF))
      }
      static RandomToRef() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).FhF((0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF), (0, bW.RandomRange)(FF, WF))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(FF, WF) {
        return Math.sqrt(QF.DistanceSquared(FF, WF))
      }
      static DistanceSquared(FF, WF) {
        const SF = FF.x - WF.x,
          CF = FF.y - WF.y,
          AF = FF.z - WF.z,
          uF = FF.w - WF.w;
        return SF * SF + CF * CF + AF * AF + uF * uF
      }
      static Center(FF, WF) {
        return QF.CenterToRef(FF, WF, QF.Zero())
      }
      static CenterToRef(FF, WF, SF) {
        return SF.FhF((FF.x + WF.x) / 2, (FF.y + WF.y) / 2, (FF.z + WF.z) / 2, (FF.w + WF.w) / 2)
      }
    }
    QF._V8PerformanceHack = new QF(.5, .5, .5, .5);
    class rW {
      static get Use64Bits() {
        return uF.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = dF.m._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          CF = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = FF, this._isIdentity3x2 = FF || SF, this._isIdentityDirty = !this._isIdentity && WF, this._isIdentity3x2Dirty = !this._isIdentity3x2 && CF
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, uF.c.MatrixTrackPrecisionChange && uF.c.MatrixTrackedMatrices.push(this), this._m = new uF.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const FF = this._m;
          this._isIdentity = 1 === FF[0] && 0 === FF[1] && 0 === FF[2] && 0 === FF[3] && 0 === FF[4] && 1 === FF[5] && 0 === FF[6] && 0 === FF[7] && 0 === FF[8] && 0 === FF[9] && 1 === FF[10] && 0 === FF[11] && 0 === FF[12] && 0 === FF[13] && 0 === FF[14] && 1 === FF[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const FF = this._m,
          WF = FF[0],
          SF = FF[1],
          CF = FF[2],
          AF = FF[3],
          uF = FF[4],
          hF = FF[5],
          bW = FF[6],
          dF = FF[7],
          PF = FF[8],
          RF = FF[9],
          iW = FF[10],
          eF = FF[11],
          EF = FF[12],
          QF = FF[13],
          rW = FF[14],
          gW = FF[15],
          tW = iW * gW - rW * eF,
          TF = RF * gW - QF * eF,
          aW = RF * rW - QF * iW,
          kW = PF * gW - EF * eF,
          qW = PF * rW - iW * EF,
          VF = PF * QF - EF * RF;
        return WF * +(hF * tW - bW * TF + dF * aW) + SF * -(uF * tW - bW * kW + dF * qW) + CF * +(uF * TF - hF * kW + dF * VF) + AF * -(uF * aW - hF * qW + bW * VF)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!FF) return this._m;
        const SF = this._m;
        for (let CF = 0; CF < 16; CF++) FF[WF + CF] = SF[CF];
        return this
      }
      kRF() {
        return this._m
      }
      udF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rW.FromArrayToRef(FF, WF, this)
      }
      FhF() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        return rW.FromArrayToRef(WF, 0, this)
      }
      set() {
        const FF = this._m;
        for (let WF = 0; WF < 16; WF++) FF[WF] = WF < 0 || arguments.length <= WF ? void 0 : arguments[WF];
        return this.markAsUpdated(), this
      }
      DuF(FF) {
        const WF = this._m;
        for (let SF = 0; SF < 16; SF++) WF[SF] = FF;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return rW.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(FF) {
        const WF = new rW;
        return this.addToRef(FF, WF), WF
      }
      addToRef(FF, WF) {
        const SF = this._m,
          CF = WF._m,
          AF = FF.m;
        for (let uF = 0; uF < 16; uF++) CF[uF] = SF[uF] + AF[uF];
        return WF.markAsUpdated(), WF
      }
      addToSelf(FF) {
        const WF = this._m,
          SF = FF.m;
        return WF[0] += SF[0], WF[1] += SF[1], WF[2] += SF[2], WF[3] += SF[3], WF[4] += SF[4], WF[5] += SF[5], WF[6] += SF[6], WF[7] += SF[7], WF[8] += SF[8], WF[9] += SF[9], WF[10] += SF[10], WF[11] += SF[11], WF[12] += SF[12], WF[13] += SF[13], WF[14] += SF[14], WF[15] += SF[15], this.markAsUpdated(), this
      }
      addInPlace(FF) {
        const WF = this._m,
          SF = FF.m;
        for (let CF = 0; CF < 16; CF++) WF[CF] += SF[CF];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const FF = this._m;
        for (let WF = 0; WF < 16; WF++) FF[WF] += WF < 0 || arguments.length <= WF ? void 0 : arguments[WF];
        return this.markAsUpdated(), this
      }
      subtract(FF) {
        const WF = this._m,
          SF = FF.m;
        for (let CF = 0; CF < 16; CF++) WF[CF] -= SF[CF];
        return this.markAsUpdated(), this
      }
      subtractToRef(FF, WF) {
        const SF = this._m,
          CF = FF.m,
          AF = WF._m;
        for (let uF = 0; uF < 16; uF++) AF[uF] = SF[uF] - CF[uF];
        return WF.markAsUpdated(), WF
      }
      IPF(FF) {
        const WF = this._m,
          SF = FF.m;
        for (let CF = 0; CF < 16; CF++) WF[CF] -= SF[CF];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        return this.subtractFromFloatsToRef(...WF, new rW)
      }
      subtractFromFloatsToRef() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        const CF = WF.pop(),
          AF = this._m,
          uF = CF._m,
          hF = WF;
        for (let bW = 0; bW < 16; bW++) uF[bW] = AF[bW] - hF[bW];
        return CF.markAsUpdated(), CF
      }
      invertToRef(FF) {
        return !0 === this._isIdentity ? (rW.IdentityToRef(FF), FF) : ((0, dF.h)(this, FF.kRF()) ? FF.markAsUpdated() : FF.fdF(this), FF)
      }
      addAtIndex(FF, WF) {
        return this._m[FF] += WF, this.markAsUpdated(), this
      }
      multiplyAtIndex(FF, WF) {
        return this._m[FF] *= WF, this.markAsUpdated(), this
      }
      setTranslationFromFloats(FF, WF, SF) {
        return this._m[12] = FF, this._m[13] = WF, this._m[14] = SF, this.markAsUpdated(), this
      }
      addTranslationFromFloats(FF, WF, SF) {
        return this._m[12] += FF, this._m[13] += WF, this._m[14] += SF, this.markAsUpdated(), this
      }
      setTranslation(FF) {
        return this.setTranslationFromFloats(FF._x, FF._y, FF._z)
      }
      getTranslation() {
        return new eF(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(FF) {
        return FF.x = this._m[12], FF.y = this._m[13], FF.z = this._m[14], FF
      }
      removeRotationAndScaling() {
        const FF = this.m;
        return rW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, FF[12], FF[13], FF[14], FF[15], this), this._updateIdentityStatus(0 === FF[12] && 0 === FF[13] && 0 === FF[14] && 1 === FF[15]), this
      }
      fdF(FF) {
        FF.copyToArray(this._m);
        const WF = FF;
        return this.updateFlag = WF.updateFlag, this._updateIdentityStatus(WF._isIdentity, WF._isIdentityDirty, WF._isIdentity3x2, WF._isIdentity3x2Dirty), this
      }
      copyToArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, dF.e)(this, FF, WF), this
      }
      multiply(FF) {
        const WF = new rW;
        return this.multiplyToRef(FF, WF), WF
      }
      multiplyInPlace(FF) {
        const WF = this._m,
          SF = FF.m;
        for (let CF = 0; CF < 16; CF++) WF[CF] *= SF[CF];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const FF = this._m;
        for (let WF = 0; WF < 16; WF++) FF[WF] *= WF < 0 || arguments.length <= WF ? void 0 : arguments[WF];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        const CF = WF.pop(),
          AF = this._m,
          uF = CF._m,
          hF = WF;
        for (let bW = 0; bW < 16; bW++) uF[bW] = AF[bW] * hF[bW];
        return CF.markAsUpdated(), CF
      }
      multiplyToRef(FF, WF) {
        return this._isIdentity ? (WF.fdF(FF), WF) : FF._isIdentity ? (WF.fdF(this), WF) : (this.multiplyToArray(FF, WF._m, 0), WF.markAsUpdated(), WF)
      }
      multiplyToArray(FF, WF, SF) {
        return (0, dF.p)(this, FF, WF, SF), this
      }
      divide(FF) {
        return this.divideToRef(FF, new rW)
      }
      divideToRef(FF, WF) {
        const SF = this._m,
          CF = FF.m,
          AF = WF._m;
        for (let uF = 0; uF < 16; uF++) AF[uF] = SF[uF] / CF[uF];
        return WF.markAsUpdated(), WF
      }
      divideInPlace(FF) {
        const WF = this._m,
          SF = FF.m;
        for (let CF = 0; CF < 16; CF++) WF[CF] /= SF[CF];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(FF) {
        const WF = this._m,
          SF = FF.m;
        for (let CF = 0; CF < 16; CF++) WF[CF] = Math.min(WF[CF], SF[CF]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const FF = this._m;
        for (let WF = 0; WF < 16; WF++) FF[WF] = Math.min(FF[WF], WF < 0 || arguments.length <= WF ? void 0 : arguments[WF]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(FF) {
        const WF = this._m,
          SF = FF.m;
        for (let CF = 0; CF < 16; CF++) WF[CF] = Math.max(WF[CF], SF[CF]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const FF = this._m;
        for (let WF = 0; WF < 16; WF++) FF[WF] = Math.max(FF[WF], WF < 0 || arguments.length <= WF ? void 0 : arguments[WF]);
        return this.markAsUpdated(), this
      }
      Fh() {
        return this.negateToRef(new rW)
      }
      negateInPlace() {
        const FF = this._m;
        for (let WF = 0; WF < 16; WF++) FF[WF] = -FF[WF];
        return this.markAsUpdated(), this
      }
      negateToRef(FF) {
        const WF = this._m,
          SF = FF._m;
        for (let CF = 0; CF < 16; CF++) SF[CF] = -WF[CF];
        return FF.markAsUpdated(), FF
      }
      equals(FF) {
        const WF = FF;
        if (!WF) return !1;
        if ((this._isIdentity || WF._isIdentity) && !this._isIdentityDirty && !WF._isIdentityDirty) return this._isIdentity && WF._isIdentity;
        const SF = this.m,
          CF = WF.m;
        return SF[0] === CF[0] && SF[1] === CF[1] && SF[2] === CF[2] && SF[3] === CF[3] && SF[4] === CF[4] && SF[5] === CF[5] && SF[6] === CF[6] && SF[7] === CF[7] && SF[8] === CF[8] && SF[9] === CF[9] && SF[10] === CF[10] && SF[11] === CF[11] && SF[12] === CF[12] && SF[13] === CF[13] && SF[14] === CF[14] && SF[15] === CF[15]
      }
      equalsWithEpsilon(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const SF = this._m,
          CF = FF.m;
        for (let AF = 0; AF < 16; AF++)
          if (!(0, bW.WithinEpsilon)(SF[AF], CF[AF], WF)) return !1;
        return !0
      }
      HeF() {
        const FF = this._m;
        for (let WF = 0; WF < 16; WF++)
          if (FF[WF] != (WF < 0 || arguments.length <= WF ? void 0 : arguments[WF])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new rW)
      }
      floorToRef(FF) {
        const WF = this._m,
          SF = FF._m;
        for (let CF = 0; CF < 16; CF++) SF[CF] = Math.floor(WF[CF]);
        return FF.markAsUpdated(), FF
      }
      fract() {
        return this.fractToRef(new rW)
      }
      fractToRef(FF) {
        const WF = this._m,
          SF = FF._m;
        for (let CF = 0; CF < 16; CF++) SF[CF] = WF[CF] - Math.floor(WF[CF]);
        return FF.markAsUpdated(), FF
      }
      clone() {
        const FF = new rW;
        return FF.fdF(this), FF
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let FF = RF(this._m[0]);
        for (let WF = 1; WF < 16; WF++) FF = 397 * FF ^ RF(this._m[WF]);
        return FF
      }
      decomposeToTransformNode(FF) {
        return FF.rotationQuaternion = FF.rotationQuaternion || new QF, this.decompose(FF.Ah, FF.rotationQuaternion, FF.position)
      }
      decompose(FF, WF, SF, CF) {
        let AF = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return SF && SF.DuF(0), FF && FF.DuF(1), WF && WF.FhF(0, 0, 0, 1), !0;
        const uF = this._m;
        if (SF && SF.FhF(uF[12], uF[13], uF[14]), (FF = FF || gW.HC[0]).x = Math.sqrt(uF[0] * uF[0] + uF[1] * uF[1] + uF[2] * uF[2]), FF.y = Math.sqrt(uF[4] * uF[4] + uF[5] * uF[5] + uF[6] * uF[6]), FF.z = Math.sqrt(uF[8] * uF[8] + uF[9] * uF[9] + uF[10] * uF[10]), CF) {
          const WF = (AF ? CF.absoluteScaling.x : CF.Ah.x) < 0 ? -1 : 1,
            SF = (AF ? CF.absoluteScaling.y : CF.Ah.y) < 0 ? -1 : 1,
            uF = (AF ? CF.absoluteScaling.z : CF.Ah.z) < 0 ? -1 : 1;
          FF.x *= WF, FF.y *= SF, FF.z *= uF
        } else this.determinant() <= 0 && (FF.y *= -1);
        if (0 === FF._x || 0 === FF._y || 0 === FF._z) return WF && WF.FhF(0, 0, 0, 1), !1;
        if (WF) {
          const SF = 1 / FF._x,
            CF = 1 / FF._y,
            AF = 1 / FF._z;
          rW.FromValuesToRef(uF[0] * SF, uF[1] * SF, uF[2] * SF, 0, uF[4] * CF, uF[5] * CF, uF[6] * CF, 0, uF[8] * AF, uF[9] * AF, uF[10] * AF, 0, 0, 0, 0, 1, gW.Matrix[0]), QF.FromRotationMatrixToRef(gW.Matrix[0], WF)
        }
        return !0
      }
      getRow(FF) {
        if (FF < 0 || FF > 3) return null;
        const WF = 4 * FF;
        return new EF(this._m[WF + 0], this._m[WF + 1], this._m[WF + 2], this._m[WF + 3])
      }
      getRowToRef(FF, WF) {
        if (FF >= 0 && FF <= 3) {
          const SF = 4 * FF;
          WF.x = this._m[SF + 0], WF.y = this._m[SF + 1], WF.z = this._m[SF + 2], WF.w = this._m[SF + 3]
        }
        return WF
      }
      setRow(FF, WF) {
        return this.setRowFromFloats(FF, WF.x, WF.y, WF.z, WF.w)
      }
      transpose() {
        const FF = new rW;
        return rW.TransposeToRef(this, FF), FF
      }
      transposeToRef(FF) {
        return rW.TransposeToRef(this, FF), FF
      }
      setRowFromFloats(FF, WF, SF, CF, AF) {
        if (FF < 0 || FF > 3) return this;
        const uF = 4 * FF;
        return this._m[uF + 0] = WF, this._m[uF + 1] = SF, this._m[uF + 2] = CF, this._m[uF + 3] = AF, this.markAsUpdated(), this
      }
      scale(FF) {
        const WF = new rW;
        return this.scaleToRef(FF, WF), WF
      }
      scaleToRef(FF, WF) {
        for (let SF = 0; SF < 16; SF++) WF._m[SF] = this._m[SF] * FF;
        return WF.markAsUpdated(), WF
      }
      scaleAndAddToRef(FF, WF) {
        for (let SF = 0; SF < 16; SF++) WF._m[SF] += this._m[SF] * FF;
        return WF.markAsUpdated(), WF
      }
      scaleInPlace(FF) {
        const WF = this._m;
        for (let SF = 0; SF < 16; SF++) WF[SF] *= FF;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(FF) {
        const WF = gW.Matrix[0];
        this.invertToRef(WF), WF.transposeToRef(FF);
        const SF = FF._m;
        return rW.FromValuesToRef(SF[0], SF[1], SF[2], 0, SF[4], SF[5], SF[6], 0, SF[8], SF[9], SF[10], 0, 0, 0, 0, 1, FF), FF
      }
      getRotationMatrix() {
        const FF = new rW;
        return this.getRotationMatrixToRef(FF), FF
      }
      getRotationMatrixToRef(FF) {
        const WF = gW.HC[0];
        if (!this.decompose(WF)) return rW.IdentityToRef(FF), FF;
        const SF = this._m,
          CF = 1 / WF._x,
          AF = 1 / WF._y,
          uF = 1 / WF._z;
        return rW.FromValuesToRef(SF[0] * CF, SF[1] * CF, SF[2] * CF, 0, SF[4] * AF, SF[5] * AF, SF[6] * AF, 0, SF[8] * uF, SF[9] * uF, SF[10] * uF, 0, 0, 0, 0, 1, FF), FF
      }
      toggleModelMatrixHandInPlace() {
        const FF = this._m;
        return FF[2] *= -1, FF[6] *= -1, FF[8] *= -1, FF[9] *= -1, FF[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const FF = this._m;
        return FF[8] *= -1, FF[9] *= -1, FF[10] *= -1, FF[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(TF, this), this
      }
      static FromArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const SF = new rW;
        return rW.FromArrayToRef(FF, WF, SF), SF
      }
      static FromArrayToRef(FF, WF, SF) {
        for (let CF = 0; CF < 16; CF++) SF._m[CF] = FF[CF + WF];
        return SF.markAsUpdated(), SF
      }
      static FromFloat32ArrayToRefScaled(FF, WF, SF, CF) {
        return CF._m[0] = FF[0 + WF] * SF, CF._m[1] = FF[1 + WF] * SF, CF._m[2] = FF[2 + WF] * SF, CF._m[3] = FF[3 + WF] * SF, CF._m[4] = FF[4 + WF] * SF, CF._m[5] = FF[5 + WF] * SF, CF._m[6] = FF[6 + WF] * SF, CF._m[7] = FF[7 + WF] * SF, CF._m[8] = FF[8 + WF] * SF, CF._m[9] = FF[9 + WF] * SF, CF._m[10] = FF[10 + WF] * SF, CF._m[11] = FF[11 + WF] * SF, CF._m[12] = FF[12 + WF] * SF, CF._m[13] = FF[13 + WF] * SF, CF._m[14] = FF[14 + WF] * SF, CF._m[15] = FF[15 + WF] * SF, CF.markAsUpdated(), CF
      }
      static get IdentityReadOnly() {
        return rW._IdentityReadOnly
      }
      static FromValuesToRef(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, rW, gW) {
        const tW = gW._m;
        tW[0] = FF, tW[1] = WF, tW[2] = SF, tW[3] = CF, tW[4] = AF, tW[5] = uF, tW[6] = hF, tW[7] = bW, tW[8] = dF, tW[9] = PF, tW[10] = RF, tW[11] = iW, tW[12] = eF, tW[13] = EF, tW[14] = QF, tW[15] = rW, gW.markAsUpdated()
      }
      static FromValues(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF, EF, QF, gW) {
        const tW = new rW,
          TF = tW._m;
        return TF[0] = FF, TF[1] = WF, TF[2] = SF, TF[3] = CF, TF[4] = AF, TF[5] = uF, TF[6] = hF, TF[7] = bW, TF[8] = dF, TF[9] = PF, TF[10] = RF, TF[11] = iW, TF[12] = eF, TF[13] = EF, TF[14] = QF, TF[15] = gW, tW.markAsUpdated(), tW
      }
      static Compose(FF, WF, SF) {
        const CF = new rW;
        return rW.ComposeToRef(FF, WF, SF, CF), CF
      }
      static ComposeToRef(FF, WF, SF, CF) {
        const AF = CF._m,
          uF = WF._x,
          hF = WF._y,
          bW = WF._z,
          dF = WF._w,
          PF = uF + uF,
          RF = hF + hF,
          iW = bW + bW,
          eF = uF * PF,
          EF = uF * RF,
          QF = uF * iW,
          rW = hF * RF,
          gW = hF * iW,
          tW = bW * iW,
          TF = dF * PF,
          aW = dF * RF,
          kW = dF * iW,
          qW = FF._x,
          VF = FF._y,
          NF = FF._z;
        return AF[0] = (1 - (rW + tW)) * qW, AF[1] = (EF + kW) * qW, AF[2] = (QF - aW) * qW, AF[3] = 0, AF[4] = (EF - kW) * VF, AF[5] = (1 - (eF + tW)) * VF, AF[6] = (gW + TF) * VF, AF[7] = 0, AF[8] = (QF + aW) * NF, AF[9] = (gW - TF) * NF, AF[10] = (1 - (eF + rW)) * NF, AF[11] = 0, AF[12] = SF._x, AF[13] = SF._y, AF[14] = SF._z, AF[15] = 1, CF.markAsUpdated(), CF
      }
      static Identity() {
        const FF = rW.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return FF._updateIdentityStatus(!0), FF
      }
      static IdentityToRef(FF) {
        return rW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, FF), FF._updateIdentityStatus(!0), FF
      }
      static Zero() {
        const FF = rW.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return FF._updateIdentityStatus(!1), FF
      }
      static RotationX(FF) {
        const WF = new rW;
        return rW.RotationXToRef(FF, WF), WF
      }
      static Invert(FF) {
        const WF = new rW;
        return FF.invertToRef(WF), WF
      }
      static RotationXToRef(FF, WF) {
        const SF = Math.sin(FF),
          CF = Math.cos(FF);
        return rW.FromValuesToRef(1, 0, 0, 0, 0, CF, SF, 0, 0, -SF, CF, 0, 0, 0, 0, 1, WF), WF._updateIdentityStatus(1 === CF && 0 === SF), WF
      }
      static RotationY(FF) {
        const WF = new rW;
        return rW.RotationYToRef(FF, WF), WF
      }
      static RotationYToRef(FF, WF) {
        const SF = Math.sin(FF),
          CF = Math.cos(FF);
        return rW.FromValuesToRef(CF, 0, -SF, 0, 0, 1, 0, 0, SF, 0, CF, 0, 0, 0, 0, 1, WF), WF._updateIdentityStatus(1 === CF && 0 === SF), WF
      }
      static RotationZ(FF) {
        const WF = new rW;
        return rW.RotationZToRef(FF, WF), WF
      }
      static RotationZToRef(FF, WF) {
        const SF = Math.sin(FF),
          CF = Math.cos(FF);
        return rW.FromValuesToRef(CF, SF, 0, 0, -SF, CF, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, WF), WF._updateIdentityStatus(1 === CF && 0 === SF), WF
      }
      static RotationAxis(FF, WF) {
        const SF = new rW;
        return rW.RotationAxisToRef(FF, WF, SF), SF
      }
      static RotationAxisToRef(FF, WF, SF) {
        const CF = Math.sin(-WF),
          AF = Math.cos(-WF),
          uF = 1 - AF;
        FF = FF.normalizeToRef(gW.HC[0]);
        const hF = SF._m;
        return hF[0] = FF._x * FF._x * uF + AF, hF[1] = FF._x * FF._y * uF - FF._z * CF, hF[2] = FF._x * FF._z * uF + FF._y * CF, hF[3] = 0, hF[4] = FF._y * FF._x * uF + FF._z * CF, hF[5] = FF._y * FF._y * uF + AF, hF[6] = FF._y * FF._z * uF - FF._x * CF, hF[7] = 0, hF[8] = FF._z * FF._x * uF - FF._y * CF, hF[9] = FF._z * FF._y * uF + FF._x * CF, hF[10] = FF._z * FF._z * uF + AF, hF[11] = 0, hF[12] = 0, hF[13] = 0, hF[14] = 0, hF[15] = 1, SF.markAsUpdated(), SF
      }
      static RotationAlignToRef(FF, WF, SF) {
        let AF = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const uF = eF.Dot(WF, FF),
          hF = SF._m;
        if (uF < -1 + CF.c) hF[0] = -1, hF[1] = 0, hF[2] = 0, hF[3] = 0, hF[4] = 0, hF[5] = AF ? 1 : -1, hF[6] = 0, hF[7] = 0, hF[8] = 0, hF[9] = 0, hF[10] = AF ? -1 : 1, hF[11] = 0;
        else {
          const SF = eF.Cross(WF, FF),
            CF = 1 / (1 + uF);
          hF[0] = SF._x * SF._x * CF + uF, hF[1] = SF._y * SF._x * CF - SF._z, hF[2] = SF._z * SF._x * CF + SF._y, hF[3] = 0, hF[4] = SF._x * SF._y * CF + SF._z, hF[5] = SF._y * SF._y * CF + uF, hF[6] = SF._z * SF._y * CF - SF._x, hF[7] = 0, hF[8] = SF._x * SF._z * CF - SF._y, hF[9] = SF._y * SF._z * CF + SF._x, hF[10] = SF._z * SF._z * CF + uF, hF[11] = 0
        }
        return hF[12] = 0, hF[13] = 0, hF[14] = 0, hF[15] = 1, SF.markAsUpdated(), SF
      }
      static RotationYawPitchRoll(FF, WF, SF) {
        const CF = new rW;
        return rW.RotationYawPitchRollToRef(FF, WF, SF, CF), CF
      }
      static RotationYawPitchRollToRef(FF, WF, SF, CF) {
        return QF.RotationYawPitchRollToRef(FF, WF, SF, gW.Quaternion[0]), gW.Quaternion[0].toRotationMatrix(CF), CF
      }
      static Scaling(FF, WF, SF) {
        const CF = new rW;
        return rW.ScalingToRef(FF, WF, SF, CF), CF
      }
      static ScalingToRef(FF, WF, SF, CF) {
        return rW.FromValuesToRef(FF, 0, 0, 0, 0, WF, 0, 0, 0, 0, SF, 0, 0, 0, 0, 1, CF), CF._updateIdentityStatus(1 === FF && 1 === WF && 1 === SF), CF
      }
      static Translation(FF, WF, SF) {
        const CF = new rW;
        return rW.TranslationToRef(FF, WF, SF, CF), CF
      }
      static TranslationToRef(FF, WF, SF, CF) {
        return rW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, FF, WF, SF, 1, CF), CF._updateIdentityStatus(0 === FF && 0 === WF && 0 === SF), CF
      }
      static Lerp(FF, WF, SF) {
        const CF = new rW;
        return rW.LerpToRef(FF, WF, SF, CF), CF
      }
      static LerpToRef(FF, WF, SF, CF) {
        const AF = CF._m,
          uF = FF.m,
          hF = WF.m;
        for (let bW = 0; bW < 16; bW++) AF[bW] = uF[bW] * (1 - SF) + hF[bW] * SF;
        return CF.markAsUpdated(), CF
      }
      static DecomposeLerp(FF, WF, SF) {
        const CF = new rW;
        return rW.DecomposeLerpToRef(FF, WF, SF, CF), CF
      }
      static DecomposeLerpToRef(FF, WF, SF, CF) {
        const AF = gW.HC[0],
          uF = gW.Quaternion[0],
          hF = gW.HC[1];
        FF.decompose(AF, uF, hF);
        const bW = gW.HC[2],
          dF = gW.Quaternion[1],
          PF = gW.HC[3];
        WF.decompose(bW, dF, PF);
        const RF = gW.HC[4];
        eF.LerpToRef(AF, bW, SF, RF);
        const iW = gW.Quaternion[2];
        QF.SlerpToRef(uF, dF, SF, iW);
        const EF = gW.HC[5];
        return eF.LerpToRef(hF, PF, SF, EF), rW.ComposeToRef(RF, iW, EF, CF), CF
      }
      static LookAtLH(FF, WF, SF) {
        const CF = new rW;
        return rW.LookAtLHToRef(FF, WF, SF, CF), CF
      }
      static LookAtLHToRef(FF, WF, SF, CF) {
        const AF = gW.HC[0],
          uF = gW.HC[1],
          hF = gW.HC[2];
        WF.subtractToRef(FF, hF), hF.normalize(), eF.CrossToRef(SF, hF, AF);
        const bW = AF.lengthSquared();
        0 === bW ? AF.x = 1 : AF.normalizeFromLength(Math.sqrt(bW)), eF.CrossToRef(hF, AF, uF), uF.normalize();
        const dF = -eF.Dot(AF, FF),
          PF = -eF.Dot(uF, FF),
          RF = -eF.Dot(hF, FF);
        return rW.FromValuesToRef(AF._x, uF._x, hF._x, 0, AF._y, uF._y, hF._y, 0, AF._z, uF._z, hF._z, 0, dF, PF, RF, 1, CF), CF
      }
      static LookAtRH(FF, WF, SF) {
        const CF = new rW;
        return rW.LookAtRHToRef(FF, WF, SF, CF), CF
      }
      static LookAtRHToRef(FF, WF, SF, CF) {
        const AF = gW.HC[0],
          uF = gW.HC[1],
          hF = gW.HC[2];
        FF.subtractToRef(WF, hF), hF.normalize(), eF.CrossToRef(SF, hF, AF);
        const bW = AF.lengthSquared();
        0 === bW ? AF.x = 1 : AF.normalizeFromLength(Math.sqrt(bW)), eF.CrossToRef(hF, AF, uF), uF.normalize();
        const dF = -eF.Dot(AF, FF),
          PF = -eF.Dot(uF, FF),
          RF = -eF.Dot(hF, FF);
        return rW.FromValuesToRef(AF._x, uF._x, hF._x, 0, AF._y, uF._y, hF._y, 0, AF._z, uF._z, hF._z, 0, dF, PF, RF, 1, CF), CF
      }
      static LookDirectionLH(FF, WF) {
        const SF = new rW;
        return rW.LookDirectionLHToRef(FF, WF, SF), SF
      }
      static LookDirectionLHToRef(FF, WF, SF) {
        const CF = gW.HC[0];
        CF.fdF(FF), CF.scaleInPlace(-1);
        const AF = gW.HC[1];
        return eF.CrossToRef(WF, CF, AF), rW.FromValuesToRef(AF._x, AF._y, AF._z, 0, WF._x, WF._y, WF._z, 0, CF._x, CF._y, CF._z, 0, 0, 0, 0, 1, SF), SF
      }
      static LookDirectionRH(FF, WF) {
        const SF = new rW;
        return rW.LookDirectionRHToRef(FF, WF, SF), SF
      }
      static LookDirectionRHToRef(FF, WF, SF) {
        const CF = gW.HC[2];
        return eF.CrossToRef(WF, FF, CF), rW.FromValuesToRef(CF._x, CF._y, CF._z, 0, WF._x, WF._y, WF._z, 0, FF._x, FF._y, FF._z, 0, 0, 0, 0, 1, SF), SF
      }
      static OrthoLH(FF, WF, SF, CF, AF) {
        const uF = new rW;
        return rW.OrthoLHToRef(FF, WF, SF, CF, uF, AF), uF
      }
      static OrthoLHToRef(FF, WF, SF, CF, AF, uF) {
        const hF = 2 / FF,
          bW = 2 / WF,
          dF = 2 / (CF - SF),
          PF = -(CF + SF) / (CF - SF);
        return rW.FromValuesToRef(hF, 0, 0, 0, 0, bW, 0, 0, 0, 0, dF, 0, 0, 0, PF, 1, AF), uF && AF.multiplyToRef(TF, AF), AF._updateIdentityStatus(1 === hF && 1 === bW && 1 === dF && 0 === PF), AF
      }
      static OrthoOffCenterLH(FF, WF, SF, CF, AF, uF, hF) {
        const bW = new rW;
        return rW.OrthoOffCenterLHToRef(FF, WF, SF, CF, AF, uF, bW, hF), bW
      }
      static OrthoOffCenterLHToRef(FF, WF, SF, CF, AF, uF, hF, bW) {
        const dF = 2 / (WF - FF),
          PF = 2 / (CF - SF),
          RF = 2 / (uF - AF),
          iW = -(uF + AF) / (uF - AF),
          eF = (FF + WF) / (FF - WF),
          EF = (CF + SF) / (SF - CF);
        return rW.FromValuesToRef(dF, 0, 0, 0, 0, PF, 0, 0, 0, 0, RF, 0, eF, EF, iW, 1, hF), bW && hF.multiplyToRef(TF, hF), hF.markAsUpdated(), hF
      }
      static ObliqueOffCenterLHToRef(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
        const iW = -hF * Math.cos(bW),
          eF = -hF * Math.sin(bW);
        return rW.TranslationToRef(0, 0, -dF, gW.Matrix[1]), rW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, iW, eF, 1, 0, 0, 0, 0, 1, gW.Matrix[0]), gW.Matrix[1].multiplyToRef(gW.Matrix[0], gW.Matrix[0]), rW.TranslationToRef(0, 0, dF, gW.Matrix[1]), gW.Matrix[0].multiplyToRef(gW.Matrix[1], gW.Matrix[0]), rW.OrthoOffCenterLHToRef(FF, WF, SF, CF, AF, uF, PF, RF), gW.Matrix[0].multiplyToRef(PF, PF), PF
      }
      static OrthoOffCenterRH(FF, WF, SF, CF, AF, uF, hF) {
        const bW = new rW;
        return rW.OrthoOffCenterRHToRef(FF, WF, SF, CF, AF, uF, bW, hF), bW
      }
      static OrthoOffCenterRHToRef(FF, WF, SF, CF, AF, uF, hF, bW) {
        return rW.OrthoOffCenterLHToRef(FF, WF, SF, CF, AF, uF, hF, bW), hF._m[10] *= -1, hF
      }
      static ObliqueOffCenterRHToRef(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
        const iW = hF * Math.cos(bW),
          eF = hF * Math.sin(bW);
        return rW.TranslationToRef(0, 0, dF, gW.Matrix[1]), rW.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, iW, eF, 1, 0, 0, 0, 0, 1, gW.Matrix[0]), gW.Matrix[1].multiplyToRef(gW.Matrix[0], gW.Matrix[0]), rW.TranslationToRef(0, 0, -dF, gW.Matrix[1]), gW.Matrix[0].multiplyToRef(gW.Matrix[1], gW.Matrix[0]), rW.OrthoOffCenterRHToRef(FF, WF, SF, CF, AF, uF, PF, RF), gW.Matrix[0].multiplyToRef(PF, PF), PF
      }
      static PerspectiveLH(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const hF = new rW,
          bW = 2 * SF / FF,
          dF = 2 * SF / WF,
          PF = (CF + SF) / (CF - SF),
          RF = -2 * CF * SF / (CF - SF),
          iW = Math.tan(uF);
        return rW.FromValuesToRef(bW, 0, 0, 0, 0, dF, 0, iW, 0, 0, PF, 1, 0, 0, RF, 0, hF), AF && hF.multiplyToRef(TF, hF), hF._updateIdentityStatus(!1), hF
      }
      static PerspectiveFovLH(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bW = new rW;
        return rW.PerspectiveFovLHToRef(FF, WF, SF, CF, bW, !0, AF, uF, hF), bW
      }
      static PerspectiveFovLHToRef(FF, WF, SF, CF, AF) {
        let uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          dF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const PF = SF,
          RF = CF,
          iW = 1 / Math.tan(.5 * FF),
          eF = uF ? iW / WF : iW,
          EF = uF ? iW : iW * WF,
          QF = dF && 0 === PF ? -1 : 0 !== RF ? (RF + PF) / (RF - PF) : 1,
          gW = dF && 0 === PF ? 2 * RF : 0 !== RF ? -2 * RF * PF / (RF - PF) : -2 * PF,
          tW = Math.tan(bW);
        return rW.FromValuesToRef(eF, 0, 0, 0, 0, EF, 0, tW, 0, 0, QF, 1, 0, 0, gW, 0, AF), hF && AF.multiplyToRef(TF, AF), AF._updateIdentityStatus(!1), AF
      }
      static PerspectiveFovReverseLHToRef(FF, WF, SF, CF, AF) {
        let uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const dF = 1 / Math.tan(.5 * FF),
          PF = uF ? dF / WF : dF,
          RF = uF ? dF : dF * WF,
          iW = Math.tan(bW);
        return rW.FromValuesToRef(PF, 0, 0, 0, 0, RF, 0, iW, 0, 0, -SF, 1, 0, 0, 1, 0, AF), hF && AF.multiplyToRef(TF, AF), AF._updateIdentityStatus(!1), AF
      }
      static PerspectiveFovRH(FF, WF, SF, CF, AF) {
        let uF = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          hF = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bW = new rW;
        return rW.PerspectiveFovRHToRef(FF, WF, SF, CF, bW, !0, AF, uF, hF), bW
      }
      static PerspectiveFovRHToRef(FF, WF, SF, CF, AF) {
        let uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          dF = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const PF = SF,
          RF = CF,
          iW = 1 / Math.tan(.5 * FF),
          eF = uF ? iW / WF : iW,
          EF = uF ? iW : iW * WF,
          QF = dF && 0 === PF ? 1 : 0 !== RF ? -(RF + PF) / (RF - PF) : -1,
          gW = dF && 0 === PF ? 2 * RF : 0 !== RF ? -2 * RF * PF / (RF - PF) : -2 * PF,
          tW = Math.tan(bW);
        return rW.FromValuesToRef(eF, 0, 0, 0, 0, EF, 0, tW, 0, 0, QF, -1, 0, 0, gW, 0, AF), hF && AF.multiplyToRef(TF, AF), AF._updateIdentityStatus(!1), AF
      }
      static PerspectiveFovReverseRHToRef(FF, WF, SF, CF, AF) {
        let uF = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          hF = arguments.length > 6 ? arguments[6] : void 0,
          bW = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const dF = 1 / Math.tan(.5 * FF),
          PF = uF ? dF / WF : dF,
          RF = uF ? dF : dF * WF,
          iW = Math.tan(bW);
        return rW.FromValuesToRef(PF, 0, 0, 0, 0, RF, 0, iW, 0, 0, -SF, -1, 0, 0, -1, 0, AF), hF && AF.multiplyToRef(TF, AF), AF._updateIdentityStatus(!1), AF
      }
      static GetFinalMatrix(FF, WF, SF, CF, AF, uF) {
        const hF = FF.width,
          bW = FF.height,
          dF = FF.x,
          PF = FF.y,
          RF = rW.FromValues(hF / 2, 0, 0, 0, 0, -bW / 2, 0, 0, 0, 0, uF - AF, 0, dF + hF / 2, bW / 2 + PF, AF, 1),
          iW = new rW;
        return WF.multiplyToRef(SF, iW), iW.multiplyToRef(CF, iW), iW.multiplyToRef(RF, iW)
      }
      static GetAsMatrix2x2(FF) {
        const WF = FF.m,
          SF = [WF[0], WF[1], WF[4], WF[5]];
        return uF.c.MatrixUse64Bits ? SF : new Float32Array(SF)
      }
      static GetAsMatrix3x3(FF) {
        const WF = FF.m,
          SF = [WF[0], WF[1], WF[2], WF[4], WF[5], WF[6], WF[8], WF[9], WF[10]];
        return uF.c.MatrixUse64Bits ? SF : new Float32Array(SF)
      }
      static Transpose(FF) {
        const WF = new rW;
        return rW.TransposeToRef(FF, WF), WF
      }
      static TransposeToRef(FF, WF) {
        const SF = FF.m,
          CF = SF[0],
          AF = SF[4],
          uF = SF[8],
          hF = SF[12],
          bW = SF[1],
          dF = SF[5],
          PF = SF[9],
          RF = SF[13],
          iW = SF[2],
          eF = SF[6],
          EF = SF[10],
          QF = SF[14],
          rW = SF[3],
          gW = SF[7],
          tW = SF[11],
          TF = SF[15],
          aW = WF._m;
        return aW[0] = CF, aW[1] = AF, aW[2] = uF, aW[3] = hF, aW[4] = bW, aW[5] = dF, aW[6] = PF, aW[7] = RF, aW[8] = iW, aW[9] = eF, aW[10] = EF, aW[11] = QF, aW[12] = rW, aW[13] = gW, aW[14] = tW, aW[15] = TF, WF.markAsUpdated(), WF._updateIdentityStatus(FF._isIdentity, FF._isIdentityDirty), WF
      }
      static Reflection(FF) {
        const WF = new rW;
        return rW.ReflectionToRef(FF, WF), WF
      }
      static ReflectionToRef(FF, WF) {
        FF.normalize();
        const SF = FF.normal.x,
          CF = FF.normal.y,
          AF = FF.normal.z,
          uF = -2 * SF,
          hF = -2 * CF,
          bW = -2 * AF;
        return rW.FromValuesToRef(uF * SF + 1, hF * SF, bW * SF, 0, uF * CF, hF * CF + 1, bW * CF, 0, uF * AF, hF * AF, bW * AF + 1, 0, uF * FF.d, hF * FF.d, bW * FF.d, 1, WF), WF
      }
      static FromXYZAxesToRef(FF, WF, SF, CF) {
        return rW.FromValuesToRef(FF._x, FF._y, FF._z, 0, WF._x, WF._y, WF._z, 0, SF._x, SF._y, SF._z, 0, 0, 0, 0, 1, CF), CF
      }
      static FromQuaternionToRef(FF, WF) {
        const SF = FF._x * FF._x,
          CF = FF._y * FF._y,
          AF = FF._z * FF._z,
          uF = FF._x * FF._y,
          hF = FF._z * FF._w,
          bW = FF._z * FF._x,
          dF = FF._y * FF._w,
          PF = FF._y * FF._z,
          RF = FF._x * FF._w;
        return WF._m[0] = 1 - 2 * (CF + AF), WF._m[1] = 2 * (uF + hF), WF._m[2] = 2 * (bW - dF), WF._m[3] = 0, WF._m[4] = 2 * (uF - hF), WF._m[5] = 1 - 2 * (AF + SF), WF._m[6] = 2 * (PF + RF), WF._m[7] = 0, WF._m[8] = 2 * (bW + dF), WF._m[9] = 2 * (PF - RF), WF._m[10] = 1 - 2 * (CF + SF), WF._m[11] = 0, WF._m[12] = 0, WF._m[13] = 0, WF._m[14] = 0, WF._m[15] = 1, WF.markAsUpdated(), WF
      }
    }
    rW._IdentityReadOnly = rW.Identity();
    class gW {}
    gW.HC = (0, AF.g)(11, eF.Zero), gW.Matrix = (0, AF.g)(2, rW.Identity), gW.Quaternion = (0, AF.g)(3, QF.Zero);
    class tW {}
    tW.Vector2 = (0, AF.g)(3, iW.Zero), tW.HC = (0, AF.g)(13, eF.Zero), tW.Vector4 = (0, AF.g)(3, EF.Zero), tW.Quaternion = (0, AF.g)(3, QF.Zero), tW.Matrix = (0, AF.g)(8, rW.Identity);
    const TF = rW.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let aW = !1;

    function kW() {
      aW || (aW = !0, Object.defineProperties(iW.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(eF.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(EF.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(QF.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(rW.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, PF.f)("BABYLON.Vector2", iW), (0, PF.f)("BABYLON.Vector3", eF), (0, PF.f)("BABYLON.Vector4", EF), (0, PF.f)("BABYLON.Matrix", rW))
    }
  },
  35647: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    const CF = "undefined" !== typeof WeakRef;
    class AF {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(FF, WF, SF, CF)
      }
      initialize(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = FF, this.skipNextObservers = WF, this.target = SF, this.currentTarget = CF, this
      }
    }
    class uF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = FF, this.mask = WF, this.scope = SF, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(FF)
      }
    }
    class hF {
      static FromPromise(FF, WF) {
        const SF = new hF;
        return FF.then((FF => {
          SF.notifyObservers(FF)
        })).catch((FF => {
          if (!WF) throw FF;
          WF.notifyObservers(FF)
        })), SF
      }
      get observers() {
        return this._observers
      }
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = WF, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new AF(0), FF && (this._onObserverAdded = FF)
      }
      add(FF) {
        let WF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          SF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!FF) return null;
        const AF = new uF(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        AF.unregisterOnNextCall = SF, WF ? this._observers.unshift(AF) : this._observers.push(AF), this._onObserverAdded && this._onObserverAdded(AF), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(AF, this._lastNotifiedValue);
        const hF = CF ? new WeakRef(this) : {
          deref: () => this
        };
        return AF._remove = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const WF = hF.deref();
          WF && (FF ? WF.remove(AF) : WF._remove(AF))
        }, AF
      }
      addOnce(FF) {
        return this.add(FF, void 0, void 0, void 0, !0)
      }
      remove(FF) {
        if (!FF) return !1;
        FF._remove = null;
        return -1 !== this._observers.indexOf(FF) && (this._deferUnregister(FF), !0)
      }
      removeCallback(FF, WF) {
        for (let SF = 0; SF < this._observers.length; SF++) {
          const CF = this._observers[SF];
          if (!CF._willBeUnregistered && (CF.callback === FF && (!WF || WF === CF.scope))) return this._deferUnregister(CF), !0
        }
        return !1
      }
      _deferUnregister(FF) {
        FF._willBeUnregistered || (this._numObserversMarkedAsDeleted++, FF.unregisterOnNextCall = !1, FF._willBeUnregistered = !0, setTimeout((() => {
          this._remove(FF)
        }), 0))
      }
      _remove(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!FF) return !1;
        const SF = this._observers.indexOf(FF);
        return -1 !== SF && (WF && this._numObserversMarkedAsDeleted--, this._observers.splice(SF, 1), !0)
      }
      makeObserverTopPriority(FF) {
        this._remove(FF, !1), this._observers.unshift(FF)
      }
      makeObserverBottomPriority(FF) {
        this._remove(FF, !1), this._observers.push(FF)
      }
      notifyObservers(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = FF), !this._observers.length) return !0;
        const uF = this._eventState;
        uF.mask = WF, uF.target = SF, uF.currentTarget = CF, uF.skipNextObservers = !1, uF.lastReturnValue = FF, uF.userInfo = AF;
        for (const hF of this._observers)
          if (!hF._willBeUnregistered && (hF.mask & WF && (hF.unregisterOnNextCall && this._deferUnregister(hF), hF.scope ? uF.lastReturnValue = hF.callback.apply(hF.scope, [FF, uF]) : uF.lastReturnValue = hF.callback(FF, uF)), uF.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WF), FF._willBeUnregistered) return;
        const CF = this._eventState;
        CF.mask = SF, CF.skipNextObservers = !1, FF.unregisterOnNextCall && this._deferUnregister(FF), FF.callback(WF, CF)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const FF = this._observers.pop();
          FF && (FF._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const FF = new hF;
        return FF._observers = this._observers.slice(0), FF
      }
      hasSpecificMask() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const WF of this._observers)
          if (WF.mask & FF || WF.mask === FF) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);