export const id = 238;
export const ids = [238];
export const modules = {
  37216: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => zT
    });
    var WT = mT(37219);
    class zT {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    zT.Instances = [], zT.OnEnginesDisposedObservable = new WT.d, zT._LastCreatedScene = null, zT.UseFallbackTexture = !0, zT.FallbackTexture = ""
  },
  38793: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(38800);
    const zT = (TT, UT, mT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : mT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(UT) : null;
    class MT {
      static DeepCopy(TT, UT, mT, MT) {
        let gT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const nT = function(TT) {
          const UT = [];
          do {
            const mT = Object.getOwnPropertyNames(TT);
            for (const TT of mT) - 1 === UT.indexOf(TT) && UT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return UT
        }(TT);
        for (const kT of nT) {
          if ("_" === kT[0] && (!MT || -1 === MT.indexOf(kT))) continue;
          if (kT.endsWith("Observable")) continue;
          if (mT && -1 !== mT.indexOf(kT)) continue;
          const nT = TT[kT],
            jT = typeof nT;
          if ("function" !== jT) try {
            if ("object" === jT)
              if (nT instanceof Uint8Array) UT[kT] = Uint8Array.from(nT);
              else if (nT instanceof Array) {
              if (UT[kT] = [], nT.length > 0)
                if ("object" == typeof nT[0])
                  for (let TT = 0; TT < nT.length; TT++) {
                    const mT = zT(nT[TT], UT, gT); - 1 === UT[kT].indexOf(mT) && UT[kT].push(mT)
                  } else UT[kT] = nT.slice(0)
            } else UT[kT] = zT(nT, UT, gT);
            else UT[kT] = nT
          } catch (HT) {
            WT.b.Warn(HT.message)
          }
        }
      }
    }
  },
  38045: (TT, UT, mT) => {
    function WT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const UT = 16 * Math.random() | 0;
        return ("x" === TT ? UT : 3 & UT | 8).toString(16)
      }))
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  38800: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      static _CheckLimit(TT, UT) {
        let mT = WT._LogLimitOutputs[TT];
        return mT ? mT.current++ : (mT = {
          limit: UT,
          current: 1
        }, WT._LogLimitOutputs[TT] = mT), mT.current <= mT.limit
      }
      static _GenerateLimitMessage(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const mT = WT._LogLimitOutputs[TT];
        if (!mT || !WT.MessageLimitReached) return;
        const zT = this._Levels[UT];
        mT.current === mT.limit && WT[zT.name](WT.MessageLimitReached.replace(/%LIMIT%/g, "" + mT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        WT._LogCache = TT + WT._LogCache, WT.OnNewCacheEntry && WT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const UT = TT => TT < 10 ? "0" + TT : "" + TT,
          mT = new Date;
        return "[" + UT(mT.getHours()) + ":" + UT(mT.getMinutes()) + ":" + UT(mT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, UT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(UT) ? UT[0] : UT;
        if (void 0 !== mT && !WT._CheckLimit(zT, mT)) return;
        const MT = WT._FormatMessage(zT),
          gT = this._Levels[TT],
          nT = Array.isArray(UT) ? UT.slice(1) : [];
        gT.logFunc && gT.logFunc("BJS - " + MT, ...nT);
        const HT = `<div style='color:${gT.color}'>${MT}</div><br>`;
        WT._AddLogEntry(HT), WT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return WT._LogCache
      }
      static ClearLogCache() {
        WT._LogCache = "", WT._LogLimitOutputs = {}, WT.errorsCount = 0
      }
      static set LogLevels(TT) {
        WT.Log = WT._LogDisabled, WT.Warn = WT._LogDisabled, WT.Error = WT._LogDisabled;
        const UT = [WT.MessageLogLevel, WT.WarningLogLevel, WT.ErrorLogLevel];
        for (const mT of UT)
          if ((TT & mT) === mT) {
            const TT = this._Levels[mT];
            WT[TT.name] = WT._LogEnabled.bind(WT, mT)
          }
      }
    }
    WT.NoneLogLevel = 0, WT.MessageLogLevel = 1, WT.WarningLogLevel = 2, WT.ErrorLogLevel = 4, WT.AllLogLevel = 7, WT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", WT._LogCache = "", WT._LogLimitOutputs = {}, WT._Levels = [{}, {
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
    }], WT.errorsCount = 0, WT.Log = WT._LogEnabled.bind(WT, WT.MessageLogLevel), WT.Warn = WT._LogEnabled.bind(WT, WT.WarningLogLevel), WT.Error = WT._LogEnabled.bind(WT, WT.ErrorLogLevel)
  },
  37219: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => gT
    });
    const WT = "undefined" !== typeof WeakRef;
    class zT {
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(TT, UT, mT, WT)
      }
      initialize(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = TT, this.skipNextObservers = UT, this.target = mT, this.currentTarget = WT, this
      }
    }
    class MT {
      constructor(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = TT, this.mask = UT, this.scope = mT, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(TT)
      }
    }
    class gT {
      static FromPromise(TT, UT) {
        const mT = new gT;
        return TT.then((TT => {
          mT.notifyObservers(TT)
        })).catch((TT => {
          if (!UT) throw TT;
          UT.notifyObservers(TT)
        })), mT
      }
      get observers() {
        return this._observers
      }
      constructor(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = UT, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new zT(0), TT && (this._onObserverAdded = TT)
      }
      add(TT) {
        let UT = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          mT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!TT) return null;
        const zT = new MT(TT, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        zT.unregisterOnNextCall = mT, UT ? this._observers.unshift(zT) : this._observers.push(zT), this._onObserverAdded && this._onObserverAdded(zT), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(zT, this._lastNotifiedValue);
        const gT = WT ? new WeakRef(this) : {
          deref: () => this
        };
        return zT._remove = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const UT = gT.deref();
          UT && (TT ? UT.remove(zT) : UT._remove(zT))
        }, zT
      }
      addOnce(TT) {
        return this.add(TT, void 0, void 0, void 0, !0)
      }
      remove(TT) {
        if (!TT) return !1;
        TT._remove = null;
        return -1 !== this._observers.indexOf(TT) && (this._deferUnregister(TT), !0)
      }
      removeCallback(TT, UT) {
        for (let mT = 0; mT < this._observers.length; mT++) {
          const WT = this._observers[mT];
          if (!WT._willBeUnregistered && (WT.callback === TT && (!UT || UT === WT.scope))) return this._deferUnregister(WT), !0
        }
        return !1
      }
      _deferUnregister(TT) {
        TT._willBeUnregistered || (this._numObserversMarkedAsDeleted++, TT.unregisterOnNextCall = !1, TT._willBeUnregistered = !0, setTimeout((() => {
          this._remove(TT)
        }), 0))
      }
      _remove(TT) {
        let UT = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!TT) return !1;
        const mT = this._observers.indexOf(TT);
        return -1 !== mT && (UT && this._numObserversMarkedAsDeleted--, this._observers.splice(mT, 1), !0)
      }
      makeObserverTopPriority(TT) {
        this._remove(TT, !1), this._observers.unshift(TT)
      }
      makeObserverBottomPriority(TT) {
        this._remove(TT, !1), this._observers.push(TT)
      }
      notifyObservers(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          mT = arguments.length > 2 ? arguments[2] : void 0,
          WT = arguments.length > 3 ? arguments[3] : void 0,
          zT = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = TT), !this._observers.length) return !0;
        const MT = this._eventState;
        MT.mask = UT, MT.target = mT, MT.currentTarget = WT, MT.skipNextObservers = !1, MT.lastReturnValue = TT, MT.userInfo = zT;
        for (const gT of this._observers)
          if (!gT._willBeUnregistered && (gT.mask & UT && (gT.unregisterOnNextCall && this._deferUnregister(gT), gT.scope ? MT.lastReturnValue = gT.callback.apply(gT.scope, [TT, MT]) : MT.lastReturnValue = gT.callback(TT, MT)), MT.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(TT, UT) {
        let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = UT), TT._willBeUnregistered) return;
        const WT = this._eventState;
        WT.mask = mT, WT.skipNextObservers = !1, TT.unregisterOnNextCall && this._deferUnregister(TT), TT.callback(UT, WT)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const TT = this._observers.pop();
          TT && (TT._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const TT = new gT;
        return TT._observers = this._observers.slice(0), TT
      }
      hasSpecificMask() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const UT of this._observers)
          if (UT.mask & TT || UT.mask === TT) return !0;
        return !1
      }
    }
  },
  61126: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      AsyncLoop: () => WT.c,
      RegisterTools: () => WT.f,
      Tools: () => WT.j,
      className: () => WT.m
    });
    var WT = mT(40201);
    (0, WT.f)()
  },
  37239: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => MT,
      h: () => zT
    });
    const WT = {};

    function zT(TT, UT) {
      WT[TT] = UT
    }

    function MT(TT) {
      return WT[TT]
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);