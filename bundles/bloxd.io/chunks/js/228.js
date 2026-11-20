export const id = 228;
export const ids = [228];
export const modules = {
  36615: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv
    });
    var hv = Pv(36618);
    class Sv {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Sv.Instances = [], Sv.OnEnginesDisposedObservable = new hv.c, Sv._LastCreatedScene = null, Sv.UseFallbackTexture = !0, Sv.FallbackTexture = ""
  },
  38207: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(38209);
    const Sv = (vv, zv, Pv) => vv ? vv.getClassName && "Mesh" === vv.getClassName() ? null : !vv.getClassName || "SubMesh" !== vv.getClassName() && "PhysicsBody" !== vv.getClassName() ? vv.clone ? vv.clone() : Array.isArray(vv) ? vv.slice() : Pv && "object" === typeof vv ? {
      ...vv
    } : null : vv.clone(zv) : null;
    class ev {
      static DeepCopy(vv, zv, Pv, ev) {
        let gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pv = function(vv) {
          const zv = [];
          do {
            const Pv = Object.getOwnPropertyNames(vv);
            for (const vv of Pv) - 1 === zv.indexOf(vv) && zv.push(vv)
          } while (vv = Object.getPrototypeOf(vv));
          return zv
        }(vv);
        for (const Nv of pv) {
          if ("_" === Nv[0] && (!ev || -1 === ev.indexOf(Nv))) continue;
          if (Nv.endsWith("Observable")) continue;
          if (Pv && -1 !== Pv.indexOf(Nv)) continue;
          const pv = vv[Nv],
            lv = typeof pv;
          if ("function" !== lv) try {
            if ("object" === lv)
              if (pv instanceof Uint8Array) zv[Nv] = Uint8Array.from(pv);
              else if (pv instanceof Array) {
              if (zv[Nv] = [], pv.length > 0)
                if ("object" == typeof pv[0])
                  for (let vv = 0; vv < pv.length; vv++) {
                    const Pv = Sv(pv[vv], zv, gv); - 1 === zv[Nv].indexOf(Pv) && zv[Nv].push(Pv)
                  } else zv[Nv] = pv.slice(0)
            } else zv[Nv] = Sv(pv, zv, gv);
            else zv[Nv] = pv
          } catch (dv) {
            hv.d.Warn(dv.message)
          }
        }
      }
    }
  },
  37431: (vv, zv, Pv) => {
    function hv() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
        const zv = 16 * Math.random() | 0;
        return ("x" === vv ? zv : 3 & zv | 8).toString(16)
      }))
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  38209: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static _CheckLimit(vv, zv) {
        let Pv = hv._LogLimitOutputs[vv];
        return Pv ? Pv.current++ : (Pv = {
          limit: zv,
          current: 1
        }, hv._LogLimitOutputs[vv] = Pv), Pv.current <= Pv.limit
      }
      static _GenerateLimitMessage(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Pv = hv._LogLimitOutputs[vv];
        if (!Pv || !hv.MessageLimitReached) return;
        const Sv = this._Levels[zv];
        Pv.current === Pv.limit && hv[Sv.name](hv.MessageLimitReached.replace(/%LIMIT%/g, "" + Pv.limit).replace(/%TYPE%/g, Sv.name ?? ""))
      }
      static _AddLogEntry(vv) {
        hv._LogCache = vv + hv._LogCache, hv.OnNewCacheEntry && hv.OnNewCacheEntry(vv)
      }
      static _FormatMessage(vv) {
        const zv = vv => vv < 10 ? "0" + vv : "" + vv,
          Pv = new Date;
        return "[" + zv(Pv.getHours()) + ":" + zv(Pv.getMinutes()) + ":" + zv(Pv.getSeconds()) + "]: " + vv
      }
      static _LogDisabled(vv, zv) {}
      static _LogEnabled() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const Sv = Array.isArray(zv) ? zv[0] : zv;
        if (void 0 !== Pv && !hv._CheckLimit(Sv, Pv)) return;
        const ev = hv._FormatMessage(Sv),
          gv = this._Levels[vv],
          pv = Array.isArray(zv) ? zv.slice(1) : [];
        gv.logFunc && gv.logFunc("BJS - " + ev, ...pv);
        const dv = `<div style='color:${gv.color}'>${ev}</div><br>`;
        hv._AddLogEntry(dv), hv._GenerateLimitMessage(Sv, vv)
      }
      static get LogCache() {
        return hv._LogCache
      }
      static ClearLogCache() {
        hv._LogCache = "", hv._LogLimitOutputs = {}, hv.errorsCount = 0
      }
      static set LogLevels(vv) {
        hv.Log = hv._LogDisabled, hv.Warn = hv._LogDisabled, hv.Error = hv._LogDisabled;
        const zv = [hv.MessageLogLevel, hv.WarningLogLevel, hv.ErrorLogLevel];
        for (const Pv of zv)
          if ((vv & Pv) === Pv) {
            const vv = this._Levels[Pv];
            hv[vv.name] = hv._LogEnabled.bind(hv, Pv)
          }
      }
    }
    hv.NoneLogLevel = 0, hv.MessageLogLevel = 1, hv.WarningLogLevel = 2, hv.ErrorLogLevel = 4, hv.AllLogLevel = 7, hv.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hv._LogCache = "", hv._LogLimitOutputs = {}, hv._Levels = [{}, {
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
    }], hv.errorsCount = 0, hv.Log = hv._LogEnabled.bind(hv, hv.MessageLogLevel), hv.Warn = hv._LogEnabled.bind(hv, hv.WarningLogLevel), hv.Error = hv._LogEnabled.bind(hv, hv.ErrorLogLevel)
  },
  36618: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => gv
    });
    const hv = "undefined" !== typeof WeakRef;
    class Sv {
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(vv, zv, Pv, hv)
      }
      initialize(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = vv, this.skipNextObservers = zv, this.target = Pv, this.currentTarget = hv, this
      }
    }
    class ev {
      constructor(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = vv, this.mask = zv, this.scope = Pv, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(vv)
      }
    }
    class gv {
      static FromPromise(vv, zv) {
        const Pv = new gv;
        return vv.then((vv => {
          Pv.notifyObservers(vv)
        })).catch((vv => {
          if (!zv) throw vv;
          zv.notifyObservers(vv)
        })), Pv
      }
      get observers() {
        return this._observers
      }
      constructor(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = zv, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Sv(0), vv && (this._onObserverAdded = vv)
      }
      add(vv) {
        let zv = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Pv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!vv) return null;
        const Sv = new ev(vv, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Sv.unregisterOnNextCall = Pv, zv ? this._observers.unshift(Sv) : this._observers.push(Sv), this._onObserverAdded && this._onObserverAdded(Sv), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Sv, this._lastNotifiedValue);
        const gv = hv ? new WeakRef(this) : {
          deref: () => this
        };
        return Sv._remove = function() {
          let vv = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const zv = gv.deref();
          zv && (vv ? zv.remove(Sv) : zv._remove(Sv))
        }, Sv
      }
      addOnce(vv) {
        return this.add(vv, void 0, void 0, void 0, !0)
      }
      remove(vv) {
        if (!vv) return !1;
        vv._remove = null;
        return -1 !== this._observers.indexOf(vv) && (this._deferUnregister(vv), !0)
      }
      removeCallback(vv, zv) {
        for (let Pv = 0; Pv < this._observers.length; Pv++) {
          const hv = this._observers[Pv];
          if (!hv._willBeUnregistered && (hv.callback === vv && (!zv || zv === hv.scope))) return this._deferUnregister(hv), !0
        }
        return !1
      }
      _deferUnregister(vv) {
        vv._willBeUnregistered || (this._numObserversMarkedAsDeleted++, vv.unregisterOnNextCall = !1, vv._willBeUnregistered = !0, setTimeout((() => {
          this._remove(vv)
        }), 0))
      }
      _remove(vv) {
        let zv = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!vv) return !1;
        const Pv = this._observers.indexOf(vv);
        return -1 !== Pv && (zv && this._numObserversMarkedAsDeleted--, this._observers.splice(Pv, 1), !0)
      }
      makeObserverTopPriority(vv) {
        this._remove(vv, !1), this._observers.unshift(vv)
      }
      makeObserverBottomPriority(vv) {
        this._remove(vv, !1), this._observers.push(vv)
      }
      notifyObservers(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Pv = arguments.length > 2 ? arguments[2] : void 0,
          hv = arguments.length > 3 ? arguments[3] : void 0,
          Sv = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = vv), !this._observers.length) return !0;
        const ev = this._eventState;
        ev.mask = zv, ev.target = Pv, ev.currentTarget = hv, ev.skipNextObservers = !1, ev.lastReturnValue = vv, ev.userInfo = Sv;
        for (const gv of this._observers)
          if (!gv._willBeUnregistered && (gv.mask & zv && (gv.unregisterOnNextCall && this._deferUnregister(gv), gv.scope ? ev.lastReturnValue = gv.callback.apply(gv.scope, [vv, ev]) : ev.lastReturnValue = gv.callback(vv, ev)), ev.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(vv, zv) {
        let Pv = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zv), vv._willBeUnregistered) return;
        const hv = this._eventState;
        hv.mask = Pv, hv.skipNextObservers = !1, vv.unregisterOnNextCall && this._deferUnregister(vv), vv.callback(zv, hv)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const vv = this._observers.pop();
          vv && (vv._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const vv = new gv;
        return vv._observers = this._observers.slice(0), vv
      }
      hasSpecificMask() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const zv of this._observers)
          if (zv.mask & vv || zv.mask === vv) return !0;
        return !1
      }
    }
  },
  60565: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      AsyncLoop: () => hv.d,
      RegisterTools: () => hv.e,
      Tools: () => hv.h,
      className: () => hv.i
    });
    var hv = Pv(39399);
    (0, hv.e)()
  },
  36631: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev,
      c: () => Sv
    });
    const hv = {};

    function Sv(vv, zv) {
      hv[vv] = zv
    }

    function ev(vv) {
      return hv[vv]
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);