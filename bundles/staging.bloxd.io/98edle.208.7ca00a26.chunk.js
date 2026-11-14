export const id = 208;
export const ids = [208];
export const modules = {
  35344: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => CW
    });
    var wW = MW(35346);
    class CW {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    CW.Instances = [], CW.OnEnginesDisposedObservable = new wW.c, CW._LastCreatedScene = null, CW.UseFallbackTexture = !0, CW.FallbackTexture = ""
  },
  36716: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(36721);
    const CW = (WW, RW, MW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : MW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(RW) : null;
    class zR {
      static DeepCopy(WW, RW, MW, zR) {
        let AW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bR = function(WW) {
          const RW = [];
          do {
            const MW = Object.getOwnPropertyNames(WW);
            for (const WW of MW) - 1 === RW.indexOf(WW) && RW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return RW
        }(WW);
        for (const NW of bR) {
          if ("_" === NW[0] && (!zR || -1 === zR.indexOf(NW))) continue;
          if (NW.endsWith("Observable")) continue;
          if (MW && -1 !== MW.indexOf(NW)) continue;
          const bR = WW[NW],
            eW = typeof bR;
          if ("function" !== eW) try {
            if ("object" === eW)
              if (bR instanceof Uint8Array) RW[NW] = Uint8Array.from(bR);
              else if (bR instanceof Array) {
              if (RW[NW] = [], bR.length > 0)
                if ("object" == typeof bR[0])
                  for (let WW = 0; WW < bR.length; WW++) {
                    const MW = CW(bR[WW], RW, AW); - 1 === RW[NW].indexOf(MW) && RW[NW].push(MW)
                  } else RW[NW] = bR.slice(0)
            } else RW[NW] = CW(bR, RW, AW);
            else RW[NW] = bR
          } catch (yR) {
            wW.b.Warn(yR.message)
          }
        }
      }
    }
  },
  35984: (WW, RW, MW) => {
    function wW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const RW = 16 * Math.random() | 0;
        return ("x" === WW ? RW : 3 & RW | 8).toString(16)
      }))
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  36721: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
      static _CheckLimit(WW, RW) {
        let MW = wW._LogLimitOutputs[WW];
        return MW ? MW.current++ : (MW = {
          limit: RW,
          current: 1
        }, wW._LogLimitOutputs[WW] = MW), MW.current <= MW.limit
      }
      static _GenerateLimitMessage(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const MW = wW._LogLimitOutputs[WW];
        if (!MW || !wW.MessageLimitReached) return;
        const CW = this._Levels[RW];
        MW.current === MW.limit && wW[CW.name](wW.MessageLimitReached.replace(/%LIMIT%/g, "" + MW.limit).replace(/%TYPE%/g, CW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        wW._LogCache = WW + wW._LogCache, wW.OnNewCacheEntry && wW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const RW = WW => WW < 10 ? "0" + WW : "" + WW,
          MW = new Date;
        return "[" + RW(MW.getHours()) + ":" + RW(MW.getMinutes()) + ":" + RW(MW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, RW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const CW = Array.isArray(RW) ? RW[0] : RW;
        if (void 0 !== MW && !wW._CheckLimit(CW, MW)) return;
        const zR = wW._FormatMessage(CW),
          AW = this._Levels[WW],
          bR = Array.isArray(RW) ? RW.slice(1) : [];
        AW.logFunc && AW.logFunc("BJS - " + zR, ...bR);
        const yR = `<div style='color:${AW.color}'>${zR}</div><br>`;
        wW._AddLogEntry(yR), wW._GenerateLimitMessage(CW, WW)
      }
      static get LogCache() {
        return wW._LogCache
      }
      static ClearLogCache() {
        wW._LogCache = "", wW._LogLimitOutputs = {}, wW.errorsCount = 0
      }
      static set LogLevels(WW) {
        wW.Log = wW._LogDisabled, wW.Warn = wW._LogDisabled, wW.Error = wW._LogDisabled;
        const RW = [wW.MessageLogLevel, wW.WarningLogLevel, wW.ErrorLogLevel];
        for (const MW of RW)
          if ((WW & MW) === MW) {
            const WW = this._Levels[MW];
            wW[WW.name] = wW._LogEnabled.bind(wW, MW)
          }
      }
    }
    wW.NoneLogLevel = 0, wW.MessageLogLevel = 1, wW.WarningLogLevel = 2, wW.ErrorLogLevel = 4, wW.AllLogLevel = 7, wW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wW._LogCache = "", wW._LogLimitOutputs = {}, wW._Levels = [{}, {
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
    }], wW.errorsCount = 0, wW.Log = wW._LogEnabled.bind(wW, wW.MessageLogLevel), wW.Warn = wW._LogEnabled.bind(wW, wW.WarningLogLevel), wW.Error = wW._LogEnabled.bind(wW, wW.ErrorLogLevel)
  },
  35346: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW
    });
    const wW = "undefined" !== typeof WeakRef;
    class CW {
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(WW, RW, MW, wW)
      }
      initialize(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = WW, this.skipNextObservers = RW, this.target = MW, this.currentTarget = wW, this
      }
    }
    class zR {
      constructor(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = WW, this.mask = RW, this.scope = MW, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(WW)
      }
    }
    class AW {
      static FromPromise(WW, RW) {
        const MW = new AW;
        return WW.then((WW => {
          MW.notifyObservers(WW)
        })).catch((WW => {
          if (!RW) throw WW;
          RW.notifyObservers(WW)
        })), MW
      }
      get observers() {
        return this._observers
      }
      constructor(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = RW, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new CW(0), WW && (this._onObserverAdded = WW)
      }
      add(WW) {
        let RW = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          MW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!WW) return null;
        const CW = new zR(WW, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        CW.unregisterOnNextCall = MW, RW ? this._observers.unshift(CW) : this._observers.push(CW), this._onObserverAdded && this._onObserverAdded(CW), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(CW, this._lastNotifiedValue);
        const AW = wW ? new WeakRef(this) : {
          deref: () => this
        };
        return CW._remove = function() {
          let WW = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const RW = AW.deref();
          RW && (WW ? RW.remove(CW) : RW._remove(CW))
        }, CW
      }
      addOnce(WW) {
        return this.add(WW, void 0, void 0, void 0, !0)
      }
      remove(WW) {
        if (!WW) return !1;
        WW._remove = null;
        return -1 !== this._observers.indexOf(WW) && (this._deferUnregister(WW), !0)
      }
      removeCallback(WW, RW) {
        for (let MW = 0; MW < this._observers.length; MW++) {
          const wW = this._observers[MW];
          if (!wW._willBeUnregistered && (wW.callback === WW && (!RW || RW === wW.scope))) return this._deferUnregister(wW), !0
        }
        return !1
      }
      _deferUnregister(WW) {
        WW._willBeUnregistered || (this._numObserversMarkedAsDeleted++, WW.unregisterOnNextCall = !1, WW._willBeUnregistered = !0, setTimeout((() => {
          this._remove(WW)
        }), 0))
      }
      _remove(WW) {
        let RW = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!WW) return !1;
        const MW = this._observers.indexOf(WW);
        return -1 !== MW && (RW && this._numObserversMarkedAsDeleted--, this._observers.splice(MW, 1), !0)
      }
      makeObserverTopPriority(WW) {
        this._remove(WW, !1), this._observers.unshift(WW)
      }
      makeObserverBottomPriority(WW) {
        this._remove(WW, !1), this._observers.push(WW)
      }
      notifyObservers(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          MW = arguments.length > 2 ? arguments[2] : void 0,
          wW = arguments.length > 3 ? arguments[3] : void 0,
          CW = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WW), !this._observers.length) return !0;
        const zR = this._eventState;
        zR.mask = RW, zR.target = MW, zR.currentTarget = wW, zR.skipNextObservers = !1, zR.lastReturnValue = WW, zR.userInfo = CW;
        for (const AW of this._observers)
          if (!AW._willBeUnregistered && (AW.mask & RW && (AW.unregisterOnNextCall && this._deferUnregister(AW), AW.scope ? zR.lastReturnValue = AW.callback.apply(AW.scope, [WW, zR]) : zR.lastReturnValue = AW.callback(WW, zR)), zR.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(WW, RW) {
        let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = RW), WW._willBeUnregistered) return;
        const wW = this._eventState;
        wW.mask = MW, wW.skipNextObservers = !1, WW.unregisterOnNextCall && this._deferUnregister(WW), WW.callback(RW, wW)
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
        const WW = new AW;
        return WW._observers = this._observers.slice(0), WW
      }
      hasSpecificMask() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const RW of this._observers)
          if (RW.mask & WW || RW.mask === WW) return !0;
        return !1
      }
    }
  },
  58568: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      AsyncLoop: () => wW.c,
      RegisterTools: () => wW.f,
      Tools: () => wW.j,
      className: () => wW.n
    });
    var wW = MW(37685);
    (0, wW.f)()
  },
  35361: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR,
      e: () => CW
    });
    const wW = {};

    function CW(WW, RW) {
      wW[WW] = RW
    }

    function zR(WW) {
      return wW[WW]
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);