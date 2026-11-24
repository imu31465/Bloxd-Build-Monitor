export const id = 238;
export const ids = [238];
export const modules = {
  37197: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => nB
    });
    var QB = zB(37202);
    class nB {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    nB.Instances = [], nB.OnEnginesDisposedObservable = new QB.c, nB._LastCreatedScene = null, nB.UseFallbackTexture = !0, nB.FallbackTexture = ""
  },
  38780: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(38783);
    const nB = (BB, jB, zB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : zB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(jB) : null;
    class dB {
      static DeepCopy(BB, jB, zB, dB) {
        let IB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NB = function(BB) {
          const jB = [];
          do {
            const zB = Object.getOwnPropertyNames(BB);
            for (const BB of zB) - 1 === jB.indexOf(BB) && jB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return jB
        }(BB);
        for (const UB of NB) {
          if ("_" === UB[0] && (!dB || -1 === dB.indexOf(UB))) continue;
          if (UB.endsWith("Observable")) continue;
          if (zB && -1 !== zB.indexOf(UB)) continue;
          const NB = BB[UB],
            aB = typeof NB;
          if ("function" !== aB) try {
            if ("object" === aB)
              if (NB instanceof Uint8Array) jB[UB] = Uint8Array.from(NB);
              else if (NB instanceof Array) {
              if (jB[UB] = [], NB.length > 0)
                if ("object" == typeof NB[0])
                  for (let BB = 0; BB < NB.length; BB++) {
                    const zB = nB(NB[BB], jB, IB); - 1 === jB[UB].indexOf(zB) && jB[UB].push(zB)
                  } else jB[UB] = NB.slice(0)
            } else jB[UB] = nB(NB, jB, IB);
            else jB[UB] = NB
          } catch (uB) {
            QB.c.Warn(uB.message)
          }
        }
      }
    }
  },
  37987: (BB, jB, zB) => {
    function QB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const jB = 16 * Math.random() | 0;
        return ("x" === BB ? jB : 3 & jB | 8).toString(16)
      }))
    }
    zB.d(jB, {
      d: () => QB
    })
  },
  38783: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      static _CheckLimit(BB, jB) {
        let zB = QB._LogLimitOutputs[BB];
        return zB ? zB.current++ : (zB = {
          limit: jB,
          current: 1
        }, QB._LogLimitOutputs[BB] = zB), zB.current <= zB.limit
      }
      static _GenerateLimitMessage(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zB = QB._LogLimitOutputs[BB];
        if (!zB || !QB.MessageLimitReached) return;
        const nB = this._Levels[jB];
        zB.current === zB.limit && QB[nB.name](QB.MessageLimitReached.replace(/%LIMIT%/g, "" + zB.limit).replace(/%TYPE%/g, nB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        QB._LogCache = BB + QB._LogCache, QB.OnNewCacheEntry && QB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const jB = BB => BB < 10 ? "0" + BB : "" + BB,
          zB = new Date;
        return "[" + jB(zB.getHours()) + ":" + jB(zB.getMinutes()) + ":" + jB(zB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, jB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const nB = Array.isArray(jB) ? jB[0] : jB;
        if (void 0 !== zB && !QB._CheckLimit(nB, zB)) return;
        const dB = QB._FormatMessage(nB),
          IB = this._Levels[BB],
          NB = Array.isArray(jB) ? jB.slice(1) : [];
        IB.logFunc && IB.logFunc("BJS - " + dB, ...NB);
        const uB = `<div style='color:${IB.color}'>${dB}</div><br>`;
        QB._AddLogEntry(uB), QB._GenerateLimitMessage(nB, BB)
      }
      static get LogCache() {
        return QB._LogCache
      }
      static ClearLogCache() {
        QB._LogCache = "", QB._LogLimitOutputs = {}, QB.errorsCount = 0
      }
      static set LogLevels(BB) {
        QB.Log = QB._LogDisabled, QB.Warn = QB._LogDisabled, QB.Error = QB._LogDisabled;
        const jB = [QB.MessageLogLevel, QB.WarningLogLevel, QB.ErrorLogLevel];
        for (const zB of jB)
          if ((BB & zB) === zB) {
            const BB = this._Levels[zB];
            QB[BB.name] = QB._LogEnabled.bind(QB, zB)
          }
      }
    }
    QB.NoneLogLevel = 0, QB.MessageLogLevel = 1, QB.WarningLogLevel = 2, QB.ErrorLogLevel = 4, QB.AllLogLevel = 7, QB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QB._LogCache = "", QB._LogLimitOutputs = {}, QB._Levels = [{}, {
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
    }], QB.errorsCount = 0, QB.Log = QB._LogEnabled.bind(QB, QB.MessageLogLevel), QB.Warn = QB._LogEnabled.bind(QB, QB.WarningLogLevel), QB.Error = QB._LogEnabled.bind(QB, QB.ErrorLogLevel)
  },
  37202: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB
    });
    const QB = "undefined" !== typeof WeakRef;
    class nB {
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(BB, jB, zB, QB)
      }
      initialize(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = BB, this.skipNextObservers = jB, this.target = zB, this.currentTarget = QB, this
      }
    }
    class dB {
      constructor(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = BB, this.mask = jB, this.scope = zB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(BB)
      }
    }
    class IB {
      static FromPromise(BB, jB) {
        const zB = new IB;
        return BB.then((BB => {
          zB.notifyObservers(BB)
        })).catch((BB => {
          if (!jB) throw BB;
          jB.notifyObservers(BB)
        })), zB
      }
      get observers() {
        return this._observers
      }
      constructor(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = jB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new nB(0), BB && (this._onObserverAdded = BB)
      }
      add(BB) {
        let jB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          zB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!BB) return null;
        const nB = new dB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        nB.unregisterOnNextCall = zB, jB ? this._observers.unshift(nB) : this._observers.push(nB), this._onObserverAdded && this._onObserverAdded(nB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(nB, this._lastNotifiedValue);
        const IB = QB ? new WeakRef(this) : {
          deref: () => this
        };
        return nB._remove = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const jB = IB.deref();
          jB && (BB ? jB.remove(nB) : jB._remove(nB))
        }, nB
      }
      addOnce(BB) {
        return this.add(BB, void 0, void 0, void 0, !0)
      }
      remove(BB) {
        if (!BB) return !1;
        BB._remove = null;
        return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
      }
      removeCallback(BB, jB) {
        for (let zB = 0; zB < this._observers.length; zB++) {
          const QB = this._observers[zB];
          if (!QB._willBeUnregistered && (QB.callback === BB && (!jB || jB === QB.scope))) return this._deferUnregister(QB), !0
        }
        return !1
      }
      _deferUnregister(BB) {
        BB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, BB.unregisterOnNextCall = !1, BB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(BB)
        }), 0))
      }
      _remove(BB) {
        let jB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB) return !1;
        const zB = this._observers.indexOf(BB);
        return -1 !== zB && (jB && this._numObserversMarkedAsDeleted--, this._observers.splice(zB, 1), !0)
      }
      makeObserverTopPriority(BB) {
        this._remove(BB, !1), this._observers.unshift(BB)
      }
      makeObserverBottomPriority(BB) {
        this._remove(BB, !1), this._observers.push(BB)
      }
      notifyObservers(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zB = arguments.length > 2 ? arguments[2] : void 0,
          QB = arguments.length > 3 ? arguments[3] : void 0,
          nB = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BB), !this._observers.length) return !0;
        const dB = this._eventState;
        dB.mask = jB, dB.target = zB, dB.currentTarget = QB, dB.skipNextObservers = !1, dB.lastReturnValue = BB, dB.userInfo = nB;
        for (const IB of this._observers)
          if (!IB._willBeUnregistered && (IB.mask & jB && (IB.unregisterOnNextCall && this._deferUnregister(IB), IB.scope ? dB.lastReturnValue = IB.callback.apply(IB.scope, [BB, dB]) : dB.lastReturnValue = IB.callback(BB, dB)), dB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(BB, jB) {
        let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = jB), BB._willBeUnregistered) return;
        const QB = this._eventState;
        QB.mask = zB, QB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(jB, QB)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const BB = this._observers.pop();
          BB && (BB._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const BB = new IB;
        return BB._observers = this._observers.slice(0), BB
      }
      hasSpecificMask() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const jB of this._observers)
          if (jB.mask & BB || jB.mask === BB) return !0;
        return !1
      }
    }
  },
  61413: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      AsyncLoop: () => QB.e,
      RegisterTools: () => QB.h,
      Tools: () => QB.i,
      className: () => QB.l
    });
    var QB = zB(40164);
    (0, QB.h)()
  },
  37222: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      d: () => nB
    });
    const QB = {};

    function nB(BB, jB) {
      QB[BB] = jB
    }

    function dB(BB) {
      return QB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);