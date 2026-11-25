export const id = 269;
export const ids = [269];
export const modules = {
  42196: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aM,
      c: () => zM,
      g: () => QM
    });
    var OM, SM = iM(38074),
      jM = iM(38040);
    ! function(MM) {
      MM[MM.CW = 0] = "CW", MM[MM.CCW = 1] = "CCW"
    }(OM || (OM = {}));
    class aM {
      static Interpolate(MM, rM, iM, OM, SM) {
        if (0 === MM) return 0;
        const jM = 1 - 3 * OM + 3 * rM,
          aM = 3 * OM - 6 * rM,
          PM = 3 * rM;
        let nM = MM;
        for (let QM = 0; QM < 5; QM++) {
          const rM = nM * nM;
          nM -= (jM * (rM * nM) + aM * rM + PM * nM - MM) * (1 / (3 * jM * rM + 2 * aM * nM + PM)), nM = Math.min(1, Math.max(0, nM))
        }
        return 3 * Math.pow(1 - nM, 2) * nM * iM + 3 * (1 - nM) * Math.pow(nM, 2) * SM + Math.pow(nM, 3)
      }
    }
    class PM {
      constructor(MM) {
        this._radians = MM, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(MM, rM) {
        const iM = rM.subtract(MM),
          OM = Math.atan2(iM.y, iM.x);
        return new PM(OM)
      }
      static BetweenTwoVectors(MM, rM) {
        let iM = MM.lengthSquared() * rM.lengthSquared();
        if (0 === iM) return new PM(Math.PI / 2);
        iM = Math.sqrt(iM);
        let OM = MM.dot(rM) / iM;
        OM = (0, SM.Clamp)(OM, -1, 1);
        const jM = Math.acos(OM);
        return new PM(jM)
      }
      static FromRadians(MM) {
        return new PM(MM)
      }
      static FromDegrees(MM) {
        return new PM(MM * Math.PI / 180)
      }
    }
    class nM {
      constructor(MM, rM, iM) {
        this.startPoint = MM, this.midPoint = rM, this.endPoint = iM;
        const OM = Math.pow(rM.x, 2) + Math.pow(rM.y, 2),
          SM = (Math.pow(MM.x, 2) + Math.pow(MM.y, 2) - OM) / 2,
          aM = (OM - Math.pow(iM.x, 2) - Math.pow(iM.y, 2)) / 2,
          nM = (MM.x - rM.x) * (rM.y - iM.y) - (rM.x - iM.x) * (MM.y - rM.y);
        this.centerPoint = new jM.o((SM * (rM.y - iM.y) - aM * (MM.y - rM.y)) / nM, ((MM.x - rM.x) * aM - (rM.x - iM.x) * SM) / nM), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = PM.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const QM = this.startAngle.degrees();
        let zM = PM.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          LM = PM.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        zM - QM > 180 && (zM -= 360), zM - QM < -180 && (zM += 360), LM - zM > 180 && (LM -= 360), LM - zM < -180 && (LM += 360), this.orientation = zM - QM < 0 ? 0 : 1, this.angle = PM.FromDegrees(0 === this.orientation ? QM - LM : LM - QM)
      }
    }
    class QM {
      constructor(MM, rM) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new jM.o(MM, rM))
      }
      addLineTo(MM, rM) {
        if (this.closed) return this;
        const iM = new jM.o(MM, rM),
          OM = this._points[this._points.length - 1];
        return this._points.push(iM), this._length += iM.subtract(OM).length(), this
      }
      addArcTo(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const aM = this._points[this._points.length - 1],
          PM = new jM.o(MM, rM),
          QM = new jM.o(iM, OM),
          zM = new nM(aM, PM, QM);
        let LM = zM.angle.radians() / SM;
        0 === zM.orientation && (LM *= -1);
        let mM = zM.startAngle.radians() + LM;
        for (let jM = 0; jM < SM; jM++) {
          const MM = Math.cos(mM) * zM.radius + zM.centerPoint.x,
            rM = Math.sin(mM) * zM.radius + zM.centerPoint.y;
          this.addLineTo(MM, rM), mM += LM
        }
        return this
      }
      addQuadraticCurveTo(MM, rM, iM, OM) {
        let SM = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const jM = (MM, rM, iM, OM) => (1 - MM) * (1 - MM) * rM + 2 * MM * (1 - MM) * iM + MM * MM * OM,
          aM = this._points[this._points.length - 1];
        for (let PM = 0; PM <= SM; PM++) {
          const nM = PM / SM,
            QM = jM(nM, aM.x, MM, iM),
            zM = jM(nM, aM.y, rM, OM);
          this.addLineTo(QM, zM)
        }
        return this
      }
      addBezierCurveTo(MM, rM, iM, OM, SM, jM) {
        let aM = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const PM = (MM, rM, iM, OM, SM) => (1 - MM) * (1 - MM) * (1 - MM) * rM + 3 * MM * (1 - MM) * (1 - MM) * iM + 3 * MM * MM * (1 - MM) * OM + MM * MM * MM * SM,
          nM = this._points[this._points.length - 1];
        for (let QM = 0; QM <= aM; QM++) {
          const zM = QM / aM,
            LM = PM(zM, nM.x, MM, iM, SM),
            mM = PM(zM, nM.y, rM, OM, jM);
          this.addLineTo(LM, mM)
        }
        return this
      }
      isPointInside(MM) {
        let rM = !1;
        const iM = this._points.length;
        for (let OM = iM - 1, SM = 0; SM < iM; OM = SM++) {
          let iM = this._points[OM],
            jM = this._points[SM],
            aM = jM.x - iM.x,
            PM = jM.y - iM.y;
          if (Math.abs(PM) > Number.EPSILON) {
            if (PM < 0 && (iM = this._points[SM], aM = -aM, jM = this._points[OM], PM = -PM), MM.y < iM.y || MM.y > jM.y) continue;
            if (MM.y === iM.y && MM.x === iM.x) return !0;
            {
              const OM = PM * (MM.x - iM.x) - aM * (MM.y - iM.y);
              if (0 === OM) return !0;
              if (OM < 0) continue;
              rM = !rM
            }
          } else {
            if (MM.y !== iM.y) continue;
            if (jM.x <= MM.x && MM.x <= iM.x || iM.x <= MM.x && MM.x <= jM.x) return !0
          }
        }
        return rM
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let MM = this._length;
        if (this.closed) {
          const rM = this._points[this._points.length - 1];
          MM += this._points[0].subtract(rM).length()
        }
        return MM
      }
      area() {
        const MM = this._points.length;
        let rM = 0;
        for (let iM = MM - 1, OM = 0; OM < MM; iM = OM++) rM += this._points[iM].x * this._points[OM].y - this._points[OM].x * this._points[iM].y;
        return .5 * rM
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(MM) {
        if (MM < 0 || MM > 1) return jM.o.Zero();
        const rM = MM * this.length();
        let iM = 0;
        for (let OM = 0; OM < this._points.length; OM++) {
          const MM = (OM + 1) % this._points.length,
            SM = this._points[OM],
            aM = this._points[MM].subtract(SM),
            PM = aM.length() + iM;
          if (rM >= iM && rM <= PM) {
            const MM = aM.normalize(),
              OM = rM - iM;
            return new jM.o(SM.x + MM.x * OM, SM.y + MM.y * OM)
          }
          iM = PM
        }
        return jM.o.Zero()
      }
      static StartingAt(MM, rM) {
        return new QM(MM, rM)
      }
    }
    class zM {
      static CreateQuadraticBezier(MM, rM, iM, OM) {
        OM = OM > 2 ? OM : 3;
        const SM = [],
          aM = (MM, rM, iM, OM) => (1 - MM) * (1 - MM) * rM + 2 * MM * (1 - MM) * iM + MM * MM * OM;
        for (let PM = 0; PM <= OM; PM++) SM.push(new jM.q(aM(PM / OM, MM.x, rM.x, iM.x), aM(PM / OM, MM.y, rM.y, iM.y), aM(PM / OM, MM.z, rM.z, iM.z)));
        return new zM(SM)
      }
      static CreateCubicBezier(MM, rM, iM, OM, SM) {
        SM = SM > 3 ? SM : 4;
        const aM = [],
          PM = (MM, rM, iM, OM, SM) => (1 - MM) * (1 - MM) * (1 - MM) * rM + 3 * MM * (1 - MM) * (1 - MM) * iM + 3 * MM * MM * (1 - MM) * OM + MM * MM * MM * SM;
        for (let nM = 0; nM <= SM; nM++) aM.push(new jM.q(PM(nM / SM, MM.x, rM.x, iM.x, OM.x), PM(nM / SM, MM.y, rM.y, iM.y, OM.y), PM(nM / SM, MM.z, rM.z, iM.z, OM.z)));
        return new zM(aM)
      }
      static CreateHermiteSpline(MM, rM, iM, OM, SM) {
        const aM = [],
          PM = 1 / SM;
        for (let nM = 0; nM <= SM; nM++) aM.push(jM.q.Hermite(MM, rM, iM, OM, nM * PM));
        return new zM(aM)
      }
      static CreateCatmullRomSpline(MM, rM, iM) {
        const OM = [],
          SM = 1 / rM;
        let aM = 0;
        if (iM) {
          const iM = MM.length;
          for (let PM = 0; PM < iM; PM++) {
            aM = 0;
            for (let nM = 0; nM < rM; nM++) OM.push(jM.q.CatmullRom(MM[PM % iM], MM[(PM + 1) % iM], MM[(PM + 2) % iM], MM[(PM + 3) % iM], aM)), aM += SM
          }
          OM.push(OM[0])
        } else {
          const iM = [];
          iM.push(MM[0].clone()), iM.push(...MM), iM.push(MM[MM.length - 1].clone());
          let PM = 0;
          for (; PM < iM.length - 3; PM++) {
            aM = 0;
            for (let MM = 0; MM < rM; MM++) OM.push(jM.q.CatmullRom(iM[PM], iM[PM + 1], iM[PM + 2], iM[PM + 3], aM)), aM += SM
          }
          PM--, OM.push(jM.q.CatmullRom(iM[PM], iM[PM + 1], iM[PM + 2], iM[PM + 3], aM))
        }
        return new zM(OM)
      }
      static ArcThru3Points(MM, rM, iM) {
        let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          SM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          aM = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const PM = [],
          nM = rM.subtract(MM),
          QM = iM.subtract(rM),
          LM = MM.subtract(iM),
          mM = jM.q.Cross(nM, QM),
          HM = mM.length();
        if (HM < Math.pow(10, -8)) return new zM(PM);
        const hM = nM.lengthSquared(),
          JM = QM.lengthSquared(),
          dM = LM.lengthSquared(),
          yM = mM.lengthSquared(),
          lM = .5 * nM.length() * QM.length() * LM.length() / HM,
          EM = -.5 * JM * jM.q.Dot(nM, LM) / yM,
          UM = -.5 * dM * jM.q.Dot(nM, QM) / yM,
          GM = -.5 * hM * jM.q.Dot(QM, LM) / yM,
          CM = MM.scale(EM).add(rM.scale(UM)).add(iM.scale(GM)),
          eM = MM.subtract(CM).normalize(),
          bM = jM.q.Cross(mM, eM).normalize();
        if (aM) {
          const rM = 2 * Math.PI / OM;
          for (let MM = 0; MM <= 2 * Math.PI; MM += rM) PM.push(CM.add(eM.scale(lM * Math.cos(MM)).add(bM.scale(lM * Math.sin(MM)))));
          PM.push(MM)
        } else {
          const rM = 1 / OM;
          let jM, aM = 0;
          do {
            jM = CM.add(eM.scale(lM * Math.cos(aM)).add(bM.scale(lM * Math.sin(aM)))), PM.push(jM), aM += rM
          } while (!jM.equalsWithEpsilon(iM, lM * rM * 1.1));
          PM.push(iM), SM && PM.push(MM)
        }
        return new zM(PM)
      }
      constructor(MM) {
        this._length = 0, this._points = MM, this._length = this._computeLength(MM)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (MM) {
        const rM = this._points[this._points.length - 1],
          iM = this._points.slice(),
          OM = MM.getPoints();
        for (let SM = 1; SM < OM.length; SM++) iM.push(OM[SM].subtract(OM[0]).add(rM));
        return new zM(iM)
      }
      _computeLength(MM) {
        let rM = 0;
        for (let iM = 1; iM < MM.length; iM++) rM += MM[iM].subtract(MM[iM - 1]).length();
        return rM
      }
    }
  },
  39705: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(39711);
    const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
      ...MM
    } : null : MM.clone(rM) : null;
    class jM {
      static DeepCopy(MM, rM, iM, jM) {
        let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const PM = function(MM) {
          const rM = [];
          do {
            const iM = Object.getOwnPropertyNames(MM);
            for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
          } while (MM = Object.getPrototypeOf(MM));
          return rM
        }(MM);
        for (const QM of PM) {
          if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
          if (QM.endsWith("Observable")) continue;
          if (iM && -1 !== iM.indexOf(QM)) continue;
          const PM = MM[QM],
            zM = typeof PM;
          if ("function" !== zM) try {
            if ("object" === zM)
              if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
              else if (PM instanceof Array) {
              if (rM[QM] = [], PM.length > 0)
                if ("object" == typeof PM[0])
                  for (let MM = 0; MM < PM.length; MM++) {
                    const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
                  } else rM[QM] = PM.slice(0)
            } else rM[QM] = SM(PM, rM, aM);
            else rM[QM] = PM
          } catch (nM) {
            OM.e.Warn(nM.message)
          }
        }
      }
    }
  },
  39711: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static _CheckLimit(MM, rM) {
        let iM = OM._LogLimitOutputs[MM];
        return iM ? iM.current++ : (iM = {
          limit: rM,
          current: 1
        }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
      }
      static _GenerateLimitMessage(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const iM = OM._LogLimitOutputs[MM];
        if (!iM || !OM.MessageLimitReached) return;
        const SM = this._Levels[rM];
        iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
      }
      static _AddLogEntry(MM) {
        OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
      }
      static _FormatMessage(MM) {
        const rM = MM => MM < 10 ? "0" + MM : "" + MM,
          iM = new Date;
        return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
      }
      static _LogDisabled(MM, rM) {}
      static _LogEnabled() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const SM = Array.isArray(rM) ? rM[0] : rM;
        if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
        const jM = OM._FormatMessage(SM),
          aM = this._Levels[MM],
          PM = Array.isArray(rM) ? rM.slice(1) : [];
        aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
        const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
        OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
      }
      static get LogCache() {
        return OM._LogCache
      }
      static ClearLogCache() {
        OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
      }
      static set LogLevels(MM) {
        OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
        const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
        for (const iM of rM)
          if ((MM & iM) === iM) {
            const MM = this._Levels[iM];
            OM[MM.name] = OM._LogEnabled.bind(OM, iM)
          }
      }
    }
    OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels = [{}, {
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
    }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);