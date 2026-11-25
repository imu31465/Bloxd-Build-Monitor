export const id = 245;
export const ids = [244, 245];
export const modules = {
  61489: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      RegisterShaderMaterial: () => su.d,
      ShaderMaterial: () => su.q,
      ShaderMaterialCreateFromSnippetAsync: () => su.g,
      ShaderMaterialParse: () => su.m,
      ShaderMaterialParseFromFileAsync: () => su.i,
      ShaderMaterialParseFromSnippetAsync: () => su.j
    });
    var su = ju(40735);
    (0, su.d)()
  },
  38152: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(38154);
    class Uu {
      static GetPlanes(uu) {
        const Eu = [];
        for (let ju = 0; ju < 6; ju++) Eu.push(new su.d(0, 0, 0, 0));
        return Uu.GetPlanesToRef(uu, Eu), Eu
      }
      static GetNearPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[2], Eu.normal.y = ju[7] + ju[6], Eu.normal.z = ju[11] + ju[10], Eu.d = ju[15] + ju[14], Eu.normalize()
      }
      static GetFarPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[2], Eu.normal.y = ju[7] - ju[6], Eu.normal.z = ju[11] - ju[10], Eu.d = ju[15] - ju[14], Eu.normalize()
      }
      static GetLeftPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[0], Eu.normal.y = ju[7] + ju[4], Eu.normal.z = ju[11] + ju[8], Eu.d = ju[15] + ju[12], Eu.normalize()
      }
      static GetRightPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[0], Eu.normal.y = ju[7] - ju[4], Eu.normal.z = ju[11] - ju[8], Eu.d = ju[15] - ju[12], Eu.normalize()
      }
      static GetTopPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[1], Eu.normal.y = ju[7] - ju[5], Eu.normal.z = ju[11] - ju[9], Eu.d = ju[15] - ju[13], Eu.normalize()
      }
      static GetBottomPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[1], Eu.normal.y = ju[7] + ju[5], Eu.normal.z = ju[11] + ju[9], Eu.d = ju[15] + ju[13], Eu.normalize()
      }
      static GetPlanesToRef(uu, Eu) {
        Uu.GetNearPlaneToRef(uu, Eu[0]), Uu.GetFarPlaneToRef(uu, Eu[1]), Uu.GetLeftPlaneToRef(uu, Eu[2]), Uu.GetRightPlaneToRef(uu, Eu[3]), Uu.GetTopPlaneToRef(uu, Eu[4]), Uu.GetBottomPlaneToRef(uu, Eu[5])
      }
      static IsPointInFrustum(uu, Eu) {
        for (let ju = 0; ju < 6; ju++)
          if (Eu[ju].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  38154: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(37494);
    class Uu {
      constructor(uu, Eu, ju, Uu) {
        this.normal = new su.t(uu, Eu, ju), this.d = Uu
      }
      Osu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Uu(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Eu = 0;
        return 0 !== uu && (Eu = 1 / uu), this.normal.x *= Eu, this.normal.y *= Eu, this.normal.z *= Eu, this.d *= Eu, this
      }
      transform(uu) {
        const Eu = Uu._TmpMatrix;
        uu.invertToRef(Eu);
        const ju = Eu.m,
          su = this.normal.x,
          Zu = this.normal.y,
          Xu = this.normal.z,
          lu = this.d,
          qu = su * ju[0] + Zu * ju[1] + Xu * ju[2] + lu * ju[3],
          fu = su * ju[4] + Zu * ju[5] + Xu * ju[6] + lu * ju[7],
          Cu = su * ju[8] + Zu * ju[9] + Xu * ju[10] + lu * ju[11],
          bu = su * ju[12] + Zu * ju[13] + Xu * ju[14] + lu * ju[15];
        return new Uu(qu, fu, Cu, bu)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Eu, ju) {
        const su = Eu.x - uu.x,
          Uu = Eu.y - uu.y,
          Zu = Eu.z - uu.z,
          Xu = ju.x - uu.x,
          lu = ju.y - uu.y,
          qu = ju.z - uu.z,
          fu = Uu * qu - Zu * lu,
          Cu = Zu * Xu - su * qu,
          bu = su * lu - Uu * Xu,
          cu = Math.sqrt(fu * fu + Cu * Cu + bu * bu);
        let Nu;
        return Nu = 0 !== cu ? 1 / cu : 0, this.normal.x = fu * Nu, this.normal.y = Cu * Nu, this.normal.z = bu * Nu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Eu) {
        return su.t.Dot(this.normal, uu) <= Eu
      }
      signedDistanceTo(uu) {
        return su.t.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Uu(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Eu, ju) {
        const su = new Uu(0, 0, 0, 0);
        return su.copyFromPoints(uu, Eu, ju), su
      }
      static FromPositionAndNormal(uu, Eu) {
        const ju = new Uu(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Eu, ju)
      }
      static FromPositionAndNormalToRef(uu, Eu, ju) {
        return ju.normal.yJ(Eu), ju.normal.normalize(), ju.d = -uu.dot(ju.normal), ju
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Eu, ju) {
        const Uu = -(Eu.x * uu.x + Eu.y * uu.y + Eu.z * uu.z);
        return su.t.Dot(ju, Eu) + Uu
      }
    }
    Uu._TmpMatrix = su.e.Identity()
  },
  39030: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(39032);
    const Uu = (uu, Eu, ju) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : ju && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Eu) : null;
    class Zu {
      static DeepCopy(uu, Eu, ju, Zu) {
        let Xu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lu = function(uu) {
          const Eu = [];
          do {
            const ju = Object.getOwnPropertyNames(uu);
            for (const uu of ju) - 1 === Eu.indexOf(uu) && Eu.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Eu
        }(uu);
        for (const fu of lu) {
          if ("_" === fu[0] && (!Zu || -1 === Zu.indexOf(fu))) continue;
          if (fu.endsWith("Observable")) continue;
          if (ju && -1 !== ju.indexOf(fu)) continue;
          const lu = uu[fu],
            Cu = typeof lu;
          if ("function" !== Cu) try {
            if ("object" === Cu)
              if (lu instanceof Uint8Array) Eu[fu] = Uint8Array.from(lu);
              else if (lu instanceof Array) {
              if (Eu[fu] = [], lu.length > 0)
                if ("object" == typeof lu[0])
                  for (let uu = 0; uu < lu.length; uu++) {
                    const ju = Uu(lu[uu], Eu, Xu); - 1 === Eu[fu].indexOf(ju) && Eu[fu].push(ju)
                  } else Eu[fu] = lu.slice(0)
            } else Eu[fu] = Uu(lu, Eu, Xu);
            else Eu[fu] = lu
          } catch (qu) {
            su.b.Warn(qu.message)
          }
        }
      }
    }
  },
  38303: (uu, Eu, ju) => {
    function su() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Eu = 16 * Math.random() | 0;
        return ("x" === uu ? Eu : 3 & Eu | 8).toString(16)
      }))
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  39032: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static _CheckLimit(uu, Eu) {
        let ju = su._LogLimitOutputs[uu];
        return ju ? ju.current++ : (ju = {
          limit: Eu,
          current: 1
        }, su._LogLimitOutputs[uu] = ju), ju.current <= ju.limit
      }
      static _GenerateLimitMessage(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ju = su._LogLimitOutputs[uu];
        if (!ju || !su.MessageLimitReached) return;
        const Uu = this._Levels[Eu];
        ju.current === ju.limit && su[Uu.name](su.MessageLimitReached.replace(/%LIMIT%/g, "" + ju.limit).replace(/%TYPE%/g, Uu.name ?? ""))
      }
      static _AddLogEntry(uu) {
        su._LogCache = uu + su._LogCache, su.OnNewCacheEntry && su.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Eu = uu => uu < 10 ? "0" + uu : "" + uu,
          ju = new Date;
        return "[" + Eu(ju.getHours()) + ":" + Eu(ju.getMinutes()) + ":" + Eu(ju.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Eu) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const Uu = Array.isArray(Eu) ? Eu[0] : Eu;
        if (void 0 !== ju && !su._CheckLimit(Uu, ju)) return;
        const Zu = su._FormatMessage(Uu),
          Xu = this._Levels[uu],
          lu = Array.isArray(Eu) ? Eu.slice(1) : [];
        Xu.logFunc && Xu.logFunc("BJS - " + Zu, ...lu);
        const qu = `<div style='color:${Xu.color}'>${Zu}</div><br>`;
        su._AddLogEntry(qu), su._GenerateLimitMessage(Uu, uu)
      }
      static get LogCache() {
        return su._LogCache
      }
      static ClearLogCache() {
        su._LogCache = "", su._LogLimitOutputs = {}, su.errorsCount = 0
      }
      static set LogLevels(uu) {
        su.Log = su._LogDisabled, su.Warn = su._LogDisabled, su.Error = su._LogDisabled;
        const Eu = [su.MessageLogLevel, su.WarningLogLevel, su.ErrorLogLevel];
        for (const ju of Eu)
          if ((uu & ju) === ju) {
            const uu = this._Levels[ju];
            su[uu.name] = su._LogEnabled.bind(su, ju)
          }
      }
    }
    su.NoneLogLevel = 0, su.MessageLogLevel = 1, su.WarningLogLevel = 2, su.ErrorLogLevel = 4, su.AllLogLevel = 7, su.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", su._LogCache = "", su._LogLimitOutputs = {}, su._Levels = [{}, {
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
    }], su.errorsCount = 0, su.Log = su._LogEnabled.bind(su, su.MessageLogLevel), su.Warn = su._LogEnabled.bind(su, su.WarningLogLevel), su.Error = su._LogEnabled.bind(su, su.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);