export const id = 232;
export const ids = [232];
export const modules = {
  37365: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(37368);
    class Wb {
      static GetPlanes(bb) {
        const cb = [];
        for (let sb = 0; sb < 6; sb++) cb.push(new kb.c(0, 0, 0, 0));
        return Wb.GetPlanesToRef(bb, cb), cb
      }
      static GetNearPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[2], cb.normal.y = sb[7] + sb[6], cb.normal.z = sb[11] + sb[10], cb.d = sb[15] + sb[14], cb.normalize()
      }
      static GetFarPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[2], cb.normal.y = sb[7] - sb[6], cb.normal.z = sb[11] - sb[10], cb.d = sb[15] - sb[14], cb.normalize()
      }
      static GetLeftPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[0], cb.normal.y = sb[7] + sb[4], cb.normal.z = sb[11] + sb[8], cb.d = sb[15] + sb[12], cb.normalize()
      }
      static GetRightPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[0], cb.normal.y = sb[7] - sb[4], cb.normal.z = sb[11] - sb[8], cb.d = sb[15] - sb[12], cb.normalize()
      }
      static GetTopPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[1], cb.normal.y = sb[7] - sb[5], cb.normal.z = sb[11] - sb[9], cb.d = sb[15] - sb[13], cb.normalize()
      }
      static GetBottomPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[1], cb.normal.y = sb[7] + sb[5], cb.normal.z = sb[11] + sb[9], cb.d = sb[15] + sb[13], cb.normalize()
      }
      static GetPlanesToRef(bb, cb) {
        Wb.GetNearPlaneToRef(bb, cb[0]), Wb.GetFarPlaneToRef(bb, cb[1]), Wb.GetLeftPlaneToRef(bb, cb[2]), Wb.GetRightPlaneToRef(bb, cb[3]), Wb.GetTopPlaneToRef(bb, cb[4]), Wb.GetBottomPlaneToRef(bb, cb[5])
      }
      static IsPointInFrustum(bb, cb) {
        for (let sb = 0; sb < 6; sb++)
          if (cb[sb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37368: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(36656);
    class Wb {
      constructor(bb, cb, sb, Wb) {
        this.normal = new kb.p(bb, cb, sb), this.d = Wb
      }
      Osb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let cb = 0;
        return 0 !== bb && (cb = 1 / bb), this.normal.x *= cb, this.normal.y *= cb, this.normal.z *= cb, this.d *= cb, this
      }
      transform(bb) {
        const cb = Wb._TmpMatrix;
        bb.invertToRef(cb);
        const sb = cb.m,
          kb = this.normal.x,
          ab = this.normal.y,
          Tb = this.normal.z,
          Ub = this.d,
          Ib = kb * sb[0] + ab * sb[1] + Tb * sb[2] + Ub * sb[3],
          Hb = kb * sb[4] + ab * sb[5] + Tb * sb[6] + Ub * sb[7],
          fb = kb * sb[8] + ab * sb[9] + Tb * sb[10] + Ub * sb[11],
          Mb = kb * sb[12] + ab * sb[13] + Tb * sb[14] + Ub * sb[15];
        return new Wb(Ib, Hb, fb, Mb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, cb, sb) {
        const kb = cb.x - bb.x,
          Wb = cb.y - bb.y,
          ab = cb.z - bb.z,
          Tb = sb.x - bb.x,
          Ub = sb.y - bb.y,
          Ib = sb.z - bb.z,
          Hb = Wb * Ib - ab * Ub,
          fb = ab * Tb - kb * Ib,
          Mb = kb * Ub - Wb * Tb,
          Xb = Math.sqrt(Hb * Hb + fb * fb + Mb * Mb);
        let nb;
        return nb = 0 !== Xb ? 1 / Xb : 0, this.normal.x = Hb * nb, this.normal.y = fb * nb, this.normal.z = Mb * nb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, cb) {
        return kb.p.Dot(this.normal, bb) <= cb
      }
      signedDistanceTo(bb) {
        return kb.p.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Wb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, cb, sb) {
        const kb = new Wb(0, 0, 0, 0);
        return kb.copyFromPoints(bb, cb, sb), kb
      }
      static FromPositionAndNormal(bb, cb) {
        const sb = new Wb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, cb, sb)
      }
      static FromPositionAndNormalToRef(bb, cb, sb) {
        return sb.normal.ssb(cb), sb.normal.normalize(), sb.d = -bb.dot(sb.normal), sb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, cb, sb) {
        const Wb = -(cb.x * bb.x + cb.y * bb.y + cb.z * bb.z);
        return kb.p.Dot(sb, cb) + Wb
      }
    }
    Wb._TmpMatrix = kb.e.Identity()
  },
  38279: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(38284);
    const Wb = (bb, cb, sb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : sb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(cb) : null;
    class ab {
      static DeepCopy(bb, cb, sb, ab) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ub = function(bb) {
          const cb = [];
          do {
            const sb = Object.getOwnPropertyNames(bb);
            for (const bb of sb) - 1 === cb.indexOf(bb) && cb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return cb
        }(bb);
        for (const Hb of Ub) {
          if ("_" === Hb[0] && (!ab || -1 === ab.indexOf(Hb))) continue;
          if (Hb.endsWith("Observable")) continue;
          if (sb && -1 !== sb.indexOf(Hb)) continue;
          const Ub = bb[Hb],
            fb = typeof Ub;
          if ("function" !== fb) try {
            if ("object" === fb)
              if (Ub instanceof Uint8Array) cb[Hb] = Uint8Array.from(Ub);
              else if (Ub instanceof Array) {
              if (cb[Hb] = [], Ub.length > 0)
                if ("object" == typeof Ub[0])
                  for (let bb = 0; bb < Ub.length; bb++) {
                    const sb = Wb(Ub[bb], cb, Tb); - 1 === cb[Hb].indexOf(sb) && cb[Hb].push(sb)
                  } else cb[Hb] = Ub.slice(0)
            } else cb[Hb] = Wb(Ub, cb, Tb);
            else cb[Hb] = Ub
          } catch (Ib) {
            kb.c.Warn(Ib.message)
          }
        }
      }
    }
  },
  37501: (bb, cb, sb) => {
    function kb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const cb = 16 * Math.random() | 0;
        return ("x" === bb ? cb : 3 & cb | 8).toString(16)
      }))
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  38284: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      static _CheckLimit(bb, cb) {
        let sb = kb._LogLimitOutputs[bb];
        return sb ? sb.current++ : (sb = {
          limit: cb,
          current: 1
        }, kb._LogLimitOutputs[bb] = sb), sb.current <= sb.limit
      }
      static _GenerateLimitMessage(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sb = kb._LogLimitOutputs[bb];
        if (!sb || !kb.MessageLimitReached) return;
        const Wb = this._Levels[cb];
        sb.current === sb.limit && kb[Wb.name](kb.MessageLimitReached.replace(/%LIMIT%/g, "" + sb.limit).replace(/%TYPE%/g, Wb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        kb._LogCache = bb + kb._LogCache, kb.OnNewCacheEntry && kb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const cb = bb => bb < 10 ? "0" + bb : "" + bb,
          sb = new Date;
        return "[" + cb(sb.getHours()) + ":" + cb(sb.getMinutes()) + ":" + cb(sb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, cb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const Wb = Array.isArray(cb) ? cb[0] : cb;
        if (void 0 !== sb && !kb._CheckLimit(Wb, sb)) return;
        const ab = kb._FormatMessage(Wb),
          Tb = this._Levels[bb],
          Ub = Array.isArray(cb) ? cb.slice(1) : [];
        Tb.logFunc && Tb.logFunc("BJS - " + ab, ...Ub);
        const Ib = `<div style='color:${Tb.color}'>${ab}</div><br>`;
        kb._AddLogEntry(Ib), kb._GenerateLimitMessage(Wb, bb)
      }
      static get LogCache() {
        return kb._LogCache
      }
      static ClearLogCache() {
        kb._LogCache = "", kb._LogLimitOutputs = {}, kb.errorsCount = 0
      }
      static set LogLevels(bb) {
        kb.Log = kb._LogDisabled, kb.Warn = kb._LogDisabled, kb.Error = kb._LogDisabled;
        const cb = [kb.MessageLogLevel, kb.WarningLogLevel, kb.ErrorLogLevel];
        for (const sb of cb)
          if ((bb & sb) === sb) {
            const bb = this._Levels[sb];
            kb[bb.name] = kb._LogEnabled.bind(kb, sb)
          }
      }
    }
    kb.NoneLogLevel = 0, kb.MessageLogLevel = 1, kb.WarningLogLevel = 2, kb.ErrorLogLevel = 4, kb.AllLogLevel = 7, kb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", kb._LogCache = "", kb._LogLimitOutputs = {}, kb._Levels = [{}, {
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
    }], kb.errorsCount = 0, kb.Log = kb._LogEnabled.bind(kb, kb.MessageLogLevel), kb.Warn = kb._LogEnabled.bind(kb, kb.WarningLogLevel), kb.Error = kb._LogEnabled.bind(kb, kb.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);