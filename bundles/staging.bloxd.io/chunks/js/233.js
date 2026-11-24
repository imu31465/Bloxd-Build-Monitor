export const id = 233;
export const ids = [233];
export const modules = {
  37138: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(37144);
    class bS {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    bS.Instances = [], bS.OnEnginesDisposedObservable = new tS.e, bS._LastCreatedScene = null, bS.UseFallbackTexture = !0, bS.FallbackTexture = ""
  },
  38683: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(38687);
    const bS = (SS, HS, gS) => SS ? SS.getClassName && "Mesh" === SS.getClassName() ? null : !SS.getClassName || "SubMesh" !== SS.getClassName() && "PhysicsBody" !== SS.getClassName() ? SS.clone ? SS.clone() : Array.isArray(SS) ? SS.slice() : gS && "object" === typeof SS ? {
      ...SS
    } : null : SS.clone(HS) : null;
    class XS {
      static DeepCopy(SS, HS, gS, XS) {
        let xS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NS = function(SS) {
          const HS = [];
          do {
            const gS = Object.getOwnPropertyNames(SS);
            for (const SS of gS) - 1 === HS.indexOf(SS) && HS.push(SS)
          } while (SS = Object.getPrototypeOf(SS));
          return HS
        }(SS);
        for (const uS of NS) {
          if ("_" === uS[0] && (!XS || -1 === XS.indexOf(uS))) continue;
          if (uS.endsWith("Observable")) continue;
          if (gS && -1 !== gS.indexOf(uS)) continue;
          const NS = SS[uS],
            IS = typeof NS;
          if ("function" !== IS) try {
            if ("object" === IS)
              if (NS instanceof Uint8Array) HS[uS] = Uint8Array.from(NS);
              else if (NS instanceof Array) {
              if (HS[uS] = [], NS.length > 0)
                if ("object" == typeof NS[0])
                  for (let SS = 0; SS < NS.length; SS++) {
                    const gS = bS(NS[SS], HS, xS); - 1 === HS[uS].indexOf(gS) && HS[uS].push(gS)
                  } else HS[uS] = NS.slice(0)
            } else HS[uS] = bS(NS, HS, xS);
            else HS[uS] = NS
          } catch (qS) {
            tS.b.Warn(qS.message)
          }
        }
      }
    }
  },
  37933: (SS, HS, gS) => {
    function tS() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (SS => {
        const HS = 16 * Math.random() | 0;
        return ("x" === SS ? HS : 3 & HS | 8).toString(16)
      }))
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  38687: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      static _CheckLimit(SS, HS) {
        let gS = tS._LogLimitOutputs[SS];
        return gS ? gS.current++ : (gS = {
          limit: HS,
          current: 1
        }, tS._LogLimitOutputs[SS] = gS), gS.current <= gS.limit
      }
      static _GenerateLimitMessage(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gS = tS._LogLimitOutputs[SS];
        if (!gS || !tS.MessageLimitReached) return;
        const bS = this._Levels[HS];
        gS.current === gS.limit && tS[bS.name](tS.MessageLimitReached.replace(/%LIMIT%/g, "" + gS.limit).replace(/%TYPE%/g, bS.name ?? ""))
      }
      static _AddLogEntry(SS) {
        tS._LogCache = SS + tS._LogCache, tS.OnNewCacheEntry && tS.OnNewCacheEntry(SS)
      }
      static _FormatMessage(SS) {
        const HS = SS => SS < 10 ? "0" + SS : "" + SS,
          gS = new Date;
        return "[" + HS(gS.getHours()) + ":" + HS(gS.getMinutes()) + ":" + HS(gS.getSeconds()) + "]: " + SS
      }
      static _LogDisabled(SS, HS) {}
      static _LogEnabled() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const bS = Array.isArray(HS) ? HS[0] : HS;
        if (void 0 !== gS && !tS._CheckLimit(bS, gS)) return;
        const XS = tS._FormatMessage(bS),
          xS = this._Levels[SS],
          NS = Array.isArray(HS) ? HS.slice(1) : [];
        xS.logFunc && xS.logFunc("BJS - " + XS, ...NS);
        const qS = `<div style='color:${xS.color}'>${XS}</div><br>`;
        tS._AddLogEntry(qS), tS._GenerateLimitMessage(bS, SS)
      }
      static get LogCache() {
        return tS._LogCache
      }
      static ClearLogCache() {
        tS._LogCache = "", tS._LogLimitOutputs = {}, tS.errorsCount = 0
      }
      static set LogLevels(SS) {
        tS.Log = tS._LogDisabled, tS.Warn = tS._LogDisabled, tS.Error = tS._LogDisabled;
        const HS = [tS.MessageLogLevel, tS.WarningLogLevel, tS.ErrorLogLevel];
        for (const gS of HS)
          if ((SS & gS) === gS) {
            const SS = this._Levels[gS];
            tS[SS.name] = tS._LogEnabled.bind(tS, gS)
          }
      }
    }
    tS.NoneLogLevel = 0, tS.MessageLogLevel = 1, tS.WarningLogLevel = 2, tS.ErrorLogLevel = 4, tS.AllLogLevel = 7, tS.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tS._LogCache = "", tS._LogLimitOutputs = {}, tS._Levels = [{}, {
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
    }], tS.errorsCount = 0, tS.Log = tS._LogEnabled.bind(tS, tS.MessageLogLevel), tS.Warn = tS._LogEnabled.bind(tS, tS.WarningLogLevel), tS.Error = tS._LogEnabled.bind(tS, tS.ErrorLogLevel)
  },
  37144: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => xS
    });
    const tS = "undefined" !== typeof WeakRef;
    class bS {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(SS, HS, gS, tS)
      }
      initialize(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = SS, this.skipNextObservers = HS, this.target = gS, this.currentTarget = tS, this
      }
    }
    class XS {
      constructor(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = SS, this.mask = HS, this.scope = gS, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(SS)
      }
    }
    class xS {
      static FromPromise(SS, HS) {
        const gS = new xS;
        return SS.then((SS => {
          gS.notifyObservers(SS)
        })).catch((SS => {
          if (!HS) throw SS;
          HS.notifyObservers(SS)
        })), gS
      }
      get observers() {
        return this._observers
      }
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = HS, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new bS(0), SS && (this._onObserverAdded = SS)
      }
      add(SS) {
        let HS = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          gS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!SS) return null;
        const bS = new XS(SS, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        bS.unregisterOnNextCall = gS, HS ? this._observers.unshift(bS) : this._observers.push(bS), this._onObserverAdded && this._onObserverAdded(bS), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(bS, this._lastNotifiedValue);
        const xS = tS ? new WeakRef(this) : {
          deref: () => this
        };
        return bS._remove = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const HS = xS.deref();
          HS && (SS ? HS.remove(bS) : HS._remove(bS))
        }, bS
      }
      addOnce(SS) {
        return this.add(SS, void 0, void 0, void 0, !0)
      }
      remove(SS) {
        if (!SS) return !1;
        SS._remove = null;
        return -1 !== this._observers.indexOf(SS) && (this._deferUnregister(SS), !0)
      }
      removeCallback(SS, HS) {
        for (let gS = 0; gS < this._observers.length; gS++) {
          const tS = this._observers[gS];
          if (!tS._willBeUnregistered && (tS.callback === SS && (!HS || HS === tS.scope))) return this._deferUnregister(tS), !0
        }
        return !1
      }
      _deferUnregister(SS) {
        SS._willBeUnregistered || (this._numObserversMarkedAsDeleted++, SS.unregisterOnNextCall = !1, SS._willBeUnregistered = !0, setTimeout((() => {
          this._remove(SS)
        }), 0))
      }
      _remove(SS) {
        let HS = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!SS) return !1;
        const gS = this._observers.indexOf(SS);
        return -1 !== gS && (HS && this._numObserversMarkedAsDeleted--, this._observers.splice(gS, 1), !0)
      }
      makeObserverTopPriority(SS) {
        this._remove(SS, !1), this._observers.unshift(SS)
      }
      makeObserverBottomPriority(SS) {
        this._remove(SS, !1), this._observers.push(SS)
      }
      notifyObservers(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gS = arguments.length > 2 ? arguments[2] : void 0,
          tS = arguments.length > 3 ? arguments[3] : void 0,
          bS = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = SS), !this._observers.length) return !0;
        const XS = this._eventState;
        XS.mask = HS, XS.target = gS, XS.currentTarget = tS, XS.skipNextObservers = !1, XS.lastReturnValue = SS, XS.userInfo = bS;
        for (const xS of this._observers)
          if (!xS._willBeUnregistered && (xS.mask & HS && (xS.unregisterOnNextCall && this._deferUnregister(xS), xS.scope ? XS.lastReturnValue = xS.callback.apply(xS.scope, [SS, XS]) : XS.lastReturnValue = xS.callback(SS, XS)), XS.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(SS, HS) {
        let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = HS), SS._willBeUnregistered) return;
        const tS = this._eventState;
        tS.mask = gS, tS.skipNextObservers = !1, SS.unregisterOnNextCall && this._deferUnregister(SS), SS.callback(HS, tS)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const SS = this._observers.pop();
          SS && (SS._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const SS = new xS;
        return SS._observers = this._observers.slice(0), SS
      }
      hasSpecificMask() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const HS of this._observers)
          if (HS.mask & SS || HS.mask === SS) return !0;
        return !1
      }
    }
  },
  61307: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      AsyncLoop: () => tS.e,
      RegisterTools: () => tS.i,
      Tools: () => tS.k,
      className: () => tS.m
    });
    var tS = gS(40133);
    (0, tS.i)()
  },
  37164: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS,
      f: () => bS
    });
    const tS = {};

    function bS(SS, HS) {
      tS[SS] = HS
    }

    function XS(SS) {
      return tS[SS]
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);