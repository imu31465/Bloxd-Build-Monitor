export const id = 228;
export const ids = [228];
export const modules = {
  36720: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(36722);
    class qQ {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    qQ.Instances = [], qQ.OnEnginesDisposedObservable = new LQ.e, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
  },
  38200: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(38203);
    const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(FQ) : null;
    class oQ {
      static DeepCopy(QQ, FQ, wQ, oQ) {
        let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kQ = function(QQ) {
          const FQ = [];
          do {
            const wQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return FQ
        }(QQ);
        for (const mQ of kQ) {
          if ("_" === mQ[0] && (!oQ || -1 === oQ.indexOf(mQ))) continue;
          if (mQ.endsWith("Observable")) continue;
          if (wQ && -1 !== wQ.indexOf(mQ)) continue;
          const kQ = QQ[mQ],
            uQ = typeof kQ;
          if ("function" !== uQ) try {
            if ("object" === uQ)
              if (kQ instanceof Uint8Array) FQ[mQ] = Uint8Array.from(kQ);
              else if (kQ instanceof Array) {
              if (FQ[mQ] = [], kQ.length > 0)
                if ("object" == typeof kQ[0])
                  for (let QQ = 0; QQ < kQ.length; QQ++) {
                    const wQ = qQ(kQ[QQ], FQ, DQ); - 1 === FQ[mQ].indexOf(wQ) && FQ[mQ].push(wQ)
                  } else FQ[mQ] = kQ.slice(0)
            } else FQ[mQ] = qQ(kQ, FQ, DQ);
            else FQ[mQ] = kQ
          } catch (vQ) {
            LQ.c.Warn(vQ.message)
          }
        }
      }
    }
  },
  37452: (QQ, FQ, wQ) => {
    function LQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const FQ = 16 * Math.random() | 0;
        return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
      }))
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  38203: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static _CheckLimit(QQ, FQ) {
        let wQ = LQ._LogLimitOutputs[QQ];
        return wQ ? wQ.current++ : (wQ = {
          limit: FQ,
          current: 1
        }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wQ = LQ._LogLimitOutputs[QQ];
        if (!wQ || !LQ.MessageLimitReached) return;
        const qQ = this._Levels[FQ];
        wQ.current === wQ.limit && LQ[qQ.name](LQ.MessageLimitReached.replace(/%LIMIT%/g, "" + wQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        LQ._LogCache = QQ + LQ._LogCache, LQ.OnNewCacheEntry && LQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const FQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          wQ = new Date;
        return "[" + FQ(wQ.getHours()) + ":" + FQ(wQ.getMinutes()) + ":" + FQ(wQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, FQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(FQ) ? FQ[0] : FQ;
        if (void 0 !== wQ && !LQ._CheckLimit(qQ, wQ)) return;
        const oQ = LQ._FormatMessage(qQ),
          DQ = this._Levels[QQ],
          kQ = Array.isArray(FQ) ? FQ.slice(1) : [];
        DQ.logFunc && DQ.logFunc("BJS - " + oQ, ...kQ);
        const vQ = `<div style='color:${DQ.color}'>${oQ}</div><br>`;
        LQ._AddLogEntry(vQ), LQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return LQ._LogCache
      }
      static ClearLogCache() {
        LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        LQ.Log = LQ._LogDisabled, LQ.Warn = LQ._LogDisabled, LQ.Error = LQ._LogDisabled;
        const FQ = [LQ.MessageLogLevel, LQ.WarningLogLevel, LQ.ErrorLogLevel];
        for (const wQ of FQ)
          if ((QQ & wQ) === wQ) {
            const QQ = this._Levels[wQ];
            LQ[QQ.name] = LQ._LogEnabled.bind(LQ, wQ)
          }
      }
    }
    LQ.NoneLogLevel = 0, LQ.MessageLogLevel = 1, LQ.WarningLogLevel = 2, LQ.ErrorLogLevel = 4, LQ.AllLogLevel = 7, LQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ._Levels = [{}, {
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
    }], LQ.errorsCount = 0, LQ.Log = LQ._LogEnabled.bind(LQ, LQ.MessageLogLevel), LQ.Warn = LQ._LogEnabled.bind(LQ, LQ.WarningLogLevel), LQ.Error = LQ._LogEnabled.bind(LQ, LQ.ErrorLogLevel)
  },
  36722: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      e: () => DQ
    });
    const LQ = "undefined" !== typeof WeakRef;
    class qQ {
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(QQ, FQ, wQ, LQ)
      }
      initialize(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = QQ, this.skipNextObservers = FQ, this.target = wQ, this.currentTarget = LQ, this
      }
    }
    class oQ {
      constructor(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = QQ, this.mask = FQ, this.scope = wQ, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(QQ)
      }
    }
    class DQ {
      static FromPromise(QQ, FQ) {
        const wQ = new DQ;
        return QQ.then((QQ => {
          wQ.notifyObservers(QQ)
        })).catch((QQ => {
          if (!FQ) throw QQ;
          FQ.notifyObservers(QQ)
        })), wQ
      }
      get observers() {
        return this._observers
      }
      constructor(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = FQ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qQ(0), QQ && (this._onObserverAdded = QQ)
      }
      add(QQ) {
        let FQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          wQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!QQ) return null;
        const qQ = new oQ(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        qQ.unregisterOnNextCall = wQ, FQ ? this._observers.unshift(qQ) : this._observers.push(qQ), this._onObserverAdded && this._onObserverAdded(qQ), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(qQ, this._lastNotifiedValue);
        const DQ = LQ ? new WeakRef(this) : {
          deref: () => this
        };
        return qQ._remove = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const FQ = DQ.deref();
          FQ && (QQ ? FQ.remove(qQ) : FQ._remove(qQ))
        }, qQ
      }
      addOnce(QQ) {
        return this.add(QQ, void 0, void 0, void 0, !0)
      }
      remove(QQ) {
        if (!QQ) return !1;
        QQ._remove = null;
        return -1 !== this._observers.indexOf(QQ) && (this._deferUnregister(QQ), !0)
      }
      removeCallback(QQ, FQ) {
        for (let wQ = 0; wQ < this._observers.length; wQ++) {
          const LQ = this._observers[wQ];
          if (!LQ._willBeUnregistered && (LQ.callback === QQ && (!FQ || FQ === LQ.scope))) return this._deferUnregister(LQ), !0
        }
        return !1
      }
      _deferUnregister(QQ) {
        QQ._willBeUnregistered || (this._numObserversMarkedAsDeleted++, QQ.unregisterOnNextCall = !1, QQ._willBeUnregistered = !0, setTimeout((() => {
          this._remove(QQ)
        }), 0))
      }
      _remove(QQ) {
        let FQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!QQ) return !1;
        const wQ = this._observers.indexOf(QQ);
        return -1 !== wQ && (FQ && this._numObserversMarkedAsDeleted--, this._observers.splice(wQ, 1), !0)
      }
      makeObserverTopPriority(QQ) {
        this._remove(QQ, !1), this._observers.unshift(QQ)
      }
      makeObserverBottomPriority(QQ) {
        this._remove(QQ, !1), this._observers.push(QQ)
      }
      notifyObservers(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          wQ = arguments.length > 2 ? arguments[2] : void 0,
          LQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = QQ), !this._observers.length) return !0;
        const oQ = this._eventState;
        oQ.mask = FQ, oQ.target = wQ, oQ.currentTarget = LQ, oQ.skipNextObservers = !1, oQ.lastReturnValue = QQ, oQ.userInfo = qQ;
        for (const DQ of this._observers)
          if (!DQ._willBeUnregistered && (DQ.mask & FQ && (DQ.unregisterOnNextCall && this._deferUnregister(DQ), DQ.scope ? oQ.lastReturnValue = DQ.callback.apply(DQ.scope, [QQ, oQ]) : oQ.lastReturnValue = DQ.callback(QQ, oQ)), oQ.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(QQ, FQ) {
        let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = FQ), QQ._willBeUnregistered) return;
        const LQ = this._eventState;
        LQ.mask = wQ, LQ.skipNextObservers = !1, QQ.unregisterOnNextCall && this._deferUnregister(QQ), QQ.callback(FQ, LQ)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const QQ = this._observers.pop();
          QQ && (QQ._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const QQ = new DQ;
        return QQ._observers = this._observers.slice(0), QQ
      }
      hasSpecificMask() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const FQ of this._observers)
          if (FQ.mask & QQ || FQ.mask === QQ) return !0;
        return !1
      }
    }
  },
  60631: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      AsyncLoop: () => LQ.d,
      RegisterTools: () => LQ.e,
      Tools: () => LQ.g,
      className: () => LQ.k
    });
    var LQ = wQ(39505);
    (0, LQ.e)()
  },
  36741: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      e: () => qQ
    });
    const LQ = {};

    function qQ(QQ, FQ) {
      LQ[QQ] = FQ
    }

    function oQ(QQ) {
      return LQ[QQ]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);