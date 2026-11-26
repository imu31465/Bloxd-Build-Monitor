export const id = 266;
export const ids = [266];
export const modules = {
  38424: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(38432);
    class DB {
      static GetPlanes(BB) {
        const OB = [];
        for (let GB = 0; GB < 6; GB++) OB.push(new YB.c(0, 0, 0, 0));
        return DB.GetPlanesToRef(BB, OB), OB
      }
      static GetNearPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[2], OB.normal.y = GB[7] + GB[6], OB.normal.z = GB[11] + GB[10], OB.d = GB[15] + GB[14], OB.normalize()
      }
      static GetFarPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[2], OB.normal.y = GB[7] - GB[6], OB.normal.z = GB[11] - GB[10], OB.d = GB[15] - GB[14], OB.normalize()
      }
      static GetLeftPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[0], OB.normal.y = GB[7] + GB[4], OB.normal.z = GB[11] + GB[8], OB.d = GB[15] + GB[12], OB.normalize()
      }
      static GetRightPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[0], OB.normal.y = GB[7] - GB[4], OB.normal.z = GB[11] - GB[8], OB.d = GB[15] - GB[12], OB.normalize()
      }
      static GetTopPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[1], OB.normal.y = GB[7] - GB[5], OB.normal.z = GB[11] - GB[9], OB.d = GB[15] - GB[13], OB.normalize()
      }
      static GetBottomPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[1], OB.normal.y = GB[7] + GB[5], OB.normal.z = GB[11] + GB[9], OB.d = GB[15] + GB[13], OB.normalize()
      }
      static GetPlanesToRef(BB, OB) {
        DB.GetNearPlaneToRef(BB, OB[0]), DB.GetFarPlaneToRef(BB, OB[1]), DB.GetLeftPlaneToRef(BB, OB[2]), DB.GetRightPlaneToRef(BB, OB[3]), DB.GetTopPlaneToRef(BB, OB[4]), DB.GetBottomPlaneToRef(BB, OB[5])
      }
      static IsPointInFrustum(BB, OB) {
        for (let GB = 0; GB < 6; GB++)
          if (OB[GB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  38432: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(37778);
    class DB {
      constructor(BB, OB, GB, DB) {
        this.normal = new YB.r(BB, OB, GB), this.d = DB
      }
      dDB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new DB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let OB = 0;
        return 0 !== BB && (OB = 1 / BB), this.normal.x *= OB, this.normal.y *= OB, this.normal.z *= OB, this.d *= OB, this
      }
      transform(BB) {
        const OB = DB._TmpMatrix;
        BB.invertToRef(OB);
        const GB = OB.m,
          YB = this.normal.x,
          QB = this.normal.y,
          oB = this.normal.z,
          jB = this.d,
          yB = YB * GB[0] + QB * GB[1] + oB * GB[2] + jB * GB[3],
          JB = YB * GB[4] + QB * GB[5] + oB * GB[6] + jB * GB[7],
          MB = YB * GB[8] + QB * GB[9] + oB * GB[10] + jB * GB[11],
          PB = YB * GB[12] + QB * GB[13] + oB * GB[14] + jB * GB[15];
        return new DB(yB, JB, MB, PB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, OB, GB) {
        const YB = OB.x - BB.x,
          DB = OB.y - BB.y,
          QB = OB.z - BB.z,
          oB = GB.x - BB.x,
          jB = GB.y - BB.y,
          yB = GB.z - BB.z,
          JB = DB * yB - QB * jB,
          MB = QB * oB - YB * yB,
          PB = YB * jB - DB * oB,
          zB = Math.sqrt(JB * JB + MB * MB + PB * PB);
        let lB;
        return lB = 0 !== zB ? 1 / zB : 0, this.normal.x = JB * lB, this.normal.y = MB * lB, this.normal.z = PB * lB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, OB) {
        return YB.r.Dot(this.normal, BB) <= OB
      }
      signedDistanceTo(BB) {
        return YB.r.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new DB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, OB, GB) {
        const YB = new DB(0, 0, 0, 0);
        return YB.copyFromPoints(BB, OB, GB), YB
      }
      static FromPositionAndNormal(BB, OB) {
        const GB = new DB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, OB, GB)
      }
      static FromPositionAndNormalToRef(BB, OB, GB) {
        return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, OB, GB) {
        const DB = -(OB.x * BB.x + OB.y * BB.y + OB.z * BB.z);
        return YB.r.Dot(GB, OB) + DB
      }
    }
    DB._TmpMatrix = YB.d.Identity()
  },
  39358: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(39366);
    const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(OB) : null;
    class QB {
      static DeepCopy(BB, OB, GB, QB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jB = function(BB) {
          const OB = [];
          do {
            const GB = Object.getOwnPropertyNames(BB);
            for (const BB of GB) - 1 === OB.indexOf(BB) && OB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return OB
        }(BB);
        for (const JB of jB) {
          if ("_" === JB[0] && (!QB || -1 === QB.indexOf(JB))) continue;
          if (JB.endsWith("Observable")) continue;
          if (GB && -1 !== GB.indexOf(JB)) continue;
          const jB = BB[JB],
            MB = typeof jB;
          if ("function" !== MB) try {
            if ("object" === MB)
              if (jB instanceof Uint8Array) OB[JB] = Uint8Array.from(jB);
              else if (jB instanceof Array) {
              if (OB[JB] = [], jB.length > 0)
                if ("object" == typeof jB[0])
                  for (let BB = 0; BB < jB.length; BB++) {
                    const GB = DB(jB[BB], OB, oB); - 1 === OB[JB].indexOf(GB) && OB[JB].push(GB)
                  } else OB[JB] = jB.slice(0)
            } else OB[JB] = DB(jB, OB, oB);
            else OB[JB] = jB
          } catch (yB) {
            YB.b.Warn(yB.message)
          }
        }
      }
    }
  },
  38589: (BB, OB, GB) => {
    function YB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const OB = 16 * Math.random() | 0;
        return ("x" === BB ? OB : 3 & OB | 8).toString(16)
      }))
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  39366: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static _CheckLimit(BB, OB) {
        let GB = YB._LogLimitOutputs[BB];
        return GB ? GB.current++ : (GB = {
          limit: OB,
          current: 1
        }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
      }
      static _GenerateLimitMessage(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GB = YB._LogLimitOutputs[BB];
        if (!GB || !YB.MessageLimitReached) return;
        const DB = this._Levels[OB];
        GB.current === GB.limit && YB[DB.name](YB.MessageLimitReached.replace(/%LIMIT%/g, "" + GB.limit).replace(/%TYPE%/g, DB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        YB._LogCache = BB + YB._LogCache, YB.OnNewCacheEntry && YB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const OB = BB => BB < 10 ? "0" + BB : "" + BB,
          GB = new Date;
        return "[" + OB(GB.getHours()) + ":" + OB(GB.getMinutes()) + ":" + OB(GB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, OB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const DB = Array.isArray(OB) ? OB[0] : OB;
        if (void 0 !== GB && !YB._CheckLimit(DB, GB)) return;
        const QB = YB._FormatMessage(DB),
          oB = this._Levels[BB],
          jB = Array.isArray(OB) ? OB.slice(1) : [];
        oB.logFunc && oB.logFunc("BJS - " + QB, ...jB);
        const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
        YB._AddLogEntry(yB), YB._GenerateLimitMessage(DB, BB)
      }
      static get LogCache() {
        return YB._LogCache
      }
      static ClearLogCache() {
        YB._LogCache = "", YB._LogLimitOutputs = {}, YB.errorsCount = 0
      }
      static set LogLevels(BB) {
        YB.Log = YB._LogDisabled, YB.Warn = YB._LogDisabled, YB.Error = YB._LogDisabled;
        const OB = [YB.MessageLogLevel, YB.WarningLogLevel, YB.ErrorLogLevel];
        for (const GB of OB)
          if ((BB & GB) === GB) {
            const BB = this._Levels[GB];
            YB[BB.name] = YB._LogEnabled.bind(YB, GB)
          }
      }
    }
    YB.NoneLogLevel = 0, YB.MessageLogLevel = 1, YB.WarningLogLevel = 2, YB.ErrorLogLevel = 4, YB.AllLogLevel = 7, YB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", YB._LogCache = "", YB._LogLimitOutputs = {}, YB._Levels = [{}, {
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
    }], YB.errorsCount = 0, YB.Log = YB._LogEnabled.bind(YB, YB.MessageLogLevel), YB.Warn = YB._LogEnabled.bind(YB, YB.WarningLogLevel), YB.Error = YB._LogEnabled.bind(YB, YB.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);