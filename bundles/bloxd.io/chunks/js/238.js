export const id = 238;
export const ids = [238];
export const modules = {
  37463: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => SG
    });
    var wG = ZG(37465);
    class SG {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    SG.Instances = [], SG.OnEnginesDisposedObservable = new wG.c, SG._LastCreatedScene = null, SG.UseFallbackTexture = !0, SG.FallbackTexture = ""
  },
  39086: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(39093);
    const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
      ...GG
    } : null : GG.clone(bG) : null;
    class LG {
      static DeepCopy(GG, bG, ZG, LG) {
        let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kG = function(GG) {
          const bG = [];
          do {
            const ZG = Object.getOwnPropertyNames(GG);
            for (const GG of ZG) - 1 === bG.indexOf(GG) && bG.push(GG)
          } while (GG = Object.getPrototypeOf(GG));
          return bG
        }(GG);
        for (const YG of kG) {
          if ("_" === YG[0] && (!LG || -1 === LG.indexOf(YG))) continue;
          if (YG.endsWith("Observable")) continue;
          if (ZG && -1 !== ZG.indexOf(YG)) continue;
          const kG = GG[YG],
            VG = typeof kG;
          if ("function" !== VG) try {
            if ("object" === VG)
              if (kG instanceof Uint8Array) bG[YG] = Uint8Array.from(kG);
              else if (kG instanceof Array) {
              if (bG[YG] = [], kG.length > 0)
                if ("object" == typeof kG[0])
                  for (let GG = 0; GG < kG.length; GG++) {
                    const ZG = SG(kG[GG], bG, yG); - 1 === bG[YG].indexOf(ZG) && bG[YG].push(ZG)
                  } else bG[YG] = kG.slice(0)
            } else bG[YG] = SG(kG, bG, yG);
            else bG[YG] = kG
          } catch (UG) {
            wG.c.Warn(UG.message)
          }
        }
      }
    }
  },
  38311: (GG, bG, ZG) => {
    function wG() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (GG => {
        const bG = 16 * Math.random() | 0;
        return ("x" === GG ? bG : 3 & bG | 8).toString(16)
      }))
    }
    ZG.d(bG, {
      e: () => wG
    })
  },
  39093: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      static _CheckLimit(GG, bG) {
        let ZG = wG._LogLimitOutputs[GG];
        return ZG ? ZG.current++ : (ZG = {
          limit: bG,
          current: 1
        }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
      }
      static _GenerateLimitMessage(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZG = wG._LogLimitOutputs[GG];
        if (!ZG || !wG.MessageLimitReached) return;
        const SG = this._Levels[bG];
        ZG.current === ZG.limit && wG[SG.name](wG.MessageLimitReached.replace(/%LIMIT%/g, "" + ZG.limit).replace(/%TYPE%/g, SG.name ?? ""))
      }
      static _AddLogEntry(GG) {
        wG._LogCache = GG + wG._LogCache, wG.OnNewCacheEntry && wG.OnNewCacheEntry(GG)
      }
      static _FormatMessage(GG) {
        const bG = GG => GG < 10 ? "0" + GG : "" + GG,
          ZG = new Date;
        return "[" + bG(ZG.getHours()) + ":" + bG(ZG.getMinutes()) + ":" + bG(ZG.getSeconds()) + "]: " + GG
      }
      static _LogDisabled(GG, bG) {}
      static _LogEnabled() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const SG = Array.isArray(bG) ? bG[0] : bG;
        if (void 0 !== ZG && !wG._CheckLimit(SG, ZG)) return;
        const LG = wG._FormatMessage(SG),
          yG = this._Levels[GG],
          kG = Array.isArray(bG) ? bG.slice(1) : [];
        yG.logFunc && yG.logFunc("BJS - " + LG, ...kG);
        const UG = `<div style='color:${yG.color}'>${LG}</div><br>`;
        wG._AddLogEntry(UG), wG._GenerateLimitMessage(SG, GG)
      }
      static get LogCache() {
        return wG._LogCache
      }
      static ClearLogCache() {
        wG._LogCache = "", wG._LogLimitOutputs = {}, wG.errorsCount = 0
      }
      static set LogLevels(GG) {
        wG.Log = wG._LogDisabled, wG.Warn = wG._LogDisabled, wG.Error = wG._LogDisabled;
        const bG = [wG.MessageLogLevel, wG.WarningLogLevel, wG.ErrorLogLevel];
        for (const ZG of bG)
          if ((GG & ZG) === ZG) {
            const GG = this._Levels[ZG];
            wG[GG.name] = wG._LogEnabled.bind(wG, ZG)
          }
      }
    }
    wG.NoneLogLevel = 0, wG.MessageLogLevel = 1, wG.WarningLogLevel = 2, wG.ErrorLogLevel = 4, wG.AllLogLevel = 7, wG.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wG._LogCache = "", wG._LogLimitOutputs = {}, wG._Levels = [{}, {
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
    }], wG.errorsCount = 0, wG.Log = wG._LogEnabled.bind(wG, wG.MessageLogLevel), wG.Warn = wG._LogEnabled.bind(wG, wG.WarningLogLevel), wG.Error = wG._LogEnabled.bind(wG, wG.ErrorLogLevel)
  },
  37465: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => yG
    });
    const wG = "undefined" !== typeof WeakRef;
    class SG {
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(GG, bG, ZG, wG)
      }
      initialize(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = GG, this.skipNextObservers = bG, this.target = ZG, this.currentTarget = wG, this
      }
    }
    class LG {
      constructor(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = GG, this.mask = bG, this.scope = ZG, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(GG)
      }
    }
    class yG {
      static FromPromise(GG, bG) {
        const ZG = new yG;
        return GG.then((GG => {
          ZG.notifyObservers(GG)
        })).catch((GG => {
          if (!bG) throw GG;
          bG.notifyObservers(GG)
        })), ZG
      }
      get observers() {
        return this._observers
      }
      constructor(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = bG, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new SG(0), GG && (this._onObserverAdded = GG)
      }
      add(GG) {
        let bG = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ZG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!GG) return null;
        const SG = new LG(GG, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        SG.unregisterOnNextCall = ZG, bG ? this._observers.unshift(SG) : this._observers.push(SG), this._onObserverAdded && this._onObserverAdded(SG), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(SG, this._lastNotifiedValue);
        const yG = wG ? new WeakRef(this) : {
          deref: () => this
        };
        return SG._remove = function() {
          let GG = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const bG = yG.deref();
          bG && (GG ? bG.remove(SG) : bG._remove(SG))
        }, SG
      }
      addOnce(GG) {
        return this.add(GG, void 0, void 0, void 0, !0)
      }
      remove(GG) {
        if (!GG) return !1;
        GG._remove = null;
        return -1 !== this._observers.indexOf(GG) && (this._deferUnregister(GG), !0)
      }
      removeCallback(GG, bG) {
        for (let ZG = 0; ZG < this._observers.length; ZG++) {
          const wG = this._observers[ZG];
          if (!wG._willBeUnregistered && (wG.callback === GG && (!bG || bG === wG.scope))) return this._deferUnregister(wG), !0
        }
        return !1
      }
      _deferUnregister(GG) {
        GG._willBeUnregistered || (this._numObserversMarkedAsDeleted++, GG.unregisterOnNextCall = !1, GG._willBeUnregistered = !0, setTimeout((() => {
          this._remove(GG)
        }), 0))
      }
      _remove(GG) {
        let bG = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!GG) return !1;
        const ZG = this._observers.indexOf(GG);
        return -1 !== ZG && (bG && this._numObserversMarkedAsDeleted--, this._observers.splice(ZG, 1), !0)
      }
      makeObserverTopPriority(GG) {
        this._remove(GG, !1), this._observers.unshift(GG)
      }
      makeObserverBottomPriority(GG) {
        this._remove(GG, !1), this._observers.push(GG)
      }
      notifyObservers(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZG = arguments.length > 2 ? arguments[2] : void 0,
          wG = arguments.length > 3 ? arguments[3] : void 0,
          SG = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = GG), !this._observers.length) return !0;
        const LG = this._eventState;
        LG.mask = bG, LG.target = ZG, LG.currentTarget = wG, LG.skipNextObservers = !1, LG.lastReturnValue = GG, LG.userInfo = SG;
        for (const yG of this._observers)
          if (!yG._willBeUnregistered && (yG.mask & bG && (yG.unregisterOnNextCall && this._deferUnregister(yG), yG.scope ? LG.lastReturnValue = yG.callback.apply(yG.scope, [GG, LG]) : LG.lastReturnValue = yG.callback(GG, LG)), LG.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(GG, bG) {
        let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bG), GG._willBeUnregistered) return;
        const wG = this._eventState;
        wG.mask = ZG, wG.skipNextObservers = !1, GG.unregisterOnNextCall && this._deferUnregister(GG), GG.callback(bG, wG)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const GG = this._observers.pop();
          GG && (GG._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const GG = new yG;
        return GG._observers = this._observers.slice(0), GG
      }
      hasSpecificMask() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const bG of this._observers)
          if (bG.mask & GG || bG.mask === GG) return !0;
        return !1
      }
    }
  },
  61800: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      AsyncLoop: () => wG.b,
      RegisterTools: () => wG.d,
      Tools: () => wG.f,
      className: () => wG.h
    });
    var wG = ZG(40477);
    (0, wG.d)()
  },
  37484: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG,
      i: () => SG
    });
    const wG = {};

    function SG(GG, bG) {
      wG[GG] = bG
    }

    function LG(GG) {
      return wG[GG]
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);