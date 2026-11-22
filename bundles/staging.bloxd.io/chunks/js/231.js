export const id = 231;
export const ids = [231];
export const modules = {
  36722: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    var Dk = ik(36726);
    class fk {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    fk.Instances = [], fk.OnEnginesDisposedObservable = new Dk.c, fk._LastCreatedScene = null, fk.UseFallbackTexture = !0, fk.FallbackTexture = ""
  },
  38265: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(38272);
    const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(ek) : null;
    class Sk {
      static DeepCopy(kk, ek, ik, Sk) {
        let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rk = function(kk) {
          const ek = [];
          do {
            const ik = Object.getOwnPropertyNames(kk);
            for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return ek
        }(kk);
        for (const mk of rk) {
          if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
          if (mk.endsWith("Observable")) continue;
          if (ik && -1 !== ik.indexOf(mk)) continue;
          const rk = kk[mk],
            Mk = typeof rk;
          if ("function" !== Mk) try {
            if ("object" === Mk)
              if (rk instanceof Uint8Array) ek[mk] = Uint8Array.from(rk);
              else if (rk instanceof Array) {
              if (ek[mk] = [], rk.length > 0)
                if ("object" == typeof rk[0])
                  for (let kk = 0; kk < rk.length; kk++) {
                    const ik = fk(rk[kk], ek, bk); - 1 === ek[mk].indexOf(ik) && ek[mk].push(ik)
                  } else ek[mk] = rk.slice(0)
            } else ek[mk] = fk(rk, ek, bk);
            else ek[mk] = rk
          } catch (Pk) {
            Dk.b.Warn(Pk.message)
          }
        }
      }
    }
  },
  37497: (kk, ek, ik) => {
    function Dk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const ek = 16 * Math.random() | 0;
        return ("x" === kk ? ek : 3 & ek | 8).toString(16)
      }))
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  38272: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      static _CheckLimit(kk, ek) {
        let ik = Dk._LogLimitOutputs[kk];
        return ik ? ik.current++ : (ik = {
          limit: ek,
          current: 1
        }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ik = Dk._LogLimitOutputs[kk];
        if (!ik || !Dk.MessageLimitReached) return;
        const fk = this._Levels[ek];
        ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Dk._LogCache = kk + Dk._LogCache, Dk.OnNewCacheEntry && Dk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const ek = kk => kk < 10 ? "0" + kk : "" + kk,
          ik = new Date;
        return "[" + ek(ik.getHours()) + ":" + ek(ik.getMinutes()) + ":" + ek(ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, ek) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const fk = Array.isArray(ek) ? ek[0] : ek;
        if (void 0 !== ik && !Dk._CheckLimit(fk, ik)) return;
        const Sk = Dk._FormatMessage(fk),
          bk = this._Levels[kk],
          rk = Array.isArray(ek) ? ek.slice(1) : [];
        bk.logFunc && bk.logFunc("BJS - " + Sk, ...rk);
        const Pk = `<div style='color:${bk.color}'>${Sk}</div><br>`;
        Dk._AddLogEntry(Pk), Dk._GenerateLimitMessage(fk, kk)
      }
      static get LogCache() {
        return Dk._LogCache
      }
      static ClearLogCache() {
        Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Dk.Log = Dk._LogDisabled, Dk.Warn = Dk._LogDisabled, Dk.Error = Dk._LogDisabled;
        const ek = [Dk.MessageLogLevel, Dk.WarningLogLevel, Dk.ErrorLogLevel];
        for (const ik of ek)
          if ((kk & ik) === ik) {
            const kk = this._Levels[ik];
            Dk[kk.name] = Dk._LogEnabled.bind(Dk, ik)
          }
      }
    }
    Dk.NoneLogLevel = 0, Dk.MessageLogLevel = 1, Dk.WarningLogLevel = 2, Dk.ErrorLogLevel = 4, Dk.AllLogLevel = 7, Dk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk._Levels = [{}, {
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
    }], Dk.errorsCount = 0, Dk.Log = Dk._LogEnabled.bind(Dk, Dk.MessageLogLevel), Dk.Warn = Dk._LogEnabled.bind(Dk, Dk.WarningLogLevel), Dk.Error = Dk._LogEnabled.bind(Dk, Dk.ErrorLogLevel)
  },
  36726: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    const Dk = "undefined" !== typeof WeakRef;
    class fk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(kk, ek, ik, Dk)
      }
      initialize(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = kk, this.skipNextObservers = ek, this.target = ik, this.currentTarget = Dk, this
      }
    }
    class Sk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = kk, this.mask = ek, this.scope = ik, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(kk)
      }
    }
    class bk {
      static FromPromise(kk, ek) {
        const ik = new bk;
        return kk.then((kk => {
          ik.notifyObservers(kk)
        })).catch((kk => {
          if (!ek) throw kk;
          ek.notifyObservers(kk)
        })), ik
      }
      get observers() {
        return this._observers
      }
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ek, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new fk(0), kk && (this._onObserverAdded = kk)
      }
      add(kk) {
        let ek = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!kk) return null;
        const fk = new Sk(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        fk.unregisterOnNextCall = ik, ek ? this._observers.unshift(fk) : this._observers.push(fk), this._onObserverAdded && this._onObserverAdded(fk), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(fk, this._lastNotifiedValue);
        const bk = Dk ? new WeakRef(this) : {
          deref: () => this
        };
        return fk._remove = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ek = bk.deref();
          ek && (kk ? ek.remove(fk) : ek._remove(fk))
        }, fk
      }
      addOnce(kk) {
        return this.add(kk, void 0, void 0, void 0, !0)
      }
      remove(kk) {
        if (!kk) return !1;
        kk._remove = null;
        return -1 !== this._observers.indexOf(kk) && (this._deferUnregister(kk), !0)
      }
      removeCallback(kk, ek) {
        for (let ik = 0; ik < this._observers.length; ik++) {
          const Dk = this._observers[ik];
          if (!Dk._willBeUnregistered && (Dk.callback === kk && (!ek || ek === Dk.scope))) return this._deferUnregister(Dk), !0
        }
        return !1
      }
      _deferUnregister(kk) {
        kk._willBeUnregistered || (this._numObserversMarkedAsDeleted++, kk.unregisterOnNextCall = !1, kk._willBeUnregistered = !0, setTimeout((() => {
          this._remove(kk)
        }), 0))
      }
      _remove(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!kk) return !1;
        const ik = this._observers.indexOf(kk);
        return -1 !== ik && (ek && this._numObserversMarkedAsDeleted--, this._observers.splice(ik, 1), !0)
      }
      makeObserverTopPriority(kk) {
        this._remove(kk, !1), this._observers.unshift(kk)
      }
      makeObserverBottomPriority(kk) {
        this._remove(kk, !1), this._observers.push(kk)
      }
      notifyObservers(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = kk), !this._observers.length) return !0;
        const Sk = this._eventState;
        Sk.mask = ek, Sk.target = ik, Sk.currentTarget = Dk, Sk.skipNextObservers = !1, Sk.lastReturnValue = kk, Sk.userInfo = fk;
        for (const bk of this._observers)
          if (!bk._willBeUnregistered && (bk.mask & ek && (bk.unregisterOnNextCall && this._deferUnregister(bk), bk.scope ? Sk.lastReturnValue = bk.callback.apply(bk.scope, [kk, Sk]) : Sk.lastReturnValue = bk.callback(kk, Sk)), Sk.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ek), kk._willBeUnregistered) return;
        const Dk = this._eventState;
        Dk.mask = ik, Dk.skipNextObservers = !1, kk.unregisterOnNextCall && this._deferUnregister(kk), kk.callback(ek, Dk)
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
        const kk = new bk;
        return kk._observers = this._observers.slice(0), kk
      }
      hasSpecificMask() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ek of this._observers)
          if (ek.mask & kk || ek.mask === kk) return !0;
        return !1
      }
    }
  },
  60655: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      AsyncLoop: () => Dk.d,
      RegisterTools: () => Dk.g,
      Tools: () => Dk.i,
      className: () => Dk.l
    });
    var Dk = ik(39662);
    (0, Dk.g)()
  },
  36734: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Sk,
      h: () => fk
    });
    const Dk = {};

    function fk(kk, ek) {
      Dk[kk] = ek
    }

    function Sk(kk) {
      return Dk[kk]
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);