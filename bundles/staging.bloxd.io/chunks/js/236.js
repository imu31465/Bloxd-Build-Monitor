export const id = 236;
export const ids = [236];
export const modules = {
  40166: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => fD,
      c: () => SD,
      e: () => wD
    });
    var ID, pD = cD(36479),
      iD = cD(36446);
    ! function(DD) {
      DD[DD.CW = 0] = "CW", DD[DD.CCW = 1] = "CCW"
    }(ID || (ID = {}));
    class fD {
      static Interpolate(DD, CD, cD, ID, pD) {
        if (0 === DD) return 0;
        const iD = 1 - 3 * ID + 3 * CD,
          fD = 3 * ID - 6 * CD,
          bD = 3 * CD;
        let QD = DD;
        for (let wD = 0; wD < 5; wD++) {
          const CD = QD * QD;
          QD -= (iD * (CD * QD) + fD * CD + bD * QD - DD) * (1 / (3 * iD * CD + 2 * fD * QD + bD)), QD = Math.min(1, Math.max(0, QD))
        }
        return 3 * Math.pow(1 - QD, 2) * QD * cD + 3 * (1 - QD) * Math.pow(QD, 2) * pD + Math.pow(QD, 3)
      }
    }
    class bD {
      constructor(DD) {
        this._radians = DD, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(DD, CD) {
        const cD = CD.subtract(DD),
          ID = Math.atan2(cD.y, cD.x);
        return new bD(ID)
      }
      static BetweenTwoVectors(DD, CD) {
        let cD = DD.lengthSquared() * CD.lengthSquared();
        if (0 === cD) return new bD(Math.PI / 2);
        cD = Math.sqrt(cD);
        let ID = DD.dot(CD) / cD;
        ID = (0, pD.Clamp)(ID, -1, 1);
        const iD = Math.acos(ID);
        return new bD(iD)
      }
      static FromRadians(DD) {
        return new bD(DD)
      }
      static FromDegrees(DD) {
        return new bD(DD * Math.PI / 180)
      }
    }
    class QD {
      constructor(DD, CD, cD) {
        this.startPoint = DD, this.midPoint = CD, this.endPoint = cD;
        const ID = Math.pow(CD.x, 2) + Math.pow(CD.y, 2),
          pD = (Math.pow(DD.x, 2) + Math.pow(DD.y, 2) - ID) / 2,
          fD = (ID - Math.pow(cD.x, 2) - Math.pow(cD.y, 2)) / 2,
          QD = (DD.x - CD.x) * (CD.y - cD.y) - (CD.x - cD.x) * (DD.y - CD.y);
        this.centerPoint = new iD.n((pD * (CD.y - cD.y) - fD * (DD.y - CD.y)) / QD, ((DD.x - CD.x) * fD - (CD.x - cD.x) * pD) / QD), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = bD.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const wD = this.startAngle.degrees();
        let SD = bD.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          BD = bD.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        SD - wD > 180 && (SD -= 360), SD - wD < -180 && (SD += 360), BD - SD > 180 && (BD -= 360), BD - SD < -180 && (BD += 360), this.orientation = SD - wD < 0 ? 0 : 1, this.angle = bD.FromDegrees(0 === this.orientation ? wD - BD : BD - wD)
      }
    }
    class wD {
      constructor(DD, CD) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new iD.n(DD, CD))
      }
      addLineTo(DD, CD) {
        if (this.closed) return this;
        const cD = new iD.n(DD, CD),
          ID = this._points[this._points.length - 1];
        return this._points.push(cD), this._length += cD.subtract(ID).length(), this
      }
      addArcTo(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const fD = this._points[this._points.length - 1],
          bD = new iD.n(DD, CD),
          wD = new iD.n(cD, ID),
          SD = new QD(fD, bD, wD);
        let BD = SD.angle.radians() / pD;
        0 === SD.orientation && (BD *= -1);
        let yD = SD.startAngle.radians() + BD;
        for (let iD = 0; iD < pD; iD++) {
          const DD = Math.cos(yD) * SD.radius + SD.centerPoint.x,
            CD = Math.sin(yD) * SD.radius + SD.centerPoint.y;
          this.addLineTo(DD, CD), yD += BD
        }
        return this
      }
      addQuadraticCurveTo(DD, CD, cD, ID) {
        let pD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const iD = (DD, CD, cD, ID) => (1 - DD) * (1 - DD) * CD + 2 * DD * (1 - DD) * cD + DD * DD * ID,
          fD = this._points[this._points.length - 1];
        for (let bD = 0; bD <= pD; bD++) {
          const QD = bD / pD,
            wD = iD(QD, fD.x, DD, cD),
            SD = iD(QD, fD.y, CD, ID);
          this.addLineTo(wD, SD)
        }
        return this
      }
      addBezierCurveTo(DD, CD, cD, ID, pD, iD) {
        let fD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const bD = (DD, CD, cD, ID, pD) => (1 - DD) * (1 - DD) * (1 - DD) * CD + 3 * DD * (1 - DD) * (1 - DD) * cD + 3 * DD * DD * (1 - DD) * ID + DD * DD * DD * pD,
          QD = this._points[this._points.length - 1];
        for (let wD = 0; wD <= fD; wD++) {
          const SD = wD / fD,
            BD = bD(SD, QD.x, DD, cD, pD),
            yD = bD(SD, QD.y, CD, ID, iD);
          this.addLineTo(BD, yD)
        }
        return this
      }
      isPointInside(DD) {
        let CD = !1;
        const cD = this._points.length;
        for (let ID = cD - 1, pD = 0; pD < cD; ID = pD++) {
          let cD = this._points[ID],
            iD = this._points[pD],
            fD = iD.x - cD.x,
            bD = iD.y - cD.y;
          if (Math.abs(bD) > Number.EPSILON) {
            if (bD < 0 && (cD = this._points[pD], fD = -fD, iD = this._points[ID], bD = -bD), DD.y < cD.y || DD.y > iD.y) continue;
            if (DD.y === cD.y && DD.x === cD.x) return !0;
            {
              const ID = bD * (DD.x - cD.x) - fD * (DD.y - cD.y);
              if (0 === ID) return !0;
              if (ID < 0) continue;
              CD = !CD
            }
          } else {
            if (DD.y !== cD.y) continue;
            if (iD.x <= DD.x && DD.x <= cD.x || cD.x <= DD.x && DD.x <= iD.x) return !0
          }
        }
        return CD
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let DD = this._length;
        if (this.closed) {
          const CD = this._points[this._points.length - 1];
          DD += this._points[0].subtract(CD).length()
        }
        return DD
      }
      area() {
        const DD = this._points.length;
        let CD = 0;
        for (let cD = DD - 1, ID = 0; ID < DD; cD = ID++) CD += this._points[cD].x * this._points[ID].y - this._points[ID].x * this._points[cD].y;
        return .5 * CD
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(DD) {
        if (DD < 0 || DD > 1) return iD.n.Zero();
        const CD = DD * this.length();
        let cD = 0;
        for (let ID = 0; ID < this._points.length; ID++) {
          const DD = (ID + 1) % this._points.length,
            pD = this._points[ID],
            fD = this._points[DD].subtract(pD),
            bD = fD.length() + cD;
          if (CD >= cD && CD <= bD) {
            const DD = fD.normalize(),
              ID = CD - cD;
            return new iD.n(pD.x + DD.x * ID, pD.y + DD.y * ID)
          }
          cD = bD
        }
        return iD.n.Zero()
      }
      static StartingAt(DD, CD) {
        return new wD(DD, CD)
      }
    }
    class SD {
      static CreateQuadraticBezier(DD, CD, cD, ID) {
        ID = ID > 2 ? ID : 3;
        const pD = [],
          fD = (DD, CD, cD, ID) => (1 - DD) * (1 - DD) * CD + 2 * DD * (1 - DD) * cD + DD * DD * ID;
        for (let bD = 0; bD <= ID; bD++) pD.push(new iD.p(fD(bD / ID, DD.x, CD.x, cD.x), fD(bD / ID, DD.y, CD.y, cD.y), fD(bD / ID, DD.z, CD.z, cD.z)));
        return new SD(pD)
      }
      static CreateCubicBezier(DD, CD, cD, ID, pD) {
        pD = pD > 3 ? pD : 4;
        const fD = [],
          bD = (DD, CD, cD, ID, pD) => (1 - DD) * (1 - DD) * (1 - DD) * CD + 3 * DD * (1 - DD) * (1 - DD) * cD + 3 * DD * DD * (1 - DD) * ID + DD * DD * DD * pD;
        for (let QD = 0; QD <= pD; QD++) fD.push(new iD.p(bD(QD / pD, DD.x, CD.x, cD.x, ID.x), bD(QD / pD, DD.y, CD.y, cD.y, ID.y), bD(QD / pD, DD.z, CD.z, cD.z, ID.z)));
        return new SD(fD)
      }
      static CreateHermiteSpline(DD, CD, cD, ID, pD) {
        const fD = [],
          bD = 1 / pD;
        for (let QD = 0; QD <= pD; QD++) fD.push(iD.p.Hermite(DD, CD, cD, ID, QD * bD));
        return new SD(fD)
      }
      static CreateCatmullRomSpline(DD, CD, cD) {
        const ID = [],
          pD = 1 / CD;
        let fD = 0;
        if (cD) {
          const cD = DD.length;
          for (let bD = 0; bD < cD; bD++) {
            fD = 0;
            for (let QD = 0; QD < CD; QD++) ID.push(iD.p.CatmullRom(DD[bD % cD], DD[(bD + 1) % cD], DD[(bD + 2) % cD], DD[(bD + 3) % cD], fD)), fD += pD
          }
          ID.push(ID[0])
        } else {
          const cD = [];
          cD.push(DD[0].clone()), cD.push(...DD), cD.push(DD[DD.length - 1].clone());
          let bD = 0;
          for (; bD < cD.length - 3; bD++) {
            fD = 0;
            for (let DD = 0; DD < CD; DD++) ID.push(iD.p.CatmullRom(cD[bD], cD[bD + 1], cD[bD + 2], cD[bD + 3], fD)), fD += pD
          }
          bD--, ID.push(iD.p.CatmullRom(cD[bD], cD[bD + 1], cD[bD + 2], cD[bD + 3], fD))
        }
        return new SD(ID)
      }
      static ArcThru3Points(DD, CD, cD) {
        let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          pD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          fD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bD = [],
          QD = CD.subtract(DD),
          wD = cD.subtract(CD),
          BD = DD.subtract(cD),
          yD = iD.p.Cross(QD, wD),
          MD = yD.length();
        if (MD < Math.pow(10, -8)) return new SD(bD);
        const tD = QD.lengthSquared(),
          ZD = wD.lengthSquared(),
          oD = BD.lengthSquared(),
          vD = yD.lengthSquared(),
          ND = .5 * QD.length() * wD.length() * BD.length() / MD,
          gD = -.5 * ZD * iD.p.Dot(QD, BD) / vD,
          XD = -.5 * oD * iD.p.Dot(QD, wD) / vD,
          mD = -.5 * tD * iD.p.Dot(wD, BD) / vD,
          nD = DD.scale(gD).add(CD.scale(XD)).add(cD.scale(mD)),
          OD = DD.subtract(nD).normalize(),
          PD = iD.p.Cross(yD, OD).normalize();
        if (fD) {
          const CD = 2 * Math.PI / ID;
          for (let DD = 0; DD <= 2 * Math.PI; DD += CD) bD.push(nD.add(OD.scale(ND * Math.cos(DD)).add(PD.scale(ND * Math.sin(DD)))));
          bD.push(DD)
        } else {
          const CD = 1 / ID;
          let iD, fD = 0;
          do {
            iD = nD.add(OD.scale(ND * Math.cos(fD)).add(PD.scale(ND * Math.sin(fD)))), bD.push(iD), fD += CD
          } while (!iD.equalsWithEpsilon(cD, ND * CD * 1.1));
          bD.push(cD), pD && bD.push(DD)
        }
        return new SD(bD)
      }
      constructor(DD) {
        this._length = 0, this._points = DD, this._length = this._computeLength(DD)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (DD) {
        const CD = this._points[this._points.length - 1],
          cD = this._points.slice(),
          ID = DD.getPoints();
        for (let pD = 1; pD < ID.length; pD++) cD.push(ID[pD].subtract(ID[0]).add(CD));
        return new SD(cD)
      }
      _computeLength(DD) {
        let CD = 0;
        for (let cD = 1; cD < DD.length; cD++) CD += DD[cD].subtract(DD[cD - 1]).length();
        return CD
      }
    }
  },
  38045: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(38048);
    const pD = (DD, CD, cD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : cD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(CD) : null;
    class iD {
      static DeepCopy(DD, CD, cD, iD) {
        let fD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bD = function(DD) {
          const CD = [];
          do {
            const cD = Object.getOwnPropertyNames(DD);
            for (const DD of cD) - 1 === CD.indexOf(DD) && CD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return CD
        }(DD);
        for (const wD of bD) {
          if ("_" === wD[0] && (!iD || -1 === iD.indexOf(wD))) continue;
          if (wD.endsWith("Observable")) continue;
          if (cD && -1 !== cD.indexOf(wD)) continue;
          const bD = DD[wD],
            SD = typeof bD;
          if ("function" !== SD) try {
            if ("object" === SD)
              if (bD instanceof Uint8Array) CD[wD] = Uint8Array.from(bD);
              else if (bD instanceof Array) {
              if (CD[wD] = [], bD.length > 0)
                if ("object" == typeof bD[0])
                  for (let DD = 0; DD < bD.length; DD++) {
                    const cD = pD(bD[DD], CD, fD); - 1 === CD[wD].indexOf(cD) && CD[wD].push(cD)
                  } else CD[wD] = bD.slice(0)
            } else CD[wD] = pD(bD, CD, fD);
            else CD[wD] = bD
          } catch (QD) {
            ID.e.Warn(QD.message)
          }
        }
      }
    }
  },
  38048: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static _CheckLimit(DD, CD) {
        let cD = ID._LogLimitOutputs[DD];
        return cD ? cD.current++ : (cD = {
          limit: CD,
          current: 1
        }, ID._LogLimitOutputs[DD] = cD), cD.current <= cD.limit
      }
      static _GenerateLimitMessage(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cD = ID._LogLimitOutputs[DD];
        if (!cD || !ID.MessageLimitReached) return;
        const pD = this._Levels[CD];
        cD.current === cD.limit && ID[pD.name](ID.MessageLimitReached.replace(/%LIMIT%/g, "" + cD.limit).replace(/%TYPE%/g, pD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        ID._LogCache = DD + ID._LogCache, ID.OnNewCacheEntry && ID.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const CD = DD => DD < 10 ? "0" + DD : "" + DD,
          cD = new Date;
        return "[" + CD(cD.getHours()) + ":" + CD(cD.getMinutes()) + ":" + CD(cD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, CD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = Array.isArray(CD) ? CD[0] : CD;
        if (void 0 !== cD && !ID._CheckLimit(pD, cD)) return;
        const iD = ID._FormatMessage(pD),
          fD = this._Levels[DD],
          bD = Array.isArray(CD) ? CD.slice(1) : [];
        fD.logFunc && fD.logFunc("BJS - " + iD, ...bD);
        const QD = `<div style='color:${fD.color}'>${iD}</div><br>`;
        ID._AddLogEntry(QD), ID._GenerateLimitMessage(pD, DD)
      }
      static get LogCache() {
        return ID._LogCache
      }
      static ClearLogCache() {
        ID._LogCache = "", ID._LogLimitOutputs = {}, ID.errorsCount = 0
      }
      static set LogLevels(DD) {
        ID.Log = ID._LogDisabled, ID.Warn = ID._LogDisabled, ID.Error = ID._LogDisabled;
        const CD = [ID.MessageLogLevel, ID.WarningLogLevel, ID.ErrorLogLevel];
        for (const cD of CD)
          if ((DD & cD) === cD) {
            const DD = this._Levels[cD];
            ID[DD.name] = ID._LogEnabled.bind(ID, cD)
          }
      }
    }
    ID.NoneLogLevel = 0, ID.MessageLogLevel = 1, ID.WarningLogLevel = 2, ID.ErrorLogLevel = 4, ID.AllLogLevel = 7, ID.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ID._LogCache = "", ID._LogLimitOutputs = {}, ID._Levels = [{}, {
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
    }], ID.errorsCount = 0, ID.Log = ID._LogEnabled.bind(ID, ID.MessageLogLevel), ID.Warn = ID._LogEnabled.bind(ID, ID.WarningLogLevel), ID.Error = ID._LogEnabled.bind(ID, ID.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);