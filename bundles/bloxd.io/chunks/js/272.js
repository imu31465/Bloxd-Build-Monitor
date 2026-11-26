export const id = 272;
export const ids = [272];
export const modules = {
  42093: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      h: () => MB,
      l: () => JB
    });
    var YB, DB = GB(37807),
      QB = GB(37778);
    ! function(BB) {
      BB[BB.CW = 0] = "CW", BB[BB.CCW = 1] = "CCW"
    }(YB || (YB = {}));
    class oB {
      static Interpolate(BB, OB, GB, YB, DB) {
        if (0 === BB) return 0;
        const QB = 1 - 3 * YB + 3 * OB,
          oB = 3 * YB - 6 * OB,
          jB = 3 * OB;
        let yB = BB;
        for (let JB = 0; JB < 5; JB++) {
          const OB = yB * yB;
          yB -= (QB * (OB * yB) + oB * OB + jB * yB - BB) * (1 / (3 * QB * OB + 2 * oB * yB + jB)), yB = Math.min(1, Math.max(0, yB))
        }
        return 3 * Math.pow(1 - yB, 2) * yB * GB + 3 * (1 - yB) * Math.pow(yB, 2) * DB + Math.pow(yB, 3)
      }
    }
    class jB {
      constructor(BB) {
        this._radians = BB, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(BB, OB) {
        const GB = OB.subtract(BB),
          YB = Math.atan2(GB.y, GB.x);
        return new jB(YB)
      }
      static BetweenTwoVectors(BB, OB) {
        let GB = BB.lengthSquared() * OB.lengthSquared();
        if (0 === GB) return new jB(Math.PI / 2);
        GB = Math.sqrt(GB);
        let YB = BB.dot(OB) / GB;
        YB = (0, DB.Clamp)(YB, -1, 1);
        const QB = Math.acos(YB);
        return new jB(QB)
      }
      static FromRadians(BB) {
        return new jB(BB)
      }
      static FromDegrees(BB) {
        return new jB(BB * Math.PI / 180)
      }
    }
    class yB {
      constructor(BB, OB, GB) {
        this.startPoint = BB, this.midPoint = OB, this.endPoint = GB;
        const YB = Math.pow(OB.x, 2) + Math.pow(OB.y, 2),
          DB = (Math.pow(BB.x, 2) + Math.pow(BB.y, 2) - YB) / 2,
          oB = (YB - Math.pow(GB.x, 2) - Math.pow(GB.y, 2)) / 2,
          yB = (BB.x - OB.x) * (OB.y - GB.y) - (OB.x - GB.x) * (BB.y - OB.y);
        this.centerPoint = new QB.o((DB * (OB.y - GB.y) - oB * (BB.y - OB.y)) / yB, ((BB.x - OB.x) * oB - (OB.x - GB.x) * DB) / yB), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = jB.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const JB = this.startAngle.degrees();
        let MB = jB.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          PB = jB.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        MB - JB > 180 && (MB -= 360), MB - JB < -180 && (MB += 360), PB - MB > 180 && (PB -= 360), PB - MB < -180 && (PB += 360), this.orientation = MB - JB < 0 ? 0 : 1, this.angle = jB.FromDegrees(0 === this.orientation ? JB - PB : PB - JB)
      }
    }
    class JB {
      constructor(BB, OB) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new QB.o(BB, OB))
      }
      addLineTo(BB, OB) {
        if (this.closed) return this;
        const GB = new QB.o(BB, OB),
          YB = this._points[this._points.length - 1];
        return this._points.push(GB), this._length += GB.subtract(YB).length(), this
      }
      addArcTo(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const oB = this._points[this._points.length - 1],
          jB = new QB.o(BB, OB),
          JB = new QB.o(GB, YB),
          MB = new yB(oB, jB, JB);
        let PB = MB.angle.radians() / DB;
        0 === MB.orientation && (PB *= -1);
        let zB = MB.startAngle.radians() + PB;
        for (let QB = 0; QB < DB; QB++) {
          const BB = Math.cos(zB) * MB.radius + MB.centerPoint.x,
            OB = Math.sin(zB) * MB.radius + MB.centerPoint.y;
          this.addLineTo(BB, OB), zB += PB
        }
        return this
      }
      addQuadraticCurveTo(BB, OB, GB, YB) {
        let DB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const QB = (BB, OB, GB, YB) => (1 - BB) * (1 - BB) * OB + 2 * BB * (1 - BB) * GB + BB * BB * YB,
          oB = this._points[this._points.length - 1];
        for (let jB = 0; jB <= DB; jB++) {
          const yB = jB / DB,
            JB = QB(yB, oB.x, BB, GB),
            MB = QB(yB, oB.y, OB, YB);
          this.addLineTo(JB, MB)
        }
        return this
      }
      addBezierCurveTo(BB, OB, GB, YB, DB, QB) {
        let oB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const jB = (BB, OB, GB, YB, DB) => (1 - BB) * (1 - BB) * (1 - BB) * OB + 3 * BB * (1 - BB) * (1 - BB) * GB + 3 * BB * BB * (1 - BB) * YB + BB * BB * BB * DB,
          yB = this._points[this._points.length - 1];
        for (let JB = 0; JB <= oB; JB++) {
          const MB = JB / oB,
            PB = jB(MB, yB.x, BB, GB, DB),
            zB = jB(MB, yB.y, OB, YB, QB);
          this.addLineTo(PB, zB)
        }
        return this
      }
      isPointInside(BB) {
        let OB = !1;
        const GB = this._points.length;
        for (let YB = GB - 1, DB = 0; DB < GB; YB = DB++) {
          let GB = this._points[YB],
            QB = this._points[DB],
            oB = QB.x - GB.x,
            jB = QB.y - GB.y;
          if (Math.abs(jB) > Number.EPSILON) {
            if (jB < 0 && (GB = this._points[DB], oB = -oB, QB = this._points[YB], jB = -jB), BB.y < GB.y || BB.y > QB.y) continue;
            if (BB.y === GB.y && BB.x === GB.x) return !0;
            {
              const YB = jB * (BB.x - GB.x) - oB * (BB.y - GB.y);
              if (0 === YB) return !0;
              if (YB < 0) continue;
              OB = !OB
            }
          } else {
            if (BB.y !== GB.y) continue;
            if (QB.x <= BB.x && BB.x <= GB.x || GB.x <= BB.x && BB.x <= QB.x) return !0
          }
        }
        return OB
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let BB = this._length;
        if (this.closed) {
          const OB = this._points[this._points.length - 1];
          BB += this._points[0].subtract(OB).length()
        }
        return BB
      }
      area() {
        const BB = this._points.length;
        let OB = 0;
        for (let GB = BB - 1, YB = 0; YB < BB; GB = YB++) OB += this._points[GB].x * this._points[YB].y - this._points[YB].x * this._points[GB].y;
        return .5 * OB
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(BB) {
        if (BB < 0 || BB > 1) return QB.o.Zero();
        const OB = BB * this.length();
        let GB = 0;
        for (let YB = 0; YB < this._points.length; YB++) {
          const BB = (YB + 1) % this._points.length,
            DB = this._points[YB],
            oB = this._points[BB].subtract(DB),
            jB = oB.length() + GB;
          if (OB >= GB && OB <= jB) {
            const BB = oB.normalize(),
              YB = OB - GB;
            return new QB.o(DB.x + BB.x * YB, DB.y + BB.y * YB)
          }
          GB = jB
        }
        return QB.o.Zero()
      }
      static StartingAt(BB, OB) {
        return new JB(BB, OB)
      }
    }
    class MB {
      static CreateQuadraticBezier(BB, OB, GB, YB) {
        YB = YB > 2 ? YB : 3;
        const DB = [],
          oB = (BB, OB, GB, YB) => (1 - BB) * (1 - BB) * OB + 2 * BB * (1 - BB) * GB + BB * BB * YB;
        for (let jB = 0; jB <= YB; jB++) DB.push(new QB.r(oB(jB / YB, BB.x, OB.x, GB.x), oB(jB / YB, BB.y, OB.y, GB.y), oB(jB / YB, BB.z, OB.z, GB.z)));
        return new MB(DB)
      }
      static CreateCubicBezier(BB, OB, GB, YB, DB) {
        DB = DB > 3 ? DB : 4;
        const oB = [],
          jB = (BB, OB, GB, YB, DB) => (1 - BB) * (1 - BB) * (1 - BB) * OB + 3 * BB * (1 - BB) * (1 - BB) * GB + 3 * BB * BB * (1 - BB) * YB + BB * BB * BB * DB;
        for (let yB = 0; yB <= DB; yB++) oB.push(new QB.r(jB(yB / DB, BB.x, OB.x, GB.x, YB.x), jB(yB / DB, BB.y, OB.y, GB.y, YB.y), jB(yB / DB, BB.z, OB.z, GB.z, YB.z)));
        return new MB(oB)
      }
      static CreateHermiteSpline(BB, OB, GB, YB, DB) {
        const oB = [],
          jB = 1 / DB;
        for (let yB = 0; yB <= DB; yB++) oB.push(QB.r.Hermite(BB, OB, GB, YB, yB * jB));
        return new MB(oB)
      }
      static CreateCatmullRomSpline(BB, OB, GB) {
        const YB = [],
          DB = 1 / OB;
        let oB = 0;
        if (GB) {
          const GB = BB.length;
          for (let jB = 0; jB < GB; jB++) {
            oB = 0;
            for (let yB = 0; yB < OB; yB++) YB.push(QB.r.CatmullRom(BB[jB % GB], BB[(jB + 1) % GB], BB[(jB + 2) % GB], BB[(jB + 3) % GB], oB)), oB += DB
          }
          YB.push(YB[0])
        } else {
          const GB = [];
          GB.push(BB[0].clone()), GB.push(...BB), GB.push(BB[BB.length - 1].clone());
          let jB = 0;
          for (; jB < GB.length - 3; jB++) {
            oB = 0;
            for (let BB = 0; BB < OB; BB++) YB.push(QB.r.CatmullRom(GB[jB], GB[jB + 1], GB[jB + 2], GB[jB + 3], oB)), oB += DB
          }
          jB--, YB.push(QB.r.CatmullRom(GB[jB], GB[jB + 1], GB[jB + 2], GB[jB + 3], oB))
        }
        return new MB(YB)
      }
      static ArcThru3Points(BB, OB, GB) {
        let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          DB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          oB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const jB = [],
          yB = OB.subtract(BB),
          JB = GB.subtract(OB),
          PB = BB.subtract(GB),
          zB = QB.r.Cross(yB, JB),
          lB = zB.length();
        if (lB < Math.pow(10, -8)) return new MB(jB);
        const pB = yB.lengthSquared(),
          qB = JB.lengthSquared(),
          ZB = PB.lengthSquared(),
          NB = zB.lengthSquared(),
          RB = .5 * yB.length() * JB.length() * PB.length() / lB,
          WB = -.5 * qB * QB.r.Dot(yB, PB) / NB,
          AB = -.5 * ZB * QB.r.Dot(yB, JB) / NB,
          VB = -.5 * pB * QB.r.Dot(JB, PB) / NB,
          SB = BB.scale(WB).add(OB.scale(AB)).add(GB.scale(VB)),
          nB = BB.subtract(SB).normalize(),
          UB = QB.r.Cross(zB, nB).normalize();
        if (oB) {
          const OB = 2 * Math.PI / YB;
          for (let BB = 0; BB <= 2 * Math.PI; BB += OB) jB.push(SB.add(nB.scale(RB * Math.cos(BB)).add(UB.scale(RB * Math.sin(BB)))));
          jB.push(BB)
        } else {
          const OB = 1 / YB;
          let QB, oB = 0;
          do {
            QB = SB.add(nB.scale(RB * Math.cos(oB)).add(UB.scale(RB * Math.sin(oB)))), jB.push(QB), oB += OB
          } while (!QB.equalsWithEpsilon(GB, RB * OB * 1.1));
          jB.push(GB), DB && jB.push(BB)
        }
        return new MB(jB)
      }
      constructor(BB) {
        this._length = 0, this._points = BB, this._length = this._computeLength(BB)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (BB) {
        const OB = this._points[this._points.length - 1],
          GB = this._points.slice(),
          YB = BB.getPoints();
        for (let DB = 1; DB < YB.length; DB++) GB.push(YB[DB].subtract(YB[0]).add(OB));
        return new MB(GB)
      }
      _computeLength(BB) {
        let OB = 0;
        for (let GB = 1; GB < BB.length; GB++) OB += BB[GB].subtract(BB[GB - 1]).length();
        return OB
      }
    }
  },
  39358: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(39366);
    const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(OB) : null;
    class QB {
      static DeepCopy(BB, OB, GB, QB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jB = function(BB) {
          const OB = [];
          do {
            const GB = Object.getOwnPropertyNames(BB);
            for (const BB of GB) - 1 === OB.indexOf(BB) && OB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return OB
        }(BB);
        for (const JB of jB) {
          if ("_" === JB[0] && (!QB || -1 === QB.indexOf(JB))) continue;
          if (JB.endsWith("Observable")) continue;
          if (GB && -1 !== GB.indexOf(JB)) continue;
          const jB = BB[JB],
            MB = typeof jB;
          if ("function" !== MB) try {
            if ("object" === MB)
              if (jB instanceof Uint8Array) OB[JB] = Uint8Array.from(jB);
              else if (jB instanceof Array) {
              if (OB[JB] = [], jB.length > 0)
                if ("object" == typeof jB[0])
                  for (let BB = 0; BB < jB.length; BB++) {
                    const GB = DB(jB[BB], OB, oB); - 1 === OB[JB].indexOf(GB) && OB[JB].push(GB)
                  } else OB[JB] = jB.slice(0)
            } else OB[JB] = DB(jB, OB, oB);
            else OB[JB] = jB
          } catch (yB) {
            YB.b.Warn(yB.message)
          }
        }
      }
    }
  },
  39366: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static _CheckLimit(BB, OB) {
        let GB = YB._LogLimitOutputs[BB];
        return GB ? GB.current++ : (GB = {
          limit: OB,
          current: 1
        }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
      }
      static _GenerateLimitMessage(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GB = YB._LogLimitOutputs[BB];
        if (!GB || !YB.MessageLimitReached) return;
        const DB = this._Levels[OB];
        GB.current === GB.limit && YB[DB.name](YB.MessageLimitReached.replace(/%LIMIT%/g, "" + GB.limit).replace(/%TYPE%/g, DB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        YB._LogCache = BB + YB._LogCache, YB.OnNewCacheEntry && YB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const OB = BB => BB < 10 ? "0" + BB : "" + BB,
          GB = new Date;
        return "[" + OB(GB.getHours()) + ":" + OB(GB.getMinutes()) + ":" + OB(GB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, OB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const DB = Array.isArray(OB) ? OB[0] : OB;
        if (void 0 !== GB && !YB._CheckLimit(DB, GB)) return;
        const QB = YB._FormatMessage(DB),
          oB = this._Levels[BB],
          jB = Array.isArray(OB) ? OB.slice(1) : [];
        oB.logFunc && oB.logFunc("BJS - " + QB, ...jB);
        const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
        YB._AddLogEntry(yB), YB._GenerateLimitMessage(DB, BB)
      }
      static get LogCache() {
        return YB._LogCache
      }
      static ClearLogCache() {
        YB._LogCache = "", YB._LogLimitOutputs = {}, YB.errorsCount = 0
      }
      static set LogLevels(BB) {
        YB.Log = YB._LogDisabled, YB.Warn = YB._LogDisabled, YB.Error = YB._LogDisabled;
        const OB = [YB.MessageLogLevel, YB.WarningLogLevel, YB.ErrorLogLevel];
        for (const GB of OB)
          if ((BB & GB) === GB) {
            const BB = this._Levels[GB];
            YB[BB.name] = YB._LogEnabled.bind(YB, GB)
          }
      }
    }
    YB.NoneLogLevel = 0, YB.MessageLogLevel = 1, YB.WarningLogLevel = 2, YB.ErrorLogLevel = 4, YB.AllLogLevel = 7, YB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", YB._LogCache = "", YB._LogLimitOutputs = {}, YB._Levels = [{}, {
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
    }], YB.errorsCount = 0, YB.Log = YB._LogEnabled.bind(YB, YB.MessageLogLevel), YB.Warn = YB._LogEnabled.bind(YB, YB.WarningLogLevel), YB.Error = YB._LogEnabled.bind(YB, YB.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);