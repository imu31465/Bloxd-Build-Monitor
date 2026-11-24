export const id = 238;
export const ids = [238];
export const modules = {
  37813: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(37821);
    class Am {
      static GetPlanes(mm) {
        const Tm = [];
        for (let fm = 0; fm < 6; fm++) Tm.push(new hm.d(0, 0, 0, 0));
        return Am.GetPlanesToRef(mm, Tm), Tm
      }
      static GetNearPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[2], Tm.normal.y = fm[7] + fm[6], Tm.normal.z = fm[11] + fm[10], Tm.d = fm[15] + fm[14], Tm.normalize()
      }
      static GetFarPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[2], Tm.normal.y = fm[7] - fm[6], Tm.normal.z = fm[11] - fm[10], Tm.d = fm[15] - fm[14], Tm.normalize()
      }
      static GetLeftPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[0], Tm.normal.y = fm[7] + fm[4], Tm.normal.z = fm[11] + fm[8], Tm.d = fm[15] + fm[12], Tm.normalize()
      }
      static GetRightPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[0], Tm.normal.y = fm[7] - fm[4], Tm.normal.z = fm[11] - fm[8], Tm.d = fm[15] - fm[12], Tm.normalize()
      }
      static GetTopPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[1], Tm.normal.y = fm[7] - fm[5], Tm.normal.z = fm[11] - fm[9], Tm.d = fm[15] - fm[13], Tm.normalize()
      }
      static GetBottomPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[1], Tm.normal.y = fm[7] + fm[5], Tm.normal.z = fm[11] + fm[9], Tm.d = fm[15] + fm[13], Tm.normalize()
      }
      static GetPlanesToRef(mm, Tm) {
        Am.GetNearPlaneToRef(mm, Tm[0]), Am.GetFarPlaneToRef(mm, Tm[1]), Am.GetLeftPlaneToRef(mm, Tm[2]), Am.GetRightPlaneToRef(mm, Tm[3]), Am.GetTopPlaneToRef(mm, Tm[4]), Am.GetBottomPlaneToRef(mm, Tm[5])
      }
      static IsPointInFrustum(mm, Tm) {
        for (let fm = 0; fm < 6; fm++)
          if (Tm[fm].dotCoordinate(mm) < 0) return !1;
        return !0
      }
    }
  },
  37821: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(37185);
    class Am {
      constructor(mm, Tm, fm, Am) {
        this.normal = new hm.p(mm, Tm, fm), this.d = Am
      }
      ahm() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Am(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let mm = this.normal.getHashCode();
        return mm = 397 * mm ^ this.d, mm
      }
      normalize() {
        const mm = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Tm = 0;
        return 0 !== mm && (Tm = 1 / mm), this.normal.x *= Tm, this.normal.y *= Tm, this.normal.z *= Tm, this.d *= Tm, this
      }
      transform(mm) {
        const Tm = Am._TmpMatrix;
        mm.invertToRef(Tm);
        const fm = Tm.m,
          hm = this.normal.x,
          am = this.normal.y,
          xm = this.normal.z,
          wm = this.d,
          Dm = hm * fm[0] + am * fm[1] + xm * fm[2] + wm * fm[3],
          im = hm * fm[4] + am * fm[5] + xm * fm[6] + wm * fm[7],
          Rm = hm * fm[8] + am * fm[9] + xm * fm[10] + wm * fm[11],
          pm = hm * fm[12] + am * fm[13] + xm * fm[14] + wm * fm[15];
        return new Am(Dm, im, Rm, pm)
      }
      dotCoordinate(mm) {
        return this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z + this.d
      }
      copyFromPoints(mm, Tm, fm) {
        const hm = Tm.x - mm.x,
          Am = Tm.y - mm.y,
          am = Tm.z - mm.z,
          xm = fm.x - mm.x,
          wm = fm.y - mm.y,
          Dm = fm.z - mm.z,
          im = Am * Dm - am * wm,
          Rm = am * xm - hm * Dm,
          pm = hm * wm - Am * xm,
          Em = Math.sqrt(im * im + Rm * Rm + pm * pm);
        let om;
        return om = 0 !== Em ? 1 / Em : 0, this.normal.x = im * om, this.normal.y = Rm * om, this.normal.z = pm * om, this.d = -(this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z), this
      }
      isFrontFacingTo(mm, Tm) {
        return hm.p.Dot(this.normal, mm) <= Tm
      }
      signedDistanceTo(mm) {
        return hm.p.Dot(mm, this.normal) + this.d
      }
      static FromArray(mm) {
        return new Am(mm[0], mm[1], mm[2], mm[3])
      }
      static FromPoints(mm, Tm, fm) {
        const hm = new Am(0, 0, 0, 0);
        return hm.copyFromPoints(mm, Tm, fm), hm
      }
      static FromPositionAndNormal(mm, Tm) {
        const fm = new Am(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(mm, Tm, fm)
      }
      static FromPositionAndNormalToRef(mm, Tm, fm) {
        return fm.normal.ZZ(Tm), fm.normal.normalize(), fm.d = -mm.dot(fm.normal), fm
      }
      static SignedDistanceToPlaneFromPositionAndNormal(mm, Tm, fm) {
        const Am = -(Tm.x * mm.x + Tm.y * mm.y + Tm.z * mm.z);
        return hm.p.Dot(fm, Tm) + Am
      }
    }
    Am._TmpMatrix = hm.e.Identity()
  },
  38764: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(38766);
    const Am = (mm, Tm, fm) => mm ? mm.getClassName && "Mesh" === mm.getClassName() ? null : !mm.getClassName || "SubMesh" !== mm.getClassName() && "PhysicsBody" !== mm.getClassName() ? mm.clone ? mm.clone() : Array.isArray(mm) ? mm.slice() : fm && "object" === typeof mm ? {
      ...mm
    } : null : mm.clone(Tm) : null;
    class am {
      static DeepCopy(mm, Tm, fm, am) {
        let xm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const wm = function(mm) {
          const Tm = [];
          do {
            const fm = Object.getOwnPropertyNames(mm);
            for (const mm of fm) - 1 === Tm.indexOf(mm) && Tm.push(mm)
          } while (mm = Object.getPrototypeOf(mm));
          return Tm
        }(mm);
        for (const im of wm) {
          if ("_" === im[0] && (!am || -1 === am.indexOf(im))) continue;
          if (im.endsWith("Observable")) continue;
          if (fm && -1 !== fm.indexOf(im)) continue;
          const wm = mm[im],
            Rm = typeof wm;
          if ("function" !== Rm) try {
            if ("object" === Rm)
              if (wm instanceof Uint8Array) Tm[im] = Uint8Array.from(wm);
              else if (wm instanceof Array) {
              if (Tm[im] = [], wm.length > 0)
                if ("object" == typeof wm[0])
                  for (let mm = 0; mm < wm.length; mm++) {
                    const fm = Am(wm[mm], Tm, xm); - 1 === Tm[im].indexOf(fm) && Tm[im].push(fm)
                  } else Tm[im] = wm.slice(0)
            } else Tm[im] = Am(wm, Tm, xm);
            else Tm[im] = wm
          } catch (Dm) {
            hm.b.Warn(Dm.message)
          }
        }
      }
    }
  },
  37970: (mm, Tm, fm) => {
    function hm() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (mm => {
        const Tm = 16 * Math.random() | 0;
        return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
      }))
    }
    fm.d(Tm, {
      c: () => hm
    })
  },
  38766: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      static _CheckLimit(mm, Tm) {
        let fm = hm._LogLimitOutputs[mm];
        return fm ? fm.current++ : (fm = {
          limit: Tm,
          current: 1
        }, hm._LogLimitOutputs[mm] = fm), fm.current <= fm.limit
      }
      static _GenerateLimitMessage(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const fm = hm._LogLimitOutputs[mm];
        if (!fm || !hm.MessageLimitReached) return;
        const Am = this._Levels[Tm];
        fm.current === fm.limit && hm[Am.name](hm.MessageLimitReached.replace(/%LIMIT%/g, "" + fm.limit).replace(/%TYPE%/g, Am.name ?? ""))
      }
      static _AddLogEntry(mm) {
        hm._LogCache = mm + hm._LogCache, hm.OnNewCacheEntry && hm.OnNewCacheEntry(mm)
      }
      static _FormatMessage(mm) {
        const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
          fm = new Date;
        return "[" + Tm(fm.getHours()) + ":" + Tm(fm.getMinutes()) + ":" + Tm(fm.getSeconds()) + "]: " + mm
      }
      static _LogDisabled(mm, Tm) {}
      static _LogEnabled() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const Am = Array.isArray(Tm) ? Tm[0] : Tm;
        if (void 0 !== fm && !hm._CheckLimit(Am, fm)) return;
        const am = hm._FormatMessage(Am),
          xm = this._Levels[mm],
          wm = Array.isArray(Tm) ? Tm.slice(1) : [];
        xm.logFunc && xm.logFunc("BJS - " + am, ...wm);
        const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
        hm._AddLogEntry(Dm), hm._GenerateLimitMessage(Am, mm)
      }
      static get LogCache() {
        return hm._LogCache
      }
      static ClearLogCache() {
        hm._LogCache = "", hm._LogLimitOutputs = {}, hm.errorsCount = 0
      }
      static set LogLevels(mm) {
        hm.Log = hm._LogDisabled, hm.Warn = hm._LogDisabled, hm.Error = hm._LogDisabled;
        const Tm = [hm.MessageLogLevel, hm.WarningLogLevel, hm.ErrorLogLevel];
        for (const fm of Tm)
          if ((mm & fm) === fm) {
            const mm = this._Levels[fm];
            hm[mm.name] = hm._LogEnabled.bind(hm, fm)
          }
      }
    }
    hm.NoneLogLevel = 0, hm.MessageLogLevel = 1, hm.WarningLogLevel = 2, hm.ErrorLogLevel = 4, hm.AllLogLevel = 7, hm.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hm._LogCache = "", hm._LogLimitOutputs = {}, hm._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], hm.errorsCount = 0, hm.Log = hm._LogEnabled.bind(hm, hm.MessageLogLevel), hm.Warn = hm._LogEnabled.bind(hm, hm.WarningLogLevel), hm.Error = hm._LogEnabled.bind(hm, hm.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);