export const id = 266;
export const ids = [266];
export const modules = {
  38587: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(38595);
    class Wr {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Wr.Instances = [], Wr.OnEnginesDisposedObservable = new Zr.d, Wr._LastCreatedScene = null, Wr.UseFallbackTexture = !0, Wr.FallbackTexture = ""
  },
  40237: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(40246);
    const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
      ...rr
    } : null : rr.clone(Sr) : null;
    class ar {
      static DeepCopy(rr, Sr, Qr, ar) {
        let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ir = function(rr) {
          const Sr = [];
          do {
            const Qr = Object.getOwnPropertyNames(rr);
            for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
          } while (rr = Object.getPrototypeOf(rr));
          return Sr
        }(rr);
        for (const Er of Ir) {
          if ("_" === Er[0] && (!ar || -1 === ar.indexOf(Er))) continue;
          if (Er.endsWith("Observable")) continue;
          if (Qr && -1 !== Qr.indexOf(Er)) continue;
          const Ir = rr[Er],
            pr = typeof Ir;
          if ("function" !== pr) try {
            if ("object" === pr)
              if (Ir instanceof Uint8Array) Sr[Er] = Uint8Array.from(Ir);
              else if (Ir instanceof Array) {
              if (Sr[Er] = [], Ir.length > 0)
                if ("object" == typeof Ir[0])
                  for (let rr = 0; rr < Ir.length; rr++) {
                    const Qr = Wr(Ir[rr], Sr, jr); - 1 === Sr[Er].indexOf(Qr) && Sr[Er].push(Qr)
                  } else Sr[Er] = Ir.slice(0)
            } else Sr[Er] = Wr(Ir, Sr, jr);
            else Sr[Er] = Ir
          } catch (fr) {
            Zr.c.Warn(fr.message)
          }
        }
      }
    }
  },
  39405: (rr, Sr, Qr) => {
    function Zr() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
        const Sr = 16 * Math.random() | 0;
        return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
      }))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  40246: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      static _CheckLimit(rr, Sr) {
        let Qr = Zr._LogLimitOutputs[rr];
        return Qr ? Qr.current++ : (Qr = {
          limit: Sr,
          current: 1
        }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
      }
      static _GenerateLimitMessage(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Qr = Zr._LogLimitOutputs[rr];
        if (!Qr || !Zr.MessageLimitReached) return;
        const Wr = this._Levels[Sr];
        Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
      }
      static _AddLogEntry(rr) {
        Zr._LogCache = rr + Zr._LogCache, Zr.OnNewCacheEntry && Zr.OnNewCacheEntry(rr)
      }
      static _FormatMessage(rr) {
        const Sr = rr => rr < 10 ? "0" + rr : "" + rr,
          Qr = new Date;
        return "[" + Sr(Qr.getHours()) + ":" + Sr(Qr.getMinutes()) + ":" + Sr(Qr.getSeconds()) + "]: " + rr
      }
      static _LogDisabled(rr, Sr) {}
      static _LogEnabled() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Wr = Array.isArray(Sr) ? Sr[0] : Sr;
        if (void 0 !== Qr && !Zr._CheckLimit(Wr, Qr)) return;
        const ar = Zr._FormatMessage(Wr),
          jr = this._Levels[rr],
          Ir = Array.isArray(Sr) ? Sr.slice(1) : [];
        jr.logFunc && jr.logFunc("BJS - " + ar, ...Ir);
        const fr = `<div style='color:${jr.color}'>${ar}</div><br>`;
        Zr._AddLogEntry(fr), Zr._GenerateLimitMessage(Wr, rr)
      }
      static get LogCache() {
        return Zr._LogCache
      }
      static ClearLogCache() {
        Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr.errorsCount = 0
      }
      static set LogLevels(rr) {
        Zr.Log = Zr._LogDisabled, Zr.Warn = Zr._LogDisabled, Zr.Error = Zr._LogDisabled;
        const Sr = [Zr.MessageLogLevel, Zr.WarningLogLevel, Zr.ErrorLogLevel];
        for (const Qr of Sr)
          if ((rr & Qr) === Qr) {
            const rr = this._Levels[Qr];
            Zr[rr.name] = Zr._LogEnabled.bind(Zr, Qr)
          }
      }
    }
    Zr.NoneLogLevel = 0, Zr.MessageLogLevel = 1, Zr.WarningLogLevel = 2, Zr.ErrorLogLevel = 4, Zr.AllLogLevel = 7, Zr.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr._Levels = [{}, {
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
    }], Zr.errorsCount = 0, Zr.Log = Zr._LogEnabled.bind(Zr, Zr.MessageLogLevel), Zr.Warn = Zr._LogEnabled.bind(Zr, Zr.WarningLogLevel), Zr.Error = Zr._LogEnabled.bind(Zr, Zr.ErrorLogLevel)
  },
  38595: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    const Zr = "undefined" !== typeof WeakRef;
    class Wr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(rr, Sr, Qr, Zr)
      }
      initialize(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = rr, this.skipNextObservers = Sr, this.target = Qr, this.currentTarget = Zr, this
      }
    }
    class ar {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = rr, this.mask = Sr, this.scope = Qr, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(rr)
      }
    }
    class jr {
      static FromPromise(rr, Sr) {
        const Qr = new jr;
        return rr.then((rr => {
          Qr.notifyObservers(rr)
        })).catch((rr => {
          if (!Sr) throw rr;
          Sr.notifyObservers(rr)
        })), Qr
      }
      get observers() {
        return this._observers
      }
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Sr, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Wr(0), rr && (this._onObserverAdded = rr)
      }
      add(rr) {
        let Sr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Qr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!rr) return null;
        const Wr = new ar(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Wr.unregisterOnNextCall = Qr, Sr ? this._observers.unshift(Wr) : this._observers.push(Wr), this._onObserverAdded && this._onObserverAdded(Wr), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Wr, this._lastNotifiedValue);
        const jr = Zr ? new WeakRef(this) : {
          deref: () => this
        };
        return Wr._remove = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Sr = jr.deref();
          Sr && (rr ? Sr.remove(Wr) : Sr._remove(Wr))
        }, Wr
      }
      addOnce(rr) {
        return this.add(rr, void 0, void 0, void 0, !0)
      }
      remove(rr) {
        if (!rr) return !1;
        rr._remove = null;
        return -1 !== this._observers.indexOf(rr) && (this._deferUnregister(rr), !0)
      }
      removeCallback(rr, Sr) {
        for (let Qr = 0; Qr < this._observers.length; Qr++) {
          const Zr = this._observers[Qr];
          if (!Zr._willBeUnregistered && (Zr.callback === rr && (!Sr || Sr === Zr.scope))) return this._deferUnregister(Zr), !0
        }
        return !1
      }
      _deferUnregister(rr) {
        rr._willBeUnregistered || (this._numObserversMarkedAsDeleted++, rr.unregisterOnNextCall = !1, rr._willBeUnregistered = !0, setTimeout((() => {
          this._remove(rr)
        }), 0))
      }
      _remove(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!rr) return !1;
        const Qr = this._observers.indexOf(rr);
        return -1 !== Qr && (Sr && this._numObserversMarkedAsDeleted--, this._observers.splice(Qr, 1), !0)
      }
      makeObserverTopPriority(rr) {
        this._remove(rr, !1), this._observers.unshift(rr)
      }
      makeObserverBottomPriority(rr) {
        this._remove(rr, !1), this._observers.push(rr)
      }
      notifyObservers(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = rr), !this._observers.length) return !0;
        const ar = this._eventState;
        ar.mask = Sr, ar.target = Qr, ar.currentTarget = Zr, ar.skipNextObservers = !1, ar.lastReturnValue = rr, ar.userInfo = Wr;
        for (const jr of this._observers)
          if (!jr._willBeUnregistered && (jr.mask & Sr && (jr.unregisterOnNextCall && this._deferUnregister(jr), jr.scope ? ar.lastReturnValue = jr.callback.apply(jr.scope, [rr, ar]) : ar.lastReturnValue = jr.callback(rr, ar)), ar.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Sr), rr._willBeUnregistered) return;
        const Zr = this._eventState;
        Zr.mask = Qr, Zr.skipNextObservers = !1, rr.unregisterOnNextCall && this._deferUnregister(rr), rr.callback(Sr, Zr)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const rr = this._observers.pop();
          rr && (rr._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const rr = new jr;
        return rr._observers = this._observers.slice(0), rr
      }
      hasSpecificMask() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Sr of this._observers)
          if (Sr.mask & rr || Sr.mask === rr) return !0;
        return !1
      }
    }
  },
  64590: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      AsyncLoop: () => Zr.b,
      RegisterTools: () => Zr.d,
      Tools: () => Zr.h,
      className: () => Zr.j
    });
    var Zr = Qr(41950);
    (0, Zr.d)()
  },
  38609: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      e: () => Wr
    });
    const Zr = {};

    function Wr(rr, Sr) {
      Zr[rr] = Sr
    }

    function ar(rr) {
      return Zr[rr]
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);