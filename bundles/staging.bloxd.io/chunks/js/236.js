export const id = 236;
export const ids = [236];
export const modules = {
  37359: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt
    });
    var Ot = Vt(37367);
    class qt {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    qt.Instances = [], qt.OnEnginesDisposedObservable = new Ot.c, qt._LastCreatedScene = null, qt.UseFallbackTexture = !0, qt.FallbackTexture = ""
  },
  37353: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Ot
    });
    class Ot {
      static SetMatrixPrecision(tt) {
        if (Ot.MatrixTrackPrecisionChange = !1, tt && !Ot.MatrixUse64Bits && Ot.MatrixTrackedMatrices)
          for (let et = 0; et < Ot.MatrixTrackedMatrices.length; ++et) {
            const tt = Ot.MatrixTrackedMatrices[et],
              Vt = tt._m;
            tt._m = new Array(16);
            for (let et = 0; et < 16; ++et) tt._m[et] = Vt[et]
          }
        Ot.MatrixUse64Bits = tt, Ot.MatrixCurrentType = Ot.MatrixUse64Bits ? Array : Float32Array, Ot.MatrixTrackedMatrices = null
      }
    }
    Ot.MatrixUse64Bits = !1, Ot.MatrixTrackPrecisionChange = !0, Ot.MatrixCurrentType = Float32Array, Ot.MatrixTrackedMatrices = []
  },
  37381: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => dt,
      f: () => Ht,
      i: () => jt,
      m: () => Ot,
      q: () => Dt,
      t: () => mt
    });
    class Ot {}

    function qt(tt) {
      tt.updateFlag = Ot._UpdateFlagSeed++
    }

    function Dt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const qt = tt.GOt(),
        Dt = et.GOt(),
        mt = qt[0],
        dt = qt[1],
        jt = qt[2],
        Ht = qt[3],
        Xt = qt[4],
        Qt = qt[5],
        lt = qt[6],
        Et = qt[7],
        ft = qt[8],
        wt = qt[9],
        yt = qt[10],
        Nt = qt[11],
        Mt = qt[12],
        bt = qt[13],
        Jt = qt[14],
        Ct = qt[15],
        ut = Dt[0],
        Kt = Dt[1],
        ht = Dt[2],
        vt = Dt[3],
        Wt = Dt[4],
        St = Dt[5],
        ct = Dt[6],
        Rt = Dt[7],
        It = Dt[8],
        Pt = Dt[9],
        Zt = Dt[10],
        Lt = Dt[11],
        Ft = Dt[12],
        kt = Dt[13],
        Gt = Dt[14],
        zt = Dt[15];
      Vt[Ot] = mt * ut + dt * Wt + jt * It + Ht * Ft, Vt[Ot + 1] = mt * Kt + dt * St + jt * Pt + Ht * kt, Vt[Ot + 2] = mt * ht + dt * ct + jt * Zt + Ht * Gt, Vt[Ot + 3] = mt * vt + dt * Rt + jt * Lt + Ht * zt, Vt[Ot + 4] = Xt * ut + Qt * Wt + lt * It + Et * Ft, Vt[Ot + 5] = Xt * Kt + Qt * St + lt * Pt + Et * kt, Vt[Ot + 6] = Xt * ht + Qt * ct + lt * Zt + Et * Gt, Vt[Ot + 7] = Xt * vt + Qt * Rt + lt * Lt + Et * zt, Vt[Ot + 8] = ft * ut + wt * Wt + yt * It + Nt * Ft, Vt[Ot + 9] = ft * Kt + wt * St + yt * Pt + Nt * kt, Vt[Ot + 10] = ft * ht + wt * ct + yt * Zt + Nt * Gt, Vt[Ot + 11] = ft * vt + wt * Rt + yt * Lt + Nt * zt, Vt[Ot + 12] = Mt * ut + bt * Wt + Jt * It + Ct * Ft, Vt[Ot + 13] = Mt * Kt + bt * St + Jt * Pt + Ct * kt, Vt[Ot + 14] = Mt * ht + bt * ct + Jt * Zt + Ct * Gt, Vt[Ot + 15] = Mt * vt + bt * Rt + Jt * Lt + Ct * zt
    }

    function mt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Dt(tt, et, Vt.GOt(), Ot), qt(Vt)
    }

    function dt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ot = tt.GOt();
      et[Vt] = Ot[0], et[Vt + 1] = Ot[1], et[Vt + 2] = Ot[2], et[Vt + 3] = Ot[3], et[Vt + 4] = Ot[4], et[Vt + 5] = Ot[5], et[Vt + 6] = Ot[6], et[Vt + 7] = Ot[7], et[Vt + 8] = Ot[8], et[Vt + 9] = Ot[9], et[Vt + 10] = Ot[10], et[Vt + 11] = Ot[11], et[Vt + 12] = Ot[12], et[Vt + 13] = Ot[13], et[Vt + 14] = Ot[14], et[Vt + 15] = Ot[15]
    }

    function jt(tt, et) {
      const Vt = Ht(tt, et.GOt());
      return Vt && qt(et), Vt
    }

    function Ht(tt, et) {
      const Vt = tt.GOt(),
        Ot = Vt[0],
        qt = Vt[1],
        Dt = Vt[2],
        mt = Vt[3],
        dt = Vt[4],
        jt = Vt[5],
        Ht = Vt[6],
        Xt = Vt[7],
        Qt = Vt[8],
        lt = Vt[9],
        Et = Vt[10],
        ft = Vt[11],
        wt = Vt[12],
        yt = Vt[13],
        Nt = Vt[14],
        Mt = Vt[15],
        bt = Et * Mt - Nt * ft,
        Jt = lt * Mt - yt * ft,
        Ct = lt * Nt - yt * Et,
        ut = Qt * Mt - wt * ft,
        Kt = Qt * Nt - Et * wt,
        ht = Qt * yt - wt * lt,
        vt = +(jt * bt - Ht * Jt + Xt * Ct),
        Wt = -(dt * bt - Ht * ut + Xt * Kt),
        St = +(dt * Jt - jt * ut + Xt * ht),
        ct = -(dt * Ct - jt * Kt + Ht * ht),
        Rt = Ot * vt + qt * Wt + Dt * St + mt * ct;
      if (0 === Rt) return !1;
      const It = 1 / Rt,
        Pt = Ht * Mt - Nt * Xt,
        Zt = jt * Mt - yt * Xt,
        Lt = jt * Nt - yt * Ht,
        Ft = dt * Mt - wt * Xt,
        kt = dt * Nt - wt * Ht,
        Gt = dt * yt - wt * jt,
        zt = Ht * ft - Et * Xt,
        ot = jt * ft - lt * Xt,
        rt = jt * Et - lt * Ht,
        Ut = dt * ft - Qt * Xt,
        At = dt * Et - Qt * Ht,
        it = dt * lt - Qt * jt,
        Yt = -(qt * bt - Dt * Jt + mt * Ct),
        Bt = +(Ot * bt - Dt * ut + mt * Kt),
        pt = -(Ot * Jt - qt * ut + mt * ht),
        xt = +(Ot * Ct - qt * Kt + Dt * ht),
        Tt = +(qt * Pt - Dt * Zt + mt * Lt),
        gt = -(Ot * Pt - Dt * Ft + mt * kt),
        st = +(Ot * Zt - qt * Ft + mt * Gt),
        nt = -(Ot * Lt - qt * kt + Dt * Gt),
        te = -(qt * zt - Dt * ot + mt * rt),
        ee = +(Ot * zt - Dt * Ut + mt * At),
        Ve = -(Ot * ot - qt * Ut + mt * it),
        Oe = +(Ot * rt - qt * At + Dt * it);
      return et[0] = vt * It, et[1] = Yt * It, et[2] = Tt * It, et[3] = te * It, et[4] = Wt * It, et[5] = Bt * It, et[6] = gt * It, et[7] = ee * It, et[8] = St * It, et[9] = pt * It, et[10] = st * It, et[11] = Ve * It, et[12] = ct * It, et[13] = xt * It, et[14] = nt * It, et[15] = Oe * It, !0
    }
    Ot._UpdateFlagSeed = 0
  },
  37336: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => wt,
      e: () => ft,
      h: () => Jt,
      k: () => Nt,
      m: () => Qt,
      n: () => lt,
      r: () => Et
    });
    var Ot = Vt(37342),
      qt = Vt(37350),
      Dt = Vt(37353),
      mt = Vt(37359),
      dt = Vt(37372),
      jt = Vt(37381),
      Ht = Vt(37390);
    const Xt = tt => parseInt(tt.toString().replace(/\W/g, ""));
    class Qt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = tt, this.y = et
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let tt = Xt(this.x);
        return tt = 397 * tt ^ Xt(this.y), tt
      }
      toArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tt[et] = this.x, tt[et + 1] = this.y, this
      }
      vVt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Qt.FromArrayToRef(tt, et, this), this
      }
      GOt() {
        return [this.x, this.y]
      }
      rK(tt) {
        return this.x = tt.x, this.y = tt.y, this
      }
      W9(tt, et) {
        return this.x = tt, this.y = et, this
      }
      set(tt, et) {
        return this.W9(tt, et)
      }
      S_(tt) {
        return this.W9(tt, tt)
      }
      add(tt) {
        return new Qt(this.x + tt.x, this.y + tt.y)
      }
      addToRef(tt, et) {
        return et.x = this.x + tt.x, et.y = this.y + tt.y, et
      }
      addInPlace(tt) {
        return this.x += tt.x, this.y += tt.y, this
      }
      addInPlaceFromFloats(tt, et) {
        return this.x += tt, this.y += et, this
      }
      addVector3(tt) {
        return new Qt(this.x + tt.x, this.y + tt.y)
      }
      subtract(tt) {
        return new Qt(this.x - tt.x, this.y - tt.y)
      }
      subtractToRef(tt, et) {
        return et.x = this.x - tt.x, et.y = this.y - tt.y, et
      }
      qqt(tt) {
        return this.x -= tt.x, this.y -= tt.y, this
      }
      multiplyInPlace(tt) {
        return this.x *= tt.x, this.y *= tt.y, this
      }
      multiply(tt) {
        return new Qt(this.x * tt.x, this.y * tt.y)
      }
      multiplyToRef(tt, et) {
        return et.x = this.x * tt.x, et.y = this.y * tt.y, et
      }
      multiplyByFloats(tt, et) {
        return new Qt(this.x * tt, this.y * et)
      }
      divide(tt) {
        return new Qt(this.x / tt.x, this.y / tt.y)
      }
      divideToRef(tt, et) {
        return et.x = this.x / tt.x, et.y = this.y / tt.y, et
      }
      divideInPlace(tt) {
        return this.x = this.x / tt.x, this.y = this.y / tt.y, this
      }
      minimizeInPlace(tt) {
        return this.minimizeInPlaceFromFloats(tt.x, tt.y)
      }
      maximizeInPlace(tt) {
        return this.maximizeInPlaceFromFloats(tt.x, tt.y)
      }
      minimizeInPlaceFromFloats(tt, et) {
        return this.x = Math.min(tt, this.x), this.y = Math.min(et, this.y), this
      }
      maximizeInPlaceFromFloats(tt, et) {
        return this.x = Math.max(tt, this.x), this.y = Math.max(et, this.y), this
      }
      subtractFromFloats(tt, et) {
        return new Qt(this.x - tt, this.y - et)
      }
      subtractFromFloatsToRef(tt, et, Vt) {
        return Vt.x = this.x - tt, Vt.y = this.y - et, Vt
      }
      gq() {
        return new Qt(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(tt) {
        return tt.x = -this.x, tt.y = -this.y, tt
      }
      scaleInPlace(tt) {
        return this.x *= tt, this.y *= tt, this
      }
      scale(tt) {
        return new Qt(this.x * tt, this.y * tt)
      }
      scaleToRef(tt, et) {
        return et.x = this.x * tt, et.y = this.y * tt, et
      }
      scaleAndAddToRef(tt, et) {
        return et.x += this.x * tt, et.y += this.y * tt, et
      }
      equals(tt) {
        return tt && this.x === tt.x && this.y === tt.y
      }
      equalsWithEpsilon(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot.e;
        return tt && (0, dt.WithinEpsilon)(this.x, tt.x, et) && (0, dt.WithinEpsilon)(this.y, tt.y, et)
      }
      adt(tt, et) {
        return this.x === tt && this.y === et
      }
      floor() {
        return new Qt(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(tt) {
        return tt.x = Math.floor(this.x), tt.y = Math.floor(this.y), tt
      }
      fract() {
        return new Qt(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(tt) {
        return tt.x = this.x - Math.floor(this.x), tt.y = this.y - Math.floor(this.y), tt
      }
      rotate(tt) {
        return this.rotateToRef(tt, new Qt)
      }
      rotateToRef(tt, et) {
        const Vt = Math.cos(tt),
          Ot = Math.sin(tt);
        return et.x = Vt * this.x - Ot * this.y, et.y = Ot * this.x + Vt * this.y, et
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
      normalizeFromLength(tt) {
        return 0 === tt || 1 === tt ? this : this.scaleInPlace(1 / tt)
      }
      normalizeToNew() {
        const tt = new Qt;
        return this.normalizeToRef(tt), tt
      }
      normalizeToRef(tt) {
        const et = this.length();
        return 0 === et || 1 === et ? (tt.x = this.x, tt.y = this.y, tt) : this.scaleToRef(1 / et, tt)
      }
      clone() {
        return new Qt(this.x, this.y)
      }
      dot(tt) {
        return this.x * tt.x + this.y * tt.y
      }
      static Zero() {
        return new Qt(0, 0)
      }
      static One() {
        return new Qt(1, 1)
      }
      static Random() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Qt((0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et))
      }
      static RandomToRef() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).W9((0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et))
      }
      static get ZeroReadOnly() {
        return Qt._ZeroReadOnly
      }
      static FromArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Qt(tt[et], tt[et + 1])
      }
      static FromArrayToRef(tt, et, Vt) {
        return Vt.x = tt[et], Vt.y = tt[et + 1], Vt
      }
      static FromFloatsToRef(tt, et, Vt) {
        return Vt.W9(tt, et), Vt
      }
      static CatmullRom(tt, et, Vt, Ot, qt) {
        const Dt = qt * qt,
          mt = qt * Dt,
          dt = .5 * (2 * et.x + (-tt.x + Vt.x) * qt + (2 * tt.x - 5 * et.x + 4 * Vt.x - Ot.x) * Dt + (-tt.x + 3 * et.x - 3 * Vt.x + Ot.x) * mt),
          jt = .5 * (2 * et.y + (-tt.y + Vt.y) * qt + (2 * tt.y - 5 * et.y + 4 * Vt.y - Ot.y) * Dt + (-tt.y + 3 * et.y - 3 * Vt.y + Ot.y) * mt);
        return new Qt(dt, jt)
      }
      static ClampToRef(tt, et, Vt, Ot) {
        return Ot.x = (0, dt.Clamp)(tt.x, et.x, Vt.x), Ot.y = (0, dt.Clamp)(tt.y, et.y, Vt.y), Ot
      }
      static Clamp(tt, et, Vt) {
        const Ot = (0, dt.Clamp)(tt.x, et.x, Vt.x),
          qt = (0, dt.Clamp)(tt.y, et.y, Vt.y);
        return new Qt(Ot, qt)
      }
      static Hermite(tt, et, Vt, Ot, qt) {
        const Dt = qt * qt,
          mt = qt * Dt,
          dt = 2 * mt - 3 * Dt + 1,
          jt = -2 * mt + 3 * Dt,
          Ht = mt - 2 * Dt + qt,
          Xt = mt - Dt,
          lt = tt.x * dt + Vt.x * jt + et.x * Ht + Ot.x * Xt,
          Et = tt.y * dt + Vt.y * jt + et.y * Ht + Ot.y * Xt;
        return new Qt(lt, Et)
      }
      static Hermite1stDerivative(tt, et, Vt, Ot, qt) {
        return this.Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, new Qt)
      }
      static Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt) {
        const mt = qt * qt;
        return Dt.x = 6 * (mt - qt) * tt.x + (3 * mt - 4 * qt + 1) * et.x + 6 * (-mt + qt) * Vt.x + (3 * mt - 2 * qt) * Ot.x, Dt.y = 6 * (mt - qt) * tt.y + (3 * mt - 4 * qt + 1) * et.y + 6 * (-mt + qt) * Vt.y + (3 * mt - 2 * qt) * Ot.y, Dt
      }
      static Lerp(tt, et, Vt) {
        return Qt.LerpToRef(tt, et, Vt, new Qt)
      }
      static LerpToRef(tt, et, Vt, Ot) {
        return Ot.x = tt.x + (et.x - tt.x) * Vt, Ot.y = tt.y + (et.y - tt.y) * Vt, Ot
      }
      static Dot(tt, et) {
        return tt.x * et.x + tt.y * et.y
      }
      static Normalize(tt) {
        return Qt.NormalizeToRef(tt, new Qt)
      }
      static NormalizeToRef(tt, et) {
        return tt.normalizeToRef(et), et
      }
      static Minimize(tt, et) {
        const Vt = tt.x < et.x ? tt.x : et.x,
          Ot = tt.y < et.y ? tt.y : et.y;
        return new Qt(Vt, Ot)
      }
      static Maximize(tt, et) {
        const Vt = tt.x > et.x ? tt.x : et.x,
          Ot = tt.y > et.y ? tt.y : et.y;
        return new Qt(Vt, Ot)
      }
      static Transform(tt, et) {
        return Qt.TransformToRef(tt, et, new Qt)
      }
      static TransformToRef(tt, et, Vt) {
        const Ot = et.m,
          qt = tt.x * Ot[0] + tt.y * Ot[4] + Ot[12],
          Dt = tt.x * Ot[1] + tt.y * Ot[5] + Ot[13];
        return Vt.x = qt, Vt.y = Dt, Vt
      }
      static PointInTriangle(tt, et, Vt, Ot) {
        const qt = .5 * (-Vt.y * Ot.x + et.y * (-Vt.x + Ot.x) + et.x * (Vt.y - Ot.y) + Vt.x * Ot.y),
          Dt = qt < 0 ? -1 : 1,
          mt = (et.y * Ot.x - et.x * Ot.y + (Ot.y - et.y) * tt.x + (et.x - Ot.x) * tt.y) * Dt,
          dt = (et.x * Vt.y - et.y * Vt.x + (et.y - Vt.y) * tt.x + (Vt.x - et.x) * tt.y) * Dt;
        return mt > 0 && dt > 0 && mt + dt < 2 * qt * Dt
      }
      static Distance(tt, et) {
        return Math.sqrt(Qt.DistanceSquared(tt, et))
      }
      static DistanceSquared(tt, et) {
        const Vt = tt.x - et.x,
          Ot = tt.y - et.y;
        return Vt * Vt + Ot * Ot
      }
      static Center(tt, et) {
        return Qt.CenterToRef(tt, et, new Qt)
      }
      static CenterToRef(tt, et, Vt) {
        return Vt.W9((tt.x + et.x) / 2, (tt.y + et.y) / 2)
      }
      static DistanceOfPointFromSegment(tt, et, Vt) {
        const Ot = Qt.DistanceSquared(et, Vt);
        if (0 === Ot) return Qt.Distance(tt, et);
        const qt = Vt.subtract(et),
          Dt = Math.max(0, Math.min(1, Qt.Dot(tt.subtract(et), qt) / Ot)),
          mt = et.add(qt.multiplyByFloats(Dt, Dt));
        return Qt.Distance(tt, mt)
      }
    }
    Qt._V8PerformanceHack = new Qt(.5, .5), Qt._ZeroReadOnly = Qt.Zero();
    class lt {
      get x() {
        return this._x
      }
      set x(tt) {
        this._x = tt, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(tt) {
        this._y = tt, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(tt) {
        this._z = tt, this._isDirty = !0
      }
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = tt, this._y = et, this._z = Vt
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "uf"
      }
      getHashCode() {
        let tt = Xt(this._x);
        return tt = 397 * tt ^ Xt(this._y), tt = 397 * tt ^ Xt(this._z), tt
      }
      GOt() {
        return [this._x, this._y, this._z]
      }
      toArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tt[et] = this._x, tt[et + 1] = this._y, tt[et + 2] = this._z, this
      }
      vVt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return lt.FromArrayToRef(tt, et, this), this
      }
      toQuaternion() {
        return ft.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(tt) {
        return this._x += tt._x, this._y += tt._y, this._z += tt._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(tt, et, Vt) {
        return this._x += tt, this._y += et, this._z += Vt, this._isDirty = !0, this
      }
      add(tt) {
        return new lt(this._x + tt._x, this._y + tt._y, this._z + tt._z)
      }
      addToRef(tt, et) {
        return et._x = this._x + tt._x, et._y = this._y + tt._y, et._z = this._z + tt._z, et._isDirty = !0, et
      }
      qqt(tt) {
        return this._x -= tt._x, this._y -= tt._y, this._z -= tt._z, this._isDirty = !0, this
      }
      subtract(tt) {
        return new lt(this._x - tt._x, this._y - tt._y, this._z - tt._z)
      }
      subtractToRef(tt, et) {
        return this.subtractFromFloatsToRef(tt._x, tt._y, tt._z, et)
      }
      subtractFromFloats(tt, et, Vt) {
        return new lt(this._x - tt, this._y - et, this._z - Vt)
      }
      subtractFromFloatsToRef(tt, et, Vt, Ot) {
        return Ot._x = this._x - tt, Ot._y = this._y - et, Ot._z = this._z - Vt, Ot._isDirty = !0, Ot
      }
      gq() {
        return new lt(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(tt) {
        return tt._x = -1 * this._x, tt._y = -1 * this._y, tt._z = -1 * this._z, tt._isDirty = !0, tt
      }
      scaleInPlace(tt) {
        return this._x *= tt, this._y *= tt, this._z *= tt, this._isDirty = !0, this
      }
      scale(tt) {
        return new lt(this._x * tt, this._y * tt, this._z * tt)
      }
      scaleToRef(tt, et) {
        return et._x = this._x * tt, et._y = this._y * tt, et._z = this._z * tt, et._isDirty = !0, et
      }
      getNormalToRef(tt) {
        const et = this.length();
        let Vt = Math.acos(this._y / et);
        const Ot = Math.atan2(this._z, this._x);
        Vt > Math.PI / 2 ? Vt -= Math.PI / 2 : Vt += Math.PI / 2;
        const qt = et * Math.sin(Vt) * Math.cos(Ot),
          Dt = et * Math.cos(Vt),
          mt = et * Math.sin(Vt) * Math.sin(Ot);
        return tt.set(qt, Dt, mt), tt
      }
      applyRotationQuaternionToRef(tt, et) {
        const Vt = this._x,
          Ot = this._y,
          qt = this._z,
          Dt = tt._x,
          mt = tt._y,
          dt = tt._z,
          jt = tt._w,
          Ht = 2 * (mt * qt - dt * Ot),
          Xt = 2 * (dt * Vt - Dt * qt),
          Qt = 2 * (Dt * Ot - mt * Vt);
        return et._x = Vt + jt * Ht + mt * Qt - dt * Xt, et._y = Ot + jt * Xt + dt * Ht - Dt * Qt, et._z = qt + jt * Qt + Dt * Xt - mt * Ht, et._isDirty = !0, et
      }
      applyRotationQuaternionInPlace(tt) {
        return this.applyRotationQuaternionToRef(tt, this)
      }
      applyRotationQuaternion(tt) {
        return this.applyRotationQuaternionToRef(tt, new lt)
      }
      scaleAndAddToRef(tt, et) {
        return et._x += this._x * tt, et._y += this._y * tt, et._z += this._z * tt, et._isDirty = !0, et
      }
      projectOnPlane(tt, et) {
        return this.projectOnPlaneToRef(tt, et, new lt)
      }
      projectOnPlaneToRef(tt, et, Vt) {
        const Ot = tt.normal,
          qt = tt.d,
          Dt = yt.uf[0];
        this.subtractToRef(et, Dt), Dt.normalize();
        const mt = lt.Dot(Dt, Ot);
        if (Math.abs(mt) < 1e-10) Vt.S_(1 / 0);
        else {
          const tt = -(lt.Dot(et, Ot) + qt) / mt,
            dt = Dt.scaleInPlace(tt);
          et.addToRef(dt, Vt)
        }
        return Vt
      }
      equals(tt) {
        return tt && this._x === tt._x && this._y === tt._y && this._z === tt._z
      }
      equalsWithEpsilon(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot.e;
        return tt && (0, dt.WithinEpsilon)(this._x, tt._x, et) && (0, dt.WithinEpsilon)(this._y, tt._y, et) && (0, dt.WithinEpsilon)(this._z, tt._z, et)
      }
      adt(tt, et, Vt) {
        return this._x === tt && this._y === et && this._z === Vt
      }
      multiplyInPlace(tt) {
        return this._x *= tt._x, this._y *= tt._y, this._z *= tt._z, this._isDirty = !0, this
      }
      multiply(tt) {
        return this.multiplyByFloats(tt._x, tt._y, tt._z)
      }
      multiplyToRef(tt, et) {
        return et._x = this._x * tt._x, et._y = this._y * tt._y, et._z = this._z * tt._z, et._isDirty = !0, et
      }
      multiplyByFloats(tt, et, Vt) {
        return new lt(this._x * tt, this._y * et, this._z * Vt)
      }
      divide(tt) {
        return new lt(this._x / tt._x, this._y / tt._y, this._z / tt._z)
      }
      divideToRef(tt, et) {
        return et._x = this._x / tt._x, et._y = this._y / tt._y, et._z = this._z / tt._z, et._isDirty = !0, et
      }
      divideInPlace(tt) {
        return this._x = this._x / tt._x, this._y = this._y / tt._y, this._z = this._z / tt._z, this._isDirty = !0, this
      }
      minimizeInPlace(tt) {
        return this.minimizeInPlaceFromFloats(tt._x, tt._y, tt._z)
      }
      maximizeInPlace(tt) {
        return this.maximizeInPlaceFromFloats(tt._x, tt._y, tt._z)
      }
      minimizeInPlaceFromFloats(tt, et, Vt) {
        return tt < this._x && (this.x = tt), et < this._y && (this.y = et), Vt < this._z && (this.z = Vt), this
      }
      maximizeInPlaceFromFloats(tt, et, Vt) {
        return tt > this._x && (this.x = tt), et > this._y && (this.y = et), Vt > this._z && (this.z = Vt), this
      }
      isNonUniformWithinEpsilon(tt) {
        const et = Math.abs(this._x),
          Vt = Math.abs(this._y);
        if (!(0, dt.WithinEpsilon)(et, Vt, tt)) return !0;
        const Ot = Math.abs(this._z);
        return !(0, dt.WithinEpsilon)(et, Ot, tt) || !(0, dt.WithinEpsilon)(Vt, Ot, tt)
      }
      get isNonUniform() {
        const tt = Math.abs(this._x);
        if (tt !== Math.abs(this._y)) return !0;
        return tt !== Math.abs(this._z)
      }
      floorToRef(tt) {
        return tt._x = Math.floor(this._x), tt._y = Math.floor(this._y), tt._z = Math.floor(this._z), tt._isDirty = !0, tt
      }
      floor() {
        return new lt(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(tt) {
        return tt._x = this._x - Math.floor(this._x), tt._y = this._y - Math.floor(this._y), tt._z = this._z - Math.floor(this._z), tt._isDirty = !0, tt
      }
      fract() {
        return new lt(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(tt) {
        if ("xyz" === (tt = tt.toLowerCase())) return this;
        const et = yt.uf[0].rK(this);
        return this.x = et[tt[0]], this.y = et[tt[1]], this.z = et[tt[2]], this
      }
      rotateByQuaternionToRef(tt, et) {
        return tt.toRotationMatrix(yt.Matrix[0]), lt.TransformCoordinatesToRef(this, yt.Matrix[0], et), et
      }
      rotateByQuaternionAroundPointToRef(tt, et, Vt) {
        return this.subtractToRef(et, yt.uf[0]), yt.uf[0].rotateByQuaternionToRef(tt, yt.uf[0]), et.addToRef(yt.uf[0], Vt), Vt
      }
      cross(tt) {
        return lt.CrossToRef(this, tt, new lt)
      }
      normalizeFromLength(tt) {
        return 0 === tt || 1 === tt ? this : this.scaleInPlace(1 / tt)
      }
      normalizeToNew() {
        return this.normalizeToRef(new lt)
      }
      normalizeToRef(tt) {
        const et = this.length();
        return 0 === et || 1 === et ? (tt._x = this._x, tt._y = this._y, tt._z = this._z, tt._isDirty = !0, tt) : this.scaleToRef(1 / et, tt)
      }
      clone() {
        return new lt(this._x, this._y, this._z)
      }
      rK(tt) {
        return this.W9(tt._x, tt._y, tt._z)
      }
      W9(tt, et, Vt) {
        return this._x = tt, this._y = et, this._z = Vt, this._isDirty = !0, this
      }
      set(tt, et, Vt) {
        return this.W9(tt, et, Vt)
      }
      S_(tt) {
        return this._x = this._y = this._z = tt, this._isDirty = !0, this
      }
      static GetClipFactor(tt, et, Vt, Ot) {
        const qt = lt.Dot(tt, Vt);
        return (qt - Ot) / (qt - lt.Dot(et, Vt))
      }
      static GetAngleBetweenVectors(tt, et, Vt) {
        const Ot = tt.normalizeToRef(yt.uf[1]),
          qt = et.normalizeToRef(yt.uf[2]);
        let Dt = lt.Dot(Ot, qt);
        Dt = (0, dt.Clamp)(Dt, -1, 1);
        const mt = Math.acos(Dt),
          jt = yt.uf[3];
        return lt.CrossToRef(Ot, qt, jt), lt.Dot(jt, Vt) > 0 ? isNaN(mt) ? 0 : mt : isNaN(mt) ? -Math.PI : -Math.acos(Dt)
      }
      static GetAngleBetweenVectorsOnPlane(tt, et, Vt) {
        yt.uf[0].rK(tt);
        const Ot = yt.uf[0];
        yt.uf[1].rK(et);
        const qt = yt.uf[1];
        yt.uf[2].rK(Vt);
        const Dt = yt.uf[2],
          mt = yt.uf[3],
          jt = yt.uf[4];
        Ot.normalize(), qt.normalize(), Dt.normalize(), lt.CrossToRef(Dt, Ot, mt), lt.CrossToRef(mt, Dt, jt);
        const Ht = Math.atan2(lt.Dot(qt, mt), lt.Dot(qt, jt));
        return (0, dt.NormalizeRadians)(Ht)
      }
      static PitchYawRollToMoveBetweenPointsToRef(tt, et, Vt) {
        const Ot = Nt.uf[0];
        return et.subtractToRef(tt, Ot), Vt._y = Math.atan2(Ot.x, Ot.z) || 0, Vt._x = Math.atan2(Math.sqrt(Ot.x ** 2 + Ot.z ** 2), Ot.y) || 0, Vt._z = 0, Vt._isDirty = !0, Vt
      }
      static PitchYawRollToMoveBetweenPoints(tt, et) {
        const Vt = lt.Zero();
        return lt.PitchYawRollToMoveBetweenPointsToRef(tt, et, Vt)
      }
      static SlerpToRef(tt, et, Vt, qt) {
        Vt = (0, dt.Clamp)(Vt, 0, 1);
        const Dt = yt.uf[0],
          mt = yt.uf[1];
        Dt.rK(tt);
        const jt = Dt.length();
        Dt.normalizeFromLength(jt), mt.rK(et);
        const Ht = mt.length();
        mt.normalizeFromLength(Ht);
        const Xt = lt.Dot(Dt, mt);
        let Qt, Et;
        if (Xt < 1 - Ot.e) {
          const tt = Math.acos(Xt),
            et = 1 / Math.sin(tt);
          Qt = Math.sin((1 - Vt) * tt) * et, Et = Math.sin(Vt * tt) * et
        } else Qt = 1 - Vt, Et = Vt;
        return Dt.scaleInPlace(Qt), mt.scaleInPlace(Et), qt.rK(Dt).addInPlace(mt), qt.scaleInPlace((0, dt.Lerp)(jt, Ht, Vt)), qt
      }
      static SmoothToRef(tt, et, Vt, Ot, qt) {
        return lt.SlerpToRef(tt, et, 0 === Ot ? 1 : Vt / Ot, qt), qt
      }
      static FromArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new lt(tt[et], tt[et + 1], tt[et + 2])
      }
      static FromFloatArray(tt, et) {
        return lt.FromArray(tt, et)
      }
      static FromArrayToRef(tt, et, Vt) {
        return Vt._x = tt[et], Vt._y = tt[et + 1], Vt._z = tt[et + 2], Vt._isDirty = !0, Vt
      }
      static FromFloatArrayToRef(tt, et, Vt) {
        return lt.FromArrayToRef(tt, et, Vt)
      }
      static FromFloatsToRef(tt, et, Vt, Ot) {
        return Ot.W9(tt, et, Vt), Ot
      }
      static Zero() {
        return new lt(0, 0, 0)
      }
      static One() {
        return new lt(1, 1, 1)
      }
      static Up() {
        return new lt(0, 1, 0)
      }
      static get UpReadOnly() {
        return lt._UpReadOnly
      }
      static get DownReadOnly() {
        return lt._DownReadOnly
      }
      static get RightReadOnly() {
        return lt._RightReadOnly
      }
      static get LeftReadOnly() {
        return lt._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return lt._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return lt._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return lt._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return lt._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return lt._ZeroReadOnly
      }
      static get OneReadOnly() {
        return lt._OneReadOnly
      }
      static Down() {
        return new lt(0, -1, 0)
      }
      static Forward() {
        return new lt(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new lt(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new lt(1, 0, 0)
      }
      static Left() {
        return new lt(-1, 0, 0)
      }
      static Random() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new lt((0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et))
      }
      static RandomToRef() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).W9((0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et))
      }
      static TransformCoordinates(tt, et) {
        const Vt = lt.Zero();
        return lt.TransformCoordinatesToRef(tt, et, Vt), Vt
      }
      static TransformCoordinatesToRef(tt, et, Vt) {
        return lt.TransformCoordinatesFromFloatsToRef(tt._x, tt._y, tt._z, et, Vt), Vt
      }
      static TransformCoordinatesFromFloatsToRef(tt, et, Vt, Ot, qt) {
        const Dt = Ot.m,
          mt = tt * Dt[0] + et * Dt[4] + Vt * Dt[8] + Dt[12],
          dt = tt * Dt[1] + et * Dt[5] + Vt * Dt[9] + Dt[13],
          jt = tt * Dt[2] + et * Dt[6] + Vt * Dt[10] + Dt[14],
          Ht = 1 / (tt * Dt[3] + et * Dt[7] + Vt * Dt[11] + Dt[15]);
        return qt._x = mt * Ht, qt._y = dt * Ht, qt._z = jt * Ht, qt._isDirty = !0, qt
      }
      static TransformNormal(tt, et) {
        const Vt = lt.Zero();
        return lt.TransformNormalToRef(tt, et, Vt), Vt
      }
      static TransformNormalToRef(tt, et, Vt) {
        return this.TransformNormalFromFloatsToRef(tt._x, tt._y, tt._z, et, Vt), Vt
      }
      static TransformNormalFromFloatsToRef(tt, et, Vt, Ot, qt) {
        const Dt = Ot.m;
        return qt._x = tt * Dt[0] + et * Dt[4] + Vt * Dt[8], qt._y = tt * Dt[1] + et * Dt[5] + Vt * Dt[9], qt._z = tt * Dt[2] + et * Dt[6] + Vt * Dt[10], qt._isDirty = !0, qt
      }
      static CatmullRom(tt, et, Vt, Ot, qt) {
        const Dt = qt * qt,
          mt = qt * Dt,
          dt = .5 * (2 * et._x + (-tt._x + Vt._x) * qt + (2 * tt._x - 5 * et._x + 4 * Vt._x - Ot._x) * Dt + (-tt._x + 3 * et._x - 3 * Vt._x + Ot._x) * mt),
          jt = .5 * (2 * et._y + (-tt._y + Vt._y) * qt + (2 * tt._y - 5 * et._y + 4 * Vt._y - Ot._y) * Dt + (-tt._y + 3 * et._y - 3 * Vt._y + Ot._y) * mt),
          Ht = .5 * (2 * et._z + (-tt._z + Vt._z) * qt + (2 * tt._z - 5 * et._z + 4 * Vt._z - Ot._z) * Dt + (-tt._z + 3 * et._z - 3 * Vt._z + Ot._z) * mt);
        return new lt(dt, jt, Ht)
      }
      static Clamp(tt, et, Vt) {
        const Ot = new lt;
        return lt.ClampToRef(tt, et, Vt, Ot), Ot
      }
      static ClampToRef(tt, et, Vt, Ot) {
        let qt = tt._x;
        qt = qt > Vt._x ? Vt._x : qt, qt = qt < et._x ? et._x : qt;
        let Dt = tt._y;
        Dt = Dt > Vt._y ? Vt._y : Dt, Dt = Dt < et._y ? et._y : Dt;
        let mt = tt._z;
        return mt = mt > Vt._z ? Vt._z : mt, mt = mt < et._z ? et._z : mt, Ot.W9(qt, Dt, mt), Ot
      }
      static CheckExtends(tt, et, Vt) {
        et.minimizeInPlace(tt), Vt.maximizeInPlace(tt)
      }
      static Hermite(tt, et, Vt, Ot, qt) {
        const Dt = qt * qt,
          mt = qt * Dt,
          dt = 2 * mt - 3 * Dt + 1,
          jt = -2 * mt + 3 * Dt,
          Ht = mt - 2 * Dt + qt,
          Xt = mt - Dt,
          Qt = tt._x * dt + Vt._x * jt + et._x * Ht + Ot._x * Xt,
          Et = tt._y * dt + Vt._y * jt + et._y * Ht + Ot._y * Xt,
          ft = tt._z * dt + Vt._z * jt + et._z * Ht + Ot._z * Xt;
        return new lt(Qt, Et, ft)
      }
      static Hermite1stDerivative(tt, et, Vt, Ot, qt) {
        const Dt = new lt;
        return this.Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt), Dt
      }
      static Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt) {
        const mt = qt * qt;
        return Dt._x = 6 * (mt - qt) * tt._x + (3 * mt - 4 * qt + 1) * et._x + 6 * (-mt + qt) * Vt._x + (3 * mt - 2 * qt) * Ot._x, Dt._y = 6 * (mt - qt) * tt._y + (3 * mt - 4 * qt + 1) * et._y + 6 * (-mt + qt) * Vt._y + (3 * mt - 2 * qt) * Ot._y, Dt._z = 6 * (mt - qt) * tt._z + (3 * mt - 4 * qt + 1) * et._z + 6 * (-mt + qt) * Vt._z + (3 * mt - 2 * qt) * Ot._z, Dt._isDirty = !0, Dt
      }
      static Lerp(tt, et, Vt) {
        const Ot = new lt(0, 0, 0);
        return lt.LerpToRef(tt, et, Vt, Ot), Ot
      }
      static LerpToRef(tt, et, Vt, Ot) {
        return Ot._x = tt._x + (et._x - tt._x) * Vt, Ot._y = tt._y + (et._y - tt._y) * Vt, Ot._z = tt._z + (et._z - tt._z) * Vt, Ot._isDirty = !0, Ot
      }
      static Dot(tt, et) {
        return tt._x * et._x + tt._y * et._y + tt._z * et._z
      }
      dot(tt) {
        return this._x * tt._x + this._y * tt._y + this._z * tt._z
      }
      static Cross(tt, et) {
        const Vt = new lt;
        return lt.CrossToRef(tt, et, Vt), Vt
      }
      static CrossToRef(tt, et, Vt) {
        const Ot = tt._y * et._z - tt._z * et._y,
          qt = tt._z * et._x - tt._x * et._z,
          Dt = tt._x * et._y - tt._y * et._x;
        return Vt.W9(Ot, qt, Dt), Vt
      }
      static Normalize(tt) {
        const et = lt.Zero();
        return lt.NormalizeToRef(tt, et), et
      }
      static NormalizeToRef(tt, et) {
        return tt.normalizeToRef(et), et
      }
      static Project(tt, et, Vt, Ot) {
        const qt = new lt;
        return lt.ProjectToRef(tt, et, Vt, Ot, qt), qt
      }
      static ProjectToRef(tt, et, Vt, Ot, qt) {
        const Dt = Ot.width,
          dt = Ot.height,
          jt = Ot.x,
          Ht = Ot.y,
          Xt = yt.Matrix[1],
          Qt = mt.d.LastCreatedEngine?.isNDCHalfZRange,
          Et = Qt ? 1 : .5,
          ft = Qt ? 0 : .5;
        wt.FromValuesToRef(Dt / 2, 0, 0, 0, 0, -dt / 2, 0, 0, 0, 0, Et, 0, jt + Dt / 2, dt / 2 + Ht, ft, 1, Xt);
        const Nt = yt.Matrix[0];
        return et.multiplyToRef(Vt, Nt), Nt.multiplyToRef(Xt, Nt), lt.TransformCoordinatesToRef(tt, Nt, qt), qt
      }
      static Reflect(tt, et) {
        return this.ReflectToRef(tt, et, new lt)
      }
      static ReflectToRef(tt, et, Vt) {
        const Ot = Nt.uf[0];
        return Ot.rK(et).scaleInPlace(2 * lt.Dot(tt, et)), Vt.rK(tt).qqt(Ot)
      }
      static UnprojectFromTransform(tt, et, Vt, Ot, qt) {
        return this.Unproject(tt, et, Vt, Ot, qt, wt.IdentityReadOnly)
      }
      static Unproject(tt, et, Vt, Ot, qt, Dt) {
        const mt = new lt;
        return lt.UnprojectToRef(tt, et, Vt, Ot, qt, Dt, mt), mt
      }
      static UnprojectToRef(tt, et, Vt, Ot, qt, Dt, mt) {
        return lt.UnprojectFloatsToRef(tt._x, tt._y, tt._z, et, Vt, Ot, qt, Dt, mt), mt
      }
      static UnprojectFloatsToRef(tt, et, Vt, Ot, qt, Dt, dt, jt, Ht) {
        const Xt = yt.Matrix[0];
        Dt.multiplyToRef(dt, Xt), Xt.multiplyToRef(jt, Xt), Xt.invert();
        const Qt = yt.uf[0];
        return Qt.x = tt / Ot * 2 - 1, Qt.y = -(et / qt * 2 - 1), mt.d.LastCreatedEngine?.isNDCHalfZRange ? Qt.z = Vt : Qt.z = 2 * Vt - 1, lt.TransformCoordinatesToRef(Qt, Xt, Ht), Ht
      }
      static Minimize(tt, et) {
        const Vt = new lt;
        return Vt.rK(tt), Vt.minimizeInPlace(et), Vt
      }
      static Maximize(tt, et) {
        const Vt = new lt;
        return Vt.rK(tt), Vt.maximizeInPlace(et), Vt
      }
      static Distance(tt, et) {
        return Math.sqrt(lt.DistanceSquared(tt, et))
      }
      static DistanceSquared(tt, et) {
        const Vt = tt._x - et._x,
          Ot = tt._y - et._y,
          qt = tt._z - et._z;
        return Vt * Vt + Ot * Ot + qt * qt
      }
      static ProjectOnTriangleToRef(tt, et, Vt, qt, Dt) {
        const mt = yt.uf[0],
          jt = yt.uf[1],
          Ht = yt.uf[2],
          Xt = yt.uf[3],
          Qt = yt.uf[4];
        Vt.subtractToRef(et, mt), qt.subtractToRef(et, jt), qt.subtractToRef(Vt, Ht);
        const Et = mt.length(),
          ft = jt.length(),
          wt = Ht.length();
        if (Et < Ot.e || ft < Ot.e || wt < Ot.e) return Dt.rK(et), lt.Distance(tt, et);
        tt.subtractToRef(et, Qt), lt.CrossToRef(mt, jt, Xt);
        const Nt = Xt.length();
        if (Nt < Ot.e) return Dt.rK(et), lt.Distance(tt, et);
        Xt.normalizeFromLength(Nt);
        let Mt = Qt.length();
        if (Mt < Ot.e) return Dt.rK(et), 0;
        Qt.normalizeFromLength(Mt);
        const bt = lt.Dot(Xt, Qt),
          Jt = yt.uf[5],
          Ct = yt.uf[6];
        Jt.rK(Xt).scaleInPlace(-Mt * bt), Ct.rK(tt).addInPlace(Jt);
        const ut = yt.uf[4],
          Kt = yt.uf[5],
          ht = yt.uf[7],
          vt = yt.uf[8];
        ut.rK(mt).scaleInPlace(1 / Et), vt.rK(jt).scaleInPlace(1 / ft), ut.addInPlace(vt).scaleInPlace(-1), Kt.rK(mt).scaleInPlace(-1 / Et), vt.rK(Ht).scaleInPlace(1 / wt), Kt.addInPlace(vt).scaleInPlace(-1), ht.rK(Ht).scaleInPlace(-1 / wt), vt.rK(jt).scaleInPlace(-1 / ft), ht.addInPlace(vt).scaleInPlace(-1);
        const Wt = yt.uf[9];
        let St;
        Wt.rK(Ct).qqt(et), lt.CrossToRef(ut, Wt, vt), St = lt.Dot(vt, Xt);
        const ct = St;
        Wt.rK(Ct).qqt(Vt), lt.CrossToRef(Kt, Wt, vt), St = lt.Dot(vt, Xt);
        const Rt = St;
        Wt.rK(Ct).qqt(qt), lt.CrossToRef(ht, Wt, vt), St = lt.Dot(vt, Xt);
        const It = St,
          Pt = yt.uf[10];
        let Zt, Lt;
        ct > 0 && Rt < 0 ? (Pt.rK(mt), Zt = et, Lt = Vt) : Rt > 0 && It < 0 ? (Pt.rK(Ht), Zt = Vt, Lt = qt) : (Pt.rK(jt).scaleInPlace(-1), Zt = qt, Lt = et);
        const Ft = yt.uf[9],
          kt = yt.uf[4];
        Zt.subtractToRef(Ct, vt), Lt.subtractToRef(Ct, Ft), lt.CrossToRef(vt, Ft, kt);
        if (!(lt.Dot(kt, Xt) < 0)) return Dt.rK(Ct), Math.abs(Mt * bt);
        const Gt = yt.uf[5];
        lt.CrossToRef(Pt, kt, Gt), Gt.normalize();
        const zt = yt.uf[9];
        zt.rK(Zt).qqt(Ct);
        const ot = zt.length();
        if (ot < Ot.e) return Dt.rK(Zt), lt.Distance(tt, Zt);
        zt.normalizeFromLength(ot);
        const rt = lt.Dot(Gt, zt),
          Ut = yt.uf[7];
        Ut.rK(Ct).addInPlace(Gt.scaleInPlace(ot * rt)), vt.rK(Ut).qqt(Zt), Mt = Pt.length(), Pt.normalizeFromLength(Mt);
        let At = lt.Dot(vt, Pt) / Math.max(Mt, Ot.e);
        return At = (0, dt.Clamp)(At, 0, 1), Ut.rK(Zt).addInPlace(Pt.scaleInPlace(At * Mt)), Dt.rK(Ut), lt.Distance(tt, Ut)
      }
      static Center(tt, et) {
        return lt.CenterToRef(tt, et, lt.Zero())
      }
      static CenterToRef(tt, et, Vt) {
        return Vt.W9((tt._x + et._x) / 2, (tt._y + et._y) / 2, (tt._z + et._z) / 2)
      }
      static RotationFromAxis(tt, et, Vt) {
        const Ot = new lt;
        return lt.RotationFromAxisToRef(tt, et, Vt, Ot), Ot
      }
      static RotationFromAxisToRef(tt, et, Vt, Ot) {
        const qt = yt.Quaternion[0];
        return ft.RotationQuaternionFromAxisToRef(tt, et, Vt, qt), qt.toEulerAnglesToRef(Ot), Ot
      }
    }
    lt._V8PerformanceHack = new lt(.5, .5, .5), lt._UpReadOnly = lt.Up(), lt._DownReadOnly = lt.Down(), lt._LeftHandedForwardReadOnly = lt.Forward(!1), lt._RightHandedForwardReadOnly = lt.Forward(!0), lt._LeftHandedBackwardReadOnly = lt.Backward(!1), lt._RightHandedBackwardReadOnly = lt.Backward(!0), lt._RightReadOnly = lt.Right(), lt._LeftReadOnly = lt.Left(), lt._ZeroReadOnly = lt.Zero(), lt._OneReadOnly = lt.One();
    class Et {
      get x() {
        return this._x
      }
      set x(tt) {
        this._x = tt, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(tt) {
        this._y = tt, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(tt) {
        this._z = tt, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(tt) {
        this._w = tt, this._isDirty = !0
      }
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = tt, this._y = et, this._z = Vt, this._w = Ot
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let tt = Xt(this._x);
        return tt = 397 * tt ^ Xt(this._y), tt = 397 * tt ^ Xt(this._z), tt = 397 * tt ^ Xt(this._w), tt
      }
      GOt() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(tt, et) {
        return void 0 === et && (et = 0), tt[et] = this._x, tt[et + 1] = this._y, tt[et + 2] = this._z, tt[et + 3] = this._w, this
      }
      vVt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Et.FromArrayToRef(tt, et, this), this
      }
      addInPlace(tt) {
        return this.x += tt._x, this.y += tt._y, this.z += tt._z, this.w += tt._w, this
      }
      addInPlaceFromFloats(tt, et, Vt, Ot) {
        return this.x += tt, this.y += et, this.z += Vt, this.w += Ot, this
      }
      add(tt) {
        return new Et(this._x + tt.x, this._y + tt.y, this._z + tt.z, this._w + tt.w)
      }
      addToRef(tt, et) {
        return et.x = this._x + tt.x, et.y = this._y + tt.y, et.z = this._z + tt.z, et.w = this._w + tt.w, et
      }
      qqt(tt) {
        return this.x -= tt.x, this.y -= tt.y, this.z -= tt.z, this.w -= tt.w, this
      }
      subtract(tt) {
        return new Et(this._x - tt.x, this._y - tt.y, this._z - tt.z, this._w - tt.w)
      }
      subtractToRef(tt, et) {
        return et.x = this._x - tt.x, et.y = this._y - tt.y, et.z = this._z - tt.z, et.w = this._w - tt.w, et
      }
      subtractFromFloats(tt, et, Vt, Ot) {
        return new Et(this._x - tt, this._y - et, this._z - Vt, this._w - Ot)
      }
      subtractFromFloatsToRef(tt, et, Vt, Ot, qt) {
        return qt.x = this._x - tt, qt.y = this._y - et, qt.z = this._z - Vt, qt.w = this._w - Ot, qt
      }
      gq() {
        return new Et(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(tt) {
        return tt.x = -this._x, tt.y = -this._y, tt.z = -this._z, tt.w = -this._w, tt
      }
      scaleInPlace(tt) {
        return this.x *= tt, this.y *= tt, this.z *= tt, this.w *= tt, this
      }
      scale(tt) {
        return new Et(this._x * tt, this._y * tt, this._z * tt, this._w * tt)
      }
      scaleToRef(tt, et) {
        return et.x = this._x * tt, et.y = this._y * tt, et.z = this._z * tt, et.w = this._w * tt, et
      }
      scaleAndAddToRef(tt, et) {
        return et.x += this._x * tt, et.y += this._y * tt, et.z += this._z * tt, et.w += this._w * tt, et
      }
      equals(tt) {
        return tt && this._x === tt.x && this._y === tt.y && this._z === tt.z && this._w === tt.w
      }
      equalsWithEpsilon(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot.e;
        return tt && (0, dt.WithinEpsilon)(this._x, tt.x, et) && (0, dt.WithinEpsilon)(this._y, tt.y, et) && (0, dt.WithinEpsilon)(this._z, tt.z, et) && (0, dt.WithinEpsilon)(this._w, tt.w, et)
      }
      adt(tt, et, Vt, Ot) {
        return this._x === tt && this._y === et && this._z === Vt && this._w === Ot
      }
      multiplyInPlace(tt) {
        return this.x *= tt.x, this.y *= tt.y, this.z *= tt.z, this.w *= tt.w, this
      }
      multiply(tt) {
        return new Et(this._x * tt.x, this._y * tt.y, this._z * tt.z, this._w * tt.w)
      }
      multiplyToRef(tt, et) {
        return et.x = this._x * tt.x, et.y = this._y * tt.y, et.z = this._z * tt.z, et.w = this._w * tt.w, et
      }
      multiplyByFloats(tt, et, Vt, Ot) {
        return new Et(this._x * tt, this._y * et, this._z * Vt, this._w * Ot)
      }
      divide(tt) {
        return new Et(this._x / tt.x, this._y / tt.y, this._z / tt.z, this._w / tt.w)
      }
      divideToRef(tt, et) {
        return et.x = this._x / tt.x, et.y = this._y / tt.y, et.z = this._z / tt.z, et.w = this._w / tt.w, et
      }
      divideInPlace(tt) {
        return this.divideToRef(tt, this)
      }
      minimizeInPlace(tt) {
        return tt.x < this._x && (this.x = tt.x), tt.y < this._y && (this.y = tt.y), tt.z < this._z && (this.z = tt.z), tt.w < this._w && (this.w = tt.w), this
      }
      maximizeInPlace(tt) {
        return tt.x > this._x && (this.x = tt.x), tt.y > this._y && (this.y = tt.y), tt.z > this._z && (this.z = tt.z), tt.w > this._w && (this.w = tt.w), this
      }
      minimizeInPlaceFromFloats(tt, et, Vt, Ot) {
        return this.x = Math.min(tt, this._x), this.y = Math.min(et, this._y), this.z = Math.min(Vt, this._z), this.w = Math.min(Ot, this._w), this
      }
      maximizeInPlaceFromFloats(tt, et, Vt, Ot) {
        return this.x = Math.max(tt, this._x), this.y = Math.max(et, this._y), this.z = Math.max(Vt, this._z), this.w = Math.max(Ot, this._w), this
      }
      floorToRef(tt) {
        return tt.x = Math.floor(this._x), tt.y = Math.floor(this._y), tt.z = Math.floor(this._z), tt.w = Math.floor(this._w), tt
      }
      floor() {
        return new Et(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(tt) {
        return tt.x = this._x - Math.floor(this._x), tt.y = this._y - Math.floor(this._y), tt.z = this._z - Math.floor(this._z), tt.w = this._w - Math.floor(this._w), tt
      }
      fract() {
        return new Et(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(tt) {
        return 0 === tt || 1 === tt ? this : this.scaleInPlace(1 / tt)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Et)
      }
      normalizeToRef(tt) {
        const et = this.length();
        return 0 === et || 1 === et ? (tt.x = this._x, tt.y = this._y, tt.z = this._z, tt.w = this._w, tt) : this.scaleToRef(1 / et, tt)
      }
      toVector3() {
        return new lt(this._x, this._y, this._z)
      }
      clone() {
        return new Et(this._x, this._y, this._z, this._w)
      }
      rK(tt) {
        return this.x = tt.x, this.y = tt.y, this.z = tt.z, this.w = tt.w, this
      }
      W9(tt, et, Vt, Ot) {
        return this.x = tt, this.y = et, this.z = Vt, this.w = Ot, this
      }
      set(tt, et, Vt, Ot) {
        return this.W9(tt, et, Vt, Ot)
      }
      S_(tt) {
        return this.x = this.y = this.z = this.w = tt, this
      }
      dot(tt) {
        return this._x * tt.x + this._y * tt.y + this._z * tt.z + this._w * tt.w
      }
      static FromArray(tt, et) {
        return et || (et = 0), new Et(tt[et], tt[et + 1], tt[et + 2], tt[et + 3])
      }
      static FromArrayToRef(tt, et, Vt) {
        return Vt.x = tt[et], Vt.y = tt[et + 1], Vt.z = tt[et + 2], Vt.w = tt[et + 3], Vt
      }
      static FromFloatArrayToRef(tt, et, Vt) {
        return Et.FromArrayToRef(tt, et, Vt), Vt
      }
      static FromFloatsToRef(tt, et, Vt, Ot, qt) {
        return qt.x = tt, qt.y = et, qt.z = Vt, qt.w = Ot, qt
      }
      static Zero() {
        return new Et(0, 0, 0, 0)
      }
      static One() {
        return new Et(1, 1, 1, 1)
      }
      static Random() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Et((0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et))
      }
      static RandomToRef() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        return Vt.x = (0, dt.RandomRange)(tt, et), Vt.y = (0, dt.RandomRange)(tt, et), Vt.z = (0, dt.RandomRange)(tt, et), Vt.w = (0, dt.RandomRange)(tt, et), Vt
      }
      static Clamp(tt, et, Vt) {
        return Et.ClampToRef(tt, et, Vt, new Et)
      }
      static ClampToRef(tt, et, Vt, Ot) {
        return Ot.x = (0, dt.Clamp)(tt.x, et.x, Vt.x), Ot.y = (0, dt.Clamp)(tt.y, et.y, Vt.y), Ot.z = (0, dt.Clamp)(tt.z, et.z, Vt.z), Ot.w = (0, dt.Clamp)(tt.w, et.w, Vt.w), Ot
      }
      static CheckExtends(tt, et, Vt) {
        et.minimizeInPlace(tt), Vt.maximizeInPlace(tt)
      }
      static get ZeroReadOnly() {
        return Et._ZeroReadOnly
      }
      static Normalize(tt) {
        return Et.NormalizeToRef(tt, new Et)
      }
      static NormalizeToRef(tt, et) {
        return tt.normalizeToRef(et), et
      }
      static Minimize(tt, et) {
        const Vt = new Et;
        return Vt.rK(tt), Vt.minimizeInPlace(et), Vt
      }
      static Maximize(tt, et) {
        const Vt = new Et;
        return Vt.rK(tt), Vt.maximizeInPlace(et), Vt
      }
      static Distance(tt, et) {
        return Math.sqrt(Et.DistanceSquared(tt, et))
      }
      static DistanceSquared(tt, et) {
        const Vt = tt.x - et.x,
          Ot = tt.y - et.y,
          qt = tt.z - et.z,
          Dt = tt.w - et.w;
        return Vt * Vt + Ot * Ot + qt * qt + Dt * Dt
      }
      static Center(tt, et) {
        return Et.CenterToRef(tt, et, new Et)
      }
      static CenterToRef(tt, et, Vt) {
        return Vt.x = (tt.x + et.x) / 2, Vt.y = (tt.y + et.y) / 2, Vt.z = (tt.z + et.z) / 2, Vt.w = (tt.w + et.w) / 2, Vt
      }
      static TransformCoordinates(tt, et) {
        return Et.TransformCoordinatesToRef(tt, et, new Et)
      }
      static TransformCoordinatesToRef(tt, et, Vt) {
        return Et.TransformCoordinatesFromFloatsToRef(tt._x, tt._y, tt._z, et, Vt), Vt
      }
      static TransformCoordinatesFromFloatsToRef(tt, et, Vt, Ot, qt) {
        const Dt = Ot.m,
          mt = tt * Dt[0] + et * Dt[4] + Vt * Dt[8] + Dt[12],
          dt = tt * Dt[1] + et * Dt[5] + Vt * Dt[9] + Dt[13],
          jt = tt * Dt[2] + et * Dt[6] + Vt * Dt[10] + Dt[14],
          Ht = tt * Dt[3] + et * Dt[7] + Vt * Dt[11] + Dt[15];
        return qt.x = mt, qt.y = dt, qt.z = jt, qt.w = Ht, qt
      }
      static TransformNormal(tt, et) {
        return Et.TransformNormalToRef(tt, et, new Et)
      }
      static TransformNormalToRef(tt, et, Vt) {
        const Ot = et.m,
          qt = tt.x * Ot[0] + tt.y * Ot[4] + tt.z * Ot[8],
          Dt = tt.x * Ot[1] + tt.y * Ot[5] + tt.z * Ot[9],
          mt = tt.x * Ot[2] + tt.y * Ot[6] + tt.z * Ot[10];
        return Vt.x = qt, Vt.y = Dt, Vt.z = mt, Vt.w = tt.w, Vt
      }
      static TransformNormalFromFloatsToRef(tt, et, Vt, Ot, qt, Dt) {
        const mt = qt.m;
        return Dt.x = tt * mt[0] + et * mt[4] + Vt * mt[8], Dt.y = tt * mt[1] + et * mt[5] + Vt * mt[9], Dt.z = tt * mt[2] + et * mt[6] + Vt * mt[10], Dt.w = Ot, Dt
      }
      static FromVector3(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Et(tt._x, tt._y, tt._z, et)
      }
      static Dot(tt, et) {
        return tt.x * et.x + tt.y * et.y + tt.z * et.z + tt.w * et.w
      }
    }
    Et._V8PerformanceHack = new Et(.5, .5, .5, .5), Et._ZeroReadOnly = Et.Zero();
    class ft {
      get x() {
        return this._x
      }
      set x(tt) {
        this._x = tt, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(tt) {
        this._y = tt, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(tt) {
        this._z = tt, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(tt) {
        this._w = tt, this._isDirty = !0
      }
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = tt, this._y = et, this._z = Vt, this._w = Ot
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let tt = Xt(this._x);
        return tt = 397 * tt ^ Xt(this._y), tt = 397 * tt ^ Xt(this._z), tt = 397 * tt ^ Xt(this._w), tt
      }
      GOt() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tt[et] = this._x, tt[et + 1] = this._y, tt[et + 2] = this._z, tt[et + 3] = this._w, this
      }
      vVt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ft.FromArrayToRef(tt, et, this)
      }
      equals(tt) {
        return tt && this._x === tt._x && this._y === tt._y && this._z === tt._z && this._w === tt._w
      }
      equalsWithEpsilon(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot.e;
        return tt && (0, dt.WithinEpsilon)(this._x, tt._x, et) && (0, dt.WithinEpsilon)(this._y, tt._y, et) && (0, dt.WithinEpsilon)(this._z, tt._z, et) && (0, dt.WithinEpsilon)(this._w, tt._w, et)
      }
      isApprox(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ot.e;
        return tt && ((0, dt.WithinEpsilon)(this._x, tt._x, et) && (0, dt.WithinEpsilon)(this._y, tt._y, et) && (0, dt.WithinEpsilon)(this._z, tt._z, et) && (0, dt.WithinEpsilon)(this._w, tt._w, et) || (0, dt.WithinEpsilon)(this._x, -tt._x, et) && (0, dt.WithinEpsilon)(this._y, -tt._y, et) && (0, dt.WithinEpsilon)(this._z, -tt._z, et) && (0, dt.WithinEpsilon)(this._w, -tt._w, et))
      }
      clone() {
        return new ft(this._x, this._y, this._z, this._w)
      }
      rK(tt) {
        return this._x = tt._x, this._y = tt._y, this._z = tt._z, this._w = tt._w, this._isDirty = !0, this
      }
      W9(tt, et, Vt, Ot) {
        return this._x = tt, this._y = et, this._z = Vt, this._w = Ot, this._isDirty = !0, this
      }
      set(tt, et, Vt, Ot) {
        return this.W9(tt, et, Vt, Ot)
      }
      S_(tt) {
        return this.W9(tt, tt, tt, tt)
      }
      add(tt) {
        return new ft(this._x + tt._x, this._y + tt._y, this._z + tt._z, this._w + tt._w)
      }
      addInPlace(tt) {
        return this._x += tt._x, this._y += tt._y, this._z += tt._z, this._w += tt._w, this._isDirty = !0, this
      }
      addToRef(tt, et) {
        return et._x = this._x + tt._x, et._y = this._y + tt._y, et._z = this._z + tt._z, et._w = this._w + tt._w, et._isDirty = !0, et
      }
      addInPlaceFromFloats(tt, et, Vt, Ot) {
        return this._x += tt, this._y += et, this._z += Vt, this._w += Ot, this._isDirty = !0, this
      }
      subtractToRef(tt, et) {
        return et._x = this._x - tt._x, et._y = this._y - tt._y, et._z = this._z - tt._z, et._w = this._w - tt._w, et._isDirty = !0, et
      }
      subtractFromFloats(tt, et, Vt, Ot) {
        return this.subtractFromFloatsToRef(tt, et, Vt, Ot, new ft)
      }
      subtractFromFloatsToRef(tt, et, Vt, Ot, qt) {
        return qt._x = this._x - tt, qt._y = this._y - et, qt._z = this._z - Vt, qt._w = this._w - Ot, qt._isDirty = !0, qt
      }
      subtract(tt) {
        return new ft(this._x - tt._x, this._y - tt._y, this._z - tt._z, this._w - tt._w)
      }
      qqt(tt) {
        return this._x -= tt._x, this._y -= tt._y, this._z -= tt._z, this._w -= tt._w, this._isDirty = !0, this
      }
      scale(tt) {
        return new ft(this._x * tt, this._y * tt, this._z * tt, this._w * tt)
      }
      scaleToRef(tt, et) {
        return et._x = this._x * tt, et._y = this._y * tt, et._z = this._z * tt, et._w = this._w * tt, et._isDirty = !0, et
      }
      scaleInPlace(tt) {
        return this._x *= tt, this._y *= tt, this._z *= tt, this._w *= tt, this._isDirty = !0, this
      }
      scaleAndAddToRef(tt, et) {
        return et._x += this._x * tt, et._y += this._y * tt, et._z += this._z * tt, et._w += this._w * tt, et._isDirty = !0, et
      }
      multiply(tt) {
        const et = new ft(0, 0, 0, 1);
        return this.multiplyToRef(tt, et), et
      }
      multiplyToRef(tt, et) {
        const Vt = this._x * tt._w + this._y * tt._z - this._z * tt._y + this._w * tt._x,
          Ot = -this._x * tt._z + this._y * tt._w + this._z * tt._x + this._w * tt._y,
          qt = this._x * tt._y - this._y * tt._x + this._z * tt._w + this._w * tt._z,
          Dt = -this._x * tt._x - this._y * tt._y - this._z * tt._z + this._w * tt._w;
        return et.W9(Vt, Ot, qt, Dt), et
      }
      multiplyInPlace(tt) {
        return this.multiplyToRef(tt, this)
      }
      multiplyByFloats(tt, et, Vt, Ot) {
        return this._x *= tt, this._y *= et, this._z *= Vt, this._w *= Ot, this._isDirty = !0, this
      }
      divide(tt) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(tt, et) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(tt) {
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
        return this.negateToRef(new ft)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(tt) {
        return tt._x = -this._x, tt._y = -this._y, tt._z = -this._z, tt._w = -this._w, tt._isDirty = !0, tt
      }
      adt(tt, et, Vt, Ot) {
        return this._x === tt && this._y === et && this._z === Vt && this._w === Ot
      }
      floorToRef(tt) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(tt) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(tt) {
        return tt.W9(-this._x, -this._y, -this._z, this._w), tt
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new ft(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const tt = this.conjugate(),
          et = this.lengthSquared();
        return 0 == et || 1 == et || tt.scaleInPlace(1 / et), tt
      }
      invertInPlace() {
        this.conjugateInPlace();
        const tt = this.lengthSquared();
        return 0 == tt || 1 == tt || this.scaleInPlace(1 / tt), this
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
      normalizeFromLength(tt) {
        return 0 === tt || 1 === tt ? this : this.scaleInPlace(1 / tt)
      }
      normalizeToNew() {
        const tt = new ft(0, 0, 0, 1);
        return this.normalizeToRef(tt), tt
      }
      normalizeToRef(tt) {
        const et = this.length();
        return 0 === et || 1 === et ? tt.W9(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / et, tt)
      }
      toEulerAngles() {
        const tt = lt.Zero();
        return this.toEulerAnglesToRef(tt), tt
      }
      toEulerAnglesToRef(tt) {
        const et = this._z,
          Vt = this._x,
          Ot = this._y,
          qt = this._w,
          Dt = Ot * et - Vt * qt,
          mt = .4999999;
        if (Dt < -mt) tt._y = 2 * Math.atan2(Ot, qt), tt._x = Math.PI / 2, tt._z = 0, tt._isDirty = !0;
        else if (Dt > mt) tt._y = 2 * Math.atan2(Ot, qt), tt._x = -Math.PI / 2, tt._z = 0, tt._isDirty = !0;
        else {
          const mt = qt * qt,
            dt = et * et,
            jt = Vt * Vt,
            Ht = Ot * Ot;
          tt._z = Math.atan2(2 * (Vt * Ot + et * qt), -dt - jt + Ht + mt), tt._x = Math.asin(-2 * Dt), tt._y = Math.atan2(2 * (et * Vt + Ot * qt), dt - jt - Ht + mt), tt._isDirty = !0
        }
        return tt
      }
      toAlphaBetaGammaToRef(tt) {
        const et = this._z,
          Vt = this._x,
          Ot = this._y,
          qt = this._w,
          Dt = Math.sqrt(Vt * Vt + Ot * Ot),
          mt = Math.sqrt(et * et + qt * qt),
          dt = 2 * Math.atan2(Dt, mt),
          jt = 2 * Math.atan2(et, qt),
          Ht = 2 * Math.atan2(Ot, Vt),
          Xt = (jt + Ht) / 2,
          Qt = (jt - Ht) / 2;
        return tt.set(Qt, dt, Xt), tt
      }
      toRotationMatrix(tt) {
        return wt.FromQuaternionToRef(this, tt), tt
      }
      fromRotationMatrix(tt) {
        return ft.FromRotationMatrixToRef(tt, this), this
      }
      dot(tt) {
        return this._x * tt._x + this._y * tt._y + this._z * tt._z + this._w * tt._w
      }
      toAxisAngle() {
        const tt = lt.Zero();
        return {
          axis: tt,
          angle: this.toAxisAngleToRef(tt)
        }
      }
      toAxisAngleToRef(tt) {
        let et;
        const Vt = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Ot = this._w;
        return Vt > 0 ? (et = 2 * Math.atan2(Vt, Ot), tt.set(this._x / Vt, this._y / Vt, this._z / Vt)) : (et = 0, tt.set(1, 0, 0)), et
      }
      static FromRotationMatrix(tt) {
        const et = new ft;
        return ft.FromRotationMatrixToRef(tt, et), et
      }
      static FromRotationMatrixToRef(tt, et) {
        const Vt = tt.m,
          Ot = Vt[0],
          qt = Vt[4],
          Dt = Vt[8],
          mt = Vt[1],
          dt = Vt[5],
          jt = Vt[9],
          Ht = Vt[2],
          Xt = Vt[6],
          Qt = Vt[10],
          lt = Ot + dt + Qt;
        let Et;
        return lt > 0 ? (Et = .5 / Math.sqrt(lt + 1), et._w = .25 / Et, et._x = (Xt - jt) * Et, et._y = (Dt - Ht) * Et, et._z = (mt - qt) * Et, et._isDirty = !0) : Ot > dt && Ot > Qt ? (Et = 2 * Math.sqrt(1 + Ot - dt - Qt), et._w = (Xt - jt) / Et, et._x = .25 * Et, et._y = (qt + mt) / Et, et._z = (Dt + Ht) / Et, et._isDirty = !0) : dt > Qt ? (Et = 2 * Math.sqrt(1 + dt - Ot - Qt), et._w = (Dt - Ht) / Et, et._x = (qt + mt) / Et, et._y = .25 * Et, et._z = (jt + Xt) / Et, et._isDirty = !0) : (Et = 2 * Math.sqrt(1 + Qt - Ot - dt), et._w = (mt - qt) / Et, et._x = (Dt + Ht) / Et, et._y = (jt + Xt) / Et, et._z = .25 * Et, et._isDirty = !0), et
      }
      static Dot(tt, et) {
        return tt._x * et._x + tt._y * et._y + tt._z * et._z + tt._w * et._w
      }
      static AreClose(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Ot = ft.Dot(tt, et);
        return 1 - Ot * Ot <= Vt
      }
      static SmoothToRef(tt, et, Vt, Ot, qt) {
        let Dt = 0 === Ot ? 1 : Vt / Ot;
        return Dt = (0, dt.Clamp)(Dt, 0, 1), ft.SlerpToRef(tt, et, Dt, qt), qt
      }
      static Zero() {
        return new ft(0, 0, 0, 0)
      }
      static Inverse(tt) {
        return new ft(-tt._x, -tt._y, -tt._z, tt._w)
      }
      static InverseToRef(tt, et) {
        return et.set(-tt._x, -tt._y, -tt._z, tt._w), et
      }
      static Identity() {
        return new ft(0, 0, 0, 1)
      }
      static IsIdentity(tt) {
        return tt && 0 === tt._x && 0 === tt._y && 0 === tt._z && 1 === tt._w
      }
      static RotationAxis(tt, et) {
        return ft.RotationAxisToRef(tt, et, new ft)
      }
      static RotationAxisToRef(tt, et, Vt) {
        Vt._w = Math.cos(et / 2);
        const Ot = Math.sin(et / 2) / tt.length();
        return Vt._x = tt._x * Ot, Vt._y = tt._y * Ot, Vt._z = tt._z * Ot, Vt._isDirty = !0, Vt
      }
      static FromArray(tt, et) {
        return et || (et = 0), new ft(tt[et], tt[et + 1], tt[et + 2], tt[et + 3])
      }
      static FromArrayToRef(tt, et, Vt) {
        return Vt._x = tt[et], Vt._y = tt[et + 1], Vt._z = tt[et + 2], Vt._w = tt[et + 3], Vt._isDirty = !0, Vt
      }
      static FromFloatsToRef(tt, et, Vt, Ot, qt) {
        return qt.W9(tt, et, Vt, Ot), qt
      }
      static FromEulerAngles(tt, et, Vt) {
        const Ot = new ft;
        return ft.RotationYawPitchRollToRef(et, tt, Vt, Ot), Ot
      }
      static FromEulerAnglesToRef(tt, et, Vt, Ot) {
        return ft.RotationYawPitchRollToRef(et, tt, Vt, Ot), Ot
      }
      static FromEulerVector(tt) {
        const et = new ft;
        return ft.RotationYawPitchRollToRef(tt._y, tt._x, tt._z, et), et
      }
      static FromEulerVectorToRef(tt, et) {
        return ft.RotationYawPitchRollToRef(tt._y, tt._x, tt._z, et), et
      }
      static FromUnitVectorsToRef(tt, et, Vt) {
        let qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ot.e;
        const Dt = lt.Dot(tt, et) + 1;
        return Dt < qt ? Math.abs(tt.x) > Math.abs(tt.z) ? Vt.set(-tt.y, tt.x, 0, 0) : Vt.set(0, -tt.z, tt.y, 0) : (lt.CrossToRef(tt, et, Nt.uf[0]), Vt.set(Nt.uf[0].x, Nt.uf[0].y, Nt.uf[0].z, Dt)), Vt.normalize()
      }
      static RotationYawPitchRoll(tt, et, Vt) {
        const Ot = new ft;
        return ft.RotationYawPitchRollToRef(tt, et, Vt, Ot), Ot
      }
      static RotationYawPitchRollToRef(tt, et, Vt, Ot) {
        const qt = .5 * Vt,
          Dt = .5 * et,
          mt = .5 * tt,
          dt = Math.sin(qt),
          jt = Math.cos(qt),
          Ht = Math.sin(Dt),
          Xt = Math.cos(Dt),
          Qt = Math.sin(mt),
          lt = Math.cos(mt);
        return Ot._x = lt * Ht * jt + Qt * Xt * dt, Ot._y = Qt * Xt * jt - lt * Ht * dt, Ot._z = lt * Xt * dt - Qt * Ht * jt, Ot._w = lt * Xt * jt + Qt * Ht * dt, Ot._isDirty = !0, Ot
      }
      static RotationAlphaBetaGamma(tt, et, Vt) {
        const Ot = new ft;
        return ft.RotationAlphaBetaGammaToRef(tt, et, Vt, Ot), Ot
      }
      static RotationAlphaBetaGammaToRef(tt, et, Vt, Ot) {
        const qt = .5 * (Vt + tt),
          Dt = .5 * (Vt - tt),
          mt = .5 * et;
        return Ot._x = Math.cos(Dt) * Math.sin(mt), Ot._y = Math.sin(Dt) * Math.sin(mt), Ot._z = Math.sin(qt) * Math.cos(mt), Ot._w = Math.cos(qt) * Math.cos(mt), Ot._isDirty = !0, Ot
      }
      static RotationQuaternionFromAxis(tt, et, Vt) {
        const Ot = new ft(0, 0, 0, 0);
        return ft.RotationQuaternionFromAxisToRef(tt, et, Vt, Ot), Ot
      }
      static RotationQuaternionFromAxisToRef(tt, et, Vt, Ot) {
        const qt = yt.Matrix[0];
        return tt = tt.normalizeToRef(yt.uf[0]), et = et.normalizeToRef(yt.uf[1]), Vt = Vt.normalizeToRef(yt.uf[2]), wt.FromXYZAxesToRef(tt, et, Vt, qt), ft.FromRotationMatrixToRef(qt, Ot), Ot
      }
      static FromLookDirectionLH(tt, et) {
        const Vt = new ft;
        return ft.FromLookDirectionLHToRef(tt, et, Vt), Vt
      }
      static FromLookDirectionLHToRef(tt, et, Vt) {
        const Ot = yt.Matrix[0];
        return wt.LookDirectionLHToRef(tt, et, Ot), ft.FromRotationMatrixToRef(Ot, Vt), Vt
      }
      static FromLookDirectionRH(tt, et) {
        const Vt = new ft;
        return ft.FromLookDirectionRHToRef(tt, et, Vt), Vt
      }
      static FromLookDirectionRHToRef(tt, et, Vt) {
        const Ot = yt.Matrix[0];
        return wt.LookDirectionRHToRef(tt, et, Ot), ft.FromRotationMatrixToRef(Ot, Vt)
      }
      static Slerp(tt, et, Vt) {
        const Ot = ft.Identity();
        return ft.SlerpToRef(tt, et, Vt, Ot), Ot
      }
      static SlerpToRef(tt, et, Vt, Ot) {
        let qt, Dt, mt = tt._x * et._x + tt._y * et._y + tt._z * et._z + tt._w * et._w,
          dt = !1;
        if (mt < 0 && (dt = !0, mt = -mt), mt > .999999) Dt = 1 - Vt, qt = dt ? -Vt : Vt;
        else {
          const tt = Math.acos(mt),
            et = 1 / Math.sin(tt);
          Dt = Math.sin((1 - Vt) * tt) * et, qt = dt ? -Math.sin(Vt * tt) * et : Math.sin(Vt * tt) * et
        }
        return Ot._x = Dt * tt._x + qt * et._x, Ot._y = Dt * tt._y + qt * et._y, Ot._z = Dt * tt._z + qt * et._z, Ot._w = Dt * tt._w + qt * et._w, Ot._isDirty = !0, Ot
      }
      static Hermite(tt, et, Vt, Ot, qt) {
        const Dt = qt * qt,
          mt = qt * Dt,
          dt = 2 * mt - 3 * Dt + 1,
          jt = -2 * mt + 3 * Dt,
          Ht = mt - 2 * Dt + qt,
          Xt = mt - Dt,
          Qt = tt._x * dt + Vt._x * jt + et._x * Ht + Ot._x * Xt,
          lt = tt._y * dt + Vt._y * jt + et._y * Ht + Ot._y * Xt,
          Et = tt._z * dt + Vt._z * jt + et._z * Ht + Ot._z * Xt,
          wt = tt._w * dt + Vt._w * jt + et._w * Ht + Ot._w * Xt;
        return new ft(Qt, lt, Et, wt)
      }
      static Hermite1stDerivative(tt, et, Vt, Ot, qt) {
        const Dt = new ft;
        return this.Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt), Dt
      }
      static Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt) {
        const mt = qt * qt;
        return Dt._x = 6 * (mt - qt) * tt._x + (3 * mt - 4 * qt + 1) * et._x + 6 * (-mt + qt) * Vt._x + (3 * mt - 2 * qt) * Ot._x, Dt._y = 6 * (mt - qt) * tt._y + (3 * mt - 4 * qt + 1) * et._y + 6 * (-mt + qt) * Vt._y + (3 * mt - 2 * qt) * Ot._y, Dt._z = 6 * (mt - qt) * tt._z + (3 * mt - 4 * qt + 1) * et._z + 6 * (-mt + qt) * Vt._z + (3 * mt - 2 * qt) * Ot._z, Dt._w = 6 * (mt - qt) * tt._w + (3 * mt - 4 * qt + 1) * et._w + 6 * (-mt + qt) * Vt._w + (3 * mt - 2 * qt) * Ot._w, Dt._isDirty = !0, Dt
      }
      static Normalize(tt) {
        const et = ft.Zero();
        return ft.NormalizeToRef(tt, et), et
      }
      static NormalizeToRef(tt, et) {
        return tt.normalizeToRef(et), et
      }
      static Clamp(tt, et, Vt) {
        const Ot = new ft;
        return ft.ClampToRef(tt, et, Vt, Ot), Ot
      }
      static ClampToRef(tt, et, Vt, Ot) {
        return Ot.W9((0, dt.Clamp)(tt.x, et.x, Vt.x), (0, dt.Clamp)(tt.y, et.y, Vt.y), (0, dt.Clamp)(tt.z, et.z, Vt.z), (0, dt.Clamp)(tt.w, et.w, Vt.w))
      }
      static Random() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ft((0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et))
      }
      static RandomToRef() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).W9((0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et), (0, dt.RandomRange)(tt, et))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(tt, et) {
        return Math.sqrt(ft.DistanceSquared(tt, et))
      }
      static DistanceSquared(tt, et) {
        const Vt = tt.x - et.x,
          Ot = tt.y - et.y,
          qt = tt.z - et.z,
          Dt = tt.w - et.w;
        return Vt * Vt + Ot * Ot + qt * qt + Dt * Dt
      }
      static Center(tt, et) {
        return ft.CenterToRef(tt, et, ft.Zero())
      }
      static CenterToRef(tt, et, Vt) {
        return Vt.W9((tt.x + et.x) / 2, (tt.y + et.y) / 2, (tt.z + et.z) / 2, (tt.w + et.w) / 2)
      }
    }
    ft._V8PerformanceHack = new ft(.5, .5, .5, .5);
    class wt {
      static get Use64Bits() {
        return Dt.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = jt.m._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ot = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = tt, this._isIdentity3x2 = tt || Vt, this._isIdentityDirty = !this._isIdentity && et, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Ot
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Dt.b.MatrixTrackPrecisionChange && Dt.b.MatrixTrackedMatrices.push(this), this._m = new Dt.b.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const tt = this._m;
          this._isIdentity = 1 === tt[0] && 0 === tt[1] && 0 === tt[2] && 0 === tt[3] && 0 === tt[4] && 1 === tt[5] && 0 === tt[6] && 0 === tt[7] && 0 === tt[8] && 0 === tt[9] && 1 === tt[10] && 0 === tt[11] && 0 === tt[12] && 0 === tt[13] && 0 === tt[14] && 1 === tt[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const tt = this._m,
          et = tt[0],
          Vt = tt[1],
          Ot = tt[2],
          qt = tt[3],
          Dt = tt[4],
          mt = tt[5],
          dt = tt[6],
          jt = tt[7],
          Ht = tt[8],
          Xt = tt[9],
          Qt = tt[10],
          lt = tt[11],
          Et = tt[12],
          ft = tt[13],
          wt = tt[14],
          yt = tt[15],
          Nt = Qt * yt - wt * lt,
          Mt = Xt * yt - ft * lt,
          bt = Xt * wt - ft * Qt,
          Jt = Ht * yt - Et * lt,
          Ct = Ht * wt - Qt * Et,
          ut = Ht * ft - Et * Xt;
        return et * +(mt * Nt - dt * Mt + jt * bt) + Vt * -(Dt * Nt - dt * Jt + jt * Ct) + Ot * +(Dt * Mt - mt * Jt + jt * ut) + qt * -(Dt * bt - mt * Ct + dt * ut)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!tt) return this._m;
        const Vt = this._m;
        for (let Ot = 0; Ot < 16; Ot++) tt[et + Ot] = Vt[Ot];
        return this
      }
      GOt() {
        return this._m
      }
      vVt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return wt.FromArrayToRef(tt, et, this)
      }
      W9() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        return wt.FromArrayToRef(et, 0, this)
      }
      set() {
        const tt = this._m;
        for (let et = 0; et < 16; et++) tt[et] = et < 0 || arguments.length <= et ? void 0 : arguments[et];
        return this.markAsUpdated(), this
      }
      S_(tt) {
        const et = this._m;
        for (let Vt = 0; Vt < 16; Vt++) et[Vt] = tt;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return wt.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(tt) {
        const et = new wt;
        return this.addToRef(tt, et), et
      }
      addToRef(tt, et) {
        const Vt = this._m,
          Ot = et._m,
          qt = tt.m;
        for (let Dt = 0; Dt < 16; Dt++) Ot[Dt] = Vt[Dt] + qt[Dt];
        return et.markAsUpdated(), et
      }
      addToSelf(tt) {
        const et = this._m,
          Vt = tt.m;
        return et[0] += Vt[0], et[1] += Vt[1], et[2] += Vt[2], et[3] += Vt[3], et[4] += Vt[4], et[5] += Vt[5], et[6] += Vt[6], et[7] += Vt[7], et[8] += Vt[8], et[9] += Vt[9], et[10] += Vt[10], et[11] += Vt[11], et[12] += Vt[12], et[13] += Vt[13], et[14] += Vt[14], et[15] += Vt[15], this.markAsUpdated(), this
      }
      addInPlace(tt) {
        const et = this._m,
          Vt = tt.m;
        for (let Ot = 0; Ot < 16; Ot++) et[Ot] += Vt[Ot];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const tt = this._m;
        for (let et = 0; et < 16; et++) tt[et] += et < 0 || arguments.length <= et ? void 0 : arguments[et];
        return this.markAsUpdated(), this
      }
      subtract(tt) {
        const et = this._m,
          Vt = tt.m;
        for (let Ot = 0; Ot < 16; Ot++) et[Ot] -= Vt[Ot];
        return this.markAsUpdated(), this
      }
      subtractToRef(tt, et) {
        const Vt = this._m,
          Ot = tt.m,
          qt = et._m;
        for (let Dt = 0; Dt < 16; Dt++) qt[Dt] = Vt[Dt] - Ot[Dt];
        return et.markAsUpdated(), et
      }
      qqt(tt) {
        const et = this._m,
          Vt = tt.m;
        for (let Ot = 0; Ot < 16; Ot++) et[Ot] -= Vt[Ot];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        return this.subtractFromFloatsToRef(...et, new wt)
      }
      subtractFromFloatsToRef() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        const Ot = et.pop(),
          qt = this._m,
          Dt = Ot._m,
          mt = et;
        for (let dt = 0; dt < 16; dt++) Dt[dt] = qt[dt] - mt[dt];
        return Ot.markAsUpdated(), Ot
      }
      invertToRef(tt) {
        return !0 === this._isIdentity ? (wt.IdentityToRef(tt), tt) : ((0, jt.f)(this, tt.GOt()) ? tt.markAsUpdated() : tt.rK(this), tt)
      }
      addAtIndex(tt, et) {
        return this._m[tt] += et, this.markAsUpdated(), this
      }
      multiplyAtIndex(tt, et) {
        return this._m[tt] *= et, this.markAsUpdated(), this
      }
      setTranslationFromFloats(tt, et, Vt) {
        return this._m[12] = tt, this._m[13] = et, this._m[14] = Vt, this.markAsUpdated(), this
      }
      addTranslationFromFloats(tt, et, Vt) {
        return this._m[12] += tt, this._m[13] += et, this._m[14] += Vt, this.markAsUpdated(), this
      }
      setTranslation(tt) {
        return this.setTranslationFromFloats(tt._x, tt._y, tt._z)
      }
      getTranslation() {
        return new lt(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(tt) {
        return tt.x = this._m[12], tt.y = this._m[13], tt.z = this._m[14], tt
      }
      removeRotationAndScaling() {
        const tt = this.m;
        return wt.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tt[12], tt[13], tt[14], tt[15], this), this._updateIdentityStatus(0 === tt[12] && 0 === tt[13] && 0 === tt[14] && 1 === tt[15]), this
      }
      rK(tt) {
        tt.copyToArray(this._m);
        const et = tt;
        return this.updateFlag = et.updateFlag, this._updateIdentityStatus(et._isIdentity, et._isIdentityDirty, et._isIdentity3x2, et._isIdentity3x2Dirty), this
      }
      copyToArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, jt.c)(this, tt, et), this
      }
      multiply(tt) {
        const et = new wt;
        return this.multiplyToRef(tt, et), et
      }
      multiplyInPlace(tt) {
        const et = this._m,
          Vt = tt.m;
        for (let Ot = 0; Ot < 16; Ot++) et[Ot] *= Vt[Ot];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const tt = this._m;
        for (let et = 0; et < 16; et++) tt[et] *= et < 0 || arguments.length <= et ? void 0 : arguments[et];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        const Ot = et.pop(),
          qt = this._m,
          Dt = Ot._m,
          mt = et;
        for (let dt = 0; dt < 16; dt++) Dt[dt] = qt[dt] * mt[dt];
        return Ot.markAsUpdated(), Ot
      }
      multiplyToRef(tt, et) {
        return this._isIdentity ? (et.rK(tt), et) : tt._isIdentity ? (et.rK(this), et) : (this.multiplyToArray(tt, et._m, 0), et.markAsUpdated(), et)
      }
      multiplyToArray(tt, et, Vt) {
        return (0, jt.q)(this, tt, et, Vt), this
      }
      divide(tt) {
        return this.divideToRef(tt, new wt)
      }
      divideToRef(tt, et) {
        const Vt = this._m,
          Ot = tt.m,
          qt = et._m;
        for (let Dt = 0; Dt < 16; Dt++) qt[Dt] = Vt[Dt] / Ot[Dt];
        return et.markAsUpdated(), et
      }
      divideInPlace(tt) {
        const et = this._m,
          Vt = tt.m;
        for (let Ot = 0; Ot < 16; Ot++) et[Ot] /= Vt[Ot];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(tt) {
        const et = this._m,
          Vt = tt.m;
        for (let Ot = 0; Ot < 16; Ot++) et[Ot] = Math.min(et[Ot], Vt[Ot]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const tt = this._m;
        for (let et = 0; et < 16; et++) tt[et] = Math.min(tt[et], et < 0 || arguments.length <= et ? void 0 : arguments[et]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(tt) {
        const et = this._m,
          Vt = tt.m;
        for (let Ot = 0; Ot < 16; Ot++) et[Ot] = Math.max(et[Ot], Vt[Ot]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const tt = this._m;
        for (let et = 0; et < 16; et++) tt[et] = Math.max(tt[et], et < 0 || arguments.length <= et ? void 0 : arguments[et]);
        return this.markAsUpdated(), this
      }
      gq() {
        return this.negateToRef(new wt)
      }
      negateInPlace() {
        const tt = this._m;
        for (let et = 0; et < 16; et++) tt[et] = -tt[et];
        return this.markAsUpdated(), this
      }
      negateToRef(tt) {
        const et = this._m,
          Vt = tt._m;
        for (let Ot = 0; Ot < 16; Ot++) Vt[Ot] = -et[Ot];
        return tt.markAsUpdated(), tt
      }
      equals(tt) {
        const et = tt;
        if (!et) return !1;
        if ((this._isIdentity || et._isIdentity) && !this._isIdentityDirty && !et._isIdentityDirty) return this._isIdentity && et._isIdentity;
        const Vt = this.m,
          Ot = et.m;
        return Vt[0] === Ot[0] && Vt[1] === Ot[1] && Vt[2] === Ot[2] && Vt[3] === Ot[3] && Vt[4] === Ot[4] && Vt[5] === Ot[5] && Vt[6] === Ot[6] && Vt[7] === Ot[7] && Vt[8] === Ot[8] && Vt[9] === Ot[9] && Vt[10] === Ot[10] && Vt[11] === Ot[11] && Vt[12] === Ot[12] && Vt[13] === Ot[13] && Vt[14] === Ot[14] && Vt[15] === Ot[15]
      }
      equalsWithEpsilon(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = this._m,
          Ot = tt.m;
        for (let qt = 0; qt < 16; qt++)
          if (!(0, dt.WithinEpsilon)(Vt[qt], Ot[qt], et)) return !1;
        return !0
      }
      adt() {
        const tt = this._m;
        for (let et = 0; et < 16; et++)
          if (tt[et] != (et < 0 || arguments.length <= et ? void 0 : arguments[et])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new wt)
      }
      floorToRef(tt) {
        const et = this._m,
          Vt = tt._m;
        for (let Ot = 0; Ot < 16; Ot++) Vt[Ot] = Math.floor(et[Ot]);
        return tt.markAsUpdated(), tt
      }
      fract() {
        return this.fractToRef(new wt)
      }
      fractToRef(tt) {
        const et = this._m,
          Vt = tt._m;
        for (let Ot = 0; Ot < 16; Ot++) Vt[Ot] = et[Ot] - Math.floor(et[Ot]);
        return tt.markAsUpdated(), tt
      }
      clone() {
        const tt = new wt;
        return tt.rK(this), tt
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let tt = Xt(this._m[0]);
        for (let et = 1; et < 16; et++) tt = 397 * tt ^ Xt(this._m[et]);
        return tt
      }
      decomposeToTransformNode(tt) {
        return tt.rotationQuaternion = tt.rotationQuaternion || new ft, this.decompose(tt.cj, tt.rotationQuaternion, tt.position)
      }
      decompose(tt, et, Vt, Ot) {
        let qt = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return Vt && Vt.S_(0), tt && tt.S_(1), et && et.W9(0, 0, 0, 1), !0;
        const Dt = this._m;
        if (Vt && Vt.W9(Dt[12], Dt[13], Dt[14]), (tt = tt || yt.uf[0]).x = Math.sqrt(Dt[0] * Dt[0] + Dt[1] * Dt[1] + Dt[2] * Dt[2]), tt.y = Math.sqrt(Dt[4] * Dt[4] + Dt[5] * Dt[5] + Dt[6] * Dt[6]), tt.z = Math.sqrt(Dt[8] * Dt[8] + Dt[9] * Dt[9] + Dt[10] * Dt[10]), Ot) {
          const et = (qt ? Ot.absoluteScaling.x : Ot.cj.x) < 0 ? -1 : 1,
            Vt = (qt ? Ot.absoluteScaling.y : Ot.cj.y) < 0 ? -1 : 1,
            Dt = (qt ? Ot.absoluteScaling.z : Ot.cj.z) < 0 ? -1 : 1;
          tt.x *= et, tt.y *= Vt, tt.z *= Dt
        } else this.determinant() <= 0 && (tt.y *= -1);
        if (0 === tt._x || 0 === tt._y || 0 === tt._z) return et && et.W9(0, 0, 0, 1), !1;
        if (et) {
          const Vt = 1 / tt._x,
            Ot = 1 / tt._y,
            qt = 1 / tt._z;
          wt.FromValuesToRef(Dt[0] * Vt, Dt[1] * Vt, Dt[2] * Vt, 0, Dt[4] * Ot, Dt[5] * Ot, Dt[6] * Ot, 0, Dt[8] * qt, Dt[9] * qt, Dt[10] * qt, 0, 0, 0, 0, 1, yt.Matrix[0]), ft.FromRotationMatrixToRef(yt.Matrix[0], et)
        }
        return !0
      }
      getRow(tt) {
        if (tt < 0 || tt > 3) return null;
        const et = 4 * tt;
        return new Et(this._m[et + 0], this._m[et + 1], this._m[et + 2], this._m[et + 3])
      }
      getRowToRef(tt, et) {
        if (tt >= 0 && tt <= 3) {
          const Vt = 4 * tt;
          et.x = this._m[Vt + 0], et.y = this._m[Vt + 1], et.z = this._m[Vt + 2], et.w = this._m[Vt + 3]
        }
        return et
      }
      setRow(tt, et) {
        return this.setRowFromFloats(tt, et.x, et.y, et.z, et.w)
      }
      transpose() {
        const tt = new wt;
        return wt.TransposeToRef(this, tt), tt
      }
      transposeToRef(tt) {
        return wt.TransposeToRef(this, tt), tt
      }
      setRowFromFloats(tt, et, Vt, Ot, qt) {
        if (tt < 0 || tt > 3) return this;
        const Dt = 4 * tt;
        return this._m[Dt + 0] = et, this._m[Dt + 1] = Vt, this._m[Dt + 2] = Ot, this._m[Dt + 3] = qt, this.markAsUpdated(), this
      }
      scale(tt) {
        const et = new wt;
        return this.scaleToRef(tt, et), et
      }
      scaleToRef(tt, et) {
        for (let Vt = 0; Vt < 16; Vt++) et._m[Vt] = this._m[Vt] * tt;
        return et.markAsUpdated(), et
      }
      scaleAndAddToRef(tt, et) {
        for (let Vt = 0; Vt < 16; Vt++) et._m[Vt] += this._m[Vt] * tt;
        return et.markAsUpdated(), et
      }
      scaleInPlace(tt) {
        const et = this._m;
        for (let Vt = 0; Vt < 16; Vt++) et[Vt] *= tt;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(tt) {
        const et = yt.Matrix[0];
        this.invertToRef(et), et.transposeToRef(tt);
        const Vt = tt._m;
        return wt.FromValuesToRef(Vt[0], Vt[1], Vt[2], 0, Vt[4], Vt[5], Vt[6], 0, Vt[8], Vt[9], Vt[10], 0, 0, 0, 0, 1, tt), tt
      }
      getRotationMatrix() {
        const tt = new wt;
        return this.getRotationMatrixToRef(tt), tt
      }
      getRotationMatrixToRef(tt) {
        const et = yt.uf[0];
        if (!this.decompose(et)) return wt.IdentityToRef(tt), tt;
        const Vt = this._m,
          Ot = 1 / et._x,
          qt = 1 / et._y,
          Dt = 1 / et._z;
        return wt.FromValuesToRef(Vt[0] * Ot, Vt[1] * Ot, Vt[2] * Ot, 0, Vt[4] * qt, Vt[5] * qt, Vt[6] * qt, 0, Vt[8] * Dt, Vt[9] * Dt, Vt[10] * Dt, 0, 0, 0, 0, 1, tt), tt
      }
      toggleModelMatrixHandInPlace() {
        const tt = this._m;
        return tt[2] *= -1, tt[6] *= -1, tt[8] *= -1, tt[9] *= -1, tt[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const tt = this._m;
        return tt[8] *= -1, tt[9] *= -1, tt[10] *= -1, tt[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(Mt, this), this
      }
      static FromArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Vt = new wt;
        return wt.FromArrayToRef(tt, et, Vt), Vt
      }
      static FromArrayToRef(tt, et, Vt) {
        for (let Ot = 0; Ot < 16; Ot++) Vt._m[Ot] = tt[Ot + et];
        return Vt.markAsUpdated(), Vt
      }
      static FromFloat32ArrayToRefScaled(tt, et, Vt, Ot) {
        return Ot._m[0] = tt[0 + et] * Vt, Ot._m[1] = tt[1 + et] * Vt, Ot._m[2] = tt[2 + et] * Vt, Ot._m[3] = tt[3 + et] * Vt, Ot._m[4] = tt[4 + et] * Vt, Ot._m[5] = tt[5 + et] * Vt, Ot._m[6] = tt[6 + et] * Vt, Ot._m[7] = tt[7 + et] * Vt, Ot._m[8] = tt[8 + et] * Vt, Ot._m[9] = tt[9 + et] * Vt, Ot._m[10] = tt[10 + et] * Vt, Ot._m[11] = tt[11 + et] * Vt, Ot._m[12] = tt[12 + et] * Vt, Ot._m[13] = tt[13 + et] * Vt, Ot._m[14] = tt[14 + et] * Vt, Ot._m[15] = tt[15 + et] * Vt, Ot.markAsUpdated(), Ot
      }
      static get IdentityReadOnly() {
        return wt._IdentityReadOnly
      }
      static FromValuesToRef(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt) {
        const Nt = yt._m;
        Nt[0] = tt, Nt[1] = et, Nt[2] = Vt, Nt[3] = Ot, Nt[4] = qt, Nt[5] = Dt, Nt[6] = mt, Nt[7] = dt, Nt[8] = jt, Nt[9] = Ht, Nt[10] = Xt, Nt[11] = Qt, Nt[12] = lt, Nt[13] = Et, Nt[14] = ft, Nt[15] = wt, yt.markAsUpdated()
      }
      static FromValues(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt, Et, ft, yt) {
        const Nt = new wt,
          Mt = Nt._m;
        return Mt[0] = tt, Mt[1] = et, Mt[2] = Vt, Mt[3] = Ot, Mt[4] = qt, Mt[5] = Dt, Mt[6] = mt, Mt[7] = dt, Mt[8] = jt, Mt[9] = Ht, Mt[10] = Xt, Mt[11] = Qt, Mt[12] = lt, Mt[13] = Et, Mt[14] = ft, Mt[15] = yt, Nt.markAsUpdated(), Nt
      }
      static Compose(tt, et, Vt) {
        const Ot = new wt;
        return wt.ComposeToRef(tt, et, Vt, Ot), Ot
      }
      static ComposeToRef(tt, et, Vt, Ot) {
        const qt = Ot._m,
          Dt = et._x,
          mt = et._y,
          dt = et._z,
          jt = et._w,
          Ht = Dt + Dt,
          Xt = mt + mt,
          Qt = dt + dt,
          lt = Dt * Ht,
          Et = Dt * Xt,
          ft = Dt * Qt,
          wt = mt * Xt,
          yt = mt * Qt,
          Nt = dt * Qt,
          Mt = jt * Ht,
          bt = jt * Xt,
          Jt = jt * Qt,
          Ct = tt._x,
          ut = tt._y,
          Kt = tt._z;
        return qt[0] = (1 - (wt + Nt)) * Ct, qt[1] = (Et + Jt) * Ct, qt[2] = (ft - bt) * Ct, qt[3] = 0, qt[4] = (Et - Jt) * ut, qt[5] = (1 - (lt + Nt)) * ut, qt[6] = (yt + Mt) * ut, qt[7] = 0, qt[8] = (ft + bt) * Kt, qt[9] = (yt - Mt) * Kt, qt[10] = (1 - (lt + wt)) * Kt, qt[11] = 0, qt[12] = Vt._x, qt[13] = Vt._y, qt[14] = Vt._z, qt[15] = 1, Ot.markAsUpdated(), Ot
      }
      static Identity() {
        const tt = wt.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return tt._updateIdentityStatus(!0), tt
      }
      static IdentityToRef(tt) {
        return wt.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, tt), tt._updateIdentityStatus(!0), tt
      }
      static Zero() {
        const tt = wt.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return tt._updateIdentityStatus(!1), tt
      }
      static RotationX(tt) {
        const et = new wt;
        return wt.RotationXToRef(tt, et), et
      }
      static Invert(tt) {
        const et = new wt;
        return tt.invertToRef(et), et
      }
      static RotationXToRef(tt, et) {
        const Vt = Math.sin(tt),
          Ot = Math.cos(tt);
        return wt.FromValuesToRef(1, 0, 0, 0, 0, Ot, Vt, 0, 0, -Vt, Ot, 0, 0, 0, 0, 1, et), et._updateIdentityStatus(1 === Ot && 0 === Vt), et
      }
      static RotationY(tt) {
        const et = new wt;
        return wt.RotationYToRef(tt, et), et
      }
      static RotationYToRef(tt, et) {
        const Vt = Math.sin(tt),
          Ot = Math.cos(tt);
        return wt.FromValuesToRef(Ot, 0, -Vt, 0, 0, 1, 0, 0, Vt, 0, Ot, 0, 0, 0, 0, 1, et), et._updateIdentityStatus(1 === Ot && 0 === Vt), et
      }
      static RotationZ(tt) {
        const et = new wt;
        return wt.RotationZToRef(tt, et), et
      }
      static RotationZToRef(tt, et) {
        const Vt = Math.sin(tt),
          Ot = Math.cos(tt);
        return wt.FromValuesToRef(Ot, Vt, 0, 0, -Vt, Ot, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, et), et._updateIdentityStatus(1 === Ot && 0 === Vt), et
      }
      static RotationAxis(tt, et) {
        const Vt = new wt;
        return wt.RotationAxisToRef(tt, et, Vt), Vt
      }
      static RotationAxisToRef(tt, et, Vt) {
        const Ot = Math.sin(-et),
          qt = Math.cos(-et),
          Dt = 1 - qt;
        tt = tt.normalizeToRef(yt.uf[0]);
        const mt = Vt._m;
        return mt[0] = tt._x * tt._x * Dt + qt, mt[1] = tt._x * tt._y * Dt - tt._z * Ot, mt[2] = tt._x * tt._z * Dt + tt._y * Ot, mt[3] = 0, mt[4] = tt._y * tt._x * Dt + tt._z * Ot, mt[5] = tt._y * tt._y * Dt + qt, mt[6] = tt._y * tt._z * Dt - tt._x * Ot, mt[7] = 0, mt[8] = tt._z * tt._x * Dt - tt._y * Ot, mt[9] = tt._z * tt._y * Dt + tt._x * Ot, mt[10] = tt._z * tt._z * Dt + qt, mt[11] = 0, mt[12] = 0, mt[13] = 0, mt[14] = 0, mt[15] = 1, Vt.markAsUpdated(), Vt
      }
      static RotationAlignToRef(tt, et, Vt) {
        let qt = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Dt = lt.Dot(et, tt),
          mt = Vt._m;
        if (Dt < -1 + Ot.e) mt[0] = -1, mt[1] = 0, mt[2] = 0, mt[3] = 0, mt[4] = 0, mt[5] = qt ? 1 : -1, mt[6] = 0, mt[7] = 0, mt[8] = 0, mt[9] = 0, mt[10] = qt ? -1 : 1, mt[11] = 0;
        else {
          const Vt = lt.Cross(et, tt),
            Ot = 1 / (1 + Dt);
          mt[0] = Vt._x * Vt._x * Ot + Dt, mt[1] = Vt._y * Vt._x * Ot - Vt._z, mt[2] = Vt._z * Vt._x * Ot + Vt._y, mt[3] = 0, mt[4] = Vt._x * Vt._y * Ot + Vt._z, mt[5] = Vt._y * Vt._y * Ot + Dt, mt[6] = Vt._z * Vt._y * Ot - Vt._x, mt[7] = 0, mt[8] = Vt._x * Vt._z * Ot - Vt._y, mt[9] = Vt._y * Vt._z * Ot + Vt._x, mt[10] = Vt._z * Vt._z * Ot + Dt, mt[11] = 0
        }
        return mt[12] = 0, mt[13] = 0, mt[14] = 0, mt[15] = 1, Vt.markAsUpdated(), Vt
      }
      static RotationYawPitchRoll(tt, et, Vt) {
        const Ot = new wt;
        return wt.RotationYawPitchRollToRef(tt, et, Vt, Ot), Ot
      }
      static RotationYawPitchRollToRef(tt, et, Vt, Ot) {
        return ft.RotationYawPitchRollToRef(tt, et, Vt, yt.Quaternion[0]), yt.Quaternion[0].toRotationMatrix(Ot), Ot
      }
      static Scaling(tt, et, Vt) {
        const Ot = new wt;
        return wt.ScalingToRef(tt, et, Vt, Ot), Ot
      }
      static ScalingToRef(tt, et, Vt, Ot) {
        return wt.FromValuesToRef(tt, 0, 0, 0, 0, et, 0, 0, 0, 0, Vt, 0, 0, 0, 0, 1, Ot), Ot._updateIdentityStatus(1 === tt && 1 === et && 1 === Vt), Ot
      }
      static Translation(tt, et, Vt) {
        const Ot = new wt;
        return wt.TranslationToRef(tt, et, Vt, Ot), Ot
      }
      static TranslationToRef(tt, et, Vt, Ot) {
        return wt.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, tt, et, Vt, 1, Ot), Ot._updateIdentityStatus(0 === tt && 0 === et && 0 === Vt), Ot
      }
      static Lerp(tt, et, Vt) {
        const Ot = new wt;
        return wt.LerpToRef(tt, et, Vt, Ot), Ot
      }
      static LerpToRef(tt, et, Vt, Ot) {
        const qt = Ot._m,
          Dt = tt.m,
          mt = et.m;
        for (let dt = 0; dt < 16; dt++) qt[dt] = Dt[dt] * (1 - Vt) + mt[dt] * Vt;
        return Ot.markAsUpdated(), Ot
      }
      static DecomposeLerp(tt, et, Vt) {
        const Ot = new wt;
        return wt.DecomposeLerpToRef(tt, et, Vt, Ot), Ot
      }
      static DecomposeLerpToRef(tt, et, Vt, Ot) {
        const qt = yt.uf[0],
          Dt = yt.Quaternion[0],
          mt = yt.uf[1];
        tt.decompose(qt, Dt, mt);
        const dt = yt.uf[2],
          jt = yt.Quaternion[1],
          Ht = yt.uf[3];
        et.decompose(dt, jt, Ht);
        const Xt = yt.uf[4];
        lt.LerpToRef(qt, dt, Vt, Xt);
        const Qt = yt.Quaternion[2];
        ft.SlerpToRef(Dt, jt, Vt, Qt);
        const Et = yt.uf[5];
        return lt.LerpToRef(mt, Ht, Vt, Et), wt.ComposeToRef(Xt, Qt, Et, Ot), Ot
      }
      static LookAtLH(tt, et, Vt) {
        const Ot = new wt;
        return wt.LookAtLHToRef(tt, et, Vt, Ot), Ot
      }
      static LookAtLHToRef(tt, et, Vt, Ot) {
        const qt = yt.uf[0],
          Dt = yt.uf[1],
          mt = yt.uf[2];
        et.subtractToRef(tt, mt), mt.normalize(), lt.CrossToRef(Vt, mt, qt);
        const dt = qt.lengthSquared();
        0 === dt ? qt.x = 1 : qt.normalizeFromLength(Math.sqrt(dt)), lt.CrossToRef(mt, qt, Dt), Dt.normalize();
        const jt = -lt.Dot(qt, tt),
          Ht = -lt.Dot(Dt, tt),
          Xt = -lt.Dot(mt, tt);
        return wt.FromValuesToRef(qt._x, Dt._x, mt._x, 0, qt._y, Dt._y, mt._y, 0, qt._z, Dt._z, mt._z, 0, jt, Ht, Xt, 1, Ot), Ot
      }
      static LookAtRH(tt, et, Vt) {
        const Ot = new wt;
        return wt.LookAtRHToRef(tt, et, Vt, Ot), Ot
      }
      static LookAtRHToRef(tt, et, Vt, Ot) {
        const qt = yt.uf[0],
          Dt = yt.uf[1],
          mt = yt.uf[2];
        tt.subtractToRef(et, mt), mt.normalize(), lt.CrossToRef(Vt, mt, qt);
        const dt = qt.lengthSquared();
        0 === dt ? qt.x = 1 : qt.normalizeFromLength(Math.sqrt(dt)), lt.CrossToRef(mt, qt, Dt), Dt.normalize();
        const jt = -lt.Dot(qt, tt),
          Ht = -lt.Dot(Dt, tt),
          Xt = -lt.Dot(mt, tt);
        return wt.FromValuesToRef(qt._x, Dt._x, mt._x, 0, qt._y, Dt._y, mt._y, 0, qt._z, Dt._z, mt._z, 0, jt, Ht, Xt, 1, Ot), Ot
      }
      static LookDirectionLH(tt, et) {
        const Vt = new wt;
        return wt.LookDirectionLHToRef(tt, et, Vt), Vt
      }
      static LookDirectionLHToRef(tt, et, Vt) {
        const Ot = yt.uf[0];
        Ot.rK(tt), Ot.scaleInPlace(-1);
        const qt = yt.uf[1];
        return lt.CrossToRef(et, Ot, qt), wt.FromValuesToRef(qt._x, qt._y, qt._z, 0, et._x, et._y, et._z, 0, Ot._x, Ot._y, Ot._z, 0, 0, 0, 0, 1, Vt), Vt
      }
      static LookDirectionRH(tt, et) {
        const Vt = new wt;
        return wt.LookDirectionRHToRef(tt, et, Vt), Vt
      }
      static LookDirectionRHToRef(tt, et, Vt) {
        const Ot = yt.uf[2];
        return lt.CrossToRef(et, tt, Ot), wt.FromValuesToRef(Ot._x, Ot._y, Ot._z, 0, et._x, et._y, et._z, 0, tt._x, tt._y, tt._z, 0, 0, 0, 0, 1, Vt), Vt
      }
      static OrthoLH(tt, et, Vt, Ot, qt) {
        const Dt = new wt;
        return wt.OrthoLHToRef(tt, et, Vt, Ot, Dt, qt), Dt
      }
      static OrthoLHToRef(tt, et, Vt, Ot, qt, Dt) {
        const mt = 2 / tt,
          dt = 2 / et,
          jt = 2 / (Ot - Vt),
          Ht = -(Ot + Vt) / (Ot - Vt);
        return wt.FromValuesToRef(mt, 0, 0, 0, 0, dt, 0, 0, 0, 0, jt, 0, 0, 0, Ht, 1, qt), Dt && qt.multiplyToRef(Mt, qt), qt._updateIdentityStatus(1 === mt && 1 === dt && 1 === jt && 0 === Ht), qt
      }
      static OrthoOffCenterLH(tt, et, Vt, Ot, qt, Dt, mt) {
        const dt = new wt;
        return wt.OrthoOffCenterLHToRef(tt, et, Vt, Ot, qt, Dt, dt, mt), dt
      }
      static OrthoOffCenterLHToRef(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        const jt = 2 / (et - tt),
          Ht = 2 / (Ot - Vt),
          Xt = 2 / (Dt - qt),
          Qt = -(Dt + qt) / (Dt - qt),
          lt = (tt + et) / (tt - et),
          Et = (Ot + Vt) / (Vt - Ot);
        return wt.FromValuesToRef(jt, 0, 0, 0, 0, Ht, 0, 0, 0, 0, Xt, 0, lt, Et, Qt, 1, mt), dt && mt.multiplyToRef(Mt, mt), mt.markAsUpdated(), mt
      }
      static ObliqueOffCenterLHToRef(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
        const Qt = -mt * Math.cos(dt),
          lt = -mt * Math.sin(dt);
        return wt.TranslationToRef(0, 0, -jt, yt.Matrix[1]), wt.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Qt, lt, 1, 0, 0, 0, 0, 1, yt.Matrix[0]), yt.Matrix[1].multiplyToRef(yt.Matrix[0], yt.Matrix[0]), wt.TranslationToRef(0, 0, jt, yt.Matrix[1]), yt.Matrix[0].multiplyToRef(yt.Matrix[1], yt.Matrix[0]), wt.OrthoOffCenterLHToRef(tt, et, Vt, Ot, qt, Dt, Ht, Xt), yt.Matrix[0].multiplyToRef(Ht, Ht), Ht
      }
      static OrthoOffCenterRH(tt, et, Vt, Ot, qt, Dt, mt) {
        const dt = new wt;
        return wt.OrthoOffCenterRHToRef(tt, et, Vt, Ot, qt, Dt, dt, mt), dt
      }
      static OrthoOffCenterRHToRef(tt, et, Vt, Ot, qt, Dt, mt, dt) {
        return wt.OrthoOffCenterLHToRef(tt, et, Vt, Ot, qt, Dt, mt, dt), mt._m[10] *= -1, mt
      }
      static ObliqueOffCenterRHToRef(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
        const Qt = mt * Math.cos(dt),
          lt = mt * Math.sin(dt);
        return wt.TranslationToRef(0, 0, jt, yt.Matrix[1]), wt.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Qt, lt, 1, 0, 0, 0, 0, 1, yt.Matrix[0]), yt.Matrix[1].multiplyToRef(yt.Matrix[0], yt.Matrix[0]), wt.TranslationToRef(0, 0, -jt, yt.Matrix[1]), yt.Matrix[0].multiplyToRef(yt.Matrix[1], yt.Matrix[0]), wt.OrthoOffCenterRHToRef(tt, et, Vt, Ot, qt, Dt, Ht, Xt), yt.Matrix[0].multiplyToRef(Ht, Ht), Ht
      }
      static PerspectiveLH(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const mt = new wt,
          dt = 2 * Vt / tt,
          jt = 2 * Vt / et,
          Ht = (Ot + Vt) / (Ot - Vt),
          Xt = -2 * Ot * Vt / (Ot - Vt),
          Qt = Math.tan(Dt);
        return wt.FromValuesToRef(dt, 0, 0, 0, 0, jt, 0, Qt, 0, 0, Ht, 1, 0, 0, Xt, 0, mt), qt && mt.multiplyToRef(Mt, mt), mt._updateIdentityStatus(!1), mt
      }
      static PerspectiveFovLH(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const dt = new wt;
        return wt.PerspectiveFovLHToRef(tt, et, Vt, Ot, dt, !0, qt, Dt, mt), dt
      }
      static PerspectiveFovLHToRef(tt, et, Vt, Ot, qt) {
        let Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Ht = Vt,
          Xt = Ot,
          Qt = 1 / Math.tan(.5 * tt),
          lt = Dt ? Qt / et : Qt,
          Et = Dt ? Qt : Qt * et,
          ft = jt && 0 === Ht ? -1 : 0 !== Xt ? (Xt + Ht) / (Xt - Ht) : 1,
          yt = jt && 0 === Ht ? 2 * Xt : 0 !== Xt ? -2 * Xt * Ht / (Xt - Ht) : -2 * Ht,
          Nt = Math.tan(dt);
        return wt.FromValuesToRef(lt, 0, 0, 0, 0, Et, 0, Nt, 0, 0, ft, 1, 0, 0, yt, 0, qt), mt && qt.multiplyToRef(Mt, qt), qt._updateIdentityStatus(!1), qt
      }
      static PerspectiveFovReverseLHToRef(tt, et, Vt, Ot, qt) {
        let Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const jt = 1 / Math.tan(.5 * tt),
          Ht = Dt ? jt / et : jt,
          Xt = Dt ? jt : jt * et,
          Qt = Math.tan(dt);
        return wt.FromValuesToRef(Ht, 0, 0, 0, 0, Xt, 0, Qt, 0, 0, -Vt, 1, 0, 0, 1, 0, qt), mt && qt.multiplyToRef(Mt, qt), qt._updateIdentityStatus(!1), qt
      }
      static PerspectiveFovRH(tt, et, Vt, Ot, qt) {
        let Dt = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mt = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const dt = new wt;
        return wt.PerspectiveFovRHToRef(tt, et, Vt, Ot, dt, !0, qt, Dt, mt), dt
      }
      static PerspectiveFovRHToRef(tt, et, Vt, Ot, qt) {
        let Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          jt = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Ht = Vt,
          Xt = Ot,
          Qt = 1 / Math.tan(.5 * tt),
          lt = Dt ? Qt / et : Qt,
          Et = Dt ? Qt : Qt * et,
          ft = jt && 0 === Ht ? 1 : 0 !== Xt ? -(Xt + Ht) / (Xt - Ht) : -1,
          yt = jt && 0 === Ht ? 2 * Xt : 0 !== Xt ? -2 * Xt * Ht / (Xt - Ht) : -2 * Ht,
          Nt = Math.tan(dt);
        return wt.FromValuesToRef(lt, 0, 0, 0, 0, Et, 0, Nt, 0, 0, ft, -1, 0, 0, yt, 0, qt), mt && qt.multiplyToRef(Mt, qt), qt._updateIdentityStatus(!1), qt
      }
      static PerspectiveFovReverseRHToRef(tt, et, Vt, Ot, qt) {
        let Dt = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mt = arguments.length > 6 ? arguments[6] : void 0,
          dt = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const jt = 1 / Math.tan(.5 * tt),
          Ht = Dt ? jt / et : jt,
          Xt = Dt ? jt : jt * et,
          Qt = Math.tan(dt);
        return wt.FromValuesToRef(Ht, 0, 0, 0, 0, Xt, 0, Qt, 0, 0, -Vt, -1, 0, 0, -1, 0, qt), mt && qt.multiplyToRef(Mt, qt), qt._updateIdentityStatus(!1), qt
      }
      static GetFinalMatrix(tt, et, Vt, Ot, qt, Dt) {
        const mt = tt.width,
          dt = tt.height,
          jt = tt.x,
          Ht = tt.y,
          Xt = wt.FromValues(mt / 2, 0, 0, 0, 0, -dt / 2, 0, 0, 0, 0, Dt - qt, 0, jt + mt / 2, dt / 2 + Ht, qt, 1),
          Qt = new wt;
        return et.multiplyToRef(Vt, Qt), Qt.multiplyToRef(Ot, Qt), Qt.multiplyToRef(Xt, Qt)
      }
      static GetAsMatrix2x2(tt) {
        const et = tt.m,
          Vt = [et[0], et[1], et[4], et[5]];
        return Dt.b.MatrixUse64Bits ? Vt : new Float32Array(Vt)
      }
      static GetAsMatrix3x3(tt) {
        const et = tt.m,
          Vt = [et[0], et[1], et[2], et[4], et[5], et[6], et[8], et[9], et[10]];
        return Dt.b.MatrixUse64Bits ? Vt : new Float32Array(Vt)
      }
      static Transpose(tt) {
        const et = new wt;
        return wt.TransposeToRef(tt, et), et
      }
      static TransposeToRef(tt, et) {
        const Vt = tt.m,
          Ot = Vt[0],
          qt = Vt[4],
          Dt = Vt[8],
          mt = Vt[12],
          dt = Vt[1],
          jt = Vt[5],
          Ht = Vt[9],
          Xt = Vt[13],
          Qt = Vt[2],
          lt = Vt[6],
          Et = Vt[10],
          ft = Vt[14],
          wt = Vt[3],
          yt = Vt[7],
          Nt = Vt[11],
          Mt = Vt[15],
          bt = et._m;
        return bt[0] = Ot, bt[1] = qt, bt[2] = Dt, bt[3] = mt, bt[4] = dt, bt[5] = jt, bt[6] = Ht, bt[7] = Xt, bt[8] = Qt, bt[9] = lt, bt[10] = Et, bt[11] = ft, bt[12] = wt, bt[13] = yt, bt[14] = Nt, bt[15] = Mt, et.markAsUpdated(), et._updateIdentityStatus(tt._isIdentity, tt._isIdentityDirty), et
      }
      static Reflection(tt) {
        const et = new wt;
        return wt.ReflectionToRef(tt, et), et
      }
      static ReflectionToRef(tt, et) {
        tt.normalize();
        const Vt = tt.normal.x,
          Ot = tt.normal.y,
          qt = tt.normal.z,
          Dt = -2 * Vt,
          mt = -2 * Ot,
          dt = -2 * qt;
        return wt.FromValuesToRef(Dt * Vt + 1, mt * Vt, dt * Vt, 0, Dt * Ot, mt * Ot + 1, dt * Ot, 0, Dt * qt, mt * qt, dt * qt + 1, 0, Dt * tt.d, mt * tt.d, dt * tt.d, 1, et), et
      }
      static FromXYZAxesToRef(tt, et, Vt, Ot) {
        return wt.FromValuesToRef(tt._x, tt._y, tt._z, 0, et._x, et._y, et._z, 0, Vt._x, Vt._y, Vt._z, 0, 0, 0, 0, 1, Ot), Ot
      }
      static FromQuaternionToRef(tt, et) {
        const Vt = tt._x * tt._x,
          Ot = tt._y * tt._y,
          qt = tt._z * tt._z,
          Dt = tt._x * tt._y,
          mt = tt._z * tt._w,
          dt = tt._z * tt._x,
          jt = tt._y * tt._w,
          Ht = tt._y * tt._z,
          Xt = tt._x * tt._w;
        return et._m[0] = 1 - 2 * (Ot + qt), et._m[1] = 2 * (Dt + mt), et._m[2] = 2 * (dt - jt), et._m[3] = 0, et._m[4] = 2 * (Dt - mt), et._m[5] = 1 - 2 * (qt + Vt), et._m[6] = 2 * (Ht + Xt), et._m[7] = 0, et._m[8] = 2 * (dt + jt), et._m[9] = 2 * (Ht - Xt), et._m[10] = 1 - 2 * (Ot + Vt), et._m[11] = 0, et._m[12] = 0, et._m[13] = 0, et._m[14] = 0, et._m[15] = 1, et.markAsUpdated(), et
      }
    }
    wt._IdentityReadOnly = wt.Identity();
    class yt {}
    yt.uf = (0, qt.d)(11, lt.Zero), yt.Matrix = (0, qt.d)(2, wt.Identity), yt.Quaternion = (0, qt.d)(3, ft.Zero);
    class Nt {}
    Nt.Vector2 = (0, qt.d)(3, Qt.Zero), Nt.uf = (0, qt.d)(13, lt.Zero), Nt.Vector4 = (0, qt.d)(3, Et.Zero), Nt.Quaternion = (0, qt.d)(3, ft.Zero), Nt.Matrix = (0, qt.d)(8, wt.Identity);
    const Mt = wt.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let bt = !1;

    function Jt() {
      bt || (bt = !0, Object.defineProperties(Qt.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(lt.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Et.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ft.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(wt.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Ht.i)("BABYLON.Vector2", Qt), (0, Ht.i)("BABYLON.Vector3", lt), (0, Ht.i)("BABYLON.Vector4", Et), (0, Ht.i)("BABYLON.Matrix", wt))
    }
  },
  37367: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    const Ot = "undefined" !== typeof WeakRef;
    class qt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(tt, et, Vt, Ot)
      }
      initialize(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = tt, this.skipNextObservers = et, this.target = Vt, this.currentTarget = Ot, this
      }
    }
    class Dt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = tt, this.mask = et, this.scope = Vt, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(tt)
      }
    }
    class mt {
      static FromPromise(tt, et) {
        const Vt = new mt;
        return tt.then((tt => {
          Vt.notifyObservers(tt)
        })).catch((tt => {
          if (!et) throw tt;
          et.notifyObservers(tt)
        })), Vt
      }
      get observers() {
        return this._observers
      }
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = et, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qt(0), tt && (this._onObserverAdded = tt)
      }
      add(tt) {
        let et = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!tt) return null;
        const qt = new Dt(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        qt.unregisterOnNextCall = Vt, et ? this._observers.unshift(qt) : this._observers.push(qt), this._onObserverAdded && this._onObserverAdded(qt), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(qt, this._lastNotifiedValue);
        const mt = Ot ? new WeakRef(this) : {
          deref: () => this
        };
        return qt._remove = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const et = mt.deref();
          et && (tt ? et.remove(qt) : et._remove(qt))
        }, qt
      }
      addOnce(tt) {
        return this.add(tt, void 0, void 0, void 0, !0)
      }
      remove(tt) {
        if (!tt) return !1;
        tt._remove = null;
        return -1 !== this._observers.indexOf(tt) && (this._deferUnregister(tt), !0)
      }
      removeCallback(tt, et) {
        for (let Vt = 0; Vt < this._observers.length; Vt++) {
          const Ot = this._observers[Vt];
          if (!Ot._willBeUnregistered && (Ot.callback === tt && (!et || et === Ot.scope))) return this._deferUnregister(Ot), !0
        }
        return !1
      }
      _deferUnregister(tt) {
        tt._willBeUnregistered || (this._numObserversMarkedAsDeleted++, tt.unregisterOnNextCall = !1, tt._willBeUnregistered = !0, setTimeout((() => {
          this._remove(tt)
        }), 0))
      }
      _remove(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!tt) return !1;
        const Vt = this._observers.indexOf(tt);
        return -1 !== Vt && (et && this._numObserversMarkedAsDeleted--, this._observers.splice(Vt, 1), !0)
      }
      makeObserverTopPriority(tt) {
        this._remove(tt, !1), this._observers.unshift(tt)
      }
      makeObserverBottomPriority(tt) {
        this._remove(tt, !1), this._observers.push(tt)
      }
      notifyObservers(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = tt), !this._observers.length) return !0;
        const Dt = this._eventState;
        Dt.mask = et, Dt.target = Vt, Dt.currentTarget = Ot, Dt.skipNextObservers = !1, Dt.lastReturnValue = tt, Dt.userInfo = qt;
        for (const mt of this._observers)
          if (!mt._willBeUnregistered && (mt.mask & et && (mt.unregisterOnNextCall && this._deferUnregister(mt), mt.scope ? Dt.lastReturnValue = mt.callback.apply(mt.scope, [tt, Dt]) : Dt.lastReturnValue = mt.callback(tt, Dt)), Dt.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = et), tt._willBeUnregistered) return;
        const Ot = this._eventState;
        Ot.mask = Vt, Ot.skipNextObservers = !1, tt.unregisterOnNextCall && this._deferUnregister(tt), tt.callback(et, Ot)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const tt = this._observers.pop();
          tt && (tt._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const tt = new mt;
        return tt._observers = this._observers.slice(0), tt
      }
      hasSpecificMask() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const et of this._observers)
          if (et.mask & tt || et.mask === tt) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);