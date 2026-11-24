export const id = 231;
export const ids = [231];
export const modules = {
  37201: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(37203);
    class Am {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Am.Instances = [], Am.OnEnginesDisposedObservable = new hm.c, Am._LastCreatedScene = null, Am.UseFallbackTexture = !0, Am.FallbackTexture = ""
  },
  37199: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => hm
    });
    class hm {
      static SetMatrixPrecision(mm) {
        if (hm.MatrixTrackPrecisionChange = !1, mm && !hm.MatrixUse64Bits && hm.MatrixTrackedMatrices)
          for (let Tm = 0; Tm < hm.MatrixTrackedMatrices.length; ++Tm) {
            const mm = hm.MatrixTrackedMatrices[Tm],
              fm = mm._m;
            mm._m = new Array(16);
            for (let Tm = 0; Tm < 16; ++Tm) mm._m[Tm] = fm[Tm]
          }
        hm.MatrixUse64Bits = mm, hm.MatrixCurrentType = hm.MatrixUse64Bits ? Array : Float32Array, hm.MatrixTrackedMatrices = null
      }
    }
    hm.MatrixUse64Bits = !1, hm.MatrixTrackPrecisionChange = !0, hm.MatrixCurrentType = Float32Array, hm.MatrixTrackedMatrices = []
  },
  37217: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wm,
      h: () => im,
      j: () => Dm,
      n: () => hm,
      o: () => am,
      p: () => xm
    });
    class hm {}

    function Am(mm) {
      mm.updateFlag = hm._UpdateFlagSeed++
    }

    function am(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Am = mm.ahm(),
        am = Tm.ahm(),
        xm = Am[0],
        wm = Am[1],
        Dm = Am[2],
        im = Am[3],
        Rm = Am[4],
        pm = Am[5],
        Em = Am[6],
        om = Am[7],
        Om = Am[8],
        Ym = Am[9],
        qm = Am[10],
        jm = Am[11],
        Vm = Am[12],
        Im = Am[13],
        Km = Am[14],
        Qm = Am[15],
        nm = am[0],
        Jm = am[1],
        cm = am[2],
        zm = am[3],
        Zm = am[4],
        km = am[5],
        bm = am[6],
        Sm = am[7],
        em = am[8],
        Nm = am[9],
        Gm = am[10],
        Xm = am[11],
        Pm = am[12],
        Hm = am[13],
        ym = am[14],
        Cm = am[15];
      fm[hm] = xm * nm + wm * Zm + Dm * em + im * Pm, fm[hm + 1] = xm * Jm + wm * km + Dm * Nm + im * Hm, fm[hm + 2] = xm * cm + wm * bm + Dm * Gm + im * ym, fm[hm + 3] = xm * zm + wm * Sm + Dm * Xm + im * Cm, fm[hm + 4] = Rm * nm + pm * Zm + Em * em + om * Pm, fm[hm + 5] = Rm * Jm + pm * km + Em * Nm + om * Hm, fm[hm + 6] = Rm * cm + pm * bm + Em * Gm + om * ym, fm[hm + 7] = Rm * zm + pm * Sm + Em * Xm + om * Cm, fm[hm + 8] = Om * nm + Ym * Zm + qm * em + jm * Pm, fm[hm + 9] = Om * Jm + Ym * km + qm * Nm + jm * Hm, fm[hm + 10] = Om * cm + Ym * bm + qm * Gm + jm * ym, fm[hm + 11] = Om * zm + Ym * Sm + qm * Xm + jm * Cm, fm[hm + 12] = Vm * nm + Im * Zm + Km * em + Qm * Pm, fm[hm + 13] = Vm * Jm + Im * km + Km * Nm + Qm * Hm, fm[hm + 14] = Vm * cm + Im * bm + Km * Gm + Qm * ym, fm[hm + 15] = Vm * zm + Im * Sm + Km * Xm + Qm * Cm
    }

    function xm(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      am(mm, Tm, fm.ahm(), hm), Am(fm)
    }

    function wm(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const hm = mm.ahm();
      Tm[fm] = hm[0], Tm[fm + 1] = hm[1], Tm[fm + 2] = hm[2], Tm[fm + 3] = hm[3], Tm[fm + 4] = hm[4], Tm[fm + 5] = hm[5], Tm[fm + 6] = hm[6], Tm[fm + 7] = hm[7], Tm[fm + 8] = hm[8], Tm[fm + 9] = hm[9], Tm[fm + 10] = hm[10], Tm[fm + 11] = hm[11], Tm[fm + 12] = hm[12], Tm[fm + 13] = hm[13], Tm[fm + 14] = hm[14], Tm[fm + 15] = hm[15]
    }

    function Dm(mm, Tm) {
      const fm = im(mm, Tm.ahm());
      return fm && Am(Tm), fm
    }

    function im(mm, Tm) {
      const fm = mm.ahm(),
        hm = fm[0],
        Am = fm[1],
        am = fm[2],
        xm = fm[3],
        wm = fm[4],
        Dm = fm[5],
        im = fm[6],
        Rm = fm[7],
        pm = fm[8],
        Em = fm[9],
        om = fm[10],
        Om = fm[11],
        Ym = fm[12],
        qm = fm[13],
        jm = fm[14],
        Vm = fm[15],
        Im = om * Vm - jm * Om,
        Km = Em * Vm - qm * Om,
        Qm = Em * jm - qm * om,
        nm = pm * Vm - Ym * Om,
        Jm = pm * jm - om * Ym,
        cm = pm * qm - Ym * Em,
        zm = +(Dm * Im - im * Km + Rm * Qm),
        Zm = -(wm * Im - im * nm + Rm * Jm),
        km = +(wm * Km - Dm * nm + Rm * cm),
        bm = -(wm * Qm - Dm * Jm + im * cm),
        Sm = hm * zm + Am * Zm + am * km + xm * bm;
      if (0 === Sm) return !1;
      const em = 1 / Sm,
        Nm = im * Vm - jm * Rm,
        Gm = Dm * Vm - qm * Rm,
        Xm = Dm * jm - qm * im,
        Pm = wm * Vm - Ym * Rm,
        Hm = wm * jm - Ym * im,
        ym = wm * qm - Ym * Dm,
        Cm = im * Om - om * Rm,
        rm = Dm * Om - Em * Rm,
        sm = Dm * om - Em * im,
        lm = wm * Om - pm * Rm,
        Mm = wm * om - pm * im,
        um = wm * Em - pm * Dm,
        Bm = -(Am * Im - am * Km + xm * Qm),
        Lm = +(hm * Im - am * nm + xm * Jm),
        tm = -(hm * Km - Am * nm + xm * cm),
        Um = +(hm * Qm - Am * Jm + am * cm),
        dm = +(Am * Nm - am * Gm + xm * Xm),
        gm = -(hm * Nm - am * Pm + xm * Hm),
        Wm = +(hm * Gm - Am * Pm + xm * ym),
        Fm = -(hm * Xm - Am * Hm + am * ym),
        mT = -(Am * Cm - am * rm + xm * sm),
        TT = +(hm * Cm - am * lm + xm * Mm),
        fT = -(hm * rm - Am * lm + xm * um),
        hT = +(hm * sm - Am * Mm + am * um);
      return Tm[0] = zm * em, Tm[1] = Bm * em, Tm[2] = dm * em, Tm[3] = mT * em, Tm[4] = Zm * em, Tm[5] = Lm * em, Tm[6] = gm * em, Tm[7] = TT * em, Tm[8] = km * em, Tm[9] = tm * em, Tm[10] = Wm * em, Tm[11] = fT * em, Tm[12] = bm * em, Tm[13] = Um * em, Tm[14] = Fm * em, Tm[15] = hT * em, !0
    }
    hm._UpdateFlagSeed = 0
  },
  37185: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => Ym,
      h: () => Om,
      i: () => Km,
      j: () => jm,
      l: () => pm,
      p: () => Em,
      t: () => om
    });
    var hm = fm(37191),
      Am = fm(37197),
      am = fm(37199),
      xm = fm(37201),
      wm = fm(37208),
      Dm = fm(37217),
      im = fm(37224);
    const Rm = mm => parseInt(mm.toString().replace(/\W/g, ""));
    class pm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = mm, this.y = Tm
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let mm = Rm(this.x);
        return mm = 397 * mm ^ Rm(this.y), mm
      }
      toArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mm[Tm] = this.x, mm[Tm + 1] = this.y, this
      }
      UTm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pm.FromArrayToRef(mm, Tm, this), this
      }
      ahm() {
        return [this.x, this.y]
      }
      ZZ(mm) {
        return this.x = mm.x, this.y = mm.y, this
      }
      Z8(mm, Tm) {
        return this.x = mm, this.y = Tm, this
      }
      set(mm, Tm) {
        return this.Z8(mm, Tm)
      }
      Y5(mm) {
        return this.Z8(mm, mm)
      }
      add(mm) {
        return new pm(this.x + mm.x, this.y + mm.y)
      }
      addToRef(mm, Tm) {
        return Tm.x = this.x + mm.x, Tm.y = this.y + mm.y, Tm
      }
      addInPlace(mm) {
        return this.x += mm.x, this.y += mm.y, this
      }
      addInPlaceFromFloats(mm, Tm) {
        return this.x += mm, this.y += Tm, this
      }
      addVector3(mm) {
        return new pm(this.x + mm.x, this.y + mm.y)
      }
      subtract(mm) {
        return new pm(this.x - mm.x, this.y - mm.y)
      }
      subtractToRef(mm, Tm) {
        return Tm.x = this.x - mm.x, Tm.y = this.y - mm.y, Tm
      }
      zhm(mm) {
        return this.x -= mm.x, this.y -= mm.y, this
      }
      multiplyInPlace(mm) {
        return this.x *= mm.x, this.y *= mm.y, this
      }
      multiply(mm) {
        return new pm(this.x * mm.x, this.y * mm.y)
      }
      multiplyToRef(mm, Tm) {
        return Tm.x = this.x * mm.x, Tm.y = this.y * mm.y, Tm
      }
      multiplyByFloats(mm, Tm) {
        return new pm(this.x * mm, this.y * Tm)
      }
      divide(mm) {
        return new pm(this.x / mm.x, this.y / mm.y)
      }
      divideToRef(mm, Tm) {
        return Tm.x = this.x / mm.x, Tm.y = this.y / mm.y, Tm
      }
      divideInPlace(mm) {
        return this.x = this.x / mm.x, this.y = this.y / mm.y, this
      }
      minimizeInPlace(mm) {
        return this.minimizeInPlaceFromFloats(mm.x, mm.y)
      }
      maximizeInPlace(mm) {
        return this.maximizeInPlaceFromFloats(mm.x, mm.y)
      }
      minimizeInPlaceFromFloats(mm, Tm) {
        return this.x = Math.min(mm, this.x), this.y = Math.min(Tm, this.y), this
      }
      maximizeInPlaceFromFloats(mm, Tm) {
        return this.x = Math.max(mm, this.x), this.y = Math.max(Tm, this.y), this
      }
      subtractFromFloats(mm, Tm) {
        return new pm(this.x - mm, this.y - Tm)
      }
      subtractFromFloatsToRef(mm, Tm, fm) {
        return fm.x = this.x - mm, fm.y = this.y - Tm, fm
      }
      GA() {
        return new pm(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(mm) {
        return mm.x = -this.x, mm.y = -this.y, mm
      }
      scaleInPlace(mm) {
        return this.x *= mm, this.y *= mm, this
      }
      scale(mm) {
        return new pm(this.x * mm, this.y * mm)
      }
      scaleToRef(mm, Tm) {
        return Tm.x = this.x * mm, Tm.y = this.y * mm, Tm
      }
      scaleAndAddToRef(mm, Tm) {
        return Tm.x += this.x * mm, Tm.y += this.y * mm, Tm
      }
      equals(mm) {
        return mm && this.x === mm.x && this.y === mm.y
      }
      equalsWithEpsilon(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hm.c;
        return mm && (0, wm.WithinEpsilon)(this.x, mm.x, Tm) && (0, wm.WithinEpsilon)(this.y, mm.y, Tm)
      }
      Mxm(mm, Tm) {
        return this.x === mm && this.y === Tm
      }
      floor() {
        return new pm(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(mm) {
        return mm.x = Math.floor(this.x), mm.y = Math.floor(this.y), mm
      }
      fract() {
        return new pm(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(mm) {
        return mm.x = this.x - Math.floor(this.x), mm.y = this.y - Math.floor(this.y), mm
      }
      rotate(mm) {
        return this.rotateToRef(mm, new pm)
      }
      rotateToRef(mm, Tm) {
        const fm = Math.cos(mm),
          hm = Math.sin(mm);
        return Tm.x = fm * this.x - hm * this.y, Tm.y = hm * this.x + fm * this.y, Tm
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
      normalizeFromLength(mm) {
        return 0 === mm || 1 === mm ? this : this.scaleInPlace(1 / mm)
      }
      normalizeToNew() {
        const mm = new pm;
        return this.normalizeToRef(mm), mm
      }
      normalizeToRef(mm) {
        const Tm = this.length();
        return 0 === Tm || 1 === Tm ? (mm.x = this.x, mm.y = this.y, mm) : this.scaleToRef(1 / Tm, mm)
      }
      clone() {
        return new pm(this.x, this.y)
      }
      dot(mm) {
        return this.x * mm.x + this.y * mm.y
      }
      static Zero() {
        return new pm(0, 0)
      }
      static One() {
        return new pm(1, 1)
      }
      static Random() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new pm((0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm))
      }
      static RandomToRef() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z8((0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm))
      }
      static get ZeroReadOnly() {
        return pm._ZeroReadOnly
      }
      static FromArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pm(mm[Tm], mm[Tm + 1])
      }
      static FromArrayToRef(mm, Tm, fm) {
        return fm.x = mm[Tm], fm.y = mm[Tm + 1], fm
      }
      static FromFloatsToRef(mm, Tm, fm) {
        return fm.Z8(mm, Tm), fm
      }
      static CatmullRom(mm, Tm, fm, hm, Am) {
        const am = Am * Am,
          xm = Am * am,
          wm = .5 * (2 * Tm.x + (-mm.x + fm.x) * Am + (2 * mm.x - 5 * Tm.x + 4 * fm.x - hm.x) * am + (-mm.x + 3 * Tm.x - 3 * fm.x + hm.x) * xm),
          Dm = .5 * (2 * Tm.y + (-mm.y + fm.y) * Am + (2 * mm.y - 5 * Tm.y + 4 * fm.y - hm.y) * am + (-mm.y + 3 * Tm.y - 3 * fm.y + hm.y) * xm);
        return new pm(wm, Dm)
      }
      static ClampToRef(mm, Tm, fm, hm) {
        return hm.x = (0, wm.Clamp)(mm.x, Tm.x, fm.x), hm.y = (0, wm.Clamp)(mm.y, Tm.y, fm.y), hm
      }
      static Clamp(mm, Tm, fm) {
        const hm = (0, wm.Clamp)(mm.x, Tm.x, fm.x),
          Am = (0, wm.Clamp)(mm.y, Tm.y, fm.y);
        return new pm(hm, Am)
      }
      static Hermite(mm, Tm, fm, hm, Am) {
        const am = Am * Am,
          xm = Am * am,
          wm = 2 * xm - 3 * am + 1,
          Dm = -2 * xm + 3 * am,
          im = xm - 2 * am + Am,
          Rm = xm - am,
          Em = mm.x * wm + fm.x * Dm + Tm.x * im + hm.x * Rm,
          om = mm.y * wm + fm.y * Dm + Tm.y * im + hm.y * Rm;
        return new pm(Em, om)
      }
      static Hermite1stDerivative(mm, Tm, fm, hm, Am) {
        return this.Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, new pm)
      }
      static Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am) {
        const xm = Am * Am;
        return am.x = 6 * (xm - Am) * mm.x + (3 * xm - 4 * Am + 1) * Tm.x + 6 * (-xm + Am) * fm.x + (3 * xm - 2 * Am) * hm.x, am.y = 6 * (xm - Am) * mm.y + (3 * xm - 4 * Am + 1) * Tm.y + 6 * (-xm + Am) * fm.y + (3 * xm - 2 * Am) * hm.y, am
      }
      static Lerp(mm, Tm, fm) {
        return pm.LerpToRef(mm, Tm, fm, new pm)
      }
      static LerpToRef(mm, Tm, fm, hm) {
        return hm.x = mm.x + (Tm.x - mm.x) * fm, hm.y = mm.y + (Tm.y - mm.y) * fm, hm
      }
      static Dot(mm, Tm) {
        return mm.x * Tm.x + mm.y * Tm.y
      }
      static Normalize(mm) {
        return pm.NormalizeToRef(mm, new pm)
      }
      static NormalizeToRef(mm, Tm) {
        return mm.normalizeToRef(Tm), Tm
      }
      static Minimize(mm, Tm) {
        const fm = mm.x < Tm.x ? mm.x : Tm.x,
          hm = mm.y < Tm.y ? mm.y : Tm.y;
        return new pm(fm, hm)
      }
      static Maximize(mm, Tm) {
        const fm = mm.x > Tm.x ? mm.x : Tm.x,
          hm = mm.y > Tm.y ? mm.y : Tm.y;
        return new pm(fm, hm)
      }
      static Transform(mm, Tm) {
        return pm.TransformToRef(mm, Tm, new pm)
      }
      static TransformToRef(mm, Tm, fm) {
        const hm = Tm.m,
          Am = mm.x * hm[0] + mm.y * hm[4] + hm[12],
          am = mm.x * hm[1] + mm.y * hm[5] + hm[13];
        return fm.x = Am, fm.y = am, fm
      }
      static PointInTriangle(mm, Tm, fm, hm) {
        const Am = .5 * (-fm.y * hm.x + Tm.y * (-fm.x + hm.x) + Tm.x * (fm.y - hm.y) + fm.x * hm.y),
          am = Am < 0 ? -1 : 1,
          xm = (Tm.y * hm.x - Tm.x * hm.y + (hm.y - Tm.y) * mm.x + (Tm.x - hm.x) * mm.y) * am,
          wm = (Tm.x * fm.y - Tm.y * fm.x + (Tm.y - fm.y) * mm.x + (fm.x - Tm.x) * mm.y) * am;
        return xm > 0 && wm > 0 && xm + wm < 2 * Am * am
      }
      static Distance(mm, Tm) {
        return Math.sqrt(pm.DistanceSquared(mm, Tm))
      }
      static DistanceSquared(mm, Tm) {
        const fm = mm.x - Tm.x,
          hm = mm.y - Tm.y;
        return fm * fm + hm * hm
      }
      static Center(mm, Tm) {
        return pm.CenterToRef(mm, Tm, new pm)
      }
      static CenterToRef(mm, Tm, fm) {
        return fm.Z8((mm.x + Tm.x) / 2, (mm.y + Tm.y) / 2)
      }
      static DistanceOfPointFromSegment(mm, Tm, fm) {
        const hm = pm.DistanceSquared(Tm, fm);
        if (0 === hm) return pm.Distance(mm, Tm);
        const Am = fm.subtract(Tm),
          am = Math.max(0, Math.min(1, pm.Dot(mm.subtract(Tm), Am) / hm)),
          xm = Tm.add(Am.multiplyByFloats(am, am));
        return pm.Distance(mm, xm)
      }
    }
    pm._V8PerformanceHack = new pm(.5, .5), pm._ZeroReadOnly = pm.Zero();
    class Em {
      get x() {
        return this._x
      }
      set x(mm) {
        this._x = mm, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(mm) {
        this._y = mm, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(mm) {
        this._z = mm, this._isDirty = !0
      }
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = mm, this._y = Tm, this._z = fm
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "WO"
      }
      getHashCode() {
        let mm = Rm(this._x);
        return mm = 397 * mm ^ Rm(this._y), mm = 397 * mm ^ Rm(this._z), mm
      }
      ahm() {
        return [this._x, this._y, this._z]
      }
      toArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mm[Tm] = this._x, mm[Tm + 1] = this._y, mm[Tm + 2] = this._z, this
      }
      UTm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Em.FromArrayToRef(mm, Tm, this), this
      }
      toQuaternion() {
        return Om.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(mm) {
        return this._x += mm._x, this._y += mm._y, this._z += mm._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(mm, Tm, fm) {
        return this._x += mm, this._y += Tm, this._z += fm, this._isDirty = !0, this
      }
      add(mm) {
        return new Em(this._x + mm._x, this._y + mm._y, this._z + mm._z)
      }
      addToRef(mm, Tm) {
        return Tm._x = this._x + mm._x, Tm._y = this._y + mm._y, Tm._z = this._z + mm._z, Tm._isDirty = !0, Tm
      }
      zhm(mm) {
        return this._x -= mm._x, this._y -= mm._y, this._z -= mm._z, this._isDirty = !0, this
      }
      subtract(mm) {
        return new Em(this._x - mm._x, this._y - mm._y, this._z - mm._z)
      }
      subtractToRef(mm, Tm) {
        return this.subtractFromFloatsToRef(mm._x, mm._y, mm._z, Tm)
      }
      subtractFromFloats(mm, Tm, fm) {
        return new Em(this._x - mm, this._y - Tm, this._z - fm)
      }
      subtractFromFloatsToRef(mm, Tm, fm, hm) {
        return hm._x = this._x - mm, hm._y = this._y - Tm, hm._z = this._z - fm, hm._isDirty = !0, hm
      }
      GA() {
        return new Em(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(mm) {
        return mm._x = -1 * this._x, mm._y = -1 * this._y, mm._z = -1 * this._z, mm._isDirty = !0, mm
      }
      scaleInPlace(mm) {
        return this._x *= mm, this._y *= mm, this._z *= mm, this._isDirty = !0, this
      }
      scale(mm) {
        return new Em(this._x * mm, this._y * mm, this._z * mm)
      }
      scaleToRef(mm, Tm) {
        return Tm._x = this._x * mm, Tm._y = this._y * mm, Tm._z = this._z * mm, Tm._isDirty = !0, Tm
      }
      getNormalToRef(mm) {
        const Tm = this.length();
        let fm = Math.acos(this._y / Tm);
        const hm = Math.atan2(this._z, this._x);
        fm > Math.PI / 2 ? fm -= Math.PI / 2 : fm += Math.PI / 2;
        const Am = Tm * Math.sin(fm) * Math.cos(hm),
          am = Tm * Math.cos(fm),
          xm = Tm * Math.sin(fm) * Math.sin(hm);
        return mm.set(Am, am, xm), mm
      }
      applyRotationQuaternionToRef(mm, Tm) {
        const fm = this._x,
          hm = this._y,
          Am = this._z,
          am = mm._x,
          xm = mm._y,
          wm = mm._z,
          Dm = mm._w,
          im = 2 * (xm * Am - wm * hm),
          Rm = 2 * (wm * fm - am * Am),
          pm = 2 * (am * hm - xm * fm);
        return Tm._x = fm + Dm * im + xm * pm - wm * Rm, Tm._y = hm + Dm * Rm + wm * im - am * pm, Tm._z = Am + Dm * pm + am * Rm - xm * im, Tm._isDirty = !0, Tm
      }
      applyRotationQuaternionInPlace(mm) {
        return this.applyRotationQuaternionToRef(mm, this)
      }
      applyRotationQuaternion(mm) {
        return this.applyRotationQuaternionToRef(mm, new Em)
      }
      scaleAndAddToRef(mm, Tm) {
        return Tm._x += this._x * mm, Tm._y += this._y * mm, Tm._z += this._z * mm, Tm._isDirty = !0, Tm
      }
      projectOnPlane(mm, Tm) {
        return this.projectOnPlaneToRef(mm, Tm, new Em)
      }
      projectOnPlaneToRef(mm, Tm, fm) {
        const hm = mm.normal,
          Am = mm.d,
          am = qm.WO[0];
        this.subtractToRef(Tm, am), am.normalize();
        const xm = Em.Dot(am, hm);
        if (Math.abs(xm) < 1e-10) fm.Y5(1 / 0);
        else {
          const mm = -(Em.Dot(Tm, hm) + Am) / xm,
            wm = am.scaleInPlace(mm);
          Tm.addToRef(wm, fm)
        }
        return fm
      }
      equals(mm) {
        return mm && this._x === mm._x && this._y === mm._y && this._z === mm._z
      }
      equalsWithEpsilon(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hm.c;
        return mm && (0, wm.WithinEpsilon)(this._x, mm._x, Tm) && (0, wm.WithinEpsilon)(this._y, mm._y, Tm) && (0, wm.WithinEpsilon)(this._z, mm._z, Tm)
      }
      Mxm(mm, Tm, fm) {
        return this._x === mm && this._y === Tm && this._z === fm
      }
      multiplyInPlace(mm) {
        return this._x *= mm._x, this._y *= mm._y, this._z *= mm._z, this._isDirty = !0, this
      }
      multiply(mm) {
        return this.multiplyByFloats(mm._x, mm._y, mm._z)
      }
      multiplyToRef(mm, Tm) {
        return Tm._x = this._x * mm._x, Tm._y = this._y * mm._y, Tm._z = this._z * mm._z, Tm._isDirty = !0, Tm
      }
      multiplyByFloats(mm, Tm, fm) {
        return new Em(this._x * mm, this._y * Tm, this._z * fm)
      }
      divide(mm) {
        return new Em(this._x / mm._x, this._y / mm._y, this._z / mm._z)
      }
      divideToRef(mm, Tm) {
        return Tm._x = this._x / mm._x, Tm._y = this._y / mm._y, Tm._z = this._z / mm._z, Tm._isDirty = !0, Tm
      }
      divideInPlace(mm) {
        return this._x = this._x / mm._x, this._y = this._y / mm._y, this._z = this._z / mm._z, this._isDirty = !0, this
      }
      minimizeInPlace(mm) {
        return this.minimizeInPlaceFromFloats(mm._x, mm._y, mm._z)
      }
      maximizeInPlace(mm) {
        return this.maximizeInPlaceFromFloats(mm._x, mm._y, mm._z)
      }
      minimizeInPlaceFromFloats(mm, Tm, fm) {
        return mm < this._x && (this.x = mm), Tm < this._y && (this.y = Tm), fm < this._z && (this.z = fm), this
      }
      maximizeInPlaceFromFloats(mm, Tm, fm) {
        return mm > this._x && (this.x = mm), Tm > this._y && (this.y = Tm), fm > this._z && (this.z = fm), this
      }
      isNonUniformWithinEpsilon(mm) {
        const Tm = Math.abs(this._x),
          fm = Math.abs(this._y);
        if (!(0, wm.WithinEpsilon)(Tm, fm, mm)) return !0;
        const hm = Math.abs(this._z);
        return !(0, wm.WithinEpsilon)(Tm, hm, mm) || !(0, wm.WithinEpsilon)(fm, hm, mm)
      }
      get isNonUniform() {
        const mm = Math.abs(this._x);
        if (mm !== Math.abs(this._y)) return !0;
        return mm !== Math.abs(this._z)
      }
      floorToRef(mm) {
        return mm._x = Math.floor(this._x), mm._y = Math.floor(this._y), mm._z = Math.floor(this._z), mm._isDirty = !0, mm
      }
      floor() {
        return new Em(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(mm) {
        return mm._x = this._x - Math.floor(this._x), mm._y = this._y - Math.floor(this._y), mm._z = this._z - Math.floor(this._z), mm._isDirty = !0, mm
      }
      fract() {
        return new Em(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(mm) {
        if ("xyz" === (mm = mm.toLowerCase())) return this;
        const Tm = qm.WO[0].ZZ(this);
        return this.x = Tm[mm[0]], this.y = Tm[mm[1]], this.z = Tm[mm[2]], this
      }
      rotateByQuaternionToRef(mm, Tm) {
        return mm.toRotationMatrix(qm.Matrix[0]), Em.TransformCoordinatesToRef(this, qm.Matrix[0], Tm), Tm
      }
      rotateByQuaternionAroundPointToRef(mm, Tm, fm) {
        return this.subtractToRef(Tm, qm.WO[0]), qm.WO[0].rotateByQuaternionToRef(mm, qm.WO[0]), Tm.addToRef(qm.WO[0], fm), fm
      }
      cross(mm) {
        return Em.CrossToRef(this, mm, new Em)
      }
      normalizeFromLength(mm) {
        return 0 === mm || 1 === mm ? this : this.scaleInPlace(1 / mm)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Em)
      }
      normalizeToRef(mm) {
        const Tm = this.length();
        return 0 === Tm || 1 === Tm ? (mm._x = this._x, mm._y = this._y, mm._z = this._z, mm._isDirty = !0, mm) : this.scaleToRef(1 / Tm, mm)
      }
      clone() {
        return new Em(this._x, this._y, this._z)
      }
      ZZ(mm) {
        return this.Z8(mm._x, mm._y, mm._z)
      }
      Z8(mm, Tm, fm) {
        return this._x = mm, this._y = Tm, this._z = fm, this._isDirty = !0, this
      }
      set(mm, Tm, fm) {
        return this.Z8(mm, Tm, fm)
      }
      Y5(mm) {
        return this._x = this._y = this._z = mm, this._isDirty = !0, this
      }
      static GetClipFactor(mm, Tm, fm, hm) {
        const Am = Em.Dot(mm, fm);
        return (Am - hm) / (Am - Em.Dot(Tm, fm))
      }
      static GetAngleBetweenVectors(mm, Tm, fm) {
        const hm = mm.normalizeToRef(qm.WO[1]),
          Am = Tm.normalizeToRef(qm.WO[2]);
        let am = Em.Dot(hm, Am);
        am = (0, wm.Clamp)(am, -1, 1);
        const xm = Math.acos(am),
          Dm = qm.WO[3];
        return Em.CrossToRef(hm, Am, Dm), Em.Dot(Dm, fm) > 0 ? isNaN(xm) ? 0 : xm : isNaN(xm) ? -Math.PI : -Math.acos(am)
      }
      static GetAngleBetweenVectorsOnPlane(mm, Tm, fm) {
        qm.WO[0].ZZ(mm);
        const hm = qm.WO[0];
        qm.WO[1].ZZ(Tm);
        const Am = qm.WO[1];
        qm.WO[2].ZZ(fm);
        const am = qm.WO[2],
          xm = qm.WO[3],
          Dm = qm.WO[4];
        hm.normalize(), Am.normalize(), am.normalize(), Em.CrossToRef(am, hm, xm), Em.CrossToRef(xm, am, Dm);
        const im = Math.atan2(Em.Dot(Am, xm), Em.Dot(Am, Dm));
        return (0, wm.NormalizeRadians)(im)
      }
      static PitchYawRollToMoveBetweenPointsToRef(mm, Tm, fm) {
        const hm = jm.WO[0];
        return Tm.subtractToRef(mm, hm), fm._y = Math.atan2(hm.x, hm.z) || 0, fm._x = Math.atan2(Math.sqrt(hm.x ** 2 + hm.z ** 2), hm.y) || 0, fm._z = 0, fm._isDirty = !0, fm
      }
      static PitchYawRollToMoveBetweenPoints(mm, Tm) {
        const fm = Em.Zero();
        return Em.PitchYawRollToMoveBetweenPointsToRef(mm, Tm, fm)
      }
      static SlerpToRef(mm, Tm, fm, Am) {
        fm = (0, wm.Clamp)(fm, 0, 1);
        const am = qm.WO[0],
          xm = qm.WO[1];
        am.ZZ(mm);
        const Dm = am.length();
        am.normalizeFromLength(Dm), xm.ZZ(Tm);
        const im = xm.length();
        xm.normalizeFromLength(im);
        const Rm = Em.Dot(am, xm);
        let pm, om;
        if (Rm < 1 - hm.c) {
          const mm = Math.acos(Rm),
            Tm = 1 / Math.sin(mm);
          pm = Math.sin((1 - fm) * mm) * Tm, om = Math.sin(fm * mm) * Tm
        } else pm = 1 - fm, om = fm;
        return am.scaleInPlace(pm), xm.scaleInPlace(om), Am.ZZ(am).addInPlace(xm), Am.scaleInPlace((0, wm.Lerp)(Dm, im, fm)), Am
      }
      static SmoothToRef(mm, Tm, fm, hm, Am) {
        return Em.SlerpToRef(mm, Tm, 0 === hm ? 1 : fm / hm, Am), Am
      }
      static FromArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Em(mm[Tm], mm[Tm + 1], mm[Tm + 2])
      }
      static FromFloatArray(mm, Tm) {
        return Em.FromArray(mm, Tm)
      }
      static FromArrayToRef(mm, Tm, fm) {
        return fm._x = mm[Tm], fm._y = mm[Tm + 1], fm._z = mm[Tm + 2], fm._isDirty = !0, fm
      }
      static FromFloatArrayToRef(mm, Tm, fm) {
        return Em.FromArrayToRef(mm, Tm, fm)
      }
      static FromFloatsToRef(mm, Tm, fm, hm) {
        return hm.Z8(mm, Tm, fm), hm
      }
      static Zero() {
        return new Em(0, 0, 0)
      }
      static One() {
        return new Em(1, 1, 1)
      }
      static Up() {
        return new Em(0, 1, 0)
      }
      static get UpReadOnly() {
        return Em._UpReadOnly
      }
      static get DownReadOnly() {
        return Em._DownReadOnly
      }
      static get RightReadOnly() {
        return Em._RightReadOnly
      }
      static get LeftReadOnly() {
        return Em._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Em._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Em._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Em._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Em._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Em._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Em._OneReadOnly
      }
      static Down() {
        return new Em(0, -1, 0)
      }
      static Forward() {
        return new Em(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Em(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Em(1, 0, 0)
      }
      static Left() {
        return new Em(-1, 0, 0)
      }
      static Random() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Em((0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm))
      }
      static RandomToRef() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z8((0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm))
      }
      static TransformCoordinates(mm, Tm) {
        const fm = Em.Zero();
        return Em.TransformCoordinatesToRef(mm, Tm, fm), fm
      }
      static TransformCoordinatesToRef(mm, Tm, fm) {
        return Em.TransformCoordinatesFromFloatsToRef(mm._x, mm._y, mm._z, Tm, fm), fm
      }
      static TransformCoordinatesFromFloatsToRef(mm, Tm, fm, hm, Am) {
        const am = hm.m,
          xm = mm * am[0] + Tm * am[4] + fm * am[8] + am[12],
          wm = mm * am[1] + Tm * am[5] + fm * am[9] + am[13],
          Dm = mm * am[2] + Tm * am[6] + fm * am[10] + am[14],
          im = 1 / (mm * am[3] + Tm * am[7] + fm * am[11] + am[15]);
        return Am._x = xm * im, Am._y = wm * im, Am._z = Dm * im, Am._isDirty = !0, Am
      }
      static TransformNormal(mm, Tm) {
        const fm = Em.Zero();
        return Em.TransformNormalToRef(mm, Tm, fm), fm
      }
      static TransformNormalToRef(mm, Tm, fm) {
        return this.TransformNormalFromFloatsToRef(mm._x, mm._y, mm._z, Tm, fm), fm
      }
      static TransformNormalFromFloatsToRef(mm, Tm, fm, hm, Am) {
        const am = hm.m;
        return Am._x = mm * am[0] + Tm * am[4] + fm * am[8], Am._y = mm * am[1] + Tm * am[5] + fm * am[9], Am._z = mm * am[2] + Tm * am[6] + fm * am[10], Am._isDirty = !0, Am
      }
      static CatmullRom(mm, Tm, fm, hm, Am) {
        const am = Am * Am,
          xm = Am * am,
          wm = .5 * (2 * Tm._x + (-mm._x + fm._x) * Am + (2 * mm._x - 5 * Tm._x + 4 * fm._x - hm._x) * am + (-mm._x + 3 * Tm._x - 3 * fm._x + hm._x) * xm),
          Dm = .5 * (2 * Tm._y + (-mm._y + fm._y) * Am + (2 * mm._y - 5 * Tm._y + 4 * fm._y - hm._y) * am + (-mm._y + 3 * Tm._y - 3 * fm._y + hm._y) * xm),
          im = .5 * (2 * Tm._z + (-mm._z + fm._z) * Am + (2 * mm._z - 5 * Tm._z + 4 * fm._z - hm._z) * am + (-mm._z + 3 * Tm._z - 3 * fm._z + hm._z) * xm);
        return new Em(wm, Dm, im)
      }
      static Clamp(mm, Tm, fm) {
        const hm = new Em;
        return Em.ClampToRef(mm, Tm, fm, hm), hm
      }
      static ClampToRef(mm, Tm, fm, hm) {
        let Am = mm._x;
        Am = Am > fm._x ? fm._x : Am, Am = Am < Tm._x ? Tm._x : Am;
        let am = mm._y;
        am = am > fm._y ? fm._y : am, am = am < Tm._y ? Tm._y : am;
        let xm = mm._z;
        return xm = xm > fm._z ? fm._z : xm, xm = xm < Tm._z ? Tm._z : xm, hm.Z8(Am, am, xm), hm
      }
      static CheckExtends(mm, Tm, fm) {
        Tm.minimizeInPlace(mm), fm.maximizeInPlace(mm)
      }
      static Hermite(mm, Tm, fm, hm, Am) {
        const am = Am * Am,
          xm = Am * am,
          wm = 2 * xm - 3 * am + 1,
          Dm = -2 * xm + 3 * am,
          im = xm - 2 * am + Am,
          Rm = xm - am,
          pm = mm._x * wm + fm._x * Dm + Tm._x * im + hm._x * Rm,
          om = mm._y * wm + fm._y * Dm + Tm._y * im + hm._y * Rm,
          Om = mm._z * wm + fm._z * Dm + Tm._z * im + hm._z * Rm;
        return new Em(pm, om, Om)
      }
      static Hermite1stDerivative(mm, Tm, fm, hm, Am) {
        const am = new Em;
        return this.Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am), am
      }
      static Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am) {
        const xm = Am * Am;
        return am._x = 6 * (xm - Am) * mm._x + (3 * xm - 4 * Am + 1) * Tm._x + 6 * (-xm + Am) * fm._x + (3 * xm - 2 * Am) * hm._x, am._y = 6 * (xm - Am) * mm._y + (3 * xm - 4 * Am + 1) * Tm._y + 6 * (-xm + Am) * fm._y + (3 * xm - 2 * Am) * hm._y, am._z = 6 * (xm - Am) * mm._z + (3 * xm - 4 * Am + 1) * Tm._z + 6 * (-xm + Am) * fm._z + (3 * xm - 2 * Am) * hm._z, am._isDirty = !0, am
      }
      static Lerp(mm, Tm, fm) {
        const hm = new Em(0, 0, 0);
        return Em.LerpToRef(mm, Tm, fm, hm), hm
      }
      static LerpToRef(mm, Tm, fm, hm) {
        return hm._x = mm._x + (Tm._x - mm._x) * fm, hm._y = mm._y + (Tm._y - mm._y) * fm, hm._z = mm._z + (Tm._z - mm._z) * fm, hm._isDirty = !0, hm
      }
      static Dot(mm, Tm) {
        return mm._x * Tm._x + mm._y * Tm._y + mm._z * Tm._z
      }
      dot(mm) {
        return this._x * mm._x + this._y * mm._y + this._z * mm._z
      }
      static Cross(mm, Tm) {
        const fm = new Em;
        return Em.CrossToRef(mm, Tm, fm), fm
      }
      static CrossToRef(mm, Tm, fm) {
        const hm = mm._y * Tm._z - mm._z * Tm._y,
          Am = mm._z * Tm._x - mm._x * Tm._z,
          am = mm._x * Tm._y - mm._y * Tm._x;
        return fm.Z8(hm, Am, am), fm
      }
      static Normalize(mm) {
        const Tm = Em.Zero();
        return Em.NormalizeToRef(mm, Tm), Tm
      }
      static NormalizeToRef(mm, Tm) {
        return mm.normalizeToRef(Tm), Tm
      }
      static Project(mm, Tm, fm, hm) {
        const Am = new Em;
        return Em.ProjectToRef(mm, Tm, fm, hm, Am), Am
      }
      static ProjectToRef(mm, Tm, fm, hm, Am) {
        const am = hm.width,
          wm = hm.height,
          Dm = hm.x,
          im = hm.y,
          Rm = qm.Matrix[1],
          pm = xm.c.LastCreatedEngine?.isNDCHalfZRange,
          om = pm ? 1 : .5,
          Om = pm ? 0 : .5;
        Ym.FromValuesToRef(am / 2, 0, 0, 0, 0, -wm / 2, 0, 0, 0, 0, om, 0, Dm + am / 2, wm / 2 + im, Om, 1, Rm);
        const jm = qm.Matrix[0];
        return Tm.multiplyToRef(fm, jm), jm.multiplyToRef(Rm, jm), Em.TransformCoordinatesToRef(mm, jm, Am), Am
      }
      static Reflect(mm, Tm) {
        return this.ReflectToRef(mm, Tm, new Em)
      }
      static ReflectToRef(mm, Tm, fm) {
        const hm = jm.WO[0];
        return hm.ZZ(Tm).scaleInPlace(2 * Em.Dot(mm, Tm)), fm.ZZ(mm).zhm(hm)
      }
      static UnprojectFromTransform(mm, Tm, fm, hm, Am) {
        return this.Unproject(mm, Tm, fm, hm, Am, Ym.IdentityReadOnly)
      }
      static Unproject(mm, Tm, fm, hm, Am, am) {
        const xm = new Em;
        return Em.UnprojectToRef(mm, Tm, fm, hm, Am, am, xm), xm
      }
      static UnprojectToRef(mm, Tm, fm, hm, Am, am, xm) {
        return Em.UnprojectFloatsToRef(mm._x, mm._y, mm._z, Tm, fm, hm, Am, am, xm), xm
      }
      static UnprojectFloatsToRef(mm, Tm, fm, hm, Am, am, wm, Dm, im) {
        const Rm = qm.Matrix[0];
        am.multiplyToRef(wm, Rm), Rm.multiplyToRef(Dm, Rm), Rm.invert();
        const pm = qm.WO[0];
        return pm.x = mm / hm * 2 - 1, pm.y = -(Tm / Am * 2 - 1), xm.c.LastCreatedEngine?.isNDCHalfZRange ? pm.z = fm : pm.z = 2 * fm - 1, Em.TransformCoordinatesToRef(pm, Rm, im), im
      }
      static Minimize(mm, Tm) {
        const fm = new Em;
        return fm.ZZ(mm), fm.minimizeInPlace(Tm), fm
      }
      static Maximize(mm, Tm) {
        const fm = new Em;
        return fm.ZZ(mm), fm.maximizeInPlace(Tm), fm
      }
      static Distance(mm, Tm) {
        return Math.sqrt(Em.DistanceSquared(mm, Tm))
      }
      static DistanceSquared(mm, Tm) {
        const fm = mm._x - Tm._x,
          hm = mm._y - Tm._y,
          Am = mm._z - Tm._z;
        return fm * fm + hm * hm + Am * Am
      }
      static ProjectOnTriangleToRef(mm, Tm, fm, Am, am) {
        const xm = qm.WO[0],
          Dm = qm.WO[1],
          im = qm.WO[2],
          Rm = qm.WO[3],
          pm = qm.WO[4];
        fm.subtractToRef(Tm, xm), Am.subtractToRef(Tm, Dm), Am.subtractToRef(fm, im);
        const om = xm.length(),
          Om = Dm.length(),
          Ym = im.length();
        if (om < hm.c || Om < hm.c || Ym < hm.c) return am.ZZ(Tm), Em.Distance(mm, Tm);
        mm.subtractToRef(Tm, pm), Em.CrossToRef(xm, Dm, Rm);
        const jm = Rm.length();
        if (jm < hm.c) return am.ZZ(Tm), Em.Distance(mm, Tm);
        Rm.normalizeFromLength(jm);
        let Vm = pm.length();
        if (Vm < hm.c) return am.ZZ(Tm), 0;
        pm.normalizeFromLength(Vm);
        const Im = Em.Dot(Rm, pm),
          Km = qm.WO[5],
          Qm = qm.WO[6];
        Km.ZZ(Rm).scaleInPlace(-Vm * Im), Qm.ZZ(mm).addInPlace(Km);
        const nm = qm.WO[4],
          Jm = qm.WO[5],
          cm = qm.WO[7],
          zm = qm.WO[8];
        nm.ZZ(xm).scaleInPlace(1 / om), zm.ZZ(Dm).scaleInPlace(1 / Om), nm.addInPlace(zm).scaleInPlace(-1), Jm.ZZ(xm).scaleInPlace(-1 / om), zm.ZZ(im).scaleInPlace(1 / Ym), Jm.addInPlace(zm).scaleInPlace(-1), cm.ZZ(im).scaleInPlace(-1 / Ym), zm.ZZ(Dm).scaleInPlace(-1 / Om), cm.addInPlace(zm).scaleInPlace(-1);
        const Zm = qm.WO[9];
        let km;
        Zm.ZZ(Qm).zhm(Tm), Em.CrossToRef(nm, Zm, zm), km = Em.Dot(zm, Rm);
        const bm = km;
        Zm.ZZ(Qm).zhm(fm), Em.CrossToRef(Jm, Zm, zm), km = Em.Dot(zm, Rm);
        const Sm = km;
        Zm.ZZ(Qm).zhm(Am), Em.CrossToRef(cm, Zm, zm), km = Em.Dot(zm, Rm);
        const em = km,
          Nm = qm.WO[10];
        let Gm, Xm;
        bm > 0 && Sm < 0 ? (Nm.ZZ(xm), Gm = Tm, Xm = fm) : Sm > 0 && em < 0 ? (Nm.ZZ(im), Gm = fm, Xm = Am) : (Nm.ZZ(Dm).scaleInPlace(-1), Gm = Am, Xm = Tm);
        const Pm = qm.WO[9],
          Hm = qm.WO[4];
        Gm.subtractToRef(Qm, zm), Xm.subtractToRef(Qm, Pm), Em.CrossToRef(zm, Pm, Hm);
        if (!(Em.Dot(Hm, Rm) < 0)) return am.ZZ(Qm), Math.abs(Vm * Im);
        const ym = qm.WO[5];
        Em.CrossToRef(Nm, Hm, ym), ym.normalize();
        const Cm = qm.WO[9];
        Cm.ZZ(Gm).zhm(Qm);
        const rm = Cm.length();
        if (rm < hm.c) return am.ZZ(Gm), Em.Distance(mm, Gm);
        Cm.normalizeFromLength(rm);
        const sm = Em.Dot(ym, Cm),
          lm = qm.WO[7];
        lm.ZZ(Qm).addInPlace(ym.scaleInPlace(rm * sm)), zm.ZZ(lm).zhm(Gm), Vm = Nm.length(), Nm.normalizeFromLength(Vm);
        let Mm = Em.Dot(zm, Nm) / Math.max(Vm, hm.c);
        return Mm = (0, wm.Clamp)(Mm, 0, 1), lm.ZZ(Gm).addInPlace(Nm.scaleInPlace(Mm * Vm)), am.ZZ(lm), Em.Distance(mm, lm)
      }
      static Center(mm, Tm) {
        return Em.CenterToRef(mm, Tm, Em.Zero())
      }
      static CenterToRef(mm, Tm, fm) {
        return fm.Z8((mm._x + Tm._x) / 2, (mm._y + Tm._y) / 2, (mm._z + Tm._z) / 2)
      }
      static RotationFromAxis(mm, Tm, fm) {
        const hm = new Em;
        return Em.RotationFromAxisToRef(mm, Tm, fm, hm), hm
      }
      static RotationFromAxisToRef(mm, Tm, fm, hm) {
        const Am = qm.Quaternion[0];
        return Om.RotationQuaternionFromAxisToRef(mm, Tm, fm, Am), Am.toEulerAnglesToRef(hm), hm
      }
    }
    Em._V8PerformanceHack = new Em(.5, .5, .5), Em._UpReadOnly = Em.Up(), Em._DownReadOnly = Em.Down(), Em._LeftHandedForwardReadOnly = Em.Forward(!1), Em._RightHandedForwardReadOnly = Em.Forward(!0), Em._LeftHandedBackwardReadOnly = Em.Backward(!1), Em._RightHandedBackwardReadOnly = Em.Backward(!0), Em._RightReadOnly = Em.Right(), Em._LeftReadOnly = Em.Left(), Em._ZeroReadOnly = Em.Zero(), Em._OneReadOnly = Em.One();
    class om {
      get x() {
        return this._x
      }
      set x(mm) {
        this._x = mm, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(mm) {
        this._y = mm, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(mm) {
        this._z = mm, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(mm) {
        this._w = mm, this._isDirty = !0
      }
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = mm, this._y = Tm, this._z = fm, this._w = hm
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let mm = Rm(this._x);
        return mm = 397 * mm ^ Rm(this._y), mm = 397 * mm ^ Rm(this._z), mm = 397 * mm ^ Rm(this._w), mm
      }
      ahm() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(mm, Tm) {
        return void 0 === Tm && (Tm = 0), mm[Tm] = this._x, mm[Tm + 1] = this._y, mm[Tm + 2] = this._z, mm[Tm + 3] = this._w, this
      }
      UTm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return om.FromArrayToRef(mm, Tm, this), this
      }
      addInPlace(mm) {
        return this.x += mm._x, this.y += mm._y, this.z += mm._z, this.w += mm._w, this
      }
      addInPlaceFromFloats(mm, Tm, fm, hm) {
        return this.x += mm, this.y += Tm, this.z += fm, this.w += hm, this
      }
      add(mm) {
        return new om(this._x + mm.x, this._y + mm.y, this._z + mm.z, this._w + mm.w)
      }
      addToRef(mm, Tm) {
        return Tm.x = this._x + mm.x, Tm.y = this._y + mm.y, Tm.z = this._z + mm.z, Tm.w = this._w + mm.w, Tm
      }
      zhm(mm) {
        return this.x -= mm.x, this.y -= mm.y, this.z -= mm.z, this.w -= mm.w, this
      }
      subtract(mm) {
        return new om(this._x - mm.x, this._y - mm.y, this._z - mm.z, this._w - mm.w)
      }
      subtractToRef(mm, Tm) {
        return Tm.x = this._x - mm.x, Tm.y = this._y - mm.y, Tm.z = this._z - mm.z, Tm.w = this._w - mm.w, Tm
      }
      subtractFromFloats(mm, Tm, fm, hm) {
        return new om(this._x - mm, this._y - Tm, this._z - fm, this._w - hm)
      }
      subtractFromFloatsToRef(mm, Tm, fm, hm, Am) {
        return Am.x = this._x - mm, Am.y = this._y - Tm, Am.z = this._z - fm, Am.w = this._w - hm, Am
      }
      GA() {
        return new om(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(mm) {
        return mm.x = -this._x, mm.y = -this._y, mm.z = -this._z, mm.w = -this._w, mm
      }
      scaleInPlace(mm) {
        return this.x *= mm, this.y *= mm, this.z *= mm, this.w *= mm, this
      }
      scale(mm) {
        return new om(this._x * mm, this._y * mm, this._z * mm, this._w * mm)
      }
      scaleToRef(mm, Tm) {
        return Tm.x = this._x * mm, Tm.y = this._y * mm, Tm.z = this._z * mm, Tm.w = this._w * mm, Tm
      }
      scaleAndAddToRef(mm, Tm) {
        return Tm.x += this._x * mm, Tm.y += this._y * mm, Tm.z += this._z * mm, Tm.w += this._w * mm, Tm
      }
      equals(mm) {
        return mm && this._x === mm.x && this._y === mm.y && this._z === mm.z && this._w === mm.w
      }
      equalsWithEpsilon(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hm.c;
        return mm && (0, wm.WithinEpsilon)(this._x, mm.x, Tm) && (0, wm.WithinEpsilon)(this._y, mm.y, Tm) && (0, wm.WithinEpsilon)(this._z, mm.z, Tm) && (0, wm.WithinEpsilon)(this._w, mm.w, Tm)
      }
      Mxm(mm, Tm, fm, hm) {
        return this._x === mm && this._y === Tm && this._z === fm && this._w === hm
      }
      multiplyInPlace(mm) {
        return this.x *= mm.x, this.y *= mm.y, this.z *= mm.z, this.w *= mm.w, this
      }
      multiply(mm) {
        return new om(this._x * mm.x, this._y * mm.y, this._z * mm.z, this._w * mm.w)
      }
      multiplyToRef(mm, Tm) {
        return Tm.x = this._x * mm.x, Tm.y = this._y * mm.y, Tm.z = this._z * mm.z, Tm.w = this._w * mm.w, Tm
      }
      multiplyByFloats(mm, Tm, fm, hm) {
        return new om(this._x * mm, this._y * Tm, this._z * fm, this._w * hm)
      }
      divide(mm) {
        return new om(this._x / mm.x, this._y / mm.y, this._z / mm.z, this._w / mm.w)
      }
      divideToRef(mm, Tm) {
        return Tm.x = this._x / mm.x, Tm.y = this._y / mm.y, Tm.z = this._z / mm.z, Tm.w = this._w / mm.w, Tm
      }
      divideInPlace(mm) {
        return this.divideToRef(mm, this)
      }
      minimizeInPlace(mm) {
        return mm.x < this._x && (this.x = mm.x), mm.y < this._y && (this.y = mm.y), mm.z < this._z && (this.z = mm.z), mm.w < this._w && (this.w = mm.w), this
      }
      maximizeInPlace(mm) {
        return mm.x > this._x && (this.x = mm.x), mm.y > this._y && (this.y = mm.y), mm.z > this._z && (this.z = mm.z), mm.w > this._w && (this.w = mm.w), this
      }
      minimizeInPlaceFromFloats(mm, Tm, fm, hm) {
        return this.x = Math.min(mm, this._x), this.y = Math.min(Tm, this._y), this.z = Math.min(fm, this._z), this.w = Math.min(hm, this._w), this
      }
      maximizeInPlaceFromFloats(mm, Tm, fm, hm) {
        return this.x = Math.max(mm, this._x), this.y = Math.max(Tm, this._y), this.z = Math.max(fm, this._z), this.w = Math.max(hm, this._w), this
      }
      floorToRef(mm) {
        return mm.x = Math.floor(this._x), mm.y = Math.floor(this._y), mm.z = Math.floor(this._z), mm.w = Math.floor(this._w), mm
      }
      floor() {
        return new om(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(mm) {
        return mm.x = this._x - Math.floor(this._x), mm.y = this._y - Math.floor(this._y), mm.z = this._z - Math.floor(this._z), mm.w = this._w - Math.floor(this._w), mm
      }
      fract() {
        return new om(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(mm) {
        return 0 === mm || 1 === mm ? this : this.scaleInPlace(1 / mm)
      }
      normalizeToNew() {
        return this.normalizeToRef(new om)
      }
      normalizeToRef(mm) {
        const Tm = this.length();
        return 0 === Tm || 1 === Tm ? (mm.x = this._x, mm.y = this._y, mm.z = this._z, mm.w = this._w, mm) : this.scaleToRef(1 / Tm, mm)
      }
      toVector3() {
        return new Em(this._x, this._y, this._z)
      }
      clone() {
        return new om(this._x, this._y, this._z, this._w)
      }
      ZZ(mm) {
        return this.x = mm.x, this.y = mm.y, this.z = mm.z, this.w = mm.w, this
      }
      Z8(mm, Tm, fm, hm) {
        return this.x = mm, this.y = Tm, this.z = fm, this.w = hm, this
      }
      set(mm, Tm, fm, hm) {
        return this.Z8(mm, Tm, fm, hm)
      }
      Y5(mm) {
        return this.x = this.y = this.z = this.w = mm, this
      }
      dot(mm) {
        return this._x * mm.x + this._y * mm.y + this._z * mm.z + this._w * mm.w
      }
      static FromArray(mm, Tm) {
        return Tm || (Tm = 0), new om(mm[Tm], mm[Tm + 1], mm[Tm + 2], mm[Tm + 3])
      }
      static FromArrayToRef(mm, Tm, fm) {
        return fm.x = mm[Tm], fm.y = mm[Tm + 1], fm.z = mm[Tm + 2], fm.w = mm[Tm + 3], fm
      }
      static FromFloatArrayToRef(mm, Tm, fm) {
        return om.FromArrayToRef(mm, Tm, fm), fm
      }
      static FromFloatsToRef(mm, Tm, fm, hm, Am) {
        return Am.x = mm, Am.y = Tm, Am.z = fm, Am.w = hm, Am
      }
      static Zero() {
        return new om(0, 0, 0, 0)
      }
      static One() {
        return new om(1, 1, 1, 1)
      }
      static Random() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new om((0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm))
      }
      static RandomToRef() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        return fm.x = (0, wm.RandomRange)(mm, Tm), fm.y = (0, wm.RandomRange)(mm, Tm), fm.z = (0, wm.RandomRange)(mm, Tm), fm.w = (0, wm.RandomRange)(mm, Tm), fm
      }
      static Clamp(mm, Tm, fm) {
        return om.ClampToRef(mm, Tm, fm, new om)
      }
      static ClampToRef(mm, Tm, fm, hm) {
        return hm.x = (0, wm.Clamp)(mm.x, Tm.x, fm.x), hm.y = (0, wm.Clamp)(mm.y, Tm.y, fm.y), hm.z = (0, wm.Clamp)(mm.z, Tm.z, fm.z), hm.w = (0, wm.Clamp)(mm.w, Tm.w, fm.w), hm
      }
      static CheckExtends(mm, Tm, fm) {
        Tm.minimizeInPlace(mm), fm.maximizeInPlace(mm)
      }
      static get ZeroReadOnly() {
        return om._ZeroReadOnly
      }
      static Normalize(mm) {
        return om.NormalizeToRef(mm, new om)
      }
      static NormalizeToRef(mm, Tm) {
        return mm.normalizeToRef(Tm), Tm
      }
      static Minimize(mm, Tm) {
        const fm = new om;
        return fm.ZZ(mm), fm.minimizeInPlace(Tm), fm
      }
      static Maximize(mm, Tm) {
        const fm = new om;
        return fm.ZZ(mm), fm.maximizeInPlace(Tm), fm
      }
      static Distance(mm, Tm) {
        return Math.sqrt(om.DistanceSquared(mm, Tm))
      }
      static DistanceSquared(mm, Tm) {
        const fm = mm.x - Tm.x,
          hm = mm.y - Tm.y,
          Am = mm.z - Tm.z,
          am = mm.w - Tm.w;
        return fm * fm + hm * hm + Am * Am + am * am
      }
      static Center(mm, Tm) {
        return om.CenterToRef(mm, Tm, new om)
      }
      static CenterToRef(mm, Tm, fm) {
        return fm.x = (mm.x + Tm.x) / 2, fm.y = (mm.y + Tm.y) / 2, fm.z = (mm.z + Tm.z) / 2, fm.w = (mm.w + Tm.w) / 2, fm
      }
      static TransformCoordinates(mm, Tm) {
        return om.TransformCoordinatesToRef(mm, Tm, new om)
      }
      static TransformCoordinatesToRef(mm, Tm, fm) {
        return om.TransformCoordinatesFromFloatsToRef(mm._x, mm._y, mm._z, Tm, fm), fm
      }
      static TransformCoordinatesFromFloatsToRef(mm, Tm, fm, hm, Am) {
        const am = hm.m,
          xm = mm * am[0] + Tm * am[4] + fm * am[8] + am[12],
          wm = mm * am[1] + Tm * am[5] + fm * am[9] + am[13],
          Dm = mm * am[2] + Tm * am[6] + fm * am[10] + am[14],
          im = mm * am[3] + Tm * am[7] + fm * am[11] + am[15];
        return Am.x = xm, Am.y = wm, Am.z = Dm, Am.w = im, Am
      }
      static TransformNormal(mm, Tm) {
        return om.TransformNormalToRef(mm, Tm, new om)
      }
      static TransformNormalToRef(mm, Tm, fm) {
        const hm = Tm.m,
          Am = mm.x * hm[0] + mm.y * hm[4] + mm.z * hm[8],
          am = mm.x * hm[1] + mm.y * hm[5] + mm.z * hm[9],
          xm = mm.x * hm[2] + mm.y * hm[6] + mm.z * hm[10];
        return fm.x = Am, fm.y = am, fm.z = xm, fm.w = mm.w, fm
      }
      static TransformNormalFromFloatsToRef(mm, Tm, fm, hm, Am, am) {
        const xm = Am.m;
        return am.x = mm * xm[0] + Tm * xm[4] + fm * xm[8], am.y = mm * xm[1] + Tm * xm[5] + fm * xm[9], am.z = mm * xm[2] + Tm * xm[6] + fm * xm[10], am.w = hm, am
      }
      static FromVector3(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new om(mm._x, mm._y, mm._z, Tm)
      }
      static Dot(mm, Tm) {
        return mm.x * Tm.x + mm.y * Tm.y + mm.z * Tm.z + mm.w * Tm.w
      }
    }
    om._V8PerformanceHack = new om(.5, .5, .5, .5), om._ZeroReadOnly = om.Zero();
    class Om {
      get x() {
        return this._x
      }
      set x(mm) {
        this._x = mm, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(mm) {
        this._y = mm, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(mm) {
        this._z = mm, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(mm) {
        this._w = mm, this._isDirty = !0
      }
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = mm, this._y = Tm, this._z = fm, this._w = hm
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let mm = Rm(this._x);
        return mm = 397 * mm ^ Rm(this._y), mm = 397 * mm ^ Rm(this._z), mm = 397 * mm ^ Rm(this._w), mm
      }
      ahm() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mm[Tm] = this._x, mm[Tm + 1] = this._y, mm[Tm + 2] = this._z, mm[Tm + 3] = this._w, this
      }
      UTm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Om.FromArrayToRef(mm, Tm, this)
      }
      equals(mm) {
        return mm && this._x === mm._x && this._y === mm._y && this._z === mm._z && this._w === mm._w
      }
      equalsWithEpsilon(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hm.c;
        return mm && (0, wm.WithinEpsilon)(this._x, mm._x, Tm) && (0, wm.WithinEpsilon)(this._y, mm._y, Tm) && (0, wm.WithinEpsilon)(this._z, mm._z, Tm) && (0, wm.WithinEpsilon)(this._w, mm._w, Tm)
      }
      isApprox(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hm.c;
        return mm && ((0, wm.WithinEpsilon)(this._x, mm._x, Tm) && (0, wm.WithinEpsilon)(this._y, mm._y, Tm) && (0, wm.WithinEpsilon)(this._z, mm._z, Tm) && (0, wm.WithinEpsilon)(this._w, mm._w, Tm) || (0, wm.WithinEpsilon)(this._x, -mm._x, Tm) && (0, wm.WithinEpsilon)(this._y, -mm._y, Tm) && (0, wm.WithinEpsilon)(this._z, -mm._z, Tm) && (0, wm.WithinEpsilon)(this._w, -mm._w, Tm))
      }
      clone() {
        return new Om(this._x, this._y, this._z, this._w)
      }
      ZZ(mm) {
        return this._x = mm._x, this._y = mm._y, this._z = mm._z, this._w = mm._w, this._isDirty = !0, this
      }
      Z8(mm, Tm, fm, hm) {
        return this._x = mm, this._y = Tm, this._z = fm, this._w = hm, this._isDirty = !0, this
      }
      set(mm, Tm, fm, hm) {
        return this.Z8(mm, Tm, fm, hm)
      }
      Y5(mm) {
        return this.Z8(mm, mm, mm, mm)
      }
      add(mm) {
        return new Om(this._x + mm._x, this._y + mm._y, this._z + mm._z, this._w + mm._w)
      }
      addInPlace(mm) {
        return this._x += mm._x, this._y += mm._y, this._z += mm._z, this._w += mm._w, this._isDirty = !0, this
      }
      addToRef(mm, Tm) {
        return Tm._x = this._x + mm._x, Tm._y = this._y + mm._y, Tm._z = this._z + mm._z, Tm._w = this._w + mm._w, Tm._isDirty = !0, Tm
      }
      addInPlaceFromFloats(mm, Tm, fm, hm) {
        return this._x += mm, this._y += Tm, this._z += fm, this._w += hm, this._isDirty = !0, this
      }
      subtractToRef(mm, Tm) {
        return Tm._x = this._x - mm._x, Tm._y = this._y - mm._y, Tm._z = this._z - mm._z, Tm._w = this._w - mm._w, Tm._isDirty = !0, Tm
      }
      subtractFromFloats(mm, Tm, fm, hm) {
        return this.subtractFromFloatsToRef(mm, Tm, fm, hm, new Om)
      }
      subtractFromFloatsToRef(mm, Tm, fm, hm, Am) {
        return Am._x = this._x - mm, Am._y = this._y - Tm, Am._z = this._z - fm, Am._w = this._w - hm, Am._isDirty = !0, Am
      }
      subtract(mm) {
        return new Om(this._x - mm._x, this._y - mm._y, this._z - mm._z, this._w - mm._w)
      }
      zhm(mm) {
        return this._x -= mm._x, this._y -= mm._y, this._z -= mm._z, this._w -= mm._w, this._isDirty = !0, this
      }
      scale(mm) {
        return new Om(this._x * mm, this._y * mm, this._z * mm, this._w * mm)
      }
      scaleToRef(mm, Tm) {
        return Tm._x = this._x * mm, Tm._y = this._y * mm, Tm._z = this._z * mm, Tm._w = this._w * mm, Tm._isDirty = !0, Tm
      }
      scaleInPlace(mm) {
        return this._x *= mm, this._y *= mm, this._z *= mm, this._w *= mm, this._isDirty = !0, this
      }
      scaleAndAddToRef(mm, Tm) {
        return Tm._x += this._x * mm, Tm._y += this._y * mm, Tm._z += this._z * mm, Tm._w += this._w * mm, Tm._isDirty = !0, Tm
      }
      multiply(mm) {
        const Tm = new Om(0, 0, 0, 1);
        return this.multiplyToRef(mm, Tm), Tm
      }
      multiplyToRef(mm, Tm) {
        const fm = this._x * mm._w + this._y * mm._z - this._z * mm._y + this._w * mm._x,
          hm = -this._x * mm._z + this._y * mm._w + this._z * mm._x + this._w * mm._y,
          Am = this._x * mm._y - this._y * mm._x + this._z * mm._w + this._w * mm._z,
          am = -this._x * mm._x - this._y * mm._y - this._z * mm._z + this._w * mm._w;
        return Tm.Z8(fm, hm, Am, am), Tm
      }
      multiplyInPlace(mm) {
        return this.multiplyToRef(mm, this)
      }
      multiplyByFloats(mm, Tm, fm, hm) {
        return this._x *= mm, this._y *= Tm, this._z *= fm, this._w *= hm, this._isDirty = !0, this
      }
      divide(mm) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(mm, Tm) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(mm) {
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
        return this.negateToRef(new Om)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(mm) {
        return mm._x = -this._x, mm._y = -this._y, mm._z = -this._z, mm._w = -this._w, mm._isDirty = !0, mm
      }
      Mxm(mm, Tm, fm, hm) {
        return this._x === mm && this._y === Tm && this._z === fm && this._w === hm
      }
      floorToRef(mm) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(mm) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(mm) {
        return mm.Z8(-this._x, -this._y, -this._z, this._w), mm
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Om(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const mm = this.conjugate(),
          Tm = this.lengthSquared();
        return 0 == Tm || 1 == Tm || mm.scaleInPlace(1 / Tm), mm
      }
      invertInPlace() {
        this.conjugateInPlace();
        const mm = this.lengthSquared();
        return 0 == mm || 1 == mm || this.scaleInPlace(1 / mm), this
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
      normalizeFromLength(mm) {
        return 0 === mm || 1 === mm ? this : this.scaleInPlace(1 / mm)
      }
      normalizeToNew() {
        const mm = new Om(0, 0, 0, 1);
        return this.normalizeToRef(mm), mm
      }
      normalizeToRef(mm) {
        const Tm = this.length();
        return 0 === Tm || 1 === Tm ? mm.Z8(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Tm, mm)
      }
      toEulerAngles() {
        const mm = Em.Zero();
        return this.toEulerAnglesToRef(mm), mm
      }
      toEulerAnglesToRef(mm) {
        const Tm = this._z,
          fm = this._x,
          hm = this._y,
          Am = this._w,
          am = hm * Tm - fm * Am,
          xm = .4999999;
        if (am < -xm) mm._y = 2 * Math.atan2(hm, Am), mm._x = Math.PI / 2, mm._z = 0, mm._isDirty = !0;
        else if (am > xm) mm._y = 2 * Math.atan2(hm, Am), mm._x = -Math.PI / 2, mm._z = 0, mm._isDirty = !0;
        else {
          const xm = Am * Am,
            wm = Tm * Tm,
            Dm = fm * fm,
            im = hm * hm;
          mm._z = Math.atan2(2 * (fm * hm + Tm * Am), -wm - Dm + im + xm), mm._x = Math.asin(-2 * am), mm._y = Math.atan2(2 * (Tm * fm + hm * Am), wm - Dm - im + xm), mm._isDirty = !0
        }
        return mm
      }
      toAlphaBetaGammaToRef(mm) {
        const Tm = this._z,
          fm = this._x,
          hm = this._y,
          Am = this._w,
          am = Math.sqrt(fm * fm + hm * hm),
          xm = Math.sqrt(Tm * Tm + Am * Am),
          wm = 2 * Math.atan2(am, xm),
          Dm = 2 * Math.atan2(Tm, Am),
          im = 2 * Math.atan2(hm, fm),
          Rm = (Dm + im) / 2,
          pm = (Dm - im) / 2;
        return mm.set(pm, wm, Rm), mm
      }
      toRotationMatrix(mm) {
        return Ym.FromQuaternionToRef(this, mm), mm
      }
      fromRotationMatrix(mm) {
        return Om.FromRotationMatrixToRef(mm, this), this
      }
      dot(mm) {
        return this._x * mm._x + this._y * mm._y + this._z * mm._z + this._w * mm._w
      }
      toAxisAngle() {
        const mm = Em.Zero();
        return {
          axis: mm,
          angle: this.toAxisAngleToRef(mm)
        }
      }
      toAxisAngleToRef(mm) {
        let Tm;
        const fm = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          hm = this._w;
        return fm > 0 ? (Tm = 2 * Math.atan2(fm, hm), mm.set(this._x / fm, this._y / fm, this._z / fm)) : (Tm = 0, mm.set(1, 0, 0)), Tm
      }
      static FromRotationMatrix(mm) {
        const Tm = new Om;
        return Om.FromRotationMatrixToRef(mm, Tm), Tm
      }
      static FromRotationMatrixToRef(mm, Tm) {
        const fm = mm.m,
          hm = fm[0],
          Am = fm[4],
          am = fm[8],
          xm = fm[1],
          wm = fm[5],
          Dm = fm[9],
          im = fm[2],
          Rm = fm[6],
          pm = fm[10],
          Em = hm + wm + pm;
        let om;
        return Em > 0 ? (om = .5 / Math.sqrt(Em + 1), Tm._w = .25 / om, Tm._x = (Rm - Dm) * om, Tm._y = (am - im) * om, Tm._z = (xm - Am) * om, Tm._isDirty = !0) : hm > wm && hm > pm ? (om = 2 * Math.sqrt(1 + hm - wm - pm), Tm._w = (Rm - Dm) / om, Tm._x = .25 * om, Tm._y = (Am + xm) / om, Tm._z = (am + im) / om, Tm._isDirty = !0) : wm > pm ? (om = 2 * Math.sqrt(1 + wm - hm - pm), Tm._w = (am - im) / om, Tm._x = (Am + xm) / om, Tm._y = .25 * om, Tm._z = (Dm + Rm) / om, Tm._isDirty = !0) : (om = 2 * Math.sqrt(1 + pm - hm - wm), Tm._w = (xm - Am) / om, Tm._x = (am + im) / om, Tm._y = (Dm + Rm) / om, Tm._z = .25 * om, Tm._isDirty = !0), Tm
      }
      static Dot(mm, Tm) {
        return mm._x * Tm._x + mm._y * Tm._y + mm._z * Tm._z + mm._w * Tm._w
      }
      static AreClose(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const hm = Om.Dot(mm, Tm);
        return 1 - hm * hm <= fm
      }
      static SmoothToRef(mm, Tm, fm, hm, Am) {
        let am = 0 === hm ? 1 : fm / hm;
        return am = (0, wm.Clamp)(am, 0, 1), Om.SlerpToRef(mm, Tm, am, Am), Am
      }
      static Zero() {
        return new Om(0, 0, 0, 0)
      }
      static Inverse(mm) {
        return new Om(-mm._x, -mm._y, -mm._z, mm._w)
      }
      static InverseToRef(mm, Tm) {
        return Tm.set(-mm._x, -mm._y, -mm._z, mm._w), Tm
      }
      static Identity() {
        return new Om(0, 0, 0, 1)
      }
      static IsIdentity(mm) {
        return mm && 0 === mm._x && 0 === mm._y && 0 === mm._z && 1 === mm._w
      }
      static RotationAxis(mm, Tm) {
        return Om.RotationAxisToRef(mm, Tm, new Om)
      }
      static RotationAxisToRef(mm, Tm, fm) {
        fm._w = Math.cos(Tm / 2);
        const hm = Math.sin(Tm / 2) / mm.length();
        return fm._x = mm._x * hm, fm._y = mm._y * hm, fm._z = mm._z * hm, fm._isDirty = !0, fm
      }
      static FromArray(mm, Tm) {
        return Tm || (Tm = 0), new Om(mm[Tm], mm[Tm + 1], mm[Tm + 2], mm[Tm + 3])
      }
      static FromArrayToRef(mm, Tm, fm) {
        return fm._x = mm[Tm], fm._y = mm[Tm + 1], fm._z = mm[Tm + 2], fm._w = mm[Tm + 3], fm._isDirty = !0, fm
      }
      static FromFloatsToRef(mm, Tm, fm, hm, Am) {
        return Am.Z8(mm, Tm, fm, hm), Am
      }
      static FromEulerAngles(mm, Tm, fm) {
        const hm = new Om;
        return Om.RotationYawPitchRollToRef(Tm, mm, fm, hm), hm
      }
      static FromEulerAnglesToRef(mm, Tm, fm, hm) {
        return Om.RotationYawPitchRollToRef(Tm, mm, fm, hm), hm
      }
      static FromEulerVector(mm) {
        const Tm = new Om;
        return Om.RotationYawPitchRollToRef(mm._y, mm._x, mm._z, Tm), Tm
      }
      static FromEulerVectorToRef(mm, Tm) {
        return Om.RotationYawPitchRollToRef(mm._y, mm._x, mm._z, Tm), Tm
      }
      static FromUnitVectorsToRef(mm, Tm, fm) {
        let Am = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : hm.c;
        const am = Em.Dot(mm, Tm) + 1;
        return am < Am ? Math.abs(mm.x) > Math.abs(mm.z) ? fm.set(-mm.y, mm.x, 0, 0) : fm.set(0, -mm.z, mm.y, 0) : (Em.CrossToRef(mm, Tm, jm.WO[0]), fm.set(jm.WO[0].x, jm.WO[0].y, jm.WO[0].z, am)), fm.normalize()
      }
      static RotationYawPitchRoll(mm, Tm, fm) {
        const hm = new Om;
        return Om.RotationYawPitchRollToRef(mm, Tm, fm, hm), hm
      }
      static RotationYawPitchRollToRef(mm, Tm, fm, hm) {
        const Am = .5 * fm,
          am = .5 * Tm,
          xm = .5 * mm,
          wm = Math.sin(Am),
          Dm = Math.cos(Am),
          im = Math.sin(am),
          Rm = Math.cos(am),
          pm = Math.sin(xm),
          Em = Math.cos(xm);
        return hm._x = Em * im * Dm + pm * Rm * wm, hm._y = pm * Rm * Dm - Em * im * wm, hm._z = Em * Rm * wm - pm * im * Dm, hm._w = Em * Rm * Dm + pm * im * wm, hm._isDirty = !0, hm
      }
      static RotationAlphaBetaGamma(mm, Tm, fm) {
        const hm = new Om;
        return Om.RotationAlphaBetaGammaToRef(mm, Tm, fm, hm), hm
      }
      static RotationAlphaBetaGammaToRef(mm, Tm, fm, hm) {
        const Am = .5 * (fm + mm),
          am = .5 * (fm - mm),
          xm = .5 * Tm;
        return hm._x = Math.cos(am) * Math.sin(xm), hm._y = Math.sin(am) * Math.sin(xm), hm._z = Math.sin(Am) * Math.cos(xm), hm._w = Math.cos(Am) * Math.cos(xm), hm._isDirty = !0, hm
      }
      static RotationQuaternionFromAxis(mm, Tm, fm) {
        const hm = new Om(0, 0, 0, 0);
        return Om.RotationQuaternionFromAxisToRef(mm, Tm, fm, hm), hm
      }
      static RotationQuaternionFromAxisToRef(mm, Tm, fm, hm) {
        const Am = qm.Matrix[0];
        return mm = mm.normalizeToRef(qm.WO[0]), Tm = Tm.normalizeToRef(qm.WO[1]), fm = fm.normalizeToRef(qm.WO[2]), Ym.FromXYZAxesToRef(mm, Tm, fm, Am), Om.FromRotationMatrixToRef(Am, hm), hm
      }
      static FromLookDirectionLH(mm, Tm) {
        const fm = new Om;
        return Om.FromLookDirectionLHToRef(mm, Tm, fm), fm
      }
      static FromLookDirectionLHToRef(mm, Tm, fm) {
        const hm = qm.Matrix[0];
        return Ym.LookDirectionLHToRef(mm, Tm, hm), Om.FromRotationMatrixToRef(hm, fm), fm
      }
      static FromLookDirectionRH(mm, Tm) {
        const fm = new Om;
        return Om.FromLookDirectionRHToRef(mm, Tm, fm), fm
      }
      static FromLookDirectionRHToRef(mm, Tm, fm) {
        const hm = qm.Matrix[0];
        return Ym.LookDirectionRHToRef(mm, Tm, hm), Om.FromRotationMatrixToRef(hm, fm)
      }
      static Slerp(mm, Tm, fm) {
        const hm = Om.Identity();
        return Om.SlerpToRef(mm, Tm, fm, hm), hm
      }
      static SlerpToRef(mm, Tm, fm, hm) {
        let Am, am, xm = mm._x * Tm._x + mm._y * Tm._y + mm._z * Tm._z + mm._w * Tm._w,
          wm = !1;
        if (xm < 0 && (wm = !0, xm = -xm), xm > .999999) am = 1 - fm, Am = wm ? -fm : fm;
        else {
          const mm = Math.acos(xm),
            Tm = 1 / Math.sin(mm);
          am = Math.sin((1 - fm) * mm) * Tm, Am = wm ? -Math.sin(fm * mm) * Tm : Math.sin(fm * mm) * Tm
        }
        return hm._x = am * mm._x + Am * Tm._x, hm._y = am * mm._y + Am * Tm._y, hm._z = am * mm._z + Am * Tm._z, hm._w = am * mm._w + Am * Tm._w, hm._isDirty = !0, hm
      }
      static Hermite(mm, Tm, fm, hm, Am) {
        const am = Am * Am,
          xm = Am * am,
          wm = 2 * xm - 3 * am + 1,
          Dm = -2 * xm + 3 * am,
          im = xm - 2 * am + Am,
          Rm = xm - am,
          pm = mm._x * wm + fm._x * Dm + Tm._x * im + hm._x * Rm,
          Em = mm._y * wm + fm._y * Dm + Tm._y * im + hm._y * Rm,
          om = mm._z * wm + fm._z * Dm + Tm._z * im + hm._z * Rm,
          Ym = mm._w * wm + fm._w * Dm + Tm._w * im + hm._w * Rm;
        return new Om(pm, Em, om, Ym)
      }
      static Hermite1stDerivative(mm, Tm, fm, hm, Am) {
        const am = new Om;
        return this.Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am), am
      }
      static Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am) {
        const xm = Am * Am;
        return am._x = 6 * (xm - Am) * mm._x + (3 * xm - 4 * Am + 1) * Tm._x + 6 * (-xm + Am) * fm._x + (3 * xm - 2 * Am) * hm._x, am._y = 6 * (xm - Am) * mm._y + (3 * xm - 4 * Am + 1) * Tm._y + 6 * (-xm + Am) * fm._y + (3 * xm - 2 * Am) * hm._y, am._z = 6 * (xm - Am) * mm._z + (3 * xm - 4 * Am + 1) * Tm._z + 6 * (-xm + Am) * fm._z + (3 * xm - 2 * Am) * hm._z, am._w = 6 * (xm - Am) * mm._w + (3 * xm - 4 * Am + 1) * Tm._w + 6 * (-xm + Am) * fm._w + (3 * xm - 2 * Am) * hm._w, am._isDirty = !0, am
      }
      static Normalize(mm) {
        const Tm = Om.Zero();
        return Om.NormalizeToRef(mm, Tm), Tm
      }
      static NormalizeToRef(mm, Tm) {
        return mm.normalizeToRef(Tm), Tm
      }
      static Clamp(mm, Tm, fm) {
        const hm = new Om;
        return Om.ClampToRef(mm, Tm, fm, hm), hm
      }
      static ClampToRef(mm, Tm, fm, hm) {
        return hm.Z8((0, wm.Clamp)(mm.x, Tm.x, fm.x), (0, wm.Clamp)(mm.y, Tm.y, fm.y), (0, wm.Clamp)(mm.z, Tm.z, fm.z), (0, wm.Clamp)(mm.w, Tm.w, fm.w))
      }
      static Random() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Om((0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm))
      }
      static RandomToRef() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z8((0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm), (0, wm.RandomRange)(mm, Tm))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(mm, Tm) {
        return Math.sqrt(Om.DistanceSquared(mm, Tm))
      }
      static DistanceSquared(mm, Tm) {
        const fm = mm.x - Tm.x,
          hm = mm.y - Tm.y,
          Am = mm.z - Tm.z,
          am = mm.w - Tm.w;
        return fm * fm + hm * hm + Am * Am + am * am
      }
      static Center(mm, Tm) {
        return Om.CenterToRef(mm, Tm, Om.Zero())
      }
      static CenterToRef(mm, Tm, fm) {
        return fm.Z8((mm.x + Tm.x) / 2, (mm.y + Tm.y) / 2, (mm.z + Tm.z) / 2, (mm.w + Tm.w) / 2)
      }
    }
    Om._V8PerformanceHack = new Om(.5, .5, .5, .5);
    class Ym {
      static get Use64Bits() {
        return am.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Dm.n._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hm = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = mm, this._isIdentity3x2 = mm || fm, this._isIdentityDirty = !this._isIdentity && Tm, this._isIdentity3x2Dirty = !this._isIdentity3x2 && hm
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, am.d.MatrixTrackPrecisionChange && am.d.MatrixTrackedMatrices.push(this), this._m = new am.d.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const mm = this._m;
          this._isIdentity = 1 === mm[0] && 0 === mm[1] && 0 === mm[2] && 0 === mm[3] && 0 === mm[4] && 1 === mm[5] && 0 === mm[6] && 0 === mm[7] && 0 === mm[8] && 0 === mm[9] && 1 === mm[10] && 0 === mm[11] && 0 === mm[12] && 0 === mm[13] && 0 === mm[14] && 1 === mm[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const mm = this._m,
          Tm = mm[0],
          fm = mm[1],
          hm = mm[2],
          Am = mm[3],
          am = mm[4],
          xm = mm[5],
          wm = mm[6],
          Dm = mm[7],
          im = mm[8],
          Rm = mm[9],
          pm = mm[10],
          Em = mm[11],
          om = mm[12],
          Om = mm[13],
          Ym = mm[14],
          qm = mm[15],
          jm = pm * qm - Ym * Em,
          Vm = Rm * qm - Om * Em,
          Im = Rm * Ym - Om * pm,
          Km = im * qm - om * Em,
          Qm = im * Ym - pm * om,
          nm = im * Om - om * Rm;
        return Tm * +(xm * jm - wm * Vm + Dm * Im) + fm * -(am * jm - wm * Km + Dm * Qm) + hm * +(am * Vm - xm * Km + Dm * nm) + Am * -(am * Im - xm * Qm + wm * nm)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!mm) return this._m;
        const fm = this._m;
        for (let hm = 0; hm < 16; hm++) mm[Tm + hm] = fm[hm];
        return this
      }
      ahm() {
        return this._m
      }
      UTm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ym.FromArrayToRef(mm, Tm, this)
      }
      Z8() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        return Ym.FromArrayToRef(Tm, 0, this)
      }
      set() {
        const mm = this._m;
        for (let Tm = 0; Tm < 16; Tm++) mm[Tm] = Tm < 0 || arguments.length <= Tm ? void 0 : arguments[Tm];
        return this.markAsUpdated(), this
      }
      Y5(mm) {
        const Tm = this._m;
        for (let fm = 0; fm < 16; fm++) Tm[fm] = mm;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Ym.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(mm) {
        const Tm = new Ym;
        return this.addToRef(mm, Tm), Tm
      }
      addToRef(mm, Tm) {
        const fm = this._m,
          hm = Tm._m,
          Am = mm.m;
        for (let am = 0; am < 16; am++) hm[am] = fm[am] + Am[am];
        return Tm.markAsUpdated(), Tm
      }
      addToSelf(mm) {
        const Tm = this._m,
          fm = mm.m;
        return Tm[0] += fm[0], Tm[1] += fm[1], Tm[2] += fm[2], Tm[3] += fm[3], Tm[4] += fm[4], Tm[5] += fm[5], Tm[6] += fm[6], Tm[7] += fm[7], Tm[8] += fm[8], Tm[9] += fm[9], Tm[10] += fm[10], Tm[11] += fm[11], Tm[12] += fm[12], Tm[13] += fm[13], Tm[14] += fm[14], Tm[15] += fm[15], this.markAsUpdated(), this
      }
      addInPlace(mm) {
        const Tm = this._m,
          fm = mm.m;
        for (let hm = 0; hm < 16; hm++) Tm[hm] += fm[hm];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const mm = this._m;
        for (let Tm = 0; Tm < 16; Tm++) mm[Tm] += Tm < 0 || arguments.length <= Tm ? void 0 : arguments[Tm];
        return this.markAsUpdated(), this
      }
      subtract(mm) {
        const Tm = this._m,
          fm = mm.m;
        for (let hm = 0; hm < 16; hm++) Tm[hm] -= fm[hm];
        return this.markAsUpdated(), this
      }
      subtractToRef(mm, Tm) {
        const fm = this._m,
          hm = mm.m,
          Am = Tm._m;
        for (let am = 0; am < 16; am++) Am[am] = fm[am] - hm[am];
        return Tm.markAsUpdated(), Tm
      }
      zhm(mm) {
        const Tm = this._m,
          fm = mm.m;
        for (let hm = 0; hm < 16; hm++) Tm[hm] -= fm[hm];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        return this.subtractFromFloatsToRef(...Tm, new Ym)
      }
      subtractFromFloatsToRef() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        const hm = Tm.pop(),
          Am = this._m,
          am = hm._m,
          xm = Tm;
        for (let wm = 0; wm < 16; wm++) am[wm] = Am[wm] - xm[wm];
        return hm.markAsUpdated(), hm
      }
      invertToRef(mm) {
        return !0 === this._isIdentity ? (Ym.IdentityToRef(mm), mm) : ((0, Dm.h)(this, mm.ahm()) ? mm.markAsUpdated() : mm.ZZ(this), mm)
      }
      addAtIndex(mm, Tm) {
        return this._m[mm] += Tm, this.markAsUpdated(), this
      }
      multiplyAtIndex(mm, Tm) {
        return this._m[mm] *= Tm, this.markAsUpdated(), this
      }
      setTranslationFromFloats(mm, Tm, fm) {
        return this._m[12] = mm, this._m[13] = Tm, this._m[14] = fm, this.markAsUpdated(), this
      }
      addTranslationFromFloats(mm, Tm, fm) {
        return this._m[12] += mm, this._m[13] += Tm, this._m[14] += fm, this.markAsUpdated(), this
      }
      setTranslation(mm) {
        return this.setTranslationFromFloats(mm._x, mm._y, mm._z)
      }
      getTranslation() {
        return new Em(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(mm) {
        return mm.x = this._m[12], mm.y = this._m[13], mm.z = this._m[14], mm
      }
      removeRotationAndScaling() {
        const mm = this.m;
        return Ym.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, mm[12], mm[13], mm[14], mm[15], this), this._updateIdentityStatus(0 === mm[12] && 0 === mm[13] && 0 === mm[14] && 1 === mm[15]), this
      }
      ZZ(mm) {
        mm.copyToArray(this._m);
        const Tm = mm;
        return this.updateFlag = Tm.updateFlag, this._updateIdentityStatus(Tm._isIdentity, Tm._isIdentityDirty, Tm._isIdentity3x2, Tm._isIdentity3x2Dirty), this
      }
      copyToArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Dm.e)(this, mm, Tm), this
      }
      multiply(mm) {
        const Tm = new Ym;
        return this.multiplyToRef(mm, Tm), Tm
      }
      multiplyInPlace(mm) {
        const Tm = this._m,
          fm = mm.m;
        for (let hm = 0; hm < 16; hm++) Tm[hm] *= fm[hm];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const mm = this._m;
        for (let Tm = 0; Tm < 16; Tm++) mm[Tm] *= Tm < 0 || arguments.length <= Tm ? void 0 : arguments[Tm];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        const hm = Tm.pop(),
          Am = this._m,
          am = hm._m,
          xm = Tm;
        for (let wm = 0; wm < 16; wm++) am[wm] = Am[wm] * xm[wm];
        return hm.markAsUpdated(), hm
      }
      multiplyToRef(mm, Tm) {
        return this._isIdentity ? (Tm.ZZ(mm), Tm) : mm._isIdentity ? (Tm.ZZ(this), Tm) : (this.multiplyToArray(mm, Tm._m, 0), Tm.markAsUpdated(), Tm)
      }
      multiplyToArray(mm, Tm, fm) {
        return (0, Dm.o)(this, mm, Tm, fm), this
      }
      divide(mm) {
        return this.divideToRef(mm, new Ym)
      }
      divideToRef(mm, Tm) {
        const fm = this._m,
          hm = mm.m,
          Am = Tm._m;
        for (let am = 0; am < 16; am++) Am[am] = fm[am] / hm[am];
        return Tm.markAsUpdated(), Tm
      }
      divideInPlace(mm) {
        const Tm = this._m,
          fm = mm.m;
        for (let hm = 0; hm < 16; hm++) Tm[hm] /= fm[hm];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(mm) {
        const Tm = this._m,
          fm = mm.m;
        for (let hm = 0; hm < 16; hm++) Tm[hm] = Math.min(Tm[hm], fm[hm]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const mm = this._m;
        for (let Tm = 0; Tm < 16; Tm++) mm[Tm] = Math.min(mm[Tm], Tm < 0 || arguments.length <= Tm ? void 0 : arguments[Tm]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(mm) {
        const Tm = this._m,
          fm = mm.m;
        for (let hm = 0; hm < 16; hm++) Tm[hm] = Math.max(Tm[hm], fm[hm]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const mm = this._m;
        for (let Tm = 0; Tm < 16; Tm++) mm[Tm] = Math.max(mm[Tm], Tm < 0 || arguments.length <= Tm ? void 0 : arguments[Tm]);
        return this.markAsUpdated(), this
      }
      GA() {
        return this.negateToRef(new Ym)
      }
      negateInPlace() {
        const mm = this._m;
        for (let Tm = 0; Tm < 16; Tm++) mm[Tm] = -mm[Tm];
        return this.markAsUpdated(), this
      }
      negateToRef(mm) {
        const Tm = this._m,
          fm = mm._m;
        for (let hm = 0; hm < 16; hm++) fm[hm] = -Tm[hm];
        return mm.markAsUpdated(), mm
      }
      equals(mm) {
        const Tm = mm;
        if (!Tm) return !1;
        if ((this._isIdentity || Tm._isIdentity) && !this._isIdentityDirty && !Tm._isIdentityDirty) return this._isIdentity && Tm._isIdentity;
        const fm = this.m,
          hm = Tm.m;
        return fm[0] === hm[0] && fm[1] === hm[1] && fm[2] === hm[2] && fm[3] === hm[3] && fm[4] === hm[4] && fm[5] === hm[5] && fm[6] === hm[6] && fm[7] === hm[7] && fm[8] === hm[8] && fm[9] === hm[9] && fm[10] === hm[10] && fm[11] === hm[11] && fm[12] === hm[12] && fm[13] === hm[13] && fm[14] === hm[14] && fm[15] === hm[15]
      }
      equalsWithEpsilon(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = this._m,
          hm = mm.m;
        for (let Am = 0; Am < 16; Am++)
          if (!(0, wm.WithinEpsilon)(fm[Am], hm[Am], Tm)) return !1;
        return !0
      }
      Mxm() {
        const mm = this._m;
        for (let Tm = 0; Tm < 16; Tm++)
          if (mm[Tm] != (Tm < 0 || arguments.length <= Tm ? void 0 : arguments[Tm])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Ym)
      }
      floorToRef(mm) {
        const Tm = this._m,
          fm = mm._m;
        for (let hm = 0; hm < 16; hm++) fm[hm] = Math.floor(Tm[hm]);
        return mm.markAsUpdated(), mm
      }
      fract() {
        return this.fractToRef(new Ym)
      }
      fractToRef(mm) {
        const Tm = this._m,
          fm = mm._m;
        for (let hm = 0; hm < 16; hm++) fm[hm] = Tm[hm] - Math.floor(Tm[hm]);
        return mm.markAsUpdated(), mm
      }
      clone() {
        const mm = new Ym;
        return mm.ZZ(this), mm
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let mm = Rm(this._m[0]);
        for (let Tm = 1; Tm < 16; Tm++) mm = 397 * mm ^ Rm(this._m[Tm]);
        return mm
      }
      decomposeToTransformNode(mm) {
        return mm.rotationQuaternion = mm.rotationQuaternion || new Om, this.decompose(mm.fi, mm.rotationQuaternion, mm.position)
      }
      decompose(mm, Tm, fm, hm) {
        let Am = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return fm && fm.Y5(0), mm && mm.Y5(1), Tm && Tm.Z8(0, 0, 0, 1), !0;
        const am = this._m;
        if (fm && fm.Z8(am[12], am[13], am[14]), (mm = mm || qm.WO[0]).x = Math.sqrt(am[0] * am[0] + am[1] * am[1] + am[2] * am[2]), mm.y = Math.sqrt(am[4] * am[4] + am[5] * am[5] + am[6] * am[6]), mm.z = Math.sqrt(am[8] * am[8] + am[9] * am[9] + am[10] * am[10]), hm) {
          const Tm = (Am ? hm.absoluteScaling.x : hm.fi.x) < 0 ? -1 : 1,
            fm = (Am ? hm.absoluteScaling.y : hm.fi.y) < 0 ? -1 : 1,
            am = (Am ? hm.absoluteScaling.z : hm.fi.z) < 0 ? -1 : 1;
          mm.x *= Tm, mm.y *= fm, mm.z *= am
        } else this.determinant() <= 0 && (mm.y *= -1);
        if (0 === mm._x || 0 === mm._y || 0 === mm._z) return Tm && Tm.Z8(0, 0, 0, 1), !1;
        if (Tm) {
          const fm = 1 / mm._x,
            hm = 1 / mm._y,
            Am = 1 / mm._z;
          Ym.FromValuesToRef(am[0] * fm, am[1] * fm, am[2] * fm, 0, am[4] * hm, am[5] * hm, am[6] * hm, 0, am[8] * Am, am[9] * Am, am[10] * Am, 0, 0, 0, 0, 1, qm.Matrix[0]), Om.FromRotationMatrixToRef(qm.Matrix[0], Tm)
        }
        return !0
      }
      getRow(mm) {
        if (mm < 0 || mm > 3) return null;
        const Tm = 4 * mm;
        return new om(this._m[Tm + 0], this._m[Tm + 1], this._m[Tm + 2], this._m[Tm + 3])
      }
      getRowToRef(mm, Tm) {
        if (mm >= 0 && mm <= 3) {
          const fm = 4 * mm;
          Tm.x = this._m[fm + 0], Tm.y = this._m[fm + 1], Tm.z = this._m[fm + 2], Tm.w = this._m[fm + 3]
        }
        return Tm
      }
      setRow(mm, Tm) {
        return this.setRowFromFloats(mm, Tm.x, Tm.y, Tm.z, Tm.w)
      }
      transpose() {
        const mm = new Ym;
        return Ym.TransposeToRef(this, mm), mm
      }
      transposeToRef(mm) {
        return Ym.TransposeToRef(this, mm), mm
      }
      setRowFromFloats(mm, Tm, fm, hm, Am) {
        if (mm < 0 || mm > 3) return this;
        const am = 4 * mm;
        return this._m[am + 0] = Tm, this._m[am + 1] = fm, this._m[am + 2] = hm, this._m[am + 3] = Am, this.markAsUpdated(), this
      }
      scale(mm) {
        const Tm = new Ym;
        return this.scaleToRef(mm, Tm), Tm
      }
      scaleToRef(mm, Tm) {
        for (let fm = 0; fm < 16; fm++) Tm._m[fm] = this._m[fm] * mm;
        return Tm.markAsUpdated(), Tm
      }
      scaleAndAddToRef(mm, Tm) {
        for (let fm = 0; fm < 16; fm++) Tm._m[fm] += this._m[fm] * mm;
        return Tm.markAsUpdated(), Tm
      }
      scaleInPlace(mm) {
        const Tm = this._m;
        for (let fm = 0; fm < 16; fm++) Tm[fm] *= mm;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(mm) {
        const Tm = qm.Matrix[0];
        this.invertToRef(Tm), Tm.transposeToRef(mm);
        const fm = mm._m;
        return Ym.FromValuesToRef(fm[0], fm[1], fm[2], 0, fm[4], fm[5], fm[6], 0, fm[8], fm[9], fm[10], 0, 0, 0, 0, 1, mm), mm
      }
      getRotationMatrix() {
        const mm = new Ym;
        return this.getRotationMatrixToRef(mm), mm
      }
      getRotationMatrixToRef(mm) {
        const Tm = qm.WO[0];
        if (!this.decompose(Tm)) return Ym.IdentityToRef(mm), mm;
        const fm = this._m,
          hm = 1 / Tm._x,
          Am = 1 / Tm._y,
          am = 1 / Tm._z;
        return Ym.FromValuesToRef(fm[0] * hm, fm[1] * hm, fm[2] * hm, 0, fm[4] * Am, fm[5] * Am, fm[6] * Am, 0, fm[8] * am, fm[9] * am, fm[10] * am, 0, 0, 0, 0, 1, mm), mm
      }
      toggleModelMatrixHandInPlace() {
        const mm = this._m;
        return mm[2] *= -1, mm[6] *= -1, mm[8] *= -1, mm[9] *= -1, mm[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const mm = this._m;
        return mm[8] *= -1, mm[9] *= -1, mm[10] *= -1, mm[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(Vm, this), this
      }
      static FromArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const fm = new Ym;
        return Ym.FromArrayToRef(mm, Tm, fm), fm
      }
      static FromArrayToRef(mm, Tm, fm) {
        for (let hm = 0; hm < 16; hm++) fm._m[hm] = mm[hm + Tm];
        return fm.markAsUpdated(), fm
      }
      static FromFloat32ArrayToRefScaled(mm, Tm, fm, hm) {
        return hm._m[0] = mm[0 + Tm] * fm, hm._m[1] = mm[1 + Tm] * fm, hm._m[2] = mm[2 + Tm] * fm, hm._m[3] = mm[3 + Tm] * fm, hm._m[4] = mm[4 + Tm] * fm, hm._m[5] = mm[5 + Tm] * fm, hm._m[6] = mm[6 + Tm] * fm, hm._m[7] = mm[7 + Tm] * fm, hm._m[8] = mm[8 + Tm] * fm, hm._m[9] = mm[9 + Tm] * fm, hm._m[10] = mm[10 + Tm] * fm, hm._m[11] = mm[11 + Tm] * fm, hm._m[12] = mm[12 + Tm] * fm, hm._m[13] = mm[13 + Tm] * fm, hm._m[14] = mm[14 + Tm] * fm, hm._m[15] = mm[15 + Tm] * fm, hm.markAsUpdated(), hm
      }
      static get IdentityReadOnly() {
        return Ym._IdentityReadOnly
      }
      static FromValuesToRef(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm) {
        const jm = qm._m;
        jm[0] = mm, jm[1] = Tm, jm[2] = fm, jm[3] = hm, jm[4] = Am, jm[5] = am, jm[6] = xm, jm[7] = wm, jm[8] = Dm, jm[9] = im, jm[10] = Rm, jm[11] = pm, jm[12] = Em, jm[13] = om, jm[14] = Om, jm[15] = Ym, qm.markAsUpdated()
      }
      static FromValues(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em, om, Om, qm) {
        const jm = new Ym,
          Vm = jm._m;
        return Vm[0] = mm, Vm[1] = Tm, Vm[2] = fm, Vm[3] = hm, Vm[4] = Am, Vm[5] = am, Vm[6] = xm, Vm[7] = wm, Vm[8] = Dm, Vm[9] = im, Vm[10] = Rm, Vm[11] = pm, Vm[12] = Em, Vm[13] = om, Vm[14] = Om, Vm[15] = qm, jm.markAsUpdated(), jm
      }
      static Compose(mm, Tm, fm) {
        const hm = new Ym;
        return Ym.ComposeToRef(mm, Tm, fm, hm), hm
      }
      static ComposeToRef(mm, Tm, fm, hm) {
        const Am = hm._m,
          am = Tm._x,
          xm = Tm._y,
          wm = Tm._z,
          Dm = Tm._w,
          im = am + am,
          Rm = xm + xm,
          pm = wm + wm,
          Em = am * im,
          om = am * Rm,
          Om = am * pm,
          Ym = xm * Rm,
          qm = xm * pm,
          jm = wm * pm,
          Vm = Dm * im,
          Im = Dm * Rm,
          Km = Dm * pm,
          Qm = mm._x,
          nm = mm._y,
          Jm = mm._z;
        return Am[0] = (1 - (Ym + jm)) * Qm, Am[1] = (om + Km) * Qm, Am[2] = (Om - Im) * Qm, Am[3] = 0, Am[4] = (om - Km) * nm, Am[5] = (1 - (Em + jm)) * nm, Am[6] = (qm + Vm) * nm, Am[7] = 0, Am[8] = (Om + Im) * Jm, Am[9] = (qm - Vm) * Jm, Am[10] = (1 - (Em + Ym)) * Jm, Am[11] = 0, Am[12] = fm._x, Am[13] = fm._y, Am[14] = fm._z, Am[15] = 1, hm.markAsUpdated(), hm
      }
      static Identity() {
        const mm = Ym.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return mm._updateIdentityStatus(!0), mm
      }
      static IdentityToRef(mm) {
        return Ym.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, mm), mm._updateIdentityStatus(!0), mm
      }
      static Zero() {
        const mm = Ym.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return mm._updateIdentityStatus(!1), mm
      }
      static RotationX(mm) {
        const Tm = new Ym;
        return Ym.RotationXToRef(mm, Tm), Tm
      }
      static Invert(mm) {
        const Tm = new Ym;
        return mm.invertToRef(Tm), Tm
      }
      static RotationXToRef(mm, Tm) {
        const fm = Math.sin(mm),
          hm = Math.cos(mm);
        return Ym.FromValuesToRef(1, 0, 0, 0, 0, hm, fm, 0, 0, -fm, hm, 0, 0, 0, 0, 1, Tm), Tm._updateIdentityStatus(1 === hm && 0 === fm), Tm
      }
      static RotationY(mm) {
        const Tm = new Ym;
        return Ym.RotationYToRef(mm, Tm), Tm
      }
      static RotationYToRef(mm, Tm) {
        const fm = Math.sin(mm),
          hm = Math.cos(mm);
        return Ym.FromValuesToRef(hm, 0, -fm, 0, 0, 1, 0, 0, fm, 0, hm, 0, 0, 0, 0, 1, Tm), Tm._updateIdentityStatus(1 === hm && 0 === fm), Tm
      }
      static RotationZ(mm) {
        const Tm = new Ym;
        return Ym.RotationZToRef(mm, Tm), Tm
      }
      static RotationZToRef(mm, Tm) {
        const fm = Math.sin(mm),
          hm = Math.cos(mm);
        return Ym.FromValuesToRef(hm, fm, 0, 0, -fm, hm, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Tm), Tm._updateIdentityStatus(1 === hm && 0 === fm), Tm
      }
      static RotationAxis(mm, Tm) {
        const fm = new Ym;
        return Ym.RotationAxisToRef(mm, Tm, fm), fm
      }
      static RotationAxisToRef(mm, Tm, fm) {
        const hm = Math.sin(-Tm),
          Am = Math.cos(-Tm),
          am = 1 - Am;
        mm = mm.normalizeToRef(qm.WO[0]);
        const xm = fm._m;
        return xm[0] = mm._x * mm._x * am + Am, xm[1] = mm._x * mm._y * am - mm._z * hm, xm[2] = mm._x * mm._z * am + mm._y * hm, xm[3] = 0, xm[4] = mm._y * mm._x * am + mm._z * hm, xm[5] = mm._y * mm._y * am + Am, xm[6] = mm._y * mm._z * am - mm._x * hm, xm[7] = 0, xm[8] = mm._z * mm._x * am - mm._y * hm, xm[9] = mm._z * mm._y * am + mm._x * hm, xm[10] = mm._z * mm._z * am + Am, xm[11] = 0, xm[12] = 0, xm[13] = 0, xm[14] = 0, xm[15] = 1, fm.markAsUpdated(), fm
      }
      static RotationAlignToRef(mm, Tm, fm) {
        let Am = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const am = Em.Dot(Tm, mm),
          xm = fm._m;
        if (am < -1 + hm.c) xm[0] = -1, xm[1] = 0, xm[2] = 0, xm[3] = 0, xm[4] = 0, xm[5] = Am ? 1 : -1, xm[6] = 0, xm[7] = 0, xm[8] = 0, xm[9] = 0, xm[10] = Am ? -1 : 1, xm[11] = 0;
        else {
          const fm = Em.Cross(Tm, mm),
            hm = 1 / (1 + am);
          xm[0] = fm._x * fm._x * hm + am, xm[1] = fm._y * fm._x * hm - fm._z, xm[2] = fm._z * fm._x * hm + fm._y, xm[3] = 0, xm[4] = fm._x * fm._y * hm + fm._z, xm[5] = fm._y * fm._y * hm + am, xm[6] = fm._z * fm._y * hm - fm._x, xm[7] = 0, xm[8] = fm._x * fm._z * hm - fm._y, xm[9] = fm._y * fm._z * hm + fm._x, xm[10] = fm._z * fm._z * hm + am, xm[11] = 0
        }
        return xm[12] = 0, xm[13] = 0, xm[14] = 0, xm[15] = 1, fm.markAsUpdated(), fm
      }
      static RotationYawPitchRoll(mm, Tm, fm) {
        const hm = new Ym;
        return Ym.RotationYawPitchRollToRef(mm, Tm, fm, hm), hm
      }
      static RotationYawPitchRollToRef(mm, Tm, fm, hm) {
        return Om.RotationYawPitchRollToRef(mm, Tm, fm, qm.Quaternion[0]), qm.Quaternion[0].toRotationMatrix(hm), hm
      }
      static Scaling(mm, Tm, fm) {
        const hm = new Ym;
        return Ym.ScalingToRef(mm, Tm, fm, hm), hm
      }
      static ScalingToRef(mm, Tm, fm, hm) {
        return Ym.FromValuesToRef(mm, 0, 0, 0, 0, Tm, 0, 0, 0, 0, fm, 0, 0, 0, 0, 1, hm), hm._updateIdentityStatus(1 === mm && 1 === Tm && 1 === fm), hm
      }
      static Translation(mm, Tm, fm) {
        const hm = new Ym;
        return Ym.TranslationToRef(mm, Tm, fm, hm), hm
      }
      static TranslationToRef(mm, Tm, fm, hm) {
        return Ym.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, mm, Tm, fm, 1, hm), hm._updateIdentityStatus(0 === mm && 0 === Tm && 0 === fm), hm
      }
      static Lerp(mm, Tm, fm) {
        const hm = new Ym;
        return Ym.LerpToRef(mm, Tm, fm, hm), hm
      }
      static LerpToRef(mm, Tm, fm, hm) {
        const Am = hm._m,
          am = mm.m,
          xm = Tm.m;
        for (let wm = 0; wm < 16; wm++) Am[wm] = am[wm] * (1 - fm) + xm[wm] * fm;
        return hm.markAsUpdated(), hm
      }
      static DecomposeLerp(mm, Tm, fm) {
        const hm = new Ym;
        return Ym.DecomposeLerpToRef(mm, Tm, fm, hm), hm
      }
      static DecomposeLerpToRef(mm, Tm, fm, hm) {
        const Am = qm.WO[0],
          am = qm.Quaternion[0],
          xm = qm.WO[1];
        mm.decompose(Am, am, xm);
        const wm = qm.WO[2],
          Dm = qm.Quaternion[1],
          im = qm.WO[3];
        Tm.decompose(wm, Dm, im);
        const Rm = qm.WO[4];
        Em.LerpToRef(Am, wm, fm, Rm);
        const pm = qm.Quaternion[2];
        Om.SlerpToRef(am, Dm, fm, pm);
        const om = qm.WO[5];
        return Em.LerpToRef(xm, im, fm, om), Ym.ComposeToRef(Rm, pm, om, hm), hm
      }
      static LookAtLH(mm, Tm, fm) {
        const hm = new Ym;
        return Ym.LookAtLHToRef(mm, Tm, fm, hm), hm
      }
      static LookAtLHToRef(mm, Tm, fm, hm) {
        const Am = qm.WO[0],
          am = qm.WO[1],
          xm = qm.WO[2];
        Tm.subtractToRef(mm, xm), xm.normalize(), Em.CrossToRef(fm, xm, Am);
        const wm = Am.lengthSquared();
        0 === wm ? Am.x = 1 : Am.normalizeFromLength(Math.sqrt(wm)), Em.CrossToRef(xm, Am, am), am.normalize();
        const Dm = -Em.Dot(Am, mm),
          im = -Em.Dot(am, mm),
          Rm = -Em.Dot(xm, mm);
        return Ym.FromValuesToRef(Am._x, am._x, xm._x, 0, Am._y, am._y, xm._y, 0, Am._z, am._z, xm._z, 0, Dm, im, Rm, 1, hm), hm
      }
      static LookAtRH(mm, Tm, fm) {
        const hm = new Ym;
        return Ym.LookAtRHToRef(mm, Tm, fm, hm), hm
      }
      static LookAtRHToRef(mm, Tm, fm, hm) {
        const Am = qm.WO[0],
          am = qm.WO[1],
          xm = qm.WO[2];
        mm.subtractToRef(Tm, xm), xm.normalize(), Em.CrossToRef(fm, xm, Am);
        const wm = Am.lengthSquared();
        0 === wm ? Am.x = 1 : Am.normalizeFromLength(Math.sqrt(wm)), Em.CrossToRef(xm, Am, am), am.normalize();
        const Dm = -Em.Dot(Am, mm),
          im = -Em.Dot(am, mm),
          Rm = -Em.Dot(xm, mm);
        return Ym.FromValuesToRef(Am._x, am._x, xm._x, 0, Am._y, am._y, xm._y, 0, Am._z, am._z, xm._z, 0, Dm, im, Rm, 1, hm), hm
      }
      static LookDirectionLH(mm, Tm) {
        const fm = new Ym;
        return Ym.LookDirectionLHToRef(mm, Tm, fm), fm
      }
      static LookDirectionLHToRef(mm, Tm, fm) {
        const hm = qm.WO[0];
        hm.ZZ(mm), hm.scaleInPlace(-1);
        const Am = qm.WO[1];
        return Em.CrossToRef(Tm, hm, Am), Ym.FromValuesToRef(Am._x, Am._y, Am._z, 0, Tm._x, Tm._y, Tm._z, 0, hm._x, hm._y, hm._z, 0, 0, 0, 0, 1, fm), fm
      }
      static LookDirectionRH(mm, Tm) {
        const fm = new Ym;
        return Ym.LookDirectionRHToRef(mm, Tm, fm), fm
      }
      static LookDirectionRHToRef(mm, Tm, fm) {
        const hm = qm.WO[2];
        return Em.CrossToRef(Tm, mm, hm), Ym.FromValuesToRef(hm._x, hm._y, hm._z, 0, Tm._x, Tm._y, Tm._z, 0, mm._x, mm._y, mm._z, 0, 0, 0, 0, 1, fm), fm
      }
      static OrthoLH(mm, Tm, fm, hm, Am) {
        const am = new Ym;
        return Ym.OrthoLHToRef(mm, Tm, fm, hm, am, Am), am
      }
      static OrthoLHToRef(mm, Tm, fm, hm, Am, am) {
        const xm = 2 / mm,
          wm = 2 / Tm,
          Dm = 2 / (hm - fm),
          im = -(hm + fm) / (hm - fm);
        return Ym.FromValuesToRef(xm, 0, 0, 0, 0, wm, 0, 0, 0, 0, Dm, 0, 0, 0, im, 1, Am), am && Am.multiplyToRef(Vm, Am), Am._updateIdentityStatus(1 === xm && 1 === wm && 1 === Dm && 0 === im), Am
      }
      static OrthoOffCenterLH(mm, Tm, fm, hm, Am, am, xm) {
        const wm = new Ym;
        return Ym.OrthoOffCenterLHToRef(mm, Tm, fm, hm, Am, am, wm, xm), wm
      }
      static OrthoOffCenterLHToRef(mm, Tm, fm, hm, Am, am, xm, wm) {
        const Dm = 2 / (Tm - mm),
          im = 2 / (hm - fm),
          Rm = 2 / (am - Am),
          pm = -(am + Am) / (am - Am),
          Em = (mm + Tm) / (mm - Tm),
          om = (hm + fm) / (fm - hm);
        return Ym.FromValuesToRef(Dm, 0, 0, 0, 0, im, 0, 0, 0, 0, Rm, 0, Em, om, pm, 1, xm), wm && xm.multiplyToRef(Vm, xm), xm.markAsUpdated(), xm
      }
      static ObliqueOffCenterLHToRef(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
        const pm = -xm * Math.cos(wm),
          Em = -xm * Math.sin(wm);
        return Ym.TranslationToRef(0, 0, -Dm, qm.Matrix[1]), Ym.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pm, Em, 1, 0, 0, 0, 0, 1, qm.Matrix[0]), qm.Matrix[1].multiplyToRef(qm.Matrix[0], qm.Matrix[0]), Ym.TranslationToRef(0, 0, Dm, qm.Matrix[1]), qm.Matrix[0].multiplyToRef(qm.Matrix[1], qm.Matrix[0]), Ym.OrthoOffCenterLHToRef(mm, Tm, fm, hm, Am, am, im, Rm), qm.Matrix[0].multiplyToRef(im, im), im
      }
      static OrthoOffCenterRH(mm, Tm, fm, hm, Am, am, xm) {
        const wm = new Ym;
        return Ym.OrthoOffCenterRHToRef(mm, Tm, fm, hm, Am, am, wm, xm), wm
      }
      static OrthoOffCenterRHToRef(mm, Tm, fm, hm, Am, am, xm, wm) {
        return Ym.OrthoOffCenterLHToRef(mm, Tm, fm, hm, Am, am, xm, wm), xm._m[10] *= -1, xm
      }
      static ObliqueOffCenterRHToRef(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
        const pm = xm * Math.cos(wm),
          Em = xm * Math.sin(wm);
        return Ym.TranslationToRef(0, 0, Dm, qm.Matrix[1]), Ym.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, pm, Em, 1, 0, 0, 0, 0, 1, qm.Matrix[0]), qm.Matrix[1].multiplyToRef(qm.Matrix[0], qm.Matrix[0]), Ym.TranslationToRef(0, 0, -Dm, qm.Matrix[1]), qm.Matrix[0].multiplyToRef(qm.Matrix[1], qm.Matrix[0]), Ym.OrthoOffCenterRHToRef(mm, Tm, fm, hm, Am, am, im, Rm), qm.Matrix[0].multiplyToRef(im, im), im
      }
      static PerspectiveLH(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const xm = new Ym,
          wm = 2 * fm / mm,
          Dm = 2 * fm / Tm,
          im = (hm + fm) / (hm - fm),
          Rm = -2 * hm * fm / (hm - fm),
          pm = Math.tan(am);
        return Ym.FromValuesToRef(wm, 0, 0, 0, 0, Dm, 0, pm, 0, 0, im, 1, 0, 0, Rm, 0, xm), Am && xm.multiplyToRef(Vm, xm), xm._updateIdentityStatus(!1), xm
      }
      static PerspectiveFovLH(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const wm = new Ym;
        return Ym.PerspectiveFovLHToRef(mm, Tm, fm, hm, wm, !0, Am, am, xm), wm
      }
      static PerspectiveFovLHToRef(mm, Tm, fm, hm, Am) {
        let am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xm = arguments.length > 6 ? arguments[6] : void 0,
          wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Dm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const im = fm,
          Rm = hm,
          pm = 1 / Math.tan(.5 * mm),
          Em = am ? pm / Tm : pm,
          om = am ? pm : pm * Tm,
          Om = Dm && 0 === im ? -1 : 0 !== Rm ? (Rm + im) / (Rm - im) : 1,
          qm = Dm && 0 === im ? 2 * Rm : 0 !== Rm ? -2 * Rm * im / (Rm - im) : -2 * im,
          jm = Math.tan(wm);
        return Ym.FromValuesToRef(Em, 0, 0, 0, 0, om, 0, jm, 0, 0, Om, 1, 0, 0, qm, 0, Am), xm && Am.multiplyToRef(Vm, Am), Am._updateIdentityStatus(!1), Am
      }
      static PerspectiveFovReverseLHToRef(mm, Tm, fm, hm, Am) {
        let am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xm = arguments.length > 6 ? arguments[6] : void 0,
          wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Dm = 1 / Math.tan(.5 * mm),
          im = am ? Dm / Tm : Dm,
          Rm = am ? Dm : Dm * Tm,
          pm = Math.tan(wm);
        return Ym.FromValuesToRef(im, 0, 0, 0, 0, Rm, 0, pm, 0, 0, -fm, 1, 0, 0, 1, 0, Am), xm && Am.multiplyToRef(Vm, Am), Am._updateIdentityStatus(!1), Am
      }
      static PerspectiveFovRH(mm, Tm, fm, hm, Am) {
        let am = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          xm = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const wm = new Ym;
        return Ym.PerspectiveFovRHToRef(mm, Tm, fm, hm, wm, !0, Am, am, xm), wm
      }
      static PerspectiveFovRHToRef(mm, Tm, fm, hm, Am) {
        let am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xm = arguments.length > 6 ? arguments[6] : void 0,
          wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Dm = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const im = fm,
          Rm = hm,
          pm = 1 / Math.tan(.5 * mm),
          Em = am ? pm / Tm : pm,
          om = am ? pm : pm * Tm,
          Om = Dm && 0 === im ? 1 : 0 !== Rm ? -(Rm + im) / (Rm - im) : -1,
          qm = Dm && 0 === im ? 2 * Rm : 0 !== Rm ? -2 * Rm * im / (Rm - im) : -2 * im,
          jm = Math.tan(wm);
        return Ym.FromValuesToRef(Em, 0, 0, 0, 0, om, 0, jm, 0, 0, Om, -1, 0, 0, qm, 0, Am), xm && Am.multiplyToRef(Vm, Am), Am._updateIdentityStatus(!1), Am
      }
      static PerspectiveFovReverseRHToRef(mm, Tm, fm, hm, Am) {
        let am = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xm = arguments.length > 6 ? arguments[6] : void 0,
          wm = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Dm = 1 / Math.tan(.5 * mm),
          im = am ? Dm / Tm : Dm,
          Rm = am ? Dm : Dm * Tm,
          pm = Math.tan(wm);
        return Ym.FromValuesToRef(im, 0, 0, 0, 0, Rm, 0, pm, 0, 0, -fm, -1, 0, 0, -1, 0, Am), xm && Am.multiplyToRef(Vm, Am), Am._updateIdentityStatus(!1), Am
      }
      static GetFinalMatrix(mm, Tm, fm, hm, Am, am) {
        const xm = mm.width,
          wm = mm.height,
          Dm = mm.x,
          im = mm.y,
          Rm = Ym.FromValues(xm / 2, 0, 0, 0, 0, -wm / 2, 0, 0, 0, 0, am - Am, 0, Dm + xm / 2, wm / 2 + im, Am, 1),
          pm = new Ym;
        return Tm.multiplyToRef(fm, pm), pm.multiplyToRef(hm, pm), pm.multiplyToRef(Rm, pm)
      }
      static GetAsMatrix2x2(mm) {
        const Tm = mm.m,
          fm = [Tm[0], Tm[1], Tm[4], Tm[5]];
        return am.d.MatrixUse64Bits ? fm : new Float32Array(fm)
      }
      static GetAsMatrix3x3(mm) {
        const Tm = mm.m,
          fm = [Tm[0], Tm[1], Tm[2], Tm[4], Tm[5], Tm[6], Tm[8], Tm[9], Tm[10]];
        return am.d.MatrixUse64Bits ? fm : new Float32Array(fm)
      }
      static Transpose(mm) {
        const Tm = new Ym;
        return Ym.TransposeToRef(mm, Tm), Tm
      }
      static TransposeToRef(mm, Tm) {
        const fm = mm.m,
          hm = fm[0],
          Am = fm[4],
          am = fm[8],
          xm = fm[12],
          wm = fm[1],
          Dm = fm[5],
          im = fm[9],
          Rm = fm[13],
          pm = fm[2],
          Em = fm[6],
          om = fm[10],
          Om = fm[14],
          Ym = fm[3],
          qm = fm[7],
          jm = fm[11],
          Vm = fm[15],
          Im = Tm._m;
        return Im[0] = hm, Im[1] = Am, Im[2] = am, Im[3] = xm, Im[4] = wm, Im[5] = Dm, Im[6] = im, Im[7] = Rm, Im[8] = pm, Im[9] = Em, Im[10] = om, Im[11] = Om, Im[12] = Ym, Im[13] = qm, Im[14] = jm, Im[15] = Vm, Tm.markAsUpdated(), Tm._updateIdentityStatus(mm._isIdentity, mm._isIdentityDirty), Tm
      }
      static Reflection(mm) {
        const Tm = new Ym;
        return Ym.ReflectionToRef(mm, Tm), Tm
      }
      static ReflectionToRef(mm, Tm) {
        mm.normalize();
        const fm = mm.normal.x,
          hm = mm.normal.y,
          Am = mm.normal.z,
          am = -2 * fm,
          xm = -2 * hm,
          wm = -2 * Am;
        return Ym.FromValuesToRef(am * fm + 1, xm * fm, wm * fm, 0, am * hm, xm * hm + 1, wm * hm, 0, am * Am, xm * Am, wm * Am + 1, 0, am * mm.d, xm * mm.d, wm * mm.d, 1, Tm), Tm
      }
      static FromXYZAxesToRef(mm, Tm, fm, hm) {
        return Ym.FromValuesToRef(mm._x, mm._y, mm._z, 0, Tm._x, Tm._y, Tm._z, 0, fm._x, fm._y, fm._z, 0, 0, 0, 0, 1, hm), hm
      }
      static FromQuaternionToRef(mm, Tm) {
        const fm = mm._x * mm._x,
          hm = mm._y * mm._y,
          Am = mm._z * mm._z,
          am = mm._x * mm._y,
          xm = mm._z * mm._w,
          wm = mm._z * mm._x,
          Dm = mm._y * mm._w,
          im = mm._y * mm._z,
          Rm = mm._x * mm._w;
        return Tm._m[0] = 1 - 2 * (hm + Am), Tm._m[1] = 2 * (am + xm), Tm._m[2] = 2 * (wm - Dm), Tm._m[3] = 0, Tm._m[4] = 2 * (am - xm), Tm._m[5] = 1 - 2 * (Am + fm), Tm._m[6] = 2 * (im + Rm), Tm._m[7] = 0, Tm._m[8] = 2 * (wm + Dm), Tm._m[9] = 2 * (im - Rm), Tm._m[10] = 1 - 2 * (hm + fm), Tm._m[11] = 0, Tm._m[12] = 0, Tm._m[13] = 0, Tm._m[14] = 0, Tm._m[15] = 1, Tm.markAsUpdated(), Tm
      }
    }
    Ym._IdentityReadOnly = Ym.Identity();
    class qm {}
    qm.WO = (0, Am.d)(11, Em.Zero), qm.Matrix = (0, Am.d)(2, Ym.Identity), qm.Quaternion = (0, Am.d)(3, Om.Zero);
    class jm {}
    jm.Vector2 = (0, Am.d)(3, pm.Zero), jm.WO = (0, Am.d)(13, Em.Zero), jm.Vector4 = (0, Am.d)(3, om.Zero), jm.Quaternion = (0, Am.d)(3, Om.Zero), jm.Matrix = (0, Am.d)(8, Ym.Identity);
    const Vm = Ym.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Im = !1;

    function Km() {
      Im || (Im = !0, Object.defineProperties(pm.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Em.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(om.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Om.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Ym.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, im.d)("BABYLON.Vector2", pm), (0, im.d)("BABYLON.Vector3", Em), (0, im.d)("BABYLON.Vector4", om), (0, im.d)("BABYLON.Matrix", Ym))
    }
  },
  37203: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => xm
    });
    const hm = "undefined" !== typeof WeakRef;
    class Am {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(mm, Tm, fm, hm)
      }
      initialize(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = mm, this.skipNextObservers = Tm, this.target = fm, this.currentTarget = hm, this
      }
    }
    class am {
      constructor(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = mm, this.mask = Tm, this.scope = fm, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(mm)
      }
    }
    class xm {
      static FromPromise(mm, Tm) {
        const fm = new xm;
        return mm.then((mm => {
          fm.notifyObservers(mm)
        })).catch((mm => {
          if (!Tm) throw mm;
          Tm.notifyObservers(mm)
        })), fm
      }
      get observers() {
        return this._observers
      }
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Tm, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Am(0), mm && (this._onObserverAdded = mm)
      }
      add(mm) {
        let Tm = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          fm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!mm) return null;
        const Am = new am(mm, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Am.unregisterOnNextCall = fm, Tm ? this._observers.unshift(Am) : this._observers.push(Am), this._onObserverAdded && this._onObserverAdded(Am), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Am, this._lastNotifiedValue);
        const xm = hm ? new WeakRef(this) : {
          deref: () => this
        };
        return Am._remove = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Tm = xm.deref();
          Tm && (mm ? Tm.remove(Am) : Tm._remove(Am))
        }, Am
      }
      addOnce(mm) {
        return this.add(mm, void 0, void 0, void 0, !0)
      }
      remove(mm) {
        if (!mm) return !1;
        mm._remove = null;
        return -1 !== this._observers.indexOf(mm) && (this._deferUnregister(mm), !0)
      }
      removeCallback(mm, Tm) {
        for (let fm = 0; fm < this._observers.length; fm++) {
          const hm = this._observers[fm];
          if (!hm._willBeUnregistered && (hm.callback === mm && (!Tm || Tm === hm.scope))) return this._deferUnregister(hm), !0
        }
        return !1
      }
      _deferUnregister(mm) {
        mm._willBeUnregistered || (this._numObserversMarkedAsDeleted++, mm.unregisterOnNextCall = !1, mm._willBeUnregistered = !0, setTimeout((() => {
          this._remove(mm)
        }), 0))
      }
      _remove(mm) {
        let Tm = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!mm) return !1;
        const fm = this._observers.indexOf(mm);
        return -1 !== fm && (Tm && this._numObserversMarkedAsDeleted--, this._observers.splice(fm, 1), !0)
      }
      makeObserverTopPriority(mm) {
        this._remove(mm, !1), this._observers.unshift(mm)
      }
      makeObserverBottomPriority(mm) {
        this._remove(mm, !1), this._observers.push(mm)
      }
      notifyObservers(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          fm = arguments.length > 2 ? arguments[2] : void 0,
          hm = arguments.length > 3 ? arguments[3] : void 0,
          Am = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = mm), !this._observers.length) return !0;
        const am = this._eventState;
        am.mask = Tm, am.target = fm, am.currentTarget = hm, am.skipNextObservers = !1, am.lastReturnValue = mm, am.userInfo = Am;
        for (const xm of this._observers)
          if (!xm._willBeUnregistered && (xm.mask & Tm && (xm.unregisterOnNextCall && this._deferUnregister(xm), xm.scope ? am.lastReturnValue = xm.callback.apply(xm.scope, [mm, am]) : am.lastReturnValue = xm.callback(mm, am)), am.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(mm, Tm) {
        let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Tm), mm._willBeUnregistered) return;
        const hm = this._eventState;
        hm.mask = fm, hm.skipNextObservers = !1, mm.unregisterOnNextCall && this._deferUnregister(mm), mm.callback(Tm, hm)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const mm = this._observers.pop();
          mm && (mm._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const mm = new xm;
        return mm._observers = this._observers.slice(0), mm
      }
      hasSpecificMask() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Tm of this._observers)
          if (Tm.mask & mm || Tm.mask === mm) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);