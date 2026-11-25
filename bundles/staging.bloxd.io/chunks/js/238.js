export const id = 238;
export const ids = [238];
export const modules = {
  37147: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => JB
    });
    var TB = ZB(37153);
    class JB {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    JB.Instances = [], JB.OnEnginesDisposedObservable = new TB.b, JB._LastCreatedScene = null, JB.UseFallbackTexture = !0, JB.FallbackTexture = ""
  },
  38714: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(38718);
    const JB = (BB, IB, ZB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : ZB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(IB) : null;
    class oB {
      static DeepCopy(BB, IB, ZB, oB) {
        let GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const vB = function(BB) {
          const IB = [];
          do {
            const ZB = Object.getOwnPropertyNames(BB);
            for (const BB of ZB) - 1 === IB.indexOf(BB) && IB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return IB
        }(BB);
        for (const cB of vB) {
          if ("_" === cB[0] && (!oB || -1 === oB.indexOf(cB))) continue;
          if (cB.endsWith("Observable")) continue;
          if (ZB && -1 !== ZB.indexOf(cB)) continue;
          const vB = BB[cB],
            nB = typeof vB;
          if ("function" !== nB) try {
            if ("object" === nB)
              if (vB instanceof Uint8Array) IB[cB] = Uint8Array.from(vB);
              else if (vB instanceof Array) {
              if (IB[cB] = [], vB.length > 0)
                if ("object" == typeof vB[0])
                  for (let BB = 0; BB < vB.length; BB++) {
                    const ZB = JB(vB[BB], IB, GB); - 1 === IB[cB].indexOf(ZB) && IB[cB].push(ZB)
                  } else IB[cB] = vB.slice(0)
            } else IB[cB] = JB(vB, IB, GB);
            else IB[cB] = vB
          } catch (kB) {
            TB.d.Warn(kB.message)
          }
        }
      }
    }
  },
  37964: (BB, IB, ZB) => {
    function TB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const IB = 16 * Math.random() | 0;
        return ("x" === BB ? IB : 3 & IB | 8).toString(16)
      }))
    }
    ZB.d(IB, {
      d: () => TB
    })
  },
  38718: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      static _CheckLimit(BB, IB) {
        let ZB = TB._LogLimitOutputs[BB];
        return ZB ? ZB.current++ : (ZB = {
          limit: IB,
          current: 1
        }, TB._LogLimitOutputs[BB] = ZB), ZB.current <= ZB.limit
      }
      static _GenerateLimitMessage(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZB = TB._LogLimitOutputs[BB];
        if (!ZB || !TB.MessageLimitReached) return;
        const JB = this._Levels[IB];
        ZB.current === ZB.limit && TB[JB.name](TB.MessageLimitReached.replace(/%LIMIT%/g, "" + ZB.limit).replace(/%TYPE%/g, JB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        TB._LogCache = BB + TB._LogCache, TB.OnNewCacheEntry && TB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const IB = BB => BB < 10 ? "0" + BB : "" + BB,
          ZB = new Date;
        return "[" + IB(ZB.getHours()) + ":" + IB(ZB.getMinutes()) + ":" + IB(ZB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, IB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const JB = Array.isArray(IB) ? IB[0] : IB;
        if (void 0 !== ZB && !TB._CheckLimit(JB, ZB)) return;
        const oB = TB._FormatMessage(JB),
          GB = this._Levels[BB],
          vB = Array.isArray(IB) ? IB.slice(1) : [];
        GB.logFunc && GB.logFunc("BJS - " + oB, ...vB);
        const kB = `<div style='color:${GB.color}'>${oB}</div><br>`;
        TB._AddLogEntry(kB), TB._GenerateLimitMessage(JB, BB)
      }
      static get LogCache() {
        return TB._LogCache
      }
      static ClearLogCache() {
        TB._LogCache = "", TB._LogLimitOutputs = {}, TB.errorsCount = 0
      }
      static set LogLevels(BB) {
        TB.Log = TB._LogDisabled, TB.Warn = TB._LogDisabled, TB.Error = TB._LogDisabled;
        const IB = [TB.MessageLogLevel, TB.WarningLogLevel, TB.ErrorLogLevel];
        for (const ZB of IB)
          if ((BB & ZB) === ZB) {
            const BB = this._Levels[ZB];
            TB[BB.name] = TB._LogEnabled.bind(TB, ZB)
          }
      }
    }
    TB.NoneLogLevel = 0, TB.MessageLogLevel = 1, TB.WarningLogLevel = 2, TB.ErrorLogLevel = 4, TB.AllLogLevel = 7, TB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", TB._LogCache = "", TB._LogLimitOutputs = {}, TB._Levels = [{}, {
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
    }], TB.errorsCount = 0, TB.Log = TB._LogEnabled.bind(TB, TB.MessageLogLevel), TB.Warn = TB._LogEnabled.bind(TB, TB.WarningLogLevel), TB.Error = TB._LogEnabled.bind(TB, TB.ErrorLogLevel)
  },
  37153: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => GB
    });
    const TB = "undefined" !== typeof WeakRef;
    class JB {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(BB, IB, ZB, TB)
      }
      initialize(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = BB, this.skipNextObservers = IB, this.target = ZB, this.currentTarget = TB, this
      }
    }
    class oB {
      constructor(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = BB, this.mask = IB, this.scope = ZB, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(BB)
      }
    }
    class GB {
      static FromPromise(BB, IB) {
        const ZB = new GB;
        return BB.then((BB => {
          ZB.notifyObservers(BB)
        })).catch((BB => {
          if (!IB) throw BB;
          IB.notifyObservers(BB)
        })), ZB
      }
      get observers() {
        return this._observers
      }
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = IB, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new JB(0), BB && (this._onObserverAdded = BB)
      }
      add(BB) {
        let IB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ZB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!BB) return null;
        const JB = new oB(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        JB.unregisterOnNextCall = ZB, IB ? this._observers.unshift(JB) : this._observers.push(JB), this._onObserverAdded && this._onObserverAdded(JB), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(JB, this._lastNotifiedValue);
        const GB = TB ? new WeakRef(this) : {
          deref: () => this
        };
        return JB._remove = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const IB = GB.deref();
          IB && (BB ? IB.remove(JB) : IB._remove(JB))
        }, JB
      }
      addOnce(BB) {
        return this.add(BB, void 0, void 0, void 0, !0)
      }
      remove(BB) {
        if (!BB) return !1;
        BB._remove = null;
        return -1 !== this._observers.indexOf(BB) && (this._deferUnregister(BB), !0)
      }
      removeCallback(BB, IB) {
        for (let ZB = 0; ZB < this._observers.length; ZB++) {
          const TB = this._observers[ZB];
          if (!TB._willBeUnregistered && (TB.callback === BB && (!IB || IB === TB.scope))) return this._deferUnregister(TB), !0
        }
        return !1
      }
      _deferUnregister(BB) {
        BB._willBeUnregistered || (this._numObserversMarkedAsDeleted++, BB.unregisterOnNextCall = !1, BB._willBeUnregistered = !0, setTimeout((() => {
          this._remove(BB)
        }), 0))
      }
      _remove(BB) {
        let IB = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!BB) return !1;
        const ZB = this._observers.indexOf(BB);
        return -1 !== ZB && (IB && this._numObserversMarkedAsDeleted--, this._observers.splice(ZB, 1), !0)
      }
      makeObserverTopPriority(BB) {
        this._remove(BB, !1), this._observers.unshift(BB)
      }
      makeObserverBottomPriority(BB) {
        this._remove(BB, !1), this._observers.push(BB)
      }
      notifyObservers(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZB = arguments.length > 2 ? arguments[2] : void 0,
          TB = arguments.length > 3 ? arguments[3] : void 0,
          JB = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = BB), !this._observers.length) return !0;
        const oB = this._eventState;
        oB.mask = IB, oB.target = ZB, oB.currentTarget = TB, oB.skipNextObservers = !1, oB.lastReturnValue = BB, oB.userInfo = JB;
        for (const GB of this._observers)
          if (!GB._willBeUnregistered && (GB.mask & IB && (GB.unregisterOnNextCall && this._deferUnregister(GB), GB.scope ? oB.lastReturnValue = GB.callback.apply(GB.scope, [BB, oB]) : oB.lastReturnValue = GB.callback(BB, oB)), oB.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(BB, IB) {
        let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = IB), BB._willBeUnregistered) return;
        const TB = this._eventState;
        TB.mask = ZB, TB.skipNextObservers = !1, BB.unregisterOnNextCall && this._deferUnregister(BB), BB.callback(IB, TB)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const BB = this._observers.pop();
          BB && (BB._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const BB = new GB;
        return BB._observers = this._observers.slice(0), BB
      }
      hasSpecificMask() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const IB of this._observers)
          if (IB.mask & BB || IB.mask === BB) return !0;
        return !1
      }
    }
  },
  61291: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      AsyncLoop: () => TB.d,
      RegisterTools: () => TB.f,
      Tools: () => TB.j,
      className: () => TB.k
    });
    var TB = ZB(40152);
    (0, TB.f)()
  },
  37170: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      i: () => JB
    });
    const TB = {};

    function JB(BB, IB) {
      TB[BB] = IB
    }

    function oB(BB) {
      return TB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);