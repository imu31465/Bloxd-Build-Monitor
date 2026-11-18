export const id = 221;
export const ids = [220, 221];
export const modules = {
  59715: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      RegisterShaderMaterial: () => VB.b,
      ShaderMaterial: () => VB.l,
      ShaderMaterialCreateFromSnippetAsync: () => VB.f,
      ShaderMaterialParse: () => VB.k,
      ShaderMaterialParseFromFileAsync: () => VB.i,
      ShaderMaterialParseFromSnippetAsync: () => VB.j
    });
    var VB = dB(39216);
    (0, VB.b)()
  },
  36688: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => yB
    });
    var VB = dB(36690);
    class yB {
      static GetPlanes(BB) {
        const TB = [];
        for (let dB = 0; dB < 6; dB++) TB.push(new VB.d(0, 0, 0, 0));
        return yB.GetPlanesToRef(BB, TB), TB
      }
      static GetNearPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[2], TB.normal.y = dB[7] + dB[6], TB.normal.z = dB[11] + dB[10], TB.d = dB[15] + dB[14], TB.normalize()
      }
      static GetFarPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[2], TB.normal.y = dB[7] - dB[6], TB.normal.z = dB[11] - dB[10], TB.d = dB[15] - dB[14], TB.normalize()
      }
      static GetLeftPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[0], TB.normal.y = dB[7] + dB[4], TB.normal.z = dB[11] + dB[8], TB.d = dB[15] + dB[12], TB.normalize()
      }
      static GetRightPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[0], TB.normal.y = dB[7] - dB[4], TB.normal.z = dB[11] - dB[8], TB.d = dB[15] - dB[12], TB.normalize()
      }
      static GetTopPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] - dB[1], TB.normal.y = dB[7] - dB[5], TB.normal.z = dB[11] - dB[9], TB.d = dB[15] - dB[13], TB.normalize()
      }
      static GetBottomPlaneToRef(BB, TB) {
        const dB = BB.m;
        TB.normal.x = dB[3] + dB[1], TB.normal.y = dB[7] + dB[5], TB.normal.z = dB[11] + dB[9], TB.d = dB[15] + dB[13], TB.normalize()
      }
      static GetPlanesToRef(BB, TB) {
        yB.GetNearPlaneToRef(BB, TB[0]), yB.GetFarPlaneToRef(BB, TB[1]), yB.GetLeftPlaneToRef(BB, TB[2]), yB.GetRightPlaneToRef(BB, TB[3]), yB.GetTopPlaneToRef(BB, TB[4]), yB.GetBottomPlaneToRef(BB, TB[5])
      }
      static IsPointInFrustum(BB, TB) {
        for (let dB = 0; dB < 6; dB++)
          if (TB[dB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  36690: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => yB
    });
    var VB = dB(36126);
    class yB {
      constructor(BB, TB, dB, yB) {
        this.normal = new VB.p(BB, TB, dB), this.d = yB
      }
      FVB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yB(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let BB = this.normal.getHashCode();
        return BB = 397 * BB ^ this.d, BB
      }
      normalize() {
        const BB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let TB = 0;
        return 0 !== BB && (TB = 1 / BB), this.normal.x *= TB, this.normal.y *= TB, this.normal.z *= TB, this.d *= TB, this
      }
      transform(BB) {
        const TB = yB._TmpMatrix;
        BB.invertToRef(TB);
        const dB = TB.m,
          VB = this.normal.x,
          pB = this.normal.y,
          lB = this.normal.z,
          JB = this.d,
          YB = VB * dB[0] + pB * dB[1] + lB * dB[2] + JB * dB[3],
          gB = VB * dB[4] + pB * dB[5] + lB * dB[6] + JB * dB[7],
          oB = VB * dB[8] + pB * dB[9] + lB * dB[10] + JB * dB[11],
          kB = VB * dB[12] + pB * dB[13] + lB * dB[14] + JB * dB[15];
        return new yB(YB, gB, oB, kB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, TB, dB) {
        const VB = TB.x - BB.x,
          yB = TB.y - BB.y,
          pB = TB.z - BB.z,
          lB = dB.x - BB.x,
          JB = dB.y - BB.y,
          YB = dB.z - BB.z,
          gB = yB * YB - pB * JB,
          oB = pB * lB - VB * YB,
          kB = VB * JB - yB * lB,
          LB = Math.sqrt(gB * gB + oB * oB + kB * kB);
        let OB;
        return OB = 0 !== LB ? 1 / LB : 0, this.normal.x = gB * OB, this.normal.y = oB * OB, this.normal.z = kB * OB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, TB) {
        return VB.p.Dot(this.normal, BB) <= TB
      }
      signedDistanceTo(BB) {
        return VB.p.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new yB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, TB, dB) {
        const VB = new yB(0, 0, 0, 0);
        return VB.copyFromPoints(BB, TB, dB), VB
      }
      static FromPositionAndNormal(BB, TB) {
        const dB = new yB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, TB, dB)
      }
      static FromPositionAndNormalToRef(BB, TB, dB) {
        return dB.normal.bdB(TB), dB.normal.normalize(), dB.d = -BB.dot(dB.normal), dB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, TB, dB) {
        const yB = -(TB.x * BB.x + TB.y * BB.y + TB.z * BB.z);
        return VB.p.Dot(dB, TB) + yB
      }
    }
    yB._TmpMatrix = VB.b.Identity()
  },
  37646: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(37651);
    const yB = (BB, TB, dB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : dB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(TB) : null;
    class pB {
      static DeepCopy(BB, TB, dB, pB) {
        let lB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const JB = function(BB) {
          const TB = [];
          do {
            const dB = Object.getOwnPropertyNames(BB);
            for (const BB of dB) - 1 === TB.indexOf(BB) && TB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return TB
        }(BB);
        for (const gB of JB) {
          if ("_" === gB[0] && (!pB || -1 === pB.indexOf(gB))) continue;
          if (gB.endsWith("Observable")) continue;
          if (dB && -1 !== dB.indexOf(gB)) continue;
          const JB = BB[gB],
            oB = typeof JB;
          if ("function" !== oB) try {
            if ("object" === oB)
              if (JB instanceof Uint8Array) TB[gB] = Uint8Array.from(JB);
              else if (JB instanceof Array) {
              if (TB[gB] = [], JB.length > 0)
                if ("object" == typeof JB[0])
                  for (let BB = 0; BB < JB.length; BB++) {
                    const dB = yB(JB[BB], TB, lB); - 1 === TB[gB].indexOf(dB) && TB[gB].push(dB)
                  } else TB[gB] = JB.slice(0)
            } else TB[gB] = yB(JB, TB, lB);
            else TB[gB] = JB
          } catch (YB) {
            VB.b.Warn(YB.message)
          }
        }
      }
    }
  },
  36822: (BB, TB, dB) => {
    function VB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const TB = 16 * Math.random() | 0;
        return ("x" === BB ? TB : 3 & TB | 8).toString(16)
      }))
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  37651: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      static _CheckLimit(BB, TB) {
        let dB = VB._LogLimitOutputs[BB];
        return dB ? dB.current++ : (dB = {
          limit: TB,
          current: 1
        }, VB._LogLimitOutputs[BB] = dB), dB.current <= dB.limit
      }
      static _GenerateLimitMessage(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const dB = VB._LogLimitOutputs[BB];
        if (!dB || !VB.MessageLimitReached) return;
        const yB = this._Levels[TB];
        dB.current === dB.limit && VB[yB.name](VB.MessageLimitReached.replace(/%LIMIT%/g, "" + dB.limit).replace(/%TYPE%/g, yB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        VB._LogCache = BB + VB._LogCache, VB.OnNewCacheEntry && VB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const TB = BB => BB < 10 ? "0" + BB : "" + BB,
          dB = new Date;
        return "[" + TB(dB.getHours()) + ":" + TB(dB.getMinutes()) + ":" + TB(dB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, TB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const yB = Array.isArray(TB) ? TB[0] : TB;
        if (void 0 !== dB && !VB._CheckLimit(yB, dB)) return;
        const pB = VB._FormatMessage(yB),
          lB = this._Levels[BB],
          JB = Array.isArray(TB) ? TB.slice(1) : [];
        lB.logFunc && lB.logFunc("BJS - " + pB, ...JB);
        const YB = `<div style='color:${lB.color}'>${pB}</div><br>`;
        VB._AddLogEntry(YB), VB._GenerateLimitMessage(yB, BB)
      }
      static get LogCache() {
        return VB._LogCache
      }
      static ClearLogCache() {
        VB._LogCache = "", VB._LogLimitOutputs = {}, VB.errorsCount = 0
      }
      static set LogLevels(BB) {
        VB.Log = VB._LogDisabled, VB.Warn = VB._LogDisabled, VB.Error = VB._LogDisabled;
        const TB = [VB.MessageLogLevel, VB.WarningLogLevel, VB.ErrorLogLevel];
        for (const dB of TB)
          if ((BB & dB) === dB) {
            const BB = this._Levels[dB];
            VB[BB.name] = VB._LogEnabled.bind(VB, dB)
          }
      }
    }
    VB.NoneLogLevel = 0, VB.MessageLogLevel = 1, VB.WarningLogLevel = 2, VB.ErrorLogLevel = 4, VB.AllLogLevel = 7, VB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", VB._LogCache = "", VB._LogLimitOutputs = {}, VB._Levels = [{}, {
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
    }], VB.errorsCount = 0, VB.Log = VB._LogEnabled.bind(VB, VB.MessageLogLevel), VB.Warn = VB._LogEnabled.bind(VB, VB.WarningLogLevel), VB.Error = VB._LogEnabled.bind(VB, VB.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);