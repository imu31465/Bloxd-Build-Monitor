export const id = 216;
export const ids = [216];
export const modules = {
  36192: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36200);
    class UJ {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    UJ.Instances = [], UJ.OnEnginesDisposedObservable = new FJ.c, UJ._LastCreatedScene = null, UJ.UseFallbackTexture = !0, UJ.FallbackTexture = ""
  },
  37658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(37660);
    const UJ = (JJ, cJ, ZJ) => JJ ? JJ.getClassName && "Mesh" === JJ.getClassName() ? null : !JJ.getClassName || "SubMesh" !== JJ.getClassName() && "PhysicsBody" !== JJ.getClassName() ? JJ.clone ? JJ.clone() : Array.isArray(JJ) ? JJ.slice() : ZJ && "object" === typeof JJ ? {
      ...JJ
    } : null : JJ.clone(cJ) : null;
    class eJ {
      static DeepCopy(JJ, cJ, ZJ, eJ) {
        let XJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const AJ = function(JJ) {
          const cJ = [];
          do {
            const ZJ = Object.getOwnPropertyNames(JJ);
            for (const JJ of ZJ) - 1 === cJ.indexOf(JJ) && cJ.push(JJ)
          } while (JJ = Object.getPrototypeOf(JJ));
          return cJ
        }(JJ);
        for (const jJ of AJ) {
          if ("_" === jJ[0] && (!eJ || -1 === eJ.indexOf(jJ))) continue;
          if (jJ.endsWith("Observable")) continue;
          if (ZJ && -1 !== ZJ.indexOf(jJ)) continue;
          const AJ = JJ[jJ],
            YJ = typeof AJ;
          if ("function" !== YJ) try {
            if ("object" === YJ)
              if (AJ instanceof Uint8Array) cJ[jJ] = Uint8Array.from(AJ);
              else if (AJ instanceof Array) {
              if (cJ[jJ] = [], AJ.length > 0)
                if ("object" == typeof AJ[0])
                  for (let JJ = 0; JJ < AJ.length; JJ++) {
                    const ZJ = UJ(AJ[JJ], cJ, XJ); - 1 === cJ[jJ].indexOf(ZJ) && cJ[jJ].push(ZJ)
                  } else cJ[jJ] = AJ.slice(0)
            } else cJ[jJ] = UJ(AJ, cJ, XJ);
            else cJ[jJ] = AJ
          } catch (qJ) {
            FJ.c.Warn(qJ.message)
          }
        }
      }
    }
  },
  36865: (JJ, cJ, ZJ) => {
    function FJ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (JJ => {
        const cJ = 16 * Math.random() | 0;
        return ("x" === JJ ? cJ : 3 & cJ | 8).toString(16)
      }))
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  37660: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      static _CheckLimit(JJ, cJ) {
        let ZJ = FJ._LogLimitOutputs[JJ];
        return ZJ ? ZJ.current++ : (ZJ = {
          limit: cJ,
          current: 1
        }, FJ._LogLimitOutputs[JJ] = ZJ), ZJ.current <= ZJ.limit
      }
      static _GenerateLimitMessage(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZJ = FJ._LogLimitOutputs[JJ];
        if (!ZJ || !FJ.MessageLimitReached) return;
        const UJ = this._Levels[cJ];
        ZJ.current === ZJ.limit && FJ[UJ.name](FJ.MessageLimitReached.replace(/%LIMIT%/g, "" + ZJ.limit).replace(/%TYPE%/g, UJ.name ?? ""))
      }
      static _AddLogEntry(JJ) {
        FJ._LogCache = JJ + FJ._LogCache, FJ.OnNewCacheEntry && FJ.OnNewCacheEntry(JJ)
      }
      static _FormatMessage(JJ) {
        const cJ = JJ => JJ < 10 ? "0" + JJ : "" + JJ,
          ZJ = new Date;
        return "[" + cJ(ZJ.getHours()) + ":" + cJ(ZJ.getMinutes()) + ":" + cJ(ZJ.getSeconds()) + "]: " + JJ
      }
      static _LogDisabled(JJ, cJ) {}
      static _LogEnabled() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const UJ = Array.isArray(cJ) ? cJ[0] : cJ;
        if (void 0 !== ZJ && !FJ._CheckLimit(UJ, ZJ)) return;
        const eJ = FJ._FormatMessage(UJ),
          XJ = this._Levels[JJ],
          AJ = Array.isArray(cJ) ? cJ.slice(1) : [];
        XJ.logFunc && XJ.logFunc("BJS - " + eJ, ...AJ);
        const qJ = `<div style='color:${XJ.color}'>${eJ}</div><br>`;
        FJ._AddLogEntry(qJ), FJ._GenerateLimitMessage(UJ, JJ)
      }
      static get LogCache() {
        return FJ._LogCache
      }
      static ClearLogCache() {
        FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ.errorsCount = 0
      }
      static set LogLevels(JJ) {
        FJ.Log = FJ._LogDisabled, FJ.Warn = FJ._LogDisabled, FJ.Error = FJ._LogDisabled;
        const cJ = [FJ.MessageLogLevel, FJ.WarningLogLevel, FJ.ErrorLogLevel];
        for (const ZJ of cJ)
          if ((JJ & ZJ) === ZJ) {
            const JJ = this._Levels[ZJ];
            FJ[JJ.name] = FJ._LogEnabled.bind(FJ, ZJ)
          }
      }
    }
    FJ.NoneLogLevel = 0, FJ.MessageLogLevel = 1, FJ.WarningLogLevel = 2, FJ.ErrorLogLevel = 4, FJ.AllLogLevel = 7, FJ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ._Levels = [{}, {
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
    }], FJ.errorsCount = 0, FJ.Log = FJ._LogEnabled.bind(FJ, FJ.MessageLogLevel), FJ.Warn = FJ._LogEnabled.bind(FJ, FJ.WarningLogLevel), FJ.Error = FJ._LogEnabled.bind(FJ, FJ.ErrorLogLevel)
  },
  36200: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => XJ
    });
    const FJ = "undefined" !== typeof WeakRef;
    class UJ {
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(JJ, cJ, ZJ, FJ)
      }
      initialize(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = JJ, this.skipNextObservers = cJ, this.target = ZJ, this.currentTarget = FJ, this
      }
    }
    class eJ {
      constructor(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = JJ, this.mask = cJ, this.scope = ZJ, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(JJ)
      }
    }
    class XJ {
      static FromPromise(JJ, cJ) {
        const ZJ = new XJ;
        return JJ.then((JJ => {
          ZJ.notifyObservers(JJ)
        })).catch((JJ => {
          if (!cJ) throw JJ;
          cJ.notifyObservers(JJ)
        })), ZJ
      }
      get observers() {
        return this._observers
      }
      constructor(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = cJ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new UJ(0), JJ && (this._onObserverAdded = JJ)
      }
      add(JJ) {
        let cJ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ZJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!JJ) return null;
        const UJ = new eJ(JJ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        UJ.unregisterOnNextCall = ZJ, cJ ? this._observers.unshift(UJ) : this._observers.push(UJ), this._onObserverAdded && this._onObserverAdded(UJ), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(UJ, this._lastNotifiedValue);
        const XJ = FJ ? new WeakRef(this) : {
          deref: () => this
        };
        return UJ._remove = function() {
          let JJ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const cJ = XJ.deref();
          cJ && (JJ ? cJ.remove(UJ) : cJ._remove(UJ))
        }, UJ
      }
      addOnce(JJ) {
        return this.add(JJ, void 0, void 0, void 0, !0)
      }
      remove(JJ) {
        if (!JJ) return !1;
        JJ._remove = null;
        return -1 !== this._observers.indexOf(JJ) && (this._deferUnregister(JJ), !0)
      }
      removeCallback(JJ, cJ) {
        for (let ZJ = 0; ZJ < this._observers.length; ZJ++) {
          const FJ = this._observers[ZJ];
          if (!FJ._willBeUnregistered && (FJ.callback === JJ && (!cJ || cJ === FJ.scope))) return this._deferUnregister(FJ), !0
        }
        return !1
      }
      _deferUnregister(JJ) {
        JJ._willBeUnregistered || (this._numObserversMarkedAsDeleted++, JJ.unregisterOnNextCall = !1, JJ._willBeUnregistered = !0, setTimeout((() => {
          this._remove(JJ)
        }), 0))
      }
      _remove(JJ) {
        let cJ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!JJ) return !1;
        const ZJ = this._observers.indexOf(JJ);
        return -1 !== ZJ && (cJ && this._numObserversMarkedAsDeleted--, this._observers.splice(ZJ, 1), !0)
      }
      makeObserverTopPriority(JJ) {
        this._remove(JJ, !1), this._observers.unshift(JJ)
      }
      makeObserverBottomPriority(JJ) {
        this._remove(JJ, !1), this._observers.push(JJ)
      }
      notifyObservers(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZJ = arguments.length > 2 ? arguments[2] : void 0,
          FJ = arguments.length > 3 ? arguments[3] : void 0,
          UJ = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = JJ), !this._observers.length) return !0;
        const eJ = this._eventState;
        eJ.mask = cJ, eJ.target = ZJ, eJ.currentTarget = FJ, eJ.skipNextObservers = !1, eJ.lastReturnValue = JJ, eJ.userInfo = UJ;
        for (const XJ of this._observers)
          if (!XJ._willBeUnregistered && (XJ.mask & cJ && (XJ.unregisterOnNextCall && this._deferUnregister(XJ), XJ.scope ? eJ.lastReturnValue = XJ.callback.apply(XJ.scope, [JJ, eJ]) : eJ.lastReturnValue = XJ.callback(JJ, eJ)), eJ.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(JJ, cJ) {
        let ZJ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = cJ), JJ._willBeUnregistered) return;
        const FJ = this._eventState;
        FJ.mask = ZJ, FJ.skipNextObservers = !1, JJ.unregisterOnNextCall && this._deferUnregister(JJ), JJ.callback(cJ, FJ)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const JJ = this._observers.pop();
          JJ && (JJ._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const JJ = new XJ;
        return JJ._observers = this._observers.slice(0), JJ
      }
      hasSpecificMask() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const cJ of this._observers)
          if (cJ.mask & JJ || cJ.mask === JJ) return !0;
        return !1
      }
    }
  },
  59384: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      AsyncLoop: () => FJ.e,
      RegisterTools: () => FJ.g,
      Tools: () => FJ.j,
      className: () => FJ.m
    });
    var FJ = ZJ(38879);
    (0, FJ.g)()
  },
  36216: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ,
      f: () => UJ
    });
    const FJ = {};

    function UJ(JJ, cJ) {
      FJ[JJ] = cJ
    }

    function eJ(JJ) {
      return FJ[JJ]
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);