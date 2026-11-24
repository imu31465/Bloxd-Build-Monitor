export const id = 244;
export const ids = [244];
export const modules = {
  37819: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => JB
    });
    var TB = ZB(37824);
    class JB {
      static GetPlanes(BB) {
        const IB = [];
        for (let ZB = 0; ZB < 6; ZB++) IB.push(new TB.c(0, 0, 0, 0));
        return JB.GetPlanesToRef(BB, IB), IB
      }
      static GetNearPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[2], IB.normal.y = ZB[7] + ZB[6], IB.normal.z = ZB[11] + ZB[10], IB.d = ZB[15] + ZB[14], IB.normalize()
      }
      static GetFarPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[2], IB.normal.y = ZB[7] - ZB[6], IB.normal.z = ZB[11] - ZB[10], IB.d = ZB[15] - ZB[14], IB.normalize()
      }
      static GetLeftPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[0], IB.normal.y = ZB[7] + ZB[4], IB.normal.z = ZB[11] + ZB[8], IB.d = ZB[15] + ZB[12], IB.normalize()
      }
      static GetRightPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[0], IB.normal.y = ZB[7] - ZB[4], IB.normal.z = ZB[11] - ZB[8], IB.d = ZB[15] - ZB[12], IB.normalize()
      }
      static GetTopPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] - ZB[1], IB.normal.y = ZB[7] - ZB[5], IB.normal.z = ZB[11] - ZB[9], IB.d = ZB[15] - ZB[13], IB.normalize()
      }
      static GetBottomPlaneToRef(BB, IB) {
        const ZB = BB.m;
        IB.normal.x = ZB[3] + ZB[1], IB.normal.y = ZB[7] + ZB[5], IB.normal.z = ZB[11] + ZB[9], IB.d = ZB[15] + ZB[13], IB.normalize()
      }
      static GetPlanesToRef(BB, IB) {
        JB.GetNearPlaneToRef(BB, IB[0]), JB.GetFarPlaneToRef(BB, IB[1]), JB.GetLeftPlaneToRef(BB, IB[2]), JB.GetRightPlaneToRef(BB, IB[3]), JB.GetTopPlaneToRef(BB, IB[4]), JB.GetBottomPlaneToRef(BB, IB[5])
      }
      static IsPointInFrustum(BB, IB) {
        for (let ZB = 0; ZB < 6; ZB++)
          if (IB[ZB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  37824: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => JB
    });
    var TB = ZB(37120);
    class JB {
      constructor(BB, IB, ZB, JB) {
        this.normal = new TB.s(BB, IB, ZB), this.d = JB
      }
      HTB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new JB(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let IB = 0;
        return 0 !== BB && (IB = 1 / BB), this.normal.x *= IB, this.normal.y *= IB, this.normal.z *= IB, this.d *= IB, this
      }
      transform(BB) {
        const IB = JB._TmpMatrix;
        BB.invertToRef(IB);
        const ZB = IB.m,
          TB = this.normal.x,
          oB = this.normal.y,
          GB = this.normal.z,
          vB = this.d,
          kB = TB * ZB[0] + oB * ZB[1] + GB * ZB[2] + vB * ZB[3],
          cB = TB * ZB[4] + oB * ZB[5] + GB * ZB[6] + vB * ZB[7],
          nB = TB * ZB[8] + oB * ZB[9] + GB * ZB[10] + vB * ZB[11],
          hB = TB * ZB[12] + oB * ZB[13] + GB * ZB[14] + vB * ZB[15];
        return new JB(kB, cB, nB, hB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, IB, ZB) {
        const TB = IB.x - BB.x,
          JB = IB.y - BB.y,
          oB = IB.z - BB.z,
          GB = ZB.x - BB.x,
          vB = ZB.y - BB.y,
          kB = ZB.z - BB.z,
          cB = JB * kB - oB * vB,
          nB = oB * GB - TB * kB,
          hB = TB * vB - JB * GB,
          zB = Math.sqrt(cB * cB + nB * nB + hB * hB);
        let FB;
        return FB = 0 !== zB ? 1 / zB : 0, this.normal.x = cB * FB, this.normal.y = nB * FB, this.normal.z = hB * FB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, IB) {
        return TB.s.Dot(this.normal, BB) <= IB
      }
      signedDistanceTo(BB) {
        return TB.s.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new JB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, IB, ZB) {
        const TB = new JB(0, 0, 0, 0);
        return TB.copyFromPoints(BB, IB, ZB), TB
      }
      static FromPositionAndNormal(BB, IB) {
        const ZB = new JB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, IB, ZB)
      }
      static FromPositionAndNormalToRef(BB, IB, ZB) {
        return ZB.normal.TY(IB), ZB.normal.normalize(), ZB.d = -BB.dot(ZB.normal), ZB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, IB, ZB) {
        const JB = -(IB.x * BB.x + IB.y * BB.y + IB.z * BB.z);
        return TB.s.Dot(ZB, IB) + JB
      }
    }
    JB._TmpMatrix = TB.b.Identity()
  },
  38714: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(38718);
    const JB = (BB, IB, ZB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : ZB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(IB) : null;
    class oB {
      static DeepCopy(BB, IB, ZB, oB) {
        let GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const vB = function(BB) {
          const IB = [];
          do {
            const ZB = Object.getOwnPropertyNames(BB);
            for (const BB of ZB) - 1 === IB.indexOf(BB) && IB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return IB
        }(BB);
        for (const cB of vB) {
          if ("_" === cB[0] && (!oB || -1 === oB.indexOf(cB))) continue;
          if (cB.endsWith("Observable")) continue;
          if (ZB && -1 !== ZB.indexOf(cB)) continue;
          const vB = BB[cB],
            nB = typeof vB;
          if ("function" !== nB) try {
            if ("object" === nB)
              if (vB instanceof Uint8Array) IB[cB] = Uint8Array.from(vB);
              else if (vB instanceof Array) {
              if (IB[cB] = [], vB.length > 0)
                if ("object" == typeof vB[0])
                  for (let BB = 0; BB < vB.length; BB++) {
                    const ZB = JB(vB[BB], IB, GB); - 1 === IB[cB].indexOf(ZB) && IB[cB].push(ZB)
                  } else IB[cB] = vB.slice(0)
            } else IB[cB] = JB(vB, IB, GB);
            else IB[cB] = vB
          } catch (kB) {
            TB.d.Warn(kB.message)
          }
        }
      }
    }
  },
  37964: (BB, IB, ZB) => {
    function TB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const IB = 16 * Math.random() | 0;
        return ("x" === BB ? IB : 3 & IB | 8).toString(16)
      }))
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  38718: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      static _CheckLimit(BB, IB) {
        let ZB = TB._LogLimitOutputs[BB];
        return ZB ? ZB.current++ : (ZB = {
          limit: IB,
          current: 1
        }, TB._LogLimitOutputs[BB] = ZB), ZB.current <= ZB.limit
      }
      static _GenerateLimitMessage(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZB = TB._LogLimitOutputs[BB];
        if (!ZB || !TB.MessageLimitReached) return;
        const JB = this._Levels[IB];
        ZB.current === ZB.limit && TB[JB.name](TB.MessageLimitReached.replace(/%LIMIT%/g, "" + ZB.limit).replace(/%TYPE%/g, JB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        TB._LogCache = BB + TB._LogCache, TB.OnNewCacheEntry && TB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const IB = BB => BB < 10 ? "0" + BB : "" + BB,
          ZB = new Date;
        return "[" + IB(ZB.getHours()) + ":" + IB(ZB.getMinutes()) + ":" + IB(ZB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, IB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const JB = Array.isArray(IB) ? IB[0] : IB;
        if (void 0 !== ZB && !TB._CheckLimit(JB, ZB)) return;
        const oB = TB._FormatMessage(JB),
          GB = this._Levels[BB],
          vB = Array.isArray(IB) ? IB.slice(1) : [];
        GB.logFunc && GB.logFunc("BJS - " + oB, ...vB);
        const kB = `<div style='color:${GB.color}'>${oB}</div><br>`;
        TB._AddLogEntry(kB), TB._GenerateLimitMessage(JB, BB)
      }
      static get LogCache() {
        return TB._LogCache
      }
      static ClearLogCache() {
        TB._LogCache = "", TB._LogLimitOutputs = {}, TB.errorsCount = 0
      }
      static set LogLevels(BB) {
        TB.Log = TB._LogDisabled, TB.Warn = TB._LogDisabled, TB.Error = TB._LogDisabled;
        const IB = [TB.MessageLogLevel, TB.WarningLogLevel, TB.ErrorLogLevel];
        for (const ZB of IB)
          if ((BB & ZB) === ZB) {
            const BB = this._Levels[ZB];
            TB[BB.name] = TB._LogEnabled.bind(TB, ZB)
          }
      }
    }
    TB.NoneLogLevel = 0, TB.MessageLogLevel = 1, TB.WarningLogLevel = 2, TB.ErrorLogLevel = 4, TB.AllLogLevel = 7, TB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", TB._LogCache = "", TB._LogLimitOutputs = {}, TB._Levels = [{}, {
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
    }], TB.errorsCount = 0, TB.Log = TB._LogEnabled.bind(TB, TB.MessageLogLevel), TB.Warn = TB._LogEnabled.bind(TB, TB.WarningLogLevel), TB.Error = TB._LogEnabled.bind(TB, TB.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);