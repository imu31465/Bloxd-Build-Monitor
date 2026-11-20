export const id = 227;
export const ids = [227];
export const modules = {
  36772: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(36781);
    class tk {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    tk.Instances = [], tk.OnEnginesDisposedObservable = new Rk.e, tk._LastCreatedScene = null, tk.UseFallbackTexture = !0, tk.FallbackTexture = ""
  },
  38318: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(38320);
    const tk = (kk, Fk, Bk) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Bk && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ak {
      static DeepCopy(kk, Fk, Bk, ak) {
        let Xk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bk = function(kk) {
          const Fk = [];
          do {
            const Bk = Object.getOwnPropertyNames(kk);
            for (const kk of Bk) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const dk of bk) {
          if ("_" === dk[0] && (!ak || -1 === ak.indexOf(dk))) continue;
          if (dk.endsWith("Observable")) continue;
          if (Bk && -1 !== Bk.indexOf(dk)) continue;
          const bk = kk[dk],
            sk = typeof bk;
          if ("function" !== sk) try {
            if ("object" === sk)
              if (bk instanceof Uint8Array) Fk[dk] = Uint8Array.from(bk);
              else if (bk instanceof Array) {
              if (Fk[dk] = [], bk.length > 0)
                if ("object" == typeof bk[0])
                  for (let kk = 0; kk < bk.length; kk++) {
                    const Bk = tk(bk[kk], Fk, Xk); - 1 === Fk[dk].indexOf(Bk) && Fk[dk].push(Bk)
                  } else Fk[dk] = bk.slice(0)
            } else Fk[dk] = tk(bk, Fk, Xk);
            else Fk[dk] = bk
          } catch (wk) {
            Rk.b.Warn(wk.message)
          }
        }
      }
    }
  },
  37578: (kk, Fk, Bk) => {
    function Rk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  38320: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    class Rk {
      static _CheckLimit(kk, Fk) {
        let Bk = Rk._LogLimitOutputs[kk];
        return Bk ? Bk.current++ : (Bk = {
          limit: Fk,
          current: 1
        }, Rk._LogLimitOutputs[kk] = Bk), Bk.current <= Bk.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Bk = Rk._LogLimitOutputs[kk];
        if (!Bk || !Rk.MessageLimitReached) return;
        const tk = this._Levels[Fk];
        Bk.current === Bk.limit && Rk[tk.name](Rk.MessageLimitReached.replace(/%LIMIT%/g, "" + Bk.limit).replace(/%TYPE%/g, tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Rk._LogCache = kk + Rk._LogCache, Rk.OnNewCacheEntry && Rk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Bk = new Date;
        return "[" + Fk(Bk.getHours()) + ":" + Fk(Bk.getMinutes()) + ":" + Fk(Bk.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Bk && !Rk._CheckLimit(tk, Bk)) return;
        const ak = Rk._FormatMessage(tk),
          Xk = this._Levels[kk],
          bk = Array.isArray(Fk) ? Fk.slice(1) : [];
        Xk.logFunc && Xk.logFunc("BJS - " + ak, ...bk);
        const wk = `<div style='color:${Xk.color}'>${ak}</div><br>`;
        Rk._AddLogEntry(wk), Rk._GenerateLimitMessage(tk, kk)
      }
      static get LogCache() {
        return Rk._LogCache
      }
      static ClearLogCache() {
        Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Rk.Log = Rk._LogDisabled, Rk.Warn = Rk._LogDisabled, Rk.Error = Rk._LogDisabled;
        const Fk = [Rk.MessageLogLevel, Rk.WarningLogLevel, Rk.ErrorLogLevel];
        for (const Bk of Fk)
          if ((kk & Bk) === Bk) {
            const kk = this._Levels[Bk];
            Rk[kk.name] = Rk._LogEnabled.bind(Rk, Bk)
          }
      }
    }
    Rk.NoneLogLevel = 0, Rk.MessageLogLevel = 1, Rk.WarningLogLevel = 2, Rk.ErrorLogLevel = 4, Rk.AllLogLevel = 7, Rk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk._Levels = [{}, {
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
    }], Rk.errorsCount = 0, Rk.Log = Rk._LogEnabled.bind(Rk, Rk.MessageLogLevel), Rk.Warn = Rk._LogEnabled.bind(Rk, Rk.WarningLogLevel), Rk.Error = Rk._LogEnabled.bind(Rk, Rk.ErrorLogLevel)
  },
  36781: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    const Rk = "undefined" !== typeof WeakRef;
    class tk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(kk, Fk, Bk, Rk)
      }
      initialize(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = kk, this.skipNextObservers = Fk, this.target = Bk, this.currentTarget = Rk, this
      }
    }
    class ak {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = kk, this.mask = Fk, this.scope = Bk, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(kk)
      }
    }
    class Xk {
      static FromPromise(kk, Fk) {
        const Bk = new Xk;
        return kk.then((kk => {
          Bk.notifyObservers(kk)
        })).catch((kk => {
          if (!Fk) throw kk;
          Fk.notifyObservers(kk)
        })), Bk
      }
      get observers() {
        return this._observers
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Fk, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new tk(0), kk && (this._onObserverAdded = kk)
      }
      add(kk) {
        let Fk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!kk) return null;
        const tk = new ak(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        tk.unregisterOnNextCall = Bk, Fk ? this._observers.unshift(tk) : this._observers.push(tk), this._onObserverAdded && this._onObserverAdded(tk), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(tk, this._lastNotifiedValue);
        const Xk = Rk ? new WeakRef(this) : {
          deref: () => this
        };
        return tk._remove = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Fk = Xk.deref();
          Fk && (kk ? Fk.remove(tk) : Fk._remove(tk))
        }, tk
      }
      addOnce(kk) {
        return this.add(kk, void 0, void 0, void 0, !0)
      }
      remove(kk) {
        if (!kk) return !1;
        kk._remove = null;
        return -1 !== this._observers.indexOf(kk) && (this._deferUnregister(kk), !0)
      }
      removeCallback(kk, Fk) {
        for (let Bk = 0; Bk < this._observers.length; Bk++) {
          const Rk = this._observers[Bk];
          if (!Rk._willBeUnregistered && (Rk.callback === kk && (!Fk || Fk === Rk.scope))) return this._deferUnregister(Rk), !0
        }
        return !1
      }
      _deferUnregister(kk) {
        kk._willBeUnregistered || (this._numObserversMarkedAsDeleted++, kk.unregisterOnNextCall = !1, kk._willBeUnregistered = !0, setTimeout((() => {
          this._remove(kk)
        }), 0))
      }
      _remove(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!kk) return !1;
        const Bk = this._observers.indexOf(kk);
        return -1 !== Bk && (Fk && this._numObserversMarkedAsDeleted--, this._observers.splice(Bk, 1), !0)
      }
      makeObserverTopPriority(kk) {
        this._remove(kk, !1), this._observers.unshift(kk)
      }
      makeObserverBottomPriority(kk) {
        this._remove(kk, !1), this._observers.push(kk)
      }
      notifyObservers(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = kk), !this._observers.length) return !0;
        const ak = this._eventState;
        ak.mask = Fk, ak.target = Bk, ak.currentTarget = Rk, ak.skipNextObservers = !1, ak.lastReturnValue = kk, ak.userInfo = tk;
        for (const Xk of this._observers)
          if (!Xk._willBeUnregistered && (Xk.mask & Fk && (Xk.unregisterOnNextCall && this._deferUnregister(Xk), Xk.scope ? ak.lastReturnValue = Xk.callback.apply(Xk.scope, [kk, ak]) : ak.lastReturnValue = Xk.callback(kk, ak)), ak.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Fk), kk._willBeUnregistered) return;
        const Rk = this._eventState;
        Rk.mask = Bk, Rk.skipNextObservers = !1, kk.unregisterOnNextCall && this._deferUnregister(kk), kk.callback(Fk, Rk)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const kk = this._observers.pop();
          kk && (kk._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const kk = new Xk;
        return kk._observers = this._observers.slice(0), kk
      }
      hasSpecificMask() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Fk of this._observers)
          if (Fk.mask & kk || Fk.mask === kk) return !0;
        return !1
      }
    }
  },
  60903: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      AsyncLoop: () => Rk.d,
      RegisterTools: () => Rk.f,
      Tools: () => Rk.h,
      className: () => Rk.k
    });
    var Rk = Bk(39492);
    (0, Rk.f)()
  },
  36798: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => ak,
      d: () => tk
    });
    const Rk = {};

    function tk(kk, Fk) {
      Rk[kk] = Fk
    }

    function ak(kk) {
      return Rk[kk]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);