export const id = 227;
export const ids = [227];
export const modules = {
  36425: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(36431);
    class Mb {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Mb.Instances = [], Mb.OnEnginesDisposedObservable = new Ab.b, Mb._LastCreatedScene = null, Mb.UseFallbackTexture = !0, Mb.FallbackTexture = ""
  },
  37982: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(37989);
    const Mb = (bb, ab, Ub) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Ub && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ab) : null;
    class Tb {
      static DeepCopy(bb, ab, Ub, Tb) {
        let Eb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Yb = function(bb) {
          const ab = [];
          do {
            const Ub = Object.getOwnPropertyNames(bb);
            for (const bb of Ub) - 1 === ab.indexOf(bb) && ab.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ab
        }(bb);
        for (const eb of Yb) {
          if ("_" === eb[0] && (!Tb || -1 === Tb.indexOf(eb))) continue;
          if (eb.endsWith("Observable")) continue;
          if (Ub && -1 !== Ub.indexOf(eb)) continue;
          const Yb = bb[eb],
            vb = typeof Yb;
          if ("function" !== vb) try {
            if ("object" === vb)
              if (Yb instanceof Uint8Array) ab[eb] = Uint8Array.from(Yb);
              else if (Yb instanceof Array) {
              if (ab[eb] = [], Yb.length > 0)
                if ("object" == typeof Yb[0])
                  for (let bb = 0; bb < Yb.length; bb++) {
                    const Ub = Mb(Yb[bb], ab, Eb); - 1 === ab[eb].indexOf(Ub) && ab[eb].push(Ub)
                  } else ab[eb] = Yb.slice(0)
            } else ab[eb] = Mb(Yb, ab, Eb);
            else ab[eb] = Yb
          } catch (Bb) {
            Ab.e.Warn(Bb.message)
          }
        }
      }
    }
  },
  37251: (bb, ab, Ub) => {
    function Ab() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ab = 16 * Math.random() | 0;
        return ("x" === bb ? ab : 3 & ab | 8).toString(16)
      }))
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  37989: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      static _CheckLimit(bb, ab) {
        let Ub = Ab._LogLimitOutputs[bb];
        return Ub ? Ub.current++ : (Ub = {
          limit: ab,
          current: 1
        }, Ab._LogLimitOutputs[bb] = Ub), Ub.current <= Ub.limit
      }
      static _GenerateLimitMessage(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ub = Ab._LogLimitOutputs[bb];
        if (!Ub || !Ab.MessageLimitReached) return;
        const Mb = this._Levels[ab];
        Ub.current === Ub.limit && Ab[Mb.name](Ab.MessageLimitReached.replace(/%LIMIT%/g, "" + Ub.limit).replace(/%TYPE%/g, Mb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Ab._LogCache = bb + Ab._LogCache, Ab.OnNewCacheEntry && Ab.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ab = bb => bb < 10 ? "0" + bb : "" + bb,
          Ub = new Date;
        return "[" + ab(Ub.getHours()) + ":" + ab(Ub.getMinutes()) + ":" + ab(Ub.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ab) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Mb = Array.isArray(ab) ? ab[0] : ab;
        if (void 0 !== Ub && !Ab._CheckLimit(Mb, Ub)) return;
        const Tb = Ab._FormatMessage(Mb),
          Eb = this._Levels[bb],
          Yb = Array.isArray(ab) ? ab.slice(1) : [];
        Eb.logFunc && Eb.logFunc("BJS - " + Tb, ...Yb);
        const Bb = `<div style='color:${Eb.color}'>${Tb}</div><br>`;
        Ab._AddLogEntry(Bb), Ab._GenerateLimitMessage(Mb, bb)
      }
      static get LogCache() {
        return Ab._LogCache
      }
      static ClearLogCache() {
        Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab.errorsCount = 0
      }
      static set LogLevels(bb) {
        Ab.Log = Ab._LogDisabled, Ab.Warn = Ab._LogDisabled, Ab.Error = Ab._LogDisabled;
        const ab = [Ab.MessageLogLevel, Ab.WarningLogLevel, Ab.ErrorLogLevel];
        for (const Ub of ab)
          if ((bb & Ub) === Ub) {
            const bb = this._Levels[Ub];
            Ab[bb.name] = Ab._LogEnabled.bind(Ab, Ub)
          }
      }
    }
    Ab.NoneLogLevel = 0, Ab.MessageLogLevel = 1, Ab.WarningLogLevel = 2, Ab.ErrorLogLevel = 4, Ab.AllLogLevel = 7, Ab.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab._Levels = [{}, {
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
    }], Ab.errorsCount = 0, Ab.Log = Ab._LogEnabled.bind(Ab, Ab.MessageLogLevel), Ab.Warn = Ab._LogEnabled.bind(Ab, Ab.WarningLogLevel), Ab.Error = Ab._LogEnabled.bind(Ab, Ab.ErrorLogLevel)
  },
  36431: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    const Ab = "undefined" !== typeof WeakRef;
    class Mb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(bb, ab, Ub, Ab)
      }
      initialize(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = bb, this.skipNextObservers = ab, this.target = Ub, this.currentTarget = Ab, this
      }
    }
    class Tb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = bb, this.mask = ab, this.scope = Ub, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(bb)
      }
    }
    class Eb {
      static FromPromise(bb, ab) {
        const Ub = new Eb;
        return bb.then((bb => {
          Ub.notifyObservers(bb)
        })).catch((bb => {
          if (!ab) throw bb;
          ab.notifyObservers(bb)
        })), Ub
      }
      get observers() {
        return this._observers
      }
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ab, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Mb(0), bb && (this._onObserverAdded = bb)
      }
      add(bb) {
        let ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!bb) return null;
        const Mb = new Tb(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Mb.unregisterOnNextCall = Ub, ab ? this._observers.unshift(Mb) : this._observers.push(Mb), this._onObserverAdded && this._onObserverAdded(Mb), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Mb, this._lastNotifiedValue);
        const Eb = Ab ? new WeakRef(this) : {
          deref: () => this
        };
        return Mb._remove = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ab = Eb.deref();
          ab && (bb ? ab.remove(Mb) : ab._remove(Mb))
        }, Mb
      }
      addOnce(bb) {
        return this.add(bb, void 0, void 0, void 0, !0)
      }
      remove(bb) {
        if (!bb) return !1;
        bb._remove = null;
        return -1 !== this._observers.indexOf(bb) && (this._deferUnregister(bb), !0)
      }
      removeCallback(bb, ab) {
        for (let Ub = 0; Ub < this._observers.length; Ub++) {
          const Ab = this._observers[Ub];
          if (!Ab._willBeUnregistered && (Ab.callback === bb && (!ab || ab === Ab.scope))) return this._deferUnregister(Ab), !0
        }
        return !1
      }
      _deferUnregister(bb) {
        bb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, bb.unregisterOnNextCall = !1, bb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(bb)
        }), 0))
      }
      _remove(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb) return !1;
        const Ub = this._observers.indexOf(bb);
        return -1 !== Ub && (ab && this._numObserversMarkedAsDeleted--, this._observers.splice(Ub, 1), !0)
      }
      makeObserverTopPriority(bb) {
        this._remove(bb, !1), this._observers.unshift(bb)
      }
      makeObserverBottomPriority(bb) {
        this._remove(bb, !1), this._observers.push(bb)
      }
      notifyObservers(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), !this._observers.length) return !0;
        const Tb = this._eventState;
        Tb.mask = ab, Tb.target = Ub, Tb.currentTarget = Ab, Tb.skipNextObservers = !1, Tb.lastReturnValue = bb, Tb.userInfo = Mb;
        for (const Eb of this._observers)
          if (!Eb._willBeUnregistered && (Eb.mask & ab && (Eb.unregisterOnNextCall && this._deferUnregister(Eb), Eb.scope ? Tb.lastReturnValue = Eb.callback.apply(Eb.scope, [bb, Tb]) : Tb.lastReturnValue = Eb.callback(bb, Tb)), Tb.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ab), bb._willBeUnregistered) return;
        const Ab = this._eventState;
        Ab.mask = Ub, Ab.skipNextObservers = !1, bb.unregisterOnNextCall && this._deferUnregister(bb), bb.callback(ab, Ab)
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
        const bb = new Eb;
        return bb._observers = this._observers.slice(0), bb
      }
      hasSpecificMask() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ab of this._observers)
          if (ab.mask & bb || ab.mask === bb) return !0;
        return !1
      }
    }
  },
  60240: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      AsyncLoop: () => Ab.c,
      RegisterTools: () => Ab.d,
      Tools: () => Ab.h,
      className: () => Ab.l
    });
    var Ab = Ub(39195);
    (0, Ab.d)()
  },
  36447: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      f: () => Mb
    });
    const Ab = {};

    function Mb(bb, ab) {
      Ab[bb] = ab
    }

    function Tb(bb) {
      return Ab[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);