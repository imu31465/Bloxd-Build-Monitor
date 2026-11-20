export const id = 232;
export const ids = [232];
export const modules = {
  37113: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(37122);
    class Mb {
      static GetPlanes(bb) {
        const ab = [];
        for (let Ub = 0; Ub < 6; Ub++) ab.push(new Ab.b(0, 0, 0, 0));
        return Mb.GetPlanesToRef(bb, ab), ab
      }
      static GetNearPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[2], ab.normal.y = Ub[7] + Ub[6], ab.normal.z = Ub[11] + Ub[10], ab.d = Ub[15] + Ub[14], ab.normalize()
      }
      static GetFarPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[2], ab.normal.y = Ub[7] - Ub[6], ab.normal.z = Ub[11] - Ub[10], ab.d = Ub[15] - Ub[14], ab.normalize()
      }
      static GetLeftPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[0], ab.normal.y = Ub[7] + Ub[4], ab.normal.z = Ub[11] + Ub[8], ab.d = Ub[15] + Ub[12], ab.normalize()
      }
      static GetRightPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[0], ab.normal.y = Ub[7] - Ub[4], ab.normal.z = Ub[11] - Ub[8], ab.d = Ub[15] - Ub[12], ab.normalize()
      }
      static GetTopPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[1], ab.normal.y = Ub[7] - Ub[5], ab.normal.z = Ub[11] - Ub[9], ab.d = Ub[15] - Ub[13], ab.normalize()
      }
      static GetBottomPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[1], ab.normal.y = Ub[7] + Ub[5], ab.normal.z = Ub[11] + Ub[9], ab.d = Ub[15] + Ub[13], ab.normalize()
      }
      static GetPlanesToRef(bb, ab) {
        Mb.GetNearPlaneToRef(bb, ab[0]), Mb.GetFarPlaneToRef(bb, ab[1]), Mb.GetLeftPlaneToRef(bb, ab[2]), Mb.GetRightPlaneToRef(bb, ab[3]), Mb.GetTopPlaneToRef(bb, ab[4]), Mb.GetBottomPlaneToRef(bb, ab[5])
      }
      static IsPointInFrustum(bb, ab) {
        for (let Ub = 0; Ub < 6; Ub++)
          if (ab[Ub].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37122: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb
    });
    var Ab = Ub(36401);
    class Mb {
      constructor(bb, ab, Ub, Mb) {
        this.normal = new Ab.m(bb, ab, Ub), this.d = Mb
      }
      qUb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Mb(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let bb = this.normal.getHashCode();
        return bb = 397 * bb ^ this.d, bb
      }
      normalize() {
        const bb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ab = 0;
        return 0 !== bb && (ab = 1 / bb), this.normal.x *= ab, this.normal.y *= ab, this.normal.z *= ab, this.d *= ab, this
      }
      transform(bb) {
        const ab = Mb._TmpMatrix;
        bb.invertToRef(ab);
        const Ub = ab.m,
          Ab = this.normal.x,
          Tb = this.normal.y,
          Eb = this.normal.z,
          Yb = this.d,
          Bb = Ab * Ub[0] + Tb * Ub[1] + Eb * Ub[2] + Yb * Ub[3],
          eb = Ab * Ub[4] + Tb * Ub[5] + Eb * Ub[6] + Yb * Ub[7],
          vb = Ab * Ub[8] + Tb * Ub[9] + Eb * Ub[10] + Yb * Ub[11],
          Lb = Ab * Ub[12] + Tb * Ub[13] + Eb * Ub[14] + Yb * Ub[15];
        return new Mb(Bb, eb, vb, Lb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ab, Ub) {
        const Ab = ab.x - bb.x,
          Mb = ab.y - bb.y,
          Tb = ab.z - bb.z,
          Eb = Ub.x - bb.x,
          Yb = Ub.y - bb.y,
          Bb = Ub.z - bb.z,
          eb = Mb * Bb - Tb * Yb,
          vb = Tb * Eb - Ab * Bb,
          Lb = Ab * Yb - Mb * Eb,
          Pb = Math.sqrt(eb * eb + vb * vb + Lb * Lb);
        let Xb;
        return Xb = 0 !== Pb ? 1 / Pb : 0, this.normal.x = eb * Xb, this.normal.y = vb * Xb, this.normal.z = Lb * Xb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ab) {
        return Ab.m.Dot(this.normal, bb) <= ab
      }
      signedDistanceTo(bb) {
        return Ab.m.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Mb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ab, Ub) {
        const Ab = new Mb(0, 0, 0, 0);
        return Ab.copyFromPoints(bb, ab, Ub), Ab
      }
      static FromPositionAndNormal(bb, ab) {
        const Ub = new Mb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ab, Ub)
      }
      static FromPositionAndNormalToRef(bb, ab, Ub) {
        return Ub.normal.EUb(ab), Ub.normal.normalize(), Ub.d = -bb.dot(Ub.normal), Ub
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ab, Ub) {
        const Mb = -(ab.x * bb.x + ab.y * bb.y + ab.z * bb.z);
        return Ab.m.Dot(Ub, ab) + Mb
      }
    }
    Mb._TmpMatrix = Ab.b.Identity()
  },
  37982: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(37989);
    const Mb = (bb, ab, Ub) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Ub && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ab) : null;
    class Tb {
      static DeepCopy(bb, ab, Ub, Tb) {
        let Eb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Yb = function(bb) {
          const ab = [];
          do {
            const Ub = Object.getOwnPropertyNames(bb);
            for (const bb of Ub) - 1 === ab.indexOf(bb) && ab.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ab
        }(bb);
        for (const eb of Yb) {
          if ("_" === eb[0] && (!Tb || -1 === Tb.indexOf(eb))) continue;
          if (eb.endsWith("Observable")) continue;
          if (Ub && -1 !== Ub.indexOf(eb)) continue;
          const Yb = bb[eb],
            vb = typeof Yb;
          if ("function" !== vb) try {
            if ("object" === vb)
              if (Yb instanceof Uint8Array) ab[eb] = Uint8Array.from(Yb);
              else if (Yb instanceof Array) {
              if (ab[eb] = [], Yb.length > 0)
                if ("object" == typeof Yb[0])
                  for (let bb = 0; bb < Yb.length; bb++) {
                    const Ub = Mb(Yb[bb], ab, Eb); - 1 === ab[eb].indexOf(Ub) && ab[eb].push(Ub)
                  } else ab[eb] = Yb.slice(0)
            } else ab[eb] = Mb(Yb, ab, Eb);
            else ab[eb] = Yb
          } catch (Bb) {
            Ab.e.Warn(Bb.message)
          }
        }
      }
    }
  },
  37251: (bb, ab, Ub) => {
    function Ab() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ab = 16 * Math.random() | 0;
        return ("x" === bb ? ab : 3 & ab | 8).toString(16)
      }))
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  37989: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      static _CheckLimit(bb, ab) {
        let Ub = Ab._LogLimitOutputs[bb];
        return Ub ? Ub.current++ : (Ub = {
          limit: ab,
          current: 1
        }, Ab._LogLimitOutputs[bb] = Ub), Ub.current <= Ub.limit
      }
      static _GenerateLimitMessage(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ub = Ab._LogLimitOutputs[bb];
        if (!Ub || !Ab.MessageLimitReached) return;
        const Mb = this._Levels[ab];
        Ub.current === Ub.limit && Ab[Mb.name](Ab.MessageLimitReached.replace(/%LIMIT%/g, "" + Ub.limit).replace(/%TYPE%/g, Mb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Ab._LogCache = bb + Ab._LogCache, Ab.OnNewCacheEntry && Ab.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ab = bb => bb < 10 ? "0" + bb : "" + bb,
          Ub = new Date;
        return "[" + ab(Ub.getHours()) + ":" + ab(Ub.getMinutes()) + ":" + ab(Ub.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ab) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Mb = Array.isArray(ab) ? ab[0] : ab;
        if (void 0 !== Ub && !Ab._CheckLimit(Mb, Ub)) return;
        const Tb = Ab._FormatMessage(Mb),
          Eb = this._Levels[bb],
          Yb = Array.isArray(ab) ? ab.slice(1) : [];
        Eb.logFunc && Eb.logFunc("BJS - " + Tb, ...Yb);
        const Bb = `<div style='color:${Eb.color}'>${Tb}</div><br>`;
        Ab._AddLogEntry(Bb), Ab._GenerateLimitMessage(Mb, bb)
      }
      static get LogCache() {
        return Ab._LogCache
      }
      static ClearLogCache() {
        Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab.errorsCount = 0
      }
      static set LogLevels(bb) {
        Ab.Log = Ab._LogDisabled, Ab.Warn = Ab._LogDisabled, Ab.Error = Ab._LogDisabled;
        const ab = [Ab.MessageLogLevel, Ab.WarningLogLevel, Ab.ErrorLogLevel];
        for (const Ub of ab)
          if ((bb & Ub) === Ub) {
            const bb = this._Levels[Ub];
            Ab[bb.name] = Ab._LogEnabled.bind(Ab, Ub)
          }
      }
    }
    Ab.NoneLogLevel = 0, Ab.MessageLogLevel = 1, Ab.WarningLogLevel = 2, Ab.ErrorLogLevel = 4, Ab.AllLogLevel = 7, Ab.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab._Levels = [{}, {
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
    }], Ab.errorsCount = 0, Ab.Log = Ab._LogEnabled.bind(Ab, Ab.MessageLogLevel), Ab.Warn = Ab._LogEnabled.bind(Ab, Ab.WarningLogLevel), Ab.Error = Ab._LogEnabled.bind(Ab, Ab.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);