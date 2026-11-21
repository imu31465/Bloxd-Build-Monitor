export const id = 228;
export const ids = [228];
export const modules = {
  37277: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd
    });
    var pd = kd(37280);
    class Nd {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Nd.Instances = [], Nd.OnEnginesDisposedObservable = new pd.e, Nd._LastCreatedScene = null, Nd.UseFallbackTexture = !0, Nd.FallbackTexture = ""
  },
  38806: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd
    });
    var pd = kd(38812);
    const Nd = (dd, Jd, kd) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : kd && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Jd) : null;
    class Wd {
      static DeepCopy(dd, Jd, kd, Wd) {
        let Pd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Zd = function(dd) {
          const Jd = [];
          do {
            const kd = Object.getOwnPropertyNames(dd);
            for (const dd of kd) - 1 === Jd.indexOf(dd) && Jd.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Jd
        }(dd);
        for (const Cd of Zd) {
          if ("_" === Cd[0] && (!Wd || -1 === Wd.indexOf(Cd))) continue;
          if (Cd.endsWith("Observable")) continue;
          if (kd && -1 !== kd.indexOf(Cd)) continue;
          const Zd = dd[Cd],
            Kd = typeof Zd;
          if ("function" !== Kd) try {
            if ("object" === Kd)
              if (Zd instanceof Uint8Array) Jd[Cd] = Uint8Array.from(Zd);
              else if (Zd instanceof Array) {
              if (Jd[Cd] = [], Zd.length > 0)
                if ("object" == typeof Zd[0])
                  for (let dd = 0; dd < Zd.length; dd++) {
                    const kd = Nd(Zd[dd], Jd, Pd); - 1 === Jd[Cd].indexOf(kd) && Jd[Cd].push(kd)
                  } else Jd[Cd] = Zd.slice(0)
            } else Jd[Cd] = Nd(Zd, Jd, Pd);
            else Jd[Cd] = Zd
          } catch (gd) {
            pd.c.Warn(gd.message)
          }
        }
      }
    }
  },
  38105: (dd, Jd, kd) => {
    function pd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Jd = 16 * Math.random() | 0;
        return ("x" === dd ? Jd : 3 & Jd | 8).toString(16)
      }))
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  38812: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static _CheckLimit(dd, Jd) {
        let kd = pd._LogLimitOutputs[dd];
        return kd ? kd.current++ : (kd = {
          limit: Jd,
          current: 1
        }, pd._LogLimitOutputs[dd] = kd), kd.current <= kd.limit
      }
      static _GenerateLimitMessage(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const kd = pd._LogLimitOutputs[dd];
        if (!kd || !pd.MessageLimitReached) return;
        const Nd = this._Levels[Jd];
        kd.current === kd.limit && pd[Nd.name](pd.MessageLimitReached.replace(/%LIMIT%/g, "" + kd.limit).replace(/%TYPE%/g, Nd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        pd._LogCache = dd + pd._LogCache, pd.OnNewCacheEntry && pd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Jd = dd => dd < 10 ? "0" + dd : "" + dd,
          kd = new Date;
        return "[" + Jd(kd.getHours()) + ":" + Jd(kd.getMinutes()) + ":" + Jd(kd.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Jd) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const Nd = Array.isArray(Jd) ? Jd[0] : Jd;
        if (void 0 !== kd && !pd._CheckLimit(Nd, kd)) return;
        const Wd = pd._FormatMessage(Nd),
          Pd = this._Levels[dd],
          Zd = Array.isArray(Jd) ? Jd.slice(1) : [];
        Pd.logFunc && Pd.logFunc("BJS - " + Wd, ...Zd);
        const gd = `<div style='color:${Pd.color}'>${Wd}</div><br>`;
        pd._AddLogEntry(gd), pd._GenerateLimitMessage(Nd, dd)
      }
      static get LogCache() {
        return pd._LogCache
      }
      static ClearLogCache() {
        pd._LogCache = "", pd._LogLimitOutputs = {}, pd.errorsCount = 0
      }
      static set LogLevels(dd) {
        pd.Log = pd._LogDisabled, pd.Warn = pd._LogDisabled, pd.Error = pd._LogDisabled;
        const Jd = [pd.MessageLogLevel, pd.WarningLogLevel, pd.ErrorLogLevel];
        for (const kd of Jd)
          if ((dd & kd) === kd) {
            const dd = this._Levels[kd];
            pd[dd.name] = pd._LogEnabled.bind(pd, kd)
          }
      }
    }
    pd.NoneLogLevel = 0, pd.MessageLogLevel = 1, pd.WarningLogLevel = 2, pd.ErrorLogLevel = 4, pd.AllLogLevel = 7, pd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pd._LogCache = "", pd._LogLimitOutputs = {}, pd._Levels = [{}, {
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
    }], pd.errorsCount = 0, pd.Log = pd._LogEnabled.bind(pd, pd.MessageLogLevel), pd.Warn = pd._LogEnabled.bind(pd, pd.WarningLogLevel), pd.Error = pd._LogEnabled.bind(pd, pd.ErrorLogLevel)
  },
  37280: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Pd
    });
    const pd = "undefined" !== typeof WeakRef;
    class Nd {
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(dd, Jd, kd, pd)
      }
      initialize(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = dd, this.skipNextObservers = Jd, this.target = kd, this.currentTarget = pd, this
      }
    }
    class Wd {
      constructor(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = dd, this.mask = Jd, this.scope = kd, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(dd)
      }
    }
    class Pd {
      static FromPromise(dd, Jd) {
        const kd = new Pd;
        return dd.then((dd => {
          kd.notifyObservers(dd)
        })).catch((dd => {
          if (!Jd) throw dd;
          Jd.notifyObservers(dd)
        })), kd
      }
      get observers() {
        return this._observers
      }
      constructor(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Jd, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Nd(0), dd && (this._onObserverAdded = dd)
      }
      add(dd) {
        let Jd = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!dd) return null;
        const Nd = new Wd(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Nd.unregisterOnNextCall = kd, Jd ? this._observers.unshift(Nd) : this._observers.push(Nd), this._onObserverAdded && this._onObserverAdded(Nd), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Nd, this._lastNotifiedValue);
        const Pd = pd ? new WeakRef(this) : {
          deref: () => this
        };
        return Nd._remove = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Jd = Pd.deref();
          Jd && (dd ? Jd.remove(Nd) : Jd._remove(Nd))
        }, Nd
      }
      addOnce(dd) {
        return this.add(dd, void 0, void 0, void 0, !0)
      }
      remove(dd) {
        if (!dd) return !1;
        dd._remove = null;
        return -1 !== this._observers.indexOf(dd) && (this._deferUnregister(dd), !0)
      }
      removeCallback(dd, Jd) {
        for (let kd = 0; kd < this._observers.length; kd++) {
          const pd = this._observers[kd];
          if (!pd._willBeUnregistered && (pd.callback === dd && (!Jd || Jd === pd.scope))) return this._deferUnregister(pd), !0
        }
        return !1
      }
      _deferUnregister(dd) {
        dd._willBeUnregistered || (this._numObserversMarkedAsDeleted++, dd.unregisterOnNextCall = !1, dd._willBeUnregistered = !0, setTimeout((() => {
          this._remove(dd)
        }), 0))
      }
      _remove(dd) {
        let Jd = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!dd) return !1;
        const kd = this._observers.indexOf(dd);
        return -1 !== kd && (Jd && this._numObserversMarkedAsDeleted--, this._observers.splice(kd, 1), !0)
      }
      makeObserverTopPriority(dd) {
        this._remove(dd, !1), this._observers.unshift(dd)
      }
      makeObserverBottomPriority(dd) {
        this._remove(dd, !1), this._observers.push(dd)
      }
      notifyObservers(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          kd = arguments.length > 2 ? arguments[2] : void 0,
          pd = arguments.length > 3 ? arguments[3] : void 0,
          Nd = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = dd), !this._observers.length) return !0;
        const Wd = this._eventState;
        Wd.mask = Jd, Wd.target = kd, Wd.currentTarget = pd, Wd.skipNextObservers = !1, Wd.lastReturnValue = dd, Wd.userInfo = Nd;
        for (const Pd of this._observers)
          if (!Pd._willBeUnregistered && (Pd.mask & Jd && (Pd.unregisterOnNextCall && this._deferUnregister(Pd), Pd.scope ? Wd.lastReturnValue = Pd.callback.apply(Pd.scope, [dd, Wd]) : Wd.lastReturnValue = Pd.callback(dd, Wd)), Wd.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(dd, Jd) {
        let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Jd), dd._willBeUnregistered) return;
        const pd = this._eventState;
        pd.mask = kd, pd.skipNextObservers = !1, dd.unregisterOnNextCall && this._deferUnregister(dd), dd.callback(Jd, pd)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const dd = this._observers.pop();
          dd && (dd._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const dd = new Pd;
        return dd._observers = this._observers.slice(0), dd
      }
      hasSpecificMask() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Jd of this._observers)
          if (Jd.mask & dd || Jd.mask === dd) return !0;
        return !1
      }
    }
  },
  60859: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      AsyncLoop: () => pd.e,
      RegisterTools: () => pd.g,
      Tools: () => pd.h,
      className: () => pd.k
    });
    var pd = kd(40066);
    (0, pd.g)()
  },
  37303: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Nd
    });
    const pd = {};

    function Nd(dd, Jd) {
      pd[dd] = Jd
    }

    function Wd(dd) {
      return pd[dd]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);