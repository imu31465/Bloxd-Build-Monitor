export const id = 234;
export const ids = [233, 234];
export const modules = {
  60594: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      RegisterShaderMaterial: () => Bb.d,
      ShaderMaterial: () => Bb.p,
      ShaderMaterialCreateFromSnippetAsync: () => Bb.f,
      ShaderMaterialParse: () => Bb.m,
      ShaderMaterialParseFromFileAsync: () => Bb.i,
      ShaderMaterialParseFromSnippetAsync: () => Bb.k
    });
    var Bb = hb(39928);
    (0, Bb.d)()
  },
  37390: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(37399);
    class Ob {
      static GetPlanes(bb) {
        const ub = [];
        for (let hb = 0; hb < 6; hb++) ub.push(new Bb.d(0, 0, 0, 0));
        return Ob.GetPlanesToRef(bb, ub), ub
      }
      static GetNearPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[2], ub.normal.y = hb[7] + hb[6], ub.normal.z = hb[11] + hb[10], ub.d = hb[15] + hb[14], ub.normalize()
      }
      static GetFarPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[2], ub.normal.y = hb[7] - hb[6], ub.normal.z = hb[11] - hb[10], ub.d = hb[15] - hb[14], ub.normalize()
      }
      static GetLeftPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[0], ub.normal.y = hb[7] + hb[4], ub.normal.z = hb[11] + hb[8], ub.d = hb[15] + hb[12], ub.normalize()
      }
      static GetRightPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[0], ub.normal.y = hb[7] - hb[4], ub.normal.z = hb[11] - hb[8], ub.d = hb[15] - hb[12], ub.normalize()
      }
      static GetTopPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[1], ub.normal.y = hb[7] - hb[5], ub.normal.z = hb[11] - hb[9], ub.d = hb[15] - hb[13], ub.normalize()
      }
      static GetBottomPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[1], ub.normal.y = hb[7] + hb[5], ub.normal.z = hb[11] + hb[9], ub.d = hb[15] + hb[13], ub.normalize()
      }
      static GetPlanesToRef(bb, ub) {
        Ob.GetNearPlaneToRef(bb, ub[0]), Ob.GetFarPlaneToRef(bb, ub[1]), Ob.GetLeftPlaneToRef(bb, ub[2]), Ob.GetRightPlaneToRef(bb, ub[3]), Ob.GetTopPlaneToRef(bb, ub[4]), Ob.GetBottomPlaneToRef(bb, ub[5])
      }
      static IsPointInFrustum(bb, ub) {
        for (let hb = 0; hb < 6; hb++)
          if (ub[hb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37399: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(36727);
    class Ob {
      constructor(bb, ub, hb, Ob) {
        this.normal = new Bb.q(bb, ub, hb), this.d = Ob
      }
      ZBb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ob(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ub = 0;
        return 0 !== bb && (ub = 1 / bb), this.normal.x *= ub, this.normal.y *= ub, this.normal.z *= ub, this.d *= ub, this
      }
      transform(bb) {
        const ub = Ob._TmpMatrix;
        bb.invertToRef(ub);
        const hb = ub.m,
          Bb = this.normal.x,
          Gb = this.normal.y,
          Ub = this.normal.z,
          Lb = this.d,
          Yb = Bb * hb[0] + Gb * hb[1] + Ub * hb[2] + Lb * hb[3],
          Sb = Bb * hb[4] + Gb * hb[5] + Ub * hb[6] + Lb * hb[7],
          ab = Bb * hb[8] + Gb * hb[9] + Ub * hb[10] + Lb * hb[11],
          Hb = Bb * hb[12] + Gb * hb[13] + Ub * hb[14] + Lb * hb[15];
        return new Ob(Yb, Sb, ab, Hb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ub, hb) {
        const Bb = ub.x - bb.x,
          Ob = ub.y - bb.y,
          Gb = ub.z - bb.z,
          Ub = hb.x - bb.x,
          Lb = hb.y - bb.y,
          Yb = hb.z - bb.z,
          Sb = Ob * Yb - Gb * Lb,
          ab = Gb * Ub - Bb * Yb,
          Hb = Bb * Lb - Ob * Ub,
          wb = Math.sqrt(Sb * Sb + ab * ab + Hb * Hb);
        let Zb;
        return Zb = 0 !== wb ? 1 / wb : 0, this.normal.x = Sb * Zb, this.normal.y = ab * Zb, this.normal.z = Hb * Zb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ub) {
        return Bb.q.Dot(this.normal, bb) <= ub
      }
      signedDistanceTo(bb) {
        return Bb.q.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Ob(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ub, hb) {
        const Bb = new Ob(0, 0, 0, 0);
        return Bb.copyFromPoints(bb, ub, hb), Bb
      }
      static FromPositionAndNormal(bb, ub) {
        const hb = new Ob(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ub, hb)
      }
      static FromPositionAndNormalToRef(bb, ub, hb) {
        return hb.normal.mD(ub), hb.normal.normalize(), hb.d = -bb.dot(hb.normal), hb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ub, hb) {
        const Ob = -(ub.x * bb.x + ub.y * bb.y + ub.z * bb.z);
        return Bb.q.Dot(hb, ub) + Ob
      }
    }
    Ob._TmpMatrix = Bb.d.Identity()
  },
  38296: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(38302);
    const Ob = (bb, ub, hb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : hb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ub) : null;
    class Gb {
      static DeepCopy(bb, ub, hb, Gb) {
        let Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Lb = function(bb) {
          const ub = [];
          do {
            const hb = Object.getOwnPropertyNames(bb);
            for (const bb of hb) - 1 === ub.indexOf(bb) && ub.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ub
        }(bb);
        for (const Sb of Lb) {
          if ("_" === Sb[0] && (!Gb || -1 === Gb.indexOf(Sb))) continue;
          if (Sb.endsWith("Observable")) continue;
          if (hb && -1 !== hb.indexOf(Sb)) continue;
          const Lb = bb[Sb],
            ab = typeof Lb;
          if ("function" !== ab) try {
            if ("object" === ab)
              if (Lb instanceof Uint8Array) ub[Sb] = Uint8Array.from(Lb);
              else if (Lb instanceof Array) {
              if (ub[Sb] = [], Lb.length > 0)
                if ("object" == typeof Lb[0])
                  for (let bb = 0; bb < Lb.length; bb++) {
                    const hb = Ob(Lb[bb], ub, Ub); - 1 === ub[Sb].indexOf(hb) && ub[Sb].push(hb)
                  } else ub[Sb] = Lb.slice(0)
            } else ub[Sb] = Ob(Lb, ub, Ub);
            else ub[Sb] = Lb
          } catch (Yb) {
            Bb.b.Warn(Yb.message)
          }
        }
      }
    }
  },
  37507: (bb, ub, hb) => {
    function Bb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ub = 16 * Math.random() | 0;
        return ("x" === bb ? ub : 3 & ub | 8).toString(16)
      }))
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  38302: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      static _CheckLimit(bb, ub) {
        let hb = Bb._LogLimitOutputs[bb];
        return hb ? hb.current++ : (hb = {
          limit: ub,
          current: 1
        }, Bb._LogLimitOutputs[bb] = hb), hb.current <= hb.limit
      }
      static _GenerateLimitMessage(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const hb = Bb._LogLimitOutputs[bb];
        if (!hb || !Bb.MessageLimitReached) return;
        const Ob = this._Levels[ub];
        hb.current === hb.limit && Bb[Ob.name](Bb.MessageLimitReached.replace(/%LIMIT%/g, "" + hb.limit).replace(/%TYPE%/g, Ob.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Bb._LogCache = bb + Bb._LogCache, Bb.OnNewCacheEntry && Bb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ub = bb => bb < 10 ? "0" + bb : "" + bb,
          hb = new Date;
        return "[" + ub(hb.getHours()) + ":" + ub(hb.getMinutes()) + ":" + ub(hb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ub) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Ob = Array.isArray(ub) ? ub[0] : ub;
        if (void 0 !== hb && !Bb._CheckLimit(Ob, hb)) return;
        const Gb = Bb._FormatMessage(Ob),
          Ub = this._Levels[bb],
          Lb = Array.isArray(ub) ? ub.slice(1) : [];
        Ub.logFunc && Ub.logFunc("BJS - " + Gb, ...Lb);
        const Yb = `<div style='color:${Ub.color}'>${Gb}</div><br>`;
        Bb._AddLogEntry(Yb), Bb._GenerateLimitMessage(Ob, bb)
      }
      static get LogCache() {
        return Bb._LogCache
      }
      static ClearLogCache() {
        Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb.errorsCount = 0
      }
      static set LogLevels(bb) {
        Bb.Log = Bb._LogDisabled, Bb.Warn = Bb._LogDisabled, Bb.Error = Bb._LogDisabled;
        const ub = [Bb.MessageLogLevel, Bb.WarningLogLevel, Bb.ErrorLogLevel];
        for (const hb of ub)
          if ((bb & hb) === hb) {
            const bb = this._Levels[hb];
            Bb[bb.name] = Bb._LogEnabled.bind(Bb, hb)
          }
      }
    }
    Bb.NoneLogLevel = 0, Bb.MessageLogLevel = 1, Bb.WarningLogLevel = 2, Bb.ErrorLogLevel = 4, Bb.AllLogLevel = 7, Bb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb._Levels = [{}, {
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
    }], Bb.errorsCount = 0, Bb.Log = Bb._LogEnabled.bind(Bb, Bb.MessageLogLevel), Bb.Warn = Bb._LogEnabled.bind(Bb, Bb.WarningLogLevel), Bb.Error = Bb._LogEnabled.bind(Bb, Bb.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);