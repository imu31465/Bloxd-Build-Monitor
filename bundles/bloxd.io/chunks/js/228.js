export const id = 228;
export const ids = [228];
export const modules = {
  36925: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => MT
    });
    var lT = cT(36932);
    class MT {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    MT.Instances = [], MT.OnEnginesDisposedObservable = new lT.b, MT._LastCreatedScene = null, MT.UseFallbackTexture = !0, MT.FallbackTexture = ""
  },
  38507: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(38512);
    const MT = (TT, kT, cT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : cT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(kT) : null;
    class KT {
      static DeepCopy(TT, kT, cT, KT) {
        let OT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yT = function(TT) {
          const kT = [];
          do {
            const cT = Object.getOwnPropertyNames(TT);
            for (const TT of cT) - 1 === kT.indexOf(TT) && kT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return kT
        }(TT);
        for (const xT of yT) {
          if ("_" === xT[0] && (!KT || -1 === KT.indexOf(xT))) continue;
          if (xT.endsWith("Observable")) continue;
          if (cT && -1 !== cT.indexOf(xT)) continue;
          const yT = TT[xT],
            IT = typeof yT;
          if ("function" !== IT) try {
            if ("object" === IT)
              if (yT instanceof Uint8Array) kT[xT] = Uint8Array.from(yT);
              else if (yT instanceof Array) {
              if (kT[xT] = [], yT.length > 0)
                if ("object" == typeof yT[0])
                  for (let TT = 0; TT < yT.length; TT++) {
                    const cT = MT(yT[TT], kT, OT); - 1 === kT[xT].indexOf(cT) && kT[xT].push(cT)
                  } else kT[xT] = yT.slice(0)
            } else kT[xT] = MT(yT, kT, OT);
            else kT[xT] = yT
          } catch (fT) {
            lT.e.Warn(fT.message)
          }
        }
      }
    }
  },
  37760: (TT, kT, cT) => {
    function lT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const kT = 16 * Math.random() | 0;
        return ("x" === TT ? kT : 3 & kT | 8).toString(16)
      }))
    }
    cT.d(kT, {
      c: () => lT
    })
  },
  38512: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      static _CheckLimit(TT, kT) {
        let cT = lT._LogLimitOutputs[TT];
        return cT ? cT.current++ : (cT = {
          limit: kT,
          current: 1
        }, lT._LogLimitOutputs[TT] = cT), cT.current <= cT.limit
      }
      static _GenerateLimitMessage(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cT = lT._LogLimitOutputs[TT];
        if (!cT || !lT.MessageLimitReached) return;
        const MT = this._Levels[kT];
        cT.current === cT.limit && lT[MT.name](lT.MessageLimitReached.replace(/%LIMIT%/g, "" + cT.limit).replace(/%TYPE%/g, MT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        lT._LogCache = TT + lT._LogCache, lT.OnNewCacheEntry && lT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const kT = TT => TT < 10 ? "0" + TT : "" + TT,
          cT = new Date;
        return "[" + kT(cT.getHours()) + ":" + kT(cT.getMinutes()) + ":" + kT(cT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, kT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const MT = Array.isArray(kT) ? kT[0] : kT;
        if (void 0 !== cT && !lT._CheckLimit(MT, cT)) return;
        const KT = lT._FormatMessage(MT),
          OT = this._Levels[TT],
          yT = Array.isArray(kT) ? kT.slice(1) : [];
        OT.logFunc && OT.logFunc("BJS - " + KT, ...yT);
        const fT = `<div style='color:${OT.color}'>${KT}</div><br>`;
        lT._AddLogEntry(fT), lT._GenerateLimitMessage(MT, TT)
      }
      static get LogCache() {
        return lT._LogCache
      }
      static ClearLogCache() {
        lT._LogCache = "", lT._LogLimitOutputs = {}, lT.errorsCount = 0
      }
      static set LogLevels(TT) {
        lT.Log = lT._LogDisabled, lT.Warn = lT._LogDisabled, lT.Error = lT._LogDisabled;
        const kT = [lT.MessageLogLevel, lT.WarningLogLevel, lT.ErrorLogLevel];
        for (const cT of kT)
          if ((TT & cT) === cT) {
            const TT = this._Levels[cT];
            lT[TT.name] = lT._LogEnabled.bind(lT, cT)
          }
      }
    }
    lT.NoneLogLevel = 0, lT.MessageLogLevel = 1, lT.WarningLogLevel = 2, lT.ErrorLogLevel = 4, lT.AllLogLevel = 7, lT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", lT._LogCache = "", lT._LogLimitOutputs = {}, lT._Levels = [{}, {
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
    }], lT.errorsCount = 0, lT.Log = lT._LogEnabled.bind(lT, lT.MessageLogLevel), lT.Warn = lT._LogEnabled.bind(lT, lT.WarningLogLevel), lT.Error = lT._LogEnabled.bind(lT, lT.ErrorLogLevel)
  },
  36932: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT
    });
    const lT = "undefined" !== typeof WeakRef;
    class MT {
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(TT, kT, cT, lT)
      }
      initialize(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = TT, this.skipNextObservers = kT, this.target = cT, this.currentTarget = lT, this
      }
    }
    class KT {
      constructor(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = TT, this.mask = kT, this.scope = cT, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(TT)
      }
    }
    class OT {
      static FromPromise(TT, kT) {
        const cT = new OT;
        return TT.then((TT => {
          cT.notifyObservers(TT)
        })).catch((TT => {
          if (!kT) throw TT;
          kT.notifyObservers(TT)
        })), cT
      }
      get observers() {
        return this._observers
      }
      constructor(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = kT, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new MT(0), TT && (this._onObserverAdded = TT)
      }
      add(TT) {
        let kT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!TT) return null;
        const MT = new KT(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        MT.unregisterOnNextCall = cT, kT ? this._observers.unshift(MT) : this._observers.push(MT), this._onObserverAdded && this._onObserverAdded(MT), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(MT, this._lastNotifiedValue);
        const OT = lT ? new WeakRef(this) : {
          deref: () => this
        };
        return MT._remove = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const kT = OT.deref();
          kT && (TT ? kT.remove(MT) : kT._remove(MT))
        }, MT
      }
      addOnce(TT) {
        return this.add(TT, void 0, void 0, void 0, !0)
      }
      remove(TT) {
        if (!TT) return !1;
        TT._remove = null;
        return -1 !== this._observers.indexOf(TT) && (this._deferUnregister(TT), !0)
      }
      removeCallback(TT, kT) {
        for (let cT = 0; cT < this._observers.length; cT++) {
          const lT = this._observers[cT];
          if (!lT._willBeUnregistered && (lT.callback === TT && (!kT || kT === lT.scope))) return this._deferUnregister(lT), !0
        }
        return !1
      }
      _deferUnregister(TT) {
        TT._willBeUnregistered || (this._numObserversMarkedAsDeleted++, TT.unregisterOnNextCall = !1, TT._willBeUnregistered = !0, setTimeout((() => {
          this._remove(TT)
        }), 0))
      }
      _remove(TT) {
        let kT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT) return !1;
        const cT = this._observers.indexOf(TT);
        return -1 !== cT && (kT && this._numObserversMarkedAsDeleted--, this._observers.splice(cT, 1), !0)
      }
      makeObserverTopPriority(TT) {
        this._remove(TT, !1), this._observers.unshift(TT)
      }
      makeObserverBottomPriority(TT) {
        this._remove(TT, !1), this._observers.push(TT)
      }
      notifyObservers(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cT = arguments.length > 2 ? arguments[2] : void 0,
          lT = arguments.length > 3 ? arguments[3] : void 0,
          MT = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = TT), !this._observers.length) return !0;
        const KT = this._eventState;
        KT.mask = kT, KT.target = cT, KT.currentTarget = lT, KT.skipNextObservers = !1, KT.lastReturnValue = TT, KT.userInfo = MT;
        for (const OT of this._observers)
          if (!OT._willBeUnregistered && (OT.mask & kT && (OT.unregisterOnNextCall && this._deferUnregister(OT), OT.scope ? KT.lastReturnValue = OT.callback.apply(OT.scope, [TT, KT]) : KT.lastReturnValue = OT.callback(TT, KT)), KT.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(TT, kT) {
        let cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = kT), TT._willBeUnregistered) return;
        const lT = this._eventState;
        lT.mask = cT, lT.skipNextObservers = !1, TT.unregisterOnNextCall && this._deferUnregister(TT), TT.callback(kT, lT)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const TT = this._observers.pop();
          TT && (TT._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const TT = new OT;
        return TT._observers = this._observers.slice(0), TT
      }
      hasSpecificMask() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const kT of this._observers)
          if (kT.mask & TT || kT.mask === TT) return !0;
        return !1
      }
    }
  },
  60548: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      AsyncLoop: () => lT.d,
      RegisterTools: () => lT.g,
      Tools: () => lT.h,
      className: () => lT.i
    });
    var lT = cT(39727);
    (0, lT.g)()
  },
  36949: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => KT,
      g: () => MT
    });
    const lT = {};

    function MT(TT, kT) {
      lT[TT] = kT
    }

    function KT(TT) {
      return lT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);