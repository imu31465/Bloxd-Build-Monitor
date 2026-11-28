export const id = 273;
export const ids = [273];
export const modules = {
  39297: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(39306);
    class Fd {
      static GetPlanes(dd) {
        const Od = [];
        for (let md = 0; md < 6; md++) Od.push(new Wd.d(0, 0, 0, 0));
        return Fd.GetPlanesToRef(dd, Od), Od
      }
      static GetNearPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[2], Od.normal.y = md[7] + md[6], Od.normal.z = md[11] + md[10], Od.d = md[15] + md[14], Od.normalize()
      }
      static GetFarPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[2], Od.normal.y = md[7] - md[6], Od.normal.z = md[11] - md[10], Od.d = md[15] - md[14], Od.normalize()
      }
      static GetLeftPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[0], Od.normal.y = md[7] + md[4], Od.normal.z = md[11] + md[8], Od.d = md[15] + md[12], Od.normalize()
      }
      static GetRightPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[0], Od.normal.y = md[7] - md[4], Od.normal.z = md[11] - md[8], Od.d = md[15] - md[12], Od.normalize()
      }
      static GetTopPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[1], Od.normal.y = md[7] - md[5], Od.normal.z = md[11] - md[9], Od.d = md[15] - md[13], Od.normalize()
      }
      static GetBottomPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[1], Od.normal.y = md[7] + md[5], Od.normal.z = md[11] + md[9], Od.d = md[15] + md[13], Od.normalize()
      }
      static GetPlanesToRef(dd, Od) {
        Fd.GetNearPlaneToRef(dd, Od[0]), Fd.GetFarPlaneToRef(dd, Od[1]), Fd.GetLeftPlaneToRef(dd, Od[2]), Fd.GetRightPlaneToRef(dd, Od[3]), Fd.GetTopPlaneToRef(dd, Od[4]), Fd.GetBottomPlaneToRef(dd, Od[5])
      }
      static IsPointInFrustum(dd, Od) {
        for (let md = 0; md < 6; md++)
          if (Od[md].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  39306: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(38636);
    class Fd {
      constructor(dd, Od, md, Fd) {
        this.normal = new Wd.j(dd, Od, md), this.d = Fd
      }
      RRd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Fd(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let dd = this.normal.getHashCode();
        return dd = 397 * dd ^ this.d, dd
      }
      normalize() {
        const dd = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Od = 0;
        return 0 !== dd && (Od = 1 / dd), this.normal.x *= Od, this.normal.y *= Od, this.normal.z *= Od, this.d *= Od, this
      }
      transform(dd) {
        const Od = Fd._TmpMatrix;
        dd.invertToRef(Od);
        const md = Od.m,
          Wd = this.normal.x,
          Rd = this.normal.y,
          Xd = this.normal.z,
          Kd = this.d,
          hd = Wd * md[0] + Rd * md[1] + Xd * md[2] + Kd * md[3],
          vd = Wd * md[4] + Rd * md[5] + Xd * md[6] + Kd * md[7],
          Qd = Wd * md[8] + Rd * md[9] + Xd * md[10] + Kd * md[11],
          td = Wd * md[12] + Rd * md[13] + Xd * md[14] + Kd * md[15];
        return new Fd(hd, vd, Qd, td)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Od, md) {
        const Wd = Od.x - dd.x,
          Fd = Od.y - dd.y,
          Rd = Od.z - dd.z,
          Xd = md.x - dd.x,
          Kd = md.y - dd.y,
          hd = md.z - dd.z,
          vd = Fd * hd - Rd * Kd,
          Qd = Rd * Xd - Wd * hd,
          td = Wd * Kd - Fd * Xd,
          od = Math.sqrt(vd * vd + Qd * Qd + td * td);
        let Nd;
        return Nd = 0 !== od ? 1 / od : 0, this.normal.x = vd * Nd, this.normal.y = Qd * Nd, this.normal.z = td * Nd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Od) {
        return Wd.j.Dot(this.normal, dd) <= Od
      }
      signedDistanceTo(dd) {
        return Wd.j.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Fd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Od, md) {
        const Wd = new Fd(0, 0, 0, 0);
        return Wd.copyFromPoints(dd, Od, md), Wd
      }
      static FromPositionAndNormal(dd, Od) {
        const md = new Fd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Od, md)
      }
      static FromPositionAndNormalToRef(dd, Od, md) {
        return md.normal.Bx(Od), md.normal.normalize(), md.d = -dd.dot(md.normal), md
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Od, md) {
        const Fd = -(Od.x * dd.x + Od.y * dd.y + Od.z * dd.z);
        return Wd.j.Dot(md, Od) + Fd
      }
    }
    Fd._TmpMatrix = Wd.d.Identity()
  },
  40260: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(40262);
    const Fd = (dd, Od, md) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : md && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Od) : null;
    class Rd {
      static DeepCopy(dd, Od, md, Rd) {
        let Xd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Kd = function(dd) {
          const Od = [];
          do {
            const md = Object.getOwnPropertyNames(dd);
            for (const dd of md) - 1 === Od.indexOf(dd) && Od.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Od
        }(dd);
        for (const vd of Kd) {
          if ("_" === vd[0] && (!Rd || -1 === Rd.indexOf(vd))) continue;
          if (vd.endsWith("Observable")) continue;
          if (md && -1 !== md.indexOf(vd)) continue;
          const Kd = dd[vd],
            Qd = typeof Kd;
          if ("function" !== Qd) try {
            if ("object" === Qd)
              if (Kd instanceof Uint8Array) Od[vd] = Uint8Array.from(Kd);
              else if (Kd instanceof Array) {
              if (Od[vd] = [], Kd.length > 0)
                if ("object" == typeof Kd[0])
                  for (let dd = 0; dd < Kd.length; dd++) {
                    const md = Fd(Kd[dd], Od, Xd); - 1 === Od[vd].indexOf(md) && Od[vd].push(md)
                  } else Od[vd] = Kd.slice(0)
            } else Od[vd] = Fd(Kd, Od, Xd);
            else Od[vd] = Kd
          } catch (hd) {
            Wd.c.Warn(hd.message)
          }
        }
      }
    }
  },
  39461: (dd, Od, md) => {
    function Wd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Od = 16 * Math.random() | 0;
        return ("x" === dd ? Od : 3 & Od | 8).toString(16)
      }))
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  40262: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      static _CheckLimit(dd, Od) {
        let md = Wd._LogLimitOutputs[dd];
        return md ? md.current++ : (md = {
          limit: Od,
          current: 1
        }, Wd._LogLimitOutputs[dd] = md), md.current <= md.limit
      }
      static _GenerateLimitMessage(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const md = Wd._LogLimitOutputs[dd];
        if (!md || !Wd.MessageLimitReached) return;
        const Fd = this._Levels[Od];
        md.current === md.limit && Wd[Fd.name](Wd.MessageLimitReached.replace(/%LIMIT%/g, "" + md.limit).replace(/%TYPE%/g, Fd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        Wd._LogCache = dd + Wd._LogCache, Wd.OnNewCacheEntry && Wd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Od = dd => dd < 10 ? "0" + dd : "" + dd,
          md = new Date;
        return "[" + Od(md.getHours()) + ":" + Od(md.getMinutes()) + ":" + Od(md.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Od) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Fd = Array.isArray(Od) ? Od[0] : Od;
        if (void 0 !== md && !Wd._CheckLimit(Fd, md)) return;
        const Rd = Wd._FormatMessage(Fd),
          Xd = this._Levels[dd],
          Kd = Array.isArray(Od) ? Od.slice(1) : [];
        Xd.logFunc && Xd.logFunc("BJS - " + Rd, ...Kd);
        const hd = `<div style='color:${Xd.color}'>${Rd}</div><br>`;
        Wd._AddLogEntry(hd), Wd._GenerateLimitMessage(Fd, dd)
      }
      static get LogCache() {
        return Wd._LogCache
      }
      static ClearLogCache() {
        Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd.errorsCount = 0
      }
      static set LogLevels(dd) {
        Wd.Log = Wd._LogDisabled, Wd.Warn = Wd._LogDisabled, Wd.Error = Wd._LogDisabled;
        const Od = [Wd.MessageLogLevel, Wd.WarningLogLevel, Wd.ErrorLogLevel];
        for (const md of Od)
          if ((dd & md) === md) {
            const dd = this._Levels[md];
            Wd[dd.name] = Wd._LogEnabled.bind(Wd, md)
          }
      }
    }
    Wd.NoneLogLevel = 0, Wd.MessageLogLevel = 1, Wd.WarningLogLevel = 2, Wd.ErrorLogLevel = 4, Wd.AllLogLevel = 7, Wd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd._Levels = [{}, {
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
    }], Wd.errorsCount = 0, Wd.Log = Wd._LogEnabled.bind(Wd, Wd.MessageLogLevel), Wd.Warn = Wd._LogEnabled.bind(Wd, Wd.WarningLogLevel), Wd.Error = Wd._LogEnabled.bind(Wd, Wd.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);