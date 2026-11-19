export const id = 236;
export const ids = [236];
export const modules = {
  40289: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => lz,
      g: () => Oz,
      i: () => Hz
    });
    var Ez, nz = bz(36553),
      iz = bz(36519);
    ! function(zz) {
      zz[zz.CW = 0] = "CW", zz[zz.CCW = 1] = "CCW"
    }(Ez || (Ez = {}));
    class lz {
      static Interpolate(zz, uz, bz, Ez, nz) {
        if (0 === zz) return 0;
        const iz = 1 - 3 * Ez + 3 * uz,
          lz = 3 * Ez - 6 * uz,
          Mz = 3 * uz;
        let tz = zz;
        for (let Hz = 0; Hz < 5; Hz++) {
          const uz = tz * tz;
          tz -= (iz * (uz * tz) + lz * uz + Mz * tz - zz) * (1 / (3 * iz * uz + 2 * lz * tz + Mz)), tz = Math.min(1, Math.max(0, tz))
        }
        return 3 * Math.pow(1 - tz, 2) * tz * bz + 3 * (1 - tz) * Math.pow(tz, 2) * nz + Math.pow(tz, 3)
      }
    }
    class Mz {
      constructor(zz) {
        this._radians = zz, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(zz, uz) {
        const bz = uz.subtract(zz),
          Ez = Math.atan2(bz.y, bz.x);
        return new Mz(Ez)
      }
      static BetweenTwoVectors(zz, uz) {
        let bz = zz.lengthSquared() * uz.lengthSquared();
        if (0 === bz) return new Mz(Math.PI / 2);
        bz = Math.sqrt(bz);
        let Ez = zz.dot(uz) / bz;
        Ez = (0, nz.Clamp)(Ez, -1, 1);
        const iz = Math.acos(Ez);
        return new Mz(iz)
      }
      static FromRadians(zz) {
        return new Mz(zz)
      }
      static FromDegrees(zz) {
        return new Mz(zz * Math.PI / 180)
      }
    }
    class tz {
      constructor(zz, uz, bz) {
        this.startPoint = zz, this.midPoint = uz, this.endPoint = bz;
        const Ez = Math.pow(uz.x, 2) + Math.pow(uz.y, 2),
          nz = (Math.pow(zz.x, 2) + Math.pow(zz.y, 2) - Ez) / 2,
          lz = (Ez - Math.pow(bz.x, 2) - Math.pow(bz.y, 2)) / 2,
          tz = (zz.x - uz.x) * (uz.y - bz.y) - (uz.x - bz.x) * (zz.y - uz.y);
        this.centerPoint = new iz.m((nz * (uz.y - bz.y) - lz * (zz.y - uz.y)) / tz, ((zz.x - uz.x) * lz - (uz.x - bz.x) * nz) / tz), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Mz.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Hz = this.startAngle.degrees();
        let Oz = Mz.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          pz = Mz.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Oz - Hz > 180 && (Oz -= 360), Oz - Hz < -180 && (Oz += 360), pz - Oz > 180 && (pz -= 360), pz - Oz < -180 && (pz += 360), this.orientation = Oz - Hz < 0 ? 0 : 1, this.angle = Mz.FromDegrees(0 === this.orientation ? Hz - pz : pz - Hz)
      }
    }
    class Hz {
      constructor(zz, uz) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new iz.m(zz, uz))
      }
      addLineTo(zz, uz) {
        if (this.closed) return this;
        const bz = new iz.m(zz, uz),
          Ez = this._points[this._points.length - 1];
        return this._points.push(bz), this._length += bz.subtract(Ez).length(), this
      }
      addArcTo(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const lz = this._points[this._points.length - 1],
          Mz = new iz.m(zz, uz),
          Hz = new iz.m(bz, Ez),
          Oz = new tz(lz, Mz, Hz);
        let pz = Oz.angle.radians() / nz;
        0 === Oz.orientation && (pz *= -1);
        let dz = Oz.startAngle.radians() + pz;
        for (let iz = 0; iz < nz; iz++) {
          const zz = Math.cos(dz) * Oz.radius + Oz.centerPoint.x,
            uz = Math.sin(dz) * Oz.radius + Oz.centerPoint.y;
          this.addLineTo(zz, uz), dz += pz
        }
        return this
      }
      addQuadraticCurveTo(zz, uz, bz, Ez) {
        let nz = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const iz = (zz, uz, bz, Ez) => (1 - zz) * (1 - zz) * uz + 2 * zz * (1 - zz) * bz + zz * zz * Ez,
          lz = this._points[this._points.length - 1];
        for (let Mz = 0; Mz <= nz; Mz++) {
          const tz = Mz / nz,
            Hz = iz(tz, lz.x, zz, bz),
            Oz = iz(tz, lz.y, uz, Ez);
          this.addLineTo(Hz, Oz)
        }
        return this
      }
      addBezierCurveTo(zz, uz, bz, Ez, nz, iz) {
        let lz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Mz = (zz, uz, bz, Ez, nz) => (1 - zz) * (1 - zz) * (1 - zz) * uz + 3 * zz * (1 - zz) * (1 - zz) * bz + 3 * zz * zz * (1 - zz) * Ez + zz * zz * zz * nz,
          tz = this._points[this._points.length - 1];
        for (let Hz = 0; Hz <= lz; Hz++) {
          const Oz = Hz / lz,
            pz = Mz(Oz, tz.x, zz, bz, nz),
            dz = Mz(Oz, tz.y, uz, Ez, iz);
          this.addLineTo(pz, dz)
        }
        return this
      }
      isPointInside(zz) {
        let uz = !1;
        const bz = this._points.length;
        for (let Ez = bz - 1, nz = 0; nz < bz; Ez = nz++) {
          let bz = this._points[Ez],
            iz = this._points[nz],
            lz = iz.x - bz.x,
            Mz = iz.y - bz.y;
          if (Math.abs(Mz) > Number.EPSILON) {
            if (Mz < 0 && (bz = this._points[nz], lz = -lz, iz = this._points[Ez], Mz = -Mz), zz.y < bz.y || zz.y > iz.y) continue;
            if (zz.y === bz.y && zz.x === bz.x) return !0;
            {
              const Ez = Mz * (zz.x - bz.x) - lz * (zz.y - bz.y);
              if (0 === Ez) return !0;
              if (Ez < 0) continue;
              uz = !uz
            }
          } else {
            if (zz.y !== bz.y) continue;
            if (iz.x <= zz.x && zz.x <= bz.x || bz.x <= zz.x && zz.x <= iz.x) return !0
          }
        }
        return uz
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let zz = this._length;
        if (this.closed) {
          const uz = this._points[this._points.length - 1];
          zz += this._points[0].subtract(uz).length()
        }
        return zz
      }
      area() {
        const zz = this._points.length;
        let uz = 0;
        for (let bz = zz - 1, Ez = 0; Ez < zz; bz = Ez++) uz += this._points[bz].x * this._points[Ez].y - this._points[Ez].x * this._points[bz].y;
        return .5 * uz
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(zz) {
        if (zz < 0 || zz > 1) return iz.m.Zero();
        const uz = zz * this.length();
        let bz = 0;
        for (let Ez = 0; Ez < this._points.length; Ez++) {
          const zz = (Ez + 1) % this._points.length,
            nz = this._points[Ez],
            lz = this._points[zz].subtract(nz),
            Mz = lz.length() + bz;
          if (uz >= bz && uz <= Mz) {
            const zz = lz.normalize(),
              Ez = uz - bz;
            return new iz.m(nz.x + zz.x * Ez, nz.y + zz.y * Ez)
          }
          bz = Mz
        }
        return iz.m.Zero()
      }
      static StartingAt(zz, uz) {
        return new Hz(zz, uz)
      }
    }
    class Oz {
      static CreateQuadraticBezier(zz, uz, bz, Ez) {
        Ez = Ez > 2 ? Ez : 3;
        const nz = [],
          lz = (zz, uz, bz, Ez) => (1 - zz) * (1 - zz) * uz + 2 * zz * (1 - zz) * bz + zz * zz * Ez;
        for (let Mz = 0; Mz <= Ez; Mz++) nz.push(new iz.n(lz(Mz / Ez, zz.x, uz.x, bz.x), lz(Mz / Ez, zz.y, uz.y, bz.y), lz(Mz / Ez, zz.z, uz.z, bz.z)));
        return new Oz(nz)
      }
      static CreateCubicBezier(zz, uz, bz, Ez, nz) {
        nz = nz > 3 ? nz : 4;
        const lz = [],
          Mz = (zz, uz, bz, Ez, nz) => (1 - zz) * (1 - zz) * (1 - zz) * uz + 3 * zz * (1 - zz) * (1 - zz) * bz + 3 * zz * zz * (1 - zz) * Ez + zz * zz * zz * nz;
        for (let tz = 0; tz <= nz; tz++) lz.push(new iz.n(Mz(tz / nz, zz.x, uz.x, bz.x, Ez.x), Mz(tz / nz, zz.y, uz.y, bz.y, Ez.y), Mz(tz / nz, zz.z, uz.z, bz.z, Ez.z)));
        return new Oz(lz)
      }
      static CreateHermiteSpline(zz, uz, bz, Ez, nz) {
        const lz = [],
          Mz = 1 / nz;
        for (let tz = 0; tz <= nz; tz++) lz.push(iz.n.Hermite(zz, uz, bz, Ez, tz * Mz));
        return new Oz(lz)
      }
      static CreateCatmullRomSpline(zz, uz, bz) {
        const Ez = [],
          nz = 1 / uz;
        let lz = 0;
        if (bz) {
          const bz = zz.length;
          for (let Mz = 0; Mz < bz; Mz++) {
            lz = 0;
            for (let tz = 0; tz < uz; tz++) Ez.push(iz.n.CatmullRom(zz[Mz % bz], zz[(Mz + 1) % bz], zz[(Mz + 2) % bz], zz[(Mz + 3) % bz], lz)), lz += nz
          }
          Ez.push(Ez[0])
        } else {
          const bz = [];
          bz.push(zz[0].clone()), bz.push(...zz), bz.push(zz[zz.length - 1].clone());
          let Mz = 0;
          for (; Mz < bz.length - 3; Mz++) {
            lz = 0;
            for (let zz = 0; zz < uz; zz++) Ez.push(iz.n.CatmullRom(bz[Mz], bz[Mz + 1], bz[Mz + 2], bz[Mz + 3], lz)), lz += nz
          }
          Mz--, Ez.push(iz.n.CatmullRom(bz[Mz], bz[Mz + 1], bz[Mz + 2], bz[Mz + 3], lz))
        }
        return new Oz(Ez)
      }
      static ArcThru3Points(zz, uz, bz) {
        let Ez = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          nz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lz = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Mz = [],
          tz = uz.subtract(zz),
          Hz = bz.subtract(uz),
          pz = zz.subtract(bz),
          dz = iz.n.Cross(tz, Hz),
          Fz = dz.length();
        if (Fz < Math.pow(10, -8)) return new Oz(Mz);
        const Zz = tz.lengthSquared(),
          Rz = Hz.lengthSquared(),
          Kz = pz.lengthSquared(),
          wz = dz.lengthSquared(),
          Xz = .5 * tz.length() * Hz.length() * pz.length() / Fz,
          fz = -.5 * Rz * iz.n.Dot(tz, pz) / wz,
          sz = -.5 * Kz * iz.n.Dot(tz, Hz) / wz,
          rz = -.5 * Zz * iz.n.Dot(Hz, pz) / wz,
          oz = zz.scale(fz).add(uz.scale(sz)).add(bz.scale(rz)),
          Nz = zz.subtract(oz).normalize(),
          vz = iz.n.Cross(dz, Nz).normalize();
        if (lz) {
          const uz = 2 * Math.PI / Ez;
          for (let zz = 0; zz <= 2 * Math.PI; zz += uz) Mz.push(oz.add(Nz.scale(Xz * Math.cos(zz)).add(vz.scale(Xz * Math.sin(zz)))));
          Mz.push(zz)
        } else {
          const uz = 1 / Ez;
          let iz, lz = 0;
          do {
            iz = oz.add(Nz.scale(Xz * Math.cos(lz)).add(vz.scale(Xz * Math.sin(lz)))), Mz.push(iz), lz += uz
          } while (!iz.equalsWithEpsilon(bz, Xz * uz * 1.1));
          Mz.push(bz), nz && Mz.push(zz)
        }
        return new Oz(Mz)
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
        const uz = this._points[this._points.length - 1],
          bz = this._points.slice(),
          Ez = zz.getPoints();
        for (let nz = 1; nz < Ez.length; nz++) bz.push(Ez[nz].subtract(Ez[0]).add(uz));
        return new Oz(bz)
      }
      _computeLength(zz) {
        let uz = 0;
        for (let bz = 1; bz < zz.length; bz++) uz += zz[bz].subtract(zz[bz - 1]).length();
        return uz
      }
    }
  },
  38054: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(38060);
    const nz = (zz, uz, bz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : bz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(uz) : null;
    class iz {
      static DeepCopy(zz, uz, bz, iz) {
        let lz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Mz = function(zz) {
          const uz = [];
          do {
            const bz = Object.getOwnPropertyNames(zz);
            for (const zz of bz) - 1 === uz.indexOf(zz) && uz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return uz
        }(zz);
        for (const Hz of Mz) {
          if ("_" === Hz[0] && (!iz || -1 === iz.indexOf(Hz))) continue;
          if (Hz.endsWith("Observable")) continue;
          if (bz && -1 !== bz.indexOf(Hz)) continue;
          const Mz = zz[Hz],
            Oz = typeof Mz;
          if ("function" !== Oz) try {
            if ("object" === Oz)
              if (Mz instanceof Uint8Array) uz[Hz] = Uint8Array.from(Mz);
              else if (Mz instanceof Array) {
              if (uz[Hz] = [], Mz.length > 0)
                if ("object" == typeof Mz[0])
                  for (let zz = 0; zz < Mz.length; zz++) {
                    const bz = nz(Mz[zz], uz, lz); - 1 === uz[Hz].indexOf(bz) && uz[Hz].push(bz)
                  } else uz[Hz] = Mz.slice(0)
            } else uz[Hz] = nz(Mz, uz, lz);
            else uz[Hz] = Mz
          } catch (tz) {
            Ez.e.Warn(tz.message)
          }
        }
      }
    }
  },
  38060: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      static _CheckLimit(zz, uz) {
        let bz = Ez._LogLimitOutputs[zz];
        return bz ? bz.current++ : (bz = {
          limit: uz,
          current: 1
        }, Ez._LogLimitOutputs[zz] = bz), bz.current <= bz.limit
      }
      static _GenerateLimitMessage(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const bz = Ez._LogLimitOutputs[zz];
        if (!bz || !Ez.MessageLimitReached) return;
        const nz = this._Levels[uz];
        bz.current === bz.limit && Ez[nz.name](Ez.MessageLimitReached.replace(/%LIMIT%/g, "" + bz.limit).replace(/%TYPE%/g, nz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Ez._LogCache = zz + Ez._LogCache, Ez.OnNewCacheEntry && Ez.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const uz = zz => zz < 10 ? "0" + zz : "" + zz,
          bz = new Date;
        return "[" + uz(bz.getHours()) + ":" + uz(bz.getMinutes()) + ":" + uz(bz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, uz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const nz = Array.isArray(uz) ? uz[0] : uz;
        if (void 0 !== bz && !Ez._CheckLimit(nz, bz)) return;
        const iz = Ez._FormatMessage(nz),
          lz = this._Levels[zz],
          Mz = Array.isArray(uz) ? uz.slice(1) : [];
        lz.logFunc && lz.logFunc("BJS - " + iz, ...Mz);
        const tz = `<div style='color:${lz.color}'>${iz}</div><br>`;
        Ez._AddLogEntry(tz), Ez._GenerateLimitMessage(nz, zz)
      }
      static get LogCache() {
        return Ez._LogCache
      }
      static ClearLogCache() {
        Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez.errorsCount = 0
      }
      static set LogLevels(zz) {
        Ez.Log = Ez._LogDisabled, Ez.Warn = Ez._LogDisabled, Ez.Error = Ez._LogDisabled;
        const uz = [Ez.MessageLogLevel, Ez.WarningLogLevel, Ez.ErrorLogLevel];
        for (const bz of uz)
          if ((zz & bz) === bz) {
            const zz = this._Levels[bz];
            Ez[zz.name] = Ez._LogEnabled.bind(Ez, bz)
          }
      }
    }
    Ez.NoneLogLevel = 0, Ez.MessageLogLevel = 1, Ez.WarningLogLevel = 2, Ez.ErrorLogLevel = 4, Ez.AllLogLevel = 7, Ez.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez._Levels = [{}, {
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
    }], Ez.errorsCount = 0, Ez.Log = Ez._LogEnabled.bind(Ez, Ez.MessageLogLevel), Ez.Warn = Ez._LogEnabled.bind(Ez, Ez.WarningLogLevel), Ez.Error = Ez._LogEnabled.bind(Ez, Ez.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);