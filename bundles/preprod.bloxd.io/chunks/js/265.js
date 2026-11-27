export const id = 265;
export const ids = [265];
export const modules = {
  38270: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => EW
    });
    var mW = OW(38276);
    class EW {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    EW.Instances = [], EW.OnEnginesDisposedObservable = new mW.e, EW._LastCreatedScene = null, EW.UseFallbackTexture = !0, EW.FallbackTexture = ""
  },
  39908: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(39911);
    const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(iW) : null;
    class NW {
      static DeepCopy(WW, iW, OW, NW) {
        let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LW = function(WW) {
          const iW = [];
          do {
            const OW = Object.getOwnPropertyNames(WW);
            for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return iW
        }(WW);
        for (const wW of LW) {
          if ("_" === wW[0] && (!NW || -1 === NW.indexOf(wW))) continue;
          if (wW.endsWith("Observable")) continue;
          if (OW && -1 !== OW.indexOf(wW)) continue;
          const LW = WW[wW],
            tW = typeof LW;
          if ("function" !== tW) try {
            if ("object" === tW)
              if (LW instanceof Uint8Array) iW[wW] = Uint8Array.from(LW);
              else if (LW instanceof Array) {
              if (iW[wW] = [], LW.length > 0)
                if ("object" == typeof LW[0])
                  for (let WW = 0; WW < LW.length; WW++) {
                    const OW = EW(LW[WW], iW, PW); - 1 === iW[wW].indexOf(OW) && iW[wW].push(OW)
                  } else iW[wW] = LW.slice(0)
            } else iW[wW] = EW(LW, iW, PW);
            else iW[wW] = LW
          } catch (cW) {
            mW.b.Warn(cW.message)
          }
        }
      }
    }
  },
  39088: (WW, iW, OW) => {
    function mW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const iW = 16 * Math.random() | 0;
        return ("x" === WW ? iW : 3 & iW | 8).toString(16)
      }))
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  39911: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    class mW {
      static _CheckLimit(WW, iW) {
        let OW = mW._LogLimitOutputs[WW];
        return OW ? OW.current++ : (OW = {
          limit: iW,
          current: 1
        }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
      }
      static _GenerateLimitMessage(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const OW = mW._LogLimitOutputs[WW];
        if (!OW || !mW.MessageLimitReached) return;
        const EW = this._Levels[iW];
        OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        mW._LogCache = WW + mW._LogCache, mW.OnNewCacheEntry && mW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const iW = WW => WW < 10 ? "0" + WW : "" + WW,
          OW = new Date;
        return "[" + iW(OW.getHours()) + ":" + iW(OW.getMinutes()) + ":" + iW(OW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, iW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const EW = Array.isArray(iW) ? iW[0] : iW;
        if (void 0 !== OW && !mW._CheckLimit(EW, OW)) return;
        const NW = mW._FormatMessage(EW),
          PW = this._Levels[WW],
          LW = Array.isArray(iW) ? iW.slice(1) : [];
        PW.logFunc && PW.logFunc("BJS - " + NW, ...LW);
        const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
        mW._AddLogEntry(cW), mW._GenerateLimitMessage(EW, WW)
      }
      static get LogCache() {
        return mW._LogCache
      }
      static ClearLogCache() {
        mW._LogCache = "", mW._LogLimitOutputs = {}, mW.errorsCount = 0
      }
      static set LogLevels(WW) {
        mW.Log = mW._LogDisabled, mW.Warn = mW._LogDisabled, mW.Error = mW._LogDisabled;
        const iW = [mW.MessageLogLevel, mW.WarningLogLevel, mW.ErrorLogLevel];
        for (const OW of iW)
          if ((WW & OW) === OW) {
            const WW = this._Levels[OW];
            mW[WW.name] = mW._LogEnabled.bind(mW, OW)
          }
      }
    }
    mW.NoneLogLevel = 0, mW.MessageLogLevel = 1, mW.WarningLogLevel = 2, mW.ErrorLogLevel = 4, mW.AllLogLevel = 7, mW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", mW._LogCache = "", mW._LogLimitOutputs = {}, mW._Levels = [{}, {
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
    }], mW.errorsCount = 0, mW.Log = mW._LogEnabled.bind(mW, mW.MessageLogLevel), mW.Warn = mW._LogEnabled.bind(mW, mW.WarningLogLevel), mW.Error = mW._LogEnabled.bind(mW, mW.ErrorLogLevel)
  },
  38276: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW
    });
    const mW = "undefined" !== typeof WeakRef;
    class EW {
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(WW, iW, OW, mW)
      }
      initialize(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = WW, this.skipNextObservers = iW, this.target = OW, this.currentTarget = mW, this
      }
    }
    class NW {
      constructor(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = WW, this.mask = iW, this.scope = OW, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(WW)
      }
    }
    class PW {
      static FromPromise(WW, iW) {
        const OW = new PW;
        return WW.then((WW => {
          OW.notifyObservers(WW)
        })).catch((WW => {
          if (!iW) throw WW;
          iW.notifyObservers(WW)
        })), OW
      }
      get observers() {
        return this._observers
      }
      constructor(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = iW, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new EW(0), WW && (this._onObserverAdded = WW)
      }
      add(WW) {
        let iW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          OW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!WW) return null;
        const EW = new NW(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        EW.unregisterOnNextCall = OW, iW ? this._observers.unshift(EW) : this._observers.push(EW), this._onObserverAdded && this._onObserverAdded(EW), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(EW, this._lastNotifiedValue);
        const PW = mW ? new WeakRef(this) : {
          deref: () => this
        };
        return EW._remove = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const iW = PW.deref();
          iW && (WW ? iW.remove(EW) : iW._remove(EW))
        }, EW
      }
      addOnce(WW) {
        return this.add(WW, void 0, void 0, void 0, !0)
      }
      remove(WW) {
        if (!WW) return !1;
        WW._remove = null;
        return -1 !== this._observers.indexOf(WW) && (this._deferUnregister(WW), !0)
      }
      removeCallback(WW, iW) {
        for (let OW = 0; OW < this._observers.length; OW++) {
          const mW = this._observers[OW];
          if (!mW._willBeUnregistered && (mW.callback === WW && (!iW || iW === mW.scope))) return this._deferUnregister(mW), !0
        }
        return !1
      }
      _deferUnregister(WW) {
        WW._willBeUnregistered || (this._numObserversMarkedAsDeleted++, WW.unregisterOnNextCall = !1, WW._willBeUnregistered = !0, setTimeout((() => {
          this._remove(WW)
        }), 0))
      }
      _remove(WW) {
        let iW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!WW) return !1;
        const OW = this._observers.indexOf(WW);
        return -1 !== OW && (iW && this._numObserversMarkedAsDeleted--, this._observers.splice(OW, 1), !0)
      }
      makeObserverTopPriority(WW) {
        this._remove(WW, !1), this._observers.unshift(WW)
      }
      makeObserverBottomPriority(WW) {
        this._remove(WW, !1), this._observers.push(WW)
      }
      notifyObservers(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          OW = arguments.length > 2 ? arguments[2] : void 0,
          mW = arguments.length > 3 ? arguments[3] : void 0,
          EW = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WW), !this._observers.length) return !0;
        const NW = this._eventState;
        NW.mask = iW, NW.target = OW, NW.currentTarget = mW, NW.skipNextObservers = !1, NW.lastReturnValue = WW, NW.userInfo = EW;
        for (const PW of this._observers)
          if (!PW._willBeUnregistered && (PW.mask & iW && (PW.unregisterOnNextCall && this._deferUnregister(PW), PW.scope ? NW.lastReturnValue = PW.callback.apply(PW.scope, [WW, NW]) : NW.lastReturnValue = PW.callback(WW, NW)), NW.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(WW, iW) {
        let OW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = iW), WW._willBeUnregistered) return;
        const mW = this._eventState;
        mW.mask = OW, mW.skipNextObservers = !1, WW.unregisterOnNextCall && this._deferUnregister(WW), WW.callback(iW, mW)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const WW = this._observers.pop();
          WW && (WW._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const WW = new PW;
        return WW._observers = this._observers.slice(0), WW
      }
      hasSpecificMask() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const iW of this._observers)
          if (iW.mask & WW || iW.mask === WW) return !0;
        return !1
      }
    }
  },
  64385: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      AsyncLoop: () => mW.b,
      RegisterTools: () => mW.c,
      Tools: () => mW.f,
      className: () => mW.h
    });
    var mW = OW(41620);
    (0, mW.c)()
  },
  38299: (WW, iW, OW) => {
    OW.d(iW, {
      d: () => NW,
      h: () => EW
    });
    const mW = {};

    function EW(WW, iW) {
      mW[WW] = iW
    }

    function NW(WW) {
      return mW[WW]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);