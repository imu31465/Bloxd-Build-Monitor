export const id = 265;
export const ids = [265];
export const modules = {
  38224: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(38233);
    class tR {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    tR.Instances = [], tR.OnEnginesDisposedObservable = new yR.b, tR._LastCreatedScene = null, tR.UseFallbackTexture = !0, tR.FallbackTexture = ""
  },
  39912: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(39914);
    const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
      ...RR
    } : null : RR.clone(JR) : null;
    class uR {
      static DeepCopy(RR, JR, GR, uR) {
        let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const qR = function(RR) {
          const JR = [];
          do {
            const GR = Object.getOwnPropertyNames(RR);
            for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
          } while (RR = Object.getPrototypeOf(RR));
          return JR
        }(RR);
        for (const fR of qR) {
          if ("_" === fR[0] && (!uR || -1 === uR.indexOf(fR))) continue;
          if (fR.endsWith("Observable")) continue;
          if (GR && -1 !== GR.indexOf(fR)) continue;
          const qR = RR[fR],
            VR = typeof qR;
          if ("function" !== VR) try {
            if ("object" === VR)
              if (qR instanceof Uint8Array) JR[fR] = Uint8Array.from(qR);
              else if (qR instanceof Array) {
              if (JR[fR] = [], qR.length > 0)
                if ("object" == typeof qR[0])
                  for (let RR = 0; RR < qR.length; RR++) {
                    const GR = tR(qR[RR], JR, ZR); - 1 === JR[fR].indexOf(GR) && JR[fR].push(GR)
                  } else JR[fR] = qR.slice(0)
            } else JR[fR] = tR(qR, JR, ZR);
            else JR[fR] = qR
          } catch (iR) {
            yR.c.Warn(iR.message)
          }
        }
      }
    }
  },
  39062: (RR, JR, GR) => {
    function yR() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
        const JR = 16 * Math.random() | 0;
        return ("x" === RR ? JR : 3 & JR | 8).toString(16)
      }))
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  39914: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static _CheckLimit(RR, JR) {
        let GR = yR._LogLimitOutputs[RR];
        return GR ? GR.current++ : (GR = {
          limit: JR,
          current: 1
        }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
      }
      static _GenerateLimitMessage(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GR = yR._LogLimitOutputs[RR];
        if (!GR || !yR.MessageLimitReached) return;
        const tR = this._Levels[JR];
        GR.current === GR.limit && yR[tR.name](yR.MessageLimitReached.replace(/%LIMIT%/g, "" + GR.limit).replace(/%TYPE%/g, tR.name ?? ""))
      }
      static _AddLogEntry(RR) {
        yR._LogCache = RR + yR._LogCache, yR.OnNewCacheEntry && yR.OnNewCacheEntry(RR)
      }
      static _FormatMessage(RR) {
        const JR = RR => RR < 10 ? "0" + RR : "" + RR,
          GR = new Date;
        return "[" + JR(GR.getHours()) + ":" + JR(GR.getMinutes()) + ":" + JR(GR.getSeconds()) + "]: " + RR
      }
      static _LogDisabled(RR, JR) {}
      static _LogEnabled() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const tR = Array.isArray(JR) ? JR[0] : JR;
        if (void 0 !== GR && !yR._CheckLimit(tR, GR)) return;
        const uR = yR._FormatMessage(tR),
          ZR = this._Levels[RR],
          qR = Array.isArray(JR) ? JR.slice(1) : [];
        ZR.logFunc && ZR.logFunc("BJS - " + uR, ...qR);
        const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
        yR._AddLogEntry(iR), yR._GenerateLimitMessage(tR, RR)
      }
      static get LogCache() {
        return yR._LogCache
      }
      static ClearLogCache() {
        yR._LogCache = "", yR._LogLimitOutputs = {}, yR.errorsCount = 0
      }
      static set LogLevels(RR) {
        yR.Log = yR._LogDisabled, yR.Warn = yR._LogDisabled, yR.Error = yR._LogDisabled;
        const JR = [yR.MessageLogLevel, yR.WarningLogLevel, yR.ErrorLogLevel];
        for (const GR of JR)
          if ((RR & GR) === GR) {
            const RR = this._Levels[GR];
            yR[RR.name] = yR._LogEnabled.bind(yR, GR)
          }
      }
    }
    yR.NoneLogLevel = 0, yR.MessageLogLevel = 1, yR.WarningLogLevel = 2, yR.ErrorLogLevel = 4, yR.AllLogLevel = 7, yR.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", yR._LogCache = "", yR._LogLimitOutputs = {}, yR._Levels = [{}, {
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
    }], yR.errorsCount = 0, yR.Log = yR._LogEnabled.bind(yR, yR.MessageLogLevel), yR.Warn = yR._LogEnabled.bind(yR, yR.WarningLogLevel), yR.Error = yR._LogEnabled.bind(yR, yR.ErrorLogLevel)
  },
  38233: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => ZR
    });
    const yR = "undefined" !== typeof WeakRef;
    class tR {
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(RR, JR, GR, yR)
      }
      initialize(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = RR, this.skipNextObservers = JR, this.target = GR, this.currentTarget = yR, this
      }
    }
    class uR {
      constructor(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = RR, this.mask = JR, this.scope = GR, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(RR)
      }
    }
    class ZR {
      static FromPromise(RR, JR) {
        const GR = new ZR;
        return RR.then((RR => {
          GR.notifyObservers(RR)
        })).catch((RR => {
          if (!JR) throw RR;
          JR.notifyObservers(RR)
        })), GR
      }
      get observers() {
        return this._observers
      }
      constructor(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = JR, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new tR(0), RR && (this._onObserverAdded = RR)
      }
      add(RR) {
        let JR = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          GR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!RR) return null;
        const tR = new uR(RR, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        tR.unregisterOnNextCall = GR, JR ? this._observers.unshift(tR) : this._observers.push(tR), this._onObserverAdded && this._onObserverAdded(tR), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(tR, this._lastNotifiedValue);
        const ZR = yR ? new WeakRef(this) : {
          deref: () => this
        };
        return tR._remove = function() {
          let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const JR = ZR.deref();
          JR && (RR ? JR.remove(tR) : JR._remove(tR))
        }, tR
      }
      addOnce(RR) {
        return this.add(RR, void 0, void 0, void 0, !0)
      }
      remove(RR) {
        if (!RR) return !1;
        RR._remove = null;
        return -1 !== this._observers.indexOf(RR) && (this._deferUnregister(RR), !0)
      }
      removeCallback(RR, JR) {
        for (let GR = 0; GR < this._observers.length; GR++) {
          const yR = this._observers[GR];
          if (!yR._willBeUnregistered && (yR.callback === RR && (!JR || JR === yR.scope))) return this._deferUnregister(yR), !0
        }
        return !1
      }
      _deferUnregister(RR) {
        RR._willBeUnregistered || (this._numObserversMarkedAsDeleted++, RR.unregisterOnNextCall = !1, RR._willBeUnregistered = !0, setTimeout((() => {
          this._remove(RR)
        }), 0))
      }
      _remove(RR) {
        let JR = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!RR) return !1;
        const GR = this._observers.indexOf(RR);
        return -1 !== GR && (JR && this._numObserversMarkedAsDeleted--, this._observers.splice(GR, 1), !0)
      }
      makeObserverTopPriority(RR) {
        this._remove(RR, !1), this._observers.unshift(RR)
      }
      makeObserverBottomPriority(RR) {
        this._remove(RR, !1), this._observers.push(RR)
      }
      notifyObservers(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          GR = arguments.length > 2 ? arguments[2] : void 0,
          yR = arguments.length > 3 ? arguments[3] : void 0,
          tR = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = RR), !this._observers.length) return !0;
        const uR = this._eventState;
        uR.mask = JR, uR.target = GR, uR.currentTarget = yR, uR.skipNextObservers = !1, uR.lastReturnValue = RR, uR.userInfo = tR;
        for (const ZR of this._observers)
          if (!ZR._willBeUnregistered && (ZR.mask & JR && (ZR.unregisterOnNextCall && this._deferUnregister(ZR), ZR.scope ? uR.lastReturnValue = ZR.callback.apply(ZR.scope, [RR, uR]) : uR.lastReturnValue = ZR.callback(RR, uR)), uR.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(RR, JR) {
        let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = JR), RR._willBeUnregistered) return;
        const yR = this._eventState;
        yR.mask = GR, yR.skipNextObservers = !1, RR.unregisterOnNextCall && this._deferUnregister(RR), RR.callback(JR, yR)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const RR = this._observers.pop();
          RR && (RR._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const RR = new ZR;
        return RR._observers = this._observers.slice(0), RR
      }
      hasSpecificMask() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const JR of this._observers)
          if (JR.mask & RR || JR.mask === RR) return !0;
        return !1
      }
    }
  },
  64132: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      AsyncLoop: () => yR.c,
      RegisterTools: () => yR.e,
      Tools: () => yR.h,
      className: () => yR.k
    });
    var yR = GR(41616);
    (0, yR.e)()
  },
  38253: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      f: () => tR
    });
    const yR = {};

    function tR(RR, JR) {
      yR[RR] = JR
    }

    function uR(RR) {
      return yR[RR]
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);