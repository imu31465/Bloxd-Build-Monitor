export const id = 260;
export const ids = [260];
export const modules = {
  37989: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(37997);
    class rH {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    rH.Instances = [], rH.OnEnginesDisposedObservable = new AH.d, rH._LastCreatedScene = null, rH.UseFallbackTexture = !0, rH.FallbackTexture = ""
  },
  39588: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(39595);
    const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
      ...HH
    } : null : HH.clone(BH) : null;
    class SH {
      static DeepCopy(HH, BH, LH, SH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const tH = function(HH) {
          const BH = [];
          do {
            const LH = Object.getOwnPropertyNames(HH);
            for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
          } while (HH = Object.getPrototypeOf(HH));
          return BH
        }(HH);
        for (const CH of tH) {
          if ("_" === CH[0] && (!SH || -1 === SH.indexOf(CH))) continue;
          if (CH.endsWith("Observable")) continue;
          if (LH && -1 !== LH.indexOf(CH)) continue;
          const tH = HH[CH],
            EH = typeof tH;
          if ("function" !== EH) try {
            if ("object" === EH)
              if (tH instanceof Uint8Array) BH[CH] = Uint8Array.from(tH);
              else if (tH instanceof Array) {
              if (BH[CH] = [], tH.length > 0)
                if ("object" == typeof tH[0])
                  for (let HH = 0; HH < tH.length; HH++) {
                    const LH = rH(tH[HH], BH, hH); - 1 === BH[CH].indexOf(LH) && BH[CH].push(LH)
                  } else BH[CH] = tH.slice(0)
            } else BH[CH] = rH(tH, BH, hH);
            else BH[CH] = tH
          } catch (zH) {
            AH.e.Warn(zH.message)
          }
        }
      }
    }
  },
  38790: (HH, BH, LH) => {
    function AH() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
        const BH = 16 * Math.random() | 0;
        return ("x" === HH ? BH : 3 & BH | 8).toString(16)
      }))
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  39595: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      static _CheckLimit(HH, BH) {
        let LH = AH._LogLimitOutputs[HH];
        return LH ? LH.current++ : (LH = {
          limit: BH,
          current: 1
        }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
      }
      static _GenerateLimitMessage(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const LH = AH._LogLimitOutputs[HH];
        if (!LH || !AH.MessageLimitReached) return;
        const rH = this._Levels[BH];
        LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
      }
      static _AddLogEntry(HH) {
        AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
      }
      static _FormatMessage(HH) {
        const BH = HH => HH < 10 ? "0" + HH : "" + HH,
          LH = new Date;
        return "[" + BH(LH.getHours()) + ":" + BH(LH.getMinutes()) + ":" + BH(LH.getSeconds()) + "]: " + HH
      }
      static _LogDisabled(HH, BH) {}
      static _LogEnabled() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const rH = Array.isArray(BH) ? BH[0] : BH;
        if (void 0 !== LH && !AH._CheckLimit(rH, LH)) return;
        const SH = AH._FormatMessage(rH),
          hH = this._Levels[HH],
          tH = Array.isArray(BH) ? BH.slice(1) : [];
        hH.logFunc && hH.logFunc("BJS - " + SH, ...tH);
        const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
        AH._AddLogEntry(zH), AH._GenerateLimitMessage(rH, HH)
      }
      static get LogCache() {
        return AH._LogCache
      }
      static ClearLogCache() {
        AH._LogCache = "", AH._LogLimitOutputs = {}, AH.errorsCount = 0
      }
      static set LogLevels(HH) {
        AH.Log = AH._LogDisabled, AH.Warn = AH._LogDisabled, AH.Error = AH._LogDisabled;
        const BH = [AH.MessageLogLevel, AH.WarningLogLevel, AH.ErrorLogLevel];
        for (const LH of BH)
          if ((HH & LH) === LH) {
            const HH = this._Levels[LH];
            AH[HH.name] = AH._LogEnabled.bind(AH, LH)
          }
      }
    }
    AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels = [{}, {
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
    }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
  },
  37997: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => hH
    });
    const AH = "undefined" !== typeof WeakRef;
    class rH {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(HH, BH, LH, AH)
      }
      initialize(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = HH, this.skipNextObservers = BH, this.target = LH, this.currentTarget = AH, this
      }
    }
    class SH {
      constructor(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = HH, this.mask = BH, this.scope = LH, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(HH)
      }
    }
    class hH {
      static FromPromise(HH, BH) {
        const LH = new hH;
        return HH.then((HH => {
          LH.notifyObservers(HH)
        })).catch((HH => {
          if (!BH) throw HH;
          BH.notifyObservers(HH)
        })), LH
      }
      get observers() {
        return this._observers
      }
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = BH, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new rH(0), HH && (this._onObserverAdded = HH)
      }
      add(HH) {
        let BH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          LH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!HH) return null;
        const rH = new SH(HH, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        rH.unregisterOnNextCall = LH, BH ? this._observers.unshift(rH) : this._observers.push(rH), this._onObserverAdded && this._onObserverAdded(rH), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(rH, this._lastNotifiedValue);
        const hH = AH ? new WeakRef(this) : {
          deref: () => this
        };
        return rH._remove = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const BH = hH.deref();
          BH && (HH ? BH.remove(rH) : BH._remove(rH))
        }, rH
      }
      addOnce(HH) {
        return this.add(HH, void 0, void 0, void 0, !0)
      }
      remove(HH) {
        if (!HH) return !1;
        HH._remove = null;
        return -1 !== this._observers.indexOf(HH) && (this._deferUnregister(HH), !0)
      }
      removeCallback(HH, BH) {
        for (let LH = 0; LH < this._observers.length; LH++) {
          const AH = this._observers[LH];
          if (!AH._willBeUnregistered && (AH.callback === HH && (!BH || BH === AH.scope))) return this._deferUnregister(AH), !0
        }
        return !1
      }
      _deferUnregister(HH) {
        HH._willBeUnregistered || (this._numObserversMarkedAsDeleted++, HH.unregisterOnNextCall = !1, HH._willBeUnregistered = !0, setTimeout((() => {
          this._remove(HH)
        }), 0))
      }
      _remove(HH) {
        let BH = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!HH) return !1;
        const LH = this._observers.indexOf(HH);
        return -1 !== LH && (BH && this._numObserversMarkedAsDeleted--, this._observers.splice(LH, 1), !0)
      }
      makeObserverTopPriority(HH) {
        this._remove(HH, !1), this._observers.unshift(HH)
      }
      makeObserverBottomPriority(HH) {
        this._remove(HH, !1), this._observers.push(HH)
      }
      notifyObservers(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          LH = arguments.length > 2 ? arguments[2] : void 0,
          AH = arguments.length > 3 ? arguments[3] : void 0,
          rH = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = HH), !this._observers.length) return !0;
        const SH = this._eventState;
        SH.mask = BH, SH.target = LH, SH.currentTarget = AH, SH.skipNextObservers = !1, SH.lastReturnValue = HH, SH.userInfo = rH;
        for (const hH of this._observers)
          if (!hH._willBeUnregistered && (hH.mask & BH && (hH.unregisterOnNextCall && this._deferUnregister(hH), hH.scope ? SH.lastReturnValue = hH.callback.apply(hH.scope, [HH, SH]) : SH.lastReturnValue = hH.callback(HH, SH)), SH.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BH), HH._willBeUnregistered) return;
        const AH = this._eventState;
        AH.mask = LH, AH.skipNextObservers = !1, HH.unregisterOnNextCall && this._deferUnregister(HH), HH.callback(BH, AH)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const HH = this._observers.pop();
          HH && (HH._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const HH = new hH;
        return HH._observers = this._observers.slice(0), HH
      }
      hasSpecificMask() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const BH of this._observers)
          if (BH.mask & HH || BH.mask === HH) return !0;
        return !1
      }
    }
  },
  64093: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      AsyncLoop: () => AH.e,
      RegisterTools: () => AH.f,
      Tools: () => AH.i,
      className: () => AH.j
    });
    var AH = LH(41387);
    (0, AH.f)()
  },
  38012: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => SH,
      f: () => rH
    });
    const AH = {};

    function rH(HH, BH) {
      AH[HH] = BH
    }

    function SH(HH) {
      return AH[HH]
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);