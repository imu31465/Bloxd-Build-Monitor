export const id = 221;
export const ids = [221];
export const modules = {
  39179: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => uc,
      c: () => qB,
      e: () => Pc
    });
    var Vc, Ic = nc(35785),
      rB = nc(35756);
    ! function(cB) {
      cB[cB.CW = 0] = "CW", cB[cB.CCW = 1] = "CCW"
    }(Vc || (Vc = {}));
    class uc {
      static Interpolate(cB, Bc, nc, Vc, Ic) {
        if (0 === cB) return 0;
        const rB = 1 - 3 * Vc + 3 * Bc,
          uc = 3 * Vc - 6 * Bc,
          sc = 3 * Bc;
        let Mc = cB;
        for (let Pc = 0; Pc < 5; Pc++) {
          const Bc = Mc * Mc;
          Mc -= (rB * (Bc * Mc) + uc * Bc + sc * Mc - cB) * (1 / (3 * rB * Bc + 2 * uc * Mc + sc)), Mc = Math.min(1, Math.max(0, Mc))
        }
        return 3 * Math.pow(1 - Mc, 2) * Mc * nc + 3 * (1 - Mc) * Math.pow(Mc, 2) * Ic + Math.pow(Mc, 3)
      }
    }
    class sc {
      constructor(cB) {
        this._radians = cB, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(cB, Bc) {
        const nc = Bc.subtract(cB),
          Vc = Math.atan2(nc.y, nc.x);
        return new sc(Vc)
      }
      static BetweenTwoVectors(cB, Bc) {
        let nc = cB.lengthSquared() * Bc.lengthSquared();
        if (0 === nc) return new sc(Math.PI / 2);
        nc = Math.sqrt(nc);
        let Vc = cB.dot(Bc) / nc;
        Vc = (0, Ic.Clamp)(Vc, -1, 1);
        const rB = Math.acos(Vc);
        return new sc(rB)
      }
      static FromRadians(cB) {
        return new sc(cB)
      }
      static FromDegrees(cB) {
        return new sc(cB * Math.PI / 180)
      }
    }
    class Mc {
      constructor(cB, Bc, nc) {
        this.startPoint = cB, this.midPoint = Bc, this.endPoint = nc;
        const Vc = Math.pow(Bc.x, 2) + Math.pow(Bc.y, 2),
          Ic = (Math.pow(cB.x, 2) + Math.pow(cB.y, 2) - Vc) / 2,
          uc = (Vc - Math.pow(nc.x, 2) - Math.pow(nc.y, 2)) / 2,
          Mc = (cB.x - Bc.x) * (Bc.y - nc.y) - (Bc.x - nc.x) * (cB.y - Bc.y);
        this.centerPoint = new rB.m((Ic * (Bc.y - nc.y) - uc * (cB.y - Bc.y)) / Mc, ((cB.x - Bc.x) * uc - (Bc.x - nc.x) * Ic) / Mc), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = sc.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Pc = this.startAngle.degrees();
        let qB = sc.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Oc = sc.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        qB - Pc > 180 && (qB -= 360), qB - Pc < -180 && (qB += 360), Oc - qB > 180 && (Oc -= 360), Oc - qB < -180 && (Oc += 360), this.orientation = qB - Pc < 0 ? 0 : 1, this.angle = sc.FromDegrees(0 === this.orientation ? Pc - Oc : Oc - Pc)
      }
    }
    class Pc {
      constructor(cB, Bc) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new rB.m(cB, Bc))
      }
      addLineTo(cB, Bc) {
        if (this.closed) return this;
        const nc = new rB.m(cB, Bc),
          Vc = this._points[this._points.length - 1];
        return this._points.push(nc), this._length += nc.subtract(Vc).length(), this
      }
      addArcTo(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const uc = this._points[this._points.length - 1],
          sc = new rB.m(cB, Bc),
          Pc = new rB.m(nc, Vc),
          qB = new Mc(uc, sc, Pc);
        let Oc = qB.angle.radians() / Ic;
        0 === qB.orientation && (Oc *= -1);
        let Tc = qB.startAngle.radians() + Oc;
        for (let rB = 0; rB < Ic; rB++) {
          const cB = Math.cos(Tc) * qB.radius + qB.centerPoint.x,
            Bc = Math.sin(Tc) * qB.radius + qB.centerPoint.y;
          this.addLineTo(cB, Bc), Tc += Oc
        }
        return this
      }
      addQuadraticCurveTo(cB, Bc, nc, Vc) {
        let Ic = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const rB = (cB, Bc, nc, Vc) => (1 - cB) * (1 - cB) * Bc + 2 * cB * (1 - cB) * nc + cB * cB * Vc,
          uc = this._points[this._points.length - 1];
        for (let sc = 0; sc <= Ic; sc++) {
          const Mc = sc / Ic,
            Pc = rB(Mc, uc.x, cB, nc),
            qB = rB(Mc, uc.y, Bc, Vc);
          this.addLineTo(Pc, qB)
        }
        return this
      }
      addBezierCurveTo(cB, Bc, nc, Vc, Ic, rB) {
        let uc = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const sc = (cB, Bc, nc, Vc, Ic) => (1 - cB) * (1 - cB) * (1 - cB) * Bc + 3 * cB * (1 - cB) * (1 - cB) * nc + 3 * cB * cB * (1 - cB) * Vc + cB * cB * cB * Ic,
          Mc = this._points[this._points.length - 1];
        for (let Pc = 0; Pc <= uc; Pc++) {
          const qB = Pc / uc,
            Oc = sc(qB, Mc.x, cB, nc, Ic),
            Tc = sc(qB, Mc.y, Bc, Vc, rB);
          this.addLineTo(Oc, Tc)
        }
        return this
      }
      isPointInside(cB) {
        let Bc = !1;
        const nc = this._points.length;
        for (let Vc = nc - 1, Ic = 0; Ic < nc; Vc = Ic++) {
          let nc = this._points[Vc],
            rB = this._points[Ic],
            uc = rB.x - nc.x,
            sc = rB.y - nc.y;
          if (Math.abs(sc) > Number.EPSILON) {
            if (sc < 0 && (nc = this._points[Ic], uc = -uc, rB = this._points[Vc], sc = -sc), cB.y < nc.y || cB.y > rB.y) continue;
            if (cB.y === nc.y && cB.x === nc.x) return !0;
            {
              const Vc = sc * (cB.x - nc.x) - uc * (cB.y - nc.y);
              if (0 === Vc) return !0;
              if (Vc < 0) continue;
              Bc = !Bc
            }
          } else {
            if (cB.y !== nc.y) continue;
            if (rB.x <= cB.x && cB.x <= nc.x || nc.x <= cB.x && cB.x <= rB.x) return !0
          }
        }
        return Bc
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let cB = this._length;
        if (this.closed) {
          const Bc = this._points[this._points.length - 1];
          cB += this._points[0].subtract(Bc).length()
        }
        return cB
      }
      area() {
        const cB = this._points.length;
        let Bc = 0;
        for (let nc = cB - 1, Vc = 0; Vc < cB; nc = Vc++) Bc += this._points[nc].x * this._points[Vc].y - this._points[Vc].x * this._points[nc].y;
        return .5 * Bc
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(cB) {
        if (cB < 0 || cB > 1) return rB.m.Zero();
        const Bc = cB * this.length();
        let nc = 0;
        for (let Vc = 0; Vc < this._points.length; Vc++) {
          const cB = (Vc + 1) % this._points.length,
            Ic = this._points[Vc],
            uc = this._points[cB].subtract(Ic),
            sc = uc.length() + nc;
          if (Bc >= nc && Bc <= sc) {
            const cB = uc.normalize(),
              Vc = Bc - nc;
            return new rB.m(Ic.x + cB.x * Vc, Ic.y + cB.y * Vc)
          }
          nc = sc
        }
        return rB.m.Zero()
      }
      static StartingAt(cB, Bc) {
        return new Pc(cB, Bc)
      }
    }
    class qB {
      static CreateQuadraticBezier(cB, Bc, nc, Vc) {
        Vc = Vc > 2 ? Vc : 3;
        const Ic = [],
          uc = (cB, Bc, nc, Vc) => (1 - cB) * (1 - cB) * Bc + 2 * cB * (1 - cB) * nc + cB * cB * Vc;
        for (let sc = 0; sc <= Vc; sc++) Ic.push(new rB.p(uc(sc / Vc, cB.x, Bc.x, nc.x), uc(sc / Vc, cB.y, Bc.y, nc.y), uc(sc / Vc, cB.z, Bc.z, nc.z)));
        return new qB(Ic)
      }
      static CreateCubicBezier(cB, Bc, nc, Vc, Ic) {
        Ic = Ic > 3 ? Ic : 4;
        const uc = [],
          sc = (cB, Bc, nc, Vc, Ic) => (1 - cB) * (1 - cB) * (1 - cB) * Bc + 3 * cB * (1 - cB) * (1 - cB) * nc + 3 * cB * cB * (1 - cB) * Vc + cB * cB * cB * Ic;
        for (let Mc = 0; Mc <= Ic; Mc++) uc.push(new rB.p(sc(Mc / Ic, cB.x, Bc.x, nc.x, Vc.x), sc(Mc / Ic, cB.y, Bc.y, nc.y, Vc.y), sc(Mc / Ic, cB.z, Bc.z, nc.z, Vc.z)));
        return new qB(uc)
      }
      static CreateHermiteSpline(cB, Bc, nc, Vc, Ic) {
        const uc = [],
          sc = 1 / Ic;
        for (let Mc = 0; Mc <= Ic; Mc++) uc.push(rB.p.Hermite(cB, Bc, nc, Vc, Mc * sc));
        return new qB(uc)
      }
      static CreateCatmullRomSpline(cB, Bc, nc) {
        const Vc = [],
          Ic = 1 / Bc;
        let uc = 0;
        if (nc) {
          const nc = cB.length;
          for (let sc = 0; sc < nc; sc++) {
            uc = 0;
            for (let Mc = 0; Mc < Bc; Mc++) Vc.push(rB.p.CatmullRom(cB[sc % nc], cB[(sc + 1) % nc], cB[(sc + 2) % nc], cB[(sc + 3) % nc], uc)), uc += Ic
          }
          Vc.push(Vc[0])
        } else {
          const nc = [];
          nc.push(cB[0].clone()), nc.push(...cB), nc.push(cB[cB.length - 1].clone());
          let sc = 0;
          for (; sc < nc.length - 3; sc++) {
            uc = 0;
            for (let cB = 0; cB < Bc; cB++) Vc.push(rB.p.CatmullRom(nc[sc], nc[sc + 1], nc[sc + 2], nc[sc + 3], uc)), uc += Ic
          }
          sc--, Vc.push(rB.p.CatmullRom(nc[sc], nc[sc + 1], nc[sc + 2], nc[sc + 3], uc))
        }
        return new qB(Vc)
      }
      static ArcThru3Points(cB, Bc, nc) {
        let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Ic = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          uc = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const sc = [],
          Mc = Bc.subtract(cB),
          Pc = nc.subtract(Bc),
          Oc = cB.subtract(nc),
          Tc = rB.p.Cross(Mc, Pc),
          fc = Tc.length();
        if (fc < Math.pow(10, -8)) return new qB(sc);
        const mB = Mc.lengthSquared(),
          ec = Pc.lengthSquared(),
          tB = Oc.lengthSquared(),
          Sc = Tc.lengthSquared(),
          yB = .5 * Mc.length() * Pc.length() * Oc.length() / fc,
          zB = -.5 * ec * rB.p.Dot(Mc, Oc) / Sc,
          pc = -.5 * tB * rB.p.Dot(Mc, Pc) / Sc,
          hc = -.5 * mB * rB.p.Dot(Pc, Oc) / Sc,
          aB = cB.scale(zB).add(Bc.scale(pc)).add(nc.scale(hc)),
          lc = cB.subtract(aB).normalize(),
          Yc = rB.p.Cross(Tc, lc).normalize();
        if (uc) {
          const Bc = 2 * Math.PI / Vc;
          for (let cB = 0; cB <= 2 * Math.PI; cB += Bc) sc.push(aB.add(lc.scale(yB * Math.cos(cB)).add(Yc.scale(yB * Math.sin(cB)))));
          sc.push(cB)
        } else {
          const Bc = 1 / Vc;
          let rB, uc = 0;
          do {
            rB = aB.add(lc.scale(yB * Math.cos(uc)).add(Yc.scale(yB * Math.sin(uc)))), sc.push(rB), uc += Bc
          } while (!rB.equalsWithEpsilon(nc, yB * Bc * 1.1));
          sc.push(nc), Ic && sc.push(cB)
        }
        return new qB(sc)
      }
      constructor(cB) {
        this._length = 0, this._points = cB, this._length = this._computeLength(cB)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (cB) {
        const Bc = this._points[this._points.length - 1],
          nc = this._points.slice(),
          Vc = cB.getPoints();
        for (let Ic = 1; Ic < Vc.length; Ic++) nc.push(Vc[Ic].subtract(Vc[0]).add(Bc));
        return new qB(nc)
      }
      _computeLength(cB) {
        let Bc = 0;
        for (let nc = 1; nc < cB.length; nc++) Bc += cB[nc].subtract(cB[nc - 1]).length();
        return Bc
      }
    }
  },
  37185: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(37191);
    const Ic = (cB, Bc, nc) => cB ? cB.getClassName && "Mesh" === cB.getClassName() ? null : !cB.getClassName || "SubMesh" !== cB.getClassName() && "PhysicsBody" !== cB.getClassName() ? cB.clone ? cB.clone() : Array.isArray(cB) ? cB.slice() : nc && "object" === typeof cB ? {
      ...cB
    } : null : cB.clone(Bc) : null;
    class rB {
      static DeepCopy(cB, Bc, nc, rB) {
        let uc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sc = function(cB) {
          const Bc = [];
          do {
            const nc = Object.getOwnPropertyNames(cB);
            for (const cB of nc) - 1 === Bc.indexOf(cB) && Bc.push(cB)
          } while (cB = Object.getPrototypeOf(cB));
          return Bc
        }(cB);
        for (const Pc of sc) {
          if ("_" === Pc[0] && (!rB || -1 === rB.indexOf(Pc))) continue;
          if (Pc.endsWith("Observable")) continue;
          if (nc && -1 !== nc.indexOf(Pc)) continue;
          const sc = cB[Pc],
            qB = typeof sc;
          if ("function" !== qB) try {
            if ("object" === qB)
              if (sc instanceof Uint8Array) Bc[Pc] = Uint8Array.from(sc);
              else if (sc instanceof Array) {
              if (Bc[Pc] = [], sc.length > 0)
                if ("object" == typeof sc[0])
                  for (let cB = 0; cB < sc.length; cB++) {
                    const nc = Ic(sc[cB], Bc, uc); - 1 === Bc[Pc].indexOf(nc) && Bc[Pc].push(nc)
                  } else Bc[Pc] = sc.slice(0)
            } else Bc[Pc] = Ic(sc, Bc, uc);
            else Bc[Pc] = sc
          } catch (Mc) {
            Vc.c.Warn(Mc.message)
          }
        }
      }
    }
  },
  37191: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      static _CheckLimit(cB, Bc) {
        let nc = Vc._LogLimitOutputs[cB];
        return nc ? nc.current++ : (nc = {
          limit: Bc,
          current: 1
        }, Vc._LogLimitOutputs[cB] = nc), nc.current <= nc.limit
      }
      static _GenerateLimitMessage(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const nc = Vc._LogLimitOutputs[cB];
        if (!nc || !Vc.MessageLimitReached) return;
        const Ic = this._Levels[Bc];
        nc.current === nc.limit && Vc[Ic.name](Vc.MessageLimitReached.replace(/%LIMIT%/g, "" + nc.limit).replace(/%TYPE%/g, Ic.name ?? ""))
      }
      static _AddLogEntry(cB) {
        Vc._LogCache = cB + Vc._LogCache, Vc.OnNewCacheEntry && Vc.OnNewCacheEntry(cB)
      }
      static _FormatMessage(cB) {
        const Bc = cB => cB < 10 ? "0" + cB : "" + cB,
          nc = new Date;
        return "[" + Bc(nc.getHours()) + ":" + Bc(nc.getMinutes()) + ":" + Bc(nc.getSeconds()) + "]: " + cB
      }
      static _LogDisabled(cB, Bc) {}
      static _LogEnabled() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Ic = Array.isArray(Bc) ? Bc[0] : Bc;
        if (void 0 !== nc && !Vc._CheckLimit(Ic, nc)) return;
        const rB = Vc._FormatMessage(Ic),
          uc = this._Levels[cB],
          sc = Array.isArray(Bc) ? Bc.slice(1) : [];
        uc.logFunc && uc.logFunc("BJS - " + rB, ...sc);
        const Mc = `<div style='color:${uc.color}'>${rB}</div><br>`;
        Vc._AddLogEntry(Mc), Vc._GenerateLimitMessage(Ic, cB)
      }
      static get LogCache() {
        return Vc._LogCache
      }
      static ClearLogCache() {
        Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc.errorsCount = 0
      }
      static set LogLevels(cB) {
        Vc.Log = Vc._LogDisabled, Vc.Warn = Vc._LogDisabled, Vc.Error = Vc._LogDisabled;
        const Bc = [Vc.MessageLogLevel, Vc.WarningLogLevel, Vc.ErrorLogLevel];
        for (const nc of Bc)
          if ((cB & nc) === nc) {
            const cB = this._Levels[nc];
            Vc[cB.name] = Vc._LogEnabled.bind(Vc, nc)
          }
      }
    }
    Vc.NoneLogLevel = 0, Vc.MessageLogLevel = 1, Vc.WarningLogLevel = 2, Vc.ErrorLogLevel = 4, Vc.AllLogLevel = 7, Vc.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc._Levels = [{}, {
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
    }], Vc.errorsCount = 0, Vc.Log = Vc._LogEnabled.bind(Vc, Vc.MessageLogLevel), Vc.Warn = Vc._LogEnabled.bind(Vc, Vc.WarningLogLevel), Vc.Error = Vc._LogEnabled.bind(Vc, Vc.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);