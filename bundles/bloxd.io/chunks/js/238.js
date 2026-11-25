export const id = 238;
export const ids = [238];
export const modules = {
  37506: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Uu
    });
    var su = ju(37514);
    class Uu {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Uu.Instances = [], Uu.OnEnginesDisposedObservable = new su.d, Uu._LastCreatedScene = null, Uu.UseFallbackTexture = !0, Uu.FallbackTexture = ""
  },
  39030: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(39032);
    const Uu = (uu, Eu, ju) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : ju && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Eu) : null;
    class Zu {
      static DeepCopy(uu, Eu, ju, Zu) {
        let Xu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lu = function(uu) {
          const Eu = [];
          do {
            const ju = Object.getOwnPropertyNames(uu);
            for (const uu of ju) - 1 === Eu.indexOf(uu) && Eu.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Eu
        }(uu);
        for (const fu of lu) {
          if ("_" === fu[0] && (!Zu || -1 === Zu.indexOf(fu))) continue;
          if (fu.endsWith("Observable")) continue;
          if (ju && -1 !== ju.indexOf(fu)) continue;
          const lu = uu[fu],
            Cu = typeof lu;
          if ("function" !== Cu) try {
            if ("object" === Cu)
              if (lu instanceof Uint8Array) Eu[fu] = Uint8Array.from(lu);
              else if (lu instanceof Array) {
              if (Eu[fu] = [], lu.length > 0)
                if ("object" == typeof lu[0])
                  for (let uu = 0; uu < lu.length; uu++) {
                    const ju = Uu(lu[uu], Eu, Xu); - 1 === Eu[fu].indexOf(ju) && Eu[fu].push(ju)
                  } else Eu[fu] = lu.slice(0)
            } else Eu[fu] = Uu(lu, Eu, Xu);
            else Eu[fu] = lu
          } catch (qu) {
            su.b.Warn(qu.message)
          }
        }
      }
    }
  },
  38303: (uu, Eu, ju) => {
    function su() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Eu = 16 * Math.random() | 0;
        return ("x" === uu ? Eu : 3 & Eu | 8).toString(16)
      }))
    }
    ju.d(Eu, {
      e: () => su
    })
  },
  39032: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static _CheckLimit(uu, Eu) {
        let ju = su._LogLimitOutputs[uu];
        return ju ? ju.current++ : (ju = {
          limit: Eu,
          current: 1
        }, su._LogLimitOutputs[uu] = ju), ju.current <= ju.limit
      }
      static _GenerateLimitMessage(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ju = su._LogLimitOutputs[uu];
        if (!ju || !su.MessageLimitReached) return;
        const Uu = this._Levels[Eu];
        ju.current === ju.limit && su[Uu.name](su.MessageLimitReached.replace(/%LIMIT%/g, "" + ju.limit).replace(/%TYPE%/g, Uu.name ?? ""))
      }
      static _AddLogEntry(uu) {
        su._LogCache = uu + su._LogCache, su.OnNewCacheEntry && su.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Eu = uu => uu < 10 ? "0" + uu : "" + uu,
          ju = new Date;
        return "[" + Eu(ju.getHours()) + ":" + Eu(ju.getMinutes()) + ":" + Eu(ju.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Eu) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const Uu = Array.isArray(Eu) ? Eu[0] : Eu;
        if (void 0 !== ju && !su._CheckLimit(Uu, ju)) return;
        const Zu = su._FormatMessage(Uu),
          Xu = this._Levels[uu],
          lu = Array.isArray(Eu) ? Eu.slice(1) : [];
        Xu.logFunc && Xu.logFunc("BJS - " + Zu, ...lu);
        const qu = `<div style='color:${Xu.color}'>${Zu}</div><br>`;
        su._AddLogEntry(qu), su._GenerateLimitMessage(Uu, uu)
      }
      static get LogCache() {
        return su._LogCache
      }
      static ClearLogCache() {
        su._LogCache = "", su._LogLimitOutputs = {}, su.errorsCount = 0
      }
      static set LogLevels(uu) {
        su.Log = su._LogDisabled, su.Warn = su._LogDisabled, su.Error = su._LogDisabled;
        const Eu = [su.MessageLogLevel, su.WarningLogLevel, su.ErrorLogLevel];
        for (const ju of Eu)
          if ((uu & ju) === ju) {
            const uu = this._Levels[ju];
            su[uu.name] = su._LogEnabled.bind(su, ju)
          }
      }
    }
    su.NoneLogLevel = 0, su.MessageLogLevel = 1, su.WarningLogLevel = 2, su.ErrorLogLevel = 4, su.AllLogLevel = 7, su.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", su._LogCache = "", su._LogLimitOutputs = {}, su._Levels = [{}, {
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
    }], su.errorsCount = 0, su.Log = su._LogEnabled.bind(su, su.MessageLogLevel), su.Warn = su._LogEnabled.bind(su, su.WarningLogLevel), su.Error = su._LogEnabled.bind(su, su.ErrorLogLevel)
  },
  37514: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Xu
    });
    const su = "undefined" !== typeof WeakRef;
    class Uu {
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(uu, Eu, ju, su)
      }
      initialize(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = uu, this.skipNextObservers = Eu, this.target = ju, this.currentTarget = su, this
      }
    }
    class Zu {
      constructor(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = uu, this.mask = Eu, this.scope = ju, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(uu)
      }
    }
    class Xu {
      static FromPromise(uu, Eu) {
        const ju = new Xu;
        return uu.then((uu => {
          ju.notifyObservers(uu)
        })).catch((uu => {
          if (!Eu) throw uu;
          Eu.notifyObservers(uu)
        })), ju
      }
      get observers() {
        return this._observers
      }
      constructor(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Eu, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Uu(0), uu && (this._onObserverAdded = uu)
      }
      add(uu) {
        let Eu = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ju = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!uu) return null;
        const Uu = new Zu(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Uu.unregisterOnNextCall = ju, Eu ? this._observers.unshift(Uu) : this._observers.push(Uu), this._onObserverAdded && this._onObserverAdded(Uu), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Uu, this._lastNotifiedValue);
        const Xu = su ? new WeakRef(this) : {
          deref: () => this
        };
        return Uu._remove = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Eu = Xu.deref();
          Eu && (uu ? Eu.remove(Uu) : Eu._remove(Uu))
        }, Uu
      }
      addOnce(uu) {
        return this.add(uu, void 0, void 0, void 0, !0)
      }
      remove(uu) {
        if (!uu) return !1;
        uu._remove = null;
        return -1 !== this._observers.indexOf(uu) && (this._deferUnregister(uu), !0)
      }
      removeCallback(uu, Eu) {
        for (let ju = 0; ju < this._observers.length; ju++) {
          const su = this._observers[ju];
          if (!su._willBeUnregistered && (su.callback === uu && (!Eu || Eu === su.scope))) return this._deferUnregister(su), !0
        }
        return !1
      }
      _deferUnregister(uu) {
        uu._willBeUnregistered || (this._numObserversMarkedAsDeleted++, uu.unregisterOnNextCall = !1, uu._willBeUnregistered = !0, setTimeout((() => {
          this._remove(uu)
        }), 0))
      }
      _remove(uu) {
        let Eu = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!uu) return !1;
        const ju = this._observers.indexOf(uu);
        return -1 !== ju && (Eu && this._numObserversMarkedAsDeleted--, this._observers.splice(ju, 1), !0)
      }
      makeObserverTopPriority(uu) {
        this._remove(uu, !1), this._observers.unshift(uu)
      }
      makeObserverBottomPriority(uu) {
        this._remove(uu, !1), this._observers.push(uu)
      }
      notifyObservers(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ju = arguments.length > 2 ? arguments[2] : void 0,
          su = arguments.length > 3 ? arguments[3] : void 0,
          Uu = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = uu), !this._observers.length) return !0;
        const Zu = this._eventState;
        Zu.mask = Eu, Zu.target = ju, Zu.currentTarget = su, Zu.skipNextObservers = !1, Zu.lastReturnValue = uu, Zu.userInfo = Uu;
        for (const Xu of this._observers)
          if (!Xu._willBeUnregistered && (Xu.mask & Eu && (Xu.unregisterOnNextCall && this._deferUnregister(Xu), Xu.scope ? Zu.lastReturnValue = Xu.callback.apply(Xu.scope, [uu, Zu]) : Zu.lastReturnValue = Xu.callback(uu, Zu)), Zu.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(uu, Eu) {
        let ju = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Eu), uu._willBeUnregistered) return;
        const su = this._eventState;
        su.mask = ju, su.skipNextObservers = !1, uu.unregisterOnNextCall && this._deferUnregister(uu), uu.callback(Eu, su)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const uu = this._observers.pop();
          uu && (uu._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const uu = new Xu;
        return uu._observers = this._observers.slice(0), uu
      }
      hasSpecificMask() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Eu of this._observers)
          if (Eu.mask & uu || Eu.mask === uu) return !0;
        return !1
      }
    }
  },
  61478: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      AsyncLoop: () => su.d,
      RegisterTools: () => su.f,
      Tools: () => su.h,
      className: () => su.k
    });
    var su = ju(40356);
    (0, su.f)()
  },
  37532: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu,
      f: () => Uu
    });
    const su = {};

    function Uu(uu, Eu) {
      su[uu] = Eu
    }

    function Zu(uu) {
      return su[uu]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);