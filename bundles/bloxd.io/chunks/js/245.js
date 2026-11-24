export const id = 245;
export const ids = [244, 245];
export const modules = {
  61420: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      RegisterShaderMaterial: () => QB.b,
      ShaderMaterial: () => QB.l,
      ShaderMaterialCreateFromSnippetAsync: () => QB.c,
      ShaderMaterialParse: () => QB.k,
      ShaderMaterialParseFromFileAsync: () => QB.f,
      ShaderMaterialParseFromSnippetAsync: () => QB.i
    });
    var QB = zB(40576);
    (0, QB.b)()
  },
  37865: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => nB
    });
    var QB = zB(37869);
    class nB {
      static GetPlanes(BB) {
        const jB = [];
        for (let zB = 0; zB < 6; zB++) jB.push(new QB.c(0, 0, 0, 0));
        return nB.GetPlanesToRef(BB, jB), jB
      }
      static GetNearPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[2], jB.normal.y = zB[7] + zB[6], jB.normal.z = zB[11] + zB[10], jB.d = zB[15] + zB[14], jB.normalize()
      }
      static GetFarPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[2], jB.normal.y = zB[7] - zB[6], jB.normal.z = zB[11] - zB[10], jB.d = zB[15] - zB[14], jB.normalize()
      }
      static GetLeftPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[0], jB.normal.y = zB[7] + zB[4], jB.normal.z = zB[11] + zB[8], jB.d = zB[15] + zB[12], jB.normalize()
      }
      static GetRightPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[0], jB.normal.y = zB[7] - zB[4], jB.normal.z = zB[11] - zB[8], jB.d = zB[15] - zB[12], jB.normalize()
      }
      static GetTopPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] - zB[1], jB.normal.y = zB[7] - zB[5], jB.normal.z = zB[11] - zB[9], jB.d = zB[15] - zB[13], jB.normalize()
      }
      static GetBottomPlaneToRef(BB, jB) {
        const zB = BB.m;
        jB.normal.x = zB[3] + zB[1], jB.normal.y = zB[7] + zB[5], jB.normal.z = zB[11] + zB[9], jB.d = zB[15] + zB[13], jB.normalize()
      }
      static GetPlanesToRef(BB, jB) {
        nB.GetNearPlaneToRef(BB, jB[0]), nB.GetFarPlaneToRef(BB, jB[1]), nB.GetLeftPlaneToRef(BB, jB[2]), nB.GetRightPlaneToRef(BB, jB[3]), nB.GetTopPlaneToRef(BB, jB[4]), nB.GetBottomPlaneToRef(BB, jB[5])
      }
      static IsPointInFrustum(BB, jB) {
        for (let zB = 0; zB < 6; zB++)
          if (jB[zB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37869: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(37171);
    class nB {
      constructor(BB, jB, zB, nB) {
        this.normal = new QB.m(BB, jB, zB), this.d = nB
      }
      nQB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let jB = 0;
        return 0 !== BB && (jB = 1 / BB), this.normal.x *= jB, this.normal.y *= jB, this.normal.z *= jB, this.d *= jB, this
      }
      transform(BB) {
        const jB = nB._TmpMatrix;
        BB.invertToRef(jB);
        const zB = jB.m,
          QB = this.normal.x,
          dB = this.normal.y,
          IB = this.normal.z,
          NB = this.d,
          uB = QB * zB[0] + dB * zB[1] + IB * zB[2] + NB * zB[3],
          UB = QB * zB[4] + dB * zB[5] + IB * zB[6] + NB * zB[7],
          aB = QB * zB[8] + dB * zB[9] + IB * zB[10] + NB * zB[11],
          pB = QB * zB[12] + dB * zB[13] + IB * zB[14] + NB * zB[15];
        return new nB(uB, UB, aB, pB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, jB, zB) {
        const QB = jB.x - BB.x,
          nB = jB.y - BB.y,
          dB = jB.z - BB.z,
          IB = zB.x - BB.x,
          NB = zB.y - BB.y,
          uB = zB.z - BB.z,
          UB = nB * uB - dB * NB,
          aB = dB * IB - QB * uB,
          pB = QB * NB - nB * IB,
          rB = Math.sqrt(UB * UB + aB * aB + pB * pB);
        let sB;
        return sB = 0 !== rB ? 1 / rB : 0, this.normal.x = UB * sB, this.normal.y = aB * sB, this.normal.z = pB * sB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, jB) {
        return QB.m.Dot(this.normal, BB) <= jB
      }
      signedDistanceTo(BB) {
        return QB.m.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new nB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, jB, zB) {
        const QB = new nB(0, 0, 0, 0);
        return QB.copyFromPoints(BB, jB, zB), QB
      }
      static FromPositionAndNormal(BB, jB) {
        const zB = new nB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, jB, zB)
      }
      static FromPositionAndNormalToRef(BB, jB, zB) {
        return zB.normal.jH(jB), zB.normal.normalize(), zB.d = -BB.dot(zB.normal), zB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, jB, zB) {
        const nB = -(jB.x * BB.x + jB.y * BB.y + jB.z * BB.z);
        return QB.m.Dot(zB, jB) + nB
      }
    }
    nB._TmpMatrix = QB.c.Identity()
  },
  38780: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(38783);
    const nB = (BB, jB, zB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : zB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(jB) : null;
    class dB {
      static DeepCopy(BB, jB, zB, dB) {
        let IB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NB = function(BB) {
          const jB = [];
          do {
            const zB = Object.getOwnPropertyNames(BB);
            for (const BB of zB) - 1 === jB.indexOf(BB) && jB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return jB
        }(BB);
        for (const UB of NB) {
          if ("_" === UB[0] && (!dB || -1 === dB.indexOf(UB))) continue;
          if (UB.endsWith("Observable")) continue;
          if (zB && -1 !== zB.indexOf(UB)) continue;
          const NB = BB[UB],
            aB = typeof NB;
          if ("function" !== aB) try {
            if ("object" === aB)
              if (NB instanceof Uint8Array) jB[UB] = Uint8Array.from(NB);
              else if (NB instanceof Array) {
              if (jB[UB] = [], NB.length > 0)
                if ("object" == typeof NB[0])
                  for (let BB = 0; BB < NB.length; BB++) {
                    const zB = nB(NB[BB], jB, IB); - 1 === jB[UB].indexOf(zB) && jB[UB].push(zB)
                  } else jB[UB] = NB.slice(0)
            } else jB[UB] = nB(NB, jB, IB);
            else jB[UB] = NB
          } catch (uB) {
            QB.c.Warn(uB.message)
          }
        }
      }
    }
  },
  37987: (BB, jB, zB) => {
    function QB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const jB = 16 * Math.random() | 0;
        return ("x" === BB ? jB : 3 & jB | 8).toString(16)
      }))
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  38783: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      static _CheckLimit(BB, jB) {
        let zB = QB._LogLimitOutputs[BB];
        return zB ? zB.current++ : (zB = {
          limit: jB,
          current: 1
        }, QB._LogLimitOutputs[BB] = zB), zB.current <= zB.limit
      }
      static _GenerateLimitMessage(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zB = QB._LogLimitOutputs[BB];
        if (!zB || !QB.MessageLimitReached) return;
        const nB = this._Levels[jB];
        zB.current === zB.limit && QB[nB.name](QB.MessageLimitReached.replace(/%LIMIT%/g, "" + zB.limit).replace(/%TYPE%/g, nB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        QB._LogCache = BB + QB._LogCache, QB.OnNewCacheEntry && QB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const jB = BB => BB < 10 ? "0" + BB : "" + BB,
          zB = new Date;
        return "[" + jB(zB.getHours()) + ":" + jB(zB.getMinutes()) + ":" + jB(zB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, jB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const nB = Array.isArray(jB) ? jB[0] : jB;
        if (void 0 !== zB && !QB._CheckLimit(nB, zB)) return;
        const dB = QB._FormatMessage(nB),
          IB = this._Levels[BB],
          NB = Array.isArray(jB) ? jB.slice(1) : [];
        IB.logFunc && IB.logFunc("BJS - " + dB, ...NB);
        const uB = `<div style='color:${IB.color}'>${dB}</div><br>`;
        QB._AddLogEntry(uB), QB._GenerateLimitMessage(nB, BB)
      }
      static get LogCache() {
        return QB._LogCache
      }
      static ClearLogCache() {
        QB._LogCache = "", QB._LogLimitOutputs = {}, QB.errorsCount = 0
      }
      static set LogLevels(BB) {
        QB.Log = QB._LogDisabled, QB.Warn = QB._LogDisabled, QB.Error = QB._LogDisabled;
        const jB = [QB.MessageLogLevel, QB.WarningLogLevel, QB.ErrorLogLevel];
        for (const zB of jB)
          if ((BB & zB) === zB) {
            const BB = this._Levels[zB];
            QB[BB.name] = QB._LogEnabled.bind(QB, zB)
          }
      }
    }
    QB.NoneLogLevel = 0, QB.MessageLogLevel = 1, QB.WarningLogLevel = 2, QB.ErrorLogLevel = 4, QB.AllLogLevel = 7, QB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QB._LogCache = "", QB._LogLimitOutputs = {}, QB._Levels = [{}, {
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
    }], QB.errorsCount = 0, QB.Log = QB._LogEnabled.bind(QB, QB.MessageLogLevel), QB.Warn = QB._LogEnabled.bind(QB, QB.WarningLogLevel), QB.Error = QB._LogEnabled.bind(QB, QB.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);