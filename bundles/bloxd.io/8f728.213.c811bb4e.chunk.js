export const id = 213;
export const ids = [213];
export const modules = {
  35780: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(35783);
    class Ic {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Ic.Instances = [], Ic.OnEnginesDisposedObservable = new Vc.c, Ic._LastCreatedScene = null, Ic.UseFallbackTexture = !0, Ic.FallbackTexture = ""
  },
  37185: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB
    });
    var Vc = nc(37191);
    const Ic = (cB, Bc, nc) => cB ? cB.getClassName && "Mesh" === cB.getClassName() ? null : !cB.getClassName || "SubMesh" !== cB.getClassName() && "PhysicsBody" !== cB.getClassName() ? cB.clone ? cB.clone() : Array.isArray(cB) ? cB.slice() : nc && "object" === typeof cB ? {
      ...cB
    } : null : cB.clone(Bc) : null;
    class rB {
      static DeepCopy(cB, Bc, nc, rB) {
        let uc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sc = function(cB) {
          const Bc = [];
          do {
            const nc = Object.getOwnPropertyNames(cB);
            for (const cB of nc) - 1 === Bc.indexOf(cB) && Bc.push(cB)
          } while (cB = Object.getPrototypeOf(cB));
          return Bc
        }(cB);
        for (const Pc of sc) {
          if ("_" === Pc[0] && (!rB || -1 === rB.indexOf(Pc))) continue;
          if (Pc.endsWith("Observable")) continue;
          if (nc && -1 !== nc.indexOf(Pc)) continue;
          const sc = cB[Pc],
            qB = typeof sc;
          if ("function" !== qB) try {
            if ("object" === qB)
              if (sc instanceof Uint8Array) Bc[Pc] = Uint8Array.from(sc);
              else if (sc instanceof Array) {
              if (Bc[Pc] = [], sc.length > 0)
                if ("object" == typeof sc[0])
                  for (let cB = 0; cB < sc.length; cB++) {
                    const nc = Ic(sc[cB], Bc, uc); - 1 === Bc[Pc].indexOf(nc) && Bc[Pc].push(nc)
                  } else Bc[Pc] = sc.slice(0)
            } else Bc[Pc] = Ic(sc, Bc, uc);
            else Bc[Pc] = sc
          } catch (Mc) {
            Vc.c.Warn(Mc.message)
          }
        }
      }
    }
  },
  36472: (cB, Bc, nc) => {
    function Vc() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (cB => {
        const Bc = 16 * Math.random() | 0;
        return ("x" === cB ? Bc : 3 & Bc | 8).toString(16)
      }))
    }
    nc.d(Bc, {
      d: () => Vc
    })
  },
  37191: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      static _CheckLimit(cB, Bc) {
        let nc = Vc._LogLimitOutputs[cB];
        return nc ? nc.current++ : (nc = {
          limit: Bc,
          current: 1
        }, Vc._LogLimitOutputs[cB] = nc), nc.current <= nc.limit
      }
      static _GenerateLimitMessage(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const nc = Vc._LogLimitOutputs[cB];
        if (!nc || !Vc.MessageLimitReached) return;
        const Ic = this._Levels[Bc];
        nc.current === nc.limit && Vc[Ic.name](Vc.MessageLimitReached.replace(/%LIMIT%/g, "" + nc.limit).replace(/%TYPE%/g, Ic.name ?? ""))
      }
      static _AddLogEntry(cB) {
        Vc._LogCache = cB + Vc._LogCache, Vc.OnNewCacheEntry && Vc.OnNewCacheEntry(cB)
      }
      static _FormatMessage(cB) {
        const Bc = cB => cB < 10 ? "0" + cB : "" + cB,
          nc = new Date;
        return "[" + Bc(nc.getHours()) + ":" + Bc(nc.getMinutes()) + ":" + Bc(nc.getSeconds()) + "]: " + cB
      }
      static _LogDisabled(cB, Bc) {}
      static _LogEnabled() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Bc = arguments.length > 1 ? arguments[1] : void 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        const Ic = Array.isArray(Bc) ? Bc[0] : Bc;
        if (void 0 !== nc && !Vc._CheckLimit(Ic, nc)) return;
        const rB = Vc._FormatMessage(Ic),
          uc = this._Levels[cB],
          sc = Array.isArray(Bc) ? Bc.slice(1) : [];
        uc.logFunc && uc.logFunc("BJS - " + rB, ...sc);
        const Mc = `<div style='color:${uc.color}'>${rB}</div><br>`;
        Vc._AddLogEntry(Mc), Vc._GenerateLimitMessage(Ic, cB)
      }
      static get LogCache() {
        return Vc._LogCache
      }
      static ClearLogCache() {
        Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc.errorsCount = 0
      }
      static set LogLevels(cB) {
        Vc.Log = Vc._LogDisabled, Vc.Warn = Vc._LogDisabled, Vc.Error = Vc._LogDisabled;
        const Bc = [Vc.MessageLogLevel, Vc.WarningLogLevel, Vc.ErrorLogLevel];
        for (const nc of Bc)
          if ((cB & nc) === nc) {
            const cB = this._Levels[nc];
            Vc[cB.name] = Vc._LogEnabled.bind(Vc, nc)
          }
      }
    }
    Vc.NoneLogLevel = 0, Vc.MessageLogLevel = 1, Vc.WarningLogLevel = 2, Vc.ErrorLogLevel = 4, Vc.AllLogLevel = 7, Vc.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Vc._LogCache = "", Vc._LogLimitOutputs = {}, Vc._Levels = [{}, {
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
    }], Vc.errorsCount = 0, Vc.Log = Vc._LogEnabled.bind(Vc, Vc.MessageLogLevel), Vc.Warn = Vc._LogEnabled.bind(Vc, Vc.WarningLogLevel), Vc.Error = Vc._LogEnabled.bind(Vc, Vc.ErrorLogLevel)
  },
  35783: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => uc
    });
    const Vc = "undefined" !== typeof WeakRef;
    class Ic {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(cB, Bc, nc, Vc)
      }
      initialize(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = cB, this.skipNextObservers = Bc, this.target = nc, this.currentTarget = Vc, this
      }
    }
    class rB {
      constructor(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = cB, this.mask = Bc, this.scope = nc, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(cB)
      }
    }
    class uc {
      static FromPromise(cB, Bc) {
        const nc = new uc;
        return cB.then((cB => {
          nc.notifyObservers(cB)
        })).catch((cB => {
          if (!Bc) throw cB;
          Bc.notifyObservers(cB)
        })), nc
      }
      get observers() {
        return this._observers
      }
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Bc, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Ic(0), cB && (this._onObserverAdded = cB)
      }
      add(cB) {
        let Bc = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          nc = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!cB) return null;
        const Ic = new rB(cB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Ic.unregisterOnNextCall = nc, Bc ? this._observers.unshift(Ic) : this._observers.push(Ic), this._onObserverAdded && this._onObserverAdded(Ic), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Ic, this._lastNotifiedValue);
        const uc = Vc ? new WeakRef(this) : {
          deref: () => this
        };
        return Ic._remove = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Bc = uc.deref();
          Bc && (cB ? Bc.remove(Ic) : Bc._remove(Ic))
        }, Ic
      }
      addOnce(cB) {
        return this.add(cB, void 0, void 0, void 0, !0)
      }
      remove(cB) {
        if (!cB) return !1;
        cB._remove = null;
        return -1 !== this._observers.indexOf(cB) && (this._deferUnregister(cB), !0)
      }
      removeCallback(cB, Bc) {
        for (let nc = 0; nc < this._observers.length; nc++) {
          const Vc = this._observers[nc];
          if (!Vc._willBeUnregistered && (Vc.callback === cB && (!Bc || Bc === Vc.scope))) return this._deferUnregister(Vc), !0
        }
        return !1
      }
      _deferUnregister(cB) {
        cB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, cB.unregisterOnNextCall = !1, cB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(cB)
        }), 0))
      }
      _remove(cB) {
        let Bc = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!cB) return !1;
        const nc = this._observers.indexOf(cB);
        return -1 !== nc && (Bc && this._numObserversMarkedAsDeleted--, this._observers.splice(nc, 1), !0)
      }
      makeObserverTopPriority(cB) {
        this._remove(cB, !1), this._observers.unshift(cB)
      }
      makeObserverBottomPriority(cB) {
        this._remove(cB, !1), this._observers.push(cB)
      }
      notifyObservers(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          nc = arguments.length > 2 ? arguments[2] : void 0,
          Vc = arguments.length > 3 ? arguments[3] : void 0,
          Ic = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = cB), !this._observers.length) return !0;
        const rB = this._eventState;
        rB.mask = Bc, rB.target = nc, rB.currentTarget = Vc, rB.skipNextObservers = !1, rB.lastReturnValue = cB, rB.userInfo = Ic;
        for (const uc of this._observers)
          if (!uc._willBeUnregistered && (uc.mask & Bc && (uc.unregisterOnNextCall && this._deferUnregister(uc), uc.scope ? rB.lastReturnValue = uc.callback.apply(uc.scope, [cB, rB]) : rB.lastReturnValue = uc.callback(cB, rB)), rB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(cB, Bc) {
        let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Bc), cB._willBeUnregistered) return;
        const Vc = this._eventState;
        Vc.mask = nc, Vc.skipNextObservers = !1, cB.unregisterOnNextCall && this._deferUnregister(cB), cB.callback(Bc, Vc)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const cB = this._observers.pop();
          cB && (cB._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const cB = new uc;
        return cB._observers = this._observers.slice(0), cB
      }
      hasSpecificMask() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Bc of this._observers)
          if (Bc.mask & cB || Bc.mask === cB) return !0;
        return !1
      }
    }
  },
  59077: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      AsyncLoop: () => Vc.c,
      RegisterTools: () => Vc.e,
      Tools: () => Vc.g,
      className: () => Vc.k
    });
    var Vc = nc(38146);
    (0, Vc.e)()
  },
  35799: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      d: () => Ic
    });
    const Vc = {};

    function Ic(cB, Bc) {
      Vc[cB] = Bc
    }

    function rB(cB) {
      return Vc[cB]
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);