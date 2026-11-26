export const id = 252;
export const ids = [252];
export const modules = {
  37841: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => yU
    });
    var cU = zU(37846);
    class yU {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    yU.Instances = [], yU.OnEnginesDisposedObservable = new cU.e, yU._LastCreatedScene = null, yU.UseFallbackTexture = !0, yU.FallbackTexture = ""
  },
  39486: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(39493);
    const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(XU) : null;
    class QU {
      static DeepCopy(UU, XU, zU, QU) {
        let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const FU = function(UU) {
          const XU = [];
          do {
            const zU = Object.getOwnPropertyNames(UU);
            for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return XU
        }(UU);
        for (const DU of FU) {
          if ("_" === DU[0] && (!QU || -1 === QU.indexOf(DU))) continue;
          if (DU.endsWith("Observable")) continue;
          if (zU && -1 !== zU.indexOf(DU)) continue;
          const FU = UU[DU],
            EU = typeof FU;
          if ("function" !== EU) try {
            if ("object" === EU)
              if (FU instanceof Uint8Array) XU[DU] = Uint8Array.from(FU);
              else if (FU instanceof Array) {
              if (XU[DU] = [], FU.length > 0)
                if ("object" == typeof FU[0])
                  for (let UU = 0; UU < FU.length; UU++) {
                    const zU = yU(FU[UU], XU, AU); - 1 === XU[DU].indexOf(zU) && XU[DU].push(zU)
                  } else XU[DU] = FU.slice(0)
            } else XU[DU] = yU(FU, XU, AU);
            else XU[DU] = FU
          } catch (oU) {
            cU.b.Warn(oU.message)
          }
        }
      }
    }
  },
  38649: (UU, XU, zU) => {
    function cU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const XU = 16 * Math.random() | 0;
        return ("x" === UU ? XU : 3 & XU | 8).toString(16)
      }))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  39493: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static _CheckLimit(UU, XU) {
        let zU = cU._LogLimitOutputs[UU];
        return zU ? zU.current++ : (zU = {
          limit: XU,
          current: 1
        }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
      }
      static _GenerateLimitMessage(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zU = cU._LogLimitOutputs[UU];
        if (!zU || !cU.MessageLimitReached) return;
        const yU = this._Levels[XU];
        zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        cU._LogCache = UU + cU._LogCache, cU.OnNewCacheEntry && cU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const XU = UU => UU < 10 ? "0" + UU : "" + UU,
          zU = new Date;
        return "[" + XU(zU.getHours()) + ":" + XU(zU.getMinutes()) + ":" + XU(zU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, XU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const yU = Array.isArray(XU) ? XU[0] : XU;
        if (void 0 !== zU && !cU._CheckLimit(yU, zU)) return;
        const QU = cU._FormatMessage(yU),
          AU = this._Levels[UU],
          FU = Array.isArray(XU) ? XU.slice(1) : [];
        AU.logFunc && AU.logFunc("BJS - " + QU, ...FU);
        const oU = `<div style='color:${AU.color}'>${QU}</div><br>`;
        cU._AddLogEntry(oU), cU._GenerateLimitMessage(yU, UU)
      }
      static get LogCache() {
        return cU._LogCache
      }
      static ClearLogCache() {
        cU._LogCache = "", cU._LogLimitOutputs = {}, cU.errorsCount = 0
      }
      static set LogLevels(UU) {
        cU.Log = cU._LogDisabled, cU.Warn = cU._LogDisabled, cU.Error = cU._LogDisabled;
        const XU = [cU.MessageLogLevel, cU.WarningLogLevel, cU.ErrorLogLevel];
        for (const zU of XU)
          if ((UU & zU) === zU) {
            const UU = this._Levels[zU];
            cU[UU.name] = cU._LogEnabled.bind(cU, zU)
          }
      }
    }
    cU.NoneLogLevel = 0, cU.MessageLogLevel = 1, cU.WarningLogLevel = 2, cU.ErrorLogLevel = 4, cU.AllLogLevel = 7, cU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", cU._LogCache = "", cU._LogLimitOutputs = {}, cU._Levels = [{}, {
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
    }], cU.errorsCount = 0, cU.Log = cU._LogEnabled.bind(cU, cU.MessageLogLevel), cU.Warn = cU._LogEnabled.bind(cU, cU.WarningLogLevel), cU.Error = cU._LogEnabled.bind(cU, cU.ErrorLogLevel)
  },
  37846: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => AU
    });
    const cU = "undefined" !== typeof WeakRef;
    class yU {
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(UU, XU, zU, cU)
      }
      initialize(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = UU, this.skipNextObservers = XU, this.target = zU, this.currentTarget = cU, this
      }
    }
    class QU {
      constructor(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = UU, this.mask = XU, this.scope = zU, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(UU)
      }
    }
    class AU {
      static FromPromise(UU, XU) {
        const zU = new AU;
        return UU.then((UU => {
          zU.notifyObservers(UU)
        })).catch((UU => {
          if (!XU) throw UU;
          XU.notifyObservers(UU)
        })), zU
      }
      get observers() {
        return this._observers
      }
      constructor(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = XU, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new yU(0), UU && (this._onObserverAdded = UU)
      }
      add(UU) {
        let XU = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          zU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!UU) return null;
        const yU = new QU(UU, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        yU.unregisterOnNextCall = zU, XU ? this._observers.unshift(yU) : this._observers.push(yU), this._onObserverAdded && this._onObserverAdded(yU), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(yU, this._lastNotifiedValue);
        const AU = cU ? new WeakRef(this) : {
          deref: () => this
        };
        return yU._remove = function() {
          let UU = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const XU = AU.deref();
          XU && (UU ? XU.remove(yU) : XU._remove(yU))
        }, yU
      }
      addOnce(UU) {
        return this.add(UU, void 0, void 0, void 0, !0)
      }
      remove(UU) {
        if (!UU) return !1;
        UU._remove = null;
        return -1 !== this._observers.indexOf(UU) && (this._deferUnregister(UU), !0)
      }
      removeCallback(UU, XU) {
        for (let zU = 0; zU < this._observers.length; zU++) {
          const cU = this._observers[zU];
          if (!cU._willBeUnregistered && (cU.callback === UU && (!XU || XU === cU.scope))) return this._deferUnregister(cU), !0
        }
        return !1
      }
      _deferUnregister(UU) {
        UU._willBeUnregistered || (this._numObserversMarkedAsDeleted++, UU.unregisterOnNextCall = !1, UU._willBeUnregistered = !0, setTimeout((() => {
          this._remove(UU)
        }), 0))
      }
      _remove(UU) {
        let XU = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!UU) return !1;
        const zU = this._observers.indexOf(UU);
        return -1 !== zU && (XU && this._numObserversMarkedAsDeleted--, this._observers.splice(zU, 1), !0)
      }
      makeObserverTopPriority(UU) {
        this._remove(UU, !1), this._observers.unshift(UU)
      }
      makeObserverBottomPriority(UU) {
        this._remove(UU, !1), this._observers.push(UU)
      }
      notifyObservers(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          zU = arguments.length > 2 ? arguments[2] : void 0,
          cU = arguments.length > 3 ? arguments[3] : void 0,
          yU = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = UU), !this._observers.length) return !0;
        const QU = this._eventState;
        QU.mask = XU, QU.target = zU, QU.currentTarget = cU, QU.skipNextObservers = !1, QU.lastReturnValue = UU, QU.userInfo = yU;
        for (const AU of this._observers)
          if (!AU._willBeUnregistered && (AU.mask & XU && (AU.unregisterOnNextCall && this._deferUnregister(AU), AU.scope ? QU.lastReturnValue = AU.callback.apply(AU.scope, [UU, QU]) : QU.lastReturnValue = AU.callback(UU, QU)), QU.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(UU, XU) {
        let zU = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = XU), UU._willBeUnregistered) return;
        const cU = this._eventState;
        cU.mask = zU, cU.skipNextObservers = !1, UU.unregisterOnNextCall && this._deferUnregister(UU), UU.callback(XU, cU)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const UU = this._observers.pop();
          UU && (UU._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const UU = new AU;
        return UU._observers = this._observers.slice(0), UU
      }
      hasSpecificMask() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const XU of this._observers)
          if (XU.mask & UU || XU.mask === UU) return !0;
        return !1
      }
    }
  },
  63941: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      AsyncLoop: () => cU.c,
      RegisterTools: () => cU.g,
      Tools: () => cU.j,
      className: () => cU.k
    });
    var cU = zU(41205);
    (0, cU.g)()
  },
  37863: (UU, XU, zU) => {
    zU.d(XU, {
      e: () => QU,
      h: () => yU
    });
    const cU = {};

    function yU(UU, XU) {
      cU[UU] = XU
    }

    function QU(UU) {
      return cU[UU]
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);