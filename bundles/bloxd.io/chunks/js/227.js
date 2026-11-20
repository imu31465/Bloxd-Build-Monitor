export const id = 227;
export const ids = [227];
export const modules = {
  36851: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Ku
    });
    var Eu = yu(36858);
    class Ku {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Ku.Instances = [], Ku.OnEnginesDisposedObservable = new Eu.b, Ku._LastCreatedScene = null, Ku.UseFallbackTexture = !0, Ku.FallbackTexture = ""
  },
  38444: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(38448);
    const Ku = (uu, Ru, yu) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : yu && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Ru) : null;
    class Qu {
      static DeepCopy(uu, Ru, yu, Qu) {
        let mu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ju = function(uu) {
          const Ru = [];
          do {
            const yu = Object.getOwnPropertyNames(uu);
            for (const uu of yu) - 1 === Ru.indexOf(uu) && Ru.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Ru
        }(uu);
        for (const Xu of Ju) {
          if ("_" === Xu[0] && (!Qu || -1 === Qu.indexOf(Xu))) continue;
          if (Xu.endsWith("Observable")) continue;
          if (yu && -1 !== yu.indexOf(Xu)) continue;
          const Ju = uu[Xu],
            Vu = typeof Ju;
          if ("function" !== Vu) try {
            if ("object" === Vu)
              if (Ju instanceof Uint8Array) Ru[Xu] = Uint8Array.from(Ju);
              else if (Ju instanceof Array) {
              if (Ru[Xu] = [], Ju.length > 0)
                if ("object" == typeof Ju[0])
                  for (let uu = 0; uu < Ju.length; uu++) {
                    const yu = Ku(Ju[uu], Ru, mu); - 1 === Ru[Xu].indexOf(yu) && Ru[Xu].push(yu)
                  } else Ru[Xu] = Ju.slice(0)
            } else Ru[Xu] = Ku(Ju, Ru, mu);
            else Ru[Xu] = Ju
          } catch (Nu) {
            Eu.e.Warn(Nu.message)
          }
        }
      }
    }
  },
  37665: (uu, Ru, yu) => {
    function Eu() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Ru = 16 * Math.random() | 0;
        return ("x" === uu ? Ru : 3 & Ru | 8).toString(16)
      }))
    }
    yu.d(Ru, {
      b: () => Eu
    })
  },
  38448: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static _CheckLimit(uu, Ru) {
        let yu = Eu._LogLimitOutputs[uu];
        return yu ? yu.current++ : (yu = {
          limit: Ru,
          current: 1
        }, Eu._LogLimitOutputs[uu] = yu), yu.current <= yu.limit
      }
      static _GenerateLimitMessage(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const yu = Eu._LogLimitOutputs[uu];
        if (!yu || !Eu.MessageLimitReached) return;
        const Ku = this._Levels[Ru];
        yu.current === yu.limit && Eu[Ku.name](Eu.MessageLimitReached.replace(/%LIMIT%/g, "" + yu.limit).replace(/%TYPE%/g, Ku.name ?? ""))
      }
      static _AddLogEntry(uu) {
        Eu._LogCache = uu + Eu._LogCache, Eu.OnNewCacheEntry && Eu.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Ru = uu => uu < 10 ? "0" + uu : "" + uu,
          yu = new Date;
        return "[" + Ru(yu.getHours()) + ":" + Ru(yu.getMinutes()) + ":" + Ru(yu.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Ru) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Ku = Array.isArray(Ru) ? Ru[0] : Ru;
        if (void 0 !== yu && !Eu._CheckLimit(Ku, yu)) return;
        const Qu = Eu._FormatMessage(Ku),
          mu = this._Levels[uu],
          Ju = Array.isArray(Ru) ? Ru.slice(1) : [];
        mu.logFunc && mu.logFunc("BJS - " + Qu, ...Ju);
        const Nu = `<div style='color:${mu.color}'>${Qu}</div><br>`;
        Eu._AddLogEntry(Nu), Eu._GenerateLimitMessage(Ku, uu)
      }
      static get LogCache() {
        return Eu._LogCache
      }
      static ClearLogCache() {
        Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu.errorsCount = 0
      }
      static set LogLevels(uu) {
        Eu.Log = Eu._LogDisabled, Eu.Warn = Eu._LogDisabled, Eu.Error = Eu._LogDisabled;
        const Ru = [Eu.MessageLogLevel, Eu.WarningLogLevel, Eu.ErrorLogLevel];
        for (const yu of Ru)
          if ((uu & yu) === yu) {
            const uu = this._Levels[yu];
            Eu[uu.name] = Eu._LogEnabled.bind(Eu, yu)
          }
      }
    }
    Eu.NoneLogLevel = 0, Eu.MessageLogLevel = 1, Eu.WarningLogLevel = 2, Eu.ErrorLogLevel = 4, Eu.AllLogLevel = 7, Eu.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu._Levels = [{}, {
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
    }], Eu.errorsCount = 0, Eu.Log = Eu._LogEnabled.bind(Eu, Eu.MessageLogLevel), Eu.Warn = Eu._LogEnabled.bind(Eu, Eu.WarningLogLevel), Eu.Error = Eu._LogEnabled.bind(Eu, Eu.ErrorLogLevel)
  },
  36858: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => mu
    });
    const Eu = "undefined" !== typeof WeakRef;
    class Ku {
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(uu, Ru, yu, Eu)
      }
      initialize(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = uu, this.skipNextObservers = Ru, this.target = yu, this.currentTarget = Eu, this
      }
    }
    class Qu {
      constructor(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = uu, this.mask = Ru, this.scope = yu, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(uu)
      }
    }
    class mu {
      static FromPromise(uu, Ru) {
        const yu = new mu;
        return uu.then((uu => {
          yu.notifyObservers(uu)
        })).catch((uu => {
          if (!Ru) throw uu;
          Ru.notifyObservers(uu)
        })), yu
      }
      get observers() {
        return this._observers
      }
      constructor(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Ru, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Ku(0), uu && (this._onObserverAdded = uu)
      }
      add(uu) {
        let Ru = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          yu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!uu) return null;
        const Ku = new Qu(uu, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Ku.unregisterOnNextCall = yu, Ru ? this._observers.unshift(Ku) : this._observers.push(Ku), this._onObserverAdded && this._onObserverAdded(Ku), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Ku, this._lastNotifiedValue);
        const mu = Eu ? new WeakRef(this) : {
          deref: () => this
        };
        return Ku._remove = function() {
          let uu = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Ru = mu.deref();
          Ru && (uu ? Ru.remove(Ku) : Ru._remove(Ku))
        }, Ku
      }
      addOnce(uu) {
        return this.add(uu, void 0, void 0, void 0, !0)
      }
      remove(uu) {
        if (!uu) return !1;
        uu._remove = null;
        return -1 !== this._observers.indexOf(uu) && (this._deferUnregister(uu), !0)
      }
      removeCallback(uu, Ru) {
        for (let yu = 0; yu < this._observers.length; yu++) {
          const Eu = this._observers[yu];
          if (!Eu._willBeUnregistered && (Eu.callback === uu && (!Ru || Ru === Eu.scope))) return this._deferUnregister(Eu), !0
        }
        return !1
      }
      _deferUnregister(uu) {
        uu._willBeUnregistered || (this._numObserversMarkedAsDeleted++, uu.unregisterOnNextCall = !1, uu._willBeUnregistered = !0, setTimeout((() => {
          this._remove(uu)
        }), 0))
      }
      _remove(uu) {
        let Ru = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!uu) return !1;
        const yu = this._observers.indexOf(uu);
        return -1 !== yu && (Ru && this._numObserversMarkedAsDeleted--, this._observers.splice(yu, 1), !0)
      }
      makeObserverTopPriority(uu) {
        this._remove(uu, !1), this._observers.unshift(uu)
      }
      makeObserverBottomPriority(uu) {
        this._remove(uu, !1), this._observers.push(uu)
      }
      notifyObservers(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          yu = arguments.length > 2 ? arguments[2] : void 0,
          Eu = arguments.length > 3 ? arguments[3] : void 0,
          Ku = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = uu), !this._observers.length) return !0;
        const Qu = this._eventState;
        Qu.mask = Ru, Qu.target = yu, Qu.currentTarget = Eu, Qu.skipNextObservers = !1, Qu.lastReturnValue = uu, Qu.userInfo = Ku;
        for (const mu of this._observers)
          if (!mu._willBeUnregistered && (mu.mask & Ru && (mu.unregisterOnNextCall && this._deferUnregister(mu), mu.scope ? Qu.lastReturnValue = mu.callback.apply(mu.scope, [uu, Qu]) : Qu.lastReturnValue = mu.callback(uu, Qu)), Qu.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(uu, Ru) {
        let yu = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Ru), uu._willBeUnregistered) return;
        const Eu = this._eventState;
        Eu.mask = yu, Eu.skipNextObservers = !1, uu.unregisterOnNextCall && this._deferUnregister(uu), uu.callback(Ru, Eu)
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
        const uu = new mu;
        return uu._observers = this._observers.slice(0), uu
      }
      hasSpecificMask() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Ru of this._observers)
          if (Ru.mask & uu || Ru.mask === uu) return !0;
        return !1
      }
    }
  },
  60982: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      AsyncLoop: () => Eu.d,
      RegisterTools: () => Eu.g,
      Tools: () => Eu.i,
      className: () => Eu.j
    });
    var Eu = yu(39655);
    (0, Eu.g)()
  },
  36871: (uu, Ru, yu) => {
    yu.d(Ru, {
      b: () => Qu,
      c: () => Ku
    });
    const Eu = {};

    function Ku(uu, Ru) {
      Eu[uu] = Ru
    }

    function Qu(uu) {
      return Eu[uu]
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);