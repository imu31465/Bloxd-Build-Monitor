export const id = 236;
export const ids = [236];
export const modules = {
  40180: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Oz,
      e: () => Kz,
      g: () => Uz
    });
    var Fz, Wz = sz(36507),
      Xz = sz(36475);
    ! function(zz) {
      zz[zz.CW = 0] = "CW", zz[zz.CCW = 1] = "CCW"
    }(Fz || (Fz = {}));
    class Oz {
      static Interpolate(zz, tz, sz, Fz, Wz) {
        if (0 === zz) return 0;
        const Xz = 1 - 3 * Fz + 3 * tz,
          Oz = 3 * Fz - 6 * tz,
          oz = 3 * tz;
        let vz = zz;
        for (let Uz = 0; Uz < 5; Uz++) {
          const tz = vz * vz;
          vz -= (Xz * (tz * vz) + Oz * tz + oz * vz - zz) * (1 / (3 * Xz * tz + 2 * Oz * vz + oz)), vz = Math.min(1, Math.max(0, vz))
        }
        return 3 * Math.pow(1 - vz, 2) * vz * sz + 3 * (1 - vz) * Math.pow(vz, 2) * Wz + Math.pow(vz, 3)
      }
    }
    class oz {
      constructor(zz) {
        this._radians = zz, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(zz, tz) {
        const sz = tz.subtract(zz),
          Fz = Math.atan2(sz.y, sz.x);
        return new oz(Fz)
      }
      static BetweenTwoVectors(zz, tz) {
        let sz = zz.lengthSquared() * tz.lengthSquared();
        if (0 === sz) return new oz(Math.PI / 2);
        sz = Math.sqrt(sz);
        let Fz = zz.dot(tz) / sz;
        Fz = (0, Wz.Clamp)(Fz, -1, 1);
        const Xz = Math.acos(Fz);
        return new oz(Xz)
      }
      static FromRadians(zz) {
        return new oz(zz)
      }
      static FromDegrees(zz) {
        return new oz(zz * Math.PI / 180)
      }
    }
    class vz {
      constructor(zz, tz, sz) {
        this.startPoint = zz, this.midPoint = tz, this.endPoint = sz;
        const Fz = Math.pow(tz.x, 2) + Math.pow(tz.y, 2),
          Wz = (Math.pow(zz.x, 2) + Math.pow(zz.y, 2) - Fz) / 2,
          Oz = (Fz - Math.pow(sz.x, 2) - Math.pow(sz.y, 2)) / 2,
          vz = (zz.x - tz.x) * (tz.y - sz.y) - (tz.x - sz.x) * (zz.y - tz.y);
        this.centerPoint = new Xz.n((Wz * (tz.y - sz.y) - Oz * (zz.y - tz.y)) / vz, ((zz.x - tz.x) * Oz - (tz.x - sz.x) * Wz) / vz), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = oz.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Uz = this.startAngle.degrees();
        let Kz = oz.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          uz = oz.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Kz - Uz > 180 && (Kz -= 360), Kz - Uz < -180 && (Kz += 360), uz - Kz > 180 && (uz -= 360), uz - Kz < -180 && (uz += 360), this.orientation = Kz - Uz < 0 ? 0 : 1, this.angle = oz.FromDegrees(0 === this.orientation ? Uz - uz : uz - Uz)
      }
    }
    class Uz {
      constructor(zz, tz) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Xz.n(zz, tz))
      }
      addLineTo(zz, tz) {
        if (this.closed) return this;
        const sz = new Xz.n(zz, tz),
          Fz = this._points[this._points.length - 1];
        return this._points.push(sz), this._length += sz.subtract(Fz).length(), this
      }
      addArcTo(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Oz = this._points[this._points.length - 1],
          oz = new Xz.n(zz, tz),
          Uz = new Xz.n(sz, Fz),
          Kz = new vz(Oz, oz, Uz);
        let uz = Kz.angle.radians() / Wz;
        0 === Kz.orientation && (uz *= -1);
        let Nz = Kz.startAngle.radians() + uz;
        for (let Xz = 0; Xz < Wz; Xz++) {
          const zz = Math.cos(Nz) * Kz.radius + Kz.centerPoint.x,
            tz = Math.sin(Nz) * Kz.radius + Kz.centerPoint.y;
          this.addLineTo(zz, tz), Nz += uz
        }
        return this
      }
      addQuadraticCurveTo(zz, tz, sz, Fz) {
        let Wz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Xz = (zz, tz, sz, Fz) => (1 - zz) * (1 - zz) * tz + 2 * zz * (1 - zz) * sz + zz * zz * Fz,
          Oz = this._points[this._points.length - 1];
        for (let oz = 0; oz <= Wz; oz++) {
          const vz = oz / Wz,
            Uz = Xz(vz, Oz.x, zz, sz),
            Kz = Xz(vz, Oz.y, tz, Fz);
          this.addLineTo(Uz, Kz)
        }
        return this
      }
      addBezierCurveTo(zz, tz, sz, Fz, Wz, Xz) {
        let Oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const oz = (zz, tz, sz, Fz, Wz) => (1 - zz) * (1 - zz) * (1 - zz) * tz + 3 * zz * (1 - zz) * (1 - zz) * sz + 3 * zz * zz * (1 - zz) * Fz + zz * zz * zz * Wz,
          vz = this._points[this._points.length - 1];
        for (let Uz = 0; Uz <= Oz; Uz++) {
          const Kz = Uz / Oz,
            uz = oz(Kz, vz.x, zz, sz, Wz),
            Nz = oz(Kz, vz.y, tz, Fz, Xz);
          this.addLineTo(uz, Nz)
        }
        return this
      }
      isPointInside(zz) {
        let tz = !1;
        const sz = this._points.length;
        for (let Fz = sz - 1, Wz = 0; Wz < sz; Fz = Wz++) {
          let sz = this._points[Fz],
            Xz = this._points[Wz],
            Oz = Xz.x - sz.x,
            oz = Xz.y - sz.y;
          if (Math.abs(oz) > Number.EPSILON) {
            if (oz < 0 && (sz = this._points[Wz], Oz = -Oz, Xz = this._points[Fz], oz = -oz), zz.y < sz.y || zz.y > Xz.y) continue;
            if (zz.y === sz.y && zz.x === sz.x) return !0;
            {
              const Fz = oz * (zz.x - sz.x) - Oz * (zz.y - sz.y);
              if (0 === Fz) return !0;
              if (Fz < 0) continue;
              tz = !tz
            }
          } else {
            if (zz.y !== sz.y) continue;
            if (Xz.x <= zz.x && zz.x <= sz.x || sz.x <= zz.x && zz.x <= Xz.x) return !0
          }
        }
        return tz
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let zz = this._length;
        if (this.closed) {
          const tz = this._points[this._points.length - 1];
          zz += this._points[0].subtract(tz).length()
        }
        return zz
      }
      area() {
        const zz = this._points.length;
        let tz = 0;
        for (let sz = zz - 1, Fz = 0; Fz < zz; sz = Fz++) tz += this._points[sz].x * this._points[Fz].y - this._points[Fz].x * this._points[sz].y;
        return .5 * tz
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(zz) {
        if (zz < 0 || zz > 1) return Xz.n.Zero();
        const tz = zz * this.length();
        let sz = 0;
        for (let Fz = 0; Fz < this._points.length; Fz++) {
          const zz = (Fz + 1) % this._points.length,
            Wz = this._points[Fz],
            Oz = this._points[zz].subtract(Wz),
            oz = Oz.length() + sz;
          if (tz >= sz && tz <= oz) {
            const zz = Oz.normalize(),
              Fz = tz - sz;
            return new Xz.n(Wz.x + zz.x * Fz, Wz.y + zz.y * Fz)
          }
          sz = oz
        }
        return Xz.n.Zero()
      }
      static StartingAt(zz, tz) {
        return new Uz(zz, tz)
      }
    }
    class Kz {
      static CreateQuadraticBezier(zz, tz, sz, Fz) {
        Fz = Fz > 2 ? Fz : 3;
        const Wz = [],
          Oz = (zz, tz, sz, Fz) => (1 - zz) * (1 - zz) * tz + 2 * zz * (1 - zz) * sz + zz * zz * Fz;
        for (let oz = 0; oz <= Fz; oz++) Wz.push(new Xz.p(Oz(oz / Fz, zz.x, tz.x, sz.x), Oz(oz / Fz, zz.y, tz.y, sz.y), Oz(oz / Fz, zz.z, tz.z, sz.z)));
        return new Kz(Wz)
      }
      static CreateCubicBezier(zz, tz, sz, Fz, Wz) {
        Wz = Wz > 3 ? Wz : 4;
        const Oz = [],
          oz = (zz, tz, sz, Fz, Wz) => (1 - zz) * (1 - zz) * (1 - zz) * tz + 3 * zz * (1 - zz) * (1 - zz) * sz + 3 * zz * zz * (1 - zz) * Fz + zz * zz * zz * Wz;
        for (let vz = 0; vz <= Wz; vz++) Oz.push(new Xz.p(oz(vz / Wz, zz.x, tz.x, sz.x, Fz.x), oz(vz / Wz, zz.y, tz.y, sz.y, Fz.y), oz(vz / Wz, zz.z, tz.z, sz.z, Fz.z)));
        return new Kz(Oz)
      }
      static CreateHermiteSpline(zz, tz, sz, Fz, Wz) {
        const Oz = [],
          oz = 1 / Wz;
        for (let vz = 0; vz <= Wz; vz++) Oz.push(Xz.p.Hermite(zz, tz, sz, Fz, vz * oz));
        return new Kz(Oz)
      }
      static CreateCatmullRomSpline(zz, tz, sz) {
        const Fz = [],
          Wz = 1 / tz;
        let Oz = 0;
        if (sz) {
          const sz = zz.length;
          for (let oz = 0; oz < sz; oz++) {
            Oz = 0;
            for (let vz = 0; vz < tz; vz++) Fz.push(Xz.p.CatmullRom(zz[oz % sz], zz[(oz + 1) % sz], zz[(oz + 2) % sz], zz[(oz + 3) % sz], Oz)), Oz += Wz
          }
          Fz.push(Fz[0])
        } else {
          const sz = [];
          sz.push(zz[0].clone()), sz.push(...zz), sz.push(zz[zz.length - 1].clone());
          let oz = 0;
          for (; oz < sz.length - 3; oz++) {
            Oz = 0;
            for (let zz = 0; zz < tz; zz++) Fz.push(Xz.p.CatmullRom(sz[oz], sz[oz + 1], sz[oz + 2], sz[oz + 3], Oz)), Oz += Wz
          }
          oz--, Fz.push(Xz.p.CatmullRom(sz[oz], sz[oz + 1], sz[oz + 2], sz[oz + 3], Oz))
        }
        return new Kz(Fz)
      }
      static ArcThru3Points(zz, tz, sz) {
        let Fz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Wz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Oz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const oz = [],
          vz = tz.subtract(zz),
          Uz = sz.subtract(tz),
          uz = zz.subtract(sz),
          Nz = Xz.p.Cross(vz, Uz),
          bz = Nz.length();
        if (bz < Math.pow(10, -8)) return new Kz(oz);
        const wz = vz.lengthSquared(),
          Dz = Uz.lengthSquared(),
          gz = uz.lengthSquared(),
          Hz = Nz.lengthSquared(),
          Bz = .5 * vz.length() * Uz.length() * uz.length() / bz,
          Pz = -.5 * Dz * Xz.p.Dot(vz, uz) / Hz,
          rz = -.5 * gz * Xz.p.Dot(vz, Uz) / Hz,
          Yz = -.5 * wz * Xz.p.Dot(Uz, uz) / Hz,
          xz = zz.scale(Pz).add(tz.scale(rz)).add(sz.scale(Yz)),
          mz = zz.subtract(xz).normalize(),
          Jz = Xz.p.Cross(Nz, mz).normalize();
        if (Oz) {
          const tz = 2 * Math.PI / Fz;
          for (let zz = 0; zz <= 2 * Math.PI; zz += tz) oz.push(xz.add(mz.scale(Bz * Math.cos(zz)).add(Jz.scale(Bz * Math.sin(zz)))));
          oz.push(zz)
        } else {
          const tz = 1 / Fz;
          let Xz, Oz = 0;
          do {
            Xz = xz.add(mz.scale(Bz * Math.cos(Oz)).add(Jz.scale(Bz * Math.sin(Oz)))), oz.push(Xz), Oz += tz
          } while (!Xz.equalsWithEpsilon(sz, Bz * tz * 1.1));
          oz.push(sz), Wz && oz.push(zz)
        }
        return new Kz(oz)
      }
      constructor(zz) {
        this._length = 0, this._points = zz, this._length = this._computeLength(zz)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (zz) {
        const tz = this._points[this._points.length - 1],
          sz = this._points.slice(),
          Fz = zz.getPoints();
        for (let Wz = 1; Wz < Fz.length; Wz++) sz.push(Fz[Wz].subtract(Fz[0]).add(tz));
        return new Kz(sz)
      }
      _computeLength(zz) {
        let tz = 0;
        for (let sz = 1; sz < zz.length; sz++) tz += zz[sz].subtract(zz[sz - 1]).length();
        return tz
      }
    }
  },
  38091: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => Xz
    });
    var Fz = sz(38097);
    const Wz = (zz, tz, sz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : sz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(tz) : null;
    class Xz {
      static DeepCopy(zz, tz, sz, Xz) {
        let Oz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const oz = function(zz) {
          const tz = [];
          do {
            const sz = Object.getOwnPropertyNames(zz);
            for (const zz of sz) - 1 === tz.indexOf(zz) && tz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return tz
        }(zz);
        for (const Uz of oz) {
          if ("_" === Uz[0] && (!Xz || -1 === Xz.indexOf(Uz))) continue;
          if (Uz.endsWith("Observable")) continue;
          if (sz && -1 !== sz.indexOf(Uz)) continue;
          const oz = zz[Uz],
            Kz = typeof oz;
          if ("function" !== Kz) try {
            if ("object" === Kz)
              if (oz instanceof Uint8Array) tz[Uz] = Uint8Array.from(oz);
              else if (oz instanceof Array) {
              if (tz[Uz] = [], oz.length > 0)
                if ("object" == typeof oz[0])
                  for (let zz = 0; zz < oz.length; zz++) {
                    const sz = Wz(oz[zz], tz, Oz); - 1 === tz[Uz].indexOf(sz) && tz[Uz].push(sz)
                  } else tz[Uz] = oz.slice(0)
            } else tz[Uz] = Wz(oz, tz, Oz);
            else tz[Uz] = oz
          } catch (vz) {
            Fz.e.Warn(vz.message)
          }
        }
      }
    }
  },
  38097: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Fz
    });
    class Fz {
      static _CheckLimit(zz, tz) {
        let sz = Fz._LogLimitOutputs[zz];
        return sz ? sz.current++ : (sz = {
          limit: tz,
          current: 1
        }, Fz._LogLimitOutputs[zz] = sz), sz.current <= sz.limit
      }
      static _GenerateLimitMessage(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sz = Fz._LogLimitOutputs[zz];
        if (!sz || !Fz.MessageLimitReached) return;
        const Wz = this._Levels[tz];
        sz.current === sz.limit && Fz[Wz.name](Fz.MessageLimitReached.replace(/%LIMIT%/g, "" + sz.limit).replace(/%TYPE%/g, Wz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Fz._LogCache = zz + Fz._LogCache, Fz.OnNewCacheEntry && Fz.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const tz = zz => zz < 10 ? "0" + zz : "" + zz,
          sz = new Date;
        return "[" + tz(sz.getHours()) + ":" + tz(sz.getMinutes()) + ":" + tz(sz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, tz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          tz = arguments.length > 1 ? arguments[1] : void 0,
          sz = arguments.length > 2 ? arguments[2] : void 0;
        const Wz = Array.isArray(tz) ? tz[0] : tz;
        if (void 0 !== sz && !Fz._CheckLimit(Wz, sz)) return;
        const Xz = Fz._FormatMessage(Wz),
          Oz = this._Levels[zz],
          oz = Array.isArray(tz) ? tz.slice(1) : [];
        Oz.logFunc && Oz.logFunc("BJS - " + Xz, ...oz);
        const vz = `<div style='color:${Oz.color}'>${Xz}</div><br>`;
        Fz._AddLogEntry(vz), Fz._GenerateLimitMessage(Wz, zz)
      }
      static get LogCache() {
        return Fz._LogCache
      }
      static ClearLogCache() {
        Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz.errorsCount = 0
      }
      static set LogLevels(zz) {
        Fz.Log = Fz._LogDisabled, Fz.Warn = Fz._LogDisabled, Fz.Error = Fz._LogDisabled;
        const tz = [Fz.MessageLogLevel, Fz.WarningLogLevel, Fz.ErrorLogLevel];
        for (const sz of tz)
          if ((zz & sz) === sz) {
            const zz = this._Levels[sz];
            Fz[zz.name] = Fz._LogEnabled.bind(Fz, sz)
          }
      }
    }
    Fz.NoneLogLevel = 0, Fz.MessageLogLevel = 1, Fz.WarningLogLevel = 2, Fz.ErrorLogLevel = 4, Fz.AllLogLevel = 7, Fz.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Fz._LogCache = "", Fz._LogLimitOutputs = {}, Fz._Levels = [{}, {
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
    }], Fz.errorsCount = 0, Fz.Log = Fz._LogEnabled.bind(Fz, Fz.MessageLogLevel), Fz.Warn = Fz._LogEnabled.bind(Fz, Fz.WarningLogLevel), Fz.Error = Fz._LogEnabled.bind(Fz, Fz.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);