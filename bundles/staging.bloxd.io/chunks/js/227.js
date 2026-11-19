export const id = 227;
export const ids = [227];
export const modules = {
  36464: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => pD
    });
    var ID = cD(36473);
    class pD {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    pD.Instances = [], pD.OnEnginesDisposedObservable = new ID.c, pD._LastCreatedScene = null, pD.UseFallbackTexture = !0, pD.FallbackTexture = ""
  },
  38045: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(38048);
    const pD = (DD, CD, cD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : cD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(CD) : null;
    class iD {
      static DeepCopy(DD, CD, cD, iD) {
        let fD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bD = function(DD) {
          const CD = [];
          do {
            const cD = Object.getOwnPropertyNames(DD);
            for (const DD of cD) - 1 === CD.indexOf(DD) && CD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return CD
        }(DD);
        for (const wD of bD) {
          if ("_" === wD[0] && (!iD || -1 === iD.indexOf(wD))) continue;
          if (wD.endsWith("Observable")) continue;
          if (cD && -1 !== cD.indexOf(wD)) continue;
          const bD = DD[wD],
            SD = typeof bD;
          if ("function" !== SD) try {
            if ("object" === SD)
              if (bD instanceof Uint8Array) CD[wD] = Uint8Array.from(bD);
              else if (bD instanceof Array) {
              if (CD[wD] = [], bD.length > 0)
                if ("object" == typeof bD[0])
                  for (let DD = 0; DD < bD.length; DD++) {
                    const cD = pD(bD[DD], CD, fD); - 1 === CD[wD].indexOf(cD) && CD[wD].push(cD)
                  } else CD[wD] = bD.slice(0)
            } else CD[wD] = pD(bD, CD, fD);
            else CD[wD] = bD
          } catch (QD) {
            ID.e.Warn(QD.message)
          }
        }
      }
    }
  },
  37290: (DD, CD, cD) => {
    function ID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const CD = 16 * Math.random() | 0;
        return ("x" === DD ? CD : 3 & CD | 8).toString(16)
      }))
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  38048: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static _CheckLimit(DD, CD) {
        let cD = ID._LogLimitOutputs[DD];
        return cD ? cD.current++ : (cD = {
          limit: CD,
          current: 1
        }, ID._LogLimitOutputs[DD] = cD), cD.current <= cD.limit
      }
      static _GenerateLimitMessage(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cD = ID._LogLimitOutputs[DD];
        if (!cD || !ID.MessageLimitReached) return;
        const pD = this._Levels[CD];
        cD.current === cD.limit && ID[pD.name](ID.MessageLimitReached.replace(/%LIMIT%/g, "" + cD.limit).replace(/%TYPE%/g, pD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        ID._LogCache = DD + ID._LogCache, ID.OnNewCacheEntry && ID.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const CD = DD => DD < 10 ? "0" + DD : "" + DD,
          cD = new Date;
        return "[" + CD(cD.getHours()) + ":" + CD(cD.getMinutes()) + ":" + CD(cD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, CD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = Array.isArray(CD) ? CD[0] : CD;
        if (void 0 !== cD && !ID._CheckLimit(pD, cD)) return;
        const iD = ID._FormatMessage(pD),
          fD = this._Levels[DD],
          bD = Array.isArray(CD) ? CD.slice(1) : [];
        fD.logFunc && fD.logFunc("BJS - " + iD, ...bD);
        const QD = `<div style='color:${fD.color}'>${iD}</div><br>`;
        ID._AddLogEntry(QD), ID._GenerateLimitMessage(pD, DD)
      }
      static get LogCache() {
        return ID._LogCache
      }
      static ClearLogCache() {
        ID._LogCache = "", ID._LogLimitOutputs = {}, ID.errorsCount = 0
      }
      static set LogLevels(DD) {
        ID.Log = ID._LogDisabled, ID.Warn = ID._LogDisabled, ID.Error = ID._LogDisabled;
        const CD = [ID.MessageLogLevel, ID.WarningLogLevel, ID.ErrorLogLevel];
        for (const cD of CD)
          if ((DD & cD) === cD) {
            const DD = this._Levels[cD];
            ID[DD.name] = ID._LogEnabled.bind(ID, cD)
          }
      }
    }
    ID.NoneLogLevel = 0, ID.MessageLogLevel = 1, ID.WarningLogLevel = 2, ID.ErrorLogLevel = 4, ID.AllLogLevel = 7, ID.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ID._LogCache = "", ID._LogLimitOutputs = {}, ID._Levels = [{}, {
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
    }], ID.errorsCount = 0, ID.Log = ID._LogEnabled.bind(ID, ID.MessageLogLevel), ID.Warn = ID._LogEnabled.bind(ID, ID.WarningLogLevel), ID.Error = ID._LogEnabled.bind(ID, ID.ErrorLogLevel)
  },
  36473: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => fD
    });
    const ID = "undefined" !== typeof WeakRef;
    class pD {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(DD, CD, cD, ID)
      }
      initialize(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = DD, this.skipNextObservers = CD, this.target = cD, this.currentTarget = ID, this
      }
    }
    class iD {
      constructor(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = DD, this.mask = CD, this.scope = cD, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(DD)
      }
    }
    class fD {
      static FromPromise(DD, CD) {
        const cD = new fD;
        return DD.then((DD => {
          cD.notifyObservers(DD)
        })).catch((DD => {
          if (!CD) throw DD;
          CD.notifyObservers(DD)
        })), cD
      }
      get observers() {
        return this._observers
      }
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = CD, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new pD(0), DD && (this._onObserverAdded = DD)
      }
      add(DD) {
        let CD = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!DD) return null;
        const pD = new iD(DD, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        pD.unregisterOnNextCall = cD, CD ? this._observers.unshift(pD) : this._observers.push(pD), this._onObserverAdded && this._onObserverAdded(pD), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(pD, this._lastNotifiedValue);
        const fD = ID ? new WeakRef(this) : {
          deref: () => this
        };
        return pD._remove = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const CD = fD.deref();
          CD && (DD ? CD.remove(pD) : CD._remove(pD))
        }, pD
      }
      addOnce(DD) {
        return this.add(DD, void 0, void 0, void 0, !0)
      }
      remove(DD) {
        if (!DD) return !1;
        DD._remove = null;
        return -1 !== this._observers.indexOf(DD) && (this._deferUnregister(DD), !0)
      }
      removeCallback(DD, CD) {
        for (let cD = 0; cD < this._observers.length; cD++) {
          const ID = this._observers[cD];
          if (!ID._willBeUnregistered && (ID.callback === DD && (!CD || CD === ID.scope))) return this._deferUnregister(ID), !0
        }
        return !1
      }
      _deferUnregister(DD) {
        DD._willBeUnregistered || (this._numObserversMarkedAsDeleted++, DD.unregisterOnNextCall = !1, DD._willBeUnregistered = !0, setTimeout((() => {
          this._remove(DD)
        }), 0))
      }
      _remove(DD) {
        let CD = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!DD) return !1;
        const cD = this._observers.indexOf(DD);
        return -1 !== cD && (CD && this._numObserversMarkedAsDeleted--, this._observers.splice(cD, 1), !0)
      }
      makeObserverTopPriority(DD) {
        this._remove(DD, !1), this._observers.unshift(DD)
      }
      makeObserverBottomPriority(DD) {
        this._remove(DD, !1), this._observers.push(DD)
      }
      notifyObservers(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cD = arguments.length > 2 ? arguments[2] : void 0,
          ID = arguments.length > 3 ? arguments[3] : void 0,
          pD = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = DD), !this._observers.length) return !0;
        const iD = this._eventState;
        iD.mask = CD, iD.target = cD, iD.currentTarget = ID, iD.skipNextObservers = !1, iD.lastReturnValue = DD, iD.userInfo = pD;
        for (const fD of this._observers)
          if (!fD._willBeUnregistered && (fD.mask & CD && (fD.unregisterOnNextCall && this._deferUnregister(fD), fD.scope ? iD.lastReturnValue = fD.callback.apply(fD.scope, [DD, iD]) : iD.lastReturnValue = fD.callback(DD, iD)), iD.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(DD, CD) {
        let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = CD), DD._willBeUnregistered) return;
        const ID = this._eventState;
        ID.mask = cD, ID.skipNextObservers = !1, DD.unregisterOnNextCall && this._deferUnregister(DD), DD.callback(CD, ID)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const DD = this._observers.pop();
          DD && (DD._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const DD = new fD;
        return DD._observers = this._observers.slice(0), DD
      }
      hasSpecificMask() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const CD of this._observers)
          if (CD.mask & DD || CD.mask === DD) return !0;
        return !1
      }
    }
  },
  60375: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      AsyncLoop: () => ID.d,
      RegisterTools: () => ID.e,
      Tools: () => ID.g,
      className: () => ID.h
    });
    var ID = cD(39245);
    (0, ID.e)()
  },
  36488: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => pD
    });
    const ID = {};

    function pD(DD, CD) {
      ID[DD] = CD
    }

    function iD(DD) {
      return ID[DD]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);