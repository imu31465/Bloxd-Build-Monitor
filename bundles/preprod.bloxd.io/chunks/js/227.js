export const id = 227;
export const ids = [227];
export const modules = {
  36543: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => nz
    });
    var Ez = bz(36547);
    class nz {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    nz.Instances = [], nz.OnEnginesDisposedObservable = new Ez.b, nz._LastCreatedScene = null, nz.UseFallbackTexture = !0, nz.FallbackTexture = ""
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
  37335: (zz, uz, bz) => {
    function Ez() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const uz = 16 * Math.random() | 0;
        return ("x" === zz ? uz : 3 & uz | 8).toString(16)
      }))
    }
    bz.d(uz, {
      c: () => Ez
    })
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
  },
  36547: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => lz
    });
    const Ez = "undefined" !== typeof WeakRef;
    class nz {
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(zz, uz, bz, Ez)
      }
      initialize(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = zz, this.skipNextObservers = uz, this.target = bz, this.currentTarget = Ez, this
      }
    }
    class iz {
      constructor(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = zz, this.mask = uz, this.scope = bz, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(zz)
      }
    }
    class lz {
      static FromPromise(zz, uz) {
        const bz = new lz;
        return zz.then((zz => {
          bz.notifyObservers(zz)
        })).catch((zz => {
          if (!uz) throw zz;
          uz.notifyObservers(zz)
        })), bz
      }
      get observers() {
        return this._observers
      }
      constructor(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = uz, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new nz(0), zz && (this._onObserverAdded = zz)
      }
      add(zz) {
        let uz = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          bz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!zz) return null;
        const nz = new iz(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        nz.unregisterOnNextCall = bz, uz ? this._observers.unshift(nz) : this._observers.push(nz), this._onObserverAdded && this._onObserverAdded(nz), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(nz, this._lastNotifiedValue);
        const lz = Ez ? new WeakRef(this) : {
          deref: () => this
        };
        return nz._remove = function() {
          let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const uz = lz.deref();
          uz && (zz ? uz.remove(nz) : uz._remove(nz))
        }, nz
      }
      addOnce(zz) {
        return this.add(zz, void 0, void 0, void 0, !0)
      }
      remove(zz) {
        if (!zz) return !1;
        zz._remove = null;
        return -1 !== this._observers.indexOf(zz) && (this._deferUnregister(zz), !0)
      }
      removeCallback(zz, uz) {
        for (let bz = 0; bz < this._observers.length; bz++) {
          const Ez = this._observers[bz];
          if (!Ez._willBeUnregistered && (Ez.callback === zz && (!uz || uz === Ez.scope))) return this._deferUnregister(Ez), !0
        }
        return !1
      }
      _deferUnregister(zz) {
        zz._willBeUnregistered || (this._numObserversMarkedAsDeleted++, zz.unregisterOnNextCall = !1, zz._willBeUnregistered = !0, setTimeout((() => {
          this._remove(zz)
        }), 0))
      }
      _remove(zz) {
        let uz = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!zz) return !1;
        const bz = this._observers.indexOf(zz);
        return -1 !== bz && (uz && this._numObserversMarkedAsDeleted--, this._observers.splice(bz, 1), !0)
      }
      makeObserverTopPriority(zz) {
        this._remove(zz, !1), this._observers.unshift(zz)
      }
      makeObserverBottomPriority(zz) {
        this._remove(zz, !1), this._observers.push(zz)
      }
      notifyObservers(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          bz = arguments.length > 2 ? arguments[2] : void 0,
          Ez = arguments.length > 3 ? arguments[3] : void 0,
          nz = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zz), !this._observers.length) return !0;
        const iz = this._eventState;
        iz.mask = uz, iz.target = bz, iz.currentTarget = Ez, iz.skipNextObservers = !1, iz.lastReturnValue = zz, iz.userInfo = nz;
        for (const lz of this._observers)
          if (!lz._willBeUnregistered && (lz.mask & uz && (lz.unregisterOnNextCall && this._deferUnregister(lz), lz.scope ? iz.lastReturnValue = lz.callback.apply(lz.scope, [zz, iz]) : iz.lastReturnValue = lz.callback(zz, iz)), iz.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(zz, uz) {
        let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = uz), zz._willBeUnregistered) return;
        const Ez = this._eventState;
        Ez.mask = bz, Ez.skipNextObservers = !1, zz.unregisterOnNextCall && this._deferUnregister(zz), zz.callback(uz, Ez)
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
        const zz = new lz;
        return zz._observers = this._observers.slice(0), zz
      }
      hasSpecificMask() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const uz of this._observers)
          if (uz.mask & zz || uz.mask === zz) return !0;
        return !1
      }
    }
  },
  60309: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      AsyncLoop: () => Ez.e,
      RegisterTools: () => Ez.g,
      Tools: () => Ez.h,
      className: () => Ez.k
    });
    var Ez = bz(39258);
    (0, Ez.g)()
  },
  36564: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz,
      c: () => nz
    });
    const Ez = {};

    function nz(zz, uz) {
      Ez[zz] = uz
    }

    function iz(zz) {
      return Ez[zz]
    }
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);