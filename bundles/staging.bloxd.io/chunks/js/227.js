export const id = 227;
export const ids = [227];
export const modules = {
  36677: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb
    });
    var kb = sb(36683);
    class Wb {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Wb.Instances = [], Wb.OnEnginesDisposedObservable = new kb.c, Wb._LastCreatedScene = null, Wb.UseFallbackTexture = !0, Wb.FallbackTexture = ""
  },
  38279: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(38284);
    const Wb = (bb, cb, sb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : sb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(cb) : null;
    class ab {
      static DeepCopy(bb, cb, sb, ab) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ub = function(bb) {
          const cb = [];
          do {
            const sb = Object.getOwnPropertyNames(bb);
            for (const bb of sb) - 1 === cb.indexOf(bb) && cb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return cb
        }(bb);
        for (const Hb of Ub) {
          if ("_" === Hb[0] && (!ab || -1 === ab.indexOf(Hb))) continue;
          if (Hb.endsWith("Observable")) continue;
          if (sb && -1 !== sb.indexOf(Hb)) continue;
          const Ub = bb[Hb],
            fb = typeof Ub;
          if ("function" !== fb) try {
            if ("object" === fb)
              if (Ub instanceof Uint8Array) cb[Hb] = Uint8Array.from(Ub);
              else if (Ub instanceof Array) {
              if (cb[Hb] = [], Ub.length > 0)
                if ("object" == typeof Ub[0])
                  for (let bb = 0; bb < Ub.length; bb++) {
                    const sb = Wb(Ub[bb], cb, Tb); - 1 === cb[Hb].indexOf(sb) && cb[Hb].push(sb)
                  } else cb[Hb] = Ub.slice(0)
            } else cb[Hb] = Wb(Ub, cb, Tb);
            else cb[Hb] = Ub
          } catch (Ib) {
            kb.c.Warn(Ib.message)
          }
        }
      }
    }
  },
  37501: (bb, cb, sb) => {
    function kb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const cb = 16 * Math.random() | 0;
        return ("x" === bb ? cb : 3 & cb | 8).toString(16)
      }))
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  38284: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      static _CheckLimit(bb, cb) {
        let sb = kb._LogLimitOutputs[bb];
        return sb ? sb.current++ : (sb = {
          limit: cb,
          current: 1
        }, kb._LogLimitOutputs[bb] = sb), sb.current <= sb.limit
      }
      static _GenerateLimitMessage(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sb = kb._LogLimitOutputs[bb];
        if (!sb || !kb.MessageLimitReached) return;
        const Wb = this._Levels[cb];
        sb.current === sb.limit && kb[Wb.name](kb.MessageLimitReached.replace(/%LIMIT%/g, "" + sb.limit).replace(/%TYPE%/g, Wb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        kb._LogCache = bb + kb._LogCache, kb.OnNewCacheEntry && kb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const cb = bb => bb < 10 ? "0" + bb : "" + bb,
          sb = new Date;
        return "[" + cb(sb.getHours()) + ":" + cb(sb.getMinutes()) + ":" + cb(sb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, cb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const Wb = Array.isArray(cb) ? cb[0] : cb;
        if (void 0 !== sb && !kb._CheckLimit(Wb, sb)) return;
        const ab = kb._FormatMessage(Wb),
          Tb = this._Levels[bb],
          Ub = Array.isArray(cb) ? cb.slice(1) : [];
        Tb.logFunc && Tb.logFunc("BJS - " + ab, ...Ub);
        const Ib = `<div style='color:${Tb.color}'>${ab}</div><br>`;
        kb._AddLogEntry(Ib), kb._GenerateLimitMessage(Wb, bb)
      }
      static get LogCache() {
        return kb._LogCache
      }
      static ClearLogCache() {
        kb._LogCache = "", kb._LogLimitOutputs = {}, kb.errorsCount = 0
      }
      static set LogLevels(bb) {
        kb.Log = kb._LogDisabled, kb.Warn = kb._LogDisabled, kb.Error = kb._LogDisabled;
        const cb = [kb.MessageLogLevel, kb.WarningLogLevel, kb.ErrorLogLevel];
        for (const sb of cb)
          if ((bb & sb) === sb) {
            const bb = this._Levels[sb];
            kb[bb.name] = kb._LogEnabled.bind(kb, sb)
          }
      }
    }
    kb.NoneLogLevel = 0, kb.MessageLogLevel = 1, kb.WarningLogLevel = 2, kb.ErrorLogLevel = 4, kb.AllLogLevel = 7, kb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", kb._LogCache = "", kb._LogLimitOutputs = {}, kb._Levels = [{}, {
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
    }], kb.errorsCount = 0, kb.Log = kb._LogEnabled.bind(kb, kb.MessageLogLevel), kb.Warn = kb._LogEnabled.bind(kb, kb.WarningLogLevel), kb.Error = kb._LogEnabled.bind(kb, kb.ErrorLogLevel)
  },
  36683: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    const kb = "undefined" !== typeof WeakRef;
    class Wb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(bb, cb, sb, kb)
      }
      initialize(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = bb, this.skipNextObservers = cb, this.target = sb, this.currentTarget = kb, this
      }
    }
    class ab {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = bb, this.mask = cb, this.scope = sb, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(bb)
      }
    }
    class Tb {
      static FromPromise(bb, cb) {
        const sb = new Tb;
        return bb.then((bb => {
          sb.notifyObservers(bb)
        })).catch((bb => {
          if (!cb) throw bb;
          cb.notifyObservers(bb)
        })), sb
      }
      get observers() {
        return this._observers
      }
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = cb, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Wb(0), bb && (this._onObserverAdded = bb)
      }
      add(bb) {
        let cb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          sb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!bb) return null;
        const Wb = new ab(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Wb.unregisterOnNextCall = sb, cb ? this._observers.unshift(Wb) : this._observers.push(Wb), this._onObserverAdded && this._onObserverAdded(Wb), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Wb, this._lastNotifiedValue);
        const Tb = kb ? new WeakRef(this) : {
          deref: () => this
        };
        return Wb._remove = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const cb = Tb.deref();
          cb && (bb ? cb.remove(Wb) : cb._remove(Wb))
        }, Wb
      }
      addOnce(bb) {
        return this.add(bb, void 0, void 0, void 0, !0)
      }
      remove(bb) {
        if (!bb) return !1;
        bb._remove = null;
        return -1 !== this._observers.indexOf(bb) && (this._deferUnregister(bb), !0)
      }
      removeCallback(bb, cb) {
        for (let sb = 0; sb < this._observers.length; sb++) {
          const kb = this._observers[sb];
          if (!kb._willBeUnregistered && (kb.callback === bb && (!cb || cb === kb.scope))) return this._deferUnregister(kb), !0
        }
        return !1
      }
      _deferUnregister(bb) {
        bb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, bb.unregisterOnNextCall = !1, bb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(bb)
        }), 0))
      }
      _remove(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb) return !1;
        const sb = this._observers.indexOf(bb);
        return -1 !== sb && (cb && this._numObserversMarkedAsDeleted--, this._observers.splice(sb, 1), !0)
      }
      makeObserverTopPriority(bb) {
        this._remove(bb, !1), this._observers.unshift(bb)
      }
      makeObserverBottomPriority(bb) {
        this._remove(bb, !1), this._observers.push(bb)
      }
      notifyObservers(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), !this._observers.length) return !0;
        const ab = this._eventState;
        ab.mask = cb, ab.target = sb, ab.currentTarget = kb, ab.skipNextObservers = !1, ab.lastReturnValue = bb, ab.userInfo = Wb;
        for (const Tb of this._observers)
          if (!Tb._willBeUnregistered && (Tb.mask & cb && (Tb.unregisterOnNextCall && this._deferUnregister(Tb), Tb.scope ? ab.lastReturnValue = Tb.callback.apply(Tb.scope, [bb, ab]) : ab.lastReturnValue = Tb.callback(bb, ab)), ab.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = cb), bb._willBeUnregistered) return;
        const kb = this._eventState;
        kb.mask = sb, kb.skipNextObservers = !1, bb.unregisterOnNextCall && this._deferUnregister(bb), bb.callback(cb, kb)
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
        const bb = new Tb;
        return bb._observers = this._observers.slice(0), bb
      }
      hasSpecificMask() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const cb of this._observers)
          if (cb.mask & bb || cb.mask === bb) return !0;
        return !1
      }
    }
  },
  60563: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      AsyncLoop: () => kb.b,
      RegisterTools: () => kb.f,
      Tools: () => kb.g,
      className: () => kb.i
    });
    var kb = sb(39531);
    (0, kb.f)()
  },
  36698: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      h: () => Wb
    });
    const kb = {};

    function Wb(bb, cb) {
      kb[bb] = cb
    }

    function ab(bb) {
      return kb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);