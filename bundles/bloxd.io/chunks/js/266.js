export const id = 266;
export const ids = [266];
export const modules = {
  38313: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(38318);
    class Hb {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Hb.Instances = [], Hb.OnEnginesDisposedObservable = new eb.b, Hb._LastCreatedScene = null, Hb.UseFallbackTexture = !0, Hb.FallbackTexture = ""
  },
  39966: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(39971);
    const Hb = (bb, wb, Mb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Mb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(wb) : null;
    class pb {
      static DeepCopy(bb, wb, Mb, pb) {
        let Vb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const gb = function(bb) {
          const wb = [];
          do {
            const Mb = Object.getOwnPropertyNames(bb);
            for (const bb of Mb) - 1 === wb.indexOf(bb) && wb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return wb
        }(bb);
        for (const Lb of gb) {
          if ("_" === Lb[0] && (!pb || -1 === pb.indexOf(Lb))) continue;
          if (Lb.endsWith("Observable")) continue;
          if (Mb && -1 !== Mb.indexOf(Lb)) continue;
          const gb = bb[Lb],
            Ib = typeof gb;
          if ("function" !== Ib) try {
            if ("object" === Ib)
              if (gb instanceof Uint8Array) wb[Lb] = Uint8Array.from(gb);
              else if (gb instanceof Array) {
              if (wb[Lb] = [], gb.length > 0)
                if ("object" == typeof gb[0])
                  for (let bb = 0; bb < gb.length; bb++) {
                    const Mb = Hb(gb[bb], wb, Vb); - 1 === wb[Lb].indexOf(Mb) && wb[Lb].push(Mb)
                  } else wb[Lb] = gb.slice(0)
            } else wb[Lb] = Hb(gb, wb, Vb);
            else wb[Lb] = gb
          } catch (lb) {
            eb.b.Warn(lb.message)
          }
        }
      }
    }
  },
  39148: (bb, wb, Mb) => {
    function eb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const wb = 16 * Math.random() | 0;
        return ("x" === bb ? wb : 3 & wb | 8).toString(16)
      }))
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  39971: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      static _CheckLimit(bb, wb) {
        let Mb = eb._LogLimitOutputs[bb];
        return Mb ? Mb.current++ : (Mb = {
          limit: wb,
          current: 1
        }, eb._LogLimitOutputs[bb] = Mb), Mb.current <= Mb.limit
      }
      static _GenerateLimitMessage(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Mb = eb._LogLimitOutputs[bb];
        if (!Mb || !eb.MessageLimitReached) return;
        const Hb = this._Levels[wb];
        Mb.current === Mb.limit && eb[Hb.name](eb.MessageLimitReached.replace(/%LIMIT%/g, "" + Mb.limit).replace(/%TYPE%/g, Hb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        eb._LogCache = bb + eb._LogCache, eb.OnNewCacheEntry && eb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const wb = bb => bb < 10 ? "0" + bb : "" + bb,
          Mb = new Date;
        return "[" + wb(Mb.getHours()) + ":" + wb(Mb.getMinutes()) + ":" + wb(Mb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, wb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const Hb = Array.isArray(wb) ? wb[0] : wb;
        if (void 0 !== Mb && !eb._CheckLimit(Hb, Mb)) return;
        const pb = eb._FormatMessage(Hb),
          Vb = this._Levels[bb],
          gb = Array.isArray(wb) ? wb.slice(1) : [];
        Vb.logFunc && Vb.logFunc("BJS - " + pb, ...gb);
        const lb = `<div style='color:${Vb.color}'>${pb}</div><br>`;
        eb._AddLogEntry(lb), eb._GenerateLimitMessage(Hb, bb)
      }
      static get LogCache() {
        return eb._LogCache
      }
      static ClearLogCache() {
        eb._LogCache = "", eb._LogLimitOutputs = {}, eb.errorsCount = 0
      }
      static set LogLevels(bb) {
        eb.Log = eb._LogDisabled, eb.Warn = eb._LogDisabled, eb.Error = eb._LogDisabled;
        const wb = [eb.MessageLogLevel, eb.WarningLogLevel, eb.ErrorLogLevel];
        for (const Mb of wb)
          if ((bb & Mb) === Mb) {
            const bb = this._Levels[Mb];
            eb[bb.name] = eb._LogEnabled.bind(eb, Mb)
          }
      }
    }
    eb.NoneLogLevel = 0, eb.MessageLogLevel = 1, eb.WarningLogLevel = 2, eb.ErrorLogLevel = 4, eb.AllLogLevel = 7, eb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", eb._LogCache = "", eb._LogLimitOutputs = {}, eb._Levels = [{}, {
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
    }], eb.errorsCount = 0, eb.Log = eb._LogEnabled.bind(eb, eb.MessageLogLevel), eb.Warn = eb._LogEnabled.bind(eb, eb.WarningLogLevel), eb.Error = eb._LogEnabled.bind(eb, eb.ErrorLogLevel)
  },
  38318: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    const eb = "undefined" !== typeof WeakRef;
    class Hb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(bb, wb, Mb, eb)
      }
      initialize(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = bb, this.skipNextObservers = wb, this.target = Mb, this.currentTarget = eb, this
      }
    }
    class pb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = bb, this.mask = wb, this.scope = Mb, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(bb)
      }
    }
    class Vb {
      static FromPromise(bb, wb) {
        const Mb = new Vb;
        return bb.then((bb => {
          Mb.notifyObservers(bb)
        })).catch((bb => {
          if (!wb) throw bb;
          wb.notifyObservers(bb)
        })), Mb
      }
      get observers() {
        return this._observers
      }
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = wb, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Hb(0), bb && (this._onObserverAdded = bb)
      }
      add(bb) {
        let wb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!bb) return null;
        const Hb = new pb(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Hb.unregisterOnNextCall = Mb, wb ? this._observers.unshift(Hb) : this._observers.push(Hb), this._onObserverAdded && this._onObserverAdded(Hb), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Hb, this._lastNotifiedValue);
        const Vb = eb ? new WeakRef(this) : {
          deref: () => this
        };
        return Hb._remove = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const wb = Vb.deref();
          wb && (bb ? wb.remove(Hb) : wb._remove(Hb))
        }, Hb
      }
      addOnce(bb) {
        return this.add(bb, void 0, void 0, void 0, !0)
      }
      remove(bb) {
        if (!bb) return !1;
        bb._remove = null;
        return -1 !== this._observers.indexOf(bb) && (this._deferUnregister(bb), !0)
      }
      removeCallback(bb, wb) {
        for (let Mb = 0; Mb < this._observers.length; Mb++) {
          const eb = this._observers[Mb];
          if (!eb._willBeUnregistered && (eb.callback === bb && (!wb || wb === eb.scope))) return this._deferUnregister(eb), !0
        }
        return !1
      }
      _deferUnregister(bb) {
        bb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, bb.unregisterOnNextCall = !1, bb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(bb)
        }), 0))
      }
      _remove(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb) return !1;
        const Mb = this._observers.indexOf(bb);
        return -1 !== Mb && (wb && this._numObserversMarkedAsDeleted--, this._observers.splice(Mb, 1), !0)
      }
      makeObserverTopPriority(bb) {
        this._remove(bb, !1), this._observers.unshift(bb)
      }
      makeObserverBottomPriority(bb) {
        this._remove(bb, !1), this._observers.push(bb)
      }
      notifyObservers(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), !this._observers.length) return !0;
        const pb = this._eventState;
        pb.mask = wb, pb.target = Mb, pb.currentTarget = eb, pb.skipNextObservers = !1, pb.lastReturnValue = bb, pb.userInfo = Hb;
        for (const Vb of this._observers)
          if (!Vb._willBeUnregistered && (Vb.mask & wb && (Vb.unregisterOnNextCall && this._deferUnregister(Vb), Vb.scope ? pb.lastReturnValue = Vb.callback.apply(Vb.scope, [bb, pb]) : pb.lastReturnValue = Vb.callback(bb, pb)), pb.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = wb), bb._willBeUnregistered) return;
        const eb = this._eventState;
        eb.mask = Mb, eb.skipNextObservers = !1, bb.unregisterOnNextCall && this._deferUnregister(bb), bb.callback(wb, eb)
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
        const bb = new Vb;
        return bb._observers = this._observers.slice(0), bb
      }
      hasSpecificMask() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const wb of this._observers)
          if (wb.mask & bb || wb.mask === bb) return !0;
        return !1
      }
    }
  },
  64405: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      AsyncLoop: () => eb.b,
      RegisterTools: () => eb.d,
      Tools: () => eb.e,
      className: () => eb.h
    });
    var eb = Mb(41771);
    (0, eb.d)()
  },
  38333: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Hb
    });
    const eb = {};

    function Hb(bb, wb) {
      eb[bb] = wb
    }

    function pb(bb) {
      return eb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);