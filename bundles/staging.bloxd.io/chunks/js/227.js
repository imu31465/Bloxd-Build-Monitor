export const id = 227;
export const ids = [227];
export const modules = {
  36502: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(36505);
    class Wz {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Wz.Instances = [], Wz.OnEnginesDisposedObservable = new Fz.c, Wz._LastCreatedScene = null, Wz.UseFallbackTexture = !0, Wz.FallbackTexture = ""
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
  37333: (zz, tz, sz) => {
    function Fz() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const tz = 16 * Math.random() | 0;
        return ("x" === zz ? tz : 3 & tz | 8).toString(16)
      }))
    }
    sz.d(tz, {
      d: () => Fz
    })
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
  },
  36505: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Oz
    });
    const Fz = "undefined" !== typeof WeakRef;
    class Wz {
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(zz, tz, sz, Fz)
      }
      initialize(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = zz, this.skipNextObservers = tz, this.target = sz, this.currentTarget = Fz, this
      }
    }
    class Xz {
      constructor(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = zz, this.mask = tz, this.scope = sz, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(zz)
      }
    }
    class Oz {
      static FromPromise(zz, tz) {
        const sz = new Oz;
        return zz.then((zz => {
          sz.notifyObservers(zz)
        })).catch((zz => {
          if (!tz) throw zz;
          tz.notifyObservers(zz)
        })), sz
      }
      get observers() {
        return this._observers
      }
      constructor(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = tz, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Wz(0), zz && (this._onObserverAdded = zz)
      }
      add(zz) {
        let tz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          sz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!zz) return null;
        const Wz = new Xz(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Wz.unregisterOnNextCall = sz, tz ? this._observers.unshift(Wz) : this._observers.push(Wz), this._onObserverAdded && this._onObserverAdded(Wz), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Wz, this._lastNotifiedValue);
        const Oz = Fz ? new WeakRef(this) : {
          deref: () => this
        };
        return Wz._remove = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const tz = Oz.deref();
          tz && (zz ? tz.remove(Wz) : tz._remove(Wz))
        }, Wz
      }
      addOnce(zz) {
        return this.add(zz, void 0, void 0, void 0, !0)
      }
      remove(zz) {
        if (!zz) return !1;
        zz._remove = null;
        return -1 !== this._observers.indexOf(zz) && (this._deferUnregister(zz), !0)
      }
      removeCallback(zz, tz) {
        for (let sz = 0; sz < this._observers.length; sz++) {
          const Fz = this._observers[sz];
          if (!Fz._willBeUnregistered && (Fz.callback === zz && (!tz || tz === Fz.scope))) return this._deferUnregister(Fz), !0
        }
        return !1
      }
      _deferUnregister(zz) {
        zz._willBeUnregistered || (this._numObserversMarkedAsDeleted++, zz.unregisterOnNextCall = !1, zz._willBeUnregistered = !0, setTimeout((() => {
          this._remove(zz)
        }), 0))
      }
      _remove(zz) {
        let tz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!zz) return !1;
        const sz = this._observers.indexOf(zz);
        return -1 !== sz && (tz && this._numObserversMarkedAsDeleted--, this._observers.splice(sz, 1), !0)
      }
      makeObserverTopPriority(zz) {
        this._remove(zz, !1), this._observers.unshift(zz)
      }
      makeObserverBottomPriority(zz) {
        this._remove(zz, !1), this._observers.push(zz)
      }
      notifyObservers(zz) {
        let tz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sz = arguments.length > 2 ? arguments[2] : void 0,
          Fz = arguments.length > 3 ? arguments[3] : void 0,
          Wz = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zz), !this._observers.length) return !0;
        const Xz = this._eventState;
        Xz.mask = tz, Xz.target = sz, Xz.currentTarget = Fz, Xz.skipNextObservers = !1, Xz.lastReturnValue = zz, Xz.userInfo = Wz;
        for (const Oz of this._observers)
          if (!Oz._willBeUnregistered && (Oz.mask & tz && (Oz.unregisterOnNextCall && this._deferUnregister(Oz), Oz.scope ? Xz.lastReturnValue = Oz.callback.apply(Oz.scope, [zz, Xz]) : Xz.lastReturnValue = Oz.callback(zz, Xz)), Xz.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(zz, tz) {
        let sz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = tz), zz._willBeUnregistered) return;
        const Fz = this._eventState;
        Fz.mask = sz, Fz.skipNextObservers = !1, zz.unregisterOnNextCall && this._deferUnregister(zz), zz.callback(tz, Fz)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const zz = this._observers.pop();
          zz && (zz._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const zz = new Oz;
        return zz._observers = this._observers.slice(0), zz
      }
      hasSpecificMask() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const tz of this._observers)
          if (tz.mask & zz || tz.mask === zz) return !0;
        return !1
      }
    }
  },
  60294: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      AsyncLoop: () => Fz.e,
      RegisterTools: () => Fz.h,
      Tools: () => Fz.j,
      className: () => Fz.l
    });
    var Fz = sz(39264);
    (0, Fz.h)()
  },
  36518: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Xz,
      g: () => Wz
    });
    const Fz = {};

    function Wz(zz, tz) {
      Fz[zz] = tz
    }

    function Xz(zz) {
      return Fz[zz]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);