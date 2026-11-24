export const id = 233;
export const ids = [233];
export const modules = {
  37110: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => sD
    });
    var pD = wD(37119);
    class sD {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    sD.Instances = [], sD.OnEnginesDisposedObservable = new pD.b, sD._LastCreatedScene = null, sD.UseFallbackTexture = !0, sD.FallbackTexture = ""
  },
  38658: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(38662);
    const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(zD) : null;
    class KD {
      static DeepCopy(DD, zD, wD, KD) {
        let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LD = function(DD) {
          const zD = [];
          do {
            const wD = Object.getOwnPropertyNames(DD);
            for (const DD of wD) - 1 === zD.indexOf(DD) && zD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return zD
        }(DD);
        for (const gD of LD) {
          if ("_" === gD[0] && (!KD || -1 === KD.indexOf(gD))) continue;
          if (gD.endsWith("Observable")) continue;
          if (wD && -1 !== wD.indexOf(gD)) continue;
          const LD = DD[gD],
            RD = typeof LD;
          if ("function" !== RD) try {
            if ("object" === RD)
              if (LD instanceof Uint8Array) zD[gD] = Uint8Array.from(LD);
              else if (LD instanceof Array) {
              if (zD[gD] = [], LD.length > 0)
                if ("object" == typeof LD[0])
                  for (let DD = 0; DD < LD.length; DD++) {
                    const wD = sD(LD[DD], zD, rD); - 1 === zD[gD].indexOf(wD) && zD[gD].push(wD)
                  } else zD[gD] = LD.slice(0)
            } else zD[gD] = sD(LD, zD, rD);
            else zD[gD] = LD
          } catch (cD) {
            pD.d.Warn(cD.message)
          }
        }
      }
    }
  },
  37891: (DD, zD, wD) => {
    function pD() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const zD = 16 * Math.random() | 0;
        return ("x" === DD ? zD : 3 & zD | 8).toString(16)
      }))
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  38662: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      static _CheckLimit(DD, zD) {
        let wD = pD._LogLimitOutputs[DD];
        return wD ? wD.current++ : (wD = {
          limit: zD,
          current: 1
        }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
      }
      static _GenerateLimitMessage(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wD = pD._LogLimitOutputs[DD];
        if (!wD || !pD.MessageLimitReached) return;
        const sD = this._Levels[zD];
        wD.current === wD.limit && pD[sD.name](pD.MessageLimitReached.replace(/%LIMIT%/g, "" + wD.limit).replace(/%TYPE%/g, sD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        pD._LogCache = DD + pD._LogCache, pD.OnNewCacheEntry && pD.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const zD = DD => DD < 10 ? "0" + DD : "" + DD,
          wD = new Date;
        return "[" + zD(wD.getHours()) + ":" + zD(wD.getMinutes()) + ":" + zD(wD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, zD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const sD = Array.isArray(zD) ? zD[0] : zD;
        if (void 0 !== wD && !pD._CheckLimit(sD, wD)) return;
        const KD = pD._FormatMessage(sD),
          rD = this._Levels[DD],
          LD = Array.isArray(zD) ? zD.slice(1) : [];
        rD.logFunc && rD.logFunc("BJS - " + KD, ...LD);
        const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
        pD._AddLogEntry(cD), pD._GenerateLimitMessage(sD, DD)
      }
      static get LogCache() {
        return pD._LogCache
      }
      static ClearLogCache() {
        pD._LogCache = "", pD._LogLimitOutputs = {}, pD.errorsCount = 0
      }
      static set LogLevels(DD) {
        pD.Log = pD._LogDisabled, pD.Warn = pD._LogDisabled, pD.Error = pD._LogDisabled;
        const zD = [pD.MessageLogLevel, pD.WarningLogLevel, pD.ErrorLogLevel];
        for (const wD of zD)
          if ((DD & wD) === wD) {
            const DD = this._Levels[wD];
            pD[DD.name] = pD._LogEnabled.bind(pD, wD)
          }
      }
    }
    pD.NoneLogLevel = 0, pD.MessageLogLevel = 1, pD.WarningLogLevel = 2, pD.ErrorLogLevel = 4, pD.AllLogLevel = 7, pD.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pD._LogCache = "", pD._LogLimitOutputs = {}, pD._Levels = [{}, {
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
    }], pD.errorsCount = 0, pD.Log = pD._LogEnabled.bind(pD, pD.MessageLogLevel), pD.Warn = pD._LogEnabled.bind(pD, pD.WarningLogLevel), pD.Error = pD._LogEnabled.bind(pD, pD.ErrorLogLevel)
  },
  37119: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => rD
    });
    const pD = "undefined" !== typeof WeakRef;
    class sD {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(DD, zD, wD, pD)
      }
      initialize(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = DD, this.skipNextObservers = zD, this.target = wD, this.currentTarget = pD, this
      }
    }
    class KD {
      constructor(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = DD, this.mask = zD, this.scope = wD, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(DD)
      }
    }
    class rD {
      static FromPromise(DD, zD) {
        const wD = new rD;
        return DD.then((DD => {
          wD.notifyObservers(DD)
        })).catch((DD => {
          if (!zD) throw DD;
          zD.notifyObservers(DD)
        })), wD
      }
      get observers() {
        return this._observers
      }
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = zD, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new sD(0), DD && (this._onObserverAdded = DD)
      }
      add(DD) {
        let zD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!DD) return null;
        const sD = new KD(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        sD.unregisterOnNextCall = wD, zD ? this._observers.unshift(sD) : this._observers.push(sD), this._onObserverAdded && this._onObserverAdded(sD), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(sD, this._lastNotifiedValue);
        const rD = pD ? new WeakRef(this) : {
          deref: () => this
        };
        return sD._remove = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const zD = rD.deref();
          zD && (DD ? zD.remove(sD) : zD._remove(sD))
        }, sD
      }
      addOnce(DD) {
        return this.add(DD, void 0, void 0, void 0, !0)
      }
      remove(DD) {
        if (!DD) return !1;
        DD._remove = null;
        return -1 !== this._observers.indexOf(DD) && (this._deferUnregister(DD), !0)
      }
      removeCallback(DD, zD) {
        for (let wD = 0; wD < this._observers.length; wD++) {
          const pD = this._observers[wD];
          if (!pD._willBeUnregistered && (pD.callback === DD && (!zD || zD === pD.scope))) return this._deferUnregister(pD), !0
        }
        return !1
      }
      _deferUnregister(DD) {
        DD._willBeUnregistered || (this._numObserversMarkedAsDeleted++, DD.unregisterOnNextCall = !1, DD._willBeUnregistered = !0, setTimeout((() => {
          this._remove(DD)
        }), 0))
      }
      _remove(DD) {
        let zD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!DD) return !1;
        const wD = this._observers.indexOf(DD);
        return -1 !== wD && (zD && this._numObserversMarkedAsDeleted--, this._observers.splice(wD, 1), !0)
      }
      makeObserverTopPriority(DD) {
        this._remove(DD, !1), this._observers.unshift(DD)
      }
      makeObserverBottomPriority(DD) {
        this._remove(DD, !1), this._observers.push(DD)
      }
      notifyObservers(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wD = arguments.length > 2 ? arguments[2] : void 0,
          pD = arguments.length > 3 ? arguments[3] : void 0,
          sD = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = DD), !this._observers.length) return !0;
        const KD = this._eventState;
        KD.mask = zD, KD.target = wD, KD.currentTarget = pD, KD.skipNextObservers = !1, KD.lastReturnValue = DD, KD.userInfo = sD;
        for (const rD of this._observers)
          if (!rD._willBeUnregistered && (rD.mask & zD && (rD.unregisterOnNextCall && this._deferUnregister(rD), rD.scope ? KD.lastReturnValue = rD.callback.apply(rD.scope, [DD, KD]) : KD.lastReturnValue = rD.callback(DD, KD)), KD.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(DD, zD) {
        let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zD), DD._willBeUnregistered) return;
        const pD = this._eventState;
        pD.mask = wD, pD.skipNextObservers = !1, DD.unregisterOnNextCall && this._deferUnregister(DD), DD.callback(zD, pD)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const DD = this._observers.pop();
          DD && (DD._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const DD = new rD;
        return DD._observers = this._observers.slice(0), DD
      }
      hasSpecificMask() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const zD of this._observers)
          if (zD.mask & DD || zD.mask === DD) return !0;
        return !1
      }
    }
  },
  61016: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      AsyncLoop: () => pD.c,
      RegisterTools: () => pD.g,
      Tools: () => pD.h,
      className: () => pD.j
    });
    var pD = wD(40027);
    (0, pD.g)()
  },
  37134: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD,
      i: () => sD
    });
    const pD = {};

    function sD(DD, zD) {
      pD[DD] = zD
    }

    function KD(DD) {
      return pD[DD]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);