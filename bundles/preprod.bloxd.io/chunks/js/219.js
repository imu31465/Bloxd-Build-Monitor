export const id = 219;
export const ids = [219];
export const modules = {
  36425: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(36434);
    class hy {
      static GetPlanes(yb) {
        const bb = [];
        for (let Wy = 0; Wy < 6; Wy++) bb.push(new Uy.c(0, 0, 0, 0));
        return hy.GetPlanesToRef(yb, bb), bb
      }
      static GetNearPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[2], bb.normal.y = Wy[7] + Wy[6], bb.normal.z = Wy[11] + Wy[10], bb.d = Wy[15] + Wy[14], bb.normalize()
      }
      static GetFarPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[2], bb.normal.y = Wy[7] - Wy[6], bb.normal.z = Wy[11] - Wy[10], bb.d = Wy[15] - Wy[14], bb.normalize()
      }
      static GetLeftPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[0], bb.normal.y = Wy[7] + Wy[4], bb.normal.z = Wy[11] + Wy[8], bb.d = Wy[15] + Wy[12], bb.normalize()
      }
      static GetRightPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[0], bb.normal.y = Wy[7] - Wy[4], bb.normal.z = Wy[11] - Wy[8], bb.d = Wy[15] - Wy[12], bb.normalize()
      }
      static GetTopPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[1], bb.normal.y = Wy[7] - Wy[5], bb.normal.z = Wy[11] - Wy[9], bb.d = Wy[15] - Wy[13], bb.normalize()
      }
      static GetBottomPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[1], bb.normal.y = Wy[7] + Wy[5], bb.normal.z = Wy[11] + Wy[9], bb.d = Wy[15] + Wy[13], bb.normalize()
      }
      static GetPlanesToRef(yb, bb) {
        hy.GetNearPlaneToRef(yb, bb[0]), hy.GetFarPlaneToRef(yb, bb[1]), hy.GetLeftPlaneToRef(yb, bb[2]), hy.GetRightPlaneToRef(yb, bb[3]), hy.GetTopPlaneToRef(yb, bb[4]), hy.GetBottomPlaneToRef(yb, bb[5])
      }
      static IsPointInFrustum(yb, bb) {
        for (let Wy = 0; Wy < 6; Wy++)
          if (bb[Wy].dotCoordinate(yb) < 0) return !1;
        return !0
      }
    }
  },
  36434: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(35861);
    class hy {
      constructor(yb, bb, Wy, hy) {
        this.normal = new Uy.n(yb, bb, Wy), this.d = hy
      }
      hBy() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new hy(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let yb = this.normal.getHashCode();
        return yb = 397 * yb ^ this.d, yb
      }
      normalize() {
        const yb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bb = 0;
        return 0 !== yb && (bb = 1 / yb), this.normal.x *= bb, this.normal.y *= bb, this.normal.z *= bb, this.d *= bb, this
      }
      transform(yb) {
        const bb = hy._TmpMatrix;
        yb.invertToRef(bb);
        const Wy = bb.m,
          Uy = this.normal.x,
          fy = this.normal.y,
          Zy = this.normal.z,
          cb = this.d,
          Py = Uy * Wy[0] + fy * Wy[1] + Zy * Wy[2] + cb * Wy[3],
          oy = Uy * Wy[4] + fy * Wy[5] + Zy * Wy[6] + cb * Wy[7],
          By = Uy * Wy[8] + fy * Wy[9] + Zy * Wy[10] + cb * Wy[11],
          Ky = Uy * Wy[12] + fy * Wy[13] + Zy * Wy[14] + cb * Wy[15];
        return new hy(Py, oy, By, Ky)
      }
      dotCoordinate(yb) {
        return this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z + this.d
      }
      copyFromPoints(yb, bb, Wy) {
        const Uy = bb.x - yb.x,
          hy = bb.y - yb.y,
          fy = bb.z - yb.z,
          Zy = Wy.x - yb.x,
          cb = Wy.y - yb.y,
          Py = Wy.z - yb.z,
          oy = hy * Py - fy * cb,
          By = fy * Zy - Uy * Py,
          Ky = Uy * cb - hy * Zy,
          ey = Math.sqrt(oy * oy + By * By + Ky * Ky);
        let qb;
        return qb = 0 !== ey ? 1 / ey : 0, this.normal.x = oy * qb, this.normal.y = By * qb, this.normal.z = Ky * qb, this.d = -(this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z), this
      }
      isFrontFacingTo(yb, bb) {
        return Uy.n.Dot(this.normal, yb) <= bb
      }
      signedDistanceTo(yb) {
        return Uy.n.Dot(yb, this.normal) + this.d
      }
      static FromArray(yb) {
        return new hy(yb[0], yb[1], yb[2], yb[3])
      }
      static FromPoints(yb, bb, Wy) {
        const Uy = new hy(0, 0, 0, 0);
        return Uy.copyFromPoints(yb, bb, Wy), Uy
      }
      static FromPositionAndNormal(yb, bb) {
        const Wy = new hy(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(yb, bb, Wy)
      }
      static FromPositionAndNormalToRef(yb, bb, Wy) {
        return Wy.normal.Coy(bb), Wy.normal.normalize(), Wy.d = -yb.dot(Wy.normal), Wy
      }
      static SignedDistanceToPlaneFromPositionAndNormal(yb, bb, Wy) {
        const hy = -(bb.x * yb.x + bb.y * yb.y + bb.z * yb.z);
        return Uy.n.Dot(Wy, bb) + hy
      }
    }
    hy._TmpMatrix = Uy.c.Identity()
  },
  37346: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(37350);
    const hy = (yb, bb, Wy) => yb ? yb.getClassName && "Mesh" === yb.getClassName() ? null : !yb.getClassName || "SubMesh" !== yb.getClassName() && "PhysicsBody" !== yb.getClassName() ? yb.clone ? yb.clone() : Array.isArray(yb) ? yb.slice() : Wy && "object" === typeof yb ? {
      ...yb
    } : null : yb.clone(bb) : null;
    class fy {
      static DeepCopy(yb, bb, Wy, fy) {
        let Zy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const cb = function(yb) {
          const bb = [];
          do {
            const Wy = Object.getOwnPropertyNames(yb);
            for (const yb of Wy) - 1 === bb.indexOf(yb) && bb.push(yb)
          } while (yb = Object.getPrototypeOf(yb));
          return bb
        }(yb);
        for (const oy of cb) {
          if ("_" === oy[0] && (!fy || -1 === fy.indexOf(oy))) continue;
          if (oy.endsWith("Observable")) continue;
          if (Wy && -1 !== Wy.indexOf(oy)) continue;
          const cb = yb[oy],
            By = typeof cb;
          if ("function" !== By) try {
            if ("object" === By)
              if (cb instanceof Uint8Array) bb[oy] = Uint8Array.from(cb);
              else if (cb instanceof Array) {
              if (bb[oy] = [], cb.length > 0)
                if ("object" == typeof cb[0])
                  for (let yb = 0; yb < cb.length; yb++) {
                    const Wy = hy(cb[yb], bb, Zy); - 1 === bb[oy].indexOf(Wy) && bb[oy].push(Wy)
                  } else bb[oy] = cb.slice(0)
            } else bb[oy] = hy(cb, bb, Zy);
            else bb[oy] = cb
          } catch (Py) {
            Uy.b.Warn(Py.message)
          }
        }
      }
    }
  },
  36559: (yb, bb, Wy) => {
    function Uy() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (yb => {
        const bb = 16 * Math.random() | 0;
        return ("x" === yb ? bb : 3 & bb | 8).toString(16)
      }))
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  37350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      static _CheckLimit(yb, bb) {
        let Wy = Uy._LogLimitOutputs[yb];
        return Wy ? Wy.current++ : (Wy = {
          limit: bb,
          current: 1
        }, Uy._LogLimitOutputs[yb] = Wy), Wy.current <= Wy.limit
      }
      static _GenerateLimitMessage(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Wy = Uy._LogLimitOutputs[yb];
        if (!Wy || !Uy.MessageLimitReached) return;
        const hy = this._Levels[bb];
        Wy.current === Wy.limit && Uy[hy.name](Uy.MessageLimitReached.replace(/%LIMIT%/g, "" + Wy.limit).replace(/%TYPE%/g, hy.name ?? ""))
      }
      static _AddLogEntry(yb) {
        Uy._LogCache = yb + Uy._LogCache, Uy.OnNewCacheEntry && Uy.OnNewCacheEntry(yb)
      }
      static _FormatMessage(yb) {
        const bb = yb => yb < 10 ? "0" + yb : "" + yb,
          Wy = new Date;
        return "[" + bb(Wy.getHours()) + ":" + bb(Wy.getMinutes()) + ":" + bb(Wy.getSeconds()) + "]: " + yb
      }
      static _LogDisabled(yb, bb) {}
      static _LogEnabled() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const hy = Array.isArray(bb) ? bb[0] : bb;
        if (void 0 !== Wy && !Uy._CheckLimit(hy, Wy)) return;
        const fy = Uy._FormatMessage(hy),
          Zy = this._Levels[yb],
          cb = Array.isArray(bb) ? bb.slice(1) : [];
        Zy.logFunc && Zy.logFunc("BJS - " + fy, ...cb);
        const Py = `<div style='color:${Zy.color}'>${fy}</div><br>`;
        Uy._AddLogEntry(Py), Uy._GenerateLimitMessage(hy, yb)
      }
      static get LogCache() {
        return Uy._LogCache
      }
      static ClearLogCache() {
        Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy.errorsCount = 0
      }
      static set LogLevels(yb) {
        Uy.Log = Uy._LogDisabled, Uy.Warn = Uy._LogDisabled, Uy.Error = Uy._LogDisabled;
        const bb = [Uy.MessageLogLevel, Uy.WarningLogLevel, Uy.ErrorLogLevel];
        for (const Wy of bb)
          if ((yb & Wy) === Wy) {
            const yb = this._Levels[Wy];
            Uy[yb.name] = Uy._LogEnabled.bind(Uy, Wy)
          }
      }
    }
    Uy.NoneLogLevel = 0, Uy.MessageLogLevel = 1, Uy.WarningLogLevel = 2, Uy.ErrorLogLevel = 4, Uy.AllLogLevel = 7, Uy.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy._Levels = [{}, {
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
    }], Uy.errorsCount = 0, Uy.Log = Uy._LogEnabled.bind(Uy, Uy.MessageLogLevel), Uy.Warn = Uy._LogEnabled.bind(Uy, Uy.WarningLogLevel), Uy.Error = Uy._LogEnabled.bind(Uy, Uy.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);