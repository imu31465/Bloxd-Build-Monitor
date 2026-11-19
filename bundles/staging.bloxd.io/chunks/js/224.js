export const id = 224;
export const ids = [224];
export const modules = {
  36546: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(36552);
    class AY {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    AY.Instances = [], AY.OnEnginesDisposedObservable = new FY.e, AY._LastCreatedScene = null, AY.UseFallbackTexture = !0, AY.FallbackTexture = ""
  },
  38037: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(38040);
    const AY = (YY, rY, DY) => YY ? YY.getClassName && "Mesh" === YY.getClassName() ? null : !YY.getClassName || "SubMesh" !== YY.getClassName() && "PhysicsBody" !== YY.getClassName() ? YY.clone ? YY.clone() : Array.isArray(YY) ? YY.slice() : DY && "object" === typeof YY ? {
      ...YY
    } : null : YY.clone(rY) : null;
    class IY {
      static DeepCopy(YY, rY, DY, IY) {
        let RY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const OY = function(YY) {
          const rY = [];
          do {
            const DY = Object.getOwnPropertyNames(YY);
            for (const YY of DY) - 1 === rY.indexOf(YY) && rY.push(YY)
          } while (YY = Object.getPrototypeOf(YY));
          return rY
        }(YY);
        for (const aY of OY) {
          if ("_" === aY[0] && (!IY || -1 === IY.indexOf(aY))) continue;
          if (aY.endsWith("Observable")) continue;
          if (DY && -1 !== DY.indexOf(aY)) continue;
          const OY = YY[aY],
            vY = typeof OY;
          if ("function" !== vY) try {
            if ("object" === vY)
              if (OY instanceof Uint8Array) rY[aY] = Uint8Array.from(OY);
              else if (OY instanceof Array) {
              if (rY[aY] = [], OY.length > 0)
                if ("object" == typeof OY[0])
                  for (let YY = 0; YY < OY.length; YY++) {
                    const DY = AY(OY[YY], rY, RY); - 1 === rY[aY].indexOf(DY) && rY[aY].push(DY)
                  } else rY[aY] = OY.slice(0)
            } else rY[aY] = AY(OY, rY, RY);
            else rY[aY] = OY
          } catch (gY) {
            FY.d.Warn(gY.message)
          }
        }
      }
    }
  },
  37242: (YY, rY, DY) => {
    function FY() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (YY => {
        const rY = 16 * Math.random() | 0;
        return ("x" === YY ? rY : 3 & rY | 8).toString(16)
      }))
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  38040: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      static _CheckLimit(YY, rY) {
        let DY = FY._LogLimitOutputs[YY];
        return DY ? DY.current++ : (DY = {
          limit: rY,
          current: 1
        }, FY._LogLimitOutputs[YY] = DY), DY.current <= DY.limit
      }
      static _GenerateLimitMessage(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const DY = FY._LogLimitOutputs[YY];
        if (!DY || !FY.MessageLimitReached) return;
        const AY = this._Levels[rY];
        DY.current === DY.limit && FY[AY.name](FY.MessageLimitReached.replace(/%LIMIT%/g, "" + DY.limit).replace(/%TYPE%/g, AY.name ?? ""))
      }
      static _AddLogEntry(YY) {
        FY._LogCache = YY + FY._LogCache, FY.OnNewCacheEntry && FY.OnNewCacheEntry(YY)
      }
      static _FormatMessage(YY) {
        const rY = YY => YY < 10 ? "0" + YY : "" + YY,
          DY = new Date;
        return "[" + rY(DY.getHours()) + ":" + rY(DY.getMinutes()) + ":" + rY(DY.getSeconds()) + "]: " + YY
      }
      static _LogDisabled(YY, rY) {}
      static _LogEnabled() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const AY = Array.isArray(rY) ? rY[0] : rY;
        if (void 0 !== DY && !FY._CheckLimit(AY, DY)) return;
        const IY = FY._FormatMessage(AY),
          RY = this._Levels[YY],
          OY = Array.isArray(rY) ? rY.slice(1) : [];
        RY.logFunc && RY.logFunc("BJS - " + IY, ...OY);
        const gY = `<div style='color:${RY.color}'>${IY}</div><br>`;
        FY._AddLogEntry(gY), FY._GenerateLimitMessage(AY, YY)
      }
      static get LogCache() {
        return FY._LogCache
      }
      static ClearLogCache() {
        FY._LogCache = "", FY._LogLimitOutputs = {}, FY.errorsCount = 0
      }
      static set LogLevels(YY) {
        FY.Log = FY._LogDisabled, FY.Warn = FY._LogDisabled, FY.Error = FY._LogDisabled;
        const rY = [FY.MessageLogLevel, FY.WarningLogLevel, FY.ErrorLogLevel];
        for (const DY of rY)
          if ((YY & DY) === DY) {
            const YY = this._Levels[DY];
            FY[YY.name] = FY._LogEnabled.bind(FY, DY)
          }
      }
    }
    FY.NoneLogLevel = 0, FY.MessageLogLevel = 1, FY.WarningLogLevel = 2, FY.ErrorLogLevel = 4, FY.AllLogLevel = 7, FY.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FY._LogCache = "", FY._LogLimitOutputs = {}, FY._Levels = [{}, {
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
    }], FY.errorsCount = 0, FY.Log = FY._LogEnabled.bind(FY, FY.MessageLogLevel), FY.Warn = FY._LogEnabled.bind(FY, FY.WarningLogLevel), FY.Error = FY._LogEnabled.bind(FY, FY.ErrorLogLevel)
  },
  36552: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => RY
    });
    const FY = "undefined" !== typeof WeakRef;
    class AY {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(YY, rY, DY, FY)
      }
      initialize(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = YY, this.skipNextObservers = rY, this.target = DY, this.currentTarget = FY, this
      }
    }
    class IY {
      constructor(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = YY, this.mask = rY, this.scope = DY, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(YY)
      }
    }
    class RY {
      static FromPromise(YY, rY) {
        const DY = new RY;
        return YY.then((YY => {
          DY.notifyObservers(YY)
        })).catch((YY => {
          if (!rY) throw YY;
          rY.notifyObservers(YY)
        })), DY
      }
      get observers() {
        return this._observers
      }
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = rY, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new AY(0), YY && (this._onObserverAdded = YY)
      }
      add(YY) {
        let rY = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          DY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!YY) return null;
        const AY = new IY(YY, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        AY.unregisterOnNextCall = DY, rY ? this._observers.unshift(AY) : this._observers.push(AY), this._onObserverAdded && this._onObserverAdded(AY), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(AY, this._lastNotifiedValue);
        const RY = FY ? new WeakRef(this) : {
          deref: () => this
        };
        return AY._remove = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const rY = RY.deref();
          rY && (YY ? rY.remove(AY) : rY._remove(AY))
        }, AY
      }
      addOnce(YY) {
        return this.add(YY, void 0, void 0, void 0, !0)
      }
      remove(YY) {
        if (!YY) return !1;
        YY._remove = null;
        return -1 !== this._observers.indexOf(YY) && (this._deferUnregister(YY), !0)
      }
      removeCallback(YY, rY) {
        for (let DY = 0; DY < this._observers.length; DY++) {
          const FY = this._observers[DY];
          if (!FY._willBeUnregistered && (FY.callback === YY && (!rY || rY === FY.scope))) return this._deferUnregister(FY), !0
        }
        return !1
      }
      _deferUnregister(YY) {
        YY._willBeUnregistered || (this._numObserversMarkedAsDeleted++, YY.unregisterOnNextCall = !1, YY._willBeUnregistered = !0, setTimeout((() => {
          this._remove(YY)
        }), 0))
      }
      _remove(YY) {
        let rY = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!YY) return !1;
        const DY = this._observers.indexOf(YY);
        return -1 !== DY && (rY && this._numObserversMarkedAsDeleted--, this._observers.splice(DY, 1), !0)
      }
      makeObserverTopPriority(YY) {
        this._remove(YY, !1), this._observers.unshift(YY)
      }
      makeObserverBottomPriority(YY) {
        this._remove(YY, !1), this._observers.push(YY)
      }
      notifyObservers(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          DY = arguments.length > 2 ? arguments[2] : void 0,
          FY = arguments.length > 3 ? arguments[3] : void 0,
          AY = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = YY), !this._observers.length) return !0;
        const IY = this._eventState;
        IY.mask = rY, IY.target = DY, IY.currentTarget = FY, IY.skipNextObservers = !1, IY.lastReturnValue = YY, IY.userInfo = AY;
        for (const RY of this._observers)
          if (!RY._willBeUnregistered && (RY.mask & rY && (RY.unregisterOnNextCall && this._deferUnregister(RY), RY.scope ? IY.lastReturnValue = RY.callback.apply(RY.scope, [YY, IY]) : IY.lastReturnValue = RY.callback(YY, IY)), IY.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(YY, rY) {
        let DY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = rY), YY._willBeUnregistered) return;
        const FY = this._eventState;
        FY.mask = DY, FY.skipNextObservers = !1, YY.unregisterOnNextCall && this._deferUnregister(YY), YY.callback(rY, FY)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const YY = this._observers.pop();
          YY && (YY._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const YY = new RY;
        return YY._observers = this._observers.slice(0), YY
      }
      hasSpecificMask() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const rY of this._observers)
          if (rY.mask & YY || rY.mask === YY) return !0;
        return !1
      }
    }
  },
  60196: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      AsyncLoop: () => FY.c,
      RegisterTools: () => FY.f,
      Tools: () => FY.i,
      className: () => FY.m
    });
    var FY = DY(39219);
    (0, FY.f)()
  },
  36569: (YY, rY, DY) => {
    DY.d(rY, {
      e: () => IY,
      i: () => AY
    });
    const FY = {};

    function AY(YY, rY) {
      FY[YY] = rY
    }

    function IY(YY) {
      return FY[YY]
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);