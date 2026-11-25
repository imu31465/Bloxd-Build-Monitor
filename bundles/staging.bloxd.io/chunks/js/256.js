export const id = 256;
export const ids = [256];
export const modules = {
  38064: (MM, rM, iM) => {
    iM.d(rM, {
      c: () => SM
    });
    var OM = iM(38068);
    class SM {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    SM.Instances = [], SM.OnEnginesDisposedObservable = new OM.d, SM._LastCreatedScene = null, SM.UseFallbackTexture = !0, SM.FallbackTexture = ""
  },
  39705: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(39711);
    const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
      ...MM
    } : null : MM.clone(rM) : null;
    class jM {
      static DeepCopy(MM, rM, iM, jM) {
        let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const PM = function(MM) {
          const rM = [];
          do {
            const iM = Object.getOwnPropertyNames(MM);
            for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
          } while (MM = Object.getPrototypeOf(MM));
          return rM
        }(MM);
        for (const QM of PM) {
          if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
          if (QM.endsWith("Observable")) continue;
          if (iM && -1 !== iM.indexOf(QM)) continue;
          const PM = MM[QM],
            zM = typeof PM;
          if ("function" !== zM) try {
            if ("object" === zM)
              if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
              else if (PM instanceof Array) {
              if (rM[QM] = [], PM.length > 0)
                if ("object" == typeof PM[0])
                  for (let MM = 0; MM < PM.length; MM++) {
                    const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
                  } else rM[QM] = PM.slice(0)
            } else rM[QM] = SM(PM, rM, aM);
            else rM[QM] = PM
          } catch (nM) {
            OM.e.Warn(nM.message)
          }
        }
      }
    }
  },
  38885: (MM, rM, iM) => {
    function OM() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
        const rM = 16 * Math.random() | 0;
        return ("x" === MM ? rM : 3 & rM | 8).toString(16)
      }))
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  39711: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static _CheckLimit(MM, rM) {
        let iM = OM._LogLimitOutputs[MM];
        return iM ? iM.current++ : (iM = {
          limit: rM,
          current: 1
        }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
      }
      static _GenerateLimitMessage(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const iM = OM._LogLimitOutputs[MM];
        if (!iM || !OM.MessageLimitReached) return;
        const SM = this._Levels[rM];
        iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
      }
      static _AddLogEntry(MM) {
        OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
      }
      static _FormatMessage(MM) {
        const rM = MM => MM < 10 ? "0" + MM : "" + MM,
          iM = new Date;
        return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
      }
      static _LogDisabled(MM, rM) {}
      static _LogEnabled() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const SM = Array.isArray(rM) ? rM[0] : rM;
        if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
        const jM = OM._FormatMessage(SM),
          aM = this._Levels[MM],
          PM = Array.isArray(rM) ? rM.slice(1) : [];
        aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
        const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
        OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
      }
      static get LogCache() {
        return OM._LogCache
      }
      static ClearLogCache() {
        OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
      }
      static set LogLevels(MM) {
        OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
        const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
        for (const iM of rM)
          if ((MM & iM) === iM) {
            const MM = this._Levels[iM];
            OM[MM.name] = OM._LogEnabled.bind(OM, iM)
          }
      }
    }
    OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels = [{}, {
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
    }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
  },
  38068: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => aM
    });
    const OM = "undefined" !== typeof WeakRef;
    class SM {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(MM, rM, iM, OM)
      }
      initialize(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = MM, this.skipNextObservers = rM, this.target = iM, this.currentTarget = OM, this
      }
    }
    class jM {
      constructor(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = MM, this.mask = rM, this.scope = iM, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(MM)
      }
    }
    class aM {
      static FromPromise(MM, rM) {
        const iM = new aM;
        return MM.then((MM => {
          iM.notifyObservers(MM)
        })).catch((MM => {
          if (!rM) throw MM;
          rM.notifyObservers(MM)
        })), iM
      }
      get observers() {
        return this._observers
      }
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = rM, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new SM(0), MM && (this._onObserverAdded = MM)
      }
      add(MM) {
        let rM = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          iM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!MM) return null;
        const SM = new jM(MM, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        SM.unregisterOnNextCall = iM, rM ? this._observers.unshift(SM) : this._observers.push(SM), this._onObserverAdded && this._onObserverAdded(SM), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(SM, this._lastNotifiedValue);
        const aM = OM ? new WeakRef(this) : {
          deref: () => this
        };
        return SM._remove = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const rM = aM.deref();
          rM && (MM ? rM.remove(SM) : rM._remove(SM))
        }, SM
      }
      addOnce(MM) {
        return this.add(MM, void 0, void 0, void 0, !0)
      }
      remove(MM) {
        if (!MM) return !1;
        MM._remove = null;
        return -1 !== this._observers.indexOf(MM) && (this._deferUnregister(MM), !0)
      }
      removeCallback(MM, rM) {
        for (let iM = 0; iM < this._observers.length; iM++) {
          const OM = this._observers[iM];
          if (!OM._willBeUnregistered && (OM.callback === MM && (!rM || rM === OM.scope))) return this._deferUnregister(OM), !0
        }
        return !1
      }
      _deferUnregister(MM) {
        MM._willBeUnregistered || (this._numObserversMarkedAsDeleted++, MM.unregisterOnNextCall = !1, MM._willBeUnregistered = !0, setTimeout((() => {
          this._remove(MM)
        }), 0))
      }
      _remove(MM) {
        let rM = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!MM) return !1;
        const iM = this._observers.indexOf(MM);
        return -1 !== iM && (rM && this._numObserversMarkedAsDeleted--, this._observers.splice(iM, 1), !0)
      }
      makeObserverTopPriority(MM) {
        this._remove(MM, !1), this._observers.unshift(MM)
      }
      makeObserverBottomPriority(MM) {
        this._remove(MM, !1), this._observers.push(MM)
      }
      notifyObservers(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          iM = arguments.length > 2 ? arguments[2] : void 0,
          OM = arguments.length > 3 ? arguments[3] : void 0,
          SM = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = MM), !this._observers.length) return !0;
        const jM = this._eventState;
        jM.mask = rM, jM.target = iM, jM.currentTarget = OM, jM.skipNextObservers = !1, jM.lastReturnValue = MM, jM.userInfo = SM;
        for (const aM of this._observers)
          if (!aM._willBeUnregistered && (aM.mask & rM && (aM.unregisterOnNextCall && this._deferUnregister(aM), aM.scope ? jM.lastReturnValue = aM.callback.apply(aM.scope, [MM, jM]) : jM.lastReturnValue = aM.callback(MM, jM)), jM.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(MM, rM) {
        let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = rM), MM._willBeUnregistered) return;
        const OM = this._eventState;
        OM.mask = iM, OM.skipNextObservers = !1, MM.unregisterOnNextCall && this._deferUnregister(MM), MM.callback(rM, OM)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const MM = this._observers.pop();
          MM && (MM._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const MM = new aM;
        return MM._observers = this._observers.slice(0), MM
      }
      hasSpecificMask() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const rM of this._observers)
          if (rM.mask & MM || rM.mask === MM) return !0;
        return !1
      }
    }
  },
  63884: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      AsyncLoop: () => OM.c,
      RegisterTools: () => OM.d,
      Tools: () => OM.e,
      className: () => OM.g
    });
    var OM = iM(41205);
    (0, OM.d)()
  },
  38085: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      e: () => SM
    });
    const OM = {};

    function SM(MM, rM) {
      OM[MM] = rM
    }

    function jM(MM) {
      return OM[MM]
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);