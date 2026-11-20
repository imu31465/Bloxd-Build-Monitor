export const id = 233;
export const ids = [232, 233];
export const modules = {
  60995: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      RegisterShaderMaterial: () => Eu.d,
      ShaderMaterial: () => Eu.s,
      ShaderMaterialCreateFromSnippetAsync: () => Eu.g,
      ShaderMaterialParse: () => Eu.r,
      ShaderMaterialParseFromFileAsync: () => Eu.k,
      ShaderMaterialParseFromSnippetAsync: () => Eu.n
    });
    var Eu = yu(40047);
    (0, Eu.d)()
  },
  37525: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(37528);
    class Ku {
      static GetPlanes(uu) {
        const Ru = [];
        for (let yu = 0; yu < 6; yu++) Ru.push(new Eu.d(0, 0, 0, 0));
        return Ku.GetPlanesToRef(uu, Ru), Ru
      }
      static GetNearPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[2], Ru.normal.y = yu[7] + yu[6], Ru.normal.z = yu[11] + yu[10], Ru.d = yu[15] + yu[14], Ru.normalize()
      }
      static GetFarPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[2], Ru.normal.y = yu[7] - yu[6], Ru.normal.z = yu[11] - yu[10], Ru.d = yu[15] - yu[14], Ru.normalize()
      }
      static GetLeftPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[0], Ru.normal.y = yu[7] + yu[4], Ru.normal.z = yu[11] + yu[8], Ru.d = yu[15] + yu[12], Ru.normalize()
      }
      static GetRightPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[0], Ru.normal.y = yu[7] - yu[4], Ru.normal.z = yu[11] - yu[8], Ru.d = yu[15] - yu[12], Ru.normalize()
      }
      static GetTopPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[1], Ru.normal.y = yu[7] - yu[5], Ru.normal.z = yu[11] - yu[9], Ru.d = yu[15] - yu[13], Ru.normalize()
      }
      static GetBottomPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[1], Ru.normal.y = yu[7] + yu[5], Ru.normal.z = yu[11] + yu[9], Ru.d = yu[15] + yu[13], Ru.normalize()
      }
      static GetPlanesToRef(uu, Ru) {
        Ku.GetNearPlaneToRef(uu, Ru[0]), Ku.GetFarPlaneToRef(uu, Ru[1]), Ku.GetLeftPlaneToRef(uu, Ru[2]), Ku.GetRightPlaneToRef(uu, Ru[3]), Ku.GetTopPlaneToRef(uu, Ru[4]), Ku.GetBottomPlaneToRef(uu, Ru[5])
      }
      static IsPointInFrustum(uu, Ru) {
        for (let yu = 0; yu < 6; yu++)
          if (Ru[yu].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  37528: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(36830);
    class Ku {
      constructor(uu, Ru, yu, Ku) {
        this.normal = new Eu.p(uu, Ru, yu), this.d = Ku
      }
      AEu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ku(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let uu = this.normal.getHashCode();
        return uu = 397 * uu ^ this.d, uu
      }
      normalize() {
        const uu = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Ru = 0;
        return 0 !== uu && (Ru = 1 / uu), this.normal.x *= Ru, this.normal.y *= Ru, this.normal.z *= Ru, this.d *= Ru, this
      }
      transform(uu) {
        const Ru = Ku._TmpMatrix;
        uu.invertToRef(Ru);
        const yu = Ru.m,
          Eu = this.normal.x,
          Qu = this.normal.y,
          mu = this.normal.z,
          Ju = this.d,
          Nu = Eu * yu[0] + Qu * yu[1] + mu * yu[2] + Ju * yu[3],
          Xu = Eu * yu[4] + Qu * yu[5] + mu * yu[6] + Ju * yu[7],
          Vu = Eu * yu[8] + Qu * yu[9] + mu * yu[10] + Ju * yu[11],
          ru = Eu * yu[12] + Qu * yu[13] + mu * yu[14] + Ju * yu[15];
        return new Ku(Nu, Xu, Vu, ru)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Ru, yu) {
        const Eu = Ru.x - uu.x,
          Ku = Ru.y - uu.y,
          Qu = Ru.z - uu.z,
          mu = yu.x - uu.x,
          Ju = yu.y - uu.y,
          Nu = yu.z - uu.z,
          Xu = Ku * Nu - Qu * Ju,
          Vu = Qu * mu - Eu * Nu,
          ru = Eu * Ju - Ku * mu,
          Bu = Math.sqrt(Xu * Xu + Vu * Vu + ru * ru);
        let xu;
        return xu = 0 !== Bu ? 1 / Bu : 0, this.normal.x = Xu * xu, this.normal.y = Vu * xu, this.normal.z = ru * xu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Ru) {
        return Eu.p.Dot(this.normal, uu) <= Ru
      }
      signedDistanceTo(uu) {
        return Eu.p.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Ku(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Ru, yu) {
        const Eu = new Ku(0, 0, 0, 0);
        return Eu.copyFromPoints(uu, Ru, yu), Eu
      }
      static FromPositionAndNormal(uu, Ru) {
        const yu = new Ku(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Ru, yu)
      }
      static FromPositionAndNormalToRef(uu, Ru, yu) {
        return yu.normal.Oyu(Ru), yu.normal.normalize(), yu.d = -uu.dot(yu.normal), yu
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Ru, yu) {
        const Ku = -(Ru.x * uu.x + Ru.y * uu.y + Ru.z * uu.z);
        return Eu.p.Dot(yu, Ru) + Ku
      }
    }
    Ku._TmpMatrix = Eu.d.Identity()
  },
  38444: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(38448);
    const Ku = (uu, Ru, yu) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : yu && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Ru) : null;
    class Qu {
      static DeepCopy(uu, Ru, yu, Qu) {
        let mu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ju = function(uu) {
          const Ru = [];
          do {
            const yu = Object.getOwnPropertyNames(uu);
            for (const uu of yu) - 1 === Ru.indexOf(uu) && Ru.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Ru
        }(uu);
        for (const Xu of Ju) {
          if ("_" === Xu[0] && (!Qu || -1 === Qu.indexOf(Xu))) continue;
          if (Xu.endsWith("Observable")) continue;
          if (yu && -1 !== yu.indexOf(Xu)) continue;
          const Ju = uu[Xu],
            Vu = typeof Ju;
          if ("function" !== Vu) try {
            if ("object" === Vu)
              if (Ju instanceof Uint8Array) Ru[Xu] = Uint8Array.from(Ju);
              else if (Ju instanceof Array) {
              if (Ru[Xu] = [], Ju.length > 0)
                if ("object" == typeof Ju[0])
                  for (let uu = 0; uu < Ju.length; uu++) {
                    const yu = Ku(Ju[uu], Ru, mu); - 1 === Ru[Xu].indexOf(yu) && Ru[Xu].push(yu)
                  } else Ru[Xu] = Ju.slice(0)
            } else Ru[Xu] = Ku(Ju, Ru, mu);
            else Ru[Xu] = Ju
          } catch (Nu) {
            Eu.e.Warn(Nu.message)
          }
        }
      }
    }
  },
  37665: (uu, Ru, yu) => {
    function Eu() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Ru = 16 * Math.random() | 0;
        return ("x" === uu ? Ru : 3 & Ru | 8).toString(16)
      }))
    }
    yu.d(Ru, {
      b: () => Eu
    })
  },
  38448: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static _CheckLimit(uu, Ru) {
        let yu = Eu._LogLimitOutputs[uu];
        return yu ? yu.current++ : (yu = {
          limit: Ru,
          current: 1
        }, Eu._LogLimitOutputs[uu] = yu), yu.current <= yu.limit
      }
      static _GenerateLimitMessage(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const yu = Eu._LogLimitOutputs[uu];
        if (!yu || !Eu.MessageLimitReached) return;
        const Ku = this._Levels[Ru];
        yu.current === yu.limit && Eu[Ku.name](Eu.MessageLimitReached.replace(/%LIMIT%/g, "" + yu.limit).replace(/%TYPE%/g, Ku.name ?? ""))
      }
      static _AddLogEntry(uu) {
        Eu._LogCache = uu + Eu._LogCache, Eu.OnNewCacheEntry && Eu.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Ru = uu => uu < 10 ? "0" + uu : "" + uu,
          yu = new Date;
        return "[" + Ru(yu.getHours()) + ":" + Ru(yu.getMinutes()) + ":" + Ru(yu.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Ru) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Ku = Array.isArray(Ru) ? Ru[0] : Ru;
        if (void 0 !== yu && !Eu._CheckLimit(Ku, yu)) return;
        const Qu = Eu._FormatMessage(Ku),
          mu = this._Levels[uu],
          Ju = Array.isArray(Ru) ? Ru.slice(1) : [];
        mu.logFunc && mu.logFunc("BJS - " + Qu, ...Ju);
        const Nu = `<div style='color:${mu.color}'>${Qu}</div><br>`;
        Eu._AddLogEntry(Nu), Eu._GenerateLimitMessage(Ku, uu)
      }
      static get LogCache() {
        return Eu._LogCache
      }
      static ClearLogCache() {
        Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu.errorsCount = 0
      }
      static set LogLevels(uu) {
        Eu.Log = Eu._LogDisabled, Eu.Warn = Eu._LogDisabled, Eu.Error = Eu._LogDisabled;
        const Ru = [Eu.MessageLogLevel, Eu.WarningLogLevel, Eu.ErrorLogLevel];
        for (const yu of Ru)
          if ((uu & yu) === yu) {
            const uu = this._Levels[yu];
            Eu[uu.name] = Eu._LogEnabled.bind(Eu, yu)
          }
      }
    }
    Eu.NoneLogLevel = 0, Eu.MessageLogLevel = 1, Eu.WarningLogLevel = 2, Eu.ErrorLogLevel = 4, Eu.AllLogLevel = 7, Eu.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu._Levels = [{}, {
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
    }], Eu.errorsCount = 0, Eu.Log = Eu._LogEnabled.bind(Eu, Eu.MessageLogLevel), Eu.Warn = Eu._LogEnabled.bind(Eu, Eu.WarningLogLevel), Eu.Error = Eu._LogEnabled.bind(Eu, Eu.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);