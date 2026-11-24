export const id = 245;
export const ids = [244, 245];
export const modules = {
  61380: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      RegisterShaderMaterial: () => Op.e,
      ShaderMaterial: () => Op.q,
      ShaderMaterialCreateFromSnippetAsync: () => Op.f,
      ShaderMaterialParse: () => Op.p,
      ShaderMaterialParseFromFileAsync: () => Op.j,
      ShaderMaterialParseFromSnippetAsync: () => Op.m
    });
    var Op = cp(40647);
    (0, Op.e)()
  },
  37985: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = cp(37989);
    class op {
      static GetPlanes(pp) {
        const ip = [];
        for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
        return op.GetPlanesToRef(pp, ip), ip
      }
      static GetNearPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
      }
      static GetFarPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
      }
      static GetLeftPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
      }
      static GetRightPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
      }
      static GetTopPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
      }
      static GetBottomPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
      }
      static GetPlanesToRef(pp, ip) {
        op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
      }
      static IsPointInFrustum(pp, ip) {
        for (let cp = 0; cp < 6; cp++)
          if (ip[cp].dotCoordinate(pp) < 0) return !1;
        return !0
      }
    }
  },
  37989: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(37320);
    class op {
      constructor(pp, ip, cp, op) {
        this.normal = new Op.o(pp, ip, cp), this.d = op
      }
      BOp() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let pp = this.normal.getHashCode();
        return pp = 397 * pp ^ this.d, pp
      }
      normalize() {
        const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ip = 0;
        return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
      }
      transform(pp) {
        const ip = op._TmpMatrix;
        pp.invertToRef(ip);
        const cp = ip.m,
          Op = this.normal.x,
          Ip = this.normal.y,
          Sp = this.normal.z,
          xp = this.d,
          Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
          Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
          Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
          Ap = Op * cp[12] + Ip * cp[13] + Sp * cp[14] + xp * cp[15];
        return new op(Lp, Yp, Dp, Ap)
      }
      dotCoordinate(pp) {
        return this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z + this.d
      }
      copyFromPoints(pp, ip, cp) {
        const Op = ip.x - pp.x,
          op = ip.y - pp.y,
          Ip = ip.z - pp.z,
          Sp = cp.x - pp.x,
          xp = cp.y - pp.y,
          Lp = cp.z - pp.z,
          Yp = op * Lp - Ip * xp,
          Dp = Ip * Sp - Op * Lp,
          Ap = Op * xp - op * Sp,
          Pp = Math.sqrt(Yp * Yp + Dp * Dp + Ap * Ap);
        let Wp;
        return Wp = 0 !== Pp ? 1 / Pp : 0, this.normal.x = Yp * Wp, this.normal.y = Dp * Wp, this.normal.z = Ap * Wp, this.d = -(this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z), this
      }
      isFrontFacingTo(pp, ip) {
        return Op.o.Dot(this.normal, pp) <= ip
      }
      signedDistanceTo(pp) {
        return Op.o.Dot(pp, this.normal) + this.d
      }
      static FromArray(pp) {
        return new op(pp[0], pp[1], pp[2], pp[3])
      }
      static FromPoints(pp, ip, cp) {
        const Op = new op(0, 0, 0, 0);
        return Op.copyFromPoints(pp, ip, cp), Op
      }
      static FromPositionAndNormal(pp, ip) {
        const cp = new op(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(pp, ip, cp)
      }
      static FromPositionAndNormalToRef(pp, ip, cp) {
        return cp.normal.rM(ip), cp.normal.normalize(), cp.d = -pp.dot(cp.normal), cp
      }
      static SignedDistanceToPlaneFromPositionAndNormal(pp, ip, cp) {
        const op = -(ip.x * pp.x + ip.y * pp.y + ip.z * pp.z);
        return Op.o.Dot(cp, ip) + op
      }
    }
    op._TmpMatrix = Op.b.Identity()
  },
  38900: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(38905);
    const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
      ...pp
    } : null : pp.clone(ip) : null;
    class Ip {
      static DeepCopy(pp, ip, cp, Ip) {
        let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xp = function(pp) {
          const ip = [];
          do {
            const cp = Object.getOwnPropertyNames(pp);
            for (const pp of cp) - 1 === ip.indexOf(pp) && ip.push(pp)
          } while (pp = Object.getPrototypeOf(pp));
          return ip
        }(pp);
        for (const Yp of xp) {
          if ("_" === Yp[0] && (!Ip || -1 === Ip.indexOf(Yp))) continue;
          if (Yp.endsWith("Observable")) continue;
          if (cp && -1 !== cp.indexOf(Yp)) continue;
          const xp = pp[Yp],
            Dp = typeof xp;
          if ("function" !== Dp) try {
            if ("object" === Dp)
              if (xp instanceof Uint8Array) ip[Yp] = Uint8Array.from(xp);
              else if (xp instanceof Array) {
              if (ip[Yp] = [], xp.length > 0)
                if ("object" == typeof xp[0])
                  for (let pp = 0; pp < xp.length; pp++) {
                    const cp = op(xp[pp], ip, Sp); - 1 === ip[Yp].indexOf(cp) && ip[Yp].push(cp)
                  } else ip[Yp] = xp.slice(0)
            } else ip[Yp] = op(xp, ip, Sp);
            else ip[Yp] = xp
          } catch (Lp) {
            Op.e.Warn(Lp.message)
          }
        }
      }
    }
  },
  38124: (pp, ip, cp) => {
    function Op() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
        const ip = 16 * Math.random() | 0;
        return ("x" === pp ? ip : 3 & ip | 8).toString(16)
      }))
    }
    cp.d(ip, {
      e: () => Op
    })
  },
  38905: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      static _CheckLimit(pp, ip) {
        let cp = Op._LogLimitOutputs[pp];
        return cp ? cp.current++ : (cp = {
          limit: ip,
          current: 1
        }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
      }
      static _GenerateLimitMessage(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cp = Op._LogLimitOutputs[pp];
        if (!cp || !Op.MessageLimitReached) return;
        const op = this._Levels[ip];
        cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
      }
      static _AddLogEntry(pp) {
        Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
      }
      static _FormatMessage(pp) {
        const ip = pp => pp < 10 ? "0" + pp : "" + pp,
          cp = new Date;
        return "[" + ip(cp.getHours()) + ":" + ip(cp.getMinutes()) + ":" + ip(cp.getSeconds()) + "]: " + pp
      }
      static _LogDisabled(pp, ip) {}
      static _LogEnabled() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const op = Array.isArray(ip) ? ip[0] : ip;
        if (void 0 !== cp && !Op._CheckLimit(op, cp)) return;
        const Ip = Op._FormatMessage(op),
          Sp = this._Levels[pp],
          xp = Array.isArray(ip) ? ip.slice(1) : [];
        Sp.logFunc && Sp.logFunc("BJS - " + Ip, ...xp);
        const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
        Op._AddLogEntry(Lp), Op._GenerateLimitMessage(op, pp)
      }
      static get LogCache() {
        return Op._LogCache
      }
      static ClearLogCache() {
        Op._LogCache = "", Op._LogLimitOutputs = {}, Op.errorsCount = 0
      }
      static set LogLevels(pp) {
        Op.Log = Op._LogDisabled, Op.Warn = Op._LogDisabled, Op.Error = Op._LogDisabled;
        const ip = [Op.MessageLogLevel, Op.WarningLogLevel, Op.ErrorLogLevel];
        for (const cp of ip)
          if ((pp & cp) === cp) {
            const pp = this._Levels[cp];
            Op[pp.name] = Op._LogEnabled.bind(Op, cp)
          }
      }
    }
    Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels = [{}, {
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
    }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);