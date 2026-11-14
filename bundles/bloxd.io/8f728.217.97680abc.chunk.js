export const id = 217;
export const ids = [217];
export const modules = {
  36327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(36329);
    class Ic {
      static GetPlanes(cB) {
        const Bc = [];
        for (let nc = 0; nc < 6; nc++) Bc.push(new Vc.d(0, 0, 0, 0));
        return Ic.GetPlanesToRef(cB, Bc), Bc
      }
      static GetNearPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[2], Bc.normal.y = nc[7] + nc[6], Bc.normal.z = nc[11] + nc[10], Bc.d = nc[15] + nc[14], Bc.normalize()
      }
      static GetFarPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[2], Bc.normal.y = nc[7] - nc[6], Bc.normal.z = nc[11] - nc[10], Bc.d = nc[15] - nc[14], Bc.normalize()
      }
      static GetLeftPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[0], Bc.normal.y = nc[7] + nc[4], Bc.normal.z = nc[11] + nc[8], Bc.d = nc[15] + nc[12], Bc.normalize()
      }
      static GetRightPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[0], Bc.normal.y = nc[7] - nc[4], Bc.normal.z = nc[11] - nc[8], Bc.d = nc[15] - nc[12], Bc.normalize()
      }
      static GetTopPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[1], Bc.normal.y = nc[7] - nc[5], Bc.normal.z = nc[11] - nc[9], Bc.d = nc[15] - nc[13], Bc.normalize()
      }
      static GetBottomPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[1], Bc.normal.y = nc[7] + nc[5], Bc.normal.z = nc[11] + nc[9], Bc.d = nc[15] + nc[13], Bc.normalize()
      }
      static GetPlanesToRef(cB, Bc) {
        Ic.GetNearPlaneToRef(cB, Bc[0]), Ic.GetFarPlaneToRef(cB, Bc[1]), Ic.GetLeftPlaneToRef(cB, Bc[2]), Ic.GetRightPlaneToRef(cB, Bc[3]), Ic.GetTopPlaneToRef(cB, Bc[4]), Ic.GetBottomPlaneToRef(cB, Bc[5])
      }
      static IsPointInFrustum(cB, Bc) {
        for (let nc = 0; nc < 6; nc++)
          if (Bc[nc].dotCoordinate(cB) < 0) return !1;
        return !0
      }
    }
  },
  36329: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(35756);
    class Ic {
      constructor(cB, Bc, nc, Ic) {
        this.normal = new Vc.p(cB, Bc, nc), this.d = Ic
      }
      KPc() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ic(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let cB = this.normal.getHashCode();
        return cB = 397 * cB ^ this.d, cB
      }
      normalize() {
        const cB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Bc = 0;
        return 0 !== cB && (Bc = 1 / cB), this.normal.x *= Bc, this.normal.y *= Bc, this.normal.z *= Bc, this.d *= Bc, this
      }
      transform(cB) {
        const Bc = Ic._TmpMatrix;
        cB.invertToRef(Bc);
        const nc = Bc.m,
          Vc = this.normal.x,
          rB = this.normal.y,
          uc = this.normal.z,
          sc = this.d,
          Mc = Vc * nc[0] + rB * nc[1] + uc * nc[2] + sc * nc[3],
          Pc = Vc * nc[4] + rB * nc[5] + uc * nc[6] + sc * nc[7],
          qB = Vc * nc[8] + rB * nc[9] + uc * nc[10] + sc * nc[11],
          Oc = Vc * nc[12] + rB * nc[13] + uc * nc[14] + sc * nc[15];
        return new Ic(Mc, Pc, qB, Oc)
      }
      dotCoordinate(cB) {
        return this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z + this.d
      }
      copyFromPoints(cB, Bc, nc) {
        const Vc = Bc.x - cB.x,
          Ic = Bc.y - cB.y,
          rB = Bc.z - cB.z,
          uc = nc.x - cB.x,
          sc = nc.y - cB.y,
          Mc = nc.z - cB.z,
          Pc = Ic * Mc - rB * sc,
          qB = rB * uc - Vc * Mc,
          Oc = Vc * sc - Ic * uc,
          Tc = Math.sqrt(Pc * Pc + qB * qB + Oc * Oc);
        let fc;
        return fc = 0 !== Tc ? 1 / Tc : 0, this.normal.x = Pc * fc, this.normal.y = qB * fc, this.normal.z = Oc * fc, this.d = -(this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z), this
      }
      isFrontFacingTo(cB, Bc) {
        return Vc.p.Dot(this.normal, cB) <= Bc
      }
      signedDistanceTo(cB) {
        return Vc.p.Dot(cB, this.normal) + this.d
      }
      static FromArray(cB) {
        return new Ic(cB[0], cB[1], cB[2], cB[3])
      }
      static FromPoints(cB, Bc, nc) {
        const Vc = new Ic(0, 0, 0, 0);
        return Vc.copyFromPoints(cB, Bc, nc), Vc
      }
      static FromPositionAndNormal(cB, Bc) {
        const nc = new Ic(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(cB, Bc, nc)
      }
      static FromPositionAndNormalToRef(cB, Bc, nc) {
        return nc.normal.qqc(Bc), nc.normal.normalize(), nc.d = -cB.dot(nc.normal), nc
      }
      static SignedDistanceToPlaneFromPositionAndNormal(cB, Bc, nc) {
        const Ic = -(Bc.x * cB.x + Bc.y * cB.y + Bc.z * cB.z);
        return Vc.p.Dot(nc, Bc) + Ic
      }
    }
    Ic._TmpMatrix = Vc.d.Identity()
  },
  37185: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(37191);
    const Ic = (cB, Bc, nc) => cB ? cB.getClassName && "Mesh" === cB.getClassName() ? null : !cB.getClassName || "SubMesh" !== cB.getClassName() && "PhysicsBody" !== cB.getClassName() ? cB.clone ? cB.clone() : Array.isArray(cB) ? cB.slice() : nc && "object" === typeof cB ? {
      ...cB
    } : null : cB.clone(Bc) : null;
    class rB {
      static DeepCopy(cB, Bc, nc, rB) {
        let uc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sc = function(cB) {
          const Bc = [];
          do {
            const nc = Object.getOwnPropertyNames(cB);
            for (const cB of nc) - 1 === Bc.indexOf(cB) && Bc.push(cB)
          } while (cB = Object.getPrototypeOf(cB));
          return Bc
        }(cB);
        for (const Pc of sc) {
          if ("_" === Pc[0] && (!rB || -1 === rB.indexOf(Pc))) continue;
          if (Pc.endsWith("Observable")) continue;
          if (nc && -1 !== nc.indexOf(Pc)) continue;
          const sc = cB[Pc],
            qB = typeof sc;
          if ("function" !== qB) try {
            if ("object" === qB)
              if (sc instanceof Uint8Array) Bc[Pc] = Uint8Array.from(sc);
              else if (sc instanceof Array) {
              if (Bc[Pc] = [], sc.length > 0)
                if ("object" == typeof sc[0])
                  for (let cB = 0; cB < sc.length; cB++) {
                    const nc = Ic(sc[cB], Bc, uc); - 1 === Bc[Pc].indexOf(nc) && Bc[Pc].push(nc)
                  } else Bc[Pc] = sc.slice(0)
            } else Bc[Pc] = Ic(sc, Bc, uc);
            else Bc[Pc] = sc
          } catch (Mc) {
            Vc.c.Warn(Mc.message)
          }
        }
      }
    }
  },
  36472: (cB, Bc, nc) => {
    function Vc() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (cB => {
        const Bc = 16 * Math.random() | 0;
        return ("x" === cB ? Bc : 3 & Bc | 8).toString(16)
      }))
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  37191: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      static _CheckLimit(cB, Bc) {
        let nc = Vc._LogLimitOutputs[cB];
        return nc ? nc.current++ : (nc = {
          limit: Bc,
          current: 1
        }, Vc._LogLimitOutputs[cB] = nc), nc.current <= nc.limit
      }
      static _GenerateLimitMessage(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const nc = Vc._LogLimitOutputs[cB];
        if (!nc || !Vc.MessageLimitReached) return;
        const Ic = this._Levels[Bc];
        nc.current === nc.limit && Vc[Ic.name](Vc.MessageLimitReached.replace(/%LIMIT%/g, "" + nc.limit).replace(/%TYPE%/g, Ic.name ?? ""))
      }
      static _AddLogEntry(cB) {
        Vc._LogCache = cB + Vc._LogCache, Vc.OnNewCacheEntry && Vc.OnNewCacheEntry(cB)
      }
      static _FormatMessage(cB) {
        const Bc = cB => cB < 10 ? "0" + cB : "" + cB,
          nc = new Date;
        return "[" + Bc(nc.getHours()) + ":" + Bc(nc.getMinutes()) + ":" + Bc(nc.getSeconds()) + "]: " + cB
      }
      static _LogDisabled(cB, Bc) {}
      static _LogEnabled() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Ic = Array.isArray(Bc) ? Bc[0] : Bc;
        if (void 0 !== nc && !Vc._CheckLimit(Ic, nc)) return;
        const rB = Vc._FormatMessage(Ic),
          uc = this._Levels[cB],
          sc = Array.isArray(Bc) ? Bc.slice(1) : [];
        uc.logFunc && uc.logFunc("BJS - " + rB, ...sc);
        const Mc = `<div style='color:${uc.color}'>${rB}</div><br>`;
        Vc._AddLogEntry(Mc), Vc._GenerateLimitMessage(Ic, cB)
      }
      static get LogCache() {
        return Vc._LogCache
      }
      static ClearLogCache() {
        Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc.errorsCount = 0
      }
      static set LogLevels(cB) {
        Vc.Log = Vc._LogDisabled, Vc.Warn = Vc._LogDisabled, Vc.Error = Vc._LogDisabled;
        const Bc = [Vc.MessageLogLevel, Vc.WarningLogLevel, Vc.ErrorLogLevel];
        for (const nc of Bc)
          if ((cB & nc) === nc) {
            const cB = this._Levels[nc];
            Vc[cB.name] = Vc._LogEnabled.bind(Vc, nc)
          }
      }
    }
    Vc.NoneLogLevel = 0, Vc.MessageLogLevel = 1, Vc.WarningLogLevel = 2, Vc.ErrorLogLevel = 4, Vc.AllLogLevel = 7, Vc.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc._Levels = [{}, {
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
    }], Vc.errorsCount = 0, Vc.Log = Vc._LogEnabled.bind(Vc, Vc.MessageLogLevel), Vc.Warn = Vc._LogEnabled.bind(Vc, Vc.WarningLogLevel), Vc.Error = Vc._LogEnabled.bind(Vc, Vc.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);