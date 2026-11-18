export const id = 215;
export const ids = [215];
export const modules = {
  35886: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(35893);
    class hy {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    hy.Instances = [], hy.OnEnginesDisposedObservable = new Uy.c, hy._LastCreatedScene = null, hy.UseFallbackTexture = !0, hy.FallbackTexture = ""
  },
  37346: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(37350);
    const hy = (yb, bb, Wy) => yb ? yb.getClassName && "Mesh" === yb.getClassName() ? null : !yb.getClassName || "SubMesh" !== yb.getClassName() && "PhysicsBody" !== yb.getClassName() ? yb.clone ? yb.clone() : Array.isArray(yb) ? yb.slice() : Wy && "object" === typeof yb ? {
      ...yb
    } : null : yb.clone(bb) : null;
    class fy {
      static DeepCopy(yb, bb, Wy, fy) {
        let Zy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const cb = function(yb) {
          const bb = [];
          do {
            const Wy = Object.getOwnPropertyNames(yb);
            for (const yb of Wy) - 1 === bb.indexOf(yb) && bb.push(yb)
          } while (yb = Object.getPrototypeOf(yb));
          return bb
        }(yb);
        for (const oy of cb) {
          if ("_" === oy[0] && (!fy || -1 === fy.indexOf(oy))) continue;
          if (oy.endsWith("Observable")) continue;
          if (Wy && -1 !== Wy.indexOf(oy)) continue;
          const cb = yb[oy],
            By = typeof cb;
          if ("function" !== By) try {
            if ("object" === By)
              if (cb instanceof Uint8Array) bb[oy] = Uint8Array.from(cb);
              else if (cb instanceof Array) {
              if (bb[oy] = [], cb.length > 0)
                if ("object" == typeof cb[0])
                  for (let yb = 0; yb < cb.length; yb++) {
                    const Wy = hy(cb[yb], bb, Zy); - 1 === bb[oy].indexOf(Wy) && bb[oy].push(Wy)
                  } else bb[oy] = cb.slice(0)
            } else bb[oy] = hy(cb, bb, Zy);
            else bb[oy] = cb
          } catch (Py) {
            Uy.b.Warn(Py.message)
          }
        }
      }
    }
  },
  36559: (yb, bb, Wy) => {
    function Uy() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (yb => {
        const bb = 16 * Math.random() | 0;
        return ("x" === yb ? bb : 3 & bb | 8).toString(16)
      }))
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  37350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      static _CheckLimit(yb, bb) {
        let Wy = Uy._LogLimitOutputs[yb];
        return Wy ? Wy.current++ : (Wy = {
          limit: bb,
          current: 1
        }, Uy._LogLimitOutputs[yb] = Wy), Wy.current <= Wy.limit
      }
      static _GenerateLimitMessage(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Wy = Uy._LogLimitOutputs[yb];
        if (!Wy || !Uy.MessageLimitReached) return;
        const hy = this._Levels[bb];
        Wy.current === Wy.limit && Uy[hy.name](Uy.MessageLimitReached.replace(/%LIMIT%/g, "" + Wy.limit).replace(/%TYPE%/g, hy.name ?? ""))
      }
      static _AddLogEntry(yb) {
        Uy._LogCache = yb + Uy._LogCache, Uy.OnNewCacheEntry && Uy.OnNewCacheEntry(yb)
      }
      static _FormatMessage(yb) {
        const bb = yb => yb < 10 ? "0" + yb : "" + yb,
          Wy = new Date;
        return "[" + bb(Wy.getHours()) + ":" + bb(Wy.getMinutes()) + ":" + bb(Wy.getSeconds()) + "]: " + yb
      }
      static _LogDisabled(yb, bb) {}
      static _LogEnabled() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const hy = Array.isArray(bb) ? bb[0] : bb;
        if (void 0 !== Wy && !Uy._CheckLimit(hy, Wy)) return;
        const fy = Uy._FormatMessage(hy),
          Zy = this._Levels[yb],
          cb = Array.isArray(bb) ? bb.slice(1) : [];
        Zy.logFunc && Zy.logFunc("BJS - " + fy, ...cb);
        const Py = `<div style='color:${Zy.color}'>${fy}</div><br>`;
        Uy._AddLogEntry(Py), Uy._GenerateLimitMessage(hy, yb)
      }
      static get LogCache() {
        return Uy._LogCache
      }
      static ClearLogCache() {
        Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy.errorsCount = 0
      }
      static set LogLevels(yb) {
        Uy.Log = Uy._LogDisabled, Uy.Warn = Uy._LogDisabled, Uy.Error = Uy._LogDisabled;
        const bb = [Uy.MessageLogLevel, Uy.WarningLogLevel, Uy.ErrorLogLevel];
        for (const Wy of bb)
          if ((yb & Wy) === Wy) {
            const yb = this._Levels[Wy];
            Uy[yb.name] = Uy._LogEnabled.bind(Uy, Wy)
          }
      }
    }
    Uy.NoneLogLevel = 0, Uy.MessageLogLevel = 1, Uy.WarningLogLevel = 2, Uy.ErrorLogLevel = 4, Uy.AllLogLevel = 7, Uy.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy._Levels = [{}, {
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
    }], Uy.errorsCount = 0, Uy.Log = Uy._LogEnabled.bind(Uy, Uy.MessageLogLevel), Uy.Warn = Uy._LogEnabled.bind(Uy, Uy.WarningLogLevel), Uy.Error = Uy._LogEnabled.bind(Uy, Uy.ErrorLogLevel)
  },
  35893: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    const Uy = "undefined" !== typeof WeakRef;
    class hy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(yb, bb, Wy, Uy)
      }
      initialize(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = yb, this.skipNextObservers = bb, this.target = Wy, this.currentTarget = Uy, this
      }
    }
    class fy {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = yb, this.mask = bb, this.scope = Wy, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(yb)
      }
    }
    class Zy {
      static FromPromise(yb, bb) {
        const Wy = new Zy;
        return yb.then((yb => {
          Wy.notifyObservers(yb)
        })).catch((yb => {
          if (!bb) throw yb;
          bb.notifyObservers(yb)
        })), Wy
      }
      get observers() {
        return this._observers
      }
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = bb, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new hy(0), yb && (this._onObserverAdded = yb)
      }
      add(yb) {
        let bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!yb) return null;
        const hy = new fy(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        hy.unregisterOnNextCall = Wy, bb ? this._observers.unshift(hy) : this._observers.push(hy), this._onObserverAdded && this._onObserverAdded(hy), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(hy, this._lastNotifiedValue);
        const Zy = Uy ? new WeakRef(this) : {
          deref: () => this
        };
        return hy._remove = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const bb = Zy.deref();
          bb && (yb ? bb.remove(hy) : bb._remove(hy))
        }, hy
      }
      addOnce(yb) {
        return this.add(yb, void 0, void 0, void 0, !0)
      }
      remove(yb) {
        if (!yb) return !1;
        yb._remove = null;
        return -1 !== this._observers.indexOf(yb) && (this._deferUnregister(yb), !0)
      }
      removeCallback(yb, bb) {
        for (let Wy = 0; Wy < this._observers.length; Wy++) {
          const Uy = this._observers[Wy];
          if (!Uy._willBeUnregistered && (Uy.callback === yb && (!bb || bb === Uy.scope))) return this._deferUnregister(Uy), !0
        }
        return !1
      }
      _deferUnregister(yb) {
        yb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, yb.unregisterOnNextCall = !1, yb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(yb)
        }), 0))
      }
      _remove(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!yb) return !1;
        const Wy = this._observers.indexOf(yb);
        return -1 !== Wy && (bb && this._numObserversMarkedAsDeleted--, this._observers.splice(Wy, 1), !0)
      }
      makeObserverTopPriority(yb) {
        this._remove(yb, !1), this._observers.unshift(yb)
      }
      makeObserverBottomPriority(yb) {
        this._remove(yb, !1), this._observers.push(yb)
      }
      notifyObservers(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = yb), !this._observers.length) return !0;
        const fy = this._eventState;
        fy.mask = bb, fy.target = Wy, fy.currentTarget = Uy, fy.skipNextObservers = !1, fy.lastReturnValue = yb, fy.userInfo = hy;
        for (const Zy of this._observers)
          if (!Zy._willBeUnregistered && (Zy.mask & bb && (Zy.unregisterOnNextCall && this._deferUnregister(Zy), Zy.scope ? fy.lastReturnValue = Zy.callback.apply(Zy.scope, [yb, fy]) : fy.lastReturnValue = Zy.callback(yb, fy)), fy.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), yb._willBeUnregistered) return;
        const Uy = this._eventState;
        Uy.mask = Wy, Uy.skipNextObservers = !1, yb.unregisterOnNextCall && this._deferUnregister(yb), yb.callback(bb, Uy)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const yb = this._observers.pop();
          yb && (yb._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const yb = new Zy;
        return yb._observers = this._observers.slice(0), yb
      }
      hasSpecificMask() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const bb of this._observers)
          if (bb.mask & yb || bb.mask === yb) return !0;
        return !1
      }
    }
  },
  59676: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      AsyncLoop: () => Uy.d,
      RegisterTools: () => Uy.h,
      Tools: () => Uy.k,
      className: () => Uy.m
    });
    var Uy = Wy(38576);
    (0, Uy.h)()
  },
  35909: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => fy,
      e: () => hy
    });
    const Uy = {};

    function hy(yb, bb) {
      Uy[yb] = bb
    }

    function fy(yb) {
      return Uy[yb]
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);