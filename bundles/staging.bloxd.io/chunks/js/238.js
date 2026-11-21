export const id = 238;
export const ids = [238];
export const modules = {
  40502: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => DQ,
      f: () => uQ,
      j: () => mQ
    });
    var LQ, qQ = wQ(36729),
      oQ = wQ(36696);
    ! function(QQ) {
      QQ[QQ.CW = 0] = "CW", QQ[QQ.CCW = 1] = "CCW"
    }(LQ || (LQ = {}));
    class DQ {
      static Interpolate(QQ, FQ, wQ, LQ, qQ) {
        if (0 === QQ) return 0;
        const oQ = 1 - 3 * LQ + 3 * FQ,
          DQ = 3 * LQ - 6 * FQ,
          kQ = 3 * FQ;
        let vQ = QQ;
        for (let mQ = 0; mQ < 5; mQ++) {
          const FQ = vQ * vQ;
          vQ -= (oQ * (FQ * vQ) + DQ * FQ + kQ * vQ - QQ) * (1 / (3 * oQ * FQ + 2 * DQ * vQ + kQ)), vQ = Math.min(1, Math.max(0, vQ))
        }
        return 3 * Math.pow(1 - vQ, 2) * vQ * wQ + 3 * (1 - vQ) * Math.pow(vQ, 2) * qQ + Math.pow(vQ, 3)
      }
    }
    class kQ {
      constructor(QQ) {
        this._radians = QQ, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(QQ, FQ) {
        const wQ = FQ.subtract(QQ),
          LQ = Math.atan2(wQ.y, wQ.x);
        return new kQ(LQ)
      }
      static BetweenTwoVectors(QQ, FQ) {
        let wQ = QQ.lengthSquared() * FQ.lengthSquared();
        if (0 === wQ) return new kQ(Math.PI / 2);
        wQ = Math.sqrt(wQ);
        let LQ = QQ.dot(FQ) / wQ;
        LQ = (0, qQ.Clamp)(LQ, -1, 1);
        const oQ = Math.acos(LQ);
        return new kQ(oQ)
      }
      static FromRadians(QQ) {
        return new kQ(QQ)
      }
      static FromDegrees(QQ) {
        return new kQ(QQ * Math.PI / 180)
      }
    }
    class vQ {
      constructor(QQ, FQ, wQ) {
        this.startPoint = QQ, this.midPoint = FQ, this.endPoint = wQ;
        const LQ = Math.pow(FQ.x, 2) + Math.pow(FQ.y, 2),
          qQ = (Math.pow(QQ.x, 2) + Math.pow(QQ.y, 2) - LQ) / 2,
          DQ = (LQ - Math.pow(wQ.x, 2) - Math.pow(wQ.y, 2)) / 2,
          vQ = (QQ.x - FQ.x) * (FQ.y - wQ.y) - (FQ.x - wQ.x) * (QQ.y - FQ.y);
        this.centerPoint = new oQ.n((qQ * (FQ.y - wQ.y) - DQ * (QQ.y - FQ.y)) / vQ, ((QQ.x - FQ.x) * DQ - (FQ.x - wQ.x) * qQ) / vQ), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = kQ.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const mQ = this.startAngle.degrees();
        let uQ = kQ.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          HQ = kQ.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        uQ - mQ > 180 && (uQ -= 360), uQ - mQ < -180 && (uQ += 360), HQ - uQ > 180 && (HQ -= 360), HQ - uQ < -180 && (HQ += 360), this.orientation = uQ - mQ < 0 ? 0 : 1, this.angle = kQ.FromDegrees(0 === this.orientation ? mQ - HQ : HQ - mQ)
      }
    }
    class mQ {
      constructor(QQ, FQ) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new oQ.n(QQ, FQ))
      }
      addLineTo(QQ, FQ) {
        if (this.closed) return this;
        const wQ = new oQ.n(QQ, FQ),
          LQ = this._points[this._points.length - 1];
        return this._points.push(wQ), this._length += wQ.subtract(LQ).length(), this
      }
      addArcTo(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const DQ = this._points[this._points.length - 1],
          kQ = new oQ.n(QQ, FQ),
          mQ = new oQ.n(wQ, LQ),
          uQ = new vQ(DQ, kQ, mQ);
        let HQ = uQ.angle.radians() / qQ;
        0 === uQ.orientation && (HQ *= -1);
        let bQ = uQ.startAngle.radians() + HQ;
        for (let oQ = 0; oQ < qQ; oQ++) {
          const QQ = Math.cos(bQ) * uQ.radius + uQ.centerPoint.x,
            FQ = Math.sin(bQ) * uQ.radius + uQ.centerPoint.y;
          this.addLineTo(QQ, FQ), bQ += HQ
        }
        return this
      }
      addQuadraticCurveTo(QQ, FQ, wQ, LQ) {
        let qQ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const oQ = (QQ, FQ, wQ, LQ) => (1 - QQ) * (1 - QQ) * FQ + 2 * QQ * (1 - QQ) * wQ + QQ * QQ * LQ,
          DQ = this._points[this._points.length - 1];
        for (let kQ = 0; kQ <= qQ; kQ++) {
          const vQ = kQ / qQ,
            mQ = oQ(vQ, DQ.x, QQ, wQ),
            uQ = oQ(vQ, DQ.y, FQ, LQ);
          this.addLineTo(mQ, uQ)
        }
        return this
      }
      addBezierCurveTo(QQ, FQ, wQ, LQ, qQ, oQ) {
        let DQ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const kQ = (QQ, FQ, wQ, LQ, qQ) => (1 - QQ) * (1 - QQ) * (1 - QQ) * FQ + 3 * QQ * (1 - QQ) * (1 - QQ) * wQ + 3 * QQ * QQ * (1 - QQ) * LQ + QQ * QQ * QQ * qQ,
          vQ = this._points[this._points.length - 1];
        for (let mQ = 0; mQ <= DQ; mQ++) {
          const uQ = mQ / DQ,
            HQ = kQ(uQ, vQ.x, QQ, wQ, qQ),
            bQ = kQ(uQ, vQ.y, FQ, LQ, oQ);
          this.addLineTo(HQ, bQ)
        }
        return this
      }
      isPointInside(QQ) {
        let FQ = !1;
        const wQ = this._points.length;
        for (let LQ = wQ - 1, qQ = 0; qQ < wQ; LQ = qQ++) {
          let wQ = this._points[LQ],
            oQ = this._points[qQ],
            DQ = oQ.x - wQ.x,
            kQ = oQ.y - wQ.y;
          if (Math.abs(kQ) > Number.EPSILON) {
            if (kQ < 0 && (wQ = this._points[qQ], DQ = -DQ, oQ = this._points[LQ], kQ = -kQ), QQ.y < wQ.y || QQ.y > oQ.y) continue;
            if (QQ.y === wQ.y && QQ.x === wQ.x) return !0;
            {
              const LQ = kQ * (QQ.x - wQ.x) - DQ * (QQ.y - wQ.y);
              if (0 === LQ) return !0;
              if (LQ < 0) continue;
              FQ = !FQ
            }
          } else {
            if (QQ.y !== wQ.y) continue;
            if (oQ.x <= QQ.x && QQ.x <= wQ.x || wQ.x <= QQ.x && QQ.x <= oQ.x) return !0
          }
        }
        return FQ
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let QQ = this._length;
        if (this.closed) {
          const FQ = this._points[this._points.length - 1];
          QQ += this._points[0].subtract(FQ).length()
        }
        return QQ
      }
      area() {
        const QQ = this._points.length;
        let FQ = 0;
        for (let wQ = QQ - 1, LQ = 0; LQ < QQ; wQ = LQ++) FQ += this._points[wQ].x * this._points[LQ].y - this._points[LQ].x * this._points[wQ].y;
        return .5 * FQ
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(QQ) {
        if (QQ < 0 || QQ > 1) return oQ.n.Zero();
        const FQ = QQ * this.length();
        let wQ = 0;
        for (let LQ = 0; LQ < this._points.length; LQ++) {
          const QQ = (LQ + 1) % this._points.length,
            qQ = this._points[LQ],
            DQ = this._points[QQ].subtract(qQ),
            kQ = DQ.length() + wQ;
          if (FQ >= wQ && FQ <= kQ) {
            const QQ = DQ.normalize(),
              LQ = FQ - wQ;
            return new oQ.n(qQ.x + QQ.x * LQ, qQ.y + QQ.y * LQ)
          }
          wQ = kQ
        }
        return oQ.n.Zero()
      }
      static StartingAt(QQ, FQ) {
        return new mQ(QQ, FQ)
      }
    }
    class uQ {
      static CreateQuadraticBezier(QQ, FQ, wQ, LQ) {
        LQ = LQ > 2 ? LQ : 3;
        const qQ = [],
          DQ = (QQ, FQ, wQ, LQ) => (1 - QQ) * (1 - QQ) * FQ + 2 * QQ * (1 - QQ) * wQ + QQ * QQ * LQ;
        for (let kQ = 0; kQ <= LQ; kQ++) qQ.push(new oQ.p(DQ(kQ / LQ, QQ.x, FQ.x, wQ.x), DQ(kQ / LQ, QQ.y, FQ.y, wQ.y), DQ(kQ / LQ, QQ.z, FQ.z, wQ.z)));
        return new uQ(qQ)
      }
      static CreateCubicBezier(QQ, FQ, wQ, LQ, qQ) {
        qQ = qQ > 3 ? qQ : 4;
        const DQ = [],
          kQ = (QQ, FQ, wQ, LQ, qQ) => (1 - QQ) * (1 - QQ) * (1 - QQ) * FQ + 3 * QQ * (1 - QQ) * (1 - QQ) * wQ + 3 * QQ * QQ * (1 - QQ) * LQ + QQ * QQ * QQ * qQ;
        for (let vQ = 0; vQ <= qQ; vQ++) DQ.push(new oQ.p(kQ(vQ / qQ, QQ.x, FQ.x, wQ.x, LQ.x), kQ(vQ / qQ, QQ.y, FQ.y, wQ.y, LQ.y), kQ(vQ / qQ, QQ.z, FQ.z, wQ.z, LQ.z)));
        return new uQ(DQ)
      }
      static CreateHermiteSpline(QQ, FQ, wQ, LQ, qQ) {
        const DQ = [],
          kQ = 1 / qQ;
        for (let vQ = 0; vQ <= qQ; vQ++) DQ.push(oQ.p.Hermite(QQ, FQ, wQ, LQ, vQ * kQ));
        return new uQ(DQ)
      }
      static CreateCatmullRomSpline(QQ, FQ, wQ) {
        const LQ = [],
          qQ = 1 / FQ;
        let DQ = 0;
        if (wQ) {
          const wQ = QQ.length;
          for (let kQ = 0; kQ < wQ; kQ++) {
            DQ = 0;
            for (let vQ = 0; vQ < FQ; vQ++) LQ.push(oQ.p.CatmullRom(QQ[kQ % wQ], QQ[(kQ + 1) % wQ], QQ[(kQ + 2) % wQ], QQ[(kQ + 3) % wQ], DQ)), DQ += qQ
          }
          LQ.push(LQ[0])
        } else {
          const wQ = [];
          wQ.push(QQ[0].clone()), wQ.push(...QQ), wQ.push(QQ[QQ.length - 1].clone());
          let kQ = 0;
          for (; kQ < wQ.length - 3; kQ++) {
            DQ = 0;
            for (let QQ = 0; QQ < FQ; QQ++) LQ.push(oQ.p.CatmullRom(wQ[kQ], wQ[kQ + 1], wQ[kQ + 2], wQ[kQ + 3], DQ)), DQ += qQ
          }
          kQ--, LQ.push(oQ.p.CatmullRom(wQ[kQ], wQ[kQ + 1], wQ[kQ + 2], wQ[kQ + 3], DQ))
        }
        return new uQ(LQ)
      }
      static ArcThru3Points(QQ, FQ, wQ) {
        let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          qQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          DQ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const kQ = [],
          vQ = FQ.subtract(QQ),
          mQ = wQ.subtract(FQ),
          HQ = QQ.subtract(wQ),
          bQ = oQ.p.Cross(vQ, mQ),
          YQ = bQ.length();
        if (YQ < Math.pow(10, -8)) return new uQ(kQ);
        const xQ = vQ.lengthSquared(),
          AQ = mQ.lengthSquared(),
          tQ = HQ.lengthSquared(),
          eQ = bQ.lengthSquared(),
          MQ = .5 * vQ.length() * mQ.length() * HQ.length() / YQ,
          GQ = -.5 * AQ * oQ.p.Dot(vQ, HQ) / eQ,
          pQ = -.5 * tQ * oQ.p.Dot(vQ, mQ) / eQ,
          cQ = -.5 * xQ * oQ.p.Dot(mQ, HQ) / eQ,
          CQ = QQ.scale(GQ).add(FQ.scale(pQ)).add(wQ.scale(cQ)),
          SQ = QQ.subtract(CQ).normalize(),
          iQ = oQ.p.Cross(bQ, SQ).normalize();
        if (DQ) {
          const FQ = 2 * Math.PI / LQ;
          for (let QQ = 0; QQ <= 2 * Math.PI; QQ += FQ) kQ.push(CQ.add(SQ.scale(MQ * Math.cos(QQ)).add(iQ.scale(MQ * Math.sin(QQ)))));
          kQ.push(QQ)
        } else {
          const FQ = 1 / LQ;
          let oQ, DQ = 0;
          do {
            oQ = CQ.add(SQ.scale(MQ * Math.cos(DQ)).add(iQ.scale(MQ * Math.sin(DQ)))), kQ.push(oQ), DQ += FQ
          } while (!oQ.equalsWithEpsilon(wQ, MQ * FQ * 1.1));
          kQ.push(wQ), qQ && kQ.push(QQ)
        }
        return new uQ(kQ)
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
        const FQ = this._points[this._points.length - 1],
          wQ = this._points.slice(),
          LQ = QQ.getPoints();
        for (let qQ = 1; qQ < LQ.length; qQ++) wQ.push(LQ[qQ].subtract(LQ[0]).add(FQ));
        return new uQ(wQ)
      }
      _computeLength(QQ) {
        let FQ = 0;
        for (let wQ = 1; wQ < QQ.length; wQ++) FQ += QQ[wQ].subtract(QQ[wQ - 1]).length();
        return FQ
      }
    }
  },
  38200: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(38203);
    const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(FQ) : null;
    class oQ {
      static DeepCopy(QQ, FQ, wQ, oQ) {
        let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kQ = function(QQ) {
          const FQ = [];
          do {
            const wQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return FQ
        }(QQ);
        for (const mQ of kQ) {
          if ("_" === mQ[0] && (!oQ || -1 === oQ.indexOf(mQ))) continue;
          if (mQ.endsWith("Observable")) continue;
          if (wQ && -1 !== wQ.indexOf(mQ)) continue;
          const kQ = QQ[mQ],
            uQ = typeof kQ;
          if ("function" !== uQ) try {
            if ("object" === uQ)
              if (kQ instanceof Uint8Array) FQ[mQ] = Uint8Array.from(kQ);
              else if (kQ instanceof Array) {
              if (FQ[mQ] = [], kQ.length > 0)
                if ("object" == typeof kQ[0])
                  for (let QQ = 0; QQ < kQ.length; QQ++) {
                    const wQ = qQ(kQ[QQ], FQ, DQ); - 1 === FQ[mQ].indexOf(wQ) && FQ[mQ].push(wQ)
                  } else FQ[mQ] = kQ.slice(0)
            } else FQ[mQ] = qQ(kQ, FQ, DQ);
            else FQ[mQ] = kQ
          } catch (vQ) {
            LQ.c.Warn(vQ.message)
          }
        }
      }
    }
  },
  38203: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static _CheckLimit(QQ, FQ) {
        let wQ = LQ._LogLimitOutputs[QQ];
        return wQ ? wQ.current++ : (wQ = {
          limit: FQ,
          current: 1
        }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wQ = LQ._LogLimitOutputs[QQ];
        if (!wQ || !LQ.MessageLimitReached) return;
        const qQ = this._Levels[FQ];
        wQ.current === wQ.limit && LQ[qQ.name](LQ.MessageLimitReached.replace(/%LIMIT%/g, "" + wQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        LQ._LogCache = QQ + LQ._LogCache, LQ.OnNewCacheEntry && LQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const FQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          wQ = new Date;
        return "[" + FQ(wQ.getHours()) + ":" + FQ(wQ.getMinutes()) + ":" + FQ(wQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, FQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(FQ) ? FQ[0] : FQ;
        if (void 0 !== wQ && !LQ._CheckLimit(qQ, wQ)) return;
        const oQ = LQ._FormatMessage(qQ),
          DQ = this._Levels[QQ],
          kQ = Array.isArray(FQ) ? FQ.slice(1) : [];
        DQ.logFunc && DQ.logFunc("BJS - " + oQ, ...kQ);
        const vQ = `<div style='color:${DQ.color}'>${oQ}</div><br>`;
        LQ._AddLogEntry(vQ), LQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return LQ._LogCache
      }
      static ClearLogCache() {
        LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        LQ.Log = LQ._LogDisabled, LQ.Warn = LQ._LogDisabled, LQ.Error = LQ._LogDisabled;
        const FQ = [LQ.MessageLogLevel, LQ.WarningLogLevel, LQ.ErrorLogLevel];
        for (const wQ of FQ)
          if ((QQ & wQ) === wQ) {
            const QQ = this._Levels[wQ];
            LQ[QQ.name] = LQ._LogEnabled.bind(LQ, wQ)
          }
      }
    }
    LQ.NoneLogLevel = 0, LQ.MessageLogLevel = 1, LQ.WarningLogLevel = 2, LQ.ErrorLogLevel = 4, LQ.AllLogLevel = 7, LQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ._Levels = [{}, {
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
    }], LQ.errorsCount = 0, LQ.Log = LQ._LogEnabled.bind(LQ, LQ.MessageLogLevel), LQ.Warn = LQ._LogEnabled.bind(LQ, LQ.WarningLogLevel), LQ.Error = LQ._LogEnabled.bind(LQ, LQ.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);