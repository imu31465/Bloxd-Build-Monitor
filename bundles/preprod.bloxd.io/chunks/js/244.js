export const id = 244;
export const ids = [244];
export const modules = {
  40930: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => nC,
      d: () => FC,
      g: () => qC
    });
    var QC, wC = ZC(36991),
      bC = ZC(36963);
    ! function(CC) {
      CC[CC.CW = 0] = "CW", CC[CC.CCW = 1] = "CCW"
    }(QC || (QC = {}));
    class nC {
      static Interpolate(CC, zC, ZC, QC, wC) {
        if (0 === CC) return 0;
        const bC = 1 - 3 * QC + 3 * zC,
          nC = 3 * QC - 6 * zC,
          fC = 3 * zC;
        let oC = CC;
        for (let qC = 0; qC < 5; qC++) {
          const zC = oC * oC;
          oC -= (bC * (zC * oC) + nC * zC + fC * oC - CC) * (1 / (3 * bC * zC + 2 * nC * oC + fC)), oC = Math.min(1, Math.max(0, oC))
        }
        return 3 * Math.pow(1 - oC, 2) * oC * ZC + 3 * (1 - oC) * Math.pow(oC, 2) * wC + Math.pow(oC, 3)
      }
    }
    class fC {
      constructor(CC) {
        this._radians = CC, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(CC, zC) {
        const ZC = zC.subtract(CC),
          QC = Math.atan2(ZC.y, ZC.x);
        return new fC(QC)
      }
      static BetweenTwoVectors(CC, zC) {
        let ZC = CC.lengthSquared() * zC.lengthSquared();
        if (0 === ZC) return new fC(Math.PI / 2);
        ZC = Math.sqrt(ZC);
        let QC = CC.dot(zC) / ZC;
        QC = (0, wC.Clamp)(QC, -1, 1);
        const bC = Math.acos(QC);
        return new fC(bC)
      }
      static FromRadians(CC) {
        return new fC(CC)
      }
      static FromDegrees(CC) {
        return new fC(CC * Math.PI / 180)
      }
    }
    class oC {
      constructor(CC, zC, ZC) {
        this.startPoint = CC, this.midPoint = zC, this.endPoint = ZC;
        const QC = Math.pow(zC.x, 2) + Math.pow(zC.y, 2),
          wC = (Math.pow(CC.x, 2) + Math.pow(CC.y, 2) - QC) / 2,
          nC = (QC - Math.pow(ZC.x, 2) - Math.pow(ZC.y, 2)) / 2,
          oC = (CC.x - zC.x) * (zC.y - ZC.y) - (zC.x - ZC.x) * (CC.y - zC.y);
        this.centerPoint = new bC.n((wC * (zC.y - ZC.y) - nC * (CC.y - zC.y)) / oC, ((CC.x - zC.x) * nC - (zC.x - ZC.x) * wC) / oC), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = fC.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const qC = this.startAngle.degrees();
        let FC = fC.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          WC = fC.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        FC - qC > 180 && (FC -= 360), FC - qC < -180 && (FC += 360), WC - FC > 180 && (WC -= 360), WC - FC < -180 && (WC += 360), this.orientation = FC - qC < 0 ? 0 : 1, this.angle = fC.FromDegrees(0 === this.orientation ? qC - WC : WC - qC)
      }
    }
    class qC {
      constructor(CC, zC) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new bC.n(CC, zC))
      }
      addLineTo(CC, zC) {
        if (this.closed) return this;
        const ZC = new bC.n(CC, zC),
          QC = this._points[this._points.length - 1];
        return this._points.push(ZC), this._length += ZC.subtract(QC).length(), this
      }
      addArcTo(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const nC = this._points[this._points.length - 1],
          fC = new bC.n(CC, zC),
          qC = new bC.n(ZC, QC),
          FC = new oC(nC, fC, qC);
        let WC = FC.angle.radians() / wC;
        0 === FC.orientation && (WC *= -1);
        let NC = FC.startAngle.radians() + WC;
        for (let bC = 0; bC < wC; bC++) {
          const CC = Math.cos(NC) * FC.radius + FC.centerPoint.x,
            zC = Math.sin(NC) * FC.radius + FC.centerPoint.y;
          this.addLineTo(CC, zC), NC += WC
        }
        return this
      }
      addQuadraticCurveTo(CC, zC, ZC, QC) {
        let wC = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const bC = (CC, zC, ZC, QC) => (1 - CC) * (1 - CC) * zC + 2 * CC * (1 - CC) * ZC + CC * CC * QC,
          nC = this._points[this._points.length - 1];
        for (let fC = 0; fC <= wC; fC++) {
          const oC = fC / wC,
            qC = bC(oC, nC.x, CC, ZC),
            FC = bC(oC, nC.y, zC, QC);
          this.addLineTo(qC, FC)
        }
        return this
      }
      addBezierCurveTo(CC, zC, ZC, QC, wC, bC) {
        let nC = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const fC = (CC, zC, ZC, QC, wC) => (1 - CC) * (1 - CC) * (1 - CC) * zC + 3 * CC * (1 - CC) * (1 - CC) * ZC + 3 * CC * CC * (1 - CC) * QC + CC * CC * CC * wC,
          oC = this._points[this._points.length - 1];
        for (let qC = 0; qC <= nC; qC++) {
          const FC = qC / nC,
            WC = fC(FC, oC.x, CC, ZC, wC),
            NC = fC(FC, oC.y, zC, QC, bC);
          this.addLineTo(WC, NC)
        }
        return this
      }
      isPointInside(CC) {
        let zC = !1;
        const ZC = this._points.length;
        for (let QC = ZC - 1, wC = 0; wC < ZC; QC = wC++) {
          let ZC = this._points[QC],
            bC = this._points[wC],
            nC = bC.x - ZC.x,
            fC = bC.y - ZC.y;
          if (Math.abs(fC) > Number.EPSILON) {
            if (fC < 0 && (ZC = this._points[wC], nC = -nC, bC = this._points[QC], fC = -fC), CC.y < ZC.y || CC.y > bC.y) continue;
            if (CC.y === ZC.y && CC.x === ZC.x) return !0;
            {
              const QC = fC * (CC.x - ZC.x) - nC * (CC.y - ZC.y);
              if (0 === QC) return !0;
              if (QC < 0) continue;
              zC = !zC
            }
          } else {
            if (CC.y !== ZC.y) continue;
            if (bC.x <= CC.x && CC.x <= ZC.x || ZC.x <= CC.x && CC.x <= bC.x) return !0
          }
        }
        return zC
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let CC = this._length;
        if (this.closed) {
          const zC = this._points[this._points.length - 1];
          CC += this._points[0].subtract(zC).length()
        }
        return CC
      }
      area() {
        const CC = this._points.length;
        let zC = 0;
        for (let ZC = CC - 1, QC = 0; QC < CC; ZC = QC++) zC += this._points[ZC].x * this._points[QC].y - this._points[QC].x * this._points[ZC].y;
        return .5 * zC
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(CC) {
        if (CC < 0 || CC > 1) return bC.n.Zero();
        const zC = CC * this.length();
        let ZC = 0;
        for (let QC = 0; QC < this._points.length; QC++) {
          const CC = (QC + 1) % this._points.length,
            wC = this._points[QC],
            nC = this._points[CC].subtract(wC),
            fC = nC.length() + ZC;
          if (zC >= ZC && zC <= fC) {
            const CC = nC.normalize(),
              QC = zC - ZC;
            return new bC.n(wC.x + CC.x * QC, wC.y + CC.y * QC)
          }
          ZC = fC
        }
        return bC.n.Zero()
      }
      static StartingAt(CC, zC) {
        return new qC(CC, zC)
      }
    }
    class FC {
      static CreateQuadraticBezier(CC, zC, ZC, QC) {
        QC = QC > 2 ? QC : 3;
        const wC = [],
          nC = (CC, zC, ZC, QC) => (1 - CC) * (1 - CC) * zC + 2 * CC * (1 - CC) * ZC + CC * CC * QC;
        for (let fC = 0; fC <= QC; fC++) wC.push(new bC.r(nC(fC / QC, CC.x, zC.x, ZC.x), nC(fC / QC, CC.y, zC.y, ZC.y), nC(fC / QC, CC.z, zC.z, ZC.z)));
        return new FC(wC)
      }
      static CreateCubicBezier(CC, zC, ZC, QC, wC) {
        wC = wC > 3 ? wC : 4;
        const nC = [],
          fC = (CC, zC, ZC, QC, wC) => (1 - CC) * (1 - CC) * (1 - CC) * zC + 3 * CC * (1 - CC) * (1 - CC) * ZC + 3 * CC * CC * (1 - CC) * QC + CC * CC * CC * wC;
        for (let oC = 0; oC <= wC; oC++) nC.push(new bC.r(fC(oC / wC, CC.x, zC.x, ZC.x, QC.x), fC(oC / wC, CC.y, zC.y, ZC.y, QC.y), fC(oC / wC, CC.z, zC.z, ZC.z, QC.z)));
        return new FC(nC)
      }
      static CreateHermiteSpline(CC, zC, ZC, QC, wC) {
        const nC = [],
          fC = 1 / wC;
        for (let oC = 0; oC <= wC; oC++) nC.push(bC.r.Hermite(CC, zC, ZC, QC, oC * fC));
        return new FC(nC)
      }
      static CreateCatmullRomSpline(CC, zC, ZC) {
        const QC = [],
          wC = 1 / zC;
        let nC = 0;
        if (ZC) {
          const ZC = CC.length;
          for (let fC = 0; fC < ZC; fC++) {
            nC = 0;
            for (let oC = 0; oC < zC; oC++) QC.push(bC.r.CatmullRom(CC[fC % ZC], CC[(fC + 1) % ZC], CC[(fC + 2) % ZC], CC[(fC + 3) % ZC], nC)), nC += wC
          }
          QC.push(QC[0])
        } else {
          const ZC = [];
          ZC.push(CC[0].clone()), ZC.push(...CC), ZC.push(CC[CC.length - 1].clone());
          let fC = 0;
          for (; fC < ZC.length - 3; fC++) {
            nC = 0;
            for (let CC = 0; CC < zC; CC++) QC.push(bC.r.CatmullRom(ZC[fC], ZC[fC + 1], ZC[fC + 2], ZC[fC + 3], nC)), nC += wC
          }
          fC--, QC.push(bC.r.CatmullRom(ZC[fC], ZC[fC + 1], ZC[fC + 2], ZC[fC + 3], nC))
        }
        return new FC(QC)
      }
      static ArcThru3Points(CC, zC, ZC) {
        let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          wC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          nC = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const fC = [],
          oC = zC.subtract(CC),
          qC = ZC.subtract(zC),
          WC = CC.subtract(ZC),
          NC = bC.r.Cross(oC, qC),
          MC = NC.length();
        if (MC < Math.pow(10, -8)) return new FC(fC);
        const gC = oC.lengthSquared(),
          SC = qC.lengthSquared(),
          pC = WC.lengthSquared(),
          PC = NC.lengthSquared(),
          GC = .5 * oC.length() * qC.length() * WC.length() / MC,
          RC = -.5 * SC * bC.r.Dot(oC, WC) / PC,
          AC = -.5 * pC * bC.r.Dot(oC, qC) / PC,
          xC = -.5 * gC * bC.r.Dot(qC, WC) / PC,
          JC = CC.scale(RC).add(zC.scale(AC)).add(ZC.scale(xC)),
          IC = CC.subtract(JC).normalize(),
          iC = bC.r.Cross(NC, IC).normalize();
        if (nC) {
          const zC = 2 * Math.PI / QC;
          for (let CC = 0; CC <= 2 * Math.PI; CC += zC) fC.push(JC.add(IC.scale(GC * Math.cos(CC)).add(iC.scale(GC * Math.sin(CC)))));
          fC.push(CC)
        } else {
          const zC = 1 / QC;
          let bC, nC = 0;
          do {
            bC = JC.add(IC.scale(GC * Math.cos(nC)).add(iC.scale(GC * Math.sin(nC)))), fC.push(bC), nC += zC
          } while (!bC.equalsWithEpsilon(ZC, GC * zC * 1.1));
          fC.push(ZC), wC && fC.push(CC)
        }
        return new FC(fC)
      }
      constructor(CC) {
        this._length = 0, this._points = CC, this._length = this._computeLength(CC)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (CC) {
        const zC = this._points[this._points.length - 1],
          ZC = this._points.slice(),
          QC = CC.getPoints();
        for (let wC = 1; wC < QC.length; wC++) ZC.push(QC[wC].subtract(QC[0]).add(zC));
        return new FC(ZC)
      }
      _computeLength(CC) {
        let zC = 0;
        for (let ZC = 1; ZC < CC.length; ZC++) zC += CC[ZC].subtract(CC[ZC - 1]).length();
        return zC
      }
    }
  },
  38501: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(38507);
    const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
      ...CC
    } : null : CC.clone(zC) : null;
    class bC {
      static DeepCopy(CC, zC, ZC, bC) {
        let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fC = function(CC) {
          const zC = [];
          do {
            const ZC = Object.getOwnPropertyNames(CC);
            for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
          } while (CC = Object.getPrototypeOf(CC));
          return zC
        }(CC);
        for (const qC of fC) {
          if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
          if (qC.endsWith("Observable")) continue;
          if (ZC && -1 !== ZC.indexOf(qC)) continue;
          const fC = CC[qC],
            FC = typeof fC;
          if ("function" !== FC) try {
            if ("object" === FC)
              if (fC instanceof Uint8Array) zC[qC] = Uint8Array.from(fC);
              else if (fC instanceof Array) {
              if (zC[qC] = [], fC.length > 0)
                if ("object" == typeof fC[0])
                  for (let CC = 0; CC < fC.length; CC++) {
                    const ZC = wC(fC[CC], zC, nC); - 1 === zC[qC].indexOf(ZC) && zC[qC].push(ZC)
                  } else zC[qC] = fC.slice(0)
            } else zC[qC] = wC(fC, zC, nC);
            else zC[qC] = fC
          } catch (oC) {
            QC.c.Warn(oC.message)
          }
        }
      }
    }
  },
  38507: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      static _CheckLimit(CC, zC) {
        let ZC = QC._LogLimitOutputs[CC];
        return ZC ? ZC.current++ : (ZC = {
          limit: zC,
          current: 1
        }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
      }
      static _GenerateLimitMessage(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZC = QC._LogLimitOutputs[CC];
        if (!ZC || !QC.MessageLimitReached) return;
        const wC = this._Levels[zC];
        ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
      }
      static _AddLogEntry(CC) {
        QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
      }
      static _FormatMessage(CC) {
        const zC = CC => CC < 10 ? "0" + CC : "" + CC,
          ZC = new Date;
        return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
      }
      static _LogDisabled(CC, zC) {}
      static _LogEnabled() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const wC = Array.isArray(zC) ? zC[0] : zC;
        if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
        const bC = QC._FormatMessage(wC),
          nC = this._Levels[CC],
          fC = Array.isArray(zC) ? zC.slice(1) : [];
        nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
        const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
        QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
      }
      static get LogCache() {
        return QC._LogCache
      }
      static ClearLogCache() {
        QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
      }
      static set LogLevels(CC) {
        QC.Log = QC._LogDisabled, QC.Warn = QC._LogDisabled, QC.Error = QC._LogDisabled;
        const zC = [QC.MessageLogLevel, QC.WarningLogLevel, QC.ErrorLogLevel];
        for (const ZC of zC)
          if ((CC & ZC) === ZC) {
            const CC = this._Levels[ZC];
            QC[CC.name] = QC._LogEnabled.bind(QC, ZC)
          }
      }
    }
    QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels = [{}, {
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
    }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);