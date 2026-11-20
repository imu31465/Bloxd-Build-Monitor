export const id = 233;
export const ids = [233];
export const modules = {
  37758: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(37767);
    class lq {
      static GetPlanes(qq) {
        const Eq = [];
        for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
        return lq.GetPlanesToRef(qq, Eq), Eq
      }
      static GetNearPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
      }
      static GetFarPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
      }
      static GetLeftPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[0], Eq.normal.y = gq[7] + gq[4], Eq.normal.z = gq[11] + gq[8], Eq.d = gq[15] + gq[12], Eq.normalize()
      }
      static GetRightPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[0], Eq.normal.y = gq[7] - gq[4], Eq.normal.z = gq[11] - gq[8], Eq.d = gq[15] - gq[12], Eq.normalize()
      }
      static GetTopPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[1], Eq.normal.y = gq[7] - gq[5], Eq.normal.z = gq[11] - gq[9], Eq.d = gq[15] - gq[13], Eq.normalize()
      }
      static GetBottomPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[1], Eq.normal.y = gq[7] + gq[5], Eq.normal.z = gq[11] + gq[9], Eq.d = gq[15] + gq[13], Eq.normalize()
      }
      static GetPlanesToRef(qq, Eq) {
        lq.GetNearPlaneToRef(qq, Eq[0]), lq.GetFarPlaneToRef(qq, Eq[1]), lq.GetLeftPlaneToRef(qq, Eq[2]), lq.GetRightPlaneToRef(qq, Eq[3]), lq.GetTopPlaneToRef(qq, Eq[4]), lq.GetBottomPlaneToRef(qq, Eq[5])
      }
      static IsPointInFrustum(qq, Eq) {
        for (let gq = 0; gq < 6; gq++)
          if (Eq[gq].dotCoordinate(qq) < 0) return !1;
        return !0
      }
    }
  },
  37767: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    var Yq = gq(37139);
    class lq {
      constructor(qq, Eq, gq, lq) {
        this.normal = new Yq.q(qq, Eq, gq), this.d = lq
      }
      bYq() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let qq = this.normal.getHashCode();
        return qq = 397 * qq ^ this.d, qq
      }
      normalize() {
        const qq = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Eq = 0;
        return 0 !== qq && (Eq = 1 / qq), this.normal.x *= Eq, this.normal.y *= Eq, this.normal.z *= Eq, this.d *= Eq, this
      }
      transform(qq) {
        const Eq = lq._TmpMatrix;
        qq.invertToRef(Eq);
        const gq = Eq.m,
          Yq = this.normal.x,
          Oq = this.normal.y,
          mq = this.normal.z,
          xq = this.d,
          Aq = Yq * gq[0] + Oq * gq[1] + mq * gq[2] + xq * gq[3],
          cq = Yq * gq[4] + Oq * gq[5] + mq * gq[6] + xq * gq[7],
          uq = Yq * gq[8] + Oq * gq[9] + mq * gq[10] + xq * gq[11],
          Bq = Yq * gq[12] + Oq * gq[13] + mq * gq[14] + xq * gq[15];
        return new lq(Aq, cq, uq, Bq)
      }
      dotCoordinate(qq) {
        return this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z + this.d
      }
      copyFromPoints(qq, Eq, gq) {
        const Yq = Eq.x - qq.x,
          lq = Eq.y - qq.y,
          Oq = Eq.z - qq.z,
          mq = gq.x - qq.x,
          xq = gq.y - qq.y,
          Aq = gq.z - qq.z,
          cq = lq * Aq - Oq * xq,
          uq = Oq * mq - Yq * Aq,
          Bq = Yq * xq - lq * mq,
          Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
        let Nq;
        return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
      }
      isFrontFacingTo(qq, Eq) {
        return Yq.q.Dot(this.normal, qq) <= Eq
      }
      signedDistanceTo(qq) {
        return Yq.q.Dot(qq, this.normal) + this.d
      }
      static FromArray(qq) {
        return new lq(qq[0], qq[1], qq[2], qq[3])
      }
      static FromPoints(qq, Eq, gq) {
        const Yq = new lq(0, 0, 0, 0);
        return Yq.copyFromPoints(qq, Eq, gq), Yq
      }
      static FromPositionAndNormal(qq, Eq) {
        const gq = new lq(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(qq, Eq, gq)
      }
      static FromPositionAndNormalToRef(qq, Eq, gq) {
        return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
      }
      static SignedDistanceToPlaneFromPositionAndNormal(qq, Eq, gq) {
        const lq = -(Eq.x * qq.x + Eq.y * qq.y + Eq.z * qq.z);
        return Yq.q.Dot(gq, Eq) + lq
      }
    }
    lq._TmpMatrix = Yq.e.Identity()
  },
  38649: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(38653);
    const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
      ...qq
    } : null : qq.clone(Eq) : null;
    class Oq {
      static DeepCopy(qq, Eq, gq, Oq) {
        let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xq = function(qq) {
          const Eq = [];
          do {
            const gq = Object.getOwnPropertyNames(qq);
            for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
          } while (qq = Object.getPrototypeOf(qq));
          return Eq
        }(qq);
        for (const cq of xq) {
          if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
          if (cq.endsWith("Observable")) continue;
          if (gq && -1 !== gq.indexOf(cq)) continue;
          const xq = qq[cq],
            uq = typeof xq;
          if ("function" !== uq) try {
            if ("object" === uq)
              if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
              else if (xq instanceof Array) {
              if (Eq[cq] = [], xq.length > 0)
                if ("object" == typeof xq[0])
                  for (let qq = 0; qq < xq.length; qq++) {
                    const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
                  } else Eq[cq] = xq.slice(0)
            } else Eq[cq] = lq(xq, Eq, mq);
            else Eq[cq] = xq
          } catch (Aq) {
            Yq.b.Warn(Aq.message)
          }
        }
      }
    }
  },
  37872: (qq, Eq, gq) => {
    function Yq() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
        const Eq = 16 * Math.random() | 0;
        return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
      }))
    }
    gq.d(Eq, {
      d: () => Yq
    })
  },
  38653: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      static _CheckLimit(qq, Eq) {
        let gq = Yq._LogLimitOutputs[qq];
        return gq ? gq.current++ : (gq = {
          limit: Eq,
          current: 1
        }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
      }
      static _GenerateLimitMessage(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gq = Yq._LogLimitOutputs[qq];
        if (!gq || !Yq.MessageLimitReached) return;
        const lq = this._Levels[Eq];
        gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
      }
      static _AddLogEntry(qq) {
        Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
      }
      static _FormatMessage(qq) {
        const Eq = qq => qq < 10 ? "0" + qq : "" + qq,
          gq = new Date;
        return "[" + Eq(gq.getHours()) + ":" + Eq(gq.getMinutes()) + ":" + Eq(gq.getSeconds()) + "]: " + qq
      }
      static _LogDisabled(qq, Eq) {}
      static _LogEnabled() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const lq = Array.isArray(Eq) ? Eq[0] : Eq;
        if (void 0 !== gq && !Yq._CheckLimit(lq, gq)) return;
        const Oq = Yq._FormatMessage(lq),
          mq = this._Levels[qq],
          xq = Array.isArray(Eq) ? Eq.slice(1) : [];
        mq.logFunc && mq.logFunc("BJS - " + Oq, ...xq);
        const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
        Yq._AddLogEntry(Aq), Yq._GenerateLimitMessage(lq, qq)
      }
      static get LogCache() {
        return Yq._LogCache
      }
      static ClearLogCache() {
        Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq.errorsCount = 0
      }
      static set LogLevels(qq) {
        Yq.Log = Yq._LogDisabled, Yq.Warn = Yq._LogDisabled, Yq.Error = Yq._LogDisabled;
        const Eq = [Yq.MessageLogLevel, Yq.WarningLogLevel, Yq.ErrorLogLevel];
        for (const gq of Eq)
          if ((qq & gq) === gq) {
            const qq = this._Levels[gq];
            Yq[qq.name] = Yq._LogEnabled.bind(Yq, gq)
          }
      }
    }
    Yq.NoneLogLevel = 0, Yq.MessageLogLevel = 1, Yq.WarningLogLevel = 2, Yq.ErrorLogLevel = 4, Yq.AllLogLevel = 7, Yq.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq._Levels = [{}, {
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
    }], Yq.errorsCount = 0, Yq.Log = Yq._LogEnabled.bind(Yq, Yq.MessageLogLevel), Yq.Warn = Yq._LogEnabled.bind(Yq, Yq.WarningLogLevel), Yq.Error = Yq._LogEnabled.bind(Yq, Yq.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);