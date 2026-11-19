export const id = 233;
export const ids = [232, 233];
export const modules = {
  60322: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      RegisterShaderMaterial: () => Ez.b,
      ShaderMaterial: () => Ez.p,
      ShaderMaterialCreateFromSnippetAsync: () => Ez.f,
      ShaderMaterialParse: () => Ez.l,
      ShaderMaterialParseFromFileAsync: () => Ez.i,
      ShaderMaterialParseFromSnippetAsync: () => Ez.k
    });
    var Ez = bz(39634);
    (0, Ez.b)()
  },
  37235: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    var Ez = bz(37239);
    class nz {
      static GetPlanes(zz) {
        const uz = [];
        for (let bz = 0; bz < 6; bz++) uz.push(new Ez.b(0, 0, 0, 0));
        return nz.GetPlanesToRef(zz, uz), uz
      }
      static GetNearPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[2], uz.normal.y = bz[7] + bz[6], uz.normal.z = bz[11] + bz[10], uz.d = bz[15] + bz[14], uz.normalize()
      }
      static GetFarPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[2], uz.normal.y = bz[7] - bz[6], uz.normal.z = bz[11] - bz[10], uz.d = bz[15] - bz[14], uz.normalize()
      }
      static GetLeftPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[0], uz.normal.y = bz[7] + bz[4], uz.normal.z = bz[11] + bz[8], uz.d = bz[15] + bz[12], uz.normalize()
      }
      static GetRightPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[0], uz.normal.y = bz[7] - bz[4], uz.normal.z = bz[11] - bz[8], uz.d = bz[15] - bz[12], uz.normalize()
      }
      static GetTopPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[1], uz.normal.y = bz[7] - bz[5], uz.normal.z = bz[11] - bz[9], uz.d = bz[15] - bz[13], uz.normalize()
      }
      static GetBottomPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[1], uz.normal.y = bz[7] + bz[5], uz.normal.z = bz[11] + bz[9], uz.d = bz[15] + bz[13], uz.normalize()
      }
      static GetPlanesToRef(zz, uz) {
        nz.GetNearPlaneToRef(zz, uz[0]), nz.GetFarPlaneToRef(zz, uz[1]), nz.GetLeftPlaneToRef(zz, uz[2]), nz.GetRightPlaneToRef(zz, uz[3]), nz.GetTopPlaneToRef(zz, uz[4]), nz.GetBottomPlaneToRef(zz, uz[5])
      }
      static IsPointInFrustum(zz, uz) {
        for (let bz = 0; bz < 6; bz++)
          if (uz[bz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37239: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz
    });
    var Ez = bz(36519);
    class nz {
      constructor(zz, uz, bz, nz) {
        this.normal = new Ez.n(zz, uz, bz), this.d = nz
      }
      obz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nz(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let uz = 0;
        return 0 !== zz && (uz = 1 / zz), this.normal.x *= uz, this.normal.y *= uz, this.normal.z *= uz, this.d *= uz, this
      }
      transform(zz) {
        const uz = nz._TmpMatrix;
        zz.invertToRef(uz);
        const bz = uz.m,
          Ez = this.normal.x,
          iz = this.normal.y,
          lz = this.normal.z,
          Mz = this.d,
          tz = Ez * bz[0] + iz * bz[1] + lz * bz[2] + Mz * bz[3],
          Hz = Ez * bz[4] + iz * bz[5] + lz * bz[6] + Mz * bz[7],
          Oz = Ez * bz[8] + iz * bz[9] + lz * bz[10] + Mz * bz[11],
          pz = Ez * bz[12] + iz * bz[13] + lz * bz[14] + Mz * bz[15];
        return new nz(tz, Hz, Oz, pz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, uz, bz) {
        const Ez = uz.x - zz.x,
          nz = uz.y - zz.y,
          iz = uz.z - zz.z,
          lz = bz.x - zz.x,
          Mz = bz.y - zz.y,
          tz = bz.z - zz.z,
          Hz = nz * tz - iz * Mz,
          Oz = iz * lz - Ez * tz,
          pz = Ez * Mz - nz * lz,
          dz = Math.sqrt(Hz * Hz + Oz * Oz + pz * pz);
        let Fz;
        return Fz = 0 !== dz ? 1 / dz : 0, this.normal.x = Hz * Fz, this.normal.y = Oz * Fz, this.normal.z = pz * Fz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, uz) {
        return Ez.n.Dot(this.normal, zz) <= uz
      }
      signedDistanceTo(zz) {
        return Ez.n.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new nz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, uz, bz) {
        const Ez = new nz(0, 0, 0, 0);
        return Ez.copyFromPoints(zz, uz, bz), Ez
      }
      static FromPositionAndNormal(zz, uz) {
        const bz = new nz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, uz, bz)
      }
      static FromPositionAndNormalToRef(zz, uz, bz) {
        return bz.normal.euz(uz), bz.normal.normalize(), bz.d = -zz.dot(bz.normal), bz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, uz, bz) {
        const nz = -(uz.x * zz.x + uz.y * zz.y + uz.z * zz.z);
        return Ez.n.Dot(bz, uz) + nz
      }
    }
    nz._TmpMatrix = Ez.d.Identity()
  },
  38054: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(38060);
    const nz = (zz, uz, bz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : bz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(uz) : null;
    class iz {
      static DeepCopy(zz, uz, bz, iz) {
        let lz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Mz = function(zz) {
          const uz = [];
          do {
            const bz = Object.getOwnPropertyNames(zz);
            for (const zz of bz) - 1 === uz.indexOf(zz) && uz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return uz
        }(zz);
        for (const Hz of Mz) {
          if ("_" === Hz[0] && (!iz || -1 === iz.indexOf(Hz))) continue;
          if (Hz.endsWith("Observable")) continue;
          if (bz && -1 !== bz.indexOf(Hz)) continue;
          const Mz = zz[Hz],
            Oz = typeof Mz;
          if ("function" !== Oz) try {
            if ("object" === Oz)
              if (Mz instanceof Uint8Array) uz[Hz] = Uint8Array.from(Mz);
              else if (Mz instanceof Array) {
              if (uz[Hz] = [], Mz.length > 0)
                if ("object" == typeof Mz[0])
                  for (let zz = 0; zz < Mz.length; zz++) {
                    const bz = nz(Mz[zz], uz, lz); - 1 === uz[Hz].indexOf(bz) && uz[Hz].push(bz)
                  } else uz[Hz] = Mz.slice(0)
            } else uz[Hz] = nz(Mz, uz, lz);
            else uz[Hz] = Mz
          } catch (tz) {
            Ez.e.Warn(tz.message)
          }
        }
      }
    }
  },
  37335: (zz, uz, bz) => {
    function Ez() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const uz = 16 * Math.random() | 0;
        return ("x" === zz ? uz : 3 & uz | 8).toString(16)
      }))
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  38060: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      static _CheckLimit(zz, uz) {
        let bz = Ez._LogLimitOutputs[zz];
        return bz ? bz.current++ : (bz = {
          limit: uz,
          current: 1
        }, Ez._LogLimitOutputs[zz] = bz), bz.current <= bz.limit
      }
      static _GenerateLimitMessage(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const bz = Ez._LogLimitOutputs[zz];
        if (!bz || !Ez.MessageLimitReached) return;
        const nz = this._Levels[uz];
        bz.current === bz.limit && Ez[nz.name](Ez.MessageLimitReached.replace(/%LIMIT%/g, "" + bz.limit).replace(/%TYPE%/g, nz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Ez._LogCache = zz + Ez._LogCache, Ez.OnNewCacheEntry && Ez.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const uz = zz => zz < 10 ? "0" + zz : "" + zz,
          bz = new Date;
        return "[" + uz(bz.getHours()) + ":" + uz(bz.getMinutes()) + ":" + uz(bz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, uz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const nz = Array.isArray(uz) ? uz[0] : uz;
        if (void 0 !== bz && !Ez._CheckLimit(nz, bz)) return;
        const iz = Ez._FormatMessage(nz),
          lz = this._Levels[zz],
          Mz = Array.isArray(uz) ? uz.slice(1) : [];
        lz.logFunc && lz.logFunc("BJS - " + iz, ...Mz);
        const tz = `<div style='color:${lz.color}'>${iz}</div><br>`;
        Ez._AddLogEntry(tz), Ez._GenerateLimitMessage(nz, zz)
      }
      static get LogCache() {
        return Ez._LogCache
      }
      static ClearLogCache() {
        Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez.errorsCount = 0
      }
      static set LogLevels(zz) {
        Ez.Log = Ez._LogDisabled, Ez.Warn = Ez._LogDisabled, Ez.Error = Ez._LogDisabled;
        const uz = [Ez.MessageLogLevel, Ez.WarningLogLevel, Ez.ErrorLogLevel];
        for (const bz of uz)
          if ((zz & bz) === bz) {
            const zz = this._Levels[bz];
            Ez[zz.name] = Ez._LogEnabled.bind(Ez, bz)
          }
      }
    }
    Ez.NoneLogLevel = 0, Ez.MessageLogLevel = 1, Ez.WarningLogLevel = 2, Ez.ErrorLogLevel = 4, Ez.AllLogLevel = 7, Ez.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez._Levels = [{}, {
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
    }], Ez.errorsCount = 0, Ez.Log = Ez._LogEnabled.bind(Ez, Ez.MessageLogLevel), Ez.Warn = Ez._LogEnabled.bind(Ez, Ez.WarningLogLevel), Ez.Error = Ez._LogEnabled.bind(Ez, Ez.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);