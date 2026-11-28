export const id = 273;
export const ids = [273];
export const modules = {
  38994: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(39001);
    class Hb {
      static GetPlanes(bb) {
        const wb = [];
        for (let Mb = 0; Mb < 6; Mb++) wb.push(new eb.d(0, 0, 0, 0));
        return Hb.GetPlanesToRef(bb, wb), wb
      }
      static GetNearPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[2], wb.normal.y = Mb[7] + Mb[6], wb.normal.z = Mb[11] + Mb[10], wb.d = Mb[15] + Mb[14], wb.normalize()
      }
      static GetFarPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[2], wb.normal.y = Mb[7] - Mb[6], wb.normal.z = Mb[11] - Mb[10], wb.d = Mb[15] - Mb[14], wb.normalize()
      }
      static GetLeftPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[0], wb.normal.y = Mb[7] + Mb[4], wb.normal.z = Mb[11] + Mb[8], wb.d = Mb[15] + Mb[12], wb.normalize()
      }
      static GetRightPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[0], wb.normal.y = Mb[7] - Mb[4], wb.normal.z = Mb[11] - Mb[8], wb.d = Mb[15] - Mb[12], wb.normalize()
      }
      static GetTopPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[1], wb.normal.y = Mb[7] - Mb[5], wb.normal.z = Mb[11] - Mb[9], wb.d = Mb[15] - Mb[13], wb.normalize()
      }
      static GetBottomPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[1], wb.normal.y = Mb[7] + Mb[5], wb.normal.z = Mb[11] + Mb[9], wb.d = Mb[15] + Mb[13], wb.normalize()
      }
      static GetPlanesToRef(bb, wb) {
        Hb.GetNearPlaneToRef(bb, wb[0]), Hb.GetFarPlaneToRef(bb, wb[1]), Hb.GetLeftPlaneToRef(bb, wb[2]), Hb.GetRightPlaneToRef(bb, wb[3]), Hb.GetTopPlaneToRef(bb, wb[4]), Hb.GetBottomPlaneToRef(bb, wb[5])
      }
      static IsPointInFrustum(bb, wb) {
        for (let Mb = 0; Mb < 6; Mb++)
          if (wb[Mb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  39001: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = Mb(38285);
    class Hb {
      constructor(bb, wb, Mb, Hb) {
        this.normal = new eb.o(bb, wb, Mb), this.d = Hb
      }
      ppb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Hb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let wb = 0;
        return 0 !== bb && (wb = 1 / bb), this.normal.x *= wb, this.normal.y *= wb, this.normal.z *= wb, this.d *= wb, this
      }
      transform(bb) {
        const wb = Hb._TmpMatrix;
        bb.invertToRef(wb);
        const Mb = wb.m,
          eb = this.normal.x,
          pb = this.normal.y,
          Vb = this.normal.z,
          gb = this.d,
          lb = eb * Mb[0] + pb * Mb[1] + Vb * Mb[2] + gb * Mb[3],
          Lb = eb * Mb[4] + pb * Mb[5] + Vb * Mb[6] + gb * Mb[7],
          Ib = eb * Mb[8] + pb * Mb[9] + Vb * Mb[10] + gb * Mb[11],
          Ob = eb * Mb[12] + pb * Mb[13] + Vb * Mb[14] + gb * Mb[15];
        return new Hb(lb, Lb, Ib, Ob)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, wb, Mb) {
        const eb = wb.x - bb.x,
          Hb = wb.y - bb.y,
          pb = wb.z - bb.z,
          Vb = Mb.x - bb.x,
          gb = Mb.y - bb.y,
          lb = Mb.z - bb.z,
          Lb = Hb * lb - pb * gb,
          Ib = pb * Vb - eb * lb,
          Ob = eb * gb - Hb * Vb,
          Ub = Math.sqrt(Lb * Lb + Ib * Ib + Ob * Ob);
        let tb;
        return tb = 0 !== Ub ? 1 / Ub : 0, this.normal.x = Lb * tb, this.normal.y = Ib * tb, this.normal.z = Ob * tb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, wb) {
        return eb.o.Dot(this.normal, bb) <= wb
      }
      signedDistanceTo(bb) {
        return eb.o.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Hb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, wb, Mb) {
        const eb = new Hb(0, 0, 0, 0);
        return eb.copyFromPoints(bb, wb, Mb), eb
      }
      static FromPositionAndNormal(bb, wb) {
        const Mb = new Hb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, wb, Mb)
      }
      static FromPositionAndNormalToRef(bb, wb, Mb) {
        return Mb.normal.eZ(wb), Mb.normal.normalize(), Mb.d = -bb.dot(Mb.normal), Mb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, wb, Mb) {
        const Hb = -(wb.x * bb.x + wb.y * bb.y + wb.z * bb.z);
        return eb.o.Dot(Mb, wb) + Hb
      }
    }
    Hb._TmpMatrix = eb.b.Identity()
  },
  39966: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(39971);
    const Hb = (bb, wb, Mb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Mb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(wb) : null;
    class pb {
      static DeepCopy(bb, wb, Mb, pb) {
        let Vb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const gb = function(bb) {
          const wb = [];
          do {
            const Mb = Object.getOwnPropertyNames(bb);
            for (const bb of Mb) - 1 === wb.indexOf(bb) && wb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return wb
        }(bb);
        for (const Lb of gb) {
          if ("_" === Lb[0] && (!pb || -1 === pb.indexOf(Lb))) continue;
          if (Lb.endsWith("Observable")) continue;
          if (Mb && -1 !== Mb.indexOf(Lb)) continue;
          const gb = bb[Lb],
            Ib = typeof gb;
          if ("function" !== Ib) try {
            if ("object" === Ib)
              if (gb instanceof Uint8Array) wb[Lb] = Uint8Array.from(gb);
              else if (gb instanceof Array) {
              if (wb[Lb] = [], gb.length > 0)
                if ("object" == typeof gb[0])
                  for (let bb = 0; bb < gb.length; bb++) {
                    const Mb = Hb(gb[bb], wb, Vb); - 1 === wb[Lb].indexOf(Mb) && wb[Lb].push(Mb)
                  } else wb[Lb] = gb.slice(0)
            } else wb[Lb] = Hb(gb, wb, Vb);
            else wb[Lb] = gb
          } catch (lb) {
            eb.b.Warn(lb.message)
          }
        }
      }
    }
  },
  39148: (bb, wb, Mb) => {
    function eb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const wb = 16 * Math.random() | 0;
        return ("x" === bb ? wb : 3 & wb | 8).toString(16)
      }))
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  39971: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      static _CheckLimit(bb, wb) {
        let Mb = eb._LogLimitOutputs[bb];
        return Mb ? Mb.current++ : (Mb = {
          limit: wb,
          current: 1
        }, eb._LogLimitOutputs[bb] = Mb), Mb.current <= Mb.limit
      }
      static _GenerateLimitMessage(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Mb = eb._LogLimitOutputs[bb];
        if (!Mb || !eb.MessageLimitReached) return;
        const Hb = this._Levels[wb];
        Mb.current === Mb.limit && eb[Hb.name](eb.MessageLimitReached.replace(/%LIMIT%/g, "" + Mb.limit).replace(/%TYPE%/g, Hb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        eb._LogCache = bb + eb._LogCache, eb.OnNewCacheEntry && eb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const wb = bb => bb < 10 ? "0" + bb : "" + bb,
          Mb = new Date;
        return "[" + wb(Mb.getHours()) + ":" + wb(Mb.getMinutes()) + ":" + wb(Mb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, wb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const Hb = Array.isArray(wb) ? wb[0] : wb;
        if (void 0 !== Mb && !eb._CheckLimit(Hb, Mb)) return;
        const pb = eb._FormatMessage(Hb),
          Vb = this._Levels[bb],
          gb = Array.isArray(wb) ? wb.slice(1) : [];
        Vb.logFunc && Vb.logFunc("BJS - " + pb, ...gb);
        const lb = `<div style='color:${Vb.color}'>${pb}</div><br>`;
        eb._AddLogEntry(lb), eb._GenerateLimitMessage(Hb, bb)
      }
      static get LogCache() {
        return eb._LogCache
      }
      static ClearLogCache() {
        eb._LogCache = "", eb._LogLimitOutputs = {}, eb.errorsCount = 0
      }
      static set LogLevels(bb) {
        eb.Log = eb._LogDisabled, eb.Warn = eb._LogDisabled, eb.Error = eb._LogDisabled;
        const wb = [eb.MessageLogLevel, eb.WarningLogLevel, eb.ErrorLogLevel];
        for (const Mb of wb)
          if ((bb & Mb) === Mb) {
            const bb = this._Levels[Mb];
            eb[bb.name] = eb._LogEnabled.bind(eb, Mb)
          }
      }
    }
    eb.NoneLogLevel = 0, eb.MessageLogLevel = 1, eb.WarningLogLevel = 2, eb.ErrorLogLevel = 4, eb.AllLogLevel = 7, eb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", eb._LogCache = "", eb._LogLimitOutputs = {}, eb._Levels = [{}, {
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
    }], eb.errorsCount = 0, eb.Log = eb._LogEnabled.bind(eb, eb.MessageLogLevel), eb.Warn = eb._LogEnabled.bind(eb, eb.WarningLogLevel), eb.Error = eb._LogEnabled.bind(eb, eb.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);