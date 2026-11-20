export const id = 233;
export const ids = [232, 233];
export const modules = {
  60305: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      RegisterShaderMaterial: () => Fz.e,
      ShaderMaterial: () => Fz.s,
      ShaderMaterialCreateFromSnippetAsync: () => Fz.h,
      ShaderMaterialParse: () => Fz.q,
      ShaderMaterialParseFromFileAsync: () => Fz.k,
      ShaderMaterialParseFromSnippetAsync: () => Fz.m
    });
    var Fz = sz(39614);
    (0, Fz.e)()
  },
  37191: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz
    });
    var Fz = sz(37199);
    class Wz {
      static GetPlanes(zz) {
        const tz = [];
        for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
        return Wz.GetPlanesToRef(zz, tz), tz
      }
      static GetNearPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[2], tz.normal.y = sz[7] + sz[6], tz.normal.z = sz[11] + sz[10], tz.d = sz[15] + sz[14], tz.normalize()
      }
      static GetFarPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[2], tz.normal.y = sz[7] - sz[6], tz.normal.z = sz[11] - sz[10], tz.d = sz[15] - sz[14], tz.normalize()
      }
      static GetLeftPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[0], tz.normal.y = sz[7] + sz[4], tz.normal.z = sz[11] + sz[8], tz.d = sz[15] + sz[12], tz.normalize()
      }
      static GetRightPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[0], tz.normal.y = sz[7] - sz[4], tz.normal.z = sz[11] - sz[8], tz.d = sz[15] - sz[12], tz.normalize()
      }
      static GetTopPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[1], tz.normal.y = sz[7] - sz[5], tz.normal.z = sz[11] - sz[9], tz.d = sz[15] - sz[13], tz.normalize()
      }
      static GetBottomPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[1], tz.normal.y = sz[7] + sz[5], tz.normal.z = sz[11] + sz[9], tz.d = sz[15] + sz[13], tz.normalize()
      }
      static GetPlanesToRef(zz, tz) {
        Wz.GetNearPlaneToRef(zz, tz[0]), Wz.GetFarPlaneToRef(zz, tz[1]), Wz.GetLeftPlaneToRef(zz, tz[2]), Wz.GetRightPlaneToRef(zz, tz[3]), Wz.GetTopPlaneToRef(zz, tz[4]), Wz.GetBottomPlaneToRef(zz, tz[5])
      }
      static IsPointInFrustum(zz, tz) {
        for (let sz = 0; sz < 6; sz++)
          if (tz[sz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37199: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(36475);
    class Wz {
      constructor(zz, tz, sz, Wz) {
        this.normal = new Fz.p(zz, tz, sz), this.d = Wz
      }
      hsz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wz(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let zz = this.normal.getHashCode();
        return zz = 397 * zz ^ this.d, zz
      }
      normalize() {
        const zz = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let tz = 0;
        return 0 !== zz && (tz = 1 / zz), this.normal.x *= tz, this.normal.y *= tz, this.normal.z *= tz, this.d *= tz, this
      }
      transform(zz) {
        const tz = Wz._TmpMatrix;
        zz.invertToRef(tz);
        const sz = tz.m,
          Fz = this.normal.x,
          Xz = this.normal.y,
          Oz = this.normal.z,
          oz = this.d,
          vz = Fz * sz[0] + Xz * sz[1] + Oz * sz[2] + oz * sz[3],
          Uz = Fz * sz[4] + Xz * sz[5] + Oz * sz[6] + oz * sz[7],
          Kz = Fz * sz[8] + Xz * sz[9] + Oz * sz[10] + oz * sz[11],
          uz = Fz * sz[12] + Xz * sz[13] + Oz * sz[14] + oz * sz[15];
        return new Wz(vz, Uz, Kz, uz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, tz, sz) {
        const Fz = tz.x - zz.x,
          Wz = tz.y - zz.y,
          Xz = tz.z - zz.z,
          Oz = sz.x - zz.x,
          oz = sz.y - zz.y,
          vz = sz.z - zz.z,
          Uz = Wz * vz - Xz * oz,
          Kz = Xz * Oz - Fz * vz,
          uz = Fz * oz - Wz * Oz,
          Nz = Math.sqrt(Uz * Uz + Kz * Kz + uz * uz);
        let bz;
        return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, tz) {
        return Fz.p.Dot(this.normal, zz) <= tz
      }
      signedDistanceTo(zz) {
        return Fz.p.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new Wz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, tz, sz) {
        const Fz = new Wz(0, 0, 0, 0);
        return Fz.copyFromPoints(zz, tz, sz), Fz
      }
      static FromPositionAndNormal(zz, tz) {
        const sz = new Wz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, tz, sz)
      }
      static FromPositionAndNormalToRef(zz, tz, sz) {
        return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, tz, sz) {
        const Wz = -(tz.x * zz.x + tz.y * zz.y + tz.z * zz.z);
        return Fz.p.Dot(sz, tz) + Wz
      }
    }
    Wz._TmpMatrix = Fz.e.Identity()
  },
  38091: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(38097);
    const Wz = (zz, tz, sz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : sz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(tz) : null;
    class Xz {
      static DeepCopy(zz, tz, sz, Xz) {
        let Oz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oz = function(zz) {
          const tz = [];
          do {
            const sz = Object.getOwnPropertyNames(zz);
            for (const zz of sz) - 1 === tz.indexOf(zz) && tz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return tz
        }(zz);
        for (const Uz of oz) {
          if ("_" === Uz[0] && (!Xz || -1 === Xz.indexOf(Uz))) continue;
          if (Uz.endsWith("Observable")) continue;
          if (sz && -1 !== sz.indexOf(Uz)) continue;
          const oz = zz[Uz],
            Kz = typeof oz;
          if ("function" !== Kz) try {
            if ("object" === Kz)
              if (oz instanceof Uint8Array) tz[Uz] = Uint8Array.from(oz);
              else if (oz instanceof Array) {
              if (tz[Uz] = [], oz.length > 0)
                if ("object" == typeof oz[0])
                  for (let zz = 0; zz < oz.length; zz++) {
                    const sz = Wz(oz[zz], tz, Oz); - 1 === tz[Uz].indexOf(sz) && tz[Uz].push(sz)
                  } else tz[Uz] = oz.slice(0)
            } else tz[Uz] = Wz(oz, tz, Oz);
            else tz[Uz] = oz
          } catch (vz) {
            Fz.e.Warn(vz.message)
          }
        }
      }
    }
  },
  37333: (zz, tz, sz) => {
    function Fz() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const tz = 16 * Math.random() | 0;
        return ("x" === zz ? tz : 3 & tz | 8).toString(16)
      }))
    }
    sz.d(tz, {
      d: () => Fz
    })
  },
  38097: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      static _CheckLimit(zz, tz) {
        let sz = Fz._LogLimitOutputs[zz];
        return sz ? sz.current++ : (sz = {
          limit: tz,
          current: 1
        }, Fz._LogLimitOutputs[zz] = sz), sz.current <= sz.limit
      }
      static _GenerateLimitMessage(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sz = Fz._LogLimitOutputs[zz];
        if (!sz || !Fz.MessageLimitReached) return;
        const Wz = this._Levels[tz];
        sz.current === sz.limit && Fz[Wz.name](Fz.MessageLimitReached.replace(/%LIMIT%/g, "" + sz.limit).replace(/%TYPE%/g, Wz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Fz._LogCache = zz + Fz._LogCache, Fz.OnNewCacheEntry && Fz.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const tz = zz => zz < 10 ? "0" + zz : "" + zz,
          sz = new Date;
        return "[" + tz(sz.getHours()) + ":" + tz(sz.getMinutes()) + ":" + tz(sz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, tz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Wz = Array.isArray(tz) ? tz[0] : tz;
        if (void 0 !== sz && !Fz._CheckLimit(Wz, sz)) return;
        const Xz = Fz._FormatMessage(Wz),
          Oz = this._Levels[zz],
          oz = Array.isArray(tz) ? tz.slice(1) : [];
        Oz.logFunc && Oz.logFunc("BJS - " + Xz, ...oz);
        const vz = `<div style='color:${Oz.color}'>${Xz}</div><br>`;
        Fz._AddLogEntry(vz), Fz._GenerateLimitMessage(Wz, zz)
      }
      static get LogCache() {
        return Fz._LogCache
      }
      static ClearLogCache() {
        Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz.errorsCount = 0
      }
      static set LogLevels(zz) {
        Fz.Log = Fz._LogDisabled, Fz.Warn = Fz._LogDisabled, Fz.Error = Fz._LogDisabled;
        const tz = [Fz.MessageLogLevel, Fz.WarningLogLevel, Fz.ErrorLogLevel];
        for (const sz of tz)
          if ((zz & sz) === sz) {
            const zz = this._Levels[sz];
            Fz[zz.name] = Fz._LogEnabled.bind(Fz, sz)
          }
      }
    }
    Fz.NoneLogLevel = 0, Fz.MessageLogLevel = 1, Fz.WarningLogLevel = 2, Fz.ErrorLogLevel = 4, Fz.AllLogLevel = 7, Fz.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz._Levels = [{}, {
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
    }], Fz.errorsCount = 0, Fz.Log = Fz._LogEnabled.bind(Fz, Fz.MessageLogLevel), Fz.Warn = Fz._LogEnabled.bind(Fz, Fz.WarningLogLevel), Fz.Error = Fz._LogEnabled.bind(Fz, Fz.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);