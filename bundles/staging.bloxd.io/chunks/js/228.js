export const id = 228;
export const ids = [228];
export const modules = {
  36748: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(36753);
    class Ob {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Ob.Instances = [], Ob.OnEnginesDisposedObservable = new Bb.e, Ob._LastCreatedScene = null, Ob.UseFallbackTexture = !0, Ob.FallbackTexture = ""
  },
  38296: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(38302);
    const Ob = (bb, ub, hb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : hb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ub) : null;
    class Gb {
      static DeepCopy(bb, ub, hb, Gb) {
        let Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Lb = function(bb) {
          const ub = [];
          do {
            const hb = Object.getOwnPropertyNames(bb);
            for (const bb of hb) - 1 === ub.indexOf(bb) && ub.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ub
        }(bb);
        for (const Sb of Lb) {
          if ("_" === Sb[0] && (!Gb || -1 === Gb.indexOf(Sb))) continue;
          if (Sb.endsWith("Observable")) continue;
          if (hb && -1 !== hb.indexOf(Sb)) continue;
          const Lb = bb[Sb],
            ab = typeof Lb;
          if ("function" !== ab) try {
            if ("object" === ab)
              if (Lb instanceof Uint8Array) ub[Sb] = Uint8Array.from(Lb);
              else if (Lb instanceof Array) {
              if (ub[Sb] = [], Lb.length > 0)
                if ("object" == typeof Lb[0])
                  for (let bb = 0; bb < Lb.length; bb++) {
                    const hb = Ob(Lb[bb], ub, Ub); - 1 === ub[Sb].indexOf(hb) && ub[Sb].push(hb)
                  } else ub[Sb] = Lb.slice(0)
            } else ub[Sb] = Ob(Lb, ub, Ub);
            else ub[Sb] = Lb
          } catch (Yb) {
            Bb.b.Warn(Yb.message)
          }
        }
      }
    }
  },
  37507: (bb, ub, hb) => {
    function Bb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ub = 16 * Math.random() | 0;
        return ("x" === bb ? ub : 3 & ub | 8).toString(16)
      }))
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  38302: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      static _CheckLimit(bb, ub) {
        let hb = Bb._LogLimitOutputs[bb];
        return hb ? hb.current++ : (hb = {
          limit: ub,
          current: 1
        }, Bb._LogLimitOutputs[bb] = hb), hb.current <= hb.limit
      }
      static _GenerateLimitMessage(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const hb = Bb._LogLimitOutputs[bb];
        if (!hb || !Bb.MessageLimitReached) return;
        const Ob = this._Levels[ub];
        hb.current === hb.limit && Bb[Ob.name](Bb.MessageLimitReached.replace(/%LIMIT%/g, "" + hb.limit).replace(/%TYPE%/g, Ob.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Bb._LogCache = bb + Bb._LogCache, Bb.OnNewCacheEntry && Bb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ub = bb => bb < 10 ? "0" + bb : "" + bb,
          hb = new Date;
        return "[" + ub(hb.getHours()) + ":" + ub(hb.getMinutes()) + ":" + ub(hb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ub) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Ob = Array.isArray(ub) ? ub[0] : ub;
        if (void 0 !== hb && !Bb._CheckLimit(Ob, hb)) return;
        const Gb = Bb._FormatMessage(Ob),
          Ub = this._Levels[bb],
          Lb = Array.isArray(ub) ? ub.slice(1) : [];
        Ub.logFunc && Ub.logFunc("BJS - " + Gb, ...Lb);
        const Yb = `<div style='color:${Ub.color}'>${Gb}</div><br>`;
        Bb._AddLogEntry(Yb), Bb._GenerateLimitMessage(Ob, bb)
      }
      static get LogCache() {
        return Bb._LogCache
      }
      static ClearLogCache() {
        Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb.errorsCount = 0
      }
      static set LogLevels(bb) {
        Bb.Log = Bb._LogDisabled, Bb.Warn = Bb._LogDisabled, Bb.Error = Bb._LogDisabled;
        const ub = [Bb.MessageLogLevel, Bb.WarningLogLevel, Bb.ErrorLogLevel];
        for (const hb of ub)
          if ((bb & hb) === hb) {
            const bb = this._Levels[hb];
            Bb[bb.name] = Bb._LogEnabled.bind(Bb, hb)
          }
      }
    }
    Bb.NoneLogLevel = 0, Bb.MessageLogLevel = 1, Bb.WarningLogLevel = 2, Bb.ErrorLogLevel = 4, Bb.AllLogLevel = 7, Bb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb._Levels = [{}, {
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
    }], Bb.errorsCount = 0, Bb.Log = Bb._LogEnabled.bind(Bb, Bb.MessageLogLevel), Bb.Warn = Bb._LogEnabled.bind(Bb, Bb.WarningLogLevel), Bb.Error = Bb._LogEnabled.bind(Bb, Bb.ErrorLogLevel)
  },
  36753: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    const Bb = "undefined" !== typeof WeakRef;
    class Ob {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(bb, ub, hb, Bb)
      }
      initialize(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = bb, this.skipNextObservers = ub, this.target = hb, this.currentTarget = Bb, this
      }
    }
    class Gb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = bb, this.mask = ub, this.scope = hb, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(bb)
      }
    }
    class Ub {
      static FromPromise(bb, ub) {
        const hb = new Ub;
        return bb.then((bb => {
          hb.notifyObservers(bb)
        })).catch((bb => {
          if (!ub) throw bb;
          ub.notifyObservers(bb)
        })), hb
      }
      get observers() {
        return this._observers
      }
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ub, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Ob(0), bb && (this._onObserverAdded = bb)
      }
      add(bb) {
        let ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!bb) return null;
        const Ob = new Gb(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Ob.unregisterOnNextCall = hb, ub ? this._observers.unshift(Ob) : this._observers.push(Ob), this._onObserverAdded && this._onObserverAdded(Ob), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Ob, this._lastNotifiedValue);
        const Ub = Bb ? new WeakRef(this) : {
          deref: () => this
        };
        return Ob._remove = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ub = Ub.deref();
          ub && (bb ? ub.remove(Ob) : ub._remove(Ob))
        }, Ob
      }
      addOnce(bb) {
        return this.add(bb, void 0, void 0, void 0, !0)
      }
      remove(bb) {
        if (!bb) return !1;
        bb._remove = null;
        return -1 !== this._observers.indexOf(bb) && (this._deferUnregister(bb), !0)
      }
      removeCallback(bb, ub) {
        for (let hb = 0; hb < this._observers.length; hb++) {
          const Bb = this._observers[hb];
          if (!Bb._willBeUnregistered && (Bb.callback === bb && (!ub || ub === Bb.scope))) return this._deferUnregister(Bb), !0
        }
        return !1
      }
      _deferUnregister(bb) {
        bb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, bb.unregisterOnNextCall = !1, bb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(bb)
        }), 0))
      }
      _remove(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb) return !1;
        const hb = this._observers.indexOf(bb);
        return -1 !== hb && (ub && this._numObserversMarkedAsDeleted--, this._observers.splice(hb, 1), !0)
      }
      makeObserverTopPriority(bb) {
        this._remove(bb, !1), this._observers.unshift(bb)
      }
      makeObserverBottomPriority(bb) {
        this._remove(bb, !1), this._observers.push(bb)
      }
      notifyObservers(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), !this._observers.length) return !0;
        const Gb = this._eventState;
        Gb.mask = ub, Gb.target = hb, Gb.currentTarget = Bb, Gb.skipNextObservers = !1, Gb.lastReturnValue = bb, Gb.userInfo = Ob;
        for (const Ub of this._observers)
          if (!Ub._willBeUnregistered && (Ub.mask & ub && (Ub.unregisterOnNextCall && this._deferUnregister(Ub), Ub.scope ? Gb.lastReturnValue = Ub.callback.apply(Ub.scope, [bb, Gb]) : Gb.lastReturnValue = Ub.callback(bb, Gb)), Gb.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ub), bb._willBeUnregistered) return;
        const Bb = this._eventState;
        Bb.mask = hb, Bb.skipNextObservers = !1, bb.unregisterOnNextCall && this._deferUnregister(bb), bb.callback(ub, Bb)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const bb = this._observers.pop();
          bb && (bb._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const bb = new Ub;
        return bb._observers = this._observers.slice(0), bb
      }
      hasSpecificMask() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ub of this._observers)
          if (ub.mask & bb || ub.mask === bb) return !0;
        return !1
      }
    }
  },
  60578: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      AsyncLoop: () => Bb.d,
      RegisterTools: () => Bb.h,
      Tools: () => Bb.k,
      className: () => Bb.o
    });
    var Bb = hb(39559);
    (0, Bb.h)()
  },
  36762: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob
    });
    const Bb = {};

    function Ob(bb, ub) {
      Bb[bb] = ub
    }

    function Gb(bb) {
      return Bb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);