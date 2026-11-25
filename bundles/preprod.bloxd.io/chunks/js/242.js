export const id = 242;
export const ids = [242];
export const modules = {
  37392: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => qQ
    });
    var wQ = XQ(37399);
    class qQ {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    qQ.Instances = [], qQ.OnEnginesDisposedObservable = new wQ.b, qQ._LastCreatedScene = null, qQ.UseFallbackTexture = !0, qQ.FallbackTexture = ""
  },
  38947: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(38956);
    const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(WQ) : null;
    class TQ {
      static DeepCopy(QQ, WQ, XQ, TQ) {
        let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sQ = function(QQ) {
          const WQ = [];
          do {
            const XQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return WQ
        }(QQ);
        for (const PQ of sQ) {
          if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
          if (PQ.endsWith("Observable")) continue;
          if (XQ && -1 !== XQ.indexOf(PQ)) continue;
          const sQ = QQ[PQ],
            gQ = typeof sQ;
          if ("function" !== gQ) try {
            if ("object" === gQ)
              if (sQ instanceof Uint8Array) WQ[PQ] = Uint8Array.from(sQ);
              else if (sQ instanceof Array) {
              if (WQ[PQ] = [], sQ.length > 0)
                if ("object" == typeof sQ[0])
                  for (let QQ = 0; QQ < sQ.length; QQ++) {
                    const XQ = qQ(sQ[QQ], WQ, zQ); - 1 === WQ[PQ].indexOf(XQ) && WQ[PQ].push(XQ)
                  } else WQ[PQ] = sQ.slice(0)
            } else WQ[PQ] = qQ(sQ, WQ, zQ);
            else WQ[PQ] = sQ
          } catch (FQ) {
            wQ.b.Warn(FQ.message)
          }
        }
      }
    }
  },
  38191: (QQ, WQ, XQ) => {
    function wQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const WQ = 16 * Math.random() | 0;
        return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
      }))
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  38956: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static _CheckLimit(QQ, WQ) {
        let XQ = wQ._LogLimitOutputs[QQ];
        return XQ ? XQ.current++ : (XQ = {
          limit: WQ,
          current: 1
        }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const XQ = wQ._LogLimitOutputs[QQ];
        if (!XQ || !wQ.MessageLimitReached) return;
        const qQ = this._Levels[WQ];
        XQ.current === XQ.limit && wQ[qQ.name](wQ.MessageLimitReached.replace(/%LIMIT%/g, "" + XQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        wQ._LogCache = QQ + wQ._LogCache, wQ.OnNewCacheEntry && wQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          XQ = new Date;
        return "[" + WQ(XQ.getHours()) + ":" + WQ(XQ.getMinutes()) + ":" + WQ(XQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, WQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(WQ) ? WQ[0] : WQ;
        if (void 0 !== XQ && !wQ._CheckLimit(qQ, XQ)) return;
        const TQ = wQ._FormatMessage(qQ),
          zQ = this._Levels[QQ],
          sQ = Array.isArray(WQ) ? WQ.slice(1) : [];
        zQ.logFunc && zQ.logFunc("BJS - " + TQ, ...sQ);
        const FQ = `<div style='color:${zQ.color}'>${TQ}</div><br>`;
        wQ._AddLogEntry(FQ), wQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return wQ._LogCache
      }
      static ClearLogCache() {
        wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        wQ.Log = wQ._LogDisabled, wQ.Warn = wQ._LogDisabled, wQ.Error = wQ._LogDisabled;
        const WQ = [wQ.MessageLogLevel, wQ.WarningLogLevel, wQ.ErrorLogLevel];
        for (const XQ of WQ)
          if ((QQ & XQ) === XQ) {
            const QQ = this._Levels[XQ];
            wQ[QQ.name] = wQ._LogEnabled.bind(wQ, XQ)
          }
      }
    }
    wQ.NoneLogLevel = 0, wQ.MessageLogLevel = 1, wQ.WarningLogLevel = 2, wQ.ErrorLogLevel = 4, wQ.AllLogLevel = 7, wQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ._Levels = [{}, {
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
    }], wQ.errorsCount = 0, wQ.Log = wQ._LogEnabled.bind(wQ, wQ.MessageLogLevel), wQ.Warn = wQ._LogEnabled.bind(wQ, wQ.WarningLogLevel), wQ.Error = wQ._LogEnabled.bind(wQ, wQ.ErrorLogLevel)
  },
  37399: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => zQ
    });
    const wQ = "undefined" !== typeof WeakRef;
    class qQ {
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(QQ, WQ, XQ, wQ)
      }
      initialize(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = QQ, this.skipNextObservers = WQ, this.target = XQ, this.currentTarget = wQ, this
      }
    }
    class TQ {
      constructor(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = QQ, this.mask = WQ, this.scope = XQ, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(QQ)
      }
    }
    class zQ {
      static FromPromise(QQ, WQ) {
        const XQ = new zQ;
        return QQ.then((QQ => {
          XQ.notifyObservers(QQ)
        })).catch((QQ => {
          if (!WQ) throw QQ;
          WQ.notifyObservers(QQ)
        })), XQ
      }
      get observers() {
        return this._observers
      }
      constructor(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = WQ, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new qQ(0), QQ && (this._onObserverAdded = QQ)
      }
      add(QQ) {
        let WQ = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          XQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!QQ) return null;
        const qQ = new TQ(QQ, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        qQ.unregisterOnNextCall = XQ, WQ ? this._observers.unshift(qQ) : this._observers.push(qQ), this._onObserverAdded && this._onObserverAdded(qQ), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(qQ, this._lastNotifiedValue);
        const zQ = wQ ? new WeakRef(this) : {
          deref: () => this
        };
        return qQ._remove = function() {
          let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const WQ = zQ.deref();
          WQ && (QQ ? WQ.remove(qQ) : WQ._remove(qQ))
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
      removeCallback(QQ, WQ) {
        for (let XQ = 0; XQ < this._observers.length; XQ++) {
          const wQ = this._observers[XQ];
          if (!wQ._willBeUnregistered && (wQ.callback === QQ && (!WQ || WQ === wQ.scope))) return this._deferUnregister(wQ), !0
        }
        return !1
      }
      _deferUnregister(QQ) {
        QQ._willBeUnregistered || (this._numObserversMarkedAsDeleted++, QQ.unregisterOnNextCall = !1, QQ._willBeUnregistered = !0, setTimeout((() => {
          this._remove(QQ)
        }), 0))
      }
      _remove(QQ) {
        let WQ = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!QQ) return !1;
        const XQ = this._observers.indexOf(QQ);
        return -1 !== XQ && (WQ && this._numObserversMarkedAsDeleted--, this._observers.splice(XQ, 1), !0)
      }
      makeObserverTopPriority(QQ) {
        this._remove(QQ, !1), this._observers.unshift(QQ)
      }
      makeObserverBottomPriority(QQ) {
        this._remove(QQ, !1), this._observers.push(QQ)
      }
      notifyObservers(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          XQ = arguments.length > 2 ? arguments[2] : void 0,
          wQ = arguments.length > 3 ? arguments[3] : void 0,
          qQ = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = QQ), !this._observers.length) return !0;
        const TQ = this._eventState;
        TQ.mask = WQ, TQ.target = XQ, TQ.currentTarget = wQ, TQ.skipNextObservers = !1, TQ.lastReturnValue = QQ, TQ.userInfo = qQ;
        for (const zQ of this._observers)
          if (!zQ._willBeUnregistered && (zQ.mask & WQ && (zQ.unregisterOnNextCall && this._deferUnregister(zQ), zQ.scope ? TQ.lastReturnValue = zQ.callback.apply(zQ.scope, [QQ, TQ]) : TQ.lastReturnValue = zQ.callback(QQ, TQ)), TQ.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(QQ, WQ) {
        let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = WQ), QQ._willBeUnregistered) return;
        const wQ = this._eventState;
        wQ.mask = XQ, wQ.skipNextObservers = !1, QQ.unregisterOnNextCall && this._deferUnregister(QQ), QQ.callback(WQ, wQ)
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
        const QQ = new zQ;
        return QQ._observers = this._observers.slice(0), QQ
      }
      hasSpecificMask() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const WQ of this._observers)
          if (WQ.mask & QQ || WQ.mask === QQ) return !0;
        return !1
      }
    }
  },
  61523: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      AsyncLoop: () => wQ.c,
      RegisterTools: () => wQ.f,
      Tools: () => wQ.g,
      className: () => wQ.k
    });
    var wQ = XQ(40357);
    (0, wQ.f)()
  },
  37418: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      d: () => qQ
    });
    const wQ = {};

    function qQ(QQ, WQ) {
      wQ[QQ] = WQ
    }

    function TQ(QQ) {
      return wQ[QQ]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);