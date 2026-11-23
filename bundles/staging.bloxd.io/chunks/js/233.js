export const id = 233;
export const ids = [233];
export const modules = {
  36985: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => wC
    });
    var QC = ZC(36987);
    class wC {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    wC.Instances = [], wC.OnEnginesDisposedObservable = new QC.d, wC._LastCreatedScene = null, wC.UseFallbackTexture = !0, wC.FallbackTexture = ""
  },
  38501: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(38507);
    const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
      ...CC
    } : null : CC.clone(zC) : null;
    class bC {
      static DeepCopy(CC, zC, ZC, bC) {
        let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fC = function(CC) {
          const zC = [];
          do {
            const ZC = Object.getOwnPropertyNames(CC);
            for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
          } while (CC = Object.getPrototypeOf(CC));
          return zC
        }(CC);
        for (const qC of fC) {
          if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
          if (qC.endsWith("Observable")) continue;
          if (ZC && -1 !== ZC.indexOf(qC)) continue;
          const fC = CC[qC],
            FC = typeof fC;
          if ("function" !== FC) try {
            if ("object" === FC)
              if (fC instanceof Uint8Array) zC[qC] = Uint8Array.from(fC);
              else if (fC instanceof Array) {
              if (zC[qC] = [], fC.length > 0)
                if ("object" == typeof fC[0])
                  for (let CC = 0; CC < fC.length; CC++) {
                    const ZC = wC(fC[CC], zC, nC); - 1 === zC[qC].indexOf(ZC) && zC[qC].push(ZC)
                  } else zC[qC] = fC.slice(0)
            } else zC[qC] = wC(fC, zC, nC);
            else zC[qC] = fC
          } catch (oC) {
            QC.c.Warn(oC.message)
          }
        }
      }
    }
  },
  37731: (CC, zC, ZC) => {
    function QC() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
        const zC = 16 * Math.random() | 0;
        return ("x" === CC ? zC : 3 & zC | 8).toString(16)
      }))
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  38507: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      static _CheckLimit(CC, zC) {
        let ZC = QC._LogLimitOutputs[CC];
        return ZC ? ZC.current++ : (ZC = {
          limit: zC,
          current: 1
        }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
      }
      static _GenerateLimitMessage(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZC = QC._LogLimitOutputs[CC];
        if (!ZC || !QC.MessageLimitReached) return;
        const wC = this._Levels[zC];
        ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
      }
      static _AddLogEntry(CC) {
        QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
      }
      static _FormatMessage(CC) {
        const zC = CC => CC < 10 ? "0" + CC : "" + CC,
          ZC = new Date;
        return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
      }
      static _LogDisabled(CC, zC) {}
      static _LogEnabled() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const wC = Array.isArray(zC) ? zC[0] : zC;
        if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
        const bC = QC._FormatMessage(wC),
          nC = this._Levels[CC],
          fC = Array.isArray(zC) ? zC.slice(1) : [];
        nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
        const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
        QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
      }
      static get LogCache() {
        return QC._LogCache
      }
      static ClearLogCache() {
        QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
      }
      static set LogLevels(CC) {
        QC.Log = QC._LogDisabled, QC.Warn = QC._LogDisabled, QC.Error = QC._LogDisabled;
        const zC = [QC.MessageLogLevel, QC.WarningLogLevel, QC.ErrorLogLevel];
        for (const ZC of zC)
          if ((CC & ZC) === ZC) {
            const CC = this._Levels[ZC];
            QC[CC.name] = QC._LogEnabled.bind(QC, ZC)
          }
      }
    }
    QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels = [{}, {
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
    }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
  },
  36987: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => nC
    });
    const QC = "undefined" !== typeof WeakRef;
    class wC {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(CC, zC, ZC, QC)
      }
      initialize(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = CC, this.skipNextObservers = zC, this.target = ZC, this.currentTarget = QC, this
      }
    }
    class bC {
      constructor(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = CC, this.mask = zC, this.scope = ZC, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(CC)
      }
    }
    class nC {
      static FromPromise(CC, zC) {
        const ZC = new nC;
        return CC.then((CC => {
          ZC.notifyObservers(CC)
        })).catch((CC => {
          if (!zC) throw CC;
          zC.notifyObservers(CC)
        })), ZC
      }
      get observers() {
        return this._observers
      }
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = zC, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new wC(0), CC && (this._onObserverAdded = CC)
      }
      add(CC) {
        let zC = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ZC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!CC) return null;
        const wC = new bC(CC, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        wC.unregisterOnNextCall = ZC, zC ? this._observers.unshift(wC) : this._observers.push(wC), this._onObserverAdded && this._onObserverAdded(wC), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(wC, this._lastNotifiedValue);
        const nC = QC ? new WeakRef(this) : {
          deref: () => this
        };
        return wC._remove = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const zC = nC.deref();
          zC && (CC ? zC.remove(wC) : zC._remove(wC))
        }, wC
      }
      addOnce(CC) {
        return this.add(CC, void 0, void 0, void 0, !0)
      }
      remove(CC) {
        if (!CC) return !1;
        CC._remove = null;
        return -1 !== this._observers.indexOf(CC) && (this._deferUnregister(CC), !0)
      }
      removeCallback(CC, zC) {
        for (let ZC = 0; ZC < this._observers.length; ZC++) {
          const QC = this._observers[ZC];
          if (!QC._willBeUnregistered && (QC.callback === CC && (!zC || zC === QC.scope))) return this._deferUnregister(QC), !0
        }
        return !1
      }
      _deferUnregister(CC) {
        CC._willBeUnregistered || (this._numObserversMarkedAsDeleted++, CC.unregisterOnNextCall = !1, CC._willBeUnregistered = !0, setTimeout((() => {
          this._remove(CC)
        }), 0))
      }
      _remove(CC) {
        let zC = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!CC) return !1;
        const ZC = this._observers.indexOf(CC);
        return -1 !== ZC && (zC && this._numObserversMarkedAsDeleted--, this._observers.splice(ZC, 1), !0)
      }
      makeObserverTopPriority(CC) {
        this._remove(CC, !1), this._observers.unshift(CC)
      }
      makeObserverBottomPriority(CC) {
        this._remove(CC, !1), this._observers.push(CC)
      }
      notifyObservers(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ZC = arguments.length > 2 ? arguments[2] : void 0,
          QC = arguments.length > 3 ? arguments[3] : void 0,
          wC = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = CC), !this._observers.length) return !0;
        const bC = this._eventState;
        bC.mask = zC, bC.target = ZC, bC.currentTarget = QC, bC.skipNextObservers = !1, bC.lastReturnValue = CC, bC.userInfo = wC;
        for (const nC of this._observers)
          if (!nC._willBeUnregistered && (nC.mask & zC && (nC.unregisterOnNextCall && this._deferUnregister(nC), nC.scope ? bC.lastReturnValue = nC.callback.apply(nC.scope, [CC, bC]) : bC.lastReturnValue = nC.callback(CC, bC)), bC.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(CC, zC) {
        let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = zC), CC._willBeUnregistered) return;
        const QC = this._eventState;
        QC.mask = ZC, QC.skipNextObservers = !1, CC.unregisterOnNextCall && this._deferUnregister(CC), CC.callback(zC, QC)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const CC = this._observers.pop();
          CC && (CC._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const CC = new nC;
        return CC._observers = this._observers.slice(0), CC
      }
      hasSpecificMask() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const zC of this._observers)
          if (zC.mask & CC || zC.mask === CC) return !0;
        return !1
      }
    }
  },
  60923: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      AsyncLoop: () => QC.d,
      RegisterTools: () => QC.e,
      Tools: () => QC.g,
      className: () => QC.i
    });
    var QC = ZC(39913);
    (0, QC.e)()
  },
  37002: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      d: () => wC
    });
    const QC = {};

    function wC(CC, zC) {
      QC[CC] = zC
    }

    function bC(CC) {
      return QC[CC]
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);