export const id = 227;
export const ids = [227];
export const modules = {
  36622: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => pU
    });
    var tU = gU(36624);
    class pU {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    pU.Instances = [], pU.OnEnginesDisposedObservable = new tU.b, pU._LastCreatedScene = null, pU.UseFallbackTexture = !0, pU.FallbackTexture = ""
  },
  38234: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(38236);
    const pU = (UU, RU, gU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : gU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(RU) : null;
    class EU {
      static DeepCopy(UU, RU, gU, EU) {
        let PU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TU = function(UU) {
          const RU = [];
          do {
            const gU = Object.getOwnPropertyNames(UU);
            for (const UU of gU) - 1 === RU.indexOf(UU) && RU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return RU
        }(UU);
        for (const KU of TU) {
          if ("_" === KU[0] && (!EU || -1 === EU.indexOf(KU))) continue;
          if (KU.endsWith("Observable")) continue;
          if (gU && -1 !== gU.indexOf(KU)) continue;
          const TU = UU[KU],
            cU = typeof TU;
          if ("function" !== cU) try {
            if ("object" === cU)
              if (TU instanceof Uint8Array) RU[KU] = Uint8Array.from(TU);
              else if (TU instanceof Array) {
              if (RU[KU] = [], TU.length > 0)
                if ("object" == typeof TU[0])
                  for (let UU = 0; UU < TU.length; UU++) {
                    const gU = pU(TU[UU], RU, PU); - 1 === RU[KU].indexOf(gU) && RU[KU].push(gU)
                  } else RU[KU] = TU.slice(0)
            } else RU[KU] = pU(TU, RU, PU);
            else RU[KU] = TU
          } catch (qU) {
            tU.e.Warn(qU.message)
          }
        }
      }
    }
  },
  37439: (UU, RU, gU) => {
    function tU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const RU = 16 * Math.random() | 0;
        return ("x" === UU ? RU : 3 & RU | 8).toString(16)
      }))
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  38236: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      static _CheckLimit(UU, RU) {
        let gU = tU._LogLimitOutputs[UU];
        return gU ? gU.current++ : (gU = {
          limit: RU,
          current: 1
        }, tU._LogLimitOutputs[UU] = gU), gU.current <= gU.limit
      }
      static _GenerateLimitMessage(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gU = tU._LogLimitOutputs[UU];
        if (!gU || !tU.MessageLimitReached) return;
        const pU = this._Levels[RU];
        gU.current === gU.limit && tU[pU.name](tU.MessageLimitReached.replace(/%LIMIT%/g, "" + gU.limit).replace(/%TYPE%/g, pU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        tU._LogCache = UU + tU._LogCache, tU.OnNewCacheEntry && tU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const RU = UU => UU < 10 ? "0" + UU : "" + UU,
          gU = new Date;
        return "[" + RU(gU.getHours()) + ":" + RU(gU.getMinutes()) + ":" + RU(gU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, RU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const pU = Array.isArray(RU) ? RU[0] : RU;
        if (void 0 !== gU && !tU._CheckLimit(pU, gU)) return;
        const EU = tU._FormatMessage(pU),
          PU = this._Levels[UU],
          TU = Array.isArray(RU) ? RU.slice(1) : [];
        PU.logFunc && PU.logFunc("BJS - " + EU, ...TU);
        const qU = `<div style='color:${PU.color}'>${EU}</div><br>`;
        tU._AddLogEntry(qU), tU._GenerateLimitMessage(pU, UU)
      }
      static get LogCache() {
        return tU._LogCache
      }
      static ClearLogCache() {
        tU._LogCache = "", tU._LogLimitOutputs = {}, tU.errorsCount = 0
      }
      static set LogLevels(UU) {
        tU.Log = tU._LogDisabled, tU.Warn = tU._LogDisabled, tU.Error = tU._LogDisabled;
        const RU = [tU.MessageLogLevel, tU.WarningLogLevel, tU.ErrorLogLevel];
        for (const gU of RU)
          if ((UU & gU) === gU) {
            const UU = this._Levels[gU];
            tU[UU.name] = tU._LogEnabled.bind(tU, gU)
          }
      }
    }
    tU.NoneLogLevel = 0, tU.MessageLogLevel = 1, tU.WarningLogLevel = 2, tU.ErrorLogLevel = 4, tU.AllLogLevel = 7, tU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tU._LogCache = "", tU._LogLimitOutputs = {}, tU._Levels = [{}, {
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
    }], tU.errorsCount = 0, tU.Log = tU._LogEnabled.bind(tU, tU.MessageLogLevel), tU.Warn = tU._LogEnabled.bind(tU, tU.WarningLogLevel), tU.Error = tU._LogEnabled.bind(tU, tU.ErrorLogLevel)
  },
  36624: (UU, RU, gU) => {
    gU.d(RU, {
      b: () => PU
    });
    const tU = "undefined" !== typeof WeakRef;
    class pU {
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(UU, RU, gU, tU)
      }
      initialize(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = UU, this.skipNextObservers = RU, this.target = gU, this.currentTarget = tU, this
      }
    }
    class EU {
      constructor(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = UU, this.mask = RU, this.scope = gU, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(UU)
      }
    }
    class PU {
      static FromPromise(UU, RU) {
        const gU = new PU;
        return UU.then((UU => {
          gU.notifyObservers(UU)
        })).catch((UU => {
          if (!RU) throw UU;
          RU.notifyObservers(UU)
        })), gU
      }
      get observers() {
        return this._observers
      }
      constructor(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = RU, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new pU(0), UU && (this._onObserverAdded = UU)
      }
      add(UU) {
        let RU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          gU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!UU) return null;
        const pU = new EU(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        pU.unregisterOnNextCall = gU, RU ? this._observers.unshift(pU) : this._observers.push(pU), this._onObserverAdded && this._onObserverAdded(pU), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(pU, this._lastNotifiedValue);
        const PU = tU ? new WeakRef(this) : {
          deref: () => this
        };
        return pU._remove = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const RU = PU.deref();
          RU && (UU ? RU.remove(pU) : RU._remove(pU))
        }, pU
      }
      addOnce(UU) {
        return this.add(UU, void 0, void 0, void 0, !0)
      }
      remove(UU) {
        if (!UU) return !1;
        UU._remove = null;
        return -1 !== this._observers.indexOf(UU) && (this._deferUnregister(UU), !0)
      }
      removeCallback(UU, RU) {
        for (let gU = 0; gU < this._observers.length; gU++) {
          const tU = this._observers[gU];
          if (!tU._willBeUnregistered && (tU.callback === UU && (!RU || RU === tU.scope))) return this._deferUnregister(tU), !0
        }
        return !1
      }
      _deferUnregister(UU) {
        UU._willBeUnregistered || (this._numObserversMarkedAsDeleted++, UU.unregisterOnNextCall = !1, UU._willBeUnregistered = !0, setTimeout((() => {
          this._remove(UU)
        }), 0))
      }
      _remove(UU) {
        let RU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!UU) return !1;
        const gU = this._observers.indexOf(UU);
        return -1 !== gU && (RU && this._numObserversMarkedAsDeleted--, this._observers.splice(gU, 1), !0)
      }
      makeObserverTopPriority(UU) {
        this._remove(UU, !1), this._observers.unshift(UU)
      }
      makeObserverBottomPriority(UU) {
        this._remove(UU, !1), this._observers.push(UU)
      }
      notifyObservers(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gU = arguments.length > 2 ? arguments[2] : void 0,
          tU = arguments.length > 3 ? arguments[3] : void 0,
          pU = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = UU), !this._observers.length) return !0;
        const EU = this._eventState;
        EU.mask = RU, EU.target = gU, EU.currentTarget = tU, EU.skipNextObservers = !1, EU.lastReturnValue = UU, EU.userInfo = pU;
        for (const PU of this._observers)
          if (!PU._willBeUnregistered && (PU.mask & RU && (PU.unregisterOnNextCall && this._deferUnregister(PU), PU.scope ? EU.lastReturnValue = PU.callback.apply(PU.scope, [UU, EU]) : EU.lastReturnValue = PU.callback(UU, EU)), EU.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(UU, RU) {
        let gU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = RU), UU._willBeUnregistered) return;
        const tU = this._eventState;
        tU.mask = gU, tU.skipNextObservers = !1, UU.unregisterOnNextCall && this._deferUnregister(UU), UU.callback(RU, tU)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const UU = this._observers.pop();
          UU && (UU._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const UU = new PU;
        return UU._observers = this._observers.slice(0), UU
      }
      hasSpecificMask() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const RU of this._observers)
          if (RU.mask & UU || RU.mask === UU) return !0;
        return !1
      }
    }
  },
  60528: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      AsyncLoop: () => tU.c,
      RegisterTools: () => tU.e,
      Tools: () => tU.g,
      className: () => tU.j
    });
    var tU = gU(39473);
    (0, tU.e)()
  },
  36639: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => EU,
      g: () => pU
    });
    const tU = {};

    function pU(UU, RU) {
      tU[UU] = RU
    }

    function EU(UU) {
      return tU[UU]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);