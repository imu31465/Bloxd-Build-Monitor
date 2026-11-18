export const id = 216;
export const ids = [216];
export const modules = {
  36148: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => yB
    });
    var VB = dB(36150);
    class yB {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    yB.Instances = [], yB.OnEnginesDisposedObservable = new VB.e, yB._LastCreatedScene = null, yB.UseFallbackTexture = !0, yB.FallbackTexture = ""
  },
  37646: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(37651);
    const yB = (BB, TB, dB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : dB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(TB) : null;
    class pB {
      static DeepCopy(BB, TB, dB, pB) {
        let lB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const JB = function(BB) {
          const TB = [];
          do {
            const dB = Object.getOwnPropertyNames(BB);
            for (const BB of dB) - 1 === TB.indexOf(BB) && TB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return TB
        }(BB);
        for (const gB of JB) {
          if ("_" === gB[0] && (!pB || -1 === pB.indexOf(gB))) continue;
          if (gB.endsWith("Observable")) continue;
          if (dB && -1 !== dB.indexOf(gB)) continue;
          const JB = BB[gB],
            oB = typeof JB;
          if ("function" !== oB) try {
            if ("object" === oB)
              if (JB instanceof Uint8Array) TB[gB] = Uint8Array.from(JB);
              else if (JB instanceof Array) {
              if (TB[gB] = [], JB.length > 0)
                if ("object" == typeof JB[0])
                  for (let BB = 0; BB < JB.length; BB++) {
                    const dB = yB(JB[BB], TB, lB); - 1 === TB[gB].indexOf(dB) && TB[gB].push(dB)
                  } else TB[gB] = JB.slice(0)
            } else TB[gB] = yB(JB, TB, lB);
            else TB[gB] = JB
          } catch (YB) {
            VB.b.Warn(YB.message)
          }
        }
      }
    }
  },
  36822: (BB, TB, dB) => {
    function VB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const TB = 16 * Math.random() | 0;
        return ("x" === BB ? TB : 3 & TB | 8).toString(16)
      }))
    }
    dB.d(TB, {
      c: () => VB
    })
  },
  37651: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      static _CheckLimit(BB, TB) {
        let dB = VB._LogLimitOutputs[BB];
        return dB ? dB.current++ : (dB = {
          limit: TB,
          current: 1
        }, VB._LogLimitOutputs[BB] = dB), dB.current <= dB.limit
      }
      static _GenerateLimitMessage(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const dB = VB._LogLimitOutputs[BB];
        if (!dB || !VB.MessageLimitReached) return;
        const yB = this._Levels[TB];
        dB.current === dB.limit && VB[yB.name](VB.MessageLimitReached.replace(/%LIMIT%/g, "" + dB.limit).replace(/%TYPE%/g, yB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        VB._LogCache = BB + VB._LogCache, VB.OnNewCacheEntry && VB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const TB = BB => BB < 10 ? "0" + BB : "" + BB,
          dB = new Date;
        return "[" + TB(dB.getHours()) + ":" + TB(dB.getMinutes()) + ":" + TB(dB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, TB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const yB = Array.isArray(TB) ? TB[0] : TB;
        if (void 0 !== dB && !VB._CheckLimit(yB, dB)) return;
        const pB = VB._FormatMessage(yB),
          lB = this._Levels[BB],
          JB = Array.isArray(TB) ? TB.slice(1) : [];
        lB.logFunc && lB.logFunc("BJS - " + pB, ...JB);
        const YB = `<div style='color:${lB.color}'>${pB}</div><br>`;
        VB._AddLogEntry(YB), VB._GenerateLimitMessage(yB, BB)
      }
      static get LogCache() {
        return VB._LogCache
      }
      static ClearLogCache() {
        VB._LogCache = "", VB._LogLimitOutputs = {}, VB.errorsCount = 0
      }
      static set LogLevels(BB) {
        VB.Log = VB._LogDisabled, VB.Warn = VB._LogDisabled, VB.Error = VB._LogDisabled;
        const TB = [VB.MessageLogLevel, VB.WarningLogLevel, VB.ErrorLogLevel];
        for (const dB of TB)
          if ((BB & dB) === dB) {
            const BB = this._Levels[dB];
            VB[BB.name] = VB._LogEnabled.bind(VB, dB)
          }
      }
    }
    VB.NoneLogLevel = 0, VB.MessageLogLevel = 1, VB.WarningLogLevel = 2, VB.ErrorLogLevel = 4, VB.AllLogLevel = 7, VB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", VB._LogCache = "", VB._LogLimitOutputs = {}, VB._Levels = [{}, {
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
    }], VB.errorsCount = 0, VB.Log = VB._LogEnabled.bind(VB, VB.MessageLogLevel), VB.Warn = VB._LogEnabled.bind(VB, VB.WarningLogLevel), VB.Error = VB._LogEnabled.bind(VB, VB.ErrorLogLevel)
  },
  36150: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB
    });
    const VB = "undefined" !== typeof WeakRef;
    class yB {
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(BB, TB, dB, VB)
      }
      initialize(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = BB, this.skipNextObservers = TB, this.target = dB, this.currentTarget = VB, this
      }
    }
    class pB {
      constructor(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = BB, this.mask = TB, this.scope = dB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(BB)
      }
    }
    class lB {
      static FromPromise(BB, TB) {
        const dB = new lB;
        return BB.then((BB => {
          dB.notifyObservers(BB)
        })).catch((BB => {
          if (!TB) throw BB;
          TB.notifyObservers(BB)
        })), dB
      }
      get observers() {
        return this._observers
      }
      constructor(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = TB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new yB(0), BB && (this._onObserverAdded = BB)
      }
      add(BB) {
        let TB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          dB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!BB) return null;
        const yB = new pB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        yB.unregisterOnNextCall = dB, TB ? this._observers.unshift(yB) : this._observers.push(yB), this._onObserverAdded && this._onObserverAdded(yB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(yB, this._lastNotifiedValue);
        const lB = VB ? new WeakRef(this) : {
          deref: () => this
        };
        return yB._remove = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const TB = lB.deref();
          TB && (BB ? TB.remove(yB) : TB._remove(yB))
        }, yB
      }
      addOnce(BB) {
        return this.add(BB, void 0, void 0, void 0, !0)
      }
      remove(BB) {
        if (!BB) return !1;
        BB._remove = null;
        return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
      }
      removeCallback(BB, TB) {
        for (let dB = 0; dB < this._observers.length; dB++) {
          const VB = this._observers[dB];
          if (!VB._willBeUnregistered && (VB.callback === BB && (!TB || TB === VB.scope))) return this._deferUnregister(VB), !0
        }
        return !1
      }
      _deferUnregister(BB) {
        BB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, BB.unregisterOnNextCall = !1, BB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(BB)
        }), 0))
      }
      _remove(BB) {
        let TB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB) return !1;
        const dB = this._observers.indexOf(BB);
        return -1 !== dB && (TB && this._numObserversMarkedAsDeleted--, this._observers.splice(dB, 1), !0)
      }
      makeObserverTopPriority(BB) {
        this._remove(BB, !1), this._observers.unshift(BB)
      }
      makeObserverBottomPriority(BB) {
        this._remove(BB, !1), this._observers.push(BB)
      }
      notifyObservers(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          dB = arguments.length > 2 ? arguments[2] : void 0,
          VB = arguments.length > 3 ? arguments[3] : void 0,
          yB = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BB), !this._observers.length) return !0;
        const pB = this._eventState;
        pB.mask = TB, pB.target = dB, pB.currentTarget = VB, pB.skipNextObservers = !1, pB.lastReturnValue = BB, pB.userInfo = yB;
        for (const lB of this._observers)
          if (!lB._willBeUnregistered && (lB.mask & TB && (lB.unregisterOnNextCall && this._deferUnregister(lB), lB.scope ? pB.lastReturnValue = lB.callback.apply(lB.scope, [BB, pB]) : pB.lastReturnValue = lB.callback(BB, pB)), pB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(BB, TB) {
        let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = TB), BB._willBeUnregistered) return;
        const VB = this._eventState;
        VB.mask = dB, VB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(TB, VB)
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
        const BB = new lB;
        return BB._observers = this._observers.slice(0), BB
      }
      hasSpecificMask() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const TB of this._observers)
          if (TB.mask & BB || TB.mask === BB) return !0;
        return !1
      }
    }
  },
  59711: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      AsyncLoop: () => VB.c,
      RegisterTools: () => VB.g,
      Tools: () => VB.h,
      className: () => VB.i
    });
    var VB = dB(38848);
    (0, VB.g)()
  },
  36166: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      g: () => yB
    });
    const VB = {};

    function yB(BB, TB) {
      VB[BB] = TB
    }

    function pB(BB) {
      return VB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);