export const id = 238;
export const ids = [238];
export const modules = {
  37359: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => qt
    });
    var Ot = Vt(37367);
    class qt {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    qt.Instances = [], qt.OnEnginesDisposedObservable = new Ot.c, qt._LastCreatedScene = null, qt.UseFallbackTexture = !0, qt.FallbackTexture = ""
  },
  38897: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(38899);
    const qt = (tt, et, Vt) => tt ? tt.getClassName && "Mesh" === tt.getClassName() ? null : !tt.getClassName || "SubMesh" !== tt.getClassName() && "PhysicsBody" !== tt.getClassName() ? tt.clone ? tt.clone() : Array.isArray(tt) ? tt.slice() : Vt && "object" === typeof tt ? {
      ...tt
    } : null : tt.clone(et) : null;
    class Dt {
      static DeepCopy(tt, et, Vt, Dt) {
        let mt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dt = function(tt) {
          const et = [];
          do {
            const Vt = Object.getOwnPropertyNames(tt);
            for (const tt of Vt) - 1 === et.indexOf(tt) && et.push(tt)
          } while (tt = Object.getPrototypeOf(tt));
          return et
        }(tt);
        for (const Ht of dt) {
          if ("_" === Ht[0] && (!Dt || -1 === Dt.indexOf(Ht))) continue;
          if (Ht.endsWith("Observable")) continue;
          if (Vt && -1 !== Vt.indexOf(Ht)) continue;
          const dt = tt[Ht],
            Xt = typeof dt;
          if ("function" !== Xt) try {
            if ("object" === Xt)
              if (dt instanceof Uint8Array) et[Ht] = Uint8Array.from(dt);
              else if (dt instanceof Array) {
              if (et[Ht] = [], dt.length > 0)
                if ("object" == typeof dt[0])
                  for (let tt = 0; tt < dt.length; tt++) {
                    const Vt = qt(dt[tt], et, mt); - 1 === et[Ht].indexOf(Vt) && et[Ht].push(Vt)
                  } else et[Ht] = dt.slice(0)
            } else et[Ht] = qt(dt, et, mt);
            else et[Ht] = dt
          } catch (jt) {
            Ot.d.Warn(jt.message)
          }
        }
      }
    }
  },
  38159: (tt, et, Vt) => {
    function Ot() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (tt => {
        const et = 16 * Math.random() | 0;
        return ("x" === tt ? et : 3 & et | 8).toString(16)
      }))
    }
    Vt.d(et, {
      b: () => Ot
    })
  },
  38899: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      static _CheckLimit(tt, et) {
        let Vt = Ot._LogLimitOutputs[tt];
        return Vt ? Vt.current++ : (Vt = {
          limit: et,
          current: 1
        }, Ot._LogLimitOutputs[tt] = Vt), Vt.current <= Vt.limit
      }
      static _GenerateLimitMessage(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Vt = Ot._LogLimitOutputs[tt];
        if (!Vt || !Ot.MessageLimitReached) return;
        const qt = this._Levels[et];
        Vt.current === Vt.limit && Ot[qt.name](Ot.MessageLimitReached.replace(/%LIMIT%/g, "" + Vt.limit).replace(/%TYPE%/g, qt.name ?? ""))
      }
      static _AddLogEntry(tt) {
        Ot._LogCache = tt + Ot._LogCache, Ot.OnNewCacheEntry && Ot.OnNewCacheEntry(tt)
      }
      static _FormatMessage(tt) {
        const et = tt => tt < 10 ? "0" + tt : "" + tt,
          Vt = new Date;
        return "[" + et(Vt.getHours()) + ":" + et(Vt.getMinutes()) + ":" + et(Vt.getSeconds()) + "]: " + tt
      }
      static _LogDisabled(tt, et) {}
      static _LogEnabled() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const qt = Array.isArray(et) ? et[0] : et;
        if (void 0 !== Vt && !Ot._CheckLimit(qt, Vt)) return;
        const Dt = Ot._FormatMessage(qt),
          mt = this._Levels[tt],
          dt = Array.isArray(et) ? et.slice(1) : [];
        mt.logFunc && mt.logFunc("BJS - " + Dt, ...dt);
        const jt = `<div style='color:${mt.color}'>${Dt}</div><br>`;
        Ot._AddLogEntry(jt), Ot._GenerateLimitMessage(qt, tt)
      }
      static get LogCache() {
        return Ot._LogCache
      }
      static ClearLogCache() {
        Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot.errorsCount = 0
      }
      static set LogLevels(tt) {
        Ot.Log = Ot._LogDisabled, Ot.Warn = Ot._LogDisabled, Ot.Error = Ot._LogDisabled;
        const et = [Ot.MessageLogLevel, Ot.WarningLogLevel, Ot.ErrorLogLevel];
        for (const Vt of et)
          if ((tt & Vt) === Vt) {
            const tt = this._Levels[Vt];
            Ot[tt.name] = Ot._LogEnabled.bind(Ot, Vt)
          }
      }
    }
    Ot.NoneLogLevel = 0, Ot.MessageLogLevel = 1, Ot.WarningLogLevel = 2, Ot.ErrorLogLevel = 4, Ot.AllLogLevel = 7, Ot.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot._Levels = [{}, {
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
    }], Ot.errorsCount = 0, Ot.Log = Ot._LogEnabled.bind(Ot, Ot.MessageLogLevel), Ot.Warn = Ot._LogEnabled.bind(Ot, Ot.WarningLogLevel), Ot.Error = Ot._LogEnabled.bind(Ot, Ot.ErrorLogLevel)
  },
  37367: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => mt
    });
    const Ot = "undefined" !== typeof WeakRef;
    class qt {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(tt, et, Vt, Ot)
      }
      initialize(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = tt, this.skipNextObservers = et, this.target = Vt, this.currentTarget = Ot, this
      }
    }
    class Dt {
      constructor(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = tt, this.mask = et, this.scope = Vt, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(tt)
      }
    }
    class mt {
      static FromPromise(tt, et) {
        const Vt = new mt;
        return tt.then((tt => {
          Vt.notifyObservers(tt)
        })).catch((tt => {
          if (!et) throw tt;
          et.notifyObservers(tt)
        })), Vt
      }
      get observers() {
        return this._observers
      }
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = et, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qt(0), tt && (this._onObserverAdded = tt)
      }
      add(tt) {
        let et = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Vt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!tt) return null;
        const qt = new Dt(tt, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        qt.unregisterOnNextCall = Vt, et ? this._observers.unshift(qt) : this._observers.push(qt), this._onObserverAdded && this._onObserverAdded(qt), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(qt, this._lastNotifiedValue);
        const mt = Ot ? new WeakRef(this) : {
          deref: () => this
        };
        return qt._remove = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const et = mt.deref();
          et && (tt ? et.remove(qt) : et._remove(qt))
        }, qt
      }
      addOnce(tt) {
        return this.add(tt, void 0, void 0, void 0, !0)
      }
      remove(tt) {
        if (!tt) return !1;
        tt._remove = null;
        return -1 !== this._observers.indexOf(tt) && (this._deferUnregister(tt), !0)
      }
      removeCallback(tt, et) {
        for (let Vt = 0; Vt < this._observers.length; Vt++) {
          const Ot = this._observers[Vt];
          if (!Ot._willBeUnregistered && (Ot.callback === tt && (!et || et === Ot.scope))) return this._deferUnregister(Ot), !0
        }
        return !1
      }
      _deferUnregister(tt) {
        tt._willBeUnregistered || (this._numObserversMarkedAsDeleted++, tt.unregisterOnNextCall = !1, tt._willBeUnregistered = !0, setTimeout((() => {
          this._remove(tt)
        }), 0))
      }
      _remove(tt) {
        let et = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!tt) return !1;
        const Vt = this._observers.indexOf(tt);
        return -1 !== Vt && (et && this._numObserversMarkedAsDeleted--, this._observers.splice(Vt, 1), !0)
      }
      makeObserverTopPriority(tt) {
        this._remove(tt, !1), this._observers.unshift(tt)
      }
      makeObserverBottomPriority(tt) {
        this._remove(tt, !1), this._observers.push(tt)
      }
      notifyObservers(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Vt = arguments.length > 2 ? arguments[2] : void 0,
          Ot = arguments.length > 3 ? arguments[3] : void 0,
          qt = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = tt), !this._observers.length) return !0;
        const Dt = this._eventState;
        Dt.mask = et, Dt.target = Vt, Dt.currentTarget = Ot, Dt.skipNextObservers = !1, Dt.lastReturnValue = tt, Dt.userInfo = qt;
        for (const mt of this._observers)
          if (!mt._willBeUnregistered && (mt.mask & et && (mt.unregisterOnNextCall && this._deferUnregister(mt), mt.scope ? Dt.lastReturnValue = mt.callback.apply(mt.scope, [tt, Dt]) : Dt.lastReturnValue = mt.callback(tt, Dt)), Dt.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(tt, et) {
        let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = et), tt._willBeUnregistered) return;
        const Ot = this._eventState;
        Ot.mask = Vt, Ot.skipNextObservers = !1, tt.unregisterOnNextCall && this._deferUnregister(tt), tt.callback(et, Ot)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const tt = this._observers.pop();
          tt && (tt._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const tt = new mt;
        return tt._observers = this._observers.slice(0), tt
      }
      hasSpecificMask() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const et of this._observers)
          if (et.mask & tt || et.mask === tt) return !0;
        return !1
      }
    }
  },
  61509: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      AsyncLoop: () => Ot.d,
      RegisterTools: () => Ot.h,
      Tools: () => Ot.l,
      className: () => Ot.o
    });
    var Ot = Vt(40300);
    (0, Ot.h)()
  },
  37390: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => qt
    });
    const Ot = {};

    function qt(tt, et) {
      Ot[tt] = et
    }

    function Dt(tt) {
      return Ot[tt]
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);