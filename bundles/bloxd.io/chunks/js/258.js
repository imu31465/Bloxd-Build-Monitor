export const id = 258;
export const ids = [258];
export const modules = {
  37929: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(37931);
    class be {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    be.Instances = [], be.OnEnginesDisposedObservable = new ye.d, be._LastCreatedScene = null, be.UseFallbackTexture = !0, be.FallbackTexture = ""
  },
  37927: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      static SetMatrixPrecision(ee) {
        if (ye.MatrixTrackPrecisionChange = !1, ee && !ye.MatrixUse64Bits && ye.MatrixTrackedMatrices)
          for (let ie = 0; ie < ye.MatrixTrackedMatrices.length; ++ie) {
            const ee = ye.MatrixTrackedMatrices[ie],
              He = ee._m;
            ee._m = new Array(16);
            for (let ie = 0; ie < 16; ++ie) ee._m[ie] = He[ie]
          }
        ye.MatrixUse64Bits = ee, ye.MatrixCurrentType = ye.MatrixUse64Bits ? Array : Float32Array, ye.MatrixTrackedMatrices = null
      }
    }
    ye.MatrixUse64Bits = !1, ye.MatrixTrackPrecisionChange = !0, ye.MatrixCurrentType = Float32Array, ye.MatrixTrackedMatrices = []
  },
  37946: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ue,
      d: () => Je,
      e: () => Fe,
      i: () => ye,
      m: () => Me,
      p: () => Ke
    });
    class ye {}

    function be(ee) {
      ee.updateFlag = ye._UpdateFlagSeed++
    }

    function Me(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const be = ee.Qbe(),
        Me = ie.Qbe(),
        Ke = be[0],
        Ue = be[1],
        Fe = be[2],
        Je = be[3],
        oe = be[4],
        Re = be[5],
        ke = be[6],
        qe = be[7],
        fe = be[8],
        Te = be[9],
        pe = be[10],
        Xe = be[11],
        ze = be[12],
        Be = be[13],
        Ee = be[14],
        ge = be[15],
        Oe = Me[0],
        de = Me[1],
        We = Me[2],
        te = Me[3],
        Ze = Me[4],
        we = Me[5],
        De = Me[6],
        Pe = Me[7],
        Ae = Me[8],
        Ye = Me[9],
        Ve = Me[10],
        ae = Me[11],
        ce = Me[12],
        xe = Me[13],
        Le = Me[14],
        Ce = Me[15];
      He[ye] = Ke * Oe + Ue * Ze + Fe * Ae + Je * ce, He[ye + 1] = Ke * de + Ue * we + Fe * Ye + Je * xe, He[ye + 2] = Ke * We + Ue * De + Fe * Ve + Je * Le, He[ye + 3] = Ke * te + Ue * Pe + Fe * ae + Je * Ce, He[ye + 4] = oe * Oe + Re * Ze + ke * Ae + qe * ce, He[ye + 5] = oe * de + Re * we + ke * Ye + qe * xe, He[ye + 6] = oe * We + Re * De + ke * Ve + qe * Le, He[ye + 7] = oe * te + Re * Pe + ke * ae + qe * Ce, He[ye + 8] = fe * Oe + Te * Ze + pe * Ae + Xe * ce, He[ye + 9] = fe * de + Te * we + pe * Ye + Xe * xe, He[ye + 10] = fe * We + Te * De + pe * Ve + Xe * Le, He[ye + 11] = fe * te + Te * Pe + pe * ae + Xe * Ce, He[ye + 12] = ze * Oe + Be * Ze + Ee * Ae + ge * ce, He[ye + 13] = ze * de + Be * we + Ee * Ye + ge * xe, He[ye + 14] = ze * We + Be * De + Ee * Ve + ge * Le, He[ye + 15] = ze * te + Be * Pe + Ee * ae + ge * Ce
    }

    function Ke(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Me(ee, ie, He.Qbe(), ye), be(He)
    }

    function Ue(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const ye = ee.Qbe();
      ie[He] = ye[0], ie[He + 1] = ye[1], ie[He + 2] = ye[2], ie[He + 3] = ye[3], ie[He + 4] = ye[4], ie[He + 5] = ye[5], ie[He + 6] = ye[6], ie[He + 7] = ye[7], ie[He + 8] = ye[8], ie[He + 9] = ye[9], ie[He + 10] = ye[10], ie[He + 11] = ye[11], ie[He + 12] = ye[12], ie[He + 13] = ye[13], ie[He + 14] = ye[14], ie[He + 15] = ye[15]
    }

    function Fe(ee, ie) {
      const He = Je(ee, ie.Qbe());
      return He && be(ie), He
    }

    function Je(ee, ie) {
      const He = ee.Qbe(),
        ye = He[0],
        be = He[1],
        Me = He[2],
        Ke = He[3],
        Ue = He[4],
        Fe = He[5],
        Je = He[6],
        oe = He[7],
        Re = He[8],
        ke = He[9],
        qe = He[10],
        fe = He[11],
        Te = He[12],
        pe = He[13],
        Xe = He[14],
        ze = He[15],
        Be = qe * ze - Xe * fe,
        Ee = ke * ze - pe * fe,
        ge = ke * Xe - pe * qe,
        Oe = Re * ze - Te * fe,
        de = Re * Xe - qe * Te,
        We = Re * pe - Te * ke,
        te = +(Fe * Be - Je * Ee + oe * ge),
        Ze = -(Ue * Be - Je * Oe + oe * de),
        we = +(Ue * Ee - Fe * Oe + oe * We),
        De = -(Ue * ge - Fe * de + Je * We),
        Pe = ye * te + be * Ze + Me * we + Ke * De;
      if (0 === Pe) return !1;
      const Ae = 1 / Pe,
        Ye = Je * ze - Xe * oe,
        Ve = Fe * ze - pe * oe,
        ae = Fe * Xe - pe * Je,
        ce = Ue * ze - Te * oe,
        xe = Ue * Xe - Te * Je,
        Le = Ue * pe - Te * Fe,
        Ce = Je * fe - qe * oe,
        ve = Fe * fe - ke * oe,
        ue = Fe * qe - ke * Je,
        me = Ue * fe - Re * oe,
        le = Ue * qe - Re * Je,
        Se = Ue * ke - Re * Fe,
        ne = -(be * Be - Me * Ee + Ke * ge),
        je = +(ye * Be - Me * Oe + Ke * de),
        se = -(ye * Ee - be * Oe + Ke * We),
        Ie = +(ye * ge - be * de + Me * We),
        he = +(be * Ye - Me * Ve + Ke * ae),
        Ne = -(ye * Ye - Me * ce + Ke * xe),
        Ge = +(ye * Ve - be * ce + Ke * Le),
        re = -(ye * ae - be * xe + Me * Le),
        Qe = -(be * Ce - Me * ve + Ke * ue),
        ei = +(ye * Ce - Me * me + Ke * le),
        ii = -(ye * ve - be * me + Ke * Se),
        Hi = +(ye * ue - be * le + Me * Se);
      return ie[0] = te * Ae, ie[1] = ne * Ae, ie[2] = he * Ae, ie[3] = Qe * Ae, ie[4] = Ze * Ae, ie[5] = je * Ae, ie[6] = Ne * Ae, ie[7] = ei * Ae, ie[8] = we * Ae, ie[9] = se * Ae, ie[10] = Ge * Ae, ie[11] = ii * Ae, ie[12] = De * Ae, ie[13] = Ie * Ae, ie[14] = re * Ae, ie[15] = Hi * Ae, !0
    }
    ye._UpdateFlagSeed = 0
  },
  37917: (ee, ie, He) => {
    He.d(ie, {
      b: () => Te,
      f: () => fe,
      h: () => Ee,
      j: () => Xe,
      n: () => Re,
      p: () => ke,
      s: () => qe
    });
    var ye = He(37920),
      be = He(37925),
      Me = He(37927),
      Ke = He(37929),
      Ue = He(37938),
      Fe = He(37946),
      Je = He(37949);
    const oe = ee => parseInt(ee.toString().replace(/\W/g, ""));
    class Re {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = ee, this.y = ie
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let ee = oe(this.x);
        return ee = 397 * ee ^ oe(this.y), ee
      }
      toArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ee[ie] = this.x, ee[ie + 1] = this.y, this
      }
      MR(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Re.FromArrayToRef(ee, ie, this), this
      }
      Qbe() {
        return [this.x, this.y]
      }
      jD(ee) {
        return this.x = ee.x, this.y = ee.y, this
      }
      wie(ee, ie) {
        return this.x = ee, this.y = ie, this
      }
      set(ee, ie) {
        return this.wie(ee, ie)
      }
      Iee(ee) {
        return this.wie(ee, ee)
      }
      add(ee) {
        return new Re(this.x + ee.x, this.y + ee.y)
      }
      addToRef(ee, ie) {
        return ie.x = this.x + ee.x, ie.y = this.y + ee.y, ie
      }
      addInPlace(ee) {
        return this.x += ee.x, this.y += ee.y, this
      }
      addInPlaceFromFloats(ee, ie) {
        return this.x += ee, this.y += ie, this
      }
      addVector3(ee) {
        return new Re(this.x + ee.x, this.y + ee.y)
      }
      subtract(ee) {
        return new Re(this.x - ee.x, this.y - ee.y)
      }
      subtractToRef(ee, ie) {
        return ie.x = this.x - ee.x, ie.y = this.y - ee.y, ie
      }
      XMe(ee) {
        return this.x -= ee.x, this.y -= ee.y, this
      }
      multiplyInPlace(ee) {
        return this.x *= ee.x, this.y *= ee.y, this
      }
      multiply(ee) {
        return new Re(this.x * ee.x, this.y * ee.y)
      }
      multiplyToRef(ee, ie) {
        return ie.x = this.x * ee.x, ie.y = this.y * ee.y, ie
      }
      multiplyByFloats(ee, ie) {
        return new Re(this.x * ee, this.y * ie)
      }
      divide(ee) {
        return new Re(this.x / ee.x, this.y / ee.y)
      }
      divideToRef(ee, ie) {
        return ie.x = this.x / ee.x, ie.y = this.y / ee.y, ie
      }
      divideInPlace(ee) {
        return this.x = this.x / ee.x, this.y = this.y / ee.y, this
      }
      minimizeInPlace(ee) {
        return this.minimizeInPlaceFromFloats(ee.x, ee.y)
      }
      maximizeInPlace(ee) {
        return this.maximizeInPlaceFromFloats(ee.x, ee.y)
      }
      minimizeInPlaceFromFloats(ee, ie) {
        return this.x = Math.min(ee, this.x), this.y = Math.min(ie, this.y), this
      }
      maximizeInPlaceFromFloats(ee, ie) {
        return this.x = Math.max(ee, this.x), this.y = Math.max(ie, this.y), this
      }
      subtractFromFloats(ee, ie) {
        return new Re(this.x - ee, this.y - ie)
      }
      subtractFromFloatsToRef(ee, ie, He) {
        return He.x = this.x - ee, He.y = this.y - ie, He
      }
      ck() {
        return new Re(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(ee) {
        return ee.x = -this.x, ee.y = -this.y, ee
      }
      scaleInPlace(ee) {
        return this.x *= ee, this.y *= ee, this
      }
      scale(ee) {
        return new Re(this.x * ee, this.y * ee)
      }
      scaleToRef(ee, ie) {
        return ie.x = this.x * ee, ie.y = this.y * ee, ie
      }
      scaleAndAddToRef(ee, ie) {
        return ie.x += this.x * ee, ie.y += this.y * ee, ie
      }
      equals(ee) {
        return ee && this.x === ee.x && this.y === ee.y
      }
      equalsWithEpsilon(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye.b;
        return ee && (0, Ue.WithinEpsilon)(this.x, ee.x, ie) && (0, Ue.WithinEpsilon)(this.y, ee.y, ie)
      }
      wFe(ee, ie) {
        return this.x === ee && this.y === ie
      }
      floor() {
        return new Re(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(ee) {
        return ee.x = Math.floor(this.x), ee.y = Math.floor(this.y), ee
      }
      fract() {
        return new Re(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(ee) {
        return ee.x = this.x - Math.floor(this.x), ee.y = this.y - Math.floor(this.y), ee
      }
      rotate(ee) {
        return this.rotateToRef(ee, new Re)
      }
      rotateToRef(ee, ie) {
        const He = Math.cos(ee),
          ye = Math.sin(ee);
        return ie.x = He * this.x - ye * this.y, ie.y = ye * this.x + He * this.y, ie
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
      normalizeFromLength(ee) {
        return 0 === ee || 1 === ee ? this : this.scaleInPlace(1 / ee)
      }
      normalizeToNew() {
        const ee = new Re;
        return this.normalizeToRef(ee), ee
      }
      normalizeToRef(ee) {
        const ie = this.length();
        return 0 === ie || 1 === ie ? (ee.x = this.x, ee.y = this.y, ee) : this.scaleToRef(1 / ie, ee)
      }
      clone() {
        return new Re(this.x, this.y)
      }
      dot(ee) {
        return this.x * ee.x + this.y * ee.y
      }
      static Zero() {
        return new Re(0, 0)
      }
      static One() {
        return new Re(1, 1)
      }
      static Random() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Re((0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie))
      }
      static RandomToRef() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).wie((0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie))
      }
      static get ZeroReadOnly() {
        return Re._ZeroReadOnly
      }
      static FromArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Re(ee[ie], ee[ie + 1])
      }
      static FromArrayToRef(ee, ie, He) {
        return He.x = ee[ie], He.y = ee[ie + 1], He
      }
      static FromFloatsToRef(ee, ie, He) {
        return He.wie(ee, ie), He
      }
      static CatmullRom(ee, ie, He, ye, be) {
        const Me = be * be,
          Ke = be * Me,
          Ue = .5 * (2 * ie.x + (-ee.x + He.x) * be + (2 * ee.x - 5 * ie.x + 4 * He.x - ye.x) * Me + (-ee.x + 3 * ie.x - 3 * He.x + ye.x) * Ke),
          Fe = .5 * (2 * ie.y + (-ee.y + He.y) * be + (2 * ee.y - 5 * ie.y + 4 * He.y - ye.y) * Me + (-ee.y + 3 * ie.y - 3 * He.y + ye.y) * Ke);
        return new Re(Ue, Fe)
      }
      static ClampToRef(ee, ie, He, ye) {
        return ye.x = (0, Ue.Clamp)(ee.x, ie.x, He.x), ye.y = (0, Ue.Clamp)(ee.y, ie.y, He.y), ye
      }
      static Clamp(ee, ie, He) {
        const ye = (0, Ue.Clamp)(ee.x, ie.x, He.x),
          be = (0, Ue.Clamp)(ee.y, ie.y, He.y);
        return new Re(ye, be)
      }
      static Hermite(ee, ie, He, ye, be) {
        const Me = be * be,
          Ke = be * Me,
          Ue = 2 * Ke - 3 * Me + 1,
          Fe = -2 * Ke + 3 * Me,
          Je = Ke - 2 * Me + be,
          oe = Ke - Me,
          ke = ee.x * Ue + He.x * Fe + ie.x * Je + ye.x * oe,
          qe = ee.y * Ue + He.y * Fe + ie.y * Je + ye.y * oe;
        return new Re(ke, qe)
      }
      static Hermite1stDerivative(ee, ie, He, ye, be) {
        return this.Hermite1stDerivativeToRef(ee, ie, He, ye, be, new Re)
      }
      static Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me) {
        const Ke = be * be;
        return Me.x = 6 * (Ke - be) * ee.x + (3 * Ke - 4 * be + 1) * ie.x + 6 * (-Ke + be) * He.x + (3 * Ke - 2 * be) * ye.x, Me.y = 6 * (Ke - be) * ee.y + (3 * Ke - 4 * be + 1) * ie.y + 6 * (-Ke + be) * He.y + (3 * Ke - 2 * be) * ye.y, Me
      }
      static Lerp(ee, ie, He) {
        return Re.LerpToRef(ee, ie, He, new Re)
      }
      static LerpToRef(ee, ie, He, ye) {
        return ye.x = ee.x + (ie.x - ee.x) * He, ye.y = ee.y + (ie.y - ee.y) * He, ye
      }
      static Dot(ee, ie) {
        return ee.x * ie.x + ee.y * ie.y
      }
      static Normalize(ee) {
        return Re.NormalizeToRef(ee, new Re)
      }
      static NormalizeToRef(ee, ie) {
        return ee.normalizeToRef(ie), ie
      }
      static Minimize(ee, ie) {
        const He = ee.x < ie.x ? ee.x : ie.x,
          ye = ee.y < ie.y ? ee.y : ie.y;
        return new Re(He, ye)
      }
      static Maximize(ee, ie) {
        const He = ee.x > ie.x ? ee.x : ie.x,
          ye = ee.y > ie.y ? ee.y : ie.y;
        return new Re(He, ye)
      }
      static Transform(ee, ie) {
        return Re.TransformToRef(ee, ie, new Re)
      }
      static TransformToRef(ee, ie, He) {
        const ye = ie.m,
          be = ee.x * ye[0] + ee.y * ye[4] + ye[12],
          Me = ee.x * ye[1] + ee.y * ye[5] + ye[13];
        return He.x = be, He.y = Me, He
      }
      static PointInTriangle(ee, ie, He, ye) {
        const be = .5 * (-He.y * ye.x + ie.y * (-He.x + ye.x) + ie.x * (He.y - ye.y) + He.x * ye.y),
          Me = be < 0 ? -1 : 1,
          Ke = (ie.y * ye.x - ie.x * ye.y + (ye.y - ie.y) * ee.x + (ie.x - ye.x) * ee.y) * Me,
          Ue = (ie.x * He.y - ie.y * He.x + (ie.y - He.y) * ee.x + (He.x - ie.x) * ee.y) * Me;
        return Ke > 0 && Ue > 0 && Ke + Ue < 2 * be * Me
      }
      static Distance(ee, ie) {
        return Math.sqrt(Re.DistanceSquared(ee, ie))
      }
      static DistanceSquared(ee, ie) {
        const He = ee.x - ie.x,
          ye = ee.y - ie.y;
        return He * He + ye * ye
      }
      static Center(ee, ie) {
        return Re.CenterToRef(ee, ie, new Re)
      }
      static CenterToRef(ee, ie, He) {
        return He.wie((ee.x + ie.x) / 2, (ee.y + ie.y) / 2)
      }
      static DistanceOfPointFromSegment(ee, ie, He) {
        const ye = Re.DistanceSquared(ie, He);
        if (0 === ye) return Re.Distance(ee, ie);
        const be = He.subtract(ie),
          Me = Math.max(0, Math.min(1, Re.Dot(ee.subtract(ie), be) / ye)),
          Ke = ie.add(be.multiplyByFloats(Me, Me));
        return Re.Distance(ee, Ke)
      }
    }
    Re._V8PerformanceHack = new Re(.5, .5), Re._ZeroReadOnly = Re.Zero();
    class ke {
      get x() {
        return this._x
      }
      set x(ee) {
        this._x = ee, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(ee) {
        this._y = ee, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(ee) {
        this._z = ee, this._isDirty = !0
      }
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = ee, this._y = ie, this._z = He
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "rf"
      }
      getHashCode() {
        let ee = oe(this._x);
        return ee = 397 * ee ^ oe(this._y), ee = 397 * ee ^ oe(this._z), ee
      }
      Qbe() {
        return [this._x, this._y, this._z]
      }
      toArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ee[ie] = this._x, ee[ie + 1] = this._y, ee[ie + 2] = this._z, this
      }
      MR(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ke.FromArrayToRef(ee, ie, this), this
      }
      toQuaternion() {
        return fe.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(ee) {
        return this._x += ee._x, this._y += ee._y, this._z += ee._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(ee, ie, He) {
        return this._x += ee, this._y += ie, this._z += He, this._isDirty = !0, this
      }
      add(ee) {
        return new ke(this._x + ee._x, this._y + ee._y, this._z + ee._z)
      }
      addToRef(ee, ie) {
        return ie._x = this._x + ee._x, ie._y = this._y + ee._y, ie._z = this._z + ee._z, ie._isDirty = !0, ie
      }
      XMe(ee) {
        return this._x -= ee._x, this._y -= ee._y, this._z -= ee._z, this._isDirty = !0, this
      }
      subtract(ee) {
        return new ke(this._x - ee._x, this._y - ee._y, this._z - ee._z)
      }
      subtractToRef(ee, ie) {
        return this.subtractFromFloatsToRef(ee._x, ee._y, ee._z, ie)
      }
      subtractFromFloats(ee, ie, He) {
        return new ke(this._x - ee, this._y - ie, this._z - He)
      }
      subtractFromFloatsToRef(ee, ie, He, ye) {
        return ye._x = this._x - ee, ye._y = this._y - ie, ye._z = this._z - He, ye._isDirty = !0, ye
      }
      ck() {
        return new ke(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(ee) {
        return ee._x = -1 * this._x, ee._y = -1 * this._y, ee._z = -1 * this._z, ee._isDirty = !0, ee
      }
      scaleInPlace(ee) {
        return this._x *= ee, this._y *= ee, this._z *= ee, this._isDirty = !0, this
      }
      scale(ee) {
        return new ke(this._x * ee, this._y * ee, this._z * ee)
      }
      scaleToRef(ee, ie) {
        return ie._x = this._x * ee, ie._y = this._y * ee, ie._z = this._z * ee, ie._isDirty = !0, ie
      }
      getNormalToRef(ee) {
        const ie = this.length();
        let He = Math.acos(this._y / ie);
        const ye = Math.atan2(this._z, this._x);
        He > Math.PI / 2 ? He -= Math.PI / 2 : He += Math.PI / 2;
        const be = ie * Math.sin(He) * Math.cos(ye),
          Me = ie * Math.cos(He),
          Ke = ie * Math.sin(He) * Math.sin(ye);
        return ee.set(be, Me, Ke), ee
      }
      applyRotationQuaternionToRef(ee, ie) {
        const He = this._x,
          ye = this._y,
          be = this._z,
          Me = ee._x,
          Ke = ee._y,
          Ue = ee._z,
          Fe = ee._w,
          Je = 2 * (Ke * be - Ue * ye),
          oe = 2 * (Ue * He - Me * be),
          Re = 2 * (Me * ye - Ke * He);
        return ie._x = He + Fe * Je + Ke * Re - Ue * oe, ie._y = ye + Fe * oe + Ue * Je - Me * Re, ie._z = be + Fe * Re + Me * oe - Ke * Je, ie._isDirty = !0, ie
      }
      applyRotationQuaternionInPlace(ee) {
        return this.applyRotationQuaternionToRef(ee, this)
      }
      applyRotationQuaternion(ee) {
        return this.applyRotationQuaternionToRef(ee, new ke)
      }
      scaleAndAddToRef(ee, ie) {
        return ie._x += this._x * ee, ie._y += this._y * ee, ie._z += this._z * ee, ie._isDirty = !0, ie
      }
      projectOnPlane(ee, ie) {
        return this.projectOnPlaneToRef(ee, ie, new ke)
      }
      projectOnPlaneToRef(ee, ie, He) {
        const ye = ee.normal,
          be = ee.d,
          Me = pe.rf[0];
        this.subtractToRef(ie, Me), Me.normalize();
        const Ke = ke.Dot(Me, ye);
        if (Math.abs(Ke) < 1e-10) He.Iee(1 / 0);
        else {
          const ee = -(ke.Dot(ie, ye) + be) / Ke,
            Ue = Me.scaleInPlace(ee);
          ie.addToRef(Ue, He)
        }
        return He
      }
      equals(ee) {
        return ee && this._x === ee._x && this._y === ee._y && this._z === ee._z
      }
      equalsWithEpsilon(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye.b;
        return ee && (0, Ue.WithinEpsilon)(this._x, ee._x, ie) && (0, Ue.WithinEpsilon)(this._y, ee._y, ie) && (0, Ue.WithinEpsilon)(this._z, ee._z, ie)
      }
      wFe(ee, ie, He) {
        return this._x === ee && this._y === ie && this._z === He
      }
      multiplyInPlace(ee) {
        return this._x *= ee._x, this._y *= ee._y, this._z *= ee._z, this._isDirty = !0, this
      }
      multiply(ee) {
        return this.multiplyByFloats(ee._x, ee._y, ee._z)
      }
      multiplyToRef(ee, ie) {
        return ie._x = this._x * ee._x, ie._y = this._y * ee._y, ie._z = this._z * ee._z, ie._isDirty = !0, ie
      }
      multiplyByFloats(ee, ie, He) {
        return new ke(this._x * ee, this._y * ie, this._z * He)
      }
      divide(ee) {
        return new ke(this._x / ee._x, this._y / ee._y, this._z / ee._z)
      }
      divideToRef(ee, ie) {
        return ie._x = this._x / ee._x, ie._y = this._y / ee._y, ie._z = this._z / ee._z, ie._isDirty = !0, ie
      }
      divideInPlace(ee) {
        return this._x = this._x / ee._x, this._y = this._y / ee._y, this._z = this._z / ee._z, this._isDirty = !0, this
      }
      minimizeInPlace(ee) {
        return this.minimizeInPlaceFromFloats(ee._x, ee._y, ee._z)
      }
      maximizeInPlace(ee) {
        return this.maximizeInPlaceFromFloats(ee._x, ee._y, ee._z)
      }
      minimizeInPlaceFromFloats(ee, ie, He) {
        return ee < this._x && (this.x = ee), ie < this._y && (this.y = ie), He < this._z && (this.z = He), this
      }
      maximizeInPlaceFromFloats(ee, ie, He) {
        return ee > this._x && (this.x = ee), ie > this._y && (this.y = ie), He > this._z && (this.z = He), this
      }
      isNonUniformWithinEpsilon(ee) {
        const ie = Math.abs(this._x),
          He = Math.abs(this._y);
        if (!(0, Ue.WithinEpsilon)(ie, He, ee)) return !0;
        const ye = Math.abs(this._z);
        return !(0, Ue.WithinEpsilon)(ie, ye, ee) || !(0, Ue.WithinEpsilon)(He, ye, ee)
      }
      get isNonUniform() {
        const ee = Math.abs(this._x);
        if (ee !== Math.abs(this._y)) return !0;
        return ee !== Math.abs(this._z)
      }
      floorToRef(ee) {
        return ee._x = Math.floor(this._x), ee._y = Math.floor(this._y), ee._z = Math.floor(this._z), ee._isDirty = !0, ee
      }
      floor() {
        return new ke(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(ee) {
        return ee._x = this._x - Math.floor(this._x), ee._y = this._y - Math.floor(this._y), ee._z = this._z - Math.floor(this._z), ee._isDirty = !0, ee
      }
      fract() {
        return new ke(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(ee) {
        if ("xyz" === (ee = ee.toLowerCase())) return this;
        const ie = pe.rf[0].jD(this);
        return this.x = ie[ee[0]], this.y = ie[ee[1]], this.z = ie[ee[2]], this
      }
      rotateByQuaternionToRef(ee, ie) {
        return ee.toRotationMatrix(pe.Matrix[0]), ke.TransformCoordinatesToRef(this, pe.Matrix[0], ie), ie
      }
      rotateByQuaternionAroundPointToRef(ee, ie, He) {
        return this.subtractToRef(ie, pe.rf[0]), pe.rf[0].rotateByQuaternionToRef(ee, pe.rf[0]), ie.addToRef(pe.rf[0], He), He
      }
      cross(ee) {
        return ke.CrossToRef(this, ee, new ke)
      }
      normalizeFromLength(ee) {
        return 0 === ee || 1 === ee ? this : this.scaleInPlace(1 / ee)
      }
      normalizeToNew() {
        return this.normalizeToRef(new ke)
      }
      normalizeToRef(ee) {
        const ie = this.length();
        return 0 === ie || 1 === ie ? (ee._x = this._x, ee._y = this._y, ee._z = this._z, ee._isDirty = !0, ee) : this.scaleToRef(1 / ie, ee)
      }
      clone() {
        return new ke(this._x, this._y, this._z)
      }
      jD(ee) {
        return this.wie(ee._x, ee._y, ee._z)
      }
      wie(ee, ie, He) {
        return this._x = ee, this._y = ie, this._z = He, this._isDirty = !0, this
      }
      set(ee, ie, He) {
        return this.wie(ee, ie, He)
      }
      Iee(ee) {
        return this._x = this._y = this._z = ee, this._isDirty = !0, this
      }
      static GetClipFactor(ee, ie, He, ye) {
        const be = ke.Dot(ee, He);
        return (be - ye) / (be - ke.Dot(ie, He))
      }
      static GetAngleBetweenVectors(ee, ie, He) {
        const ye = ee.normalizeToRef(pe.rf[1]),
          be = ie.normalizeToRef(pe.rf[2]);
        let Me = ke.Dot(ye, be);
        Me = (0, Ue.Clamp)(Me, -1, 1);
        const Ke = Math.acos(Me),
          Fe = pe.rf[3];
        return ke.CrossToRef(ye, be, Fe), ke.Dot(Fe, He) > 0 ? isNaN(Ke) ? 0 : Ke : isNaN(Ke) ? -Math.PI : -Math.acos(Me)
      }
      static GetAngleBetweenVectorsOnPlane(ee, ie, He) {
        pe.rf[0].jD(ee);
        const ye = pe.rf[0];
        pe.rf[1].jD(ie);
        const be = pe.rf[1];
        pe.rf[2].jD(He);
        const Me = pe.rf[2],
          Ke = pe.rf[3],
          Fe = pe.rf[4];
        ye.normalize(), be.normalize(), Me.normalize(), ke.CrossToRef(Me, ye, Ke), ke.CrossToRef(Ke, Me, Fe);
        const Je = Math.atan2(ke.Dot(be, Ke), ke.Dot(be, Fe));
        return (0, Ue.NormalizeRadians)(Je)
      }
      static PitchYawRollToMoveBetweenPointsToRef(ee, ie, He) {
        const ye = Xe.rf[0];
        return ie.subtractToRef(ee, ye), He._y = Math.atan2(ye.x, ye.z) || 0, He._x = Math.atan2(Math.sqrt(ye.x ** 2 + ye.z ** 2), ye.y) || 0, He._z = 0, He._isDirty = !0, He
      }
      static PitchYawRollToMoveBetweenPoints(ee, ie) {
        const He = ke.Zero();
        return ke.PitchYawRollToMoveBetweenPointsToRef(ee, ie, He)
      }
      static SlerpToRef(ee, ie, He, be) {
        He = (0, Ue.Clamp)(He, 0, 1);
        const Me = pe.rf[0],
          Ke = pe.rf[1];
        Me.jD(ee);
        const Fe = Me.length();
        Me.normalizeFromLength(Fe), Ke.jD(ie);
        const Je = Ke.length();
        Ke.normalizeFromLength(Je);
        const oe = ke.Dot(Me, Ke);
        let Re, qe;
        if (oe < 1 - ye.b) {
          const ee = Math.acos(oe),
            ie = 1 / Math.sin(ee);
          Re = Math.sin((1 - He) * ee) * ie, qe = Math.sin(He * ee) * ie
        } else Re = 1 - He, qe = He;
        return Me.scaleInPlace(Re), Ke.scaleInPlace(qe), be.jD(Me).addInPlace(Ke), be.scaleInPlace((0, Ue.Lerp)(Fe, Je, He)), be
      }
      static SmoothToRef(ee, ie, He, ye, be) {
        return ke.SlerpToRef(ee, ie, 0 === ye ? 1 : He / ye, be), be
      }
      static FromArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ke(ee[ie], ee[ie + 1], ee[ie + 2])
      }
      static FromFloatArray(ee, ie) {
        return ke.FromArray(ee, ie)
      }
      static FromArrayToRef(ee, ie, He) {
        return He._x = ee[ie], He._y = ee[ie + 1], He._z = ee[ie + 2], He._isDirty = !0, He
      }
      static FromFloatArrayToRef(ee, ie, He) {
        return ke.FromArrayToRef(ee, ie, He)
      }
      static FromFloatsToRef(ee, ie, He, ye) {
        return ye.wie(ee, ie, He), ye
      }
      static Zero() {
        return new ke(0, 0, 0)
      }
      static One() {
        return new ke(1, 1, 1)
      }
      static Up() {
        return new ke(0, 1, 0)
      }
      static get UpReadOnly() {
        return ke._UpReadOnly
      }
      static get DownReadOnly() {
        return ke._DownReadOnly
      }
      static get RightReadOnly() {
        return ke._RightReadOnly
      }
      static get LeftReadOnly() {
        return ke._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return ke._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return ke._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return ke._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return ke._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return ke._ZeroReadOnly
      }
      static get OneReadOnly() {
        return ke._OneReadOnly
      }
      static Down() {
        return new ke(0, -1, 0)
      }
      static Forward() {
        return new ke(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new ke(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new ke(1, 0, 0)
      }
      static Left() {
        return new ke(-1, 0, 0)
      }
      static Random() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ke((0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie))
      }
      static RandomToRef() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).wie((0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie))
      }
      static TransformCoordinates(ee, ie) {
        const He = ke.Zero();
        return ke.TransformCoordinatesToRef(ee, ie, He), He
      }
      static TransformCoordinatesToRef(ee, ie, He) {
        return ke.TransformCoordinatesFromFloatsToRef(ee._x, ee._y, ee._z, ie, He), He
      }
      static TransformCoordinatesFromFloatsToRef(ee, ie, He, ye, be) {
        const Me = ye.m,
          Ke = ee * Me[0] + ie * Me[4] + He * Me[8] + Me[12],
          Ue = ee * Me[1] + ie * Me[5] + He * Me[9] + Me[13],
          Fe = ee * Me[2] + ie * Me[6] + He * Me[10] + Me[14],
          Je = 1 / (ee * Me[3] + ie * Me[7] + He * Me[11] + Me[15]);
        return be._x = Ke * Je, be._y = Ue * Je, be._z = Fe * Je, be._isDirty = !0, be
      }
      static TransformNormal(ee, ie) {
        const He = ke.Zero();
        return ke.TransformNormalToRef(ee, ie, He), He
      }
      static TransformNormalToRef(ee, ie, He) {
        return this.TransformNormalFromFloatsToRef(ee._x, ee._y, ee._z, ie, He), He
      }
      static TransformNormalFromFloatsToRef(ee, ie, He, ye, be) {
        const Me = ye.m;
        return be._x = ee * Me[0] + ie * Me[4] + He * Me[8], be._y = ee * Me[1] + ie * Me[5] + He * Me[9], be._z = ee * Me[2] + ie * Me[6] + He * Me[10], be._isDirty = !0, be
      }
      static CatmullRom(ee, ie, He, ye, be) {
        const Me = be * be,
          Ke = be * Me,
          Ue = .5 * (2 * ie._x + (-ee._x + He._x) * be + (2 * ee._x - 5 * ie._x + 4 * He._x - ye._x) * Me + (-ee._x + 3 * ie._x - 3 * He._x + ye._x) * Ke),
          Fe = .5 * (2 * ie._y + (-ee._y + He._y) * be + (2 * ee._y - 5 * ie._y + 4 * He._y - ye._y) * Me + (-ee._y + 3 * ie._y - 3 * He._y + ye._y) * Ke),
          Je = .5 * (2 * ie._z + (-ee._z + He._z) * be + (2 * ee._z - 5 * ie._z + 4 * He._z - ye._z) * Me + (-ee._z + 3 * ie._z - 3 * He._z + ye._z) * Ke);
        return new ke(Ue, Fe, Je)
      }
      static Clamp(ee, ie, He) {
        const ye = new ke;
        return ke.ClampToRef(ee, ie, He, ye), ye
      }
      static ClampToRef(ee, ie, He, ye) {
        let be = ee._x;
        be = be > He._x ? He._x : be, be = be < ie._x ? ie._x : be;
        let Me = ee._y;
        Me = Me > He._y ? He._y : Me, Me = Me < ie._y ? ie._y : Me;
        let Ke = ee._z;
        return Ke = Ke > He._z ? He._z : Ke, Ke = Ke < ie._z ? ie._z : Ke, ye.wie(be, Me, Ke), ye
      }
      static CheckExtends(ee, ie, He) {
        ie.minimizeInPlace(ee), He.maximizeInPlace(ee)
      }
      static Hermite(ee, ie, He, ye, be) {
        const Me = be * be,
          Ke = be * Me,
          Ue = 2 * Ke - 3 * Me + 1,
          Fe = -2 * Ke + 3 * Me,
          Je = Ke - 2 * Me + be,
          oe = Ke - Me,
          Re = ee._x * Ue + He._x * Fe + ie._x * Je + ye._x * oe,
          qe = ee._y * Ue + He._y * Fe + ie._y * Je + ye._y * oe,
          fe = ee._z * Ue + He._z * Fe + ie._z * Je + ye._z * oe;
        return new ke(Re, qe, fe)
      }
      static Hermite1stDerivative(ee, ie, He, ye, be) {
        const Me = new ke;
        return this.Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me), Me
      }
      static Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me) {
        const Ke = be * be;
        return Me._x = 6 * (Ke - be) * ee._x + (3 * Ke - 4 * be + 1) * ie._x + 6 * (-Ke + be) * He._x + (3 * Ke - 2 * be) * ye._x, Me._y = 6 * (Ke - be) * ee._y + (3 * Ke - 4 * be + 1) * ie._y + 6 * (-Ke + be) * He._y + (3 * Ke - 2 * be) * ye._y, Me._z = 6 * (Ke - be) * ee._z + (3 * Ke - 4 * be + 1) * ie._z + 6 * (-Ke + be) * He._z + (3 * Ke - 2 * be) * ye._z, Me._isDirty = !0, Me
      }
      static Lerp(ee, ie, He) {
        const ye = new ke(0, 0, 0);
        return ke.LerpToRef(ee, ie, He, ye), ye
      }
      static LerpToRef(ee, ie, He, ye) {
        return ye._x = ee._x + (ie._x - ee._x) * He, ye._y = ee._y + (ie._y - ee._y) * He, ye._z = ee._z + (ie._z - ee._z) * He, ye._isDirty = !0, ye
      }
      static Dot(ee, ie) {
        return ee._x * ie._x + ee._y * ie._y + ee._z * ie._z
      }
      dot(ee) {
        return this._x * ee._x + this._y * ee._y + this._z * ee._z
      }
      static Cross(ee, ie) {
        const He = new ke;
        return ke.CrossToRef(ee, ie, He), He
      }
      static CrossToRef(ee, ie, He) {
        const ye = ee._y * ie._z - ee._z * ie._y,
          be = ee._z * ie._x - ee._x * ie._z,
          Me = ee._x * ie._y - ee._y * ie._x;
        return He.wie(ye, be, Me), He
      }
      static Normalize(ee) {
        const ie = ke.Zero();
        return ke.NormalizeToRef(ee, ie), ie
      }
      static NormalizeToRef(ee, ie) {
        return ee.normalizeToRef(ie), ie
      }
      static Project(ee, ie, He, ye) {
        const be = new ke;
        return ke.ProjectToRef(ee, ie, He, ye, be), be
      }
      static ProjectToRef(ee, ie, He, ye, be) {
        const Me = ye.width,
          Ue = ye.height,
          Fe = ye.x,
          Je = ye.y,
          oe = pe.Matrix[1],
          Re = Ke.b.LastCreatedEngine?.isNDCHalfZRange,
          qe = Re ? 1 : .5,
          fe = Re ? 0 : .5;
        Te.FromValuesToRef(Me / 2, 0, 0, 0, 0, -Ue / 2, 0, 0, 0, 0, qe, 0, Fe + Me / 2, Ue / 2 + Je, fe, 1, oe);
        const Xe = pe.Matrix[0];
        return ie.multiplyToRef(He, Xe), Xe.multiplyToRef(oe, Xe), ke.TransformCoordinatesToRef(ee, Xe, be), be
      }
      static Reflect(ee, ie) {
        return this.ReflectToRef(ee, ie, new ke)
      }
      static ReflectToRef(ee, ie, He) {
        const ye = Xe.rf[0];
        return ye.jD(ie).scaleInPlace(2 * ke.Dot(ee, ie)), He.jD(ee).XMe(ye)
      }
      static UnprojectFromTransform(ee, ie, He, ye, be) {
        return this.Unproject(ee, ie, He, ye, be, Te.IdentityReadOnly)
      }
      static Unproject(ee, ie, He, ye, be, Me) {
        const Ke = new ke;
        return ke.UnprojectToRef(ee, ie, He, ye, be, Me, Ke), Ke
      }
      static UnprojectToRef(ee, ie, He, ye, be, Me, Ke) {
        return ke.UnprojectFloatsToRef(ee._x, ee._y, ee._z, ie, He, ye, be, Me, Ke), Ke
      }
      static UnprojectFloatsToRef(ee, ie, He, ye, be, Me, Ue, Fe, Je) {
        const oe = pe.Matrix[0];
        Me.multiplyToRef(Ue, oe), oe.multiplyToRef(Fe, oe), oe.invert();
        const Re = pe.rf[0];
        return Re.x = ee / ye * 2 - 1, Re.y = -(ie / be * 2 - 1), Ke.b.LastCreatedEngine?.isNDCHalfZRange ? Re.z = He : Re.z = 2 * He - 1, ke.TransformCoordinatesToRef(Re, oe, Je), Je
      }
      static Minimize(ee, ie) {
        const He = new ke;
        return He.jD(ee), He.minimizeInPlace(ie), He
      }
      static Maximize(ee, ie) {
        const He = new ke;
        return He.jD(ee), He.maximizeInPlace(ie), He
      }
      static Distance(ee, ie) {
        return Math.sqrt(ke.DistanceSquared(ee, ie))
      }
      static DistanceSquared(ee, ie) {
        const He = ee._x - ie._x,
          ye = ee._y - ie._y,
          be = ee._z - ie._z;
        return He * He + ye * ye + be * be
      }
      static ProjectOnTriangleToRef(ee, ie, He, be, Me) {
        const Ke = pe.rf[0],
          Fe = pe.rf[1],
          Je = pe.rf[2],
          oe = pe.rf[3],
          Re = pe.rf[4];
        He.subtractToRef(ie, Ke), be.subtractToRef(ie, Fe), be.subtractToRef(He, Je);
        const qe = Ke.length(),
          fe = Fe.length(),
          Te = Je.length();
        if (qe < ye.b || fe < ye.b || Te < ye.b) return Me.jD(ie), ke.Distance(ee, ie);
        ee.subtractToRef(ie, Re), ke.CrossToRef(Ke, Fe, oe);
        const Xe = oe.length();
        if (Xe < ye.b) return Me.jD(ie), ke.Distance(ee, ie);
        oe.normalizeFromLength(Xe);
        let ze = Re.length();
        if (ze < ye.b) return Me.jD(ie), 0;
        Re.normalizeFromLength(ze);
        const Be = ke.Dot(oe, Re),
          Ee = pe.rf[5],
          ge = pe.rf[6];
        Ee.jD(oe).scaleInPlace(-ze * Be), ge.jD(ee).addInPlace(Ee);
        const Oe = pe.rf[4],
          de = pe.rf[5],
          We = pe.rf[7],
          te = pe.rf[8];
        Oe.jD(Ke).scaleInPlace(1 / qe), te.jD(Fe).scaleInPlace(1 / fe), Oe.addInPlace(te).scaleInPlace(-1), de.jD(Ke).scaleInPlace(-1 / qe), te.jD(Je).scaleInPlace(1 / Te), de.addInPlace(te).scaleInPlace(-1), We.jD(Je).scaleInPlace(-1 / Te), te.jD(Fe).scaleInPlace(-1 / fe), We.addInPlace(te).scaleInPlace(-1);
        const Ze = pe.rf[9];
        let we;
        Ze.jD(ge).XMe(ie), ke.CrossToRef(Oe, Ze, te), we = ke.Dot(te, oe);
        const De = we;
        Ze.jD(ge).XMe(He), ke.CrossToRef(de, Ze, te), we = ke.Dot(te, oe);
        const Pe = we;
        Ze.jD(ge).XMe(be), ke.CrossToRef(We, Ze, te), we = ke.Dot(te, oe);
        const Ae = we,
          Ye = pe.rf[10];
        let Ve, ae;
        De > 0 && Pe < 0 ? (Ye.jD(Ke), Ve = ie, ae = He) : Pe > 0 && Ae < 0 ? (Ye.jD(Je), Ve = He, ae = be) : (Ye.jD(Fe).scaleInPlace(-1), Ve = be, ae = ie);
        const ce = pe.rf[9],
          xe = pe.rf[4];
        Ve.subtractToRef(ge, te), ae.subtractToRef(ge, ce), ke.CrossToRef(te, ce, xe);
        if (!(ke.Dot(xe, oe) < 0)) return Me.jD(ge), Math.abs(ze * Be);
        const Le = pe.rf[5];
        ke.CrossToRef(Ye, xe, Le), Le.normalize();
        const Ce = pe.rf[9];
        Ce.jD(Ve).XMe(ge);
        const ve = Ce.length();
        if (ve < ye.b) return Me.jD(Ve), ke.Distance(ee, Ve);
        Ce.normalizeFromLength(ve);
        const ue = ke.Dot(Le, Ce),
          me = pe.rf[7];
        me.jD(ge).addInPlace(Le.scaleInPlace(ve * ue)), te.jD(me).XMe(Ve), ze = Ye.length(), Ye.normalizeFromLength(ze);
        let le = ke.Dot(te, Ye) / Math.max(ze, ye.b);
        return le = (0, Ue.Clamp)(le, 0, 1), me.jD(Ve).addInPlace(Ye.scaleInPlace(le * ze)), Me.jD(me), ke.Distance(ee, me)
      }
      static Center(ee, ie) {
        return ke.CenterToRef(ee, ie, ke.Zero())
      }
      static CenterToRef(ee, ie, He) {
        return He.wie((ee._x + ie._x) / 2, (ee._y + ie._y) / 2, (ee._z + ie._z) / 2)
      }
      static RotationFromAxis(ee, ie, He) {
        const ye = new ke;
        return ke.RotationFromAxisToRef(ee, ie, He, ye), ye
      }
      static RotationFromAxisToRef(ee, ie, He, ye) {
        const be = pe.Quaternion[0];
        return fe.RotationQuaternionFromAxisToRef(ee, ie, He, be), be.toEulerAnglesToRef(ye), ye
      }
    }
    ke._V8PerformanceHack = new ke(.5, .5, .5), ke._UpReadOnly = ke.Up(), ke._DownReadOnly = ke.Down(), ke._LeftHandedForwardReadOnly = ke.Forward(!1), ke._RightHandedForwardReadOnly = ke.Forward(!0), ke._LeftHandedBackwardReadOnly = ke.Backward(!1), ke._RightHandedBackwardReadOnly = ke.Backward(!0), ke._RightReadOnly = ke.Right(), ke._LeftReadOnly = ke.Left(), ke._ZeroReadOnly = ke.Zero(), ke._OneReadOnly = ke.One();
    class qe {
      get x() {
        return this._x
      }
      set x(ee) {
        this._x = ee, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(ee) {
        this._y = ee, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(ee) {
        this._z = ee, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(ee) {
        this._w = ee, this._isDirty = !0
      }
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = ee, this._y = ie, this._z = He, this._w = ye
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let ee = oe(this._x);
        return ee = 397 * ee ^ oe(this._y), ee = 397 * ee ^ oe(this._z), ee = 397 * ee ^ oe(this._w), ee
      }
      Qbe() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(ee, ie) {
        return void 0 === ie && (ie = 0), ee[ie] = this._x, ee[ie + 1] = this._y, ee[ie + 2] = this._z, ee[ie + 3] = this._w, this
      }
      MR(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qe.FromArrayToRef(ee, ie, this), this
      }
      addInPlace(ee) {
        return this.x += ee._x, this.y += ee._y, this.z += ee._z, this.w += ee._w, this
      }
      addInPlaceFromFloats(ee, ie, He, ye) {
        return this.x += ee, this.y += ie, this.z += He, this.w += ye, this
      }
      add(ee) {
        return new qe(this._x + ee.x, this._y + ee.y, this._z + ee.z, this._w + ee.w)
      }
      addToRef(ee, ie) {
        return ie.x = this._x + ee.x, ie.y = this._y + ee.y, ie.z = this._z + ee.z, ie.w = this._w + ee.w, ie
      }
      XMe(ee) {
        return this.x -= ee.x, this.y -= ee.y, this.z -= ee.z, this.w -= ee.w, this
      }
      subtract(ee) {
        return new qe(this._x - ee.x, this._y - ee.y, this._z - ee.z, this._w - ee.w)
      }
      subtractToRef(ee, ie) {
        return ie.x = this._x - ee.x, ie.y = this._y - ee.y, ie.z = this._z - ee.z, ie.w = this._w - ee.w, ie
      }
      subtractFromFloats(ee, ie, He, ye) {
        return new qe(this._x - ee, this._y - ie, this._z - He, this._w - ye)
      }
      subtractFromFloatsToRef(ee, ie, He, ye, be) {
        return be.x = this._x - ee, be.y = this._y - ie, be.z = this._z - He, be.w = this._w - ye, be
      }
      ck() {
        return new qe(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(ee) {
        return ee.x = -this._x, ee.y = -this._y, ee.z = -this._z, ee.w = -this._w, ee
      }
      scaleInPlace(ee) {
        return this.x *= ee, this.y *= ee, this.z *= ee, this.w *= ee, this
      }
      scale(ee) {
        return new qe(this._x * ee, this._y * ee, this._z * ee, this._w * ee)
      }
      scaleToRef(ee, ie) {
        return ie.x = this._x * ee, ie.y = this._y * ee, ie.z = this._z * ee, ie.w = this._w * ee, ie
      }
      scaleAndAddToRef(ee, ie) {
        return ie.x += this._x * ee, ie.y += this._y * ee, ie.z += this._z * ee, ie.w += this._w * ee, ie
      }
      equals(ee) {
        return ee && this._x === ee.x && this._y === ee.y && this._z === ee.z && this._w === ee.w
      }
      equalsWithEpsilon(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye.b;
        return ee && (0, Ue.WithinEpsilon)(this._x, ee.x, ie) && (0, Ue.WithinEpsilon)(this._y, ee.y, ie) && (0, Ue.WithinEpsilon)(this._z, ee.z, ie) && (0, Ue.WithinEpsilon)(this._w, ee.w, ie)
      }
      wFe(ee, ie, He, ye) {
        return this._x === ee && this._y === ie && this._z === He && this._w === ye
      }
      multiplyInPlace(ee) {
        return this.x *= ee.x, this.y *= ee.y, this.z *= ee.z, this.w *= ee.w, this
      }
      multiply(ee) {
        return new qe(this._x * ee.x, this._y * ee.y, this._z * ee.z, this._w * ee.w)
      }
      multiplyToRef(ee, ie) {
        return ie.x = this._x * ee.x, ie.y = this._y * ee.y, ie.z = this._z * ee.z, ie.w = this._w * ee.w, ie
      }
      multiplyByFloats(ee, ie, He, ye) {
        return new qe(this._x * ee, this._y * ie, this._z * He, this._w * ye)
      }
      divide(ee) {
        return new qe(this._x / ee.x, this._y / ee.y, this._z / ee.z, this._w / ee.w)
      }
      divideToRef(ee, ie) {
        return ie.x = this._x / ee.x, ie.y = this._y / ee.y, ie.z = this._z / ee.z, ie.w = this._w / ee.w, ie
      }
      divideInPlace(ee) {
        return this.divideToRef(ee, this)
      }
      minimizeInPlace(ee) {
        return ee.x < this._x && (this.x = ee.x), ee.y < this._y && (this.y = ee.y), ee.z < this._z && (this.z = ee.z), ee.w < this._w && (this.w = ee.w), this
      }
      maximizeInPlace(ee) {
        return ee.x > this._x && (this.x = ee.x), ee.y > this._y && (this.y = ee.y), ee.z > this._z && (this.z = ee.z), ee.w > this._w && (this.w = ee.w), this
      }
      minimizeInPlaceFromFloats(ee, ie, He, ye) {
        return this.x = Math.min(ee, this._x), this.y = Math.min(ie, this._y), this.z = Math.min(He, this._z), this.w = Math.min(ye, this._w), this
      }
      maximizeInPlaceFromFloats(ee, ie, He, ye) {
        return this.x = Math.max(ee, this._x), this.y = Math.max(ie, this._y), this.z = Math.max(He, this._z), this.w = Math.max(ye, this._w), this
      }
      floorToRef(ee) {
        return ee.x = Math.floor(this._x), ee.y = Math.floor(this._y), ee.z = Math.floor(this._z), ee.w = Math.floor(this._w), ee
      }
      floor() {
        return new qe(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(ee) {
        return ee.x = this._x - Math.floor(this._x), ee.y = this._y - Math.floor(this._y), ee.z = this._z - Math.floor(this._z), ee.w = this._w - Math.floor(this._w), ee
      }
      fract() {
        return new qe(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(ee) {
        return 0 === ee || 1 === ee ? this : this.scaleInPlace(1 / ee)
      }
      normalizeToNew() {
        return this.normalizeToRef(new qe)
      }
      normalizeToRef(ee) {
        const ie = this.length();
        return 0 === ie || 1 === ie ? (ee.x = this._x, ee.y = this._y, ee.z = this._z, ee.w = this._w, ee) : this.scaleToRef(1 / ie, ee)
      }
      toVector3() {
        return new ke(this._x, this._y, this._z)
      }
      clone() {
        return new qe(this._x, this._y, this._z, this._w)
      }
      jD(ee) {
        return this.x = ee.x, this.y = ee.y, this.z = ee.z, this.w = ee.w, this
      }
      wie(ee, ie, He, ye) {
        return this.x = ee, this.y = ie, this.z = He, this.w = ye, this
      }
      set(ee, ie, He, ye) {
        return this.wie(ee, ie, He, ye)
      }
      Iee(ee) {
        return this.x = this.y = this.z = this.w = ee, this
      }
      dot(ee) {
        return this._x * ee.x + this._y * ee.y + this._z * ee.z + this._w * ee.w
      }
      static FromArray(ee, ie) {
        return ie || (ie = 0), new qe(ee[ie], ee[ie + 1], ee[ie + 2], ee[ie + 3])
      }
      static FromArrayToRef(ee, ie, He) {
        return He.x = ee[ie], He.y = ee[ie + 1], He.z = ee[ie + 2], He.w = ee[ie + 3], He
      }
      static FromFloatArrayToRef(ee, ie, He) {
        return qe.FromArrayToRef(ee, ie, He), He
      }
      static FromFloatsToRef(ee, ie, He, ye, be) {
        return be.x = ee, be.y = ie, be.z = He, be.w = ye, be
      }
      static Zero() {
        return new qe(0, 0, 0, 0)
      }
      static One() {
        return new qe(1, 1, 1, 1)
      }
      static Random() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new qe((0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie))
      }
      static RandomToRef() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 ? arguments[2] : void 0;
        return He.x = (0, Ue.RandomRange)(ee, ie), He.y = (0, Ue.RandomRange)(ee, ie), He.z = (0, Ue.RandomRange)(ee, ie), He.w = (0, Ue.RandomRange)(ee, ie), He
      }
      static Clamp(ee, ie, He) {
        return qe.ClampToRef(ee, ie, He, new qe)
      }
      static ClampToRef(ee, ie, He, ye) {
        return ye.x = (0, Ue.Clamp)(ee.x, ie.x, He.x), ye.y = (0, Ue.Clamp)(ee.y, ie.y, He.y), ye.z = (0, Ue.Clamp)(ee.z, ie.z, He.z), ye.w = (0, Ue.Clamp)(ee.w, ie.w, He.w), ye
      }
      static CheckExtends(ee, ie, He) {
        ie.minimizeInPlace(ee), He.maximizeInPlace(ee)
      }
      static get ZeroReadOnly() {
        return qe._ZeroReadOnly
      }
      static Normalize(ee) {
        return qe.NormalizeToRef(ee, new qe)
      }
      static NormalizeToRef(ee, ie) {
        return ee.normalizeToRef(ie), ie
      }
      static Minimize(ee, ie) {
        const He = new qe;
        return He.jD(ee), He.minimizeInPlace(ie), He
      }
      static Maximize(ee, ie) {
        const He = new qe;
        return He.jD(ee), He.maximizeInPlace(ie), He
      }
      static Distance(ee, ie) {
        return Math.sqrt(qe.DistanceSquared(ee, ie))
      }
      static DistanceSquared(ee, ie) {
        const He = ee.x - ie.x,
          ye = ee.y - ie.y,
          be = ee.z - ie.z,
          Me = ee.w - ie.w;
        return He * He + ye * ye + be * be + Me * Me
      }
      static Center(ee, ie) {
        return qe.CenterToRef(ee, ie, new qe)
      }
      static CenterToRef(ee, ie, He) {
        return He.x = (ee.x + ie.x) / 2, He.y = (ee.y + ie.y) / 2, He.z = (ee.z + ie.z) / 2, He.w = (ee.w + ie.w) / 2, He
      }
      static TransformCoordinates(ee, ie) {
        return qe.TransformCoordinatesToRef(ee, ie, new qe)
      }
      static TransformCoordinatesToRef(ee, ie, He) {
        return qe.TransformCoordinatesFromFloatsToRef(ee._x, ee._y, ee._z, ie, He), He
      }
      static TransformCoordinatesFromFloatsToRef(ee, ie, He, ye, be) {
        const Me = ye.m,
          Ke = ee * Me[0] + ie * Me[4] + He * Me[8] + Me[12],
          Ue = ee * Me[1] + ie * Me[5] + He * Me[9] + Me[13],
          Fe = ee * Me[2] + ie * Me[6] + He * Me[10] + Me[14],
          Je = ee * Me[3] + ie * Me[7] + He * Me[11] + Me[15];
        return be.x = Ke, be.y = Ue, be.z = Fe, be.w = Je, be
      }
      static TransformNormal(ee, ie) {
        return qe.TransformNormalToRef(ee, ie, new qe)
      }
      static TransformNormalToRef(ee, ie, He) {
        const ye = ie.m,
          be = ee.x * ye[0] + ee.y * ye[4] + ee.z * ye[8],
          Me = ee.x * ye[1] + ee.y * ye[5] + ee.z * ye[9],
          Ke = ee.x * ye[2] + ee.y * ye[6] + ee.z * ye[10];
        return He.x = be, He.y = Me, He.z = Ke, He.w = ee.w, He
      }
      static TransformNormalFromFloatsToRef(ee, ie, He, ye, be, Me) {
        const Ke = be.m;
        return Me.x = ee * Ke[0] + ie * Ke[4] + He * Ke[8], Me.y = ee * Ke[1] + ie * Ke[5] + He * Ke[9], Me.z = ee * Ke[2] + ie * Ke[6] + He * Ke[10], Me.w = ye, Me
      }
      static FromVector3(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new qe(ee._x, ee._y, ee._z, ie)
      }
      static Dot(ee, ie) {
        return ee.x * ie.x + ee.y * ie.y + ee.z * ie.z + ee.w * ie.w
      }
    }
    qe._V8PerformanceHack = new qe(.5, .5, .5, .5), qe._ZeroReadOnly = qe.Zero();
    class fe {
      get x() {
        return this._x
      }
      set x(ee) {
        this._x = ee, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(ee) {
        this._y = ee, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(ee) {
        this._z = ee, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(ee) {
        this._w = ee, this._isDirty = !0
      }
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = ee, this._y = ie, this._z = He, this._w = ye
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let ee = oe(this._x);
        return ee = 397 * ee ^ oe(this._y), ee = 397 * ee ^ oe(this._z), ee = 397 * ee ^ oe(this._w), ee
      }
      Qbe() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ee[ie] = this._x, ee[ie + 1] = this._y, ee[ie + 2] = this._z, ee[ie + 3] = this._w, this
      }
      MR(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return fe.FromArrayToRef(ee, ie, this)
      }
      equals(ee) {
        return ee && this._x === ee._x && this._y === ee._y && this._z === ee._z && this._w === ee._w
      }
      equalsWithEpsilon(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye.b;
        return ee && (0, Ue.WithinEpsilon)(this._x, ee._x, ie) && (0, Ue.WithinEpsilon)(this._y, ee._y, ie) && (0, Ue.WithinEpsilon)(this._z, ee._z, ie) && (0, Ue.WithinEpsilon)(this._w, ee._w, ie)
      }
      isApprox(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ye.b;
        return ee && ((0, Ue.WithinEpsilon)(this._x, ee._x, ie) && (0, Ue.WithinEpsilon)(this._y, ee._y, ie) && (0, Ue.WithinEpsilon)(this._z, ee._z, ie) && (0, Ue.WithinEpsilon)(this._w, ee._w, ie) || (0, Ue.WithinEpsilon)(this._x, -ee._x, ie) && (0, Ue.WithinEpsilon)(this._y, -ee._y, ie) && (0, Ue.WithinEpsilon)(this._z, -ee._z, ie) && (0, Ue.WithinEpsilon)(this._w, -ee._w, ie))
      }
      clone() {
        return new fe(this._x, this._y, this._z, this._w)
      }
      jD(ee) {
        return this._x = ee._x, this._y = ee._y, this._z = ee._z, this._w = ee._w, this._isDirty = !0, this
      }
      wie(ee, ie, He, ye) {
        return this._x = ee, this._y = ie, this._z = He, this._w = ye, this._isDirty = !0, this
      }
      set(ee, ie, He, ye) {
        return this.wie(ee, ie, He, ye)
      }
      Iee(ee) {
        return this.wie(ee, ee, ee, ee)
      }
      add(ee) {
        return new fe(this._x + ee._x, this._y + ee._y, this._z + ee._z, this._w + ee._w)
      }
      addInPlace(ee) {
        return this._x += ee._x, this._y += ee._y, this._z += ee._z, this._w += ee._w, this._isDirty = !0, this
      }
      addToRef(ee, ie) {
        return ie._x = this._x + ee._x, ie._y = this._y + ee._y, ie._z = this._z + ee._z, ie._w = this._w + ee._w, ie._isDirty = !0, ie
      }
      addInPlaceFromFloats(ee, ie, He, ye) {
        return this._x += ee, this._y += ie, this._z += He, this._w += ye, this._isDirty = !0, this
      }
      subtractToRef(ee, ie) {
        return ie._x = this._x - ee._x, ie._y = this._y - ee._y, ie._z = this._z - ee._z, ie._w = this._w - ee._w, ie._isDirty = !0, ie
      }
      subtractFromFloats(ee, ie, He, ye) {
        return this.subtractFromFloatsToRef(ee, ie, He, ye, new fe)
      }
      subtractFromFloatsToRef(ee, ie, He, ye, be) {
        return be._x = this._x - ee, be._y = this._y - ie, be._z = this._z - He, be._w = this._w - ye, be._isDirty = !0, be
      }
      subtract(ee) {
        return new fe(this._x - ee._x, this._y - ee._y, this._z - ee._z, this._w - ee._w)
      }
      XMe(ee) {
        return this._x -= ee._x, this._y -= ee._y, this._z -= ee._z, this._w -= ee._w, this._isDirty = !0, this
      }
      scale(ee) {
        return new fe(this._x * ee, this._y * ee, this._z * ee, this._w * ee)
      }
      scaleToRef(ee, ie) {
        return ie._x = this._x * ee, ie._y = this._y * ee, ie._z = this._z * ee, ie._w = this._w * ee, ie._isDirty = !0, ie
      }
      scaleInPlace(ee) {
        return this._x *= ee, this._y *= ee, this._z *= ee, this._w *= ee, this._isDirty = !0, this
      }
      scaleAndAddToRef(ee, ie) {
        return ie._x += this._x * ee, ie._y += this._y * ee, ie._z += this._z * ee, ie._w += this._w * ee, ie._isDirty = !0, ie
      }
      multiply(ee) {
        const ie = new fe(0, 0, 0, 1);
        return this.multiplyToRef(ee, ie), ie
      }
      multiplyToRef(ee, ie) {
        const He = this._x * ee._w + this._y * ee._z - this._z * ee._y + this._w * ee._x,
          ye = -this._x * ee._z + this._y * ee._w + this._z * ee._x + this._w * ee._y,
          be = this._x * ee._y - this._y * ee._x + this._z * ee._w + this._w * ee._z,
          Me = -this._x * ee._x - this._y * ee._y - this._z * ee._z + this._w * ee._w;
        return ie.wie(He, ye, be, Me), ie
      }
      multiplyInPlace(ee) {
        return this.multiplyToRef(ee, this)
      }
      multiplyByFloats(ee, ie, He, ye) {
        return this._x *= ee, this._y *= ie, this._z *= He, this._w *= ye, this._isDirty = !0, this
      }
      divide(ee) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(ee, ie) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(ee) {
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
      ck() {
        return this.negateToRef(new fe)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(ee) {
        return ee._x = -this._x, ee._y = -this._y, ee._z = -this._z, ee._w = -this._w, ee._isDirty = !0, ee
      }
      wFe(ee, ie, He, ye) {
        return this._x === ee && this._y === ie && this._z === He && this._w === ye
      }
      floorToRef(ee) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(ee) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(ee) {
        return ee.wie(-this._x, -this._y, -this._z, this._w), ee
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new fe(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const ee = this.conjugate(),
          ie = this.lengthSquared();
        return 0 == ie || 1 == ie || ee.scaleInPlace(1 / ie), ee
      }
      invertInPlace() {
        this.conjugateInPlace();
        const ee = this.lengthSquared();
        return 0 == ee || 1 == ee || this.scaleInPlace(1 / ee), this
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
      normalizeFromLength(ee) {
        return 0 === ee || 1 === ee ? this : this.scaleInPlace(1 / ee)
      }
      normalizeToNew() {
        const ee = new fe(0, 0, 0, 1);
        return this.normalizeToRef(ee), ee
      }
      normalizeToRef(ee) {
        const ie = this.length();
        return 0 === ie || 1 === ie ? ee.wie(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / ie, ee)
      }
      toEulerAngles() {
        const ee = ke.Zero();
        return this.toEulerAnglesToRef(ee), ee
      }
      toEulerAnglesToRef(ee) {
        const ie = this._z,
          He = this._x,
          ye = this._y,
          be = this._w,
          Me = ye * ie - He * be,
          Ke = .4999999;
        if (Me < -Ke) ee._y = 2 * Math.atan2(ye, be), ee._x = Math.PI / 2, ee._z = 0, ee._isDirty = !0;
        else if (Me > Ke) ee._y = 2 * Math.atan2(ye, be), ee._x = -Math.PI / 2, ee._z = 0, ee._isDirty = !0;
        else {
          const Ke = be * be,
            Ue = ie * ie,
            Fe = He * He,
            Je = ye * ye;
          ee._z = Math.atan2(2 * (He * ye + ie * be), -Ue - Fe + Je + Ke), ee._x = Math.asin(-2 * Me), ee._y = Math.atan2(2 * (ie * He + ye * be), Ue - Fe - Je + Ke), ee._isDirty = !0
        }
        return ee
      }
      toAlphaBetaGammaToRef(ee) {
        const ie = this._z,
          He = this._x,
          ye = this._y,
          be = this._w,
          Me = Math.sqrt(He * He + ye * ye),
          Ke = Math.sqrt(ie * ie + be * be),
          Ue = 2 * Math.atan2(Me, Ke),
          Fe = 2 * Math.atan2(ie, be),
          Je = 2 * Math.atan2(ye, He),
          oe = (Fe + Je) / 2,
          Re = (Fe - Je) / 2;
        return ee.set(Re, Ue, oe), ee
      }
      toRotationMatrix(ee) {
        return Te.FromQuaternionToRef(this, ee), ee
      }
      fromRotationMatrix(ee) {
        return fe.FromRotationMatrixToRef(ee, this), this
      }
      dot(ee) {
        return this._x * ee._x + this._y * ee._y + this._z * ee._z + this._w * ee._w
      }
      toAxisAngle() {
        const ee = ke.Zero();
        return {
          axis: ee,
          angle: this.toAxisAngleToRef(ee)
        }
      }
      toAxisAngleToRef(ee) {
        let ie;
        const He = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          ye = this._w;
        return He > 0 ? (ie = 2 * Math.atan2(He, ye), ee.set(this._x / He, this._y / He, this._z / He)) : (ie = 0, ee.set(1, 0, 0)), ie
      }
      static FromRotationMatrix(ee) {
        const ie = new fe;
        return fe.FromRotationMatrixToRef(ee, ie), ie
      }
      static FromRotationMatrixToRef(ee, ie) {
        const He = ee.m,
          ye = He[0],
          be = He[4],
          Me = He[8],
          Ke = He[1],
          Ue = He[5],
          Fe = He[9],
          Je = He[2],
          oe = He[6],
          Re = He[10],
          ke = ye + Ue + Re;
        let qe;
        return ke > 0 ? (qe = .5 / Math.sqrt(ke + 1), ie._w = .25 / qe, ie._x = (oe - Fe) * qe, ie._y = (Me - Je) * qe, ie._z = (Ke - be) * qe, ie._isDirty = !0) : ye > Ue && ye > Re ? (qe = 2 * Math.sqrt(1 + ye - Ue - Re), ie._w = (oe - Fe) / qe, ie._x = .25 * qe, ie._y = (be + Ke) / qe, ie._z = (Me + Je) / qe, ie._isDirty = !0) : Ue > Re ? (qe = 2 * Math.sqrt(1 + Ue - ye - Re), ie._w = (Me - Je) / qe, ie._x = (be + Ke) / qe, ie._y = .25 * qe, ie._z = (Fe + oe) / qe, ie._isDirty = !0) : (qe = 2 * Math.sqrt(1 + Re - ye - Ue), ie._w = (Ke - be) / qe, ie._x = (Me + Je) / qe, ie._y = (Fe + oe) / qe, ie._z = .25 * qe, ie._isDirty = !0), ie
      }
      static Dot(ee, ie) {
        return ee._x * ie._x + ee._y * ie._y + ee._z * ie._z + ee._w * ie._w
      }
      static AreClose(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const ye = fe.Dot(ee, ie);
        return 1 - ye * ye <= He
      }
      static SmoothToRef(ee, ie, He, ye, be) {
        let Me = 0 === ye ? 1 : He / ye;
        return Me = (0, Ue.Clamp)(Me, 0, 1), fe.SlerpToRef(ee, ie, Me, be), be
      }
      static Zero() {
        return new fe(0, 0, 0, 0)
      }
      static Inverse(ee) {
        return new fe(-ee._x, -ee._y, -ee._z, ee._w)
      }
      static InverseToRef(ee, ie) {
        return ie.set(-ee._x, -ee._y, -ee._z, ee._w), ie
      }
      static Identity() {
        return new fe(0, 0, 0, 1)
      }
      static IsIdentity(ee) {
        return ee && 0 === ee._x && 0 === ee._y && 0 === ee._z && 1 === ee._w
      }
      static RotationAxis(ee, ie) {
        return fe.RotationAxisToRef(ee, ie, new fe)
      }
      static RotationAxisToRef(ee, ie, He) {
        He._w = Math.cos(ie / 2);
        const ye = Math.sin(ie / 2) / ee.length();
        return He._x = ee._x * ye, He._y = ee._y * ye, He._z = ee._z * ye, He._isDirty = !0, He
      }
      static FromArray(ee, ie) {
        return ie || (ie = 0), new fe(ee[ie], ee[ie + 1], ee[ie + 2], ee[ie + 3])
      }
      static FromArrayToRef(ee, ie, He) {
        return He._x = ee[ie], He._y = ee[ie + 1], He._z = ee[ie + 2], He._w = ee[ie + 3], He._isDirty = !0, He
      }
      static FromFloatsToRef(ee, ie, He, ye, be) {
        return be.wie(ee, ie, He, ye), be
      }
      static FromEulerAngles(ee, ie, He) {
        const ye = new fe;
        return fe.RotationYawPitchRollToRef(ie, ee, He, ye), ye
      }
      static FromEulerAnglesToRef(ee, ie, He, ye) {
        return fe.RotationYawPitchRollToRef(ie, ee, He, ye), ye
      }
      static FromEulerVector(ee) {
        const ie = new fe;
        return fe.RotationYawPitchRollToRef(ee._y, ee._x, ee._z, ie), ie
      }
      static FromEulerVectorToRef(ee, ie) {
        return fe.RotationYawPitchRollToRef(ee._y, ee._x, ee._z, ie), ie
      }
      static FromUnitVectorsToRef(ee, ie, He) {
        let be = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ye.b;
        const Me = ke.Dot(ee, ie) + 1;
        return Me < be ? Math.abs(ee.x) > Math.abs(ee.z) ? He.set(-ee.y, ee.x, 0, 0) : He.set(0, -ee.z, ee.y, 0) : (ke.CrossToRef(ee, ie, Xe.rf[0]), He.set(Xe.rf[0].x, Xe.rf[0].y, Xe.rf[0].z, Me)), He.normalize()
      }
      static RotationYawPitchRoll(ee, ie, He) {
        const ye = new fe;
        return fe.RotationYawPitchRollToRef(ee, ie, He, ye), ye
      }
      static RotationYawPitchRollToRef(ee, ie, He, ye) {
        const be = .5 * He,
          Me = .5 * ie,
          Ke = .5 * ee,
          Ue = Math.sin(be),
          Fe = Math.cos(be),
          Je = Math.sin(Me),
          oe = Math.cos(Me),
          Re = Math.sin(Ke),
          ke = Math.cos(Ke);
        return ye._x = ke * Je * Fe + Re * oe * Ue, ye._y = Re * oe * Fe - ke * Je * Ue, ye._z = ke * oe * Ue - Re * Je * Fe, ye._w = ke * oe * Fe + Re * Je * Ue, ye._isDirty = !0, ye
      }
      static RotationAlphaBetaGamma(ee, ie, He) {
        const ye = new fe;
        return fe.RotationAlphaBetaGammaToRef(ee, ie, He, ye), ye
      }
      static RotationAlphaBetaGammaToRef(ee, ie, He, ye) {
        const be = .5 * (He + ee),
          Me = .5 * (He - ee),
          Ke = .5 * ie;
        return ye._x = Math.cos(Me) * Math.sin(Ke), ye._y = Math.sin(Me) * Math.sin(Ke), ye._z = Math.sin(be) * Math.cos(Ke), ye._w = Math.cos(be) * Math.cos(Ke), ye._isDirty = !0, ye
      }
      static RotationQuaternionFromAxis(ee, ie, He) {
        const ye = new fe(0, 0, 0, 0);
        return fe.RotationQuaternionFromAxisToRef(ee, ie, He, ye), ye
      }
      static RotationQuaternionFromAxisToRef(ee, ie, He, ye) {
        const be = pe.Matrix[0];
        return ee = ee.normalizeToRef(pe.rf[0]), ie = ie.normalizeToRef(pe.rf[1]), He = He.normalizeToRef(pe.rf[2]), Te.FromXYZAxesToRef(ee, ie, He, be), fe.FromRotationMatrixToRef(be, ye), ye
      }
      static FromLookDirectionLH(ee, ie) {
        const He = new fe;
        return fe.FromLookDirectionLHToRef(ee, ie, He), He
      }
      static FromLookDirectionLHToRef(ee, ie, He) {
        const ye = pe.Matrix[0];
        return Te.LookDirectionLHToRef(ee, ie, ye), fe.FromRotationMatrixToRef(ye, He), He
      }
      static FromLookDirectionRH(ee, ie) {
        const He = new fe;
        return fe.FromLookDirectionRHToRef(ee, ie, He), He
      }
      static FromLookDirectionRHToRef(ee, ie, He) {
        const ye = pe.Matrix[0];
        return Te.LookDirectionRHToRef(ee, ie, ye), fe.FromRotationMatrixToRef(ye, He)
      }
      static Slerp(ee, ie, He) {
        const ye = fe.Identity();
        return fe.SlerpToRef(ee, ie, He, ye), ye
      }
      static SlerpToRef(ee, ie, He, ye) {
        let be, Me, Ke = ee._x * ie._x + ee._y * ie._y + ee._z * ie._z + ee._w * ie._w,
          Ue = !1;
        if (Ke < 0 && (Ue = !0, Ke = -Ke), Ke > .999999) Me = 1 - He, be = Ue ? -He : He;
        else {
          const ee = Math.acos(Ke),
            ie = 1 / Math.sin(ee);
          Me = Math.sin((1 - He) * ee) * ie, be = Ue ? -Math.sin(He * ee) * ie : Math.sin(He * ee) * ie
        }
        return ye._x = Me * ee._x + be * ie._x, ye._y = Me * ee._y + be * ie._y, ye._z = Me * ee._z + be * ie._z, ye._w = Me * ee._w + be * ie._w, ye._isDirty = !0, ye
      }
      static Hermite(ee, ie, He, ye, be) {
        const Me = be * be,
          Ke = be * Me,
          Ue = 2 * Ke - 3 * Me + 1,
          Fe = -2 * Ke + 3 * Me,
          Je = Ke - 2 * Me + be,
          oe = Ke - Me,
          Re = ee._x * Ue + He._x * Fe + ie._x * Je + ye._x * oe,
          ke = ee._y * Ue + He._y * Fe + ie._y * Je + ye._y * oe,
          qe = ee._z * Ue + He._z * Fe + ie._z * Je + ye._z * oe,
          Te = ee._w * Ue + He._w * Fe + ie._w * Je + ye._w * oe;
        return new fe(Re, ke, qe, Te)
      }
      static Hermite1stDerivative(ee, ie, He, ye, be) {
        const Me = new fe;
        return this.Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me), Me
      }
      static Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me) {
        const Ke = be * be;
        return Me._x = 6 * (Ke - be) * ee._x + (3 * Ke - 4 * be + 1) * ie._x + 6 * (-Ke + be) * He._x + (3 * Ke - 2 * be) * ye._x, Me._y = 6 * (Ke - be) * ee._y + (3 * Ke - 4 * be + 1) * ie._y + 6 * (-Ke + be) * He._y + (3 * Ke - 2 * be) * ye._y, Me._z = 6 * (Ke - be) * ee._z + (3 * Ke - 4 * be + 1) * ie._z + 6 * (-Ke + be) * He._z + (3 * Ke - 2 * be) * ye._z, Me._w = 6 * (Ke - be) * ee._w + (3 * Ke - 4 * be + 1) * ie._w + 6 * (-Ke + be) * He._w + (3 * Ke - 2 * be) * ye._w, Me._isDirty = !0, Me
      }
      static Normalize(ee) {
        const ie = fe.Zero();
        return fe.NormalizeToRef(ee, ie), ie
      }
      static NormalizeToRef(ee, ie) {
        return ee.normalizeToRef(ie), ie
      }
      static Clamp(ee, ie, He) {
        const ye = new fe;
        return fe.ClampToRef(ee, ie, He, ye), ye
      }
      static ClampToRef(ee, ie, He, ye) {
        return ye.wie((0, Ue.Clamp)(ee.x, ie.x, He.x), (0, Ue.Clamp)(ee.y, ie.y, He.y), (0, Ue.Clamp)(ee.z, ie.z, He.z), (0, Ue.Clamp)(ee.w, ie.w, He.w))
      }
      static Random() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new fe((0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie))
      }
      static RandomToRef() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).wie((0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie), (0, Ue.RandomRange)(ee, ie))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(ee, ie) {
        return Math.sqrt(fe.DistanceSquared(ee, ie))
      }
      static DistanceSquared(ee, ie) {
        const He = ee.x - ie.x,
          ye = ee.y - ie.y,
          be = ee.z - ie.z,
          Me = ee.w - ie.w;
        return He * He + ye * ye + be * be + Me * Me
      }
      static Center(ee, ie) {
        return fe.CenterToRef(ee, ie, fe.Zero())
      }
      static CenterToRef(ee, ie, He) {
        return He.wie((ee.x + ie.x) / 2, (ee.y + ie.y) / 2, (ee.z + ie.z) / 2, (ee.w + ie.w) / 2)
      }
    }
    fe._V8PerformanceHack = new fe(.5, .5, .5, .5);
    class Te {
      static get Use64Bits() {
        return Me.e.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Fe.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ye = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = ee, this._isIdentity3x2 = ee || He, this._isIdentityDirty = !this._isIdentity && ie, this._isIdentity3x2Dirty = !this._isIdentity3x2 && ye
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Me.e.MatrixTrackPrecisionChange && Me.e.MatrixTrackedMatrices.push(this), this._m = new Me.e.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const ee = this._m;
          this._isIdentity = 1 === ee[0] && 0 === ee[1] && 0 === ee[2] && 0 === ee[3] && 0 === ee[4] && 1 === ee[5] && 0 === ee[6] && 0 === ee[7] && 0 === ee[8] && 0 === ee[9] && 1 === ee[10] && 0 === ee[11] && 0 === ee[12] && 0 === ee[13] && 0 === ee[14] && 1 === ee[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const ee = this._m,
          ie = ee[0],
          He = ee[1],
          ye = ee[2],
          be = ee[3],
          Me = ee[4],
          Ke = ee[5],
          Ue = ee[6],
          Fe = ee[7],
          Je = ee[8],
          oe = ee[9],
          Re = ee[10],
          ke = ee[11],
          qe = ee[12],
          fe = ee[13],
          Te = ee[14],
          pe = ee[15],
          Xe = Re * pe - Te * ke,
          ze = oe * pe - fe * ke,
          Be = oe * Te - fe * Re,
          Ee = Je * pe - qe * ke,
          ge = Je * Te - Re * qe,
          Oe = Je * fe - qe * oe;
        return ie * +(Ke * Xe - Ue * ze + Fe * Be) + He * -(Me * Xe - Ue * Ee + Fe * ge) + ye * +(Me * ze - Ke * Ee + Fe * Oe) + be * -(Me * Be - Ke * ge + Ue * Oe)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!ee) return this._m;
        const He = this._m;
        for (let ye = 0; ye < 16; ye++) ee[ie + ye] = He[ye];
        return this
      }
      Qbe() {
        return this._m
      }
      MR(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Te.FromArrayToRef(ee, ie, this)
      }
      wie() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        return Te.FromArrayToRef(ie, 0, this)
      }
      set() {
        const ee = this._m;
        for (let ie = 0; ie < 16; ie++) ee[ie] = ie < 0 || arguments.length <= ie ? void 0 : arguments[ie];
        return this.markAsUpdated(), this
      }
      Iee(ee) {
        const ie = this._m;
        for (let He = 0; He < 16; He++) ie[He] = ee;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Te.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(ee) {
        const ie = new Te;
        return this.addToRef(ee, ie), ie
      }
      addToRef(ee, ie) {
        const He = this._m,
          ye = ie._m,
          be = ee.m;
        for (let Me = 0; Me < 16; Me++) ye[Me] = He[Me] + be[Me];
        return ie.markAsUpdated(), ie
      }
      addToSelf(ee) {
        const ie = this._m,
          He = ee.m;
        return ie[0] += He[0], ie[1] += He[1], ie[2] += He[2], ie[3] += He[3], ie[4] += He[4], ie[5] += He[5], ie[6] += He[6], ie[7] += He[7], ie[8] += He[8], ie[9] += He[9], ie[10] += He[10], ie[11] += He[11], ie[12] += He[12], ie[13] += He[13], ie[14] += He[14], ie[15] += He[15], this.markAsUpdated(), this
      }
      addInPlace(ee) {
        const ie = this._m,
          He = ee.m;
        for (let ye = 0; ye < 16; ye++) ie[ye] += He[ye];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const ee = this._m;
        for (let ie = 0; ie < 16; ie++) ee[ie] += ie < 0 || arguments.length <= ie ? void 0 : arguments[ie];
        return this.markAsUpdated(), this
      }
      subtract(ee) {
        const ie = this._m,
          He = ee.m;
        for (let ye = 0; ye < 16; ye++) ie[ye] -= He[ye];
        return this.markAsUpdated(), this
      }
      subtractToRef(ee, ie) {
        const He = this._m,
          ye = ee.m,
          be = ie._m;
        for (let Me = 0; Me < 16; Me++) be[Me] = He[Me] - ye[Me];
        return ie.markAsUpdated(), ie
      }
      XMe(ee) {
        const ie = this._m,
          He = ee.m;
        for (let ye = 0; ye < 16; ye++) ie[ye] -= He[ye];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        return this.subtractFromFloatsToRef(...ie, new Te)
      }
      subtractFromFloatsToRef() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        const ye = ie.pop(),
          be = this._m,
          Me = ye._m,
          Ke = ie;
        for (let Ue = 0; Ue < 16; Ue++) Me[Ue] = be[Ue] - Ke[Ue];
        return ye.markAsUpdated(), ye
      }
      invertToRef(ee) {
        return !0 === this._isIdentity ? (Te.IdentityToRef(ee), ee) : ((0, Fe.d)(this, ee.Qbe()) ? ee.markAsUpdated() : ee.jD(this), ee)
      }
      addAtIndex(ee, ie) {
        return this._m[ee] += ie, this.markAsUpdated(), this
      }
      multiplyAtIndex(ee, ie) {
        return this._m[ee] *= ie, this.markAsUpdated(), this
      }
      setTranslationFromFloats(ee, ie, He) {
        return this._m[12] = ee, this._m[13] = ie, this._m[14] = He, this.markAsUpdated(), this
      }
      addTranslationFromFloats(ee, ie, He) {
        return this._m[12] += ee, this._m[13] += ie, this._m[14] += He, this.markAsUpdated(), this
      }
      setTranslation(ee) {
        return this.setTranslationFromFloats(ee._x, ee._y, ee._z)
      }
      getTranslation() {
        return new ke(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(ee) {
        return ee.x = this._m[12], ee.y = this._m[13], ee.z = this._m[14], ee
      }
      removeRotationAndScaling() {
        const ee = this.m;
        return Te.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ee[12], ee[13], ee[14], ee[15], this), this._updateIdentityStatus(0 === ee[12] && 0 === ee[13] && 0 === ee[14] && 1 === ee[15]), this
      }
      jD(ee) {
        ee.copyToArray(this._m);
        const ie = ee;
        return this.updateFlag = ie.updateFlag, this._updateIdentityStatus(ie._isIdentity, ie._isIdentityDirty, ie._isIdentity3x2, ie._isIdentity3x2Dirty), this
      }
      copyToArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Fe.c)(this, ee, ie), this
      }
      multiply(ee) {
        const ie = new Te;
        return this.multiplyToRef(ee, ie), ie
      }
      multiplyInPlace(ee) {
        const ie = this._m,
          He = ee.m;
        for (let ye = 0; ye < 16; ye++) ie[ye] *= He[ye];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const ee = this._m;
        for (let ie = 0; ie < 16; ie++) ee[ie] *= ie < 0 || arguments.length <= ie ? void 0 : arguments[ie];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        const ye = ie.pop(),
          be = this._m,
          Me = ye._m,
          Ke = ie;
        for (let Ue = 0; Ue < 16; Ue++) Me[Ue] = be[Ue] * Ke[Ue];
        return ye.markAsUpdated(), ye
      }
      multiplyToRef(ee, ie) {
        return this._isIdentity ? (ie.jD(ee), ie) : ee._isIdentity ? (ie.jD(this), ie) : (this.multiplyToArray(ee, ie._m, 0), ie.markAsUpdated(), ie)
      }
      multiplyToArray(ee, ie, He) {
        return (0, Fe.m)(this, ee, ie, He), this
      }
      divide(ee) {
        return this.divideToRef(ee, new Te)
      }
      divideToRef(ee, ie) {
        const He = this._m,
          ye = ee.m,
          be = ie._m;
        for (let Me = 0; Me < 16; Me++) be[Me] = He[Me] / ye[Me];
        return ie.markAsUpdated(), ie
      }
      divideInPlace(ee) {
        const ie = this._m,
          He = ee.m;
        for (let ye = 0; ye < 16; ye++) ie[ye] /= He[ye];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(ee) {
        const ie = this._m,
          He = ee.m;
        for (let ye = 0; ye < 16; ye++) ie[ye] = Math.min(ie[ye], He[ye]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const ee = this._m;
        for (let ie = 0; ie < 16; ie++) ee[ie] = Math.min(ee[ie], ie < 0 || arguments.length <= ie ? void 0 : arguments[ie]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(ee) {
        const ie = this._m,
          He = ee.m;
        for (let ye = 0; ye < 16; ye++) ie[ye] = Math.max(ie[ye], He[ye]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const ee = this._m;
        for (let ie = 0; ie < 16; ie++) ee[ie] = Math.max(ee[ie], ie < 0 || arguments.length <= ie ? void 0 : arguments[ie]);
        return this.markAsUpdated(), this
      }
      ck() {
        return this.negateToRef(new Te)
      }
      negateInPlace() {
        const ee = this._m;
        for (let ie = 0; ie < 16; ie++) ee[ie] = -ee[ie];
        return this.markAsUpdated(), this
      }
      negateToRef(ee) {
        const ie = this._m,
          He = ee._m;
        for (let ye = 0; ye < 16; ye++) He[ye] = -ie[ye];
        return ee.markAsUpdated(), ee
      }
      equals(ee) {
        const ie = ee;
        if (!ie) return !1;
        if ((this._isIdentity || ie._isIdentity) && !this._isIdentityDirty && !ie._isIdentityDirty) return this._isIdentity && ie._isIdentity;
        const He = this.m,
          ye = ie.m;
        return He[0] === ye[0] && He[1] === ye[1] && He[2] === ye[2] && He[3] === ye[3] && He[4] === ye[4] && He[5] === ye[5] && He[6] === ye[6] && He[7] === ye[7] && He[8] === ye[8] && He[9] === ye[9] && He[10] === ye[10] && He[11] === ye[11] && He[12] === ye[12] && He[13] === ye[13] && He[14] === ye[14] && He[15] === ye[15]
      }
      equalsWithEpsilon(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = this._m,
          ye = ee.m;
        for (let be = 0; be < 16; be++)
          if (!(0, Ue.WithinEpsilon)(He[be], ye[be], ie)) return !1;
        return !0
      }
      wFe() {
        const ee = this._m;
        for (let ie = 0; ie < 16; ie++)
          if (ee[ie] != (ie < 0 || arguments.length <= ie ? void 0 : arguments[ie])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Te)
      }
      floorToRef(ee) {
        const ie = this._m,
          He = ee._m;
        for (let ye = 0; ye < 16; ye++) He[ye] = Math.floor(ie[ye]);
        return ee.markAsUpdated(), ee
      }
      fract() {
        return this.fractToRef(new Te)
      }
      fractToRef(ee) {
        const ie = this._m,
          He = ee._m;
        for (let ye = 0; ye < 16; ye++) He[ye] = ie[ye] - Math.floor(ie[ye]);
        return ee.markAsUpdated(), ee
      }
      clone() {
        const ee = new Te;
        return ee.jD(this), ee
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let ee = oe(this._m[0]);
        for (let ie = 1; ie < 16; ie++) ee = 397 * ee ^ oe(this._m[ie]);
        return ee
      }
      decomposeToTransformNode(ee) {
        return ee.rotationQuaternion = ee.rotationQuaternion || new fe, this.decompose(ee.wR, ee.rotationQuaternion, ee.position)
      }
      decompose(ee, ie, He, ye) {
        let be = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return He && He.Iee(0), ee && ee.Iee(1), ie && ie.wie(0, 0, 0, 1), !0;
        const Me = this._m;
        if (He && He.wie(Me[12], Me[13], Me[14]), (ee = ee || pe.rf[0]).x = Math.sqrt(Me[0] * Me[0] + Me[1] * Me[1] + Me[2] * Me[2]), ee.y = Math.sqrt(Me[4] * Me[4] + Me[5] * Me[5] + Me[6] * Me[6]), ee.z = Math.sqrt(Me[8] * Me[8] + Me[9] * Me[9] + Me[10] * Me[10]), ye) {
          const ie = (be ? ye.absoluteScaling.x : ye.wR.x) < 0 ? -1 : 1,
            He = (be ? ye.absoluteScaling.y : ye.wR.y) < 0 ? -1 : 1,
            Me = (be ? ye.absoluteScaling.z : ye.wR.z) < 0 ? -1 : 1;
          ee.x *= ie, ee.y *= He, ee.z *= Me
        } else this.determinant() <= 0 && (ee.y *= -1);
        if (0 === ee._x || 0 === ee._y || 0 === ee._z) return ie && ie.wie(0, 0, 0, 1), !1;
        if (ie) {
          const He = 1 / ee._x,
            ye = 1 / ee._y,
            be = 1 / ee._z;
          Te.FromValuesToRef(Me[0] * He, Me[1] * He, Me[2] * He, 0, Me[4] * ye, Me[5] * ye, Me[6] * ye, 0, Me[8] * be, Me[9] * be, Me[10] * be, 0, 0, 0, 0, 1, pe.Matrix[0]), fe.FromRotationMatrixToRef(pe.Matrix[0], ie)
        }
        return !0
      }
      getRow(ee) {
        if (ee < 0 || ee > 3) return null;
        const ie = 4 * ee;
        return new qe(this._m[ie + 0], this._m[ie + 1], this._m[ie + 2], this._m[ie + 3])
      }
      getRowToRef(ee, ie) {
        if (ee >= 0 && ee <= 3) {
          const He = 4 * ee;
          ie.x = this._m[He + 0], ie.y = this._m[He + 1], ie.z = this._m[He + 2], ie.w = this._m[He + 3]
        }
        return ie
      }
      setRow(ee, ie) {
        return this.setRowFromFloats(ee, ie.x, ie.y, ie.z, ie.w)
      }
      transpose() {
        const ee = new Te;
        return Te.TransposeToRef(this, ee), ee
      }
      transposeToRef(ee) {
        return Te.TransposeToRef(this, ee), ee
      }
      setRowFromFloats(ee, ie, He, ye, be) {
        if (ee < 0 || ee > 3) return this;
        const Me = 4 * ee;
        return this._m[Me + 0] = ie, this._m[Me + 1] = He, this._m[Me + 2] = ye, this._m[Me + 3] = be, this.markAsUpdated(), this
      }
      scale(ee) {
        const ie = new Te;
        return this.scaleToRef(ee, ie), ie
      }
      scaleToRef(ee, ie) {
        for (let He = 0; He < 16; He++) ie._m[He] = this._m[He] * ee;
        return ie.markAsUpdated(), ie
      }
      scaleAndAddToRef(ee, ie) {
        for (let He = 0; He < 16; He++) ie._m[He] += this._m[He] * ee;
        return ie.markAsUpdated(), ie
      }
      scaleInPlace(ee) {
        const ie = this._m;
        for (let He = 0; He < 16; He++) ie[He] *= ee;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(ee) {
        const ie = pe.Matrix[0];
        this.invertToRef(ie), ie.transposeToRef(ee);
        const He = ee._m;
        return Te.FromValuesToRef(He[0], He[1], He[2], 0, He[4], He[5], He[6], 0, He[8], He[9], He[10], 0, 0, 0, 0, 1, ee), ee
      }
      getRotationMatrix() {
        const ee = new Te;
        return this.getRotationMatrixToRef(ee), ee
      }
      getRotationMatrixToRef(ee) {
        const ie = pe.rf[0];
        if (!this.decompose(ie)) return Te.IdentityToRef(ee), ee;
        const He = this._m,
          ye = 1 / ie._x,
          be = 1 / ie._y,
          Me = 1 / ie._z;
        return Te.FromValuesToRef(He[0] * ye, He[1] * ye, He[2] * ye, 0, He[4] * be, He[5] * be, He[6] * be, 0, He[8] * Me, He[9] * Me, He[10] * Me, 0, 0, 0, 0, 1, ee), ee
      }
      toggleModelMatrixHandInPlace() {
        const ee = this._m;
        return ee[2] *= -1, ee[6] *= -1, ee[8] *= -1, ee[9] *= -1, ee[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const ee = this._m;
        return ee[8] *= -1, ee[9] *= -1, ee[10] *= -1, ee[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(ze, this), this
      }
      static FromArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const He = new Te;
        return Te.FromArrayToRef(ee, ie, He), He
      }
      static FromArrayToRef(ee, ie, He) {
        for (let ye = 0; ye < 16; ye++) He._m[ye] = ee[ye + ie];
        return He.markAsUpdated(), He
      }
      static FromFloat32ArrayToRefScaled(ee, ie, He, ye) {
        return ye._m[0] = ee[0 + ie] * He, ye._m[1] = ee[1 + ie] * He, ye._m[2] = ee[2 + ie] * He, ye._m[3] = ee[3 + ie] * He, ye._m[4] = ee[4 + ie] * He, ye._m[5] = ee[5 + ie] * He, ye._m[6] = ee[6 + ie] * He, ye._m[7] = ee[7 + ie] * He, ye._m[8] = ee[8 + ie] * He, ye._m[9] = ee[9 + ie] * He, ye._m[10] = ee[10 + ie] * He, ye._m[11] = ee[11 + ie] * He, ye._m[12] = ee[12 + ie] * He, ye._m[13] = ee[13 + ie] * He, ye._m[14] = ee[14 + ie] * He, ye._m[15] = ee[15 + ie] * He, ye.markAsUpdated(), ye
      }
      static get IdentityReadOnly() {
        return Te._IdentityReadOnly
      }
      static FromValuesToRef(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, Te, pe) {
        const Xe = pe._m;
        Xe[0] = ee, Xe[1] = ie, Xe[2] = He, Xe[3] = ye, Xe[4] = be, Xe[5] = Me, Xe[6] = Ke, Xe[7] = Ue, Xe[8] = Fe, Xe[9] = Je, Xe[10] = oe, Xe[11] = Re, Xe[12] = ke, Xe[13] = qe, Xe[14] = fe, Xe[15] = Te, pe.markAsUpdated()
      }
      static FromValues(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe, Re, ke, qe, fe, pe) {
        const Xe = new Te,
          ze = Xe._m;
        return ze[0] = ee, ze[1] = ie, ze[2] = He, ze[3] = ye, ze[4] = be, ze[5] = Me, ze[6] = Ke, ze[7] = Ue, ze[8] = Fe, ze[9] = Je, ze[10] = oe, ze[11] = Re, ze[12] = ke, ze[13] = qe, ze[14] = fe, ze[15] = pe, Xe.markAsUpdated(), Xe
      }
      static Compose(ee, ie, He) {
        const ye = new Te;
        return Te.ComposeToRef(ee, ie, He, ye), ye
      }
      static ComposeToRef(ee, ie, He, ye) {
        const be = ye._m,
          Me = ie._x,
          Ke = ie._y,
          Ue = ie._z,
          Fe = ie._w,
          Je = Me + Me,
          oe = Ke + Ke,
          Re = Ue + Ue,
          ke = Me * Je,
          qe = Me * oe,
          fe = Me * Re,
          Te = Ke * oe,
          pe = Ke * Re,
          Xe = Ue * Re,
          ze = Fe * Je,
          Be = Fe * oe,
          Ee = Fe * Re,
          ge = ee._x,
          Oe = ee._y,
          de = ee._z;
        return be[0] = (1 - (Te + Xe)) * ge, be[1] = (qe + Ee) * ge, be[2] = (fe - Be) * ge, be[3] = 0, be[4] = (qe - Ee) * Oe, be[5] = (1 - (ke + Xe)) * Oe, be[6] = (pe + ze) * Oe, be[7] = 0, be[8] = (fe + Be) * de, be[9] = (pe - ze) * de, be[10] = (1 - (ke + Te)) * de, be[11] = 0, be[12] = He._x, be[13] = He._y, be[14] = He._z, be[15] = 1, ye.markAsUpdated(), ye
      }
      static Identity() {
        const ee = Te.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return ee._updateIdentityStatus(!0), ee
      }
      static IdentityToRef(ee) {
        return Te.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, ee), ee._updateIdentityStatus(!0), ee
      }
      static Zero() {
        const ee = Te.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return ee._updateIdentityStatus(!1), ee
      }
      static RotationX(ee) {
        const ie = new Te;
        return Te.RotationXToRef(ee, ie), ie
      }
      static Invert(ee) {
        const ie = new Te;
        return ee.invertToRef(ie), ie
      }
      static RotationXToRef(ee, ie) {
        const He = Math.sin(ee),
          ye = Math.cos(ee);
        return Te.FromValuesToRef(1, 0, 0, 0, 0, ye, He, 0, 0, -He, ye, 0, 0, 0, 0, 1, ie), ie._updateIdentityStatus(1 === ye && 0 === He), ie
      }
      static RotationY(ee) {
        const ie = new Te;
        return Te.RotationYToRef(ee, ie), ie
      }
      static RotationYToRef(ee, ie) {
        const He = Math.sin(ee),
          ye = Math.cos(ee);
        return Te.FromValuesToRef(ye, 0, -He, 0, 0, 1, 0, 0, He, 0, ye, 0, 0, 0, 0, 1, ie), ie._updateIdentityStatus(1 === ye && 0 === He), ie
      }
      static RotationZ(ee) {
        const ie = new Te;
        return Te.RotationZToRef(ee, ie), ie
      }
      static RotationZToRef(ee, ie) {
        const He = Math.sin(ee),
          ye = Math.cos(ee);
        return Te.FromValuesToRef(ye, He, 0, 0, -He, ye, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, ie), ie._updateIdentityStatus(1 === ye && 0 === He), ie
      }
      static RotationAxis(ee, ie) {
        const He = new Te;
        return Te.RotationAxisToRef(ee, ie, He), He
      }
      static RotationAxisToRef(ee, ie, He) {
        const ye = Math.sin(-ie),
          be = Math.cos(-ie),
          Me = 1 - be;
        ee = ee.normalizeToRef(pe.rf[0]);
        const Ke = He._m;
        return Ke[0] = ee._x * ee._x * Me + be, Ke[1] = ee._x * ee._y * Me - ee._z * ye, Ke[2] = ee._x * ee._z * Me + ee._y * ye, Ke[3] = 0, Ke[4] = ee._y * ee._x * Me + ee._z * ye, Ke[5] = ee._y * ee._y * Me + be, Ke[6] = ee._y * ee._z * Me - ee._x * ye, Ke[7] = 0, Ke[8] = ee._z * ee._x * Me - ee._y * ye, Ke[9] = ee._z * ee._y * Me + ee._x * ye, Ke[10] = ee._z * ee._z * Me + be, Ke[11] = 0, Ke[12] = 0, Ke[13] = 0, Ke[14] = 0, Ke[15] = 1, He.markAsUpdated(), He
      }
      static RotationAlignToRef(ee, ie, He) {
        let be = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Me = ke.Dot(ie, ee),
          Ke = He._m;
        if (Me < -1 + ye.b) Ke[0] = -1, Ke[1] = 0, Ke[2] = 0, Ke[3] = 0, Ke[4] = 0, Ke[5] = be ? 1 : -1, Ke[6] = 0, Ke[7] = 0, Ke[8] = 0, Ke[9] = 0, Ke[10] = be ? -1 : 1, Ke[11] = 0;
        else {
          const He = ke.Cross(ie, ee),
            ye = 1 / (1 + Me);
          Ke[0] = He._x * He._x * ye + Me, Ke[1] = He._y * He._x * ye - He._z, Ke[2] = He._z * He._x * ye + He._y, Ke[3] = 0, Ke[4] = He._x * He._y * ye + He._z, Ke[5] = He._y * He._y * ye + Me, Ke[6] = He._z * He._y * ye - He._x, Ke[7] = 0, Ke[8] = He._x * He._z * ye - He._y, Ke[9] = He._y * He._z * ye + He._x, Ke[10] = He._z * He._z * ye + Me, Ke[11] = 0
        }
        return Ke[12] = 0, Ke[13] = 0, Ke[14] = 0, Ke[15] = 1, He.markAsUpdated(), He
      }
      static RotationYawPitchRoll(ee, ie, He) {
        const ye = new Te;
        return Te.RotationYawPitchRollToRef(ee, ie, He, ye), ye
      }
      static RotationYawPitchRollToRef(ee, ie, He, ye) {
        return fe.RotationYawPitchRollToRef(ee, ie, He, pe.Quaternion[0]), pe.Quaternion[0].toRotationMatrix(ye), ye
      }
      static Scaling(ee, ie, He) {
        const ye = new Te;
        return Te.ScalingToRef(ee, ie, He, ye), ye
      }
      static ScalingToRef(ee, ie, He, ye) {
        return Te.FromValuesToRef(ee, 0, 0, 0, 0, ie, 0, 0, 0, 0, He, 0, 0, 0, 0, 1, ye), ye._updateIdentityStatus(1 === ee && 1 === ie && 1 === He), ye
      }
      static Translation(ee, ie, He) {
        const ye = new Te;
        return Te.TranslationToRef(ee, ie, He, ye), ye
      }
      static TranslationToRef(ee, ie, He, ye) {
        return Te.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, ee, ie, He, 1, ye), ye._updateIdentityStatus(0 === ee && 0 === ie && 0 === He), ye
      }
      static Lerp(ee, ie, He) {
        const ye = new Te;
        return Te.LerpToRef(ee, ie, He, ye), ye
      }
      static LerpToRef(ee, ie, He, ye) {
        const be = ye._m,
          Me = ee.m,
          Ke = ie.m;
        for (let Ue = 0; Ue < 16; Ue++) be[Ue] = Me[Ue] * (1 - He) + Ke[Ue] * He;
        return ye.markAsUpdated(), ye
      }
      static DecomposeLerp(ee, ie, He) {
        const ye = new Te;
        return Te.DecomposeLerpToRef(ee, ie, He, ye), ye
      }
      static DecomposeLerpToRef(ee, ie, He, ye) {
        const be = pe.rf[0],
          Me = pe.Quaternion[0],
          Ke = pe.rf[1];
        ee.decompose(be, Me, Ke);
        const Ue = pe.rf[2],
          Fe = pe.Quaternion[1],
          Je = pe.rf[3];
        ie.decompose(Ue, Fe, Je);
        const oe = pe.rf[4];
        ke.LerpToRef(be, Ue, He, oe);
        const Re = pe.Quaternion[2];
        fe.SlerpToRef(Me, Fe, He, Re);
        const qe = pe.rf[5];
        return ke.LerpToRef(Ke, Je, He, qe), Te.ComposeToRef(oe, Re, qe, ye), ye
      }
      static LookAtLH(ee, ie, He) {
        const ye = new Te;
        return Te.LookAtLHToRef(ee, ie, He, ye), ye
      }
      static LookAtLHToRef(ee, ie, He, ye) {
        const be = pe.rf[0],
          Me = pe.rf[1],
          Ke = pe.rf[2];
        ie.subtractToRef(ee, Ke), Ke.normalize(), ke.CrossToRef(He, Ke, be);
        const Ue = be.lengthSquared();
        0 === Ue ? be.x = 1 : be.normalizeFromLength(Math.sqrt(Ue)), ke.CrossToRef(Ke, be, Me), Me.normalize();
        const Fe = -ke.Dot(be, ee),
          Je = -ke.Dot(Me, ee),
          oe = -ke.Dot(Ke, ee);
        return Te.FromValuesToRef(be._x, Me._x, Ke._x, 0, be._y, Me._y, Ke._y, 0, be._z, Me._z, Ke._z, 0, Fe, Je, oe, 1, ye), ye
      }
      static LookAtRH(ee, ie, He) {
        const ye = new Te;
        return Te.LookAtRHToRef(ee, ie, He, ye), ye
      }
      static LookAtRHToRef(ee, ie, He, ye) {
        const be = pe.rf[0],
          Me = pe.rf[1],
          Ke = pe.rf[2];
        ee.subtractToRef(ie, Ke), Ke.normalize(), ke.CrossToRef(He, Ke, be);
        const Ue = be.lengthSquared();
        0 === Ue ? be.x = 1 : be.normalizeFromLength(Math.sqrt(Ue)), ke.CrossToRef(Ke, be, Me), Me.normalize();
        const Fe = -ke.Dot(be, ee),
          Je = -ke.Dot(Me, ee),
          oe = -ke.Dot(Ke, ee);
        return Te.FromValuesToRef(be._x, Me._x, Ke._x, 0, be._y, Me._y, Ke._y, 0, be._z, Me._z, Ke._z, 0, Fe, Je, oe, 1, ye), ye
      }
      static LookDirectionLH(ee, ie) {
        const He = new Te;
        return Te.LookDirectionLHToRef(ee, ie, He), He
      }
      static LookDirectionLHToRef(ee, ie, He) {
        const ye = pe.rf[0];
        ye.jD(ee), ye.scaleInPlace(-1);
        const be = pe.rf[1];
        return ke.CrossToRef(ie, ye, be), Te.FromValuesToRef(be._x, be._y, be._z, 0, ie._x, ie._y, ie._z, 0, ye._x, ye._y, ye._z, 0, 0, 0, 0, 1, He), He
      }
      static LookDirectionRH(ee, ie) {
        const He = new Te;
        return Te.LookDirectionRHToRef(ee, ie, He), He
      }
      static LookDirectionRHToRef(ee, ie, He) {
        const ye = pe.rf[2];
        return ke.CrossToRef(ie, ee, ye), Te.FromValuesToRef(ye._x, ye._y, ye._z, 0, ie._x, ie._y, ie._z, 0, ee._x, ee._y, ee._z, 0, 0, 0, 0, 1, He), He
      }
      static OrthoLH(ee, ie, He, ye, be) {
        const Me = new Te;
        return Te.OrthoLHToRef(ee, ie, He, ye, Me, be), Me
      }
      static OrthoLHToRef(ee, ie, He, ye, be, Me) {
        const Ke = 2 / ee,
          Ue = 2 / ie,
          Fe = 2 / (ye - He),
          Je = -(ye + He) / (ye - He);
        return Te.FromValuesToRef(Ke, 0, 0, 0, 0, Ue, 0, 0, 0, 0, Fe, 0, 0, 0, Je, 1, be), Me && be.multiplyToRef(ze, be), be._updateIdentityStatus(1 === Ke && 1 === Ue && 1 === Fe && 0 === Je), be
      }
      static OrthoOffCenterLH(ee, ie, He, ye, be, Me, Ke) {
        const Ue = new Te;
        return Te.OrthoOffCenterLHToRef(ee, ie, He, ye, be, Me, Ue, Ke), Ue
      }
      static OrthoOffCenterLHToRef(ee, ie, He, ye, be, Me, Ke, Ue) {
        const Fe = 2 / (ie - ee),
          Je = 2 / (ye - He),
          oe = 2 / (Me - be),
          Re = -(Me + be) / (Me - be),
          ke = (ee + ie) / (ee - ie),
          qe = (ye + He) / (He - ye);
        return Te.FromValuesToRef(Fe, 0, 0, 0, 0, Je, 0, 0, 0, 0, oe, 0, ke, qe, Re, 1, Ke), Ue && Ke.multiplyToRef(ze, Ke), Ke.markAsUpdated(), Ke
      }
      static ObliqueOffCenterLHToRef(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
        const Re = -Ke * Math.cos(Ue),
          ke = -Ke * Math.sin(Ue);
        return Te.TranslationToRef(0, 0, -Fe, pe.Matrix[1]), Te.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Re, ke, 1, 0, 0, 0, 0, 1, pe.Matrix[0]), pe.Matrix[1].multiplyToRef(pe.Matrix[0], pe.Matrix[0]), Te.TranslationToRef(0, 0, Fe, pe.Matrix[1]), pe.Matrix[0].multiplyToRef(pe.Matrix[1], pe.Matrix[0]), Te.OrthoOffCenterLHToRef(ee, ie, He, ye, be, Me, Je, oe), pe.Matrix[0].multiplyToRef(Je, Je), Je
      }
      static OrthoOffCenterRH(ee, ie, He, ye, be, Me, Ke) {
        const Ue = new Te;
        return Te.OrthoOffCenterRHToRef(ee, ie, He, ye, be, Me, Ue, Ke), Ue
      }
      static OrthoOffCenterRHToRef(ee, ie, He, ye, be, Me, Ke, Ue) {
        return Te.OrthoOffCenterLHToRef(ee, ie, He, ye, be, Me, Ke, Ue), Ke._m[10] *= -1, Ke
      }
      static ObliqueOffCenterRHToRef(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
        const Re = Ke * Math.cos(Ue),
          ke = Ke * Math.sin(Ue);
        return Te.TranslationToRef(0, 0, Fe, pe.Matrix[1]), Te.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Re, ke, 1, 0, 0, 0, 0, 1, pe.Matrix[0]), pe.Matrix[1].multiplyToRef(pe.Matrix[0], pe.Matrix[0]), Te.TranslationToRef(0, 0, -Fe, pe.Matrix[1]), pe.Matrix[0].multiplyToRef(pe.Matrix[1], pe.Matrix[0]), Te.OrthoOffCenterRHToRef(ee, ie, He, ye, be, Me, Je, oe), pe.Matrix[0].multiplyToRef(Je, Je), Je
      }
      static PerspectiveLH(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Ke = new Te,
          Ue = 2 * He / ee,
          Fe = 2 * He / ie,
          Je = (ye + He) / (ye - He),
          oe = -2 * ye * He / (ye - He),
          Re = Math.tan(Me);
        return Te.FromValuesToRef(Ue, 0, 0, 0, 0, Fe, 0, Re, 0, 0, Je, 1, 0, 0, oe, 0, Ke), be && Ke.multiplyToRef(ze, Ke), Ke._updateIdentityStatus(!1), Ke
      }
      static PerspectiveFovLH(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ue = new Te;
        return Te.PerspectiveFovLHToRef(ee, ie, He, ye, Ue, !0, be, Me, Ke), Ue
      }
      static PerspectiveFovLHToRef(ee, ie, He, ye, be) {
        let Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ke = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Fe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Je = He,
          oe = ye,
          Re = 1 / Math.tan(.5 * ee),
          ke = Me ? Re / ie : Re,
          qe = Me ? Re : Re * ie,
          fe = Fe && 0 === Je ? -1 : 0 !== oe ? (oe + Je) / (oe - Je) : 1,
          pe = Fe && 0 === Je ? 2 * oe : 0 !== oe ? -2 * oe * Je / (oe - Je) : -2 * Je,
          Xe = Math.tan(Ue);
        return Te.FromValuesToRef(ke, 0, 0, 0, 0, qe, 0, Xe, 0, 0, fe, 1, 0, 0, pe, 0, be), Ke && be.multiplyToRef(ze, be), be._updateIdentityStatus(!1), be
      }
      static PerspectiveFovReverseLHToRef(ee, ie, He, ye, be) {
        let Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ke = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Fe = 1 / Math.tan(.5 * ee),
          Je = Me ? Fe / ie : Fe,
          oe = Me ? Fe : Fe * ie,
          Re = Math.tan(Ue);
        return Te.FromValuesToRef(Je, 0, 0, 0, 0, oe, 0, Re, 0, 0, -He, 1, 0, 0, 1, 0, be), Ke && be.multiplyToRef(ze, be), be._updateIdentityStatus(!1), be
      }
      static PerspectiveFovRH(ee, ie, He, ye, be) {
        let Me = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ke = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ue = new Te;
        return Te.PerspectiveFovRHToRef(ee, ie, He, ye, Ue, !0, be, Me, Ke), Ue
      }
      static PerspectiveFovRHToRef(ee, ie, He, ye, be) {
        let Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ke = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Fe = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Je = He,
          oe = ye,
          Re = 1 / Math.tan(.5 * ee),
          ke = Me ? Re / ie : Re,
          qe = Me ? Re : Re * ie,
          fe = Fe && 0 === Je ? 1 : 0 !== oe ? -(oe + Je) / (oe - Je) : -1,
          pe = Fe && 0 === Je ? 2 * oe : 0 !== oe ? -2 * oe * Je / (oe - Je) : -2 * Je,
          Xe = Math.tan(Ue);
        return Te.FromValuesToRef(ke, 0, 0, 0, 0, qe, 0, Xe, 0, 0, fe, -1, 0, 0, pe, 0, be), Ke && be.multiplyToRef(ze, be), be._updateIdentityStatus(!1), be
      }
      static PerspectiveFovReverseRHToRef(ee, ie, He, ye, be) {
        let Me = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ke = arguments.length > 6 ? arguments[6] : void 0,
          Ue = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Fe = 1 / Math.tan(.5 * ee),
          Je = Me ? Fe / ie : Fe,
          oe = Me ? Fe : Fe * ie,
          Re = Math.tan(Ue);
        return Te.FromValuesToRef(Je, 0, 0, 0, 0, oe, 0, Re, 0, 0, -He, -1, 0, 0, -1, 0, be), Ke && be.multiplyToRef(ze, be), be._updateIdentityStatus(!1), be
      }
      static GetFinalMatrix(ee, ie, He, ye, be, Me) {
        const Ke = ee.width,
          Ue = ee.height,
          Fe = ee.x,
          Je = ee.y,
          oe = Te.FromValues(Ke / 2, 0, 0, 0, 0, -Ue / 2, 0, 0, 0, 0, Me - be, 0, Fe + Ke / 2, Ue / 2 + Je, be, 1),
          Re = new Te;
        return ie.multiplyToRef(He, Re), Re.multiplyToRef(ye, Re), Re.multiplyToRef(oe, Re)
      }
      static GetAsMatrix2x2(ee) {
        const ie = ee.m,
          He = [ie[0], ie[1], ie[4], ie[5]];
        return Me.e.MatrixUse64Bits ? He : new Float32Array(He)
      }
      static GetAsMatrix3x3(ee) {
        const ie = ee.m,
          He = [ie[0], ie[1], ie[2], ie[4], ie[5], ie[6], ie[8], ie[9], ie[10]];
        return Me.e.MatrixUse64Bits ? He : new Float32Array(He)
      }
      static Transpose(ee) {
        const ie = new Te;
        return Te.TransposeToRef(ee, ie), ie
      }
      static TransposeToRef(ee, ie) {
        const He = ee.m,
          ye = He[0],
          be = He[4],
          Me = He[8],
          Ke = He[12],
          Ue = He[1],
          Fe = He[5],
          Je = He[9],
          oe = He[13],
          Re = He[2],
          ke = He[6],
          qe = He[10],
          fe = He[14],
          Te = He[3],
          pe = He[7],
          Xe = He[11],
          ze = He[15],
          Be = ie._m;
        return Be[0] = ye, Be[1] = be, Be[2] = Me, Be[3] = Ke, Be[4] = Ue, Be[5] = Fe, Be[6] = Je, Be[7] = oe, Be[8] = Re, Be[9] = ke, Be[10] = qe, Be[11] = fe, Be[12] = Te, Be[13] = pe, Be[14] = Xe, Be[15] = ze, ie.markAsUpdated(), ie._updateIdentityStatus(ee._isIdentity, ee._isIdentityDirty), ie
      }
      static Reflection(ee) {
        const ie = new Te;
        return Te.ReflectionToRef(ee, ie), ie
      }
      static ReflectionToRef(ee, ie) {
        ee.normalize();
        const He = ee.normal.x,
          ye = ee.normal.y,
          be = ee.normal.z,
          Me = -2 * He,
          Ke = -2 * ye,
          Ue = -2 * be;
        return Te.FromValuesToRef(Me * He + 1, Ke * He, Ue * He, 0, Me * ye, Ke * ye + 1, Ue * ye, 0, Me * be, Ke * be, Ue * be + 1, 0, Me * ee.d, Ke * ee.d, Ue * ee.d, 1, ie), ie
      }
      static FromXYZAxesToRef(ee, ie, He, ye) {
        return Te.FromValuesToRef(ee._x, ee._y, ee._z, 0, ie._x, ie._y, ie._z, 0, He._x, He._y, He._z, 0, 0, 0, 0, 1, ye), ye
      }
      static FromQuaternionToRef(ee, ie) {
        const He = ee._x * ee._x,
          ye = ee._y * ee._y,
          be = ee._z * ee._z,
          Me = ee._x * ee._y,
          Ke = ee._z * ee._w,
          Ue = ee._z * ee._x,
          Fe = ee._y * ee._w,
          Je = ee._y * ee._z,
          oe = ee._x * ee._w;
        return ie._m[0] = 1 - 2 * (ye + be), ie._m[1] = 2 * (Me + Ke), ie._m[2] = 2 * (Ue - Fe), ie._m[3] = 0, ie._m[4] = 2 * (Me - Ke), ie._m[5] = 1 - 2 * (be + He), ie._m[6] = 2 * (Je + oe), ie._m[7] = 0, ie._m[8] = 2 * (Ue + Fe), ie._m[9] = 2 * (Je - oe), ie._m[10] = 1 - 2 * (ye + He), ie._m[11] = 0, ie._m[12] = 0, ie._m[13] = 0, ie._m[14] = 0, ie._m[15] = 1, ie.markAsUpdated(), ie
      }
    }
    Te._IdentityReadOnly = Te.Identity();
    class pe {}
    pe.rf = (0, be.g)(11, ke.Zero), pe.Matrix = (0, be.g)(2, Te.Identity), pe.Quaternion = (0, be.g)(3, fe.Zero);
    class Xe {}
    Xe.Vector2 = (0, be.g)(3, Re.Zero), Xe.rf = (0, be.g)(13, ke.Zero), Xe.Vector4 = (0, be.g)(3, qe.Zero), Xe.Quaternion = (0, be.g)(3, fe.Zero), Xe.Matrix = (0, be.g)(8, Te.Identity);
    const ze = Te.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Be = !1;

    function Ee() {
      Be || (Be = !0, Object.defineProperties(Re.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ke.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(qe.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(fe.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Te.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Je.e)("BABYLON.Vector2", Re), (0, Je.e)("BABYLON.Vector3", ke), (0, Je.e)("BABYLON.Vector4", qe), (0, Je.e)("BABYLON.Matrix", Te))
    }
  },
  37931: (ee, ie, He) => {
    He.d(ie, {
      d: () => Ke
    });
    const ye = "undefined" !== typeof WeakRef;
    class be {
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(ee, ie, He, ye)
      }
      initialize(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = ee, this.skipNextObservers = ie, this.target = He, this.currentTarget = ye, this
      }
    }
    class Me {
      constructor(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = ee, this.mask = ie, this.scope = He, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(ee)
      }
    }
    class Ke {
      static FromPromise(ee, ie) {
        const He = new Ke;
        return ee.then((ee => {
          He.notifyObservers(ee)
        })).catch((ee => {
          if (!ie) throw ee;
          ie.notifyObservers(ee)
        })), He
      }
      get observers() {
        return this._observers
      }
      constructor(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ie, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new be(0), ee && (this._onObserverAdded = ee)
      }
      add(ee) {
        let ie = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          He = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!ee) return null;
        const be = new Me(ee, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        be.unregisterOnNextCall = He, ie ? this._observers.unshift(be) : this._observers.push(be), this._onObserverAdded && this._onObserverAdded(be), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(be, this._lastNotifiedValue);
        const Ke = ye ? new WeakRef(this) : {
          deref: () => this
        };
        return be._remove = function() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ie = Ke.deref();
          ie && (ee ? ie.remove(be) : ie._remove(be))
        }, be
      }
      addOnce(ee) {
        return this.add(ee, void 0, void 0, void 0, !0)
      }
      remove(ee) {
        if (!ee) return !1;
        ee._remove = null;
        return -1 !== this._observers.indexOf(ee) && (this._deferUnregister(ee), !0)
      }
      removeCallback(ee, ie) {
        for (let He = 0; He < this._observers.length; He++) {
          const ye = this._observers[He];
          if (!ye._willBeUnregistered && (ye.callback === ee && (!ie || ie === ye.scope))) return this._deferUnregister(ye), !0
        }
        return !1
      }
      _deferUnregister(ee) {
        ee._willBeUnregistered || (this._numObserversMarkedAsDeleted++, ee.unregisterOnNextCall = !1, ee._willBeUnregistered = !0, setTimeout((() => {
          this._remove(ee)
        }), 0))
      }
      _remove(ee) {
        let ie = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!ee) return !1;
        const He = this._observers.indexOf(ee);
        return -1 !== He && (ie && this._numObserversMarkedAsDeleted--, this._observers.splice(He, 1), !0)
      }
      makeObserverTopPriority(ee) {
        this._remove(ee, !1), this._observers.unshift(ee)
      }
      makeObserverBottomPriority(ee) {
        this._remove(ee, !1), this._observers.push(ee)
      }
      notifyObservers(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          He = arguments.length > 2 ? arguments[2] : void 0,
          ye = arguments.length > 3 ? arguments[3] : void 0,
          be = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ee), !this._observers.length) return !0;
        const Me = this._eventState;
        Me.mask = ie, Me.target = He, Me.currentTarget = ye, Me.skipNextObservers = !1, Me.lastReturnValue = ee, Me.userInfo = be;
        for (const Ke of this._observers)
          if (!Ke._willBeUnregistered && (Ke.mask & ie && (Ke.unregisterOnNextCall && this._deferUnregister(Ke), Ke.scope ? Me.lastReturnValue = Ke.callback.apply(Ke.scope, [ee, Me]) : Me.lastReturnValue = Ke.callback(ee, Me)), Me.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ie), ee._willBeUnregistered) return;
        const ye = this._eventState;
        ye.mask = He, ye.skipNextObservers = !1, ee.unregisterOnNextCall && this._deferUnregister(ee), ee.callback(ie, ye)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const ee = this._observers.pop();
          ee && (ee._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const ee = new Ke;
        return ee._observers = this._observers.slice(0), ee
      }
      hasSpecificMask() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ie of this._observers)
          if (ie.mask & ee || ie.mask === ee) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);