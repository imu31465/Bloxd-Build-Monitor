export const id = 224;
export const ids = [224];
export const modules = {
  36146: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => zT
    });
    var iT = IT(36149);
    class zT {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    zT.Instances = [], zT.OnEnginesDisposedObservable = new iT.d, zT._LastCreatedScene = null, zT.UseFallbackTexture = !0, zT.FallbackTexture = ""
  },
  37658: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(37660);
    const zT = (TT, oT, IT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : IT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(oT) : null;
    class kT {
      static DeepCopy(TT, oT, IT, kT) {
        let WT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const XT = function(TT) {
          const oT = [];
          do {
            const IT = Object.getOwnPropertyNames(TT);
            for (const TT of IT) - 1 === oT.indexOf(TT) && oT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return oT
        }(TT);
        for (const FT of XT) {
          if ("_" === FT[0] && (!kT || -1 === kT.indexOf(FT))) continue;
          if (FT.endsWith("Observable")) continue;
          if (IT && -1 !== IT.indexOf(FT)) continue;
          const XT = TT[FT],
            ST = typeof XT;
          if ("function" !== ST) try {
            if ("object" === ST)
              if (XT instanceof Uint8Array) oT[FT] = Uint8Array.from(XT);
              else if (XT instanceof Array) {
              if (oT[FT] = [], XT.length > 0)
                if ("object" == typeof XT[0])
                  for (let TT = 0; TT < XT.length; TT++) {
                    const IT = zT(XT[TT], oT, WT); - 1 === oT[FT].indexOf(IT) && oT[FT].push(IT)
                  } else oT[FT] = XT.slice(0)
            } else oT[FT] = zT(XT, oT, WT);
            else oT[FT] = XT
          } catch (BT) {
            iT.d.Warn(BT.message)
          }
        }
      }
    }
  },
  36851: (TT, oT, IT) => {
    function iT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const oT = 16 * Math.random() | 0;
        return ("x" === TT ? oT : 3 & oT | 8).toString(16)
      }))
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37660: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      static _CheckLimit(TT, oT) {
        let IT = iT._LogLimitOutputs[TT];
        return IT ? IT.current++ : (IT = {
          limit: oT,
          current: 1
        }, iT._LogLimitOutputs[TT] = IT), IT.current <= IT.limit
      }
      static _GenerateLimitMessage(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const IT = iT._LogLimitOutputs[TT];
        if (!IT || !iT.MessageLimitReached) return;
        const zT = this._Levels[oT];
        IT.current === IT.limit && iT[zT.name](iT.MessageLimitReached.replace(/%LIMIT%/g, "" + IT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        iT._LogCache = TT + iT._LogCache, iT.OnNewCacheEntry && iT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const oT = TT => TT < 10 ? "0" + TT : "" + TT,
          IT = new Date;
        return "[" + oT(IT.getHours()) + ":" + oT(IT.getMinutes()) + ":" + oT(IT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, oT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(oT) ? oT[0] : oT;
        if (void 0 !== IT && !iT._CheckLimit(zT, IT)) return;
        const kT = iT._FormatMessage(zT),
          WT = this._Levels[TT],
          XT = Array.isArray(oT) ? oT.slice(1) : [];
        WT.logFunc && WT.logFunc("BJS - " + kT, ...XT);
        const BT = `<div style='color:${WT.color}'>${kT}</div><br>`;
        iT._AddLogEntry(BT), iT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return iT._LogCache
      }
      static ClearLogCache() {
        iT._LogCache = "", iT._LogLimitOutputs = {}, iT.errorsCount = 0
      }
      static set LogLevels(TT) {
        iT.Log = iT._LogDisabled, iT.Warn = iT._LogDisabled, iT.Error = iT._LogDisabled;
        const oT = [iT.MessageLogLevel, iT.WarningLogLevel, iT.ErrorLogLevel];
        for (const IT of oT)
          if ((TT & IT) === IT) {
            const TT = this._Levels[IT];
            iT[TT.name] = iT._LogEnabled.bind(iT, IT)
          }
      }
    }
    iT.NoneLogLevel = 0, iT.MessageLogLevel = 1, iT.WarningLogLevel = 2, iT.ErrorLogLevel = 4, iT.AllLogLevel = 7, iT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", iT._LogCache = "", iT._LogLimitOutputs = {}, iT._Levels = [{}, {
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
    }], iT.errorsCount = 0, iT.Log = iT._LogEnabled.bind(iT, iT.MessageLogLevel), iT.Warn = iT._LogEnabled.bind(iT, iT.WarningLogLevel), iT.Error = iT._LogEnabled.bind(iT, iT.ErrorLogLevel)
  },
  36149: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT
    });
    const iT = "undefined" !== typeof WeakRef;
    class zT {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(TT, oT, IT, iT)
      }
      initialize(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = TT, this.skipNextObservers = oT, this.target = IT, this.currentTarget = iT, this
      }
    }
    class kT {
      constructor(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = TT, this.mask = oT, this.scope = IT, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(TT)
      }
    }
    class WT {
      static FromPromise(TT, oT) {
        const IT = new WT;
        return TT.then((TT => {
          IT.notifyObservers(TT)
        })).catch((TT => {
          if (!oT) throw TT;
          oT.notifyObservers(TT)
        })), IT
      }
      get observers() {
        return this._observers
      }
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = oT, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new zT(0), TT && (this._onObserverAdded = TT)
      }
      add(TT) {
        let oT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          IT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!TT) return null;
        const zT = new kT(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        zT.unregisterOnNextCall = IT, oT ? this._observers.unshift(zT) : this._observers.push(zT), this._onObserverAdded && this._onObserverAdded(zT), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(zT, this._lastNotifiedValue);
        const WT = iT ? new WeakRef(this) : {
          deref: () => this
        };
        return zT._remove = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const oT = WT.deref();
          oT && (TT ? oT.remove(zT) : oT._remove(zT))
        }, zT
      }
      addOnce(TT) {
        return this.add(TT, void 0, void 0, void 0, !0)
      }
      remove(TT) {
        if (!TT) return !1;
        TT._remove = null;
        return -1 !== this._observers.indexOf(TT) && (this._deferUnregister(TT), !0)
      }
      removeCallback(TT, oT) {
        for (let IT = 0; IT < this._observers.length; IT++) {
          const iT = this._observers[IT];
          if (!iT._willBeUnregistered && (iT.callback === TT && (!oT || oT === iT.scope))) return this._deferUnregister(iT), !0
        }
        return !1
      }
      _deferUnregister(TT) {
        TT._willBeUnregistered || (this._numObserversMarkedAsDeleted++, TT.unregisterOnNextCall = !1, TT._willBeUnregistered = !0, setTimeout((() => {
          this._remove(TT)
        }), 0))
      }
      _remove(TT) {
        let oT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT) return !1;
        const IT = this._observers.indexOf(TT);
        return -1 !== IT && (oT && this._numObserversMarkedAsDeleted--, this._observers.splice(IT, 1), !0)
      }
      makeObserverTopPriority(TT) {
        this._remove(TT, !1), this._observers.unshift(TT)
      }
      makeObserverBottomPriority(TT) {
        this._remove(TT, !1), this._observers.push(TT)
      }
      notifyObservers(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          IT = arguments.length > 2 ? arguments[2] : void 0,
          iT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = TT), !this._observers.length) return !0;
        const kT = this._eventState;
        kT.mask = oT, kT.target = IT, kT.currentTarget = iT, kT.skipNextObservers = !1, kT.lastReturnValue = TT, kT.userInfo = zT;
        for (const WT of this._observers)
          if (!WT._willBeUnregistered && (WT.mask & oT && (WT.unregisterOnNextCall && this._deferUnregister(WT), WT.scope ? kT.lastReturnValue = WT.callback.apply(WT.scope, [TT, kT]) : kT.lastReturnValue = WT.callback(TT, kT)), kT.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(TT, oT) {
        let IT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = oT), TT._willBeUnregistered) return;
        const iT = this._eventState;
        iT.mask = IT, iT.skipNextObservers = !1, TT.unregisterOnNextCall && this._deferUnregister(TT), TT.callback(oT, iT)
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
        const TT = new WT;
        return TT._observers = this._observers.slice(0), TT
      }
      hasSpecificMask() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const oT of this._observers)
          if (oT.mask & TT || oT.mask === TT) return !0;
        return !1
      }
    }
  },
  59995: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      AsyncLoop: () => iT.d,
      RegisterTools: () => iT.e,
      Tools: () => iT.i,
      className: () => iT.k
    });
    var iT = IT(38886);
    (0, iT.e)()
  },
  36166: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT,
      h: () => zT
    });
    const iT = {};

    function zT(TT, oT) {
      iT[TT] = oT
    }

    function kT(TT) {
      return iT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);