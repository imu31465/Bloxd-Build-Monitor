export const id = 208;
export const ids = [208];
export const modules = {
  35639: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(35647);
    class AF {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    AF.Instances = [], AF.OnEnginesDisposedObservable = new CF.b, AF._LastCreatedScene = null, AF.UseFallbackTexture = !0, AF.FallbackTexture = ""
  },
  37069: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(37076);
    const AF = (FF, WF, SF) => FF ? FF.getClassName && "Mesh" === FF.getClassName() ? null : !FF.getClassName || "SubMesh" !== FF.getClassName() && "PhysicsBody" !== FF.getClassName() ? FF.clone ? FF.clone() : Array.isArray(FF) ? FF.slice() : SF && "object" === typeof FF ? {
      ...FF
    } : null : FF.clone(WF) : null;
    class uF {
      static DeepCopy(FF, WF, SF, uF) {
        let hF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bW = function(FF) {
          const WF = [];
          do {
            const SF = Object.getOwnPropertyNames(FF);
            for (const FF of SF) - 1 === WF.indexOf(FF) && WF.push(FF)
          } while (FF = Object.getPrototypeOf(FF));
          return WF
        }(FF);
        for (const PF of bW) {
          if ("_" === PF[0] && (!uF || -1 === uF.indexOf(PF))) continue;
          if (PF.endsWith("Observable")) continue;
          if (SF && -1 !== SF.indexOf(PF)) continue;
          const bW = FF[PF],
            RF = typeof bW;
          if ("function" !== RF) try {
            if ("object" === RF)
              if (bW instanceof Uint8Array) WF[PF] = Uint8Array.from(bW);
              else if (bW instanceof Array) {
              if (WF[PF] = [], bW.length > 0)
                if ("object" == typeof bW[0])
                  for (let FF = 0; FF < bW.length; FF++) {
                    const SF = AF(bW[FF], WF, hF); - 1 === WF[PF].indexOf(SF) && WF[PF].push(SF)
                  } else WF[PF] = bW.slice(0)
            } else WF[PF] = AF(bW, WF, hF);
            else WF[PF] = bW
          } catch (dF) {
            CF.b.Warn(dF.message)
          }
        }
      }
    }
  },
  36308: (FF, WF, SF) => {
    function CF() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (FF => {
        const WF = 16 * Math.random() | 0;
        return ("x" === FF ? WF : 3 & WF | 8).toString(16)
      }))
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  37076: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      static _CheckLimit(FF, WF) {
        let SF = CF._LogLimitOutputs[FF];
        return SF ? SF.current++ : (SF = {
          limit: WF,
          current: 1
        }, CF._LogLimitOutputs[FF] = SF), SF.current <= SF.limit
      }
      static _GenerateLimitMessage(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const SF = CF._LogLimitOutputs[FF];
        if (!SF || !CF.MessageLimitReached) return;
        const AF = this._Levels[WF];
        SF.current === SF.limit && CF[AF.name](CF.MessageLimitReached.replace(/%LIMIT%/g, "" + SF.limit).replace(/%TYPE%/g, AF.name ?? ""))
      }
      static _AddLogEntry(FF) {
        CF._LogCache = FF + CF._LogCache, CF.OnNewCacheEntry && CF.OnNewCacheEntry(FF)
      }
      static _FormatMessage(FF) {
        const WF = FF => FF < 10 ? "0" + FF : "" + FF,
          SF = new Date;
        return "[" + WF(SF.getHours()) + ":" + WF(SF.getMinutes()) + ":" + WF(SF.getSeconds()) + "]: " + FF
      }
      static _LogDisabled(FF, WF) {}
      static _LogEnabled() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const AF = Array.isArray(WF) ? WF[0] : WF;
        if (void 0 !== SF && !CF._CheckLimit(AF, SF)) return;
        const uF = CF._FormatMessage(AF),
          hF = this._Levels[FF],
          bW = Array.isArray(WF) ? WF.slice(1) : [];
        hF.logFunc && hF.logFunc("BJS - " + uF, ...bW);
        const dF = `<div style='color:${hF.color}'>${uF}</div><br>`;
        CF._AddLogEntry(dF), CF._GenerateLimitMessage(AF, FF)
      }
      static get LogCache() {
        return CF._LogCache
      }
      static ClearLogCache() {
        CF._LogCache = "", CF._LogLimitOutputs = {}, CF.errorsCount = 0
      }
      static set LogLevels(FF) {
        CF.Log = CF._LogDisabled, CF.Warn = CF._LogDisabled, CF.Error = CF._LogDisabled;
        const WF = [CF.MessageLogLevel, CF.WarningLogLevel, CF.ErrorLogLevel];
        for (const SF of WF)
          if ((FF & SF) === SF) {
            const FF = this._Levels[SF];
            CF[FF.name] = CF._LogEnabled.bind(CF, SF)
          }
      }
    }
    CF.NoneLogLevel = 0, CF.MessageLogLevel = 1, CF.WarningLogLevel = 2, CF.ErrorLogLevel = 4, CF.AllLogLevel = 7, CF.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", CF._LogCache = "", CF._LogLimitOutputs = {}, CF._Levels = [{}, {
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
    }], CF.errorsCount = 0, CF.Log = CF._LogEnabled.bind(CF, CF.MessageLogLevel), CF.Warn = CF._LogEnabled.bind(CF, CF.WarningLogLevel), CF.Error = CF._LogEnabled.bind(CF, CF.ErrorLogLevel)
  },
  35647: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF
    });
    const CF = "undefined" !== typeof WeakRef;
    class AF {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(FF, WF, SF, CF)
      }
      initialize(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = FF, this.skipNextObservers = WF, this.target = SF, this.currentTarget = CF, this
      }
    }
    class uF {
      constructor(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = FF, this.mask = WF, this.scope = SF, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(FF)
      }
    }
    class hF {
      static FromPromise(FF, WF) {
        const SF = new hF;
        return FF.then((FF => {
          SF.notifyObservers(FF)
        })).catch((FF => {
          if (!WF) throw FF;
          WF.notifyObservers(FF)
        })), SF
      }
      get observers() {
        return this._observers
      }
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = WF, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new AF(0), FF && (this._onObserverAdded = FF)
      }
      add(FF) {
        let WF = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          SF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!FF) return null;
        const AF = new uF(FF, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        AF.unregisterOnNextCall = SF, WF ? this._observers.unshift(AF) : this._observers.push(AF), this._onObserverAdded && this._onObserverAdded(AF), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(AF, this._lastNotifiedValue);
        const hF = CF ? new WeakRef(this) : {
          deref: () => this
        };
        return AF._remove = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const WF = hF.deref();
          WF && (FF ? WF.remove(AF) : WF._remove(AF))
        }, AF
      }
      addOnce(FF) {
        return this.add(FF, void 0, void 0, void 0, !0)
      }
      remove(FF) {
        if (!FF) return !1;
        FF._remove = null;
        return -1 !== this._observers.indexOf(FF) && (this._deferUnregister(FF), !0)
      }
      removeCallback(FF, WF) {
        for (let SF = 0; SF < this._observers.length; SF++) {
          const CF = this._observers[SF];
          if (!CF._willBeUnregistered && (CF.callback === FF && (!WF || WF === CF.scope))) return this._deferUnregister(CF), !0
        }
        return !1
      }
      _deferUnregister(FF) {
        FF._willBeUnregistered || (this._numObserversMarkedAsDeleted++, FF.unregisterOnNextCall = !1, FF._willBeUnregistered = !0, setTimeout((() => {
          this._remove(FF)
        }), 0))
      }
      _remove(FF) {
        let WF = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!FF) return !1;
        const SF = this._observers.indexOf(FF);
        return -1 !== SF && (WF && this._numObserversMarkedAsDeleted--, this._observers.splice(SF, 1), !0)
      }
      makeObserverTopPriority(FF) {
        this._remove(FF, !1), this._observers.unshift(FF)
      }
      makeObserverBottomPriority(FF) {
        this._remove(FF, !1), this._observers.push(FF)
      }
      notifyObservers(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          SF = arguments.length > 2 ? arguments[2] : void 0,
          CF = arguments.length > 3 ? arguments[3] : void 0,
          AF = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = FF), !this._observers.length) return !0;
        const uF = this._eventState;
        uF.mask = WF, uF.target = SF, uF.currentTarget = CF, uF.skipNextObservers = !1, uF.lastReturnValue = FF, uF.userInfo = AF;
        for (const hF of this._observers)
          if (!hF._willBeUnregistered && (hF.mask & WF && (hF.unregisterOnNextCall && this._deferUnregister(hF), hF.scope ? uF.lastReturnValue = hF.callback.apply(hF.scope, [FF, uF]) : uF.lastReturnValue = hF.callback(FF, uF)), uF.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(FF, WF) {
        let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WF), FF._willBeUnregistered) return;
        const CF = this._eventState;
        CF.mask = SF, CF.skipNextObservers = !1, FF.unregisterOnNextCall && this._deferUnregister(FF), FF.callback(WF, CF)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const FF = this._observers.pop();
          FF && (FF._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const FF = new hF;
        return FF._observers = this._observers.slice(0), FF
      }
      hasSpecificMask() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const WF of this._observers)
          if (WF.mask & FF || WF.mask === FF) return !0;
        return !1
      }
    }
  },
  58883: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      AsyncLoop: () => CF.c,
      RegisterTools: () => CF.g,
      Tools: () => CF.h,
      className: () => CF.l
    });
    var CF = SF(38065);
    (0, CF.g)()
  },
  35660: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      f: () => AF
    });
    const CF = {};

    function AF(FF, WF) {
      CF[FF] = WF
    }

    function uF(FF) {
      return CF[FF]
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);