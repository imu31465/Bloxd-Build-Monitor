export const id = 267;
export const ids = [266, 267];
export const modules = {
  63819: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      RegisterShaderMaterial: () => ye.e,
      ShaderMaterial: () => ye.o,
      ShaderMaterialCreateFromSnippetAsync: () => ye.g,
      ShaderMaterialParse: () => ye.m,
      ShaderMaterialParseFromFileAsync: () => ye.h,
      ShaderMaterialParseFromSnippetAsync: () => ye.i
    });
    var ye = He(41585);
    (0, ye.e)()
  },
  38581: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(38590);
    class be {
      static GetPlanes(ee) {
        const ie = [];
        for (let He = 0; He < 6; He++) ie.push(new ye.c(0, 0, 0, 0));
        return be.GetPlanesToRef(ee, ie), ie
      }
      static GetNearPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[2], ie.normal.y = He[7] + He[6], ie.normal.z = He[11] + He[10], ie.d = He[15] + He[14], ie.normalize()
      }
      static GetFarPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[2], ie.normal.y = He[7] - He[6], ie.normal.z = He[11] - He[10], ie.d = He[15] - He[14], ie.normalize()
      }
      static GetLeftPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[0], ie.normal.y = He[7] + He[4], ie.normal.z = He[11] + He[8], ie.d = He[15] + He[12], ie.normalize()
      }
      static GetRightPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[0], ie.normal.y = He[7] - He[4], ie.normal.z = He[11] - He[8], ie.d = He[15] - He[12], ie.normalize()
      }
      static GetTopPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[1], ie.normal.y = He[7] - He[5], ie.normal.z = He[11] - He[9], ie.d = He[15] - He[13], ie.normalize()
      }
      static GetBottomPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[1], ie.normal.y = He[7] + He[5], ie.normal.z = He[11] + He[9], ie.d = He[15] + He[13], ie.normalize()
      }
      static GetPlanesToRef(ee, ie) {
        be.GetNearPlaneToRef(ee, ie[0]), be.GetFarPlaneToRef(ee, ie[1]), be.GetLeftPlaneToRef(ee, ie[2]), be.GetRightPlaneToRef(ee, ie[3]), be.GetTopPlaneToRef(ee, ie[4]), be.GetBottomPlaneToRef(ee, ie[5])
      }
      static IsPointInFrustum(ee, ie) {
        for (let He = 0; He < 6; He++)
          if (ie[He].dotCoordinate(ee) < 0) return !1;
        return !0
      }
    }
  },
  38590: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(37917);
    class be {
      constructor(ee, ie, He, be) {
        this.normal = new ye.p(ee, ie, He), this.d = be
      }
      Qbe() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new be(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let ee = this.normal.getHashCode();
        return ee = 397 * ee ^ this.d, ee
      }
      normalize() {
        const ee = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ie = 0;
        return 0 !== ee && (ie = 1 / ee), this.normal.x *= ie, this.normal.y *= ie, this.normal.z *= ie, this.d *= ie, this
      }
      transform(ee) {
        const ie = be._TmpMatrix;
        ee.invertToRef(ie);
        const He = ie.m,
          ye = this.normal.x,
          Me = this.normal.y,
          Ke = this.normal.z,
          Ue = this.d,
          Fe = ye * He[0] + Me * He[1] + Ke * He[2] + Ue * He[3],
          Je = ye * He[4] + Me * He[5] + Ke * He[6] + Ue * He[7],
          oe = ye * He[8] + Me * He[9] + Ke * He[10] + Ue * He[11],
          Re = ye * He[12] + Me * He[13] + Ke * He[14] + Ue * He[15];
        return new be(Fe, Je, oe, Re)
      }
      dotCoordinate(ee) {
        return this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z + this.d
      }
      copyFromPoints(ee, ie, He) {
        const ye = ie.x - ee.x,
          be = ie.y - ee.y,
          Me = ie.z - ee.z,
          Ke = He.x - ee.x,
          Ue = He.y - ee.y,
          Fe = He.z - ee.z,
          Je = be * Fe - Me * Ue,
          oe = Me * Ke - ye * Fe,
          Re = ye * Ue - be * Ke,
          ke = Math.sqrt(Je * Je + oe * oe + Re * Re);
        let qe;
        return qe = 0 !== ke ? 1 / ke : 0, this.normal.x = Je * qe, this.normal.y = oe * qe, this.normal.z = Re * qe, this.d = -(this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z), this
      }
      isFrontFacingTo(ee, ie) {
        return ye.p.Dot(this.normal, ee) <= ie
      }
      signedDistanceTo(ee) {
        return ye.p.Dot(ee, this.normal) + this.d
      }
      static FromArray(ee) {
        return new be(ee[0], ee[1], ee[2], ee[3])
      }
      static FromPoints(ee, ie, He) {
        const ye = new be(0, 0, 0, 0);
        return ye.copyFromPoints(ee, ie, He), ye
      }
      static FromPositionAndNormal(ee, ie) {
        const He = new be(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(ee, ie, He)
      }
      static FromPositionAndNormalToRef(ee, ie, He) {
        return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
      }
      static SignedDistanceToPlaneFromPositionAndNormal(ee, ie, He) {
        const be = -(ie.x * ee.x + ie.y * ee.y + ie.z * ee.z);
        return ye.p.Dot(He, ie) + be
      }
    }
    be._TmpMatrix = ye.b.Identity()
  },
  39463: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(39467);
    const be = (ee, ie, He) => ee ? ee.getClassName && "Mesh" === ee.getClassName() ? null : !ee.getClassName || "SubMesh" !== ee.getClassName() && "PhysicsBody" !== ee.getClassName() ? ee.clone ? ee.clone() : Array.isArray(ee) ? ee.slice() : He && "object" === typeof ee ? {
      ...ee
    } : null : ee.clone(ie) : null;
    class Me {
      static DeepCopy(ee, ie, He, Me) {
        let Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ue = function(ee) {
          const ie = [];
          do {
            const He = Object.getOwnPropertyNames(ee);
            for (const ee of He) - 1 === ie.indexOf(ee) && ie.push(ee)
          } while (ee = Object.getPrototypeOf(ee));
          return ie
        }(ee);
        for (const Je of Ue) {
          if ("_" === Je[0] && (!Me || -1 === Me.indexOf(Je))) continue;
          if (Je.endsWith("Observable")) continue;
          if (He && -1 !== He.indexOf(Je)) continue;
          const Ue = ee[Je],
            oe = typeof Ue;
          if ("function" !== oe) try {
            if ("object" === oe)
              if (Ue instanceof Uint8Array) ie[Je] = Uint8Array.from(Ue);
              else if (Ue instanceof Array) {
              if (ie[Je] = [], Ue.length > 0)
                if ("object" == typeof Ue[0])
                  for (let ee = 0; ee < Ue.length; ee++) {
                    const He = be(Ue[ee], ie, Ke); - 1 === ie[Je].indexOf(He) && ie[Je].push(He)
                  } else ie[Je] = Ue.slice(0)
            } else ie[Je] = be(Ue, ie, Ke);
            else ie[Je] = Ue
          } catch (Fe) {
            ye.e.Warn(Fe.message)
          }
        }
      }
    }
  },
  38745: (ee, ie, He) => {
    function ye() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ee => {
        const ie = 16 * Math.random() | 0;
        return ("x" === ee ? ie : 3 & ie | 8).toString(16)
      }))
    }
    He.d(ie, {
      d: () => ye
    })
  },
  39467: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      static _CheckLimit(ee, ie) {
        let He = ye._LogLimitOutputs[ee];
        return He ? He.current++ : (He = {
          limit: ie,
          current: 1
        }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
      }
      static _GenerateLimitMessage(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const He = ye._LogLimitOutputs[ee];
        if (!He || !ye.MessageLimitReached) return;
        const be = this._Levels[ie];
        He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
      }
      static _AddLogEntry(ee) {
        ye._LogCache = ee + ye._LogCache, ye.OnNewCacheEntry && ye.OnNewCacheEntry(ee)
      }
      static _FormatMessage(ee) {
        const ie = ee => ee < 10 ? "0" + ee : "" + ee,
          He = new Date;
        return "[" + ie(He.getHours()) + ":" + ie(He.getMinutes()) + ":" + ie(He.getSeconds()) + "]: " + ee
      }
      static _LogDisabled(ee, ie) {}
      static _LogEnabled() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const be = Array.isArray(ie) ? ie[0] : ie;
        if (void 0 !== He && !ye._CheckLimit(be, He)) return;
        const Me = ye._FormatMessage(be),
          Ke = this._Levels[ee],
          Ue = Array.isArray(ie) ? ie.slice(1) : [];
        Ke.logFunc && Ke.logFunc("BJS - " + Me, ...Ue);
        const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
        ye._AddLogEntry(Fe), ye._GenerateLimitMessage(be, ee)
      }
      static get LogCache() {
        return ye._LogCache
      }
      static ClearLogCache() {
        ye._LogCache = "", ye._LogLimitOutputs = {}, ye.errorsCount = 0
      }
      static set LogLevels(ee) {
        ye.Log = ye._LogDisabled, ye.Warn = ye._LogDisabled, ye.Error = ye._LogDisabled;
        const ie = [ye.MessageLogLevel, ye.WarningLogLevel, ye.ErrorLogLevel];
        for (const He of ie)
          if ((ee & He) === He) {
            const ee = this._Levels[He];
            ye[ee.name] = ye._LogEnabled.bind(ye, He)
          }
      }
    }
    ye.NoneLogLevel = 0, ye.MessageLogLevel = 1, ye.WarningLogLevel = 2, ye.ErrorLogLevel = 4, ye.AllLogLevel = 7, ye.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ye._LogCache = "", ye._LogLimitOutputs = {}, ye._Levels = [{}, {
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
    }], ye.errorsCount = 0, ye.Log = ye._LogEnabled.bind(ye, ye.MessageLogLevel), ye.Warn = ye._LogEnabled.bind(ye, ye.WarningLogLevel), ye.Error = ye._LogEnabled.bind(ye, ye.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);