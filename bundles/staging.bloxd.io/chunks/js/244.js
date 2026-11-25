export const id = 244;
export const ids = [244];
export const modules = {
  38009: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(38016);
    class qt {
      static GetPlanes(tt) {
        const et = [];
        for (let Vt = 0; Vt < 6; Vt++) et.push(new Ot.b(0, 0, 0, 0));
        return qt.GetPlanesToRef(tt, et), et
      }
      static GetNearPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[2], et.normal.y = Vt[7] + Vt[6], et.normal.z = Vt[11] + Vt[10], et.d = Vt[15] + Vt[14], et.normalize()
      }
      static GetFarPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[2], et.normal.y = Vt[7] - Vt[6], et.normal.z = Vt[11] - Vt[10], et.d = Vt[15] - Vt[14], et.normalize()
      }
      static GetLeftPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[0], et.normal.y = Vt[7] + Vt[4], et.normal.z = Vt[11] + Vt[8], et.d = Vt[15] + Vt[12], et.normalize()
      }
      static GetRightPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[0], et.normal.y = Vt[7] - Vt[4], et.normal.z = Vt[11] - Vt[8], et.d = Vt[15] - Vt[12], et.normalize()
      }
      static GetTopPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[1], et.normal.y = Vt[7] - Vt[5], et.normal.z = Vt[11] - Vt[9], et.d = Vt[15] - Vt[13], et.normalize()
      }
      static GetBottomPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[1], et.normal.y = Vt[7] + Vt[5], et.normal.z = Vt[11] + Vt[9], et.d = Vt[15] + Vt[13], et.normalize()
      }
      static GetPlanesToRef(tt, et) {
        qt.GetNearPlaneToRef(tt, et[0]), qt.GetFarPlaneToRef(tt, et[1]), qt.GetLeftPlaneToRef(tt, et[2]), qt.GetRightPlaneToRef(tt, et[3]), qt.GetTopPlaneToRef(tt, et[4]), qt.GetBottomPlaneToRef(tt, et[5])
      }
      static IsPointInFrustum(tt, et) {
        for (let Vt = 0; Vt < 6; Vt++)
          if (et[Vt].dotCoordinate(tt) < 0) return !1;
        return !0
      }
    }
  },
  38016: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(37336);
    class qt {
      constructor(tt, et, Vt, qt) {
        this.normal = new Ot.n(tt, et, Vt), this.d = qt
      }
      GOt() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qt(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let tt = this.normal.getHashCode();
        return tt = 397 * tt ^ this.d, tt
      }
      normalize() {
        const tt = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let et = 0;
        return 0 !== tt && (et = 1 / tt), this.normal.x *= et, this.normal.y *= et, this.normal.z *= et, this.d *= et, this
      }
      transform(tt) {
        const et = qt._TmpMatrix;
        tt.invertToRef(et);
        const Vt = et.m,
          Ot = this.normal.x,
          Dt = this.normal.y,
          mt = this.normal.z,
          dt = this.d,
          jt = Ot * Vt[0] + Dt * Vt[1] + mt * Vt[2] + dt * Vt[3],
          Ht = Ot * Vt[4] + Dt * Vt[5] + mt * Vt[6] + dt * Vt[7],
          Xt = Ot * Vt[8] + Dt * Vt[9] + mt * Vt[10] + dt * Vt[11],
          Qt = Ot * Vt[12] + Dt * Vt[13] + mt * Vt[14] + dt * Vt[15];
        return new qt(jt, Ht, Xt, Qt)
      }
      dotCoordinate(tt) {
        return this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z + this.d
      }
      copyFromPoints(tt, et, Vt) {
        const Ot = et.x - tt.x,
          qt = et.y - tt.y,
          Dt = et.z - tt.z,
          mt = Vt.x - tt.x,
          dt = Vt.y - tt.y,
          jt = Vt.z - tt.z,
          Ht = qt * jt - Dt * dt,
          Xt = Dt * mt - Ot * jt,
          Qt = Ot * dt - qt * mt,
          lt = Math.sqrt(Ht * Ht + Xt * Xt + Qt * Qt);
        let Et;
        return Et = 0 !== lt ? 1 / lt : 0, this.normal.x = Ht * Et, this.normal.y = Xt * Et, this.normal.z = Qt * Et, this.d = -(this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z), this
      }
      isFrontFacingTo(tt, et) {
        return Ot.n.Dot(this.normal, tt) <= et
      }
      signedDistanceTo(tt) {
        return Ot.n.Dot(tt, this.normal) + this.d
      }
      static FromArray(tt) {
        return new qt(tt[0], tt[1], tt[2], tt[3])
      }
      static FromPoints(tt, et, Vt) {
        const Ot = new qt(0, 0, 0, 0);
        return Ot.copyFromPoints(tt, et, Vt), Ot
      }
      static FromPositionAndNormal(tt, et) {
        const Vt = new qt(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(tt, et, Vt)
      }
      static FromPositionAndNormalToRef(tt, et, Vt) {
        return Vt.normal.rK(et), Vt.normal.normalize(), Vt.d = -tt.dot(Vt.normal), Vt
      }
      static SignedDistanceToPlaneFromPositionAndNormal(tt, et, Vt) {
        const qt = -(et.x * tt.x + et.y * tt.y + et.z * tt.z);
        return Ot.n.Dot(Vt, et) + qt
      }
    }
    qt._TmpMatrix = Ot.c.Identity()
  },
  38897: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(38899);
    const qt = (tt, et, Vt) => tt ? tt.getClassName && "Mesh" === tt.getClassName() ? null : !tt.getClassName || "SubMesh" !== tt.getClassName() && "PhysicsBody" !== tt.getClassName() ? tt.clone ? tt.clone() : Array.isArray(tt) ? tt.slice() : Vt && "object" === typeof tt ? {
      ...tt
    } : null : tt.clone(et) : null;
    class Dt {
      static DeepCopy(tt, et, Vt, Dt) {
        let mt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dt = function(tt) {
          const et = [];
          do {
            const Vt = Object.getOwnPropertyNames(tt);
            for (const tt of Vt) - 1 === et.indexOf(tt) && et.push(tt)
          } while (tt = Object.getPrototypeOf(tt));
          return et
        }(tt);
        for (const Ht of dt) {
          if ("_" === Ht[0] && (!Dt || -1 === Dt.indexOf(Ht))) continue;
          if (Ht.endsWith("Observable")) continue;
          if (Vt && -1 !== Vt.indexOf(Ht)) continue;
          const dt = tt[Ht],
            Xt = typeof dt;
          if ("function" !== Xt) try {
            if ("object" === Xt)
              if (dt instanceof Uint8Array) et[Ht] = Uint8Array.from(dt);
              else if (dt instanceof Array) {
              if (et[Ht] = [], dt.length > 0)
                if ("object" == typeof dt[0])
                  for (let tt = 0; tt < dt.length; tt++) {
                    const Vt = qt(dt[tt], et, mt); - 1 === et[Ht].indexOf(Vt) && et[Ht].push(Vt)
                  } else et[Ht] = dt.slice(0)
            } else et[Ht] = qt(dt, et, mt);
            else et[Ht] = dt
          } catch (jt) {
            Ot.d.Warn(jt.message)
          }
        }
      }
    }
  },
  38159: (tt, et, Vt) => {
    function Ot() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (tt => {
        const et = 16 * Math.random() | 0;
        return ("x" === tt ? et : 3 & et | 8).toString(16)
      }))
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  38899: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      static _CheckLimit(tt, et) {
        let Vt = Ot._LogLimitOutputs[tt];
        return Vt ? Vt.current++ : (Vt = {
          limit: et,
          current: 1
        }, Ot._LogLimitOutputs[tt] = Vt), Vt.current <= Vt.limit
      }
      static _GenerateLimitMessage(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Vt = Ot._LogLimitOutputs[tt];
        if (!Vt || !Ot.MessageLimitReached) return;
        const qt = this._Levels[et];
        Vt.current === Vt.limit && Ot[qt.name](Ot.MessageLimitReached.replace(/%LIMIT%/g, "" + Vt.limit).replace(/%TYPE%/g, qt.name ?? ""))
      }
      static _AddLogEntry(tt) {
        Ot._LogCache = tt + Ot._LogCache, Ot.OnNewCacheEntry && Ot.OnNewCacheEntry(tt)
      }
      static _FormatMessage(tt) {
        const et = tt => tt < 10 ? "0" + tt : "" + tt,
          Vt = new Date;
        return "[" + et(Vt.getHours()) + ":" + et(Vt.getMinutes()) + ":" + et(Vt.getSeconds()) + "]: " + tt
      }
      static _LogDisabled(tt, et) {}
      static _LogEnabled() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const qt = Array.isArray(et) ? et[0] : et;
        if (void 0 !== Vt && !Ot._CheckLimit(qt, Vt)) return;
        const Dt = Ot._FormatMessage(qt),
          mt = this._Levels[tt],
          dt = Array.isArray(et) ? et.slice(1) : [];
        mt.logFunc && mt.logFunc("BJS - " + Dt, ...dt);
        const jt = `<div style='color:${mt.color}'>${Dt}</div><br>`;
        Ot._AddLogEntry(jt), Ot._GenerateLimitMessage(qt, tt)
      }
      static get LogCache() {
        return Ot._LogCache
      }
      static ClearLogCache() {
        Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot.errorsCount = 0
      }
      static set LogLevels(tt) {
        Ot.Log = Ot._LogDisabled, Ot.Warn = Ot._LogDisabled, Ot.Error = Ot._LogDisabled;
        const et = [Ot.MessageLogLevel, Ot.WarningLogLevel, Ot.ErrorLogLevel];
        for (const Vt of et)
          if ((tt & Vt) === Vt) {
            const tt = this._Levels[Vt];
            Ot[tt.name] = Ot._LogEnabled.bind(Ot, Vt)
          }
      }
    }
    Ot.NoneLogLevel = 0, Ot.MessageLogLevel = 1, Ot.WarningLogLevel = 2, Ot.ErrorLogLevel = 4, Ot.AllLogLevel = 7, Ot.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot._Levels = [{}, {
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
    }], Ot.errorsCount = 0, Ot.Log = Ot._LogEnabled.bind(Ot, Ot.MessageLogLevel), Ot.Warn = Ot._LogEnabled.bind(Ot, Ot.WarningLogLevel), Ot.Error = Ot._LogEnabled.bind(Ot, Ot.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);