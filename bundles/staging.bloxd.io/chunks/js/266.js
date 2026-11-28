export const id = 266;
export const ids = [266];
export const modules = {
  38651: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(38660);
    class Fd {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Fd.Instances = [], Fd.OnEnginesDisposedObservable = new Wd.c, Fd._LastCreatedScene = null, Fd.UseFallbackTexture = !0, Fd.FallbackTexture = ""
  },
  40260: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(40262);
    const Fd = (dd, Od, md) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : md && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Od) : null;
    class Rd {
      static DeepCopy(dd, Od, md, Rd) {
        let Xd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Kd = function(dd) {
          const Od = [];
          do {
            const md = Object.getOwnPropertyNames(dd);
            for (const dd of md) - 1 === Od.indexOf(dd) && Od.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Od
        }(dd);
        for (const vd of Kd) {
          if ("_" === vd[0] && (!Rd || -1 === Rd.indexOf(vd))) continue;
          if (vd.endsWith("Observable")) continue;
          if (md && -1 !== md.indexOf(vd)) continue;
          const Kd = dd[vd],
            Qd = typeof Kd;
          if ("function" !== Qd) try {
            if ("object" === Qd)
              if (Kd instanceof Uint8Array) Od[vd] = Uint8Array.from(Kd);
              else if (Kd instanceof Array) {
              if (Od[vd] = [], Kd.length > 0)
                if ("object" == typeof Kd[0])
                  for (let dd = 0; dd < Kd.length; dd++) {
                    const md = Fd(Kd[dd], Od, Xd); - 1 === Od[vd].indexOf(md) && Od[vd].push(md)
                  } else Od[vd] = Kd.slice(0)
            } else Od[vd] = Fd(Kd, Od, Xd);
            else Od[vd] = Kd
          } catch (hd) {
            Wd.c.Warn(hd.message)
          }
        }
      }
    }
  },
  39461: (dd, Od, md) => {
    function Wd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Od = 16 * Math.random() | 0;
        return ("x" === dd ? Od : 3 & Od | 8).toString(16)
      }))
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  40262: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      static _CheckLimit(dd, Od) {
        let md = Wd._LogLimitOutputs[dd];
        return md ? md.current++ : (md = {
          limit: Od,
          current: 1
        }, Wd._LogLimitOutputs[dd] = md), md.current <= md.limit
      }
      static _GenerateLimitMessage(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const md = Wd._LogLimitOutputs[dd];
        if (!md || !Wd.MessageLimitReached) return;
        const Fd = this._Levels[Od];
        md.current === md.limit && Wd[Fd.name](Wd.MessageLimitReached.replace(/%LIMIT%/g, "" + md.limit).replace(/%TYPE%/g, Fd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        Wd._LogCache = dd + Wd._LogCache, Wd.OnNewCacheEntry && Wd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Od = dd => dd < 10 ? "0" + dd : "" + dd,
          md = new Date;
        return "[" + Od(md.getHours()) + ":" + Od(md.getMinutes()) + ":" + Od(md.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Od) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Fd = Array.isArray(Od) ? Od[0] : Od;
        if (void 0 !== md && !Wd._CheckLimit(Fd, md)) return;
        const Rd = Wd._FormatMessage(Fd),
          Xd = this._Levels[dd],
          Kd = Array.isArray(Od) ? Od.slice(1) : [];
        Xd.logFunc && Xd.logFunc("BJS - " + Rd, ...Kd);
        const hd = `<div style='color:${Xd.color}'>${Rd}</div><br>`;
        Wd._AddLogEntry(hd), Wd._GenerateLimitMessage(Fd, dd)
      }
      static get LogCache() {
        return Wd._LogCache
      }
      static ClearLogCache() {
        Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd.errorsCount = 0
      }
      static set LogLevels(dd) {
        Wd.Log = Wd._LogDisabled, Wd.Warn = Wd._LogDisabled, Wd.Error = Wd._LogDisabled;
        const Od = [Wd.MessageLogLevel, Wd.WarningLogLevel, Wd.ErrorLogLevel];
        for (const md of Od)
          if ((dd & md) === md) {
            const dd = this._Levels[md];
            Wd[dd.name] = Wd._LogEnabled.bind(Wd, md)
          }
      }
    }
    Wd.NoneLogLevel = 0, Wd.MessageLogLevel = 1, Wd.WarningLogLevel = 2, Wd.ErrorLogLevel = 4, Wd.AllLogLevel = 7, Wd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd._Levels = [{}, {
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
    }], Wd.errorsCount = 0, Wd.Log = Wd._LogEnabled.bind(Wd, Wd.MessageLogLevel), Wd.Warn = Wd._LogEnabled.bind(Wd, Wd.WarningLogLevel), Wd.Error = Wd._LogEnabled.bind(Wd, Wd.ErrorLogLevel)
  },
  38660: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    const Wd = "undefined" !== typeof WeakRef;
    class Fd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(dd, Od, md, Wd)
      }
      initialize(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = dd, this.skipNextObservers = Od, this.target = md, this.currentTarget = Wd, this
      }
    }
    class Rd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = dd, this.mask = Od, this.scope = md, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(dd)
      }
    }
    class Xd {
      static FromPromise(dd, Od) {
        const md = new Xd;
        return dd.then((dd => {
          md.notifyObservers(dd)
        })).catch((dd => {
          if (!Od) throw dd;
          Od.notifyObservers(dd)
        })), md
      }
      get observers() {
        return this._observers
      }
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Od, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Fd(0), dd && (this._onObserverAdded = dd)
      }
      add(dd) {
        let Od = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          md = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!dd) return null;
        const Fd = new Rd(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Fd.unregisterOnNextCall = md, Od ? this._observers.unshift(Fd) : this._observers.push(Fd), this._onObserverAdded && this._onObserverAdded(Fd), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Fd, this._lastNotifiedValue);
        const Xd = Wd ? new WeakRef(this) : {
          deref: () => this
        };
        return Fd._remove = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Od = Xd.deref();
          Od && (dd ? Od.remove(Fd) : Od._remove(Fd))
        }, Fd
      }
      addOnce(dd) {
        return this.add(dd, void 0, void 0, void 0, !0)
      }
      remove(dd) {
        if (!dd) return !1;
        dd._remove = null;
        return -1 !== this._observers.indexOf(dd) && (this._deferUnregister(dd), !0)
      }
      removeCallback(dd, Od) {
        for (let md = 0; md < this._observers.length; md++) {
          const Wd = this._observers[md];
          if (!Wd._willBeUnregistered && (Wd.callback === dd && (!Od || Od === Wd.scope))) return this._deferUnregister(Wd), !0
        }
        return !1
      }
      _deferUnregister(dd) {
        dd._willBeUnregistered || (this._numObserversMarkedAsDeleted++, dd.unregisterOnNextCall = !1, dd._willBeUnregistered = !0, setTimeout((() => {
          this._remove(dd)
        }), 0))
      }
      _remove(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!dd) return !1;
        const md = this._observers.indexOf(dd);
        return -1 !== md && (Od && this._numObserversMarkedAsDeleted--, this._observers.splice(md, 1), !0)
      }
      makeObserverTopPriority(dd) {
        this._remove(dd, !1), this._observers.unshift(dd)
      }
      makeObserverBottomPriority(dd) {
        this._remove(dd, !1), this._observers.push(dd)
      }
      notifyObservers(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = dd), !this._observers.length) return !0;
        const Rd = this._eventState;
        Rd.mask = Od, Rd.target = md, Rd.currentTarget = Wd, Rd.skipNextObservers = !1, Rd.lastReturnValue = dd, Rd.userInfo = Fd;
        for (const Xd of this._observers)
          if (!Xd._willBeUnregistered && (Xd.mask & Od && (Xd.unregisterOnNextCall && this._deferUnregister(Xd), Xd.scope ? Rd.lastReturnValue = Xd.callback.apply(Xd.scope, [dd, Rd]) : Rd.lastReturnValue = Xd.callback(dd, Rd)), Rd.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Od), dd._willBeUnregistered) return;
        const Wd = this._eventState;
        Wd.mask = md, Wd.skipNextObservers = !1, dd.unregisterOnNextCall && this._deferUnregister(dd), dd.callback(Od, Wd)
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
        const dd = new Xd;
        return dd._observers = this._observers.slice(0), dd
      }
      hasSpecificMask() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Od of this._observers)
          if (Od.mask & dd || Od.mask === dd) return !0;
        return !1
      }
    }
  },
  64761: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      AsyncLoop: () => Wd.d,
      RegisterTools: () => Wd.e,
      Tools: () => Wd.g,
      className: () => Wd.j
    });
    var Wd = md(42029);
    (0, Wd.e)()
  },
  38669: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      e: () => Fd
    });
    const Wd = {};

    function Fd(dd, Od) {
      Wd[dd] = Od
    }

    function Rd(dd) {
      return Wd[dd]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);