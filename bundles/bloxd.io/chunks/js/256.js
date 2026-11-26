export const id = 256;
export const ids = [256];
export const modules = {
  38287: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(38296);
    class YV {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    YV.Instances = [], YV.OnEnginesDisposedObservable = new JV.c, YV._LastCreatedScene = null, YV.UseFallbackTexture = !0, YV.FallbackTexture = ""
  },
  39867: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(39870);
    const YV = (VV, eV, xV) => VV ? VV.getClassName && "Mesh" === VV.getClassName() ? null : !VV.getClassName || "SubMesh" !== VV.getClassName() && "PhysicsBody" !== VV.getClassName() ? VV.clone ? VV.clone() : Array.isArray(VV) ? VV.slice() : xV && "object" === typeof VV ? {
      ...VV
    } : null : VV.clone(eV) : null;
    class UV {
      static DeepCopy(VV, eV, xV, UV) {
        let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pV = function(VV) {
          const eV = [];
          do {
            const xV = Object.getOwnPropertyNames(VV);
            for (const VV of xV) - 1 === eV.indexOf(VV) && eV.push(VV)
          } while (VV = Object.getPrototypeOf(VV));
          return eV
        }(VV);
        for (const nV of pV) {
          if ("_" === nV[0] && (!UV || -1 === UV.indexOf(nV))) continue;
          if (nV.endsWith("Observable")) continue;
          if (xV && -1 !== xV.indexOf(nV)) continue;
          const pV = VV[nV],
            wV = typeof pV;
          if ("function" !== wV) try {
            if ("object" === wV)
              if (pV instanceof Uint8Array) eV[nV] = Uint8Array.from(pV);
              else if (pV instanceof Array) {
              if (eV[nV] = [], pV.length > 0)
                if ("object" == typeof pV[0])
                  for (let VV = 0; VV < pV.length; VV++) {
                    const xV = YV(pV[VV], eV, yV); - 1 === eV[nV].indexOf(xV) && eV[nV].push(xV)
                  } else eV[nV] = pV.slice(0)
            } else eV[nV] = YV(pV, eV, yV);
            else eV[nV] = pV
          } catch (QV) {
            JV.b.Warn(QV.message)
          }
        }
      }
    }
  },
  39058: (VV, eV, xV) => {
    function JV() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (VV => {
        const eV = 16 * Math.random() | 0;
        return ("x" === VV ? eV : 3 & eV | 8).toString(16)
      }))
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  39870: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      static _CheckLimit(VV, eV) {
        let xV = JV._LogLimitOutputs[VV];
        return xV ? xV.current++ : (xV = {
          limit: eV,
          current: 1
        }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
      }
      static _GenerateLimitMessage(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const xV = JV._LogLimitOutputs[VV];
        if (!xV || !JV.MessageLimitReached) return;
        const YV = this._Levels[eV];
        xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
      }
      static _AddLogEntry(VV) {
        JV._LogCache = VV + JV._LogCache, JV.OnNewCacheEntry && JV.OnNewCacheEntry(VV)
      }
      static _FormatMessage(VV) {
        const eV = VV => VV < 10 ? "0" + VV : "" + VV,
          xV = new Date;
        return "[" + eV(xV.getHours()) + ":" + eV(xV.getMinutes()) + ":" + eV(xV.getSeconds()) + "]: " + VV
      }
      static _LogDisabled(VV, eV) {}
      static _LogEnabled() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const YV = Array.isArray(eV) ? eV[0] : eV;
        if (void 0 !== xV && !JV._CheckLimit(YV, xV)) return;
        const UV = JV._FormatMessage(YV),
          yV = this._Levels[VV],
          pV = Array.isArray(eV) ? eV.slice(1) : [];
        yV.logFunc && yV.logFunc("BJS - " + UV, ...pV);
        const QV = `<div style='color:${yV.color}'>${UV}</div><br>`;
        JV._AddLogEntry(QV), JV._GenerateLimitMessage(YV, VV)
      }
      static get LogCache() {
        return JV._LogCache
      }
      static ClearLogCache() {
        JV._LogCache = "", JV._LogLimitOutputs = {}, JV.errorsCount = 0
      }
      static set LogLevels(VV) {
        JV.Log = JV._LogDisabled, JV.Warn = JV._LogDisabled, JV.Error = JV._LogDisabled;
        const eV = [JV.MessageLogLevel, JV.WarningLogLevel, JV.ErrorLogLevel];
        for (const xV of eV)
          if ((VV & xV) === xV) {
            const VV = this._Levels[xV];
            JV[VV.name] = JV._LogEnabled.bind(JV, xV)
          }
      }
    }
    JV.NoneLogLevel = 0, JV.MessageLogLevel = 1, JV.WarningLogLevel = 2, JV.ErrorLogLevel = 4, JV.AllLogLevel = 7, JV.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", JV._LogCache = "", JV._LogLimitOutputs = {}, JV._Levels = [{}, {
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
    }], JV.errorsCount = 0, JV.Log = JV._LogEnabled.bind(JV, JV.MessageLogLevel), JV.Warn = JV._LogEnabled.bind(JV, JV.WarningLogLevel), JV.Error = JV._LogEnabled.bind(JV, JV.ErrorLogLevel)
  },
  38296: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => yV
    });
    const JV = "undefined" !== typeof WeakRef;
    class YV {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(VV, eV, xV, JV)
      }
      initialize(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = VV, this.skipNextObservers = eV, this.target = xV, this.currentTarget = JV, this
      }
    }
    class UV {
      constructor(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = VV, this.mask = eV, this.scope = xV, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(VV)
      }
    }
    class yV {
      static FromPromise(VV, eV) {
        const xV = new yV;
        return VV.then((VV => {
          xV.notifyObservers(VV)
        })).catch((VV => {
          if (!eV) throw VV;
          eV.notifyObservers(VV)
        })), xV
      }
      get observers() {
        return this._observers
      }
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = eV, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new YV(0), VV && (this._onObserverAdded = VV)
      }
      add(VV) {
        let eV = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          xV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!VV) return null;
        const YV = new UV(VV, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        YV.unregisterOnNextCall = xV, eV ? this._observers.unshift(YV) : this._observers.push(YV), this._onObserverAdded && this._onObserverAdded(YV), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(YV, this._lastNotifiedValue);
        const yV = JV ? new WeakRef(this) : {
          deref: () => this
        };
        return YV._remove = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const eV = yV.deref();
          eV && (VV ? eV.remove(YV) : eV._remove(YV))
        }, YV
      }
      addOnce(VV) {
        return this.add(VV, void 0, void 0, void 0, !0)
      }
      remove(VV) {
        if (!VV) return !1;
        VV._remove = null;
        return -1 !== this._observers.indexOf(VV) && (this._deferUnregister(VV), !0)
      }
      removeCallback(VV, eV) {
        for (let xV = 0; xV < this._observers.length; xV++) {
          const JV = this._observers[xV];
          if (!JV._willBeUnregistered && (JV.callback === VV && (!eV || eV === JV.scope))) return this._deferUnregister(JV), !0
        }
        return !1
      }
      _deferUnregister(VV) {
        VV._willBeUnregistered || (this._numObserversMarkedAsDeleted++, VV.unregisterOnNextCall = !1, VV._willBeUnregistered = !0, setTimeout((() => {
          this._remove(VV)
        }), 0))
      }
      _remove(VV) {
        let eV = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!VV) return !1;
        const xV = this._observers.indexOf(VV);
        return -1 !== xV && (eV && this._numObserversMarkedAsDeleted--, this._observers.splice(xV, 1), !0)
      }
      makeObserverTopPriority(VV) {
        this._remove(VV, !1), this._observers.unshift(VV)
      }
      makeObserverBottomPriority(VV) {
        this._remove(VV, !1), this._observers.push(VV)
      }
      notifyObservers(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          xV = arguments.length > 2 ? arguments[2] : void 0,
          JV = arguments.length > 3 ? arguments[3] : void 0,
          YV = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = VV), !this._observers.length) return !0;
        const UV = this._eventState;
        UV.mask = eV, UV.target = xV, UV.currentTarget = JV, UV.skipNextObservers = !1, UV.lastReturnValue = VV, UV.userInfo = YV;
        for (const yV of this._observers)
          if (!yV._willBeUnregistered && (yV.mask & eV && (yV.unregisterOnNextCall && this._deferUnregister(yV), yV.scope ? UV.lastReturnValue = yV.callback.apply(yV.scope, [VV, UV]) : UV.lastReturnValue = yV.callback(VV, UV)), UV.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(VV, eV) {
        let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = eV), VV._willBeUnregistered) return;
        const JV = this._eventState;
        JV.mask = xV, JV.skipNextObservers = !1, VV.unregisterOnNextCall && this._deferUnregister(VV), VV.callback(eV, JV)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const VV = this._observers.pop();
          VV && (VV._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const VV = new yV;
        return VV._observers = this._observers.slice(0), VV
      }
      hasSpecificMask() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const eV of this._observers)
          if (eV.mask & VV || eV.mask === VV) return !0;
        return !1
      }
    }
  },
  64272: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      AsyncLoop: () => JV.c,
      RegisterTools: () => JV.g,
      Tools: () => JV.j,
      className: () => JV.l
    });
    var JV = xV(41341);
    (0, JV.g)()
  },
  38318: (VV, eV, xV) => {
    xV.d(eV, {
      c: () => UV,
      d: () => YV
    });
    const JV = {};

    function YV(VV, eV) {
      JV[VV] = eV
    }

    function UV(VV) {
      return JV[VV]
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);