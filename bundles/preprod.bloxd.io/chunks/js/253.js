export const id = 253;
export const ids = [253];
export const modules = {
  41305: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => zQ,
      i: () => gQ,
      l: () => PQ
    });
    var wQ, qQ = XQ(37404),
      TQ = XQ(37370);
    ! function(QQ) {
      QQ[QQ.CW = 0] = "CW", QQ[QQ.CCW = 1] = "CCW"
    }(wQ || (wQ = {}));
    class zQ {
      static Interpolate(QQ, WQ, XQ, wQ, qQ) {
        if (0 === QQ) return 0;
        const TQ = 1 - 3 * wQ + 3 * WQ,
          zQ = 3 * wQ - 6 * WQ,
          sQ = 3 * WQ;
        let FQ = QQ;
        for (let PQ = 0; PQ < 5; PQ++) {
          const WQ = FQ * FQ;
          FQ -= (TQ * (WQ * FQ) + zQ * WQ + sQ * FQ - QQ) * (1 / (3 * TQ * WQ + 2 * zQ * FQ + sQ)), FQ = Math.min(1, Math.max(0, FQ))
        }
        return 3 * Math.pow(1 - FQ, 2) * FQ * XQ + 3 * (1 - FQ) * Math.pow(FQ, 2) * qQ + Math.pow(FQ, 3)
      }
    }
    class sQ {
      constructor(QQ) {
        this._radians = QQ, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(QQ, WQ) {
        const XQ = WQ.subtract(QQ),
          wQ = Math.atan2(XQ.y, XQ.x);
        return new sQ(wQ)
      }
      static BetweenTwoVectors(QQ, WQ) {
        let XQ = QQ.lengthSquared() * WQ.lengthSquared();
        if (0 === XQ) return new sQ(Math.PI / 2);
        XQ = Math.sqrt(XQ);
        let wQ = QQ.dot(WQ) / XQ;
        wQ = (0, qQ.Clamp)(wQ, -1, 1);
        const TQ = Math.acos(wQ);
        return new sQ(TQ)
      }
      static FromRadians(QQ) {
        return new sQ(QQ)
      }
      static FromDegrees(QQ) {
        return new sQ(QQ * Math.PI / 180)
      }
    }
    class FQ {
      constructor(QQ, WQ, XQ) {
        this.startPoint = QQ, this.midPoint = WQ, this.endPoint = XQ;
        const wQ = Math.pow(WQ.x, 2) + Math.pow(WQ.y, 2),
          qQ = (Math.pow(QQ.x, 2) + Math.pow(QQ.y, 2) - wQ) / 2,
          zQ = (wQ - Math.pow(XQ.x, 2) - Math.pow(XQ.y, 2)) / 2,
          FQ = (QQ.x - WQ.x) * (WQ.y - XQ.y) - (WQ.x - XQ.x) * (QQ.y - WQ.y);
        this.centerPoint = new TQ.q((qQ * (WQ.y - XQ.y) - zQ * (QQ.y - WQ.y)) / FQ, ((QQ.x - WQ.x) * zQ - (WQ.x - XQ.x) * qQ) / FQ), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = sQ.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const PQ = this.startAngle.degrees();
        let gQ = sQ.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          JQ = sQ.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        gQ - PQ > 180 && (gQ -= 360), gQ - PQ < -180 && (gQ += 360), JQ - gQ > 180 && (JQ -= 360), JQ - gQ < -180 && (JQ += 360), this.orientation = gQ - PQ < 0 ? 0 : 1, this.angle = sQ.FromDegrees(0 === this.orientation ? PQ - JQ : JQ - PQ)
      }
    }
    class PQ {
      constructor(QQ, WQ) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new TQ.q(QQ, WQ))
      }
      addLineTo(QQ, WQ) {
        if (this.closed) return this;
        const XQ = new TQ.q(QQ, WQ),
          wQ = this._points[this._points.length - 1];
        return this._points.push(XQ), this._length += XQ.subtract(wQ).length(), this
      }
      addArcTo(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const zQ = this._points[this._points.length - 1],
          sQ = new TQ.q(QQ, WQ),
          PQ = new TQ.q(XQ, wQ),
          gQ = new FQ(zQ, sQ, PQ);
        let JQ = gQ.angle.radians() / qQ;
        0 === gQ.orientation && (JQ *= -1);
        let rQ = gQ.startAngle.radians() + JQ;
        for (let TQ = 0; TQ < qQ; TQ++) {
          const QQ = Math.cos(rQ) * gQ.radius + gQ.centerPoint.x,
            WQ = Math.sin(rQ) * gQ.radius + gQ.centerPoint.y;
          this.addLineTo(QQ, WQ), rQ += JQ
        }
        return this
      }
      addQuadraticCurveTo(QQ, WQ, XQ, wQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const TQ = (QQ, WQ, XQ, wQ) => (1 - QQ) * (1 - QQ) * WQ + 2 * QQ * (1 - QQ) * XQ + QQ * QQ * wQ,
          zQ = this._points[this._points.length - 1];
        for (let sQ = 0; sQ <= qQ; sQ++) {
          const FQ = sQ / qQ,
            PQ = TQ(FQ, zQ.x, QQ, XQ),
            gQ = TQ(FQ, zQ.y, WQ, wQ);
          this.addLineTo(PQ, gQ)
        }
        return this
      }
      addBezierCurveTo(QQ, WQ, XQ, wQ, qQ, TQ) {
        let zQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const sQ = (QQ, WQ, XQ, wQ, qQ) => (1 - QQ) * (1 - QQ) * (1 - QQ) * WQ + 3 * QQ * (1 - QQ) * (1 - QQ) * XQ + 3 * QQ * QQ * (1 - QQ) * wQ + QQ * QQ * QQ * qQ,
          FQ = this._points[this._points.length - 1];
        for (let PQ = 0; PQ <= zQ; PQ++) {
          const gQ = PQ / zQ,
            JQ = sQ(gQ, FQ.x, QQ, XQ, qQ),
            rQ = sQ(gQ, FQ.y, WQ, wQ, TQ);
          this.addLineTo(JQ, rQ)
        }
        return this
      }
      isPointInside(QQ) {
        let WQ = !1;
        const XQ = this._points.length;
        for (let wQ = XQ - 1, qQ = 0; qQ < XQ; wQ = qQ++) {
          let XQ = this._points[wQ],
            TQ = this._points[qQ],
            zQ = TQ.x - XQ.x,
            sQ = TQ.y - XQ.y;
          if (Math.abs(sQ) > Number.EPSILON) {
            if (sQ < 0 && (XQ = this._points[qQ], zQ = -zQ, TQ = this._points[wQ], sQ = -sQ), QQ.y < XQ.y || QQ.y > TQ.y) continue;
            if (QQ.y === XQ.y && QQ.x === XQ.x) return !0;
            {
              const wQ = sQ * (QQ.x - XQ.x) - zQ * (QQ.y - XQ.y);
              if (0 === wQ) return !0;
              if (wQ < 0) continue;
              WQ = !WQ
            }
          } else {
            if (QQ.y !== XQ.y) continue;
            if (TQ.x <= QQ.x && QQ.x <= XQ.x || XQ.x <= QQ.x && QQ.x <= TQ.x) return !0
          }
        }
        return WQ
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let QQ = this._length;
        if (this.closed) {
          const WQ = this._points[this._points.length - 1];
          QQ += this._points[0].subtract(WQ).length()
        }
        return QQ
      }
      area() {
        const QQ = this._points.length;
        let WQ = 0;
        for (let XQ = QQ - 1, wQ = 0; wQ < QQ; XQ = wQ++) WQ += this._points[XQ].x * this._points[wQ].y - this._points[wQ].x * this._points[XQ].y;
        return .5 * WQ
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(QQ) {
        if (QQ < 0 || QQ > 1) return TQ.q.Zero();
        const WQ = QQ * this.length();
        let XQ = 0;
        for (let wQ = 0; wQ < this._points.length; wQ++) {
          const QQ = (wQ + 1) % this._points.length,
            qQ = this._points[wQ],
            zQ = this._points[QQ].subtract(qQ),
            sQ = zQ.length() + XQ;
          if (WQ >= XQ && WQ <= sQ) {
            const QQ = zQ.normalize(),
              wQ = WQ - XQ;
            return new TQ.q(qQ.x + QQ.x * wQ, qQ.y + QQ.y * wQ)
          }
          XQ = sQ
        }
        return TQ.q.Zero()
      }
      static StartingAt(QQ, WQ) {
        return new PQ(QQ, WQ)
      }
    }
    class gQ {
      static CreateQuadraticBezier(QQ, WQ, XQ, wQ) {
        wQ = wQ > 2 ? wQ : 3;
        const qQ = [],
          zQ = (QQ, WQ, XQ, wQ) => (1 - QQ) * (1 - QQ) * WQ + 2 * QQ * (1 - QQ) * XQ + QQ * QQ * wQ;
        for (let sQ = 0; sQ <= wQ; sQ++) qQ.push(new TQ.s(zQ(sQ / wQ, QQ.x, WQ.x, XQ.x), zQ(sQ / wQ, QQ.y, WQ.y, XQ.y), zQ(sQ / wQ, QQ.z, WQ.z, XQ.z)));
        return new gQ(qQ)
      }
      static CreateCubicBezier(QQ, WQ, XQ, wQ, qQ) {
        qQ = qQ > 3 ? qQ : 4;
        const zQ = [],
          sQ = (QQ, WQ, XQ, wQ, qQ) => (1 - QQ) * (1 - QQ) * (1 - QQ) * WQ + 3 * QQ * (1 - QQ) * (1 - QQ) * XQ + 3 * QQ * QQ * (1 - QQ) * wQ + QQ * QQ * QQ * qQ;
        for (let FQ = 0; FQ <= qQ; FQ++) zQ.push(new TQ.s(sQ(FQ / qQ, QQ.x, WQ.x, XQ.x, wQ.x), sQ(FQ / qQ, QQ.y, WQ.y, XQ.y, wQ.y), sQ(FQ / qQ, QQ.z, WQ.z, XQ.z, wQ.z)));
        return new gQ(zQ)
      }
      static CreateHermiteSpline(QQ, WQ, XQ, wQ, qQ) {
        const zQ = [],
          sQ = 1 / qQ;
        for (let FQ = 0; FQ <= qQ; FQ++) zQ.push(TQ.s.Hermite(QQ, WQ, XQ, wQ, FQ * sQ));
        return new gQ(zQ)
      }
      static CreateCatmullRomSpline(QQ, WQ, XQ) {
        const wQ = [],
          qQ = 1 / WQ;
        let zQ = 0;
        if (XQ) {
          const XQ = QQ.length;
          for (let sQ = 0; sQ < XQ; sQ++) {
            zQ = 0;
            for (let FQ = 0; FQ < WQ; FQ++) wQ.push(TQ.s.CatmullRom(QQ[sQ % XQ], QQ[(sQ + 1) % XQ], QQ[(sQ + 2) % XQ], QQ[(sQ + 3) % XQ], zQ)), zQ += qQ
          }
          wQ.push(wQ[0])
        } else {
          const XQ = [];
          XQ.push(QQ[0].clone()), XQ.push(...QQ), XQ.push(QQ[QQ.length - 1].clone());
          let sQ = 0;
          for (; sQ < XQ.length - 3; sQ++) {
            zQ = 0;
            for (let QQ = 0; QQ < WQ; QQ++) wQ.push(TQ.s.CatmullRom(XQ[sQ], XQ[sQ + 1], XQ[sQ + 2], XQ[sQ + 3], zQ)), zQ += qQ
          }
          sQ--, wQ.push(TQ.s.CatmullRom(XQ[sQ], XQ[sQ + 1], XQ[sQ + 2], XQ[sQ + 3], zQ))
        }
        return new gQ(wQ)
      }
      static ArcThru3Points(QQ, WQ, XQ) {
        let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          zQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const sQ = [],
          FQ = WQ.subtract(QQ),
          PQ = XQ.subtract(WQ),
          JQ = QQ.subtract(XQ),
          rQ = TQ.s.Cross(FQ, PQ),
          IQ = rQ.length();
        if (IQ < Math.pow(10, -8)) return new gQ(sQ);
        const jQ = FQ.lengthSquared(),
          BQ = PQ.lengthSquared(),
          yQ = JQ.lengthSquared(),
          VQ = rQ.lengthSquared(),
          DQ = .5 * FQ.length() * PQ.length() * JQ.length() / IQ,
          pQ = -.5 * BQ * TQ.s.Dot(FQ, JQ) / VQ,
          GQ = -.5 * yQ * TQ.s.Dot(FQ, PQ) / VQ,
          UQ = -.5 * jQ * TQ.s.Dot(PQ, JQ) / VQ,
          bQ = QQ.scale(pQ).add(WQ.scale(GQ)).add(XQ.scale(UQ)),
          vQ = QQ.subtract(bQ).normalize(),
          dQ = TQ.s.Cross(rQ, vQ).normalize();
        if (zQ) {
          const WQ = 2 * Math.PI / wQ;
          for (let QQ = 0; QQ <= 2 * Math.PI; QQ += WQ) sQ.push(bQ.add(vQ.scale(DQ * Math.cos(QQ)).add(dQ.scale(DQ * Math.sin(QQ)))));
          sQ.push(QQ)
        } else {
          const WQ = 1 / wQ;
          let TQ, zQ = 0;
          do {
            TQ = bQ.add(vQ.scale(DQ * Math.cos(zQ)).add(dQ.scale(DQ * Math.sin(zQ)))), sQ.push(TQ), zQ += WQ
          } while (!TQ.equalsWithEpsilon(XQ, DQ * WQ * 1.1));
          sQ.push(XQ), qQ && sQ.push(QQ)
        }
        return new gQ(sQ)
      }
      constructor(QQ) {
        this._length = 0, this._points = QQ, this._length = this._computeLength(QQ)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (QQ) {
        const WQ = this._points[this._points.length - 1],
          XQ = this._points.slice(),
          wQ = QQ.getPoints();
        for (let qQ = 1; qQ < wQ.length; qQ++) XQ.push(wQ[qQ].subtract(wQ[0]).add(WQ));
        return new gQ(XQ)
      }
      _computeLength(QQ) {
        let WQ = 0;
        for (let XQ = 1; XQ < QQ.length; XQ++) WQ += QQ[XQ].subtract(QQ[XQ - 1]).length();
        return WQ
      }
    }
  },
  38947: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(38956);
    const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(WQ) : null;
    class TQ {
      static DeepCopy(QQ, WQ, XQ, TQ) {
        let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sQ = function(QQ) {
          const WQ = [];
          do {
            const XQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return WQ
        }(QQ);
        for (const PQ of sQ) {
          if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
          if (PQ.endsWith("Observable")) continue;
          if (XQ && -1 !== XQ.indexOf(PQ)) continue;
          const sQ = QQ[PQ],
            gQ = typeof sQ;
          if ("function" !== gQ) try {
            if ("object" === gQ)
              if (sQ instanceof Uint8Array) WQ[PQ] = Uint8Array.from(sQ);
              else if (sQ instanceof Array) {
              if (WQ[PQ] = [], sQ.length > 0)
                if ("object" == typeof sQ[0])
                  for (let QQ = 0; QQ < sQ.length; QQ++) {
                    const XQ = qQ(sQ[QQ], WQ, zQ); - 1 === WQ[PQ].indexOf(XQ) && WQ[PQ].push(XQ)
                  } else WQ[PQ] = sQ.slice(0)
            } else WQ[PQ] = qQ(sQ, WQ, zQ);
            else WQ[PQ] = sQ
          } catch (FQ) {
            wQ.b.Warn(FQ.message)
          }
        }
      }
    }
  },
  38956: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static _CheckLimit(QQ, WQ) {
        let XQ = wQ._LogLimitOutputs[QQ];
        return XQ ? XQ.current++ : (XQ = {
          limit: WQ,
          current: 1
        }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const XQ = wQ._LogLimitOutputs[QQ];
        if (!XQ || !wQ.MessageLimitReached) return;
        const qQ = this._Levels[WQ];
        XQ.current === XQ.limit && wQ[qQ.name](wQ.MessageLimitReached.replace(/%LIMIT%/g, "" + XQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        wQ._LogCache = QQ + wQ._LogCache, wQ.OnNewCacheEntry && wQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          XQ = new Date;
        return "[" + WQ(XQ.getHours()) + ":" + WQ(XQ.getMinutes()) + ":" + WQ(XQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, WQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(WQ) ? WQ[0] : WQ;
        if (void 0 !== XQ && !wQ._CheckLimit(qQ, XQ)) return;
        const TQ = wQ._FormatMessage(qQ),
          zQ = this._Levels[QQ],
          sQ = Array.isArray(WQ) ? WQ.slice(1) : [];
        zQ.logFunc && zQ.logFunc("BJS - " + TQ, ...sQ);
        const FQ = `<div style='color:${zQ.color}'>${TQ}</div><br>`;
        wQ._AddLogEntry(FQ), wQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return wQ._LogCache
      }
      static ClearLogCache() {
        wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        wQ.Log = wQ._LogDisabled, wQ.Warn = wQ._LogDisabled, wQ.Error = wQ._LogDisabled;
        const WQ = [wQ.MessageLogLevel, wQ.WarningLogLevel, wQ.ErrorLogLevel];
        for (const XQ of WQ)
          if ((QQ & XQ) === XQ) {
            const QQ = this._Levels[XQ];
            wQ[QQ.name] = wQ._LogEnabled.bind(wQ, XQ)
          }
      }
    }
    wQ.NoneLogLevel = 0, wQ.MessageLogLevel = 1, wQ.WarningLogLevel = 2, wQ.ErrorLogLevel = 4, wQ.AllLogLevel = 7, wQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ._Levels = [{}, {
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
    }], wQ.errorsCount = 0, wQ.Log = wQ._LogEnabled.bind(wQ, wQ.MessageLogLevel), wQ.Warn = wQ._LogEnabled.bind(wQ, wQ.WarningLogLevel), wQ.Error = wQ._LogEnabled.bind(wQ, wQ.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);